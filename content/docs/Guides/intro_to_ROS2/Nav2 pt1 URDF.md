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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NPBGJC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFFTNJ%2BfBQUoIxg7kEHayivEiEY%2FTFbPoV1%2Fkw%2BxkA7AiEApsbVe8ErUto%2FHusuA%2FH8Bc9uDB%2FE7A%2Bq8PiNNXcB684q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAK3L%2B2RtTG%2BvMHXMircA7hgMM33jCX%2BPrhc2%2FCvitIoaVnmIjDsHCtMSCSSvIqsosPIEilhP3H%2FSODNQA0lBLDyamtUS4dtSagg9fibgz2IeyQIudNGG28sxSLO%2BG6wcMdKmxa84z8kLwgywx9VdKi1YQmWpmPhtuHCdRtNKQrtJIyXf%2BSXNYRPxmD4GEHf%2B2gfatYgJirkaF9OT%2BXv3sxUbg3N5ZjI%2BBKQ9q%2B3%2Bi8%2FsAicXGVl4Xx7d%2FJgxC3k18Fk5WV6msFDlKac50NuThSZ6Jo5UkVIutsTj0m8uexnawduXZNeiasBfVIzHPSg4%2BIE5T2DIVxWnnCugOvkeqgBBwTBh%2Bo2qXI3%2FV1uUEGsO3QofWqIaVh9p43eGWSWsemXxKlRmhTkBiuwpJxoDpstcpzGcbj6y6W0MLePhzYotvi6cUoRypLUpmz29n%2B5KLKtk0rkt0cG2UNA71hFLc06cnn0pONNroWZyt917jOFwNDv7BKQ7eDXFivCZ5QJ9fR6%2BJejPr4y5JNSMOVh7TjBorPuHHGm4h6FfE07rVwyveCKhq1OamKgYX0QgjtOsVnUGP%2F%2BbHMGQg0oBDYPfwkdiZzqN2VOxpN5ODvtrAtfseyUKY257TWLEVgJqHuVJQWZeVza1asBEvm8MJDZvsQGOqUB7YSdBaj9YGiNmNNzGZk39qDsQB4DNtOV5x0uW08k4UCzWY0EsbGsxCU%2BOMpfimDYXlCVrAcEuIj178yuvKaZgX4SqOiU5RDkopjXp6%2B%2FFk1J3uDX3IOx96jj%2FrNVoGYe1EOhnaisYQVy0LdsngWpdsxs1bfj080wBDI3i9bEtPZ3iL%2BZ%2BW%2F9fswWfE2Yu%2FqSQ9K%2FfgEKrZHyEABY4bvhA2dQLb%2Fq&X-Amz-Signature=5aa956b4af06478d8d55497f7e500496b63fd7d9058809b9738c2492822f2977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NPBGJC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFFTNJ%2BfBQUoIxg7kEHayivEiEY%2FTFbPoV1%2Fkw%2BxkA7AiEApsbVe8ErUto%2FHusuA%2FH8Bc9uDB%2FE7A%2Bq8PiNNXcB684q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAK3L%2B2RtTG%2BvMHXMircA7hgMM33jCX%2BPrhc2%2FCvitIoaVnmIjDsHCtMSCSSvIqsosPIEilhP3H%2FSODNQA0lBLDyamtUS4dtSagg9fibgz2IeyQIudNGG28sxSLO%2BG6wcMdKmxa84z8kLwgywx9VdKi1YQmWpmPhtuHCdRtNKQrtJIyXf%2BSXNYRPxmD4GEHf%2B2gfatYgJirkaF9OT%2BXv3sxUbg3N5ZjI%2BBKQ9q%2B3%2Bi8%2FsAicXGVl4Xx7d%2FJgxC3k18Fk5WV6msFDlKac50NuThSZ6Jo5UkVIutsTj0m8uexnawduXZNeiasBfVIzHPSg4%2BIE5T2DIVxWnnCugOvkeqgBBwTBh%2Bo2qXI3%2FV1uUEGsO3QofWqIaVh9p43eGWSWsemXxKlRmhTkBiuwpJxoDpstcpzGcbj6y6W0MLePhzYotvi6cUoRypLUpmz29n%2B5KLKtk0rkt0cG2UNA71hFLc06cnn0pONNroWZyt917jOFwNDv7BKQ7eDXFivCZ5QJ9fR6%2BJejPr4y5JNSMOVh7TjBorPuHHGm4h6FfE07rVwyveCKhq1OamKgYX0QgjtOsVnUGP%2F%2BbHMGQg0oBDYPfwkdiZzqN2VOxpN5ODvtrAtfseyUKY257TWLEVgJqHuVJQWZeVza1asBEvm8MJDZvsQGOqUB7YSdBaj9YGiNmNNzGZk39qDsQB4DNtOV5x0uW08k4UCzWY0EsbGsxCU%2BOMpfimDYXlCVrAcEuIj178yuvKaZgX4SqOiU5RDkopjXp6%2B%2FFk1J3uDX3IOx96jj%2FrNVoGYe1EOhnaisYQVy0LdsngWpdsxs1bfj080wBDI3i9bEtPZ3iL%2BZ%2BW%2F9fswWfE2Yu%2FqSQ9K%2FfgEKrZHyEABY4bvhA2dQLb%2Fq&X-Amz-Signature=f859a386b9ce4eb194fbe9c06c42720cabfc1d08e06cba2b319b5c4343bf275e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NPBGJC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFFTNJ%2BfBQUoIxg7kEHayivEiEY%2FTFbPoV1%2Fkw%2BxkA7AiEApsbVe8ErUto%2FHusuA%2FH8Bc9uDB%2FE7A%2Bq8PiNNXcB684q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAK3L%2B2RtTG%2BvMHXMircA7hgMM33jCX%2BPrhc2%2FCvitIoaVnmIjDsHCtMSCSSvIqsosPIEilhP3H%2FSODNQA0lBLDyamtUS4dtSagg9fibgz2IeyQIudNGG28sxSLO%2BG6wcMdKmxa84z8kLwgywx9VdKi1YQmWpmPhtuHCdRtNKQrtJIyXf%2BSXNYRPxmD4GEHf%2B2gfatYgJirkaF9OT%2BXv3sxUbg3N5ZjI%2BBKQ9q%2B3%2Bi8%2FsAicXGVl4Xx7d%2FJgxC3k18Fk5WV6msFDlKac50NuThSZ6Jo5UkVIutsTj0m8uexnawduXZNeiasBfVIzHPSg4%2BIE5T2DIVxWnnCugOvkeqgBBwTBh%2Bo2qXI3%2FV1uUEGsO3QofWqIaVh9p43eGWSWsemXxKlRmhTkBiuwpJxoDpstcpzGcbj6y6W0MLePhzYotvi6cUoRypLUpmz29n%2B5KLKtk0rkt0cG2UNA71hFLc06cnn0pONNroWZyt917jOFwNDv7BKQ7eDXFivCZ5QJ9fR6%2BJejPr4y5JNSMOVh7TjBorPuHHGm4h6FfE07rVwyveCKhq1OamKgYX0QgjtOsVnUGP%2F%2BbHMGQg0oBDYPfwkdiZzqN2VOxpN5ODvtrAtfseyUKY257TWLEVgJqHuVJQWZeVza1asBEvm8MJDZvsQGOqUB7YSdBaj9YGiNmNNzGZk39qDsQB4DNtOV5x0uW08k4UCzWY0EsbGsxCU%2BOMpfimDYXlCVrAcEuIj178yuvKaZgX4SqOiU5RDkopjXp6%2B%2FFk1J3uDX3IOx96jj%2FrNVoGYe1EOhnaisYQVy0LdsngWpdsxs1bfj080wBDI3i9bEtPZ3iL%2BZ%2BW%2F9fswWfE2Yu%2FqSQ9K%2FfgEKrZHyEABY4bvhA2dQLb%2Fq&X-Amz-Signature=41c49379bb21002357a413bab65550899ad5aefebf9d840f92c93685e85e3173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NPBGJC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFFTNJ%2BfBQUoIxg7kEHayivEiEY%2FTFbPoV1%2Fkw%2BxkA7AiEApsbVe8ErUto%2FHusuA%2FH8Bc9uDB%2FE7A%2Bq8PiNNXcB684q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAK3L%2B2RtTG%2BvMHXMircA7hgMM33jCX%2BPrhc2%2FCvitIoaVnmIjDsHCtMSCSSvIqsosPIEilhP3H%2FSODNQA0lBLDyamtUS4dtSagg9fibgz2IeyQIudNGG28sxSLO%2BG6wcMdKmxa84z8kLwgywx9VdKi1YQmWpmPhtuHCdRtNKQrtJIyXf%2BSXNYRPxmD4GEHf%2B2gfatYgJirkaF9OT%2BXv3sxUbg3N5ZjI%2BBKQ9q%2B3%2Bi8%2FsAicXGVl4Xx7d%2FJgxC3k18Fk5WV6msFDlKac50NuThSZ6Jo5UkVIutsTj0m8uexnawduXZNeiasBfVIzHPSg4%2BIE5T2DIVxWnnCugOvkeqgBBwTBh%2Bo2qXI3%2FV1uUEGsO3QofWqIaVh9p43eGWSWsemXxKlRmhTkBiuwpJxoDpstcpzGcbj6y6W0MLePhzYotvi6cUoRypLUpmz29n%2B5KLKtk0rkt0cG2UNA71hFLc06cnn0pONNroWZyt917jOFwNDv7BKQ7eDXFivCZ5QJ9fR6%2BJejPr4y5JNSMOVh7TjBorPuHHGm4h6FfE07rVwyveCKhq1OamKgYX0QgjtOsVnUGP%2F%2BbHMGQg0oBDYPfwkdiZzqN2VOxpN5ODvtrAtfseyUKY257TWLEVgJqHuVJQWZeVza1asBEvm8MJDZvsQGOqUB7YSdBaj9YGiNmNNzGZk39qDsQB4DNtOV5x0uW08k4UCzWY0EsbGsxCU%2BOMpfimDYXlCVrAcEuIj178yuvKaZgX4SqOiU5RDkopjXp6%2B%2FFk1J3uDX3IOx96jj%2FrNVoGYe1EOhnaisYQVy0LdsngWpdsxs1bfj080wBDI3i9bEtPZ3iL%2BZ%2BW%2F9fswWfE2Yu%2FqSQ9K%2FfgEKrZHyEABY4bvhA2dQLb%2Fq&X-Amz-Signature=afab59df59cc311af29d603a1528901612b65f7bad465df34c73066844a9e687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NPBGJC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFFTNJ%2BfBQUoIxg7kEHayivEiEY%2FTFbPoV1%2Fkw%2BxkA7AiEApsbVe8ErUto%2FHusuA%2FH8Bc9uDB%2FE7A%2Bq8PiNNXcB684q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAK3L%2B2RtTG%2BvMHXMircA7hgMM33jCX%2BPrhc2%2FCvitIoaVnmIjDsHCtMSCSSvIqsosPIEilhP3H%2FSODNQA0lBLDyamtUS4dtSagg9fibgz2IeyQIudNGG28sxSLO%2BG6wcMdKmxa84z8kLwgywx9VdKi1YQmWpmPhtuHCdRtNKQrtJIyXf%2BSXNYRPxmD4GEHf%2B2gfatYgJirkaF9OT%2BXv3sxUbg3N5ZjI%2BBKQ9q%2B3%2Bi8%2FsAicXGVl4Xx7d%2FJgxC3k18Fk5WV6msFDlKac50NuThSZ6Jo5UkVIutsTj0m8uexnawduXZNeiasBfVIzHPSg4%2BIE5T2DIVxWnnCugOvkeqgBBwTBh%2Bo2qXI3%2FV1uUEGsO3QofWqIaVh9p43eGWSWsemXxKlRmhTkBiuwpJxoDpstcpzGcbj6y6W0MLePhzYotvi6cUoRypLUpmz29n%2B5KLKtk0rkt0cG2UNA71hFLc06cnn0pONNroWZyt917jOFwNDv7BKQ7eDXFivCZ5QJ9fR6%2BJejPr4y5JNSMOVh7TjBorPuHHGm4h6FfE07rVwyveCKhq1OamKgYX0QgjtOsVnUGP%2F%2BbHMGQg0oBDYPfwkdiZzqN2VOxpN5ODvtrAtfseyUKY257TWLEVgJqHuVJQWZeVza1asBEvm8MJDZvsQGOqUB7YSdBaj9YGiNmNNzGZk39qDsQB4DNtOV5x0uW08k4UCzWY0EsbGsxCU%2BOMpfimDYXlCVrAcEuIj178yuvKaZgX4SqOiU5RDkopjXp6%2B%2FFk1J3uDX3IOx96jj%2FrNVoGYe1EOhnaisYQVy0LdsngWpdsxs1bfj080wBDI3i9bEtPZ3iL%2BZ%2BW%2F9fswWfE2Yu%2FqSQ9K%2FfgEKrZHyEABY4bvhA2dQLb%2Fq&X-Amz-Signature=48210d12e53536f904603f2c6458343e0fdbd0aa124a3f5c3a5b31a19dfe3528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NPBGJC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFFTNJ%2BfBQUoIxg7kEHayivEiEY%2FTFbPoV1%2Fkw%2BxkA7AiEApsbVe8ErUto%2FHusuA%2FH8Bc9uDB%2FE7A%2Bq8PiNNXcB684q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAK3L%2B2RtTG%2BvMHXMircA7hgMM33jCX%2BPrhc2%2FCvitIoaVnmIjDsHCtMSCSSvIqsosPIEilhP3H%2FSODNQA0lBLDyamtUS4dtSagg9fibgz2IeyQIudNGG28sxSLO%2BG6wcMdKmxa84z8kLwgywx9VdKi1YQmWpmPhtuHCdRtNKQrtJIyXf%2BSXNYRPxmD4GEHf%2B2gfatYgJirkaF9OT%2BXv3sxUbg3N5ZjI%2BBKQ9q%2B3%2Bi8%2FsAicXGVl4Xx7d%2FJgxC3k18Fk5WV6msFDlKac50NuThSZ6Jo5UkVIutsTj0m8uexnawduXZNeiasBfVIzHPSg4%2BIE5T2DIVxWnnCugOvkeqgBBwTBh%2Bo2qXI3%2FV1uUEGsO3QofWqIaVh9p43eGWSWsemXxKlRmhTkBiuwpJxoDpstcpzGcbj6y6W0MLePhzYotvi6cUoRypLUpmz29n%2B5KLKtk0rkt0cG2UNA71hFLc06cnn0pONNroWZyt917jOFwNDv7BKQ7eDXFivCZ5QJ9fR6%2BJejPr4y5JNSMOVh7TjBorPuHHGm4h6FfE07rVwyveCKhq1OamKgYX0QgjtOsVnUGP%2F%2BbHMGQg0oBDYPfwkdiZzqN2VOxpN5ODvtrAtfseyUKY257TWLEVgJqHuVJQWZeVza1asBEvm8MJDZvsQGOqUB7YSdBaj9YGiNmNNzGZk39qDsQB4DNtOV5x0uW08k4UCzWY0EsbGsxCU%2BOMpfimDYXlCVrAcEuIj178yuvKaZgX4SqOiU5RDkopjXp6%2B%2FFk1J3uDX3IOx96jj%2FrNVoGYe1EOhnaisYQVy0LdsngWpdsxs1bfj080wBDI3i9bEtPZ3iL%2BZ%2BW%2F9fswWfE2Yu%2FqSQ9K%2FfgEKrZHyEABY4bvhA2dQLb%2Fq&X-Amz-Signature=17a329d6ec59f44594cab34a07fa5b38422c4974c740f37b9d53c3a6b7903158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NPBGJC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFFTNJ%2BfBQUoIxg7kEHayivEiEY%2FTFbPoV1%2Fkw%2BxkA7AiEApsbVe8ErUto%2FHusuA%2FH8Bc9uDB%2FE7A%2Bq8PiNNXcB684q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAK3L%2B2RtTG%2BvMHXMircA7hgMM33jCX%2BPrhc2%2FCvitIoaVnmIjDsHCtMSCSSvIqsosPIEilhP3H%2FSODNQA0lBLDyamtUS4dtSagg9fibgz2IeyQIudNGG28sxSLO%2BG6wcMdKmxa84z8kLwgywx9VdKi1YQmWpmPhtuHCdRtNKQrtJIyXf%2BSXNYRPxmD4GEHf%2B2gfatYgJirkaF9OT%2BXv3sxUbg3N5ZjI%2BBKQ9q%2B3%2Bi8%2FsAicXGVl4Xx7d%2FJgxC3k18Fk5WV6msFDlKac50NuThSZ6Jo5UkVIutsTj0m8uexnawduXZNeiasBfVIzHPSg4%2BIE5T2DIVxWnnCugOvkeqgBBwTBh%2Bo2qXI3%2FV1uUEGsO3QofWqIaVh9p43eGWSWsemXxKlRmhTkBiuwpJxoDpstcpzGcbj6y6W0MLePhzYotvi6cUoRypLUpmz29n%2B5KLKtk0rkt0cG2UNA71hFLc06cnn0pONNroWZyt917jOFwNDv7BKQ7eDXFivCZ5QJ9fR6%2BJejPr4y5JNSMOVh7TjBorPuHHGm4h6FfE07rVwyveCKhq1OamKgYX0QgjtOsVnUGP%2F%2BbHMGQg0oBDYPfwkdiZzqN2VOxpN5ODvtrAtfseyUKY257TWLEVgJqHuVJQWZeVza1asBEvm8MJDZvsQGOqUB7YSdBaj9YGiNmNNzGZk39qDsQB4DNtOV5x0uW08k4UCzWY0EsbGsxCU%2BOMpfimDYXlCVrAcEuIj178yuvKaZgX4SqOiU5RDkopjXp6%2B%2FFk1J3uDX3IOx96jj%2FrNVoGYe1EOhnaisYQVy0LdsngWpdsxs1bfj080wBDI3i9bEtPZ3iL%2BZ%2BW%2F9fswWfE2Yu%2FqSQ9K%2FfgEKrZHyEABY4bvhA2dQLb%2Fq&X-Amz-Signature=ab5ec8ee3b9af157401540d608fb40a004b3582e155daca25dc13f566b1b79ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NPBGJC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFFTNJ%2BfBQUoIxg7kEHayivEiEY%2FTFbPoV1%2Fkw%2BxkA7AiEApsbVe8ErUto%2FHusuA%2FH8Bc9uDB%2FE7A%2Bq8PiNNXcB684q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAK3L%2B2RtTG%2BvMHXMircA7hgMM33jCX%2BPrhc2%2FCvitIoaVnmIjDsHCtMSCSSvIqsosPIEilhP3H%2FSODNQA0lBLDyamtUS4dtSagg9fibgz2IeyQIudNGG28sxSLO%2BG6wcMdKmxa84z8kLwgywx9VdKi1YQmWpmPhtuHCdRtNKQrtJIyXf%2BSXNYRPxmD4GEHf%2B2gfatYgJirkaF9OT%2BXv3sxUbg3N5ZjI%2BBKQ9q%2B3%2Bi8%2FsAicXGVl4Xx7d%2FJgxC3k18Fk5WV6msFDlKac50NuThSZ6Jo5UkVIutsTj0m8uexnawduXZNeiasBfVIzHPSg4%2BIE5T2DIVxWnnCugOvkeqgBBwTBh%2Bo2qXI3%2FV1uUEGsO3QofWqIaVh9p43eGWSWsemXxKlRmhTkBiuwpJxoDpstcpzGcbj6y6W0MLePhzYotvi6cUoRypLUpmz29n%2B5KLKtk0rkt0cG2UNA71hFLc06cnn0pONNroWZyt917jOFwNDv7BKQ7eDXFivCZ5QJ9fR6%2BJejPr4y5JNSMOVh7TjBorPuHHGm4h6FfE07rVwyveCKhq1OamKgYX0QgjtOsVnUGP%2F%2BbHMGQg0oBDYPfwkdiZzqN2VOxpN5ODvtrAtfseyUKY257TWLEVgJqHuVJQWZeVza1asBEvm8MJDZvsQGOqUB7YSdBaj9YGiNmNNzGZk39qDsQB4DNtOV5x0uW08k4UCzWY0EsbGsxCU%2BOMpfimDYXlCVrAcEuIj178yuvKaZgX4SqOiU5RDkopjXp6%2B%2FFk1J3uDX3IOx96jj%2FrNVoGYe1EOhnaisYQVy0LdsngWpdsxs1bfj080wBDI3i9bEtPZ3iL%2BZ%2BW%2F9fswWfE2Yu%2FqSQ9K%2FfgEKrZHyEABY4bvhA2dQLb%2Fq&X-Amz-Signature=128db09d3c0b029f1adfc06b048f509abbf3b26cc8604741d39c63f614560cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NPBGJC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFFTNJ%2BfBQUoIxg7kEHayivEiEY%2FTFbPoV1%2Fkw%2BxkA7AiEApsbVe8ErUto%2FHusuA%2FH8Bc9uDB%2FE7A%2Bq8PiNNXcB684q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAK3L%2B2RtTG%2BvMHXMircA7hgMM33jCX%2BPrhc2%2FCvitIoaVnmIjDsHCtMSCSSvIqsosPIEilhP3H%2FSODNQA0lBLDyamtUS4dtSagg9fibgz2IeyQIudNGG28sxSLO%2BG6wcMdKmxa84z8kLwgywx9VdKi1YQmWpmPhtuHCdRtNKQrtJIyXf%2BSXNYRPxmD4GEHf%2B2gfatYgJirkaF9OT%2BXv3sxUbg3N5ZjI%2BBKQ9q%2B3%2Bi8%2FsAicXGVl4Xx7d%2FJgxC3k18Fk5WV6msFDlKac50NuThSZ6Jo5UkVIutsTj0m8uexnawduXZNeiasBfVIzHPSg4%2BIE5T2DIVxWnnCugOvkeqgBBwTBh%2Bo2qXI3%2FV1uUEGsO3QofWqIaVh9p43eGWSWsemXxKlRmhTkBiuwpJxoDpstcpzGcbj6y6W0MLePhzYotvi6cUoRypLUpmz29n%2B5KLKtk0rkt0cG2UNA71hFLc06cnn0pONNroWZyt917jOFwNDv7BKQ7eDXFivCZ5QJ9fR6%2BJejPr4y5JNSMOVh7TjBorPuHHGm4h6FfE07rVwyveCKhq1OamKgYX0QgjtOsVnUGP%2F%2BbHMGQg0oBDYPfwkdiZzqN2VOxpN5ODvtrAtfseyUKY257TWLEVgJqHuVJQWZeVza1asBEvm8MJDZvsQGOqUB7YSdBaj9YGiNmNNzGZk39qDsQB4DNtOV5x0uW08k4UCzWY0EsbGsxCU%2BOMpfimDYXlCVrAcEuIj178yuvKaZgX4SqOiU5RDkopjXp6%2B%2FFk1J3uDX3IOx96jj%2FrNVoGYe1EOhnaisYQVy0LdsngWpdsxs1bfj080wBDI3i9bEtPZ3iL%2BZ%2BW%2F9fswWfE2Yu%2FqSQ9K%2FfgEKrZHyEABY4bvhA2dQLb%2Fq&X-Amz-Signature=a182679ac8b2160aa41cde6ede374ddd0aee4b6d42c57f0c492981397f4ee096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NPBGJC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFFTNJ%2BfBQUoIxg7kEHayivEiEY%2FTFbPoV1%2Fkw%2BxkA7AiEApsbVe8ErUto%2FHusuA%2FH8Bc9uDB%2FE7A%2Bq8PiNNXcB684q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAK3L%2B2RtTG%2BvMHXMircA7hgMM33jCX%2BPrhc2%2FCvitIoaVnmIjDsHCtMSCSSvIqsosPIEilhP3H%2FSODNQA0lBLDyamtUS4dtSagg9fibgz2IeyQIudNGG28sxSLO%2BG6wcMdKmxa84z8kLwgywx9VdKi1YQmWpmPhtuHCdRtNKQrtJIyXf%2BSXNYRPxmD4GEHf%2B2gfatYgJirkaF9OT%2BXv3sxUbg3N5ZjI%2BBKQ9q%2B3%2Bi8%2FsAicXGVl4Xx7d%2FJgxC3k18Fk5WV6msFDlKac50NuThSZ6Jo5UkVIutsTj0m8uexnawduXZNeiasBfVIzHPSg4%2BIE5T2DIVxWnnCugOvkeqgBBwTBh%2Bo2qXI3%2FV1uUEGsO3QofWqIaVh9p43eGWSWsemXxKlRmhTkBiuwpJxoDpstcpzGcbj6y6W0MLePhzYotvi6cUoRypLUpmz29n%2B5KLKtk0rkt0cG2UNA71hFLc06cnn0pONNroWZyt917jOFwNDv7BKQ7eDXFivCZ5QJ9fR6%2BJejPr4y5JNSMOVh7TjBorPuHHGm4h6FfE07rVwyveCKhq1OamKgYX0QgjtOsVnUGP%2F%2BbHMGQg0oBDYPfwkdiZzqN2VOxpN5ODvtrAtfseyUKY257TWLEVgJqHuVJQWZeVza1asBEvm8MJDZvsQGOqUB7YSdBaj9YGiNmNNzGZk39qDsQB4DNtOV5x0uW08k4UCzWY0EsbGsxCU%2BOMpfimDYXlCVrAcEuIj178yuvKaZgX4SqOiU5RDkopjXp6%2B%2FFk1J3uDX3IOx96jj%2FrNVoGYe1EOhnaisYQVy0LdsngWpdsxs1bfj080wBDI3i9bEtPZ3iL%2BZ%2BW%2F9fswWfE2Yu%2FqSQ9K%2FfgEKrZHyEABY4bvhA2dQLb%2Fq&X-Amz-Signature=c34a5d6654376097ac0d40738f3f69a00b60eef494a1b3d0e203d4f7990b343e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JY77ZF4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu7RdZhHvmBODyxC%2FSHZLfZzM9uPyAJZFqmD6i97k%2FowIgBTHDLBqDulYmd1w8%2BfRX%2FWkgyzlUTXJSaBdqh2mrlW8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPpKqCeLH9pgOmvQsyrcAz4ZjUl5ASQt8Gia9C1sZTtbpQD%2B5gN%2BBdAbMqDiTxMM9TSezxg0Tlc8p9Z2sD%2F1g%2FWbkQBfZfMx9m9J5vvpbn5lhVuXOeUZhpmPIy42gJDl9fIwhly12UgKJPjUN6sULNbBjHFCgBwU4p%2FWtuAijqiCfmEYSmAdJ9Y0x9%2Bkvx2LX%2FIX6AdNYrFaWtSVdreU9dl3gVVlbFcoc6a6OVYmRLJ6nKFQ4tmzDFy6E7ALtmvyLP7KF61uHaYgkYWVF4QEzJ89NMEmVLN8OD607PtO%2BEpxMPMd3Mv9ynMIScilhGaBXidugrav6CWNJL4P2WPZyhW%2F9%2BSN3Wq6ri5LuT1dMNlTR6mCpI9hB0aaToZAZtyFFL2uMvZ3ZqGxEuKzhJuy9gavgeh%2BJ5GjUQgYXSfx1XjfeCatTWBAIY%2BzvIT58DyrOfsVPShklIqy9b7No0hgPoBo4lOyPTZvw3KGudAB78qvcakoLQJcxVFkylqfFzdYciZUQ48faDmPqQxAUtdoB2msP%2FXKKkwcCXCfbpaKsHEPy8KFaxWXtZp%2BrUlyIkhTe52CHrkLLQnxPPox7nzAhYc4qN5SX5TYX%2FyGgQW0%2Bit9YheKWQn%2Fs0hzen5aWTGMEVL4lo7TMV%2FTI%2BSFMN7ZvsQGOqUBlZO6cSHNWzQqsdeYvWtHT5AqrkHyTHySesh4AqrpuwIUSvyOhTUHsPby265uMC3jcPwOlU8ko1INywEKMUm4ztuGAR5Ed%2Fu1y9KZcQ7j7Hobus7rNrCWXjGRpvsiR1J%2B7l8egwvl33OA7Q7O%2F4o66pOFUwH0lGzfb1egQ0v3S9viKxRFUZC%2F06FBpFZt7KzP%2BfNBdL1JpHs46fVRk7pTC5uL9BWl&X-Amz-Signature=4a34be1deff4645460c94d6857801a0dbf08e0729c385452c75afbce6be140c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSQZELA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiRevStbIpIOENJBXNTykUr3b3Butl0SDv3myrU8ZpnAiEAsqyXfn8SZP9ir8%2FG6tccTrOU9I4QXdG9MlHFjBFxoPAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJZEYYygqWUgEQOnTSrcAxKDcRxX87xAdbo7YPJ365%2FzRfYU%2FILLeUnj7Tft7Ebk5YwV22hggS6YpMSuSSBeTK12hOOCZOtJqWXI%2FaED08WsknjxbCJiHfbl844vOULQpv14HuNzEa9HEg%2BuJhJ8OaJ29Viy1foA4KnKFTJdmHaj%2B5s6wTgWh1%2B4afbZhmuExcc4S3%2F8roIfT3rGJ3fSVwLqi6c%2BmHCX%2BDPEzKZfLIr1XhnwM9uI6xLzRkLHI2iCUH%2FAi3ej8ZUeoebado9nQ7Ckvp%2F88WF7d%2FQSn76V7ixNPlD6pZv6D1N8iKkie2dSx0znILp6brk4UsZl527hklUrCjgSZE1Oxtiun%2FKnRiWNe10x%2FDqyqZgeuIV%2FKFvro6GNnbP7n%2F39RMcHocfjv6eSaXJnxibh5NW6a95Q3np4gvrNJmK%2BX0bjoxKIZOAio02JH2ZE0V9n0fU4dVfksXMhFUq7hAUR7da6Fg0gwzDKvevtwV4Iy0hRuHz4mhI5l1RQyXvUtTbyd8%2BkUVimWcFYE1zm%2FLmIW%2B7GJQ2scht2fXM4Yb3VmbGERVWK7KDVqFPcJqAAfp00Hg%2FnprXg67NsgIX1XF7ecmhFVJKOH1ZD%2FLIX9l5MyILifaIoH4z1ASF0oiPldbB1rPj8MLnZvsQGOqUBbO1eVhcNxaOGKQxpd9M7pDNBBJPTtAjvyX5LXaECHq4ZB7mGG1CEP1rexH8uLRlQF%2F127F1stPQJB21LuPe6cGYHIR7hOjqVOgzu1t%2B9frIqF1Ec8EbV90lTGk1AsqIy0yd41qmD3HHMWnUCZC3UpU%2Bz5xfpcZh8sI0fr6HHoSAG%2F06vEYZGJjkHBexcLsncNNLye3gzfO1x7GeKsUioIOD98GE6&X-Amz-Signature=0cc8293357b47ad2651660da68a0e56428fd7428d62aaa05d41e34621b80b96c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CMYTNAV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTrvxf37kD%2BFHfnAW4hYQ4aMvmsznYZTLGvFTzreqQnAiEAloYa11QXyoxoumtWVW5ZuLLUJR%2Bd8C5ugvQD8tgYYJsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLWMZKU2%2FczjPu6b3yrcAxKHwNonhEuM2F%2BK3IDs1gL2TVfKC9Gubj%2FaN1B%2FWw5979c%2FvGCuJYJvOp%2BVuOSI5RqLa9R3rRxMZ3cOcLC7rVUM5nvNgNF5Ln8g86OQ9bXXAZg%2Bj2ZdsGWzcVGifmQ817mCkE5a2lxwXeO3GAJgaCsGD6X8AqpLoPah%2F4o5U6CcqvWpy7QcWSrkJBUstyHBy73UF9Ax0AD1R9tA7Ck%2F3t%2BEldV%2Bt2poSkGPB9PmqU2cNajH9PjYwgB1YOZct6OsmLi%2FEvxRNxaeLvZuIzUzKY3v46m2QyDNCKZzQnyi7Stx8DKQB1YoqGqkhS4rLSV3TjuAItMF58UVVJ9MDCiout0ANxL%2BRt9fpCzkayclxvYdW0YO191hiKNn%2FNu1h0bL6H3BXmkRvlnMmvP6kQu%2FOb5J3vdYMfL8Ezv2sQ%2FMUL%2BgbjxQzrec1JTRryRhqtCe9pCRArqjk929ri9Dc1UHBwGZE20L4XuR6OJl6%2FtMkaskIvY9JK%2B3e0YFm8HYAU8r%2FCha1zaTijmND0vqvCsnrqSSYddr7vYVpSDrqTQc4v75853XuVFiTBOVPaap4Silq78FiUZBAeKSi7b%2FQ7VlXJvC7fzOrhEt32XIbvdyLx6IZ9yjUUq84bcUrSHYMKzZvsQGOqUB0ZwPGCNZ10V%2FU8hsBSuIMb0Ge8WUsbnP5MgREpq64d1qLGiXis1Qle3ovIZTRnpk02Cb%2BtuPGw1Z3pkuSZTHaYFP1IdtUICf2GvkYNGP%2FkR9ggJiW0nSta5c5Ol5QqkKTOiOurKLC9vMcnRAL0JwkCdI%2BsdgxAQAPOaA43YQgfkUHUSs9%2FQHkRwMzwXebWApx0MWD8PrMpBFeHJHkGq%2BUP697qD9&X-Amz-Signature=8aab6eb042a08e9eb3dcf9e8851e51af3da4af53f821cc36dd48e2eb25b8ced2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NPBGJC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFFTNJ%2BfBQUoIxg7kEHayivEiEY%2FTFbPoV1%2Fkw%2BxkA7AiEApsbVe8ErUto%2FHusuA%2FH8Bc9uDB%2FE7A%2Bq8PiNNXcB684q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAK3L%2B2RtTG%2BvMHXMircA7hgMM33jCX%2BPrhc2%2FCvitIoaVnmIjDsHCtMSCSSvIqsosPIEilhP3H%2FSODNQA0lBLDyamtUS4dtSagg9fibgz2IeyQIudNGG28sxSLO%2BG6wcMdKmxa84z8kLwgywx9VdKi1YQmWpmPhtuHCdRtNKQrtJIyXf%2BSXNYRPxmD4GEHf%2B2gfatYgJirkaF9OT%2BXv3sxUbg3N5ZjI%2BBKQ9q%2B3%2Bi8%2FsAicXGVl4Xx7d%2FJgxC3k18Fk5WV6msFDlKac50NuThSZ6Jo5UkVIutsTj0m8uexnawduXZNeiasBfVIzHPSg4%2BIE5T2DIVxWnnCugOvkeqgBBwTBh%2Bo2qXI3%2FV1uUEGsO3QofWqIaVh9p43eGWSWsemXxKlRmhTkBiuwpJxoDpstcpzGcbj6y6W0MLePhzYotvi6cUoRypLUpmz29n%2B5KLKtk0rkt0cG2UNA71hFLc06cnn0pONNroWZyt917jOFwNDv7BKQ7eDXFivCZ5QJ9fR6%2BJejPr4y5JNSMOVh7TjBorPuHHGm4h6FfE07rVwyveCKhq1OamKgYX0QgjtOsVnUGP%2F%2BbHMGQg0oBDYPfwkdiZzqN2VOxpN5ODvtrAtfseyUKY257TWLEVgJqHuVJQWZeVza1asBEvm8MJDZvsQGOqUB7YSdBaj9YGiNmNNzGZk39qDsQB4DNtOV5x0uW08k4UCzWY0EsbGsxCU%2BOMpfimDYXlCVrAcEuIj178yuvKaZgX4SqOiU5RDkopjXp6%2B%2FFk1J3uDX3IOx96jj%2FrNVoGYe1EOhnaisYQVy0LdsngWpdsxs1bfj080wBDI3i9bEtPZ3iL%2BZ%2BW%2F9fswWfE2Yu%2FqSQ9K%2FfgEKrZHyEABY4bvhA2dQLb%2Fq&X-Amz-Signature=ae4b8fb1613e4a5aed93586ec0a5e66642c01d62aca83a3c21201781cd677622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ADYWYK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsEBCFzwk5I3j57lJdiRkFuFHKIwizwSqQnnIOlFT7MQIhAN4XGPv4lGojHuErossQbq8lzJTGA%2FHho57zPuXrJenyKv8DCDQQABoMNjM3NDIzMTgzODA1Igy7yFZBr5vYz%2Fxfrsoq3AOUmWP%2BWje0hFzgrJQbXsjRxDe%2FYyKKREDyl8TP1V7WkxW%2FzzLuiXxypEQt8uyzWCVsXhWT4Zjco5NQbs8pwPRFwC2vVxFxne0%2Fx6%2B%2BXyqxtTKsh%2B%2BP8ZAhP2Ai1tFprIXXoz8Qmi%2BAwV%2FHj6sFPl9ISMLykWjLIXey7wC1jTEvm%2BxC1i1NWsQKfzGFa8wRS9JVx%2FH%2BlqXgj%2FnhfHYj2ejO4FArZhylAtNNx0loNyZt15A2JJuUYe4AnXGaJ7IfVcbs3hT3OhSYutdVlHQdfdE%2BH7ddVlc8yRp%2BhUUIr8YhN%2FHdqsispWO4e8sdwzWPx1YI7cFYSS7bqkPmbTzPhqHNEf%2Fb7fNZNVjmy9lfCbRe73Q1Td4s4JX4n%2Bq%2BMrvfq7HRsYkDOWF4C3jZXKgKv2QxdZdoG85INGep%2BjdsTmhAYnmhWUDfXyalDE2z7jKSlctF%2B0Y8sohkHiz6CjyUw0AU4%2FMt%2F7nItTgTii7kP4lcN%2BXYryuH%2FmuA4izzYYCDljDxRpaTlXqCPmdCD0ebBcTwktgCryCcnRLgFESX1WctNinwZ8%2BgkTUz1g2wTI09%2FpXayDhnsIb59cFh15bsbGvASLJdV%2FFSgQlvMqBwfleIULBPSv5le9xObqYjbDCY2b7EBjqkAdLgLNwF0n4p8KpuZ0PuxL8MI3%2FqdySz8x%2FkTi6Hk7h98NMufP7DK3Blqfs7APDGjk%2Fijt4JS1TJrvbnLU5Q1br3ipk9UDhHHJpF1ocYHA79Nt%2Fqy3qYrx%2B0aKKB3xn9KCiFIBLiMYieduA%2FYYE1wjSNxO2VMK%2BJ6TSBuNIVLwk3kjwBaF3%2BRF3Wj3jTQ8EF0KGWsCQU1duy%2B20tpwH90ASdZAsx&X-Amz-Signature=0ff4cc27151dd8216edff202886fce090de8a333c80a57dfa1de4069cd9a321f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NPBGJC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFFTNJ%2BfBQUoIxg7kEHayivEiEY%2FTFbPoV1%2Fkw%2BxkA7AiEApsbVe8ErUto%2FHusuA%2FH8Bc9uDB%2FE7A%2Bq8PiNNXcB684q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAK3L%2B2RtTG%2BvMHXMircA7hgMM33jCX%2BPrhc2%2FCvitIoaVnmIjDsHCtMSCSSvIqsosPIEilhP3H%2FSODNQA0lBLDyamtUS4dtSagg9fibgz2IeyQIudNGG28sxSLO%2BG6wcMdKmxa84z8kLwgywx9VdKi1YQmWpmPhtuHCdRtNKQrtJIyXf%2BSXNYRPxmD4GEHf%2B2gfatYgJirkaF9OT%2BXv3sxUbg3N5ZjI%2BBKQ9q%2B3%2Bi8%2FsAicXGVl4Xx7d%2FJgxC3k18Fk5WV6msFDlKac50NuThSZ6Jo5UkVIutsTj0m8uexnawduXZNeiasBfVIzHPSg4%2BIE5T2DIVxWnnCugOvkeqgBBwTBh%2Bo2qXI3%2FV1uUEGsO3QofWqIaVh9p43eGWSWsemXxKlRmhTkBiuwpJxoDpstcpzGcbj6y6W0MLePhzYotvi6cUoRypLUpmz29n%2B5KLKtk0rkt0cG2UNA71hFLc06cnn0pONNroWZyt917jOFwNDv7BKQ7eDXFivCZ5QJ9fR6%2BJejPr4y5JNSMOVh7TjBorPuHHGm4h6FfE07rVwyveCKhq1OamKgYX0QgjtOsVnUGP%2F%2BbHMGQg0oBDYPfwkdiZzqN2VOxpN5ODvtrAtfseyUKY257TWLEVgJqHuVJQWZeVza1asBEvm8MJDZvsQGOqUB7YSdBaj9YGiNmNNzGZk39qDsQB4DNtOV5x0uW08k4UCzWY0EsbGsxCU%2BOMpfimDYXlCVrAcEuIj178yuvKaZgX4SqOiU5RDkopjXp6%2B%2FFk1J3uDX3IOx96jj%2FrNVoGYe1EOhnaisYQVy0LdsngWpdsxs1bfj080wBDI3i9bEtPZ3iL%2BZ%2BW%2F9fswWfE2Yu%2FqSQ9K%2FfgEKrZHyEABY4bvhA2dQLb%2Fq&X-Amz-Signature=cc6286752931e94d1c011346e253a04c55e53d3454558f79472c6936e75f7901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5GVLQB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpeAqTyqSkZ%2F5Z3Isgy8W2%2F5hvIoBSkprEIR%2B66XrRVwIgVZ2T1ISqA08fZ3nNU0hsT7wd8NcYp1HQ2xfqHVMIu8oq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKFcOb1OBDcx2sQIeSrcA%2BBx46ws5sJPRCOG1pK435ozJ6%2B%2BsQM1lK8BCaUMyVzo7oQXxx2b0VCrBDdyRAZX9OTUWHaFG8wygK%2BHg2DrM5BxtplAfG99aL%2FgZqxX%2FX%2Btza14YWyoOwGnu6Cir44ir5wp5FZZBsKZtGuYrXISumpOl2CIRrzTp9PkUQkAi%2Bfnqfan1TlrI9k40giR0x%2BaI8PvB6gRyQ8P9%2BjuaZpgeCfn10ICr0rB77RsvRHTPm8ZysFSSbagLYKpWNSZkN9cKl0JrSe1xXkkabOutjfKPbtguJZXKJjgePWOU6bGJe99c2GcNBfu99G9A6KL0gbcul9P8VRHFGG5WUDld7E0aWMQ9U8mOfIFWBq0ee%2FLSOt4wWfEw%2BoomqXvBdHSizaqWS8AKB0kHjZKHohfWpvwMrxIKBUvjWcfQd2tIyu3xk%2FJftF%2BeTPAc%2B3bq0851bxTa0nzUe9wFezkA4X2IrhI5VlFIioVksWbQqKRihMZWhqchrdNvMNkBnCKtDKUUMODNHa3s%2BOWW9jL%2BHgdm0Vpo%2BiPECc1MlOvb2zTWHHumg1%2F%2F1bMwoQVEo%2BJkMJQQ5a2m%2FCHOAas4GpZm6HMX8RT4hGpn%2FxBFE%2BHULWLwPlIbxa6nosw0UGDxjU3cD2zMJDZvsQGOqUBzB9NlqQkizZLcc8lnAUR%2FG%2FlLL2miKkwVnYUHBd6RFyhVU7o00i1VXctSZ5Zb2TGppr2YAEg5DEQDn7ymErSla9m0Aai9FcAX62jtCI7UQqVOFuNlJibss7uaSZ1zMcrm4jIOQcR7a12LjFWR3ydC46N5jzTdFNB5PNgN0xN13OYS8R3iyzlm95JViuJbiqvyL3tYIQq6%2FZHaoTWF3x7OPOHxcaM&X-Amz-Signature=b5b7119f72e0ccaabedf632894306025fb2b08376810e29183b32e557c4e9954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NPBGJC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFFTNJ%2BfBQUoIxg7kEHayivEiEY%2FTFbPoV1%2Fkw%2BxkA7AiEApsbVe8ErUto%2FHusuA%2FH8Bc9uDB%2FE7A%2Bq8PiNNXcB684q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAK3L%2B2RtTG%2BvMHXMircA7hgMM33jCX%2BPrhc2%2FCvitIoaVnmIjDsHCtMSCSSvIqsosPIEilhP3H%2FSODNQA0lBLDyamtUS4dtSagg9fibgz2IeyQIudNGG28sxSLO%2BG6wcMdKmxa84z8kLwgywx9VdKi1YQmWpmPhtuHCdRtNKQrtJIyXf%2BSXNYRPxmD4GEHf%2B2gfatYgJirkaF9OT%2BXv3sxUbg3N5ZjI%2BBKQ9q%2B3%2Bi8%2FsAicXGVl4Xx7d%2FJgxC3k18Fk5WV6msFDlKac50NuThSZ6Jo5UkVIutsTj0m8uexnawduXZNeiasBfVIzHPSg4%2BIE5T2DIVxWnnCugOvkeqgBBwTBh%2Bo2qXI3%2FV1uUEGsO3QofWqIaVh9p43eGWSWsemXxKlRmhTkBiuwpJxoDpstcpzGcbj6y6W0MLePhzYotvi6cUoRypLUpmz29n%2B5KLKtk0rkt0cG2UNA71hFLc06cnn0pONNroWZyt917jOFwNDv7BKQ7eDXFivCZ5QJ9fR6%2BJejPr4y5JNSMOVh7TjBorPuHHGm4h6FfE07rVwyveCKhq1OamKgYX0QgjtOsVnUGP%2F%2BbHMGQg0oBDYPfwkdiZzqN2VOxpN5ODvtrAtfseyUKY257TWLEVgJqHuVJQWZeVza1asBEvm8MJDZvsQGOqUB7YSdBaj9YGiNmNNzGZk39qDsQB4DNtOV5x0uW08k4UCzWY0EsbGsxCU%2BOMpfimDYXlCVrAcEuIj178yuvKaZgX4SqOiU5RDkopjXp6%2B%2FFk1J3uDX3IOx96jj%2FrNVoGYe1EOhnaisYQVy0LdsngWpdsxs1bfj080wBDI3i9bEtPZ3iL%2BZ%2BW%2F9fswWfE2Yu%2FqSQ9K%2FfgEKrZHyEABY4bvhA2dQLb%2Fq&X-Amz-Signature=3225f4d51314ac1f4d72fd823b8a236e088504bd988bcb6eaa0be05c35c6609d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW3A6CFY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCO6VCRLjyZuj%2BxTrlmhmjgBA4H3eeYwGMV6bNGsqclAiEA9SlneoCIVGf%2BUVc8UtXHtZ1dE0CpW1lNG7wCa4ZccKoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEFB0yCO3I3T0xlDzircA8x53hXPs01%2B5fIVehYtGO2VZdrKOeXMnAxNZuLcCQ5Y%2FX94Lsau%2B42e8xJGsBTl2udxP9DnEIooM2awzyepDT2lEkeg3OztkQre5NGWZNwZ7Eb%2FIp73ijObQbj7zFFv8%2BvRa4HZkUKSMO3ma%2BskSuYODr%2BUwAn3pURiBhmFy3zhfnENNlvJIeGwce%2FZmAjhV%2BxrvmcIgTNRrS6TRK79D6jyL75wq%2BLTTxWf1V1piKj9BH46d9LpSsnH6j1poWEQFPMU2sNTzBhafnVE8Xwdv36%2FFWEJPurxPWn6zGx%2B151AxrbgumKRt0NYq%2FZSBOEzP25PRcREdf%2BfgQkplWcapptbXdswbrAoykpbZ%2BrNm7%2BUnNeDWfG%2BBzvvrY3l3b8QZKMkzMbgMX1xy1Oz1pHhh7Oc%2FxGanc5ghiWFYbREdhVEvJZt3aeGwDClwlSRLcXVmzfbgRHoMAcZvO%2F0x%2BGZa%2BaM%2FbU8xTezlVNj6NSMn6A0WQK%2Bz6DM7rkN0cmm0JOswsQYm2LO505CzGLXta19Ly7Loydot%2Fl1cpempCdUQvF87ucGJ%2FzpkwK9QlUBAhZBL3GapMeVkttOk0fj7H%2BUxcNIrxberpc%2B1YKA8dUK6yQimboRz0Nhg%2FUAJfZSMKTZvsQGOqUBdBsuQ1MIx7yTgkzZzCamgv0c2FPm4jB2nz1N3e0%2B8D9IYsgTZitY%2BEdp%2BV8rPLmCgbdsMRNEyGQQqxdOD5cnBTU15ttRwXSWhcynAaIJiIQ4SicET5HuC%2F%2FQqRxlzknI9tAtAcX8AQgyzHTaFNK1mmHyWKZgv1fqUnJYXtwKcLqyNJYzaNQvJ7Tai1JA17TE3FH0gwMD4NKLOiCOmATVU30dvB92&X-Amz-Signature=0d38f85ecfa2e281fa88522ecc6845839e08ba10f47d4c7b6ebeaabfd56f0188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NPBGJC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFFTNJ%2BfBQUoIxg7kEHayivEiEY%2FTFbPoV1%2Fkw%2BxkA7AiEApsbVe8ErUto%2FHusuA%2FH8Bc9uDB%2FE7A%2Bq8PiNNXcB684q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAK3L%2B2RtTG%2BvMHXMircA7hgMM33jCX%2BPrhc2%2FCvitIoaVnmIjDsHCtMSCSSvIqsosPIEilhP3H%2FSODNQA0lBLDyamtUS4dtSagg9fibgz2IeyQIudNGG28sxSLO%2BG6wcMdKmxa84z8kLwgywx9VdKi1YQmWpmPhtuHCdRtNKQrtJIyXf%2BSXNYRPxmD4GEHf%2B2gfatYgJirkaF9OT%2BXv3sxUbg3N5ZjI%2BBKQ9q%2B3%2Bi8%2FsAicXGVl4Xx7d%2FJgxC3k18Fk5WV6msFDlKac50NuThSZ6Jo5UkVIutsTj0m8uexnawduXZNeiasBfVIzHPSg4%2BIE5T2DIVxWnnCugOvkeqgBBwTBh%2Bo2qXI3%2FV1uUEGsO3QofWqIaVh9p43eGWSWsemXxKlRmhTkBiuwpJxoDpstcpzGcbj6y6W0MLePhzYotvi6cUoRypLUpmz29n%2B5KLKtk0rkt0cG2UNA71hFLc06cnn0pONNroWZyt917jOFwNDv7BKQ7eDXFivCZ5QJ9fR6%2BJejPr4y5JNSMOVh7TjBorPuHHGm4h6FfE07rVwyveCKhq1OamKgYX0QgjtOsVnUGP%2F%2BbHMGQg0oBDYPfwkdiZzqN2VOxpN5ODvtrAtfseyUKY257TWLEVgJqHuVJQWZeVza1asBEvm8MJDZvsQGOqUB7YSdBaj9YGiNmNNzGZk39qDsQB4DNtOV5x0uW08k4UCzWY0EsbGsxCU%2BOMpfimDYXlCVrAcEuIj178yuvKaZgX4SqOiU5RDkopjXp6%2B%2FFk1J3uDX3IOx96jj%2FrNVoGYe1EOhnaisYQVy0LdsngWpdsxs1bfj080wBDI3i9bEtPZ3iL%2BZ%2BW%2F9fswWfE2Yu%2FqSQ9K%2FfgEKrZHyEABY4bvhA2dQLb%2Fq&X-Amz-Signature=cfe6020d8a37d40765e39fa15a7616c5e5f9a7986a7cf0931d372b1b10e8bfcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTINMFIP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJsaFE34hcGkBKRWDFrd21ZzNCe8r5VqgVQU6E2E06FAiEAsm0kEF8LNdBJuYMiHLeSMeXHOTTQLBK1R7spNtiuTsAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDH02%2FF%2B3frKI1Hsb0ircA5pASaRELhlT386UkPhM9IFOmiFh4Y4n3Qa2z2VGJkMc51ss6pua813%2Fw%2BubdJIVGl%2BMrnkjhVa3guwwshxzbNUFzXRQIsnJ%2FfhEEnOZRi%2FIvpkJJSI6JY2jiqSTHkqN41Y88u%2FyNMm1BzsvHA%2BeGAnby%2BMoWvxiU5MlkdCFS3NutlBwwF3dMV5w5bvktRKAX7Oeg6YXeYq8ZkrIrWqngIfTIPziPDREt3FRrzs6UScVBFAuNy8nNPpO%2Fs%2FTZD9skeacCdzz1J8WoxIwAIYUT%2BZjIqETEqQI2dmO3iNjY6A%2FmqSN8x9MrCjGixMwp7djXlpmh1bD97tdkddFmfZzYD6ru57Fej3rA7Ca%2F7mMpnGi4ANHRXd74JGOrmSdK3NyQ9kOlwPq7snuWjEWZ3VI5j8NKXbtDNVbfLupvv0ObawL%2BQ5krhyFHQNwcYnCGn2O5dVZOCHy%2Flb%2BlKH8Xv0X7L6%2B3qyoleCbs5B%2B8rgAVAU4voqBcbh5hwBZvHtIG5vW78%2FHR92i2ADVH45wCzTjCSjRzNktoy4bAU9yRCURrN8PfbXQiOS8epDC6eudBpR8ja8Mp7oqRJROJVHZAmOanyYr%2BJwjHNQ4lKd%2FvjxQM%2FV0dvI98yqf3L7vY6HWMNvZvsQGOqUBp7flC1mw5SoKNleirFA4G%2FU5JN6XICd8qVchz8asN14XyR1TdAah8SBybwu%2Fv5irvhsYnLpPzuFiAotWciQ2y0tNWrPf8t9%2BKLHYAtzy6oi%2BonDBePYtGmndBkTEYFY3lX4UW%2FrqSuz7CZ04pFABmKn9AFED4Fxbq7O2PGuD1DwF3F1JM6atzL7MOL9P9qCXf7nhycxMWBl92AzfVm1X87Q0KrbG&X-Amz-Signature=e00fdcd21bd06dcc71b2279c01554a5c4905c87797822615179e967119435b1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KGYESA6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDj%2F9IMGlUKeveBFnjbVvFvfMuwjDVZgRrIR%2FXyvnjMgIgVxh9DgitRKZ2aQntfRR2l4eTiYYRY%2F2a5ALnNDmTwNQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGznpQWJeMxYN7GoQyrcAxRQxz8FuaADZQEsTjIpycQ2USO1ErvYKqYM9BlV%2FnRfoQ3RJUqp9%2Fc86Z%2B3bzl8pgD6aqHatdP1dgnRMrNYusq5hE7KPaslWfg%2Bm2rd8d6srIC5TXsgqgxQ1cN9VBroynyvuiB1SMaSA4csziYpYrBRQkPH9GX1y3uE%2BtH64Re%2BButbxpKKKPtFzP7uYPLXyaALxSlqPdpvU4KHhnLwC%2BiC4nRISaZpxmL6abu7vWGgf9A7naTNC0aLieYkognBMpQTMNs38mg9FNDt61HpDMoOIH1vZaUFIIbz9OBmBUe%2BvDhPePnfLnqI1%2FXtMobhzAJeMI%2FEZlCqJ7SrH2TwC7j79DmIxRiKIgYghL%2FRb4ISul8R02LWw%2BIP2B9x0sT4JfNh%2BsaFaIVsjlLON4mkLl5W8FmrLDU3I1KO8gnvDr%2BeOeP1HRDo%2FCu77BwsSQJRylViioNR9McKKX6sH44lKaTQNnG%2FGXx0mlXitU2T9UBgub8tQQCprYS02TzXFfhqJ%2BIzwZnhoKxYZH2%2FKuKjO5WsA7JmYz32yikPSMCkFp0v8VZwesZr%2BWmxh0ZXFxr8iXnt3zNQoKyMwp9nBSvM0VwCBRTHQKtsrb%2FAp8ExIwBWsAUhFROHrJf5Po4CMMbZvsQGOqUBYe%2F7VdsFCVIFYcjaPOvjc%2F10Ta9sq%2B3aMTtLk1vt8XBWFx%2FSxQ0AXVlpl%2FyQfE7aQtPSL4HGd94Tp%2BH4YguG0lAJmKGnQCrtCFoAJJVqrx7R1B%2B0ot3AbMtxiDkjNkraVB9nNH%2FRVhF5jX6sRBOupzFexoOOZm4x5y8hQDiD%2Fn9nmeCs%2BiPL57rEokABYoqtHRmPtraQTuvJzUOFPtHbrgl8PZM9&X-Amz-Signature=bcbcff394d1121ae2ab007eaa76dc055be3db3c89531fe3a42cfda0066feb634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OPJJFOY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2DFAF8LDcxuC%2BkxHSyxx1VsyZJysV%2BtzuASsFZfAv7AiEAnUnR2vQ9Qc%2FG70b79nSjqKc4AuR23ChhMEsBXMy58UAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMs%2F7iMNg6FGopwmlircAwb7OSgefHD3rmcUVvLVjjBOMsiZe86qw1UNyE6h9UWk1Ep%2FJnYR%2FyZbb7kBn1f9fViQSJkuha1%2B7CskCOf27atv5Jp5UuZzgHHfMVLrKRDqwix%2FDF6L8fp5NC888x0JESLHNaKCsKkfzRY3eVhQ23kXpaWX7QUlEOqHhoXgiQ0i3JynQQ0dyCAGUssjMIDBGs7DSVrzCvB092i2wEaNvt3oWCVEEWcmZGHPXYULjdULRQ1A173pxzu1kMsk4e8diAYETSPEYIxkDFcthIaoWLc606LicSPYafeZvh4cgnkpyY7AEY9x1CjQh5rDcZ1hqan1Qajxcdx1DZ50uu23OmQLsE6BY9cqc9wauEuEtThAyeYBYegottQG0ItuIARp%2BZT7v2AxuaKlnAUrNfuUmaR61RcXjnPr47zBmFdXBV4rq5ph3eXUffZc%2BpT6vHaKKUb3ul4tjvPJbIDOnwE27C2xSaMpzMXUsaq6zJQQlwQH2m8LosrjzNQd8WKKmzBekoX7kfLefwBFx%2FPmc0kJ68dmfN5Nx4juyIZ%2B4FWKEyvhLijVFSM3c%2BsL0EVASl0ZMHC7xmn2cWsg8J4hAdKtAhYduoFfdhDSNlsfV76ap0fx4cVnh1YOU%2FBZv%2FnAMJDZvsQGOqUBUTjq8v%2BcVWnUuyGfG5gS4wJHS9GDsAiYB2xbZTBKdKyUQpWvqr6jpPEvuHMe5aax0idXjR7iKCV35eKrMT4E1OI9wg1wD6FnHKoHh29Wv%2B9OYS7dqvipz3D%2F4wWf9l%2BJVQFu%2Fm896oE7KVsclzVbMGNYatKdbsovsgOxH9sok5Inwo5u9AHOf6LhzGsNI8C3VRU1O%2BHTm0XCqH6B1fjXHR8kzKUg&X-Amz-Signature=3e968a2a041afdb9bedd9a1030245db78f3c704eb8d177761cb20f7246fed6d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627HWB7XD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhexQ39iwg1%2BOz4Hdx%2FHKRvBnHuRK4PkMpeoEHAPhiKwIhANU37W7dXSBMnOuvai3RQWH%2B4ZreuhPK1Pp7nBNToy7HKv8DCDQQABoMNjM3NDIzMTgzODA1Igy6UofjPior3omKnbcq3AP3ebCEBIEkLxrMUa2esmMj7z25YonwuNqKIRRaeDDk7%2BGP01RJ4LDMUJfJlYHkghZpdz7Y36q0Zim%2BlwwadZrXUL%2BNFEe0%2FtZ9k%2FliJn%2FV5ppfaaRw0XHUp%2BCuB2gPBzvrp9guumMI4r5e937FApKOz0l7JmpO5Lq8VN77Llap8jIbBU8l8gNKmFoAiZSqhdTsQXcHLqVibvq5Y5DL%2FPJr3ATPTLcfSMhoZr9ZSTap%2F61dTq53eodWf%2BQPEPWt92R06ejfe7jdsyQHZnn4Odgs3lstPJ0mkgM8Jm89HKb4eTA0hgrumS4iTIcCLLWSegPpMA2vya7UR0sAH4Q5L5xvSBNi4oOD6ygYSsLjVZ6fxVwwzvvxqdefQNEUKdEj6cyxEz2uvy2v6joCyoXYvdp67NxaijP6PYDbdIvUeJgW5xgfl7Td%2FuvVCwooUHtRVOPZEy2K%2BILQO%2BYRMK7olG5WPiPVc1a4jQEfIwJQ0rz74PRH7zOT4z50O6Q9U05w3IJw4v9qTiIMP0wkXTDyAZ6cX8G4%2BVc6RrWCDKpxGZpDCsup2rVMpnw1VLcE64fKjYc%2Bv8Xiv4yYlRFcdZv7mwabSNIyEnY6AUSaZ5fDXjR5kCIcN1Vk05lhtIgXEDCa2b7EBjqkAbyWOSU1pdySlqSVy6EuQVOZT1wNawO4emRmBh4dAGH78A4YgD9c0SHXg4S112OUTSzO1b9RcO%2FDV%2BmP5PkWpmIX%2FIXuwRwbrWUK0EEpGcwfJDmdxEN8F0bDJg1zjHxgefmkX4wuRxTcxBt0RVNDXfPX69Nuw9Bfono2SkdMhnRwrUb6Jz%2FuOXFQmfGupz5hSOv2uSdJ1r0blX%2FSXKwvaN4gm6Ye&X-Amz-Signature=fffaab12e1f9343f4d359b1b54e76a98d94f985ec1cd1681f2e32ee95f3fe569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66UZWM2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5ykuZ4E0AgYzP7YS1W2rqkWsop2EufgteSLAbWhvVSwIgIHhPlfyEFRBWEdXv1wq72e5iuFP8OjuGuhSALOn85n8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNJmzkhEcywBurlEJSrcA505QbvQpwVZbd5CUDc1DyYoHakkZU40vqLc39F1VJr301dPUgdJq6%2Bh3dG%2FDPT0yYhCW7sO0TttiFGoXbOu0AFA2xiEesYCD8dV6xJCIfjJNRBYgfO3WOM0x%2BvotIE%2BJFOt6wGHOXspriWkExfJgKRDUQjFBkRz8jh3nowZbTh6fqL7Q6WauOBodB%2FYwnZEQYJRLywPsNxOCVGV6mNE%2BRlnsCoMplThEYA1Is361L4q7F76UdBaqGE6dOwV%2FcUNw9K2zbctevOm2xLgnP2PtL6qeGgImjrH8AfLHHE9Ft2ONbyJ5B3X%2F7dYiMqPW8B0BEDMFHqFJOmhc7hCzyrSiE4Hh4IHLiGbVdHH0a6l%2F9542LDrvI2Pb0deiu5QwZYWtX4XYn1oUsrB4WkVW1tmafCNfkbFnsMB0xNZ0tNMIVnBjRzP2uQrRq9QjTgBfPfUKb6suFUx%2BkFw8rOLRfGD4OFuFe67xn7sZv7%2FqFF4mL2i4spkq5%2B75y%2FOOjOlLu2R%2BMelvOIjKlJOvvmhZtTH2t4pOP4copouByeRLlaNLietF%2FMuqmrtTsHeTgSN33SkwQYUvrRs%2BsUD56Yj9JU4EfvCFdOjswxD4e2v3NCKQjjoWzPTTaQerM18j4KxMIPZvsQGOqUB65SaNs9QSyOrjLYMvDRnnrnT5SXv2SyfwJbMMOzxWPHs1TthpWnGvwXGvN2ZUoPca%2FfCpx%2FS25wAlP%2FDqkZZ5ABDI23y23%2Bm4vt7zcU%2BIQrKJBueVNQ9DZsKbqhqLTSi63QtzSk1%2Bmdo3S4V2XMp8k%2B%2BzpSk6%2FtQ522HYKGAkneGjJMT%2FqaYhC2K8wW2Pi5Wdshl6Gmviilh4nR6Npw4hqjeFJkl&X-Amz-Signature=97d162669309338f248d8947e9774fdaaea4c244013925d182dc762f6606767c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NPBGJC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFFTNJ%2BfBQUoIxg7kEHayivEiEY%2FTFbPoV1%2Fkw%2BxkA7AiEApsbVe8ErUto%2FHusuA%2FH8Bc9uDB%2FE7A%2Bq8PiNNXcB684q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAK3L%2B2RtTG%2BvMHXMircA7hgMM33jCX%2BPrhc2%2FCvitIoaVnmIjDsHCtMSCSSvIqsosPIEilhP3H%2FSODNQA0lBLDyamtUS4dtSagg9fibgz2IeyQIudNGG28sxSLO%2BG6wcMdKmxa84z8kLwgywx9VdKi1YQmWpmPhtuHCdRtNKQrtJIyXf%2BSXNYRPxmD4GEHf%2B2gfatYgJirkaF9OT%2BXv3sxUbg3N5ZjI%2BBKQ9q%2B3%2Bi8%2FsAicXGVl4Xx7d%2FJgxC3k18Fk5WV6msFDlKac50NuThSZ6Jo5UkVIutsTj0m8uexnawduXZNeiasBfVIzHPSg4%2BIE5T2DIVxWnnCugOvkeqgBBwTBh%2Bo2qXI3%2FV1uUEGsO3QofWqIaVh9p43eGWSWsemXxKlRmhTkBiuwpJxoDpstcpzGcbj6y6W0MLePhzYotvi6cUoRypLUpmz29n%2B5KLKtk0rkt0cG2UNA71hFLc06cnn0pONNroWZyt917jOFwNDv7BKQ7eDXFivCZ5QJ9fR6%2BJejPr4y5JNSMOVh7TjBorPuHHGm4h6FfE07rVwyveCKhq1OamKgYX0QgjtOsVnUGP%2F%2BbHMGQg0oBDYPfwkdiZzqN2VOxpN5ODvtrAtfseyUKY257TWLEVgJqHuVJQWZeVza1asBEvm8MJDZvsQGOqUB7YSdBaj9YGiNmNNzGZk39qDsQB4DNtOV5x0uW08k4UCzWY0EsbGsxCU%2BOMpfimDYXlCVrAcEuIj178yuvKaZgX4SqOiU5RDkopjXp6%2B%2FFk1J3uDX3IOx96jj%2FrNVoGYe1EOhnaisYQVy0LdsngWpdsxs1bfj080wBDI3i9bEtPZ3iL%2BZ%2BW%2F9fswWfE2Yu%2FqSQ9K%2FfgEKrZHyEABY4bvhA2dQLb%2Fq&X-Amz-Signature=d79c37f9ac10965ba10504fcf1552aec2122836eac4d7b58545a8ae031522631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NPBGJC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFFTNJ%2BfBQUoIxg7kEHayivEiEY%2FTFbPoV1%2Fkw%2BxkA7AiEApsbVe8ErUto%2FHusuA%2FH8Bc9uDB%2FE7A%2Bq8PiNNXcB684q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAK3L%2B2RtTG%2BvMHXMircA7hgMM33jCX%2BPrhc2%2FCvitIoaVnmIjDsHCtMSCSSvIqsosPIEilhP3H%2FSODNQA0lBLDyamtUS4dtSagg9fibgz2IeyQIudNGG28sxSLO%2BG6wcMdKmxa84z8kLwgywx9VdKi1YQmWpmPhtuHCdRtNKQrtJIyXf%2BSXNYRPxmD4GEHf%2B2gfatYgJirkaF9OT%2BXv3sxUbg3N5ZjI%2BBKQ9q%2B3%2Bi8%2FsAicXGVl4Xx7d%2FJgxC3k18Fk5WV6msFDlKac50NuThSZ6Jo5UkVIutsTj0m8uexnawduXZNeiasBfVIzHPSg4%2BIE5T2DIVxWnnCugOvkeqgBBwTBh%2Bo2qXI3%2FV1uUEGsO3QofWqIaVh9p43eGWSWsemXxKlRmhTkBiuwpJxoDpstcpzGcbj6y6W0MLePhzYotvi6cUoRypLUpmz29n%2B5KLKtk0rkt0cG2UNA71hFLc06cnn0pONNroWZyt917jOFwNDv7BKQ7eDXFivCZ5QJ9fR6%2BJejPr4y5JNSMOVh7TjBorPuHHGm4h6FfE07rVwyveCKhq1OamKgYX0QgjtOsVnUGP%2F%2BbHMGQg0oBDYPfwkdiZzqN2VOxpN5ODvtrAtfseyUKY257TWLEVgJqHuVJQWZeVza1asBEvm8MJDZvsQGOqUB7YSdBaj9YGiNmNNzGZk39qDsQB4DNtOV5x0uW08k4UCzWY0EsbGsxCU%2BOMpfimDYXlCVrAcEuIj178yuvKaZgX4SqOiU5RDkopjXp6%2B%2FFk1J3uDX3IOx96jj%2FrNVoGYe1EOhnaisYQVy0LdsngWpdsxs1bfj080wBDI3i9bEtPZ3iL%2BZ%2BW%2F9fswWfE2Yu%2FqSQ9K%2FfgEKrZHyEABY4bvhA2dQLb%2Fq&X-Amz-Signature=7e6bdbf11819b9b655a5212bc54221f84e4a93ba7d07b2b6c6541a1f25a063fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJGU22S%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnR31lxi7PJO9IVc7aDHudpYbU4vFCkJ5T76dNk5ijaAiB54scHrTJFQGuTKzJtK0VyjYSDGDL2Ntvr9%2FYrnaGrFCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMxBAr%2F2c8pOlpOoORKtwDMDocE9i0o7N9frh%2BWL3ifGr9nnhPttea4IK7kSeHTZIFJAOud%2Fp61mDi4hSEIhiG65px0i6ohX9qVxnyR28d5oC4A17suJHNE%2B1AtgQ5sKBvHE%2FfjnsQKNnWymSviedBHzP9ryyhKxpSsgYArYWgZTIPb5Jn%2BwDaboRO8IYLtO90bXFTKaIVk%2FBoN%2Bp1klwDxyo4fVsD%2Fn0PczGtiscfVI31MsBiZA%2B5%2BvjegKqEG1O9zcKSA7fSAReIXfdgpUZGtbOuufgynImbHiB5hyL9jIDEJ6R2BMDOOt80G0glSsyC4Yt0h4JHAOr%2BrGtfiP88i7%2B5eA5lNR4wtXuUUOJ0ZnL6aqrRVSnXbVAu2LdMO%2Fi1SHHebCKfOL4JbmUoC6vAKKKvLFFenFbJvkqiEKS8V55c3b3qoLWQ8FjK1ajSFHPy%2B9kaWD6UAAfIX4XGvf4kuk%2FwsMWg22suFnZA64Ib36K0YFy5ZQmGjPZFwesDSrpuevv3Nt6sBMlTyHGe4T%2FhSO%2F8SyFTRwf1IzHixzR4O5E7zQKMV4U6ICAxtFHbtNRKkn0h9M0D4%2FKVWZrQPmDhim5IPmOXibFIav0TFrI%2BzI7fc85oLI6MjuQ%2Fx0V%2FHXqXQpzf7eb3SEq4gRQwo9m%2BxAY6pgH6MiCqHNnNYnJeJoQInLFmVycTi1Q0M7zYzNuINfe49aYY7Hk8KvjKblKbYmc4mvDFW7MduXyHmr2XVyDUQ1Ja4uQ%2BPb%2BhvNsSqXdx4flH88owEOCTlUtSek3NSkCiPS2EDBw2Mo%2BmugVof1TwEqu5ZFGNp5V0kpwbse7H32oG9B2U%2BFgMCvwTJJBg%2BwUzqhwFdtVgqxwsJNGV3yVk%2FCM5HqumlSHp&X-Amz-Signature=66b93f38fafef37fa6700ef0acfe654894d32527ac6cabbec20a808e0e9cc90b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJGU22S%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnR31lxi7PJO9IVc7aDHudpYbU4vFCkJ5T76dNk5ijaAiB54scHrTJFQGuTKzJtK0VyjYSDGDL2Ntvr9%2FYrnaGrFCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMxBAr%2F2c8pOlpOoORKtwDMDocE9i0o7N9frh%2BWL3ifGr9nnhPttea4IK7kSeHTZIFJAOud%2Fp61mDi4hSEIhiG65px0i6ohX9qVxnyR28d5oC4A17suJHNE%2B1AtgQ5sKBvHE%2FfjnsQKNnWymSviedBHzP9ryyhKxpSsgYArYWgZTIPb5Jn%2BwDaboRO8IYLtO90bXFTKaIVk%2FBoN%2Bp1klwDxyo4fVsD%2Fn0PczGtiscfVI31MsBiZA%2B5%2BvjegKqEG1O9zcKSA7fSAReIXfdgpUZGtbOuufgynImbHiB5hyL9jIDEJ6R2BMDOOt80G0glSsyC4Yt0h4JHAOr%2BrGtfiP88i7%2B5eA5lNR4wtXuUUOJ0ZnL6aqrRVSnXbVAu2LdMO%2Fi1SHHebCKfOL4JbmUoC6vAKKKvLFFenFbJvkqiEKS8V55c3b3qoLWQ8FjK1ajSFHPy%2B9kaWD6UAAfIX4XGvf4kuk%2FwsMWg22suFnZA64Ib36K0YFy5ZQmGjPZFwesDSrpuevv3Nt6sBMlTyHGe4T%2FhSO%2F8SyFTRwf1IzHixzR4O5E7zQKMV4U6ICAxtFHbtNRKkn0h9M0D4%2FKVWZrQPmDhim5IPmOXibFIav0TFrI%2BzI7fc85oLI6MjuQ%2Fx0V%2FHXqXQpzf7eb3SEq4gRQwo9m%2BxAY6pgH6MiCqHNnNYnJeJoQInLFmVycTi1Q0M7zYzNuINfe49aYY7Hk8KvjKblKbYmc4mvDFW7MduXyHmr2XVyDUQ1Ja4uQ%2BPb%2BhvNsSqXdx4flH88owEOCTlUtSek3NSkCiPS2EDBw2Mo%2BmugVof1TwEqu5ZFGNp5V0kpwbse7H32oG9B2U%2BFgMCvwTJJBg%2BwUzqhwFdtVgqxwsJNGV3yVk%2FCM5HqumlSHp&X-Amz-Signature=b1e59bf704636b7e442ad44662f23291c21546ef50d3f902c0f23fe875504dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJGU22S%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnR31lxi7PJO9IVc7aDHudpYbU4vFCkJ5T76dNk5ijaAiB54scHrTJFQGuTKzJtK0VyjYSDGDL2Ntvr9%2FYrnaGrFCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMxBAr%2F2c8pOlpOoORKtwDMDocE9i0o7N9frh%2BWL3ifGr9nnhPttea4IK7kSeHTZIFJAOud%2Fp61mDi4hSEIhiG65px0i6ohX9qVxnyR28d5oC4A17suJHNE%2B1AtgQ5sKBvHE%2FfjnsQKNnWymSviedBHzP9ryyhKxpSsgYArYWgZTIPb5Jn%2BwDaboRO8IYLtO90bXFTKaIVk%2FBoN%2Bp1klwDxyo4fVsD%2Fn0PczGtiscfVI31MsBiZA%2B5%2BvjegKqEG1O9zcKSA7fSAReIXfdgpUZGtbOuufgynImbHiB5hyL9jIDEJ6R2BMDOOt80G0glSsyC4Yt0h4JHAOr%2BrGtfiP88i7%2B5eA5lNR4wtXuUUOJ0ZnL6aqrRVSnXbVAu2LdMO%2Fi1SHHebCKfOL4JbmUoC6vAKKKvLFFenFbJvkqiEKS8V55c3b3qoLWQ8FjK1ajSFHPy%2B9kaWD6UAAfIX4XGvf4kuk%2FwsMWg22suFnZA64Ib36K0YFy5ZQmGjPZFwesDSrpuevv3Nt6sBMlTyHGe4T%2FhSO%2F8SyFTRwf1IzHixzR4O5E7zQKMV4U6ICAxtFHbtNRKkn0h9M0D4%2FKVWZrQPmDhim5IPmOXibFIav0TFrI%2BzI7fc85oLI6MjuQ%2Fx0V%2FHXqXQpzf7eb3SEq4gRQwo9m%2BxAY6pgH6MiCqHNnNYnJeJoQInLFmVycTi1Q0M7zYzNuINfe49aYY7Hk8KvjKblKbYmc4mvDFW7MduXyHmr2XVyDUQ1Ja4uQ%2BPb%2BhvNsSqXdx4flH88owEOCTlUtSek3NSkCiPS2EDBw2Mo%2BmugVof1TwEqu5ZFGNp5V0kpwbse7H32oG9B2U%2BFgMCvwTJJBg%2BwUzqhwFdtVgqxwsJNGV3yVk%2FCM5HqumlSHp&X-Amz-Signature=7d59ee9b8a40d683b5578dbae569642535f449bf22884d38ae08285c6c23aa0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJGU22S%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnR31lxi7PJO9IVc7aDHudpYbU4vFCkJ5T76dNk5ijaAiB54scHrTJFQGuTKzJtK0VyjYSDGDL2Ntvr9%2FYrnaGrFCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMxBAr%2F2c8pOlpOoORKtwDMDocE9i0o7N9frh%2BWL3ifGr9nnhPttea4IK7kSeHTZIFJAOud%2Fp61mDi4hSEIhiG65px0i6ohX9qVxnyR28d5oC4A17suJHNE%2B1AtgQ5sKBvHE%2FfjnsQKNnWymSviedBHzP9ryyhKxpSsgYArYWgZTIPb5Jn%2BwDaboRO8IYLtO90bXFTKaIVk%2FBoN%2Bp1klwDxyo4fVsD%2Fn0PczGtiscfVI31MsBiZA%2B5%2BvjegKqEG1O9zcKSA7fSAReIXfdgpUZGtbOuufgynImbHiB5hyL9jIDEJ6R2BMDOOt80G0glSsyC4Yt0h4JHAOr%2BrGtfiP88i7%2B5eA5lNR4wtXuUUOJ0ZnL6aqrRVSnXbVAu2LdMO%2Fi1SHHebCKfOL4JbmUoC6vAKKKvLFFenFbJvkqiEKS8V55c3b3qoLWQ8FjK1ajSFHPy%2B9kaWD6UAAfIX4XGvf4kuk%2FwsMWg22suFnZA64Ib36K0YFy5ZQmGjPZFwesDSrpuevv3Nt6sBMlTyHGe4T%2FhSO%2F8SyFTRwf1IzHixzR4O5E7zQKMV4U6ICAxtFHbtNRKkn0h9M0D4%2FKVWZrQPmDhim5IPmOXibFIav0TFrI%2BzI7fc85oLI6MjuQ%2Fx0V%2FHXqXQpzf7eb3SEq4gRQwo9m%2BxAY6pgH6MiCqHNnNYnJeJoQInLFmVycTi1Q0M7zYzNuINfe49aYY7Hk8KvjKblKbYmc4mvDFW7MduXyHmr2XVyDUQ1Ja4uQ%2BPb%2BhvNsSqXdx4flH88owEOCTlUtSek3NSkCiPS2EDBw2Mo%2BmugVof1TwEqu5ZFGNp5V0kpwbse7H32oG9B2U%2BFgMCvwTJJBg%2BwUzqhwFdtVgqxwsJNGV3yVk%2FCM5HqumlSHp&X-Amz-Signature=a1794fbc308ff0a6e4fa7d447c9bb137eb7c23fb59add31f1889819a25655a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJGU22S%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnR31lxi7PJO9IVc7aDHudpYbU4vFCkJ5T76dNk5ijaAiB54scHrTJFQGuTKzJtK0VyjYSDGDL2Ntvr9%2FYrnaGrFCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMxBAr%2F2c8pOlpOoORKtwDMDocE9i0o7N9frh%2BWL3ifGr9nnhPttea4IK7kSeHTZIFJAOud%2Fp61mDi4hSEIhiG65px0i6ohX9qVxnyR28d5oC4A17suJHNE%2B1AtgQ5sKBvHE%2FfjnsQKNnWymSviedBHzP9ryyhKxpSsgYArYWgZTIPb5Jn%2BwDaboRO8IYLtO90bXFTKaIVk%2FBoN%2Bp1klwDxyo4fVsD%2Fn0PczGtiscfVI31MsBiZA%2B5%2BvjegKqEG1O9zcKSA7fSAReIXfdgpUZGtbOuufgynImbHiB5hyL9jIDEJ6R2BMDOOt80G0glSsyC4Yt0h4JHAOr%2BrGtfiP88i7%2B5eA5lNR4wtXuUUOJ0ZnL6aqrRVSnXbVAu2LdMO%2Fi1SHHebCKfOL4JbmUoC6vAKKKvLFFenFbJvkqiEKS8V55c3b3qoLWQ8FjK1ajSFHPy%2B9kaWD6UAAfIX4XGvf4kuk%2FwsMWg22suFnZA64Ib36K0YFy5ZQmGjPZFwesDSrpuevv3Nt6sBMlTyHGe4T%2FhSO%2F8SyFTRwf1IzHixzR4O5E7zQKMV4U6ICAxtFHbtNRKkn0h9M0D4%2FKVWZrQPmDhim5IPmOXibFIav0TFrI%2BzI7fc85oLI6MjuQ%2Fx0V%2FHXqXQpzf7eb3SEq4gRQwo9m%2BxAY6pgH6MiCqHNnNYnJeJoQInLFmVycTi1Q0M7zYzNuINfe49aYY7Hk8KvjKblKbYmc4mvDFW7MduXyHmr2XVyDUQ1Ja4uQ%2BPb%2BhvNsSqXdx4flH88owEOCTlUtSek3NSkCiPS2EDBw2Mo%2BmugVof1TwEqu5ZFGNp5V0kpwbse7H32oG9B2U%2BFgMCvwTJJBg%2BwUzqhwFdtVgqxwsJNGV3yVk%2FCM5HqumlSHp&X-Amz-Signature=f93d096fdc21933eb88dece145aef3890cd3f01aa8a6d8be52b1db051b75b128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJGU22S%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnR31lxi7PJO9IVc7aDHudpYbU4vFCkJ5T76dNk5ijaAiB54scHrTJFQGuTKzJtK0VyjYSDGDL2Ntvr9%2FYrnaGrFCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMxBAr%2F2c8pOlpOoORKtwDMDocE9i0o7N9frh%2BWL3ifGr9nnhPttea4IK7kSeHTZIFJAOud%2Fp61mDi4hSEIhiG65px0i6ohX9qVxnyR28d5oC4A17suJHNE%2B1AtgQ5sKBvHE%2FfjnsQKNnWymSviedBHzP9ryyhKxpSsgYArYWgZTIPb5Jn%2BwDaboRO8IYLtO90bXFTKaIVk%2FBoN%2Bp1klwDxyo4fVsD%2Fn0PczGtiscfVI31MsBiZA%2B5%2BvjegKqEG1O9zcKSA7fSAReIXfdgpUZGtbOuufgynImbHiB5hyL9jIDEJ6R2BMDOOt80G0glSsyC4Yt0h4JHAOr%2BrGtfiP88i7%2B5eA5lNR4wtXuUUOJ0ZnL6aqrRVSnXbVAu2LdMO%2Fi1SHHebCKfOL4JbmUoC6vAKKKvLFFenFbJvkqiEKS8V55c3b3qoLWQ8FjK1ajSFHPy%2B9kaWD6UAAfIX4XGvf4kuk%2FwsMWg22suFnZA64Ib36K0YFy5ZQmGjPZFwesDSrpuevv3Nt6sBMlTyHGe4T%2FhSO%2F8SyFTRwf1IzHixzR4O5E7zQKMV4U6ICAxtFHbtNRKkn0h9M0D4%2FKVWZrQPmDhim5IPmOXibFIav0TFrI%2BzI7fc85oLI6MjuQ%2Fx0V%2FHXqXQpzf7eb3SEq4gRQwo9m%2BxAY6pgH6MiCqHNnNYnJeJoQInLFmVycTi1Q0M7zYzNuINfe49aYY7Hk8KvjKblKbYmc4mvDFW7MduXyHmr2XVyDUQ1Ja4uQ%2BPb%2BhvNsSqXdx4flH88owEOCTlUtSek3NSkCiPS2EDBw2Mo%2BmugVof1TwEqu5ZFGNp5V0kpwbse7H32oG9B2U%2BFgMCvwTJJBg%2BwUzqhwFdtVgqxwsJNGV3yVk%2FCM5HqumlSHp&X-Amz-Signature=19b241f1fd08dcaf12ee2b2410ace56f11ccc5a3cdcd027cfa5a31335611c7e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJGU22S%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnR31lxi7PJO9IVc7aDHudpYbU4vFCkJ5T76dNk5ijaAiB54scHrTJFQGuTKzJtK0VyjYSDGDL2Ntvr9%2FYrnaGrFCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMxBAr%2F2c8pOlpOoORKtwDMDocE9i0o7N9frh%2BWL3ifGr9nnhPttea4IK7kSeHTZIFJAOud%2Fp61mDi4hSEIhiG65px0i6ohX9qVxnyR28d5oC4A17suJHNE%2B1AtgQ5sKBvHE%2FfjnsQKNnWymSviedBHzP9ryyhKxpSsgYArYWgZTIPb5Jn%2BwDaboRO8IYLtO90bXFTKaIVk%2FBoN%2Bp1klwDxyo4fVsD%2Fn0PczGtiscfVI31MsBiZA%2B5%2BvjegKqEG1O9zcKSA7fSAReIXfdgpUZGtbOuufgynImbHiB5hyL9jIDEJ6R2BMDOOt80G0glSsyC4Yt0h4JHAOr%2BrGtfiP88i7%2B5eA5lNR4wtXuUUOJ0ZnL6aqrRVSnXbVAu2LdMO%2Fi1SHHebCKfOL4JbmUoC6vAKKKvLFFenFbJvkqiEKS8V55c3b3qoLWQ8FjK1ajSFHPy%2B9kaWD6UAAfIX4XGvf4kuk%2FwsMWg22suFnZA64Ib36K0YFy5ZQmGjPZFwesDSrpuevv3Nt6sBMlTyHGe4T%2FhSO%2F8SyFTRwf1IzHixzR4O5E7zQKMV4U6ICAxtFHbtNRKkn0h9M0D4%2FKVWZrQPmDhim5IPmOXibFIav0TFrI%2BzI7fc85oLI6MjuQ%2Fx0V%2FHXqXQpzf7eb3SEq4gRQwo9m%2BxAY6pgH6MiCqHNnNYnJeJoQInLFmVycTi1Q0M7zYzNuINfe49aYY7Hk8KvjKblKbYmc4mvDFW7MduXyHmr2XVyDUQ1Ja4uQ%2BPb%2BhvNsSqXdx4flH88owEOCTlUtSek3NSkCiPS2EDBw2Mo%2BmugVof1TwEqu5ZFGNp5V0kpwbse7H32oG9B2U%2BFgMCvwTJJBg%2BwUzqhwFdtVgqxwsJNGV3yVk%2FCM5HqumlSHp&X-Amz-Signature=4c9ea31f06251ad35008582220cd858ae0c3522babe218bdb1259d8177e3754f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJGU22S%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnR31lxi7PJO9IVc7aDHudpYbU4vFCkJ5T76dNk5ijaAiB54scHrTJFQGuTKzJtK0VyjYSDGDL2Ntvr9%2FYrnaGrFCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMxBAr%2F2c8pOlpOoORKtwDMDocE9i0o7N9frh%2BWL3ifGr9nnhPttea4IK7kSeHTZIFJAOud%2Fp61mDi4hSEIhiG65px0i6ohX9qVxnyR28d5oC4A17suJHNE%2B1AtgQ5sKBvHE%2FfjnsQKNnWymSviedBHzP9ryyhKxpSsgYArYWgZTIPb5Jn%2BwDaboRO8IYLtO90bXFTKaIVk%2FBoN%2Bp1klwDxyo4fVsD%2Fn0PczGtiscfVI31MsBiZA%2B5%2BvjegKqEG1O9zcKSA7fSAReIXfdgpUZGtbOuufgynImbHiB5hyL9jIDEJ6R2BMDOOt80G0glSsyC4Yt0h4JHAOr%2BrGtfiP88i7%2B5eA5lNR4wtXuUUOJ0ZnL6aqrRVSnXbVAu2LdMO%2Fi1SHHebCKfOL4JbmUoC6vAKKKvLFFenFbJvkqiEKS8V55c3b3qoLWQ8FjK1ajSFHPy%2B9kaWD6UAAfIX4XGvf4kuk%2FwsMWg22suFnZA64Ib36K0YFy5ZQmGjPZFwesDSrpuevv3Nt6sBMlTyHGe4T%2FhSO%2F8SyFTRwf1IzHixzR4O5E7zQKMV4U6ICAxtFHbtNRKkn0h9M0D4%2FKVWZrQPmDhim5IPmOXibFIav0TFrI%2BzI7fc85oLI6MjuQ%2Fx0V%2FHXqXQpzf7eb3SEq4gRQwo9m%2BxAY6pgH6MiCqHNnNYnJeJoQInLFmVycTi1Q0M7zYzNuINfe49aYY7Hk8KvjKblKbYmc4mvDFW7MduXyHmr2XVyDUQ1Ja4uQ%2BPb%2BhvNsSqXdx4flH88owEOCTlUtSek3NSkCiPS2EDBw2Mo%2BmugVof1TwEqu5ZFGNp5V0kpwbse7H32oG9B2U%2BFgMCvwTJJBg%2BwUzqhwFdtVgqxwsJNGV3yVk%2FCM5HqumlSHp&X-Amz-Signature=f20d3b164ad296b73be57740f044f77ac14e438f0364a771887eb26a91dcb207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJGU22S%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnR31lxi7PJO9IVc7aDHudpYbU4vFCkJ5T76dNk5ijaAiB54scHrTJFQGuTKzJtK0VyjYSDGDL2Ntvr9%2FYrnaGrFCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMxBAr%2F2c8pOlpOoORKtwDMDocE9i0o7N9frh%2BWL3ifGr9nnhPttea4IK7kSeHTZIFJAOud%2Fp61mDi4hSEIhiG65px0i6ohX9qVxnyR28d5oC4A17suJHNE%2B1AtgQ5sKBvHE%2FfjnsQKNnWymSviedBHzP9ryyhKxpSsgYArYWgZTIPb5Jn%2BwDaboRO8IYLtO90bXFTKaIVk%2FBoN%2Bp1klwDxyo4fVsD%2Fn0PczGtiscfVI31MsBiZA%2B5%2BvjegKqEG1O9zcKSA7fSAReIXfdgpUZGtbOuufgynImbHiB5hyL9jIDEJ6R2BMDOOt80G0glSsyC4Yt0h4JHAOr%2BrGtfiP88i7%2B5eA5lNR4wtXuUUOJ0ZnL6aqrRVSnXbVAu2LdMO%2Fi1SHHebCKfOL4JbmUoC6vAKKKvLFFenFbJvkqiEKS8V55c3b3qoLWQ8FjK1ajSFHPy%2B9kaWD6UAAfIX4XGvf4kuk%2FwsMWg22suFnZA64Ib36K0YFy5ZQmGjPZFwesDSrpuevv3Nt6sBMlTyHGe4T%2FhSO%2F8SyFTRwf1IzHixzR4O5E7zQKMV4U6ICAxtFHbtNRKkn0h9M0D4%2FKVWZrQPmDhim5IPmOXibFIav0TFrI%2BzI7fc85oLI6MjuQ%2Fx0V%2FHXqXQpzf7eb3SEq4gRQwo9m%2BxAY6pgH6MiCqHNnNYnJeJoQInLFmVycTi1Q0M7zYzNuINfe49aYY7Hk8KvjKblKbYmc4mvDFW7MduXyHmr2XVyDUQ1Ja4uQ%2BPb%2BhvNsSqXdx4flH88owEOCTlUtSek3NSkCiPS2EDBw2Mo%2BmugVof1TwEqu5ZFGNp5V0kpwbse7H32oG9B2U%2BFgMCvwTJJBg%2BwUzqhwFdtVgqxwsJNGV3yVk%2FCM5HqumlSHp&X-Amz-Signature=83c04e2db6d278a6e707ee41026722c615e3e4df830db9a728d5079bb48b30aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJGU22S%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnR31lxi7PJO9IVc7aDHudpYbU4vFCkJ5T76dNk5ijaAiB54scHrTJFQGuTKzJtK0VyjYSDGDL2Ntvr9%2FYrnaGrFCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMxBAr%2F2c8pOlpOoORKtwDMDocE9i0o7N9frh%2BWL3ifGr9nnhPttea4IK7kSeHTZIFJAOud%2Fp61mDi4hSEIhiG65px0i6ohX9qVxnyR28d5oC4A17suJHNE%2B1AtgQ5sKBvHE%2FfjnsQKNnWymSviedBHzP9ryyhKxpSsgYArYWgZTIPb5Jn%2BwDaboRO8IYLtO90bXFTKaIVk%2FBoN%2Bp1klwDxyo4fVsD%2Fn0PczGtiscfVI31MsBiZA%2B5%2BvjegKqEG1O9zcKSA7fSAReIXfdgpUZGtbOuufgynImbHiB5hyL9jIDEJ6R2BMDOOt80G0glSsyC4Yt0h4JHAOr%2BrGtfiP88i7%2B5eA5lNR4wtXuUUOJ0ZnL6aqrRVSnXbVAu2LdMO%2Fi1SHHebCKfOL4JbmUoC6vAKKKvLFFenFbJvkqiEKS8V55c3b3qoLWQ8FjK1ajSFHPy%2B9kaWD6UAAfIX4XGvf4kuk%2FwsMWg22suFnZA64Ib36K0YFy5ZQmGjPZFwesDSrpuevv3Nt6sBMlTyHGe4T%2FhSO%2F8SyFTRwf1IzHixzR4O5E7zQKMV4U6ICAxtFHbtNRKkn0h9M0D4%2FKVWZrQPmDhim5IPmOXibFIav0TFrI%2BzI7fc85oLI6MjuQ%2Fx0V%2FHXqXQpzf7eb3SEq4gRQwo9m%2BxAY6pgH6MiCqHNnNYnJeJoQInLFmVycTi1Q0M7zYzNuINfe49aYY7Hk8KvjKblKbYmc4mvDFW7MduXyHmr2XVyDUQ1Ja4uQ%2BPb%2BhvNsSqXdx4flH88owEOCTlUtSek3NSkCiPS2EDBw2Mo%2BmugVof1TwEqu5ZFGNp5V0kpwbse7H32oG9B2U%2BFgMCvwTJJBg%2BwUzqhwFdtVgqxwsJNGV3yVk%2FCM5HqumlSHp&X-Amz-Signature=64d15e72dadf1f8ed7c675c41e07d99109b3b16edb7297aff9b6173b2a2ca8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
