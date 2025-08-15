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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYPNPMM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGsij2mumUE%2BB0LVoYAWDibCZxBorD7jmBGa9Souh1%2FiAiAAu%2F7XUHlqvGtPL0DPQfhdAptjAcZicogUqn6HwJ43lir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4%2B%2FxA8zglZ1GC8mhKtwDzPBbd%2Fu9iTRiK6BkWPnaTd6TY1rgnWpPMLqO6gQFywqgz%2FrRq3u62NEnj%2ByNYwbOygLWFZGZPrC2XtsK238Iy8u%2BTRfnHfAqVsCHkzQRP0b74sw7B%2BKqhcOtIjUbJB02vmd82GKSjJEphvrfdYKXoMgMljdeCimK15VkFz5BcOhMzKqhjOXw1d8h7T9qJUSzlPqJMdYpfA3cxAnp47nIBvo%2Ffp3BVOFPJeEcIPLrSqs%2FIQi7TT0843bRdQW59Am4MLI6CrGuLQT1LF2e%2FZxjenjHF8may7eVs6B8DLfmQTQ%2BoBSiW7k4cxXZ9KspihNol5uU5nzLA0HANyUsjcRMiq2CWsF7Ve%2FCfLTe6n4ejAI2taxIeO9iC5hevs1FmRV%2FX7F5GVSI4oE2Ye42YVxdKlK7RlTm2NPbk6Giw7r1jir3sBiDTlnWHoYNl1lQWXtxdRjzieQsRTM13tZNj8zSjaicSvc9DitdSL1YfUT7VhNKcC7lMWvZAY8vnZho%2BXzY7CkCd26ZSaXxWb%2F9OdWGSAmtC2eb%2BH2uZcXHtcGOjLAVe7PznrN%2BX9ekWAFBkHNcsm2dQxG01AAhmeedKbKhhzzXW9Uf%2FvgFPcmils9JH6flhtIcA2549V9DOV8wq6P6xAY6pgHxSc7AQDyq2Yf48x5tLmVxuXl1M01bixH6QrvIs8BplUr53W6FOWke4p3Vin9XyuJtRrQtEhyfZzKTzcPikScpc2qbRA5XuvpQreq84r%2BVOKIbUib%2Fkdn0ZmU6%2FsJVGpYYy06ftc03w68pdesMlSiKq6SQG1fB1FCjnasVOp0MB2ls%2FCmeNdbbp9TP2FocsRDv7O9LFWrCvaNogHgnJbMGh%2BXv5VY9&X-Amz-Signature=1c34b2f57dc5e1080b3a62e6c3101242530fb838d6a50d4531e75e8a4233b451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYPNPMM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGsij2mumUE%2BB0LVoYAWDibCZxBorD7jmBGa9Souh1%2FiAiAAu%2F7XUHlqvGtPL0DPQfhdAptjAcZicogUqn6HwJ43lir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4%2B%2FxA8zglZ1GC8mhKtwDzPBbd%2Fu9iTRiK6BkWPnaTd6TY1rgnWpPMLqO6gQFywqgz%2FrRq3u62NEnj%2ByNYwbOygLWFZGZPrC2XtsK238Iy8u%2BTRfnHfAqVsCHkzQRP0b74sw7B%2BKqhcOtIjUbJB02vmd82GKSjJEphvrfdYKXoMgMljdeCimK15VkFz5BcOhMzKqhjOXw1d8h7T9qJUSzlPqJMdYpfA3cxAnp47nIBvo%2Ffp3BVOFPJeEcIPLrSqs%2FIQi7TT0843bRdQW59Am4MLI6CrGuLQT1LF2e%2FZxjenjHF8may7eVs6B8DLfmQTQ%2BoBSiW7k4cxXZ9KspihNol5uU5nzLA0HANyUsjcRMiq2CWsF7Ve%2FCfLTe6n4ejAI2taxIeO9iC5hevs1FmRV%2FX7F5GVSI4oE2Ye42YVxdKlK7RlTm2NPbk6Giw7r1jir3sBiDTlnWHoYNl1lQWXtxdRjzieQsRTM13tZNj8zSjaicSvc9DitdSL1YfUT7VhNKcC7lMWvZAY8vnZho%2BXzY7CkCd26ZSaXxWb%2F9OdWGSAmtC2eb%2BH2uZcXHtcGOjLAVe7PznrN%2BX9ekWAFBkHNcsm2dQxG01AAhmeedKbKhhzzXW9Uf%2FvgFPcmils9JH6flhtIcA2549V9DOV8wq6P6xAY6pgHxSc7AQDyq2Yf48x5tLmVxuXl1M01bixH6QrvIs8BplUr53W6FOWke4p3Vin9XyuJtRrQtEhyfZzKTzcPikScpc2qbRA5XuvpQreq84r%2BVOKIbUib%2Fkdn0ZmU6%2FsJVGpYYy06ftc03w68pdesMlSiKq6SQG1fB1FCjnasVOp0MB2ls%2FCmeNdbbp9TP2FocsRDv7O9LFWrCvaNogHgnJbMGh%2BXv5VY9&X-Amz-Signature=92929454f6787d030152449931abc44ede6a7685518806641069d8f7c6ff1974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYPNPMM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGsij2mumUE%2BB0LVoYAWDibCZxBorD7jmBGa9Souh1%2FiAiAAu%2F7XUHlqvGtPL0DPQfhdAptjAcZicogUqn6HwJ43lir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4%2B%2FxA8zglZ1GC8mhKtwDzPBbd%2Fu9iTRiK6BkWPnaTd6TY1rgnWpPMLqO6gQFywqgz%2FrRq3u62NEnj%2ByNYwbOygLWFZGZPrC2XtsK238Iy8u%2BTRfnHfAqVsCHkzQRP0b74sw7B%2BKqhcOtIjUbJB02vmd82GKSjJEphvrfdYKXoMgMljdeCimK15VkFz5BcOhMzKqhjOXw1d8h7T9qJUSzlPqJMdYpfA3cxAnp47nIBvo%2Ffp3BVOFPJeEcIPLrSqs%2FIQi7TT0843bRdQW59Am4MLI6CrGuLQT1LF2e%2FZxjenjHF8may7eVs6B8DLfmQTQ%2BoBSiW7k4cxXZ9KspihNol5uU5nzLA0HANyUsjcRMiq2CWsF7Ve%2FCfLTe6n4ejAI2taxIeO9iC5hevs1FmRV%2FX7F5GVSI4oE2Ye42YVxdKlK7RlTm2NPbk6Giw7r1jir3sBiDTlnWHoYNl1lQWXtxdRjzieQsRTM13tZNj8zSjaicSvc9DitdSL1YfUT7VhNKcC7lMWvZAY8vnZho%2BXzY7CkCd26ZSaXxWb%2F9OdWGSAmtC2eb%2BH2uZcXHtcGOjLAVe7PznrN%2BX9ekWAFBkHNcsm2dQxG01AAhmeedKbKhhzzXW9Uf%2FvgFPcmils9JH6flhtIcA2549V9DOV8wq6P6xAY6pgHxSc7AQDyq2Yf48x5tLmVxuXl1M01bixH6QrvIs8BplUr53W6FOWke4p3Vin9XyuJtRrQtEhyfZzKTzcPikScpc2qbRA5XuvpQreq84r%2BVOKIbUib%2Fkdn0ZmU6%2FsJVGpYYy06ftc03w68pdesMlSiKq6SQG1fB1FCjnasVOp0MB2ls%2FCmeNdbbp9TP2FocsRDv7O9LFWrCvaNogHgnJbMGh%2BXv5VY9&X-Amz-Signature=5c6b50468b90d5cbb51085478fcefba7b643d97eeb16c885806c3ef77f76f7f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYPNPMM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGsij2mumUE%2BB0LVoYAWDibCZxBorD7jmBGa9Souh1%2FiAiAAu%2F7XUHlqvGtPL0DPQfhdAptjAcZicogUqn6HwJ43lir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4%2B%2FxA8zglZ1GC8mhKtwDzPBbd%2Fu9iTRiK6BkWPnaTd6TY1rgnWpPMLqO6gQFywqgz%2FrRq3u62NEnj%2ByNYwbOygLWFZGZPrC2XtsK238Iy8u%2BTRfnHfAqVsCHkzQRP0b74sw7B%2BKqhcOtIjUbJB02vmd82GKSjJEphvrfdYKXoMgMljdeCimK15VkFz5BcOhMzKqhjOXw1d8h7T9qJUSzlPqJMdYpfA3cxAnp47nIBvo%2Ffp3BVOFPJeEcIPLrSqs%2FIQi7TT0843bRdQW59Am4MLI6CrGuLQT1LF2e%2FZxjenjHF8may7eVs6B8DLfmQTQ%2BoBSiW7k4cxXZ9KspihNol5uU5nzLA0HANyUsjcRMiq2CWsF7Ve%2FCfLTe6n4ejAI2taxIeO9iC5hevs1FmRV%2FX7F5GVSI4oE2Ye42YVxdKlK7RlTm2NPbk6Giw7r1jir3sBiDTlnWHoYNl1lQWXtxdRjzieQsRTM13tZNj8zSjaicSvc9DitdSL1YfUT7VhNKcC7lMWvZAY8vnZho%2BXzY7CkCd26ZSaXxWb%2F9OdWGSAmtC2eb%2BH2uZcXHtcGOjLAVe7PznrN%2BX9ekWAFBkHNcsm2dQxG01AAhmeedKbKhhzzXW9Uf%2FvgFPcmils9JH6flhtIcA2549V9DOV8wq6P6xAY6pgHxSc7AQDyq2Yf48x5tLmVxuXl1M01bixH6QrvIs8BplUr53W6FOWke4p3Vin9XyuJtRrQtEhyfZzKTzcPikScpc2qbRA5XuvpQreq84r%2BVOKIbUib%2Fkdn0ZmU6%2FsJVGpYYy06ftc03w68pdesMlSiKq6SQG1fB1FCjnasVOp0MB2ls%2FCmeNdbbp9TP2FocsRDv7O9LFWrCvaNogHgnJbMGh%2BXv5VY9&X-Amz-Signature=c7b435b5a9fea2b83560a38ef2877b6d10ad078dbe3d666b102b9b94852f1a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYPNPMM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGsij2mumUE%2BB0LVoYAWDibCZxBorD7jmBGa9Souh1%2FiAiAAu%2F7XUHlqvGtPL0DPQfhdAptjAcZicogUqn6HwJ43lir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4%2B%2FxA8zglZ1GC8mhKtwDzPBbd%2Fu9iTRiK6BkWPnaTd6TY1rgnWpPMLqO6gQFywqgz%2FrRq3u62NEnj%2ByNYwbOygLWFZGZPrC2XtsK238Iy8u%2BTRfnHfAqVsCHkzQRP0b74sw7B%2BKqhcOtIjUbJB02vmd82GKSjJEphvrfdYKXoMgMljdeCimK15VkFz5BcOhMzKqhjOXw1d8h7T9qJUSzlPqJMdYpfA3cxAnp47nIBvo%2Ffp3BVOFPJeEcIPLrSqs%2FIQi7TT0843bRdQW59Am4MLI6CrGuLQT1LF2e%2FZxjenjHF8may7eVs6B8DLfmQTQ%2BoBSiW7k4cxXZ9KspihNol5uU5nzLA0HANyUsjcRMiq2CWsF7Ve%2FCfLTe6n4ejAI2taxIeO9iC5hevs1FmRV%2FX7F5GVSI4oE2Ye42YVxdKlK7RlTm2NPbk6Giw7r1jir3sBiDTlnWHoYNl1lQWXtxdRjzieQsRTM13tZNj8zSjaicSvc9DitdSL1YfUT7VhNKcC7lMWvZAY8vnZho%2BXzY7CkCd26ZSaXxWb%2F9OdWGSAmtC2eb%2BH2uZcXHtcGOjLAVe7PznrN%2BX9ekWAFBkHNcsm2dQxG01AAhmeedKbKhhzzXW9Uf%2FvgFPcmils9JH6flhtIcA2549V9DOV8wq6P6xAY6pgHxSc7AQDyq2Yf48x5tLmVxuXl1M01bixH6QrvIs8BplUr53W6FOWke4p3Vin9XyuJtRrQtEhyfZzKTzcPikScpc2qbRA5XuvpQreq84r%2BVOKIbUib%2Fkdn0ZmU6%2FsJVGpYYy06ftc03w68pdesMlSiKq6SQG1fB1FCjnasVOp0MB2ls%2FCmeNdbbp9TP2FocsRDv7O9LFWrCvaNogHgnJbMGh%2BXv5VY9&X-Amz-Signature=2cedcda4758e4d9073bf2d08637b02161ae5817d440aedb5667f335125aa0a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYPNPMM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGsij2mumUE%2BB0LVoYAWDibCZxBorD7jmBGa9Souh1%2FiAiAAu%2F7XUHlqvGtPL0DPQfhdAptjAcZicogUqn6HwJ43lir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4%2B%2FxA8zglZ1GC8mhKtwDzPBbd%2Fu9iTRiK6BkWPnaTd6TY1rgnWpPMLqO6gQFywqgz%2FrRq3u62NEnj%2ByNYwbOygLWFZGZPrC2XtsK238Iy8u%2BTRfnHfAqVsCHkzQRP0b74sw7B%2BKqhcOtIjUbJB02vmd82GKSjJEphvrfdYKXoMgMljdeCimK15VkFz5BcOhMzKqhjOXw1d8h7T9qJUSzlPqJMdYpfA3cxAnp47nIBvo%2Ffp3BVOFPJeEcIPLrSqs%2FIQi7TT0843bRdQW59Am4MLI6CrGuLQT1LF2e%2FZxjenjHF8may7eVs6B8DLfmQTQ%2BoBSiW7k4cxXZ9KspihNol5uU5nzLA0HANyUsjcRMiq2CWsF7Ve%2FCfLTe6n4ejAI2taxIeO9iC5hevs1FmRV%2FX7F5GVSI4oE2Ye42YVxdKlK7RlTm2NPbk6Giw7r1jir3sBiDTlnWHoYNl1lQWXtxdRjzieQsRTM13tZNj8zSjaicSvc9DitdSL1YfUT7VhNKcC7lMWvZAY8vnZho%2BXzY7CkCd26ZSaXxWb%2F9OdWGSAmtC2eb%2BH2uZcXHtcGOjLAVe7PznrN%2BX9ekWAFBkHNcsm2dQxG01AAhmeedKbKhhzzXW9Uf%2FvgFPcmils9JH6flhtIcA2549V9DOV8wq6P6xAY6pgHxSc7AQDyq2Yf48x5tLmVxuXl1M01bixH6QrvIs8BplUr53W6FOWke4p3Vin9XyuJtRrQtEhyfZzKTzcPikScpc2qbRA5XuvpQreq84r%2BVOKIbUib%2Fkdn0ZmU6%2FsJVGpYYy06ftc03w68pdesMlSiKq6SQG1fB1FCjnasVOp0MB2ls%2FCmeNdbbp9TP2FocsRDv7O9LFWrCvaNogHgnJbMGh%2BXv5VY9&X-Amz-Signature=3ae294f1ee43320e6a3d857b83854dc7b8ec5d569f0ee02c464ef81b08a9c7b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYPNPMM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGsij2mumUE%2BB0LVoYAWDibCZxBorD7jmBGa9Souh1%2FiAiAAu%2F7XUHlqvGtPL0DPQfhdAptjAcZicogUqn6HwJ43lir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4%2B%2FxA8zglZ1GC8mhKtwDzPBbd%2Fu9iTRiK6BkWPnaTd6TY1rgnWpPMLqO6gQFywqgz%2FrRq3u62NEnj%2ByNYwbOygLWFZGZPrC2XtsK238Iy8u%2BTRfnHfAqVsCHkzQRP0b74sw7B%2BKqhcOtIjUbJB02vmd82GKSjJEphvrfdYKXoMgMljdeCimK15VkFz5BcOhMzKqhjOXw1d8h7T9qJUSzlPqJMdYpfA3cxAnp47nIBvo%2Ffp3BVOFPJeEcIPLrSqs%2FIQi7TT0843bRdQW59Am4MLI6CrGuLQT1LF2e%2FZxjenjHF8may7eVs6B8DLfmQTQ%2BoBSiW7k4cxXZ9KspihNol5uU5nzLA0HANyUsjcRMiq2CWsF7Ve%2FCfLTe6n4ejAI2taxIeO9iC5hevs1FmRV%2FX7F5GVSI4oE2Ye42YVxdKlK7RlTm2NPbk6Giw7r1jir3sBiDTlnWHoYNl1lQWXtxdRjzieQsRTM13tZNj8zSjaicSvc9DitdSL1YfUT7VhNKcC7lMWvZAY8vnZho%2BXzY7CkCd26ZSaXxWb%2F9OdWGSAmtC2eb%2BH2uZcXHtcGOjLAVe7PznrN%2BX9ekWAFBkHNcsm2dQxG01AAhmeedKbKhhzzXW9Uf%2FvgFPcmils9JH6flhtIcA2549V9DOV8wq6P6xAY6pgHxSc7AQDyq2Yf48x5tLmVxuXl1M01bixH6QrvIs8BplUr53W6FOWke4p3Vin9XyuJtRrQtEhyfZzKTzcPikScpc2qbRA5XuvpQreq84r%2BVOKIbUib%2Fkdn0ZmU6%2FsJVGpYYy06ftc03w68pdesMlSiKq6SQG1fB1FCjnasVOp0MB2ls%2FCmeNdbbp9TP2FocsRDv7O9LFWrCvaNogHgnJbMGh%2BXv5VY9&X-Amz-Signature=d9ecb905f54fb99a1ffa8643183d69f0a481b567db739140d0290b1ab66f1bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYPNPMM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGsij2mumUE%2BB0LVoYAWDibCZxBorD7jmBGa9Souh1%2FiAiAAu%2F7XUHlqvGtPL0DPQfhdAptjAcZicogUqn6HwJ43lir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4%2B%2FxA8zglZ1GC8mhKtwDzPBbd%2Fu9iTRiK6BkWPnaTd6TY1rgnWpPMLqO6gQFywqgz%2FrRq3u62NEnj%2ByNYwbOygLWFZGZPrC2XtsK238Iy8u%2BTRfnHfAqVsCHkzQRP0b74sw7B%2BKqhcOtIjUbJB02vmd82GKSjJEphvrfdYKXoMgMljdeCimK15VkFz5BcOhMzKqhjOXw1d8h7T9qJUSzlPqJMdYpfA3cxAnp47nIBvo%2Ffp3BVOFPJeEcIPLrSqs%2FIQi7TT0843bRdQW59Am4MLI6CrGuLQT1LF2e%2FZxjenjHF8may7eVs6B8DLfmQTQ%2BoBSiW7k4cxXZ9KspihNol5uU5nzLA0HANyUsjcRMiq2CWsF7Ve%2FCfLTe6n4ejAI2taxIeO9iC5hevs1FmRV%2FX7F5GVSI4oE2Ye42YVxdKlK7RlTm2NPbk6Giw7r1jir3sBiDTlnWHoYNl1lQWXtxdRjzieQsRTM13tZNj8zSjaicSvc9DitdSL1YfUT7VhNKcC7lMWvZAY8vnZho%2BXzY7CkCd26ZSaXxWb%2F9OdWGSAmtC2eb%2BH2uZcXHtcGOjLAVe7PznrN%2BX9ekWAFBkHNcsm2dQxG01AAhmeedKbKhhzzXW9Uf%2FvgFPcmils9JH6flhtIcA2549V9DOV8wq6P6xAY6pgHxSc7AQDyq2Yf48x5tLmVxuXl1M01bixH6QrvIs8BplUr53W6FOWke4p3Vin9XyuJtRrQtEhyfZzKTzcPikScpc2qbRA5XuvpQreq84r%2BVOKIbUib%2Fkdn0ZmU6%2FsJVGpYYy06ftc03w68pdesMlSiKq6SQG1fB1FCjnasVOp0MB2ls%2FCmeNdbbp9TP2FocsRDv7O9LFWrCvaNogHgnJbMGh%2BXv5VY9&X-Amz-Signature=6515c10c3b8401e8b53d3a044e14129b25081f46758a0fc1f0439d032a1b8d6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYPNPMM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGsij2mumUE%2BB0LVoYAWDibCZxBorD7jmBGa9Souh1%2FiAiAAu%2F7XUHlqvGtPL0DPQfhdAptjAcZicogUqn6HwJ43lir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4%2B%2FxA8zglZ1GC8mhKtwDzPBbd%2Fu9iTRiK6BkWPnaTd6TY1rgnWpPMLqO6gQFywqgz%2FrRq3u62NEnj%2ByNYwbOygLWFZGZPrC2XtsK238Iy8u%2BTRfnHfAqVsCHkzQRP0b74sw7B%2BKqhcOtIjUbJB02vmd82GKSjJEphvrfdYKXoMgMljdeCimK15VkFz5BcOhMzKqhjOXw1d8h7T9qJUSzlPqJMdYpfA3cxAnp47nIBvo%2Ffp3BVOFPJeEcIPLrSqs%2FIQi7TT0843bRdQW59Am4MLI6CrGuLQT1LF2e%2FZxjenjHF8may7eVs6B8DLfmQTQ%2BoBSiW7k4cxXZ9KspihNol5uU5nzLA0HANyUsjcRMiq2CWsF7Ve%2FCfLTe6n4ejAI2taxIeO9iC5hevs1FmRV%2FX7F5GVSI4oE2Ye42YVxdKlK7RlTm2NPbk6Giw7r1jir3sBiDTlnWHoYNl1lQWXtxdRjzieQsRTM13tZNj8zSjaicSvc9DitdSL1YfUT7VhNKcC7lMWvZAY8vnZho%2BXzY7CkCd26ZSaXxWb%2F9OdWGSAmtC2eb%2BH2uZcXHtcGOjLAVe7PznrN%2BX9ekWAFBkHNcsm2dQxG01AAhmeedKbKhhzzXW9Uf%2FvgFPcmils9JH6flhtIcA2549V9DOV8wq6P6xAY6pgHxSc7AQDyq2Yf48x5tLmVxuXl1M01bixH6QrvIs8BplUr53W6FOWke4p3Vin9XyuJtRrQtEhyfZzKTzcPikScpc2qbRA5XuvpQreq84r%2BVOKIbUib%2Fkdn0ZmU6%2FsJVGpYYy06ftc03w68pdesMlSiKq6SQG1fB1FCjnasVOp0MB2ls%2FCmeNdbbp9TP2FocsRDv7O9LFWrCvaNogHgnJbMGh%2BXv5VY9&X-Amz-Signature=f14f5ba355ca8d147a61874c67f22182bb7aa1f95958aaffce5438b9169b034c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYPNPMM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGsij2mumUE%2BB0LVoYAWDibCZxBorD7jmBGa9Souh1%2FiAiAAu%2F7XUHlqvGtPL0DPQfhdAptjAcZicogUqn6HwJ43lir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4%2B%2FxA8zglZ1GC8mhKtwDzPBbd%2Fu9iTRiK6BkWPnaTd6TY1rgnWpPMLqO6gQFywqgz%2FrRq3u62NEnj%2ByNYwbOygLWFZGZPrC2XtsK238Iy8u%2BTRfnHfAqVsCHkzQRP0b74sw7B%2BKqhcOtIjUbJB02vmd82GKSjJEphvrfdYKXoMgMljdeCimK15VkFz5BcOhMzKqhjOXw1d8h7T9qJUSzlPqJMdYpfA3cxAnp47nIBvo%2Ffp3BVOFPJeEcIPLrSqs%2FIQi7TT0843bRdQW59Am4MLI6CrGuLQT1LF2e%2FZxjenjHF8may7eVs6B8DLfmQTQ%2BoBSiW7k4cxXZ9KspihNol5uU5nzLA0HANyUsjcRMiq2CWsF7Ve%2FCfLTe6n4ejAI2taxIeO9iC5hevs1FmRV%2FX7F5GVSI4oE2Ye42YVxdKlK7RlTm2NPbk6Giw7r1jir3sBiDTlnWHoYNl1lQWXtxdRjzieQsRTM13tZNj8zSjaicSvc9DitdSL1YfUT7VhNKcC7lMWvZAY8vnZho%2BXzY7CkCd26ZSaXxWb%2F9OdWGSAmtC2eb%2BH2uZcXHtcGOjLAVe7PznrN%2BX9ekWAFBkHNcsm2dQxG01AAhmeedKbKhhzzXW9Uf%2FvgFPcmils9JH6flhtIcA2549V9DOV8wq6P6xAY6pgHxSc7AQDyq2Yf48x5tLmVxuXl1M01bixH6QrvIs8BplUr53W6FOWke4p3Vin9XyuJtRrQtEhyfZzKTzcPikScpc2qbRA5XuvpQreq84r%2BVOKIbUib%2Fkdn0ZmU6%2FsJVGpYYy06ftc03w68pdesMlSiKq6SQG1fB1FCjnasVOp0MB2ls%2FCmeNdbbp9TP2FocsRDv7O9LFWrCvaNogHgnJbMGh%2BXv5VY9&X-Amz-Signature=b87b44c1c6558bd500bd45ac25899a6d556077665170dab19fe2cb45496d326f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSSH4VJC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCBfaysjgrCOixIYXdu4nkhTjwBnHNet3mHocX3WfQYGgIhAKEb0E7QFGdnimIIT65uvhyhHR3eni517mvmoXfYZsXXKv8DCFMQABoMNjM3NDIzMTgzODA1IgxLMiprnmwiz7adViQq3APz4qNP39egHj99l%2BAXMx7trJ43vPTAxGkaqzTqCOQx6%2FvWuegOlyWRKC6NgaipoV2oLtaJhNuJJIZBq8PNpHH7lBwBWOpjpiLJUoqfHB0uafMhu%2Bhm%2BidQI9xYXJLhFQEXxGZCv91CUPmeR2YAkuZ31UCmvN206mzOabNALviJlDjaLne0ztZEYD%2FNrUqWuMPO%2Bpw0IzepQYniNTef%2Fbclkm6cXt3mfBPSKx59oemBKbKlWQtVEB7EQc8pB2x7aov5EcioduDZu4cfZN7bmYHqi9Vre75PkfkLA8XMbgj8rT50Yr1Ha%2Fpr2JbLk1%2F%2FE5MhU6Ho79lWEJ1el%2Blk3iLFOzNqZSqtJfidehfrNITTMbgRa8MFVFss3%2FK2wXWbLGUGGI87hENHT8Du0ONE8O3zoax3al11JvxFRYOyyCJyfm%2B8Yv%2F%2F9OQuveaOb4r%2FvgMsxL4FTE4Eui8FDrRbrFX0dKvl10IcQhJ5eKBKkkm4Yq%2BXk4lwlu%2FPky%2F5UFDeDCJl%2FvCWB8bKKE3aokyhrE1sAEA993p0Fju5edESeUFCFCnk5CtQIep3zwiqrvj%2FJJ%2BMTkkmHoiXEojgpEucYaHqjULJT82O8t%2BBOWS7hZsVADtuUKsk1%2B%2F9RA6BcDDdo%2FrEBjqkAY2tBEoxY476U2uayc5bePabbvlWl7n6z2luwEAsFG0ZJ7CAxoKbo5vH9DKMND9FINBTMIANZ1kP9a71Gjv9wSkS%2Fxkud81yFDXxsvr1%2Fso8vvbWLITOYTlW7AVfZWW5rrCrOQ%2B27IIyQa5q8kMlUMFR22n7SP7qKxCfpbEp3py9d46ortD67lLD3%2B7311EcAl8lQqok4ALQR4bvQR5emjt53qFk&X-Amz-Signature=290bcd89bcadc4eef9b9fdbf728fe9a24eec4b88cbbe4c4cc27d5e62c0293010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZNHHIYD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCCTHtADLw%2BKIUWgbTclHirY6TmQnomKzLmigpzoTZ8LAIgbQE9jXxz18PPOaMXcxv8pYKkLiH3xwSm3CIZjU%2FTF7Uq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDSXWA6ErAVdaGg1WSrcA2QbWLNehaBeDyr23Pac6tn13hEhlG7%2F30NcSRuljRocbN5eKiVJzkR%2BpQmrjheGeFPuyuKXmkpSoYL0y2dyECW9gKhdak8tgLAysosLJ8daFZgYPUAaZW2G1xRxSoaACB8zoTphYgSUrYnktAL5aYoPxWd2mo2gD18pqmVgaAlgnNI0vP5bGmG47LlPg3jTcoisbUZbu2ViVvgt%2BhqQX8TatdIVvZNaR%2BFvmg23XvaR9gx8GAcO76sfEudylkEpI%2FVlCjHDLh%2ByzOwMEi2erUOceSxcNHUzcQ7pidu5Zjj95CW4CCYofvQxLFENblOLyd7Mp9Pyc8Md%2FuEiM1qXMKG0RJ23Vtnzi4AM%2FBYtuzoB8pbfhYCP24KTiu9T9G3JN%2Bu0ur5OshDw1kD3nWkTIGxTGxrS2zwiJ2C%2FaPh6cb0ElrvO0vPDlo31FMxoMfMKMFDTuo1EYt%2FS4EypWK1qUwsNFCaIqZSH18zzUklYsR0r9ZNICtQBsZnFE4EGj%2FNJBnjMug4JmL3v%2FDe%2BSyX%2FgU5kxUfx%2FWY0XP0dxJWWRerq9b5kbd4eJhXFT%2FlxAC36rFAscLGVcH%2Baw0PWenvtYuHTQwoya5%2FRjpqkYNpN2OTom5LTL7w5T3e2hJJVMJaj%2BsQGOqUBeNnbjRM7O8hUX8L3ns%2BVu1NjnpwyYUUU34xYANZ6FiA9ZeQ8Ev9gVInDwP4S458l%2FPbZr8gccteiYf99w3Oaltgu6yjWPhTEqrrt2NcAq857MhtoSbdJq9KH7P5ndHSyVR3ifaNcbjWizhqeLRNrMGJ3nmVtWE5Obl3u%2BgmmnU9RpdO8ysWPTcHTeEcSIRiI3SPWAK7QnaKiUvaBIAotC2QGy6ws&X-Amz-Signature=933001090df105ed8a77bf69457e8c5d2aca8abd894c1e9a80ca520518f07359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR5IEOQM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDM4KwURzP2ynSMZv3InBAhOAQfGne59rzgx2ia9grK1gIhAJR%2BbNS3lC6KoIJ%2FZgBbr6hQAdTn95tMaKeKKpymhM%2F%2FKv8DCFMQABoMNjM3NDIzMTgzODA1Igzw45vl5VgwLnKw88Yq3AN%2B%2F%2FMlumoHXMxEQwNJeb%2FkBTQiFWmLYemCmhMMeheZHbsMVjGdlvMgIjBXnEUX0kQbToY06f8%2BF8J6r8DAYrQDyJPbQdvjz%2FRMzjBICOdLNtT8coyLadIC%2BgJu6bPLjVvx0c6u6KzSBQd7KqTJ14JvBCST9E2YN9%2Buv%2BYxFLkgqTiVjycadNK3mke5QFwIpQIq29Ud4Z6I6lSiheGkoVw4zZ3AN3O8raCZ4hvPgfKT%2BBJoFAFAxjjyQMjPTI8vVDGdFaen31fwrzhKJK34Hhcozf7T6I%2BBbiFLj8EeiueBMwGWwQ3U%2BT5A7CevXKF39smEMUzzg2qLbt6YX3e%2Bg40x8af7SpPXbEIIc4TcGktcKkdJq%2Be%2Bhw9d2BX%2BkYpAKXRlOIqeOSLSGP0%2F3NV4zLtFUAVDLPt06gD69rz7ENgK%2FZyHvDXc2LmDDldArtTOYND1RQY2k%2Bon78f7p0HU87cYLAgGVdUsXE2QSDeRTO%2FQ9pDMVc8rKZTvCSZ%2FEPrCLkSzuhjIWctRLHMVW7NEz0hADawQYGtzZX2jGvB8%2FLKqabaeLT9HNg7f8XN4rrmwGhYSPryQ2ZARerYbTgxKAqIZzi61X%2F1zavEuRl85bcr1mi402hDQao%2BUtDrHIDCNo%2FrEBjqkAc7tSTCjpCOTMlUJrUsfrO%2BHHiS7f3cnL%2FUMrYecQqAQB%2BRMtVXheNp4g5owvFZLX%2FVCE4Emq5k%2BBr1ksrKlVJpH444XFa%2FgiDfTjqZ5z635E4CGzJHkLN7rwSwGxz5FVF2TO7nyhVLCWTkWx%2FH2DnPtLyLnS7CbCa9EtE%2FwHvhnC18TfJoeDJOLjS51nwR1m4IakPIIHlHd%2FK5e3phu2Dln38%2BK&X-Amz-Signature=d0fbfd385bf383c3d3a9a34e78a0e177695ed3a8d853f6465a7661079889c110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYPNPMM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGsij2mumUE%2BB0LVoYAWDibCZxBorD7jmBGa9Souh1%2FiAiAAu%2F7XUHlqvGtPL0DPQfhdAptjAcZicogUqn6HwJ43lir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4%2B%2FxA8zglZ1GC8mhKtwDzPBbd%2Fu9iTRiK6BkWPnaTd6TY1rgnWpPMLqO6gQFywqgz%2FrRq3u62NEnj%2ByNYwbOygLWFZGZPrC2XtsK238Iy8u%2BTRfnHfAqVsCHkzQRP0b74sw7B%2BKqhcOtIjUbJB02vmd82GKSjJEphvrfdYKXoMgMljdeCimK15VkFz5BcOhMzKqhjOXw1d8h7T9qJUSzlPqJMdYpfA3cxAnp47nIBvo%2Ffp3BVOFPJeEcIPLrSqs%2FIQi7TT0843bRdQW59Am4MLI6CrGuLQT1LF2e%2FZxjenjHF8may7eVs6B8DLfmQTQ%2BoBSiW7k4cxXZ9KspihNol5uU5nzLA0HANyUsjcRMiq2CWsF7Ve%2FCfLTe6n4ejAI2taxIeO9iC5hevs1FmRV%2FX7F5GVSI4oE2Ye42YVxdKlK7RlTm2NPbk6Giw7r1jir3sBiDTlnWHoYNl1lQWXtxdRjzieQsRTM13tZNj8zSjaicSvc9DitdSL1YfUT7VhNKcC7lMWvZAY8vnZho%2BXzY7CkCd26ZSaXxWb%2F9OdWGSAmtC2eb%2BH2uZcXHtcGOjLAVe7PznrN%2BX9ekWAFBkHNcsm2dQxG01AAhmeedKbKhhzzXW9Uf%2FvgFPcmils9JH6flhtIcA2549V9DOV8wq6P6xAY6pgHxSc7AQDyq2Yf48x5tLmVxuXl1M01bixH6QrvIs8BplUr53W6FOWke4p3Vin9XyuJtRrQtEhyfZzKTzcPikScpc2qbRA5XuvpQreq84r%2BVOKIbUib%2Fkdn0ZmU6%2FsJVGpYYy06ftc03w68pdesMlSiKq6SQG1fB1FCjnasVOp0MB2ls%2FCmeNdbbp9TP2FocsRDv7O9LFWrCvaNogHgnJbMGh%2BXv5VY9&X-Amz-Signature=221136783ef1eb79a6b9a4c30974cd2710a3c89c0fa8483e9417742ab4df4d99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2HY4KI5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCPbom8y6VEGHu%2Fz6CADXV%2BMlZU1qf%2BJYhVsNadiO%2BjEwIhAOWB2vDT6v9z0yHBCS6Hfkpn745vlU48wp4pWgULOxDCKv8DCFMQABoMNjM3NDIzMTgzODA1IgyfLSmYUs%2BU1cfTG9Iq3AMQNlK%2B8YGUXYXt%2FK9wbkpmeySnr6MHlVOGAJovXwkTIAPvexpIh4%2BNmeRGpZ%2F7eisfqB7vjNWug8PwnrCdC9yzEmoNhoMdQN3C6HCReMBINnzdFQnQNaGXl%2FzLCEeZkaXS88HjeFfHcYe4kQnqJTxz53M5QYzV2dgvzicDC4WkxQveEWvpaSJSjViQNizO12w2vA9uY%2FBrbKQKGcU9jhKuTffmmmQ%2BUMArXpn1V01qTwWro2vWykMVs2xkSbskleA%2Ff8KChL40k4dosFm3h%2FAerwjtheMrmHTct%2FSGrvCNt%2BuUDrrcyaOcPibYmE%2Fk%2BpPDzDGO3HTRwxfA9awFebJghMvkieVMfYWLQNF4SiHCJQTp6Agp3ZN7sGU2YcBpKtoagjMpeP9dGJJe8f%2BU1y06jJtvmeCIypgW2bmmbg4Ubkk36GeTLHXtD1X3lppJork3WZBLJfBxLE7%2BbslHlYjgu%2B2oRhm8n%2B50QdXKegTJ3rsAkvOX96Nsv5CZUb1VBs8ZjENDdvRcpTROzPeHzLWbijRGa9h3lu0KL%2B8YpMBhslhXFv1cPUY4hvvg%2BQDR6GbTranUr5o4950GvEmw5QJvZ5iBvTiYaP%2BBeQgmiQIUMqBjXWX7pNNfjQwNSjDYovrEBjqkAR1l1Xc43bjGsEw2EUzJapaM1o%2Bf5ulOOzmX%2BTjGqb6Jv%2FhF%2BmNuRiWRnFIEO96urjKb7VSg9ENP4zse%2FAFxfSx6Q410mB4De6czH%2F7DhSc0aTA9vXRnrS0mCL8v%2FDnXLbDY7W3y9VALNONatic18Pe32LT36r5cS0F2sPCmpO0TuwvvsmFuY07g8VyRMRVeecBATh9g8mQkvcjEEZ8E294yVG69&X-Amz-Signature=0cf6b149ab19a8c05c494bcc02789ec8b9777a6bd65e0123aa87847ca688c574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYPNPMM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGsij2mumUE%2BB0LVoYAWDibCZxBorD7jmBGa9Souh1%2FiAiAAu%2F7XUHlqvGtPL0DPQfhdAptjAcZicogUqn6HwJ43lir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4%2B%2FxA8zglZ1GC8mhKtwDzPBbd%2Fu9iTRiK6BkWPnaTd6TY1rgnWpPMLqO6gQFywqgz%2FrRq3u62NEnj%2ByNYwbOygLWFZGZPrC2XtsK238Iy8u%2BTRfnHfAqVsCHkzQRP0b74sw7B%2BKqhcOtIjUbJB02vmd82GKSjJEphvrfdYKXoMgMljdeCimK15VkFz5BcOhMzKqhjOXw1d8h7T9qJUSzlPqJMdYpfA3cxAnp47nIBvo%2Ffp3BVOFPJeEcIPLrSqs%2FIQi7TT0843bRdQW59Am4MLI6CrGuLQT1LF2e%2FZxjenjHF8may7eVs6B8DLfmQTQ%2BoBSiW7k4cxXZ9KspihNol5uU5nzLA0HANyUsjcRMiq2CWsF7Ve%2FCfLTe6n4ejAI2taxIeO9iC5hevs1FmRV%2FX7F5GVSI4oE2Ye42YVxdKlK7RlTm2NPbk6Giw7r1jir3sBiDTlnWHoYNl1lQWXtxdRjzieQsRTM13tZNj8zSjaicSvc9DitdSL1YfUT7VhNKcC7lMWvZAY8vnZho%2BXzY7CkCd26ZSaXxWb%2F9OdWGSAmtC2eb%2BH2uZcXHtcGOjLAVe7PznrN%2BX9ekWAFBkHNcsm2dQxG01AAhmeedKbKhhzzXW9Uf%2FvgFPcmils9JH6flhtIcA2549V9DOV8wq6P6xAY6pgHxSc7AQDyq2Yf48x5tLmVxuXl1M01bixH6QrvIs8BplUr53W6FOWke4p3Vin9XyuJtRrQtEhyfZzKTzcPikScpc2qbRA5XuvpQreq84r%2BVOKIbUib%2Fkdn0ZmU6%2FsJVGpYYy06ftc03w68pdesMlSiKq6SQG1fB1FCjnasVOp0MB2ls%2FCmeNdbbp9TP2FocsRDv7O9LFWrCvaNogHgnJbMGh%2BXv5VY9&X-Amz-Signature=30179a128551285e32f093c4f90cac7915bb84669b4eec6afdd8b0336b421235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYRZLIDY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDB5A2rD8fmp0n9keyy%2BuJQXalsnbpQ4KJoHPQZAb2NWAIhAKI9owis%2BnlYyAhO7jSWTuIwGEKWo0JJtIRUKB41G0byKv8DCFMQABoMNjM3NDIzMTgzODA1Igzj24fZlNPdGnLBF%2Bwq3AMFJ%2F5FKi%2FqSu0YTh4W3FkbX%2BV%2F50axr5iBJV%2FSGklHIX1L%2B9KvW4WKWwhDNKohwf8E0uhLuSPOzhmoe%2Bnzw8NJ9PI94egokJXdKHaW9V7GWQv6rp68nd8sUOGyq86kn2ohjouNtaYIOPzarC9A7uG19xZOrHMl5sVBNDM%2F1xnx5EPwliC3y8aN3GFTigOrvKNJjD7vkU%2BRABHO89oe12uj101KqUZryAsQ%2BBbZdLs9uf46h84mcpBCgIdJjjOBwpqLnKeY2hJ%2BRvQAPlmPnejWHeurcz4vv9hjWcjqmLPt2fYdkoAEJZVh9OKhc7Ex8hnnLpSLewtvgzZg4cyAGxiMkjVf8LzhC31jnUTfAyld1w5Bpt0%2FtLSSKUxjy9vqWu%2BTxNKRa7RNMcZ0tYLSvx2USuaIEFbJMEiTtNKlwkONDo58Pgj805HPc9sP3O%2B0BOtwzhopu9sHU40SAY9LVr2XRDuDCgjGTRQs13rGoQwcVENf8dwAThkeUVicQNWFYXXBmHIjKvyHFn84UdpyynBU7dUg2r0GcT3wabxOBmh%2BWSvxMaxa0nzt6G1bsI1k742aRdxMnst4Oo0sVS3JZc0ZPqM29V3rLbL2sXsZSxM8fT5yOP53ERA8yIFz4zCro%2FrEBjqkAZV3TbMiaYH2VyBhMLIGma1tQD91WIaeS02CUdg4cyeVZURdIRjgbkH5N28sfBZL1PTbSSLw%2FhBDJnDccxrhISebWFPU6ehTu8ySR9xI4FuF%2F9OfZs9fp%2BY3ZN5PRjGWwquh1EJaR4XvcBuqLodEc%2FHHiNLgkfytrBr2XZq7%2FaLxxCOjv08oGNYISJEWRKbYzl4mavkNOdajc4LgCoCxwPt1%2B4%2B%2B&X-Amz-Signature=26f72dc8f2c7f1723803b10ae1a0bb9cd85b1a6edb77d5be4fd218659ec3b901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYPNPMM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGsij2mumUE%2BB0LVoYAWDibCZxBorD7jmBGa9Souh1%2FiAiAAu%2F7XUHlqvGtPL0DPQfhdAptjAcZicogUqn6HwJ43lir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4%2B%2FxA8zglZ1GC8mhKtwDzPBbd%2Fu9iTRiK6BkWPnaTd6TY1rgnWpPMLqO6gQFywqgz%2FrRq3u62NEnj%2ByNYwbOygLWFZGZPrC2XtsK238Iy8u%2BTRfnHfAqVsCHkzQRP0b74sw7B%2BKqhcOtIjUbJB02vmd82GKSjJEphvrfdYKXoMgMljdeCimK15VkFz5BcOhMzKqhjOXw1d8h7T9qJUSzlPqJMdYpfA3cxAnp47nIBvo%2Ffp3BVOFPJeEcIPLrSqs%2FIQi7TT0843bRdQW59Am4MLI6CrGuLQT1LF2e%2FZxjenjHF8may7eVs6B8DLfmQTQ%2BoBSiW7k4cxXZ9KspihNol5uU5nzLA0HANyUsjcRMiq2CWsF7Ve%2FCfLTe6n4ejAI2taxIeO9iC5hevs1FmRV%2FX7F5GVSI4oE2Ye42YVxdKlK7RlTm2NPbk6Giw7r1jir3sBiDTlnWHoYNl1lQWXtxdRjzieQsRTM13tZNj8zSjaicSvc9DitdSL1YfUT7VhNKcC7lMWvZAY8vnZho%2BXzY7CkCd26ZSaXxWb%2F9OdWGSAmtC2eb%2BH2uZcXHtcGOjLAVe7PznrN%2BX9ekWAFBkHNcsm2dQxG01AAhmeedKbKhhzzXW9Uf%2FvgFPcmils9JH6flhtIcA2549V9DOV8wq6P6xAY6pgHxSc7AQDyq2Yf48x5tLmVxuXl1M01bixH6QrvIs8BplUr53W6FOWke4p3Vin9XyuJtRrQtEhyfZzKTzcPikScpc2qbRA5XuvpQreq84r%2BVOKIbUib%2Fkdn0ZmU6%2FsJVGpYYy06ftc03w68pdesMlSiKq6SQG1fB1FCjnasVOp0MB2ls%2FCmeNdbbp9TP2FocsRDv7O9LFWrCvaNogHgnJbMGh%2BXv5VY9&X-Amz-Signature=f20861a7ec45f27f8bb229d702f1782f52f3b5628dd538cf74eb49feeb2aae0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652RZXGQA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCrHGbZXuCYwaVngsu0ZeF7ljlq29s0DZn8h4pWW9PkQAIhAKjR5PflgjuSvWqBC3JwOetVe0YWphC8zLO7pmfnCkjnKv8DCFMQABoMNjM3NDIzMTgzODA1IgxxxUFhupH4HjzavoUq3AO8GadZ5m%2BgpaokeUplhsb5algfr%2BI%2BZQN3GpjQ8hNxxUI32%2FmusxdNWXdx52GlcWI%2F8c%2FZgRl9zcR3X0fde9Al9YFoc3o%2BlAqpP8FJyEgqoo6tY01hAXjBOMCyy0hHwknTyv7PoyYqSV2h4p%2B65ahVmj332gpj4fNr%2FLwmOI1DaUuiM7ft8nk4YW%2FfpjxRISQzZ7CuJ8H16kI%2FjoD4FpcUDEhUaPftr6VsX6YwD4ASh9CunkkpOZxEDIv6%2BYQUMZyzdEHYpAoc8XGHBMaZwFmX91huLjBfwHOylEQRuR0OdFOStAzrvdS77h0YAG%2F12EN469eYiBXqrbwhw2wN5FQfqXxzQ%2BFx9%2FEepi7ylVHeXPRxt%2ByoyHP8lArqYUEwpXbXFfGLFAyPeWWSzFLRRKDasIIqrHeMbsPIiaJZKuoaNlNQARrF6Cp%2BP%2Fz07Fjbjzv4zmtXAlvIQi9cbGW3S2%2BYKLca17EBnp1mSh65tplEGr195bWXQy9eCsW7s9mO0RhF6eguQBEwafNNaXKRCP4NO3doa1pT8kgur4ZCYKT2HcEcl66H42HOG7XfVaYEblZf%2FdI956BJhIRab04P6Kh4EH2SqYX3ilToFALbOBVJpFmhVjYACki1yD9PBjD%2FovrEBjqkAQjCZ3al5X61WtqU4SvaxmTw5ceh2VwbcjlRa3nVDbv12Ba2Jbyx%2BHBwXIowzr2ILXsZOJKJpxnLnDDVDq4tkzoM8YZNTDaLDDZsaxZ08eG%2FfCL1XDMUA2krQFhy8d5fU5oDTPdTr0Z7cbvtWAch%2BxdylFWp5eUPZp%2FhYpzW0COkYpIvKJCGxOBwaCxm7kXcO9GEAVetEmT05a%2B3BQ8A%2FSNrhwQX&X-Amz-Signature=d1bea2933e2545a13c440ed17a5f4771172bbcb5b19902d9135d7d8e62ab4c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYPNPMM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGsij2mumUE%2BB0LVoYAWDibCZxBorD7jmBGa9Souh1%2FiAiAAu%2F7XUHlqvGtPL0DPQfhdAptjAcZicogUqn6HwJ43lir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4%2B%2FxA8zglZ1GC8mhKtwDzPBbd%2Fu9iTRiK6BkWPnaTd6TY1rgnWpPMLqO6gQFywqgz%2FrRq3u62NEnj%2ByNYwbOygLWFZGZPrC2XtsK238Iy8u%2BTRfnHfAqVsCHkzQRP0b74sw7B%2BKqhcOtIjUbJB02vmd82GKSjJEphvrfdYKXoMgMljdeCimK15VkFz5BcOhMzKqhjOXw1d8h7T9qJUSzlPqJMdYpfA3cxAnp47nIBvo%2Ffp3BVOFPJeEcIPLrSqs%2FIQi7TT0843bRdQW59Am4MLI6CrGuLQT1LF2e%2FZxjenjHF8may7eVs6B8DLfmQTQ%2BoBSiW7k4cxXZ9KspihNol5uU5nzLA0HANyUsjcRMiq2CWsF7Ve%2FCfLTe6n4ejAI2taxIeO9iC5hevs1FmRV%2FX7F5GVSI4oE2Ye42YVxdKlK7RlTm2NPbk6Giw7r1jir3sBiDTlnWHoYNl1lQWXtxdRjzieQsRTM13tZNj8zSjaicSvc9DitdSL1YfUT7VhNKcC7lMWvZAY8vnZho%2BXzY7CkCd26ZSaXxWb%2F9OdWGSAmtC2eb%2BH2uZcXHtcGOjLAVe7PznrN%2BX9ekWAFBkHNcsm2dQxG01AAhmeedKbKhhzzXW9Uf%2FvgFPcmils9JH6flhtIcA2549V9DOV8wq6P6xAY6pgHxSc7AQDyq2Yf48x5tLmVxuXl1M01bixH6QrvIs8BplUr53W6FOWke4p3Vin9XyuJtRrQtEhyfZzKTzcPikScpc2qbRA5XuvpQreq84r%2BVOKIbUib%2Fkdn0ZmU6%2FsJVGpYYy06ftc03w68pdesMlSiKq6SQG1fB1FCjnasVOp0MB2ls%2FCmeNdbbp9TP2FocsRDv7O9LFWrCvaNogHgnJbMGh%2BXv5VY9&X-Amz-Signature=fee64aa728360fce2068fe4ce23ef1153a47bbaf08d73ff175fc38bc8ea5332a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657GIOZMU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDzT25oS1S%2F6Wx5jFMNnr1dnm8BKlNXkV03JUl59ztXkAiAfeqzf74cRZg4OC5EtW8dv6lFqeYovIY%2FPXdnfRNFzcCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM8DxhHNZIZHSDQTlfKtwDylkmstrictyBGFDusRMxC%2FP%2BQ4hnbLfRLJ096367eI834fTDKCFYpmlN83NgZXLTIdr2%2B3KslUJXem8kihJwgGROqDJZa%2BRziVciokzvWa2g4qJ%2F8LBfg%2FveJmV1t2YYYhOWPdXgBPh5gL3YvZC5k%2BtGJBMWEQQ5JPZK%2F9MUSdX8i6flASd0x0irRqwmQSltVf0kxeAdeumrZYnknBYEdnt9%2BtYwfVdVFyg1mC24CjizVS90VfFw%2BZwWmt4cjr5J3csFe4c9fwzgswr%2BJc4a4FtJA37QB6g5fa3wNGcuDcu4SAljf2xoVhp%2FZUrWptczyX8mFHFDdHb1EcIGQMoSd7krKs7skGAbjQ4ZvvvmcasUMwxMmL%2BmcA7gjfKDSCvQi8pce43zxf5fV7hOLcPZvZvEXJMKpaLgQ3JrBB26xaeJWk9EuEy3DiZBxYrERTxBzkpMskE%2FCnGSmdoDzM9yKfAbQhhs5R8L1hwishorLH1kFk%2BBmmJ7Wsr0wMz4mSlZU135aHO%2F%2BHTxQ%2BMNET2VWO4JzrokBluTFT585mwcbt3DMGI7uhU23Y6knUCdUTYsLsGzVyrqbI2HgsZC4z4q03rOJ%2F9gkNRcM3sufPWVJqeFGUEOj2zzNwM8hnww26P6xAY6pgFXRs1B00BThicdrYRxk7eebTHPJRwTxl6%2BoSHouTuFw8uYnDqvIyO1EBS7wYK2iW%2Fo%2BhJnqf3we9GBaTaFcwJF0BCJB4xzXmcdxG%2BcvYuFTJ23ds1YFdrMw21Cy5bv4Y7SSTVPTGE3WIV1qjePQLLQ3vmQ9MtZ4%2Fm4AmvEZ%2F%2BiSKJlKtTWTV%2BGZ%2BJAlWBV4T2McUwtINO7ujEkO5UO45zbdj8Qs6s7&X-Amz-Signature=f020b465119247c55638929459e3c594743e0becd521ca437f6d08779e43fd7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62EF2XO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDhDIk7DAjvt3R167YyF0wjH4BpZJl9597aXMnfaQdX7AiEAgXrYiPwy8vBq%2BO2n2R%2BNsL8su5d%2BSeLbqi4g4xk30a0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDH6rP52zNobHaYiyCrcAwEWOKd0R5Cp5%2B68LnE%2FUXAzjtzvfcYye8DqUslkHP71oZMQNSCwT%2BIywzE0xQleNG6zGXW7HRGUpGpdQzfAv7dgSTx%2FnuU1FyQTX2HR2iMqAKlRBZci4317CQZEHy8wboONbB3XHxMBenNly8Jj0DYYTZCVM6D1bMDK66vWTJiAm3%2BEdnPsqxwjeSvsoYHq3pG7BQWFm1aJ35BmKm2E%2Fjm4mr7yzNekPbH4iZu7V%2BGnVuzyw%2FQbemgKBQrQACWjZxPrXVoo%2FfKGxURSFZ%2Bop0FpM4WWUa9AuObIjdwXqf7C9f%2FFAq6IZWtITrkwW2jJTF%2FKeFwUUHXSi3EM3DggGlbI1SF9lqYX%2Bv7wcT7V9oucjB318gw21mAqzW99pKxsFNBc2IzIW4yYoZfawMbUhki0ny4Z%2FUHNCHnseFRgtgZKGEhPGwBMMgQPPGBrYY92%2FUvaBXAMOKPDnbIPsjJ10nF3jciyxMKjqrg9EJaA9hK1aCHo0Izh9vfnvtRufewJ3Dgv3S%2BJm6mIIql4dKo%2FECcICKepJgFUoMt%2FMCN1n4AXgxDJXTDk1BiTWIPIofEhzIJ8VIUD8laNtkCC6XCa4Q7ktQSwERK112tOEXRVyOe4I133kdnPIK7tSvZSMKuj%2BsQGOqUBWZjTQXNkCdSgK09Uv1ipsFlJHfRJ9zAyaToVmarvGfGWiabpuAoT4fEX6%2BOBb7QC1wqFpefyvBcL2RS1a4g7k7KtK8efI7uUNCYerPkMHevcTjkkrNMLtE6svrrxqg8rVS%2Fa6CqM5Z9lsceqExgJUEDf1zjtYuDT8BxEVIj5RcS1%2BSXpk2Ta7UdKSIhGPXQW4qC%2FLfvZ9b7I7Mo4oMlmL5M9jeAP&X-Amz-Signature=f4d0648b6fd12307cddb6f73138028584bfa56e2bdb953b69c9ffe8f6f87ba2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWLACRL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDE%2BmiP%2FqGHuCMxRqDabicl7G3eIlhpxD37rnJTaR824AiBwt3WHsv%2BBbs5o5tWYJH1ChOzsJTfQH6u53oKEapyM3yr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMtS0YN8QLTzrS8gGwKtwDngeoEtnZGFsgWQ0tYTh%2B8Y41xGs8oyWdRwEuB%2Bmf1Ky9HF7Xldf1B3fa6Oqngo3x8KRM207H0iAsAVJTyscfDZ7PuxnEzbbC74gLkqBW0R5EG1QF9DNfrcJOqb7PtyifE1gUN1mT9a%2FCgJC11uBT3c%2FqqlcBb59ZxrHLtSZS1ABBRhWiHljWShiHUdL6d4d%2FrfbiyyJS%2B57y8UP%2FftP66pWulf5PaG42MA%2F5xm%2BxD0KuHDul8VWrdJ8eBdshgWIBs%2BPiiKA6Zo8XrZZh7DcBLqk61hks%2B6QJVm0Q6nzkifwVmT9n68%2BbS409Wkrufo%2BBIIUnOp13THfO%2FhyFZXpjY9hMOHhROJr%2Fs7DKFuIQPF5RpKi05XFY3Gj4e6m98xV6i8cjZu73l3DGPst2YejDTG29JRlYAg2%2FXyuYikneakbLeUKP0BgoTlDuIK8wZ3q%2F4Dw5lA42zGnEftjKGfNZvbz25dI5XprqlI9%2Fizs3BDZdt%2FnAKYDaDck%2FOyilddQQ7lN557IodRTZfcJlZEF6C8AVAuyBjx2i9H170FTk2jmM3LoCbnWXSMuWpV2PmVCWKbCzOFeXhAmeTnLZM5QyYkkc5AiTEExUYlJ7g6wS3Xpjjo71p3IOibCDPBAw2qL6xAY6pgEbEr%2F0UxlZTffYUsH%2BnqxQAw655zotoLo0kDYcQUBwgV%2Fn6MH6FOxSdBCWIpA0LO%2BruItpqz7t484Aa%2Fn7snHoWqmJDqcZMC%2BZOqIWxDhdqQ%2BBr1DNmMjEnskRBq9%2BEdER9d9qN1FmdM4h2ozAsFfGoFD9cpiG1f8XjFuymgWs%2Fw5LX%2Bg3NpNkNzWiDuSJi8UzCh4687JqpJ10N4EMw8m8JFjMSoDD&X-Amz-Signature=aa60b5ff6f014c9506fd895ec8a8e47218a1dbf3131baec68141c04ee4f0aa10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3IHKJ6Y%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQC0DOgpfJyHjqlYaTJ6QL%2F56yuNWgyfe7Ugcx32LgQ3CAIgKtLhP%2BzsQwHAmfQF3ifQfRLR%2FUWMeub31UT1%2Fe4v1WIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNlONw23%2F3n4iNnMHSrcA3HCTsCiDdAia2pPqEGYc%2BzTMcqyFexz7FfK5sxb6wf9YnfxBODZaMRPsnujMZHHtLBhKKyiiT6JcJxgEUOJlzNGgDpby96UXVS2ReKLYrO6LKAVBCZwIBY4S20W7XOHxgeLsXEMb1BxXfyzpjSH5c9jG6YjlZlTfYb%2BVtrErwRu4DzuniFhLidaDyJbuVkzyP3yXTRR6ScyRNIUpURfbxigwMuzB1DerAGgtZXl8NZGufa%2FFh07nV%2F4XMsnHW7CGrixKQWMmHBN3aADprNWVOGhWQWe4qnuLfWcXXoFwLlaHQEluMEUvu%2Fc7kYB3INM9pb%2Bmb46tlYR8UyOl1H6H01FD89ZA%2FzzFk%2FBfL8Q4CpGvN3RvnYJ1wdIBN4TUc9gikriY7hiVZJuHArhVHTeI7yLVJdgsuahTSLWrd5i0OuT7eZNaoi%2BgYwEGujLHElmNEW%2BGFQYl1cRsvGUjq42SSO3PnflG2mZ5vYwTc1cdGtNH%2BVDby4vXPOeLc2m66xkp9%2B6T0Kayi7NBJsEPHIAEk1MWnG6kzGBonDNXsLjWGFRtraSFKl83TdrZvoxmFifQDnD5ArdVFgqqx%2Fk3Gc2IKk%2BiVCiFoAzMj3wc9OTqrxQvwueoPuDp%2Fh%2BGWZVMIOj%2BsQGOqUBiwEkTd%2B1j29hR7aBbfX%2FtiBLjJI%2FPb20Aap2SzqRciGFNGXEUWIaqXfBwZolDl6duAcC7XTEVtJMXz9G9gRcJsjdj7Kdi1%2FL1gc8FJuGeuyNcNK25Wt5gnRbae61vCFhoxyF7oLapXjtlfV%2BMRKAAvx9UQkXXjeuKrVHxbe%2BwvrB88Ue0RQQY7uiIsM3cWBAIGHwbn4xyjWtQjP0yG2YPS%2FF5hFv&X-Amz-Signature=eba6d6b0a5154bfa4fa68a502f8e440cb58dedf8e515304f420daf6d1bc1e0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDCFYZ2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICqmUP%2FsVrjWVqjme2TmyYhmfliz8Z0e2MwyxJZBL8MYAiADM0bvqkcDgGFi9UW8BIFfXO2%2BfjVawBLudT1F7zzKKCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM8A0jdWCmeNnd%2B2PhKtwDUFhT710CTdZOx3LG13dVO5Sp9ipthrG6Abkm%2F5Vu2TfMB2uazqwyzWD8HBLSTzcF1QooZwf%2FyomI2YaDqAgGeZ5sWTDZLGYsblA6xhi0rPX%2BIaqq7jeZlDVS%2FGpECeUmsJrVawKdiv%2FXKaaXs0KF81d16CXax2Bc43pgP15ktb9gGYgw%2BsOLEPFt%2FpFqxOARSmWuERzk8xNYqM42%2Bd%2B3sRqTllubqrDbaI7avAJJBioOfcXzFDi%2FBS9dnYdzZ4vSCj9u6Om57gbuSMXsdMnisOxFcdTRBoxYmuykH1CEk1R%2F9Jjj5Q2t4alj%2BSBRdj5LK89xvmay8ay3QJbn5y%2FLPILn2hSSTjD%2Bi86JCd5TFnq40lIDjyi2lNnXH3XzSTrooVwWK6%2FBD%2B7cHGJja%2Bz7ZveThtSUQvZJ6Y6Y0%2BakQHN4cvNhke4gcrzFIoZNh58ztZX5GOqSi9aa6GD7Xp36xdm5n62ZVFLZm37B2qq81yB%2BtS%2BEx0qES6Y7FUXEGq5R9UIwOZnxA8qVz1ybQhFDrep4cHHK2f9Lo%2BkGNS6OVgfLmDmrUF3I%2FG48ex3n43ZSxboP7KGnxnY6fpH3U%2B4tH4zoswMGmKeyeRnVuEHyn1VYpsxX9SRV3ONB2jEwhKP6xAY6pgH1bHt%2FT3B8YkvqD92iy1%2BEVdLP9YYYo8pMh74DKzJCAfB1azKaQa2fpMkYDmZActKzGYnybWfVhredxlx9gmMa5Opif6ZMbuT1WExES2M8s4DSk%2FvpXBUlWxGIVt6QMFdQo2X582vcqIy3sq6KCFq3gavdxpMz%2FSJWB1lVoU2WWwAmokxEO1J%2BRfdHELJUHQM8EYVCevW8m7eJJru72fsIpQ9vN9AN&X-Amz-Signature=31612d55187ab85d0e55c8341ab5cc66dce0583485efca99893134583b6fba9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYPNPMM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGsij2mumUE%2BB0LVoYAWDibCZxBorD7jmBGa9Souh1%2FiAiAAu%2F7XUHlqvGtPL0DPQfhdAptjAcZicogUqn6HwJ43lir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4%2B%2FxA8zglZ1GC8mhKtwDzPBbd%2Fu9iTRiK6BkWPnaTd6TY1rgnWpPMLqO6gQFywqgz%2FrRq3u62NEnj%2ByNYwbOygLWFZGZPrC2XtsK238Iy8u%2BTRfnHfAqVsCHkzQRP0b74sw7B%2BKqhcOtIjUbJB02vmd82GKSjJEphvrfdYKXoMgMljdeCimK15VkFz5BcOhMzKqhjOXw1d8h7T9qJUSzlPqJMdYpfA3cxAnp47nIBvo%2Ffp3BVOFPJeEcIPLrSqs%2FIQi7TT0843bRdQW59Am4MLI6CrGuLQT1LF2e%2FZxjenjHF8may7eVs6B8DLfmQTQ%2BoBSiW7k4cxXZ9KspihNol5uU5nzLA0HANyUsjcRMiq2CWsF7Ve%2FCfLTe6n4ejAI2taxIeO9iC5hevs1FmRV%2FX7F5GVSI4oE2Ye42YVxdKlK7RlTm2NPbk6Giw7r1jir3sBiDTlnWHoYNl1lQWXtxdRjzieQsRTM13tZNj8zSjaicSvc9DitdSL1YfUT7VhNKcC7lMWvZAY8vnZho%2BXzY7CkCd26ZSaXxWb%2F9OdWGSAmtC2eb%2BH2uZcXHtcGOjLAVe7PznrN%2BX9ekWAFBkHNcsm2dQxG01AAhmeedKbKhhzzXW9Uf%2FvgFPcmils9JH6flhtIcA2549V9DOV8wq6P6xAY6pgHxSc7AQDyq2Yf48x5tLmVxuXl1M01bixH6QrvIs8BplUr53W6FOWke4p3Vin9XyuJtRrQtEhyfZzKTzcPikScpc2qbRA5XuvpQreq84r%2BVOKIbUib%2Fkdn0ZmU6%2FsJVGpYYy06ftc03w68pdesMlSiKq6SQG1fB1FCjnasVOp0MB2ls%2FCmeNdbbp9TP2FocsRDv7O9LFWrCvaNogHgnJbMGh%2BXv5VY9&X-Amz-Signature=cfc13dce1291ef30c781a9306e131964267bffc0909298e2f6f801351d7a9c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYPNPMM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGsij2mumUE%2BB0LVoYAWDibCZxBorD7jmBGa9Souh1%2FiAiAAu%2F7XUHlqvGtPL0DPQfhdAptjAcZicogUqn6HwJ43lir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4%2B%2FxA8zglZ1GC8mhKtwDzPBbd%2Fu9iTRiK6BkWPnaTd6TY1rgnWpPMLqO6gQFywqgz%2FrRq3u62NEnj%2ByNYwbOygLWFZGZPrC2XtsK238Iy8u%2BTRfnHfAqVsCHkzQRP0b74sw7B%2BKqhcOtIjUbJB02vmd82GKSjJEphvrfdYKXoMgMljdeCimK15VkFz5BcOhMzKqhjOXw1d8h7T9qJUSzlPqJMdYpfA3cxAnp47nIBvo%2Ffp3BVOFPJeEcIPLrSqs%2FIQi7TT0843bRdQW59Am4MLI6CrGuLQT1LF2e%2FZxjenjHF8may7eVs6B8DLfmQTQ%2BoBSiW7k4cxXZ9KspihNol5uU5nzLA0HANyUsjcRMiq2CWsF7Ve%2FCfLTe6n4ejAI2taxIeO9iC5hevs1FmRV%2FX7F5GVSI4oE2Ye42YVxdKlK7RlTm2NPbk6Giw7r1jir3sBiDTlnWHoYNl1lQWXtxdRjzieQsRTM13tZNj8zSjaicSvc9DitdSL1YfUT7VhNKcC7lMWvZAY8vnZho%2BXzY7CkCd26ZSaXxWb%2F9OdWGSAmtC2eb%2BH2uZcXHtcGOjLAVe7PznrN%2BX9ekWAFBkHNcsm2dQxG01AAhmeedKbKhhzzXW9Uf%2FvgFPcmils9JH6flhtIcA2549V9DOV8wq6P6xAY6pgHxSc7AQDyq2Yf48x5tLmVxuXl1M01bixH6QrvIs8BplUr53W6FOWke4p3Vin9XyuJtRrQtEhyfZzKTzcPikScpc2qbRA5XuvpQreq84r%2BVOKIbUib%2Fkdn0ZmU6%2FsJVGpYYy06ftc03w68pdesMlSiKq6SQG1fB1FCjnasVOp0MB2ls%2FCmeNdbbp9TP2FocsRDv7O9LFWrCvaNogHgnJbMGh%2BXv5VY9&X-Amz-Signature=4ad400c99c285e7a6405168435c85b8249f7b14c6d33323af914266d8cf601bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTW7PPJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCxTDPCUmi5UzstXSJHGdk9FDOJCFjbdvaOABgqs6cGKwIhAK2u%2F1xzBsTTcnUsVev4%2B2xNCLkEtYFB8OjCbjBsBCT9Kv8DCFMQABoMNjM3NDIzMTgzODA1IgwOItAPk6BDxvmzJ1Iq3APERHXmqx7Wr29q1OR3gFVR8YUXcalwsmjb9Yv9DtlC7xRkQCp9JSN73xj7TC7%2Fy3%2F%2BUtOQ56FgMzPNL5C41W9diXzYcyUBId7Gdh9oWXdKWhjSBDGWxnj0iW1NDzCoYmpbQKYvhcrA5j5t6gciF5rGgNRPC9N060AqS6KGYUNPZIstjem3qk8e1xa0UmFIiECQJiumj38F8SOBDinx6as%2FT6UBNvvD0sj5zTTowJRLo8rNTmlV1b8LlvR2QE9RA6akMsPUVxGBQe7DXgQsm%2Bg2lgAcTUcb3HdKYxDN1moNfMmVMRap2NVvPqSZthxCajxX1muE19OTsbClZ%2FHRDxabYbGoXWsqgSFm8hY9g0oM02qBAoww8xRGGdKcJ6t%2FiN1UVmqVYw%2FYPZd6lrWROKgkjLq1yp6cDmGfyTv0lMrED3aJRIr0RAc5Woc3NXjHpp5o3GZz9cUDi1oLu7O94JdC8JUDe4Ih3ikN6ux%2BlbQqHhJwGXeqAxObrc1KhOYTM1owdk88LWEUVpR9mdc2vOE6vl%2F6d6uzB9FhrSJWvF2wlxqjfMG98HGpoddYC%2FpGW2w82jJnCbbECFhkk%2FzVFbqIf8yqfKOxw%2FgCwi5rE%2FYO7GMP0dPfNFyGSRZnLzDLo%2FrEBjqkATp0V6tM%2F9btIUKD3jZiobB0Xe%2Ffy654mlmnNXBwJcZdC8pb9ogQZIVDEprlMyDJ%2BrXIbR1LVty2IJdAPhmiQtHTsoc7PWZYPqJ1D58P1Bw%2BFc%2FadfF1uBR84Hamd2soqC3BdOMW7gNZsLWiGeOPlUF2UNd4NgZqdI%2BkVzKDf8fzy5H39CZcvrCnaoydC7hqJs3AwgWECMQtPyARn%2BcS4X8IQr0g&X-Amz-Signature=216da135f616c68dc1d22c8b0b28a09b7d300caca9126f2c02cb51df85a1d74a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTW7PPJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCxTDPCUmi5UzstXSJHGdk9FDOJCFjbdvaOABgqs6cGKwIhAK2u%2F1xzBsTTcnUsVev4%2B2xNCLkEtYFB8OjCbjBsBCT9Kv8DCFMQABoMNjM3NDIzMTgzODA1IgwOItAPk6BDxvmzJ1Iq3APERHXmqx7Wr29q1OR3gFVR8YUXcalwsmjb9Yv9DtlC7xRkQCp9JSN73xj7TC7%2Fy3%2F%2BUtOQ56FgMzPNL5C41W9diXzYcyUBId7Gdh9oWXdKWhjSBDGWxnj0iW1NDzCoYmpbQKYvhcrA5j5t6gciF5rGgNRPC9N060AqS6KGYUNPZIstjem3qk8e1xa0UmFIiECQJiumj38F8SOBDinx6as%2FT6UBNvvD0sj5zTTowJRLo8rNTmlV1b8LlvR2QE9RA6akMsPUVxGBQe7DXgQsm%2Bg2lgAcTUcb3HdKYxDN1moNfMmVMRap2NVvPqSZthxCajxX1muE19OTsbClZ%2FHRDxabYbGoXWsqgSFm8hY9g0oM02qBAoww8xRGGdKcJ6t%2FiN1UVmqVYw%2FYPZd6lrWROKgkjLq1yp6cDmGfyTv0lMrED3aJRIr0RAc5Woc3NXjHpp5o3GZz9cUDi1oLu7O94JdC8JUDe4Ih3ikN6ux%2BlbQqHhJwGXeqAxObrc1KhOYTM1owdk88LWEUVpR9mdc2vOE6vl%2F6d6uzB9FhrSJWvF2wlxqjfMG98HGpoddYC%2FpGW2w82jJnCbbECFhkk%2FzVFbqIf8yqfKOxw%2FgCwi5rE%2FYO7GMP0dPfNFyGSRZnLzDLo%2FrEBjqkATp0V6tM%2F9btIUKD3jZiobB0Xe%2Ffy654mlmnNXBwJcZdC8pb9ogQZIVDEprlMyDJ%2BrXIbR1LVty2IJdAPhmiQtHTsoc7PWZYPqJ1D58P1Bw%2BFc%2FadfF1uBR84Hamd2soqC3BdOMW7gNZsLWiGeOPlUF2UNd4NgZqdI%2BkVzKDf8fzy5H39CZcvrCnaoydC7hqJs3AwgWECMQtPyARn%2BcS4X8IQr0g&X-Amz-Signature=48f2d4b95115526e3f70d2781918998737a5faae3878e0b359e7f7f5e056d9ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTW7PPJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCxTDPCUmi5UzstXSJHGdk9FDOJCFjbdvaOABgqs6cGKwIhAK2u%2F1xzBsTTcnUsVev4%2B2xNCLkEtYFB8OjCbjBsBCT9Kv8DCFMQABoMNjM3NDIzMTgzODA1IgwOItAPk6BDxvmzJ1Iq3APERHXmqx7Wr29q1OR3gFVR8YUXcalwsmjb9Yv9DtlC7xRkQCp9JSN73xj7TC7%2Fy3%2F%2BUtOQ56FgMzPNL5C41W9diXzYcyUBId7Gdh9oWXdKWhjSBDGWxnj0iW1NDzCoYmpbQKYvhcrA5j5t6gciF5rGgNRPC9N060AqS6KGYUNPZIstjem3qk8e1xa0UmFIiECQJiumj38F8SOBDinx6as%2FT6UBNvvD0sj5zTTowJRLo8rNTmlV1b8LlvR2QE9RA6akMsPUVxGBQe7DXgQsm%2Bg2lgAcTUcb3HdKYxDN1moNfMmVMRap2NVvPqSZthxCajxX1muE19OTsbClZ%2FHRDxabYbGoXWsqgSFm8hY9g0oM02qBAoww8xRGGdKcJ6t%2FiN1UVmqVYw%2FYPZd6lrWROKgkjLq1yp6cDmGfyTv0lMrED3aJRIr0RAc5Woc3NXjHpp5o3GZz9cUDi1oLu7O94JdC8JUDe4Ih3ikN6ux%2BlbQqHhJwGXeqAxObrc1KhOYTM1owdk88LWEUVpR9mdc2vOE6vl%2F6d6uzB9FhrSJWvF2wlxqjfMG98HGpoddYC%2FpGW2w82jJnCbbECFhkk%2FzVFbqIf8yqfKOxw%2FgCwi5rE%2FYO7GMP0dPfNFyGSRZnLzDLo%2FrEBjqkATp0V6tM%2F9btIUKD3jZiobB0Xe%2Ffy654mlmnNXBwJcZdC8pb9ogQZIVDEprlMyDJ%2BrXIbR1LVty2IJdAPhmiQtHTsoc7PWZYPqJ1D58P1Bw%2BFc%2FadfF1uBR84Hamd2soqC3BdOMW7gNZsLWiGeOPlUF2UNd4NgZqdI%2BkVzKDf8fzy5H39CZcvrCnaoydC7hqJs3AwgWECMQtPyARn%2BcS4X8IQr0g&X-Amz-Signature=bac6e35a9989111618452c08e6402fde285f7780256e54220310ab0ab0d2bd25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTW7PPJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCxTDPCUmi5UzstXSJHGdk9FDOJCFjbdvaOABgqs6cGKwIhAK2u%2F1xzBsTTcnUsVev4%2B2xNCLkEtYFB8OjCbjBsBCT9Kv8DCFMQABoMNjM3NDIzMTgzODA1IgwOItAPk6BDxvmzJ1Iq3APERHXmqx7Wr29q1OR3gFVR8YUXcalwsmjb9Yv9DtlC7xRkQCp9JSN73xj7TC7%2Fy3%2F%2BUtOQ56FgMzPNL5C41W9diXzYcyUBId7Gdh9oWXdKWhjSBDGWxnj0iW1NDzCoYmpbQKYvhcrA5j5t6gciF5rGgNRPC9N060AqS6KGYUNPZIstjem3qk8e1xa0UmFIiECQJiumj38F8SOBDinx6as%2FT6UBNvvD0sj5zTTowJRLo8rNTmlV1b8LlvR2QE9RA6akMsPUVxGBQe7DXgQsm%2Bg2lgAcTUcb3HdKYxDN1moNfMmVMRap2NVvPqSZthxCajxX1muE19OTsbClZ%2FHRDxabYbGoXWsqgSFm8hY9g0oM02qBAoww8xRGGdKcJ6t%2FiN1UVmqVYw%2FYPZd6lrWROKgkjLq1yp6cDmGfyTv0lMrED3aJRIr0RAc5Woc3NXjHpp5o3GZz9cUDi1oLu7O94JdC8JUDe4Ih3ikN6ux%2BlbQqHhJwGXeqAxObrc1KhOYTM1owdk88LWEUVpR9mdc2vOE6vl%2F6d6uzB9FhrSJWvF2wlxqjfMG98HGpoddYC%2FpGW2w82jJnCbbECFhkk%2FzVFbqIf8yqfKOxw%2FgCwi5rE%2FYO7GMP0dPfNFyGSRZnLzDLo%2FrEBjqkATp0V6tM%2F9btIUKD3jZiobB0Xe%2Ffy654mlmnNXBwJcZdC8pb9ogQZIVDEprlMyDJ%2BrXIbR1LVty2IJdAPhmiQtHTsoc7PWZYPqJ1D58P1Bw%2BFc%2FadfF1uBR84Hamd2soqC3BdOMW7gNZsLWiGeOPlUF2UNd4NgZqdI%2BkVzKDf8fzy5H39CZcvrCnaoydC7hqJs3AwgWECMQtPyARn%2BcS4X8IQr0g&X-Amz-Signature=e60b24b6cadca8f6151b743fc5540b5886e20c60d731e7aff69dfc7eeed5b2ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTW7PPJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCxTDPCUmi5UzstXSJHGdk9FDOJCFjbdvaOABgqs6cGKwIhAK2u%2F1xzBsTTcnUsVev4%2B2xNCLkEtYFB8OjCbjBsBCT9Kv8DCFMQABoMNjM3NDIzMTgzODA1IgwOItAPk6BDxvmzJ1Iq3APERHXmqx7Wr29q1OR3gFVR8YUXcalwsmjb9Yv9DtlC7xRkQCp9JSN73xj7TC7%2Fy3%2F%2BUtOQ56FgMzPNL5C41W9diXzYcyUBId7Gdh9oWXdKWhjSBDGWxnj0iW1NDzCoYmpbQKYvhcrA5j5t6gciF5rGgNRPC9N060AqS6KGYUNPZIstjem3qk8e1xa0UmFIiECQJiumj38F8SOBDinx6as%2FT6UBNvvD0sj5zTTowJRLo8rNTmlV1b8LlvR2QE9RA6akMsPUVxGBQe7DXgQsm%2Bg2lgAcTUcb3HdKYxDN1moNfMmVMRap2NVvPqSZthxCajxX1muE19OTsbClZ%2FHRDxabYbGoXWsqgSFm8hY9g0oM02qBAoww8xRGGdKcJ6t%2FiN1UVmqVYw%2FYPZd6lrWROKgkjLq1yp6cDmGfyTv0lMrED3aJRIr0RAc5Woc3NXjHpp5o3GZz9cUDi1oLu7O94JdC8JUDe4Ih3ikN6ux%2BlbQqHhJwGXeqAxObrc1KhOYTM1owdk88LWEUVpR9mdc2vOE6vl%2F6d6uzB9FhrSJWvF2wlxqjfMG98HGpoddYC%2FpGW2w82jJnCbbECFhkk%2FzVFbqIf8yqfKOxw%2FgCwi5rE%2FYO7GMP0dPfNFyGSRZnLzDLo%2FrEBjqkATp0V6tM%2F9btIUKD3jZiobB0Xe%2Ffy654mlmnNXBwJcZdC8pb9ogQZIVDEprlMyDJ%2BrXIbR1LVty2IJdAPhmiQtHTsoc7PWZYPqJ1D58P1Bw%2BFc%2FadfF1uBR84Hamd2soqC3BdOMW7gNZsLWiGeOPlUF2UNd4NgZqdI%2BkVzKDf8fzy5H39CZcvrCnaoydC7hqJs3AwgWECMQtPyARn%2BcS4X8IQr0g&X-Amz-Signature=facd1180e7bf26d8e4ff82fc6891cd09e73331a2505dc461c3e213eb175dbb7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTW7PPJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCxTDPCUmi5UzstXSJHGdk9FDOJCFjbdvaOABgqs6cGKwIhAK2u%2F1xzBsTTcnUsVev4%2B2xNCLkEtYFB8OjCbjBsBCT9Kv8DCFMQABoMNjM3NDIzMTgzODA1IgwOItAPk6BDxvmzJ1Iq3APERHXmqx7Wr29q1OR3gFVR8YUXcalwsmjb9Yv9DtlC7xRkQCp9JSN73xj7TC7%2Fy3%2F%2BUtOQ56FgMzPNL5C41W9diXzYcyUBId7Gdh9oWXdKWhjSBDGWxnj0iW1NDzCoYmpbQKYvhcrA5j5t6gciF5rGgNRPC9N060AqS6KGYUNPZIstjem3qk8e1xa0UmFIiECQJiumj38F8SOBDinx6as%2FT6UBNvvD0sj5zTTowJRLo8rNTmlV1b8LlvR2QE9RA6akMsPUVxGBQe7DXgQsm%2Bg2lgAcTUcb3HdKYxDN1moNfMmVMRap2NVvPqSZthxCajxX1muE19OTsbClZ%2FHRDxabYbGoXWsqgSFm8hY9g0oM02qBAoww8xRGGdKcJ6t%2FiN1UVmqVYw%2FYPZd6lrWROKgkjLq1yp6cDmGfyTv0lMrED3aJRIr0RAc5Woc3NXjHpp5o3GZz9cUDi1oLu7O94JdC8JUDe4Ih3ikN6ux%2BlbQqHhJwGXeqAxObrc1KhOYTM1owdk88LWEUVpR9mdc2vOE6vl%2F6d6uzB9FhrSJWvF2wlxqjfMG98HGpoddYC%2FpGW2w82jJnCbbECFhkk%2FzVFbqIf8yqfKOxw%2FgCwi5rE%2FYO7GMP0dPfNFyGSRZnLzDLo%2FrEBjqkATp0V6tM%2F9btIUKD3jZiobB0Xe%2Ffy654mlmnNXBwJcZdC8pb9ogQZIVDEprlMyDJ%2BrXIbR1LVty2IJdAPhmiQtHTsoc7PWZYPqJ1D58P1Bw%2BFc%2FadfF1uBR84Hamd2soqC3BdOMW7gNZsLWiGeOPlUF2UNd4NgZqdI%2BkVzKDf8fzy5H39CZcvrCnaoydC7hqJs3AwgWECMQtPyARn%2BcS4X8IQr0g&X-Amz-Signature=eb32ec122b15a87f6e7cb06f85a4c236fb8f8997282dc59393da85f3c86fdfad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTW7PPJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCxTDPCUmi5UzstXSJHGdk9FDOJCFjbdvaOABgqs6cGKwIhAK2u%2F1xzBsTTcnUsVev4%2B2xNCLkEtYFB8OjCbjBsBCT9Kv8DCFMQABoMNjM3NDIzMTgzODA1IgwOItAPk6BDxvmzJ1Iq3APERHXmqx7Wr29q1OR3gFVR8YUXcalwsmjb9Yv9DtlC7xRkQCp9JSN73xj7TC7%2Fy3%2F%2BUtOQ56FgMzPNL5C41W9diXzYcyUBId7Gdh9oWXdKWhjSBDGWxnj0iW1NDzCoYmpbQKYvhcrA5j5t6gciF5rGgNRPC9N060AqS6KGYUNPZIstjem3qk8e1xa0UmFIiECQJiumj38F8SOBDinx6as%2FT6UBNvvD0sj5zTTowJRLo8rNTmlV1b8LlvR2QE9RA6akMsPUVxGBQe7DXgQsm%2Bg2lgAcTUcb3HdKYxDN1moNfMmVMRap2NVvPqSZthxCajxX1muE19OTsbClZ%2FHRDxabYbGoXWsqgSFm8hY9g0oM02qBAoww8xRGGdKcJ6t%2FiN1UVmqVYw%2FYPZd6lrWROKgkjLq1yp6cDmGfyTv0lMrED3aJRIr0RAc5Woc3NXjHpp5o3GZz9cUDi1oLu7O94JdC8JUDe4Ih3ikN6ux%2BlbQqHhJwGXeqAxObrc1KhOYTM1owdk88LWEUVpR9mdc2vOE6vl%2F6d6uzB9FhrSJWvF2wlxqjfMG98HGpoddYC%2FpGW2w82jJnCbbECFhkk%2FzVFbqIf8yqfKOxw%2FgCwi5rE%2FYO7GMP0dPfNFyGSRZnLzDLo%2FrEBjqkATp0V6tM%2F9btIUKD3jZiobB0Xe%2Ffy654mlmnNXBwJcZdC8pb9ogQZIVDEprlMyDJ%2BrXIbR1LVty2IJdAPhmiQtHTsoc7PWZYPqJ1D58P1Bw%2BFc%2FadfF1uBR84Hamd2soqC3BdOMW7gNZsLWiGeOPlUF2UNd4NgZqdI%2BkVzKDf8fzy5H39CZcvrCnaoydC7hqJs3AwgWECMQtPyARn%2BcS4X8IQr0g&X-Amz-Signature=bac6e35a9989111618452c08e6402fde285f7780256e54220310ab0ab0d2bd25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTW7PPJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCxTDPCUmi5UzstXSJHGdk9FDOJCFjbdvaOABgqs6cGKwIhAK2u%2F1xzBsTTcnUsVev4%2B2xNCLkEtYFB8OjCbjBsBCT9Kv8DCFMQABoMNjM3NDIzMTgzODA1IgwOItAPk6BDxvmzJ1Iq3APERHXmqx7Wr29q1OR3gFVR8YUXcalwsmjb9Yv9DtlC7xRkQCp9JSN73xj7TC7%2Fy3%2F%2BUtOQ56FgMzPNL5C41W9diXzYcyUBId7Gdh9oWXdKWhjSBDGWxnj0iW1NDzCoYmpbQKYvhcrA5j5t6gciF5rGgNRPC9N060AqS6KGYUNPZIstjem3qk8e1xa0UmFIiECQJiumj38F8SOBDinx6as%2FT6UBNvvD0sj5zTTowJRLo8rNTmlV1b8LlvR2QE9RA6akMsPUVxGBQe7DXgQsm%2Bg2lgAcTUcb3HdKYxDN1moNfMmVMRap2NVvPqSZthxCajxX1muE19OTsbClZ%2FHRDxabYbGoXWsqgSFm8hY9g0oM02qBAoww8xRGGdKcJ6t%2FiN1UVmqVYw%2FYPZd6lrWROKgkjLq1yp6cDmGfyTv0lMrED3aJRIr0RAc5Woc3NXjHpp5o3GZz9cUDi1oLu7O94JdC8JUDe4Ih3ikN6ux%2BlbQqHhJwGXeqAxObrc1KhOYTM1owdk88LWEUVpR9mdc2vOE6vl%2F6d6uzB9FhrSJWvF2wlxqjfMG98HGpoddYC%2FpGW2w82jJnCbbECFhkk%2FzVFbqIf8yqfKOxw%2FgCwi5rE%2FYO7GMP0dPfNFyGSRZnLzDLo%2FrEBjqkATp0V6tM%2F9btIUKD3jZiobB0Xe%2Ffy654mlmnNXBwJcZdC8pb9ogQZIVDEprlMyDJ%2BrXIbR1LVty2IJdAPhmiQtHTsoc7PWZYPqJ1D58P1Bw%2BFc%2FadfF1uBR84Hamd2soqC3BdOMW7gNZsLWiGeOPlUF2UNd4NgZqdI%2BkVzKDf8fzy5H39CZcvrCnaoydC7hqJs3AwgWECMQtPyARn%2BcS4X8IQr0g&X-Amz-Signature=8f966f6cdd37962ae29e4292b88535999fa9428731d4e7ac6cb041c5a2aff23a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTW7PPJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCxTDPCUmi5UzstXSJHGdk9FDOJCFjbdvaOABgqs6cGKwIhAK2u%2F1xzBsTTcnUsVev4%2B2xNCLkEtYFB8OjCbjBsBCT9Kv8DCFMQABoMNjM3NDIzMTgzODA1IgwOItAPk6BDxvmzJ1Iq3APERHXmqx7Wr29q1OR3gFVR8YUXcalwsmjb9Yv9DtlC7xRkQCp9JSN73xj7TC7%2Fy3%2F%2BUtOQ56FgMzPNL5C41W9diXzYcyUBId7Gdh9oWXdKWhjSBDGWxnj0iW1NDzCoYmpbQKYvhcrA5j5t6gciF5rGgNRPC9N060AqS6KGYUNPZIstjem3qk8e1xa0UmFIiECQJiumj38F8SOBDinx6as%2FT6UBNvvD0sj5zTTowJRLo8rNTmlV1b8LlvR2QE9RA6akMsPUVxGBQe7DXgQsm%2Bg2lgAcTUcb3HdKYxDN1moNfMmVMRap2NVvPqSZthxCajxX1muE19OTsbClZ%2FHRDxabYbGoXWsqgSFm8hY9g0oM02qBAoww8xRGGdKcJ6t%2FiN1UVmqVYw%2FYPZd6lrWROKgkjLq1yp6cDmGfyTv0lMrED3aJRIr0RAc5Woc3NXjHpp5o3GZz9cUDi1oLu7O94JdC8JUDe4Ih3ikN6ux%2BlbQqHhJwGXeqAxObrc1KhOYTM1owdk88LWEUVpR9mdc2vOE6vl%2F6d6uzB9FhrSJWvF2wlxqjfMG98HGpoddYC%2FpGW2w82jJnCbbECFhkk%2FzVFbqIf8yqfKOxw%2FgCwi5rE%2FYO7GMP0dPfNFyGSRZnLzDLo%2FrEBjqkATp0V6tM%2F9btIUKD3jZiobB0Xe%2Ffy654mlmnNXBwJcZdC8pb9ogQZIVDEprlMyDJ%2BrXIbR1LVty2IJdAPhmiQtHTsoc7PWZYPqJ1D58P1Bw%2BFc%2FadfF1uBR84Hamd2soqC3BdOMW7gNZsLWiGeOPlUF2UNd4NgZqdI%2BkVzKDf8fzy5H39CZcvrCnaoydC7hqJs3AwgWECMQtPyARn%2BcS4X8IQr0g&X-Amz-Signature=0313cbe23dd9ea8bcf07bf9edea3bc94a6687aeae60105971e3f63b7d153505a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTW7PPJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCxTDPCUmi5UzstXSJHGdk9FDOJCFjbdvaOABgqs6cGKwIhAK2u%2F1xzBsTTcnUsVev4%2B2xNCLkEtYFB8OjCbjBsBCT9Kv8DCFMQABoMNjM3NDIzMTgzODA1IgwOItAPk6BDxvmzJ1Iq3APERHXmqx7Wr29q1OR3gFVR8YUXcalwsmjb9Yv9DtlC7xRkQCp9JSN73xj7TC7%2Fy3%2F%2BUtOQ56FgMzPNL5C41W9diXzYcyUBId7Gdh9oWXdKWhjSBDGWxnj0iW1NDzCoYmpbQKYvhcrA5j5t6gciF5rGgNRPC9N060AqS6KGYUNPZIstjem3qk8e1xa0UmFIiECQJiumj38F8SOBDinx6as%2FT6UBNvvD0sj5zTTowJRLo8rNTmlV1b8LlvR2QE9RA6akMsPUVxGBQe7DXgQsm%2Bg2lgAcTUcb3HdKYxDN1moNfMmVMRap2NVvPqSZthxCajxX1muE19OTsbClZ%2FHRDxabYbGoXWsqgSFm8hY9g0oM02qBAoww8xRGGdKcJ6t%2FiN1UVmqVYw%2FYPZd6lrWROKgkjLq1yp6cDmGfyTv0lMrED3aJRIr0RAc5Woc3NXjHpp5o3GZz9cUDi1oLu7O94JdC8JUDe4Ih3ikN6ux%2BlbQqHhJwGXeqAxObrc1KhOYTM1owdk88LWEUVpR9mdc2vOE6vl%2F6d6uzB9FhrSJWvF2wlxqjfMG98HGpoddYC%2FpGW2w82jJnCbbECFhkk%2FzVFbqIf8yqfKOxw%2FgCwi5rE%2FYO7GMP0dPfNFyGSRZnLzDLo%2FrEBjqkATp0V6tM%2F9btIUKD3jZiobB0Xe%2Ffy654mlmnNXBwJcZdC8pb9ogQZIVDEprlMyDJ%2BrXIbR1LVty2IJdAPhmiQtHTsoc7PWZYPqJ1D58P1Bw%2BFc%2FadfF1uBR84Hamd2soqC3BdOMW7gNZsLWiGeOPlUF2UNd4NgZqdI%2BkVzKDf8fzy5H39CZcvrCnaoydC7hqJs3AwgWECMQtPyARn%2BcS4X8IQr0g&X-Amz-Signature=46da5b7b907dbeb2f956fc586439f88a46d882346b4fd708b3b0bf649d406cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
