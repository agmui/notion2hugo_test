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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=18d2a0547af94b93ec445b6e44db75d51a88a9624b454cc213acfe9a3f15fedb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=0ea9c2f3ea7f1adaa7c2b9ed0cc69db6d97bdaf68953976b0ff8491ff305da3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=20835b3ddd7d7d5aa586bd41f6b837e25360614b7be227a7f668780f884ede69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=3f9b2c9e63b5efc50c78348af89c4069d2b7c68156d128baa6340259c32191ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=4242d9a1676cf7a6d1cb6bdb0177da5d6cda698b5710e84c18b31e9d005bca42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=02776811cf7d6bfa39f20e293e3c2432324c53d6373179607ec58b8c2cab0866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=01535f119d0d3806c287e76b2be06fe9c503febaf603d34cfca7765fdee640e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=91e090df6380d5d827495fbca1ee12935f7550e1b3dd19e09543141f6764bf9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=dbdc2a9edccd7e143c486cd5ecb052ed21c2b2aad3b78246a7c3b47511e69c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=864099db8ddf69d0a1b66f6fdabe2283d52ddf0c1c754d66fb6c1a1c28e9d93a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGS5FBVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T091010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFco0iQY0NQ%2Bs5eD91wVQPMEygTRz1IuoYlTWEtqjoVUAiB5%2FoOHZGJvQCF9Ujh10UIe886Ylboz8N8B3W6Tenk%2FeSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMLT8%2BlJ2%2FJi9%2B1%2BXdKtwDDWkRnd7xqqq0uIFWe2Z2KCJ%2BKXI7CR84bIRzEoZPMwdUvoV1iiCeP60LNLHVsQL9ovNFAela%2BS9IrDrNxDwjn8w4pusfzgpjfUDB99SwNOTAA3%2BzKhw734ZnlT3xao7ie%2BHIiNMXzcMbJafTZTuAZcrA64jq6Vj4O5CnfbcUk%2BJ5rVnH5DL0oqmAQV5a7OxHmttI2w1lVGaFv0JyO8zSR6THXktQPkM0IsWqzkYvJ6jdNmB07UnFtqt446RGv9KDXX%2B%2B0vQijiXfKgQMEF%2FpynjDIv%2FjTcNNtp7wYodpthwql1fiIvmOa0ljO1hEd3buOyI2v8CXBF6O%2FCW7ssliWgSyO6ba6XROzRx29qUhiCmBRd2CWRcXm9HsLanMcgtdPyO%2FRIeZupKZJiHyryIOykglKFCs1bmd%2Fwj8%2BQNqMtjpD%2BzHteXAQnY4QsaksaP2Dcwj5RbDzueGWLmpkHVzJfWWIjYituS1uLFBYWJP9p1aclU%2BD3n4pHmV5jWOVrQZNzDTvjst9CV3dfarZcqPPCxQpq1CiOvmI2A1WsKsdVGmVQ1N9KmI6OjH1bQN2r3fdL34vupcdS7sVR2A3JyaEuYnR5aoOkb6qtRK9ZKUE5A3om0uAzJdL8TMjCEwscK8xAY6pgHTTdgWERi8zcPXGOXSeUw4LN33d535qCf8SAOiXeDf%2FtMMzOppDrQWNiCMJKWEg7nyVmU8mIh%2FEpNrK7qEuteavPEeZlTT%2Bq%2BgQCVQJZaQWNPUDiZpYo5yLFgDLGXKUZISeOdiN4Tu5Kpk%2B67RpDLYZNaNEc35izTOi%2FKpV105MD21uKiqRyMI7U%2FU%2BWdC6hU94Ius86dWGgzUCTHM4TJKZc8sScQ%2F&X-Amz-Signature=1d31da8a588d6fa7c65c49732b94a436e5c373312d2a17f70e41f6aa0d4c6676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5LH4WKA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T091014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIALGV8Hjiu%2F1n15d4ulS9q6KPFn7bK6P9Org0Hbg6qF4AiEAvqtYzc1d3SuAdr0jFyc3dnu4CLTEBpI6BFdgGc3r9nIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJw4sCGfDM5FG8gIyircAzrqxGw0kQT5aL8x5BAPTLpuX7MmnARCWwOFonR%2F7ntwG8G2iH7%2FYmMf9K%2FOfv8VEyY%2BRVgBdO4xt0zRPBhuglmFhXi%2F38Q2sykdvxGp8jNlzpnUMFscOAVedNQ24BJy1RBZTc%2Fm9zbFcKBwiW9x49kS8uaqdDgBTvW7EqR524q2N8pjYW0WNdVrcp8PuYU1HSHFRkV60EKNbc1hGrSPZbWcbQeatyRxIvV7qbtMlCYpOLWMPqtrPH3RPYV9fSWgm3n3%2BJKc03EbW9gLemKyowEC9SFCHw4ASk4hT3tLqk3bHgU0y6iLlL7vxAZdC3oaH%2FigGiTROkWfXRVoI7UPZJpNnMklLjSbRysdujqv44nCF0xFrEW%2FOZhxmtFAGO1XKl9y7JqR7VPWn47g%2BiTZYUPjeER5V4KtUZVm791sktrgpJQnmOVrmUEf8%2BoPwYvYHWUe44CvIGaYx2dmoUNyFYyFsVlZFs0RqKQRZY9%2FghGS58mBfHOTENcbamj%2BheyK2BZLqWxI86gcQak2iScGMHmVwZ%2FZNYsRjNGhh%2FKZ0%2BVndeaaXKzFe71X85cAPiIhMuSW6Cm2ZcbvX2cyx2cHwjVzHcvC0co0TunemFx7Sk4zA7XwxNTj0JcVjybUMLPFvMQGOqUB9JDSvcrVkhkcRESG0YUSlElyDURKkQw1eL6hTzIFwUiVQyFHGgfMJ6D3LC4%2BjMYcZK5G3Df79Oqp9muHbpecouY901G4Cf%2FX%2FTsbywlxSL%2FMCxxtvC08yHyMcziaYwRb4rkOXF24Y6vlEPU5qAKdKjtMtKxKrs5oHqQwQljd7DuRH41MzKoZGhZ6OrPLs7uYtFzv1TnMgXnh7stiaH%2F4MywksVzK&X-Amz-Signature=e5cf1e591ca7ad978e1a3de3eb9fef8349707c98866b559be89f06a8a62046b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXPIWED%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZM9WiNNQgLV3xA4rr%2BZfXvH5fvsO2NVqO8p4SyhSdmAiEAjqy1525i71n2F3jD2vkoSnPrl8bq1YbJjwH9AJMLvRgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCCdume4Yo6dMhYoVCrcA49h0up5ST1s%2F8AKJoIaE9%2FUpiSvDtBAk7cdui2QS%2FCe3%2Bvr7gNGEx9GfeVfl77%2FySYUq5D26EEhs1Rl1lc51QyeN51o3%2FKQf4WyUyblCo8T0z7piG9zp1x8AuwTTUSP69FJUExk5D1oeNiXE5VVcPp%2BOO5fAn3ORWv3CgqIpNisntlKIAs0oI8wyInCYPW8%2B7mygjcPyDpEW7zr5CtFwwFIPRtIWHR1zy5tKDMxI8rF7htWUElYuwWNeIqAVgq%2Fv7oMDuq3Bw4DJQH%2FKUdzYcE%2BFGGMnG1%2FHcyfyAw2x%2BiNVbNk3XIPgj3vxEGlHWi5otcbmAbRV4CIDuP1UF8uyAL0oswzjWQaDqA5uU7%2FTJeB7n7%2BJt8%2BievvCu0VLLI%2BEDFT3FpAq5TqRIwdXj%2F8swbD1BNOzIiHQFpZYCl0NsO8C5eO%2B1mImMquHRc3lOcb7EUXmyl5WWFmR3Alc1rGB%2FEZ256gfMsC0OTdD8IMVT6QDOMzcsmKk5cuwbY5UtN6OWEFUekn%2FEWOyr2JZtVJOFGq1yXtOkEXwvbhHfVynckShG8txyJRQJdscNX9WVF5ShekEm8pLROiThZTjvbyEVw87kMLJOt3czd78nn%2F5EKeIIefQVloVEOkjq%2B0MPC9vMQGOqUBsGYP%2ByfxR%2BMlNcKImmminK5cz4scoqMohfMlmfCaHog0uBpnTQ5b6YOldZ7joRK%2FyDsmYoJagVOgzMW%2FO4TksdzyApI8RuyVQujI3Zvm3BHP2FbjCRdKR7Sg10XQvB%2FnIFpUaUlbPB5rqdg2wt90%2BCtqh3WCO1pl6rUQBVWWblkCwIeoK8JKC7qYax6BPJbH12%2Fhewrpgnt7e6mAQ57%2BtV1L%2BMgQ&X-Amz-Signature=31d6c139068ee7224e1d26f5c1f8f42f9ee92d79d3fb64eacffa4580c9213f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=b9e11a11670eed588ccdfe3ab79101d33fb48291f37183d6b745d5adcc87cc1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STADOQTX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T091025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHJqTobQsNUBu4hAeNDPcrtgZgcrZbN8MKmQHNdrUWMAiEAuFzsxsNojeKpL3aLM32wSkc4YB8Ma0KUG80Cqd%2BtEJEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKJNxYOZagMKjE7%2FNyrcA06rcazvjcVvddoYk0o8Rd9AVySU2%2Fm9ULqaMLmVvWQus4kYUXorEmE2lFJOo5W%2By3vwnlhtpU1mCceaSpDHmwEuBYd7vOo9Jxrdc1G2AqrvcTrn9etgJtwg%2B9Ck75Pk9zBpdqwHGfcleG6GXaZvH4Hv2xlqiY9F1GEELt2v5m9bhKN9Obzxx0z5w0OkqW%2FcMj11%2F5ObA%2B8W6U0MeF0OYbYoEbC6bfGhLFegdlkcazG6mTm1SzHZy6VG9svdsB0XQYjha8YOLnZqbfPcesC%2FZwNQVCA5nCdoNFQcDD3FccRY7P7N4kUe332YjrTZ5GG1OVO5mDdeu4vLtCnLZm7jGH%2FBl40zhQ6DIeFgUhS1c6xAbtTo5rzlFEHBFUwsXpFI27zk9hzZYlRGEgWoTh0RLGCxKgZTNwMlOJv2A9OW1F701rnGkXn3bnRNCzZjhcpl01yCa7aw7CYSdS9Hbcc%2Fkqcv%2BVWOGBZSN%2Br%2BC8LpmsqT1rdEbMoQOd4AukXkLItIVQ3q51%2BLPNEyx3iTAQQUJHfB%2B8PtoG%2FqR529il6F5Uz7ylRuvTTAjQRN17u%2BXMOy4FWfH2RhTunfrppQx%2F2VpwMTdZT048j4f%2FnN82J6ibwknByug6zkRVkgNDiCMLvMvMQGOqUBtBr3fGf8a71ZSoNI4JVBUi7BoRkO%2FCJpZMfhyz3tpW2Iw7l6ecyEKxXIoU3APv6%2Ft%2Bmb%2ByLPzGzw1cHwXLEXU5BHwsx4jK%2FI8REaDwPMWDMoiFEeRtqgl34i8%2F%2F1BIMcYf2oSzVQzh%2BY9E0VagKU5GwPBMdavmgpDG0bnI%2Feg8PrwqBlj32wi%2BeE6RaZs7piHccpeNhY2hhAM3YR6BQP8HHPkdp4&X-Amz-Signature=a6f7136693698138999163be714c2710e2a7dbb10dfb62dd604996b7913bd4bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=7b1b67f2f549c38e3448ef3feb7b0b66600ffa6b3512fca58b4135da104531d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XE2V4QT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACypTFJyeolekFU8fpWXK7zLnThKKghcKc8Bm%2BEyb2eAiBkJ7GQbAX0aXenrGH%2BwaEoiS23LbKmrVcRJYCE73JFeir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMHFMoQbJIpjZ6YCrsKtwDX2MKybcM96DavNo6VZw4%2FX5kYWocSe1LHFJ9D5jzxVySBjefHVaJIBDYjvPOXuqGd%2BU%2BUaWOc6Ab3UUQoOQ2ODfAW2BwL86%2BuLKpgpm25XT9%2Bg7MYn%2B22bMVmajHd6ObEWyuC23rVLzZS7TiQAsKPZW3fEJkIktgrJYnY1d7INSgSJfqa3qH6D2kGO1hWSPccicJ88Ti9FfZNY0YrOgas3ArwXd6tGva%2FpZcroZ8fyOTLn9ObfFdXjkgBHUGpb8%2BWl1PXeb9DmQ3hDJHFJMGD7GVeCHtWriZKxweDa%2FutIxeXnzvvZqkHMOFLo%2FS2KQd0Lb0ZIvTtzBQa0OjRSCSSArdcKXITv%2BrdjZR1t99Xj9PC0jK%2FIgMe0C%2BHC8%2Fo6rk2sVWnWm9gmWWXc%2FzU%2Bzo0xfICFl1VsgzGQG78Qpq4QWtKBKCuK5%2BNGjvK1OOY%2Bh55e6zskk4ViXZlTbbwH9cEKGgZ9fdyAyv%2F3ht7d%2BNY7S6ZQpvUctXfkl5LtMlNmEX2Jd0vjo%2B0HNWYDFTcfTYKEYU5Edgmb6pPcmvQH2xkvEH1UwRGYrw%2F0PFGmZni4daleuqRi1ciUhro%2BL7Q9vKFXBfpLm6PjtRbOyYeG%2BW2sH%2BOYeIqe54NEI6Zogw5ca8xAY6pgE9n8GnJlruNtR9oyQDPjByOdJBER1q2uG6QgZMSipk%2F14zNLZOI%2B5SZhcwXw7qU8eB37p6d9G70Gr0j8hQiwcKQqNEUpBEvEv8%2BkyKDFG5rl5jwWmZIW6Md6PNLhoDn2Rzcn0xWv6RLl7S%2BkqGz3HxCTxqLeeYI62Q5bkQuilYc5W7RhZG0gFrGcYCh9znYtV3EjDi7n6iYaD39O8xmFrqASZPEdaW&X-Amz-Signature=10fa9a2bd0c4f129033a0e01d276ff3b420d305a38dcc88058773455ca85e726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=1355ae244a66cb2d377078d686a90f4c1d08672e4b22ea199edabc4377b011e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPJNXY5D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcyuclv%2B%2FIsDuX634c6g8VzsQNcMMeFW3I1WiEbD%2B7bwIgGhDBDbB4A4bsxOyJFws6f86XWvWic78sf%2FstMEm63F0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGdnjhSpnfcxm3fBbSrcA3iMCkOtrvDTWFHoceyT20UnQsH0xnBUog6B%2BJjjRF2ZbRIW32P1nd4VAOA%2FcTgaQ331p7mL5uZg5ykfI%2BG%2BL0nvdEBY2bXzRL7FY7jeVhaw3wq5fHifVEZwkR4naVaUWBszi6GlhYTsVDTI9JK0a33mdzrf2%2Bd2XNIsz8HgZ6%2B62Z5zqx%2BQ%2F5%2B7xzZxkNI7aUI0R0l4rfEqXQS%2FqNXtsWdcgMVfcNQlkZEgDg7kjTKRRRj6p87VwhVp7FrgFxNktBScGCSdFrm2yBo9bIHVavJdx4Bzks%2BREyOjwLRZ%2FEIeHB9wDwbDqqjiGRzWbpdvMi0D5vyM%2BWG09YjaYiEcBn%2Fc7qseUVlTay2miEk1h49m9R8iEngUqkCyUrMpFjAkOt3bCjgC3%2B5vtkhdi5zZ%2BvHfKDqNbMl8J0CrgBOWoE1UPRSEVhuLxfqQlAwAR6%2FB1JZ6Xg4a%2BdrqXIL6IG6uvyGC%2Bf9rYIXf9Bp05fND%2FOz2D0%2FrybhRatkVq6N3D9lFIROb7uUkRCg0QpMaPxkRrw0SyfA2gUgPnJZH6hinD%2BcgsaS31bqfbKncMivnS2D9j6SdgxpA0UyU%2BUw9O%2FbEIE0rCtX2qT0ErNhAH1BignALHzcVtRgotojOjTL%2FMMrDvMQGOqUBTxTuZ%2BC7UJp87vH8y%2FE4DLNFLkp1gpWczE0G%2Buna7yWF7DUnEosIxg9VfCB%2FZ1vgtRs9wG9vV81qPHLrYSqwCZSWXyKm8KSb1fXVD3Mz4yjM3pdUd7JZ3Kr%2FHuDX%2FyGOgLPvDsUxg4FV2SbJ%2B0BlnvhsdLIFn6qogCACozGSWiO4ZuuiblClFWAX8nt0XQsVBl%2FZsMWhxl9zlR8JVEX0bb1SkJRi&X-Amz-Signature=ab4bda14ec5d23da753c040606ce21d593a531b3ab8905cd4ae5d968c158710f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=f919f2d3c8364dff1254afc37120315ed864c3576a6c915773726834afc8ada8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677TW6YGM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtAozeidshbthZhldwt4f8GBuRzy5O7w9Tw%2FpIhzrEWAIhAI0w3wLQBNeUs2LJv25VyLRiNlwiG1lNjuc4MsWNgKoVKv8DCCoQABoMNjM3NDIzMTgzODA1Igw4NRXXFU1dxfP4vB0q3AM5BTHCmmB%2BHScOEYAsVKEGz40oyFQ4lPfj06lopqCjGoVTxQOuNZQ5ySy65M5DYOJEAxlU11jMQw0UNMJ95rXaBQW3xPubrUyKbMZWqTVH0%2FEv1SziU0maawEM7KeRsXqTb2FFG6KdZipTDy2dR1mvQ7Brfcrnjnm8eu5vtZgnFL3TOmRtkIJrcIZdCwf%2B9mKfkwKBim98qwelgbOc7254OnluZMpW73QEm4esWVbFNjSM26Q6txAv%2B5WVlKvFOUrycrTScp5VKIAENoyffKiSWFMuoRPk8VWZuGX9h%2F64GZPRLIlHbAi8fTXXu1OATB%2BqY6cigkJgKMHxDnUReWHXgMnO7OcQLnZ8ePVlkeDpHjaRAkgpWlZnZEZML7NEqKXMAG%2BYAlN1gSR5i2286J%2Bk4fLU1XjwacUzApKG9egSifNk%2BKxiyZaaribsN2MPgOQJ7ZACf9jWAJhgYsTIxCwlveV1k6PbWEg19yp9K8nOzXNSXBFyD2dZE4r%2Bq3M8D8IDbfhg%2BzMffO1PdxdVGmoxPZWXVBAymgq5%2FnPQwCpLCVKmVygnv5TFD4Jhyc%2Bn3AlPB7%2B%2Bs%2B71vTvG58af61FFUcpOjgLgEXYRVo2waVmMjks4ahduBnTnWs8meDCiurzEBjqkAUBbqBb%2BRP%2FbaqMcDty3RxjpP5vV7tnLubpLNsf8SG7ywjk3VpYkG5w1WBZoYPXrZchjTKPJbTAHu0%2FI%2BwyRkAbb0Y1ndyUDNPzhDBMtD9AfHpSUrjry3L8uM7hMLrDIOyFtXYRsY1JLTbbp9xTqJXKbFwuUw%2BicB26UXTMl%2FLcLutZPZGqlzIbY5Wqf5A4julPx4yzsmK2BTu316l%2Bcj3xvZyBA&X-Amz-Signature=fb25d239fe58f0071bdade64161f7c60146690297c2aa3d041a639ff7b3bc696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRL7I4D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpJ4TyYz65Dvvo%2BIZHQC9Br15eUhfd%2BK2W2t%2FHneowUAiEAxh1xpspE%2FlTDgOqUFLIvNWB7BpocbfNfsOxqgVIAEeAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJx4wtcAHHeTlewQAircAxqa86q07RFux%2BHxzyc3w2pVB6PZeBaWbVm4s7IxlHBRxCQU9wUt0EdLcVRma%2FclPgYF7hvZSd8ejTEtNoyB%2BqczpLr6raQCzL3dHrqeImJs7SKsd6S0KaVavS8RbsXFx79XfJ9tN%2FzKI0tlf8oRCJ0pkoeshhWiBvRDoBGf7RHH%2FcZZfRhGdI08PScoXMb8in0IRVVUJ1Ucso1Qzk8H7ZfHlZ08Cg6UfYJRlocMmAZPy5GYr3uIlbtXwE9E0AFCs6euZ53cUnftPTH9a3HNCUtWTpuzAM%2BTVh798vIVbKHz2oUKkroJRIPmhgWZ2USZ5oLzLnucNFKQhGJo594eYfHhT1SFax%2FscIoHfP9pp3Dla7FRXqDaX%2FYysAHs1wYQn2P9wRpyVEC0Ow%2FMASsUgU1aDMeeFxmiMGYOmCyiz8xUt1HpR2ZFDABqo3tlTPXWPfkhO27eJ46eeAw3dYE2gmGqIt%2BVxfcEYCaBQBiv87KJg4bS5TU8NfJUwr%2FuiIZLbWuGMO6xFsf6n4soXIW785TMSzFQBIaZvwItgzN8j%2F5Bci%2FE1YQ%2BJ4hf7Tw92Q4gBAkfO5dHcyjbkwyDEIm32HLfHikRXiadfudKUtutupCLh4HyjT6q%2BUbfuI95MOTFvMQGOqUBD18vElrvBZH7MNWLTJo7EnvVUJqp6YulrPwovXH6Nqifrk9Eyy6sEt%2FzvpJXJz76RgQ0Q2OSu4MQ1eToq3d4lTQr3jwwZj5XLsmMxAN2a8Kx2MXaHIy%2FSNvfJTn51rjFE%2BxttZqRBKXGlj0Vowrqj%2By4MfV5WzBJc4dYkeeQzWNsvt4VsZ6zLadQIW9CA1j39RWSyKUK0d3bf9YBP5O%2BgrtteEWq&X-Amz-Signature=c1096a590b7460ed1bf2f7932e12e210b9883e1455f12f1131d908b189965490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JXZWUJP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg1jtM75oopQxRHKaly%2BgjQOwuR%2BSQ%2BoQ4I1QYxWaOiAIgfkOH3iER%2FU4WTrogesbFAV1Km1tUu9taogZrJU5hsbkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJxWGZRsnd9bPvke4ircAz3i5O9e9Gy8pkVL17GqsydsQlMAjASclaofWCiAnP0tAd3NI8q4ayeFWr8UYfcoiZC3485niJTABuWLL3m7y8fHTNSyBRwG9pHvYhKzupDEGcQWXekFKBUvnTJNNYV4oIr9%2Bz1B3yUK6cd8MfBCFHhseUtf4UFcpjoG9UCmd%2B60mGFA9Y5X0ezL93%2FVuF8NmRp%2FhthEEdQ1eBV6IqlE3Bg8G0mBBqAjPaa%2FnrfKyig8xHsHIse7m0AjyFgdf%2FUn%2BEk%2BqVtx1cFJaoTdAD8B1SSG7ebrCSYGZ6QpBAlNN6V4lqsOxm59hoROakiUf92%2BryJVpx5rA1FRcCHQkeQfHDpzO%2FdQAVViQkEWjc0v0f3Rj82I0mZ%2BxSWsHEArAzv1a16ajMFWwxHWJG9RwlLz4PYRqrz3dv5oZuInJy1ed8fsLn2%2FjCRImEBBkioR0oCQfaxnG3DCTmwkBG%2B7Y1rXNgacBbCzyETiRQb1rodldYA0EJq8FDoH2dGwsIhcd6GFFcJJ%2Fhqox6lUS9DhJUiAtEwCvJuUyWsJ%2FsF%2BFXpz6%2Bjr0R787OzTgzIxEz9hF8%2BEMoA4voyi8d9BNLHbO7HcZMYCf%2FVriem5iOgWuy%2BfqibeXLpjqpXqr1%2FZ9kTpMNrEvMQGOqUBb26ZU3JfqCItHbBrfxqFanez%2FejaB9X3vytLw8u0UN1D2B39XxKrH2FJYhAR%2BRpSHyBoUiZv%2BHiErjidBk4euKg8s13mW3E2GSivP4csIpCioEIvGyHJR%2B4jGscJ%2FyUK4PNzCl7W3KGRk7w9ZxC4AHiz1ZM5dfBnyED6mUJdkzczt06mN4CLqQZTHEEVwZjWXZ6vh5fgr7z5f5LPiaoCIYrxPpC6&X-Amz-Signature=47ac4f818d9232310e211f67f5b25571901112080bf0ba002008c58541de11ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TALXI4UU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T091046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1VaaQ5HiLvmP7yTG7Cgkf363YaEyeNL8Cqkad3SWxeQIgR32AiErHBdD4eMxwIxnzgJig6Gq%2FpBP0cxsMLDH2IRgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNivi5VFysomAvdg5CrcA%2BxKFT2SvcqZOVA20pcqWQdf%2BlnI3OcyEgeOqhgx3VGlGrYjdMVIVAyR5Df2Ofdbbag6z2laK1aJ49LC7bFOkJwWKeGuspuvbaDOdsAp6pgr3WGQ6BKS%2BKaxlAjngc%2FDjUQB%2By2pTFv8V%2BrUUkneo%2FhDiF5kPm2Wlcy4C%2BaOySZquBV%2BHqP0VvPW9Vd7usZ5XlmQ7Nn%2FPBshUQqQrzrTh8o66u%2FkRSBx4fVq33hFBftZ98u7sSxd7oxiTbTJ6INurYi31nfXnLJ3P4YF1LircDkim49f2eLUeI2k05sP7HpPJe%2BY1Pdrpv0fywas%2BsL3FOmHqzC6pDY9c0OIBj08w8lipt5J8Xr%2B1lrwvwjvn5pUpV9w3ymRJxTRcVkSRLUxmhgFm7%2FfyblTWWsPQQ2kEdInAtn%2B5Wtax7OLpHw4IiZuI%2FwzkXFXPTD2xvowOjlxvgrWOrdxQhxdq86WD4jrTsKeCGINzeBd%2Bz2IaTYl640YdY%2Fo%2BsjljYvnBHaT7zwUeoi%2Bxu81xPL5jh1O0AH3koMYxnqZhIwSMZbYHBfQuhg6JGHR2yqBwbe98UkvZvFE9p0%2FlNFG3GruvGMbGLDegOQ%2BJIh%2BdfhgzMMRGC0iPfZTgqDm3w34NZo%2BshuIMIfCvMQGOqUBZip8v2M%2F4W8z3e05XXvSAneDtBVoxHVR%2FqX03%2FTrBMUXXpRet5VP%2FkiIO2jT22NjyyvcRJbB%2FuGtnLUqmjE53Kit%2FDyA3hnYdYMmQ7%2B7%2BLRlcaH%2BjWZ22g%2FnWObBz4Q3P0zQ7cjHGDF4RB8%2B9FpfIIcWcHWPDhakwyu0yLRQJ6oQGqRjx7G1ECicPY5fR6P%2BjxqnZkTJhUWqSR1r7cEIfpK8%2F40o&X-Amz-Signature=87b537f61781b5aaf6960ef1a901ce39832e3cf0e413fac879da28553bee7379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KRPNR7T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALClkT1D91zttwHa9wj1ibI%2FkYLfZZO5JJkxkESDlk4AiAma1gQDO3vpSqD5BVBh4vdvt8%2BDYP53RFsYjwBiMI0Zyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMGDYmRRUZOLg9QLyNKtwD27fI7K9RlMuzAz7GYPvqrEsKWBJexs5h%2BlUf4CyVD9yKE9ap8STWjAj8IgK%2BaLmrftSMBNW9hMlg%2BYmMD7t8pVaqZWxiEEstyholKR5ss%2ByOa9qH%2F5ePJDAXeygggmrjKNaxqqE7nHQ05xhFIo0huoN1qLkcQmbl8LLUuXRj1h5SFAHbX7xe%2FVT3olJY9GJ4syxB0mqrs8uDfogQDUVP4%2FswhrHIrfjgqhorzOqI87bD38USGZsJ0%2BJ61QbhHfYgDYtujz0AO3AMVWEylT0HP3NVWwm345qNZv%2FKzLZepLM%2FRjvzlMpFh1vJgdP1rpIeZYT8ZUmHFXzFoF1bwUOfu%2BOjc4oo1j63KkzvY5ejEcz%2FcnOBRxvXlAI4r%2B%2BgiLzxCMtgvjjlDpEXpkvFg463H0dMvG%2B5ykDIM7nNh93Em%2FDvc5bzswv%2FZ4L0fUEbAdYmJydyZdlk911pkoffWMrj68mB9EZPD4Djn4UkdNunW%2BDQ7%2FpqUQXITeOIKxucGfYOKLrzKaPnhWjtRnnBokrgFCYX5aHHgVWI4fWW10dEqwXVTXMH3twIrScjllZArpNe3lvNJ0g3RBNJtVfn4ifGBteV63tmtLjlTJHHaxxxIYH%2F6GxH5KKqwCtKRD8wk8S8xAY6pgFXHThDeNoYAudaqdD64RNMOaYuJrlkiNybSmidNBJyGi4Z9jjzrhDqU5AVeKRta0StsHiwPnodIdYivjexX5MEPISjnPM7gSJVZOxfSssW%2F6zrkVkJ%2Bnv7kArZ%2FPDuNppNmsNviT94LmUbYQKWNTTzd499UoJSRZ4deVpdA14Z3rtQ1Y0Kgeb3FgItCDqDLx9tLIPP%2BuURAB0d6hnVlJ8LqbaK8O9o&X-Amz-Signature=e6624422c5e296a9925e26f97933ddbd5c8781f42ab686524d53898da6437623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=9e8061d9c3857c3f6e11666cfb60a5a362df8f9ce7eff072d9d2f51c1be49d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=6f30e5ecffaff9c7b7626b5c7cdae16cda635a8852f41eda6eeeffe5811fab99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7L3UCU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuaieOPXaox0SjBGJjU9v2r2Luo47i0vN3Dd3Kk9iUkgIgAPvr1Y2%2BpVwYLI04hHMwD2GLbJFXB5iaNmBah%2B7Ebw4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDh9n5jrkYw4LsCWrSrcAyZ9o2WXWlDZre9g7UjyKV5mVCfcAVkwvHDmCXWhOm6PugiywG6Vac8v6cV%2FS7amWFYr4uabVyokI7sAunARJnOH46LTnH3tUtaCg5N%2B6UcR2SuVMWP2QT7ErmgYwRcFzQ5MH%2BJopcCdyN6Z%2FSR5GoRdeKx0s%2Fm7f%2B5hXPFEeto6y6ghUn9whXhCShUwhrsalM0wMuyUKlWS5aq7j6DTHxWvKdAl2GXVkog9GoRhZb60MFYNLusIu12323ma6LXyDdR9FlzJQGZEdMotcTsCrRdAp7RecQU86nGEgCn0ZbIxL%2Fl50CbO%2FWjhJg5ndj8RRR9iLBerKcV%2FS8edyBxH2YSZ1GRMZ5eG2UvfF2KpybfIO0QEuIP%2FSL9zQPilT3sihbF2uSzRLryQmN0rNHn3SiHGuz42mPnDYBAgBAhSXCwNrIGuopkJyW5hYhdI8lf0mWYkmywyBlhIgtT1cw0Jxg5cgYQ7O3sylhNqOVysnqcRu%2BhQHO68YMO2GoZJhw36oyH9OkvvQCeus5cH60c8TLnzetu4N0e4tI59nAjunEM3wwhM9QuddhNEhmCARXtgZND5IrU6YDitUWRdC6SkCTuRafrphjCpnybq%2FnM73ArqC3MluX3BiWV0bkb5MPrEvMQGOqUBiHKt6FOYiIVYYVnZiWIQz%2Fjf86QjTG0LluW6b62ZW1dUGVf53V%2FQByF5zU265902cZl1q8lBg7J3yDPo9LBImyGle4OIU4buF4LHNVI1s694jZBpK1gsRh0dCR5aHAFoRXLvNkXPXgszKYwC44I9ppUO3uqFKM5SEDuN80k4XkfVD8AGvmbSKuhLTcz5yJFhC2bLanEh7PXxVSU9s8Y6gnMR1avj&X-Amz-Signature=9623ea8475abece521a29274750bd39040a54f59bc86b785dee1514e44215695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7L3UCU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuaieOPXaox0SjBGJjU9v2r2Luo47i0vN3Dd3Kk9iUkgIgAPvr1Y2%2BpVwYLI04hHMwD2GLbJFXB5iaNmBah%2B7Ebw4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDh9n5jrkYw4LsCWrSrcAyZ9o2WXWlDZre9g7UjyKV5mVCfcAVkwvHDmCXWhOm6PugiywG6Vac8v6cV%2FS7amWFYr4uabVyokI7sAunARJnOH46LTnH3tUtaCg5N%2B6UcR2SuVMWP2QT7ErmgYwRcFzQ5MH%2BJopcCdyN6Z%2FSR5GoRdeKx0s%2Fm7f%2B5hXPFEeto6y6ghUn9whXhCShUwhrsalM0wMuyUKlWS5aq7j6DTHxWvKdAl2GXVkog9GoRhZb60MFYNLusIu12323ma6LXyDdR9FlzJQGZEdMotcTsCrRdAp7RecQU86nGEgCn0ZbIxL%2Fl50CbO%2FWjhJg5ndj8RRR9iLBerKcV%2FS8edyBxH2YSZ1GRMZ5eG2UvfF2KpybfIO0QEuIP%2FSL9zQPilT3sihbF2uSzRLryQmN0rNHn3SiHGuz42mPnDYBAgBAhSXCwNrIGuopkJyW5hYhdI8lf0mWYkmywyBlhIgtT1cw0Jxg5cgYQ7O3sylhNqOVysnqcRu%2BhQHO68YMO2GoZJhw36oyH9OkvvQCeus5cH60c8TLnzetu4N0e4tI59nAjunEM3wwhM9QuddhNEhmCARXtgZND5IrU6YDitUWRdC6SkCTuRafrphjCpnybq%2FnM73ArqC3MluX3BiWV0bkb5MPrEvMQGOqUBiHKt6FOYiIVYYVnZiWIQz%2Fjf86QjTG0LluW6b62ZW1dUGVf53V%2FQByF5zU265902cZl1q8lBg7J3yDPo9LBImyGle4OIU4buF4LHNVI1s694jZBpK1gsRh0dCR5aHAFoRXLvNkXPXgszKYwC44I9ppUO3uqFKM5SEDuN80k4XkfVD8AGvmbSKuhLTcz5yJFhC2bLanEh7PXxVSU9s8Y6gnMR1avj&X-Amz-Signature=b2fb240f6d0df69418c5caba3ce4bde92ef3c6cef0971219e0d071812045b573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7L3UCU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuaieOPXaox0SjBGJjU9v2r2Luo47i0vN3Dd3Kk9iUkgIgAPvr1Y2%2BpVwYLI04hHMwD2GLbJFXB5iaNmBah%2B7Ebw4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDh9n5jrkYw4LsCWrSrcAyZ9o2WXWlDZre9g7UjyKV5mVCfcAVkwvHDmCXWhOm6PugiywG6Vac8v6cV%2FS7amWFYr4uabVyokI7sAunARJnOH46LTnH3tUtaCg5N%2B6UcR2SuVMWP2QT7ErmgYwRcFzQ5MH%2BJopcCdyN6Z%2FSR5GoRdeKx0s%2Fm7f%2B5hXPFEeto6y6ghUn9whXhCShUwhrsalM0wMuyUKlWS5aq7j6DTHxWvKdAl2GXVkog9GoRhZb60MFYNLusIu12323ma6LXyDdR9FlzJQGZEdMotcTsCrRdAp7RecQU86nGEgCn0ZbIxL%2Fl50CbO%2FWjhJg5ndj8RRR9iLBerKcV%2FS8edyBxH2YSZ1GRMZ5eG2UvfF2KpybfIO0QEuIP%2FSL9zQPilT3sihbF2uSzRLryQmN0rNHn3SiHGuz42mPnDYBAgBAhSXCwNrIGuopkJyW5hYhdI8lf0mWYkmywyBlhIgtT1cw0Jxg5cgYQ7O3sylhNqOVysnqcRu%2BhQHO68YMO2GoZJhw36oyH9OkvvQCeus5cH60c8TLnzetu4N0e4tI59nAjunEM3wwhM9QuddhNEhmCARXtgZND5IrU6YDitUWRdC6SkCTuRafrphjCpnybq%2FnM73ArqC3MluX3BiWV0bkb5MPrEvMQGOqUBiHKt6FOYiIVYYVnZiWIQz%2Fjf86QjTG0LluW6b62ZW1dUGVf53V%2FQByF5zU265902cZl1q8lBg7J3yDPo9LBImyGle4OIU4buF4LHNVI1s694jZBpK1gsRh0dCR5aHAFoRXLvNkXPXgszKYwC44I9ppUO3uqFKM5SEDuN80k4XkfVD8AGvmbSKuhLTcz5yJFhC2bLanEh7PXxVSU9s8Y6gnMR1avj&X-Amz-Signature=24a006431e76a83c8632f26694d3f9ac97fa44ededb4c1d10a467f7973e3e317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7L3UCU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuaieOPXaox0SjBGJjU9v2r2Luo47i0vN3Dd3Kk9iUkgIgAPvr1Y2%2BpVwYLI04hHMwD2GLbJFXB5iaNmBah%2B7Ebw4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDh9n5jrkYw4LsCWrSrcAyZ9o2WXWlDZre9g7UjyKV5mVCfcAVkwvHDmCXWhOm6PugiywG6Vac8v6cV%2FS7amWFYr4uabVyokI7sAunARJnOH46LTnH3tUtaCg5N%2B6UcR2SuVMWP2QT7ErmgYwRcFzQ5MH%2BJopcCdyN6Z%2FSR5GoRdeKx0s%2Fm7f%2B5hXPFEeto6y6ghUn9whXhCShUwhrsalM0wMuyUKlWS5aq7j6DTHxWvKdAl2GXVkog9GoRhZb60MFYNLusIu12323ma6LXyDdR9FlzJQGZEdMotcTsCrRdAp7RecQU86nGEgCn0ZbIxL%2Fl50CbO%2FWjhJg5ndj8RRR9iLBerKcV%2FS8edyBxH2YSZ1GRMZ5eG2UvfF2KpybfIO0QEuIP%2FSL9zQPilT3sihbF2uSzRLryQmN0rNHn3SiHGuz42mPnDYBAgBAhSXCwNrIGuopkJyW5hYhdI8lf0mWYkmywyBlhIgtT1cw0Jxg5cgYQ7O3sylhNqOVysnqcRu%2BhQHO68YMO2GoZJhw36oyH9OkvvQCeus5cH60c8TLnzetu4N0e4tI59nAjunEM3wwhM9QuddhNEhmCARXtgZND5IrU6YDitUWRdC6SkCTuRafrphjCpnybq%2FnM73ArqC3MluX3BiWV0bkb5MPrEvMQGOqUBiHKt6FOYiIVYYVnZiWIQz%2Fjf86QjTG0LluW6b62ZW1dUGVf53V%2FQByF5zU265902cZl1q8lBg7J3yDPo9LBImyGle4OIU4buF4LHNVI1s694jZBpK1gsRh0dCR5aHAFoRXLvNkXPXgszKYwC44I9ppUO3uqFKM5SEDuN80k4XkfVD8AGvmbSKuhLTcz5yJFhC2bLanEh7PXxVSU9s8Y6gnMR1avj&X-Amz-Signature=a3337dae562365e110cd401287794bc1dd273a23a0a8866dc71399ea54e76259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7L3UCU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuaieOPXaox0SjBGJjU9v2r2Luo47i0vN3Dd3Kk9iUkgIgAPvr1Y2%2BpVwYLI04hHMwD2GLbJFXB5iaNmBah%2B7Ebw4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDh9n5jrkYw4LsCWrSrcAyZ9o2WXWlDZre9g7UjyKV5mVCfcAVkwvHDmCXWhOm6PugiywG6Vac8v6cV%2FS7amWFYr4uabVyokI7sAunARJnOH46LTnH3tUtaCg5N%2B6UcR2SuVMWP2QT7ErmgYwRcFzQ5MH%2BJopcCdyN6Z%2FSR5GoRdeKx0s%2Fm7f%2B5hXPFEeto6y6ghUn9whXhCShUwhrsalM0wMuyUKlWS5aq7j6DTHxWvKdAl2GXVkog9GoRhZb60MFYNLusIu12323ma6LXyDdR9FlzJQGZEdMotcTsCrRdAp7RecQU86nGEgCn0ZbIxL%2Fl50CbO%2FWjhJg5ndj8RRR9iLBerKcV%2FS8edyBxH2YSZ1GRMZ5eG2UvfF2KpybfIO0QEuIP%2FSL9zQPilT3sihbF2uSzRLryQmN0rNHn3SiHGuz42mPnDYBAgBAhSXCwNrIGuopkJyW5hYhdI8lf0mWYkmywyBlhIgtT1cw0Jxg5cgYQ7O3sylhNqOVysnqcRu%2BhQHO68YMO2GoZJhw36oyH9OkvvQCeus5cH60c8TLnzetu4N0e4tI59nAjunEM3wwhM9QuddhNEhmCARXtgZND5IrU6YDitUWRdC6SkCTuRafrphjCpnybq%2FnM73ArqC3MluX3BiWV0bkb5MPrEvMQGOqUBiHKt6FOYiIVYYVnZiWIQz%2Fjf86QjTG0LluW6b62ZW1dUGVf53V%2FQByF5zU265902cZl1q8lBg7J3yDPo9LBImyGle4OIU4buF4LHNVI1s694jZBpK1gsRh0dCR5aHAFoRXLvNkXPXgszKYwC44I9ppUO3uqFKM5SEDuN80k4XkfVD8AGvmbSKuhLTcz5yJFhC2bLanEh7PXxVSU9s8Y6gnMR1avj&X-Amz-Signature=523cb7c0d9501fa03e1ce91415ac2ae0a846a41bb19aed7b4cc1e1c067070353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7L3UCU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuaieOPXaox0SjBGJjU9v2r2Luo47i0vN3Dd3Kk9iUkgIgAPvr1Y2%2BpVwYLI04hHMwD2GLbJFXB5iaNmBah%2B7Ebw4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDh9n5jrkYw4LsCWrSrcAyZ9o2WXWlDZre9g7UjyKV5mVCfcAVkwvHDmCXWhOm6PugiywG6Vac8v6cV%2FS7amWFYr4uabVyokI7sAunARJnOH46LTnH3tUtaCg5N%2B6UcR2SuVMWP2QT7ErmgYwRcFzQ5MH%2BJopcCdyN6Z%2FSR5GoRdeKx0s%2Fm7f%2B5hXPFEeto6y6ghUn9whXhCShUwhrsalM0wMuyUKlWS5aq7j6DTHxWvKdAl2GXVkog9GoRhZb60MFYNLusIu12323ma6LXyDdR9FlzJQGZEdMotcTsCrRdAp7RecQU86nGEgCn0ZbIxL%2Fl50CbO%2FWjhJg5ndj8RRR9iLBerKcV%2FS8edyBxH2YSZ1GRMZ5eG2UvfF2KpybfIO0QEuIP%2FSL9zQPilT3sihbF2uSzRLryQmN0rNHn3SiHGuz42mPnDYBAgBAhSXCwNrIGuopkJyW5hYhdI8lf0mWYkmywyBlhIgtT1cw0Jxg5cgYQ7O3sylhNqOVysnqcRu%2BhQHO68YMO2GoZJhw36oyH9OkvvQCeus5cH60c8TLnzetu4N0e4tI59nAjunEM3wwhM9QuddhNEhmCARXtgZND5IrU6YDitUWRdC6SkCTuRafrphjCpnybq%2FnM73ArqC3MluX3BiWV0bkb5MPrEvMQGOqUBiHKt6FOYiIVYYVnZiWIQz%2Fjf86QjTG0LluW6b62ZW1dUGVf53V%2FQByF5zU265902cZl1q8lBg7J3yDPo9LBImyGle4OIU4buF4LHNVI1s694jZBpK1gsRh0dCR5aHAFoRXLvNkXPXgszKYwC44I9ppUO3uqFKM5SEDuN80k4XkfVD8AGvmbSKuhLTcz5yJFhC2bLanEh7PXxVSU9s8Y6gnMR1avj&X-Amz-Signature=0818d8e2aee75d7557ae1fe83a28d9275a22f463ee068c099cf7b01774ceb84c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7L3UCU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuaieOPXaox0SjBGJjU9v2r2Luo47i0vN3Dd3Kk9iUkgIgAPvr1Y2%2BpVwYLI04hHMwD2GLbJFXB5iaNmBah%2B7Ebw4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDh9n5jrkYw4LsCWrSrcAyZ9o2WXWlDZre9g7UjyKV5mVCfcAVkwvHDmCXWhOm6PugiywG6Vac8v6cV%2FS7amWFYr4uabVyokI7sAunARJnOH46LTnH3tUtaCg5N%2B6UcR2SuVMWP2QT7ErmgYwRcFzQ5MH%2BJopcCdyN6Z%2FSR5GoRdeKx0s%2Fm7f%2B5hXPFEeto6y6ghUn9whXhCShUwhrsalM0wMuyUKlWS5aq7j6DTHxWvKdAl2GXVkog9GoRhZb60MFYNLusIu12323ma6LXyDdR9FlzJQGZEdMotcTsCrRdAp7RecQU86nGEgCn0ZbIxL%2Fl50CbO%2FWjhJg5ndj8RRR9iLBerKcV%2FS8edyBxH2YSZ1GRMZ5eG2UvfF2KpybfIO0QEuIP%2FSL9zQPilT3sihbF2uSzRLryQmN0rNHn3SiHGuz42mPnDYBAgBAhSXCwNrIGuopkJyW5hYhdI8lf0mWYkmywyBlhIgtT1cw0Jxg5cgYQ7O3sylhNqOVysnqcRu%2BhQHO68YMO2GoZJhw36oyH9OkvvQCeus5cH60c8TLnzetu4N0e4tI59nAjunEM3wwhM9QuddhNEhmCARXtgZND5IrU6YDitUWRdC6SkCTuRafrphjCpnybq%2FnM73ArqC3MluX3BiWV0bkb5MPrEvMQGOqUBiHKt6FOYiIVYYVnZiWIQz%2Fjf86QjTG0LluW6b62ZW1dUGVf53V%2FQByF5zU265902cZl1q8lBg7J3yDPo9LBImyGle4OIU4buF4LHNVI1s694jZBpK1gsRh0dCR5aHAFoRXLvNkXPXgszKYwC44I9ppUO3uqFKM5SEDuN80k4XkfVD8AGvmbSKuhLTcz5yJFhC2bLanEh7PXxVSU9s8Y6gnMR1avj&X-Amz-Signature=24a006431e76a83c8632f26694d3f9ac97fa44ededb4c1d10a467f7973e3e317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7L3UCU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuaieOPXaox0SjBGJjU9v2r2Luo47i0vN3Dd3Kk9iUkgIgAPvr1Y2%2BpVwYLI04hHMwD2GLbJFXB5iaNmBah%2B7Ebw4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDh9n5jrkYw4LsCWrSrcAyZ9o2WXWlDZre9g7UjyKV5mVCfcAVkwvHDmCXWhOm6PugiywG6Vac8v6cV%2FS7amWFYr4uabVyokI7sAunARJnOH46LTnH3tUtaCg5N%2B6UcR2SuVMWP2QT7ErmgYwRcFzQ5MH%2BJopcCdyN6Z%2FSR5GoRdeKx0s%2Fm7f%2B5hXPFEeto6y6ghUn9whXhCShUwhrsalM0wMuyUKlWS5aq7j6DTHxWvKdAl2GXVkog9GoRhZb60MFYNLusIu12323ma6LXyDdR9FlzJQGZEdMotcTsCrRdAp7RecQU86nGEgCn0ZbIxL%2Fl50CbO%2FWjhJg5ndj8RRR9iLBerKcV%2FS8edyBxH2YSZ1GRMZ5eG2UvfF2KpybfIO0QEuIP%2FSL9zQPilT3sihbF2uSzRLryQmN0rNHn3SiHGuz42mPnDYBAgBAhSXCwNrIGuopkJyW5hYhdI8lf0mWYkmywyBlhIgtT1cw0Jxg5cgYQ7O3sylhNqOVysnqcRu%2BhQHO68YMO2GoZJhw36oyH9OkvvQCeus5cH60c8TLnzetu4N0e4tI59nAjunEM3wwhM9QuddhNEhmCARXtgZND5IrU6YDitUWRdC6SkCTuRafrphjCpnybq%2FnM73ArqC3MluX3BiWV0bkb5MPrEvMQGOqUBiHKt6FOYiIVYYVnZiWIQz%2Fjf86QjTG0LluW6b62ZW1dUGVf53V%2FQByF5zU265902cZl1q8lBg7J3yDPo9LBImyGle4OIU4buF4LHNVI1s694jZBpK1gsRh0dCR5aHAFoRXLvNkXPXgszKYwC44I9ppUO3uqFKM5SEDuN80k4XkfVD8AGvmbSKuhLTcz5yJFhC2bLanEh7PXxVSU9s8Y6gnMR1avj&X-Amz-Signature=a6677e4abab57d1d9201714a0cd953bbf4dd25b308165dfec9789a9bb6e01c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7L3UCU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuaieOPXaox0SjBGJjU9v2r2Luo47i0vN3Dd3Kk9iUkgIgAPvr1Y2%2BpVwYLI04hHMwD2GLbJFXB5iaNmBah%2B7Ebw4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDh9n5jrkYw4LsCWrSrcAyZ9o2WXWlDZre9g7UjyKV5mVCfcAVkwvHDmCXWhOm6PugiywG6Vac8v6cV%2FS7amWFYr4uabVyokI7sAunARJnOH46LTnH3tUtaCg5N%2B6UcR2SuVMWP2QT7ErmgYwRcFzQ5MH%2BJopcCdyN6Z%2FSR5GoRdeKx0s%2Fm7f%2B5hXPFEeto6y6ghUn9whXhCShUwhrsalM0wMuyUKlWS5aq7j6DTHxWvKdAl2GXVkog9GoRhZb60MFYNLusIu12323ma6LXyDdR9FlzJQGZEdMotcTsCrRdAp7RecQU86nGEgCn0ZbIxL%2Fl50CbO%2FWjhJg5ndj8RRR9iLBerKcV%2FS8edyBxH2YSZ1GRMZ5eG2UvfF2KpybfIO0QEuIP%2FSL9zQPilT3sihbF2uSzRLryQmN0rNHn3SiHGuz42mPnDYBAgBAhSXCwNrIGuopkJyW5hYhdI8lf0mWYkmywyBlhIgtT1cw0Jxg5cgYQ7O3sylhNqOVysnqcRu%2BhQHO68YMO2GoZJhw36oyH9OkvvQCeus5cH60c8TLnzetu4N0e4tI59nAjunEM3wwhM9QuddhNEhmCARXtgZND5IrU6YDitUWRdC6SkCTuRafrphjCpnybq%2FnM73ArqC3MluX3BiWV0bkb5MPrEvMQGOqUBiHKt6FOYiIVYYVnZiWIQz%2Fjf86QjTG0LluW6b62ZW1dUGVf53V%2FQByF5zU265902cZl1q8lBg7J3yDPo9LBImyGle4OIU4buF4LHNVI1s694jZBpK1gsRh0dCR5aHAFoRXLvNkXPXgszKYwC44I9ppUO3uqFKM5SEDuN80k4XkfVD8AGvmbSKuhLTcz5yJFhC2bLanEh7PXxVSU9s8Y6gnMR1avj&X-Amz-Signature=545f7ba7f2647ec64d25e1f1f92e26f919e38911f4d4fe9fbe6a217713fc2dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7L3UCU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuaieOPXaox0SjBGJjU9v2r2Luo47i0vN3Dd3Kk9iUkgIgAPvr1Y2%2BpVwYLI04hHMwD2GLbJFXB5iaNmBah%2B7Ebw4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDh9n5jrkYw4LsCWrSrcAyZ9o2WXWlDZre9g7UjyKV5mVCfcAVkwvHDmCXWhOm6PugiywG6Vac8v6cV%2FS7amWFYr4uabVyokI7sAunARJnOH46LTnH3tUtaCg5N%2B6UcR2SuVMWP2QT7ErmgYwRcFzQ5MH%2BJopcCdyN6Z%2FSR5GoRdeKx0s%2Fm7f%2B5hXPFEeto6y6ghUn9whXhCShUwhrsalM0wMuyUKlWS5aq7j6DTHxWvKdAl2GXVkog9GoRhZb60MFYNLusIu12323ma6LXyDdR9FlzJQGZEdMotcTsCrRdAp7RecQU86nGEgCn0ZbIxL%2Fl50CbO%2FWjhJg5ndj8RRR9iLBerKcV%2FS8edyBxH2YSZ1GRMZ5eG2UvfF2KpybfIO0QEuIP%2FSL9zQPilT3sihbF2uSzRLryQmN0rNHn3SiHGuz42mPnDYBAgBAhSXCwNrIGuopkJyW5hYhdI8lf0mWYkmywyBlhIgtT1cw0Jxg5cgYQ7O3sylhNqOVysnqcRu%2BhQHO68YMO2GoZJhw36oyH9OkvvQCeus5cH60c8TLnzetu4N0e4tI59nAjunEM3wwhM9QuddhNEhmCARXtgZND5IrU6YDitUWRdC6SkCTuRafrphjCpnybq%2FnM73ArqC3MluX3BiWV0bkb5MPrEvMQGOqUBiHKt6FOYiIVYYVnZiWIQz%2Fjf86QjTG0LluW6b62ZW1dUGVf53V%2FQByF5zU265902cZl1q8lBg7J3yDPo9LBImyGle4OIU4buF4LHNVI1s694jZBpK1gsRh0dCR5aHAFoRXLvNkXPXgszKYwC44I9ppUO3uqFKM5SEDuN80k4XkfVD8AGvmbSKuhLTcz5yJFhC2bLanEh7PXxVSU9s8Y6gnMR1avj&X-Amz-Signature=7e3272badbd7273f344756e4cb2a4a95e83e30a75171850f162a3bc917bb5b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
