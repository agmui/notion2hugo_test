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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQ6ZL6C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH7OKTeOQv087xkX8MLpNFYVnMfN%2Fu55pzQbSgM1UkQ5AiBuEM7ajgWudxoDJ9G7PMFN2EOVRaz8B9J7DITOlHgOESr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMMBNwZrByO5hdefZoKtwD3pGZgwvtSOt2PwMQGHPNQdLzxFr1DsdUZ31BN7jtAoNO%2FbzTvAqNP288Ud8Vl4VEEF0Kbals13c9tBs5t3xox8eDg9i8X0GKDyE5%2FkPEM%2FyBu%2FnOve2XNzLxlKfkgS9pGTiaYjx4NkhdM3Z6rnBrhWlqPaufsE0jpMhdGmgHzEjTfLea0bQANp%2BsT3soDCzEO30c5VH2mrdWczfVkN67kJ1%2Fo0ALrQquiOGi%2F9wTGOBAcRXtRXZMHruSjWwgv3iig2HioMl1Z6CYJvVrMC%2F9eZJv%2BwXGlGeMr1HAf08T7t49fB8mYq3wTC5J9QgmWDD0zsuuuFgTW%2Fh7VBmko7MIzxHEO12BKAYmLW9s%2Fd0sKGcHvOI%2B%2FWM%2BVXOBLFIndyzINRmmINv1F8Jc7%2BrlJGsUNEc9XYXa3q5fo8I7jGEoELtv4R235YUF8qn5WiVDZGaxDNIEVYqDNX4dWbGtY0N1Fc7cfxc0JdMCiiwxRPvbz8yrA4WmDQXW9p4K4CxlxFaaTaoU5N1J2DGcnjyf0Ym4zH44GnW35nthFiMLTX1ZQac0XhzZvnxovItzx1AOpuMwY8OVJt8HMnamAvlIIWORn6lkG3d3L%2F9WyspGvIRbCeFxlLKDLDmogY921T8wwaqPxAY6pgHPfRtmhRdJTyipkaNAVVU4mO0VRfNG32jxTbdakLul%2FOLPMoBI6GfcM2%2BW6WXAGxwPYDrnR5%2FrnBXhWsYsDbMIqefUA5qNSqrc2s%2BxoGj3WeE5vpCHXXFmpVV4XEKIuH6wzDxQQnANgIMUiuJJfAWtTrJA1sqLE1ZXilvw141JVPehzxQfYfBFZaXLZFYABCObs3cmTJnfeL36ryrsHFVk0rPPriPZ&X-Amz-Signature=8961f62d930210f20cc2926a8fb819c705b8ced6c10dfb324064baf21d43ef23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQ6ZL6C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH7OKTeOQv087xkX8MLpNFYVnMfN%2Fu55pzQbSgM1UkQ5AiBuEM7ajgWudxoDJ9G7PMFN2EOVRaz8B9J7DITOlHgOESr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMMBNwZrByO5hdefZoKtwD3pGZgwvtSOt2PwMQGHPNQdLzxFr1DsdUZ31BN7jtAoNO%2FbzTvAqNP288Ud8Vl4VEEF0Kbals13c9tBs5t3xox8eDg9i8X0GKDyE5%2FkPEM%2FyBu%2FnOve2XNzLxlKfkgS9pGTiaYjx4NkhdM3Z6rnBrhWlqPaufsE0jpMhdGmgHzEjTfLea0bQANp%2BsT3soDCzEO30c5VH2mrdWczfVkN67kJ1%2Fo0ALrQquiOGi%2F9wTGOBAcRXtRXZMHruSjWwgv3iig2HioMl1Z6CYJvVrMC%2F9eZJv%2BwXGlGeMr1HAf08T7t49fB8mYq3wTC5J9QgmWDD0zsuuuFgTW%2Fh7VBmko7MIzxHEO12BKAYmLW9s%2Fd0sKGcHvOI%2B%2FWM%2BVXOBLFIndyzINRmmINv1F8Jc7%2BrlJGsUNEc9XYXa3q5fo8I7jGEoELtv4R235YUF8qn5WiVDZGaxDNIEVYqDNX4dWbGtY0N1Fc7cfxc0JdMCiiwxRPvbz8yrA4WmDQXW9p4K4CxlxFaaTaoU5N1J2DGcnjyf0Ym4zH44GnW35nthFiMLTX1ZQac0XhzZvnxovItzx1AOpuMwY8OVJt8HMnamAvlIIWORn6lkG3d3L%2F9WyspGvIRbCeFxlLKDLDmogY921T8wwaqPxAY6pgHPfRtmhRdJTyipkaNAVVU4mO0VRfNG32jxTbdakLul%2FOLPMoBI6GfcM2%2BW6WXAGxwPYDrnR5%2FrnBXhWsYsDbMIqefUA5qNSqrc2s%2BxoGj3WeE5vpCHXXFmpVV4XEKIuH6wzDxQQnANgIMUiuJJfAWtTrJA1sqLE1ZXilvw141JVPehzxQfYfBFZaXLZFYABCObs3cmTJnfeL36ryrsHFVk0rPPriPZ&X-Amz-Signature=beb7696a8775d6940fbe30de8268da5d7b13b9d749d2d7bec8c452d89b5ef7ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQ6ZL6C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH7OKTeOQv087xkX8MLpNFYVnMfN%2Fu55pzQbSgM1UkQ5AiBuEM7ajgWudxoDJ9G7PMFN2EOVRaz8B9J7DITOlHgOESr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMMBNwZrByO5hdefZoKtwD3pGZgwvtSOt2PwMQGHPNQdLzxFr1DsdUZ31BN7jtAoNO%2FbzTvAqNP288Ud8Vl4VEEF0Kbals13c9tBs5t3xox8eDg9i8X0GKDyE5%2FkPEM%2FyBu%2FnOve2XNzLxlKfkgS9pGTiaYjx4NkhdM3Z6rnBrhWlqPaufsE0jpMhdGmgHzEjTfLea0bQANp%2BsT3soDCzEO30c5VH2mrdWczfVkN67kJ1%2Fo0ALrQquiOGi%2F9wTGOBAcRXtRXZMHruSjWwgv3iig2HioMl1Z6CYJvVrMC%2F9eZJv%2BwXGlGeMr1HAf08T7t49fB8mYq3wTC5J9QgmWDD0zsuuuFgTW%2Fh7VBmko7MIzxHEO12BKAYmLW9s%2Fd0sKGcHvOI%2B%2FWM%2BVXOBLFIndyzINRmmINv1F8Jc7%2BrlJGsUNEc9XYXa3q5fo8I7jGEoELtv4R235YUF8qn5WiVDZGaxDNIEVYqDNX4dWbGtY0N1Fc7cfxc0JdMCiiwxRPvbz8yrA4WmDQXW9p4K4CxlxFaaTaoU5N1J2DGcnjyf0Ym4zH44GnW35nthFiMLTX1ZQac0XhzZvnxovItzx1AOpuMwY8OVJt8HMnamAvlIIWORn6lkG3d3L%2F9WyspGvIRbCeFxlLKDLDmogY921T8wwaqPxAY6pgHPfRtmhRdJTyipkaNAVVU4mO0VRfNG32jxTbdakLul%2FOLPMoBI6GfcM2%2BW6WXAGxwPYDrnR5%2FrnBXhWsYsDbMIqefUA5qNSqrc2s%2BxoGj3WeE5vpCHXXFmpVV4XEKIuH6wzDxQQnANgIMUiuJJfAWtTrJA1sqLE1ZXilvw141JVPehzxQfYfBFZaXLZFYABCObs3cmTJnfeL36ryrsHFVk0rPPriPZ&X-Amz-Signature=dd4fb6ac991729e6ee2e0748bf9538aad164e5a3f7b9e97bf4bc8063f3102340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQ6ZL6C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH7OKTeOQv087xkX8MLpNFYVnMfN%2Fu55pzQbSgM1UkQ5AiBuEM7ajgWudxoDJ9G7PMFN2EOVRaz8B9J7DITOlHgOESr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMMBNwZrByO5hdefZoKtwD3pGZgwvtSOt2PwMQGHPNQdLzxFr1DsdUZ31BN7jtAoNO%2FbzTvAqNP288Ud8Vl4VEEF0Kbals13c9tBs5t3xox8eDg9i8X0GKDyE5%2FkPEM%2FyBu%2FnOve2XNzLxlKfkgS9pGTiaYjx4NkhdM3Z6rnBrhWlqPaufsE0jpMhdGmgHzEjTfLea0bQANp%2BsT3soDCzEO30c5VH2mrdWczfVkN67kJ1%2Fo0ALrQquiOGi%2F9wTGOBAcRXtRXZMHruSjWwgv3iig2HioMl1Z6CYJvVrMC%2F9eZJv%2BwXGlGeMr1HAf08T7t49fB8mYq3wTC5J9QgmWDD0zsuuuFgTW%2Fh7VBmko7MIzxHEO12BKAYmLW9s%2Fd0sKGcHvOI%2B%2FWM%2BVXOBLFIndyzINRmmINv1F8Jc7%2BrlJGsUNEc9XYXa3q5fo8I7jGEoELtv4R235YUF8qn5WiVDZGaxDNIEVYqDNX4dWbGtY0N1Fc7cfxc0JdMCiiwxRPvbz8yrA4WmDQXW9p4K4CxlxFaaTaoU5N1J2DGcnjyf0Ym4zH44GnW35nthFiMLTX1ZQac0XhzZvnxovItzx1AOpuMwY8OVJt8HMnamAvlIIWORn6lkG3d3L%2F9WyspGvIRbCeFxlLKDLDmogY921T8wwaqPxAY6pgHPfRtmhRdJTyipkaNAVVU4mO0VRfNG32jxTbdakLul%2FOLPMoBI6GfcM2%2BW6WXAGxwPYDrnR5%2FrnBXhWsYsDbMIqefUA5qNSqrc2s%2BxoGj3WeE5vpCHXXFmpVV4XEKIuH6wzDxQQnANgIMUiuJJfAWtTrJA1sqLE1ZXilvw141JVPehzxQfYfBFZaXLZFYABCObs3cmTJnfeL36ryrsHFVk0rPPriPZ&X-Amz-Signature=ff8b973fa97432afe39a4c72358780638eecd5ea6d34cc453089fb169d9ca944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQ6ZL6C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH7OKTeOQv087xkX8MLpNFYVnMfN%2Fu55pzQbSgM1UkQ5AiBuEM7ajgWudxoDJ9G7PMFN2EOVRaz8B9J7DITOlHgOESr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMMBNwZrByO5hdefZoKtwD3pGZgwvtSOt2PwMQGHPNQdLzxFr1DsdUZ31BN7jtAoNO%2FbzTvAqNP288Ud8Vl4VEEF0Kbals13c9tBs5t3xox8eDg9i8X0GKDyE5%2FkPEM%2FyBu%2FnOve2XNzLxlKfkgS9pGTiaYjx4NkhdM3Z6rnBrhWlqPaufsE0jpMhdGmgHzEjTfLea0bQANp%2BsT3soDCzEO30c5VH2mrdWczfVkN67kJ1%2Fo0ALrQquiOGi%2F9wTGOBAcRXtRXZMHruSjWwgv3iig2HioMl1Z6CYJvVrMC%2F9eZJv%2BwXGlGeMr1HAf08T7t49fB8mYq3wTC5J9QgmWDD0zsuuuFgTW%2Fh7VBmko7MIzxHEO12BKAYmLW9s%2Fd0sKGcHvOI%2B%2FWM%2BVXOBLFIndyzINRmmINv1F8Jc7%2BrlJGsUNEc9XYXa3q5fo8I7jGEoELtv4R235YUF8qn5WiVDZGaxDNIEVYqDNX4dWbGtY0N1Fc7cfxc0JdMCiiwxRPvbz8yrA4WmDQXW9p4K4CxlxFaaTaoU5N1J2DGcnjyf0Ym4zH44GnW35nthFiMLTX1ZQac0XhzZvnxovItzx1AOpuMwY8OVJt8HMnamAvlIIWORn6lkG3d3L%2F9WyspGvIRbCeFxlLKDLDmogY921T8wwaqPxAY6pgHPfRtmhRdJTyipkaNAVVU4mO0VRfNG32jxTbdakLul%2FOLPMoBI6GfcM2%2BW6WXAGxwPYDrnR5%2FrnBXhWsYsDbMIqefUA5qNSqrc2s%2BxoGj3WeE5vpCHXXFmpVV4XEKIuH6wzDxQQnANgIMUiuJJfAWtTrJA1sqLE1ZXilvw141JVPehzxQfYfBFZaXLZFYABCObs3cmTJnfeL36ryrsHFVk0rPPriPZ&X-Amz-Signature=f0cf076e95d1ffc57b29688f8f7ad2f4ca26e264a5e4fb96fb70732cd817b2ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQ6ZL6C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH7OKTeOQv087xkX8MLpNFYVnMfN%2Fu55pzQbSgM1UkQ5AiBuEM7ajgWudxoDJ9G7PMFN2EOVRaz8B9J7DITOlHgOESr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMMBNwZrByO5hdefZoKtwD3pGZgwvtSOt2PwMQGHPNQdLzxFr1DsdUZ31BN7jtAoNO%2FbzTvAqNP288Ud8Vl4VEEF0Kbals13c9tBs5t3xox8eDg9i8X0GKDyE5%2FkPEM%2FyBu%2FnOve2XNzLxlKfkgS9pGTiaYjx4NkhdM3Z6rnBrhWlqPaufsE0jpMhdGmgHzEjTfLea0bQANp%2BsT3soDCzEO30c5VH2mrdWczfVkN67kJ1%2Fo0ALrQquiOGi%2F9wTGOBAcRXtRXZMHruSjWwgv3iig2HioMl1Z6CYJvVrMC%2F9eZJv%2BwXGlGeMr1HAf08T7t49fB8mYq3wTC5J9QgmWDD0zsuuuFgTW%2Fh7VBmko7MIzxHEO12BKAYmLW9s%2Fd0sKGcHvOI%2B%2FWM%2BVXOBLFIndyzINRmmINv1F8Jc7%2BrlJGsUNEc9XYXa3q5fo8I7jGEoELtv4R235YUF8qn5WiVDZGaxDNIEVYqDNX4dWbGtY0N1Fc7cfxc0JdMCiiwxRPvbz8yrA4WmDQXW9p4K4CxlxFaaTaoU5N1J2DGcnjyf0Ym4zH44GnW35nthFiMLTX1ZQac0XhzZvnxovItzx1AOpuMwY8OVJt8HMnamAvlIIWORn6lkG3d3L%2F9WyspGvIRbCeFxlLKDLDmogY921T8wwaqPxAY6pgHPfRtmhRdJTyipkaNAVVU4mO0VRfNG32jxTbdakLul%2FOLPMoBI6GfcM2%2BW6WXAGxwPYDrnR5%2FrnBXhWsYsDbMIqefUA5qNSqrc2s%2BxoGj3WeE5vpCHXXFmpVV4XEKIuH6wzDxQQnANgIMUiuJJfAWtTrJA1sqLE1ZXilvw141JVPehzxQfYfBFZaXLZFYABCObs3cmTJnfeL36ryrsHFVk0rPPriPZ&X-Amz-Signature=f1de331e1e456ca57ef8fd29b62b368c6fb6f1ea3aeca64e4bc787ffb72fed92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQ6ZL6C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH7OKTeOQv087xkX8MLpNFYVnMfN%2Fu55pzQbSgM1UkQ5AiBuEM7ajgWudxoDJ9G7PMFN2EOVRaz8B9J7DITOlHgOESr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMMBNwZrByO5hdefZoKtwD3pGZgwvtSOt2PwMQGHPNQdLzxFr1DsdUZ31BN7jtAoNO%2FbzTvAqNP288Ud8Vl4VEEF0Kbals13c9tBs5t3xox8eDg9i8X0GKDyE5%2FkPEM%2FyBu%2FnOve2XNzLxlKfkgS9pGTiaYjx4NkhdM3Z6rnBrhWlqPaufsE0jpMhdGmgHzEjTfLea0bQANp%2BsT3soDCzEO30c5VH2mrdWczfVkN67kJ1%2Fo0ALrQquiOGi%2F9wTGOBAcRXtRXZMHruSjWwgv3iig2HioMl1Z6CYJvVrMC%2F9eZJv%2BwXGlGeMr1HAf08T7t49fB8mYq3wTC5J9QgmWDD0zsuuuFgTW%2Fh7VBmko7MIzxHEO12BKAYmLW9s%2Fd0sKGcHvOI%2B%2FWM%2BVXOBLFIndyzINRmmINv1F8Jc7%2BrlJGsUNEc9XYXa3q5fo8I7jGEoELtv4R235YUF8qn5WiVDZGaxDNIEVYqDNX4dWbGtY0N1Fc7cfxc0JdMCiiwxRPvbz8yrA4WmDQXW9p4K4CxlxFaaTaoU5N1J2DGcnjyf0Ym4zH44GnW35nthFiMLTX1ZQac0XhzZvnxovItzx1AOpuMwY8OVJt8HMnamAvlIIWORn6lkG3d3L%2F9WyspGvIRbCeFxlLKDLDmogY921T8wwaqPxAY6pgHPfRtmhRdJTyipkaNAVVU4mO0VRfNG32jxTbdakLul%2FOLPMoBI6GfcM2%2BW6WXAGxwPYDrnR5%2FrnBXhWsYsDbMIqefUA5qNSqrc2s%2BxoGj3WeE5vpCHXXFmpVV4XEKIuH6wzDxQQnANgIMUiuJJfAWtTrJA1sqLE1ZXilvw141JVPehzxQfYfBFZaXLZFYABCObs3cmTJnfeL36ryrsHFVk0rPPriPZ&X-Amz-Signature=4702bba1b8288cd33d4e75a61b1fb5f8d3bd59b80a9be4659b18be035b686d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQ6ZL6C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH7OKTeOQv087xkX8MLpNFYVnMfN%2Fu55pzQbSgM1UkQ5AiBuEM7ajgWudxoDJ9G7PMFN2EOVRaz8B9J7DITOlHgOESr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMMBNwZrByO5hdefZoKtwD3pGZgwvtSOt2PwMQGHPNQdLzxFr1DsdUZ31BN7jtAoNO%2FbzTvAqNP288Ud8Vl4VEEF0Kbals13c9tBs5t3xox8eDg9i8X0GKDyE5%2FkPEM%2FyBu%2FnOve2XNzLxlKfkgS9pGTiaYjx4NkhdM3Z6rnBrhWlqPaufsE0jpMhdGmgHzEjTfLea0bQANp%2BsT3soDCzEO30c5VH2mrdWczfVkN67kJ1%2Fo0ALrQquiOGi%2F9wTGOBAcRXtRXZMHruSjWwgv3iig2HioMl1Z6CYJvVrMC%2F9eZJv%2BwXGlGeMr1HAf08T7t49fB8mYq3wTC5J9QgmWDD0zsuuuFgTW%2Fh7VBmko7MIzxHEO12BKAYmLW9s%2Fd0sKGcHvOI%2B%2FWM%2BVXOBLFIndyzINRmmINv1F8Jc7%2BrlJGsUNEc9XYXa3q5fo8I7jGEoELtv4R235YUF8qn5WiVDZGaxDNIEVYqDNX4dWbGtY0N1Fc7cfxc0JdMCiiwxRPvbz8yrA4WmDQXW9p4K4CxlxFaaTaoU5N1J2DGcnjyf0Ym4zH44GnW35nthFiMLTX1ZQac0XhzZvnxovItzx1AOpuMwY8OVJt8HMnamAvlIIWORn6lkG3d3L%2F9WyspGvIRbCeFxlLKDLDmogY921T8wwaqPxAY6pgHPfRtmhRdJTyipkaNAVVU4mO0VRfNG32jxTbdakLul%2FOLPMoBI6GfcM2%2BW6WXAGxwPYDrnR5%2FrnBXhWsYsDbMIqefUA5qNSqrc2s%2BxoGj3WeE5vpCHXXFmpVV4XEKIuH6wzDxQQnANgIMUiuJJfAWtTrJA1sqLE1ZXilvw141JVPehzxQfYfBFZaXLZFYABCObs3cmTJnfeL36ryrsHFVk0rPPriPZ&X-Amz-Signature=3baa92a52f7060205bf5e586916584e12620d180ee3b65daf19a29c41e4a1e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQ6ZL6C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH7OKTeOQv087xkX8MLpNFYVnMfN%2Fu55pzQbSgM1UkQ5AiBuEM7ajgWudxoDJ9G7PMFN2EOVRaz8B9J7DITOlHgOESr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMMBNwZrByO5hdefZoKtwD3pGZgwvtSOt2PwMQGHPNQdLzxFr1DsdUZ31BN7jtAoNO%2FbzTvAqNP288Ud8Vl4VEEF0Kbals13c9tBs5t3xox8eDg9i8X0GKDyE5%2FkPEM%2FyBu%2FnOve2XNzLxlKfkgS9pGTiaYjx4NkhdM3Z6rnBrhWlqPaufsE0jpMhdGmgHzEjTfLea0bQANp%2BsT3soDCzEO30c5VH2mrdWczfVkN67kJ1%2Fo0ALrQquiOGi%2F9wTGOBAcRXtRXZMHruSjWwgv3iig2HioMl1Z6CYJvVrMC%2F9eZJv%2BwXGlGeMr1HAf08T7t49fB8mYq3wTC5J9QgmWDD0zsuuuFgTW%2Fh7VBmko7MIzxHEO12BKAYmLW9s%2Fd0sKGcHvOI%2B%2FWM%2BVXOBLFIndyzINRmmINv1F8Jc7%2BrlJGsUNEc9XYXa3q5fo8I7jGEoELtv4R235YUF8qn5WiVDZGaxDNIEVYqDNX4dWbGtY0N1Fc7cfxc0JdMCiiwxRPvbz8yrA4WmDQXW9p4K4CxlxFaaTaoU5N1J2DGcnjyf0Ym4zH44GnW35nthFiMLTX1ZQac0XhzZvnxovItzx1AOpuMwY8OVJt8HMnamAvlIIWORn6lkG3d3L%2F9WyspGvIRbCeFxlLKDLDmogY921T8wwaqPxAY6pgHPfRtmhRdJTyipkaNAVVU4mO0VRfNG32jxTbdakLul%2FOLPMoBI6GfcM2%2BW6WXAGxwPYDrnR5%2FrnBXhWsYsDbMIqefUA5qNSqrc2s%2BxoGj3WeE5vpCHXXFmpVV4XEKIuH6wzDxQQnANgIMUiuJJfAWtTrJA1sqLE1ZXilvw141JVPehzxQfYfBFZaXLZFYABCObs3cmTJnfeL36ryrsHFVk0rPPriPZ&X-Amz-Signature=ccf5f68ce9ffaee25fe338f82b78ad9730ab368867f7d631e73691290561b863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQ6ZL6C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH7OKTeOQv087xkX8MLpNFYVnMfN%2Fu55pzQbSgM1UkQ5AiBuEM7ajgWudxoDJ9G7PMFN2EOVRaz8B9J7DITOlHgOESr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMMBNwZrByO5hdefZoKtwD3pGZgwvtSOt2PwMQGHPNQdLzxFr1DsdUZ31BN7jtAoNO%2FbzTvAqNP288Ud8Vl4VEEF0Kbals13c9tBs5t3xox8eDg9i8X0GKDyE5%2FkPEM%2FyBu%2FnOve2XNzLxlKfkgS9pGTiaYjx4NkhdM3Z6rnBrhWlqPaufsE0jpMhdGmgHzEjTfLea0bQANp%2BsT3soDCzEO30c5VH2mrdWczfVkN67kJ1%2Fo0ALrQquiOGi%2F9wTGOBAcRXtRXZMHruSjWwgv3iig2HioMl1Z6CYJvVrMC%2F9eZJv%2BwXGlGeMr1HAf08T7t49fB8mYq3wTC5J9QgmWDD0zsuuuFgTW%2Fh7VBmko7MIzxHEO12BKAYmLW9s%2Fd0sKGcHvOI%2B%2FWM%2BVXOBLFIndyzINRmmINv1F8Jc7%2BrlJGsUNEc9XYXa3q5fo8I7jGEoELtv4R235YUF8qn5WiVDZGaxDNIEVYqDNX4dWbGtY0N1Fc7cfxc0JdMCiiwxRPvbz8yrA4WmDQXW9p4K4CxlxFaaTaoU5N1J2DGcnjyf0Ym4zH44GnW35nthFiMLTX1ZQac0XhzZvnxovItzx1AOpuMwY8OVJt8HMnamAvlIIWORn6lkG3d3L%2F9WyspGvIRbCeFxlLKDLDmogY921T8wwaqPxAY6pgHPfRtmhRdJTyipkaNAVVU4mO0VRfNG32jxTbdakLul%2FOLPMoBI6GfcM2%2BW6WXAGxwPYDrnR5%2FrnBXhWsYsDbMIqefUA5qNSqrc2s%2BxoGj3WeE5vpCHXXFmpVV4XEKIuH6wzDxQQnANgIMUiuJJfAWtTrJA1sqLE1ZXilvw141JVPehzxQfYfBFZaXLZFYABCObs3cmTJnfeL36ryrsHFVk0rPPriPZ&X-Amz-Signature=3422be4a5258cde30b19c09d60abd3b171451a11f67e4fbf20e16411de118329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQ6ZL6C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH7OKTeOQv087xkX8MLpNFYVnMfN%2Fu55pzQbSgM1UkQ5AiBuEM7ajgWudxoDJ9G7PMFN2EOVRaz8B9J7DITOlHgOESr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMMBNwZrByO5hdefZoKtwD3pGZgwvtSOt2PwMQGHPNQdLzxFr1DsdUZ31BN7jtAoNO%2FbzTvAqNP288Ud8Vl4VEEF0Kbals13c9tBs5t3xox8eDg9i8X0GKDyE5%2FkPEM%2FyBu%2FnOve2XNzLxlKfkgS9pGTiaYjx4NkhdM3Z6rnBrhWlqPaufsE0jpMhdGmgHzEjTfLea0bQANp%2BsT3soDCzEO30c5VH2mrdWczfVkN67kJ1%2Fo0ALrQquiOGi%2F9wTGOBAcRXtRXZMHruSjWwgv3iig2HioMl1Z6CYJvVrMC%2F9eZJv%2BwXGlGeMr1HAf08T7t49fB8mYq3wTC5J9QgmWDD0zsuuuFgTW%2Fh7VBmko7MIzxHEO12BKAYmLW9s%2Fd0sKGcHvOI%2B%2FWM%2BVXOBLFIndyzINRmmINv1F8Jc7%2BrlJGsUNEc9XYXa3q5fo8I7jGEoELtv4R235YUF8qn5WiVDZGaxDNIEVYqDNX4dWbGtY0N1Fc7cfxc0JdMCiiwxRPvbz8yrA4WmDQXW9p4K4CxlxFaaTaoU5N1J2DGcnjyf0Ym4zH44GnW35nthFiMLTX1ZQac0XhzZvnxovItzx1AOpuMwY8OVJt8HMnamAvlIIWORn6lkG3d3L%2F9WyspGvIRbCeFxlLKDLDmogY921T8wwaqPxAY6pgHPfRtmhRdJTyipkaNAVVU4mO0VRfNG32jxTbdakLul%2FOLPMoBI6GfcM2%2BW6WXAGxwPYDrnR5%2FrnBXhWsYsDbMIqefUA5qNSqrc2s%2BxoGj3WeE5vpCHXXFmpVV4XEKIuH6wzDxQQnANgIMUiuJJfAWtTrJA1sqLE1ZXilvw141JVPehzxQfYfBFZaXLZFYABCObs3cmTJnfeL36ryrsHFVk0rPPriPZ&X-Amz-Signature=b2d3722f6d3f6d3945db0d3c496b5861c8a9eeb1b1c9152660c7109c080abc39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQ6ZL6C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH7OKTeOQv087xkX8MLpNFYVnMfN%2Fu55pzQbSgM1UkQ5AiBuEM7ajgWudxoDJ9G7PMFN2EOVRaz8B9J7DITOlHgOESr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMMBNwZrByO5hdefZoKtwD3pGZgwvtSOt2PwMQGHPNQdLzxFr1DsdUZ31BN7jtAoNO%2FbzTvAqNP288Ud8Vl4VEEF0Kbals13c9tBs5t3xox8eDg9i8X0GKDyE5%2FkPEM%2FyBu%2FnOve2XNzLxlKfkgS9pGTiaYjx4NkhdM3Z6rnBrhWlqPaufsE0jpMhdGmgHzEjTfLea0bQANp%2BsT3soDCzEO30c5VH2mrdWczfVkN67kJ1%2Fo0ALrQquiOGi%2F9wTGOBAcRXtRXZMHruSjWwgv3iig2HioMl1Z6CYJvVrMC%2F9eZJv%2BwXGlGeMr1HAf08T7t49fB8mYq3wTC5J9QgmWDD0zsuuuFgTW%2Fh7VBmko7MIzxHEO12BKAYmLW9s%2Fd0sKGcHvOI%2B%2FWM%2BVXOBLFIndyzINRmmINv1F8Jc7%2BrlJGsUNEc9XYXa3q5fo8I7jGEoELtv4R235YUF8qn5WiVDZGaxDNIEVYqDNX4dWbGtY0N1Fc7cfxc0JdMCiiwxRPvbz8yrA4WmDQXW9p4K4CxlxFaaTaoU5N1J2DGcnjyf0Ym4zH44GnW35nthFiMLTX1ZQac0XhzZvnxovItzx1AOpuMwY8OVJt8HMnamAvlIIWORn6lkG3d3L%2F9WyspGvIRbCeFxlLKDLDmogY921T8wwaqPxAY6pgHPfRtmhRdJTyipkaNAVVU4mO0VRfNG32jxTbdakLul%2FOLPMoBI6GfcM2%2BW6WXAGxwPYDrnR5%2FrnBXhWsYsDbMIqefUA5qNSqrc2s%2BxoGj3WeE5vpCHXXFmpVV4XEKIuH6wzDxQQnANgIMUiuJJfAWtTrJA1sqLE1ZXilvw141JVPehzxQfYfBFZaXLZFYABCObs3cmTJnfeL36ryrsHFVk0rPPriPZ&X-Amz-Signature=d296bb72c6441e01afb55a2e1646e8b6794e991ce9178d74d12367a13bd5a23b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQ6ZL6C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH7OKTeOQv087xkX8MLpNFYVnMfN%2Fu55pzQbSgM1UkQ5AiBuEM7ajgWudxoDJ9G7PMFN2EOVRaz8B9J7DITOlHgOESr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMMBNwZrByO5hdefZoKtwD3pGZgwvtSOt2PwMQGHPNQdLzxFr1DsdUZ31BN7jtAoNO%2FbzTvAqNP288Ud8Vl4VEEF0Kbals13c9tBs5t3xox8eDg9i8X0GKDyE5%2FkPEM%2FyBu%2FnOve2XNzLxlKfkgS9pGTiaYjx4NkhdM3Z6rnBrhWlqPaufsE0jpMhdGmgHzEjTfLea0bQANp%2BsT3soDCzEO30c5VH2mrdWczfVkN67kJ1%2Fo0ALrQquiOGi%2F9wTGOBAcRXtRXZMHruSjWwgv3iig2HioMl1Z6CYJvVrMC%2F9eZJv%2BwXGlGeMr1HAf08T7t49fB8mYq3wTC5J9QgmWDD0zsuuuFgTW%2Fh7VBmko7MIzxHEO12BKAYmLW9s%2Fd0sKGcHvOI%2B%2FWM%2BVXOBLFIndyzINRmmINv1F8Jc7%2BrlJGsUNEc9XYXa3q5fo8I7jGEoELtv4R235YUF8qn5WiVDZGaxDNIEVYqDNX4dWbGtY0N1Fc7cfxc0JdMCiiwxRPvbz8yrA4WmDQXW9p4K4CxlxFaaTaoU5N1J2DGcnjyf0Ym4zH44GnW35nthFiMLTX1ZQac0XhzZvnxovItzx1AOpuMwY8OVJt8HMnamAvlIIWORn6lkG3d3L%2F9WyspGvIRbCeFxlLKDLDmogY921T8wwaqPxAY6pgHPfRtmhRdJTyipkaNAVVU4mO0VRfNG32jxTbdakLul%2FOLPMoBI6GfcM2%2BW6WXAGxwPYDrnR5%2FrnBXhWsYsDbMIqefUA5qNSqrc2s%2BxoGj3WeE5vpCHXXFmpVV4XEKIuH6wzDxQQnANgIMUiuJJfAWtTrJA1sqLE1ZXilvw141JVPehzxQfYfBFZaXLZFYABCObs3cmTJnfeL36ryrsHFVk0rPPriPZ&X-Amz-Signature=18f67c3a12fd5104cb257676da365560f3d358da1bdd9eb8678549711edfd96c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQ6ZL6C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH7OKTeOQv087xkX8MLpNFYVnMfN%2Fu55pzQbSgM1UkQ5AiBuEM7ajgWudxoDJ9G7PMFN2EOVRaz8B9J7DITOlHgOESr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMMBNwZrByO5hdefZoKtwD3pGZgwvtSOt2PwMQGHPNQdLzxFr1DsdUZ31BN7jtAoNO%2FbzTvAqNP288Ud8Vl4VEEF0Kbals13c9tBs5t3xox8eDg9i8X0GKDyE5%2FkPEM%2FyBu%2FnOve2XNzLxlKfkgS9pGTiaYjx4NkhdM3Z6rnBrhWlqPaufsE0jpMhdGmgHzEjTfLea0bQANp%2BsT3soDCzEO30c5VH2mrdWczfVkN67kJ1%2Fo0ALrQquiOGi%2F9wTGOBAcRXtRXZMHruSjWwgv3iig2HioMl1Z6CYJvVrMC%2F9eZJv%2BwXGlGeMr1HAf08T7t49fB8mYq3wTC5J9QgmWDD0zsuuuFgTW%2Fh7VBmko7MIzxHEO12BKAYmLW9s%2Fd0sKGcHvOI%2B%2FWM%2BVXOBLFIndyzINRmmINv1F8Jc7%2BrlJGsUNEc9XYXa3q5fo8I7jGEoELtv4R235YUF8qn5WiVDZGaxDNIEVYqDNX4dWbGtY0N1Fc7cfxc0JdMCiiwxRPvbz8yrA4WmDQXW9p4K4CxlxFaaTaoU5N1J2DGcnjyf0Ym4zH44GnW35nthFiMLTX1ZQac0XhzZvnxovItzx1AOpuMwY8OVJt8HMnamAvlIIWORn6lkG3d3L%2F9WyspGvIRbCeFxlLKDLDmogY921T8wwaqPxAY6pgHPfRtmhRdJTyipkaNAVVU4mO0VRfNG32jxTbdakLul%2FOLPMoBI6GfcM2%2BW6WXAGxwPYDrnR5%2FrnBXhWsYsDbMIqefUA5qNSqrc2s%2BxoGj3WeE5vpCHXXFmpVV4XEKIuH6wzDxQQnANgIMUiuJJfAWtTrJA1sqLE1ZXilvw141JVPehzxQfYfBFZaXLZFYABCObs3cmTJnfeL36ryrsHFVk0rPPriPZ&X-Amz-Signature=c502cfcdd0b30c6fc0d446d0925631eeceab862429dc91e808e046ab86079ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJPD4744%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQD6vKkuLIqKCrBxqmYPEy98igquEpmAg1zSCCeiyZQafgIgfxWKrifMpLhOQMQqff%2BFnSstGh%2FE%2F1eima8h4gSvuBQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDA8kTsTaQxSvg5XPvSrcA8V%2B2a83PXg7RcGYpvbFluUFDDDiKuSTMmh1KX5c1BDij5l272J3rb%2BVz40cOXvue%2FloOPdDKaKhtlkZ3iV3B0bvKezGR%2BPD8gtiJ4FTSunTQV8LN2uh%2FvvBgjN5Ytp8C7F10HlBwB8pJlNfcFd6BHb%2FfZ%2Fr8XEf7cF6beMTLjraNmyqSCRfDePhbhSk5cTYWxcpRrZHwe%2Baz5ohtNzFR9EUZo2DxM3GitaLPKttGnwV9greIBtSma7BJn4qOMTTPBgGwRSfxREHBlW5abV2A%2BsMuBlxnhJ%2F3jWaGi%2BfBeAdLzTQ7b%2FLZ8XhPbLdpI1rQOCUwa5IoUKaeIHrxUimthObc2N9CXwyuc4bbSto69L9FBmWVf0zO9iGrG9d2ORaHVTR788yJAhTGFV%2B2hhPWZd%2F0%2FGju%2Fo3CAG%2Fl4f6UJMS1AC%2BUSeMNa%2F%2BXUUx%2FQW7jZWsZYzTIQdYeTAtKEUMiccTfCLHmWVhGv4mIkXGE%2FGyzYrkoSL45eeSkDJcDJ%2BpPSSfZTBaa09Di%2B%2Beq1l8%2F1sBILr0M4nNNalvE%2FbDOaMz2K21VlRkAC2Ws5TlBU1H5g%2B4zpAr8hG51JcQKSB5TB2WE05I0c%2FBgaGcs0O5pQslNaO%2FEgNhek517mI%2FMOSqj8QGOqUB2syI2a8yJocuVEzVBRHNo7EvklQqI5dpEsU74GKD%2BVspiiIdTOKUyHnz9IEHby7xn8iOm5x6rnApPHR%2F1yGQ6hp55yjEMlrDGOAUQ5z29iTj%2FbdL6WNKY%2BSYuNxD%2B4rI3RoVS7OwJwngCwcc%2ByujdIZtowNV7nsTgScTkLCNTEqQkAjyKXgi7Etfo5fpmxievermDvanndorw8VLz4wGORrEYLcB&X-Amz-Signature=3b558451cc24f52d183b77577bb66e3fbdda61a34f0db0f119694a2ab8760f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJPD4744%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQD6vKkuLIqKCrBxqmYPEy98igquEpmAg1zSCCeiyZQafgIgfxWKrifMpLhOQMQqff%2BFnSstGh%2FE%2F1eima8h4gSvuBQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDA8kTsTaQxSvg5XPvSrcA8V%2B2a83PXg7RcGYpvbFluUFDDDiKuSTMmh1KX5c1BDij5l272J3rb%2BVz40cOXvue%2FloOPdDKaKhtlkZ3iV3B0bvKezGR%2BPD8gtiJ4FTSunTQV8LN2uh%2FvvBgjN5Ytp8C7F10HlBwB8pJlNfcFd6BHb%2FfZ%2Fr8XEf7cF6beMTLjraNmyqSCRfDePhbhSk5cTYWxcpRrZHwe%2Baz5ohtNzFR9EUZo2DxM3GitaLPKttGnwV9greIBtSma7BJn4qOMTTPBgGwRSfxREHBlW5abV2A%2BsMuBlxnhJ%2F3jWaGi%2BfBeAdLzTQ7b%2FLZ8XhPbLdpI1rQOCUwa5IoUKaeIHrxUimthObc2N9CXwyuc4bbSto69L9FBmWVf0zO9iGrG9d2ORaHVTR788yJAhTGFV%2B2hhPWZd%2F0%2FGju%2Fo3CAG%2Fl4f6UJMS1AC%2BUSeMNa%2F%2BXUUx%2FQW7jZWsZYzTIQdYeTAtKEUMiccTfCLHmWVhGv4mIkXGE%2FGyzYrkoSL45eeSkDJcDJ%2BpPSSfZTBaa09Di%2B%2Beq1l8%2F1sBILr0M4nNNalvE%2FbDOaMz2K21VlRkAC2Ws5TlBU1H5g%2B4zpAr8hG51JcQKSB5TB2WE05I0c%2FBgaGcs0O5pQslNaO%2FEgNhek517mI%2FMOSqj8QGOqUB2syI2a8yJocuVEzVBRHNo7EvklQqI5dpEsU74GKD%2BVspiiIdTOKUyHnz9IEHby7xn8iOm5x6rnApPHR%2F1yGQ6hp55yjEMlrDGOAUQ5z29iTj%2FbdL6WNKY%2BSYuNxD%2B4rI3RoVS7OwJwngCwcc%2ByujdIZtowNV7nsTgScTkLCNTEqQkAjyKXgi7Etfo5fpmxievermDvanndorw8VLz4wGORrEYLcB&X-Amz-Signature=a82abed68777db8d6ce10aea80acba5c8c98f24f9334853e01f06e248bd030c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJPD4744%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQD6vKkuLIqKCrBxqmYPEy98igquEpmAg1zSCCeiyZQafgIgfxWKrifMpLhOQMQqff%2BFnSstGh%2FE%2F1eima8h4gSvuBQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDA8kTsTaQxSvg5XPvSrcA8V%2B2a83PXg7RcGYpvbFluUFDDDiKuSTMmh1KX5c1BDij5l272J3rb%2BVz40cOXvue%2FloOPdDKaKhtlkZ3iV3B0bvKezGR%2BPD8gtiJ4FTSunTQV8LN2uh%2FvvBgjN5Ytp8C7F10HlBwB8pJlNfcFd6BHb%2FfZ%2Fr8XEf7cF6beMTLjraNmyqSCRfDePhbhSk5cTYWxcpRrZHwe%2Baz5ohtNzFR9EUZo2DxM3GitaLPKttGnwV9greIBtSma7BJn4qOMTTPBgGwRSfxREHBlW5abV2A%2BsMuBlxnhJ%2F3jWaGi%2BfBeAdLzTQ7b%2FLZ8XhPbLdpI1rQOCUwa5IoUKaeIHrxUimthObc2N9CXwyuc4bbSto69L9FBmWVf0zO9iGrG9d2ORaHVTR788yJAhTGFV%2B2hhPWZd%2F0%2FGju%2Fo3CAG%2Fl4f6UJMS1AC%2BUSeMNa%2F%2BXUUx%2FQW7jZWsZYzTIQdYeTAtKEUMiccTfCLHmWVhGv4mIkXGE%2FGyzYrkoSL45eeSkDJcDJ%2BpPSSfZTBaa09Di%2B%2Beq1l8%2F1sBILr0M4nNNalvE%2FbDOaMz2K21VlRkAC2Ws5TlBU1H5g%2B4zpAr8hG51JcQKSB5TB2WE05I0c%2FBgaGcs0O5pQslNaO%2FEgNhek517mI%2FMOSqj8QGOqUB2syI2a8yJocuVEzVBRHNo7EvklQqI5dpEsU74GKD%2BVspiiIdTOKUyHnz9IEHby7xn8iOm5x6rnApPHR%2F1yGQ6hp55yjEMlrDGOAUQ5z29iTj%2FbdL6WNKY%2BSYuNxD%2B4rI3RoVS7OwJwngCwcc%2ByujdIZtowNV7nsTgScTkLCNTEqQkAjyKXgi7Etfo5fpmxievermDvanndorw8VLz4wGORrEYLcB&X-Amz-Signature=53cadecdbf64fdbaa96dd5772bc3b0d680aa060624caf60c0d6eefd3d0fd33fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJPD4744%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQD6vKkuLIqKCrBxqmYPEy98igquEpmAg1zSCCeiyZQafgIgfxWKrifMpLhOQMQqff%2BFnSstGh%2FE%2F1eima8h4gSvuBQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDA8kTsTaQxSvg5XPvSrcA8V%2B2a83PXg7RcGYpvbFluUFDDDiKuSTMmh1KX5c1BDij5l272J3rb%2BVz40cOXvue%2FloOPdDKaKhtlkZ3iV3B0bvKezGR%2BPD8gtiJ4FTSunTQV8LN2uh%2FvvBgjN5Ytp8C7F10HlBwB8pJlNfcFd6BHb%2FfZ%2Fr8XEf7cF6beMTLjraNmyqSCRfDePhbhSk5cTYWxcpRrZHwe%2Baz5ohtNzFR9EUZo2DxM3GitaLPKttGnwV9greIBtSma7BJn4qOMTTPBgGwRSfxREHBlW5abV2A%2BsMuBlxnhJ%2F3jWaGi%2BfBeAdLzTQ7b%2FLZ8XhPbLdpI1rQOCUwa5IoUKaeIHrxUimthObc2N9CXwyuc4bbSto69L9FBmWVf0zO9iGrG9d2ORaHVTR788yJAhTGFV%2B2hhPWZd%2F0%2FGju%2Fo3CAG%2Fl4f6UJMS1AC%2BUSeMNa%2F%2BXUUx%2FQW7jZWsZYzTIQdYeTAtKEUMiccTfCLHmWVhGv4mIkXGE%2FGyzYrkoSL45eeSkDJcDJ%2BpPSSfZTBaa09Di%2B%2Beq1l8%2F1sBILr0M4nNNalvE%2FbDOaMz2K21VlRkAC2Ws5TlBU1H5g%2B4zpAr8hG51JcQKSB5TB2WE05I0c%2FBgaGcs0O5pQslNaO%2FEgNhek517mI%2FMOSqj8QGOqUB2syI2a8yJocuVEzVBRHNo7EvklQqI5dpEsU74GKD%2BVspiiIdTOKUyHnz9IEHby7xn8iOm5x6rnApPHR%2F1yGQ6hp55yjEMlrDGOAUQ5z29iTj%2FbdL6WNKY%2BSYuNxD%2B4rI3RoVS7OwJwngCwcc%2ByujdIZtowNV7nsTgScTkLCNTEqQkAjyKXgi7Etfo5fpmxievermDvanndorw8VLz4wGORrEYLcB&X-Amz-Signature=6882197dbecaa318d4856ae5b21bfca73fb430d5c570f666bad1eba93e248c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJPD4744%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQD6vKkuLIqKCrBxqmYPEy98igquEpmAg1zSCCeiyZQafgIgfxWKrifMpLhOQMQqff%2BFnSstGh%2FE%2F1eima8h4gSvuBQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDA8kTsTaQxSvg5XPvSrcA8V%2B2a83PXg7RcGYpvbFluUFDDDiKuSTMmh1KX5c1BDij5l272J3rb%2BVz40cOXvue%2FloOPdDKaKhtlkZ3iV3B0bvKezGR%2BPD8gtiJ4FTSunTQV8LN2uh%2FvvBgjN5Ytp8C7F10HlBwB8pJlNfcFd6BHb%2FfZ%2Fr8XEf7cF6beMTLjraNmyqSCRfDePhbhSk5cTYWxcpRrZHwe%2Baz5ohtNzFR9EUZo2DxM3GitaLPKttGnwV9greIBtSma7BJn4qOMTTPBgGwRSfxREHBlW5abV2A%2BsMuBlxnhJ%2F3jWaGi%2BfBeAdLzTQ7b%2FLZ8XhPbLdpI1rQOCUwa5IoUKaeIHrxUimthObc2N9CXwyuc4bbSto69L9FBmWVf0zO9iGrG9d2ORaHVTR788yJAhTGFV%2B2hhPWZd%2F0%2FGju%2Fo3CAG%2Fl4f6UJMS1AC%2BUSeMNa%2F%2BXUUx%2FQW7jZWsZYzTIQdYeTAtKEUMiccTfCLHmWVhGv4mIkXGE%2FGyzYrkoSL45eeSkDJcDJ%2BpPSSfZTBaa09Di%2B%2Beq1l8%2F1sBILr0M4nNNalvE%2FbDOaMz2K21VlRkAC2Ws5TlBU1H5g%2B4zpAr8hG51JcQKSB5TB2WE05I0c%2FBgaGcs0O5pQslNaO%2FEgNhek517mI%2FMOSqj8QGOqUB2syI2a8yJocuVEzVBRHNo7EvklQqI5dpEsU74GKD%2BVspiiIdTOKUyHnz9IEHby7xn8iOm5x6rnApPHR%2F1yGQ6hp55yjEMlrDGOAUQ5z29iTj%2FbdL6WNKY%2BSYuNxD%2B4rI3RoVS7OwJwngCwcc%2ByujdIZtowNV7nsTgScTkLCNTEqQkAjyKXgi7Etfo5fpmxievermDvanndorw8VLz4wGORrEYLcB&X-Amz-Signature=d91c88e73b982a7c16f5e398c54fee2a3bbcf8a1ffe2bd36063e0db38d205300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJPD4744%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQD6vKkuLIqKCrBxqmYPEy98igquEpmAg1zSCCeiyZQafgIgfxWKrifMpLhOQMQqff%2BFnSstGh%2FE%2F1eima8h4gSvuBQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDA8kTsTaQxSvg5XPvSrcA8V%2B2a83PXg7RcGYpvbFluUFDDDiKuSTMmh1KX5c1BDij5l272J3rb%2BVz40cOXvue%2FloOPdDKaKhtlkZ3iV3B0bvKezGR%2BPD8gtiJ4FTSunTQV8LN2uh%2FvvBgjN5Ytp8C7F10HlBwB8pJlNfcFd6BHb%2FfZ%2Fr8XEf7cF6beMTLjraNmyqSCRfDePhbhSk5cTYWxcpRrZHwe%2Baz5ohtNzFR9EUZo2DxM3GitaLPKttGnwV9greIBtSma7BJn4qOMTTPBgGwRSfxREHBlW5abV2A%2BsMuBlxnhJ%2F3jWaGi%2BfBeAdLzTQ7b%2FLZ8XhPbLdpI1rQOCUwa5IoUKaeIHrxUimthObc2N9CXwyuc4bbSto69L9FBmWVf0zO9iGrG9d2ORaHVTR788yJAhTGFV%2B2hhPWZd%2F0%2FGju%2Fo3CAG%2Fl4f6UJMS1AC%2BUSeMNa%2F%2BXUUx%2FQW7jZWsZYzTIQdYeTAtKEUMiccTfCLHmWVhGv4mIkXGE%2FGyzYrkoSL45eeSkDJcDJ%2BpPSSfZTBaa09Di%2B%2Beq1l8%2F1sBILr0M4nNNalvE%2FbDOaMz2K21VlRkAC2Ws5TlBU1H5g%2B4zpAr8hG51JcQKSB5TB2WE05I0c%2FBgaGcs0O5pQslNaO%2FEgNhek517mI%2FMOSqj8QGOqUB2syI2a8yJocuVEzVBRHNo7EvklQqI5dpEsU74GKD%2BVspiiIdTOKUyHnz9IEHby7xn8iOm5x6rnApPHR%2F1yGQ6hp55yjEMlrDGOAUQ5z29iTj%2FbdL6WNKY%2BSYuNxD%2B4rI3RoVS7OwJwngCwcc%2ByujdIZtowNV7nsTgScTkLCNTEqQkAjyKXgi7Etfo5fpmxievermDvanndorw8VLz4wGORrEYLcB&X-Amz-Signature=ab1c27c89c47c5a388403870a583e52817b65b22cd909eaa953c04e165506748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
