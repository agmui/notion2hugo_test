---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-19T09:18:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-19T09:18:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FCGPUSX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEMJzZMNC%2Bu79RhFEStb7udJ7%2FZT3E6RHgW3Y3REadLDAiBMdwixOniDAO%2Fu2YnYo8vg%2FwUIHFtuMKEVozZVjFflYiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBAxQkMyxb1KTBo9cKtwDyAN25tzFyulX1LKyqPuj5UVXna2022AqlhLTyQA6HYyWua94%2FaiZrjKRkGAE9QWbe6Q9zJgZZXe1WgobjnNex35lmUPiko1uqaPLTlBSQv%2BE%2BRepg%2BuGEEmkzxwH3xPK8%2BHqVfbpS%2F6qFvq4jlNgqYxRnM%2FCNU2vHoxhNwsRXIQL6vzE%2FIHPMCUU7sn18%2FS51QjvPeUg0eE9tqJS4SJgyDpzDnPAahprcDNZUZ9nfyKLHcuX9kVPjZBoP3ZkVfhiX%2BsN%2FmYSgGygiHOIhSs02kdlngeBMyBV5hnY4ga8NZB4%2FkUJLTARMUCoEyyH5ILY9KxBJyO4t8UHwQIWLPpp6Y0GABShtPStCcpM%2Fn%2BUKE2aVNoNP4nlr3QR2sDGLlYXB5g8ftGC4aX%2FiH8bSnZgTsuM15kiAwo0d6v6ds%2BfN%2FrvOu7rD2G0KkMWsRC6Crgsw7KBZMrtqS3QkBBO5ysjCcS0uFY1IzRmRGoc9fzTEb3Wpx1v7MiwgP24%2FGHuOw5Y7It%2FuYHd4Lku5HpcEr0bhLKw%2Fb58AoXBCI5XEDOdgH8DDI4RBAQ59AeFjKuQ9Vo%2FwYhvcgU4n4Qvx3NNba4X8g5EBI2RP95zkfVlgwzQ%2FClgZ64Yk4Q%2FUWclTdsw%2B6Wo0QY6pgHD6AOhGxVoLJXAld2JZGBv5X2%2F1Ml8lnK4UGdA3Nl6eqU%2BWF18Vpmsjpd8Gd8q1T2flxoynnzBMgUfhFBu0jw%2B0YNy%2Frg6vmcTRYgNDn6tBszeFUTAv%2BITWoZUFdNNpy0JJz0TFWnpuUnGRULpnIILB%2FvVJNUwCfD8SdMFKA1aUTDFEkjxQ3OEl07KKNq9VvUMbngVQlhldcY6eIEODM9PERxp0bkz&X-Amz-Signature=551b73f0a8a2396cb4f9bc53b9e2a25789a72b8dd5c18b1d6fa191f9028f7286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FCGPUSX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEMJzZMNC%2Bu79RhFEStb7udJ7%2FZT3E6RHgW3Y3REadLDAiBMdwixOniDAO%2Fu2YnYo8vg%2FwUIHFtuMKEVozZVjFflYiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBAxQkMyxb1KTBo9cKtwDyAN25tzFyulX1LKyqPuj5UVXna2022AqlhLTyQA6HYyWua94%2FaiZrjKRkGAE9QWbe6Q9zJgZZXe1WgobjnNex35lmUPiko1uqaPLTlBSQv%2BE%2BRepg%2BuGEEmkzxwH3xPK8%2BHqVfbpS%2F6qFvq4jlNgqYxRnM%2FCNU2vHoxhNwsRXIQL6vzE%2FIHPMCUU7sn18%2FS51QjvPeUg0eE9tqJS4SJgyDpzDnPAahprcDNZUZ9nfyKLHcuX9kVPjZBoP3ZkVfhiX%2BsN%2FmYSgGygiHOIhSs02kdlngeBMyBV5hnY4ga8NZB4%2FkUJLTARMUCoEyyH5ILY9KxBJyO4t8UHwQIWLPpp6Y0GABShtPStCcpM%2Fn%2BUKE2aVNoNP4nlr3QR2sDGLlYXB5g8ftGC4aX%2FiH8bSnZgTsuM15kiAwo0d6v6ds%2BfN%2FrvOu7rD2G0KkMWsRC6Crgsw7KBZMrtqS3QkBBO5ysjCcS0uFY1IzRmRGoc9fzTEb3Wpx1v7MiwgP24%2FGHuOw5Y7It%2FuYHd4Lku5HpcEr0bhLKw%2Fb58AoXBCI5XEDOdgH8DDI4RBAQ59AeFjKuQ9Vo%2FwYhvcgU4n4Qvx3NNba4X8g5EBI2RP95zkfVlgwzQ%2FClgZ64Yk4Q%2FUWclTdsw%2B6Wo0QY6pgHD6AOhGxVoLJXAld2JZGBv5X2%2F1Ml8lnK4UGdA3Nl6eqU%2BWF18Vpmsjpd8Gd8q1T2flxoynnzBMgUfhFBu0jw%2B0YNy%2Frg6vmcTRYgNDn6tBszeFUTAv%2BITWoZUFdNNpy0JJz0TFWnpuUnGRULpnIILB%2FvVJNUwCfD8SdMFKA1aUTDFEkjxQ3OEl07KKNq9VvUMbngVQlhldcY6eIEODM9PERxp0bkz&X-Amz-Signature=fb386ef61dd9e224cbbc9526c8d66ad447b7984f388094ff54b992a04fbe3fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FCGPUSX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEMJzZMNC%2Bu79RhFEStb7udJ7%2FZT3E6RHgW3Y3REadLDAiBMdwixOniDAO%2Fu2YnYo8vg%2FwUIHFtuMKEVozZVjFflYiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBAxQkMyxb1KTBo9cKtwDyAN25tzFyulX1LKyqPuj5UVXna2022AqlhLTyQA6HYyWua94%2FaiZrjKRkGAE9QWbe6Q9zJgZZXe1WgobjnNex35lmUPiko1uqaPLTlBSQv%2BE%2BRepg%2BuGEEmkzxwH3xPK8%2BHqVfbpS%2F6qFvq4jlNgqYxRnM%2FCNU2vHoxhNwsRXIQL6vzE%2FIHPMCUU7sn18%2FS51QjvPeUg0eE9tqJS4SJgyDpzDnPAahprcDNZUZ9nfyKLHcuX9kVPjZBoP3ZkVfhiX%2BsN%2FmYSgGygiHOIhSs02kdlngeBMyBV5hnY4ga8NZB4%2FkUJLTARMUCoEyyH5ILY9KxBJyO4t8UHwQIWLPpp6Y0GABShtPStCcpM%2Fn%2BUKE2aVNoNP4nlr3QR2sDGLlYXB5g8ftGC4aX%2FiH8bSnZgTsuM15kiAwo0d6v6ds%2BfN%2FrvOu7rD2G0KkMWsRC6Crgsw7KBZMrtqS3QkBBO5ysjCcS0uFY1IzRmRGoc9fzTEb3Wpx1v7MiwgP24%2FGHuOw5Y7It%2FuYHd4Lku5HpcEr0bhLKw%2Fb58AoXBCI5XEDOdgH8DDI4RBAQ59AeFjKuQ9Vo%2FwYhvcgU4n4Qvx3NNba4X8g5EBI2RP95zkfVlgwzQ%2FClgZ64Yk4Q%2FUWclTdsw%2B6Wo0QY6pgHD6AOhGxVoLJXAld2JZGBv5X2%2F1Ml8lnK4UGdA3Nl6eqU%2BWF18Vpmsjpd8Gd8q1T2flxoynnzBMgUfhFBu0jw%2B0YNy%2Frg6vmcTRYgNDn6tBszeFUTAv%2BITWoZUFdNNpy0JJz0TFWnpuUnGRULpnIILB%2FvVJNUwCfD8SdMFKA1aUTDFEkjxQ3OEl07KKNq9VvUMbngVQlhldcY6eIEODM9PERxp0bkz&X-Amz-Signature=e62fd2c52fa1032c78e56453bfd874d60357167cd604aa0b58ebd634c958ed12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FCGPUSX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEMJzZMNC%2Bu79RhFEStb7udJ7%2FZT3E6RHgW3Y3REadLDAiBMdwixOniDAO%2Fu2YnYo8vg%2FwUIHFtuMKEVozZVjFflYiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBAxQkMyxb1KTBo9cKtwDyAN25tzFyulX1LKyqPuj5UVXna2022AqlhLTyQA6HYyWua94%2FaiZrjKRkGAE9QWbe6Q9zJgZZXe1WgobjnNex35lmUPiko1uqaPLTlBSQv%2BE%2BRepg%2BuGEEmkzxwH3xPK8%2BHqVfbpS%2F6qFvq4jlNgqYxRnM%2FCNU2vHoxhNwsRXIQL6vzE%2FIHPMCUU7sn18%2FS51QjvPeUg0eE9tqJS4SJgyDpzDnPAahprcDNZUZ9nfyKLHcuX9kVPjZBoP3ZkVfhiX%2BsN%2FmYSgGygiHOIhSs02kdlngeBMyBV5hnY4ga8NZB4%2FkUJLTARMUCoEyyH5ILY9KxBJyO4t8UHwQIWLPpp6Y0GABShtPStCcpM%2Fn%2BUKE2aVNoNP4nlr3QR2sDGLlYXB5g8ftGC4aX%2FiH8bSnZgTsuM15kiAwo0d6v6ds%2BfN%2FrvOu7rD2G0KkMWsRC6Crgsw7KBZMrtqS3QkBBO5ysjCcS0uFY1IzRmRGoc9fzTEb3Wpx1v7MiwgP24%2FGHuOw5Y7It%2FuYHd4Lku5HpcEr0bhLKw%2Fb58AoXBCI5XEDOdgH8DDI4RBAQ59AeFjKuQ9Vo%2FwYhvcgU4n4Qvx3NNba4X8g5EBI2RP95zkfVlgwzQ%2FClgZ64Yk4Q%2FUWclTdsw%2B6Wo0QY6pgHD6AOhGxVoLJXAld2JZGBv5X2%2F1Ml8lnK4UGdA3Nl6eqU%2BWF18Vpmsjpd8Gd8q1T2flxoynnzBMgUfhFBu0jw%2B0YNy%2Frg6vmcTRYgNDn6tBszeFUTAv%2BITWoZUFdNNpy0JJz0TFWnpuUnGRULpnIILB%2FvVJNUwCfD8SdMFKA1aUTDFEkjxQ3OEl07KKNq9VvUMbngVQlhldcY6eIEODM9PERxp0bkz&X-Amz-Signature=13e4aaa481c937d9115998b4cb2023c91b0f14f89adda015df137a77ebfb6343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FCGPUSX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEMJzZMNC%2Bu79RhFEStb7udJ7%2FZT3E6RHgW3Y3REadLDAiBMdwixOniDAO%2Fu2YnYo8vg%2FwUIHFtuMKEVozZVjFflYiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBAxQkMyxb1KTBo9cKtwDyAN25tzFyulX1LKyqPuj5UVXna2022AqlhLTyQA6HYyWua94%2FaiZrjKRkGAE9QWbe6Q9zJgZZXe1WgobjnNex35lmUPiko1uqaPLTlBSQv%2BE%2BRepg%2BuGEEmkzxwH3xPK8%2BHqVfbpS%2F6qFvq4jlNgqYxRnM%2FCNU2vHoxhNwsRXIQL6vzE%2FIHPMCUU7sn18%2FS51QjvPeUg0eE9tqJS4SJgyDpzDnPAahprcDNZUZ9nfyKLHcuX9kVPjZBoP3ZkVfhiX%2BsN%2FmYSgGygiHOIhSs02kdlngeBMyBV5hnY4ga8NZB4%2FkUJLTARMUCoEyyH5ILY9KxBJyO4t8UHwQIWLPpp6Y0GABShtPStCcpM%2Fn%2BUKE2aVNoNP4nlr3QR2sDGLlYXB5g8ftGC4aX%2FiH8bSnZgTsuM15kiAwo0d6v6ds%2BfN%2FrvOu7rD2G0KkMWsRC6Crgsw7KBZMrtqS3QkBBO5ysjCcS0uFY1IzRmRGoc9fzTEb3Wpx1v7MiwgP24%2FGHuOw5Y7It%2FuYHd4Lku5HpcEr0bhLKw%2Fb58AoXBCI5XEDOdgH8DDI4RBAQ59AeFjKuQ9Vo%2FwYhvcgU4n4Qvx3NNba4X8g5EBI2RP95zkfVlgwzQ%2FClgZ64Yk4Q%2FUWclTdsw%2B6Wo0QY6pgHD6AOhGxVoLJXAld2JZGBv5X2%2F1Ml8lnK4UGdA3Nl6eqU%2BWF18Vpmsjpd8Gd8q1T2flxoynnzBMgUfhFBu0jw%2B0YNy%2Frg6vmcTRYgNDn6tBszeFUTAv%2BITWoZUFdNNpy0JJz0TFWnpuUnGRULpnIILB%2FvVJNUwCfD8SdMFKA1aUTDFEkjxQ3OEl07KKNq9VvUMbngVQlhldcY6eIEODM9PERxp0bkz&X-Amz-Signature=1c912fdc194c4643eba708bac451b1526b2f6ef1d5e1c71736419e1bbe641ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FCGPUSX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEMJzZMNC%2Bu79RhFEStb7udJ7%2FZT3E6RHgW3Y3REadLDAiBMdwixOniDAO%2Fu2YnYo8vg%2FwUIHFtuMKEVozZVjFflYiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBAxQkMyxb1KTBo9cKtwDyAN25tzFyulX1LKyqPuj5UVXna2022AqlhLTyQA6HYyWua94%2FaiZrjKRkGAE9QWbe6Q9zJgZZXe1WgobjnNex35lmUPiko1uqaPLTlBSQv%2BE%2BRepg%2BuGEEmkzxwH3xPK8%2BHqVfbpS%2F6qFvq4jlNgqYxRnM%2FCNU2vHoxhNwsRXIQL6vzE%2FIHPMCUU7sn18%2FS51QjvPeUg0eE9tqJS4SJgyDpzDnPAahprcDNZUZ9nfyKLHcuX9kVPjZBoP3ZkVfhiX%2BsN%2FmYSgGygiHOIhSs02kdlngeBMyBV5hnY4ga8NZB4%2FkUJLTARMUCoEyyH5ILY9KxBJyO4t8UHwQIWLPpp6Y0GABShtPStCcpM%2Fn%2BUKE2aVNoNP4nlr3QR2sDGLlYXB5g8ftGC4aX%2FiH8bSnZgTsuM15kiAwo0d6v6ds%2BfN%2FrvOu7rD2G0KkMWsRC6Crgsw7KBZMrtqS3QkBBO5ysjCcS0uFY1IzRmRGoc9fzTEb3Wpx1v7MiwgP24%2FGHuOw5Y7It%2FuYHd4Lku5HpcEr0bhLKw%2Fb58AoXBCI5XEDOdgH8DDI4RBAQ59AeFjKuQ9Vo%2FwYhvcgU4n4Qvx3NNba4X8g5EBI2RP95zkfVlgwzQ%2FClgZ64Yk4Q%2FUWclTdsw%2B6Wo0QY6pgHD6AOhGxVoLJXAld2JZGBv5X2%2F1Ml8lnK4UGdA3Nl6eqU%2BWF18Vpmsjpd8Gd8q1T2flxoynnzBMgUfhFBu0jw%2B0YNy%2Frg6vmcTRYgNDn6tBszeFUTAv%2BITWoZUFdNNpy0JJz0TFWnpuUnGRULpnIILB%2FvVJNUwCfD8SdMFKA1aUTDFEkjxQ3OEl07KKNq9VvUMbngVQlhldcY6eIEODM9PERxp0bkz&X-Amz-Signature=80c4092d71d6ef9bc9c7aad2c9863c5eb27a2004d0ebc91563a7c5e7f0ff34b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FCGPUSX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEMJzZMNC%2Bu79RhFEStb7udJ7%2FZT3E6RHgW3Y3REadLDAiBMdwixOniDAO%2Fu2YnYo8vg%2FwUIHFtuMKEVozZVjFflYiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBAxQkMyxb1KTBo9cKtwDyAN25tzFyulX1LKyqPuj5UVXna2022AqlhLTyQA6HYyWua94%2FaiZrjKRkGAE9QWbe6Q9zJgZZXe1WgobjnNex35lmUPiko1uqaPLTlBSQv%2BE%2BRepg%2BuGEEmkzxwH3xPK8%2BHqVfbpS%2F6qFvq4jlNgqYxRnM%2FCNU2vHoxhNwsRXIQL6vzE%2FIHPMCUU7sn18%2FS51QjvPeUg0eE9tqJS4SJgyDpzDnPAahprcDNZUZ9nfyKLHcuX9kVPjZBoP3ZkVfhiX%2BsN%2FmYSgGygiHOIhSs02kdlngeBMyBV5hnY4ga8NZB4%2FkUJLTARMUCoEyyH5ILY9KxBJyO4t8UHwQIWLPpp6Y0GABShtPStCcpM%2Fn%2BUKE2aVNoNP4nlr3QR2sDGLlYXB5g8ftGC4aX%2FiH8bSnZgTsuM15kiAwo0d6v6ds%2BfN%2FrvOu7rD2G0KkMWsRC6Crgsw7KBZMrtqS3QkBBO5ysjCcS0uFY1IzRmRGoc9fzTEb3Wpx1v7MiwgP24%2FGHuOw5Y7It%2FuYHd4Lku5HpcEr0bhLKw%2Fb58AoXBCI5XEDOdgH8DDI4RBAQ59AeFjKuQ9Vo%2FwYhvcgU4n4Qvx3NNba4X8g5EBI2RP95zkfVlgwzQ%2FClgZ64Yk4Q%2FUWclTdsw%2B6Wo0QY6pgHD6AOhGxVoLJXAld2JZGBv5X2%2F1Ml8lnK4UGdA3Nl6eqU%2BWF18Vpmsjpd8Gd8q1T2flxoynnzBMgUfhFBu0jw%2B0YNy%2Frg6vmcTRYgNDn6tBszeFUTAv%2BITWoZUFdNNpy0JJz0TFWnpuUnGRULpnIILB%2FvVJNUwCfD8SdMFKA1aUTDFEkjxQ3OEl07KKNq9VvUMbngVQlhldcY6eIEODM9PERxp0bkz&X-Amz-Signature=337c9aadaa8ac6be5cbd5f553aaba7b63a9751bb09e98eb314591339c44ae739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FCGPUSX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEMJzZMNC%2Bu79RhFEStb7udJ7%2FZT3E6RHgW3Y3REadLDAiBMdwixOniDAO%2Fu2YnYo8vg%2FwUIHFtuMKEVozZVjFflYiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBAxQkMyxb1KTBo9cKtwDyAN25tzFyulX1LKyqPuj5UVXna2022AqlhLTyQA6HYyWua94%2FaiZrjKRkGAE9QWbe6Q9zJgZZXe1WgobjnNex35lmUPiko1uqaPLTlBSQv%2BE%2BRepg%2BuGEEmkzxwH3xPK8%2BHqVfbpS%2F6qFvq4jlNgqYxRnM%2FCNU2vHoxhNwsRXIQL6vzE%2FIHPMCUU7sn18%2FS51QjvPeUg0eE9tqJS4SJgyDpzDnPAahprcDNZUZ9nfyKLHcuX9kVPjZBoP3ZkVfhiX%2BsN%2FmYSgGygiHOIhSs02kdlngeBMyBV5hnY4ga8NZB4%2FkUJLTARMUCoEyyH5ILY9KxBJyO4t8UHwQIWLPpp6Y0GABShtPStCcpM%2Fn%2BUKE2aVNoNP4nlr3QR2sDGLlYXB5g8ftGC4aX%2FiH8bSnZgTsuM15kiAwo0d6v6ds%2BfN%2FrvOu7rD2G0KkMWsRC6Crgsw7KBZMrtqS3QkBBO5ysjCcS0uFY1IzRmRGoc9fzTEb3Wpx1v7MiwgP24%2FGHuOw5Y7It%2FuYHd4Lku5HpcEr0bhLKw%2Fb58AoXBCI5XEDOdgH8DDI4RBAQ59AeFjKuQ9Vo%2FwYhvcgU4n4Qvx3NNba4X8g5EBI2RP95zkfVlgwzQ%2FClgZ64Yk4Q%2FUWclTdsw%2B6Wo0QY6pgHD6AOhGxVoLJXAld2JZGBv5X2%2F1Ml8lnK4UGdA3Nl6eqU%2BWF18Vpmsjpd8Gd8q1T2flxoynnzBMgUfhFBu0jw%2B0YNy%2Frg6vmcTRYgNDn6tBszeFUTAv%2BITWoZUFdNNpy0JJz0TFWnpuUnGRULpnIILB%2FvVJNUwCfD8SdMFKA1aUTDFEkjxQ3OEl07KKNq9VvUMbngVQlhldcY6eIEODM9PERxp0bkz&X-Amz-Signature=41f03c21724fe8523c12e138cbf3252fd6839b342f8403e3801309ca82835367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FCGPUSX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEMJzZMNC%2Bu79RhFEStb7udJ7%2FZT3E6RHgW3Y3REadLDAiBMdwixOniDAO%2Fu2YnYo8vg%2FwUIHFtuMKEVozZVjFflYiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBAxQkMyxb1KTBo9cKtwDyAN25tzFyulX1LKyqPuj5UVXna2022AqlhLTyQA6HYyWua94%2FaiZrjKRkGAE9QWbe6Q9zJgZZXe1WgobjnNex35lmUPiko1uqaPLTlBSQv%2BE%2BRepg%2BuGEEmkzxwH3xPK8%2BHqVfbpS%2F6qFvq4jlNgqYxRnM%2FCNU2vHoxhNwsRXIQL6vzE%2FIHPMCUU7sn18%2FS51QjvPeUg0eE9tqJS4SJgyDpzDnPAahprcDNZUZ9nfyKLHcuX9kVPjZBoP3ZkVfhiX%2BsN%2FmYSgGygiHOIhSs02kdlngeBMyBV5hnY4ga8NZB4%2FkUJLTARMUCoEyyH5ILY9KxBJyO4t8UHwQIWLPpp6Y0GABShtPStCcpM%2Fn%2BUKE2aVNoNP4nlr3QR2sDGLlYXB5g8ftGC4aX%2FiH8bSnZgTsuM15kiAwo0d6v6ds%2BfN%2FrvOu7rD2G0KkMWsRC6Crgsw7KBZMrtqS3QkBBO5ysjCcS0uFY1IzRmRGoc9fzTEb3Wpx1v7MiwgP24%2FGHuOw5Y7It%2FuYHd4Lku5HpcEr0bhLKw%2Fb58AoXBCI5XEDOdgH8DDI4RBAQ59AeFjKuQ9Vo%2FwYhvcgU4n4Qvx3NNba4X8g5EBI2RP95zkfVlgwzQ%2FClgZ64Yk4Q%2FUWclTdsw%2B6Wo0QY6pgHD6AOhGxVoLJXAld2JZGBv5X2%2F1Ml8lnK4UGdA3Nl6eqU%2BWF18Vpmsjpd8Gd8q1T2flxoynnzBMgUfhFBu0jw%2B0YNy%2Frg6vmcTRYgNDn6tBszeFUTAv%2BITWoZUFdNNpy0JJz0TFWnpuUnGRULpnIILB%2FvVJNUwCfD8SdMFKA1aUTDFEkjxQ3OEl07KKNq9VvUMbngVQlhldcY6eIEODM9PERxp0bkz&X-Amz-Signature=3e3b73949207f4cd318b8f666142040b5b725ff40b6adddf2d9b3d1502b70ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FCGPUSX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEMJzZMNC%2Bu79RhFEStb7udJ7%2FZT3E6RHgW3Y3REadLDAiBMdwixOniDAO%2Fu2YnYo8vg%2FwUIHFtuMKEVozZVjFflYiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBAxQkMyxb1KTBo9cKtwDyAN25tzFyulX1LKyqPuj5UVXna2022AqlhLTyQA6HYyWua94%2FaiZrjKRkGAE9QWbe6Q9zJgZZXe1WgobjnNex35lmUPiko1uqaPLTlBSQv%2BE%2BRepg%2BuGEEmkzxwH3xPK8%2BHqVfbpS%2F6qFvq4jlNgqYxRnM%2FCNU2vHoxhNwsRXIQL6vzE%2FIHPMCUU7sn18%2FS51QjvPeUg0eE9tqJS4SJgyDpzDnPAahprcDNZUZ9nfyKLHcuX9kVPjZBoP3ZkVfhiX%2BsN%2FmYSgGygiHOIhSs02kdlngeBMyBV5hnY4ga8NZB4%2FkUJLTARMUCoEyyH5ILY9KxBJyO4t8UHwQIWLPpp6Y0GABShtPStCcpM%2Fn%2BUKE2aVNoNP4nlr3QR2sDGLlYXB5g8ftGC4aX%2FiH8bSnZgTsuM15kiAwo0d6v6ds%2BfN%2FrvOu7rD2G0KkMWsRC6Crgsw7KBZMrtqS3QkBBO5ysjCcS0uFY1IzRmRGoc9fzTEb3Wpx1v7MiwgP24%2FGHuOw5Y7It%2FuYHd4Lku5HpcEr0bhLKw%2Fb58AoXBCI5XEDOdgH8DDI4RBAQ59AeFjKuQ9Vo%2FwYhvcgU4n4Qvx3NNba4X8g5EBI2RP95zkfVlgwzQ%2FClgZ64Yk4Q%2FUWclTdsw%2B6Wo0QY6pgHD6AOhGxVoLJXAld2JZGBv5X2%2F1Ml8lnK4UGdA3Nl6eqU%2BWF18Vpmsjpd8Gd8q1T2flxoynnzBMgUfhFBu0jw%2B0YNy%2Frg6vmcTRYgNDn6tBszeFUTAv%2BITWoZUFdNNpy0JJz0TFWnpuUnGRULpnIILB%2FvVJNUwCfD8SdMFKA1aUTDFEkjxQ3OEl07KKNq9VvUMbngVQlhldcY6eIEODM9PERxp0bkz&X-Amz-Signature=69f042b4a87aece3582cd7dda3ba57448565f4b8991c7113ee8a65d0523d81a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start add these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKIFEIQ%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFdjCrt0fMjGvO2FN9CMZMx%2B0UqR9GDYa77AiAA9TNVXAiEAi9PQw86LjxQEm4YWEa3NQm6CM0%2F2XYNAtRfNX%2F7lwnYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUHlX7Sk8xinnsvMyrcAzNRkUI0om5DUBobWMaOAf9MX7x4%2FPu%2BRj%2F87BrWLDhZwO9tVb8MEzHisuTx4T%2BTaORZ1IpGw0QnGv6MEXE0sKEhTzVrqvEG7eluFqINEQG3mOeCeVHIZPKSvyNprQW2Z%2BLTBRf9BqPEsXpwFADjg4nHh%2BOjpCBy4pVJBBEF4r8LeVGx1K6iajQoMH8kTa57KDxKnBJmrf%2F6%2Bx8AS%2Fvyp3pIvFyxfFAUesTdOokAn4tFSGYnqp9DHoGwAWMAM9Ww2VvUV1BK0MbG6Pr4fIBHfBdHfW2PaWcNayACC1FK6BYPrlG%2Fa38qs3iNRkunMVwEkCeqJzDxNTSDc%2FmIFwjDAxzD5y8SmL4FMIcJjbm3cXMfkoi%2FgtfYQoRQnPwsxZLbWhhcbnroKcz8s3yG%2Fgbqy%2BLAS%2F2U01KSQM36SBdDNhDUyHE4vIRMQrM8SYxbXff6q2QzT%2BtYr9V253FPh3JvEHk2zeqRTMBU19%2Bd5OHcJ%2FKeymzE4ZykjS6SWHN1Ez4yXwFn8YW7Cs5opv1ECCiEy1k4CmtHjusMYSvzTuP3LR%2BvTNqbAwdMntcICIfomG%2FbkXtD51hUpQENe4R0d%2BGUndiJZw78vRU1%2B3GGL%2FiDXpcWWS6zte48YbVyBr1BMIynqNEGOqUBTQszfzci2bOZACWQ65YvCx9Fk2nQJSILEYMlzW6BU5Gl3%2F0enN8oVbidwu22wQpeg6DO6MLrs8%2BA1ScOI4orGio0Ev9rEZO6heCaoE3lq64eptJqqnd69K%2BsUTo9JLgfX1x%2FeCbSNF4%2BKqFsGOeTvBY0uS%2BM%2Bw4RdyIDXKsXneW9UpkGkdSMVd5ONNeFifEVDnO3Kl7ibU9F%2FvKNLoorz1QvAZLJ&X-Amz-Signature=dc3d636837dca1989f7aa355904b6558e37752cd8d40bdf4207bd8154271e2c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All urdf files must start with these tags to be valid urdf. All of our code will go in between the `<robot>` tags 

Next lets put down some constants we will use later

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6G4YOW7%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIDv4mEA1wP3QKM7KubPzBicETN8VqDQ39N7x2rV0kEanAiEAn9sFmOdQHHD8mIerhbGXPQZgAMjH2Q7nwZqdSyZl%2BE4qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzXDo2BrFb3xQxG2SrcA2KE9mznDLmQTHTyD6EL847dTID4p50%2FyzqiNwTt3qgxqqw9Q0EDW9Ax%2B2DnIvcZzYTuoQtbqsXmKn97WwNVLGIlMj%2B1Cq6zc1%2Br7j8dMSbJpZFMj76cWQmscmy8FvE4G5FKBMoKHAn54UPN7U8rgOcpnD09euF22I50%2BAszaqkxqMsr4Mw6h2wNl2xx4DEppYgYQrCQJCDIvDLeKwKvGiimomqmxDjLe0Rq657fBMqkfRO%2FRN3tK%2FBH4VKTeolA2sAXDwgmGU2mfCmzbJfjGKpPi1BVKwy9C9lxbEr0Wg52PLjb3034o2Zq%2Bh7msxs6cam7ab6NmQ9HA4GKc3CG9yND7ZO%2FhvbZmYBb6JjZPQIPVNGeWcSg39CTP51hczQ7Ss4pQHmLnkgJxomggxbpmE3ayPk8rmB%2BFy7GOnrqstXinMzyKfnzkPNBBx6pLwx8n5bxZZ1NcibDQoJoZ6nh8Rj04gl5IQ1G16vdeDgEM2yMF5sFtwLpBRmYQnHwhXOJwj8M0LJA23pU4xNOTZAL%2FMUMKDcG1wnNxTCJk9zpYUGgrvoLPyVKrTpHNEap%2Fom8nEC%2FHqLiyrxHUfnB0nUE%2BjjUYhK9PpVxVTpkWe5t9p55TFKP1N1i8Wj6CWeBMOSlqNEGOqUBHQYjPDliFXeZvKsgr%2BCZeDHoGImiFEBfZAiMV14cjjAw8SqmupO3%2BY%2B1AklZE4LyMnojqCLdbacA8mwOuWr%2FRy8yuMZ%2BFSQ%2BB%2FWnpuzMNZPjowx%2FBJDeHPA2AR0CJlu3JEl5fmVSb4vZICtimXB0nlvg2ok5iqMaqPe8vWK%2BxuBU8QWMbUpypOpqRAnfkWQEBTL4i3ArmgdCVHxGJFJ0tTdWh6zd&X-Amz-Signature=e98bc0f4d2bfc1b3bc711b5d063e703fc4d6f6311935ef64f02a3a41677a943a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
  <summary>{{< markdownify >}}What do the variables represent?{{< /markdownify >}}</summary>
  
`base_width`, `base_length`, `base_height` are the dimensions of the main body of the robot.

`wheel_radius` and `wheel_width` are the dimensions of the 2 back wheels.

`wheel_ygap` is the gap between the chassis and wheel.

`wheel_zoff` and `wheel_xoff` is the offset between the z-axis and x-axis.

`caster_xoff` is the offset of the caster wheel (the little ball) along the x-axis.

</details>



Lets now make a link for the body and call it `base_link` to be the “_root” of our robot._ This is common convention in ROS and is required to be called `base_link` for later parts in this guide

For now we are only going to add the visual part of the link to see if our design is correct. Later we will add collision and inertia.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGYNA7OO%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICnD9k%2B6ypNe%2FPnlUJJQUjgFp2BH5r%2B4dDFmb37QVnqhAiAr%2BChymHmDlHTQwO%2BEvw%2BhAPGXDJa7MpYG9P6S3BWIziqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAIepQ%2BlwVO9z%2Bi0%2FKtwD0CSRpfpDvceTb8HFb79XiaGI%2FgeqohGBKQeM8Nf0s8ZWunZ8hwrr6XMIWqAvMTgqH%2BF3CS%2B1XYrHxYCCFVAo3%2Fpk8f6Z%2BXD%2FXriT%2FZQ6ygulSOCmCl3zX9YabNAN0luKKIjVLMSiWHAgQqJnPo8uw43nGEko1zmFbNv7yoe2Izs7hlRnEfXq09aEwfJYxfD45Dn7KKCo%2B%2BFx5nARMVqq9yBvHm3vkB2x6XNvIL%2FjeU5HkPHtJB2aZ6eXtZP4CGCAi2kSdMwTN%2FAoUtAd7yKCAHoeuyshJDvKr0Kp70FEf196E%2FQBKvGBt%2BZy4UGlZxO2zicgX991ne3Ayay%2BVmZ9B6PY4g%2Fh67Al18JORyyWjV6Rc0m7jKuPepR4CEIOx1fBA%2FPcI04iJbZLGC8lzfFsXu0ac2%2F95l4kfcDpmt3aeT9LP93D2i0%2FaL5dzJK9G7mjKXIqyXdzpOSh4pZX4vpeOzS8XN6p8muFx0%2F%2Fp6PjO1xkDMzppFidM%2B%2FkWBdd6pTpy7O%2B8LQDCy0MqmB0F6ORZnrazo50a2%2Fcc0Y3GRiQQuiLKpkDimjT6woX8g1%2BrlpKcBQpKV9Go3BWWmNx2pAxoo2y%2FzzwZnUSqZivrzgS9V%2Fb8LuTv1J2cRnT8sMwrKio0QY6pgG7var7%2BmlsNg9KL%2B7tYs6QjmGHyP%2BM%2Ba44J9ThcIOeTCJmMujOE%2BL3ElIi7PvVNWXAI0nJiqryZt%2BgxrRrBoRvrBUAp6NU9u1%2BUXYlkwJmcsciIl92AD3O2yrakos6N3Y5u9BRpHaiG7NP08A%2F9zbIP75amD4I4g1IoUWr3ETI9CGpaOu0hIpUhOLVgOo4m0EWvwq1xaRPwPaYpQORRapLKkax3bBu&X-Amz-Signature=d9306a655bf5b9425ce2d18a8c0113ad57abc051009adc13cf32192180c3b75d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FCGPUSX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEMJzZMNC%2Bu79RhFEStb7udJ7%2FZT3E6RHgW3Y3REadLDAiBMdwixOniDAO%2Fu2YnYo8vg%2FwUIHFtuMKEVozZVjFflYiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBAxQkMyxb1KTBo9cKtwDyAN25tzFyulX1LKyqPuj5UVXna2022AqlhLTyQA6HYyWua94%2FaiZrjKRkGAE9QWbe6Q9zJgZZXe1WgobjnNex35lmUPiko1uqaPLTlBSQv%2BE%2BRepg%2BuGEEmkzxwH3xPK8%2BHqVfbpS%2F6qFvq4jlNgqYxRnM%2FCNU2vHoxhNwsRXIQL6vzE%2FIHPMCUU7sn18%2FS51QjvPeUg0eE9tqJS4SJgyDpzDnPAahprcDNZUZ9nfyKLHcuX9kVPjZBoP3ZkVfhiX%2BsN%2FmYSgGygiHOIhSs02kdlngeBMyBV5hnY4ga8NZB4%2FkUJLTARMUCoEyyH5ILY9KxBJyO4t8UHwQIWLPpp6Y0GABShtPStCcpM%2Fn%2BUKE2aVNoNP4nlr3QR2sDGLlYXB5g8ftGC4aX%2FiH8bSnZgTsuM15kiAwo0d6v6ds%2BfN%2FrvOu7rD2G0KkMWsRC6Crgsw7KBZMrtqS3QkBBO5ysjCcS0uFY1IzRmRGoc9fzTEb3Wpx1v7MiwgP24%2FGHuOw5Y7It%2FuYHd4Lku5HpcEr0bhLKw%2Fb58AoXBCI5XEDOdgH8DDI4RBAQ59AeFjKuQ9Vo%2FwYhvcgU4n4Qvx3NNba4X8g5EBI2RP95zkfVlgwzQ%2FClgZ64Yk4Q%2FUWclTdsw%2B6Wo0QY6pgHD6AOhGxVoLJXAld2JZGBv5X2%2F1Ml8lnK4UGdA3Nl6eqU%2BWF18Vpmsjpd8Gd8q1T2flxoynnzBMgUfhFBu0jw%2B0YNy%2Frg6vmcTRYgNDn6tBszeFUTAv%2BITWoZUFdNNpy0JJz0TFWnpuUnGRULpnIILB%2FvVJNUwCfD8SdMFKA1aUTDFEkjxQ3OEl07KKNq9VvUMbngVQlhldcY6eIEODM9PERxp0bkz&X-Amz-Signature=bac9bf97d4874850ff93b479ea82a245da750a6498a0ef48bca4a320d6728ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</link>` lets define a link called `base_footprint`. This link is just used for path finding to know where the robot is on a 2D map.

Later on in this guide we will see how it gets used.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYVXDL2E%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD%2BL%2BZ6u9hmVutZeQR%2FAb%2BiGxo3BmkgQFdqy94Mv4n8YAIgLlE%2BCq3NJhi%2BTBd7veodVD9afWuzcxAzPqCtZvo1ap8qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrNsKp5ll8ZFUVhmircA%2FU5AMKtCWMf1nIkUttwMH4ii%2BuZ54q9RfCn9quJXA34P6XKcPFG%2BYZrYDFH0CzQrr28S4z%2Bix0G6p408SwYOgC78Oa3su0GNUhqmgNg0AxO6LaLiq00jLDUGsHByYPBD8QcIA0fo983bIt7OxG7tbwrI1CwewLkqVUN9PdjemEbQXe4CRdFp6%2F6x2whgSF%2B1LiiPVwKx15jsYZEv9sfdqWAE3NvYuViBhgLHFbV9KxEAJ37E7Mp3AfozQLKJYuR5VBq%2FmVjXa7Z%2F0%2FwWsaieb7Ro5lEWJEeF762BU0LCAOFtIfSYGi2QQDicieNQCwQVyal0HR0tnlFIWQr0QYHzp5CpyVFugq%2BjL3FZU6diVkOCaaIxxHsu6fSOJBnTZxZQEbk%2Fg87cjq33LyHSlTD1ZE%2BswFthxtIT4M5AwzRD6Yxx0Xz9B0AsgOhgYqSp54v0PJICSE8SemrpbV14nSq6mVBu4VkEbARrwX6KPiL020FxWCBCG6qCLRBmvQbdMtO3nov2CLQL0orekQg7rN6m3L9DnisMtrhtAac0h68fyleK%2FY1tYQn%2FoKuOV5yID5lfgD2DUAyrx%2FR%2FiWW62YNxLem1RW2nvmYhoOkdx8qV7ayRy%2FV3W4D6RlRxU7AMJSoqNEGOqUBuMCBko3%2BIxPZjPDod6qwed3vMZ%2FSpd1fCfs3naYx%2FikvBfOzkQXFoQSI1%2FyRy1DJYNjn9sA2E7YunWJSXOFPN3SVkyVqqDg4zqpuULj4RiEyyFvy4Z2jdlC7ooxCWkM1K1PwrKHJGrIAAb00Gbu%2BTalMdaSChtxqVZ6X%2FhvNgR5FpbGuUl4U0s1XN42nlSMOysVrEADKaULo9DQm3tjPFo36RYiP&X-Amz-Signature=69e8062027e6f7a212674621a2e5063f6b3c4b1f998525a414299fbe6a01dfe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FCGPUSX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEMJzZMNC%2Bu79RhFEStb7udJ7%2FZT3E6RHgW3Y3REadLDAiBMdwixOniDAO%2Fu2YnYo8vg%2FwUIHFtuMKEVozZVjFflYiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBAxQkMyxb1KTBo9cKtwDyAN25tzFyulX1LKyqPuj5UVXna2022AqlhLTyQA6HYyWua94%2FaiZrjKRkGAE9QWbe6Q9zJgZZXe1WgobjnNex35lmUPiko1uqaPLTlBSQv%2BE%2BRepg%2BuGEEmkzxwH3xPK8%2BHqVfbpS%2F6qFvq4jlNgqYxRnM%2FCNU2vHoxhNwsRXIQL6vzE%2FIHPMCUU7sn18%2FS51QjvPeUg0eE9tqJS4SJgyDpzDnPAahprcDNZUZ9nfyKLHcuX9kVPjZBoP3ZkVfhiX%2BsN%2FmYSgGygiHOIhSs02kdlngeBMyBV5hnY4ga8NZB4%2FkUJLTARMUCoEyyH5ILY9KxBJyO4t8UHwQIWLPpp6Y0GABShtPStCcpM%2Fn%2BUKE2aVNoNP4nlr3QR2sDGLlYXB5g8ftGC4aX%2FiH8bSnZgTsuM15kiAwo0d6v6ds%2BfN%2FrvOu7rD2G0KkMWsRC6Crgsw7KBZMrtqS3QkBBO5ysjCcS0uFY1IzRmRGoc9fzTEb3Wpx1v7MiwgP24%2FGHuOw5Y7It%2FuYHd4Lku5HpcEr0bhLKw%2Fb58AoXBCI5XEDOdgH8DDI4RBAQ59AeFjKuQ9Vo%2FwYhvcgU4n4Qvx3NNba4X8g5EBI2RP95zkfVlgwzQ%2FClgZ64Yk4Q%2FUWclTdsw%2B6Wo0QY6pgHD6AOhGxVoLJXAld2JZGBv5X2%2F1Ml8lnK4UGdA3Nl6eqU%2BWF18Vpmsjpd8Gd8q1T2flxoynnzBMgUfhFBu0jw%2B0YNy%2Frg6vmcTRYgNDn6tBszeFUTAv%2BITWoZUFdNNpy0JJz0TFWnpuUnGRULpnIILB%2FvVJNUwCfD8SdMFKA1aUTDFEkjxQ3OEl07KKNq9VvUMbngVQlhldcY6eIEODM9PERxp0bkz&X-Amz-Signature=0ca824950d9fbcc50bcebae2490d496a1749a0d9c5da59907001ce4958b8820c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</joint>` to add wheels lets use a `xacro:macro` (basically a xacro function) to avoid duplicate code. The macro will take 3 functions `prefix`, `x_reflect`, and `y_reflect` so we can flip the wheel on the x or y axis. We also make the joint continuous so the wheel can rotate freely.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466224OZKHD%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCJi8M%2BIZXMZ%2FMEG7WpQLrjEol5GDS5kVECEm4%2FddxqFQIhAPwQlgR5nUl%2Fj33XTHdbQ7CN0nKoAXeOIXaHVBk77WPqKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwq6LTdYL%2B9EGg7Aowq3APFdrhBfO16kyrVwvCEBwCKQIWJk83td6u8ATqOeTdfgtXqJVk%2Bg6LCUwrKt%2FB%2Bqp8MvLeiRFhNJnwk8nhgqtp7%2BnCRYzPKI7gOQWJ1xxqD1%2FaKYTmmC%2Bx3H2yPwhIHpmKl2kYSCaMHm6VUi9fwdfa96tDKxc0dLxRcKFfdu9jswTNM0ix1o8nOjoRbOtaiYo8lKts%2ByALTmlPVJ5WefMFKO9VESSFRAcZSj3UAji5UIcgiBNQsfRMjZoZOhYbrq5qy6BrCpzY1lqtG6g0OzOx8A%2FcMYkmtKWFFSSQbXPrQwNnCA8CbbbrsGqFUd0AanJjzSKYM%2FeoSPMqwqwygT8zR%2BsEx6gEdllFe6MyFD8OuasF3IubWLuYc46nrNTK1bDgGWYBnsL8I4CjrqzeMSgST0wP%2Bx8wcxk82d8icVLJbDFEySWv3ZU3x5LHhlT91OsvtanwfH1hqLjfubktj6Rs9mlYlAWGW1Xrak%2Fu5ZHgphKZTYXOBx7eqCidKKyjZBUXQ7pdyIKaOb%2B%2FBy7KJ7WfvAZykK9OyIPnzTk65zIHw348721fEgkqqyXix2CI1Eu9KLvSPymstXQRAaB8UcWhSbDDAynVqnA3gxE57UdvyxNuHjU0wyUf%2Fjm3fWjCrqKjRBjqkARjwb5Ag55Mt6HH845niQb2g5stjIPb1vPgpb%2FIven%2FMd0ITpdndXTFyh%2Bf3niUpUn9xmj7vo7ylXkXgIv99x2fVXN7vHSgNJZV26Ej0%2FKwArN9xdZi%2Bcmdww%2BOYnaRzsaepTxm2Aov2S7lnUlkpSKVcXFUQXvlS4KG%2Bvw631KlFAMx%2F9sU5abn%2BZd08KdBIj6CkwFGdpI1QgYg1wXqmVJnTswe6&X-Amz-Signature=7408e71465907cbcfb35f50efb221abe3829978142489570be4f6d9aece5468a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FCGPUSX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEMJzZMNC%2Bu79RhFEStb7udJ7%2FZT3E6RHgW3Y3REadLDAiBMdwixOniDAO%2Fu2YnYo8vg%2FwUIHFtuMKEVozZVjFflYiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBAxQkMyxb1KTBo9cKtwDyAN25tzFyulX1LKyqPuj5UVXna2022AqlhLTyQA6HYyWua94%2FaiZrjKRkGAE9QWbe6Q9zJgZZXe1WgobjnNex35lmUPiko1uqaPLTlBSQv%2BE%2BRepg%2BuGEEmkzxwH3xPK8%2BHqVfbpS%2F6qFvq4jlNgqYxRnM%2FCNU2vHoxhNwsRXIQL6vzE%2FIHPMCUU7sn18%2FS51QjvPeUg0eE9tqJS4SJgyDpzDnPAahprcDNZUZ9nfyKLHcuX9kVPjZBoP3ZkVfhiX%2BsN%2FmYSgGygiHOIhSs02kdlngeBMyBV5hnY4ga8NZB4%2FkUJLTARMUCoEyyH5ILY9KxBJyO4t8UHwQIWLPpp6Y0GABShtPStCcpM%2Fn%2BUKE2aVNoNP4nlr3QR2sDGLlYXB5g8ftGC4aX%2FiH8bSnZgTsuM15kiAwo0d6v6ds%2BfN%2FrvOu7rD2G0KkMWsRC6Crgsw7KBZMrtqS3QkBBO5ysjCcS0uFY1IzRmRGoc9fzTEb3Wpx1v7MiwgP24%2FGHuOw5Y7It%2FuYHd4Lku5HpcEr0bhLKw%2Fb58AoXBCI5XEDOdgH8DDI4RBAQ59AeFjKuQ9Vo%2FwYhvcgU4n4Qvx3NNba4X8g5EBI2RP95zkfVlgwzQ%2FClgZ64Yk4Q%2FUWclTdsw%2B6Wo0QY6pgHD6AOhGxVoLJXAld2JZGBv5X2%2F1Ml8lnK4UGdA3Nl6eqU%2BWF18Vpmsjpd8Gd8q1T2flxoynnzBMgUfhFBu0jw%2B0YNy%2Frg6vmcTRYgNDn6tBszeFUTAv%2BITWoZUFdNNpy0JJz0TFWnpuUnGRULpnIILB%2FvVJNUwCfD8SdMFKA1aUTDFEkjxQ3OEl07KKNq9VvUMbngVQlhldcY6eIEODM9PERxp0bkz&X-Amz-Signature=8902a4c08ce896532a0be52c17f55809534d969bc74933e3a7d79a670fc78c8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Under `xacro:wheel` lets add the caster wheel at the front of the robot. The robot up until now should look like the image below

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPQFXWLY%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCtgiJsDyHNVXHST6LnjPbc43kHmeKanc1A9jHzUeit%2FgIhAIA4Aafy8WWQgLDn%2BF9VfHKeKCsh%2BWIrDtDBNdDvHmTXKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz70nn4%2F4FK3qdjAQQq3AMpd9SJfPK0Be8b8ShNAqgzc%2B3fkRkdwDpNxTpyrb3bPfmdrB1RHrMzVaYHSv3FEG8bRlrfbomjARcyUoZ0SobpKjmGCvI%2B%2BzpP58EtT3R0xvK3iRXAgwHNQxRGb2yG2BF1IE74lCZpiZKxKF%2BNdN%2BnOpX6rg%2BOtm5YcO5pyPLOahEnG1Sg9n9vTZrisHsJ2lisaGAJJrSzG9o9dyKww9%2BcDFpVHGLAAgbn%2FwX1ytPSsag8mMW3gaEFDDW14oO97zOBsuiIRQw7hxfMcfkAlNfaaKxxL8MVQlMt%2F8oaEgg8y%2FBSK2sWQxRc5mseezMKMrBkYRZpdxwbaYjYMdkX2IaQzoRoXFjP8PwqNYjEPW8X1XUySfDIA4Hxf2s9sRfohwzkb%2F1gJwhGB1GLcmez54znT0R5HmzjnnjVOCgmh0y6IRSp9AirkTGhGwF4hDbAY3Bm1xwJSXbAG59nH9vEwdxR7tBQD5nXR1EKcJhtz9joDYFL1vJhZFfP7zuxi2ALC0oFPFKBCMSdaos5isOESNCx8p3J1dPWWlJNJWK9HhLWnLhsxett20guxELTzanUo7QlvY2D8Bj7Gq0yjX8I0sYn25wFZjPwBavxYDTwveGXSouLlLHM%2FSTxGonDMjDNpqjRBjqkAUKGwtIqoWfhuB5U9njIex3tVXVNCL7XcBa5U%2FQDcC4tF2SDGXJk8NngYn4Qt6PS61A3WHpcvrR9pDsYfY3YwsJ8kEeHAt60lrMcY2IQFQ90mSXwgs2rPb1cgzI%2FoSP%2BXhab2GLJiFnMcoYe0WwLK%2Bf1VctINiA8MkYM2Bi%2BNMeqFYt8NHGxk279wdx7HSbFZnX0lnzZGf2sr7iT01x2qM9mR2Na&X-Amz-Signature=e3ef066746c9303026573a3933cdae2a399266fdb06bdd19ef2c3aef25bde1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FCGPUSX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEMJzZMNC%2Bu79RhFEStb7udJ7%2FZT3E6RHgW3Y3REadLDAiBMdwixOniDAO%2Fu2YnYo8vg%2FwUIHFtuMKEVozZVjFflYiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBAxQkMyxb1KTBo9cKtwDyAN25tzFyulX1LKyqPuj5UVXna2022AqlhLTyQA6HYyWua94%2FaiZrjKRkGAE9QWbe6Q9zJgZZXe1WgobjnNex35lmUPiko1uqaPLTlBSQv%2BE%2BRepg%2BuGEEmkzxwH3xPK8%2BHqVfbpS%2F6qFvq4jlNgqYxRnM%2FCNU2vHoxhNwsRXIQL6vzE%2FIHPMCUU7sn18%2FS51QjvPeUg0eE9tqJS4SJgyDpzDnPAahprcDNZUZ9nfyKLHcuX9kVPjZBoP3ZkVfhiX%2BsN%2FmYSgGygiHOIhSs02kdlngeBMyBV5hnY4ga8NZB4%2FkUJLTARMUCoEyyH5ILY9KxBJyO4t8UHwQIWLPpp6Y0GABShtPStCcpM%2Fn%2BUKE2aVNoNP4nlr3QR2sDGLlYXB5g8ftGC4aX%2FiH8bSnZgTsuM15kiAwo0d6v6ds%2BfN%2FrvOu7rD2G0KkMWsRC6Crgsw7KBZMrtqS3QkBBO5ysjCcS0uFY1IzRmRGoc9fzTEb3Wpx1v7MiwgP24%2FGHuOw5Y7It%2FuYHd4Lku5HpcEr0bhLKw%2Fb58AoXBCI5XEDOdgH8DDI4RBAQ59AeFjKuQ9Vo%2FwYhvcgU4n4Qvx3NNba4X8g5EBI2RP95zkfVlgwzQ%2FClgZ64Yk4Q%2FUWclTdsw%2B6Wo0QY6pgHD6AOhGxVoLJXAld2JZGBv5X2%2F1Ml8lnK4UGdA3Nl6eqU%2BWF18Vpmsjpd8Gd8q1T2flxoynnzBMgUfhFBu0jw%2B0YNy%2Frg6vmcTRYgNDn6tBszeFUTAv%2BITWoZUFdNNpy0JJz0TFWnpuUnGRULpnIILB%2FvVJNUwCfD8SdMFKA1aUTDFEkjxQ3OEl07KKNq9VvUMbngVQlhldcY6eIEODM9PERxp0bkz&X-Amz-Signature=67b1879af9816e9082c30d5c5ef1b9909981deac206425cfb46a2c71e0bbb0ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}code up until this point{{< /markdownify >}}</summary>
  
<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOFWM5V%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCJoT9%2B3cOiX4tJZDwRhPpz%2FAdiKk3MFKKZ4E4lM%2Fc4OAIgIEkfjT3QQww3hGH0zOylRtj3RmIR%2FqFLPL7K4GD6pdkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVuXp8dL9ZzDNiZGCrcA8gpNYmMjptpX0QJj%2B1Ev6sb5OUhOQFxENIP8Vw%2Bar%2FMRIP5LrXc%2BBWL%2FVxsd%2FTBVFr1POu0WIB1E1nsQIL%2BhizmtGKBDo2sZK4wPusIcYciMRyadqgCRz1jFG8%2FHHavUgRuwI4F4Ghaqq1MFHVD47lJd0Ph7smdbdYch75Mbnecimxj4%2FoQxSMDNy5tAUtZ0UnSkY9uI8i6PC1T%2BBgcqlkY4Lv8LiXDyBswLEIGrTFggc%2FSAFITDBxIG%2FTVdxlMtn4umiWMPafYmqNsK4vaFQIYn8PfwmBdYyoV9M3szyPoiKFB78EXUW7ycYHHExJB5qLJ9JvQl9v2YpFl%2FRxkqxoeSY8m%2FRSrRjX7AiaYqdBlGHd2i3UTfi0cLnIEKZUnuT3NLpnMOa%2BFIHW7BMVJkcYiMnSNgoClbOz8i0A3jl2HD%2BYZ1vHpEUfFAvvBeSD41BV3f7g8mIe4BGnM9%2FlasWppT1nTeKY6v4C6FqQr8XHbpubaM%2BpHe4zt7ydTVwXDXrS4%2B3kEaPbUOVi8tZujUhka4rGODiyyi7nCU6MYo1QBx5alI1O4WKR%2FEanpXm4GZyf%2FPohKOldhw4FTqFu4usfTVfcPPZqVBfouPHdtb%2BsQN6RUPKyJq%2B1pQpdFMJemqNEGOqUB5hiR03napwpY1bG26pjtKSF78%2FMF8MA7w%2FInMRjy8obAVEWAhRSJlb2KZaA%2BYCQFOmGwwiD3r8b37Qa93v9oYSJcZ8w4KV%2FQELGboqXPlhHFgqcUyllz6dbHmiOacXLT3b6ZmuZrLlPSwHt3L4yzIBnsXpLRZFOJXsK3%2Fp2vf6Ul8V0Blu7IkYSOvdhlvrEWXehQEstqZ0IMMZhlxrHKUo%2F57A2d&X-Amz-Signature=e78244e5cb76f0f6905f0037f7e8103def506c40886a7b8b90ff49126bb3d801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

</details>



### Adding Collision and Inertia

Next lets add collision and inertia to our robot. These attributes will be used in the robot simulator later in this guide.

To start lets make some `xacro:macro` to avoid repetitive code to make box, cylinder, and sphere inertia.

Place this under the constants section.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FCGPUSX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEMJzZMNC%2Bu79RhFEStb7udJ7%2FZT3E6RHgW3Y3REadLDAiBMdwixOniDAO%2Fu2YnYo8vg%2FwUIHFtuMKEVozZVjFflYiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBAxQkMyxb1KTBo9cKtwDyAN25tzFyulX1LKyqPuj5UVXna2022AqlhLTyQA6HYyWua94%2FaiZrjKRkGAE9QWbe6Q9zJgZZXe1WgobjnNex35lmUPiko1uqaPLTlBSQv%2BE%2BRepg%2BuGEEmkzxwH3xPK8%2BHqVfbpS%2F6qFvq4jlNgqYxRnM%2FCNU2vHoxhNwsRXIQL6vzE%2FIHPMCUU7sn18%2FS51QjvPeUg0eE9tqJS4SJgyDpzDnPAahprcDNZUZ9nfyKLHcuX9kVPjZBoP3ZkVfhiX%2BsN%2FmYSgGygiHOIhSs02kdlngeBMyBV5hnY4ga8NZB4%2FkUJLTARMUCoEyyH5ILY9KxBJyO4t8UHwQIWLPpp6Y0GABShtPStCcpM%2Fn%2BUKE2aVNoNP4nlr3QR2sDGLlYXB5g8ftGC4aX%2FiH8bSnZgTsuM15kiAwo0d6v6ds%2BfN%2FrvOu7rD2G0KkMWsRC6Crgsw7KBZMrtqS3QkBBO5ysjCcS0uFY1IzRmRGoc9fzTEb3Wpx1v7MiwgP24%2FGHuOw5Y7It%2FuYHd4Lku5HpcEr0bhLKw%2Fb58AoXBCI5XEDOdgH8DDI4RBAQ59AeFjKuQ9Vo%2FwYhvcgU4n4Qvx3NNba4X8g5EBI2RP95zkfVlgwzQ%2FClgZ64Yk4Q%2FUWclTdsw%2B6Wo0QY6pgHD6AOhGxVoLJXAld2JZGBv5X2%2F1Ml8lnK4UGdA3Nl6eqU%2BWF18Vpmsjpd8Gd8q1T2flxoynnzBMgUfhFBu0jw%2B0YNy%2Frg6vmcTRYgNDn6tBszeFUTAv%2BITWoZUFdNNpy0JJz0TFWnpuUnGRULpnIILB%2FvVJNUwCfD8SdMFKA1aUTDFEkjxQ3OEl07KKNq9VvUMbngVQlhldcY6eIEODM9PERxp0bkz&X-Amz-Signature=760750c0f2a6ebd28c55a74b0975f17f59862399cada8a2a15ddfcabfffc763e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Next go into our `base_link` and add the collision and inertia tags.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-16","18-18"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX3G5THI%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCQ%2F8uGBmGLOemGB671m7j8Sn%2BDYXwPF2O68dUymd49owIhAI7xI3YAVnQq8LAeTW%2BUxkwWZ6nPlUnnw1meO7m2tGd7KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzjFEM6pS0WCylAwsq3AP1PoBPQHW%2Fp2QwqoYdpQUmTJl%2Bk7wA6NIqx9AS8ptcXVVezQfm70iGSIjSY0SefFfdmBSf2XxmXsiiJsZ4frj%2BmKj2O%2F4JGPORU7q3MupcgutVTrBV3986MNG18c%2B3JCv95xLyI0e2p5kLoAu25qC6KRonWBbRsAgAdb8v5UF0VkxEyTU%2FUvql6hT4oyhLrRTl5Ttqm4hCQEciyllvrHhqytDgTkyk1wqBwAgzXpmqSN%2B5PztJjtvyIK%2FBNQIWBhiS3WJt2h0xQ8hxRqqS9k%2FSFXjwiioZfTP%2F4cUMBSNQaqqHm6zL%2BRxqalkL0MgcL33SjGruOvHCehmcgr49ue5xqb44J3SPC%2FzcQedGnV21ObYROBRxcyUeUtW4Uhx1X4oUPn3KlYJ8TKNTcbdclQH%2FHPq1ARd%2BMcS99txoa9BH890SVquGt7Dk9biKjMmRsru%2BtcqpSbBHEfo9fpouA7HA%2BrJoXheVJ0n1X5xIDsxo1yAYhSBuQdVc0v%2BJ7p0R16%2BpMDREJUM7V6dSIs0vS6txhpxBKBL1Z%2BcLTRNyB%2BtZgMfFQEQCpWcd123lm8DnYjIteB0dkcIPpmPqymKWVBZS4JuNRlT9lMfwP2eRO3oFGH3S5cuwZrVGrt1XRjD3pqjRBjqkAcKY9h9SH0AFFD5PngbuRxtXMmfpAkOw6ycscB4G8VNI%2B1g%2BXu1LzKYPgSt%2BBaL5hcMVQjz0Na8COtj1ehTvinb6cajog03HOflwTv0Rjf%2F33c8da62SKL7pqPMcTJjvW%2FASQzPxheA2J6Oute7eiopy7DOX9yYwNp8urAw1bx0zwjw0k9NUUimNs9sTf6kh7CukPJBmsrcRjGzJifX6IBKOBc%2BR&X-Amz-Signature=38d1687da10b8cc62fb397f4e5fe75f4d75bb7f4f7e1af4dbbdd52426b359b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-19"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2CDSJXQ%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIH7dIg%2BLs1IcYJqaMpoVrYlJokvvXRDJhm3EBmTRaqy0AiEA%2B1%2FfsHAX8QcQUCidi8jXoAnHRAW2QaET%2Bl4ai%2B6t5kgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPe41byXFNOIlUWnzircA1%2Fgz7G2dVWwUg0xk014guxXVYHEhhb9cnL9DjUhq%2F9z9wjLOrCAVPgwfInDk%2BzFfYFVDD4p5M3oBIjm%2BwXogFDdQ%2FpMfzilgMugTtbphOpBR%2Fs61vZdZrwHMlaKhr3xyEjIn4O%2BxY8ADKXx8L17XQuuUoHvYfsiGdzVl9HbribVRn19Ad%2FYkR9YkP9QwOQTMQnYlCCYYjYIVetGlsyYj5N72prqYSR5be9gj7%2F8N%2FP69By7aPXq8mBNfWc7VuzBoWLsZdfmy8RLGODeTJTx3j5JizuIZgaXxW%2FMjYNQmwKGm8D06WsP%2FGRwxpcCm1Fj7N61OMmMr0Cf6VsM3SpWfvczml4p6azz64Y%2F9x3cFul%2FKxmdQH3MtQyod5OJHrSMF0uqBY%2BpgIL9b%2BGPP%2FJxRdWR%2F7P%2F4%2FbwZj8cH%2FkW3o6UWOwyOZ%2B95cv7xdDMA3aSYhy8k%2F%2B2hrpudh47z8WMiAEIBuZUMe%2F3O0g5ISKReSMGRsjtd7GQ6Of80w6UtqNE5YadSHIa%2FkQLCPb8sxM4Hx6fOEkbo6f6xiVN3gEGvtc1BLZfCmo8hBs8xkhPrDaW5%2B5Ot7nY8DJC%2BVaPtRXlOfdxnKLplVTuR48FB%2F0No%2Ft69a3ispYVqU9V%2BTFzMIenqNEGOqUBw%2FMQZs%2Fu96o%2FaVCapzgX7fe7k1qhLPb3DV2aqfnJ96ZPjsmCRsIuj4Lx86b6MK771cSbaVngJCunt%2ByrBuN9iPJ%2ByRMxkoWWC8%2BR9wpqY%2FripbFKV96Kf0lcYHOa5CE%2FAVmAiSIePWHSpxwd0NF8NV%2FrVWqQXQsmksi6goTchBRTeYuXROSp9PlXDYoQqTQUrI6tP0akVGAdKdpSKL625Ul20y1u&X-Amz-Signature=8000271c0e255a8133f39cae261373201b9e41120c04edd4bb2ce245d9dd137a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

and Same for the caster wheel:

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-19"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EL7X2K%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQClhNTfYyKEuptwjxOTTL8gcmqBCgdZ4%2Bk5hWjG44RliwIhAODs2Mws3FpoXFy1VbSdS7ab34rPJW6OtbMWWOFLP1AjKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdXBd05tQ%2FuHdsrX4q3ANm484VN2mk0bu4Z98iXvGyyUFKiRuSeRK9DMIXmyy4PTfLoz5L8QBPWcaWOeHuDzF7vcu2BMFQjkSw6A%2BNQI9QEYzjuWOqHukCPSml%2FYQ5HSPKp8Ys1Y8Vq9WO%2FQ09gNS4yl8ZvmnKv%2FjfAvQj8r3mYSVziR3%2Fmn71poMhWWmSmh%2Fa0B4%2FQnWsz0TIgKAUPGl%2FurnJVRDSr2kcLLjRjPqsiaxF0DiTKjJ1tzmPMNU%2Bcx%2F%2F8cB7OtRPzXOefLVR8xgpUzU4d8rqjb7tNHpDmQPpS9uWHrqeFpWpyehP72sUtFNiVfh40jeJ%2F%2BG%2FrgMW1Y74owwWRHFg0NhkNByPxxUaqkBc%2BiAbOCMa7R0yZ7SCFJhiWY2H6fESRQNPPH6CD6yzMbmraOeTKVttoS9fV8RNfswgr87NpEU%2B5B%2F87rOWa6cQ1%2F%2BOhrtYnshrsB%2F1JMg6d46QzjGiJMMxB5V2JKXeeGM7j96TlaH41Q%2Blw8i4Y%2B0e%2BHbX2s4WmWP5HTDC8NJbTiiEcj02w9BNsxhaKkkZ32tBUtu1%2BTZOt0ACCWBYre3IUdxmqtOryrlWseHRWSfEcD%2BEJBmu4BJ%2FQFOETqvrpzohqsmsNFTX1X7dS7XGlSt6K2oDttyKCeLwljDrpqjRBjqkATE26JtJdsNUZjd68lS918TTOzyv2qkTfK9fNOvgBF82V6HrRNvaW87K3SlTKUrqC2JEETbNn%2F3Y%2F8lXhvQYi5SyvlnjZFaJ84vbOuc%2F2LTpcLP0ZLgAJoWJJyDgUGZDccXCBL9i%2Fy62195qGfUInGOhM6k%2BI12lTqZHyZS7qbwAvbjZAkay5kGpC3I82RxywsvT3Qh9yo91kOXn%2FEOGW79lX1FY&X-Amz-Signature=d2c1c7033b894a8ff76c47514b3afd244fe8c39ef1bf042a06ccbf684143a14b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FCGPUSX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEMJzZMNC%2Bu79RhFEStb7udJ7%2FZT3E6RHgW3Y3REadLDAiBMdwixOniDAO%2Fu2YnYo8vg%2FwUIHFtuMKEVozZVjFflYiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBAxQkMyxb1KTBo9cKtwDyAN25tzFyulX1LKyqPuj5UVXna2022AqlhLTyQA6HYyWua94%2FaiZrjKRkGAE9QWbe6Q9zJgZZXe1WgobjnNex35lmUPiko1uqaPLTlBSQv%2BE%2BRepg%2BuGEEmkzxwH3xPK8%2BHqVfbpS%2F6qFvq4jlNgqYxRnM%2FCNU2vHoxhNwsRXIQL6vzE%2FIHPMCUU7sn18%2FS51QjvPeUg0eE9tqJS4SJgyDpzDnPAahprcDNZUZ9nfyKLHcuX9kVPjZBoP3ZkVfhiX%2BsN%2FmYSgGygiHOIhSs02kdlngeBMyBV5hnY4ga8NZB4%2FkUJLTARMUCoEyyH5ILY9KxBJyO4t8UHwQIWLPpp6Y0GABShtPStCcpM%2Fn%2BUKE2aVNoNP4nlr3QR2sDGLlYXB5g8ftGC4aX%2FiH8bSnZgTsuM15kiAwo0d6v6ds%2BfN%2FrvOu7rD2G0KkMWsRC6Crgsw7KBZMrtqS3QkBBO5ysjCcS0uFY1IzRmRGoc9fzTEb3Wpx1v7MiwgP24%2FGHuOw5Y7It%2FuYHd4Lku5HpcEr0bhLKw%2Fb58AoXBCI5XEDOdgH8DDI4RBAQ59AeFjKuQ9Vo%2FwYhvcgU4n4Qvx3NNba4X8g5EBI2RP95zkfVlgwzQ%2FClgZ64Yk4Q%2FUWclTdsw%2B6Wo0QY6pgHD6AOhGxVoLJXAld2JZGBv5X2%2F1Ml8lnK4UGdA3Nl6eqU%2BWF18Vpmsjpd8Gd8q1T2flxoynnzBMgUfhFBu0jw%2B0YNy%2Frg6vmcTRYgNDn6tBszeFUTAv%2BITWoZUFdNNpy0JJz0TFWnpuUnGRULpnIILB%2FvVJNUwCfD8SdMFKA1aUTDFEkjxQ3OEl07KKNq9VvUMbngVQlhldcY6eIEODM9PERxp0bkz&X-Amz-Signature=9adbcd31d55d807772728ae645b63a54c27b2e06d62aa766d6c6474d3a785dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**final code:**{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FCGPUSX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEMJzZMNC%2Bu79RhFEStb7udJ7%2FZT3E6RHgW3Y3REadLDAiBMdwixOniDAO%2Fu2YnYo8vg%2FwUIHFtuMKEVozZVjFflYiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBAxQkMyxb1KTBo9cKtwDyAN25tzFyulX1LKyqPuj5UVXna2022AqlhLTyQA6HYyWua94%2FaiZrjKRkGAE9QWbe6Q9zJgZZXe1WgobjnNex35lmUPiko1uqaPLTlBSQv%2BE%2BRepg%2BuGEEmkzxwH3xPK8%2BHqVfbpS%2F6qFvq4jlNgqYxRnM%2FCNU2vHoxhNwsRXIQL6vzE%2FIHPMCUU7sn18%2FS51QjvPeUg0eE9tqJS4SJgyDpzDnPAahprcDNZUZ9nfyKLHcuX9kVPjZBoP3ZkVfhiX%2BsN%2FmYSgGygiHOIhSs02kdlngeBMyBV5hnY4ga8NZB4%2FkUJLTARMUCoEyyH5ILY9KxBJyO4t8UHwQIWLPpp6Y0GABShtPStCcpM%2Fn%2BUKE2aVNoNP4nlr3QR2sDGLlYXB5g8ftGC4aX%2FiH8bSnZgTsuM15kiAwo0d6v6ds%2BfN%2FrvOu7rD2G0KkMWsRC6Crgsw7KBZMrtqS3QkBBO5ysjCcS0uFY1IzRmRGoc9fzTEb3Wpx1v7MiwgP24%2FGHuOw5Y7It%2FuYHd4Lku5HpcEr0bhLKw%2Fb58AoXBCI5XEDOdgH8DDI4RBAQ59AeFjKuQ9Vo%2FwYhvcgU4n4Qvx3NNba4X8g5EBI2RP95zkfVlgwzQ%2FClgZ64Yk4Q%2FUWclTdsw%2B6Wo0QY6pgHD6AOhGxVoLJXAld2JZGBv5X2%2F1Ml8lnK4UGdA3Nl6eqU%2BWF18Vpmsjpd8Gd8q1T2flxoynnzBMgUfhFBu0jw%2B0YNy%2Frg6vmcTRYgNDn6tBszeFUTAv%2BITWoZUFdNNpy0JJz0TFWnpuUnGRULpnIILB%2FvVJNUwCfD8SdMFKA1aUTDFEkjxQ3OEl07KKNq9VvUMbngVQlhldcY6eIEODM9PERxp0bkz&X-Amz-Signature=ac9c07fdd2ffef8f4ee5a41edd68399feb895691fa2088cd5746ccf428f05175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}


#### Outputs:

| **Name**             | **Type** |
| -------------------- | -------- |
| `/tf`                |          |
| `/robot_description` |          |

#### Params:

| **Name**            | **Type** |
| ------------------- | -------- |
| `robot_description` | file     |
| `use_sim_time`      | bool     |

#### description:

Node that takes in the `urdf` and puts it into ROS

Takes 2 major inputs:

- `urdf` file and publishes all transforms in the `/tf` topic
- `/joint_states` topic that takes in all the states of joints in the `urdf`

{{% /alert %}}

{{% alert icon=”👾” context="success" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MZ4G2S%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDU5KCU63bIfDig0HpbMc8LYT%2FK2a5krFH9NwGyX7D05AiAI0x7Vn6ZoGZnekRYz4oAl2k4E9pDF1KQk%2BVh8fa14tyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXZOHUU%2B2mX054aaKtwDuTRpi67xnGyycvDVHHfJuZczZNEkAzaXQ0r3TYPk8Vxxx0DLJ%2FElIAgdNDLbirfsN%2FwqlDBFVpXjG3EIgFit%2B7yoTwiYv1NKHV4py6rxjP74Aac4a%2F2c0VfPM%2Fx4LJUaafjJoFXnK3%2BFOO%2FAoS2I20dN68C1FY783VeFjJQyi640IWD2v1tTwCq%2FZP8e3xJZV2H5c%2BfX5y%2F8rgC1fD%2Fs8hbZR2VtedETc%2FqaYWiXaJGLO4Ua5N7pFnYQQ78JZ6odzwS%2FvyGBiDeVLmM65LUFHGb4jZAacL9HEQ0DGhGH76d4f3EnUOylwBhueTYu8eAR8dGZ5d8Xhtm7%2FBCwIXwXJv6%2F5XRiAE8YXWAzGm06ujBu6y6dMQD%2Bw40LmsOEE2r7s3nke1pyn9WylC7n29LODIriP4RZBnIn2fFKdzmLeo0QqVCS4NwmfJ5FfSCeKlPBSj6Jm9uqBg%2FlkHAoIqm3W79l4e7%2FaA9dV%2FmXHREdddBASCPFUSk7Ocd%2FfmeoF1dJUEOrZUjenrJbIzmpz5CLPp3iHe3QElgrp%2BR84tS%2FzPjOHSq5yX45AdbfauRz%2FRCJlwzY9aOUjugSDqg8tyKLBkcv87ZsZ6X6W7A%2FfbhfAQsXhTko99tjzV258PUwh6eo0QY6pgEvZNiwQ3ERTtmlfqQrONMC7Pr6TRGpILfDXTNNZFkc60ntPK8l6NusRfF7ifCCNyxfxBfvq0PhskvXaDdXZ039H1rdX7HnHKYup2stgPU3nTHpg4mbhCtZFv2iWNvF6iu9ZbXlRqFvGjeNbVTvo4frvlPf68KnTgByCYhVAHxyinH6ZiNrW0ieyN4vI8MyxgX53qTugpHLi%2FkLyihDla0ODB5phFDt&X-Amz-Signature=8c56e939f3eddfd409f3d07fa96c224da2a25155dd9666b74848faf89e4ec4c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

| **Name**             | **Type** |
| -------------------- | -------- |
| `/robot_description` |          |

#### Outputs:

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

#### description:

lets you debug your `urdf` to see if all your joints work correctly.

Takes `/robot_description` from `robot_state_publisher` and outputs `/joint_states` with adjustable sliders

designed to be replaced by a physical robot or a simulated robot node

{{% /alert %}}

## Current Node diagram

With the two nodes we are going to make this diagram:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MZ4G2S%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDU5KCU63bIfDig0HpbMc8LYT%2FK2a5krFH9NwGyX7D05AiAI0x7Vn6ZoGZnekRYz4oAl2k4E9pDF1KQk%2BVh8fa14tyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXZOHUU%2B2mX054aaKtwDuTRpi67xnGyycvDVHHfJuZczZNEkAzaXQ0r3TYPk8Vxxx0DLJ%2FElIAgdNDLbirfsN%2FwqlDBFVpXjG3EIgFit%2B7yoTwiYv1NKHV4py6rxjP74Aac4a%2F2c0VfPM%2Fx4LJUaafjJoFXnK3%2BFOO%2FAoS2I20dN68C1FY783VeFjJQyi640IWD2v1tTwCq%2FZP8e3xJZV2H5c%2BfX5y%2F8rgC1fD%2Fs8hbZR2VtedETc%2FqaYWiXaJGLO4Ua5N7pFnYQQ78JZ6odzwS%2FvyGBiDeVLmM65LUFHGb4jZAacL9HEQ0DGhGH76d4f3EnUOylwBhueTYu8eAR8dGZ5d8Xhtm7%2FBCwIXwXJv6%2F5XRiAE8YXWAzGm06ujBu6y6dMQD%2Bw40LmsOEE2r7s3nke1pyn9WylC7n29LODIriP4RZBnIn2fFKdzmLeo0QqVCS4NwmfJ5FfSCeKlPBSj6Jm9uqBg%2FlkHAoIqm3W79l4e7%2FaA9dV%2FmXHREdddBASCPFUSk7Ocd%2FfmeoF1dJUEOrZUjenrJbIzmpz5CLPp3iHe3QElgrp%2BR84tS%2FzPjOHSq5yX45AdbfauRz%2FRCJlwzY9aOUjugSDqg8tyKLBkcv87ZsZ6X6W7A%2FfbhfAQsXhTko99tjzV258PUwh6eo0QY6pgEvZNiwQ3ERTtmlfqQrONMC7Pr6TRGpILfDXTNNZFkc60ntPK8l6NusRfF7ifCCNyxfxBfvq0PhskvXaDdXZ039H1rdX7HnHKYup2stgPU3nTHpg4mbhCtZFv2iWNvF6iu9ZbXlRqFvGjeNbVTvo4frvlPf68KnTgByCYhVAHxyinH6ZiNrW0ieyN4vI8MyxgX53qTugpHLi%2FkLyihDla0ODB5phFDt&X-Amz-Signature=aca30be1c6204356753e9819e96dfff0a476d2939b113e761432dc07d34ef65c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MZ4G2S%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDU5KCU63bIfDig0HpbMc8LYT%2FK2a5krFH9NwGyX7D05AiAI0x7Vn6ZoGZnekRYz4oAl2k4E9pDF1KQk%2BVh8fa14tyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXZOHUU%2B2mX054aaKtwDuTRpi67xnGyycvDVHHfJuZczZNEkAzaXQ0r3TYPk8Vxxx0DLJ%2FElIAgdNDLbirfsN%2FwqlDBFVpXjG3EIgFit%2B7yoTwiYv1NKHV4py6rxjP74Aac4a%2F2c0VfPM%2Fx4LJUaafjJoFXnK3%2BFOO%2FAoS2I20dN68C1FY783VeFjJQyi640IWD2v1tTwCq%2FZP8e3xJZV2H5c%2BfX5y%2F8rgC1fD%2Fs8hbZR2VtedETc%2FqaYWiXaJGLO4Ua5N7pFnYQQ78JZ6odzwS%2FvyGBiDeVLmM65LUFHGb4jZAacL9HEQ0DGhGH76d4f3EnUOylwBhueTYu8eAR8dGZ5d8Xhtm7%2FBCwIXwXJv6%2F5XRiAE8YXWAzGm06ujBu6y6dMQD%2Bw40LmsOEE2r7s3nke1pyn9WylC7n29LODIriP4RZBnIn2fFKdzmLeo0QqVCS4NwmfJ5FfSCeKlPBSj6Jm9uqBg%2FlkHAoIqm3W79l4e7%2FaA9dV%2FmXHREdddBASCPFUSk7Ocd%2FfmeoF1dJUEOrZUjenrJbIzmpz5CLPp3iHe3QElgrp%2BR84tS%2FzPjOHSq5yX45AdbfauRz%2FRCJlwzY9aOUjugSDqg8tyKLBkcv87ZsZ6X6W7A%2FfbhfAQsXhTko99tjzV258PUwh6eo0QY6pgEvZNiwQ3ERTtmlfqQrONMC7Pr6TRGpILfDXTNNZFkc60ntPK8l6NusRfF7ifCCNyxfxBfvq0PhskvXaDdXZ039H1rdX7HnHKYup2stgPU3nTHpg4mbhCtZFv2iWNvF6iu9ZbXlRqFvGjeNbVTvo4frvlPf68KnTgByCYhVAHxyinH6ZiNrW0ieyN4vI8MyxgX53qTugpHLi%2FkLyihDla0ODB5phFDt&X-Amz-Signature=04e2c14fd9d440af61a6d48ebd7dd2db8153ea0885ad4d93fd5e5366c776a719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MZ4G2S%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDU5KCU63bIfDig0HpbMc8LYT%2FK2a5krFH9NwGyX7D05AiAI0x7Vn6ZoGZnekRYz4oAl2k4E9pDF1KQk%2BVh8fa14tyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXZOHUU%2B2mX054aaKtwDuTRpi67xnGyycvDVHHfJuZczZNEkAzaXQ0r3TYPk8Vxxx0DLJ%2FElIAgdNDLbirfsN%2FwqlDBFVpXjG3EIgFit%2B7yoTwiYv1NKHV4py6rxjP74Aac4a%2F2c0VfPM%2Fx4LJUaafjJoFXnK3%2BFOO%2FAoS2I20dN68C1FY783VeFjJQyi640IWD2v1tTwCq%2FZP8e3xJZV2H5c%2BfX5y%2F8rgC1fD%2Fs8hbZR2VtedETc%2FqaYWiXaJGLO4Ua5N7pFnYQQ78JZ6odzwS%2FvyGBiDeVLmM65LUFHGb4jZAacL9HEQ0DGhGH76d4f3EnUOylwBhueTYu8eAR8dGZ5d8Xhtm7%2FBCwIXwXJv6%2F5XRiAE8YXWAzGm06ujBu6y6dMQD%2Bw40LmsOEE2r7s3nke1pyn9WylC7n29LODIriP4RZBnIn2fFKdzmLeo0QqVCS4NwmfJ5FfSCeKlPBSj6Jm9uqBg%2FlkHAoIqm3W79l4e7%2FaA9dV%2FmXHREdddBASCPFUSk7Ocd%2FfmeoF1dJUEOrZUjenrJbIzmpz5CLPp3iHe3QElgrp%2BR84tS%2FzPjOHSq5yX45AdbfauRz%2FRCJlwzY9aOUjugSDqg8tyKLBkcv87ZsZ6X6W7A%2FfbhfAQsXhTko99tjzV258PUwh6eo0QY6pgEvZNiwQ3ERTtmlfqQrONMC7Pr6TRGpILfDXTNNZFkc60ntPK8l6NusRfF7ifCCNyxfxBfvq0PhskvXaDdXZ039H1rdX7HnHKYup2stgPU3nTHpg4mbhCtZFv2iWNvF6iu9ZbXlRqFvGjeNbVTvo4frvlPf68KnTgByCYhVAHxyinH6ZiNrW0ieyN4vI8MyxgX53qTugpHLi%2FkLyihDla0ODB5phFDt&X-Amz-Signature=9690e4a61e64f0443dd8d4858dbcf33467cf532799f1e1f938446f1aae6a3d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PTVMAOG%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIF%2FInvLoQ6fSbzpSfXbbu88bMeGXTpuNtmKT5j4uYpLNAiAqwvteSYqa6reWeVpWBMoN%2BS068L%2FxAJ1T54AXoJDZACqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWrYcNlGnnJRgcLOnKtwDzAYZOykPaJaaBqYskav35jDo40LqVFlm3dXhv66%2BF9be1KUBz7wxXCNRQU%2FCP0IwUjg6gl4xNqh0bIJ%2BLiqirB7H3DqHDMjELuhwyvwgnc61jgqgm4DtjWXDTtQ4m0CLyou77LuNYU1kpddEKkGTVvOb%2FKUcM%2BvIqh9J8ZZHZLb7puJcBVg78rdxExNFm37cpVn28XjllxKbDOzoi%2BhIO66wjJJtEGOh6fHt%2BoL7X%2FCbEXPblM84ytiJ%2BrI8eZTnHml8QLkIyx8nqkJY6pagMpqiKeGPbhI%2FYOWIvhX2INeG2jHs4yaKA7E8D98Jv6ZdrAjfttRgAnK05j%2FvaQGlF1RiOLmk5zygyAdx%2B0oQhobi6CqX4julSVlq2CRNFUOBNV4KGU6sZpSf8%2FyeEA0htXtLdQBGwm0qt3VjshXdNx5SzNbSzoNT3wx4Zw7I97V0QwNrbSTZQMXXnHCLItExsD1XcUu1zPmrXafqH977le6gku8HN6NkcUTPa45teeSfPss%2B1UL7GTfjhfJVypeaQ8fqSJjy1IcN4x1rlmg6Bn44Y%2BrRG%2BFu4N%2FPiVlt6eYNapM9Vih1mFi7sQGV27caxQPPCp1BV%2FH%2Byas3rnsRH%2Bk5Np9hKvzei38tFRQwpaao0QY6pgHX4qqQMcRldvBaDvNqG18AfbRZgw5G%2BQ3uHcngucaxZeWtYovLT%2B8IWv7hBFuxmqzEOBC5wSEnhQ%2FXFF5p3cd5CPE23WjF2IqLKu1KroZK56HG9kUdAXakEHygFkpQ1oGxdTK7rrAx7SBU2ttQg9sLIfwZCKr14W%2FXC067HIKkwLpyS9jiliHgQEL3kVhBQEHxQvmEbTAyEJqCMRM9xdJD8fVVKoDk&X-Amz-Signature=ce7e7f2a4c7767294380d7d0af10d4e84875bae7c67ea9495166d5f7b108a7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MZ4G2S%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDU5KCU63bIfDig0HpbMc8LYT%2FK2a5krFH9NwGyX7D05AiAI0x7Vn6ZoGZnekRYz4oAl2k4E9pDF1KQk%2BVh8fa14tyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXZOHUU%2B2mX054aaKtwDuTRpi67xnGyycvDVHHfJuZczZNEkAzaXQ0r3TYPk8Vxxx0DLJ%2FElIAgdNDLbirfsN%2FwqlDBFVpXjG3EIgFit%2B7yoTwiYv1NKHV4py6rxjP74Aac4a%2F2c0VfPM%2Fx4LJUaafjJoFXnK3%2BFOO%2FAoS2I20dN68C1FY783VeFjJQyi640IWD2v1tTwCq%2FZP8e3xJZV2H5c%2BfX5y%2F8rgC1fD%2Fs8hbZR2VtedETc%2FqaYWiXaJGLO4Ua5N7pFnYQQ78JZ6odzwS%2FvyGBiDeVLmM65LUFHGb4jZAacL9HEQ0DGhGH76d4f3EnUOylwBhueTYu8eAR8dGZ5d8Xhtm7%2FBCwIXwXJv6%2F5XRiAE8YXWAzGm06ujBu6y6dMQD%2Bw40LmsOEE2r7s3nke1pyn9WylC7n29LODIriP4RZBnIn2fFKdzmLeo0QqVCS4NwmfJ5FfSCeKlPBSj6Jm9uqBg%2FlkHAoIqm3W79l4e7%2FaA9dV%2FmXHREdddBASCPFUSk7Ocd%2FfmeoF1dJUEOrZUjenrJbIzmpz5CLPp3iHe3QElgrp%2BR84tS%2FzPjOHSq5yX45AdbfauRz%2FRCJlwzY9aOUjugSDqg8tyKLBkcv87ZsZ6X6W7A%2FfbhfAQsXhTko99tjzV258PUwh6eo0QY6pgEvZNiwQ3ERTtmlfqQrONMC7Pr6TRGpILfDXTNNZFkc60ntPK8l6NusRfF7ifCCNyxfxBfvq0PhskvXaDdXZ039H1rdX7HnHKYup2stgPU3nTHpg4mbhCtZFv2iWNvF6iu9ZbXlRqFvGjeNbVTvo4frvlPf68KnTgByCYhVAHxyinH6ZiNrW0ieyN4vI8MyxgX53qTugpHLi%2FkLyihDla0ODB5phFDt&X-Amz-Signature=cec613ca5a4e726498c777d7b7fe65f7a5b95cbef7f4d14ab975b9fc8b619531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Move config.rviz

<details>
  <summary>{{< markdownify >}}What is rviz?{{< /markdownify >}}</summary>
  
TODO: explain rviz better (say how it is like ros2 echo but visual)

</details>



create `rviz` folder in `mbot_pkg` and move the `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MZ4G2S%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDU5KCU63bIfDig0HpbMc8LYT%2FK2a5krFH9NwGyX7D05AiAI0x7Vn6ZoGZnekRYz4oAl2k4E9pDF1KQk%2BVh8fa14tyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXZOHUU%2B2mX054aaKtwDuTRpi67xnGyycvDVHHfJuZczZNEkAzaXQ0r3TYPk8Vxxx0DLJ%2FElIAgdNDLbirfsN%2FwqlDBFVpXjG3EIgFit%2B7yoTwiYv1NKHV4py6rxjP74Aac4a%2F2c0VfPM%2Fx4LJUaafjJoFXnK3%2BFOO%2FAoS2I20dN68C1FY783VeFjJQyi640IWD2v1tTwCq%2FZP8e3xJZV2H5c%2BfX5y%2F8rgC1fD%2Fs8hbZR2VtedETc%2FqaYWiXaJGLO4Ua5N7pFnYQQ78JZ6odzwS%2FvyGBiDeVLmM65LUFHGb4jZAacL9HEQ0DGhGH76d4f3EnUOylwBhueTYu8eAR8dGZ5d8Xhtm7%2FBCwIXwXJv6%2F5XRiAE8YXWAzGm06ujBu6y6dMQD%2Bw40LmsOEE2r7s3nke1pyn9WylC7n29LODIriP4RZBnIn2fFKdzmLeo0QqVCS4NwmfJ5FfSCeKlPBSj6Jm9uqBg%2FlkHAoIqm3W79l4e7%2FaA9dV%2FmXHREdddBASCPFUSk7Ocd%2FfmeoF1dJUEOrZUjenrJbIzmpz5CLPp3iHe3QElgrp%2BR84tS%2FzPjOHSq5yX45AdbfauRz%2FRCJlwzY9aOUjugSDqg8tyKLBkcv87ZsZ6X6W7A%2FfbhfAQsXhTko99tjzV258PUwh6eo0QY6pgEvZNiwQ3ERTtmlfqQrONMC7Pr6TRGpILfDXTNNZFkc60ntPK8l6NusRfF7ifCCNyxfxBfvq0PhskvXaDdXZ039H1rdX7HnHKYup2stgPU3nTHpg4mbhCtZFv2iWNvF6iu9ZbXlRqFvGjeNbVTvo4frvlPf68KnTgByCYhVAHxyinH6ZiNrW0ieyN4vI8MyxgX53qTugpHLi%2FkLyihDla0ODB5phFDt&X-Amz-Signature=6773b01c688b2a28af8a334f780deb647625537c9dd67fe9304e9e73c941cc31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MZ4G2S%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDU5KCU63bIfDig0HpbMc8LYT%2FK2a5krFH9NwGyX7D05AiAI0x7Vn6ZoGZnekRYz4oAl2k4E9pDF1KQk%2BVh8fa14tyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXZOHUU%2B2mX054aaKtwDuTRpi67xnGyycvDVHHfJuZczZNEkAzaXQ0r3TYPk8Vxxx0DLJ%2FElIAgdNDLbirfsN%2FwqlDBFVpXjG3EIgFit%2B7yoTwiYv1NKHV4py6rxjP74Aac4a%2F2c0VfPM%2Fx4LJUaafjJoFXnK3%2BFOO%2FAoS2I20dN68C1FY783VeFjJQyi640IWD2v1tTwCq%2FZP8e3xJZV2H5c%2BfX5y%2F8rgC1fD%2Fs8hbZR2VtedETc%2FqaYWiXaJGLO4Ua5N7pFnYQQ78JZ6odzwS%2FvyGBiDeVLmM65LUFHGb4jZAacL9HEQ0DGhGH76d4f3EnUOylwBhueTYu8eAR8dGZ5d8Xhtm7%2FBCwIXwXJv6%2F5XRiAE8YXWAzGm06ujBu6y6dMQD%2Bw40LmsOEE2r7s3nke1pyn9WylC7n29LODIriP4RZBnIn2fFKdzmLeo0QqVCS4NwmfJ5FfSCeKlPBSj6Jm9uqBg%2FlkHAoIqm3W79l4e7%2FaA9dV%2FmXHREdddBASCPFUSk7Ocd%2FfmeoF1dJUEOrZUjenrJbIzmpz5CLPp3iHe3QElgrp%2BR84tS%2FzPjOHSq5yX45AdbfauRz%2FRCJlwzY9aOUjugSDqg8tyKLBkcv87ZsZ6X6W7A%2FfbhfAQsXhTko99tjzV258PUwh6eo0QY6pgEvZNiwQ3ERTtmlfqQrONMC7Pr6TRGpILfDXTNNZFkc60ntPK8l6NusRfF7ifCCNyxfxBfvq0PhskvXaDdXZ039H1rdX7HnHKYup2stgPU3nTHpg4mbhCtZFv2iWNvF6iu9ZbXlRqFvGjeNbVTvo4frvlPf68KnTgByCYhVAHxyinH6ZiNrW0ieyN4vI8MyxgX53qTugpHLi%2FkLyihDla0ODB5phFDt&X-Amz-Signature=1cbdfbead57ab6ad27f7b5194575e1905b0d3fb85632334344ec9296fdce32af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
  <summary>{{< markdownify >}}What is in this launch file?{{< /markdownify >}}</summary>
  
[launch files guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/launch-files/)

Launch files are just a scripted way of running multiple ROS nodes at the same time instead of opining multiple terminals.

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

```python "3-6","6-6","6-13","24-24"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MZ4G2S%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDU5KCU63bIfDig0HpbMc8LYT%2FK2a5krFH9NwGyX7D05AiAI0x7Vn6ZoGZnekRYz4oAl2k4E9pDF1KQk%2BVh8fa14tyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXZOHUU%2B2mX054aaKtwDuTRpi67xnGyycvDVHHfJuZczZNEkAzaXQ0r3TYPk8Vxxx0DLJ%2FElIAgdNDLbirfsN%2FwqlDBFVpXjG3EIgFit%2B7yoTwiYv1NKHV4py6rxjP74Aac4a%2F2c0VfPM%2Fx4LJUaafjJoFXnK3%2BFOO%2FAoS2I20dN68C1FY783VeFjJQyi640IWD2v1tTwCq%2FZP8e3xJZV2H5c%2BfX5y%2F8rgC1fD%2Fs8hbZR2VtedETc%2FqaYWiXaJGLO4Ua5N7pFnYQQ78JZ6odzwS%2FvyGBiDeVLmM65LUFHGb4jZAacL9HEQ0DGhGH76d4f3EnUOylwBhueTYu8eAR8dGZ5d8Xhtm7%2FBCwIXwXJv6%2F5XRiAE8YXWAzGm06ujBu6y6dMQD%2Bw40LmsOEE2r7s3nke1pyn9WylC7n29LODIriP4RZBnIn2fFKdzmLeo0QqVCS4NwmfJ5FfSCeKlPBSj6Jm9uqBg%2FlkHAoIqm3W79l4e7%2FaA9dV%2FmXHREdddBASCPFUSk7Ocd%2FfmeoF1dJUEOrZUjenrJbIzmpz5CLPp3iHe3QElgrp%2BR84tS%2FzPjOHSq5yX45AdbfauRz%2FRCJlwzY9aOUjugSDqg8tyKLBkcv87ZsZ6X6W7A%2FfbhfAQsXhTko99tjzV258PUwh6eo0QY6pgEvZNiwQ3ERTtmlfqQrONMC7Pr6TRGpILfDXTNNZFkc60ntPK8l6NusRfF7ifCCNyxfxBfvq0PhskvXaDdXZ039H1rdX7HnHKYup2stgPU3nTHpg4mbhCtZFv2iWNvF6iu9ZbXlRqFvGjeNbVTvo4frvlPf68KnTgByCYhVAHxyinH6ZiNrW0ieyN4vI8MyxgX53qTugpHLi%2FkLyihDla0ODB5phFDt&X-Amz-Signature=d843eb02500f0fb912396a28a3cc86c841a9ff5933ad8cbe1260efdb257cd8e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MZ4G2S%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDU5KCU63bIfDig0HpbMc8LYT%2FK2a5krFH9NwGyX7D05AiAI0x7Vn6ZoGZnekRYz4oAl2k4E9pDF1KQk%2BVh8fa14tyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXZOHUU%2B2mX054aaKtwDuTRpi67xnGyycvDVHHfJuZczZNEkAzaXQ0r3TYPk8Vxxx0DLJ%2FElIAgdNDLbirfsN%2FwqlDBFVpXjG3EIgFit%2B7yoTwiYv1NKHV4py6rxjP74Aac4a%2F2c0VfPM%2Fx4LJUaafjJoFXnK3%2BFOO%2FAoS2I20dN68C1FY783VeFjJQyi640IWD2v1tTwCq%2FZP8e3xJZV2H5c%2BfX5y%2F8rgC1fD%2Fs8hbZR2VtedETc%2FqaYWiXaJGLO4Ua5N7pFnYQQ78JZ6odzwS%2FvyGBiDeVLmM65LUFHGb4jZAacL9HEQ0DGhGH76d4f3EnUOylwBhueTYu8eAR8dGZ5d8Xhtm7%2FBCwIXwXJv6%2F5XRiAE8YXWAzGm06ujBu6y6dMQD%2Bw40LmsOEE2r7s3nke1pyn9WylC7n29LODIriP4RZBnIn2fFKdzmLeo0QqVCS4NwmfJ5FfSCeKlPBSj6Jm9uqBg%2FlkHAoIqm3W79l4e7%2FaA9dV%2FmXHREdddBASCPFUSk7Ocd%2FfmeoF1dJUEOrZUjenrJbIzmpz5CLPp3iHe3QElgrp%2BR84tS%2FzPjOHSq5yX45AdbfauRz%2FRCJlwzY9aOUjugSDqg8tyKLBkcv87ZsZ6X6W7A%2FfbhfAQsXhTko99tjzV258PUwh6eo0QY6pgEvZNiwQ3ERTtmlfqQrONMC7Pr6TRGpILfDXTNNZFkc60ntPK8l6NusRfF7ifCCNyxfxBfvq0PhskvXaDdXZ039H1rdX7HnHKYup2stgPU3nTHpg4mbhCtZFv2iWNvF6iu9ZbXlRqFvGjeNbVTvo4frvlPf68KnTgByCYhVAHxyinH6ZiNrW0ieyN4vI8MyxgX53qTugpHLi%2FkLyihDla0ODB5phFDt&X-Amz-Signature=843be19aec41e87927b2f18a0d9ec2c19c65186f8568b36abf6b971c228758f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MZ4G2S%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDU5KCU63bIfDig0HpbMc8LYT%2FK2a5krFH9NwGyX7D05AiAI0x7Vn6ZoGZnekRYz4oAl2k4E9pDF1KQk%2BVh8fa14tyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXZOHUU%2B2mX054aaKtwDuTRpi67xnGyycvDVHHfJuZczZNEkAzaXQ0r3TYPk8Vxxx0DLJ%2FElIAgdNDLbirfsN%2FwqlDBFVpXjG3EIgFit%2B7yoTwiYv1NKHV4py6rxjP74Aac4a%2F2c0VfPM%2Fx4LJUaafjJoFXnK3%2BFOO%2FAoS2I20dN68C1FY783VeFjJQyi640IWD2v1tTwCq%2FZP8e3xJZV2H5c%2BfX5y%2F8rgC1fD%2Fs8hbZR2VtedETc%2FqaYWiXaJGLO4Ua5N7pFnYQQ78JZ6odzwS%2FvyGBiDeVLmM65LUFHGb4jZAacL9HEQ0DGhGH76d4f3EnUOylwBhueTYu8eAR8dGZ5d8Xhtm7%2FBCwIXwXJv6%2F5XRiAE8YXWAzGm06ujBu6y6dMQD%2Bw40LmsOEE2r7s3nke1pyn9WylC7n29LODIriP4RZBnIn2fFKdzmLeo0QqVCS4NwmfJ5FfSCeKlPBSj6Jm9uqBg%2FlkHAoIqm3W79l4e7%2FaA9dV%2FmXHREdddBASCPFUSk7Ocd%2FfmeoF1dJUEOrZUjenrJbIzmpz5CLPp3iHe3QElgrp%2BR84tS%2FzPjOHSq5yX45AdbfauRz%2FRCJlwzY9aOUjugSDqg8tyKLBkcv87ZsZ6X6W7A%2FfbhfAQsXhTko99tjzV258PUwh6eo0QY6pgEvZNiwQ3ERTtmlfqQrONMC7Pr6TRGpILfDXTNNZFkc60ntPK8l6NusRfF7ifCCNyxfxBfvq0PhskvXaDdXZ039H1rdX7HnHKYup2stgPU3nTHpg4mbhCtZFv2iWNvF6iu9ZbXlRqFvGjeNbVTvo4frvlPf68KnTgByCYhVAHxyinH6ZiNrW0ieyN4vI8MyxgX53qTugpHLi%2FkLyihDla0ODB5phFDt&X-Amz-Signature=2f652a1813017222620042655b662981da472bdcf9f4a142c173ee53fc5930b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


