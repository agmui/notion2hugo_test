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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEXRSVG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvN304NCsxH0GFDUj6aZb3bSFv%2BozLR%2FTcPP%2FX8yKXvAIgQ789NDptLRaYfIzG3n6WGHULJyS6QSR3%2FGtq7V1Y0VUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0euinhP02jyMNrSrcA24TqVzZbPqrlYNC4ZeNfGRmSihEy2v4hKZ15rqOr%2FrPoyfvlI5C6jQ04XtcKW%2F9imUgAVXeBaddZh1Tksi8dlKUKB2v09xmnnWarij8y4T5wKufJkKUgwLbZWQoGp2%2F3k7sswe6bI1Jvqo7aG4dhfZrxwGE94PDjiRUPqChSr7f7SfBdRk4OscKhB4UJDvgDNvSTaBT8HhpabCYtqa3Oulx%2Bz8E8ZMaCzCxrN8yR9iHi6Z6py9Du%2B3hFka2Ioqdsf5n29vuK37OuSNIOGiMwf4Ke1dyz4Ynu9JXh4lw3tBtTHkcdewFegBfojeyiviyWdSvrxt9%2BYlE73yZMkmhj4TYPfr9vufjc8OZZO%2BSHFHgCoOHKUssCTSE19XsYXpkd731rDFE%2Br5i3WmmtXBnIzAn8XSLxcpAoYGZX3HpMy4il2cYQuFzLbIbKNhAChGSLLf4%2B5PN2m1OhJlbmRXUo7cFGwTB3%2FApTPAWbvjBkQfol78bRFsNy76wIxeJU4BQh1mqOO%2FD0LE2CWSn6%2Fcr7%2Fsa2JAuwryJ7x7dvMD%2BTwWV6UZ2MztfPv4wnp1UKXcotR0OAlLigjVzBxMd1mpg1zfVj3rBu1GUfS3tTQ%2FSbxVOJ1PFman0fh18gACPMO%2ByzM4GOqUB8BNCyZPqkJYZJYBZRRRgVrkvRm5i2TYs94V343Q%2BTmotGgoljXkD5Vc%2FsBrmnC8LifFRKhElELwrcquWAhm2QNxTAw7PY0PBMRlemcLTDj6Insyeon4ZYQr8GHVogsHHevcw%2BHfVZDQoVwz3ZnM59X5oc6rUs1ma2hRDcwke4Tp%2B4VtJvA1rGGEKnac7RoCOiuxIQe28Bkq2kcyZaacB2RJKUO%2BD&X-Amz-Signature=677576b0641572438ff64a337d27b54f2096aa5201f322ae631fbfda064368c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEXRSVG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvN304NCsxH0GFDUj6aZb3bSFv%2BozLR%2FTcPP%2FX8yKXvAIgQ789NDptLRaYfIzG3n6WGHULJyS6QSR3%2FGtq7V1Y0VUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0euinhP02jyMNrSrcA24TqVzZbPqrlYNC4ZeNfGRmSihEy2v4hKZ15rqOr%2FrPoyfvlI5C6jQ04XtcKW%2F9imUgAVXeBaddZh1Tksi8dlKUKB2v09xmnnWarij8y4T5wKufJkKUgwLbZWQoGp2%2F3k7sswe6bI1Jvqo7aG4dhfZrxwGE94PDjiRUPqChSr7f7SfBdRk4OscKhB4UJDvgDNvSTaBT8HhpabCYtqa3Oulx%2Bz8E8ZMaCzCxrN8yR9iHi6Z6py9Du%2B3hFka2Ioqdsf5n29vuK37OuSNIOGiMwf4Ke1dyz4Ynu9JXh4lw3tBtTHkcdewFegBfojeyiviyWdSvrxt9%2BYlE73yZMkmhj4TYPfr9vufjc8OZZO%2BSHFHgCoOHKUssCTSE19XsYXpkd731rDFE%2Br5i3WmmtXBnIzAn8XSLxcpAoYGZX3HpMy4il2cYQuFzLbIbKNhAChGSLLf4%2B5PN2m1OhJlbmRXUo7cFGwTB3%2FApTPAWbvjBkQfol78bRFsNy76wIxeJU4BQh1mqOO%2FD0LE2CWSn6%2Fcr7%2Fsa2JAuwryJ7x7dvMD%2BTwWV6UZ2MztfPv4wnp1UKXcotR0OAlLigjVzBxMd1mpg1zfVj3rBu1GUfS3tTQ%2FSbxVOJ1PFman0fh18gACPMO%2ByzM4GOqUB8BNCyZPqkJYZJYBZRRRgVrkvRm5i2TYs94V343Q%2BTmotGgoljXkD5Vc%2FsBrmnC8LifFRKhElELwrcquWAhm2QNxTAw7PY0PBMRlemcLTDj6Insyeon4ZYQr8GHVogsHHevcw%2BHfVZDQoVwz3ZnM59X5oc6rUs1ma2hRDcwke4Tp%2B4VtJvA1rGGEKnac7RoCOiuxIQe28Bkq2kcyZaacB2RJKUO%2BD&X-Amz-Signature=ba268e1dfabdb86ba7e3886fb2c2bb55276c2742f49cc7bc62c0954f3be3f3ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEXRSVG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvN304NCsxH0GFDUj6aZb3bSFv%2BozLR%2FTcPP%2FX8yKXvAIgQ789NDptLRaYfIzG3n6WGHULJyS6QSR3%2FGtq7V1Y0VUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0euinhP02jyMNrSrcA24TqVzZbPqrlYNC4ZeNfGRmSihEy2v4hKZ15rqOr%2FrPoyfvlI5C6jQ04XtcKW%2F9imUgAVXeBaddZh1Tksi8dlKUKB2v09xmnnWarij8y4T5wKufJkKUgwLbZWQoGp2%2F3k7sswe6bI1Jvqo7aG4dhfZrxwGE94PDjiRUPqChSr7f7SfBdRk4OscKhB4UJDvgDNvSTaBT8HhpabCYtqa3Oulx%2Bz8E8ZMaCzCxrN8yR9iHi6Z6py9Du%2B3hFka2Ioqdsf5n29vuK37OuSNIOGiMwf4Ke1dyz4Ynu9JXh4lw3tBtTHkcdewFegBfojeyiviyWdSvrxt9%2BYlE73yZMkmhj4TYPfr9vufjc8OZZO%2BSHFHgCoOHKUssCTSE19XsYXpkd731rDFE%2Br5i3WmmtXBnIzAn8XSLxcpAoYGZX3HpMy4il2cYQuFzLbIbKNhAChGSLLf4%2B5PN2m1OhJlbmRXUo7cFGwTB3%2FApTPAWbvjBkQfol78bRFsNy76wIxeJU4BQh1mqOO%2FD0LE2CWSn6%2Fcr7%2Fsa2JAuwryJ7x7dvMD%2BTwWV6UZ2MztfPv4wnp1UKXcotR0OAlLigjVzBxMd1mpg1zfVj3rBu1GUfS3tTQ%2FSbxVOJ1PFman0fh18gACPMO%2ByzM4GOqUB8BNCyZPqkJYZJYBZRRRgVrkvRm5i2TYs94V343Q%2BTmotGgoljXkD5Vc%2FsBrmnC8LifFRKhElELwrcquWAhm2QNxTAw7PY0PBMRlemcLTDj6Insyeon4ZYQr8GHVogsHHevcw%2BHfVZDQoVwz3ZnM59X5oc6rUs1ma2hRDcwke4Tp%2B4VtJvA1rGGEKnac7RoCOiuxIQe28Bkq2kcyZaacB2RJKUO%2BD&X-Amz-Signature=af13566a970269ec09819f13b0714bcc9cbb4708ab824ea7c060bd5984b567c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEXRSVG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvN304NCsxH0GFDUj6aZb3bSFv%2BozLR%2FTcPP%2FX8yKXvAIgQ789NDptLRaYfIzG3n6WGHULJyS6QSR3%2FGtq7V1Y0VUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0euinhP02jyMNrSrcA24TqVzZbPqrlYNC4ZeNfGRmSihEy2v4hKZ15rqOr%2FrPoyfvlI5C6jQ04XtcKW%2F9imUgAVXeBaddZh1Tksi8dlKUKB2v09xmnnWarij8y4T5wKufJkKUgwLbZWQoGp2%2F3k7sswe6bI1Jvqo7aG4dhfZrxwGE94PDjiRUPqChSr7f7SfBdRk4OscKhB4UJDvgDNvSTaBT8HhpabCYtqa3Oulx%2Bz8E8ZMaCzCxrN8yR9iHi6Z6py9Du%2B3hFka2Ioqdsf5n29vuK37OuSNIOGiMwf4Ke1dyz4Ynu9JXh4lw3tBtTHkcdewFegBfojeyiviyWdSvrxt9%2BYlE73yZMkmhj4TYPfr9vufjc8OZZO%2BSHFHgCoOHKUssCTSE19XsYXpkd731rDFE%2Br5i3WmmtXBnIzAn8XSLxcpAoYGZX3HpMy4il2cYQuFzLbIbKNhAChGSLLf4%2B5PN2m1OhJlbmRXUo7cFGwTB3%2FApTPAWbvjBkQfol78bRFsNy76wIxeJU4BQh1mqOO%2FD0LE2CWSn6%2Fcr7%2Fsa2JAuwryJ7x7dvMD%2BTwWV6UZ2MztfPv4wnp1UKXcotR0OAlLigjVzBxMd1mpg1zfVj3rBu1GUfS3tTQ%2FSbxVOJ1PFman0fh18gACPMO%2ByzM4GOqUB8BNCyZPqkJYZJYBZRRRgVrkvRm5i2TYs94V343Q%2BTmotGgoljXkD5Vc%2FsBrmnC8LifFRKhElELwrcquWAhm2QNxTAw7PY0PBMRlemcLTDj6Insyeon4ZYQr8GHVogsHHevcw%2BHfVZDQoVwz3ZnM59X5oc6rUs1ma2hRDcwke4Tp%2B4VtJvA1rGGEKnac7RoCOiuxIQe28Bkq2kcyZaacB2RJKUO%2BD&X-Amz-Signature=bd40e17a653806a9ac1adf0e8a128e18dc580ec607f22dd0c4f773df0b05ac73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEXRSVG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvN304NCsxH0GFDUj6aZb3bSFv%2BozLR%2FTcPP%2FX8yKXvAIgQ789NDptLRaYfIzG3n6WGHULJyS6QSR3%2FGtq7V1Y0VUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0euinhP02jyMNrSrcA24TqVzZbPqrlYNC4ZeNfGRmSihEy2v4hKZ15rqOr%2FrPoyfvlI5C6jQ04XtcKW%2F9imUgAVXeBaddZh1Tksi8dlKUKB2v09xmnnWarij8y4T5wKufJkKUgwLbZWQoGp2%2F3k7sswe6bI1Jvqo7aG4dhfZrxwGE94PDjiRUPqChSr7f7SfBdRk4OscKhB4UJDvgDNvSTaBT8HhpabCYtqa3Oulx%2Bz8E8ZMaCzCxrN8yR9iHi6Z6py9Du%2B3hFka2Ioqdsf5n29vuK37OuSNIOGiMwf4Ke1dyz4Ynu9JXh4lw3tBtTHkcdewFegBfojeyiviyWdSvrxt9%2BYlE73yZMkmhj4TYPfr9vufjc8OZZO%2BSHFHgCoOHKUssCTSE19XsYXpkd731rDFE%2Br5i3WmmtXBnIzAn8XSLxcpAoYGZX3HpMy4il2cYQuFzLbIbKNhAChGSLLf4%2B5PN2m1OhJlbmRXUo7cFGwTB3%2FApTPAWbvjBkQfol78bRFsNy76wIxeJU4BQh1mqOO%2FD0LE2CWSn6%2Fcr7%2Fsa2JAuwryJ7x7dvMD%2BTwWV6UZ2MztfPv4wnp1UKXcotR0OAlLigjVzBxMd1mpg1zfVj3rBu1GUfS3tTQ%2FSbxVOJ1PFman0fh18gACPMO%2ByzM4GOqUB8BNCyZPqkJYZJYBZRRRgVrkvRm5i2TYs94V343Q%2BTmotGgoljXkD5Vc%2FsBrmnC8LifFRKhElELwrcquWAhm2QNxTAw7PY0PBMRlemcLTDj6Insyeon4ZYQr8GHVogsHHevcw%2BHfVZDQoVwz3ZnM59X5oc6rUs1ma2hRDcwke4Tp%2B4VtJvA1rGGEKnac7RoCOiuxIQe28Bkq2kcyZaacB2RJKUO%2BD&X-Amz-Signature=9ce1208551a0c18e7bdd2467d6c1911df92c37883341fbaf03d4538ced88951c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEXRSVG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvN304NCsxH0GFDUj6aZb3bSFv%2BozLR%2FTcPP%2FX8yKXvAIgQ789NDptLRaYfIzG3n6WGHULJyS6QSR3%2FGtq7V1Y0VUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0euinhP02jyMNrSrcA24TqVzZbPqrlYNC4ZeNfGRmSihEy2v4hKZ15rqOr%2FrPoyfvlI5C6jQ04XtcKW%2F9imUgAVXeBaddZh1Tksi8dlKUKB2v09xmnnWarij8y4T5wKufJkKUgwLbZWQoGp2%2F3k7sswe6bI1Jvqo7aG4dhfZrxwGE94PDjiRUPqChSr7f7SfBdRk4OscKhB4UJDvgDNvSTaBT8HhpabCYtqa3Oulx%2Bz8E8ZMaCzCxrN8yR9iHi6Z6py9Du%2B3hFka2Ioqdsf5n29vuK37OuSNIOGiMwf4Ke1dyz4Ynu9JXh4lw3tBtTHkcdewFegBfojeyiviyWdSvrxt9%2BYlE73yZMkmhj4TYPfr9vufjc8OZZO%2BSHFHgCoOHKUssCTSE19XsYXpkd731rDFE%2Br5i3WmmtXBnIzAn8XSLxcpAoYGZX3HpMy4il2cYQuFzLbIbKNhAChGSLLf4%2B5PN2m1OhJlbmRXUo7cFGwTB3%2FApTPAWbvjBkQfol78bRFsNy76wIxeJU4BQh1mqOO%2FD0LE2CWSn6%2Fcr7%2Fsa2JAuwryJ7x7dvMD%2BTwWV6UZ2MztfPv4wnp1UKXcotR0OAlLigjVzBxMd1mpg1zfVj3rBu1GUfS3tTQ%2FSbxVOJ1PFman0fh18gACPMO%2ByzM4GOqUB8BNCyZPqkJYZJYBZRRRgVrkvRm5i2TYs94V343Q%2BTmotGgoljXkD5Vc%2FsBrmnC8LifFRKhElELwrcquWAhm2QNxTAw7PY0PBMRlemcLTDj6Insyeon4ZYQr8GHVogsHHevcw%2BHfVZDQoVwz3ZnM59X5oc6rUs1ma2hRDcwke4Tp%2B4VtJvA1rGGEKnac7RoCOiuxIQe28Bkq2kcyZaacB2RJKUO%2BD&X-Amz-Signature=154ea2b2c0cb5fd14062ba5a14af039be32f75906842f3c3df90c0e1dd2b054f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEXRSVG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvN304NCsxH0GFDUj6aZb3bSFv%2BozLR%2FTcPP%2FX8yKXvAIgQ789NDptLRaYfIzG3n6WGHULJyS6QSR3%2FGtq7V1Y0VUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0euinhP02jyMNrSrcA24TqVzZbPqrlYNC4ZeNfGRmSihEy2v4hKZ15rqOr%2FrPoyfvlI5C6jQ04XtcKW%2F9imUgAVXeBaddZh1Tksi8dlKUKB2v09xmnnWarij8y4T5wKufJkKUgwLbZWQoGp2%2F3k7sswe6bI1Jvqo7aG4dhfZrxwGE94PDjiRUPqChSr7f7SfBdRk4OscKhB4UJDvgDNvSTaBT8HhpabCYtqa3Oulx%2Bz8E8ZMaCzCxrN8yR9iHi6Z6py9Du%2B3hFka2Ioqdsf5n29vuK37OuSNIOGiMwf4Ke1dyz4Ynu9JXh4lw3tBtTHkcdewFegBfojeyiviyWdSvrxt9%2BYlE73yZMkmhj4TYPfr9vufjc8OZZO%2BSHFHgCoOHKUssCTSE19XsYXpkd731rDFE%2Br5i3WmmtXBnIzAn8XSLxcpAoYGZX3HpMy4il2cYQuFzLbIbKNhAChGSLLf4%2B5PN2m1OhJlbmRXUo7cFGwTB3%2FApTPAWbvjBkQfol78bRFsNy76wIxeJU4BQh1mqOO%2FD0LE2CWSn6%2Fcr7%2Fsa2JAuwryJ7x7dvMD%2BTwWV6UZ2MztfPv4wnp1UKXcotR0OAlLigjVzBxMd1mpg1zfVj3rBu1GUfS3tTQ%2FSbxVOJ1PFman0fh18gACPMO%2ByzM4GOqUB8BNCyZPqkJYZJYBZRRRgVrkvRm5i2TYs94V343Q%2BTmotGgoljXkD5Vc%2FsBrmnC8LifFRKhElELwrcquWAhm2QNxTAw7PY0PBMRlemcLTDj6Insyeon4ZYQr8GHVogsHHevcw%2BHfVZDQoVwz3ZnM59X5oc6rUs1ma2hRDcwke4Tp%2B4VtJvA1rGGEKnac7RoCOiuxIQe28Bkq2kcyZaacB2RJKUO%2BD&X-Amz-Signature=c63570c5e3c2a0b462ea566c859602274542cb09d5133ef3ed4b1a867332c2db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEXRSVG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvN304NCsxH0GFDUj6aZb3bSFv%2BozLR%2FTcPP%2FX8yKXvAIgQ789NDptLRaYfIzG3n6WGHULJyS6QSR3%2FGtq7V1Y0VUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0euinhP02jyMNrSrcA24TqVzZbPqrlYNC4ZeNfGRmSihEy2v4hKZ15rqOr%2FrPoyfvlI5C6jQ04XtcKW%2F9imUgAVXeBaddZh1Tksi8dlKUKB2v09xmnnWarij8y4T5wKufJkKUgwLbZWQoGp2%2F3k7sswe6bI1Jvqo7aG4dhfZrxwGE94PDjiRUPqChSr7f7SfBdRk4OscKhB4UJDvgDNvSTaBT8HhpabCYtqa3Oulx%2Bz8E8ZMaCzCxrN8yR9iHi6Z6py9Du%2B3hFka2Ioqdsf5n29vuK37OuSNIOGiMwf4Ke1dyz4Ynu9JXh4lw3tBtTHkcdewFegBfojeyiviyWdSvrxt9%2BYlE73yZMkmhj4TYPfr9vufjc8OZZO%2BSHFHgCoOHKUssCTSE19XsYXpkd731rDFE%2Br5i3WmmtXBnIzAn8XSLxcpAoYGZX3HpMy4il2cYQuFzLbIbKNhAChGSLLf4%2B5PN2m1OhJlbmRXUo7cFGwTB3%2FApTPAWbvjBkQfol78bRFsNy76wIxeJU4BQh1mqOO%2FD0LE2CWSn6%2Fcr7%2Fsa2JAuwryJ7x7dvMD%2BTwWV6UZ2MztfPv4wnp1UKXcotR0OAlLigjVzBxMd1mpg1zfVj3rBu1GUfS3tTQ%2FSbxVOJ1PFman0fh18gACPMO%2ByzM4GOqUB8BNCyZPqkJYZJYBZRRRgVrkvRm5i2TYs94V343Q%2BTmotGgoljXkD5Vc%2FsBrmnC8LifFRKhElELwrcquWAhm2QNxTAw7PY0PBMRlemcLTDj6Insyeon4ZYQr8GHVogsHHevcw%2BHfVZDQoVwz3ZnM59X5oc6rUs1ma2hRDcwke4Tp%2B4VtJvA1rGGEKnac7RoCOiuxIQe28Bkq2kcyZaacB2RJKUO%2BD&X-Amz-Signature=2eb9d431215f9fb7167b86517d3b8a1cd3fabcc9cb1ed1393e53e664c2741ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEXRSVG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvN304NCsxH0GFDUj6aZb3bSFv%2BozLR%2FTcPP%2FX8yKXvAIgQ789NDptLRaYfIzG3n6WGHULJyS6QSR3%2FGtq7V1Y0VUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0euinhP02jyMNrSrcA24TqVzZbPqrlYNC4ZeNfGRmSihEy2v4hKZ15rqOr%2FrPoyfvlI5C6jQ04XtcKW%2F9imUgAVXeBaddZh1Tksi8dlKUKB2v09xmnnWarij8y4T5wKufJkKUgwLbZWQoGp2%2F3k7sswe6bI1Jvqo7aG4dhfZrxwGE94PDjiRUPqChSr7f7SfBdRk4OscKhB4UJDvgDNvSTaBT8HhpabCYtqa3Oulx%2Bz8E8ZMaCzCxrN8yR9iHi6Z6py9Du%2B3hFka2Ioqdsf5n29vuK37OuSNIOGiMwf4Ke1dyz4Ynu9JXh4lw3tBtTHkcdewFegBfojeyiviyWdSvrxt9%2BYlE73yZMkmhj4TYPfr9vufjc8OZZO%2BSHFHgCoOHKUssCTSE19XsYXpkd731rDFE%2Br5i3WmmtXBnIzAn8XSLxcpAoYGZX3HpMy4il2cYQuFzLbIbKNhAChGSLLf4%2B5PN2m1OhJlbmRXUo7cFGwTB3%2FApTPAWbvjBkQfol78bRFsNy76wIxeJU4BQh1mqOO%2FD0LE2CWSn6%2Fcr7%2Fsa2JAuwryJ7x7dvMD%2BTwWV6UZ2MztfPv4wnp1UKXcotR0OAlLigjVzBxMd1mpg1zfVj3rBu1GUfS3tTQ%2FSbxVOJ1PFman0fh18gACPMO%2ByzM4GOqUB8BNCyZPqkJYZJYBZRRRgVrkvRm5i2TYs94V343Q%2BTmotGgoljXkD5Vc%2FsBrmnC8LifFRKhElELwrcquWAhm2QNxTAw7PY0PBMRlemcLTDj6Insyeon4ZYQr8GHVogsHHevcw%2BHfVZDQoVwz3ZnM59X5oc6rUs1ma2hRDcwke4Tp%2B4VtJvA1rGGEKnac7RoCOiuxIQe28Bkq2kcyZaacB2RJKUO%2BD&X-Amz-Signature=f2cb0b88859c22434ff8cc4331029a8884f5143b3a277496e33c2d34a12a83be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEXRSVG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvN304NCsxH0GFDUj6aZb3bSFv%2BozLR%2FTcPP%2FX8yKXvAIgQ789NDptLRaYfIzG3n6WGHULJyS6QSR3%2FGtq7V1Y0VUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0euinhP02jyMNrSrcA24TqVzZbPqrlYNC4ZeNfGRmSihEy2v4hKZ15rqOr%2FrPoyfvlI5C6jQ04XtcKW%2F9imUgAVXeBaddZh1Tksi8dlKUKB2v09xmnnWarij8y4T5wKufJkKUgwLbZWQoGp2%2F3k7sswe6bI1Jvqo7aG4dhfZrxwGE94PDjiRUPqChSr7f7SfBdRk4OscKhB4UJDvgDNvSTaBT8HhpabCYtqa3Oulx%2Bz8E8ZMaCzCxrN8yR9iHi6Z6py9Du%2B3hFka2Ioqdsf5n29vuK37OuSNIOGiMwf4Ke1dyz4Ynu9JXh4lw3tBtTHkcdewFegBfojeyiviyWdSvrxt9%2BYlE73yZMkmhj4TYPfr9vufjc8OZZO%2BSHFHgCoOHKUssCTSE19XsYXpkd731rDFE%2Br5i3WmmtXBnIzAn8XSLxcpAoYGZX3HpMy4il2cYQuFzLbIbKNhAChGSLLf4%2B5PN2m1OhJlbmRXUo7cFGwTB3%2FApTPAWbvjBkQfol78bRFsNy76wIxeJU4BQh1mqOO%2FD0LE2CWSn6%2Fcr7%2Fsa2JAuwryJ7x7dvMD%2BTwWV6UZ2MztfPv4wnp1UKXcotR0OAlLigjVzBxMd1mpg1zfVj3rBu1GUfS3tTQ%2FSbxVOJ1PFman0fh18gACPMO%2ByzM4GOqUB8BNCyZPqkJYZJYBZRRRgVrkvRm5i2TYs94V343Q%2BTmotGgoljXkD5Vc%2FsBrmnC8LifFRKhElELwrcquWAhm2QNxTAw7PY0PBMRlemcLTDj6Insyeon4ZYQr8GHVogsHHevcw%2BHfVZDQoVwz3ZnM59X5oc6rUs1ma2hRDcwke4Tp%2B4VtJvA1rGGEKnac7RoCOiuxIQe28Bkq2kcyZaacB2RJKUO%2BD&X-Amz-Signature=e76c49ec032ba30c3474ca54a80082264a3b426d146fd1987efc1f20c8977067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXT4IVJ%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLvSDqn3VSHwfy4kRVLkuRIO8LZn4g7ooayK6TXZDEfgIhANch6fZcusebdvTKTgLCB%2F6uJ40kPUALHk%2B9pCoTDqOGKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4qeGk5ppV2mkbtZAq3APmLilc2oMLYBSnRi8R%2B%2BvqQcr6kuxtzkLsYrXqe8mMoJqm0TXx8aY4T%2Bn05CmwepqJeCRHCqyzyT5Ma3EzxyK1OxclQ%2Blo%2BwNc9uPEP8F19CPzo969kDMv%2FK%2Blft7FQ6SbBIov45TeNTj6dzl%2FQ9AilIX0qRe%2F3vkkQwMTOAeJs6V57bJQitaRewFoDAFs7UQ%2FjFe%2F2PQoEXvxqZm7tsIeUow7RSad%2BDx%2BDhEnXFfj%2FRSIeMYJ2tbp1%2BpzU451ogTkkrc%2Ff%2F16Ck0nRzjF7K9n6sOaBvteAjCA0TeqY4sxCRPpbidJJWZj8xYW4mIfWHliisC95rybThKmYq4PR17U%2FLSKyOFDjemBUTiTNYMTZ%2B7OetEGLIlzImjRCcpOeJXX0Y%2BioYaPgl4DErM%2BeCUNN133BJLcAhqTlE9aMIWYhLYnACJPOoindu%2BD1WapSEdNyRYe%2FhLtatOCJtErGupRq9BX9mYBEaRJS%2F4%2BGxyAWNArrgYfMY7UdEuED6ixfuNNrjQtUfB6H5RDK4%2FjOlDxJzABxKiC2r6ScQjJ3rrYEY2a0Ng83OaCsjJzniym6z1vP85QKeD1pY2lFtSgK0DSGBol8d2i1pZH5mJuQ%2Fn%2B54xnJh1bu%2BO1CsHjUjCJs8zOBjqkAeraq%2B8Q4AUtPssMWWjMC%2BgV4m5XsboQcAye5AN6IUKEFOempGdCC6PZfamrIIjR1%2FvxOdUmLx%2B70roQO6YAO%2F6%2BGzzAUpKuLrLYC%2FahJB5%2BsBsooZGOhEoX3NNPKfmeSiWzTTq8vtbQ3HCzXgntGnhWlJf37TnG0bEj0swnEsbsDyUH4ogZ9ppWeikQZECnxbtg6mAY4qofazoT23mW45v2oicZ&X-Amz-Signature=74ebb51772592a2c6f79f58c4c7f6bd18a60fc5ac9fee9fcd0bb41a2be11fb74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RRXCFHM%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuG2Cs%2BTQ0I%2BtIdFOvyKezxgO3%2Fl%2Br0WRb5gM3em7seAiEA%2BiUuUtsf6N5tVT2xhx3QEZQL7MgNfnn0%2BdIbjn32luwqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVSnd%2F3%2FnKejow4iircA%2BlsgS2rJgmOWCj%2F%2FM%2Bn4Eos1JmR6niCQZthT%2F9EmBflIcjeInwxZuTwXg1TfWgep5STS07O7IlFjWihCUHY0dVbxyuAYL5ZylKp0FLyM5%2BvApolfrYFSO%2BVzJDxjosv0Y2UW8c1u6jEDZ5dA1oGC7eS7%2BmVEqv%2FVr6vu9fDFghaK7Ajw70i6palRPSooRcRZv0XqpumJQAVmDCx9ppGSnicYQkt%2FT8p%2Bl%2FT6qnL%2F0t%2FbLBwEF%2Bwdy0bZ0SQQmNXynjMgCJqKn5YGAkI3mEt1YYxmr3Tvk2gcbXPOnU1yxvjcDFbuXAzVKGDaDCbROTU%2Fg6j5f8V4fEnpLwFcU3EocHTdeWJxGbV4uVv4WhU3iHy5mSdhqbyqxDI%2BTuX4%2BRKDL2zCiMWd9WEjn412%2Bv0tNgT%2FlEfDzie%2FDWrpeA9BAHKtjRHI58l5YNwHOvdztUpPvCco%2Fa1kddgEggBGH3NneJC1poj508vzNGCBFHhYMDC3XcUOwTEeh7GWuv3pnUmDm93YbrJj1f%2FvwwZejBpTu7ZKy907VUYMJQNhmFF29LJFtOjl2zhfjg0zVWeB0Yrpu02jgQ1JPBYCancYRdvH2i3kl9NZD%2B%2Fn1PYu%2BUxVsNZ4XGfYOecPEuSekvyMLiwzM4GOqUB1aRsWMa4EqZESSxCEg%2BMoDdYwkAVO5PlIV8FoioC1XO4FxEhwdUEhFoSmzMRdWjh6sKKrUiuJzKoJZF1tZm%2FMSsvGefo2IDTwEqO6EZ549Od0Sn03OCvGaY18CVr2LiKYkd4gd8TLXyzGFhUzzNQCSuDJXBWOAojqgURBleQf513XC4jnYLBUYkvBPcMg14IZitl5WinckFCTT4QB2J1MO3xjjKx&X-Amz-Signature=71249d81c92b2b1565b423d16cf9c11a759f5b6e843a9a7282fdcaebe4898803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3YOKEKB%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGAh78DyCZ5Sy%2FRRbMc1P4f2n0Ov6hN5atjkdp3eb6QAiACqIz9SDA1mj5xXPNMQ6hTgplEa%2FM3EEeMM7KyK%2BTTTiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMbAVbByWqZSykSHcKtwDtsZC1v%2FnNvu3Sxn724%2FvH8V2kGhA7UKIGYcFfZMH84LHcouKZauNOS6tLHcwH%2BhSUZLvruNTpI07CgcOmi6CVfnz5bhvu0A%2BkcWryd3ZLYlajCFrlyEnWRJ6HyLI0%2Bmia%2FTYYBbUjbC95a3N%2Fn692Le6mSZUOjG0DZpS9CCUdjY7da1%2FdlwUtytUPZ4DYwd2xikLxvY205Wo4sfhkPtjT3Xun%2FYIw%2Fkkcgxou9hlkAlhZ2pNmWnhH5kRn7jCxp4oFguAEzY7z9bfJElDeVkVm2jcj%2Bq%2FvWd9zojiEuX1Ad8mfR4%2BzrAFi4%2FfS7vyRQvtccNkZphkjSqppFSkcYsdj02v%2BmvQRs3Ea9hwprBd2Voyw%2ByrGl17IPCwkGAaf6auh2AnGZ5hPuRoreAPWJvjsBovWYfn%2F0vwb1fw%2FwzM39PCedZ9vjtFf7BaTZr3qJJcI4ddXrN0VDpZV7tpRwwYIt7HpScoJSdipDmtdMjy4nj%2Fg92InYb2%2B72o2%2BTo5XjDyqPIiKt9B1wCOboAUkRrSI48cwmFL105X%2Fr7OaxdDA9QcXHQVIcOMWjGyYRKmST9ibNnCe%2BbyzlKsxbnZR29N7h5jE0eG4kZ%2FBsoqjRe1846IoJnCyRWlO%2FHD4Ywh7HMzgY6pgHVXVl0C5MiXfnuWiIWcOsuj6KSSvfCW7C5af%2BVXzTOoKxvlwbL39vqT%2BDuXxSgSANwon8FEsxuwri3Ii1io6cjI4%2FlHMAxCUmDMeQOPAyiSgaxdHiYXTJb%2Fyw9ELxdiCBuP8oO7zRyK9ZYz9Zlk3gXD6e%2BHZklQcXkLKOQppdjZK5BDcHlVaeCq76LBlaXTZLIJMbeHR82j5Tcjh%2Fp4GUqn0H%2F8GR0&X-Amz-Signature=d584f32475cbb80ed6b574be990e2de9678c644d2e304d2de23edfdae35e6529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEXRSVG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvN304NCsxH0GFDUj6aZb3bSFv%2BozLR%2FTcPP%2FX8yKXvAIgQ789NDptLRaYfIzG3n6WGHULJyS6QSR3%2FGtq7V1Y0VUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0euinhP02jyMNrSrcA24TqVzZbPqrlYNC4ZeNfGRmSihEy2v4hKZ15rqOr%2FrPoyfvlI5C6jQ04XtcKW%2F9imUgAVXeBaddZh1Tksi8dlKUKB2v09xmnnWarij8y4T5wKufJkKUgwLbZWQoGp2%2F3k7sswe6bI1Jvqo7aG4dhfZrxwGE94PDjiRUPqChSr7f7SfBdRk4OscKhB4UJDvgDNvSTaBT8HhpabCYtqa3Oulx%2Bz8E8ZMaCzCxrN8yR9iHi6Z6py9Du%2B3hFka2Ioqdsf5n29vuK37OuSNIOGiMwf4Ke1dyz4Ynu9JXh4lw3tBtTHkcdewFegBfojeyiviyWdSvrxt9%2BYlE73yZMkmhj4TYPfr9vufjc8OZZO%2BSHFHgCoOHKUssCTSE19XsYXpkd731rDFE%2Br5i3WmmtXBnIzAn8XSLxcpAoYGZX3HpMy4il2cYQuFzLbIbKNhAChGSLLf4%2B5PN2m1OhJlbmRXUo7cFGwTB3%2FApTPAWbvjBkQfol78bRFsNy76wIxeJU4BQh1mqOO%2FD0LE2CWSn6%2Fcr7%2Fsa2JAuwryJ7x7dvMD%2BTwWV6UZ2MztfPv4wnp1UKXcotR0OAlLigjVzBxMd1mpg1zfVj3rBu1GUfS3tTQ%2FSbxVOJ1PFman0fh18gACPMO%2ByzM4GOqUB8BNCyZPqkJYZJYBZRRRgVrkvRm5i2TYs94V343Q%2BTmotGgoljXkD5Vc%2FsBrmnC8LifFRKhElELwrcquWAhm2QNxTAw7PY0PBMRlemcLTDj6Insyeon4ZYQr8GHVogsHHevcw%2BHfVZDQoVwz3ZnM59X5oc6rUs1ma2hRDcwke4Tp%2B4VtJvA1rGGEKnac7RoCOiuxIQe28Bkq2kcyZaacB2RJKUO%2BD&X-Amz-Signature=9819d530e1f2012b17890e180c582a6a4afb3b3b11c2b05189b749b78391f9cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FV77RBQ%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe3qspKEJkt78x%2B00KAgjHBsryZHg6jJnKzxe1AqjRkwIgDK4jmL%2B8pATEaALieU56ulYqHAa0mPV7wkfoPbwHfG0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUdo02sYi11xesrLSrcA%2FUV1Prgi2k7Wj12v4ryZn75lr23TT%2F12pE5TsDlj8WhWkTL%2Fp5ZRmXjpXvXUt0wTDHvVnGhqVqxeNq6GLKPRmwmAque6W%2Fj8HmFMq%2FfwA2B7hdeb1CPuDVC2i0XLGJ4UHKUkMPbcz64oyZ3Q2WnTyzmJob6KB7zmSRIGlcRPOGX%2BUr2%2FjgzPKa76xkfWUt8rXCgnLdn1kTXHUdEBvOWKB2eK9cJpwFvQjSTV86Q3duPQFKQ%2BzMKpmKtRQiydPRvUpe4P%2FwtzuPeHliSOPcDxrO%2BIzU6lDCQGyB2yCZrkbhIfTiEq394ZZ4e5WnSM9STIOMZypK7a4ja2AvzQk3T33w1vpFZ8f70SwSbKWsQlgcl6kEJLrdJBAdWLN6b3JyF8X7HYbtNJWgoYTUGVHqbwwsqeXCQ7wjectSRcJhC2bEsYwsrV%2Fzu0JYzWl5%2FAi85AxHyUYn8GclLPFx6mOScBKjoVwzhcaWsoSnGCMjgDNJmrDumStBjtTA%2FM5XcLedg%2FAfFLZriEbSkXFNckzDwB4KU1U2rUVS7FBfYQSuVDqI2NFi1AkrkNo583B7VYR0uQe5%2FHYQ2KpGo6i%2BI4ZhmjKKw4760uP76tKRzjnrx6WGKghQZlgnNXN7uRVLXMM%2BxzM4GOqUBYvZHxqrbb68bq77DGU3emr2RSNsBERC5kVTc4dZMffxRnqs%2FJoHlRFmwqtIOxf6KTzFPD%2BYJJdOOalH4ZnAzcbIEGKpQ37w5r0kU4YjL%2Bdpkl6ttdMiT%2FpjWfvT5XiPCZtPr353MfMTjOoLxYW8tuvil51XOcNdOxBBwWwiBGf4YNbS5cZ5D6uL2%2FWXBE4NYz8lcNw29hYOKGdYGoc9%2Bd9oNo9gV&X-Amz-Signature=329436ca845ab2ffdbb320919def9f7fbca5f30c66c460588701ad9374dfd783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEXRSVG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvN304NCsxH0GFDUj6aZb3bSFv%2BozLR%2FTcPP%2FX8yKXvAIgQ789NDptLRaYfIzG3n6WGHULJyS6QSR3%2FGtq7V1Y0VUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0euinhP02jyMNrSrcA24TqVzZbPqrlYNC4ZeNfGRmSihEy2v4hKZ15rqOr%2FrPoyfvlI5C6jQ04XtcKW%2F9imUgAVXeBaddZh1Tksi8dlKUKB2v09xmnnWarij8y4T5wKufJkKUgwLbZWQoGp2%2F3k7sswe6bI1Jvqo7aG4dhfZrxwGE94PDjiRUPqChSr7f7SfBdRk4OscKhB4UJDvgDNvSTaBT8HhpabCYtqa3Oulx%2Bz8E8ZMaCzCxrN8yR9iHi6Z6py9Du%2B3hFka2Ioqdsf5n29vuK37OuSNIOGiMwf4Ke1dyz4Ynu9JXh4lw3tBtTHkcdewFegBfojeyiviyWdSvrxt9%2BYlE73yZMkmhj4TYPfr9vufjc8OZZO%2BSHFHgCoOHKUssCTSE19XsYXpkd731rDFE%2Br5i3WmmtXBnIzAn8XSLxcpAoYGZX3HpMy4il2cYQuFzLbIbKNhAChGSLLf4%2B5PN2m1OhJlbmRXUo7cFGwTB3%2FApTPAWbvjBkQfol78bRFsNy76wIxeJU4BQh1mqOO%2FD0LE2CWSn6%2Fcr7%2Fsa2JAuwryJ7x7dvMD%2BTwWV6UZ2MztfPv4wnp1UKXcotR0OAlLigjVzBxMd1mpg1zfVj3rBu1GUfS3tTQ%2FSbxVOJ1PFman0fh18gACPMO%2ByzM4GOqUB8BNCyZPqkJYZJYBZRRRgVrkvRm5i2TYs94V343Q%2BTmotGgoljXkD5Vc%2FsBrmnC8LifFRKhElELwrcquWAhm2QNxTAw7PY0PBMRlemcLTDj6Insyeon4ZYQr8GHVogsHHevcw%2BHfVZDQoVwz3ZnM59X5oc6rUs1ma2hRDcwke4Tp%2B4VtJvA1rGGEKnac7RoCOiuxIQe28Bkq2kcyZaacB2RJKUO%2BD&X-Amz-Signature=fbb584e041986a99e53c8576934f9245d936a68d7e83c75d09454325d3e843fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3ZKAWMR%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgSuj%2FYYcA0Y6eMGPn8jZbgJ%2B%2BIZQEuPU8Q0KJ71kLpgIhANpnRo3QrN8M8dLHw2X5v75uI0J9If08f1WQVRmQa4M%2BKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsVVT8Kn1EjLE1KrYq3ANlNTculAe0iZQpv3bf8c2ykVPHB2XPruF1wWoV07%2BVjcWmNghgNrY38bmsx5k0O181PzkYN5nVNioju5DJ4FOa5xPzBKCRidDH7YqEiNkhDBfXMYvni9WU9HrJQMH%2BcnBpcLHR3tD3FSkMNxxSt6L8%2BL%2BLCTIyXTZSS2oi5FYpyJHV2OhZudBKWb%2BhpL8rwSztzedOKpoEOOla%2F8UJPhWV8KDimAKodlp3YoTvCOqlf%2BqE2ZIHndE5b4%2Bh1ascya3ymjRVXv5htyYcMdygCjYNee3mHNvjv5jkXN1UDzEfOordR5Au8Kl8qPATDOYrwWWP5pgBAcFmB0pTboGMNeCebUherEtIbap2%2BZQ8Fitl%2FAkfE4Q0fETbwb%2FXZYWNQy9%2FcNwHDiA04zbTTTEdHOHW9ku89V2g3hPsg0100%2FTZvc4xVrgzZ%2Fdatwhvsg%2B9DvUUhiPDg5V8xkwxCzvXHwAbVVW2uXcMjMtYLoMz6TUuO9IZESwD8OD45JuUw6qZfOG11JIu0DpX9NVM5oJ7h7VYIlgSvW%2BWH%2BMzBtQf1nUsXR8s5pfKR5YfeuxHS0%2BnH%2F%2BPpd1svSM3Aes7nAy9PRoB0id9Ux2jlsHAcIs0%2FbQ4jtZqSrerjV9%2B%2FvsiRjCmsMzOBjqkAV7cbdTxB1uLqE%2BwqIMTRymAr0OoNxRw6a5%2BMRZoNETyAFSAm7PfVjPVmiKJBjQu%2F3OeR2KSIqf%2BeXcQpF6DT1MYAOFw8M6eAL8VrO5Jw7t%2BJBLMSwZsXVz1B8jTnnD7Lgn1ebo0kRCI6lnkFM4aBA3REQ2KGwyTWpcpL%2F8RNnWjsizQJ9OE%2BzT%2BmCRnDaYAM9LofyyMWwnkW4iQ7Od0VsKEcwGY&X-Amz-Signature=a81e7e5ba65d41465c37dc4de054980183f97689e2f7d5c7c1078dae754763a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEXRSVG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvN304NCsxH0GFDUj6aZb3bSFv%2BozLR%2FTcPP%2FX8yKXvAIgQ789NDptLRaYfIzG3n6WGHULJyS6QSR3%2FGtq7V1Y0VUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0euinhP02jyMNrSrcA24TqVzZbPqrlYNC4ZeNfGRmSihEy2v4hKZ15rqOr%2FrPoyfvlI5C6jQ04XtcKW%2F9imUgAVXeBaddZh1Tksi8dlKUKB2v09xmnnWarij8y4T5wKufJkKUgwLbZWQoGp2%2F3k7sswe6bI1Jvqo7aG4dhfZrxwGE94PDjiRUPqChSr7f7SfBdRk4OscKhB4UJDvgDNvSTaBT8HhpabCYtqa3Oulx%2Bz8E8ZMaCzCxrN8yR9iHi6Z6py9Du%2B3hFka2Ioqdsf5n29vuK37OuSNIOGiMwf4Ke1dyz4Ynu9JXh4lw3tBtTHkcdewFegBfojeyiviyWdSvrxt9%2BYlE73yZMkmhj4TYPfr9vufjc8OZZO%2BSHFHgCoOHKUssCTSE19XsYXpkd731rDFE%2Br5i3WmmtXBnIzAn8XSLxcpAoYGZX3HpMy4il2cYQuFzLbIbKNhAChGSLLf4%2B5PN2m1OhJlbmRXUo7cFGwTB3%2FApTPAWbvjBkQfol78bRFsNy76wIxeJU4BQh1mqOO%2FD0LE2CWSn6%2Fcr7%2Fsa2JAuwryJ7x7dvMD%2BTwWV6UZ2MztfPv4wnp1UKXcotR0OAlLigjVzBxMd1mpg1zfVj3rBu1GUfS3tTQ%2FSbxVOJ1PFman0fh18gACPMO%2ByzM4GOqUB8BNCyZPqkJYZJYBZRRRgVrkvRm5i2TYs94V343Q%2BTmotGgoljXkD5Vc%2FsBrmnC8LifFRKhElELwrcquWAhm2QNxTAw7PY0PBMRlemcLTDj6Insyeon4ZYQr8GHVogsHHevcw%2BHfVZDQoVwz3ZnM59X5oc6rUs1ma2hRDcwke4Tp%2B4VtJvA1rGGEKnac7RoCOiuxIQe28Bkq2kcyZaacB2RJKUO%2BD&X-Amz-Signature=2893b3c61cdf06273e90faadfc2d6eef17190d4d60fea450e6dd3b444168b907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAXCMSAX%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVTVWR57AZoXrnOJqEiaM1sBXlxy2hxtY1DHMh5bgG5QIgc5E1F2fQBxtQ0TJyge%2Bujvv%2FAuPxpMfPsy70fXI%2BHy8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaEELFxp25S3qGLeSrcA1kqVVTsXpytyQd5xn4Ou5On0MHkT7PRJkcGaHDzP%2B4lvet9sg1AVns7wGpMOZQ2YsG2%2FyIe4MEtYgxyWsnnFHGTe3FMX9UqReR6gYpHa8PzGiy96jE6KMJVYJdCZ3U5aqhGG%2F%2FWbNsrJbbsUX5j64mEJprB3tu96VGJTCq9%2BgBGo8URx9Ax1UZmB%2F1y8H8gOmzwBV4Hnj9HXakAT28Yik4Cq%2FdNkYCF2ZiqaYumf5ZCKrAZChHCZOQGqmOUxjpXQbuaocGFu4oIFK4mqfQ8OQNJ5UYNwTqo9tJ7TU2Xysf1FM77gbKsAubveuZ56u0wEjyuykcL%2BHAeKqvYvqRSGANBEXhzTu0HhAZKnp4P61SNq7Tc57yg8rvh9%2BR5c2ss5z9qr8Y%2Bwei%2BVXzt5j48wEBSEANEPrDbOjHlrYeoZEV6NYiowont%2F7hcDv9DAx2iAqpDUj7O1cbxpu2GzSTPYdswvAZUKEgpGluFPINRClKP9Utz7OKwuLejm6PNSE%2Bz03Kid5b9pA7HNKA0GoLMeN40HHnye0v30YaDBImIVSMyAHc7HKBZ2%2B7FeGggrWVLAyKHutD74%2FQFC7yX9bFhqslLnuye23NR2EziKk%2BLkKDrpLkH2salCCE5eSNWMJyyzM4GOqUBS5PplRqB4KUnHhpWqsIUP7E5P%2BYcaGOmPNWxDpH7bcjL%2FYAIfPandZ%2BOmQpcgqocnQaDMj9UCiA4YX2x7XCqDg7mBkb3TDYk0FcUuUAnNsMu18WSJstvfUHgqrSb9PlBQTD2HksEibfabQqP%2Fa%2FEuM8yVCrPTiiYVLtBRObrWSk5JKWEgNwQ3lZ4VQXA7EG5vOX1z3fJSpdWOD64EMnwWGfW3fOP&X-Amz-Signature=a67b5b6ad3ed7ee09aa818a7c7c1c5b8fa8c560c4c9947006e5b8676c24034f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEXRSVG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvN304NCsxH0GFDUj6aZb3bSFv%2BozLR%2FTcPP%2FX8yKXvAIgQ789NDptLRaYfIzG3n6WGHULJyS6QSR3%2FGtq7V1Y0VUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0euinhP02jyMNrSrcA24TqVzZbPqrlYNC4ZeNfGRmSihEy2v4hKZ15rqOr%2FrPoyfvlI5C6jQ04XtcKW%2F9imUgAVXeBaddZh1Tksi8dlKUKB2v09xmnnWarij8y4T5wKufJkKUgwLbZWQoGp2%2F3k7sswe6bI1Jvqo7aG4dhfZrxwGE94PDjiRUPqChSr7f7SfBdRk4OscKhB4UJDvgDNvSTaBT8HhpabCYtqa3Oulx%2Bz8E8ZMaCzCxrN8yR9iHi6Z6py9Du%2B3hFka2Ioqdsf5n29vuK37OuSNIOGiMwf4Ke1dyz4Ynu9JXh4lw3tBtTHkcdewFegBfojeyiviyWdSvrxt9%2BYlE73yZMkmhj4TYPfr9vufjc8OZZO%2BSHFHgCoOHKUssCTSE19XsYXpkd731rDFE%2Br5i3WmmtXBnIzAn8XSLxcpAoYGZX3HpMy4il2cYQuFzLbIbKNhAChGSLLf4%2B5PN2m1OhJlbmRXUo7cFGwTB3%2FApTPAWbvjBkQfol78bRFsNy76wIxeJU4BQh1mqOO%2FD0LE2CWSn6%2Fcr7%2Fsa2JAuwryJ7x7dvMD%2BTwWV6UZ2MztfPv4wnp1UKXcotR0OAlLigjVzBxMd1mpg1zfVj3rBu1GUfS3tTQ%2FSbxVOJ1PFman0fh18gACPMO%2ByzM4GOqUB8BNCyZPqkJYZJYBZRRRgVrkvRm5i2TYs94V343Q%2BTmotGgoljXkD5Vc%2FsBrmnC8LifFRKhElELwrcquWAhm2QNxTAw7PY0PBMRlemcLTDj6Insyeon4ZYQr8GHVogsHHevcw%2BHfVZDQoVwz3ZnM59X5oc6rUs1ma2hRDcwke4Tp%2B4VtJvA1rGGEKnac7RoCOiuxIQe28Bkq2kcyZaacB2RJKUO%2BD&X-Amz-Signature=9e9cea4851ee353e63b32e3396bf700e7efb8d1c00a29365ac3eb6381adb3f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344XQKAA%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGKN9SrKC5%2BOgHtXRbEDx2ZTOUvrANpsn0vbvHAhFRQAiABN9dw%2FibnIUN8TxGlhaKG9zG2hBWoXwtqQiJ6vfQHOCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUNHPw0fhuZpWQLqWKtwDFbH1SZBWran5gab%2FDD0g7VvGiK%2FkBNzmEk6D56mhSsxVHJye1lrDehjBRlPgflQDQ9rW39a6HUnab4ItRcUsYVFok7Gh5I26A6i3ln%2F89mL7cIE5pueItsuspX2n4O76ignT%2F5PRaaJlYtjtPS6YUJd8KuiPvwNB36maHXlLzoW5WTwCgUqWACJtEvSxoDeE4qFiyfm05qS92TS8JRZP3D%2BSWpr8JXQVhsvobSH35FM0JiJPF1oyzVMKdfJesZmstKE%2B1cDiTxfYk%2BZj%2FMBYVkqbulxULgJeYktE3YoZrYGJ4k17rVyrfzyxOopBYwC7x1uXBGSrdW7Yo23z3zGgwUrJs1v49TX3hBIcHNcOOQ2ja3WH4lTArsCXCfvTxoXUI6xmLLwznqLWGoF7lCcYmMQdbg45INdh8wfJtPYIqmuAjlGsIRC6EeYU4u7Jbb%2B7ZWXBd6yfxbTEAfaj%2BHclsljTR3YXAYgBnRnRYRsjDGa1Z83nMxB%2BXyh29iR8H1nokGirQ7nN19hHuuAgZqBliG8z8dh9edmedzV%2F8d%2BeiXJAARUxcfUT29wjRZ9aHmkf5l%2FjJfGAdTs6cMmC8oLr5jEVGRkXJwzrJv6e9k31BTmR9xrTKEZsvtkDo8UwjLPMzgY6pgHBVXIHjCXwyEwERgpHFHPKGQ0vMykDu2bXXeZ0hbd07Gh%2Bg7QGSR4OXu5htV3%2Btwqlul4CboSR6ZGPkJxMqPtewSWptoONgo4JUVPPZR%2B8clEp5HWwUejSDs3tgBGeIzcRTvo4MvFRDRvJ69Nxzgx2Hg%2BsmvDbgE7ZWxvx%2FSU9zqCmVQ3SUptLsnZU4m6vlUIBLqEs6xVOOsv2pDYVphKgc09vpgPV&X-Amz-Signature=c2a58081e3b6edd58cfa7422174a78c5a5b553380e56fae1b81bb27bac1e2acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEXRSVG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvN304NCsxH0GFDUj6aZb3bSFv%2BozLR%2FTcPP%2FX8yKXvAIgQ789NDptLRaYfIzG3n6WGHULJyS6QSR3%2FGtq7V1Y0VUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0euinhP02jyMNrSrcA24TqVzZbPqrlYNC4ZeNfGRmSihEy2v4hKZ15rqOr%2FrPoyfvlI5C6jQ04XtcKW%2F9imUgAVXeBaddZh1Tksi8dlKUKB2v09xmnnWarij8y4T5wKufJkKUgwLbZWQoGp2%2F3k7sswe6bI1Jvqo7aG4dhfZrxwGE94PDjiRUPqChSr7f7SfBdRk4OscKhB4UJDvgDNvSTaBT8HhpabCYtqa3Oulx%2Bz8E8ZMaCzCxrN8yR9iHi6Z6py9Du%2B3hFka2Ioqdsf5n29vuK37OuSNIOGiMwf4Ke1dyz4Ynu9JXh4lw3tBtTHkcdewFegBfojeyiviyWdSvrxt9%2BYlE73yZMkmhj4TYPfr9vufjc8OZZO%2BSHFHgCoOHKUssCTSE19XsYXpkd731rDFE%2Br5i3WmmtXBnIzAn8XSLxcpAoYGZX3HpMy4il2cYQuFzLbIbKNhAChGSLLf4%2B5PN2m1OhJlbmRXUo7cFGwTB3%2FApTPAWbvjBkQfol78bRFsNy76wIxeJU4BQh1mqOO%2FD0LE2CWSn6%2Fcr7%2Fsa2JAuwryJ7x7dvMD%2BTwWV6UZ2MztfPv4wnp1UKXcotR0OAlLigjVzBxMd1mpg1zfVj3rBu1GUfS3tTQ%2FSbxVOJ1PFman0fh18gACPMO%2ByzM4GOqUB8BNCyZPqkJYZJYBZRRRgVrkvRm5i2TYs94V343Q%2BTmotGgoljXkD5Vc%2FsBrmnC8LifFRKhElELwrcquWAhm2QNxTAw7PY0PBMRlemcLTDj6Insyeon4ZYQr8GHVogsHHevcw%2BHfVZDQoVwz3ZnM59X5oc6rUs1ma2hRDcwke4Tp%2B4VtJvA1rGGEKnac7RoCOiuxIQe28Bkq2kcyZaacB2RJKUO%2BD&X-Amz-Signature=4381710d11f342178f692c83c95900fd5c7ca1699013a134c85214247e642efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IFMOKJ4%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm8tT%2BQBlxVzeoabpf298p7b7VHthnWyoZp5zMbz4qvwIhAIfO6j60DI9xyNy3tywXBnym3hT4iFQ4jlRmG%2B%2BBqEySKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbg2lo6tTlmWNJedsq3AP7%2F5wHGYQVm%2FesD7cSmiJoaV5ZEt987PUM3Qg7W7SPg6pCksl0K8T7ylqZOp%2Bi4sFutl7b0lELhRc0Sd5GYDM7jNrTPgQkGXxvkOqTqeX3A21rz3nkQbLgkG0qly2ahsCAdw1JrogCnD7EKPjaMmSBQ9wZnLsGg0SC2QRNYKvREg9F5xs9Cjx%2B8%2FeKrveohR7gnZ2jYrpYE6856euaOqnnkBI1CyahLJDGcQ5mYF2gpzSkkv5dEMtq4JzLVKC%2FCDZcUGbeh5YSCLDkYcJnI97RkeNaBsj6fZKvR1jpLdCWEdwlGkE6Gav8XpyODY4weJBXZ%2BGh4CMO%2FLOxu9kdYdw%2BZroXqVmskkMhhjFCFj1Go4S3G8D8dO2EgjC7wRJ7RZV5m6C3IOHF4S3HzBioIWAylnELhuTX0sKqEcdF2o4z19TrexELqOgmnVN8TcRuDg6Ynt78HYsBPBNmXg8P0quJZwo%2FKQpdJFwhMkbCLK5NkikOzAUNStGuomRyROHWTfY3GRq3HWfeXbPQHhOl4Wc4l3XxEjVo6hi1g19IVacIvsbrWyJo8iCj%2BfV6xnAogoz%2FyAsKLVyAn3lLjhR1wMORxdMziRBaHJBGeKqd6cU3YeieGILKBn94tsZAmTDEr8zOBjqkAdcLK%2FzmOxGTdLJlHC0cOTKOAdp2rpjT%2Fd%2BKh8MLrR30J2ye95y9rpr0BumNtskayBs5p1p68%2BD%2BFBMhgy1pRj8979CGQuCUba9FvRaiXwIIPXOICI73dT5V6HVx2A%2FdD3H6jVHxJ0GqhEBG20q5zM0F9ppP3JXsAp2cOzgkXQc3uzSlnnWr7i99f9dIek4tUQcPl%2BOSwwx53BsfgtycPCEuEc9j&X-Amz-Signature=9000d20cff14c1a373ec26aba8554691e1d5f395552763befb22ae63f5239a52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNR6WNDJ%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR7NIfM5utwTmbRQUZ3lp1QYWkvAiKOY91wAMm3Jj7vAiEA2sbo0hCf1bdBrD2wwajaQukr38DB45RHN8Am0VsKTSkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FTeuAyFo8nPREHmCrcA9SAhs7VVZnJcQciFz7n6dapw8xwK45cP2bJBo4vroHHPdbHVXuCsv4PKd8E1CwonZeqGxLXdOuKU1YSUeX1jPTFH1W3sr08wan%2Fvlfhg1Pj7MVuGLRm6y36Y7UUtjgUhxcBHF34x2Jresaa4MOB63M0xHc4SCnmRQjb4tWs4zrn%2FoKlL4xqPMUWhBjcZhq%2FMEf7%2BiKmlMt7R2NsoNZpu2kJ853snCpm4jG59fdS3SvEsHZKlSRa5G4RF9CDM4zvoZLXgBLo3iXie6ZJ4S1fmDSm%2FxA32m5CK1%2Bvm1MrCgaXeRMxmvJDgkeFdOGWdx%2BWew6nxQB5lNTtdym5fnbFjMrLH5ym2MxVZ%2Ba7S%2FnNUG9Oixx8TLRbGJ1DSiScPZV4wGMjZJb7TosW06BSlng%2Fsi99UVYluCiC3c%2Fwmg3SnYGdg25u2%2F%2BBAh4Z8CfaBNj81L4k8Xqr9uUVBmG8mPpRnM0AxdOd9zK5SaurmUjvGo8hGtLJD4lKL9vpPB81OWU5%2BC5t0LCeOZxUWS%2BE%2FReVDwSTQ94vrnarB7AeRJORiSzu%2F2Gjv%2FPsJQrt42SI52QDEDgaurNzFqhp5z6R87PCd3pEoy1x0Oka93cLm09VJQSnst0JLisq71RLYS47MIawzM4GOqUB8r6P9y9Ldi4XrbhU32nPUEGhE8v6MNzrTmvymp75SBHnKGr3FYcgeqX5sDon4ceUCTvkjvLuWrzRRh26tZABXiigemOcNeRWxhfuA1nNMLHmNfSptyvAMLxTZmxzdMOSA2z9rdta1eGMJTpmTYGFP9RtcKFX3QLxZbfdMHI%2BjRf8E%2FzWEpfRyQODHjpBJqEFWOQyOoVeGd99Yl%2BnvAYfRhgaNrMh&X-Amz-Signature=bd2e29bc4cc93f78f2cb35b5f7bae1ff77e9abc3655df28f9c615aed00940343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRGFXQAS%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP%2FDsgDu3%2BVrOmyL56WWZ5NKmkCVNE7aNHLObTyLljegIgHRU3shf%2FPIlWy%2BfjO4a21AfKUOy5wyQ6ljCWADoaegAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqEf8iFP2s2JQ%2FShCrcA72KmYrJHL0KFwahlj96vNy4Rnf5qWkejqSW8H72oRKddjh%2FuT0Q8lOpqjzYesIXJxqT4fqgs5xzN%2BfnvY3FehidhlByGUlipDpaXRfhjeXb5rJlIZNyLmHNuWFPJkDDu5uJFbC3hC7%2BYS%2BHXkH%2F8j1Y0DaZSgLUFFlwyUDrlYTwqBiwXv2vP2%2Bh7HjN5S08Bah56jnZm5vP0BoYrItg33l5hRhDWIXvIDoY9wKntToDLEgZ3lcjuxlaLKFCsEaevUA4s%2B3kj0ZzLU%2FEB89kYDU%2BKtLcbHGqaEpYp%2B1%2FeKwRs6WcZmUN4nJLUg8oK2%2BA20DOakdfykGA6k84a4uP3WkAnxKQA9h7AuBuqsDHS2MZHrNGI6LMrCzcalkaacpL8G0xJGX2PmHqaQyDyEQR0gdLq7moHGjDUV9TDdhN6HtpLDOIT83BYy03PV5grwwRR4viIhcrJvUJ7Q1ETX8FpQfHukbBl%2F3RpIzgCRMKShvI4MEfor2w3BGdsGmFQaNYi47jhRluwzLRzE1xFbZl6DsPyASBpvPLgzeDR7OIOFeEiAG77XPZdniuvrWorqidDeOK2fuw874zsC5qFrYe%2FJFK82oTkcHCtRyuf59XPkPC8Mb9ReNjqbKRKTC5MMWwzM4GOqUBqXDs%2FSM11Q9WxXJYG%2FX4tP4fl6SB%2FjlEzM6VJ8vy5%2Br2xWQdu0rSEomCvG4zmfz%2Bi6b8f%2BNjWIP418ep4PY9vEgdwzAJkAZzFw4HqNYuSMz5p%2BUlEZ74lIRbWEdYRSck9MihTDnF3FiMgBTAlvReymTaM0zZTCpscB3F0O9WkZR2IdAXTRDJsGMQyawE6LkLezEmuqhs%2Bxa4A%2BQ3V2uBJKB4tPv6&X-Amz-Signature=fadfe9bacad12033258103ea7f22e00d00cdb0625c530a8ff4c8a9dedc09570e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEXRSVG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvN304NCsxH0GFDUj6aZb3bSFv%2BozLR%2FTcPP%2FX8yKXvAIgQ789NDptLRaYfIzG3n6WGHULJyS6QSR3%2FGtq7V1Y0VUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0euinhP02jyMNrSrcA24TqVzZbPqrlYNC4ZeNfGRmSihEy2v4hKZ15rqOr%2FrPoyfvlI5C6jQ04XtcKW%2F9imUgAVXeBaddZh1Tksi8dlKUKB2v09xmnnWarij8y4T5wKufJkKUgwLbZWQoGp2%2F3k7sswe6bI1Jvqo7aG4dhfZrxwGE94PDjiRUPqChSr7f7SfBdRk4OscKhB4UJDvgDNvSTaBT8HhpabCYtqa3Oulx%2Bz8E8ZMaCzCxrN8yR9iHi6Z6py9Du%2B3hFka2Ioqdsf5n29vuK37OuSNIOGiMwf4Ke1dyz4Ynu9JXh4lw3tBtTHkcdewFegBfojeyiviyWdSvrxt9%2BYlE73yZMkmhj4TYPfr9vufjc8OZZO%2BSHFHgCoOHKUssCTSE19XsYXpkd731rDFE%2Br5i3WmmtXBnIzAn8XSLxcpAoYGZX3HpMy4il2cYQuFzLbIbKNhAChGSLLf4%2B5PN2m1OhJlbmRXUo7cFGwTB3%2FApTPAWbvjBkQfol78bRFsNy76wIxeJU4BQh1mqOO%2FD0LE2CWSn6%2Fcr7%2Fsa2JAuwryJ7x7dvMD%2BTwWV6UZ2MztfPv4wnp1UKXcotR0OAlLigjVzBxMd1mpg1zfVj3rBu1GUfS3tTQ%2FSbxVOJ1PFman0fh18gACPMO%2ByzM4GOqUB8BNCyZPqkJYZJYBZRRRgVrkvRm5i2TYs94V343Q%2BTmotGgoljXkD5Vc%2FsBrmnC8LifFRKhElELwrcquWAhm2QNxTAw7PY0PBMRlemcLTDj6Insyeon4ZYQr8GHVogsHHevcw%2BHfVZDQoVwz3ZnM59X5oc6rUs1ma2hRDcwke4Tp%2B4VtJvA1rGGEKnac7RoCOiuxIQe28Bkq2kcyZaacB2RJKUO%2BD&X-Amz-Signature=28a03f6e2fcfb5924014c585055635fa91da9a81ed7f5af868df2806b8b4d338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEXRSVG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvN304NCsxH0GFDUj6aZb3bSFv%2BozLR%2FTcPP%2FX8yKXvAIgQ789NDptLRaYfIzG3n6WGHULJyS6QSR3%2FGtq7V1Y0VUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy0euinhP02jyMNrSrcA24TqVzZbPqrlYNC4ZeNfGRmSihEy2v4hKZ15rqOr%2FrPoyfvlI5C6jQ04XtcKW%2F9imUgAVXeBaddZh1Tksi8dlKUKB2v09xmnnWarij8y4T5wKufJkKUgwLbZWQoGp2%2F3k7sswe6bI1Jvqo7aG4dhfZrxwGE94PDjiRUPqChSr7f7SfBdRk4OscKhB4UJDvgDNvSTaBT8HhpabCYtqa3Oulx%2Bz8E8ZMaCzCxrN8yR9iHi6Z6py9Du%2B3hFka2Ioqdsf5n29vuK37OuSNIOGiMwf4Ke1dyz4Ynu9JXh4lw3tBtTHkcdewFegBfojeyiviyWdSvrxt9%2BYlE73yZMkmhj4TYPfr9vufjc8OZZO%2BSHFHgCoOHKUssCTSE19XsYXpkd731rDFE%2Br5i3WmmtXBnIzAn8XSLxcpAoYGZX3HpMy4il2cYQuFzLbIbKNhAChGSLLf4%2B5PN2m1OhJlbmRXUo7cFGwTB3%2FApTPAWbvjBkQfol78bRFsNy76wIxeJU4BQh1mqOO%2FD0LE2CWSn6%2Fcr7%2Fsa2JAuwryJ7x7dvMD%2BTwWV6UZ2MztfPv4wnp1UKXcotR0OAlLigjVzBxMd1mpg1zfVj3rBu1GUfS3tTQ%2FSbxVOJ1PFman0fh18gACPMO%2ByzM4GOqUB8BNCyZPqkJYZJYBZRRRgVrkvRm5i2TYs94V343Q%2BTmotGgoljXkD5Vc%2FsBrmnC8LifFRKhElELwrcquWAhm2QNxTAw7PY0PBMRlemcLTDj6Insyeon4ZYQr8GHVogsHHevcw%2BHfVZDQoVwz3ZnM59X5oc6rUs1ma2hRDcwke4Tp%2B4VtJvA1rGGEKnac7RoCOiuxIQe28Bkq2kcyZaacB2RJKUO%2BD&X-Amz-Signature=d77746e92c1a401e0a4760e49609568654d2908acc42ac2d3166d4402b94aa80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZOIZEAC%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmLR6roWciS49NWtcbpQ64IIgNV6%2FGY5rwzLjxyY%2FlhQIgSvLcYe8O%2BCH4QByJ%2FTh%2FGKiqwyRmbZGV%2FQ3B1gKqdcAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtzUI%2FVT31JYYJ16yrcA7C8rNjRYUC%2FoxK8Ja4AmuIHG%2Fv6cdXCXBUr16xmnfU5jR4Z8c8ocfmvFWiaqz2JEoHySoLB6OTJGEKa7AV7OkSZag%2BFkJH2KXxbbMXBGFxXAdcctCYOPPDm86R8ZcO0lQh%2B%2Byog3XwiW0hjCjE3Ydiag%2FKJ1Ngx9QWTZVsxtWyAwdW%2FCwpy%2BRoRHoSKEA0CE8AEeO6%2BO%2FdZe9NhmSnhww9mV%2B7Khk3VhEoyfslNK9ZMkes4haF8rJq33gAZXZEOP%2FouM%2FdKl%2F0ub6474AMMk9xFqW27k4hDqs2KLhfRhCa6j4VZXpRYsZ6UV4fgQ3bLP57fumPwIv06owPR0r31wsWidJyyVpgMOZWb7hBBttoiRjGLY78PDLQd7lckMlQA7puhGC7viRYra7C4basyiRQ8KMf35Z9%2BS1EJrQ7xPKsTNQK30wUNXZYJhIrvssgM0ujJP4sbiyn5i%2F4q9eKVoOHSsdYRazXuWO%2Bqgv5f5iKun9dFV9gJYJt8pMylyx5rQ4HFvj2yh3xC93rlqozEdwHOs8%2FJJWinNbO%2Fyp38M0DdoVApIPkXw9TICXKG4N8HWgr9RoWp3gSsoVeNueScJIYSofZo0OgJUcMogAyA4FV82%2FB13baXZNE0frTeMISwzM4GOqUBlNXEvy0QC4K%2B9kxxLBtM2ykLfUVjMuRYWKTwlpomFVdOo93N%2BJFtFN%2BrKVOtWckuapb%2Fruw2PDMWxHwQMmXHWlW50pqk9OK%2BESL5dDtVzMmZAzDN%2BZSV580c6lWHsMTy8wdSNj8qI%2B1uGjusviElbDp68HZ2uTFTKkXZsmJcpVHT2551C89vdW0VOV4ixAypojE2JuysHRY9US%2BQ6Z7a3XWWN2H0&X-Amz-Signature=fa5a51a4396bb04503927293eedc70442821a73888ddf2659accfcb2364a2c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZOIZEAC%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmLR6roWciS49NWtcbpQ64IIgNV6%2FGY5rwzLjxyY%2FlhQIgSvLcYe8O%2BCH4QByJ%2FTh%2FGKiqwyRmbZGV%2FQ3B1gKqdcAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtzUI%2FVT31JYYJ16yrcA7C8rNjRYUC%2FoxK8Ja4AmuIHG%2Fv6cdXCXBUr16xmnfU5jR4Z8c8ocfmvFWiaqz2JEoHySoLB6OTJGEKa7AV7OkSZag%2BFkJH2KXxbbMXBGFxXAdcctCYOPPDm86R8ZcO0lQh%2B%2Byog3XwiW0hjCjE3Ydiag%2FKJ1Ngx9QWTZVsxtWyAwdW%2FCwpy%2BRoRHoSKEA0CE8AEeO6%2BO%2FdZe9NhmSnhww9mV%2B7Khk3VhEoyfslNK9ZMkes4haF8rJq33gAZXZEOP%2FouM%2FdKl%2F0ub6474AMMk9xFqW27k4hDqs2KLhfRhCa6j4VZXpRYsZ6UV4fgQ3bLP57fumPwIv06owPR0r31wsWidJyyVpgMOZWb7hBBttoiRjGLY78PDLQd7lckMlQA7puhGC7viRYra7C4basyiRQ8KMf35Z9%2BS1EJrQ7xPKsTNQK30wUNXZYJhIrvssgM0ujJP4sbiyn5i%2F4q9eKVoOHSsdYRazXuWO%2Bqgv5f5iKun9dFV9gJYJt8pMylyx5rQ4HFvj2yh3xC93rlqozEdwHOs8%2FJJWinNbO%2Fyp38M0DdoVApIPkXw9TICXKG4N8HWgr9RoWp3gSsoVeNueScJIYSofZo0OgJUcMogAyA4FV82%2FB13baXZNE0frTeMISwzM4GOqUBlNXEvy0QC4K%2B9kxxLBtM2ykLfUVjMuRYWKTwlpomFVdOo93N%2BJFtFN%2BrKVOtWckuapb%2Fruw2PDMWxHwQMmXHWlW50pqk9OK%2BESL5dDtVzMmZAzDN%2BZSV580c6lWHsMTy8wdSNj8qI%2B1uGjusviElbDp68HZ2uTFTKkXZsmJcpVHT2551C89vdW0VOV4ixAypojE2JuysHRY9US%2BQ6Z7a3XWWN2H0&X-Amz-Signature=fa0d77a9ad86a633220558d75831eb63d8a0b12726417794a3e3f02bc82237e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZOIZEAC%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmLR6roWciS49NWtcbpQ64IIgNV6%2FGY5rwzLjxyY%2FlhQIgSvLcYe8O%2BCH4QByJ%2FTh%2FGKiqwyRmbZGV%2FQ3B1gKqdcAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtzUI%2FVT31JYYJ16yrcA7C8rNjRYUC%2FoxK8Ja4AmuIHG%2Fv6cdXCXBUr16xmnfU5jR4Z8c8ocfmvFWiaqz2JEoHySoLB6OTJGEKa7AV7OkSZag%2BFkJH2KXxbbMXBGFxXAdcctCYOPPDm86R8ZcO0lQh%2B%2Byog3XwiW0hjCjE3Ydiag%2FKJ1Ngx9QWTZVsxtWyAwdW%2FCwpy%2BRoRHoSKEA0CE8AEeO6%2BO%2FdZe9NhmSnhww9mV%2B7Khk3VhEoyfslNK9ZMkes4haF8rJq33gAZXZEOP%2FouM%2FdKl%2F0ub6474AMMk9xFqW27k4hDqs2KLhfRhCa6j4VZXpRYsZ6UV4fgQ3bLP57fumPwIv06owPR0r31wsWidJyyVpgMOZWb7hBBttoiRjGLY78PDLQd7lckMlQA7puhGC7viRYra7C4basyiRQ8KMf35Z9%2BS1EJrQ7xPKsTNQK30wUNXZYJhIrvssgM0ujJP4sbiyn5i%2F4q9eKVoOHSsdYRazXuWO%2Bqgv5f5iKun9dFV9gJYJt8pMylyx5rQ4HFvj2yh3xC93rlqozEdwHOs8%2FJJWinNbO%2Fyp38M0DdoVApIPkXw9TICXKG4N8HWgr9RoWp3gSsoVeNueScJIYSofZo0OgJUcMogAyA4FV82%2FB13baXZNE0frTeMISwzM4GOqUBlNXEvy0QC4K%2B9kxxLBtM2ykLfUVjMuRYWKTwlpomFVdOo93N%2BJFtFN%2BrKVOtWckuapb%2Fruw2PDMWxHwQMmXHWlW50pqk9OK%2BESL5dDtVzMmZAzDN%2BZSV580c6lWHsMTy8wdSNj8qI%2B1uGjusviElbDp68HZ2uTFTKkXZsmJcpVHT2551C89vdW0VOV4ixAypojE2JuysHRY9US%2BQ6Z7a3XWWN2H0&X-Amz-Signature=22665848135d1dbee42af5056e1644118c699423d984938a9ff60f8187b160d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZOIZEAC%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmLR6roWciS49NWtcbpQ64IIgNV6%2FGY5rwzLjxyY%2FlhQIgSvLcYe8O%2BCH4QByJ%2FTh%2FGKiqwyRmbZGV%2FQ3B1gKqdcAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtzUI%2FVT31JYYJ16yrcA7C8rNjRYUC%2FoxK8Ja4AmuIHG%2Fv6cdXCXBUr16xmnfU5jR4Z8c8ocfmvFWiaqz2JEoHySoLB6OTJGEKa7AV7OkSZag%2BFkJH2KXxbbMXBGFxXAdcctCYOPPDm86R8ZcO0lQh%2B%2Byog3XwiW0hjCjE3Ydiag%2FKJ1Ngx9QWTZVsxtWyAwdW%2FCwpy%2BRoRHoSKEA0CE8AEeO6%2BO%2FdZe9NhmSnhww9mV%2B7Khk3VhEoyfslNK9ZMkes4haF8rJq33gAZXZEOP%2FouM%2FdKl%2F0ub6474AMMk9xFqW27k4hDqs2KLhfRhCa6j4VZXpRYsZ6UV4fgQ3bLP57fumPwIv06owPR0r31wsWidJyyVpgMOZWb7hBBttoiRjGLY78PDLQd7lckMlQA7puhGC7viRYra7C4basyiRQ8KMf35Z9%2BS1EJrQ7xPKsTNQK30wUNXZYJhIrvssgM0ujJP4sbiyn5i%2F4q9eKVoOHSsdYRazXuWO%2Bqgv5f5iKun9dFV9gJYJt8pMylyx5rQ4HFvj2yh3xC93rlqozEdwHOs8%2FJJWinNbO%2Fyp38M0DdoVApIPkXw9TICXKG4N8HWgr9RoWp3gSsoVeNueScJIYSofZo0OgJUcMogAyA4FV82%2FB13baXZNE0frTeMISwzM4GOqUBlNXEvy0QC4K%2B9kxxLBtM2ykLfUVjMuRYWKTwlpomFVdOo93N%2BJFtFN%2BrKVOtWckuapb%2Fruw2PDMWxHwQMmXHWlW50pqk9OK%2BESL5dDtVzMmZAzDN%2BZSV580c6lWHsMTy8wdSNj8qI%2B1uGjusviElbDp68HZ2uTFTKkXZsmJcpVHT2551C89vdW0VOV4ixAypojE2JuysHRY9US%2BQ6Z7a3XWWN2H0&X-Amz-Signature=0a3c4bf1d596708ae9b336a7575d205ede9533202f33ef47839450ea7a9484e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJR5AM3Y%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDARS7FTAMFPmmc26yjO2fXcJRj4oCTKtXAzmhCM%2F3PlwIgV8DlBtWEHPqmQxn73g7Kx50EzA5M86ZDtYhzHg0MNm4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1fSJGEL7BjGWCnxyrcA5MOhLw%2BQ3cdWOdlUd5U%2BU7QOQTUtf0bjaXEHwK%2BI8MSGizZvt2dj5821JxzGA%2BaZwWydH%2FgLLxFrCXRB%2BTcf71I7dEw%2B6Jj9XA4gyLXiJAe3oNc48NRvAU2StNC4RRZsb54C8221vPiyLQ4GUw9eC8%2FltsI31ru%2BUbOYIIzg9mDGqsmFWs0bC0Ch%2BK5gzQc2asFCL4i78P%2FJ36PjSxfin363nGlFcAI2%2FvQz2ADyWB7Y6b1WVhV77Hv7e3ts%2FI6dFVgYL40Z%2Fhbq%2B9Dt0Elx5OCPclXJ10m%2FkZ27IxFndfCmZ%2BNTBioGQI2fM0jw9ZPf5jdasPTOlZGlup%2BSc4NrhC1ZE4315KC14PsHbBZrDCR88W69bmDe6sS%2BrrQdsPGLKEVWIB3jSNHB2Lvo675ZQE0MK9MXtgJJLet53wa3Ogw24rP9ZYQJybJh68FQnVcUH9g%2F3rira4EwzwYK1DMlO6%2Bz4sQEk6LHuG8rzthTRhCg%2FoPpmM%2FrilUGJP%2BcTPLm6aN42PTxuRFMAPgwY9BAWSRwrmtXXGFTsorPFImd1aMaho6Zl%2Bl%2B12G0KXOUp5qYJZX2K73K6AYJbukv98m8KpbSeo1RNmy2PH4v6wmuoHYcorFtoS60BPxyWmRMNWwzM4GOqUBtRj%2Bh%2BZFDsM6TLrpPnyPWucsjCb8UqAONEZZsl0rhZ2yV2Pn9k%2BRSezHAq%2FbHtmDo704AZk%2BTpwWZFEOtnLjJeSLro8kLOpUr%2Buo9Bivbtrj1EC960Qw%2BY7ZolsEa1wtH4fyI%2B8ih7gHH2zx9cAyNWYrK1Qx7yNjfC7qhBf%2F5Xh6PX65jv4v7nHtfL%2B7Ko6gVVZopZ1FU5wMtduxm3Vv8qpZ%2Flpl&X-Amz-Signature=77e01bd66456ac21fd9badc844fff31d0992844e184aad9ce846179ba85ab9f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZOIZEAC%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmLR6roWciS49NWtcbpQ64IIgNV6%2FGY5rwzLjxyY%2FlhQIgSvLcYe8O%2BCH4QByJ%2FTh%2FGKiqwyRmbZGV%2FQ3B1gKqdcAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtzUI%2FVT31JYYJ16yrcA7C8rNjRYUC%2FoxK8Ja4AmuIHG%2Fv6cdXCXBUr16xmnfU5jR4Z8c8ocfmvFWiaqz2JEoHySoLB6OTJGEKa7AV7OkSZag%2BFkJH2KXxbbMXBGFxXAdcctCYOPPDm86R8ZcO0lQh%2B%2Byog3XwiW0hjCjE3Ydiag%2FKJ1Ngx9QWTZVsxtWyAwdW%2FCwpy%2BRoRHoSKEA0CE8AEeO6%2BO%2FdZe9NhmSnhww9mV%2B7Khk3VhEoyfslNK9ZMkes4haF8rJq33gAZXZEOP%2FouM%2FdKl%2F0ub6474AMMk9xFqW27k4hDqs2KLhfRhCa6j4VZXpRYsZ6UV4fgQ3bLP57fumPwIv06owPR0r31wsWidJyyVpgMOZWb7hBBttoiRjGLY78PDLQd7lckMlQA7puhGC7viRYra7C4basyiRQ8KMf35Z9%2BS1EJrQ7xPKsTNQK30wUNXZYJhIrvssgM0ujJP4sbiyn5i%2F4q9eKVoOHSsdYRazXuWO%2Bqgv5f5iKun9dFV9gJYJt8pMylyx5rQ4HFvj2yh3xC93rlqozEdwHOs8%2FJJWinNbO%2Fyp38M0DdoVApIPkXw9TICXKG4N8HWgr9RoWp3gSsoVeNueScJIYSofZo0OgJUcMogAyA4FV82%2FB13baXZNE0frTeMISwzM4GOqUBlNXEvy0QC4K%2B9kxxLBtM2ykLfUVjMuRYWKTwlpomFVdOo93N%2BJFtFN%2BrKVOtWckuapb%2Fruw2PDMWxHwQMmXHWlW50pqk9OK%2BESL5dDtVzMmZAzDN%2BZSV580c6lWHsMTy8wdSNj8qI%2B1uGjusviElbDp68HZ2uTFTKkXZsmJcpVHT2551C89vdW0VOV4ixAypojE2JuysHRY9US%2BQ6Z7a3XWWN2H0&X-Amz-Signature=b29bd78d2845b26d7fad0c5ddf534ea0e519fe39798ccbf977561fc79fc63167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZOIZEAC%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmLR6roWciS49NWtcbpQ64IIgNV6%2FGY5rwzLjxyY%2FlhQIgSvLcYe8O%2BCH4QByJ%2FTh%2FGKiqwyRmbZGV%2FQ3B1gKqdcAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtzUI%2FVT31JYYJ16yrcA7C8rNjRYUC%2FoxK8Ja4AmuIHG%2Fv6cdXCXBUr16xmnfU5jR4Z8c8ocfmvFWiaqz2JEoHySoLB6OTJGEKa7AV7OkSZag%2BFkJH2KXxbbMXBGFxXAdcctCYOPPDm86R8ZcO0lQh%2B%2Byog3XwiW0hjCjE3Ydiag%2FKJ1Ngx9QWTZVsxtWyAwdW%2FCwpy%2BRoRHoSKEA0CE8AEeO6%2BO%2FdZe9NhmSnhww9mV%2B7Khk3VhEoyfslNK9ZMkes4haF8rJq33gAZXZEOP%2FouM%2FdKl%2F0ub6474AMMk9xFqW27k4hDqs2KLhfRhCa6j4VZXpRYsZ6UV4fgQ3bLP57fumPwIv06owPR0r31wsWidJyyVpgMOZWb7hBBttoiRjGLY78PDLQd7lckMlQA7puhGC7viRYra7C4basyiRQ8KMf35Z9%2BS1EJrQ7xPKsTNQK30wUNXZYJhIrvssgM0ujJP4sbiyn5i%2F4q9eKVoOHSsdYRazXuWO%2Bqgv5f5iKun9dFV9gJYJt8pMylyx5rQ4HFvj2yh3xC93rlqozEdwHOs8%2FJJWinNbO%2Fyp38M0DdoVApIPkXw9TICXKG4N8HWgr9RoWp3gSsoVeNueScJIYSofZo0OgJUcMogAyA4FV82%2FB13baXZNE0frTeMISwzM4GOqUBlNXEvy0QC4K%2B9kxxLBtM2ykLfUVjMuRYWKTwlpomFVdOo93N%2BJFtFN%2BrKVOtWckuapb%2Fruw2PDMWxHwQMmXHWlW50pqk9OK%2BESL5dDtVzMmZAzDN%2BZSV580c6lWHsMTy8wdSNj8qI%2B1uGjusviElbDp68HZ2uTFTKkXZsmJcpVHT2551C89vdW0VOV4ixAypojE2JuysHRY9US%2BQ6Z7a3XWWN2H0&X-Amz-Signature=bc544f74d225d58eb5b180daaf0d2ae15d8169a5c2ac2f62685ec78396e4869f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZOIZEAC%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmLR6roWciS49NWtcbpQ64IIgNV6%2FGY5rwzLjxyY%2FlhQIgSvLcYe8O%2BCH4QByJ%2FTh%2FGKiqwyRmbZGV%2FQ3B1gKqdcAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtzUI%2FVT31JYYJ16yrcA7C8rNjRYUC%2FoxK8Ja4AmuIHG%2Fv6cdXCXBUr16xmnfU5jR4Z8c8ocfmvFWiaqz2JEoHySoLB6OTJGEKa7AV7OkSZag%2BFkJH2KXxbbMXBGFxXAdcctCYOPPDm86R8ZcO0lQh%2B%2Byog3XwiW0hjCjE3Ydiag%2FKJ1Ngx9QWTZVsxtWyAwdW%2FCwpy%2BRoRHoSKEA0CE8AEeO6%2BO%2FdZe9NhmSnhww9mV%2B7Khk3VhEoyfslNK9ZMkes4haF8rJq33gAZXZEOP%2FouM%2FdKl%2F0ub6474AMMk9xFqW27k4hDqs2KLhfRhCa6j4VZXpRYsZ6UV4fgQ3bLP57fumPwIv06owPR0r31wsWidJyyVpgMOZWb7hBBttoiRjGLY78PDLQd7lckMlQA7puhGC7viRYra7C4basyiRQ8KMf35Z9%2BS1EJrQ7xPKsTNQK30wUNXZYJhIrvssgM0ujJP4sbiyn5i%2F4q9eKVoOHSsdYRazXuWO%2Bqgv5f5iKun9dFV9gJYJt8pMylyx5rQ4HFvj2yh3xC93rlqozEdwHOs8%2FJJWinNbO%2Fyp38M0DdoVApIPkXw9TICXKG4N8HWgr9RoWp3gSsoVeNueScJIYSofZo0OgJUcMogAyA4FV82%2FB13baXZNE0frTeMISwzM4GOqUBlNXEvy0QC4K%2B9kxxLBtM2ykLfUVjMuRYWKTwlpomFVdOo93N%2BJFtFN%2BrKVOtWckuapb%2Fruw2PDMWxHwQMmXHWlW50pqk9OK%2BESL5dDtVzMmZAzDN%2BZSV580c6lWHsMTy8wdSNj8qI%2B1uGjusviElbDp68HZ2uTFTKkXZsmJcpVHT2551C89vdW0VOV4ixAypojE2JuysHRY9US%2BQ6Z7a3XWWN2H0&X-Amz-Signature=22665848135d1dbee42af5056e1644118c699423d984938a9ff60f8187b160d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZOIZEAC%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmLR6roWciS49NWtcbpQ64IIgNV6%2FGY5rwzLjxyY%2FlhQIgSvLcYe8O%2BCH4QByJ%2FTh%2FGKiqwyRmbZGV%2FQ3B1gKqdcAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtzUI%2FVT31JYYJ16yrcA7C8rNjRYUC%2FoxK8Ja4AmuIHG%2Fv6cdXCXBUr16xmnfU5jR4Z8c8ocfmvFWiaqz2JEoHySoLB6OTJGEKa7AV7OkSZag%2BFkJH2KXxbbMXBGFxXAdcctCYOPPDm86R8ZcO0lQh%2B%2Byog3XwiW0hjCjE3Ydiag%2FKJ1Ngx9QWTZVsxtWyAwdW%2FCwpy%2BRoRHoSKEA0CE8AEeO6%2BO%2FdZe9NhmSnhww9mV%2B7Khk3VhEoyfslNK9ZMkes4haF8rJq33gAZXZEOP%2FouM%2FdKl%2F0ub6474AMMk9xFqW27k4hDqs2KLhfRhCa6j4VZXpRYsZ6UV4fgQ3bLP57fumPwIv06owPR0r31wsWidJyyVpgMOZWb7hBBttoiRjGLY78PDLQd7lckMlQA7puhGC7viRYra7C4basyiRQ8KMf35Z9%2BS1EJrQ7xPKsTNQK30wUNXZYJhIrvssgM0ujJP4sbiyn5i%2F4q9eKVoOHSsdYRazXuWO%2Bqgv5f5iKun9dFV9gJYJt8pMylyx5rQ4HFvj2yh3xC93rlqozEdwHOs8%2FJJWinNbO%2Fyp38M0DdoVApIPkXw9TICXKG4N8HWgr9RoWp3gSsoVeNueScJIYSofZo0OgJUcMogAyA4FV82%2FB13baXZNE0frTeMISwzM4GOqUBlNXEvy0QC4K%2B9kxxLBtM2ykLfUVjMuRYWKTwlpomFVdOo93N%2BJFtFN%2BrKVOtWckuapb%2Fruw2PDMWxHwQMmXHWlW50pqk9OK%2BESL5dDtVzMmZAzDN%2BZSV580c6lWHsMTy8wdSNj8qI%2B1uGjusviElbDp68HZ2uTFTKkXZsmJcpVHT2551C89vdW0VOV4ixAypojE2JuysHRY9US%2BQ6Z7a3XWWN2H0&X-Amz-Signature=2631314d8f6faefc046553b29949352a5192cb1c48187abb916e8c962e7bea3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZOIZEAC%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmLR6roWciS49NWtcbpQ64IIgNV6%2FGY5rwzLjxyY%2FlhQIgSvLcYe8O%2BCH4QByJ%2FTh%2FGKiqwyRmbZGV%2FQ3B1gKqdcAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtzUI%2FVT31JYYJ16yrcA7C8rNjRYUC%2FoxK8Ja4AmuIHG%2Fv6cdXCXBUr16xmnfU5jR4Z8c8ocfmvFWiaqz2JEoHySoLB6OTJGEKa7AV7OkSZag%2BFkJH2KXxbbMXBGFxXAdcctCYOPPDm86R8ZcO0lQh%2B%2Byog3XwiW0hjCjE3Ydiag%2FKJ1Ngx9QWTZVsxtWyAwdW%2FCwpy%2BRoRHoSKEA0CE8AEeO6%2BO%2FdZe9NhmSnhww9mV%2B7Khk3VhEoyfslNK9ZMkes4haF8rJq33gAZXZEOP%2FouM%2FdKl%2F0ub6474AMMk9xFqW27k4hDqs2KLhfRhCa6j4VZXpRYsZ6UV4fgQ3bLP57fumPwIv06owPR0r31wsWidJyyVpgMOZWb7hBBttoiRjGLY78PDLQd7lckMlQA7puhGC7viRYra7C4basyiRQ8KMf35Z9%2BS1EJrQ7xPKsTNQK30wUNXZYJhIrvssgM0ujJP4sbiyn5i%2F4q9eKVoOHSsdYRazXuWO%2Bqgv5f5iKun9dFV9gJYJt8pMylyx5rQ4HFvj2yh3xC93rlqozEdwHOs8%2FJJWinNbO%2Fyp38M0DdoVApIPkXw9TICXKG4N8HWgr9RoWp3gSsoVeNueScJIYSofZo0OgJUcMogAyA4FV82%2FB13baXZNE0frTeMISwzM4GOqUBlNXEvy0QC4K%2B9kxxLBtM2ykLfUVjMuRYWKTwlpomFVdOo93N%2BJFtFN%2BrKVOtWckuapb%2Fruw2PDMWxHwQMmXHWlW50pqk9OK%2BESL5dDtVzMmZAzDN%2BZSV580c6lWHsMTy8wdSNj8qI%2B1uGjusviElbDp68HZ2uTFTKkXZsmJcpVHT2551C89vdW0VOV4ixAypojE2JuysHRY9US%2BQ6Z7a3XWWN2H0&X-Amz-Signature=07d98e1513880e8a129590220cd2a9db63dd7cd2606764a0041c1caf8c22f4df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZOIZEAC%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmLR6roWciS49NWtcbpQ64IIgNV6%2FGY5rwzLjxyY%2FlhQIgSvLcYe8O%2BCH4QByJ%2FTh%2FGKiqwyRmbZGV%2FQ3B1gKqdcAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtzUI%2FVT31JYYJ16yrcA7C8rNjRYUC%2FoxK8Ja4AmuIHG%2Fv6cdXCXBUr16xmnfU5jR4Z8c8ocfmvFWiaqz2JEoHySoLB6OTJGEKa7AV7OkSZag%2BFkJH2KXxbbMXBGFxXAdcctCYOPPDm86R8ZcO0lQh%2B%2Byog3XwiW0hjCjE3Ydiag%2FKJ1Ngx9QWTZVsxtWyAwdW%2FCwpy%2BRoRHoSKEA0CE8AEeO6%2BO%2FdZe9NhmSnhww9mV%2B7Khk3VhEoyfslNK9ZMkes4haF8rJq33gAZXZEOP%2FouM%2FdKl%2F0ub6474AMMk9xFqW27k4hDqs2KLhfRhCa6j4VZXpRYsZ6UV4fgQ3bLP57fumPwIv06owPR0r31wsWidJyyVpgMOZWb7hBBttoiRjGLY78PDLQd7lckMlQA7puhGC7viRYra7C4basyiRQ8KMf35Z9%2BS1EJrQ7xPKsTNQK30wUNXZYJhIrvssgM0ujJP4sbiyn5i%2F4q9eKVoOHSsdYRazXuWO%2Bqgv5f5iKun9dFV9gJYJt8pMylyx5rQ4HFvj2yh3xC93rlqozEdwHOs8%2FJJWinNbO%2Fyp38M0DdoVApIPkXw9TICXKG4N8HWgr9RoWp3gSsoVeNueScJIYSofZo0OgJUcMogAyA4FV82%2FB13baXZNE0frTeMISwzM4GOqUBlNXEvy0QC4K%2B9kxxLBtM2ykLfUVjMuRYWKTwlpomFVdOo93N%2BJFtFN%2BrKVOtWckuapb%2Fruw2PDMWxHwQMmXHWlW50pqk9OK%2BESL5dDtVzMmZAzDN%2BZSV580c6lWHsMTy8wdSNj8qI%2B1uGjusviElbDp68HZ2uTFTKkXZsmJcpVHT2551C89vdW0VOV4ixAypojE2JuysHRY9US%2BQ6Z7a3XWWN2H0&X-Amz-Signature=02a1f2d19a8fca95abc56d359c625561871a8fea5a08cf61e91a56d4611f111a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


