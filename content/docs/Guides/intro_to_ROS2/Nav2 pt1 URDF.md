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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD5WIDK2%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVXgiBRqQuXqDZzRHjm7%2FSgnya9%2Fh%2FCEqq5bHxiqHv0AIgNtVefqfcnCoQzlyKEco9XKSGfTx2tO2Ttk9kW5n%2BRVUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFrFLXOuiHqmuom8WSrcAxely1Vi1qUGhGAg5MDn8SpTw7s%2FRHO1AtX3EvOhDmJBnR6atRSEdXZo4iL3DOK6RZL69YFR3JNxToQA2uLrJw2GEn5jGnprQEGd45zjJVwd%2ByBaqfzKaTCrYL%2B5lP1Xg8wTHYVd5%2FchIT38gjom3A1Li7cj7MqNYtQGfeIO73EwNTt9Y5aq3J9LPpL2G1gXpPSCOTg0eTL0kk2Wl3epM%2FeLl%2B1jeev58pVZcoy0kdbt%2BLzkpCQKG%2F2WtSH6xTuKemi8DGGe%2BSGkRo8rgZBkLJiDoXElZegD3CrYxgQ9VGEF%2BTOpyeujRONECvEx0yEGLsDVrIImrg2CWuU2xjfe29GL%2FprD%2FrjPIwNycMdzzqCY9T26t9yltRFb9O1%2FWGmTxVnjbZGFOpmuIRFbBb301gXOWYytJH3ANsuxcW6MIqkED8NiNPlQwp%2B6FADmMB2Ma9Vn00tzk%2BC2p6zrMvcIwSTdfcUWopv4v2fLAaH%2F7ge%2Fhd1T4lPLq84mJIo2lV3DM1zrJABBvZdK6BEJ%2BLXllLceE3oLh45s%2B1jeW9KIUpwA7YTAc4zXHr8jWRHf6vMN0AReQZn1SvbTF126XmznDt1uoDsUSYDjugHsmhnkwG0TvZBl6Q%2F%2FAwYMRHseMJCqtscGOqUBV1ON%2B7PTCahagBoj6HB5sPf3aUxnXmHwXQiNb2dJGRI9lj%2BT7EakgXHeS0QIewpEa5UZKZu1LT6H9cj2Z1CRKlTzpg8ybPMgwEgYzzbHwrxo54Uhq%2FuVKpBRxIzW7ukUo03UF0RVCPzGJm5t0mkpep%2FpiCL5tDz1vWF9fJzJBJXY2SzvjJUiI15ZCUxXEXPWeDRkpGUiRchkkezGlnlk3EbxhwqO&X-Amz-Signature=1a8ba0ae9ee00e011feee08aecd6c3c9ef2170ed1f7911183f4d0c8e99e5d577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD5WIDK2%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVXgiBRqQuXqDZzRHjm7%2FSgnya9%2Fh%2FCEqq5bHxiqHv0AIgNtVefqfcnCoQzlyKEco9XKSGfTx2tO2Ttk9kW5n%2BRVUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFrFLXOuiHqmuom8WSrcAxely1Vi1qUGhGAg5MDn8SpTw7s%2FRHO1AtX3EvOhDmJBnR6atRSEdXZo4iL3DOK6RZL69YFR3JNxToQA2uLrJw2GEn5jGnprQEGd45zjJVwd%2ByBaqfzKaTCrYL%2B5lP1Xg8wTHYVd5%2FchIT38gjom3A1Li7cj7MqNYtQGfeIO73EwNTt9Y5aq3J9LPpL2G1gXpPSCOTg0eTL0kk2Wl3epM%2FeLl%2B1jeev58pVZcoy0kdbt%2BLzkpCQKG%2F2WtSH6xTuKemi8DGGe%2BSGkRo8rgZBkLJiDoXElZegD3CrYxgQ9VGEF%2BTOpyeujRONECvEx0yEGLsDVrIImrg2CWuU2xjfe29GL%2FprD%2FrjPIwNycMdzzqCY9T26t9yltRFb9O1%2FWGmTxVnjbZGFOpmuIRFbBb301gXOWYytJH3ANsuxcW6MIqkED8NiNPlQwp%2B6FADmMB2Ma9Vn00tzk%2BC2p6zrMvcIwSTdfcUWopv4v2fLAaH%2F7ge%2Fhd1T4lPLq84mJIo2lV3DM1zrJABBvZdK6BEJ%2BLXllLceE3oLh45s%2B1jeW9KIUpwA7YTAc4zXHr8jWRHf6vMN0AReQZn1SvbTF126XmznDt1uoDsUSYDjugHsmhnkwG0TvZBl6Q%2F%2FAwYMRHseMJCqtscGOqUBV1ON%2B7PTCahagBoj6HB5sPf3aUxnXmHwXQiNb2dJGRI9lj%2BT7EakgXHeS0QIewpEa5UZKZu1LT6H9cj2Z1CRKlTzpg8ybPMgwEgYzzbHwrxo54Uhq%2FuVKpBRxIzW7ukUo03UF0RVCPzGJm5t0mkpep%2FpiCL5tDz1vWF9fJzJBJXY2SzvjJUiI15ZCUxXEXPWeDRkpGUiRchkkezGlnlk3EbxhwqO&X-Amz-Signature=3996896fd0f194e464a16c7534e90a9c3384f1b75ab5a1e3a08503e0419003cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD5WIDK2%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVXgiBRqQuXqDZzRHjm7%2FSgnya9%2Fh%2FCEqq5bHxiqHv0AIgNtVefqfcnCoQzlyKEco9XKSGfTx2tO2Ttk9kW5n%2BRVUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFrFLXOuiHqmuom8WSrcAxely1Vi1qUGhGAg5MDn8SpTw7s%2FRHO1AtX3EvOhDmJBnR6atRSEdXZo4iL3DOK6RZL69YFR3JNxToQA2uLrJw2GEn5jGnprQEGd45zjJVwd%2ByBaqfzKaTCrYL%2B5lP1Xg8wTHYVd5%2FchIT38gjom3A1Li7cj7MqNYtQGfeIO73EwNTt9Y5aq3J9LPpL2G1gXpPSCOTg0eTL0kk2Wl3epM%2FeLl%2B1jeev58pVZcoy0kdbt%2BLzkpCQKG%2F2WtSH6xTuKemi8DGGe%2BSGkRo8rgZBkLJiDoXElZegD3CrYxgQ9VGEF%2BTOpyeujRONECvEx0yEGLsDVrIImrg2CWuU2xjfe29GL%2FprD%2FrjPIwNycMdzzqCY9T26t9yltRFb9O1%2FWGmTxVnjbZGFOpmuIRFbBb301gXOWYytJH3ANsuxcW6MIqkED8NiNPlQwp%2B6FADmMB2Ma9Vn00tzk%2BC2p6zrMvcIwSTdfcUWopv4v2fLAaH%2F7ge%2Fhd1T4lPLq84mJIo2lV3DM1zrJABBvZdK6BEJ%2BLXllLceE3oLh45s%2B1jeW9KIUpwA7YTAc4zXHr8jWRHf6vMN0AReQZn1SvbTF126XmznDt1uoDsUSYDjugHsmhnkwG0TvZBl6Q%2F%2FAwYMRHseMJCqtscGOqUBV1ON%2B7PTCahagBoj6HB5sPf3aUxnXmHwXQiNb2dJGRI9lj%2BT7EakgXHeS0QIewpEa5UZKZu1LT6H9cj2Z1CRKlTzpg8ybPMgwEgYzzbHwrxo54Uhq%2FuVKpBRxIzW7ukUo03UF0RVCPzGJm5t0mkpep%2FpiCL5tDz1vWF9fJzJBJXY2SzvjJUiI15ZCUxXEXPWeDRkpGUiRchkkezGlnlk3EbxhwqO&X-Amz-Signature=7a76a1b5769f8ddab08a71f9e61a224615a927ed5d065fb2346cf753f34579eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD5WIDK2%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVXgiBRqQuXqDZzRHjm7%2FSgnya9%2Fh%2FCEqq5bHxiqHv0AIgNtVefqfcnCoQzlyKEco9XKSGfTx2tO2Ttk9kW5n%2BRVUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFrFLXOuiHqmuom8WSrcAxely1Vi1qUGhGAg5MDn8SpTw7s%2FRHO1AtX3EvOhDmJBnR6atRSEdXZo4iL3DOK6RZL69YFR3JNxToQA2uLrJw2GEn5jGnprQEGd45zjJVwd%2ByBaqfzKaTCrYL%2B5lP1Xg8wTHYVd5%2FchIT38gjom3A1Li7cj7MqNYtQGfeIO73EwNTt9Y5aq3J9LPpL2G1gXpPSCOTg0eTL0kk2Wl3epM%2FeLl%2B1jeev58pVZcoy0kdbt%2BLzkpCQKG%2F2WtSH6xTuKemi8DGGe%2BSGkRo8rgZBkLJiDoXElZegD3CrYxgQ9VGEF%2BTOpyeujRONECvEx0yEGLsDVrIImrg2CWuU2xjfe29GL%2FprD%2FrjPIwNycMdzzqCY9T26t9yltRFb9O1%2FWGmTxVnjbZGFOpmuIRFbBb301gXOWYytJH3ANsuxcW6MIqkED8NiNPlQwp%2B6FADmMB2Ma9Vn00tzk%2BC2p6zrMvcIwSTdfcUWopv4v2fLAaH%2F7ge%2Fhd1T4lPLq84mJIo2lV3DM1zrJABBvZdK6BEJ%2BLXllLceE3oLh45s%2B1jeW9KIUpwA7YTAc4zXHr8jWRHf6vMN0AReQZn1SvbTF126XmznDt1uoDsUSYDjugHsmhnkwG0TvZBl6Q%2F%2FAwYMRHseMJCqtscGOqUBV1ON%2B7PTCahagBoj6HB5sPf3aUxnXmHwXQiNb2dJGRI9lj%2BT7EakgXHeS0QIewpEa5UZKZu1LT6H9cj2Z1CRKlTzpg8ybPMgwEgYzzbHwrxo54Uhq%2FuVKpBRxIzW7ukUo03UF0RVCPzGJm5t0mkpep%2FpiCL5tDz1vWF9fJzJBJXY2SzvjJUiI15ZCUxXEXPWeDRkpGUiRchkkezGlnlk3EbxhwqO&X-Amz-Signature=8a168ae63aff55d4acb7fb814c82a44067456e128d175a3929615bef9afa229f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD5WIDK2%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVXgiBRqQuXqDZzRHjm7%2FSgnya9%2Fh%2FCEqq5bHxiqHv0AIgNtVefqfcnCoQzlyKEco9XKSGfTx2tO2Ttk9kW5n%2BRVUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFrFLXOuiHqmuom8WSrcAxely1Vi1qUGhGAg5MDn8SpTw7s%2FRHO1AtX3EvOhDmJBnR6atRSEdXZo4iL3DOK6RZL69YFR3JNxToQA2uLrJw2GEn5jGnprQEGd45zjJVwd%2ByBaqfzKaTCrYL%2B5lP1Xg8wTHYVd5%2FchIT38gjom3A1Li7cj7MqNYtQGfeIO73EwNTt9Y5aq3J9LPpL2G1gXpPSCOTg0eTL0kk2Wl3epM%2FeLl%2B1jeev58pVZcoy0kdbt%2BLzkpCQKG%2F2WtSH6xTuKemi8DGGe%2BSGkRo8rgZBkLJiDoXElZegD3CrYxgQ9VGEF%2BTOpyeujRONECvEx0yEGLsDVrIImrg2CWuU2xjfe29GL%2FprD%2FrjPIwNycMdzzqCY9T26t9yltRFb9O1%2FWGmTxVnjbZGFOpmuIRFbBb301gXOWYytJH3ANsuxcW6MIqkED8NiNPlQwp%2B6FADmMB2Ma9Vn00tzk%2BC2p6zrMvcIwSTdfcUWopv4v2fLAaH%2F7ge%2Fhd1T4lPLq84mJIo2lV3DM1zrJABBvZdK6BEJ%2BLXllLceE3oLh45s%2B1jeW9KIUpwA7YTAc4zXHr8jWRHf6vMN0AReQZn1SvbTF126XmznDt1uoDsUSYDjugHsmhnkwG0TvZBl6Q%2F%2FAwYMRHseMJCqtscGOqUBV1ON%2B7PTCahagBoj6HB5sPf3aUxnXmHwXQiNb2dJGRI9lj%2BT7EakgXHeS0QIewpEa5UZKZu1LT6H9cj2Z1CRKlTzpg8ybPMgwEgYzzbHwrxo54Uhq%2FuVKpBRxIzW7ukUo03UF0RVCPzGJm5t0mkpep%2FpiCL5tDz1vWF9fJzJBJXY2SzvjJUiI15ZCUxXEXPWeDRkpGUiRchkkezGlnlk3EbxhwqO&X-Amz-Signature=122a9a43cb8d0006346ec1257b1a363cb9bd517e702e83cd3d55ae1ac247f979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD5WIDK2%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVXgiBRqQuXqDZzRHjm7%2FSgnya9%2Fh%2FCEqq5bHxiqHv0AIgNtVefqfcnCoQzlyKEco9XKSGfTx2tO2Ttk9kW5n%2BRVUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFrFLXOuiHqmuom8WSrcAxely1Vi1qUGhGAg5MDn8SpTw7s%2FRHO1AtX3EvOhDmJBnR6atRSEdXZo4iL3DOK6RZL69YFR3JNxToQA2uLrJw2GEn5jGnprQEGd45zjJVwd%2ByBaqfzKaTCrYL%2B5lP1Xg8wTHYVd5%2FchIT38gjom3A1Li7cj7MqNYtQGfeIO73EwNTt9Y5aq3J9LPpL2G1gXpPSCOTg0eTL0kk2Wl3epM%2FeLl%2B1jeev58pVZcoy0kdbt%2BLzkpCQKG%2F2WtSH6xTuKemi8DGGe%2BSGkRo8rgZBkLJiDoXElZegD3CrYxgQ9VGEF%2BTOpyeujRONECvEx0yEGLsDVrIImrg2CWuU2xjfe29GL%2FprD%2FrjPIwNycMdzzqCY9T26t9yltRFb9O1%2FWGmTxVnjbZGFOpmuIRFbBb301gXOWYytJH3ANsuxcW6MIqkED8NiNPlQwp%2B6FADmMB2Ma9Vn00tzk%2BC2p6zrMvcIwSTdfcUWopv4v2fLAaH%2F7ge%2Fhd1T4lPLq84mJIo2lV3DM1zrJABBvZdK6BEJ%2BLXllLceE3oLh45s%2B1jeW9KIUpwA7YTAc4zXHr8jWRHf6vMN0AReQZn1SvbTF126XmznDt1uoDsUSYDjugHsmhnkwG0TvZBl6Q%2F%2FAwYMRHseMJCqtscGOqUBV1ON%2B7PTCahagBoj6HB5sPf3aUxnXmHwXQiNb2dJGRI9lj%2BT7EakgXHeS0QIewpEa5UZKZu1LT6H9cj2Z1CRKlTzpg8ybPMgwEgYzzbHwrxo54Uhq%2FuVKpBRxIzW7ukUo03UF0RVCPzGJm5t0mkpep%2FpiCL5tDz1vWF9fJzJBJXY2SzvjJUiI15ZCUxXEXPWeDRkpGUiRchkkezGlnlk3EbxhwqO&X-Amz-Signature=72e718f583164f39fa147bb72e2d08495e55713fcd6ad6baf2af31522ff9b60c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD5WIDK2%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVXgiBRqQuXqDZzRHjm7%2FSgnya9%2Fh%2FCEqq5bHxiqHv0AIgNtVefqfcnCoQzlyKEco9XKSGfTx2tO2Ttk9kW5n%2BRVUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFrFLXOuiHqmuom8WSrcAxely1Vi1qUGhGAg5MDn8SpTw7s%2FRHO1AtX3EvOhDmJBnR6atRSEdXZo4iL3DOK6RZL69YFR3JNxToQA2uLrJw2GEn5jGnprQEGd45zjJVwd%2ByBaqfzKaTCrYL%2B5lP1Xg8wTHYVd5%2FchIT38gjom3A1Li7cj7MqNYtQGfeIO73EwNTt9Y5aq3J9LPpL2G1gXpPSCOTg0eTL0kk2Wl3epM%2FeLl%2B1jeev58pVZcoy0kdbt%2BLzkpCQKG%2F2WtSH6xTuKemi8DGGe%2BSGkRo8rgZBkLJiDoXElZegD3CrYxgQ9VGEF%2BTOpyeujRONECvEx0yEGLsDVrIImrg2CWuU2xjfe29GL%2FprD%2FrjPIwNycMdzzqCY9T26t9yltRFb9O1%2FWGmTxVnjbZGFOpmuIRFbBb301gXOWYytJH3ANsuxcW6MIqkED8NiNPlQwp%2B6FADmMB2Ma9Vn00tzk%2BC2p6zrMvcIwSTdfcUWopv4v2fLAaH%2F7ge%2Fhd1T4lPLq84mJIo2lV3DM1zrJABBvZdK6BEJ%2BLXllLceE3oLh45s%2B1jeW9KIUpwA7YTAc4zXHr8jWRHf6vMN0AReQZn1SvbTF126XmznDt1uoDsUSYDjugHsmhnkwG0TvZBl6Q%2F%2FAwYMRHseMJCqtscGOqUBV1ON%2B7PTCahagBoj6HB5sPf3aUxnXmHwXQiNb2dJGRI9lj%2BT7EakgXHeS0QIewpEa5UZKZu1LT6H9cj2Z1CRKlTzpg8ybPMgwEgYzzbHwrxo54Uhq%2FuVKpBRxIzW7ukUo03UF0RVCPzGJm5t0mkpep%2FpiCL5tDz1vWF9fJzJBJXY2SzvjJUiI15ZCUxXEXPWeDRkpGUiRchkkezGlnlk3EbxhwqO&X-Amz-Signature=58be6da175252d6a20af8f108731ba19fa1f95a7576d3587c52291d6e0426465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD5WIDK2%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVXgiBRqQuXqDZzRHjm7%2FSgnya9%2Fh%2FCEqq5bHxiqHv0AIgNtVefqfcnCoQzlyKEco9XKSGfTx2tO2Ttk9kW5n%2BRVUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFrFLXOuiHqmuom8WSrcAxely1Vi1qUGhGAg5MDn8SpTw7s%2FRHO1AtX3EvOhDmJBnR6atRSEdXZo4iL3DOK6RZL69YFR3JNxToQA2uLrJw2GEn5jGnprQEGd45zjJVwd%2ByBaqfzKaTCrYL%2B5lP1Xg8wTHYVd5%2FchIT38gjom3A1Li7cj7MqNYtQGfeIO73EwNTt9Y5aq3J9LPpL2G1gXpPSCOTg0eTL0kk2Wl3epM%2FeLl%2B1jeev58pVZcoy0kdbt%2BLzkpCQKG%2F2WtSH6xTuKemi8DGGe%2BSGkRo8rgZBkLJiDoXElZegD3CrYxgQ9VGEF%2BTOpyeujRONECvEx0yEGLsDVrIImrg2CWuU2xjfe29GL%2FprD%2FrjPIwNycMdzzqCY9T26t9yltRFb9O1%2FWGmTxVnjbZGFOpmuIRFbBb301gXOWYytJH3ANsuxcW6MIqkED8NiNPlQwp%2B6FADmMB2Ma9Vn00tzk%2BC2p6zrMvcIwSTdfcUWopv4v2fLAaH%2F7ge%2Fhd1T4lPLq84mJIo2lV3DM1zrJABBvZdK6BEJ%2BLXllLceE3oLh45s%2B1jeW9KIUpwA7YTAc4zXHr8jWRHf6vMN0AReQZn1SvbTF126XmznDt1uoDsUSYDjugHsmhnkwG0TvZBl6Q%2F%2FAwYMRHseMJCqtscGOqUBV1ON%2B7PTCahagBoj6HB5sPf3aUxnXmHwXQiNb2dJGRI9lj%2BT7EakgXHeS0QIewpEa5UZKZu1LT6H9cj2Z1CRKlTzpg8ybPMgwEgYzzbHwrxo54Uhq%2FuVKpBRxIzW7ukUo03UF0RVCPzGJm5t0mkpep%2FpiCL5tDz1vWF9fJzJBJXY2SzvjJUiI15ZCUxXEXPWeDRkpGUiRchkkezGlnlk3EbxhwqO&X-Amz-Signature=c1ae2f2137a4526245eb6b0bbfe52f8c222c5c327aa1e6b33c7acbe834ace6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD5WIDK2%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVXgiBRqQuXqDZzRHjm7%2FSgnya9%2Fh%2FCEqq5bHxiqHv0AIgNtVefqfcnCoQzlyKEco9XKSGfTx2tO2Ttk9kW5n%2BRVUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFrFLXOuiHqmuom8WSrcAxely1Vi1qUGhGAg5MDn8SpTw7s%2FRHO1AtX3EvOhDmJBnR6atRSEdXZo4iL3DOK6RZL69YFR3JNxToQA2uLrJw2GEn5jGnprQEGd45zjJVwd%2ByBaqfzKaTCrYL%2B5lP1Xg8wTHYVd5%2FchIT38gjom3A1Li7cj7MqNYtQGfeIO73EwNTt9Y5aq3J9LPpL2G1gXpPSCOTg0eTL0kk2Wl3epM%2FeLl%2B1jeev58pVZcoy0kdbt%2BLzkpCQKG%2F2WtSH6xTuKemi8DGGe%2BSGkRo8rgZBkLJiDoXElZegD3CrYxgQ9VGEF%2BTOpyeujRONECvEx0yEGLsDVrIImrg2CWuU2xjfe29GL%2FprD%2FrjPIwNycMdzzqCY9T26t9yltRFb9O1%2FWGmTxVnjbZGFOpmuIRFbBb301gXOWYytJH3ANsuxcW6MIqkED8NiNPlQwp%2B6FADmMB2Ma9Vn00tzk%2BC2p6zrMvcIwSTdfcUWopv4v2fLAaH%2F7ge%2Fhd1T4lPLq84mJIo2lV3DM1zrJABBvZdK6BEJ%2BLXllLceE3oLh45s%2B1jeW9KIUpwA7YTAc4zXHr8jWRHf6vMN0AReQZn1SvbTF126XmznDt1uoDsUSYDjugHsmhnkwG0TvZBl6Q%2F%2FAwYMRHseMJCqtscGOqUBV1ON%2B7PTCahagBoj6HB5sPf3aUxnXmHwXQiNb2dJGRI9lj%2BT7EakgXHeS0QIewpEa5UZKZu1LT6H9cj2Z1CRKlTzpg8ybPMgwEgYzzbHwrxo54Uhq%2FuVKpBRxIzW7ukUo03UF0RVCPzGJm5t0mkpep%2FpiCL5tDz1vWF9fJzJBJXY2SzvjJUiI15ZCUxXEXPWeDRkpGUiRchkkezGlnlk3EbxhwqO&X-Amz-Signature=e01cfadc22338b89fb7d5290e9bf9eb8f6cb8ada758a831eb3eadceab07de423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD5WIDK2%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVXgiBRqQuXqDZzRHjm7%2FSgnya9%2Fh%2FCEqq5bHxiqHv0AIgNtVefqfcnCoQzlyKEco9XKSGfTx2tO2Ttk9kW5n%2BRVUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFrFLXOuiHqmuom8WSrcAxely1Vi1qUGhGAg5MDn8SpTw7s%2FRHO1AtX3EvOhDmJBnR6atRSEdXZo4iL3DOK6RZL69YFR3JNxToQA2uLrJw2GEn5jGnprQEGd45zjJVwd%2ByBaqfzKaTCrYL%2B5lP1Xg8wTHYVd5%2FchIT38gjom3A1Li7cj7MqNYtQGfeIO73EwNTt9Y5aq3J9LPpL2G1gXpPSCOTg0eTL0kk2Wl3epM%2FeLl%2B1jeev58pVZcoy0kdbt%2BLzkpCQKG%2F2WtSH6xTuKemi8DGGe%2BSGkRo8rgZBkLJiDoXElZegD3CrYxgQ9VGEF%2BTOpyeujRONECvEx0yEGLsDVrIImrg2CWuU2xjfe29GL%2FprD%2FrjPIwNycMdzzqCY9T26t9yltRFb9O1%2FWGmTxVnjbZGFOpmuIRFbBb301gXOWYytJH3ANsuxcW6MIqkED8NiNPlQwp%2B6FADmMB2Ma9Vn00tzk%2BC2p6zrMvcIwSTdfcUWopv4v2fLAaH%2F7ge%2Fhd1T4lPLq84mJIo2lV3DM1zrJABBvZdK6BEJ%2BLXllLceE3oLh45s%2B1jeW9KIUpwA7YTAc4zXHr8jWRHf6vMN0AReQZn1SvbTF126XmznDt1uoDsUSYDjugHsmhnkwG0TvZBl6Q%2F%2FAwYMRHseMJCqtscGOqUBV1ON%2B7PTCahagBoj6HB5sPf3aUxnXmHwXQiNb2dJGRI9lj%2BT7EakgXHeS0QIewpEa5UZKZu1LT6H9cj2Z1CRKlTzpg8ybPMgwEgYzzbHwrxo54Uhq%2FuVKpBRxIzW7ukUo03UF0RVCPzGJm5t0mkpep%2FpiCL5tDz1vWF9fJzJBJXY2SzvjJUiI15ZCUxXEXPWeDRkpGUiRchkkezGlnlk3EbxhwqO&X-Amz-Signature=9394f99acc2bfabf5b8660bbbefbd0a92f78bb51f912976e5fbdee70147d900c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZAOWEZT%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5rGLfz0OuHA%2B90TyM2%2BKjwE4plN7DtkLRwY763KFXnwIgAqhLbZ8KJ3IVfkn5WI0WhBDmfg%2Fp2jY09t03NoHNKZAq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJoRNmGCHDvaZy0zDCrcAw8flDIo1fUhG7fm7iR%2FG%2BP1mcCZE2a8q7yRKLx40GVIJ9icLbap76c0sbKNP1I11RNWfLuPE4zhU%2FhXOjTd7IwKcrfIP4Iq3hwDqDv85mJh6%2BHv%2FswPMi43x5lV%2FLPSUw4OpCZj0Z0J71J6Svp3u9ltLltuDMWy0bPWOwElJxdh1TwhFOz6QgTBSZrmesKaxFlp322TnGi2638fXjtlvf3oUbVHzBDwHaO2mw4eaoaJ7w0bIbUf%2BtmIueX3a3UlRfTx4gvU6D6X7jiOEfnM5JgNGJg82Y1FmbfdfbpRIkalm2YBzWu87BpDMZBQnVfDVcLERMvTX9JojR4PzyfQaPrAq4fOEHGNM4N5SKNZE%2FwDj10TW3soBQnCuVWQk4HBAn%2FX8jOZMmv1y6JFMeREq54lOqg4btAVgUUSsfwoN4cN3YR0YgXeaZAC9JdnZfcDXUKw1ZP3e12tJLjefZp2ke1HWQcKIaDw6aeLT4%2BZ0OVLuMV4ekn%2Fw05AalJ48hTB2Xg629N%2FL6%2BOO790j5lnG35Bc0HHeJjx2PTfRHHXIut9VNzcrzNnBxE7SK0XHhtSIjYaIsQL0ugoREN3lHCwI0QAtqBe%2BH7bEy4WXwxMEmfiSyoOgfa8ozshnqQSMLuptscGOqUBkSLOr7F6G3R49RGNfvYea%2BOo6%2FFOYhcEPgzttPoSKabPx97YJ6578eSBdW5L5xi%2B2mKyMmY%2BIPu41MZkBj2%2BXIVugEjyhyE2asaajDDeeIgTt1daw3BBG7%2FSyVA2AdVnAKgMqF7JE%2FaUcASQc4%2FN2oFpk6w5Z8AztZSU2GOwK1y4eBLa1clQU%2Btbefa2i9LgW032GA0tN4N6d4%2FZ7Wn3qnqptfjc&X-Amz-Signature=e2b26199c6b531a99b507b1eb5071cea6add1abe15e7308b638fb6dfd4ff988a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCI5WL7K%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETGhsomw3pMLZ380XN25HVnLlGlPItF36fbdCSXyUc3AiBETgYhisbh06xDeRbqwLyoCR41wU%2FOIykIDuahQlsquCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMO1zPjaQ0BhEGc%2BqOKtwDYz19pVEvo0R1b1X7yUHwX9N2VL57Mw%2Bx5MKFKPRqu8CVK3Kv6Uw7wA8thepK0zcWhvk6MLEJ931uJfeRzbv2eeVXVZuEoDJjKOME8fuTdMnT4PqWejP2BexqChdnOpHUHkNBLCULnfnV%2F5smUq4FXCHDo0gLblc5ntMGELniEOOCHXIh0D4KfK%2B4IP3LeUoaNp37TTen4tLecww7z0jJ2x%2FJT3VUzbTriOtSJbZMgHtDJMfI6i6MoL8qoS5i5YMd%2BdnHc%2FGa%2FiFJldWr9viC61%2BgEa5uXUJxS%2Bus7QjbSq2RpFHFuskE6Sx3Irg51Qsus8%2FJSpqZZftEwh7ICEelwbj5WsB52FvTs5WEBsJsJbLarFTW0MzwM7DgIfuf6gy83M1krmFKrA2Lgg8TLAaZFFMVJDkRt0gC9nYhQor0BmRp%2BHVgtayQvpLaTLm9QxVpSmKQKzAxTJGucYvmWqzAxOy2Um2C6vAnbEnXFEEbdBycjaqC5NscQIhRJnlnnLxo7IFWsxQdWZMX6QST0HyT%2FxO3Wv8eI4sgkGlWFAUv6usWZQC8X9dYXkeqVM7gWDBd4UEMgQkZgqkrNTjryKbO579ORyuh6Ukz3kh%2BWB54eWbV62azyJDfSqs69oAwxqm2xwY6pgEquuSuQv4WxI3LOTOmQINawx%2BfbSPq49H5hx2npbMxrJYpR02Pf5NgawszIXrt4zhjG42U4x54sxwgVxu764Jzjfpofp0xWs07rmjo6dpp6Tx2QHMC%2B0cGDsEiCiUHHurv58cn0WpptAx9kt2aaPfyXwzgOxV%2BXIndOkkIeOJVDhZHK3rvYKWNcuZ9P2wdbFMqh%2BkDKJCLWNGYkb9Iz1VatmojJfST&X-Amz-Signature=1218621ecd194c8daf14f1c40e4624dc9b841c84df3cc0e81c83b26e5bd4debe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7AKBL4I%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEPYS5GPepIrds9uuOEE0ywoijv%2FLPtuM6LGm7G4ZfhAIgcx7YMZV1ffVjVRJZPXAyghNzkyWWo2usY0LHw5Fc3loq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGO8L1khCe9zovUc5ircAz%2Fvu6HSubho6BacE92AVN8k1AKvJhzG9SkqAN4Pm%2Bw03jAyjoEaG5B0ES4Ayut%2FKOCEihHfIsRuO0lBy87aKWFdtd9PCKpBI7glUPI4TcBHAt73L3eKuU9RYedrauzo5ZXvrNXJwO6l72bBqCnfpqz0RxrTq%2F2J9fP2p6OM2eqD8dA2HvKe%2FDYSihgsFLomu5pb4qOGd8MGf7dwAGorJJUsNzEXtIpTG4lyrwyIL95hqpeSVaxLP3odlNqkm35yMQiD8Pnw5yAZ6P82XGRa%2BSHtmRw0GovDEU%2BH%2Fsio4L3vjs6aRPAtPsJjp5H2uB0ex9Zi64I9i6Z3p8XDsFMcfZSQMZRJxqZH5EVmygbWidt7w72FpDj4hGquKaOhbR%2Bvepm5B580LRdH3TrD3AjZBzRN%2FoXZ1Fhi3FjJIOIR7xOCGfIziEUK8HbAnUcsLSTWYT%2BTUt9ylsITJmQygCSX3UGn%2FfVh6LHDNlySIHUelNazMp4JkiyCRUeEQ8r1RrTtXpaODF2zyquXaMyTzaQqYnFR%2BbrrJojfM3hTzhGXqvJrkL%2B%2FzxlyZ9BPz%2BTQVWU1u8ljq9GYS62OXDU6GD%2FJJh%2FIEIcNI3avSCaw8GQEDTWnrL846AZcxrG96VCjMLOptscGOqUBNtQ7fx%2FzDE7NV8j9XM2QPq77ZryuIZfx5I2yN2yrYvNQ9ZMHxFFO319eEpxhhkukSx8uKAjKO6mDwsMrCEC5U%2Fj80hM5EE98YmdH9%2F4plRX3NSVtXNYuse5RYUus%2FE7Eo8uw0Qjim4%2B1RIvKp6IE1IjaOZoZ3Cy73a23xHRjHFKqUeq5KNtLyfMqgXYOjz5%2BSn2bu3g6ro9nQIbpIn9jUTPARp3p&X-Amz-Signature=788ac1d9c0b87315e507b892a50de95113d3a1382e0c9511cbd90a6ee65abcf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD5WIDK2%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVXgiBRqQuXqDZzRHjm7%2FSgnya9%2Fh%2FCEqq5bHxiqHv0AIgNtVefqfcnCoQzlyKEco9XKSGfTx2tO2Ttk9kW5n%2BRVUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFrFLXOuiHqmuom8WSrcAxely1Vi1qUGhGAg5MDn8SpTw7s%2FRHO1AtX3EvOhDmJBnR6atRSEdXZo4iL3DOK6RZL69YFR3JNxToQA2uLrJw2GEn5jGnprQEGd45zjJVwd%2ByBaqfzKaTCrYL%2B5lP1Xg8wTHYVd5%2FchIT38gjom3A1Li7cj7MqNYtQGfeIO73EwNTt9Y5aq3J9LPpL2G1gXpPSCOTg0eTL0kk2Wl3epM%2FeLl%2B1jeev58pVZcoy0kdbt%2BLzkpCQKG%2F2WtSH6xTuKemi8DGGe%2BSGkRo8rgZBkLJiDoXElZegD3CrYxgQ9VGEF%2BTOpyeujRONECvEx0yEGLsDVrIImrg2CWuU2xjfe29GL%2FprD%2FrjPIwNycMdzzqCY9T26t9yltRFb9O1%2FWGmTxVnjbZGFOpmuIRFbBb301gXOWYytJH3ANsuxcW6MIqkED8NiNPlQwp%2B6FADmMB2Ma9Vn00tzk%2BC2p6zrMvcIwSTdfcUWopv4v2fLAaH%2F7ge%2Fhd1T4lPLq84mJIo2lV3DM1zrJABBvZdK6BEJ%2BLXllLceE3oLh45s%2B1jeW9KIUpwA7YTAc4zXHr8jWRHf6vMN0AReQZn1SvbTF126XmznDt1uoDsUSYDjugHsmhnkwG0TvZBl6Q%2F%2FAwYMRHseMJCqtscGOqUBV1ON%2B7PTCahagBoj6HB5sPf3aUxnXmHwXQiNb2dJGRI9lj%2BT7EakgXHeS0QIewpEa5UZKZu1LT6H9cj2Z1CRKlTzpg8ybPMgwEgYzzbHwrxo54Uhq%2FuVKpBRxIzW7ukUo03UF0RVCPzGJm5t0mkpep%2FpiCL5tDz1vWF9fJzJBJXY2SzvjJUiI15ZCUxXEXPWeDRkpGUiRchkkezGlnlk3EbxhwqO&X-Amz-Signature=8c1eeb2dac2944557972c8b015ee506d6819e492750e78b480d5ed609ae0bba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F6Q7PVT%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEOEZN0dCXj5RnokPxRtGfvcJpbzsPBJjnaPQALjY0CAiEAyoUL4Khsbzq%2BKX3OPtbdym0OGHIyhzwRA%2B50u9%2Bj3yMq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDL4TYWY8GHE4IlzjJyrcA1QmmT4d5GH06%2FTcZDkgHl1U5M9v6X166%2BClTvM6nMPl0NsDW2Gfi81E9Pe5r89FQovKfNRcPhOR51BjT9ekinkcpK6HQMLICNH%2BC3KTeT6nCTmOx9xFRusvPHWrOmB%2BUQkngQDH2%2BAqGjuQjCufGHHXezGI2aw8aZZ2%2BwwaAyJyWKvw6Gm5w%2BXuMNpqxCcP%2BJqFgurriGaXaotu1f3oT%2Bdetk5OMj5bULkeOIlRIvuf3KR42YHGEL4NfwQF1SuyQoi6pS9ALqAHVZvD962d7YodlhEShVReXpaVRnmxucajMq6%2FxAn0%2F98EnJa3cKx7IX3sh3sxea41Uo9h6WPKKTPt5pmb3jCXFIGmpdaEx3ri3Stzl9aTDm0kMvU0OcUlY7BEZObJQ9MpzSXg29HPguKa1GvRVLEZWX269%2BoBPb1w9fUAoTTOZ%2BdLqQDsGwjiVErEbfczLb%2Ff4chi8MurN3wsghTDK6gs%2BTwthjhDKh69MOZQ4Sgo4rET6tsLgKve6e0xLQwyRFVQxkQBgVt2e57m0%2BOJPSi6W1uaDaWL3MMPfijs634vscMBNbdNg93cQY8LY4I9rg07ySBJMcg7eRSvh%2FNOI0UBNOd2kyb695ozcK5WYnFW1qlH3LyWMLWqtscGOqUB5OnqoPC%2Fk0MotT6cCArwF4xb6k4efploa6aDtIqlO0GiEHD2VMzvgyGcAZwo6E4U%2ByL%2F5%2FGkg97QphV7pqtU%2FNI0toCSvJzfplZr51GrQUE77FZU0mmdJkrrnnPMPfbP2DoyvZeuQg0iABMufDPb%2B8%2BD%2Fe9XKbnviDOtcCL7u5IIii0472L89YI0V31777ZtNsNG7SUHTCCmEBx1woH25A9MhDkg&X-Amz-Signature=96cee764f573baddfce24c3664f37061d00f1bac37c7812abaa7e91f0f6642a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD5WIDK2%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVXgiBRqQuXqDZzRHjm7%2FSgnya9%2Fh%2FCEqq5bHxiqHv0AIgNtVefqfcnCoQzlyKEco9XKSGfTx2tO2Ttk9kW5n%2BRVUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFrFLXOuiHqmuom8WSrcAxely1Vi1qUGhGAg5MDn8SpTw7s%2FRHO1AtX3EvOhDmJBnR6atRSEdXZo4iL3DOK6RZL69YFR3JNxToQA2uLrJw2GEn5jGnprQEGd45zjJVwd%2ByBaqfzKaTCrYL%2B5lP1Xg8wTHYVd5%2FchIT38gjom3A1Li7cj7MqNYtQGfeIO73EwNTt9Y5aq3J9LPpL2G1gXpPSCOTg0eTL0kk2Wl3epM%2FeLl%2B1jeev58pVZcoy0kdbt%2BLzkpCQKG%2F2WtSH6xTuKemi8DGGe%2BSGkRo8rgZBkLJiDoXElZegD3CrYxgQ9VGEF%2BTOpyeujRONECvEx0yEGLsDVrIImrg2CWuU2xjfe29GL%2FprD%2FrjPIwNycMdzzqCY9T26t9yltRFb9O1%2FWGmTxVnjbZGFOpmuIRFbBb301gXOWYytJH3ANsuxcW6MIqkED8NiNPlQwp%2B6FADmMB2Ma9Vn00tzk%2BC2p6zrMvcIwSTdfcUWopv4v2fLAaH%2F7ge%2Fhd1T4lPLq84mJIo2lV3DM1zrJABBvZdK6BEJ%2BLXllLceE3oLh45s%2B1jeW9KIUpwA7YTAc4zXHr8jWRHf6vMN0AReQZn1SvbTF126XmznDt1uoDsUSYDjugHsmhnkwG0TvZBl6Q%2F%2FAwYMRHseMJCqtscGOqUBV1ON%2B7PTCahagBoj6HB5sPf3aUxnXmHwXQiNb2dJGRI9lj%2BT7EakgXHeS0QIewpEa5UZKZu1LT6H9cj2Z1CRKlTzpg8ybPMgwEgYzzbHwrxo54Uhq%2FuVKpBRxIzW7ukUo03UF0RVCPzGJm5t0mkpep%2FpiCL5tDz1vWF9fJzJBJXY2SzvjJUiI15ZCUxXEXPWeDRkpGUiRchkkezGlnlk3EbxhwqO&X-Amz-Signature=9a3f14a6c5f426a33da19b5cd7351dc9f844ba953ddf4288212c83350d9d5a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TUYQOE6%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbngWcZzhkW2%2BKnqAe82xCIq5AM4WTQHZraxCutVNGxgIhANtSdnD7Zh2GRvghMEFDj%2B2UY1lTJvy9bZwgwCYPQdIuKv8DCFEQABoMNjM3NDIzMTgzODA1Igyr1XRV5Cii%2Bkwohecq3AM1Khaq0yrvzMqRBScWvh2fSodebGMWzTdVR%2BVHclW%2BVk6criYd2sPKX8SVcXpgL10LEGYoZLe7WLc7YZFIn5kSq0H3BfamUO6PV6ArqwqpfOjej8IrcbnuxAkOvFXcxyQltSOQxUeM2remW6gSqnjpztDS%2BFTOpyacbdzn%2FInKGcO96rzhVErtvY4KNeL%2F3Msi6ElpdkUb1b5tVLzHnYrk0WDYimbCbeI0NuA4kY4vZCuHH4YYBmcJkaT9ZNntozCCCNBikSUa1vgUCyZopApg0PCVE1pKdBMrnflDhSwtmluHpVeU8RO%2BXOhUYpQrBK7vJ%2B%2BjGnyA9SIdfr16xFpSfHpsWId4leNkHnCOO7QTtaFhsIo6gnGyiKpoq8zePtpWqfx8dkAgypAMXt41tQJoCdv%2F3nTFCcD%2FkAop8mwKaf8EHpgHJ5gHO3tD4VVffy%2Fh7%2FSJWKOnO1GGTExhLgJtGsvxwocJxNu2kFuOMDOlKi9VBu38Wl8%2BdGllbluCtuseGGgjKmKQDeC8ytW4D6fksN0aEmfrPqZmiTDOyWq7yQed6%2FUoAcZIy12JKU9W8W1w1U658sVm3wd7TzRxHw083ktjCjbTRnWHiDEwD4trxuKH4p8YQBUko%2F5dFjCmqbbHBjqkAUSCS%2F4rLH%2BB0TIzr5Nic6tAYkY8FEQizh7WIm2Q0273nEitzh%2FA14AOEyYI44Kee3k7kSirtTJSy0KKV5ecUAfflZJhE4k5RdachNycJFrZMGZoiOIlc3inJb7hBEhaVvkuQxGomcxu6A92%2BNrq5R%2B2wRb6xME6VD2viNdpTyVtUZc0UjE6oWtKD%2FvZOfEQzdueXy0HKH4JsKYZAw%2FSkEZQhPjS&X-Amz-Signature=2a818aa7ede8cfd03265b30d6873b7baf6cf35b0e267ca0d8e37815c7a550a93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD5WIDK2%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVXgiBRqQuXqDZzRHjm7%2FSgnya9%2Fh%2FCEqq5bHxiqHv0AIgNtVefqfcnCoQzlyKEco9XKSGfTx2tO2Ttk9kW5n%2BRVUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFrFLXOuiHqmuom8WSrcAxely1Vi1qUGhGAg5MDn8SpTw7s%2FRHO1AtX3EvOhDmJBnR6atRSEdXZo4iL3DOK6RZL69YFR3JNxToQA2uLrJw2GEn5jGnprQEGd45zjJVwd%2ByBaqfzKaTCrYL%2B5lP1Xg8wTHYVd5%2FchIT38gjom3A1Li7cj7MqNYtQGfeIO73EwNTt9Y5aq3J9LPpL2G1gXpPSCOTg0eTL0kk2Wl3epM%2FeLl%2B1jeev58pVZcoy0kdbt%2BLzkpCQKG%2F2WtSH6xTuKemi8DGGe%2BSGkRo8rgZBkLJiDoXElZegD3CrYxgQ9VGEF%2BTOpyeujRONECvEx0yEGLsDVrIImrg2CWuU2xjfe29GL%2FprD%2FrjPIwNycMdzzqCY9T26t9yltRFb9O1%2FWGmTxVnjbZGFOpmuIRFbBb301gXOWYytJH3ANsuxcW6MIqkED8NiNPlQwp%2B6FADmMB2Ma9Vn00tzk%2BC2p6zrMvcIwSTdfcUWopv4v2fLAaH%2F7ge%2Fhd1T4lPLq84mJIo2lV3DM1zrJABBvZdK6BEJ%2BLXllLceE3oLh45s%2B1jeW9KIUpwA7YTAc4zXHr8jWRHf6vMN0AReQZn1SvbTF126XmznDt1uoDsUSYDjugHsmhnkwG0TvZBl6Q%2F%2FAwYMRHseMJCqtscGOqUBV1ON%2B7PTCahagBoj6HB5sPf3aUxnXmHwXQiNb2dJGRI9lj%2BT7EakgXHeS0QIewpEa5UZKZu1LT6H9cj2Z1CRKlTzpg8ybPMgwEgYzzbHwrxo54Uhq%2FuVKpBRxIzW7ukUo03UF0RVCPzGJm5t0mkpep%2FpiCL5tDz1vWF9fJzJBJXY2SzvjJUiI15ZCUxXEXPWeDRkpGUiRchkkezGlnlk3EbxhwqO&X-Amz-Signature=d71175e6df9d0663b032afffef79738031b32bd4d6400520079b6c33eeb9d2b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BBSMU33%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWhqEiNCGs6l7%2BatQu8%2ByxyOsUkt04FPBYNP9ZZ4T8HAiEAwg8YMfyIPam2zHj1y7ikvnrc4tp5LIdJs%2F6nFh0UCQUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLFdobeArZeQY7zW8yrcA7p7IsazGMEyBm%2BW7whiMmKvVmzmqEk8%2B%2BesTTjAR4pCW4ePI9T8P%2BZhqVkjl7M7qXvJM33VV0dq9nY%2B0XlAxy6PYbmsLeAeBWsmF9YHkcFN5yNd5qJeTLJgpCTYZkmGkBEGbUuQlV5Mc5yZ3FH3mUVR9zS1oHxrElusICs9JKsdHvyK%2F0gX204FH9wAsbGXnxZT8KUwCrURhX3tTUyD1kuxlR7zZKS%2Bm85iuV24z4PZpKRmSVKylr3PDc51Fg%2B7oArH9f0P8DJypLNDVlV7cpb0YQ2r%2B7HDDnh8g%2FwBEuUS%2BeWvgLBs4%2FHP5oCQ612N3%2BuJALvF9eG%2FPTcDXGuEbQERY%2FnIJ%2BMd97Qdo8f6SijmgYswqeNsLtxvNhKcNmvpBowFFqQINDlQitz5mrB53MYg0ee0tEnOqfILlF3dduoqBuX98oTefl1ZubUfxmWEXadeTrzi%2FKTnsRtDcTIJKIdPqYY87AUmewG7zfg3uex1y5HZUj%2Fs8Vxe7AyAjiDq1hqKXFlrI2DC%2B%2By5GoXgsRoO59AzGA2pQhMSIQtW49viZZbDhDI3NhdS2LkRCi8oRS5eafrPEBSJvvBZoYiupSccNhJwRyuun3diYQ%2Bkw00IKOj%2Bm35gIUDNI6fKMMqptscGOqUBbAV%2Baj8iqFB6JiyndzxrRVPa%2BW8cKNJkn954%2Fg%2BPw5STdWeIGfJXJpZF4HsG8T0cUvZBeAdOPjX9KMmUQSWRYZ5tXtE%2FqaxnrDl9ffyWZhAj9zDZifstAzC7S44d78A%2F%2BxsI%2F8IC%2BC8Vwfl5A829iIUgWKCJKflZP4rrSMz3UIhMCd7rspuGfKdBQfFnF2j2RzEGTWFfhme2p94Ki6QeH6MF0VYz&X-Amz-Signature=3c1313e41ecdae2df06492d0789f37c5b18b8b5bcd0f6dd47e5a4850ca9d9ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD5WIDK2%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVXgiBRqQuXqDZzRHjm7%2FSgnya9%2Fh%2FCEqq5bHxiqHv0AIgNtVefqfcnCoQzlyKEco9XKSGfTx2tO2Ttk9kW5n%2BRVUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFrFLXOuiHqmuom8WSrcAxely1Vi1qUGhGAg5MDn8SpTw7s%2FRHO1AtX3EvOhDmJBnR6atRSEdXZo4iL3DOK6RZL69YFR3JNxToQA2uLrJw2GEn5jGnprQEGd45zjJVwd%2ByBaqfzKaTCrYL%2B5lP1Xg8wTHYVd5%2FchIT38gjom3A1Li7cj7MqNYtQGfeIO73EwNTt9Y5aq3J9LPpL2G1gXpPSCOTg0eTL0kk2Wl3epM%2FeLl%2B1jeev58pVZcoy0kdbt%2BLzkpCQKG%2F2WtSH6xTuKemi8DGGe%2BSGkRo8rgZBkLJiDoXElZegD3CrYxgQ9VGEF%2BTOpyeujRONECvEx0yEGLsDVrIImrg2CWuU2xjfe29GL%2FprD%2FrjPIwNycMdzzqCY9T26t9yltRFb9O1%2FWGmTxVnjbZGFOpmuIRFbBb301gXOWYytJH3ANsuxcW6MIqkED8NiNPlQwp%2B6FADmMB2Ma9Vn00tzk%2BC2p6zrMvcIwSTdfcUWopv4v2fLAaH%2F7ge%2Fhd1T4lPLq84mJIo2lV3DM1zrJABBvZdK6BEJ%2BLXllLceE3oLh45s%2B1jeW9KIUpwA7YTAc4zXHr8jWRHf6vMN0AReQZn1SvbTF126XmznDt1uoDsUSYDjugHsmhnkwG0TvZBl6Q%2F%2FAwYMRHseMJCqtscGOqUBV1ON%2B7PTCahagBoj6HB5sPf3aUxnXmHwXQiNb2dJGRI9lj%2BT7EakgXHeS0QIewpEa5UZKZu1LT6H9cj2Z1CRKlTzpg8ybPMgwEgYzzbHwrxo54Uhq%2FuVKpBRxIzW7ukUo03UF0RVCPzGJm5t0mkpep%2FpiCL5tDz1vWF9fJzJBJXY2SzvjJUiI15ZCUxXEXPWeDRkpGUiRchkkezGlnlk3EbxhwqO&X-Amz-Signature=de0174630e44db222d9b9f2e240220153f108ca75746bf5abc500985da9c2fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YISGQRHP%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqOM50nGN2uuPV6QFfEzkNtnlUUxSO9xn68lUZAdyI7AiEA%2FDDkAz%2B%2Br06SDdiW8pscPluaQ%2Baw%2B2LMo%2FypJqTITPcq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPwk75JlbX94ZzgOEyrcA%2Byy7QNxWFu9qmhjGsBCUo0q6ZPiXjuw497y7dWNVGy2dNlAmtmVPbTBn7LQsB%2FpgLSfuM0fr4CzYnylCybRo1UBPddwv2szxAdd6BkHrbjl1PHjKFO1gujxD%2F%2FoFS2pMUAwo21Yze9hdK39d1u4uq1%2F0njFgiJTmfY6br%2B%2F%2F%2FvdEDytm%2BSN8G4JobwsIGTyRi2nYgPA5Kcgepgi9sIjyQxBXG8pvlh5K4IUzwuVSzOLLroTzrLDTQtaLoPnosGDWGvsWg7lQ0rbGgNO9APQBddp6ul%2F4XhuViiB6vx4zmhgnd%2Ff2D3oBqdqhAle4acTwQh0MvGr9G0%2F9EhBIjXDFTWi6OH8PqHZ1ZrgjcOhqSlUiuO2vgrwSc4DW%2FploP3drYg8jzq7OKHCv3VARGRmskdDMkZCfY%2Bkh6pLj2LTJZSK4I6j295RfqJBHOlpTs6cRb4oAMD0%2BFIvVA91MqYhl%2FoSoTDJ3ULq70YjmlMSnrHJUh0AMUcMdR%2Fy23B34yahUDqfw%2BUkAXel1qRh8hn7w2lRj40g9mx42G26rjiPtdYzOU0erH8FXV4%2FwM2rPfD6doix5tFxaxP24%2BA43caLcFuLFTIHX3%2F%2BtBlWY%2FD7VWSZLa0BPptHWr1CZQ8VMJyqtscGOqUBCMp9EwdFsaYZodyjvjbf1QJF7tXB4CCGR6k39Lp2%2FdAVmsC1FnYOEVuZ3T3%2Bs%2FU4TSTQuoUhXq2rdgogFZSmbyXYURLBFMoc%2BG9R72F5jg6J20ofRp9PaoLWpNAjj%2BB3GjYuRq4FUbCeznEzN96Y4ySCbTXadZiz0j%2FkDol54QQiWQ3OO0CRSmGAoHhA7iwRZjoo6t3xO%2BxVm%2F%2FkwCx%2FvqNXxMeS&X-Amz-Signature=530ef3acea9fa1ee91ab660fead576b684d969325029577a20945117156a5f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD5WIDK2%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVXgiBRqQuXqDZzRHjm7%2FSgnya9%2Fh%2FCEqq5bHxiqHv0AIgNtVefqfcnCoQzlyKEco9XKSGfTx2tO2Ttk9kW5n%2BRVUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFrFLXOuiHqmuom8WSrcAxely1Vi1qUGhGAg5MDn8SpTw7s%2FRHO1AtX3EvOhDmJBnR6atRSEdXZo4iL3DOK6RZL69YFR3JNxToQA2uLrJw2GEn5jGnprQEGd45zjJVwd%2ByBaqfzKaTCrYL%2B5lP1Xg8wTHYVd5%2FchIT38gjom3A1Li7cj7MqNYtQGfeIO73EwNTt9Y5aq3J9LPpL2G1gXpPSCOTg0eTL0kk2Wl3epM%2FeLl%2B1jeev58pVZcoy0kdbt%2BLzkpCQKG%2F2WtSH6xTuKemi8DGGe%2BSGkRo8rgZBkLJiDoXElZegD3CrYxgQ9VGEF%2BTOpyeujRONECvEx0yEGLsDVrIImrg2CWuU2xjfe29GL%2FprD%2FrjPIwNycMdzzqCY9T26t9yltRFb9O1%2FWGmTxVnjbZGFOpmuIRFbBb301gXOWYytJH3ANsuxcW6MIqkED8NiNPlQwp%2B6FADmMB2Ma9Vn00tzk%2BC2p6zrMvcIwSTdfcUWopv4v2fLAaH%2F7ge%2Fhd1T4lPLq84mJIo2lV3DM1zrJABBvZdK6BEJ%2BLXllLceE3oLh45s%2B1jeW9KIUpwA7YTAc4zXHr8jWRHf6vMN0AReQZn1SvbTF126XmznDt1uoDsUSYDjugHsmhnkwG0TvZBl6Q%2F%2FAwYMRHseMJCqtscGOqUBV1ON%2B7PTCahagBoj6HB5sPf3aUxnXmHwXQiNb2dJGRI9lj%2BT7EakgXHeS0QIewpEa5UZKZu1LT6H9cj2Z1CRKlTzpg8ybPMgwEgYzzbHwrxo54Uhq%2FuVKpBRxIzW7ukUo03UF0RVCPzGJm5t0mkpep%2FpiCL5tDz1vWF9fJzJBJXY2SzvjJUiI15ZCUxXEXPWeDRkpGUiRchkkezGlnlk3EbxhwqO&X-Amz-Signature=64ceb1710300d60f20c4070f09f5d1f1096993290aa9d3d7788c51c2148e86ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RT55H4G%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHPxbOEG3Bx5%2BndtLGQoOu0MdzltAosghB3Xq073UJsAIgN6MCxbVqU8eh10VAiFG0SMpWIYDNJ2hYAK4dNKMBqjsq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBhqVAPQbzFwJm1VOyrcA6fT2qv4UqNdRomHbwceAJ72EBv5kech%2FKpiXCnJWttgFpQLpTejaU83yy0k%2FIV16qbVmMJfwTYWYNbUfKjnIOTs0Po%2FwIrY4ouSj9KBXm48bPSiJeuUJME6ZE0lCshyM%2FegtxBTvjR9UiIphaIDTPjCj3Sb3bTBPvRg94hybPkYgPZ6HosRVnsvLgC0uYQ6jSrdHZO8BzPHC4cavucBXs2pL5pOkGAxhDmqLcBgMwOe7QL2uX2Es%2Bya5jJjGzuDZElhc1VcIzeRQxsQAHxeyt6xvDOrWjApip2A4EwxDdOjlgwGgT6kATwvBohN7%2BEaAhxtmfynFwQITbydT4kyg1hStM1FCQbTVvsJvzzfH5q7AO3sI38NyrpSw5SoSE1zVDNtvumn64F4ZOuue5qqxlvewVgoL5YfQ4YeEWv7C3tvnHLtJr7R8ozhy%2F8TNWeMq9PfCBAnuNS8GCGIBIsSX8A3I4g%2BrJH2%2BdTnG9%2FnErfuXPxBDk55cbbAcMs7PPu7P8mmY2OvA6EUWo6zBPiCrF22L5avYsrA9wwowNqSJUKofly8QlQjpvD%2Fpfo81dn7z%2FIpyhLJyESjDLZ26dUNKO4wPXWGaS%2BJPA5VEhm2qa40JPXai8iy2VkdIQjzMIuqtscGOqUB%2BDLVfqxTOfprV2VWq5hq4p7p4avzqtyh978r1Tx2Zc6PVeGH19mx293MHMvj05ZTSq7iWYpT%2FqCuVD2sCSL0GUV7psyITk9cYwVtAjnopRNzgg8qAFLm0rSTvActGJd9%2Bj8lpT1KJ6AwvCBq09ODwU7vszbPA1dCt0uaPCVijgq6IdPMuS%2FkvLLcj%2FkHSLlTqWdVn8BpW%2F2cWGwiwknFOU98btHy&X-Amz-Signature=5fc5a598899ac2074690ef485ce7326136b9a6357855a33844924051bdc943c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F2JJ6CN%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvMOTYRnHzf5kfhdPDp5DJSq4dma7VvAEGxFSpIUzXZAiApALUdrvmzQAYBgpmnuONrjpeDdNVRzbK0BSVhiUFuYir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMMtzPY9mY2Map%2FotGKtwD1FIi2AJbm4bEd%2BjC9SdLhiv9VPnsn5cOCwDaAJmXYcX%2FKebJI40Ob0i7%2FOaQXp%2BF5%2FLcrz0CezTmlLdhrFiUbJsL6vOpSrmBn0O7j1XhTxy%2Bcvtid%2B33LiWlE0mA8tTwXOzJsK4qsX6ChCoQf3ez0FdG%2FNO3T5wsJxv6rjCwRIhACbft3bjYk6rKRvqNcrNpBx%2Bu4Jlqy%2Fw0yxR%2Fu5gBlhjBPHs04y1a%2BLk0%2BQngPH%2Bz4Yl4nR2C19YN9mUHBBPoGjC3asRshNw0h4rFrWaoMTVU4EsRT1Fw07VbMnKVSwNleletXyitNNeKZORSzXDpPqcIk0MmivAVerMAykAekqO19sSmfWBFMAqNED7c2Rh%2FuiIOHw4gQ3ggWWv4fQfWpuuYSVyUwPDYTPMokG9UEcE3YWkzazeT374Xx1Ppa0ejE3i1PbwqTC1opLjI1mOjjd7EHUkchuTQktFBUy46lcLqtfTvTGIi0azvGJs0xowwDcSm3LitJB8chf2AQ4D0IHGvSH02EyzGmrOx%2ByxaOAm%2FIBt56ceKk3wZzPCFmu2xZU93wv3mRbByHiNUnPZSQ7HjMFtb%2BqCXJTmoGP6pTnWFSdCHLOf3wCyXgJSw3Bz801UPPSP3oRqBZfcwsam2xwY6pgHgQI1GR43R8KQwQGlMV3hN1U%2ByHmgj0n3t%2FWD9ZikSZebISyXMw6CWXovQ0e%2BGiju%2BB9Iry9xemM7YaDpRop0lSgH4P5DeF%2BgtKqq1O7ebZ4kXmFgMI8XNgaO%2Ftnh5Uh9auq8DlN2R0FtszScoKiMqOmipG6lLr7qJK4L3oLY6Y3yIFL3q0gi7cuvxrmWZI6vC5nATJY7pav0pGtkOfE%2BJCkHTJBX%2F&X-Amz-Signature=47976583481d7ce582777aee344ec8f08939838b26a6f87718323547f786bb87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQVE2GV%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmTPSxI9EowvBF1BMNQhQ57Yf4B7N%2F0PuQjfV0Zmz9XAiEAyHfiW8rIZnNQ0uSMA5DbwnhrqANY7PbFwPGalqWTQmEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDD8Q0rFdLNf%2BT0D97yrcAzlFKIURBDIt7APeLcIxBEp5d5lkbKl%2B6JDjk8OB%2B1L96vgKSibISSFmL4xpjo%2FAoXrwNxcFZzLsit6R1W97J7gNNn6kh34bp4AUodpEBRjzsS07WDF0AEtcM%2FizOzfv2Z7gSMRytSlUJwbKLSiKjafeLb8yEPwd%2Bt6GzCGr4RPFAZ9BMg5ButxoXwPqVejjGDPJR8UDI9TLYpZE6dyydwFLIXDPxKnYCDM6pVrWCUpr%2FdQNk4ZzHElElj8NAlO64951VXOkIh1lgm0uTaGQHGearX5L0HZl539pOcaOtKlsexDbCLVbGpfyPnMZKu8DqfuSTLHtn6yK2saPt4LPIm7JxyTS9bk4BQVvG4AebKl%2BloOziZzhFDj0uudBbvv0M2RysV75MyntELVKQ%2BYn3l5v35OeN2Na8rHZoqDUcMGDE28SgVelUgu5UwxhlCSss9e9xmbDnQiUWn2CyJT7%2BQd4HfXrVfggAM%2BLwF%2FDMNVnZnx8HIhJ0oKfuCItmMYmQdwgi7A4eYIp41WpeBgedVc5JxR7%2FEvhYN1Lm%2FzXF3%2Bg2TkORucqrbxgFYJCUJ%2FX11ssl3jNV8cCIvOeMuuHF4NaabstmmbKXf4on2B8UMJFS8LXXQwVsu6jyVevMKKqtscGOqUBLwuWHIVdcO%2FiW7D9Nigb98l8Ln5ei5YywLbrdnwBRuE4Hcfxd0KH%2B8vGj0Boj9MkXVBCVx9SXj5H%2BHWYclWX49HusYrtc7q%2BMkel7gqDHkSWlnOh3inq4Hs1KbXPZGkKQPbigQYLDAqx26eejnWpLqFndQMhy4701T%2BksxyK6NW8Reuh%2Fd4NO0rimVvPPVyqcHdGhnSZ0VhS6m7P1Ml2prtkhx2v&X-Amz-Signature=68639966a09c0ab208387a43220885746f883bcb6f5b5102fb7490fe6d5ab8de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD5WIDK2%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVXgiBRqQuXqDZzRHjm7%2FSgnya9%2Fh%2FCEqq5bHxiqHv0AIgNtVefqfcnCoQzlyKEco9XKSGfTx2tO2Ttk9kW5n%2BRVUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFrFLXOuiHqmuom8WSrcAxely1Vi1qUGhGAg5MDn8SpTw7s%2FRHO1AtX3EvOhDmJBnR6atRSEdXZo4iL3DOK6RZL69YFR3JNxToQA2uLrJw2GEn5jGnprQEGd45zjJVwd%2ByBaqfzKaTCrYL%2B5lP1Xg8wTHYVd5%2FchIT38gjom3A1Li7cj7MqNYtQGfeIO73EwNTt9Y5aq3J9LPpL2G1gXpPSCOTg0eTL0kk2Wl3epM%2FeLl%2B1jeev58pVZcoy0kdbt%2BLzkpCQKG%2F2WtSH6xTuKemi8DGGe%2BSGkRo8rgZBkLJiDoXElZegD3CrYxgQ9VGEF%2BTOpyeujRONECvEx0yEGLsDVrIImrg2CWuU2xjfe29GL%2FprD%2FrjPIwNycMdzzqCY9T26t9yltRFb9O1%2FWGmTxVnjbZGFOpmuIRFbBb301gXOWYytJH3ANsuxcW6MIqkED8NiNPlQwp%2B6FADmMB2Ma9Vn00tzk%2BC2p6zrMvcIwSTdfcUWopv4v2fLAaH%2F7ge%2Fhd1T4lPLq84mJIo2lV3DM1zrJABBvZdK6BEJ%2BLXllLceE3oLh45s%2B1jeW9KIUpwA7YTAc4zXHr8jWRHf6vMN0AReQZn1SvbTF126XmznDt1uoDsUSYDjugHsmhnkwG0TvZBl6Q%2F%2FAwYMRHseMJCqtscGOqUBV1ON%2B7PTCahagBoj6HB5sPf3aUxnXmHwXQiNb2dJGRI9lj%2BT7EakgXHeS0QIewpEa5UZKZu1LT6H9cj2Z1CRKlTzpg8ybPMgwEgYzzbHwrxo54Uhq%2FuVKpBRxIzW7ukUo03UF0RVCPzGJm5t0mkpep%2FpiCL5tDz1vWF9fJzJBJXY2SzvjJUiI15ZCUxXEXPWeDRkpGUiRchkkezGlnlk3EbxhwqO&X-Amz-Signature=b54154a7fbe22da89674f64c4b6fe3aa6868c95b8bfad661baf4f7dcd1468bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD5WIDK2%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVXgiBRqQuXqDZzRHjm7%2FSgnya9%2Fh%2FCEqq5bHxiqHv0AIgNtVefqfcnCoQzlyKEco9XKSGfTx2tO2Ttk9kW5n%2BRVUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFrFLXOuiHqmuom8WSrcAxely1Vi1qUGhGAg5MDn8SpTw7s%2FRHO1AtX3EvOhDmJBnR6atRSEdXZo4iL3DOK6RZL69YFR3JNxToQA2uLrJw2GEn5jGnprQEGd45zjJVwd%2ByBaqfzKaTCrYL%2B5lP1Xg8wTHYVd5%2FchIT38gjom3A1Li7cj7MqNYtQGfeIO73EwNTt9Y5aq3J9LPpL2G1gXpPSCOTg0eTL0kk2Wl3epM%2FeLl%2B1jeev58pVZcoy0kdbt%2BLzkpCQKG%2F2WtSH6xTuKemi8DGGe%2BSGkRo8rgZBkLJiDoXElZegD3CrYxgQ9VGEF%2BTOpyeujRONECvEx0yEGLsDVrIImrg2CWuU2xjfe29GL%2FprD%2FrjPIwNycMdzzqCY9T26t9yltRFb9O1%2FWGmTxVnjbZGFOpmuIRFbBb301gXOWYytJH3ANsuxcW6MIqkED8NiNPlQwp%2B6FADmMB2Ma9Vn00tzk%2BC2p6zrMvcIwSTdfcUWopv4v2fLAaH%2F7ge%2Fhd1T4lPLq84mJIo2lV3DM1zrJABBvZdK6BEJ%2BLXllLceE3oLh45s%2B1jeW9KIUpwA7YTAc4zXHr8jWRHf6vMN0AReQZn1SvbTF126XmznDt1uoDsUSYDjugHsmhnkwG0TvZBl6Q%2F%2FAwYMRHseMJCqtscGOqUBV1ON%2B7PTCahagBoj6HB5sPf3aUxnXmHwXQiNb2dJGRI9lj%2BT7EakgXHeS0QIewpEa5UZKZu1LT6H9cj2Z1CRKlTzpg8ybPMgwEgYzzbHwrxo54Uhq%2FuVKpBRxIzW7ukUo03UF0RVCPzGJm5t0mkpep%2FpiCL5tDz1vWF9fJzJBJXY2SzvjJUiI15ZCUxXEXPWeDRkpGUiRchkkezGlnlk3EbxhwqO&X-Amz-Signature=c05745e709e8e97244d766c4a83f645fdec70fef3828f8a8ee9224e6f245473b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T23J4IZ%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGyUrsgCPDbu%2Fa24OfPcKwG63tXwgOGwgGioVNlSQjiQIhAI3f%2FjT24%2FoGBjYW8b2CbDGwY6RZnlAwGXfPczAF%2Fpv9Kv8DCFEQABoMNjM3NDIzMTgzODA1IgzJwoyRMChno1y0Krgq3AOfmGmdPgBvFbLM88Yr4JUUZFj2TvIdLmTGzBWYyOjmJxaH%2FmLuFQ%2FsJ4cFKw9kVG68zKwQD9zGwJoJ8Q5k%2FZsPW2vB3wQndTrMhFnelUEIgLa5fkohg7Z9T7oDpxBxGIur6vxcsF1JuzoJyLIFs9uUm1cAVQTaGPSYCuPKQuOBYn4mLtEAjgoQWWNGH822xNyOA%2FU46qXUnbCOvhDW70f4CZfYBCC%2F0vXJCqVZ6NIX%2Fj%2FyKDoLc2%2FFFLJ%2BTttRfeB030weKfigLALJGsFcvPzVtoJ5O%2FprVIHxZNvJ8ORQA%2FYpEc37b%2BZsJWx3WZB0nWW6T4Vn7QQh0gNwMezQa7CJMMcyYJ60kqJblaumqPC0O4cOfdJnE7Fe%2Fqpybv4buz3IIrhaVTXjUYvRyy71e9y2Yz%2Fg9TFBR%2FB%2FLbV3bhyy935hkUDdgP5z5GZ16IaYhDIimc0DIdYlqFw77327etNNeGKelPgurwmjiANgW%2FFRz7AbnhTApc71L%2BKjGiUuiCgqtrY0Ww5tkYwILD0dCMPaTejyWSOOnNmcLDrN%2BQYv4H5%2BYSbeprcH1JymIQjTefOlWz6NBEno0Rz161x05zp97gdizmziMPAhUMJl45oL4dyfjO1%2Fh%2FgrFRtVajCzqrbHBjqkAVEfrdAYZNlr4eazuQp93LlHf52C%2BVPWBwA%2BBnLqGLzd6TAITiLJpRPRADlRbmOiA4Dr6oubKdC%2BcfZqh3UpDCYJEhE3OHG4GAFuq%2F%2FAcyAaeKQlVJUDpk%2FF01rtIZ9glJihbkLMTR6c1xo%2BVh93rckK%2BAEUIu7bGvKZebFThI8xDtIbtKrcBbaOzpA0t0g7LXo8P%2FJZ6G4F7dy4kb9M2iXl3l84&X-Amz-Signature=b8bf691c54016efb8c7a9ca912a44bade1dd1a7cc062c96902b697a5864d18c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T23J4IZ%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGyUrsgCPDbu%2Fa24OfPcKwG63tXwgOGwgGioVNlSQjiQIhAI3f%2FjT24%2FoGBjYW8b2CbDGwY6RZnlAwGXfPczAF%2Fpv9Kv8DCFEQABoMNjM3NDIzMTgzODA1IgzJwoyRMChno1y0Krgq3AOfmGmdPgBvFbLM88Yr4JUUZFj2TvIdLmTGzBWYyOjmJxaH%2FmLuFQ%2FsJ4cFKw9kVG68zKwQD9zGwJoJ8Q5k%2FZsPW2vB3wQndTrMhFnelUEIgLa5fkohg7Z9T7oDpxBxGIur6vxcsF1JuzoJyLIFs9uUm1cAVQTaGPSYCuPKQuOBYn4mLtEAjgoQWWNGH822xNyOA%2FU46qXUnbCOvhDW70f4CZfYBCC%2F0vXJCqVZ6NIX%2Fj%2FyKDoLc2%2FFFLJ%2BTttRfeB030weKfigLALJGsFcvPzVtoJ5O%2FprVIHxZNvJ8ORQA%2FYpEc37b%2BZsJWx3WZB0nWW6T4Vn7QQh0gNwMezQa7CJMMcyYJ60kqJblaumqPC0O4cOfdJnE7Fe%2Fqpybv4buz3IIrhaVTXjUYvRyy71e9y2Yz%2Fg9TFBR%2FB%2FLbV3bhyy935hkUDdgP5z5GZ16IaYhDIimc0DIdYlqFw77327etNNeGKelPgurwmjiANgW%2FFRz7AbnhTApc71L%2BKjGiUuiCgqtrY0Ww5tkYwILD0dCMPaTejyWSOOnNmcLDrN%2BQYv4H5%2BYSbeprcH1JymIQjTefOlWz6NBEno0Rz161x05zp97gdizmziMPAhUMJl45oL4dyfjO1%2Fh%2FgrFRtVajCzqrbHBjqkAVEfrdAYZNlr4eazuQp93LlHf52C%2BVPWBwA%2BBnLqGLzd6TAITiLJpRPRADlRbmOiA4Dr6oubKdC%2BcfZqh3UpDCYJEhE3OHG4GAFuq%2F%2FAcyAaeKQlVJUDpk%2FF01rtIZ9glJihbkLMTR6c1xo%2BVh93rckK%2BAEUIu7bGvKZebFThI8xDtIbtKrcBbaOzpA0t0g7LXo8P%2FJZ6G4F7dy4kb9M2iXl3l84&X-Amz-Signature=dfd82cc7ab057310f4e87e0b43df4da9fadf48d0ecf8d5144ebed5dad1ddc3bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T23J4IZ%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGyUrsgCPDbu%2Fa24OfPcKwG63tXwgOGwgGioVNlSQjiQIhAI3f%2FjT24%2FoGBjYW8b2CbDGwY6RZnlAwGXfPczAF%2Fpv9Kv8DCFEQABoMNjM3NDIzMTgzODA1IgzJwoyRMChno1y0Krgq3AOfmGmdPgBvFbLM88Yr4JUUZFj2TvIdLmTGzBWYyOjmJxaH%2FmLuFQ%2FsJ4cFKw9kVG68zKwQD9zGwJoJ8Q5k%2FZsPW2vB3wQndTrMhFnelUEIgLa5fkohg7Z9T7oDpxBxGIur6vxcsF1JuzoJyLIFs9uUm1cAVQTaGPSYCuPKQuOBYn4mLtEAjgoQWWNGH822xNyOA%2FU46qXUnbCOvhDW70f4CZfYBCC%2F0vXJCqVZ6NIX%2Fj%2FyKDoLc2%2FFFLJ%2BTttRfeB030weKfigLALJGsFcvPzVtoJ5O%2FprVIHxZNvJ8ORQA%2FYpEc37b%2BZsJWx3WZB0nWW6T4Vn7QQh0gNwMezQa7CJMMcyYJ60kqJblaumqPC0O4cOfdJnE7Fe%2Fqpybv4buz3IIrhaVTXjUYvRyy71e9y2Yz%2Fg9TFBR%2FB%2FLbV3bhyy935hkUDdgP5z5GZ16IaYhDIimc0DIdYlqFw77327etNNeGKelPgurwmjiANgW%2FFRz7AbnhTApc71L%2BKjGiUuiCgqtrY0Ww5tkYwILD0dCMPaTejyWSOOnNmcLDrN%2BQYv4H5%2BYSbeprcH1JymIQjTefOlWz6NBEno0Rz161x05zp97gdizmziMPAhUMJl45oL4dyfjO1%2Fh%2FgrFRtVajCzqrbHBjqkAVEfrdAYZNlr4eazuQp93LlHf52C%2BVPWBwA%2BBnLqGLzd6TAITiLJpRPRADlRbmOiA4Dr6oubKdC%2BcfZqh3UpDCYJEhE3OHG4GAFuq%2F%2FAcyAaeKQlVJUDpk%2FF01rtIZ9glJihbkLMTR6c1xo%2BVh93rckK%2BAEUIu7bGvKZebFThI8xDtIbtKrcBbaOzpA0t0g7LXo8P%2FJZ6G4F7dy4kb9M2iXl3l84&X-Amz-Signature=744fe38c23a9218370f835afae72906ecf7120c6690793776d30b94510f36dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T23J4IZ%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGyUrsgCPDbu%2Fa24OfPcKwG63tXwgOGwgGioVNlSQjiQIhAI3f%2FjT24%2FoGBjYW8b2CbDGwY6RZnlAwGXfPczAF%2Fpv9Kv8DCFEQABoMNjM3NDIzMTgzODA1IgzJwoyRMChno1y0Krgq3AOfmGmdPgBvFbLM88Yr4JUUZFj2TvIdLmTGzBWYyOjmJxaH%2FmLuFQ%2FsJ4cFKw9kVG68zKwQD9zGwJoJ8Q5k%2FZsPW2vB3wQndTrMhFnelUEIgLa5fkohg7Z9T7oDpxBxGIur6vxcsF1JuzoJyLIFs9uUm1cAVQTaGPSYCuPKQuOBYn4mLtEAjgoQWWNGH822xNyOA%2FU46qXUnbCOvhDW70f4CZfYBCC%2F0vXJCqVZ6NIX%2Fj%2FyKDoLc2%2FFFLJ%2BTttRfeB030weKfigLALJGsFcvPzVtoJ5O%2FprVIHxZNvJ8ORQA%2FYpEc37b%2BZsJWx3WZB0nWW6T4Vn7QQh0gNwMezQa7CJMMcyYJ60kqJblaumqPC0O4cOfdJnE7Fe%2Fqpybv4buz3IIrhaVTXjUYvRyy71e9y2Yz%2Fg9TFBR%2FB%2FLbV3bhyy935hkUDdgP5z5GZ16IaYhDIimc0DIdYlqFw77327etNNeGKelPgurwmjiANgW%2FFRz7AbnhTApc71L%2BKjGiUuiCgqtrY0Ww5tkYwILD0dCMPaTejyWSOOnNmcLDrN%2BQYv4H5%2BYSbeprcH1JymIQjTefOlWz6NBEno0Rz161x05zp97gdizmziMPAhUMJl45oL4dyfjO1%2Fh%2FgrFRtVajCzqrbHBjqkAVEfrdAYZNlr4eazuQp93LlHf52C%2BVPWBwA%2BBnLqGLzd6TAITiLJpRPRADlRbmOiA4Dr6oubKdC%2BcfZqh3UpDCYJEhE3OHG4GAFuq%2F%2FAcyAaeKQlVJUDpk%2FF01rtIZ9glJihbkLMTR6c1xo%2BVh93rckK%2BAEUIu7bGvKZebFThI8xDtIbtKrcBbaOzpA0t0g7LXo8P%2FJZ6G4F7dy4kb9M2iXl3l84&X-Amz-Signature=ef7b8842a25c8c10af04a3ff84ee481d3c42af364c75eeecdba3c76aeac5449d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNW6PXEA%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEDlJF0sc4LoIAlbsCczh%2FeVtJN2RPZWptSYbODVZo2AiEAoKBqfxt0sJntdWqkGg4eg8fIoNxFh8bX0uRugDukAM0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDK4mr2LBotdSyb%2B%2FfyrcA3ghY4w412CvJr6W5DFjWox2Di3nrxR36wrxNJ3OY4DfjVAZfuU9I9MGvUZ9MNc7VwsTa22qE22xx%2BJySWckcIbFMqm%2FOZ%2Fhu46VhoUe2QujXI0LHzQORabzYIoN6%2B%2FNqTL14KC2kQa6ozP7I1ar3MxiAdYuxaibEgYG3x9sjNKVU3UcZq45WObw1Tm3XzBNObYWTOyv3f5xhWMoOLXbCis6%2BinRcG7Hs3KrkM7WVvVfIH%2B1FW1cMusHyrGbU%2FZuZmZJiJ9iV5HXW5Cxl0GSobSKVPiJ5%2F2vRuQCdSmgeYJHnEzz86ExJeomeEKpXVM0MZBCU3aftXUFUdTsJtxW%2B4vZpsjb6r98AJyDGgdbojIp4qoToyTKKQp%2FTbDP%2FQqcMevlDZL%2FQfeNvS5aL%2Fqm%2BqGAQKct3AfyZiOQc0tswdmAEz7EQ8C5QhAkcoQAnhLGf9Ywr%2FWNe42CQBiu3JAn3esu0a1AdCLpF6LPgaeTu%2BsvzyQYb%2BR2qJ9x5SlowSYvs%2B9gJlkkfHfHkqBBVwqgoqgFryEZTcWzLch3u7OqXQQyiE7uUkDU1qOnKIaB5glCql1TI8%2F8GuM0k1u5zjlyBn7D41QucsnLKsrrehsIQgHnfO80jnqtOXpnA8XDMJ2qtscGOqUBoTn7kpUsJUbMUMovBHax%2BuSU%2F8ba907vUtjGHoHTS5BgFnqJJ3Lx4st%2BnrJvTHumg6KmvCaoZK%2BUU7H%2B9ROngABhf7jx0o0OgsIDJC9IC6m6K0ARHpBPPIolUlIiKdF7s%2FxQFN2jATSK0Mcc37xYnNp6hBWn5D%2FiQT%2FPKyJxyS2smsy%2B0dGC7ki3GLLKdaMJ1xFbqLDfgSoqm41PhA74bjSMyU%2BZ&X-Amz-Signature=b3de2a69c10350479022d1d0f3e41a822b9eb926c1d80282b4d73e07531602cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T23J4IZ%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGyUrsgCPDbu%2Fa24OfPcKwG63tXwgOGwgGioVNlSQjiQIhAI3f%2FjT24%2FoGBjYW8b2CbDGwY6RZnlAwGXfPczAF%2Fpv9Kv8DCFEQABoMNjM3NDIzMTgzODA1IgzJwoyRMChno1y0Krgq3AOfmGmdPgBvFbLM88Yr4JUUZFj2TvIdLmTGzBWYyOjmJxaH%2FmLuFQ%2FsJ4cFKw9kVG68zKwQD9zGwJoJ8Q5k%2FZsPW2vB3wQndTrMhFnelUEIgLa5fkohg7Z9T7oDpxBxGIur6vxcsF1JuzoJyLIFs9uUm1cAVQTaGPSYCuPKQuOBYn4mLtEAjgoQWWNGH822xNyOA%2FU46qXUnbCOvhDW70f4CZfYBCC%2F0vXJCqVZ6NIX%2Fj%2FyKDoLc2%2FFFLJ%2BTttRfeB030weKfigLALJGsFcvPzVtoJ5O%2FprVIHxZNvJ8ORQA%2FYpEc37b%2BZsJWx3WZB0nWW6T4Vn7QQh0gNwMezQa7CJMMcyYJ60kqJblaumqPC0O4cOfdJnE7Fe%2Fqpybv4buz3IIrhaVTXjUYvRyy71e9y2Yz%2Fg9TFBR%2FB%2FLbV3bhyy935hkUDdgP5z5GZ16IaYhDIimc0DIdYlqFw77327etNNeGKelPgurwmjiANgW%2FFRz7AbnhTApc71L%2BKjGiUuiCgqtrY0Ww5tkYwILD0dCMPaTejyWSOOnNmcLDrN%2BQYv4H5%2BYSbeprcH1JymIQjTefOlWz6NBEno0Rz161x05zp97gdizmziMPAhUMJl45oL4dyfjO1%2Fh%2FgrFRtVajCzqrbHBjqkAVEfrdAYZNlr4eazuQp93LlHf52C%2BVPWBwA%2BBnLqGLzd6TAITiLJpRPRADlRbmOiA4Dr6oubKdC%2BcfZqh3UpDCYJEhE3OHG4GAFuq%2F%2FAcyAaeKQlVJUDpk%2FF01rtIZ9glJihbkLMTR6c1xo%2BVh93rckK%2BAEUIu7bGvKZebFThI8xDtIbtKrcBbaOzpA0t0g7LXo8P%2FJZ6G4F7dy4kb9M2iXl3l84&X-Amz-Signature=546e6536b7b44802d9857e08de8b7c5d8d6667b323f595610143013f64f4f0f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T23J4IZ%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGyUrsgCPDbu%2Fa24OfPcKwG63tXwgOGwgGioVNlSQjiQIhAI3f%2FjT24%2FoGBjYW8b2CbDGwY6RZnlAwGXfPczAF%2Fpv9Kv8DCFEQABoMNjM3NDIzMTgzODA1IgzJwoyRMChno1y0Krgq3AOfmGmdPgBvFbLM88Yr4JUUZFj2TvIdLmTGzBWYyOjmJxaH%2FmLuFQ%2FsJ4cFKw9kVG68zKwQD9zGwJoJ8Q5k%2FZsPW2vB3wQndTrMhFnelUEIgLa5fkohg7Z9T7oDpxBxGIur6vxcsF1JuzoJyLIFs9uUm1cAVQTaGPSYCuPKQuOBYn4mLtEAjgoQWWNGH822xNyOA%2FU46qXUnbCOvhDW70f4CZfYBCC%2F0vXJCqVZ6NIX%2Fj%2FyKDoLc2%2FFFLJ%2BTttRfeB030weKfigLALJGsFcvPzVtoJ5O%2FprVIHxZNvJ8ORQA%2FYpEc37b%2BZsJWx3WZB0nWW6T4Vn7QQh0gNwMezQa7CJMMcyYJ60kqJblaumqPC0O4cOfdJnE7Fe%2Fqpybv4buz3IIrhaVTXjUYvRyy71e9y2Yz%2Fg9TFBR%2FB%2FLbV3bhyy935hkUDdgP5z5GZ16IaYhDIimc0DIdYlqFw77327etNNeGKelPgurwmjiANgW%2FFRz7AbnhTApc71L%2BKjGiUuiCgqtrY0Ww5tkYwILD0dCMPaTejyWSOOnNmcLDrN%2BQYv4H5%2BYSbeprcH1JymIQjTefOlWz6NBEno0Rz161x05zp97gdizmziMPAhUMJl45oL4dyfjO1%2Fh%2FgrFRtVajCzqrbHBjqkAVEfrdAYZNlr4eazuQp93LlHf52C%2BVPWBwA%2BBnLqGLzd6TAITiLJpRPRADlRbmOiA4Dr6oubKdC%2BcfZqh3UpDCYJEhE3OHG4GAFuq%2F%2FAcyAaeKQlVJUDpk%2FF01rtIZ9glJihbkLMTR6c1xo%2BVh93rckK%2BAEUIu7bGvKZebFThI8xDtIbtKrcBbaOzpA0t0g7LXo8P%2FJZ6G4F7dy4kb9M2iXl3l84&X-Amz-Signature=b3f12dcccebd6fbde022aca34d39fadcf3c6e053941c26a56ee4b26e2604da94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T23J4IZ%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGyUrsgCPDbu%2Fa24OfPcKwG63tXwgOGwgGioVNlSQjiQIhAI3f%2FjT24%2FoGBjYW8b2CbDGwY6RZnlAwGXfPczAF%2Fpv9Kv8DCFEQABoMNjM3NDIzMTgzODA1IgzJwoyRMChno1y0Krgq3AOfmGmdPgBvFbLM88Yr4JUUZFj2TvIdLmTGzBWYyOjmJxaH%2FmLuFQ%2FsJ4cFKw9kVG68zKwQD9zGwJoJ8Q5k%2FZsPW2vB3wQndTrMhFnelUEIgLa5fkohg7Z9T7oDpxBxGIur6vxcsF1JuzoJyLIFs9uUm1cAVQTaGPSYCuPKQuOBYn4mLtEAjgoQWWNGH822xNyOA%2FU46qXUnbCOvhDW70f4CZfYBCC%2F0vXJCqVZ6NIX%2Fj%2FyKDoLc2%2FFFLJ%2BTttRfeB030weKfigLALJGsFcvPzVtoJ5O%2FprVIHxZNvJ8ORQA%2FYpEc37b%2BZsJWx3WZB0nWW6T4Vn7QQh0gNwMezQa7CJMMcyYJ60kqJblaumqPC0O4cOfdJnE7Fe%2Fqpybv4buz3IIrhaVTXjUYvRyy71e9y2Yz%2Fg9TFBR%2FB%2FLbV3bhyy935hkUDdgP5z5GZ16IaYhDIimc0DIdYlqFw77327etNNeGKelPgurwmjiANgW%2FFRz7AbnhTApc71L%2BKjGiUuiCgqtrY0Ww5tkYwILD0dCMPaTejyWSOOnNmcLDrN%2BQYv4H5%2BYSbeprcH1JymIQjTefOlWz6NBEno0Rz161x05zp97gdizmziMPAhUMJl45oL4dyfjO1%2Fh%2FgrFRtVajCzqrbHBjqkAVEfrdAYZNlr4eazuQp93LlHf52C%2BVPWBwA%2BBnLqGLzd6TAITiLJpRPRADlRbmOiA4Dr6oubKdC%2BcfZqh3UpDCYJEhE3OHG4GAFuq%2F%2FAcyAaeKQlVJUDpk%2FF01rtIZ9glJihbkLMTR6c1xo%2BVh93rckK%2BAEUIu7bGvKZebFThI8xDtIbtKrcBbaOzpA0t0g7LXo8P%2FJZ6G4F7dy4kb9M2iXl3l84&X-Amz-Signature=744fe38c23a9218370f835afae72906ecf7120c6690793776d30b94510f36dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T23J4IZ%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGyUrsgCPDbu%2Fa24OfPcKwG63tXwgOGwgGioVNlSQjiQIhAI3f%2FjT24%2FoGBjYW8b2CbDGwY6RZnlAwGXfPczAF%2Fpv9Kv8DCFEQABoMNjM3NDIzMTgzODA1IgzJwoyRMChno1y0Krgq3AOfmGmdPgBvFbLM88Yr4JUUZFj2TvIdLmTGzBWYyOjmJxaH%2FmLuFQ%2FsJ4cFKw9kVG68zKwQD9zGwJoJ8Q5k%2FZsPW2vB3wQndTrMhFnelUEIgLa5fkohg7Z9T7oDpxBxGIur6vxcsF1JuzoJyLIFs9uUm1cAVQTaGPSYCuPKQuOBYn4mLtEAjgoQWWNGH822xNyOA%2FU46qXUnbCOvhDW70f4CZfYBCC%2F0vXJCqVZ6NIX%2Fj%2FyKDoLc2%2FFFLJ%2BTttRfeB030weKfigLALJGsFcvPzVtoJ5O%2FprVIHxZNvJ8ORQA%2FYpEc37b%2BZsJWx3WZB0nWW6T4Vn7QQh0gNwMezQa7CJMMcyYJ60kqJblaumqPC0O4cOfdJnE7Fe%2Fqpybv4buz3IIrhaVTXjUYvRyy71e9y2Yz%2Fg9TFBR%2FB%2FLbV3bhyy935hkUDdgP5z5GZ16IaYhDIimc0DIdYlqFw77327etNNeGKelPgurwmjiANgW%2FFRz7AbnhTApc71L%2BKjGiUuiCgqtrY0Ww5tkYwILD0dCMPaTejyWSOOnNmcLDrN%2BQYv4H5%2BYSbeprcH1JymIQjTefOlWz6NBEno0Rz161x05zp97gdizmziMPAhUMJl45oL4dyfjO1%2Fh%2FgrFRtVajCzqrbHBjqkAVEfrdAYZNlr4eazuQp93LlHf52C%2BVPWBwA%2BBnLqGLzd6TAITiLJpRPRADlRbmOiA4Dr6oubKdC%2BcfZqh3UpDCYJEhE3OHG4GAFuq%2F%2FAcyAaeKQlVJUDpk%2FF01rtIZ9glJihbkLMTR6c1xo%2BVh93rckK%2BAEUIu7bGvKZebFThI8xDtIbtKrcBbaOzpA0t0g7LXo8P%2FJZ6G4F7dy4kb9M2iXl3l84&X-Amz-Signature=d513003324fcc9016ab7d8e2f3eebf668fcf62b97a2b3cd524d9cd430fe3aecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T23J4IZ%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGyUrsgCPDbu%2Fa24OfPcKwG63tXwgOGwgGioVNlSQjiQIhAI3f%2FjT24%2FoGBjYW8b2CbDGwY6RZnlAwGXfPczAF%2Fpv9Kv8DCFEQABoMNjM3NDIzMTgzODA1IgzJwoyRMChno1y0Krgq3AOfmGmdPgBvFbLM88Yr4JUUZFj2TvIdLmTGzBWYyOjmJxaH%2FmLuFQ%2FsJ4cFKw9kVG68zKwQD9zGwJoJ8Q5k%2FZsPW2vB3wQndTrMhFnelUEIgLa5fkohg7Z9T7oDpxBxGIur6vxcsF1JuzoJyLIFs9uUm1cAVQTaGPSYCuPKQuOBYn4mLtEAjgoQWWNGH822xNyOA%2FU46qXUnbCOvhDW70f4CZfYBCC%2F0vXJCqVZ6NIX%2Fj%2FyKDoLc2%2FFFLJ%2BTttRfeB030weKfigLALJGsFcvPzVtoJ5O%2FprVIHxZNvJ8ORQA%2FYpEc37b%2BZsJWx3WZB0nWW6T4Vn7QQh0gNwMezQa7CJMMcyYJ60kqJblaumqPC0O4cOfdJnE7Fe%2Fqpybv4buz3IIrhaVTXjUYvRyy71e9y2Yz%2Fg9TFBR%2FB%2FLbV3bhyy935hkUDdgP5z5GZ16IaYhDIimc0DIdYlqFw77327etNNeGKelPgurwmjiANgW%2FFRz7AbnhTApc71L%2BKjGiUuiCgqtrY0Ww5tkYwILD0dCMPaTejyWSOOnNmcLDrN%2BQYv4H5%2BYSbeprcH1JymIQjTefOlWz6NBEno0Rz161x05zp97gdizmziMPAhUMJl45oL4dyfjO1%2Fh%2FgrFRtVajCzqrbHBjqkAVEfrdAYZNlr4eazuQp93LlHf52C%2BVPWBwA%2BBnLqGLzd6TAITiLJpRPRADlRbmOiA4Dr6oubKdC%2BcfZqh3UpDCYJEhE3OHG4GAFuq%2F%2FAcyAaeKQlVJUDpk%2FF01rtIZ9glJihbkLMTR6c1xo%2BVh93rckK%2BAEUIu7bGvKZebFThI8xDtIbtKrcBbaOzpA0t0g7LXo8P%2FJZ6G4F7dy4kb9M2iXl3l84&X-Amz-Signature=ca92f065faf265d63a8a592efcb85be49dec68f9b9397e1db6a3dfb6a6c32036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T23J4IZ%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGyUrsgCPDbu%2Fa24OfPcKwG63tXwgOGwgGioVNlSQjiQIhAI3f%2FjT24%2FoGBjYW8b2CbDGwY6RZnlAwGXfPczAF%2Fpv9Kv8DCFEQABoMNjM3NDIzMTgzODA1IgzJwoyRMChno1y0Krgq3AOfmGmdPgBvFbLM88Yr4JUUZFj2TvIdLmTGzBWYyOjmJxaH%2FmLuFQ%2FsJ4cFKw9kVG68zKwQD9zGwJoJ8Q5k%2FZsPW2vB3wQndTrMhFnelUEIgLa5fkohg7Z9T7oDpxBxGIur6vxcsF1JuzoJyLIFs9uUm1cAVQTaGPSYCuPKQuOBYn4mLtEAjgoQWWNGH822xNyOA%2FU46qXUnbCOvhDW70f4CZfYBCC%2F0vXJCqVZ6NIX%2Fj%2FyKDoLc2%2FFFLJ%2BTttRfeB030weKfigLALJGsFcvPzVtoJ5O%2FprVIHxZNvJ8ORQA%2FYpEc37b%2BZsJWx3WZB0nWW6T4Vn7QQh0gNwMezQa7CJMMcyYJ60kqJblaumqPC0O4cOfdJnE7Fe%2Fqpybv4buz3IIrhaVTXjUYvRyy71e9y2Yz%2Fg9TFBR%2FB%2FLbV3bhyy935hkUDdgP5z5GZ16IaYhDIimc0DIdYlqFw77327etNNeGKelPgurwmjiANgW%2FFRz7AbnhTApc71L%2BKjGiUuiCgqtrY0Ww5tkYwILD0dCMPaTejyWSOOnNmcLDrN%2BQYv4H5%2BYSbeprcH1JymIQjTefOlWz6NBEno0Rz161x05zp97gdizmziMPAhUMJl45oL4dyfjO1%2Fh%2FgrFRtVajCzqrbHBjqkAVEfrdAYZNlr4eazuQp93LlHf52C%2BVPWBwA%2BBnLqGLzd6TAITiLJpRPRADlRbmOiA4Dr6oubKdC%2BcfZqh3UpDCYJEhE3OHG4GAFuq%2F%2FAcyAaeKQlVJUDpk%2FF01rtIZ9glJihbkLMTR6c1xo%2BVh93rckK%2BAEUIu7bGvKZebFThI8xDtIbtKrcBbaOzpA0t0g7LXo8P%2FJZ6G4F7dy4kb9M2iXl3l84&X-Amz-Signature=08c6214aa18273f0b95e9e206d809ed68944edf394102569d40fbf26ef46400a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


