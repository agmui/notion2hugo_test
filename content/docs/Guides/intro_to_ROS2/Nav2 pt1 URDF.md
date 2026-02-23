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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GTKXMQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCAcDdN11QkSmo4qV9y5iSRe3UpVG%2BQnY1QcMzzY5U4YwIhAJnHaDdMYk%2BACMxMAuH5cnaiaa9q%2FkiV%2Bu2l0vJuM9KqKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FRV1Fy%2F1aBW5xJO8q3AP8CfhfWPHlVzod%2Fg0hzYt7oz6iRuNefduBdBjIiP8Y2tDtjsuV2LA8XfPW%2BMyAi3py8DUAgslUW2D3QwfMg7cmzryp4dMISP7ysTPt7rV3oz8QodSpIWar5Po0l%2FgAuPAwwVSapI71pwEswWVHmtSMBDVjZFyME4vJ0Lk3FzWjrrOoPn3ubCdZAcVWetv%2FkwONDjA%2FitITxneXzD3oVr2AhdHO6NiEaJWj9g7tLW0%2FJR3Jo4F7wVwvDRd8od%2BpTLS2vkVaIgHgmLA%2Fwj34FzbaJS%2B6tq%2BAy4b15EZ%2FzW%2FgNO4BNOKqwpfNKFMy3hgqeomdkcsLgfT9lEsV5mfCqnWfemdRtxaZMaDk5yBWnrGr3k3q1kaTPxTOFWAOs690j5RaK3Xeghw8cw1tHOhDBncGftMHbzpu0JllUN9jcIV2PkceVvN5SxNULK2ZrGMJd%2FlRDJuU9iJiT1MKIYRMP1rw6AHmysz0%2B%2Fs1HP2%2BAY1Oy5sgsafGF1R0BYS1xQ8668rVK2r2LWPVmKwP3dxzJWDk0tqVqFwX4kuojVwbUXZk57NIAIE%2Bsl6HEFDOU1e1FlD65l01mj2wAMQaScT%2Blb%2BJU43OF4kDZhT1DIOcoImLDCCoMMIW4sfvgV8HujDt6%2B7MBjqkAUbMQoGsaVPBGtg4pSFIf0pj4Tg2eF20ADLIqKimY97ULXLdWBwslE3I4cLqp40XorBP36yyF22yU4DUBTn3fFkuc200ILkIWlKyBQBEVFbweg9rBsV3OtbH0WadlWKY09IaI2P3Y0G75aX4DU%2FiRfETIE7iM3BTRcKCjpRVECcKJDJIdsJGRYust%2BNIokKwthQeVwLI3IOpviZgVA3%2FcdGTJfNB&X-Amz-Signature=9f1645dcb0c6e9256a0d66cc96132c3a12eab79a4d0ec0b649d7aaace777d62d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GTKXMQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCAcDdN11QkSmo4qV9y5iSRe3UpVG%2BQnY1QcMzzY5U4YwIhAJnHaDdMYk%2BACMxMAuH5cnaiaa9q%2FkiV%2Bu2l0vJuM9KqKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FRV1Fy%2F1aBW5xJO8q3AP8CfhfWPHlVzod%2Fg0hzYt7oz6iRuNefduBdBjIiP8Y2tDtjsuV2LA8XfPW%2BMyAi3py8DUAgslUW2D3QwfMg7cmzryp4dMISP7ysTPt7rV3oz8QodSpIWar5Po0l%2FgAuPAwwVSapI71pwEswWVHmtSMBDVjZFyME4vJ0Lk3FzWjrrOoPn3ubCdZAcVWetv%2FkwONDjA%2FitITxneXzD3oVr2AhdHO6NiEaJWj9g7tLW0%2FJR3Jo4F7wVwvDRd8od%2BpTLS2vkVaIgHgmLA%2Fwj34FzbaJS%2B6tq%2BAy4b15EZ%2FzW%2FgNO4BNOKqwpfNKFMy3hgqeomdkcsLgfT9lEsV5mfCqnWfemdRtxaZMaDk5yBWnrGr3k3q1kaTPxTOFWAOs690j5RaK3Xeghw8cw1tHOhDBncGftMHbzpu0JllUN9jcIV2PkceVvN5SxNULK2ZrGMJd%2FlRDJuU9iJiT1MKIYRMP1rw6AHmysz0%2B%2Fs1HP2%2BAY1Oy5sgsafGF1R0BYS1xQ8668rVK2r2LWPVmKwP3dxzJWDk0tqVqFwX4kuojVwbUXZk57NIAIE%2Bsl6HEFDOU1e1FlD65l01mj2wAMQaScT%2Blb%2BJU43OF4kDZhT1DIOcoImLDCCoMMIW4sfvgV8HujDt6%2B7MBjqkAUbMQoGsaVPBGtg4pSFIf0pj4Tg2eF20ADLIqKimY97ULXLdWBwslE3I4cLqp40XorBP36yyF22yU4DUBTn3fFkuc200ILkIWlKyBQBEVFbweg9rBsV3OtbH0WadlWKY09IaI2P3Y0G75aX4DU%2FiRfETIE7iM3BTRcKCjpRVECcKJDJIdsJGRYust%2BNIokKwthQeVwLI3IOpviZgVA3%2FcdGTJfNB&X-Amz-Signature=6b3989fcebb1d247ec90b7685caa6fdb62623843854fbbd3236de3fd3628f45f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GTKXMQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCAcDdN11QkSmo4qV9y5iSRe3UpVG%2BQnY1QcMzzY5U4YwIhAJnHaDdMYk%2BACMxMAuH5cnaiaa9q%2FkiV%2Bu2l0vJuM9KqKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FRV1Fy%2F1aBW5xJO8q3AP8CfhfWPHlVzod%2Fg0hzYt7oz6iRuNefduBdBjIiP8Y2tDtjsuV2LA8XfPW%2BMyAi3py8DUAgslUW2D3QwfMg7cmzryp4dMISP7ysTPt7rV3oz8QodSpIWar5Po0l%2FgAuPAwwVSapI71pwEswWVHmtSMBDVjZFyME4vJ0Lk3FzWjrrOoPn3ubCdZAcVWetv%2FkwONDjA%2FitITxneXzD3oVr2AhdHO6NiEaJWj9g7tLW0%2FJR3Jo4F7wVwvDRd8od%2BpTLS2vkVaIgHgmLA%2Fwj34FzbaJS%2B6tq%2BAy4b15EZ%2FzW%2FgNO4BNOKqwpfNKFMy3hgqeomdkcsLgfT9lEsV5mfCqnWfemdRtxaZMaDk5yBWnrGr3k3q1kaTPxTOFWAOs690j5RaK3Xeghw8cw1tHOhDBncGftMHbzpu0JllUN9jcIV2PkceVvN5SxNULK2ZrGMJd%2FlRDJuU9iJiT1MKIYRMP1rw6AHmysz0%2B%2Fs1HP2%2BAY1Oy5sgsafGF1R0BYS1xQ8668rVK2r2LWPVmKwP3dxzJWDk0tqVqFwX4kuojVwbUXZk57NIAIE%2Bsl6HEFDOU1e1FlD65l01mj2wAMQaScT%2Blb%2BJU43OF4kDZhT1DIOcoImLDCCoMMIW4sfvgV8HujDt6%2B7MBjqkAUbMQoGsaVPBGtg4pSFIf0pj4Tg2eF20ADLIqKimY97ULXLdWBwslE3I4cLqp40XorBP36yyF22yU4DUBTn3fFkuc200ILkIWlKyBQBEVFbweg9rBsV3OtbH0WadlWKY09IaI2P3Y0G75aX4DU%2FiRfETIE7iM3BTRcKCjpRVECcKJDJIdsJGRYust%2BNIokKwthQeVwLI3IOpviZgVA3%2FcdGTJfNB&X-Amz-Signature=af3d9ac2961aa05e20ca809469511a4fe68e740180c644d52f37b18d041a3b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GTKXMQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCAcDdN11QkSmo4qV9y5iSRe3UpVG%2BQnY1QcMzzY5U4YwIhAJnHaDdMYk%2BACMxMAuH5cnaiaa9q%2FkiV%2Bu2l0vJuM9KqKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FRV1Fy%2F1aBW5xJO8q3AP8CfhfWPHlVzod%2Fg0hzYt7oz6iRuNefduBdBjIiP8Y2tDtjsuV2LA8XfPW%2BMyAi3py8DUAgslUW2D3QwfMg7cmzryp4dMISP7ysTPt7rV3oz8QodSpIWar5Po0l%2FgAuPAwwVSapI71pwEswWVHmtSMBDVjZFyME4vJ0Lk3FzWjrrOoPn3ubCdZAcVWetv%2FkwONDjA%2FitITxneXzD3oVr2AhdHO6NiEaJWj9g7tLW0%2FJR3Jo4F7wVwvDRd8od%2BpTLS2vkVaIgHgmLA%2Fwj34FzbaJS%2B6tq%2BAy4b15EZ%2FzW%2FgNO4BNOKqwpfNKFMy3hgqeomdkcsLgfT9lEsV5mfCqnWfemdRtxaZMaDk5yBWnrGr3k3q1kaTPxTOFWAOs690j5RaK3Xeghw8cw1tHOhDBncGftMHbzpu0JllUN9jcIV2PkceVvN5SxNULK2ZrGMJd%2FlRDJuU9iJiT1MKIYRMP1rw6AHmysz0%2B%2Fs1HP2%2BAY1Oy5sgsafGF1R0BYS1xQ8668rVK2r2LWPVmKwP3dxzJWDk0tqVqFwX4kuojVwbUXZk57NIAIE%2Bsl6HEFDOU1e1FlD65l01mj2wAMQaScT%2Blb%2BJU43OF4kDZhT1DIOcoImLDCCoMMIW4sfvgV8HujDt6%2B7MBjqkAUbMQoGsaVPBGtg4pSFIf0pj4Tg2eF20ADLIqKimY97ULXLdWBwslE3I4cLqp40XorBP36yyF22yU4DUBTn3fFkuc200ILkIWlKyBQBEVFbweg9rBsV3OtbH0WadlWKY09IaI2P3Y0G75aX4DU%2FiRfETIE7iM3BTRcKCjpRVECcKJDJIdsJGRYust%2BNIokKwthQeVwLI3IOpviZgVA3%2FcdGTJfNB&X-Amz-Signature=d8714ea2b90a5630142c8920a43f6d27dc61db60fb34aa28b153fa3d9ac4e11e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GTKXMQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCAcDdN11QkSmo4qV9y5iSRe3UpVG%2BQnY1QcMzzY5U4YwIhAJnHaDdMYk%2BACMxMAuH5cnaiaa9q%2FkiV%2Bu2l0vJuM9KqKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FRV1Fy%2F1aBW5xJO8q3AP8CfhfWPHlVzod%2Fg0hzYt7oz6iRuNefduBdBjIiP8Y2tDtjsuV2LA8XfPW%2BMyAi3py8DUAgslUW2D3QwfMg7cmzryp4dMISP7ysTPt7rV3oz8QodSpIWar5Po0l%2FgAuPAwwVSapI71pwEswWVHmtSMBDVjZFyME4vJ0Lk3FzWjrrOoPn3ubCdZAcVWetv%2FkwONDjA%2FitITxneXzD3oVr2AhdHO6NiEaJWj9g7tLW0%2FJR3Jo4F7wVwvDRd8od%2BpTLS2vkVaIgHgmLA%2Fwj34FzbaJS%2B6tq%2BAy4b15EZ%2FzW%2FgNO4BNOKqwpfNKFMy3hgqeomdkcsLgfT9lEsV5mfCqnWfemdRtxaZMaDk5yBWnrGr3k3q1kaTPxTOFWAOs690j5RaK3Xeghw8cw1tHOhDBncGftMHbzpu0JllUN9jcIV2PkceVvN5SxNULK2ZrGMJd%2FlRDJuU9iJiT1MKIYRMP1rw6AHmysz0%2B%2Fs1HP2%2BAY1Oy5sgsafGF1R0BYS1xQ8668rVK2r2LWPVmKwP3dxzJWDk0tqVqFwX4kuojVwbUXZk57NIAIE%2Bsl6HEFDOU1e1FlD65l01mj2wAMQaScT%2Blb%2BJU43OF4kDZhT1DIOcoImLDCCoMMIW4sfvgV8HujDt6%2B7MBjqkAUbMQoGsaVPBGtg4pSFIf0pj4Tg2eF20ADLIqKimY97ULXLdWBwslE3I4cLqp40XorBP36yyF22yU4DUBTn3fFkuc200ILkIWlKyBQBEVFbweg9rBsV3OtbH0WadlWKY09IaI2P3Y0G75aX4DU%2FiRfETIE7iM3BTRcKCjpRVECcKJDJIdsJGRYust%2BNIokKwthQeVwLI3IOpviZgVA3%2FcdGTJfNB&X-Amz-Signature=72d4426c354b7b0ea8be4da063b2129df80bae1c0f009ef1942d1071d09ace92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GTKXMQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCAcDdN11QkSmo4qV9y5iSRe3UpVG%2BQnY1QcMzzY5U4YwIhAJnHaDdMYk%2BACMxMAuH5cnaiaa9q%2FkiV%2Bu2l0vJuM9KqKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FRV1Fy%2F1aBW5xJO8q3AP8CfhfWPHlVzod%2Fg0hzYt7oz6iRuNefduBdBjIiP8Y2tDtjsuV2LA8XfPW%2BMyAi3py8DUAgslUW2D3QwfMg7cmzryp4dMISP7ysTPt7rV3oz8QodSpIWar5Po0l%2FgAuPAwwVSapI71pwEswWVHmtSMBDVjZFyME4vJ0Lk3FzWjrrOoPn3ubCdZAcVWetv%2FkwONDjA%2FitITxneXzD3oVr2AhdHO6NiEaJWj9g7tLW0%2FJR3Jo4F7wVwvDRd8od%2BpTLS2vkVaIgHgmLA%2Fwj34FzbaJS%2B6tq%2BAy4b15EZ%2FzW%2FgNO4BNOKqwpfNKFMy3hgqeomdkcsLgfT9lEsV5mfCqnWfemdRtxaZMaDk5yBWnrGr3k3q1kaTPxTOFWAOs690j5RaK3Xeghw8cw1tHOhDBncGftMHbzpu0JllUN9jcIV2PkceVvN5SxNULK2ZrGMJd%2FlRDJuU9iJiT1MKIYRMP1rw6AHmysz0%2B%2Fs1HP2%2BAY1Oy5sgsafGF1R0BYS1xQ8668rVK2r2LWPVmKwP3dxzJWDk0tqVqFwX4kuojVwbUXZk57NIAIE%2Bsl6HEFDOU1e1FlD65l01mj2wAMQaScT%2Blb%2BJU43OF4kDZhT1DIOcoImLDCCoMMIW4sfvgV8HujDt6%2B7MBjqkAUbMQoGsaVPBGtg4pSFIf0pj4Tg2eF20ADLIqKimY97ULXLdWBwslE3I4cLqp40XorBP36yyF22yU4DUBTn3fFkuc200ILkIWlKyBQBEVFbweg9rBsV3OtbH0WadlWKY09IaI2P3Y0G75aX4DU%2FiRfETIE7iM3BTRcKCjpRVECcKJDJIdsJGRYust%2BNIokKwthQeVwLI3IOpviZgVA3%2FcdGTJfNB&X-Amz-Signature=1eba9ab20b65f6df6b66cc1a77832b3f4e9faa445dca58ec9fe7f9bb7ad06560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GTKXMQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCAcDdN11QkSmo4qV9y5iSRe3UpVG%2BQnY1QcMzzY5U4YwIhAJnHaDdMYk%2BACMxMAuH5cnaiaa9q%2FkiV%2Bu2l0vJuM9KqKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FRV1Fy%2F1aBW5xJO8q3AP8CfhfWPHlVzod%2Fg0hzYt7oz6iRuNefduBdBjIiP8Y2tDtjsuV2LA8XfPW%2BMyAi3py8DUAgslUW2D3QwfMg7cmzryp4dMISP7ysTPt7rV3oz8QodSpIWar5Po0l%2FgAuPAwwVSapI71pwEswWVHmtSMBDVjZFyME4vJ0Lk3FzWjrrOoPn3ubCdZAcVWetv%2FkwONDjA%2FitITxneXzD3oVr2AhdHO6NiEaJWj9g7tLW0%2FJR3Jo4F7wVwvDRd8od%2BpTLS2vkVaIgHgmLA%2Fwj34FzbaJS%2B6tq%2BAy4b15EZ%2FzW%2FgNO4BNOKqwpfNKFMy3hgqeomdkcsLgfT9lEsV5mfCqnWfemdRtxaZMaDk5yBWnrGr3k3q1kaTPxTOFWAOs690j5RaK3Xeghw8cw1tHOhDBncGftMHbzpu0JllUN9jcIV2PkceVvN5SxNULK2ZrGMJd%2FlRDJuU9iJiT1MKIYRMP1rw6AHmysz0%2B%2Fs1HP2%2BAY1Oy5sgsafGF1R0BYS1xQ8668rVK2r2LWPVmKwP3dxzJWDk0tqVqFwX4kuojVwbUXZk57NIAIE%2Bsl6HEFDOU1e1FlD65l01mj2wAMQaScT%2Blb%2BJU43OF4kDZhT1DIOcoImLDCCoMMIW4sfvgV8HujDt6%2B7MBjqkAUbMQoGsaVPBGtg4pSFIf0pj4Tg2eF20ADLIqKimY97ULXLdWBwslE3I4cLqp40XorBP36yyF22yU4DUBTn3fFkuc200ILkIWlKyBQBEVFbweg9rBsV3OtbH0WadlWKY09IaI2P3Y0G75aX4DU%2FiRfETIE7iM3BTRcKCjpRVECcKJDJIdsJGRYust%2BNIokKwthQeVwLI3IOpviZgVA3%2FcdGTJfNB&X-Amz-Signature=bbeca862659b8b64740a7f4fb9ef73589594fc1d1c671cb2354b5a26fb709b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GTKXMQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCAcDdN11QkSmo4qV9y5iSRe3UpVG%2BQnY1QcMzzY5U4YwIhAJnHaDdMYk%2BACMxMAuH5cnaiaa9q%2FkiV%2Bu2l0vJuM9KqKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FRV1Fy%2F1aBW5xJO8q3AP8CfhfWPHlVzod%2Fg0hzYt7oz6iRuNefduBdBjIiP8Y2tDtjsuV2LA8XfPW%2BMyAi3py8DUAgslUW2D3QwfMg7cmzryp4dMISP7ysTPt7rV3oz8QodSpIWar5Po0l%2FgAuPAwwVSapI71pwEswWVHmtSMBDVjZFyME4vJ0Lk3FzWjrrOoPn3ubCdZAcVWetv%2FkwONDjA%2FitITxneXzD3oVr2AhdHO6NiEaJWj9g7tLW0%2FJR3Jo4F7wVwvDRd8od%2BpTLS2vkVaIgHgmLA%2Fwj34FzbaJS%2B6tq%2BAy4b15EZ%2FzW%2FgNO4BNOKqwpfNKFMy3hgqeomdkcsLgfT9lEsV5mfCqnWfemdRtxaZMaDk5yBWnrGr3k3q1kaTPxTOFWAOs690j5RaK3Xeghw8cw1tHOhDBncGftMHbzpu0JllUN9jcIV2PkceVvN5SxNULK2ZrGMJd%2FlRDJuU9iJiT1MKIYRMP1rw6AHmysz0%2B%2Fs1HP2%2BAY1Oy5sgsafGF1R0BYS1xQ8668rVK2r2LWPVmKwP3dxzJWDk0tqVqFwX4kuojVwbUXZk57NIAIE%2Bsl6HEFDOU1e1FlD65l01mj2wAMQaScT%2Blb%2BJU43OF4kDZhT1DIOcoImLDCCoMMIW4sfvgV8HujDt6%2B7MBjqkAUbMQoGsaVPBGtg4pSFIf0pj4Tg2eF20ADLIqKimY97ULXLdWBwslE3I4cLqp40XorBP36yyF22yU4DUBTn3fFkuc200ILkIWlKyBQBEVFbweg9rBsV3OtbH0WadlWKY09IaI2P3Y0G75aX4DU%2FiRfETIE7iM3BTRcKCjpRVECcKJDJIdsJGRYust%2BNIokKwthQeVwLI3IOpviZgVA3%2FcdGTJfNB&X-Amz-Signature=de83b0244da1949f26edf13be9fa01408a59921825df6ee19d57b0d905ed6938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GTKXMQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCAcDdN11QkSmo4qV9y5iSRe3UpVG%2BQnY1QcMzzY5U4YwIhAJnHaDdMYk%2BACMxMAuH5cnaiaa9q%2FkiV%2Bu2l0vJuM9KqKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FRV1Fy%2F1aBW5xJO8q3AP8CfhfWPHlVzod%2Fg0hzYt7oz6iRuNefduBdBjIiP8Y2tDtjsuV2LA8XfPW%2BMyAi3py8DUAgslUW2D3QwfMg7cmzryp4dMISP7ysTPt7rV3oz8QodSpIWar5Po0l%2FgAuPAwwVSapI71pwEswWVHmtSMBDVjZFyME4vJ0Lk3FzWjrrOoPn3ubCdZAcVWetv%2FkwONDjA%2FitITxneXzD3oVr2AhdHO6NiEaJWj9g7tLW0%2FJR3Jo4F7wVwvDRd8od%2BpTLS2vkVaIgHgmLA%2Fwj34FzbaJS%2B6tq%2BAy4b15EZ%2FzW%2FgNO4BNOKqwpfNKFMy3hgqeomdkcsLgfT9lEsV5mfCqnWfemdRtxaZMaDk5yBWnrGr3k3q1kaTPxTOFWAOs690j5RaK3Xeghw8cw1tHOhDBncGftMHbzpu0JllUN9jcIV2PkceVvN5SxNULK2ZrGMJd%2FlRDJuU9iJiT1MKIYRMP1rw6AHmysz0%2B%2Fs1HP2%2BAY1Oy5sgsafGF1R0BYS1xQ8668rVK2r2LWPVmKwP3dxzJWDk0tqVqFwX4kuojVwbUXZk57NIAIE%2Bsl6HEFDOU1e1FlD65l01mj2wAMQaScT%2Blb%2BJU43OF4kDZhT1DIOcoImLDCCoMMIW4sfvgV8HujDt6%2B7MBjqkAUbMQoGsaVPBGtg4pSFIf0pj4Tg2eF20ADLIqKimY97ULXLdWBwslE3I4cLqp40XorBP36yyF22yU4DUBTn3fFkuc200ILkIWlKyBQBEVFbweg9rBsV3OtbH0WadlWKY09IaI2P3Y0G75aX4DU%2FiRfETIE7iM3BTRcKCjpRVECcKJDJIdsJGRYust%2BNIokKwthQeVwLI3IOpviZgVA3%2FcdGTJfNB&X-Amz-Signature=8efd1ddc7d26a62f8b28f0237675ed57c714d284d9c0d62a3304038906c190fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GTKXMQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCAcDdN11QkSmo4qV9y5iSRe3UpVG%2BQnY1QcMzzY5U4YwIhAJnHaDdMYk%2BACMxMAuH5cnaiaa9q%2FkiV%2Bu2l0vJuM9KqKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FRV1Fy%2F1aBW5xJO8q3AP8CfhfWPHlVzod%2Fg0hzYt7oz6iRuNefduBdBjIiP8Y2tDtjsuV2LA8XfPW%2BMyAi3py8DUAgslUW2D3QwfMg7cmzryp4dMISP7ysTPt7rV3oz8QodSpIWar5Po0l%2FgAuPAwwVSapI71pwEswWVHmtSMBDVjZFyME4vJ0Lk3FzWjrrOoPn3ubCdZAcVWetv%2FkwONDjA%2FitITxneXzD3oVr2AhdHO6NiEaJWj9g7tLW0%2FJR3Jo4F7wVwvDRd8od%2BpTLS2vkVaIgHgmLA%2Fwj34FzbaJS%2B6tq%2BAy4b15EZ%2FzW%2FgNO4BNOKqwpfNKFMy3hgqeomdkcsLgfT9lEsV5mfCqnWfemdRtxaZMaDk5yBWnrGr3k3q1kaTPxTOFWAOs690j5RaK3Xeghw8cw1tHOhDBncGftMHbzpu0JllUN9jcIV2PkceVvN5SxNULK2ZrGMJd%2FlRDJuU9iJiT1MKIYRMP1rw6AHmysz0%2B%2Fs1HP2%2BAY1Oy5sgsafGF1R0BYS1xQ8668rVK2r2LWPVmKwP3dxzJWDk0tqVqFwX4kuojVwbUXZk57NIAIE%2Bsl6HEFDOU1e1FlD65l01mj2wAMQaScT%2Blb%2BJU43OF4kDZhT1DIOcoImLDCCoMMIW4sfvgV8HujDt6%2B7MBjqkAUbMQoGsaVPBGtg4pSFIf0pj4Tg2eF20ADLIqKimY97ULXLdWBwslE3I4cLqp40XorBP36yyF22yU4DUBTn3fFkuc200ILkIWlKyBQBEVFbweg9rBsV3OtbH0WadlWKY09IaI2P3Y0G75aX4DU%2FiRfETIE7iM3BTRcKCjpRVECcKJDJIdsJGRYust%2BNIokKwthQeVwLI3IOpviZgVA3%2FcdGTJfNB&X-Amz-Signature=8acf8f67173646cbd9666704ff483493716ba8ef6cb9f2fb6ec5c91949eeb634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FI2PQYJ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDI6AXD9N3hFjDQ7O6oOswcdn4ntjA%2Bx%2B0fgMDrKMlxDQIgA5r%2Ba1bBH868wBcpOrBgSo%2FhPAxFAMqS%2F8JfodtsTzMqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtFplDov%2B8e6QIEzircA8wi%2BxIWiooeM8YeFNH6eawXrocbv3AkuZxnDU2Y1o%2BQ%2FU4Kd3raFrO8n20fCEsBdWP%2BkT05L2uLUbE3hgLb7%2B%2F476GVPkR2a%2FXAWwGveuWJeCJb%2B8vFTXW7xpTkfiGjJexpZ8p8n5VPMEMVFaQ7kXz9fRB9BWPFPk%2BpNUtwKEvKMMruBctUwvgiSLZw6p6N6FM9EwVsF%2FwsCPBkgNsZqxNBstcTrrdA0%2FrwtR6m1%2BLNpo%2FijzT0Gqe62khCJ3XI186MtbbxzE8RwbUbYHuhX9GgKP1LRc5s%2FHzdNLmcvjKp6YtQxES%2BWR3pPrMIFGuhy78diRnT7m2taQwmroxlgDWxSkjht4mnYOyVhkhuV2ba1K1XWIUQ2YkAfnzkbpeYI6hWJnv7UuMA0nifL7AVVV5oOJ8RBWJojEhIwHLUpQ8xFXiL9QaPuX9MneYminpYnRZ%2FNrUDSzCG0gCInTNUTqABei3HhrFkHfK0IFvjFGXasDnhUa8UWiff4s01PO9nnTupcRGp1o774921k6u%2Ftn69TTs%2F2G1%2FSnWduc33UodQ1gfDe%2BHoK%2FMopKJAPiP1M0hf2NFPVb8oRr%2FE630nO5yJEicmGMkWD1lEkhYRyZZrPKy47iG%2Fe%2Fhua7P%2BMInt7swGOqUBWCtu%2FhSmZ%2BRDH42drn2Qx4aXxY2VRgLi7RJE7UEFZQ3Md%2BkesZ9VZFyiPpW4j0QrIKm6y0x6%2BfqThBDqzwVnaxCSiMbv%2FQ1h%2B1x92RasE4wbzgPoB%2ByQcRBosYPzF2U9%2BxjzXIBBWPnAVDJzrqpUgoSPPQ56qQaRdRojCTZ3q9l5TM1Ndy%2FPXUr%2B5sX17AVpoEH2EiULpT%2FyWQaVrvcQZ8MQiSQA&X-Amz-Signature=95e88e59d6030b084a5fbbc9566bb66215e3e6efddd7d5e3bfe5ee2ead3c4881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT46WNBL%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD8gCw8YbZDi%2BAnJeY3BTa7v%2B3RtrAaZwKEqzygLbvJJwIgKjwu1JsR%2Bh3JuKT%2FZfyzJF4QBqzehuBhfeVU9cE87zYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxmdPkgEc58snURwircA8F3xBHOlZ3qokecqoeNBGrrNn3WLkyBIK5nd7C3PA1a8WkDEOKszEzHVFi9QE85aqfbX0ZEd362jP10OnVtH%2Fi%2BdenJjRa0ChOJvVLlkM%2FDxG1kLWxx8agTjAF2BuMRk9N2AU34d%2FPnAKNg2gwDmle4JhSAhxXvv5doWqnZJtN4Vk1961YDNr%2FdbnyCBBgfkJ2%2FwXlp4odZPI%2BMZ%2F2iOPJhUGzXxubWOAZjBF9esnHvwcsageDVp5dvcVAtLmR5QBxbdYBhp90HwiD6moiLlQhJSGh6KIV8S%2Bskqizjn3Rh0J%2FI1LBxW3wLhUkBdxCa%2BjUHR3uBNlOtcC1VCuFZXSVvsIifZu8Xp9jurLLzfgK7FG47jE67qhIAX4Oz%2BdLeKUwgyH6iXag8%2BTw4vGHZ%2Fybg5tt1FceoGKzIeOmMnmXSDjAbV4U32oAaxsQHlmpkAbQtOf%2FqUM%2BQrhNO5NpgKUcDI79HiEjsEKvoPGDPvfxACw5KLbIHBH9gDYS5WActMSy0hIjpD1Mz2C73WGqx0UDyJl1IG05%2BtqXuLAB4aofMqDo278PU03cEj3sPx2HhQwiOR2EM8iirTgCD2qIE1sRLCGYwU02CjRKS4LGe6PZsTNlSmlGMtVoYxcDIMI%2Fs7swGOqUB4G4bEsOYhK2bWkHINRu2Ltk9VnaTW0WevvdPJXJqPWgL8Z62RnO78oxatRstipaLshd0wVlGDwb55sVjtOKCZM7lYD02OSbyCP25yfqw2lMrqX5wecu3orIcBG0BIs3%2BHhO64IcJRmqI7%2FMWHg5n2qjHUfXJTOFPsGd9V64hZVO0K7hT3bOd3%2B9dlN1u%2Bw9NPx9ijY2bJgtQbEDyfC0zT8hkDjl%2F&X-Amz-Signature=f647ff18f4c05e70d8edfd7dd58643b00e1103972c6c0984a1be8a2d9ffedfdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTJQM37%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC2RhYWL8sDv1BU4ljKSj2uDT6bxDZ8sygJnphvekQxIQIhAMFTiC2PAhPMtv0KvUF1PENlH6HoAqqb9lCJT9nKZ0aiKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGYfIu%2BbJ80Deu14Uq3AOljgMAgFt0UlJu9QZnxHitUvHeb2NK2EsG5kijzPgBMLnjpWs22Tawyp%2BauzaEEg48x7OMIovqur%2BfpB0B1ndb0Oo7J2YPIvK0hVs0e3H6wsU9hI4E5AKbOUQBZ7cq0d1Dh6SljpJJcKiUQ3Z9odFBunLcLjeIf60cBSkcjItSW4PcSOnosbLsOQxGc4a94Cd4KQopVQ%2BOmt1eAPbZheEOscay7dP3GMOjWEG7xtH94XHxxqucHS1eEozWD78HPY%2FCdM36%2BXjpfXbaEoPxdRhJ6hNxnEYJeL7bS3LGFlSlLoKlpeOnDXpbvbqYN9Gf%2FlWqgvZ4Uqqb45DB7alIyS1N%2F6ZViI2aV1%2Fwc%2BTkrJSKeoAwLE8fuWcknyYha1hxld6fQ5RvgAPnfw5qo2BIApTMCiRO%2F6JfWUFGrDqNaWbRAJNXT0A%2BYeWScqKRcSON2Ic78Mj6%2BTjKwF%2FBy8%2FU0enwPCGF6Eqh%2B97oOpbDMVFBu5vQaZUmFPCusSxXhLhEZPuOZlEDDwAIVdlvJygTmKjpPCkzy9UID2D%2Fiob0F7RV6byxlKC%2BRb%2FpBXzkdatU7v7Ap2bsV0IT7f6kAmknbygW%2BVTTs%2Fh7wKG0A3XKzkYAzH%2FAyTx05AZxnJnNtTC17O7MBjqkAYiUl5xaw1tUSgZotmcvSg%2Bmo4ZlYuctLRwUuBK1qxUUUpzj0vEzQn%2BitwnW9%2FcIFZgrmrJc1clXMn4%2BzvtUq7NlsQndDnMVnZpsvrJqfNA7noJmd0gbuMw5Jnb%2F7tVH5OqQRevAfzcU%2BQy%2BNZy4oVPFdthxbD8DJLG9jJ5LfNwZDkkKufTRGIuQu25yagJukIrQ8xDzFCE2%2B32k4n0XpmqbRIVq&X-Amz-Signature=85d7dac0953dd2897c932efa1ad35dce134b73a29f022c37571c4e77df967316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GTKXMQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCAcDdN11QkSmo4qV9y5iSRe3UpVG%2BQnY1QcMzzY5U4YwIhAJnHaDdMYk%2BACMxMAuH5cnaiaa9q%2FkiV%2Bu2l0vJuM9KqKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FRV1Fy%2F1aBW5xJO8q3AP8CfhfWPHlVzod%2Fg0hzYt7oz6iRuNefduBdBjIiP8Y2tDtjsuV2LA8XfPW%2BMyAi3py8DUAgslUW2D3QwfMg7cmzryp4dMISP7ysTPt7rV3oz8QodSpIWar5Po0l%2FgAuPAwwVSapI71pwEswWVHmtSMBDVjZFyME4vJ0Lk3FzWjrrOoPn3ubCdZAcVWetv%2FkwONDjA%2FitITxneXzD3oVr2AhdHO6NiEaJWj9g7tLW0%2FJR3Jo4F7wVwvDRd8od%2BpTLS2vkVaIgHgmLA%2Fwj34FzbaJS%2B6tq%2BAy4b15EZ%2FzW%2FgNO4BNOKqwpfNKFMy3hgqeomdkcsLgfT9lEsV5mfCqnWfemdRtxaZMaDk5yBWnrGr3k3q1kaTPxTOFWAOs690j5RaK3Xeghw8cw1tHOhDBncGftMHbzpu0JllUN9jcIV2PkceVvN5SxNULK2ZrGMJd%2FlRDJuU9iJiT1MKIYRMP1rw6AHmysz0%2B%2Fs1HP2%2BAY1Oy5sgsafGF1R0BYS1xQ8668rVK2r2LWPVmKwP3dxzJWDk0tqVqFwX4kuojVwbUXZk57NIAIE%2Bsl6HEFDOU1e1FlD65l01mj2wAMQaScT%2Blb%2BJU43OF4kDZhT1DIOcoImLDCCoMMIW4sfvgV8HujDt6%2B7MBjqkAUbMQoGsaVPBGtg4pSFIf0pj4Tg2eF20ADLIqKimY97ULXLdWBwslE3I4cLqp40XorBP36yyF22yU4DUBTn3fFkuc200ILkIWlKyBQBEVFbweg9rBsV3OtbH0WadlWKY09IaI2P3Y0G75aX4DU%2FiRfETIE7iM3BTRcKCjpRVECcKJDJIdsJGRYust%2BNIokKwthQeVwLI3IOpviZgVA3%2FcdGTJfNB&X-Amz-Signature=001096cd056efe8c5bcf51372ab459c2edd0c24282f8f01081e4fe68681fe9b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BA5IOQ3%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIC8h6bMZQ%2BJSz%2FBO0c15V1hPL5KbNjgNz4qUuFkueor9AiEAvZxJ%2BFCHZw3FK%2Fq4U%2BLSgSedd9%2F9BKLfS%2FG8%2BfX80PAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJm0nLkjZ5QZTqy5uSrcA%2FJqD8MXNNtON3OzA01HcpCkcF6b4nhSXIHQb7wknP3kSxqnorAu%2BG7f%2BTbLXHLQCqS7yvlkjJRZ5Luo2RA8NOSqFj4w0oUtWzhJ0PCGtVOsm1aceRjaqBw88FxGYrXb%2BnP5NWljeuRI6fb69K4o1R7uBJrfVrKV3qRUXSdfaINXjLXdwkgtwDbM2o5PDi19zF5CATQDR8DzCMpTAJidQOEC%2Fnu80y%2FDEhEAP%2FtejmM219%2B4bNUJQSUogNrMJgKdRiP7uYPFLtjJ26F7etrqBDXSiKx7jnCI9UaC5d%2FcCJ5skqIx17ZVNhHoqCVp2%2BBvSokidstGqwVvzvnvWV36ZL57psPWtgXis8uUWC2xxvHFF2lViqrTY%2BDIXTfuDhrkkg5J%2FKiQ8c0s3BJu2GHuIOZphmP9KFtGGo99zWWU2R%2FJyETOw4wtBdFz5EMvLtiFwMBhPeB0NJsmoxxKL%2FaB5b8DC%2BgD09POMsw8q4GrAUI1jANAGph0UaCLz5GvdwA3%2BDqJmQk6aj9L%2FEqlatqj2WxTquZcFEMvO33qiyh1us3fCdoh28ECkdJre26EGYFssuDC4w0s5%2FvI218jFLNBBUqiE2HYGqk2pcuMTZMgB3ueMN%2BquX239VFx%2FNb9MLTs7swGOqUB7UvEqkXLo6EuSYhgCx%2BNa%2FgCuiW%2BTZ8wvViV%2Bui9B0vhpFdUEf9ndyEDk8vj6zVZBlKpV4URvu6tofcaRxQtEDyRhxs9y9VbC5DhLNf0pGIDxjBC5wnAXljIJ7vE1%2BElHLwUETutkl%2FH2n2qTL%2BscwGWrr0BvoQ7ZXgtLyVeFYFDSJuH3xSINu1tXhbWcjNqi5DubDEzLpXTiXZx%2BkbpWjCbJXYc&X-Amz-Signature=787be687186502163678d422e6066054e1e30cd148c6c140d01ce15abace7023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GTKXMQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCAcDdN11QkSmo4qV9y5iSRe3UpVG%2BQnY1QcMzzY5U4YwIhAJnHaDdMYk%2BACMxMAuH5cnaiaa9q%2FkiV%2Bu2l0vJuM9KqKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FRV1Fy%2F1aBW5xJO8q3AP8CfhfWPHlVzod%2Fg0hzYt7oz6iRuNefduBdBjIiP8Y2tDtjsuV2LA8XfPW%2BMyAi3py8DUAgslUW2D3QwfMg7cmzryp4dMISP7ysTPt7rV3oz8QodSpIWar5Po0l%2FgAuPAwwVSapI71pwEswWVHmtSMBDVjZFyME4vJ0Lk3FzWjrrOoPn3ubCdZAcVWetv%2FkwONDjA%2FitITxneXzD3oVr2AhdHO6NiEaJWj9g7tLW0%2FJR3Jo4F7wVwvDRd8od%2BpTLS2vkVaIgHgmLA%2Fwj34FzbaJS%2B6tq%2BAy4b15EZ%2FzW%2FgNO4BNOKqwpfNKFMy3hgqeomdkcsLgfT9lEsV5mfCqnWfemdRtxaZMaDk5yBWnrGr3k3q1kaTPxTOFWAOs690j5RaK3Xeghw8cw1tHOhDBncGftMHbzpu0JllUN9jcIV2PkceVvN5SxNULK2ZrGMJd%2FlRDJuU9iJiT1MKIYRMP1rw6AHmysz0%2B%2Fs1HP2%2BAY1Oy5sgsafGF1R0BYS1xQ8668rVK2r2LWPVmKwP3dxzJWDk0tqVqFwX4kuojVwbUXZk57NIAIE%2Bsl6HEFDOU1e1FlD65l01mj2wAMQaScT%2Blb%2BJU43OF4kDZhT1DIOcoImLDCCoMMIW4sfvgV8HujDt6%2B7MBjqkAUbMQoGsaVPBGtg4pSFIf0pj4Tg2eF20ADLIqKimY97ULXLdWBwslE3I4cLqp40XorBP36yyF22yU4DUBTn3fFkuc200ILkIWlKyBQBEVFbweg9rBsV3OtbH0WadlWKY09IaI2P3Y0G75aX4DU%2FiRfETIE7iM3BTRcKCjpRVECcKJDJIdsJGRYust%2BNIokKwthQeVwLI3IOpviZgVA3%2FcdGTJfNB&X-Amz-Signature=af87716898f8e798a5e7906d00853f9b9babffb75d1c48de991dcb1355c06dc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7QLTDSY%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIF5n4a5uYSA6lO%2BKP%2FxUwHACs%2BCsI11SP3%2FnoYu%2FebfnAiBoVkFM%2BAm9I2BykRV4ORTk6kN6nw8ebviz1P24hvfYXCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR%2FWfo4fmhO0E47wGKtwDW%2Fu8jkABMZwKkKkUMA%2BdKXyGhhb0FgqQqWMo1fxysYfa4e%2F0QyCMkCL5Q66tKYTFTThcF2kU1lBKKhY80koeoPMimzIFk7Db5XWAvcYX8v9nzXbIWYfUtIahqkSF0pTIWhI%2Fj%2FotM2rn1XRsd7j2vfZv77HvApvWLsqCPixwlcsCT1q8paZh3aaG%2Fh54oHuAC6ulYfhGZcA%2BT7E8fWuhqTUarCnrVIE%2B%2F41Q%2Bb%2BjoRZY3bQMDjtXbbEfuSCIaT0iYj0qfvm50L%2FnFudaQ4GLYJJvtrBH5Rs18LF9UynZdaCAxCMlzxxJ%2BK75tMie0dSUdPklWhgAv9ATeJ5LJi0ZtCPKUtjuu6d16Wr2vG7D3MvvsymEV4c3oVTuJb1L3YRMgsSUkqQ7%2FglVfuMM%2F4ZOgoT4iBZDoiZs1ew6RwV9zOVKRI4KaAeKziG751KC4NYpie%2BwPo2ySD5dUre4dFcnD947divInzxaGnYsdRhnwEBFHp8Bd0wjZIBQaqm2gN1tpX7XVMwVBNbtE%2FC8WS%2BWUVVpiNf5cd6TwKn4OMdPa6j1%2FapTiL5rVh6jEhtgyHRMOq3iCejzHMdNaVh5msDp0ndeazboEoiPPApIVldtC7ftieCld0XsqZHHKOIwp%2BzuzAY6pgGIe3TbC%2ByPdDIwxdyPNiDoQlc7rdXoEzPBAqahC9cTEgoOGDW%2F3NF4S%2F6WeUt0WSvlSdWiZ1WsA98Msu8R8V3w07XG0BFDdm7pALbN%2BhJVyReYM%2BshJNLy%2B2HelhBZqLcZWH9%2FAe2m14afRnyndsvBZEtZAZz%2BZYZ3fPF2kN0R1awBqWRmZBMDs%2FC2l8fjrUUCJlGsLbgnr%2BOtdx0X045XNfNz4q%2Bp&X-Amz-Signature=0d672dc1033b872361921bcf3e07fdfd0ef61a69736122e3241437dd8c0ec7dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GTKXMQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCAcDdN11QkSmo4qV9y5iSRe3UpVG%2BQnY1QcMzzY5U4YwIhAJnHaDdMYk%2BACMxMAuH5cnaiaa9q%2FkiV%2Bu2l0vJuM9KqKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FRV1Fy%2F1aBW5xJO8q3AP8CfhfWPHlVzod%2Fg0hzYt7oz6iRuNefduBdBjIiP8Y2tDtjsuV2LA8XfPW%2BMyAi3py8DUAgslUW2D3QwfMg7cmzryp4dMISP7ysTPt7rV3oz8QodSpIWar5Po0l%2FgAuPAwwVSapI71pwEswWVHmtSMBDVjZFyME4vJ0Lk3FzWjrrOoPn3ubCdZAcVWetv%2FkwONDjA%2FitITxneXzD3oVr2AhdHO6NiEaJWj9g7tLW0%2FJR3Jo4F7wVwvDRd8od%2BpTLS2vkVaIgHgmLA%2Fwj34FzbaJS%2B6tq%2BAy4b15EZ%2FzW%2FgNO4BNOKqwpfNKFMy3hgqeomdkcsLgfT9lEsV5mfCqnWfemdRtxaZMaDk5yBWnrGr3k3q1kaTPxTOFWAOs690j5RaK3Xeghw8cw1tHOhDBncGftMHbzpu0JllUN9jcIV2PkceVvN5SxNULK2ZrGMJd%2FlRDJuU9iJiT1MKIYRMP1rw6AHmysz0%2B%2Fs1HP2%2BAY1Oy5sgsafGF1R0BYS1xQ8668rVK2r2LWPVmKwP3dxzJWDk0tqVqFwX4kuojVwbUXZk57NIAIE%2Bsl6HEFDOU1e1FlD65l01mj2wAMQaScT%2Blb%2BJU43OF4kDZhT1DIOcoImLDCCoMMIW4sfvgV8HujDt6%2B7MBjqkAUbMQoGsaVPBGtg4pSFIf0pj4Tg2eF20ADLIqKimY97ULXLdWBwslE3I4cLqp40XorBP36yyF22yU4DUBTn3fFkuc200ILkIWlKyBQBEVFbweg9rBsV3OtbH0WadlWKY09IaI2P3Y0G75aX4DU%2FiRfETIE7iM3BTRcKCjpRVECcKJDJIdsJGRYust%2BNIokKwthQeVwLI3IOpviZgVA3%2FcdGTJfNB&X-Amz-Signature=ee79c0d94310c78055b429068bbb6b8c35e6272cd0c3594b733ad7a0df401d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CERQBD%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDqsqvhHjUkz1359M3AiUjvtm31ubTzrt7Wg3rqiekH6AiBmLCCAY4ejryBbYo9qp%2Fryt0ERYnUE0zO7yXrcho2V6CqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHOMaw6URL1wXDlMIKtwDJgkgyC4C97%2B7Z4wrI6Zu%2F%2F1bhHbYWv8OS%2BOMan7IZI5DeelroGQz3uGbppGFDgz4X%2B%2B9%2BwWJAQNnPmgSL3LO19RlaxSomqYPKu3pXyU7A1iuPehDpqXV1NKRFkPB%2FV0PQ6OLr2DOOuWfk6bXQ2KpV9Sx2sjE9Y9s1Bo%2BPXTSRPGvEShfYcfJEUr1XA1wxxzg3MSinL5x2Rf5Ei185gXxQZfLkt2O06tqgyGFFrGchSyR5MULyMhRvfV9w9PbXIU3n2Rn34%2BAXY7sqrHw%2FON1NvW0dJ6nnVv9kr021HNsFQTXTefFspMb4t5dp1X9KUbi55JSts%2FDDf8FNOr5TN2EFjJJ3QyXWsCQ6VcPUD9sIRtWOeu%2FdutcrASu2WS9aAMw0rU1uz5OuC%2BbIFeLjkZfXBXaXicso7cYiDS1zdhvbE4SPwivT3cRRvndg5qIHGn7N4DEidldJQr8IhRFOWIVJBEJLAheGFOo6e%2BWqaIxlQNS3m%2FpHq2Jje9OtpHNv4wLoH7EKStHZjtmWqVTICnnyjX%2FcQ85%2BvYg0NfWrlwVV5%2FXgWNpBMEeSnPNM%2FIiTi963%2FDTyPwmVOdeHIHSM3x4toPE%2Bi3akUmGsOE7j1YW5fXANlpBm2CL0ctizLQwkezuzAY6pgGXtPpHp%2Fz4bM7rpiQKa8q%2Bas2R%2FABpe7V5L%2BxF2nNlEwmeLfbs7sfdQu50UJZGzlyQowuMHRqTfGvuPaa7eKCelpI8qXB217kQsI3pBMD31L0sSsoXI7bHWCRNS%2B4ZKx8zlrfwRuqmNeYIdxWtINCH3cTmCSlsD7xY10bakJvs6bz4X2z%2Bm%2F4bCZQvMYEbssaGO%2Fca48rg7QEf7Juh7iFfoOdauq%2FM&X-Amz-Signature=7699f7252c5f7fbc16f22deceec9d4eef3215d5a039283ef41b5fc5961d97e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GTKXMQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCAcDdN11QkSmo4qV9y5iSRe3UpVG%2BQnY1QcMzzY5U4YwIhAJnHaDdMYk%2BACMxMAuH5cnaiaa9q%2FkiV%2Bu2l0vJuM9KqKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FRV1Fy%2F1aBW5xJO8q3AP8CfhfWPHlVzod%2Fg0hzYt7oz6iRuNefduBdBjIiP8Y2tDtjsuV2LA8XfPW%2BMyAi3py8DUAgslUW2D3QwfMg7cmzryp4dMISP7ysTPt7rV3oz8QodSpIWar5Po0l%2FgAuPAwwVSapI71pwEswWVHmtSMBDVjZFyME4vJ0Lk3FzWjrrOoPn3ubCdZAcVWetv%2FkwONDjA%2FitITxneXzD3oVr2AhdHO6NiEaJWj9g7tLW0%2FJR3Jo4F7wVwvDRd8od%2BpTLS2vkVaIgHgmLA%2Fwj34FzbaJS%2B6tq%2BAy4b15EZ%2FzW%2FgNO4BNOKqwpfNKFMy3hgqeomdkcsLgfT9lEsV5mfCqnWfemdRtxaZMaDk5yBWnrGr3k3q1kaTPxTOFWAOs690j5RaK3Xeghw8cw1tHOhDBncGftMHbzpu0JllUN9jcIV2PkceVvN5SxNULK2ZrGMJd%2FlRDJuU9iJiT1MKIYRMP1rw6AHmysz0%2B%2Fs1HP2%2BAY1Oy5sgsafGF1R0BYS1xQ8668rVK2r2LWPVmKwP3dxzJWDk0tqVqFwX4kuojVwbUXZk57NIAIE%2Bsl6HEFDOU1e1FlD65l01mj2wAMQaScT%2Blb%2BJU43OF4kDZhT1DIOcoImLDCCoMMIW4sfvgV8HujDt6%2B7MBjqkAUbMQoGsaVPBGtg4pSFIf0pj4Tg2eF20ADLIqKimY97ULXLdWBwslE3I4cLqp40XorBP36yyF22yU4DUBTn3fFkuc200ILkIWlKyBQBEVFbweg9rBsV3OtbH0WadlWKY09IaI2P3Y0G75aX4DU%2FiRfETIE7iM3BTRcKCjpRVECcKJDJIdsJGRYust%2BNIokKwthQeVwLI3IOpviZgVA3%2FcdGTJfNB&X-Amz-Signature=07563bcf49f04eaf1406d42d4d0ed2da45a6736602eacfe94649fda82f9e44f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOTSMRRN%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBOgzG6XdGaJLocXPcNNSp0HpoXv%2FZbZi67tEBGrL82BAiEAiXDn2784Dg%2Bi%2Fr9IuxWEkD48sG4G064A2B5wHkF6bhQqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8IFWRzSS2ocCJHmCrcA63eBH3aZY2YCwMEoHKodwNAZaFARSSPKX4U1vdTGHvVewrL8brvyYhxXmJWpbm6dfj5%2FjqABNWUKrjm8Rk7wS3Oei7HRZbH%2BANIEjlnXk8mLAE9YwG%2FBSXEfWDKnugMazKqTicRCv93xfsxTwbnNSP78g5chMkKDi1LPoOvn6pWmTscmfW3gQjBOSHY1MC%2FkY%2BVE%2F5iIOwfTGC3RLqxtdqrwS2%2Bkf4xGLAyeJY7YQF4YGA1hidTS4gdED55%2FRzfmMSom3VMP0tikDLTejcxyKHZxkFQQrWKE4M7VWM0X%2FcKkfvkI1TVanZcn5KW9Rz%2FgYXXdvPlaJ9lPYWQjGjGr7GJL3tM62PytB09LjJbXEkc%2BURNjjop23heLzUG6fRX%2BLLe17Dib%2FSAMSt%2BNon9XfjCawKOlVWC3vhcAr9CW3urF94fFj5FWtWq%2BCMl9P1DkDGuxp1Uu5ARnmXd5oD7UQtsSsvIciT88O0N%2B0y6Gs9p7B%2Buy%2B1NbaIAc8MqZWk1XCUV8iptVANylKeFsN5hXG8DUtusmSun9Fjqh7mrvlUK7X6FW0LDTMyWjC9oSgsPeseYNE556JKd6hXaxWTFBkfZ7WcD1tS5jT4vnV207Xh6J5lIxpdWD6rwwQffMNns7swGOqUBqGTbfPpFVSb%2FogjGwPovQqW150RES6oqpBdQObmtvkCXgE6qbz5UEvoAaxY2WR8QN0sZ%2BKVNfeH1mm6u1vIRpT1E%2FZGqOmNooLGJDdLWW9XC%2F%2BKDUCBUebnswyj5mGN%2BqG7q9A64P3fqVwAW4%2B3K%2FzUKkMCozabVsJzODRJDovSDM3mBL%2FZQaZZT3%2F2VN4IZ7allD6OS1zB5EHFRQjHIvNcQk3o0&X-Amz-Signature=55917c17f7f3249ead939a977c313ecd233d26b912fe89873e5c1f223b8830e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GTKXMQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCAcDdN11QkSmo4qV9y5iSRe3UpVG%2BQnY1QcMzzY5U4YwIhAJnHaDdMYk%2BACMxMAuH5cnaiaa9q%2FkiV%2Bu2l0vJuM9KqKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FRV1Fy%2F1aBW5xJO8q3AP8CfhfWPHlVzod%2Fg0hzYt7oz6iRuNefduBdBjIiP8Y2tDtjsuV2LA8XfPW%2BMyAi3py8DUAgslUW2D3QwfMg7cmzryp4dMISP7ysTPt7rV3oz8QodSpIWar5Po0l%2FgAuPAwwVSapI71pwEswWVHmtSMBDVjZFyME4vJ0Lk3FzWjrrOoPn3ubCdZAcVWetv%2FkwONDjA%2FitITxneXzD3oVr2AhdHO6NiEaJWj9g7tLW0%2FJR3Jo4F7wVwvDRd8od%2BpTLS2vkVaIgHgmLA%2Fwj34FzbaJS%2B6tq%2BAy4b15EZ%2FzW%2FgNO4BNOKqwpfNKFMy3hgqeomdkcsLgfT9lEsV5mfCqnWfemdRtxaZMaDk5yBWnrGr3k3q1kaTPxTOFWAOs690j5RaK3Xeghw8cw1tHOhDBncGftMHbzpu0JllUN9jcIV2PkceVvN5SxNULK2ZrGMJd%2FlRDJuU9iJiT1MKIYRMP1rw6AHmysz0%2B%2Fs1HP2%2BAY1Oy5sgsafGF1R0BYS1xQ8668rVK2r2LWPVmKwP3dxzJWDk0tqVqFwX4kuojVwbUXZk57NIAIE%2Bsl6HEFDOU1e1FlD65l01mj2wAMQaScT%2Blb%2BJU43OF4kDZhT1DIOcoImLDCCoMMIW4sfvgV8HujDt6%2B7MBjqkAUbMQoGsaVPBGtg4pSFIf0pj4Tg2eF20ADLIqKimY97ULXLdWBwslE3I4cLqp40XorBP36yyF22yU4DUBTn3fFkuc200ILkIWlKyBQBEVFbweg9rBsV3OtbH0WadlWKY09IaI2P3Y0G75aX4DU%2FiRfETIE7iM3BTRcKCjpRVECcKJDJIdsJGRYust%2BNIokKwthQeVwLI3IOpviZgVA3%2FcdGTJfNB&X-Amz-Signature=9270c210a8de86dbcd4e8186f23099143140c84b5eaab4e9d64427c5dd77e159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGUG4MQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDr2ybIlHS%2FJsOeq12y0EhA6mD4xh633ZOHjWkmaevY%2FwIhALBC3%2FcJqhZj%2BHGJHFVxYJDWYN7AayGIs9jv%2BJ8Q%2Fpw3KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsa9mDyASX7%2BNdQGEq3AM22OFaj%2BDpeaNmB0Z0rLhMKmMoJUy0uCiDMsRoz0u5I3l4x12TXA2%2FImd8iU%2FSmVk%2BmDDcaLynjmVqoRmirAtcehu%2FnCRmAsDkIHZVIopzB%2F2pKQIFFlvdJVucKaJeZReyJBrf9BYmqg%2FxjwApm6LOnolmXO8SXFOuhaHKTB00DXlJEHqqJOT5X9XaziyeEogJF2nmL2IzSlBZQ0pqXpdMWIS%2FPAJF3utUcTiVa0PObdXSuhr6ojS91I9efSfw77uXae69EevyXGEICVuHEmJB%2BuZQo4B4TZflaozD3oDRb9jMzamb%2F10%2FlkBdOaSBw1n4DpeNaJyssl%2BMW0Iqm4iO845pVxt1D%2BhBHOPF%2FTtgFBNghIz3Cd2sOMXrbvHjkZRrOhFz79vyM6tlYsrGYY5Xqg9Q7Bn%2BzFwZ0fndwSP9uyleTXoMNjPIIaaf33ehD%2FdYciLda0Op9MQnS%2FjF6rEhU77iHvroQHzUfDp8CLokHyJT1JrIl1RrgR0EdXi6jlujqrtRRQ1csCdVnlXYK0HQy2bFdK8b66GobBTsKRGfbr4%2BLfLM41tvjkuJQdKCUUDd87t2xy0LMwUCN6%2FtgbkwDWaoxcQcpKpvSS2Ty8%2BCxuhBmVRSSSnnMh%2FXmTCt7O7MBjqkAckaF6EQwpcKM4VZQIJPu%2BvbzWTat721IHu5EuiEZ5PzSptCMdgnXsAyC5DzmTWztgBxeFuQDVPqaxiCn6Crxib%2FEe3qB7TtsLNT%2BkUG%2BCf7IHjT4Rho41iMyCLnqxu3uUfeF4Fb0INGj%2FV%2FsG%2FBO7cLmSeiLxdlovNKC2iRrkH1c7QoeGEiSgMiaKQ%2FRFTgxIdhxRrNI3ABGy9og1xE%2B88R6lU1&X-Amz-Signature=e610f0c7568e76e0a65c45b8ae7fd4c24be5696f150fe382c38cda68ebe05d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QEDIC4U%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQC%2FS%2BysXrFK1ftgOpnElDcpMGrAqDFGWw48eLjZq9m5MAIgZmNJ6Bf4%2FssRsCPMN3hYzoFegZbREJjot7DfSAgh5o0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW8Lr%2FFmayxHMc%2FzSrcAxzcGw8XHAyHxavhCb1h%2BFZEnyHByLFyDerSEfTGOqXfxkvRXKyJsvmexrVyPn7vX6bYfeVnVUhGp9uf6OAkl6Q9MuBTl1C94qpiv9ZeQKi7%2FlYlIBWQc5WGr%2FylYUv4X%2FLHJUNf5FAPWv%2BZ6KLG1UtDOMff%2FjEvEgqu3WlvPoG3fJ1prQkzQ8%2BZCtmd1MZ9GNC96v%2FQtgSSbnZZUOnCH9LjeVLgldcC5SVTWkBZQEbiAxKe%2FQ5FN%2F6bBDX%2Bu6cl81Iwb7JciYWot8xSdnt5Ew3Yoa2TRV%2BOralgaUqlnqYZQUga%2FpqlZLRCMOvmoFwBAmlBKVIOnkqk%2BrUM%2BD4%2FRYlkmVeNTz5TXLKJAdMjJdf7Igkf5rTBIMZLh2jgVIsXOdocsTyKeU7gyresjjdfszX2rkNHoaSAo33WVv%2FN0qFisdLF%2BijzcRwToy4M8c5nchaT0ZwMr4g5CJ4cwAO5y0pudtO%2BoPbtCyj1t12ERtwavAIPjjeytznmeIphJN5b8PL51tqYM1SJKDwvnAq2mQvjQj9ut%2FrUApejTNzFD5%2FmR1buo1qSUYxRPdBD5ot1rrVmr6RPrEHzPX8uA2OyioVEIBJJYvv4LeXVkh7IYoGqRypSUcXgmV2dOPbJMODr7swGOqUBwqXdREf2XhbAk6X1%2F6wBArT5UobCDoSZ0KfX1j1t4HFJH%2B%2F9o9BZSkXCuX5ow2waZV048aaGUwVISc0FbRyTLQik%2FeRBb9RqOUJe8Qumgs4BLeg7UkqFVcrKnBdtcU%2FSGGBEFz03%2F2caNrGVOeHDkj4HJ2DtUtsY4eElYydv7oBtOMpcbHjCSF%2FPjkZxkhgr0sFvp%2BxWMOz0x8Er07JBA%2BjKzMkg&X-Amz-Signature=01de2a7f2a76d8c96eb98099012d53770374b5091fbd260b14d31e29b7167b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBWXJ2U%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDXpLw2mPKGBukGfK34jUiBEEERFQBPv1Ur8Q4ZmK7GAQIgKNq1SUqG0wVogcBa2uw7QR51mA9uUi9j0ashG16fqQMqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQXn2yeJ1PUtAfZdSrcA11OAYJEj74XhiUx2DPEXVDHS0BrTVsJXnJUUQqPwU2yhqZqTwzxdJ4iAA7WFkaV8%2Fhnzb2yoVPWad26Ohb7uk4vrOSrbfmttRlryUXb36QQ3h%2F6abxmrpPQCwYvsyOYISnZmgOxG7%2FqzkG6ZFMmhaRNYDMTZRxSoGkZKMqX2oq7tSBN%2FyQZkO%2FNykvCU5z4kHDf%2FFCD8alV%2BBmpwjQ5pbpjQeuGXYKKcZYPJV1got%2BFu97tlt7PZXDkrCgua8rmTLV2tECXHveI81qeTNHwPSz82ukqs1IRJRyNiuFaQMmZFlIoHIvL2HBEYiRzhBv7lLltTwYPp2fUD2Sh7o94erCQenqmZo8Wv9QLTVBIvs9XAYJPxNYJL0sbJ8wWG5J6HXH9ukUPicQ465FuXhUEFvgMEGj3VBzr5WXs2ivYt8S9KDKUUCFCBblJX8UvUtV1rkl759TDBX%2FbUBZdc5VBa0oBkyaPDNdjmV57mWnDq7ikVKTYYUYQ3bGG4kxJ9bwAJvcpIL8u3IybzTNe4JaSRQXyCFJwEyoSooH7Doy6xU8Go87CUikcV%2FgU8qQgL2qAYNluMGY%2BdNkkyodtWEXd4af%2BDtIOWwKvXVsVymYdbgS7fsJeT1Pc%2B23jNBOIMMDr7swGOqUBkj%2BRx4schz1ra0xBD%2Fo2FEaO6hRvCld7KM8VtWGXhhTgIzCYocR4DJeXg4ACL6SgURTzRLlKJofWA1WOr3GvouzEQ9P4AA7nA7C02q%2F9mLCF5KnYX04SwvD2KyICmsT9trMdaiE5SkCoZt3HSWWjIoHCrETv0gOI9oKJW91URnHIzSqlcnx140Kt0chbk6vR%2F7k7W59l2WgrITUWEvP8duziCYvi&X-Amz-Signature=8fefe99068932cc8cd2932bd5763a692fa035a3a2b062aa9511f826418f36be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GTKXMQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCAcDdN11QkSmo4qV9y5iSRe3UpVG%2BQnY1QcMzzY5U4YwIhAJnHaDdMYk%2BACMxMAuH5cnaiaa9q%2FkiV%2Bu2l0vJuM9KqKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FRV1Fy%2F1aBW5xJO8q3AP8CfhfWPHlVzod%2Fg0hzYt7oz6iRuNefduBdBjIiP8Y2tDtjsuV2LA8XfPW%2BMyAi3py8DUAgslUW2D3QwfMg7cmzryp4dMISP7ysTPt7rV3oz8QodSpIWar5Po0l%2FgAuPAwwVSapI71pwEswWVHmtSMBDVjZFyME4vJ0Lk3FzWjrrOoPn3ubCdZAcVWetv%2FkwONDjA%2FitITxneXzD3oVr2AhdHO6NiEaJWj9g7tLW0%2FJR3Jo4F7wVwvDRd8od%2BpTLS2vkVaIgHgmLA%2Fwj34FzbaJS%2B6tq%2BAy4b15EZ%2FzW%2FgNO4BNOKqwpfNKFMy3hgqeomdkcsLgfT9lEsV5mfCqnWfemdRtxaZMaDk5yBWnrGr3k3q1kaTPxTOFWAOs690j5RaK3Xeghw8cw1tHOhDBncGftMHbzpu0JllUN9jcIV2PkceVvN5SxNULK2ZrGMJd%2FlRDJuU9iJiT1MKIYRMP1rw6AHmysz0%2B%2Fs1HP2%2BAY1Oy5sgsafGF1R0BYS1xQ8668rVK2r2LWPVmKwP3dxzJWDk0tqVqFwX4kuojVwbUXZk57NIAIE%2Bsl6HEFDOU1e1FlD65l01mj2wAMQaScT%2Blb%2BJU43OF4kDZhT1DIOcoImLDCCoMMIW4sfvgV8HujDt6%2B7MBjqkAUbMQoGsaVPBGtg4pSFIf0pj4Tg2eF20ADLIqKimY97ULXLdWBwslE3I4cLqp40XorBP36yyF22yU4DUBTn3fFkuc200ILkIWlKyBQBEVFbweg9rBsV3OtbH0WadlWKY09IaI2P3Y0G75aX4DU%2FiRfETIE7iM3BTRcKCjpRVECcKJDJIdsJGRYust%2BNIokKwthQeVwLI3IOpviZgVA3%2FcdGTJfNB&X-Amz-Signature=091980b061a0031ee19a2a9f36520497a28659516733ce437620ced044f29fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GTKXMQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCAcDdN11QkSmo4qV9y5iSRe3UpVG%2BQnY1QcMzzY5U4YwIhAJnHaDdMYk%2BACMxMAuH5cnaiaa9q%2FkiV%2Bu2l0vJuM9KqKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FRV1Fy%2F1aBW5xJO8q3AP8CfhfWPHlVzod%2Fg0hzYt7oz6iRuNefduBdBjIiP8Y2tDtjsuV2LA8XfPW%2BMyAi3py8DUAgslUW2D3QwfMg7cmzryp4dMISP7ysTPt7rV3oz8QodSpIWar5Po0l%2FgAuPAwwVSapI71pwEswWVHmtSMBDVjZFyME4vJ0Lk3FzWjrrOoPn3ubCdZAcVWetv%2FkwONDjA%2FitITxneXzD3oVr2AhdHO6NiEaJWj9g7tLW0%2FJR3Jo4F7wVwvDRd8od%2BpTLS2vkVaIgHgmLA%2Fwj34FzbaJS%2B6tq%2BAy4b15EZ%2FzW%2FgNO4BNOKqwpfNKFMy3hgqeomdkcsLgfT9lEsV5mfCqnWfemdRtxaZMaDk5yBWnrGr3k3q1kaTPxTOFWAOs690j5RaK3Xeghw8cw1tHOhDBncGftMHbzpu0JllUN9jcIV2PkceVvN5SxNULK2ZrGMJd%2FlRDJuU9iJiT1MKIYRMP1rw6AHmysz0%2B%2Fs1HP2%2BAY1Oy5sgsafGF1R0BYS1xQ8668rVK2r2LWPVmKwP3dxzJWDk0tqVqFwX4kuojVwbUXZk57NIAIE%2Bsl6HEFDOU1e1FlD65l01mj2wAMQaScT%2Blb%2BJU43OF4kDZhT1DIOcoImLDCCoMMIW4sfvgV8HujDt6%2B7MBjqkAUbMQoGsaVPBGtg4pSFIf0pj4Tg2eF20ADLIqKimY97ULXLdWBwslE3I4cLqp40XorBP36yyF22yU4DUBTn3fFkuc200ILkIWlKyBQBEVFbweg9rBsV3OtbH0WadlWKY09IaI2P3Y0G75aX4DU%2FiRfETIE7iM3BTRcKCjpRVECcKJDJIdsJGRYust%2BNIokKwthQeVwLI3IOpviZgVA3%2FcdGTJfNB&X-Amz-Signature=76380732a1f958a5d369dc25ca440f6e5c90a3f84c76d185ed2cb10f497de12a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNTLSAI%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBbsDwiX80eIXLGle3YOkfu%2BC8IR69LrukbYP%2FPMC9d%2BAiEA7etwCgMrx15FT6wIk7pkYmVSKjU31FN%2Bh59%2BLTqdf5QqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhOFtvaAUkdJs7IiyrcA4HlzWd3n5r6ccpaRFEX4QTDzQqtzANH3ZH%2F5iynLeU5nE6dhaK6z0P%2FFecYLW20MIf%2FMekc9FPZWd%2FCjIlrTMM8pmfasGqzFRJLdZFxA9n5fI2ivoKcTeKYwIgHhJ2Aw10D6jS5iQSNGbJWyUos9ZkqJtCNb55uW9VeOIYLKjJFMDDI69wnSBS3lJqxYBiknA7WHheRUq2hA8LLZYYY6%2Bj%2BoMMtXTT9x3oKqXYe2MeUAtIiaw8sz%2FxeQAg1cR5qNkGZ1o%2Brv9XbQBJM9kOb5zyeSVgdQ6RFKgxT2H5VZbTIQ7ezNG%2Bv9p%2FgPQulU4kIszS%2BjFALLEeSo7ly%2BCe%2BAjgUi3VXF4KLyq8Ctdhlu%2FhXXKxIYJ2ULkx2UtVqD4KeMoBQuRc4ttUDIDM1LQ3uLxk0nQa2ua4HoTqafpcwsV4p83Bw%2FO789tepVmI1q%2BTysctjODM6tG%2F7wNzSXQpJYr9lzQKyhRQqTtV0x3P4Vk%2BqNfMQzun2DaxjxhVWhl2vOlzFYT2wuz8TEh9xvaq%2BU1IhVLmz6nr35GrA2u5M6xRXVN5aSXzP29mSLSjAb5TpQCsFSeUfjAEpltrPlvddnTiHv2j7xfN0jjDm7ckN7KuAfSZJSiYJBqHw4PY7MIrt7swGOqUBw%2F2kgZt0nOKREl%2B0PyUba39zP7AuwfO68WplKNhS1Olur6deSE1nSFLi8VSD7PPUEipkyEaoGkifk1ln38Lm38HNBDkdRyymUVI1n82LCboD4K1OjracZON19HCGNniQA5cRMG%2BpdGAL98clbtLTTf3TFPjySXwV73qz3Y%2FtH2EoCueboABUkHr%2FXChQUw6xgfs9byPoxciyj88krYJSE%2F858WSP&X-Amz-Signature=4a1d14cb65ba6b687f2de53a266d9edffd92856e1a5342e293545a49e2f2fbbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNTLSAI%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBbsDwiX80eIXLGle3YOkfu%2BC8IR69LrukbYP%2FPMC9d%2BAiEA7etwCgMrx15FT6wIk7pkYmVSKjU31FN%2Bh59%2BLTqdf5QqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhOFtvaAUkdJs7IiyrcA4HlzWd3n5r6ccpaRFEX4QTDzQqtzANH3ZH%2F5iynLeU5nE6dhaK6z0P%2FFecYLW20MIf%2FMekc9FPZWd%2FCjIlrTMM8pmfasGqzFRJLdZFxA9n5fI2ivoKcTeKYwIgHhJ2Aw10D6jS5iQSNGbJWyUos9ZkqJtCNb55uW9VeOIYLKjJFMDDI69wnSBS3lJqxYBiknA7WHheRUq2hA8LLZYYY6%2Bj%2BoMMtXTT9x3oKqXYe2MeUAtIiaw8sz%2FxeQAg1cR5qNkGZ1o%2Brv9XbQBJM9kOb5zyeSVgdQ6RFKgxT2H5VZbTIQ7ezNG%2Bv9p%2FgPQulU4kIszS%2BjFALLEeSo7ly%2BCe%2BAjgUi3VXF4KLyq8Ctdhlu%2FhXXKxIYJ2ULkx2UtVqD4KeMoBQuRc4ttUDIDM1LQ3uLxk0nQa2ua4HoTqafpcwsV4p83Bw%2FO789tepVmI1q%2BTysctjODM6tG%2F7wNzSXQpJYr9lzQKyhRQqTtV0x3P4Vk%2BqNfMQzun2DaxjxhVWhl2vOlzFYT2wuz8TEh9xvaq%2BU1IhVLmz6nr35GrA2u5M6xRXVN5aSXzP29mSLSjAb5TpQCsFSeUfjAEpltrPlvddnTiHv2j7xfN0jjDm7ckN7KuAfSZJSiYJBqHw4PY7MIrt7swGOqUBw%2F2kgZt0nOKREl%2B0PyUba39zP7AuwfO68WplKNhS1Olur6deSE1nSFLi8VSD7PPUEipkyEaoGkifk1ln38Lm38HNBDkdRyymUVI1n82LCboD4K1OjracZON19HCGNniQA5cRMG%2BpdGAL98clbtLTTf3TFPjySXwV73qz3Y%2FtH2EoCueboABUkHr%2FXChQUw6xgfs9byPoxciyj88krYJSE%2F858WSP&X-Amz-Signature=298811da07e32c2b20b9522cf25b1e252f81f293bf4d06640dda79e39e3971e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNTLSAI%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBbsDwiX80eIXLGle3YOkfu%2BC8IR69LrukbYP%2FPMC9d%2BAiEA7etwCgMrx15FT6wIk7pkYmVSKjU31FN%2Bh59%2BLTqdf5QqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhOFtvaAUkdJs7IiyrcA4HlzWd3n5r6ccpaRFEX4QTDzQqtzANH3ZH%2F5iynLeU5nE6dhaK6z0P%2FFecYLW20MIf%2FMekc9FPZWd%2FCjIlrTMM8pmfasGqzFRJLdZFxA9n5fI2ivoKcTeKYwIgHhJ2Aw10D6jS5iQSNGbJWyUos9ZkqJtCNb55uW9VeOIYLKjJFMDDI69wnSBS3lJqxYBiknA7WHheRUq2hA8LLZYYY6%2Bj%2BoMMtXTT9x3oKqXYe2MeUAtIiaw8sz%2FxeQAg1cR5qNkGZ1o%2Brv9XbQBJM9kOb5zyeSVgdQ6RFKgxT2H5VZbTIQ7ezNG%2Bv9p%2FgPQulU4kIszS%2BjFALLEeSo7ly%2BCe%2BAjgUi3VXF4KLyq8Ctdhlu%2FhXXKxIYJ2ULkx2UtVqD4KeMoBQuRc4ttUDIDM1LQ3uLxk0nQa2ua4HoTqafpcwsV4p83Bw%2FO789tepVmI1q%2BTysctjODM6tG%2F7wNzSXQpJYr9lzQKyhRQqTtV0x3P4Vk%2BqNfMQzun2DaxjxhVWhl2vOlzFYT2wuz8TEh9xvaq%2BU1IhVLmz6nr35GrA2u5M6xRXVN5aSXzP29mSLSjAb5TpQCsFSeUfjAEpltrPlvddnTiHv2j7xfN0jjDm7ckN7KuAfSZJSiYJBqHw4PY7MIrt7swGOqUBw%2F2kgZt0nOKREl%2B0PyUba39zP7AuwfO68WplKNhS1Olur6deSE1nSFLi8VSD7PPUEipkyEaoGkifk1ln38Lm38HNBDkdRyymUVI1n82LCboD4K1OjracZON19HCGNniQA5cRMG%2BpdGAL98clbtLTTf3TFPjySXwV73qz3Y%2FtH2EoCueboABUkHr%2FXChQUw6xgfs9byPoxciyj88krYJSE%2F858WSP&X-Amz-Signature=e7d9cb6dcca4b68d098b891245450ee4f8427f8a9b29bbdf14db3a4fecc4474b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNTLSAI%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBbsDwiX80eIXLGle3YOkfu%2BC8IR69LrukbYP%2FPMC9d%2BAiEA7etwCgMrx15FT6wIk7pkYmVSKjU31FN%2Bh59%2BLTqdf5QqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhOFtvaAUkdJs7IiyrcA4HlzWd3n5r6ccpaRFEX4QTDzQqtzANH3ZH%2F5iynLeU5nE6dhaK6z0P%2FFecYLW20MIf%2FMekc9FPZWd%2FCjIlrTMM8pmfasGqzFRJLdZFxA9n5fI2ivoKcTeKYwIgHhJ2Aw10D6jS5iQSNGbJWyUos9ZkqJtCNb55uW9VeOIYLKjJFMDDI69wnSBS3lJqxYBiknA7WHheRUq2hA8LLZYYY6%2Bj%2BoMMtXTT9x3oKqXYe2MeUAtIiaw8sz%2FxeQAg1cR5qNkGZ1o%2Brv9XbQBJM9kOb5zyeSVgdQ6RFKgxT2H5VZbTIQ7ezNG%2Bv9p%2FgPQulU4kIszS%2BjFALLEeSo7ly%2BCe%2BAjgUi3VXF4KLyq8Ctdhlu%2FhXXKxIYJ2ULkx2UtVqD4KeMoBQuRc4ttUDIDM1LQ3uLxk0nQa2ua4HoTqafpcwsV4p83Bw%2FO789tepVmI1q%2BTysctjODM6tG%2F7wNzSXQpJYr9lzQKyhRQqTtV0x3P4Vk%2BqNfMQzun2DaxjxhVWhl2vOlzFYT2wuz8TEh9xvaq%2BU1IhVLmz6nr35GrA2u5M6xRXVN5aSXzP29mSLSjAb5TpQCsFSeUfjAEpltrPlvddnTiHv2j7xfN0jjDm7ckN7KuAfSZJSiYJBqHw4PY7MIrt7swGOqUBw%2F2kgZt0nOKREl%2B0PyUba39zP7AuwfO68WplKNhS1Olur6deSE1nSFLi8VSD7PPUEipkyEaoGkifk1ln38Lm38HNBDkdRyymUVI1n82LCboD4K1OjracZON19HCGNniQA5cRMG%2BpdGAL98clbtLTTf3TFPjySXwV73qz3Y%2FtH2EoCueboABUkHr%2FXChQUw6xgfs9byPoxciyj88krYJSE%2F858WSP&X-Amz-Signature=8943c0ea7fbcd60a738e53a1565551242814ed0e9828a022221264a5e15904f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHD3VLNK%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDcO%2F2KA3ZmVYdzQNrdruRdVheE8KhRc%2BpqLbbnwme4JAIgTCNaSFOubEaSvsgfgHAbbJkMp6K0j2aJARIJBjGO5Y4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKAZSetB5kjo5xGKSrcA6UzsjFKY%2BdFCiCgFnJdpUNOfdaP3t%2FsK90J6jvRtoegOpt3%2FW7DMiJASJgUw7dAwjuLSoEIGlhh9WAqX7g2IUEGhjo0AwwiJncMB1ixWJdCzJY4H0Nnm%2BIpKmoDmcTnhKeSA%2Ftbd7OMJMf3M8T51CNS7PlJCZJXJMBfKs8z1x5QAwzGVzFmcegcUWANp0H9F7zqCF8skMr8oBNfLygmtUF5IL%2BLDWBTJNG4WZjgSbyqMTw049e9%2BJI5Rb4%2BZBYMlfeXS9rQvjU7bsDWBsMxssu5QpjAprOf1a5nlaezEd72nCz9us2bQBEPeXp%2FkK4RjSExcBqqiM2ib9%2FNm6KZGW8Ibhecia0D6po%2B2l44AsD54LGVpm242cZCC0Y%2F6inMpTnfezteaH23u0esh33XVQa%2FmZMc4WQjV3kq0urs17voTVNuxwFpTcorfFx%2Fwb2%2FsOprS402u6M%2FWbEGRypk%2FB46JDiYbgqFLbYS89b1Sk0yI64ByV%2FBe2VySORybEiZNqi9ajTSvV%2BoCeoAY8qAlPUlE3xQJMPF7aUCwOvZhSK2JKCCAfkiDp7TbrcVbCO0pgKA1sFImQkaNEd702LuqOWgyUZiAdWEjbUcj5jjS8tEqji70UhF1muCBGjUMJvs7swGOqUBLCPKo2V492mBCPndC4qBNBI3%2FkprYu93GKhMJVwX0XnLMo%2FIpI%2BauWiu%2Fx2GZfgx%2B1IXLBihYuitwX0GGylhN6O0borBYP34OoyAxopfS76jKJ8jRFvViW2sN1bO1tkzk%2FCPyoUplDrDnnTiqEmBEKjDIRbmLY48nVCsJ3T9SGTKHyC7vs4PDXoQ6ohDAaEbfB2oO8YU9hAyLUe2HCIrkcfLmZhQ&X-Amz-Signature=f4df640cc68144d18b20fe145067d45f5943c85a5b448ba5002516abdfd4190c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNTLSAI%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBbsDwiX80eIXLGle3YOkfu%2BC8IR69LrukbYP%2FPMC9d%2BAiEA7etwCgMrx15FT6wIk7pkYmVSKjU31FN%2Bh59%2BLTqdf5QqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhOFtvaAUkdJs7IiyrcA4HlzWd3n5r6ccpaRFEX4QTDzQqtzANH3ZH%2F5iynLeU5nE6dhaK6z0P%2FFecYLW20MIf%2FMekc9FPZWd%2FCjIlrTMM8pmfasGqzFRJLdZFxA9n5fI2ivoKcTeKYwIgHhJ2Aw10D6jS5iQSNGbJWyUos9ZkqJtCNb55uW9VeOIYLKjJFMDDI69wnSBS3lJqxYBiknA7WHheRUq2hA8LLZYYY6%2Bj%2BoMMtXTT9x3oKqXYe2MeUAtIiaw8sz%2FxeQAg1cR5qNkGZ1o%2Brv9XbQBJM9kOb5zyeSVgdQ6RFKgxT2H5VZbTIQ7ezNG%2Bv9p%2FgPQulU4kIszS%2BjFALLEeSo7ly%2BCe%2BAjgUi3VXF4KLyq8Ctdhlu%2FhXXKxIYJ2ULkx2UtVqD4KeMoBQuRc4ttUDIDM1LQ3uLxk0nQa2ua4HoTqafpcwsV4p83Bw%2FO789tepVmI1q%2BTysctjODM6tG%2F7wNzSXQpJYr9lzQKyhRQqTtV0x3P4Vk%2BqNfMQzun2DaxjxhVWhl2vOlzFYT2wuz8TEh9xvaq%2BU1IhVLmz6nr35GrA2u5M6xRXVN5aSXzP29mSLSjAb5TpQCsFSeUfjAEpltrPlvddnTiHv2j7xfN0jjDm7ckN7KuAfSZJSiYJBqHw4PY7MIrt7swGOqUBw%2F2kgZt0nOKREl%2B0PyUba39zP7AuwfO68WplKNhS1Olur6deSE1nSFLi8VSD7PPUEipkyEaoGkifk1ln38Lm38HNBDkdRyymUVI1n82LCboD4K1OjracZON19HCGNniQA5cRMG%2BpdGAL98clbtLTTf3TFPjySXwV73qz3Y%2FtH2EoCueboABUkHr%2FXChQUw6xgfs9byPoxciyj88krYJSE%2F858WSP&X-Amz-Signature=e08cacc54be62fadfc3b4cb559579215b8b9ee10f31bdbff12949db6297a94eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNTLSAI%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBbsDwiX80eIXLGle3YOkfu%2BC8IR69LrukbYP%2FPMC9d%2BAiEA7etwCgMrx15FT6wIk7pkYmVSKjU31FN%2Bh59%2BLTqdf5QqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhOFtvaAUkdJs7IiyrcA4HlzWd3n5r6ccpaRFEX4QTDzQqtzANH3ZH%2F5iynLeU5nE6dhaK6z0P%2FFecYLW20MIf%2FMekc9FPZWd%2FCjIlrTMM8pmfasGqzFRJLdZFxA9n5fI2ivoKcTeKYwIgHhJ2Aw10D6jS5iQSNGbJWyUos9ZkqJtCNb55uW9VeOIYLKjJFMDDI69wnSBS3lJqxYBiknA7WHheRUq2hA8LLZYYY6%2Bj%2BoMMtXTT9x3oKqXYe2MeUAtIiaw8sz%2FxeQAg1cR5qNkGZ1o%2Brv9XbQBJM9kOb5zyeSVgdQ6RFKgxT2H5VZbTIQ7ezNG%2Bv9p%2FgPQulU4kIszS%2BjFALLEeSo7ly%2BCe%2BAjgUi3VXF4KLyq8Ctdhlu%2FhXXKxIYJ2ULkx2UtVqD4KeMoBQuRc4ttUDIDM1LQ3uLxk0nQa2ua4HoTqafpcwsV4p83Bw%2FO789tepVmI1q%2BTysctjODM6tG%2F7wNzSXQpJYr9lzQKyhRQqTtV0x3P4Vk%2BqNfMQzun2DaxjxhVWhl2vOlzFYT2wuz8TEh9xvaq%2BU1IhVLmz6nr35GrA2u5M6xRXVN5aSXzP29mSLSjAb5TpQCsFSeUfjAEpltrPlvddnTiHv2j7xfN0jjDm7ckN7KuAfSZJSiYJBqHw4PY7MIrt7swGOqUBw%2F2kgZt0nOKREl%2B0PyUba39zP7AuwfO68WplKNhS1Olur6deSE1nSFLi8VSD7PPUEipkyEaoGkifk1ln38Lm38HNBDkdRyymUVI1n82LCboD4K1OjracZON19HCGNniQA5cRMG%2BpdGAL98clbtLTTf3TFPjySXwV73qz3Y%2FtH2EoCueboABUkHr%2FXChQUw6xgfs9byPoxciyj88krYJSE%2F858WSP&X-Amz-Signature=fda7a1db2c30dcfad98b546ecd9f8347018b8e20911cd9aa9e4b0e1888712631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNTLSAI%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBbsDwiX80eIXLGle3YOkfu%2BC8IR69LrukbYP%2FPMC9d%2BAiEA7etwCgMrx15FT6wIk7pkYmVSKjU31FN%2Bh59%2BLTqdf5QqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhOFtvaAUkdJs7IiyrcA4HlzWd3n5r6ccpaRFEX4QTDzQqtzANH3ZH%2F5iynLeU5nE6dhaK6z0P%2FFecYLW20MIf%2FMekc9FPZWd%2FCjIlrTMM8pmfasGqzFRJLdZFxA9n5fI2ivoKcTeKYwIgHhJ2Aw10D6jS5iQSNGbJWyUos9ZkqJtCNb55uW9VeOIYLKjJFMDDI69wnSBS3lJqxYBiknA7WHheRUq2hA8LLZYYY6%2Bj%2BoMMtXTT9x3oKqXYe2MeUAtIiaw8sz%2FxeQAg1cR5qNkGZ1o%2Brv9XbQBJM9kOb5zyeSVgdQ6RFKgxT2H5VZbTIQ7ezNG%2Bv9p%2FgPQulU4kIszS%2BjFALLEeSo7ly%2BCe%2BAjgUi3VXF4KLyq8Ctdhlu%2FhXXKxIYJ2ULkx2UtVqD4KeMoBQuRc4ttUDIDM1LQ3uLxk0nQa2ua4HoTqafpcwsV4p83Bw%2FO789tepVmI1q%2BTysctjODM6tG%2F7wNzSXQpJYr9lzQKyhRQqTtV0x3P4Vk%2BqNfMQzun2DaxjxhVWhl2vOlzFYT2wuz8TEh9xvaq%2BU1IhVLmz6nr35GrA2u5M6xRXVN5aSXzP29mSLSjAb5TpQCsFSeUfjAEpltrPlvddnTiHv2j7xfN0jjDm7ckN7KuAfSZJSiYJBqHw4PY7MIrt7swGOqUBw%2F2kgZt0nOKREl%2B0PyUba39zP7AuwfO68WplKNhS1Olur6deSE1nSFLi8VSD7PPUEipkyEaoGkifk1ln38Lm38HNBDkdRyymUVI1n82LCboD4K1OjracZON19HCGNniQA5cRMG%2BpdGAL98clbtLTTf3TFPjySXwV73qz3Y%2FtH2EoCueboABUkHr%2FXChQUw6xgfs9byPoxciyj88krYJSE%2F858WSP&X-Amz-Signature=3e55c70324e7c6245e170533e60c17bb2664956df82e399b6c0c70347925f81d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNTLSAI%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBbsDwiX80eIXLGle3YOkfu%2BC8IR69LrukbYP%2FPMC9d%2BAiEA7etwCgMrx15FT6wIk7pkYmVSKjU31FN%2Bh59%2BLTqdf5QqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhOFtvaAUkdJs7IiyrcA4HlzWd3n5r6ccpaRFEX4QTDzQqtzANH3ZH%2F5iynLeU5nE6dhaK6z0P%2FFecYLW20MIf%2FMekc9FPZWd%2FCjIlrTMM8pmfasGqzFRJLdZFxA9n5fI2ivoKcTeKYwIgHhJ2Aw10D6jS5iQSNGbJWyUos9ZkqJtCNb55uW9VeOIYLKjJFMDDI69wnSBS3lJqxYBiknA7WHheRUq2hA8LLZYYY6%2Bj%2BoMMtXTT9x3oKqXYe2MeUAtIiaw8sz%2FxeQAg1cR5qNkGZ1o%2Brv9XbQBJM9kOb5zyeSVgdQ6RFKgxT2H5VZbTIQ7ezNG%2Bv9p%2FgPQulU4kIszS%2BjFALLEeSo7ly%2BCe%2BAjgUi3VXF4KLyq8Ctdhlu%2FhXXKxIYJ2ULkx2UtVqD4KeMoBQuRc4ttUDIDM1LQ3uLxk0nQa2ua4HoTqafpcwsV4p83Bw%2FO789tepVmI1q%2BTysctjODM6tG%2F7wNzSXQpJYr9lzQKyhRQqTtV0x3P4Vk%2BqNfMQzun2DaxjxhVWhl2vOlzFYT2wuz8TEh9xvaq%2BU1IhVLmz6nr35GrA2u5M6xRXVN5aSXzP29mSLSjAb5TpQCsFSeUfjAEpltrPlvddnTiHv2j7xfN0jjDm7ckN7KuAfSZJSiYJBqHw4PY7MIrt7swGOqUBw%2F2kgZt0nOKREl%2B0PyUba39zP7AuwfO68WplKNhS1Olur6deSE1nSFLi8VSD7PPUEipkyEaoGkifk1ln38Lm38HNBDkdRyymUVI1n82LCboD4K1OjracZON19HCGNniQA5cRMG%2BpdGAL98clbtLTTf3TFPjySXwV73qz3Y%2FtH2EoCueboABUkHr%2FXChQUw6xgfs9byPoxciyj88krYJSE%2F858WSP&X-Amz-Signature=624176f27c8a325a228dd4d62d64fb3ce13d42405dd3f3b3281623ce712ef3ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNTLSAI%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBbsDwiX80eIXLGle3YOkfu%2BC8IR69LrukbYP%2FPMC9d%2BAiEA7etwCgMrx15FT6wIk7pkYmVSKjU31FN%2Bh59%2BLTqdf5QqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhOFtvaAUkdJs7IiyrcA4HlzWd3n5r6ccpaRFEX4QTDzQqtzANH3ZH%2F5iynLeU5nE6dhaK6z0P%2FFecYLW20MIf%2FMekc9FPZWd%2FCjIlrTMM8pmfasGqzFRJLdZFxA9n5fI2ivoKcTeKYwIgHhJ2Aw10D6jS5iQSNGbJWyUos9ZkqJtCNb55uW9VeOIYLKjJFMDDI69wnSBS3lJqxYBiknA7WHheRUq2hA8LLZYYY6%2Bj%2BoMMtXTT9x3oKqXYe2MeUAtIiaw8sz%2FxeQAg1cR5qNkGZ1o%2Brv9XbQBJM9kOb5zyeSVgdQ6RFKgxT2H5VZbTIQ7ezNG%2Bv9p%2FgPQulU4kIszS%2BjFALLEeSo7ly%2BCe%2BAjgUi3VXF4KLyq8Ctdhlu%2FhXXKxIYJ2ULkx2UtVqD4KeMoBQuRc4ttUDIDM1LQ3uLxk0nQa2ua4HoTqafpcwsV4p83Bw%2FO789tepVmI1q%2BTysctjODM6tG%2F7wNzSXQpJYr9lzQKyhRQqTtV0x3P4Vk%2BqNfMQzun2DaxjxhVWhl2vOlzFYT2wuz8TEh9xvaq%2BU1IhVLmz6nr35GrA2u5M6xRXVN5aSXzP29mSLSjAb5TpQCsFSeUfjAEpltrPlvddnTiHv2j7xfN0jjDm7ckN7KuAfSZJSiYJBqHw4PY7MIrt7swGOqUBw%2F2kgZt0nOKREl%2B0PyUba39zP7AuwfO68WplKNhS1Olur6deSE1nSFLi8VSD7PPUEipkyEaoGkifk1ln38Lm38HNBDkdRyymUVI1n82LCboD4K1OjracZON19HCGNniQA5cRMG%2BpdGAL98clbtLTTf3TFPjySXwV73qz3Y%2FtH2EoCueboABUkHr%2FXChQUw6xgfs9byPoxciyj88krYJSE%2F858WSP&X-Amz-Signature=14cb9d4d8221d4425f42cde439611988a44b06b34cfb57927e309bae2aabdc76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNTLSAI%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBbsDwiX80eIXLGle3YOkfu%2BC8IR69LrukbYP%2FPMC9d%2BAiEA7etwCgMrx15FT6wIk7pkYmVSKjU31FN%2Bh59%2BLTqdf5QqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhOFtvaAUkdJs7IiyrcA4HlzWd3n5r6ccpaRFEX4QTDzQqtzANH3ZH%2F5iynLeU5nE6dhaK6z0P%2FFecYLW20MIf%2FMekc9FPZWd%2FCjIlrTMM8pmfasGqzFRJLdZFxA9n5fI2ivoKcTeKYwIgHhJ2Aw10D6jS5iQSNGbJWyUos9ZkqJtCNb55uW9VeOIYLKjJFMDDI69wnSBS3lJqxYBiknA7WHheRUq2hA8LLZYYY6%2Bj%2BoMMtXTT9x3oKqXYe2MeUAtIiaw8sz%2FxeQAg1cR5qNkGZ1o%2Brv9XbQBJM9kOb5zyeSVgdQ6RFKgxT2H5VZbTIQ7ezNG%2Bv9p%2FgPQulU4kIszS%2BjFALLEeSo7ly%2BCe%2BAjgUi3VXF4KLyq8Ctdhlu%2FhXXKxIYJ2ULkx2UtVqD4KeMoBQuRc4ttUDIDM1LQ3uLxk0nQa2ua4HoTqafpcwsV4p83Bw%2FO789tepVmI1q%2BTysctjODM6tG%2F7wNzSXQpJYr9lzQKyhRQqTtV0x3P4Vk%2BqNfMQzun2DaxjxhVWhl2vOlzFYT2wuz8TEh9xvaq%2BU1IhVLmz6nr35GrA2u5M6xRXVN5aSXzP29mSLSjAb5TpQCsFSeUfjAEpltrPlvddnTiHv2j7xfN0jjDm7ckN7KuAfSZJSiYJBqHw4PY7MIrt7swGOqUBw%2F2kgZt0nOKREl%2B0PyUba39zP7AuwfO68WplKNhS1Olur6deSE1nSFLi8VSD7PPUEipkyEaoGkifk1ln38Lm38HNBDkdRyymUVI1n82LCboD4K1OjracZON19HCGNniQA5cRMG%2BpdGAL98clbtLTTf3TFPjySXwV73qz3Y%2FtH2EoCueboABUkHr%2FXChQUw6xgfs9byPoxciyj88krYJSE%2F858WSP&X-Amz-Signature=2115f341e6c1c2b65b20bc7d4e2cbf277092373099f745fc4f402ce6ed6cae8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


