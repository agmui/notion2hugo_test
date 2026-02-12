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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPZAVM7%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCIDpFcib6XCa7Xir1EWQiyeWDXPQQiSroFQjZLUfv2vwIgfcyVwEBRzVLa44gILizl%2FG5TVk4cg9l0km4HeANFUMgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bc5JPqjU%2F%2BcTJSqCrcA1u5zC7xr8V4yP3FiiIaSmMhxClMO5r6zpb5RSKFeMMOqtocoBQ%2Bp09N6u9FW8aOMBOaPNC77520fCJMUCSro3q5A9dIC2ERr0lkBBzO4%2F56MG375IFExBQ3876GmP5vEca204tlmLwLSr7yR3JkNZCWgpD1XGT2G24sgYtBOsu%2BWJAxJOPzVS1KnjkyL1ZFx29K3uzrFolFvf6%2B%2B6GgllsB4scENkaivSTMgfFDLTvPexiv2jPJr4ofppIXxT8wpkPuPMX88Y4PdkL3i9f4q8rpzWpdxD5NPxeF203lDD45DbwYkMv1RAeecD2O02LjNU69a6uZ%2FpbiZItBamJtmiRfsH4U6Zk8Vt8c02NtvqQMxDipVJaCeswZlEY6Cg%2BKhx3PICzrZvclK%2Bcg5i7DXUHdAd5U3sKZ1fapeWjbYxgrpq4HrJu%2FG4yCFnJ5GADa548FJLUtCX%2BFX1eJeVAq0qd%2BEjomV%2BiXuvpdey%2ByXki3p9WEPqAVj1rUQwdQ5R87kZcpWd68Nh8OwreNQkHW%2Fd0Qt4vslEfHlSNMl4Kk28JvZf0rnm8mnFyt70KL9DBAlQvP7MxBFl%2FCg5C%2FFluGAjP9YNAFqo7rsPlrdTgjzZikQdnr%2BEpOsWzHW935MPrTtMwGOqUBHIVBVyJtbQtpPJIijznKzXiMj9KbfPdtLPROxLPpDL17vCpQ1nxgjLFTdZ0dmFQGUCxbsi1Xzy4gTpoiALKx6KISWUsVvBCpAPkLcBNpVBSleKoGpjo%2Fj6hGGBdKWbZCCcHy0zxU2Z2BQh%2B1zVBmTdiVmCPJx%2Ba9Iv%2BGFUm5R35Sb%2B5QIXvQ1gLu533toDl6cpgQZwI7Nn%2B8eOoX34pvh6i3lWZz&X-Amz-Signature=3cea8e286c3a22f3e6c4dd4e88858538e78a114d56e2fd9cbf4bd9d7336711c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPZAVM7%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCIDpFcib6XCa7Xir1EWQiyeWDXPQQiSroFQjZLUfv2vwIgfcyVwEBRzVLa44gILizl%2FG5TVk4cg9l0km4HeANFUMgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bc5JPqjU%2F%2BcTJSqCrcA1u5zC7xr8V4yP3FiiIaSmMhxClMO5r6zpb5RSKFeMMOqtocoBQ%2Bp09N6u9FW8aOMBOaPNC77520fCJMUCSro3q5A9dIC2ERr0lkBBzO4%2F56MG375IFExBQ3876GmP5vEca204tlmLwLSr7yR3JkNZCWgpD1XGT2G24sgYtBOsu%2BWJAxJOPzVS1KnjkyL1ZFx29K3uzrFolFvf6%2B%2B6GgllsB4scENkaivSTMgfFDLTvPexiv2jPJr4ofppIXxT8wpkPuPMX88Y4PdkL3i9f4q8rpzWpdxD5NPxeF203lDD45DbwYkMv1RAeecD2O02LjNU69a6uZ%2FpbiZItBamJtmiRfsH4U6Zk8Vt8c02NtvqQMxDipVJaCeswZlEY6Cg%2BKhx3PICzrZvclK%2Bcg5i7DXUHdAd5U3sKZ1fapeWjbYxgrpq4HrJu%2FG4yCFnJ5GADa548FJLUtCX%2BFX1eJeVAq0qd%2BEjomV%2BiXuvpdey%2ByXki3p9WEPqAVj1rUQwdQ5R87kZcpWd68Nh8OwreNQkHW%2Fd0Qt4vslEfHlSNMl4Kk28JvZf0rnm8mnFyt70KL9DBAlQvP7MxBFl%2FCg5C%2FFluGAjP9YNAFqo7rsPlrdTgjzZikQdnr%2BEpOsWzHW935MPrTtMwGOqUBHIVBVyJtbQtpPJIijznKzXiMj9KbfPdtLPROxLPpDL17vCpQ1nxgjLFTdZ0dmFQGUCxbsi1Xzy4gTpoiALKx6KISWUsVvBCpAPkLcBNpVBSleKoGpjo%2Fj6hGGBdKWbZCCcHy0zxU2Z2BQh%2B1zVBmTdiVmCPJx%2Ba9Iv%2BGFUm5R35Sb%2B5QIXvQ1gLu533toDl6cpgQZwI7Nn%2B8eOoX34pvh6i3lWZz&X-Amz-Signature=61581473e0a2a60c7dabde9d23a989233b7ebdfa2f06a8d07268b44c7e19b4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPZAVM7%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCIDpFcib6XCa7Xir1EWQiyeWDXPQQiSroFQjZLUfv2vwIgfcyVwEBRzVLa44gILizl%2FG5TVk4cg9l0km4HeANFUMgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bc5JPqjU%2F%2BcTJSqCrcA1u5zC7xr8V4yP3FiiIaSmMhxClMO5r6zpb5RSKFeMMOqtocoBQ%2Bp09N6u9FW8aOMBOaPNC77520fCJMUCSro3q5A9dIC2ERr0lkBBzO4%2F56MG375IFExBQ3876GmP5vEca204tlmLwLSr7yR3JkNZCWgpD1XGT2G24sgYtBOsu%2BWJAxJOPzVS1KnjkyL1ZFx29K3uzrFolFvf6%2B%2B6GgllsB4scENkaivSTMgfFDLTvPexiv2jPJr4ofppIXxT8wpkPuPMX88Y4PdkL3i9f4q8rpzWpdxD5NPxeF203lDD45DbwYkMv1RAeecD2O02LjNU69a6uZ%2FpbiZItBamJtmiRfsH4U6Zk8Vt8c02NtvqQMxDipVJaCeswZlEY6Cg%2BKhx3PICzrZvclK%2Bcg5i7DXUHdAd5U3sKZ1fapeWjbYxgrpq4HrJu%2FG4yCFnJ5GADa548FJLUtCX%2BFX1eJeVAq0qd%2BEjomV%2BiXuvpdey%2ByXki3p9WEPqAVj1rUQwdQ5R87kZcpWd68Nh8OwreNQkHW%2Fd0Qt4vslEfHlSNMl4Kk28JvZf0rnm8mnFyt70KL9DBAlQvP7MxBFl%2FCg5C%2FFluGAjP9YNAFqo7rsPlrdTgjzZikQdnr%2BEpOsWzHW935MPrTtMwGOqUBHIVBVyJtbQtpPJIijznKzXiMj9KbfPdtLPROxLPpDL17vCpQ1nxgjLFTdZ0dmFQGUCxbsi1Xzy4gTpoiALKx6KISWUsVvBCpAPkLcBNpVBSleKoGpjo%2Fj6hGGBdKWbZCCcHy0zxU2Z2BQh%2B1zVBmTdiVmCPJx%2Ba9Iv%2BGFUm5R35Sb%2B5QIXvQ1gLu533toDl6cpgQZwI7Nn%2B8eOoX34pvh6i3lWZz&X-Amz-Signature=c2b61bee60b09a00fbe2994849cd87c2002dc15c2b59430e88a44a8a6e984819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPZAVM7%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCIDpFcib6XCa7Xir1EWQiyeWDXPQQiSroFQjZLUfv2vwIgfcyVwEBRzVLa44gILizl%2FG5TVk4cg9l0km4HeANFUMgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bc5JPqjU%2F%2BcTJSqCrcA1u5zC7xr8V4yP3FiiIaSmMhxClMO5r6zpb5RSKFeMMOqtocoBQ%2Bp09N6u9FW8aOMBOaPNC77520fCJMUCSro3q5A9dIC2ERr0lkBBzO4%2F56MG375IFExBQ3876GmP5vEca204tlmLwLSr7yR3JkNZCWgpD1XGT2G24sgYtBOsu%2BWJAxJOPzVS1KnjkyL1ZFx29K3uzrFolFvf6%2B%2B6GgllsB4scENkaivSTMgfFDLTvPexiv2jPJr4ofppIXxT8wpkPuPMX88Y4PdkL3i9f4q8rpzWpdxD5NPxeF203lDD45DbwYkMv1RAeecD2O02LjNU69a6uZ%2FpbiZItBamJtmiRfsH4U6Zk8Vt8c02NtvqQMxDipVJaCeswZlEY6Cg%2BKhx3PICzrZvclK%2Bcg5i7DXUHdAd5U3sKZ1fapeWjbYxgrpq4HrJu%2FG4yCFnJ5GADa548FJLUtCX%2BFX1eJeVAq0qd%2BEjomV%2BiXuvpdey%2ByXki3p9WEPqAVj1rUQwdQ5R87kZcpWd68Nh8OwreNQkHW%2Fd0Qt4vslEfHlSNMl4Kk28JvZf0rnm8mnFyt70KL9DBAlQvP7MxBFl%2FCg5C%2FFluGAjP9YNAFqo7rsPlrdTgjzZikQdnr%2BEpOsWzHW935MPrTtMwGOqUBHIVBVyJtbQtpPJIijznKzXiMj9KbfPdtLPROxLPpDL17vCpQ1nxgjLFTdZ0dmFQGUCxbsi1Xzy4gTpoiALKx6KISWUsVvBCpAPkLcBNpVBSleKoGpjo%2Fj6hGGBdKWbZCCcHy0zxU2Z2BQh%2B1zVBmTdiVmCPJx%2Ba9Iv%2BGFUm5R35Sb%2B5QIXvQ1gLu533toDl6cpgQZwI7Nn%2B8eOoX34pvh6i3lWZz&X-Amz-Signature=3c27cfb28518eb942d0dbea9b48ae2564e7b7de8ece0aecefacc2f9ffb1914c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPZAVM7%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCIDpFcib6XCa7Xir1EWQiyeWDXPQQiSroFQjZLUfv2vwIgfcyVwEBRzVLa44gILizl%2FG5TVk4cg9l0km4HeANFUMgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bc5JPqjU%2F%2BcTJSqCrcA1u5zC7xr8V4yP3FiiIaSmMhxClMO5r6zpb5RSKFeMMOqtocoBQ%2Bp09N6u9FW8aOMBOaPNC77520fCJMUCSro3q5A9dIC2ERr0lkBBzO4%2F56MG375IFExBQ3876GmP5vEca204tlmLwLSr7yR3JkNZCWgpD1XGT2G24sgYtBOsu%2BWJAxJOPzVS1KnjkyL1ZFx29K3uzrFolFvf6%2B%2B6GgllsB4scENkaivSTMgfFDLTvPexiv2jPJr4ofppIXxT8wpkPuPMX88Y4PdkL3i9f4q8rpzWpdxD5NPxeF203lDD45DbwYkMv1RAeecD2O02LjNU69a6uZ%2FpbiZItBamJtmiRfsH4U6Zk8Vt8c02NtvqQMxDipVJaCeswZlEY6Cg%2BKhx3PICzrZvclK%2Bcg5i7DXUHdAd5U3sKZ1fapeWjbYxgrpq4HrJu%2FG4yCFnJ5GADa548FJLUtCX%2BFX1eJeVAq0qd%2BEjomV%2BiXuvpdey%2ByXki3p9WEPqAVj1rUQwdQ5R87kZcpWd68Nh8OwreNQkHW%2Fd0Qt4vslEfHlSNMl4Kk28JvZf0rnm8mnFyt70KL9DBAlQvP7MxBFl%2FCg5C%2FFluGAjP9YNAFqo7rsPlrdTgjzZikQdnr%2BEpOsWzHW935MPrTtMwGOqUBHIVBVyJtbQtpPJIijznKzXiMj9KbfPdtLPROxLPpDL17vCpQ1nxgjLFTdZ0dmFQGUCxbsi1Xzy4gTpoiALKx6KISWUsVvBCpAPkLcBNpVBSleKoGpjo%2Fj6hGGBdKWbZCCcHy0zxU2Z2BQh%2B1zVBmTdiVmCPJx%2Ba9Iv%2BGFUm5R35Sb%2B5QIXvQ1gLu533toDl6cpgQZwI7Nn%2B8eOoX34pvh6i3lWZz&X-Amz-Signature=37ac1626216a907f3f4cef6b613c92d855e5263b9dbe7758b5040ba45ccd8357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPZAVM7%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCIDpFcib6XCa7Xir1EWQiyeWDXPQQiSroFQjZLUfv2vwIgfcyVwEBRzVLa44gILizl%2FG5TVk4cg9l0km4HeANFUMgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bc5JPqjU%2F%2BcTJSqCrcA1u5zC7xr8V4yP3FiiIaSmMhxClMO5r6zpb5RSKFeMMOqtocoBQ%2Bp09N6u9FW8aOMBOaPNC77520fCJMUCSro3q5A9dIC2ERr0lkBBzO4%2F56MG375IFExBQ3876GmP5vEca204tlmLwLSr7yR3JkNZCWgpD1XGT2G24sgYtBOsu%2BWJAxJOPzVS1KnjkyL1ZFx29K3uzrFolFvf6%2B%2B6GgllsB4scENkaivSTMgfFDLTvPexiv2jPJr4ofppIXxT8wpkPuPMX88Y4PdkL3i9f4q8rpzWpdxD5NPxeF203lDD45DbwYkMv1RAeecD2O02LjNU69a6uZ%2FpbiZItBamJtmiRfsH4U6Zk8Vt8c02NtvqQMxDipVJaCeswZlEY6Cg%2BKhx3PICzrZvclK%2Bcg5i7DXUHdAd5U3sKZ1fapeWjbYxgrpq4HrJu%2FG4yCFnJ5GADa548FJLUtCX%2BFX1eJeVAq0qd%2BEjomV%2BiXuvpdey%2ByXki3p9WEPqAVj1rUQwdQ5R87kZcpWd68Nh8OwreNQkHW%2Fd0Qt4vslEfHlSNMl4Kk28JvZf0rnm8mnFyt70KL9DBAlQvP7MxBFl%2FCg5C%2FFluGAjP9YNAFqo7rsPlrdTgjzZikQdnr%2BEpOsWzHW935MPrTtMwGOqUBHIVBVyJtbQtpPJIijznKzXiMj9KbfPdtLPROxLPpDL17vCpQ1nxgjLFTdZ0dmFQGUCxbsi1Xzy4gTpoiALKx6KISWUsVvBCpAPkLcBNpVBSleKoGpjo%2Fj6hGGBdKWbZCCcHy0zxU2Z2BQh%2B1zVBmTdiVmCPJx%2Ba9Iv%2BGFUm5R35Sb%2B5QIXvQ1gLu533toDl6cpgQZwI7Nn%2B8eOoX34pvh6i3lWZz&X-Amz-Signature=6efd0e6c25463f4c48888f67a639124704c8f2b5de1e088ab271b5ee7dd9cc88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPZAVM7%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCIDpFcib6XCa7Xir1EWQiyeWDXPQQiSroFQjZLUfv2vwIgfcyVwEBRzVLa44gILizl%2FG5TVk4cg9l0km4HeANFUMgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bc5JPqjU%2F%2BcTJSqCrcA1u5zC7xr8V4yP3FiiIaSmMhxClMO5r6zpb5RSKFeMMOqtocoBQ%2Bp09N6u9FW8aOMBOaPNC77520fCJMUCSro3q5A9dIC2ERr0lkBBzO4%2F56MG375IFExBQ3876GmP5vEca204tlmLwLSr7yR3JkNZCWgpD1XGT2G24sgYtBOsu%2BWJAxJOPzVS1KnjkyL1ZFx29K3uzrFolFvf6%2B%2B6GgllsB4scENkaivSTMgfFDLTvPexiv2jPJr4ofppIXxT8wpkPuPMX88Y4PdkL3i9f4q8rpzWpdxD5NPxeF203lDD45DbwYkMv1RAeecD2O02LjNU69a6uZ%2FpbiZItBamJtmiRfsH4U6Zk8Vt8c02NtvqQMxDipVJaCeswZlEY6Cg%2BKhx3PICzrZvclK%2Bcg5i7DXUHdAd5U3sKZ1fapeWjbYxgrpq4HrJu%2FG4yCFnJ5GADa548FJLUtCX%2BFX1eJeVAq0qd%2BEjomV%2BiXuvpdey%2ByXki3p9WEPqAVj1rUQwdQ5R87kZcpWd68Nh8OwreNQkHW%2Fd0Qt4vslEfHlSNMl4Kk28JvZf0rnm8mnFyt70KL9DBAlQvP7MxBFl%2FCg5C%2FFluGAjP9YNAFqo7rsPlrdTgjzZikQdnr%2BEpOsWzHW935MPrTtMwGOqUBHIVBVyJtbQtpPJIijznKzXiMj9KbfPdtLPROxLPpDL17vCpQ1nxgjLFTdZ0dmFQGUCxbsi1Xzy4gTpoiALKx6KISWUsVvBCpAPkLcBNpVBSleKoGpjo%2Fj6hGGBdKWbZCCcHy0zxU2Z2BQh%2B1zVBmTdiVmCPJx%2Ba9Iv%2BGFUm5R35Sb%2B5QIXvQ1gLu533toDl6cpgQZwI7Nn%2B8eOoX34pvh6i3lWZz&X-Amz-Signature=3dffa27bd93a11765566835520338344c8c406116c428eeff775f4f287cb0d8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPZAVM7%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCIDpFcib6XCa7Xir1EWQiyeWDXPQQiSroFQjZLUfv2vwIgfcyVwEBRzVLa44gILizl%2FG5TVk4cg9l0km4HeANFUMgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bc5JPqjU%2F%2BcTJSqCrcA1u5zC7xr8V4yP3FiiIaSmMhxClMO5r6zpb5RSKFeMMOqtocoBQ%2Bp09N6u9FW8aOMBOaPNC77520fCJMUCSro3q5A9dIC2ERr0lkBBzO4%2F56MG375IFExBQ3876GmP5vEca204tlmLwLSr7yR3JkNZCWgpD1XGT2G24sgYtBOsu%2BWJAxJOPzVS1KnjkyL1ZFx29K3uzrFolFvf6%2B%2B6GgllsB4scENkaivSTMgfFDLTvPexiv2jPJr4ofppIXxT8wpkPuPMX88Y4PdkL3i9f4q8rpzWpdxD5NPxeF203lDD45DbwYkMv1RAeecD2O02LjNU69a6uZ%2FpbiZItBamJtmiRfsH4U6Zk8Vt8c02NtvqQMxDipVJaCeswZlEY6Cg%2BKhx3PICzrZvclK%2Bcg5i7DXUHdAd5U3sKZ1fapeWjbYxgrpq4HrJu%2FG4yCFnJ5GADa548FJLUtCX%2BFX1eJeVAq0qd%2BEjomV%2BiXuvpdey%2ByXki3p9WEPqAVj1rUQwdQ5R87kZcpWd68Nh8OwreNQkHW%2Fd0Qt4vslEfHlSNMl4Kk28JvZf0rnm8mnFyt70KL9DBAlQvP7MxBFl%2FCg5C%2FFluGAjP9YNAFqo7rsPlrdTgjzZikQdnr%2BEpOsWzHW935MPrTtMwGOqUBHIVBVyJtbQtpPJIijznKzXiMj9KbfPdtLPROxLPpDL17vCpQ1nxgjLFTdZ0dmFQGUCxbsi1Xzy4gTpoiALKx6KISWUsVvBCpAPkLcBNpVBSleKoGpjo%2Fj6hGGBdKWbZCCcHy0zxU2Z2BQh%2B1zVBmTdiVmCPJx%2Ba9Iv%2BGFUm5R35Sb%2B5QIXvQ1gLu533toDl6cpgQZwI7Nn%2B8eOoX34pvh6i3lWZz&X-Amz-Signature=d4bd585c1ab281b290e4db78f41992c709fe84a03c5fa632d2820b7699b2a739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPZAVM7%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCIDpFcib6XCa7Xir1EWQiyeWDXPQQiSroFQjZLUfv2vwIgfcyVwEBRzVLa44gILizl%2FG5TVk4cg9l0km4HeANFUMgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bc5JPqjU%2F%2BcTJSqCrcA1u5zC7xr8V4yP3FiiIaSmMhxClMO5r6zpb5RSKFeMMOqtocoBQ%2Bp09N6u9FW8aOMBOaPNC77520fCJMUCSro3q5A9dIC2ERr0lkBBzO4%2F56MG375IFExBQ3876GmP5vEca204tlmLwLSr7yR3JkNZCWgpD1XGT2G24sgYtBOsu%2BWJAxJOPzVS1KnjkyL1ZFx29K3uzrFolFvf6%2B%2B6GgllsB4scENkaivSTMgfFDLTvPexiv2jPJr4ofppIXxT8wpkPuPMX88Y4PdkL3i9f4q8rpzWpdxD5NPxeF203lDD45DbwYkMv1RAeecD2O02LjNU69a6uZ%2FpbiZItBamJtmiRfsH4U6Zk8Vt8c02NtvqQMxDipVJaCeswZlEY6Cg%2BKhx3PICzrZvclK%2Bcg5i7DXUHdAd5U3sKZ1fapeWjbYxgrpq4HrJu%2FG4yCFnJ5GADa548FJLUtCX%2BFX1eJeVAq0qd%2BEjomV%2BiXuvpdey%2ByXki3p9WEPqAVj1rUQwdQ5R87kZcpWd68Nh8OwreNQkHW%2Fd0Qt4vslEfHlSNMl4Kk28JvZf0rnm8mnFyt70KL9DBAlQvP7MxBFl%2FCg5C%2FFluGAjP9YNAFqo7rsPlrdTgjzZikQdnr%2BEpOsWzHW935MPrTtMwGOqUBHIVBVyJtbQtpPJIijznKzXiMj9KbfPdtLPROxLPpDL17vCpQ1nxgjLFTdZ0dmFQGUCxbsi1Xzy4gTpoiALKx6KISWUsVvBCpAPkLcBNpVBSleKoGpjo%2Fj6hGGBdKWbZCCcHy0zxU2Z2BQh%2B1zVBmTdiVmCPJx%2Ba9Iv%2BGFUm5R35Sb%2B5QIXvQ1gLu533toDl6cpgQZwI7Nn%2B8eOoX34pvh6i3lWZz&X-Amz-Signature=f5c741397c64033d5f2292e7a8113549bdc4bc3c5c51a73c8e4b307792c21631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPZAVM7%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCIDpFcib6XCa7Xir1EWQiyeWDXPQQiSroFQjZLUfv2vwIgfcyVwEBRzVLa44gILizl%2FG5TVk4cg9l0km4HeANFUMgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bc5JPqjU%2F%2BcTJSqCrcA1u5zC7xr8V4yP3FiiIaSmMhxClMO5r6zpb5RSKFeMMOqtocoBQ%2Bp09N6u9FW8aOMBOaPNC77520fCJMUCSro3q5A9dIC2ERr0lkBBzO4%2F56MG375IFExBQ3876GmP5vEca204tlmLwLSr7yR3JkNZCWgpD1XGT2G24sgYtBOsu%2BWJAxJOPzVS1KnjkyL1ZFx29K3uzrFolFvf6%2B%2B6GgllsB4scENkaivSTMgfFDLTvPexiv2jPJr4ofppIXxT8wpkPuPMX88Y4PdkL3i9f4q8rpzWpdxD5NPxeF203lDD45DbwYkMv1RAeecD2O02LjNU69a6uZ%2FpbiZItBamJtmiRfsH4U6Zk8Vt8c02NtvqQMxDipVJaCeswZlEY6Cg%2BKhx3PICzrZvclK%2Bcg5i7DXUHdAd5U3sKZ1fapeWjbYxgrpq4HrJu%2FG4yCFnJ5GADa548FJLUtCX%2BFX1eJeVAq0qd%2BEjomV%2BiXuvpdey%2ByXki3p9WEPqAVj1rUQwdQ5R87kZcpWd68Nh8OwreNQkHW%2Fd0Qt4vslEfHlSNMl4Kk28JvZf0rnm8mnFyt70KL9DBAlQvP7MxBFl%2FCg5C%2FFluGAjP9YNAFqo7rsPlrdTgjzZikQdnr%2BEpOsWzHW935MPrTtMwGOqUBHIVBVyJtbQtpPJIijznKzXiMj9KbfPdtLPROxLPpDL17vCpQ1nxgjLFTdZ0dmFQGUCxbsi1Xzy4gTpoiALKx6KISWUsVvBCpAPkLcBNpVBSleKoGpjo%2Fj6hGGBdKWbZCCcHy0zxU2Z2BQh%2B1zVBmTdiVmCPJx%2Ba9Iv%2BGFUm5R35Sb%2B5QIXvQ1gLu533toDl6cpgQZwI7Nn%2B8eOoX34pvh6i3lWZz&X-Amz-Signature=03d07c6330d6182a049b99e4a66cbdc79a51171c7670785a1b09e36cc3e6027f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ICBHSCY%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDiaVXWR3OTg4AnsCNiS%2BCTErLVC8WL8rzmSOprYRgYVAiBFCbz44bT1wLXDDWR60vr6WVAgK0puG5VNwJQa%2BiDenSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVFFiObRPlBr4knxgKtwDoI341vdErYjqY85VwJT%2B0aB5vvsp1KRnTlKbGaYwqp5j7vvXlTJTyGs4f7ulB%2BkuuUq4f6ZDHM%2F9b73vlIrIkkvNnS3UYufW8WNc8evGHMgR6d8E3irvSzQVEE%2FBgMwk8xBycCeGMDD4BeCo4BCoAJZ3x2F2ZaRmt8oGHhr4TxboZQUqT7w7osMcpZ2j978JTk7TSjMI0B1I6f2GdZrA%2B%2FVgcID0WT2sJm3dyzlCGHDXWcToKhc8xTXHA9v%2BDlyq78jetGKRqxGay5mPPXXEQwVvaLKZZWJgNXZpJZgwiwNqBgugSELGcli3CP39NsyajumyOvw0k5F660Vu6CXt7CN0cwzKQ%2FiiMoxn2%2FjoGc14kIfmY2FKLvFkdMRMHGpjPZqAefwaXJwPE1S4jf63FuwB2M6uwR6Jmtrr0ydbKQwqW6dfLAhOTrVDl8mrzcd4tzoeMzKizj80ocEccRtOAl6%2FEqNz8mf6cpeWnYOJNtgithgoqdsrTSOQYpG41%2F4G3ce9q%2B3fWzGFPLseLwSu2g1J63Q5XzYCKiF8ZL92MyTlqmZRejg2XK6cU9HO03E%2BqrsBprAWaCJSBLaBlMFICQs4aHGVne%2Fof2H0T14wmELZLg0biLhvDp9SGtUwx9K0zAY6pgG6rn%2FiFnEnAHSpAYfxFye2uhtefl9NWxJs46Zfbz09iPE1fXjX6vr5Rc%2Bqbfl%2Fsr0A%2FdA1YQFekGGirJoXli0uil7vbvtccNkqDvhITmrhnp17LclS9G0U0rSv5U6VWnWG6qzq9iRp7b2OQPr%2BKkRzTtbuVL8pUxovWO6RvhEhpQPfPEqYCCE4GO4UY9JFFTVIfrtkDC2gAB79E8477%2FJned5SI4zv&X-Amz-Signature=405ebc514b8dab387a81dce23a0aea59654f4ab4593213c5b02f5ecd72b4388f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDEAOJ3%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCNX8piTI60%2B8Ydy7HoUNRYT8arWdeZTuPxt5%2BfDO79cQIhANwHOaPoRxHtpDU3rQOjGr7fHCek5rUAQOD3YHBp%2BoXAKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4e83tmzxLhSA%2F8A8q3AOnmgXreK2s8ONEwX7OGPi5%2B4rzYzjaUKOrM7yJ8J%2B0vb1oC2cDsxsK4%2FuxXZEG53m%2Br8x0dVXFRaMe8Y9%2BnvH2uCEqeKmYWccFOpJzx3JDLXDq3fsdcPeiyRBHt4Y%2F2wBMAl4UE8MHutDKceK%2BYw91HKAeEFK3cy1Dkv8bJteVhTiLn8CeUzsn13IXG7v2MVcA%2FtGtAVY3FBbt20e58YB30N%2BaUjhUgEBNJw4%2B4hsD2uvTL0XupDfo%2FFKNSDZ4RCkcmajbp03%2FEVbV%2Bxbe%2BKd5yxUfZpdYSeWcVh0ybunXf1gzx1MkCncBYzS5k2%2BwSQJcDNI5IFKNepmA0saMjYjypXgjLqesM9%2BlJKEDT004Knkf03iU9hX73puoOJQPLLVrr1GywOF2i0FR3ufNrGpoAcSKq3f8qp52AbRcDnQiT0tRLMZ77dy3EfHEtdMfarft3h3cYmtLr9soLEssAziSZ235Nw70oPxa308UpXGA%2Fsn7DlV6IiEc%2FkgTr%2FuEFvEmEW42l%2BQnd7MGTv7bPB9ONBsEvknZ92ko0712%2Bg5wdJjA1SiTaDkSi3P6rqBNgTU4t75V7sOzRpX3abbtoeMcOLr5omkKbljDUDpSIsebIe5tZwFT8HVEJlj%2FYTCv0rTMBjqkAbQ%2FAwhPIvCby1Qp4E8ZzCWRXZtlK1U0ojkFwUYk3yu36lH6Ss5OIK3ll711oMhAfjwwWBrDquI%2FSZ72YwQYKd4%2F31yLxLI69DTYF%2B5T6nNvI8eMGL%2FUio%2BlackUbVol8dnCEi%2FD6yssLqwhIIGglDDu9RLjRHer9brfwMHWy5Z4ZJ8jBs3uOPZWwysCrCXVtTJNIZZSUSujcDfdbN4%2FMYOu%2Fipp&X-Amz-Signature=130f34eca61ee75fe7b53add36c79ca62e3b3f80da6cac9763ffb91496c8a7b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIANIXX%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFLtuhHD2GAatT%2F6V9BpK47P1KciRmCdVXNq8fT2FbENAiAE6iibVcAJm2u4fSD%2FrUxWm3UB3EfG1tTNlrC1fECdfSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMek1%2FLvemyeAovogPKtwDev04SEIBy8pp2Mxh2r7tid5pkbFcDo0foj%2ByEzd36Avx068rxWqb%2B3zyjfaC5twH4O1VXsQ7CG97cctKVKaSRTQAQDf%2FxCSttNZWgkD8CJcdN6PMHiHN12hb1YjGpzZ74nRCnjTkCVpU%2FntXb6fCYQRPYW0lg6k%2BImm0pJGOcWFrc2RcEIMtxm0OcC73Eq0kCjOH7GRxIv1mzdxCke5L3Z3Jr6eIsTnnRsPJzporGRcLO4qH0qvyo6eknTL4ck8ecK03PG3psEk%2FEjHzfum7ZNHdpSPSGo1SoWkffWf7IcdWETpVDS2sRqjJ3ZXWiDvtxctKxmJukna0LRRTgonIWA7YVinm3M6HXUZcj63eUTXIqG1lK1bDPOSAvGQYH58rhcYZBb2mHK0O9lmjbj7CUd1EwfERgDMrgHrQCqX6EyJS6ofQG1dGfHjgyWIByvwt4pT4CZ31UfFnHlLk6ecpoaY97ncjgXnkUsX%2BMRp27C1hr1QVLtbXJf8gSeg8Ygz%2B%2BxW5pjmcGwOk5Nkwl41TrtY%2B5VF35QhcD4RXZT86vpEO%2Bk34lytwK7m8dvPKXnu23QglOHwzMu43zE4XBqV4AAi7glePEO2pGA23XsLVCyU4jcnxlmCLTT9H%2B5Yw5sy0zAY6pgE%2B02I7wF5Z%2FvX1nIp8%2Bjj%2FHYYVYZAJwSXMIjBSQP180GyDngrLrMKH%2B3dz9%2FtjkwnGhDCbqnhHEu9cRyu38u8IRRvh6Rq2ug6SxFv2AleH6Tk0bJ9visKAx70IatCrkzadvWPwuY4YdmF5OAAAVVa7D3skAIuj4B4jgD4M1FE9YpitGjslQaYLeJORWwsHtJY2VxPR%2Fvgm7OdKYdmWskA0CLJsX1Jy&X-Amz-Signature=3f7fa319c4107f6d1fef007d06ce40d295cea810978cda15b1d429c5e76ff640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPZAVM7%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCIDpFcib6XCa7Xir1EWQiyeWDXPQQiSroFQjZLUfv2vwIgfcyVwEBRzVLa44gILizl%2FG5TVk4cg9l0km4HeANFUMgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bc5JPqjU%2F%2BcTJSqCrcA1u5zC7xr8V4yP3FiiIaSmMhxClMO5r6zpb5RSKFeMMOqtocoBQ%2Bp09N6u9FW8aOMBOaPNC77520fCJMUCSro3q5A9dIC2ERr0lkBBzO4%2F56MG375IFExBQ3876GmP5vEca204tlmLwLSr7yR3JkNZCWgpD1XGT2G24sgYtBOsu%2BWJAxJOPzVS1KnjkyL1ZFx29K3uzrFolFvf6%2B%2B6GgllsB4scENkaivSTMgfFDLTvPexiv2jPJr4ofppIXxT8wpkPuPMX88Y4PdkL3i9f4q8rpzWpdxD5NPxeF203lDD45DbwYkMv1RAeecD2O02LjNU69a6uZ%2FpbiZItBamJtmiRfsH4U6Zk8Vt8c02NtvqQMxDipVJaCeswZlEY6Cg%2BKhx3PICzrZvclK%2Bcg5i7DXUHdAd5U3sKZ1fapeWjbYxgrpq4HrJu%2FG4yCFnJ5GADa548FJLUtCX%2BFX1eJeVAq0qd%2BEjomV%2BiXuvpdey%2ByXki3p9WEPqAVj1rUQwdQ5R87kZcpWd68Nh8OwreNQkHW%2Fd0Qt4vslEfHlSNMl4Kk28JvZf0rnm8mnFyt70KL9DBAlQvP7MxBFl%2FCg5C%2FFluGAjP9YNAFqo7rsPlrdTgjzZikQdnr%2BEpOsWzHW935MPrTtMwGOqUBHIVBVyJtbQtpPJIijznKzXiMj9KbfPdtLPROxLPpDL17vCpQ1nxgjLFTdZ0dmFQGUCxbsi1Xzy4gTpoiALKx6KISWUsVvBCpAPkLcBNpVBSleKoGpjo%2Fj6hGGBdKWbZCCcHy0zxU2Z2BQh%2B1zVBmTdiVmCPJx%2Ba9Iv%2BGFUm5R35Sb%2B5QIXvQ1gLu533toDl6cpgQZwI7Nn%2B8eOoX34pvh6i3lWZz&X-Amz-Signature=c0a4b0c836b6bccdd8d24e3c10da51b31ce9dd466ad0c5f5bedfe2c781ab7b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGBAGMT3%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAcKVgKjH3Z%2BaRfrS7Aa%2Fgb4gQI9Ci1jSjGOEuLZRcjNAiEAlxmBfNHVi3t%2FugedQuuLfXyrXUZsBPrIXHxqMdqzkFcqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FLxT1qQemXeKJDNSrcA21lRCFuAuWX3MbGpFHJQkKHczwngx%2F8GJSx7RcxQU8qbauW7ythrxxaAujZFJh44YEcxPrqyt%2B2sROEK7kBGst2J2oDvilGtOiNFCoz0hGc4%2FD0%2Fl%2B4zj%2B0%2FGwTBWz3WMOTMRGrOVEDX%2BjIpkszJvUJ72hJcHg%2FGC1MgAi%2FM9PsvnuP7%2FJzB8WZW7TwwDTj65932cm5UxJaRjvcS6pjdYft6kv%2FK1ZzJb116KSl585OQ7kxbqsWS781o5YMzWU55jv7tbFzclJnFVWS%2FTNNXniQGQV6vt%2F0jaP9JKqFXIA6cFAUFTcxgkyYBcCI4suYP1wK1nEDUBYNyp9X%2Fa8lIrBaF%2BUKmE%2BYRpatTwB3feP9Je1Ws9wrE4eW1pXEVorVM8XaW7rcT43C5cqlgFLwv3G2FB3Ngl%2Fg%2BBuO3wquqVrhq2rORQnK6xJjDed1mV6ZfbHHVKjy34nqC2JxiCUtMde7TADxClQRtp%2BtArrvYsjkJDdRCJeUaF09CkLjQ1zN6eibyhO0GKdxW97Kgz8g%2B%2FXNBDjMw7W%2FWmm%2BbmV%2Flc585nK1%2FvTUDgubHL4acXmgc%2F1nf9GkMYkARcLoVt3tVmOMkpMI3iwO831V%2B1wdZ5JHyg8RLfMuoPDowrqvMLzLtMwGOqUBITR6BVQ5ZuDtKwwE5I1cq4gntewFl%2BZ7%2FspChWcrWl0bLT0FANtpcny9VSRYd%2BUpZGyEfRvDAYOiPXXT2MicC0ctGOGpilmcKnEw%2BtMPhPw6FUHFNUAYTW1KaPFGeI4smsYftcPgLfJTda2K%2BF3o9iZa2%2FxyjDIF5FuLB2h99m3uc%2BelN4CVdibnS6sCBNr4reNxrHbCqs8TiwkLbA1bleLVfKjs&X-Amz-Signature=781e8baeaffe64224616625d8749f624e22f9bb9153ffb30d019cf54c0cb5d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPZAVM7%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCIDpFcib6XCa7Xir1EWQiyeWDXPQQiSroFQjZLUfv2vwIgfcyVwEBRzVLa44gILizl%2FG5TVk4cg9l0km4HeANFUMgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bc5JPqjU%2F%2BcTJSqCrcA1u5zC7xr8V4yP3FiiIaSmMhxClMO5r6zpb5RSKFeMMOqtocoBQ%2Bp09N6u9FW8aOMBOaPNC77520fCJMUCSro3q5A9dIC2ERr0lkBBzO4%2F56MG375IFExBQ3876GmP5vEca204tlmLwLSr7yR3JkNZCWgpD1XGT2G24sgYtBOsu%2BWJAxJOPzVS1KnjkyL1ZFx29K3uzrFolFvf6%2B%2B6GgllsB4scENkaivSTMgfFDLTvPexiv2jPJr4ofppIXxT8wpkPuPMX88Y4PdkL3i9f4q8rpzWpdxD5NPxeF203lDD45DbwYkMv1RAeecD2O02LjNU69a6uZ%2FpbiZItBamJtmiRfsH4U6Zk8Vt8c02NtvqQMxDipVJaCeswZlEY6Cg%2BKhx3PICzrZvclK%2Bcg5i7DXUHdAd5U3sKZ1fapeWjbYxgrpq4HrJu%2FG4yCFnJ5GADa548FJLUtCX%2BFX1eJeVAq0qd%2BEjomV%2BiXuvpdey%2ByXki3p9WEPqAVj1rUQwdQ5R87kZcpWd68Nh8OwreNQkHW%2Fd0Qt4vslEfHlSNMl4Kk28JvZf0rnm8mnFyt70KL9DBAlQvP7MxBFl%2FCg5C%2FFluGAjP9YNAFqo7rsPlrdTgjzZikQdnr%2BEpOsWzHW935MPrTtMwGOqUBHIVBVyJtbQtpPJIijznKzXiMj9KbfPdtLPROxLPpDL17vCpQ1nxgjLFTdZ0dmFQGUCxbsi1Xzy4gTpoiALKx6KISWUsVvBCpAPkLcBNpVBSleKoGpjo%2Fj6hGGBdKWbZCCcHy0zxU2Z2BQh%2B1zVBmTdiVmCPJx%2Ba9Iv%2BGFUm5R35Sb%2B5QIXvQ1gLu533toDl6cpgQZwI7Nn%2B8eOoX34pvh6i3lWZz&X-Amz-Signature=0ce4f0de6cf5e77e17c5455cb62cebcf6ff4d40905a509dbf6d861e2f3dc9c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQ3YAO6%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAlgVZ%2FLuXdgfcJtgqCXQtmeQ%2BzgsWpI2eXJFIEhMEgGAiB5kFUVhzf8xfmBE7zySMTnWvJSV8GzUT07ZahiwZIuRSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM97YN4zdorXB5F8%2BuKtwDBIetpa6rDGoiT%2F%2F8vefmx6JIoCuVHzXLNmJ%2BFvpALM0%2Bv44n9PgEdcCsE5vIFYYBAaxGSlrRO2Jj9g1LYqFngHIspHT6i0l77NsD8gByPRX566UvAWXXLsD9IMif3KFAQgGmAIqKHhTDbs3Hu7HcruJpdkXU%2B55bWBV1AdjCMCf%2B43XvxA2ePImkeKMMKfFa4u18CQU4P6hNrLfV4UI1Q6HMqQfOf0mLlQxqq5h753Xh4g8Ua4KcpCmXkxnjxcAKPW1jaNIr1mqo4OH72PJAdiF0%2BwzS7r%2FbnBLlnSu2hWG3aO4KrFkL%2BdN08hPFR4fFko0hskzR45mh%2F8Q2bAZgWvOkgqo4%2FC0jWpu%2F39GuH0oORf2VmyIWsXbMKjIR2t3RW7tzkfCYQspugffa826WR09t9iPkJMhAfL6tBIhtEBONK%2FTk5XnSNL3wVW%2FMKXEFckU1gygx492yT5sPR4%2BowmwFGO2VAmZSuyDHHhb2XyBXBt1Kf5ixlZTl1UOa%2FVO1nPXHXPGlNf%2BMe39yAVKcj9G41pl1AV%2FuQX6PuVJqi6guZIRSooSnABr%2BrV%2F6O%2B7NBAPKukkknd5YyqvRTlBh1tYkBsydAg%2BYOaEaJfxEbsUkbOidn8GIKY%2Flo08w49G0zAY6pgEZN97jsVCjmeSgOjEa0jGTSGcHj4Bs3x2DH8OafHlled7EY9LuhvqlT7qFDURlg0tXakmbOTVEqDjcP%2FsM%2BSIpekW%2FQhQkAhUpFwNVsd3aIlxNbEVxDMtbvEr6KZbxExYEZ%2BHY49tCgYuiXMrbcIhfm%2FpW6%2FRCJv%2B1gFeb0O0DpwsxB9ROkg%2BzZMZuvDDgvYTYBEpkfaoPYlIMrXer%2BfzC%2FrnVoyJT&X-Amz-Signature=6c66ee977b28d954984a1820b7570086f7d7fffe95fd88531b8ec0e5990ae5b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPZAVM7%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCIDpFcib6XCa7Xir1EWQiyeWDXPQQiSroFQjZLUfv2vwIgfcyVwEBRzVLa44gILizl%2FG5TVk4cg9l0km4HeANFUMgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bc5JPqjU%2F%2BcTJSqCrcA1u5zC7xr8V4yP3FiiIaSmMhxClMO5r6zpb5RSKFeMMOqtocoBQ%2Bp09N6u9FW8aOMBOaPNC77520fCJMUCSro3q5A9dIC2ERr0lkBBzO4%2F56MG375IFExBQ3876GmP5vEca204tlmLwLSr7yR3JkNZCWgpD1XGT2G24sgYtBOsu%2BWJAxJOPzVS1KnjkyL1ZFx29K3uzrFolFvf6%2B%2B6GgllsB4scENkaivSTMgfFDLTvPexiv2jPJr4ofppIXxT8wpkPuPMX88Y4PdkL3i9f4q8rpzWpdxD5NPxeF203lDD45DbwYkMv1RAeecD2O02LjNU69a6uZ%2FpbiZItBamJtmiRfsH4U6Zk8Vt8c02NtvqQMxDipVJaCeswZlEY6Cg%2BKhx3PICzrZvclK%2Bcg5i7DXUHdAd5U3sKZ1fapeWjbYxgrpq4HrJu%2FG4yCFnJ5GADa548FJLUtCX%2BFX1eJeVAq0qd%2BEjomV%2BiXuvpdey%2ByXki3p9WEPqAVj1rUQwdQ5R87kZcpWd68Nh8OwreNQkHW%2Fd0Qt4vslEfHlSNMl4Kk28JvZf0rnm8mnFyt70KL9DBAlQvP7MxBFl%2FCg5C%2FFluGAjP9YNAFqo7rsPlrdTgjzZikQdnr%2BEpOsWzHW935MPrTtMwGOqUBHIVBVyJtbQtpPJIijznKzXiMj9KbfPdtLPROxLPpDL17vCpQ1nxgjLFTdZ0dmFQGUCxbsi1Xzy4gTpoiALKx6KISWUsVvBCpAPkLcBNpVBSleKoGpjo%2Fj6hGGBdKWbZCCcHy0zxU2Z2BQh%2B1zVBmTdiVmCPJx%2Ba9Iv%2BGFUm5R35Sb%2B5QIXvQ1gLu533toDl6cpgQZwI7Nn%2B8eOoX34pvh6i3lWZz&X-Amz-Signature=716631357188e7a36621849e62d311246bc33156297f0b1d90ef3cb2896bdd76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB7XNLOQ%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCo5BClA0U1wpPPCLn29RA9BGm871144QhMkUwgYFAP5AIhAOAA%2FZ%2FvVcir0QohE0epqT9DqbDVx4TrwQH79lYGKSY%2BKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMlO%2FQitPqk3upKbIq3AN5ywW9IvnJDuBt4DJQp4Z9FJKgDkr7gSdXeJTtHQRbwGG2cP5Nncgl%2BFGgtpa3UIIupxv14dVGdKVVrxpLA0dg7Z1s31hJ%2Fl0aQ843spcaeq5kDJJ5VfOTk5Ln36P9BrAAX7bEgMkc8IOgqIEwNfGfruWXLNKpTrqYYbrv6Y6oTITDdPyFUWbsT5a9SnyyZVvcqGLHO2Xk4S7goi8PPSPwdY6Jqu3L8%2BCfZlibvERW3%2FX6wBXDBF92CL%2FFUfkPcpeR%2BIJN75f5po9365rX2By09TEuDv0xFCOccQL%2FjxE8gQpjLW4PlYOTaDnDUN4fnDMgLD7CuWfcC9nJMfl9hB%2BMSlOeRzLh0IfYGpQPV62apdYD9qM5fxXPkbxoQhmybLPicqCmhJeWxZQFfBkTH60tk8chI0Li8KUkFSvqJw2d4BHFUk%2FsJ2q%2FEHCyErzdrVtOzoz%2BhBu%2FsBsMflL6pDiN%2BbbPF6FfjK2HPGQo%2FRKMozQ3nUAGV9olVi8E00d2MHSjo7zezSEPLWv37fWTt0t4kvATw2dbl2R%2FSp1frr3LMh%2FsEtUH7RHlnb15JZReUApJDYdh35g4y6cvs9HNN68REvAAPaohUkafYf5gJNyrYutSNhtVr%2FYykXTeZTCL07TMBjqkAZbb1GD041pNeKFpLXd1x7%2FSb00Tk%2FH%2F1SvsggsfUqhSo5G%2Fp1oRmWkr%2FpFOJL4j9V8UhKPQ7O%2F5tl5uft3AJ%2FD295RJH%2BqhgimuFlTTJSGH%2B9RezEKxY8LLaOqOcQ7GFQwiFtCB3Q1I1Q8z0y9YWVvZSNbVCWyh6Lj1EMnm1FSgKdDajwa8vxzm6F546R385X7mojKH4Q1TnJPYgR9iUhXumeYo&X-Amz-Signature=5e9730de1fc09cc2e55a4bc5dac79ccabb2c57e3f2911f35cb9b39a837c01d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPZAVM7%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCIDpFcib6XCa7Xir1EWQiyeWDXPQQiSroFQjZLUfv2vwIgfcyVwEBRzVLa44gILizl%2FG5TVk4cg9l0km4HeANFUMgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bc5JPqjU%2F%2BcTJSqCrcA1u5zC7xr8V4yP3FiiIaSmMhxClMO5r6zpb5RSKFeMMOqtocoBQ%2Bp09N6u9FW8aOMBOaPNC77520fCJMUCSro3q5A9dIC2ERr0lkBBzO4%2F56MG375IFExBQ3876GmP5vEca204tlmLwLSr7yR3JkNZCWgpD1XGT2G24sgYtBOsu%2BWJAxJOPzVS1KnjkyL1ZFx29K3uzrFolFvf6%2B%2B6GgllsB4scENkaivSTMgfFDLTvPexiv2jPJr4ofppIXxT8wpkPuPMX88Y4PdkL3i9f4q8rpzWpdxD5NPxeF203lDD45DbwYkMv1RAeecD2O02LjNU69a6uZ%2FpbiZItBamJtmiRfsH4U6Zk8Vt8c02NtvqQMxDipVJaCeswZlEY6Cg%2BKhx3PICzrZvclK%2Bcg5i7DXUHdAd5U3sKZ1fapeWjbYxgrpq4HrJu%2FG4yCFnJ5GADa548FJLUtCX%2BFX1eJeVAq0qd%2BEjomV%2BiXuvpdey%2ByXki3p9WEPqAVj1rUQwdQ5R87kZcpWd68Nh8OwreNQkHW%2Fd0Qt4vslEfHlSNMl4Kk28JvZf0rnm8mnFyt70KL9DBAlQvP7MxBFl%2FCg5C%2FFluGAjP9YNAFqo7rsPlrdTgjzZikQdnr%2BEpOsWzHW935MPrTtMwGOqUBHIVBVyJtbQtpPJIijznKzXiMj9KbfPdtLPROxLPpDL17vCpQ1nxgjLFTdZ0dmFQGUCxbsi1Xzy4gTpoiALKx6KISWUsVvBCpAPkLcBNpVBSleKoGpjo%2Fj6hGGBdKWbZCCcHy0zxU2Z2BQh%2B1zVBmTdiVmCPJx%2Ba9Iv%2BGFUm5R35Sb%2B5QIXvQ1gLu533toDl6cpgQZwI7Nn%2B8eOoX34pvh6i3lWZz&X-Amz-Signature=4e2478beaec4084366552be9c3fd150ea7c4672af537ca6155cbd3a9d4cdd7c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXY2Q6WF%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEbAhQergHGmTDGyvQEvmSy7Pz0FfMRuk8Rbg6JRvPtAiEAsOGgTBQ435Pwcl6%2BSzva9a7l0fgkLF3CCKvAIaWlAwYqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApU5W9hDERMRKcu5ircA8UWp9VEEt5e4Dn1l9aUV%2BPC81bLrO55Ts3PnHoRxU3s8Tguyd8u3kVWToJyirq1h8WoMjEtLq%2BMJFTRooLHk8KtW%2F1moTS5U9DpK0zOxGZ6tM8bzLK0IX2OMS7OLeFs96GsbOWbYAufNcfUDGwnElUnp8pp0%2Flk0B4%2FcCQU57d7dwYziX77PZWN5gbP4Nxt6ADlYiHsxSyBFIQwiVliz%2BA3yPKxZSTCyp0AsaRnbBAyKoKz1Ycm79YXhUq%2Bukw1hI%2FqYFyoj7njXFpERTaBHaTOCkbYf7EkJmXCOmp88sXXvFeJ5elIYQhMqtVDFcyBqxtbIm0Mwx8bFjrPZRgziIl%2FuNVMI5LIhxItiEzBkyBxc4PeUfBGuuXUXsKbI5%2BoZ6YAl%2BDStjYPKf7m%2Fgfa7ErQFO6V%2BFbYe7Ehor4e2pyU5g4GqWc915NXoch0q%2BptpNPDUKvHI4oqySx26bpvQcaUbTUf9bLiCUbBBc21MvY618Tt7dOdjny1HTB0TSC8XBijjimGLWEcPPjEFG3tH8XzS4EKxRlwZQ5uZVCelm7qdorcmaupMh7VbZr3VbDTsa%2BeWdwqD2ZyZweIWNxDJGOxnOV8U55NIcL23umuEQQbBlt5icTKCsgAI9AXMJ2ItMwGOqUB76pJVYF0yF4ejnzuMexxC%2FXD8GWzf%2Bve6MUGTXIjUE28yiysTjKfQSR%2BqZl0wuYVId6aySXkvfMCbBrG0keXyyit%2FkCHVoRkPbeeZZrZUEkhRg87cBC7%2Bx4MQLG2iiOTulJcQWjM%2FOSV%2FVsXnhQKr3u5hxrYRN1BBlfea0S9gna%2F9mZOo6d8sCwrx%2Br6lkYNDGsPtXAl6eStHl4ndKAGSQjFW2Qv&X-Amz-Signature=3eaaad3454ebb7a57a0f813906920ea56a41296b432d6558e21d541e8a598985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPZAVM7%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCIDpFcib6XCa7Xir1EWQiyeWDXPQQiSroFQjZLUfv2vwIgfcyVwEBRzVLa44gILizl%2FG5TVk4cg9l0km4HeANFUMgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bc5JPqjU%2F%2BcTJSqCrcA1u5zC7xr8V4yP3FiiIaSmMhxClMO5r6zpb5RSKFeMMOqtocoBQ%2Bp09N6u9FW8aOMBOaPNC77520fCJMUCSro3q5A9dIC2ERr0lkBBzO4%2F56MG375IFExBQ3876GmP5vEca204tlmLwLSr7yR3JkNZCWgpD1XGT2G24sgYtBOsu%2BWJAxJOPzVS1KnjkyL1ZFx29K3uzrFolFvf6%2B%2B6GgllsB4scENkaivSTMgfFDLTvPexiv2jPJr4ofppIXxT8wpkPuPMX88Y4PdkL3i9f4q8rpzWpdxD5NPxeF203lDD45DbwYkMv1RAeecD2O02LjNU69a6uZ%2FpbiZItBamJtmiRfsH4U6Zk8Vt8c02NtvqQMxDipVJaCeswZlEY6Cg%2BKhx3PICzrZvclK%2Bcg5i7DXUHdAd5U3sKZ1fapeWjbYxgrpq4HrJu%2FG4yCFnJ5GADa548FJLUtCX%2BFX1eJeVAq0qd%2BEjomV%2BiXuvpdey%2ByXki3p9WEPqAVj1rUQwdQ5R87kZcpWd68Nh8OwreNQkHW%2Fd0Qt4vslEfHlSNMl4Kk28JvZf0rnm8mnFyt70KL9DBAlQvP7MxBFl%2FCg5C%2FFluGAjP9YNAFqo7rsPlrdTgjzZikQdnr%2BEpOsWzHW935MPrTtMwGOqUBHIVBVyJtbQtpPJIijznKzXiMj9KbfPdtLPROxLPpDL17vCpQ1nxgjLFTdZ0dmFQGUCxbsi1Xzy4gTpoiALKx6KISWUsVvBCpAPkLcBNpVBSleKoGpjo%2Fj6hGGBdKWbZCCcHy0zxU2Z2BQh%2B1zVBmTdiVmCPJx%2Ba9Iv%2BGFUm5R35Sb%2B5QIXvQ1gLu533toDl6cpgQZwI7Nn%2B8eOoX34pvh6i3lWZz&X-Amz-Signature=ef5d26732b72e0a7fd6b46c241d226bf23a3956011058d43633d1a9eaa2433ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJV2NO4%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEPbeUo%2FxaKjMwxSihyCZ%2BsgdYMJhDKlYERnseBUXpeJAiEAt98k6CMcPUsTiarP3J7R0NpKm7%2Fl4ePIQmrAdW1i%2BdgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJa9rWxmMJzskkkieircA4QrOjdMz3n8Z29EFpnonUN19e2VcVeo9Q1bumhXUVIwZpxyFm8y8IGyKEUYT%2FZtZtDKfm3L6wjGzEfB69qkWo2ifxCdPx0pvO4zzmvcwFajQH7AlAZhJdQex%2F2lEBUw6%2FmF3HcI6sTbvG7X0LNy1SrnmBG8KuOJYhGaJXQ7q6rhoXYpmcCgMxq7sWHazaez64OP6CfErh%2FZ6gWZPwArJTKW7BFkM9wk0ih1K3pcwLtE3Eq4GtNOR4rW6GsSdPJjPzxeeQycfdpiQImNIR9jadb6c%2Btootu6t%2B3lijDKmL8Sjl1bc7zDQqXlj2kQKdZ5HgDaTfMDMlQoff%2BU5N4NkNfglazjbDIyJH%2FpNuL%2BClv4jVJHlY6v9Y8U74sTkLcPUO8omxHw9dkZdrHemevJWnq%2F8w%2BuLWQ8ZQie5SJ2lygMetHvO0Onfskhs%2FfycMZij0TR28wB%2FDIIN4Yzuq%2Fc1osstNiloLMHqRlvOpCz1OTSaM6QaPMBkFIcoQXMk9HRpwORTTLX7V%2FgZ9B3Sl7NO849Dv4JOpJsnl4XFPR5KxCNZWLXa3s4fb6xlYFx5eDZJPAsXr2%2BMKJW5%2F0mGfLSQ7rpjtQ%2FZumGm8Lg3tNDwhEQMKHroY%2BrSal4aWpnMODTtMwGOqUBXZhifKgdjIKMr5KCpP9byuDWTp9R%2BBiYvXAK9zOMEj8HkLmwzCkRypO5pV6NiytkWKfUojgRUtZ2c5yOZuj8eO3sfIr%2FVOamfpv%2FHIaK4X%2BI6n%2ByNrbytqxlmg8dfcMIOrUW53dJ0fdkCbC8gvYJOvrpB%2BXjoFNx3FjPPXPqmJXuPfCY1h%2BJT%2Bn%2B5bbB3thgsbYQgebLSHE0S6vE4EgPgvsF4o6p&X-Amz-Signature=a2e539a2d60084c47d7e96a5e975017cfbfc3e5d749e514e6fb419e3808a2619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCYGQRJ3%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHeWfUVEgt5O4GgXATb06aBbHBYfAWLpjL%2BQCfgQSJQ%2FAiB1aF8AyCYyz0SxTndLxNswLzb8QWCj0lJbjiOrWgns1yqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXvO2RNQs7TJAp6%2BTKtwD7ZbCSnLB8aXSupv72FBHsAczVnMzC4MdbqhSE5fcaNpp5jd3bOqdsw1w5u%2B3moKUdYAsJMQnDr2GZJcNZEAVmwrNe7YU4fRSC6LT%2FV3G%2FjXQgAdJF6SRtrvEdjXBL8FfGinMJJs0vKew9brgSB4ougnU7FdpsA%2FNgvdcN8NjlUPe7yNgz4vCTqrmkVNczSgUwGOTNW48ogjD4dzVAmhYTgQfTHLB%2Fp9EI6w7szs7f7t8j7fzY1i6RECGg9zjGx0u5toKkY43E17RLOJ5KNbDhUXFf1a78LLcM8FmvlU7aDD%2FUjP08zbBUQ0Lz3riCmJ290xXr0TiXvBSheu2yID772ef3EzrMqK0HH7NNGizxVB8no8crlFErZXvwzU4D5K6ca79kGLCoMUmJQxABXoXVMj7Q%2BW%2FusUbG6aF6f9GJJQXGR3ih2o4meHrHt4Wd%2BDWLp3UdwiWZ5DAXhlqW1jQVJdFSN0oQBrBwcGBMgVrTbyB80FJMVp1KQ4nn%2FcGbs3lRSnQNvbY1Axsa3XtNYSGCa7irv5G3rWK%2BhKFAfmbCdvopt8GgHbW3aoZoy0aiNGsQ7Sb3ckvxRTtWRKKNcOYbUNIMjHTRD4gohf1WAKDEF9fFYvSCSTxqL0Ot%2BwwoMu0zAY6pgF58BmMnQ2OvAkgFcGmvlrM2M1%2F2YAM7XPdHWiTkIfjCRGoLLO0aH8%2BICcJR9WUCj2MQXQAy1ktXAT%2FB3jjAOIxFUzPeOZ0OUtjtCEMB%2F89vVnMqPs6hZQpm1sk01RzM0m17FUArKmQn8sdIOUybeeZ6M4smLPgoysWiNKH4VVQ5bTDk3XzTnTQMstlwsyVMfmfRvtiWWUvaubOIW8EPHJSFygwa4Br&X-Amz-Signature=b6a0c40a168d7eb700bd68377a5ec4e4edd9196d34a768bb80a848fd8adf41ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOK6IMM6%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIExZLNg0i06CATufkdWnBnXGqKuEmry0HINbaKVabYb6AiEA%2FkhZsRKu88qu8tyKrxDUm9m26JPn0Z%2BdQtJS9O6WxeMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkDSupDgXnPF52VmyrcA4i%2FKXqa5zYhC6I8EjyIuXSx7xW9q%2F9JtpFGkvhTLVC82ryLvv9zlFX98G72Rc1C34M35n72qAmaMK8A8VuZlTh3UslAJEy764tYTY9DqMrFC1hzk3S7BQRCX8btTuP6fweW49tUX%2F2QoF2ok6%2FYuzOc7FfihJQ%2BitTZPsJM6hQw%2Fyj%2BggPttAVkUblrbeEJr8JpfQqxpQ7qt84kHYL2ymgttpMQfvV1TDN5nf%2FAF0ETW43dMsfgRMtDoTNo4vICg7RzPdFjUfHbyzod4oEI2iQjQ4xqiCkSB0zq6T1himCoZie5e%2FJf5V%2Blhb5Z6lbgpG%2B2QkPsGKdUxlsTjeucpf1WKXav%2BjxLCC57CASr8J%2B%2BP1so9aWUGHo7L1n9r%2BWaePWGJe%2FiYf7Qy3rJ9ot6L3JkUMgdv42qrOjKufdDuylRqOE5XoFd8yyvrH4ZFk85ywcYmHiG9QFI%2BpG%2Fq075UtnDJLg%2FbgXSRA%2FX9EDnUYhbtsCqiBYQcmoRfcl5zNfBO6r7GdFfWFWD422TwdhZjYTfmU0AMWP%2B7498jSmHomdJyLY3e%2BHWwr46doPUbWvJ0K8eEVPvtd605D%2BmJcZqHubanvYOCaR6tkeQmI%2BIt%2B1YOa%2BXTfKdZhElxmgoMKbLtMwGOqUBoblst1UDotppUJqVNzjMrozpgQk4quJWcA9VliS2VcFU4%2F9kES%2BIJWo8Nj5geFCnAv%2Bb45lAXgdkgmnW9YdTxCI7o4hI5N30F20c80ZeHWEBeq89HXYnUhWgBvJZMeRcOo1hoIvLqXQe58HliKu%2FyESCzu7ZYJf2it4%2BM0oLgY08hSLYQPzS5vR8SJKjIfVZZB%2FiwjxMeweXGjKdORK%2FOZW1D4of&X-Amz-Signature=2ba16023fa2bd62b2696fd31e19b9cd7ff7cc4ab25eb771cead8eee2acdfdc61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPZAVM7%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCIDpFcib6XCa7Xir1EWQiyeWDXPQQiSroFQjZLUfv2vwIgfcyVwEBRzVLa44gILizl%2FG5TVk4cg9l0km4HeANFUMgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bc5JPqjU%2F%2BcTJSqCrcA1u5zC7xr8V4yP3FiiIaSmMhxClMO5r6zpb5RSKFeMMOqtocoBQ%2Bp09N6u9FW8aOMBOaPNC77520fCJMUCSro3q5A9dIC2ERr0lkBBzO4%2F56MG375IFExBQ3876GmP5vEca204tlmLwLSr7yR3JkNZCWgpD1XGT2G24sgYtBOsu%2BWJAxJOPzVS1KnjkyL1ZFx29K3uzrFolFvf6%2B%2B6GgllsB4scENkaivSTMgfFDLTvPexiv2jPJr4ofppIXxT8wpkPuPMX88Y4PdkL3i9f4q8rpzWpdxD5NPxeF203lDD45DbwYkMv1RAeecD2O02LjNU69a6uZ%2FpbiZItBamJtmiRfsH4U6Zk8Vt8c02NtvqQMxDipVJaCeswZlEY6Cg%2BKhx3PICzrZvclK%2Bcg5i7DXUHdAd5U3sKZ1fapeWjbYxgrpq4HrJu%2FG4yCFnJ5GADa548FJLUtCX%2BFX1eJeVAq0qd%2BEjomV%2BiXuvpdey%2ByXki3p9WEPqAVj1rUQwdQ5R87kZcpWd68Nh8OwreNQkHW%2Fd0Qt4vslEfHlSNMl4Kk28JvZf0rnm8mnFyt70KL9DBAlQvP7MxBFl%2FCg5C%2FFluGAjP9YNAFqo7rsPlrdTgjzZikQdnr%2BEpOsWzHW935MPrTtMwGOqUBHIVBVyJtbQtpPJIijznKzXiMj9KbfPdtLPROxLPpDL17vCpQ1nxgjLFTdZ0dmFQGUCxbsi1Xzy4gTpoiALKx6KISWUsVvBCpAPkLcBNpVBSleKoGpjo%2Fj6hGGBdKWbZCCcHy0zxU2Z2BQh%2B1zVBmTdiVmCPJx%2Ba9Iv%2BGFUm5R35Sb%2B5QIXvQ1gLu533toDl6cpgQZwI7Nn%2B8eOoX34pvh6i3lWZz&X-Amz-Signature=4ec203f0b6c56e67fea752ea1c94fcf60928098e7995ba393d5d258484d80efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPZAVM7%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCIDpFcib6XCa7Xir1EWQiyeWDXPQQiSroFQjZLUfv2vwIgfcyVwEBRzVLa44gILizl%2FG5TVk4cg9l0km4HeANFUMgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bc5JPqjU%2F%2BcTJSqCrcA1u5zC7xr8V4yP3FiiIaSmMhxClMO5r6zpb5RSKFeMMOqtocoBQ%2Bp09N6u9FW8aOMBOaPNC77520fCJMUCSro3q5A9dIC2ERr0lkBBzO4%2F56MG375IFExBQ3876GmP5vEca204tlmLwLSr7yR3JkNZCWgpD1XGT2G24sgYtBOsu%2BWJAxJOPzVS1KnjkyL1ZFx29K3uzrFolFvf6%2B%2B6GgllsB4scENkaivSTMgfFDLTvPexiv2jPJr4ofppIXxT8wpkPuPMX88Y4PdkL3i9f4q8rpzWpdxD5NPxeF203lDD45DbwYkMv1RAeecD2O02LjNU69a6uZ%2FpbiZItBamJtmiRfsH4U6Zk8Vt8c02NtvqQMxDipVJaCeswZlEY6Cg%2BKhx3PICzrZvclK%2Bcg5i7DXUHdAd5U3sKZ1fapeWjbYxgrpq4HrJu%2FG4yCFnJ5GADa548FJLUtCX%2BFX1eJeVAq0qd%2BEjomV%2BiXuvpdey%2ByXki3p9WEPqAVj1rUQwdQ5R87kZcpWd68Nh8OwreNQkHW%2Fd0Qt4vslEfHlSNMl4Kk28JvZf0rnm8mnFyt70KL9DBAlQvP7MxBFl%2FCg5C%2FFluGAjP9YNAFqo7rsPlrdTgjzZikQdnr%2BEpOsWzHW935MPrTtMwGOqUBHIVBVyJtbQtpPJIijznKzXiMj9KbfPdtLPROxLPpDL17vCpQ1nxgjLFTdZ0dmFQGUCxbsi1Xzy4gTpoiALKx6KISWUsVvBCpAPkLcBNpVBSleKoGpjo%2Fj6hGGBdKWbZCCcHy0zxU2Z2BQh%2B1zVBmTdiVmCPJx%2Ba9Iv%2BGFUm5R35Sb%2B5QIXvQ1gLu533toDl6cpgQZwI7Nn%2B8eOoX34pvh6i3lWZz&X-Amz-Signature=7f2e571e5d63bfdd84c30735f6941a56a7bd62e0a85c9a53fcd197bc6e62ae6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKIKCQYP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC6js7ebZKKa1XqZuw33F%2B%2FApZ2wtzM6w3UnqNes56cNQIgaH1V3n%2FutXwPvmZfVLeo2E%2B9Q5nq4mZiGZcnDlRp%2B3oqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJe78b9neADBhvOIpCrcA2k9gvuHRiwB93kKg90fZuED0SJyCXg%2B%2FxQqYtX3%2BLMqMlfz7lwerYieLinw6cZpF4eQjWu96lABjtJVJk8CjYDbdukbWfPyrb2N6mSDF0uDTUvVwxERwPuq42%2BsPMTi869%2Fdp4G%2BpZjJX%2BYIrSIaKKo5at1eOU1rk44FQ62TCVQzFEuh2x9DX%2FzCLsDsrFnkNsN1bkN%2FgogrEvvz%2BOGigdS22gDKT%2B3UrphBFaW6bkMhpJLjtdW23loScXIjXWOVPR0P9UCH7%2BlsXG3syzV4Cvf1%2FCY50E9Ej2BT3FJ9r%2B0%2F3iF4C01yK5IWKTjI6ypFqECuFShhJbDKGH%2BgN7cyr5UFaMgz95Z%2BWMKpXc62cFaT9MtVaYxZTbmHkvXPk%2FvnnPkY8kXV1%2Bal10OaZas9YKjNaTsOtmbanTDGWRBe8etTixgCgzj4QT77otBfHEU9PHU3g1viXwjwmfCCOMB5VF06GPEqm%2B4dAtGAuwYwDVbTPHfRz9WszfHHXtvMOzkbuGaU5pAPaxYNTx19htaCm87o9joM%2BuVWqmx8YDTqZAfvXtmQr9j7Wx54dcCPSkEhwojwjCZmHLABljezjVinLbOZ3EvSdw3cs9DCIuO7IyOgK4ymwx%2F4X4iZV8CMKjNtMwGOqUBKhQT4Bye8D36TuXEx%2BGjXHTe1cGOyqiVxjBoI6vcarJO825%2FQEP2C1BOL9%2F6xYPfWsOFa2oDWOQZMWNoXu%2BKw2kd0C4GHDb%2BzMLaAQNDc%2BoKfcjO2KAeONTr8b7dMefKcEvnERR2hNmdBH4sF%2FtL6du6oJcTA0EmaZ8yUlmxd7JTFr4jx44r%2FQvlCLAJzV3nAOsV804S2dIJ93vGn3ne3DR%2FDkXa&X-Amz-Signature=9ada974121960fa5f434742d5cfa5e03d0933d4760fa02338b58a59a36ecba6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKIKCQYP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC6js7ebZKKa1XqZuw33F%2B%2FApZ2wtzM6w3UnqNes56cNQIgaH1V3n%2FutXwPvmZfVLeo2E%2B9Q5nq4mZiGZcnDlRp%2B3oqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJe78b9neADBhvOIpCrcA2k9gvuHRiwB93kKg90fZuED0SJyCXg%2B%2FxQqYtX3%2BLMqMlfz7lwerYieLinw6cZpF4eQjWu96lABjtJVJk8CjYDbdukbWfPyrb2N6mSDF0uDTUvVwxERwPuq42%2BsPMTi869%2Fdp4G%2BpZjJX%2BYIrSIaKKo5at1eOU1rk44FQ62TCVQzFEuh2x9DX%2FzCLsDsrFnkNsN1bkN%2FgogrEvvz%2BOGigdS22gDKT%2B3UrphBFaW6bkMhpJLjtdW23loScXIjXWOVPR0P9UCH7%2BlsXG3syzV4Cvf1%2FCY50E9Ej2BT3FJ9r%2B0%2F3iF4C01yK5IWKTjI6ypFqECuFShhJbDKGH%2BgN7cyr5UFaMgz95Z%2BWMKpXc62cFaT9MtVaYxZTbmHkvXPk%2FvnnPkY8kXV1%2Bal10OaZas9YKjNaTsOtmbanTDGWRBe8etTixgCgzj4QT77otBfHEU9PHU3g1viXwjwmfCCOMB5VF06GPEqm%2B4dAtGAuwYwDVbTPHfRz9WszfHHXtvMOzkbuGaU5pAPaxYNTx19htaCm87o9joM%2BuVWqmx8YDTqZAfvXtmQr9j7Wx54dcCPSkEhwojwjCZmHLABljezjVinLbOZ3EvSdw3cs9DCIuO7IyOgK4ymwx%2F4X4iZV8CMKjNtMwGOqUBKhQT4Bye8D36TuXEx%2BGjXHTe1cGOyqiVxjBoI6vcarJO825%2FQEP2C1BOL9%2F6xYPfWsOFa2oDWOQZMWNoXu%2BKw2kd0C4GHDb%2BzMLaAQNDc%2BoKfcjO2KAeONTr8b7dMefKcEvnERR2hNmdBH4sF%2FtL6du6oJcTA0EmaZ8yUlmxd7JTFr4jx44r%2FQvlCLAJzV3nAOsV804S2dIJ93vGn3ne3DR%2FDkXa&X-Amz-Signature=d54ac27a6520766a56f8b576036b2c9deaf6318d4d27bf737cd66e2d3f46bb8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKIKCQYP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC6js7ebZKKa1XqZuw33F%2B%2FApZ2wtzM6w3UnqNes56cNQIgaH1V3n%2FutXwPvmZfVLeo2E%2B9Q5nq4mZiGZcnDlRp%2B3oqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJe78b9neADBhvOIpCrcA2k9gvuHRiwB93kKg90fZuED0SJyCXg%2B%2FxQqYtX3%2BLMqMlfz7lwerYieLinw6cZpF4eQjWu96lABjtJVJk8CjYDbdukbWfPyrb2N6mSDF0uDTUvVwxERwPuq42%2BsPMTi869%2Fdp4G%2BpZjJX%2BYIrSIaKKo5at1eOU1rk44FQ62TCVQzFEuh2x9DX%2FzCLsDsrFnkNsN1bkN%2FgogrEvvz%2BOGigdS22gDKT%2B3UrphBFaW6bkMhpJLjtdW23loScXIjXWOVPR0P9UCH7%2BlsXG3syzV4Cvf1%2FCY50E9Ej2BT3FJ9r%2B0%2F3iF4C01yK5IWKTjI6ypFqECuFShhJbDKGH%2BgN7cyr5UFaMgz95Z%2BWMKpXc62cFaT9MtVaYxZTbmHkvXPk%2FvnnPkY8kXV1%2Bal10OaZas9YKjNaTsOtmbanTDGWRBe8etTixgCgzj4QT77otBfHEU9PHU3g1viXwjwmfCCOMB5VF06GPEqm%2B4dAtGAuwYwDVbTPHfRz9WszfHHXtvMOzkbuGaU5pAPaxYNTx19htaCm87o9joM%2BuVWqmx8YDTqZAfvXtmQr9j7Wx54dcCPSkEhwojwjCZmHLABljezjVinLbOZ3EvSdw3cs9DCIuO7IyOgK4ymwx%2F4X4iZV8CMKjNtMwGOqUBKhQT4Bye8D36TuXEx%2BGjXHTe1cGOyqiVxjBoI6vcarJO825%2FQEP2C1BOL9%2F6xYPfWsOFa2oDWOQZMWNoXu%2BKw2kd0C4GHDb%2BzMLaAQNDc%2BoKfcjO2KAeONTr8b7dMefKcEvnERR2hNmdBH4sF%2FtL6du6oJcTA0EmaZ8yUlmxd7JTFr4jx44r%2FQvlCLAJzV3nAOsV804S2dIJ93vGn3ne3DR%2FDkXa&X-Amz-Signature=b04dddc0c4e137eba011ab090df16a6cfe4f0a027ed773cccf0396240ff5c483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKIKCQYP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC6js7ebZKKa1XqZuw33F%2B%2FApZ2wtzM6w3UnqNes56cNQIgaH1V3n%2FutXwPvmZfVLeo2E%2B9Q5nq4mZiGZcnDlRp%2B3oqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJe78b9neADBhvOIpCrcA2k9gvuHRiwB93kKg90fZuED0SJyCXg%2B%2FxQqYtX3%2BLMqMlfz7lwerYieLinw6cZpF4eQjWu96lABjtJVJk8CjYDbdukbWfPyrb2N6mSDF0uDTUvVwxERwPuq42%2BsPMTi869%2Fdp4G%2BpZjJX%2BYIrSIaKKo5at1eOU1rk44FQ62TCVQzFEuh2x9DX%2FzCLsDsrFnkNsN1bkN%2FgogrEvvz%2BOGigdS22gDKT%2B3UrphBFaW6bkMhpJLjtdW23loScXIjXWOVPR0P9UCH7%2BlsXG3syzV4Cvf1%2FCY50E9Ej2BT3FJ9r%2B0%2F3iF4C01yK5IWKTjI6ypFqECuFShhJbDKGH%2BgN7cyr5UFaMgz95Z%2BWMKpXc62cFaT9MtVaYxZTbmHkvXPk%2FvnnPkY8kXV1%2Bal10OaZas9YKjNaTsOtmbanTDGWRBe8etTixgCgzj4QT77otBfHEU9PHU3g1viXwjwmfCCOMB5VF06GPEqm%2B4dAtGAuwYwDVbTPHfRz9WszfHHXtvMOzkbuGaU5pAPaxYNTx19htaCm87o9joM%2BuVWqmx8YDTqZAfvXtmQr9j7Wx54dcCPSkEhwojwjCZmHLABljezjVinLbOZ3EvSdw3cs9DCIuO7IyOgK4ymwx%2F4X4iZV8CMKjNtMwGOqUBKhQT4Bye8D36TuXEx%2BGjXHTe1cGOyqiVxjBoI6vcarJO825%2FQEP2C1BOL9%2F6xYPfWsOFa2oDWOQZMWNoXu%2BKw2kd0C4GHDb%2BzMLaAQNDc%2BoKfcjO2KAeONTr8b7dMefKcEvnERR2hNmdBH4sF%2FtL6du6oJcTA0EmaZ8yUlmxd7JTFr4jx44r%2FQvlCLAJzV3nAOsV804S2dIJ93vGn3ne3DR%2FDkXa&X-Amz-Signature=da8a5e15cb8b7d69cadac235504e7bb858837b40c198b4a10bed09e92852ed28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQESIYQS%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAYrdu08M%2F8O5eVUpp%2FbiiPs%2BaBSEv5mGzxOgaQnIyfuAiEAvOb3FE3DYXnohhdilH9ITrmT6q8ZUStR98f1zJwMIJEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcVTl2d16vwLjsTDCrcA867bqX6dnxvP1zY2u7diidlPa6m569bJnB4JGkHFt%2Buo6eo81qgNzmo5k2WZe7Kq19VpYRGOjj850%2BoqzXeGvzWt8a64S4DB%2FBNwefVStN8644up6DdFL2lzm6U3vVf%2BqQKrI2Si2%2BhbbjlupMg74wqmqF3qsE%2Bvlb0Kr17GuOEYwgG7yCPSXBubAF%2FNWO55eDvYDilAMbS9v6pPEcfhby0fys4NM4HMYyDsLlq9r7k4ja8ofZtgQsw761WSk7JhdoDmqX6eYMW3OmMA374nc0%2FEAqL9Ev7GE2MncV1huZDiZ2o%2BNj71dbTE0knIY%2FLYQfTFDHGeZk3hCzRiXtxs3UdnnzwsYP15%2Ftzd4wzkXMOAKa4d5QyqvbwhsJCUBEUbR5NvRJaYZ8sllnQQE6SRw0E2628HmOGq67nrL1AKkHgoIbxpXf4TCGDX%2BngefK7gezsKq092hjDKwkT%2Fpl248TnMQGp%2BxqdoCvhG1pRaiGaVzP1LOwAkVs1gGGK4tl3xImRxpaowjwihjGFxtfTyQPfKoAusCWia8tZGA4IVYb87sN5JtTI%2FRVAL8pchb75Cfmzk3usWxPgkuQoZw6jStSn8wSo%2BaQInnKQWt1Gc9ZhmuWyUAeAF3yvr6IWMPvMtMwGOqUBcXEeVH9iaf8ES%2BIxlpgvDR9XCMHEsJ3EeBcMb6u1q3Cr3RSUrb1pXeqQF6%2BYOYhGz8PheaVHRMCjxxYsA8Eit5xUouZvyYYgPcUKV3zzRpjxkNyRJ%2FVV3PC2rhB70WLUsMp9GAsnXOshy4n1p2%2FN6EpiXfIRb%2BbR58KyVwHVKr4Gy1peEKrEA926IzUytTvYnGS9Lp7yB49yU6T59InJCCTrDkHU&X-Amz-Signature=f47a98d192c0e29a31cfe40db80ae8c72030a1d8ef1129104b7d47edef8e1327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKIKCQYP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC6js7ebZKKa1XqZuw33F%2B%2FApZ2wtzM6w3UnqNes56cNQIgaH1V3n%2FutXwPvmZfVLeo2E%2B9Q5nq4mZiGZcnDlRp%2B3oqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJe78b9neADBhvOIpCrcA2k9gvuHRiwB93kKg90fZuED0SJyCXg%2B%2FxQqYtX3%2BLMqMlfz7lwerYieLinw6cZpF4eQjWu96lABjtJVJk8CjYDbdukbWfPyrb2N6mSDF0uDTUvVwxERwPuq42%2BsPMTi869%2Fdp4G%2BpZjJX%2BYIrSIaKKo5at1eOU1rk44FQ62TCVQzFEuh2x9DX%2FzCLsDsrFnkNsN1bkN%2FgogrEvvz%2BOGigdS22gDKT%2B3UrphBFaW6bkMhpJLjtdW23loScXIjXWOVPR0P9UCH7%2BlsXG3syzV4Cvf1%2FCY50E9Ej2BT3FJ9r%2B0%2F3iF4C01yK5IWKTjI6ypFqECuFShhJbDKGH%2BgN7cyr5UFaMgz95Z%2BWMKpXc62cFaT9MtVaYxZTbmHkvXPk%2FvnnPkY8kXV1%2Bal10OaZas9YKjNaTsOtmbanTDGWRBe8etTixgCgzj4QT77otBfHEU9PHU3g1viXwjwmfCCOMB5VF06GPEqm%2B4dAtGAuwYwDVbTPHfRz9WszfHHXtvMOzkbuGaU5pAPaxYNTx19htaCm87o9joM%2BuVWqmx8YDTqZAfvXtmQr9j7Wx54dcCPSkEhwojwjCZmHLABljezjVinLbOZ3EvSdw3cs9DCIuO7IyOgK4ymwx%2F4X4iZV8CMKjNtMwGOqUBKhQT4Bye8D36TuXEx%2BGjXHTe1cGOyqiVxjBoI6vcarJO825%2FQEP2C1BOL9%2F6xYPfWsOFa2oDWOQZMWNoXu%2BKw2kd0C4GHDb%2BzMLaAQNDc%2BoKfcjO2KAeONTr8b7dMefKcEvnERR2hNmdBH4sF%2FtL6du6oJcTA0EmaZ8yUlmxd7JTFr4jx44r%2FQvlCLAJzV3nAOsV804S2dIJ93vGn3ne3DR%2FDkXa&X-Amz-Signature=515733f3988d6097aa753c475b7183e1cef72ab7e8903bded9c851fa0e68bdd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKIKCQYP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC6js7ebZKKa1XqZuw33F%2B%2FApZ2wtzM6w3UnqNes56cNQIgaH1V3n%2FutXwPvmZfVLeo2E%2B9Q5nq4mZiGZcnDlRp%2B3oqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJe78b9neADBhvOIpCrcA2k9gvuHRiwB93kKg90fZuED0SJyCXg%2B%2FxQqYtX3%2BLMqMlfz7lwerYieLinw6cZpF4eQjWu96lABjtJVJk8CjYDbdukbWfPyrb2N6mSDF0uDTUvVwxERwPuq42%2BsPMTi869%2Fdp4G%2BpZjJX%2BYIrSIaKKo5at1eOU1rk44FQ62TCVQzFEuh2x9DX%2FzCLsDsrFnkNsN1bkN%2FgogrEvvz%2BOGigdS22gDKT%2B3UrphBFaW6bkMhpJLjtdW23loScXIjXWOVPR0P9UCH7%2BlsXG3syzV4Cvf1%2FCY50E9Ej2BT3FJ9r%2B0%2F3iF4C01yK5IWKTjI6ypFqECuFShhJbDKGH%2BgN7cyr5UFaMgz95Z%2BWMKpXc62cFaT9MtVaYxZTbmHkvXPk%2FvnnPkY8kXV1%2Bal10OaZas9YKjNaTsOtmbanTDGWRBe8etTixgCgzj4QT77otBfHEU9PHU3g1viXwjwmfCCOMB5VF06GPEqm%2B4dAtGAuwYwDVbTPHfRz9WszfHHXtvMOzkbuGaU5pAPaxYNTx19htaCm87o9joM%2BuVWqmx8YDTqZAfvXtmQr9j7Wx54dcCPSkEhwojwjCZmHLABljezjVinLbOZ3EvSdw3cs9DCIuO7IyOgK4ymwx%2F4X4iZV8CMKjNtMwGOqUBKhQT4Bye8D36TuXEx%2BGjXHTe1cGOyqiVxjBoI6vcarJO825%2FQEP2C1BOL9%2F6xYPfWsOFa2oDWOQZMWNoXu%2BKw2kd0C4GHDb%2BzMLaAQNDc%2BoKfcjO2KAeONTr8b7dMefKcEvnERR2hNmdBH4sF%2FtL6du6oJcTA0EmaZ8yUlmxd7JTFr4jx44r%2FQvlCLAJzV3nAOsV804S2dIJ93vGn3ne3DR%2FDkXa&X-Amz-Signature=681f99ecb56751deed72fc3ca38f14af91618871e80841e93d0bb053b56192d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKIKCQYP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC6js7ebZKKa1XqZuw33F%2B%2FApZ2wtzM6w3UnqNes56cNQIgaH1V3n%2FutXwPvmZfVLeo2E%2B9Q5nq4mZiGZcnDlRp%2B3oqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJe78b9neADBhvOIpCrcA2k9gvuHRiwB93kKg90fZuED0SJyCXg%2B%2FxQqYtX3%2BLMqMlfz7lwerYieLinw6cZpF4eQjWu96lABjtJVJk8CjYDbdukbWfPyrb2N6mSDF0uDTUvVwxERwPuq42%2BsPMTi869%2Fdp4G%2BpZjJX%2BYIrSIaKKo5at1eOU1rk44FQ62TCVQzFEuh2x9DX%2FzCLsDsrFnkNsN1bkN%2FgogrEvvz%2BOGigdS22gDKT%2B3UrphBFaW6bkMhpJLjtdW23loScXIjXWOVPR0P9UCH7%2BlsXG3syzV4Cvf1%2FCY50E9Ej2BT3FJ9r%2B0%2F3iF4C01yK5IWKTjI6ypFqECuFShhJbDKGH%2BgN7cyr5UFaMgz95Z%2BWMKpXc62cFaT9MtVaYxZTbmHkvXPk%2FvnnPkY8kXV1%2Bal10OaZas9YKjNaTsOtmbanTDGWRBe8etTixgCgzj4QT77otBfHEU9PHU3g1viXwjwmfCCOMB5VF06GPEqm%2B4dAtGAuwYwDVbTPHfRz9WszfHHXtvMOzkbuGaU5pAPaxYNTx19htaCm87o9joM%2BuVWqmx8YDTqZAfvXtmQr9j7Wx54dcCPSkEhwojwjCZmHLABljezjVinLbOZ3EvSdw3cs9DCIuO7IyOgK4ymwx%2F4X4iZV8CMKjNtMwGOqUBKhQT4Bye8D36TuXEx%2BGjXHTe1cGOyqiVxjBoI6vcarJO825%2FQEP2C1BOL9%2F6xYPfWsOFa2oDWOQZMWNoXu%2BKw2kd0C4GHDb%2BzMLaAQNDc%2BoKfcjO2KAeONTr8b7dMefKcEvnERR2hNmdBH4sF%2FtL6du6oJcTA0EmaZ8yUlmxd7JTFr4jx44r%2FQvlCLAJzV3nAOsV804S2dIJ93vGn3ne3DR%2FDkXa&X-Amz-Signature=b04dddc0c4e137eba011ab090df16a6cfe4f0a027ed773cccf0396240ff5c483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKIKCQYP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC6js7ebZKKa1XqZuw33F%2B%2FApZ2wtzM6w3UnqNes56cNQIgaH1V3n%2FutXwPvmZfVLeo2E%2B9Q5nq4mZiGZcnDlRp%2B3oqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJe78b9neADBhvOIpCrcA2k9gvuHRiwB93kKg90fZuED0SJyCXg%2B%2FxQqYtX3%2BLMqMlfz7lwerYieLinw6cZpF4eQjWu96lABjtJVJk8CjYDbdukbWfPyrb2N6mSDF0uDTUvVwxERwPuq42%2BsPMTi869%2Fdp4G%2BpZjJX%2BYIrSIaKKo5at1eOU1rk44FQ62TCVQzFEuh2x9DX%2FzCLsDsrFnkNsN1bkN%2FgogrEvvz%2BOGigdS22gDKT%2B3UrphBFaW6bkMhpJLjtdW23loScXIjXWOVPR0P9UCH7%2BlsXG3syzV4Cvf1%2FCY50E9Ej2BT3FJ9r%2B0%2F3iF4C01yK5IWKTjI6ypFqECuFShhJbDKGH%2BgN7cyr5UFaMgz95Z%2BWMKpXc62cFaT9MtVaYxZTbmHkvXPk%2FvnnPkY8kXV1%2Bal10OaZas9YKjNaTsOtmbanTDGWRBe8etTixgCgzj4QT77otBfHEU9PHU3g1viXwjwmfCCOMB5VF06GPEqm%2B4dAtGAuwYwDVbTPHfRz9WszfHHXtvMOzkbuGaU5pAPaxYNTx19htaCm87o9joM%2BuVWqmx8YDTqZAfvXtmQr9j7Wx54dcCPSkEhwojwjCZmHLABljezjVinLbOZ3EvSdw3cs9DCIuO7IyOgK4ymwx%2F4X4iZV8CMKjNtMwGOqUBKhQT4Bye8D36TuXEx%2BGjXHTe1cGOyqiVxjBoI6vcarJO825%2FQEP2C1BOL9%2F6xYPfWsOFa2oDWOQZMWNoXu%2BKw2kd0C4GHDb%2BzMLaAQNDc%2BoKfcjO2KAeONTr8b7dMefKcEvnERR2hNmdBH4sF%2FtL6du6oJcTA0EmaZ8yUlmxd7JTFr4jx44r%2FQvlCLAJzV3nAOsV804S2dIJ93vGn3ne3DR%2FDkXa&X-Amz-Signature=2039a51b0a46ac62eab8fa311e5ebd377a7e9194d5ea413e5648e33f01820349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKIKCQYP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC6js7ebZKKa1XqZuw33F%2B%2FApZ2wtzM6w3UnqNes56cNQIgaH1V3n%2FutXwPvmZfVLeo2E%2B9Q5nq4mZiGZcnDlRp%2B3oqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJe78b9neADBhvOIpCrcA2k9gvuHRiwB93kKg90fZuED0SJyCXg%2B%2FxQqYtX3%2BLMqMlfz7lwerYieLinw6cZpF4eQjWu96lABjtJVJk8CjYDbdukbWfPyrb2N6mSDF0uDTUvVwxERwPuq42%2BsPMTi869%2Fdp4G%2BpZjJX%2BYIrSIaKKo5at1eOU1rk44FQ62TCVQzFEuh2x9DX%2FzCLsDsrFnkNsN1bkN%2FgogrEvvz%2BOGigdS22gDKT%2B3UrphBFaW6bkMhpJLjtdW23loScXIjXWOVPR0P9UCH7%2BlsXG3syzV4Cvf1%2FCY50E9Ej2BT3FJ9r%2B0%2F3iF4C01yK5IWKTjI6ypFqECuFShhJbDKGH%2BgN7cyr5UFaMgz95Z%2BWMKpXc62cFaT9MtVaYxZTbmHkvXPk%2FvnnPkY8kXV1%2Bal10OaZas9YKjNaTsOtmbanTDGWRBe8etTixgCgzj4QT77otBfHEU9PHU3g1viXwjwmfCCOMB5VF06GPEqm%2B4dAtGAuwYwDVbTPHfRz9WszfHHXtvMOzkbuGaU5pAPaxYNTx19htaCm87o9joM%2BuVWqmx8YDTqZAfvXtmQr9j7Wx54dcCPSkEhwojwjCZmHLABljezjVinLbOZ3EvSdw3cs9DCIuO7IyOgK4ymwx%2F4X4iZV8CMKjNtMwGOqUBKhQT4Bye8D36TuXEx%2BGjXHTe1cGOyqiVxjBoI6vcarJO825%2FQEP2C1BOL9%2F6xYPfWsOFa2oDWOQZMWNoXu%2BKw2kd0C4GHDb%2BzMLaAQNDc%2BoKfcjO2KAeONTr8b7dMefKcEvnERR2hNmdBH4sF%2FtL6du6oJcTA0EmaZ8yUlmxd7JTFr4jx44r%2FQvlCLAJzV3nAOsV804S2dIJ93vGn3ne3DR%2FDkXa&X-Amz-Signature=602baa7d3979441f69b81572ebd5b0b0d7a4d5bb02f3b72e9ac59f5c2aa16b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKIKCQYP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC6js7ebZKKa1XqZuw33F%2B%2FApZ2wtzM6w3UnqNes56cNQIgaH1V3n%2FutXwPvmZfVLeo2E%2B9Q5nq4mZiGZcnDlRp%2B3oqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJe78b9neADBhvOIpCrcA2k9gvuHRiwB93kKg90fZuED0SJyCXg%2B%2FxQqYtX3%2BLMqMlfz7lwerYieLinw6cZpF4eQjWu96lABjtJVJk8CjYDbdukbWfPyrb2N6mSDF0uDTUvVwxERwPuq42%2BsPMTi869%2Fdp4G%2BpZjJX%2BYIrSIaKKo5at1eOU1rk44FQ62TCVQzFEuh2x9DX%2FzCLsDsrFnkNsN1bkN%2FgogrEvvz%2BOGigdS22gDKT%2B3UrphBFaW6bkMhpJLjtdW23loScXIjXWOVPR0P9UCH7%2BlsXG3syzV4Cvf1%2FCY50E9Ej2BT3FJ9r%2B0%2F3iF4C01yK5IWKTjI6ypFqECuFShhJbDKGH%2BgN7cyr5UFaMgz95Z%2BWMKpXc62cFaT9MtVaYxZTbmHkvXPk%2FvnnPkY8kXV1%2Bal10OaZas9YKjNaTsOtmbanTDGWRBe8etTixgCgzj4QT77otBfHEU9PHU3g1viXwjwmfCCOMB5VF06GPEqm%2B4dAtGAuwYwDVbTPHfRz9WszfHHXtvMOzkbuGaU5pAPaxYNTx19htaCm87o9joM%2BuVWqmx8YDTqZAfvXtmQr9j7Wx54dcCPSkEhwojwjCZmHLABljezjVinLbOZ3EvSdw3cs9DCIuO7IyOgK4ymwx%2F4X4iZV8CMKjNtMwGOqUBKhQT4Bye8D36TuXEx%2BGjXHTe1cGOyqiVxjBoI6vcarJO825%2FQEP2C1BOL9%2F6xYPfWsOFa2oDWOQZMWNoXu%2BKw2kd0C4GHDb%2BzMLaAQNDc%2BoKfcjO2KAeONTr8b7dMefKcEvnERR2hNmdBH4sF%2FtL6du6oJcTA0EmaZ8yUlmxd7JTFr4jx44r%2FQvlCLAJzV3nAOsV804S2dIJ93vGn3ne3DR%2FDkXa&X-Amz-Signature=097ac2d1d06a649a11d4548fedd2172902c635e421e14f7c62dd9c28902ecb7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


