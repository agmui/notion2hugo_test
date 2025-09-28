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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKZ5XP5%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCxH51u8lxt3YVSZ5OtrnFJAf67qSMgiecxomTZXfmV2AIhAJ1TNtVhB02MZbE1iqL0gsIDf5I0muEPfLykx9wYB6PCKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjLLTSY1r3kTlnL54q3AMo%2F8Y8TjW9eEvy%2FsqNVG17napLG7v50barYoRKuue8R3sLQ2XizeaA5Gm%2BLJmAldhxLYfPlVpLn0TXHgkzuxQTnNne%2F4tFEs8PCVc6oRTVnQfHXNI3a5%2Be2qlVbEBczo2pabMaFp8qzU1V%2B32SMp4FtnN9sGI24JieqIAwtr6RqZ31YOCg9sLkP246PrUdXsjh6emXzSKtMFz0nYNny6eB8kDcoF6%2FsmBIFDx1zTdsmYonwQQYnrdIyUJvJk8EQC3BxzddPw9947dOQ6JXRgKQcgeR27LBn19DIX1ZWSSzQOheuhUqUpz14W%2F%2BmM37arThGPGJ66c%2F4qEz7lvxDMrK%2ByyvqT%2B6%2FC5as1wULzvTf4p5jxsfE691asakqDMt7c9Jti%2FEtn4vopPzB5ALieaUYJGWIyBntStDK0oIyKfbsRP1GnUcgVH8NVaBQx%2Fb33KEre8Ha6D2oXix0thMMrdlPpQe14956XlQbCh3H9gyriBQhuJ4B9Q46yWJNYVrn9j1q1F8j%2BQDkwkFfOU%2F0nBuxqiXnPOKAtddJh2pO0J%2BswTlagkgCjQpt%2FxVvtDL2fGYlOEDHhV63ZC49uPmrnUnuaddDV3hEQsxFdW4D8uRTKt%2B3n6ZrjcJpAuDqDCnv%2BHGBjqkARaxaXXMddCbykvpI2H%2BN9FtLSkaCgr%2FItHkD7w9IhngSNC%2FepPDoUA3N1W3QZD7WMaDSl%2Bd%2BQda5lGo%2B53txSTAP1F1OK7isj7J051XmyGRlLEVFsiUYzboxULoX65mN6VhQEtRrVaXVaSvef51YyVAgFu1SLcz5y5fX6cdKzUMebqgBugCVfhSFehI9V3XWc17UsGHxrnPP9w3QppednLWqyvH&X-Amz-Signature=31d421f47b31e6b4a56d7d5fc5842606b407ea30e209ee299d9ee33152dfada1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKZ5XP5%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCxH51u8lxt3YVSZ5OtrnFJAf67qSMgiecxomTZXfmV2AIhAJ1TNtVhB02MZbE1iqL0gsIDf5I0muEPfLykx9wYB6PCKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjLLTSY1r3kTlnL54q3AMo%2F8Y8TjW9eEvy%2FsqNVG17napLG7v50barYoRKuue8R3sLQ2XizeaA5Gm%2BLJmAldhxLYfPlVpLn0TXHgkzuxQTnNne%2F4tFEs8PCVc6oRTVnQfHXNI3a5%2Be2qlVbEBczo2pabMaFp8qzU1V%2B32SMp4FtnN9sGI24JieqIAwtr6RqZ31YOCg9sLkP246PrUdXsjh6emXzSKtMFz0nYNny6eB8kDcoF6%2FsmBIFDx1zTdsmYonwQQYnrdIyUJvJk8EQC3BxzddPw9947dOQ6JXRgKQcgeR27LBn19DIX1ZWSSzQOheuhUqUpz14W%2F%2BmM37arThGPGJ66c%2F4qEz7lvxDMrK%2ByyvqT%2B6%2FC5as1wULzvTf4p5jxsfE691asakqDMt7c9Jti%2FEtn4vopPzB5ALieaUYJGWIyBntStDK0oIyKfbsRP1GnUcgVH8NVaBQx%2Fb33KEre8Ha6D2oXix0thMMrdlPpQe14956XlQbCh3H9gyriBQhuJ4B9Q46yWJNYVrn9j1q1F8j%2BQDkwkFfOU%2F0nBuxqiXnPOKAtddJh2pO0J%2BswTlagkgCjQpt%2FxVvtDL2fGYlOEDHhV63ZC49uPmrnUnuaddDV3hEQsxFdW4D8uRTKt%2B3n6ZrjcJpAuDqDCnv%2BHGBjqkARaxaXXMddCbykvpI2H%2BN9FtLSkaCgr%2FItHkD7w9IhngSNC%2FepPDoUA3N1W3QZD7WMaDSl%2Bd%2BQda5lGo%2B53txSTAP1F1OK7isj7J051XmyGRlLEVFsiUYzboxULoX65mN6VhQEtRrVaXVaSvef51YyVAgFu1SLcz5y5fX6cdKzUMebqgBugCVfhSFehI9V3XWc17UsGHxrnPP9w3QppednLWqyvH&X-Amz-Signature=8a211a4274ffc7caa560a0de602bcff471f59813d3dc69cc62034951f8640c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKZ5XP5%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCxH51u8lxt3YVSZ5OtrnFJAf67qSMgiecxomTZXfmV2AIhAJ1TNtVhB02MZbE1iqL0gsIDf5I0muEPfLykx9wYB6PCKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjLLTSY1r3kTlnL54q3AMo%2F8Y8TjW9eEvy%2FsqNVG17napLG7v50barYoRKuue8R3sLQ2XizeaA5Gm%2BLJmAldhxLYfPlVpLn0TXHgkzuxQTnNne%2F4tFEs8PCVc6oRTVnQfHXNI3a5%2Be2qlVbEBczo2pabMaFp8qzU1V%2B32SMp4FtnN9sGI24JieqIAwtr6RqZ31YOCg9sLkP246PrUdXsjh6emXzSKtMFz0nYNny6eB8kDcoF6%2FsmBIFDx1zTdsmYonwQQYnrdIyUJvJk8EQC3BxzddPw9947dOQ6JXRgKQcgeR27LBn19DIX1ZWSSzQOheuhUqUpz14W%2F%2BmM37arThGPGJ66c%2F4qEz7lvxDMrK%2ByyvqT%2B6%2FC5as1wULzvTf4p5jxsfE691asakqDMt7c9Jti%2FEtn4vopPzB5ALieaUYJGWIyBntStDK0oIyKfbsRP1GnUcgVH8NVaBQx%2Fb33KEre8Ha6D2oXix0thMMrdlPpQe14956XlQbCh3H9gyriBQhuJ4B9Q46yWJNYVrn9j1q1F8j%2BQDkwkFfOU%2F0nBuxqiXnPOKAtddJh2pO0J%2BswTlagkgCjQpt%2FxVvtDL2fGYlOEDHhV63ZC49uPmrnUnuaddDV3hEQsxFdW4D8uRTKt%2B3n6ZrjcJpAuDqDCnv%2BHGBjqkARaxaXXMddCbykvpI2H%2BN9FtLSkaCgr%2FItHkD7w9IhngSNC%2FepPDoUA3N1W3QZD7WMaDSl%2Bd%2BQda5lGo%2B53txSTAP1F1OK7isj7J051XmyGRlLEVFsiUYzboxULoX65mN6VhQEtRrVaXVaSvef51YyVAgFu1SLcz5y5fX6cdKzUMebqgBugCVfhSFehI9V3XWc17UsGHxrnPP9w3QppednLWqyvH&X-Amz-Signature=afa845f1405a2bd1e643b39298489acaba039966ebe3a4c386e070446d58c8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKZ5XP5%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCxH51u8lxt3YVSZ5OtrnFJAf67qSMgiecxomTZXfmV2AIhAJ1TNtVhB02MZbE1iqL0gsIDf5I0muEPfLykx9wYB6PCKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjLLTSY1r3kTlnL54q3AMo%2F8Y8TjW9eEvy%2FsqNVG17napLG7v50barYoRKuue8R3sLQ2XizeaA5Gm%2BLJmAldhxLYfPlVpLn0TXHgkzuxQTnNne%2F4tFEs8PCVc6oRTVnQfHXNI3a5%2Be2qlVbEBczo2pabMaFp8qzU1V%2B32SMp4FtnN9sGI24JieqIAwtr6RqZ31YOCg9sLkP246PrUdXsjh6emXzSKtMFz0nYNny6eB8kDcoF6%2FsmBIFDx1zTdsmYonwQQYnrdIyUJvJk8EQC3BxzddPw9947dOQ6JXRgKQcgeR27LBn19DIX1ZWSSzQOheuhUqUpz14W%2F%2BmM37arThGPGJ66c%2F4qEz7lvxDMrK%2ByyvqT%2B6%2FC5as1wULzvTf4p5jxsfE691asakqDMt7c9Jti%2FEtn4vopPzB5ALieaUYJGWIyBntStDK0oIyKfbsRP1GnUcgVH8NVaBQx%2Fb33KEre8Ha6D2oXix0thMMrdlPpQe14956XlQbCh3H9gyriBQhuJ4B9Q46yWJNYVrn9j1q1F8j%2BQDkwkFfOU%2F0nBuxqiXnPOKAtddJh2pO0J%2BswTlagkgCjQpt%2FxVvtDL2fGYlOEDHhV63ZC49uPmrnUnuaddDV3hEQsxFdW4D8uRTKt%2B3n6ZrjcJpAuDqDCnv%2BHGBjqkARaxaXXMddCbykvpI2H%2BN9FtLSkaCgr%2FItHkD7w9IhngSNC%2FepPDoUA3N1W3QZD7WMaDSl%2Bd%2BQda5lGo%2B53txSTAP1F1OK7isj7J051XmyGRlLEVFsiUYzboxULoX65mN6VhQEtRrVaXVaSvef51YyVAgFu1SLcz5y5fX6cdKzUMebqgBugCVfhSFehI9V3XWc17UsGHxrnPP9w3QppednLWqyvH&X-Amz-Signature=fea08f38a205443f01dbe197862f817e0a8dd0dc3c21f3fe975f5c2c30bfa10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKZ5XP5%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCxH51u8lxt3YVSZ5OtrnFJAf67qSMgiecxomTZXfmV2AIhAJ1TNtVhB02MZbE1iqL0gsIDf5I0muEPfLykx9wYB6PCKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjLLTSY1r3kTlnL54q3AMo%2F8Y8TjW9eEvy%2FsqNVG17napLG7v50barYoRKuue8R3sLQ2XizeaA5Gm%2BLJmAldhxLYfPlVpLn0TXHgkzuxQTnNne%2F4tFEs8PCVc6oRTVnQfHXNI3a5%2Be2qlVbEBczo2pabMaFp8qzU1V%2B32SMp4FtnN9sGI24JieqIAwtr6RqZ31YOCg9sLkP246PrUdXsjh6emXzSKtMFz0nYNny6eB8kDcoF6%2FsmBIFDx1zTdsmYonwQQYnrdIyUJvJk8EQC3BxzddPw9947dOQ6JXRgKQcgeR27LBn19DIX1ZWSSzQOheuhUqUpz14W%2F%2BmM37arThGPGJ66c%2F4qEz7lvxDMrK%2ByyvqT%2B6%2FC5as1wULzvTf4p5jxsfE691asakqDMt7c9Jti%2FEtn4vopPzB5ALieaUYJGWIyBntStDK0oIyKfbsRP1GnUcgVH8NVaBQx%2Fb33KEre8Ha6D2oXix0thMMrdlPpQe14956XlQbCh3H9gyriBQhuJ4B9Q46yWJNYVrn9j1q1F8j%2BQDkwkFfOU%2F0nBuxqiXnPOKAtddJh2pO0J%2BswTlagkgCjQpt%2FxVvtDL2fGYlOEDHhV63ZC49uPmrnUnuaddDV3hEQsxFdW4D8uRTKt%2B3n6ZrjcJpAuDqDCnv%2BHGBjqkARaxaXXMddCbykvpI2H%2BN9FtLSkaCgr%2FItHkD7w9IhngSNC%2FepPDoUA3N1W3QZD7WMaDSl%2Bd%2BQda5lGo%2B53txSTAP1F1OK7isj7J051XmyGRlLEVFsiUYzboxULoX65mN6VhQEtRrVaXVaSvef51YyVAgFu1SLcz5y5fX6cdKzUMebqgBugCVfhSFehI9V3XWc17UsGHxrnPP9w3QppednLWqyvH&X-Amz-Signature=d80f2109b9127dbc03c7d50dc9c81ad7576ce4d239704a49b428a750000c5eea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKZ5XP5%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCxH51u8lxt3YVSZ5OtrnFJAf67qSMgiecxomTZXfmV2AIhAJ1TNtVhB02MZbE1iqL0gsIDf5I0muEPfLykx9wYB6PCKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjLLTSY1r3kTlnL54q3AMo%2F8Y8TjW9eEvy%2FsqNVG17napLG7v50barYoRKuue8R3sLQ2XizeaA5Gm%2BLJmAldhxLYfPlVpLn0TXHgkzuxQTnNne%2F4tFEs8PCVc6oRTVnQfHXNI3a5%2Be2qlVbEBczo2pabMaFp8qzU1V%2B32SMp4FtnN9sGI24JieqIAwtr6RqZ31YOCg9sLkP246PrUdXsjh6emXzSKtMFz0nYNny6eB8kDcoF6%2FsmBIFDx1zTdsmYonwQQYnrdIyUJvJk8EQC3BxzddPw9947dOQ6JXRgKQcgeR27LBn19DIX1ZWSSzQOheuhUqUpz14W%2F%2BmM37arThGPGJ66c%2F4qEz7lvxDMrK%2ByyvqT%2B6%2FC5as1wULzvTf4p5jxsfE691asakqDMt7c9Jti%2FEtn4vopPzB5ALieaUYJGWIyBntStDK0oIyKfbsRP1GnUcgVH8NVaBQx%2Fb33KEre8Ha6D2oXix0thMMrdlPpQe14956XlQbCh3H9gyriBQhuJ4B9Q46yWJNYVrn9j1q1F8j%2BQDkwkFfOU%2F0nBuxqiXnPOKAtddJh2pO0J%2BswTlagkgCjQpt%2FxVvtDL2fGYlOEDHhV63ZC49uPmrnUnuaddDV3hEQsxFdW4D8uRTKt%2B3n6ZrjcJpAuDqDCnv%2BHGBjqkARaxaXXMddCbykvpI2H%2BN9FtLSkaCgr%2FItHkD7w9IhngSNC%2FepPDoUA3N1W3QZD7WMaDSl%2Bd%2BQda5lGo%2B53txSTAP1F1OK7isj7J051XmyGRlLEVFsiUYzboxULoX65mN6VhQEtRrVaXVaSvef51YyVAgFu1SLcz5y5fX6cdKzUMebqgBugCVfhSFehI9V3XWc17UsGHxrnPP9w3QppednLWqyvH&X-Amz-Signature=939b509e9484711224749b4baf60ab829d00e1fd01ed94e282d6fed9a03eba64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKZ5XP5%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCxH51u8lxt3YVSZ5OtrnFJAf67qSMgiecxomTZXfmV2AIhAJ1TNtVhB02MZbE1iqL0gsIDf5I0muEPfLykx9wYB6PCKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjLLTSY1r3kTlnL54q3AMo%2F8Y8TjW9eEvy%2FsqNVG17napLG7v50barYoRKuue8R3sLQ2XizeaA5Gm%2BLJmAldhxLYfPlVpLn0TXHgkzuxQTnNne%2F4tFEs8PCVc6oRTVnQfHXNI3a5%2Be2qlVbEBczo2pabMaFp8qzU1V%2B32SMp4FtnN9sGI24JieqIAwtr6RqZ31YOCg9sLkP246PrUdXsjh6emXzSKtMFz0nYNny6eB8kDcoF6%2FsmBIFDx1zTdsmYonwQQYnrdIyUJvJk8EQC3BxzddPw9947dOQ6JXRgKQcgeR27LBn19DIX1ZWSSzQOheuhUqUpz14W%2F%2BmM37arThGPGJ66c%2F4qEz7lvxDMrK%2ByyvqT%2B6%2FC5as1wULzvTf4p5jxsfE691asakqDMt7c9Jti%2FEtn4vopPzB5ALieaUYJGWIyBntStDK0oIyKfbsRP1GnUcgVH8NVaBQx%2Fb33KEre8Ha6D2oXix0thMMrdlPpQe14956XlQbCh3H9gyriBQhuJ4B9Q46yWJNYVrn9j1q1F8j%2BQDkwkFfOU%2F0nBuxqiXnPOKAtddJh2pO0J%2BswTlagkgCjQpt%2FxVvtDL2fGYlOEDHhV63ZC49uPmrnUnuaddDV3hEQsxFdW4D8uRTKt%2B3n6ZrjcJpAuDqDCnv%2BHGBjqkARaxaXXMddCbykvpI2H%2BN9FtLSkaCgr%2FItHkD7w9IhngSNC%2FepPDoUA3N1W3QZD7WMaDSl%2Bd%2BQda5lGo%2B53txSTAP1F1OK7isj7J051XmyGRlLEVFsiUYzboxULoX65mN6VhQEtRrVaXVaSvef51YyVAgFu1SLcz5y5fX6cdKzUMebqgBugCVfhSFehI9V3XWc17UsGHxrnPP9w3QppednLWqyvH&X-Amz-Signature=2fd285b60bd8a633b5c3fa7212144be512982874d8ddd56737e5f9208e8a07e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKZ5XP5%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCxH51u8lxt3YVSZ5OtrnFJAf67qSMgiecxomTZXfmV2AIhAJ1TNtVhB02MZbE1iqL0gsIDf5I0muEPfLykx9wYB6PCKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjLLTSY1r3kTlnL54q3AMo%2F8Y8TjW9eEvy%2FsqNVG17napLG7v50barYoRKuue8R3sLQ2XizeaA5Gm%2BLJmAldhxLYfPlVpLn0TXHgkzuxQTnNne%2F4tFEs8PCVc6oRTVnQfHXNI3a5%2Be2qlVbEBczo2pabMaFp8qzU1V%2B32SMp4FtnN9sGI24JieqIAwtr6RqZ31YOCg9sLkP246PrUdXsjh6emXzSKtMFz0nYNny6eB8kDcoF6%2FsmBIFDx1zTdsmYonwQQYnrdIyUJvJk8EQC3BxzddPw9947dOQ6JXRgKQcgeR27LBn19DIX1ZWSSzQOheuhUqUpz14W%2F%2BmM37arThGPGJ66c%2F4qEz7lvxDMrK%2ByyvqT%2B6%2FC5as1wULzvTf4p5jxsfE691asakqDMt7c9Jti%2FEtn4vopPzB5ALieaUYJGWIyBntStDK0oIyKfbsRP1GnUcgVH8NVaBQx%2Fb33KEre8Ha6D2oXix0thMMrdlPpQe14956XlQbCh3H9gyriBQhuJ4B9Q46yWJNYVrn9j1q1F8j%2BQDkwkFfOU%2F0nBuxqiXnPOKAtddJh2pO0J%2BswTlagkgCjQpt%2FxVvtDL2fGYlOEDHhV63ZC49uPmrnUnuaddDV3hEQsxFdW4D8uRTKt%2B3n6ZrjcJpAuDqDCnv%2BHGBjqkARaxaXXMddCbykvpI2H%2BN9FtLSkaCgr%2FItHkD7w9IhngSNC%2FepPDoUA3N1W3QZD7WMaDSl%2Bd%2BQda5lGo%2B53txSTAP1F1OK7isj7J051XmyGRlLEVFsiUYzboxULoX65mN6VhQEtRrVaXVaSvef51YyVAgFu1SLcz5y5fX6cdKzUMebqgBugCVfhSFehI9V3XWc17UsGHxrnPP9w3QppednLWqyvH&X-Amz-Signature=50f01180e739bec0058d60c10c74c59fa2ba6e1094a3ca3c9e1ed0f14ac85dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKZ5XP5%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCxH51u8lxt3YVSZ5OtrnFJAf67qSMgiecxomTZXfmV2AIhAJ1TNtVhB02MZbE1iqL0gsIDf5I0muEPfLykx9wYB6PCKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjLLTSY1r3kTlnL54q3AMo%2F8Y8TjW9eEvy%2FsqNVG17napLG7v50barYoRKuue8R3sLQ2XizeaA5Gm%2BLJmAldhxLYfPlVpLn0TXHgkzuxQTnNne%2F4tFEs8PCVc6oRTVnQfHXNI3a5%2Be2qlVbEBczo2pabMaFp8qzU1V%2B32SMp4FtnN9sGI24JieqIAwtr6RqZ31YOCg9sLkP246PrUdXsjh6emXzSKtMFz0nYNny6eB8kDcoF6%2FsmBIFDx1zTdsmYonwQQYnrdIyUJvJk8EQC3BxzddPw9947dOQ6JXRgKQcgeR27LBn19DIX1ZWSSzQOheuhUqUpz14W%2F%2BmM37arThGPGJ66c%2F4qEz7lvxDMrK%2ByyvqT%2B6%2FC5as1wULzvTf4p5jxsfE691asakqDMt7c9Jti%2FEtn4vopPzB5ALieaUYJGWIyBntStDK0oIyKfbsRP1GnUcgVH8NVaBQx%2Fb33KEre8Ha6D2oXix0thMMrdlPpQe14956XlQbCh3H9gyriBQhuJ4B9Q46yWJNYVrn9j1q1F8j%2BQDkwkFfOU%2F0nBuxqiXnPOKAtddJh2pO0J%2BswTlagkgCjQpt%2FxVvtDL2fGYlOEDHhV63ZC49uPmrnUnuaddDV3hEQsxFdW4D8uRTKt%2B3n6ZrjcJpAuDqDCnv%2BHGBjqkARaxaXXMddCbykvpI2H%2BN9FtLSkaCgr%2FItHkD7w9IhngSNC%2FepPDoUA3N1W3QZD7WMaDSl%2Bd%2BQda5lGo%2B53txSTAP1F1OK7isj7J051XmyGRlLEVFsiUYzboxULoX65mN6VhQEtRrVaXVaSvef51YyVAgFu1SLcz5y5fX6cdKzUMebqgBugCVfhSFehI9V3XWc17UsGHxrnPP9w3QppednLWqyvH&X-Amz-Signature=4013ecf598debf2b1f7e10051a20db7f0726be0036f1ebf8dce85f4b8e8093ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKZ5XP5%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCxH51u8lxt3YVSZ5OtrnFJAf67qSMgiecxomTZXfmV2AIhAJ1TNtVhB02MZbE1iqL0gsIDf5I0muEPfLykx9wYB6PCKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjLLTSY1r3kTlnL54q3AMo%2F8Y8TjW9eEvy%2FsqNVG17napLG7v50barYoRKuue8R3sLQ2XizeaA5Gm%2BLJmAldhxLYfPlVpLn0TXHgkzuxQTnNne%2F4tFEs8PCVc6oRTVnQfHXNI3a5%2Be2qlVbEBczo2pabMaFp8qzU1V%2B32SMp4FtnN9sGI24JieqIAwtr6RqZ31YOCg9sLkP246PrUdXsjh6emXzSKtMFz0nYNny6eB8kDcoF6%2FsmBIFDx1zTdsmYonwQQYnrdIyUJvJk8EQC3BxzddPw9947dOQ6JXRgKQcgeR27LBn19DIX1ZWSSzQOheuhUqUpz14W%2F%2BmM37arThGPGJ66c%2F4qEz7lvxDMrK%2ByyvqT%2B6%2FC5as1wULzvTf4p5jxsfE691asakqDMt7c9Jti%2FEtn4vopPzB5ALieaUYJGWIyBntStDK0oIyKfbsRP1GnUcgVH8NVaBQx%2Fb33KEre8Ha6D2oXix0thMMrdlPpQe14956XlQbCh3H9gyriBQhuJ4B9Q46yWJNYVrn9j1q1F8j%2BQDkwkFfOU%2F0nBuxqiXnPOKAtddJh2pO0J%2BswTlagkgCjQpt%2FxVvtDL2fGYlOEDHhV63ZC49uPmrnUnuaddDV3hEQsxFdW4D8uRTKt%2B3n6ZrjcJpAuDqDCnv%2BHGBjqkARaxaXXMddCbykvpI2H%2BN9FtLSkaCgr%2FItHkD7w9IhngSNC%2FepPDoUA3N1W3QZD7WMaDSl%2Bd%2BQda5lGo%2B53txSTAP1F1OK7isj7J051XmyGRlLEVFsiUYzboxULoX65mN6VhQEtRrVaXVaSvef51YyVAgFu1SLcz5y5fX6cdKzUMebqgBugCVfhSFehI9V3XWc17UsGHxrnPP9w3QppednLWqyvH&X-Amz-Signature=dfba652ed7ebb3b21a0ef6e8c81c8b3709440a179b139670c9cc8825436d5ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XN5MZ7T%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCC8%2F9e5lKy%2BB6yoxHOO24aeoAf5YWaI%2BGBtntyiAXPIwIgPWlrE8qLcKvKSCmxcWQdpX1lCVG1iEibQ1VJj5CySTQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxF31cE4AWYB%2B6SOyrcAzCHeK1o8QYR%2BU%2FwN9J%2BIvNWlqdTArVm3w9h%2BK%2F0XWRQarCrBFKMdPe4z6JtO9fkj8tryZn9SC%2BVbI%2FuBJvQKt2CvLFOWNDUQsSfy5GJ56%2FBREQeNZd7gmwJOOwLEjmNNaYYWbS1bZ6fpZ8sb1iilBsJLTjGRcjQCFlNytrpEpvmvM1GbzrRzc3A4vHgXQ6vUWsfprn6IAku49Zm9O2BGt5FQZ%2BILFGr0NLmogBWMEamZepP1lYP5umDgLj79eVSLiOiDNyFFyOqturPKm9L3xTKmSRc9RHMHQ9GWUWZ64ltXRWc6QZFunwdKcD3Bca7Gibf6f01KRM5ZDWnvLfgBhpo9lnLws6bO2FbK%2BVf9g01VT42qbDwc9JVBsNWTPMf0xc5z5w6LkhcYvv0DmXvS8%2FM%2F5Nt0N7TRb1HU%2Fh1rPvaD0%2FmaOh1BAYCT9OF4q%2FwlpSZTCqGdcAXeqApbaOg4m%2FMvH79FGrGkP4Klc5%2Br1f%2FhWk5HWPQBcQlJ9lZtIMpSZ%2BgLimtMlv6QcbSaCoVCAEWnPOaOnRsQdtnVc1Bwad1XH0CAMrBu1tTP178XTOR3am%2BXFcz7NZzFu0YP5MCMo%2B47Rnn7xbQ6cZO1TCJPPLWOoVusZYYZYu0gAfGMJ%2B%2B4cYGOqUBSU4pmP4xABBAnJXzHq%2F6m2%2FDdk3KchKLwTcNNU9UTQOBuJgZIgSKG1GkIefeGb%2BCnynsK%2BBZDdInIc%2BLcruAxeuN21IeABVoULpIb1ZkUOkum7J37OtYpTZFVjcUQk5BToPb0FT8Q%2F91ZySBS%2BXURgOdwD9RqYWHeub7DATpXg6%2BDb8yKYeQOROlNjWg2GJq9EZbckVKD7p8VFHUMEfk9Z8qsPAY&X-Amz-Signature=9cf4bd3935fa41a4fb3640742c5f74786fabe19f4a1f6a05ff6763bbe52c3b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L3VT3AM%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIC4nd%2Bvc3lHpFZS7aAavY%2Br5xeAtYdu6v5g2jeyf0DHDAiBkNsoo2GmXVWVNBMsc%2Bo3H5NEDsJwNODi4qwpyaBEp5iqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSzZ%2FFYnaOHUgmLNlKtwDIJ7q2Acxtxw1oRowmipRbmKfwXtjhobiK3id3vIb0SAPZpvKavTS8HkEErOdcX6%2Bok0bo%2BID%2F%2BIbqD5LzMRGL8TIj85qupKdfb6bB20A%2Be4F93bWJ%2BaTcLJpFGBUf%2FUq6O38NnAoAEjC6GxqY6fTNYXZLfSjjwt990zfr%2FtBaz%2FDAcND1eqa6%2FYIdnKEs5pmvl2ngcVojbgv4H3vjx02lOh3ZrxfRDTZ3pUmw4MEO7NCSrEoKTvU4UVC%2FtBvm4L%2FeSedJ8NA8INnug%2FfNp02zE%2F2X9pf3huKV9%2FW9tVDDyzQB79JlUrbLXTtKt1%2BxZuaYyp9053%2F3K5Rth3pEwxM6pLJ%2BrTuyN3FYyLu%2Ffbi2WFuXWaR%2FewEAiLeyMQGptoSwi4GpA59j10zszWKTDr2EOKmgbfoO%2FWNKzQdI%2B1XO3GlEKhvXLbUrUxfidOiGCnlVkB%2FOAA6fjarXZVDNR7ssCGmVLhF3hyq%2Bxw1rZF1nAcjZPIOrxKvatApfCFZCBSXWhdPp%2BEuDCM1498N%2Fz%2B0zA4%2FfiO4smIdkEQAn5IxkSD0ejma%2FTn2y6bRlLBlBTKbHSAspnSOrRpmfODvjzk6OWtad%2FqcBwcztNPdxeeYXGLAi8Q%2BGBahSNi8MH0wvL7hxgY6pgFfQ4S591W33S4AC6MXXX0D3SflsLpXiA1VD%2FB%2BVOF6E75jJobppftW2yTosEfx29MgZ87u8pKB%2Fsn%2F%2FU4aqcj4zHpFfDcqWhzZkZh7IWpGBAF2IQpevz2RpVY1woDqwypR%2BXtgz5OSRNIS36s9Wuponvi0j9Ps%2B2aB8aRS1KfevvcG2kFOophSbacxhSNMDhjbxup3dWzexv84lEo341dkVQ4%2F0Nld&X-Amz-Signature=a5473694f324e376e7d68369b6e0a94572d4cd2e4f4ba764bb10b8091e45b524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVGBLQ3K%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQD8DBhmoVysJfuRBNWU9dkhDggKm%2Byu5c2b9PgE9fHdnAIhAKazwSuucSLJjLK0PnkDXXxHBAuKBe917TgIZ366QeqfKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSxtRobCeOrKzHLBQq3ANOWv38rMDJjGBePTxmgzqF%2FFrEVwfOluSL%2BRexrJc13DmVF4dpWuKlGst8nAa%2BIIcLXPsMGwfD2D0KLjnOA4gUx%2BEZzUg8%2F6XnB%2BLRLHH758eJb4Bqq3CsMHESBk0hKpPCFFPGBOCscis40P6%2FWJWYhtdcqZDcVCyNAxE%2F%2FI6IEzEVzmT9md2G19ZI8B8q%2BaRTz%2FyKpCqM2LMMSSL7UIl6Kx7l2F3%2FJz28B%2BlBBuZSW5P7O8VklKP9yTCnzfL1i%2FgNbRfVi3UtBXl7H6oyId4SNO4QRs3qv2%2BSpMWd9UFB0qWbj%2BxxVWmEtkIXTeVNFblWdikA8dQGK2%2FcnIoYIqoMVQZM1CBC57WI9bIVCMQvuLXuL%2FZOpHBa0rcFHyaqPSQD%2FWTySdBw5p5Y1l%2FDOodamL1y1%2FxIUOVbHDIeDn%2FuB%2FJ9SYQJMsxeuc0FQ3QyAuzKU%2FcD0sNkIV9fpuLHseY%2BQSlaeHBOjqsajezRyvoL6Yo0%2FPHOfsieBBnixhlgGXcTmL3dhW9ikXjC0iRb7UCrbSoidnu3Jr%2F1RS4DozIQZNtJM%2FJRJghckYNRux9O01U7LNtnjvIHydzQtcWWMZvKU%2FAu%2BPeIHS3BWXqnItITGT%2BYVYRqIESN2U3YHjCivuHGBjqkAflj5Zyfvw2QZ12i9zsTi%2B3Vk%2FOhtPGHFoQPWMHowjnD8nvpr6Y5yCHfexW%2BUS%2BZ%2BMlXaRHVHFWmlxb0jjPh3QW5n%2FmymwCehL0xbCDHPXO50xLtwzo5THHdjiBagjhToNH3cfGOZ9ohVb7flw3ej7ugxIDlVi5NoSaBMPwIlf%2FS%2BRdiv%2B87BUhgEyFiKZZERn8lzhjw%2BA6wDD%2FSdaq5TVW1DLOJ&X-Amz-Signature=429bf8a9e4f1a6a450af4ed8bc4bf48d818012c6237a6941392afe88033f9d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKZ5XP5%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCxH51u8lxt3YVSZ5OtrnFJAf67qSMgiecxomTZXfmV2AIhAJ1TNtVhB02MZbE1iqL0gsIDf5I0muEPfLykx9wYB6PCKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjLLTSY1r3kTlnL54q3AMo%2F8Y8TjW9eEvy%2FsqNVG17napLG7v50barYoRKuue8R3sLQ2XizeaA5Gm%2BLJmAldhxLYfPlVpLn0TXHgkzuxQTnNne%2F4tFEs8PCVc6oRTVnQfHXNI3a5%2Be2qlVbEBczo2pabMaFp8qzU1V%2B32SMp4FtnN9sGI24JieqIAwtr6RqZ31YOCg9sLkP246PrUdXsjh6emXzSKtMFz0nYNny6eB8kDcoF6%2FsmBIFDx1zTdsmYonwQQYnrdIyUJvJk8EQC3BxzddPw9947dOQ6JXRgKQcgeR27LBn19DIX1ZWSSzQOheuhUqUpz14W%2F%2BmM37arThGPGJ66c%2F4qEz7lvxDMrK%2ByyvqT%2B6%2FC5as1wULzvTf4p5jxsfE691asakqDMt7c9Jti%2FEtn4vopPzB5ALieaUYJGWIyBntStDK0oIyKfbsRP1GnUcgVH8NVaBQx%2Fb33KEre8Ha6D2oXix0thMMrdlPpQe14956XlQbCh3H9gyriBQhuJ4B9Q46yWJNYVrn9j1q1F8j%2BQDkwkFfOU%2F0nBuxqiXnPOKAtddJh2pO0J%2BswTlagkgCjQpt%2FxVvtDL2fGYlOEDHhV63ZC49uPmrnUnuaddDV3hEQsxFdW4D8uRTKt%2B3n6ZrjcJpAuDqDCnv%2BHGBjqkARaxaXXMddCbykvpI2H%2BN9FtLSkaCgr%2FItHkD7w9IhngSNC%2FepPDoUA3N1W3QZD7WMaDSl%2Bd%2BQda5lGo%2B53txSTAP1F1OK7isj7J051XmyGRlLEVFsiUYzboxULoX65mN6VhQEtRrVaXVaSvef51YyVAgFu1SLcz5y5fX6cdKzUMebqgBugCVfhSFehI9V3XWc17UsGHxrnPP9w3QppednLWqyvH&X-Amz-Signature=bcb495ee58c4c87c39b30cdf585f00bf10278068b22137399717ed5b85e7aeee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHGQD7WM%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDmqDBWawo1Wym1NCyz9E2j6Zyv6SZqX5KE9im3oi8TCgIhAPw9ZxbbsetX1dRV30ebBK%2BsI7%2BlAxzIPM%2F3A67wc%2BvzKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyc1o0XnfIaWqFi5M8q3AP1zR0UJdcOEjxX34N1%2FzARGCys37xI1oCVw36GUogBCUS%2B6mrlam27EUOjYAJnswbAX%2FOif1t867Q1%2BPlkfMohpB%2FFuRkGjSbcuCoXt5VSbuyJFsFPMV77LNcMaedlGEdvw3msYFzcIqvbmezA%2BEt94lqjh3tBpi1H83D8rgYZ5pFN7IVpXQrOiG83AlpCIUf60QkaQHG%2F3cpHVsYxRHqSeKx2571qeS8oV%2FA2wgXElDN7gTUJ3Hj1jSm9za7OtwkU%2B%2BaH3dZnsRalRU0LpPmpnjIsluPloESjtMK3vzPA32kgD%2FfWjcioGr%2BY3u9Yv0tbeGtIfQSDJJ9vbnXBzks8dTklQBs4i0MtemHsJx2T9y0%2Bm%2FXji6XaTitPWGlgwf%2FTOvLaGsyH9gvTvut9LHezcqsY0f%2F%2FH7p0EphvzwBCrIMdn4h3%2BMvgKfIWxFP%2FSzUoVz5fYE3tiaJKQqnbgEKF7hBNnHTJmWi9VnUMjsdKW2vfAJYZgDL%2BHeylf9pU0ZaBnm%2BcXyeEWQ8SqmdNxpyLBrIniw6EDb7A%2F2KvRttP3BdZ9lsJwcM3mnCAlvaavRvZprHE%2FCKn%2BWGmWS6rOtP1h%2FFkhyx1QDKwP86o4tLufbvgga0mlfFSRa5DLDCCv%2BHGBjqkAQIc6ohe8o41kmWEO53CKomNS2v%2BmFpw6XJqqVdpNHgLzGpPfgZ7EHYHqwjwogF2Tp2ZB6fArPd8UnczaFVX5amRO8gjscISvqwk12rcWCfvfSvc4ZVW9VC6e3yk1pCrV5eZJAu%2B%2F%2BYVB5dKTxIS8004mkcjB%2BbwXsaeyJX77OWdI5lxdS8QHdYFE%2FP1F%2BwB76wpKGNippLRaStpuAnoXRe5En7J&X-Amz-Signature=eee047594588365c1e6043c1e849e2ff32be43b9fca196d05e26076f564017f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKZ5XP5%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCxH51u8lxt3YVSZ5OtrnFJAf67qSMgiecxomTZXfmV2AIhAJ1TNtVhB02MZbE1iqL0gsIDf5I0muEPfLykx9wYB6PCKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjLLTSY1r3kTlnL54q3AMo%2F8Y8TjW9eEvy%2FsqNVG17napLG7v50barYoRKuue8R3sLQ2XizeaA5Gm%2BLJmAldhxLYfPlVpLn0TXHgkzuxQTnNne%2F4tFEs8PCVc6oRTVnQfHXNI3a5%2Be2qlVbEBczo2pabMaFp8qzU1V%2B32SMp4FtnN9sGI24JieqIAwtr6RqZ31YOCg9sLkP246PrUdXsjh6emXzSKtMFz0nYNny6eB8kDcoF6%2FsmBIFDx1zTdsmYonwQQYnrdIyUJvJk8EQC3BxzddPw9947dOQ6JXRgKQcgeR27LBn19DIX1ZWSSzQOheuhUqUpz14W%2F%2BmM37arThGPGJ66c%2F4qEz7lvxDMrK%2ByyvqT%2B6%2FC5as1wULzvTf4p5jxsfE691asakqDMt7c9Jti%2FEtn4vopPzB5ALieaUYJGWIyBntStDK0oIyKfbsRP1GnUcgVH8NVaBQx%2Fb33KEre8Ha6D2oXix0thMMrdlPpQe14956XlQbCh3H9gyriBQhuJ4B9Q46yWJNYVrn9j1q1F8j%2BQDkwkFfOU%2F0nBuxqiXnPOKAtddJh2pO0J%2BswTlagkgCjQpt%2FxVvtDL2fGYlOEDHhV63ZC49uPmrnUnuaddDV3hEQsxFdW4D8uRTKt%2B3n6ZrjcJpAuDqDCnv%2BHGBjqkARaxaXXMddCbykvpI2H%2BN9FtLSkaCgr%2FItHkD7w9IhngSNC%2FepPDoUA3N1W3QZD7WMaDSl%2Bd%2BQda5lGo%2B53txSTAP1F1OK7isj7J051XmyGRlLEVFsiUYzboxULoX65mN6VhQEtRrVaXVaSvef51YyVAgFu1SLcz5y5fX6cdKzUMebqgBugCVfhSFehI9V3XWc17UsGHxrnPP9w3QppednLWqyvH&X-Amz-Signature=ad123346dad2041db4942f1c1a80fd771a9db864c7225bcadfc7a89da0f68a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTQL2NSD%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQD6eZVoa4chnvPf4Mug74AZzeLVxqYtVg9y3DBhNrczrwIhAMcABjiOXg0WyS5cpoZX3XS3aZ4JmOBjYZXTyryxrRXtKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ38z1qNlboR28KJEq3ANlqnzX1xRyYtp3bEsslQ41gZQAAnpfW50YghyCW1J1Pk5t%2BqiGXRqdOiVZlzzJt%2ByobcIPyVLEYXBohAQZwm%2FlwVoQof0q9bf8SfRh%2FYfNx3Nj2GlPYN%2BtZKte3BFiN5I0mO4IniV69Dm3ORBqszLjp%2FZ%2Frj9Cnhsk4wGMYBbO%2F1hkxNdMKHas8qxpr0MhmBVMkkIkaXQrmMgofP1CGjCPc%2FFR%2BfdU%2B1jkKCp%2BLPJBJ81SNG3vg%2FOk3QyDo3HwD%2FOZm8kG2GSOus6fKw36QTgok6GJMVdWq4%2BnA2lHM%2FjyRIeP0%2BHvril3YEdC0wqQ55QUKblJ13SgbquS2E1Jr86u8GzIjil6OfJmPoX%2BrT%2Bv1sGvMbIwWoFLTXBslBpJireXjwDY3r%2FhgxLGnU8Kj8G7gZdF%2BALvcFRp%2FUtBdsq8uDD%2BF8mdmZkbiZS9G4BAISTmY%2B7QmEl8piVTxzmTgqBhQ2jXEUGX4oy7j0VgXdRHoTKpGgnUFbskgsmDVr7Um9OT%2BALucm%2Fa5Tcinsc6EGwW0bHfjHBeW3BYY4miRjKifrkFT79PogCyyxFIbAdYgbMGMM3zjLrsvnxxPmPwuairLK7tbstb%2Fj7ugSE%2BFZShzFG6L86pEMSawS%2BotTD1vuHGBjqkAcA%2Bx7IX0C0PhyPU%2FXKo%2BkbztjeFpx6O2aVVeAY1RGwiCC2YMHPGNHIYyK5g0fYEyuwvrp6%2FBSq8REzyKvCTSjh1tNxbzWeUj1wXHXF8Nv%2BTIgepoAiXCAq8%2Bnro0w0surutl%2BvMS1JrfyT1CW3WWjmQ%2BwRVTTzhHDe9CJCrBIustEQvSPflI1cqOJ0udKJ0CSa7%2BRHyGcck1GN4jUIkNfqmw%2Fis&X-Amz-Signature=4d826741d36a2701e4a9ceda8418e6754f2e817d5fd2d6ce6fbfa5aaa17ab8af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKZ5XP5%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCxH51u8lxt3YVSZ5OtrnFJAf67qSMgiecxomTZXfmV2AIhAJ1TNtVhB02MZbE1iqL0gsIDf5I0muEPfLykx9wYB6PCKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjLLTSY1r3kTlnL54q3AMo%2F8Y8TjW9eEvy%2FsqNVG17napLG7v50barYoRKuue8R3sLQ2XizeaA5Gm%2BLJmAldhxLYfPlVpLn0TXHgkzuxQTnNne%2F4tFEs8PCVc6oRTVnQfHXNI3a5%2Be2qlVbEBczo2pabMaFp8qzU1V%2B32SMp4FtnN9sGI24JieqIAwtr6RqZ31YOCg9sLkP246PrUdXsjh6emXzSKtMFz0nYNny6eB8kDcoF6%2FsmBIFDx1zTdsmYonwQQYnrdIyUJvJk8EQC3BxzddPw9947dOQ6JXRgKQcgeR27LBn19DIX1ZWSSzQOheuhUqUpz14W%2F%2BmM37arThGPGJ66c%2F4qEz7lvxDMrK%2ByyvqT%2B6%2FC5as1wULzvTf4p5jxsfE691asakqDMt7c9Jti%2FEtn4vopPzB5ALieaUYJGWIyBntStDK0oIyKfbsRP1GnUcgVH8NVaBQx%2Fb33KEre8Ha6D2oXix0thMMrdlPpQe14956XlQbCh3H9gyriBQhuJ4B9Q46yWJNYVrn9j1q1F8j%2BQDkwkFfOU%2F0nBuxqiXnPOKAtddJh2pO0J%2BswTlagkgCjQpt%2FxVvtDL2fGYlOEDHhV63ZC49uPmrnUnuaddDV3hEQsxFdW4D8uRTKt%2B3n6ZrjcJpAuDqDCnv%2BHGBjqkARaxaXXMddCbykvpI2H%2BN9FtLSkaCgr%2FItHkD7w9IhngSNC%2FepPDoUA3N1W3QZD7WMaDSl%2Bd%2BQda5lGo%2B53txSTAP1F1OK7isj7J051XmyGRlLEVFsiUYzboxULoX65mN6VhQEtRrVaXVaSvef51YyVAgFu1SLcz5y5fX6cdKzUMebqgBugCVfhSFehI9V3XWc17UsGHxrnPP9w3QppednLWqyvH&X-Amz-Signature=47d18a22cb224421c0d5f01da369d3718505d8be9a112857f081e81f6586411d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJNNAWS%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T014005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIDACVu7C3ETCXsBB9%2Bw8pGCYc1xS1yAHKNCNXSu%2BO4ppAiAm4Y2Q6TfnwexHhrVnVyoTSJbfJRdx1NBBHicZBEIgJSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2FidlG%2Fxp9mCRLXHKtwDURJiUHqtV5y%2BOH5eaC5rNZdlYbATai0mhbolfr4t76aCZ5OcIsgsFQaF%2BxOq6rEq7QWEbRM2O08fNIJfwThCBBZNdeGw15N%2BTdcBnubk6AxKrYtXTxz0SA8G%2B7LyioEAY1GpLzTVViMIUd1b51%2BCYGapPoYzSn0QmWUQsthd%2B7Xv47CIJIi1JUaoCJVo6EKzVpU3qsQF0b0bXhOODhelEuow92vD03Qc71vDDF0tPusj1x14pBl7l73jsjBz%2Bygu361AVmSC5%2BWJVbnt%2Fa7fX8VftqJBkslQR4%2BKM8V5V6ToTjzq3aF%2FuawProdSuTc6KompJxkKdmYZAVraYqTC9XyT9SHbYer9gQtO%2BGOjAziTlOB6195hFVc0sc3S6Y%2FvYhjLHCrE6p3IvRTneWcMDzwCd6alhKf2x6iAsDVJVl9W89MysNb1j1uJ4SRWYZLBVpBPRzWteTnrpFzPPX4aQFsCbEInsAufPaCFBdlSVtpiiVUMfcuqqNuAfG8BblHa8zRxSYnl%2FGiKdPOHhdOkabp%2F3mLsyZP17gXeEzSbSF3zQSOi7IXJqO%2ByZ3ly%2BbJCWVNt%2BxvCiSR97JZohuMdk59oPBDdGxF94WKChowJPCY08IKxWHoNZtK%2BTrAwoL%2FhxgY6pgEUiIfAGvHtktVPOhpzJNV003%2BKO0yY%2BenwoENqDxPX2AIaLMcXiKGRvOEmCLPB5sd92fNXOmfw8VZmZlNC2QcMxjV0legHvG%2B%2FxzptSJe2SkRM3AHDDEQVz7m7oY4uyHyWuEdbfHgbirYnrP2sclWqdgzmfl8UoZW%2BmaB8zhtYspZjQbwyMUgUnG74KXGqNDNTQWAsyO8g9lnG5nTTSBHqAhutfg1r&X-Amz-Signature=b0ffbb14e7bc9fdb53c6798f35bc2516b575fd1aae8a48ccc1d7922d30578a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKZ5XP5%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCxH51u8lxt3YVSZ5OtrnFJAf67qSMgiecxomTZXfmV2AIhAJ1TNtVhB02MZbE1iqL0gsIDf5I0muEPfLykx9wYB6PCKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjLLTSY1r3kTlnL54q3AMo%2F8Y8TjW9eEvy%2FsqNVG17napLG7v50barYoRKuue8R3sLQ2XizeaA5Gm%2BLJmAldhxLYfPlVpLn0TXHgkzuxQTnNne%2F4tFEs8PCVc6oRTVnQfHXNI3a5%2Be2qlVbEBczo2pabMaFp8qzU1V%2B32SMp4FtnN9sGI24JieqIAwtr6RqZ31YOCg9sLkP246PrUdXsjh6emXzSKtMFz0nYNny6eB8kDcoF6%2FsmBIFDx1zTdsmYonwQQYnrdIyUJvJk8EQC3BxzddPw9947dOQ6JXRgKQcgeR27LBn19DIX1ZWSSzQOheuhUqUpz14W%2F%2BmM37arThGPGJ66c%2F4qEz7lvxDMrK%2ByyvqT%2B6%2FC5as1wULzvTf4p5jxsfE691asakqDMt7c9Jti%2FEtn4vopPzB5ALieaUYJGWIyBntStDK0oIyKfbsRP1GnUcgVH8NVaBQx%2Fb33KEre8Ha6D2oXix0thMMrdlPpQe14956XlQbCh3H9gyriBQhuJ4B9Q46yWJNYVrn9j1q1F8j%2BQDkwkFfOU%2F0nBuxqiXnPOKAtddJh2pO0J%2BswTlagkgCjQpt%2FxVvtDL2fGYlOEDHhV63ZC49uPmrnUnuaddDV3hEQsxFdW4D8uRTKt%2B3n6ZrjcJpAuDqDCnv%2BHGBjqkARaxaXXMddCbykvpI2H%2BN9FtLSkaCgr%2FItHkD7w9IhngSNC%2FepPDoUA3N1W3QZD7WMaDSl%2Bd%2BQda5lGo%2B53txSTAP1F1OK7isj7J051XmyGRlLEVFsiUYzboxULoX65mN6VhQEtRrVaXVaSvef51YyVAgFu1SLcz5y5fX6cdKzUMebqgBugCVfhSFehI9V3XWc17UsGHxrnPP9w3QppednLWqyvH&X-Amz-Signature=e27b258b18c87ad35f1be8ccb31a2b2fb5c43e8055b7e6e0c6c6a68cbaf8e66d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMD7XRV%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T014010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDOwSMl3jSodcm3aVQJ69S6CtjGi8l9aK4nekMOazGjWgIhAOooee%2F5fFU%2FuWNY2RBm6EGiYFmkzX%2BTPdUbWBZlfvdRKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdLzbPUz%2BnyxqkDlsq3ANH7I65%2F%2BQ1PBbh6fIFqCowtOWD5vRBoXbxPi4zuxCXBZ2mrEYBz8MQLyByZdqIZiUGR71fyn3hpx1%2BcPP23e508KaGqeB9W9YfKNtHcUDsTLaeJ4oOzkOYdkqm1YzOByvn4vTzNwFOKk0wSvp0BN5%2BHqzYGdqIaQ2nB7%2FLhULuQqFj6RN7JrrdM8oO5R2rsGTQ%2Bn3qeTmNivWarbaVgJ7fuP9RvTVSEx5FNaMr%2Bp9AWD%2Bf1XcRc5%2B4%2BO2pY7qYlAxKqTDHSC%2BHyd5pWQBpKWPNJvMg22Kivl%2BF7LSOgNAtZEyd5zSIksM0OyTwxltkxkGFKOWX2rDbygDnjJ%2FGvFjj1xvE%2F8OVVs28umg%2Fn7H%2BOM7r6il1QxccRbVgld6ee1NBk522Rd36TAaloRuAiDJQtTJWakbgmtNvfEkwUdtEy%2ByImCtZR%2FbH7knNpFEOEI3LiDAxE8Vyd0MK6OAecu%2Bn%2F%2BxljMnmbl%2BN9ZCzDjzYJ21N6gk22BLt%2FtsaFGZoLWlMQRX1tq5p5mHn4BX4G724gJIeM3rYqtRxYxrCUR9tKT0FwDvdUDYhF7Yfa7y%2FDx1Ym3xG18URV5EyddCk8VNKRam14E4ekO%2FFVxNMh6hrmwVtLDpk6S%2Bc8KC7LDDRvuHGBjqkAe75LiCatXaIpTwj48KSvHJtY91wjsa8ea%2B6tv%2FxxSSphQ8cs2CTrpPjeiGHose3YzoyXTBrV92etzJuVo5dzMrQxKJ6s0QFNDyQLrFh0mfaSoSR%2FqhD7LztOC49cr8EnH42L25AcsRdQEkJSavoni7HCi%2FEjQTAv41N8aZ1%2BSbKsLK9lKl4sYDgjQ%2F%2FwVmjpYnzOD7jejTO5wmObKosu69NNDc4&X-Amz-Signature=6256955d88e4e87eb7b7c8a1ebcd5734dade5bd283734050b9845ba9303c2c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKZ5XP5%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCxH51u8lxt3YVSZ5OtrnFJAf67qSMgiecxomTZXfmV2AIhAJ1TNtVhB02MZbE1iqL0gsIDf5I0muEPfLykx9wYB6PCKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjLLTSY1r3kTlnL54q3AMo%2F8Y8TjW9eEvy%2FsqNVG17napLG7v50barYoRKuue8R3sLQ2XizeaA5Gm%2BLJmAldhxLYfPlVpLn0TXHgkzuxQTnNne%2F4tFEs8PCVc6oRTVnQfHXNI3a5%2Be2qlVbEBczo2pabMaFp8qzU1V%2B32SMp4FtnN9sGI24JieqIAwtr6RqZ31YOCg9sLkP246PrUdXsjh6emXzSKtMFz0nYNny6eB8kDcoF6%2FsmBIFDx1zTdsmYonwQQYnrdIyUJvJk8EQC3BxzddPw9947dOQ6JXRgKQcgeR27LBn19DIX1ZWSSzQOheuhUqUpz14W%2F%2BmM37arThGPGJ66c%2F4qEz7lvxDMrK%2ByyvqT%2B6%2FC5as1wULzvTf4p5jxsfE691asakqDMt7c9Jti%2FEtn4vopPzB5ALieaUYJGWIyBntStDK0oIyKfbsRP1GnUcgVH8NVaBQx%2Fb33KEre8Ha6D2oXix0thMMrdlPpQe14956XlQbCh3H9gyriBQhuJ4B9Q46yWJNYVrn9j1q1F8j%2BQDkwkFfOU%2F0nBuxqiXnPOKAtddJh2pO0J%2BswTlagkgCjQpt%2FxVvtDL2fGYlOEDHhV63ZC49uPmrnUnuaddDV3hEQsxFdW4D8uRTKt%2B3n6ZrjcJpAuDqDCnv%2BHGBjqkARaxaXXMddCbykvpI2H%2BN9FtLSkaCgr%2FItHkD7w9IhngSNC%2FepPDoUA3N1W3QZD7WMaDSl%2Bd%2BQda5lGo%2B53txSTAP1F1OK7isj7J051XmyGRlLEVFsiUYzboxULoX65mN6VhQEtRrVaXVaSvef51YyVAgFu1SLcz5y5fX6cdKzUMebqgBugCVfhSFehI9V3XWc17UsGHxrnPP9w3QppednLWqyvH&X-Amz-Signature=96d0937b60b810797d1de0b3c341f44ab7e50e041203d1baca66424099b71df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4AEK4FM%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T014014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAaRwxSgDTBRHb36UTxouBcJWyojUmRi86bAt%2FjzRJFIAiEA7pEsQCVh2UY4hoy5X5y9iBX0xHMDdWrHkulW8UKxJPYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0%2Fw7pdG34xEPuiiyrcA6EehXTKnDPnXeBdNlwdgksCg5rmqN78UVZ%2BLIWAIKE3vL2fib24B0vcxgFHH4CJ6tXMGuxEWnfH5MMbWM9bIyipLVRYcZXf%2FrYx%2By6TF1Qs8R0qQ%2BPYOu3HPi4bI%2B%2FvC%2Fg%2Bk4PdT51DSSW5xrioH%2FvTn4zm9XBwrdwf%2BLOfy4dw%2BbY5ffPQHOXLo1ttUMh9lWJnNbRGyK57a%2Fz0eqPRjGUhQs3RCORz3SUe%2FvHZ1QtxUYIFF7N4hM4wtsOpOVTrGzLp%2BjWbR8AZZk6V%2BdQflqzL6oENEm1qw8SIgEz%2Fg%2B7LONIicWSEdCaBMwQJjUw9U2Vi78KWu7hiSc20gFhSLgV1Y1tpb2rKCAETWwBbpfd6UujYJVsjLbPQOGqlMvyvX4aCFbPX8oYtnwQ47ftQjzpYXDXsDpd6ta%2B0%2BgOYBDQnfQ1VxvdqX4JpYdiaRVoVOIuclCiU98VHTSoa6iq6Hwkb9FH7NlCI6Ii2qYLLhKP4pnqH5FGA1TiHDn4B%2FTzISnCF%2FsKWfBcznDTOccM7FLVCf9DaOo7bPGL7M8S15yQgB1X7wiapNDiov7%2FB2ScKo0tegxjpp0KvilHNWLn8aELEDboxbl%2FHV7YcwUEr%2BzFS7Y64T1qhUNV4d8HcMKm%2F4cYGOqUBlLB5SkK1HH2u0k5gj10rqWWMuwGKJfQ9wbpvFzlWTMoRw1XZascZ%2BNN5LkTAnS3p5FoM%2FRFl7S%2BqGBsyiC%2BQfxRTVnPZeMcw9pp56%2BS8IM2fvKcXHBefSxE%2BOqAmND6j2gW4OtQcpci9adJPJ7Us0PJJU7OqnQfX0Vlao%2BHO%2BAZL%2FBKWtXIt8D26j5VOwhWJGyxYmhOXjC2Hqvl66Lwx%2FxByl31y&X-Amz-Signature=5253dd4b1a4deb2f48a1bec4d3c2dca2903bbccf2c026994e53d655710cc2396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPRHMAG%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T014015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIGjj%2Fb%2BePhp2l2DcAEJMjKk2DW%2B%2Bysbarpa6mevcF9b%2FAiBUbzh0cMLWlC9a2WK7ppRVOddAzbgseVWeq%2BBiVpESGiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJI%2B6ih9axC6%2FgMSCKtwDY4P%2F3EGRgdJwFvT4YViO9bduITDxlVydcpDxosIvlBlHZSMcXCYKPYgt6eWlaTytUq6dZH%2B7F72ufas7xDhbK%2Fk2fYaLjZpNMcm7f5WQZC3yKvwalBIXlW116Eq%2FUpd7ALvOVL%2FBxH1fyq62I7btcWT57ARx4g5l8FTkju6AP9RUB0ibXQjsKjTwKNWw21T8wVvjNLXlO9xw18owpx%2FywCC81Ke3zBEnkWhxghBAq9heLTB6utRfOX5sxJmduQh5T2Y7Iq7rrNUSzX6DknvM67S7SIjKLYbcVObSF3HwnFqjUXfOxQYY%2BO4QIO7CDZ3vrFl8Rch7mF4ZNg8wAsbXpgv5PDkSNxV19H1mE84dCfSlvhsGnzDHSBzY0HV2AeQFaSdtFG%2F%2FGiWzG0wsYRkPakJrF4Z7On1N4%2FGvKimQi8lKOg3hyaqZLCB9G6dl18fsrBUjxQo694nvDnqyPFwNSxlorLF9hmhcgnOaJ809MdhYkh2ClkcGPLFT6miENwJBsXp4SpC0gbsJily0Pb%2BmehiORazhSQ7uu8U%2BmApNv%2BPY2PzqiXF687l9P0piLRrLu%2BX5ZxauSw7j4Tn6kNq6Sv9KWmQjxsuuB47ytt%2F5DzSvpKvNug0SgMdoIXkw9b7hxgY6pgFV7r4%2FNJc5wmWkTjFAhGCSwFDXKUlw1Y1eslJOlCO2QYNTBbN78etO2qeBWN9AP%2FenALZ2wMrOycKEemXqgR5hovnxvKGtUROLbwC5A1CV3sTMyhAb8pivjJXAbTEneXd6NgSjsVxAntTg8QuP%2F6TaPR9CrblvV%2FlWYP%2F6h4pzrnekrfo%2F%2B%2BWQNRiXOlikKU4XqJpLj%2BtJ2186wmeCq1OzF7xy%2B1eP&X-Amz-Signature=6db45515866f44c3d6157ad4a27ef85bb76e35425521f14440e840bc425af2e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOHTDMSY%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T014029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIA%2FvA0UK7TSE4Grm6QqhCKO8tCLNGNEuHT6bALavVI7VAiEAqophhaP6l5uQswoUIJSUILmTeWr3pKoWm0Mou1vksCAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8me3eY2UW8hwaojSrcA3EoLpTH5c04bNo585aly9ktwmIY9lQApYfnyklg%2BqnO2EBdJaq4RcZ%2Fh0EDafPJmu71cgKuz621v%2BYyVpYj4dsufmj7Z%2B9U5NVM%2FnrQ9%2Bsh%2FM1wISISi5BR8Ifqx6uPqzFFpKQcLKe1ionTQSyjksDHaACKiV2BLv2VrliuxgUFiUCbw7m%2BVGeEtl8cHREmdLBB4UZ4Qkz96fl6luc6YwfbYnGLcUgblnCRRU2xxlnOGk2bolI%2FFPn2Ds0U2TOxjhxmntzc8cR7Wq4KxteTbVsL6dPrN5tNl%2BPfheQUXkoDclWTOJCBxhJhdD%2BSrVDZAPYAZ%2FPQry9mCVJqNJiGhXKh5wvg4fGt9hfIsLktMd4SrRx8geZowrGSDK6IZPFKwIXquKt6ZEmO50WhoaVt9NN8e6dbnPZisjjgozYVsb27r1yxC%2B9cmQawPo9NcXjx7qtO73P4AasnhzNn6LWiHy0eMMSPpKZX%2FdjGtBj8xZ8PaLmUTBkxEsA%2BppbD%2BYQZK6M2GMmAv5%2BM9t5ZLbu4vymnV%2F9qTfHuRI8WwCZRydfNe%2BOA%2BZqvBK6APk883E3OAstbTWdVAnTDPQCL5qj8Rod82QVnsptS4q2jt1qSJhPxqL1J776ZyfOGaKLEMPa%2B4cYGOqUBuS%2BdLwgIo4JDDhmf7vKO1R1m2rd%2FT5GVUekZ2TfwEMP%2BucC6ZxG6ee5LZFGqr22EpetJSwguKwi%2Bjuv7ffWdHJMrgAT4c0%2FFzOm4huJr%2BPKxOAKIlT0Y%2Fcx3vHQuxKxjoSs2o6qsdz1LVDezY1eklhLIjmgTW833qJ2UCDBBGRsS3gXPN6XYZR%2F5Zp23Tm8nSbT1BK7UGXegdYglc%2BbHOe%2BHGwQM&X-Amz-Signature=d2469ee66f63edac9bd31d676f3151896f98b17f74a20e68e68288c1730215be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKZ5XP5%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCxH51u8lxt3YVSZ5OtrnFJAf67qSMgiecxomTZXfmV2AIhAJ1TNtVhB02MZbE1iqL0gsIDf5I0muEPfLykx9wYB6PCKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjLLTSY1r3kTlnL54q3AMo%2F8Y8TjW9eEvy%2FsqNVG17napLG7v50barYoRKuue8R3sLQ2XizeaA5Gm%2BLJmAldhxLYfPlVpLn0TXHgkzuxQTnNne%2F4tFEs8PCVc6oRTVnQfHXNI3a5%2Be2qlVbEBczo2pabMaFp8qzU1V%2B32SMp4FtnN9sGI24JieqIAwtr6RqZ31YOCg9sLkP246PrUdXsjh6emXzSKtMFz0nYNny6eB8kDcoF6%2FsmBIFDx1zTdsmYonwQQYnrdIyUJvJk8EQC3BxzddPw9947dOQ6JXRgKQcgeR27LBn19DIX1ZWSSzQOheuhUqUpz14W%2F%2BmM37arThGPGJ66c%2F4qEz7lvxDMrK%2ByyvqT%2B6%2FC5as1wULzvTf4p5jxsfE691asakqDMt7c9Jti%2FEtn4vopPzB5ALieaUYJGWIyBntStDK0oIyKfbsRP1GnUcgVH8NVaBQx%2Fb33KEre8Ha6D2oXix0thMMrdlPpQe14956XlQbCh3H9gyriBQhuJ4B9Q46yWJNYVrn9j1q1F8j%2BQDkwkFfOU%2F0nBuxqiXnPOKAtddJh2pO0J%2BswTlagkgCjQpt%2FxVvtDL2fGYlOEDHhV63ZC49uPmrnUnuaddDV3hEQsxFdW4D8uRTKt%2B3n6ZrjcJpAuDqDCnv%2BHGBjqkARaxaXXMddCbykvpI2H%2BN9FtLSkaCgr%2FItHkD7w9IhngSNC%2FepPDoUA3N1W3QZD7WMaDSl%2Bd%2BQda5lGo%2B53txSTAP1F1OK7isj7J051XmyGRlLEVFsiUYzboxULoX65mN6VhQEtRrVaXVaSvef51YyVAgFu1SLcz5y5fX6cdKzUMebqgBugCVfhSFehI9V3XWc17UsGHxrnPP9w3QppednLWqyvH&X-Amz-Signature=db19e8337649c8a52f71c51a839dc9d0c3be2583ff157bbb3a54e7680d4d3fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKZ5XP5%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCxH51u8lxt3YVSZ5OtrnFJAf67qSMgiecxomTZXfmV2AIhAJ1TNtVhB02MZbE1iqL0gsIDf5I0muEPfLykx9wYB6PCKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjLLTSY1r3kTlnL54q3AMo%2F8Y8TjW9eEvy%2FsqNVG17napLG7v50barYoRKuue8R3sLQ2XizeaA5Gm%2BLJmAldhxLYfPlVpLn0TXHgkzuxQTnNne%2F4tFEs8PCVc6oRTVnQfHXNI3a5%2Be2qlVbEBczo2pabMaFp8qzU1V%2B32SMp4FtnN9sGI24JieqIAwtr6RqZ31YOCg9sLkP246PrUdXsjh6emXzSKtMFz0nYNny6eB8kDcoF6%2FsmBIFDx1zTdsmYonwQQYnrdIyUJvJk8EQC3BxzddPw9947dOQ6JXRgKQcgeR27LBn19DIX1ZWSSzQOheuhUqUpz14W%2F%2BmM37arThGPGJ66c%2F4qEz7lvxDMrK%2ByyvqT%2B6%2FC5as1wULzvTf4p5jxsfE691asakqDMt7c9Jti%2FEtn4vopPzB5ALieaUYJGWIyBntStDK0oIyKfbsRP1GnUcgVH8NVaBQx%2Fb33KEre8Ha6D2oXix0thMMrdlPpQe14956XlQbCh3H9gyriBQhuJ4B9Q46yWJNYVrn9j1q1F8j%2BQDkwkFfOU%2F0nBuxqiXnPOKAtddJh2pO0J%2BswTlagkgCjQpt%2FxVvtDL2fGYlOEDHhV63ZC49uPmrnUnuaddDV3hEQsxFdW4D8uRTKt%2B3n6ZrjcJpAuDqDCnv%2BHGBjqkARaxaXXMddCbykvpI2H%2BN9FtLSkaCgr%2FItHkD7w9IhngSNC%2FepPDoUA3N1W3QZD7WMaDSl%2Bd%2BQda5lGo%2B53txSTAP1F1OK7isj7J051XmyGRlLEVFsiUYzboxULoX65mN6VhQEtRrVaXVaSvef51YyVAgFu1SLcz5y5fX6cdKzUMebqgBugCVfhSFehI9V3XWc17UsGHxrnPP9w3QppednLWqyvH&X-Amz-Signature=153bf6642126ed1477d0c0deacd37e253be86521071c15d2e9485a705d7c956f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ZVISPZ%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD6lBZphz6D%2BpwKuYzWCOq23QoJ3OuCNP0CnGci6ddwqgIgCIF%2F4kwK64881KvpwLESBnOs%2FHOSsNaAExGqYUWZlvYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPImFqx2VWMfiVdUyircAxqs%2Fzd3NeQQtelBWa9lOao%2BnFubq6tIhmNJQshYPlpm8X4cUn6z4clFmC%2Fd8euOgZfXek41X7ibezhaVmFZoevR7rttsaUR7jdx6NY%2F4TQ%2BtNVp%2F8MA0MQrwGkWyMgUo3tk%2Badej1u%2Fjgd4A4JMa1NpjmdpITrosj9GQ404KNKpi2ssAoPO8Jr05T%2BrjX6DQX2ZQFJY8oTVLaoTiwABdm39VBssgDIZuPKgy6SMSfYA5qXYJLMyFZIe0SqsFYcqk%2FVB3Fh9TQw1DoAfFaRuSmhf9VcCQFEeGhctwn83L%2B00uGlxDh3DlnP95gaOsXJmaN%2Bq%2BtfqtQO6wPnMjkQ9Ow5QMJ8ntDL6S0nuqDHjuNLJFYyQ7BHvRFWX%2BDxDu83wRdPOX%2FWq17EoveitPvlRhzW2kIzRJAmVvsRp1YwpMphpqasW%2FfYw%2BHv%2F9x%2BdzXH7r2bpWqs0ziTyvkAeQQAWhb9mNcaOugOTnjDkh16sg9Oi%2B631uDfUYIpJWaXYnnki3sTPNzm8JwER2mcVAGDCqpbZ2HwfI1qEYEtZ3XeRVYxITFgS9jbqpcmF%2BP8gpKSIS%2B8KgfQFV5wz61TrFUvwxmsN3bykIdyjvJxYCUyVgNXWklfwRmn1jCHNWk8KMJy%2F4cYGOqUBeZCXELLKH6cSrbQydxyLSjXnIVUZ%2B6Ao5aj0FI6AI%2F8AJQou8FN8EHHLoIzEYCpuS1xw3EdKcyBxcq8ePHrosbnszWoWNRFHTBBgIuwLV9E9EJZsxi4MB5ZsojTSF0qXQ8wMZ9tlZW7I6IicPebzfRl0Ab0VwyiiOPlRjXXduY1SWvJWgDzMJ8R4Qn9RvAWgBUyKmIp9zAZZr12fu697Qq%2F8D0Nc&X-Amz-Signature=820c31295472d73c0f7d6a63a76c361e5c60c3419c8af9c3dacf4fa7d4467acd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ZVISPZ%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD6lBZphz6D%2BpwKuYzWCOq23QoJ3OuCNP0CnGci6ddwqgIgCIF%2F4kwK64881KvpwLESBnOs%2FHOSsNaAExGqYUWZlvYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPImFqx2VWMfiVdUyircAxqs%2Fzd3NeQQtelBWa9lOao%2BnFubq6tIhmNJQshYPlpm8X4cUn6z4clFmC%2Fd8euOgZfXek41X7ibezhaVmFZoevR7rttsaUR7jdx6NY%2F4TQ%2BtNVp%2F8MA0MQrwGkWyMgUo3tk%2Badej1u%2Fjgd4A4JMa1NpjmdpITrosj9GQ404KNKpi2ssAoPO8Jr05T%2BrjX6DQX2ZQFJY8oTVLaoTiwABdm39VBssgDIZuPKgy6SMSfYA5qXYJLMyFZIe0SqsFYcqk%2FVB3Fh9TQw1DoAfFaRuSmhf9VcCQFEeGhctwn83L%2B00uGlxDh3DlnP95gaOsXJmaN%2Bq%2BtfqtQO6wPnMjkQ9Ow5QMJ8ntDL6S0nuqDHjuNLJFYyQ7BHvRFWX%2BDxDu83wRdPOX%2FWq17EoveitPvlRhzW2kIzRJAmVvsRp1YwpMphpqasW%2FfYw%2BHv%2F9x%2BdzXH7r2bpWqs0ziTyvkAeQQAWhb9mNcaOugOTnjDkh16sg9Oi%2B631uDfUYIpJWaXYnnki3sTPNzm8JwER2mcVAGDCqpbZ2HwfI1qEYEtZ3XeRVYxITFgS9jbqpcmF%2BP8gpKSIS%2B8KgfQFV5wz61TrFUvwxmsN3bykIdyjvJxYCUyVgNXWklfwRmn1jCHNWk8KMJy%2F4cYGOqUBeZCXELLKH6cSrbQydxyLSjXnIVUZ%2B6Ao5aj0FI6AI%2F8AJQou8FN8EHHLoIzEYCpuS1xw3EdKcyBxcq8ePHrosbnszWoWNRFHTBBgIuwLV9E9EJZsxi4MB5ZsojTSF0qXQ8wMZ9tlZW7I6IicPebzfRl0Ab0VwyiiOPlRjXXduY1SWvJWgDzMJ8R4Qn9RvAWgBUyKmIp9zAZZr12fu697Qq%2F8D0Nc&X-Amz-Signature=d6480a064cd2e3ce66fad0a21345f3ada314ab403f62774f2a51f7d910b537d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ZVISPZ%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD6lBZphz6D%2BpwKuYzWCOq23QoJ3OuCNP0CnGci6ddwqgIgCIF%2F4kwK64881KvpwLESBnOs%2FHOSsNaAExGqYUWZlvYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPImFqx2VWMfiVdUyircAxqs%2Fzd3NeQQtelBWa9lOao%2BnFubq6tIhmNJQshYPlpm8X4cUn6z4clFmC%2Fd8euOgZfXek41X7ibezhaVmFZoevR7rttsaUR7jdx6NY%2F4TQ%2BtNVp%2F8MA0MQrwGkWyMgUo3tk%2Badej1u%2Fjgd4A4JMa1NpjmdpITrosj9GQ404KNKpi2ssAoPO8Jr05T%2BrjX6DQX2ZQFJY8oTVLaoTiwABdm39VBssgDIZuPKgy6SMSfYA5qXYJLMyFZIe0SqsFYcqk%2FVB3Fh9TQw1DoAfFaRuSmhf9VcCQFEeGhctwn83L%2B00uGlxDh3DlnP95gaOsXJmaN%2Bq%2BtfqtQO6wPnMjkQ9Ow5QMJ8ntDL6S0nuqDHjuNLJFYyQ7BHvRFWX%2BDxDu83wRdPOX%2FWq17EoveitPvlRhzW2kIzRJAmVvsRp1YwpMphpqasW%2FfYw%2BHv%2F9x%2BdzXH7r2bpWqs0ziTyvkAeQQAWhb9mNcaOugOTnjDkh16sg9Oi%2B631uDfUYIpJWaXYnnki3sTPNzm8JwER2mcVAGDCqpbZ2HwfI1qEYEtZ3XeRVYxITFgS9jbqpcmF%2BP8gpKSIS%2B8KgfQFV5wz61TrFUvwxmsN3bykIdyjvJxYCUyVgNXWklfwRmn1jCHNWk8KMJy%2F4cYGOqUBeZCXELLKH6cSrbQydxyLSjXnIVUZ%2B6Ao5aj0FI6AI%2F8AJQou8FN8EHHLoIzEYCpuS1xw3EdKcyBxcq8ePHrosbnszWoWNRFHTBBgIuwLV9E9EJZsxi4MB5ZsojTSF0qXQ8wMZ9tlZW7I6IicPebzfRl0Ab0VwyiiOPlRjXXduY1SWvJWgDzMJ8R4Qn9RvAWgBUyKmIp9zAZZr12fu697Qq%2F8D0Nc&X-Amz-Signature=13c9b872f3df5c99de28a19e854fdcf11a551f6bad87c1036493421bed414c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ZVISPZ%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD6lBZphz6D%2BpwKuYzWCOq23QoJ3OuCNP0CnGci6ddwqgIgCIF%2F4kwK64881KvpwLESBnOs%2FHOSsNaAExGqYUWZlvYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPImFqx2VWMfiVdUyircAxqs%2Fzd3NeQQtelBWa9lOao%2BnFubq6tIhmNJQshYPlpm8X4cUn6z4clFmC%2Fd8euOgZfXek41X7ibezhaVmFZoevR7rttsaUR7jdx6NY%2F4TQ%2BtNVp%2F8MA0MQrwGkWyMgUo3tk%2Badej1u%2Fjgd4A4JMa1NpjmdpITrosj9GQ404KNKpi2ssAoPO8Jr05T%2BrjX6DQX2ZQFJY8oTVLaoTiwABdm39VBssgDIZuPKgy6SMSfYA5qXYJLMyFZIe0SqsFYcqk%2FVB3Fh9TQw1DoAfFaRuSmhf9VcCQFEeGhctwn83L%2B00uGlxDh3DlnP95gaOsXJmaN%2Bq%2BtfqtQO6wPnMjkQ9Ow5QMJ8ntDL6S0nuqDHjuNLJFYyQ7BHvRFWX%2BDxDu83wRdPOX%2FWq17EoveitPvlRhzW2kIzRJAmVvsRp1YwpMphpqasW%2FfYw%2BHv%2F9x%2BdzXH7r2bpWqs0ziTyvkAeQQAWhb9mNcaOugOTnjDkh16sg9Oi%2B631uDfUYIpJWaXYnnki3sTPNzm8JwER2mcVAGDCqpbZ2HwfI1qEYEtZ3XeRVYxITFgS9jbqpcmF%2BP8gpKSIS%2B8KgfQFV5wz61TrFUvwxmsN3bykIdyjvJxYCUyVgNXWklfwRmn1jCHNWk8KMJy%2F4cYGOqUBeZCXELLKH6cSrbQydxyLSjXnIVUZ%2B6Ao5aj0FI6AI%2F8AJQou8FN8EHHLoIzEYCpuS1xw3EdKcyBxcq8ePHrosbnszWoWNRFHTBBgIuwLV9E9EJZsxi4MB5ZsojTSF0qXQ8wMZ9tlZW7I6IicPebzfRl0Ab0VwyiiOPlRjXXduY1SWvJWgDzMJ8R4Qn9RvAWgBUyKmIp9zAZZr12fu697Qq%2F8D0Nc&X-Amz-Signature=4ef27db7ec9edfa9a704e3b81534fbb4c9e21039626d8d1694b8feb47ce0d1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLT5U5S%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T014039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHj%2FoNZDGAq8eF2n7QmmNTX%2F29ZNrpoCF6EXDiuEAtzJAiEA5J0YV3WibSfPY2Tjre5Ue8rb8PTEmZo9vgsGVZtybmEqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr4KYScrwS4EBWK8SrcA%2FGD4R0VLLQFpkyOchKywuE0ypCOxQViBhYCSq1qkjAhgh9EIGxQ6smUl9pBO9s2jAkcExg3N3GI2%2FdImmMQGZTgmCMfUDKBg4VlLXUhVLAYhkn2s1sWA48Y%2BjGUtIp2e%2Bz9R%2BCwfknvibm1UjnLH8PU50DB3%2BZBN7gw9S9k3Eh2RqbMcsq6p3w7BDKUXJSwKpIQpnOCKtFN%2Bp3k1XVNeADqC8TqbLhXlAdLi28G4i3p4u7DVTDwSTRp21IWHWOkR1dLF6QbqDsIQl4KPEsgMZs1wdWF7sqg%2F5zBHY8wB0Xu2y70xSoWlk9fk%2BJlHG241pb5R78WOzlfg9Hba%2FbCd%2BtgyzNTDFUg%2Fkf6jUmzdCjLK1hPmVaiSUUYqNaxRqIUjFU6rt5SeFmd29xN5gBJokSBrmwp9qAWjenbY%2FEPgC%2FR71CHrs2CqdOTgTEN8tVPUkrkmtlOvHt7xiIJNRk1%2FPbvY74skKOIz33vP0gE%2FzDUrSgTHQnbe1idFtXSFT%2BksuB277tHcFrgl5%2FvUpbxIH5SbwULaTsdFnJm18Cnia3KHdPRf1oGjWXyurN6YsI%2BsoAK7OhHw2%2BJNVVZMpcDq7bDAjuSE4rYe%2BRXX81bFnWjqcCod%2BIdiBkYSKvRMLC%2B4cYGOqUB2p3jnV6fzK5NISNXjPkTx9mc%2BUhriW5WXCIBqbrOIGrI324uIPTmMpkLplo2BbQ07EHGB4hn%2FRlU5UB%2BFCL56%2F7%2FOFHfjFTRhR5OutANtXNXeso3ajvlZ97x4TRj0IXPvRLr%2FHh8zWQboHEoOYiOYT4mCmgxV97fG7EXyi9ca4AUFZnt%2BknTuXITN4e9wIf38HzemW2m0kXh7hZrP1jD%2F10ZoBwV&X-Amz-Signature=4c78f9301e0736cf2c861d6a4ac31172ee7fd2d887846a2a4ab0b6338ef1151b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ZVISPZ%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD6lBZphz6D%2BpwKuYzWCOq23QoJ3OuCNP0CnGci6ddwqgIgCIF%2F4kwK64881KvpwLESBnOs%2FHOSsNaAExGqYUWZlvYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPImFqx2VWMfiVdUyircAxqs%2Fzd3NeQQtelBWa9lOao%2BnFubq6tIhmNJQshYPlpm8X4cUn6z4clFmC%2Fd8euOgZfXek41X7ibezhaVmFZoevR7rttsaUR7jdx6NY%2F4TQ%2BtNVp%2F8MA0MQrwGkWyMgUo3tk%2Badej1u%2Fjgd4A4JMa1NpjmdpITrosj9GQ404KNKpi2ssAoPO8Jr05T%2BrjX6DQX2ZQFJY8oTVLaoTiwABdm39VBssgDIZuPKgy6SMSfYA5qXYJLMyFZIe0SqsFYcqk%2FVB3Fh9TQw1DoAfFaRuSmhf9VcCQFEeGhctwn83L%2B00uGlxDh3DlnP95gaOsXJmaN%2Bq%2BtfqtQO6wPnMjkQ9Ow5QMJ8ntDL6S0nuqDHjuNLJFYyQ7BHvRFWX%2BDxDu83wRdPOX%2FWq17EoveitPvlRhzW2kIzRJAmVvsRp1YwpMphpqasW%2FfYw%2BHv%2F9x%2BdzXH7r2bpWqs0ziTyvkAeQQAWhb9mNcaOugOTnjDkh16sg9Oi%2B631uDfUYIpJWaXYnnki3sTPNzm8JwER2mcVAGDCqpbZ2HwfI1qEYEtZ3XeRVYxITFgS9jbqpcmF%2BP8gpKSIS%2B8KgfQFV5wz61TrFUvwxmsN3bykIdyjvJxYCUyVgNXWklfwRmn1jCHNWk8KMJy%2F4cYGOqUBeZCXELLKH6cSrbQydxyLSjXnIVUZ%2B6Ao5aj0FI6AI%2F8AJQou8FN8EHHLoIzEYCpuS1xw3EdKcyBxcq8ePHrosbnszWoWNRFHTBBgIuwLV9E9EJZsxi4MB5ZsojTSF0qXQ8wMZ9tlZW7I6IicPebzfRl0Ab0VwyiiOPlRjXXduY1SWvJWgDzMJ8R4Qn9RvAWgBUyKmIp9zAZZr12fu697Qq%2F8D0Nc&X-Amz-Signature=bc36eedef7adfcf845e3725573700e8f047a7ba788b3b4ddb61587e76fdd71a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ZVISPZ%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD6lBZphz6D%2BpwKuYzWCOq23QoJ3OuCNP0CnGci6ddwqgIgCIF%2F4kwK64881KvpwLESBnOs%2FHOSsNaAExGqYUWZlvYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPImFqx2VWMfiVdUyircAxqs%2Fzd3NeQQtelBWa9lOao%2BnFubq6tIhmNJQshYPlpm8X4cUn6z4clFmC%2Fd8euOgZfXek41X7ibezhaVmFZoevR7rttsaUR7jdx6NY%2F4TQ%2BtNVp%2F8MA0MQrwGkWyMgUo3tk%2Badej1u%2Fjgd4A4JMa1NpjmdpITrosj9GQ404KNKpi2ssAoPO8Jr05T%2BrjX6DQX2ZQFJY8oTVLaoTiwABdm39VBssgDIZuPKgy6SMSfYA5qXYJLMyFZIe0SqsFYcqk%2FVB3Fh9TQw1DoAfFaRuSmhf9VcCQFEeGhctwn83L%2B00uGlxDh3DlnP95gaOsXJmaN%2Bq%2BtfqtQO6wPnMjkQ9Ow5QMJ8ntDL6S0nuqDHjuNLJFYyQ7BHvRFWX%2BDxDu83wRdPOX%2FWq17EoveitPvlRhzW2kIzRJAmVvsRp1YwpMphpqasW%2FfYw%2BHv%2F9x%2BdzXH7r2bpWqs0ziTyvkAeQQAWhb9mNcaOugOTnjDkh16sg9Oi%2B631uDfUYIpJWaXYnnki3sTPNzm8JwER2mcVAGDCqpbZ2HwfI1qEYEtZ3XeRVYxITFgS9jbqpcmF%2BP8gpKSIS%2B8KgfQFV5wz61TrFUvwxmsN3bykIdyjvJxYCUyVgNXWklfwRmn1jCHNWk8KMJy%2F4cYGOqUBeZCXELLKH6cSrbQydxyLSjXnIVUZ%2B6Ao5aj0FI6AI%2F8AJQou8FN8EHHLoIzEYCpuS1xw3EdKcyBxcq8ePHrosbnszWoWNRFHTBBgIuwLV9E9EJZsxi4MB5ZsojTSF0qXQ8wMZ9tlZW7I6IicPebzfRl0Ab0VwyiiOPlRjXXduY1SWvJWgDzMJ8R4Qn9RvAWgBUyKmIp9zAZZr12fu697Qq%2F8D0Nc&X-Amz-Signature=f72e58a2ba8262ea5e697c320486c976f5d417dcb2226a450c36f1760acaf8d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ZVISPZ%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD6lBZphz6D%2BpwKuYzWCOq23QoJ3OuCNP0CnGci6ddwqgIgCIF%2F4kwK64881KvpwLESBnOs%2FHOSsNaAExGqYUWZlvYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPImFqx2VWMfiVdUyircAxqs%2Fzd3NeQQtelBWa9lOao%2BnFubq6tIhmNJQshYPlpm8X4cUn6z4clFmC%2Fd8euOgZfXek41X7ibezhaVmFZoevR7rttsaUR7jdx6NY%2F4TQ%2BtNVp%2F8MA0MQrwGkWyMgUo3tk%2Badej1u%2Fjgd4A4JMa1NpjmdpITrosj9GQ404KNKpi2ssAoPO8Jr05T%2BrjX6DQX2ZQFJY8oTVLaoTiwABdm39VBssgDIZuPKgy6SMSfYA5qXYJLMyFZIe0SqsFYcqk%2FVB3Fh9TQw1DoAfFaRuSmhf9VcCQFEeGhctwn83L%2B00uGlxDh3DlnP95gaOsXJmaN%2Bq%2BtfqtQO6wPnMjkQ9Ow5QMJ8ntDL6S0nuqDHjuNLJFYyQ7BHvRFWX%2BDxDu83wRdPOX%2FWq17EoveitPvlRhzW2kIzRJAmVvsRp1YwpMphpqasW%2FfYw%2BHv%2F9x%2BdzXH7r2bpWqs0ziTyvkAeQQAWhb9mNcaOugOTnjDkh16sg9Oi%2B631uDfUYIpJWaXYnnki3sTPNzm8JwER2mcVAGDCqpbZ2HwfI1qEYEtZ3XeRVYxITFgS9jbqpcmF%2BP8gpKSIS%2B8KgfQFV5wz61TrFUvwxmsN3bykIdyjvJxYCUyVgNXWklfwRmn1jCHNWk8KMJy%2F4cYGOqUBeZCXELLKH6cSrbQydxyLSjXnIVUZ%2B6Ao5aj0FI6AI%2F8AJQou8FN8EHHLoIzEYCpuS1xw3EdKcyBxcq8ePHrosbnszWoWNRFHTBBgIuwLV9E9EJZsxi4MB5ZsojTSF0qXQ8wMZ9tlZW7I6IicPebzfRl0Ab0VwyiiOPlRjXXduY1SWvJWgDzMJ8R4Qn9RvAWgBUyKmIp9zAZZr12fu697Qq%2F8D0Nc&X-Amz-Signature=13c9b872f3df5c99de28a19e854fdcf11a551f6bad87c1036493421bed414c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ZVISPZ%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD6lBZphz6D%2BpwKuYzWCOq23QoJ3OuCNP0CnGci6ddwqgIgCIF%2F4kwK64881KvpwLESBnOs%2FHOSsNaAExGqYUWZlvYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPImFqx2VWMfiVdUyircAxqs%2Fzd3NeQQtelBWa9lOao%2BnFubq6tIhmNJQshYPlpm8X4cUn6z4clFmC%2Fd8euOgZfXek41X7ibezhaVmFZoevR7rttsaUR7jdx6NY%2F4TQ%2BtNVp%2F8MA0MQrwGkWyMgUo3tk%2Badej1u%2Fjgd4A4JMa1NpjmdpITrosj9GQ404KNKpi2ssAoPO8Jr05T%2BrjX6DQX2ZQFJY8oTVLaoTiwABdm39VBssgDIZuPKgy6SMSfYA5qXYJLMyFZIe0SqsFYcqk%2FVB3Fh9TQw1DoAfFaRuSmhf9VcCQFEeGhctwn83L%2B00uGlxDh3DlnP95gaOsXJmaN%2Bq%2BtfqtQO6wPnMjkQ9Ow5QMJ8ntDL6S0nuqDHjuNLJFYyQ7BHvRFWX%2BDxDu83wRdPOX%2FWq17EoveitPvlRhzW2kIzRJAmVvsRp1YwpMphpqasW%2FfYw%2BHv%2F9x%2BdzXH7r2bpWqs0ziTyvkAeQQAWhb9mNcaOugOTnjDkh16sg9Oi%2B631uDfUYIpJWaXYnnki3sTPNzm8JwER2mcVAGDCqpbZ2HwfI1qEYEtZ3XeRVYxITFgS9jbqpcmF%2BP8gpKSIS%2B8KgfQFV5wz61TrFUvwxmsN3bykIdyjvJxYCUyVgNXWklfwRmn1jCHNWk8KMJy%2F4cYGOqUBeZCXELLKH6cSrbQydxyLSjXnIVUZ%2B6Ao5aj0FI6AI%2F8AJQou8FN8EHHLoIzEYCpuS1xw3EdKcyBxcq8ePHrosbnszWoWNRFHTBBgIuwLV9E9EJZsxi4MB5ZsojTSF0qXQ8wMZ9tlZW7I6IicPebzfRl0Ab0VwyiiOPlRjXXduY1SWvJWgDzMJ8R4Qn9RvAWgBUyKmIp9zAZZr12fu697Qq%2F8D0Nc&X-Amz-Signature=43050e654471053c05e6beaaf3f92fd21eb18d6b43475fb32bd0a4d60c096901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ZVISPZ%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD6lBZphz6D%2BpwKuYzWCOq23QoJ3OuCNP0CnGci6ddwqgIgCIF%2F4kwK64881KvpwLESBnOs%2FHOSsNaAExGqYUWZlvYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPImFqx2VWMfiVdUyircAxqs%2Fzd3NeQQtelBWa9lOao%2BnFubq6tIhmNJQshYPlpm8X4cUn6z4clFmC%2Fd8euOgZfXek41X7ibezhaVmFZoevR7rttsaUR7jdx6NY%2F4TQ%2BtNVp%2F8MA0MQrwGkWyMgUo3tk%2Badej1u%2Fjgd4A4JMa1NpjmdpITrosj9GQ404KNKpi2ssAoPO8Jr05T%2BrjX6DQX2ZQFJY8oTVLaoTiwABdm39VBssgDIZuPKgy6SMSfYA5qXYJLMyFZIe0SqsFYcqk%2FVB3Fh9TQw1DoAfFaRuSmhf9VcCQFEeGhctwn83L%2B00uGlxDh3DlnP95gaOsXJmaN%2Bq%2BtfqtQO6wPnMjkQ9Ow5QMJ8ntDL6S0nuqDHjuNLJFYyQ7BHvRFWX%2BDxDu83wRdPOX%2FWq17EoveitPvlRhzW2kIzRJAmVvsRp1YwpMphpqasW%2FfYw%2BHv%2F9x%2BdzXH7r2bpWqs0ziTyvkAeQQAWhb9mNcaOugOTnjDkh16sg9Oi%2B631uDfUYIpJWaXYnnki3sTPNzm8JwER2mcVAGDCqpbZ2HwfI1qEYEtZ3XeRVYxITFgS9jbqpcmF%2BP8gpKSIS%2B8KgfQFV5wz61TrFUvwxmsN3bykIdyjvJxYCUyVgNXWklfwRmn1jCHNWk8KMJy%2F4cYGOqUBeZCXELLKH6cSrbQydxyLSjXnIVUZ%2B6Ao5aj0FI6AI%2F8AJQou8FN8EHHLoIzEYCpuS1xw3EdKcyBxcq8ePHrosbnszWoWNRFHTBBgIuwLV9E9EJZsxi4MB5ZsojTSF0qXQ8wMZ9tlZW7I6IicPebzfRl0Ab0VwyiiOPlRjXXduY1SWvJWgDzMJ8R4Qn9RvAWgBUyKmIp9zAZZr12fu697Qq%2F8D0Nc&X-Amz-Signature=4daf428c41f7f7f826b01f6a4343b0cda4d15c67710ce3eb6131a65b3739da5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ZVISPZ%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD6lBZphz6D%2BpwKuYzWCOq23QoJ3OuCNP0CnGci6ddwqgIgCIF%2F4kwK64881KvpwLESBnOs%2FHOSsNaAExGqYUWZlvYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPImFqx2VWMfiVdUyircAxqs%2Fzd3NeQQtelBWa9lOao%2BnFubq6tIhmNJQshYPlpm8X4cUn6z4clFmC%2Fd8euOgZfXek41X7ibezhaVmFZoevR7rttsaUR7jdx6NY%2F4TQ%2BtNVp%2F8MA0MQrwGkWyMgUo3tk%2Badej1u%2Fjgd4A4JMa1NpjmdpITrosj9GQ404KNKpi2ssAoPO8Jr05T%2BrjX6DQX2ZQFJY8oTVLaoTiwABdm39VBssgDIZuPKgy6SMSfYA5qXYJLMyFZIe0SqsFYcqk%2FVB3Fh9TQw1DoAfFaRuSmhf9VcCQFEeGhctwn83L%2B00uGlxDh3DlnP95gaOsXJmaN%2Bq%2BtfqtQO6wPnMjkQ9Ow5QMJ8ntDL6S0nuqDHjuNLJFYyQ7BHvRFWX%2BDxDu83wRdPOX%2FWq17EoveitPvlRhzW2kIzRJAmVvsRp1YwpMphpqasW%2FfYw%2BHv%2F9x%2BdzXH7r2bpWqs0ziTyvkAeQQAWhb9mNcaOugOTnjDkh16sg9Oi%2B631uDfUYIpJWaXYnnki3sTPNzm8JwER2mcVAGDCqpbZ2HwfI1qEYEtZ3XeRVYxITFgS9jbqpcmF%2BP8gpKSIS%2B8KgfQFV5wz61TrFUvwxmsN3bykIdyjvJxYCUyVgNXWklfwRmn1jCHNWk8KMJy%2F4cYGOqUBeZCXELLKH6cSrbQydxyLSjXnIVUZ%2B6Ao5aj0FI6AI%2F8AJQou8FN8EHHLoIzEYCpuS1xw3EdKcyBxcq8ePHrosbnszWoWNRFHTBBgIuwLV9E9EJZsxi4MB5ZsojTSF0qXQ8wMZ9tlZW7I6IicPebzfRl0Ab0VwyiiOPlRjXXduY1SWvJWgDzMJ8R4Qn9RvAWgBUyKmIp9zAZZr12fu697Qq%2F8D0Nc&X-Amz-Signature=68aff25fee1cefb965037af4595494a3b681a9761ad4f4c0bb2ffcc92b70df5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


