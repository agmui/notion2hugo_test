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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICZGMF7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHgNqWyJNyU3X23Q9XPwLp6EH2CMiPoPsk6Or4wkJLJbAiAWVkd8GUGQ4CmjFsb%2Bx8S7HF4JFoGbpx%2BarL4IajLRyir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM46U8CFxi5UYlATVIKtwDbrx%2BTNL8A79llwE2N%2FwmtlXxT03eAG6od%2FXQJMQfdVoL%2BBZjARSEAZloNBSDzlAYDU5tmFnNpoIfbTl4A3Rd9XN%2Fsb6UCDFbSNHQHNiThiqwUT%2FPr2LC53gT%2B9gJEVjj07UilPq0uS2%2Bp7PGyvgRq9JoqkBEB%2FxlWZbzguMc7kRieWmrHh%2Fz2PybR2K2w0fEfDRYHRkxkWeG3LC9%2BsMV4N1GKV6kClMZ%2FaYS2zZCanpUnydEd0eisNZVe011AODW8kT6sTrAm4l9WU2wUL5UCdvmZzCvP%2FjmXIhoMtwxADpcCUUU%2FFBLbawlom8jSs9SkxDqrTn1Xy6W41H6dPnEhfDMuaYLbNTg3NRp0DLSpqmqOSGJ41iRb%2FwJD%2F7sOHVV6D%2B7W0jvSN2%2FfgKMEBXRP%2FsY6nFneAm5j8txVgC6I4R2zVD389aKSmbUM92MwzatQqEqwr%2BQ63BQHs2bX%2FBMsyMsK2kvYFiR%2F0FpgN0m98oAhkf7GL0jYthWHO1xKP0CruKML%2BM%2FYVLZ0P60D8tLGP9vEub%2FXHLfFIuearDcwFr9cGiW0FnSStFu2kkTKQAUXWRtD%2FSMYOgZPwppAcY5KxB2fUEDWm6Wg5owbVw3D7ev5x8KqnI09RaC7Hcw1azQywY6pgHN%2F8dkXV4QJg1L9rYhAG35xHDalLzb6GMmG5NoV4StjaGNrf%2B93PCsvt4LK5GdylTAc8V%2Bfw4gstZp%2FvhYtTjWpwB4C1%2BS8njaBsIHAjo926mvLAh59tBc7SZiyGkibcewyN04zWvBrKSj7Yy%2FGBlziCP5OD%2FmNH%2BhDDdI%2BCFZQC1EAgo%2F1p9EzHoZRtLnU0vPbsSGX22XMYvBS3u1X8QPLMkjyjeY&X-Amz-Signature=33d9e9f062015c70d20e45ee3597f4cbb5cf78d25e8386f7410362a22a075b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICZGMF7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHgNqWyJNyU3X23Q9XPwLp6EH2CMiPoPsk6Or4wkJLJbAiAWVkd8GUGQ4CmjFsb%2Bx8S7HF4JFoGbpx%2BarL4IajLRyir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM46U8CFxi5UYlATVIKtwDbrx%2BTNL8A79llwE2N%2FwmtlXxT03eAG6od%2FXQJMQfdVoL%2BBZjARSEAZloNBSDzlAYDU5tmFnNpoIfbTl4A3Rd9XN%2Fsb6UCDFbSNHQHNiThiqwUT%2FPr2LC53gT%2B9gJEVjj07UilPq0uS2%2Bp7PGyvgRq9JoqkBEB%2FxlWZbzguMc7kRieWmrHh%2Fz2PybR2K2w0fEfDRYHRkxkWeG3LC9%2BsMV4N1GKV6kClMZ%2FaYS2zZCanpUnydEd0eisNZVe011AODW8kT6sTrAm4l9WU2wUL5UCdvmZzCvP%2FjmXIhoMtwxADpcCUUU%2FFBLbawlom8jSs9SkxDqrTn1Xy6W41H6dPnEhfDMuaYLbNTg3NRp0DLSpqmqOSGJ41iRb%2FwJD%2F7sOHVV6D%2B7W0jvSN2%2FfgKMEBXRP%2FsY6nFneAm5j8txVgC6I4R2zVD389aKSmbUM92MwzatQqEqwr%2BQ63BQHs2bX%2FBMsyMsK2kvYFiR%2F0FpgN0m98oAhkf7GL0jYthWHO1xKP0CruKML%2BM%2FYVLZ0P60D8tLGP9vEub%2FXHLfFIuearDcwFr9cGiW0FnSStFu2kkTKQAUXWRtD%2FSMYOgZPwppAcY5KxB2fUEDWm6Wg5owbVw3D7ev5x8KqnI09RaC7Hcw1azQywY6pgHN%2F8dkXV4QJg1L9rYhAG35xHDalLzb6GMmG5NoV4StjaGNrf%2B93PCsvt4LK5GdylTAc8V%2Bfw4gstZp%2FvhYtTjWpwB4C1%2BS8njaBsIHAjo926mvLAh59tBc7SZiyGkibcewyN04zWvBrKSj7Yy%2FGBlziCP5OD%2FmNH%2BhDDdI%2BCFZQC1EAgo%2F1p9EzHoZRtLnU0vPbsSGX22XMYvBS3u1X8QPLMkjyjeY&X-Amz-Signature=d75cd770fb367108190a796dfbe3881e4825e4ff45da2de2e5c3602fc4d7ac35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICZGMF7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHgNqWyJNyU3X23Q9XPwLp6EH2CMiPoPsk6Or4wkJLJbAiAWVkd8GUGQ4CmjFsb%2Bx8S7HF4JFoGbpx%2BarL4IajLRyir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM46U8CFxi5UYlATVIKtwDbrx%2BTNL8A79llwE2N%2FwmtlXxT03eAG6od%2FXQJMQfdVoL%2BBZjARSEAZloNBSDzlAYDU5tmFnNpoIfbTl4A3Rd9XN%2Fsb6UCDFbSNHQHNiThiqwUT%2FPr2LC53gT%2B9gJEVjj07UilPq0uS2%2Bp7PGyvgRq9JoqkBEB%2FxlWZbzguMc7kRieWmrHh%2Fz2PybR2K2w0fEfDRYHRkxkWeG3LC9%2BsMV4N1GKV6kClMZ%2FaYS2zZCanpUnydEd0eisNZVe011AODW8kT6sTrAm4l9WU2wUL5UCdvmZzCvP%2FjmXIhoMtwxADpcCUUU%2FFBLbawlom8jSs9SkxDqrTn1Xy6W41H6dPnEhfDMuaYLbNTg3NRp0DLSpqmqOSGJ41iRb%2FwJD%2F7sOHVV6D%2B7W0jvSN2%2FfgKMEBXRP%2FsY6nFneAm5j8txVgC6I4R2zVD389aKSmbUM92MwzatQqEqwr%2BQ63BQHs2bX%2FBMsyMsK2kvYFiR%2F0FpgN0m98oAhkf7GL0jYthWHO1xKP0CruKML%2BM%2FYVLZ0P60D8tLGP9vEub%2FXHLfFIuearDcwFr9cGiW0FnSStFu2kkTKQAUXWRtD%2FSMYOgZPwppAcY5KxB2fUEDWm6Wg5owbVw3D7ev5x8KqnI09RaC7Hcw1azQywY6pgHN%2F8dkXV4QJg1L9rYhAG35xHDalLzb6GMmG5NoV4StjaGNrf%2B93PCsvt4LK5GdylTAc8V%2Bfw4gstZp%2FvhYtTjWpwB4C1%2BS8njaBsIHAjo926mvLAh59tBc7SZiyGkibcewyN04zWvBrKSj7Yy%2FGBlziCP5OD%2FmNH%2BhDDdI%2BCFZQC1EAgo%2F1p9EzHoZRtLnU0vPbsSGX22XMYvBS3u1X8QPLMkjyjeY&X-Amz-Signature=1d8f6bcad1911ba56d6434120b2403a8ded00640ecb684fd4b179fcb28386d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICZGMF7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHgNqWyJNyU3X23Q9XPwLp6EH2CMiPoPsk6Or4wkJLJbAiAWVkd8GUGQ4CmjFsb%2Bx8S7HF4JFoGbpx%2BarL4IajLRyir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM46U8CFxi5UYlATVIKtwDbrx%2BTNL8A79llwE2N%2FwmtlXxT03eAG6od%2FXQJMQfdVoL%2BBZjARSEAZloNBSDzlAYDU5tmFnNpoIfbTl4A3Rd9XN%2Fsb6UCDFbSNHQHNiThiqwUT%2FPr2LC53gT%2B9gJEVjj07UilPq0uS2%2Bp7PGyvgRq9JoqkBEB%2FxlWZbzguMc7kRieWmrHh%2Fz2PybR2K2w0fEfDRYHRkxkWeG3LC9%2BsMV4N1GKV6kClMZ%2FaYS2zZCanpUnydEd0eisNZVe011AODW8kT6sTrAm4l9WU2wUL5UCdvmZzCvP%2FjmXIhoMtwxADpcCUUU%2FFBLbawlom8jSs9SkxDqrTn1Xy6W41H6dPnEhfDMuaYLbNTg3NRp0DLSpqmqOSGJ41iRb%2FwJD%2F7sOHVV6D%2B7W0jvSN2%2FfgKMEBXRP%2FsY6nFneAm5j8txVgC6I4R2zVD389aKSmbUM92MwzatQqEqwr%2BQ63BQHs2bX%2FBMsyMsK2kvYFiR%2F0FpgN0m98oAhkf7GL0jYthWHO1xKP0CruKML%2BM%2FYVLZ0P60D8tLGP9vEub%2FXHLfFIuearDcwFr9cGiW0FnSStFu2kkTKQAUXWRtD%2FSMYOgZPwppAcY5KxB2fUEDWm6Wg5owbVw3D7ev5x8KqnI09RaC7Hcw1azQywY6pgHN%2F8dkXV4QJg1L9rYhAG35xHDalLzb6GMmG5NoV4StjaGNrf%2B93PCsvt4LK5GdylTAc8V%2Bfw4gstZp%2FvhYtTjWpwB4C1%2BS8njaBsIHAjo926mvLAh59tBc7SZiyGkibcewyN04zWvBrKSj7Yy%2FGBlziCP5OD%2FmNH%2BhDDdI%2BCFZQC1EAgo%2F1p9EzHoZRtLnU0vPbsSGX22XMYvBS3u1X8QPLMkjyjeY&X-Amz-Signature=472d0ed48688a0efcdb3b1969c6de0e4d427c50c0348b68c70dc6fdb49b0fd29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICZGMF7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHgNqWyJNyU3X23Q9XPwLp6EH2CMiPoPsk6Or4wkJLJbAiAWVkd8GUGQ4CmjFsb%2Bx8S7HF4JFoGbpx%2BarL4IajLRyir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM46U8CFxi5UYlATVIKtwDbrx%2BTNL8A79llwE2N%2FwmtlXxT03eAG6od%2FXQJMQfdVoL%2BBZjARSEAZloNBSDzlAYDU5tmFnNpoIfbTl4A3Rd9XN%2Fsb6UCDFbSNHQHNiThiqwUT%2FPr2LC53gT%2B9gJEVjj07UilPq0uS2%2Bp7PGyvgRq9JoqkBEB%2FxlWZbzguMc7kRieWmrHh%2Fz2PybR2K2w0fEfDRYHRkxkWeG3LC9%2BsMV4N1GKV6kClMZ%2FaYS2zZCanpUnydEd0eisNZVe011AODW8kT6sTrAm4l9WU2wUL5UCdvmZzCvP%2FjmXIhoMtwxADpcCUUU%2FFBLbawlom8jSs9SkxDqrTn1Xy6W41H6dPnEhfDMuaYLbNTg3NRp0DLSpqmqOSGJ41iRb%2FwJD%2F7sOHVV6D%2B7W0jvSN2%2FfgKMEBXRP%2FsY6nFneAm5j8txVgC6I4R2zVD389aKSmbUM92MwzatQqEqwr%2BQ63BQHs2bX%2FBMsyMsK2kvYFiR%2F0FpgN0m98oAhkf7GL0jYthWHO1xKP0CruKML%2BM%2FYVLZ0P60D8tLGP9vEub%2FXHLfFIuearDcwFr9cGiW0FnSStFu2kkTKQAUXWRtD%2FSMYOgZPwppAcY5KxB2fUEDWm6Wg5owbVw3D7ev5x8KqnI09RaC7Hcw1azQywY6pgHN%2F8dkXV4QJg1L9rYhAG35xHDalLzb6GMmG5NoV4StjaGNrf%2B93PCsvt4LK5GdylTAc8V%2Bfw4gstZp%2FvhYtTjWpwB4C1%2BS8njaBsIHAjo926mvLAh59tBc7SZiyGkibcewyN04zWvBrKSj7Yy%2FGBlziCP5OD%2FmNH%2BhDDdI%2BCFZQC1EAgo%2F1p9EzHoZRtLnU0vPbsSGX22XMYvBS3u1X8QPLMkjyjeY&X-Amz-Signature=6698a41bf787e2f71812799f1d6808615264a2b81f38fa6fea6304156ab13d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICZGMF7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHgNqWyJNyU3X23Q9XPwLp6EH2CMiPoPsk6Or4wkJLJbAiAWVkd8GUGQ4CmjFsb%2Bx8S7HF4JFoGbpx%2BarL4IajLRyir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM46U8CFxi5UYlATVIKtwDbrx%2BTNL8A79llwE2N%2FwmtlXxT03eAG6od%2FXQJMQfdVoL%2BBZjARSEAZloNBSDzlAYDU5tmFnNpoIfbTl4A3Rd9XN%2Fsb6UCDFbSNHQHNiThiqwUT%2FPr2LC53gT%2B9gJEVjj07UilPq0uS2%2Bp7PGyvgRq9JoqkBEB%2FxlWZbzguMc7kRieWmrHh%2Fz2PybR2K2w0fEfDRYHRkxkWeG3LC9%2BsMV4N1GKV6kClMZ%2FaYS2zZCanpUnydEd0eisNZVe011AODW8kT6sTrAm4l9WU2wUL5UCdvmZzCvP%2FjmXIhoMtwxADpcCUUU%2FFBLbawlom8jSs9SkxDqrTn1Xy6W41H6dPnEhfDMuaYLbNTg3NRp0DLSpqmqOSGJ41iRb%2FwJD%2F7sOHVV6D%2B7W0jvSN2%2FfgKMEBXRP%2FsY6nFneAm5j8txVgC6I4R2zVD389aKSmbUM92MwzatQqEqwr%2BQ63BQHs2bX%2FBMsyMsK2kvYFiR%2F0FpgN0m98oAhkf7GL0jYthWHO1xKP0CruKML%2BM%2FYVLZ0P60D8tLGP9vEub%2FXHLfFIuearDcwFr9cGiW0FnSStFu2kkTKQAUXWRtD%2FSMYOgZPwppAcY5KxB2fUEDWm6Wg5owbVw3D7ev5x8KqnI09RaC7Hcw1azQywY6pgHN%2F8dkXV4QJg1L9rYhAG35xHDalLzb6GMmG5NoV4StjaGNrf%2B93PCsvt4LK5GdylTAc8V%2Bfw4gstZp%2FvhYtTjWpwB4C1%2BS8njaBsIHAjo926mvLAh59tBc7SZiyGkibcewyN04zWvBrKSj7Yy%2FGBlziCP5OD%2FmNH%2BhDDdI%2BCFZQC1EAgo%2F1p9EzHoZRtLnU0vPbsSGX22XMYvBS3u1X8QPLMkjyjeY&X-Amz-Signature=628b7cd545df31646b80208520a114041b37fdc4380b56fa20f6f6378ba94a08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICZGMF7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHgNqWyJNyU3X23Q9XPwLp6EH2CMiPoPsk6Or4wkJLJbAiAWVkd8GUGQ4CmjFsb%2Bx8S7HF4JFoGbpx%2BarL4IajLRyir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM46U8CFxi5UYlATVIKtwDbrx%2BTNL8A79llwE2N%2FwmtlXxT03eAG6od%2FXQJMQfdVoL%2BBZjARSEAZloNBSDzlAYDU5tmFnNpoIfbTl4A3Rd9XN%2Fsb6UCDFbSNHQHNiThiqwUT%2FPr2LC53gT%2B9gJEVjj07UilPq0uS2%2Bp7PGyvgRq9JoqkBEB%2FxlWZbzguMc7kRieWmrHh%2Fz2PybR2K2w0fEfDRYHRkxkWeG3LC9%2BsMV4N1GKV6kClMZ%2FaYS2zZCanpUnydEd0eisNZVe011AODW8kT6sTrAm4l9WU2wUL5UCdvmZzCvP%2FjmXIhoMtwxADpcCUUU%2FFBLbawlom8jSs9SkxDqrTn1Xy6W41H6dPnEhfDMuaYLbNTg3NRp0DLSpqmqOSGJ41iRb%2FwJD%2F7sOHVV6D%2B7W0jvSN2%2FfgKMEBXRP%2FsY6nFneAm5j8txVgC6I4R2zVD389aKSmbUM92MwzatQqEqwr%2BQ63BQHs2bX%2FBMsyMsK2kvYFiR%2F0FpgN0m98oAhkf7GL0jYthWHO1xKP0CruKML%2BM%2FYVLZ0P60D8tLGP9vEub%2FXHLfFIuearDcwFr9cGiW0FnSStFu2kkTKQAUXWRtD%2FSMYOgZPwppAcY5KxB2fUEDWm6Wg5owbVw3D7ev5x8KqnI09RaC7Hcw1azQywY6pgHN%2F8dkXV4QJg1L9rYhAG35xHDalLzb6GMmG5NoV4StjaGNrf%2B93PCsvt4LK5GdylTAc8V%2Bfw4gstZp%2FvhYtTjWpwB4C1%2BS8njaBsIHAjo926mvLAh59tBc7SZiyGkibcewyN04zWvBrKSj7Yy%2FGBlziCP5OD%2FmNH%2BhDDdI%2BCFZQC1EAgo%2F1p9EzHoZRtLnU0vPbsSGX22XMYvBS3u1X8QPLMkjyjeY&X-Amz-Signature=bb43caf3323e107d58e3dda1b2b74c03aea7c358ce29e6f92c66953bec2d62ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICZGMF7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHgNqWyJNyU3X23Q9XPwLp6EH2CMiPoPsk6Or4wkJLJbAiAWVkd8GUGQ4CmjFsb%2Bx8S7HF4JFoGbpx%2BarL4IajLRyir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM46U8CFxi5UYlATVIKtwDbrx%2BTNL8A79llwE2N%2FwmtlXxT03eAG6od%2FXQJMQfdVoL%2BBZjARSEAZloNBSDzlAYDU5tmFnNpoIfbTl4A3Rd9XN%2Fsb6UCDFbSNHQHNiThiqwUT%2FPr2LC53gT%2B9gJEVjj07UilPq0uS2%2Bp7PGyvgRq9JoqkBEB%2FxlWZbzguMc7kRieWmrHh%2Fz2PybR2K2w0fEfDRYHRkxkWeG3LC9%2BsMV4N1GKV6kClMZ%2FaYS2zZCanpUnydEd0eisNZVe011AODW8kT6sTrAm4l9WU2wUL5UCdvmZzCvP%2FjmXIhoMtwxADpcCUUU%2FFBLbawlom8jSs9SkxDqrTn1Xy6W41H6dPnEhfDMuaYLbNTg3NRp0DLSpqmqOSGJ41iRb%2FwJD%2F7sOHVV6D%2B7W0jvSN2%2FfgKMEBXRP%2FsY6nFneAm5j8txVgC6I4R2zVD389aKSmbUM92MwzatQqEqwr%2BQ63BQHs2bX%2FBMsyMsK2kvYFiR%2F0FpgN0m98oAhkf7GL0jYthWHO1xKP0CruKML%2BM%2FYVLZ0P60D8tLGP9vEub%2FXHLfFIuearDcwFr9cGiW0FnSStFu2kkTKQAUXWRtD%2FSMYOgZPwppAcY5KxB2fUEDWm6Wg5owbVw3D7ev5x8KqnI09RaC7Hcw1azQywY6pgHN%2F8dkXV4QJg1L9rYhAG35xHDalLzb6GMmG5NoV4StjaGNrf%2B93PCsvt4LK5GdylTAc8V%2Bfw4gstZp%2FvhYtTjWpwB4C1%2BS8njaBsIHAjo926mvLAh59tBc7SZiyGkibcewyN04zWvBrKSj7Yy%2FGBlziCP5OD%2FmNH%2BhDDdI%2BCFZQC1EAgo%2F1p9EzHoZRtLnU0vPbsSGX22XMYvBS3u1X8QPLMkjyjeY&X-Amz-Signature=363b43b68ca1e78d469bcdc61dec142a3a13ec6bacb80afa05c9db03c26b713f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICZGMF7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHgNqWyJNyU3X23Q9XPwLp6EH2CMiPoPsk6Or4wkJLJbAiAWVkd8GUGQ4CmjFsb%2Bx8S7HF4JFoGbpx%2BarL4IajLRyir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM46U8CFxi5UYlATVIKtwDbrx%2BTNL8A79llwE2N%2FwmtlXxT03eAG6od%2FXQJMQfdVoL%2BBZjARSEAZloNBSDzlAYDU5tmFnNpoIfbTl4A3Rd9XN%2Fsb6UCDFbSNHQHNiThiqwUT%2FPr2LC53gT%2B9gJEVjj07UilPq0uS2%2Bp7PGyvgRq9JoqkBEB%2FxlWZbzguMc7kRieWmrHh%2Fz2PybR2K2w0fEfDRYHRkxkWeG3LC9%2BsMV4N1GKV6kClMZ%2FaYS2zZCanpUnydEd0eisNZVe011AODW8kT6sTrAm4l9WU2wUL5UCdvmZzCvP%2FjmXIhoMtwxADpcCUUU%2FFBLbawlom8jSs9SkxDqrTn1Xy6W41H6dPnEhfDMuaYLbNTg3NRp0DLSpqmqOSGJ41iRb%2FwJD%2F7sOHVV6D%2B7W0jvSN2%2FfgKMEBXRP%2FsY6nFneAm5j8txVgC6I4R2zVD389aKSmbUM92MwzatQqEqwr%2BQ63BQHs2bX%2FBMsyMsK2kvYFiR%2F0FpgN0m98oAhkf7GL0jYthWHO1xKP0CruKML%2BM%2FYVLZ0P60D8tLGP9vEub%2FXHLfFIuearDcwFr9cGiW0FnSStFu2kkTKQAUXWRtD%2FSMYOgZPwppAcY5KxB2fUEDWm6Wg5owbVw3D7ev5x8KqnI09RaC7Hcw1azQywY6pgHN%2F8dkXV4QJg1L9rYhAG35xHDalLzb6GMmG5NoV4StjaGNrf%2B93PCsvt4LK5GdylTAc8V%2Bfw4gstZp%2FvhYtTjWpwB4C1%2BS8njaBsIHAjo926mvLAh59tBc7SZiyGkibcewyN04zWvBrKSj7Yy%2FGBlziCP5OD%2FmNH%2BhDDdI%2BCFZQC1EAgo%2F1p9EzHoZRtLnU0vPbsSGX22XMYvBS3u1X8QPLMkjyjeY&X-Amz-Signature=11004a5a34e301fa0f86f0eeb60b6b048e85ea69fbda9c1f6f26539bfdf620a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICZGMF7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHgNqWyJNyU3X23Q9XPwLp6EH2CMiPoPsk6Or4wkJLJbAiAWVkd8GUGQ4CmjFsb%2Bx8S7HF4JFoGbpx%2BarL4IajLRyir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM46U8CFxi5UYlATVIKtwDbrx%2BTNL8A79llwE2N%2FwmtlXxT03eAG6od%2FXQJMQfdVoL%2BBZjARSEAZloNBSDzlAYDU5tmFnNpoIfbTl4A3Rd9XN%2Fsb6UCDFbSNHQHNiThiqwUT%2FPr2LC53gT%2B9gJEVjj07UilPq0uS2%2Bp7PGyvgRq9JoqkBEB%2FxlWZbzguMc7kRieWmrHh%2Fz2PybR2K2w0fEfDRYHRkxkWeG3LC9%2BsMV4N1GKV6kClMZ%2FaYS2zZCanpUnydEd0eisNZVe011AODW8kT6sTrAm4l9WU2wUL5UCdvmZzCvP%2FjmXIhoMtwxADpcCUUU%2FFBLbawlom8jSs9SkxDqrTn1Xy6W41H6dPnEhfDMuaYLbNTg3NRp0DLSpqmqOSGJ41iRb%2FwJD%2F7sOHVV6D%2B7W0jvSN2%2FfgKMEBXRP%2FsY6nFneAm5j8txVgC6I4R2zVD389aKSmbUM92MwzatQqEqwr%2BQ63BQHs2bX%2FBMsyMsK2kvYFiR%2F0FpgN0m98oAhkf7GL0jYthWHO1xKP0CruKML%2BM%2FYVLZ0P60D8tLGP9vEub%2FXHLfFIuearDcwFr9cGiW0FnSStFu2kkTKQAUXWRtD%2FSMYOgZPwppAcY5KxB2fUEDWm6Wg5owbVw3D7ev5x8KqnI09RaC7Hcw1azQywY6pgHN%2F8dkXV4QJg1L9rYhAG35xHDalLzb6GMmG5NoV4StjaGNrf%2B93PCsvt4LK5GdylTAc8V%2Bfw4gstZp%2FvhYtTjWpwB4C1%2BS8njaBsIHAjo926mvLAh59tBc7SZiyGkibcewyN04zWvBrKSj7Yy%2FGBlziCP5OD%2FmNH%2BhDDdI%2BCFZQC1EAgo%2F1p9EzHoZRtLnU0vPbsSGX22XMYvBS3u1X8QPLMkjyjeY&X-Amz-Signature=7bbb3b9be2b9d37e1ed411e359dbaacd8216aa6fb10d7eed6eae6747808ba6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLTIQ4CP%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAVFO5gXi%2B8osKT0ZLJaCZaLJr%2Bm%2B5YX9LLZNHfRh2CaAiEA%2Bzz2LiasAWxOLXfPfPq4SSKTmYvITHHJyvi1unkCMSwq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDAQg609%2BoN4TZgWPnCrcA2NC8zmRbgdkEvx5V6A45%2BXoKGlDdGiYIoi%2FPKR2FEvFt3rOUBSnvP%2FeIhbztS%2Bm6goppYotKwfT2gXVFRb9qSI44cH1kwpSwzZADIxN1hsRNqozwJ2bl3b%2FB3q7WS6%2Bh7DznlHNvvr9tPn8ZOwnM%2FLKHKUMxlDPas8J5P3IBh%2BQuT3E4vrGaFQs7CMOMw1cM%2B4mLbN0WonnkW4YIMrToerp2u9BG00Q2Ff7t%2BWlzDckgF0GDSkVXeMZok9KnT7f5Gx524JMuvaHjB9TmgxV0ZDI5yQ6xXJITYStookRzR%2BqRrVRUPNoa5x989wrjxzlpaMJsTbL3wrnQpC7r2Cy%2BoHu3ItUlBOE8tkISVA1DxclPU7rqHAYMeu%2FWULUfo%2FBNbIzte1foToasiEJ28Sm68l5tjlbMusBA4T%2FOcMQpQX%2F9OCZZYL%2BEEOvkUrE3xfg48zyyJEANfoMxIudQj4a66hUaEfRcosTq9Czf7hVbAEsVPfRKI%2Bgpf%2BxH1bFjsiLSsR9wIw35pAn31Q0iGo%2Fjik3I4xa1LwUOzDxw%2FHdtQw9fWzsHyDaeaXXLb%2F4qX50AFGhYbzc%2Fhdpx1Op%2B%2FSwUt5Pc6CayNomq7P8FNHkDTNK7UJxJUD5c36bqIj7MJKs0MsGOqUBdOIk8dvFZfUpr1IDrkl8fayzVSjH6t26LpdjQAvvOt4658uiyxmYFbBBJodloZfUGrF1e%2BocpDAS%2B9Xi7BAvv9Q2t32%2FmLKzI4ose2%2BefrZSvVCN8WRdrDZJf25EwsRVfxh5lI%2F0YlPQ3UgOQpCCzC9Jt1FsaddYyahQK37ggCEYojTmOOUM451Rl6jgGVRPt32wDTBUvwaYnQRqjieFCBeCIT0T&X-Amz-Signature=996ad6723d33448ab3eb31c09a91e8ab4916a444aa73c09ad9954ec1dc6e9281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3N67IAL%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQC%2FucQgIK0lm6zciEWU0lQvbzg%2FAgVNAMsEVoTx0EthYAIhALJ3wckR3NrepWrWrDCpd3EVB%2FHad4FezSwVD6nm%2F8jwKv8DCAIQABoMNjM3NDIzMTgzODA1Igw4%2FbC0pDTcFFPPT8sq3APDirReeZIfgIO51tgZJr9uGpGDNlUuK9DhxYRsRuQuO7O3%2FaT8pTJ%2FOzwWAidiWxIStMILX%2B6v1rjJ3asn4gzuNgOGloM8BQMYTOFQaRxwwR0ZxfVjWLO2zoK2Dy2oHKoClNEXBn7SD%2BcllroTywzaALEaZrHmaH2d7y33rbOTidKugBmGNGta167jQR0VveCceo%2Fis81AmIS%2F6n4O1HlAh3LUYu6CEnDlMmVnq1T4nme0ZEaZxBEN%2Ff8MyUgs%2BjYPdbd%2ByVIs%2Fpay%2Binqb1v2fisQ5K8xnMna6ycye91asDequC3RkP0%2FgwQ84pLeh1oizqVcg8670Imj54fmr4mE2VtjZKDSnLUT9ieYQuAvYDe3Ws%2BXjEVWv2nPyGYLTJ34mSYKWLFhdqebDpb9m%2FQfV7Qm5O%2FOccxMlbyjcYmgcafucGGEJVEvIqx7wAEbdN4wy2S7ckIlcL6JrypfzO6Qmy%2BFU5HK6Dkyj5kQfoXI4r5MZS%2Fhenhe0TC9y8Hs3nnA3nRhMRLLupaSe5fJDNBYIZQzQ9uM46RzicALAZEU2agQ1n6Ik0FAk%2B%2BTM0I8noEi%2FhxK7LmzRtLKNBl1iV%2FM2ngkPejObpf4wAGHP%2F8pydOS6TIMPq%2FLYSXKwjCZrNDLBjqkAfdqkooq3VIFghNnUM1jobNFH0g41oAnIFpDnA92a6jayg8%2By%2B2Kz%2F6Jk1gY3u%2Fy6uaIThCLfT6hMoofzoDhAfqaUTYJoeIxiMZiGV7wT6OounEFc4dF1hVBEzbU0MGw4UEqhIe%2F1rDMiWeVtXpC6fz90A3hIUVqiUqyLf9snTXLJ2NTgqozWSIgmOBaxXZxfYxk9mCMIQggcK0Wg2gAU%2FvC8VIj&X-Amz-Signature=6865302eac26d4ac42e7482270d79e63c47dbaf5e65d5384ab02501b7b938c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HKW2KHU%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAfximDzMMRfwUDF5h08xFXQNsKgOlSK1sn2M1quq0VnAiAlH2O5e3WLq41vwbNqw6GqYgEL8OIB4LPJcAdNQB1ItSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMON160MSi94TfMat9KtwDn6P4ilZrippgNKLSunOzN29w5WdYg%2B%2BW5XGYFaazyBpLSvu9O89r9qh%2FdgrKLkWkZuqu2rRd9FXecStUpDFg%2BpDgTnjnHSzV5OBUgCtebcvnsdcZEPsKcp0TfMVz%2BADuODNQ9J7oHG%2BsjUJ%2Bl%2Bv1d4kglUVZ11qVPoPXz9MNiavwHuAgvXYYPJbtl2syfCbG8FgYOkDk4%2BvF4jTbxatD%2FxL2PNGm1g0rbu1%2FsImTtOkDkjbv50BxNLn1MT40PVMrMP5ArftyChsS1EBZzBFDDwmIACrjEBbMTkjGQ%2BKXwLaiVEJdIYbit%2Fn3QKuOLQ6upT0pt1o%2FadufkPfBlDvkCXuoWX%2FyN%2Bjyr8Rp4NNvEaWNYcSI0ovnvGQJGqGYJjH1i2%2Bk0DJ1Dd3Xi1L3x6QhtYo8XJbEhWVBDc5%2BNSU4NFWmo1PAZbKStkj7XtCWiZeix58AY39qQpFwUopzIVDS4yJXc9X1XcTzw%2B142UYU8id19HYg78yTV9x9Hgti4%2FDJIASUHMlNXVfgogIyuBwhHrGBuHoVCv1yj5oP%2FX%2BUMpSlYjnlv1p2aaRNvRSq3TjUEPOTm%2F2yHj9NCeit4UNS7zfxd9hMF8tAywCoxX8ejKgrijvm%2FiBzvHQP1vkw4KvQywY6pgF6rDk%2BJMnFgFya32SIoA08QrNFsKj6w5%2FWq4WibKcsKycDHbsJh%2FQGEDwDw%2F9DgJlN8lPTpDXWmnepy2i99VlR3dhMHkBc27efjepNSazrKKcQ3XCvOQfn79LuYA%2BfGChD4kP65VRy98ylDD3I4hF16GCQ6ri4np98gRlB%2FfjaixTCXeBn5SmsmZpSs0Hx66nmAyScb1fh9AfS%2BWyozGrn1s2zDVyk&X-Amz-Signature=d4d4581b79bec09c489094958d880d8957f30f9f49216d70d7e464fe21ede662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICZGMF7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHgNqWyJNyU3X23Q9XPwLp6EH2CMiPoPsk6Or4wkJLJbAiAWVkd8GUGQ4CmjFsb%2Bx8S7HF4JFoGbpx%2BarL4IajLRyir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM46U8CFxi5UYlATVIKtwDbrx%2BTNL8A79llwE2N%2FwmtlXxT03eAG6od%2FXQJMQfdVoL%2BBZjARSEAZloNBSDzlAYDU5tmFnNpoIfbTl4A3Rd9XN%2Fsb6UCDFbSNHQHNiThiqwUT%2FPr2LC53gT%2B9gJEVjj07UilPq0uS2%2Bp7PGyvgRq9JoqkBEB%2FxlWZbzguMc7kRieWmrHh%2Fz2PybR2K2w0fEfDRYHRkxkWeG3LC9%2BsMV4N1GKV6kClMZ%2FaYS2zZCanpUnydEd0eisNZVe011AODW8kT6sTrAm4l9WU2wUL5UCdvmZzCvP%2FjmXIhoMtwxADpcCUUU%2FFBLbawlom8jSs9SkxDqrTn1Xy6W41H6dPnEhfDMuaYLbNTg3NRp0DLSpqmqOSGJ41iRb%2FwJD%2F7sOHVV6D%2B7W0jvSN2%2FfgKMEBXRP%2FsY6nFneAm5j8txVgC6I4R2zVD389aKSmbUM92MwzatQqEqwr%2BQ63BQHs2bX%2FBMsyMsK2kvYFiR%2F0FpgN0m98oAhkf7GL0jYthWHO1xKP0CruKML%2BM%2FYVLZ0P60D8tLGP9vEub%2FXHLfFIuearDcwFr9cGiW0FnSStFu2kkTKQAUXWRtD%2FSMYOgZPwppAcY5KxB2fUEDWm6Wg5owbVw3D7ev5x8KqnI09RaC7Hcw1azQywY6pgHN%2F8dkXV4QJg1L9rYhAG35xHDalLzb6GMmG5NoV4StjaGNrf%2B93PCsvt4LK5GdylTAc8V%2Bfw4gstZp%2FvhYtTjWpwB4C1%2BS8njaBsIHAjo926mvLAh59tBc7SZiyGkibcewyN04zWvBrKSj7Yy%2FGBlziCP5OD%2FmNH%2BhDDdI%2BCFZQC1EAgo%2F1p9EzHoZRtLnU0vPbsSGX22XMYvBS3u1X8QPLMkjyjeY&X-Amz-Signature=ce67554034379a269608444094d8a4de60ba9a11101ad8d3f393de59761ae65c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUHLQPGT%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDuzP2qXRUyaZBdyDr3tBRGxJ9zv1dGTF6eeS%2FInJ4wxAIgHwyw59YkKFU01sVkUHBUSD6S56CzvYDJFhE0s7u5FGYq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDMMwLayPLJts2EGkoSrcA%2FZs3ABhrEFm7VF08kJDaWmb3CJodqtOQNVS7JTgR%2FdJgAFeEUGz2%2B3dyrhpmn%2B6S5VLceGruRoG925140T7571nU6ESKr320gUmWcFV9gM8oB0NyZhnViETO%2FX1j3%2FkBpqsS3ICq2FWT%2B8OpUGcg0nsdMx%2F1virSIqxCUf8fQu1QqsxsxgPmxD5k0QHk3So6ar8vGcpsALM%2B%2FPoUjtISCLWTVLZsO3PIJB8%2F4xuusqWo5wyCOwqxR6R2tW2%2Fu6ntFPTeOe2gJ3hi3WfGyE19OxWWgPmrdbIVvrELxUVqE9Ti9aQZ8%2F%2BHHNJhqd%2BqbuzZ6zuiJd1HykVsWJMj1PsCRZDL6WHBXr1IDXMSAO8oNjldoe3yHcoeu8f1zI8zQKwsrJfDSOjwHnCmGi6bkNFxWXS%2Fey%2FslvkxqUegdz1%2BI0AOridOeQ54QmZRjoSv6jXPW9EO9mcfdVRn96Yd8riz6fyVLKc8knlQ2FxxqT6FhJSx8R7ZB1%2BsRQCYptbaxUdo7AUSpzAu6DCWySnuxOqim91n%2FuiPCdw8aNgEApSg8svp9OvEvk35%2FKhjUMKo7xfnNueed6l7V32e8vYh4E9jCqyvOZTWRcIr7Yb9KthiQRnxVghS0FuaYWBVsUdMKys0MsGOqUBw9YrOTm4BBC07q9WngE6jTQJ0vxcB0uS08u9wQRayjkTdVJt%2BAcrjvVSQDFf%2Fe4qIcTNgO3qyYwUhd5Npu7kvsfpuKzS52SL1Qo52MdRCvadn8LETS15UO8kin9ktMHvHyBiObItb1rnPLcQPie41vD1m4elipZ4btUhHg2JOebt%2BYIzHTgE7IAXvtsYb%2BBCXpKy54Nh8qxwiqLgmgKclbWdFHwQ&X-Amz-Signature=59a4776081a1bb223c9cc4e818ec34a9764f63b33e04dc671b668c1467c0f835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICZGMF7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHgNqWyJNyU3X23Q9XPwLp6EH2CMiPoPsk6Or4wkJLJbAiAWVkd8GUGQ4CmjFsb%2Bx8S7HF4JFoGbpx%2BarL4IajLRyir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM46U8CFxi5UYlATVIKtwDbrx%2BTNL8A79llwE2N%2FwmtlXxT03eAG6od%2FXQJMQfdVoL%2BBZjARSEAZloNBSDzlAYDU5tmFnNpoIfbTl4A3Rd9XN%2Fsb6UCDFbSNHQHNiThiqwUT%2FPr2LC53gT%2B9gJEVjj07UilPq0uS2%2Bp7PGyvgRq9JoqkBEB%2FxlWZbzguMc7kRieWmrHh%2Fz2PybR2K2w0fEfDRYHRkxkWeG3LC9%2BsMV4N1GKV6kClMZ%2FaYS2zZCanpUnydEd0eisNZVe011AODW8kT6sTrAm4l9WU2wUL5UCdvmZzCvP%2FjmXIhoMtwxADpcCUUU%2FFBLbawlom8jSs9SkxDqrTn1Xy6W41H6dPnEhfDMuaYLbNTg3NRp0DLSpqmqOSGJ41iRb%2FwJD%2F7sOHVV6D%2B7W0jvSN2%2FfgKMEBXRP%2FsY6nFneAm5j8txVgC6I4R2zVD389aKSmbUM92MwzatQqEqwr%2BQ63BQHs2bX%2FBMsyMsK2kvYFiR%2F0FpgN0m98oAhkf7GL0jYthWHO1xKP0CruKML%2BM%2FYVLZ0P60D8tLGP9vEub%2FXHLfFIuearDcwFr9cGiW0FnSStFu2kkTKQAUXWRtD%2FSMYOgZPwppAcY5KxB2fUEDWm6Wg5owbVw3D7ev5x8KqnI09RaC7Hcw1azQywY6pgHN%2F8dkXV4QJg1L9rYhAG35xHDalLzb6GMmG5NoV4StjaGNrf%2B93PCsvt4LK5GdylTAc8V%2Bfw4gstZp%2FvhYtTjWpwB4C1%2BS8njaBsIHAjo926mvLAh59tBc7SZiyGkibcewyN04zWvBrKSj7Yy%2FGBlziCP5OD%2FmNH%2BhDDdI%2BCFZQC1EAgo%2F1p9EzHoZRtLnU0vPbsSGX22XMYvBS3u1X8QPLMkjyjeY&X-Amz-Signature=57e8834641059132d1dabb81296a75d9267cfbb0bc47e560eb9b3bb04d3ea422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663AQ4CFV%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEIxjrCCiWrWSr9Z1UB1MQoVJAofb%2BbIOXI%2B%2B4SJ6JE1AiEAkHAXef65Fioa2Kkis2RhY9g5sh6XpXEI6aFHoCmIM9Qq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDGDVxTCfrpHjKXxmMyrcA7PYxT7fN8Rk1A7sYVJbTSowSz%2BYS4R6AMhPJLcRX3uDigmtIq1EwHyPPIWWoHbDAycxtTevnu137Sr4zQ2giL4CxV9xpFZDxsRgaoKVXyrDAULFTdre9r27Hp6wUGYYyHcZtBBTB4l1Rg9NcONH%2BSAIbN3K4elQ51DdTsb4vaPd9W8DsFAFqceNrf%2BgXLD8XsQUXAwdCm249JdNOi%2Fh3SxEzwFa6KA4tazuuADvitgtJqPJjVuiP6EPnDGYMRUQwBVotDeMxpmcBmdeWX6joSvj3H6cCQQDzUUOaahnFcdcfLzWUDLbROqWbpYKt9dw4b6l4eKjsJSNqthYELeYS51q65M1DVKmaH9Xdq4sotI3q3lIQhaXy91eG1ZG7ddbSgTYcpW7wfWvnabD8IBbTHstXBLsN%2BUMt8JYOFg7JXwr%2BOSdXiieGVuspkluK%2FGz7mTYaBrg3tXJAQZIwY5La3ntXhUfzuiZVmvT2WvvyKRkMvxgBywiEZ%2BFLMQnefCuXPWVxW5MVBCj2eNqu1hObz4EzImKEuNI02lzEuXQ0%2BStzU5b8sZZ2W2STKDcqvLtnSCmdvnAN2%2F1RkTvhf1XaydmV6KiFPBfS90Fb30LepsqODjwXEDi%2BTaOBxNvMKes0MsGOqUBVGY8qkgubM5oP8ixYLITKhabTqxFdSInKJvCvma2E3YUXCHhClZia2dnMXS2shrSLeUcOj9DcaBDGYLrC%2FzxCFCYPWU%2F9BAofdZ6yHESx%2F6%2FN7shRGSFvDhAli7YRzdlaHFtWi1Q1DgMvbBt9Zicj6d5mePiGubQlmJ3X7%2BgRpP6zQSSwwklp0A%2FqM5aB%2F7%2BtQm4ajsrIsEQWOGe3BiGWcg5HI%2F0&X-Amz-Signature=9d2abdf1a12b6a496331395de84dbbd40ca87403de32dda26cb1539b896e9c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICZGMF7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHgNqWyJNyU3X23Q9XPwLp6EH2CMiPoPsk6Or4wkJLJbAiAWVkd8GUGQ4CmjFsb%2Bx8S7HF4JFoGbpx%2BarL4IajLRyir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM46U8CFxi5UYlATVIKtwDbrx%2BTNL8A79llwE2N%2FwmtlXxT03eAG6od%2FXQJMQfdVoL%2BBZjARSEAZloNBSDzlAYDU5tmFnNpoIfbTl4A3Rd9XN%2Fsb6UCDFbSNHQHNiThiqwUT%2FPr2LC53gT%2B9gJEVjj07UilPq0uS2%2Bp7PGyvgRq9JoqkBEB%2FxlWZbzguMc7kRieWmrHh%2Fz2PybR2K2w0fEfDRYHRkxkWeG3LC9%2BsMV4N1GKV6kClMZ%2FaYS2zZCanpUnydEd0eisNZVe011AODW8kT6sTrAm4l9WU2wUL5UCdvmZzCvP%2FjmXIhoMtwxADpcCUUU%2FFBLbawlom8jSs9SkxDqrTn1Xy6W41H6dPnEhfDMuaYLbNTg3NRp0DLSpqmqOSGJ41iRb%2FwJD%2F7sOHVV6D%2B7W0jvSN2%2FfgKMEBXRP%2FsY6nFneAm5j8txVgC6I4R2zVD389aKSmbUM92MwzatQqEqwr%2BQ63BQHs2bX%2FBMsyMsK2kvYFiR%2F0FpgN0m98oAhkf7GL0jYthWHO1xKP0CruKML%2BM%2FYVLZ0P60D8tLGP9vEub%2FXHLfFIuearDcwFr9cGiW0FnSStFu2kkTKQAUXWRtD%2FSMYOgZPwppAcY5KxB2fUEDWm6Wg5owbVw3D7ev5x8KqnI09RaC7Hcw1azQywY6pgHN%2F8dkXV4QJg1L9rYhAG35xHDalLzb6GMmG5NoV4StjaGNrf%2B93PCsvt4LK5GdylTAc8V%2Bfw4gstZp%2FvhYtTjWpwB4C1%2BS8njaBsIHAjo926mvLAh59tBc7SZiyGkibcewyN04zWvBrKSj7Yy%2FGBlziCP5OD%2FmNH%2BhDDdI%2BCFZQC1EAgo%2F1p9EzHoZRtLnU0vPbsSGX22XMYvBS3u1X8QPLMkjyjeY&X-Amz-Signature=258ec626c3c282ed5beb58a5620f8e06623487fe79020b73d10d87c0967e91e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGY3XVL2%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD7Hagu00m4I5WCarrKhtYbIoBT3WBkhXphZV02RgPhMAIgQ4i2v93I5hSZz%2BnKRhTzamYMz92BTe%2BT2JRcPeLDaHMq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDDpFokAfDLMYinjUmSrcA25t3tlcu7pUGwLa4g5BkoYOsDkoDXGnPIQfn4DBQdKIvdOqkvigkPD%2Bud15xxlNEf5NKWR0mYKcQWGfkOX%2F1oeHUyWX3SQvTWfaXaLPbjKhR3dsrMOpIPOTTZr8wopmwYJGgV60NW1bwRLRHqW0J8N8mJfLg9221JyjLYvSdoxguyLhVLFgPmrguRpJuvGl1CjQnAHZphUV6%2FV%2FTpg6C1Km%2B%2BUO%2BlMp%2F58HwFrL2SLZHPb4FiNqb447iMC99ZJW1HTdYYIHUsZdR6a5ctAW1YNtcLBC5JYJHaxtoL9Q%2BR%2BlEmkLCLuAbD73FIaVjGd%2Fv70%2FvDdtzlPR46OWhvUt5FHTQH7AGERau9u7qAXK8gS4NOj4HHrBrBH5L3md%2FUwLuGli%2FobdWqGRv5wORUSI4D2OJStU7jM7twCUvZG71nRct9%2FYwHcVU49vIRw6M5MnFh6wiyQyFtuL5w5wZPAoQEntnlpg7sMmi28%2Fa2L27gtc0oA4gc3jQKdHcL85cbqbF5tsQ7OlH8o65oCQuB6nZiQZj8lI2uDAnAetdMlkdMgqJpFFhppCyi07%2FpjOyys6c6O0tFdlkb3%2BK8y67L2lWatT9XfSERhPZEIbgmdfAYToawnJfMq44fV%2FgUbhMI2s0MsGOqUB5OAfw69k0b3QWZ9T752xChm4OC6aJlKPO3z13m2XJ%2BEgTZFeFpjYpVh7BvUarvYFHzuC24IOIwT7ZlYmO8WDPCuqKB4gNa2KZrUkAD7dgNo1gm1EJ2BaRx3jCynxYXvEua7rfkhkrtAGy5TiTTf1yjPqwKNLEPKzHFnTCaQhiXVpFcEDJovlRBlacHVEmJYC4ZZ3BasXTMgtVhD40jG3S4HZn96e&X-Amz-Signature=612487878636adcf2895d3f6d84274a000c191a2e3548d5d4c6f2a287e48f429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICZGMF7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHgNqWyJNyU3X23Q9XPwLp6EH2CMiPoPsk6Or4wkJLJbAiAWVkd8GUGQ4CmjFsb%2Bx8S7HF4JFoGbpx%2BarL4IajLRyir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM46U8CFxi5UYlATVIKtwDbrx%2BTNL8A79llwE2N%2FwmtlXxT03eAG6od%2FXQJMQfdVoL%2BBZjARSEAZloNBSDzlAYDU5tmFnNpoIfbTl4A3Rd9XN%2Fsb6UCDFbSNHQHNiThiqwUT%2FPr2LC53gT%2B9gJEVjj07UilPq0uS2%2Bp7PGyvgRq9JoqkBEB%2FxlWZbzguMc7kRieWmrHh%2Fz2PybR2K2w0fEfDRYHRkxkWeG3LC9%2BsMV4N1GKV6kClMZ%2FaYS2zZCanpUnydEd0eisNZVe011AODW8kT6sTrAm4l9WU2wUL5UCdvmZzCvP%2FjmXIhoMtwxADpcCUUU%2FFBLbawlom8jSs9SkxDqrTn1Xy6W41H6dPnEhfDMuaYLbNTg3NRp0DLSpqmqOSGJ41iRb%2FwJD%2F7sOHVV6D%2B7W0jvSN2%2FfgKMEBXRP%2FsY6nFneAm5j8txVgC6I4R2zVD389aKSmbUM92MwzatQqEqwr%2BQ63BQHs2bX%2FBMsyMsK2kvYFiR%2F0FpgN0m98oAhkf7GL0jYthWHO1xKP0CruKML%2BM%2FYVLZ0P60D8tLGP9vEub%2FXHLfFIuearDcwFr9cGiW0FnSStFu2kkTKQAUXWRtD%2FSMYOgZPwppAcY5KxB2fUEDWm6Wg5owbVw3D7ev5x8KqnI09RaC7Hcw1azQywY6pgHN%2F8dkXV4QJg1L9rYhAG35xHDalLzb6GMmG5NoV4StjaGNrf%2B93PCsvt4LK5GdylTAc8V%2Bfw4gstZp%2FvhYtTjWpwB4C1%2BS8njaBsIHAjo926mvLAh59tBc7SZiyGkibcewyN04zWvBrKSj7Yy%2FGBlziCP5OD%2FmNH%2BhDDdI%2BCFZQC1EAgo%2F1p9EzHoZRtLnU0vPbsSGX22XMYvBS3u1X8QPLMkjyjeY&X-Amz-Signature=6680a08ef50f68999ddb580df816cf63e2a6f1275963476b6c6dc8ae52afc5a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665Y7Q4W2%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDfzxhUzT0CBJokgOPxjWFr%2B7IFSD6Yo99C9shaH%2FTOTAIgH0wiOcqmiaJfVTDOBf5ji3Mo%2B%2F%2Bs4tBm6O%2BsQYwE0CIq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDK0R%2FV5w6Cp7SWxd0yrcA9ZbOLXWM6LqDto0TxwYKDApthS8oJMoryBRBb0nhQLVKKYAmCaY%2F0KEfmcweXjD6PcHntm72yEjAKAEpF6MEDLo5b6v0YfOtrymhikkWW8O6UYcWl67tVh3C%2FsWsVbdCeyJHnghOwCIi8KXqT8TUq6G6myF07q7nEkdeQOEArZWXmqj9tCtXGPBRHlLqbJpFSvDsEcUxH63hg2pH1v0ibg%2FsHla4%2BcvVto0rlCAGJcR4zndeu123duPi6J6roM3ECFu9yLzpJVSGVwtA%2BLG4UkvLwbfWOfGxzyiCz9j56%2F1SvKSKFMlzXSWLzkRNccmfBkw0%2F5o8ZtvJ7DyhVATroeFMNS7bafe%2BCHlQ1JKkdZxxufHiSOPdKY2UWS0MQ62YEOis0725Im0d29foN4Zz7XgALB0iumi8tvP9cYTv7mYh6O8Eebyl40Vu8w1gdTHrInLQXPQK7wS4J9PMhSwNY1ylo%2Bo%2FMC6zaVhcAS9EHrBEGmSA%2Fznd65DdEmOmekDKRQlvZ8vXYz0wJkSREXFZ%2B4R9S0U32TO3AiCiOkHFeJO5NEnfu5iDcS6WTPlH9RIc62s2nsziRnEIRSBBjOagqmfYFxEGrUYQG7wxfAtUxbr2cCTblCNkgKS54m8MN%2Br0MsGOqUB4r16iPOjjy0qYLzKGF3Mw133P%2BCmDqWT1YZhgpOGqRCNFrx5Lm7BBxIt7rsmttkh0lrIvBTHzsJ%2FORrqaIeO7zuqD7kB18J5Wdo0aHbFXgajAfQ%2B3GUwhKAMI3D6zl3qxDL7NRXtDfXG%2BdRR7nbYihzvKYJJUIIdnkh5Mo0%2Bj7A%2BmwdiV0pL6Fj4qodokGDja1CNH5ZXGpoar1Htr3geITl5LAid&X-Amz-Signature=e3a1d1b76397a95c3c20413138f26b178536a438f63e9422f2f7bcd6a5cd8ad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICZGMF7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHgNqWyJNyU3X23Q9XPwLp6EH2CMiPoPsk6Or4wkJLJbAiAWVkd8GUGQ4CmjFsb%2Bx8S7HF4JFoGbpx%2BarL4IajLRyir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM46U8CFxi5UYlATVIKtwDbrx%2BTNL8A79llwE2N%2FwmtlXxT03eAG6od%2FXQJMQfdVoL%2BBZjARSEAZloNBSDzlAYDU5tmFnNpoIfbTl4A3Rd9XN%2Fsb6UCDFbSNHQHNiThiqwUT%2FPr2LC53gT%2B9gJEVjj07UilPq0uS2%2Bp7PGyvgRq9JoqkBEB%2FxlWZbzguMc7kRieWmrHh%2Fz2PybR2K2w0fEfDRYHRkxkWeG3LC9%2BsMV4N1GKV6kClMZ%2FaYS2zZCanpUnydEd0eisNZVe011AODW8kT6sTrAm4l9WU2wUL5UCdvmZzCvP%2FjmXIhoMtwxADpcCUUU%2FFBLbawlom8jSs9SkxDqrTn1Xy6W41H6dPnEhfDMuaYLbNTg3NRp0DLSpqmqOSGJ41iRb%2FwJD%2F7sOHVV6D%2B7W0jvSN2%2FfgKMEBXRP%2FsY6nFneAm5j8txVgC6I4R2zVD389aKSmbUM92MwzatQqEqwr%2BQ63BQHs2bX%2FBMsyMsK2kvYFiR%2F0FpgN0m98oAhkf7GL0jYthWHO1xKP0CruKML%2BM%2FYVLZ0P60D8tLGP9vEub%2FXHLfFIuearDcwFr9cGiW0FnSStFu2kkTKQAUXWRtD%2FSMYOgZPwppAcY5KxB2fUEDWm6Wg5owbVw3D7ev5x8KqnI09RaC7Hcw1azQywY6pgHN%2F8dkXV4QJg1L9rYhAG35xHDalLzb6GMmG5NoV4StjaGNrf%2B93PCsvt4LK5GdylTAc8V%2Bfw4gstZp%2FvhYtTjWpwB4C1%2BS8njaBsIHAjo926mvLAh59tBc7SZiyGkibcewyN04zWvBrKSj7Yy%2FGBlziCP5OD%2FmNH%2BhDDdI%2BCFZQC1EAgo%2F1p9EzHoZRtLnU0vPbsSGX22XMYvBS3u1X8QPLMkjyjeY&X-Amz-Signature=0d49018ba656cb6bb40c29b2ca6eaad57a0badd6a6be678a261dbe7f01210b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3O7IQ5T%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDklU8voVgXGPhfy%2FcbO4RFryWq7asR9XI7Pa%2Be0WYODwIgBfzvW4S172Ys2W4vDZAd%2F7D8ti%2FKul5RKTwx4Pn4G7cq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDI7SX4WHWxqrpaRgJyrcA9LZUmCNQqSN7Q2MX468l0wc7VnGpJOsDG9H7NELOftyJxk00sv3ChdTkeZocIzjQVPw9lLN3E3oLiapWUf4DRYB5CKNyc5l2hzSuI31FxJVQ7zjFQ5PpOR2kmVlkQ%2FSLuyGEaoCDmzJCUziLO4QkzzGithlrFPMxveQocMJrOhKsM%2FyMVtkLg34I27hbG7mCWr5p42fXQhyij2JH9EUIhnhcc0p%2BTStv%2B83gycDZdLvVLMl3EJSicSjGaXHnH01LdcWqy1CWGB7nu7RGWrnWhWN0xpY%2B9NrsINRNVxb3tUOM%2F9y6CS85kMTYPowck5tuMPVHyhtRo7nOe3BAqs6FYAW6dk89sqau0w2Ofs95UOE6Ku28zBd45ashea9d8grXozCpwMZ7EdEXi2%2Fq6sZEY6qxXZ6ZKkp9eh5DlfuUawR1lVa2qRamnQIuFPrULzPdKbp7%2FYsBCIBRBG0slxnvEEiisQkH8xJUpT320hQ0U21pCrqmdi32f75P07K2ejlPIc%2FTllGT0NrUF15h3lJhXwb90JjqF9rEmCJpEdjQJmwyoJhLmkM8t9nqlrYlSvYCnJ7VqB6R2aHXjftVXQefuqRMUC0AJgxSnNBxY2MTqA15%2F8wo%2FfEIsfb9troMNOr0MsGOqUB4KiGJPw%2BpaJq4T3PvGStj9kSM4%2FpNS55wYBuxTB0bkxsBaYIIKI62gn0TWrYhFzkgIXTILeXx8Sfyb0c9TYDY%2FIlvLAHLMzX8ru7YmfxvWyAZgVpm4uZTlpTJgEBjQzeghNq2nC952J1AyeFTwuhtt7ZiRi%2FfBxtp51XNBjomTV4yjrhZ2NWxgA%2FncVd7FZtHlsMG0iKy9h1FATeMFyPh6vrfTN5&X-Amz-Signature=72e9d3f51b249f12c53b9a04eb9fd4433e1676cca4aa604891e940986c56282e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YDPIWW4%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFv0Upaw8JE89FXoKZin3zX3PozZQFSQhG2gRHQnmEAfAiEAtomce2ofdQEpptgwGdazyGJV%2BAIjeUN761yDLbBnrvkq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDDSsi3TPAcsWQVFyYCrcA6DdKSH2xoCCtB44hoePPS7d%2FXNLG6VcyAgyQv2eBnPE1S%2BvB%2FNDWbcvlSvTiJ38Jr%2Bl5yKFootWwS5hYmUzorOHehij3Mc6bb6hQkVCzxXKjXs3xNZLUKCbZlqIaUPCPJ%2FnDHqgAt5im8h%2BSICjd%2B8977%2BMvtLEVM30eV4QuRSdURqDA1KCAWy%2BzoLp2kGU4kgnL6yP6bqJlOWgy4%2BQzpN0pDEMc6Bu49Mw7sH6xtxfTQVFfi1ehTTisuK4x4SXtlJS2dENvv8LpktDxXoW1YkuFO2rDh8sV2Xq6SOq0P7El0CGbuOmdz8FOcXiNb6X6LWCTe0wVRzYKZBCeHpojuuAPUbKRrtx37vsY%2Fgy%2FL7bHzRarRDnxtFDXtjhWhNm25%2BVWlVJoucDmLbUtnxdtm4vBE9opFu7YQq722RCv7nIel2UXyySkCH0DqakqF4d%2FYfiSnTRGQFMtbEeM%2F8Yo7%2B1%2FYv6SrI00K918q2sjlRD7n3p%2FQWSH8tzbgy%2Bwj4ihHmAN%2F9B%2B9xpDcH1mFSrLd6CErLUcUIR9fwYn00ItVag11z%2Fvqo%2BChdNbzfENA%2Bi026rstdoUPAjUY1Jv0H7q9YLe7GTvwI6kBzYnaKm%2FiDdiXzuaR143Jzmv40%2FMMSs0MsGOqUB3w%2FUkLqGd8av2RplDFqE6ySPqw0eZNHuAd83Nd%2BqvNJOMVYwI2D5gSgCxHUmiEfE42qwSQOZ03vsIdc%2BpywgR0cI%2Bra70wJbpsdR9MF%2Ffn%2BeZpChK%2F86buo2E6MjvPjm1hkdIZnjN0LjI%2BcCPP2zAOnRFrH2%2F6DMVxZzG6xwqqHAKiNJtCIaESW5xXRli9WujuSGBLjL322hhFkSO0aUsRm34gkd&X-Amz-Signature=2221b6f6d8f2d152e5a08c63667c71c07fa9009a58be240bd4ef5aff0f0c6cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFPI4LW3%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEY1ZI3cEFHf2IYjFu9KalzXYhjlL1pxEor7fQ2aKDkzAiEAgYQNce3GCvvDxFKLVSig%2FQTiO5Do19Lo1Gfqk%2Fo%2BdM8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDB7DFfBu9EovZEyDlircA7TeqIYYVy%2BsRcluAKe7HYWRW5hu9CrwW2A678xAk6a4UHtkcyonPP5Dz1Ey3%2FTlexjTJfOgNdXZM%2BryGarSkJoD8m60U44V6AdSUoC82qHi6nXB04VXp65VWsgrS4G8oAvSugyNQPy4RPBsnjBvWG8YrG4qdMsr4ucd1%2BHZftVEhqpIappf2keZ7UnC8ZauBKBuRm1U8Fn%2BJ0Cn5IxEt0OWV2NHB7lmug%2BdpMVtgS7pn4n5ZoaXqNBm7O9GrvRGiw8SbhF2Sxrud0C4ymMBBIpH5IYBUFJDi8coRh%2BshOVQRZXc1RHGyzw0DYHP0ZltovZQriJeLdDTwz%2BbkETiAv3H%2FhgPOcTk8Qk%2BDmNhNGxHK1sTtfcpx98QgsIv48QW2sog1ZiklYPBXwfSQMng6ZGayjVUT0nFa3qL%2B56yNsZHuocAV5CpDayK2W3z6o6fQN3ZD57gmRIgguJifCqT%2BSqwtQWRGqk4zKM8KTXCVJCx174GXehVkDHpeuaj2XbQhdOJhay3eNuHdeGZSKtqHN9HewEVj1eXCu8MU4q0PCWyI8XtprUdvznDRDTHn7SvdSbIJOCJQxi1jXXLo5SUr37hH2W70jTgAjxiVdv1WTKPpycuhQYKOk95ABNiMI%2Bs0MsGOqUBpXyM6YrOPfFuAOf%2B0SbA5Lv4Q0DXDKLC4pQE4snHb7URjqu9cyYb0DWpbOTEqzzteE73bsW1h8h719dYmaWy%2BKfOiuzR1rw8IX%2BvS09UqbrbxYBmYzluLkP6vALeR9hXr9euEVLE9vwSHDEXe60bEKbVPSnOv1K98QTBrQEoKnZ1%2Fm5UT7km%2BqMKLHT9I3cxMSR8xLSf4O%2BdA6J2WtQ6jYaadHSx&X-Amz-Signature=cc5da28a5df188ac17805094f924ee460c1e405ffa73f79cdf6e28d4712824b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICZGMF7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHgNqWyJNyU3X23Q9XPwLp6EH2CMiPoPsk6Or4wkJLJbAiAWVkd8GUGQ4CmjFsb%2Bx8S7HF4JFoGbpx%2BarL4IajLRyir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM46U8CFxi5UYlATVIKtwDbrx%2BTNL8A79llwE2N%2FwmtlXxT03eAG6od%2FXQJMQfdVoL%2BBZjARSEAZloNBSDzlAYDU5tmFnNpoIfbTl4A3Rd9XN%2Fsb6UCDFbSNHQHNiThiqwUT%2FPr2LC53gT%2B9gJEVjj07UilPq0uS2%2Bp7PGyvgRq9JoqkBEB%2FxlWZbzguMc7kRieWmrHh%2Fz2PybR2K2w0fEfDRYHRkxkWeG3LC9%2BsMV4N1GKV6kClMZ%2FaYS2zZCanpUnydEd0eisNZVe011AODW8kT6sTrAm4l9WU2wUL5UCdvmZzCvP%2FjmXIhoMtwxADpcCUUU%2FFBLbawlom8jSs9SkxDqrTn1Xy6W41H6dPnEhfDMuaYLbNTg3NRp0DLSpqmqOSGJ41iRb%2FwJD%2F7sOHVV6D%2B7W0jvSN2%2FfgKMEBXRP%2FsY6nFneAm5j8txVgC6I4R2zVD389aKSmbUM92MwzatQqEqwr%2BQ63BQHs2bX%2FBMsyMsK2kvYFiR%2F0FpgN0m98oAhkf7GL0jYthWHO1xKP0CruKML%2BM%2FYVLZ0P60D8tLGP9vEub%2FXHLfFIuearDcwFr9cGiW0FnSStFu2kkTKQAUXWRtD%2FSMYOgZPwppAcY5KxB2fUEDWm6Wg5owbVw3D7ev5x8KqnI09RaC7Hcw1azQywY6pgHN%2F8dkXV4QJg1L9rYhAG35xHDalLzb6GMmG5NoV4StjaGNrf%2B93PCsvt4LK5GdylTAc8V%2Bfw4gstZp%2FvhYtTjWpwB4C1%2BS8njaBsIHAjo926mvLAh59tBc7SZiyGkibcewyN04zWvBrKSj7Yy%2FGBlziCP5OD%2FmNH%2BhDDdI%2BCFZQC1EAgo%2F1p9EzHoZRtLnU0vPbsSGX22XMYvBS3u1X8QPLMkjyjeY&X-Amz-Signature=f8597acad513746d8216ed52f874311e6ab0f70b814f36829d77b76f50df389f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICZGMF7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHgNqWyJNyU3X23Q9XPwLp6EH2CMiPoPsk6Or4wkJLJbAiAWVkd8GUGQ4CmjFsb%2Bx8S7HF4JFoGbpx%2BarL4IajLRyir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM46U8CFxi5UYlATVIKtwDbrx%2BTNL8A79llwE2N%2FwmtlXxT03eAG6od%2FXQJMQfdVoL%2BBZjARSEAZloNBSDzlAYDU5tmFnNpoIfbTl4A3Rd9XN%2Fsb6UCDFbSNHQHNiThiqwUT%2FPr2LC53gT%2B9gJEVjj07UilPq0uS2%2Bp7PGyvgRq9JoqkBEB%2FxlWZbzguMc7kRieWmrHh%2Fz2PybR2K2w0fEfDRYHRkxkWeG3LC9%2BsMV4N1GKV6kClMZ%2FaYS2zZCanpUnydEd0eisNZVe011AODW8kT6sTrAm4l9WU2wUL5UCdvmZzCvP%2FjmXIhoMtwxADpcCUUU%2FFBLbawlom8jSs9SkxDqrTn1Xy6W41H6dPnEhfDMuaYLbNTg3NRp0DLSpqmqOSGJ41iRb%2FwJD%2F7sOHVV6D%2B7W0jvSN2%2FfgKMEBXRP%2FsY6nFneAm5j8txVgC6I4R2zVD389aKSmbUM92MwzatQqEqwr%2BQ63BQHs2bX%2FBMsyMsK2kvYFiR%2F0FpgN0m98oAhkf7GL0jYthWHO1xKP0CruKML%2BM%2FYVLZ0P60D8tLGP9vEub%2FXHLfFIuearDcwFr9cGiW0FnSStFu2kkTKQAUXWRtD%2FSMYOgZPwppAcY5KxB2fUEDWm6Wg5owbVw3D7ev5x8KqnI09RaC7Hcw1azQywY6pgHN%2F8dkXV4QJg1L9rYhAG35xHDalLzb6GMmG5NoV4StjaGNrf%2B93PCsvt4LK5GdylTAc8V%2Bfw4gstZp%2FvhYtTjWpwB4C1%2BS8njaBsIHAjo926mvLAh59tBc7SZiyGkibcewyN04zWvBrKSj7Yy%2FGBlziCP5OD%2FmNH%2BhDDdI%2BCFZQC1EAgo%2F1p9EzHoZRtLnU0vPbsSGX22XMYvBS3u1X8QPLMkjyjeY&X-Amz-Signature=13acbea8376c51ded7afaae8425cc5cb710d196ad7d3d4fffddd024756a98aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6L7G7T%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFYOwTyIS%2BiMWeJWr2W%2Fvr6sCC1zdAfhSdrNb5CumCQUAiEA1dCJahRyoB820oB0jXS3O3GDdH28MW9b1HdHdKVC0foq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDC294AtwPpcjQEfLYircA9tHig6oZ1%2BCkwNInntPLyQN1mTy5KJZ6u5VfjTLuIknSHMKziDYJZLxS3zGUY3rwcjZhnIBcAdYR8rIqEr68FpO7p%2FuRMRNCLPzjSXuXrFL89JDsP4nx2P7DbD31HXyaeYzN2IGqsK4R1g%2Bs6k1FJiU1DRypS6P1ivICqYWdi3rQ1wIOclYM%2F5j%2FPMhIiGcQHbQnlUe0If3HZuFFqk1SeMc%2BQ2kZZssLaA9ijOsgTR4v4onxqXgt0EokKmT240xCLy1EjCCmXSymeF5ILfnoxum0bqTm%2FqAfFG23vHyW2k1eARE6uEI%2FLLMCwkS9HjwvrFWTMgs29IxtFe03wHy6cBQhTLwdvoQprYo3%2FLdAbuB2%2BISIl7SCszXAEjeNPmmlbFisNWHtCALMv5Uv3e%2FfGtXG7LjEfpdsLS4EaPRsLOewI2CbskPhuRM27Khjxa2sbm57XyoVB6jyhDU6budaxJU5zbspQFUCI%2Bx9K%2BXzK0iGL5dwu4jQD5q07hbks%2FUjUSzQSp3OEPSWraMpi1%2BOrhaKRniCPFhx2bdEK6%2BeWfuUZbc2qN%2FXrK%2BuII2VzTifd2ZrATnZDOTeIt2dSxcOwvstAbWAIeJjrdgR2Ip2f4gZR5j9HnFYND8yjFhMMer0MsGOqUBkDWcV%2BwsGp1T5kqeHZtB%2F2JOqaOR2ZhyXoufZ6UxGTeXOKAITZ5%2B41Pzn7eVLfH6qJWXIMNBW92059AoxzJ0lc8sHxqvWXbVucVxz7a%2BdqKDInzBNKtPuIKeJqAp1VS9uNxCUcEFcoqd4A%2BnQerEOU7L71jFSFS5eZxjlHB9Ez56x8u5YK2M03TUxaCZRfX7m%2BzL2lEJyKboesEXtZFup9CA1TH4&X-Amz-Signature=e0ca3eadd19cd4f97702e9126349fb6669e1ba8e1f0b10c6fb6c4b5e1e88a4e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6L7G7T%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFYOwTyIS%2BiMWeJWr2W%2Fvr6sCC1zdAfhSdrNb5CumCQUAiEA1dCJahRyoB820oB0jXS3O3GDdH28MW9b1HdHdKVC0foq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDC294AtwPpcjQEfLYircA9tHig6oZ1%2BCkwNInntPLyQN1mTy5KJZ6u5VfjTLuIknSHMKziDYJZLxS3zGUY3rwcjZhnIBcAdYR8rIqEr68FpO7p%2FuRMRNCLPzjSXuXrFL89JDsP4nx2P7DbD31HXyaeYzN2IGqsK4R1g%2Bs6k1FJiU1DRypS6P1ivICqYWdi3rQ1wIOclYM%2F5j%2FPMhIiGcQHbQnlUe0If3HZuFFqk1SeMc%2BQ2kZZssLaA9ijOsgTR4v4onxqXgt0EokKmT240xCLy1EjCCmXSymeF5ILfnoxum0bqTm%2FqAfFG23vHyW2k1eARE6uEI%2FLLMCwkS9HjwvrFWTMgs29IxtFe03wHy6cBQhTLwdvoQprYo3%2FLdAbuB2%2BISIl7SCszXAEjeNPmmlbFisNWHtCALMv5Uv3e%2FfGtXG7LjEfpdsLS4EaPRsLOewI2CbskPhuRM27Khjxa2sbm57XyoVB6jyhDU6budaxJU5zbspQFUCI%2Bx9K%2BXzK0iGL5dwu4jQD5q07hbks%2FUjUSzQSp3OEPSWraMpi1%2BOrhaKRniCPFhx2bdEK6%2BeWfuUZbc2qN%2FXrK%2BuII2VzTifd2ZrATnZDOTeIt2dSxcOwvstAbWAIeJjrdgR2Ip2f4gZR5j9HnFYND8yjFhMMer0MsGOqUBkDWcV%2BwsGp1T5kqeHZtB%2F2JOqaOR2ZhyXoufZ6UxGTeXOKAITZ5%2B41Pzn7eVLfH6qJWXIMNBW92059AoxzJ0lc8sHxqvWXbVucVxz7a%2BdqKDInzBNKtPuIKeJqAp1VS9uNxCUcEFcoqd4A%2BnQerEOU7L71jFSFS5eZxjlHB9Ez56x8u5YK2M03TUxaCZRfX7m%2BzL2lEJyKboesEXtZFup9CA1TH4&X-Amz-Signature=395eba2cf975a420383a909ab6611d4c6f7791d2723d25b2bc24272022eb3f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6L7G7T%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFYOwTyIS%2BiMWeJWr2W%2Fvr6sCC1zdAfhSdrNb5CumCQUAiEA1dCJahRyoB820oB0jXS3O3GDdH28MW9b1HdHdKVC0foq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDC294AtwPpcjQEfLYircA9tHig6oZ1%2BCkwNInntPLyQN1mTy5KJZ6u5VfjTLuIknSHMKziDYJZLxS3zGUY3rwcjZhnIBcAdYR8rIqEr68FpO7p%2FuRMRNCLPzjSXuXrFL89JDsP4nx2P7DbD31HXyaeYzN2IGqsK4R1g%2Bs6k1FJiU1DRypS6P1ivICqYWdi3rQ1wIOclYM%2F5j%2FPMhIiGcQHbQnlUe0If3HZuFFqk1SeMc%2BQ2kZZssLaA9ijOsgTR4v4onxqXgt0EokKmT240xCLy1EjCCmXSymeF5ILfnoxum0bqTm%2FqAfFG23vHyW2k1eARE6uEI%2FLLMCwkS9HjwvrFWTMgs29IxtFe03wHy6cBQhTLwdvoQprYo3%2FLdAbuB2%2BISIl7SCszXAEjeNPmmlbFisNWHtCALMv5Uv3e%2FfGtXG7LjEfpdsLS4EaPRsLOewI2CbskPhuRM27Khjxa2sbm57XyoVB6jyhDU6budaxJU5zbspQFUCI%2Bx9K%2BXzK0iGL5dwu4jQD5q07hbks%2FUjUSzQSp3OEPSWraMpi1%2BOrhaKRniCPFhx2bdEK6%2BeWfuUZbc2qN%2FXrK%2BuII2VzTifd2ZrATnZDOTeIt2dSxcOwvstAbWAIeJjrdgR2Ip2f4gZR5j9HnFYND8yjFhMMer0MsGOqUBkDWcV%2BwsGp1T5kqeHZtB%2F2JOqaOR2ZhyXoufZ6UxGTeXOKAITZ5%2B41Pzn7eVLfH6qJWXIMNBW92059AoxzJ0lc8sHxqvWXbVucVxz7a%2BdqKDInzBNKtPuIKeJqAp1VS9uNxCUcEFcoqd4A%2BnQerEOU7L71jFSFS5eZxjlHB9Ez56x8u5YK2M03TUxaCZRfX7m%2BzL2lEJyKboesEXtZFup9CA1TH4&X-Amz-Signature=6b9ba19e2d3d7b48029c31abeba63b10374eebf5a4b35e195a6054367909a90a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6L7G7T%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFYOwTyIS%2BiMWeJWr2W%2Fvr6sCC1zdAfhSdrNb5CumCQUAiEA1dCJahRyoB820oB0jXS3O3GDdH28MW9b1HdHdKVC0foq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDC294AtwPpcjQEfLYircA9tHig6oZ1%2BCkwNInntPLyQN1mTy5KJZ6u5VfjTLuIknSHMKziDYJZLxS3zGUY3rwcjZhnIBcAdYR8rIqEr68FpO7p%2FuRMRNCLPzjSXuXrFL89JDsP4nx2P7DbD31HXyaeYzN2IGqsK4R1g%2Bs6k1FJiU1DRypS6P1ivICqYWdi3rQ1wIOclYM%2F5j%2FPMhIiGcQHbQnlUe0If3HZuFFqk1SeMc%2BQ2kZZssLaA9ijOsgTR4v4onxqXgt0EokKmT240xCLy1EjCCmXSymeF5ILfnoxum0bqTm%2FqAfFG23vHyW2k1eARE6uEI%2FLLMCwkS9HjwvrFWTMgs29IxtFe03wHy6cBQhTLwdvoQprYo3%2FLdAbuB2%2BISIl7SCszXAEjeNPmmlbFisNWHtCALMv5Uv3e%2FfGtXG7LjEfpdsLS4EaPRsLOewI2CbskPhuRM27Khjxa2sbm57XyoVB6jyhDU6budaxJU5zbspQFUCI%2Bx9K%2BXzK0iGL5dwu4jQD5q07hbks%2FUjUSzQSp3OEPSWraMpi1%2BOrhaKRniCPFhx2bdEK6%2BeWfuUZbc2qN%2FXrK%2BuII2VzTifd2ZrATnZDOTeIt2dSxcOwvstAbWAIeJjrdgR2Ip2f4gZR5j9HnFYND8yjFhMMer0MsGOqUBkDWcV%2BwsGp1T5kqeHZtB%2F2JOqaOR2ZhyXoufZ6UxGTeXOKAITZ5%2B41Pzn7eVLfH6qJWXIMNBW92059AoxzJ0lc8sHxqvWXbVucVxz7a%2BdqKDInzBNKtPuIKeJqAp1VS9uNxCUcEFcoqd4A%2BnQerEOU7L71jFSFS5eZxjlHB9Ez56x8u5YK2M03TUxaCZRfX7m%2BzL2lEJyKboesEXtZFup9CA1TH4&X-Amz-Signature=63a088f093abea09b5b512d3d7b644ab7940675fb460867c62e324233b74392a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLLWJDY7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCo9QMnqoIcfL5gRUzBROIbge7LrNlJLlxRIMDIplfllwIhAKCVMF04dqMs3%2FrNp5aIDtKIeb1LMBy7neQM9d3SLF8YKv8DCAIQABoMNjM3NDIzMTgzODA1Igwl24XAXK%2BWRNtEA1sq3APzx%2BKlQWNTWAiudMZT8VWoexjLbbU7PZcyf%2FY9BMiAbqGySx3%2B9cirqDX2hJS3T20GFkxcvnkXUSbvdQWNX2JpJKCDadzmkyx0zwyj1aB0A16%2Fdel7orRz%2Bp%2B3Zv0QZ2qhn4pgdUabDzWM9CxFSpJNXQ0pz2j69NaaW8g84b8QBXC9Z6%2B7NmW0Day%2BJTW3jR9RASeKQQT%2FyH6qMoBYgjcGwfvEBgWAV81iiFRrf6%2FXczDQPEzKvtlPC7RBRKNF%2BVUwu1iyjWMMlAUCq9bPG902C%2B5gOw45kMhncXqH4uFUAWpFa%2FT5ItnpccMia0zU%2BKDbNuzmHd2t%2FlRmgU7ngD6P5S44azHh5uasSja%2FGp5ensxPK7wwfU1XUSem%2BAnKfgMW7qn4xgDffxggnk2bDsq3qs8y2jdPrXaMYJe7coBSsIiJAweenegN%2FDU25WvtpprorO8m%2FioDmzdR%2BJTxeev8aH8niw4K7LAf%2FYs%2Fgwuszi5CgoKzhB77VWmYH%2FBb5altUFtbXGmvmDNoNdxA0p9TmHqypHNKfe87MvpjvVmZb9P4s9d%2BDHOYcQDqh%2FTaoK8m%2BZRvkX7xRWv3JGS8Rsw7CwkcgxOWO8rEhjna4VD5wmG7SkdNV8E3CHIIJTDnq9DLBjqkATkV1aLUKTwAgKQHGcFKF2RlB8QMN9rA7AEI6ho3z6hMGUDztbtlUm3wge97JmxVbX5%2Fo%2F4NbmjXoitwI7%2BsohlSRoo%2Ba7FmImnu7%2FFra%2Falu8e4mjlIiC1tAqlXPwjFQpI8hSjaMqGq%2BA9d3IkjcbsawcNWIgTviVmkjRaZFmbZHLwe%2B4OLBPYBpcxNdlEvZRSgY%2BdNDL3UrCS8Th%2BwvcOr%2FIOd&X-Amz-Signature=9df5ca1b47953f8bc4df94d3097e4aab80efcce04562698ca33dab416f7690ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6L7G7T%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFYOwTyIS%2BiMWeJWr2W%2Fvr6sCC1zdAfhSdrNb5CumCQUAiEA1dCJahRyoB820oB0jXS3O3GDdH28MW9b1HdHdKVC0foq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDC294AtwPpcjQEfLYircA9tHig6oZ1%2BCkwNInntPLyQN1mTy5KJZ6u5VfjTLuIknSHMKziDYJZLxS3zGUY3rwcjZhnIBcAdYR8rIqEr68FpO7p%2FuRMRNCLPzjSXuXrFL89JDsP4nx2P7DbD31HXyaeYzN2IGqsK4R1g%2Bs6k1FJiU1DRypS6P1ivICqYWdi3rQ1wIOclYM%2F5j%2FPMhIiGcQHbQnlUe0If3HZuFFqk1SeMc%2BQ2kZZssLaA9ijOsgTR4v4onxqXgt0EokKmT240xCLy1EjCCmXSymeF5ILfnoxum0bqTm%2FqAfFG23vHyW2k1eARE6uEI%2FLLMCwkS9HjwvrFWTMgs29IxtFe03wHy6cBQhTLwdvoQprYo3%2FLdAbuB2%2BISIl7SCszXAEjeNPmmlbFisNWHtCALMv5Uv3e%2FfGtXG7LjEfpdsLS4EaPRsLOewI2CbskPhuRM27Khjxa2sbm57XyoVB6jyhDU6budaxJU5zbspQFUCI%2Bx9K%2BXzK0iGL5dwu4jQD5q07hbks%2FUjUSzQSp3OEPSWraMpi1%2BOrhaKRniCPFhx2bdEK6%2BeWfuUZbc2qN%2FXrK%2BuII2VzTifd2ZrATnZDOTeIt2dSxcOwvstAbWAIeJjrdgR2Ip2f4gZR5j9HnFYND8yjFhMMer0MsGOqUBkDWcV%2BwsGp1T5kqeHZtB%2F2JOqaOR2ZhyXoufZ6UxGTeXOKAITZ5%2B41Pzn7eVLfH6qJWXIMNBW92059AoxzJ0lc8sHxqvWXbVucVxz7a%2BdqKDInzBNKtPuIKeJqAp1VS9uNxCUcEFcoqd4A%2BnQerEOU7L71jFSFS5eZxjlHB9Ez56x8u5YK2M03TUxaCZRfX7m%2BzL2lEJyKboesEXtZFup9CA1TH4&X-Amz-Signature=baf88260253a13dc1ece5231424d0c265c4fa9aa8854448eb236f400ed6db5c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6L7G7T%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFYOwTyIS%2BiMWeJWr2W%2Fvr6sCC1zdAfhSdrNb5CumCQUAiEA1dCJahRyoB820oB0jXS3O3GDdH28MW9b1HdHdKVC0foq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDC294AtwPpcjQEfLYircA9tHig6oZ1%2BCkwNInntPLyQN1mTy5KJZ6u5VfjTLuIknSHMKziDYJZLxS3zGUY3rwcjZhnIBcAdYR8rIqEr68FpO7p%2FuRMRNCLPzjSXuXrFL89JDsP4nx2P7DbD31HXyaeYzN2IGqsK4R1g%2Bs6k1FJiU1DRypS6P1ivICqYWdi3rQ1wIOclYM%2F5j%2FPMhIiGcQHbQnlUe0If3HZuFFqk1SeMc%2BQ2kZZssLaA9ijOsgTR4v4onxqXgt0EokKmT240xCLy1EjCCmXSymeF5ILfnoxum0bqTm%2FqAfFG23vHyW2k1eARE6uEI%2FLLMCwkS9HjwvrFWTMgs29IxtFe03wHy6cBQhTLwdvoQprYo3%2FLdAbuB2%2BISIl7SCszXAEjeNPmmlbFisNWHtCALMv5Uv3e%2FfGtXG7LjEfpdsLS4EaPRsLOewI2CbskPhuRM27Khjxa2sbm57XyoVB6jyhDU6budaxJU5zbspQFUCI%2Bx9K%2BXzK0iGL5dwu4jQD5q07hbks%2FUjUSzQSp3OEPSWraMpi1%2BOrhaKRniCPFhx2bdEK6%2BeWfuUZbc2qN%2FXrK%2BuII2VzTifd2ZrATnZDOTeIt2dSxcOwvstAbWAIeJjrdgR2Ip2f4gZR5j9HnFYND8yjFhMMer0MsGOqUBkDWcV%2BwsGp1T5kqeHZtB%2F2JOqaOR2ZhyXoufZ6UxGTeXOKAITZ5%2B41Pzn7eVLfH6qJWXIMNBW92059AoxzJ0lc8sHxqvWXbVucVxz7a%2BdqKDInzBNKtPuIKeJqAp1VS9uNxCUcEFcoqd4A%2BnQerEOU7L71jFSFS5eZxjlHB9Ez56x8u5YK2M03TUxaCZRfX7m%2BzL2lEJyKboesEXtZFup9CA1TH4&X-Amz-Signature=43bfa320fde39582817ddb595bcf8ac1478a2422684d2275bf47e0b3ad046979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6L7G7T%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFYOwTyIS%2BiMWeJWr2W%2Fvr6sCC1zdAfhSdrNb5CumCQUAiEA1dCJahRyoB820oB0jXS3O3GDdH28MW9b1HdHdKVC0foq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDC294AtwPpcjQEfLYircA9tHig6oZ1%2BCkwNInntPLyQN1mTy5KJZ6u5VfjTLuIknSHMKziDYJZLxS3zGUY3rwcjZhnIBcAdYR8rIqEr68FpO7p%2FuRMRNCLPzjSXuXrFL89JDsP4nx2P7DbD31HXyaeYzN2IGqsK4R1g%2Bs6k1FJiU1DRypS6P1ivICqYWdi3rQ1wIOclYM%2F5j%2FPMhIiGcQHbQnlUe0If3HZuFFqk1SeMc%2BQ2kZZssLaA9ijOsgTR4v4onxqXgt0EokKmT240xCLy1EjCCmXSymeF5ILfnoxum0bqTm%2FqAfFG23vHyW2k1eARE6uEI%2FLLMCwkS9HjwvrFWTMgs29IxtFe03wHy6cBQhTLwdvoQprYo3%2FLdAbuB2%2BISIl7SCszXAEjeNPmmlbFisNWHtCALMv5Uv3e%2FfGtXG7LjEfpdsLS4EaPRsLOewI2CbskPhuRM27Khjxa2sbm57XyoVB6jyhDU6budaxJU5zbspQFUCI%2Bx9K%2BXzK0iGL5dwu4jQD5q07hbks%2FUjUSzQSp3OEPSWraMpi1%2BOrhaKRniCPFhx2bdEK6%2BeWfuUZbc2qN%2FXrK%2BuII2VzTifd2ZrATnZDOTeIt2dSxcOwvstAbWAIeJjrdgR2Ip2f4gZR5j9HnFYND8yjFhMMer0MsGOqUBkDWcV%2BwsGp1T5kqeHZtB%2F2JOqaOR2ZhyXoufZ6UxGTeXOKAITZ5%2B41Pzn7eVLfH6qJWXIMNBW92059AoxzJ0lc8sHxqvWXbVucVxz7a%2BdqKDInzBNKtPuIKeJqAp1VS9uNxCUcEFcoqd4A%2BnQerEOU7L71jFSFS5eZxjlHB9Ez56x8u5YK2M03TUxaCZRfX7m%2BzL2lEJyKboesEXtZFup9CA1TH4&X-Amz-Signature=6b9ba19e2d3d7b48029c31abeba63b10374eebf5a4b35e195a6054367909a90a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6L7G7T%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFYOwTyIS%2BiMWeJWr2W%2Fvr6sCC1zdAfhSdrNb5CumCQUAiEA1dCJahRyoB820oB0jXS3O3GDdH28MW9b1HdHdKVC0foq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDC294AtwPpcjQEfLYircA9tHig6oZ1%2BCkwNInntPLyQN1mTy5KJZ6u5VfjTLuIknSHMKziDYJZLxS3zGUY3rwcjZhnIBcAdYR8rIqEr68FpO7p%2FuRMRNCLPzjSXuXrFL89JDsP4nx2P7DbD31HXyaeYzN2IGqsK4R1g%2Bs6k1FJiU1DRypS6P1ivICqYWdi3rQ1wIOclYM%2F5j%2FPMhIiGcQHbQnlUe0If3HZuFFqk1SeMc%2BQ2kZZssLaA9ijOsgTR4v4onxqXgt0EokKmT240xCLy1EjCCmXSymeF5ILfnoxum0bqTm%2FqAfFG23vHyW2k1eARE6uEI%2FLLMCwkS9HjwvrFWTMgs29IxtFe03wHy6cBQhTLwdvoQprYo3%2FLdAbuB2%2BISIl7SCszXAEjeNPmmlbFisNWHtCALMv5Uv3e%2FfGtXG7LjEfpdsLS4EaPRsLOewI2CbskPhuRM27Khjxa2sbm57XyoVB6jyhDU6budaxJU5zbspQFUCI%2Bx9K%2BXzK0iGL5dwu4jQD5q07hbks%2FUjUSzQSp3OEPSWraMpi1%2BOrhaKRniCPFhx2bdEK6%2BeWfuUZbc2qN%2FXrK%2BuII2VzTifd2ZrATnZDOTeIt2dSxcOwvstAbWAIeJjrdgR2Ip2f4gZR5j9HnFYND8yjFhMMer0MsGOqUBkDWcV%2BwsGp1T5kqeHZtB%2F2JOqaOR2ZhyXoufZ6UxGTeXOKAITZ5%2B41Pzn7eVLfH6qJWXIMNBW92059AoxzJ0lc8sHxqvWXbVucVxz7a%2BdqKDInzBNKtPuIKeJqAp1VS9uNxCUcEFcoqd4A%2BnQerEOU7L71jFSFS5eZxjlHB9Ez56x8u5YK2M03TUxaCZRfX7m%2BzL2lEJyKboesEXtZFup9CA1TH4&X-Amz-Signature=f39a878a8f7b2e6f6f73d241a7c7c73a956028aaf8eb9f9adb23520261a2a933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6L7G7T%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFYOwTyIS%2BiMWeJWr2W%2Fvr6sCC1zdAfhSdrNb5CumCQUAiEA1dCJahRyoB820oB0jXS3O3GDdH28MW9b1HdHdKVC0foq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDC294AtwPpcjQEfLYircA9tHig6oZ1%2BCkwNInntPLyQN1mTy5KJZ6u5VfjTLuIknSHMKziDYJZLxS3zGUY3rwcjZhnIBcAdYR8rIqEr68FpO7p%2FuRMRNCLPzjSXuXrFL89JDsP4nx2P7DbD31HXyaeYzN2IGqsK4R1g%2Bs6k1FJiU1DRypS6P1ivICqYWdi3rQ1wIOclYM%2F5j%2FPMhIiGcQHbQnlUe0If3HZuFFqk1SeMc%2BQ2kZZssLaA9ijOsgTR4v4onxqXgt0EokKmT240xCLy1EjCCmXSymeF5ILfnoxum0bqTm%2FqAfFG23vHyW2k1eARE6uEI%2FLLMCwkS9HjwvrFWTMgs29IxtFe03wHy6cBQhTLwdvoQprYo3%2FLdAbuB2%2BISIl7SCszXAEjeNPmmlbFisNWHtCALMv5Uv3e%2FfGtXG7LjEfpdsLS4EaPRsLOewI2CbskPhuRM27Khjxa2sbm57XyoVB6jyhDU6budaxJU5zbspQFUCI%2Bx9K%2BXzK0iGL5dwu4jQD5q07hbks%2FUjUSzQSp3OEPSWraMpi1%2BOrhaKRniCPFhx2bdEK6%2BeWfuUZbc2qN%2FXrK%2BuII2VzTifd2ZrATnZDOTeIt2dSxcOwvstAbWAIeJjrdgR2Ip2f4gZR5j9HnFYND8yjFhMMer0MsGOqUBkDWcV%2BwsGp1T5kqeHZtB%2F2JOqaOR2ZhyXoufZ6UxGTeXOKAITZ5%2B41Pzn7eVLfH6qJWXIMNBW92059AoxzJ0lc8sHxqvWXbVucVxz7a%2BdqKDInzBNKtPuIKeJqAp1VS9uNxCUcEFcoqd4A%2BnQerEOU7L71jFSFS5eZxjlHB9Ez56x8u5YK2M03TUxaCZRfX7m%2BzL2lEJyKboesEXtZFup9CA1TH4&X-Amz-Signature=ab89a7133f652a734d31c2a1832caa3aa82d1f869ae59ec967a6cd96a1add41f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6L7G7T%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFYOwTyIS%2BiMWeJWr2W%2Fvr6sCC1zdAfhSdrNb5CumCQUAiEA1dCJahRyoB820oB0jXS3O3GDdH28MW9b1HdHdKVC0foq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDC294AtwPpcjQEfLYircA9tHig6oZ1%2BCkwNInntPLyQN1mTy5KJZ6u5VfjTLuIknSHMKziDYJZLxS3zGUY3rwcjZhnIBcAdYR8rIqEr68FpO7p%2FuRMRNCLPzjSXuXrFL89JDsP4nx2P7DbD31HXyaeYzN2IGqsK4R1g%2Bs6k1FJiU1DRypS6P1ivICqYWdi3rQ1wIOclYM%2F5j%2FPMhIiGcQHbQnlUe0If3HZuFFqk1SeMc%2BQ2kZZssLaA9ijOsgTR4v4onxqXgt0EokKmT240xCLy1EjCCmXSymeF5ILfnoxum0bqTm%2FqAfFG23vHyW2k1eARE6uEI%2FLLMCwkS9HjwvrFWTMgs29IxtFe03wHy6cBQhTLwdvoQprYo3%2FLdAbuB2%2BISIl7SCszXAEjeNPmmlbFisNWHtCALMv5Uv3e%2FfGtXG7LjEfpdsLS4EaPRsLOewI2CbskPhuRM27Khjxa2sbm57XyoVB6jyhDU6budaxJU5zbspQFUCI%2Bx9K%2BXzK0iGL5dwu4jQD5q07hbks%2FUjUSzQSp3OEPSWraMpi1%2BOrhaKRniCPFhx2bdEK6%2BeWfuUZbc2qN%2FXrK%2BuII2VzTifd2ZrATnZDOTeIt2dSxcOwvstAbWAIeJjrdgR2Ip2f4gZR5j9HnFYND8yjFhMMer0MsGOqUBkDWcV%2BwsGp1T5kqeHZtB%2F2JOqaOR2ZhyXoufZ6UxGTeXOKAITZ5%2B41Pzn7eVLfH6qJWXIMNBW92059AoxzJ0lc8sHxqvWXbVucVxz7a%2BdqKDInzBNKtPuIKeJqAp1VS9uNxCUcEFcoqd4A%2BnQerEOU7L71jFSFS5eZxjlHB9Ez56x8u5YK2M03TUxaCZRfX7m%2BzL2lEJyKboesEXtZFup9CA1TH4&X-Amz-Signature=a5719295133ba3e031857985bab2861d878a4912d8b00d4bb862b804da80bcb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


