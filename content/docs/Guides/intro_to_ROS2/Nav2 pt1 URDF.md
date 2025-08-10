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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNOEDFU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7UYAKXIi2I%2FdPtvne%2FQOnMqaPIk%2B2mQvFU5mZi2iUhAiEAk12IX9eCDu0jOREkEP8GOlApaMU08fOjq5gC5357XPsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrgxZcfw5Jmfb8eqSrcA%2F9K8maQlj6puTxpAalU2G7WltbdzD3L3E0qPCS4lS2YKCihei7Kige%2BH0iWJqOM2tTrByklSWsmRoEeTSjU5rr6BqsgJL7Ejpq9psGqpiTadg0Bo9u59IKBqct2s6A%2FaZQkQr5mvhnqmwGdN60C36c8p8IFa4Bxj%2BEOak5b6BVWB%2B6MY0ZmdUHENBmaYQlW%2F%2FBq9VKt1op%2FlEnP3sW0viiwvpfTVdNgE%2FP%2FEIFNekXPsNfW7iqjmnsmr6v4dwE42Du986gu%2BfFiNl8H7hvtbtSQAQJItjjmZZCDxS81tTZYhbFaGk2QaWOulFEVlj0UeTwXTmYvll8GitF%2F%2BVuxdPGD9w%2FK21BsyWnHTkjxl3EBBAKpsv6R7s3MeUfkW9lZby3MrC4AcOQBGCheXo60qWhOuVmvG4LzhGumbBVYHGiYfq0jdVX3qYg0trEqHXQc3Ch4pcwD14Yxcuc86g%2FWWazJb%2Bd%2BV%2FCPmhH2HVY9jhly1yDHtwNWy0gQ7LCDpnV3X4etHIMuc2hLnlMrclDnQLzQe1yTdG%2BSQTKvuvySQSRtyVeFG73MjEgAeqtZL1ovYW3VntaRkF%2FWq0jYEBHZpfTP%2BCMB9PQZvPNBFOFrCHos6HpY5LPigPl%2FPdTwMIbv4cQGOqUBDE8jEPJGbQzfvDkKJX5Z1kRnEVCnlMo97kKe6p0T49TQKKUzvz6SG9pe22ZW1x7zmiRR8qds0SaV%2FWqYxXIofS0mvDNB9nPXT5vMBmO7IRiqlAvEH8u%2FakeR6orvB%2Fgc64B7QCzEQQaCfICfuDLabO5eMkAJVCgN3ZumDknuJDE05mvFCa027Avb280kTbaxaBNlIBgdvKzsYQIO%2B4oiKcj5RYRe&X-Amz-Signature=f0dc1eeddb29f26bdf93145567cb8293d0e51f4e1cb3e3684af77d8274397dd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNOEDFU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7UYAKXIi2I%2FdPtvne%2FQOnMqaPIk%2B2mQvFU5mZi2iUhAiEAk12IX9eCDu0jOREkEP8GOlApaMU08fOjq5gC5357XPsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrgxZcfw5Jmfb8eqSrcA%2F9K8maQlj6puTxpAalU2G7WltbdzD3L3E0qPCS4lS2YKCihei7Kige%2BH0iWJqOM2tTrByklSWsmRoEeTSjU5rr6BqsgJL7Ejpq9psGqpiTadg0Bo9u59IKBqct2s6A%2FaZQkQr5mvhnqmwGdN60C36c8p8IFa4Bxj%2BEOak5b6BVWB%2B6MY0ZmdUHENBmaYQlW%2F%2FBq9VKt1op%2FlEnP3sW0viiwvpfTVdNgE%2FP%2FEIFNekXPsNfW7iqjmnsmr6v4dwE42Du986gu%2BfFiNl8H7hvtbtSQAQJItjjmZZCDxS81tTZYhbFaGk2QaWOulFEVlj0UeTwXTmYvll8GitF%2F%2BVuxdPGD9w%2FK21BsyWnHTkjxl3EBBAKpsv6R7s3MeUfkW9lZby3MrC4AcOQBGCheXo60qWhOuVmvG4LzhGumbBVYHGiYfq0jdVX3qYg0trEqHXQc3Ch4pcwD14Yxcuc86g%2FWWazJb%2Bd%2BV%2FCPmhH2HVY9jhly1yDHtwNWy0gQ7LCDpnV3X4etHIMuc2hLnlMrclDnQLzQe1yTdG%2BSQTKvuvySQSRtyVeFG73MjEgAeqtZL1ovYW3VntaRkF%2FWq0jYEBHZpfTP%2BCMB9PQZvPNBFOFrCHos6HpY5LPigPl%2FPdTwMIbv4cQGOqUBDE8jEPJGbQzfvDkKJX5Z1kRnEVCnlMo97kKe6p0T49TQKKUzvz6SG9pe22ZW1x7zmiRR8qds0SaV%2FWqYxXIofS0mvDNB9nPXT5vMBmO7IRiqlAvEH8u%2FakeR6orvB%2Fgc64B7QCzEQQaCfICfuDLabO5eMkAJVCgN3ZumDknuJDE05mvFCa027Avb280kTbaxaBNlIBgdvKzsYQIO%2B4oiKcj5RYRe&X-Amz-Signature=80450a3b8a17ae2cb57dde23f7e5ea7e50472f44c8581a70799519efdd68fa30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNOEDFU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7UYAKXIi2I%2FdPtvne%2FQOnMqaPIk%2B2mQvFU5mZi2iUhAiEAk12IX9eCDu0jOREkEP8GOlApaMU08fOjq5gC5357XPsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrgxZcfw5Jmfb8eqSrcA%2F9K8maQlj6puTxpAalU2G7WltbdzD3L3E0qPCS4lS2YKCihei7Kige%2BH0iWJqOM2tTrByklSWsmRoEeTSjU5rr6BqsgJL7Ejpq9psGqpiTadg0Bo9u59IKBqct2s6A%2FaZQkQr5mvhnqmwGdN60C36c8p8IFa4Bxj%2BEOak5b6BVWB%2B6MY0ZmdUHENBmaYQlW%2F%2FBq9VKt1op%2FlEnP3sW0viiwvpfTVdNgE%2FP%2FEIFNekXPsNfW7iqjmnsmr6v4dwE42Du986gu%2BfFiNl8H7hvtbtSQAQJItjjmZZCDxS81tTZYhbFaGk2QaWOulFEVlj0UeTwXTmYvll8GitF%2F%2BVuxdPGD9w%2FK21BsyWnHTkjxl3EBBAKpsv6R7s3MeUfkW9lZby3MrC4AcOQBGCheXo60qWhOuVmvG4LzhGumbBVYHGiYfq0jdVX3qYg0trEqHXQc3Ch4pcwD14Yxcuc86g%2FWWazJb%2Bd%2BV%2FCPmhH2HVY9jhly1yDHtwNWy0gQ7LCDpnV3X4etHIMuc2hLnlMrclDnQLzQe1yTdG%2BSQTKvuvySQSRtyVeFG73MjEgAeqtZL1ovYW3VntaRkF%2FWq0jYEBHZpfTP%2BCMB9PQZvPNBFOFrCHos6HpY5LPigPl%2FPdTwMIbv4cQGOqUBDE8jEPJGbQzfvDkKJX5Z1kRnEVCnlMo97kKe6p0T49TQKKUzvz6SG9pe22ZW1x7zmiRR8qds0SaV%2FWqYxXIofS0mvDNB9nPXT5vMBmO7IRiqlAvEH8u%2FakeR6orvB%2Fgc64B7QCzEQQaCfICfuDLabO5eMkAJVCgN3ZumDknuJDE05mvFCa027Avb280kTbaxaBNlIBgdvKzsYQIO%2B4oiKcj5RYRe&X-Amz-Signature=a5101904d40528cdc205b06dabe80a90ff2e5def99f5072790819b8bbea72883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNOEDFU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7UYAKXIi2I%2FdPtvne%2FQOnMqaPIk%2B2mQvFU5mZi2iUhAiEAk12IX9eCDu0jOREkEP8GOlApaMU08fOjq5gC5357XPsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrgxZcfw5Jmfb8eqSrcA%2F9K8maQlj6puTxpAalU2G7WltbdzD3L3E0qPCS4lS2YKCihei7Kige%2BH0iWJqOM2tTrByklSWsmRoEeTSjU5rr6BqsgJL7Ejpq9psGqpiTadg0Bo9u59IKBqct2s6A%2FaZQkQr5mvhnqmwGdN60C36c8p8IFa4Bxj%2BEOak5b6BVWB%2B6MY0ZmdUHENBmaYQlW%2F%2FBq9VKt1op%2FlEnP3sW0viiwvpfTVdNgE%2FP%2FEIFNekXPsNfW7iqjmnsmr6v4dwE42Du986gu%2BfFiNl8H7hvtbtSQAQJItjjmZZCDxS81tTZYhbFaGk2QaWOulFEVlj0UeTwXTmYvll8GitF%2F%2BVuxdPGD9w%2FK21BsyWnHTkjxl3EBBAKpsv6R7s3MeUfkW9lZby3MrC4AcOQBGCheXo60qWhOuVmvG4LzhGumbBVYHGiYfq0jdVX3qYg0trEqHXQc3Ch4pcwD14Yxcuc86g%2FWWazJb%2Bd%2BV%2FCPmhH2HVY9jhly1yDHtwNWy0gQ7LCDpnV3X4etHIMuc2hLnlMrclDnQLzQe1yTdG%2BSQTKvuvySQSRtyVeFG73MjEgAeqtZL1ovYW3VntaRkF%2FWq0jYEBHZpfTP%2BCMB9PQZvPNBFOFrCHos6HpY5LPigPl%2FPdTwMIbv4cQGOqUBDE8jEPJGbQzfvDkKJX5Z1kRnEVCnlMo97kKe6p0T49TQKKUzvz6SG9pe22ZW1x7zmiRR8qds0SaV%2FWqYxXIofS0mvDNB9nPXT5vMBmO7IRiqlAvEH8u%2FakeR6orvB%2Fgc64B7QCzEQQaCfICfuDLabO5eMkAJVCgN3ZumDknuJDE05mvFCa027Avb280kTbaxaBNlIBgdvKzsYQIO%2B4oiKcj5RYRe&X-Amz-Signature=58d806ad3fda3bb998707507bd5849e5da8826d7285dae55fc2b7800342cfdb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNOEDFU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7UYAKXIi2I%2FdPtvne%2FQOnMqaPIk%2B2mQvFU5mZi2iUhAiEAk12IX9eCDu0jOREkEP8GOlApaMU08fOjq5gC5357XPsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrgxZcfw5Jmfb8eqSrcA%2F9K8maQlj6puTxpAalU2G7WltbdzD3L3E0qPCS4lS2YKCihei7Kige%2BH0iWJqOM2tTrByklSWsmRoEeTSjU5rr6BqsgJL7Ejpq9psGqpiTadg0Bo9u59IKBqct2s6A%2FaZQkQr5mvhnqmwGdN60C36c8p8IFa4Bxj%2BEOak5b6BVWB%2B6MY0ZmdUHENBmaYQlW%2F%2FBq9VKt1op%2FlEnP3sW0viiwvpfTVdNgE%2FP%2FEIFNekXPsNfW7iqjmnsmr6v4dwE42Du986gu%2BfFiNl8H7hvtbtSQAQJItjjmZZCDxS81tTZYhbFaGk2QaWOulFEVlj0UeTwXTmYvll8GitF%2F%2BVuxdPGD9w%2FK21BsyWnHTkjxl3EBBAKpsv6R7s3MeUfkW9lZby3MrC4AcOQBGCheXo60qWhOuVmvG4LzhGumbBVYHGiYfq0jdVX3qYg0trEqHXQc3Ch4pcwD14Yxcuc86g%2FWWazJb%2Bd%2BV%2FCPmhH2HVY9jhly1yDHtwNWy0gQ7LCDpnV3X4etHIMuc2hLnlMrclDnQLzQe1yTdG%2BSQTKvuvySQSRtyVeFG73MjEgAeqtZL1ovYW3VntaRkF%2FWq0jYEBHZpfTP%2BCMB9PQZvPNBFOFrCHos6HpY5LPigPl%2FPdTwMIbv4cQGOqUBDE8jEPJGbQzfvDkKJX5Z1kRnEVCnlMo97kKe6p0T49TQKKUzvz6SG9pe22ZW1x7zmiRR8qds0SaV%2FWqYxXIofS0mvDNB9nPXT5vMBmO7IRiqlAvEH8u%2FakeR6orvB%2Fgc64B7QCzEQQaCfICfuDLabO5eMkAJVCgN3ZumDknuJDE05mvFCa027Avb280kTbaxaBNlIBgdvKzsYQIO%2B4oiKcj5RYRe&X-Amz-Signature=1edef482b153257f4fff146e29de449e83631bc5f1e9358c7585860f79cb8d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNOEDFU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7UYAKXIi2I%2FdPtvne%2FQOnMqaPIk%2B2mQvFU5mZi2iUhAiEAk12IX9eCDu0jOREkEP8GOlApaMU08fOjq5gC5357XPsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrgxZcfw5Jmfb8eqSrcA%2F9K8maQlj6puTxpAalU2G7WltbdzD3L3E0qPCS4lS2YKCihei7Kige%2BH0iWJqOM2tTrByklSWsmRoEeTSjU5rr6BqsgJL7Ejpq9psGqpiTadg0Bo9u59IKBqct2s6A%2FaZQkQr5mvhnqmwGdN60C36c8p8IFa4Bxj%2BEOak5b6BVWB%2B6MY0ZmdUHENBmaYQlW%2F%2FBq9VKt1op%2FlEnP3sW0viiwvpfTVdNgE%2FP%2FEIFNekXPsNfW7iqjmnsmr6v4dwE42Du986gu%2BfFiNl8H7hvtbtSQAQJItjjmZZCDxS81tTZYhbFaGk2QaWOulFEVlj0UeTwXTmYvll8GitF%2F%2BVuxdPGD9w%2FK21BsyWnHTkjxl3EBBAKpsv6R7s3MeUfkW9lZby3MrC4AcOQBGCheXo60qWhOuVmvG4LzhGumbBVYHGiYfq0jdVX3qYg0trEqHXQc3Ch4pcwD14Yxcuc86g%2FWWazJb%2Bd%2BV%2FCPmhH2HVY9jhly1yDHtwNWy0gQ7LCDpnV3X4etHIMuc2hLnlMrclDnQLzQe1yTdG%2BSQTKvuvySQSRtyVeFG73MjEgAeqtZL1ovYW3VntaRkF%2FWq0jYEBHZpfTP%2BCMB9PQZvPNBFOFrCHos6HpY5LPigPl%2FPdTwMIbv4cQGOqUBDE8jEPJGbQzfvDkKJX5Z1kRnEVCnlMo97kKe6p0T49TQKKUzvz6SG9pe22ZW1x7zmiRR8qds0SaV%2FWqYxXIofS0mvDNB9nPXT5vMBmO7IRiqlAvEH8u%2FakeR6orvB%2Fgc64B7QCzEQQaCfICfuDLabO5eMkAJVCgN3ZumDknuJDE05mvFCa027Avb280kTbaxaBNlIBgdvKzsYQIO%2B4oiKcj5RYRe&X-Amz-Signature=a5db442d731c7db51a592fd7d8133a00008ab8fe299e9d78f53814c8604b4a31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNOEDFU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7UYAKXIi2I%2FdPtvne%2FQOnMqaPIk%2B2mQvFU5mZi2iUhAiEAk12IX9eCDu0jOREkEP8GOlApaMU08fOjq5gC5357XPsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrgxZcfw5Jmfb8eqSrcA%2F9K8maQlj6puTxpAalU2G7WltbdzD3L3E0qPCS4lS2YKCihei7Kige%2BH0iWJqOM2tTrByklSWsmRoEeTSjU5rr6BqsgJL7Ejpq9psGqpiTadg0Bo9u59IKBqct2s6A%2FaZQkQr5mvhnqmwGdN60C36c8p8IFa4Bxj%2BEOak5b6BVWB%2B6MY0ZmdUHENBmaYQlW%2F%2FBq9VKt1op%2FlEnP3sW0viiwvpfTVdNgE%2FP%2FEIFNekXPsNfW7iqjmnsmr6v4dwE42Du986gu%2BfFiNl8H7hvtbtSQAQJItjjmZZCDxS81tTZYhbFaGk2QaWOulFEVlj0UeTwXTmYvll8GitF%2F%2BVuxdPGD9w%2FK21BsyWnHTkjxl3EBBAKpsv6R7s3MeUfkW9lZby3MrC4AcOQBGCheXo60qWhOuVmvG4LzhGumbBVYHGiYfq0jdVX3qYg0trEqHXQc3Ch4pcwD14Yxcuc86g%2FWWazJb%2Bd%2BV%2FCPmhH2HVY9jhly1yDHtwNWy0gQ7LCDpnV3X4etHIMuc2hLnlMrclDnQLzQe1yTdG%2BSQTKvuvySQSRtyVeFG73MjEgAeqtZL1ovYW3VntaRkF%2FWq0jYEBHZpfTP%2BCMB9PQZvPNBFOFrCHos6HpY5LPigPl%2FPdTwMIbv4cQGOqUBDE8jEPJGbQzfvDkKJX5Z1kRnEVCnlMo97kKe6p0T49TQKKUzvz6SG9pe22ZW1x7zmiRR8qds0SaV%2FWqYxXIofS0mvDNB9nPXT5vMBmO7IRiqlAvEH8u%2FakeR6orvB%2Fgc64B7QCzEQQaCfICfuDLabO5eMkAJVCgN3ZumDknuJDE05mvFCa027Avb280kTbaxaBNlIBgdvKzsYQIO%2B4oiKcj5RYRe&X-Amz-Signature=5565fa6c85da600bb71eb42a774d11e671f8742a4c6f8af6400141df29eb94b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNOEDFU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7UYAKXIi2I%2FdPtvne%2FQOnMqaPIk%2B2mQvFU5mZi2iUhAiEAk12IX9eCDu0jOREkEP8GOlApaMU08fOjq5gC5357XPsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrgxZcfw5Jmfb8eqSrcA%2F9K8maQlj6puTxpAalU2G7WltbdzD3L3E0qPCS4lS2YKCihei7Kige%2BH0iWJqOM2tTrByklSWsmRoEeTSjU5rr6BqsgJL7Ejpq9psGqpiTadg0Bo9u59IKBqct2s6A%2FaZQkQr5mvhnqmwGdN60C36c8p8IFa4Bxj%2BEOak5b6BVWB%2B6MY0ZmdUHENBmaYQlW%2F%2FBq9VKt1op%2FlEnP3sW0viiwvpfTVdNgE%2FP%2FEIFNekXPsNfW7iqjmnsmr6v4dwE42Du986gu%2BfFiNl8H7hvtbtSQAQJItjjmZZCDxS81tTZYhbFaGk2QaWOulFEVlj0UeTwXTmYvll8GitF%2F%2BVuxdPGD9w%2FK21BsyWnHTkjxl3EBBAKpsv6R7s3MeUfkW9lZby3MrC4AcOQBGCheXo60qWhOuVmvG4LzhGumbBVYHGiYfq0jdVX3qYg0trEqHXQc3Ch4pcwD14Yxcuc86g%2FWWazJb%2Bd%2BV%2FCPmhH2HVY9jhly1yDHtwNWy0gQ7LCDpnV3X4etHIMuc2hLnlMrclDnQLzQe1yTdG%2BSQTKvuvySQSRtyVeFG73MjEgAeqtZL1ovYW3VntaRkF%2FWq0jYEBHZpfTP%2BCMB9PQZvPNBFOFrCHos6HpY5LPigPl%2FPdTwMIbv4cQGOqUBDE8jEPJGbQzfvDkKJX5Z1kRnEVCnlMo97kKe6p0T49TQKKUzvz6SG9pe22ZW1x7zmiRR8qds0SaV%2FWqYxXIofS0mvDNB9nPXT5vMBmO7IRiqlAvEH8u%2FakeR6orvB%2Fgc64B7QCzEQQaCfICfuDLabO5eMkAJVCgN3ZumDknuJDE05mvFCa027Avb280kTbaxaBNlIBgdvKzsYQIO%2B4oiKcj5RYRe&X-Amz-Signature=d9589fc2b56d10ded1c15169ad4e4b93e0fbaec4fcd3ca964d26739289ca0e6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNOEDFU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7UYAKXIi2I%2FdPtvne%2FQOnMqaPIk%2B2mQvFU5mZi2iUhAiEAk12IX9eCDu0jOREkEP8GOlApaMU08fOjq5gC5357XPsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrgxZcfw5Jmfb8eqSrcA%2F9K8maQlj6puTxpAalU2G7WltbdzD3L3E0qPCS4lS2YKCihei7Kige%2BH0iWJqOM2tTrByklSWsmRoEeTSjU5rr6BqsgJL7Ejpq9psGqpiTadg0Bo9u59IKBqct2s6A%2FaZQkQr5mvhnqmwGdN60C36c8p8IFa4Bxj%2BEOak5b6BVWB%2B6MY0ZmdUHENBmaYQlW%2F%2FBq9VKt1op%2FlEnP3sW0viiwvpfTVdNgE%2FP%2FEIFNekXPsNfW7iqjmnsmr6v4dwE42Du986gu%2BfFiNl8H7hvtbtSQAQJItjjmZZCDxS81tTZYhbFaGk2QaWOulFEVlj0UeTwXTmYvll8GitF%2F%2BVuxdPGD9w%2FK21BsyWnHTkjxl3EBBAKpsv6R7s3MeUfkW9lZby3MrC4AcOQBGCheXo60qWhOuVmvG4LzhGumbBVYHGiYfq0jdVX3qYg0trEqHXQc3Ch4pcwD14Yxcuc86g%2FWWazJb%2Bd%2BV%2FCPmhH2HVY9jhly1yDHtwNWy0gQ7LCDpnV3X4etHIMuc2hLnlMrclDnQLzQe1yTdG%2BSQTKvuvySQSRtyVeFG73MjEgAeqtZL1ovYW3VntaRkF%2FWq0jYEBHZpfTP%2BCMB9PQZvPNBFOFrCHos6HpY5LPigPl%2FPdTwMIbv4cQGOqUBDE8jEPJGbQzfvDkKJX5Z1kRnEVCnlMo97kKe6p0T49TQKKUzvz6SG9pe22ZW1x7zmiRR8qds0SaV%2FWqYxXIofS0mvDNB9nPXT5vMBmO7IRiqlAvEH8u%2FakeR6orvB%2Fgc64B7QCzEQQaCfICfuDLabO5eMkAJVCgN3ZumDknuJDE05mvFCa027Avb280kTbaxaBNlIBgdvKzsYQIO%2B4oiKcj5RYRe&X-Amz-Signature=026c038682fa6bc54407883e19baf2ab746b6ae97e149973a90792105b6b1d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNOEDFU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7UYAKXIi2I%2FdPtvne%2FQOnMqaPIk%2B2mQvFU5mZi2iUhAiEAk12IX9eCDu0jOREkEP8GOlApaMU08fOjq5gC5357XPsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrgxZcfw5Jmfb8eqSrcA%2F9K8maQlj6puTxpAalU2G7WltbdzD3L3E0qPCS4lS2YKCihei7Kige%2BH0iWJqOM2tTrByklSWsmRoEeTSjU5rr6BqsgJL7Ejpq9psGqpiTadg0Bo9u59IKBqct2s6A%2FaZQkQr5mvhnqmwGdN60C36c8p8IFa4Bxj%2BEOak5b6BVWB%2B6MY0ZmdUHENBmaYQlW%2F%2FBq9VKt1op%2FlEnP3sW0viiwvpfTVdNgE%2FP%2FEIFNekXPsNfW7iqjmnsmr6v4dwE42Du986gu%2BfFiNl8H7hvtbtSQAQJItjjmZZCDxS81tTZYhbFaGk2QaWOulFEVlj0UeTwXTmYvll8GitF%2F%2BVuxdPGD9w%2FK21BsyWnHTkjxl3EBBAKpsv6R7s3MeUfkW9lZby3MrC4AcOQBGCheXo60qWhOuVmvG4LzhGumbBVYHGiYfq0jdVX3qYg0trEqHXQc3Ch4pcwD14Yxcuc86g%2FWWazJb%2Bd%2BV%2FCPmhH2HVY9jhly1yDHtwNWy0gQ7LCDpnV3X4etHIMuc2hLnlMrclDnQLzQe1yTdG%2BSQTKvuvySQSRtyVeFG73MjEgAeqtZL1ovYW3VntaRkF%2FWq0jYEBHZpfTP%2BCMB9PQZvPNBFOFrCHos6HpY5LPigPl%2FPdTwMIbv4cQGOqUBDE8jEPJGbQzfvDkKJX5Z1kRnEVCnlMo97kKe6p0T49TQKKUzvz6SG9pe22ZW1x7zmiRR8qds0SaV%2FWqYxXIofS0mvDNB9nPXT5vMBmO7IRiqlAvEH8u%2FakeR6orvB%2Fgc64B7QCzEQQaCfICfuDLabO5eMkAJVCgN3ZumDknuJDE05mvFCa027Avb280kTbaxaBNlIBgdvKzsYQIO%2B4oiKcj5RYRe&X-Amz-Signature=2d1928758f425feb60c6668c81d132cfb42d052f8ba721b3a8b1a8410dc59d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W62D3BXF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHtJZnNmVKSK2ZPf%2BvtzIz4oPhkp%2FZHOz4LEPRNrRRdQIhAPdoOpfTiZ5C4arIkqhO6Zrl1oqGb7Sa3wVTfbVY9%2FO6KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO0qxxnLFRVtBtcCIq3ANWF5AsMG99kkMBhplS2Hr7DlB4M%2BU0Fnp6saFK8Fr9JWpwcmYSA5RbSiry86L4RbDZKeCC0jrWdwkMC5EY%2B5wnrzBHqtLsMzihsewnctcGhkq7PTucU5oBBQto1HQnkWqzuAswR3bhcNeQ3vx9oalQ3%2BeqVcesRJDhR%2FqvaqVk9TsAM6CVq4qC1DolDpt2KoSZJeEm0qC6RuTTLJYDEASsx6B0%2B4kEAmlOCndEx8ClVDgqgE%2FVTQ%2F%2FAE2%2Fy4BHLpefnXFfNEadWUaTr0HZDVx3wEEpP1zjrYpR7ZGszSv%2BPhG0kj3YVCZCs%2B%2FekmbHZLS4BslkyhPbSkHwfNk3Hm08c9J%2BPHTYjbl1fHDXQbi3p8jO4cz4I8jBiLAQ8sNYjjSHAkmKh6mhOvzSeM9nC9cQu5fQdqna8lpdATSrqEIThm5kZYzlPQ24NK6KOZb0lahzLA5zXUcJl%2BMIaWWR6KsgezMy18b9WbTxCfJabAYUS6E2DWDCMaoFPtw5EI1qWkQZbB0Mw22OVF2WQRSzVU20K3pFSUm4HVpqPJHZ9X2kzIN19aICQrV89i3ob95D0G6gOR%2F%2FPMEEm5zUeilTtsBySg9t6Xd9RSbWvIp6502EIIMJOEyjDOiAnKV9qjDb7uHEBjqkAd%2F7FSK%2B07Qv5wGr6mwlbcvePkmLcTAjailif0a6MDNPb5k1lT5lWAr7Gvg%2BBezPOWDHiCmsmG2GhwJbth6p1r2YiVuX6vagisvV7kbxR%2FhFLOMQBV8o5Sl7edWkv2bt3ElnFlVx77BCS5BhZ0wuC9Ck4drJXBMWdgJInsmYLATf6KTQwrnE1qd1Xq%2BIU07qOLpoA0GyFhX9eVh2RiUwtlJm1Y8n&X-Amz-Signature=92a3d6d252b1bfe1a7933bb9f31ad1c3c5768faa75948c738cc63486ee4bff7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODPEWZG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FGdDMjahirMaqpU2iqyANcxvwMvHUUEFoMQvx6mTlxAiEAq1kS%2B8ksJKpPYiZcm9h2V%2BJMuIyuh6xgGCyVY%2BIDMLAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJXyeC1W%2Fn9slF4JyrcA3TRhDrrL8zJ2cDc%2BXUIRs5DUYpxRs7Byy1LUuZtLMRqBVblaMQAm%2Ba87CvN8YMGWJ8C%2BhVqBrOO8whVZMc47HF%2BEgmJ0RmC5%2FSd9Ori2RqmXT3cUwK%2F%2FlusA6zfPG9JXMgTBtGeK%2FBrGBUFPDSSR5x4FngWCtV%2BfXFycYj8e%2BCHQzQ98Q1Bki7ktjzsaof2O31XtE62xlSO4b4zK8CC9VdC7dGGdo79ON0652qTCpZrAWQDEI%2BuFNw7LOGOrbnH0k%2FxE9PVaDaOBdflNpKHyR%2FHh9f7ZJqhIAzLdh2BAISbmQcvf8SV9KvPcwUR0A55AciYGLvGPPPa6qJ3fgHeYv4U3O%2Bg2nE1%2FAedoqAwKAx2KWAXK%2BsfF6YZLfmkERI%2BiNjCmCvyceVBCUKPRZvFkYU%2F3tOCu8wSP93sMm5KIrgmwUb1mfoEP9K47Bw9JFkeKkccsNDVqWgZ9BT3ftsFkRi19U8m49P8ojSyAeBTkG8BPhWH7CkymvaLI6X1J3cQNV7NDawInROV60nuWIZXLVGxvVqgFDi%2F24z9MpaDYFYytj37xsxBxjHnQDc6fG8x4ALv7dqXLPHrvCV8KBlxdBa5Am17lMfX0TKmgw084GPmeft553IjQrfy6FFCMPvu4cQGOqUBosbqScsri%2FFXXKn5ds4i0vsibyWSDd1yNGrNvTVoy0LLglwrKqGdKEq1XtwwdQ7OGzYwOv6yL5IUe%2FAitQ%2BGFJ0a3msawznAJYZGiMK7H5EvvIgY3tQtMFQNr4bQCXLQ3l%2F6YWX7mNK%2BOfWZG0sm8Bcd8eng%2Fc%2BTy3o9wa7AhJQBi4quBJA5LAnJ0BhuPzLFmS3z%2FqC3Z3Mev6BiZU93AjdU3HiP&X-Amz-Signature=bf7028264da1951746a5bda1818d0b7858a7a2129fe65318d164e3c41e3cea22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTI3KJPQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmUIelVgwWesSTx2UdFCgYXYw6J1QCw1YReNofJJ6yzwIgayZb4w4%2BuoD77luCTkvYpuR8xixxYPBfqd6SmFjD3fsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCrOGTccEcZyNz2sSrcA6PY7aivniPGZ3yH58U6jKrzx3c%2FC7BCfU3cIz9TCkMlqFEXdVBTOlrKpLLpIMzakHR%2FcYRYv8LtLGB3V%2FnES2IHy5q9UwbyB%2FXgts6X5tl%2Bf0OhMQ5Jq8ONUXajtXcc3IxJy8SRWp1dqi2MUwhXeMluL764yC5pETiuNjEXKV0r%2B4SptIRTcvbst05fTP4vGOovsLPaIy2vAPaqNAix%2FzLaRyE1djQgE4504YgWWgzMrhWjN496gpbiruKOGbCg3GVUU2VEwRv%2BM98q%2BAL1FmE8bPWOWeB9PoiltGnAAFHJKwMwoE6P5Zwvl0OQAL%2FBE47Lyr%2FE%2ByjIavKDGlpIvYaA4B%2Brd7btpUyXAvyLIwgncfLP6mv1BPwr6eRnKYQax81WG539GZXExHwO4p%2BDVCqmb4kWJ%2F%2BoMDKsKxot%2B8oAQhRUyKCEZYyguc8Ui4ZB1Wn61MSl%2BXU33jlKM%2BeIEXP8ACripnTOcReXeJBnzs39U1jpi%2BH8jE1NFqSXsrjxJ%2F0lZRHHnwq5bjz8uLB9tn3BQiwiwf8HzN2Se%2BFBND7kn%2FlcK7p5Dznyrjjo9HPIMJUguWXKfSpTL551D3GyZWS2IOjIHuJ7S0Auk1FbvrWd8EztG8%2BarIwaAkvPMIHv4cQGOqUBp3W4DShwJAQNg%2Fg7kEcudJQVvrGl94cOZslJZHXTM0K4USuwFNnW0pKYba3ky7xVGJdQjXj0zKqTxl9SpzuPd%2Fd0yMg0bgYfyBiHAb3NUXqBWHtIZm8sFltVpwYg8k8OGkOACPt0eUUZ8sPRIT05dd7FZnudl%2FJsQeYHq1yfS7446Zr2m%2Fe2P0zVKcpzPWHHJXxfcxl%2BqC6Rr7rHKboSMTq%2B%2BYBq&X-Amz-Signature=86d7cb5284d833bff366d713f5d4ed605f7e7f938c9fb59d791930e3e79560f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNOEDFU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7UYAKXIi2I%2FdPtvne%2FQOnMqaPIk%2B2mQvFU5mZi2iUhAiEAk12IX9eCDu0jOREkEP8GOlApaMU08fOjq5gC5357XPsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrgxZcfw5Jmfb8eqSrcA%2F9K8maQlj6puTxpAalU2G7WltbdzD3L3E0qPCS4lS2YKCihei7Kige%2BH0iWJqOM2tTrByklSWsmRoEeTSjU5rr6BqsgJL7Ejpq9psGqpiTadg0Bo9u59IKBqct2s6A%2FaZQkQr5mvhnqmwGdN60C36c8p8IFa4Bxj%2BEOak5b6BVWB%2B6MY0ZmdUHENBmaYQlW%2F%2FBq9VKt1op%2FlEnP3sW0viiwvpfTVdNgE%2FP%2FEIFNekXPsNfW7iqjmnsmr6v4dwE42Du986gu%2BfFiNl8H7hvtbtSQAQJItjjmZZCDxS81tTZYhbFaGk2QaWOulFEVlj0UeTwXTmYvll8GitF%2F%2BVuxdPGD9w%2FK21BsyWnHTkjxl3EBBAKpsv6R7s3MeUfkW9lZby3MrC4AcOQBGCheXo60qWhOuVmvG4LzhGumbBVYHGiYfq0jdVX3qYg0trEqHXQc3Ch4pcwD14Yxcuc86g%2FWWazJb%2Bd%2BV%2FCPmhH2HVY9jhly1yDHtwNWy0gQ7LCDpnV3X4etHIMuc2hLnlMrclDnQLzQe1yTdG%2BSQTKvuvySQSRtyVeFG73MjEgAeqtZL1ovYW3VntaRkF%2FWq0jYEBHZpfTP%2BCMB9PQZvPNBFOFrCHos6HpY5LPigPl%2FPdTwMIbv4cQGOqUBDE8jEPJGbQzfvDkKJX5Z1kRnEVCnlMo97kKe6p0T49TQKKUzvz6SG9pe22ZW1x7zmiRR8qds0SaV%2FWqYxXIofS0mvDNB9nPXT5vMBmO7IRiqlAvEH8u%2FakeR6orvB%2Fgc64B7QCzEQQaCfICfuDLabO5eMkAJVCgN3ZumDknuJDE05mvFCa027Avb280kTbaxaBNlIBgdvKzsYQIO%2B4oiKcj5RYRe&X-Amz-Signature=f41136f051ec3a479b7dea02733ad2f594b9a1e296c0e3d56af1f6ac619df082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD2CB6MK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmP%2BF9E9gBG47dAioRdQ%2F80%2F3SDa2DN7cNXO6vnjgzbQIgDzh6oBZCwRuMVlF%2F67486w%2FiHuYBkW7WgSTnzfsHFpYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKac7MTs%2FjX6tmaEQSrcAyp0oRe1ceOwz0%2BRVrmIkiV0a2dnFGmNCCl8Y%2BsCBd4ZA1WH0xg%2FsQ7DVlrO8W7xJ%2F%2FAYrTphBtowpV%2FnqBqY%2B5gH1vA%2FQb9Kv%2B2u6Hf%2Bt761pveFZLUiNwV1xJl1rM9a8nl8ZOF2Ij%2FmpL706dscONjhL%2F2R3jzU3c8j7Duqyex1fbZbDGnt4dDePKg0YQf%2Fma27tH8NgZ5t3A1hTjMr2%2Fon3dUnPhgHWeBGP0IHss66%2Fn7LdLI7WUskZPnVeqAbyt5mQszahmRlq1w%2FtwGKtrlE2dv9jqBle1aHQBzz1EnCaNt85OY9MNlLJBklwQGiAU7%2FDD%2FJZEQ0BPr04TckhT3CddaFSlW%2FlXJCCLZl89cluoabF5mDt%2FfPNDYKfEARxlRCY4UQP53uc4PzWHliFQ0bxrydKP9l59kSBelzILF35UWHX%2FSk8Wg%2BIzwcCIGK1Ps4hBbvU9HSkQKeNZR%2FQl8zAPDxRCy9SHjUhrpupNXXtB5u5g8aCygA45HAA6LoVgih77ZISex%2FN7LmW%2FQdR6Z3Ter%2B9vwYrpTDgWPPecqb%2BriQ0srWa2XBeeEnyRnhoh1LUxCjnv2aO6oDW8cKfInodtScInR2ruIAYpeg7gtDwyzTO0g0K6XTwU5MIPv4cQGOqUBxtmqiGsnEgVQo49QAFTuuJRNhHlQaf5UlAFnMh6n8p5F1ibjNCb%2FqWv7qc7phCKmM%2BS0IINAWEmD9oaGP25mJ6E8JjaCR%2BOwjwAQ2Ef%2Fk2VjEOiVeW1TQb0wHnNm%2FKNI%2FNRdq3AXVEL2iQ5DNHRFH0kMYNJoKMgj21SxzASn2gycCHKbGeB%2FCzRGRXspdOzF7lcE0XyDtBSfDmnlBPQrbeSpRaGX&X-Amz-Signature=50162c3a5b2b6f90046d328570682b7974fef37863383f9837a5abdcd11f01c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNOEDFU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7UYAKXIi2I%2FdPtvne%2FQOnMqaPIk%2B2mQvFU5mZi2iUhAiEAk12IX9eCDu0jOREkEP8GOlApaMU08fOjq5gC5357XPsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrgxZcfw5Jmfb8eqSrcA%2F9K8maQlj6puTxpAalU2G7WltbdzD3L3E0qPCS4lS2YKCihei7Kige%2BH0iWJqOM2tTrByklSWsmRoEeTSjU5rr6BqsgJL7Ejpq9psGqpiTadg0Bo9u59IKBqct2s6A%2FaZQkQr5mvhnqmwGdN60C36c8p8IFa4Bxj%2BEOak5b6BVWB%2B6MY0ZmdUHENBmaYQlW%2F%2FBq9VKt1op%2FlEnP3sW0viiwvpfTVdNgE%2FP%2FEIFNekXPsNfW7iqjmnsmr6v4dwE42Du986gu%2BfFiNl8H7hvtbtSQAQJItjjmZZCDxS81tTZYhbFaGk2QaWOulFEVlj0UeTwXTmYvll8GitF%2F%2BVuxdPGD9w%2FK21BsyWnHTkjxl3EBBAKpsv6R7s3MeUfkW9lZby3MrC4AcOQBGCheXo60qWhOuVmvG4LzhGumbBVYHGiYfq0jdVX3qYg0trEqHXQc3Ch4pcwD14Yxcuc86g%2FWWazJb%2Bd%2BV%2FCPmhH2HVY9jhly1yDHtwNWy0gQ7LCDpnV3X4etHIMuc2hLnlMrclDnQLzQe1yTdG%2BSQTKvuvySQSRtyVeFG73MjEgAeqtZL1ovYW3VntaRkF%2FWq0jYEBHZpfTP%2BCMB9PQZvPNBFOFrCHos6HpY5LPigPl%2FPdTwMIbv4cQGOqUBDE8jEPJGbQzfvDkKJX5Z1kRnEVCnlMo97kKe6p0T49TQKKUzvz6SG9pe22ZW1x7zmiRR8qds0SaV%2FWqYxXIofS0mvDNB9nPXT5vMBmO7IRiqlAvEH8u%2FakeR6orvB%2Fgc64B7QCzEQQaCfICfuDLabO5eMkAJVCgN3ZumDknuJDE05mvFCa027Avb280kTbaxaBNlIBgdvKzsYQIO%2B4oiKcj5RYRe&X-Amz-Signature=7132535d75b906685f3710517cfb1bad4f7e42cc7960d05b4505ad3061419f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFMWKXTY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPkxJEzznD7SdnJRv5erJFL7k8GAxlUzUoFvkLXN%2F%2BKAIgTJPLlZz4%2B0ry71a2PQf0bENUwBpkLB6U4X2Mu3UUNDsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0xSvJ3MMtmdqgBXCrcA3JlqiCUR4XQKk%2Bq7seJ1uFkyoRvyhbqu0OXNHpIWULWmcfZ4hpwBx%2B%2BQwsBWmoCvn2dtfsOtexN5XE%2B3dwi15%2FKXcuMKRq97%2BcifvJEYycPhkgstktUfLDXvRLS%2FujoRUtHVYFX86R9JoBW2aKHJdcK%2F5HLdPxKOCFPjw%2BYOCtzN76EzOVPpq7HZj43EGHytzYvH4HhPw8PVDzhckddLTx7z8WG5JoZC2%2FyCbRHpXJxCXtjg%2BS0bhWasFCLzBKg7byaw3Ib53Klcus5xPZqI64RNaNFjXkjxwZ%2FBG0rlUU21GT29n7ZwFdtFcQtKPxcWw5m1O9%2BCn6AVOsDG6yccuI3QeXhzD19ado3g%2FYVoJ1WXN1Lg4drCdk%2F362JMDXl2BGA9CQf%2FGB%2FpCfuZr%2B3YhTLn%2FYMubqROgwI82Rv2AIQuiC5rc2afw9hGfvwFn2zhXtmr6cXASl3JoyzTcChTwPDG5P0KrRx8qNlcYa9lv0Fjo5wd6nr4e%2BugnuVEfFYCVkwtZ0Z2S1mXFv2QyjKRJvWeVFXCmOx2vWmZtaIWIfN1peYU%2BmNsTqc2pTTWK8H5LrVFCibgC4k1yoJs6DIU0L7sqzjdTrxpraPy%2BNmSFCxCwlxJt%2BqYPSuquTGMIzv4cQGOqUBxumzIX7vTO2sDIC8Rwkz4TWLFaaHRxvOVE8R%2Ffb5r5xLdzBTHFxEuB9Wy1Dg%2Buk1PEOooIffTaGYOKVvaVuHpLbJJGIiQ3bXUVcieOirN5CJ3v9aX6aaJ4Y%2Blm%2B8aaRd0Dcwb8COBmIbMiH1Fc0tJqqfwrOyJjGR%2FBVgJOQqKIfMOUW%2F9ojKGhEOiBCgQvQw8SVrbOS9jeTZ%2F7qN9PyW7JDPoR3y&X-Amz-Signature=e500806e37aebeb7f6ac62ed75af3231039a10f4ff742295c515949164d6e5ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNOEDFU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7UYAKXIi2I%2FdPtvne%2FQOnMqaPIk%2B2mQvFU5mZi2iUhAiEAk12IX9eCDu0jOREkEP8GOlApaMU08fOjq5gC5357XPsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrgxZcfw5Jmfb8eqSrcA%2F9K8maQlj6puTxpAalU2G7WltbdzD3L3E0qPCS4lS2YKCihei7Kige%2BH0iWJqOM2tTrByklSWsmRoEeTSjU5rr6BqsgJL7Ejpq9psGqpiTadg0Bo9u59IKBqct2s6A%2FaZQkQr5mvhnqmwGdN60C36c8p8IFa4Bxj%2BEOak5b6BVWB%2B6MY0ZmdUHENBmaYQlW%2F%2FBq9VKt1op%2FlEnP3sW0viiwvpfTVdNgE%2FP%2FEIFNekXPsNfW7iqjmnsmr6v4dwE42Du986gu%2BfFiNl8H7hvtbtSQAQJItjjmZZCDxS81tTZYhbFaGk2QaWOulFEVlj0UeTwXTmYvll8GitF%2F%2BVuxdPGD9w%2FK21BsyWnHTkjxl3EBBAKpsv6R7s3MeUfkW9lZby3MrC4AcOQBGCheXo60qWhOuVmvG4LzhGumbBVYHGiYfq0jdVX3qYg0trEqHXQc3Ch4pcwD14Yxcuc86g%2FWWazJb%2Bd%2BV%2FCPmhH2HVY9jhly1yDHtwNWy0gQ7LCDpnV3X4etHIMuc2hLnlMrclDnQLzQe1yTdG%2BSQTKvuvySQSRtyVeFG73MjEgAeqtZL1ovYW3VntaRkF%2FWq0jYEBHZpfTP%2BCMB9PQZvPNBFOFrCHos6HpY5LPigPl%2FPdTwMIbv4cQGOqUBDE8jEPJGbQzfvDkKJX5Z1kRnEVCnlMo97kKe6p0T49TQKKUzvz6SG9pe22ZW1x7zmiRR8qds0SaV%2FWqYxXIofS0mvDNB9nPXT5vMBmO7IRiqlAvEH8u%2FakeR6orvB%2Fgc64B7QCzEQQaCfICfuDLabO5eMkAJVCgN3ZumDknuJDE05mvFCa027Avb280kTbaxaBNlIBgdvKzsYQIO%2B4oiKcj5RYRe&X-Amz-Signature=3f78bf7a214f20f0d4401ff585e68bd7cdabf379f1eaf58d1130a439aae5410b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O5TM3AM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ7d81sfA%2F8tNePv7y%2BiE3qd1V5wpqRrUfFpkDi5y3xgIhAP%2Fo8IRayZpAOBn%2F1C1akVlhH8we1NzaWLernJn0GVRGKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh54FZ%2FrFxdEO0Jugq3ANRQ%2FZOOqSPvdaw%2Bsb0WTvYKxAiSxRyUIzBaNGZx6ZCIApHixcnN3gCz3o8fCUuhuZMtrmjNYRIQmxpcZIhg%2FJ1BipmWLNWiC0717HP7fTWgrX6IPN%2FLjHCV1A%2F%2FaMs1Pi1UcGJt29dyIZa6IbulgcRa6uKkAt4e7ZhtoHUGRmhCvwVLxZuMoUUX3f3QOt%2BsGlItC9iWCtbavKghMfAqTs18m4Vj7pbbh5HnLceNeSsirLsSLAIYAiWQ7zZWPp9sBWNffyj733UgS7CgWtPtoKnQPrx2%2BFk5yUMlxFKaMnSrN0IMOO9MC%2B1YZFh1BQGpZN5EY4jDYc3UWyxyVxN%2FbQLI0q4ZVS4Rtc1ot2y7csUBqI%2BXDPkGZ056Py9jsoThh0Xl1Sriww7pYlrNJym0EF%2FimKY6mXr9mGOcPl7u6cW3S5jyZcS61lYlJbhy%2F1Nrwt%2BAxDPHbzMzpAdGyRdO%2BQS%2FwabyG2Y40kOsxV62%2FJlHVWTgNlfsudPZEuWQEvKGDlbrXHO5Gh%2FTAP4r%2FA0vKgTiMB3rcVD%2FquSzVNEw7VjqgqbIlJbQLEXb8AYe3eI083wiUKX7luLacuw%2Bvdqe6C3A2B3d0qT3%2BPA%2BqVSxvdAfsd%2FAL60uo6Djl7B4DDc7uHEBjqkAdqMctqb1Ld%2FfY%2BatPsDhgYT2HBtWX%2B%2BlrgjXyGF1C1YS%2F9wT5Pj0WugzFB3cz4pkgVycamL06wLZXIoOtWJoN5%2BXjxdoOopGDgDuNR5cCVeXFQerYvZ5IQ0bYhxUA8SEweeYogPupes9nRLnRA44JR7wFwYqrRSM%2FeDyrY68byvXquDIOUOK%2FxlREiIUWc2z2E985P3qIbWXPyPslmJBFru%2FTRL&X-Amz-Signature=80a4631b49de5029ada645a7e20a4ceb803802f824c87619235763fb9be59096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNOEDFU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7UYAKXIi2I%2FdPtvne%2FQOnMqaPIk%2B2mQvFU5mZi2iUhAiEAk12IX9eCDu0jOREkEP8GOlApaMU08fOjq5gC5357XPsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrgxZcfw5Jmfb8eqSrcA%2F9K8maQlj6puTxpAalU2G7WltbdzD3L3E0qPCS4lS2YKCihei7Kige%2BH0iWJqOM2tTrByklSWsmRoEeTSjU5rr6BqsgJL7Ejpq9psGqpiTadg0Bo9u59IKBqct2s6A%2FaZQkQr5mvhnqmwGdN60C36c8p8IFa4Bxj%2BEOak5b6BVWB%2B6MY0ZmdUHENBmaYQlW%2F%2FBq9VKt1op%2FlEnP3sW0viiwvpfTVdNgE%2FP%2FEIFNekXPsNfW7iqjmnsmr6v4dwE42Du986gu%2BfFiNl8H7hvtbtSQAQJItjjmZZCDxS81tTZYhbFaGk2QaWOulFEVlj0UeTwXTmYvll8GitF%2F%2BVuxdPGD9w%2FK21BsyWnHTkjxl3EBBAKpsv6R7s3MeUfkW9lZby3MrC4AcOQBGCheXo60qWhOuVmvG4LzhGumbBVYHGiYfq0jdVX3qYg0trEqHXQc3Ch4pcwD14Yxcuc86g%2FWWazJb%2Bd%2BV%2FCPmhH2HVY9jhly1yDHtwNWy0gQ7LCDpnV3X4etHIMuc2hLnlMrclDnQLzQe1yTdG%2BSQTKvuvySQSRtyVeFG73MjEgAeqtZL1ovYW3VntaRkF%2FWq0jYEBHZpfTP%2BCMB9PQZvPNBFOFrCHos6HpY5LPigPl%2FPdTwMIbv4cQGOqUBDE8jEPJGbQzfvDkKJX5Z1kRnEVCnlMo97kKe6p0T49TQKKUzvz6SG9pe22ZW1x7zmiRR8qds0SaV%2FWqYxXIofS0mvDNB9nPXT5vMBmO7IRiqlAvEH8u%2FakeR6orvB%2Fgc64B7QCzEQQaCfICfuDLabO5eMkAJVCgN3ZumDknuJDE05mvFCa027Avb280kTbaxaBNlIBgdvKzsYQIO%2B4oiKcj5RYRe&X-Amz-Signature=dd9386e409a9063b2efbfc681b20c668a2ffc79f961c23c91127a0a7c39ac128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZGNJNG3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJyvqw%2BtY8xkv2Ba8E2PS8x9bHQ539Up2hV0nGC1TuzQIhANiV%2BuGZ%2FyJHzXcUB%2FvecLPm%2B389kq0Sv4%2FyRIIoYBOQKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwB%2BrgxAeuM5qZZtmYq3ANKRGNRBNqGzKlpsgZQZBNff2LwFahp7UqYtZelOfFxVhmKEGmfsqLYlqVHSDLUcY8d7mLdTloO8wgHyRzrLKIxbA%2BIX0gz11NwlWve4sRL5uYJyHMwDSDsgmW4Pua5au71sZObr5tMYvny1TxdNbJg9UhBgkR1gQTVx7t4XWi1fT2d1XmjMXzOJMNEsBKI0V4dYtIr3M9TC%2FDwLK%2Fd7A3woGZzIJJ%2FgkPz5M2yIJQ%2Bd9BmUwnJk0cvA2QAyfIV%2FINRWICJpfdcOvfmT1aURLCyPcNfLZ0GL%2Bl4xYi6uvEh1DGAhX3K5RuLicOwYwjDFCXgVIxKx7KPYyN840AExrz0TpuZuZchTukVPmXFcR5IVt8O8Oe7reF7T5jImG5B0G1OCOoAkKvk76lDJo40K%2FDPTzYZMpqp3WFtYoiM3UXLKuKHfFIwSPIdWuzhwQ3kIg8yFUv10vhcV58kCgOY8ljb9RTWpTutEksNExm1vqxOlqETpAuMhFiLNpunraqu5o8mmoegRV827yuaGZTuY6h4GulSJ2E5BzqZq1GImEloXB18Ev7t5xQjAl9CPO7DUftsnLOBmwv436%2FAQWf1mtJwthXIygbhBw6%2FbyBmjzglx6rHg%2BT6z7LRXr7Y5DCE7%2BHEBjqkAWVNBqNd6A%2FNsA%2BNqmU5tuJvFguDuSl%2Bfy427nEp1hvboRGqcrKEtag4oRi1GJ4VI3V8h4YWpawAX3thFSNkjD3WEYHZJENVR69SRXmJPRgr7t0A0%2FRdtekjaHOYNi3Ert0vPMKSwVvPGmLgpFloCcKXBFfv6ygn1FRZPlMCetXyiXiPnRjqMEPVmqCPMcZ6qvnwr44W6NdCbeiJPpEVjSPXgkFt&X-Amz-Signature=fcedd49dd135269ddd7fe0d0e44f268467ae65d5d59346b1c488b45754e060b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF7FZOBS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9DwOWJVu2q28ZHvxk5f5Rqrck01Wd38v0ZFfC%2BsCTIAiEA56z0DTEGiwR6ddY%2FXb3palmYEMPpE8aDYKvAyNYN%2FHcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZHKSeKJyi4aMB7SCrcA6THd8O9vxKJgbvfXTOQI7f1Kk5qqjO8hhsnlqVrZDXL3MmWnJJr3jwJxMItvE1iAZjBeTJHlsv%2BZGGe1Mfmoa6ZIcllhCTL7qY05iD2z4IJ5LXKbM%2F8qkFvFdnkVtVegHppSmRx6xasTTdjcrQmyTzsJL6dVqklEWcwOiPdL5OASOi0gzdtkz7XtVbNj240G%2FZj3Hc3AjqiBQEpuo3k1cc%2BBBv3xNXc2iUFy4F5ZhyLEPM9OrYuMJKL8s6Cql%2BtnwRMF8%2B%2Ba4awQ8E%2B66eBxZi72rFFDSU9sRMF815hNzAN54SL1p8WLnEpRZtNt55HKHLbpnan3mDPVyAfWc0COUUAn%2Fd9il6jgyX8Bth4kgpGYJ7yvqE37W6F0lxjYTRdPxROc5MSniJcCafLh9SwDGoqk7BvHLgi05vfDpzo7m%2F%2FD5y11G%2F5pPd7xZKCm%2FBjwfIyPDFZMN7AJjOiwIJyvXBARpkZb1eZ%2F0asvbzRC7n7C7Kn2Yu5UBp%2FImXzSWj2NeD%2BDKdt0blviA97e4zOBXGk7hSdBgySKsQcmydn26O%2Bf1vxnuZF4rVLNo35B930hLnKSGbJsqJNvU5NugnV2l6gRPR%2BNg2hy%2FqRUU4BvLcD56fB6P8dYCXbyNltMJ3v4cQGOqUBqAxd0YnCB92Xomx9dg7W86w4I7srH0kwSLHdBvvQI3yypG7pV7KibomR1LNqZTJbSzlvbBY9TDZ86HTKPpcyWJqhAeeAjxch6%2FTS%2BHdpvJ8Ya%2B5NFoDtb8zq5cZa4wLCYAt894hifQEU6SwVeW6vjD0SLQ%2BnchxPTJ%2B9rq%2B8iTWgtR7EBahxF5ctpcAkDg21e26CQwai0Wk1JZlVEGG0c%2FBgevlp&X-Amz-Signature=f536032e19387a92faadf682d36017bb0ff8d8c4d873725f98533c4fa315e4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSRG2S3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDApayr9hmWwE6wGWXHnurz5Ubz6vpDX0aJYTq46iom9QIgcVViss7XmooQt9MBLMYkk0ZwOuozzik9A2u6UVY8IF8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUKY7dZMBJIBLlBLCrcA3NymBqUKQkA7M8i%2FCHSRjjwSpbeQgaEwH7TMuUX9p9OUzxJKEbRm8%2Ftm7BgRmQEevjSTXSbzeyj4r%2BIAXJG2ScLcc%2Fd11iap6JpColy%2FuI72hxMhq8FpjOd%2F%2FoiqigCqi9uKZsybtORqEGpaRHd37ZZDPvPnj1SKDUj1Y8uPp%2B9QohnIm3ryORgQyXwtJf1yF5hXjE%2Fhruci7rI%2Bfz2CqchAADDPrf6guOwMNABuZUSFYcW0qTrFV9EPax%2Fl45MD3%2B8T0YZBUaI8Ld2%2F2lkm576vGgJzaoyT4JUH%2BnOBCRV95tmMPpCxuOaR%2BFz4Ble%2FWE2i7GOQpDy2veCfY%2FV%2BZCb6SqNsrZqnZd2S8UKvLgqnKZkzc9Wj%2BScjMSaZuFv6hLxw8EBflUeYEKbv8jIdvoELIHNSWqnp3r77PKOfDz3uSStWQTSt5K%2B8Lb8zWUV7wQLx05wd2Q1Y2DrXSHGWbkO8hFba%2BlAZo8q8NA27LBYnW9rl2YPZNqmwYWO8foo8c26MQQmSb%2BoaCdsBodXlDqBU5%2FlvrSTRVKtWnW6Wn2mqGp8Whc%2BgT%2FnyfCxywThFzKX2yrOdyw0uHIzBi7hKjdnb2QCkGtpThHBCyuBt73DzL8Bo6f%2FgZ1KlQhvMPzu4cQGOqUBYzvwGEaO45MbRVUMu4QX2O0DLyOIyNI08PETImdY9W3Y3SJ8If0BTJ1%2BWvztgSS4w3cDLcnnNPjgdMT0BlPr0lxplOGbZANjn%2FLH7cF%2BZ4tLZX7U0w6oW5sdf37aWuEYUP4r%2FEPmLSwEL232VdwiLvBCnGK1IFtRrdzkYrbSn3hDG63uzg1PuypjiqPT2EbfZOj1fueRlsjVQw%2FUW9qBx%2BzZoW8z&X-Amz-Signature=848d9598f16e7d97b0ea0fd47c4db89f9f0e21706e3331d28226aacb67e96016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647FQT4ZA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg9zdvqb6FNS4mM%2FXZq6t6RdJW2j3emh2xqV6zEzb20QIgcOi48WJlFUVOMru7vK949PbDfVi4t0Jd%2FEocAUbfCIoqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9Ggt0%2FOJuwZmpn1ircA9b5TNqJPog2KvkbBMXmGNZkPSsKB0lBO6W00jd7HdFwHw9j%2FbmPr82wsSBYJjIiiUKFWBocpp5JG8jgvpokrOqrnGPu2VMH%2FclK4gucHVuOO1dobd1zuyp%2BOtzpze1g2td5LETOIyukQDeXWTzRbMGVwMHgL9u1QcZ11ZAj5gmeq8yuitUthClHz7KcYlviE7w8rp9DOj6ZPTuuVYp53i0hnVkKQ%2FYyzc31a7hcN%2B2117WhXqNTMuj4Y%2BR7QbBUjnvQpV5nvM3Q%2BAKn7seEWiuZkSYE4V8OgCij1F4N6g8Tz9mi1GpCH0WmaWJnPX4ZYafteFo2O93n3PTkKe8WLk9jE2UlWDRIJhwLPitcwogNR23PZM9xOQZHjgqwDClRYTaY0ex%2BjNJchAw7VmJ%2F9VjPzDoV6RR%2B3NkgJ0ld5Argzx%2F%2Fi4VhHMt8wA68mb8oVXyulK7uR4Ab9C3VKNlm2lKvxSqMVt3IVLvR91UR1GRgyk8yO%2BzH79MJl%2F8vgxQoN0ZPtqY1aQJty7ZZXqWKbsht4WapokVDSW7iLYf7JSPyFEyMft1npjfzQRTrk8QSzJS92GmD1mABbyFCQhLF55oKCj%2FiPVcNJ8JgkUzGD1itJFveRfW%2FKV42UZYEMLzv4cQGOqUBKd0%2F3mjutf5WYo4wf0haTfwqJpn4KG5ac7TEymG8K9hhxWGNiJi0yEZ6KjJLjQ7CpujbTvmc9TxtgV90ijDJsL5%2FBSuo2tmQIonYeKy4bynOuOVHvGQ0ngGrQsoHnezsRw8%2FrpJioxn1SOpgj5WilUV%2Bc0LAUL6t6%2BqauGUx3O0rjxxG4Ho%2FbuakrUMs310rmrmD9yM%2FRCMPVQCSvVdon2wiEEQs&X-Amz-Signature=ab191afcb9055a794788433a1398d3588dcb3abe445d75e1ceba2fbeecd05c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN3BXLUC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKxweeASPRzdHsKfMFrCMwl0XrRBKdNr4IjXHl6RIJEgIhAJ%2FDql1wfT%2BbZm5%2BdiOgqWj0xgjnbKcz8rAEAq3W5VxcKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxptherZjgN5%2F8qTXoq3AMAcJu6klOLE%2FmSq2AEIzZeD6Plh74qVnHTRoRSIqSXPMbtyH1WuUpx37Tc%2FjHjFzqlo1n9ZfdnKV37XsPaWGqS0J94aXSKQZQyqGVwPQTqYjvyiHjSNl9v9gIVAY5RLM3J7GhaHr53AtCWXth88TZMK8eu10LJ7LxnWn4nw7CkefHZyv0aERe3K4xIxb1vawNxoi3jl9l2dfhi40kfdmv5pIQo4g5PuDSDYPLhQqSXpiaKKrqoz9V9TekHaDxgnJebVerSEj1%2FVihuMZn7fRggxh4MrF%2FxwN867L8y0QpvdFmEdZvN7a0ILKU%2BS23N6zDhPBQ0Rs3X2BLcxoBUQB%2FfE5ToB1xPBLC0AJuSxufQUCewg1TIWaDzqnC5pxt7DuyAq1Lp3zDUCMYd20Jui8FU%2FHbPSVF3hf0bTtUyLQRKqW9qiUQ9LbPt3OEwlbtoMN%2FyYrlW%2Bhanw6g8OAMheU5%2Fcss6JFTnsRtlJguUuW%2FXHAcExkHI4j%2BEcEhFEsssZ5WqF5yZekv1WWJ9cyNVcRXTWAyqC%2BN8gPAgu3dQvmrr85Js4OALS0WWtt8HJUBoyh3PFrzhHKnUpZyESSjvzUKQ3t17BTiqy90gJOzOkwPw4QqP7lK32NnR2x926TCG7%2BHEBjqkAaVIzUsCvUba%2FV7JO4aygLaWIIzbIyj060ZvSjwLhBnirCQ5jUD%2FXjcaTRvqSQPGCJeNazS4sBdl85ixX76BoF%2FjTiQA%2By%2F8H3vHSN%2F6geJ5HD2aJF1HK82uzeheEsneKypHPOd7mMYpIeDyNpqm7B3S2BPdB9Sl00d3m%2FXNVkEplY7bJWJeyOG2lX7v%2FUBMtHXODvbiIRxbxVdP4WAO0eYA%2FLvX&X-Amz-Signature=c6f92554f5e04e9a63054bd5f838366075e7c49a289f21dc624d4ba803d0deeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNOEDFU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7UYAKXIi2I%2FdPtvne%2FQOnMqaPIk%2B2mQvFU5mZi2iUhAiEAk12IX9eCDu0jOREkEP8GOlApaMU08fOjq5gC5357XPsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrgxZcfw5Jmfb8eqSrcA%2F9K8maQlj6puTxpAalU2G7WltbdzD3L3E0qPCS4lS2YKCihei7Kige%2BH0iWJqOM2tTrByklSWsmRoEeTSjU5rr6BqsgJL7Ejpq9psGqpiTadg0Bo9u59IKBqct2s6A%2FaZQkQr5mvhnqmwGdN60C36c8p8IFa4Bxj%2BEOak5b6BVWB%2B6MY0ZmdUHENBmaYQlW%2F%2FBq9VKt1op%2FlEnP3sW0viiwvpfTVdNgE%2FP%2FEIFNekXPsNfW7iqjmnsmr6v4dwE42Du986gu%2BfFiNl8H7hvtbtSQAQJItjjmZZCDxS81tTZYhbFaGk2QaWOulFEVlj0UeTwXTmYvll8GitF%2F%2BVuxdPGD9w%2FK21BsyWnHTkjxl3EBBAKpsv6R7s3MeUfkW9lZby3MrC4AcOQBGCheXo60qWhOuVmvG4LzhGumbBVYHGiYfq0jdVX3qYg0trEqHXQc3Ch4pcwD14Yxcuc86g%2FWWazJb%2Bd%2BV%2FCPmhH2HVY9jhly1yDHtwNWy0gQ7LCDpnV3X4etHIMuc2hLnlMrclDnQLzQe1yTdG%2BSQTKvuvySQSRtyVeFG73MjEgAeqtZL1ovYW3VntaRkF%2FWq0jYEBHZpfTP%2BCMB9PQZvPNBFOFrCHos6HpY5LPigPl%2FPdTwMIbv4cQGOqUBDE8jEPJGbQzfvDkKJX5Z1kRnEVCnlMo97kKe6p0T49TQKKUzvz6SG9pe22ZW1x7zmiRR8qds0SaV%2FWqYxXIofS0mvDNB9nPXT5vMBmO7IRiqlAvEH8u%2FakeR6orvB%2Fgc64B7QCzEQQaCfICfuDLabO5eMkAJVCgN3ZumDknuJDE05mvFCa027Avb280kTbaxaBNlIBgdvKzsYQIO%2B4oiKcj5RYRe&X-Amz-Signature=0a6457c98d6a39c1fe39601869f5c61bd61d1e4af05fb9ab8be198cc4b4f73d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNOEDFU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7UYAKXIi2I%2FdPtvne%2FQOnMqaPIk%2B2mQvFU5mZi2iUhAiEAk12IX9eCDu0jOREkEP8GOlApaMU08fOjq5gC5357XPsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrgxZcfw5Jmfb8eqSrcA%2F9K8maQlj6puTxpAalU2G7WltbdzD3L3E0qPCS4lS2YKCihei7Kige%2BH0iWJqOM2tTrByklSWsmRoEeTSjU5rr6BqsgJL7Ejpq9psGqpiTadg0Bo9u59IKBqct2s6A%2FaZQkQr5mvhnqmwGdN60C36c8p8IFa4Bxj%2BEOak5b6BVWB%2B6MY0ZmdUHENBmaYQlW%2F%2FBq9VKt1op%2FlEnP3sW0viiwvpfTVdNgE%2FP%2FEIFNekXPsNfW7iqjmnsmr6v4dwE42Du986gu%2BfFiNl8H7hvtbtSQAQJItjjmZZCDxS81tTZYhbFaGk2QaWOulFEVlj0UeTwXTmYvll8GitF%2F%2BVuxdPGD9w%2FK21BsyWnHTkjxl3EBBAKpsv6R7s3MeUfkW9lZby3MrC4AcOQBGCheXo60qWhOuVmvG4LzhGumbBVYHGiYfq0jdVX3qYg0trEqHXQc3Ch4pcwD14Yxcuc86g%2FWWazJb%2Bd%2BV%2FCPmhH2HVY9jhly1yDHtwNWy0gQ7LCDpnV3X4etHIMuc2hLnlMrclDnQLzQe1yTdG%2BSQTKvuvySQSRtyVeFG73MjEgAeqtZL1ovYW3VntaRkF%2FWq0jYEBHZpfTP%2BCMB9PQZvPNBFOFrCHos6HpY5LPigPl%2FPdTwMIbv4cQGOqUBDE8jEPJGbQzfvDkKJX5Z1kRnEVCnlMo97kKe6p0T49TQKKUzvz6SG9pe22ZW1x7zmiRR8qds0SaV%2FWqYxXIofS0mvDNB9nPXT5vMBmO7IRiqlAvEH8u%2FakeR6orvB%2Fgc64B7QCzEQQaCfICfuDLabO5eMkAJVCgN3ZumDknuJDE05mvFCa027Avb280kTbaxaBNlIBgdvKzsYQIO%2B4oiKcj5RYRe&X-Amz-Signature=ad619a9d09cf4cb8a9ca0cc27b9d24ca93419187d535a0c14e0256f75cfddc44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLOIO5O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRN5zPaI7UtTTxuu%2BWDO2LZxNf%2BIPPBo%2FfaslCZsfiCQIgHFAFtTvQDPxjkLH%2BP0y1R88VNV8qDIz5vh%2BNNS2hJgsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6vy0tT5lA11UAIXircA4ReXUebnGg8SC2RdE%2FD2cbx4pcEukqlr8g1TghGV4%2FflSOOl%2FrpYkxk%2Fpxu%2BZ6ekO%2FQQThJpupzy7G2uYrLkhbuALgTjV1hCNQtNWHRbXlSPDlBt2vbozAGhZ6OwprGzXLXowN1pTBAIXbq0B79K5OSCoUY4SEZ%2BmBnTxsW8%2BpwJHMI9rd%2BhS4skH9hyCXCN4ZXtp7iZpOY6mpGPCeQMKjthXhIJV0q8hNvBAlD8oAe0nXhLNN3EDs8duarry5CtOXjtVnnVNqbfNhsUi%2B70mX9665PZZg2fFd%2BanPlWuFKkcBRqT16m%2FK9XZ6OC8paXafYTDX%2BrlIfyKo3RYHiabT7FuqXQXEh6I%2FE2pkInlDqDXEQLZEqL2WAzyfU%2BH46h7F2owtRQUziD1S3k322Y1cyce%2Bnsgo25rzZCw3%2FWNCBQbD8H1RFENwlfru1j%2BVgS%2FaG9WMayiwLFGbvxdB90T85kTbOoQHqHn9Hk0PbNtWVduRNdQRaMTXc2qzLCH4%2FErp%2BSLmVaOf2W3GNeXkqbpoeVk6xmdyIOWyitBRw2gqCLHPqmb4B4c0%2BBElUX9HMP53eOYmHEmUnD9086Md9i3cUU5vq%2FkcCGV4fB%2FRNYc7zMnuBXO0qHRGMoqtWML7v4cQGOqUBY5Bc3%2BfkvctkUS1iY9bbDj54TI%2F%2BgxFi6aFO811HldOJv3ofAi%2B6HfTrMucxtWXdagWdlneI9B6lc1Ny5ioE%2BqBhdL%2Fij7853EMk2SjMFUAlsGLuxI1XJzQwMco2rllSlQvtDr6tMkp586THVw2kpxnhPtOXKOmzaAGAKooFkwpER2XyDXhnINlaFmTtBirSubepsWzk%2FQa%2FmH6vFGu78En2fwM8&X-Amz-Signature=9d80a0eb7b418f99ce8f87d398eebabe3499577092f9067820fe452eec9fa60e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLOIO5O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRN5zPaI7UtTTxuu%2BWDO2LZxNf%2BIPPBo%2FfaslCZsfiCQIgHFAFtTvQDPxjkLH%2BP0y1R88VNV8qDIz5vh%2BNNS2hJgsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6vy0tT5lA11UAIXircA4ReXUebnGg8SC2RdE%2FD2cbx4pcEukqlr8g1TghGV4%2FflSOOl%2FrpYkxk%2Fpxu%2BZ6ekO%2FQQThJpupzy7G2uYrLkhbuALgTjV1hCNQtNWHRbXlSPDlBt2vbozAGhZ6OwprGzXLXowN1pTBAIXbq0B79K5OSCoUY4SEZ%2BmBnTxsW8%2BpwJHMI9rd%2BhS4skH9hyCXCN4ZXtp7iZpOY6mpGPCeQMKjthXhIJV0q8hNvBAlD8oAe0nXhLNN3EDs8duarry5CtOXjtVnnVNqbfNhsUi%2B70mX9665PZZg2fFd%2BanPlWuFKkcBRqT16m%2FK9XZ6OC8paXafYTDX%2BrlIfyKo3RYHiabT7FuqXQXEh6I%2FE2pkInlDqDXEQLZEqL2WAzyfU%2BH46h7F2owtRQUziD1S3k322Y1cyce%2Bnsgo25rzZCw3%2FWNCBQbD8H1RFENwlfru1j%2BVgS%2FaG9WMayiwLFGbvxdB90T85kTbOoQHqHn9Hk0PbNtWVduRNdQRaMTXc2qzLCH4%2FErp%2BSLmVaOf2W3GNeXkqbpoeVk6xmdyIOWyitBRw2gqCLHPqmb4B4c0%2BBElUX9HMP53eOYmHEmUnD9086Md9i3cUU5vq%2FkcCGV4fB%2FRNYc7zMnuBXO0qHRGMoqtWML7v4cQGOqUBY5Bc3%2BfkvctkUS1iY9bbDj54TI%2F%2BgxFi6aFO811HldOJv3ofAi%2B6HfTrMucxtWXdagWdlneI9B6lc1Ny5ioE%2BqBhdL%2Fij7853EMk2SjMFUAlsGLuxI1XJzQwMco2rllSlQvtDr6tMkp586THVw2kpxnhPtOXKOmzaAGAKooFkwpER2XyDXhnINlaFmTtBirSubepsWzk%2FQa%2FmH6vFGu78En2fwM8&X-Amz-Signature=cf2ab8a7915ceb9684893a56ed83da9936c309cc8318a0102c43585e1c4b58be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLOIO5O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRN5zPaI7UtTTxuu%2BWDO2LZxNf%2BIPPBo%2FfaslCZsfiCQIgHFAFtTvQDPxjkLH%2BP0y1R88VNV8qDIz5vh%2BNNS2hJgsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6vy0tT5lA11UAIXircA4ReXUebnGg8SC2RdE%2FD2cbx4pcEukqlr8g1TghGV4%2FflSOOl%2FrpYkxk%2Fpxu%2BZ6ekO%2FQQThJpupzy7G2uYrLkhbuALgTjV1hCNQtNWHRbXlSPDlBt2vbozAGhZ6OwprGzXLXowN1pTBAIXbq0B79K5OSCoUY4SEZ%2BmBnTxsW8%2BpwJHMI9rd%2BhS4skH9hyCXCN4ZXtp7iZpOY6mpGPCeQMKjthXhIJV0q8hNvBAlD8oAe0nXhLNN3EDs8duarry5CtOXjtVnnVNqbfNhsUi%2B70mX9665PZZg2fFd%2BanPlWuFKkcBRqT16m%2FK9XZ6OC8paXafYTDX%2BrlIfyKo3RYHiabT7FuqXQXEh6I%2FE2pkInlDqDXEQLZEqL2WAzyfU%2BH46h7F2owtRQUziD1S3k322Y1cyce%2Bnsgo25rzZCw3%2FWNCBQbD8H1RFENwlfru1j%2BVgS%2FaG9WMayiwLFGbvxdB90T85kTbOoQHqHn9Hk0PbNtWVduRNdQRaMTXc2qzLCH4%2FErp%2BSLmVaOf2W3GNeXkqbpoeVk6xmdyIOWyitBRw2gqCLHPqmb4B4c0%2BBElUX9HMP53eOYmHEmUnD9086Md9i3cUU5vq%2FkcCGV4fB%2FRNYc7zMnuBXO0qHRGMoqtWML7v4cQGOqUBY5Bc3%2BfkvctkUS1iY9bbDj54TI%2F%2BgxFi6aFO811HldOJv3ofAi%2B6HfTrMucxtWXdagWdlneI9B6lc1Ny5ioE%2BqBhdL%2Fij7853EMk2SjMFUAlsGLuxI1XJzQwMco2rllSlQvtDr6tMkp586THVw2kpxnhPtOXKOmzaAGAKooFkwpER2XyDXhnINlaFmTtBirSubepsWzk%2FQa%2FmH6vFGu78En2fwM8&X-Amz-Signature=23524950719cb1ffc9ef2bd193932201dcb00017bcd44d7032466b5a05c39771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLOIO5O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRN5zPaI7UtTTxuu%2BWDO2LZxNf%2BIPPBo%2FfaslCZsfiCQIgHFAFtTvQDPxjkLH%2BP0y1R88VNV8qDIz5vh%2BNNS2hJgsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6vy0tT5lA11UAIXircA4ReXUebnGg8SC2RdE%2FD2cbx4pcEukqlr8g1TghGV4%2FflSOOl%2FrpYkxk%2Fpxu%2BZ6ekO%2FQQThJpupzy7G2uYrLkhbuALgTjV1hCNQtNWHRbXlSPDlBt2vbozAGhZ6OwprGzXLXowN1pTBAIXbq0B79K5OSCoUY4SEZ%2BmBnTxsW8%2BpwJHMI9rd%2BhS4skH9hyCXCN4ZXtp7iZpOY6mpGPCeQMKjthXhIJV0q8hNvBAlD8oAe0nXhLNN3EDs8duarry5CtOXjtVnnVNqbfNhsUi%2B70mX9665PZZg2fFd%2BanPlWuFKkcBRqT16m%2FK9XZ6OC8paXafYTDX%2BrlIfyKo3RYHiabT7FuqXQXEh6I%2FE2pkInlDqDXEQLZEqL2WAzyfU%2BH46h7F2owtRQUziD1S3k322Y1cyce%2Bnsgo25rzZCw3%2FWNCBQbD8H1RFENwlfru1j%2BVgS%2FaG9WMayiwLFGbvxdB90T85kTbOoQHqHn9Hk0PbNtWVduRNdQRaMTXc2qzLCH4%2FErp%2BSLmVaOf2W3GNeXkqbpoeVk6xmdyIOWyitBRw2gqCLHPqmb4B4c0%2BBElUX9HMP53eOYmHEmUnD9086Md9i3cUU5vq%2FkcCGV4fB%2FRNYc7zMnuBXO0qHRGMoqtWML7v4cQGOqUBY5Bc3%2BfkvctkUS1iY9bbDj54TI%2F%2BgxFi6aFO811HldOJv3ofAi%2B6HfTrMucxtWXdagWdlneI9B6lc1Ny5ioE%2BqBhdL%2Fij7853EMk2SjMFUAlsGLuxI1XJzQwMco2rllSlQvtDr6tMkp586THVw2kpxnhPtOXKOmzaAGAKooFkwpER2XyDXhnINlaFmTtBirSubepsWzk%2FQa%2FmH6vFGu78En2fwM8&X-Amz-Signature=e28ac8fc17d464b4191306d4419e0fb4f5cb363ef450a72594cd4e6ae6d3ebad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLOIO5O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRN5zPaI7UtTTxuu%2BWDO2LZxNf%2BIPPBo%2FfaslCZsfiCQIgHFAFtTvQDPxjkLH%2BP0y1R88VNV8qDIz5vh%2BNNS2hJgsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6vy0tT5lA11UAIXircA4ReXUebnGg8SC2RdE%2FD2cbx4pcEukqlr8g1TghGV4%2FflSOOl%2FrpYkxk%2Fpxu%2BZ6ekO%2FQQThJpupzy7G2uYrLkhbuALgTjV1hCNQtNWHRbXlSPDlBt2vbozAGhZ6OwprGzXLXowN1pTBAIXbq0B79K5OSCoUY4SEZ%2BmBnTxsW8%2BpwJHMI9rd%2BhS4skH9hyCXCN4ZXtp7iZpOY6mpGPCeQMKjthXhIJV0q8hNvBAlD8oAe0nXhLNN3EDs8duarry5CtOXjtVnnVNqbfNhsUi%2B70mX9665PZZg2fFd%2BanPlWuFKkcBRqT16m%2FK9XZ6OC8paXafYTDX%2BrlIfyKo3RYHiabT7FuqXQXEh6I%2FE2pkInlDqDXEQLZEqL2WAzyfU%2BH46h7F2owtRQUziD1S3k322Y1cyce%2Bnsgo25rzZCw3%2FWNCBQbD8H1RFENwlfru1j%2BVgS%2FaG9WMayiwLFGbvxdB90T85kTbOoQHqHn9Hk0PbNtWVduRNdQRaMTXc2qzLCH4%2FErp%2BSLmVaOf2W3GNeXkqbpoeVk6xmdyIOWyitBRw2gqCLHPqmb4B4c0%2BBElUX9HMP53eOYmHEmUnD9086Md9i3cUU5vq%2FkcCGV4fB%2FRNYc7zMnuBXO0qHRGMoqtWML7v4cQGOqUBY5Bc3%2BfkvctkUS1iY9bbDj54TI%2F%2BgxFi6aFO811HldOJv3ofAi%2B6HfTrMucxtWXdagWdlneI9B6lc1Ny5ioE%2BqBhdL%2Fij7853EMk2SjMFUAlsGLuxI1XJzQwMco2rllSlQvtDr6tMkp586THVw2kpxnhPtOXKOmzaAGAKooFkwpER2XyDXhnINlaFmTtBirSubepsWzk%2FQa%2FmH6vFGu78En2fwM8&X-Amz-Signature=5dcbf1097df707b4ed2959d7de0ebf7be067ba9cb7957b502af3acfb5ed93343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLOIO5O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRN5zPaI7UtTTxuu%2BWDO2LZxNf%2BIPPBo%2FfaslCZsfiCQIgHFAFtTvQDPxjkLH%2BP0y1R88VNV8qDIz5vh%2BNNS2hJgsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6vy0tT5lA11UAIXircA4ReXUebnGg8SC2RdE%2FD2cbx4pcEukqlr8g1TghGV4%2FflSOOl%2FrpYkxk%2Fpxu%2BZ6ekO%2FQQThJpupzy7G2uYrLkhbuALgTjV1hCNQtNWHRbXlSPDlBt2vbozAGhZ6OwprGzXLXowN1pTBAIXbq0B79K5OSCoUY4SEZ%2BmBnTxsW8%2BpwJHMI9rd%2BhS4skH9hyCXCN4ZXtp7iZpOY6mpGPCeQMKjthXhIJV0q8hNvBAlD8oAe0nXhLNN3EDs8duarry5CtOXjtVnnVNqbfNhsUi%2B70mX9665PZZg2fFd%2BanPlWuFKkcBRqT16m%2FK9XZ6OC8paXafYTDX%2BrlIfyKo3RYHiabT7FuqXQXEh6I%2FE2pkInlDqDXEQLZEqL2WAzyfU%2BH46h7F2owtRQUziD1S3k322Y1cyce%2Bnsgo25rzZCw3%2FWNCBQbD8H1RFENwlfru1j%2BVgS%2FaG9WMayiwLFGbvxdB90T85kTbOoQHqHn9Hk0PbNtWVduRNdQRaMTXc2qzLCH4%2FErp%2BSLmVaOf2W3GNeXkqbpoeVk6xmdyIOWyitBRw2gqCLHPqmb4B4c0%2BBElUX9HMP53eOYmHEmUnD9086Md9i3cUU5vq%2FkcCGV4fB%2FRNYc7zMnuBXO0qHRGMoqtWML7v4cQGOqUBY5Bc3%2BfkvctkUS1iY9bbDj54TI%2F%2BgxFi6aFO811HldOJv3ofAi%2B6HfTrMucxtWXdagWdlneI9B6lc1Ny5ioE%2BqBhdL%2Fij7853EMk2SjMFUAlsGLuxI1XJzQwMco2rllSlQvtDr6tMkp586THVw2kpxnhPtOXKOmzaAGAKooFkwpER2XyDXhnINlaFmTtBirSubepsWzk%2FQa%2FmH6vFGu78En2fwM8&X-Amz-Signature=932e3b88b1a8a7379f16d2c93e46c476de8278c096ca9b9b157d97ba227f6865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLOIO5O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRN5zPaI7UtTTxuu%2BWDO2LZxNf%2BIPPBo%2FfaslCZsfiCQIgHFAFtTvQDPxjkLH%2BP0y1R88VNV8qDIz5vh%2BNNS2hJgsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6vy0tT5lA11UAIXircA4ReXUebnGg8SC2RdE%2FD2cbx4pcEukqlr8g1TghGV4%2FflSOOl%2FrpYkxk%2Fpxu%2BZ6ekO%2FQQThJpupzy7G2uYrLkhbuALgTjV1hCNQtNWHRbXlSPDlBt2vbozAGhZ6OwprGzXLXowN1pTBAIXbq0B79K5OSCoUY4SEZ%2BmBnTxsW8%2BpwJHMI9rd%2BhS4skH9hyCXCN4ZXtp7iZpOY6mpGPCeQMKjthXhIJV0q8hNvBAlD8oAe0nXhLNN3EDs8duarry5CtOXjtVnnVNqbfNhsUi%2B70mX9665PZZg2fFd%2BanPlWuFKkcBRqT16m%2FK9XZ6OC8paXafYTDX%2BrlIfyKo3RYHiabT7FuqXQXEh6I%2FE2pkInlDqDXEQLZEqL2WAzyfU%2BH46h7F2owtRQUziD1S3k322Y1cyce%2Bnsgo25rzZCw3%2FWNCBQbD8H1RFENwlfru1j%2BVgS%2FaG9WMayiwLFGbvxdB90T85kTbOoQHqHn9Hk0PbNtWVduRNdQRaMTXc2qzLCH4%2FErp%2BSLmVaOf2W3GNeXkqbpoeVk6xmdyIOWyitBRw2gqCLHPqmb4B4c0%2BBElUX9HMP53eOYmHEmUnD9086Md9i3cUU5vq%2FkcCGV4fB%2FRNYc7zMnuBXO0qHRGMoqtWML7v4cQGOqUBY5Bc3%2BfkvctkUS1iY9bbDj54TI%2F%2BgxFi6aFO811HldOJv3ofAi%2B6HfTrMucxtWXdagWdlneI9B6lc1Ny5ioE%2BqBhdL%2Fij7853EMk2SjMFUAlsGLuxI1XJzQwMco2rllSlQvtDr6tMkp586THVw2kpxnhPtOXKOmzaAGAKooFkwpER2XyDXhnINlaFmTtBirSubepsWzk%2FQa%2FmH6vFGu78En2fwM8&X-Amz-Signature=23524950719cb1ffc9ef2bd193932201dcb00017bcd44d7032466b5a05c39771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLOIO5O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRN5zPaI7UtTTxuu%2BWDO2LZxNf%2BIPPBo%2FfaslCZsfiCQIgHFAFtTvQDPxjkLH%2BP0y1R88VNV8qDIz5vh%2BNNS2hJgsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6vy0tT5lA11UAIXircA4ReXUebnGg8SC2RdE%2FD2cbx4pcEukqlr8g1TghGV4%2FflSOOl%2FrpYkxk%2Fpxu%2BZ6ekO%2FQQThJpupzy7G2uYrLkhbuALgTjV1hCNQtNWHRbXlSPDlBt2vbozAGhZ6OwprGzXLXowN1pTBAIXbq0B79K5OSCoUY4SEZ%2BmBnTxsW8%2BpwJHMI9rd%2BhS4skH9hyCXCN4ZXtp7iZpOY6mpGPCeQMKjthXhIJV0q8hNvBAlD8oAe0nXhLNN3EDs8duarry5CtOXjtVnnVNqbfNhsUi%2B70mX9665PZZg2fFd%2BanPlWuFKkcBRqT16m%2FK9XZ6OC8paXafYTDX%2BrlIfyKo3RYHiabT7FuqXQXEh6I%2FE2pkInlDqDXEQLZEqL2WAzyfU%2BH46h7F2owtRQUziD1S3k322Y1cyce%2Bnsgo25rzZCw3%2FWNCBQbD8H1RFENwlfru1j%2BVgS%2FaG9WMayiwLFGbvxdB90T85kTbOoQHqHn9Hk0PbNtWVduRNdQRaMTXc2qzLCH4%2FErp%2BSLmVaOf2W3GNeXkqbpoeVk6xmdyIOWyitBRw2gqCLHPqmb4B4c0%2BBElUX9HMP53eOYmHEmUnD9086Md9i3cUU5vq%2FkcCGV4fB%2FRNYc7zMnuBXO0qHRGMoqtWML7v4cQGOqUBY5Bc3%2BfkvctkUS1iY9bbDj54TI%2F%2BgxFi6aFO811HldOJv3ofAi%2B6HfTrMucxtWXdagWdlneI9B6lc1Ny5ioE%2BqBhdL%2Fij7853EMk2SjMFUAlsGLuxI1XJzQwMco2rllSlQvtDr6tMkp586THVw2kpxnhPtOXKOmzaAGAKooFkwpER2XyDXhnINlaFmTtBirSubepsWzk%2FQa%2FmH6vFGu78En2fwM8&X-Amz-Signature=86d8e8516275f3f4a851fa0cacab281fe4ed6c08e7902cd84c094f6be31ca3ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLOIO5O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRN5zPaI7UtTTxuu%2BWDO2LZxNf%2BIPPBo%2FfaslCZsfiCQIgHFAFtTvQDPxjkLH%2BP0y1R88VNV8qDIz5vh%2BNNS2hJgsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6vy0tT5lA11UAIXircA4ReXUebnGg8SC2RdE%2FD2cbx4pcEukqlr8g1TghGV4%2FflSOOl%2FrpYkxk%2Fpxu%2BZ6ekO%2FQQThJpupzy7G2uYrLkhbuALgTjV1hCNQtNWHRbXlSPDlBt2vbozAGhZ6OwprGzXLXowN1pTBAIXbq0B79K5OSCoUY4SEZ%2BmBnTxsW8%2BpwJHMI9rd%2BhS4skH9hyCXCN4ZXtp7iZpOY6mpGPCeQMKjthXhIJV0q8hNvBAlD8oAe0nXhLNN3EDs8duarry5CtOXjtVnnVNqbfNhsUi%2B70mX9665PZZg2fFd%2BanPlWuFKkcBRqT16m%2FK9XZ6OC8paXafYTDX%2BrlIfyKo3RYHiabT7FuqXQXEh6I%2FE2pkInlDqDXEQLZEqL2WAzyfU%2BH46h7F2owtRQUziD1S3k322Y1cyce%2Bnsgo25rzZCw3%2FWNCBQbD8H1RFENwlfru1j%2BVgS%2FaG9WMayiwLFGbvxdB90T85kTbOoQHqHn9Hk0PbNtWVduRNdQRaMTXc2qzLCH4%2FErp%2BSLmVaOf2W3GNeXkqbpoeVk6xmdyIOWyitBRw2gqCLHPqmb4B4c0%2BBElUX9HMP53eOYmHEmUnD9086Md9i3cUU5vq%2FkcCGV4fB%2FRNYc7zMnuBXO0qHRGMoqtWML7v4cQGOqUBY5Bc3%2BfkvctkUS1iY9bbDj54TI%2F%2BgxFi6aFO811HldOJv3ofAi%2B6HfTrMucxtWXdagWdlneI9B6lc1Ny5ioE%2BqBhdL%2Fij7853EMk2SjMFUAlsGLuxI1XJzQwMco2rllSlQvtDr6tMkp586THVw2kpxnhPtOXKOmzaAGAKooFkwpER2XyDXhnINlaFmTtBirSubepsWzk%2FQa%2FmH6vFGu78En2fwM8&X-Amz-Signature=bd5fb23026add5599ebbb8a0e404be6b12463a10795e4bd7ab97a931ea8d6599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLOIO5O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRN5zPaI7UtTTxuu%2BWDO2LZxNf%2BIPPBo%2FfaslCZsfiCQIgHFAFtTvQDPxjkLH%2BP0y1R88VNV8qDIz5vh%2BNNS2hJgsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6vy0tT5lA11UAIXircA4ReXUebnGg8SC2RdE%2FD2cbx4pcEukqlr8g1TghGV4%2FflSOOl%2FrpYkxk%2Fpxu%2BZ6ekO%2FQQThJpupzy7G2uYrLkhbuALgTjV1hCNQtNWHRbXlSPDlBt2vbozAGhZ6OwprGzXLXowN1pTBAIXbq0B79K5OSCoUY4SEZ%2BmBnTxsW8%2BpwJHMI9rd%2BhS4skH9hyCXCN4ZXtp7iZpOY6mpGPCeQMKjthXhIJV0q8hNvBAlD8oAe0nXhLNN3EDs8duarry5CtOXjtVnnVNqbfNhsUi%2B70mX9665PZZg2fFd%2BanPlWuFKkcBRqT16m%2FK9XZ6OC8paXafYTDX%2BrlIfyKo3RYHiabT7FuqXQXEh6I%2FE2pkInlDqDXEQLZEqL2WAzyfU%2BH46h7F2owtRQUziD1S3k322Y1cyce%2Bnsgo25rzZCw3%2FWNCBQbD8H1RFENwlfru1j%2BVgS%2FaG9WMayiwLFGbvxdB90T85kTbOoQHqHn9Hk0PbNtWVduRNdQRaMTXc2qzLCH4%2FErp%2BSLmVaOf2W3GNeXkqbpoeVk6xmdyIOWyitBRw2gqCLHPqmb4B4c0%2BBElUX9HMP53eOYmHEmUnD9086Md9i3cUU5vq%2FkcCGV4fB%2FRNYc7zMnuBXO0qHRGMoqtWML7v4cQGOqUBY5Bc3%2BfkvctkUS1iY9bbDj54TI%2F%2BgxFi6aFO811HldOJv3ofAi%2B6HfTrMucxtWXdagWdlneI9B6lc1Ny5ioE%2BqBhdL%2Fij7853EMk2SjMFUAlsGLuxI1XJzQwMco2rllSlQvtDr6tMkp586THVw2kpxnhPtOXKOmzaAGAKooFkwpER2XyDXhnINlaFmTtBirSubepsWzk%2FQa%2FmH6vFGu78En2fwM8&X-Amz-Signature=47b456cade12d1fdd4bcd55b107614d214aa01e943504a038cd85863e769efad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
