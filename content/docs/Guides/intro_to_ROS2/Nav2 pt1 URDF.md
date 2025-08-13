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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TGSLJ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD92rXJv%2B5R5VDVjZtd%2Fhvc7hxJMeqDscZCJojE5I2TPgIgJhpazajGHei8GnD2NUqEt5gf%2FAlB6qUsjGyuPMvLCVUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGlkALjZOTxBvYXxTCrcAx9Df5HFxyknc6DmdX0ai2WxhKqoaEH1lLaOupegWmJLtROcjoza2PXmxwXwI3QmHyKzpX8tV1IYey8LDGmyiFJ0IbDgjmLW26Gt1KsOcsJWsb9bfl2AriunutvWto%2Fam0xOOPmfcQEWgHcWE98Q32FFcqrC7bWsIUigH0S3HyUqFUeYUvlaMUR5Vy6KNIAm5Q%2B7ewhrVCsqi8kW%2BzpfCjOSR18f8b8MoWiu0mLXlYKB%2BHQySL6x8BMNisZ1wH8CoRDLH1NJSmDlK9sTI0B3%2ByC%2FN0vwd1PI4j%2BjS8TjBR87KE678IZxf%2FhlG6GMTHDdnhLkJxpLbG%2Bu8aMVeXYMwrWJlI7q%2Bpme8xHEQ%2FmdqeyKp%2FZV%2FMooi%2FFxhukTJwNY5ErBo45yv2gXt9bnXSWFY%2F3CGA%2Brzvw%2BDVLdnsdmHvVKPei7wI%2B22arHBGuIx6GozwJMd3auGHiZaU8iOZOZ8iSOpIo6twZmgjqbBmCUymBhdSbAdaU3L1iId%2FIZ4wIiPwv%2B6lJhGnkBlCIWWupnvZefgeOtjRCJn4GWa2gmTWm71m93sbOF%2FzNmBCacCpPA61i9Y3T6wwfVODmJYWq1kQTU3PjzabjfVFyFc0lcPYYAKMzVCiIiMjNBupiuMPHG8cQGOqUBNAFBWCxXNgYc1YpNctCLyNXALM9uVW5W40nrzuLAfO%2Bo4oohsZluVXIIWg7spP42eAa1qDwH3Q4R8lAGNQFwgb2awX0d2pzhCxZhMVqneOyTBwCSsDmjPKg%2Fr3pfQifhCk7hzj4aOTl9FsmQ8EPCIQqM%2F9C7NA48ghMDkwkKTmS1wZ4US%2FP%2B5S9gao6TVV2B19zh8nrY6gPFPFgq7%2BdIeUr0CsCo&X-Amz-Signature=ab6a2cc1e66975d571d94b9a3d1fb13e20f4034283209c8078145a8b541191fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TGSLJ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD92rXJv%2B5R5VDVjZtd%2Fhvc7hxJMeqDscZCJojE5I2TPgIgJhpazajGHei8GnD2NUqEt5gf%2FAlB6qUsjGyuPMvLCVUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGlkALjZOTxBvYXxTCrcAx9Df5HFxyknc6DmdX0ai2WxhKqoaEH1lLaOupegWmJLtROcjoza2PXmxwXwI3QmHyKzpX8tV1IYey8LDGmyiFJ0IbDgjmLW26Gt1KsOcsJWsb9bfl2AriunutvWto%2Fam0xOOPmfcQEWgHcWE98Q32FFcqrC7bWsIUigH0S3HyUqFUeYUvlaMUR5Vy6KNIAm5Q%2B7ewhrVCsqi8kW%2BzpfCjOSR18f8b8MoWiu0mLXlYKB%2BHQySL6x8BMNisZ1wH8CoRDLH1NJSmDlK9sTI0B3%2ByC%2FN0vwd1PI4j%2BjS8TjBR87KE678IZxf%2FhlG6GMTHDdnhLkJxpLbG%2Bu8aMVeXYMwrWJlI7q%2Bpme8xHEQ%2FmdqeyKp%2FZV%2FMooi%2FFxhukTJwNY5ErBo45yv2gXt9bnXSWFY%2F3CGA%2Brzvw%2BDVLdnsdmHvVKPei7wI%2B22arHBGuIx6GozwJMd3auGHiZaU8iOZOZ8iSOpIo6twZmgjqbBmCUymBhdSbAdaU3L1iId%2FIZ4wIiPwv%2B6lJhGnkBlCIWWupnvZefgeOtjRCJn4GWa2gmTWm71m93sbOF%2FzNmBCacCpPA61i9Y3T6wwfVODmJYWq1kQTU3PjzabjfVFyFc0lcPYYAKMzVCiIiMjNBupiuMPHG8cQGOqUBNAFBWCxXNgYc1YpNctCLyNXALM9uVW5W40nrzuLAfO%2Bo4oohsZluVXIIWg7spP42eAa1qDwH3Q4R8lAGNQFwgb2awX0d2pzhCxZhMVqneOyTBwCSsDmjPKg%2Fr3pfQifhCk7hzj4aOTl9FsmQ8EPCIQqM%2F9C7NA48ghMDkwkKTmS1wZ4US%2FP%2B5S9gao6TVV2B19zh8nrY6gPFPFgq7%2BdIeUr0CsCo&X-Amz-Signature=b512374c186a4cb0743f04fd56b035a3e817cd04a8b2b76a1d8f85298500ef4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TGSLJ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD92rXJv%2B5R5VDVjZtd%2Fhvc7hxJMeqDscZCJojE5I2TPgIgJhpazajGHei8GnD2NUqEt5gf%2FAlB6qUsjGyuPMvLCVUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGlkALjZOTxBvYXxTCrcAx9Df5HFxyknc6DmdX0ai2WxhKqoaEH1lLaOupegWmJLtROcjoza2PXmxwXwI3QmHyKzpX8tV1IYey8LDGmyiFJ0IbDgjmLW26Gt1KsOcsJWsb9bfl2AriunutvWto%2Fam0xOOPmfcQEWgHcWE98Q32FFcqrC7bWsIUigH0S3HyUqFUeYUvlaMUR5Vy6KNIAm5Q%2B7ewhrVCsqi8kW%2BzpfCjOSR18f8b8MoWiu0mLXlYKB%2BHQySL6x8BMNisZ1wH8CoRDLH1NJSmDlK9sTI0B3%2ByC%2FN0vwd1PI4j%2BjS8TjBR87KE678IZxf%2FhlG6GMTHDdnhLkJxpLbG%2Bu8aMVeXYMwrWJlI7q%2Bpme8xHEQ%2FmdqeyKp%2FZV%2FMooi%2FFxhukTJwNY5ErBo45yv2gXt9bnXSWFY%2F3CGA%2Brzvw%2BDVLdnsdmHvVKPei7wI%2B22arHBGuIx6GozwJMd3auGHiZaU8iOZOZ8iSOpIo6twZmgjqbBmCUymBhdSbAdaU3L1iId%2FIZ4wIiPwv%2B6lJhGnkBlCIWWupnvZefgeOtjRCJn4GWa2gmTWm71m93sbOF%2FzNmBCacCpPA61i9Y3T6wwfVODmJYWq1kQTU3PjzabjfVFyFc0lcPYYAKMzVCiIiMjNBupiuMPHG8cQGOqUBNAFBWCxXNgYc1YpNctCLyNXALM9uVW5W40nrzuLAfO%2Bo4oohsZluVXIIWg7spP42eAa1qDwH3Q4R8lAGNQFwgb2awX0d2pzhCxZhMVqneOyTBwCSsDmjPKg%2Fr3pfQifhCk7hzj4aOTl9FsmQ8EPCIQqM%2F9C7NA48ghMDkwkKTmS1wZ4US%2FP%2B5S9gao6TVV2B19zh8nrY6gPFPFgq7%2BdIeUr0CsCo&X-Amz-Signature=91fc9a3c67ad000bce13e8844cb713a9ba6539f3f85ecddb24d7915edcbb7938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TGSLJ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD92rXJv%2B5R5VDVjZtd%2Fhvc7hxJMeqDscZCJojE5I2TPgIgJhpazajGHei8GnD2NUqEt5gf%2FAlB6qUsjGyuPMvLCVUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGlkALjZOTxBvYXxTCrcAx9Df5HFxyknc6DmdX0ai2WxhKqoaEH1lLaOupegWmJLtROcjoza2PXmxwXwI3QmHyKzpX8tV1IYey8LDGmyiFJ0IbDgjmLW26Gt1KsOcsJWsb9bfl2AriunutvWto%2Fam0xOOPmfcQEWgHcWE98Q32FFcqrC7bWsIUigH0S3HyUqFUeYUvlaMUR5Vy6KNIAm5Q%2B7ewhrVCsqi8kW%2BzpfCjOSR18f8b8MoWiu0mLXlYKB%2BHQySL6x8BMNisZ1wH8CoRDLH1NJSmDlK9sTI0B3%2ByC%2FN0vwd1PI4j%2BjS8TjBR87KE678IZxf%2FhlG6GMTHDdnhLkJxpLbG%2Bu8aMVeXYMwrWJlI7q%2Bpme8xHEQ%2FmdqeyKp%2FZV%2FMooi%2FFxhukTJwNY5ErBo45yv2gXt9bnXSWFY%2F3CGA%2Brzvw%2BDVLdnsdmHvVKPei7wI%2B22arHBGuIx6GozwJMd3auGHiZaU8iOZOZ8iSOpIo6twZmgjqbBmCUymBhdSbAdaU3L1iId%2FIZ4wIiPwv%2B6lJhGnkBlCIWWupnvZefgeOtjRCJn4GWa2gmTWm71m93sbOF%2FzNmBCacCpPA61i9Y3T6wwfVODmJYWq1kQTU3PjzabjfVFyFc0lcPYYAKMzVCiIiMjNBupiuMPHG8cQGOqUBNAFBWCxXNgYc1YpNctCLyNXALM9uVW5W40nrzuLAfO%2Bo4oohsZluVXIIWg7spP42eAa1qDwH3Q4R8lAGNQFwgb2awX0d2pzhCxZhMVqneOyTBwCSsDmjPKg%2Fr3pfQifhCk7hzj4aOTl9FsmQ8EPCIQqM%2F9C7NA48ghMDkwkKTmS1wZ4US%2FP%2B5S9gao6TVV2B19zh8nrY6gPFPFgq7%2BdIeUr0CsCo&X-Amz-Signature=cece130bb9a591d2a4d895a454dd20e59d7ace6b662685f90fc5475e7b819c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TGSLJ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD92rXJv%2B5R5VDVjZtd%2Fhvc7hxJMeqDscZCJojE5I2TPgIgJhpazajGHei8GnD2NUqEt5gf%2FAlB6qUsjGyuPMvLCVUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGlkALjZOTxBvYXxTCrcAx9Df5HFxyknc6DmdX0ai2WxhKqoaEH1lLaOupegWmJLtROcjoza2PXmxwXwI3QmHyKzpX8tV1IYey8LDGmyiFJ0IbDgjmLW26Gt1KsOcsJWsb9bfl2AriunutvWto%2Fam0xOOPmfcQEWgHcWE98Q32FFcqrC7bWsIUigH0S3HyUqFUeYUvlaMUR5Vy6KNIAm5Q%2B7ewhrVCsqi8kW%2BzpfCjOSR18f8b8MoWiu0mLXlYKB%2BHQySL6x8BMNisZ1wH8CoRDLH1NJSmDlK9sTI0B3%2ByC%2FN0vwd1PI4j%2BjS8TjBR87KE678IZxf%2FhlG6GMTHDdnhLkJxpLbG%2Bu8aMVeXYMwrWJlI7q%2Bpme8xHEQ%2FmdqeyKp%2FZV%2FMooi%2FFxhukTJwNY5ErBo45yv2gXt9bnXSWFY%2F3CGA%2Brzvw%2BDVLdnsdmHvVKPei7wI%2B22arHBGuIx6GozwJMd3auGHiZaU8iOZOZ8iSOpIo6twZmgjqbBmCUymBhdSbAdaU3L1iId%2FIZ4wIiPwv%2B6lJhGnkBlCIWWupnvZefgeOtjRCJn4GWa2gmTWm71m93sbOF%2FzNmBCacCpPA61i9Y3T6wwfVODmJYWq1kQTU3PjzabjfVFyFc0lcPYYAKMzVCiIiMjNBupiuMPHG8cQGOqUBNAFBWCxXNgYc1YpNctCLyNXALM9uVW5W40nrzuLAfO%2Bo4oohsZluVXIIWg7spP42eAa1qDwH3Q4R8lAGNQFwgb2awX0d2pzhCxZhMVqneOyTBwCSsDmjPKg%2Fr3pfQifhCk7hzj4aOTl9FsmQ8EPCIQqM%2F9C7NA48ghMDkwkKTmS1wZ4US%2FP%2B5S9gao6TVV2B19zh8nrY6gPFPFgq7%2BdIeUr0CsCo&X-Amz-Signature=2f3c1a14d23c480ce57a5e7a9a6a7ffb961683c98bca4d445d8a0e76478f80c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TGSLJ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD92rXJv%2B5R5VDVjZtd%2Fhvc7hxJMeqDscZCJojE5I2TPgIgJhpazajGHei8GnD2NUqEt5gf%2FAlB6qUsjGyuPMvLCVUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGlkALjZOTxBvYXxTCrcAx9Df5HFxyknc6DmdX0ai2WxhKqoaEH1lLaOupegWmJLtROcjoza2PXmxwXwI3QmHyKzpX8tV1IYey8LDGmyiFJ0IbDgjmLW26Gt1KsOcsJWsb9bfl2AriunutvWto%2Fam0xOOPmfcQEWgHcWE98Q32FFcqrC7bWsIUigH0S3HyUqFUeYUvlaMUR5Vy6KNIAm5Q%2B7ewhrVCsqi8kW%2BzpfCjOSR18f8b8MoWiu0mLXlYKB%2BHQySL6x8BMNisZ1wH8CoRDLH1NJSmDlK9sTI0B3%2ByC%2FN0vwd1PI4j%2BjS8TjBR87KE678IZxf%2FhlG6GMTHDdnhLkJxpLbG%2Bu8aMVeXYMwrWJlI7q%2Bpme8xHEQ%2FmdqeyKp%2FZV%2FMooi%2FFxhukTJwNY5ErBo45yv2gXt9bnXSWFY%2F3CGA%2Brzvw%2BDVLdnsdmHvVKPei7wI%2B22arHBGuIx6GozwJMd3auGHiZaU8iOZOZ8iSOpIo6twZmgjqbBmCUymBhdSbAdaU3L1iId%2FIZ4wIiPwv%2B6lJhGnkBlCIWWupnvZefgeOtjRCJn4GWa2gmTWm71m93sbOF%2FzNmBCacCpPA61i9Y3T6wwfVODmJYWq1kQTU3PjzabjfVFyFc0lcPYYAKMzVCiIiMjNBupiuMPHG8cQGOqUBNAFBWCxXNgYc1YpNctCLyNXALM9uVW5W40nrzuLAfO%2Bo4oohsZluVXIIWg7spP42eAa1qDwH3Q4R8lAGNQFwgb2awX0d2pzhCxZhMVqneOyTBwCSsDmjPKg%2Fr3pfQifhCk7hzj4aOTl9FsmQ8EPCIQqM%2F9C7NA48ghMDkwkKTmS1wZ4US%2FP%2B5S9gao6TVV2B19zh8nrY6gPFPFgq7%2BdIeUr0CsCo&X-Amz-Signature=be65cb81c56837d2869f136235dfd0f5f4072b7684ce91e04b873a48c04079e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TGSLJ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD92rXJv%2B5R5VDVjZtd%2Fhvc7hxJMeqDscZCJojE5I2TPgIgJhpazajGHei8GnD2NUqEt5gf%2FAlB6qUsjGyuPMvLCVUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGlkALjZOTxBvYXxTCrcAx9Df5HFxyknc6DmdX0ai2WxhKqoaEH1lLaOupegWmJLtROcjoza2PXmxwXwI3QmHyKzpX8tV1IYey8LDGmyiFJ0IbDgjmLW26Gt1KsOcsJWsb9bfl2AriunutvWto%2Fam0xOOPmfcQEWgHcWE98Q32FFcqrC7bWsIUigH0S3HyUqFUeYUvlaMUR5Vy6KNIAm5Q%2B7ewhrVCsqi8kW%2BzpfCjOSR18f8b8MoWiu0mLXlYKB%2BHQySL6x8BMNisZ1wH8CoRDLH1NJSmDlK9sTI0B3%2ByC%2FN0vwd1PI4j%2BjS8TjBR87KE678IZxf%2FhlG6GMTHDdnhLkJxpLbG%2Bu8aMVeXYMwrWJlI7q%2Bpme8xHEQ%2FmdqeyKp%2FZV%2FMooi%2FFxhukTJwNY5ErBo45yv2gXt9bnXSWFY%2F3CGA%2Brzvw%2BDVLdnsdmHvVKPei7wI%2B22arHBGuIx6GozwJMd3auGHiZaU8iOZOZ8iSOpIo6twZmgjqbBmCUymBhdSbAdaU3L1iId%2FIZ4wIiPwv%2B6lJhGnkBlCIWWupnvZefgeOtjRCJn4GWa2gmTWm71m93sbOF%2FzNmBCacCpPA61i9Y3T6wwfVODmJYWq1kQTU3PjzabjfVFyFc0lcPYYAKMzVCiIiMjNBupiuMPHG8cQGOqUBNAFBWCxXNgYc1YpNctCLyNXALM9uVW5W40nrzuLAfO%2Bo4oohsZluVXIIWg7spP42eAa1qDwH3Q4R8lAGNQFwgb2awX0d2pzhCxZhMVqneOyTBwCSsDmjPKg%2Fr3pfQifhCk7hzj4aOTl9FsmQ8EPCIQqM%2F9C7NA48ghMDkwkKTmS1wZ4US%2FP%2B5S9gao6TVV2B19zh8nrY6gPFPFgq7%2BdIeUr0CsCo&X-Amz-Signature=bacdd296afc95c877574186ab1baa98ef0799e2bb6fb3d948b52367c0098c668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TGSLJ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD92rXJv%2B5R5VDVjZtd%2Fhvc7hxJMeqDscZCJojE5I2TPgIgJhpazajGHei8GnD2NUqEt5gf%2FAlB6qUsjGyuPMvLCVUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGlkALjZOTxBvYXxTCrcAx9Df5HFxyknc6DmdX0ai2WxhKqoaEH1lLaOupegWmJLtROcjoza2PXmxwXwI3QmHyKzpX8tV1IYey8LDGmyiFJ0IbDgjmLW26Gt1KsOcsJWsb9bfl2AriunutvWto%2Fam0xOOPmfcQEWgHcWE98Q32FFcqrC7bWsIUigH0S3HyUqFUeYUvlaMUR5Vy6KNIAm5Q%2B7ewhrVCsqi8kW%2BzpfCjOSR18f8b8MoWiu0mLXlYKB%2BHQySL6x8BMNisZ1wH8CoRDLH1NJSmDlK9sTI0B3%2ByC%2FN0vwd1PI4j%2BjS8TjBR87KE678IZxf%2FhlG6GMTHDdnhLkJxpLbG%2Bu8aMVeXYMwrWJlI7q%2Bpme8xHEQ%2FmdqeyKp%2FZV%2FMooi%2FFxhukTJwNY5ErBo45yv2gXt9bnXSWFY%2F3CGA%2Brzvw%2BDVLdnsdmHvVKPei7wI%2B22arHBGuIx6GozwJMd3auGHiZaU8iOZOZ8iSOpIo6twZmgjqbBmCUymBhdSbAdaU3L1iId%2FIZ4wIiPwv%2B6lJhGnkBlCIWWupnvZefgeOtjRCJn4GWa2gmTWm71m93sbOF%2FzNmBCacCpPA61i9Y3T6wwfVODmJYWq1kQTU3PjzabjfVFyFc0lcPYYAKMzVCiIiMjNBupiuMPHG8cQGOqUBNAFBWCxXNgYc1YpNctCLyNXALM9uVW5W40nrzuLAfO%2Bo4oohsZluVXIIWg7spP42eAa1qDwH3Q4R8lAGNQFwgb2awX0d2pzhCxZhMVqneOyTBwCSsDmjPKg%2Fr3pfQifhCk7hzj4aOTl9FsmQ8EPCIQqM%2F9C7NA48ghMDkwkKTmS1wZ4US%2FP%2B5S9gao6TVV2B19zh8nrY6gPFPFgq7%2BdIeUr0CsCo&X-Amz-Signature=c4884ceb6d67a3b8dfddbbff2dcbdf0b75247465e7abb8e7ecb9480a276177c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TGSLJ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD92rXJv%2B5R5VDVjZtd%2Fhvc7hxJMeqDscZCJojE5I2TPgIgJhpazajGHei8GnD2NUqEt5gf%2FAlB6qUsjGyuPMvLCVUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGlkALjZOTxBvYXxTCrcAx9Df5HFxyknc6DmdX0ai2WxhKqoaEH1lLaOupegWmJLtROcjoza2PXmxwXwI3QmHyKzpX8tV1IYey8LDGmyiFJ0IbDgjmLW26Gt1KsOcsJWsb9bfl2AriunutvWto%2Fam0xOOPmfcQEWgHcWE98Q32FFcqrC7bWsIUigH0S3HyUqFUeYUvlaMUR5Vy6KNIAm5Q%2B7ewhrVCsqi8kW%2BzpfCjOSR18f8b8MoWiu0mLXlYKB%2BHQySL6x8BMNisZ1wH8CoRDLH1NJSmDlK9sTI0B3%2ByC%2FN0vwd1PI4j%2BjS8TjBR87KE678IZxf%2FhlG6GMTHDdnhLkJxpLbG%2Bu8aMVeXYMwrWJlI7q%2Bpme8xHEQ%2FmdqeyKp%2FZV%2FMooi%2FFxhukTJwNY5ErBo45yv2gXt9bnXSWFY%2F3CGA%2Brzvw%2BDVLdnsdmHvVKPei7wI%2B22arHBGuIx6GozwJMd3auGHiZaU8iOZOZ8iSOpIo6twZmgjqbBmCUymBhdSbAdaU3L1iId%2FIZ4wIiPwv%2B6lJhGnkBlCIWWupnvZefgeOtjRCJn4GWa2gmTWm71m93sbOF%2FzNmBCacCpPA61i9Y3T6wwfVODmJYWq1kQTU3PjzabjfVFyFc0lcPYYAKMzVCiIiMjNBupiuMPHG8cQGOqUBNAFBWCxXNgYc1YpNctCLyNXALM9uVW5W40nrzuLAfO%2Bo4oohsZluVXIIWg7spP42eAa1qDwH3Q4R8lAGNQFwgb2awX0d2pzhCxZhMVqneOyTBwCSsDmjPKg%2Fr3pfQifhCk7hzj4aOTl9FsmQ8EPCIQqM%2F9C7NA48ghMDkwkKTmS1wZ4US%2FP%2B5S9gao6TVV2B19zh8nrY6gPFPFgq7%2BdIeUr0CsCo&X-Amz-Signature=d87d9e4b23356ed1323135609d679025a1c402bb32b5579ae712b542f2121ec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TGSLJ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD92rXJv%2B5R5VDVjZtd%2Fhvc7hxJMeqDscZCJojE5I2TPgIgJhpazajGHei8GnD2NUqEt5gf%2FAlB6qUsjGyuPMvLCVUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGlkALjZOTxBvYXxTCrcAx9Df5HFxyknc6DmdX0ai2WxhKqoaEH1lLaOupegWmJLtROcjoza2PXmxwXwI3QmHyKzpX8tV1IYey8LDGmyiFJ0IbDgjmLW26Gt1KsOcsJWsb9bfl2AriunutvWto%2Fam0xOOPmfcQEWgHcWE98Q32FFcqrC7bWsIUigH0S3HyUqFUeYUvlaMUR5Vy6KNIAm5Q%2B7ewhrVCsqi8kW%2BzpfCjOSR18f8b8MoWiu0mLXlYKB%2BHQySL6x8BMNisZ1wH8CoRDLH1NJSmDlK9sTI0B3%2ByC%2FN0vwd1PI4j%2BjS8TjBR87KE678IZxf%2FhlG6GMTHDdnhLkJxpLbG%2Bu8aMVeXYMwrWJlI7q%2Bpme8xHEQ%2FmdqeyKp%2FZV%2FMooi%2FFxhukTJwNY5ErBo45yv2gXt9bnXSWFY%2F3CGA%2Brzvw%2BDVLdnsdmHvVKPei7wI%2B22arHBGuIx6GozwJMd3auGHiZaU8iOZOZ8iSOpIo6twZmgjqbBmCUymBhdSbAdaU3L1iId%2FIZ4wIiPwv%2B6lJhGnkBlCIWWupnvZefgeOtjRCJn4GWa2gmTWm71m93sbOF%2FzNmBCacCpPA61i9Y3T6wwfVODmJYWq1kQTU3PjzabjfVFyFc0lcPYYAKMzVCiIiMjNBupiuMPHG8cQGOqUBNAFBWCxXNgYc1YpNctCLyNXALM9uVW5W40nrzuLAfO%2Bo4oohsZluVXIIWg7spP42eAa1qDwH3Q4R8lAGNQFwgb2awX0d2pzhCxZhMVqneOyTBwCSsDmjPKg%2Fr3pfQifhCk7hzj4aOTl9FsmQ8EPCIQqM%2F9C7NA48ghMDkwkKTmS1wZ4US%2FP%2B5S9gao6TVV2B19zh8nrY6gPFPFgq7%2BdIeUr0CsCo&X-Amz-Signature=a1f15ed0daf194d7577636cb834a35055402bb7b4a10425344724b5651b3f4ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPB5N5ST%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg5GaFyYUOlrofvdYlorlpBYM3Q9ckBfpbWtgCNQLnigIhAP4%2BqscsQWsLc40%2Bd94e8M0UuJGmfSvBUMTTFrpYuL8wKv8DCCsQABoMNjM3NDIzMTgzODA1IgyeVUJ%2FiZWwcDvFZHoq3ANeCYHplo0JX88ebjGKd6roGY0xoZCGT3KHoxAKZ58Ub8asW8BwzirXcsFeZLydvM46F%2BMS53ucJ2kQDsruGo8tEUg4DEiayyOn32%2FDcW0zWZZ2eKrPhPQJrzXd8JAGvtd6L%2Bij%2BjfRNRxvqkZnO1qEebtl8k12HmUXh08f%2B%2FmuLkRLUaK5UUzHZzAKPeZ6tpxhz%2BwJF5uHSIAfWBjpA%2FapycLXkOJueMYVBUOsSk3YtQRw%2Bw%2FMyO6G%2B9Cr9dcHQUX0KcgmZPl%2FcmXPSpqtMYn7jD%2FZ%2F1vBpoJ61Ej1vSvDncmbkk207Kz28jS16AfOe320sbDsL7Q5KP8VuDQNp41n7FNKvbwaraSz8x5G8PtiQmc8UUNOwzgx02%2FV3iNmkoCDdDwzFg6ct%2BoAn8JTPCRFTsi8nV09qflMTH3jTrTP83XOp33krIoDrxT80sG7CYsA31n8QCdEHiupo5X8Vw%2B%2FFDy3Wp2OA1xrVmZQKiyAtJP%2F25kfVK0rG1xINQ8fTYT%2FhodzM5D1dB58bAK1PSm0MyLqau%2BbcHJTSOrKYp%2B84oZw442Z%2FSUCEzd0tpeTL2x%2BjwiR%2BsJNG1Gvdk%2BRcjEff1v2kHxmWfipXk7tKxzDo5lmcFC4auKgGFHr6DDmxvHEBjqkAXUn62F0RqrPOQQk5j%2F%2BvNij%2BMzeMOK7lw4jpJNpLvpUsXgHIrYPFXm%2F0WVgBsEcslXnUYmeoFFezZgFvLKl0FZ%2B9oxrwB6Iuyr50dG3yUziU1S7k9NFocFzYjY2RzPCgO8clM7Rg1CGBfNMrjGlXbm81SIYpDHwsn1ogNZL2ZE2Hh1P3gb121zygvXbqwG6jkVt5nBVnO%2BZhb6zoFRWubEtqRnE&X-Amz-Signature=e11c06b96441f2c6388a6b484b3451f1643d24d9aa3ac299c35d0bca96168c84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L6MCZA5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZF%2BWXjRt0RI3k%2FAmEGxwnW5TNQgSxXphslXZnLWlB4AiEAjslmH6eKGAEMrhs44k53m%2BECl1JU%2F3L4w3LNzf%2BdhMUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJk9kz5NWNGWWEgzqSrcA02TDT0amTSnLc%2FSfSsDTlc2dxNRHeuEJvWITBIPJWhAv3wbiY3i7PUav01iIqZqbKqhOKU%2FpZhqpt8yLJSAxm4r%2FqBvCBXAG8Vg2Yfk2LWbyvXZlBWjVGKlF9WJIIBy%2FcRUBIwyyutuJMEOOZQcS9P58ZmYLTgGAqxIXo5f2Z4GYgRA%2FoXldlL%2BSjxrCAEujbUzk%2FSGHtqo1H5KH6nXJpUB%2BTTkK2S7QcLS6zQNmhUsPhphgop3uni7vxqPfUjdSCeN7iBft%2BL1DgbeY8jF%2Brh7YBLfuFOJrR6BAFKS0hTWGwoG6qo%2BCHmDJELgdrHaAxElC24amul30ISxMp8XoV1AvBaWimAKht1uzVvJeJ8c7RejB8%2BdJEUBLVhqn2%2Fvz%2FtWIpArsWf%2BpsLXI0N5myKkqzEfJEbZsz4FxEkETFgkJZUS9fnyiLin5D0DaI6Bd%2FZN9ty%2FeJfws7BiJYytnSYkfsvGzXReVEmQePhQLgwFp8Mlz88%2Bi7j%2BFhTDFr8lPuag6EHWcRY0KRc1TbkZziroA6Bd95ILwc6GfhY3bwOlCycAFZt1LAaB3XDiic1xeJci03VCy0%2BdqJIY4l337CfV3UlZsXW4WqVGvhWWKc7s%2F%2Bglxh%2BTr%2F1iHA0qMNDG8cQGOqUBMLm5Gb3w3sYJKW6ZH%2Bfz63mFsOfrP%2FcD7MtYWmB3ch%2F6l7bKOD2EDC2WNdDDKGiS5UAd3%2FluSiHgUAUrFZyI3vUx986JjA8koJ7nlPlsJ2ib1dntOx6zvY93xq4JXgAKzFfSM3WDuq%2FC4o1%2B6MvgFMT%2FOHlz%2BzC7%2F02Wo6QTkVNeDxn59nqjYe0J0p66ygy%2Fu6xRsPC2pyFaqlDuez6yEROgTKHa&X-Amz-Signature=a68999aa27866ce229070cb055c84b1925dadd29f94834ef5e945ba081fcdf10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WHFQOZA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F1F7se3TDspzDCQX%2BbiCDvOPO%2F%2BAB%2BN6xKBEKl0LWrgIhALy0zTTYVypSaOHX5XhfpU9qRxLyKV72xR3Bxy%2FpQOArKv8DCCsQABoMNjM3NDIzMTgzODA1Igyfw82oDUN51EDRPekq3AOulD%2BIOdpv7bbGKlrJs3Lkt2rm80wbyTRdNMc7TiPyc%2BPyegTSdO7H6XevLGDaR2cn7N50picz8esqG5Su8AZdiH5t7AVwDPWh9wBFCNFMQ1H4JPmz0thJHbW2WhKMp3C%2Bl4OOIDvgFHZnaGsxEhTnYn90Q7Oln%2BnjJZFcE5OfQxOAnKAcjW8rDMKv4tG5H5x%2FB%2BbqBBQnEa8diiqAUgSloBpUoakhdzl2UJRca2RIuD5o5j13q4mSAbO2sX5gttk5IKxQ9VXh1McUaoFoc5uua0KYfg%2BWY0yPUbb3CGaX9zwoE0WsTEjYXy%2FC2a2t4sV4TsaRvGHkEFf5Qcw07aGlb9I%2BnZkg0zD27bYwyPNzl72K7FMZS0Jl2CQ4Vlvp3iSAcLGHCsZK1LanbRq1qjM9SEg6Yt%2B4U1FsJ1Eo89haQ4MWYqsVbDYvJd%2BB6%2Fj8vt7rWfqvbB6MJH7dKEm4L25VVAdAsGBnfoFxFigcI7CaZlqd%2Ftikz6q7YgHGR6gMp9PdvTml%2Fx1r%2Fh8fmtgEb0Q2nm4x3eAqAXE%2B9EqHiHIv0dtI24I7iYWZJx5UYb5nDn%2FuEtN6dLpQzV1kmFKNs7ThAqeABiYCzaaCeIMkY%2BjDermQOtyc0B%2Bb2frSdTDDxvHEBjqkAUmcIBOr5zWfIxkzv0pS5HdfkDLhd9aNcZFYaa%2B1TrBsykOv%2BRqKb96pOSyLCCy1LT2lNoOFNqndhMhFukJQYagq95WpBMXu1Jujl%2BDGr4gjBj2NzLWjsI4BMDhWOWajiXOvzaqm7vw%2BaLVI7kCimVI3%2FCgjg1bwQbsy1ot8ugKgt0k3RsQQY9cHyMDkXWWC6iB7bJmntT6V7P5biLEWpix44kPf&X-Amz-Signature=effc8612d51862c5017d8dc3074d40d9a2097c00528f1f0f4057b9019c95b9a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TGSLJ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD92rXJv%2B5R5VDVjZtd%2Fhvc7hxJMeqDscZCJojE5I2TPgIgJhpazajGHei8GnD2NUqEt5gf%2FAlB6qUsjGyuPMvLCVUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGlkALjZOTxBvYXxTCrcAx9Df5HFxyknc6DmdX0ai2WxhKqoaEH1lLaOupegWmJLtROcjoza2PXmxwXwI3QmHyKzpX8tV1IYey8LDGmyiFJ0IbDgjmLW26Gt1KsOcsJWsb9bfl2AriunutvWto%2Fam0xOOPmfcQEWgHcWE98Q32FFcqrC7bWsIUigH0S3HyUqFUeYUvlaMUR5Vy6KNIAm5Q%2B7ewhrVCsqi8kW%2BzpfCjOSR18f8b8MoWiu0mLXlYKB%2BHQySL6x8BMNisZ1wH8CoRDLH1NJSmDlK9sTI0B3%2ByC%2FN0vwd1PI4j%2BjS8TjBR87KE678IZxf%2FhlG6GMTHDdnhLkJxpLbG%2Bu8aMVeXYMwrWJlI7q%2Bpme8xHEQ%2FmdqeyKp%2FZV%2FMooi%2FFxhukTJwNY5ErBo45yv2gXt9bnXSWFY%2F3CGA%2Brzvw%2BDVLdnsdmHvVKPei7wI%2B22arHBGuIx6GozwJMd3auGHiZaU8iOZOZ8iSOpIo6twZmgjqbBmCUymBhdSbAdaU3L1iId%2FIZ4wIiPwv%2B6lJhGnkBlCIWWupnvZefgeOtjRCJn4GWa2gmTWm71m93sbOF%2FzNmBCacCpPA61i9Y3T6wwfVODmJYWq1kQTU3PjzabjfVFyFc0lcPYYAKMzVCiIiMjNBupiuMPHG8cQGOqUBNAFBWCxXNgYc1YpNctCLyNXALM9uVW5W40nrzuLAfO%2Bo4oohsZluVXIIWg7spP42eAa1qDwH3Q4R8lAGNQFwgb2awX0d2pzhCxZhMVqneOyTBwCSsDmjPKg%2Fr3pfQifhCk7hzj4aOTl9FsmQ8EPCIQqM%2F9C7NA48ghMDkwkKTmS1wZ4US%2FP%2B5S9gao6TVV2B19zh8nrY6gPFPFgq7%2BdIeUr0CsCo&X-Amz-Signature=642f788fa3d6dcdab307b85b5aa205889bf9ea68174a3b68f0b8dd63f5fd0ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MS2ZTEQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEApIYp14sfhlJMe5fSOGaWPkntQXs%2F18VcEcbRSWmQlAiBMGJtBbU4iPzvU%2BW88sSVonvJ428UpevlJaNbG7EpL8ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMwaYAoUVKKBM2%2BetGKtwDdFkcnjkOAerQXvxrLyHmLKj3DCYXXaksaKUTx1kuQ6TaduXIv1nQ7G7tXei1Ws34yyPhppG7olV7%2F7Iep%2Fl5fGJ2pyITwhnk7Wgk8jxq3JyC1MqIR5ycW%2F83KsiGbPtWnIB3WIRXfmghPKbvh6iGr6pu63h3FFlc324dAp7zJaMEFKiphl6vZGSuCKrK4vaXZzbVxHsXABPnIkTNkGuXta8gYU2AQwrZPhJ3M%2B%2FUkJmUB0773sBoj2GUDJPeB8SkQ1FyKVknbjCwnH8WB8QJd7EWI1oTlGCdJ130ATP%2Folb9oRqISt1JLcognrGs8b8iuYcmK2qL2lZENJGPoqpdvJCmFix7ijsUlexPK1BX0LaVGoYf05lwy7q80YC4taGwCscdHL%2FfQ2F0RIHLxFfZ4mw72Lu2ej5%2FNw%2FveydUFPbUrzfTZ%2BBBwLZVYYxsnh%2BNvYHctTbzwdM9lRewmu4wccoabsydnCDeTsu%2FSHWby0I3KFnUY6iUIm%2BH26mE9YJxWpU8yWgfiZaSYgm4YgFv6YstW8YTRRDyTSjQgHPwinNzC%2BApPdadHY%2BU6tI6fAKK8ogI7nALCoTBkkRKNLPV3Zj%2BcjQ8q4bgaeLt8AAQjRye9GJ0r8NGRTPmQyow5sbxxAY6pgEmpcnfKi7F76CeXP8IWAlPHR7ldVnOWJ3A5YRMZnRw0tiwhsYWYgJFvfXP%2FWeYt7V%2Bk4JrkcVXbk2sXE3T4HicNr2YEFRNWbVytClVatPC%2FK6F4ptRbY%2FpOMzZvhYcSSzoOUJTY%2FHI6AKtEUS1Ooz9QWNKh2H%2B2gADGmIMMk4fF8WoCXAGEE43FfwK%2Btjo9wndiDtG%2B5KkFlDakXo1UiU%2BGtPBZm1D&X-Amz-Signature=09c25a9ba3a0408298017ff6a0244316c17d1d975070b67daa25e33e3bb41526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TGSLJ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD92rXJv%2B5R5VDVjZtd%2Fhvc7hxJMeqDscZCJojE5I2TPgIgJhpazajGHei8GnD2NUqEt5gf%2FAlB6qUsjGyuPMvLCVUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGlkALjZOTxBvYXxTCrcAx9Df5HFxyknc6DmdX0ai2WxhKqoaEH1lLaOupegWmJLtROcjoza2PXmxwXwI3QmHyKzpX8tV1IYey8LDGmyiFJ0IbDgjmLW26Gt1KsOcsJWsb9bfl2AriunutvWto%2Fam0xOOPmfcQEWgHcWE98Q32FFcqrC7bWsIUigH0S3HyUqFUeYUvlaMUR5Vy6KNIAm5Q%2B7ewhrVCsqi8kW%2BzpfCjOSR18f8b8MoWiu0mLXlYKB%2BHQySL6x8BMNisZ1wH8CoRDLH1NJSmDlK9sTI0B3%2ByC%2FN0vwd1PI4j%2BjS8TjBR87KE678IZxf%2FhlG6GMTHDdnhLkJxpLbG%2Bu8aMVeXYMwrWJlI7q%2Bpme8xHEQ%2FmdqeyKp%2FZV%2FMooi%2FFxhukTJwNY5ErBo45yv2gXt9bnXSWFY%2F3CGA%2Brzvw%2BDVLdnsdmHvVKPei7wI%2B22arHBGuIx6GozwJMd3auGHiZaU8iOZOZ8iSOpIo6twZmgjqbBmCUymBhdSbAdaU3L1iId%2FIZ4wIiPwv%2B6lJhGnkBlCIWWupnvZefgeOtjRCJn4GWa2gmTWm71m93sbOF%2FzNmBCacCpPA61i9Y3T6wwfVODmJYWq1kQTU3PjzabjfVFyFc0lcPYYAKMzVCiIiMjNBupiuMPHG8cQGOqUBNAFBWCxXNgYc1YpNctCLyNXALM9uVW5W40nrzuLAfO%2Bo4oohsZluVXIIWg7spP42eAa1qDwH3Q4R8lAGNQFwgb2awX0d2pzhCxZhMVqneOyTBwCSsDmjPKg%2Fr3pfQifhCk7hzj4aOTl9FsmQ8EPCIQqM%2F9C7NA48ghMDkwkKTmS1wZ4US%2FP%2B5S9gao6TVV2B19zh8nrY6gPFPFgq7%2BdIeUr0CsCo&X-Amz-Signature=82f6da3ebec937a992123fcef4db661407b654da8d1d3c2e535ef68bfd3b6625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MOAV5E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeW2J5Fsenu6B7acVUsx3HzpfltgGe88yRVf0WZauAFAiAfWPcZMqEKl6xzPfV7sXYtjXWMgf0ljOz%2BO4UmlE8UkSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMcWfQQ210648J8lywKtwDW6a%2FDYdji1omprFlzYj6L%2FI%2BcnOb4%2B95uq8qZbnWKtr%2FmFtEMjr0%2FOBFmzaDTzzDKAxUmPu6NBqz9ch5TR3BIWP%2FyJnH58ENUjWDDc3Hv7%2F%2FYn%2BpYV%2F211Gpirt9%2BCAYfBB%2Fm7g0Rq3Ezos5LCcEzroWbAVIGF0%2BYnQVKbiwS110Ap5IsutIS1eUpHWuH7%2BlewHNgsxOVI7xt8c8RGLYgdrq1H065FmxDAgKUAzlPFXXAEBAen3FsuIbZfXF3cG%2B%2FovWvqB5dR5jVHeyYLV25YHIof61itI80TQOmt4JvcmJzpaXCWhDDX5cQMhNKmAqOXq27jY83RBLX%2BCwjwRuU0Vfam8oBeY%2Bt80bQNlGYL9fdC2gEYF9AXiSRQIjeXJhIpuxLyWEGneFsB5fLk%2Fr24jbE%2FrJPhyMauisNsTZOJvYHLifZx0f4eUzJNcYIwfVY2%2B5mBH0GpjVq3%2BGO79V0X%2F49gvaEb6%2FzIPyHiprTT7jKgqgevpN13JgBvS%2B5Qx%2B8nnkjx1kCF7mtnu4s6SEcRwhDznABhu%2B0%2Bi8jaPKu9I0zkdB9%2Fr26VNdiV056jX8LlkDziJ81x91PJ7siWPtGkiNxDEKE%2FAiB9%2FB8O8gaH9DUKSi6U5aAzGjp8cwmsbxxAY6pgH%2Fm4J4z7G9VwaL8cFeQP4D6CtK7UKMn%2FWn2wgvT5Obqsjr4GBVlaq%2B4eQI45iOqYB43hiW%2F7mkuMUKf3loIi6s9CPZx%2Fx6%2FRCE%2FJWgJKkylRa4VoyecVlQ2VZ3HOqgMbqN7U6uqzqjHqLtwaz0kZIgZZagqr42NkaIF%2FT4HsdaL%2FGi0SvaTmRalQ8HVtPZ4m7siwywBUpjKxetXt8CQVu6XpkTboMm&X-Amz-Signature=2c2e2fc35801762460c0a697fa04e740ea6df763e69da38f9371f12652daeca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TGSLJ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD92rXJv%2B5R5VDVjZtd%2Fhvc7hxJMeqDscZCJojE5I2TPgIgJhpazajGHei8GnD2NUqEt5gf%2FAlB6qUsjGyuPMvLCVUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGlkALjZOTxBvYXxTCrcAx9Df5HFxyknc6DmdX0ai2WxhKqoaEH1lLaOupegWmJLtROcjoza2PXmxwXwI3QmHyKzpX8tV1IYey8LDGmyiFJ0IbDgjmLW26Gt1KsOcsJWsb9bfl2AriunutvWto%2Fam0xOOPmfcQEWgHcWE98Q32FFcqrC7bWsIUigH0S3HyUqFUeYUvlaMUR5Vy6KNIAm5Q%2B7ewhrVCsqi8kW%2BzpfCjOSR18f8b8MoWiu0mLXlYKB%2BHQySL6x8BMNisZ1wH8CoRDLH1NJSmDlK9sTI0B3%2ByC%2FN0vwd1PI4j%2BjS8TjBR87KE678IZxf%2FhlG6GMTHDdnhLkJxpLbG%2Bu8aMVeXYMwrWJlI7q%2Bpme8xHEQ%2FmdqeyKp%2FZV%2FMooi%2FFxhukTJwNY5ErBo45yv2gXt9bnXSWFY%2F3CGA%2Brzvw%2BDVLdnsdmHvVKPei7wI%2B22arHBGuIx6GozwJMd3auGHiZaU8iOZOZ8iSOpIo6twZmgjqbBmCUymBhdSbAdaU3L1iId%2FIZ4wIiPwv%2B6lJhGnkBlCIWWupnvZefgeOtjRCJn4GWa2gmTWm71m93sbOF%2FzNmBCacCpPA61i9Y3T6wwfVODmJYWq1kQTU3PjzabjfVFyFc0lcPYYAKMzVCiIiMjNBupiuMPHG8cQGOqUBNAFBWCxXNgYc1YpNctCLyNXALM9uVW5W40nrzuLAfO%2Bo4oohsZluVXIIWg7spP42eAa1qDwH3Q4R8lAGNQFwgb2awX0d2pzhCxZhMVqneOyTBwCSsDmjPKg%2Fr3pfQifhCk7hzj4aOTl9FsmQ8EPCIQqM%2F9C7NA48ghMDkwkKTmS1wZ4US%2FP%2B5S9gao6TVV2B19zh8nrY6gPFPFgq7%2BdIeUr0CsCo&X-Amz-Signature=473ca113024a1a6e516f553dd649d33328d64b2cc8fa570f07f27ad908cc5e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBNWS2UB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0VVuIASsRc%2Fv4S4lCgOl8AqHa88vcDSs5L9t%2BcqfW5wIhAP5sQHYnMie0EMO9Hn8xUoii0%2Byc8WKh7LrOHCmTVMZ0Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwJZSJ4Pup8e40cJM0q3AMJdsbM%2BqshEd4lHtDuC3rgDmd9hqbTYKG6yfbpgPNZeVj9zI9%2FTlREvhP7OY%2BYAlvc2hgMV9GQ5ovOy0KDTaivJjgXEU6lMa8cK06x0XFO04ADYRrbpzBFjhmd426rIHEE%2F7YEvruZqeJOxSSAkOcEYSxSnYRLcTUZiKBbD5XZSTyfo6DMwBs5TXb1VFKh10gAyhp1K1GtGfBgpYh5yFZ16LEndVeCaih%2B6KP%2BzHKrb9lnOts93wf0%2B%2F1x%2BKulwkERm5oX65lg87c0J%2BjKQYtmmABkRYvoiYYzVBUmwoX9ZwIIghayo33tCOas%2BFu6ulKBJZcW8RCOWfWupCrmWxmNfyhgPDVBH6ATrdZaoo4AVOuPOsKBjxLNMtvbAZHdm0TYTPGWNWBm1LgApImgeFsUsl9bEw0GumjzMiNIoYTIt7epg%2BrShN52sGp8w3hhixlHDCJQBqHzOHAoz5Wkk0gaEwRAY5ejHc4B6%2Fw2XjPqm%2B1%2FzRBeDwd3JZEnlY5mlXuxi9jzMw6ed3l13tCi7opYUcxo70JwdZ8aqdxKhDeKnZ3m9DQtNJJTt3AtnJL0UUc8TgcnFidpapMghF0R6h5od2zan5e9j8%2FTJ279B5BjXp0b55v1rk6oyTILFjDaxvHEBjqkAS9xS65DY5MxgFqGIZzMjyTbJ%2BnfWQHaJL67MGS7g4V6YHdzCgGCZbBWyyD9SwFTKjyspYp%2FTF%2BzyAeb4z8wba0mCuBx98zkMSC3Fecl26VDkCB3UpyfaJbyy5x%2FC30rod4M0dkK%2BoFYmhVis6ivjlx7imAQhL0JGxrTwgurY%2FuLAb%2Fas6LprshfTjQFfUslOE1Ex%2BGvYzWacm7R6bHv9WFXWSsx&X-Amz-Signature=fb4ff300c4fea459f060531b92ea57fa0ed86a7eb7992ba3234256f72d8f4fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TGSLJ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD92rXJv%2B5R5VDVjZtd%2Fhvc7hxJMeqDscZCJojE5I2TPgIgJhpazajGHei8GnD2NUqEt5gf%2FAlB6qUsjGyuPMvLCVUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGlkALjZOTxBvYXxTCrcAx9Df5HFxyknc6DmdX0ai2WxhKqoaEH1lLaOupegWmJLtROcjoza2PXmxwXwI3QmHyKzpX8tV1IYey8LDGmyiFJ0IbDgjmLW26Gt1KsOcsJWsb9bfl2AriunutvWto%2Fam0xOOPmfcQEWgHcWE98Q32FFcqrC7bWsIUigH0S3HyUqFUeYUvlaMUR5Vy6KNIAm5Q%2B7ewhrVCsqi8kW%2BzpfCjOSR18f8b8MoWiu0mLXlYKB%2BHQySL6x8BMNisZ1wH8CoRDLH1NJSmDlK9sTI0B3%2ByC%2FN0vwd1PI4j%2BjS8TjBR87KE678IZxf%2FhlG6GMTHDdnhLkJxpLbG%2Bu8aMVeXYMwrWJlI7q%2Bpme8xHEQ%2FmdqeyKp%2FZV%2FMooi%2FFxhukTJwNY5ErBo45yv2gXt9bnXSWFY%2F3CGA%2Brzvw%2BDVLdnsdmHvVKPei7wI%2B22arHBGuIx6GozwJMd3auGHiZaU8iOZOZ8iSOpIo6twZmgjqbBmCUymBhdSbAdaU3L1iId%2FIZ4wIiPwv%2B6lJhGnkBlCIWWupnvZefgeOtjRCJn4GWa2gmTWm71m93sbOF%2FzNmBCacCpPA61i9Y3T6wwfVODmJYWq1kQTU3PjzabjfVFyFc0lcPYYAKMzVCiIiMjNBupiuMPHG8cQGOqUBNAFBWCxXNgYc1YpNctCLyNXALM9uVW5W40nrzuLAfO%2Bo4oohsZluVXIIWg7spP42eAa1qDwH3Q4R8lAGNQFwgb2awX0d2pzhCxZhMVqneOyTBwCSsDmjPKg%2Fr3pfQifhCk7hzj4aOTl9FsmQ8EPCIQqM%2F9C7NA48ghMDkwkKTmS1wZ4US%2FP%2B5S9gao6TVV2B19zh8nrY6gPFPFgq7%2BdIeUr0CsCo&X-Amz-Signature=fa02232231c359d525ad1a87eef2ae2b429f0044202c3b0d3e27a62eef4cf726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PWW2EUR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQdpPX4h9ZTyE9rsDCheLk8qPvdVtJMJj8%2FCLfx7YGRQIhAP%2BBw2hxdD4BQrgd9zb87sKe3sWMpK20YY8rXcjMtrEcKv8DCCsQABoMNjM3NDIzMTgzODA1Igx4hk8wBqtSQlzMJkkq3AMCD95vDhhlHChmC%2Fh4vwWtaGzGNpmUa4h2AmebeOLZ7JHeSbVyBYZmriKRLQRaTSwizRYuat%2B0ScZ0EG17phO%2BqDjbtyW5kYi0YJqloRwZF%2BJb%2B3qKAOYhLUY9JG2N6NHeOKxm4luSKFWxFkK%2FgHgQTBPn4ap6bHPLf1vT575IBKUZKxseR3rJInP2bKuCSFPP%2BA5zWN7LOFGQtGFa7uWjAHzsxYoO6CyZ9JyX1t5im%2F1YfuLpdfETxGvHoB0eWUsn5Y%2BKYklpDcf%2Ban9c5oKPP0bbdvo7GvldtoYGYTyZJ8j07QWdqvigFzfokHVOJQ1v5y5h6HyqdQorXIvy4MqMop2%2BWuWX05%2FoSMeEZvi0wfTQxKUl0hpdfkIG55pJnlR7FxiapihZ%2FQ557N1Hzv8rHpIqSxoRGmDcJ8Pp01Wtk3H6Fmw0S0%2BCDjs9ZIWBTguJLm2AexE5QdAkGAFjm4RqVJfJFPOAfjgdB8Rxlxaq6EDhvsWAHVSs01fsfgvxPeEr5vhEtu87PDQEeCmrG9orPw6uZrFqx0bCAwy%2Fe3fvqFz2gyWm1SGOhZxWSTWmA3oJiLbKdesScDV5veing%2F5bpSYUHQ2fmjT2ypq6V5JhAM6NVRBCu69PhPIHtjCFxvHEBjqkAeWe1UYbf6BMBIzPcs8fikqwN21Ft6%2Fpsgw1N0JjwBu3ddQMUzrqPdkXsQN74e7KJvzLhGyZb2bzkpqIa%2FqBQaK%2B29Eikf0KpaDhfQXWeWIobh0DPRPKy0YBEJYgq7yVxa9cjChTCYwvN%2BseYXKsWjx3T0ZXkZWXGAtGduEeUOgXMEChQTfJmHl3v5zoD8PyF3popTNqQtLkK6UMT%2B%2B3C7TvA4%2FH&X-Amz-Signature=466a4d908a6d0b979759a2adee3c753d691d916eb79f61c5570f3383fa5ef25a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAP7IY47%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7e1FvV2FpKFmQRaMfEFqIbO%2BnYWxPQmBwHeBDEErnhgIgSd0wh84Hro9iF4iN3WMLLMAKJU1CqLG8RljWKY4sOicq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDP%2FxWsEeDRiZLHC8kSrcA%2B8pYtqdWpBZMN4I2J4p4QFP4Kay%2FIczNlhTC0P03Vd3VmWD16rdpKNkUOB%2Ft6xjPluk36Hf9vT33sTwOT%2FJl9xDzf1jY2DSUhKDG%2BfrrNqyOTqqCwoEw2QdJjfhGT01UjYNeCc74fRxG7gi0jGv8vsMo82jxAcFK8za3kQ58oVX9vPkCx75UrnAGuqtvzDa54wljwdEo%2BH9OCACqh4mMc77IbDKFeZnocq57u%2Fv1eNauXY7D8uTipIMJrVb%2FSEv27nms%2F6F0u%2BB0mjzGkMxL3eAzZOfTPmMVj28gAiAdINGfgX8CG%2BiDyt4Ohl4zy5eTX9pKZfp%2FkBpDuwvZHMUm0%2FDWfN1Z8uMTGx4ZYK%2Br%2BZyD1XfbxJKJh%2FVpqms4YvoFjFlQPY4t47%2FHC788SeeoZEvXu57FH5dW0E2Pfp2%2BOYp0i1X2owDu8N5OQqWta86qmQfbV85USGmoJobV2NQxzox0D0817yHX07BzLNewQeW8DZaU82uA1ob1lD6GPScIff1lihDcOvZQBA5z71gpXPR5Ieo8mYBmBVIXiPYU5SYJ%2BVJq9Ad9AtVmzm4HyAAlRHisPIZ%2F8L4gYvB79K647XXk1W2QohKvx9n0rgw5PjwzaJ57IuqbxD30lFRMJrG8cQGOqUBgHwp1uRJ6Wd9g1zMFPp%2FPVHr3cxe%2F5OZLAO3ynzvm0vzyxv%2BAIv7NTDrOujuNvtumP1N1TNTNJb5j%2FcMWwVbsW2lpJ6IjJcUhMR0gNgqd%2FcECQB2RMeO7DI6G3ik%2FoCtsxK68SQ9VLBO2pSCEDBXg9vySWQEzKZejJvwFbU9mmhuup%2BOxUZAwEGllWeaNFV5IRge5DZ2%2FLo4hYz2jpdcc%2FdQ0d3h&X-Amz-Signature=93a212d41595587c648fffb4aebde7008883578dc7480171b364d3477a43a5e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664KG4A5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5mLhZIDxi%2F9MvK0KB9XA5iibgJ1qGGWPdb8sLjz607wIhAIV3ED%2Bdhj71QdcJYU%2BazNUp1qRjeC0Cl381cVZqqR3bKv8DCCsQABoMNjM3NDIzMTgzODA1IgxpobxC5GTBW%2FgxpxYq3AMkX%2FlAaEQ7nAj0rIT2OhZoRj92WPtqL7Vhy2QOwDNWeAjYwjIC5rbGf1mnzEkUDcleHHOsz9aYZrkmAdnes9iHshC%2Bg1K5b7443HDPe%2FbEZZF8L8%2F0DJjLYvb%2Bmzy8lgD3U6RVB6TNzVODvyW48D%2F3ELE0SfUyJcgxcyRkp75XdB5Y9wC3UW2YZOUlsoI6Tn%2BwfbnXDWocNmU6YPc0cSrkLVc6fjc3pux2%2FNeiZd6BMp7F7dQDH0dooPGU25BcETNYp6vnY8bwuotGhbmumt%2BSen2pI3STYKVhl7bK0BAJg%2BZkcY3tle%2FweJowOZtTDV0mEVc3RJv5blik9yqREwDfa%2Faknhfn096d%2F6ucs%2BNt4xNHtTpzu9nszZ8xsJsuVljLr8KMPpr2U4XYuEaowjSvEQWa%2FTL47oLL13KVxfeaPTi9gB3ythnNxhfw2RnYFV%2Fi7q8wZKRhpzaGKj%2FSYdWdrD0eTVUM4xVSn0bvtn9%2BbxqMd3BYQvvVuf4PyJ4SofQCJAC6NpOHfhM9SJ1%2Fv10z0V3iHFQdVJtUXK9%2BgsmwST0jisLfWawpwW%2FlzG4JzWvUF8hRvYbNoqGPI8VmGpEA83feMJN9q5GCGPGHFqacn52F81C3hVXqF4SwDTCEx%2FHEBjqkAZs%2BUZCABOcwNogAIpMVozzkCWYlYofUTjEkC9N9agq5cpBTnPaimhoJ3ztAFLC7HMP%2FWGJPyhSZLZtUL%2F7EL0fLGzRLzL5PSOJeGSGoD6fanuJO2mX5avs4v2fTfNzswsqxww3BMBJw6FDC3H8x%2FbsxkqAU%2BHzL5XYppAuM%2BNOSElQapQCV5PdZuTYyYD1coXwKEZyLExHaz6pvvZNz5%2FPF3zCD&X-Amz-Signature=f6b773c8653ae6e3d0959465c0c5b99b1e641fd9649794c3958ad54ef3d72c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLIJ5NM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4kzwFGDeRoTEhShNX8a0zBefYKNZL8zDqPlaVVUmaNQIhAI7Mz%2F6LbcRY2uaGwvR31x5s3VBThWyqCJupLqC82EhYKv8DCCsQABoMNjM3NDIzMTgzODA1IgwoHD7x839tJXwJ8Doq3AP90XHQmZR%2Fh1MBW6G5thjm%2BkfcssEBKR9S6VLoK%2FnDSFj8Peanf4r2ionP%2BbHHzm8xfe97BLufzuvhuBaKqaI5WeohxWvgaFKKwShu1FUp7jhY8LmEdamvk7baZo4UM6PmaNCODpqzhgt7a4cgu%2BT2vfDZ0pR6pZinNpCu0sYHpcdSAXPD4NjkMbx8R%2BXLzejoBnnsQRPhEe6yCtAvSu4%2B%2FbB9bUrCmw84Gp27gk272z1zykPm0PFmh5p9ZdPvvIxQVJOJMfyygBrjK8iqS%2BLAb93SUmHgP%2FrnWAXs1n5%2FKMuFJTta0WKksfO5DQ5O5dZM1fiFINusIOZnEiw%2F40yUQspAlIfts22J%2FXq8XRZzWtK%2Bc5j7RXDrKiMvqpZ58uD9y5vOV1bz0J8rgmEOlkf7%2BA5noGKpR3IQUoJocYvSxRXlb48pSvo7Nsgt74%2Bamt1XgqO1jFSFGNeiGeM9%2FIvm3gBpgVLgqV35lDaZvtXUypKEXKoCOOkIemWRWDy1QZUtgKtcWcB4zluwVvlrmtsLEYubl4HS5k0jkgTwcd6os64mTLg5at%2BYaIobbds6DfIXEM8csDKflwxHhJ67w6VSQABqEFR1aZk3fuW9RJC1N0YjThhrbI8tpLrcPjD9xfHEBjqkAQn1eOIJ26f8EWtnPeKA1qWkbrl6kAMHWcmmAA38cHklCXUQkFh4WUmTqyCc8Zv5HjryUEhNb1Q6XCZZHPiVuTW5XXIf4T4Wnzc1CjY7nOmQU6AIJLW4SyrBmeLJD%2FYJXMUxyGiVPxSK80kavyPEHtW06x%2BQnc%2BEtMVi5LWI4POIyRCHfKoUU%2FTRcakiw3ZACSmllgBdXa9tjZtdpoZWMOhpPrQl&X-Amz-Signature=3e8945791300eea5fdefa3024fdeff41d1742343fc1a7188d68672009293a19f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS2QZDXO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkHPmormiTZaNnJSsniTryfxppNfGn%2FFv5IYP3ngh5BAIhAIvAtZhpQjIpt33yTHE96GlSMR5OhCOInr%2FXsTnUbUhJKv8DCCsQABoMNjM3NDIzMTgzODA1IgzsWJloIChyKY77%2FCgq3AOcU8sWCVuHyKBGQsSwKNxkkkY2OyLsldcfF0wsCGG5A0uwJBue318V8tjz5ob3EhWhtxcvAZtTM7J6%2BO2G%2Bp32diz3K86KGP1sb7aiDx3JeQxPOWDyntjtpJR0HfanOTbGUK%2BJc572r9m1WZNmrbAozmkZ7tfEE9PtJBgAD4OCR7hz8xiUTDLlojSb62x4ioZs90YFAScEMRz4L1HjZkcwd7Fl339FEZbiDmGu7IaBmlnJtS73I6Bc6xn%2FRd17yD3F4zrM%2BWZBDG78qH02SvV34iAjzR9Zv3r1ltzVi3BAB%2FWraAtvHIbRDoP7k5QTFkyxABOXWEhrEJEpm5PIsSL5WgP0tcrstEhLXhyoZpizweUqvnERcwDoG8Pm9PblMHC0tFu01mkwyu1kltCwifQAe2rWlQ0lSHRIwJSBmWOadDW%2BLHruK%2F%2B1YWVNx6WRb0RQU8Ur5asqGNRhWJkGfE3zHxTomVDkbxTk8uBEmPMwef1HZLnFDssCPQfbb7BGGWUg7rOBXJAZB8zPp1fG8CZru7acMOOqK6ICPGMG4aQmF3EZR%2BvzJXSmBO04JCuW10vBRSIPNYyWtLi5ImdpkGcGnwbOcWPOf%2BOhpNp0A5lqV9opWYkB3ZtsYVEs%2FjCuxvHEBjqkAavdXAENvllzw2hNubO7kRav3zk9ANFtz7kqO5lABII9KqHJMLwm3H18nsMFXeTvoLHzA6YMYp2JJflHB7S%2FeWJBGfnfXEzVnSyCstpbG7cG4rN7WsbIAnupViEq0FFvohdhZu0OLm35m%2FceuWn7O6ztedvm4phS4Qi9xaZm9VW7JZgDx1MeoVo%2Fgbz6pGLM7KUTMDjmpKnacOQxWbkySuo6wEJo&X-Amz-Signature=bdb347ea10ff689375cb2716422ed19217d34f218c589be92bd2216409603870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TGSLJ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD92rXJv%2B5R5VDVjZtd%2Fhvc7hxJMeqDscZCJojE5I2TPgIgJhpazajGHei8GnD2NUqEt5gf%2FAlB6qUsjGyuPMvLCVUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGlkALjZOTxBvYXxTCrcAx9Df5HFxyknc6DmdX0ai2WxhKqoaEH1lLaOupegWmJLtROcjoza2PXmxwXwI3QmHyKzpX8tV1IYey8LDGmyiFJ0IbDgjmLW26Gt1KsOcsJWsb9bfl2AriunutvWto%2Fam0xOOPmfcQEWgHcWE98Q32FFcqrC7bWsIUigH0S3HyUqFUeYUvlaMUR5Vy6KNIAm5Q%2B7ewhrVCsqi8kW%2BzpfCjOSR18f8b8MoWiu0mLXlYKB%2BHQySL6x8BMNisZ1wH8CoRDLH1NJSmDlK9sTI0B3%2ByC%2FN0vwd1PI4j%2BjS8TjBR87KE678IZxf%2FhlG6GMTHDdnhLkJxpLbG%2Bu8aMVeXYMwrWJlI7q%2Bpme8xHEQ%2FmdqeyKp%2FZV%2FMooi%2FFxhukTJwNY5ErBo45yv2gXt9bnXSWFY%2F3CGA%2Brzvw%2BDVLdnsdmHvVKPei7wI%2B22arHBGuIx6GozwJMd3auGHiZaU8iOZOZ8iSOpIo6twZmgjqbBmCUymBhdSbAdaU3L1iId%2FIZ4wIiPwv%2B6lJhGnkBlCIWWupnvZefgeOtjRCJn4GWa2gmTWm71m93sbOF%2FzNmBCacCpPA61i9Y3T6wwfVODmJYWq1kQTU3PjzabjfVFyFc0lcPYYAKMzVCiIiMjNBupiuMPHG8cQGOqUBNAFBWCxXNgYc1YpNctCLyNXALM9uVW5W40nrzuLAfO%2Bo4oohsZluVXIIWg7spP42eAa1qDwH3Q4R8lAGNQFwgb2awX0d2pzhCxZhMVqneOyTBwCSsDmjPKg%2Fr3pfQifhCk7hzj4aOTl9FsmQ8EPCIQqM%2F9C7NA48ghMDkwkKTmS1wZ4US%2FP%2B5S9gao6TVV2B19zh8nrY6gPFPFgq7%2BdIeUr0CsCo&X-Amz-Signature=907dd0bfee768e4b2ce454f1d5bfd094fea835a0a52c6229fe2d3fedfaf119b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TGSLJ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD92rXJv%2B5R5VDVjZtd%2Fhvc7hxJMeqDscZCJojE5I2TPgIgJhpazajGHei8GnD2NUqEt5gf%2FAlB6qUsjGyuPMvLCVUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGlkALjZOTxBvYXxTCrcAx9Df5HFxyknc6DmdX0ai2WxhKqoaEH1lLaOupegWmJLtROcjoza2PXmxwXwI3QmHyKzpX8tV1IYey8LDGmyiFJ0IbDgjmLW26Gt1KsOcsJWsb9bfl2AriunutvWto%2Fam0xOOPmfcQEWgHcWE98Q32FFcqrC7bWsIUigH0S3HyUqFUeYUvlaMUR5Vy6KNIAm5Q%2B7ewhrVCsqi8kW%2BzpfCjOSR18f8b8MoWiu0mLXlYKB%2BHQySL6x8BMNisZ1wH8CoRDLH1NJSmDlK9sTI0B3%2ByC%2FN0vwd1PI4j%2BjS8TjBR87KE678IZxf%2FhlG6GMTHDdnhLkJxpLbG%2Bu8aMVeXYMwrWJlI7q%2Bpme8xHEQ%2FmdqeyKp%2FZV%2FMooi%2FFxhukTJwNY5ErBo45yv2gXt9bnXSWFY%2F3CGA%2Brzvw%2BDVLdnsdmHvVKPei7wI%2B22arHBGuIx6GozwJMd3auGHiZaU8iOZOZ8iSOpIo6twZmgjqbBmCUymBhdSbAdaU3L1iId%2FIZ4wIiPwv%2B6lJhGnkBlCIWWupnvZefgeOtjRCJn4GWa2gmTWm71m93sbOF%2FzNmBCacCpPA61i9Y3T6wwfVODmJYWq1kQTU3PjzabjfVFyFc0lcPYYAKMzVCiIiMjNBupiuMPHG8cQGOqUBNAFBWCxXNgYc1YpNctCLyNXALM9uVW5W40nrzuLAfO%2Bo4oohsZluVXIIWg7spP42eAa1qDwH3Q4R8lAGNQFwgb2awX0d2pzhCxZhMVqneOyTBwCSsDmjPKg%2Fr3pfQifhCk7hzj4aOTl9FsmQ8EPCIQqM%2F9C7NA48ghMDkwkKTmS1wZ4US%2FP%2B5S9gao6TVV2B19zh8nrY6gPFPFgq7%2BdIeUr0CsCo&X-Amz-Signature=a4036c9974eba3c7f34d73017217b5199c4bc1477582c1276dad70a5268a97c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWM5YIQQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FdkFPq8zrHJ1yzthRXO8NdJRxPfhtytbS3OAwfIEUEwIgGb85Fxq9kArq45zxRpjhNkxG1hEio7PtoBmBMV%2FyC5Qq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKDx3QJoXgUai6%2F3bSrcA0TMIWhOiQV5QitIOw%2FtLLnST6LRksI%2B0cp3dOjm4fwCkbjLvzQV8xJGGhqMD6ZUDGoJR9phz87DK6FJ35uzwLOccD%2FkHAw9ahqdbQl5U8dngOlJrrXgDzN%2B8x6S5sWzZPQCLZk5WrKgtedYGCwZ%2Bu9Vaf4Axc8QEcWLT1E1JVJu%2FI2S%2B8L17Z2ZTJlgKGUFaHd2%2FfZ8dxeTuSOxEo7%2BohyaKUVKUdfk52Q2NjeGdPTS5FtiDOIPESV%2BG8E98920JvIfh6Vz3XZ9xAPnpgbPzIDj5Ik0SOBHYQzBcTrk1Q2kstDFO70Ske9SJk79x6WycFVP%2Fcbyr8K%2B79PkQE2rjqzhj0FDWzxJVQpQBSVvxeTkt3WaTrp3JAsJObZ2BZ40sCz4qfszJiBw%2BZ4nEo5IJIuNJ3RAAPYHo0NYfGY6l7Lx%2BtqH9o%2FheM4lQdx%2BLfil%2Fe9mX%2Bsa8QU%2FZR5X6rTjePVSqoZ9Q4YYiouQpBgoT6pNNYnATbYl9%2FJQUZ1cLH90kJyQjwZ%2F%2FvFLrU0pHOFg5J0LlWfzzIDX0C3XVioCwrUlM6pHew%2B3t1JHzqFKfFUPZwDf8uPyqjZqJveJrVicc6qaT9Dm2%2FKxEyWU1rKt49asxeoEUq670%2FhuHTr0MIzG8cQGOqUBpEuCsjKI6LjLilsN21%2BwBC9UYukceIHlB6mhkWD42K51kW4n7G8eQ4XIexA8UDSuMxvGiZZHKhfvDjWj%2BLqLT6KJpOiG8rPD9KDMN724Wkad6Ho9bM4yK%2Fv77SQ1wRDOOMOtCqQ%2FxJdznXLPzE5QuS0SdF%2ByrSdIWd9yAQl7HuLiFug8UtfLOWXj35VH6DzEa0Sd09alRrbz79%2F3UqX%2Fa4PvCDoj&X-Amz-Signature=5e68e54dcbe239ef768061ff8aa5b98c53b9a4689ac3a8ce2e3d162e6968f11e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWM5YIQQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FdkFPq8zrHJ1yzthRXO8NdJRxPfhtytbS3OAwfIEUEwIgGb85Fxq9kArq45zxRpjhNkxG1hEio7PtoBmBMV%2FyC5Qq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKDx3QJoXgUai6%2F3bSrcA0TMIWhOiQV5QitIOw%2FtLLnST6LRksI%2B0cp3dOjm4fwCkbjLvzQV8xJGGhqMD6ZUDGoJR9phz87DK6FJ35uzwLOccD%2FkHAw9ahqdbQl5U8dngOlJrrXgDzN%2B8x6S5sWzZPQCLZk5WrKgtedYGCwZ%2Bu9Vaf4Axc8QEcWLT1E1JVJu%2FI2S%2B8L17Z2ZTJlgKGUFaHd2%2FfZ8dxeTuSOxEo7%2BohyaKUVKUdfk52Q2NjeGdPTS5FtiDOIPESV%2BG8E98920JvIfh6Vz3XZ9xAPnpgbPzIDj5Ik0SOBHYQzBcTrk1Q2kstDFO70Ske9SJk79x6WycFVP%2Fcbyr8K%2B79PkQE2rjqzhj0FDWzxJVQpQBSVvxeTkt3WaTrp3JAsJObZ2BZ40sCz4qfszJiBw%2BZ4nEo5IJIuNJ3RAAPYHo0NYfGY6l7Lx%2BtqH9o%2FheM4lQdx%2BLfil%2Fe9mX%2Bsa8QU%2FZR5X6rTjePVSqoZ9Q4YYiouQpBgoT6pNNYnATbYl9%2FJQUZ1cLH90kJyQjwZ%2F%2FvFLrU0pHOFg5J0LlWfzzIDX0C3XVioCwrUlM6pHew%2B3t1JHzqFKfFUPZwDf8uPyqjZqJveJrVicc6qaT9Dm2%2FKxEyWU1rKt49asxeoEUq670%2FhuHTr0MIzG8cQGOqUBpEuCsjKI6LjLilsN21%2BwBC9UYukceIHlB6mhkWD42K51kW4n7G8eQ4XIexA8UDSuMxvGiZZHKhfvDjWj%2BLqLT6KJpOiG8rPD9KDMN724Wkad6Ho9bM4yK%2Fv77SQ1wRDOOMOtCqQ%2FxJdznXLPzE5QuS0SdF%2ByrSdIWd9yAQl7HuLiFug8UtfLOWXj35VH6DzEa0Sd09alRrbz79%2F3UqX%2Fa4PvCDoj&X-Amz-Signature=32ee5143704e00f8d8ee2011e23464d64a8c10a276b0116fec4ffa0f7cad71e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWM5YIQQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FdkFPq8zrHJ1yzthRXO8NdJRxPfhtytbS3OAwfIEUEwIgGb85Fxq9kArq45zxRpjhNkxG1hEio7PtoBmBMV%2FyC5Qq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKDx3QJoXgUai6%2F3bSrcA0TMIWhOiQV5QitIOw%2FtLLnST6LRksI%2B0cp3dOjm4fwCkbjLvzQV8xJGGhqMD6ZUDGoJR9phz87DK6FJ35uzwLOccD%2FkHAw9ahqdbQl5U8dngOlJrrXgDzN%2B8x6S5sWzZPQCLZk5WrKgtedYGCwZ%2Bu9Vaf4Axc8QEcWLT1E1JVJu%2FI2S%2B8L17Z2ZTJlgKGUFaHd2%2FfZ8dxeTuSOxEo7%2BohyaKUVKUdfk52Q2NjeGdPTS5FtiDOIPESV%2BG8E98920JvIfh6Vz3XZ9xAPnpgbPzIDj5Ik0SOBHYQzBcTrk1Q2kstDFO70Ske9SJk79x6WycFVP%2Fcbyr8K%2B79PkQE2rjqzhj0FDWzxJVQpQBSVvxeTkt3WaTrp3JAsJObZ2BZ40sCz4qfszJiBw%2BZ4nEo5IJIuNJ3RAAPYHo0NYfGY6l7Lx%2BtqH9o%2FheM4lQdx%2BLfil%2Fe9mX%2Bsa8QU%2FZR5X6rTjePVSqoZ9Q4YYiouQpBgoT6pNNYnATbYl9%2FJQUZ1cLH90kJyQjwZ%2F%2FvFLrU0pHOFg5J0LlWfzzIDX0C3XVioCwrUlM6pHew%2B3t1JHzqFKfFUPZwDf8uPyqjZqJveJrVicc6qaT9Dm2%2FKxEyWU1rKt49asxeoEUq670%2FhuHTr0MIzG8cQGOqUBpEuCsjKI6LjLilsN21%2BwBC9UYukceIHlB6mhkWD42K51kW4n7G8eQ4XIexA8UDSuMxvGiZZHKhfvDjWj%2BLqLT6KJpOiG8rPD9KDMN724Wkad6Ho9bM4yK%2Fv77SQ1wRDOOMOtCqQ%2FxJdznXLPzE5QuS0SdF%2ByrSdIWd9yAQl7HuLiFug8UtfLOWXj35VH6DzEa0Sd09alRrbz79%2F3UqX%2Fa4PvCDoj&X-Amz-Signature=64e37e625ac1607235315820e618f7d4aff27e3409a9ab1d067c6edb889b716a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWM5YIQQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FdkFPq8zrHJ1yzthRXO8NdJRxPfhtytbS3OAwfIEUEwIgGb85Fxq9kArq45zxRpjhNkxG1hEio7PtoBmBMV%2FyC5Qq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKDx3QJoXgUai6%2F3bSrcA0TMIWhOiQV5QitIOw%2FtLLnST6LRksI%2B0cp3dOjm4fwCkbjLvzQV8xJGGhqMD6ZUDGoJR9phz87DK6FJ35uzwLOccD%2FkHAw9ahqdbQl5U8dngOlJrrXgDzN%2B8x6S5sWzZPQCLZk5WrKgtedYGCwZ%2Bu9Vaf4Axc8QEcWLT1E1JVJu%2FI2S%2B8L17Z2ZTJlgKGUFaHd2%2FfZ8dxeTuSOxEo7%2BohyaKUVKUdfk52Q2NjeGdPTS5FtiDOIPESV%2BG8E98920JvIfh6Vz3XZ9xAPnpgbPzIDj5Ik0SOBHYQzBcTrk1Q2kstDFO70Ske9SJk79x6WycFVP%2Fcbyr8K%2B79PkQE2rjqzhj0FDWzxJVQpQBSVvxeTkt3WaTrp3JAsJObZ2BZ40sCz4qfszJiBw%2BZ4nEo5IJIuNJ3RAAPYHo0NYfGY6l7Lx%2BtqH9o%2FheM4lQdx%2BLfil%2Fe9mX%2Bsa8QU%2FZR5X6rTjePVSqoZ9Q4YYiouQpBgoT6pNNYnATbYl9%2FJQUZ1cLH90kJyQjwZ%2F%2FvFLrU0pHOFg5J0LlWfzzIDX0C3XVioCwrUlM6pHew%2B3t1JHzqFKfFUPZwDf8uPyqjZqJveJrVicc6qaT9Dm2%2FKxEyWU1rKt49asxeoEUq670%2FhuHTr0MIzG8cQGOqUBpEuCsjKI6LjLilsN21%2BwBC9UYukceIHlB6mhkWD42K51kW4n7G8eQ4XIexA8UDSuMxvGiZZHKhfvDjWj%2BLqLT6KJpOiG8rPD9KDMN724Wkad6Ho9bM4yK%2Fv77SQ1wRDOOMOtCqQ%2FxJdznXLPzE5QuS0SdF%2ByrSdIWd9yAQl7HuLiFug8UtfLOWXj35VH6DzEa0Sd09alRrbz79%2F3UqX%2Fa4PvCDoj&X-Amz-Signature=a2dda9112d06f3a3b47562db328db777f3416bf6d5c5ba820349a291b72a52d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWM5YIQQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FdkFPq8zrHJ1yzthRXO8NdJRxPfhtytbS3OAwfIEUEwIgGb85Fxq9kArq45zxRpjhNkxG1hEio7PtoBmBMV%2FyC5Qq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKDx3QJoXgUai6%2F3bSrcA0TMIWhOiQV5QitIOw%2FtLLnST6LRksI%2B0cp3dOjm4fwCkbjLvzQV8xJGGhqMD6ZUDGoJR9phz87DK6FJ35uzwLOccD%2FkHAw9ahqdbQl5U8dngOlJrrXgDzN%2B8x6S5sWzZPQCLZk5WrKgtedYGCwZ%2Bu9Vaf4Axc8QEcWLT1E1JVJu%2FI2S%2B8L17Z2ZTJlgKGUFaHd2%2FfZ8dxeTuSOxEo7%2BohyaKUVKUdfk52Q2NjeGdPTS5FtiDOIPESV%2BG8E98920JvIfh6Vz3XZ9xAPnpgbPzIDj5Ik0SOBHYQzBcTrk1Q2kstDFO70Ske9SJk79x6WycFVP%2Fcbyr8K%2B79PkQE2rjqzhj0FDWzxJVQpQBSVvxeTkt3WaTrp3JAsJObZ2BZ40sCz4qfszJiBw%2BZ4nEo5IJIuNJ3RAAPYHo0NYfGY6l7Lx%2BtqH9o%2FheM4lQdx%2BLfil%2Fe9mX%2Bsa8QU%2FZR5X6rTjePVSqoZ9Q4YYiouQpBgoT6pNNYnATbYl9%2FJQUZ1cLH90kJyQjwZ%2F%2FvFLrU0pHOFg5J0LlWfzzIDX0C3XVioCwrUlM6pHew%2B3t1JHzqFKfFUPZwDf8uPyqjZqJveJrVicc6qaT9Dm2%2FKxEyWU1rKt49asxeoEUq670%2FhuHTr0MIzG8cQGOqUBpEuCsjKI6LjLilsN21%2BwBC9UYukceIHlB6mhkWD42K51kW4n7G8eQ4XIexA8UDSuMxvGiZZHKhfvDjWj%2BLqLT6KJpOiG8rPD9KDMN724Wkad6Ho9bM4yK%2Fv77SQ1wRDOOMOtCqQ%2FxJdznXLPzE5QuS0SdF%2ByrSdIWd9yAQl7HuLiFug8UtfLOWXj35VH6DzEa0Sd09alRrbz79%2F3UqX%2Fa4PvCDoj&X-Amz-Signature=7b1dc4b2ce894ea5042a067b0a057cf04538b83c6e74a01dd877c770c4c3d20c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWM5YIQQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FdkFPq8zrHJ1yzthRXO8NdJRxPfhtytbS3OAwfIEUEwIgGb85Fxq9kArq45zxRpjhNkxG1hEio7PtoBmBMV%2FyC5Qq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKDx3QJoXgUai6%2F3bSrcA0TMIWhOiQV5QitIOw%2FtLLnST6LRksI%2B0cp3dOjm4fwCkbjLvzQV8xJGGhqMD6ZUDGoJR9phz87DK6FJ35uzwLOccD%2FkHAw9ahqdbQl5U8dngOlJrrXgDzN%2B8x6S5sWzZPQCLZk5WrKgtedYGCwZ%2Bu9Vaf4Axc8QEcWLT1E1JVJu%2FI2S%2B8L17Z2ZTJlgKGUFaHd2%2FfZ8dxeTuSOxEo7%2BohyaKUVKUdfk52Q2NjeGdPTS5FtiDOIPESV%2BG8E98920JvIfh6Vz3XZ9xAPnpgbPzIDj5Ik0SOBHYQzBcTrk1Q2kstDFO70Ske9SJk79x6WycFVP%2Fcbyr8K%2B79PkQE2rjqzhj0FDWzxJVQpQBSVvxeTkt3WaTrp3JAsJObZ2BZ40sCz4qfszJiBw%2BZ4nEo5IJIuNJ3RAAPYHo0NYfGY6l7Lx%2BtqH9o%2FheM4lQdx%2BLfil%2Fe9mX%2Bsa8QU%2FZR5X6rTjePVSqoZ9Q4YYiouQpBgoT6pNNYnATbYl9%2FJQUZ1cLH90kJyQjwZ%2F%2FvFLrU0pHOFg5J0LlWfzzIDX0C3XVioCwrUlM6pHew%2B3t1JHzqFKfFUPZwDf8uPyqjZqJveJrVicc6qaT9Dm2%2FKxEyWU1rKt49asxeoEUq670%2FhuHTr0MIzG8cQGOqUBpEuCsjKI6LjLilsN21%2BwBC9UYukceIHlB6mhkWD42K51kW4n7G8eQ4XIexA8UDSuMxvGiZZHKhfvDjWj%2BLqLT6KJpOiG8rPD9KDMN724Wkad6Ho9bM4yK%2Fv77SQ1wRDOOMOtCqQ%2FxJdznXLPzE5QuS0SdF%2ByrSdIWd9yAQl7HuLiFug8UtfLOWXj35VH6DzEa0Sd09alRrbz79%2F3UqX%2Fa4PvCDoj&X-Amz-Signature=a68db7879c9f66e03650bce6afa63534815e01e61b7b63d0d693cef7b2e223ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWM5YIQQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FdkFPq8zrHJ1yzthRXO8NdJRxPfhtytbS3OAwfIEUEwIgGb85Fxq9kArq45zxRpjhNkxG1hEio7PtoBmBMV%2FyC5Qq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKDx3QJoXgUai6%2F3bSrcA0TMIWhOiQV5QitIOw%2FtLLnST6LRksI%2B0cp3dOjm4fwCkbjLvzQV8xJGGhqMD6ZUDGoJR9phz87DK6FJ35uzwLOccD%2FkHAw9ahqdbQl5U8dngOlJrrXgDzN%2B8x6S5sWzZPQCLZk5WrKgtedYGCwZ%2Bu9Vaf4Axc8QEcWLT1E1JVJu%2FI2S%2B8L17Z2ZTJlgKGUFaHd2%2FfZ8dxeTuSOxEo7%2BohyaKUVKUdfk52Q2NjeGdPTS5FtiDOIPESV%2BG8E98920JvIfh6Vz3XZ9xAPnpgbPzIDj5Ik0SOBHYQzBcTrk1Q2kstDFO70Ske9SJk79x6WycFVP%2Fcbyr8K%2B79PkQE2rjqzhj0FDWzxJVQpQBSVvxeTkt3WaTrp3JAsJObZ2BZ40sCz4qfszJiBw%2BZ4nEo5IJIuNJ3RAAPYHo0NYfGY6l7Lx%2BtqH9o%2FheM4lQdx%2BLfil%2Fe9mX%2Bsa8QU%2FZR5X6rTjePVSqoZ9Q4YYiouQpBgoT6pNNYnATbYl9%2FJQUZ1cLH90kJyQjwZ%2F%2FvFLrU0pHOFg5J0LlWfzzIDX0C3XVioCwrUlM6pHew%2B3t1JHzqFKfFUPZwDf8uPyqjZqJveJrVicc6qaT9Dm2%2FKxEyWU1rKt49asxeoEUq670%2FhuHTr0MIzG8cQGOqUBpEuCsjKI6LjLilsN21%2BwBC9UYukceIHlB6mhkWD42K51kW4n7G8eQ4XIexA8UDSuMxvGiZZHKhfvDjWj%2BLqLT6KJpOiG8rPD9KDMN724Wkad6Ho9bM4yK%2Fv77SQ1wRDOOMOtCqQ%2FxJdznXLPzE5QuS0SdF%2ByrSdIWd9yAQl7HuLiFug8UtfLOWXj35VH6DzEa0Sd09alRrbz79%2F3UqX%2Fa4PvCDoj&X-Amz-Signature=64e37e625ac1607235315820e618f7d4aff27e3409a9ab1d067c6edb889b716a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWM5YIQQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FdkFPq8zrHJ1yzthRXO8NdJRxPfhtytbS3OAwfIEUEwIgGb85Fxq9kArq45zxRpjhNkxG1hEio7PtoBmBMV%2FyC5Qq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKDx3QJoXgUai6%2F3bSrcA0TMIWhOiQV5QitIOw%2FtLLnST6LRksI%2B0cp3dOjm4fwCkbjLvzQV8xJGGhqMD6ZUDGoJR9phz87DK6FJ35uzwLOccD%2FkHAw9ahqdbQl5U8dngOlJrrXgDzN%2B8x6S5sWzZPQCLZk5WrKgtedYGCwZ%2Bu9Vaf4Axc8QEcWLT1E1JVJu%2FI2S%2B8L17Z2ZTJlgKGUFaHd2%2FfZ8dxeTuSOxEo7%2BohyaKUVKUdfk52Q2NjeGdPTS5FtiDOIPESV%2BG8E98920JvIfh6Vz3XZ9xAPnpgbPzIDj5Ik0SOBHYQzBcTrk1Q2kstDFO70Ske9SJk79x6WycFVP%2Fcbyr8K%2B79PkQE2rjqzhj0FDWzxJVQpQBSVvxeTkt3WaTrp3JAsJObZ2BZ40sCz4qfszJiBw%2BZ4nEo5IJIuNJ3RAAPYHo0NYfGY6l7Lx%2BtqH9o%2FheM4lQdx%2BLfil%2Fe9mX%2Bsa8QU%2FZR5X6rTjePVSqoZ9Q4YYiouQpBgoT6pNNYnATbYl9%2FJQUZ1cLH90kJyQjwZ%2F%2FvFLrU0pHOFg5J0LlWfzzIDX0C3XVioCwrUlM6pHew%2B3t1JHzqFKfFUPZwDf8uPyqjZqJveJrVicc6qaT9Dm2%2FKxEyWU1rKt49asxeoEUq670%2FhuHTr0MIzG8cQGOqUBpEuCsjKI6LjLilsN21%2BwBC9UYukceIHlB6mhkWD42K51kW4n7G8eQ4XIexA8UDSuMxvGiZZHKhfvDjWj%2BLqLT6KJpOiG8rPD9KDMN724Wkad6Ho9bM4yK%2Fv77SQ1wRDOOMOtCqQ%2FxJdznXLPzE5QuS0SdF%2ByrSdIWd9yAQl7HuLiFug8UtfLOWXj35VH6DzEa0Sd09alRrbz79%2F3UqX%2Fa4PvCDoj&X-Amz-Signature=01fc55cc9c196193cdf364ba24b476132e733c25d96ca21c2626f56953305523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWM5YIQQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FdkFPq8zrHJ1yzthRXO8NdJRxPfhtytbS3OAwfIEUEwIgGb85Fxq9kArq45zxRpjhNkxG1hEio7PtoBmBMV%2FyC5Qq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKDx3QJoXgUai6%2F3bSrcA0TMIWhOiQV5QitIOw%2FtLLnST6LRksI%2B0cp3dOjm4fwCkbjLvzQV8xJGGhqMD6ZUDGoJR9phz87DK6FJ35uzwLOccD%2FkHAw9ahqdbQl5U8dngOlJrrXgDzN%2B8x6S5sWzZPQCLZk5WrKgtedYGCwZ%2Bu9Vaf4Axc8QEcWLT1E1JVJu%2FI2S%2B8L17Z2ZTJlgKGUFaHd2%2FfZ8dxeTuSOxEo7%2BohyaKUVKUdfk52Q2NjeGdPTS5FtiDOIPESV%2BG8E98920JvIfh6Vz3XZ9xAPnpgbPzIDj5Ik0SOBHYQzBcTrk1Q2kstDFO70Ske9SJk79x6WycFVP%2Fcbyr8K%2B79PkQE2rjqzhj0FDWzxJVQpQBSVvxeTkt3WaTrp3JAsJObZ2BZ40sCz4qfszJiBw%2BZ4nEo5IJIuNJ3RAAPYHo0NYfGY6l7Lx%2BtqH9o%2FheM4lQdx%2BLfil%2Fe9mX%2Bsa8QU%2FZR5X6rTjePVSqoZ9Q4YYiouQpBgoT6pNNYnATbYl9%2FJQUZ1cLH90kJyQjwZ%2F%2FvFLrU0pHOFg5J0LlWfzzIDX0C3XVioCwrUlM6pHew%2B3t1JHzqFKfFUPZwDf8uPyqjZqJveJrVicc6qaT9Dm2%2FKxEyWU1rKt49asxeoEUq670%2FhuHTr0MIzG8cQGOqUBpEuCsjKI6LjLilsN21%2BwBC9UYukceIHlB6mhkWD42K51kW4n7G8eQ4XIexA8UDSuMxvGiZZHKhfvDjWj%2BLqLT6KJpOiG8rPD9KDMN724Wkad6Ho9bM4yK%2Fv77SQ1wRDOOMOtCqQ%2FxJdznXLPzE5QuS0SdF%2ByrSdIWd9yAQl7HuLiFug8UtfLOWXj35VH6DzEa0Sd09alRrbz79%2F3UqX%2Fa4PvCDoj&X-Amz-Signature=fc72c394dc6e4bdfc2078fc9bb4957880f241e85281085905c7efff21d393dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWM5YIQQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FdkFPq8zrHJ1yzthRXO8NdJRxPfhtytbS3OAwfIEUEwIgGb85Fxq9kArq45zxRpjhNkxG1hEio7PtoBmBMV%2FyC5Qq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKDx3QJoXgUai6%2F3bSrcA0TMIWhOiQV5QitIOw%2FtLLnST6LRksI%2B0cp3dOjm4fwCkbjLvzQV8xJGGhqMD6ZUDGoJR9phz87DK6FJ35uzwLOccD%2FkHAw9ahqdbQl5U8dngOlJrrXgDzN%2B8x6S5sWzZPQCLZk5WrKgtedYGCwZ%2Bu9Vaf4Axc8QEcWLT1E1JVJu%2FI2S%2B8L17Z2ZTJlgKGUFaHd2%2FfZ8dxeTuSOxEo7%2BohyaKUVKUdfk52Q2NjeGdPTS5FtiDOIPESV%2BG8E98920JvIfh6Vz3XZ9xAPnpgbPzIDj5Ik0SOBHYQzBcTrk1Q2kstDFO70Ske9SJk79x6WycFVP%2Fcbyr8K%2B79PkQE2rjqzhj0FDWzxJVQpQBSVvxeTkt3WaTrp3JAsJObZ2BZ40sCz4qfszJiBw%2BZ4nEo5IJIuNJ3RAAPYHo0NYfGY6l7Lx%2BtqH9o%2FheM4lQdx%2BLfil%2Fe9mX%2Bsa8QU%2FZR5X6rTjePVSqoZ9Q4YYiouQpBgoT6pNNYnATbYl9%2FJQUZ1cLH90kJyQjwZ%2F%2FvFLrU0pHOFg5J0LlWfzzIDX0C3XVioCwrUlM6pHew%2B3t1JHzqFKfFUPZwDf8uPyqjZqJveJrVicc6qaT9Dm2%2FKxEyWU1rKt49asxeoEUq670%2FhuHTr0MIzG8cQGOqUBpEuCsjKI6LjLilsN21%2BwBC9UYukceIHlB6mhkWD42K51kW4n7G8eQ4XIexA8UDSuMxvGiZZHKhfvDjWj%2BLqLT6KJpOiG8rPD9KDMN724Wkad6Ho9bM4yK%2Fv77SQ1wRDOOMOtCqQ%2FxJdznXLPzE5QuS0SdF%2ByrSdIWd9yAQl7HuLiFug8UtfLOWXj35VH6DzEa0Sd09alRrbz79%2F3UqX%2Fa4PvCDoj&X-Amz-Signature=39f9933da98eec6f31e45bf5d4d2ac98f4369d7beec964888c17a6f80170806f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
