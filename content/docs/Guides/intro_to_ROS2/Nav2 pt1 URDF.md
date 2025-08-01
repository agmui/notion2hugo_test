---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-01T02:02:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-01T02:02:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDK7UXS4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1WoflUTWACSi6C9VC8CGIRtR8bvU3MOZAs6s%2B0M0rBQIhAPFHjIIigp9aZ2pqsIYZqAVJCHdgFy5xuslw9rFmO1AyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1A8LW%2FgHstQyiQVoq3AMz8nsE6zbwRa2TvRt3qqkXGVuvoiscaBe0hpI4H0N3VngXyG%2BO0zV7Ur0iozXJuAxBcjv9sKpeFC7d4qN4h37y3qY2uQvzMmeAEicQtcEgT0DMjnsy1prUai%2FN1YZ1LwBvz9XVZQL0yJl%2FZsNyZO8oDqT4EfvughcnVUzlSp2Y2jTPNyL7BVQdINdJud3pRFdr7pGTERo8MykTj9uTCkRGIR9KXk42dkU92FXEnOocaH7TKDN%2F6QMeoW2Nz9sIs7kigxVW%2Fov9E8CH7D5APWF7g31rzeQFseVoFvsP%2Fw1mOJvgVxVbxkdCdgl1wSxtCeWAP46MmstyxHuNQoOtsBHBK%2FyI2FPwZPNp2jyfPKV%2FXnPYds1fOdP21nhY1JuMFjv31SLmeT5AEWtNJjsUKnEAvxlHRJQkyUm%2Fh6K0WBOmZ9yoWSWOM9KX68%2F1ewRHBrChmEKQTVvFa4T%2FnM8E6G6EWKc2xHpOeewhvIG4cId8hsYxunKpfBVSGE%2FXvVNpj4hhdb0KvdSRfDvLYFlsfy%2FPefHMeRmdDGLm8N3EF9J3CMDzE%2BCMM3EBKsc26A9QB79Uhd8EJIOflQN6fP%2BIRWPsmqqQCGwxPSwByDJHkGpLGlUnbQywVe7fEfP4JTCGirPEBjqkAX%2Fw4lyjpCM4gbvGZ6c5ZCuxakoWFHFowBU2bZJxGTMeM4UKVCjQiyBHz9k%2FH5H4N1r0GXxrnqYH2ZK1v0%2BarBFYKkHyYHg7XDRPN160Bc8VjqJvXZxns1PtD0rBXRcv4LY8a00qFJN6OtQZS%2Fq3LtaEoyLc4mfutn%2Ft%2F1lFd34WOPoJAMxzFdJ1k%2BP7Kobu3W3T3r6yPSzFlM3QxmZk5agyMZdc&X-Amz-Signature=ffa578457e2884ed06dbb48ea35d75da265b125b38be401a689ab03bbaab52e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDK7UXS4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1WoflUTWACSi6C9VC8CGIRtR8bvU3MOZAs6s%2B0M0rBQIhAPFHjIIigp9aZ2pqsIYZqAVJCHdgFy5xuslw9rFmO1AyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1A8LW%2FgHstQyiQVoq3AMz8nsE6zbwRa2TvRt3qqkXGVuvoiscaBe0hpI4H0N3VngXyG%2BO0zV7Ur0iozXJuAxBcjv9sKpeFC7d4qN4h37y3qY2uQvzMmeAEicQtcEgT0DMjnsy1prUai%2FN1YZ1LwBvz9XVZQL0yJl%2FZsNyZO8oDqT4EfvughcnVUzlSp2Y2jTPNyL7BVQdINdJud3pRFdr7pGTERo8MykTj9uTCkRGIR9KXk42dkU92FXEnOocaH7TKDN%2F6QMeoW2Nz9sIs7kigxVW%2Fov9E8CH7D5APWF7g31rzeQFseVoFvsP%2Fw1mOJvgVxVbxkdCdgl1wSxtCeWAP46MmstyxHuNQoOtsBHBK%2FyI2FPwZPNp2jyfPKV%2FXnPYds1fOdP21nhY1JuMFjv31SLmeT5AEWtNJjsUKnEAvxlHRJQkyUm%2Fh6K0WBOmZ9yoWSWOM9KX68%2F1ewRHBrChmEKQTVvFa4T%2FnM8E6G6EWKc2xHpOeewhvIG4cId8hsYxunKpfBVSGE%2FXvVNpj4hhdb0KvdSRfDvLYFlsfy%2FPefHMeRmdDGLm8N3EF9J3CMDzE%2BCMM3EBKsc26A9QB79Uhd8EJIOflQN6fP%2BIRWPsmqqQCGwxPSwByDJHkGpLGlUnbQywVe7fEfP4JTCGirPEBjqkAX%2Fw4lyjpCM4gbvGZ6c5ZCuxakoWFHFowBU2bZJxGTMeM4UKVCjQiyBHz9k%2FH5H4N1r0GXxrnqYH2ZK1v0%2BarBFYKkHyYHg7XDRPN160Bc8VjqJvXZxns1PtD0rBXRcv4LY8a00qFJN6OtQZS%2Fq3LtaEoyLc4mfutn%2Ft%2F1lFd34WOPoJAMxzFdJ1k%2BP7Kobu3W3T3r6yPSzFlM3QxmZk5agyMZdc&X-Amz-Signature=d4614757c12001c83ec803f4ec0ba17b9eff898a9e3ad0a28e3477db883b1c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDK7UXS4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1WoflUTWACSi6C9VC8CGIRtR8bvU3MOZAs6s%2B0M0rBQIhAPFHjIIigp9aZ2pqsIYZqAVJCHdgFy5xuslw9rFmO1AyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1A8LW%2FgHstQyiQVoq3AMz8nsE6zbwRa2TvRt3qqkXGVuvoiscaBe0hpI4H0N3VngXyG%2BO0zV7Ur0iozXJuAxBcjv9sKpeFC7d4qN4h37y3qY2uQvzMmeAEicQtcEgT0DMjnsy1prUai%2FN1YZ1LwBvz9XVZQL0yJl%2FZsNyZO8oDqT4EfvughcnVUzlSp2Y2jTPNyL7BVQdINdJud3pRFdr7pGTERo8MykTj9uTCkRGIR9KXk42dkU92FXEnOocaH7TKDN%2F6QMeoW2Nz9sIs7kigxVW%2Fov9E8CH7D5APWF7g31rzeQFseVoFvsP%2Fw1mOJvgVxVbxkdCdgl1wSxtCeWAP46MmstyxHuNQoOtsBHBK%2FyI2FPwZPNp2jyfPKV%2FXnPYds1fOdP21nhY1JuMFjv31SLmeT5AEWtNJjsUKnEAvxlHRJQkyUm%2Fh6K0WBOmZ9yoWSWOM9KX68%2F1ewRHBrChmEKQTVvFa4T%2FnM8E6G6EWKc2xHpOeewhvIG4cId8hsYxunKpfBVSGE%2FXvVNpj4hhdb0KvdSRfDvLYFlsfy%2FPefHMeRmdDGLm8N3EF9J3CMDzE%2BCMM3EBKsc26A9QB79Uhd8EJIOflQN6fP%2BIRWPsmqqQCGwxPSwByDJHkGpLGlUnbQywVe7fEfP4JTCGirPEBjqkAX%2Fw4lyjpCM4gbvGZ6c5ZCuxakoWFHFowBU2bZJxGTMeM4UKVCjQiyBHz9k%2FH5H4N1r0GXxrnqYH2ZK1v0%2BarBFYKkHyYHg7XDRPN160Bc8VjqJvXZxns1PtD0rBXRcv4LY8a00qFJN6OtQZS%2Fq3LtaEoyLc4mfutn%2Ft%2F1lFd34WOPoJAMxzFdJ1k%2BP7Kobu3W3T3r6yPSzFlM3QxmZk5agyMZdc&X-Amz-Signature=057fe0b428b6c6a8bcb14b10b672a30b8984b5edddae97af1ad177772ddaa345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDK7UXS4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1WoflUTWACSi6C9VC8CGIRtR8bvU3MOZAs6s%2B0M0rBQIhAPFHjIIigp9aZ2pqsIYZqAVJCHdgFy5xuslw9rFmO1AyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1A8LW%2FgHstQyiQVoq3AMz8nsE6zbwRa2TvRt3qqkXGVuvoiscaBe0hpI4H0N3VngXyG%2BO0zV7Ur0iozXJuAxBcjv9sKpeFC7d4qN4h37y3qY2uQvzMmeAEicQtcEgT0DMjnsy1prUai%2FN1YZ1LwBvz9XVZQL0yJl%2FZsNyZO8oDqT4EfvughcnVUzlSp2Y2jTPNyL7BVQdINdJud3pRFdr7pGTERo8MykTj9uTCkRGIR9KXk42dkU92FXEnOocaH7TKDN%2F6QMeoW2Nz9sIs7kigxVW%2Fov9E8CH7D5APWF7g31rzeQFseVoFvsP%2Fw1mOJvgVxVbxkdCdgl1wSxtCeWAP46MmstyxHuNQoOtsBHBK%2FyI2FPwZPNp2jyfPKV%2FXnPYds1fOdP21nhY1JuMFjv31SLmeT5AEWtNJjsUKnEAvxlHRJQkyUm%2Fh6K0WBOmZ9yoWSWOM9KX68%2F1ewRHBrChmEKQTVvFa4T%2FnM8E6G6EWKc2xHpOeewhvIG4cId8hsYxunKpfBVSGE%2FXvVNpj4hhdb0KvdSRfDvLYFlsfy%2FPefHMeRmdDGLm8N3EF9J3CMDzE%2BCMM3EBKsc26A9QB79Uhd8EJIOflQN6fP%2BIRWPsmqqQCGwxPSwByDJHkGpLGlUnbQywVe7fEfP4JTCGirPEBjqkAX%2Fw4lyjpCM4gbvGZ6c5ZCuxakoWFHFowBU2bZJxGTMeM4UKVCjQiyBHz9k%2FH5H4N1r0GXxrnqYH2ZK1v0%2BarBFYKkHyYHg7XDRPN160Bc8VjqJvXZxns1PtD0rBXRcv4LY8a00qFJN6OtQZS%2Fq3LtaEoyLc4mfutn%2Ft%2F1lFd34WOPoJAMxzFdJ1k%2BP7Kobu3W3T3r6yPSzFlM3QxmZk5agyMZdc&X-Amz-Signature=81a76d2cfc5de4f1cced7cf76cc74c07e6f02f4e4f041065f1e7f61a30656fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDK7UXS4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1WoflUTWACSi6C9VC8CGIRtR8bvU3MOZAs6s%2B0M0rBQIhAPFHjIIigp9aZ2pqsIYZqAVJCHdgFy5xuslw9rFmO1AyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1A8LW%2FgHstQyiQVoq3AMz8nsE6zbwRa2TvRt3qqkXGVuvoiscaBe0hpI4H0N3VngXyG%2BO0zV7Ur0iozXJuAxBcjv9sKpeFC7d4qN4h37y3qY2uQvzMmeAEicQtcEgT0DMjnsy1prUai%2FN1YZ1LwBvz9XVZQL0yJl%2FZsNyZO8oDqT4EfvughcnVUzlSp2Y2jTPNyL7BVQdINdJud3pRFdr7pGTERo8MykTj9uTCkRGIR9KXk42dkU92FXEnOocaH7TKDN%2F6QMeoW2Nz9sIs7kigxVW%2Fov9E8CH7D5APWF7g31rzeQFseVoFvsP%2Fw1mOJvgVxVbxkdCdgl1wSxtCeWAP46MmstyxHuNQoOtsBHBK%2FyI2FPwZPNp2jyfPKV%2FXnPYds1fOdP21nhY1JuMFjv31SLmeT5AEWtNJjsUKnEAvxlHRJQkyUm%2Fh6K0WBOmZ9yoWSWOM9KX68%2F1ewRHBrChmEKQTVvFa4T%2FnM8E6G6EWKc2xHpOeewhvIG4cId8hsYxunKpfBVSGE%2FXvVNpj4hhdb0KvdSRfDvLYFlsfy%2FPefHMeRmdDGLm8N3EF9J3CMDzE%2BCMM3EBKsc26A9QB79Uhd8EJIOflQN6fP%2BIRWPsmqqQCGwxPSwByDJHkGpLGlUnbQywVe7fEfP4JTCGirPEBjqkAX%2Fw4lyjpCM4gbvGZ6c5ZCuxakoWFHFowBU2bZJxGTMeM4UKVCjQiyBHz9k%2FH5H4N1r0GXxrnqYH2ZK1v0%2BarBFYKkHyYHg7XDRPN160Bc8VjqJvXZxns1PtD0rBXRcv4LY8a00qFJN6OtQZS%2Fq3LtaEoyLc4mfutn%2Ft%2F1lFd34WOPoJAMxzFdJ1k%2BP7Kobu3W3T3r6yPSzFlM3QxmZk5agyMZdc&X-Amz-Signature=86d3db382549ef8380eec63138a0e3385e5730190451207d5653f1fc7e4f4e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDK7UXS4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1WoflUTWACSi6C9VC8CGIRtR8bvU3MOZAs6s%2B0M0rBQIhAPFHjIIigp9aZ2pqsIYZqAVJCHdgFy5xuslw9rFmO1AyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1A8LW%2FgHstQyiQVoq3AMz8nsE6zbwRa2TvRt3qqkXGVuvoiscaBe0hpI4H0N3VngXyG%2BO0zV7Ur0iozXJuAxBcjv9sKpeFC7d4qN4h37y3qY2uQvzMmeAEicQtcEgT0DMjnsy1prUai%2FN1YZ1LwBvz9XVZQL0yJl%2FZsNyZO8oDqT4EfvughcnVUzlSp2Y2jTPNyL7BVQdINdJud3pRFdr7pGTERo8MykTj9uTCkRGIR9KXk42dkU92FXEnOocaH7TKDN%2F6QMeoW2Nz9sIs7kigxVW%2Fov9E8CH7D5APWF7g31rzeQFseVoFvsP%2Fw1mOJvgVxVbxkdCdgl1wSxtCeWAP46MmstyxHuNQoOtsBHBK%2FyI2FPwZPNp2jyfPKV%2FXnPYds1fOdP21nhY1JuMFjv31SLmeT5AEWtNJjsUKnEAvxlHRJQkyUm%2Fh6K0WBOmZ9yoWSWOM9KX68%2F1ewRHBrChmEKQTVvFa4T%2FnM8E6G6EWKc2xHpOeewhvIG4cId8hsYxunKpfBVSGE%2FXvVNpj4hhdb0KvdSRfDvLYFlsfy%2FPefHMeRmdDGLm8N3EF9J3CMDzE%2BCMM3EBKsc26A9QB79Uhd8EJIOflQN6fP%2BIRWPsmqqQCGwxPSwByDJHkGpLGlUnbQywVe7fEfP4JTCGirPEBjqkAX%2Fw4lyjpCM4gbvGZ6c5ZCuxakoWFHFowBU2bZJxGTMeM4UKVCjQiyBHz9k%2FH5H4N1r0GXxrnqYH2ZK1v0%2BarBFYKkHyYHg7XDRPN160Bc8VjqJvXZxns1PtD0rBXRcv4LY8a00qFJN6OtQZS%2Fq3LtaEoyLc4mfutn%2Ft%2F1lFd34WOPoJAMxzFdJ1k%2BP7Kobu3W3T3r6yPSzFlM3QxmZk5agyMZdc&X-Amz-Signature=0ecde401426026d98a0e97cb1ff9d47e1bbfc8f249c6a10ec9cc244aec9ca500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDK7UXS4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1WoflUTWACSi6C9VC8CGIRtR8bvU3MOZAs6s%2B0M0rBQIhAPFHjIIigp9aZ2pqsIYZqAVJCHdgFy5xuslw9rFmO1AyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1A8LW%2FgHstQyiQVoq3AMz8nsE6zbwRa2TvRt3qqkXGVuvoiscaBe0hpI4H0N3VngXyG%2BO0zV7Ur0iozXJuAxBcjv9sKpeFC7d4qN4h37y3qY2uQvzMmeAEicQtcEgT0DMjnsy1prUai%2FN1YZ1LwBvz9XVZQL0yJl%2FZsNyZO8oDqT4EfvughcnVUzlSp2Y2jTPNyL7BVQdINdJud3pRFdr7pGTERo8MykTj9uTCkRGIR9KXk42dkU92FXEnOocaH7TKDN%2F6QMeoW2Nz9sIs7kigxVW%2Fov9E8CH7D5APWF7g31rzeQFseVoFvsP%2Fw1mOJvgVxVbxkdCdgl1wSxtCeWAP46MmstyxHuNQoOtsBHBK%2FyI2FPwZPNp2jyfPKV%2FXnPYds1fOdP21nhY1JuMFjv31SLmeT5AEWtNJjsUKnEAvxlHRJQkyUm%2Fh6K0WBOmZ9yoWSWOM9KX68%2F1ewRHBrChmEKQTVvFa4T%2FnM8E6G6EWKc2xHpOeewhvIG4cId8hsYxunKpfBVSGE%2FXvVNpj4hhdb0KvdSRfDvLYFlsfy%2FPefHMeRmdDGLm8N3EF9J3CMDzE%2BCMM3EBKsc26A9QB79Uhd8EJIOflQN6fP%2BIRWPsmqqQCGwxPSwByDJHkGpLGlUnbQywVe7fEfP4JTCGirPEBjqkAX%2Fw4lyjpCM4gbvGZ6c5ZCuxakoWFHFowBU2bZJxGTMeM4UKVCjQiyBHz9k%2FH5H4N1r0GXxrnqYH2ZK1v0%2BarBFYKkHyYHg7XDRPN160Bc8VjqJvXZxns1PtD0rBXRcv4LY8a00qFJN6OtQZS%2Fq3LtaEoyLc4mfutn%2Ft%2F1lFd34WOPoJAMxzFdJ1k%2BP7Kobu3W3T3r6yPSzFlM3QxmZk5agyMZdc&X-Amz-Signature=10b649842c52b661b73319a1657892f5eaebe66b5fbe7be239daf04ec1e5398f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDK7UXS4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1WoflUTWACSi6C9VC8CGIRtR8bvU3MOZAs6s%2B0M0rBQIhAPFHjIIigp9aZ2pqsIYZqAVJCHdgFy5xuslw9rFmO1AyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1A8LW%2FgHstQyiQVoq3AMz8nsE6zbwRa2TvRt3qqkXGVuvoiscaBe0hpI4H0N3VngXyG%2BO0zV7Ur0iozXJuAxBcjv9sKpeFC7d4qN4h37y3qY2uQvzMmeAEicQtcEgT0DMjnsy1prUai%2FN1YZ1LwBvz9XVZQL0yJl%2FZsNyZO8oDqT4EfvughcnVUzlSp2Y2jTPNyL7BVQdINdJud3pRFdr7pGTERo8MykTj9uTCkRGIR9KXk42dkU92FXEnOocaH7TKDN%2F6QMeoW2Nz9sIs7kigxVW%2Fov9E8CH7D5APWF7g31rzeQFseVoFvsP%2Fw1mOJvgVxVbxkdCdgl1wSxtCeWAP46MmstyxHuNQoOtsBHBK%2FyI2FPwZPNp2jyfPKV%2FXnPYds1fOdP21nhY1JuMFjv31SLmeT5AEWtNJjsUKnEAvxlHRJQkyUm%2Fh6K0WBOmZ9yoWSWOM9KX68%2F1ewRHBrChmEKQTVvFa4T%2FnM8E6G6EWKc2xHpOeewhvIG4cId8hsYxunKpfBVSGE%2FXvVNpj4hhdb0KvdSRfDvLYFlsfy%2FPefHMeRmdDGLm8N3EF9J3CMDzE%2BCMM3EBKsc26A9QB79Uhd8EJIOflQN6fP%2BIRWPsmqqQCGwxPSwByDJHkGpLGlUnbQywVe7fEfP4JTCGirPEBjqkAX%2Fw4lyjpCM4gbvGZ6c5ZCuxakoWFHFowBU2bZJxGTMeM4UKVCjQiyBHz9k%2FH5H4N1r0GXxrnqYH2ZK1v0%2BarBFYKkHyYHg7XDRPN160Bc8VjqJvXZxns1PtD0rBXRcv4LY8a00qFJN6OtQZS%2Fq3LtaEoyLc4mfutn%2Ft%2F1lFd34WOPoJAMxzFdJ1k%2BP7Kobu3W3T3r6yPSzFlM3QxmZk5agyMZdc&X-Amz-Signature=a27dba74343a8a1fd6d48ce57690fb356228def6d85a74e43e03e8501707a611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDK7UXS4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1WoflUTWACSi6C9VC8CGIRtR8bvU3MOZAs6s%2B0M0rBQIhAPFHjIIigp9aZ2pqsIYZqAVJCHdgFy5xuslw9rFmO1AyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1A8LW%2FgHstQyiQVoq3AMz8nsE6zbwRa2TvRt3qqkXGVuvoiscaBe0hpI4H0N3VngXyG%2BO0zV7Ur0iozXJuAxBcjv9sKpeFC7d4qN4h37y3qY2uQvzMmeAEicQtcEgT0DMjnsy1prUai%2FN1YZ1LwBvz9XVZQL0yJl%2FZsNyZO8oDqT4EfvughcnVUzlSp2Y2jTPNyL7BVQdINdJud3pRFdr7pGTERo8MykTj9uTCkRGIR9KXk42dkU92FXEnOocaH7TKDN%2F6QMeoW2Nz9sIs7kigxVW%2Fov9E8CH7D5APWF7g31rzeQFseVoFvsP%2Fw1mOJvgVxVbxkdCdgl1wSxtCeWAP46MmstyxHuNQoOtsBHBK%2FyI2FPwZPNp2jyfPKV%2FXnPYds1fOdP21nhY1JuMFjv31SLmeT5AEWtNJjsUKnEAvxlHRJQkyUm%2Fh6K0WBOmZ9yoWSWOM9KX68%2F1ewRHBrChmEKQTVvFa4T%2FnM8E6G6EWKc2xHpOeewhvIG4cId8hsYxunKpfBVSGE%2FXvVNpj4hhdb0KvdSRfDvLYFlsfy%2FPefHMeRmdDGLm8N3EF9J3CMDzE%2BCMM3EBKsc26A9QB79Uhd8EJIOflQN6fP%2BIRWPsmqqQCGwxPSwByDJHkGpLGlUnbQywVe7fEfP4JTCGirPEBjqkAX%2Fw4lyjpCM4gbvGZ6c5ZCuxakoWFHFowBU2bZJxGTMeM4UKVCjQiyBHz9k%2FH5H4N1r0GXxrnqYH2ZK1v0%2BarBFYKkHyYHg7XDRPN160Bc8VjqJvXZxns1PtD0rBXRcv4LY8a00qFJN6OtQZS%2Fq3LtaEoyLc4mfutn%2Ft%2F1lFd34WOPoJAMxzFdJ1k%2BP7Kobu3W3T3r6yPSzFlM3QxmZk5agyMZdc&X-Amz-Signature=3107d5f4b79ce718ebc5981ef33d671f8f08923e64f3533add28cc14ff60e032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDK7UXS4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1WoflUTWACSi6C9VC8CGIRtR8bvU3MOZAs6s%2B0M0rBQIhAPFHjIIigp9aZ2pqsIYZqAVJCHdgFy5xuslw9rFmO1AyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1A8LW%2FgHstQyiQVoq3AMz8nsE6zbwRa2TvRt3qqkXGVuvoiscaBe0hpI4H0N3VngXyG%2BO0zV7Ur0iozXJuAxBcjv9sKpeFC7d4qN4h37y3qY2uQvzMmeAEicQtcEgT0DMjnsy1prUai%2FN1YZ1LwBvz9XVZQL0yJl%2FZsNyZO8oDqT4EfvughcnVUzlSp2Y2jTPNyL7BVQdINdJud3pRFdr7pGTERo8MykTj9uTCkRGIR9KXk42dkU92FXEnOocaH7TKDN%2F6QMeoW2Nz9sIs7kigxVW%2Fov9E8CH7D5APWF7g31rzeQFseVoFvsP%2Fw1mOJvgVxVbxkdCdgl1wSxtCeWAP46MmstyxHuNQoOtsBHBK%2FyI2FPwZPNp2jyfPKV%2FXnPYds1fOdP21nhY1JuMFjv31SLmeT5AEWtNJjsUKnEAvxlHRJQkyUm%2Fh6K0WBOmZ9yoWSWOM9KX68%2F1ewRHBrChmEKQTVvFa4T%2FnM8E6G6EWKc2xHpOeewhvIG4cId8hsYxunKpfBVSGE%2FXvVNpj4hhdb0KvdSRfDvLYFlsfy%2FPefHMeRmdDGLm8N3EF9J3CMDzE%2BCMM3EBKsc26A9QB79Uhd8EJIOflQN6fP%2BIRWPsmqqQCGwxPSwByDJHkGpLGlUnbQywVe7fEfP4JTCGirPEBjqkAX%2Fw4lyjpCM4gbvGZ6c5ZCuxakoWFHFowBU2bZJxGTMeM4UKVCjQiyBHz9k%2FH5H4N1r0GXxrnqYH2ZK1v0%2BarBFYKkHyYHg7XDRPN160Bc8VjqJvXZxns1PtD0rBXRcv4LY8a00qFJN6OtQZS%2Fq3LtaEoyLc4mfutn%2Ft%2F1lFd34WOPoJAMxzFdJ1k%2BP7Kobu3W3T3r6yPSzFlM3QxmZk5agyMZdc&X-Amz-Signature=81d143e329e8e04d20b2fcf434d013376a780597fad3ac78c65ef66a19775214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
	- inertial
		- origin
		- mass
		- inertia
- link:
	- visual
		- geometry
			- box
			- cylinder
			- sphere
		- material
			- color
	- collision
		- ~~origin~~
		- geometry
		- friction
	- xacro:box_inertia
	- xacro:cylinder_inertia
	- xacro:sphere_inertia
- joint:
	- parent
	- child
	- ~~origin~~
- xacro:wheel

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
        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
          <fdir1>1 0 0</fdir1>
        </ode></friction></surface>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDK7UXS4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1WoflUTWACSi6C9VC8CGIRtR8bvU3MOZAs6s%2B0M0rBQIhAPFHjIIigp9aZ2pqsIYZqAVJCHdgFy5xuslw9rFmO1AyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1A8LW%2FgHstQyiQVoq3AMz8nsE6zbwRa2TvRt3qqkXGVuvoiscaBe0hpI4H0N3VngXyG%2BO0zV7Ur0iozXJuAxBcjv9sKpeFC7d4qN4h37y3qY2uQvzMmeAEicQtcEgT0DMjnsy1prUai%2FN1YZ1LwBvz9XVZQL0yJl%2FZsNyZO8oDqT4EfvughcnVUzlSp2Y2jTPNyL7BVQdINdJud3pRFdr7pGTERo8MykTj9uTCkRGIR9KXk42dkU92FXEnOocaH7TKDN%2F6QMeoW2Nz9sIs7kigxVW%2Fov9E8CH7D5APWF7g31rzeQFseVoFvsP%2Fw1mOJvgVxVbxkdCdgl1wSxtCeWAP46MmstyxHuNQoOtsBHBK%2FyI2FPwZPNp2jyfPKV%2FXnPYds1fOdP21nhY1JuMFjv31SLmeT5AEWtNJjsUKnEAvxlHRJQkyUm%2Fh6K0WBOmZ9yoWSWOM9KX68%2F1ewRHBrChmEKQTVvFa4T%2FnM8E6G6EWKc2xHpOeewhvIG4cId8hsYxunKpfBVSGE%2FXvVNpj4hhdb0KvdSRfDvLYFlsfy%2FPefHMeRmdDGLm8N3EF9J3CMDzE%2BCMM3EBKsc26A9QB79Uhd8EJIOflQN6fP%2BIRWPsmqqQCGwxPSwByDJHkGpLGlUnbQywVe7fEfP4JTCGirPEBjqkAX%2Fw4lyjpCM4gbvGZ6c5ZCuxakoWFHFowBU2bZJxGTMeM4UKVCjQiyBHz9k%2FH5H4N1r0GXxrnqYH2ZK1v0%2BarBFYKkHyYHg7XDRPN160Bc8VjqJvXZxns1PtD0rBXRcv4LY8a00qFJN6OtQZS%2Fq3LtaEoyLc4mfutn%2Ft%2F1lFd34WOPoJAMxzFdJ1k%2BP7Kobu3W3T3r6yPSzFlM3QxmZk5agyMZdc&X-Amz-Signature=30e330aa042bff5949c7672f2e5e8ff77a86b9d3b2ba9f4499dcb9aeda81f5c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDK7UXS4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1WoflUTWACSi6C9VC8CGIRtR8bvU3MOZAs6s%2B0M0rBQIhAPFHjIIigp9aZ2pqsIYZqAVJCHdgFy5xuslw9rFmO1AyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1A8LW%2FgHstQyiQVoq3AMz8nsE6zbwRa2TvRt3qqkXGVuvoiscaBe0hpI4H0N3VngXyG%2BO0zV7Ur0iozXJuAxBcjv9sKpeFC7d4qN4h37y3qY2uQvzMmeAEicQtcEgT0DMjnsy1prUai%2FN1YZ1LwBvz9XVZQL0yJl%2FZsNyZO8oDqT4EfvughcnVUzlSp2Y2jTPNyL7BVQdINdJud3pRFdr7pGTERo8MykTj9uTCkRGIR9KXk42dkU92FXEnOocaH7TKDN%2F6QMeoW2Nz9sIs7kigxVW%2Fov9E8CH7D5APWF7g31rzeQFseVoFvsP%2Fw1mOJvgVxVbxkdCdgl1wSxtCeWAP46MmstyxHuNQoOtsBHBK%2FyI2FPwZPNp2jyfPKV%2FXnPYds1fOdP21nhY1JuMFjv31SLmeT5AEWtNJjsUKnEAvxlHRJQkyUm%2Fh6K0WBOmZ9yoWSWOM9KX68%2F1ewRHBrChmEKQTVvFa4T%2FnM8E6G6EWKc2xHpOeewhvIG4cId8hsYxunKpfBVSGE%2FXvVNpj4hhdb0KvdSRfDvLYFlsfy%2FPefHMeRmdDGLm8N3EF9J3CMDzE%2BCMM3EBKsc26A9QB79Uhd8EJIOflQN6fP%2BIRWPsmqqQCGwxPSwByDJHkGpLGlUnbQywVe7fEfP4JTCGirPEBjqkAX%2Fw4lyjpCM4gbvGZ6c5ZCuxakoWFHFowBU2bZJxGTMeM4UKVCjQiyBHz9k%2FH5H4N1r0GXxrnqYH2ZK1v0%2BarBFYKkHyYHg7XDRPN160Bc8VjqJvXZxns1PtD0rBXRcv4LY8a00qFJN6OtQZS%2Fq3LtaEoyLc4mfutn%2Ft%2F1lFd34WOPoJAMxzFdJ1k%2BP7Kobu3W3T3r6yPSzFlM3QxmZk5agyMZdc&X-Amz-Signature=137901b7a17c374364604b2a371468b52b929d951b289143c8e4d2e2f9b59c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDK7UXS4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1WoflUTWACSi6C9VC8CGIRtR8bvU3MOZAs6s%2B0M0rBQIhAPFHjIIigp9aZ2pqsIYZqAVJCHdgFy5xuslw9rFmO1AyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1A8LW%2FgHstQyiQVoq3AMz8nsE6zbwRa2TvRt3qqkXGVuvoiscaBe0hpI4H0N3VngXyG%2BO0zV7Ur0iozXJuAxBcjv9sKpeFC7d4qN4h37y3qY2uQvzMmeAEicQtcEgT0DMjnsy1prUai%2FN1YZ1LwBvz9XVZQL0yJl%2FZsNyZO8oDqT4EfvughcnVUzlSp2Y2jTPNyL7BVQdINdJud3pRFdr7pGTERo8MykTj9uTCkRGIR9KXk42dkU92FXEnOocaH7TKDN%2F6QMeoW2Nz9sIs7kigxVW%2Fov9E8CH7D5APWF7g31rzeQFseVoFvsP%2Fw1mOJvgVxVbxkdCdgl1wSxtCeWAP46MmstyxHuNQoOtsBHBK%2FyI2FPwZPNp2jyfPKV%2FXnPYds1fOdP21nhY1JuMFjv31SLmeT5AEWtNJjsUKnEAvxlHRJQkyUm%2Fh6K0WBOmZ9yoWSWOM9KX68%2F1ewRHBrChmEKQTVvFa4T%2FnM8E6G6EWKc2xHpOeewhvIG4cId8hsYxunKpfBVSGE%2FXvVNpj4hhdb0KvdSRfDvLYFlsfy%2FPefHMeRmdDGLm8N3EF9J3CMDzE%2BCMM3EBKsc26A9QB79Uhd8EJIOflQN6fP%2BIRWPsmqqQCGwxPSwByDJHkGpLGlUnbQywVe7fEfP4JTCGirPEBjqkAX%2Fw4lyjpCM4gbvGZ6c5ZCuxakoWFHFowBU2bZJxGTMeM4UKVCjQiyBHz9k%2FH5H4N1r0GXxrnqYH2ZK1v0%2BarBFYKkHyYHg7XDRPN160Bc8VjqJvXZxns1PtD0rBXRcv4LY8a00qFJN6OtQZS%2Fq3LtaEoyLc4mfutn%2Ft%2F1lFd34WOPoJAMxzFdJ1k%2BP7Kobu3W3T3r6yPSzFlM3QxmZk5agyMZdc&X-Amz-Signature=bdd9fcbaab4eaf7147b8a7ff4daba9c72d646885b823ed225c903a2f69013337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BNWSZV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7GL1EWPGFMo1PrdjWvJYDOyjXuST6Q9R1NnfbY9kDeAIhAP%2FhY4fJupSOSRD3lxa9hIcDRFWq4aF%2FIcBZtd9gKeNWKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FK%2FXMN5eueCiUJ1gq3AN58s6%2BUZYJqFD4IeQl4DRbmFW%2BOQi7ngs%2FvXG8F4T1VXW1vr5Cw71dqFnYqrsLDY15DMBAhjwEP8leXQXFZNsgUxeIhlqVMbMSC8onK%2FVprvQX%2FWpN3xY2SmSFndVlCo5p78DbXgPSxUNDexbZm6YRfFT%2BMCTOl%2BLtQeqkIkT%2F1RAprXatr1RA9N1qkLVk5gMVy7Wq0uvQl8dumZh8I1cT8ePH6GrgMqzvCnXJPnwoLfCtUw5cLSPlH%2F3ZCgxbrZ8uypmuTqz%2FFVGW%2BIuOqoVvVudXHn5F0kXukPo8aHgHXP%2Frk8jBVvNMvX6hjxgDp%2FNaTCeQCHXaLQPZ%2BiJzJX7JYoMKqb7JTK%2FKbDFepQGcKlbQta5YsyX1VOqGo9J6i0u4ZU7vFyS7VkbT%2FU6LyulT9n%2Fc%2FAAM55b1%2FDyZmdwlQaJShTBPqcAMsQCT%2FzZYfobrn%2FhMZuBcqsv7%2B30%2FaFiQ%2Fp14ZWv2EoXM3RpENjrr4UZNBGxnRiPKLdxqd3GMbg2gbBQm%2F3m2LwgcMxZBI1BF2ZWw9%2BcWfmTOgsEru5fGlOKO1phZaHrjtcfFIZNANREHmRGan%2FHB3W%2B2ISOgIpxeJR7BdvxV9znwH8MVMCRVUaRk3kw8UIEwLtxpfjCaibPEBjqkAcyfUN7BqxDK7Sk00%2BMDJe1j5hZaVNDU1JOGW2CALg%2BqJSiqfAYZ8%2BpwYpRwfOsrh6ty%2BtaqNBa%2FAvuFQVdZxWbHCCdTt47MADugbQfYwwQOFjWEOzu%2BaIVofoeKUFV2w96FpRTusijPXf6110UD85uMMkNVLo1EUCH6XX%2BFD2WtMlptxYatuYBvnA4qH51VGrUkNjl8pblV3fqqQFwK6KhYu%2BVv&X-Amz-Signature=5b8cd4d167ddd8be06fa48e262286103670ea7c411cdc3bada38112e091aa428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BNWSZV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7GL1EWPGFMo1PrdjWvJYDOyjXuST6Q9R1NnfbY9kDeAIhAP%2FhY4fJupSOSRD3lxa9hIcDRFWq4aF%2FIcBZtd9gKeNWKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FK%2FXMN5eueCiUJ1gq3AN58s6%2BUZYJqFD4IeQl4DRbmFW%2BOQi7ngs%2FvXG8F4T1VXW1vr5Cw71dqFnYqrsLDY15DMBAhjwEP8leXQXFZNsgUxeIhlqVMbMSC8onK%2FVprvQX%2FWpN3xY2SmSFndVlCo5p78DbXgPSxUNDexbZm6YRfFT%2BMCTOl%2BLtQeqkIkT%2F1RAprXatr1RA9N1qkLVk5gMVy7Wq0uvQl8dumZh8I1cT8ePH6GrgMqzvCnXJPnwoLfCtUw5cLSPlH%2F3ZCgxbrZ8uypmuTqz%2FFVGW%2BIuOqoVvVudXHn5F0kXukPo8aHgHXP%2Frk8jBVvNMvX6hjxgDp%2FNaTCeQCHXaLQPZ%2BiJzJX7JYoMKqb7JTK%2FKbDFepQGcKlbQta5YsyX1VOqGo9J6i0u4ZU7vFyS7VkbT%2FU6LyulT9n%2Fc%2FAAM55b1%2FDyZmdwlQaJShTBPqcAMsQCT%2FzZYfobrn%2FhMZuBcqsv7%2B30%2FaFiQ%2Fp14ZWv2EoXM3RpENjrr4UZNBGxnRiPKLdxqd3GMbg2gbBQm%2F3m2LwgcMxZBI1BF2ZWw9%2BcWfmTOgsEru5fGlOKO1phZaHrjtcfFIZNANREHmRGan%2FHB3W%2B2ISOgIpxeJR7BdvxV9znwH8MVMCRVUaRk3kw8UIEwLtxpfjCaibPEBjqkAcyfUN7BqxDK7Sk00%2BMDJe1j5hZaVNDU1JOGW2CALg%2BqJSiqfAYZ8%2BpwYpRwfOsrh6ty%2BtaqNBa%2FAvuFQVdZxWbHCCdTt47MADugbQfYwwQOFjWEOzu%2BaIVofoeKUFV2w96FpRTusijPXf6110UD85uMMkNVLo1EUCH6XX%2BFD2WtMlptxYatuYBvnA4qH51VGrUkNjl8pblV3fqqQFwK6KhYu%2BVv&X-Amz-Signature=7b07bedbbee14d475aea30990a71245fef6f2d652b146ba63385cecc6c0bebf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BNWSZV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7GL1EWPGFMo1PrdjWvJYDOyjXuST6Q9R1NnfbY9kDeAIhAP%2FhY4fJupSOSRD3lxa9hIcDRFWq4aF%2FIcBZtd9gKeNWKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FK%2FXMN5eueCiUJ1gq3AN58s6%2BUZYJqFD4IeQl4DRbmFW%2BOQi7ngs%2FvXG8F4T1VXW1vr5Cw71dqFnYqrsLDY15DMBAhjwEP8leXQXFZNsgUxeIhlqVMbMSC8onK%2FVprvQX%2FWpN3xY2SmSFndVlCo5p78DbXgPSxUNDexbZm6YRfFT%2BMCTOl%2BLtQeqkIkT%2F1RAprXatr1RA9N1qkLVk5gMVy7Wq0uvQl8dumZh8I1cT8ePH6GrgMqzvCnXJPnwoLfCtUw5cLSPlH%2F3ZCgxbrZ8uypmuTqz%2FFVGW%2BIuOqoVvVudXHn5F0kXukPo8aHgHXP%2Frk8jBVvNMvX6hjxgDp%2FNaTCeQCHXaLQPZ%2BiJzJX7JYoMKqb7JTK%2FKbDFepQGcKlbQta5YsyX1VOqGo9J6i0u4ZU7vFyS7VkbT%2FU6LyulT9n%2Fc%2FAAM55b1%2FDyZmdwlQaJShTBPqcAMsQCT%2FzZYfobrn%2FhMZuBcqsv7%2B30%2FaFiQ%2Fp14ZWv2EoXM3RpENjrr4UZNBGxnRiPKLdxqd3GMbg2gbBQm%2F3m2LwgcMxZBI1BF2ZWw9%2BcWfmTOgsEru5fGlOKO1phZaHrjtcfFIZNANREHmRGan%2FHB3W%2B2ISOgIpxeJR7BdvxV9znwH8MVMCRVUaRk3kw8UIEwLtxpfjCaibPEBjqkAcyfUN7BqxDK7Sk00%2BMDJe1j5hZaVNDU1JOGW2CALg%2BqJSiqfAYZ8%2BpwYpRwfOsrh6ty%2BtaqNBa%2FAvuFQVdZxWbHCCdTt47MADugbQfYwwQOFjWEOzu%2BaIVofoeKUFV2w96FpRTusijPXf6110UD85uMMkNVLo1EUCH6XX%2BFD2WtMlptxYatuYBvnA4qH51VGrUkNjl8pblV3fqqQFwK6KhYu%2BVv&X-Amz-Signature=d30dc224ffa82eec76432fa12bad79224e0c45f0038eb496e344aeaf2b65a5fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BNWSZV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7GL1EWPGFMo1PrdjWvJYDOyjXuST6Q9R1NnfbY9kDeAIhAP%2FhY4fJupSOSRD3lxa9hIcDRFWq4aF%2FIcBZtd9gKeNWKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FK%2FXMN5eueCiUJ1gq3AN58s6%2BUZYJqFD4IeQl4DRbmFW%2BOQi7ngs%2FvXG8F4T1VXW1vr5Cw71dqFnYqrsLDY15DMBAhjwEP8leXQXFZNsgUxeIhlqVMbMSC8onK%2FVprvQX%2FWpN3xY2SmSFndVlCo5p78DbXgPSxUNDexbZm6YRfFT%2BMCTOl%2BLtQeqkIkT%2F1RAprXatr1RA9N1qkLVk5gMVy7Wq0uvQl8dumZh8I1cT8ePH6GrgMqzvCnXJPnwoLfCtUw5cLSPlH%2F3ZCgxbrZ8uypmuTqz%2FFVGW%2BIuOqoVvVudXHn5F0kXukPo8aHgHXP%2Frk8jBVvNMvX6hjxgDp%2FNaTCeQCHXaLQPZ%2BiJzJX7JYoMKqb7JTK%2FKbDFepQGcKlbQta5YsyX1VOqGo9J6i0u4ZU7vFyS7VkbT%2FU6LyulT9n%2Fc%2FAAM55b1%2FDyZmdwlQaJShTBPqcAMsQCT%2FzZYfobrn%2FhMZuBcqsv7%2B30%2FaFiQ%2Fp14ZWv2EoXM3RpENjrr4UZNBGxnRiPKLdxqd3GMbg2gbBQm%2F3m2LwgcMxZBI1BF2ZWw9%2BcWfmTOgsEru5fGlOKO1phZaHrjtcfFIZNANREHmRGan%2FHB3W%2B2ISOgIpxeJR7BdvxV9znwH8MVMCRVUaRk3kw8UIEwLtxpfjCaibPEBjqkAcyfUN7BqxDK7Sk00%2BMDJe1j5hZaVNDU1JOGW2CALg%2BqJSiqfAYZ8%2BpwYpRwfOsrh6ty%2BtaqNBa%2FAvuFQVdZxWbHCCdTt47MADugbQfYwwQOFjWEOzu%2BaIVofoeKUFV2w96FpRTusijPXf6110UD85uMMkNVLo1EUCH6XX%2BFD2WtMlptxYatuYBvnA4qH51VGrUkNjl8pblV3fqqQFwK6KhYu%2BVv&X-Amz-Signature=78b518e5aad91abffc9e78732110e20a954d3915fc2d4037fd98f8268132b942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BNWSZV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7GL1EWPGFMo1PrdjWvJYDOyjXuST6Q9R1NnfbY9kDeAIhAP%2FhY4fJupSOSRD3lxa9hIcDRFWq4aF%2FIcBZtd9gKeNWKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FK%2FXMN5eueCiUJ1gq3AN58s6%2BUZYJqFD4IeQl4DRbmFW%2BOQi7ngs%2FvXG8F4T1VXW1vr5Cw71dqFnYqrsLDY15DMBAhjwEP8leXQXFZNsgUxeIhlqVMbMSC8onK%2FVprvQX%2FWpN3xY2SmSFndVlCo5p78DbXgPSxUNDexbZm6YRfFT%2BMCTOl%2BLtQeqkIkT%2F1RAprXatr1RA9N1qkLVk5gMVy7Wq0uvQl8dumZh8I1cT8ePH6GrgMqzvCnXJPnwoLfCtUw5cLSPlH%2F3ZCgxbrZ8uypmuTqz%2FFVGW%2BIuOqoVvVudXHn5F0kXukPo8aHgHXP%2Frk8jBVvNMvX6hjxgDp%2FNaTCeQCHXaLQPZ%2BiJzJX7JYoMKqb7JTK%2FKbDFepQGcKlbQta5YsyX1VOqGo9J6i0u4ZU7vFyS7VkbT%2FU6LyulT9n%2Fc%2FAAM55b1%2FDyZmdwlQaJShTBPqcAMsQCT%2FzZYfobrn%2FhMZuBcqsv7%2B30%2FaFiQ%2Fp14ZWv2EoXM3RpENjrr4UZNBGxnRiPKLdxqd3GMbg2gbBQm%2F3m2LwgcMxZBI1BF2ZWw9%2BcWfmTOgsEru5fGlOKO1phZaHrjtcfFIZNANREHmRGan%2FHB3W%2B2ISOgIpxeJR7BdvxV9znwH8MVMCRVUaRk3kw8UIEwLtxpfjCaibPEBjqkAcyfUN7BqxDK7Sk00%2BMDJe1j5hZaVNDU1JOGW2CALg%2BqJSiqfAYZ8%2BpwYpRwfOsrh6ty%2BtaqNBa%2FAvuFQVdZxWbHCCdTt47MADugbQfYwwQOFjWEOzu%2BaIVofoeKUFV2w96FpRTusijPXf6110UD85uMMkNVLo1EUCH6XX%2BFD2WtMlptxYatuYBvnA4qH51VGrUkNjl8pblV3fqqQFwK6KhYu%2BVv&X-Amz-Signature=db10cf0ad6afda1f471a6e528f2207ae9ccd620b366bead97b7f625ee46df2b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BNWSZV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7GL1EWPGFMo1PrdjWvJYDOyjXuST6Q9R1NnfbY9kDeAIhAP%2FhY4fJupSOSRD3lxa9hIcDRFWq4aF%2FIcBZtd9gKeNWKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FK%2FXMN5eueCiUJ1gq3AN58s6%2BUZYJqFD4IeQl4DRbmFW%2BOQi7ngs%2FvXG8F4T1VXW1vr5Cw71dqFnYqrsLDY15DMBAhjwEP8leXQXFZNsgUxeIhlqVMbMSC8onK%2FVprvQX%2FWpN3xY2SmSFndVlCo5p78DbXgPSxUNDexbZm6YRfFT%2BMCTOl%2BLtQeqkIkT%2F1RAprXatr1RA9N1qkLVk5gMVy7Wq0uvQl8dumZh8I1cT8ePH6GrgMqzvCnXJPnwoLfCtUw5cLSPlH%2F3ZCgxbrZ8uypmuTqz%2FFVGW%2BIuOqoVvVudXHn5F0kXukPo8aHgHXP%2Frk8jBVvNMvX6hjxgDp%2FNaTCeQCHXaLQPZ%2BiJzJX7JYoMKqb7JTK%2FKbDFepQGcKlbQta5YsyX1VOqGo9J6i0u4ZU7vFyS7VkbT%2FU6LyulT9n%2Fc%2FAAM55b1%2FDyZmdwlQaJShTBPqcAMsQCT%2FzZYfobrn%2FhMZuBcqsv7%2B30%2FaFiQ%2Fp14ZWv2EoXM3RpENjrr4UZNBGxnRiPKLdxqd3GMbg2gbBQm%2F3m2LwgcMxZBI1BF2ZWw9%2BcWfmTOgsEru5fGlOKO1phZaHrjtcfFIZNANREHmRGan%2FHB3W%2B2ISOgIpxeJR7BdvxV9znwH8MVMCRVUaRk3kw8UIEwLtxpfjCaibPEBjqkAcyfUN7BqxDK7Sk00%2BMDJe1j5hZaVNDU1JOGW2CALg%2BqJSiqfAYZ8%2BpwYpRwfOsrh6ty%2BtaqNBa%2FAvuFQVdZxWbHCCdTt47MADugbQfYwwQOFjWEOzu%2BaIVofoeKUFV2w96FpRTusijPXf6110UD85uMMkNVLo1EUCH6XX%2BFD2WtMlptxYatuYBvnA4qH51VGrUkNjl8pblV3fqqQFwK6KhYu%2BVv&X-Amz-Signature=6dca84098624d094338f0be47a555d76aafce0fb2d0eb79281c339132aeb2692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BNWSZV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7GL1EWPGFMo1PrdjWvJYDOyjXuST6Q9R1NnfbY9kDeAIhAP%2FhY4fJupSOSRD3lxa9hIcDRFWq4aF%2FIcBZtd9gKeNWKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FK%2FXMN5eueCiUJ1gq3AN58s6%2BUZYJqFD4IeQl4DRbmFW%2BOQi7ngs%2FvXG8F4T1VXW1vr5Cw71dqFnYqrsLDY15DMBAhjwEP8leXQXFZNsgUxeIhlqVMbMSC8onK%2FVprvQX%2FWpN3xY2SmSFndVlCo5p78DbXgPSxUNDexbZm6YRfFT%2BMCTOl%2BLtQeqkIkT%2F1RAprXatr1RA9N1qkLVk5gMVy7Wq0uvQl8dumZh8I1cT8ePH6GrgMqzvCnXJPnwoLfCtUw5cLSPlH%2F3ZCgxbrZ8uypmuTqz%2FFVGW%2BIuOqoVvVudXHn5F0kXukPo8aHgHXP%2Frk8jBVvNMvX6hjxgDp%2FNaTCeQCHXaLQPZ%2BiJzJX7JYoMKqb7JTK%2FKbDFepQGcKlbQta5YsyX1VOqGo9J6i0u4ZU7vFyS7VkbT%2FU6LyulT9n%2Fc%2FAAM55b1%2FDyZmdwlQaJShTBPqcAMsQCT%2FzZYfobrn%2FhMZuBcqsv7%2B30%2FaFiQ%2Fp14ZWv2EoXM3RpENjrr4UZNBGxnRiPKLdxqd3GMbg2gbBQm%2F3m2LwgcMxZBI1BF2ZWw9%2BcWfmTOgsEru5fGlOKO1phZaHrjtcfFIZNANREHmRGan%2FHB3W%2B2ISOgIpxeJR7BdvxV9znwH8MVMCRVUaRk3kw8UIEwLtxpfjCaibPEBjqkAcyfUN7BqxDK7Sk00%2BMDJe1j5hZaVNDU1JOGW2CALg%2BqJSiqfAYZ8%2BpwYpRwfOsrh6ty%2BtaqNBa%2FAvuFQVdZxWbHCCdTt47MADugbQfYwwQOFjWEOzu%2BaIVofoeKUFV2w96FpRTusijPXf6110UD85uMMkNVLo1EUCH6XX%2BFD2WtMlptxYatuYBvnA4qH51VGrUkNjl8pblV3fqqQFwK6KhYu%2BVv&X-Amz-Signature=4464d0e8f9e5e696c41d937f40470c440e44f98f5667ba9a0b9a181d56fa67c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
