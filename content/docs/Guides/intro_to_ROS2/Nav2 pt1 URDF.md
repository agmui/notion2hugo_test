---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-30T10:15:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-30T10:15:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A73WTDP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrDa%2FtUr91xkECm9nkNpSBI2yurWEB%2BwUtMWwXayxmiAiEA4YIVWrtREO96Q7RR5%2Fl5tyWS%2BaIRCxDzLBO49Tsog%2BgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlpYvKCcrCX4wvGkCrcAxsnioHIOUKqJEJfuBjTY6juUljRcfxkBy4bGdNsx81Qa9wNqfEDSXnhyqrOp22UD22uWFPdM98F4NhKExvLKeLROEKdYkiC3D1Bz8eZZT9nVbDCdv8MG1lnLRcQzh9j872Zz0MZOgbR8FBLKXk%2FJ6YAentYINetULV%2BwY%2BJ1onvT9iL78PnoyuGlEQcb%2FtYxjJR3BIEBat58DfF8mOvEpzIO8%2FezYreRiEqKJC6OM%2BRcTR2%2FgdxW5P8Ke5rH9gcfTuHDSmgJzIP0RYNbC%2BiN4u0o1nFp1T3U16hCCt2cacvuFbUejDce%2Fa3WF87EsBFsDN%2F%2FtLtRRMp%2FPY%2FW%2Fu9DAvR2X0SJyzK%2BoNvr5Ur1pbD6b9212hFgmYUPtFsTSVHsiU60yvVUI8aL%2Fy8a%2F5QGaGP2LG19YO0KHeaMnCEt0z6YMl9kkXmwJ1zo4VerFYe0kgImMQdhUNPrwxk9CPibkVpslZjNLsYcP2Gb8N2hliRISVZbRSWhemXQGrJG%2BWQjdkBw0M0%2BjK50XZCuUg8EM5d2S2z52lXMd9XD08uBJvG2jv0jzaFQSXTvhnO835MfrkppIEpFOmikelWT7g99MGhC2gOfEqEHopscOOiVqOsTz1I6vlwCQlRpXu5MPWarMQGOqUBlS0AoMJJvwWO0p9JW0V3BEH1w6E440ie5BurIvNoa4wIrUIILnNrxMhgcYMgiHTKCH8pd2zN7MbZWZv%2Bj53GbG6owBtEX1v0Zs7VvqhPePUEQza3e%2BYS%2F8OfMNmLwK1DJ%2FEwauhQA%2FLP%2BJTOWPeufW1y6OcYJH1GCCRgBerUhymTT056jbO40NmU8Guqmzdq%2FlMpuBzYWzEecVZVYDmQlqPO7Bpx&X-Amz-Signature=cefcb4870ae31f02c9be9b75e8ef2494fbe55d3563fd883dd7c66f0aaeba2be6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A73WTDP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrDa%2FtUr91xkECm9nkNpSBI2yurWEB%2BwUtMWwXayxmiAiEA4YIVWrtREO96Q7RR5%2Fl5tyWS%2BaIRCxDzLBO49Tsog%2BgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlpYvKCcrCX4wvGkCrcAxsnioHIOUKqJEJfuBjTY6juUljRcfxkBy4bGdNsx81Qa9wNqfEDSXnhyqrOp22UD22uWFPdM98F4NhKExvLKeLROEKdYkiC3D1Bz8eZZT9nVbDCdv8MG1lnLRcQzh9j872Zz0MZOgbR8FBLKXk%2FJ6YAentYINetULV%2BwY%2BJ1onvT9iL78PnoyuGlEQcb%2FtYxjJR3BIEBat58DfF8mOvEpzIO8%2FezYreRiEqKJC6OM%2BRcTR2%2FgdxW5P8Ke5rH9gcfTuHDSmgJzIP0RYNbC%2BiN4u0o1nFp1T3U16hCCt2cacvuFbUejDce%2Fa3WF87EsBFsDN%2F%2FtLtRRMp%2FPY%2FW%2Fu9DAvR2X0SJyzK%2BoNvr5Ur1pbD6b9212hFgmYUPtFsTSVHsiU60yvVUI8aL%2Fy8a%2F5QGaGP2LG19YO0KHeaMnCEt0z6YMl9kkXmwJ1zo4VerFYe0kgImMQdhUNPrwxk9CPibkVpslZjNLsYcP2Gb8N2hliRISVZbRSWhemXQGrJG%2BWQjdkBw0M0%2BjK50XZCuUg8EM5d2S2z52lXMd9XD08uBJvG2jv0jzaFQSXTvhnO835MfrkppIEpFOmikelWT7g99MGhC2gOfEqEHopscOOiVqOsTz1I6vlwCQlRpXu5MPWarMQGOqUBlS0AoMJJvwWO0p9JW0V3BEH1w6E440ie5BurIvNoa4wIrUIILnNrxMhgcYMgiHTKCH8pd2zN7MbZWZv%2Bj53GbG6owBtEX1v0Zs7VvqhPePUEQza3e%2BYS%2F8OfMNmLwK1DJ%2FEwauhQA%2FLP%2BJTOWPeufW1y6OcYJH1GCCRgBerUhymTT056jbO40NmU8Guqmzdq%2FlMpuBzYWzEecVZVYDmQlqPO7Bpx&X-Amz-Signature=843d50af16219b448e79f5eb062fa5679f81f6b8c64653d6759a34160df14345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A73WTDP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrDa%2FtUr91xkECm9nkNpSBI2yurWEB%2BwUtMWwXayxmiAiEA4YIVWrtREO96Q7RR5%2Fl5tyWS%2BaIRCxDzLBO49Tsog%2BgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlpYvKCcrCX4wvGkCrcAxsnioHIOUKqJEJfuBjTY6juUljRcfxkBy4bGdNsx81Qa9wNqfEDSXnhyqrOp22UD22uWFPdM98F4NhKExvLKeLROEKdYkiC3D1Bz8eZZT9nVbDCdv8MG1lnLRcQzh9j872Zz0MZOgbR8FBLKXk%2FJ6YAentYINetULV%2BwY%2BJ1onvT9iL78PnoyuGlEQcb%2FtYxjJR3BIEBat58DfF8mOvEpzIO8%2FezYreRiEqKJC6OM%2BRcTR2%2FgdxW5P8Ke5rH9gcfTuHDSmgJzIP0RYNbC%2BiN4u0o1nFp1T3U16hCCt2cacvuFbUejDce%2Fa3WF87EsBFsDN%2F%2FtLtRRMp%2FPY%2FW%2Fu9DAvR2X0SJyzK%2BoNvr5Ur1pbD6b9212hFgmYUPtFsTSVHsiU60yvVUI8aL%2Fy8a%2F5QGaGP2LG19YO0KHeaMnCEt0z6YMl9kkXmwJ1zo4VerFYe0kgImMQdhUNPrwxk9CPibkVpslZjNLsYcP2Gb8N2hliRISVZbRSWhemXQGrJG%2BWQjdkBw0M0%2BjK50XZCuUg8EM5d2S2z52lXMd9XD08uBJvG2jv0jzaFQSXTvhnO835MfrkppIEpFOmikelWT7g99MGhC2gOfEqEHopscOOiVqOsTz1I6vlwCQlRpXu5MPWarMQGOqUBlS0AoMJJvwWO0p9JW0V3BEH1w6E440ie5BurIvNoa4wIrUIILnNrxMhgcYMgiHTKCH8pd2zN7MbZWZv%2Bj53GbG6owBtEX1v0Zs7VvqhPePUEQza3e%2BYS%2F8OfMNmLwK1DJ%2FEwauhQA%2FLP%2BJTOWPeufW1y6OcYJH1GCCRgBerUhymTT056jbO40NmU8Guqmzdq%2FlMpuBzYWzEecVZVYDmQlqPO7Bpx&X-Amz-Signature=a6c4fdae34cef78b34a53e1e4ced8bd4df4d6647715fafb90a43f31723c39e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A73WTDP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrDa%2FtUr91xkECm9nkNpSBI2yurWEB%2BwUtMWwXayxmiAiEA4YIVWrtREO96Q7RR5%2Fl5tyWS%2BaIRCxDzLBO49Tsog%2BgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlpYvKCcrCX4wvGkCrcAxsnioHIOUKqJEJfuBjTY6juUljRcfxkBy4bGdNsx81Qa9wNqfEDSXnhyqrOp22UD22uWFPdM98F4NhKExvLKeLROEKdYkiC3D1Bz8eZZT9nVbDCdv8MG1lnLRcQzh9j872Zz0MZOgbR8FBLKXk%2FJ6YAentYINetULV%2BwY%2BJ1onvT9iL78PnoyuGlEQcb%2FtYxjJR3BIEBat58DfF8mOvEpzIO8%2FezYreRiEqKJC6OM%2BRcTR2%2FgdxW5P8Ke5rH9gcfTuHDSmgJzIP0RYNbC%2BiN4u0o1nFp1T3U16hCCt2cacvuFbUejDce%2Fa3WF87EsBFsDN%2F%2FtLtRRMp%2FPY%2FW%2Fu9DAvR2X0SJyzK%2BoNvr5Ur1pbD6b9212hFgmYUPtFsTSVHsiU60yvVUI8aL%2Fy8a%2F5QGaGP2LG19YO0KHeaMnCEt0z6YMl9kkXmwJ1zo4VerFYe0kgImMQdhUNPrwxk9CPibkVpslZjNLsYcP2Gb8N2hliRISVZbRSWhemXQGrJG%2BWQjdkBw0M0%2BjK50XZCuUg8EM5d2S2z52lXMd9XD08uBJvG2jv0jzaFQSXTvhnO835MfrkppIEpFOmikelWT7g99MGhC2gOfEqEHopscOOiVqOsTz1I6vlwCQlRpXu5MPWarMQGOqUBlS0AoMJJvwWO0p9JW0V3BEH1w6E440ie5BurIvNoa4wIrUIILnNrxMhgcYMgiHTKCH8pd2zN7MbZWZv%2Bj53GbG6owBtEX1v0Zs7VvqhPePUEQza3e%2BYS%2F8OfMNmLwK1DJ%2FEwauhQA%2FLP%2BJTOWPeufW1y6OcYJH1GCCRgBerUhymTT056jbO40NmU8Guqmzdq%2FlMpuBzYWzEecVZVYDmQlqPO7Bpx&X-Amz-Signature=f7cfec6fc14ab57136c9b7556e6e38a148a86f2495016f38ac9536602cddf3b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A73WTDP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrDa%2FtUr91xkECm9nkNpSBI2yurWEB%2BwUtMWwXayxmiAiEA4YIVWrtREO96Q7RR5%2Fl5tyWS%2BaIRCxDzLBO49Tsog%2BgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlpYvKCcrCX4wvGkCrcAxsnioHIOUKqJEJfuBjTY6juUljRcfxkBy4bGdNsx81Qa9wNqfEDSXnhyqrOp22UD22uWFPdM98F4NhKExvLKeLROEKdYkiC3D1Bz8eZZT9nVbDCdv8MG1lnLRcQzh9j872Zz0MZOgbR8FBLKXk%2FJ6YAentYINetULV%2BwY%2BJ1onvT9iL78PnoyuGlEQcb%2FtYxjJR3BIEBat58DfF8mOvEpzIO8%2FezYreRiEqKJC6OM%2BRcTR2%2FgdxW5P8Ke5rH9gcfTuHDSmgJzIP0RYNbC%2BiN4u0o1nFp1T3U16hCCt2cacvuFbUejDce%2Fa3WF87EsBFsDN%2F%2FtLtRRMp%2FPY%2FW%2Fu9DAvR2X0SJyzK%2BoNvr5Ur1pbD6b9212hFgmYUPtFsTSVHsiU60yvVUI8aL%2Fy8a%2F5QGaGP2LG19YO0KHeaMnCEt0z6YMl9kkXmwJ1zo4VerFYe0kgImMQdhUNPrwxk9CPibkVpslZjNLsYcP2Gb8N2hliRISVZbRSWhemXQGrJG%2BWQjdkBw0M0%2BjK50XZCuUg8EM5d2S2z52lXMd9XD08uBJvG2jv0jzaFQSXTvhnO835MfrkppIEpFOmikelWT7g99MGhC2gOfEqEHopscOOiVqOsTz1I6vlwCQlRpXu5MPWarMQGOqUBlS0AoMJJvwWO0p9JW0V3BEH1w6E440ie5BurIvNoa4wIrUIILnNrxMhgcYMgiHTKCH8pd2zN7MbZWZv%2Bj53GbG6owBtEX1v0Zs7VvqhPePUEQza3e%2BYS%2F8OfMNmLwK1DJ%2FEwauhQA%2FLP%2BJTOWPeufW1y6OcYJH1GCCRgBerUhymTT056jbO40NmU8Guqmzdq%2FlMpuBzYWzEecVZVYDmQlqPO7Bpx&X-Amz-Signature=c83c1e00465749a007be1ce8aa56a8963ad0df2b8c3dd0e3cb3e0b9d1f384867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A73WTDP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrDa%2FtUr91xkECm9nkNpSBI2yurWEB%2BwUtMWwXayxmiAiEA4YIVWrtREO96Q7RR5%2Fl5tyWS%2BaIRCxDzLBO49Tsog%2BgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlpYvKCcrCX4wvGkCrcAxsnioHIOUKqJEJfuBjTY6juUljRcfxkBy4bGdNsx81Qa9wNqfEDSXnhyqrOp22UD22uWFPdM98F4NhKExvLKeLROEKdYkiC3D1Bz8eZZT9nVbDCdv8MG1lnLRcQzh9j872Zz0MZOgbR8FBLKXk%2FJ6YAentYINetULV%2BwY%2BJ1onvT9iL78PnoyuGlEQcb%2FtYxjJR3BIEBat58DfF8mOvEpzIO8%2FezYreRiEqKJC6OM%2BRcTR2%2FgdxW5P8Ke5rH9gcfTuHDSmgJzIP0RYNbC%2BiN4u0o1nFp1T3U16hCCt2cacvuFbUejDce%2Fa3WF87EsBFsDN%2F%2FtLtRRMp%2FPY%2FW%2Fu9DAvR2X0SJyzK%2BoNvr5Ur1pbD6b9212hFgmYUPtFsTSVHsiU60yvVUI8aL%2Fy8a%2F5QGaGP2LG19YO0KHeaMnCEt0z6YMl9kkXmwJ1zo4VerFYe0kgImMQdhUNPrwxk9CPibkVpslZjNLsYcP2Gb8N2hliRISVZbRSWhemXQGrJG%2BWQjdkBw0M0%2BjK50XZCuUg8EM5d2S2z52lXMd9XD08uBJvG2jv0jzaFQSXTvhnO835MfrkppIEpFOmikelWT7g99MGhC2gOfEqEHopscOOiVqOsTz1I6vlwCQlRpXu5MPWarMQGOqUBlS0AoMJJvwWO0p9JW0V3BEH1w6E440ie5BurIvNoa4wIrUIILnNrxMhgcYMgiHTKCH8pd2zN7MbZWZv%2Bj53GbG6owBtEX1v0Zs7VvqhPePUEQza3e%2BYS%2F8OfMNmLwK1DJ%2FEwauhQA%2FLP%2BJTOWPeufW1y6OcYJH1GCCRgBerUhymTT056jbO40NmU8Guqmzdq%2FlMpuBzYWzEecVZVYDmQlqPO7Bpx&X-Amz-Signature=67432734e267366120d6e64239f3d42d8b09932f22440f38c869d3c84a352d25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A73WTDP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrDa%2FtUr91xkECm9nkNpSBI2yurWEB%2BwUtMWwXayxmiAiEA4YIVWrtREO96Q7RR5%2Fl5tyWS%2BaIRCxDzLBO49Tsog%2BgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlpYvKCcrCX4wvGkCrcAxsnioHIOUKqJEJfuBjTY6juUljRcfxkBy4bGdNsx81Qa9wNqfEDSXnhyqrOp22UD22uWFPdM98F4NhKExvLKeLROEKdYkiC3D1Bz8eZZT9nVbDCdv8MG1lnLRcQzh9j872Zz0MZOgbR8FBLKXk%2FJ6YAentYINetULV%2BwY%2BJ1onvT9iL78PnoyuGlEQcb%2FtYxjJR3BIEBat58DfF8mOvEpzIO8%2FezYreRiEqKJC6OM%2BRcTR2%2FgdxW5P8Ke5rH9gcfTuHDSmgJzIP0RYNbC%2BiN4u0o1nFp1T3U16hCCt2cacvuFbUejDce%2Fa3WF87EsBFsDN%2F%2FtLtRRMp%2FPY%2FW%2Fu9DAvR2X0SJyzK%2BoNvr5Ur1pbD6b9212hFgmYUPtFsTSVHsiU60yvVUI8aL%2Fy8a%2F5QGaGP2LG19YO0KHeaMnCEt0z6YMl9kkXmwJ1zo4VerFYe0kgImMQdhUNPrwxk9CPibkVpslZjNLsYcP2Gb8N2hliRISVZbRSWhemXQGrJG%2BWQjdkBw0M0%2BjK50XZCuUg8EM5d2S2z52lXMd9XD08uBJvG2jv0jzaFQSXTvhnO835MfrkppIEpFOmikelWT7g99MGhC2gOfEqEHopscOOiVqOsTz1I6vlwCQlRpXu5MPWarMQGOqUBlS0AoMJJvwWO0p9JW0V3BEH1w6E440ie5BurIvNoa4wIrUIILnNrxMhgcYMgiHTKCH8pd2zN7MbZWZv%2Bj53GbG6owBtEX1v0Zs7VvqhPePUEQza3e%2BYS%2F8OfMNmLwK1DJ%2FEwauhQA%2FLP%2BJTOWPeufW1y6OcYJH1GCCRgBerUhymTT056jbO40NmU8Guqmzdq%2FlMpuBzYWzEecVZVYDmQlqPO7Bpx&X-Amz-Signature=599729a384a2616972f4d3902c68623fb74e9c8d82eded7f54fcc2a612bba72a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A73WTDP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrDa%2FtUr91xkECm9nkNpSBI2yurWEB%2BwUtMWwXayxmiAiEA4YIVWrtREO96Q7RR5%2Fl5tyWS%2BaIRCxDzLBO49Tsog%2BgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlpYvKCcrCX4wvGkCrcAxsnioHIOUKqJEJfuBjTY6juUljRcfxkBy4bGdNsx81Qa9wNqfEDSXnhyqrOp22UD22uWFPdM98F4NhKExvLKeLROEKdYkiC3D1Bz8eZZT9nVbDCdv8MG1lnLRcQzh9j872Zz0MZOgbR8FBLKXk%2FJ6YAentYINetULV%2BwY%2BJ1onvT9iL78PnoyuGlEQcb%2FtYxjJR3BIEBat58DfF8mOvEpzIO8%2FezYreRiEqKJC6OM%2BRcTR2%2FgdxW5P8Ke5rH9gcfTuHDSmgJzIP0RYNbC%2BiN4u0o1nFp1T3U16hCCt2cacvuFbUejDce%2Fa3WF87EsBFsDN%2F%2FtLtRRMp%2FPY%2FW%2Fu9DAvR2X0SJyzK%2BoNvr5Ur1pbD6b9212hFgmYUPtFsTSVHsiU60yvVUI8aL%2Fy8a%2F5QGaGP2LG19YO0KHeaMnCEt0z6YMl9kkXmwJ1zo4VerFYe0kgImMQdhUNPrwxk9CPibkVpslZjNLsYcP2Gb8N2hliRISVZbRSWhemXQGrJG%2BWQjdkBw0M0%2BjK50XZCuUg8EM5d2S2z52lXMd9XD08uBJvG2jv0jzaFQSXTvhnO835MfrkppIEpFOmikelWT7g99MGhC2gOfEqEHopscOOiVqOsTz1I6vlwCQlRpXu5MPWarMQGOqUBlS0AoMJJvwWO0p9JW0V3BEH1w6E440ie5BurIvNoa4wIrUIILnNrxMhgcYMgiHTKCH8pd2zN7MbZWZv%2Bj53GbG6owBtEX1v0Zs7VvqhPePUEQza3e%2BYS%2F8OfMNmLwK1DJ%2FEwauhQA%2FLP%2BJTOWPeufW1y6OcYJH1GCCRgBerUhymTT056jbO40NmU8Guqmzdq%2FlMpuBzYWzEecVZVYDmQlqPO7Bpx&X-Amz-Signature=5754858870ea1aced1816d70dca6197e3c8ee06b754d89d6d0c370f189df5572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A73WTDP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrDa%2FtUr91xkECm9nkNpSBI2yurWEB%2BwUtMWwXayxmiAiEA4YIVWrtREO96Q7RR5%2Fl5tyWS%2BaIRCxDzLBO49Tsog%2BgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlpYvKCcrCX4wvGkCrcAxsnioHIOUKqJEJfuBjTY6juUljRcfxkBy4bGdNsx81Qa9wNqfEDSXnhyqrOp22UD22uWFPdM98F4NhKExvLKeLROEKdYkiC3D1Bz8eZZT9nVbDCdv8MG1lnLRcQzh9j872Zz0MZOgbR8FBLKXk%2FJ6YAentYINetULV%2BwY%2BJ1onvT9iL78PnoyuGlEQcb%2FtYxjJR3BIEBat58DfF8mOvEpzIO8%2FezYreRiEqKJC6OM%2BRcTR2%2FgdxW5P8Ke5rH9gcfTuHDSmgJzIP0RYNbC%2BiN4u0o1nFp1T3U16hCCt2cacvuFbUejDce%2Fa3WF87EsBFsDN%2F%2FtLtRRMp%2FPY%2FW%2Fu9DAvR2X0SJyzK%2BoNvr5Ur1pbD6b9212hFgmYUPtFsTSVHsiU60yvVUI8aL%2Fy8a%2F5QGaGP2LG19YO0KHeaMnCEt0z6YMl9kkXmwJ1zo4VerFYe0kgImMQdhUNPrwxk9CPibkVpslZjNLsYcP2Gb8N2hliRISVZbRSWhemXQGrJG%2BWQjdkBw0M0%2BjK50XZCuUg8EM5d2S2z52lXMd9XD08uBJvG2jv0jzaFQSXTvhnO835MfrkppIEpFOmikelWT7g99MGhC2gOfEqEHopscOOiVqOsTz1I6vlwCQlRpXu5MPWarMQGOqUBlS0AoMJJvwWO0p9JW0V3BEH1w6E440ie5BurIvNoa4wIrUIILnNrxMhgcYMgiHTKCH8pd2zN7MbZWZv%2Bj53GbG6owBtEX1v0Zs7VvqhPePUEQza3e%2BYS%2F8OfMNmLwK1DJ%2FEwauhQA%2FLP%2BJTOWPeufW1y6OcYJH1GCCRgBerUhymTT056jbO40NmU8Guqmzdq%2FlMpuBzYWzEecVZVYDmQlqPO7Bpx&X-Amz-Signature=00ccc6348a5f782649e34c21a497eeabe64a8d0c93ef7912108d8431daa19a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A73WTDP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrDa%2FtUr91xkECm9nkNpSBI2yurWEB%2BwUtMWwXayxmiAiEA4YIVWrtREO96Q7RR5%2Fl5tyWS%2BaIRCxDzLBO49Tsog%2BgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlpYvKCcrCX4wvGkCrcAxsnioHIOUKqJEJfuBjTY6juUljRcfxkBy4bGdNsx81Qa9wNqfEDSXnhyqrOp22UD22uWFPdM98F4NhKExvLKeLROEKdYkiC3D1Bz8eZZT9nVbDCdv8MG1lnLRcQzh9j872Zz0MZOgbR8FBLKXk%2FJ6YAentYINetULV%2BwY%2BJ1onvT9iL78PnoyuGlEQcb%2FtYxjJR3BIEBat58DfF8mOvEpzIO8%2FezYreRiEqKJC6OM%2BRcTR2%2FgdxW5P8Ke5rH9gcfTuHDSmgJzIP0RYNbC%2BiN4u0o1nFp1T3U16hCCt2cacvuFbUejDce%2Fa3WF87EsBFsDN%2F%2FtLtRRMp%2FPY%2FW%2Fu9DAvR2X0SJyzK%2BoNvr5Ur1pbD6b9212hFgmYUPtFsTSVHsiU60yvVUI8aL%2Fy8a%2F5QGaGP2LG19YO0KHeaMnCEt0z6YMl9kkXmwJ1zo4VerFYe0kgImMQdhUNPrwxk9CPibkVpslZjNLsYcP2Gb8N2hliRISVZbRSWhemXQGrJG%2BWQjdkBw0M0%2BjK50XZCuUg8EM5d2S2z52lXMd9XD08uBJvG2jv0jzaFQSXTvhnO835MfrkppIEpFOmikelWT7g99MGhC2gOfEqEHopscOOiVqOsTz1I6vlwCQlRpXu5MPWarMQGOqUBlS0AoMJJvwWO0p9JW0V3BEH1w6E440ie5BurIvNoa4wIrUIILnNrxMhgcYMgiHTKCH8pd2zN7MbZWZv%2Bj53GbG6owBtEX1v0Zs7VvqhPePUEQza3e%2BYS%2F8OfMNmLwK1DJ%2FEwauhQA%2FLP%2BJTOWPeufW1y6OcYJH1GCCRgBerUhymTT056jbO40NmU8Guqmzdq%2FlMpuBzYWzEecVZVYDmQlqPO7Bpx&X-Amz-Signature=822f29a07d72307b4f2c7af68532e10f814bc9e1c601eddabe3975f2e6c16074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A73WTDP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrDa%2FtUr91xkECm9nkNpSBI2yurWEB%2BwUtMWwXayxmiAiEA4YIVWrtREO96Q7RR5%2Fl5tyWS%2BaIRCxDzLBO49Tsog%2BgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlpYvKCcrCX4wvGkCrcAxsnioHIOUKqJEJfuBjTY6juUljRcfxkBy4bGdNsx81Qa9wNqfEDSXnhyqrOp22UD22uWFPdM98F4NhKExvLKeLROEKdYkiC3D1Bz8eZZT9nVbDCdv8MG1lnLRcQzh9j872Zz0MZOgbR8FBLKXk%2FJ6YAentYINetULV%2BwY%2BJ1onvT9iL78PnoyuGlEQcb%2FtYxjJR3BIEBat58DfF8mOvEpzIO8%2FezYreRiEqKJC6OM%2BRcTR2%2FgdxW5P8Ke5rH9gcfTuHDSmgJzIP0RYNbC%2BiN4u0o1nFp1T3U16hCCt2cacvuFbUejDce%2Fa3WF87EsBFsDN%2F%2FtLtRRMp%2FPY%2FW%2Fu9DAvR2X0SJyzK%2BoNvr5Ur1pbD6b9212hFgmYUPtFsTSVHsiU60yvVUI8aL%2Fy8a%2F5QGaGP2LG19YO0KHeaMnCEt0z6YMl9kkXmwJ1zo4VerFYe0kgImMQdhUNPrwxk9CPibkVpslZjNLsYcP2Gb8N2hliRISVZbRSWhemXQGrJG%2BWQjdkBw0M0%2BjK50XZCuUg8EM5d2S2z52lXMd9XD08uBJvG2jv0jzaFQSXTvhnO835MfrkppIEpFOmikelWT7g99MGhC2gOfEqEHopscOOiVqOsTz1I6vlwCQlRpXu5MPWarMQGOqUBlS0AoMJJvwWO0p9JW0V3BEH1w6E440ie5BurIvNoa4wIrUIILnNrxMhgcYMgiHTKCH8pd2zN7MbZWZv%2Bj53GbG6owBtEX1v0Zs7VvqhPePUEQza3e%2BYS%2F8OfMNmLwK1DJ%2FEwauhQA%2FLP%2BJTOWPeufW1y6OcYJH1GCCRgBerUhymTT056jbO40NmU8Guqmzdq%2FlMpuBzYWzEecVZVYDmQlqPO7Bpx&X-Amz-Signature=c870f44538d93e112fbb4c2fd4ab176ca556a36ceec2ae5bfdf04e0172573f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A73WTDP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrDa%2FtUr91xkECm9nkNpSBI2yurWEB%2BwUtMWwXayxmiAiEA4YIVWrtREO96Q7RR5%2Fl5tyWS%2BaIRCxDzLBO49Tsog%2BgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlpYvKCcrCX4wvGkCrcAxsnioHIOUKqJEJfuBjTY6juUljRcfxkBy4bGdNsx81Qa9wNqfEDSXnhyqrOp22UD22uWFPdM98F4NhKExvLKeLROEKdYkiC3D1Bz8eZZT9nVbDCdv8MG1lnLRcQzh9j872Zz0MZOgbR8FBLKXk%2FJ6YAentYINetULV%2BwY%2BJ1onvT9iL78PnoyuGlEQcb%2FtYxjJR3BIEBat58DfF8mOvEpzIO8%2FezYreRiEqKJC6OM%2BRcTR2%2FgdxW5P8Ke5rH9gcfTuHDSmgJzIP0RYNbC%2BiN4u0o1nFp1T3U16hCCt2cacvuFbUejDce%2Fa3WF87EsBFsDN%2F%2FtLtRRMp%2FPY%2FW%2Fu9DAvR2X0SJyzK%2BoNvr5Ur1pbD6b9212hFgmYUPtFsTSVHsiU60yvVUI8aL%2Fy8a%2F5QGaGP2LG19YO0KHeaMnCEt0z6YMl9kkXmwJ1zo4VerFYe0kgImMQdhUNPrwxk9CPibkVpslZjNLsYcP2Gb8N2hliRISVZbRSWhemXQGrJG%2BWQjdkBw0M0%2BjK50XZCuUg8EM5d2S2z52lXMd9XD08uBJvG2jv0jzaFQSXTvhnO835MfrkppIEpFOmikelWT7g99MGhC2gOfEqEHopscOOiVqOsTz1I6vlwCQlRpXu5MPWarMQGOqUBlS0AoMJJvwWO0p9JW0V3BEH1w6E440ie5BurIvNoa4wIrUIILnNrxMhgcYMgiHTKCH8pd2zN7MbZWZv%2Bj53GbG6owBtEX1v0Zs7VvqhPePUEQza3e%2BYS%2F8OfMNmLwK1DJ%2FEwauhQA%2FLP%2BJTOWPeufW1y6OcYJH1GCCRgBerUhymTT056jbO40NmU8Guqmzdq%2FlMpuBzYWzEecVZVYDmQlqPO7Bpx&X-Amz-Signature=7d6a5a3d8c17a8b7fab6122202acba4de798046fca12137bdf1ed74e1c9c5769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A73WTDP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrDa%2FtUr91xkECm9nkNpSBI2yurWEB%2BwUtMWwXayxmiAiEA4YIVWrtREO96Q7RR5%2Fl5tyWS%2BaIRCxDzLBO49Tsog%2BgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlpYvKCcrCX4wvGkCrcAxsnioHIOUKqJEJfuBjTY6juUljRcfxkBy4bGdNsx81Qa9wNqfEDSXnhyqrOp22UD22uWFPdM98F4NhKExvLKeLROEKdYkiC3D1Bz8eZZT9nVbDCdv8MG1lnLRcQzh9j872Zz0MZOgbR8FBLKXk%2FJ6YAentYINetULV%2BwY%2BJ1onvT9iL78PnoyuGlEQcb%2FtYxjJR3BIEBat58DfF8mOvEpzIO8%2FezYreRiEqKJC6OM%2BRcTR2%2FgdxW5P8Ke5rH9gcfTuHDSmgJzIP0RYNbC%2BiN4u0o1nFp1T3U16hCCt2cacvuFbUejDce%2Fa3WF87EsBFsDN%2F%2FtLtRRMp%2FPY%2FW%2Fu9DAvR2X0SJyzK%2BoNvr5Ur1pbD6b9212hFgmYUPtFsTSVHsiU60yvVUI8aL%2Fy8a%2F5QGaGP2LG19YO0KHeaMnCEt0z6YMl9kkXmwJ1zo4VerFYe0kgImMQdhUNPrwxk9CPibkVpslZjNLsYcP2Gb8N2hliRISVZbRSWhemXQGrJG%2BWQjdkBw0M0%2BjK50XZCuUg8EM5d2S2z52lXMd9XD08uBJvG2jv0jzaFQSXTvhnO835MfrkppIEpFOmikelWT7g99MGhC2gOfEqEHopscOOiVqOsTz1I6vlwCQlRpXu5MPWarMQGOqUBlS0AoMJJvwWO0p9JW0V3BEH1w6E440ie5BurIvNoa4wIrUIILnNrxMhgcYMgiHTKCH8pd2zN7MbZWZv%2Bj53GbG6owBtEX1v0Zs7VvqhPePUEQza3e%2BYS%2F8OfMNmLwK1DJ%2FEwauhQA%2FLP%2BJTOWPeufW1y6OcYJH1GCCRgBerUhymTT056jbO40NmU8Guqmzdq%2FlMpuBzYWzEecVZVYDmQlqPO7Bpx&X-Amz-Signature=e25cb41af38725c4509deac4f9cce4be7401249025ffc00d0967af750705eeb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEV5L3MY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYfTBuVe6uZ5Fw7OXAjQzIX7qjYHHl2QW%2Bwtuyp8Sj%2BAIgUensqkmveBQ8%2Bnwog1hnjNx2fPbnfaYIQM9BGvXsgGEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZQgVCV0VK0bPlFJCrcA%2FjWf%2FcPrUyu2pCrWT0z6c527rv8XNkWU%2BWMberPQOz5gtylKCf1SdQKk3iYcq8m5FWpACjRM%2B%2B1zs%2F4qIoKhtkFQCWsPo4DOMSysNvp8d39JUWG4ONBY9uZGx%2FTZPJQGSwGFLVnU3pK4aa0j6Lj7Dz05dGjb2psPsrVt87Ww3pk5cxKEfvABaG4wVZjOfZnZb4nYoMj4GQ2%2FnVSOv7rrRutFTScj9HUET%2FDQQcwilWDQ3Ekh%2FQp93WvRI98ljWCt%2F1ue50Svkne9TMZz0Z37WCmeyFhSDEDrPhdkPKzmyi5DLXJixyYfP%2FGBx9N2qFTH9CqEpQS1NzwkfEQPPSqbxy7Smd2R4Xv%2FiYCAW8zWgWCnocteViorRUmvw19SvN7rvmZl1PO7ky2VjJYZJ726AzGSGV%2FKk0ckU3MMfrX%2BMc3TF8UxGpkieSBpyIBZE44%2FCeWvNusWV4y91uxI9uoMWON%2BmmlwmNAfGbxWOWzgFJoCk%2FsiB6zAam76jRESd8yR7gsbSnu9eamLzz0EgIId5NoBp%2BaprSGv4%2Bu2mOzMZHnvLG8BaBXVZFmi8WpKeXyz9x%2FPeZ0cKbubKZKuhywQX%2B697IkqR49zCJZheQ%2FaKGnKLYK5gX6ofrFuSCCMJGbrMQGOqUBr0nyJMgra3xydWCQXdrrq%2BS6uRumR8ZFhzA5%2FlkeStGftM89axN%2Bp4V5WFxPO%2BegFt9qxDjEypKSqrR2gkKr27XzXwt3eEA%2FiuKYE8%2BhNBxgx49xoIUXdklddS3RLHbQZKLchrJMhg5EaQS0jBH1akkBSBpWpBfFxeE3b2HtnUvXxPjcF5bcHKdTIrWK9by%2FXmr0EhRzE7VsACbOfdSsQDbHtlzo&X-Amz-Signature=c229ce8cade0b8b949f395626269d38bea6ef420ff6f9b112a4d976ea4d52c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEV5L3MY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYfTBuVe6uZ5Fw7OXAjQzIX7qjYHHl2QW%2Bwtuyp8Sj%2BAIgUensqkmveBQ8%2Bnwog1hnjNx2fPbnfaYIQM9BGvXsgGEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZQgVCV0VK0bPlFJCrcA%2FjWf%2FcPrUyu2pCrWT0z6c527rv8XNkWU%2BWMberPQOz5gtylKCf1SdQKk3iYcq8m5FWpACjRM%2B%2B1zs%2F4qIoKhtkFQCWsPo4DOMSysNvp8d39JUWG4ONBY9uZGx%2FTZPJQGSwGFLVnU3pK4aa0j6Lj7Dz05dGjb2psPsrVt87Ww3pk5cxKEfvABaG4wVZjOfZnZb4nYoMj4GQ2%2FnVSOv7rrRutFTScj9HUET%2FDQQcwilWDQ3Ekh%2FQp93WvRI98ljWCt%2F1ue50Svkne9TMZz0Z37WCmeyFhSDEDrPhdkPKzmyi5DLXJixyYfP%2FGBx9N2qFTH9CqEpQS1NzwkfEQPPSqbxy7Smd2R4Xv%2FiYCAW8zWgWCnocteViorRUmvw19SvN7rvmZl1PO7ky2VjJYZJ726AzGSGV%2FKk0ckU3MMfrX%2BMc3TF8UxGpkieSBpyIBZE44%2FCeWvNusWV4y91uxI9uoMWON%2BmmlwmNAfGbxWOWzgFJoCk%2FsiB6zAam76jRESd8yR7gsbSnu9eamLzz0EgIId5NoBp%2BaprSGv4%2Bu2mOzMZHnvLG8BaBXVZFmi8WpKeXyz9x%2FPeZ0cKbubKZKuhywQX%2B697IkqR49zCJZheQ%2FaKGnKLYK5gX6ofrFuSCCMJGbrMQGOqUBr0nyJMgra3xydWCQXdrrq%2BS6uRumR8ZFhzA5%2FlkeStGftM89axN%2Bp4V5WFxPO%2BegFt9qxDjEypKSqrR2gkKr27XzXwt3eEA%2FiuKYE8%2BhNBxgx49xoIUXdklddS3RLHbQZKLchrJMhg5EaQS0jBH1akkBSBpWpBfFxeE3b2HtnUvXxPjcF5bcHKdTIrWK9by%2FXmr0EhRzE7VsACbOfdSsQDbHtlzo&X-Amz-Signature=5eb6653bd91fe9171d6f2ac6f3f5c49821ca2f60494555b48e95b4a50b77ae20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEV5L3MY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYfTBuVe6uZ5Fw7OXAjQzIX7qjYHHl2QW%2Bwtuyp8Sj%2BAIgUensqkmveBQ8%2Bnwog1hnjNx2fPbnfaYIQM9BGvXsgGEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZQgVCV0VK0bPlFJCrcA%2FjWf%2FcPrUyu2pCrWT0z6c527rv8XNkWU%2BWMberPQOz5gtylKCf1SdQKk3iYcq8m5FWpACjRM%2B%2B1zs%2F4qIoKhtkFQCWsPo4DOMSysNvp8d39JUWG4ONBY9uZGx%2FTZPJQGSwGFLVnU3pK4aa0j6Lj7Dz05dGjb2psPsrVt87Ww3pk5cxKEfvABaG4wVZjOfZnZb4nYoMj4GQ2%2FnVSOv7rrRutFTScj9HUET%2FDQQcwilWDQ3Ekh%2FQp93WvRI98ljWCt%2F1ue50Svkne9TMZz0Z37WCmeyFhSDEDrPhdkPKzmyi5DLXJixyYfP%2FGBx9N2qFTH9CqEpQS1NzwkfEQPPSqbxy7Smd2R4Xv%2FiYCAW8zWgWCnocteViorRUmvw19SvN7rvmZl1PO7ky2VjJYZJ726AzGSGV%2FKk0ckU3MMfrX%2BMc3TF8UxGpkieSBpyIBZE44%2FCeWvNusWV4y91uxI9uoMWON%2BmmlwmNAfGbxWOWzgFJoCk%2FsiB6zAam76jRESd8yR7gsbSnu9eamLzz0EgIId5NoBp%2BaprSGv4%2Bu2mOzMZHnvLG8BaBXVZFmi8WpKeXyz9x%2FPeZ0cKbubKZKuhywQX%2B697IkqR49zCJZheQ%2FaKGnKLYK5gX6ofrFuSCCMJGbrMQGOqUBr0nyJMgra3xydWCQXdrrq%2BS6uRumR8ZFhzA5%2FlkeStGftM89axN%2Bp4V5WFxPO%2BegFt9qxDjEypKSqrR2gkKr27XzXwt3eEA%2FiuKYE8%2BhNBxgx49xoIUXdklddS3RLHbQZKLchrJMhg5EaQS0jBH1akkBSBpWpBfFxeE3b2HtnUvXxPjcF5bcHKdTIrWK9by%2FXmr0EhRzE7VsACbOfdSsQDbHtlzo&X-Amz-Signature=86f49ee678dcd72b12b4170efb60c500ab01ce6f98360c348f8d6f2f573fbb03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEV5L3MY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYfTBuVe6uZ5Fw7OXAjQzIX7qjYHHl2QW%2Bwtuyp8Sj%2BAIgUensqkmveBQ8%2Bnwog1hnjNx2fPbnfaYIQM9BGvXsgGEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZQgVCV0VK0bPlFJCrcA%2FjWf%2FcPrUyu2pCrWT0z6c527rv8XNkWU%2BWMberPQOz5gtylKCf1SdQKk3iYcq8m5FWpACjRM%2B%2B1zs%2F4qIoKhtkFQCWsPo4DOMSysNvp8d39JUWG4ONBY9uZGx%2FTZPJQGSwGFLVnU3pK4aa0j6Lj7Dz05dGjb2psPsrVt87Ww3pk5cxKEfvABaG4wVZjOfZnZb4nYoMj4GQ2%2FnVSOv7rrRutFTScj9HUET%2FDQQcwilWDQ3Ekh%2FQp93WvRI98ljWCt%2F1ue50Svkne9TMZz0Z37WCmeyFhSDEDrPhdkPKzmyi5DLXJixyYfP%2FGBx9N2qFTH9CqEpQS1NzwkfEQPPSqbxy7Smd2R4Xv%2FiYCAW8zWgWCnocteViorRUmvw19SvN7rvmZl1PO7ky2VjJYZJ726AzGSGV%2FKk0ckU3MMfrX%2BMc3TF8UxGpkieSBpyIBZE44%2FCeWvNusWV4y91uxI9uoMWON%2BmmlwmNAfGbxWOWzgFJoCk%2FsiB6zAam76jRESd8yR7gsbSnu9eamLzz0EgIId5NoBp%2BaprSGv4%2Bu2mOzMZHnvLG8BaBXVZFmi8WpKeXyz9x%2FPeZ0cKbubKZKuhywQX%2B697IkqR49zCJZheQ%2FaKGnKLYK5gX6ofrFuSCCMJGbrMQGOqUBr0nyJMgra3xydWCQXdrrq%2BS6uRumR8ZFhzA5%2FlkeStGftM89axN%2Bp4V5WFxPO%2BegFt9qxDjEypKSqrR2gkKr27XzXwt3eEA%2FiuKYE8%2BhNBxgx49xoIUXdklddS3RLHbQZKLchrJMhg5EaQS0jBH1akkBSBpWpBfFxeE3b2HtnUvXxPjcF5bcHKdTIrWK9by%2FXmr0EhRzE7VsACbOfdSsQDbHtlzo&X-Amz-Signature=270e08d804936e745ea4b8cec0b1736447a0500704a8cc05754b539943a1d7ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEV5L3MY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYfTBuVe6uZ5Fw7OXAjQzIX7qjYHHl2QW%2Bwtuyp8Sj%2BAIgUensqkmveBQ8%2Bnwog1hnjNx2fPbnfaYIQM9BGvXsgGEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZQgVCV0VK0bPlFJCrcA%2FjWf%2FcPrUyu2pCrWT0z6c527rv8XNkWU%2BWMberPQOz5gtylKCf1SdQKk3iYcq8m5FWpACjRM%2B%2B1zs%2F4qIoKhtkFQCWsPo4DOMSysNvp8d39JUWG4ONBY9uZGx%2FTZPJQGSwGFLVnU3pK4aa0j6Lj7Dz05dGjb2psPsrVt87Ww3pk5cxKEfvABaG4wVZjOfZnZb4nYoMj4GQ2%2FnVSOv7rrRutFTScj9HUET%2FDQQcwilWDQ3Ekh%2FQp93WvRI98ljWCt%2F1ue50Svkne9TMZz0Z37WCmeyFhSDEDrPhdkPKzmyi5DLXJixyYfP%2FGBx9N2qFTH9CqEpQS1NzwkfEQPPSqbxy7Smd2R4Xv%2FiYCAW8zWgWCnocteViorRUmvw19SvN7rvmZl1PO7ky2VjJYZJ726AzGSGV%2FKk0ckU3MMfrX%2BMc3TF8UxGpkieSBpyIBZE44%2FCeWvNusWV4y91uxI9uoMWON%2BmmlwmNAfGbxWOWzgFJoCk%2FsiB6zAam76jRESd8yR7gsbSnu9eamLzz0EgIId5NoBp%2BaprSGv4%2Bu2mOzMZHnvLG8BaBXVZFmi8WpKeXyz9x%2FPeZ0cKbubKZKuhywQX%2B697IkqR49zCJZheQ%2FaKGnKLYK5gX6ofrFuSCCMJGbrMQGOqUBr0nyJMgra3xydWCQXdrrq%2BS6uRumR8ZFhzA5%2FlkeStGftM89axN%2Bp4V5WFxPO%2BegFt9qxDjEypKSqrR2gkKr27XzXwt3eEA%2FiuKYE8%2BhNBxgx49xoIUXdklddS3RLHbQZKLchrJMhg5EaQS0jBH1akkBSBpWpBfFxeE3b2HtnUvXxPjcF5bcHKdTIrWK9by%2FXmr0EhRzE7VsACbOfdSsQDbHtlzo&X-Amz-Signature=3c0affd991f9872c015edf4dc32daf3bef8712050062633e33464c64278da5fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEV5L3MY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYfTBuVe6uZ5Fw7OXAjQzIX7qjYHHl2QW%2Bwtuyp8Sj%2BAIgUensqkmveBQ8%2Bnwog1hnjNx2fPbnfaYIQM9BGvXsgGEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZQgVCV0VK0bPlFJCrcA%2FjWf%2FcPrUyu2pCrWT0z6c527rv8XNkWU%2BWMberPQOz5gtylKCf1SdQKk3iYcq8m5FWpACjRM%2B%2B1zs%2F4qIoKhtkFQCWsPo4DOMSysNvp8d39JUWG4ONBY9uZGx%2FTZPJQGSwGFLVnU3pK4aa0j6Lj7Dz05dGjb2psPsrVt87Ww3pk5cxKEfvABaG4wVZjOfZnZb4nYoMj4GQ2%2FnVSOv7rrRutFTScj9HUET%2FDQQcwilWDQ3Ekh%2FQp93WvRI98ljWCt%2F1ue50Svkne9TMZz0Z37WCmeyFhSDEDrPhdkPKzmyi5DLXJixyYfP%2FGBx9N2qFTH9CqEpQS1NzwkfEQPPSqbxy7Smd2R4Xv%2FiYCAW8zWgWCnocteViorRUmvw19SvN7rvmZl1PO7ky2VjJYZJ726AzGSGV%2FKk0ckU3MMfrX%2BMc3TF8UxGpkieSBpyIBZE44%2FCeWvNusWV4y91uxI9uoMWON%2BmmlwmNAfGbxWOWzgFJoCk%2FsiB6zAam76jRESd8yR7gsbSnu9eamLzz0EgIId5NoBp%2BaprSGv4%2Bu2mOzMZHnvLG8BaBXVZFmi8WpKeXyz9x%2FPeZ0cKbubKZKuhywQX%2B697IkqR49zCJZheQ%2FaKGnKLYK5gX6ofrFuSCCMJGbrMQGOqUBr0nyJMgra3xydWCQXdrrq%2BS6uRumR8ZFhzA5%2FlkeStGftM89axN%2Bp4V5WFxPO%2BegFt9qxDjEypKSqrR2gkKr27XzXwt3eEA%2FiuKYE8%2BhNBxgx49xoIUXdklddS3RLHbQZKLchrJMhg5EaQS0jBH1akkBSBpWpBfFxeE3b2HtnUvXxPjcF5bcHKdTIrWK9by%2FXmr0EhRzE7VsACbOfdSsQDbHtlzo&X-Amz-Signature=7f4ee4bbf11ca7accd96e7a7ebc2e3c443fbb2cbeec9a3a43f6263fb6d8595bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEV5L3MY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYfTBuVe6uZ5Fw7OXAjQzIX7qjYHHl2QW%2Bwtuyp8Sj%2BAIgUensqkmveBQ8%2Bnwog1hnjNx2fPbnfaYIQM9BGvXsgGEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZQgVCV0VK0bPlFJCrcA%2FjWf%2FcPrUyu2pCrWT0z6c527rv8XNkWU%2BWMberPQOz5gtylKCf1SdQKk3iYcq8m5FWpACjRM%2B%2B1zs%2F4qIoKhtkFQCWsPo4DOMSysNvp8d39JUWG4ONBY9uZGx%2FTZPJQGSwGFLVnU3pK4aa0j6Lj7Dz05dGjb2psPsrVt87Ww3pk5cxKEfvABaG4wVZjOfZnZb4nYoMj4GQ2%2FnVSOv7rrRutFTScj9HUET%2FDQQcwilWDQ3Ekh%2FQp93WvRI98ljWCt%2F1ue50Svkne9TMZz0Z37WCmeyFhSDEDrPhdkPKzmyi5DLXJixyYfP%2FGBx9N2qFTH9CqEpQS1NzwkfEQPPSqbxy7Smd2R4Xv%2FiYCAW8zWgWCnocteViorRUmvw19SvN7rvmZl1PO7ky2VjJYZJ726AzGSGV%2FKk0ckU3MMfrX%2BMc3TF8UxGpkieSBpyIBZE44%2FCeWvNusWV4y91uxI9uoMWON%2BmmlwmNAfGbxWOWzgFJoCk%2FsiB6zAam76jRESd8yR7gsbSnu9eamLzz0EgIId5NoBp%2BaprSGv4%2Bu2mOzMZHnvLG8BaBXVZFmi8WpKeXyz9x%2FPeZ0cKbubKZKuhywQX%2B697IkqR49zCJZheQ%2FaKGnKLYK5gX6ofrFuSCCMJGbrMQGOqUBr0nyJMgra3xydWCQXdrrq%2BS6uRumR8ZFhzA5%2FlkeStGftM89axN%2Bp4V5WFxPO%2BegFt9qxDjEypKSqrR2gkKr27XzXwt3eEA%2FiuKYE8%2BhNBxgx49xoIUXdklddS3RLHbQZKLchrJMhg5EaQS0jBH1akkBSBpWpBfFxeE3b2HtnUvXxPjcF5bcHKdTIrWK9by%2FXmr0EhRzE7VsACbOfdSsQDbHtlzo&X-Amz-Signature=16d84f380d47e4eccd348fd78a70818f0fb2320b5994faa1c82ab6414c2acb54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
