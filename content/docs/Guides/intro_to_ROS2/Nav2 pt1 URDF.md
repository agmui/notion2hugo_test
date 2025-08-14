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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNZKYI6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGahDU9C%2BYCdbs4HayXwyAmUIhPgd2j%2FcuGP70TUBfPYAiEApU2By4cxOFfmPWq6KPHzBsJeljdNP4x%2FbXLnm3vgZzsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDARArMUeN11ERd3NcCrcA9vK8TfPaZnsuGxBv7n3LRRp3pr7xjUXI0sfwwmArvAs9DoFXm1HrpctFORauvR46RdemiTWG%2Ba%2FUnKS8zD33Lpob2jR0nEi9fP4LzkjOP4Deh8Gji6MyKFDbQmovXD4N1whG4m2duabODCCd96foO1fiCKOb7%2BIAoSKXtvJB1HHp2GiT6iWTLy3pxzlXHShmBMPSbrdVcgt2zXxJudoIOttRITRCsfbe0rbtwUzCJq6L2RZj2VvODh%2Ff1LD65sClJ%2Fm9b3oQ8AhOtZd5G3KyfTedW5rww7leIKrByG4st%2Br1kaBrVK3xYJz1nzmfiQc4qM0dzfN3kBKABHy5jLFN2TSI5ByHTmg5OAzroKiD8phqS4cnI5Q%2FTY9b2yADw30YRqrmuX%2B3%2F07wOQqzy5CL5O5nkQoY7S98zYjcjMIQGccmDMkuD0SNMwZNk1b5LBn56QDx7MwZULFRHBzZrp2hKprXdc0HWhJFwN%2FtTPpHEG8Uj7t2huY4iGYYjJza%2B2Tur%2FiyfVWYJaEJ%2Frf99gjE6fpvQAc567Io4Vb05tziYWeUrZr9bs1J16eCy8gQUI3p2ozKT2DgZKJPHDLJKjSsskFI5PKOIrsT39zzj0mNdMoH02Uv5k4zarX33MEML%2BM%2BcQGOqUBJLIeddQnOBN8tXxF%2FBUJuKoTU2VGeagpMNy8wndVelbiAV3GTOB0Or6IEmdpudxyWYVPV1leiOpwx%2B%2BHP6wW4uSxhKz15RG%2BkgkyK28lUZtpxzFRVyzryscAU9x59FY1%2BId1iJDb35FmCzrbmnpUVdFBO8OnVfOMacjvvYWm9d%2BBmjpzf9zBoibZR9Bivvj71DSNx2UX6ML2LGvgIPc%2BBPGKEq1W&X-Amz-Signature=fda3f0e6fc6aa82f3f24156e2be645903ee104c252aceac29de2d1f56f20ec32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNZKYI6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGahDU9C%2BYCdbs4HayXwyAmUIhPgd2j%2FcuGP70TUBfPYAiEApU2By4cxOFfmPWq6KPHzBsJeljdNP4x%2FbXLnm3vgZzsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDARArMUeN11ERd3NcCrcA9vK8TfPaZnsuGxBv7n3LRRp3pr7xjUXI0sfwwmArvAs9DoFXm1HrpctFORauvR46RdemiTWG%2Ba%2FUnKS8zD33Lpob2jR0nEi9fP4LzkjOP4Deh8Gji6MyKFDbQmovXD4N1whG4m2duabODCCd96foO1fiCKOb7%2BIAoSKXtvJB1HHp2GiT6iWTLy3pxzlXHShmBMPSbrdVcgt2zXxJudoIOttRITRCsfbe0rbtwUzCJq6L2RZj2VvODh%2Ff1LD65sClJ%2Fm9b3oQ8AhOtZd5G3KyfTedW5rww7leIKrByG4st%2Br1kaBrVK3xYJz1nzmfiQc4qM0dzfN3kBKABHy5jLFN2TSI5ByHTmg5OAzroKiD8phqS4cnI5Q%2FTY9b2yADw30YRqrmuX%2B3%2F07wOQqzy5CL5O5nkQoY7S98zYjcjMIQGccmDMkuD0SNMwZNk1b5LBn56QDx7MwZULFRHBzZrp2hKprXdc0HWhJFwN%2FtTPpHEG8Uj7t2huY4iGYYjJza%2B2Tur%2FiyfVWYJaEJ%2Frf99gjE6fpvQAc567Io4Vb05tziYWeUrZr9bs1J16eCy8gQUI3p2ozKT2DgZKJPHDLJKjSsskFI5PKOIrsT39zzj0mNdMoH02Uv5k4zarX33MEML%2BM%2BcQGOqUBJLIeddQnOBN8tXxF%2FBUJuKoTU2VGeagpMNy8wndVelbiAV3GTOB0Or6IEmdpudxyWYVPV1leiOpwx%2B%2BHP6wW4uSxhKz15RG%2BkgkyK28lUZtpxzFRVyzryscAU9x59FY1%2BId1iJDb35FmCzrbmnpUVdFBO8OnVfOMacjvvYWm9d%2BBmjpzf9zBoibZR9Bivvj71DSNx2UX6ML2LGvgIPc%2BBPGKEq1W&X-Amz-Signature=5e6bdb01f1eae67f88416b259e131c4b7f3a2f267b67c62d8b43d402d2e6abc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNZKYI6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGahDU9C%2BYCdbs4HayXwyAmUIhPgd2j%2FcuGP70TUBfPYAiEApU2By4cxOFfmPWq6KPHzBsJeljdNP4x%2FbXLnm3vgZzsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDARArMUeN11ERd3NcCrcA9vK8TfPaZnsuGxBv7n3LRRp3pr7xjUXI0sfwwmArvAs9DoFXm1HrpctFORauvR46RdemiTWG%2Ba%2FUnKS8zD33Lpob2jR0nEi9fP4LzkjOP4Deh8Gji6MyKFDbQmovXD4N1whG4m2duabODCCd96foO1fiCKOb7%2BIAoSKXtvJB1HHp2GiT6iWTLy3pxzlXHShmBMPSbrdVcgt2zXxJudoIOttRITRCsfbe0rbtwUzCJq6L2RZj2VvODh%2Ff1LD65sClJ%2Fm9b3oQ8AhOtZd5G3KyfTedW5rww7leIKrByG4st%2Br1kaBrVK3xYJz1nzmfiQc4qM0dzfN3kBKABHy5jLFN2TSI5ByHTmg5OAzroKiD8phqS4cnI5Q%2FTY9b2yADw30YRqrmuX%2B3%2F07wOQqzy5CL5O5nkQoY7S98zYjcjMIQGccmDMkuD0SNMwZNk1b5LBn56QDx7MwZULFRHBzZrp2hKprXdc0HWhJFwN%2FtTPpHEG8Uj7t2huY4iGYYjJza%2B2Tur%2FiyfVWYJaEJ%2Frf99gjE6fpvQAc567Io4Vb05tziYWeUrZr9bs1J16eCy8gQUI3p2ozKT2DgZKJPHDLJKjSsskFI5PKOIrsT39zzj0mNdMoH02Uv5k4zarX33MEML%2BM%2BcQGOqUBJLIeddQnOBN8tXxF%2FBUJuKoTU2VGeagpMNy8wndVelbiAV3GTOB0Or6IEmdpudxyWYVPV1leiOpwx%2B%2BHP6wW4uSxhKz15RG%2BkgkyK28lUZtpxzFRVyzryscAU9x59FY1%2BId1iJDb35FmCzrbmnpUVdFBO8OnVfOMacjvvYWm9d%2BBmjpzf9zBoibZR9Bivvj71DSNx2UX6ML2LGvgIPc%2BBPGKEq1W&X-Amz-Signature=2095e74c187a22bb7c9c75e3e052be05872d840aa8f24b64a11f4f167fa0aa9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNZKYI6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGahDU9C%2BYCdbs4HayXwyAmUIhPgd2j%2FcuGP70TUBfPYAiEApU2By4cxOFfmPWq6KPHzBsJeljdNP4x%2FbXLnm3vgZzsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDARArMUeN11ERd3NcCrcA9vK8TfPaZnsuGxBv7n3LRRp3pr7xjUXI0sfwwmArvAs9DoFXm1HrpctFORauvR46RdemiTWG%2Ba%2FUnKS8zD33Lpob2jR0nEi9fP4LzkjOP4Deh8Gji6MyKFDbQmovXD4N1whG4m2duabODCCd96foO1fiCKOb7%2BIAoSKXtvJB1HHp2GiT6iWTLy3pxzlXHShmBMPSbrdVcgt2zXxJudoIOttRITRCsfbe0rbtwUzCJq6L2RZj2VvODh%2Ff1LD65sClJ%2Fm9b3oQ8AhOtZd5G3KyfTedW5rww7leIKrByG4st%2Br1kaBrVK3xYJz1nzmfiQc4qM0dzfN3kBKABHy5jLFN2TSI5ByHTmg5OAzroKiD8phqS4cnI5Q%2FTY9b2yADw30YRqrmuX%2B3%2F07wOQqzy5CL5O5nkQoY7S98zYjcjMIQGccmDMkuD0SNMwZNk1b5LBn56QDx7MwZULFRHBzZrp2hKprXdc0HWhJFwN%2FtTPpHEG8Uj7t2huY4iGYYjJza%2B2Tur%2FiyfVWYJaEJ%2Frf99gjE6fpvQAc567Io4Vb05tziYWeUrZr9bs1J16eCy8gQUI3p2ozKT2DgZKJPHDLJKjSsskFI5PKOIrsT39zzj0mNdMoH02Uv5k4zarX33MEML%2BM%2BcQGOqUBJLIeddQnOBN8tXxF%2FBUJuKoTU2VGeagpMNy8wndVelbiAV3GTOB0Or6IEmdpudxyWYVPV1leiOpwx%2B%2BHP6wW4uSxhKz15RG%2BkgkyK28lUZtpxzFRVyzryscAU9x59FY1%2BId1iJDb35FmCzrbmnpUVdFBO8OnVfOMacjvvYWm9d%2BBmjpzf9zBoibZR9Bivvj71DSNx2UX6ML2LGvgIPc%2BBPGKEq1W&X-Amz-Signature=0604a562bb41849eff52110429f5c2123b022f702dbc19d9a7bdcceafbccaf4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNZKYI6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGahDU9C%2BYCdbs4HayXwyAmUIhPgd2j%2FcuGP70TUBfPYAiEApU2By4cxOFfmPWq6KPHzBsJeljdNP4x%2FbXLnm3vgZzsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDARArMUeN11ERd3NcCrcA9vK8TfPaZnsuGxBv7n3LRRp3pr7xjUXI0sfwwmArvAs9DoFXm1HrpctFORauvR46RdemiTWG%2Ba%2FUnKS8zD33Lpob2jR0nEi9fP4LzkjOP4Deh8Gji6MyKFDbQmovXD4N1whG4m2duabODCCd96foO1fiCKOb7%2BIAoSKXtvJB1HHp2GiT6iWTLy3pxzlXHShmBMPSbrdVcgt2zXxJudoIOttRITRCsfbe0rbtwUzCJq6L2RZj2VvODh%2Ff1LD65sClJ%2Fm9b3oQ8AhOtZd5G3KyfTedW5rww7leIKrByG4st%2Br1kaBrVK3xYJz1nzmfiQc4qM0dzfN3kBKABHy5jLFN2TSI5ByHTmg5OAzroKiD8phqS4cnI5Q%2FTY9b2yADw30YRqrmuX%2B3%2F07wOQqzy5CL5O5nkQoY7S98zYjcjMIQGccmDMkuD0SNMwZNk1b5LBn56QDx7MwZULFRHBzZrp2hKprXdc0HWhJFwN%2FtTPpHEG8Uj7t2huY4iGYYjJza%2B2Tur%2FiyfVWYJaEJ%2Frf99gjE6fpvQAc567Io4Vb05tziYWeUrZr9bs1J16eCy8gQUI3p2ozKT2DgZKJPHDLJKjSsskFI5PKOIrsT39zzj0mNdMoH02Uv5k4zarX33MEML%2BM%2BcQGOqUBJLIeddQnOBN8tXxF%2FBUJuKoTU2VGeagpMNy8wndVelbiAV3GTOB0Or6IEmdpudxyWYVPV1leiOpwx%2B%2BHP6wW4uSxhKz15RG%2BkgkyK28lUZtpxzFRVyzryscAU9x59FY1%2BId1iJDb35FmCzrbmnpUVdFBO8OnVfOMacjvvYWm9d%2BBmjpzf9zBoibZR9Bivvj71DSNx2UX6ML2LGvgIPc%2BBPGKEq1W&X-Amz-Signature=7c1ddd014d388875419189b2e3e26ef7e30483bbe6072f026da6fa6f4930e65c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNZKYI6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGahDU9C%2BYCdbs4HayXwyAmUIhPgd2j%2FcuGP70TUBfPYAiEApU2By4cxOFfmPWq6KPHzBsJeljdNP4x%2FbXLnm3vgZzsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDARArMUeN11ERd3NcCrcA9vK8TfPaZnsuGxBv7n3LRRp3pr7xjUXI0sfwwmArvAs9DoFXm1HrpctFORauvR46RdemiTWG%2Ba%2FUnKS8zD33Lpob2jR0nEi9fP4LzkjOP4Deh8Gji6MyKFDbQmovXD4N1whG4m2duabODCCd96foO1fiCKOb7%2BIAoSKXtvJB1HHp2GiT6iWTLy3pxzlXHShmBMPSbrdVcgt2zXxJudoIOttRITRCsfbe0rbtwUzCJq6L2RZj2VvODh%2Ff1LD65sClJ%2Fm9b3oQ8AhOtZd5G3KyfTedW5rww7leIKrByG4st%2Br1kaBrVK3xYJz1nzmfiQc4qM0dzfN3kBKABHy5jLFN2TSI5ByHTmg5OAzroKiD8phqS4cnI5Q%2FTY9b2yADw30YRqrmuX%2B3%2F07wOQqzy5CL5O5nkQoY7S98zYjcjMIQGccmDMkuD0SNMwZNk1b5LBn56QDx7MwZULFRHBzZrp2hKprXdc0HWhJFwN%2FtTPpHEG8Uj7t2huY4iGYYjJza%2B2Tur%2FiyfVWYJaEJ%2Frf99gjE6fpvQAc567Io4Vb05tziYWeUrZr9bs1J16eCy8gQUI3p2ozKT2DgZKJPHDLJKjSsskFI5PKOIrsT39zzj0mNdMoH02Uv5k4zarX33MEML%2BM%2BcQGOqUBJLIeddQnOBN8tXxF%2FBUJuKoTU2VGeagpMNy8wndVelbiAV3GTOB0Or6IEmdpudxyWYVPV1leiOpwx%2B%2BHP6wW4uSxhKz15RG%2BkgkyK28lUZtpxzFRVyzryscAU9x59FY1%2BId1iJDb35FmCzrbmnpUVdFBO8OnVfOMacjvvYWm9d%2BBmjpzf9zBoibZR9Bivvj71DSNx2UX6ML2LGvgIPc%2BBPGKEq1W&X-Amz-Signature=41439148b6375517eab4ed3094ee71b52ffc13fb924230127509c522e9018130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNZKYI6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGahDU9C%2BYCdbs4HayXwyAmUIhPgd2j%2FcuGP70TUBfPYAiEApU2By4cxOFfmPWq6KPHzBsJeljdNP4x%2FbXLnm3vgZzsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDARArMUeN11ERd3NcCrcA9vK8TfPaZnsuGxBv7n3LRRp3pr7xjUXI0sfwwmArvAs9DoFXm1HrpctFORauvR46RdemiTWG%2Ba%2FUnKS8zD33Lpob2jR0nEi9fP4LzkjOP4Deh8Gji6MyKFDbQmovXD4N1whG4m2duabODCCd96foO1fiCKOb7%2BIAoSKXtvJB1HHp2GiT6iWTLy3pxzlXHShmBMPSbrdVcgt2zXxJudoIOttRITRCsfbe0rbtwUzCJq6L2RZj2VvODh%2Ff1LD65sClJ%2Fm9b3oQ8AhOtZd5G3KyfTedW5rww7leIKrByG4st%2Br1kaBrVK3xYJz1nzmfiQc4qM0dzfN3kBKABHy5jLFN2TSI5ByHTmg5OAzroKiD8phqS4cnI5Q%2FTY9b2yADw30YRqrmuX%2B3%2F07wOQqzy5CL5O5nkQoY7S98zYjcjMIQGccmDMkuD0SNMwZNk1b5LBn56QDx7MwZULFRHBzZrp2hKprXdc0HWhJFwN%2FtTPpHEG8Uj7t2huY4iGYYjJza%2B2Tur%2FiyfVWYJaEJ%2Frf99gjE6fpvQAc567Io4Vb05tziYWeUrZr9bs1J16eCy8gQUI3p2ozKT2DgZKJPHDLJKjSsskFI5PKOIrsT39zzj0mNdMoH02Uv5k4zarX33MEML%2BM%2BcQGOqUBJLIeddQnOBN8tXxF%2FBUJuKoTU2VGeagpMNy8wndVelbiAV3GTOB0Or6IEmdpudxyWYVPV1leiOpwx%2B%2BHP6wW4uSxhKz15RG%2BkgkyK28lUZtpxzFRVyzryscAU9x59FY1%2BId1iJDb35FmCzrbmnpUVdFBO8OnVfOMacjvvYWm9d%2BBmjpzf9zBoibZR9Bivvj71DSNx2UX6ML2LGvgIPc%2BBPGKEq1W&X-Amz-Signature=28e362da94a1d0e17cd48960da221f3a8b71c755e31af23703a6294a7f249c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNZKYI6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGahDU9C%2BYCdbs4HayXwyAmUIhPgd2j%2FcuGP70TUBfPYAiEApU2By4cxOFfmPWq6KPHzBsJeljdNP4x%2FbXLnm3vgZzsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDARArMUeN11ERd3NcCrcA9vK8TfPaZnsuGxBv7n3LRRp3pr7xjUXI0sfwwmArvAs9DoFXm1HrpctFORauvR46RdemiTWG%2Ba%2FUnKS8zD33Lpob2jR0nEi9fP4LzkjOP4Deh8Gji6MyKFDbQmovXD4N1whG4m2duabODCCd96foO1fiCKOb7%2BIAoSKXtvJB1HHp2GiT6iWTLy3pxzlXHShmBMPSbrdVcgt2zXxJudoIOttRITRCsfbe0rbtwUzCJq6L2RZj2VvODh%2Ff1LD65sClJ%2Fm9b3oQ8AhOtZd5G3KyfTedW5rww7leIKrByG4st%2Br1kaBrVK3xYJz1nzmfiQc4qM0dzfN3kBKABHy5jLFN2TSI5ByHTmg5OAzroKiD8phqS4cnI5Q%2FTY9b2yADw30YRqrmuX%2B3%2F07wOQqzy5CL5O5nkQoY7S98zYjcjMIQGccmDMkuD0SNMwZNk1b5LBn56QDx7MwZULFRHBzZrp2hKprXdc0HWhJFwN%2FtTPpHEG8Uj7t2huY4iGYYjJza%2B2Tur%2FiyfVWYJaEJ%2Frf99gjE6fpvQAc567Io4Vb05tziYWeUrZr9bs1J16eCy8gQUI3p2ozKT2DgZKJPHDLJKjSsskFI5PKOIrsT39zzj0mNdMoH02Uv5k4zarX33MEML%2BM%2BcQGOqUBJLIeddQnOBN8tXxF%2FBUJuKoTU2VGeagpMNy8wndVelbiAV3GTOB0Or6IEmdpudxyWYVPV1leiOpwx%2B%2BHP6wW4uSxhKz15RG%2BkgkyK28lUZtpxzFRVyzryscAU9x59FY1%2BId1iJDb35FmCzrbmnpUVdFBO8OnVfOMacjvvYWm9d%2BBmjpzf9zBoibZR9Bivvj71DSNx2UX6ML2LGvgIPc%2BBPGKEq1W&X-Amz-Signature=20fab945fff93dfea59a7bf33499c82cd55a2645538d154c9d035f31870d7bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNZKYI6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGahDU9C%2BYCdbs4HayXwyAmUIhPgd2j%2FcuGP70TUBfPYAiEApU2By4cxOFfmPWq6KPHzBsJeljdNP4x%2FbXLnm3vgZzsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDARArMUeN11ERd3NcCrcA9vK8TfPaZnsuGxBv7n3LRRp3pr7xjUXI0sfwwmArvAs9DoFXm1HrpctFORauvR46RdemiTWG%2Ba%2FUnKS8zD33Lpob2jR0nEi9fP4LzkjOP4Deh8Gji6MyKFDbQmovXD4N1whG4m2duabODCCd96foO1fiCKOb7%2BIAoSKXtvJB1HHp2GiT6iWTLy3pxzlXHShmBMPSbrdVcgt2zXxJudoIOttRITRCsfbe0rbtwUzCJq6L2RZj2VvODh%2Ff1LD65sClJ%2Fm9b3oQ8AhOtZd5G3KyfTedW5rww7leIKrByG4st%2Br1kaBrVK3xYJz1nzmfiQc4qM0dzfN3kBKABHy5jLFN2TSI5ByHTmg5OAzroKiD8phqS4cnI5Q%2FTY9b2yADw30YRqrmuX%2B3%2F07wOQqzy5CL5O5nkQoY7S98zYjcjMIQGccmDMkuD0SNMwZNk1b5LBn56QDx7MwZULFRHBzZrp2hKprXdc0HWhJFwN%2FtTPpHEG8Uj7t2huY4iGYYjJza%2B2Tur%2FiyfVWYJaEJ%2Frf99gjE6fpvQAc567Io4Vb05tziYWeUrZr9bs1J16eCy8gQUI3p2ozKT2DgZKJPHDLJKjSsskFI5PKOIrsT39zzj0mNdMoH02Uv5k4zarX33MEML%2BM%2BcQGOqUBJLIeddQnOBN8tXxF%2FBUJuKoTU2VGeagpMNy8wndVelbiAV3GTOB0Or6IEmdpudxyWYVPV1leiOpwx%2B%2BHP6wW4uSxhKz15RG%2BkgkyK28lUZtpxzFRVyzryscAU9x59FY1%2BId1iJDb35FmCzrbmnpUVdFBO8OnVfOMacjvvYWm9d%2BBmjpzf9zBoibZR9Bivvj71DSNx2UX6ML2LGvgIPc%2BBPGKEq1W&X-Amz-Signature=19c590cb753e9d8363359bfc6121b37c8bf36a5520a634659dd67ad387d07ef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNZKYI6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGahDU9C%2BYCdbs4HayXwyAmUIhPgd2j%2FcuGP70TUBfPYAiEApU2By4cxOFfmPWq6KPHzBsJeljdNP4x%2FbXLnm3vgZzsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDARArMUeN11ERd3NcCrcA9vK8TfPaZnsuGxBv7n3LRRp3pr7xjUXI0sfwwmArvAs9DoFXm1HrpctFORauvR46RdemiTWG%2Ba%2FUnKS8zD33Lpob2jR0nEi9fP4LzkjOP4Deh8Gji6MyKFDbQmovXD4N1whG4m2duabODCCd96foO1fiCKOb7%2BIAoSKXtvJB1HHp2GiT6iWTLy3pxzlXHShmBMPSbrdVcgt2zXxJudoIOttRITRCsfbe0rbtwUzCJq6L2RZj2VvODh%2Ff1LD65sClJ%2Fm9b3oQ8AhOtZd5G3KyfTedW5rww7leIKrByG4st%2Br1kaBrVK3xYJz1nzmfiQc4qM0dzfN3kBKABHy5jLFN2TSI5ByHTmg5OAzroKiD8phqS4cnI5Q%2FTY9b2yADw30YRqrmuX%2B3%2F07wOQqzy5CL5O5nkQoY7S98zYjcjMIQGccmDMkuD0SNMwZNk1b5LBn56QDx7MwZULFRHBzZrp2hKprXdc0HWhJFwN%2FtTPpHEG8Uj7t2huY4iGYYjJza%2B2Tur%2FiyfVWYJaEJ%2Frf99gjE6fpvQAc567Io4Vb05tziYWeUrZr9bs1J16eCy8gQUI3p2ozKT2DgZKJPHDLJKjSsskFI5PKOIrsT39zzj0mNdMoH02Uv5k4zarX33MEML%2BM%2BcQGOqUBJLIeddQnOBN8tXxF%2FBUJuKoTU2VGeagpMNy8wndVelbiAV3GTOB0Or6IEmdpudxyWYVPV1leiOpwx%2B%2BHP6wW4uSxhKz15RG%2BkgkyK28lUZtpxzFRVyzryscAU9x59FY1%2BId1iJDb35FmCzrbmnpUVdFBO8OnVfOMacjvvYWm9d%2BBmjpzf9zBoibZR9Bivvj71DSNx2UX6ML2LGvgIPc%2BBPGKEq1W&X-Amz-Signature=577e753f4920cba81a7464a4fd685b036eddff3ac87407d0489e7170cdde2e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPRF2JZA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCu4GOgbVNX1K7sdIvyl3BvbQR6S9N7YqSeWtYUCHoXVAIgEHL41p4QGtL7aHSysvsGy8V%2Bb1LKIubz%2BWQTqXCoRAIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIVnU5MWLH%2B8x3BV3ircA3wfjocSVLBPS2R6a%2B6DfOZc1fJgZEhLoP2O7HVv5CTZasvYSCoIYWkQxKXdaAcnuhyWVVZ3kKpZeJ2gJOWiU%2FVANFRcaj968jp3Cbls4EgRw7Uk3FrmjB4lZ7ihT4Prk5N%2Bj3DdndP8YtJFU257QjJtmcSJ1jSnDIokACK9Ad3kam0mrTnzTRwwqxmkisHRJ1uXeG2eJc1sZSRJct0TJofA1rhBzEDxu3EoMnRNmbu16GyTxD5NaG94iqkEcHvCGa6KWfgoN3rphmwfzI9WaGUfUCm71pFHqGxHx1JQa9UvGa7YP5Z3sOjvDYlqw2RSk%2BhCewQNgL%2FLpNJPks%2BMJQ0GPOda5Cqyy5Wovh0Q3K8AnxkCi0y3SHejyhE1HLHHlqsyctt%2B6hBiakOrzD0HTma63XEuWZt9evAm%2FX4xRHJlhPyurSe8W9gO0eQxMMT6H5%2FAArPVGP4z1bmoEcxStwkbnGobJZI5PEpRK2k1OOCkOAKuS1Id7TWq46U93f0KJXHIF5z9RDkaTyopQw6owiPQRYi0T5HuO%2B5WUVCV1uek%2B38FGazdedAA8Hzoqs7fPpBwr5MyimQiSA2ljys4I6WcCdjZBbEa0%2FiW3PGKCzABhSUOfX4Vy9bebI03MK6M%2BcQGOqUBVml%2Bups8JkiLyNZQx6gWn8LtXJhFs%2BsvviVrys8QYP%2FxiQTnAyW97Ud6c%2B%2FIx7y%2BNZUzu3xdIHieDbhU8Q4agalWFyC4wzL6qZafW6CKhzueqgAx3XWWYGjwLf%2FobJJYnXlA%2BgzxOayasQ4Vdl3FZqOhpqhwe4v8fAA08c8xncWWTaCFXQHlykK9PjOII%2BrFA1ma4IdSuIjWsLpIBcwLV2MgF5sn&X-Amz-Signature=eebee85bc1f23f065ebab2a676a425f4b2605ec1c05f5f497114bb09e2aa913b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JCU2QC6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCtIIM7IM6PnTl0BWxkjFQWWiGE5NwoGsT5u2C5PWlPnQIgUv%2Br%2F0E914eoIcni0IosSQ%2FZYkkintjuGApTudQZP%2FIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDEFdPPY5KPfQgz9T2ircA45ZA8kYhnk4nNfmPykN6PQdnirSODCLj2ZSX0Yk0hBVglprF20JGTW0WcSp5W3tsJXuVNmt3CJPHj7ufrNZzOhN88i0RJ5xyQ3J02sgU%2FwHk2D6Fh7G2IMLnbGr5RyWuIYNsn8amWzTysgpdFXNvJY5eiG%2FQ7fK342EeKjl1zbjGkNr8W%2BjAHVYEZDJRQaAn5TL3QW4p4%2BQiTdSWHZk5Mr0BF%2FBhtbu25SE0xWyQC4bS9a0Wk6sTH9x3br2I3xs6Hjf9vCr0%2FQIKk04EXzqhvJxce2l2dEecvXDGZRjfUbpAxxNhBZQciONooPOpLxy%2BTBfH9JmnruZoeAL%2Bw1e%2B0CceoMN40ooL5CSPWDctJxM%2BJIo3bOvqZZS%2FmfQFfN%2FF1ruB%2F%2FMmpwHN5QDZGY8B10OTZbthRvEibnXmu%2Bw1q1aGBT92ykl8v2sPgI4cZTQE4lKBg2EyXYXEsJzj3adF8v0kE4v5eA3AjxTHCJR4Wnegpmf1EmiRyQ%2FuMkBxbAi7ShZIjsSsLHO2JKiOC3SDgExBiCFSM%2Bj5OCr%2FNeKt%2BWM0utgMfJEayBxnaiPW1nfmVtt3NedhrLKmn6Y3Yck8%2FRHo%2BJ9wF7HByL86dDLj%2BMCm%2FpL5kZIKHcwVT2bMM6N%2BcQGOqUBBbnbcfsWymJVdUGdyHjuBQXR9ZlerBek4EUqySKhOcJmbsyLyKf1s0xJpoisx4UowsJByB%2F2uhB%2Fu16zilzjcJGdSjTgBChthxKfMhVtL5BcxvC15WsqTfAp2LHXSJr%2Ft1OuLIm1pRtOQm7rP9ZjvOx7UHEV5ZVcJxzWKS3ekvwPvwgvwKrvuChMqMBgy2hVdIVFt34XAe61ZCBcu5cVq1O1rFY%2F&X-Amz-Signature=a573c3e9849fc733d7ec26e4307aaf21d8052554c08f672685329557db74636a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FHOWAWV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHaheuS4ecwXo9bGI9Z9ze9GnwrquchPpVKjFsOfCj6LAiBhQ66oRq51O8qNoAwYCvKYcYh5LiIQ%2BqVvYI4gBSzCCCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMh1J00OlZaKFRqKR0KtwDhsv6hXrsfduZrI2rsQ4VTal9Pqy7konk3XptMy572sN%2B1cRmZuPnpsnLfY6vD04lX0oTkZAY4eBnS3b1XCVLNQdcxHmAySzGIlcAIDqgR%2FtHISQoeBYuQaIOMDQRDBzC691fB6JiExlMVPP1EU5vsD4aH%2FmH7ZDzCpB0Tb4gEZpzB94xESajorBZpTiwhmPBinox8sozrpkV59tiC81vI6dGoy2UHxaoLJ4vgcLHuXsdxbsgRS1HWE99sgxzt6V3crMS0QSjt8A8PBH3BidoKB7p6pVO%2Blg%2BZvCf9zTDQBWXTlbkcdpaZz30e73u%2FoUOFtTPGGPv9CN2iCz7TWk8rwIz3CPB%2Bm7Ln58hFDkbuPu6kJLI%2FQLgU3NzLAKjaRB4ltPTHhxb66EYM6yP9TsEt%2BCCBtlsF9KxqmnSZ%2BU%2B8QK9zMdpcJXL2Av4fTkou9oQPD6VOjiTCUnWf9a1umZiC%2Figl%2BF9fA27zpGETp7tPIWjmG2Bh2UfAZL6mFLT38LeP7CZWNGRykMyIce2P6NCvWNM26%2FpC2SGQ3e%2FYxr4uvRJ637JW7YMqXHcEwKm1j%2BBf0ZB6nWtzt69at%2BFXiibUGskDvnuCar1DsoGXAXlXMOcV2j9HAuiaOSH1zMwuI35xAY6pgEBrhh3w8LDsCnOtdpS3F8VWTUWhSw%2FEKDQ7vbVOTFt%2FuaQ1uDIj%2FYga4N66Fr012E78zlGgnI%2BQgOAvL40ZtPGnsUYBoiGXWbPHh1sHKGl8p85SpcQzfDhP4R5B5HwdrAi2LX%2FbDgWokdRp3u6nasfvHxuGw9lCgjOHmI2b3CnuYJICpSEZFcv2NjbPk9kSDTS4Mb1IkrSpnXcdH4idgQEdWmC3IiV&X-Amz-Signature=bcf4805595f7f90418910042c1524a400b19feadadca400f38a1e1ff00bd8994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNZKYI6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGahDU9C%2BYCdbs4HayXwyAmUIhPgd2j%2FcuGP70TUBfPYAiEApU2By4cxOFfmPWq6KPHzBsJeljdNP4x%2FbXLnm3vgZzsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDARArMUeN11ERd3NcCrcA9vK8TfPaZnsuGxBv7n3LRRp3pr7xjUXI0sfwwmArvAs9DoFXm1HrpctFORauvR46RdemiTWG%2Ba%2FUnKS8zD33Lpob2jR0nEi9fP4LzkjOP4Deh8Gji6MyKFDbQmovXD4N1whG4m2duabODCCd96foO1fiCKOb7%2BIAoSKXtvJB1HHp2GiT6iWTLy3pxzlXHShmBMPSbrdVcgt2zXxJudoIOttRITRCsfbe0rbtwUzCJq6L2RZj2VvODh%2Ff1LD65sClJ%2Fm9b3oQ8AhOtZd5G3KyfTedW5rww7leIKrByG4st%2Br1kaBrVK3xYJz1nzmfiQc4qM0dzfN3kBKABHy5jLFN2TSI5ByHTmg5OAzroKiD8phqS4cnI5Q%2FTY9b2yADw30YRqrmuX%2B3%2F07wOQqzy5CL5O5nkQoY7S98zYjcjMIQGccmDMkuD0SNMwZNk1b5LBn56QDx7MwZULFRHBzZrp2hKprXdc0HWhJFwN%2FtTPpHEG8Uj7t2huY4iGYYjJza%2B2Tur%2FiyfVWYJaEJ%2Frf99gjE6fpvQAc567Io4Vb05tziYWeUrZr9bs1J16eCy8gQUI3p2ozKT2DgZKJPHDLJKjSsskFI5PKOIrsT39zzj0mNdMoH02Uv5k4zarX33MEML%2BM%2BcQGOqUBJLIeddQnOBN8tXxF%2FBUJuKoTU2VGeagpMNy8wndVelbiAV3GTOB0Or6IEmdpudxyWYVPV1leiOpwx%2B%2BHP6wW4uSxhKz15RG%2BkgkyK28lUZtpxzFRVyzryscAU9x59FY1%2BId1iJDb35FmCzrbmnpUVdFBO8OnVfOMacjvvYWm9d%2BBmjpzf9zBoibZR9Bivvj71DSNx2UX6ML2LGvgIPc%2BBPGKEq1W&X-Amz-Signature=053f9cc9ef15013e14df0928bd36751275e12e391f49a9c5d9ed366d9f4f66d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKYC5AET%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCsoepibPelrle%2FLXOHHxplHkGqj3MbiWdEIWuF3F4pNAIhAPgyCrCVAgXIIjfbgCwmEdN6YqPy8b2g70%2BqJydcAJ1nKv8DCE4QABoMNjM3NDIzMTgzODA1Igy28U2AlShZCANS2yUq3AM%2BOb1%2FJa%2FCrEF8mAG6AslPh6oRgId8OT12DzIQN58t78hQREQnn4uRX11KL64jXnEXR63ZFIAT6PbXN0BD%2BPF9oW9O9joHbdNHr%2FnI8Rdk%2BYIyA9Jkzc0NnJ64IyxTs%2FjogkxPwy8F8lUodMHmAs%2BV5rOZu5EqB%2BRfWAvl4fpTwqy2wzUtkP0hZjulTS4ILjJixvgU0qfm1IVwfcuGRkfPza0XDRJGTaWAvl6yGjxirbW3sERRQ9niCD6haPTfAfazvgXFLQs%2FVSXo%2BPBEAlo6q5a%2FF%2BDFCtG4MlTvTF29BEgV%2BnsAJRZrWqGKcbFPCg5Bty18v3dsG3YiwZbKpXXIlD6h89Egk7cOyPQ6mxchz7iDYZMkYhQ6bk30Q6PwZPTq8KvNZtQdfGQo%2Bupx68AgYUa3%2F4jo5boxyB6mxWhYyf4i9A%2BSMnHQNqyxo%2BqYzEv8MuuWZ4EAk4pWvpnhq6XPckQk4fimJH1Hk6DV86cKcZ%2Fd6fSU6J7J7CHdnX3cbYTvXrSj1z5vpLjhLVL4aysa97pY5aPVdZWhJd7yRi%2BtYtDx6n8GuOeP6O3ZacWcHe4wGDzCKMvilW7FDrT2DLYDhR2CcuJ13Wc6yo4fgUMIC8sEAbZO8zbG%2BYpYVTD4jPnEBjqkAbtxijzLfTRFAlug3kKkx4ywQI58h1VYi0FaIVmqv7YrRo6Vzd7Vjfru09pU0pKg%2BqTonk8WkIhjNuVfosK2gpalDCjHXeexmCdjPCP3DIdxnitWKRmIRL0YJhCx9%2BW9hrX9d2k1PtQi6A4Mla2x2Q%2BJNeOGhHUutZ6mWJlLN6vFWh6UPGA6Rnp2PpQ0b0qhd63GPfvAylM1y783CZv56651%2Byce&X-Amz-Signature=0637010b8ccc376cccf44f7bb98f9ebf6c52955d83de5bfc16f5f314e2da1e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNZKYI6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGahDU9C%2BYCdbs4HayXwyAmUIhPgd2j%2FcuGP70TUBfPYAiEApU2By4cxOFfmPWq6KPHzBsJeljdNP4x%2FbXLnm3vgZzsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDARArMUeN11ERd3NcCrcA9vK8TfPaZnsuGxBv7n3LRRp3pr7xjUXI0sfwwmArvAs9DoFXm1HrpctFORauvR46RdemiTWG%2Ba%2FUnKS8zD33Lpob2jR0nEi9fP4LzkjOP4Deh8Gji6MyKFDbQmovXD4N1whG4m2duabODCCd96foO1fiCKOb7%2BIAoSKXtvJB1HHp2GiT6iWTLy3pxzlXHShmBMPSbrdVcgt2zXxJudoIOttRITRCsfbe0rbtwUzCJq6L2RZj2VvODh%2Ff1LD65sClJ%2Fm9b3oQ8AhOtZd5G3KyfTedW5rww7leIKrByG4st%2Br1kaBrVK3xYJz1nzmfiQc4qM0dzfN3kBKABHy5jLFN2TSI5ByHTmg5OAzroKiD8phqS4cnI5Q%2FTY9b2yADw30YRqrmuX%2B3%2F07wOQqzy5CL5O5nkQoY7S98zYjcjMIQGccmDMkuD0SNMwZNk1b5LBn56QDx7MwZULFRHBzZrp2hKprXdc0HWhJFwN%2FtTPpHEG8Uj7t2huY4iGYYjJza%2B2Tur%2FiyfVWYJaEJ%2Frf99gjE6fpvQAc567Io4Vb05tziYWeUrZr9bs1J16eCy8gQUI3p2ozKT2DgZKJPHDLJKjSsskFI5PKOIrsT39zzj0mNdMoH02Uv5k4zarX33MEML%2BM%2BcQGOqUBJLIeddQnOBN8tXxF%2FBUJuKoTU2VGeagpMNy8wndVelbiAV3GTOB0Or6IEmdpudxyWYVPV1leiOpwx%2B%2BHP6wW4uSxhKz15RG%2BkgkyK28lUZtpxzFRVyzryscAU9x59FY1%2BId1iJDb35FmCzrbmnpUVdFBO8OnVfOMacjvvYWm9d%2BBmjpzf9zBoibZR9Bivvj71DSNx2UX6ML2LGvgIPc%2BBPGKEq1W&X-Amz-Signature=dfade7dcbc7a9fd4b4160945b9cb5af8d8ead5db76d8792dea614a2f1ffdd5aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAYL7TNC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCpvZKuuPHOMn8Nu0PHctX8dbDswdWZCNkfCRVSov2UwwIgB4EGo3Kl96Wt0jXWLHjHb4%2BAO%2BOMDb8acpV5qk78mUwq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFfWjQkgNyoRjS%2BdcSrcA5r0mKi0arnKK%2BRlKHqW5uXD%2BfsE0EXt5THwjPSwBEGzJMpPTXzgwx9qSOHp%2F8E0tzMHQX6x4H23IFRd4soaTQMcO%2B68EQD%2FzwJ4XarMYtqgFe9vxhCzKWDUU6bYoelo%2B7hwJj%2FjxZKCrCErjZBY7g9jeMb%2FQqUxM0DGIO245odpvTexh2kPJgxtqiUk%2FI9ynFD%2FLdYp3hhLXZlYXF3qhUIiW0MJzUfX1VcMd2jAprlQf3zjo3S3AZ9jeqvW9qBzhPE7VZvsBPxxmozD6zU0m5r%2FYKpClTGZzPObfeZiD%2F45rUmI%2FqXAH8wOjajM8%2Bwld6q0b2IPYlRHdqYz4vqa%2FCYGlli0qZ3FQLfFkvaHrl3ziG70o%2BS8gKrKWlz8kxQcdVqvTGcTzWn8IfdPvb%2FQRqJ1DfNmrs7v5ICqqrsZ%2F1hZFofO1hHF9gVUl1x8nJe%2BAp3KoK0YaJ5ZEijvejXU2kpmkaZiUYjFcUXtZ%2BDrfIrosvlJ7C0%2FzF4gnNFq3aVvOEs3tnhJCd7EM%2FJB%2B8wgG7z6UJ3ow6ULJYrQvpSSNy51ihPXz393boSyMIg97GnciNCE9%2FyjXn4R6KYSWou5ZyZDYb9SYBhgNH300Z9jOTf40%2B99OEspGTDmWvIXMK%2BM%2BcQGOqUBAACMrbXmj35mYNkHATTrX6X6MRYygpgmtl4U%2FuxieVatdOqPFF%2FiDXCZDHmNoFP4OMDPYaZ7ojxSAmAPKDKJwwEi1QdKl3aWoeg%2BYmpJK6DCWrSTzFlqzGLFvx1M2XPyYqHN1PCei5srXcjknRGKAkGPV5mD60uVJp17%2BReq7jB3nwfYqzhWEUmQl4yQHgmjLScrd3tcWn3MGdPKE6tFHxdOGqQ5&X-Amz-Signature=c84d0af5b99278a98a76c982ccdb92cc80caf5c88ce2591875d8aee5e76192f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNZKYI6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGahDU9C%2BYCdbs4HayXwyAmUIhPgd2j%2FcuGP70TUBfPYAiEApU2By4cxOFfmPWq6KPHzBsJeljdNP4x%2FbXLnm3vgZzsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDARArMUeN11ERd3NcCrcA9vK8TfPaZnsuGxBv7n3LRRp3pr7xjUXI0sfwwmArvAs9DoFXm1HrpctFORauvR46RdemiTWG%2Ba%2FUnKS8zD33Lpob2jR0nEi9fP4LzkjOP4Deh8Gji6MyKFDbQmovXD4N1whG4m2duabODCCd96foO1fiCKOb7%2BIAoSKXtvJB1HHp2GiT6iWTLy3pxzlXHShmBMPSbrdVcgt2zXxJudoIOttRITRCsfbe0rbtwUzCJq6L2RZj2VvODh%2Ff1LD65sClJ%2Fm9b3oQ8AhOtZd5G3KyfTedW5rww7leIKrByG4st%2Br1kaBrVK3xYJz1nzmfiQc4qM0dzfN3kBKABHy5jLFN2TSI5ByHTmg5OAzroKiD8phqS4cnI5Q%2FTY9b2yADw30YRqrmuX%2B3%2F07wOQqzy5CL5O5nkQoY7S98zYjcjMIQGccmDMkuD0SNMwZNk1b5LBn56QDx7MwZULFRHBzZrp2hKprXdc0HWhJFwN%2FtTPpHEG8Uj7t2huY4iGYYjJza%2B2Tur%2FiyfVWYJaEJ%2Frf99gjE6fpvQAc567Io4Vb05tziYWeUrZr9bs1J16eCy8gQUI3p2ozKT2DgZKJPHDLJKjSsskFI5PKOIrsT39zzj0mNdMoH02Uv5k4zarX33MEML%2BM%2BcQGOqUBJLIeddQnOBN8tXxF%2FBUJuKoTU2VGeagpMNy8wndVelbiAV3GTOB0Or6IEmdpudxyWYVPV1leiOpwx%2B%2BHP6wW4uSxhKz15RG%2BkgkyK28lUZtpxzFRVyzryscAU9x59FY1%2BId1iJDb35FmCzrbmnpUVdFBO8OnVfOMacjvvYWm9d%2BBmjpzf9zBoibZR9Bivvj71DSNx2UX6ML2LGvgIPc%2BBPGKEq1W&X-Amz-Signature=ac814dd19a5f2626201490f21f3606462979f70203c475f7c777c1c42b6a4682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA3JYIPH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHrVPOlWL1K%2BuLYJfSbdgSaiXohw%2FjLuY1sJFC%2FAEUJnAiEAvVR9sZ7mYPB8Pkm3MHWmmwzNsbUo0jZO8gBAo%2B2cTe8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDN1vamcOxZZTFqqIXSrcA6mVv9BqG4eoSJxmEgYJmBgSZnaNT%2FEtMvk%2FSbClA9ny%2FthTW3jLJ4a2w90veGE0vR2y41%2B2SFtcjca6oGv1RK5vIprXq9BSHHeUPCy1N3oaQrvN5WigtDDO6zUaDagtsM6ceDnUM7PuxQ%2BOZzGeUdVFJWzm0RBbiuSjRVTK2CWac38iooaBj8jzPl3k282rzWIarskvVSsggKNTe%2BgZlkPjvH4zdP0A5MM7ZCbLBKGeoJDT6%2FFFBnOLAWkOVOhsppAPoBprNqJ39fN4bMD%2BZJvBvwvhNM1nDFfFJmkLD%2FL4vwPl%2BnUs85RCuw6MsLr2C%2BB18eWLjSAcQRtYYTFPC9LoWhH7wkAgRMm%2F0zZqwKAaSaCz7d4x9pyL%2Bsm2wB9tEGZqwo1EKhvK1WoF%2FhlNGl9fU1%2F4PpE8c5hwZKNWh3P5z%2FhVxpjOtM0owrsr%2BPxJEgEQAyobUJ0ohWRXhmQkXzFdllEGt%2FLXw2WZmMUS7E%2BwE59DCBYT5A1tBtxuSyBx8hkVmgK8X2FMiFnJlwpAdp6MWmCzyI9dx8qTcMsR2a2nsEdGm8d%2FZBfQm1mlOBR5td4ArEwtUtaFMB7SjqyJkMQfkNxk5Mei4NfKp43dfRWHemylGYCWxlh3BR08MP2M%2BcQGOqUBa5jS8Hn4Bmb38w0qiC2%2BdOWevV6ts1RXUD%2FJBtTOAxotWf3fKbpNvskGLNjvBKdvuWMjiGLJv7aDrSO4QmhG%2B4HKFUqjGHHOw6rRRAIj7hTO0LZad3xXlITuNqKN6RxNi%2BSbYKPWO5X6QqpCFEk%2FhyLSfhFCQBOhnjpGRmCH5XHxkrSaPowgJXM%2BmRPcpAkXIBHNspCuyrVDCN%2BI87z5TvzRTBAw&X-Amz-Signature=00cd1ce93398cdd3376ff603f01fbba93df5a7f23514c55394f0c91c73517bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNZKYI6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGahDU9C%2BYCdbs4HayXwyAmUIhPgd2j%2FcuGP70TUBfPYAiEApU2By4cxOFfmPWq6KPHzBsJeljdNP4x%2FbXLnm3vgZzsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDARArMUeN11ERd3NcCrcA9vK8TfPaZnsuGxBv7n3LRRp3pr7xjUXI0sfwwmArvAs9DoFXm1HrpctFORauvR46RdemiTWG%2Ba%2FUnKS8zD33Lpob2jR0nEi9fP4LzkjOP4Deh8Gji6MyKFDbQmovXD4N1whG4m2duabODCCd96foO1fiCKOb7%2BIAoSKXtvJB1HHp2GiT6iWTLy3pxzlXHShmBMPSbrdVcgt2zXxJudoIOttRITRCsfbe0rbtwUzCJq6L2RZj2VvODh%2Ff1LD65sClJ%2Fm9b3oQ8AhOtZd5G3KyfTedW5rww7leIKrByG4st%2Br1kaBrVK3xYJz1nzmfiQc4qM0dzfN3kBKABHy5jLFN2TSI5ByHTmg5OAzroKiD8phqS4cnI5Q%2FTY9b2yADw30YRqrmuX%2B3%2F07wOQqzy5CL5O5nkQoY7S98zYjcjMIQGccmDMkuD0SNMwZNk1b5LBn56QDx7MwZULFRHBzZrp2hKprXdc0HWhJFwN%2FtTPpHEG8Uj7t2huY4iGYYjJza%2B2Tur%2FiyfVWYJaEJ%2Frf99gjE6fpvQAc567Io4Vb05tziYWeUrZr9bs1J16eCy8gQUI3p2ozKT2DgZKJPHDLJKjSsskFI5PKOIrsT39zzj0mNdMoH02Uv5k4zarX33MEML%2BM%2BcQGOqUBJLIeddQnOBN8tXxF%2FBUJuKoTU2VGeagpMNy8wndVelbiAV3GTOB0Or6IEmdpudxyWYVPV1leiOpwx%2B%2BHP6wW4uSxhKz15RG%2BkgkyK28lUZtpxzFRVyzryscAU9x59FY1%2BId1iJDb35FmCzrbmnpUVdFBO8OnVfOMacjvvYWm9d%2BBmjpzf9zBoibZR9Bivvj71DSNx2UX6ML2LGvgIPc%2BBPGKEq1W&X-Amz-Signature=a663b49c226bcd604bd809cc981db1415171f53690a9e1010f74e6bd3e5feef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPCTUK7D%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDh3QrGwcCeLX4b81teootgXGW1So%2B3P8if8vTc48TBXwIgH7bPNZ9FJKH4YXB2IOdkGkoXZ3QaHCYZZa9YWz7%2Bf14q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDEKfH1cM1aJRXjqN%2FSrcA1hKpagj5NfBPWwAP3U8K5%2B2a95yzSUEPhoallgjDV97t5LyKr4O3uY9BFPzq4xwEhgUQ0uPl%2BLE5YHKVb3DdYxJqZ4oQwzTNSIwKaLqJqftDw4D4rfYNidJzn5PIAX91VlAd%2BbQfa1Bz2MKebQPAOBTmP6iejh7mZtMhBDfMJOUzWOAS0kmRYN0RUbVdGIMdbOkUvu9%2F38TGfbVvbbyYFG0mKR2GLZUbLqkytBQeZqkT4yOlEfZY11qHhPM6400cBNQSvyZ%2BQ4kMwCE7rsQoBvKSoAqLHR1G8pqNKW%2BEf8%2Fkyqeo0%2Bhnnoa1YkS8f%2FOq0VgB%2FNMbuqtqPJETJmGDSIQanxcxX%2ByhCRUi3TMMf3UUXLene6KSfZ77gRs8kfIYgXslczuivqhN82C8HNCyIgPwc6zk7OYml8oZUxfVNXMmxTfCsTN4I7VRvEM%2BN%2BKj4qWqa350SMRg6Nhj%2BbXuGIwwWgrloVTeiHNO6q8dJy%2FivfQe1yHVkn6HKuZ2yxjJ%2B8%2BG6B0D%2BEQgXNdmTnSGpw%2Ffzmudk29%2FULYl5k43YIoGGVcCSAJnnHWP51HBJbOiERi6L2I7RXjBs6W9tckolGYt6aYX43nY30h%2FEC8%2FDjtaBZbcOc3ogyBJa0vMLiN%2BcQGOqUBOJtXUedxzJF25%2FIn5Ozp8TTDfdNFxgDtPgl8zb3ayJf2Jblh19o%2BCggUglM0T47gZig26gpl6WZNA8GsmL3ORnG6Az%2BL4pAdQeupklgpoxO63rLK6B5LFymlCNWXiwinl%2BNfl7eWq632LNiafxpIOoOLjySN0WEYEitDjWSYNN7sPBPJfm6jFzVyjBa4YKaj94f8sDkDiA4T7I3kvBMDp2rZZqTx&X-Amz-Signature=83bbd30265c43778e7cd8ab4fa1c7b83ca68a2be33921a059c6dabb56103c2b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWKAYK4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDdqvuOl9tzARw4A2BXNAS3r%2B7%2Bk6AFrbsz7FidIw80TQIgdvezqxekLEL6XQQlma1iVC2%2BRMSTUbfjuDXJkV%2B%2FO2Uq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFRZ5yVO9l%2FkVGtFESrcA9GRU%2F9VOYKOewJIDw0WQbPwlwMWN5rOaHBeA1vfA9o5vRTcqSk8xZLIvSB5MEBvOuGFScGgrfIrstYFYUESuHdWI0yGyZbYLEM1X8bpy4kF8khzWM5WwCGZRQNYtlpqd8ijN%2FkLQh2NAQpUhCVAtiB79vwdupoOsJGG7AtAxodQgqae4hmg3kQfwCwTKLKKJAS2j36d4PIItpW6Xd5jxGmWQgDoOri8VGjDlGIuPBnj2GiwAT7xaEqlxlwxZ0CHIhKH5glYABtKy6kb6iRGsg%2BiQiRU6WNI9vEHT0mDLkC6Miv85h%2FX%2FrkiE3aqqcf1dbHvu3GgTkpQefb9P7TsXjPDA4%2F%2FF59%2FIngyqINyjmcbKtWReV0joYUzpRurX%2BXUG9EeYsXk5glSZlec21IoY9pgXGHFv%2FbWBurhoYxaRekAqlO3UGgbYDF03C7Gjwds2G2MQo%2FSLJBzkXlLjjEp8V0A3hQwJR9ydJ45xj2gawnhgRE7Nw5mY44jqNI20JpX53D1F14XvmW%2FysRq%2BuSu9fKCIhgH0AXODNsI4OarkFog68DWiZAo66xKXPQi%2BMTR3kl561mLhm5MgBpXPw0M%2FlzYOGnHockKmp%2Bmvaezx%2BR%2BrqiqpzKNRi5PDxvLMLeM%2BcQGOqUBZzozAO2e6FY5xAqeIuePqWk4P%2FeoZqsCsy7XMrl5n24NOoeTfNEpjCA9NXsbcBzybxQC2OHxJP%2F66S2oWi28lvq27r3X8EdC3shvygwon8gZB98y2Qza2ZLY2LPsBv7jOhrBG9A69qlP0tIw594TrZWpXCfoPOF8r6N%2BAizLJzE9sSU0KW54HWlmqFRSDdhX02vziuLgQcQzfvWVzYYFcBieIA0o&X-Amz-Signature=e478d9e6388ef5b4201d12e4d12fcfd2796f00f8b9f20d65059dd127ff46cfa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TZTIG3L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDCi3h4jrNUB1e%2Bp7HUvTMYnbkyIJWSuXQ5FbjFJN24pwIhAPUoAv5g9Rc7WNiEpNvm5Gtqr%2Fl7KIdeeoQEwYKXssNNKv8DCE4QABoMNjM3NDIzMTgzODA1Igyisey67MKU6bjA%2Ff8q3AMLfv6kFlWolMWtDAMoYEl6a0sPpr12%2FJActXb8EE%2Fd1vJXy6jbUoxAx9BPbpMA5l3pNUp9Q7M7uhC2D7y6OjoBhcQv9LbO1VYVL4RSMDRJ7hk6ePPIHKkN2B0nmeF0EzDCQvQd1UGPIbssiPOqVK%2Fyk1KT9RNLB58LukMvQ2bAAaXcVncZMkX1yJ6XneRkW4wVEKJyfEWVoLNCgARaFkN%2BG2HVBAAxb4NbmnR8zg9kGHheMKCXnFQ0J%2Fg4yVkUGqHdtz7%2BqXfNb4aqSpi0%2FMjrRTiB%2BFRYLW46Cw5N84GNYb4NYp6hVAuZVfoLF%2BA13lkS3ob5d%2FX%2Fpx5OnQG6FRVB5BZm4JZ0HskYqiiDj4BRkN7LsCQPOQYwOORr%2FRdBDZ7PQ4OPqhrvwTZISdy1Hu7ePzB6iIl4B7zL6B2pwdx6V7E1pdf5a5s6uNRnwPZczaJ3nCitdzSdlu%2FwOQWXmYqmsmSPFX2uQpx2P8sptP9W5v44UFFzatzk%2FpApAIHDjbXXxla8Pk4LLsfVNyD%2FiD06ZSMIcdBupROOjf4O4P4%2FcpwbRPi5LiLODIPvHRnZImALUoA9t5ZgVyeStFFwFqv0jtk25Li92noVRL7Vvmw0Izp%2FWLmsqsmice5uuTC2jfnEBjqkAZKzVDEqPe%2F9FS%2FKMCVoY3tB48kyFPQQKvxOSCF6jxhSWLXB6sxJ0S35vDGKzjxcCVd1WHa3TmprYqNm7awU0qiYznkS9uDarBHgYW26iCuQdIZt1dpSjxTi9SqidNlmtTeHkcnHnIvqG4MnPiI2lPScxjCofbEZtxGXTYwmj1akIIhu6BfDChisf0smPFXRrnHknP730BXyYMwHBasrqN6qAlYT&X-Amz-Signature=08bc513feacf7a41e238691bb9628d229161c29d1691a966f9f8b157c0f7d2d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEUA72M3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCSIuRzQdP%2BAunjpbs9danva1cKltCb4a%2B46kmKxdcYSgIgAWZep%2BNNxgU5WjQC8cUElNDQM8geMk0SDGoFP3jKxLgq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPt1XU3r0eXdvN088ircA%2BUZBwKQwCQr0fSXErtsWOUsUuSPvY1SY5hSxHqwdVUydqA5OepcSPmlBET9ve1u9DPmpxRxxwq08QXcop5CJ%2BjGIN9tvgBUnv%2BpFKPioOohMNFHj4Q5Hb49PCButABO0W5Liva29Lfsr0hH%2BFr%2B%2FbT1LdWGNC9HCRx0B4Lll8pop8oDp4KNShGFyyfXkVB7kN6aXYJyVfB90mAyM5zbn9%2BLoGl6rxE6GHptuUQVuXtY0DxUH0%2FUgLn2mseZPtd%2BP8JFtuwnMZ7KmUZ6F6u1LASiWrdAQe4xCqJJReDLDzRlHoHZqir73X3i%2BRkhbtP%2FFWxiFWwJVm5ilQhxrZG0qNNP%2FS3wSOF4ZWzo1yOFRIGmZb9JQfkLu4hlZb25Hrrn2983drnHuCRX5vjTv%2F3hhHDrI2FbWbJfFXC1ruU5b%2FtEqcJ7K9wR%2BsSkl32gQ3RAJ4kJQtTbdIqq7%2BGlazcRwg3A43DUFpOZY2DqixhDdziOeLWPvoSwiy0bClGnPgbPWmAj49i1JsWzthZCGFS1m85xH7rnpLTmMV6jRWHIrHed1iXAwdxdnxzYMBKSgnDVnx9nLDB0yNKQ4ONHpPK45UzxGfJRcA3PZ1pZAY%2FsgVUmvCzIN94xElboDbtzMM2N%2BcQGOqUBU18pKUw%2BScVva%2BDSKbIqdLkTeI9D6gFTnbPiWhknj1M01YKiPGJS39dsE8XwcY0zGW3eAXR7XqG7p8Gwo3eKbhA2lWhn0w7%2BdKHfDhGjEuDJM8CRJDUXE2%2BjyjF359Hm6C%2BYfbE49uufYilGyZaophlrDpZTHrlKz5Fi07T7wsEmO%2FuM4S0SWGo8N%2BPbf%2Fv0Z5E2jI0EIvH9uQtPxwzkFtydpgur&X-Amz-Signature=63c3d55ea33fa30e22919b9f875810da7afbe4576176ebd4750125c3cc368748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ABRN2G2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBkK3eoQATRNlcpEor6d65DzagXSZfsIqrwSR%2F04KpW5AiEAjQpFsLtIFoMurD9XTX186HXqRKNPkVr%2BRF4%2FIxo3gCgq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDBPnvm6t6e5Nxf3eRircAxcBbu30LTfV17iLaZfKqKOI3t%2FTn9ZpfGQn87EdSTAMF88c%2BV9VZXC1g%2BHZpu3LbI2RgsIvYUcU853Zrj610ke1my0g%2B0Qk5v%2FFTXEJ2xeUgLorM4BtgEQEaDqkLWNkGJLAbZN28Tp6ee%2B7KFB69ErwBV0gqQxFC1pcJY1lzbJFolqdWz5lPRw%2BKQzQjyAk1UmVHwTWR%2Bi7ig7H88eAu1CnjSewklF%2B%2Fi%2BRy4oFV2akoyhhXYyihfchaZ6%2BMwxu37lsjaQyI7t9uy4gcBhXXng4nhCw2Bdoa0G5HqtDtWX6jQSwKTZnYTGpY%2F32mNu4UrIyWAs%2FhzrUboLbgM%2F74HB6wpNfogg9Fcr9nk1xUQTkWG8e1hwi%2BgoocRFhmCVkXIKGhbqSjzEam2gFkDdDBxlfyv1q0ZonFWfq9UIp%2F9G%2FrsGSCSQ6OrX%2FyxHZy11xLd5yXT%2FBRwDbLVY7AYt%2FeW5Xoli48lgAiQBRjPeaW5EJTeaNyoSCC7058dEAx7pwCfIz5xwzLsqPlYxFSTA%2BDmPq3Za8trEhsEK6vH5oYu8BwKaECavIrT8N5BXcz91ZilohHOPzbcgv3yflxNOzN4jtzM2Umzao3BFdP26N30RzF%2BdkrQRPwcVTHNiIMImN%2BcQGOqUBrYAi2xT12il8DCuohRvQSa9MzKDsYbqgm%2Bx4Lo28EnEB2FTaK1qYg58oMGKvyknYvP2eHUJEM%2BSN6JhgDiz5ttRbnUm2SFHAWDgYQVYk%2FbHMMlkgZu%2FKvuJKVUlzUR%2BQYELcVJi7JyjSe0eJX2gk1CseQQGzvJnJWd%2BTO2voLbzATorPK0WhfBkD8UlVuE%2FGhreL%2BKiIzLR8QFv58E9%2Fmsik3UoA&X-Amz-Signature=0b901cf4491d356108af65e5e145ecd5decaef71b33fe7577aa217e90418da93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNZKYI6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGahDU9C%2BYCdbs4HayXwyAmUIhPgd2j%2FcuGP70TUBfPYAiEApU2By4cxOFfmPWq6KPHzBsJeljdNP4x%2FbXLnm3vgZzsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDARArMUeN11ERd3NcCrcA9vK8TfPaZnsuGxBv7n3LRRp3pr7xjUXI0sfwwmArvAs9DoFXm1HrpctFORauvR46RdemiTWG%2Ba%2FUnKS8zD33Lpob2jR0nEi9fP4LzkjOP4Deh8Gji6MyKFDbQmovXD4N1whG4m2duabODCCd96foO1fiCKOb7%2BIAoSKXtvJB1HHp2GiT6iWTLy3pxzlXHShmBMPSbrdVcgt2zXxJudoIOttRITRCsfbe0rbtwUzCJq6L2RZj2VvODh%2Ff1LD65sClJ%2Fm9b3oQ8AhOtZd5G3KyfTedW5rww7leIKrByG4st%2Br1kaBrVK3xYJz1nzmfiQc4qM0dzfN3kBKABHy5jLFN2TSI5ByHTmg5OAzroKiD8phqS4cnI5Q%2FTY9b2yADw30YRqrmuX%2B3%2F07wOQqzy5CL5O5nkQoY7S98zYjcjMIQGccmDMkuD0SNMwZNk1b5LBn56QDx7MwZULFRHBzZrp2hKprXdc0HWhJFwN%2FtTPpHEG8Uj7t2huY4iGYYjJza%2B2Tur%2FiyfVWYJaEJ%2Frf99gjE6fpvQAc567Io4Vb05tziYWeUrZr9bs1J16eCy8gQUI3p2ozKT2DgZKJPHDLJKjSsskFI5PKOIrsT39zzj0mNdMoH02Uv5k4zarX33MEML%2BM%2BcQGOqUBJLIeddQnOBN8tXxF%2FBUJuKoTU2VGeagpMNy8wndVelbiAV3GTOB0Or6IEmdpudxyWYVPV1leiOpwx%2B%2BHP6wW4uSxhKz15RG%2BkgkyK28lUZtpxzFRVyzryscAU9x59FY1%2BId1iJDb35FmCzrbmnpUVdFBO8OnVfOMacjvvYWm9d%2BBmjpzf9zBoibZR9Bivvj71DSNx2UX6ML2LGvgIPc%2BBPGKEq1W&X-Amz-Signature=fcc092e50d3731054f02be213d7d60b0676bcf5b1833b88d1f1d07e956395bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNZKYI6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGahDU9C%2BYCdbs4HayXwyAmUIhPgd2j%2FcuGP70TUBfPYAiEApU2By4cxOFfmPWq6KPHzBsJeljdNP4x%2FbXLnm3vgZzsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDARArMUeN11ERd3NcCrcA9vK8TfPaZnsuGxBv7n3LRRp3pr7xjUXI0sfwwmArvAs9DoFXm1HrpctFORauvR46RdemiTWG%2Ba%2FUnKS8zD33Lpob2jR0nEi9fP4LzkjOP4Deh8Gji6MyKFDbQmovXD4N1whG4m2duabODCCd96foO1fiCKOb7%2BIAoSKXtvJB1HHp2GiT6iWTLy3pxzlXHShmBMPSbrdVcgt2zXxJudoIOttRITRCsfbe0rbtwUzCJq6L2RZj2VvODh%2Ff1LD65sClJ%2Fm9b3oQ8AhOtZd5G3KyfTedW5rww7leIKrByG4st%2Br1kaBrVK3xYJz1nzmfiQc4qM0dzfN3kBKABHy5jLFN2TSI5ByHTmg5OAzroKiD8phqS4cnI5Q%2FTY9b2yADw30YRqrmuX%2B3%2F07wOQqzy5CL5O5nkQoY7S98zYjcjMIQGccmDMkuD0SNMwZNk1b5LBn56QDx7MwZULFRHBzZrp2hKprXdc0HWhJFwN%2FtTPpHEG8Uj7t2huY4iGYYjJza%2B2Tur%2FiyfVWYJaEJ%2Frf99gjE6fpvQAc567Io4Vb05tziYWeUrZr9bs1J16eCy8gQUI3p2ozKT2DgZKJPHDLJKjSsskFI5PKOIrsT39zzj0mNdMoH02Uv5k4zarX33MEML%2BM%2BcQGOqUBJLIeddQnOBN8tXxF%2FBUJuKoTU2VGeagpMNy8wndVelbiAV3GTOB0Or6IEmdpudxyWYVPV1leiOpwx%2B%2BHP6wW4uSxhKz15RG%2BkgkyK28lUZtpxzFRVyzryscAU9x59FY1%2BId1iJDb35FmCzrbmnpUVdFBO8OnVfOMacjvvYWm9d%2BBmjpzf9zBoibZR9Bivvj71DSNx2UX6ML2LGvgIPc%2BBPGKEq1W&X-Amz-Signature=849019b05e11aec88200788c7d71f0fa1e6000ede60d6472b3486725dc039a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RE5EU4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDaavxUUTeCzp1afYK%2F8%2BMpTaJGkHqMlfqj5Tc1yJJkEAIgJ3t41WpUuQkf93QpQjgPIwHADq8IbE%2BK3UoSwKGtf3Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDK3ym8kwyP9QymZy5CrcA1RciM%2B6YXpTby8vARUh1s%2BAVJLSzVokWeU59xarr4uqP7t1pqdhF2ii%2FpyURf7kPYHomhzphBWNFkYxYWZDqjWRIlfd36hOzNC6T6Tlmw1RF5stNW0yPsPGV0%2BL0mo3oJUI4pul1yLOH%2BydBSgIFxxIKFmBJWCiCa%2Benyzvh2I0ojX7V%2Bzg91MUYXMP1u2Pxzh37uX%2Ff2Xnmzd9h6sOceE9DhwbN82QQCaAi7kitKaQXTWZ%2ByOGsMzU%2BPKJnimmNuDvEeWJXOteFY8aGe9%2BQf4TPo5wothI%2B8XtbVclP7oZvg0fktQJgAwaNNXE3j2RpB39tWtJFCuiLUP0yPJWMHaLV59lW3qkwC226fvip694%2Fgto68dMy4dB7fCzYIuT4kz7Cgr3s8A5YVhp%2F3zg4XWKuDj%2BVxit4Nj4fTEVmuEEL80zdgl65NNEcroPIClpz%2FbmXesKFsNOmn8JNo7yO2%2FazrMm0wsNW0ruR4ERg%2BzZg0RfkpblkeyLCF2x6hUyXMJRi7S9eDusm6kqdCxMNQLuforA4en8Zt9iQAD2wYQG%2Bl18KyrH7IDbRdLkeh9c2ghpKyHsw47TgjVTExipmaZu6lX5MtGq%2FkD7RCCXE0xvpCKrNjNfPIhXgSRYMJGN%2BcQGOqUBZRXVkYl%2FEBEunLFWj9NwMKRO7LxJqAlO3h1zUXeFCpqY%2Bks1dAxfCWBor2O%2B0kfUHSm7IugI4rgDg90WhKlOFbXYrSqelyQ7UbVmMD%2Fbrq%2FwDHLyAgJubuDFcpRudLjbje%2BNLhQ14sMhCMMmNcsj7KwwizdFmne5Tevgs4InvjFgCa%2FSdfD9yQxNq0vI%2B2YOhrXHKSch6KAwey3rRtQMImaGoFVC&X-Amz-Signature=123b4f8c9cef232c80c84efbd7efd0fd921a2c2e0e63fa33b29236756e537605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RE5EU4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDaavxUUTeCzp1afYK%2F8%2BMpTaJGkHqMlfqj5Tc1yJJkEAIgJ3t41WpUuQkf93QpQjgPIwHADq8IbE%2BK3UoSwKGtf3Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDK3ym8kwyP9QymZy5CrcA1RciM%2B6YXpTby8vARUh1s%2BAVJLSzVokWeU59xarr4uqP7t1pqdhF2ii%2FpyURf7kPYHomhzphBWNFkYxYWZDqjWRIlfd36hOzNC6T6Tlmw1RF5stNW0yPsPGV0%2BL0mo3oJUI4pul1yLOH%2BydBSgIFxxIKFmBJWCiCa%2Benyzvh2I0ojX7V%2Bzg91MUYXMP1u2Pxzh37uX%2Ff2Xnmzd9h6sOceE9DhwbN82QQCaAi7kitKaQXTWZ%2ByOGsMzU%2BPKJnimmNuDvEeWJXOteFY8aGe9%2BQf4TPo5wothI%2B8XtbVclP7oZvg0fktQJgAwaNNXE3j2RpB39tWtJFCuiLUP0yPJWMHaLV59lW3qkwC226fvip694%2Fgto68dMy4dB7fCzYIuT4kz7Cgr3s8A5YVhp%2F3zg4XWKuDj%2BVxit4Nj4fTEVmuEEL80zdgl65NNEcroPIClpz%2FbmXesKFsNOmn8JNo7yO2%2FazrMm0wsNW0ruR4ERg%2BzZg0RfkpblkeyLCF2x6hUyXMJRi7S9eDusm6kqdCxMNQLuforA4en8Zt9iQAD2wYQG%2Bl18KyrH7IDbRdLkeh9c2ghpKyHsw47TgjVTExipmaZu6lX5MtGq%2FkD7RCCXE0xvpCKrNjNfPIhXgSRYMJGN%2BcQGOqUBZRXVkYl%2FEBEunLFWj9NwMKRO7LxJqAlO3h1zUXeFCpqY%2Bks1dAxfCWBor2O%2B0kfUHSm7IugI4rgDg90WhKlOFbXYrSqelyQ7UbVmMD%2Fbrq%2FwDHLyAgJubuDFcpRudLjbje%2BNLhQ14sMhCMMmNcsj7KwwizdFmne5Tevgs4InvjFgCa%2FSdfD9yQxNq0vI%2B2YOhrXHKSch6KAwey3rRtQMImaGoFVC&X-Amz-Signature=ace0bf0154166b17b515d9556b9e9427902e87d4899a2bd3a38c02ca04490f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RE5EU4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDaavxUUTeCzp1afYK%2F8%2BMpTaJGkHqMlfqj5Tc1yJJkEAIgJ3t41WpUuQkf93QpQjgPIwHADq8IbE%2BK3UoSwKGtf3Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDK3ym8kwyP9QymZy5CrcA1RciM%2B6YXpTby8vARUh1s%2BAVJLSzVokWeU59xarr4uqP7t1pqdhF2ii%2FpyURf7kPYHomhzphBWNFkYxYWZDqjWRIlfd36hOzNC6T6Tlmw1RF5stNW0yPsPGV0%2BL0mo3oJUI4pul1yLOH%2BydBSgIFxxIKFmBJWCiCa%2Benyzvh2I0ojX7V%2Bzg91MUYXMP1u2Pxzh37uX%2Ff2Xnmzd9h6sOceE9DhwbN82QQCaAi7kitKaQXTWZ%2ByOGsMzU%2BPKJnimmNuDvEeWJXOteFY8aGe9%2BQf4TPo5wothI%2B8XtbVclP7oZvg0fktQJgAwaNNXE3j2RpB39tWtJFCuiLUP0yPJWMHaLV59lW3qkwC226fvip694%2Fgto68dMy4dB7fCzYIuT4kz7Cgr3s8A5YVhp%2F3zg4XWKuDj%2BVxit4Nj4fTEVmuEEL80zdgl65NNEcroPIClpz%2FbmXesKFsNOmn8JNo7yO2%2FazrMm0wsNW0ruR4ERg%2BzZg0RfkpblkeyLCF2x6hUyXMJRi7S9eDusm6kqdCxMNQLuforA4en8Zt9iQAD2wYQG%2Bl18KyrH7IDbRdLkeh9c2ghpKyHsw47TgjVTExipmaZu6lX5MtGq%2FkD7RCCXE0xvpCKrNjNfPIhXgSRYMJGN%2BcQGOqUBZRXVkYl%2FEBEunLFWj9NwMKRO7LxJqAlO3h1zUXeFCpqY%2Bks1dAxfCWBor2O%2B0kfUHSm7IugI4rgDg90WhKlOFbXYrSqelyQ7UbVmMD%2Fbrq%2FwDHLyAgJubuDFcpRudLjbje%2BNLhQ14sMhCMMmNcsj7KwwizdFmne5Tevgs4InvjFgCa%2FSdfD9yQxNq0vI%2B2YOhrXHKSch6KAwey3rRtQMImaGoFVC&X-Amz-Signature=20260b404dc64e8e33377e5c59d9069856b04cbb9c9899601af65155065ed1f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RE5EU4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDaavxUUTeCzp1afYK%2F8%2BMpTaJGkHqMlfqj5Tc1yJJkEAIgJ3t41WpUuQkf93QpQjgPIwHADq8IbE%2BK3UoSwKGtf3Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDK3ym8kwyP9QymZy5CrcA1RciM%2B6YXpTby8vARUh1s%2BAVJLSzVokWeU59xarr4uqP7t1pqdhF2ii%2FpyURf7kPYHomhzphBWNFkYxYWZDqjWRIlfd36hOzNC6T6Tlmw1RF5stNW0yPsPGV0%2BL0mo3oJUI4pul1yLOH%2BydBSgIFxxIKFmBJWCiCa%2Benyzvh2I0ojX7V%2Bzg91MUYXMP1u2Pxzh37uX%2Ff2Xnmzd9h6sOceE9DhwbN82QQCaAi7kitKaQXTWZ%2ByOGsMzU%2BPKJnimmNuDvEeWJXOteFY8aGe9%2BQf4TPo5wothI%2B8XtbVclP7oZvg0fktQJgAwaNNXE3j2RpB39tWtJFCuiLUP0yPJWMHaLV59lW3qkwC226fvip694%2Fgto68dMy4dB7fCzYIuT4kz7Cgr3s8A5YVhp%2F3zg4XWKuDj%2BVxit4Nj4fTEVmuEEL80zdgl65NNEcroPIClpz%2FbmXesKFsNOmn8JNo7yO2%2FazrMm0wsNW0ruR4ERg%2BzZg0RfkpblkeyLCF2x6hUyXMJRi7S9eDusm6kqdCxMNQLuforA4en8Zt9iQAD2wYQG%2Bl18KyrH7IDbRdLkeh9c2ghpKyHsw47TgjVTExipmaZu6lX5MtGq%2FkD7RCCXE0xvpCKrNjNfPIhXgSRYMJGN%2BcQGOqUBZRXVkYl%2FEBEunLFWj9NwMKRO7LxJqAlO3h1zUXeFCpqY%2Bks1dAxfCWBor2O%2B0kfUHSm7IugI4rgDg90WhKlOFbXYrSqelyQ7UbVmMD%2Fbrq%2FwDHLyAgJubuDFcpRudLjbje%2BNLhQ14sMhCMMmNcsj7KwwizdFmne5Tevgs4InvjFgCa%2FSdfD9yQxNq0vI%2B2YOhrXHKSch6KAwey3rRtQMImaGoFVC&X-Amz-Signature=2852964db6290f39d67b749d318490ccea9be34eddcddf67ed0c9d22407ede7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RE5EU4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDaavxUUTeCzp1afYK%2F8%2BMpTaJGkHqMlfqj5Tc1yJJkEAIgJ3t41WpUuQkf93QpQjgPIwHADq8IbE%2BK3UoSwKGtf3Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDK3ym8kwyP9QymZy5CrcA1RciM%2B6YXpTby8vARUh1s%2BAVJLSzVokWeU59xarr4uqP7t1pqdhF2ii%2FpyURf7kPYHomhzphBWNFkYxYWZDqjWRIlfd36hOzNC6T6Tlmw1RF5stNW0yPsPGV0%2BL0mo3oJUI4pul1yLOH%2BydBSgIFxxIKFmBJWCiCa%2Benyzvh2I0ojX7V%2Bzg91MUYXMP1u2Pxzh37uX%2Ff2Xnmzd9h6sOceE9DhwbN82QQCaAi7kitKaQXTWZ%2ByOGsMzU%2BPKJnimmNuDvEeWJXOteFY8aGe9%2BQf4TPo5wothI%2B8XtbVclP7oZvg0fktQJgAwaNNXE3j2RpB39tWtJFCuiLUP0yPJWMHaLV59lW3qkwC226fvip694%2Fgto68dMy4dB7fCzYIuT4kz7Cgr3s8A5YVhp%2F3zg4XWKuDj%2BVxit4Nj4fTEVmuEEL80zdgl65NNEcroPIClpz%2FbmXesKFsNOmn8JNo7yO2%2FazrMm0wsNW0ruR4ERg%2BzZg0RfkpblkeyLCF2x6hUyXMJRi7S9eDusm6kqdCxMNQLuforA4en8Zt9iQAD2wYQG%2Bl18KyrH7IDbRdLkeh9c2ghpKyHsw47TgjVTExipmaZu6lX5MtGq%2FkD7RCCXE0xvpCKrNjNfPIhXgSRYMJGN%2BcQGOqUBZRXVkYl%2FEBEunLFWj9NwMKRO7LxJqAlO3h1zUXeFCpqY%2Bks1dAxfCWBor2O%2B0kfUHSm7IugI4rgDg90WhKlOFbXYrSqelyQ7UbVmMD%2Fbrq%2FwDHLyAgJubuDFcpRudLjbje%2BNLhQ14sMhCMMmNcsj7KwwizdFmne5Tevgs4InvjFgCa%2FSdfD9yQxNq0vI%2B2YOhrXHKSch6KAwey3rRtQMImaGoFVC&X-Amz-Signature=a42d36404ffa1a932c995805d43b3f14d6ce08b1d95affd4da2fa717f2a2f8f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RE5EU4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDaavxUUTeCzp1afYK%2F8%2BMpTaJGkHqMlfqj5Tc1yJJkEAIgJ3t41WpUuQkf93QpQjgPIwHADq8IbE%2BK3UoSwKGtf3Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDK3ym8kwyP9QymZy5CrcA1RciM%2B6YXpTby8vARUh1s%2BAVJLSzVokWeU59xarr4uqP7t1pqdhF2ii%2FpyURf7kPYHomhzphBWNFkYxYWZDqjWRIlfd36hOzNC6T6Tlmw1RF5stNW0yPsPGV0%2BL0mo3oJUI4pul1yLOH%2BydBSgIFxxIKFmBJWCiCa%2Benyzvh2I0ojX7V%2Bzg91MUYXMP1u2Pxzh37uX%2Ff2Xnmzd9h6sOceE9DhwbN82QQCaAi7kitKaQXTWZ%2ByOGsMzU%2BPKJnimmNuDvEeWJXOteFY8aGe9%2BQf4TPo5wothI%2B8XtbVclP7oZvg0fktQJgAwaNNXE3j2RpB39tWtJFCuiLUP0yPJWMHaLV59lW3qkwC226fvip694%2Fgto68dMy4dB7fCzYIuT4kz7Cgr3s8A5YVhp%2F3zg4XWKuDj%2BVxit4Nj4fTEVmuEEL80zdgl65NNEcroPIClpz%2FbmXesKFsNOmn8JNo7yO2%2FazrMm0wsNW0ruR4ERg%2BzZg0RfkpblkeyLCF2x6hUyXMJRi7S9eDusm6kqdCxMNQLuforA4en8Zt9iQAD2wYQG%2Bl18KyrH7IDbRdLkeh9c2ghpKyHsw47TgjVTExipmaZu6lX5MtGq%2FkD7RCCXE0xvpCKrNjNfPIhXgSRYMJGN%2BcQGOqUBZRXVkYl%2FEBEunLFWj9NwMKRO7LxJqAlO3h1zUXeFCpqY%2Bks1dAxfCWBor2O%2B0kfUHSm7IugI4rgDg90WhKlOFbXYrSqelyQ7UbVmMD%2Fbrq%2FwDHLyAgJubuDFcpRudLjbje%2BNLhQ14sMhCMMmNcsj7KwwizdFmne5Tevgs4InvjFgCa%2FSdfD9yQxNq0vI%2B2YOhrXHKSch6KAwey3rRtQMImaGoFVC&X-Amz-Signature=c0c7686608f0cd9a7cb7cbbf56909167b460e3a07aec680d249bca373876b6a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RE5EU4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDaavxUUTeCzp1afYK%2F8%2BMpTaJGkHqMlfqj5Tc1yJJkEAIgJ3t41WpUuQkf93QpQjgPIwHADq8IbE%2BK3UoSwKGtf3Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDK3ym8kwyP9QymZy5CrcA1RciM%2B6YXpTby8vARUh1s%2BAVJLSzVokWeU59xarr4uqP7t1pqdhF2ii%2FpyURf7kPYHomhzphBWNFkYxYWZDqjWRIlfd36hOzNC6T6Tlmw1RF5stNW0yPsPGV0%2BL0mo3oJUI4pul1yLOH%2BydBSgIFxxIKFmBJWCiCa%2Benyzvh2I0ojX7V%2Bzg91MUYXMP1u2Pxzh37uX%2Ff2Xnmzd9h6sOceE9DhwbN82QQCaAi7kitKaQXTWZ%2ByOGsMzU%2BPKJnimmNuDvEeWJXOteFY8aGe9%2BQf4TPo5wothI%2B8XtbVclP7oZvg0fktQJgAwaNNXE3j2RpB39tWtJFCuiLUP0yPJWMHaLV59lW3qkwC226fvip694%2Fgto68dMy4dB7fCzYIuT4kz7Cgr3s8A5YVhp%2F3zg4XWKuDj%2BVxit4Nj4fTEVmuEEL80zdgl65NNEcroPIClpz%2FbmXesKFsNOmn8JNo7yO2%2FazrMm0wsNW0ruR4ERg%2BzZg0RfkpblkeyLCF2x6hUyXMJRi7S9eDusm6kqdCxMNQLuforA4en8Zt9iQAD2wYQG%2Bl18KyrH7IDbRdLkeh9c2ghpKyHsw47TgjVTExipmaZu6lX5MtGq%2FkD7RCCXE0xvpCKrNjNfPIhXgSRYMJGN%2BcQGOqUBZRXVkYl%2FEBEunLFWj9NwMKRO7LxJqAlO3h1zUXeFCpqY%2Bks1dAxfCWBor2O%2B0kfUHSm7IugI4rgDg90WhKlOFbXYrSqelyQ7UbVmMD%2Fbrq%2FwDHLyAgJubuDFcpRudLjbje%2BNLhQ14sMhCMMmNcsj7KwwizdFmne5Tevgs4InvjFgCa%2FSdfD9yQxNq0vI%2B2YOhrXHKSch6KAwey3rRtQMImaGoFVC&X-Amz-Signature=20260b404dc64e8e33377e5c59d9069856b04cbb9c9899601af65155065ed1f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RE5EU4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDaavxUUTeCzp1afYK%2F8%2BMpTaJGkHqMlfqj5Tc1yJJkEAIgJ3t41WpUuQkf93QpQjgPIwHADq8IbE%2BK3UoSwKGtf3Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDK3ym8kwyP9QymZy5CrcA1RciM%2B6YXpTby8vARUh1s%2BAVJLSzVokWeU59xarr4uqP7t1pqdhF2ii%2FpyURf7kPYHomhzphBWNFkYxYWZDqjWRIlfd36hOzNC6T6Tlmw1RF5stNW0yPsPGV0%2BL0mo3oJUI4pul1yLOH%2BydBSgIFxxIKFmBJWCiCa%2Benyzvh2I0ojX7V%2Bzg91MUYXMP1u2Pxzh37uX%2Ff2Xnmzd9h6sOceE9DhwbN82QQCaAi7kitKaQXTWZ%2ByOGsMzU%2BPKJnimmNuDvEeWJXOteFY8aGe9%2BQf4TPo5wothI%2B8XtbVclP7oZvg0fktQJgAwaNNXE3j2RpB39tWtJFCuiLUP0yPJWMHaLV59lW3qkwC226fvip694%2Fgto68dMy4dB7fCzYIuT4kz7Cgr3s8A5YVhp%2F3zg4XWKuDj%2BVxit4Nj4fTEVmuEEL80zdgl65NNEcroPIClpz%2FbmXesKFsNOmn8JNo7yO2%2FazrMm0wsNW0ruR4ERg%2BzZg0RfkpblkeyLCF2x6hUyXMJRi7S9eDusm6kqdCxMNQLuforA4en8Zt9iQAD2wYQG%2Bl18KyrH7IDbRdLkeh9c2ghpKyHsw47TgjVTExipmaZu6lX5MtGq%2FkD7RCCXE0xvpCKrNjNfPIhXgSRYMJGN%2BcQGOqUBZRXVkYl%2FEBEunLFWj9NwMKRO7LxJqAlO3h1zUXeFCpqY%2Bks1dAxfCWBor2O%2B0kfUHSm7IugI4rgDg90WhKlOFbXYrSqelyQ7UbVmMD%2Fbrq%2FwDHLyAgJubuDFcpRudLjbje%2BNLhQ14sMhCMMmNcsj7KwwizdFmne5Tevgs4InvjFgCa%2FSdfD9yQxNq0vI%2B2YOhrXHKSch6KAwey3rRtQMImaGoFVC&X-Amz-Signature=bec01435d189f7cc3d62b0f1ceb4133f55c58343edd1ecc8ac7f9db2531942e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RE5EU4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDaavxUUTeCzp1afYK%2F8%2BMpTaJGkHqMlfqj5Tc1yJJkEAIgJ3t41WpUuQkf93QpQjgPIwHADq8IbE%2BK3UoSwKGtf3Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDK3ym8kwyP9QymZy5CrcA1RciM%2B6YXpTby8vARUh1s%2BAVJLSzVokWeU59xarr4uqP7t1pqdhF2ii%2FpyURf7kPYHomhzphBWNFkYxYWZDqjWRIlfd36hOzNC6T6Tlmw1RF5stNW0yPsPGV0%2BL0mo3oJUI4pul1yLOH%2BydBSgIFxxIKFmBJWCiCa%2Benyzvh2I0ojX7V%2Bzg91MUYXMP1u2Pxzh37uX%2Ff2Xnmzd9h6sOceE9DhwbN82QQCaAi7kitKaQXTWZ%2ByOGsMzU%2BPKJnimmNuDvEeWJXOteFY8aGe9%2BQf4TPo5wothI%2B8XtbVclP7oZvg0fktQJgAwaNNXE3j2RpB39tWtJFCuiLUP0yPJWMHaLV59lW3qkwC226fvip694%2Fgto68dMy4dB7fCzYIuT4kz7Cgr3s8A5YVhp%2F3zg4XWKuDj%2BVxit4Nj4fTEVmuEEL80zdgl65NNEcroPIClpz%2FbmXesKFsNOmn8JNo7yO2%2FazrMm0wsNW0ruR4ERg%2BzZg0RfkpblkeyLCF2x6hUyXMJRi7S9eDusm6kqdCxMNQLuforA4en8Zt9iQAD2wYQG%2Bl18KyrH7IDbRdLkeh9c2ghpKyHsw47TgjVTExipmaZu6lX5MtGq%2FkD7RCCXE0xvpCKrNjNfPIhXgSRYMJGN%2BcQGOqUBZRXVkYl%2FEBEunLFWj9NwMKRO7LxJqAlO3h1zUXeFCpqY%2Bks1dAxfCWBor2O%2B0kfUHSm7IugI4rgDg90WhKlOFbXYrSqelyQ7UbVmMD%2Fbrq%2FwDHLyAgJubuDFcpRudLjbje%2BNLhQ14sMhCMMmNcsj7KwwizdFmne5Tevgs4InvjFgCa%2FSdfD9yQxNq0vI%2B2YOhrXHKSch6KAwey3rRtQMImaGoFVC&X-Amz-Signature=7ad5d15aada8f4741baf61cdccbe087168450fa3d6848d5600d92644296f25a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RE5EU4%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDaavxUUTeCzp1afYK%2F8%2BMpTaJGkHqMlfqj5Tc1yJJkEAIgJ3t41WpUuQkf93QpQjgPIwHADq8IbE%2BK3UoSwKGtf3Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDK3ym8kwyP9QymZy5CrcA1RciM%2B6YXpTby8vARUh1s%2BAVJLSzVokWeU59xarr4uqP7t1pqdhF2ii%2FpyURf7kPYHomhzphBWNFkYxYWZDqjWRIlfd36hOzNC6T6Tlmw1RF5stNW0yPsPGV0%2BL0mo3oJUI4pul1yLOH%2BydBSgIFxxIKFmBJWCiCa%2Benyzvh2I0ojX7V%2Bzg91MUYXMP1u2Pxzh37uX%2Ff2Xnmzd9h6sOceE9DhwbN82QQCaAi7kitKaQXTWZ%2ByOGsMzU%2BPKJnimmNuDvEeWJXOteFY8aGe9%2BQf4TPo5wothI%2B8XtbVclP7oZvg0fktQJgAwaNNXE3j2RpB39tWtJFCuiLUP0yPJWMHaLV59lW3qkwC226fvip694%2Fgto68dMy4dB7fCzYIuT4kz7Cgr3s8A5YVhp%2F3zg4XWKuDj%2BVxit4Nj4fTEVmuEEL80zdgl65NNEcroPIClpz%2FbmXesKFsNOmn8JNo7yO2%2FazrMm0wsNW0ruR4ERg%2BzZg0RfkpblkeyLCF2x6hUyXMJRi7S9eDusm6kqdCxMNQLuforA4en8Zt9iQAD2wYQG%2Bl18KyrH7IDbRdLkeh9c2ghpKyHsw47TgjVTExipmaZu6lX5MtGq%2FkD7RCCXE0xvpCKrNjNfPIhXgSRYMJGN%2BcQGOqUBZRXVkYl%2FEBEunLFWj9NwMKRO7LxJqAlO3h1zUXeFCpqY%2Bks1dAxfCWBor2O%2B0kfUHSm7IugI4rgDg90WhKlOFbXYrSqelyQ7UbVmMD%2Fbrq%2FwDHLyAgJubuDFcpRudLjbje%2BNLhQ14sMhCMMmNcsj7KwwizdFmne5Tevgs4InvjFgCa%2FSdfD9yQxNq0vI%2B2YOhrXHKSch6KAwey3rRtQMImaGoFVC&X-Amz-Signature=5529cca16164a3ed5ad133b930efb15418f90a78e30faff06f1f49cf69468352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
