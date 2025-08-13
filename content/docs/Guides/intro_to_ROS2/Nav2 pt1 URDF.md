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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWCI7ZZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCemJEK92dqud2TmK8nVExNzdXppy0DGg6EhqqiDlpCRgIgOq2CHmfxksvBlrCq%2Fz%2F8OjqyrWhRlL8RE%2B3gENIjL44q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDDb%2BrjTS%2BIwWNqq3SrcAwrich2K4xrcXZ4O4k9BtT2FoBMoee5R8I9YHC1%2FUDtA%2F47e%2Bg%2ByQsMntZttXHspafG9Lnd%2FDxQsOvfAxQLfgxafeM2vq4CoDZSGtgPD8DGM1HaDoHF2GPT1b6ra7GCxLX9SlbakazhT9rF6BbP4DUTX9b6mMFi%2F0CbrfibaTkG65APTSr73E0mHAeALbiE74IvI7JhJzmOhJZXGHEVIDFiAOPknK%2FeodusLQmvEqimKK7Puws%2FEfLRDgJ522R%2BKGYORtLmKGRc56DAu5k11VVeiOtBo0Uxj8KGULCeHQ9WkZjWmq4%2BDVAMGMXxiqwET8Sk96XmVHtNSwnRTh9boBb39FAgOACyZVsgaMN63v2eRt8fDgOIln1CF6ukUVWoTLpTN2ZSmbda22q2lMVKf6CmSO6B%2FRXXpogWA62vMnzXpkDTUlJLfzTVG23bTLR1A4y32HmHOnXlE5d%2F9n9w0gMGZMjVk553zbRuokxwPqSVapm9l0vOtPekHVuTAcjoyBIez4Sf83cECF7CTDmvFxyjXbspvOqfgMS8ybNWSUGwaxrH5skBGcjY3ZebN%2BJroYk30CE2VLgt1SRXjDmp18SJ5uoa9IsnwfvIR2iZr6kEIYsJzzZwWjqACOOtaMOn58MQGOqUBFZhnSGcBLKTaE%2FDXBWWXN3kwBipDoYMemDbu2Ku6xcJPrOu0CqoO2cd8fbKMN3nJN%2FQNxwvLBygpRQQpFxAKF1uiaOAs94tCLwYHCRsvNpTgWV5AD3%2Fs3Xu%2Fd%2F8hXyUdmIxr6ZXHnnB9OYhBmhUtPvCOCoFC7uSs5%2BE1I%2B2JbM5KVqED0At69D58yHfDW8ofGUdD8lsjQJicpH1pS2nXK%2FVzOAct&X-Amz-Signature=7af25cd39075b8b491e980be9ca17b801e2d1d3b1798e19557da3bacf7039cf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWCI7ZZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCemJEK92dqud2TmK8nVExNzdXppy0DGg6EhqqiDlpCRgIgOq2CHmfxksvBlrCq%2Fz%2F8OjqyrWhRlL8RE%2B3gENIjL44q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDDb%2BrjTS%2BIwWNqq3SrcAwrich2K4xrcXZ4O4k9BtT2FoBMoee5R8I9YHC1%2FUDtA%2F47e%2Bg%2ByQsMntZttXHspafG9Lnd%2FDxQsOvfAxQLfgxafeM2vq4CoDZSGtgPD8DGM1HaDoHF2GPT1b6ra7GCxLX9SlbakazhT9rF6BbP4DUTX9b6mMFi%2F0CbrfibaTkG65APTSr73E0mHAeALbiE74IvI7JhJzmOhJZXGHEVIDFiAOPknK%2FeodusLQmvEqimKK7Puws%2FEfLRDgJ522R%2BKGYORtLmKGRc56DAu5k11VVeiOtBo0Uxj8KGULCeHQ9WkZjWmq4%2BDVAMGMXxiqwET8Sk96XmVHtNSwnRTh9boBb39FAgOACyZVsgaMN63v2eRt8fDgOIln1CF6ukUVWoTLpTN2ZSmbda22q2lMVKf6CmSO6B%2FRXXpogWA62vMnzXpkDTUlJLfzTVG23bTLR1A4y32HmHOnXlE5d%2F9n9w0gMGZMjVk553zbRuokxwPqSVapm9l0vOtPekHVuTAcjoyBIez4Sf83cECF7CTDmvFxyjXbspvOqfgMS8ybNWSUGwaxrH5skBGcjY3ZebN%2BJroYk30CE2VLgt1SRXjDmp18SJ5uoa9IsnwfvIR2iZr6kEIYsJzzZwWjqACOOtaMOn58MQGOqUBFZhnSGcBLKTaE%2FDXBWWXN3kwBipDoYMemDbu2Ku6xcJPrOu0CqoO2cd8fbKMN3nJN%2FQNxwvLBygpRQQpFxAKF1uiaOAs94tCLwYHCRsvNpTgWV5AD3%2Fs3Xu%2Fd%2F8hXyUdmIxr6ZXHnnB9OYhBmhUtPvCOCoFC7uSs5%2BE1I%2B2JbM5KVqED0At69D58yHfDW8ofGUdD8lsjQJicpH1pS2nXK%2FVzOAct&X-Amz-Signature=61cb0b65b472d9409f36f706feb9faf8a065f74aaceb5fd0bfe03afe593048cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWCI7ZZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCemJEK92dqud2TmK8nVExNzdXppy0DGg6EhqqiDlpCRgIgOq2CHmfxksvBlrCq%2Fz%2F8OjqyrWhRlL8RE%2B3gENIjL44q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDDb%2BrjTS%2BIwWNqq3SrcAwrich2K4xrcXZ4O4k9BtT2FoBMoee5R8I9YHC1%2FUDtA%2F47e%2Bg%2ByQsMntZttXHspafG9Lnd%2FDxQsOvfAxQLfgxafeM2vq4CoDZSGtgPD8DGM1HaDoHF2GPT1b6ra7GCxLX9SlbakazhT9rF6BbP4DUTX9b6mMFi%2F0CbrfibaTkG65APTSr73E0mHAeALbiE74IvI7JhJzmOhJZXGHEVIDFiAOPknK%2FeodusLQmvEqimKK7Puws%2FEfLRDgJ522R%2BKGYORtLmKGRc56DAu5k11VVeiOtBo0Uxj8KGULCeHQ9WkZjWmq4%2BDVAMGMXxiqwET8Sk96XmVHtNSwnRTh9boBb39FAgOACyZVsgaMN63v2eRt8fDgOIln1CF6ukUVWoTLpTN2ZSmbda22q2lMVKf6CmSO6B%2FRXXpogWA62vMnzXpkDTUlJLfzTVG23bTLR1A4y32HmHOnXlE5d%2F9n9w0gMGZMjVk553zbRuokxwPqSVapm9l0vOtPekHVuTAcjoyBIez4Sf83cECF7CTDmvFxyjXbspvOqfgMS8ybNWSUGwaxrH5skBGcjY3ZebN%2BJroYk30CE2VLgt1SRXjDmp18SJ5uoa9IsnwfvIR2iZr6kEIYsJzzZwWjqACOOtaMOn58MQGOqUBFZhnSGcBLKTaE%2FDXBWWXN3kwBipDoYMemDbu2Ku6xcJPrOu0CqoO2cd8fbKMN3nJN%2FQNxwvLBygpRQQpFxAKF1uiaOAs94tCLwYHCRsvNpTgWV5AD3%2Fs3Xu%2Fd%2F8hXyUdmIxr6ZXHnnB9OYhBmhUtPvCOCoFC7uSs5%2BE1I%2B2JbM5KVqED0At69D58yHfDW8ofGUdD8lsjQJicpH1pS2nXK%2FVzOAct&X-Amz-Signature=5775c4484491196d1f663f1b7ada8b84f7d8eaf2e7c390999114bc7f43215525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWCI7ZZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCemJEK92dqud2TmK8nVExNzdXppy0DGg6EhqqiDlpCRgIgOq2CHmfxksvBlrCq%2Fz%2F8OjqyrWhRlL8RE%2B3gENIjL44q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDDb%2BrjTS%2BIwWNqq3SrcAwrich2K4xrcXZ4O4k9BtT2FoBMoee5R8I9YHC1%2FUDtA%2F47e%2Bg%2ByQsMntZttXHspafG9Lnd%2FDxQsOvfAxQLfgxafeM2vq4CoDZSGtgPD8DGM1HaDoHF2GPT1b6ra7GCxLX9SlbakazhT9rF6BbP4DUTX9b6mMFi%2F0CbrfibaTkG65APTSr73E0mHAeALbiE74IvI7JhJzmOhJZXGHEVIDFiAOPknK%2FeodusLQmvEqimKK7Puws%2FEfLRDgJ522R%2BKGYORtLmKGRc56DAu5k11VVeiOtBo0Uxj8KGULCeHQ9WkZjWmq4%2BDVAMGMXxiqwET8Sk96XmVHtNSwnRTh9boBb39FAgOACyZVsgaMN63v2eRt8fDgOIln1CF6ukUVWoTLpTN2ZSmbda22q2lMVKf6CmSO6B%2FRXXpogWA62vMnzXpkDTUlJLfzTVG23bTLR1A4y32HmHOnXlE5d%2F9n9w0gMGZMjVk553zbRuokxwPqSVapm9l0vOtPekHVuTAcjoyBIez4Sf83cECF7CTDmvFxyjXbspvOqfgMS8ybNWSUGwaxrH5skBGcjY3ZebN%2BJroYk30CE2VLgt1SRXjDmp18SJ5uoa9IsnwfvIR2iZr6kEIYsJzzZwWjqACOOtaMOn58MQGOqUBFZhnSGcBLKTaE%2FDXBWWXN3kwBipDoYMemDbu2Ku6xcJPrOu0CqoO2cd8fbKMN3nJN%2FQNxwvLBygpRQQpFxAKF1uiaOAs94tCLwYHCRsvNpTgWV5AD3%2Fs3Xu%2Fd%2F8hXyUdmIxr6ZXHnnB9OYhBmhUtPvCOCoFC7uSs5%2BE1I%2B2JbM5KVqED0At69D58yHfDW8ofGUdD8lsjQJicpH1pS2nXK%2FVzOAct&X-Amz-Signature=39b41b38cae35b6c33c3d9f6e396234838937e4a8aa3caba1ee2b83223e905ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWCI7ZZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCemJEK92dqud2TmK8nVExNzdXppy0DGg6EhqqiDlpCRgIgOq2CHmfxksvBlrCq%2Fz%2F8OjqyrWhRlL8RE%2B3gENIjL44q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDDb%2BrjTS%2BIwWNqq3SrcAwrich2K4xrcXZ4O4k9BtT2FoBMoee5R8I9YHC1%2FUDtA%2F47e%2Bg%2ByQsMntZttXHspafG9Lnd%2FDxQsOvfAxQLfgxafeM2vq4CoDZSGtgPD8DGM1HaDoHF2GPT1b6ra7GCxLX9SlbakazhT9rF6BbP4DUTX9b6mMFi%2F0CbrfibaTkG65APTSr73E0mHAeALbiE74IvI7JhJzmOhJZXGHEVIDFiAOPknK%2FeodusLQmvEqimKK7Puws%2FEfLRDgJ522R%2BKGYORtLmKGRc56DAu5k11VVeiOtBo0Uxj8KGULCeHQ9WkZjWmq4%2BDVAMGMXxiqwET8Sk96XmVHtNSwnRTh9boBb39FAgOACyZVsgaMN63v2eRt8fDgOIln1CF6ukUVWoTLpTN2ZSmbda22q2lMVKf6CmSO6B%2FRXXpogWA62vMnzXpkDTUlJLfzTVG23bTLR1A4y32HmHOnXlE5d%2F9n9w0gMGZMjVk553zbRuokxwPqSVapm9l0vOtPekHVuTAcjoyBIez4Sf83cECF7CTDmvFxyjXbspvOqfgMS8ybNWSUGwaxrH5skBGcjY3ZebN%2BJroYk30CE2VLgt1SRXjDmp18SJ5uoa9IsnwfvIR2iZr6kEIYsJzzZwWjqACOOtaMOn58MQGOqUBFZhnSGcBLKTaE%2FDXBWWXN3kwBipDoYMemDbu2Ku6xcJPrOu0CqoO2cd8fbKMN3nJN%2FQNxwvLBygpRQQpFxAKF1uiaOAs94tCLwYHCRsvNpTgWV5AD3%2Fs3Xu%2Fd%2F8hXyUdmIxr6ZXHnnB9OYhBmhUtPvCOCoFC7uSs5%2BE1I%2B2JbM5KVqED0At69D58yHfDW8ofGUdD8lsjQJicpH1pS2nXK%2FVzOAct&X-Amz-Signature=17ac5308f5cf0a5e7182e9581fd946564aaef879c9fa31d4463d359127e8f179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWCI7ZZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCemJEK92dqud2TmK8nVExNzdXppy0DGg6EhqqiDlpCRgIgOq2CHmfxksvBlrCq%2Fz%2F8OjqyrWhRlL8RE%2B3gENIjL44q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDDb%2BrjTS%2BIwWNqq3SrcAwrich2K4xrcXZ4O4k9BtT2FoBMoee5R8I9YHC1%2FUDtA%2F47e%2Bg%2ByQsMntZttXHspafG9Lnd%2FDxQsOvfAxQLfgxafeM2vq4CoDZSGtgPD8DGM1HaDoHF2GPT1b6ra7GCxLX9SlbakazhT9rF6BbP4DUTX9b6mMFi%2F0CbrfibaTkG65APTSr73E0mHAeALbiE74IvI7JhJzmOhJZXGHEVIDFiAOPknK%2FeodusLQmvEqimKK7Puws%2FEfLRDgJ522R%2BKGYORtLmKGRc56DAu5k11VVeiOtBo0Uxj8KGULCeHQ9WkZjWmq4%2BDVAMGMXxiqwET8Sk96XmVHtNSwnRTh9boBb39FAgOACyZVsgaMN63v2eRt8fDgOIln1CF6ukUVWoTLpTN2ZSmbda22q2lMVKf6CmSO6B%2FRXXpogWA62vMnzXpkDTUlJLfzTVG23bTLR1A4y32HmHOnXlE5d%2F9n9w0gMGZMjVk553zbRuokxwPqSVapm9l0vOtPekHVuTAcjoyBIez4Sf83cECF7CTDmvFxyjXbspvOqfgMS8ybNWSUGwaxrH5skBGcjY3ZebN%2BJroYk30CE2VLgt1SRXjDmp18SJ5uoa9IsnwfvIR2iZr6kEIYsJzzZwWjqACOOtaMOn58MQGOqUBFZhnSGcBLKTaE%2FDXBWWXN3kwBipDoYMemDbu2Ku6xcJPrOu0CqoO2cd8fbKMN3nJN%2FQNxwvLBygpRQQpFxAKF1uiaOAs94tCLwYHCRsvNpTgWV5AD3%2Fs3Xu%2Fd%2F8hXyUdmIxr6ZXHnnB9OYhBmhUtPvCOCoFC7uSs5%2BE1I%2B2JbM5KVqED0At69D58yHfDW8ofGUdD8lsjQJicpH1pS2nXK%2FVzOAct&X-Amz-Signature=a2c79db06a71a92aaec7f9a3b346b69aed322d58b0c149e6b1d6722c18f9bc3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWCI7ZZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCemJEK92dqud2TmK8nVExNzdXppy0DGg6EhqqiDlpCRgIgOq2CHmfxksvBlrCq%2Fz%2F8OjqyrWhRlL8RE%2B3gENIjL44q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDDb%2BrjTS%2BIwWNqq3SrcAwrich2K4xrcXZ4O4k9BtT2FoBMoee5R8I9YHC1%2FUDtA%2F47e%2Bg%2ByQsMntZttXHspafG9Lnd%2FDxQsOvfAxQLfgxafeM2vq4CoDZSGtgPD8DGM1HaDoHF2GPT1b6ra7GCxLX9SlbakazhT9rF6BbP4DUTX9b6mMFi%2F0CbrfibaTkG65APTSr73E0mHAeALbiE74IvI7JhJzmOhJZXGHEVIDFiAOPknK%2FeodusLQmvEqimKK7Puws%2FEfLRDgJ522R%2BKGYORtLmKGRc56DAu5k11VVeiOtBo0Uxj8KGULCeHQ9WkZjWmq4%2BDVAMGMXxiqwET8Sk96XmVHtNSwnRTh9boBb39FAgOACyZVsgaMN63v2eRt8fDgOIln1CF6ukUVWoTLpTN2ZSmbda22q2lMVKf6CmSO6B%2FRXXpogWA62vMnzXpkDTUlJLfzTVG23bTLR1A4y32HmHOnXlE5d%2F9n9w0gMGZMjVk553zbRuokxwPqSVapm9l0vOtPekHVuTAcjoyBIez4Sf83cECF7CTDmvFxyjXbspvOqfgMS8ybNWSUGwaxrH5skBGcjY3ZebN%2BJroYk30CE2VLgt1SRXjDmp18SJ5uoa9IsnwfvIR2iZr6kEIYsJzzZwWjqACOOtaMOn58MQGOqUBFZhnSGcBLKTaE%2FDXBWWXN3kwBipDoYMemDbu2Ku6xcJPrOu0CqoO2cd8fbKMN3nJN%2FQNxwvLBygpRQQpFxAKF1uiaOAs94tCLwYHCRsvNpTgWV5AD3%2Fs3Xu%2Fd%2F8hXyUdmIxr6ZXHnnB9OYhBmhUtPvCOCoFC7uSs5%2BE1I%2B2JbM5KVqED0At69D58yHfDW8ofGUdD8lsjQJicpH1pS2nXK%2FVzOAct&X-Amz-Signature=32aeddd5a6d98f3d29a4eb4b1e93d5c89118178b2fce65739196b23c300a5f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWCI7ZZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCemJEK92dqud2TmK8nVExNzdXppy0DGg6EhqqiDlpCRgIgOq2CHmfxksvBlrCq%2Fz%2F8OjqyrWhRlL8RE%2B3gENIjL44q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDDb%2BrjTS%2BIwWNqq3SrcAwrich2K4xrcXZ4O4k9BtT2FoBMoee5R8I9YHC1%2FUDtA%2F47e%2Bg%2ByQsMntZttXHspafG9Lnd%2FDxQsOvfAxQLfgxafeM2vq4CoDZSGtgPD8DGM1HaDoHF2GPT1b6ra7GCxLX9SlbakazhT9rF6BbP4DUTX9b6mMFi%2F0CbrfibaTkG65APTSr73E0mHAeALbiE74IvI7JhJzmOhJZXGHEVIDFiAOPknK%2FeodusLQmvEqimKK7Puws%2FEfLRDgJ522R%2BKGYORtLmKGRc56DAu5k11VVeiOtBo0Uxj8KGULCeHQ9WkZjWmq4%2BDVAMGMXxiqwET8Sk96XmVHtNSwnRTh9boBb39FAgOACyZVsgaMN63v2eRt8fDgOIln1CF6ukUVWoTLpTN2ZSmbda22q2lMVKf6CmSO6B%2FRXXpogWA62vMnzXpkDTUlJLfzTVG23bTLR1A4y32HmHOnXlE5d%2F9n9w0gMGZMjVk553zbRuokxwPqSVapm9l0vOtPekHVuTAcjoyBIez4Sf83cECF7CTDmvFxyjXbspvOqfgMS8ybNWSUGwaxrH5skBGcjY3ZebN%2BJroYk30CE2VLgt1SRXjDmp18SJ5uoa9IsnwfvIR2iZr6kEIYsJzzZwWjqACOOtaMOn58MQGOqUBFZhnSGcBLKTaE%2FDXBWWXN3kwBipDoYMemDbu2Ku6xcJPrOu0CqoO2cd8fbKMN3nJN%2FQNxwvLBygpRQQpFxAKF1uiaOAs94tCLwYHCRsvNpTgWV5AD3%2Fs3Xu%2Fd%2F8hXyUdmIxr6ZXHnnB9OYhBmhUtPvCOCoFC7uSs5%2BE1I%2B2JbM5KVqED0At69D58yHfDW8ofGUdD8lsjQJicpH1pS2nXK%2FVzOAct&X-Amz-Signature=828e12f24d267a04971fab0ff1142de98813d169fdda79b475fc4537fc8c4635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWCI7ZZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCemJEK92dqud2TmK8nVExNzdXppy0DGg6EhqqiDlpCRgIgOq2CHmfxksvBlrCq%2Fz%2F8OjqyrWhRlL8RE%2B3gENIjL44q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDDb%2BrjTS%2BIwWNqq3SrcAwrich2K4xrcXZ4O4k9BtT2FoBMoee5R8I9YHC1%2FUDtA%2F47e%2Bg%2ByQsMntZttXHspafG9Lnd%2FDxQsOvfAxQLfgxafeM2vq4CoDZSGtgPD8DGM1HaDoHF2GPT1b6ra7GCxLX9SlbakazhT9rF6BbP4DUTX9b6mMFi%2F0CbrfibaTkG65APTSr73E0mHAeALbiE74IvI7JhJzmOhJZXGHEVIDFiAOPknK%2FeodusLQmvEqimKK7Puws%2FEfLRDgJ522R%2BKGYORtLmKGRc56DAu5k11VVeiOtBo0Uxj8KGULCeHQ9WkZjWmq4%2BDVAMGMXxiqwET8Sk96XmVHtNSwnRTh9boBb39FAgOACyZVsgaMN63v2eRt8fDgOIln1CF6ukUVWoTLpTN2ZSmbda22q2lMVKf6CmSO6B%2FRXXpogWA62vMnzXpkDTUlJLfzTVG23bTLR1A4y32HmHOnXlE5d%2F9n9w0gMGZMjVk553zbRuokxwPqSVapm9l0vOtPekHVuTAcjoyBIez4Sf83cECF7CTDmvFxyjXbspvOqfgMS8ybNWSUGwaxrH5skBGcjY3ZebN%2BJroYk30CE2VLgt1SRXjDmp18SJ5uoa9IsnwfvIR2iZr6kEIYsJzzZwWjqACOOtaMOn58MQGOqUBFZhnSGcBLKTaE%2FDXBWWXN3kwBipDoYMemDbu2Ku6xcJPrOu0CqoO2cd8fbKMN3nJN%2FQNxwvLBygpRQQpFxAKF1uiaOAs94tCLwYHCRsvNpTgWV5AD3%2Fs3Xu%2Fd%2F8hXyUdmIxr6ZXHnnB9OYhBmhUtPvCOCoFC7uSs5%2BE1I%2B2JbM5KVqED0At69D58yHfDW8ofGUdD8lsjQJicpH1pS2nXK%2FVzOAct&X-Amz-Signature=4471e079b5b89a02a93ab73fc83ecd55deff441ffcd6e8702fc55bff36a6fc5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWCI7ZZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCemJEK92dqud2TmK8nVExNzdXppy0DGg6EhqqiDlpCRgIgOq2CHmfxksvBlrCq%2Fz%2F8OjqyrWhRlL8RE%2B3gENIjL44q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDDb%2BrjTS%2BIwWNqq3SrcAwrich2K4xrcXZ4O4k9BtT2FoBMoee5R8I9YHC1%2FUDtA%2F47e%2Bg%2ByQsMntZttXHspafG9Lnd%2FDxQsOvfAxQLfgxafeM2vq4CoDZSGtgPD8DGM1HaDoHF2GPT1b6ra7GCxLX9SlbakazhT9rF6BbP4DUTX9b6mMFi%2F0CbrfibaTkG65APTSr73E0mHAeALbiE74IvI7JhJzmOhJZXGHEVIDFiAOPknK%2FeodusLQmvEqimKK7Puws%2FEfLRDgJ522R%2BKGYORtLmKGRc56DAu5k11VVeiOtBo0Uxj8KGULCeHQ9WkZjWmq4%2BDVAMGMXxiqwET8Sk96XmVHtNSwnRTh9boBb39FAgOACyZVsgaMN63v2eRt8fDgOIln1CF6ukUVWoTLpTN2ZSmbda22q2lMVKf6CmSO6B%2FRXXpogWA62vMnzXpkDTUlJLfzTVG23bTLR1A4y32HmHOnXlE5d%2F9n9w0gMGZMjVk553zbRuokxwPqSVapm9l0vOtPekHVuTAcjoyBIez4Sf83cECF7CTDmvFxyjXbspvOqfgMS8ybNWSUGwaxrH5skBGcjY3ZebN%2BJroYk30CE2VLgt1SRXjDmp18SJ5uoa9IsnwfvIR2iZr6kEIYsJzzZwWjqACOOtaMOn58MQGOqUBFZhnSGcBLKTaE%2FDXBWWXN3kwBipDoYMemDbu2Ku6xcJPrOu0CqoO2cd8fbKMN3nJN%2FQNxwvLBygpRQQpFxAKF1uiaOAs94tCLwYHCRsvNpTgWV5AD3%2Fs3Xu%2Fd%2F8hXyUdmIxr6ZXHnnB9OYhBmhUtPvCOCoFC7uSs5%2BE1I%2B2JbM5KVqED0At69D58yHfDW8ofGUdD8lsjQJicpH1pS2nXK%2FVzOAct&X-Amz-Signature=6736539f4096f5859d4b8b64d343dac79a22afe18f0957931e49170e6e3db317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664EWZ6ZZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNnbN0oGdIw8uFYWNerQA6Mc6eypqze44%2B3rgrVlZyFAiBHyOiZHKDqqJF%2BbY4XOES4b2xouLU%2BaF5TK4bQA1oBmyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMUFKdVuSEO8QJuaDpKtwDIHJv%2BcyYmupa6lG%2FP1v8DoxbRK901iauiEuAxGq8RbZY80SJxt5jf0bSeGCBNg5iSoFeJMhHlB74RbOZiQ42msvyah33kpftqJQDMc16ITRsJAZUS2itHi6PIOnl7Uh%2BkguERtKQsOFnSOOxV%2BjhvwOHSqHqIMoZs6PNzNAMEbKA8xIzOAfDzMzN6jICsIjxl8n3O8nquH%2F8Ig96vupgS5IEjHIFq76SWM4msM9DeZrB76EVeU3qYZkyhAWbc%2FENK%2F4BBIDbT3XC95zC3polJTc2bUzrEdFHkFEmmea0DTvJb5Yi7dqCSChbA1kQJbKCh1ZrFlOYGXfFInZVqwsPbYch5Zo1io%2FxU3Aac%2BBqERCOBuQXHGHoH3Ht4sJhBtJIHOZIM2jSOgq%2B128eRCt10hoyOWa%2FAI6mDV99pOnUTspg5BKxfcOHEZOE%2B8odp1qDYCeiLDnKUjLbo1fsmddG3mdT6Cj6wTBUlJlJeKrfny3IipUf2zpbyOXZJLqM6YQ%2BJsukr8MgI4Lm4422g5eolFV7R22LgI6BkcLeVWMStoA6nTP00WICvl0fVA8Fayb9qLvjYrtOEfwBfDlYt6LGE67efCZX0%2BnAVmEWQnj5zkYaDF543ltAv0FKczEwt%2FnwxAY6pgGz5%2F2IVoWtZ5Tx0vwJ6mAiBKJSUb%2BGt2yqLidhqSFIe7zI%2BYpobEu60KzfwlBpg7gDDAvQTq6XAu21pZbZD%2FRLO7TjYeIcYR9vG1uV%2BdEqWKYGcxUz%2BQ4ID1D9ZY9jKlcnOwYmgmpbEKqrjgGCepqyZxtZc0I2xz62eIdQIh18%2Fz3dpdDNHzUUqSFaFjdbI3zuzFJPrlSPKWzGJMVAyc6z9xAynoL0&X-Amz-Signature=0b9a495845590bc080bd6da7cea4d51920d2ecd30d193da18c628bb384e288e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2RJF3OX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2Br5diD53HEMQ06FtbXTRi5GJmqbikMUcWq4TFLO2g4AiEApR%2Fpf9AH%2FQ1aQASyd5HTSSfaqlI2bXZp%2BqPqpYtS4F0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEpJiWc1oOUnm4GVlSrcA5TzGjKcRmq9p6aTiYY5h5mL%2BnGayQAm1wZWcBCINLdc13zkP%2FUVskDa7JGgowQxPmqP0LqpBSIididUhdKr4XzrpMyd%2BnheH7xLPEWi2fTUH9BxkzFDIBhWu2t33z7gqp79BnQnKkh5RmK7wWGA433Q7E9fJb6TrT6pEbAA%2BWz9dxnNiUPR8h9Ob%2BCzYmZmPVUXjAMsGU7onKvXA%2FNQtH6nEG%2FlOcc0NGwndF9oaYpvf5eEO3z01jTdbWlhEtQW1vb28Qt2tKWltHvbZ%2FwNp2vbgQPbZ0W3rEwQG0IuvRh2rxSegJHuEVrXlv316Y5mFiZ3orl532q%2FGHGIwzRFhhDMZeegDAgedkUbh7KFpMte136a4S1MtTkaCnXsK4J1y%2B20NiXeZI8ORfPK0nO5MYFX3XiIJPhnlw8vP8FZHOd8%2BsVzsWz%2B9g32GZ%2Bgy8gGtSaVn77u7n8OinZePW%2BB%2FA1LmCRYCVIE31v7iOlcBDsRdcDgIGOo1Pqi5dzU0fAFGS79rRV6LYjDFZX4%2BLmz%2B1qhO2ABZir%2Fp8MfNW5bxgvy2HO%2BjVKmADUWYeYknqK%2BbH%2FUXBnHq0mytXiYMRSBuomhw1YiSeaxBdxPK7T6%2BOca2EcnaxsBB0vNQQnvMIL58MQGOqUBrAcginRjZc7MBu2BeH2PVU%2FzACNJ1ARi%2Bo6Km7SzC2R%2F6Af7XfaM%2B8qlMZAqohNMK7C1DWqbLA0mY3epUATJ9F9XsmPHyh3SjQe4hE7sO0bQK28qWWf2ls6%2FoGziVgloQTx0ZprKEbD29AqixwckyS53UXJQjoSwnpWHTk2mWEzIb%2Bg2cv4Fne6eKuCIMooM9aZLEd69GctkaFVzNUlm%2FUHibj5S&X-Amz-Signature=3aea60866991a4cbad53906629c572e973295c7292cf268b9219512de76dbbfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665POZZ23B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUxuyBwEw7rflIw6QgM5itIwx02GAn%2BXtn%2F5wEGk2%2FUAiBCm1It6p4nPsXyX2z99Ljgp8Q1MVzz%2B5ocs2hNaS6Etir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMwGBplzZ93La6u3qOKtwDSOaqkoqC7WhePlBRXnp6ZoFyGpsTDYD16%2BTCHdeviHTKM8rjKcwWLeYoVPhXojiYatKxFVelutPZ%2B7eRKkGZNIcMwAbtrbwPUVyVKq9ub1ZUvPE0KkV1yzAncCUrie45n4JF%2Fp64NR0dw2bKdxHnb6DimZa23YU%2B0ssKz6NONpZC8Rkj6AKtqUpMigRfa9RKmhC2qJisyX5qci7T07w5oi83r2AqpG379eTqDSIGmlNXQEtCbx1to4E3PkV9lA8OiR%2B9H40Msm92JueMnIQSesT5NPBrkbYk7EoxdjE%2F7hfgl6hwfCi0WMLjcB2%2FdeiUqHzS0Lnrl6Tl92w%2FTDBet2VMQHkGq5LNLX%2FQOpgjn1c%2BrAhLUoOGmwxvSxpEm0JP6aPomOF4iZJLQ9DxbLNQhqbgo9E4EjSVWTCb7TRhZszs5JLapAt6gB64AwfKse5HyakznXMwCpgYUICCq0SjHT262%2BgJaMZIiADK51BLZFmzqf1rLm9H21FXaRd%2BO3kKFpdPIvn1pqM3SZhlqYwqM3wzMnHES%2FZORzgXF5B88cUmSWKewkqBVl9V4I6NrXl8lurT%2Fqv1Qvh6PEo%2F0vALlZI5GbgY24I691PFU1Hf4UqBMARr9Cj0%2BnpB8ccwj%2FjwxAY6pgGsEalab%2F660eN8tIjAWxiFyt%2FXC%2FY%2BAW8yQ%2FZ6ZAN4CQ7euJMUBUNJ9r%2FWCSkqaV9yYy66Lrvj8rVb3qYojhyr7p52KVJRyp2kGAoCtVUVxtW9wdmykDGDRwd9dRqYatIqKVcAq4ndchcrQyz0fkUx2kyoVqbt0gCQeuHWNihqPgFyRf%2BjFXk9knh3LpJlM%2Fkls%2FDAEd24kKy3FAom9ul94RwCxwvu&X-Amz-Signature=90478d7916f15b0b658ba3b41507638d631f7ae408cc1738d252ccb7e6e510ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWCI7ZZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCemJEK92dqud2TmK8nVExNzdXppy0DGg6EhqqiDlpCRgIgOq2CHmfxksvBlrCq%2Fz%2F8OjqyrWhRlL8RE%2B3gENIjL44q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDDb%2BrjTS%2BIwWNqq3SrcAwrich2K4xrcXZ4O4k9BtT2FoBMoee5R8I9YHC1%2FUDtA%2F47e%2Bg%2ByQsMntZttXHspafG9Lnd%2FDxQsOvfAxQLfgxafeM2vq4CoDZSGtgPD8DGM1HaDoHF2GPT1b6ra7GCxLX9SlbakazhT9rF6BbP4DUTX9b6mMFi%2F0CbrfibaTkG65APTSr73E0mHAeALbiE74IvI7JhJzmOhJZXGHEVIDFiAOPknK%2FeodusLQmvEqimKK7Puws%2FEfLRDgJ522R%2BKGYORtLmKGRc56DAu5k11VVeiOtBo0Uxj8KGULCeHQ9WkZjWmq4%2BDVAMGMXxiqwET8Sk96XmVHtNSwnRTh9boBb39FAgOACyZVsgaMN63v2eRt8fDgOIln1CF6ukUVWoTLpTN2ZSmbda22q2lMVKf6CmSO6B%2FRXXpogWA62vMnzXpkDTUlJLfzTVG23bTLR1A4y32HmHOnXlE5d%2F9n9w0gMGZMjVk553zbRuokxwPqSVapm9l0vOtPekHVuTAcjoyBIez4Sf83cECF7CTDmvFxyjXbspvOqfgMS8ybNWSUGwaxrH5skBGcjY3ZebN%2BJroYk30CE2VLgt1SRXjDmp18SJ5uoa9IsnwfvIR2iZr6kEIYsJzzZwWjqACOOtaMOn58MQGOqUBFZhnSGcBLKTaE%2FDXBWWXN3kwBipDoYMemDbu2Ku6xcJPrOu0CqoO2cd8fbKMN3nJN%2FQNxwvLBygpRQQpFxAKF1uiaOAs94tCLwYHCRsvNpTgWV5AD3%2Fs3Xu%2Fd%2F8hXyUdmIxr6ZXHnnB9OYhBmhUtPvCOCoFC7uSs5%2BE1I%2B2JbM5KVqED0At69D58yHfDW8ofGUdD8lsjQJicpH1pS2nXK%2FVzOAct&X-Amz-Signature=a4b9a39e1f2bd4677db1105c538b926ae1f2c45137b4fc4130fb680dddd43751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY5PH43M%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjVlG%2F9lrQ1F%2BcnhJipZOJ8wyAq%2FPk4WVoxf3LeFhlKAiBqOtH5mbhN5hO4bNgV8nd47JvXKa3SG5ZyAw2H5HscPCr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMhxeaEodeFHJWZGu7KtwDlc5syhRq42XiVxKa%2BjDe%2BEFL4XjyqIsl8RqRUk2Tdt9dFSFs42maMUgO%2BmffWKrI4fuoxESm2%2B%2Bo9LvNm82ZWx4Z7%2FqB%2F2qNFqsEotxBcFmcRY8HXOamU4x8XY5jWP2cWT376D6RTWo8%2FSfwgxfgsh9QVs2GajJu9o4D7gkDDrwdPA61ApL6%2F2IsMo6djsJgrO%2F%2B5wtg8TqwH759rY14zdel%2Ffl6QUcsvBPIMUviX3AMyYmuAz3l7sRZHTPggiSQyZ84OiZavJ4bktdiGD74mFVmEs%2BhT41sd6JN2hr%2B2%2BXvFErurLy2TNtjFnax3HjudVm78LPWIEusFyhvbEbBlTMdwGDlQrsvBxR%2FGHi%2BeQ%2BImqqYg7uNfxMDEU%2BqLoWe4ym2NUB9YFZG000w3H0qAmcHVV5%2BkmFhxYEsLMGgxuo6JruDvClFDgNP7vT%2FabW2owoDv0l15dYa2AmDPjvT9e0j%2Bo7WPSEfWYBZiQwc0jJu0sDZrpk5Q8tS0qe6Dz92MIKpOVl%2BGlAbduxh7F8KfvF2vSAcx0IRzwvT83JiQDRZDnVeObr20tT%2FBzTylEdH2PO%2FYbEFSQixxFXp8Ww571GXcDFgy1%2F7i%2F06flIYtPDlo5fFCTQOLwZvegQwnvjwxAY6pgGGhoPIPYZQYffV97uw%2BFy%2FV6xumspJ%2FA3jvguvXwWQtmqoWtBqiP%2FwIuHCCMW1ddZJBT25HAKmvnTnzKxtKLpGVdnms0TPdBPRuz4lj1xvz8vClmEJmyO1y1rr5fy072xq9kKehtBBDZO0xIO9SX1l%2B%2FXFUX6PL1Kujnr1ll1BrmSRz4NLkyYGQhCNc1ZsdOVf95pvvHn83N1PuDnrwOV%2BvaoY%2By%2BU&X-Amz-Signature=283adb73501e6808fd99c0629c9165bc39ee4d0e1077035550fe788983e5daa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWCI7ZZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCemJEK92dqud2TmK8nVExNzdXppy0DGg6EhqqiDlpCRgIgOq2CHmfxksvBlrCq%2Fz%2F8OjqyrWhRlL8RE%2B3gENIjL44q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDDb%2BrjTS%2BIwWNqq3SrcAwrich2K4xrcXZ4O4k9BtT2FoBMoee5R8I9YHC1%2FUDtA%2F47e%2Bg%2ByQsMntZttXHspafG9Lnd%2FDxQsOvfAxQLfgxafeM2vq4CoDZSGtgPD8DGM1HaDoHF2GPT1b6ra7GCxLX9SlbakazhT9rF6BbP4DUTX9b6mMFi%2F0CbrfibaTkG65APTSr73E0mHAeALbiE74IvI7JhJzmOhJZXGHEVIDFiAOPknK%2FeodusLQmvEqimKK7Puws%2FEfLRDgJ522R%2BKGYORtLmKGRc56DAu5k11VVeiOtBo0Uxj8KGULCeHQ9WkZjWmq4%2BDVAMGMXxiqwET8Sk96XmVHtNSwnRTh9boBb39FAgOACyZVsgaMN63v2eRt8fDgOIln1CF6ukUVWoTLpTN2ZSmbda22q2lMVKf6CmSO6B%2FRXXpogWA62vMnzXpkDTUlJLfzTVG23bTLR1A4y32HmHOnXlE5d%2F9n9w0gMGZMjVk553zbRuokxwPqSVapm9l0vOtPekHVuTAcjoyBIez4Sf83cECF7CTDmvFxyjXbspvOqfgMS8ybNWSUGwaxrH5skBGcjY3ZebN%2BJroYk30CE2VLgt1SRXjDmp18SJ5uoa9IsnwfvIR2iZr6kEIYsJzzZwWjqACOOtaMOn58MQGOqUBFZhnSGcBLKTaE%2FDXBWWXN3kwBipDoYMemDbu2Ku6xcJPrOu0CqoO2cd8fbKMN3nJN%2FQNxwvLBygpRQQpFxAKF1uiaOAs94tCLwYHCRsvNpTgWV5AD3%2Fs3Xu%2Fd%2F8hXyUdmIxr6ZXHnnB9OYhBmhUtPvCOCoFC7uSs5%2BE1I%2B2JbM5KVqED0At69D58yHfDW8ofGUdD8lsjQJicpH1pS2nXK%2FVzOAct&X-Amz-Signature=f69030fe7c81daf0d34841ead8162dd8094155eba0db8f211be75c3e9818bcaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBFZDSYJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDjxCREwVsFSya%2Fe2gWWeUml6TvXGcUW6fhvyc7UQ43AiEA%2BO%2BorLIEpuZv0Bfv9%2BrMGvl%2FnXUEfAnKpm6O7waUrQwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKknaMue17GPbfhaCCrcA7LJHxhtgLj3bgP9FxYenW0Q9NWc%2FOV46cbhmJA3C8EZQ0PNpX%2Br%2BU4Fa%2FCnoIvidL0z0ihTW5uq1ZIhIusi4mm1mtqLNGG2uP0zjzrTca5ZH7fIJNbqdmSqYVBZ6I48D0klVGFOywnQWxrRvRpnjIzz3LK7Kcxb3d%2BUUctfgTAb3VbZb5jsOGszlqXR8%2FL0hiqBgVIccm1hlEalTPJ5UXV0lP2i1R1YbNsHPMOlSebUPCiPJCiv%2Fi03W3P9Bmymi78w4QxBWOTJNZAdA9AIHX9smZfREz5qiaBctsfwjOL9Ggp9jAYyDrZZ72qFs0EPk41xxogIlUuHBnfcdzEOGz8tpHnH0cWDH4zvOFUH%2BzXc0Qs50AtaGBeEog0NaHSm0yoDQZl78s9AABAYWyg1nSHMKHZCxDhLjs5%2Be50FOWjhfXslFgV4%2BEdgi63ESrwUVVBRGusJnlxDkiirWCMyP5aKAUkOhW7Puq40tcKe%2B9cfJirRV5qawAKq3Zm4KHtFx5m3ie%2BLWQyBzgeiZ1BadKUkFNf2qZ9XWR7MRVQAbBa83FN5nxfTfLbLS3c%2F%2FWtJGqYzNLK0etOUPuEjqBkl2GHd3ZUN4vNnCCP5hTYZbqm0Pnndvv8RXHleGlTKMK758MQGOqUBNgr6cC5a4%2BMXq9udJcQGjMbBBqqQhepd2vXjVmI5NlXj7hvn9zBTnhj%2FRHN%2B1MY8bz2BTq1gW%2Fd2LIuePXp%2BAgFpXroyy2GaKr02ps4un21c7UUlXkmhfv1fwZa3IhCKq%2FOtwwa3v7Tq3Dmqja7Q3r3wqbLJ5z7NH7rs1Kn5AQ2ZgKMAS0hYpeY1UFcRdh0tt14tMNfsPVBW%2FnPMzAUnYBWjRJob&X-Amz-Signature=04df91f2c5a74b2bd627b966432fe7f7d7963cf7e69bd01b04d314bba6b6d236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWCI7ZZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCemJEK92dqud2TmK8nVExNzdXppy0DGg6EhqqiDlpCRgIgOq2CHmfxksvBlrCq%2Fz%2F8OjqyrWhRlL8RE%2B3gENIjL44q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDDb%2BrjTS%2BIwWNqq3SrcAwrich2K4xrcXZ4O4k9BtT2FoBMoee5R8I9YHC1%2FUDtA%2F47e%2Bg%2ByQsMntZttXHspafG9Lnd%2FDxQsOvfAxQLfgxafeM2vq4CoDZSGtgPD8DGM1HaDoHF2GPT1b6ra7GCxLX9SlbakazhT9rF6BbP4DUTX9b6mMFi%2F0CbrfibaTkG65APTSr73E0mHAeALbiE74IvI7JhJzmOhJZXGHEVIDFiAOPknK%2FeodusLQmvEqimKK7Puws%2FEfLRDgJ522R%2BKGYORtLmKGRc56DAu5k11VVeiOtBo0Uxj8KGULCeHQ9WkZjWmq4%2BDVAMGMXxiqwET8Sk96XmVHtNSwnRTh9boBb39FAgOACyZVsgaMN63v2eRt8fDgOIln1CF6ukUVWoTLpTN2ZSmbda22q2lMVKf6CmSO6B%2FRXXpogWA62vMnzXpkDTUlJLfzTVG23bTLR1A4y32HmHOnXlE5d%2F9n9w0gMGZMjVk553zbRuokxwPqSVapm9l0vOtPekHVuTAcjoyBIez4Sf83cECF7CTDmvFxyjXbspvOqfgMS8ybNWSUGwaxrH5skBGcjY3ZebN%2BJroYk30CE2VLgt1SRXjDmp18SJ5uoa9IsnwfvIR2iZr6kEIYsJzzZwWjqACOOtaMOn58MQGOqUBFZhnSGcBLKTaE%2FDXBWWXN3kwBipDoYMemDbu2Ku6xcJPrOu0CqoO2cd8fbKMN3nJN%2FQNxwvLBygpRQQpFxAKF1uiaOAs94tCLwYHCRsvNpTgWV5AD3%2Fs3Xu%2Fd%2F8hXyUdmIxr6ZXHnnB9OYhBmhUtPvCOCoFC7uSs5%2BE1I%2B2JbM5KVqED0At69D58yHfDW8ofGUdD8lsjQJicpH1pS2nXK%2FVzOAct&X-Amz-Signature=4f9b10e5b55e9ba2f3acf661f75a349aa78e92fcc3cab62220f4f6be1f3855a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMNGFB4K%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZaqFjCQbN0qH05jnd30g5uLFCJCrD2Jy5xoKfgfoFbgIgBoRnH6lqg9RImu5px%2Bv3PMAgiZ4Rrm6ynYqs6sLUrOIq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDAaUdYVudI0JtWE0ircAyfsJYatpOvXDgbWvn1KzUs42IsOHNq4jSG3KEicdSQ%2BJxDRWcNG2%2FPWy%2F0GKJ924995RGOGlv1vcpf%2B6EC6TPHw4Q3BGaxoxCEI0wvhRbIsAeOp01fo3ooMq8xGrjP0bUP8SKuvCvNZAWPXeMisFSRh17OmRE6JigX2T6RME0heYsLMsLPTMvwzwSFwM0LCVC0micdU4KTigDZDM7lApOKHTsNYdxsi%2F1x8kdxr09m2Lto%2Fwq4L5edv%2Bqk9zd1NrYSPciE8XdqVEe%2FYk0E27PTE%2FSAxTpDfRAKHZ%2F83v9Ffoc8RLKakCFmKrkEuoPYqqKbuEnMQ1Jxszqviqy6qd1yUBlJoy%2BOYWClUYYpSdu9tfzJLzPMGVCa0%2ByLNhUUBQaieABnNS59J%2BLpyCPBXbykZJ2j1oYS3vBx3aDcBJp%2B2CDrkp17qMawbIui%2FeQJ5MLrwTow4GAu52HcrUbq0PNCXg6m0BS5kxAX1ErJhV6yDCRAyv0gKQNS%2FnN78OJ3tR4HIBv08ATx9%2BPe%2B5qfo3QFEjs5mPGc7U7LGG9FCMP04exAP1lfFl2d700QeZADx1HOf5XS53z23v3WY3xKkHapIGmEMcFWxwk%2F47tS5kU0gmFsNrUAsFWY56bpGMIv58MQGOqUB7W3q8y0n2k8YTOc36jv8r48%2Bmqmm3I4yAIr5rvYLx0aV%2FO5hl8p52uIBEqMD49OuoZwdpZBi9jmCeYyMJuQ8QxAuAVNlne5GVG1mGpJUg%2FSPfBgKtXaZFmob9cXqsq503qbJnMcgAdQBDizLxfQR%2F2vFR77rrcJjMOqPQwKZWGReB85T0ZO13LYyW2eYojM8w1hpLWwyeN6Lo%2BqKTSGsLlxlmZZy&X-Amz-Signature=b61723425835284fd3557f792cf18c4be23fbb2333de17f59d0835c9bdbf24d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWCI7ZZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCemJEK92dqud2TmK8nVExNzdXppy0DGg6EhqqiDlpCRgIgOq2CHmfxksvBlrCq%2Fz%2F8OjqyrWhRlL8RE%2B3gENIjL44q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDDb%2BrjTS%2BIwWNqq3SrcAwrich2K4xrcXZ4O4k9BtT2FoBMoee5R8I9YHC1%2FUDtA%2F47e%2Bg%2ByQsMntZttXHspafG9Lnd%2FDxQsOvfAxQLfgxafeM2vq4CoDZSGtgPD8DGM1HaDoHF2GPT1b6ra7GCxLX9SlbakazhT9rF6BbP4DUTX9b6mMFi%2F0CbrfibaTkG65APTSr73E0mHAeALbiE74IvI7JhJzmOhJZXGHEVIDFiAOPknK%2FeodusLQmvEqimKK7Puws%2FEfLRDgJ522R%2BKGYORtLmKGRc56DAu5k11VVeiOtBo0Uxj8KGULCeHQ9WkZjWmq4%2BDVAMGMXxiqwET8Sk96XmVHtNSwnRTh9boBb39FAgOACyZVsgaMN63v2eRt8fDgOIln1CF6ukUVWoTLpTN2ZSmbda22q2lMVKf6CmSO6B%2FRXXpogWA62vMnzXpkDTUlJLfzTVG23bTLR1A4y32HmHOnXlE5d%2F9n9w0gMGZMjVk553zbRuokxwPqSVapm9l0vOtPekHVuTAcjoyBIez4Sf83cECF7CTDmvFxyjXbspvOqfgMS8ybNWSUGwaxrH5skBGcjY3ZebN%2BJroYk30CE2VLgt1SRXjDmp18SJ5uoa9IsnwfvIR2iZr6kEIYsJzzZwWjqACOOtaMOn58MQGOqUBFZhnSGcBLKTaE%2FDXBWWXN3kwBipDoYMemDbu2Ku6xcJPrOu0CqoO2cd8fbKMN3nJN%2FQNxwvLBygpRQQpFxAKF1uiaOAs94tCLwYHCRsvNpTgWV5AD3%2Fs3Xu%2Fd%2F8hXyUdmIxr6ZXHnnB9OYhBmhUtPvCOCoFC7uSs5%2BE1I%2B2JbM5KVqED0At69D58yHfDW8ofGUdD8lsjQJicpH1pS2nXK%2FVzOAct&X-Amz-Signature=59faa19da4aa072137e97cf4e0a80ad27613e4a93555ba020f74b222646fb67b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCKNKSG5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWdk2yDJL0g%2FPaGwSnZ5yv2AAr%2F8D6wxISgLzvdPAb7QIgZDHkCwAwadZ%2FOx2clfbTCSbdLm2VNF6sM70BZlYgwXkq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDJo%2FPabGVUwV9bdcaCrcA%2F23sALeeRZJ2kvUo2mvwz4kc8u9POwWnVzlWyWa27TTg9YJrPH5toe%2FWQZMHfBBJlf39wntUXFMjgdRrmdKyW7a214biwUPMEmR0j86kRXXi0CPPdkZnEbu3Vppfps7KSlyaqqs89isxB%2FYpQIGT618Ad6Qtbt1O4aMeweS02Gvm0tBX1B3xxUMLFSaYz8k9ocPrcMTwAzv%2Fs%2FBZCsyddH1evErO5juMHpa0dbdp60M5ov8S3f8gMjSneGDYsx%2Fnme2Ph7I9BlvyeAt6aN34LB%2BiERsBLP2dQD5iZAuP7zXtMqQIE2xD9dkkgh67yyLo0YEnuciUyavOcwhiVahYcbbN2Tf9bISmBKwc316hj5oU02LOJ5NSZ7dovBsHCH1HTk1Z51NedblQ0Ofe6z3e0oGryURNugMXNV4%2BRtFMoHXSFBGHh2QNAOULZNSofVZSU6UyPc4xnQvFaiYYB9oNuxZuVYk%2F3%2FXushUi1vBFolu1qciYRvOjmul%2F%2BmxxoxOUqKaTqH8JpQZeDLcH5f8jchMGhb9V5HSHsHWqJTGlxNJ%2B3CC8tjiGbWSrIwcVqVLaTYP8BciCy2EsneDlFhsuuUwfIqF7pBr6sihnWppicgdull5kIFUTdc2v11cMKz58MQGOqUBUgV%2BgsFwOScF0qXFy6AieaU94Pvch5gMvrDAVJS3BFb%2BTI8UihCYKNp0z5sRGm8L8H%2F%2BS2tUK8k2Iud4%2B4Hdc8ITGPbSU9rmBW3wj66V8vfr%2BPAQJQApHgAzE%2BO4PS9lb7Yem2H9GIrBKq%2Bg0deHsTJjTPFWIgIHZ0bh3%2FeXANSTplhAVopGiEIK70gAVH4XQMJ3KoeqSA1I4OhjjFQtwSm%2BDKhP&X-Amz-Signature=9ba11cdace22c1dcd6a56ead2dea9bee904c095dec16cbd2218b91bc8a7c4f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HGHT436%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGjNWqh3HR2gF6vmClETjKnbMY38DIFloQMk5YrfzspAiEA0Lgonid6UFx4AaYHCd03N74xEDWUuJ98VKUYkjZ3CqEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGtXl4chluYFy5I1KyrcA3wmV5197zjsSxWl4T%2F3L%2Brc5VJ%2FKnwTFH6f%2FY6TK0Su8CynQQt%2B786arJ27Fax3UYPMyE8EOLWyFAkIHlutYfJQQM699cNvmLrk2Lv6dc9rMqwGKNaMWoXgqYrpaQphDkKYEtD1X0cHKlIOPpb3z3lgvfB%2BrzvAYOv4%2BAudcV8Q346xlcnbZL25Y%2FgoBNhnKlbu7QeXNxh5huk4t8eHvTs0AjxP6OpJ5XxHuOa4GN8WOYC4f0xxMlGw4dTT5odI4VOc3ezZFeei%2BkpQjCKp1wvyX6d7UoYbA72hy42ayWEFl4orMFYuH11LiR8ue1ssd10ffLw9fZ614u%2BbDp2TF06tIe2QG5NJxc7d7ICoL5Yuw0%2FTK%2FLy%2FwHtlKvbrwuFsA7INOzo7ZQeAb9qoeJoOT7SzGjLCSOIJofTqlQcHjOdZa42sNlp35YAodXIH5WDuBST0v1FPu%2BMPpYp6%2FAEgyicxDHGYelK0C5d8Imfi68HiaPh3LSWxyqrP4UW%2Fs%2BhbogdCI31PW4OI2U4llxFLQrJqt0ZboToQkFmq3%2FqvpQ%2Foz4RQXhbav4xnwcAf42kDorYci%2BmWORvMbAXOyBVa1EFRacKV4MOE2iYqToN5I0LplhzYNmSsdD8t7J3MJ%2F58MQGOqUBO9xNTInvpK%2FaCMN4YccCdTF%2F%2BlIXRcgxNYqO%2FlULQJsMBg8WFp7irVaVt%2FDajcM%2Fvg2ZhnjTzNhmU7aAxfk9S6faNe1dnLpT4Kbf%2FGtZPgVbxNNVnNuQSePzKBPPOlqvF9DygOEsm6D9k9sra%2FzWi%2FTBd80yhJhRmacuUrNGNXOQINknEmDmEyWe9T2ujdKkPlFLzpNUWVUfcHunJOKtLm%2Fkob7A&X-Amz-Signature=6a1860e1500b69f8d5479df46ddcbee2e49cb8a71cc60b4cf7db67473ac22e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S6K6JO3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0Jinc74KsgJDXJRfooRAZV%2BlYnv2vKSS3RmjPf2kdKgIhAIdO44RTiz4WHxSTjThIinnW9DCfVNmm71YY62mrgw8dKv8DCCgQABoMNjM3NDIzMTgzODA1IgyIUTGI6rk8RYtYMMIq3AMx0y4VTz0yWZPid4BycJkLzpP6wvoPOGfUnlWEL1Wbw5NZ%2BgbF8UF8A2iGbWElFYgZuNP3R8MZXHx1pMFs6%2BOlJO3454arHHk54GlikKhC6PBkZXEszX5aBWQkvU14XRCZxgxVa5VFijXd2i1fCE6glSC84R9lEWm%2BBNQyJZregU1e6KmQ7NLjo9IRQxs0m6byxBZJznerce2rjr6bvjL%2BSf4IBtYIs1s9rixDbTMdQmnV3VXYfBnj9WtOdYQQmr4%2FmMci05O8bl7lBz%2BOWHoHbmutvrrIiPqX24FsogjuePR%2BzUN5c35TVfLr4gBcPTeFgy%2BKsggRHoLT2GuS%2FQfTcQyr%2B4BhAM0hffDa2XItt%2Fo8RQRThLj3fjvogPlygT5MpsbNU%2FEvogPVtNQzw3J%2B3xTmtHTV1dn%2BsxUR70Rul2MT7Mjfm0wGImyHGxnJ%2FS564xrso7Y9fJ8ue7P551OtUz%2B%2Fm%2BvH0maeRDOE%2BuYPSfE%2F0ci8DDbLHh33hCDgtil0p0HBBCmiR3ltF0f9kXjksSvjGPjmT%2FGNTAKPxpO3ClJb%2Fk0IHGiCESjO%2BJUqAeqLhx%2BrrzEDYYEI1Qb1v67AO1%2Btk2aAvVV3beuWf8VGQW1Cr%2BESDz08EzqrBDCO%2BPDEBjqkAT%2FqwlzgMN8CDxUjFsVMnvmvW7dspTtyj1rr6WygEwkkFLL2VWvC5gGwrBHadZtWOEx9mjIhXVkCGAEE%2BTeIJ%2FqMjDswe8lemJDi9SoOXgiS%2F00UlpjS%2Fd4uvx5fz1DTIplAPgBrW1alnGeEkFukRERPy5SUL7zdp7MpLndLhVHg%2FHB4%2BQJ24N1m1CcKRpfAw7zhWOvIzzUrjSkztZ7IKWqk6csh&X-Amz-Signature=70e1731d992ac2454d0383c51f5cd90dee793c8ff961aec6e33b726aac496a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R74X377%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcy%2FU%2BHaeo%2B5NcbygyqKDniHCH%2FbKUmAeac8BOfYSa4AiABgDPgLg5xy5STPpgdonJ1%2FqfbsaTRP%2BBMPDqH84ZPTyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM3TpfIGHDoigfqpE1KtwD%2Br1IQhXg1KbGm2OugEP1GWjpjhlBjwioySGOLPoFzgEDNEraLiqMFRCv%2BkF9xYoTXSzV4%2FixtQtYnTTEpcByvqjp6MdkYtc5yFyLsbej7XRhc0sADYODoTewxPnrk1KS52yBt1mc3y4f2ipE8%2FDYP%2FC3a9aX8HquZvWkrGfJIAmhWUDKAI6QHX6d9YLhuCtGRO2ztouIs9vdl7MQdMEe10Twrm%2Btn%2FEf6yVSH1WV41Y%2Ffdz9xV6pxRgawuZ12Z45vj%2FISGhY%2FgDuTULVnhNfDxatDok4H0sG3XRjeAJLQMmcUDbNeF%2BNuLLoLkiSrmKvzeQrxS%2Fo6HT9lNUUVlo49zmk7NacvdPT%2Fs4fan%2B3pvsWnDrJtmejPXnuE%2F0FpdB3yqW0LhfG%2BiyI1mJGhvsKi2obKnkosqplxy%2FnOgZG2PI6Yu38WqbESRcgZeMsbejthNIDZMgVF7orI7%2FVmficwIku5cazk3ssr1dgz%2Bq2QM%2B%2BiSKyIben0vMGNKg5%2Bwc0A%2BPeT3fzjFZPLJRq1zpBUI%2F3UyICmSUO%2FNHGMVB0Iyo4K5MkfA9B674D5%2BwfRSKkTaWSWeWQ6j1M4ijzjyseqRTd4ogFPI7V7y6dJv%2FNvHjYIIoFf7IMVvhBwl0w3vnwxAY6pgEC0iQM4j%2FcxuCMPFVgUNGMUvD%2Bv5T5IqgHvpxuo%2FHL5OPSbhNk2RZle5KYeSI%2F6xcxcJvms9DZo2DfUVS3rdBPrIp3%2BmKrDPY9zdSN%2FwX1dFkYqtTQXqivtV4wEQFkM2S4xQPHepsurNsigPL4u3oaGfUkcIr4USqbJo78elgpDomBnnd8sn2MhyvXsOdddgzsd10J7edmSKDRWAhKo53Fgztg7o5i&X-Amz-Signature=7c6e047a54f2472145772e0bfc0163ec66b4cce15302b7649aede8df20fab081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMA3MWTV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpiGJ7eu%2FGCrfy5LY0AthKoRAa6l3k3%2BmzdzLObxS4ygIhAKhnyXmuaM5P0Ql8UWkxoHtFC3lcYc8nY%2BpFab6CUUgiKv8DCCgQABoMNjM3NDIzMTgzODA1Igw8nzOOPYKPNDQ3foYq3AObMNwHEME78swScHRALQ1Qkem7S%2B3rtekCOGZoy6E%2BE%2F41N2laywB0tGX%2BZtTDz7aP57p7ED99IUDMXXSolklFi1PHZNhcVSmcBS5FJn2xH3woFztZnlTNNy9DVt8sDatAFheWOyF%2FOJ6S0bV8RJypy525T7bYceifkl1g0CCBl0DcG7U6267II9U0TSX0eAA%2BvcRj3iqbDkVUEx%2FEM4kM%2Bk%2FOoXsiTPOzWqDgftHecBxAkyqVMDL9CCGk2X51wyT6%2FGXQ1oPbvTzKU%2BVFN3dUxQpNBz0qp9XfcODjzLbrsNz%2F04Z%2BUJvUdGcRJuxCERlgRgcw%2FOi6KtkmFYvOAtzB4DAvfOBgozuvMwHDn8ZWK24vQ7jDiazzcZBSnmSPgoHjEBVl6VpgmhHnFjyOhcHCwdi7pz2ohYOyHQHCJ%2BmutFN2gKNH%2BRqku7HPCgoZJ8szf6oXUpkX3FTF3xjSKeJkCuQS6mMEW5PNfEXXTzw7kZg4eenqtL5UGvneih1q3lUWZ%2F%2FP8yWLTW1jK1sOyA0jcbt1fcsNdSENqUvfFmlkkbKB9J4A5U3LDzxdK7ftoTX2ROXgL9xfeBDErsq2Thnnfj47F8ed2ZgRdXncXwpDkiBMhqyD0Mh1RKtRTDCb%2BfDEBjqkAZuO%2BVLQdoZIWYhzgdEGYvgko5Xr%2B341f9uqJDZW2oJaI4avlrHQBXvdM5IOjb9Kd5rR8zF7DNHs3kBL%2BR%2Bj0o59SOylcGVvRgxy0x6zhnSnBreH0FZKwVTBaraDQEci4QBmLmeADfOwMnTLBkadReXz7QHe6IeyoWn0ajjMJD9xX6dq1D8jGm5a8oaEa%2FoItjQtsGesQCdMolyVfsLpQif58n11&X-Amz-Signature=05e9befa70464115e5765290b329f326098599c1b186e3d46241d3b185639365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWCI7ZZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCemJEK92dqud2TmK8nVExNzdXppy0DGg6EhqqiDlpCRgIgOq2CHmfxksvBlrCq%2Fz%2F8OjqyrWhRlL8RE%2B3gENIjL44q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDDb%2BrjTS%2BIwWNqq3SrcAwrich2K4xrcXZ4O4k9BtT2FoBMoee5R8I9YHC1%2FUDtA%2F47e%2Bg%2ByQsMntZttXHspafG9Lnd%2FDxQsOvfAxQLfgxafeM2vq4CoDZSGtgPD8DGM1HaDoHF2GPT1b6ra7GCxLX9SlbakazhT9rF6BbP4DUTX9b6mMFi%2F0CbrfibaTkG65APTSr73E0mHAeALbiE74IvI7JhJzmOhJZXGHEVIDFiAOPknK%2FeodusLQmvEqimKK7Puws%2FEfLRDgJ522R%2BKGYORtLmKGRc56DAu5k11VVeiOtBo0Uxj8KGULCeHQ9WkZjWmq4%2BDVAMGMXxiqwET8Sk96XmVHtNSwnRTh9boBb39FAgOACyZVsgaMN63v2eRt8fDgOIln1CF6ukUVWoTLpTN2ZSmbda22q2lMVKf6CmSO6B%2FRXXpogWA62vMnzXpkDTUlJLfzTVG23bTLR1A4y32HmHOnXlE5d%2F9n9w0gMGZMjVk553zbRuokxwPqSVapm9l0vOtPekHVuTAcjoyBIez4Sf83cECF7CTDmvFxyjXbspvOqfgMS8ybNWSUGwaxrH5skBGcjY3ZebN%2BJroYk30CE2VLgt1SRXjDmp18SJ5uoa9IsnwfvIR2iZr6kEIYsJzzZwWjqACOOtaMOn58MQGOqUBFZhnSGcBLKTaE%2FDXBWWXN3kwBipDoYMemDbu2Ku6xcJPrOu0CqoO2cd8fbKMN3nJN%2FQNxwvLBygpRQQpFxAKF1uiaOAs94tCLwYHCRsvNpTgWV5AD3%2Fs3Xu%2Fd%2F8hXyUdmIxr6ZXHnnB9OYhBmhUtPvCOCoFC7uSs5%2BE1I%2B2JbM5KVqED0At69D58yHfDW8ofGUdD8lsjQJicpH1pS2nXK%2FVzOAct&X-Amz-Signature=fc8aea9e4cda17aecc3358a5ddcc2b187ce7c2661002ac3eaf604935e7df39cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWCI7ZZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCemJEK92dqud2TmK8nVExNzdXppy0DGg6EhqqiDlpCRgIgOq2CHmfxksvBlrCq%2Fz%2F8OjqyrWhRlL8RE%2B3gENIjL44q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDDb%2BrjTS%2BIwWNqq3SrcAwrich2K4xrcXZ4O4k9BtT2FoBMoee5R8I9YHC1%2FUDtA%2F47e%2Bg%2ByQsMntZttXHspafG9Lnd%2FDxQsOvfAxQLfgxafeM2vq4CoDZSGtgPD8DGM1HaDoHF2GPT1b6ra7GCxLX9SlbakazhT9rF6BbP4DUTX9b6mMFi%2F0CbrfibaTkG65APTSr73E0mHAeALbiE74IvI7JhJzmOhJZXGHEVIDFiAOPknK%2FeodusLQmvEqimKK7Puws%2FEfLRDgJ522R%2BKGYORtLmKGRc56DAu5k11VVeiOtBo0Uxj8KGULCeHQ9WkZjWmq4%2BDVAMGMXxiqwET8Sk96XmVHtNSwnRTh9boBb39FAgOACyZVsgaMN63v2eRt8fDgOIln1CF6ukUVWoTLpTN2ZSmbda22q2lMVKf6CmSO6B%2FRXXpogWA62vMnzXpkDTUlJLfzTVG23bTLR1A4y32HmHOnXlE5d%2F9n9w0gMGZMjVk553zbRuokxwPqSVapm9l0vOtPekHVuTAcjoyBIez4Sf83cECF7CTDmvFxyjXbspvOqfgMS8ybNWSUGwaxrH5skBGcjY3ZebN%2BJroYk30CE2VLgt1SRXjDmp18SJ5uoa9IsnwfvIR2iZr6kEIYsJzzZwWjqACOOtaMOn58MQGOqUBFZhnSGcBLKTaE%2FDXBWWXN3kwBipDoYMemDbu2Ku6xcJPrOu0CqoO2cd8fbKMN3nJN%2FQNxwvLBygpRQQpFxAKF1uiaOAs94tCLwYHCRsvNpTgWV5AD3%2Fs3Xu%2Fd%2F8hXyUdmIxr6ZXHnnB9OYhBmhUtPvCOCoFC7uSs5%2BE1I%2B2JbM5KVqED0At69D58yHfDW8ofGUdD8lsjQJicpH1pS2nXK%2FVzOAct&X-Amz-Signature=cd958277f5c915e366d2cecd3003c3dd4dd318b86a1d4418d5c56014c17c3fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OM2EYA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuR3fkesy8%2B7dZfv%2BSuMB1LinHRUpMbA47ASo%2Fciy2kQIgU4IRAEkFvNOqfk5YyUQEOjUcCimp7ma9asm%2B1VLMZfMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEfNWGEHbnJx42wLDSrcA1D9YMBXyxyM6A9mBkwKGPeU9jrnSg9WHiEFb1h79fLkjoD8IxpdF5aNhhPL%2B1oMfUgvAQZc90rAI%2Fl5PX0Hh6ALdl38AnsWkQe3%2FdL83tAcOX33cA6XzK6fhwveAh8C1xedR5Sq2UCb%2FFZHifc5asYUqyyygSBJctgy3kjjESn7G5rbubSvQeKx0NxzcssqrMPCSn9Gy7YFT1s989WH0r9g6SIT3OZ9801Hgl0krO4wn5%2B7C1d%2B7qNgJNq1hdlhUSB9AKeYU4R6%2BpOHIIpAyEyHacaA4ZYogCQKZ63ylELcZCaNHuwCPfHN18qOY6vd%2F0cQmLHbIJ41At1Dd%2FEQw83W%2FsGFotPxCnTYzf9dRRtQvYQ2j84zKOdwDRtYAauQmx8tWK0OKaZPW1IQIDjx%2FGfxnsSLR2SFThBIIM26diIH4%2FVnI6pzqsCTvUrmwtFO%2FIEafkCCwL%2FB3HEXF42pq94KxdYopnkwzR4IWtffrwE0%2BXPStqP%2F1CexOOg4wdFIJK4HfeDNkgcvz9TYJlOFQD4qqScepaJYT2HMxlCNvwmh6BFGOU%2FiG1Us5hICF4ZCCm7bCNDSaXVgEcHScix6pZjpR%2BqPa3daHviOJtaAm8Fr6jvTvL3BrmmHgjwkMPz48MQGOqUB3o%2B8v5r1Ws%2B7m%2BOQ3NKs6NT4F0F2rdFTl9isCrjBShwyLFJgm8566nsVMO%2Bf%2BG3SSVB%2BHVE9mW8mwqIg3%2BlPbvfFgou8L8CSts6%2Bap2Haalte2TZ7Jn8Vq0At7QsqFk99HeH6uGYv%2BR0UovRNBj1guBjSheTZ54ybD65nv9nlAhiP0sp%2F%2BBUCmtGvLp8VwUHyG06I8SRgzxZGvUf5tmYNyr2Xkn7&X-Amz-Signature=13f0bfe0e154162e9700f4747f19a6ef3fb6bfadfd082545897966b6fa25870b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OM2EYA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuR3fkesy8%2B7dZfv%2BSuMB1LinHRUpMbA47ASo%2Fciy2kQIgU4IRAEkFvNOqfk5YyUQEOjUcCimp7ma9asm%2B1VLMZfMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEfNWGEHbnJx42wLDSrcA1D9YMBXyxyM6A9mBkwKGPeU9jrnSg9WHiEFb1h79fLkjoD8IxpdF5aNhhPL%2B1oMfUgvAQZc90rAI%2Fl5PX0Hh6ALdl38AnsWkQe3%2FdL83tAcOX33cA6XzK6fhwveAh8C1xedR5Sq2UCb%2FFZHifc5asYUqyyygSBJctgy3kjjESn7G5rbubSvQeKx0NxzcssqrMPCSn9Gy7YFT1s989WH0r9g6SIT3OZ9801Hgl0krO4wn5%2B7C1d%2B7qNgJNq1hdlhUSB9AKeYU4R6%2BpOHIIpAyEyHacaA4ZYogCQKZ63ylELcZCaNHuwCPfHN18qOY6vd%2F0cQmLHbIJ41At1Dd%2FEQw83W%2FsGFotPxCnTYzf9dRRtQvYQ2j84zKOdwDRtYAauQmx8tWK0OKaZPW1IQIDjx%2FGfxnsSLR2SFThBIIM26diIH4%2FVnI6pzqsCTvUrmwtFO%2FIEafkCCwL%2FB3HEXF42pq94KxdYopnkwzR4IWtffrwE0%2BXPStqP%2F1CexOOg4wdFIJK4HfeDNkgcvz9TYJlOFQD4qqScepaJYT2HMxlCNvwmh6BFGOU%2FiG1Us5hICF4ZCCm7bCNDSaXVgEcHScix6pZjpR%2BqPa3daHviOJtaAm8Fr6jvTvL3BrmmHgjwkMPz48MQGOqUB3o%2B8v5r1Ws%2B7m%2BOQ3NKs6NT4F0F2rdFTl9isCrjBShwyLFJgm8566nsVMO%2Bf%2BG3SSVB%2BHVE9mW8mwqIg3%2BlPbvfFgou8L8CSts6%2Bap2Haalte2TZ7Jn8Vq0At7QsqFk99HeH6uGYv%2BR0UovRNBj1guBjSheTZ54ybD65nv9nlAhiP0sp%2F%2BBUCmtGvLp8VwUHyG06I8SRgzxZGvUf5tmYNyr2Xkn7&X-Amz-Signature=57ef2f04ac5da97e8e1d6ec52a7932b6d824d72b5be7b49af6bb8873f242f561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OM2EYA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuR3fkesy8%2B7dZfv%2BSuMB1LinHRUpMbA47ASo%2Fciy2kQIgU4IRAEkFvNOqfk5YyUQEOjUcCimp7ma9asm%2B1VLMZfMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEfNWGEHbnJx42wLDSrcA1D9YMBXyxyM6A9mBkwKGPeU9jrnSg9WHiEFb1h79fLkjoD8IxpdF5aNhhPL%2B1oMfUgvAQZc90rAI%2Fl5PX0Hh6ALdl38AnsWkQe3%2FdL83tAcOX33cA6XzK6fhwveAh8C1xedR5Sq2UCb%2FFZHifc5asYUqyyygSBJctgy3kjjESn7G5rbubSvQeKx0NxzcssqrMPCSn9Gy7YFT1s989WH0r9g6SIT3OZ9801Hgl0krO4wn5%2B7C1d%2B7qNgJNq1hdlhUSB9AKeYU4R6%2BpOHIIpAyEyHacaA4ZYogCQKZ63ylELcZCaNHuwCPfHN18qOY6vd%2F0cQmLHbIJ41At1Dd%2FEQw83W%2FsGFotPxCnTYzf9dRRtQvYQ2j84zKOdwDRtYAauQmx8tWK0OKaZPW1IQIDjx%2FGfxnsSLR2SFThBIIM26diIH4%2FVnI6pzqsCTvUrmwtFO%2FIEafkCCwL%2FB3HEXF42pq94KxdYopnkwzR4IWtffrwE0%2BXPStqP%2F1CexOOg4wdFIJK4HfeDNkgcvz9TYJlOFQD4qqScepaJYT2HMxlCNvwmh6BFGOU%2FiG1Us5hICF4ZCCm7bCNDSaXVgEcHScix6pZjpR%2BqPa3daHviOJtaAm8Fr6jvTvL3BrmmHgjwkMPz48MQGOqUB3o%2B8v5r1Ws%2B7m%2BOQ3NKs6NT4F0F2rdFTl9isCrjBShwyLFJgm8566nsVMO%2Bf%2BG3SSVB%2BHVE9mW8mwqIg3%2BlPbvfFgou8L8CSts6%2Bap2Haalte2TZ7Jn8Vq0At7QsqFk99HeH6uGYv%2BR0UovRNBj1guBjSheTZ54ybD65nv9nlAhiP0sp%2F%2BBUCmtGvLp8VwUHyG06I8SRgzxZGvUf5tmYNyr2Xkn7&X-Amz-Signature=4313b57aef3274a73fd13147e2ec57a1ac16132ae5083a7ccb3cd6035689f6cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OM2EYA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuR3fkesy8%2B7dZfv%2BSuMB1LinHRUpMbA47ASo%2Fciy2kQIgU4IRAEkFvNOqfk5YyUQEOjUcCimp7ma9asm%2B1VLMZfMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEfNWGEHbnJx42wLDSrcA1D9YMBXyxyM6A9mBkwKGPeU9jrnSg9WHiEFb1h79fLkjoD8IxpdF5aNhhPL%2B1oMfUgvAQZc90rAI%2Fl5PX0Hh6ALdl38AnsWkQe3%2FdL83tAcOX33cA6XzK6fhwveAh8C1xedR5Sq2UCb%2FFZHifc5asYUqyyygSBJctgy3kjjESn7G5rbubSvQeKx0NxzcssqrMPCSn9Gy7YFT1s989WH0r9g6SIT3OZ9801Hgl0krO4wn5%2B7C1d%2B7qNgJNq1hdlhUSB9AKeYU4R6%2BpOHIIpAyEyHacaA4ZYogCQKZ63ylELcZCaNHuwCPfHN18qOY6vd%2F0cQmLHbIJ41At1Dd%2FEQw83W%2FsGFotPxCnTYzf9dRRtQvYQ2j84zKOdwDRtYAauQmx8tWK0OKaZPW1IQIDjx%2FGfxnsSLR2SFThBIIM26diIH4%2FVnI6pzqsCTvUrmwtFO%2FIEafkCCwL%2FB3HEXF42pq94KxdYopnkwzR4IWtffrwE0%2BXPStqP%2F1CexOOg4wdFIJK4HfeDNkgcvz9TYJlOFQD4qqScepaJYT2HMxlCNvwmh6BFGOU%2FiG1Us5hICF4ZCCm7bCNDSaXVgEcHScix6pZjpR%2BqPa3daHviOJtaAm8Fr6jvTvL3BrmmHgjwkMPz48MQGOqUB3o%2B8v5r1Ws%2B7m%2BOQ3NKs6NT4F0F2rdFTl9isCrjBShwyLFJgm8566nsVMO%2Bf%2BG3SSVB%2BHVE9mW8mwqIg3%2BlPbvfFgou8L8CSts6%2Bap2Haalte2TZ7Jn8Vq0At7QsqFk99HeH6uGYv%2BR0UovRNBj1guBjSheTZ54ybD65nv9nlAhiP0sp%2F%2BBUCmtGvLp8VwUHyG06I8SRgzxZGvUf5tmYNyr2Xkn7&X-Amz-Signature=ef12aa199ada7387aef342d3a6562346973089e7f0761da3c1fc98cb7e563a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OM2EYA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuR3fkesy8%2B7dZfv%2BSuMB1LinHRUpMbA47ASo%2Fciy2kQIgU4IRAEkFvNOqfk5YyUQEOjUcCimp7ma9asm%2B1VLMZfMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEfNWGEHbnJx42wLDSrcA1D9YMBXyxyM6A9mBkwKGPeU9jrnSg9WHiEFb1h79fLkjoD8IxpdF5aNhhPL%2B1oMfUgvAQZc90rAI%2Fl5PX0Hh6ALdl38AnsWkQe3%2FdL83tAcOX33cA6XzK6fhwveAh8C1xedR5Sq2UCb%2FFZHifc5asYUqyyygSBJctgy3kjjESn7G5rbubSvQeKx0NxzcssqrMPCSn9Gy7YFT1s989WH0r9g6SIT3OZ9801Hgl0krO4wn5%2B7C1d%2B7qNgJNq1hdlhUSB9AKeYU4R6%2BpOHIIpAyEyHacaA4ZYogCQKZ63ylELcZCaNHuwCPfHN18qOY6vd%2F0cQmLHbIJ41At1Dd%2FEQw83W%2FsGFotPxCnTYzf9dRRtQvYQ2j84zKOdwDRtYAauQmx8tWK0OKaZPW1IQIDjx%2FGfxnsSLR2SFThBIIM26diIH4%2FVnI6pzqsCTvUrmwtFO%2FIEafkCCwL%2FB3HEXF42pq94KxdYopnkwzR4IWtffrwE0%2BXPStqP%2F1CexOOg4wdFIJK4HfeDNkgcvz9TYJlOFQD4qqScepaJYT2HMxlCNvwmh6BFGOU%2FiG1Us5hICF4ZCCm7bCNDSaXVgEcHScix6pZjpR%2BqPa3daHviOJtaAm8Fr6jvTvL3BrmmHgjwkMPz48MQGOqUB3o%2B8v5r1Ws%2B7m%2BOQ3NKs6NT4F0F2rdFTl9isCrjBShwyLFJgm8566nsVMO%2Bf%2BG3SSVB%2BHVE9mW8mwqIg3%2BlPbvfFgou8L8CSts6%2Bap2Haalte2TZ7Jn8Vq0At7QsqFk99HeH6uGYv%2BR0UovRNBj1guBjSheTZ54ybD65nv9nlAhiP0sp%2F%2BBUCmtGvLp8VwUHyG06I8SRgzxZGvUf5tmYNyr2Xkn7&X-Amz-Signature=ad9fbfd3a8c995f093764b3f21fe15238e0899ce1e977a114f60284c75ae19c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OM2EYA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuR3fkesy8%2B7dZfv%2BSuMB1LinHRUpMbA47ASo%2Fciy2kQIgU4IRAEkFvNOqfk5YyUQEOjUcCimp7ma9asm%2B1VLMZfMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEfNWGEHbnJx42wLDSrcA1D9YMBXyxyM6A9mBkwKGPeU9jrnSg9WHiEFb1h79fLkjoD8IxpdF5aNhhPL%2B1oMfUgvAQZc90rAI%2Fl5PX0Hh6ALdl38AnsWkQe3%2FdL83tAcOX33cA6XzK6fhwveAh8C1xedR5Sq2UCb%2FFZHifc5asYUqyyygSBJctgy3kjjESn7G5rbubSvQeKx0NxzcssqrMPCSn9Gy7YFT1s989WH0r9g6SIT3OZ9801Hgl0krO4wn5%2B7C1d%2B7qNgJNq1hdlhUSB9AKeYU4R6%2BpOHIIpAyEyHacaA4ZYogCQKZ63ylELcZCaNHuwCPfHN18qOY6vd%2F0cQmLHbIJ41At1Dd%2FEQw83W%2FsGFotPxCnTYzf9dRRtQvYQ2j84zKOdwDRtYAauQmx8tWK0OKaZPW1IQIDjx%2FGfxnsSLR2SFThBIIM26diIH4%2FVnI6pzqsCTvUrmwtFO%2FIEafkCCwL%2FB3HEXF42pq94KxdYopnkwzR4IWtffrwE0%2BXPStqP%2F1CexOOg4wdFIJK4HfeDNkgcvz9TYJlOFQD4qqScepaJYT2HMxlCNvwmh6BFGOU%2FiG1Us5hICF4ZCCm7bCNDSaXVgEcHScix6pZjpR%2BqPa3daHviOJtaAm8Fr6jvTvL3BrmmHgjwkMPz48MQGOqUB3o%2B8v5r1Ws%2B7m%2BOQ3NKs6NT4F0F2rdFTl9isCrjBShwyLFJgm8566nsVMO%2Bf%2BG3SSVB%2BHVE9mW8mwqIg3%2BlPbvfFgou8L8CSts6%2Bap2Haalte2TZ7Jn8Vq0At7QsqFk99HeH6uGYv%2BR0UovRNBj1guBjSheTZ54ybD65nv9nlAhiP0sp%2F%2BBUCmtGvLp8VwUHyG06I8SRgzxZGvUf5tmYNyr2Xkn7&X-Amz-Signature=e5991cbc347b3aa3feec9f36838e1609c7a8cc399790bf4b79a4103a6cad08b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OM2EYA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuR3fkesy8%2B7dZfv%2BSuMB1LinHRUpMbA47ASo%2Fciy2kQIgU4IRAEkFvNOqfk5YyUQEOjUcCimp7ma9asm%2B1VLMZfMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEfNWGEHbnJx42wLDSrcA1D9YMBXyxyM6A9mBkwKGPeU9jrnSg9WHiEFb1h79fLkjoD8IxpdF5aNhhPL%2B1oMfUgvAQZc90rAI%2Fl5PX0Hh6ALdl38AnsWkQe3%2FdL83tAcOX33cA6XzK6fhwveAh8C1xedR5Sq2UCb%2FFZHifc5asYUqyyygSBJctgy3kjjESn7G5rbubSvQeKx0NxzcssqrMPCSn9Gy7YFT1s989WH0r9g6SIT3OZ9801Hgl0krO4wn5%2B7C1d%2B7qNgJNq1hdlhUSB9AKeYU4R6%2BpOHIIpAyEyHacaA4ZYogCQKZ63ylELcZCaNHuwCPfHN18qOY6vd%2F0cQmLHbIJ41At1Dd%2FEQw83W%2FsGFotPxCnTYzf9dRRtQvYQ2j84zKOdwDRtYAauQmx8tWK0OKaZPW1IQIDjx%2FGfxnsSLR2SFThBIIM26diIH4%2FVnI6pzqsCTvUrmwtFO%2FIEafkCCwL%2FB3HEXF42pq94KxdYopnkwzR4IWtffrwE0%2BXPStqP%2F1CexOOg4wdFIJK4HfeDNkgcvz9TYJlOFQD4qqScepaJYT2HMxlCNvwmh6BFGOU%2FiG1Us5hICF4ZCCm7bCNDSaXVgEcHScix6pZjpR%2BqPa3daHviOJtaAm8Fr6jvTvL3BrmmHgjwkMPz48MQGOqUB3o%2B8v5r1Ws%2B7m%2BOQ3NKs6NT4F0F2rdFTl9isCrjBShwyLFJgm8566nsVMO%2Bf%2BG3SSVB%2BHVE9mW8mwqIg3%2BlPbvfFgou8L8CSts6%2Bap2Haalte2TZ7Jn8Vq0At7QsqFk99HeH6uGYv%2BR0UovRNBj1guBjSheTZ54ybD65nv9nlAhiP0sp%2F%2BBUCmtGvLp8VwUHyG06I8SRgzxZGvUf5tmYNyr2Xkn7&X-Amz-Signature=4313b57aef3274a73fd13147e2ec57a1ac16132ae5083a7ccb3cd6035689f6cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OM2EYA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuR3fkesy8%2B7dZfv%2BSuMB1LinHRUpMbA47ASo%2Fciy2kQIgU4IRAEkFvNOqfk5YyUQEOjUcCimp7ma9asm%2B1VLMZfMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEfNWGEHbnJx42wLDSrcA1D9YMBXyxyM6A9mBkwKGPeU9jrnSg9WHiEFb1h79fLkjoD8IxpdF5aNhhPL%2B1oMfUgvAQZc90rAI%2Fl5PX0Hh6ALdl38AnsWkQe3%2FdL83tAcOX33cA6XzK6fhwveAh8C1xedR5Sq2UCb%2FFZHifc5asYUqyyygSBJctgy3kjjESn7G5rbubSvQeKx0NxzcssqrMPCSn9Gy7YFT1s989WH0r9g6SIT3OZ9801Hgl0krO4wn5%2B7C1d%2B7qNgJNq1hdlhUSB9AKeYU4R6%2BpOHIIpAyEyHacaA4ZYogCQKZ63ylELcZCaNHuwCPfHN18qOY6vd%2F0cQmLHbIJ41At1Dd%2FEQw83W%2FsGFotPxCnTYzf9dRRtQvYQ2j84zKOdwDRtYAauQmx8tWK0OKaZPW1IQIDjx%2FGfxnsSLR2SFThBIIM26diIH4%2FVnI6pzqsCTvUrmwtFO%2FIEafkCCwL%2FB3HEXF42pq94KxdYopnkwzR4IWtffrwE0%2BXPStqP%2F1CexOOg4wdFIJK4HfeDNkgcvz9TYJlOFQD4qqScepaJYT2HMxlCNvwmh6BFGOU%2FiG1Us5hICF4ZCCm7bCNDSaXVgEcHScix6pZjpR%2BqPa3daHviOJtaAm8Fr6jvTvL3BrmmHgjwkMPz48MQGOqUB3o%2B8v5r1Ws%2B7m%2BOQ3NKs6NT4F0F2rdFTl9isCrjBShwyLFJgm8566nsVMO%2Bf%2BG3SSVB%2BHVE9mW8mwqIg3%2BlPbvfFgou8L8CSts6%2Bap2Haalte2TZ7Jn8Vq0At7QsqFk99HeH6uGYv%2BR0UovRNBj1guBjSheTZ54ybD65nv9nlAhiP0sp%2F%2BBUCmtGvLp8VwUHyG06I8SRgzxZGvUf5tmYNyr2Xkn7&X-Amz-Signature=8832b474f6fc479cabe31beda38089a1470d7a3a5b722cf7f87521780c7d770f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OM2EYA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuR3fkesy8%2B7dZfv%2BSuMB1LinHRUpMbA47ASo%2Fciy2kQIgU4IRAEkFvNOqfk5YyUQEOjUcCimp7ma9asm%2B1VLMZfMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEfNWGEHbnJx42wLDSrcA1D9YMBXyxyM6A9mBkwKGPeU9jrnSg9WHiEFb1h79fLkjoD8IxpdF5aNhhPL%2B1oMfUgvAQZc90rAI%2Fl5PX0Hh6ALdl38AnsWkQe3%2FdL83tAcOX33cA6XzK6fhwveAh8C1xedR5Sq2UCb%2FFZHifc5asYUqyyygSBJctgy3kjjESn7G5rbubSvQeKx0NxzcssqrMPCSn9Gy7YFT1s989WH0r9g6SIT3OZ9801Hgl0krO4wn5%2B7C1d%2B7qNgJNq1hdlhUSB9AKeYU4R6%2BpOHIIpAyEyHacaA4ZYogCQKZ63ylELcZCaNHuwCPfHN18qOY6vd%2F0cQmLHbIJ41At1Dd%2FEQw83W%2FsGFotPxCnTYzf9dRRtQvYQ2j84zKOdwDRtYAauQmx8tWK0OKaZPW1IQIDjx%2FGfxnsSLR2SFThBIIM26diIH4%2FVnI6pzqsCTvUrmwtFO%2FIEafkCCwL%2FB3HEXF42pq94KxdYopnkwzR4IWtffrwE0%2BXPStqP%2F1CexOOg4wdFIJK4HfeDNkgcvz9TYJlOFQD4qqScepaJYT2HMxlCNvwmh6BFGOU%2FiG1Us5hICF4ZCCm7bCNDSaXVgEcHScix6pZjpR%2BqPa3daHviOJtaAm8Fr6jvTvL3BrmmHgjwkMPz48MQGOqUB3o%2B8v5r1Ws%2B7m%2BOQ3NKs6NT4F0F2rdFTl9isCrjBShwyLFJgm8566nsVMO%2Bf%2BG3SSVB%2BHVE9mW8mwqIg3%2BlPbvfFgou8L8CSts6%2Bap2Haalte2TZ7Jn8Vq0At7QsqFk99HeH6uGYv%2BR0UovRNBj1guBjSheTZ54ybD65nv9nlAhiP0sp%2F%2BBUCmtGvLp8VwUHyG06I8SRgzxZGvUf5tmYNyr2Xkn7&X-Amz-Signature=84390c249c476d840d184b5f43b3b5b87a8bdac5d03f53e8331c8f014ec1e6dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OM2EYA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuR3fkesy8%2B7dZfv%2BSuMB1LinHRUpMbA47ASo%2Fciy2kQIgU4IRAEkFvNOqfk5YyUQEOjUcCimp7ma9asm%2B1VLMZfMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEfNWGEHbnJx42wLDSrcA1D9YMBXyxyM6A9mBkwKGPeU9jrnSg9WHiEFb1h79fLkjoD8IxpdF5aNhhPL%2B1oMfUgvAQZc90rAI%2Fl5PX0Hh6ALdl38AnsWkQe3%2FdL83tAcOX33cA6XzK6fhwveAh8C1xedR5Sq2UCb%2FFZHifc5asYUqyyygSBJctgy3kjjESn7G5rbubSvQeKx0NxzcssqrMPCSn9Gy7YFT1s989WH0r9g6SIT3OZ9801Hgl0krO4wn5%2B7C1d%2B7qNgJNq1hdlhUSB9AKeYU4R6%2BpOHIIpAyEyHacaA4ZYogCQKZ63ylELcZCaNHuwCPfHN18qOY6vd%2F0cQmLHbIJ41At1Dd%2FEQw83W%2FsGFotPxCnTYzf9dRRtQvYQ2j84zKOdwDRtYAauQmx8tWK0OKaZPW1IQIDjx%2FGfxnsSLR2SFThBIIM26diIH4%2FVnI6pzqsCTvUrmwtFO%2FIEafkCCwL%2FB3HEXF42pq94KxdYopnkwzR4IWtffrwE0%2BXPStqP%2F1CexOOg4wdFIJK4HfeDNkgcvz9TYJlOFQD4qqScepaJYT2HMxlCNvwmh6BFGOU%2FiG1Us5hICF4ZCCm7bCNDSaXVgEcHScix6pZjpR%2BqPa3daHviOJtaAm8Fr6jvTvL3BrmmHgjwkMPz48MQGOqUB3o%2B8v5r1Ws%2B7m%2BOQ3NKs6NT4F0F2rdFTl9isCrjBShwyLFJgm8566nsVMO%2Bf%2BG3SSVB%2BHVE9mW8mwqIg3%2BlPbvfFgou8L8CSts6%2Bap2Haalte2TZ7Jn8Vq0At7QsqFk99HeH6uGYv%2BR0UovRNBj1guBjSheTZ54ybD65nv9nlAhiP0sp%2F%2BBUCmtGvLp8VwUHyG06I8SRgzxZGvUf5tmYNyr2Xkn7&X-Amz-Signature=19d73090d1dc4b7ab1860f490b28fe86a1f4410b07fd56374f9af83dacf97de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
