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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXW5DZPX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdbmgVXN1P8CphSRaWvLl8WHd99Av9T7pQKaPWLV1ZOAiB5n7aqu6k48vyg%2Ff5%2BZzBtFvlYwyCtu2NOQeYpUXOSNir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMscrHhAMqW9bgBwzhKtwDQVpnwBhdfEyE4lZFroz2Loy1h38wtmUfGhBQyE7MQX%2FOLLkisJBeZNgDGifxxAz%2FyJM7petb84ACAUvn8wULpUtNZ272UWiuGkCjKq4bJKlpVZ1arviDcUVOa9h%2BidamNh3lgFZjNvILX0XOyNSVeW0T1xy9f5n9BztRFM3sS2%2BwlKWkDBml12qDCOFIXuaDXLBnBogWfRtS4PDo6jIqMQrIvfbwA4wMdoQjC%2FHMk4mUdtVw0aLr%2FXiC2Afjzp5AhmQpR0nDe1OueAC4rLNqIfFg%2Fc3LL9YS1vOAe0uYGFRa6qpgFRRpcz8etl03S6SGN6VY5eElluCaC7iZRLtL47BRo%2BzAlz35pLbTTLHP3THwdYdXy%2FRqZ6Fpy1xRbj1NzyXkNJOOH9CaQs%2Fl7Ez1mLrtc6QmwDSUkib8vv4JP%2FVd4iordvQc2P%2BvsuIz9OLRmg1THJIGcXxSBoMgTRQXQq6YF%2FDGkpvt%2BhkAeNohMFidJwrBCMQewVIl5FAHN7wmySDZG9sZ2gqAyl6CB4Xw0miLL3N4l5U3TZdMr6xMJSPxRMNYQlKdyuQf1xKakmMzjQNf8mfa3E3t%2F4dimdZ1QoEZKJHLKom6YBnEus33LIuydRsaMJ%2BnIXRQJ88wmrfBxAY6pgGu9j94ptFpgO3FM9jK4Nm%2FpJm9QDytChdFfor1GypgdbYiLWIGhTgZlbPINnUKkSn6hCgoXybgP0OD2HL%2F7Nle2o68sTakyLOoTXCa%2F4RTgEQSxiiLX6D%2BsteHb1RO3QIIzziVmKsrWvqqEBaU1OS%2BJ%2F8%2BlFoBcJNzkna8qbjFUbQDOWP5FpdbfsJI67iVRuILYv0hVgdnDNUroeCwNGHwpFM0LazG&X-Amz-Signature=d65a01389f488a12f4affdd885885f925e875d005f6b7d02d7153d93b778714f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXW5DZPX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdbmgVXN1P8CphSRaWvLl8WHd99Av9T7pQKaPWLV1ZOAiB5n7aqu6k48vyg%2Ff5%2BZzBtFvlYwyCtu2NOQeYpUXOSNir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMscrHhAMqW9bgBwzhKtwDQVpnwBhdfEyE4lZFroz2Loy1h38wtmUfGhBQyE7MQX%2FOLLkisJBeZNgDGifxxAz%2FyJM7petb84ACAUvn8wULpUtNZ272UWiuGkCjKq4bJKlpVZ1arviDcUVOa9h%2BidamNh3lgFZjNvILX0XOyNSVeW0T1xy9f5n9BztRFM3sS2%2BwlKWkDBml12qDCOFIXuaDXLBnBogWfRtS4PDo6jIqMQrIvfbwA4wMdoQjC%2FHMk4mUdtVw0aLr%2FXiC2Afjzp5AhmQpR0nDe1OueAC4rLNqIfFg%2Fc3LL9YS1vOAe0uYGFRa6qpgFRRpcz8etl03S6SGN6VY5eElluCaC7iZRLtL47BRo%2BzAlz35pLbTTLHP3THwdYdXy%2FRqZ6Fpy1xRbj1NzyXkNJOOH9CaQs%2Fl7Ez1mLrtc6QmwDSUkib8vv4JP%2FVd4iordvQc2P%2BvsuIz9OLRmg1THJIGcXxSBoMgTRQXQq6YF%2FDGkpvt%2BhkAeNohMFidJwrBCMQewVIl5FAHN7wmySDZG9sZ2gqAyl6CB4Xw0miLL3N4l5U3TZdMr6xMJSPxRMNYQlKdyuQf1xKakmMzjQNf8mfa3E3t%2F4dimdZ1QoEZKJHLKom6YBnEus33LIuydRsaMJ%2BnIXRQJ88wmrfBxAY6pgGu9j94ptFpgO3FM9jK4Nm%2FpJm9QDytChdFfor1GypgdbYiLWIGhTgZlbPINnUKkSn6hCgoXybgP0OD2HL%2F7Nle2o68sTakyLOoTXCa%2F4RTgEQSxiiLX6D%2BsteHb1RO3QIIzziVmKsrWvqqEBaU1OS%2BJ%2F8%2BlFoBcJNzkna8qbjFUbQDOWP5FpdbfsJI67iVRuILYv0hVgdnDNUroeCwNGHwpFM0LazG&X-Amz-Signature=c73e8c98fdfeb5e3943f9638dae28398c7efb1b4dc4758643dcdfabf97082bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXW5DZPX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdbmgVXN1P8CphSRaWvLl8WHd99Av9T7pQKaPWLV1ZOAiB5n7aqu6k48vyg%2Ff5%2BZzBtFvlYwyCtu2NOQeYpUXOSNir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMscrHhAMqW9bgBwzhKtwDQVpnwBhdfEyE4lZFroz2Loy1h38wtmUfGhBQyE7MQX%2FOLLkisJBeZNgDGifxxAz%2FyJM7petb84ACAUvn8wULpUtNZ272UWiuGkCjKq4bJKlpVZ1arviDcUVOa9h%2BidamNh3lgFZjNvILX0XOyNSVeW0T1xy9f5n9BztRFM3sS2%2BwlKWkDBml12qDCOFIXuaDXLBnBogWfRtS4PDo6jIqMQrIvfbwA4wMdoQjC%2FHMk4mUdtVw0aLr%2FXiC2Afjzp5AhmQpR0nDe1OueAC4rLNqIfFg%2Fc3LL9YS1vOAe0uYGFRa6qpgFRRpcz8etl03S6SGN6VY5eElluCaC7iZRLtL47BRo%2BzAlz35pLbTTLHP3THwdYdXy%2FRqZ6Fpy1xRbj1NzyXkNJOOH9CaQs%2Fl7Ez1mLrtc6QmwDSUkib8vv4JP%2FVd4iordvQc2P%2BvsuIz9OLRmg1THJIGcXxSBoMgTRQXQq6YF%2FDGkpvt%2BhkAeNohMFidJwrBCMQewVIl5FAHN7wmySDZG9sZ2gqAyl6CB4Xw0miLL3N4l5U3TZdMr6xMJSPxRMNYQlKdyuQf1xKakmMzjQNf8mfa3E3t%2F4dimdZ1QoEZKJHLKom6YBnEus33LIuydRsaMJ%2BnIXRQJ88wmrfBxAY6pgGu9j94ptFpgO3FM9jK4Nm%2FpJm9QDytChdFfor1GypgdbYiLWIGhTgZlbPINnUKkSn6hCgoXybgP0OD2HL%2F7Nle2o68sTakyLOoTXCa%2F4RTgEQSxiiLX6D%2BsteHb1RO3QIIzziVmKsrWvqqEBaU1OS%2BJ%2F8%2BlFoBcJNzkna8qbjFUbQDOWP5FpdbfsJI67iVRuILYv0hVgdnDNUroeCwNGHwpFM0LazG&X-Amz-Signature=2f5cd913f7e50058a04482678349e702eba68418c21fdd9eaf8e914121281d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXW5DZPX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdbmgVXN1P8CphSRaWvLl8WHd99Av9T7pQKaPWLV1ZOAiB5n7aqu6k48vyg%2Ff5%2BZzBtFvlYwyCtu2NOQeYpUXOSNir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMscrHhAMqW9bgBwzhKtwDQVpnwBhdfEyE4lZFroz2Loy1h38wtmUfGhBQyE7MQX%2FOLLkisJBeZNgDGifxxAz%2FyJM7petb84ACAUvn8wULpUtNZ272UWiuGkCjKq4bJKlpVZ1arviDcUVOa9h%2BidamNh3lgFZjNvILX0XOyNSVeW0T1xy9f5n9BztRFM3sS2%2BwlKWkDBml12qDCOFIXuaDXLBnBogWfRtS4PDo6jIqMQrIvfbwA4wMdoQjC%2FHMk4mUdtVw0aLr%2FXiC2Afjzp5AhmQpR0nDe1OueAC4rLNqIfFg%2Fc3LL9YS1vOAe0uYGFRa6qpgFRRpcz8etl03S6SGN6VY5eElluCaC7iZRLtL47BRo%2BzAlz35pLbTTLHP3THwdYdXy%2FRqZ6Fpy1xRbj1NzyXkNJOOH9CaQs%2Fl7Ez1mLrtc6QmwDSUkib8vv4JP%2FVd4iordvQc2P%2BvsuIz9OLRmg1THJIGcXxSBoMgTRQXQq6YF%2FDGkpvt%2BhkAeNohMFidJwrBCMQewVIl5FAHN7wmySDZG9sZ2gqAyl6CB4Xw0miLL3N4l5U3TZdMr6xMJSPxRMNYQlKdyuQf1xKakmMzjQNf8mfa3E3t%2F4dimdZ1QoEZKJHLKom6YBnEus33LIuydRsaMJ%2BnIXRQJ88wmrfBxAY6pgGu9j94ptFpgO3FM9jK4Nm%2FpJm9QDytChdFfor1GypgdbYiLWIGhTgZlbPINnUKkSn6hCgoXybgP0OD2HL%2F7Nle2o68sTakyLOoTXCa%2F4RTgEQSxiiLX6D%2BsteHb1RO3QIIzziVmKsrWvqqEBaU1OS%2BJ%2F8%2BlFoBcJNzkna8qbjFUbQDOWP5FpdbfsJI67iVRuILYv0hVgdnDNUroeCwNGHwpFM0LazG&X-Amz-Signature=86d382b6374372e32787fb8cb81e29093fe65b5840fb22b039b14c5d6086aa60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXW5DZPX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdbmgVXN1P8CphSRaWvLl8WHd99Av9T7pQKaPWLV1ZOAiB5n7aqu6k48vyg%2Ff5%2BZzBtFvlYwyCtu2NOQeYpUXOSNir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMscrHhAMqW9bgBwzhKtwDQVpnwBhdfEyE4lZFroz2Loy1h38wtmUfGhBQyE7MQX%2FOLLkisJBeZNgDGifxxAz%2FyJM7petb84ACAUvn8wULpUtNZ272UWiuGkCjKq4bJKlpVZ1arviDcUVOa9h%2BidamNh3lgFZjNvILX0XOyNSVeW0T1xy9f5n9BztRFM3sS2%2BwlKWkDBml12qDCOFIXuaDXLBnBogWfRtS4PDo6jIqMQrIvfbwA4wMdoQjC%2FHMk4mUdtVw0aLr%2FXiC2Afjzp5AhmQpR0nDe1OueAC4rLNqIfFg%2Fc3LL9YS1vOAe0uYGFRa6qpgFRRpcz8etl03S6SGN6VY5eElluCaC7iZRLtL47BRo%2BzAlz35pLbTTLHP3THwdYdXy%2FRqZ6Fpy1xRbj1NzyXkNJOOH9CaQs%2Fl7Ez1mLrtc6QmwDSUkib8vv4JP%2FVd4iordvQc2P%2BvsuIz9OLRmg1THJIGcXxSBoMgTRQXQq6YF%2FDGkpvt%2BhkAeNohMFidJwrBCMQewVIl5FAHN7wmySDZG9sZ2gqAyl6CB4Xw0miLL3N4l5U3TZdMr6xMJSPxRMNYQlKdyuQf1xKakmMzjQNf8mfa3E3t%2F4dimdZ1QoEZKJHLKom6YBnEus33LIuydRsaMJ%2BnIXRQJ88wmrfBxAY6pgGu9j94ptFpgO3FM9jK4Nm%2FpJm9QDytChdFfor1GypgdbYiLWIGhTgZlbPINnUKkSn6hCgoXybgP0OD2HL%2F7Nle2o68sTakyLOoTXCa%2F4RTgEQSxiiLX6D%2BsteHb1RO3QIIzziVmKsrWvqqEBaU1OS%2BJ%2F8%2BlFoBcJNzkna8qbjFUbQDOWP5FpdbfsJI67iVRuILYv0hVgdnDNUroeCwNGHwpFM0LazG&X-Amz-Signature=cccbce8c1a1694f3976638729195f8cc3da0361021acd53c19344c91213d3c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXW5DZPX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdbmgVXN1P8CphSRaWvLl8WHd99Av9T7pQKaPWLV1ZOAiB5n7aqu6k48vyg%2Ff5%2BZzBtFvlYwyCtu2NOQeYpUXOSNir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMscrHhAMqW9bgBwzhKtwDQVpnwBhdfEyE4lZFroz2Loy1h38wtmUfGhBQyE7MQX%2FOLLkisJBeZNgDGifxxAz%2FyJM7petb84ACAUvn8wULpUtNZ272UWiuGkCjKq4bJKlpVZ1arviDcUVOa9h%2BidamNh3lgFZjNvILX0XOyNSVeW0T1xy9f5n9BztRFM3sS2%2BwlKWkDBml12qDCOFIXuaDXLBnBogWfRtS4PDo6jIqMQrIvfbwA4wMdoQjC%2FHMk4mUdtVw0aLr%2FXiC2Afjzp5AhmQpR0nDe1OueAC4rLNqIfFg%2Fc3LL9YS1vOAe0uYGFRa6qpgFRRpcz8etl03S6SGN6VY5eElluCaC7iZRLtL47BRo%2BzAlz35pLbTTLHP3THwdYdXy%2FRqZ6Fpy1xRbj1NzyXkNJOOH9CaQs%2Fl7Ez1mLrtc6QmwDSUkib8vv4JP%2FVd4iordvQc2P%2BvsuIz9OLRmg1THJIGcXxSBoMgTRQXQq6YF%2FDGkpvt%2BhkAeNohMFidJwrBCMQewVIl5FAHN7wmySDZG9sZ2gqAyl6CB4Xw0miLL3N4l5U3TZdMr6xMJSPxRMNYQlKdyuQf1xKakmMzjQNf8mfa3E3t%2F4dimdZ1QoEZKJHLKom6YBnEus33LIuydRsaMJ%2BnIXRQJ88wmrfBxAY6pgGu9j94ptFpgO3FM9jK4Nm%2FpJm9QDytChdFfor1GypgdbYiLWIGhTgZlbPINnUKkSn6hCgoXybgP0OD2HL%2F7Nle2o68sTakyLOoTXCa%2F4RTgEQSxiiLX6D%2BsteHb1RO3QIIzziVmKsrWvqqEBaU1OS%2BJ%2F8%2BlFoBcJNzkna8qbjFUbQDOWP5FpdbfsJI67iVRuILYv0hVgdnDNUroeCwNGHwpFM0LazG&X-Amz-Signature=5b76557e6d5fae5c5ac2cfc9b407577ac3eabf3e5adf7e5f90d3cda937617b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXW5DZPX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdbmgVXN1P8CphSRaWvLl8WHd99Av9T7pQKaPWLV1ZOAiB5n7aqu6k48vyg%2Ff5%2BZzBtFvlYwyCtu2NOQeYpUXOSNir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMscrHhAMqW9bgBwzhKtwDQVpnwBhdfEyE4lZFroz2Loy1h38wtmUfGhBQyE7MQX%2FOLLkisJBeZNgDGifxxAz%2FyJM7petb84ACAUvn8wULpUtNZ272UWiuGkCjKq4bJKlpVZ1arviDcUVOa9h%2BidamNh3lgFZjNvILX0XOyNSVeW0T1xy9f5n9BztRFM3sS2%2BwlKWkDBml12qDCOFIXuaDXLBnBogWfRtS4PDo6jIqMQrIvfbwA4wMdoQjC%2FHMk4mUdtVw0aLr%2FXiC2Afjzp5AhmQpR0nDe1OueAC4rLNqIfFg%2Fc3LL9YS1vOAe0uYGFRa6qpgFRRpcz8etl03S6SGN6VY5eElluCaC7iZRLtL47BRo%2BzAlz35pLbTTLHP3THwdYdXy%2FRqZ6Fpy1xRbj1NzyXkNJOOH9CaQs%2Fl7Ez1mLrtc6QmwDSUkib8vv4JP%2FVd4iordvQc2P%2BvsuIz9OLRmg1THJIGcXxSBoMgTRQXQq6YF%2FDGkpvt%2BhkAeNohMFidJwrBCMQewVIl5FAHN7wmySDZG9sZ2gqAyl6CB4Xw0miLL3N4l5U3TZdMr6xMJSPxRMNYQlKdyuQf1xKakmMzjQNf8mfa3E3t%2F4dimdZ1QoEZKJHLKom6YBnEus33LIuydRsaMJ%2BnIXRQJ88wmrfBxAY6pgGu9j94ptFpgO3FM9jK4Nm%2FpJm9QDytChdFfor1GypgdbYiLWIGhTgZlbPINnUKkSn6hCgoXybgP0OD2HL%2F7Nle2o68sTakyLOoTXCa%2F4RTgEQSxiiLX6D%2BsteHb1RO3QIIzziVmKsrWvqqEBaU1OS%2BJ%2F8%2BlFoBcJNzkna8qbjFUbQDOWP5FpdbfsJI67iVRuILYv0hVgdnDNUroeCwNGHwpFM0LazG&X-Amz-Signature=d0d7a3e38b4a53ab13246bc942b06fc4aad74b2eb6f299810ce6294d5051de0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXW5DZPX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdbmgVXN1P8CphSRaWvLl8WHd99Av9T7pQKaPWLV1ZOAiB5n7aqu6k48vyg%2Ff5%2BZzBtFvlYwyCtu2NOQeYpUXOSNir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMscrHhAMqW9bgBwzhKtwDQVpnwBhdfEyE4lZFroz2Loy1h38wtmUfGhBQyE7MQX%2FOLLkisJBeZNgDGifxxAz%2FyJM7petb84ACAUvn8wULpUtNZ272UWiuGkCjKq4bJKlpVZ1arviDcUVOa9h%2BidamNh3lgFZjNvILX0XOyNSVeW0T1xy9f5n9BztRFM3sS2%2BwlKWkDBml12qDCOFIXuaDXLBnBogWfRtS4PDo6jIqMQrIvfbwA4wMdoQjC%2FHMk4mUdtVw0aLr%2FXiC2Afjzp5AhmQpR0nDe1OueAC4rLNqIfFg%2Fc3LL9YS1vOAe0uYGFRa6qpgFRRpcz8etl03S6SGN6VY5eElluCaC7iZRLtL47BRo%2BzAlz35pLbTTLHP3THwdYdXy%2FRqZ6Fpy1xRbj1NzyXkNJOOH9CaQs%2Fl7Ez1mLrtc6QmwDSUkib8vv4JP%2FVd4iordvQc2P%2BvsuIz9OLRmg1THJIGcXxSBoMgTRQXQq6YF%2FDGkpvt%2BhkAeNohMFidJwrBCMQewVIl5FAHN7wmySDZG9sZ2gqAyl6CB4Xw0miLL3N4l5U3TZdMr6xMJSPxRMNYQlKdyuQf1xKakmMzjQNf8mfa3E3t%2F4dimdZ1QoEZKJHLKom6YBnEus33LIuydRsaMJ%2BnIXRQJ88wmrfBxAY6pgGu9j94ptFpgO3FM9jK4Nm%2FpJm9QDytChdFfor1GypgdbYiLWIGhTgZlbPINnUKkSn6hCgoXybgP0OD2HL%2F7Nle2o68sTakyLOoTXCa%2F4RTgEQSxiiLX6D%2BsteHb1RO3QIIzziVmKsrWvqqEBaU1OS%2BJ%2F8%2BlFoBcJNzkna8qbjFUbQDOWP5FpdbfsJI67iVRuILYv0hVgdnDNUroeCwNGHwpFM0LazG&X-Amz-Signature=698322441a40287400e69d030c6d14dc4cdfa7a2fbd065e8eaf3ad05c8f5d038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXW5DZPX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdbmgVXN1P8CphSRaWvLl8WHd99Av9T7pQKaPWLV1ZOAiB5n7aqu6k48vyg%2Ff5%2BZzBtFvlYwyCtu2NOQeYpUXOSNir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMscrHhAMqW9bgBwzhKtwDQVpnwBhdfEyE4lZFroz2Loy1h38wtmUfGhBQyE7MQX%2FOLLkisJBeZNgDGifxxAz%2FyJM7petb84ACAUvn8wULpUtNZ272UWiuGkCjKq4bJKlpVZ1arviDcUVOa9h%2BidamNh3lgFZjNvILX0XOyNSVeW0T1xy9f5n9BztRFM3sS2%2BwlKWkDBml12qDCOFIXuaDXLBnBogWfRtS4PDo6jIqMQrIvfbwA4wMdoQjC%2FHMk4mUdtVw0aLr%2FXiC2Afjzp5AhmQpR0nDe1OueAC4rLNqIfFg%2Fc3LL9YS1vOAe0uYGFRa6qpgFRRpcz8etl03S6SGN6VY5eElluCaC7iZRLtL47BRo%2BzAlz35pLbTTLHP3THwdYdXy%2FRqZ6Fpy1xRbj1NzyXkNJOOH9CaQs%2Fl7Ez1mLrtc6QmwDSUkib8vv4JP%2FVd4iordvQc2P%2BvsuIz9OLRmg1THJIGcXxSBoMgTRQXQq6YF%2FDGkpvt%2BhkAeNohMFidJwrBCMQewVIl5FAHN7wmySDZG9sZ2gqAyl6CB4Xw0miLL3N4l5U3TZdMr6xMJSPxRMNYQlKdyuQf1xKakmMzjQNf8mfa3E3t%2F4dimdZ1QoEZKJHLKom6YBnEus33LIuydRsaMJ%2BnIXRQJ88wmrfBxAY6pgGu9j94ptFpgO3FM9jK4Nm%2FpJm9QDytChdFfor1GypgdbYiLWIGhTgZlbPINnUKkSn6hCgoXybgP0OD2HL%2F7Nle2o68sTakyLOoTXCa%2F4RTgEQSxiiLX6D%2BsteHb1RO3QIIzziVmKsrWvqqEBaU1OS%2BJ%2F8%2BlFoBcJNzkna8qbjFUbQDOWP5FpdbfsJI67iVRuILYv0hVgdnDNUroeCwNGHwpFM0LazG&X-Amz-Signature=4d81efd05fbcadb435b108a76c7d2eb7881d4aa18a7d90418801026f196ed2cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXW5DZPX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdbmgVXN1P8CphSRaWvLl8WHd99Av9T7pQKaPWLV1ZOAiB5n7aqu6k48vyg%2Ff5%2BZzBtFvlYwyCtu2NOQeYpUXOSNir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMscrHhAMqW9bgBwzhKtwDQVpnwBhdfEyE4lZFroz2Loy1h38wtmUfGhBQyE7MQX%2FOLLkisJBeZNgDGifxxAz%2FyJM7petb84ACAUvn8wULpUtNZ272UWiuGkCjKq4bJKlpVZ1arviDcUVOa9h%2BidamNh3lgFZjNvILX0XOyNSVeW0T1xy9f5n9BztRFM3sS2%2BwlKWkDBml12qDCOFIXuaDXLBnBogWfRtS4PDo6jIqMQrIvfbwA4wMdoQjC%2FHMk4mUdtVw0aLr%2FXiC2Afjzp5AhmQpR0nDe1OueAC4rLNqIfFg%2Fc3LL9YS1vOAe0uYGFRa6qpgFRRpcz8etl03S6SGN6VY5eElluCaC7iZRLtL47BRo%2BzAlz35pLbTTLHP3THwdYdXy%2FRqZ6Fpy1xRbj1NzyXkNJOOH9CaQs%2Fl7Ez1mLrtc6QmwDSUkib8vv4JP%2FVd4iordvQc2P%2BvsuIz9OLRmg1THJIGcXxSBoMgTRQXQq6YF%2FDGkpvt%2BhkAeNohMFidJwrBCMQewVIl5FAHN7wmySDZG9sZ2gqAyl6CB4Xw0miLL3N4l5U3TZdMr6xMJSPxRMNYQlKdyuQf1xKakmMzjQNf8mfa3E3t%2F4dimdZ1QoEZKJHLKom6YBnEus33LIuydRsaMJ%2BnIXRQJ88wmrfBxAY6pgGu9j94ptFpgO3FM9jK4Nm%2FpJm9QDytChdFfor1GypgdbYiLWIGhTgZlbPINnUKkSn6hCgoXybgP0OD2HL%2F7Nle2o68sTakyLOoTXCa%2F4RTgEQSxiiLX6D%2BsteHb1RO3QIIzziVmKsrWvqqEBaU1OS%2BJ%2F8%2BlFoBcJNzkna8qbjFUbQDOWP5FpdbfsJI67iVRuILYv0hVgdnDNUroeCwNGHwpFM0LazG&X-Amz-Signature=b6c3ecf97028d7d2697443a03f037456c73cc064749b7ab48bc5d547d56e8cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PTTXKXP%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIFGDJrDwqO%2Bf9QzhwI29QPFdV5DPoCsO9JYrL%2B8ggo0kAiEA5bnMSA5qCbls3cTfQR%2F5gWh9aOiWpGk%2FsknbV1h38ywq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDINlG7cBdao9fP%2FvIircA5rgvMZkNH4V1xd%2B70XTPnpIn3K%2BwSyVrOIsg%2BfsrY%2FhlQEhTNq23DUuK%2Bxp39MQQMmeuKANkcRa4Q4CMlhGg8c4iaKkvOVt%2FYI6h7zCxYwjzeZYiFlnXCD4LjAPFRaAwBf%2F59%2F6I2o%2FvholHtMWQ2WYvrmNR9GCfir7WY%2FaXNIUiMK0WcV91oFhamY4UnPAr62NRoL4sLA%2BA46u9Hv0Uw5XIe%2BoWlC6DXZKyb8KV937iYjvQKpWO4qPsqFP%2FGzqh%2FuILiBTJ2qKIrUejt3U9byuGVm8EsaXIGH%2FOUOPXlVmQX1e0kQUsWmcehxM6KQSdOa0EpNyfh52NXu5rsTzZhRJuYUsZmy134seY8Saq0u9vgLoFaR6JGVkS0KRUBesw0ZOy3Ha2ii8jWHRekyUQPXAqTCdHBPDJgxi4KxGMcOC2qydwNUkoKvP9wwVdu9QiqGaK0p%2F91Lvzc6GjimfwBOhe4yuG4YxlPYqE%2BPP%2F1U%2BUhyTx%2F%2F%2FIpjEZXS1fKQrMJ3oRXLJEw3cY%2FPsn8EvCRk0HdKEvnEDDen70XAfib%2FXbGxEmpfuZL4FyigN2Z6xFp%2F5q%2F5pX%2FvxEgIEtEZFqMdfJPwaojq8Gnn7bpf9BMkTfxM%2Fr024ClsLdUQfMIG4wcQGOqUBGLIJu43Fj2rsVQbjquxdCe9LqeBFS9%2FWw7aNTdIzY2vZxw%2Fih%2FrwGNTs3ezExGUhzj4IkiIIqqMF8mE5%2FyOH9M3Mts0jftwGumjC205s0Pz%2BcvpMXCYHQZdO6J12TsUquv3%2BcbP8dJScMNLUiMYtch1DaCTB%2FXPUfghIY6jaClaLwGe0bICS%2Fq9zemSKP4fwqXXcRMD63Wlif5TiohINNGlZNUAj&X-Amz-Signature=d70db313ac66e54507b141594986058d4c26a106eab5232660468e28f8f7b882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THN7FGSE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCIGP7HtUbg2ZCvZKt8HQPocQVNCeoGs3MK84WhceshNgIgQxDj8AT4ILMIMeIJR5E%2BRXNDiKtBmSRzMzXSWCXCGKIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDD6RptnbW%2FwG7KyKAyrcA%2FLHEmjk52ygTcH1iTufDTGH62HB8NFt4je%2B4NvTzj7s%2BW9p0vS8hiwtyJTMF20jExHRt%2BaltyeiNPBYmuxluvl5J2FmbngsIbNAKnL3jTebB91gBVmjE6WK2d5UK7%2BZJp8QUnofjPeVR6DTH2c3ABCGWAY1gVSBBYthXzjbAdG2rTfn1mydWZC4t6dRdLeDE7PXuDYEWpLmsOihuMWLhcmD5n83EjLYQ%2BK6Y81i30PyU4MeAd8C37u36RrVoNiwUEoo8Po8r2MIZ1raCIo2DUoPM6VlbePITf30wnW3s8%2BmJdSdvpj%2BnPQaxe4idn9UZPx0FTstF3NS%2Bx7vmfBCXFP1nSbZKfXkzsT7HSItlDYQ%2B8FvatjlZot4kft0yRz4qDtUQ7R72fOgZsJGoGAjh18R8Qr6atwRbFCrsdsEHJC4AEAyj4tKQdbAAcE3CYHQF9FSAy4p4Pti0eCX8kkRRkk5l0DYOplLiwMGkbfUZkUdi8EjjUUEdyQHO2kfOrKM2Vg0B7saaG7i%2BgE6wMVZhAwxovd8%2BNO%2FXCHgffrFNMTZo2gyT22FFSx24iIqYFJTw8M3KxwZ77uun%2FR0rF5RNlb7%2B013wnTbeNEGJgM%2F38K%2BnilmBRiQ6WAvu1cpMOu4wcQGOqUB4zNqy09qRrwd8yTGMux7hBzhy74NBremXhMu2QyfAvxoNjW5614ygOxjdDPcLzHwCVusjuleyrCUFhRA2dL69MfFmviPLCs%2BO2PjnwGkU52If63Vdbr%2FpQzLDTPrj52ZB%2FVHOzE37x%2B26dhwHrEk9GDRrhaUrSGSB5rXSbu5loEArREGXk%2BD3tsTYpEBr8ATfcXDu5O6s%2F1iBD9nKmOKP6fcGXY2&X-Amz-Signature=565f4faa8408107b586e34d2e7c672973c35a01b884b5623b043a321cf1e44a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQXBUCHR%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDSK9tv%2FJC23%2FwFen2MLgxd%2B2mVeGyFtrDR8b7IkkQWdwIhAOQ6NTegwCCJj3HL8MfS%2B59a4R%2Fl1giBgXKIgjgH1qOxKv8DCEAQABoMNjM3NDIzMTgzODA1IgzSLdAKPxJSwyKp%2B%2FYq3ANsH5Qp301dtPUKhSqS%2BYU5Yr3jDB0k1eHRoCb7RoWGW3mHiSjwUM%2FT%2BC5%2FrUpUw0%2BhEdoOImeRdx5pZgv8PEaZsz8xaKe%2B1P%2BAXH6FAkUNj9qkO9WgdJW9PpPAbi7X3D0Z%2FdHNrHJzNwTBoKKPBDRJ7OJHukQFp%2BWboOd3d%2FxEPjlTfkunhWt2gKqO5PcleunLdLCFbVslJeuEc3g4gI3OO7IpX0SnsmX5iKacMk8%2FWqePevf71piLyqq7svVuynplWfe26Z46OKxj6%2Fb7cRZegxtzroHfzlxAjRc3bAeRaZCx6bDaKEFo2rMI9Nf6Slu0nM8sNdOw9HS1molMciY47b0JjmsERtHemDuNTGQZNraldgO0r8xp%2BFyZh8U4doxtrcsaH2hZ3ARMBKX7AZw2nGFVT4wJ00HhJXn1aXnXqKahfGBQLXAlDFWM4TC%2BF5ZwB7FUBz2rLGKSkY4gUP03zsPRA6vl%2Bqgs%2FFaCYAcb4wqXxU2YR%2FRW0jKDeoW8PJnTidWaruc7y14gXBWCwNmDTkKAR1MZaHNHjTtklPfqlkXKnRc%2BBSMURSFWyV4Uuih6fc%2B7NN2tz0f54pZteaNTkNGIaXZQ9HxlhWm9yl%2FiVrg%2B1j2BzN0uxoAMqDCmt8HEBjqkAZi35553nIN2e%2Fq7z%2Fdvwft4NXU3Qg0JkYAvGYAavRPFUiVYO5vbZD6ZNqc0tEKD6gINJVzVAS5pjphi2UrWRad3vDRXC1BLkr9OLDTDkiDros4q5QaiHScjlBUmGAzWaGLNZeWvakVNNH4%2Fps8N8wOlHHZlWnAVManbiAtxggmXuh%2FZr9J4jVQpRQK%2BY9JCXNZulXymI762NggRBfsArNUBoyLm&X-Amz-Signature=336be24396b8c19e2fd1a1974d77dd131b95a9aa7e355a46e1cebe016c3d1949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXW5DZPX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdbmgVXN1P8CphSRaWvLl8WHd99Av9T7pQKaPWLV1ZOAiB5n7aqu6k48vyg%2Ff5%2BZzBtFvlYwyCtu2NOQeYpUXOSNir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMscrHhAMqW9bgBwzhKtwDQVpnwBhdfEyE4lZFroz2Loy1h38wtmUfGhBQyE7MQX%2FOLLkisJBeZNgDGifxxAz%2FyJM7petb84ACAUvn8wULpUtNZ272UWiuGkCjKq4bJKlpVZ1arviDcUVOa9h%2BidamNh3lgFZjNvILX0XOyNSVeW0T1xy9f5n9BztRFM3sS2%2BwlKWkDBml12qDCOFIXuaDXLBnBogWfRtS4PDo6jIqMQrIvfbwA4wMdoQjC%2FHMk4mUdtVw0aLr%2FXiC2Afjzp5AhmQpR0nDe1OueAC4rLNqIfFg%2Fc3LL9YS1vOAe0uYGFRa6qpgFRRpcz8etl03S6SGN6VY5eElluCaC7iZRLtL47BRo%2BzAlz35pLbTTLHP3THwdYdXy%2FRqZ6Fpy1xRbj1NzyXkNJOOH9CaQs%2Fl7Ez1mLrtc6QmwDSUkib8vv4JP%2FVd4iordvQc2P%2BvsuIz9OLRmg1THJIGcXxSBoMgTRQXQq6YF%2FDGkpvt%2BhkAeNohMFidJwrBCMQewVIl5FAHN7wmySDZG9sZ2gqAyl6CB4Xw0miLL3N4l5U3TZdMr6xMJSPxRMNYQlKdyuQf1xKakmMzjQNf8mfa3E3t%2F4dimdZ1QoEZKJHLKom6YBnEus33LIuydRsaMJ%2BnIXRQJ88wmrfBxAY6pgGu9j94ptFpgO3FM9jK4Nm%2FpJm9QDytChdFfor1GypgdbYiLWIGhTgZlbPINnUKkSn6hCgoXybgP0OD2HL%2F7Nle2o68sTakyLOoTXCa%2F4RTgEQSxiiLX6D%2BsteHb1RO3QIIzziVmKsrWvqqEBaU1OS%2BJ%2F8%2BlFoBcJNzkna8qbjFUbQDOWP5FpdbfsJI67iVRuILYv0hVgdnDNUroeCwNGHwpFM0LazG&X-Amz-Signature=d6ddec77c69caa911ad0393bf079ad0f20967e0de4c7daf42dba8e1c913277b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ETEDYIC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIB%2BY8HnObmmRdHreXvFje%2BtXWCjxutDECS0hOO0%2FCkh%2BAiAvA%2FQgr%2BWbrjBrUahYu%2F3t4CjS%2BT4o36YIIBLR0BILIir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMmYc61MkAWgjIcCNBKtwD8wap6rqVtfpTXN6w9caq0%2B7kacJdb7hCpyjdkDDSUt5Jgp9KRchRLUp%2FIsa87G4Xz%2FNIwBorGqoRBGmWf2w%2Fd0Go6HpPlogsCQxqWdjwpjvZTeBc5IBY4TaLWPePIRqSQLBKKSf1MbhjVEmmexTD8Ec4PbxsO1cWG99ltbrChbFBx%2B%2Fr9jfheJ%2BHHIxCZ6Uj1E7K7P2j7mMQqjCeFPOtTAXM73QQViqqoJNJANcpNJ0l8TFKSZ8Y8%2BxSGTNP2TYHybmZGGjeOgvdJTaN6gqeSiRu3ONKk0Fzc2LQx%2FoV2PKkmVHo0gh428yRz1sqFYaPD935GB78HRXIWDUqU1TPjqixv7SajSLnTua4ZrurlCKeDYiHzAiHOOJYYo92hXKdsxnAYx2u1hLG6v5G2D8FpEwgu00l0grJXcQHbQgPJ7D9tb3UrjPuWr2C60bUWbd%2FBLGZBvycAPRpa207IJ0orxI7%2BOcSz9rMrkPrs9dIxv7gVcsAKJ%2BvHiq8IXYM%2BjKw40wonp8KCcqvMtaNkVqY9xQdfyQVILipbirlubSyEx1I7QMZjVPQhdGdN%2BEPg4pRnaIVjE2LKN%2FFruWJPtSaVDe0Vzzc0EDhkfz%2FIGuByd73D1TRanrp%2FxPchEIwprjBxAY6pgEHtNR4gDkoHEDyWfvo5C%2FgtjVA3txS6oq3B7vhbftc779l4kVqnuYNzKY9e70732EimIsq6fqtPdN1Qil%2BOQtejIB4fP3FXP5h3S3a3OsEmQ7lWEM7cUp8Adla6svMvBArSyDk%2FtVv1HxzAN4%2Bhifof7d2JehSJZ72dRsgugU40IURvSWM%2F4zsUm5whpylIfGYQPG4poKbOKman5GGFXn4Bv8OPQ%2F%2B&X-Amz-Signature=3055539975164428f791eacaf42faa6ea9a9f52bc995907b86249f3e28279cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXW5DZPX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdbmgVXN1P8CphSRaWvLl8WHd99Av9T7pQKaPWLV1ZOAiB5n7aqu6k48vyg%2Ff5%2BZzBtFvlYwyCtu2NOQeYpUXOSNir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMscrHhAMqW9bgBwzhKtwDQVpnwBhdfEyE4lZFroz2Loy1h38wtmUfGhBQyE7MQX%2FOLLkisJBeZNgDGifxxAz%2FyJM7petb84ACAUvn8wULpUtNZ272UWiuGkCjKq4bJKlpVZ1arviDcUVOa9h%2BidamNh3lgFZjNvILX0XOyNSVeW0T1xy9f5n9BztRFM3sS2%2BwlKWkDBml12qDCOFIXuaDXLBnBogWfRtS4PDo6jIqMQrIvfbwA4wMdoQjC%2FHMk4mUdtVw0aLr%2FXiC2Afjzp5AhmQpR0nDe1OueAC4rLNqIfFg%2Fc3LL9YS1vOAe0uYGFRa6qpgFRRpcz8etl03S6SGN6VY5eElluCaC7iZRLtL47BRo%2BzAlz35pLbTTLHP3THwdYdXy%2FRqZ6Fpy1xRbj1NzyXkNJOOH9CaQs%2Fl7Ez1mLrtc6QmwDSUkib8vv4JP%2FVd4iordvQc2P%2BvsuIz9OLRmg1THJIGcXxSBoMgTRQXQq6YF%2FDGkpvt%2BhkAeNohMFidJwrBCMQewVIl5FAHN7wmySDZG9sZ2gqAyl6CB4Xw0miLL3N4l5U3TZdMr6xMJSPxRMNYQlKdyuQf1xKakmMzjQNf8mfa3E3t%2F4dimdZ1QoEZKJHLKom6YBnEus33LIuydRsaMJ%2BnIXRQJ88wmrfBxAY6pgGu9j94ptFpgO3FM9jK4Nm%2FpJm9QDytChdFfor1GypgdbYiLWIGhTgZlbPINnUKkSn6hCgoXybgP0OD2HL%2F7Nle2o68sTakyLOoTXCa%2F4RTgEQSxiiLX6D%2BsteHb1RO3QIIzziVmKsrWvqqEBaU1OS%2BJ%2F8%2BlFoBcJNzkna8qbjFUbQDOWP5FpdbfsJI67iVRuILYv0hVgdnDNUroeCwNGHwpFM0LazG&X-Amz-Signature=aff703bd4339f88946280e7fbdd6eb4044c5cdb4f020552d1b2b435abf44deed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666QNO246%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD38Xy9EFSxz2P4w%2F7t%2FOxqTGR%2FUO8%2BkLUEcMHOexso0gIgIsV%2F1W%2FWahk%2F%2B2HBJPMBJtQ%2BkphfIpmgf%2B56fvpSOTsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMDC2K0IEfb6izt7syrcA3aeHmI9%2Bl26Z2GvQ9BVS5oUVUm30M9qGQFPhAdSTvrr2cN0%2FW1lhhIimfQx1bMORihuOGIR9wAyV2X2UoSxHG%2FWvhg2UmKOkJBuRBGOoc0ptQm4rKR1nXtI660ito%2BDSaS%2BRDJJZo4QnKtyPi5RxCv8H2Cdy5NwdGZQuNoXr8T2F4Zljrzx7R6xFPe670rsBcQX4VgRKA09O9q34b1tvFTtZlRS37G2c7MsphYEJ%2FhA%2B5jroWjCVumwlzzALhWyHfzBNFJpxVvBvUbQgrLO5uzpCk9A3oDIo4CkkV5Tjyy6ANISIwUQNQFIPLKtQxUxgLu7DcgMuxQWy0r0MdGI64tZ5zD1pO0Ba0iaJPnH2jmyiWP6hyZaE9LJ7HuUeUNLfDTxweXtJCL%2F2ZRLr7D5Z1nGJO5wDr7bnjC8YEUOHrBltMEtS08ReTh%2BhtXcbfv%2FMsMvnLOviwamps6fS1pqF%2B2uWeTvnJkVSlMPjenkj7tbW%2Bg3S%2FKpaHdtBhxoxNWfImaN02PJzo3nQg78jKdOPv7mlzQzjHZoLjZHaK2oCRpxyHwNkX5FMiJunNMum0f9mUrOsqfEsxZGRKIEVlvtARjnpYXt6pgX2bJs8vOQ%2FvBB47QKpFOr8z38oxWYMMO2wcQGOqUBKF4xSgBJpCv%2BD88i8%2FuRDXa0m3eIQEsSBVWz%2Fi2jdLIYD1U86qt81in%2BQBqUvsb6GpOWEa6gk4CbQCyChegjOfG0joDtqHjDXCVy0KnWHPZH8Xs%2BKwZdwXvPrslgDHY14h2lEdFhEp7wHCa5RENQNN60tFCAJCMOFbtYlc8M2gW7AN4meV7ZlkktUNbhvjFp1rJDQNWMfvNI3BFMC4FpmqDB49ml&X-Amz-Signature=478f5d452e18dabed66ebaae4fa2e00462291c410339ff5256089ec46572e0a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXW5DZPX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdbmgVXN1P8CphSRaWvLl8WHd99Av9T7pQKaPWLV1ZOAiB5n7aqu6k48vyg%2Ff5%2BZzBtFvlYwyCtu2NOQeYpUXOSNir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMscrHhAMqW9bgBwzhKtwDQVpnwBhdfEyE4lZFroz2Loy1h38wtmUfGhBQyE7MQX%2FOLLkisJBeZNgDGifxxAz%2FyJM7petb84ACAUvn8wULpUtNZ272UWiuGkCjKq4bJKlpVZ1arviDcUVOa9h%2BidamNh3lgFZjNvILX0XOyNSVeW0T1xy9f5n9BztRFM3sS2%2BwlKWkDBml12qDCOFIXuaDXLBnBogWfRtS4PDo6jIqMQrIvfbwA4wMdoQjC%2FHMk4mUdtVw0aLr%2FXiC2Afjzp5AhmQpR0nDe1OueAC4rLNqIfFg%2Fc3LL9YS1vOAe0uYGFRa6qpgFRRpcz8etl03S6SGN6VY5eElluCaC7iZRLtL47BRo%2BzAlz35pLbTTLHP3THwdYdXy%2FRqZ6Fpy1xRbj1NzyXkNJOOH9CaQs%2Fl7Ez1mLrtc6QmwDSUkib8vv4JP%2FVd4iordvQc2P%2BvsuIz9OLRmg1THJIGcXxSBoMgTRQXQq6YF%2FDGkpvt%2BhkAeNohMFidJwrBCMQewVIl5FAHN7wmySDZG9sZ2gqAyl6CB4Xw0miLL3N4l5U3TZdMr6xMJSPxRMNYQlKdyuQf1xKakmMzjQNf8mfa3E3t%2F4dimdZ1QoEZKJHLKom6YBnEus33LIuydRsaMJ%2BnIXRQJ88wmrfBxAY6pgGu9j94ptFpgO3FM9jK4Nm%2FpJm9QDytChdFfor1GypgdbYiLWIGhTgZlbPINnUKkSn6hCgoXybgP0OD2HL%2F7Nle2o68sTakyLOoTXCa%2F4RTgEQSxiiLX6D%2BsteHb1RO3QIIzziVmKsrWvqqEBaU1OS%2BJ%2F8%2BlFoBcJNzkna8qbjFUbQDOWP5FpdbfsJI67iVRuILYv0hVgdnDNUroeCwNGHwpFM0LazG&X-Amz-Signature=4216bcfaaf6711d48a73ea115baad73d161f2500c6e26040f11f6a652d6b8d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZENEUD73%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDiHGYR96x0BTcfGvR8baMBDagwRA1PdcX4wOs8nKXzOgIgXuNLfKzAN5om1fO%2BQveCoMqcQPYgI4xMKQ9z%2FGFNcSEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOF%2F%2Fjp4Fpzszm8hqCrcAxsGPG6SPIM8gwwBZncRGwUslRe6GSrgWeTT1vwoEHbKf2sZP%2BbsflxIJlENutcCsc3LSJ7sV56F4Y5qGCiJw4c9tuPkvZsafnya%2BbXJrfzD7pHTz3hQZW4uAUxYNk4GRBTaN3fx2W1mcuZjxdo2GMNNWitO%2BFBEH421%2FkB9Grk3XJx%2BUuPtYAqSZmfHU42uHulZzYA0Z3g4xtvSleW%2Bw7EhUFM9%2F%2FkX%2Frqs3VFbhYlsC3zJjE33kjr9SfuM5hZ0p6N9p5AUSCVlc0Nx9MDzVLmWqubx2HUeNDbuhXrdppJK%2B0Oe3Kh8Mh3dcMVBi%2BddT%2BLNdH5ngzb%2F6Iekjfs0lhAC2EuLxib4IAXG8OfkwkFIPI26nRsraVCwKIestFASh5yyzrlSK%2BiArECgffPEpnqWQX8%2B2kRvDVKe22Mj%2FrOkalwi5QUCNcCES5LipsMCN1GcMY0%2Bnds6WjZerwktFc5ZRefbqGEHp%2FnTOQyTb5uWIA6jAdkaXQ4KMwoi9GHAor6v4K9PVPSzaBRcgcxln%2Bk8D%2FObrNjAHmYFhe1pAVlAa43OScDqJTQjhkHHjmVdewm02hay%2Bu0FWOurAeRLWch%2BQRg6Hc1cU2BzYu%2FVs6w8HQ4srjQB0u2e0yrkMMm2wcQGOqUBcmOeUqQUNFRaGYCevrx56r83GiYRGX8%2B%2FL0OOmwzECD2q1pi%2Fj9S%2FTguhZhgEhJ0lkfTqPTz7l9hn%2Bwah9CDFZCv0WEYMo9AP4UiWHN2zIzsIE5Liic5QMmgTWloTkHjInZhFRCAl%2BZPzyarB1UJkPYqrSyiSQTNJid67NdoIMuOy5zHspwfdTXrQlcwPbmw1LNkNRt0OPvX2hrx8sY48KNgnMVC&X-Amz-Signature=b53ea6f341378953b0ca5b77d5b5fc5da7a79d77a2d254f2b023f7fa96f16bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXW5DZPX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdbmgVXN1P8CphSRaWvLl8WHd99Av9T7pQKaPWLV1ZOAiB5n7aqu6k48vyg%2Ff5%2BZzBtFvlYwyCtu2NOQeYpUXOSNir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMscrHhAMqW9bgBwzhKtwDQVpnwBhdfEyE4lZFroz2Loy1h38wtmUfGhBQyE7MQX%2FOLLkisJBeZNgDGifxxAz%2FyJM7petb84ACAUvn8wULpUtNZ272UWiuGkCjKq4bJKlpVZ1arviDcUVOa9h%2BidamNh3lgFZjNvILX0XOyNSVeW0T1xy9f5n9BztRFM3sS2%2BwlKWkDBml12qDCOFIXuaDXLBnBogWfRtS4PDo6jIqMQrIvfbwA4wMdoQjC%2FHMk4mUdtVw0aLr%2FXiC2Afjzp5AhmQpR0nDe1OueAC4rLNqIfFg%2Fc3LL9YS1vOAe0uYGFRa6qpgFRRpcz8etl03S6SGN6VY5eElluCaC7iZRLtL47BRo%2BzAlz35pLbTTLHP3THwdYdXy%2FRqZ6Fpy1xRbj1NzyXkNJOOH9CaQs%2Fl7Ez1mLrtc6QmwDSUkib8vv4JP%2FVd4iordvQc2P%2BvsuIz9OLRmg1THJIGcXxSBoMgTRQXQq6YF%2FDGkpvt%2BhkAeNohMFidJwrBCMQewVIl5FAHN7wmySDZG9sZ2gqAyl6CB4Xw0miLL3N4l5U3TZdMr6xMJSPxRMNYQlKdyuQf1xKakmMzjQNf8mfa3E3t%2F4dimdZ1QoEZKJHLKom6YBnEus33LIuydRsaMJ%2BnIXRQJ88wmrfBxAY6pgGu9j94ptFpgO3FM9jK4Nm%2FpJm9QDytChdFfor1GypgdbYiLWIGhTgZlbPINnUKkSn6hCgoXybgP0OD2HL%2F7Nle2o68sTakyLOoTXCa%2F4RTgEQSxiiLX6D%2BsteHb1RO3QIIzziVmKsrWvqqEBaU1OS%2BJ%2F8%2BlFoBcJNzkna8qbjFUbQDOWP5FpdbfsJI67iVRuILYv0hVgdnDNUroeCwNGHwpFM0LazG&X-Amz-Signature=ec3b1bc8ea3cbc7f6d43e88301b0187bfffadf59746275b291be06c922bfadcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UGIVMYV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEOTgdygKTjZm9M1nHykHUlzR919I9tDn81kMuIQQn%2FfAiBysKzb2%2FPGyH1Pv2nZKBQ3I8O9%2BUzFWBQNWZ6wcaQVoCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMbeGGGBPSBf8%2FVuaBKtwDzg1%2Fy36MDH0GCTV%2FluWjMSJGuwd16K%2Bp8ZUL1OCWNAAonnVO2FE8LQwFBCkXgTBsg6T4QjNhuA7wehel7k8g3T5i526Kq3MdpWCxSLHv1Ma1UQ9UApHJ2n%2F07IhF1w6DzkY%2FViZmk4MSZMHH5KVvAVNEzVy%2F58uVtNhImJFbwpF%2FdodlgNODKkFK8vk6LQzgZtq0tg0iSs8rzNblt%2BjIe%2BHrav9pUZRJ2Z%2B6AACCcoB1E5zzvQXWx%2FsjAzhbFp%2B%2F2em9rG%2BcUsi1ClMIXQRPRVbD912HRcm1cIJ6Er5iGm6uMQGS%2FHAQdCPtvabm0gSDjKlLtMncnxaw8ZrBTxNQLRsTf1DhQH2llKFCgqWhuWLKxABVAX5rXkrCd%2BpCgtnletgnfe4BthP%2FwgSMiNJ2PY8TGwyMWzvgWcCMTIAOdFNuJF%2FMXxEh80qI3FWgDL%2FDlq%2BX3xONt3xfIH47TJZo%2BEFGjLafIbtnea444NZGAa%2FYsqqf1cihXq2G3gm8RvtdOh1KbbeMBlUagSL%2BixeBDyNveYilrR9nlICm%2F5%2BufOU4rG%2BO2EoV9D7c0J%2BMxbHWji3eivjwcFi5OhKEuewJhRrpGr5IFS39U8v1sserKM7ljfgZfE8eTYCPsucwo7fBxAY6pgFE59sXTnQWRw3dBTiN0qmmX0nqvFzFcepNwH%2BkricLWdGAEIAD0PX8vGSrkQVjO8b4DSncE0chnYev9wd0bSIBV5n3v1JANmMT7dCy8c6Q7sHzlb%2BM%2FTqyFPS0k2h4ZD8U%2FkRN5XpFH6glVl2p7t6QPxh7wKeqk0I9vTYKzl4QmVR65U23CQDgaTlaCxVy04siFkRUHBjl34gpIHhA7JlaHzqeYrxv&X-Amz-Signature=b397ab271cb8b06ced08f07f11fb38fdea92a9f6b0fb8bf32a92cc5b30b2391a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IHQS6HK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIGbetSRDla6AiYDjzJEBViWnmTguObOVU0NLnAjjPwGCAiBPjPOjRXZ0mLY0BQPBeScGSZ%2FhZPBt9XfB2NpYqzGKVSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMT%2Fo3YljyeEEIhSDEKtwD7r%2FGFJSiOevRTbi9rLp3Wwwea7UzfGFMJhw%2FST1ljVPxBfVXjmDbKnc5IjziWbiZzayIBidyRh0IF%2F8i6E%2BMPqCgWhTYuyzO3OTLqLMBftmgodlXlIJdUeq2x4wQj6Tp8OYvVkmtcPfJORn3sLJY0U8Yh%2B2d2aFDbdalefqdpO08MNu1gcaC7Dp1iMHV1aefa8CTlXLFBw6jITKnxw%2BlepUKtqHXpyx3J6csO0ToMgMk93GiF2g3fZKtnmloqOhRoUE4sjfL0NLET7sPVLPGqa8H3sA6qVRYXf%2BPsE2Gvxluns6h880Q8VPWXfrMRRV5iTVqWlSr4CMa6bMpUFIFmhL%2Fje1DQTknZdMzVV8iAyxxzqYqbp%2BqzmYQgeyHxV3fwfc0NWdqkitZQf7lpusXXFHO459sGmVp4h%2B75R64LN2b26FbADxLHEaXS5nLaw6YI%2FSFZD5q2QELTw8I3789DhHqY7vihfPS1cjzN6EHXuqPDq%2F50%2Bz0jsmjTpBnlriM9E1hY6anpUjjWVdPJLzxIL40SlRemeu4PA3kL3Gz7hDQ67YxfDJyg8j7jEwvQUSfV97kfeoz281%2BtCDPAiz%2F5Hfvm6IrjyiQWuleRsdjWRJYs69i0U4ibs9PirkwpbjBxAY6pgHG2YpZmb29EG3b6T6OsdXdDr%2FSnfQPVIdbmLDWn%2B0QIhRqTI%2BL9FPduTZClEhB9E5m6tLwkD2H1zsCbxupYIJ9GQRm9FJoDmcUzQ3laGY5z%2BSvLYuFyM7UEMeQEvXkofWoShc9pbCBH%2F4JagPqVzoBBr27yXP4NaoSYrfacANHBaC%2Bg8N%2BUd3sc83krJWFnG3JjEjQYoOEY2aWF4DwMoA%2FhAGiW604&X-Amz-Signature=5f2c7484ace24839353bed07e4a90819ce0776be7287c355eb857a95cd5581a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4RTDCLK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCY3twWPhJ8hCclwNvv7P4o8BwAZvBis7Msq1721OcnZgIhAOf9RF4Ed3ZlMFN8S30EM0b8ojSGczW%2FU3NGi4UGwc%2BIKv8DCEAQABoMNjM3NDIzMTgzODA1IgwdbMw6eS%2BoiwWLZCgq3AM5WmtLu5qw%2BQSIP6dXjJQsZNSLPgRbJr5VqZOCtXnXavEXb399XE5O%2BKpWGZJdrfaioOsjNEx0RxBekZNrOjew0g2TBN4p3vIckQmGFhDxjkIf97cTopzpnMOZ9A%2F5tyt07XYViFVOjmW6GoU%2FQLS47IZeo%2FGVvusWkh356ZoorsY5Y860hSpmDbmZQdfEXulWC3S%2BeM1ZcgsZgcBne73UsTkbbR161u9l99XzbtIbfPHwumbN%2F8neucMkEea6mKU1U6gDetxQbS9B4bKmn1SyGt5Qoc6mnxamhvBvDexJ23kQT7TyGSL6%2F8g13BMMqABF%2BXLQX5VjdD2ODV%2B45kSRp4ZOijT5v1HeK0d8ON03Z1D7BOAnV1C2nCr7dCovyg7YimHEYmm3Zr99bRf9pRHZqNkdVgnF85wSA5CEPZ0ihxrIws6PYnIW6T08MPRdNryjmgiOMuhGtD7Pssgj1Twu8OBwd4vBi7lwHWnCWwUF5bKOppLZyaHHn2%2BTP4huMgtwzxTq5ECMKBPLqqCgpZbUW5LxRPD0xmI7ta%2BvVrxAuyCeWRGgQrkmHapkAiUtyY5%2FggaLZYyqs9BnqifNecVtYCJCBHRl%2B37gHmWAhK5zv9IzmoOM0s1xOGbRjjCwtsHEBjqkATGvZBFve%2Br7UNUa0KiRMPupYpMTxw4OIbNjoOo3vDVdPROcJH6IYKe%2BE8LebGYOdnjcSNv1riEZzNadsts16KFUalYfEBRE2s3iXfHiMsTuXzkvCp4gNjupwHzKuKCXgv6IcjaqH%2FrIBV0uokNilFhENfW%2FzQUfC0a2arR%2FOQHOpVvf3BMuCMCfRg810eiFaur757aOrPlCR8sAd3eyCujJXe1u&X-Amz-Signature=6e8f22b1caf737c25fa762c1837cd3920237425d983f00c578e6b1dfbf45e43d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAC2LZOG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDQjcn6L6LTdGDcz4PhK35WYYsBD7BAlKW7MP9OE0IxowIgFF37BfmS4kZtgYWZNoO8pMG6J0O46PLTOhZiJo3bdgcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDG27oum7EKA9J%2BoDZSrcAyxCEbwRK8%2FdTppKTBox5C2hVOAOdzNlpoaNCLPGOtzAN55Rd91Z60OIVL6RC8pEsN89xxB66vYnB6H55QAFbPHSVkNTxivxvsZlDbadtJWiGTI0RiUt7zK4TkktVJzO7HD2rae7LeOA6by49%2BIyuI4FZfbHMoPkydqiHvKhOO0jk9Ye3MtYVR5V6pAGW94fFoE2nIzOeFbFpk40h8RXSB9BekgGhlfZM7J7vU%2FhH3pMGatJKjvn9E5C76S1J05oYKlddCmurBgXZOIB72BXj1M1Gu3yo%2F1EKDyVij71MbdG2CSVcUVoL9sW830rjJ4RKvqV7UbYpYO4dXuOF8uC%2FpA2ta1OePWEoDgiLm9cprgS7eNpRt67X1%2BX6PjsrhzNZRtLTQTOBsoxmtJ88dRXsFMePtKFOySAZFutGWG5ZVKlRXHRDn8JujxrsqWijlJ8rMRi37fkDZqP%2Ba6dWI1RgoyuNa09wKzG5uJEMJijksaEA4c9ybEBsAhMZp6oKmcXwz0frN%2BXkqNKXQC8vvq08ei1QIF7Rpy1CI%2FKvYO9hibFAeTTn%2BMtuO5Fwlffd08T5CKL8Lw2BaKymp9PVfsbQm7JPQjYAQK9CrtT0Kvyuhz6Y3NR2x5aR65uxW%2FVMKS4wcQGOqUBD9G1loYCcd9clKrlQnphK2YRHxZS4wkNmF0XjhtGiL8uD90hD%2Bm4G6FRglWIga1teVpqgRobO5TGrKxoagi3nqvjDR0YjG92APdgiWzPCNZC5VLvLrx2hukelCurRLRIG0SIyahQgKZjlj21yJS7E9wO3tCTxQSWDSq4EBm6Q7StTfGEi3NjXNjEmoNUImrrJQwTeMFvEJv9iMzkaS7cL%2F6%2FJZ%2FD&X-Amz-Signature=8796ecfae4dcef960754932e92577482a9ed493c9b3ac00bee04239fceb1d941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU2NH34C%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD1Kb85Y5Hk8pwbj14G7S7l6JdbOCQH%2BI5SONTkYGbu0QIhAIsdu0MR2xzDZ5IR%2BsHCZ1nf96Se2XVjhsFs8uJcgTfhKv8DCEAQABoMNjM3NDIzMTgzODA1IgxneOX8Vom6yZUbC9sq3AO3FaDDIElLzno2OVF5bOIjWM8pxqo1Ul4Cjd9aqg%2BQ4fB8frt1RDsSkEh41Q%2FMDyVeHGKXMLFmPmylAq0tupoSZLjoGDB17X7plzmESkxmFJAAvUenBwzlAzA7RBXN0sikutGKc60xSHv5eJEqg6dNCdCtGIrzLqEeqOUOXTYtFzvxf7tDvi5QMiXytYC%2BrKn2MFXJbNOjTyW2keEqTXXnS8Lv2Ad%2BQ8MuUxFMpd5sNuNaSIT13UT3fR9L1hG54qiUjNLEgw26JJU61s4nqUR6aMyBahwW71MUbtHcYaA99uFQxIIFnG6%2FVkWB4s%2FfsyCBSIyXJhuJYdYV1x%2FOBE2u4WgmTO299gTnPLfwHXb78rnNVnwp%2FsgrFfUt1D1GD93rcTiPhVMLqVWUHIpRYqVdcTK65vLufJJ02X58phO6%2FK1iarBU6HXtz7VJGlWVfikkJqm1ytB9gWDiAFS0f26dNq8nKe5gsBibELnA%2BIFnvUgSJQBxCvlUdFy%2BncqdCoClQICjhgVxX4eqOAeRvDNcGIdrUtdu%2F5YSgEvfJqc5Fw%2BdznCO1OeztzXCxVjAoVkmOd1daKTgT3lqyiOErtBnHAIEu1QTE85BXLPpZm8%2BgumLyLJp%2BncSwtno5TDHtsHEBjqkAVlFiqM5zET41pCEIVO4IaSuR8v3fkom1vS2M3Ej1f5GOciqk%2BMe9qfwPx%2Fi9u6f6uLhWj6RIXDwIXMqaFSU1Pi2ZZa9KWVPw3MMynGDOx%2BdHMpc3YMDD1xgiBG%2FKAujyLmEoogb4%2FHb7YYBaRI7nsPcFj1kRDynlBBMNfcTZrb2ntXiPIwuJeND0x%2FjiYGfrgNNbFMVCyKNI1vFw1evNL8LsUFM&X-Amz-Signature=1c03c1e24301934ea162a24239105946e840ded56e752657e678e872dbcc3d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXW5DZPX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdbmgVXN1P8CphSRaWvLl8WHd99Av9T7pQKaPWLV1ZOAiB5n7aqu6k48vyg%2Ff5%2BZzBtFvlYwyCtu2NOQeYpUXOSNir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMscrHhAMqW9bgBwzhKtwDQVpnwBhdfEyE4lZFroz2Loy1h38wtmUfGhBQyE7MQX%2FOLLkisJBeZNgDGifxxAz%2FyJM7petb84ACAUvn8wULpUtNZ272UWiuGkCjKq4bJKlpVZ1arviDcUVOa9h%2BidamNh3lgFZjNvILX0XOyNSVeW0T1xy9f5n9BztRFM3sS2%2BwlKWkDBml12qDCOFIXuaDXLBnBogWfRtS4PDo6jIqMQrIvfbwA4wMdoQjC%2FHMk4mUdtVw0aLr%2FXiC2Afjzp5AhmQpR0nDe1OueAC4rLNqIfFg%2Fc3LL9YS1vOAe0uYGFRa6qpgFRRpcz8etl03S6SGN6VY5eElluCaC7iZRLtL47BRo%2BzAlz35pLbTTLHP3THwdYdXy%2FRqZ6Fpy1xRbj1NzyXkNJOOH9CaQs%2Fl7Ez1mLrtc6QmwDSUkib8vv4JP%2FVd4iordvQc2P%2BvsuIz9OLRmg1THJIGcXxSBoMgTRQXQq6YF%2FDGkpvt%2BhkAeNohMFidJwrBCMQewVIl5FAHN7wmySDZG9sZ2gqAyl6CB4Xw0miLL3N4l5U3TZdMr6xMJSPxRMNYQlKdyuQf1xKakmMzjQNf8mfa3E3t%2F4dimdZ1QoEZKJHLKom6YBnEus33LIuydRsaMJ%2BnIXRQJ88wmrfBxAY6pgGu9j94ptFpgO3FM9jK4Nm%2FpJm9QDytChdFfor1GypgdbYiLWIGhTgZlbPINnUKkSn6hCgoXybgP0OD2HL%2F7Nle2o68sTakyLOoTXCa%2F4RTgEQSxiiLX6D%2BsteHb1RO3QIIzziVmKsrWvqqEBaU1OS%2BJ%2F8%2BlFoBcJNzkna8qbjFUbQDOWP5FpdbfsJI67iVRuILYv0hVgdnDNUroeCwNGHwpFM0LazG&X-Amz-Signature=e6d184607b433fb816891aaa1a91c699f4a87a38d9a09b40938e699df5337632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXW5DZPX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdbmgVXN1P8CphSRaWvLl8WHd99Av9T7pQKaPWLV1ZOAiB5n7aqu6k48vyg%2Ff5%2BZzBtFvlYwyCtu2NOQeYpUXOSNir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMscrHhAMqW9bgBwzhKtwDQVpnwBhdfEyE4lZFroz2Loy1h38wtmUfGhBQyE7MQX%2FOLLkisJBeZNgDGifxxAz%2FyJM7petb84ACAUvn8wULpUtNZ272UWiuGkCjKq4bJKlpVZ1arviDcUVOa9h%2BidamNh3lgFZjNvILX0XOyNSVeW0T1xy9f5n9BztRFM3sS2%2BwlKWkDBml12qDCOFIXuaDXLBnBogWfRtS4PDo6jIqMQrIvfbwA4wMdoQjC%2FHMk4mUdtVw0aLr%2FXiC2Afjzp5AhmQpR0nDe1OueAC4rLNqIfFg%2Fc3LL9YS1vOAe0uYGFRa6qpgFRRpcz8etl03S6SGN6VY5eElluCaC7iZRLtL47BRo%2BzAlz35pLbTTLHP3THwdYdXy%2FRqZ6Fpy1xRbj1NzyXkNJOOH9CaQs%2Fl7Ez1mLrtc6QmwDSUkib8vv4JP%2FVd4iordvQc2P%2BvsuIz9OLRmg1THJIGcXxSBoMgTRQXQq6YF%2FDGkpvt%2BhkAeNohMFidJwrBCMQewVIl5FAHN7wmySDZG9sZ2gqAyl6CB4Xw0miLL3N4l5U3TZdMr6xMJSPxRMNYQlKdyuQf1xKakmMzjQNf8mfa3E3t%2F4dimdZ1QoEZKJHLKom6YBnEus33LIuydRsaMJ%2BnIXRQJ88wmrfBxAY6pgGu9j94ptFpgO3FM9jK4Nm%2FpJm9QDytChdFfor1GypgdbYiLWIGhTgZlbPINnUKkSn6hCgoXybgP0OD2HL%2F7Nle2o68sTakyLOoTXCa%2F4RTgEQSxiiLX6D%2BsteHb1RO3QIIzziVmKsrWvqqEBaU1OS%2BJ%2F8%2BlFoBcJNzkna8qbjFUbQDOWP5FpdbfsJI67iVRuILYv0hVgdnDNUroeCwNGHwpFM0LazG&X-Amz-Signature=2e1a99cb5a0c85a9590349afcec6f850433afba5b1ff994ce46599ec64a6000c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3MT4FC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIAr6hFNyP2DWkFGN10xWiR1XR6ZH0FqmdSRpoL5%2FXLQvAiB%2F%2F5eAC8HVogEvZ%2BdJ408kyXzEd5dOA5GG17xewjPjaSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMuv8GdIIe71xQmbHvKtwDzt7jg2giVB%2B9sQDFsPTUXlVph9iNfQW0LiR9gu8LrSoITT%2BN%2FKGTstYOhJDvcABJLWtX4RnWtNTTnbOpQueuJ7OeaxYUt%2BqiyS4j6AmHAGiTgE5jM9aqP3HAqerfckl5uj31oTkDMxVW78XKBPFPQQxm9%2FpaaxlOeQfP%2F1ei7NXcvXi66RYB54lb8gFPufWJLhVJ0uRSUfJ%2BWW0XPqCvm7UI2W4qDxuOjo3Ie3wFue6dIVZGRmHk0k1vj0RMb8puMpfE%2FncwyV5QZvAI%2F7LDjguPMOkewjm9jBmGWNsy5uOqDIvTfAqhv8iRYxRpqJREOJhxmRdjyLW9%2Blkqlv6yl8tkWuP6jwzBkCxEAtsx75FNFdnN%2BFMEvrkfIB2dDebE0AYUtum7vJ8mDJzS2LDybn89i4QtqzTeADTa07a24zRdlKuVitorgVJ2iQMjfwWqHk7tS84YxbsN3modHVTlzLdNVcpD1lNqyb7%2BPkTxN%2FUSi5UjwqDJWci5VJwCn5aoR4TScGqa4spyn1kTiK3TNQfD%2B2W0ZrftpyU0%2FSC%2F2ze5sHPAFJz98tqbAyyzgtHGBo7SBI5CVTtbGjt6mH%2FpG9amD0CnlatcbBp5iZ1O97SNGuyTUVLd1NcPN1kwwLfBxAY6pgEREXUeSbo5kifnYQqxCP%2BfD%2FKriRIBB3kpt7zxxQQuccb62T9BotSW3c838RtYzdINAI%2BPM%2ByzY77E4YijXxCKuHK36lyOxzdffdysEqFrC5P%2BIGuWFJTs2uQpOTXCaraZ1g1R55MG5R7DBdy1RgeNyiGbNNDEyDJEERdOs%2B55%2BiH%2FlhJCzee8HOyMrbUbFc6ubifgXfT8MK9dLzs0edOBun1oiwCH&X-Amz-Signature=b4b76d341d57619b644749b4804c78cd3bea303dae14fb479083e1747db3e629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3MT4FC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIAr6hFNyP2DWkFGN10xWiR1XR6ZH0FqmdSRpoL5%2FXLQvAiB%2F%2F5eAC8HVogEvZ%2BdJ408kyXzEd5dOA5GG17xewjPjaSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMuv8GdIIe71xQmbHvKtwDzt7jg2giVB%2B9sQDFsPTUXlVph9iNfQW0LiR9gu8LrSoITT%2BN%2FKGTstYOhJDvcABJLWtX4RnWtNTTnbOpQueuJ7OeaxYUt%2BqiyS4j6AmHAGiTgE5jM9aqP3HAqerfckl5uj31oTkDMxVW78XKBPFPQQxm9%2FpaaxlOeQfP%2F1ei7NXcvXi66RYB54lb8gFPufWJLhVJ0uRSUfJ%2BWW0XPqCvm7UI2W4qDxuOjo3Ie3wFue6dIVZGRmHk0k1vj0RMb8puMpfE%2FncwyV5QZvAI%2F7LDjguPMOkewjm9jBmGWNsy5uOqDIvTfAqhv8iRYxRpqJREOJhxmRdjyLW9%2Blkqlv6yl8tkWuP6jwzBkCxEAtsx75FNFdnN%2BFMEvrkfIB2dDebE0AYUtum7vJ8mDJzS2LDybn89i4QtqzTeADTa07a24zRdlKuVitorgVJ2iQMjfwWqHk7tS84YxbsN3modHVTlzLdNVcpD1lNqyb7%2BPkTxN%2FUSi5UjwqDJWci5VJwCn5aoR4TScGqa4spyn1kTiK3TNQfD%2B2W0ZrftpyU0%2FSC%2F2ze5sHPAFJz98tqbAyyzgtHGBo7SBI5CVTtbGjt6mH%2FpG9amD0CnlatcbBp5iZ1O97SNGuyTUVLd1NcPN1kwwLfBxAY6pgEREXUeSbo5kifnYQqxCP%2BfD%2FKriRIBB3kpt7zxxQQuccb62T9BotSW3c838RtYzdINAI%2BPM%2ByzY77E4YijXxCKuHK36lyOxzdffdysEqFrC5P%2BIGuWFJTs2uQpOTXCaraZ1g1R55MG5R7DBdy1RgeNyiGbNNDEyDJEERdOs%2B55%2BiH%2FlhJCzee8HOyMrbUbFc6ubifgXfT8MK9dLzs0edOBun1oiwCH&X-Amz-Signature=affebd952692686ccf899c641d0bf94aadbf62126d9044ec4a9597b55f3c05a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3MT4FC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIAr6hFNyP2DWkFGN10xWiR1XR6ZH0FqmdSRpoL5%2FXLQvAiB%2F%2F5eAC8HVogEvZ%2BdJ408kyXzEd5dOA5GG17xewjPjaSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMuv8GdIIe71xQmbHvKtwDzt7jg2giVB%2B9sQDFsPTUXlVph9iNfQW0LiR9gu8LrSoITT%2BN%2FKGTstYOhJDvcABJLWtX4RnWtNTTnbOpQueuJ7OeaxYUt%2BqiyS4j6AmHAGiTgE5jM9aqP3HAqerfckl5uj31oTkDMxVW78XKBPFPQQxm9%2FpaaxlOeQfP%2F1ei7NXcvXi66RYB54lb8gFPufWJLhVJ0uRSUfJ%2BWW0XPqCvm7UI2W4qDxuOjo3Ie3wFue6dIVZGRmHk0k1vj0RMb8puMpfE%2FncwyV5QZvAI%2F7LDjguPMOkewjm9jBmGWNsy5uOqDIvTfAqhv8iRYxRpqJREOJhxmRdjyLW9%2Blkqlv6yl8tkWuP6jwzBkCxEAtsx75FNFdnN%2BFMEvrkfIB2dDebE0AYUtum7vJ8mDJzS2LDybn89i4QtqzTeADTa07a24zRdlKuVitorgVJ2iQMjfwWqHk7tS84YxbsN3modHVTlzLdNVcpD1lNqyb7%2BPkTxN%2FUSi5UjwqDJWci5VJwCn5aoR4TScGqa4spyn1kTiK3TNQfD%2B2W0ZrftpyU0%2FSC%2F2ze5sHPAFJz98tqbAyyzgtHGBo7SBI5CVTtbGjt6mH%2FpG9amD0CnlatcbBp5iZ1O97SNGuyTUVLd1NcPN1kwwLfBxAY6pgEREXUeSbo5kifnYQqxCP%2BfD%2FKriRIBB3kpt7zxxQQuccb62T9BotSW3c838RtYzdINAI%2BPM%2ByzY77E4YijXxCKuHK36lyOxzdffdysEqFrC5P%2BIGuWFJTs2uQpOTXCaraZ1g1R55MG5R7DBdy1RgeNyiGbNNDEyDJEERdOs%2B55%2BiH%2FlhJCzee8HOyMrbUbFc6ubifgXfT8MK9dLzs0edOBun1oiwCH&X-Amz-Signature=12e746af02a7b634149327f9fb23bafa15cd23bb3a761167857fe88a00b72c39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3MT4FC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIAr6hFNyP2DWkFGN10xWiR1XR6ZH0FqmdSRpoL5%2FXLQvAiB%2F%2F5eAC8HVogEvZ%2BdJ408kyXzEd5dOA5GG17xewjPjaSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMuv8GdIIe71xQmbHvKtwDzt7jg2giVB%2B9sQDFsPTUXlVph9iNfQW0LiR9gu8LrSoITT%2BN%2FKGTstYOhJDvcABJLWtX4RnWtNTTnbOpQueuJ7OeaxYUt%2BqiyS4j6AmHAGiTgE5jM9aqP3HAqerfckl5uj31oTkDMxVW78XKBPFPQQxm9%2FpaaxlOeQfP%2F1ei7NXcvXi66RYB54lb8gFPufWJLhVJ0uRSUfJ%2BWW0XPqCvm7UI2W4qDxuOjo3Ie3wFue6dIVZGRmHk0k1vj0RMb8puMpfE%2FncwyV5QZvAI%2F7LDjguPMOkewjm9jBmGWNsy5uOqDIvTfAqhv8iRYxRpqJREOJhxmRdjyLW9%2Blkqlv6yl8tkWuP6jwzBkCxEAtsx75FNFdnN%2BFMEvrkfIB2dDebE0AYUtum7vJ8mDJzS2LDybn89i4QtqzTeADTa07a24zRdlKuVitorgVJ2iQMjfwWqHk7tS84YxbsN3modHVTlzLdNVcpD1lNqyb7%2BPkTxN%2FUSi5UjwqDJWci5VJwCn5aoR4TScGqa4spyn1kTiK3TNQfD%2B2W0ZrftpyU0%2FSC%2F2ze5sHPAFJz98tqbAyyzgtHGBo7SBI5CVTtbGjt6mH%2FpG9amD0CnlatcbBp5iZ1O97SNGuyTUVLd1NcPN1kwwLfBxAY6pgEREXUeSbo5kifnYQqxCP%2BfD%2FKriRIBB3kpt7zxxQQuccb62T9BotSW3c838RtYzdINAI%2BPM%2ByzY77E4YijXxCKuHK36lyOxzdffdysEqFrC5P%2BIGuWFJTs2uQpOTXCaraZ1g1R55MG5R7DBdy1RgeNyiGbNNDEyDJEERdOs%2B55%2BiH%2FlhJCzee8HOyMrbUbFc6ubifgXfT8MK9dLzs0edOBun1oiwCH&X-Amz-Signature=cac6fbdfad019c0d8b97b70ad887dfca5bd37fac3c809477ae45124d4921c3a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3MT4FC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIAr6hFNyP2DWkFGN10xWiR1XR6ZH0FqmdSRpoL5%2FXLQvAiB%2F%2F5eAC8HVogEvZ%2BdJ408kyXzEd5dOA5GG17xewjPjaSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMuv8GdIIe71xQmbHvKtwDzt7jg2giVB%2B9sQDFsPTUXlVph9iNfQW0LiR9gu8LrSoITT%2BN%2FKGTstYOhJDvcABJLWtX4RnWtNTTnbOpQueuJ7OeaxYUt%2BqiyS4j6AmHAGiTgE5jM9aqP3HAqerfckl5uj31oTkDMxVW78XKBPFPQQxm9%2FpaaxlOeQfP%2F1ei7NXcvXi66RYB54lb8gFPufWJLhVJ0uRSUfJ%2BWW0XPqCvm7UI2W4qDxuOjo3Ie3wFue6dIVZGRmHk0k1vj0RMb8puMpfE%2FncwyV5QZvAI%2F7LDjguPMOkewjm9jBmGWNsy5uOqDIvTfAqhv8iRYxRpqJREOJhxmRdjyLW9%2Blkqlv6yl8tkWuP6jwzBkCxEAtsx75FNFdnN%2BFMEvrkfIB2dDebE0AYUtum7vJ8mDJzS2LDybn89i4QtqzTeADTa07a24zRdlKuVitorgVJ2iQMjfwWqHk7tS84YxbsN3modHVTlzLdNVcpD1lNqyb7%2BPkTxN%2FUSi5UjwqDJWci5VJwCn5aoR4TScGqa4spyn1kTiK3TNQfD%2B2W0ZrftpyU0%2FSC%2F2ze5sHPAFJz98tqbAyyzgtHGBo7SBI5CVTtbGjt6mH%2FpG9amD0CnlatcbBp5iZ1O97SNGuyTUVLd1NcPN1kwwLfBxAY6pgEREXUeSbo5kifnYQqxCP%2BfD%2FKriRIBB3kpt7zxxQQuccb62T9BotSW3c838RtYzdINAI%2BPM%2ByzY77E4YijXxCKuHK36lyOxzdffdysEqFrC5P%2BIGuWFJTs2uQpOTXCaraZ1g1R55MG5R7DBdy1RgeNyiGbNNDEyDJEERdOs%2B55%2BiH%2FlhJCzee8HOyMrbUbFc6ubifgXfT8MK9dLzs0edOBun1oiwCH&X-Amz-Signature=9a3589803234519a5835848dce085a02f76e7fa2ce4395fe327e4a090a9610de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3MT4FC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIAr6hFNyP2DWkFGN10xWiR1XR6ZH0FqmdSRpoL5%2FXLQvAiB%2F%2F5eAC8HVogEvZ%2BdJ408kyXzEd5dOA5GG17xewjPjaSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMuv8GdIIe71xQmbHvKtwDzt7jg2giVB%2B9sQDFsPTUXlVph9iNfQW0LiR9gu8LrSoITT%2BN%2FKGTstYOhJDvcABJLWtX4RnWtNTTnbOpQueuJ7OeaxYUt%2BqiyS4j6AmHAGiTgE5jM9aqP3HAqerfckl5uj31oTkDMxVW78XKBPFPQQxm9%2FpaaxlOeQfP%2F1ei7NXcvXi66RYB54lb8gFPufWJLhVJ0uRSUfJ%2BWW0XPqCvm7UI2W4qDxuOjo3Ie3wFue6dIVZGRmHk0k1vj0RMb8puMpfE%2FncwyV5QZvAI%2F7LDjguPMOkewjm9jBmGWNsy5uOqDIvTfAqhv8iRYxRpqJREOJhxmRdjyLW9%2Blkqlv6yl8tkWuP6jwzBkCxEAtsx75FNFdnN%2BFMEvrkfIB2dDebE0AYUtum7vJ8mDJzS2LDybn89i4QtqzTeADTa07a24zRdlKuVitorgVJ2iQMjfwWqHk7tS84YxbsN3modHVTlzLdNVcpD1lNqyb7%2BPkTxN%2FUSi5UjwqDJWci5VJwCn5aoR4TScGqa4spyn1kTiK3TNQfD%2B2W0ZrftpyU0%2FSC%2F2ze5sHPAFJz98tqbAyyzgtHGBo7SBI5CVTtbGjt6mH%2FpG9amD0CnlatcbBp5iZ1O97SNGuyTUVLd1NcPN1kwwLfBxAY6pgEREXUeSbo5kifnYQqxCP%2BfD%2FKriRIBB3kpt7zxxQQuccb62T9BotSW3c838RtYzdINAI%2BPM%2ByzY77E4YijXxCKuHK36lyOxzdffdysEqFrC5P%2BIGuWFJTs2uQpOTXCaraZ1g1R55MG5R7DBdy1RgeNyiGbNNDEyDJEERdOs%2B55%2BiH%2FlhJCzee8HOyMrbUbFc6ubifgXfT8MK9dLzs0edOBun1oiwCH&X-Amz-Signature=bd6cda26e3ca16e1d13677b6df014c9a27e2a57ec54ba9d88fc21619fc37e1cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3MT4FC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIAr6hFNyP2DWkFGN10xWiR1XR6ZH0FqmdSRpoL5%2FXLQvAiB%2F%2F5eAC8HVogEvZ%2BdJ408kyXzEd5dOA5GG17xewjPjaSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMuv8GdIIe71xQmbHvKtwDzt7jg2giVB%2B9sQDFsPTUXlVph9iNfQW0LiR9gu8LrSoITT%2BN%2FKGTstYOhJDvcABJLWtX4RnWtNTTnbOpQueuJ7OeaxYUt%2BqiyS4j6AmHAGiTgE5jM9aqP3HAqerfckl5uj31oTkDMxVW78XKBPFPQQxm9%2FpaaxlOeQfP%2F1ei7NXcvXi66RYB54lb8gFPufWJLhVJ0uRSUfJ%2BWW0XPqCvm7UI2W4qDxuOjo3Ie3wFue6dIVZGRmHk0k1vj0RMb8puMpfE%2FncwyV5QZvAI%2F7LDjguPMOkewjm9jBmGWNsy5uOqDIvTfAqhv8iRYxRpqJREOJhxmRdjyLW9%2Blkqlv6yl8tkWuP6jwzBkCxEAtsx75FNFdnN%2BFMEvrkfIB2dDebE0AYUtum7vJ8mDJzS2LDybn89i4QtqzTeADTa07a24zRdlKuVitorgVJ2iQMjfwWqHk7tS84YxbsN3modHVTlzLdNVcpD1lNqyb7%2BPkTxN%2FUSi5UjwqDJWci5VJwCn5aoR4TScGqa4spyn1kTiK3TNQfD%2B2W0ZrftpyU0%2FSC%2F2ze5sHPAFJz98tqbAyyzgtHGBo7SBI5CVTtbGjt6mH%2FpG9amD0CnlatcbBp5iZ1O97SNGuyTUVLd1NcPN1kwwLfBxAY6pgEREXUeSbo5kifnYQqxCP%2BfD%2FKriRIBB3kpt7zxxQQuccb62T9BotSW3c838RtYzdINAI%2BPM%2ByzY77E4YijXxCKuHK36lyOxzdffdysEqFrC5P%2BIGuWFJTs2uQpOTXCaraZ1g1R55MG5R7DBdy1RgeNyiGbNNDEyDJEERdOs%2B55%2BiH%2FlhJCzee8HOyMrbUbFc6ubifgXfT8MK9dLzs0edOBun1oiwCH&X-Amz-Signature=a0c2056200eef0b52820dfc03baad1d0699104a25fc545226e1e6611ab40f409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3MT4FC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIAr6hFNyP2DWkFGN10xWiR1XR6ZH0FqmdSRpoL5%2FXLQvAiB%2F%2F5eAC8HVogEvZ%2BdJ408kyXzEd5dOA5GG17xewjPjaSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMuv8GdIIe71xQmbHvKtwDzt7jg2giVB%2B9sQDFsPTUXlVph9iNfQW0LiR9gu8LrSoITT%2BN%2FKGTstYOhJDvcABJLWtX4RnWtNTTnbOpQueuJ7OeaxYUt%2BqiyS4j6AmHAGiTgE5jM9aqP3HAqerfckl5uj31oTkDMxVW78XKBPFPQQxm9%2FpaaxlOeQfP%2F1ei7NXcvXi66RYB54lb8gFPufWJLhVJ0uRSUfJ%2BWW0XPqCvm7UI2W4qDxuOjo3Ie3wFue6dIVZGRmHk0k1vj0RMb8puMpfE%2FncwyV5QZvAI%2F7LDjguPMOkewjm9jBmGWNsy5uOqDIvTfAqhv8iRYxRpqJREOJhxmRdjyLW9%2Blkqlv6yl8tkWuP6jwzBkCxEAtsx75FNFdnN%2BFMEvrkfIB2dDebE0AYUtum7vJ8mDJzS2LDybn89i4QtqzTeADTa07a24zRdlKuVitorgVJ2iQMjfwWqHk7tS84YxbsN3modHVTlzLdNVcpD1lNqyb7%2BPkTxN%2FUSi5UjwqDJWci5VJwCn5aoR4TScGqa4spyn1kTiK3TNQfD%2B2W0ZrftpyU0%2FSC%2F2ze5sHPAFJz98tqbAyyzgtHGBo7SBI5CVTtbGjt6mH%2FpG9amD0CnlatcbBp5iZ1O97SNGuyTUVLd1NcPN1kwwLfBxAY6pgEREXUeSbo5kifnYQqxCP%2BfD%2FKriRIBB3kpt7zxxQQuccb62T9BotSW3c838RtYzdINAI%2BPM%2ByzY77E4YijXxCKuHK36lyOxzdffdysEqFrC5P%2BIGuWFJTs2uQpOTXCaraZ1g1R55MG5R7DBdy1RgeNyiGbNNDEyDJEERdOs%2B55%2BiH%2FlhJCzee8HOyMrbUbFc6ubifgXfT8MK9dLzs0edOBun1oiwCH&X-Amz-Signature=d0d323eaacf3b00422df182d06d6b7fca7539800f8ea62cca9147900b2c1b4ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3MT4FC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIAr6hFNyP2DWkFGN10xWiR1XR6ZH0FqmdSRpoL5%2FXLQvAiB%2F%2F5eAC8HVogEvZ%2BdJ408kyXzEd5dOA5GG17xewjPjaSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMuv8GdIIe71xQmbHvKtwDzt7jg2giVB%2B9sQDFsPTUXlVph9iNfQW0LiR9gu8LrSoITT%2BN%2FKGTstYOhJDvcABJLWtX4RnWtNTTnbOpQueuJ7OeaxYUt%2BqiyS4j6AmHAGiTgE5jM9aqP3HAqerfckl5uj31oTkDMxVW78XKBPFPQQxm9%2FpaaxlOeQfP%2F1ei7NXcvXi66RYB54lb8gFPufWJLhVJ0uRSUfJ%2BWW0XPqCvm7UI2W4qDxuOjo3Ie3wFue6dIVZGRmHk0k1vj0RMb8puMpfE%2FncwyV5QZvAI%2F7LDjguPMOkewjm9jBmGWNsy5uOqDIvTfAqhv8iRYxRpqJREOJhxmRdjyLW9%2Blkqlv6yl8tkWuP6jwzBkCxEAtsx75FNFdnN%2BFMEvrkfIB2dDebE0AYUtum7vJ8mDJzS2LDybn89i4QtqzTeADTa07a24zRdlKuVitorgVJ2iQMjfwWqHk7tS84YxbsN3modHVTlzLdNVcpD1lNqyb7%2BPkTxN%2FUSi5UjwqDJWci5VJwCn5aoR4TScGqa4spyn1kTiK3TNQfD%2B2W0ZrftpyU0%2FSC%2F2ze5sHPAFJz98tqbAyyzgtHGBo7SBI5CVTtbGjt6mH%2FpG9amD0CnlatcbBp5iZ1O97SNGuyTUVLd1NcPN1kwwLfBxAY6pgEREXUeSbo5kifnYQqxCP%2BfD%2FKriRIBB3kpt7zxxQQuccb62T9BotSW3c838RtYzdINAI%2BPM%2ByzY77E4YijXxCKuHK36lyOxzdffdysEqFrC5P%2BIGuWFJTs2uQpOTXCaraZ1g1R55MG5R7DBdy1RgeNyiGbNNDEyDJEERdOs%2B55%2BiH%2FlhJCzee8HOyMrbUbFc6ubifgXfT8MK9dLzs0edOBun1oiwCH&X-Amz-Signature=9f0f6b5bd40fed19d13d97c4614918dee2e717ea02f9f91ad3a88e80c51831a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3MT4FC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIAr6hFNyP2DWkFGN10xWiR1XR6ZH0FqmdSRpoL5%2FXLQvAiB%2F%2F5eAC8HVogEvZ%2BdJ408kyXzEd5dOA5GG17xewjPjaSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMuv8GdIIe71xQmbHvKtwDzt7jg2giVB%2B9sQDFsPTUXlVph9iNfQW0LiR9gu8LrSoITT%2BN%2FKGTstYOhJDvcABJLWtX4RnWtNTTnbOpQueuJ7OeaxYUt%2BqiyS4j6AmHAGiTgE5jM9aqP3HAqerfckl5uj31oTkDMxVW78XKBPFPQQxm9%2FpaaxlOeQfP%2F1ei7NXcvXi66RYB54lb8gFPufWJLhVJ0uRSUfJ%2BWW0XPqCvm7UI2W4qDxuOjo3Ie3wFue6dIVZGRmHk0k1vj0RMb8puMpfE%2FncwyV5QZvAI%2F7LDjguPMOkewjm9jBmGWNsy5uOqDIvTfAqhv8iRYxRpqJREOJhxmRdjyLW9%2Blkqlv6yl8tkWuP6jwzBkCxEAtsx75FNFdnN%2BFMEvrkfIB2dDebE0AYUtum7vJ8mDJzS2LDybn89i4QtqzTeADTa07a24zRdlKuVitorgVJ2iQMjfwWqHk7tS84YxbsN3modHVTlzLdNVcpD1lNqyb7%2BPkTxN%2FUSi5UjwqDJWci5VJwCn5aoR4TScGqa4spyn1kTiK3TNQfD%2B2W0ZrftpyU0%2FSC%2F2ze5sHPAFJz98tqbAyyzgtHGBo7SBI5CVTtbGjt6mH%2FpG9amD0CnlatcbBp5iZ1O97SNGuyTUVLd1NcPN1kwwLfBxAY6pgEREXUeSbo5kifnYQqxCP%2BfD%2FKriRIBB3kpt7zxxQQuccb62T9BotSW3c838RtYzdINAI%2BPM%2ByzY77E4YijXxCKuHK36lyOxzdffdysEqFrC5P%2BIGuWFJTs2uQpOTXCaraZ1g1R55MG5R7DBdy1RgeNyiGbNNDEyDJEERdOs%2B55%2BiH%2FlhJCzee8HOyMrbUbFc6ubifgXfT8MK9dLzs0edOBun1oiwCH&X-Amz-Signature=ac8331ddb3e4ed94f984ef90b28b3cc007eb2daa0516b3e117c919f8a6643793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
