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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU3ZC2K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3CHvMR2LP4xqvy7ACEj2G6K0LGcoWIWuwkVsfXuy7bAiEAw5cSLalD7FQZtkk6oSDIVEglVnZk9TfmUA3sP%2Fzoqagq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJTReIpmvMTexS5hrSrcA1MyUIo7OwNOhP%2BikIFy5MyPi3i9ToGUPPLU7g5pl%2FtAZ4QKEsl4Ycq9pcmnBUMlPDsLitFiewG4nORbAd%2BhvhBMUoQ29%2F7m3Vt4geLAFMVcfUE3EKA9w9l9j%2FPqoibd%2FQ2CgtR7QnQwhJQrhgh1j%2F16kTJXcrovbFMXpa0bsDuUATS00qPebTH%2FF2Om2vOgg%2FHJTb9v7LS4BzbbY%2FOwRXZlL%2BOy9oWeTdyjuc1awkGmVobFojAhnmKU7oOmCOAJkIPetq1IaxSCY2o3DnzREqF%2BJWwtUmID9hKG3zIxrZ3A8pcAWnq1BfZUlJ7N1ODYPvZUn9jDaxFLkCY%2FV8vNE8PtndNW7isqHFC%2F3Gsos%2FQPA7KuZXrzMYFDi%2FdEr1J124nZ4BE7c40YJv6YDGxGXB4SDWOTxBE94x01w8cLlo1NfPm8olJ0ukCEksIYNkUTpQOOGgsSwF9OwvQICc8ka4wdlN68qTAqSKWuQrn54zJthtkb2oE69eFPbluXELdyeCikNxH3OXjMjthMs%2FfiNRRWPg4w2lHnJ5svE32WUwRs5TBtSqTa8n2uIW3wDnYPKuOF0yEl0tloYU2joFp63sqYUIaniZvQzI07rys2YRtXw8HpyoR8SSWgTWcvMPHg9sQGOqUB5EkwyalaCyXTUMMKUlLuOaHJ4Am%2B2lRyFmwdchcPPnldc8BR3mZ0REPjUxt7mdrrA5ty7H%2BWjuIa5vth5faYJgp8wX3BWli0vOga7T3BW7suKN71FG5L45w91qiOS7SYmaCfm6f74NYAQJRjZ2e10s5Nt1%2FE3cyObbniDEZIOrab26QwcKofDyfcpmDJlWUa3VlpRS40GSjjzpwyrOzPtMHB%2BWob&X-Amz-Signature=e42e1c835f2aadfe736eafda4840ce3df4cb1149f5e03d2074cbf052bf51f881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU3ZC2K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3CHvMR2LP4xqvy7ACEj2G6K0LGcoWIWuwkVsfXuy7bAiEAw5cSLalD7FQZtkk6oSDIVEglVnZk9TfmUA3sP%2Fzoqagq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJTReIpmvMTexS5hrSrcA1MyUIo7OwNOhP%2BikIFy5MyPi3i9ToGUPPLU7g5pl%2FtAZ4QKEsl4Ycq9pcmnBUMlPDsLitFiewG4nORbAd%2BhvhBMUoQ29%2F7m3Vt4geLAFMVcfUE3EKA9w9l9j%2FPqoibd%2FQ2CgtR7QnQwhJQrhgh1j%2F16kTJXcrovbFMXpa0bsDuUATS00qPebTH%2FF2Om2vOgg%2FHJTb9v7LS4BzbbY%2FOwRXZlL%2BOy9oWeTdyjuc1awkGmVobFojAhnmKU7oOmCOAJkIPetq1IaxSCY2o3DnzREqF%2BJWwtUmID9hKG3zIxrZ3A8pcAWnq1BfZUlJ7N1ODYPvZUn9jDaxFLkCY%2FV8vNE8PtndNW7isqHFC%2F3Gsos%2FQPA7KuZXrzMYFDi%2FdEr1J124nZ4BE7c40YJv6YDGxGXB4SDWOTxBE94x01w8cLlo1NfPm8olJ0ukCEksIYNkUTpQOOGgsSwF9OwvQICc8ka4wdlN68qTAqSKWuQrn54zJthtkb2oE69eFPbluXELdyeCikNxH3OXjMjthMs%2FfiNRRWPg4w2lHnJ5svE32WUwRs5TBtSqTa8n2uIW3wDnYPKuOF0yEl0tloYU2joFp63sqYUIaniZvQzI07rys2YRtXw8HpyoR8SSWgTWcvMPHg9sQGOqUB5EkwyalaCyXTUMMKUlLuOaHJ4Am%2B2lRyFmwdchcPPnldc8BR3mZ0REPjUxt7mdrrA5ty7H%2BWjuIa5vth5faYJgp8wX3BWli0vOga7T3BW7suKN71FG5L45w91qiOS7SYmaCfm6f74NYAQJRjZ2e10s5Nt1%2FE3cyObbniDEZIOrab26QwcKofDyfcpmDJlWUa3VlpRS40GSjjzpwyrOzPtMHB%2BWob&X-Amz-Signature=2277b5b524be1f270e3efc66817becb891452f33c49dcd38fc5f59a117650f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU3ZC2K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3CHvMR2LP4xqvy7ACEj2G6K0LGcoWIWuwkVsfXuy7bAiEAw5cSLalD7FQZtkk6oSDIVEglVnZk9TfmUA3sP%2Fzoqagq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJTReIpmvMTexS5hrSrcA1MyUIo7OwNOhP%2BikIFy5MyPi3i9ToGUPPLU7g5pl%2FtAZ4QKEsl4Ycq9pcmnBUMlPDsLitFiewG4nORbAd%2BhvhBMUoQ29%2F7m3Vt4geLAFMVcfUE3EKA9w9l9j%2FPqoibd%2FQ2CgtR7QnQwhJQrhgh1j%2F16kTJXcrovbFMXpa0bsDuUATS00qPebTH%2FF2Om2vOgg%2FHJTb9v7LS4BzbbY%2FOwRXZlL%2BOy9oWeTdyjuc1awkGmVobFojAhnmKU7oOmCOAJkIPetq1IaxSCY2o3DnzREqF%2BJWwtUmID9hKG3zIxrZ3A8pcAWnq1BfZUlJ7N1ODYPvZUn9jDaxFLkCY%2FV8vNE8PtndNW7isqHFC%2F3Gsos%2FQPA7KuZXrzMYFDi%2FdEr1J124nZ4BE7c40YJv6YDGxGXB4SDWOTxBE94x01w8cLlo1NfPm8olJ0ukCEksIYNkUTpQOOGgsSwF9OwvQICc8ka4wdlN68qTAqSKWuQrn54zJthtkb2oE69eFPbluXELdyeCikNxH3OXjMjthMs%2FfiNRRWPg4w2lHnJ5svE32WUwRs5TBtSqTa8n2uIW3wDnYPKuOF0yEl0tloYU2joFp63sqYUIaniZvQzI07rys2YRtXw8HpyoR8SSWgTWcvMPHg9sQGOqUB5EkwyalaCyXTUMMKUlLuOaHJ4Am%2B2lRyFmwdchcPPnldc8BR3mZ0REPjUxt7mdrrA5ty7H%2BWjuIa5vth5faYJgp8wX3BWli0vOga7T3BW7suKN71FG5L45w91qiOS7SYmaCfm6f74NYAQJRjZ2e10s5Nt1%2FE3cyObbniDEZIOrab26QwcKofDyfcpmDJlWUa3VlpRS40GSjjzpwyrOzPtMHB%2BWob&X-Amz-Signature=bfe21a43f6f9be6d80ea8935fa8cdf8e56c1a2e1c1c089c81546d813717c7b4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU3ZC2K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3CHvMR2LP4xqvy7ACEj2G6K0LGcoWIWuwkVsfXuy7bAiEAw5cSLalD7FQZtkk6oSDIVEglVnZk9TfmUA3sP%2Fzoqagq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJTReIpmvMTexS5hrSrcA1MyUIo7OwNOhP%2BikIFy5MyPi3i9ToGUPPLU7g5pl%2FtAZ4QKEsl4Ycq9pcmnBUMlPDsLitFiewG4nORbAd%2BhvhBMUoQ29%2F7m3Vt4geLAFMVcfUE3EKA9w9l9j%2FPqoibd%2FQ2CgtR7QnQwhJQrhgh1j%2F16kTJXcrovbFMXpa0bsDuUATS00qPebTH%2FF2Om2vOgg%2FHJTb9v7LS4BzbbY%2FOwRXZlL%2BOy9oWeTdyjuc1awkGmVobFojAhnmKU7oOmCOAJkIPetq1IaxSCY2o3DnzREqF%2BJWwtUmID9hKG3zIxrZ3A8pcAWnq1BfZUlJ7N1ODYPvZUn9jDaxFLkCY%2FV8vNE8PtndNW7isqHFC%2F3Gsos%2FQPA7KuZXrzMYFDi%2FdEr1J124nZ4BE7c40YJv6YDGxGXB4SDWOTxBE94x01w8cLlo1NfPm8olJ0ukCEksIYNkUTpQOOGgsSwF9OwvQICc8ka4wdlN68qTAqSKWuQrn54zJthtkb2oE69eFPbluXELdyeCikNxH3OXjMjthMs%2FfiNRRWPg4w2lHnJ5svE32WUwRs5TBtSqTa8n2uIW3wDnYPKuOF0yEl0tloYU2joFp63sqYUIaniZvQzI07rys2YRtXw8HpyoR8SSWgTWcvMPHg9sQGOqUB5EkwyalaCyXTUMMKUlLuOaHJ4Am%2B2lRyFmwdchcPPnldc8BR3mZ0REPjUxt7mdrrA5ty7H%2BWjuIa5vth5faYJgp8wX3BWli0vOga7T3BW7suKN71FG5L45w91qiOS7SYmaCfm6f74NYAQJRjZ2e10s5Nt1%2FE3cyObbniDEZIOrab26QwcKofDyfcpmDJlWUa3VlpRS40GSjjzpwyrOzPtMHB%2BWob&X-Amz-Signature=151dc7da6a01c6f01b06de7542066ae83c549a646d3cf53f5a40bc72de6ccad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU3ZC2K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3CHvMR2LP4xqvy7ACEj2G6K0LGcoWIWuwkVsfXuy7bAiEAw5cSLalD7FQZtkk6oSDIVEglVnZk9TfmUA3sP%2Fzoqagq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJTReIpmvMTexS5hrSrcA1MyUIo7OwNOhP%2BikIFy5MyPi3i9ToGUPPLU7g5pl%2FtAZ4QKEsl4Ycq9pcmnBUMlPDsLitFiewG4nORbAd%2BhvhBMUoQ29%2F7m3Vt4geLAFMVcfUE3EKA9w9l9j%2FPqoibd%2FQ2CgtR7QnQwhJQrhgh1j%2F16kTJXcrovbFMXpa0bsDuUATS00qPebTH%2FF2Om2vOgg%2FHJTb9v7LS4BzbbY%2FOwRXZlL%2BOy9oWeTdyjuc1awkGmVobFojAhnmKU7oOmCOAJkIPetq1IaxSCY2o3DnzREqF%2BJWwtUmID9hKG3zIxrZ3A8pcAWnq1BfZUlJ7N1ODYPvZUn9jDaxFLkCY%2FV8vNE8PtndNW7isqHFC%2F3Gsos%2FQPA7KuZXrzMYFDi%2FdEr1J124nZ4BE7c40YJv6YDGxGXB4SDWOTxBE94x01w8cLlo1NfPm8olJ0ukCEksIYNkUTpQOOGgsSwF9OwvQICc8ka4wdlN68qTAqSKWuQrn54zJthtkb2oE69eFPbluXELdyeCikNxH3OXjMjthMs%2FfiNRRWPg4w2lHnJ5svE32WUwRs5TBtSqTa8n2uIW3wDnYPKuOF0yEl0tloYU2joFp63sqYUIaniZvQzI07rys2YRtXw8HpyoR8SSWgTWcvMPHg9sQGOqUB5EkwyalaCyXTUMMKUlLuOaHJ4Am%2B2lRyFmwdchcPPnldc8BR3mZ0REPjUxt7mdrrA5ty7H%2BWjuIa5vth5faYJgp8wX3BWli0vOga7T3BW7suKN71FG5L45w91qiOS7SYmaCfm6f74NYAQJRjZ2e10s5Nt1%2FE3cyObbniDEZIOrab26QwcKofDyfcpmDJlWUa3VlpRS40GSjjzpwyrOzPtMHB%2BWob&X-Amz-Signature=70d0a42dc5436cbc66045ecbe223d062a3b2585425cbbe63db6b3785329a43ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU3ZC2K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3CHvMR2LP4xqvy7ACEj2G6K0LGcoWIWuwkVsfXuy7bAiEAw5cSLalD7FQZtkk6oSDIVEglVnZk9TfmUA3sP%2Fzoqagq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJTReIpmvMTexS5hrSrcA1MyUIo7OwNOhP%2BikIFy5MyPi3i9ToGUPPLU7g5pl%2FtAZ4QKEsl4Ycq9pcmnBUMlPDsLitFiewG4nORbAd%2BhvhBMUoQ29%2F7m3Vt4geLAFMVcfUE3EKA9w9l9j%2FPqoibd%2FQ2CgtR7QnQwhJQrhgh1j%2F16kTJXcrovbFMXpa0bsDuUATS00qPebTH%2FF2Om2vOgg%2FHJTb9v7LS4BzbbY%2FOwRXZlL%2BOy9oWeTdyjuc1awkGmVobFojAhnmKU7oOmCOAJkIPetq1IaxSCY2o3DnzREqF%2BJWwtUmID9hKG3zIxrZ3A8pcAWnq1BfZUlJ7N1ODYPvZUn9jDaxFLkCY%2FV8vNE8PtndNW7isqHFC%2F3Gsos%2FQPA7KuZXrzMYFDi%2FdEr1J124nZ4BE7c40YJv6YDGxGXB4SDWOTxBE94x01w8cLlo1NfPm8olJ0ukCEksIYNkUTpQOOGgsSwF9OwvQICc8ka4wdlN68qTAqSKWuQrn54zJthtkb2oE69eFPbluXELdyeCikNxH3OXjMjthMs%2FfiNRRWPg4w2lHnJ5svE32WUwRs5TBtSqTa8n2uIW3wDnYPKuOF0yEl0tloYU2joFp63sqYUIaniZvQzI07rys2YRtXw8HpyoR8SSWgTWcvMPHg9sQGOqUB5EkwyalaCyXTUMMKUlLuOaHJ4Am%2B2lRyFmwdchcPPnldc8BR3mZ0REPjUxt7mdrrA5ty7H%2BWjuIa5vth5faYJgp8wX3BWli0vOga7T3BW7suKN71FG5L45w91qiOS7SYmaCfm6f74NYAQJRjZ2e10s5Nt1%2FE3cyObbniDEZIOrab26QwcKofDyfcpmDJlWUa3VlpRS40GSjjzpwyrOzPtMHB%2BWob&X-Amz-Signature=6a20e47012fe805a6b0aad0005cc12fc95633b34453f31e1b3fbe25650d22465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU3ZC2K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3CHvMR2LP4xqvy7ACEj2G6K0LGcoWIWuwkVsfXuy7bAiEAw5cSLalD7FQZtkk6oSDIVEglVnZk9TfmUA3sP%2Fzoqagq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJTReIpmvMTexS5hrSrcA1MyUIo7OwNOhP%2BikIFy5MyPi3i9ToGUPPLU7g5pl%2FtAZ4QKEsl4Ycq9pcmnBUMlPDsLitFiewG4nORbAd%2BhvhBMUoQ29%2F7m3Vt4geLAFMVcfUE3EKA9w9l9j%2FPqoibd%2FQ2CgtR7QnQwhJQrhgh1j%2F16kTJXcrovbFMXpa0bsDuUATS00qPebTH%2FF2Om2vOgg%2FHJTb9v7LS4BzbbY%2FOwRXZlL%2BOy9oWeTdyjuc1awkGmVobFojAhnmKU7oOmCOAJkIPetq1IaxSCY2o3DnzREqF%2BJWwtUmID9hKG3zIxrZ3A8pcAWnq1BfZUlJ7N1ODYPvZUn9jDaxFLkCY%2FV8vNE8PtndNW7isqHFC%2F3Gsos%2FQPA7KuZXrzMYFDi%2FdEr1J124nZ4BE7c40YJv6YDGxGXB4SDWOTxBE94x01w8cLlo1NfPm8olJ0ukCEksIYNkUTpQOOGgsSwF9OwvQICc8ka4wdlN68qTAqSKWuQrn54zJthtkb2oE69eFPbluXELdyeCikNxH3OXjMjthMs%2FfiNRRWPg4w2lHnJ5svE32WUwRs5TBtSqTa8n2uIW3wDnYPKuOF0yEl0tloYU2joFp63sqYUIaniZvQzI07rys2YRtXw8HpyoR8SSWgTWcvMPHg9sQGOqUB5EkwyalaCyXTUMMKUlLuOaHJ4Am%2B2lRyFmwdchcPPnldc8BR3mZ0REPjUxt7mdrrA5ty7H%2BWjuIa5vth5faYJgp8wX3BWli0vOga7T3BW7suKN71FG5L45w91qiOS7SYmaCfm6f74NYAQJRjZ2e10s5Nt1%2FE3cyObbniDEZIOrab26QwcKofDyfcpmDJlWUa3VlpRS40GSjjzpwyrOzPtMHB%2BWob&X-Amz-Signature=88bf206701894d55fe6cd44d103ad37587926c371177aa83b2324a2f4737de01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU3ZC2K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3CHvMR2LP4xqvy7ACEj2G6K0LGcoWIWuwkVsfXuy7bAiEAw5cSLalD7FQZtkk6oSDIVEglVnZk9TfmUA3sP%2Fzoqagq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJTReIpmvMTexS5hrSrcA1MyUIo7OwNOhP%2BikIFy5MyPi3i9ToGUPPLU7g5pl%2FtAZ4QKEsl4Ycq9pcmnBUMlPDsLitFiewG4nORbAd%2BhvhBMUoQ29%2F7m3Vt4geLAFMVcfUE3EKA9w9l9j%2FPqoibd%2FQ2CgtR7QnQwhJQrhgh1j%2F16kTJXcrovbFMXpa0bsDuUATS00qPebTH%2FF2Om2vOgg%2FHJTb9v7LS4BzbbY%2FOwRXZlL%2BOy9oWeTdyjuc1awkGmVobFojAhnmKU7oOmCOAJkIPetq1IaxSCY2o3DnzREqF%2BJWwtUmID9hKG3zIxrZ3A8pcAWnq1BfZUlJ7N1ODYPvZUn9jDaxFLkCY%2FV8vNE8PtndNW7isqHFC%2F3Gsos%2FQPA7KuZXrzMYFDi%2FdEr1J124nZ4BE7c40YJv6YDGxGXB4SDWOTxBE94x01w8cLlo1NfPm8olJ0ukCEksIYNkUTpQOOGgsSwF9OwvQICc8ka4wdlN68qTAqSKWuQrn54zJthtkb2oE69eFPbluXELdyeCikNxH3OXjMjthMs%2FfiNRRWPg4w2lHnJ5svE32WUwRs5TBtSqTa8n2uIW3wDnYPKuOF0yEl0tloYU2joFp63sqYUIaniZvQzI07rys2YRtXw8HpyoR8SSWgTWcvMPHg9sQGOqUB5EkwyalaCyXTUMMKUlLuOaHJ4Am%2B2lRyFmwdchcPPnldc8BR3mZ0REPjUxt7mdrrA5ty7H%2BWjuIa5vth5faYJgp8wX3BWli0vOga7T3BW7suKN71FG5L45w91qiOS7SYmaCfm6f74NYAQJRjZ2e10s5Nt1%2FE3cyObbniDEZIOrab26QwcKofDyfcpmDJlWUa3VlpRS40GSjjzpwyrOzPtMHB%2BWob&X-Amz-Signature=0f6170af508ba6d864bed594086e67ada24d9e2802d5c8c3beeb17b92d9496f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU3ZC2K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3CHvMR2LP4xqvy7ACEj2G6K0LGcoWIWuwkVsfXuy7bAiEAw5cSLalD7FQZtkk6oSDIVEglVnZk9TfmUA3sP%2Fzoqagq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJTReIpmvMTexS5hrSrcA1MyUIo7OwNOhP%2BikIFy5MyPi3i9ToGUPPLU7g5pl%2FtAZ4QKEsl4Ycq9pcmnBUMlPDsLitFiewG4nORbAd%2BhvhBMUoQ29%2F7m3Vt4geLAFMVcfUE3EKA9w9l9j%2FPqoibd%2FQ2CgtR7QnQwhJQrhgh1j%2F16kTJXcrovbFMXpa0bsDuUATS00qPebTH%2FF2Om2vOgg%2FHJTb9v7LS4BzbbY%2FOwRXZlL%2BOy9oWeTdyjuc1awkGmVobFojAhnmKU7oOmCOAJkIPetq1IaxSCY2o3DnzREqF%2BJWwtUmID9hKG3zIxrZ3A8pcAWnq1BfZUlJ7N1ODYPvZUn9jDaxFLkCY%2FV8vNE8PtndNW7isqHFC%2F3Gsos%2FQPA7KuZXrzMYFDi%2FdEr1J124nZ4BE7c40YJv6YDGxGXB4SDWOTxBE94x01w8cLlo1NfPm8olJ0ukCEksIYNkUTpQOOGgsSwF9OwvQICc8ka4wdlN68qTAqSKWuQrn54zJthtkb2oE69eFPbluXELdyeCikNxH3OXjMjthMs%2FfiNRRWPg4w2lHnJ5svE32WUwRs5TBtSqTa8n2uIW3wDnYPKuOF0yEl0tloYU2joFp63sqYUIaniZvQzI07rys2YRtXw8HpyoR8SSWgTWcvMPHg9sQGOqUB5EkwyalaCyXTUMMKUlLuOaHJ4Am%2B2lRyFmwdchcPPnldc8BR3mZ0REPjUxt7mdrrA5ty7H%2BWjuIa5vth5faYJgp8wX3BWli0vOga7T3BW7suKN71FG5L45w91qiOS7SYmaCfm6f74NYAQJRjZ2e10s5Nt1%2FE3cyObbniDEZIOrab26QwcKofDyfcpmDJlWUa3VlpRS40GSjjzpwyrOzPtMHB%2BWob&X-Amz-Signature=a2783a08baa6b687cad60aac14fc1bbddb3d1c7d404c9e39c66e32de1215b977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU3ZC2K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3CHvMR2LP4xqvy7ACEj2G6K0LGcoWIWuwkVsfXuy7bAiEAw5cSLalD7FQZtkk6oSDIVEglVnZk9TfmUA3sP%2Fzoqagq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJTReIpmvMTexS5hrSrcA1MyUIo7OwNOhP%2BikIFy5MyPi3i9ToGUPPLU7g5pl%2FtAZ4QKEsl4Ycq9pcmnBUMlPDsLitFiewG4nORbAd%2BhvhBMUoQ29%2F7m3Vt4geLAFMVcfUE3EKA9w9l9j%2FPqoibd%2FQ2CgtR7QnQwhJQrhgh1j%2F16kTJXcrovbFMXpa0bsDuUATS00qPebTH%2FF2Om2vOgg%2FHJTb9v7LS4BzbbY%2FOwRXZlL%2BOy9oWeTdyjuc1awkGmVobFojAhnmKU7oOmCOAJkIPetq1IaxSCY2o3DnzREqF%2BJWwtUmID9hKG3zIxrZ3A8pcAWnq1BfZUlJ7N1ODYPvZUn9jDaxFLkCY%2FV8vNE8PtndNW7isqHFC%2F3Gsos%2FQPA7KuZXrzMYFDi%2FdEr1J124nZ4BE7c40YJv6YDGxGXB4SDWOTxBE94x01w8cLlo1NfPm8olJ0ukCEksIYNkUTpQOOGgsSwF9OwvQICc8ka4wdlN68qTAqSKWuQrn54zJthtkb2oE69eFPbluXELdyeCikNxH3OXjMjthMs%2FfiNRRWPg4w2lHnJ5svE32WUwRs5TBtSqTa8n2uIW3wDnYPKuOF0yEl0tloYU2joFp63sqYUIaniZvQzI07rys2YRtXw8HpyoR8SSWgTWcvMPHg9sQGOqUB5EkwyalaCyXTUMMKUlLuOaHJ4Am%2B2lRyFmwdchcPPnldc8BR3mZ0REPjUxt7mdrrA5ty7H%2BWjuIa5vth5faYJgp8wX3BWli0vOga7T3BW7suKN71FG5L45w91qiOS7SYmaCfm6f74NYAQJRjZ2e10s5Nt1%2FE3cyObbniDEZIOrab26QwcKofDyfcpmDJlWUa3VlpRS40GSjjzpwyrOzPtMHB%2BWob&X-Amz-Signature=8029fb043814bb7e0a53ed4f9f875e22f81ed5b9ada25ce5b5dbfef1153130bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BEXBW3Y%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjZ6EKxsz5xgyniwW%2BQ7C3sSM6RTfnMtm0BmRCfHfT2AiEA5y4WCvKbVmp129Z7QJOVQ4MpSDAvInXExN1V%2B83zmjQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFjhwc3CA5LyL4p2ayrcA27aPB2RRSA%2BBC34pWXDB1VN8Zm9%2B9S3X0Puu9sxrvpHqd12Fga77rTN5bFjJ2%2Bvyy3qaKxucRN%2FR0oBIGZOmbdmBTkx9l1j3X01FTPjTx58AGpgF8gK4fJhO79UbklkXWNIr9u3i4XNVfIBoPTRwVFGFhgPqqibFHh8Qgsuj7la%2FWgaKeDLlMKv1TY5MfuVpCJpX6IIgrplw2%2F4K%2BZybKxJpGHnFNU%2F8ZWd8RQpxiRid0i14lVC7GosjK1vtRi8l8pm8fyCIt46LJMIYyH%2B37ED4sYbpNTXryT8Obok4GntZGm571h%2FBufdHLutX5ETC1xzRDVl2czGbabnOePMfEEiP80YnYRWh9wx3XP5rmEQNwlLbZUlIwDLrk6xsW5yHDKz%2FR03fHuXpkdsHXIh3%2BfcT4%2FjNgxIBUVTMDYFoeD0nURVOqeSH0jEO3UkbfhnPqnF5qojYSwpdpWZc6tLosuhvbrsFBOkQYn%2BeMwsUYtPX%2B8SxVktyvvJs8U9iKkmeVAT3AjPUtYME%2Bupzf8KOioOQKdm6WhHUB2QgpygZvfLeTKcp4IQE47sR3lFGQkOJ449wffAjHUFEZLh1hd%2F2%2FSEtIKKY0T4zWwAth9tCTl8tXz0y2hULShXqkW9MMrg9sQGOqUBJuY4UCCQjuxkpPkeYAl7y5J3HcNRWZEbFObpy5dKHHrhEfJvO08GZ3NQq5hBqPtej7r51nthA9u5tcn0BZgS2tDSKLuNi8kXe5O74ic1zNXCSrM5c%2B7qq4YjGUc3kk%2BTuP%2FYLjwxJ0dACbV4exq2AkJ70hNutY4JIoNGbJ5lGtyHcjiGqmxly4VOCgI55besxNLLE0ol8TYZ0%2Fly4wYwEuMtbXVe&X-Amz-Signature=53b558406454b62b68be5d50097f565524567344814ccb598e08b35f3779d999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXPP7JFM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHcCzmVjxbegGzawUxEVL%2BgFH4PqYBtIVRDqcgIWz30gIgGOSSj1wnGztDL4vrxNZqXbUe0CCkDJcznCQpg9NUHzEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKzpWrc6HuFxHLXv8CrcA7KA7dlJ%2BmkJRU2w8ikXajtmEX7sJXhUt0Gn4auPPZHI8DxAIE%2FZwFb74d%2FquWE5RUs6LIB%2BlKWyFC1SUrpyHq6jxFE1%2BNZKS8IB9Mh%2B%2Bg7gfjV2wz952fNSCm69Nbf%2BpvVUvW3mfzfa9XgbNZ8ybXqHOTvCsWiZdlIQCFquTVXeLWLyHJTAO%2FwBsD%2BpP8irmSu2kclOUFlG3Y8u6tha9UnNIrW%2FFZMflUn6eeRjPxjmqv4sOQNTEGVS7lftq5D7X1BfjsdOKlw4XYcYy0qJYQOynIYhTA40JzByKFFofzav4F1iRhTy8f2hzdpK45kxsFFIuASsgh8HyUcQd6Mp5pJ22TzN9O4afplEi2DfPfpxe02Y%2FvjaatYLzU7Fd%2Bd8NAaLpIN%2B8XuoMOGhSZ7gjYO3aXrBZK16z40U6CQ0%2Fh6Qv3o003mcIeIGDwX6nLSC03jeDgNfxBkKxvBb2TXuySO4D2FQg7dkx1St6rt76nGlh7d815kEEAtvJMd9Ds3PZKRFW23KDKbCDSi0Fw8ACBDj7CKuAOa138sdzru0ST4CcnaD0Ne1FMdVccPWdZah8Ztj9nNy%2FSUZWFSPSjuisy88JxfK2lJcojE7peZg1AQedwCdNKOfM%2Br%2FnvbNMN7f9sQGOqUBzdRgv5skh%2BjWqtdr7be8DXRNhFPfS%2BF%2FaATUq9ztLIuxRaYjwtJh8cz6gr5jqyJelEcyoB9DQ%2FTdTMXhPtzllH4GCUG2JzdPgaNXZc7safXdtuwzBQh09XHj3sxNJxvHyRBSiEqKsck%2FkGTROnzeRz4AHkimpbnkcNVtoEd0mjvqmI4Wz3FKjxVYWuE6b1TplK0bmFIh92xamcdBFoZcLnnJ8wvo&X-Amz-Signature=24e6d29e2918c5d5f6e046d30ddc6a556705f4871bf1cea520117418f37cbc39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBXWACVD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUEy7ckZUBFhSJLdi3uwtJapFi65kGYIyZKFnmQdlGagIhANim0EDQiw84NlFfQbd9S1GHmrcWMBhYVFzlQvmWCge9Kv8DCEMQABoMNjM3NDIzMTgzODA1IgyJLHg5U%2BvJV%2FCwFFMq3APXhZpCz6daRD0uw6lKCwEwtlv8BmqM5MNsaYiusOeBDaNuS9lhaeC5iNK2efm2x8QADekCU2egJBo8SS8o9XrRXhc4alFAEB%2FmVB6PKATNHhhbHn6k3IcfJ4m%2Fd0WRkSO46Sk5g6lAXHbqR1reB26hN7dRm1EvOf1zCjkE%2FO5idj9ORMxzkNbh9IHq%2BgfrtmT0cTbZcO1FFX7r%2Fd89UaTFQFz5IhAxOQOM6dLGVMM0MdOBdNE5B0696sLkR0FhISE8%2BunYe8JnbQYlMyoY6iiG5ZVkGxkHHT39iq9zonqwt5FeM759gU2mlelYx8Nx5mKc2v3BHH0l3TanfLCb2sGmMpPBh2wQekoCuUkhkcaOm39LuXPqIV8S53ugHrPnbtTaH9vuiT5hR6Y8EL1QXZd%2BF0RqoSslvjgrG5xkQvMCzZiEaRfQ4ZB3VeKTShdgkcCokZJseUDl1UezKGkRd7pFEGyenio3lDbSwc0Z8QrCq48Y53tv3XVIWy4rb4y6YqevR0rPOdcN7TUlHf4VpLP4fvjeIsRr9rfh8Vk8orA8U7WNkJjCz3Vj%2BNjTEU5gb%2F9fFKP76ksVABofCdu70WMdysGacCVjJyZCnt1xtbY7JG4mhKDz7%2FJwGeJoUTCZ4PbEBjqkAa3CWiGLzDRO9XVJRLITskgLdkNULECNZmqTKh4pSGdhLdiMqjj8KLALAthfZ0AxM9kShjPEmYP5YEKgiAgDPrJcLQUbeepCEGbd17ZE2GNz62wyvqakphszEnvadwMyKmBaQnSNegICOWUBKO4aZgMCgZtu%2FTRZKQphWYSgi%2FO0j68xsAfi8h4nwY9R5wrT4z2ZOVqBCCUDb1iPnReoi71I9GZn&X-Amz-Signature=5467af0260bf0053d424d72fc9d574691f86e2e7e956a37b6321c3ed83148dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU3ZC2K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3CHvMR2LP4xqvy7ACEj2G6K0LGcoWIWuwkVsfXuy7bAiEAw5cSLalD7FQZtkk6oSDIVEglVnZk9TfmUA3sP%2Fzoqagq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJTReIpmvMTexS5hrSrcA1MyUIo7OwNOhP%2BikIFy5MyPi3i9ToGUPPLU7g5pl%2FtAZ4QKEsl4Ycq9pcmnBUMlPDsLitFiewG4nORbAd%2BhvhBMUoQ29%2F7m3Vt4geLAFMVcfUE3EKA9w9l9j%2FPqoibd%2FQ2CgtR7QnQwhJQrhgh1j%2F16kTJXcrovbFMXpa0bsDuUATS00qPebTH%2FF2Om2vOgg%2FHJTb9v7LS4BzbbY%2FOwRXZlL%2BOy9oWeTdyjuc1awkGmVobFojAhnmKU7oOmCOAJkIPetq1IaxSCY2o3DnzREqF%2BJWwtUmID9hKG3zIxrZ3A8pcAWnq1BfZUlJ7N1ODYPvZUn9jDaxFLkCY%2FV8vNE8PtndNW7isqHFC%2F3Gsos%2FQPA7KuZXrzMYFDi%2FdEr1J124nZ4BE7c40YJv6YDGxGXB4SDWOTxBE94x01w8cLlo1NfPm8olJ0ukCEksIYNkUTpQOOGgsSwF9OwvQICc8ka4wdlN68qTAqSKWuQrn54zJthtkb2oE69eFPbluXELdyeCikNxH3OXjMjthMs%2FfiNRRWPg4w2lHnJ5svE32WUwRs5TBtSqTa8n2uIW3wDnYPKuOF0yEl0tloYU2joFp63sqYUIaniZvQzI07rys2YRtXw8HpyoR8SSWgTWcvMPHg9sQGOqUB5EkwyalaCyXTUMMKUlLuOaHJ4Am%2B2lRyFmwdchcPPnldc8BR3mZ0REPjUxt7mdrrA5ty7H%2BWjuIa5vth5faYJgp8wX3BWli0vOga7T3BW7suKN71FG5L45w91qiOS7SYmaCfm6f74NYAQJRjZ2e10s5Nt1%2FE3cyObbniDEZIOrab26QwcKofDyfcpmDJlWUa3VlpRS40GSjjzpwyrOzPtMHB%2BWob&X-Amz-Signature=e400af00eef3338640e89492a94010e0923d515fbb5ea2d72e429ba70c48fe74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXTYZDVH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtxIFi%2FDoOwHuvkKA7iyJYIGONFE2dxX4Xr5LRCFQsnAIhAOmSCC9lYo2wZ9YCCeszGzP9QMOc5Zbb8Ry1Pqzxs2ICKv8DCEMQABoMNjM3NDIzMTgzODA1IgwkF6Xx2bkJ8qguSR4q3AO56woKPf7SImdpfDZKQctTm77tg5tpQLNDz13oNXkLpXrV5r2lQoLnDwmfn7%2Foom4J5mpxsbsXT5TRMTgZ%2B9wdxYX%2FECjHu779%2B0mVhDnM1s9ISgpr4PreYTzFw16%2B1UYPA5EyExMM2nnj81sV4RS0%2Bz39hUWuasGGRL9yworx3UFvpHpFo2%2FmL0m8uJa9oyXDWzb%2F7xRtuZjbNZ7vAM1A7fvt9EAdb1nUTmFbnU2S461%2FUtTf64KoqiynJdF1fWMwnMnwDDFmb8AfeX98%2F4jwn%2FhUwTx%2BUEtkl%2FD5H6AjLA9MoUrRHlOgO8%2FsNB05A9q6xN0zzyTohtIeEip7c9Q4JwrykY06wr2lNGo14Kkqw9sQumNAY3Ef%2BDfiZE18L0omzQwVL2T0JJXTMmGBCfMaBdiH6LkdTMoi1OB%2Fgyl0%2F8VYXYmmaLUeoCjRypMlojmCS6rXREcG20Uodhquk03b%2FEPscp8BlZLQn124my4tDNXhFAlVsbSapG0sPoQ7pPHwMY1kYbd4qUdQ9Jg6g64tXhIksun3FaVRMKZAyqU7Ol2FcyfFWabBWbzcJV8PPsAe8jgHzEiW%2FlxC36Goy%2B72RvLjfSAPFI4HtoIAzRQ7TTbB18nRFbs66LluYDD03%2FbEBjqkAT%2Fq9B8J%2BVNQQNW7KCgE6GnJVrPR1bdekqRp%2BHcZu6ZmZBBK8t51MWMWLwmMVbpKjDt69RSxe3d%2BQpmThsCeIQLgjkD%2BTuby2yi5QS%2BnGCzt8c3HdQ2pu6DjHhHYqmzj4F0Ad%2BJcxY%2Ffbv20acOwvBQdQRrbsTYujy2lG0JFrBwd4NuXynnTl9uIrRqht%2Bm2iWi6q1opRIQK3gCukc2aZQfjAeYZ&X-Amz-Signature=0e06bc3f417806300cf5d93c188081493a94dac8ee6d1a327dc1c86568b81ec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU3ZC2K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3CHvMR2LP4xqvy7ACEj2G6K0LGcoWIWuwkVsfXuy7bAiEAw5cSLalD7FQZtkk6oSDIVEglVnZk9TfmUA3sP%2Fzoqagq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJTReIpmvMTexS5hrSrcA1MyUIo7OwNOhP%2BikIFy5MyPi3i9ToGUPPLU7g5pl%2FtAZ4QKEsl4Ycq9pcmnBUMlPDsLitFiewG4nORbAd%2BhvhBMUoQ29%2F7m3Vt4geLAFMVcfUE3EKA9w9l9j%2FPqoibd%2FQ2CgtR7QnQwhJQrhgh1j%2F16kTJXcrovbFMXpa0bsDuUATS00qPebTH%2FF2Om2vOgg%2FHJTb9v7LS4BzbbY%2FOwRXZlL%2BOy9oWeTdyjuc1awkGmVobFojAhnmKU7oOmCOAJkIPetq1IaxSCY2o3DnzREqF%2BJWwtUmID9hKG3zIxrZ3A8pcAWnq1BfZUlJ7N1ODYPvZUn9jDaxFLkCY%2FV8vNE8PtndNW7isqHFC%2F3Gsos%2FQPA7KuZXrzMYFDi%2FdEr1J124nZ4BE7c40YJv6YDGxGXB4SDWOTxBE94x01w8cLlo1NfPm8olJ0ukCEksIYNkUTpQOOGgsSwF9OwvQICc8ka4wdlN68qTAqSKWuQrn54zJthtkb2oE69eFPbluXELdyeCikNxH3OXjMjthMs%2FfiNRRWPg4w2lHnJ5svE32WUwRs5TBtSqTa8n2uIW3wDnYPKuOF0yEl0tloYU2joFp63sqYUIaniZvQzI07rys2YRtXw8HpyoR8SSWgTWcvMPHg9sQGOqUB5EkwyalaCyXTUMMKUlLuOaHJ4Am%2B2lRyFmwdchcPPnldc8BR3mZ0REPjUxt7mdrrA5ty7H%2BWjuIa5vth5faYJgp8wX3BWli0vOga7T3BW7suKN71FG5L45w91qiOS7SYmaCfm6f74NYAQJRjZ2e10s5Nt1%2FE3cyObbniDEZIOrab26QwcKofDyfcpmDJlWUa3VlpRS40GSjjzpwyrOzPtMHB%2BWob&X-Amz-Signature=1e80164e1225c48e691542ac5794213e5c794ddff78eafc67e196b3b5226e904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RWNCC2L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCER445cxjvNhWXWsZZa4gK5z21iz4lj6QJa7HaNVTcNQIgSlUkNgM4k96aG5c3kVNkPbuw3xVMA2D6nT%2F2JX%2FttC0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDBdPXG5Lgl4FGX6nRSrcA5rcR3aiYh2l9ng0kBGe%2FJJd101A1nhB72YH93Udrak6yci4WI0kv8HXI%2F8y7ZaKl%2BZSSUl8AFlMVsR0QU9ul5IC26wmTZhJ9VNCVFYi9MznzHQyewg%2FGM8NwVFKRzz75yLVSXOBIx2cpKIYBkK7T2BxQdcVvGzjJJEZmI2yWA7PmTkaBNdC7NrEEbDfVZkWloZp9Gp%2Fx8pPL%2FdNhTKcnYL4QBDZLiRuMkVEWaDlcgUuFon6lAf4ZNNe15rObuPoMh8Db8XixD5uEyQs5bwGPF6UFQNrrrLRrelFz19ZMlPDO6EDOuyfnfelc9n0EEjT46j%2FTx6oII%2FS8tEy3172UoJdFTQxqANKcau6DyqRUaNhW%2FDoA96SL8IxVDek694RIJeVKxGCi4sdodKa2cPT%2B2ZbB1l7%2Bp%2BBaOXWeaD7jj4c7GfisJBPHdcHUb8bCx%2FxJXw9Y%2BFonXOyyJUpa2uBiFsltzaV77rqy19BSarDg2aTbCSsOWy1%2Bc37x9rsEljyRCRtpZWzFIlfnusS6DnckNRpH%2FKB5CnBkyyevMi7MGohYMWBSNNVHkJeHQacy8oBZpLNaEzWhSNRIS7faA3Z2BgiF%2Bi4GUId%2BxIBQu7IzRiyuELtwWO020C6ktU1MODf9sQGOqUBjAuarBElvX72%2Bqrm86J8YbaR0YrnnW5QKXldTXtidYEM2yFc3B62nkDwCK4WrypA750RtaPWpmvcOAo3X9MSnO0WMtigbnPFof9KOCY5G%2FJsYg5xpYKxV7dFoNafNBwZz%2BdJGD1FkaPhO0ytS9Eat2w0HAUDH5qEkLWRZZR1CivMyqgzwZYvD4E5XEdnUVJX%2BGzYPQluUiSj%2F4Et1X91YTpmUli%2B&X-Amz-Signature=6a8c52e778ec1bbfd7d30d849336b857764bc307b28433c75332a8e9ee235ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU3ZC2K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3CHvMR2LP4xqvy7ACEj2G6K0LGcoWIWuwkVsfXuy7bAiEAw5cSLalD7FQZtkk6oSDIVEglVnZk9TfmUA3sP%2Fzoqagq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJTReIpmvMTexS5hrSrcA1MyUIo7OwNOhP%2BikIFy5MyPi3i9ToGUPPLU7g5pl%2FtAZ4QKEsl4Ycq9pcmnBUMlPDsLitFiewG4nORbAd%2BhvhBMUoQ29%2F7m3Vt4geLAFMVcfUE3EKA9w9l9j%2FPqoibd%2FQ2CgtR7QnQwhJQrhgh1j%2F16kTJXcrovbFMXpa0bsDuUATS00qPebTH%2FF2Om2vOgg%2FHJTb9v7LS4BzbbY%2FOwRXZlL%2BOy9oWeTdyjuc1awkGmVobFojAhnmKU7oOmCOAJkIPetq1IaxSCY2o3DnzREqF%2BJWwtUmID9hKG3zIxrZ3A8pcAWnq1BfZUlJ7N1ODYPvZUn9jDaxFLkCY%2FV8vNE8PtndNW7isqHFC%2F3Gsos%2FQPA7KuZXrzMYFDi%2FdEr1J124nZ4BE7c40YJv6YDGxGXB4SDWOTxBE94x01w8cLlo1NfPm8olJ0ukCEksIYNkUTpQOOGgsSwF9OwvQICc8ka4wdlN68qTAqSKWuQrn54zJthtkb2oE69eFPbluXELdyeCikNxH3OXjMjthMs%2FfiNRRWPg4w2lHnJ5svE32WUwRs5TBtSqTa8n2uIW3wDnYPKuOF0yEl0tloYU2joFp63sqYUIaniZvQzI07rys2YRtXw8HpyoR8SSWgTWcvMPHg9sQGOqUB5EkwyalaCyXTUMMKUlLuOaHJ4Am%2B2lRyFmwdchcPPnldc8BR3mZ0REPjUxt7mdrrA5ty7H%2BWjuIa5vth5faYJgp8wX3BWli0vOga7T3BW7suKN71FG5L45w91qiOS7SYmaCfm6f74NYAQJRjZ2e10s5Nt1%2FE3cyObbniDEZIOrab26QwcKofDyfcpmDJlWUa3VlpRS40GSjjzpwyrOzPtMHB%2BWob&X-Amz-Signature=60baab4aeae3025845bd939c9019e3b6f18adde5163dd692562bb5d78c1cfe55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DMA26RF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMcS%2FiFIc7%2BEndElkwMFCyosnT2jOKZsKvkOX2753XAAIgIos274vS%2BHuHC5lXIMowAtMbEpiqTo2%2Bl9hNODxfCKEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDM5r26cB6W%2F40H%2Fc%2BircA%2FNebcONz1mxE8iKXT2l07sxqJzybVAn1pkAT%2BZOCYF%2FN9JKGZuTxWG7T5%2BtXKQlSKUyw6V%2BtSRuPiiUr1HxIOrUJI27Qk6e8fHM4JGpelzAcIeSo8onsaKMlmJjhW2NdzCRheG11yBTrl0gq1vPaWP402wSh9rAa2NGeqT3uXn%2BXk%2Bn3AT6hWFxsxCt%2B1nCRCLfpez7jyxXLiA8RGRA%2BkgDgdXhKDSCcqzTiFatDH7AyKNndByPU9VxCkVQrURVNTVp8nmLRKGLM3DdxffwmXpBe%2F28flHJpvkB%2FCC%2BGtvGcKCByKEJryAppK%2Bcp6uGgYJgH5b6E2Bo115Ktz8T%2B%2FXqkGAACOyAvcuXiRdNksmxKZZcgBWgEetsN9ud5wfAN%2B7FrD%2FTv22R9Qd%2B5jfucSO8D2I2kciqhd0XtbUresDQir6hPtZc50kaIKhVf9eR%2BJheCPItMfLf3Iq2uov40tIaFqdlqPlgwP3ZJ5Td1p%2BIKf%2BHMPrah00QmorWc7KaPDxMz6NTNyQ%2B%2Fqf2STPm41VPZ%2BjAxz8WoTadHcXTZK%2BSdDugqdsQZ3z%2BQs7ASa6kbs9hwulhgywfn2RyyeYPYHKeogBE04AOCCzI8Ns8n05%2F1Ac5y2W40%2BrWfojyMMXg9sQGOqUBrwpcaqzpzeeZI9myFg3oGFnijHQ9JtsNvjLQ8bHYLnBeSiY4gsicMTZL7TNu%2F7eDoXeU6zR1T9xI5JY%2BpC0I8nAhAtUWPDJYrPEqqjVWP64zdARWPRg80y4s%2BJSFBFPQp%2FLkN%2FNWi9tG%2F6CDs20ALbWTZCFu0q7zJq%2BVc%2BX430yehOkX9keFQUOno3gzeqJWpbf%2Fx0kAD6s17EidPczWc9OVuQZx&X-Amz-Signature=3103f122ebc300765a51c142b32cdfa409cca702b4a102db582ce64338b80e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU3ZC2K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3CHvMR2LP4xqvy7ACEj2G6K0LGcoWIWuwkVsfXuy7bAiEAw5cSLalD7FQZtkk6oSDIVEglVnZk9TfmUA3sP%2Fzoqagq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJTReIpmvMTexS5hrSrcA1MyUIo7OwNOhP%2BikIFy5MyPi3i9ToGUPPLU7g5pl%2FtAZ4QKEsl4Ycq9pcmnBUMlPDsLitFiewG4nORbAd%2BhvhBMUoQ29%2F7m3Vt4geLAFMVcfUE3EKA9w9l9j%2FPqoibd%2FQ2CgtR7QnQwhJQrhgh1j%2F16kTJXcrovbFMXpa0bsDuUATS00qPebTH%2FF2Om2vOgg%2FHJTb9v7LS4BzbbY%2FOwRXZlL%2BOy9oWeTdyjuc1awkGmVobFojAhnmKU7oOmCOAJkIPetq1IaxSCY2o3DnzREqF%2BJWwtUmID9hKG3zIxrZ3A8pcAWnq1BfZUlJ7N1ODYPvZUn9jDaxFLkCY%2FV8vNE8PtndNW7isqHFC%2F3Gsos%2FQPA7KuZXrzMYFDi%2FdEr1J124nZ4BE7c40YJv6YDGxGXB4SDWOTxBE94x01w8cLlo1NfPm8olJ0ukCEksIYNkUTpQOOGgsSwF9OwvQICc8ka4wdlN68qTAqSKWuQrn54zJthtkb2oE69eFPbluXELdyeCikNxH3OXjMjthMs%2FfiNRRWPg4w2lHnJ5svE32WUwRs5TBtSqTa8n2uIW3wDnYPKuOF0yEl0tloYU2joFp63sqYUIaniZvQzI07rys2YRtXw8HpyoR8SSWgTWcvMPHg9sQGOqUB5EkwyalaCyXTUMMKUlLuOaHJ4Am%2B2lRyFmwdchcPPnldc8BR3mZ0REPjUxt7mdrrA5ty7H%2BWjuIa5vth5faYJgp8wX3BWli0vOga7T3BW7suKN71FG5L45w91qiOS7SYmaCfm6f74NYAQJRjZ2e10s5Nt1%2FE3cyObbniDEZIOrab26QwcKofDyfcpmDJlWUa3VlpRS40GSjjzpwyrOzPtMHB%2BWob&X-Amz-Signature=c489abe032a5775f715faad02a5c99c0f3f9797d2945a4292fb61def875a43b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OA55S3C%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4aJJo8RwvsmgrGc0%2B4MQh7ucFUaaX6v0y%2BtMHm4WQuAiEAhIl3zhyIMX2CtR9iZyjdyC%2F41xXvw6alfURSA93%2BGTIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDpzBjaesHX56GGm1yrcA6egGrPcOi0RsdSBEeHEA9y6wXRcegDzfT0fDBjTowGFz5uzbGzcP0a%2F50VD%2BEkQEhY6TKNPeV40EYsTSrMaYkeDMXrCfD1Cy2UTmvQqz2O5n7zGpDOS8KT9LH6NSShbzu%2BlpHmVt2L3M4mGdR8WV0qTV1EJ4eo4lz1xnk3vjlOQGb86CLEFyX02rGj1m5nGvnfIuzcL8%2FTda8e%2BPo1XmLqAdbHVhy4%2BNBFR3zafBs8BZNnzzCtMyuZf%2F8vK9PmcaScvyHvEtLk84KPGt7wgrBCywvZEsQ0GJ5STxedweB3elPjTcsbqBSqBhKFvMgOUx17v0mr7WV%2F5ePx4%2B8E2X39s7bTH08jQ5c6%2BKlaYssnxKN6ExGm2ibmsXw4FIUAzdsAuiCIb2vJr7lFlaI3dQ1JEyoEpLRD0%2BiTPZfLXvfPacRx%2FnyJsEfmEhzZDVKfG%2FDv7HPtVsDX37PfFm3zRErVH0CiHu5aB4wK%2B2Dx5v60n%2FNxVY0nBZJy11pv3cKqhD9hjhPDnYwVRS5c9xJW8GR6b5dsiLU4Il%2Bzr89ruAX%2BVv0rhhChPrJqQUs3FTMqlI6l6hBtsUXross6JjPT%2FL2fGd442jcsFYAOYGnNB%2BcNS3op%2BHSyS6DvVxnzeMOng9sQGOqUBNxw7%2FaM0Wx7Dd3%2BAjdnLRGpIhDGzdiAa82%2BDbaFF6jJQFEdKJhRMMVF4V1AH6MXkQDPRp878Nb9ANcRMzqOTVXoxwHV10it5%2BILIr8YAQRhZ%2BOXR3jnaxvrgbMThp1DUZMZLm5cEhaGoTbnTIwS5oJFbdr45lhWh27%2FXjMX6%2FyW3qjxVy8NL1WA%2F0jjiX5g%2BWDmY%2Fj3H9f56Kz9wRrV6ONzqVno1&X-Amz-Signature=b337f3c0a28d328c044d768d1ee51c2fb63d64886424a8bad68280d900d4d416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFQEWPO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2IIveGlA%2Bxn053FDUar%2B8LSe4mJ%2BT2o3zz3V6vmOryAiEA2ZBG3OdZreJrG8hOgjdC9hthqdFhocbBTeuKkSrwAe4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDK6CwKHjIUNjP7jiGyrcA1s1W%2Fn5TNYqhKSZDXJ4gGim%2B0xWyksfBkkhA6iRVuUUupdof8nVJtwUzOCfd%2BPMqRXFIbDzao3m7af1uz9N8TlYBT2EpdL7HQCGixbo%2FeGX8juzg0%2FpqRhtL52xt6YjXPct6Xcnmb35AIxyuzUCs%2FEIhrHRqlsdEZ89v743SzyRb%2BWNikw%2B%2FQ%2BKOWc8u7MUBgKxpLpXtGZhOPU0BGtjpcOVmZX1F92sIX0Dd60y8iwIzlVfeXwUK91DnokWKDKASM40OBfccnzd9Cr%2Bomgc%2F%2BeAXL5SKedO0UilmB9LVTm3CmWGJs0kjVksVSWOXs4eKEjMdlFMTvpP38BJrlQ751KwH%2FnSsjdlD9gaJsOcchqvh0VEmeeMGk6Cj6QThtRlmL3xMuDsMC%2FXBaliclzmU9LpK%2FoPHA68F6gQ7fOFYO1Ia3rqC3SJOvg3nqeHRGfFSFMkStQmkDkGWiZckNyHS6JqMcN9eeFCJHlIdTxl%2BOqPfXsXczTCaX%2BmwDvhl2masg21QtuopB0mkZLPriWVjF6%2FUYypcTLppDsi0XdPBi7h2BKLox3yxlETrrjCZF6pHu6idpHevpe6rzBvdfJgCCVAx4%2BO3gUFySO%2Feq0KhIPpHUgVpuWFTsznTDBaMNLf9sQGOqUBdSFc1q4BHtZ4AwjcX2B%2BsOXPa9LzJvEjMDklsc34ExoPqN%2BmEjGw3AdaWL8gHUMZOQ5NunbhSJhNa2CtGmQcQGcPYtyuUL0Tw974Z6nZPYBONlt7PhnCjWNW13sE8puqvAxS2NRV1r74Rx24QybHXyokfoMOqk%2BRSVe9tgWHZ9P9%2BuF0HkQ0hkCM1HGiCyzhVKG1vdd6fBRoxq%2FhKYCgISAmUNwT&X-Amz-Signature=f58e973f2c4aa05d1df6bd91b345b47a0b708241c3c47e15c76885313137c6de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGY66GC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJA%2F6%2BNNwjtv%2FIH1h11D%2F766ocWsAWVHLCUcE4EgS%2B3AiAm4w20a0VrgBXwmHg8nl8O3Sgrz93ksFXWWshQ5BbEtCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMPyGFnCqytMYtUJ2hKtwDOYSWNsgCd5xciqk6DD0Nk1UbHVvWoU4u4LU5Y%2BL6ExxXFevPDucNI4wLzqWEU1DG%2FI80%2F6RpsLI%2FYbCjuA2Q9ICf6Wv9NDb7y7SqTFRx8ozYraaFd9nPJuDC%2B3P5E%2BqkHpXQcdQfM1VtgiyRNPdBRnr1a6vdt0iApPVzGQUbrswzLxLZJLJGGhE145m1Nma9XvxPCV8aZzufa5FVTFbnWy%2FrI9CSedh86bmscBp3xQVD%2BN%2FqjAina0HXGPtNTih6AKBBEXYUZyN7QcpU7zkjdXeEzyotlGdVypmO7ad8oi4%2FvE8G%2BrFq1gn4xRzC4HJvMOZBbndCf1Hx8NbZTan40xSazQic4WtVsdGlieO6in6%2B3VC6%2BK1ZOKHYEwP3K32bc3NzUzpKHb0tM5C1WIaP0MERxMe04lc9O4ntwfacWN9dIRM3AdeW%2FmLCdWRivspJhYVVcxoJ%2F6WwLn5A1FUceo%2FWquO%2FVbgemZgLfQWUIMiLnQrDOVeHKbAg7IdsdnS9AtPDbwuRKt9DP7HaWPO4qrJIUtwJoCWW8TuZNmRooRwDK%2F6wo4Znzrr3mhsK3cYt02ai2gwy1NOGZo76u3cqIX9Ykr1xWxgocJRW%2B4KuE9a%2F86BgZTS2BuZfLK8wkOD2xAY6pgFWokyfUyjVCP4mAbSU4wsCBdzIGAD9ERPpbtG2WlS2Uysan0UUUBxkx7rLyjQCVxBXI2iXlS%2FvmiEydTGOONzBtKijc3RIGE2uNXzqYRtHUS%2FqRNrO9RTeUkrvnW2ZrlALaj09ke9hICd0GFbYMPE6uokxZWO5aXOSYgBLevICBRZWStW4Tbfiky8jaNbJqzEhDxWMc7JQYhSMFEqfE8zpjlDB%2BG7R&X-Amz-Signature=6d0c174a89d932b7dec49b0acc09223a690f76c7ece4ac1b0abc921d8aa403c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWD3XOM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0QPM99whpSK0%2F6LB%2F2MCV%2Fpf4fw5WEF3lzwjVRKZ7lAiA6OCs5c81rB6bmI0H7FAIkMGc7%2Bu5ad3nZPD3oKbgF2Sr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMXeOfYZD0KhoeazeyKtwDYuIU3cB%2Br%2F0D6hsfQ3lGK6bhB4cXQqtbP%2BB1XemTY7vO1nnilhvVqehJ%2FrGv7Rg538PGOWejRy5TnAwiEZqzRRnFgkYCVHI6DVnGY9cfKNOYjM%2FeW4Iw2IXiaw6vETOx4nlzjUULXYiTx7dGDpdm19ECRZcyiQlQkndmBYYpnaI82h43V5nFZu8%2F5%2BDvOw5dRJkgFyLEJLKy3uX6Yuqx1u8Vx2H6L4n4Vu4NlDEe9EgN6SZ5YWUhTt02TXbzGMNe%2FvKkK16S4pnnxOZJTNyr2V8dOeQf5jTOchei3ti2JqPPGY%2FGoKuDPT4S0p5GQUpPidDhSoEEAB1q8%2Fgj%2Brcc3vV%2BxNiqKSLb2QYy6cYGGcnLRWH4JSXGwYWGlQanYg9093D1ZKZb85NXP6h3jKph8gbixS%2FCrsqysQr3k3q%2FdkjsUi8WpFgRj37vqhULZGcZMPwqguu0talNCdqkn67aNU7zd4lpAA9hynTkaM3ETRe%2FTHIhZm4TP%2FhotlC%2B1o1YcNaTOCX9hRRM8%2FOLYq2KZG6oIZ6CQ2nx46BEA4YPmN%2FzMvK4%2F%2BobRRRKjSAFkJwjkVisT41YqOBHs4qdca94yMbKIHQJI9o5Z3z8aXyQr9VSKo2LcZtLpi2YU1ow9eD2xAY6pgG4KkFBocLV%2FWESMDGpaW6EZSUaMfEBdtHD%2BkBu9tKrdHkO3FXtQ31jTVnIho5uDc0E6OykWCQ4DuMgpXEKB6LPps5mK3MeWrrhpuLZYgrYpvApCTd4OPHqxpFQEDlH2RoKXeUSgpwO3pOmflwdqEyy9NLo3ThNKnIMPJIKuAQbcoYtGPvu0fyur5CvQ4TFYqdAbRX8SeiSnvHmSevN%2FIVp8b4WGFXz&X-Amz-Signature=0ca27362ab02df20ff99783cf7d802fa47877c89b219bab4d2940b759ec26271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5WHMSQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgPvu0IKIe5JViuhNgPwddkp8Ljja0a5dlcsncaHgYPAiEAiwawT3vNeuWmAUg6ZeFcg8M8yELN8Sh4YqcLYw0MBbEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDASTDMKgQiz4TcdvsCrcA2CBIWVeI%2BL6hKaKdtaNqtQ8138EpQr7OxtXmLlA%2BwZYK9NFbl1nKENlEz9A7TstGDoEB4XlIfBTpbba%2FIYyu73d5hHeeQHOpKhL2SJgGZh8xtIF3mDCN4QTuH1E34QiTiY0CpMN5JpCuKfDlW3U3PQaPUQZOSiBF%2FKUJcuuwRFy4X%2Bz3Qdy7MRaK4%2BAdXQFszmFw9KysNJgDknAfUR2J4wDae2NAa%2BkeXEzATw32qaju0d9ZPjjN9LciJYc%2FBYZ4Nbs9Ntg%2FfH50KiSEILKKLrzcp%2FrK1xcwmTuePZGLyWrJHju1JqOUs1PAIPKp4sVYjF88nB3cLIADNMo5IbkQuoEfzjnj4%2FTRkXCdEA1SXdKQKaCBMsSGigiM9SOcuXHyf%2FkRIWchmKyaR1sWAOJbIiRDHbeyTzILX6q4p0IP3N438ZF4%2FQ%2FFBBBM1a8BEJA8KkwQ05EN2pABCa9gMl0X0tSSceUYKAhD19CgUIKC81BVCHwYVrEgTHZt6wKrUMuWbh5LiQj4wSw6e1PD5FVdACP6qT9NDm8RdTpE63fISIHXbL8V8gSDyKsftD1f0kpEXex%2Fjn7IddUADwKWhhCCy1wTUkFsaD9ldOQkwIKNDEnwXD1spK%2FuF4run%2BAMIbg9sQGOqUB9%2FxERbiIbIyMpHqmITeUssag7S2Xq5B2V%2FqPS%2BfCIzUk8QnXpBgvY6iUhRFEPhaQURUTHdneWJyEnNjB1fW9LdtcxIujpTYboK78i90OOYlUUJkpshwNRhmKHl8dzLxg%2F892%2BF6bmfyVxTv4I8OkadWfL0O8MKvmwRKKE%2FbgiitGMGlsHiARTAFiIcmNjQp%2BOe8o8xFL4y39%2FeejVQODcdkqVnkf&X-Amz-Signature=87efd9bbcf1ff7015be6acd138ba8c95c0bb390fd4a4465fcfa7d784994495b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU3ZC2K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3CHvMR2LP4xqvy7ACEj2G6K0LGcoWIWuwkVsfXuy7bAiEAw5cSLalD7FQZtkk6oSDIVEglVnZk9TfmUA3sP%2Fzoqagq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJTReIpmvMTexS5hrSrcA1MyUIo7OwNOhP%2BikIFy5MyPi3i9ToGUPPLU7g5pl%2FtAZ4QKEsl4Ycq9pcmnBUMlPDsLitFiewG4nORbAd%2BhvhBMUoQ29%2F7m3Vt4geLAFMVcfUE3EKA9w9l9j%2FPqoibd%2FQ2CgtR7QnQwhJQrhgh1j%2F16kTJXcrovbFMXpa0bsDuUATS00qPebTH%2FF2Om2vOgg%2FHJTb9v7LS4BzbbY%2FOwRXZlL%2BOy9oWeTdyjuc1awkGmVobFojAhnmKU7oOmCOAJkIPetq1IaxSCY2o3DnzREqF%2BJWwtUmID9hKG3zIxrZ3A8pcAWnq1BfZUlJ7N1ODYPvZUn9jDaxFLkCY%2FV8vNE8PtndNW7isqHFC%2F3Gsos%2FQPA7KuZXrzMYFDi%2FdEr1J124nZ4BE7c40YJv6YDGxGXB4SDWOTxBE94x01w8cLlo1NfPm8olJ0ukCEksIYNkUTpQOOGgsSwF9OwvQICc8ka4wdlN68qTAqSKWuQrn54zJthtkb2oE69eFPbluXELdyeCikNxH3OXjMjthMs%2FfiNRRWPg4w2lHnJ5svE32WUwRs5TBtSqTa8n2uIW3wDnYPKuOF0yEl0tloYU2joFp63sqYUIaniZvQzI07rys2YRtXw8HpyoR8SSWgTWcvMPHg9sQGOqUB5EkwyalaCyXTUMMKUlLuOaHJ4Am%2B2lRyFmwdchcPPnldc8BR3mZ0REPjUxt7mdrrA5ty7H%2BWjuIa5vth5faYJgp8wX3BWli0vOga7T3BW7suKN71FG5L45w91qiOS7SYmaCfm6f74NYAQJRjZ2e10s5Nt1%2FE3cyObbniDEZIOrab26QwcKofDyfcpmDJlWUa3VlpRS40GSjjzpwyrOzPtMHB%2BWob&X-Amz-Signature=2ce0e53284080c6d4fa36bde3d77b641406820be3fef7d46dfed14bdbf30acd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU3ZC2K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3CHvMR2LP4xqvy7ACEj2G6K0LGcoWIWuwkVsfXuy7bAiEAw5cSLalD7FQZtkk6oSDIVEglVnZk9TfmUA3sP%2Fzoqagq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJTReIpmvMTexS5hrSrcA1MyUIo7OwNOhP%2BikIFy5MyPi3i9ToGUPPLU7g5pl%2FtAZ4QKEsl4Ycq9pcmnBUMlPDsLitFiewG4nORbAd%2BhvhBMUoQ29%2F7m3Vt4geLAFMVcfUE3EKA9w9l9j%2FPqoibd%2FQ2CgtR7QnQwhJQrhgh1j%2F16kTJXcrovbFMXpa0bsDuUATS00qPebTH%2FF2Om2vOgg%2FHJTb9v7LS4BzbbY%2FOwRXZlL%2BOy9oWeTdyjuc1awkGmVobFojAhnmKU7oOmCOAJkIPetq1IaxSCY2o3DnzREqF%2BJWwtUmID9hKG3zIxrZ3A8pcAWnq1BfZUlJ7N1ODYPvZUn9jDaxFLkCY%2FV8vNE8PtndNW7isqHFC%2F3Gsos%2FQPA7KuZXrzMYFDi%2FdEr1J124nZ4BE7c40YJv6YDGxGXB4SDWOTxBE94x01w8cLlo1NfPm8olJ0ukCEksIYNkUTpQOOGgsSwF9OwvQICc8ka4wdlN68qTAqSKWuQrn54zJthtkb2oE69eFPbluXELdyeCikNxH3OXjMjthMs%2FfiNRRWPg4w2lHnJ5svE32WUwRs5TBtSqTa8n2uIW3wDnYPKuOF0yEl0tloYU2joFp63sqYUIaniZvQzI07rys2YRtXw8HpyoR8SSWgTWcvMPHg9sQGOqUB5EkwyalaCyXTUMMKUlLuOaHJ4Am%2B2lRyFmwdchcPPnldc8BR3mZ0REPjUxt7mdrrA5ty7H%2BWjuIa5vth5faYJgp8wX3BWli0vOga7T3BW7suKN71FG5L45w91qiOS7SYmaCfm6f74NYAQJRjZ2e10s5Nt1%2FE3cyObbniDEZIOrab26QwcKofDyfcpmDJlWUa3VlpRS40GSjjzpwyrOzPtMHB%2BWob&X-Amz-Signature=ce0f6ea183f5e1270334d63e0a87afd61c4c610256d149e11ebb9442a770a160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKQB2ETI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8ITC8OIJEJbPa80W1sJ1PAD0l7w%2BxSRTibEsuaX09bAiBnN%2FSdgcVyp96rePbhhsSk0HYNN50obw8llhRN0FE56ir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMmb3koeNVONQCMCyEKtwDIPrzGMc5J0ofFOcBRA%2BB62iXul%2F%2Bk%2BPUZmefGOj3DHjKrPRO7jYn4YNSHM9nwZVljF6Pu5K05Bo84KPcIMsbLyT8FxyKgePvurZKbcZVaTQ0eIIiSqjaB2%2B%2BnA4tqhI77PeiU2gcFrdk%2BIpM7hTcCuOtQtp2eBeW%2FnA4K7r4DFwSiGD59qFRU%2BBF6fpRsNTFR4nVMglM1qCiToLFlLMz5QN9p0Sqx2kphWz6quGj%2FhoGRKnsD1834HKV7PlnF7M6tJHUs9rWGQgCkEO9IHfdR%2B7RdEqLNelI0OLwmuMcwNUfg5d7KeqIqljAS9tfd2HKmwYK0BtLhCRbjhm1L6oiuZ9trdM160x77GpUizJLBrw5AiorD5LUJ%2BOcMspngbPYEeh%2FEL7aXJf6G6txtkbqWAx5CRp0Dig9ZkWxisghYIJqcsB15M7WJb%2FGgWi2yD7U4oE5MEhDu4qxyPDM4CkrVPEfyMyN8e%2BRNCPo3j7WfbfpAmOKjUcrguKAx7r3rBLoe5gZBeW31pn0Wpz%2BLjuVh7yzsUpzzRoyZilW%2FsEPy3pOnB4atPuRze8SeFvPVDVrXWa20Kf6TwrWl2HoL7TINdVvhNc1dO8XsXY%2BFBNlMt5N7DUyfiumQA6R6ucw8d%2F2xAY6pgF%2Bwu4Wu4xIKnV%2B4ZmEqhYlSiSTXBuPJuXkaKypNlsi%2B%2BI9hPr1idBjpO7cYyMbrdD%2BdSWPu0zEena4z8OCiID8hAwF5iDASFUwf0vXE%2BrWsn5uy86cUy0rv7JOhzWXy47UxNM4lqI5DZzpb3swBgRmTJqoClWkoqlTJ%2BLlg1t%2FCJyRTVijyIyXjCnuwH449TUqSNZnGavLhNDtLkffLhbhLv8wwxoZ&X-Amz-Signature=1614f3e018c54a2a493037658c8c834b118f59f96d303df97ee2eeed3f113c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKQB2ETI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8ITC8OIJEJbPa80W1sJ1PAD0l7w%2BxSRTibEsuaX09bAiBnN%2FSdgcVyp96rePbhhsSk0HYNN50obw8llhRN0FE56ir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMmb3koeNVONQCMCyEKtwDIPrzGMc5J0ofFOcBRA%2BB62iXul%2F%2Bk%2BPUZmefGOj3DHjKrPRO7jYn4YNSHM9nwZVljF6Pu5K05Bo84KPcIMsbLyT8FxyKgePvurZKbcZVaTQ0eIIiSqjaB2%2B%2BnA4tqhI77PeiU2gcFrdk%2BIpM7hTcCuOtQtp2eBeW%2FnA4K7r4DFwSiGD59qFRU%2BBF6fpRsNTFR4nVMglM1qCiToLFlLMz5QN9p0Sqx2kphWz6quGj%2FhoGRKnsD1834HKV7PlnF7M6tJHUs9rWGQgCkEO9IHfdR%2B7RdEqLNelI0OLwmuMcwNUfg5d7KeqIqljAS9tfd2HKmwYK0BtLhCRbjhm1L6oiuZ9trdM160x77GpUizJLBrw5AiorD5LUJ%2BOcMspngbPYEeh%2FEL7aXJf6G6txtkbqWAx5CRp0Dig9ZkWxisghYIJqcsB15M7WJb%2FGgWi2yD7U4oE5MEhDu4qxyPDM4CkrVPEfyMyN8e%2BRNCPo3j7WfbfpAmOKjUcrguKAx7r3rBLoe5gZBeW31pn0Wpz%2BLjuVh7yzsUpzzRoyZilW%2FsEPy3pOnB4atPuRze8SeFvPVDVrXWa20Kf6TwrWl2HoL7TINdVvhNc1dO8XsXY%2BFBNlMt5N7DUyfiumQA6R6ucw8d%2F2xAY6pgF%2Bwu4Wu4xIKnV%2B4ZmEqhYlSiSTXBuPJuXkaKypNlsi%2B%2BI9hPr1idBjpO7cYyMbrdD%2BdSWPu0zEena4z8OCiID8hAwF5iDASFUwf0vXE%2BrWsn5uy86cUy0rv7JOhzWXy47UxNM4lqI5DZzpb3swBgRmTJqoClWkoqlTJ%2BLlg1t%2FCJyRTVijyIyXjCnuwH449TUqSNZnGavLhNDtLkffLhbhLv8wwxoZ&X-Amz-Signature=d816b9f7b35ab8374a89e5237a6368c32defb2ec04a6a6d1285584f7eb7bfb76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKQB2ETI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8ITC8OIJEJbPa80W1sJ1PAD0l7w%2BxSRTibEsuaX09bAiBnN%2FSdgcVyp96rePbhhsSk0HYNN50obw8llhRN0FE56ir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMmb3koeNVONQCMCyEKtwDIPrzGMc5J0ofFOcBRA%2BB62iXul%2F%2Bk%2BPUZmefGOj3DHjKrPRO7jYn4YNSHM9nwZVljF6Pu5K05Bo84KPcIMsbLyT8FxyKgePvurZKbcZVaTQ0eIIiSqjaB2%2B%2BnA4tqhI77PeiU2gcFrdk%2BIpM7hTcCuOtQtp2eBeW%2FnA4K7r4DFwSiGD59qFRU%2BBF6fpRsNTFR4nVMglM1qCiToLFlLMz5QN9p0Sqx2kphWz6quGj%2FhoGRKnsD1834HKV7PlnF7M6tJHUs9rWGQgCkEO9IHfdR%2B7RdEqLNelI0OLwmuMcwNUfg5d7KeqIqljAS9tfd2HKmwYK0BtLhCRbjhm1L6oiuZ9trdM160x77GpUizJLBrw5AiorD5LUJ%2BOcMspngbPYEeh%2FEL7aXJf6G6txtkbqWAx5CRp0Dig9ZkWxisghYIJqcsB15M7WJb%2FGgWi2yD7U4oE5MEhDu4qxyPDM4CkrVPEfyMyN8e%2BRNCPo3j7WfbfpAmOKjUcrguKAx7r3rBLoe5gZBeW31pn0Wpz%2BLjuVh7yzsUpzzRoyZilW%2FsEPy3pOnB4atPuRze8SeFvPVDVrXWa20Kf6TwrWl2HoL7TINdVvhNc1dO8XsXY%2BFBNlMt5N7DUyfiumQA6R6ucw8d%2F2xAY6pgF%2Bwu4Wu4xIKnV%2B4ZmEqhYlSiSTXBuPJuXkaKypNlsi%2B%2BI9hPr1idBjpO7cYyMbrdD%2BdSWPu0zEena4z8OCiID8hAwF5iDASFUwf0vXE%2BrWsn5uy86cUy0rv7JOhzWXy47UxNM4lqI5DZzpb3swBgRmTJqoClWkoqlTJ%2BLlg1t%2FCJyRTVijyIyXjCnuwH449TUqSNZnGavLhNDtLkffLhbhLv8wwxoZ&X-Amz-Signature=e3354e0505f5cc3ed114bd8e6c9ed66e175060e321ca13d0bd8c1d25420c9d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKQB2ETI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8ITC8OIJEJbPa80W1sJ1PAD0l7w%2BxSRTibEsuaX09bAiBnN%2FSdgcVyp96rePbhhsSk0HYNN50obw8llhRN0FE56ir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMmb3koeNVONQCMCyEKtwDIPrzGMc5J0ofFOcBRA%2BB62iXul%2F%2Bk%2BPUZmefGOj3DHjKrPRO7jYn4YNSHM9nwZVljF6Pu5K05Bo84KPcIMsbLyT8FxyKgePvurZKbcZVaTQ0eIIiSqjaB2%2B%2BnA4tqhI77PeiU2gcFrdk%2BIpM7hTcCuOtQtp2eBeW%2FnA4K7r4DFwSiGD59qFRU%2BBF6fpRsNTFR4nVMglM1qCiToLFlLMz5QN9p0Sqx2kphWz6quGj%2FhoGRKnsD1834HKV7PlnF7M6tJHUs9rWGQgCkEO9IHfdR%2B7RdEqLNelI0OLwmuMcwNUfg5d7KeqIqljAS9tfd2HKmwYK0BtLhCRbjhm1L6oiuZ9trdM160x77GpUizJLBrw5AiorD5LUJ%2BOcMspngbPYEeh%2FEL7aXJf6G6txtkbqWAx5CRp0Dig9ZkWxisghYIJqcsB15M7WJb%2FGgWi2yD7U4oE5MEhDu4qxyPDM4CkrVPEfyMyN8e%2BRNCPo3j7WfbfpAmOKjUcrguKAx7r3rBLoe5gZBeW31pn0Wpz%2BLjuVh7yzsUpzzRoyZilW%2FsEPy3pOnB4atPuRze8SeFvPVDVrXWa20Kf6TwrWl2HoL7TINdVvhNc1dO8XsXY%2BFBNlMt5N7DUyfiumQA6R6ucw8d%2F2xAY6pgF%2Bwu4Wu4xIKnV%2B4ZmEqhYlSiSTXBuPJuXkaKypNlsi%2B%2BI9hPr1idBjpO7cYyMbrdD%2BdSWPu0zEena4z8OCiID8hAwF5iDASFUwf0vXE%2BrWsn5uy86cUy0rv7JOhzWXy47UxNM4lqI5DZzpb3swBgRmTJqoClWkoqlTJ%2BLlg1t%2FCJyRTVijyIyXjCnuwH449TUqSNZnGavLhNDtLkffLhbhLv8wwxoZ&X-Amz-Signature=9c17d3e6b76e24be064da892f843529cd60d34ea611af19e99c99a295041957a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKQB2ETI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8ITC8OIJEJbPa80W1sJ1PAD0l7w%2BxSRTibEsuaX09bAiBnN%2FSdgcVyp96rePbhhsSk0HYNN50obw8llhRN0FE56ir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMmb3koeNVONQCMCyEKtwDIPrzGMc5J0ofFOcBRA%2BB62iXul%2F%2Bk%2BPUZmefGOj3DHjKrPRO7jYn4YNSHM9nwZVljF6Pu5K05Bo84KPcIMsbLyT8FxyKgePvurZKbcZVaTQ0eIIiSqjaB2%2B%2BnA4tqhI77PeiU2gcFrdk%2BIpM7hTcCuOtQtp2eBeW%2FnA4K7r4DFwSiGD59qFRU%2BBF6fpRsNTFR4nVMglM1qCiToLFlLMz5QN9p0Sqx2kphWz6quGj%2FhoGRKnsD1834HKV7PlnF7M6tJHUs9rWGQgCkEO9IHfdR%2B7RdEqLNelI0OLwmuMcwNUfg5d7KeqIqljAS9tfd2HKmwYK0BtLhCRbjhm1L6oiuZ9trdM160x77GpUizJLBrw5AiorD5LUJ%2BOcMspngbPYEeh%2FEL7aXJf6G6txtkbqWAx5CRp0Dig9ZkWxisghYIJqcsB15M7WJb%2FGgWi2yD7U4oE5MEhDu4qxyPDM4CkrVPEfyMyN8e%2BRNCPo3j7WfbfpAmOKjUcrguKAx7r3rBLoe5gZBeW31pn0Wpz%2BLjuVh7yzsUpzzRoyZilW%2FsEPy3pOnB4atPuRze8SeFvPVDVrXWa20Kf6TwrWl2HoL7TINdVvhNc1dO8XsXY%2BFBNlMt5N7DUyfiumQA6R6ucw8d%2F2xAY6pgF%2Bwu4Wu4xIKnV%2B4ZmEqhYlSiSTXBuPJuXkaKypNlsi%2B%2BI9hPr1idBjpO7cYyMbrdD%2BdSWPu0zEena4z8OCiID8hAwF5iDASFUwf0vXE%2BrWsn5uy86cUy0rv7JOhzWXy47UxNM4lqI5DZzpb3swBgRmTJqoClWkoqlTJ%2BLlg1t%2FCJyRTVijyIyXjCnuwH449TUqSNZnGavLhNDtLkffLhbhLv8wwxoZ&X-Amz-Signature=3ac90e6dd8fc40f481992639a4bb71cec886b768526f8197f7d4d2efb9ca5a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKQB2ETI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8ITC8OIJEJbPa80W1sJ1PAD0l7w%2BxSRTibEsuaX09bAiBnN%2FSdgcVyp96rePbhhsSk0HYNN50obw8llhRN0FE56ir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMmb3koeNVONQCMCyEKtwDIPrzGMc5J0ofFOcBRA%2BB62iXul%2F%2Bk%2BPUZmefGOj3DHjKrPRO7jYn4YNSHM9nwZVljF6Pu5K05Bo84KPcIMsbLyT8FxyKgePvurZKbcZVaTQ0eIIiSqjaB2%2B%2BnA4tqhI77PeiU2gcFrdk%2BIpM7hTcCuOtQtp2eBeW%2FnA4K7r4DFwSiGD59qFRU%2BBF6fpRsNTFR4nVMglM1qCiToLFlLMz5QN9p0Sqx2kphWz6quGj%2FhoGRKnsD1834HKV7PlnF7M6tJHUs9rWGQgCkEO9IHfdR%2B7RdEqLNelI0OLwmuMcwNUfg5d7KeqIqljAS9tfd2HKmwYK0BtLhCRbjhm1L6oiuZ9trdM160x77GpUizJLBrw5AiorD5LUJ%2BOcMspngbPYEeh%2FEL7aXJf6G6txtkbqWAx5CRp0Dig9ZkWxisghYIJqcsB15M7WJb%2FGgWi2yD7U4oE5MEhDu4qxyPDM4CkrVPEfyMyN8e%2BRNCPo3j7WfbfpAmOKjUcrguKAx7r3rBLoe5gZBeW31pn0Wpz%2BLjuVh7yzsUpzzRoyZilW%2FsEPy3pOnB4atPuRze8SeFvPVDVrXWa20Kf6TwrWl2HoL7TINdVvhNc1dO8XsXY%2BFBNlMt5N7DUyfiumQA6R6ucw8d%2F2xAY6pgF%2Bwu4Wu4xIKnV%2B4ZmEqhYlSiSTXBuPJuXkaKypNlsi%2B%2BI9hPr1idBjpO7cYyMbrdD%2BdSWPu0zEena4z8OCiID8hAwF5iDASFUwf0vXE%2BrWsn5uy86cUy0rv7JOhzWXy47UxNM4lqI5DZzpb3swBgRmTJqoClWkoqlTJ%2BLlg1t%2FCJyRTVijyIyXjCnuwH449TUqSNZnGavLhNDtLkffLhbhLv8wwxoZ&X-Amz-Signature=a6ae493b0cddf0f1ecdb501d204deaee9919cbfa0671a96bf3e33e0a80a1eded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKQB2ETI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8ITC8OIJEJbPa80W1sJ1PAD0l7w%2BxSRTibEsuaX09bAiBnN%2FSdgcVyp96rePbhhsSk0HYNN50obw8llhRN0FE56ir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMmb3koeNVONQCMCyEKtwDIPrzGMc5J0ofFOcBRA%2BB62iXul%2F%2Bk%2BPUZmefGOj3DHjKrPRO7jYn4YNSHM9nwZVljF6Pu5K05Bo84KPcIMsbLyT8FxyKgePvurZKbcZVaTQ0eIIiSqjaB2%2B%2BnA4tqhI77PeiU2gcFrdk%2BIpM7hTcCuOtQtp2eBeW%2FnA4K7r4DFwSiGD59qFRU%2BBF6fpRsNTFR4nVMglM1qCiToLFlLMz5QN9p0Sqx2kphWz6quGj%2FhoGRKnsD1834HKV7PlnF7M6tJHUs9rWGQgCkEO9IHfdR%2B7RdEqLNelI0OLwmuMcwNUfg5d7KeqIqljAS9tfd2HKmwYK0BtLhCRbjhm1L6oiuZ9trdM160x77GpUizJLBrw5AiorD5LUJ%2BOcMspngbPYEeh%2FEL7aXJf6G6txtkbqWAx5CRp0Dig9ZkWxisghYIJqcsB15M7WJb%2FGgWi2yD7U4oE5MEhDu4qxyPDM4CkrVPEfyMyN8e%2BRNCPo3j7WfbfpAmOKjUcrguKAx7r3rBLoe5gZBeW31pn0Wpz%2BLjuVh7yzsUpzzRoyZilW%2FsEPy3pOnB4atPuRze8SeFvPVDVrXWa20Kf6TwrWl2HoL7TINdVvhNc1dO8XsXY%2BFBNlMt5N7DUyfiumQA6R6ucw8d%2F2xAY6pgF%2Bwu4Wu4xIKnV%2B4ZmEqhYlSiSTXBuPJuXkaKypNlsi%2B%2BI9hPr1idBjpO7cYyMbrdD%2BdSWPu0zEena4z8OCiID8hAwF5iDASFUwf0vXE%2BrWsn5uy86cUy0rv7JOhzWXy47UxNM4lqI5DZzpb3swBgRmTJqoClWkoqlTJ%2BLlg1t%2FCJyRTVijyIyXjCnuwH449TUqSNZnGavLhNDtLkffLhbhLv8wwxoZ&X-Amz-Signature=e3354e0505f5cc3ed114bd8e6c9ed66e175060e321ca13d0bd8c1d25420c9d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKQB2ETI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8ITC8OIJEJbPa80W1sJ1PAD0l7w%2BxSRTibEsuaX09bAiBnN%2FSdgcVyp96rePbhhsSk0HYNN50obw8llhRN0FE56ir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMmb3koeNVONQCMCyEKtwDIPrzGMc5J0ofFOcBRA%2BB62iXul%2F%2Bk%2BPUZmefGOj3DHjKrPRO7jYn4YNSHM9nwZVljF6Pu5K05Bo84KPcIMsbLyT8FxyKgePvurZKbcZVaTQ0eIIiSqjaB2%2B%2BnA4tqhI77PeiU2gcFrdk%2BIpM7hTcCuOtQtp2eBeW%2FnA4K7r4DFwSiGD59qFRU%2BBF6fpRsNTFR4nVMglM1qCiToLFlLMz5QN9p0Sqx2kphWz6quGj%2FhoGRKnsD1834HKV7PlnF7M6tJHUs9rWGQgCkEO9IHfdR%2B7RdEqLNelI0OLwmuMcwNUfg5d7KeqIqljAS9tfd2HKmwYK0BtLhCRbjhm1L6oiuZ9trdM160x77GpUizJLBrw5AiorD5LUJ%2BOcMspngbPYEeh%2FEL7aXJf6G6txtkbqWAx5CRp0Dig9ZkWxisghYIJqcsB15M7WJb%2FGgWi2yD7U4oE5MEhDu4qxyPDM4CkrVPEfyMyN8e%2BRNCPo3j7WfbfpAmOKjUcrguKAx7r3rBLoe5gZBeW31pn0Wpz%2BLjuVh7yzsUpzzRoyZilW%2FsEPy3pOnB4atPuRze8SeFvPVDVrXWa20Kf6TwrWl2HoL7TINdVvhNc1dO8XsXY%2BFBNlMt5N7DUyfiumQA6R6ucw8d%2F2xAY6pgF%2Bwu4Wu4xIKnV%2B4ZmEqhYlSiSTXBuPJuXkaKypNlsi%2B%2BI9hPr1idBjpO7cYyMbrdD%2BdSWPu0zEena4z8OCiID8hAwF5iDASFUwf0vXE%2BrWsn5uy86cUy0rv7JOhzWXy47UxNM4lqI5DZzpb3swBgRmTJqoClWkoqlTJ%2BLlg1t%2FCJyRTVijyIyXjCnuwH449TUqSNZnGavLhNDtLkffLhbhLv8wwxoZ&X-Amz-Signature=fe6a55d452efb02ef01db20f033b7462fcf6e638b08439f4aed0a97814ca8349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKQB2ETI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8ITC8OIJEJbPa80W1sJ1PAD0l7w%2BxSRTibEsuaX09bAiBnN%2FSdgcVyp96rePbhhsSk0HYNN50obw8llhRN0FE56ir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMmb3koeNVONQCMCyEKtwDIPrzGMc5J0ofFOcBRA%2BB62iXul%2F%2Bk%2BPUZmefGOj3DHjKrPRO7jYn4YNSHM9nwZVljF6Pu5K05Bo84KPcIMsbLyT8FxyKgePvurZKbcZVaTQ0eIIiSqjaB2%2B%2BnA4tqhI77PeiU2gcFrdk%2BIpM7hTcCuOtQtp2eBeW%2FnA4K7r4DFwSiGD59qFRU%2BBF6fpRsNTFR4nVMglM1qCiToLFlLMz5QN9p0Sqx2kphWz6quGj%2FhoGRKnsD1834HKV7PlnF7M6tJHUs9rWGQgCkEO9IHfdR%2B7RdEqLNelI0OLwmuMcwNUfg5d7KeqIqljAS9tfd2HKmwYK0BtLhCRbjhm1L6oiuZ9trdM160x77GpUizJLBrw5AiorD5LUJ%2BOcMspngbPYEeh%2FEL7aXJf6G6txtkbqWAx5CRp0Dig9ZkWxisghYIJqcsB15M7WJb%2FGgWi2yD7U4oE5MEhDu4qxyPDM4CkrVPEfyMyN8e%2BRNCPo3j7WfbfpAmOKjUcrguKAx7r3rBLoe5gZBeW31pn0Wpz%2BLjuVh7yzsUpzzRoyZilW%2FsEPy3pOnB4atPuRze8SeFvPVDVrXWa20Kf6TwrWl2HoL7TINdVvhNc1dO8XsXY%2BFBNlMt5N7DUyfiumQA6R6ucw8d%2F2xAY6pgF%2Bwu4Wu4xIKnV%2B4ZmEqhYlSiSTXBuPJuXkaKypNlsi%2B%2BI9hPr1idBjpO7cYyMbrdD%2BdSWPu0zEena4z8OCiID8hAwF5iDASFUwf0vXE%2BrWsn5uy86cUy0rv7JOhzWXy47UxNM4lqI5DZzpb3swBgRmTJqoClWkoqlTJ%2BLlg1t%2FCJyRTVijyIyXjCnuwH449TUqSNZnGavLhNDtLkffLhbhLv8wwxoZ&X-Amz-Signature=cbe2a5f453ad2880d0a3758176136306f060aa389f00532653136cba6fcec50b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKQB2ETI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8ITC8OIJEJbPa80W1sJ1PAD0l7w%2BxSRTibEsuaX09bAiBnN%2FSdgcVyp96rePbhhsSk0HYNN50obw8llhRN0FE56ir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMmb3koeNVONQCMCyEKtwDIPrzGMc5J0ofFOcBRA%2BB62iXul%2F%2Bk%2BPUZmefGOj3DHjKrPRO7jYn4YNSHM9nwZVljF6Pu5K05Bo84KPcIMsbLyT8FxyKgePvurZKbcZVaTQ0eIIiSqjaB2%2B%2BnA4tqhI77PeiU2gcFrdk%2BIpM7hTcCuOtQtp2eBeW%2FnA4K7r4DFwSiGD59qFRU%2BBF6fpRsNTFR4nVMglM1qCiToLFlLMz5QN9p0Sqx2kphWz6quGj%2FhoGRKnsD1834HKV7PlnF7M6tJHUs9rWGQgCkEO9IHfdR%2B7RdEqLNelI0OLwmuMcwNUfg5d7KeqIqljAS9tfd2HKmwYK0BtLhCRbjhm1L6oiuZ9trdM160x77GpUizJLBrw5AiorD5LUJ%2BOcMspngbPYEeh%2FEL7aXJf6G6txtkbqWAx5CRp0Dig9ZkWxisghYIJqcsB15M7WJb%2FGgWi2yD7U4oE5MEhDu4qxyPDM4CkrVPEfyMyN8e%2BRNCPo3j7WfbfpAmOKjUcrguKAx7r3rBLoe5gZBeW31pn0Wpz%2BLjuVh7yzsUpzzRoyZilW%2FsEPy3pOnB4atPuRze8SeFvPVDVrXWa20Kf6TwrWl2HoL7TINdVvhNc1dO8XsXY%2BFBNlMt5N7DUyfiumQA6R6ucw8d%2F2xAY6pgF%2Bwu4Wu4xIKnV%2B4ZmEqhYlSiSTXBuPJuXkaKypNlsi%2B%2BI9hPr1idBjpO7cYyMbrdD%2BdSWPu0zEena4z8OCiID8hAwF5iDASFUwf0vXE%2BrWsn5uy86cUy0rv7JOhzWXy47UxNM4lqI5DZzpb3swBgRmTJqoClWkoqlTJ%2BLlg1t%2FCJyRTVijyIyXjCnuwH449TUqSNZnGavLhNDtLkffLhbhLv8wwxoZ&X-Amz-Signature=8437294c049b3a8a524734073b8f6be1d891c84cc9ec516f25c587ac3be56544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
