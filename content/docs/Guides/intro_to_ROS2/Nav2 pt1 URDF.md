---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T01:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T01:34:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VMAUYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDIE%2BLVqTZedh4kLjb0PNcPnj9yhwgHF%2FZx2nWxh93wSAiEA4owzi2IoWtpn5wxeCm%2FHUh8E8Qz0BSZyzpOe42M0woYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIqcNRqInH%2B8b3mTKCrcA0%2BBwEGVAXwRfdkpCAq6bBnrc69Oy0r3ECaPBiY8Fc%2FVyWWmJGUITeGRvu8xhhTiOes2r%2BPMi4TfZkeY2Y3fyo6bykQUrrtU1yAAsZW3ed2Hz7SQ%2BEkvzyUZ15ZAVxeU%2BjpxeRsNpn3q6Z1YEYaW6RX4y5XxNQCDUmQL8m6zSPlbOYfFgx4jTlk85Tz%2BRpakRhUm3%2FbbvT%2BR3IdxpSD%2FyNkJda4pFyAli1FuV9vRJhHGEDvb5SDE5BAWKFvtN3TWBiqWGI9JyU9YOmSzqdqKmmwCM3q5Kjme4q3RDGsvf%2B0tgq%2FKm9i2vZqNgDepOOKGDkiBJtKPTGK7b5qU1KN4OGdaMfiDN4RljxDMXTYS8RWlZMziqEMlv4oSNkYOY%2BbBoNGhsXycShZ3ZcdfMY6GvV0ENg3g7jAdRgoW5ilJZ%2FNky%2FY%2FbrwoA6azs5DYk0juXg%2FNjI2Dk%2FE66O9k716CWtK%2B05XvDdOL07TTPGr2ic%2B%2BdQjdhlZphAyq9c6eZQgJmoqgXV6VFpOjFaJb%2BRoACIo3M9gWjJgc9r%2F7cUhgdiQlmUu6gEG9QFhS6BltPV5mPTvkSirxpHoJ8gI3OWvdjNErnvk2dCH8niFV4g6YTVoNCit8H7Q7Ogcz9f%2BdMISyicQGOqUBEHScF24OSy%2B05aOmPNXai0EPqf4f8Z1FDnVWX%2FlNdEvDbtElR2FHTFHCMTGIm7Pb0D9Ey2uRChXPT1QoTMBCtl2i2df1BpPzvkwn%2B8LJRPXXoEmfkvAAK6%2FrlTmA1PLQCq55XP2hvcDQz29GCSIq1FKPDAjR0JnGQSVgxgwe%2FFt4NiLf28zt1oghyssXotL%2B0SU3o6M2eGMa76vzd8sBrmL52kXp&X-Amz-Signature=db7535c1f355e2fa49a7d68b5edfa1500a1fd651626f28103ab9f1a6be2e879f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VMAUYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDIE%2BLVqTZedh4kLjb0PNcPnj9yhwgHF%2FZx2nWxh93wSAiEA4owzi2IoWtpn5wxeCm%2FHUh8E8Qz0BSZyzpOe42M0woYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIqcNRqInH%2B8b3mTKCrcA0%2BBwEGVAXwRfdkpCAq6bBnrc69Oy0r3ECaPBiY8Fc%2FVyWWmJGUITeGRvu8xhhTiOes2r%2BPMi4TfZkeY2Y3fyo6bykQUrrtU1yAAsZW3ed2Hz7SQ%2BEkvzyUZ15ZAVxeU%2BjpxeRsNpn3q6Z1YEYaW6RX4y5XxNQCDUmQL8m6zSPlbOYfFgx4jTlk85Tz%2BRpakRhUm3%2FbbvT%2BR3IdxpSD%2FyNkJda4pFyAli1FuV9vRJhHGEDvb5SDE5BAWKFvtN3TWBiqWGI9JyU9YOmSzqdqKmmwCM3q5Kjme4q3RDGsvf%2B0tgq%2FKm9i2vZqNgDepOOKGDkiBJtKPTGK7b5qU1KN4OGdaMfiDN4RljxDMXTYS8RWlZMziqEMlv4oSNkYOY%2BbBoNGhsXycShZ3ZcdfMY6GvV0ENg3g7jAdRgoW5ilJZ%2FNky%2FY%2FbrwoA6azs5DYk0juXg%2FNjI2Dk%2FE66O9k716CWtK%2B05XvDdOL07TTPGr2ic%2B%2BdQjdhlZphAyq9c6eZQgJmoqgXV6VFpOjFaJb%2BRoACIo3M9gWjJgc9r%2F7cUhgdiQlmUu6gEG9QFhS6BltPV5mPTvkSirxpHoJ8gI3OWvdjNErnvk2dCH8niFV4g6YTVoNCit8H7Q7Ogcz9f%2BdMISyicQGOqUBEHScF24OSy%2B05aOmPNXai0EPqf4f8Z1FDnVWX%2FlNdEvDbtElR2FHTFHCMTGIm7Pb0D9Ey2uRChXPT1QoTMBCtl2i2df1BpPzvkwn%2B8LJRPXXoEmfkvAAK6%2FrlTmA1PLQCq55XP2hvcDQz29GCSIq1FKPDAjR0JnGQSVgxgwe%2FFt4NiLf28zt1oghyssXotL%2B0SU3o6M2eGMa76vzd8sBrmL52kXp&X-Amz-Signature=03e917593d1fe5f3a6b849dbd946d4e6530e43a1eab357e957669441adfa48ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly highly HIGHLY recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VMAUYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDIE%2BLVqTZedh4kLjb0PNcPnj9yhwgHF%2FZx2nWxh93wSAiEA4owzi2IoWtpn5wxeCm%2FHUh8E8Qz0BSZyzpOe42M0woYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIqcNRqInH%2B8b3mTKCrcA0%2BBwEGVAXwRfdkpCAq6bBnrc69Oy0r3ECaPBiY8Fc%2FVyWWmJGUITeGRvu8xhhTiOes2r%2BPMi4TfZkeY2Y3fyo6bykQUrrtU1yAAsZW3ed2Hz7SQ%2BEkvzyUZ15ZAVxeU%2BjpxeRsNpn3q6Z1YEYaW6RX4y5XxNQCDUmQL8m6zSPlbOYfFgx4jTlk85Tz%2BRpakRhUm3%2FbbvT%2BR3IdxpSD%2FyNkJda4pFyAli1FuV9vRJhHGEDvb5SDE5BAWKFvtN3TWBiqWGI9JyU9YOmSzqdqKmmwCM3q5Kjme4q3RDGsvf%2B0tgq%2FKm9i2vZqNgDepOOKGDkiBJtKPTGK7b5qU1KN4OGdaMfiDN4RljxDMXTYS8RWlZMziqEMlv4oSNkYOY%2BbBoNGhsXycShZ3ZcdfMY6GvV0ENg3g7jAdRgoW5ilJZ%2FNky%2FY%2FbrwoA6azs5DYk0juXg%2FNjI2Dk%2FE66O9k716CWtK%2B05XvDdOL07TTPGr2ic%2B%2BdQjdhlZphAyq9c6eZQgJmoqgXV6VFpOjFaJb%2BRoACIo3M9gWjJgc9r%2F7cUhgdiQlmUu6gEG9QFhS6BltPV5mPTvkSirxpHoJ8gI3OWvdjNErnvk2dCH8niFV4g6YTVoNCit8H7Q7Ogcz9f%2BdMISyicQGOqUBEHScF24OSy%2B05aOmPNXai0EPqf4f8Z1FDnVWX%2FlNdEvDbtElR2FHTFHCMTGIm7Pb0D9Ey2uRChXPT1QoTMBCtl2i2df1BpPzvkwn%2B8LJRPXXoEmfkvAAK6%2FrlTmA1PLQCq55XP2hvcDQz29GCSIq1FKPDAjR0JnGQSVgxgwe%2FFt4NiLf28zt1oghyssXotL%2B0SU3o6M2eGMa76vzd8sBrmL52kXp&X-Amz-Signature=601aa116277794ad5a9f933c3dc6683050619624bfc3c005112ebd73f6300afd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are many reasons for this because

- keeps all your code in one place
- You don’t need a monitor, mouse, and keyboard to connect to your Raspberry Pi
- Your laptop is much much faster than your Raspberry Pi so debugging is faster
- Once you are done developing on your laptop all you have to do is copy all the files over to the Pi and Docker will automatically make it work

{{% /alert %}}

## creating workspace + package

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

If you are doing the Dev container setup put these at the bottom of your `Dockerfile`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VMAUYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDIE%2BLVqTZedh4kLjb0PNcPnj9yhwgHF%2FZx2nWxh93wSAiEA4owzi2IoWtpn5wxeCm%2FHUh8E8Qz0BSZyzpOe42M0woYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIqcNRqInH%2B8b3mTKCrcA0%2BBwEGVAXwRfdkpCAq6bBnrc69Oy0r3ECaPBiY8Fc%2FVyWWmJGUITeGRvu8xhhTiOes2r%2BPMi4TfZkeY2Y3fyo6bykQUrrtU1yAAsZW3ed2Hz7SQ%2BEkvzyUZ15ZAVxeU%2BjpxeRsNpn3q6Z1YEYaW6RX4y5XxNQCDUmQL8m6zSPlbOYfFgx4jTlk85Tz%2BRpakRhUm3%2FbbvT%2BR3IdxpSD%2FyNkJda4pFyAli1FuV9vRJhHGEDvb5SDE5BAWKFvtN3TWBiqWGI9JyU9YOmSzqdqKmmwCM3q5Kjme4q3RDGsvf%2B0tgq%2FKm9i2vZqNgDepOOKGDkiBJtKPTGK7b5qU1KN4OGdaMfiDN4RljxDMXTYS8RWlZMziqEMlv4oSNkYOY%2BbBoNGhsXycShZ3ZcdfMY6GvV0ENg3g7jAdRgoW5ilJZ%2FNky%2FY%2FbrwoA6azs5DYk0juXg%2FNjI2Dk%2FE66O9k716CWtK%2B05XvDdOL07TTPGr2ic%2B%2BdQjdhlZphAyq9c6eZQgJmoqgXV6VFpOjFaJb%2BRoACIo3M9gWjJgc9r%2F7cUhgdiQlmUu6gEG9QFhS6BltPV5mPTvkSirxpHoJ8gI3OWvdjNErnvk2dCH8niFV4g6YTVoNCit8H7Q7Ogcz9f%2BdMISyicQGOqUBEHScF24OSy%2B05aOmPNXai0EPqf4f8Z1FDnVWX%2FlNdEvDbtElR2FHTFHCMTGIm7Pb0D9Ey2uRChXPT1QoTMBCtl2i2df1BpPzvkwn%2B8LJRPXXoEmfkvAAK6%2FrlTmA1PLQCq55XP2hvcDQz29GCSIq1FKPDAjR0JnGQSVgxgwe%2FFt4NiLf28zt1oghyssXotL%2B0SU3o6M2eGMa76vzd8sBrmL52kXp&X-Amz-Signature=e032bcad0d8d8edb16fac8da617e36a94e9323403a87499fa986d38a8f1ace57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VMAUYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDIE%2BLVqTZedh4kLjb0PNcPnj9yhwgHF%2FZx2nWxh93wSAiEA4owzi2IoWtpn5wxeCm%2FHUh8E8Qz0BSZyzpOe42M0woYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIqcNRqInH%2B8b3mTKCrcA0%2BBwEGVAXwRfdkpCAq6bBnrc69Oy0r3ECaPBiY8Fc%2FVyWWmJGUITeGRvu8xhhTiOes2r%2BPMi4TfZkeY2Y3fyo6bykQUrrtU1yAAsZW3ed2Hz7SQ%2BEkvzyUZ15ZAVxeU%2BjpxeRsNpn3q6Z1YEYaW6RX4y5XxNQCDUmQL8m6zSPlbOYfFgx4jTlk85Tz%2BRpakRhUm3%2FbbvT%2BR3IdxpSD%2FyNkJda4pFyAli1FuV9vRJhHGEDvb5SDE5BAWKFvtN3TWBiqWGI9JyU9YOmSzqdqKmmwCM3q5Kjme4q3RDGsvf%2B0tgq%2FKm9i2vZqNgDepOOKGDkiBJtKPTGK7b5qU1KN4OGdaMfiDN4RljxDMXTYS8RWlZMziqEMlv4oSNkYOY%2BbBoNGhsXycShZ3ZcdfMY6GvV0ENg3g7jAdRgoW5ilJZ%2FNky%2FY%2FbrwoA6azs5DYk0juXg%2FNjI2Dk%2FE66O9k716CWtK%2B05XvDdOL07TTPGr2ic%2B%2BdQjdhlZphAyq9c6eZQgJmoqgXV6VFpOjFaJb%2BRoACIo3M9gWjJgc9r%2F7cUhgdiQlmUu6gEG9QFhS6BltPV5mPTvkSirxpHoJ8gI3OWvdjNErnvk2dCH8niFV4g6YTVoNCit8H7Q7Ogcz9f%2BdMISyicQGOqUBEHScF24OSy%2B05aOmPNXai0EPqf4f8Z1FDnVWX%2FlNdEvDbtElR2FHTFHCMTGIm7Pb0D9Ey2uRChXPT1QoTMBCtl2i2df1BpPzvkwn%2B8LJRPXXoEmfkvAAK6%2FrlTmA1PLQCq55XP2hvcDQz29GCSIq1FKPDAjR0JnGQSVgxgwe%2FFt4NiLf28zt1oghyssXotL%2B0SU3o6M2eGMa76vzd8sBrmL52kXp&X-Amz-Signature=9c2aa1855963e80499e0461616e3e31081dd330df594e82f9b0192162649c4bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VMAUYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDIE%2BLVqTZedh4kLjb0PNcPnj9yhwgHF%2FZx2nWxh93wSAiEA4owzi2IoWtpn5wxeCm%2FHUh8E8Qz0BSZyzpOe42M0woYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIqcNRqInH%2B8b3mTKCrcA0%2BBwEGVAXwRfdkpCAq6bBnrc69Oy0r3ECaPBiY8Fc%2FVyWWmJGUITeGRvu8xhhTiOes2r%2BPMi4TfZkeY2Y3fyo6bykQUrrtU1yAAsZW3ed2Hz7SQ%2BEkvzyUZ15ZAVxeU%2BjpxeRsNpn3q6Z1YEYaW6RX4y5XxNQCDUmQL8m6zSPlbOYfFgx4jTlk85Tz%2BRpakRhUm3%2FbbvT%2BR3IdxpSD%2FyNkJda4pFyAli1FuV9vRJhHGEDvb5SDE5BAWKFvtN3TWBiqWGI9JyU9YOmSzqdqKmmwCM3q5Kjme4q3RDGsvf%2B0tgq%2FKm9i2vZqNgDepOOKGDkiBJtKPTGK7b5qU1KN4OGdaMfiDN4RljxDMXTYS8RWlZMziqEMlv4oSNkYOY%2BbBoNGhsXycShZ3ZcdfMY6GvV0ENg3g7jAdRgoW5ilJZ%2FNky%2FY%2FbrwoA6azs5DYk0juXg%2FNjI2Dk%2FE66O9k716CWtK%2B05XvDdOL07TTPGr2ic%2B%2BdQjdhlZphAyq9c6eZQgJmoqgXV6VFpOjFaJb%2BRoACIo3M9gWjJgc9r%2F7cUhgdiQlmUu6gEG9QFhS6BltPV5mPTvkSirxpHoJ8gI3OWvdjNErnvk2dCH8niFV4g6YTVoNCit8H7Q7Ogcz9f%2BdMISyicQGOqUBEHScF24OSy%2B05aOmPNXai0EPqf4f8Z1FDnVWX%2FlNdEvDbtElR2FHTFHCMTGIm7Pb0D9Ey2uRChXPT1QoTMBCtl2i2df1BpPzvkwn%2B8LJRPXXoEmfkvAAK6%2FrlTmA1PLQCq55XP2hvcDQz29GCSIq1FKPDAjR0JnGQSVgxgwe%2FFt4NiLf28zt1oghyssXotL%2B0SU3o6M2eGMa76vzd8sBrmL52kXp&X-Amz-Signature=e2f93bff6f5f295dcbbd122a81a24ff9cfae5e5556fa85dc02da5488288678b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VMAUYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDIE%2BLVqTZedh4kLjb0PNcPnj9yhwgHF%2FZx2nWxh93wSAiEA4owzi2IoWtpn5wxeCm%2FHUh8E8Qz0BSZyzpOe42M0woYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIqcNRqInH%2B8b3mTKCrcA0%2BBwEGVAXwRfdkpCAq6bBnrc69Oy0r3ECaPBiY8Fc%2FVyWWmJGUITeGRvu8xhhTiOes2r%2BPMi4TfZkeY2Y3fyo6bykQUrrtU1yAAsZW3ed2Hz7SQ%2BEkvzyUZ15ZAVxeU%2BjpxeRsNpn3q6Z1YEYaW6RX4y5XxNQCDUmQL8m6zSPlbOYfFgx4jTlk85Tz%2BRpakRhUm3%2FbbvT%2BR3IdxpSD%2FyNkJda4pFyAli1FuV9vRJhHGEDvb5SDE5BAWKFvtN3TWBiqWGI9JyU9YOmSzqdqKmmwCM3q5Kjme4q3RDGsvf%2B0tgq%2FKm9i2vZqNgDepOOKGDkiBJtKPTGK7b5qU1KN4OGdaMfiDN4RljxDMXTYS8RWlZMziqEMlv4oSNkYOY%2BbBoNGhsXycShZ3ZcdfMY6GvV0ENg3g7jAdRgoW5ilJZ%2FNky%2FY%2FbrwoA6azs5DYk0juXg%2FNjI2Dk%2FE66O9k716CWtK%2B05XvDdOL07TTPGr2ic%2B%2BdQjdhlZphAyq9c6eZQgJmoqgXV6VFpOjFaJb%2BRoACIo3M9gWjJgc9r%2F7cUhgdiQlmUu6gEG9QFhS6BltPV5mPTvkSirxpHoJ8gI3OWvdjNErnvk2dCH8niFV4g6YTVoNCit8H7Q7Ogcz9f%2BdMISyicQGOqUBEHScF24OSy%2B05aOmPNXai0EPqf4f8Z1FDnVWX%2FlNdEvDbtElR2FHTFHCMTGIm7Pb0D9Ey2uRChXPT1QoTMBCtl2i2df1BpPzvkwn%2B8LJRPXXoEmfkvAAK6%2FrlTmA1PLQCq55XP2hvcDQz29GCSIq1FKPDAjR0JnGQSVgxgwe%2FFt4NiLf28zt1oghyssXotL%2B0SU3o6M2eGMa76vzd8sBrmL52kXp&X-Amz-Signature=c5af3318817387ebbe2ae3de413f2d863d5b01f308f6c71f1bbad5eae813d943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

make a folder in `mbot_pkg` called description and a file called `mbot_description.urdf`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VMAUYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDIE%2BLVqTZedh4kLjb0PNcPnj9yhwgHF%2FZx2nWxh93wSAiEA4owzi2IoWtpn5wxeCm%2FHUh8E8Qz0BSZyzpOe42M0woYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIqcNRqInH%2B8b3mTKCrcA0%2BBwEGVAXwRfdkpCAq6bBnrc69Oy0r3ECaPBiY8Fc%2FVyWWmJGUITeGRvu8xhhTiOes2r%2BPMi4TfZkeY2Y3fyo6bykQUrrtU1yAAsZW3ed2Hz7SQ%2BEkvzyUZ15ZAVxeU%2BjpxeRsNpn3q6Z1YEYaW6RX4y5XxNQCDUmQL8m6zSPlbOYfFgx4jTlk85Tz%2BRpakRhUm3%2FbbvT%2BR3IdxpSD%2FyNkJda4pFyAli1FuV9vRJhHGEDvb5SDE5BAWKFvtN3TWBiqWGI9JyU9YOmSzqdqKmmwCM3q5Kjme4q3RDGsvf%2B0tgq%2FKm9i2vZqNgDepOOKGDkiBJtKPTGK7b5qU1KN4OGdaMfiDN4RljxDMXTYS8RWlZMziqEMlv4oSNkYOY%2BbBoNGhsXycShZ3ZcdfMY6GvV0ENg3g7jAdRgoW5ilJZ%2FNky%2FY%2FbrwoA6azs5DYk0juXg%2FNjI2Dk%2FE66O9k716CWtK%2B05XvDdOL07TTPGr2ic%2B%2BdQjdhlZphAyq9c6eZQgJmoqgXV6VFpOjFaJb%2BRoACIo3M9gWjJgc9r%2F7cUhgdiQlmUu6gEG9QFhS6BltPV5mPTvkSirxpHoJ8gI3OWvdjNErnvk2dCH8niFV4g6YTVoNCit8H7Q7Ogcz9f%2BdMISyicQGOqUBEHScF24OSy%2B05aOmPNXai0EPqf4f8Z1FDnVWX%2FlNdEvDbtElR2FHTFHCMTGIm7Pb0D9Ey2uRChXPT1QoTMBCtl2i2df1BpPzvkwn%2B8LJRPXXoEmfkvAAK6%2FrlTmA1PLQCq55XP2hvcDQz29GCSIq1FKPDAjR0JnGQSVgxgwe%2FFt4NiLf28zt1oghyssXotL%2B0SU3o6M2eGMa76vzd8sBrmL52kXp&X-Amz-Signature=e1a363c91360a09f9e0d5ab7129bca79fef1d4d6b84e9eb601173f6b990a42b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VMAUYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDIE%2BLVqTZedh4kLjb0PNcPnj9yhwgHF%2FZx2nWxh93wSAiEA4owzi2IoWtpn5wxeCm%2FHUh8E8Qz0BSZyzpOe42M0woYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIqcNRqInH%2B8b3mTKCrcA0%2BBwEGVAXwRfdkpCAq6bBnrc69Oy0r3ECaPBiY8Fc%2FVyWWmJGUITeGRvu8xhhTiOes2r%2BPMi4TfZkeY2Y3fyo6bykQUrrtU1yAAsZW3ed2Hz7SQ%2BEkvzyUZ15ZAVxeU%2BjpxeRsNpn3q6Z1YEYaW6RX4y5XxNQCDUmQL8m6zSPlbOYfFgx4jTlk85Tz%2BRpakRhUm3%2FbbvT%2BR3IdxpSD%2FyNkJda4pFyAli1FuV9vRJhHGEDvb5SDE5BAWKFvtN3TWBiqWGI9JyU9YOmSzqdqKmmwCM3q5Kjme4q3RDGsvf%2B0tgq%2FKm9i2vZqNgDepOOKGDkiBJtKPTGK7b5qU1KN4OGdaMfiDN4RljxDMXTYS8RWlZMziqEMlv4oSNkYOY%2BbBoNGhsXycShZ3ZcdfMY6GvV0ENg3g7jAdRgoW5ilJZ%2FNky%2FY%2FbrwoA6azs5DYk0juXg%2FNjI2Dk%2FE66O9k716CWtK%2B05XvDdOL07TTPGr2ic%2B%2BdQjdhlZphAyq9c6eZQgJmoqgXV6VFpOjFaJb%2BRoACIo3M9gWjJgc9r%2F7cUhgdiQlmUu6gEG9QFhS6BltPV5mPTvkSirxpHoJ8gI3OWvdjNErnvk2dCH8niFV4g6YTVoNCit8H7Q7Ogcz9f%2BdMISyicQGOqUBEHScF24OSy%2B05aOmPNXai0EPqf4f8Z1FDnVWX%2FlNdEvDbtElR2FHTFHCMTGIm7Pb0D9Ey2uRChXPT1QoTMBCtl2i2df1BpPzvkwn%2B8LJRPXXoEmfkvAAK6%2FrlTmA1PLQCq55XP2hvcDQz29GCSIq1FKPDAjR0JnGQSVgxgwe%2FFt4NiLf28zt1oghyssXotL%2B0SU3o6M2eGMa76vzd8sBrmL52kXp&X-Amz-Signature=1a2a17de3f23ae8f7e0c87eb8147593eb689a3595064a2a6818976ec02a861d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VMAUYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDIE%2BLVqTZedh4kLjb0PNcPnj9yhwgHF%2FZx2nWxh93wSAiEA4owzi2IoWtpn5wxeCm%2FHUh8E8Qz0BSZyzpOe42M0woYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIqcNRqInH%2B8b3mTKCrcA0%2BBwEGVAXwRfdkpCAq6bBnrc69Oy0r3ECaPBiY8Fc%2FVyWWmJGUITeGRvu8xhhTiOes2r%2BPMi4TfZkeY2Y3fyo6bykQUrrtU1yAAsZW3ed2Hz7SQ%2BEkvzyUZ15ZAVxeU%2BjpxeRsNpn3q6Z1YEYaW6RX4y5XxNQCDUmQL8m6zSPlbOYfFgx4jTlk85Tz%2BRpakRhUm3%2FbbvT%2BR3IdxpSD%2FyNkJda4pFyAli1FuV9vRJhHGEDvb5SDE5BAWKFvtN3TWBiqWGI9JyU9YOmSzqdqKmmwCM3q5Kjme4q3RDGsvf%2B0tgq%2FKm9i2vZqNgDepOOKGDkiBJtKPTGK7b5qU1KN4OGdaMfiDN4RljxDMXTYS8RWlZMziqEMlv4oSNkYOY%2BbBoNGhsXycShZ3ZcdfMY6GvV0ENg3g7jAdRgoW5ilJZ%2FNky%2FY%2FbrwoA6azs5DYk0juXg%2FNjI2Dk%2FE66O9k716CWtK%2B05XvDdOL07TTPGr2ic%2B%2BdQjdhlZphAyq9c6eZQgJmoqgXV6VFpOjFaJb%2BRoACIo3M9gWjJgc9r%2F7cUhgdiQlmUu6gEG9QFhS6BltPV5mPTvkSirxpHoJ8gI3OWvdjNErnvk2dCH8niFV4g6YTVoNCit8H7Q7Ogcz9f%2BdMISyicQGOqUBEHScF24OSy%2B05aOmPNXai0EPqf4f8Z1FDnVWX%2FlNdEvDbtElR2FHTFHCMTGIm7Pb0D9Ey2uRChXPT1QoTMBCtl2i2df1BpPzvkwn%2B8LJRPXXoEmfkvAAK6%2FrlTmA1PLQCq55XP2hvcDQz29GCSIq1FKPDAjR0JnGQSVgxgwe%2FFt4NiLf28zt1oghyssXotL%2B0SU3o6M2eGMa76vzd8sBrmL52kXp&X-Amz-Signature=062e284f5a8c57e6a61abae411cb04916a843b3e9d71ce5dbb4e367909af3537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VMAUYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDIE%2BLVqTZedh4kLjb0PNcPnj9yhwgHF%2FZx2nWxh93wSAiEA4owzi2IoWtpn5wxeCm%2FHUh8E8Qz0BSZyzpOe42M0woYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIqcNRqInH%2B8b3mTKCrcA0%2BBwEGVAXwRfdkpCAq6bBnrc69Oy0r3ECaPBiY8Fc%2FVyWWmJGUITeGRvu8xhhTiOes2r%2BPMi4TfZkeY2Y3fyo6bykQUrrtU1yAAsZW3ed2Hz7SQ%2BEkvzyUZ15ZAVxeU%2BjpxeRsNpn3q6Z1YEYaW6RX4y5XxNQCDUmQL8m6zSPlbOYfFgx4jTlk85Tz%2BRpakRhUm3%2FbbvT%2BR3IdxpSD%2FyNkJda4pFyAli1FuV9vRJhHGEDvb5SDE5BAWKFvtN3TWBiqWGI9JyU9YOmSzqdqKmmwCM3q5Kjme4q3RDGsvf%2B0tgq%2FKm9i2vZqNgDepOOKGDkiBJtKPTGK7b5qU1KN4OGdaMfiDN4RljxDMXTYS8RWlZMziqEMlv4oSNkYOY%2BbBoNGhsXycShZ3ZcdfMY6GvV0ENg3g7jAdRgoW5ilJZ%2FNky%2FY%2FbrwoA6azs5DYk0juXg%2FNjI2Dk%2FE66O9k716CWtK%2B05XvDdOL07TTPGr2ic%2B%2BdQjdhlZphAyq9c6eZQgJmoqgXV6VFpOjFaJb%2BRoACIo3M9gWjJgc9r%2F7cUhgdiQlmUu6gEG9QFhS6BltPV5mPTvkSirxpHoJ8gI3OWvdjNErnvk2dCH8niFV4g6YTVoNCit8H7Q7Ogcz9f%2BdMISyicQGOqUBEHScF24OSy%2B05aOmPNXai0EPqf4f8Z1FDnVWX%2FlNdEvDbtElR2FHTFHCMTGIm7Pb0D9Ey2uRChXPT1QoTMBCtl2i2df1BpPzvkwn%2B8LJRPXXoEmfkvAAK6%2FrlTmA1PLQCq55XP2hvcDQz29GCSIq1FKPDAjR0JnGQSVgxgwe%2FFt4NiLf28zt1oghyssXotL%2B0SU3o6M2eGMa76vzd8sBrmL52kXp&X-Amz-Signature=716788f855731131b9bbc41b87e95ce5d1422dec8bf9089de7687e47d334aa30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VMAUYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDIE%2BLVqTZedh4kLjb0PNcPnj9yhwgHF%2FZx2nWxh93wSAiEA4owzi2IoWtpn5wxeCm%2FHUh8E8Qz0BSZyzpOe42M0woYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIqcNRqInH%2B8b3mTKCrcA0%2BBwEGVAXwRfdkpCAq6bBnrc69Oy0r3ECaPBiY8Fc%2FVyWWmJGUITeGRvu8xhhTiOes2r%2BPMi4TfZkeY2Y3fyo6bykQUrrtU1yAAsZW3ed2Hz7SQ%2BEkvzyUZ15ZAVxeU%2BjpxeRsNpn3q6Z1YEYaW6RX4y5XxNQCDUmQL8m6zSPlbOYfFgx4jTlk85Tz%2BRpakRhUm3%2FbbvT%2BR3IdxpSD%2FyNkJda4pFyAli1FuV9vRJhHGEDvb5SDE5BAWKFvtN3TWBiqWGI9JyU9YOmSzqdqKmmwCM3q5Kjme4q3RDGsvf%2B0tgq%2FKm9i2vZqNgDepOOKGDkiBJtKPTGK7b5qU1KN4OGdaMfiDN4RljxDMXTYS8RWlZMziqEMlv4oSNkYOY%2BbBoNGhsXycShZ3ZcdfMY6GvV0ENg3g7jAdRgoW5ilJZ%2FNky%2FY%2FbrwoA6azs5DYk0juXg%2FNjI2Dk%2FE66O9k716CWtK%2B05XvDdOL07TTPGr2ic%2B%2BdQjdhlZphAyq9c6eZQgJmoqgXV6VFpOjFaJb%2BRoACIo3M9gWjJgc9r%2F7cUhgdiQlmUu6gEG9QFhS6BltPV5mPTvkSirxpHoJ8gI3OWvdjNErnvk2dCH8niFV4g6YTVoNCit8H7Q7Ogcz9f%2BdMISyicQGOqUBEHScF24OSy%2B05aOmPNXai0EPqf4f8Z1FDnVWX%2FlNdEvDbtElR2FHTFHCMTGIm7Pb0D9Ey2uRChXPT1QoTMBCtl2i2df1BpPzvkwn%2B8LJRPXXoEmfkvAAK6%2FrlTmA1PLQCq55XP2hvcDQz29GCSIq1FKPDAjR0JnGQSVgxgwe%2FFt4NiLf28zt1oghyssXotL%2B0SU3o6M2eGMa76vzd8sBrmL52kXp&X-Amz-Signature=df49521344fd05828fdc27e076bb873d5dcdc026b70a65f50fe220d5de00a0e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VMAUYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDIE%2BLVqTZedh4kLjb0PNcPnj9yhwgHF%2FZx2nWxh93wSAiEA4owzi2IoWtpn5wxeCm%2FHUh8E8Qz0BSZyzpOe42M0woYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIqcNRqInH%2B8b3mTKCrcA0%2BBwEGVAXwRfdkpCAq6bBnrc69Oy0r3ECaPBiY8Fc%2FVyWWmJGUITeGRvu8xhhTiOes2r%2BPMi4TfZkeY2Y3fyo6bykQUrrtU1yAAsZW3ed2Hz7SQ%2BEkvzyUZ15ZAVxeU%2BjpxeRsNpn3q6Z1YEYaW6RX4y5XxNQCDUmQL8m6zSPlbOYfFgx4jTlk85Tz%2BRpakRhUm3%2FbbvT%2BR3IdxpSD%2FyNkJda4pFyAli1FuV9vRJhHGEDvb5SDE5BAWKFvtN3TWBiqWGI9JyU9YOmSzqdqKmmwCM3q5Kjme4q3RDGsvf%2B0tgq%2FKm9i2vZqNgDepOOKGDkiBJtKPTGK7b5qU1KN4OGdaMfiDN4RljxDMXTYS8RWlZMziqEMlv4oSNkYOY%2BbBoNGhsXycShZ3ZcdfMY6GvV0ENg3g7jAdRgoW5ilJZ%2FNky%2FY%2FbrwoA6azs5DYk0juXg%2FNjI2Dk%2FE66O9k716CWtK%2B05XvDdOL07TTPGr2ic%2B%2BdQjdhlZphAyq9c6eZQgJmoqgXV6VFpOjFaJb%2BRoACIo3M9gWjJgc9r%2F7cUhgdiQlmUu6gEG9QFhS6BltPV5mPTvkSirxpHoJ8gI3OWvdjNErnvk2dCH8niFV4g6YTVoNCit8H7Q7Ogcz9f%2BdMISyicQGOqUBEHScF24OSy%2B05aOmPNXai0EPqf4f8Z1FDnVWX%2FlNdEvDbtElR2FHTFHCMTGIm7Pb0D9Ey2uRChXPT1QoTMBCtl2i2df1BpPzvkwn%2B8LJRPXXoEmfkvAAK6%2FrlTmA1PLQCq55XP2hvcDQz29GCSIq1FKPDAjR0JnGQSVgxgwe%2FFt4NiLf28zt1oghyssXotL%2B0SU3o6M2eGMa76vzd8sBrmL52kXp&X-Amz-Signature=d1c2c7c76f88f98421604e3714193548612bdebabec3228d7fdae0df25c64ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VMAUYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDIE%2BLVqTZedh4kLjb0PNcPnj9yhwgHF%2FZx2nWxh93wSAiEA4owzi2IoWtpn5wxeCm%2FHUh8E8Qz0BSZyzpOe42M0woYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIqcNRqInH%2B8b3mTKCrcA0%2BBwEGVAXwRfdkpCAq6bBnrc69Oy0r3ECaPBiY8Fc%2FVyWWmJGUITeGRvu8xhhTiOes2r%2BPMi4TfZkeY2Y3fyo6bykQUrrtU1yAAsZW3ed2Hz7SQ%2BEkvzyUZ15ZAVxeU%2BjpxeRsNpn3q6Z1YEYaW6RX4y5XxNQCDUmQL8m6zSPlbOYfFgx4jTlk85Tz%2BRpakRhUm3%2FbbvT%2BR3IdxpSD%2FyNkJda4pFyAli1FuV9vRJhHGEDvb5SDE5BAWKFvtN3TWBiqWGI9JyU9YOmSzqdqKmmwCM3q5Kjme4q3RDGsvf%2B0tgq%2FKm9i2vZqNgDepOOKGDkiBJtKPTGK7b5qU1KN4OGdaMfiDN4RljxDMXTYS8RWlZMziqEMlv4oSNkYOY%2BbBoNGhsXycShZ3ZcdfMY6GvV0ENg3g7jAdRgoW5ilJZ%2FNky%2FY%2FbrwoA6azs5DYk0juXg%2FNjI2Dk%2FE66O9k716CWtK%2B05XvDdOL07TTPGr2ic%2B%2BdQjdhlZphAyq9c6eZQgJmoqgXV6VFpOjFaJb%2BRoACIo3M9gWjJgc9r%2F7cUhgdiQlmUu6gEG9QFhS6BltPV5mPTvkSirxpHoJ8gI3OWvdjNErnvk2dCH8niFV4g6YTVoNCit8H7Q7Ogcz9f%2BdMISyicQGOqUBEHScF24OSy%2B05aOmPNXai0EPqf4f8Z1FDnVWX%2FlNdEvDbtElR2FHTFHCMTGIm7Pb0D9Ey2uRChXPT1QoTMBCtl2i2df1BpPzvkwn%2B8LJRPXXoEmfkvAAK6%2FrlTmA1PLQCq55XP2hvcDQz29GCSIq1FKPDAjR0JnGQSVgxgwe%2FFt4NiLf28zt1oghyssXotL%2B0SU3o6M2eGMa76vzd8sBrmL52kXp&X-Amz-Signature=7000e6a4bf3f66fd918fd3abd27177291aa9d716b17f62e91ca5dcb562496dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JSLIOLM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIGSOS8q6GTftyPgbTR%2FsS%2F8mFQfCsTGi8jAgludnOvG9AiBkj1lMGKlZ6xdOmK%2BIDE8EEexlOgUPtWgU9J15GeKr4ir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMUiC6QQEoNzb35cYWKtwDNZYsUOTPtkzKGlPBWCApm6kOck8TGBZKGSzUKB9hoWM0ztg9x4vva2k34t6cbm7%2BQxwBX9uY9tDBwoPCOz%2BMAQU0xXGF5wCjkvxPI2Oc2%2BoB40B21A6L%2BgimbCGI%2Bw9mlfWopvn6qHljug8TtPa6jUa3OyPh1f0bfNvfO%2FRoKWu2FOGMCPyf1H71CYSFlKFlA3F9V3eDXJUSN1wj9fsEASb%2BvkoAtSvThCIjBDGi8cETa9mKiaJNX20bvW4ivCYaAtbfPMKGqM%2FLz4wAHDuvshj6D8qYQDOkU0W5b8dttzExOWbuKl7qU5W1s%2F4x084tE4%2FpIpwHLAGB4KJnWnVmjbbn5O%2FA%2FBEYgJs4u6LV02Qh%2Bo4EFsq7j8YjtggjskYyolYaOL5Hb9xyS0d4eQB2T7M%2FsXgR0HGUGTEYKegOGTABf9mAWdl2J8Cvl5hc11ZgtZVM%2FcxjbeMeSJuHqEutDCmmHSnqiM7%2FT%2FhyOWhieJgnK8SjDEhqu388uFfXcm7wfz1%2BYkm0pMi%2BopVTox21tKQ6p6SqL6ldM4IVxvkQovRfUmCKtoUC9EEb15QcO52ZlolUfzUOtgZgFbePc%2FH99yoxoDkhoHbgFr3hRYuNkl%2BiWoUTUz5UtLEl5GYwqbKJxAY6pgFLtkG0JR%2B7L5iyFGq%2BVy4X%2FHYg6hvHkT1unzNYK2HRbnTJjLVlMvl5neoq9BPPb5LmpE%2F1lL4%2FOnn6dS5%2BkwjfqiGhZgnAdyOYDDo9IrVxIstHg%2F1kjHQJMo3%2FayfOkilydYZCs94taxT0GL68ctzkxZfEu8RG1hmhl%2BW5kNemqy6GIcIZTz%2BAC0kjZ2OazvBUOYqWeztZ86cTIrGo8ILEebdK%2FHB9&X-Amz-Signature=7ffa3b144821a304fd1840263b776425b1e61d6849e9037aa60974eb629bdc39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JSLIOLM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIGSOS8q6GTftyPgbTR%2FsS%2F8mFQfCsTGi8jAgludnOvG9AiBkj1lMGKlZ6xdOmK%2BIDE8EEexlOgUPtWgU9J15GeKr4ir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMUiC6QQEoNzb35cYWKtwDNZYsUOTPtkzKGlPBWCApm6kOck8TGBZKGSzUKB9hoWM0ztg9x4vva2k34t6cbm7%2BQxwBX9uY9tDBwoPCOz%2BMAQU0xXGF5wCjkvxPI2Oc2%2BoB40B21A6L%2BgimbCGI%2Bw9mlfWopvn6qHljug8TtPa6jUa3OyPh1f0bfNvfO%2FRoKWu2FOGMCPyf1H71CYSFlKFlA3F9V3eDXJUSN1wj9fsEASb%2BvkoAtSvThCIjBDGi8cETa9mKiaJNX20bvW4ivCYaAtbfPMKGqM%2FLz4wAHDuvshj6D8qYQDOkU0W5b8dttzExOWbuKl7qU5W1s%2F4x084tE4%2FpIpwHLAGB4KJnWnVmjbbn5O%2FA%2FBEYgJs4u6LV02Qh%2Bo4EFsq7j8YjtggjskYyolYaOL5Hb9xyS0d4eQB2T7M%2FsXgR0HGUGTEYKegOGTABf9mAWdl2J8Cvl5hc11ZgtZVM%2FcxjbeMeSJuHqEutDCmmHSnqiM7%2FT%2FhyOWhieJgnK8SjDEhqu388uFfXcm7wfz1%2BYkm0pMi%2BopVTox21tKQ6p6SqL6ldM4IVxvkQovRfUmCKtoUC9EEb15QcO52ZlolUfzUOtgZgFbePc%2FH99yoxoDkhoHbgFr3hRYuNkl%2BiWoUTUz5UtLEl5GYwqbKJxAY6pgFLtkG0JR%2B7L5iyFGq%2BVy4X%2FHYg6hvHkT1unzNYK2HRbnTJjLVlMvl5neoq9BPPb5LmpE%2F1lL4%2FOnn6dS5%2BkwjfqiGhZgnAdyOYDDo9IrVxIstHg%2F1kjHQJMo3%2FayfOkilydYZCs94taxT0GL68ctzkxZfEu8RG1hmhl%2BW5kNemqy6GIcIZTz%2BAC0kjZ2OazvBUOYqWeztZ86cTIrGo8ILEebdK%2FHB9&X-Amz-Signature=a73303e1c894da8675be816ab907daba71a31d0bf287285e3ab3947584b82868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## launch file

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

## add new files to `setup.py` 

if we add new files types to the package we need to update the `setup.py` and rebuild

```python

from setuptools import find_packages, setup
import os
from glob import glob

files = []
for full_filepath in glob('**/*.*', recursive=True):
    filepath = os.path.split(full_filepath)
    if filepath[0] != '':
        result = (os.path.join('share', package_name, filepath[0]), [full_filepath])
        files.append(result)

package_name = 'mbot_pkg'

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

**run:**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JSLIOLM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIGSOS8q6GTftyPgbTR%2FsS%2F8mFQfCsTGi8jAgludnOvG9AiBkj1lMGKlZ6xdOmK%2BIDE8EEexlOgUPtWgU9J15GeKr4ir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMUiC6QQEoNzb35cYWKtwDNZYsUOTPtkzKGlPBWCApm6kOck8TGBZKGSzUKB9hoWM0ztg9x4vva2k34t6cbm7%2BQxwBX9uY9tDBwoPCOz%2BMAQU0xXGF5wCjkvxPI2Oc2%2BoB40B21A6L%2BgimbCGI%2Bw9mlfWopvn6qHljug8TtPa6jUa3OyPh1f0bfNvfO%2FRoKWu2FOGMCPyf1H71CYSFlKFlA3F9V3eDXJUSN1wj9fsEASb%2BvkoAtSvThCIjBDGi8cETa9mKiaJNX20bvW4ivCYaAtbfPMKGqM%2FLz4wAHDuvshj6D8qYQDOkU0W5b8dttzExOWbuKl7qU5W1s%2F4x084tE4%2FpIpwHLAGB4KJnWnVmjbbn5O%2FA%2FBEYgJs4u6LV02Qh%2Bo4EFsq7j8YjtggjskYyolYaOL5Hb9xyS0d4eQB2T7M%2FsXgR0HGUGTEYKegOGTABf9mAWdl2J8Cvl5hc11ZgtZVM%2FcxjbeMeSJuHqEutDCmmHSnqiM7%2FT%2FhyOWhieJgnK8SjDEhqu388uFfXcm7wfz1%2BYkm0pMi%2BopVTox21tKQ6p6SqL6ldM4IVxvkQovRfUmCKtoUC9EEb15QcO52ZlolUfzUOtgZgFbePc%2FH99yoxoDkhoHbgFr3hRYuNkl%2BiWoUTUz5UtLEl5GYwqbKJxAY6pgFLtkG0JR%2B7L5iyFGq%2BVy4X%2FHYg6hvHkT1unzNYK2HRbnTJjLVlMvl5neoq9BPPb5LmpE%2F1lL4%2FOnn6dS5%2BkwjfqiGhZgnAdyOYDDo9IrVxIstHg%2F1kjHQJMo3%2FayfOkilydYZCs94taxT0GL68ctzkxZfEu8RG1hmhl%2BW5kNemqy6GIcIZTz%2BAC0kjZ2OazvBUOYqWeztZ86cTIrGo8ILEebdK%2FHB9&X-Amz-Signature=9bb97e16312d82adbc2a7ec7609a2da2cf08c412f8a05331621e5d0c7b28570e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running

In a new terminal tab while `rviz` is still open run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JSLIOLM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIGSOS8q6GTftyPgbTR%2FsS%2F8mFQfCsTGi8jAgludnOvG9AiBkj1lMGKlZ6xdOmK%2BIDE8EEexlOgUPtWgU9J15GeKr4ir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMUiC6QQEoNzb35cYWKtwDNZYsUOTPtkzKGlPBWCApm6kOck8TGBZKGSzUKB9hoWM0ztg9x4vva2k34t6cbm7%2BQxwBX9uY9tDBwoPCOz%2BMAQU0xXGF5wCjkvxPI2Oc2%2BoB40B21A6L%2BgimbCGI%2Bw9mlfWopvn6qHljug8TtPa6jUa3OyPh1f0bfNvfO%2FRoKWu2FOGMCPyf1H71CYSFlKFlA3F9V3eDXJUSN1wj9fsEASb%2BvkoAtSvThCIjBDGi8cETa9mKiaJNX20bvW4ivCYaAtbfPMKGqM%2FLz4wAHDuvshj6D8qYQDOkU0W5b8dttzExOWbuKl7qU5W1s%2F4x084tE4%2FpIpwHLAGB4KJnWnVmjbbn5O%2FA%2FBEYgJs4u6LV02Qh%2Bo4EFsq7j8YjtggjskYyolYaOL5Hb9xyS0d4eQB2T7M%2FsXgR0HGUGTEYKegOGTABf9mAWdl2J8Cvl5hc11ZgtZVM%2FcxjbeMeSJuHqEutDCmmHSnqiM7%2FT%2FhyOWhieJgnK8SjDEhqu388uFfXcm7wfz1%2BYkm0pMi%2BopVTox21tKQ6p6SqL6ldM4IVxvkQovRfUmCKtoUC9EEb15QcO52ZlolUfzUOtgZgFbePc%2FH99yoxoDkhoHbgFr3hRYuNkl%2BiWoUTUz5UtLEl5GYwqbKJxAY6pgFLtkG0JR%2B7L5iyFGq%2BVy4X%2FHYg6hvHkT1unzNYK2HRbnTJjLVlMvl5neoq9BPPb5LmpE%2F1lL4%2FOnn6dS5%2BkwjfqiGhZgnAdyOYDDo9IrVxIstHg%2F1kjHQJMo3%2FayfOkilydYZCs94taxT0GL68ctzkxZfEu8RG1hmhl%2BW5kNemqy6GIcIZTz%2BAC0kjZ2OazvBUOYqWeztZ86cTIrGo8ILEebdK%2FHB9&X-Amz-Signature=d8998b8cdb637e27c2376469bfb3d7d2345ef589765b89c0a6e8db2efc2859e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JSLIOLM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIGSOS8q6GTftyPgbTR%2FsS%2F8mFQfCsTGi8jAgludnOvG9AiBkj1lMGKlZ6xdOmK%2BIDE8EEexlOgUPtWgU9J15GeKr4ir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMUiC6QQEoNzb35cYWKtwDNZYsUOTPtkzKGlPBWCApm6kOck8TGBZKGSzUKB9hoWM0ztg9x4vva2k34t6cbm7%2BQxwBX9uY9tDBwoPCOz%2BMAQU0xXGF5wCjkvxPI2Oc2%2BoB40B21A6L%2BgimbCGI%2Bw9mlfWopvn6qHljug8TtPa6jUa3OyPh1f0bfNvfO%2FRoKWu2FOGMCPyf1H71CYSFlKFlA3F9V3eDXJUSN1wj9fsEASb%2BvkoAtSvThCIjBDGi8cETa9mKiaJNX20bvW4ivCYaAtbfPMKGqM%2FLz4wAHDuvshj6D8qYQDOkU0W5b8dttzExOWbuKl7qU5W1s%2F4x084tE4%2FpIpwHLAGB4KJnWnVmjbbn5O%2FA%2FBEYgJs4u6LV02Qh%2Bo4EFsq7j8YjtggjskYyolYaOL5Hb9xyS0d4eQB2T7M%2FsXgR0HGUGTEYKegOGTABf9mAWdl2J8Cvl5hc11ZgtZVM%2FcxjbeMeSJuHqEutDCmmHSnqiM7%2FT%2FhyOWhieJgnK8SjDEhqu388uFfXcm7wfz1%2BYkm0pMi%2BopVTox21tKQ6p6SqL6ldM4IVxvkQovRfUmCKtoUC9EEb15QcO52ZlolUfzUOtgZgFbePc%2FH99yoxoDkhoHbgFr3hRYuNkl%2BiWoUTUz5UtLEl5GYwqbKJxAY6pgFLtkG0JR%2B7L5iyFGq%2BVy4X%2FHYg6hvHkT1unzNYK2HRbnTJjLVlMvl5neoq9BPPb5LmpE%2F1lL4%2FOnn6dS5%2BkwjfqiGhZgnAdyOYDDo9IrVxIstHg%2F1kjHQJMo3%2FayfOkilydYZCs94taxT0GL68ctzkxZfEu8RG1hmhl%2BW5kNemqy6GIcIZTz%2BAC0kjZ2OazvBUOYqWeztZ86cTIrGo8ILEebdK%2FHB9&X-Amz-Signature=dd6e8bc36d2f5f7084d3760cba6c058fd4001d28a397ec78fe763698a8874f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JSLIOLM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIGSOS8q6GTftyPgbTR%2FsS%2F8mFQfCsTGi8jAgludnOvG9AiBkj1lMGKlZ6xdOmK%2BIDE8EEexlOgUPtWgU9J15GeKr4ir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMUiC6QQEoNzb35cYWKtwDNZYsUOTPtkzKGlPBWCApm6kOck8TGBZKGSzUKB9hoWM0ztg9x4vva2k34t6cbm7%2BQxwBX9uY9tDBwoPCOz%2BMAQU0xXGF5wCjkvxPI2Oc2%2BoB40B21A6L%2BgimbCGI%2Bw9mlfWopvn6qHljug8TtPa6jUa3OyPh1f0bfNvfO%2FRoKWu2FOGMCPyf1H71CYSFlKFlA3F9V3eDXJUSN1wj9fsEASb%2BvkoAtSvThCIjBDGi8cETa9mKiaJNX20bvW4ivCYaAtbfPMKGqM%2FLz4wAHDuvshj6D8qYQDOkU0W5b8dttzExOWbuKl7qU5W1s%2F4x084tE4%2FpIpwHLAGB4KJnWnVmjbbn5O%2FA%2FBEYgJs4u6LV02Qh%2Bo4EFsq7j8YjtggjskYyolYaOL5Hb9xyS0d4eQB2T7M%2FsXgR0HGUGTEYKegOGTABf9mAWdl2J8Cvl5hc11ZgtZVM%2FcxjbeMeSJuHqEutDCmmHSnqiM7%2FT%2FhyOWhieJgnK8SjDEhqu388uFfXcm7wfz1%2BYkm0pMi%2BopVTox21tKQ6p6SqL6ldM4IVxvkQovRfUmCKtoUC9EEb15QcO52ZlolUfzUOtgZgFbePc%2FH99yoxoDkhoHbgFr3hRYuNkl%2BiWoUTUz5UtLEl5GYwqbKJxAY6pgFLtkG0JR%2B7L5iyFGq%2BVy4X%2FHYg6hvHkT1unzNYK2HRbnTJjLVlMvl5neoq9BPPb5LmpE%2F1lL4%2FOnn6dS5%2BkwjfqiGhZgnAdyOYDDo9IrVxIstHg%2F1kjHQJMo3%2FayfOkilydYZCs94taxT0GL68ctzkxZfEu8RG1hmhl%2BW5kNemqy6GIcIZTz%2BAC0kjZ2OazvBUOYqWeztZ86cTIrGo8ILEebdK%2FHB9&X-Amz-Signature=59859920cc22c1d5a86d6beb7cb406854f5b69cf15f3618ecda375c7742fb465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
