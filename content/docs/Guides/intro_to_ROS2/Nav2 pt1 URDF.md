---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-30T07:10:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-30T07:10:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXONX7G%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlqxn2dNJ%2Fj8oD32PpMFj08PxRJi0TZxRUhlHfjMX9%2BAiA09h%2F7Ib5Q45dyy5xWHqP0hie9Fm4ccb5U3oFqIM%2FJyyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVCW4rK8AyvuqAmdKtwDBwieoBPp%2Foy4auxd9bhb%2FOxxquImDlTYQflTzWe5VXNc5s0a%2BcoO%2B%2FVu3%2F8t27G1sP0zcC5nWFDQIILpuKCUVLzVh23UIlWlu3P3Vq1HJJYu0mLKL0rwkQNKgVVmcPc0CzWweQ2ymO%2BHfhGVsKeoy9y9e0SEVn1yF8GPk9A2QVAicBDXYRibMujuuMJ3IGpgD3BOiRXBgi4Vdjuh4M1qVer5fMEHejjWTk5R8kWkoYXjjzdgSt7q%2FU0rX3Qipe0L9hbxzENkpRnUQtrwz2IXUWUkIMPB%2FFZqGBbsmKA3tbBIYk2noi8IVOV25RkGmZy1qSsNim9aL2i7%2BeV%2FTjtnm1WSzElUOXA%2BFtziUPCKQGm05WhY1OBqIJKzg3dXq0lb1GhWFc4PLYurpO6G8HZiz8Jt8N3eUAq2nX01M39hXV%2BORAzuW5DyrqHSYjSglDx0tAC%2BUCGH9AOfoXe5g1GuPLW3RLOB8K1mn8g%2BOJDR1C6qPH%2BbUoLTfGtyxgc%2BZm%2FSoCOyPYqnG3ohkxHbf9VW%2F5OqoxuwKtG8mm2G%2BcJO1AW37erV6yG9%2F2%2B7F5qZS3V6ho1CJ8sWNbHcontw57PYofQxs65wUB45DcHPK6oS9gsDWLcznIXe%2BRlw7OIwvNqmxAY6pgHMiWfTzKZxELOytk7fBHypSdoQhKM9Gu2jPVZRzmUPV2VZRxNfMnaZN%2FhgguXtBZcO886Ii%2B4J8vgqQHJt115EBjDrymd5jAnRXm4VBi6KWi%2Fr2Tj6ShqrVTWXORrhJa5rOFWK2eEAkfTlKHttepUXi5hm3xmLU9usL1CHB6kreWErKp1bNDPDXi7IhEjCFkdmumpL%2F23Q4sX7c0Fz0NrgySayTMU9&X-Amz-Signature=b838416695b5ad9fc9a6773d0ee2e3fafff096ecba8afc7888c4a381b55cbb8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXONX7G%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlqxn2dNJ%2Fj8oD32PpMFj08PxRJi0TZxRUhlHfjMX9%2BAiA09h%2F7Ib5Q45dyy5xWHqP0hie9Fm4ccb5U3oFqIM%2FJyyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVCW4rK8AyvuqAmdKtwDBwieoBPp%2Foy4auxd9bhb%2FOxxquImDlTYQflTzWe5VXNc5s0a%2BcoO%2B%2FVu3%2F8t27G1sP0zcC5nWFDQIILpuKCUVLzVh23UIlWlu3P3Vq1HJJYu0mLKL0rwkQNKgVVmcPc0CzWweQ2ymO%2BHfhGVsKeoy9y9e0SEVn1yF8GPk9A2QVAicBDXYRibMujuuMJ3IGpgD3BOiRXBgi4Vdjuh4M1qVer5fMEHejjWTk5R8kWkoYXjjzdgSt7q%2FU0rX3Qipe0L9hbxzENkpRnUQtrwz2IXUWUkIMPB%2FFZqGBbsmKA3tbBIYk2noi8IVOV25RkGmZy1qSsNim9aL2i7%2BeV%2FTjtnm1WSzElUOXA%2BFtziUPCKQGm05WhY1OBqIJKzg3dXq0lb1GhWFc4PLYurpO6G8HZiz8Jt8N3eUAq2nX01M39hXV%2BORAzuW5DyrqHSYjSglDx0tAC%2BUCGH9AOfoXe5g1GuPLW3RLOB8K1mn8g%2BOJDR1C6qPH%2BbUoLTfGtyxgc%2BZm%2FSoCOyPYqnG3ohkxHbf9VW%2F5OqoxuwKtG8mm2G%2BcJO1AW37erV6yG9%2F2%2B7F5qZS3V6ho1CJ8sWNbHcontw57PYofQxs65wUB45DcHPK6oS9gsDWLcznIXe%2BRlw7OIwvNqmxAY6pgHMiWfTzKZxELOytk7fBHypSdoQhKM9Gu2jPVZRzmUPV2VZRxNfMnaZN%2FhgguXtBZcO886Ii%2B4J8vgqQHJt115EBjDrymd5jAnRXm4VBi6KWi%2Fr2Tj6ShqrVTWXORrhJa5rOFWK2eEAkfTlKHttepUXi5hm3xmLU9usL1CHB6kreWErKp1bNDPDXi7IhEjCFkdmumpL%2F23Q4sX7c0Fz0NrgySayTMU9&X-Amz-Signature=a6938459777de652836f291cd6a115ae92718bf459fa90f2de5e8c49a8aa869d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXONX7G%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlqxn2dNJ%2Fj8oD32PpMFj08PxRJi0TZxRUhlHfjMX9%2BAiA09h%2F7Ib5Q45dyy5xWHqP0hie9Fm4ccb5U3oFqIM%2FJyyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVCW4rK8AyvuqAmdKtwDBwieoBPp%2Foy4auxd9bhb%2FOxxquImDlTYQflTzWe5VXNc5s0a%2BcoO%2B%2FVu3%2F8t27G1sP0zcC5nWFDQIILpuKCUVLzVh23UIlWlu3P3Vq1HJJYu0mLKL0rwkQNKgVVmcPc0CzWweQ2ymO%2BHfhGVsKeoy9y9e0SEVn1yF8GPk9A2QVAicBDXYRibMujuuMJ3IGpgD3BOiRXBgi4Vdjuh4M1qVer5fMEHejjWTk5R8kWkoYXjjzdgSt7q%2FU0rX3Qipe0L9hbxzENkpRnUQtrwz2IXUWUkIMPB%2FFZqGBbsmKA3tbBIYk2noi8IVOV25RkGmZy1qSsNim9aL2i7%2BeV%2FTjtnm1WSzElUOXA%2BFtziUPCKQGm05WhY1OBqIJKzg3dXq0lb1GhWFc4PLYurpO6G8HZiz8Jt8N3eUAq2nX01M39hXV%2BORAzuW5DyrqHSYjSglDx0tAC%2BUCGH9AOfoXe5g1GuPLW3RLOB8K1mn8g%2BOJDR1C6qPH%2BbUoLTfGtyxgc%2BZm%2FSoCOyPYqnG3ohkxHbf9VW%2F5OqoxuwKtG8mm2G%2BcJO1AW37erV6yG9%2F2%2B7F5qZS3V6ho1CJ8sWNbHcontw57PYofQxs65wUB45DcHPK6oS9gsDWLcznIXe%2BRlw7OIwvNqmxAY6pgHMiWfTzKZxELOytk7fBHypSdoQhKM9Gu2jPVZRzmUPV2VZRxNfMnaZN%2FhgguXtBZcO886Ii%2B4J8vgqQHJt115EBjDrymd5jAnRXm4VBi6KWi%2Fr2Tj6ShqrVTWXORrhJa5rOFWK2eEAkfTlKHttepUXi5hm3xmLU9usL1CHB6kreWErKp1bNDPDXi7IhEjCFkdmumpL%2F23Q4sX7c0Fz0NrgySayTMU9&X-Amz-Signature=5936212e9468344d57559cd60a3eb2b82fddc04d191ca8906c17ca7a6b51d09d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXONX7G%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlqxn2dNJ%2Fj8oD32PpMFj08PxRJi0TZxRUhlHfjMX9%2BAiA09h%2F7Ib5Q45dyy5xWHqP0hie9Fm4ccb5U3oFqIM%2FJyyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVCW4rK8AyvuqAmdKtwDBwieoBPp%2Foy4auxd9bhb%2FOxxquImDlTYQflTzWe5VXNc5s0a%2BcoO%2B%2FVu3%2F8t27G1sP0zcC5nWFDQIILpuKCUVLzVh23UIlWlu3P3Vq1HJJYu0mLKL0rwkQNKgVVmcPc0CzWweQ2ymO%2BHfhGVsKeoy9y9e0SEVn1yF8GPk9A2QVAicBDXYRibMujuuMJ3IGpgD3BOiRXBgi4Vdjuh4M1qVer5fMEHejjWTk5R8kWkoYXjjzdgSt7q%2FU0rX3Qipe0L9hbxzENkpRnUQtrwz2IXUWUkIMPB%2FFZqGBbsmKA3tbBIYk2noi8IVOV25RkGmZy1qSsNim9aL2i7%2BeV%2FTjtnm1WSzElUOXA%2BFtziUPCKQGm05WhY1OBqIJKzg3dXq0lb1GhWFc4PLYurpO6G8HZiz8Jt8N3eUAq2nX01M39hXV%2BORAzuW5DyrqHSYjSglDx0tAC%2BUCGH9AOfoXe5g1GuPLW3RLOB8K1mn8g%2BOJDR1C6qPH%2BbUoLTfGtyxgc%2BZm%2FSoCOyPYqnG3ohkxHbf9VW%2F5OqoxuwKtG8mm2G%2BcJO1AW37erV6yG9%2F2%2B7F5qZS3V6ho1CJ8sWNbHcontw57PYofQxs65wUB45DcHPK6oS9gsDWLcznIXe%2BRlw7OIwvNqmxAY6pgHMiWfTzKZxELOytk7fBHypSdoQhKM9Gu2jPVZRzmUPV2VZRxNfMnaZN%2FhgguXtBZcO886Ii%2B4J8vgqQHJt115EBjDrymd5jAnRXm4VBi6KWi%2Fr2Tj6ShqrVTWXORrhJa5rOFWK2eEAkfTlKHttepUXi5hm3xmLU9usL1CHB6kreWErKp1bNDPDXi7IhEjCFkdmumpL%2F23Q4sX7c0Fz0NrgySayTMU9&X-Amz-Signature=36e2266b1c992349516351e7227e935af19f700cd8f064165eeb622c3935a6d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXONX7G%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlqxn2dNJ%2Fj8oD32PpMFj08PxRJi0TZxRUhlHfjMX9%2BAiA09h%2F7Ib5Q45dyy5xWHqP0hie9Fm4ccb5U3oFqIM%2FJyyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVCW4rK8AyvuqAmdKtwDBwieoBPp%2Foy4auxd9bhb%2FOxxquImDlTYQflTzWe5VXNc5s0a%2BcoO%2B%2FVu3%2F8t27G1sP0zcC5nWFDQIILpuKCUVLzVh23UIlWlu3P3Vq1HJJYu0mLKL0rwkQNKgVVmcPc0CzWweQ2ymO%2BHfhGVsKeoy9y9e0SEVn1yF8GPk9A2QVAicBDXYRibMujuuMJ3IGpgD3BOiRXBgi4Vdjuh4M1qVer5fMEHejjWTk5R8kWkoYXjjzdgSt7q%2FU0rX3Qipe0L9hbxzENkpRnUQtrwz2IXUWUkIMPB%2FFZqGBbsmKA3tbBIYk2noi8IVOV25RkGmZy1qSsNim9aL2i7%2BeV%2FTjtnm1WSzElUOXA%2BFtziUPCKQGm05WhY1OBqIJKzg3dXq0lb1GhWFc4PLYurpO6G8HZiz8Jt8N3eUAq2nX01M39hXV%2BORAzuW5DyrqHSYjSglDx0tAC%2BUCGH9AOfoXe5g1GuPLW3RLOB8K1mn8g%2BOJDR1C6qPH%2BbUoLTfGtyxgc%2BZm%2FSoCOyPYqnG3ohkxHbf9VW%2F5OqoxuwKtG8mm2G%2BcJO1AW37erV6yG9%2F2%2B7F5qZS3V6ho1CJ8sWNbHcontw57PYofQxs65wUB45DcHPK6oS9gsDWLcznIXe%2BRlw7OIwvNqmxAY6pgHMiWfTzKZxELOytk7fBHypSdoQhKM9Gu2jPVZRzmUPV2VZRxNfMnaZN%2FhgguXtBZcO886Ii%2B4J8vgqQHJt115EBjDrymd5jAnRXm4VBi6KWi%2Fr2Tj6ShqrVTWXORrhJa5rOFWK2eEAkfTlKHttepUXi5hm3xmLU9usL1CHB6kreWErKp1bNDPDXi7IhEjCFkdmumpL%2F23Q4sX7c0Fz0NrgySayTMU9&X-Amz-Signature=8f2028db68cd8ed1cdfc066d6e35fcacfecd5555d45ecd5d96363cd0f4b42065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXONX7G%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlqxn2dNJ%2Fj8oD32PpMFj08PxRJi0TZxRUhlHfjMX9%2BAiA09h%2F7Ib5Q45dyy5xWHqP0hie9Fm4ccb5U3oFqIM%2FJyyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVCW4rK8AyvuqAmdKtwDBwieoBPp%2Foy4auxd9bhb%2FOxxquImDlTYQflTzWe5VXNc5s0a%2BcoO%2B%2FVu3%2F8t27G1sP0zcC5nWFDQIILpuKCUVLzVh23UIlWlu3P3Vq1HJJYu0mLKL0rwkQNKgVVmcPc0CzWweQ2ymO%2BHfhGVsKeoy9y9e0SEVn1yF8GPk9A2QVAicBDXYRibMujuuMJ3IGpgD3BOiRXBgi4Vdjuh4M1qVer5fMEHejjWTk5R8kWkoYXjjzdgSt7q%2FU0rX3Qipe0L9hbxzENkpRnUQtrwz2IXUWUkIMPB%2FFZqGBbsmKA3tbBIYk2noi8IVOV25RkGmZy1qSsNim9aL2i7%2BeV%2FTjtnm1WSzElUOXA%2BFtziUPCKQGm05WhY1OBqIJKzg3dXq0lb1GhWFc4PLYurpO6G8HZiz8Jt8N3eUAq2nX01M39hXV%2BORAzuW5DyrqHSYjSglDx0tAC%2BUCGH9AOfoXe5g1GuPLW3RLOB8K1mn8g%2BOJDR1C6qPH%2BbUoLTfGtyxgc%2BZm%2FSoCOyPYqnG3ohkxHbf9VW%2F5OqoxuwKtG8mm2G%2BcJO1AW37erV6yG9%2F2%2B7F5qZS3V6ho1CJ8sWNbHcontw57PYofQxs65wUB45DcHPK6oS9gsDWLcznIXe%2BRlw7OIwvNqmxAY6pgHMiWfTzKZxELOytk7fBHypSdoQhKM9Gu2jPVZRzmUPV2VZRxNfMnaZN%2FhgguXtBZcO886Ii%2B4J8vgqQHJt115EBjDrymd5jAnRXm4VBi6KWi%2Fr2Tj6ShqrVTWXORrhJa5rOFWK2eEAkfTlKHttepUXi5hm3xmLU9usL1CHB6kreWErKp1bNDPDXi7IhEjCFkdmumpL%2F23Q4sX7c0Fz0NrgySayTMU9&X-Amz-Signature=29ed3c1859f0fc603c602e0eab1a26af3d6d5f2b81db1c7aab140b9ca2468a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXONX7G%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlqxn2dNJ%2Fj8oD32PpMFj08PxRJi0TZxRUhlHfjMX9%2BAiA09h%2F7Ib5Q45dyy5xWHqP0hie9Fm4ccb5U3oFqIM%2FJyyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVCW4rK8AyvuqAmdKtwDBwieoBPp%2Foy4auxd9bhb%2FOxxquImDlTYQflTzWe5VXNc5s0a%2BcoO%2B%2FVu3%2F8t27G1sP0zcC5nWFDQIILpuKCUVLzVh23UIlWlu3P3Vq1HJJYu0mLKL0rwkQNKgVVmcPc0CzWweQ2ymO%2BHfhGVsKeoy9y9e0SEVn1yF8GPk9A2QVAicBDXYRibMujuuMJ3IGpgD3BOiRXBgi4Vdjuh4M1qVer5fMEHejjWTk5R8kWkoYXjjzdgSt7q%2FU0rX3Qipe0L9hbxzENkpRnUQtrwz2IXUWUkIMPB%2FFZqGBbsmKA3tbBIYk2noi8IVOV25RkGmZy1qSsNim9aL2i7%2BeV%2FTjtnm1WSzElUOXA%2BFtziUPCKQGm05WhY1OBqIJKzg3dXq0lb1GhWFc4PLYurpO6G8HZiz8Jt8N3eUAq2nX01M39hXV%2BORAzuW5DyrqHSYjSglDx0tAC%2BUCGH9AOfoXe5g1GuPLW3RLOB8K1mn8g%2BOJDR1C6qPH%2BbUoLTfGtyxgc%2BZm%2FSoCOyPYqnG3ohkxHbf9VW%2F5OqoxuwKtG8mm2G%2BcJO1AW37erV6yG9%2F2%2B7F5qZS3V6ho1CJ8sWNbHcontw57PYofQxs65wUB45DcHPK6oS9gsDWLcznIXe%2BRlw7OIwvNqmxAY6pgHMiWfTzKZxELOytk7fBHypSdoQhKM9Gu2jPVZRzmUPV2VZRxNfMnaZN%2FhgguXtBZcO886Ii%2B4J8vgqQHJt115EBjDrymd5jAnRXm4VBi6KWi%2Fr2Tj6ShqrVTWXORrhJa5rOFWK2eEAkfTlKHttepUXi5hm3xmLU9usL1CHB6kreWErKp1bNDPDXi7IhEjCFkdmumpL%2F23Q4sX7c0Fz0NrgySayTMU9&X-Amz-Signature=e02b7e40312ccdda2dd5fc82e3f024393e91c35c5e92ac87262de2e1daef9b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXONX7G%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlqxn2dNJ%2Fj8oD32PpMFj08PxRJi0TZxRUhlHfjMX9%2BAiA09h%2F7Ib5Q45dyy5xWHqP0hie9Fm4ccb5U3oFqIM%2FJyyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVCW4rK8AyvuqAmdKtwDBwieoBPp%2Foy4auxd9bhb%2FOxxquImDlTYQflTzWe5VXNc5s0a%2BcoO%2B%2FVu3%2F8t27G1sP0zcC5nWFDQIILpuKCUVLzVh23UIlWlu3P3Vq1HJJYu0mLKL0rwkQNKgVVmcPc0CzWweQ2ymO%2BHfhGVsKeoy9y9e0SEVn1yF8GPk9A2QVAicBDXYRibMujuuMJ3IGpgD3BOiRXBgi4Vdjuh4M1qVer5fMEHejjWTk5R8kWkoYXjjzdgSt7q%2FU0rX3Qipe0L9hbxzENkpRnUQtrwz2IXUWUkIMPB%2FFZqGBbsmKA3tbBIYk2noi8IVOV25RkGmZy1qSsNim9aL2i7%2BeV%2FTjtnm1WSzElUOXA%2BFtziUPCKQGm05WhY1OBqIJKzg3dXq0lb1GhWFc4PLYurpO6G8HZiz8Jt8N3eUAq2nX01M39hXV%2BORAzuW5DyrqHSYjSglDx0tAC%2BUCGH9AOfoXe5g1GuPLW3RLOB8K1mn8g%2BOJDR1C6qPH%2BbUoLTfGtyxgc%2BZm%2FSoCOyPYqnG3ohkxHbf9VW%2F5OqoxuwKtG8mm2G%2BcJO1AW37erV6yG9%2F2%2B7F5qZS3V6ho1CJ8sWNbHcontw57PYofQxs65wUB45DcHPK6oS9gsDWLcznIXe%2BRlw7OIwvNqmxAY6pgHMiWfTzKZxELOytk7fBHypSdoQhKM9Gu2jPVZRzmUPV2VZRxNfMnaZN%2FhgguXtBZcO886Ii%2B4J8vgqQHJt115EBjDrymd5jAnRXm4VBi6KWi%2Fr2Tj6ShqrVTWXORrhJa5rOFWK2eEAkfTlKHttepUXi5hm3xmLU9usL1CHB6kreWErKp1bNDPDXi7IhEjCFkdmumpL%2F23Q4sX7c0Fz0NrgySayTMU9&X-Amz-Signature=6ba5af2683cbd7b18e64cdcc5b8e43bbb30a06cc4d39425a2537b0ea4777788c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXONX7G%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlqxn2dNJ%2Fj8oD32PpMFj08PxRJi0TZxRUhlHfjMX9%2BAiA09h%2F7Ib5Q45dyy5xWHqP0hie9Fm4ccb5U3oFqIM%2FJyyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVCW4rK8AyvuqAmdKtwDBwieoBPp%2Foy4auxd9bhb%2FOxxquImDlTYQflTzWe5VXNc5s0a%2BcoO%2B%2FVu3%2F8t27G1sP0zcC5nWFDQIILpuKCUVLzVh23UIlWlu3P3Vq1HJJYu0mLKL0rwkQNKgVVmcPc0CzWweQ2ymO%2BHfhGVsKeoy9y9e0SEVn1yF8GPk9A2QVAicBDXYRibMujuuMJ3IGpgD3BOiRXBgi4Vdjuh4M1qVer5fMEHejjWTk5R8kWkoYXjjzdgSt7q%2FU0rX3Qipe0L9hbxzENkpRnUQtrwz2IXUWUkIMPB%2FFZqGBbsmKA3tbBIYk2noi8IVOV25RkGmZy1qSsNim9aL2i7%2BeV%2FTjtnm1WSzElUOXA%2BFtziUPCKQGm05WhY1OBqIJKzg3dXq0lb1GhWFc4PLYurpO6G8HZiz8Jt8N3eUAq2nX01M39hXV%2BORAzuW5DyrqHSYjSglDx0tAC%2BUCGH9AOfoXe5g1GuPLW3RLOB8K1mn8g%2BOJDR1C6qPH%2BbUoLTfGtyxgc%2BZm%2FSoCOyPYqnG3ohkxHbf9VW%2F5OqoxuwKtG8mm2G%2BcJO1AW37erV6yG9%2F2%2B7F5qZS3V6ho1CJ8sWNbHcontw57PYofQxs65wUB45DcHPK6oS9gsDWLcznIXe%2BRlw7OIwvNqmxAY6pgHMiWfTzKZxELOytk7fBHypSdoQhKM9Gu2jPVZRzmUPV2VZRxNfMnaZN%2FhgguXtBZcO886Ii%2B4J8vgqQHJt115EBjDrymd5jAnRXm4VBi6KWi%2Fr2Tj6ShqrVTWXORrhJa5rOFWK2eEAkfTlKHttepUXi5hm3xmLU9usL1CHB6kreWErKp1bNDPDXi7IhEjCFkdmumpL%2F23Q4sX7c0Fz0NrgySayTMU9&X-Amz-Signature=e74efb7995cdf5eac5ba13ec181e2566e8492318ae09cfe6ca433b7ffca52841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXONX7G%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlqxn2dNJ%2Fj8oD32PpMFj08PxRJi0TZxRUhlHfjMX9%2BAiA09h%2F7Ib5Q45dyy5xWHqP0hie9Fm4ccb5U3oFqIM%2FJyyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVCW4rK8AyvuqAmdKtwDBwieoBPp%2Foy4auxd9bhb%2FOxxquImDlTYQflTzWe5VXNc5s0a%2BcoO%2B%2FVu3%2F8t27G1sP0zcC5nWFDQIILpuKCUVLzVh23UIlWlu3P3Vq1HJJYu0mLKL0rwkQNKgVVmcPc0CzWweQ2ymO%2BHfhGVsKeoy9y9e0SEVn1yF8GPk9A2QVAicBDXYRibMujuuMJ3IGpgD3BOiRXBgi4Vdjuh4M1qVer5fMEHejjWTk5R8kWkoYXjjzdgSt7q%2FU0rX3Qipe0L9hbxzENkpRnUQtrwz2IXUWUkIMPB%2FFZqGBbsmKA3tbBIYk2noi8IVOV25RkGmZy1qSsNim9aL2i7%2BeV%2FTjtnm1WSzElUOXA%2BFtziUPCKQGm05WhY1OBqIJKzg3dXq0lb1GhWFc4PLYurpO6G8HZiz8Jt8N3eUAq2nX01M39hXV%2BORAzuW5DyrqHSYjSglDx0tAC%2BUCGH9AOfoXe5g1GuPLW3RLOB8K1mn8g%2BOJDR1C6qPH%2BbUoLTfGtyxgc%2BZm%2FSoCOyPYqnG3ohkxHbf9VW%2F5OqoxuwKtG8mm2G%2BcJO1AW37erV6yG9%2F2%2B7F5qZS3V6ho1CJ8sWNbHcontw57PYofQxs65wUB45DcHPK6oS9gsDWLcznIXe%2BRlw7OIwvNqmxAY6pgHMiWfTzKZxELOytk7fBHypSdoQhKM9Gu2jPVZRzmUPV2VZRxNfMnaZN%2FhgguXtBZcO886Ii%2B4J8vgqQHJt115EBjDrymd5jAnRXm4VBi6KWi%2Fr2Tj6ShqrVTWXORrhJa5rOFWK2eEAkfTlKHttepUXi5hm3xmLU9usL1CHB6kreWErKp1bNDPDXi7IhEjCFkdmumpL%2F23Q4sX7c0Fz0NrgySayTMU9&X-Amz-Signature=1dd8bb0e6dca855962449917b1794e36c337a99ef2854c480447f2faeac98ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
- link:
	- visual
		- geometry
		- material
	- collision
		- origin
		- geometry
		- friction
	- inertial
- joint:
	- parent
	- child
	- origin

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXONX7G%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlqxn2dNJ%2Fj8oD32PpMFj08PxRJi0TZxRUhlHfjMX9%2BAiA09h%2F7Ib5Q45dyy5xWHqP0hie9Fm4ccb5U3oFqIM%2FJyyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVCW4rK8AyvuqAmdKtwDBwieoBPp%2Foy4auxd9bhb%2FOxxquImDlTYQflTzWe5VXNc5s0a%2BcoO%2B%2FVu3%2F8t27G1sP0zcC5nWFDQIILpuKCUVLzVh23UIlWlu3P3Vq1HJJYu0mLKL0rwkQNKgVVmcPc0CzWweQ2ymO%2BHfhGVsKeoy9y9e0SEVn1yF8GPk9A2QVAicBDXYRibMujuuMJ3IGpgD3BOiRXBgi4Vdjuh4M1qVer5fMEHejjWTk5R8kWkoYXjjzdgSt7q%2FU0rX3Qipe0L9hbxzENkpRnUQtrwz2IXUWUkIMPB%2FFZqGBbsmKA3tbBIYk2noi8IVOV25RkGmZy1qSsNim9aL2i7%2BeV%2FTjtnm1WSzElUOXA%2BFtziUPCKQGm05WhY1OBqIJKzg3dXq0lb1GhWFc4PLYurpO6G8HZiz8Jt8N3eUAq2nX01M39hXV%2BORAzuW5DyrqHSYjSglDx0tAC%2BUCGH9AOfoXe5g1GuPLW3RLOB8K1mn8g%2BOJDR1C6qPH%2BbUoLTfGtyxgc%2BZm%2FSoCOyPYqnG3ohkxHbf9VW%2F5OqoxuwKtG8mm2G%2BcJO1AW37erV6yG9%2F2%2B7F5qZS3V6ho1CJ8sWNbHcontw57PYofQxs65wUB45DcHPK6oS9gsDWLcznIXe%2BRlw7OIwvNqmxAY6pgHMiWfTzKZxELOytk7fBHypSdoQhKM9Gu2jPVZRzmUPV2VZRxNfMnaZN%2FhgguXtBZcO886Ii%2B4J8vgqQHJt115EBjDrymd5jAnRXm4VBi6KWi%2Fr2Tj6ShqrVTWXORrhJa5rOFWK2eEAkfTlKHttepUXi5hm3xmLU9usL1CHB6kreWErKp1bNDPDXi7IhEjCFkdmumpL%2F23Q4sX7c0Fz0NrgySayTMU9&X-Amz-Signature=cf5717b4bf2bc4654022b2ee7ea1b07429c9ae0053a9f01d9aa84d8ff6a92d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXONX7G%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlqxn2dNJ%2Fj8oD32PpMFj08PxRJi0TZxRUhlHfjMX9%2BAiA09h%2F7Ib5Q45dyy5xWHqP0hie9Fm4ccb5U3oFqIM%2FJyyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVCW4rK8AyvuqAmdKtwDBwieoBPp%2Foy4auxd9bhb%2FOxxquImDlTYQflTzWe5VXNc5s0a%2BcoO%2B%2FVu3%2F8t27G1sP0zcC5nWFDQIILpuKCUVLzVh23UIlWlu3P3Vq1HJJYu0mLKL0rwkQNKgVVmcPc0CzWweQ2ymO%2BHfhGVsKeoy9y9e0SEVn1yF8GPk9A2QVAicBDXYRibMujuuMJ3IGpgD3BOiRXBgi4Vdjuh4M1qVer5fMEHejjWTk5R8kWkoYXjjzdgSt7q%2FU0rX3Qipe0L9hbxzENkpRnUQtrwz2IXUWUkIMPB%2FFZqGBbsmKA3tbBIYk2noi8IVOV25RkGmZy1qSsNim9aL2i7%2BeV%2FTjtnm1WSzElUOXA%2BFtziUPCKQGm05WhY1OBqIJKzg3dXq0lb1GhWFc4PLYurpO6G8HZiz8Jt8N3eUAq2nX01M39hXV%2BORAzuW5DyrqHSYjSglDx0tAC%2BUCGH9AOfoXe5g1GuPLW3RLOB8K1mn8g%2BOJDR1C6qPH%2BbUoLTfGtyxgc%2BZm%2FSoCOyPYqnG3ohkxHbf9VW%2F5OqoxuwKtG8mm2G%2BcJO1AW37erV6yG9%2F2%2B7F5qZS3V6ho1CJ8sWNbHcontw57PYofQxs65wUB45DcHPK6oS9gsDWLcznIXe%2BRlw7OIwvNqmxAY6pgHMiWfTzKZxELOytk7fBHypSdoQhKM9Gu2jPVZRzmUPV2VZRxNfMnaZN%2FhgguXtBZcO886Ii%2B4J8vgqQHJt115EBjDrymd5jAnRXm4VBi6KWi%2Fr2Tj6ShqrVTWXORrhJa5rOFWK2eEAkfTlKHttepUXi5hm3xmLU9usL1CHB6kreWErKp1bNDPDXi7IhEjCFkdmumpL%2F23Q4sX7c0Fz0NrgySayTMU9&X-Amz-Signature=66bb5c443182290c4030e56ae449fa814fe06242624c8d212a9d154e36046d1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXONX7G%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlqxn2dNJ%2Fj8oD32PpMFj08PxRJi0TZxRUhlHfjMX9%2BAiA09h%2F7Ib5Q45dyy5xWHqP0hie9Fm4ccb5U3oFqIM%2FJyyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVCW4rK8AyvuqAmdKtwDBwieoBPp%2Foy4auxd9bhb%2FOxxquImDlTYQflTzWe5VXNc5s0a%2BcoO%2B%2FVu3%2F8t27G1sP0zcC5nWFDQIILpuKCUVLzVh23UIlWlu3P3Vq1HJJYu0mLKL0rwkQNKgVVmcPc0CzWweQ2ymO%2BHfhGVsKeoy9y9e0SEVn1yF8GPk9A2QVAicBDXYRibMujuuMJ3IGpgD3BOiRXBgi4Vdjuh4M1qVer5fMEHejjWTk5R8kWkoYXjjzdgSt7q%2FU0rX3Qipe0L9hbxzENkpRnUQtrwz2IXUWUkIMPB%2FFZqGBbsmKA3tbBIYk2noi8IVOV25RkGmZy1qSsNim9aL2i7%2BeV%2FTjtnm1WSzElUOXA%2BFtziUPCKQGm05WhY1OBqIJKzg3dXq0lb1GhWFc4PLYurpO6G8HZiz8Jt8N3eUAq2nX01M39hXV%2BORAzuW5DyrqHSYjSglDx0tAC%2BUCGH9AOfoXe5g1GuPLW3RLOB8K1mn8g%2BOJDR1C6qPH%2BbUoLTfGtyxgc%2BZm%2FSoCOyPYqnG3ohkxHbf9VW%2F5OqoxuwKtG8mm2G%2BcJO1AW37erV6yG9%2F2%2B7F5qZS3V6ho1CJ8sWNbHcontw57PYofQxs65wUB45DcHPK6oS9gsDWLcznIXe%2BRlw7OIwvNqmxAY6pgHMiWfTzKZxELOytk7fBHypSdoQhKM9Gu2jPVZRzmUPV2VZRxNfMnaZN%2FhgguXtBZcO886Ii%2B4J8vgqQHJt115EBjDrymd5jAnRXm4VBi6KWi%2Fr2Tj6ShqrVTWXORrhJa5rOFWK2eEAkfTlKHttepUXi5hm3xmLU9usL1CHB6kreWErKp1bNDPDXi7IhEjCFkdmumpL%2F23Q4sX7c0Fz0NrgySayTMU9&X-Amz-Signature=65569a752430cf9ae854d53cea24edd3408254a0140425950982cba665f8746c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4DTVNX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0EYVnWWFF2Z60x5O5jYxejqmxuvVq6YhPhZRDpQvWoAIhAKB0PWEZFvNa3PEa5w9TXw9VeaXEAca6186W8khxQoaJKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqeN%2F0yE2qIjCi3sYq3AOM5tq4BFEYutbOU5cNbhPFlduYsMnk6PJeB3btn82atRDgZZeu466sxNI4u%2BWyxaIHFqEUB5NieAWtnyn41yUMNLT85bLdVcuXXtJvt5NELVmQxRGxwMNqJUvubc2ngwXftWO5B07xv4MKEkU1jgDnteCfRnxHmnAOa0cQIl5Ip6agjLYYowb1VNztV5Cd6orsTHYnbefhTdS9vXg%2BS%2BirvihLcKaBMQ3wyTVaeBbWFGuU78c2zzn%2FZcEVgzr3rkxUatqYCR5IXIc9mvuppjQN5ZPGJmVw%2FHkkWCaP5cC5hr%2FmFUqCYHIJKoDamL8N0gDiF%2FLNjBm8GMiY1AkK5K7TRiuk5Jsc3AzZxI%2Foy6btMR%2BXESTngyVanMfyWR8Z5KOHyqf7THqPggRP7IHjpmix3AKI6Wq3rbn7luZvP9weE7amVHqMsU9AMkQFcUHQUeByfBB2M%2FhAzFqsGFytz2fbvAxRdMcIiAkXgxTuisbXEyc%2FQ3WHht88mkGlhnO7O2pPTpXwUI4KUQujjQrFVR7ngxYWD0h7fWMGiZkQaESXTqZdieMi9QzqeAZ4Yo%2BxackconN1fMCPlvy240fbWUN7eldAR9KhJ2jLvmyaTHNhvDUZEO8m8PavMUSboTDr2abEBjqkARX3MkdxbH2SN9UXZZLEH5YTrX0k84kqVr0%2Bjp7VuAw7qCiYf%2B0SdKALJRwOoIlO2l1yRwwqXVlDEnj7yFNPeD%2FWFTOHL%2BfBtcBp7FBBh721ZelIO7%2BqwJgRvSskIHpDcjxW%2F6CGIpLh0blh14mEXqhnZgWfKds81c0%2B%2FzgzUgEHIyfT1ngQxnaPUUC7S%2BiAW7%2FK5nPmeb0k%2BcckRolj0nhzVNhO&X-Amz-Signature=766c501372012b695e2fbd25b9892050e7a157f03eb8925bf1e0cdcc37d3ad59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4DTVNX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0EYVnWWFF2Z60x5O5jYxejqmxuvVq6YhPhZRDpQvWoAIhAKB0PWEZFvNa3PEa5w9TXw9VeaXEAca6186W8khxQoaJKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqeN%2F0yE2qIjCi3sYq3AOM5tq4BFEYutbOU5cNbhPFlduYsMnk6PJeB3btn82atRDgZZeu466sxNI4u%2BWyxaIHFqEUB5NieAWtnyn41yUMNLT85bLdVcuXXtJvt5NELVmQxRGxwMNqJUvubc2ngwXftWO5B07xv4MKEkU1jgDnteCfRnxHmnAOa0cQIl5Ip6agjLYYowb1VNztV5Cd6orsTHYnbefhTdS9vXg%2BS%2BirvihLcKaBMQ3wyTVaeBbWFGuU78c2zzn%2FZcEVgzr3rkxUatqYCR5IXIc9mvuppjQN5ZPGJmVw%2FHkkWCaP5cC5hr%2FmFUqCYHIJKoDamL8N0gDiF%2FLNjBm8GMiY1AkK5K7TRiuk5Jsc3AzZxI%2Foy6btMR%2BXESTngyVanMfyWR8Z5KOHyqf7THqPggRP7IHjpmix3AKI6Wq3rbn7luZvP9weE7amVHqMsU9AMkQFcUHQUeByfBB2M%2FhAzFqsGFytz2fbvAxRdMcIiAkXgxTuisbXEyc%2FQ3WHht88mkGlhnO7O2pPTpXwUI4KUQujjQrFVR7ngxYWD0h7fWMGiZkQaESXTqZdieMi9QzqeAZ4Yo%2BxackconN1fMCPlvy240fbWUN7eldAR9KhJ2jLvmyaTHNhvDUZEO8m8PavMUSboTDr2abEBjqkARX3MkdxbH2SN9UXZZLEH5YTrX0k84kqVr0%2Bjp7VuAw7qCiYf%2B0SdKALJRwOoIlO2l1yRwwqXVlDEnj7yFNPeD%2FWFTOHL%2BfBtcBp7FBBh721ZelIO7%2BqwJgRvSskIHpDcjxW%2F6CGIpLh0blh14mEXqhnZgWfKds81c0%2B%2FzgzUgEHIyfT1ngQxnaPUUC7S%2BiAW7%2FK5nPmeb0k%2BcckRolj0nhzVNhO&X-Amz-Signature=7df70b40e00968705a502202333d024775785be6bed863b8bbe9d5b3b3b15a47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4DTVNX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0EYVnWWFF2Z60x5O5jYxejqmxuvVq6YhPhZRDpQvWoAIhAKB0PWEZFvNa3PEa5w9TXw9VeaXEAca6186W8khxQoaJKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqeN%2F0yE2qIjCi3sYq3AOM5tq4BFEYutbOU5cNbhPFlduYsMnk6PJeB3btn82atRDgZZeu466sxNI4u%2BWyxaIHFqEUB5NieAWtnyn41yUMNLT85bLdVcuXXtJvt5NELVmQxRGxwMNqJUvubc2ngwXftWO5B07xv4MKEkU1jgDnteCfRnxHmnAOa0cQIl5Ip6agjLYYowb1VNztV5Cd6orsTHYnbefhTdS9vXg%2BS%2BirvihLcKaBMQ3wyTVaeBbWFGuU78c2zzn%2FZcEVgzr3rkxUatqYCR5IXIc9mvuppjQN5ZPGJmVw%2FHkkWCaP5cC5hr%2FmFUqCYHIJKoDamL8N0gDiF%2FLNjBm8GMiY1AkK5K7TRiuk5Jsc3AzZxI%2Foy6btMR%2BXESTngyVanMfyWR8Z5KOHyqf7THqPggRP7IHjpmix3AKI6Wq3rbn7luZvP9weE7amVHqMsU9AMkQFcUHQUeByfBB2M%2FhAzFqsGFytz2fbvAxRdMcIiAkXgxTuisbXEyc%2FQ3WHht88mkGlhnO7O2pPTpXwUI4KUQujjQrFVR7ngxYWD0h7fWMGiZkQaESXTqZdieMi9QzqeAZ4Yo%2BxackconN1fMCPlvy240fbWUN7eldAR9KhJ2jLvmyaTHNhvDUZEO8m8PavMUSboTDr2abEBjqkARX3MkdxbH2SN9UXZZLEH5YTrX0k84kqVr0%2Bjp7VuAw7qCiYf%2B0SdKALJRwOoIlO2l1yRwwqXVlDEnj7yFNPeD%2FWFTOHL%2BfBtcBp7FBBh721ZelIO7%2BqwJgRvSskIHpDcjxW%2F6CGIpLh0blh14mEXqhnZgWfKds81c0%2B%2FzgzUgEHIyfT1ngQxnaPUUC7S%2BiAW7%2FK5nPmeb0k%2BcckRolj0nhzVNhO&X-Amz-Signature=1b20ed781969d2cc256dd0e9cbddac1ab8203c1dd7aa01c4fd69033400a1aef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4DTVNX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0EYVnWWFF2Z60x5O5jYxejqmxuvVq6YhPhZRDpQvWoAIhAKB0PWEZFvNa3PEa5w9TXw9VeaXEAca6186W8khxQoaJKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqeN%2F0yE2qIjCi3sYq3AOM5tq4BFEYutbOU5cNbhPFlduYsMnk6PJeB3btn82atRDgZZeu466sxNI4u%2BWyxaIHFqEUB5NieAWtnyn41yUMNLT85bLdVcuXXtJvt5NELVmQxRGxwMNqJUvubc2ngwXftWO5B07xv4MKEkU1jgDnteCfRnxHmnAOa0cQIl5Ip6agjLYYowb1VNztV5Cd6orsTHYnbefhTdS9vXg%2BS%2BirvihLcKaBMQ3wyTVaeBbWFGuU78c2zzn%2FZcEVgzr3rkxUatqYCR5IXIc9mvuppjQN5ZPGJmVw%2FHkkWCaP5cC5hr%2FmFUqCYHIJKoDamL8N0gDiF%2FLNjBm8GMiY1AkK5K7TRiuk5Jsc3AzZxI%2Foy6btMR%2BXESTngyVanMfyWR8Z5KOHyqf7THqPggRP7IHjpmix3AKI6Wq3rbn7luZvP9weE7amVHqMsU9AMkQFcUHQUeByfBB2M%2FhAzFqsGFytz2fbvAxRdMcIiAkXgxTuisbXEyc%2FQ3WHht88mkGlhnO7O2pPTpXwUI4KUQujjQrFVR7ngxYWD0h7fWMGiZkQaESXTqZdieMi9QzqeAZ4Yo%2BxackconN1fMCPlvy240fbWUN7eldAR9KhJ2jLvmyaTHNhvDUZEO8m8PavMUSboTDr2abEBjqkARX3MkdxbH2SN9UXZZLEH5YTrX0k84kqVr0%2Bjp7VuAw7qCiYf%2B0SdKALJRwOoIlO2l1yRwwqXVlDEnj7yFNPeD%2FWFTOHL%2BfBtcBp7FBBh721ZelIO7%2BqwJgRvSskIHpDcjxW%2F6CGIpLh0blh14mEXqhnZgWfKds81c0%2B%2FzgzUgEHIyfT1ngQxnaPUUC7S%2BiAW7%2FK5nPmeb0k%2BcckRolj0nhzVNhO&X-Amz-Signature=a5d4c9bdf0067da2c73f9dbfcf81dc232a7b2e26af1af023851abd20762919d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4DTVNX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0EYVnWWFF2Z60x5O5jYxejqmxuvVq6YhPhZRDpQvWoAIhAKB0PWEZFvNa3PEa5w9TXw9VeaXEAca6186W8khxQoaJKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqeN%2F0yE2qIjCi3sYq3AOM5tq4BFEYutbOU5cNbhPFlduYsMnk6PJeB3btn82atRDgZZeu466sxNI4u%2BWyxaIHFqEUB5NieAWtnyn41yUMNLT85bLdVcuXXtJvt5NELVmQxRGxwMNqJUvubc2ngwXftWO5B07xv4MKEkU1jgDnteCfRnxHmnAOa0cQIl5Ip6agjLYYowb1VNztV5Cd6orsTHYnbefhTdS9vXg%2BS%2BirvihLcKaBMQ3wyTVaeBbWFGuU78c2zzn%2FZcEVgzr3rkxUatqYCR5IXIc9mvuppjQN5ZPGJmVw%2FHkkWCaP5cC5hr%2FmFUqCYHIJKoDamL8N0gDiF%2FLNjBm8GMiY1AkK5K7TRiuk5Jsc3AzZxI%2Foy6btMR%2BXESTngyVanMfyWR8Z5KOHyqf7THqPggRP7IHjpmix3AKI6Wq3rbn7luZvP9weE7amVHqMsU9AMkQFcUHQUeByfBB2M%2FhAzFqsGFytz2fbvAxRdMcIiAkXgxTuisbXEyc%2FQ3WHht88mkGlhnO7O2pPTpXwUI4KUQujjQrFVR7ngxYWD0h7fWMGiZkQaESXTqZdieMi9QzqeAZ4Yo%2BxackconN1fMCPlvy240fbWUN7eldAR9KhJ2jLvmyaTHNhvDUZEO8m8PavMUSboTDr2abEBjqkARX3MkdxbH2SN9UXZZLEH5YTrX0k84kqVr0%2Bjp7VuAw7qCiYf%2B0SdKALJRwOoIlO2l1yRwwqXVlDEnj7yFNPeD%2FWFTOHL%2BfBtcBp7FBBh721ZelIO7%2BqwJgRvSskIHpDcjxW%2F6CGIpLh0blh14mEXqhnZgWfKds81c0%2B%2FzgzUgEHIyfT1ngQxnaPUUC7S%2BiAW7%2FK5nPmeb0k%2BcckRolj0nhzVNhO&X-Amz-Signature=0d4d1b188566272ddb9e51ee8c9fabac12662cb5490ba0791908a37ceae4e532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4DTVNX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0EYVnWWFF2Z60x5O5jYxejqmxuvVq6YhPhZRDpQvWoAIhAKB0PWEZFvNa3PEa5w9TXw9VeaXEAca6186W8khxQoaJKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqeN%2F0yE2qIjCi3sYq3AOM5tq4BFEYutbOU5cNbhPFlduYsMnk6PJeB3btn82atRDgZZeu466sxNI4u%2BWyxaIHFqEUB5NieAWtnyn41yUMNLT85bLdVcuXXtJvt5NELVmQxRGxwMNqJUvubc2ngwXftWO5B07xv4MKEkU1jgDnteCfRnxHmnAOa0cQIl5Ip6agjLYYowb1VNztV5Cd6orsTHYnbefhTdS9vXg%2BS%2BirvihLcKaBMQ3wyTVaeBbWFGuU78c2zzn%2FZcEVgzr3rkxUatqYCR5IXIc9mvuppjQN5ZPGJmVw%2FHkkWCaP5cC5hr%2FmFUqCYHIJKoDamL8N0gDiF%2FLNjBm8GMiY1AkK5K7TRiuk5Jsc3AzZxI%2Foy6btMR%2BXESTngyVanMfyWR8Z5KOHyqf7THqPggRP7IHjpmix3AKI6Wq3rbn7luZvP9weE7amVHqMsU9AMkQFcUHQUeByfBB2M%2FhAzFqsGFytz2fbvAxRdMcIiAkXgxTuisbXEyc%2FQ3WHht88mkGlhnO7O2pPTpXwUI4KUQujjQrFVR7ngxYWD0h7fWMGiZkQaESXTqZdieMi9QzqeAZ4Yo%2BxackconN1fMCPlvy240fbWUN7eldAR9KhJ2jLvmyaTHNhvDUZEO8m8PavMUSboTDr2abEBjqkARX3MkdxbH2SN9UXZZLEH5YTrX0k84kqVr0%2Bjp7VuAw7qCiYf%2B0SdKALJRwOoIlO2l1yRwwqXVlDEnj7yFNPeD%2FWFTOHL%2BfBtcBp7FBBh721ZelIO7%2BqwJgRvSskIHpDcjxW%2F6CGIpLh0blh14mEXqhnZgWfKds81c0%2B%2FzgzUgEHIyfT1ngQxnaPUUC7S%2BiAW7%2FK5nPmeb0k%2BcckRolj0nhzVNhO&X-Amz-Signature=416d8a86543a9f422822349a12cc6b630228ce0213feead5a09070dad00b5824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4DTVNX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0EYVnWWFF2Z60x5O5jYxejqmxuvVq6YhPhZRDpQvWoAIhAKB0PWEZFvNa3PEa5w9TXw9VeaXEAca6186W8khxQoaJKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqeN%2F0yE2qIjCi3sYq3AOM5tq4BFEYutbOU5cNbhPFlduYsMnk6PJeB3btn82atRDgZZeu466sxNI4u%2BWyxaIHFqEUB5NieAWtnyn41yUMNLT85bLdVcuXXtJvt5NELVmQxRGxwMNqJUvubc2ngwXftWO5B07xv4MKEkU1jgDnteCfRnxHmnAOa0cQIl5Ip6agjLYYowb1VNztV5Cd6orsTHYnbefhTdS9vXg%2BS%2BirvihLcKaBMQ3wyTVaeBbWFGuU78c2zzn%2FZcEVgzr3rkxUatqYCR5IXIc9mvuppjQN5ZPGJmVw%2FHkkWCaP5cC5hr%2FmFUqCYHIJKoDamL8N0gDiF%2FLNjBm8GMiY1AkK5K7TRiuk5Jsc3AzZxI%2Foy6btMR%2BXESTngyVanMfyWR8Z5KOHyqf7THqPggRP7IHjpmix3AKI6Wq3rbn7luZvP9weE7amVHqMsU9AMkQFcUHQUeByfBB2M%2FhAzFqsGFytz2fbvAxRdMcIiAkXgxTuisbXEyc%2FQ3WHht88mkGlhnO7O2pPTpXwUI4KUQujjQrFVR7ngxYWD0h7fWMGiZkQaESXTqZdieMi9QzqeAZ4Yo%2BxackconN1fMCPlvy240fbWUN7eldAR9KhJ2jLvmyaTHNhvDUZEO8m8PavMUSboTDr2abEBjqkARX3MkdxbH2SN9UXZZLEH5YTrX0k84kqVr0%2Bjp7VuAw7qCiYf%2B0SdKALJRwOoIlO2l1yRwwqXVlDEnj7yFNPeD%2FWFTOHL%2BfBtcBp7FBBh721ZelIO7%2BqwJgRvSskIHpDcjxW%2F6CGIpLh0blh14mEXqhnZgWfKds81c0%2B%2FzgzUgEHIyfT1ngQxnaPUUC7S%2BiAW7%2FK5nPmeb0k%2BcckRolj0nhzVNhO&X-Amz-Signature=417bb7ea0c9d238507e458da785f901933d7cbdcaa3be655a14aaf4b0b219e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
