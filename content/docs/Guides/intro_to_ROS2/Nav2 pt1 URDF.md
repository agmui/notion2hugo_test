---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-02T01:13:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-02T01:13:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UAWUU5Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWqSGotyXMoMRC8wo22UghLyKGEzI8GWFRsgXSuMMwAiBwPKBeCm9aTHXp8P2b%2F7i%2FI4QqRqGxw4bmnr9qWfV9UyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2nmJX9XaoC6MOq%2FFKtwDQ%2BPp1bI9gkpm9t5SqX5BnK5Fv62837yljiepcHwq0J6IhWhJsM%2FwUriWDEVshddYS1U0JOyBsS8gEqubf2TFN1Qd8HYDZKsYyZQgikYPeYgRfsPACroE7RN%2BESiy1bVwwdIy2670xfIY5NZRLICSVXNtU4gCRiZrll4kdkeSuKm3aXpuGAo6EDoszIBYiFw7YZPaxAuwOWz8soLeDwry1AYTTvosx1qXGHjNfJiagN3Hw9zTGPDQQlueI%2BK1npFR3R4RjjrLENmoEroGaH5eL8QE9XbM0JC9sya%2Ffo2cCSbgXjzllGnEqAHPBISRORNxXcgf78WSPFMcFG3msSMuCEoZ7QXO%2BwJu5Hjx%2FN35q%2BQWC1wFRg3t4Ao4eRSpUQSeQaJojmg2775uQOux0lsCfBks5AlR3%2FYLoPyhKiLV2SF%2F2IC2mdMSe1IEpZ4ZEseWVWSzPWV%2Br3p2Z0v5ohYBx2sCStP2hHry9bezDuOgoLpNhBHm25CJyGDrYIBQTKJBLcMZ6Mcl75j1lNcUPkVFNyrYu7htUJHOF7EsOnEK50G9OI88tiTw1MsCNYeKfD77uXdBkaHfcJzOC90IQTzGS4GfN28sVMK8HZNVzodQclDQtcGKwluZ35c7vcMwrZy2xAY6pgEYv8CeNEJsyz%2FgtvBU7nD5ybE5ObJEPz14reosHZJOVQcJzOCrUXdw%2BbPXBYNgkCdvZxEpuQQ%2BBAlhL2cvK45Hj8qXQ2EsaI3Verw7slmaCVM49%2FokxMUYG4AOWOFdoiPMuE5s3Ctz%2BDDaDP1OT%2Fj6pJPlMnPBpsgbHXau1LE2wTj%2FS%2Bx2Xfdcjj%2FOu5EZbBLAfihX1TOTCI7w1iNnoYIKJcBBfP19&X-Amz-Signature=c229f837dbba0bc3fd782b5a2ddeb43a6600986ad44613c0f2ab2852f5221e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UAWUU5Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWqSGotyXMoMRC8wo22UghLyKGEzI8GWFRsgXSuMMwAiBwPKBeCm9aTHXp8P2b%2F7i%2FI4QqRqGxw4bmnr9qWfV9UyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2nmJX9XaoC6MOq%2FFKtwDQ%2BPp1bI9gkpm9t5SqX5BnK5Fv62837yljiepcHwq0J6IhWhJsM%2FwUriWDEVshddYS1U0JOyBsS8gEqubf2TFN1Qd8HYDZKsYyZQgikYPeYgRfsPACroE7RN%2BESiy1bVwwdIy2670xfIY5NZRLICSVXNtU4gCRiZrll4kdkeSuKm3aXpuGAo6EDoszIBYiFw7YZPaxAuwOWz8soLeDwry1AYTTvosx1qXGHjNfJiagN3Hw9zTGPDQQlueI%2BK1npFR3R4RjjrLENmoEroGaH5eL8QE9XbM0JC9sya%2Ffo2cCSbgXjzllGnEqAHPBISRORNxXcgf78WSPFMcFG3msSMuCEoZ7QXO%2BwJu5Hjx%2FN35q%2BQWC1wFRg3t4Ao4eRSpUQSeQaJojmg2775uQOux0lsCfBks5AlR3%2FYLoPyhKiLV2SF%2F2IC2mdMSe1IEpZ4ZEseWVWSzPWV%2Br3p2Z0v5ohYBx2sCStP2hHry9bezDuOgoLpNhBHm25CJyGDrYIBQTKJBLcMZ6Mcl75j1lNcUPkVFNyrYu7htUJHOF7EsOnEK50G9OI88tiTw1MsCNYeKfD77uXdBkaHfcJzOC90IQTzGS4GfN28sVMK8HZNVzodQclDQtcGKwluZ35c7vcMwrZy2xAY6pgEYv8CeNEJsyz%2FgtvBU7nD5ybE5ObJEPz14reosHZJOVQcJzOCrUXdw%2BbPXBYNgkCdvZxEpuQQ%2BBAlhL2cvK45Hj8qXQ2EsaI3Verw7slmaCVM49%2FokxMUYG4AOWOFdoiPMuE5s3Ctz%2BDDaDP1OT%2Fj6pJPlMnPBpsgbHXau1LE2wTj%2FS%2Bx2Xfdcjj%2FOu5EZbBLAfihX1TOTCI7w1iNnoYIKJcBBfP19&X-Amz-Signature=3004755ae1fb959e3fd2ec119c043ea03ef7dc990e30849375c0f12fc1498e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UAWUU5Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWqSGotyXMoMRC8wo22UghLyKGEzI8GWFRsgXSuMMwAiBwPKBeCm9aTHXp8P2b%2F7i%2FI4QqRqGxw4bmnr9qWfV9UyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2nmJX9XaoC6MOq%2FFKtwDQ%2BPp1bI9gkpm9t5SqX5BnK5Fv62837yljiepcHwq0J6IhWhJsM%2FwUriWDEVshddYS1U0JOyBsS8gEqubf2TFN1Qd8HYDZKsYyZQgikYPeYgRfsPACroE7RN%2BESiy1bVwwdIy2670xfIY5NZRLICSVXNtU4gCRiZrll4kdkeSuKm3aXpuGAo6EDoszIBYiFw7YZPaxAuwOWz8soLeDwry1AYTTvosx1qXGHjNfJiagN3Hw9zTGPDQQlueI%2BK1npFR3R4RjjrLENmoEroGaH5eL8QE9XbM0JC9sya%2Ffo2cCSbgXjzllGnEqAHPBISRORNxXcgf78WSPFMcFG3msSMuCEoZ7QXO%2BwJu5Hjx%2FN35q%2BQWC1wFRg3t4Ao4eRSpUQSeQaJojmg2775uQOux0lsCfBks5AlR3%2FYLoPyhKiLV2SF%2F2IC2mdMSe1IEpZ4ZEseWVWSzPWV%2Br3p2Z0v5ohYBx2sCStP2hHry9bezDuOgoLpNhBHm25CJyGDrYIBQTKJBLcMZ6Mcl75j1lNcUPkVFNyrYu7htUJHOF7EsOnEK50G9OI88tiTw1MsCNYeKfD77uXdBkaHfcJzOC90IQTzGS4GfN28sVMK8HZNVzodQclDQtcGKwluZ35c7vcMwrZy2xAY6pgEYv8CeNEJsyz%2FgtvBU7nD5ybE5ObJEPz14reosHZJOVQcJzOCrUXdw%2BbPXBYNgkCdvZxEpuQQ%2BBAlhL2cvK45Hj8qXQ2EsaI3Verw7slmaCVM49%2FokxMUYG4AOWOFdoiPMuE5s3Ctz%2BDDaDP1OT%2Fj6pJPlMnPBpsgbHXau1LE2wTj%2FS%2Bx2Xfdcjj%2FOu5EZbBLAfihX1TOTCI7w1iNnoYIKJcBBfP19&X-Amz-Signature=9641b05c395472449576fc08877aa699568c65388242296a208c4e531542dc7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UAWUU5Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWqSGotyXMoMRC8wo22UghLyKGEzI8GWFRsgXSuMMwAiBwPKBeCm9aTHXp8P2b%2F7i%2FI4QqRqGxw4bmnr9qWfV9UyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2nmJX9XaoC6MOq%2FFKtwDQ%2BPp1bI9gkpm9t5SqX5BnK5Fv62837yljiepcHwq0J6IhWhJsM%2FwUriWDEVshddYS1U0JOyBsS8gEqubf2TFN1Qd8HYDZKsYyZQgikYPeYgRfsPACroE7RN%2BESiy1bVwwdIy2670xfIY5NZRLICSVXNtU4gCRiZrll4kdkeSuKm3aXpuGAo6EDoszIBYiFw7YZPaxAuwOWz8soLeDwry1AYTTvosx1qXGHjNfJiagN3Hw9zTGPDQQlueI%2BK1npFR3R4RjjrLENmoEroGaH5eL8QE9XbM0JC9sya%2Ffo2cCSbgXjzllGnEqAHPBISRORNxXcgf78WSPFMcFG3msSMuCEoZ7QXO%2BwJu5Hjx%2FN35q%2BQWC1wFRg3t4Ao4eRSpUQSeQaJojmg2775uQOux0lsCfBks5AlR3%2FYLoPyhKiLV2SF%2F2IC2mdMSe1IEpZ4ZEseWVWSzPWV%2Br3p2Z0v5ohYBx2sCStP2hHry9bezDuOgoLpNhBHm25CJyGDrYIBQTKJBLcMZ6Mcl75j1lNcUPkVFNyrYu7htUJHOF7EsOnEK50G9OI88tiTw1MsCNYeKfD77uXdBkaHfcJzOC90IQTzGS4GfN28sVMK8HZNVzodQclDQtcGKwluZ35c7vcMwrZy2xAY6pgEYv8CeNEJsyz%2FgtvBU7nD5ybE5ObJEPz14reosHZJOVQcJzOCrUXdw%2BbPXBYNgkCdvZxEpuQQ%2BBAlhL2cvK45Hj8qXQ2EsaI3Verw7slmaCVM49%2FokxMUYG4AOWOFdoiPMuE5s3Ctz%2BDDaDP1OT%2Fj6pJPlMnPBpsgbHXau1LE2wTj%2FS%2Bx2Xfdcjj%2FOu5EZbBLAfihX1TOTCI7w1iNnoYIKJcBBfP19&X-Amz-Signature=68aacb8daa2209336aad667c547bc1eed81fc985c68464d5b9034e81b490d089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UAWUU5Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWqSGotyXMoMRC8wo22UghLyKGEzI8GWFRsgXSuMMwAiBwPKBeCm9aTHXp8P2b%2F7i%2FI4QqRqGxw4bmnr9qWfV9UyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2nmJX9XaoC6MOq%2FFKtwDQ%2BPp1bI9gkpm9t5SqX5BnK5Fv62837yljiepcHwq0J6IhWhJsM%2FwUriWDEVshddYS1U0JOyBsS8gEqubf2TFN1Qd8HYDZKsYyZQgikYPeYgRfsPACroE7RN%2BESiy1bVwwdIy2670xfIY5NZRLICSVXNtU4gCRiZrll4kdkeSuKm3aXpuGAo6EDoszIBYiFw7YZPaxAuwOWz8soLeDwry1AYTTvosx1qXGHjNfJiagN3Hw9zTGPDQQlueI%2BK1npFR3R4RjjrLENmoEroGaH5eL8QE9XbM0JC9sya%2Ffo2cCSbgXjzllGnEqAHPBISRORNxXcgf78WSPFMcFG3msSMuCEoZ7QXO%2BwJu5Hjx%2FN35q%2BQWC1wFRg3t4Ao4eRSpUQSeQaJojmg2775uQOux0lsCfBks5AlR3%2FYLoPyhKiLV2SF%2F2IC2mdMSe1IEpZ4ZEseWVWSzPWV%2Br3p2Z0v5ohYBx2sCStP2hHry9bezDuOgoLpNhBHm25CJyGDrYIBQTKJBLcMZ6Mcl75j1lNcUPkVFNyrYu7htUJHOF7EsOnEK50G9OI88tiTw1MsCNYeKfD77uXdBkaHfcJzOC90IQTzGS4GfN28sVMK8HZNVzodQclDQtcGKwluZ35c7vcMwrZy2xAY6pgEYv8CeNEJsyz%2FgtvBU7nD5ybE5ObJEPz14reosHZJOVQcJzOCrUXdw%2BbPXBYNgkCdvZxEpuQQ%2BBAlhL2cvK45Hj8qXQ2EsaI3Verw7slmaCVM49%2FokxMUYG4AOWOFdoiPMuE5s3Ctz%2BDDaDP1OT%2Fj6pJPlMnPBpsgbHXau1LE2wTj%2FS%2Bx2Xfdcjj%2FOu5EZbBLAfihX1TOTCI7w1iNnoYIKJcBBfP19&X-Amz-Signature=0c8bec908b2efd85dee70f1eda4d1f330f5858ced8e342a9bfa6d4d55595e305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UAWUU5Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWqSGotyXMoMRC8wo22UghLyKGEzI8GWFRsgXSuMMwAiBwPKBeCm9aTHXp8P2b%2F7i%2FI4QqRqGxw4bmnr9qWfV9UyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2nmJX9XaoC6MOq%2FFKtwDQ%2BPp1bI9gkpm9t5SqX5BnK5Fv62837yljiepcHwq0J6IhWhJsM%2FwUriWDEVshddYS1U0JOyBsS8gEqubf2TFN1Qd8HYDZKsYyZQgikYPeYgRfsPACroE7RN%2BESiy1bVwwdIy2670xfIY5NZRLICSVXNtU4gCRiZrll4kdkeSuKm3aXpuGAo6EDoszIBYiFw7YZPaxAuwOWz8soLeDwry1AYTTvosx1qXGHjNfJiagN3Hw9zTGPDQQlueI%2BK1npFR3R4RjjrLENmoEroGaH5eL8QE9XbM0JC9sya%2Ffo2cCSbgXjzllGnEqAHPBISRORNxXcgf78WSPFMcFG3msSMuCEoZ7QXO%2BwJu5Hjx%2FN35q%2BQWC1wFRg3t4Ao4eRSpUQSeQaJojmg2775uQOux0lsCfBks5AlR3%2FYLoPyhKiLV2SF%2F2IC2mdMSe1IEpZ4ZEseWVWSzPWV%2Br3p2Z0v5ohYBx2sCStP2hHry9bezDuOgoLpNhBHm25CJyGDrYIBQTKJBLcMZ6Mcl75j1lNcUPkVFNyrYu7htUJHOF7EsOnEK50G9OI88tiTw1MsCNYeKfD77uXdBkaHfcJzOC90IQTzGS4GfN28sVMK8HZNVzodQclDQtcGKwluZ35c7vcMwrZy2xAY6pgEYv8CeNEJsyz%2FgtvBU7nD5ybE5ObJEPz14reosHZJOVQcJzOCrUXdw%2BbPXBYNgkCdvZxEpuQQ%2BBAlhL2cvK45Hj8qXQ2EsaI3Verw7slmaCVM49%2FokxMUYG4AOWOFdoiPMuE5s3Ctz%2BDDaDP1OT%2Fj6pJPlMnPBpsgbHXau1LE2wTj%2FS%2Bx2Xfdcjj%2FOu5EZbBLAfihX1TOTCI7w1iNnoYIKJcBBfP19&X-Amz-Signature=2ff60ad11dcb5883cf999db54aeb61034752a785abbee3ac2049b30f0bdf8209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UAWUU5Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWqSGotyXMoMRC8wo22UghLyKGEzI8GWFRsgXSuMMwAiBwPKBeCm9aTHXp8P2b%2F7i%2FI4QqRqGxw4bmnr9qWfV9UyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2nmJX9XaoC6MOq%2FFKtwDQ%2BPp1bI9gkpm9t5SqX5BnK5Fv62837yljiepcHwq0J6IhWhJsM%2FwUriWDEVshddYS1U0JOyBsS8gEqubf2TFN1Qd8HYDZKsYyZQgikYPeYgRfsPACroE7RN%2BESiy1bVwwdIy2670xfIY5NZRLICSVXNtU4gCRiZrll4kdkeSuKm3aXpuGAo6EDoszIBYiFw7YZPaxAuwOWz8soLeDwry1AYTTvosx1qXGHjNfJiagN3Hw9zTGPDQQlueI%2BK1npFR3R4RjjrLENmoEroGaH5eL8QE9XbM0JC9sya%2Ffo2cCSbgXjzllGnEqAHPBISRORNxXcgf78WSPFMcFG3msSMuCEoZ7QXO%2BwJu5Hjx%2FN35q%2BQWC1wFRg3t4Ao4eRSpUQSeQaJojmg2775uQOux0lsCfBks5AlR3%2FYLoPyhKiLV2SF%2F2IC2mdMSe1IEpZ4ZEseWVWSzPWV%2Br3p2Z0v5ohYBx2sCStP2hHry9bezDuOgoLpNhBHm25CJyGDrYIBQTKJBLcMZ6Mcl75j1lNcUPkVFNyrYu7htUJHOF7EsOnEK50G9OI88tiTw1MsCNYeKfD77uXdBkaHfcJzOC90IQTzGS4GfN28sVMK8HZNVzodQclDQtcGKwluZ35c7vcMwrZy2xAY6pgEYv8CeNEJsyz%2FgtvBU7nD5ybE5ObJEPz14reosHZJOVQcJzOCrUXdw%2BbPXBYNgkCdvZxEpuQQ%2BBAlhL2cvK45Hj8qXQ2EsaI3Verw7slmaCVM49%2FokxMUYG4AOWOFdoiPMuE5s3Ctz%2BDDaDP1OT%2Fj6pJPlMnPBpsgbHXau1LE2wTj%2FS%2Bx2Xfdcjj%2FOu5EZbBLAfihX1TOTCI7w1iNnoYIKJcBBfP19&X-Amz-Signature=4c4551874824c9582e0f594c87b1c3b34197c46ca0e2eecf3d55bb7d5d63bc02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UAWUU5Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWqSGotyXMoMRC8wo22UghLyKGEzI8GWFRsgXSuMMwAiBwPKBeCm9aTHXp8P2b%2F7i%2FI4QqRqGxw4bmnr9qWfV9UyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2nmJX9XaoC6MOq%2FFKtwDQ%2BPp1bI9gkpm9t5SqX5BnK5Fv62837yljiepcHwq0J6IhWhJsM%2FwUriWDEVshddYS1U0JOyBsS8gEqubf2TFN1Qd8HYDZKsYyZQgikYPeYgRfsPACroE7RN%2BESiy1bVwwdIy2670xfIY5NZRLICSVXNtU4gCRiZrll4kdkeSuKm3aXpuGAo6EDoszIBYiFw7YZPaxAuwOWz8soLeDwry1AYTTvosx1qXGHjNfJiagN3Hw9zTGPDQQlueI%2BK1npFR3R4RjjrLENmoEroGaH5eL8QE9XbM0JC9sya%2Ffo2cCSbgXjzllGnEqAHPBISRORNxXcgf78WSPFMcFG3msSMuCEoZ7QXO%2BwJu5Hjx%2FN35q%2BQWC1wFRg3t4Ao4eRSpUQSeQaJojmg2775uQOux0lsCfBks5AlR3%2FYLoPyhKiLV2SF%2F2IC2mdMSe1IEpZ4ZEseWVWSzPWV%2Br3p2Z0v5ohYBx2sCStP2hHry9bezDuOgoLpNhBHm25CJyGDrYIBQTKJBLcMZ6Mcl75j1lNcUPkVFNyrYu7htUJHOF7EsOnEK50G9OI88tiTw1MsCNYeKfD77uXdBkaHfcJzOC90IQTzGS4GfN28sVMK8HZNVzodQclDQtcGKwluZ35c7vcMwrZy2xAY6pgEYv8CeNEJsyz%2FgtvBU7nD5ybE5ObJEPz14reosHZJOVQcJzOCrUXdw%2BbPXBYNgkCdvZxEpuQQ%2BBAlhL2cvK45Hj8qXQ2EsaI3Verw7slmaCVM49%2FokxMUYG4AOWOFdoiPMuE5s3Ctz%2BDDaDP1OT%2Fj6pJPlMnPBpsgbHXau1LE2wTj%2FS%2Bx2Xfdcjj%2FOu5EZbBLAfihX1TOTCI7w1iNnoYIKJcBBfP19&X-Amz-Signature=401df6308c51430b4697921ef1456bbbe54272cce199a8443c51a602a93fdc67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UAWUU5Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWqSGotyXMoMRC8wo22UghLyKGEzI8GWFRsgXSuMMwAiBwPKBeCm9aTHXp8P2b%2F7i%2FI4QqRqGxw4bmnr9qWfV9UyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2nmJX9XaoC6MOq%2FFKtwDQ%2BPp1bI9gkpm9t5SqX5BnK5Fv62837yljiepcHwq0J6IhWhJsM%2FwUriWDEVshddYS1U0JOyBsS8gEqubf2TFN1Qd8HYDZKsYyZQgikYPeYgRfsPACroE7RN%2BESiy1bVwwdIy2670xfIY5NZRLICSVXNtU4gCRiZrll4kdkeSuKm3aXpuGAo6EDoszIBYiFw7YZPaxAuwOWz8soLeDwry1AYTTvosx1qXGHjNfJiagN3Hw9zTGPDQQlueI%2BK1npFR3R4RjjrLENmoEroGaH5eL8QE9XbM0JC9sya%2Ffo2cCSbgXjzllGnEqAHPBISRORNxXcgf78WSPFMcFG3msSMuCEoZ7QXO%2BwJu5Hjx%2FN35q%2BQWC1wFRg3t4Ao4eRSpUQSeQaJojmg2775uQOux0lsCfBks5AlR3%2FYLoPyhKiLV2SF%2F2IC2mdMSe1IEpZ4ZEseWVWSzPWV%2Br3p2Z0v5ohYBx2sCStP2hHry9bezDuOgoLpNhBHm25CJyGDrYIBQTKJBLcMZ6Mcl75j1lNcUPkVFNyrYu7htUJHOF7EsOnEK50G9OI88tiTw1MsCNYeKfD77uXdBkaHfcJzOC90IQTzGS4GfN28sVMK8HZNVzodQclDQtcGKwluZ35c7vcMwrZy2xAY6pgEYv8CeNEJsyz%2FgtvBU7nD5ybE5ObJEPz14reosHZJOVQcJzOCrUXdw%2BbPXBYNgkCdvZxEpuQQ%2BBAlhL2cvK45Hj8qXQ2EsaI3Verw7slmaCVM49%2FokxMUYG4AOWOFdoiPMuE5s3Ctz%2BDDaDP1OT%2Fj6pJPlMnPBpsgbHXau1LE2wTj%2FS%2Bx2Xfdcjj%2FOu5EZbBLAfihX1TOTCI7w1iNnoYIKJcBBfP19&X-Amz-Signature=c52c2a391a0ad116eb698245a5dc4ebb0145ad9520613c494c8c177801fd0d96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

TODO: preview of robot we r going make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UAWUU5Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWqSGotyXMoMRC8wo22UghLyKGEzI8GWFRsgXSuMMwAiBwPKBeCm9aTHXp8P2b%2F7i%2FI4QqRqGxw4bmnr9qWfV9UyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2nmJX9XaoC6MOq%2FFKtwDQ%2BPp1bI9gkpm9t5SqX5BnK5Fv62837yljiepcHwq0J6IhWhJsM%2FwUriWDEVshddYS1U0JOyBsS8gEqubf2TFN1Qd8HYDZKsYyZQgikYPeYgRfsPACroE7RN%2BESiy1bVwwdIy2670xfIY5NZRLICSVXNtU4gCRiZrll4kdkeSuKm3aXpuGAo6EDoszIBYiFw7YZPaxAuwOWz8soLeDwry1AYTTvosx1qXGHjNfJiagN3Hw9zTGPDQQlueI%2BK1npFR3R4RjjrLENmoEroGaH5eL8QE9XbM0JC9sya%2Ffo2cCSbgXjzllGnEqAHPBISRORNxXcgf78WSPFMcFG3msSMuCEoZ7QXO%2BwJu5Hjx%2FN35q%2BQWC1wFRg3t4Ao4eRSpUQSeQaJojmg2775uQOux0lsCfBks5AlR3%2FYLoPyhKiLV2SF%2F2IC2mdMSe1IEpZ4ZEseWVWSzPWV%2Br3p2Z0v5ohYBx2sCStP2hHry9bezDuOgoLpNhBHm25CJyGDrYIBQTKJBLcMZ6Mcl75j1lNcUPkVFNyrYu7htUJHOF7EsOnEK50G9OI88tiTw1MsCNYeKfD77uXdBkaHfcJzOC90IQTzGS4GfN28sVMK8HZNVzodQclDQtcGKwluZ35c7vcMwrZy2xAY6pgEYv8CeNEJsyz%2FgtvBU7nD5ybE5ObJEPz14reosHZJOVQcJzOCrUXdw%2BbPXBYNgkCdvZxEpuQQ%2BBAlhL2cvK45Hj8qXQ2EsaI3Verw7slmaCVM49%2FokxMUYG4AOWOFdoiPMuE5s3Ctz%2BDDaDP1OT%2Fj6pJPlMnPBpsgbHXau1LE2wTj%2FS%2Bx2Xfdcjj%2FOu5EZbBLAfihX1TOTCI7w1iNnoYIKJcBBfP19&X-Amz-Signature=0f857f729ccd744849f988f34114a89e5c7c7ac3189c2ef244c51fb9756d2d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start must all urdf have these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
**<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>**
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OO6SD45%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWvbPw4SCPLoR5F%2FcZRna7Lchwa4rwOGViO4ClfkpDXAiEA6fs8egBL4WEENOhbCv7HShE%2FnyMpnbwx%2BDY8BIeWDBEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfj9nNGTcJ50ldLCircA3SI%2B1I8A%2FQDm9Ew1gOn5gxtKl%2FsJWhbBcxqB2wqcpyRRvoIuwwhCYeRmu2fBfYxlEm9NOUjeP6dqg6XA3JjVhWZblAKlP54Aww7PDFCCFLvU1oRmvUvm2Zla%2B4I%2F0UCNWYfEaVCWzFt%2BoEZGKEOdQ4X%2BGOLL%2B0kXsQYtltgEBJdric7iojAQBMfQ7k6ZBlvP%2FTSYnUU2guEPZlWjzOmpVXK4f2S5yjpK8AdZ98aZwCGA8mdrEOcVmxtxDgKVjUge%2FPsISbSFihkqiUYbDob7O%2BRh26oUrqsT6ePb8YcyZgrUR1OFKshiM1pD9q%2BGo8Ba%2BkuihcTO2HMrKpw%2FCQyMqvzdYFH0ZSh07JxZCg5yrAhAe3nhGXVrMWd6hBI2JLUBXa54utiLyZaGMBTgxIq%2BLWyBrtespDsXICyJA7sF5UvgWpkhpyS16kQwglde05sotOQYIg7%2BRXp%2FVOxv2ZtSFqcLPSTfRFlsuoS5mP%2F0j4PrDB7RZzl0%2Fiv5CckLhbkBazbvBbwCOAneVvOOyKY%2Bqaq85%2B0zFg20%2BtE2H416FePczkhVAffrSOyGRe1lutdcY7yqm8jLCfBvQB0LQFplhILyVDsxBknKOZVefEkzPsZ6VIuD8pRb0qEbGOVMJ2dtsQGOqUBOFmP9nWWXQEmb1OoO0ZI8qxTZvaAFTrBroVf%2BDsiw7kmLgmpMMod6grHcBGLs%2BCRjG5W3B%2B4fBuZfRxOEJiOQmqFHwThuKQwcRotzejE8OLDese%2F7ATq3a4pJ76hJ5kFXmoSek7EAAeDUSeSasXCDOqzh1EOKiaUG6unGAsM7HXwh%2BHF3sAwXTwvGcB56MVzcbdKyO%2BMQYTG%2BHNppTnxB6%2F6wDK6&X-Amz-Signature=af100764b565a8dc7e1447013c907df6cc44bcd1ea143112f677dc172ef11cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All of our code will go in between the `<robot>` tags 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FJSXEJD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeQ1k9n8a0wbs%2FTT1EoisZJh0S03hRkVJV73C2B6fO9AIhAL7RKrTu%2B4Sz2JADS%2BgwNMP9tDeIV1CdzkgWWZNK78jiKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAf%2Bi0cDv4tNNtSQAq3APl3WNTSgP%2Fsh%2BSlo6Hn2KKmsEAcvnW2biLXfNA5K5XOsiluWQkLu3qTyLd3yNVr%2BA68KfsNrRKJJ3R67JSsH6bKl7ocHOkJPmwA%2BpDAFutRUvAPr4QiL9CeSNgbWnBjsRKaRw%2BLZQMklXN%2BIGGOhTSN8L1%2BWbhAYG2xJ8c1dkChGKvLBe7KY2Fx0cQQnuUffcG0UdFGqQDSEa3gnVU4U0rIWrsGtEqbxX%2F49ydLvwcbdMaCST4MJAGCacBe43ITNm5%2FZnCzpUMX01c2dMS9Y5ZcJ9rPjl2TB%2B7eyy0fnF6xjt2TjU6tPXoDRTITPVhniz%2FDvA1sMSNpby64Xzl0%2BI5aDzkPPsbDQvvRPHmlnJM%2BLvqGcAqoAukV2Ivj9EpCjsg%2F%2FevRREHf96AICqSMamsK8Lffah1KEbrLEN7iUrV8r83woRy%2Bi6LhOUkYI7qvcA8m42NCJFal3LjviYW9olspbN3Fr35guv6B7HPF2Q0EcrLuxiYk%2BX9KBuQE1vdl%2B6fnVI7RdNOHm7yHPO9AgYq8p1Jgx%2BzmddCAtCixR1Cu8DoMA5u6U9yw39zYeHW%2FI0D%2FktctXhf%2BwOw7TKHyhgXjmFKZ7ZSCqYkAE7hH64cZjbvu97ZdLuhAw1FzjDlnLbEBjqkAbKhXOvBXf9XreDyLc3CIs3qVImMmVWdrIUibkl8CB5gKQgVa55dT8whFUSXSwjhsno%2F49P6yxJ8JQkrJMMDmS9GlwvIQfcfLxlOUojH5vkyznby6z7C%2Bx%2B1NUT1YHxjIt1vyVzyv5Kou3rCG567ineXDCKoKKkmXhQmOkugk76ZGeAh%2FvPeUZA88FmzourYK75p07hDwpczVVJuDOK0%2BR4v7qAq&X-Amz-Signature=10e8ae6d498614b80b6b2a6d20d2c58890ed09f076fb4a11a096b25f9e2b0a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
      <summary>What do the variables represent?</summary>
      TODO:
  </details>

Lets now make a link for the body of the robot

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNZSN5T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7KcHVlYTCS%2FnLTUb7HB8zlivPZE1bh840gzTngMBcJQIhANlv9GNE3DWgI5ch6G3TQizpuhnz66U81eQSJJys6hJrKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCeswg%2FCxhrV5lPHEq3AMotOmF3cPEFjhY8Ty7Swt8wK2uYTRbBw5UZw6T55HHJhs3gNcUvvPX2gsRtI63Cq2DLFMNudS5cmfWzxLh%2B1WMeL5coK3KHLyKsdCReikcZ4tOnEyiMQJpxtJaJ7H16ZoEX7uNfWNmLfIcmsGOtuy0x2i1fFOe%2Bh%2BdhaLPyS8cAcwaMmpF3IASbuBqE6mHNORirMVpyZC88WQL5xkkcHEmMyPXE1gpo%2FzTkq9w6yYFhpL34Bwo5BRhXkHDr9YOX3tkE5j146dghb3eKTq9fGU4n%2FskoKilY4EfGpu5Yp2SIC18nqSLbrMJnDMEiLTvfr8fjUNQkjzFFpH1xaZANKqKy5vRl6PPBQBD29Z3S%2FRfEyBkHi2AGrcCsNgF4rNe2kVvNzBA0T5bgHTWU%2B2Q9mPc8U5e1BMoP4%2ByzuoN6yJNs8MmQYptdukK9ioCW4ULHD%2FFjwjWfPPtDa7tLZb8BhkflxnllKpVBM%2BP%2Bhoqv5pn%2B1pJ1eCaTP96KVqLHZ1biR8BllChRS79Jvf8LlI1lx%2FvuL3jRqCdG%2BwMGgC4dvCs8eWsqVno3ahkNeBHxT29PWUNVaWQFzGX8LrzvL9ey4TWb8dBpyc9tqVsaOFX%2FAbETHOYzxKDdu9cqRI8%2FTCrnbbEBjqkATHVMDFWh%2FVDfFcgncnMiwTOWb9k7y9k7SPdv6o2LEjo6uTWDl4j7DlscHFXQllM3poST8Oq%2BEc%2FYIoxdAdTIcxaM%2F0V4qvhrN7DURJrO%2F6WX76dIVYvs7xGnpc%2F25paCsolmb4hwgWLQoMU1a7EGaBPiLv5wNK1tpF5vGE%2BAMlJy8jXjrqV5RK9XyCmKgljozGNoM8%2FF247%2BuaR8R4upihu5voi&X-Amz-Signature=f3190141b9fd8c2ec34c3388661940d318543d8fedb87c2cb072777016741a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UAWUU5Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWqSGotyXMoMRC8wo22UghLyKGEzI8GWFRsgXSuMMwAiBwPKBeCm9aTHXp8P2b%2F7i%2FI4QqRqGxw4bmnr9qWfV9UyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2nmJX9XaoC6MOq%2FFKtwDQ%2BPp1bI9gkpm9t5SqX5BnK5Fv62837yljiepcHwq0J6IhWhJsM%2FwUriWDEVshddYS1U0JOyBsS8gEqubf2TFN1Qd8HYDZKsYyZQgikYPeYgRfsPACroE7RN%2BESiy1bVwwdIy2670xfIY5NZRLICSVXNtU4gCRiZrll4kdkeSuKm3aXpuGAo6EDoszIBYiFw7YZPaxAuwOWz8soLeDwry1AYTTvosx1qXGHjNfJiagN3Hw9zTGPDQQlueI%2BK1npFR3R4RjjrLENmoEroGaH5eL8QE9XbM0JC9sya%2Ffo2cCSbgXjzllGnEqAHPBISRORNxXcgf78WSPFMcFG3msSMuCEoZ7QXO%2BwJu5Hjx%2FN35q%2BQWC1wFRg3t4Ao4eRSpUQSeQaJojmg2775uQOux0lsCfBks5AlR3%2FYLoPyhKiLV2SF%2F2IC2mdMSe1IEpZ4ZEseWVWSzPWV%2Br3p2Z0v5ohYBx2sCStP2hHry9bezDuOgoLpNhBHm25CJyGDrYIBQTKJBLcMZ6Mcl75j1lNcUPkVFNyrYu7htUJHOF7EsOnEK50G9OI88tiTw1MsCNYeKfD77uXdBkaHfcJzOC90IQTzGS4GfN28sVMK8HZNVzodQclDQtcGKwluZ35c7vcMwrZy2xAY6pgEYv8CeNEJsyz%2FgtvBU7nD5ybE5ObJEPz14reosHZJOVQcJzOCrUXdw%2BbPXBYNgkCdvZxEpuQQ%2BBAlhL2cvK45Hj8qXQ2EsaI3Verw7slmaCVM49%2FokxMUYG4AOWOFdoiPMuE5s3Ctz%2BDDaDP1OT%2Fj6pJPlMnPBpsgbHXau1LE2wTj%2FS%2Bx2Xfdcjj%2FOu5EZbBLAfihX1TOTCI7w1iNnoYIKJcBBfP19&X-Amz-Signature=b4e9779facb0234a49aa137a2c23445a98228ed96b6400a0b4887d78cefd40fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVZNZHA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmbknk%2B1DVgVK9kQSx3QGzrYFk56B2Bjie%2Fap9bpetsQIgJWuUsfCN6Innm4MnrGeTZwjcq3Y0f1LsLxcL7dt58IQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXBaMC1MuWGDN9OlCrcAxI%2FajNtFnsTE%2BkCmNACWbWsDI3%2BxWcfHFeG8nKre2TrXNhvKNkARfpbOqnX93uJssKFmQS0THJv3CIC2zjaE80ih7XVj5u%2BPcIBRJQYOqUgPqV01DPHsX%2BPKjY5ZrSgoDFpzywvzFmG0bzJb5CuVBXsuEQBYnlx%2FcusrUEHFWxIGrK5F1dg8oViW2Mx53mpZ22xi3KuXJ2JzFcCHHKtN4LDcUVOsUN%2FtnNX3OVFcD0oEWNAbOzSy53D%2FcW95fFp5%2F989%2BH1ajX1Im6VIvOsBHSZGMe6ob2ey7WEgRUSsMjVUKEeRC9bXP6raYt95aagQdwX%2BWooe8Z4L%2FNw6Kj55aMIbmRQ1sxblvlDkFwGPrWW2cj7p4nmlm80dHa7yJAmWgnDr0bWncc3fSuaPMutjU4qFk9pdGGcLpzoqf55zXdGwImbNIX15Pf8t9OOUyneHmcm0qCdFYXVDvEo3MOC%2FGYAWDQepsH97Jm1A9RvTeF7q%2Ba74B84rrLid7%2FsuShJbYI%2B8Q6zccYFsm4ukf5ZhEVrHXzHdPFl2cVD2rUqSK3ncQpVfTKnhR%2FTBgyoIbTt2hYCJztSAKWJ7%2Fw2QaFHeYLw91%2Bqpv4X6Qt241xmmunUTbofqvOIyA%2FjJRneMJqdtsQGOqUB5I%2BEpWLmrLlfayDg%2BSAEVp2W6mHdh8OOoVs3vcIUsQq2IhMI4z3%2FR%2B%2FNKFCBJkoTQm0QqwZlP70Q7S0lFTX%2BYGBpUDgvPnANj0CvEa3IRb1muZx8nty3u%2FO43tCRdkbqswdlivEo1SDUMCQfatu3Wu%2BIZ7QnbGOgNC1nA8cMLy3MRPTSWiWjTCsgCDKxCO6P%2B5QQ2rIAchYmwBZTb2Di%2FJAgSzq2&X-Amz-Signature=e982bd7f9f8df7fc8688fc59a6641798e8a9fec4769b19fb7da2e1b08bc8f551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UAWUU5Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWqSGotyXMoMRC8wo22UghLyKGEzI8GWFRsgXSuMMwAiBwPKBeCm9aTHXp8P2b%2F7i%2FI4QqRqGxw4bmnr9qWfV9UyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2nmJX9XaoC6MOq%2FFKtwDQ%2BPp1bI9gkpm9t5SqX5BnK5Fv62837yljiepcHwq0J6IhWhJsM%2FwUriWDEVshddYS1U0JOyBsS8gEqubf2TFN1Qd8HYDZKsYyZQgikYPeYgRfsPACroE7RN%2BESiy1bVwwdIy2670xfIY5NZRLICSVXNtU4gCRiZrll4kdkeSuKm3aXpuGAo6EDoszIBYiFw7YZPaxAuwOWz8soLeDwry1AYTTvosx1qXGHjNfJiagN3Hw9zTGPDQQlueI%2BK1npFR3R4RjjrLENmoEroGaH5eL8QE9XbM0JC9sya%2Ffo2cCSbgXjzllGnEqAHPBISRORNxXcgf78WSPFMcFG3msSMuCEoZ7QXO%2BwJu5Hjx%2FN35q%2BQWC1wFRg3t4Ao4eRSpUQSeQaJojmg2775uQOux0lsCfBks5AlR3%2FYLoPyhKiLV2SF%2F2IC2mdMSe1IEpZ4ZEseWVWSzPWV%2Br3p2Z0v5ohYBx2sCStP2hHry9bezDuOgoLpNhBHm25CJyGDrYIBQTKJBLcMZ6Mcl75j1lNcUPkVFNyrYu7htUJHOF7EsOnEK50G9OI88tiTw1MsCNYeKfD77uXdBkaHfcJzOC90IQTzGS4GfN28sVMK8HZNVzodQclDQtcGKwluZ35c7vcMwrZy2xAY6pgEYv8CeNEJsyz%2FgtvBU7nD5ybE5ObJEPz14reosHZJOVQcJzOCrUXdw%2BbPXBYNgkCdvZxEpuQQ%2BBAlhL2cvK45Hj8qXQ2EsaI3Verw7slmaCVM49%2FokxMUYG4AOWOFdoiPMuE5s3Ctz%2BDDaDP1OT%2Fj6pJPlMnPBpsgbHXau1LE2wTj%2FS%2Bx2Xfdcjj%2FOu5EZbBLAfihX1TOTCI7w1iNnoYIKJcBBfP19&X-Amz-Signature=247ad908d0515992faa73317d61a4a1de6245e8067f40fc8714f7fe892ed5288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBMOQG3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCycsqwUhxxDV6MENbvxnQFdrXV7pJziC%2Fd3DSTSWqhlwIhAMnDzGiIWZxgYV5Kd5COJCCUKbvCP8rJdPmiH7OPCF3pKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzDddKEGzwKdF6eTQq3AM7%2FEdZs6Kgx9XILUpraBE3cYk8Rg2JiOziReicFWIYd9tCa8GcQbl%2FhCDBo5XHtv%2FgS%2B17y2usjaC3HZnju2ryNFUjI5%2Fw%2BofhzdGT2iHO%2B0gvMMWQ5%2BqnCf6LL%2FHNrBuoOTuZJuzI0Ghf0MpBYw4uJHflwLJeQPyWDRTtdDlQJzX1BTycEDfWIRdB8nPSYsxz72ace2wHpbNoaqUXXojF8StFgFoRue7JPeQPacdL8snytgdqX51IqW6SLFv5ihlJ0YG9pgjhkajEq57AaR21UTHzPGkZMjq1KW2RtoAgkNBFku6dfb4v9V15ZOUjpiB1Y0nhNr%2FO7SQmZfmJmh%2FurNd8WmC9emprdVFuPXHotU801M0Doop%2FordPnN05KUnvEALLTw3a0xlztuGwZyiogCHGY6wGY%2FayILosZTODd2P2Cg5JagBXxl5xA%2BXSGS32dzPHrAx9Ivcx1hisA2f6EHHM4iC69AUfJ9AVm7EH6o5mkTP18JgtXQ4fZilQNYv23Jv8doyGBBebOZC4kie%2B9s7Ur21Q59%2F8IXjSjoirbicYmFZwUfLn0g1U8asdN6BpiFxrUAcwwmMIIRDpGjWs2Xh2OxuSgNOVkomxWZSfuOlZAQB4LVnbchpy6DDmnLbEBjqkAeOI%2FFsx%2Fn44iWqEReO4m4TV8Si5teSqe%2BMEOdQRjPDIkr7WiXHYDLAJ%2BYzdxuixyVp8tBRzYOYfwNabr2QxG%2BqICSRxn4H9GO%2FsqnFgitQCn5d21Q4LVrC%2B2VIFKAlSAm0zpRw9Hv3LuRAsbqB0CjWyS16cqml5IpUBG0pZK9h%2F9vwbGwqRW3%2FeWjwaRzZTiR%2FVZJxrWtlPP%2Bf42IAGYlLRR7ON&X-Amz-Signature=951e24970aac7e3d6e7d7f377779c8bac3010a520a40ccb72bccb917752dd588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UAWUU5Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWqSGotyXMoMRC8wo22UghLyKGEzI8GWFRsgXSuMMwAiBwPKBeCm9aTHXp8P2b%2F7i%2FI4QqRqGxw4bmnr9qWfV9UyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2nmJX9XaoC6MOq%2FFKtwDQ%2BPp1bI9gkpm9t5SqX5BnK5Fv62837yljiepcHwq0J6IhWhJsM%2FwUriWDEVshddYS1U0JOyBsS8gEqubf2TFN1Qd8HYDZKsYyZQgikYPeYgRfsPACroE7RN%2BESiy1bVwwdIy2670xfIY5NZRLICSVXNtU4gCRiZrll4kdkeSuKm3aXpuGAo6EDoszIBYiFw7YZPaxAuwOWz8soLeDwry1AYTTvosx1qXGHjNfJiagN3Hw9zTGPDQQlueI%2BK1npFR3R4RjjrLENmoEroGaH5eL8QE9XbM0JC9sya%2Ffo2cCSbgXjzllGnEqAHPBISRORNxXcgf78WSPFMcFG3msSMuCEoZ7QXO%2BwJu5Hjx%2FN35q%2BQWC1wFRg3t4Ao4eRSpUQSeQaJojmg2775uQOux0lsCfBks5AlR3%2FYLoPyhKiLV2SF%2F2IC2mdMSe1IEpZ4ZEseWVWSzPWV%2Br3p2Z0v5ohYBx2sCStP2hHry9bezDuOgoLpNhBHm25CJyGDrYIBQTKJBLcMZ6Mcl75j1lNcUPkVFNyrYu7htUJHOF7EsOnEK50G9OI88tiTw1MsCNYeKfD77uXdBkaHfcJzOC90IQTzGS4GfN28sVMK8HZNVzodQclDQtcGKwluZ35c7vcMwrZy2xAY6pgEYv8CeNEJsyz%2FgtvBU7nD5ybE5ObJEPz14reosHZJOVQcJzOCrUXdw%2BbPXBYNgkCdvZxEpuQQ%2BBAlhL2cvK45Hj8qXQ2EsaI3Verw7slmaCVM49%2FokxMUYG4AOWOFdoiPMuE5s3Ctz%2BDDaDP1OT%2Fj6pJPlMnPBpsgbHXau1LE2wTj%2FS%2Bx2Xfdcjj%2FOu5EZbBLAfihX1TOTCI7w1iNnoYIKJcBBfP19&X-Amz-Signature=41af65c3381c241849e5c63a0a2a06ec4fbe35e84c763eb9bb942a122d72143f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLH3PWO6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwx9sxydGUfsPwUd9L2u27qC8bOigFktr2kWV2Vyj0hAiEAvEpoNTWt4hmDKqfIZRqESDSDr3OLBFYbcdcg%2FX4gJ1QqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY%2FuQYlI16XFs9CYircA46qD3zOFgQ5mr8JzYJ73x6e7KQR029Ps8wzene8xByaEBrguB0KgBWv1e3nvvI6MwBHG6AG8m8TpguLMfJZIPlYJXKFzjYWhY1bPX6mdRh%2BxC0eiDEQaetbr46baOXApBTsJPNiL9bAhI13mspKrKmOMrHhyFy7Q5L3uuXbiFV1NdhN9xxJp0gggqXGdrwyE2D63tyz%2Fzj11p0a1oBYKdjSY3%2BmopwYgReD9kLhJxcxfVZUGAsdksUa0S%2FcrXtg9vk20ueRk%2BeLO7H%2FoF3%2BzSOVV0f5BcZycKwM%2FhFXqfbHgPiBlpxWKU06XfDeWzHbFRCysirHLRQml5PF3DJBjtmFE3RaaBP%2BunZGvHentiMco3TKo5vnrPqzAOgomA73%2FEpt%2BASEbC17Ao6pMMCI42xQtezuLsvXTnt%2Bw5SHbHygzRbmLFQ8BhE9GnjD%2FfoPY%2BYwkC9FgzrnCcXtUvOUI3LlCyWGkjuHM%2FhGzaE6jY%2FfrWA1ZaTfRkOTRvVNt1vaJWeZ%2FlsxDO49y8i9KiNE%2FnFTNxVF4dSFreIgUdeFjj1uzeyYn15DWMvZe46%2B4NAcD%2FExlc80jjoy%2FEC4q0pZK21zspie9Eu9Ifr2dAvo%2BGb9FkXkK1QIoU%2FRRSuRMM%2BctsQGOqUBxYv9oTdYVG8%2FEcktVIoiorJkKmYW0h73vN3yT%2FYX5kgJU2WijKtzc1zxklP8B2DODELXo%2BVXtQiBUrDcf8eYrE3FO%2Buk8xTAY%2BtUvxFwxubwVy4OEea77NfHXxY4J7bVf3%2B15SEseJ%2B3JHHKvIDMKv07FZBCwKqa1pqYKFS5CTBrWMWLWPLeTFYNKAYLgaWG%2BNgMk4JP8glzamUTBIXf%2FtP4NpQi&X-Amz-Signature=3d1229f0dc1733088ad340bfb61a7247880dbb21131ba4537ce396eb56dedb89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UAWUU5Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWqSGotyXMoMRC8wo22UghLyKGEzI8GWFRsgXSuMMwAiBwPKBeCm9aTHXp8P2b%2F7i%2FI4QqRqGxw4bmnr9qWfV9UyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2nmJX9XaoC6MOq%2FFKtwDQ%2BPp1bI9gkpm9t5SqX5BnK5Fv62837yljiepcHwq0J6IhWhJsM%2FwUriWDEVshddYS1U0JOyBsS8gEqubf2TFN1Qd8HYDZKsYyZQgikYPeYgRfsPACroE7RN%2BESiy1bVwwdIy2670xfIY5NZRLICSVXNtU4gCRiZrll4kdkeSuKm3aXpuGAo6EDoszIBYiFw7YZPaxAuwOWz8soLeDwry1AYTTvosx1qXGHjNfJiagN3Hw9zTGPDQQlueI%2BK1npFR3R4RjjrLENmoEroGaH5eL8QE9XbM0JC9sya%2Ffo2cCSbgXjzllGnEqAHPBISRORNxXcgf78WSPFMcFG3msSMuCEoZ7QXO%2BwJu5Hjx%2FN35q%2BQWC1wFRg3t4Ao4eRSpUQSeQaJojmg2775uQOux0lsCfBks5AlR3%2FYLoPyhKiLV2SF%2F2IC2mdMSe1IEpZ4ZEseWVWSzPWV%2Br3p2Z0v5ohYBx2sCStP2hHry9bezDuOgoLpNhBHm25CJyGDrYIBQTKJBLcMZ6Mcl75j1lNcUPkVFNyrYu7htUJHOF7EsOnEK50G9OI88tiTw1MsCNYeKfD77uXdBkaHfcJzOC90IQTzGS4GfN28sVMK8HZNVzodQclDQtcGKwluZ35c7vcMwrZy2xAY6pgEYv8CeNEJsyz%2FgtvBU7nD5ybE5ObJEPz14reosHZJOVQcJzOCrUXdw%2BbPXBYNgkCdvZxEpuQQ%2BBAlhL2cvK45Hj8qXQ2EsaI3Verw7slmaCVM49%2FokxMUYG4AOWOFdoiPMuE5s3Ctz%2BDDaDP1OT%2Fj6pJPlMnPBpsgbHXau1LE2wTj%2FS%2Bx2Xfdcjj%2FOu5EZbBLAfihX1TOTCI7w1iNnoYIKJcBBfP19&X-Amz-Signature=80f640d2b7861a9a5c8c6754e4ff52b3fb38467ffbc40e8c9ecb71eb710da7cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OCNRLCZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMmS4%2Fb%2BBih%2BGESdIWzyg5eEtbJE7hKe08fsJui%2BpUiAIhAJZpSZsHE2Zw8UJXifsZBZxj75172Tjz3k9Wq0LIvPAvKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzhl734SpQoXRaNiR0q3AMJCh3IEa9A9gI97KaaCpE7t1qBreDsKEOIiKY5RR54T9WBkCW3Oapnxxx2H7J5L1kpmNlP7JxHVIpsl3V3ULKJAXw2xI%2BFGGh59fEL6lZ4NFjOUWEYzEGpZsU5mKHtW3ayJ3cBuzu%2FKnsx4OZyCloUp61Y%2Bc8tSNm39sXJXPePDU3BwCBWrbhmVda0wkdWxdDZc9S23GNqpv%2FymnJ33Y7gaiX5Kk3W0whuVLXuuxPTRYOifyi%2FBVhls8Tgs4xg0ysueyHKKb%2FQgCKAqCNDTp0AFEdcuHZFKt15Mz11PpoXEdJSYxEopcWoo1j2zq9U0nllebi8EJeb3YxLEmLc%2FNOX5n2RxUioirJ3eWvinXGszUarqy5695X0%2FzR3bYXyWqjZ9r5NWGNTke2oFVvqVTep7FEp%2BQoOBWNQeZUhF863hQatifOXEUPvAL2tVxcfhFI17TeMpAP6ZEGjrWjIiYUSZqWTI5AHYY0kgjaByFKyMUlGCeP%2BDZ7sPQ5UpA5sVK9ggt0v8z6migAwHvD8e4C8ndLO%2FOVwz9m1XQVJx5U42JPXFR9U9t5VfwLPNzrNvtY7wk1n22k6e4o9SEmx5nVwkKOOcfFQtjEVPDox8utclknj5wATLlVt4nk83TC1nLbEBjqkAVsNPoFCGd58ogVVhEypEs8l7RszkGAmMqwSPQRJI%2F7zQbb8%2FHS5eB5%2FgqzKOgTyyGUPv2z%2Bbf7Yg9jATSJNIVP7Rte6dMSxJTwErhlv9P1uYnduuFsjGnB57QxH4BgXlhWcSUaBCfIO69ZgkG2FYfYyq%2B0NKGtZMO2FLEvMxZ9qd2YkBJDTfLjVhVq3EZE92veEDIrgYM0cBeLhHgcYNVzXWlWB&X-Amz-Signature=fdc3518dbcb15effe5f8b99d2d82ff37023537aa01c22d84e68ec97abf368edb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>
  </details>

### Adding Collision and Inertia

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IWH47O2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPbwZrrvP%2Be4ogTZts7mao%2Fl20Tll%2BhC0YescYUHTSjwIgYPNI%2BC%2BtzucUh5O7pskE8T3Q%2FllgpzYk%2FRXijZxml0YqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxPzJdrLt6szt1%2FFCrcA4FIksG6moUpjH2FiMOFvixpmeOK9UVlSCmCQ2aJgh5I3O7XtCOW7Q95ZoOL3pjdJAAIm52GQKoGqeQi3Vh9RDkvtgSVPLvKcJsDgP47%2FquxfxVJAGQ0FJluYqy7V6e%2BTKDjFfdBjzRuho0SPl8HDTNNIXn5ykVoA%2BQi56TwjM5R%2BY%2Bpfb%2FSQX%2F8TjBeymwGzLitoCdvQEce26QBJz5WRdzhWFndu5rpCEH94WQjpB1bvLSjrQvlwSDUEeAp%2BkGmZ4Mev%2FwLAoYNjQpLTcuGCQR%2B1%2BUJgk7rKT68%2FaX3an1%2FXSQxvN4YMcKp5t7vkAvUy3ttCeyuAYylY1YKbWW7%2FbLp1PS9ZZ7OL%2Fab2i%2BAw%2FO0x1L5yzeyWadVT%2FrTl0fy7I7kxJcC0ZywfS7mzPLshhZFNKRJT4jI3%2F%2F%2FKQIVBt%2FJqxldXhPTIPLex0uQUDGh6vTUGhM3AGvfkAUIbDLigVR4stH1AircdNeDGNs5LU5KDbr34FFUY6qpoFzowoW6Hm%2Fu4BMouVtWYY4HA5oDPoBV0Amuy8DzGCvtKMf2apPvDu%2BYC1wwRozQdKm7DWJv74mqAaYYk0RPJTWWr7SsX4YJJC8OT2cDgLqsd1lRweg2yBQyH2gNA3mPWTAWMLWctsQGOqUBFxvTmgrmXojGxEU1hspwzzC70q%2BiGSs0qT7bY8Jt2rQ2Gg5EySgrmBPS%2BxeCiiIOGlYeJBCjQpXwR0IsHmxuE18jwCkXnjxfdCh08qvIf1RDSgV9I3uCz%2BpC1swnALMbToLNd0JlXGgMtRucKsyV6Wl2FL4Ea%2B5%2Fe8%2FnzRyRwWxMR81wEKnT%2BSiLD99JDJomASIgPKXiU5IWIbhQDbkHLDqXJkde&X-Amz-Signature=ed538e8c91d9b60b61c57faa317f27209f0002fe8eda8dbb501c377c1f2cbeb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

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

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MWXZTM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B0X1%2Bu8ZHM3%2FQVtzpSA6pdyAMreL8SUNJzloYRTyElAIgEq8cuPQuBD2J0lX0yFtPN9c1kHhMSoPjxjYhibCLg1cqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmVyckCgJanYzxihyrcA8w%2BmGjRsqYNG%2BZ%2BrrwkBHa%2B0%2B5xDZAud%2FYvwzMPE7eDuOoivSG4dx9KeYuklHfyi8PVNbuSdjbpf%2BsD6QbwrwcE0SBOe0dYWoFpsgpuDm3aPeOrEMOxmPVhLUQBHB%2FfLs%2Bl9Gb6HqqGw9tlflTR%2Fm2SVbsGz3U6c4eaHdoLX%2Bur74xt7I2xHgA5dE1nDVdafHq8xOISxOTs8QQIUtSpF1ZdPq7Vq2vHhQQQ5hwITR%2BcjqjAqxj%2FwMOOwG7RFLKe45CxGOpWmhovg7AxfQijiQfMDKe0xJA7c69ADUCBOBTIbeOwn9gWOtF7IaDhJCs7Zo5ItfXrNQF2QWt0FZpDC7hay5qugPIn3u9q%2Bi%2Fb9dhion9e6zsc%2B3fS%2FUS7jPop50waJes%2Bcunt%2Bm7D68Zspx6SSEZqRWVcOms7QJTNcX2oBJOYtAepF5f9n3D3Q%2B3JF8zJ4gKNMCxgkMVjCm6meQW6xGU%2FppSUqF1frXy8eYEO%2Bv8soMKgexlApCdz%2FhidXsd8mFNU632TAKwcGFrRXppIjuuRCgnlctQiv7HgVAW%2FOT1fqAH3pdsaSPXYmx%2Fgewstt2fYa8D5Z1SMQAJVwDVCa%2BwaQk1JUcRKbDH0OphjpY5vPuwsRa9bMj5QMI2dtsQGOqUBwLdx6d%2FCFFED5JczGFi2lD6lWanyLxJECzCv%2Fv1a7ltzn2Gc3DPbWla9%2Bnw0KCrgElrBOP40q8%2ByyIMPLa7D%2Bf2lVLjmXFUupWM15WB%2FR6tiCSAztrVQJdq4LH8XPpbIcAxc8ld12Vr%2FbnN09K8EHLGC2%2BcdCzpGP5yHWWwxwgdbOf9SJhkOqZMrOlFPpD38hQ3YSFmN8g%2F9Qh8NhkWE3OAmGDgN&X-Amz-Signature=1ee8f314289fe07d8e873e0d3f3f3b853c06f94392c4d91829294c82a4defe36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVDAGYWB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIpZglW8oSDffKPW9AuSD1zYN4OjTTV2lFtu3f33jlDQIgfa6a2c81TVeWcK0VH%2Bhtos577Fo4KxxiM%2BlaFt419vgqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCpGiGQrmZjvmfLOyrcAwn%2FjyPSYuPcAcmBFEv7Hcgedp6NAfavilV6dU3FL4ymap%2B3gUXHvjEOqzv6HdtHMDlmUKVZBLeTDYpnD9jzQJs4gb6j7wmY2ufWcNAZ6C9uG6STaGbX9tGc%2BlRgW%2BDWc9WyrHonKdKXalllVmXqkXZTKBDTg078ZyNVyNK9gMDv%2FoYytsaruj%2FLXBk5e%2FgO5XG4gun0dT8j30Os4O24%2BmLNtE7yT7AlXjP7EvI5KD%2FWRtwyo2cXEt4D2V%2BXUsxTtiLdhScR1xzksn6Ie4dxyzK0%2Bg51bnAixV6Wc3V1MbkFMTyWhQmTlTnM8PoXoL%2Buldr87KGSW78yUdb%2FQEaqNDRgCwJnSYHCKdJbqJIFBLxePIgSTiuskcAWndZL6wp4nSCDZJ4PwS2j3%2BNbLdbY%2FtcfaLARQ46N1t4F6xEAqhNrGes1whDbMOhXpOltWTbNN%2BAePYQ98nWEum%2FvGC7Pg305UbeRf8bVPkGuCZqA4Xvzp5qEABfNJgabqW07E7zZIs2u2WWzc5kkzU2Zjl2Dt8c4Eyezqro0%2BTGNDHAcs7dO771cAMLBUDncQNwyBeyicq8a4jX6bSdgw7iTsjYMeqm2DffxxW9UCH7LbHYSdwhAEbUhPS2pQRgwXq4LMIOdtsQGOqUB6Suid%2BrfvsZ8tKntgrCcympzdHlOOzE%2FhRlioKZd5gSf0JcsCmyQPzD7XdN96vmFGI8wkFii3XgrBHEnNofuQz55crQdQbL1DACNoAL16t58YBI7vksG2rquuYeUAiotGHhiJ33cqKoZaNqdkvm1cP%2BmWI1Dcp1JobUjC1msEuepjd%2BsNAejuC00C%2Ba22bGHRReC%2BcBCyWlFCjGSujl%2BcU4%2BNlI1&X-Amz-Signature=3654c50b82ecc9848a454533df8ab3b4fe0d878ef3ea8760816dae1bac47603f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAUH6UCY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPgCyF%2B5Z3Vs8FbMdGhByf9llJ736OJYz4T%2BJzRYiIVAiBMu6iPG2q132ubnSArDCLZD6yieTVHcByk4v4z2ENSBSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdGZvojLMrLmXaV%2FmKtwDc6IlWvF7OgFE5SVccFDo%2BQhy3qfIRvdkUTQhH5O6PwZqzGRr3zQopjjH7LKnHTWaSdm0RwgGmrC17aSUU1zHRg2TFQZ0xWjSwOdNN8KhaSi%2BYZiU7stOKJs8BLBLZRbwpM1OnW8U%2F2N89s6g5lkwzkn%2FeFAg6%2BBI8kpXTcgIY70dHl8uVlZWMOia0Cx71LdmCJAmpkCWQzeZlSalnMldx7hsae1WOlygA3ObV3G3V7Xwa%2BhVFdazVkcuW0sPG8Ui4u0DNUqA2i8sQFQ4EnEDVqZPrIESZNIkZfoYsImRqxoA6CCMPJKZ4n78mq2EESNZrvwyX8rsLsNXZkH97kpiwxUfTFvSakPhTfcjwGXXxerR2iGfH%2BpELHL5%2B1zluiYH85HqVYsL%2FSJC6T6zXY6JOxufcRDH%2B9zk8fKevio4Kg5XA0fHVHUe7Ph%2F9zVJIhSfaQ8NoBnoPjfbGZiF2ZLZvpG4S4XLSq8vgXR27ykgu6SmiirKQfgbWm0yJjxPrka50xk5m%2FwvZuRTHj%2FWZMm%2B3NuZdb5GH7n0qiHn3cHyNioSZo6yJRSvRu9Cmfq9NZuvfOBRL2hPovKunjM4SSw7eWiVHI6gVOJVLV8RjlXGd%2FFwhv%2FHOX3Pqp5%2F0JowhZ22xAY6pgHV7gCm1IoBlHNbfSYUk%2BFse4DnFyBcDKTSxTp7l%2B2juJQAYhr0xAkoS7dEk%2FBEO8fD1cNfMIGE%2FDfBJr52gnExebh%2FY4yIPGE3t4Y%2Fn0DZ78Mhi9UErMH3Vy8qI4zdp21yXHdJiHlSGx7drzwW35j3io6WjspHHNzXJXSlnACe1fm4TsJf38I%2Fx%2F6vJVtUKcTGqkjzpknFHa4spJSx8fyqjgOnqvgH&X-Amz-Signature=c8e5861807af271c0ed6a88197827e5a33c1b202ba3b233c1930a553a7d96669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UAWUU5Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWqSGotyXMoMRC8wo22UghLyKGEzI8GWFRsgXSuMMwAiBwPKBeCm9aTHXp8P2b%2F7i%2FI4QqRqGxw4bmnr9qWfV9UyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2nmJX9XaoC6MOq%2FFKtwDQ%2BPp1bI9gkpm9t5SqX5BnK5Fv62837yljiepcHwq0J6IhWhJsM%2FwUriWDEVshddYS1U0JOyBsS8gEqubf2TFN1Qd8HYDZKsYyZQgikYPeYgRfsPACroE7RN%2BESiy1bVwwdIy2670xfIY5NZRLICSVXNtU4gCRiZrll4kdkeSuKm3aXpuGAo6EDoszIBYiFw7YZPaxAuwOWz8soLeDwry1AYTTvosx1qXGHjNfJiagN3Hw9zTGPDQQlueI%2BK1npFR3R4RjjrLENmoEroGaH5eL8QE9XbM0JC9sya%2Ffo2cCSbgXjzllGnEqAHPBISRORNxXcgf78WSPFMcFG3msSMuCEoZ7QXO%2BwJu5Hjx%2FN35q%2BQWC1wFRg3t4Ao4eRSpUQSeQaJojmg2775uQOux0lsCfBks5AlR3%2FYLoPyhKiLV2SF%2F2IC2mdMSe1IEpZ4ZEseWVWSzPWV%2Br3p2Z0v5ohYBx2sCStP2hHry9bezDuOgoLpNhBHm25CJyGDrYIBQTKJBLcMZ6Mcl75j1lNcUPkVFNyrYu7htUJHOF7EsOnEK50G9OI88tiTw1MsCNYeKfD77uXdBkaHfcJzOC90IQTzGS4GfN28sVMK8HZNVzodQclDQtcGKwluZ35c7vcMwrZy2xAY6pgEYv8CeNEJsyz%2FgtvBU7nD5ybE5ObJEPz14reosHZJOVQcJzOCrUXdw%2BbPXBYNgkCdvZxEpuQQ%2BBAlhL2cvK45Hj8qXQ2EsaI3Verw7slmaCVM49%2FokxMUYG4AOWOFdoiPMuE5s3Ctz%2BDDaDP1OT%2Fj6pJPlMnPBpsgbHXau1LE2wTj%2FS%2Bx2Xfdcjj%2FOu5EZbBLAfihX1TOTCI7w1iNnoYIKJcBBfP19&X-Amz-Signature=f7ede157b0ab2910134ecc4b1276e7651495bc786dc0b3b34af9c7187ce6e6b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
	- axis
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNIXB3M%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhTw9vdvBoFqTIPeLPqWOsAWyEZU7xQBpUGC8o8HMA6gIgUs2x4nDy4e8XsavOJnW6GR9zc%2BM56azchZb61djCszQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2tAFGieK%2FltdDf2yrcA8hjw0O3OCt3FItGFwvTTl1NqL406kevALqS57t2M1xEBU5S0jMvRymPzrXQ%2F6R52oVld3LTHD5BIRUa6EyTY0FVREW81NqV6r3%2FPa1oj5bBnkquS%2BQzCN8CYfqQBo8ujuoMiO%2BNNd4m1UkqJGxpTvIPNkZ9O5ttRYsaG0wpum%2B0W7C%2Bd2yvkQ%2FhsjNwtspRrEEFrl7%2BQ3c2PmRc5vH15G3wd38BM3ZD0MwKeHNEjx3XgaHzjvRYlmy5dreBaiEyo0tkqsXmdHCeKB5jeRnLIcM7VZmtDVoHw7x9NFFGTfFoN%2Bku8N4Wki5sWDVRsngy4TVX11S15k%2FXkrPjhIGzTyvgdlKI5KGx3Si59iljO9yiiXEz4WMNpgwhuvswJRuPZl25s3qExuw%2FmDumq2bm7vik%2B0nk7vkcprvdsm88ocydBK1U%2BEu%2B6ECUlJJGx56ihr1uscntlutW%2BzrEiEETVJ040jG9865QmgShXw8G45X2ASkds4qm2igKxQO1cRyE6dfPwKEO%2BwOF7YJkt38M6mcJFN8zckRogP6RhHSjzwoPW8YUfrjuciQWHu5ZhOO%2FLkjmd2qlPCBGxlFHHftEYVN6c0ziuVEiMJEqq4KZiSC3fwSRzxqYnCiCcAjzMJydtsQGOqUB3yQgpZWRNPWf%2FIDjlQ8TvTn1Bi5u991xZIdaH%2Bk9Q7ZoqIibNm4PBbZjNOk%2BWbJMz4VO3p%2FX7BjKyiBkD7899jwmLTRNogqFIrGE7eT%2B3wvxfkQbComZ4VIR1bSyotat6NMGaj0fALeANcpO5E149%2Fe%2BTTknvNRS%2Bqvl6Oq6hMRvf6mGuWtkqhfCbfmMA9q40zA6VUpS3jgPIwOj0HfSiM9rJInH&X-Amz-Signature=da9a5a1c4e9a195cae1ac8d45be09ff399138548f78836e547f11f0a7ed191c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNIXB3M%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhTw9vdvBoFqTIPeLPqWOsAWyEZU7xQBpUGC8o8HMA6gIgUs2x4nDy4e8XsavOJnW6GR9zc%2BM56azchZb61djCszQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2tAFGieK%2FltdDf2yrcA8hjw0O3OCt3FItGFwvTTl1NqL406kevALqS57t2M1xEBU5S0jMvRymPzrXQ%2F6R52oVld3LTHD5BIRUa6EyTY0FVREW81NqV6r3%2FPa1oj5bBnkquS%2BQzCN8CYfqQBo8ujuoMiO%2BNNd4m1UkqJGxpTvIPNkZ9O5ttRYsaG0wpum%2B0W7C%2Bd2yvkQ%2FhsjNwtspRrEEFrl7%2BQ3c2PmRc5vH15G3wd38BM3ZD0MwKeHNEjx3XgaHzjvRYlmy5dreBaiEyo0tkqsXmdHCeKB5jeRnLIcM7VZmtDVoHw7x9NFFGTfFoN%2Bku8N4Wki5sWDVRsngy4TVX11S15k%2FXkrPjhIGzTyvgdlKI5KGx3Si59iljO9yiiXEz4WMNpgwhuvswJRuPZl25s3qExuw%2FmDumq2bm7vik%2B0nk7vkcprvdsm88ocydBK1U%2BEu%2B6ECUlJJGx56ihr1uscntlutW%2BzrEiEETVJ040jG9865QmgShXw8G45X2ASkds4qm2igKxQO1cRyE6dfPwKEO%2BwOF7YJkt38M6mcJFN8zckRogP6RhHSjzwoPW8YUfrjuciQWHu5ZhOO%2FLkjmd2qlPCBGxlFHHftEYVN6c0ziuVEiMJEqq4KZiSC3fwSRzxqYnCiCcAjzMJydtsQGOqUB3yQgpZWRNPWf%2FIDjlQ8TvTn1Bi5u991xZIdaH%2Bk9Q7ZoqIibNm4PBbZjNOk%2BWbJMz4VO3p%2FX7BjKyiBkD7899jwmLTRNogqFIrGE7eT%2B3wvxfkQbComZ4VIR1bSyotat6NMGaj0fALeANcpO5E149%2Fe%2BTTknvNRS%2Bqvl6Oq6hMRvf6mGuWtkqhfCbfmMA9q40zA6VUpS3jgPIwOj0HfSiM9rJInH&X-Amz-Signature=908cb6faf0ea19e341b8586853c8dcfbfc21e001530055a1301f607235071233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNIXB3M%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhTw9vdvBoFqTIPeLPqWOsAWyEZU7xQBpUGC8o8HMA6gIgUs2x4nDy4e8XsavOJnW6GR9zc%2BM56azchZb61djCszQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2tAFGieK%2FltdDf2yrcA8hjw0O3OCt3FItGFwvTTl1NqL406kevALqS57t2M1xEBU5S0jMvRymPzrXQ%2F6R52oVld3LTHD5BIRUa6EyTY0FVREW81NqV6r3%2FPa1oj5bBnkquS%2BQzCN8CYfqQBo8ujuoMiO%2BNNd4m1UkqJGxpTvIPNkZ9O5ttRYsaG0wpum%2B0W7C%2Bd2yvkQ%2FhsjNwtspRrEEFrl7%2BQ3c2PmRc5vH15G3wd38BM3ZD0MwKeHNEjx3XgaHzjvRYlmy5dreBaiEyo0tkqsXmdHCeKB5jeRnLIcM7VZmtDVoHw7x9NFFGTfFoN%2Bku8N4Wki5sWDVRsngy4TVX11S15k%2FXkrPjhIGzTyvgdlKI5KGx3Si59iljO9yiiXEz4WMNpgwhuvswJRuPZl25s3qExuw%2FmDumq2bm7vik%2B0nk7vkcprvdsm88ocydBK1U%2BEu%2B6ECUlJJGx56ihr1uscntlutW%2BzrEiEETVJ040jG9865QmgShXw8G45X2ASkds4qm2igKxQO1cRyE6dfPwKEO%2BwOF7YJkt38M6mcJFN8zckRogP6RhHSjzwoPW8YUfrjuciQWHu5ZhOO%2FLkjmd2qlPCBGxlFHHftEYVN6c0ziuVEiMJEqq4KZiSC3fwSRzxqYnCiCcAjzMJydtsQGOqUB3yQgpZWRNPWf%2FIDjlQ8TvTn1Bi5u991xZIdaH%2Bk9Q7ZoqIibNm4PBbZjNOk%2BWbJMz4VO3p%2FX7BjKyiBkD7899jwmLTRNogqFIrGE7eT%2B3wvxfkQbComZ4VIR1bSyotat6NMGaj0fALeANcpO5E149%2Fe%2BTTknvNRS%2Bqvl6Oq6hMRvf6mGuWtkqhfCbfmMA9q40zA6VUpS3jgPIwOj0HfSiM9rJInH&X-Amz-Signature=4485463ebdaa94396c0666de848577fe0b30f6afb208f38104cdc703966a44ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNIXB3M%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhTw9vdvBoFqTIPeLPqWOsAWyEZU7xQBpUGC8o8HMA6gIgUs2x4nDy4e8XsavOJnW6GR9zc%2BM56azchZb61djCszQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2tAFGieK%2FltdDf2yrcA8hjw0O3OCt3FItGFwvTTl1NqL406kevALqS57t2M1xEBU5S0jMvRymPzrXQ%2F6R52oVld3LTHD5BIRUa6EyTY0FVREW81NqV6r3%2FPa1oj5bBnkquS%2BQzCN8CYfqQBo8ujuoMiO%2BNNd4m1UkqJGxpTvIPNkZ9O5ttRYsaG0wpum%2B0W7C%2Bd2yvkQ%2FhsjNwtspRrEEFrl7%2BQ3c2PmRc5vH15G3wd38BM3ZD0MwKeHNEjx3XgaHzjvRYlmy5dreBaiEyo0tkqsXmdHCeKB5jeRnLIcM7VZmtDVoHw7x9NFFGTfFoN%2Bku8N4Wki5sWDVRsngy4TVX11S15k%2FXkrPjhIGzTyvgdlKI5KGx3Si59iljO9yiiXEz4WMNpgwhuvswJRuPZl25s3qExuw%2FmDumq2bm7vik%2B0nk7vkcprvdsm88ocydBK1U%2BEu%2B6ECUlJJGx56ihr1uscntlutW%2BzrEiEETVJ040jG9865QmgShXw8G45X2ASkds4qm2igKxQO1cRyE6dfPwKEO%2BwOF7YJkt38M6mcJFN8zckRogP6RhHSjzwoPW8YUfrjuciQWHu5ZhOO%2FLkjmd2qlPCBGxlFHHftEYVN6c0ziuVEiMJEqq4KZiSC3fwSRzxqYnCiCcAjzMJydtsQGOqUB3yQgpZWRNPWf%2FIDjlQ8TvTn1Bi5u991xZIdaH%2Bk9Q7ZoqIibNm4PBbZjNOk%2BWbJMz4VO3p%2FX7BjKyiBkD7899jwmLTRNogqFIrGE7eT%2B3wvxfkQbComZ4VIR1bSyotat6NMGaj0fALeANcpO5E149%2Fe%2BTTknvNRS%2Bqvl6Oq6hMRvf6mGuWtkqhfCbfmMA9q40zA6VUpS3jgPIwOj0HfSiM9rJInH&X-Amz-Signature=f61c99af11270b416dd616b3d892ab4cf1bb9354721a91eab65044a24c18c4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNIXB3M%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhTw9vdvBoFqTIPeLPqWOsAWyEZU7xQBpUGC8o8HMA6gIgUs2x4nDy4e8XsavOJnW6GR9zc%2BM56azchZb61djCszQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2tAFGieK%2FltdDf2yrcA8hjw0O3OCt3FItGFwvTTl1NqL406kevALqS57t2M1xEBU5S0jMvRymPzrXQ%2F6R52oVld3LTHD5BIRUa6EyTY0FVREW81NqV6r3%2FPa1oj5bBnkquS%2BQzCN8CYfqQBo8ujuoMiO%2BNNd4m1UkqJGxpTvIPNkZ9O5ttRYsaG0wpum%2B0W7C%2Bd2yvkQ%2FhsjNwtspRrEEFrl7%2BQ3c2PmRc5vH15G3wd38BM3ZD0MwKeHNEjx3XgaHzjvRYlmy5dreBaiEyo0tkqsXmdHCeKB5jeRnLIcM7VZmtDVoHw7x9NFFGTfFoN%2Bku8N4Wki5sWDVRsngy4TVX11S15k%2FXkrPjhIGzTyvgdlKI5KGx3Si59iljO9yiiXEz4WMNpgwhuvswJRuPZl25s3qExuw%2FmDumq2bm7vik%2B0nk7vkcprvdsm88ocydBK1U%2BEu%2B6ECUlJJGx56ihr1uscntlutW%2BzrEiEETVJ040jG9865QmgShXw8G45X2ASkds4qm2igKxQO1cRyE6dfPwKEO%2BwOF7YJkt38M6mcJFN8zckRogP6RhHSjzwoPW8YUfrjuciQWHu5ZhOO%2FLkjmd2qlPCBGxlFHHftEYVN6c0ziuVEiMJEqq4KZiSC3fwSRzxqYnCiCcAjzMJydtsQGOqUB3yQgpZWRNPWf%2FIDjlQ8TvTn1Bi5u991xZIdaH%2Bk9Q7ZoqIibNm4PBbZjNOk%2BWbJMz4VO3p%2FX7BjKyiBkD7899jwmLTRNogqFIrGE7eT%2B3wvxfkQbComZ4VIR1bSyotat6NMGaj0fALeANcpO5E149%2Fe%2BTTknvNRS%2Bqvl6Oq6hMRvf6mGuWtkqhfCbfmMA9q40zA6VUpS3jgPIwOj0HfSiM9rJInH&X-Amz-Signature=88f7e2224c9d3357275848dba20070ebfe618f2b1cfa9acf9b8d5450b5fd9cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNIXB3M%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhTw9vdvBoFqTIPeLPqWOsAWyEZU7xQBpUGC8o8HMA6gIgUs2x4nDy4e8XsavOJnW6GR9zc%2BM56azchZb61djCszQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2tAFGieK%2FltdDf2yrcA8hjw0O3OCt3FItGFwvTTl1NqL406kevALqS57t2M1xEBU5S0jMvRymPzrXQ%2F6R52oVld3LTHD5BIRUa6EyTY0FVREW81NqV6r3%2FPa1oj5bBnkquS%2BQzCN8CYfqQBo8ujuoMiO%2BNNd4m1UkqJGxpTvIPNkZ9O5ttRYsaG0wpum%2B0W7C%2Bd2yvkQ%2FhsjNwtspRrEEFrl7%2BQ3c2PmRc5vH15G3wd38BM3ZD0MwKeHNEjx3XgaHzjvRYlmy5dreBaiEyo0tkqsXmdHCeKB5jeRnLIcM7VZmtDVoHw7x9NFFGTfFoN%2Bku8N4Wki5sWDVRsngy4TVX11S15k%2FXkrPjhIGzTyvgdlKI5KGx3Si59iljO9yiiXEz4WMNpgwhuvswJRuPZl25s3qExuw%2FmDumq2bm7vik%2B0nk7vkcprvdsm88ocydBK1U%2BEu%2B6ECUlJJGx56ihr1uscntlutW%2BzrEiEETVJ040jG9865QmgShXw8G45X2ASkds4qm2igKxQO1cRyE6dfPwKEO%2BwOF7YJkt38M6mcJFN8zckRogP6RhHSjzwoPW8YUfrjuciQWHu5ZhOO%2FLkjmd2qlPCBGxlFHHftEYVN6c0ziuVEiMJEqq4KZiSC3fwSRzxqYnCiCcAjzMJydtsQGOqUB3yQgpZWRNPWf%2FIDjlQ8TvTn1Bi5u991xZIdaH%2Bk9Q7ZoqIibNm4PBbZjNOk%2BWbJMz4VO3p%2FX7BjKyiBkD7899jwmLTRNogqFIrGE7eT%2B3wvxfkQbComZ4VIR1bSyotat6NMGaj0fALeANcpO5E149%2Fe%2BTTknvNRS%2Bqvl6Oq6hMRvf6mGuWtkqhfCbfmMA9q40zA6VUpS3jgPIwOj0HfSiM9rJInH&X-Amz-Signature=1e16b2fcceea8dae9f543012eedb642dfc462895f14a97e452eee8b0e6691d98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNIXB3M%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhTw9vdvBoFqTIPeLPqWOsAWyEZU7xQBpUGC8o8HMA6gIgUs2x4nDy4e8XsavOJnW6GR9zc%2BM56azchZb61djCszQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2tAFGieK%2FltdDf2yrcA8hjw0O3OCt3FItGFwvTTl1NqL406kevALqS57t2M1xEBU5S0jMvRymPzrXQ%2F6R52oVld3LTHD5BIRUa6EyTY0FVREW81NqV6r3%2FPa1oj5bBnkquS%2BQzCN8CYfqQBo8ujuoMiO%2BNNd4m1UkqJGxpTvIPNkZ9O5ttRYsaG0wpum%2B0W7C%2Bd2yvkQ%2FhsjNwtspRrEEFrl7%2BQ3c2PmRc5vH15G3wd38BM3ZD0MwKeHNEjx3XgaHzjvRYlmy5dreBaiEyo0tkqsXmdHCeKB5jeRnLIcM7VZmtDVoHw7x9NFFGTfFoN%2Bku8N4Wki5sWDVRsngy4TVX11S15k%2FXkrPjhIGzTyvgdlKI5KGx3Si59iljO9yiiXEz4WMNpgwhuvswJRuPZl25s3qExuw%2FmDumq2bm7vik%2B0nk7vkcprvdsm88ocydBK1U%2BEu%2B6ECUlJJGx56ihr1uscntlutW%2BzrEiEETVJ040jG9865QmgShXw8G45X2ASkds4qm2igKxQO1cRyE6dfPwKEO%2BwOF7YJkt38M6mcJFN8zckRogP6RhHSjzwoPW8YUfrjuciQWHu5ZhOO%2FLkjmd2qlPCBGxlFHHftEYVN6c0ziuVEiMJEqq4KZiSC3fwSRzxqYnCiCcAjzMJydtsQGOqUB3yQgpZWRNPWf%2FIDjlQ8TvTn1Bi5u991xZIdaH%2Bk9Q7ZoqIibNm4PBbZjNOk%2BWbJMz4VO3p%2FX7BjKyiBkD7899jwmLTRNogqFIrGE7eT%2B3wvxfkQbComZ4VIR1bSyotat6NMGaj0fALeANcpO5E149%2Fe%2BTTknvNRS%2Bqvl6Oq6hMRvf6mGuWtkqhfCbfmMA9q40zA6VUpS3jgPIwOj0HfSiM9rJInH&X-Amz-Signature=f8772737f5ef6293148357487b6148b696507715db0c93b01b382336254d0891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNIXB3M%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhTw9vdvBoFqTIPeLPqWOsAWyEZU7xQBpUGC8o8HMA6gIgUs2x4nDy4e8XsavOJnW6GR9zc%2BM56azchZb61djCszQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2tAFGieK%2FltdDf2yrcA8hjw0O3OCt3FItGFwvTTl1NqL406kevALqS57t2M1xEBU5S0jMvRymPzrXQ%2F6R52oVld3LTHD5BIRUa6EyTY0FVREW81NqV6r3%2FPa1oj5bBnkquS%2BQzCN8CYfqQBo8ujuoMiO%2BNNd4m1UkqJGxpTvIPNkZ9O5ttRYsaG0wpum%2B0W7C%2Bd2yvkQ%2FhsjNwtspRrEEFrl7%2BQ3c2PmRc5vH15G3wd38BM3ZD0MwKeHNEjx3XgaHzjvRYlmy5dreBaiEyo0tkqsXmdHCeKB5jeRnLIcM7VZmtDVoHw7x9NFFGTfFoN%2Bku8N4Wki5sWDVRsngy4TVX11S15k%2FXkrPjhIGzTyvgdlKI5KGx3Si59iljO9yiiXEz4WMNpgwhuvswJRuPZl25s3qExuw%2FmDumq2bm7vik%2B0nk7vkcprvdsm88ocydBK1U%2BEu%2B6ECUlJJGx56ihr1uscntlutW%2BzrEiEETVJ040jG9865QmgShXw8G45X2ASkds4qm2igKxQO1cRyE6dfPwKEO%2BwOF7YJkt38M6mcJFN8zckRogP6RhHSjzwoPW8YUfrjuciQWHu5ZhOO%2FLkjmd2qlPCBGxlFHHftEYVN6c0ziuVEiMJEqq4KZiSC3fwSRzxqYnCiCcAjzMJydtsQGOqUB3yQgpZWRNPWf%2FIDjlQ8TvTn1Bi5u991xZIdaH%2Bk9Q7ZoqIibNm4PBbZjNOk%2BWbJMz4VO3p%2FX7BjKyiBkD7899jwmLTRNogqFIrGE7eT%2B3wvxfkQbComZ4VIR1bSyotat6NMGaj0fALeANcpO5E149%2Fe%2BTTknvNRS%2Bqvl6Oq6hMRvf6mGuWtkqhfCbfmMA9q40zA6VUpS3jgPIwOj0HfSiM9rJInH&X-Amz-Signature=140aacd936038c8a8b5547191fb35489ade5b7b8b100d8e6f735c99c8dbf1de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNIXB3M%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhTw9vdvBoFqTIPeLPqWOsAWyEZU7xQBpUGC8o8HMA6gIgUs2x4nDy4e8XsavOJnW6GR9zc%2BM56azchZb61djCszQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2tAFGieK%2FltdDf2yrcA8hjw0O3OCt3FItGFwvTTl1NqL406kevALqS57t2M1xEBU5S0jMvRymPzrXQ%2F6R52oVld3LTHD5BIRUa6EyTY0FVREW81NqV6r3%2FPa1oj5bBnkquS%2BQzCN8CYfqQBo8ujuoMiO%2BNNd4m1UkqJGxpTvIPNkZ9O5ttRYsaG0wpum%2B0W7C%2Bd2yvkQ%2FhsjNwtspRrEEFrl7%2BQ3c2PmRc5vH15G3wd38BM3ZD0MwKeHNEjx3XgaHzjvRYlmy5dreBaiEyo0tkqsXmdHCeKB5jeRnLIcM7VZmtDVoHw7x9NFFGTfFoN%2Bku8N4Wki5sWDVRsngy4TVX11S15k%2FXkrPjhIGzTyvgdlKI5KGx3Si59iljO9yiiXEz4WMNpgwhuvswJRuPZl25s3qExuw%2FmDumq2bm7vik%2B0nk7vkcprvdsm88ocydBK1U%2BEu%2B6ECUlJJGx56ihr1uscntlutW%2BzrEiEETVJ040jG9865QmgShXw8G45X2ASkds4qm2igKxQO1cRyE6dfPwKEO%2BwOF7YJkt38M6mcJFN8zckRogP6RhHSjzwoPW8YUfrjuciQWHu5ZhOO%2FLkjmd2qlPCBGxlFHHftEYVN6c0ziuVEiMJEqq4KZiSC3fwSRzxqYnCiCcAjzMJydtsQGOqUB3yQgpZWRNPWf%2FIDjlQ8TvTn1Bi5u991xZIdaH%2Bk9Q7ZoqIibNm4PBbZjNOk%2BWbJMz4VO3p%2FX7BjKyiBkD7899jwmLTRNogqFIrGE7eT%2B3wvxfkQbComZ4VIR1bSyotat6NMGaj0fALeANcpO5E149%2Fe%2BTTknvNRS%2Bqvl6Oq6hMRvf6mGuWtkqhfCbfmMA9q40zA6VUpS3jgPIwOj0HfSiM9rJInH&X-Amz-Signature=90b10ca8dd0e7dd6434a1ac79d8037933e78b386c57c3261d0f43ad4a8b553f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNIXB3M%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhTw9vdvBoFqTIPeLPqWOsAWyEZU7xQBpUGC8o8HMA6gIgUs2x4nDy4e8XsavOJnW6GR9zc%2BM56azchZb61djCszQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2tAFGieK%2FltdDf2yrcA8hjw0O3OCt3FItGFwvTTl1NqL406kevALqS57t2M1xEBU5S0jMvRymPzrXQ%2F6R52oVld3LTHD5BIRUa6EyTY0FVREW81NqV6r3%2FPa1oj5bBnkquS%2BQzCN8CYfqQBo8ujuoMiO%2BNNd4m1UkqJGxpTvIPNkZ9O5ttRYsaG0wpum%2B0W7C%2Bd2yvkQ%2FhsjNwtspRrEEFrl7%2BQ3c2PmRc5vH15G3wd38BM3ZD0MwKeHNEjx3XgaHzjvRYlmy5dreBaiEyo0tkqsXmdHCeKB5jeRnLIcM7VZmtDVoHw7x9NFFGTfFoN%2Bku8N4Wki5sWDVRsngy4TVX11S15k%2FXkrPjhIGzTyvgdlKI5KGx3Si59iljO9yiiXEz4WMNpgwhuvswJRuPZl25s3qExuw%2FmDumq2bm7vik%2B0nk7vkcprvdsm88ocydBK1U%2BEu%2B6ECUlJJGx56ihr1uscntlutW%2BzrEiEETVJ040jG9865QmgShXw8G45X2ASkds4qm2igKxQO1cRyE6dfPwKEO%2BwOF7YJkt38M6mcJFN8zckRogP6RhHSjzwoPW8YUfrjuciQWHu5ZhOO%2FLkjmd2qlPCBGxlFHHftEYVN6c0ziuVEiMJEqq4KZiSC3fwSRzxqYnCiCcAjzMJydtsQGOqUB3yQgpZWRNPWf%2FIDjlQ8TvTn1Bi5u991xZIdaH%2Bk9Q7ZoqIibNm4PBbZjNOk%2BWbJMz4VO3p%2FX7BjKyiBkD7899jwmLTRNogqFIrGE7eT%2B3wvxfkQbComZ4VIR1bSyotat6NMGaj0fALeANcpO5E149%2Fe%2BTTknvNRS%2Bqvl6Oq6hMRvf6mGuWtkqhfCbfmMA9q40zA6VUpS3jgPIwOj0HfSiM9rJInH&X-Amz-Signature=89baa17605edc0e89974ca518cffdabb0458b2749ff2cd92e7dce21e145a318b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
