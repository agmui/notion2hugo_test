---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2R6SJIZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD6U7YEjGxHDTQcdG1t%2F3gV6Sx6WDeXflEe3LHPJ9jdigIgKRmi1DzrhN9Fx0m8UfSOmwXMKFkkZnEB98lo%2Bmcw5wYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCJB5DmXPvjCdH59ACrcAzDSzqZg5boJagnQ%2FBOJ19n168I0MptAENeO9TbqbYq0NJRZmgkHcG9eIkOhFzO%2Bc%2Frtyypk9kmypNDNIz42kdWPGlFw4ZURyIHlKShpWlhGM9sxWKRYDcT1HvUpFCMy0XZIm%2FOA7Gj7DFtE6YUUZP3KJJw3KJPO1Od3E%2FcPGUIrBGVutglvTFf1E8Mg9jf0QSLHRpJ%2FDVKuClHs%2BOUqg8qSIuo51PYIuWXVLixS7IA%2B9bCRYu3X1nmDnmn4HUY%2FMukORImwx46q5cFWWPuqMqcYzqPJeivE3sEyo5g7S3BIcPVCVRm1%2Baz5hNxf7jpbo9QXZw%2B%2F%2BFDKx6LUBAAohbL1Q2by26vFaCudrafaZQqJ8hA%2F0XFoDI4YiIz4KApH7qP4YDnr4hIC8R9oO2jo5UFDPcaQd%2F%2BAYm4A2wAtSWK77J8uDIl%2FXxyAHRTKCYMQ3y5ywAAE4ZOzXPFUEPaSFwThH8uFowNnGYlKXCGhg57x4pQmJVXKm5Tkb%2BF%2F65%2BNM%2FdRlhlrmnD4u%2F1PxUY1DBvhBqXBLYO21SS6kDKAlkOgv4gtLrAMNtrvTr7BICpZsLHYxSD5S3pgr%2FbXqaQeBOHweGHoOe%2FDuZWSAv%2FrHrDbIrvK4MjRdeLOvMYJMJCrksQGOqUBd1V0cWNsauS2KXOyig2d5SWiHLLPIGy8FzgC5%2BVLW0%2BJdcGDmqggs8Paiv3%2FD3oL42assTrU9rQf3SlejA4NEkOmYLqKl%2B0II4TcnClaI2vVsfOLGh95O1qmBUogQ%2Bl%2FaRSzrraTrIRBGBs0V1IEdJ4OIWJ9XnlN2t7yZvMCQYf3Xpi7WzMOyyre9IxyFKY8T88kziEUPAvXVlvAWsG%2BUrsHwQ%2F7&X-Amz-Signature=17bc292e17ff3e1d5e2cb41d59b4a3e85fa861b7b61744ffe75b7a315fa309db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2R6SJIZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD6U7YEjGxHDTQcdG1t%2F3gV6Sx6WDeXflEe3LHPJ9jdigIgKRmi1DzrhN9Fx0m8UfSOmwXMKFkkZnEB98lo%2Bmcw5wYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCJB5DmXPvjCdH59ACrcAzDSzqZg5boJagnQ%2FBOJ19n168I0MptAENeO9TbqbYq0NJRZmgkHcG9eIkOhFzO%2Bc%2Frtyypk9kmypNDNIz42kdWPGlFw4ZURyIHlKShpWlhGM9sxWKRYDcT1HvUpFCMy0XZIm%2FOA7Gj7DFtE6YUUZP3KJJw3KJPO1Od3E%2FcPGUIrBGVutglvTFf1E8Mg9jf0QSLHRpJ%2FDVKuClHs%2BOUqg8qSIuo51PYIuWXVLixS7IA%2B9bCRYu3X1nmDnmn4HUY%2FMukORImwx46q5cFWWPuqMqcYzqPJeivE3sEyo5g7S3BIcPVCVRm1%2Baz5hNxf7jpbo9QXZw%2B%2F%2BFDKx6LUBAAohbL1Q2by26vFaCudrafaZQqJ8hA%2F0XFoDI4YiIz4KApH7qP4YDnr4hIC8R9oO2jo5UFDPcaQd%2F%2BAYm4A2wAtSWK77J8uDIl%2FXxyAHRTKCYMQ3y5ywAAE4ZOzXPFUEPaSFwThH8uFowNnGYlKXCGhg57x4pQmJVXKm5Tkb%2BF%2F65%2BNM%2FdRlhlrmnD4u%2F1PxUY1DBvhBqXBLYO21SS6kDKAlkOgv4gtLrAMNtrvTr7BICpZsLHYxSD5S3pgr%2FbXqaQeBOHweGHoOe%2FDuZWSAv%2FrHrDbIrvK4MjRdeLOvMYJMJCrksQGOqUBd1V0cWNsauS2KXOyig2d5SWiHLLPIGy8FzgC5%2BVLW0%2BJdcGDmqggs8Paiv3%2FD3oL42assTrU9rQf3SlejA4NEkOmYLqKl%2B0II4TcnClaI2vVsfOLGh95O1qmBUogQ%2Bl%2FaRSzrraTrIRBGBs0V1IEdJ4OIWJ9XnlN2t7yZvMCQYf3Xpi7WzMOyyre9IxyFKY8T88kziEUPAvXVlvAWsG%2BUrsHwQ%2F7&X-Amz-Signature=5b43b07f9a8a875027181a05ab5e227f23152d0243036889fedfeaed16f07357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2R6SJIZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD6U7YEjGxHDTQcdG1t%2F3gV6Sx6WDeXflEe3LHPJ9jdigIgKRmi1DzrhN9Fx0m8UfSOmwXMKFkkZnEB98lo%2Bmcw5wYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCJB5DmXPvjCdH59ACrcAzDSzqZg5boJagnQ%2FBOJ19n168I0MptAENeO9TbqbYq0NJRZmgkHcG9eIkOhFzO%2Bc%2Frtyypk9kmypNDNIz42kdWPGlFw4ZURyIHlKShpWlhGM9sxWKRYDcT1HvUpFCMy0XZIm%2FOA7Gj7DFtE6YUUZP3KJJw3KJPO1Od3E%2FcPGUIrBGVutglvTFf1E8Mg9jf0QSLHRpJ%2FDVKuClHs%2BOUqg8qSIuo51PYIuWXVLixS7IA%2B9bCRYu3X1nmDnmn4HUY%2FMukORImwx46q5cFWWPuqMqcYzqPJeivE3sEyo5g7S3BIcPVCVRm1%2Baz5hNxf7jpbo9QXZw%2B%2F%2BFDKx6LUBAAohbL1Q2by26vFaCudrafaZQqJ8hA%2F0XFoDI4YiIz4KApH7qP4YDnr4hIC8R9oO2jo5UFDPcaQd%2F%2BAYm4A2wAtSWK77J8uDIl%2FXxyAHRTKCYMQ3y5ywAAE4ZOzXPFUEPaSFwThH8uFowNnGYlKXCGhg57x4pQmJVXKm5Tkb%2BF%2F65%2BNM%2FdRlhlrmnD4u%2F1PxUY1DBvhBqXBLYO21SS6kDKAlkOgv4gtLrAMNtrvTr7BICpZsLHYxSD5S3pgr%2FbXqaQeBOHweGHoOe%2FDuZWSAv%2FrHrDbIrvK4MjRdeLOvMYJMJCrksQGOqUBd1V0cWNsauS2KXOyig2d5SWiHLLPIGy8FzgC5%2BVLW0%2BJdcGDmqggs8Paiv3%2FD3oL42assTrU9rQf3SlejA4NEkOmYLqKl%2B0II4TcnClaI2vVsfOLGh95O1qmBUogQ%2Bl%2FaRSzrraTrIRBGBs0V1IEdJ4OIWJ9XnlN2t7yZvMCQYf3Xpi7WzMOyyre9IxyFKY8T88kziEUPAvXVlvAWsG%2BUrsHwQ%2F7&X-Amz-Signature=01d54e5e8b952b6196de41df2849c9f89ce9c2bb39d4b0a828f322f5d88dd703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2R6SJIZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD6U7YEjGxHDTQcdG1t%2F3gV6Sx6WDeXflEe3LHPJ9jdigIgKRmi1DzrhN9Fx0m8UfSOmwXMKFkkZnEB98lo%2Bmcw5wYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCJB5DmXPvjCdH59ACrcAzDSzqZg5boJagnQ%2FBOJ19n168I0MptAENeO9TbqbYq0NJRZmgkHcG9eIkOhFzO%2Bc%2Frtyypk9kmypNDNIz42kdWPGlFw4ZURyIHlKShpWlhGM9sxWKRYDcT1HvUpFCMy0XZIm%2FOA7Gj7DFtE6YUUZP3KJJw3KJPO1Od3E%2FcPGUIrBGVutglvTFf1E8Mg9jf0QSLHRpJ%2FDVKuClHs%2BOUqg8qSIuo51PYIuWXVLixS7IA%2B9bCRYu3X1nmDnmn4HUY%2FMukORImwx46q5cFWWPuqMqcYzqPJeivE3sEyo5g7S3BIcPVCVRm1%2Baz5hNxf7jpbo9QXZw%2B%2F%2BFDKx6LUBAAohbL1Q2by26vFaCudrafaZQqJ8hA%2F0XFoDI4YiIz4KApH7qP4YDnr4hIC8R9oO2jo5UFDPcaQd%2F%2BAYm4A2wAtSWK77J8uDIl%2FXxyAHRTKCYMQ3y5ywAAE4ZOzXPFUEPaSFwThH8uFowNnGYlKXCGhg57x4pQmJVXKm5Tkb%2BF%2F65%2BNM%2FdRlhlrmnD4u%2F1PxUY1DBvhBqXBLYO21SS6kDKAlkOgv4gtLrAMNtrvTr7BICpZsLHYxSD5S3pgr%2FbXqaQeBOHweGHoOe%2FDuZWSAv%2FrHrDbIrvK4MjRdeLOvMYJMJCrksQGOqUBd1V0cWNsauS2KXOyig2d5SWiHLLPIGy8FzgC5%2BVLW0%2BJdcGDmqggs8Paiv3%2FD3oL42assTrU9rQf3SlejA4NEkOmYLqKl%2B0II4TcnClaI2vVsfOLGh95O1qmBUogQ%2Bl%2FaRSzrraTrIRBGBs0V1IEdJ4OIWJ9XnlN2t7yZvMCQYf3Xpi7WzMOyyre9IxyFKY8T88kziEUPAvXVlvAWsG%2BUrsHwQ%2F7&X-Amz-Signature=973634c8f641406d1fed610d7a971521cb488c55f9d98faa0bf624eb4f67c49e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2R6SJIZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD6U7YEjGxHDTQcdG1t%2F3gV6Sx6WDeXflEe3LHPJ9jdigIgKRmi1DzrhN9Fx0m8UfSOmwXMKFkkZnEB98lo%2Bmcw5wYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCJB5DmXPvjCdH59ACrcAzDSzqZg5boJagnQ%2FBOJ19n168I0MptAENeO9TbqbYq0NJRZmgkHcG9eIkOhFzO%2Bc%2Frtyypk9kmypNDNIz42kdWPGlFw4ZURyIHlKShpWlhGM9sxWKRYDcT1HvUpFCMy0XZIm%2FOA7Gj7DFtE6YUUZP3KJJw3KJPO1Od3E%2FcPGUIrBGVutglvTFf1E8Mg9jf0QSLHRpJ%2FDVKuClHs%2BOUqg8qSIuo51PYIuWXVLixS7IA%2B9bCRYu3X1nmDnmn4HUY%2FMukORImwx46q5cFWWPuqMqcYzqPJeivE3sEyo5g7S3BIcPVCVRm1%2Baz5hNxf7jpbo9QXZw%2B%2F%2BFDKx6LUBAAohbL1Q2by26vFaCudrafaZQqJ8hA%2F0XFoDI4YiIz4KApH7qP4YDnr4hIC8R9oO2jo5UFDPcaQd%2F%2BAYm4A2wAtSWK77J8uDIl%2FXxyAHRTKCYMQ3y5ywAAE4ZOzXPFUEPaSFwThH8uFowNnGYlKXCGhg57x4pQmJVXKm5Tkb%2BF%2F65%2BNM%2FdRlhlrmnD4u%2F1PxUY1DBvhBqXBLYO21SS6kDKAlkOgv4gtLrAMNtrvTr7BICpZsLHYxSD5S3pgr%2FbXqaQeBOHweGHoOe%2FDuZWSAv%2FrHrDbIrvK4MjRdeLOvMYJMJCrksQGOqUBd1V0cWNsauS2KXOyig2d5SWiHLLPIGy8FzgC5%2BVLW0%2BJdcGDmqggs8Paiv3%2FD3oL42assTrU9rQf3SlejA4NEkOmYLqKl%2B0II4TcnClaI2vVsfOLGh95O1qmBUogQ%2Bl%2FaRSzrraTrIRBGBs0V1IEdJ4OIWJ9XnlN2t7yZvMCQYf3Xpi7WzMOyyre9IxyFKY8T88kziEUPAvXVlvAWsG%2BUrsHwQ%2F7&X-Amz-Signature=f5b84c12c35548bdf9bca863f63a9ab9cc25f16107047e6f311778c9793745e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2R6SJIZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD6U7YEjGxHDTQcdG1t%2F3gV6Sx6WDeXflEe3LHPJ9jdigIgKRmi1DzrhN9Fx0m8UfSOmwXMKFkkZnEB98lo%2Bmcw5wYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCJB5DmXPvjCdH59ACrcAzDSzqZg5boJagnQ%2FBOJ19n168I0MptAENeO9TbqbYq0NJRZmgkHcG9eIkOhFzO%2Bc%2Frtyypk9kmypNDNIz42kdWPGlFw4ZURyIHlKShpWlhGM9sxWKRYDcT1HvUpFCMy0XZIm%2FOA7Gj7DFtE6YUUZP3KJJw3KJPO1Od3E%2FcPGUIrBGVutglvTFf1E8Mg9jf0QSLHRpJ%2FDVKuClHs%2BOUqg8qSIuo51PYIuWXVLixS7IA%2B9bCRYu3X1nmDnmn4HUY%2FMukORImwx46q5cFWWPuqMqcYzqPJeivE3sEyo5g7S3BIcPVCVRm1%2Baz5hNxf7jpbo9QXZw%2B%2F%2BFDKx6LUBAAohbL1Q2by26vFaCudrafaZQqJ8hA%2F0XFoDI4YiIz4KApH7qP4YDnr4hIC8R9oO2jo5UFDPcaQd%2F%2BAYm4A2wAtSWK77J8uDIl%2FXxyAHRTKCYMQ3y5ywAAE4ZOzXPFUEPaSFwThH8uFowNnGYlKXCGhg57x4pQmJVXKm5Tkb%2BF%2F65%2BNM%2FdRlhlrmnD4u%2F1PxUY1DBvhBqXBLYO21SS6kDKAlkOgv4gtLrAMNtrvTr7BICpZsLHYxSD5S3pgr%2FbXqaQeBOHweGHoOe%2FDuZWSAv%2FrHrDbIrvK4MjRdeLOvMYJMJCrksQGOqUBd1V0cWNsauS2KXOyig2d5SWiHLLPIGy8FzgC5%2BVLW0%2BJdcGDmqggs8Paiv3%2FD3oL42assTrU9rQf3SlejA4NEkOmYLqKl%2B0II4TcnClaI2vVsfOLGh95O1qmBUogQ%2Bl%2FaRSzrraTrIRBGBs0V1IEdJ4OIWJ9XnlN2t7yZvMCQYf3Xpi7WzMOyyre9IxyFKY8T88kziEUPAvXVlvAWsG%2BUrsHwQ%2F7&X-Amz-Signature=a9125427c7501c35a92f6264f40c0e194b3873ae3eb2d6df3143e3a42ea97943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2R6SJIZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD6U7YEjGxHDTQcdG1t%2F3gV6Sx6WDeXflEe3LHPJ9jdigIgKRmi1DzrhN9Fx0m8UfSOmwXMKFkkZnEB98lo%2Bmcw5wYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCJB5DmXPvjCdH59ACrcAzDSzqZg5boJagnQ%2FBOJ19n168I0MptAENeO9TbqbYq0NJRZmgkHcG9eIkOhFzO%2Bc%2Frtyypk9kmypNDNIz42kdWPGlFw4ZURyIHlKShpWlhGM9sxWKRYDcT1HvUpFCMy0XZIm%2FOA7Gj7DFtE6YUUZP3KJJw3KJPO1Od3E%2FcPGUIrBGVutglvTFf1E8Mg9jf0QSLHRpJ%2FDVKuClHs%2BOUqg8qSIuo51PYIuWXVLixS7IA%2B9bCRYu3X1nmDnmn4HUY%2FMukORImwx46q5cFWWPuqMqcYzqPJeivE3sEyo5g7S3BIcPVCVRm1%2Baz5hNxf7jpbo9QXZw%2B%2F%2BFDKx6LUBAAohbL1Q2by26vFaCudrafaZQqJ8hA%2F0XFoDI4YiIz4KApH7qP4YDnr4hIC8R9oO2jo5UFDPcaQd%2F%2BAYm4A2wAtSWK77J8uDIl%2FXxyAHRTKCYMQ3y5ywAAE4ZOzXPFUEPaSFwThH8uFowNnGYlKXCGhg57x4pQmJVXKm5Tkb%2BF%2F65%2BNM%2FdRlhlrmnD4u%2F1PxUY1DBvhBqXBLYO21SS6kDKAlkOgv4gtLrAMNtrvTr7BICpZsLHYxSD5S3pgr%2FbXqaQeBOHweGHoOe%2FDuZWSAv%2FrHrDbIrvK4MjRdeLOvMYJMJCrksQGOqUBd1V0cWNsauS2KXOyig2d5SWiHLLPIGy8FzgC5%2BVLW0%2BJdcGDmqggs8Paiv3%2FD3oL42assTrU9rQf3SlejA4NEkOmYLqKl%2B0II4TcnClaI2vVsfOLGh95O1qmBUogQ%2Bl%2FaRSzrraTrIRBGBs0V1IEdJ4OIWJ9XnlN2t7yZvMCQYf3Xpi7WzMOyyre9IxyFKY8T88kziEUPAvXVlvAWsG%2BUrsHwQ%2F7&X-Amz-Signature=ebf99dfa8182f5fe7cebdd1d7d85eb6d29deaaebe16efa6a794b81a306f6d777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2R6SJIZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD6U7YEjGxHDTQcdG1t%2F3gV6Sx6WDeXflEe3LHPJ9jdigIgKRmi1DzrhN9Fx0m8UfSOmwXMKFkkZnEB98lo%2Bmcw5wYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCJB5DmXPvjCdH59ACrcAzDSzqZg5boJagnQ%2FBOJ19n168I0MptAENeO9TbqbYq0NJRZmgkHcG9eIkOhFzO%2Bc%2Frtyypk9kmypNDNIz42kdWPGlFw4ZURyIHlKShpWlhGM9sxWKRYDcT1HvUpFCMy0XZIm%2FOA7Gj7DFtE6YUUZP3KJJw3KJPO1Od3E%2FcPGUIrBGVutglvTFf1E8Mg9jf0QSLHRpJ%2FDVKuClHs%2BOUqg8qSIuo51PYIuWXVLixS7IA%2B9bCRYu3X1nmDnmn4HUY%2FMukORImwx46q5cFWWPuqMqcYzqPJeivE3sEyo5g7S3BIcPVCVRm1%2Baz5hNxf7jpbo9QXZw%2B%2F%2BFDKx6LUBAAohbL1Q2by26vFaCudrafaZQqJ8hA%2F0XFoDI4YiIz4KApH7qP4YDnr4hIC8R9oO2jo5UFDPcaQd%2F%2BAYm4A2wAtSWK77J8uDIl%2FXxyAHRTKCYMQ3y5ywAAE4ZOzXPFUEPaSFwThH8uFowNnGYlKXCGhg57x4pQmJVXKm5Tkb%2BF%2F65%2BNM%2FdRlhlrmnD4u%2F1PxUY1DBvhBqXBLYO21SS6kDKAlkOgv4gtLrAMNtrvTr7BICpZsLHYxSD5S3pgr%2FbXqaQeBOHweGHoOe%2FDuZWSAv%2FrHrDbIrvK4MjRdeLOvMYJMJCrksQGOqUBd1V0cWNsauS2KXOyig2d5SWiHLLPIGy8FzgC5%2BVLW0%2BJdcGDmqggs8Paiv3%2FD3oL42assTrU9rQf3SlejA4NEkOmYLqKl%2B0II4TcnClaI2vVsfOLGh95O1qmBUogQ%2Bl%2FaRSzrraTrIRBGBs0V1IEdJ4OIWJ9XnlN2t7yZvMCQYf3Xpi7WzMOyyre9IxyFKY8T88kziEUPAvXVlvAWsG%2BUrsHwQ%2F7&X-Amz-Signature=19b217ee7d59a331de2c557d6f32bfef8af6ee54e3a437e79dbe4276f95eaa9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2R6SJIZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD6U7YEjGxHDTQcdG1t%2F3gV6Sx6WDeXflEe3LHPJ9jdigIgKRmi1DzrhN9Fx0m8UfSOmwXMKFkkZnEB98lo%2Bmcw5wYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCJB5DmXPvjCdH59ACrcAzDSzqZg5boJagnQ%2FBOJ19n168I0MptAENeO9TbqbYq0NJRZmgkHcG9eIkOhFzO%2Bc%2Frtyypk9kmypNDNIz42kdWPGlFw4ZURyIHlKShpWlhGM9sxWKRYDcT1HvUpFCMy0XZIm%2FOA7Gj7DFtE6YUUZP3KJJw3KJPO1Od3E%2FcPGUIrBGVutglvTFf1E8Mg9jf0QSLHRpJ%2FDVKuClHs%2BOUqg8qSIuo51PYIuWXVLixS7IA%2B9bCRYu3X1nmDnmn4HUY%2FMukORImwx46q5cFWWPuqMqcYzqPJeivE3sEyo5g7S3BIcPVCVRm1%2Baz5hNxf7jpbo9QXZw%2B%2F%2BFDKx6LUBAAohbL1Q2by26vFaCudrafaZQqJ8hA%2F0XFoDI4YiIz4KApH7qP4YDnr4hIC8R9oO2jo5UFDPcaQd%2F%2BAYm4A2wAtSWK77J8uDIl%2FXxyAHRTKCYMQ3y5ywAAE4ZOzXPFUEPaSFwThH8uFowNnGYlKXCGhg57x4pQmJVXKm5Tkb%2BF%2F65%2BNM%2FdRlhlrmnD4u%2F1PxUY1DBvhBqXBLYO21SS6kDKAlkOgv4gtLrAMNtrvTr7BICpZsLHYxSD5S3pgr%2FbXqaQeBOHweGHoOe%2FDuZWSAv%2FrHrDbIrvK4MjRdeLOvMYJMJCrksQGOqUBd1V0cWNsauS2KXOyig2d5SWiHLLPIGy8FzgC5%2BVLW0%2BJdcGDmqggs8Paiv3%2FD3oL42assTrU9rQf3SlejA4NEkOmYLqKl%2B0II4TcnClaI2vVsfOLGh95O1qmBUogQ%2Bl%2FaRSzrraTrIRBGBs0V1IEdJ4OIWJ9XnlN2t7yZvMCQYf3Xpi7WzMOyyre9IxyFKY8T88kziEUPAvXVlvAWsG%2BUrsHwQ%2F7&X-Amz-Signature=7489a73cf696ba4ccb4d716e642567f955c26ece99a69e85395336a8e2c3bc79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2R6SJIZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD6U7YEjGxHDTQcdG1t%2F3gV6Sx6WDeXflEe3LHPJ9jdigIgKRmi1DzrhN9Fx0m8UfSOmwXMKFkkZnEB98lo%2Bmcw5wYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCJB5DmXPvjCdH59ACrcAzDSzqZg5boJagnQ%2FBOJ19n168I0MptAENeO9TbqbYq0NJRZmgkHcG9eIkOhFzO%2Bc%2Frtyypk9kmypNDNIz42kdWPGlFw4ZURyIHlKShpWlhGM9sxWKRYDcT1HvUpFCMy0XZIm%2FOA7Gj7DFtE6YUUZP3KJJw3KJPO1Od3E%2FcPGUIrBGVutglvTFf1E8Mg9jf0QSLHRpJ%2FDVKuClHs%2BOUqg8qSIuo51PYIuWXVLixS7IA%2B9bCRYu3X1nmDnmn4HUY%2FMukORImwx46q5cFWWPuqMqcYzqPJeivE3sEyo5g7S3BIcPVCVRm1%2Baz5hNxf7jpbo9QXZw%2B%2F%2BFDKx6LUBAAohbL1Q2by26vFaCudrafaZQqJ8hA%2F0XFoDI4YiIz4KApH7qP4YDnr4hIC8R9oO2jo5UFDPcaQd%2F%2BAYm4A2wAtSWK77J8uDIl%2FXxyAHRTKCYMQ3y5ywAAE4ZOzXPFUEPaSFwThH8uFowNnGYlKXCGhg57x4pQmJVXKm5Tkb%2BF%2F65%2BNM%2FdRlhlrmnD4u%2F1PxUY1DBvhBqXBLYO21SS6kDKAlkOgv4gtLrAMNtrvTr7BICpZsLHYxSD5S3pgr%2FbXqaQeBOHweGHoOe%2FDuZWSAv%2FrHrDbIrvK4MjRdeLOvMYJMJCrksQGOqUBd1V0cWNsauS2KXOyig2d5SWiHLLPIGy8FzgC5%2BVLW0%2BJdcGDmqggs8Paiv3%2FD3oL42assTrU9rQf3SlejA4NEkOmYLqKl%2B0II4TcnClaI2vVsfOLGh95O1qmBUogQ%2Bl%2FaRSzrraTrIRBGBs0V1IEdJ4OIWJ9XnlN2t7yZvMCQYf3Xpi7WzMOyyre9IxyFKY8T88kziEUPAvXVlvAWsG%2BUrsHwQ%2F7&X-Amz-Signature=f68524cfb464e1b87951654c34141df3974962a582b61e559c1d9cd7b4e4f5c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

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
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2R6SJIZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD6U7YEjGxHDTQcdG1t%2F3gV6Sx6WDeXflEe3LHPJ9jdigIgKRmi1DzrhN9Fx0m8UfSOmwXMKFkkZnEB98lo%2Bmcw5wYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCJB5DmXPvjCdH59ACrcAzDSzqZg5boJagnQ%2FBOJ19n168I0MptAENeO9TbqbYq0NJRZmgkHcG9eIkOhFzO%2Bc%2Frtyypk9kmypNDNIz42kdWPGlFw4ZURyIHlKShpWlhGM9sxWKRYDcT1HvUpFCMy0XZIm%2FOA7Gj7DFtE6YUUZP3KJJw3KJPO1Od3E%2FcPGUIrBGVutglvTFf1E8Mg9jf0QSLHRpJ%2FDVKuClHs%2BOUqg8qSIuo51PYIuWXVLixS7IA%2B9bCRYu3X1nmDnmn4HUY%2FMukORImwx46q5cFWWPuqMqcYzqPJeivE3sEyo5g7S3BIcPVCVRm1%2Baz5hNxf7jpbo9QXZw%2B%2F%2BFDKx6LUBAAohbL1Q2by26vFaCudrafaZQqJ8hA%2F0XFoDI4YiIz4KApH7qP4YDnr4hIC8R9oO2jo5UFDPcaQd%2F%2BAYm4A2wAtSWK77J8uDIl%2FXxyAHRTKCYMQ3y5ywAAE4ZOzXPFUEPaSFwThH8uFowNnGYlKXCGhg57x4pQmJVXKm5Tkb%2BF%2F65%2BNM%2FdRlhlrmnD4u%2F1PxUY1DBvhBqXBLYO21SS6kDKAlkOgv4gtLrAMNtrvTr7BICpZsLHYxSD5S3pgr%2FbXqaQeBOHweGHoOe%2FDuZWSAv%2FrHrDbIrvK4MjRdeLOvMYJMJCrksQGOqUBd1V0cWNsauS2KXOyig2d5SWiHLLPIGy8FzgC5%2BVLW0%2BJdcGDmqggs8Paiv3%2FD3oL42assTrU9rQf3SlejA4NEkOmYLqKl%2B0II4TcnClaI2vVsfOLGh95O1qmBUogQ%2Bl%2FaRSzrraTrIRBGBs0V1IEdJ4OIWJ9XnlN2t7yZvMCQYf3Xpi7WzMOyyre9IxyFKY8T88kziEUPAvXVlvAWsG%2BUrsHwQ%2F7&X-Amz-Signature=2153a888bccca1bb2668f929c745a695772759af5f35b3375eb0faa7c7b2cc9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2R6SJIZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD6U7YEjGxHDTQcdG1t%2F3gV6Sx6WDeXflEe3LHPJ9jdigIgKRmi1DzrhN9Fx0m8UfSOmwXMKFkkZnEB98lo%2Bmcw5wYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCJB5DmXPvjCdH59ACrcAzDSzqZg5boJagnQ%2FBOJ19n168I0MptAENeO9TbqbYq0NJRZmgkHcG9eIkOhFzO%2Bc%2Frtyypk9kmypNDNIz42kdWPGlFw4ZURyIHlKShpWlhGM9sxWKRYDcT1HvUpFCMy0XZIm%2FOA7Gj7DFtE6YUUZP3KJJw3KJPO1Od3E%2FcPGUIrBGVutglvTFf1E8Mg9jf0QSLHRpJ%2FDVKuClHs%2BOUqg8qSIuo51PYIuWXVLixS7IA%2B9bCRYu3X1nmDnmn4HUY%2FMukORImwx46q5cFWWPuqMqcYzqPJeivE3sEyo5g7S3BIcPVCVRm1%2Baz5hNxf7jpbo9QXZw%2B%2F%2BFDKx6LUBAAohbL1Q2by26vFaCudrafaZQqJ8hA%2F0XFoDI4YiIz4KApH7qP4YDnr4hIC8R9oO2jo5UFDPcaQd%2F%2BAYm4A2wAtSWK77J8uDIl%2FXxyAHRTKCYMQ3y5ywAAE4ZOzXPFUEPaSFwThH8uFowNnGYlKXCGhg57x4pQmJVXKm5Tkb%2BF%2F65%2BNM%2FdRlhlrmnD4u%2F1PxUY1DBvhBqXBLYO21SS6kDKAlkOgv4gtLrAMNtrvTr7BICpZsLHYxSD5S3pgr%2FbXqaQeBOHweGHoOe%2FDuZWSAv%2FrHrDbIrvK4MjRdeLOvMYJMJCrksQGOqUBd1V0cWNsauS2KXOyig2d5SWiHLLPIGy8FzgC5%2BVLW0%2BJdcGDmqggs8Paiv3%2FD3oL42assTrU9rQf3SlejA4NEkOmYLqKl%2B0II4TcnClaI2vVsfOLGh95O1qmBUogQ%2Bl%2FaRSzrraTrIRBGBs0V1IEdJ4OIWJ9XnlN2t7yZvMCQYf3Xpi7WzMOyyre9IxyFKY8T88kziEUPAvXVlvAWsG%2BUrsHwQ%2F7&X-Amz-Signature=6ecc0a24c28809e5717071dc5efc36ec7818f496824183daf5740d743686aaef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2R6SJIZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD6U7YEjGxHDTQcdG1t%2F3gV6Sx6WDeXflEe3LHPJ9jdigIgKRmi1DzrhN9Fx0m8UfSOmwXMKFkkZnEB98lo%2Bmcw5wYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCJB5DmXPvjCdH59ACrcAzDSzqZg5boJagnQ%2FBOJ19n168I0MptAENeO9TbqbYq0NJRZmgkHcG9eIkOhFzO%2Bc%2Frtyypk9kmypNDNIz42kdWPGlFw4ZURyIHlKShpWlhGM9sxWKRYDcT1HvUpFCMy0XZIm%2FOA7Gj7DFtE6YUUZP3KJJw3KJPO1Od3E%2FcPGUIrBGVutglvTFf1E8Mg9jf0QSLHRpJ%2FDVKuClHs%2BOUqg8qSIuo51PYIuWXVLixS7IA%2B9bCRYu3X1nmDnmn4HUY%2FMukORImwx46q5cFWWPuqMqcYzqPJeivE3sEyo5g7S3BIcPVCVRm1%2Baz5hNxf7jpbo9QXZw%2B%2F%2BFDKx6LUBAAohbL1Q2by26vFaCudrafaZQqJ8hA%2F0XFoDI4YiIz4KApH7qP4YDnr4hIC8R9oO2jo5UFDPcaQd%2F%2BAYm4A2wAtSWK77J8uDIl%2FXxyAHRTKCYMQ3y5ywAAE4ZOzXPFUEPaSFwThH8uFowNnGYlKXCGhg57x4pQmJVXKm5Tkb%2BF%2F65%2BNM%2FdRlhlrmnD4u%2F1PxUY1DBvhBqXBLYO21SS6kDKAlkOgv4gtLrAMNtrvTr7BICpZsLHYxSD5S3pgr%2FbXqaQeBOHweGHoOe%2FDuZWSAv%2FrHrDbIrvK4MjRdeLOvMYJMJCrksQGOqUBd1V0cWNsauS2KXOyig2d5SWiHLLPIGy8FzgC5%2BVLW0%2BJdcGDmqggs8Paiv3%2FD3oL42assTrU9rQf3SlejA4NEkOmYLqKl%2B0II4TcnClaI2vVsfOLGh95O1qmBUogQ%2Bl%2FaRSzrraTrIRBGBs0V1IEdJ4OIWJ9XnlN2t7yZvMCQYf3Xpi7WzMOyyre9IxyFKY8T88kziEUPAvXVlvAWsG%2BUrsHwQ%2F7&X-Amz-Signature=839901a878bf2782b5973cd10c256366b95c0ffc0132725bfd4e86a2d0d13913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2R6SJIZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD6U7YEjGxHDTQcdG1t%2F3gV6Sx6WDeXflEe3LHPJ9jdigIgKRmi1DzrhN9Fx0m8UfSOmwXMKFkkZnEB98lo%2Bmcw5wYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCJB5DmXPvjCdH59ACrcAzDSzqZg5boJagnQ%2FBOJ19n168I0MptAENeO9TbqbYq0NJRZmgkHcG9eIkOhFzO%2Bc%2Frtyypk9kmypNDNIz42kdWPGlFw4ZURyIHlKShpWlhGM9sxWKRYDcT1HvUpFCMy0XZIm%2FOA7Gj7DFtE6YUUZP3KJJw3KJPO1Od3E%2FcPGUIrBGVutglvTFf1E8Mg9jf0QSLHRpJ%2FDVKuClHs%2BOUqg8qSIuo51PYIuWXVLixS7IA%2B9bCRYu3X1nmDnmn4HUY%2FMukORImwx46q5cFWWPuqMqcYzqPJeivE3sEyo5g7S3BIcPVCVRm1%2Baz5hNxf7jpbo9QXZw%2B%2F%2BFDKx6LUBAAohbL1Q2by26vFaCudrafaZQqJ8hA%2F0XFoDI4YiIz4KApH7qP4YDnr4hIC8R9oO2jo5UFDPcaQd%2F%2BAYm4A2wAtSWK77J8uDIl%2FXxyAHRTKCYMQ3y5ywAAE4ZOzXPFUEPaSFwThH8uFowNnGYlKXCGhg57x4pQmJVXKm5Tkb%2BF%2F65%2BNM%2FdRlhlrmnD4u%2F1PxUY1DBvhBqXBLYO21SS6kDKAlkOgv4gtLrAMNtrvTr7BICpZsLHYxSD5S3pgr%2FbXqaQeBOHweGHoOe%2FDuZWSAv%2FrHrDbIrvK4MjRdeLOvMYJMJCrksQGOqUBd1V0cWNsauS2KXOyig2d5SWiHLLPIGy8FzgC5%2BVLW0%2BJdcGDmqggs8Paiv3%2FD3oL42assTrU9rQf3SlejA4NEkOmYLqKl%2B0II4TcnClaI2vVsfOLGh95O1qmBUogQ%2Bl%2FaRSzrraTrIRBGBs0V1IEdJ4OIWJ9XnlN2t7yZvMCQYf3Xpi7WzMOyyre9IxyFKY8T88kziEUPAvXVlvAWsG%2BUrsHwQ%2F7&X-Amz-Signature=c5cf76e86a8a5de6493accbe772cb1d48a647975c6749374cb964ed553292dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSWGBIM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHVFlHdanFg9oreAVjpL8Blp1W2xbymQ0oO9zEHVn7PQAiAF8Xq9C3dgMVfKUixste3H1TJ5gR10s1mW7%2BLgWLX1Pyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMpRt1bQxOBcmy5GPdKtwDm2OozWERLCWt%2Bj%2FzLUhW9wLRMkPmjmH%2BI7iuDw74RmbkmhhG3YsiYHJzM%2F%2F8mxIDE0snr9rvB1WOAGYz9v7ZE3Nm8kOD5cUIWzOsL3jhuUII31xQ%2Fdcptw0rQNtazMpGfXUxYkDvorU3T6SVPEdOwS%2FVkNiYuCV9CbsHkqR0iSAwrElaw21M%2FHZUy5wfnNHT%2FKzA6IVPtttP26gWidLxQI7PaDQTQs9FeeA1uj5DZQzEKoRcWbMBMClEqRNFqbTTCgnZEKo5ist%2BOdI8jY10ZTBOW%2FSwqDltrc1GcbuWRwKXyyXaxIrKZdapOfW2ZfZO8PcVGot%2BGtRgSCPNzNyC6OiYdv1GbZdqAShccizxHStRJaFxUhzo4v44YtOx8o%2Fa%2FpLcF685FNP2EeMa%2BjtpNBJO1ho9cgUmaLETNIfksr9R44m4mH%2FS3eQpUiRAPmuHv4n9gDfjLapeCLI1qQADKTHpn2HupCkN6g47WVrISp7ZB8bkptr0tgQ80GuZj3amQOmtwwMNyHAKO4%2FfmzclHOtcQ50ZHAV6k%2BbrOLIVHoBL2zO4Y06Kl9ht7jhpFYf%2FbfTUDTnqO6%2FhbqNBUfqSg77MWMXgxiHMumeou3lj69KK7%2BE%2B8eAeasPHWuQwsauSxAY6pgHGHD%2BmvlbyZeRXflBvmTCl1RH4C0ZTZ5C9KbEt%2FCS6V%2BE1jIQee%2FVSlmYJetX7AZI295aMHcrjKxceY03cRZqA5EXmplNtueFcLUStNNpW%2BnwEQIcrlbnKpnMeziS4HrXeDzjYj01yHrBLlM1yfN73uWc%2FYzvOTBq%2BCc6%2FSWXv9SuKv59qlcUnJUO3b89%2BfJy5qrLaa60LRqgo18ZXSiTZR%2BfvCaSQ&X-Amz-Signature=f80d19eab0af71568bc54ad2705fcc2e3c881565964ef1fae19a40fe9d9e6b55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSWGBIM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHVFlHdanFg9oreAVjpL8Blp1W2xbymQ0oO9zEHVn7PQAiAF8Xq9C3dgMVfKUixste3H1TJ5gR10s1mW7%2BLgWLX1Pyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMpRt1bQxOBcmy5GPdKtwDm2OozWERLCWt%2Bj%2FzLUhW9wLRMkPmjmH%2BI7iuDw74RmbkmhhG3YsiYHJzM%2F%2F8mxIDE0snr9rvB1WOAGYz9v7ZE3Nm8kOD5cUIWzOsL3jhuUII31xQ%2Fdcptw0rQNtazMpGfXUxYkDvorU3T6SVPEdOwS%2FVkNiYuCV9CbsHkqR0iSAwrElaw21M%2FHZUy5wfnNHT%2FKzA6IVPtttP26gWidLxQI7PaDQTQs9FeeA1uj5DZQzEKoRcWbMBMClEqRNFqbTTCgnZEKo5ist%2BOdI8jY10ZTBOW%2FSwqDltrc1GcbuWRwKXyyXaxIrKZdapOfW2ZfZO8PcVGot%2BGtRgSCPNzNyC6OiYdv1GbZdqAShccizxHStRJaFxUhzo4v44YtOx8o%2Fa%2FpLcF685FNP2EeMa%2BjtpNBJO1ho9cgUmaLETNIfksr9R44m4mH%2FS3eQpUiRAPmuHv4n9gDfjLapeCLI1qQADKTHpn2HupCkN6g47WVrISp7ZB8bkptr0tgQ80GuZj3amQOmtwwMNyHAKO4%2FfmzclHOtcQ50ZHAV6k%2BbrOLIVHoBL2zO4Y06Kl9ht7jhpFYf%2FbfTUDTnqO6%2FhbqNBUfqSg77MWMXgxiHMumeou3lj69KK7%2BE%2B8eAeasPHWuQwsauSxAY6pgHGHD%2BmvlbyZeRXflBvmTCl1RH4C0ZTZ5C9KbEt%2FCS6V%2BE1jIQee%2FVSlmYJetX7AZI295aMHcrjKxceY03cRZqA5EXmplNtueFcLUStNNpW%2BnwEQIcrlbnKpnMeziS4HrXeDzjYj01yHrBLlM1yfN73uWc%2FYzvOTBq%2BCc6%2FSWXv9SuKv59qlcUnJUO3b89%2BfJy5qrLaa60LRqgo18ZXSiTZR%2BfvCaSQ&X-Amz-Signature=cfdf34b99ce4176050de3e42a904d839e35cb36bcd5dcb7de7991da64a344539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      TODO:
  </details>

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

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSWGBIM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHVFlHdanFg9oreAVjpL8Blp1W2xbymQ0oO9zEHVn7PQAiAF8Xq9C3dgMVfKUixste3H1TJ5gR10s1mW7%2BLgWLX1Pyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMpRt1bQxOBcmy5GPdKtwDm2OozWERLCWt%2Bj%2FzLUhW9wLRMkPmjmH%2BI7iuDw74RmbkmhhG3YsiYHJzM%2F%2F8mxIDE0snr9rvB1WOAGYz9v7ZE3Nm8kOD5cUIWzOsL3jhuUII31xQ%2Fdcptw0rQNtazMpGfXUxYkDvorU3T6SVPEdOwS%2FVkNiYuCV9CbsHkqR0iSAwrElaw21M%2FHZUy5wfnNHT%2FKzA6IVPtttP26gWidLxQI7PaDQTQs9FeeA1uj5DZQzEKoRcWbMBMClEqRNFqbTTCgnZEKo5ist%2BOdI8jY10ZTBOW%2FSwqDltrc1GcbuWRwKXyyXaxIrKZdapOfW2ZfZO8PcVGot%2BGtRgSCPNzNyC6OiYdv1GbZdqAShccizxHStRJaFxUhzo4v44YtOx8o%2Fa%2FpLcF685FNP2EeMa%2BjtpNBJO1ho9cgUmaLETNIfksr9R44m4mH%2FS3eQpUiRAPmuHv4n9gDfjLapeCLI1qQADKTHpn2HupCkN6g47WVrISp7ZB8bkptr0tgQ80GuZj3amQOmtwwMNyHAKO4%2FfmzclHOtcQ50ZHAV6k%2BbrOLIVHoBL2zO4Y06Kl9ht7jhpFYf%2FbfTUDTnqO6%2FhbqNBUfqSg77MWMXgxiHMumeou3lj69KK7%2BE%2B8eAeasPHWuQwsauSxAY6pgHGHD%2BmvlbyZeRXflBvmTCl1RH4C0ZTZ5C9KbEt%2FCS6V%2BE1jIQee%2FVSlmYJetX7AZI295aMHcrjKxceY03cRZqA5EXmplNtueFcLUStNNpW%2BnwEQIcrlbnKpnMeziS4HrXeDzjYj01yHrBLlM1yfN73uWc%2FYzvOTBq%2BCc6%2FSWXv9SuKv59qlcUnJUO3b89%2BfJy5qrLaa60LRqgo18ZXSiTZR%2BfvCaSQ&X-Amz-Signature=c8bf274066536b606f22d900f9034b544c2e4e71e8e51b5f557fa6bf66b53edc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSWGBIM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHVFlHdanFg9oreAVjpL8Blp1W2xbymQ0oO9zEHVn7PQAiAF8Xq9C3dgMVfKUixste3H1TJ5gR10s1mW7%2BLgWLX1Pyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMpRt1bQxOBcmy5GPdKtwDm2OozWERLCWt%2Bj%2FzLUhW9wLRMkPmjmH%2BI7iuDw74RmbkmhhG3YsiYHJzM%2F%2F8mxIDE0snr9rvB1WOAGYz9v7ZE3Nm8kOD5cUIWzOsL3jhuUII31xQ%2Fdcptw0rQNtazMpGfXUxYkDvorU3T6SVPEdOwS%2FVkNiYuCV9CbsHkqR0iSAwrElaw21M%2FHZUy5wfnNHT%2FKzA6IVPtttP26gWidLxQI7PaDQTQs9FeeA1uj5DZQzEKoRcWbMBMClEqRNFqbTTCgnZEKo5ist%2BOdI8jY10ZTBOW%2FSwqDltrc1GcbuWRwKXyyXaxIrKZdapOfW2ZfZO8PcVGot%2BGtRgSCPNzNyC6OiYdv1GbZdqAShccizxHStRJaFxUhzo4v44YtOx8o%2Fa%2FpLcF685FNP2EeMa%2BjtpNBJO1ho9cgUmaLETNIfksr9R44m4mH%2FS3eQpUiRAPmuHv4n9gDfjLapeCLI1qQADKTHpn2HupCkN6g47WVrISp7ZB8bkptr0tgQ80GuZj3amQOmtwwMNyHAKO4%2FfmzclHOtcQ50ZHAV6k%2BbrOLIVHoBL2zO4Y06Kl9ht7jhpFYf%2FbfTUDTnqO6%2FhbqNBUfqSg77MWMXgxiHMumeou3lj69KK7%2BE%2B8eAeasPHWuQwsauSxAY6pgHGHD%2BmvlbyZeRXflBvmTCl1RH4C0ZTZ5C9KbEt%2FCS6V%2BE1jIQee%2FVSlmYJetX7AZI295aMHcrjKxceY03cRZqA5EXmplNtueFcLUStNNpW%2BnwEQIcrlbnKpnMeziS4HrXeDzjYj01yHrBLlM1yfN73uWc%2FYzvOTBq%2BCc6%2FSWXv9SuKv59qlcUnJUO3b89%2BfJy5qrLaa60LRqgo18ZXSiTZR%2BfvCaSQ&X-Amz-Signature=a851c3f13508c59049cb63fe74247d495a31aeead268229671198f00185c354e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSWGBIM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHVFlHdanFg9oreAVjpL8Blp1W2xbymQ0oO9zEHVn7PQAiAF8Xq9C3dgMVfKUixste3H1TJ5gR10s1mW7%2BLgWLX1Pyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMpRt1bQxOBcmy5GPdKtwDm2OozWERLCWt%2Bj%2FzLUhW9wLRMkPmjmH%2BI7iuDw74RmbkmhhG3YsiYHJzM%2F%2F8mxIDE0snr9rvB1WOAGYz9v7ZE3Nm8kOD5cUIWzOsL3jhuUII31xQ%2Fdcptw0rQNtazMpGfXUxYkDvorU3T6SVPEdOwS%2FVkNiYuCV9CbsHkqR0iSAwrElaw21M%2FHZUy5wfnNHT%2FKzA6IVPtttP26gWidLxQI7PaDQTQs9FeeA1uj5DZQzEKoRcWbMBMClEqRNFqbTTCgnZEKo5ist%2BOdI8jY10ZTBOW%2FSwqDltrc1GcbuWRwKXyyXaxIrKZdapOfW2ZfZO8PcVGot%2BGtRgSCPNzNyC6OiYdv1GbZdqAShccizxHStRJaFxUhzo4v44YtOx8o%2Fa%2FpLcF685FNP2EeMa%2BjtpNBJO1ho9cgUmaLETNIfksr9R44m4mH%2FS3eQpUiRAPmuHv4n9gDfjLapeCLI1qQADKTHpn2HupCkN6g47WVrISp7ZB8bkptr0tgQ80GuZj3amQOmtwwMNyHAKO4%2FfmzclHOtcQ50ZHAV6k%2BbrOLIVHoBL2zO4Y06Kl9ht7jhpFYf%2FbfTUDTnqO6%2FhbqNBUfqSg77MWMXgxiHMumeou3lj69KK7%2BE%2B8eAeasPHWuQwsauSxAY6pgHGHD%2BmvlbyZeRXflBvmTCl1RH4C0ZTZ5C9KbEt%2FCS6V%2BE1jIQee%2FVSlmYJetX7AZI295aMHcrjKxceY03cRZqA5EXmplNtueFcLUStNNpW%2BnwEQIcrlbnKpnMeziS4HrXeDzjYj01yHrBLlM1yfN73uWc%2FYzvOTBq%2BCc6%2FSWXv9SuKv59qlcUnJUO3b89%2BfJy5qrLaa60LRqgo18ZXSiTZR%2BfvCaSQ&X-Amz-Signature=212bd742160da9740c0e6608e05d42ff3fda9f917b165809ad85e1157a1cbda6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSWGBIM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHVFlHdanFg9oreAVjpL8Blp1W2xbymQ0oO9zEHVn7PQAiAF8Xq9C3dgMVfKUixste3H1TJ5gR10s1mW7%2BLgWLX1Pyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMpRt1bQxOBcmy5GPdKtwDm2OozWERLCWt%2Bj%2FzLUhW9wLRMkPmjmH%2BI7iuDw74RmbkmhhG3YsiYHJzM%2F%2F8mxIDE0snr9rvB1WOAGYz9v7ZE3Nm8kOD5cUIWzOsL3jhuUII31xQ%2Fdcptw0rQNtazMpGfXUxYkDvorU3T6SVPEdOwS%2FVkNiYuCV9CbsHkqR0iSAwrElaw21M%2FHZUy5wfnNHT%2FKzA6IVPtttP26gWidLxQI7PaDQTQs9FeeA1uj5DZQzEKoRcWbMBMClEqRNFqbTTCgnZEKo5ist%2BOdI8jY10ZTBOW%2FSwqDltrc1GcbuWRwKXyyXaxIrKZdapOfW2ZfZO8PcVGot%2BGtRgSCPNzNyC6OiYdv1GbZdqAShccizxHStRJaFxUhzo4v44YtOx8o%2Fa%2FpLcF685FNP2EeMa%2BjtpNBJO1ho9cgUmaLETNIfksr9R44m4mH%2FS3eQpUiRAPmuHv4n9gDfjLapeCLI1qQADKTHpn2HupCkN6g47WVrISp7ZB8bkptr0tgQ80GuZj3amQOmtwwMNyHAKO4%2FfmzclHOtcQ50ZHAV6k%2BbrOLIVHoBL2zO4Y06Kl9ht7jhpFYf%2FbfTUDTnqO6%2FhbqNBUfqSg77MWMXgxiHMumeou3lj69KK7%2BE%2B8eAeasPHWuQwsauSxAY6pgHGHD%2BmvlbyZeRXflBvmTCl1RH4C0ZTZ5C9KbEt%2FCS6V%2BE1jIQee%2FVSlmYJetX7AZI295aMHcrjKxceY03cRZqA5EXmplNtueFcLUStNNpW%2BnwEQIcrlbnKpnMeziS4HrXeDzjYj01yHrBLlM1yfN73uWc%2FYzvOTBq%2BCc6%2FSWXv9SuKv59qlcUnJUO3b89%2BfJy5qrLaa60LRqgo18ZXSiTZR%2BfvCaSQ&X-Amz-Signature=4d2406bf365b0724ec456c587532f71e7ff6ef3f3036bfb685265717c6448855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
