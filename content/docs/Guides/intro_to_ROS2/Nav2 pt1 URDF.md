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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X27EKIC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDc8c5R8GcGLDURv4q6kzNd%2Bu3GKextYXiqxLRDr8I5MAIhAPTmTNV%2B8sTOU3yUmLVutdx3UXNclZsnZTea6XSOb9xrKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5Y%2F2UFiudGHKLJE8q3APkRjCIIAQGiU0NGn0YpPg2egkFKzP3i97THwLcEOic0d1uNNtSXZWc47uhqQ0pbbgVgVPf4Pm%2FDJDKMAk1IwQConHoG3ukmxhUO5jeleqo9xbZdPnZYX1DQV1z8NfxYtqzT07yRBfoTYko%2BIGHJznA6hwnWc0%2B2pyB07JtbDCav2b7Xn33dKosQnGU8fPSU0ypU6j4m3URLoLnL01%2FAU%2B5p7k2Y29zpvp%2BmTpX4WgbuAzV%2FATvqJ6iSm%2FE3yMgRdiNtyk%2BNOyoueja%2Fo2pEFw3Zp2%2F2e5CEVbsi5pao%2F2WXka3tRYRoFtyPL%2FLDI7u83%2FiVjj9kzbMBnSzpQITL%2BpLFHcVGbl12CWi5C1kNUbmy2b1zqKco0KcQcAEf%2FUyPX0tFgXA8ui8TXNH8FRbF8gFyneWxAZlT1Z3M8k2NXfroqy80IZutKCx0GX%2Bb%2BiNlPcQZdTUU%2FgrJJS7mZpdQhZ9U2G9W%2B%2FjdORrG5EGEbphiGBQkB29RBoxcs7fnTuBqpfhBDURPNE0psVD%2B7IognoImXQNdM08TnUVaNXMPD40cZD%2FtorbmyNTr4cPMuB4BkEEQKgPLCvXRHuCdJnEf5mvhPdAx0LYQnBQcBMdjdHGF92Oxp1IaJDRMHTuJzDhotDEBjqkAcFjZ07hqS%2B6CqYsOfosFKt2nosw04JqJP9oQeQKzRUVJSdYAHvj1RPpIcdwbjXYzDQKT2325TjyfpIRrQcV3lwIxJoirGFajR2xsrbyxOgG6xVkrVPM7cqTJNFxQtJusf3ESH%2F%2BEqp13D9KS2rbpY9Y21eWxDkCiDpQtfr0utOCBp%2BbZc0Y7gvk5SkdUZcU0YUhFqmt%2FmExi0XFGzw3M4u%2F2ZDJ&X-Amz-Signature=f6557d7825317a311164e506c78174dffcf5b1d48c4009d6d50e2010f2f59e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X27EKIC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDc8c5R8GcGLDURv4q6kzNd%2Bu3GKextYXiqxLRDr8I5MAIhAPTmTNV%2B8sTOU3yUmLVutdx3UXNclZsnZTea6XSOb9xrKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5Y%2F2UFiudGHKLJE8q3APkRjCIIAQGiU0NGn0YpPg2egkFKzP3i97THwLcEOic0d1uNNtSXZWc47uhqQ0pbbgVgVPf4Pm%2FDJDKMAk1IwQConHoG3ukmxhUO5jeleqo9xbZdPnZYX1DQV1z8NfxYtqzT07yRBfoTYko%2BIGHJznA6hwnWc0%2B2pyB07JtbDCav2b7Xn33dKosQnGU8fPSU0ypU6j4m3URLoLnL01%2FAU%2B5p7k2Y29zpvp%2BmTpX4WgbuAzV%2FATvqJ6iSm%2FE3yMgRdiNtyk%2BNOyoueja%2Fo2pEFw3Zp2%2F2e5CEVbsi5pao%2F2WXka3tRYRoFtyPL%2FLDI7u83%2FiVjj9kzbMBnSzpQITL%2BpLFHcVGbl12CWi5C1kNUbmy2b1zqKco0KcQcAEf%2FUyPX0tFgXA8ui8TXNH8FRbF8gFyneWxAZlT1Z3M8k2NXfroqy80IZutKCx0GX%2Bb%2BiNlPcQZdTUU%2FgrJJS7mZpdQhZ9U2G9W%2B%2FjdORrG5EGEbphiGBQkB29RBoxcs7fnTuBqpfhBDURPNE0psVD%2B7IognoImXQNdM08TnUVaNXMPD40cZD%2FtorbmyNTr4cPMuB4BkEEQKgPLCvXRHuCdJnEf5mvhPdAx0LYQnBQcBMdjdHGF92Oxp1IaJDRMHTuJzDhotDEBjqkAcFjZ07hqS%2B6CqYsOfosFKt2nosw04JqJP9oQeQKzRUVJSdYAHvj1RPpIcdwbjXYzDQKT2325TjyfpIRrQcV3lwIxJoirGFajR2xsrbyxOgG6xVkrVPM7cqTJNFxQtJusf3ESH%2F%2BEqp13D9KS2rbpY9Y21eWxDkCiDpQtfr0utOCBp%2BbZc0Y7gvk5SkdUZcU0YUhFqmt%2FmExi0XFGzw3M4u%2F2ZDJ&X-Amz-Signature=de60c0bb9a7378f2658982853242f1df70f3baf8c9cc2ac8954685c35d0c66bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X27EKIC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDc8c5R8GcGLDURv4q6kzNd%2Bu3GKextYXiqxLRDr8I5MAIhAPTmTNV%2B8sTOU3yUmLVutdx3UXNclZsnZTea6XSOb9xrKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5Y%2F2UFiudGHKLJE8q3APkRjCIIAQGiU0NGn0YpPg2egkFKzP3i97THwLcEOic0d1uNNtSXZWc47uhqQ0pbbgVgVPf4Pm%2FDJDKMAk1IwQConHoG3ukmxhUO5jeleqo9xbZdPnZYX1DQV1z8NfxYtqzT07yRBfoTYko%2BIGHJznA6hwnWc0%2B2pyB07JtbDCav2b7Xn33dKosQnGU8fPSU0ypU6j4m3URLoLnL01%2FAU%2B5p7k2Y29zpvp%2BmTpX4WgbuAzV%2FATvqJ6iSm%2FE3yMgRdiNtyk%2BNOyoueja%2Fo2pEFw3Zp2%2F2e5CEVbsi5pao%2F2WXka3tRYRoFtyPL%2FLDI7u83%2FiVjj9kzbMBnSzpQITL%2BpLFHcVGbl12CWi5C1kNUbmy2b1zqKco0KcQcAEf%2FUyPX0tFgXA8ui8TXNH8FRbF8gFyneWxAZlT1Z3M8k2NXfroqy80IZutKCx0GX%2Bb%2BiNlPcQZdTUU%2FgrJJS7mZpdQhZ9U2G9W%2B%2FjdORrG5EGEbphiGBQkB29RBoxcs7fnTuBqpfhBDURPNE0psVD%2B7IognoImXQNdM08TnUVaNXMPD40cZD%2FtorbmyNTr4cPMuB4BkEEQKgPLCvXRHuCdJnEf5mvhPdAx0LYQnBQcBMdjdHGF92Oxp1IaJDRMHTuJzDhotDEBjqkAcFjZ07hqS%2B6CqYsOfosFKt2nosw04JqJP9oQeQKzRUVJSdYAHvj1RPpIcdwbjXYzDQKT2325TjyfpIRrQcV3lwIxJoirGFajR2xsrbyxOgG6xVkrVPM7cqTJNFxQtJusf3ESH%2F%2BEqp13D9KS2rbpY9Y21eWxDkCiDpQtfr0utOCBp%2BbZc0Y7gvk5SkdUZcU0YUhFqmt%2FmExi0XFGzw3M4u%2F2ZDJ&X-Amz-Signature=68dabeac84376cd84a05f163e2a0a54989ee5a6eb67c1192a76dd1184682b644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X27EKIC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDc8c5R8GcGLDURv4q6kzNd%2Bu3GKextYXiqxLRDr8I5MAIhAPTmTNV%2B8sTOU3yUmLVutdx3UXNclZsnZTea6XSOb9xrKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5Y%2F2UFiudGHKLJE8q3APkRjCIIAQGiU0NGn0YpPg2egkFKzP3i97THwLcEOic0d1uNNtSXZWc47uhqQ0pbbgVgVPf4Pm%2FDJDKMAk1IwQConHoG3ukmxhUO5jeleqo9xbZdPnZYX1DQV1z8NfxYtqzT07yRBfoTYko%2BIGHJznA6hwnWc0%2B2pyB07JtbDCav2b7Xn33dKosQnGU8fPSU0ypU6j4m3URLoLnL01%2FAU%2B5p7k2Y29zpvp%2BmTpX4WgbuAzV%2FATvqJ6iSm%2FE3yMgRdiNtyk%2BNOyoueja%2Fo2pEFw3Zp2%2F2e5CEVbsi5pao%2F2WXka3tRYRoFtyPL%2FLDI7u83%2FiVjj9kzbMBnSzpQITL%2BpLFHcVGbl12CWi5C1kNUbmy2b1zqKco0KcQcAEf%2FUyPX0tFgXA8ui8TXNH8FRbF8gFyneWxAZlT1Z3M8k2NXfroqy80IZutKCx0GX%2Bb%2BiNlPcQZdTUU%2FgrJJS7mZpdQhZ9U2G9W%2B%2FjdORrG5EGEbphiGBQkB29RBoxcs7fnTuBqpfhBDURPNE0psVD%2B7IognoImXQNdM08TnUVaNXMPD40cZD%2FtorbmyNTr4cPMuB4BkEEQKgPLCvXRHuCdJnEf5mvhPdAx0LYQnBQcBMdjdHGF92Oxp1IaJDRMHTuJzDhotDEBjqkAcFjZ07hqS%2B6CqYsOfosFKt2nosw04JqJP9oQeQKzRUVJSdYAHvj1RPpIcdwbjXYzDQKT2325TjyfpIRrQcV3lwIxJoirGFajR2xsrbyxOgG6xVkrVPM7cqTJNFxQtJusf3ESH%2F%2BEqp13D9KS2rbpY9Y21eWxDkCiDpQtfr0utOCBp%2BbZc0Y7gvk5SkdUZcU0YUhFqmt%2FmExi0XFGzw3M4u%2F2ZDJ&X-Amz-Signature=a74546b8fd9a07334a4c607e580f90be01fa9296075f932775bf452fea8f6c35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X27EKIC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDc8c5R8GcGLDURv4q6kzNd%2Bu3GKextYXiqxLRDr8I5MAIhAPTmTNV%2B8sTOU3yUmLVutdx3UXNclZsnZTea6XSOb9xrKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5Y%2F2UFiudGHKLJE8q3APkRjCIIAQGiU0NGn0YpPg2egkFKzP3i97THwLcEOic0d1uNNtSXZWc47uhqQ0pbbgVgVPf4Pm%2FDJDKMAk1IwQConHoG3ukmxhUO5jeleqo9xbZdPnZYX1DQV1z8NfxYtqzT07yRBfoTYko%2BIGHJznA6hwnWc0%2B2pyB07JtbDCav2b7Xn33dKosQnGU8fPSU0ypU6j4m3URLoLnL01%2FAU%2B5p7k2Y29zpvp%2BmTpX4WgbuAzV%2FATvqJ6iSm%2FE3yMgRdiNtyk%2BNOyoueja%2Fo2pEFw3Zp2%2F2e5CEVbsi5pao%2F2WXka3tRYRoFtyPL%2FLDI7u83%2FiVjj9kzbMBnSzpQITL%2BpLFHcVGbl12CWi5C1kNUbmy2b1zqKco0KcQcAEf%2FUyPX0tFgXA8ui8TXNH8FRbF8gFyneWxAZlT1Z3M8k2NXfroqy80IZutKCx0GX%2Bb%2BiNlPcQZdTUU%2FgrJJS7mZpdQhZ9U2G9W%2B%2FjdORrG5EGEbphiGBQkB29RBoxcs7fnTuBqpfhBDURPNE0psVD%2B7IognoImXQNdM08TnUVaNXMPD40cZD%2FtorbmyNTr4cPMuB4BkEEQKgPLCvXRHuCdJnEf5mvhPdAx0LYQnBQcBMdjdHGF92Oxp1IaJDRMHTuJzDhotDEBjqkAcFjZ07hqS%2B6CqYsOfosFKt2nosw04JqJP9oQeQKzRUVJSdYAHvj1RPpIcdwbjXYzDQKT2325TjyfpIRrQcV3lwIxJoirGFajR2xsrbyxOgG6xVkrVPM7cqTJNFxQtJusf3ESH%2F%2BEqp13D9KS2rbpY9Y21eWxDkCiDpQtfr0utOCBp%2BbZc0Y7gvk5SkdUZcU0YUhFqmt%2FmExi0XFGzw3M4u%2F2ZDJ&X-Amz-Signature=1da69f4b79edf519731260e6d1c2e5e55df85b7ae988754d06ce9d71a08a3e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X27EKIC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDc8c5R8GcGLDURv4q6kzNd%2Bu3GKextYXiqxLRDr8I5MAIhAPTmTNV%2B8sTOU3yUmLVutdx3UXNclZsnZTea6XSOb9xrKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5Y%2F2UFiudGHKLJE8q3APkRjCIIAQGiU0NGn0YpPg2egkFKzP3i97THwLcEOic0d1uNNtSXZWc47uhqQ0pbbgVgVPf4Pm%2FDJDKMAk1IwQConHoG3ukmxhUO5jeleqo9xbZdPnZYX1DQV1z8NfxYtqzT07yRBfoTYko%2BIGHJznA6hwnWc0%2B2pyB07JtbDCav2b7Xn33dKosQnGU8fPSU0ypU6j4m3URLoLnL01%2FAU%2B5p7k2Y29zpvp%2BmTpX4WgbuAzV%2FATvqJ6iSm%2FE3yMgRdiNtyk%2BNOyoueja%2Fo2pEFw3Zp2%2F2e5CEVbsi5pao%2F2WXka3tRYRoFtyPL%2FLDI7u83%2FiVjj9kzbMBnSzpQITL%2BpLFHcVGbl12CWi5C1kNUbmy2b1zqKco0KcQcAEf%2FUyPX0tFgXA8ui8TXNH8FRbF8gFyneWxAZlT1Z3M8k2NXfroqy80IZutKCx0GX%2Bb%2BiNlPcQZdTUU%2FgrJJS7mZpdQhZ9U2G9W%2B%2FjdORrG5EGEbphiGBQkB29RBoxcs7fnTuBqpfhBDURPNE0psVD%2B7IognoImXQNdM08TnUVaNXMPD40cZD%2FtorbmyNTr4cPMuB4BkEEQKgPLCvXRHuCdJnEf5mvhPdAx0LYQnBQcBMdjdHGF92Oxp1IaJDRMHTuJzDhotDEBjqkAcFjZ07hqS%2B6CqYsOfosFKt2nosw04JqJP9oQeQKzRUVJSdYAHvj1RPpIcdwbjXYzDQKT2325TjyfpIRrQcV3lwIxJoirGFajR2xsrbyxOgG6xVkrVPM7cqTJNFxQtJusf3ESH%2F%2BEqp13D9KS2rbpY9Y21eWxDkCiDpQtfr0utOCBp%2BbZc0Y7gvk5SkdUZcU0YUhFqmt%2FmExi0XFGzw3M4u%2F2ZDJ&X-Amz-Signature=1f1e3b69e6e0038e5d0cc82e6b572176f38685349cd0160c92b00290a19a1322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X27EKIC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDc8c5R8GcGLDURv4q6kzNd%2Bu3GKextYXiqxLRDr8I5MAIhAPTmTNV%2B8sTOU3yUmLVutdx3UXNclZsnZTea6XSOb9xrKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5Y%2F2UFiudGHKLJE8q3APkRjCIIAQGiU0NGn0YpPg2egkFKzP3i97THwLcEOic0d1uNNtSXZWc47uhqQ0pbbgVgVPf4Pm%2FDJDKMAk1IwQConHoG3ukmxhUO5jeleqo9xbZdPnZYX1DQV1z8NfxYtqzT07yRBfoTYko%2BIGHJznA6hwnWc0%2B2pyB07JtbDCav2b7Xn33dKosQnGU8fPSU0ypU6j4m3URLoLnL01%2FAU%2B5p7k2Y29zpvp%2BmTpX4WgbuAzV%2FATvqJ6iSm%2FE3yMgRdiNtyk%2BNOyoueja%2Fo2pEFw3Zp2%2F2e5CEVbsi5pao%2F2WXka3tRYRoFtyPL%2FLDI7u83%2FiVjj9kzbMBnSzpQITL%2BpLFHcVGbl12CWi5C1kNUbmy2b1zqKco0KcQcAEf%2FUyPX0tFgXA8ui8TXNH8FRbF8gFyneWxAZlT1Z3M8k2NXfroqy80IZutKCx0GX%2Bb%2BiNlPcQZdTUU%2FgrJJS7mZpdQhZ9U2G9W%2B%2FjdORrG5EGEbphiGBQkB29RBoxcs7fnTuBqpfhBDURPNE0psVD%2B7IognoImXQNdM08TnUVaNXMPD40cZD%2FtorbmyNTr4cPMuB4BkEEQKgPLCvXRHuCdJnEf5mvhPdAx0LYQnBQcBMdjdHGF92Oxp1IaJDRMHTuJzDhotDEBjqkAcFjZ07hqS%2B6CqYsOfosFKt2nosw04JqJP9oQeQKzRUVJSdYAHvj1RPpIcdwbjXYzDQKT2325TjyfpIRrQcV3lwIxJoirGFajR2xsrbyxOgG6xVkrVPM7cqTJNFxQtJusf3ESH%2F%2BEqp13D9KS2rbpY9Y21eWxDkCiDpQtfr0utOCBp%2BbZc0Y7gvk5SkdUZcU0YUhFqmt%2FmExi0XFGzw3M4u%2F2ZDJ&X-Amz-Signature=3ce3cec488c0b2f5c9fef58f220c895b82c8f59a41fcbe8c2722f35da1e4b78f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X27EKIC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDc8c5R8GcGLDURv4q6kzNd%2Bu3GKextYXiqxLRDr8I5MAIhAPTmTNV%2B8sTOU3yUmLVutdx3UXNclZsnZTea6XSOb9xrKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5Y%2F2UFiudGHKLJE8q3APkRjCIIAQGiU0NGn0YpPg2egkFKzP3i97THwLcEOic0d1uNNtSXZWc47uhqQ0pbbgVgVPf4Pm%2FDJDKMAk1IwQConHoG3ukmxhUO5jeleqo9xbZdPnZYX1DQV1z8NfxYtqzT07yRBfoTYko%2BIGHJznA6hwnWc0%2B2pyB07JtbDCav2b7Xn33dKosQnGU8fPSU0ypU6j4m3URLoLnL01%2FAU%2B5p7k2Y29zpvp%2BmTpX4WgbuAzV%2FATvqJ6iSm%2FE3yMgRdiNtyk%2BNOyoueja%2Fo2pEFw3Zp2%2F2e5CEVbsi5pao%2F2WXka3tRYRoFtyPL%2FLDI7u83%2FiVjj9kzbMBnSzpQITL%2BpLFHcVGbl12CWi5C1kNUbmy2b1zqKco0KcQcAEf%2FUyPX0tFgXA8ui8TXNH8FRbF8gFyneWxAZlT1Z3M8k2NXfroqy80IZutKCx0GX%2Bb%2BiNlPcQZdTUU%2FgrJJS7mZpdQhZ9U2G9W%2B%2FjdORrG5EGEbphiGBQkB29RBoxcs7fnTuBqpfhBDURPNE0psVD%2B7IognoImXQNdM08TnUVaNXMPD40cZD%2FtorbmyNTr4cPMuB4BkEEQKgPLCvXRHuCdJnEf5mvhPdAx0LYQnBQcBMdjdHGF92Oxp1IaJDRMHTuJzDhotDEBjqkAcFjZ07hqS%2B6CqYsOfosFKt2nosw04JqJP9oQeQKzRUVJSdYAHvj1RPpIcdwbjXYzDQKT2325TjyfpIRrQcV3lwIxJoirGFajR2xsrbyxOgG6xVkrVPM7cqTJNFxQtJusf3ESH%2F%2BEqp13D9KS2rbpY9Y21eWxDkCiDpQtfr0utOCBp%2BbZc0Y7gvk5SkdUZcU0YUhFqmt%2FmExi0XFGzw3M4u%2F2ZDJ&X-Amz-Signature=7e71224b941e2fdff339c953513fc540ddb1ca51802a992b6c69bc5098630927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X27EKIC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDc8c5R8GcGLDURv4q6kzNd%2Bu3GKextYXiqxLRDr8I5MAIhAPTmTNV%2B8sTOU3yUmLVutdx3UXNclZsnZTea6XSOb9xrKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5Y%2F2UFiudGHKLJE8q3APkRjCIIAQGiU0NGn0YpPg2egkFKzP3i97THwLcEOic0d1uNNtSXZWc47uhqQ0pbbgVgVPf4Pm%2FDJDKMAk1IwQConHoG3ukmxhUO5jeleqo9xbZdPnZYX1DQV1z8NfxYtqzT07yRBfoTYko%2BIGHJznA6hwnWc0%2B2pyB07JtbDCav2b7Xn33dKosQnGU8fPSU0ypU6j4m3URLoLnL01%2FAU%2B5p7k2Y29zpvp%2BmTpX4WgbuAzV%2FATvqJ6iSm%2FE3yMgRdiNtyk%2BNOyoueja%2Fo2pEFw3Zp2%2F2e5CEVbsi5pao%2F2WXka3tRYRoFtyPL%2FLDI7u83%2FiVjj9kzbMBnSzpQITL%2BpLFHcVGbl12CWi5C1kNUbmy2b1zqKco0KcQcAEf%2FUyPX0tFgXA8ui8TXNH8FRbF8gFyneWxAZlT1Z3M8k2NXfroqy80IZutKCx0GX%2Bb%2BiNlPcQZdTUU%2FgrJJS7mZpdQhZ9U2G9W%2B%2FjdORrG5EGEbphiGBQkB29RBoxcs7fnTuBqpfhBDURPNE0psVD%2B7IognoImXQNdM08TnUVaNXMPD40cZD%2FtorbmyNTr4cPMuB4BkEEQKgPLCvXRHuCdJnEf5mvhPdAx0LYQnBQcBMdjdHGF92Oxp1IaJDRMHTuJzDhotDEBjqkAcFjZ07hqS%2B6CqYsOfosFKt2nosw04JqJP9oQeQKzRUVJSdYAHvj1RPpIcdwbjXYzDQKT2325TjyfpIRrQcV3lwIxJoirGFajR2xsrbyxOgG6xVkrVPM7cqTJNFxQtJusf3ESH%2F%2BEqp13D9KS2rbpY9Y21eWxDkCiDpQtfr0utOCBp%2BbZc0Y7gvk5SkdUZcU0YUhFqmt%2FmExi0XFGzw3M4u%2F2ZDJ&X-Amz-Signature=91c0b10f5ad9aeb30afa23c0765d241896127f3137bfc820485011260c66c86a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X27EKIC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDc8c5R8GcGLDURv4q6kzNd%2Bu3GKextYXiqxLRDr8I5MAIhAPTmTNV%2B8sTOU3yUmLVutdx3UXNclZsnZTea6XSOb9xrKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5Y%2F2UFiudGHKLJE8q3APkRjCIIAQGiU0NGn0YpPg2egkFKzP3i97THwLcEOic0d1uNNtSXZWc47uhqQ0pbbgVgVPf4Pm%2FDJDKMAk1IwQConHoG3ukmxhUO5jeleqo9xbZdPnZYX1DQV1z8NfxYtqzT07yRBfoTYko%2BIGHJznA6hwnWc0%2B2pyB07JtbDCav2b7Xn33dKosQnGU8fPSU0ypU6j4m3URLoLnL01%2FAU%2B5p7k2Y29zpvp%2BmTpX4WgbuAzV%2FATvqJ6iSm%2FE3yMgRdiNtyk%2BNOyoueja%2Fo2pEFw3Zp2%2F2e5CEVbsi5pao%2F2WXka3tRYRoFtyPL%2FLDI7u83%2FiVjj9kzbMBnSzpQITL%2BpLFHcVGbl12CWi5C1kNUbmy2b1zqKco0KcQcAEf%2FUyPX0tFgXA8ui8TXNH8FRbF8gFyneWxAZlT1Z3M8k2NXfroqy80IZutKCx0GX%2Bb%2BiNlPcQZdTUU%2FgrJJS7mZpdQhZ9U2G9W%2B%2FjdORrG5EGEbphiGBQkB29RBoxcs7fnTuBqpfhBDURPNE0psVD%2B7IognoImXQNdM08TnUVaNXMPD40cZD%2FtorbmyNTr4cPMuB4BkEEQKgPLCvXRHuCdJnEf5mvhPdAx0LYQnBQcBMdjdHGF92Oxp1IaJDRMHTuJzDhotDEBjqkAcFjZ07hqS%2B6CqYsOfosFKt2nosw04JqJP9oQeQKzRUVJSdYAHvj1RPpIcdwbjXYzDQKT2325TjyfpIRrQcV3lwIxJoirGFajR2xsrbyxOgG6xVkrVPM7cqTJNFxQtJusf3ESH%2F%2BEqp13D9KS2rbpY9Y21eWxDkCiDpQtfr0utOCBp%2BbZc0Y7gvk5SkdUZcU0YUhFqmt%2FmExi0XFGzw3M4u%2F2ZDJ&X-Amz-Signature=95216a1d22a434a51f2be9808a5cb1f98422b76367c9c334468dc9eab3412315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKU7PB2Y%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIC%2B9gqPH8gOJzdfy6MqLaxF4UhZ2ciqkzcCXUeImgrVgAiEAkllbrsOIgjEzKFTgEpRb1yYMPXTKjwD9tEoCHaYryOQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjj3m8uK4XtbW5EBSrcA2JkWhjQ8%2BYhwEAnXo6G83Oftss9GyXVwFRTw%2BKqGUv%2BLS%2BbwjDoO1fejpXO1SZeeBsoZmYCPWuZu04Zi0%2BUVZUOQScwOhkKUzqctApKKiXbGyeLNTQ7S8c3ur6esymNEEBpJ7gLLoQGMwe0eko8v1l%2BneIlLe40%2BrKrNVkAkthFlsEcGVFR3WnXUyP%2BYTv7ekGVN4GKQmW7G7TXg3%2BZly7Brq7c48Uk11nVZe2fVK4d9K8%2BBTtoAalnSncC0dBWBiVJvBLhMMsdq3n0IVLx7%2BMg%2BKhOPOkOBduPriurIK9ByNBn5jtYGXh2NDdlzwbYgiPOBMJ0Brh%2FYcDfdbwEx9azM5uXXBewIHyWoHCTaueiFAImZKHLGh7BGbG6FdqvIIerQ5UodjUsa5Y%2BbLRuKt%2B845RL13WuUYvFiXMYKUHBfP2TnX3e0%2FQYOHw0HwEVjb8tMYdxdtX8UT3acWguktDL13FhYFhbhzyOADyFc%2FdzcZn7nCEG5HKhKdA8o5rm1dSKaR19GgQElkieCUCvSyw1ej%2BNbeNgHwospO5BzejZ6mRboG8TCuLRk%2BB9HJlJFP6S1kWzgRqTEgOiiJUrbABtsXqorppxq7xurxQVqApwFRq642%2BNQi8HG72lMPai0MQGOqUB%2Ff3Fcz0qhcYSZr6UHlCJu1Hi3%2BHqpqwv%2BK4NONKmcUg8Y9AWZl7kvxfEqFr%2B4Uk1jj37uKQ3if9ol3mSV%2F4s%2B1SZV1wXKOepJK18dyMHsOOV%2FgGWGviDfHCdu8yN1mt4Z2WkiY0eaMnF2DUroUGI%2Fg2bwPrITA99RSYVZWIaUA3KHV1eZOWYeQ%2BRZMFBxjhsqx1N2XNLxNEYHammJppjsz2MgO%2B0&X-Amz-Signature=77d365c556238c7f6c212fdd8aec35c885e75131d3229dd19ae0052a1fa70ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSZ4J47%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCmeqStMeQTXuXBGQNV6hh4mKy%2FcMsGgkcYtxymi%2BBz6wIhANyjgOTwsCyGDOkjhXQc17svh7n%2Ftdtj%2BsMq1r0QDrIMKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYKyj7wBJam3fxZVEq3AOphTnp6%2FbW0v87%2Ba2xWg%2BngnDJL3Rnxhfel1ztKO3%2BPKO8aZYGv58EPyseWVeixscXSSjGRlMe4DafWGSfEByHqDalvn%2FHCSPTeWjSCa5xLKJqIi0U0nuuj7qsBZXGXZy1IJVnDXIxgHmxDuCNBQLH3I2AYvfyqS4DioBkykw11Ly9%2Ftoi6yQ0AE1FLZynUKUag2gjAwPU2Z5sqAZ9yx2OMu%2Fe67u1oOFYsSGWXSpfyTvCRr0ryHG%2Bl9FwwMvHxUvkDNZbMQpcO62%2FmCC%2BKi0sdn0idcNXfzDUcVzDtapMuzAdLGsNDgAnQsycDFyZxCHMAxuHWFbkKCFaC22BtVa1EW3YXKLTCniemMARTQ7c6wNEZ7qX3wo4BX%2FCLOomjbf1wRnR6Iw6nG1UMCtcjcBe20qB3VQf4VeS%2BpNLWdoqXtmS84%2FhSEZhRAXiJHU5LYqRuHl1byDi2aT5NTGFykP%2Fcia5KX5SxaYqS3n3jgBg8iXqBq4uqwj6HHFJNiNq4dibvLK5%2F5VphxrlYuspodGEsiEfFuZeuYyV%2Fea7bzgmBfZ377pSKCR6sjv1JjtY1c2sSVwOdrWVxMMJ50GCJ5nrzqT2rbyp2mR%2Fi6NaIiONFfJL%2FlQ7GpCJgZrGxzDeotDEBjqkAS3J%2BXTaV1Yyj%2BeAY%2FxwzKaSzkVjtHykVnSBZJAjEoNFVVmo19vyyjkWRRG%2FbHXmJRUt0gBKu%2F7iiI7vv5ZG%2BzoxOaPz6vdZetiitF8Oq4x8Mq3wZD8fCRjKRWZMEsWMhrLXMS8RvlrLsaSRgxzCMJoitlhc30Tt76G5iWT2anBxYQK%2FUnQ7LGgmS%2FlYIPIdCHPf9xVhblsqbgkjyDPWytIgvHZI&X-Amz-Signature=ac4e1214c1ac55c7e316c6301c6baef521ff68bf7a081b30249e19ca1c488793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPLUALQK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCSWLO%2BB4sOLko%2BogNaA4rF2vCrjK3XlQP7hlOKpG8mywIhAOrqrWBjpq2HUVwg6%2F4ZLDhH3VJ5W61P2rAo025tzLjKKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPYQ8FBBrivR0nBdkq3APgJ58zWKAXPQtqKJTSPQmMwG97D8PwYAzUscvVEqT8lz1URDHyF3YmfwStJxvkNmiqb7xTWS3K409Fnd0%2BbgrGKrry%2BPhgd3R9xlKGRvTjLz9KPHAlbOTzVMxYCQzU0BA9axr4CUY3vhoD2o%2FfMinHMCNUGe1vM8zMs9JEpojFqmy9pw7zBewFi4tQctkc%2FtAg9zpHVFD9U8Wv1oBC0L%2BPHJlIDMxkevZ7wOYl70%2BabR4Z1Lc%2BM%2BeD9mY4eaJsyl6ZFqcVSCWKzlx95w2FPuDpGWj8Wi0LgmegMEDqH6coLmyvuti5Cj%2BGRtczgulWFNZGljF%2BxtyHFYDMXT9Fhl0gghUrMSRPpi5QNMVlViCYj0FY7HROpuBEibt78B02IoigYmqWWL0cB3uprd%2FI%2Bx1u18T7DWhQbsfQMU1hxtsC1FAYjx6b5oqR2IZb3xcJsVJvGuPAFshWT3RLBAYes2X6YlmLJNqiMrH8LnUSbpB6%2B5gpt0Maz%2F%2BzLQjhUC%2B0onWYQj7SivUK0mGoG3EEqFiWF1vl1%2F6T2jKF3ogXo2oDMo%2FFtS1c6AiV%2ByRMAPwb8XWo0L6hXh5h17jE8%2F76Z8n1lljPvQWthW2Zcv2vfbejgbGLH7oXjUA1qyoebzCWotDEBjqkAVgGEcUczV%2F4vYpQlns7LtIYzyTilSNVOEwwR%2Bxe%2F7B0iKBpdOmvp9lu%2FPr2OSMORA%2BekOyXm75UfNMRKjkmNu2LQ4MdWd7zhL9Yn6mCo16nSfu3UfGIymCFBATUpLwyCNwK9z5W4OnZ61KXCAfss17jKPHvA4sadXTW5SbPnrgyyPlh%2B5hJhFL2q8HRiJLchl2aNHlGGb7t0z%2F22NR8C9txx4so&X-Amz-Signature=a19359f214456e116702d69759b544504a8079056abd6351ad1543e91d7b615d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X27EKIC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDc8c5R8GcGLDURv4q6kzNd%2Bu3GKextYXiqxLRDr8I5MAIhAPTmTNV%2B8sTOU3yUmLVutdx3UXNclZsnZTea6XSOb9xrKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5Y%2F2UFiudGHKLJE8q3APkRjCIIAQGiU0NGn0YpPg2egkFKzP3i97THwLcEOic0d1uNNtSXZWc47uhqQ0pbbgVgVPf4Pm%2FDJDKMAk1IwQConHoG3ukmxhUO5jeleqo9xbZdPnZYX1DQV1z8NfxYtqzT07yRBfoTYko%2BIGHJznA6hwnWc0%2B2pyB07JtbDCav2b7Xn33dKosQnGU8fPSU0ypU6j4m3URLoLnL01%2FAU%2B5p7k2Y29zpvp%2BmTpX4WgbuAzV%2FATvqJ6iSm%2FE3yMgRdiNtyk%2BNOyoueja%2Fo2pEFw3Zp2%2F2e5CEVbsi5pao%2F2WXka3tRYRoFtyPL%2FLDI7u83%2FiVjj9kzbMBnSzpQITL%2BpLFHcVGbl12CWi5C1kNUbmy2b1zqKco0KcQcAEf%2FUyPX0tFgXA8ui8TXNH8FRbF8gFyneWxAZlT1Z3M8k2NXfroqy80IZutKCx0GX%2Bb%2BiNlPcQZdTUU%2FgrJJS7mZpdQhZ9U2G9W%2B%2FjdORrG5EGEbphiGBQkB29RBoxcs7fnTuBqpfhBDURPNE0psVD%2B7IognoImXQNdM08TnUVaNXMPD40cZD%2FtorbmyNTr4cPMuB4BkEEQKgPLCvXRHuCdJnEf5mvhPdAx0LYQnBQcBMdjdHGF92Oxp1IaJDRMHTuJzDhotDEBjqkAcFjZ07hqS%2B6CqYsOfosFKt2nosw04JqJP9oQeQKzRUVJSdYAHvj1RPpIcdwbjXYzDQKT2325TjyfpIRrQcV3lwIxJoirGFajR2xsrbyxOgG6xVkrVPM7cqTJNFxQtJusf3ESH%2F%2BEqp13D9KS2rbpY9Y21eWxDkCiDpQtfr0utOCBp%2BbZc0Y7gvk5SkdUZcU0YUhFqmt%2FmExi0XFGzw3M4u%2F2ZDJ&X-Amz-Signature=22dd99948b3ef6ede8ded6f72cd17b2ed3955375ad5612581b6035cec806bf3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZ5EMSK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCdYpAG0uwTk6DarXOtSZqviJ5r0KsrlPrb9s4UgIan2wIhAORsrVy4saemWLrxXrEBZ54Rvbz83%2Bd%2BCVxIul2NngJ7KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2xGrfkNsNu2KW%2FpIq3AOK9z6%2BoPsa4JcK4qBmnfKEeXjml8YHwUFj8u4EWIYDYbx2vuGzBxlFYc2k2BL4k7ZW9J9wJosoFCrgAOc6TChZx%2FOrlkTeM19Mx%2FrQ9uaRuxhh85Hh5G1wky9sr0aD6wSx0xlsMVHbBN833GZIvMSCECnObIUfK8XnERL%2FLEQFu8INIJ94BsuIbof%2BbvAzWALAMgqqjtJtiGWG4T0UjgQBsPYRZ2jcGmtftxQNoDkjMbGe9Y3AARr594qXMdZp0MMBi6iMBLhagNdt%2FEX3dBAzhn6CaOK%2B1ztlTuADEFSRGMUeU9xf%2FzxHTAEsGRRwbFLYdvS%2B9iDnMqpTb3ggea9GkH0wir4fue%2Ft51DxXKewidP50GA6G0r2I8qgpAXdNIsVtDMTFwkeOJqL0626CjVNBi%2Be%2BoilhsOL6nr4um4r5zSuJfjDMsKfavXQ0C3il7TkTY84aCj%2B%2F60dY5nJlzvUV6%2Bhrjd798DOpYlTb9qIxquoxGdfSMrXDQGvxNG3RxzeVOt3JGj0CwiREHO1bSJdQx%2BiVd5%2B2xAnL9zndZiDgG%2FawT1Aw88qHT6%2FtvR0wb2BkdcCkAPhel4tXloBI9KqrklYok5X2fRs%2BDQq4cybn84Q1MR6LGl0c6ITuTC1otDEBjqkAUENt541HTPFCiFfJZv5LnlU7a0kSiYR3i0jskEuRmfVmQQijF5wj6jXc5luSP0mQ6RuQhouHgpMlNsgiKyPuG%2BMeGehjFqAyVfUdNWxFaMat66gJ48EunnTDpZNIu2KM71ow2D9yCmBy30OmFjX5TOgr7mVkFDMdHC8OE86fvtfEHiI4auO5EmciUZd1rMmV1y1ERO8VMBPFsV0bTg20metJxGH&X-Amz-Signature=00023859056a7387bed6a7f0bbc00798d665241c23463079eb028fc431252f27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X27EKIC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDc8c5R8GcGLDURv4q6kzNd%2Bu3GKextYXiqxLRDr8I5MAIhAPTmTNV%2B8sTOU3yUmLVutdx3UXNclZsnZTea6XSOb9xrKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5Y%2F2UFiudGHKLJE8q3APkRjCIIAQGiU0NGn0YpPg2egkFKzP3i97THwLcEOic0d1uNNtSXZWc47uhqQ0pbbgVgVPf4Pm%2FDJDKMAk1IwQConHoG3ukmxhUO5jeleqo9xbZdPnZYX1DQV1z8NfxYtqzT07yRBfoTYko%2BIGHJznA6hwnWc0%2B2pyB07JtbDCav2b7Xn33dKosQnGU8fPSU0ypU6j4m3URLoLnL01%2FAU%2B5p7k2Y29zpvp%2BmTpX4WgbuAzV%2FATvqJ6iSm%2FE3yMgRdiNtyk%2BNOyoueja%2Fo2pEFw3Zp2%2F2e5CEVbsi5pao%2F2WXka3tRYRoFtyPL%2FLDI7u83%2FiVjj9kzbMBnSzpQITL%2BpLFHcVGbl12CWi5C1kNUbmy2b1zqKco0KcQcAEf%2FUyPX0tFgXA8ui8TXNH8FRbF8gFyneWxAZlT1Z3M8k2NXfroqy80IZutKCx0GX%2Bb%2BiNlPcQZdTUU%2FgrJJS7mZpdQhZ9U2G9W%2B%2FjdORrG5EGEbphiGBQkB29RBoxcs7fnTuBqpfhBDURPNE0psVD%2B7IognoImXQNdM08TnUVaNXMPD40cZD%2FtorbmyNTr4cPMuB4BkEEQKgPLCvXRHuCdJnEf5mvhPdAx0LYQnBQcBMdjdHGF92Oxp1IaJDRMHTuJzDhotDEBjqkAcFjZ07hqS%2B6CqYsOfosFKt2nosw04JqJP9oQeQKzRUVJSdYAHvj1RPpIcdwbjXYzDQKT2325TjyfpIRrQcV3lwIxJoirGFajR2xsrbyxOgG6xVkrVPM7cqTJNFxQtJusf3ESH%2F%2BEqp13D9KS2rbpY9Y21eWxDkCiDpQtfr0utOCBp%2BbZc0Y7gvk5SkdUZcU0YUhFqmt%2FmExi0XFGzw3M4u%2F2ZDJ&X-Amz-Signature=84c1bb2d89b6c9cc74f0a315fccfcc0645c49e2bef5a45658f07a6745131971b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUMMNQPT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIAgyh8xf%2F5mXd0KXG%2FIqEiW4uRnjofLcTfilgWBG7oNIAiEAiKvv9q3MTbrnOcKI9hOCJJPg0OCdeaKjN7Sr5aBQfLkqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6n7dC%2BWb3htgGtcyrcAzMItIDTxF7el5sLxiptRAXGXH1M1mYFkmeq3CuSR2IR4GUL6VXsDTtdF2AWoVSi4XqNDVFEW0En7PXUFyXiZ3Q96k2XzwifMjWavTyuprMcpHGN%2BCJf%2B7%2FHrLUvmQw37m5BGU50RtTdqxAoDpNzEGB80s4S8hdg5j1BgNOUxPBGtNu0CsBvHxQMCX3F5d0mEtnN8u%2Bbb2yMV1HA3WLhR1p8lL1YO8lXBLhCJdINMCZRlCeQQZvxgf18ZhE22NqnCVIgYPQhV3HEelkniAEJEbBRQZuheagWAU7CmV4QugdG6X6%2BCcygSvcwwQhkBcPVCie4N%2BFrxi4%2BOPOfHmrnA1aCKilNbV4PMDLn83kbO0Ua3sOZkcIoPH9twpg7xPxPTsH0biWx17DVh44RAX3hIHdfUEj3WBuEiK%2Bf8GDRocgzGc0ERtV6TT7fjCC38nhPtUWdswyaeTb2Y0tHnM%2F7GR7%2Br28%2F%2BcuSoLPUqyeKq%2FzlFNnEIDi4xkra98%2Bi%2BPvP85MqlNGO96DVCzCa4zb%2FA5ZW5aiVJY3MaFsLyXTiFbx7KJkQSMJDqRRldjI0TF194kqnSozqtjPTjjmIOGABde6LfAA%2BTFoDdh40DLxW7iMIucaGTdMjdb5onPcoMLui0MQGOqUBmyJnFEtM1nlTK09sj57fwH%2BqINHydVLm4gj5a11Hib%2FcN1MoUnj54eRYlIJ55qwLNxj2c37O1er9wIuG9csRLtQCzC2KlukGkleMEGgQo%2FOgVbr4RJBvGVUS3cODRiEHpkblIOgo7l67b%2BlUWvjA%2BgJFmRcFtz4qvcM0zSLTr1miRKaTECKjLD20PRuQgVSKGrb2if4NjHcC%2B8ynhcRmzfIpAA%2FF&X-Amz-Signature=df459a4624c812890196111ef5bca3385d0d1fbb93c55d2d546617e670bfe59b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X27EKIC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDc8c5R8GcGLDURv4q6kzNd%2Bu3GKextYXiqxLRDr8I5MAIhAPTmTNV%2B8sTOU3yUmLVutdx3UXNclZsnZTea6XSOb9xrKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5Y%2F2UFiudGHKLJE8q3APkRjCIIAQGiU0NGn0YpPg2egkFKzP3i97THwLcEOic0d1uNNtSXZWc47uhqQ0pbbgVgVPf4Pm%2FDJDKMAk1IwQConHoG3ukmxhUO5jeleqo9xbZdPnZYX1DQV1z8NfxYtqzT07yRBfoTYko%2BIGHJznA6hwnWc0%2B2pyB07JtbDCav2b7Xn33dKosQnGU8fPSU0ypU6j4m3URLoLnL01%2FAU%2B5p7k2Y29zpvp%2BmTpX4WgbuAzV%2FATvqJ6iSm%2FE3yMgRdiNtyk%2BNOyoueja%2Fo2pEFw3Zp2%2F2e5CEVbsi5pao%2F2WXka3tRYRoFtyPL%2FLDI7u83%2FiVjj9kzbMBnSzpQITL%2BpLFHcVGbl12CWi5C1kNUbmy2b1zqKco0KcQcAEf%2FUyPX0tFgXA8ui8TXNH8FRbF8gFyneWxAZlT1Z3M8k2NXfroqy80IZutKCx0GX%2Bb%2BiNlPcQZdTUU%2FgrJJS7mZpdQhZ9U2G9W%2B%2FjdORrG5EGEbphiGBQkB29RBoxcs7fnTuBqpfhBDURPNE0psVD%2B7IognoImXQNdM08TnUVaNXMPD40cZD%2FtorbmyNTr4cPMuB4BkEEQKgPLCvXRHuCdJnEf5mvhPdAx0LYQnBQcBMdjdHGF92Oxp1IaJDRMHTuJzDhotDEBjqkAcFjZ07hqS%2B6CqYsOfosFKt2nosw04JqJP9oQeQKzRUVJSdYAHvj1RPpIcdwbjXYzDQKT2325TjyfpIRrQcV3lwIxJoirGFajR2xsrbyxOgG6xVkrVPM7cqTJNFxQtJusf3ESH%2F%2BEqp13D9KS2rbpY9Y21eWxDkCiDpQtfr0utOCBp%2BbZc0Y7gvk5SkdUZcU0YUhFqmt%2FmExi0XFGzw3M4u%2F2ZDJ&X-Amz-Signature=a45f21dbf74d1f41c7e2d5c6369a75204da7bee2ba08326cfe1adc5f3f565775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY3O55WO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIGiWhH%2BjC4lngMt6YgZ2lXqNXDLP1qlvb3PnfeIgWZYUAiEA%2BTDP3m%2BUrHR56o9ZDa8jHQbugEG2TqwSgD3IogrFKJEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCrfnAfci%2F%2F9pEZjCrcAxvBKtqASoOR6I9vWQrK0aTA4h8sGCiv%2FsGtYJIbdAKPHjGQPCyVohlBZKVoD7ibcPLwxC%2FojLcjFePU6posPDHS1xpCXXmk5CkZSsii117%2FWhpyazJ4JwJjsrZBHFvuycjYPEjaFTP%2BBhRUcqp0o5TmCv4sn%2FxdRxziIZGRxnSFwyw5PZZsrOiyHuQ%2BdzMmW%2FGRw3CZ1cAL8X%2FeYTpYHEN7HDPJTx9jgPeTSEr3yUAGGAgsPgZZqyC1OBLZuqpEVakAEdJ6ttix9fTcyYJeW%2FtILqiPxqtvq6r1XaBn9FdSOMCC5PxRmUeZ%2BLRvQppgY3UfcnL50rgGmOhJYlAYp7kyd7LtbkDvjXSpiSNy6DwE0sX47YDa6W9w3d8KCk3i0wUOuXB%2FDbOze8Xgp0Ou1T6HMBZUg1oA0FFjaJ9xLzTN9TKK6TOt5nh1a4J4IL%2FPZ6EFe8y%2FBV2ZiB%2Be8oC48PmB9Jp0E8ltneyGOd6y8Qtf6PF3vUa6P291wd8g4mgyfjGX5qKtZhBCSzzA9irC78DiJsakng1zipId8yKDPgGfXASCJJ%2BOkECDzFcRphmG4e9v78EHe2CBSaJAjJuS8T9Fmg1AuIeTWXKKfl%2FcOOM1xhA1anBI247gC5bXMISi0MQGOqUBsfK5Wuj1FVirPGiQ2rvEnEUTLkfYaXAVF09yGGkcnNrJG8w1R6oEQCpKVHnJOuYO%2FXtFokq0L7m%2BhY3w68t6ZUwZNMRtIp2hq2lGik7FKQU8CDTX7wCwFfFLFaqLyrMIcQB8wrmO%2FK7bBHlbR5I9WNC0%2BGGHa2xz0Ca8YyzPCnKVrdRi6n4muejreAwriGtPobUZ3YbAjy3wmSrWc%2FSVBmOmkEz1&X-Amz-Signature=8285b269c3ac18ac3cf98fb9e8b45b77ac0a5a1d2b27606049365ff93aad29a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X27EKIC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDc8c5R8GcGLDURv4q6kzNd%2Bu3GKextYXiqxLRDr8I5MAIhAPTmTNV%2B8sTOU3yUmLVutdx3UXNclZsnZTea6XSOb9xrKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5Y%2F2UFiudGHKLJE8q3APkRjCIIAQGiU0NGn0YpPg2egkFKzP3i97THwLcEOic0d1uNNtSXZWc47uhqQ0pbbgVgVPf4Pm%2FDJDKMAk1IwQConHoG3ukmxhUO5jeleqo9xbZdPnZYX1DQV1z8NfxYtqzT07yRBfoTYko%2BIGHJznA6hwnWc0%2B2pyB07JtbDCav2b7Xn33dKosQnGU8fPSU0ypU6j4m3URLoLnL01%2FAU%2B5p7k2Y29zpvp%2BmTpX4WgbuAzV%2FATvqJ6iSm%2FE3yMgRdiNtyk%2BNOyoueja%2Fo2pEFw3Zp2%2F2e5CEVbsi5pao%2F2WXka3tRYRoFtyPL%2FLDI7u83%2FiVjj9kzbMBnSzpQITL%2BpLFHcVGbl12CWi5C1kNUbmy2b1zqKco0KcQcAEf%2FUyPX0tFgXA8ui8TXNH8FRbF8gFyneWxAZlT1Z3M8k2NXfroqy80IZutKCx0GX%2Bb%2BiNlPcQZdTUU%2FgrJJS7mZpdQhZ9U2G9W%2B%2FjdORrG5EGEbphiGBQkB29RBoxcs7fnTuBqpfhBDURPNE0psVD%2B7IognoImXQNdM08TnUVaNXMPD40cZD%2FtorbmyNTr4cPMuB4BkEEQKgPLCvXRHuCdJnEf5mvhPdAx0LYQnBQcBMdjdHGF92Oxp1IaJDRMHTuJzDhotDEBjqkAcFjZ07hqS%2B6CqYsOfosFKt2nosw04JqJP9oQeQKzRUVJSdYAHvj1RPpIcdwbjXYzDQKT2325TjyfpIRrQcV3lwIxJoirGFajR2xsrbyxOgG6xVkrVPM7cqTJNFxQtJusf3ESH%2F%2BEqp13D9KS2rbpY9Y21eWxDkCiDpQtfr0utOCBp%2BbZc0Y7gvk5SkdUZcU0YUhFqmt%2FmExi0XFGzw3M4u%2F2ZDJ&X-Amz-Signature=3ca733561bdc10934dedb8853ea48c5e9fa749c4664b3e4ddf79cd53bbc9fe9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK3FJF7B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD%2F18gg%2F33z6CEVy3P6aSicoU7fP0zisXkFeXx0iHBsrQIgF9fR8bsHONuMGgPkkRbMjO%2BxV9Dp3rAMJ35WpxkxmpoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL29WtxRt3XVGGgNXSrcAwL%2Bpwx4ew3N5cy%2FaRUMcftxQ5LF0KE6QMgHVjbX75nj6DEfx3ronRduPlouVaHTFeGZLW2sDSBsevecrsrKl1AOVsWuVJZsSnu3iLufbVqGhm8ba4YPfHLcUy9ibcreWzcOEdapNbtfcxpQWL7EnXgFJMbEJmTZc2JdcYCW5gr4ZLJ%2F46eofB%2FWdt%2FNCuc2u0oAOMGPcIsl%2FLMXje0U8y%2F7DCYWEZHgJgFJ7M77oCG1oY%2BpC5VuiNQSKEq%2Bgk4giPKPxomZKPjdXB1vRXHTx5qw%2Fr0DGF0tjXJ0vNcw7MFsaxAOWeAr6CD%2BobTV4fsaSrtChxoPieQy5OwhsDjYV7sYRBZdFp%2F5j8i%2FgOD8%2BQ58c13d0BtQAaJpXUSgo%2BOn6wq5kTRGuf7z%2BbC0gMWFxEIG5HmKTFdFIJqCpjjBFErOjWR7D94pVGEuNpyBq4tv%2BJKR7eCJcm%2BL2hUjsP5Zhcg8qACeBUW1mhiHzPNu6MHodhBf3AN89up9T5ASATRNc0d6nm%2BfSu1xTgoRTmS45SOw0ODjVj2IreXjBCCNttNWtUiS0h%2BGG5AxW8jZJpx%2BVb2%2BGsQAWOOjBdpbHfBdT%2BoYoz7g%2FFoTPwpv8GMwwX6EvDnZn0fakjw5N9maMIui0MQGOqUBKzdcDr1%2BSAdonRS13dzof5LFHssS0W4Yb8dRIM1lsPCHeerutzt5HTzu%2FnBWWHzR%2FnYKI2yR4Q6ONgBV7mwC5ZGAgeySezjDB5Js50JsPbdaHRfCqXKx3w1Tkbhj%2FFFCNHhsMl%2BoHY9eIl%2Ft%2BX7lw2HAcXSyMAtjb0D7o7gXVnOf1DNKtD2vFKHw6uLcuu3aUMP95aubGmW2IJggUWNgDhcS8Gau&X-Amz-Signature=50ff840be898cf6ad9cfa51afd2e4f6c8b969be266169ebcc511c032eb035c21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VADECTYO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIA077jsBveRQRHBXb9eMgiMB3P%2Bg6ktDeV3%2Bk3wO%2FOpQAiEAsJE88Tlaie7bAb6B1DDG4J8U33ilp5mNB5HbQOReNUEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkdubkUrMyk9piRbCrcA8qOi3yLY7x98V7Qef2Tm6AGoHawc5ldoRbtWOj1soMYN3Us%2BznLvqUXNtFBB4dZwJEAokzRKxu03l%2FLfVFqXKvxXLrBBnflW%2BpUUdo2dBw0qSiAlOjJRxinh1bx5mJY%2FeGrIedOmg5NbZSwyhSAwRGcq3EVucAL4kulA8Nh85jVmB01%2BmKcIQAxaRz%2F5%2BzcrXxD54Zvc4sgbmpGN32RsG2gTPpNAsYkBVXTXN9g7fRh2kOCZLNPr2bpMRMgRUqiW9M0PHp46ONe01Z%2Bg%2FHS6BrnRMIBAhciAwsj1Bs77fQqTPq%2FguA2xYDKBtMGNq%2FN1NPcP4%2FybkmkRD4P4POwT%2F%2FFa25myltbCHgJP8AO2QcUWc74QsCBIoM9rx6YpYNxxRkh%2Fi8Un55TGegvaYPPelLtPWGvVT1TQuzILrVyBE7E1fDjVyMng%2F2j4dt%2FGCz4CDgeEgv0htOImUK4AQuX7fvxLYuxXoRKyrDyrNCizDa2GtqQX2FTzqBLdbnjLzHTY2dYL0%2BuE9owuITDUha0wD7j9fUqMA7JERzCcj2yF6eyzowRowh464MQNsIEYZzURpsz4cUUcAXExBao%2FvHkoDGFvSjVtfyuRkUfS8iH20zGmB0b01huDt%2FE2a8yMISi0MQGOqUBAkSh6psTjx13Hh5Enalg5Lyl9aas2CP4m4UGXYhFPNdf64VU4rityq%2B4G%2FnLsMvuBHqAMQY4QN1RQjqbo1Dyc33Ztf0bucigCRiXhYJpkcqp1PdoADvDLi6JIWEMHn8WuPdBTq%2Fb%2BHPEb79i6b26%2BR8sx8XHmziPaXN6MENXeKsQ%2F%2B%2BEHVcf1smZhtnlPmz3pzMteHRiKIRBEZXtmUPLT3qEct2o&X-Amz-Signature=a19c9a2a16e6afbccff40814be889f2f661b76369eee8a250b27d62ab0e1ba02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLL3ACI7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCA8psEwgbOO1HSiEoLXQOmAkL4pRIdk7Iwkm2PHHqXvQIgNJJZv6XE2LZIA6kQ11ufzyjkn7Oh%2FZjv5UD%2BDC%2FoWZEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3dNX3alfsdZwuOvCrcA%2Bbi17l2%2BOuVtpKeqklZhqQ4EWvCR46ws5Am0PhPwqd9gxinHY7WIByYkjc3FnaiTpflchOH3g68vujvlTAXKnNNYMcaq1ond0Q%2Fm3W6GwHsnYjcNeZZ6wozT3%2BpYtD5vjQwuUefMXx28RrvPqkldtBbL8nXObtDYeQP%2BEZ0T4NWSFq%2FnkUsOApUkhjNh8Gkl5TFUfPrvN0f78xNDIhxSUvDDumm4DlKEWmfxbahGfMRfaH7RoL94APfurvz18xpNCcFHEe8XGdKHTfhwJSu9Q8gcuGEIFOlQ%2FvhKkG24AbSxgDRvw7ink5w5LV8T8ihxs%2Bz45Jpd83QGoKFWKjgTBU6y51DqtEKUYmBlmakCqLuscJx%2FjvB4uKSkHSMH6kakLkkPKrDiIvMhmV8y4MMMwqEF32aFd4rG2npu4Bkd6AjA294JaYaLYtdhUMhUJqU23EWRtgg4o%2B7mhUcULgoAlBfFfqAt75vRzh734o2Rc8%2FrrqdGIepKudO8rCt1V9VhL%2BG2%2BopKzM5AlB2XNkq0qlAG%2F9e9cxrwIG0WvsVQMkXMPmlN%2BsLAuG8M3m%2Br95Wc1UGgohC66Z2OoNZQxLQEA7vyX0gh0t8Jg506DTvw2fp07VFXwHNHvm%2FdFDGMK%2Bi0MQGOqUBBZIwkiktSUDr6NbgEsU%2BjBcIZ1Tby3hhWB8WPqZQeQzcDpu6BY4Der73hXsAVlrPU9ExBitLHAjboo3WhufMDKc5jUq%2BRiA5VYC6mfXi1sKo6HjJbL3t9S1RkLVZ4bGsK4TM9nVfgqhTC30tTwz3U5snv7lNFiZZ6SsmoNct3v9ZrL5ADwzr%2FA4z8HVmnwStKZpXMzfxK4CPyjHjADmcU%2BO8qScy&X-Amz-Signature=90fa3f306f3c5a45116007a50a0bdb729ddab9a30051eac8de7f70e52197ac43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTZ2PHC2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCzapyOFSA43eeLVoQo8wTFJtfPef8%2FGJdc%2FVzsFDZVbwIhAN21YXIJ9uyOlUnOuMeNHsZP5yhoTpf5bqYB5aTvlaVcKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdaOzuni8q1xmzSbMq3AMariXf6Hz38gPgaaM4pb%2BOFnQRcSSx8nlKjd6wRj%2FdNTtSQQOPI6li5oz4k74e9Ek5hktCxxiWv0Vd%2B2NirnrqUOvZ9KUcriV4Jr614YEzhpsjGpYIEGyTTPzF9Zv9DK3GQNymoQMeH9%2BshaMR3PHlJLG8e8i04LEVhSBPwgaMzzYRqPAhg%2B%2BkJPMk%2BheS6KsWavjHqrY7XwHlh45rnpoKKqddSM%2BwECvHUHx%2FMijKX88%2BxqXXqHjSU%2FiFZmZ10mvkyt942xX2iMEv6IWgjOv50gY9J9eb4a1ptp0nRp0FkifziUkOy%2FlfNUQu3oE6U6txI4VGRwzZwglHq6Qntd8kclouF%2B6rIG37Hz8Fay%2FOYDlb4Q%2BdJZ7vwmFj%2BubhhZGnQh2LIu9brp5pOu592c0ZYWiLCQkIMaMIERjPSFwNwdVQjmll34d5zPl2POvusyRKdtnCrFYFF9EshMg05WzN7HTCGBATKi8w6F9fL00vapKxSNFikzw%2BOQd9o1eA5dSdegsAEgt%2BwSM%2BRFlky0vRDm0VzPrPPe7uJEzwibati%2F7GpwGZcf8PCJqY91pWL8l%2FV2W50xjEh%2BxoMrdSaPzIVhILg8YZe70Gv2e5Esf5umQTLpMmfrrfUzpn%2BjDdotDEBjqkAYrpz5%2FFzXxTIxNDdz74S1Wpu%2BmzyrLX3RK7VfAW5i2AIeHgapo3dcE0jKh7XdxsH9CqkvX2s4cGmT5VLj6jA9UVrTq7XL5f%2FF9TH%2BVk0jQORitGBKLkhIR4TvAzcjfKrXK2lpQPFPdtTsshP5kwoRAsWDsKQlo3xNIzuYD8gtd2PfdNiqL1661JVSM653%2BxdBb7UEs8iPQnk8moMHVgz95DgM9p&X-Amz-Signature=a6bc9d00c4329a2c9a1e360d10db5f1d181a5e53feb73982476c0a48a5066277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBP3AHLB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDdhH69eW%2FmCiCuMS4%2Bg9RyGDtxPkebRGlakHMNCcjBsAIgZXEAzkiBmGCof%2BsVzz1YmSFXHdL0s0LtuBRb2Nycx8MqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6fnEaPv3vXYa2hASrcAw7MgB8Gdr860jmRry03zr1Q8qcfrHJV3Dmwwekl2HGlzz%2FucyzMh8xYCTCt7vRSB0P24%2FFQyCpD%2BrT%2FDzeFWw7DxX%2BGUcrwv%2Frqnmnyiw5lZ3cHPn12pvG2T%2BheDUMOMgOgEAFJDPbRM5NRDOVDj1miQnetQT5zkZ5KN1inHkENNbwYXaK3WHMtmMQZmoAzFY%2BilqvCIny%2BOxaUIS54WmBMh8d5t8y4VST9QNUCkGfl33mZRlVnC4TkbL34VNVbftSFtqqfSlLB%2F%2BREx1CqBVaP6SZjRPdH1rncNh89j%2B28AtkLQtaTo9IjX5a0pSai1w%2By9aVnRgiEVJElRic1T5AZKdFR2sNA1%2FYqNjqvoUD%2FV9fs70Mnem0WgHB38m389S5Rkc9Csgtf8kH6Pr8SYbGyVB2V4oQJ1TbP5eOvrua1JMN2AN5VNuHxzyTFnJn%2BxjFl4DfQJxKZZ5fhXo1k8P7A4IiFScqdqC3RYkVSJFV73PpbxR88nJ6AuZoabslmQN2Qnb766CzaG0cG9xAK2mAXspmnthxXIsqTGn3IfERMrDSCu0D7vOqQNBOcOYnENg3GyHY0QG8LPnq7RmLYqudyAUngdCDLg0%2BxBbAEQhbg4tU6A7KrwRvV0S3BMI6i0MQGOqUBRww3V0X%2BTdmyKYme2qHcpURweRdJw%2BssWnHq7bAIOVANsIV79GfoSMp%2FCsCBl%2FfDh7TphgXvLCxN1RNV6KmO6ZD8gbTpuReYAjaY4WomrHiFu0o%2FYAdTKE2kSQnoWmkBq71XDU3MaeD6ADyt2r6pa%2F7yYZgpU9LxGHkjhEdypkYyNvIL3FzNUMMd6EeQP5QQWbHuMdOMmQNJAX8FQ%2FXGU5jcVe%2BH&X-Amz-Signature=73c2e7e40191ddbf2ba17e7227668f437dede7e973c107fe905dba1c1401e706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X27EKIC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDc8c5R8GcGLDURv4q6kzNd%2Bu3GKextYXiqxLRDr8I5MAIhAPTmTNV%2B8sTOU3yUmLVutdx3UXNclZsnZTea6XSOb9xrKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5Y%2F2UFiudGHKLJE8q3APkRjCIIAQGiU0NGn0YpPg2egkFKzP3i97THwLcEOic0d1uNNtSXZWc47uhqQ0pbbgVgVPf4Pm%2FDJDKMAk1IwQConHoG3ukmxhUO5jeleqo9xbZdPnZYX1DQV1z8NfxYtqzT07yRBfoTYko%2BIGHJznA6hwnWc0%2B2pyB07JtbDCav2b7Xn33dKosQnGU8fPSU0ypU6j4m3URLoLnL01%2FAU%2B5p7k2Y29zpvp%2BmTpX4WgbuAzV%2FATvqJ6iSm%2FE3yMgRdiNtyk%2BNOyoueja%2Fo2pEFw3Zp2%2F2e5CEVbsi5pao%2F2WXka3tRYRoFtyPL%2FLDI7u83%2FiVjj9kzbMBnSzpQITL%2BpLFHcVGbl12CWi5C1kNUbmy2b1zqKco0KcQcAEf%2FUyPX0tFgXA8ui8TXNH8FRbF8gFyneWxAZlT1Z3M8k2NXfroqy80IZutKCx0GX%2Bb%2BiNlPcQZdTUU%2FgrJJS7mZpdQhZ9U2G9W%2B%2FjdORrG5EGEbphiGBQkB29RBoxcs7fnTuBqpfhBDURPNE0psVD%2B7IognoImXQNdM08TnUVaNXMPD40cZD%2FtorbmyNTr4cPMuB4BkEEQKgPLCvXRHuCdJnEf5mvhPdAx0LYQnBQcBMdjdHGF92Oxp1IaJDRMHTuJzDhotDEBjqkAcFjZ07hqS%2B6CqYsOfosFKt2nosw04JqJP9oQeQKzRUVJSdYAHvj1RPpIcdwbjXYzDQKT2325TjyfpIRrQcV3lwIxJoirGFajR2xsrbyxOgG6xVkrVPM7cqTJNFxQtJusf3ESH%2F%2BEqp13D9KS2rbpY9Y21eWxDkCiDpQtfr0utOCBp%2BbZc0Y7gvk5SkdUZcU0YUhFqmt%2FmExi0XFGzw3M4u%2F2ZDJ&X-Amz-Signature=2ef3e1abc8ab476a2bd28663037f0359367729a443e55d6b7197dee5bb2e5699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X27EKIC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDc8c5R8GcGLDURv4q6kzNd%2Bu3GKextYXiqxLRDr8I5MAIhAPTmTNV%2B8sTOU3yUmLVutdx3UXNclZsnZTea6XSOb9xrKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5Y%2F2UFiudGHKLJE8q3APkRjCIIAQGiU0NGn0YpPg2egkFKzP3i97THwLcEOic0d1uNNtSXZWc47uhqQ0pbbgVgVPf4Pm%2FDJDKMAk1IwQConHoG3ukmxhUO5jeleqo9xbZdPnZYX1DQV1z8NfxYtqzT07yRBfoTYko%2BIGHJznA6hwnWc0%2B2pyB07JtbDCav2b7Xn33dKosQnGU8fPSU0ypU6j4m3URLoLnL01%2FAU%2B5p7k2Y29zpvp%2BmTpX4WgbuAzV%2FATvqJ6iSm%2FE3yMgRdiNtyk%2BNOyoueja%2Fo2pEFw3Zp2%2F2e5CEVbsi5pao%2F2WXka3tRYRoFtyPL%2FLDI7u83%2FiVjj9kzbMBnSzpQITL%2BpLFHcVGbl12CWi5C1kNUbmy2b1zqKco0KcQcAEf%2FUyPX0tFgXA8ui8TXNH8FRbF8gFyneWxAZlT1Z3M8k2NXfroqy80IZutKCx0GX%2Bb%2BiNlPcQZdTUU%2FgrJJS7mZpdQhZ9U2G9W%2B%2FjdORrG5EGEbphiGBQkB29RBoxcs7fnTuBqpfhBDURPNE0psVD%2B7IognoImXQNdM08TnUVaNXMPD40cZD%2FtorbmyNTr4cPMuB4BkEEQKgPLCvXRHuCdJnEf5mvhPdAx0LYQnBQcBMdjdHGF92Oxp1IaJDRMHTuJzDhotDEBjqkAcFjZ07hqS%2B6CqYsOfosFKt2nosw04JqJP9oQeQKzRUVJSdYAHvj1RPpIcdwbjXYzDQKT2325TjyfpIRrQcV3lwIxJoirGFajR2xsrbyxOgG6xVkrVPM7cqTJNFxQtJusf3ESH%2F%2BEqp13D9KS2rbpY9Y21eWxDkCiDpQtfr0utOCBp%2BbZc0Y7gvk5SkdUZcU0YUhFqmt%2FmExi0XFGzw3M4u%2F2ZDJ&X-Amz-Signature=9081634a14f1f973abe9186b19c9a02415eff5d84358bbf1562e838449753cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7NIZPEN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAEBAeP84n2LkqWRppW8aszYqeYtRFHdrj2eVnFUFa7rAiB8vpBIYvBp9DXJ7JRB1f9jGiKwGRJNXSJqx7hE6Ram8CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIVCp6g1dCceJ2Q0VKtwD07hGXfinYRPaEMLw10QcaUTxU2dlFVp7T7Z38xgK1wA2WTmEMrVdSWV3GvBy8Zqw7lIipMWDCfRXTB%2B4JXUuXfm65MC6Kn933jTdzs2%2BOOXMkIcO521PoesL5FkNm7M1VAwfh7l10X0%2FNSwnmAPH28hRTLk3LVZW%2BNtxB8KFzrlp9f09ggkrHH4mUN%2BgyEadcsMX2lzLyWm6W7E1GrfcmhdEKoutA5oAw6YMF6sQLICVznnnHlegaUUrR2SKXVBcZTg44SdYCCALirzS21jaSBKEe%2FXs%2FSt3a4iEh1KRs9EkxEoEjz0PNg8gdYl7vDx84Rso6r2mVS%2Bdap8RCSMy0G7%2Bj9W49iVf4c7yruM7ZYqFPkqhYbuMvD9%2BH4fmmKddgyKFNT%2BMgosFyaozpnnG%2Bm7K3K3eXvEmUlEXvAFTcx7BenljElKm%2BA%2Br6GA%2BH7j%2Bgmeuh83nFSCpCSwMHLDxC7uZN4g3FY1lc6fNr9BjcAWrC4ABSGbhih1ER59q10iPFzwrI3YOQEagfLPh%2FwpOWQj6pIuaelYI48rn3%2BMuLuIbdqexd3JQEIlwTxUFGBopK2vEKR%2BY1wVs%2BGLAWN9Gg2sTDvodI9OCoRNPBCyTiajHAuHcVdTyO62QEXAw7KLQxAY6pgE3VgdLbhMrpgqkHjNF2RnM4QDlNgk27P4Zr9A09VXxtSiCcOsHiq1DziU6P7u3d4sIDqCClK%2BQiMQaod8TkBx7IAoCN8O773ysQpUPYuV%2FcRRlZZkjSbUKbs9vb6U3TqADGOosFYkEuyIFEwe%2FsGAvcmSI1Lltqb7OxKOeRF7YAjp%2B%2B11m0Sz%2FGMdntkz08y8tC8764CcNlYqhXZAm5IvoIex9QMYk&X-Amz-Signature=9c7f154d7c5e1b781736c918dae5f01dcab19a41e1ccee8cd6a7c41c82e024a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7NIZPEN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAEBAeP84n2LkqWRppW8aszYqeYtRFHdrj2eVnFUFa7rAiB8vpBIYvBp9DXJ7JRB1f9jGiKwGRJNXSJqx7hE6Ram8CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIVCp6g1dCceJ2Q0VKtwD07hGXfinYRPaEMLw10QcaUTxU2dlFVp7T7Z38xgK1wA2WTmEMrVdSWV3GvBy8Zqw7lIipMWDCfRXTB%2B4JXUuXfm65MC6Kn933jTdzs2%2BOOXMkIcO521PoesL5FkNm7M1VAwfh7l10X0%2FNSwnmAPH28hRTLk3LVZW%2BNtxB8KFzrlp9f09ggkrHH4mUN%2BgyEadcsMX2lzLyWm6W7E1GrfcmhdEKoutA5oAw6YMF6sQLICVznnnHlegaUUrR2SKXVBcZTg44SdYCCALirzS21jaSBKEe%2FXs%2FSt3a4iEh1KRs9EkxEoEjz0PNg8gdYl7vDx84Rso6r2mVS%2Bdap8RCSMy0G7%2Bj9W49iVf4c7yruM7ZYqFPkqhYbuMvD9%2BH4fmmKddgyKFNT%2BMgosFyaozpnnG%2Bm7K3K3eXvEmUlEXvAFTcx7BenljElKm%2BA%2Br6GA%2BH7j%2Bgmeuh83nFSCpCSwMHLDxC7uZN4g3FY1lc6fNr9BjcAWrC4ABSGbhih1ER59q10iPFzwrI3YOQEagfLPh%2FwpOWQj6pIuaelYI48rn3%2BMuLuIbdqexd3JQEIlwTxUFGBopK2vEKR%2BY1wVs%2BGLAWN9Gg2sTDvodI9OCoRNPBCyTiajHAuHcVdTyO62QEXAw7KLQxAY6pgE3VgdLbhMrpgqkHjNF2RnM4QDlNgk27P4Zr9A09VXxtSiCcOsHiq1DziU6P7u3d4sIDqCClK%2BQiMQaod8TkBx7IAoCN8O773ysQpUPYuV%2FcRRlZZkjSbUKbs9vb6U3TqADGOosFYkEuyIFEwe%2FsGAvcmSI1Lltqb7OxKOeRF7YAjp%2B%2B11m0Sz%2FGMdntkz08y8tC8764CcNlYqhXZAm5IvoIex9QMYk&X-Amz-Signature=7d6b2b962b570bc814c10aef80d4187f3a3bbfc0e880ea24182d76889d69322d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7NIZPEN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAEBAeP84n2LkqWRppW8aszYqeYtRFHdrj2eVnFUFa7rAiB8vpBIYvBp9DXJ7JRB1f9jGiKwGRJNXSJqx7hE6Ram8CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIVCp6g1dCceJ2Q0VKtwD07hGXfinYRPaEMLw10QcaUTxU2dlFVp7T7Z38xgK1wA2WTmEMrVdSWV3GvBy8Zqw7lIipMWDCfRXTB%2B4JXUuXfm65MC6Kn933jTdzs2%2BOOXMkIcO521PoesL5FkNm7M1VAwfh7l10X0%2FNSwnmAPH28hRTLk3LVZW%2BNtxB8KFzrlp9f09ggkrHH4mUN%2BgyEadcsMX2lzLyWm6W7E1GrfcmhdEKoutA5oAw6YMF6sQLICVznnnHlegaUUrR2SKXVBcZTg44SdYCCALirzS21jaSBKEe%2FXs%2FSt3a4iEh1KRs9EkxEoEjz0PNg8gdYl7vDx84Rso6r2mVS%2Bdap8RCSMy0G7%2Bj9W49iVf4c7yruM7ZYqFPkqhYbuMvD9%2BH4fmmKddgyKFNT%2BMgosFyaozpnnG%2Bm7K3K3eXvEmUlEXvAFTcx7BenljElKm%2BA%2Br6GA%2BH7j%2Bgmeuh83nFSCpCSwMHLDxC7uZN4g3FY1lc6fNr9BjcAWrC4ABSGbhih1ER59q10iPFzwrI3YOQEagfLPh%2FwpOWQj6pIuaelYI48rn3%2BMuLuIbdqexd3JQEIlwTxUFGBopK2vEKR%2BY1wVs%2BGLAWN9Gg2sTDvodI9OCoRNPBCyTiajHAuHcVdTyO62QEXAw7KLQxAY6pgE3VgdLbhMrpgqkHjNF2RnM4QDlNgk27P4Zr9A09VXxtSiCcOsHiq1DziU6P7u3d4sIDqCClK%2BQiMQaod8TkBx7IAoCN8O773ysQpUPYuV%2FcRRlZZkjSbUKbs9vb6U3TqADGOosFYkEuyIFEwe%2FsGAvcmSI1Lltqb7OxKOeRF7YAjp%2B%2B11m0Sz%2FGMdntkz08y8tC8764CcNlYqhXZAm5IvoIex9QMYk&X-Amz-Signature=260d3f8d89b2ae01fda7336acd94239847a9f6c05c53c871d7b11f07adab443b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7NIZPEN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAEBAeP84n2LkqWRppW8aszYqeYtRFHdrj2eVnFUFa7rAiB8vpBIYvBp9DXJ7JRB1f9jGiKwGRJNXSJqx7hE6Ram8CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIVCp6g1dCceJ2Q0VKtwD07hGXfinYRPaEMLw10QcaUTxU2dlFVp7T7Z38xgK1wA2WTmEMrVdSWV3GvBy8Zqw7lIipMWDCfRXTB%2B4JXUuXfm65MC6Kn933jTdzs2%2BOOXMkIcO521PoesL5FkNm7M1VAwfh7l10X0%2FNSwnmAPH28hRTLk3LVZW%2BNtxB8KFzrlp9f09ggkrHH4mUN%2BgyEadcsMX2lzLyWm6W7E1GrfcmhdEKoutA5oAw6YMF6sQLICVznnnHlegaUUrR2SKXVBcZTg44SdYCCALirzS21jaSBKEe%2FXs%2FSt3a4iEh1KRs9EkxEoEjz0PNg8gdYl7vDx84Rso6r2mVS%2Bdap8RCSMy0G7%2Bj9W49iVf4c7yruM7ZYqFPkqhYbuMvD9%2BH4fmmKddgyKFNT%2BMgosFyaozpnnG%2Bm7K3K3eXvEmUlEXvAFTcx7BenljElKm%2BA%2Br6GA%2BH7j%2Bgmeuh83nFSCpCSwMHLDxC7uZN4g3FY1lc6fNr9BjcAWrC4ABSGbhih1ER59q10iPFzwrI3YOQEagfLPh%2FwpOWQj6pIuaelYI48rn3%2BMuLuIbdqexd3JQEIlwTxUFGBopK2vEKR%2BY1wVs%2BGLAWN9Gg2sTDvodI9OCoRNPBCyTiajHAuHcVdTyO62QEXAw7KLQxAY6pgE3VgdLbhMrpgqkHjNF2RnM4QDlNgk27P4Zr9A09VXxtSiCcOsHiq1DziU6P7u3d4sIDqCClK%2BQiMQaod8TkBx7IAoCN8O773ysQpUPYuV%2FcRRlZZkjSbUKbs9vb6U3TqADGOosFYkEuyIFEwe%2FsGAvcmSI1Lltqb7OxKOeRF7YAjp%2B%2B11m0Sz%2FGMdntkz08y8tC8764CcNlYqhXZAm5IvoIex9QMYk&X-Amz-Signature=1735f6137198d42e40c1e07b34a42aa49a357e4e848f639a6102e618f43303a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7NIZPEN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAEBAeP84n2LkqWRppW8aszYqeYtRFHdrj2eVnFUFa7rAiB8vpBIYvBp9DXJ7JRB1f9jGiKwGRJNXSJqx7hE6Ram8CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIVCp6g1dCceJ2Q0VKtwD07hGXfinYRPaEMLw10QcaUTxU2dlFVp7T7Z38xgK1wA2WTmEMrVdSWV3GvBy8Zqw7lIipMWDCfRXTB%2B4JXUuXfm65MC6Kn933jTdzs2%2BOOXMkIcO521PoesL5FkNm7M1VAwfh7l10X0%2FNSwnmAPH28hRTLk3LVZW%2BNtxB8KFzrlp9f09ggkrHH4mUN%2BgyEadcsMX2lzLyWm6W7E1GrfcmhdEKoutA5oAw6YMF6sQLICVznnnHlegaUUrR2SKXVBcZTg44SdYCCALirzS21jaSBKEe%2FXs%2FSt3a4iEh1KRs9EkxEoEjz0PNg8gdYl7vDx84Rso6r2mVS%2Bdap8RCSMy0G7%2Bj9W49iVf4c7yruM7ZYqFPkqhYbuMvD9%2BH4fmmKddgyKFNT%2BMgosFyaozpnnG%2Bm7K3K3eXvEmUlEXvAFTcx7BenljElKm%2BA%2Br6GA%2BH7j%2Bgmeuh83nFSCpCSwMHLDxC7uZN4g3FY1lc6fNr9BjcAWrC4ABSGbhih1ER59q10iPFzwrI3YOQEagfLPh%2FwpOWQj6pIuaelYI48rn3%2BMuLuIbdqexd3JQEIlwTxUFGBopK2vEKR%2BY1wVs%2BGLAWN9Gg2sTDvodI9OCoRNPBCyTiajHAuHcVdTyO62QEXAw7KLQxAY6pgE3VgdLbhMrpgqkHjNF2RnM4QDlNgk27P4Zr9A09VXxtSiCcOsHiq1DziU6P7u3d4sIDqCClK%2BQiMQaod8TkBx7IAoCN8O773ysQpUPYuV%2FcRRlZZkjSbUKbs9vb6U3TqADGOosFYkEuyIFEwe%2FsGAvcmSI1Lltqb7OxKOeRF7YAjp%2B%2B11m0Sz%2FGMdntkz08y8tC8764CcNlYqhXZAm5IvoIex9QMYk&X-Amz-Signature=3ea2716b83a7e4522aceb9324fdc199a548ececcf06ccfac4191ec3ea383561b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7NIZPEN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAEBAeP84n2LkqWRppW8aszYqeYtRFHdrj2eVnFUFa7rAiB8vpBIYvBp9DXJ7JRB1f9jGiKwGRJNXSJqx7hE6Ram8CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIVCp6g1dCceJ2Q0VKtwD07hGXfinYRPaEMLw10QcaUTxU2dlFVp7T7Z38xgK1wA2WTmEMrVdSWV3GvBy8Zqw7lIipMWDCfRXTB%2B4JXUuXfm65MC6Kn933jTdzs2%2BOOXMkIcO521PoesL5FkNm7M1VAwfh7l10X0%2FNSwnmAPH28hRTLk3LVZW%2BNtxB8KFzrlp9f09ggkrHH4mUN%2BgyEadcsMX2lzLyWm6W7E1GrfcmhdEKoutA5oAw6YMF6sQLICVznnnHlegaUUrR2SKXVBcZTg44SdYCCALirzS21jaSBKEe%2FXs%2FSt3a4iEh1KRs9EkxEoEjz0PNg8gdYl7vDx84Rso6r2mVS%2Bdap8RCSMy0G7%2Bj9W49iVf4c7yruM7ZYqFPkqhYbuMvD9%2BH4fmmKddgyKFNT%2BMgosFyaozpnnG%2Bm7K3K3eXvEmUlEXvAFTcx7BenljElKm%2BA%2Br6GA%2BH7j%2Bgmeuh83nFSCpCSwMHLDxC7uZN4g3FY1lc6fNr9BjcAWrC4ABSGbhih1ER59q10iPFzwrI3YOQEagfLPh%2FwpOWQj6pIuaelYI48rn3%2BMuLuIbdqexd3JQEIlwTxUFGBopK2vEKR%2BY1wVs%2BGLAWN9Gg2sTDvodI9OCoRNPBCyTiajHAuHcVdTyO62QEXAw7KLQxAY6pgE3VgdLbhMrpgqkHjNF2RnM4QDlNgk27P4Zr9A09VXxtSiCcOsHiq1DziU6P7u3d4sIDqCClK%2BQiMQaod8TkBx7IAoCN8O773ysQpUPYuV%2FcRRlZZkjSbUKbs9vb6U3TqADGOosFYkEuyIFEwe%2FsGAvcmSI1Lltqb7OxKOeRF7YAjp%2B%2B11m0Sz%2FGMdntkz08y8tC8764CcNlYqhXZAm5IvoIex9QMYk&X-Amz-Signature=c991bb883df3480efd7fa30acd75a2946b9edc3c49fee7ecc0c4ce56795d0377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7NIZPEN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAEBAeP84n2LkqWRppW8aszYqeYtRFHdrj2eVnFUFa7rAiB8vpBIYvBp9DXJ7JRB1f9jGiKwGRJNXSJqx7hE6Ram8CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIVCp6g1dCceJ2Q0VKtwD07hGXfinYRPaEMLw10QcaUTxU2dlFVp7T7Z38xgK1wA2WTmEMrVdSWV3GvBy8Zqw7lIipMWDCfRXTB%2B4JXUuXfm65MC6Kn933jTdzs2%2BOOXMkIcO521PoesL5FkNm7M1VAwfh7l10X0%2FNSwnmAPH28hRTLk3LVZW%2BNtxB8KFzrlp9f09ggkrHH4mUN%2BgyEadcsMX2lzLyWm6W7E1GrfcmhdEKoutA5oAw6YMF6sQLICVznnnHlegaUUrR2SKXVBcZTg44SdYCCALirzS21jaSBKEe%2FXs%2FSt3a4iEh1KRs9EkxEoEjz0PNg8gdYl7vDx84Rso6r2mVS%2Bdap8RCSMy0G7%2Bj9W49iVf4c7yruM7ZYqFPkqhYbuMvD9%2BH4fmmKddgyKFNT%2BMgosFyaozpnnG%2Bm7K3K3eXvEmUlEXvAFTcx7BenljElKm%2BA%2Br6GA%2BH7j%2Bgmeuh83nFSCpCSwMHLDxC7uZN4g3FY1lc6fNr9BjcAWrC4ABSGbhih1ER59q10iPFzwrI3YOQEagfLPh%2FwpOWQj6pIuaelYI48rn3%2BMuLuIbdqexd3JQEIlwTxUFGBopK2vEKR%2BY1wVs%2BGLAWN9Gg2sTDvodI9OCoRNPBCyTiajHAuHcVdTyO62QEXAw7KLQxAY6pgE3VgdLbhMrpgqkHjNF2RnM4QDlNgk27P4Zr9A09VXxtSiCcOsHiq1DziU6P7u3d4sIDqCClK%2BQiMQaod8TkBx7IAoCN8O773ysQpUPYuV%2FcRRlZZkjSbUKbs9vb6U3TqADGOosFYkEuyIFEwe%2FsGAvcmSI1Lltqb7OxKOeRF7YAjp%2B%2B11m0Sz%2FGMdntkz08y8tC8764CcNlYqhXZAm5IvoIex9QMYk&X-Amz-Signature=260d3f8d89b2ae01fda7336acd94239847a9f6c05c53c871d7b11f07adab443b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7NIZPEN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAEBAeP84n2LkqWRppW8aszYqeYtRFHdrj2eVnFUFa7rAiB8vpBIYvBp9DXJ7JRB1f9jGiKwGRJNXSJqx7hE6Ram8CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIVCp6g1dCceJ2Q0VKtwD07hGXfinYRPaEMLw10QcaUTxU2dlFVp7T7Z38xgK1wA2WTmEMrVdSWV3GvBy8Zqw7lIipMWDCfRXTB%2B4JXUuXfm65MC6Kn933jTdzs2%2BOOXMkIcO521PoesL5FkNm7M1VAwfh7l10X0%2FNSwnmAPH28hRTLk3LVZW%2BNtxB8KFzrlp9f09ggkrHH4mUN%2BgyEadcsMX2lzLyWm6W7E1GrfcmhdEKoutA5oAw6YMF6sQLICVznnnHlegaUUrR2SKXVBcZTg44SdYCCALirzS21jaSBKEe%2FXs%2FSt3a4iEh1KRs9EkxEoEjz0PNg8gdYl7vDx84Rso6r2mVS%2Bdap8RCSMy0G7%2Bj9W49iVf4c7yruM7ZYqFPkqhYbuMvD9%2BH4fmmKddgyKFNT%2BMgosFyaozpnnG%2Bm7K3K3eXvEmUlEXvAFTcx7BenljElKm%2BA%2Br6GA%2BH7j%2Bgmeuh83nFSCpCSwMHLDxC7uZN4g3FY1lc6fNr9BjcAWrC4ABSGbhih1ER59q10iPFzwrI3YOQEagfLPh%2FwpOWQj6pIuaelYI48rn3%2BMuLuIbdqexd3JQEIlwTxUFGBopK2vEKR%2BY1wVs%2BGLAWN9Gg2sTDvodI9OCoRNPBCyTiajHAuHcVdTyO62QEXAw7KLQxAY6pgE3VgdLbhMrpgqkHjNF2RnM4QDlNgk27P4Zr9A09VXxtSiCcOsHiq1DziU6P7u3d4sIDqCClK%2BQiMQaod8TkBx7IAoCN8O773ysQpUPYuV%2FcRRlZZkjSbUKbs9vb6U3TqADGOosFYkEuyIFEwe%2FsGAvcmSI1Lltqb7OxKOeRF7YAjp%2B%2B11m0Sz%2FGMdntkz08y8tC8764CcNlYqhXZAm5IvoIex9QMYk&X-Amz-Signature=f2d304d2aa602f1713d1f2114127248c6e9503296199835a34ebf0e23c6147a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7NIZPEN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAEBAeP84n2LkqWRppW8aszYqeYtRFHdrj2eVnFUFa7rAiB8vpBIYvBp9DXJ7JRB1f9jGiKwGRJNXSJqx7hE6Ram8CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIVCp6g1dCceJ2Q0VKtwD07hGXfinYRPaEMLw10QcaUTxU2dlFVp7T7Z38xgK1wA2WTmEMrVdSWV3GvBy8Zqw7lIipMWDCfRXTB%2B4JXUuXfm65MC6Kn933jTdzs2%2BOOXMkIcO521PoesL5FkNm7M1VAwfh7l10X0%2FNSwnmAPH28hRTLk3LVZW%2BNtxB8KFzrlp9f09ggkrHH4mUN%2BgyEadcsMX2lzLyWm6W7E1GrfcmhdEKoutA5oAw6YMF6sQLICVznnnHlegaUUrR2SKXVBcZTg44SdYCCALirzS21jaSBKEe%2FXs%2FSt3a4iEh1KRs9EkxEoEjz0PNg8gdYl7vDx84Rso6r2mVS%2Bdap8RCSMy0G7%2Bj9W49iVf4c7yruM7ZYqFPkqhYbuMvD9%2BH4fmmKddgyKFNT%2BMgosFyaozpnnG%2Bm7K3K3eXvEmUlEXvAFTcx7BenljElKm%2BA%2Br6GA%2BH7j%2Bgmeuh83nFSCpCSwMHLDxC7uZN4g3FY1lc6fNr9BjcAWrC4ABSGbhih1ER59q10iPFzwrI3YOQEagfLPh%2FwpOWQj6pIuaelYI48rn3%2BMuLuIbdqexd3JQEIlwTxUFGBopK2vEKR%2BY1wVs%2BGLAWN9Gg2sTDvodI9OCoRNPBCyTiajHAuHcVdTyO62QEXAw7KLQxAY6pgE3VgdLbhMrpgqkHjNF2RnM4QDlNgk27P4Zr9A09VXxtSiCcOsHiq1DziU6P7u3d4sIDqCClK%2BQiMQaod8TkBx7IAoCN8O773ysQpUPYuV%2FcRRlZZkjSbUKbs9vb6U3TqADGOosFYkEuyIFEwe%2FsGAvcmSI1Lltqb7OxKOeRF7YAjp%2B%2B11m0Sz%2FGMdntkz08y8tC8764CcNlYqhXZAm5IvoIex9QMYk&X-Amz-Signature=75afe90af3d01a57aebf80ddfc48406b05cd0945e403d535f0ce909bebe99dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7NIZPEN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAEBAeP84n2LkqWRppW8aszYqeYtRFHdrj2eVnFUFa7rAiB8vpBIYvBp9DXJ7JRB1f9jGiKwGRJNXSJqx7hE6Ram8CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIVCp6g1dCceJ2Q0VKtwD07hGXfinYRPaEMLw10QcaUTxU2dlFVp7T7Z38xgK1wA2WTmEMrVdSWV3GvBy8Zqw7lIipMWDCfRXTB%2B4JXUuXfm65MC6Kn933jTdzs2%2BOOXMkIcO521PoesL5FkNm7M1VAwfh7l10X0%2FNSwnmAPH28hRTLk3LVZW%2BNtxB8KFzrlp9f09ggkrHH4mUN%2BgyEadcsMX2lzLyWm6W7E1GrfcmhdEKoutA5oAw6YMF6sQLICVznnnHlegaUUrR2SKXVBcZTg44SdYCCALirzS21jaSBKEe%2FXs%2FSt3a4iEh1KRs9EkxEoEjz0PNg8gdYl7vDx84Rso6r2mVS%2Bdap8RCSMy0G7%2Bj9W49iVf4c7yruM7ZYqFPkqhYbuMvD9%2BH4fmmKddgyKFNT%2BMgosFyaozpnnG%2Bm7K3K3eXvEmUlEXvAFTcx7BenljElKm%2BA%2Br6GA%2BH7j%2Bgmeuh83nFSCpCSwMHLDxC7uZN4g3FY1lc6fNr9BjcAWrC4ABSGbhih1ER59q10iPFzwrI3YOQEagfLPh%2FwpOWQj6pIuaelYI48rn3%2BMuLuIbdqexd3JQEIlwTxUFGBopK2vEKR%2BY1wVs%2BGLAWN9Gg2sTDvodI9OCoRNPBCyTiajHAuHcVdTyO62QEXAw7KLQxAY6pgE3VgdLbhMrpgqkHjNF2RnM4QDlNgk27P4Zr9A09VXxtSiCcOsHiq1DziU6P7u3d4sIDqCClK%2BQiMQaod8TkBx7IAoCN8O773ysQpUPYuV%2FcRRlZZkjSbUKbs9vb6U3TqADGOosFYkEuyIFEwe%2FsGAvcmSI1Lltqb7OxKOeRF7YAjp%2B%2B11m0Sz%2FGMdntkz08y8tC8764CcNlYqhXZAm5IvoIex9QMYk&X-Amz-Signature=bed393d3fb9548c5ac72860e29bd6ea2eac22a6feee0fab55899d354751c6ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
