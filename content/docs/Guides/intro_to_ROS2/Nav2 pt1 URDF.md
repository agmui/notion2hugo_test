---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-28T21:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-28T21:43:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CBPU7MD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0cLeljFqqj8Iw9%2BJV6WRZ3ATr4O5z9Sfo5EQEPRzVZAiA%2FnhWp3Y2SYCHqyNQYBxSsVIdr9hXIid6R0ECj2gNF0CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhBanGrNfnOdjgs3YKtwDWnEIPJ7wQabxTuC9VF1UEHWOdDe%2BAEi8ceB%2FB8D3m3U1YnNP5V7NNQL5BhTk76s9CMQmiiVRmHtp8wEWBwwHZEegDu7lATPUqcJJIchCyJGLI3Giw41PlF0dN4D4FrnezwKkN4BzZx0G0ThW7dJHZVZxwS6ouxfAFTAxIiwbYgOhixe%2B%2FqIXmMPpQpeC6OtdWbiCMBZphSF31PGz3xEgeIPEn1o6cRuMFKYqaTKdMzEBZuJ9KDIOqPhSE07Zo82GQ8PcJ8TAjARiMNIaJQ5JKKvPeGxv7x9qWd58uKweIIrMJj%2BssBy3D3ttac6C8w8%2FVuOGFLYlGt5vIsSUlCDwyt7db8CNbjgl7YKOQMkiz5NGHlZe9Th621bE%2BCGe%2F9wckMXxeqxkkx4AN8IWpxaSVxCBjEPc6h2LVi1tIaVqEEvk4K4warGJggewfktR%2FzgpxeMaUIv6RGaQnYMQBDPWlZkYeCa4n3vZaQbnKPTKugXyOr9qTRv9JafHFHsmSH80XnYt%2FonAQoPU3q9%2B44LImGG538EmbfMzpArZxw5ZeJQFUOVEVDGOURsXxQ6z6clhz246%2BiPH9R77i7rh1yjXfx%2FfNhbb1FOPeds7WQfWAPa9nQQ8V4WgX9BfL5Iw%2FK2kxAY6pgH29AVTH7UFHIsQUN69215lGUfGdmKKVn0n5AJnTlJrf1HNeVyJu5xsipvy380swQIrDNAL491f7%2FJk6AwnjFFWszZq8796ielApWHowmCBQ%2FsZF84YiGM8R53ijPqye8CeEucd0MewwmWwaJ7lm2M0ueXc2QHHGxSAiZoV0gAuhNQWnQKjl2cOiD2TX1fQ2SgZZ5VuTj080yxSF%2Fpl9doMegX6aMcW&X-Amz-Signature=b3aa17cad693bc6ce9b8f9da3bdc794081d93266128c2495609cb45f0606ac2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CBPU7MD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0cLeljFqqj8Iw9%2BJV6WRZ3ATr4O5z9Sfo5EQEPRzVZAiA%2FnhWp3Y2SYCHqyNQYBxSsVIdr9hXIid6R0ECj2gNF0CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhBanGrNfnOdjgs3YKtwDWnEIPJ7wQabxTuC9VF1UEHWOdDe%2BAEi8ceB%2FB8D3m3U1YnNP5V7NNQL5BhTk76s9CMQmiiVRmHtp8wEWBwwHZEegDu7lATPUqcJJIchCyJGLI3Giw41PlF0dN4D4FrnezwKkN4BzZx0G0ThW7dJHZVZxwS6ouxfAFTAxIiwbYgOhixe%2B%2FqIXmMPpQpeC6OtdWbiCMBZphSF31PGz3xEgeIPEn1o6cRuMFKYqaTKdMzEBZuJ9KDIOqPhSE07Zo82GQ8PcJ8TAjARiMNIaJQ5JKKvPeGxv7x9qWd58uKweIIrMJj%2BssBy3D3ttac6C8w8%2FVuOGFLYlGt5vIsSUlCDwyt7db8CNbjgl7YKOQMkiz5NGHlZe9Th621bE%2BCGe%2F9wckMXxeqxkkx4AN8IWpxaSVxCBjEPc6h2LVi1tIaVqEEvk4K4warGJggewfktR%2FzgpxeMaUIv6RGaQnYMQBDPWlZkYeCa4n3vZaQbnKPTKugXyOr9qTRv9JafHFHsmSH80XnYt%2FonAQoPU3q9%2B44LImGG538EmbfMzpArZxw5ZeJQFUOVEVDGOURsXxQ6z6clhz246%2BiPH9R77i7rh1yjXfx%2FfNhbb1FOPeds7WQfWAPa9nQQ8V4WgX9BfL5Iw%2FK2kxAY6pgH29AVTH7UFHIsQUN69215lGUfGdmKKVn0n5AJnTlJrf1HNeVyJu5xsipvy380swQIrDNAL491f7%2FJk6AwnjFFWszZq8796ielApWHowmCBQ%2FsZF84YiGM8R53ijPqye8CeEucd0MewwmWwaJ7lm2M0ueXc2QHHGxSAiZoV0gAuhNQWnQKjl2cOiD2TX1fQ2SgZZ5VuTj080yxSF%2Fpl9doMegX6aMcW&X-Amz-Signature=7a826676181df4698d4f9c254ad75f26cf3a35ac7dc2fd14efc3eefdb0293826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CBPU7MD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0cLeljFqqj8Iw9%2BJV6WRZ3ATr4O5z9Sfo5EQEPRzVZAiA%2FnhWp3Y2SYCHqyNQYBxSsVIdr9hXIid6R0ECj2gNF0CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhBanGrNfnOdjgs3YKtwDWnEIPJ7wQabxTuC9VF1UEHWOdDe%2BAEi8ceB%2FB8D3m3U1YnNP5V7NNQL5BhTk76s9CMQmiiVRmHtp8wEWBwwHZEegDu7lATPUqcJJIchCyJGLI3Giw41PlF0dN4D4FrnezwKkN4BzZx0G0ThW7dJHZVZxwS6ouxfAFTAxIiwbYgOhixe%2B%2FqIXmMPpQpeC6OtdWbiCMBZphSF31PGz3xEgeIPEn1o6cRuMFKYqaTKdMzEBZuJ9KDIOqPhSE07Zo82GQ8PcJ8TAjARiMNIaJQ5JKKvPeGxv7x9qWd58uKweIIrMJj%2BssBy3D3ttac6C8w8%2FVuOGFLYlGt5vIsSUlCDwyt7db8CNbjgl7YKOQMkiz5NGHlZe9Th621bE%2BCGe%2F9wckMXxeqxkkx4AN8IWpxaSVxCBjEPc6h2LVi1tIaVqEEvk4K4warGJggewfktR%2FzgpxeMaUIv6RGaQnYMQBDPWlZkYeCa4n3vZaQbnKPTKugXyOr9qTRv9JafHFHsmSH80XnYt%2FonAQoPU3q9%2B44LImGG538EmbfMzpArZxw5ZeJQFUOVEVDGOURsXxQ6z6clhz246%2BiPH9R77i7rh1yjXfx%2FfNhbb1FOPeds7WQfWAPa9nQQ8V4WgX9BfL5Iw%2FK2kxAY6pgH29AVTH7UFHIsQUN69215lGUfGdmKKVn0n5AJnTlJrf1HNeVyJu5xsipvy380swQIrDNAL491f7%2FJk6AwnjFFWszZq8796ielApWHowmCBQ%2FsZF84YiGM8R53ijPqye8CeEucd0MewwmWwaJ7lm2M0ueXc2QHHGxSAiZoV0gAuhNQWnQKjl2cOiD2TX1fQ2SgZZ5VuTj080yxSF%2Fpl9doMegX6aMcW&X-Amz-Signature=d7a9d0de45dc0bfb823ec21432db0d8300d6b6a500e8cea3c1b42cae9b1f5170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CBPU7MD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0cLeljFqqj8Iw9%2BJV6WRZ3ATr4O5z9Sfo5EQEPRzVZAiA%2FnhWp3Y2SYCHqyNQYBxSsVIdr9hXIid6R0ECj2gNF0CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhBanGrNfnOdjgs3YKtwDWnEIPJ7wQabxTuC9VF1UEHWOdDe%2BAEi8ceB%2FB8D3m3U1YnNP5V7NNQL5BhTk76s9CMQmiiVRmHtp8wEWBwwHZEegDu7lATPUqcJJIchCyJGLI3Giw41PlF0dN4D4FrnezwKkN4BzZx0G0ThW7dJHZVZxwS6ouxfAFTAxIiwbYgOhixe%2B%2FqIXmMPpQpeC6OtdWbiCMBZphSF31PGz3xEgeIPEn1o6cRuMFKYqaTKdMzEBZuJ9KDIOqPhSE07Zo82GQ8PcJ8TAjARiMNIaJQ5JKKvPeGxv7x9qWd58uKweIIrMJj%2BssBy3D3ttac6C8w8%2FVuOGFLYlGt5vIsSUlCDwyt7db8CNbjgl7YKOQMkiz5NGHlZe9Th621bE%2BCGe%2F9wckMXxeqxkkx4AN8IWpxaSVxCBjEPc6h2LVi1tIaVqEEvk4K4warGJggewfktR%2FzgpxeMaUIv6RGaQnYMQBDPWlZkYeCa4n3vZaQbnKPTKugXyOr9qTRv9JafHFHsmSH80XnYt%2FonAQoPU3q9%2B44LImGG538EmbfMzpArZxw5ZeJQFUOVEVDGOURsXxQ6z6clhz246%2BiPH9R77i7rh1yjXfx%2FfNhbb1FOPeds7WQfWAPa9nQQ8V4WgX9BfL5Iw%2FK2kxAY6pgH29AVTH7UFHIsQUN69215lGUfGdmKKVn0n5AJnTlJrf1HNeVyJu5xsipvy380swQIrDNAL491f7%2FJk6AwnjFFWszZq8796ielApWHowmCBQ%2FsZF84YiGM8R53ijPqye8CeEucd0MewwmWwaJ7lm2M0ueXc2QHHGxSAiZoV0gAuhNQWnQKjl2cOiD2TX1fQ2SgZZ5VuTj080yxSF%2Fpl9doMegX6aMcW&X-Amz-Signature=21c101a888177f3a5cbfd6d7a842781b0de11ab1cc3ac079056deab8cd6c8581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CBPU7MD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0cLeljFqqj8Iw9%2BJV6WRZ3ATr4O5z9Sfo5EQEPRzVZAiA%2FnhWp3Y2SYCHqyNQYBxSsVIdr9hXIid6R0ECj2gNF0CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhBanGrNfnOdjgs3YKtwDWnEIPJ7wQabxTuC9VF1UEHWOdDe%2BAEi8ceB%2FB8D3m3U1YnNP5V7NNQL5BhTk76s9CMQmiiVRmHtp8wEWBwwHZEegDu7lATPUqcJJIchCyJGLI3Giw41PlF0dN4D4FrnezwKkN4BzZx0G0ThW7dJHZVZxwS6ouxfAFTAxIiwbYgOhixe%2B%2FqIXmMPpQpeC6OtdWbiCMBZphSF31PGz3xEgeIPEn1o6cRuMFKYqaTKdMzEBZuJ9KDIOqPhSE07Zo82GQ8PcJ8TAjARiMNIaJQ5JKKvPeGxv7x9qWd58uKweIIrMJj%2BssBy3D3ttac6C8w8%2FVuOGFLYlGt5vIsSUlCDwyt7db8CNbjgl7YKOQMkiz5NGHlZe9Th621bE%2BCGe%2F9wckMXxeqxkkx4AN8IWpxaSVxCBjEPc6h2LVi1tIaVqEEvk4K4warGJggewfktR%2FzgpxeMaUIv6RGaQnYMQBDPWlZkYeCa4n3vZaQbnKPTKugXyOr9qTRv9JafHFHsmSH80XnYt%2FonAQoPU3q9%2B44LImGG538EmbfMzpArZxw5ZeJQFUOVEVDGOURsXxQ6z6clhz246%2BiPH9R77i7rh1yjXfx%2FfNhbb1FOPeds7WQfWAPa9nQQ8V4WgX9BfL5Iw%2FK2kxAY6pgH29AVTH7UFHIsQUN69215lGUfGdmKKVn0n5AJnTlJrf1HNeVyJu5xsipvy380swQIrDNAL491f7%2FJk6AwnjFFWszZq8796ielApWHowmCBQ%2FsZF84YiGM8R53ijPqye8CeEucd0MewwmWwaJ7lm2M0ueXc2QHHGxSAiZoV0gAuhNQWnQKjl2cOiD2TX1fQ2SgZZ5VuTj080yxSF%2Fpl9doMegX6aMcW&X-Amz-Signature=e80f626ee9d72353bf20022b0c53fa94c6afda670db17b04bc155e3c4dfcbbba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CBPU7MD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0cLeljFqqj8Iw9%2BJV6WRZ3ATr4O5z9Sfo5EQEPRzVZAiA%2FnhWp3Y2SYCHqyNQYBxSsVIdr9hXIid6R0ECj2gNF0CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhBanGrNfnOdjgs3YKtwDWnEIPJ7wQabxTuC9VF1UEHWOdDe%2BAEi8ceB%2FB8D3m3U1YnNP5V7NNQL5BhTk76s9CMQmiiVRmHtp8wEWBwwHZEegDu7lATPUqcJJIchCyJGLI3Giw41PlF0dN4D4FrnezwKkN4BzZx0G0ThW7dJHZVZxwS6ouxfAFTAxIiwbYgOhixe%2B%2FqIXmMPpQpeC6OtdWbiCMBZphSF31PGz3xEgeIPEn1o6cRuMFKYqaTKdMzEBZuJ9KDIOqPhSE07Zo82GQ8PcJ8TAjARiMNIaJQ5JKKvPeGxv7x9qWd58uKweIIrMJj%2BssBy3D3ttac6C8w8%2FVuOGFLYlGt5vIsSUlCDwyt7db8CNbjgl7YKOQMkiz5NGHlZe9Th621bE%2BCGe%2F9wckMXxeqxkkx4AN8IWpxaSVxCBjEPc6h2LVi1tIaVqEEvk4K4warGJggewfktR%2FzgpxeMaUIv6RGaQnYMQBDPWlZkYeCa4n3vZaQbnKPTKugXyOr9qTRv9JafHFHsmSH80XnYt%2FonAQoPU3q9%2B44LImGG538EmbfMzpArZxw5ZeJQFUOVEVDGOURsXxQ6z6clhz246%2BiPH9R77i7rh1yjXfx%2FfNhbb1FOPeds7WQfWAPa9nQQ8V4WgX9BfL5Iw%2FK2kxAY6pgH29AVTH7UFHIsQUN69215lGUfGdmKKVn0n5AJnTlJrf1HNeVyJu5xsipvy380swQIrDNAL491f7%2FJk6AwnjFFWszZq8796ielApWHowmCBQ%2FsZF84YiGM8R53ijPqye8CeEucd0MewwmWwaJ7lm2M0ueXc2QHHGxSAiZoV0gAuhNQWnQKjl2cOiD2TX1fQ2SgZZ5VuTj080yxSF%2Fpl9doMegX6aMcW&X-Amz-Signature=57cef8712b16c466e1d53819d96a2248de7c51c06feb3201a3a65066d2682c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CBPU7MD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0cLeljFqqj8Iw9%2BJV6WRZ3ATr4O5z9Sfo5EQEPRzVZAiA%2FnhWp3Y2SYCHqyNQYBxSsVIdr9hXIid6R0ECj2gNF0CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhBanGrNfnOdjgs3YKtwDWnEIPJ7wQabxTuC9VF1UEHWOdDe%2BAEi8ceB%2FB8D3m3U1YnNP5V7NNQL5BhTk76s9CMQmiiVRmHtp8wEWBwwHZEegDu7lATPUqcJJIchCyJGLI3Giw41PlF0dN4D4FrnezwKkN4BzZx0G0ThW7dJHZVZxwS6ouxfAFTAxIiwbYgOhixe%2B%2FqIXmMPpQpeC6OtdWbiCMBZphSF31PGz3xEgeIPEn1o6cRuMFKYqaTKdMzEBZuJ9KDIOqPhSE07Zo82GQ8PcJ8TAjARiMNIaJQ5JKKvPeGxv7x9qWd58uKweIIrMJj%2BssBy3D3ttac6C8w8%2FVuOGFLYlGt5vIsSUlCDwyt7db8CNbjgl7YKOQMkiz5NGHlZe9Th621bE%2BCGe%2F9wckMXxeqxkkx4AN8IWpxaSVxCBjEPc6h2LVi1tIaVqEEvk4K4warGJggewfktR%2FzgpxeMaUIv6RGaQnYMQBDPWlZkYeCa4n3vZaQbnKPTKugXyOr9qTRv9JafHFHsmSH80XnYt%2FonAQoPU3q9%2B44LImGG538EmbfMzpArZxw5ZeJQFUOVEVDGOURsXxQ6z6clhz246%2BiPH9R77i7rh1yjXfx%2FfNhbb1FOPeds7WQfWAPa9nQQ8V4WgX9BfL5Iw%2FK2kxAY6pgH29AVTH7UFHIsQUN69215lGUfGdmKKVn0n5AJnTlJrf1HNeVyJu5xsipvy380swQIrDNAL491f7%2FJk6AwnjFFWszZq8796ielApWHowmCBQ%2FsZF84YiGM8R53ijPqye8CeEucd0MewwmWwaJ7lm2M0ueXc2QHHGxSAiZoV0gAuhNQWnQKjl2cOiD2TX1fQ2SgZZ5VuTj080yxSF%2Fpl9doMegX6aMcW&X-Amz-Signature=55007f82ec3761f20a4c6484c99fb19375f8f3bf67ac8541fa5812f8bf29ab8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CBPU7MD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0cLeljFqqj8Iw9%2BJV6WRZ3ATr4O5z9Sfo5EQEPRzVZAiA%2FnhWp3Y2SYCHqyNQYBxSsVIdr9hXIid6R0ECj2gNF0CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhBanGrNfnOdjgs3YKtwDWnEIPJ7wQabxTuC9VF1UEHWOdDe%2BAEi8ceB%2FB8D3m3U1YnNP5V7NNQL5BhTk76s9CMQmiiVRmHtp8wEWBwwHZEegDu7lATPUqcJJIchCyJGLI3Giw41PlF0dN4D4FrnezwKkN4BzZx0G0ThW7dJHZVZxwS6ouxfAFTAxIiwbYgOhixe%2B%2FqIXmMPpQpeC6OtdWbiCMBZphSF31PGz3xEgeIPEn1o6cRuMFKYqaTKdMzEBZuJ9KDIOqPhSE07Zo82GQ8PcJ8TAjARiMNIaJQ5JKKvPeGxv7x9qWd58uKweIIrMJj%2BssBy3D3ttac6C8w8%2FVuOGFLYlGt5vIsSUlCDwyt7db8CNbjgl7YKOQMkiz5NGHlZe9Th621bE%2BCGe%2F9wckMXxeqxkkx4AN8IWpxaSVxCBjEPc6h2LVi1tIaVqEEvk4K4warGJggewfktR%2FzgpxeMaUIv6RGaQnYMQBDPWlZkYeCa4n3vZaQbnKPTKugXyOr9qTRv9JafHFHsmSH80XnYt%2FonAQoPU3q9%2B44LImGG538EmbfMzpArZxw5ZeJQFUOVEVDGOURsXxQ6z6clhz246%2BiPH9R77i7rh1yjXfx%2FfNhbb1FOPeds7WQfWAPa9nQQ8V4WgX9BfL5Iw%2FK2kxAY6pgH29AVTH7UFHIsQUN69215lGUfGdmKKVn0n5AJnTlJrf1HNeVyJu5xsipvy380swQIrDNAL491f7%2FJk6AwnjFFWszZq8796ielApWHowmCBQ%2FsZF84YiGM8R53ijPqye8CeEucd0MewwmWwaJ7lm2M0ueXc2QHHGxSAiZoV0gAuhNQWnQKjl2cOiD2TX1fQ2SgZZ5VuTj080yxSF%2Fpl9doMegX6aMcW&X-Amz-Signature=2688ae4701af3fb1bd02129c06c782e199480a9acc1500244ca9f648f62fe292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CBPU7MD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0cLeljFqqj8Iw9%2BJV6WRZ3ATr4O5z9Sfo5EQEPRzVZAiA%2FnhWp3Y2SYCHqyNQYBxSsVIdr9hXIid6R0ECj2gNF0CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhBanGrNfnOdjgs3YKtwDWnEIPJ7wQabxTuC9VF1UEHWOdDe%2BAEi8ceB%2FB8D3m3U1YnNP5V7NNQL5BhTk76s9CMQmiiVRmHtp8wEWBwwHZEegDu7lATPUqcJJIchCyJGLI3Giw41PlF0dN4D4FrnezwKkN4BzZx0G0ThW7dJHZVZxwS6ouxfAFTAxIiwbYgOhixe%2B%2FqIXmMPpQpeC6OtdWbiCMBZphSF31PGz3xEgeIPEn1o6cRuMFKYqaTKdMzEBZuJ9KDIOqPhSE07Zo82GQ8PcJ8TAjARiMNIaJQ5JKKvPeGxv7x9qWd58uKweIIrMJj%2BssBy3D3ttac6C8w8%2FVuOGFLYlGt5vIsSUlCDwyt7db8CNbjgl7YKOQMkiz5NGHlZe9Th621bE%2BCGe%2F9wckMXxeqxkkx4AN8IWpxaSVxCBjEPc6h2LVi1tIaVqEEvk4K4warGJggewfktR%2FzgpxeMaUIv6RGaQnYMQBDPWlZkYeCa4n3vZaQbnKPTKugXyOr9qTRv9JafHFHsmSH80XnYt%2FonAQoPU3q9%2B44LImGG538EmbfMzpArZxw5ZeJQFUOVEVDGOURsXxQ6z6clhz246%2BiPH9R77i7rh1yjXfx%2FfNhbb1FOPeds7WQfWAPa9nQQ8V4WgX9BfL5Iw%2FK2kxAY6pgH29AVTH7UFHIsQUN69215lGUfGdmKKVn0n5AJnTlJrf1HNeVyJu5xsipvy380swQIrDNAL491f7%2FJk6AwnjFFWszZq8796ielApWHowmCBQ%2FsZF84YiGM8R53ijPqye8CeEucd0MewwmWwaJ7lm2M0ueXc2QHHGxSAiZoV0gAuhNQWnQKjl2cOiD2TX1fQ2SgZZ5VuTj080yxSF%2Fpl9doMegX6aMcW&X-Amz-Signature=08bc6bb41c2d12bf8883e03c2813fd6e7fe77df2d53a905c4348c89838970d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CBPU7MD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0cLeljFqqj8Iw9%2BJV6WRZ3ATr4O5z9Sfo5EQEPRzVZAiA%2FnhWp3Y2SYCHqyNQYBxSsVIdr9hXIid6R0ECj2gNF0CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhBanGrNfnOdjgs3YKtwDWnEIPJ7wQabxTuC9VF1UEHWOdDe%2BAEi8ceB%2FB8D3m3U1YnNP5V7NNQL5BhTk76s9CMQmiiVRmHtp8wEWBwwHZEegDu7lATPUqcJJIchCyJGLI3Giw41PlF0dN4D4FrnezwKkN4BzZx0G0ThW7dJHZVZxwS6ouxfAFTAxIiwbYgOhixe%2B%2FqIXmMPpQpeC6OtdWbiCMBZphSF31PGz3xEgeIPEn1o6cRuMFKYqaTKdMzEBZuJ9KDIOqPhSE07Zo82GQ8PcJ8TAjARiMNIaJQ5JKKvPeGxv7x9qWd58uKweIIrMJj%2BssBy3D3ttac6C8w8%2FVuOGFLYlGt5vIsSUlCDwyt7db8CNbjgl7YKOQMkiz5NGHlZe9Th621bE%2BCGe%2F9wckMXxeqxkkx4AN8IWpxaSVxCBjEPc6h2LVi1tIaVqEEvk4K4warGJggewfktR%2FzgpxeMaUIv6RGaQnYMQBDPWlZkYeCa4n3vZaQbnKPTKugXyOr9qTRv9JafHFHsmSH80XnYt%2FonAQoPU3q9%2B44LImGG538EmbfMzpArZxw5ZeJQFUOVEVDGOURsXxQ6z6clhz246%2BiPH9R77i7rh1yjXfx%2FfNhbb1FOPeds7WQfWAPa9nQQ8V4WgX9BfL5Iw%2FK2kxAY6pgH29AVTH7UFHIsQUN69215lGUfGdmKKVn0n5AJnTlJrf1HNeVyJu5xsipvy380swQIrDNAL491f7%2FJk6AwnjFFWszZq8796ielApWHowmCBQ%2FsZF84YiGM8R53ijPqye8CeEucd0MewwmWwaJ7lm2M0ueXc2QHHGxSAiZoV0gAuhNQWnQKjl2cOiD2TX1fQ2SgZZ5VuTj080yxSF%2Fpl9doMegX6aMcW&X-Amz-Signature=33a6dd858b122d5eccb37e3e6aef0cf3426650bc450202acac54cf219a2c71c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
   
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>

    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CBPU7MD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0cLeljFqqj8Iw9%2BJV6WRZ3ATr4O5z9Sfo5EQEPRzVZAiA%2FnhWp3Y2SYCHqyNQYBxSsVIdr9hXIid6R0ECj2gNF0CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhBanGrNfnOdjgs3YKtwDWnEIPJ7wQabxTuC9VF1UEHWOdDe%2BAEi8ceB%2FB8D3m3U1YnNP5V7NNQL5BhTk76s9CMQmiiVRmHtp8wEWBwwHZEegDu7lATPUqcJJIchCyJGLI3Giw41PlF0dN4D4FrnezwKkN4BzZx0G0ThW7dJHZVZxwS6ouxfAFTAxIiwbYgOhixe%2B%2FqIXmMPpQpeC6OtdWbiCMBZphSF31PGz3xEgeIPEn1o6cRuMFKYqaTKdMzEBZuJ9KDIOqPhSE07Zo82GQ8PcJ8TAjARiMNIaJQ5JKKvPeGxv7x9qWd58uKweIIrMJj%2BssBy3D3ttac6C8w8%2FVuOGFLYlGt5vIsSUlCDwyt7db8CNbjgl7YKOQMkiz5NGHlZe9Th621bE%2BCGe%2F9wckMXxeqxkkx4AN8IWpxaSVxCBjEPc6h2LVi1tIaVqEEvk4K4warGJggewfktR%2FzgpxeMaUIv6RGaQnYMQBDPWlZkYeCa4n3vZaQbnKPTKugXyOr9qTRv9JafHFHsmSH80XnYt%2FonAQoPU3q9%2B44LImGG538EmbfMzpArZxw5ZeJQFUOVEVDGOURsXxQ6z6clhz246%2BiPH9R77i7rh1yjXfx%2FfNhbb1FOPeds7WQfWAPa9nQQ8V4WgX9BfL5Iw%2FK2kxAY6pgH29AVTH7UFHIsQUN69215lGUfGdmKKVn0n5AJnTlJrf1HNeVyJu5xsipvy380swQIrDNAL491f7%2FJk6AwnjFFWszZq8796ielApWHowmCBQ%2FsZF84YiGM8R53ijPqye8CeEucd0MewwmWwaJ7lm2M0ueXc2QHHGxSAiZoV0gAuhNQWnQKjl2cOiD2TX1fQ2SgZZ5VuTj080yxSF%2Fpl9doMegX6aMcW&X-Amz-Signature=eaff5967fc7140fe25dc20309eae3d7a39b9f6a142bc281b4f9ff86987daf444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CBPU7MD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0cLeljFqqj8Iw9%2BJV6WRZ3ATr4O5z9Sfo5EQEPRzVZAiA%2FnhWp3Y2SYCHqyNQYBxSsVIdr9hXIid6R0ECj2gNF0CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhBanGrNfnOdjgs3YKtwDWnEIPJ7wQabxTuC9VF1UEHWOdDe%2BAEi8ceB%2FB8D3m3U1YnNP5V7NNQL5BhTk76s9CMQmiiVRmHtp8wEWBwwHZEegDu7lATPUqcJJIchCyJGLI3Giw41PlF0dN4D4FrnezwKkN4BzZx0G0ThW7dJHZVZxwS6ouxfAFTAxIiwbYgOhixe%2B%2FqIXmMPpQpeC6OtdWbiCMBZphSF31PGz3xEgeIPEn1o6cRuMFKYqaTKdMzEBZuJ9KDIOqPhSE07Zo82GQ8PcJ8TAjARiMNIaJQ5JKKvPeGxv7x9qWd58uKweIIrMJj%2BssBy3D3ttac6C8w8%2FVuOGFLYlGt5vIsSUlCDwyt7db8CNbjgl7YKOQMkiz5NGHlZe9Th621bE%2BCGe%2F9wckMXxeqxkkx4AN8IWpxaSVxCBjEPc6h2LVi1tIaVqEEvk4K4warGJggewfktR%2FzgpxeMaUIv6RGaQnYMQBDPWlZkYeCa4n3vZaQbnKPTKugXyOr9qTRv9JafHFHsmSH80XnYt%2FonAQoPU3q9%2B44LImGG538EmbfMzpArZxw5ZeJQFUOVEVDGOURsXxQ6z6clhz246%2BiPH9R77i7rh1yjXfx%2FfNhbb1FOPeds7WQfWAPa9nQQ8V4WgX9BfL5Iw%2FK2kxAY6pgH29AVTH7UFHIsQUN69215lGUfGdmKKVn0n5AJnTlJrf1HNeVyJu5xsipvy380swQIrDNAL491f7%2FJk6AwnjFFWszZq8796ielApWHowmCBQ%2FsZF84YiGM8R53ijPqye8CeEucd0MewwmWwaJ7lm2M0ueXc2QHHGxSAiZoV0gAuhNQWnQKjl2cOiD2TX1fQ2SgZZ5VuTj080yxSF%2Fpl9doMegX6aMcW&X-Amz-Signature=d8a321c8b5addae2f1a6465a7cea8cb3a81702d7bce73345c8036ca36106f356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CBPU7MD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0cLeljFqqj8Iw9%2BJV6WRZ3ATr4O5z9Sfo5EQEPRzVZAiA%2FnhWp3Y2SYCHqyNQYBxSsVIdr9hXIid6R0ECj2gNF0CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhBanGrNfnOdjgs3YKtwDWnEIPJ7wQabxTuC9VF1UEHWOdDe%2BAEi8ceB%2FB8D3m3U1YnNP5V7NNQL5BhTk76s9CMQmiiVRmHtp8wEWBwwHZEegDu7lATPUqcJJIchCyJGLI3Giw41PlF0dN4D4FrnezwKkN4BzZx0G0ThW7dJHZVZxwS6ouxfAFTAxIiwbYgOhixe%2B%2FqIXmMPpQpeC6OtdWbiCMBZphSF31PGz3xEgeIPEn1o6cRuMFKYqaTKdMzEBZuJ9KDIOqPhSE07Zo82GQ8PcJ8TAjARiMNIaJQ5JKKvPeGxv7x9qWd58uKweIIrMJj%2BssBy3D3ttac6C8w8%2FVuOGFLYlGt5vIsSUlCDwyt7db8CNbjgl7YKOQMkiz5NGHlZe9Th621bE%2BCGe%2F9wckMXxeqxkkx4AN8IWpxaSVxCBjEPc6h2LVi1tIaVqEEvk4K4warGJggewfktR%2FzgpxeMaUIv6RGaQnYMQBDPWlZkYeCa4n3vZaQbnKPTKugXyOr9qTRv9JafHFHsmSH80XnYt%2FonAQoPU3q9%2B44LImGG538EmbfMzpArZxw5ZeJQFUOVEVDGOURsXxQ6z6clhz246%2BiPH9R77i7rh1yjXfx%2FfNhbb1FOPeds7WQfWAPa9nQQ8V4WgX9BfL5Iw%2FK2kxAY6pgH29AVTH7UFHIsQUN69215lGUfGdmKKVn0n5AJnTlJrf1HNeVyJu5xsipvy380swQIrDNAL491f7%2FJk6AwnjFFWszZq8796ielApWHowmCBQ%2FsZF84YiGM8R53ijPqye8CeEucd0MewwmWwaJ7lm2M0ueXc2QHHGxSAiZoV0gAuhNQWnQKjl2cOiD2TX1fQ2SgZZ5VuTj080yxSF%2Fpl9doMegX6aMcW&X-Amz-Signature=e69574d41d948d166c535b167d0bff76300d704a21beb9b14d7ea3be37faeb05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CBPU7MD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0cLeljFqqj8Iw9%2BJV6WRZ3ATr4O5z9Sfo5EQEPRzVZAiA%2FnhWp3Y2SYCHqyNQYBxSsVIdr9hXIid6R0ECj2gNF0CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhBanGrNfnOdjgs3YKtwDWnEIPJ7wQabxTuC9VF1UEHWOdDe%2BAEi8ceB%2FB8D3m3U1YnNP5V7NNQL5BhTk76s9CMQmiiVRmHtp8wEWBwwHZEegDu7lATPUqcJJIchCyJGLI3Giw41PlF0dN4D4FrnezwKkN4BzZx0G0ThW7dJHZVZxwS6ouxfAFTAxIiwbYgOhixe%2B%2FqIXmMPpQpeC6OtdWbiCMBZphSF31PGz3xEgeIPEn1o6cRuMFKYqaTKdMzEBZuJ9KDIOqPhSE07Zo82GQ8PcJ8TAjARiMNIaJQ5JKKvPeGxv7x9qWd58uKweIIrMJj%2BssBy3D3ttac6C8w8%2FVuOGFLYlGt5vIsSUlCDwyt7db8CNbjgl7YKOQMkiz5NGHlZe9Th621bE%2BCGe%2F9wckMXxeqxkkx4AN8IWpxaSVxCBjEPc6h2LVi1tIaVqEEvk4K4warGJggewfktR%2FzgpxeMaUIv6RGaQnYMQBDPWlZkYeCa4n3vZaQbnKPTKugXyOr9qTRv9JafHFHsmSH80XnYt%2FonAQoPU3q9%2B44LImGG538EmbfMzpArZxw5ZeJQFUOVEVDGOURsXxQ6z6clhz246%2BiPH9R77i7rh1yjXfx%2FfNhbb1FOPeds7WQfWAPa9nQQ8V4WgX9BfL5Iw%2FK2kxAY6pgH29AVTH7UFHIsQUN69215lGUfGdmKKVn0n5AJnTlJrf1HNeVyJu5xsipvy380swQIrDNAL491f7%2FJk6AwnjFFWszZq8796ielApWHowmCBQ%2FsZF84YiGM8R53ijPqye8CeEucd0MewwmWwaJ7lm2M0ueXc2QHHGxSAiZoV0gAuhNQWnQKjl2cOiD2TX1fQ2SgZZ5VuTj080yxSF%2Fpl9doMegX6aMcW&X-Amz-Signature=9f9041f0ae2c70a2b551cff75112acdf2e1521533fd3d73fb38d4ef8cd876f5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2EHRM6W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH8L46HWPLuiIH9PpoEChO%2BLVmzgyJdA6tkvTS6XtFgwIgZ%2F1AvJrgEDi362GQj7ZFAcs3nDJDWtHEBDD9g%2FOVPFoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR%2BdaNjyakNoHG2gCrcA9ABUSTAN5zSnPEG3Vb05IwwXX%2FV2d75EEjAb0oeJH1yf5u0MyrYyzaRn001DPMEEwhtxhAO%2BkBVfOn9DYLt1pYOuNAR6wP2ICc%2FNKECQqibdBjq2991bpi4gq04IAikvWq03qsnVdZWejgUYmR5ODDgYmnBRzsDak6NGxCnm%2BLESC%2F%2BnW4VZ5woGqU4nAbN7441gNXoAQ3Dz8uoUXSaZD92isDlUA5dTqX7hxFnJ3sRmN8aRfdxHJ7W%2F8DyLoITcp48YEuWVHB5gM2IeZ5eJXEaDN0HqJ9aKi2%2BYhkuYb9a4%2FUPIo4nsCwATHmoO7Jx20qg0yoSJp9vf%2BlOXlnsZ1D67uCYs0ukH5hoNNkYlZdCCq%2B%2FgkhvzIQ6FXl4XRnpC%2BQjD%2Bx2PUeV7EjMtHIKTooqABFODqCfzFX8y8K%2BvbuPveLBtM1E5vxiYQ5OCGvsWu%2BiJzQKmz8roHTzUbzMZUJfrGOaIEtiEz%2Bf4U0lJzW%2BdlT7mhZaPRG4dy948ivSE1CUrWumDNYIV%2F4wNuzSxXx6PhHzir43Nnb1nPY9Y4dahf8c3uxA6cBh4MQTdzu96es2f6eFDKf6%2BdiSEE0d8IvzeoZVYYp8QU%2F7CWSaJ5iE1UhhAm%2BhP8iGB6lGMOitpMQGOqUBp%2FZoZaco0GviCpkiww3zQnbuqX3M6JCb2NGLHI32K2xQd8zGUmp0YWcXfS%2FLRH2VHm8GNWFEDgU%2BD%2FAaIxMzx787luC7E99%2F%2B6fjFWxKXin8YBDXYmCsazV18EPMtdIze7%2Bw%2FjKaMGX4PuJPlVDMbeIEOLWnjcHJDWvcngyAagXhL86eRKVKE%2FNILFK9FU024Tui%2BT9%2FPzy0RxAFSRLNaowA6dI7&X-Amz-Signature=0a8dc4ab7d7bd942e96e23f1a698e6fb6a63320cf8207b2f695ef7cc82d54cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2EHRM6W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH8L46HWPLuiIH9PpoEChO%2BLVmzgyJdA6tkvTS6XtFgwIgZ%2F1AvJrgEDi362GQj7ZFAcs3nDJDWtHEBDD9g%2FOVPFoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR%2BdaNjyakNoHG2gCrcA9ABUSTAN5zSnPEG3Vb05IwwXX%2FV2d75EEjAb0oeJH1yf5u0MyrYyzaRn001DPMEEwhtxhAO%2BkBVfOn9DYLt1pYOuNAR6wP2ICc%2FNKECQqibdBjq2991bpi4gq04IAikvWq03qsnVdZWejgUYmR5ODDgYmnBRzsDak6NGxCnm%2BLESC%2F%2BnW4VZ5woGqU4nAbN7441gNXoAQ3Dz8uoUXSaZD92isDlUA5dTqX7hxFnJ3sRmN8aRfdxHJ7W%2F8DyLoITcp48YEuWVHB5gM2IeZ5eJXEaDN0HqJ9aKi2%2BYhkuYb9a4%2FUPIo4nsCwATHmoO7Jx20qg0yoSJp9vf%2BlOXlnsZ1D67uCYs0ukH5hoNNkYlZdCCq%2B%2FgkhvzIQ6FXl4XRnpC%2BQjD%2Bx2PUeV7EjMtHIKTooqABFODqCfzFX8y8K%2BvbuPveLBtM1E5vxiYQ5OCGvsWu%2BiJzQKmz8roHTzUbzMZUJfrGOaIEtiEz%2Bf4U0lJzW%2BdlT7mhZaPRG4dy948ivSE1CUrWumDNYIV%2F4wNuzSxXx6PhHzir43Nnb1nPY9Y4dahf8c3uxA6cBh4MQTdzu96es2f6eFDKf6%2BdiSEE0d8IvzeoZVYYp8QU%2F7CWSaJ5iE1UhhAm%2BhP8iGB6lGMOitpMQGOqUBp%2FZoZaco0GviCpkiww3zQnbuqX3M6JCb2NGLHI32K2xQd8zGUmp0YWcXfS%2FLRH2VHm8GNWFEDgU%2BD%2FAaIxMzx787luC7E99%2F%2B6fjFWxKXin8YBDXYmCsazV18EPMtdIze7%2Bw%2FjKaMGX4PuJPlVDMbeIEOLWnjcHJDWvcngyAagXhL86eRKVKE%2FNILFK9FU024Tui%2BT9%2FPzy0RxAFSRLNaowA6dI7&X-Amz-Signature=a183755dd416a566ebd0668eb5963d6e265c96b3b7219ad4c193e43d838bcd88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2EHRM6W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH8L46HWPLuiIH9PpoEChO%2BLVmzgyJdA6tkvTS6XtFgwIgZ%2F1AvJrgEDi362GQj7ZFAcs3nDJDWtHEBDD9g%2FOVPFoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR%2BdaNjyakNoHG2gCrcA9ABUSTAN5zSnPEG3Vb05IwwXX%2FV2d75EEjAb0oeJH1yf5u0MyrYyzaRn001DPMEEwhtxhAO%2BkBVfOn9DYLt1pYOuNAR6wP2ICc%2FNKECQqibdBjq2991bpi4gq04IAikvWq03qsnVdZWejgUYmR5ODDgYmnBRzsDak6NGxCnm%2BLESC%2F%2BnW4VZ5woGqU4nAbN7441gNXoAQ3Dz8uoUXSaZD92isDlUA5dTqX7hxFnJ3sRmN8aRfdxHJ7W%2F8DyLoITcp48YEuWVHB5gM2IeZ5eJXEaDN0HqJ9aKi2%2BYhkuYb9a4%2FUPIo4nsCwATHmoO7Jx20qg0yoSJp9vf%2BlOXlnsZ1D67uCYs0ukH5hoNNkYlZdCCq%2B%2FgkhvzIQ6FXl4XRnpC%2BQjD%2Bx2PUeV7EjMtHIKTooqABFODqCfzFX8y8K%2BvbuPveLBtM1E5vxiYQ5OCGvsWu%2BiJzQKmz8roHTzUbzMZUJfrGOaIEtiEz%2Bf4U0lJzW%2BdlT7mhZaPRG4dy948ivSE1CUrWumDNYIV%2F4wNuzSxXx6PhHzir43Nnb1nPY9Y4dahf8c3uxA6cBh4MQTdzu96es2f6eFDKf6%2BdiSEE0d8IvzeoZVYYp8QU%2F7CWSaJ5iE1UhhAm%2BhP8iGB6lGMOitpMQGOqUBp%2FZoZaco0GviCpkiww3zQnbuqX3M6JCb2NGLHI32K2xQd8zGUmp0YWcXfS%2FLRH2VHm8GNWFEDgU%2BD%2FAaIxMzx787luC7E99%2F%2B6fjFWxKXin8YBDXYmCsazV18EPMtdIze7%2Bw%2FjKaMGX4PuJPlVDMbeIEOLWnjcHJDWvcngyAagXhL86eRKVKE%2FNILFK9FU024Tui%2BT9%2FPzy0RxAFSRLNaowA6dI7&X-Amz-Signature=cefa85b0f943f4e3700f98becb32acd8a14011ec263e7af870e3dcb23dd7d359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2EHRM6W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH8L46HWPLuiIH9PpoEChO%2BLVmzgyJdA6tkvTS6XtFgwIgZ%2F1AvJrgEDi362GQj7ZFAcs3nDJDWtHEBDD9g%2FOVPFoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR%2BdaNjyakNoHG2gCrcA9ABUSTAN5zSnPEG3Vb05IwwXX%2FV2d75EEjAb0oeJH1yf5u0MyrYyzaRn001DPMEEwhtxhAO%2BkBVfOn9DYLt1pYOuNAR6wP2ICc%2FNKECQqibdBjq2991bpi4gq04IAikvWq03qsnVdZWejgUYmR5ODDgYmnBRzsDak6NGxCnm%2BLESC%2F%2BnW4VZ5woGqU4nAbN7441gNXoAQ3Dz8uoUXSaZD92isDlUA5dTqX7hxFnJ3sRmN8aRfdxHJ7W%2F8DyLoITcp48YEuWVHB5gM2IeZ5eJXEaDN0HqJ9aKi2%2BYhkuYb9a4%2FUPIo4nsCwATHmoO7Jx20qg0yoSJp9vf%2BlOXlnsZ1D67uCYs0ukH5hoNNkYlZdCCq%2B%2FgkhvzIQ6FXl4XRnpC%2BQjD%2Bx2PUeV7EjMtHIKTooqABFODqCfzFX8y8K%2BvbuPveLBtM1E5vxiYQ5OCGvsWu%2BiJzQKmz8roHTzUbzMZUJfrGOaIEtiEz%2Bf4U0lJzW%2BdlT7mhZaPRG4dy948ivSE1CUrWumDNYIV%2F4wNuzSxXx6PhHzir43Nnb1nPY9Y4dahf8c3uxA6cBh4MQTdzu96es2f6eFDKf6%2BdiSEE0d8IvzeoZVYYp8QU%2F7CWSaJ5iE1UhhAm%2BhP8iGB6lGMOitpMQGOqUBp%2FZoZaco0GviCpkiww3zQnbuqX3M6JCb2NGLHI32K2xQd8zGUmp0YWcXfS%2FLRH2VHm8GNWFEDgU%2BD%2FAaIxMzx787luC7E99%2F%2B6fjFWxKXin8YBDXYmCsazV18EPMtdIze7%2Bw%2FjKaMGX4PuJPlVDMbeIEOLWnjcHJDWvcngyAagXhL86eRKVKE%2FNILFK9FU024Tui%2BT9%2FPzy0RxAFSRLNaowA6dI7&X-Amz-Signature=2c3aafbbeee9502753a9bb83ef55fa441ae2c0de298ef7d431547966edb14d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2EHRM6W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH8L46HWPLuiIH9PpoEChO%2BLVmzgyJdA6tkvTS6XtFgwIgZ%2F1AvJrgEDi362GQj7ZFAcs3nDJDWtHEBDD9g%2FOVPFoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR%2BdaNjyakNoHG2gCrcA9ABUSTAN5zSnPEG3Vb05IwwXX%2FV2d75EEjAb0oeJH1yf5u0MyrYyzaRn001DPMEEwhtxhAO%2BkBVfOn9DYLt1pYOuNAR6wP2ICc%2FNKECQqibdBjq2991bpi4gq04IAikvWq03qsnVdZWejgUYmR5ODDgYmnBRzsDak6NGxCnm%2BLESC%2F%2BnW4VZ5woGqU4nAbN7441gNXoAQ3Dz8uoUXSaZD92isDlUA5dTqX7hxFnJ3sRmN8aRfdxHJ7W%2F8DyLoITcp48YEuWVHB5gM2IeZ5eJXEaDN0HqJ9aKi2%2BYhkuYb9a4%2FUPIo4nsCwATHmoO7Jx20qg0yoSJp9vf%2BlOXlnsZ1D67uCYs0ukH5hoNNkYlZdCCq%2B%2FgkhvzIQ6FXl4XRnpC%2BQjD%2Bx2PUeV7EjMtHIKTooqABFODqCfzFX8y8K%2BvbuPveLBtM1E5vxiYQ5OCGvsWu%2BiJzQKmz8roHTzUbzMZUJfrGOaIEtiEz%2Bf4U0lJzW%2BdlT7mhZaPRG4dy948ivSE1CUrWumDNYIV%2F4wNuzSxXx6PhHzir43Nnb1nPY9Y4dahf8c3uxA6cBh4MQTdzu96es2f6eFDKf6%2BdiSEE0d8IvzeoZVYYp8QU%2F7CWSaJ5iE1UhhAm%2BhP8iGB6lGMOitpMQGOqUBp%2FZoZaco0GviCpkiww3zQnbuqX3M6JCb2NGLHI32K2xQd8zGUmp0YWcXfS%2FLRH2VHm8GNWFEDgU%2BD%2FAaIxMzx787luC7E99%2F%2B6fjFWxKXin8YBDXYmCsazV18EPMtdIze7%2Bw%2FjKaMGX4PuJPlVDMbeIEOLWnjcHJDWvcngyAagXhL86eRKVKE%2FNILFK9FU024Tui%2BT9%2FPzy0RxAFSRLNaowA6dI7&X-Amz-Signature=de6e2399b8cebf3a6382b722efdb64a002795848fb7c7902fb772236175fabcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2EHRM6W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH8L46HWPLuiIH9PpoEChO%2BLVmzgyJdA6tkvTS6XtFgwIgZ%2F1AvJrgEDi362GQj7ZFAcs3nDJDWtHEBDD9g%2FOVPFoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR%2BdaNjyakNoHG2gCrcA9ABUSTAN5zSnPEG3Vb05IwwXX%2FV2d75EEjAb0oeJH1yf5u0MyrYyzaRn001DPMEEwhtxhAO%2BkBVfOn9DYLt1pYOuNAR6wP2ICc%2FNKECQqibdBjq2991bpi4gq04IAikvWq03qsnVdZWejgUYmR5ODDgYmnBRzsDak6NGxCnm%2BLESC%2F%2BnW4VZ5woGqU4nAbN7441gNXoAQ3Dz8uoUXSaZD92isDlUA5dTqX7hxFnJ3sRmN8aRfdxHJ7W%2F8DyLoITcp48YEuWVHB5gM2IeZ5eJXEaDN0HqJ9aKi2%2BYhkuYb9a4%2FUPIo4nsCwATHmoO7Jx20qg0yoSJp9vf%2BlOXlnsZ1D67uCYs0ukH5hoNNkYlZdCCq%2B%2FgkhvzIQ6FXl4XRnpC%2BQjD%2Bx2PUeV7EjMtHIKTooqABFODqCfzFX8y8K%2BvbuPveLBtM1E5vxiYQ5OCGvsWu%2BiJzQKmz8roHTzUbzMZUJfrGOaIEtiEz%2Bf4U0lJzW%2BdlT7mhZaPRG4dy948ivSE1CUrWumDNYIV%2F4wNuzSxXx6PhHzir43Nnb1nPY9Y4dahf8c3uxA6cBh4MQTdzu96es2f6eFDKf6%2BdiSEE0d8IvzeoZVYYp8QU%2F7CWSaJ5iE1UhhAm%2BhP8iGB6lGMOitpMQGOqUBp%2FZoZaco0GviCpkiww3zQnbuqX3M6JCb2NGLHI32K2xQd8zGUmp0YWcXfS%2FLRH2VHm8GNWFEDgU%2BD%2FAaIxMzx787luC7E99%2F%2B6fjFWxKXin8YBDXYmCsazV18EPMtdIze7%2Bw%2FjKaMGX4PuJPlVDMbeIEOLWnjcHJDWvcngyAagXhL86eRKVKE%2FNILFK9FU024Tui%2BT9%2FPzy0RxAFSRLNaowA6dI7&X-Amz-Signature=461cc2c58cd24fe7063c3ce0ea110cb0cbad8545b8ad69bab54b579ec2845f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
