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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXRFCXL%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBsL1ELfTGKTNsIBH2HUke2UqnvCO3CSkoWpQ8RYyUepAiEAqhi6pi3VjaSrFv2fZNE53OocdJdIyZbz7KjzkQmljBgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW0V%2FD0o%2BTr1WHneircA1fW7n6M%2BaD%2BPuslmKQyjZDHKGAQobuWltns21SzfF2wtZ2LYPqDtCm2232zTssn4PhGoC7cTMoX4%2F53lOdqGm3nFaU1ILVkO0MFqgzCvz6FjPw6xgh2Q5kMuBvmnQmBRWioMu00FTiDswZ4SesTO0KpDGyFUqArnEEse%2B73MEvW1lZYp2i3SiqOFCDTD8I2vf%2FaaHgQ%2BEzti%2B4SA%2Br7gqeRf4zLh1KNdPcOZSgNr5bGrcKhcpcAAHnQ5T37q28exjlMz9JKJdMosmJ3OrsgSJ%2FhtcMGuyHCz17IOKefFCVbTXT%2F3vvAc94h1rk4FurirwT34CCkk6g9pM56kbScF6HeI6GnA7O1zpv7lCbTeqvykke84zQjPRyws6uSHkq2jjABpRnsxuhYRaO4lGjnnUcqKcQjeCh5I03Ua22Uuzg3P8Ew9LBxy54rFv71LHSdteab5tHmYbphjYo1FShWcxgKcNg4kRRVpCR6JVvM5PsDKwpJJOT9%2BcDp35f%2FoN%2BxAorjIShI9LaYjY78xyDJXk2aEh8YcAQa%2B0IYW7xCGXFl0kgVFhRub8DrQdF16dpYVORY52Wwhic5KfFTaxGzxwVFaiB6Bc5HN%2Bz3mwwQjLK17E7%2FNc4BeUUwxXriMODYrckGOqUBgKbjGXMPV8nmvZxa0y%2B1uVUSf8aKEPRGYa8mfXFGI%2BOrVzrqUGAz3aIp%2BT%2BlLNHtN7%2F%2B%2FXe7lCc75KehqXqtlS7UMp7ulQ8mgQCXV2eeYUgRHjYUaNKLKD3bDcpN%2B0E73dhZuFol6DLypxQ8tYeleAnMtAfyn91X3EYzbyZPZufSGs1%2FWvcl1ELf0kpxCExOeqBHxja%2BqkdtGmRxe3WmPPYYFkfi&X-Amz-Signature=a73c55017723c41f1f0aa7c4d7ce73b7771a01d8c1cf0071d54752142b00b976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXRFCXL%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBsL1ELfTGKTNsIBH2HUke2UqnvCO3CSkoWpQ8RYyUepAiEAqhi6pi3VjaSrFv2fZNE53OocdJdIyZbz7KjzkQmljBgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW0V%2FD0o%2BTr1WHneircA1fW7n6M%2BaD%2BPuslmKQyjZDHKGAQobuWltns21SzfF2wtZ2LYPqDtCm2232zTssn4PhGoC7cTMoX4%2F53lOdqGm3nFaU1ILVkO0MFqgzCvz6FjPw6xgh2Q5kMuBvmnQmBRWioMu00FTiDswZ4SesTO0KpDGyFUqArnEEse%2B73MEvW1lZYp2i3SiqOFCDTD8I2vf%2FaaHgQ%2BEzti%2B4SA%2Br7gqeRf4zLh1KNdPcOZSgNr5bGrcKhcpcAAHnQ5T37q28exjlMz9JKJdMosmJ3OrsgSJ%2FhtcMGuyHCz17IOKefFCVbTXT%2F3vvAc94h1rk4FurirwT34CCkk6g9pM56kbScF6HeI6GnA7O1zpv7lCbTeqvykke84zQjPRyws6uSHkq2jjABpRnsxuhYRaO4lGjnnUcqKcQjeCh5I03Ua22Uuzg3P8Ew9LBxy54rFv71LHSdteab5tHmYbphjYo1FShWcxgKcNg4kRRVpCR6JVvM5PsDKwpJJOT9%2BcDp35f%2FoN%2BxAorjIShI9LaYjY78xyDJXk2aEh8YcAQa%2B0IYW7xCGXFl0kgVFhRub8DrQdF16dpYVORY52Wwhic5KfFTaxGzxwVFaiB6Bc5HN%2Bz3mwwQjLK17E7%2FNc4BeUUwxXriMODYrckGOqUBgKbjGXMPV8nmvZxa0y%2B1uVUSf8aKEPRGYa8mfXFGI%2BOrVzrqUGAz3aIp%2BT%2BlLNHtN7%2F%2B%2FXe7lCc75KehqXqtlS7UMp7ulQ8mgQCXV2eeYUgRHjYUaNKLKD3bDcpN%2B0E73dhZuFol6DLypxQ8tYeleAnMtAfyn91X3EYzbyZPZufSGs1%2FWvcl1ELf0kpxCExOeqBHxja%2BqkdtGmRxe3WmPPYYFkfi&X-Amz-Signature=208496cd47c76c87f18d79eb8a547e7692e61daa235e0967d1957d584595a9b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXRFCXL%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBsL1ELfTGKTNsIBH2HUke2UqnvCO3CSkoWpQ8RYyUepAiEAqhi6pi3VjaSrFv2fZNE53OocdJdIyZbz7KjzkQmljBgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW0V%2FD0o%2BTr1WHneircA1fW7n6M%2BaD%2BPuslmKQyjZDHKGAQobuWltns21SzfF2wtZ2LYPqDtCm2232zTssn4PhGoC7cTMoX4%2F53lOdqGm3nFaU1ILVkO0MFqgzCvz6FjPw6xgh2Q5kMuBvmnQmBRWioMu00FTiDswZ4SesTO0KpDGyFUqArnEEse%2B73MEvW1lZYp2i3SiqOFCDTD8I2vf%2FaaHgQ%2BEzti%2B4SA%2Br7gqeRf4zLh1KNdPcOZSgNr5bGrcKhcpcAAHnQ5T37q28exjlMz9JKJdMosmJ3OrsgSJ%2FhtcMGuyHCz17IOKefFCVbTXT%2F3vvAc94h1rk4FurirwT34CCkk6g9pM56kbScF6HeI6GnA7O1zpv7lCbTeqvykke84zQjPRyws6uSHkq2jjABpRnsxuhYRaO4lGjnnUcqKcQjeCh5I03Ua22Uuzg3P8Ew9LBxy54rFv71LHSdteab5tHmYbphjYo1FShWcxgKcNg4kRRVpCR6JVvM5PsDKwpJJOT9%2BcDp35f%2FoN%2BxAorjIShI9LaYjY78xyDJXk2aEh8YcAQa%2B0IYW7xCGXFl0kgVFhRub8DrQdF16dpYVORY52Wwhic5KfFTaxGzxwVFaiB6Bc5HN%2Bz3mwwQjLK17E7%2FNc4BeUUwxXriMODYrckGOqUBgKbjGXMPV8nmvZxa0y%2B1uVUSf8aKEPRGYa8mfXFGI%2BOrVzrqUGAz3aIp%2BT%2BlLNHtN7%2F%2B%2FXe7lCc75KehqXqtlS7UMp7ulQ8mgQCXV2eeYUgRHjYUaNKLKD3bDcpN%2B0E73dhZuFol6DLypxQ8tYeleAnMtAfyn91X3EYzbyZPZufSGs1%2FWvcl1ELf0kpxCExOeqBHxja%2BqkdtGmRxe3WmPPYYFkfi&X-Amz-Signature=4a4d188f604cea8ff38fed15c62fc20797a21888fafc6eba424eaa02bc146837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXRFCXL%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBsL1ELfTGKTNsIBH2HUke2UqnvCO3CSkoWpQ8RYyUepAiEAqhi6pi3VjaSrFv2fZNE53OocdJdIyZbz7KjzkQmljBgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW0V%2FD0o%2BTr1WHneircA1fW7n6M%2BaD%2BPuslmKQyjZDHKGAQobuWltns21SzfF2wtZ2LYPqDtCm2232zTssn4PhGoC7cTMoX4%2F53lOdqGm3nFaU1ILVkO0MFqgzCvz6FjPw6xgh2Q5kMuBvmnQmBRWioMu00FTiDswZ4SesTO0KpDGyFUqArnEEse%2B73MEvW1lZYp2i3SiqOFCDTD8I2vf%2FaaHgQ%2BEzti%2B4SA%2Br7gqeRf4zLh1KNdPcOZSgNr5bGrcKhcpcAAHnQ5T37q28exjlMz9JKJdMosmJ3OrsgSJ%2FhtcMGuyHCz17IOKefFCVbTXT%2F3vvAc94h1rk4FurirwT34CCkk6g9pM56kbScF6HeI6GnA7O1zpv7lCbTeqvykke84zQjPRyws6uSHkq2jjABpRnsxuhYRaO4lGjnnUcqKcQjeCh5I03Ua22Uuzg3P8Ew9LBxy54rFv71LHSdteab5tHmYbphjYo1FShWcxgKcNg4kRRVpCR6JVvM5PsDKwpJJOT9%2BcDp35f%2FoN%2BxAorjIShI9LaYjY78xyDJXk2aEh8YcAQa%2B0IYW7xCGXFl0kgVFhRub8DrQdF16dpYVORY52Wwhic5KfFTaxGzxwVFaiB6Bc5HN%2Bz3mwwQjLK17E7%2FNc4BeUUwxXriMODYrckGOqUBgKbjGXMPV8nmvZxa0y%2B1uVUSf8aKEPRGYa8mfXFGI%2BOrVzrqUGAz3aIp%2BT%2BlLNHtN7%2F%2B%2FXe7lCc75KehqXqtlS7UMp7ulQ8mgQCXV2eeYUgRHjYUaNKLKD3bDcpN%2B0E73dhZuFol6DLypxQ8tYeleAnMtAfyn91X3EYzbyZPZufSGs1%2FWvcl1ELf0kpxCExOeqBHxja%2BqkdtGmRxe3WmPPYYFkfi&X-Amz-Signature=4cf3e3cb2625d88dd697d8a033c6d8533f07218ea8884dd4a0fe855090cb457a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXRFCXL%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBsL1ELfTGKTNsIBH2HUke2UqnvCO3CSkoWpQ8RYyUepAiEAqhi6pi3VjaSrFv2fZNE53OocdJdIyZbz7KjzkQmljBgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW0V%2FD0o%2BTr1WHneircA1fW7n6M%2BaD%2BPuslmKQyjZDHKGAQobuWltns21SzfF2wtZ2LYPqDtCm2232zTssn4PhGoC7cTMoX4%2F53lOdqGm3nFaU1ILVkO0MFqgzCvz6FjPw6xgh2Q5kMuBvmnQmBRWioMu00FTiDswZ4SesTO0KpDGyFUqArnEEse%2B73MEvW1lZYp2i3SiqOFCDTD8I2vf%2FaaHgQ%2BEzti%2B4SA%2Br7gqeRf4zLh1KNdPcOZSgNr5bGrcKhcpcAAHnQ5T37q28exjlMz9JKJdMosmJ3OrsgSJ%2FhtcMGuyHCz17IOKefFCVbTXT%2F3vvAc94h1rk4FurirwT34CCkk6g9pM56kbScF6HeI6GnA7O1zpv7lCbTeqvykke84zQjPRyws6uSHkq2jjABpRnsxuhYRaO4lGjnnUcqKcQjeCh5I03Ua22Uuzg3P8Ew9LBxy54rFv71LHSdteab5tHmYbphjYo1FShWcxgKcNg4kRRVpCR6JVvM5PsDKwpJJOT9%2BcDp35f%2FoN%2BxAorjIShI9LaYjY78xyDJXk2aEh8YcAQa%2B0IYW7xCGXFl0kgVFhRub8DrQdF16dpYVORY52Wwhic5KfFTaxGzxwVFaiB6Bc5HN%2Bz3mwwQjLK17E7%2FNc4BeUUwxXriMODYrckGOqUBgKbjGXMPV8nmvZxa0y%2B1uVUSf8aKEPRGYa8mfXFGI%2BOrVzrqUGAz3aIp%2BT%2BlLNHtN7%2F%2B%2FXe7lCc75KehqXqtlS7UMp7ulQ8mgQCXV2eeYUgRHjYUaNKLKD3bDcpN%2B0E73dhZuFol6DLypxQ8tYeleAnMtAfyn91X3EYzbyZPZufSGs1%2FWvcl1ELf0kpxCExOeqBHxja%2BqkdtGmRxe3WmPPYYFkfi&X-Amz-Signature=1e2aa09d8e0ec1f33e2d45327abfcde54aafe92126a38002085102242a60f8a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXRFCXL%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBsL1ELfTGKTNsIBH2HUke2UqnvCO3CSkoWpQ8RYyUepAiEAqhi6pi3VjaSrFv2fZNE53OocdJdIyZbz7KjzkQmljBgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW0V%2FD0o%2BTr1WHneircA1fW7n6M%2BaD%2BPuslmKQyjZDHKGAQobuWltns21SzfF2wtZ2LYPqDtCm2232zTssn4PhGoC7cTMoX4%2F53lOdqGm3nFaU1ILVkO0MFqgzCvz6FjPw6xgh2Q5kMuBvmnQmBRWioMu00FTiDswZ4SesTO0KpDGyFUqArnEEse%2B73MEvW1lZYp2i3SiqOFCDTD8I2vf%2FaaHgQ%2BEzti%2B4SA%2Br7gqeRf4zLh1KNdPcOZSgNr5bGrcKhcpcAAHnQ5T37q28exjlMz9JKJdMosmJ3OrsgSJ%2FhtcMGuyHCz17IOKefFCVbTXT%2F3vvAc94h1rk4FurirwT34CCkk6g9pM56kbScF6HeI6GnA7O1zpv7lCbTeqvykke84zQjPRyws6uSHkq2jjABpRnsxuhYRaO4lGjnnUcqKcQjeCh5I03Ua22Uuzg3P8Ew9LBxy54rFv71LHSdteab5tHmYbphjYo1FShWcxgKcNg4kRRVpCR6JVvM5PsDKwpJJOT9%2BcDp35f%2FoN%2BxAorjIShI9LaYjY78xyDJXk2aEh8YcAQa%2B0IYW7xCGXFl0kgVFhRub8DrQdF16dpYVORY52Wwhic5KfFTaxGzxwVFaiB6Bc5HN%2Bz3mwwQjLK17E7%2FNc4BeUUwxXriMODYrckGOqUBgKbjGXMPV8nmvZxa0y%2B1uVUSf8aKEPRGYa8mfXFGI%2BOrVzrqUGAz3aIp%2BT%2BlLNHtN7%2F%2B%2FXe7lCc75KehqXqtlS7UMp7ulQ8mgQCXV2eeYUgRHjYUaNKLKD3bDcpN%2B0E73dhZuFol6DLypxQ8tYeleAnMtAfyn91X3EYzbyZPZufSGs1%2FWvcl1ELf0kpxCExOeqBHxja%2BqkdtGmRxe3WmPPYYFkfi&X-Amz-Signature=7924a503b57ddbe6b24ea424bcb8edab1a03ed5dc13d651d0f9358758308a492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXRFCXL%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBsL1ELfTGKTNsIBH2HUke2UqnvCO3CSkoWpQ8RYyUepAiEAqhi6pi3VjaSrFv2fZNE53OocdJdIyZbz7KjzkQmljBgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW0V%2FD0o%2BTr1WHneircA1fW7n6M%2BaD%2BPuslmKQyjZDHKGAQobuWltns21SzfF2wtZ2LYPqDtCm2232zTssn4PhGoC7cTMoX4%2F53lOdqGm3nFaU1ILVkO0MFqgzCvz6FjPw6xgh2Q5kMuBvmnQmBRWioMu00FTiDswZ4SesTO0KpDGyFUqArnEEse%2B73MEvW1lZYp2i3SiqOFCDTD8I2vf%2FaaHgQ%2BEzti%2B4SA%2Br7gqeRf4zLh1KNdPcOZSgNr5bGrcKhcpcAAHnQ5T37q28exjlMz9JKJdMosmJ3OrsgSJ%2FhtcMGuyHCz17IOKefFCVbTXT%2F3vvAc94h1rk4FurirwT34CCkk6g9pM56kbScF6HeI6GnA7O1zpv7lCbTeqvykke84zQjPRyws6uSHkq2jjABpRnsxuhYRaO4lGjnnUcqKcQjeCh5I03Ua22Uuzg3P8Ew9LBxy54rFv71LHSdteab5tHmYbphjYo1FShWcxgKcNg4kRRVpCR6JVvM5PsDKwpJJOT9%2BcDp35f%2FoN%2BxAorjIShI9LaYjY78xyDJXk2aEh8YcAQa%2B0IYW7xCGXFl0kgVFhRub8DrQdF16dpYVORY52Wwhic5KfFTaxGzxwVFaiB6Bc5HN%2Bz3mwwQjLK17E7%2FNc4BeUUwxXriMODYrckGOqUBgKbjGXMPV8nmvZxa0y%2B1uVUSf8aKEPRGYa8mfXFGI%2BOrVzrqUGAz3aIp%2BT%2BlLNHtN7%2F%2B%2FXe7lCc75KehqXqtlS7UMp7ulQ8mgQCXV2eeYUgRHjYUaNKLKD3bDcpN%2B0E73dhZuFol6DLypxQ8tYeleAnMtAfyn91X3EYzbyZPZufSGs1%2FWvcl1ELf0kpxCExOeqBHxja%2BqkdtGmRxe3WmPPYYFkfi&X-Amz-Signature=c9928393ea83d97c8c6ff6e48466241ec1a78d2f96a43dacabca0a0db109d0a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXRFCXL%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBsL1ELfTGKTNsIBH2HUke2UqnvCO3CSkoWpQ8RYyUepAiEAqhi6pi3VjaSrFv2fZNE53OocdJdIyZbz7KjzkQmljBgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW0V%2FD0o%2BTr1WHneircA1fW7n6M%2BaD%2BPuslmKQyjZDHKGAQobuWltns21SzfF2wtZ2LYPqDtCm2232zTssn4PhGoC7cTMoX4%2F53lOdqGm3nFaU1ILVkO0MFqgzCvz6FjPw6xgh2Q5kMuBvmnQmBRWioMu00FTiDswZ4SesTO0KpDGyFUqArnEEse%2B73MEvW1lZYp2i3SiqOFCDTD8I2vf%2FaaHgQ%2BEzti%2B4SA%2Br7gqeRf4zLh1KNdPcOZSgNr5bGrcKhcpcAAHnQ5T37q28exjlMz9JKJdMosmJ3OrsgSJ%2FhtcMGuyHCz17IOKefFCVbTXT%2F3vvAc94h1rk4FurirwT34CCkk6g9pM56kbScF6HeI6GnA7O1zpv7lCbTeqvykke84zQjPRyws6uSHkq2jjABpRnsxuhYRaO4lGjnnUcqKcQjeCh5I03Ua22Uuzg3P8Ew9LBxy54rFv71LHSdteab5tHmYbphjYo1FShWcxgKcNg4kRRVpCR6JVvM5PsDKwpJJOT9%2BcDp35f%2FoN%2BxAorjIShI9LaYjY78xyDJXk2aEh8YcAQa%2B0IYW7xCGXFl0kgVFhRub8DrQdF16dpYVORY52Wwhic5KfFTaxGzxwVFaiB6Bc5HN%2Bz3mwwQjLK17E7%2FNc4BeUUwxXriMODYrckGOqUBgKbjGXMPV8nmvZxa0y%2B1uVUSf8aKEPRGYa8mfXFGI%2BOrVzrqUGAz3aIp%2BT%2BlLNHtN7%2F%2B%2FXe7lCc75KehqXqtlS7UMp7ulQ8mgQCXV2eeYUgRHjYUaNKLKD3bDcpN%2B0E73dhZuFol6DLypxQ8tYeleAnMtAfyn91X3EYzbyZPZufSGs1%2FWvcl1ELf0kpxCExOeqBHxja%2BqkdtGmRxe3WmPPYYFkfi&X-Amz-Signature=e23552ba6385ed51edfc0fb598a346600d3f1c91d8864c994ad381880f8ff3bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXRFCXL%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBsL1ELfTGKTNsIBH2HUke2UqnvCO3CSkoWpQ8RYyUepAiEAqhi6pi3VjaSrFv2fZNE53OocdJdIyZbz7KjzkQmljBgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW0V%2FD0o%2BTr1WHneircA1fW7n6M%2BaD%2BPuslmKQyjZDHKGAQobuWltns21SzfF2wtZ2LYPqDtCm2232zTssn4PhGoC7cTMoX4%2F53lOdqGm3nFaU1ILVkO0MFqgzCvz6FjPw6xgh2Q5kMuBvmnQmBRWioMu00FTiDswZ4SesTO0KpDGyFUqArnEEse%2B73MEvW1lZYp2i3SiqOFCDTD8I2vf%2FaaHgQ%2BEzti%2B4SA%2Br7gqeRf4zLh1KNdPcOZSgNr5bGrcKhcpcAAHnQ5T37q28exjlMz9JKJdMosmJ3OrsgSJ%2FhtcMGuyHCz17IOKefFCVbTXT%2F3vvAc94h1rk4FurirwT34CCkk6g9pM56kbScF6HeI6GnA7O1zpv7lCbTeqvykke84zQjPRyws6uSHkq2jjABpRnsxuhYRaO4lGjnnUcqKcQjeCh5I03Ua22Uuzg3P8Ew9LBxy54rFv71LHSdteab5tHmYbphjYo1FShWcxgKcNg4kRRVpCR6JVvM5PsDKwpJJOT9%2BcDp35f%2FoN%2BxAorjIShI9LaYjY78xyDJXk2aEh8YcAQa%2B0IYW7xCGXFl0kgVFhRub8DrQdF16dpYVORY52Wwhic5KfFTaxGzxwVFaiB6Bc5HN%2Bz3mwwQjLK17E7%2FNc4BeUUwxXriMODYrckGOqUBgKbjGXMPV8nmvZxa0y%2B1uVUSf8aKEPRGYa8mfXFGI%2BOrVzrqUGAz3aIp%2BT%2BlLNHtN7%2F%2B%2FXe7lCc75KehqXqtlS7UMp7ulQ8mgQCXV2eeYUgRHjYUaNKLKD3bDcpN%2B0E73dhZuFol6DLypxQ8tYeleAnMtAfyn91X3EYzbyZPZufSGs1%2FWvcl1ELf0kpxCExOeqBHxja%2BqkdtGmRxe3WmPPYYFkfi&X-Amz-Signature=c10eac380cfb75b84b6f078303c2e364701e28028635472c0c04b5dd2ee66d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXRFCXL%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBsL1ELfTGKTNsIBH2HUke2UqnvCO3CSkoWpQ8RYyUepAiEAqhi6pi3VjaSrFv2fZNE53OocdJdIyZbz7KjzkQmljBgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW0V%2FD0o%2BTr1WHneircA1fW7n6M%2BaD%2BPuslmKQyjZDHKGAQobuWltns21SzfF2wtZ2LYPqDtCm2232zTssn4PhGoC7cTMoX4%2F53lOdqGm3nFaU1ILVkO0MFqgzCvz6FjPw6xgh2Q5kMuBvmnQmBRWioMu00FTiDswZ4SesTO0KpDGyFUqArnEEse%2B73MEvW1lZYp2i3SiqOFCDTD8I2vf%2FaaHgQ%2BEzti%2B4SA%2Br7gqeRf4zLh1KNdPcOZSgNr5bGrcKhcpcAAHnQ5T37q28exjlMz9JKJdMosmJ3OrsgSJ%2FhtcMGuyHCz17IOKefFCVbTXT%2F3vvAc94h1rk4FurirwT34CCkk6g9pM56kbScF6HeI6GnA7O1zpv7lCbTeqvykke84zQjPRyws6uSHkq2jjABpRnsxuhYRaO4lGjnnUcqKcQjeCh5I03Ua22Uuzg3P8Ew9LBxy54rFv71LHSdteab5tHmYbphjYo1FShWcxgKcNg4kRRVpCR6JVvM5PsDKwpJJOT9%2BcDp35f%2FoN%2BxAorjIShI9LaYjY78xyDJXk2aEh8YcAQa%2B0IYW7xCGXFl0kgVFhRub8DrQdF16dpYVORY52Wwhic5KfFTaxGzxwVFaiB6Bc5HN%2Bz3mwwQjLK17E7%2FNc4BeUUwxXriMODYrckGOqUBgKbjGXMPV8nmvZxa0y%2B1uVUSf8aKEPRGYa8mfXFGI%2BOrVzrqUGAz3aIp%2BT%2BlLNHtN7%2F%2B%2FXe7lCc75KehqXqtlS7UMp7ulQ8mgQCXV2eeYUgRHjYUaNKLKD3bDcpN%2B0E73dhZuFol6DLypxQ8tYeleAnMtAfyn91X3EYzbyZPZufSGs1%2FWvcl1ELf0kpxCExOeqBHxja%2BqkdtGmRxe3WmPPYYFkfi&X-Amz-Signature=5dda4f859b65a9b2e4fdf5d33cd48fc06df37ffb6ac6a03614a3682489003ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDVN76UE%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDvPahhuO%2Bqny75qeQr0PGagggVhq%2BJ1axO0hYeX9volwIgOWYfm%2By4H9EvueuKuc11lcxu9Tjz%2FqL3DzNdYcPs%2BZgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtwzBAEv8yjwJ0%2FdSrcA7zEeN5dkhrQRTfi7R0608pII8Hlx6Rkh62PONc0fkiSciZPxYda95oDf2RwrTYoX9Xn8ZehuYt6xGQdXKUZc9SINQmury9w4LgL01bgBnWkWlFW1F%2F9WDs9Ph39Pa1%2BXbyfip50xe59lnVRjjjoc9aw5mQVBqdjE7tstuziMQ99TGO5px%2BS9qGr7QDQA9wgR6Kk%2Bs0ARxtolQJtYbSE9b8wLsdqosWQP%2F%2BfEA024nM3woXZfBVHOsNFQnyTQuVNewXKXhfC4I9u549Pvau4XONnqB4rK63wU7kTK9fXGUfMtVNFPdLtunwlbP18YRDCMX%2BZ0mHKC%2BjnCNcyz0EwqGgf8fKDEykaPlz8ZcwuhtorCj%2BmdeBgb5iw5wUrKwJA0LWMnJdOWiulE7imaEJQ63oJCqoHdHK7NzTbNFlL1WHMmNzI3M18CxtvLVUep%2FyWfpEd6UAAxR7vzAJWkYuyTHXlRBUri13E4oF3R7ZG09NSk8DtUwKbJ2JCxkab3tFChA8L6i7jxjwcNn590BANSQOD5ZlfFofjgOcOBimOWhvq6JDQR7NjfSrRER6r8g26Igw%2FM%2FttjlSmjmSJRChj1P2Mgw5SNscFBFl6mQzYQf%2Bq8EMtY%2BxVuoxIwgBfMO%2FMrckGOqUB7lpyuX37SPIBWcDK3f7uO7i4O0NhvDBpYm59WpF412%2F4laR09qnqmQKNz6tqVe5ULrpBLfUGsQiyRNyPazbZ94ElT6lNBTQ3JZaQT09R24SPmJf13kPfoiQQybEqr4KzM8CZ4TjjREVF3sflysAPbVXaxhQjrYOHGZrR%2FfisfWEhPkaWV4ZPAnMstAqhvdmfRlsItGujm2Sth8ZiLC99YIGhjpYd&X-Amz-Signature=f2fd05c3c149c5155cd982c078832d4b92f70c88b6350043339f0eadc31761ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6NLNOOA%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIHOrgy9hen7bGz3BPJZLFId01dM42YXF%2BmwHZl%2F7gvLyAiAjsXFbXevbd010EXwVCOTFpVeZleonkCvpGe2MNMAyjCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsm4wxy92OmAi8B%2BeKtwDjn2ALCAO7zGKlHEmWgUh0630l4emgGpHypq8CzaG%2BpLXS5zQwb%2BncnHOC5f0QFW27txyUAs8f0IrhOPzwG83XT23kbcvc9nHjdjO6yWndX8ilSXMNltJlPwpvhqCcGwIc2FdXFU166y6%2ByzLp9FrWn79cN2rmHlPQikvphagGflYMIT53cCxyzkQNYCH57zxsLfvHwERam%2B28YzQ0hss0qlq8tuPkKeLCKXlQncQvFY7mJfrUCV8aP0yZEP%2FjSBe6gyzTYIbcimxDdK8Fk3B4wd51FAAAJtBgxFtcBayFatHfzxFp2cvJulu6Qgd3XA4eN%2F3EQ17gFUsmLRUkdL3K83IXTPnBRrylz6AQ6LwlR3Ht8kqBUc2sB1zmqNfftgoU%2BYYOYpa6soE8Vt5PszHIw2PImP6f7Is4bGw0yEkBuFVet%2BQNTXJ%2F%2B0Yey%2B6DoZGAPBGBQh%2FJqophkwtyLHw0AaUTh0YDjlzSNa%2BSwXs40UbJUG9C5XunNdkU6bppNYp1x2lnXM2OPDrCXrzuXwt%2BJ9o4yp3DLDRkqiBEg69mcQ9PvWi5yHm%2F67M6%2Bmq8uJy68foz6A0i4iHzubtnHWX4geeh%2BJ7KG8uVbQ8GZcer%2FXzM6HwQNG17VFfXdQwodKtyQY6pgECHq6t58fEzjcwQAnsTje6t3VuBp2l3LUQPtqATdwm8UmHoZZmcp8oQ5R7duedRq0%2Fw5FXEd4Bevx30YzM55nQcRCBHjFfkwS08%2FHM9WgrIlz1%2Bh8bRsMWNrWtsiqY3VnmdLMh%2BcXVyajY52XYft37kRcR4iaoPigbUw4aq1pp3xIiSyCvv9zYRgLwjv%2FyWVyOj0LuIbBw3%2FHsnZMQAr91MDdOvn8b&X-Amz-Signature=35030e08b7f9328ba9173c4934871584d25795f8910a3a1f4353cad0ba1e9c84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PFSZBQM%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCjQQAn%2BPlSV761pIdThBLJHUIxhpgYs5Rr1G7bT%2Fo1aAIgLzLzzhzsjuAZTjhTgO4avDLKnz3rpbcVaLiR5AZW7H0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGMlYqEXG%2FBkyvB6CrcA3rYumoYBbgo7FjN87oLco0aL7iMODdeG4vdOWvFWrRkIOPA%2FAcXdjdVrug1pwhGGBRwfEu4hBFctNXNzRnjbbyQbpfAMKOU8fIQrIh5%2BaaqdGNfkVfhx1RmJJtbMthcyC8NNiBvewRdnMKc5ffBTXWWGfJdNwmm29XPSYcx2zrkwVC49xtAfQX0H9p3qlW7lRv62ftR9H3cRT%2BV5ffQaCQMcVVzY2SqUfMi%2BWvezLtrQ6ZTeddsd73WZxupF8fbMvFhbatxpD0aLaf6rsfpjxfu89VI7OcBr7HCXWMv9LGr7KTX%2FlCGGxIFwsvITEfGU4H%2FLU3eTPivJThwoqWP0%2FF9BAlq4kWTU6c4X3PUN42cdRkuHmGd3JH9RaM%2FF64vk1qD8nHKfnZHrNI2StuG59dcJ7%2F4b4kfWMdPSVsQxm4XR3XOfmfcod9cu6qjacHAa0FdYywy6DD%2BBPiUaJqXwh4ZtWUxrAt2P%2Bc9PYKcKr8IEXx7jGXFHRAZb%2F1EqWjqvNRXB8s%2FlKc%2F8tDYU7evk9gyqSPBI%2F12aihgdfF%2FhvsfBCuwSW4ODEDInXcAku4TL3ud%2F2efxBzui8638tLcRInNscck0dHQI%2FdKnL5CIN75jXcvLDL171Hac7BJMNXdrckGOqUBFbxa%2BTYYPpHp4RkmBFjQWhQJD%2FVezc0aSzfQW9SinhMUAvjMseeQAx9MaAVrW%2Fp95cXexWMkc4tSVOUtjlkuMzuv0BQO%2FmItXwabIz0UE8Qbb8CGI1I0DQ%2BMxBhs0A%2FFUDTGFVCCPtadyai4BLhhOfDjwxtq2l44fPsVXZ9hAYKsf%2FcyUg8TOLUrz9TcDnOzpvf5UTd2r%2FF%2B0LExg72Vgqr6cDVk&X-Amz-Signature=5d00bbd6e3ee3da43f03d0caffc9faf0527cf9d41d9634b3a92b26a55661ab90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXRFCXL%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBsL1ELfTGKTNsIBH2HUke2UqnvCO3CSkoWpQ8RYyUepAiEAqhi6pi3VjaSrFv2fZNE53OocdJdIyZbz7KjzkQmljBgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW0V%2FD0o%2BTr1WHneircA1fW7n6M%2BaD%2BPuslmKQyjZDHKGAQobuWltns21SzfF2wtZ2LYPqDtCm2232zTssn4PhGoC7cTMoX4%2F53lOdqGm3nFaU1ILVkO0MFqgzCvz6FjPw6xgh2Q5kMuBvmnQmBRWioMu00FTiDswZ4SesTO0KpDGyFUqArnEEse%2B73MEvW1lZYp2i3SiqOFCDTD8I2vf%2FaaHgQ%2BEzti%2B4SA%2Br7gqeRf4zLh1KNdPcOZSgNr5bGrcKhcpcAAHnQ5T37q28exjlMz9JKJdMosmJ3OrsgSJ%2FhtcMGuyHCz17IOKefFCVbTXT%2F3vvAc94h1rk4FurirwT34CCkk6g9pM56kbScF6HeI6GnA7O1zpv7lCbTeqvykke84zQjPRyws6uSHkq2jjABpRnsxuhYRaO4lGjnnUcqKcQjeCh5I03Ua22Uuzg3P8Ew9LBxy54rFv71LHSdteab5tHmYbphjYo1FShWcxgKcNg4kRRVpCR6JVvM5PsDKwpJJOT9%2BcDp35f%2FoN%2BxAorjIShI9LaYjY78xyDJXk2aEh8YcAQa%2B0IYW7xCGXFl0kgVFhRub8DrQdF16dpYVORY52Wwhic5KfFTaxGzxwVFaiB6Bc5HN%2Bz3mwwQjLK17E7%2FNc4BeUUwxXriMODYrckGOqUBgKbjGXMPV8nmvZxa0y%2B1uVUSf8aKEPRGYa8mfXFGI%2BOrVzrqUGAz3aIp%2BT%2BlLNHtN7%2F%2B%2FXe7lCc75KehqXqtlS7UMp7ulQ8mgQCXV2eeYUgRHjYUaNKLKD3bDcpN%2B0E73dhZuFol6DLypxQ8tYeleAnMtAfyn91X3EYzbyZPZufSGs1%2FWvcl1ELf0kpxCExOeqBHxja%2BqkdtGmRxe3WmPPYYFkfi&X-Amz-Signature=948197ec1b23ea9d4b40411db7354dd290cf05462771a8bf3fa548390fa75d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y54P2F5L%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCICdB2XEsnBpZlgZs%2F5meZOwlD6dfbbpdTVTQjq%2FW%2FXZHAiEA5njjKGBEs6joEITKls0ZtlE6mzRrr5gcA70097TDigcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUVbeoAhDOvpsHxdCrcA7E7ivRcyT%2FjQcOOH0q3koCMGvmcWcitphc4uWpisgnpFWrXtHiIEKsC52RHeMdLllTixMQa3GWWuR8FaBO8FSQhefewmTbuUwkkOI1rk8Q0YmzhY0NB5uFFT4gK4gG%2FVFTjuqiDDYeiRteRy%2F1mVUwQfEFloCVVrXUwp7ccLOOnVx0pZ7dNTDBcNXYgVqWT5IV0XV2yh113sp1GJlVRJa8%2BL59GT49FeicrTf6sJB%2FVtu4iAC1W7BuR3fnH644bZDyOoJCTpTtIhyzQVKq17yolsrzYJEzbbGA4oEXaxicinpY5IWfeWUcdm8LBD100J%2FqREooa1JnSOeV8dqvCdJEn3AnFWQG7XU6QP%2Bmf5EBAsYgwxRhphfd%2B44tJ8Byd0IEIxRdh9h6fyd7w6CWFP8lk2XUhAwK6AoitvuG7YVzd8kVXhJXhcX8a4JpP4Hw6jdu0OPIpEUWM7pUqMnGSWQmgqVgZSMgbO9rplVQVhGeCHJcGO29%2BiPXC5G4UgGp97YRFsojLninN3UETNFZ8IuRr0MAXdKu1KZukyseEPvZOzc4zxxTD5QsHa%2FgZBKYYKHb%2FNMspw98u%2B2demTzisSvJfUyPf7BifEkVWJl3llRM9RAxDCl06Ye1inEHMIvOrckGOqUBW2rsEh4IxK3eY%2FVmULD96q5sGdwVe8jPoFU0tMq6pCHJM%2Bd5p5qcs7moo8NUO2iWFlzhSObZrKyeKxgbK7jZ0vzqScSC4UIgAPNtEGNz%2Bv6eyghpVSPykg1lUaXVwwuG%2BTqJDHHOOsv0qDfW5eisgLGj4LXusILGd6O1MO%2BfvdMLqOIvK6LyHDVfndCRljM56uIylnf2QPWWeRsxuH0xXFla4N%2Fg&X-Amz-Signature=dc88ce36d019b986e4c82c0de6ef1d233c7874d669604c55f2485becd20fe484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXRFCXL%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBsL1ELfTGKTNsIBH2HUke2UqnvCO3CSkoWpQ8RYyUepAiEAqhi6pi3VjaSrFv2fZNE53OocdJdIyZbz7KjzkQmljBgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW0V%2FD0o%2BTr1WHneircA1fW7n6M%2BaD%2BPuslmKQyjZDHKGAQobuWltns21SzfF2wtZ2LYPqDtCm2232zTssn4PhGoC7cTMoX4%2F53lOdqGm3nFaU1ILVkO0MFqgzCvz6FjPw6xgh2Q5kMuBvmnQmBRWioMu00FTiDswZ4SesTO0KpDGyFUqArnEEse%2B73MEvW1lZYp2i3SiqOFCDTD8I2vf%2FaaHgQ%2BEzti%2B4SA%2Br7gqeRf4zLh1KNdPcOZSgNr5bGrcKhcpcAAHnQ5T37q28exjlMz9JKJdMosmJ3OrsgSJ%2FhtcMGuyHCz17IOKefFCVbTXT%2F3vvAc94h1rk4FurirwT34CCkk6g9pM56kbScF6HeI6GnA7O1zpv7lCbTeqvykke84zQjPRyws6uSHkq2jjABpRnsxuhYRaO4lGjnnUcqKcQjeCh5I03Ua22Uuzg3P8Ew9LBxy54rFv71LHSdteab5tHmYbphjYo1FShWcxgKcNg4kRRVpCR6JVvM5PsDKwpJJOT9%2BcDp35f%2FoN%2BxAorjIShI9LaYjY78xyDJXk2aEh8YcAQa%2B0IYW7xCGXFl0kgVFhRub8DrQdF16dpYVORY52Wwhic5KfFTaxGzxwVFaiB6Bc5HN%2Bz3mwwQjLK17E7%2FNc4BeUUwxXriMODYrckGOqUBgKbjGXMPV8nmvZxa0y%2B1uVUSf8aKEPRGYa8mfXFGI%2BOrVzrqUGAz3aIp%2BT%2BlLNHtN7%2F%2B%2FXe7lCc75KehqXqtlS7UMp7ulQ8mgQCXV2eeYUgRHjYUaNKLKD3bDcpN%2B0E73dhZuFol6DLypxQ8tYeleAnMtAfyn91X3EYzbyZPZufSGs1%2FWvcl1ELf0kpxCExOeqBHxja%2BqkdtGmRxe3WmPPYYFkfi&X-Amz-Signature=e4821b69184f3a40801f2c1ff251d051ae226336783d5d2b028a2aa3d465eb07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GZ6ION%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDRbtV4Y5dyJhZDrpO0uriCHkif987sUqLc3LH0Jjs1EAIgYZpEDHEQlznMt5pu8682pZ4F5xLN1jnun0PZSLnPZ%2FwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJY8D9902YhCVifVircA0W%2Fr8fdyFPt4pYadN27b0OZs5BgxTYfwdyhHXc3y%2BWdq%2F5%2BJsp%2FmJpzsd5zO8QzVY9QmkFrgDge7SvgkHeujD7g3t%2FJTpW0aEiJPV2X43mxZmqIP8Rxm%2Bhe8fPOH1Ez9fCHriMOf3oPTMgcUeTPtKN8JARryHdMcF0HJozhOCqsn13Cq%2FioJh3aE%2Bfc79KrfxiD5Wh4LvEdjzjIlk29abT5C0qnZtkufMSBLLf8DcqbNtxgyW6r7qQKtAvGU661QPI3Ee9M%2FPZBOh7xlOqkkKLObiBBdkY5v4wpVS1ZuCTl0qP1yFHT1MfjqECu1Qgr36sNFvc4Tt1TuWx3ZGnJqEW2uzWrXOLKRj5gGxJlSOoh6elIt8RrKoytxiAXZQAK6c9r1Qpc3AEe5xllg9fpkmKBQbICRbLLfLXG7kbacWwzuF1vq6yY%2Fp9UlcwFcyB18yX6llkM%2FDRo7cXgOZKaeGvshYzW%2FlWbrkIdO2Qv8cIErKDgE%2BCf124zYM5be5Ipfk%2FV9VqhVoOZrokS26Gc3MFSowrJPymmpaZdDV0VkuV5Rhzf0AbYLFxuHDjYKHJHpEO5AAKfuFd6lMeXFAQALQKAfnUBkhuMBrqSpGzf16vm2jcpoCWWD%2F4D%2FEauMKHSrckGOqUBr0%2FmU36uI62KZDORsNQzh6RQr3FYWJXygseRFI4c4V97DRjzqwZlqPlJsfDHZl8E9LP%2FdpIrVhYaDf8W7DfEgYTuBSBy9724WHKesmOq5VYtMW%2BXcsCqPQc32tqo6mOEMxVgkb3uAkaUuOYtU%2Bux0rH8vDohOIqgUvGasGE4sMRqXob9wb1w0%2BJRjPenwQB9CPZse7a%2BekLvTBa5iUXL2zNQozKH&X-Amz-Signature=d76084ff16809b69a30bb6ac13a93fe7fb689ce7a5b0c32965ae24076e6a0e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXRFCXL%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBsL1ELfTGKTNsIBH2HUke2UqnvCO3CSkoWpQ8RYyUepAiEAqhi6pi3VjaSrFv2fZNE53OocdJdIyZbz7KjzkQmljBgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW0V%2FD0o%2BTr1WHneircA1fW7n6M%2BaD%2BPuslmKQyjZDHKGAQobuWltns21SzfF2wtZ2LYPqDtCm2232zTssn4PhGoC7cTMoX4%2F53lOdqGm3nFaU1ILVkO0MFqgzCvz6FjPw6xgh2Q5kMuBvmnQmBRWioMu00FTiDswZ4SesTO0KpDGyFUqArnEEse%2B73MEvW1lZYp2i3SiqOFCDTD8I2vf%2FaaHgQ%2BEzti%2B4SA%2Br7gqeRf4zLh1KNdPcOZSgNr5bGrcKhcpcAAHnQ5T37q28exjlMz9JKJdMosmJ3OrsgSJ%2FhtcMGuyHCz17IOKefFCVbTXT%2F3vvAc94h1rk4FurirwT34CCkk6g9pM56kbScF6HeI6GnA7O1zpv7lCbTeqvykke84zQjPRyws6uSHkq2jjABpRnsxuhYRaO4lGjnnUcqKcQjeCh5I03Ua22Uuzg3P8Ew9LBxy54rFv71LHSdteab5tHmYbphjYo1FShWcxgKcNg4kRRVpCR6JVvM5PsDKwpJJOT9%2BcDp35f%2FoN%2BxAorjIShI9LaYjY78xyDJXk2aEh8YcAQa%2B0IYW7xCGXFl0kgVFhRub8DrQdF16dpYVORY52Wwhic5KfFTaxGzxwVFaiB6Bc5HN%2Bz3mwwQjLK17E7%2FNc4BeUUwxXriMODYrckGOqUBgKbjGXMPV8nmvZxa0y%2B1uVUSf8aKEPRGYa8mfXFGI%2BOrVzrqUGAz3aIp%2BT%2BlLNHtN7%2F%2B%2FXe7lCc75KehqXqtlS7UMp7ulQ8mgQCXV2eeYUgRHjYUaNKLKD3bDcpN%2B0E73dhZuFol6DLypxQ8tYeleAnMtAfyn91X3EYzbyZPZufSGs1%2FWvcl1ELf0kpxCExOeqBHxja%2BqkdtGmRxe3WmPPYYFkfi&X-Amz-Signature=9bd55606ab5685dcc7d513e3756501d435445632815d80d0ceb7e75698967905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGD5YLB2%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQC10ns%2FgO8idD4%2BHsQCli2OnGibAE46J0WYJjTXoR6D4QIgAKG7bOz9%2FzeJ8asksuOdT9JuR6aWPyahkvIbYx7KhVAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUFYknsjIox5uzgbSrcA1njaaTPOQmzoMOImX219uLGyI4qfZ24W4kDQyRu1kZgTT08je%2BmFAykgOZctiej96VTeDKojUS5ZF3kIa86stOIZwzPx8vF8EYz5S2FhN4bqGC9waQfUj5bmGspRn0HiUlZm2RzGWcy6kqtHTcCnL0hB1PHKNORjzuj%2BAjP55fRbUxPH%2BrUW5dJAr4jcfITWIyZIZJ%2FCar6yGxCHFWneUidKewzba5oTIusXbGJjWt%2F8%2FSXrIR9DlssGLvVnHPz6S9vMfBAk3HlHtgqbMF6Na7Ope%2FruS4qauxDfcoZ8giFH9VBb5ymtH3Cnvk1YUrUtRQa6fh%2B%2B%2FfWz7WfimDjbsWebW13Dml53B%2BH1yfHSsE8AKGd5PRXsrYH6gdQslvu2A7AFoEG7o7yS150%2B%2BmWhQxTyqXfqV%2FFkewmlcDZayCM5IW53jBvDl8eCkkgn4OpquOBaOAo18vZ8jy0WVDZ3VGHaXvGaGQbjPN5aHMCpI7IBVj%2B6fkWqPI3prb908vyY2tioiki9qy9UjZLHqfOXmjFflC4xNtzmX81aYLJ%2Bv9XQbFvN6pSuOhNu33PqIP%2F9nn0VH93Gda7ST0qsjGd2edrYkGTVHgRyDL2nw5xBPiKTzQpZT2DgivYg3QgMI3arckGOqUBOHkSgIaCRSSduqc3gOfhMqwkisgHlHug1Nhae%2BWjliUdh5npS2dwzUaik1p96%2BDex3I7LV28GpLqjia1Z4xjZHqoRlnLKQRPee6uWi62JW10HKo31GyQ4761jNxOh8OfVLk2ymcY%2F%2Bdeu%2FLwpk%2FATodZFdzmcPOuHGcgpEEPuODidJGYEf%2FroPzUAI%2F04hFgVdSfv%2Fl%2F%2F6KXl32JRCjghPn9NK6F&X-Amz-Signature=2fac6af323a195b47208eb87fb4842d77e120f34bb3842c83958c3340944a685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXRFCXL%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBsL1ELfTGKTNsIBH2HUke2UqnvCO3CSkoWpQ8RYyUepAiEAqhi6pi3VjaSrFv2fZNE53OocdJdIyZbz7KjzkQmljBgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW0V%2FD0o%2BTr1WHneircA1fW7n6M%2BaD%2BPuslmKQyjZDHKGAQobuWltns21SzfF2wtZ2LYPqDtCm2232zTssn4PhGoC7cTMoX4%2F53lOdqGm3nFaU1ILVkO0MFqgzCvz6FjPw6xgh2Q5kMuBvmnQmBRWioMu00FTiDswZ4SesTO0KpDGyFUqArnEEse%2B73MEvW1lZYp2i3SiqOFCDTD8I2vf%2FaaHgQ%2BEzti%2B4SA%2Br7gqeRf4zLh1KNdPcOZSgNr5bGrcKhcpcAAHnQ5T37q28exjlMz9JKJdMosmJ3OrsgSJ%2FhtcMGuyHCz17IOKefFCVbTXT%2F3vvAc94h1rk4FurirwT34CCkk6g9pM56kbScF6HeI6GnA7O1zpv7lCbTeqvykke84zQjPRyws6uSHkq2jjABpRnsxuhYRaO4lGjnnUcqKcQjeCh5I03Ua22Uuzg3P8Ew9LBxy54rFv71LHSdteab5tHmYbphjYo1FShWcxgKcNg4kRRVpCR6JVvM5PsDKwpJJOT9%2BcDp35f%2FoN%2BxAorjIShI9LaYjY78xyDJXk2aEh8YcAQa%2B0IYW7xCGXFl0kgVFhRub8DrQdF16dpYVORY52Wwhic5KfFTaxGzxwVFaiB6Bc5HN%2Bz3mwwQjLK17E7%2FNc4BeUUwxXriMODYrckGOqUBgKbjGXMPV8nmvZxa0y%2B1uVUSf8aKEPRGYa8mfXFGI%2BOrVzrqUGAz3aIp%2BT%2BlLNHtN7%2F%2B%2FXe7lCc75KehqXqtlS7UMp7ulQ8mgQCXV2eeYUgRHjYUaNKLKD3bDcpN%2B0E73dhZuFol6DLypxQ8tYeleAnMtAfyn91X3EYzbyZPZufSGs1%2FWvcl1ELf0kpxCExOeqBHxja%2BqkdtGmRxe3WmPPYYFkfi&X-Amz-Signature=6e9325423c2bc93c989a4f702dc65389a6df4b846bbeae5468519d8fcd40eb84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIPXIMWC%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIHqQlXu73paMTb5yVj5GDb24hPM0quydVQoHulR7nqugAiAJSd1HP4%2FpPlzPe%2Bc5taTpJT6tL5d8yWeZLELJKbnwWSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCcgMJVRJApavUZyuKtwDSfQW5wkbYg7IXtNSf0u4doABV7daQzhh%2F58AgPV3adJg2vYRgztvNcYesliLK6SS4Ng8qRrgmNmeUrNXcQA3upSqDklWRqZV60VpGWOD7BYQGspVzsKhwVoHZ10%2FsiQX7%2Fxbx9BGjONbUsdIzCIU7D%2Fz7NvmkywvyahJhTEENbCBiCKhQEgmCINQYzELDKJx8rYfPOBguNsqhHUYLXCWU6ejUJ%2BFmCqyx2NUZP5PLG%2F%2FcgIhXg1K2GheXCxWUtwqofE2%2FD%2FaL%2B5xHrSarLtVDrIVRwqYpzSh66%2F3pg6snez5JaOMtw40E2HBs5UYl9x8Bexruxhc%2BM6He4auyGLksYiv7uzCGs1TRV8WThkfUtcDAyvx5%2FJpPQ9pYd7lb7TgNCk4IOn4zfyhu9ZUVue0qgfMD05HNYtaq%2BsXXU0XXaOt99ZfNS8mVArNuzIFdRsQHWnbUamuISnSlQnfmYolvZMMebjJVoJPJ76Suvy6c2uG7DolCzn8qBeMvxnqB1jwr%2BqJBlOniWAWwn4%2FcbvlCpV77bsOMNSSnEmljyh4nmUQQ8Jqlajqr45H3t7PwUk3MMMijeWIj%2FQh27aaFSI2HvEhekEfgwIGGNzRYnX8iEI336wWxBw5bqa9d%2Fow1d2tyQY6pgH2jo0fZzBXB8VHQSWJ5ZseU4w5kDn7DmzYFWXmoBuPPpS3XjFgTtbzuo9xlW1IGsmvzIhZdR4mPnqaAjFmb0pJZReLbwqobqi6yYTU16taiIEgIJmb%2BSDtRGFUizonMli1OXrM49WcLejgkd7x4nN7EswEZPRoofuUafNUFem34QuK8Q9XhbunmaSoJL839KD4YZzuC4qFWJJGCAoumvF%2B%2F%2FpraJhX&X-Amz-Signature=4b49ca12a3b301ec0cf036f28c7cbf44096cac0ce40a197d21006051963eaf7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXRFCXL%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBsL1ELfTGKTNsIBH2HUke2UqnvCO3CSkoWpQ8RYyUepAiEAqhi6pi3VjaSrFv2fZNE53OocdJdIyZbz7KjzkQmljBgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW0V%2FD0o%2BTr1WHneircA1fW7n6M%2BaD%2BPuslmKQyjZDHKGAQobuWltns21SzfF2wtZ2LYPqDtCm2232zTssn4PhGoC7cTMoX4%2F53lOdqGm3nFaU1ILVkO0MFqgzCvz6FjPw6xgh2Q5kMuBvmnQmBRWioMu00FTiDswZ4SesTO0KpDGyFUqArnEEse%2B73MEvW1lZYp2i3SiqOFCDTD8I2vf%2FaaHgQ%2BEzti%2B4SA%2Br7gqeRf4zLh1KNdPcOZSgNr5bGrcKhcpcAAHnQ5T37q28exjlMz9JKJdMosmJ3OrsgSJ%2FhtcMGuyHCz17IOKefFCVbTXT%2F3vvAc94h1rk4FurirwT34CCkk6g9pM56kbScF6HeI6GnA7O1zpv7lCbTeqvykke84zQjPRyws6uSHkq2jjABpRnsxuhYRaO4lGjnnUcqKcQjeCh5I03Ua22Uuzg3P8Ew9LBxy54rFv71LHSdteab5tHmYbphjYo1FShWcxgKcNg4kRRVpCR6JVvM5PsDKwpJJOT9%2BcDp35f%2FoN%2BxAorjIShI9LaYjY78xyDJXk2aEh8YcAQa%2B0IYW7xCGXFl0kgVFhRub8DrQdF16dpYVORY52Wwhic5KfFTaxGzxwVFaiB6Bc5HN%2Bz3mwwQjLK17E7%2FNc4BeUUwxXriMODYrckGOqUBgKbjGXMPV8nmvZxa0y%2B1uVUSf8aKEPRGYa8mfXFGI%2BOrVzrqUGAz3aIp%2BT%2BlLNHtN7%2F%2B%2FXe7lCc75KehqXqtlS7UMp7ulQ8mgQCXV2eeYUgRHjYUaNKLKD3bDcpN%2B0E73dhZuFol6DLypxQ8tYeleAnMtAfyn91X3EYzbyZPZufSGs1%2FWvcl1ELf0kpxCExOeqBHxja%2BqkdtGmRxe3WmPPYYFkfi&X-Amz-Signature=5d3c35c0841388f5b29f34bd6ebc76eee9e7edbb22e803c3a063c30a859f8f18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYXOGFD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCcEH0K8yimQu1wzKhjMsuXssEYOXkot46nQVF8rdkW1gIhAPyHxxBCpJMxXyw8S3WDsTTrBOJiCRB2WTQ2SGLhZZ0%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9tBodGIyOnNQkGpgq3APlkUk8vCnooC2ecxgoxvdW8buV1pqMOX%2FeWrweJ0r3NKkgBU7a7TuHh2B3OqBli81jviicOgoNla7eOP3i4xjUY2hvKpe46W%2BbjlBNApM0zTmmGyU1IGXHqeBdobJO666zfzemLrmZAInxyCWgp3O3RhecP81Cs3P7dAxhI4CzUdpTI7i7eIMISQ3a4sQSXD6mUzhsQ%2FeiThmqGWjNx7o81%2F980CX9bV9ldeQi9Nk8yKjZl83qCKLq%2BGRCy3CJ8fmKKcqbAkhuBuwiq6mf7l6Mt9LDIc2MU5DdfCHP9x5GGPDRO%2BI2h4DGQ%2BVk9t7jradeShpwrjHQ4HFIdqYORIoxCKsTbeEfSQpbMlGyyEnyG4wPI4Uwv524KVf7bWaisgDWTZ2JTmmefix2pv6XavpBrG%2BA%2FAVKjuYfxBIzy1GwRSBWPgIc8%2FVkPqBxfCLIANB%2F3KybK9iM1bsDP9uFcIsqkTDMhYUEsydHlMv7A7To6DJw7MtK4%2FzmUGhLbi18t2tF8UQBw%2FUkuuK5ec20EEWVD%2FktJ7p7iiF3jrosiSvz5SgtQDkPDMRj0YaGbOEzgaefpy4CE%2Bg4nvyALq3HQHVezRcW1X1ZLbE8AX9AY5qzWLuluPrZ8Wc3xMFMHTDb0K3JBjqkARzBJy8PBahNCYyol5r6EroO12O1ncSsQQjDGD2n4aUQP5GdiLygGbPImMJa8MAYoil2mH38F5OdNel0m2LdjLuDbK4aFJc4nvgBOH31qGSu%2FEGbr1Oa7P8x1BJobodvCflJkWSQS1r4v8%2FS9ehmaJhPgg74X6VxE5jGjz59h6F0teGKNR6teKWl1Hihxw4Fq8hwxFzji03yB68tggpX%2FOVvALwp&X-Amz-Signature=c1421ebe6bf0abfc3eb1e74442fc003e869afbb1f5a109c04928ea3d5ec4bb69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFTPYWEG%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCWRhyPbsYzQ1hGandTZz%2FQIhWsYdHUkBWfnsgrNJWQYwIgaqTTfIQXZTn%2BPGgkJOJr6MNGLBa2sIOrX%2BpkYcU%2F4MsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQerowdQWq8rEYVyyrcA4JnkcpkJf618Oy3dH7ZZnvwulFnLs6R2378Bq4JEgulHh7BuMKayY8XZoj8Vieb9leL3RQCsDXgH70Us5rs%2F4H04dz%2BkKVbyuub0arILYTAOzJ7LYq7QB8MnbVlZ1uyLLltILI4rUPMG4lSNoYifCtIXgSVDm%2BPRB%2FM%2FRt%2BcNz8MuhPUafCTZig1WXoYsylby5IJHgsK25bF3dYqDYpIqCpZkrCFeNmfuMrbXtGgz6IwCBOz32a%2BPNF5bm50vi9vFm2VdBLhZdJvHj041qgKugKrHgTYOO09opP5YViiJ%2Fkq%2BVh5zBpaOoTK4xDsOtSNjOeQg66HmSJVfP3H0YNupJAen%2B14LZbjjV%2BslbO%2Fm3WhqFE3JWq2cO5bYvhr4ZbW1tfguLVCwkGtvqDsXCRHrCch2tJTGx6P7F%2BdhGbp9faXl2M4vgp6EJdvuh8V5z945nlHaT5YbYSWEmMVlV4CgdGQeF3zrMvVcnTPy%2BnwrgT09Cp5OCxXwkGFuKy9iKQbDJL%2F2V3mWFInnYymPP%2Fz2CKz8ZjObRDTJqEr14qSzJWFgPa%2BDfIijN4HjNgtuE6GVu2koNeNi3Bvzhq7NMqajgNoGMjHxkWkSp%2F1mx3IzWEfmgf33123PO8NKTnMPDUrckGOqUBM9JrVMfenAF3FLZpgVN3utfwzyxQEpN%2BhmEjLbN0LwD0yAePnlBP8Tf6vk16mR8V692E%2BD9gTVXCj3FP5TdbpO44pu9guJaNEPo3p8EuK%2Fp5XWW%2BxmKDo6xNsJlMHQZJff3VwGWWrHg9ZChYTQfDlHZlD6oGaYpTllXBB0Ju9tCaA1CQHcVUM4oHnH8IPZ8yHsUmVISZaObWca7XgPxUybY9lHxl&X-Amz-Signature=06894d980ef95a0980feddc456cfc82779161dbfd6d1277af7be28f65ed4db20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R73XYN4Y%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIEs%2Fq3K7Sodrl3FiF4zsP1yYI5P5DCjGVTp0MHL7hnOSAiEA1ZJFhbBewIMeBf0c8Kz%2BPdsBTtvOgmN6dAk%2F8u1SjmEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7%2Fko8MTbSOa1FEvircA5VgPGo1su3DsOIsQrWFkkebYmnUcv%2FkEvgQ%2F1Tk6yA%2FXZeK%2Bnr5Xk%2Fq0dzhZVHeNv4mfu4KTH35QKOIRgdR24ENDahSjLFvQ%2B9ng0mxXfbDrHHzgCpaOk7XR48aD1gmHc%2B2fQX%2Bapsji3FRFgT7Dylh4EZVAQY2I07QHFqPSwqPErWbrATMsAjn0DUDqdo1sA6wevJvGIPNUw%2BJfJubBnE7u2WKDFOOrVu0iqO%2FqxkQMdW%2FUebgP%2Fhsg%2BfDfW69%2BDUFbjAzmRhoSk30zo4sQRNZDWXOZ8mgoUYn9X8t2wT3AQ32OzhIpLpOLTz9oMOYwxZxC30QNHsBTvoJxVPDDYylzUhDoTGfBtH4PtAHDeYf%2FBC33nY9xSWFFtINnNaKJN%2FFiHnRmHykVnfRETUblyC4yVBAydo4I%2Bi%2Fz271bYAzZ4j%2BHoRLuG24lDt4b2HZH6G0b8%2FJkswS%2Bcd1GMAJnpIeZ8PHLvBIQZCqPVhSgybaSlSexqHgJqN17N0YWnHFqmMbWZY1MqvB0P%2FhdByUFJUxEl4SVBZEpZlRLprDXCbLSxWneBLxCr3B%2FrKiLRu82VT7%2BNgS3SjQ4Y1%2BaEJrGl9soS9FzHJ7bV5jkc040N9cFqlDwX%2BRmXUNEW2tMNHVrckGOqUBqJGkaJ%2FtMZ4PT23VkImi7j%2F5s9FDs18gPPPYil55qPNtaif5Kg1HQcifleKyNQ1rUezpt3Oc13G%2F%2F973WLTE2d0aZKDZCFwcHZVCAaAzb%2BipXOI8VEn67dUPazRXVXP6mgTyjWnvIPCd8FwjuIFSFC6EbxZE5eu5vXjtveKYNc8PObBpOM6D32CgiahqvdrrIeOOcWopC3lWJBf8EFHNYQ8dIwqE&X-Amz-Signature=8bd8b27c9721dbcbe888dcbba0179936e99e7846d14ebf9377d1ff07343c4608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXRFCXL%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBsL1ELfTGKTNsIBH2HUke2UqnvCO3CSkoWpQ8RYyUepAiEAqhi6pi3VjaSrFv2fZNE53OocdJdIyZbz7KjzkQmljBgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW0V%2FD0o%2BTr1WHneircA1fW7n6M%2BaD%2BPuslmKQyjZDHKGAQobuWltns21SzfF2wtZ2LYPqDtCm2232zTssn4PhGoC7cTMoX4%2F53lOdqGm3nFaU1ILVkO0MFqgzCvz6FjPw6xgh2Q5kMuBvmnQmBRWioMu00FTiDswZ4SesTO0KpDGyFUqArnEEse%2B73MEvW1lZYp2i3SiqOFCDTD8I2vf%2FaaHgQ%2BEzti%2B4SA%2Br7gqeRf4zLh1KNdPcOZSgNr5bGrcKhcpcAAHnQ5T37q28exjlMz9JKJdMosmJ3OrsgSJ%2FhtcMGuyHCz17IOKefFCVbTXT%2F3vvAc94h1rk4FurirwT34CCkk6g9pM56kbScF6HeI6GnA7O1zpv7lCbTeqvykke84zQjPRyws6uSHkq2jjABpRnsxuhYRaO4lGjnnUcqKcQjeCh5I03Ua22Uuzg3P8Ew9LBxy54rFv71LHSdteab5tHmYbphjYo1FShWcxgKcNg4kRRVpCR6JVvM5PsDKwpJJOT9%2BcDp35f%2FoN%2BxAorjIShI9LaYjY78xyDJXk2aEh8YcAQa%2B0IYW7xCGXFl0kgVFhRub8DrQdF16dpYVORY52Wwhic5KfFTaxGzxwVFaiB6Bc5HN%2Bz3mwwQjLK17E7%2FNc4BeUUwxXriMODYrckGOqUBgKbjGXMPV8nmvZxa0y%2B1uVUSf8aKEPRGYa8mfXFGI%2BOrVzrqUGAz3aIp%2BT%2BlLNHtN7%2F%2B%2FXe7lCc75KehqXqtlS7UMp7ulQ8mgQCXV2eeYUgRHjYUaNKLKD3bDcpN%2B0E73dhZuFol6DLypxQ8tYeleAnMtAfyn91X3EYzbyZPZufSGs1%2FWvcl1ELf0kpxCExOeqBHxja%2BqkdtGmRxe3WmPPYYFkfi&X-Amz-Signature=c3771c460e8a9ca8644d0d0787f2290a92d11326e84ea25c2ff77186ef534d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXRFCXL%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBsL1ELfTGKTNsIBH2HUke2UqnvCO3CSkoWpQ8RYyUepAiEAqhi6pi3VjaSrFv2fZNE53OocdJdIyZbz7KjzkQmljBgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW0V%2FD0o%2BTr1WHneircA1fW7n6M%2BaD%2BPuslmKQyjZDHKGAQobuWltns21SzfF2wtZ2LYPqDtCm2232zTssn4PhGoC7cTMoX4%2F53lOdqGm3nFaU1ILVkO0MFqgzCvz6FjPw6xgh2Q5kMuBvmnQmBRWioMu00FTiDswZ4SesTO0KpDGyFUqArnEEse%2B73MEvW1lZYp2i3SiqOFCDTD8I2vf%2FaaHgQ%2BEzti%2B4SA%2Br7gqeRf4zLh1KNdPcOZSgNr5bGrcKhcpcAAHnQ5T37q28exjlMz9JKJdMosmJ3OrsgSJ%2FhtcMGuyHCz17IOKefFCVbTXT%2F3vvAc94h1rk4FurirwT34CCkk6g9pM56kbScF6HeI6GnA7O1zpv7lCbTeqvykke84zQjPRyws6uSHkq2jjABpRnsxuhYRaO4lGjnnUcqKcQjeCh5I03Ua22Uuzg3P8Ew9LBxy54rFv71LHSdteab5tHmYbphjYo1FShWcxgKcNg4kRRVpCR6JVvM5PsDKwpJJOT9%2BcDp35f%2FoN%2BxAorjIShI9LaYjY78xyDJXk2aEh8YcAQa%2B0IYW7xCGXFl0kgVFhRub8DrQdF16dpYVORY52Wwhic5KfFTaxGzxwVFaiB6Bc5HN%2Bz3mwwQjLK17E7%2FNc4BeUUwxXriMODYrckGOqUBgKbjGXMPV8nmvZxa0y%2B1uVUSf8aKEPRGYa8mfXFGI%2BOrVzrqUGAz3aIp%2BT%2BlLNHtN7%2F%2B%2FXe7lCc75KehqXqtlS7UMp7ulQ8mgQCXV2eeYUgRHjYUaNKLKD3bDcpN%2B0E73dhZuFol6DLypxQ8tYeleAnMtAfyn91X3EYzbyZPZufSGs1%2FWvcl1ELf0kpxCExOeqBHxja%2BqkdtGmRxe3WmPPYYFkfi&X-Amz-Signature=f82862bdeebd846b97bd43636538c8359b8e5bc6cc5f7368cbf771815f8b17fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFEJA4AD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGJlRwfolJG2qFI8oltIIylGmwPkxW5BmxfL4UWqCslQAiEA%2FYniXtLHEfoqr%2FPkVHJD9jJGlNf47P3PQYoe7UAvrSAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR3lYl3Uhznq2umUircAwuaGwMQQOevdPPePI9WoYKTZ%2FerNp0bEP%2F3ozTWywAdmC5CzXUqnUMv0CMvHxMef%2F31NNCaXkLWdZfark4qLWdFOYU4u4z04wvPJM52VMlXfk2XG5swtRp3BzZp%2F78S%2BhtJ1pT702RbixEJFW4dL1DuyAB6ml8EQH9vb2P34ODRBO0j7jaC%2BqFYZNLGY1Sac3%2BiGFyqKf194KZ24evdZP9WpSk%2F1SlX9by%2Buo4rMOWtay9OUGS8yM28yNU%2FEgmAZUvYc14u9ZqPCSQrwaU7xlt7Ezd3BM2drDoJ4tOVpSZ6xmiiDCqoptEHzTjesFxyoO5BKRJdQuXxmTIAA7x0rJxqAshyNDnpw4ASlyr5ojb%2FSTHKIGJIVze00JhtIuXUC0gjmkxc%2F9MlHgoegg6TTcN88Wa6iiTmGjD9gdkVBFg6TIdf3u5DHH1DC47SXw22ylLxSUupqQbWgeoLHvmnML%2FhGvGNwCcozppw5XYDC%2BfzMzFOjQhZfAA9rkF5iD8jznEM6M0l8AzYlO8i3ejlRlDEY6d4VIY5WSr%2BelQMtPLmOBzG68gMbkZcCxPgiS0dLgNjtCUhMK5eJAWEg2zOTOeueYr%2BuKmp%2BGgn0Bg%2B1XyGMurIQpduWuX5adZgMIfIrckGOqUBXi0%2BN0r51olN0UoVykUIR%2Fxx6YXGAY6D%2B9zm6MklnRrCXIXsq%2BQMJM20z8Z66wafDRIEX6Gf%2B%2Bj0igquwbZ0x%2F%2BwHqPhfNRk7f2PMq7mxrQDTBKaMOa0fHz8zYCpP2BrnpEr5tMx2Zh8SZknQQaSyJbvKFT4y6Vpmyym213S%2B1P9L0UkQIucsQ%2BmyGStUucmXvvHsz65GoG%2FYn5di9zZqJyXwTVL&X-Amz-Signature=cca1c47db5d6066a02f02b045d430245b9cebabb48b35cbd3a8d3010017508f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFEJA4AD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGJlRwfolJG2qFI8oltIIylGmwPkxW5BmxfL4UWqCslQAiEA%2FYniXtLHEfoqr%2FPkVHJD9jJGlNf47P3PQYoe7UAvrSAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR3lYl3Uhznq2umUircAwuaGwMQQOevdPPePI9WoYKTZ%2FerNp0bEP%2F3ozTWywAdmC5CzXUqnUMv0CMvHxMef%2F31NNCaXkLWdZfark4qLWdFOYU4u4z04wvPJM52VMlXfk2XG5swtRp3BzZp%2F78S%2BhtJ1pT702RbixEJFW4dL1DuyAB6ml8EQH9vb2P34ODRBO0j7jaC%2BqFYZNLGY1Sac3%2BiGFyqKf194KZ24evdZP9WpSk%2F1SlX9by%2Buo4rMOWtay9OUGS8yM28yNU%2FEgmAZUvYc14u9ZqPCSQrwaU7xlt7Ezd3BM2drDoJ4tOVpSZ6xmiiDCqoptEHzTjesFxyoO5BKRJdQuXxmTIAA7x0rJxqAshyNDnpw4ASlyr5ojb%2FSTHKIGJIVze00JhtIuXUC0gjmkxc%2F9MlHgoegg6TTcN88Wa6iiTmGjD9gdkVBFg6TIdf3u5DHH1DC47SXw22ylLxSUupqQbWgeoLHvmnML%2FhGvGNwCcozppw5XYDC%2BfzMzFOjQhZfAA9rkF5iD8jznEM6M0l8AzYlO8i3ejlRlDEY6d4VIY5WSr%2BelQMtPLmOBzG68gMbkZcCxPgiS0dLgNjtCUhMK5eJAWEg2zOTOeueYr%2BuKmp%2BGgn0Bg%2B1XyGMurIQpduWuX5adZgMIfIrckGOqUBXi0%2BN0r51olN0UoVykUIR%2Fxx6YXGAY6D%2B9zm6MklnRrCXIXsq%2BQMJM20z8Z66wafDRIEX6Gf%2B%2Bj0igquwbZ0x%2F%2BwHqPhfNRk7f2PMq7mxrQDTBKaMOa0fHz8zYCpP2BrnpEr5tMx2Zh8SZknQQaSyJbvKFT4y6Vpmyym213S%2B1P9L0UkQIucsQ%2BmyGStUucmXvvHsz65GoG%2FYn5di9zZqJyXwTVL&X-Amz-Signature=c8f09807fd7944e0657976af23f44e075a508dbd7bd55851f63a9bd41f8fdb29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFEJA4AD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGJlRwfolJG2qFI8oltIIylGmwPkxW5BmxfL4UWqCslQAiEA%2FYniXtLHEfoqr%2FPkVHJD9jJGlNf47P3PQYoe7UAvrSAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR3lYl3Uhznq2umUircAwuaGwMQQOevdPPePI9WoYKTZ%2FerNp0bEP%2F3ozTWywAdmC5CzXUqnUMv0CMvHxMef%2F31NNCaXkLWdZfark4qLWdFOYU4u4z04wvPJM52VMlXfk2XG5swtRp3BzZp%2F78S%2BhtJ1pT702RbixEJFW4dL1DuyAB6ml8EQH9vb2P34ODRBO0j7jaC%2BqFYZNLGY1Sac3%2BiGFyqKf194KZ24evdZP9WpSk%2F1SlX9by%2Buo4rMOWtay9OUGS8yM28yNU%2FEgmAZUvYc14u9ZqPCSQrwaU7xlt7Ezd3BM2drDoJ4tOVpSZ6xmiiDCqoptEHzTjesFxyoO5BKRJdQuXxmTIAA7x0rJxqAshyNDnpw4ASlyr5ojb%2FSTHKIGJIVze00JhtIuXUC0gjmkxc%2F9MlHgoegg6TTcN88Wa6iiTmGjD9gdkVBFg6TIdf3u5DHH1DC47SXw22ylLxSUupqQbWgeoLHvmnML%2FhGvGNwCcozppw5XYDC%2BfzMzFOjQhZfAA9rkF5iD8jznEM6M0l8AzYlO8i3ejlRlDEY6d4VIY5WSr%2BelQMtPLmOBzG68gMbkZcCxPgiS0dLgNjtCUhMK5eJAWEg2zOTOeueYr%2BuKmp%2BGgn0Bg%2B1XyGMurIQpduWuX5adZgMIfIrckGOqUBXi0%2BN0r51olN0UoVykUIR%2Fxx6YXGAY6D%2B9zm6MklnRrCXIXsq%2BQMJM20z8Z66wafDRIEX6Gf%2B%2Bj0igquwbZ0x%2F%2BwHqPhfNRk7f2PMq7mxrQDTBKaMOa0fHz8zYCpP2BrnpEr5tMx2Zh8SZknQQaSyJbvKFT4y6Vpmyym213S%2B1P9L0UkQIucsQ%2BmyGStUucmXvvHsz65GoG%2FYn5di9zZqJyXwTVL&X-Amz-Signature=10693074cd4a4b06df5241e3100a82cad84044894c96020020134f64522ad317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFEJA4AD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGJlRwfolJG2qFI8oltIIylGmwPkxW5BmxfL4UWqCslQAiEA%2FYniXtLHEfoqr%2FPkVHJD9jJGlNf47P3PQYoe7UAvrSAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR3lYl3Uhznq2umUircAwuaGwMQQOevdPPePI9WoYKTZ%2FerNp0bEP%2F3ozTWywAdmC5CzXUqnUMv0CMvHxMef%2F31NNCaXkLWdZfark4qLWdFOYU4u4z04wvPJM52VMlXfk2XG5swtRp3BzZp%2F78S%2BhtJ1pT702RbixEJFW4dL1DuyAB6ml8EQH9vb2P34ODRBO0j7jaC%2BqFYZNLGY1Sac3%2BiGFyqKf194KZ24evdZP9WpSk%2F1SlX9by%2Buo4rMOWtay9OUGS8yM28yNU%2FEgmAZUvYc14u9ZqPCSQrwaU7xlt7Ezd3BM2drDoJ4tOVpSZ6xmiiDCqoptEHzTjesFxyoO5BKRJdQuXxmTIAA7x0rJxqAshyNDnpw4ASlyr5ojb%2FSTHKIGJIVze00JhtIuXUC0gjmkxc%2F9MlHgoegg6TTcN88Wa6iiTmGjD9gdkVBFg6TIdf3u5DHH1DC47SXw22ylLxSUupqQbWgeoLHvmnML%2FhGvGNwCcozppw5XYDC%2BfzMzFOjQhZfAA9rkF5iD8jznEM6M0l8AzYlO8i3ejlRlDEY6d4VIY5WSr%2BelQMtPLmOBzG68gMbkZcCxPgiS0dLgNjtCUhMK5eJAWEg2zOTOeueYr%2BuKmp%2BGgn0Bg%2B1XyGMurIQpduWuX5adZgMIfIrckGOqUBXi0%2BN0r51olN0UoVykUIR%2Fxx6YXGAY6D%2B9zm6MklnRrCXIXsq%2BQMJM20z8Z66wafDRIEX6Gf%2B%2Bj0igquwbZ0x%2F%2BwHqPhfNRk7f2PMq7mxrQDTBKaMOa0fHz8zYCpP2BrnpEr5tMx2Zh8SZknQQaSyJbvKFT4y6Vpmyym213S%2B1P9L0UkQIucsQ%2BmyGStUucmXvvHsz65GoG%2FYn5di9zZqJyXwTVL&X-Amz-Signature=40bce99f5a10d133c3f80625e1c2a3e70c44b0722a8c11a8c4fadfaef279a801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFV3XRC7%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T015005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIFm%2B1ZFVvtK1lkQwb%2FI1l%2BNHzWNrRUNrE8j0jI9TTob1AiAPHw%2FD%2FOfO5%2F4jcLMBbVtC1LBrGp4Pqnhr5ppd0nquuyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBC8nMqg2tLZwB%2B%2F9KtwDXINvLyNExqbPP9uMBNxtU3nh66lquCbS%2BvESxAh%2FdFH%2FWG3r5f29Rm16nA6o099QhvjlAdEZ0fMEt7dkYTuP9HeSsH%2BLlcifNBLYIvzF2ZmVuXGPAp9HIUcAYMXqamfC%2FbIynGbT2cFN%2FNMRJ2Fm4RtA9Md2HHMFncAOXAIz950Z5zmZ315StVT3jvCEZUMC0oXQRWJbmObTPY1tfg7JIp3B%2F79srn0povUkHlMg7merB0H63u1lQYOHeaNhSGhlR8jL4gt4Iaj%2BhC1lwg6YPhY%2FntKdaGgWo4Vg%2F5cqT59YLNC%2BmXWKCK8h3FETRbQmDuH1tqf%2BNB8CfMjUYQ%2BU0pmXVXVRnKfVksReFDGqZmTET5ix%2FkvBGCNNY4qdv4q8af50iL6dfjxmP8fTxc%2B8REIoaxVLuR3sCKohRPzNf9qD39zPpmWmztYtK3N5AIjQk49ot0ttqs3VLRdMPTosnfgep8tYRYA14%2FvPtYQiUkzcI%2BZMKn6raQHpd9rqVqCW1PA17%2FT0%2FcUjShEbJXqQgFGtxi4zZduOUVpbxnr9t19R69SKkyBrMNzWy0Szvd6UMTMJt0yrT0tbAeEAGAQ96BoDHdgxZuZN8eiTloIJx6UNVpZHmwnfofLL1oMw8MutyQY6pgFdKX5Z0Qfq70hLp4GVvr4%2BAquOwFvncFc5NqdJUHgJz7Ui26FJCdmO26lVnbDODfO0y6k3975wCfc5Y355QDZ9Cc2tjwZGq%2FVYZSGw22ynTP21RdBxltrWun0KF4DQ3l1lbeIpDH57uoAtXKEp%2FmUuyWwqdLEMnxYVtdLuo%2FF5EvjbGZ7Mxcp%2B9RAAjlQSZJ4odvYeSSyQGdZlY1nCPf2z79v5U%2Bfh&X-Amz-Signature=fcf2d07c3011d81f7dec7d7af5d345b635f2901ba41bb12d83c54144b641ae26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFEJA4AD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGJlRwfolJG2qFI8oltIIylGmwPkxW5BmxfL4UWqCslQAiEA%2FYniXtLHEfoqr%2FPkVHJD9jJGlNf47P3PQYoe7UAvrSAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR3lYl3Uhznq2umUircAwuaGwMQQOevdPPePI9WoYKTZ%2FerNp0bEP%2F3ozTWywAdmC5CzXUqnUMv0CMvHxMef%2F31NNCaXkLWdZfark4qLWdFOYU4u4z04wvPJM52VMlXfk2XG5swtRp3BzZp%2F78S%2BhtJ1pT702RbixEJFW4dL1DuyAB6ml8EQH9vb2P34ODRBO0j7jaC%2BqFYZNLGY1Sac3%2BiGFyqKf194KZ24evdZP9WpSk%2F1SlX9by%2Buo4rMOWtay9OUGS8yM28yNU%2FEgmAZUvYc14u9ZqPCSQrwaU7xlt7Ezd3BM2drDoJ4tOVpSZ6xmiiDCqoptEHzTjesFxyoO5BKRJdQuXxmTIAA7x0rJxqAshyNDnpw4ASlyr5ojb%2FSTHKIGJIVze00JhtIuXUC0gjmkxc%2F9MlHgoegg6TTcN88Wa6iiTmGjD9gdkVBFg6TIdf3u5DHH1DC47SXw22ylLxSUupqQbWgeoLHvmnML%2FhGvGNwCcozppw5XYDC%2BfzMzFOjQhZfAA9rkF5iD8jznEM6M0l8AzYlO8i3ejlRlDEY6d4VIY5WSr%2BelQMtPLmOBzG68gMbkZcCxPgiS0dLgNjtCUhMK5eJAWEg2zOTOeueYr%2BuKmp%2BGgn0Bg%2B1XyGMurIQpduWuX5adZgMIfIrckGOqUBXi0%2BN0r51olN0UoVykUIR%2Fxx6YXGAY6D%2B9zm6MklnRrCXIXsq%2BQMJM20z8Z66wafDRIEX6Gf%2B%2Bj0igquwbZ0x%2F%2BwHqPhfNRk7f2PMq7mxrQDTBKaMOa0fHz8zYCpP2BrnpEr5tMx2Zh8SZknQQaSyJbvKFT4y6Vpmyym213S%2B1P9L0UkQIucsQ%2BmyGStUucmXvvHsz65GoG%2FYn5di9zZqJyXwTVL&X-Amz-Signature=ce103edf6384cb48ea021ef2c06b4a314d0358e84b5a5b61bb61aa77643d2c91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFEJA4AD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGJlRwfolJG2qFI8oltIIylGmwPkxW5BmxfL4UWqCslQAiEA%2FYniXtLHEfoqr%2FPkVHJD9jJGlNf47P3PQYoe7UAvrSAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR3lYl3Uhznq2umUircAwuaGwMQQOevdPPePI9WoYKTZ%2FerNp0bEP%2F3ozTWywAdmC5CzXUqnUMv0CMvHxMef%2F31NNCaXkLWdZfark4qLWdFOYU4u4z04wvPJM52VMlXfk2XG5swtRp3BzZp%2F78S%2BhtJ1pT702RbixEJFW4dL1DuyAB6ml8EQH9vb2P34ODRBO0j7jaC%2BqFYZNLGY1Sac3%2BiGFyqKf194KZ24evdZP9WpSk%2F1SlX9by%2Buo4rMOWtay9OUGS8yM28yNU%2FEgmAZUvYc14u9ZqPCSQrwaU7xlt7Ezd3BM2drDoJ4tOVpSZ6xmiiDCqoptEHzTjesFxyoO5BKRJdQuXxmTIAA7x0rJxqAshyNDnpw4ASlyr5ojb%2FSTHKIGJIVze00JhtIuXUC0gjmkxc%2F9MlHgoegg6TTcN88Wa6iiTmGjD9gdkVBFg6TIdf3u5DHH1DC47SXw22ylLxSUupqQbWgeoLHvmnML%2FhGvGNwCcozppw5XYDC%2BfzMzFOjQhZfAA9rkF5iD8jznEM6M0l8AzYlO8i3ejlRlDEY6d4VIY5WSr%2BelQMtPLmOBzG68gMbkZcCxPgiS0dLgNjtCUhMK5eJAWEg2zOTOeueYr%2BuKmp%2BGgn0Bg%2B1XyGMurIQpduWuX5adZgMIfIrckGOqUBXi0%2BN0r51olN0UoVykUIR%2Fxx6YXGAY6D%2B9zm6MklnRrCXIXsq%2BQMJM20z8Z66wafDRIEX6Gf%2B%2Bj0igquwbZ0x%2F%2BwHqPhfNRk7f2PMq7mxrQDTBKaMOa0fHz8zYCpP2BrnpEr5tMx2Zh8SZknQQaSyJbvKFT4y6Vpmyym213S%2B1P9L0UkQIucsQ%2BmyGStUucmXvvHsz65GoG%2FYn5di9zZqJyXwTVL&X-Amz-Signature=2e196792c3afe6d9f4c892f43c60349bc72cdcde30f71f853c8e3867dfb226d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFEJA4AD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGJlRwfolJG2qFI8oltIIylGmwPkxW5BmxfL4UWqCslQAiEA%2FYniXtLHEfoqr%2FPkVHJD9jJGlNf47P3PQYoe7UAvrSAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR3lYl3Uhznq2umUircAwuaGwMQQOevdPPePI9WoYKTZ%2FerNp0bEP%2F3ozTWywAdmC5CzXUqnUMv0CMvHxMef%2F31NNCaXkLWdZfark4qLWdFOYU4u4z04wvPJM52VMlXfk2XG5swtRp3BzZp%2F78S%2BhtJ1pT702RbixEJFW4dL1DuyAB6ml8EQH9vb2P34ODRBO0j7jaC%2BqFYZNLGY1Sac3%2BiGFyqKf194KZ24evdZP9WpSk%2F1SlX9by%2Buo4rMOWtay9OUGS8yM28yNU%2FEgmAZUvYc14u9ZqPCSQrwaU7xlt7Ezd3BM2drDoJ4tOVpSZ6xmiiDCqoptEHzTjesFxyoO5BKRJdQuXxmTIAA7x0rJxqAshyNDnpw4ASlyr5ojb%2FSTHKIGJIVze00JhtIuXUC0gjmkxc%2F9MlHgoegg6TTcN88Wa6iiTmGjD9gdkVBFg6TIdf3u5DHH1DC47SXw22ylLxSUupqQbWgeoLHvmnML%2FhGvGNwCcozppw5XYDC%2BfzMzFOjQhZfAA9rkF5iD8jznEM6M0l8AzYlO8i3ejlRlDEY6d4VIY5WSr%2BelQMtPLmOBzG68gMbkZcCxPgiS0dLgNjtCUhMK5eJAWEg2zOTOeueYr%2BuKmp%2BGgn0Bg%2B1XyGMurIQpduWuX5adZgMIfIrckGOqUBXi0%2BN0r51olN0UoVykUIR%2Fxx6YXGAY6D%2B9zm6MklnRrCXIXsq%2BQMJM20z8Z66wafDRIEX6Gf%2B%2Bj0igquwbZ0x%2F%2BwHqPhfNRk7f2PMq7mxrQDTBKaMOa0fHz8zYCpP2BrnpEr5tMx2Zh8SZknQQaSyJbvKFT4y6Vpmyym213S%2B1P9L0UkQIucsQ%2BmyGStUucmXvvHsz65GoG%2FYn5di9zZqJyXwTVL&X-Amz-Signature=10693074cd4a4b06df5241e3100a82cad84044894c96020020134f64522ad317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFEJA4AD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGJlRwfolJG2qFI8oltIIylGmwPkxW5BmxfL4UWqCslQAiEA%2FYniXtLHEfoqr%2FPkVHJD9jJGlNf47P3PQYoe7UAvrSAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR3lYl3Uhznq2umUircAwuaGwMQQOevdPPePI9WoYKTZ%2FerNp0bEP%2F3ozTWywAdmC5CzXUqnUMv0CMvHxMef%2F31NNCaXkLWdZfark4qLWdFOYU4u4z04wvPJM52VMlXfk2XG5swtRp3BzZp%2F78S%2BhtJ1pT702RbixEJFW4dL1DuyAB6ml8EQH9vb2P34ODRBO0j7jaC%2BqFYZNLGY1Sac3%2BiGFyqKf194KZ24evdZP9WpSk%2F1SlX9by%2Buo4rMOWtay9OUGS8yM28yNU%2FEgmAZUvYc14u9ZqPCSQrwaU7xlt7Ezd3BM2drDoJ4tOVpSZ6xmiiDCqoptEHzTjesFxyoO5BKRJdQuXxmTIAA7x0rJxqAshyNDnpw4ASlyr5ojb%2FSTHKIGJIVze00JhtIuXUC0gjmkxc%2F9MlHgoegg6TTcN88Wa6iiTmGjD9gdkVBFg6TIdf3u5DHH1DC47SXw22ylLxSUupqQbWgeoLHvmnML%2FhGvGNwCcozppw5XYDC%2BfzMzFOjQhZfAA9rkF5iD8jznEM6M0l8AzYlO8i3ejlRlDEY6d4VIY5WSr%2BelQMtPLmOBzG68gMbkZcCxPgiS0dLgNjtCUhMK5eJAWEg2zOTOeueYr%2BuKmp%2BGgn0Bg%2B1XyGMurIQpduWuX5adZgMIfIrckGOqUBXi0%2BN0r51olN0UoVykUIR%2Fxx6YXGAY6D%2B9zm6MklnRrCXIXsq%2BQMJM20z8Z66wafDRIEX6Gf%2B%2Bj0igquwbZ0x%2F%2BwHqPhfNRk7f2PMq7mxrQDTBKaMOa0fHz8zYCpP2BrnpEr5tMx2Zh8SZknQQaSyJbvKFT4y6Vpmyym213S%2B1P9L0UkQIucsQ%2BmyGStUucmXvvHsz65GoG%2FYn5di9zZqJyXwTVL&X-Amz-Signature=a0024131a7efbb00753789c84f3213fa044c37ef7db4b1542e651c64cd380dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFEJA4AD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGJlRwfolJG2qFI8oltIIylGmwPkxW5BmxfL4UWqCslQAiEA%2FYniXtLHEfoqr%2FPkVHJD9jJGlNf47P3PQYoe7UAvrSAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR3lYl3Uhznq2umUircAwuaGwMQQOevdPPePI9WoYKTZ%2FerNp0bEP%2F3ozTWywAdmC5CzXUqnUMv0CMvHxMef%2F31NNCaXkLWdZfark4qLWdFOYU4u4z04wvPJM52VMlXfk2XG5swtRp3BzZp%2F78S%2BhtJ1pT702RbixEJFW4dL1DuyAB6ml8EQH9vb2P34ODRBO0j7jaC%2BqFYZNLGY1Sac3%2BiGFyqKf194KZ24evdZP9WpSk%2F1SlX9by%2Buo4rMOWtay9OUGS8yM28yNU%2FEgmAZUvYc14u9ZqPCSQrwaU7xlt7Ezd3BM2drDoJ4tOVpSZ6xmiiDCqoptEHzTjesFxyoO5BKRJdQuXxmTIAA7x0rJxqAshyNDnpw4ASlyr5ojb%2FSTHKIGJIVze00JhtIuXUC0gjmkxc%2F9MlHgoegg6TTcN88Wa6iiTmGjD9gdkVBFg6TIdf3u5DHH1DC47SXw22ylLxSUupqQbWgeoLHvmnML%2FhGvGNwCcozppw5XYDC%2BfzMzFOjQhZfAA9rkF5iD8jznEM6M0l8AzYlO8i3ejlRlDEY6d4VIY5WSr%2BelQMtPLmOBzG68gMbkZcCxPgiS0dLgNjtCUhMK5eJAWEg2zOTOeueYr%2BuKmp%2BGgn0Bg%2B1XyGMurIQpduWuX5adZgMIfIrckGOqUBXi0%2BN0r51olN0UoVykUIR%2Fxx6YXGAY6D%2B9zm6MklnRrCXIXsq%2BQMJM20z8Z66wafDRIEX6Gf%2B%2Bj0igquwbZ0x%2F%2BwHqPhfNRk7f2PMq7mxrQDTBKaMOa0fHz8zYCpP2BrnpEr5tMx2Zh8SZknQQaSyJbvKFT4y6Vpmyym213S%2B1P9L0UkQIucsQ%2BmyGStUucmXvvHsz65GoG%2FYn5di9zZqJyXwTVL&X-Amz-Signature=fe42b1ead02c5d0a4d489cefe6f2b53dba38b061e61b2ef7cb271f90aadb832d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFEJA4AD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGJlRwfolJG2qFI8oltIIylGmwPkxW5BmxfL4UWqCslQAiEA%2FYniXtLHEfoqr%2FPkVHJD9jJGlNf47P3PQYoe7UAvrSAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR3lYl3Uhznq2umUircAwuaGwMQQOevdPPePI9WoYKTZ%2FerNp0bEP%2F3ozTWywAdmC5CzXUqnUMv0CMvHxMef%2F31NNCaXkLWdZfark4qLWdFOYU4u4z04wvPJM52VMlXfk2XG5swtRp3BzZp%2F78S%2BhtJ1pT702RbixEJFW4dL1DuyAB6ml8EQH9vb2P34ODRBO0j7jaC%2BqFYZNLGY1Sac3%2BiGFyqKf194KZ24evdZP9WpSk%2F1SlX9by%2Buo4rMOWtay9OUGS8yM28yNU%2FEgmAZUvYc14u9ZqPCSQrwaU7xlt7Ezd3BM2drDoJ4tOVpSZ6xmiiDCqoptEHzTjesFxyoO5BKRJdQuXxmTIAA7x0rJxqAshyNDnpw4ASlyr5ojb%2FSTHKIGJIVze00JhtIuXUC0gjmkxc%2F9MlHgoegg6TTcN88Wa6iiTmGjD9gdkVBFg6TIdf3u5DHH1DC47SXw22ylLxSUupqQbWgeoLHvmnML%2FhGvGNwCcozppw5XYDC%2BfzMzFOjQhZfAA9rkF5iD8jznEM6M0l8AzYlO8i3ejlRlDEY6d4VIY5WSr%2BelQMtPLmOBzG68gMbkZcCxPgiS0dLgNjtCUhMK5eJAWEg2zOTOeueYr%2BuKmp%2BGgn0Bg%2B1XyGMurIQpduWuX5adZgMIfIrckGOqUBXi0%2BN0r51olN0UoVykUIR%2Fxx6YXGAY6D%2B9zm6MklnRrCXIXsq%2BQMJM20z8Z66wafDRIEX6Gf%2B%2Bj0igquwbZ0x%2F%2BwHqPhfNRk7f2PMq7mxrQDTBKaMOa0fHz8zYCpP2BrnpEr5tMx2Zh8SZknQQaSyJbvKFT4y6Vpmyym213S%2B1P9L0UkQIucsQ%2BmyGStUucmXvvHsz65GoG%2FYn5di9zZqJyXwTVL&X-Amz-Signature=2d7d918a837613a7a783f1eb229d7f273c786dfd243edc70a5084f85faca0c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


