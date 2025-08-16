---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-16T13:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-16T13:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=4f2fd83e49b77e8e0b2fb8cc264105fd7a17bb585c33a5564391e461c98e3ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=79369ff665b7504b9b18ecd1da43370f309bd21671c2e2382e7f2d3d2e181d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=3fd21ddee9beb45013ebebb899cf9fc45c9df3779c06626b7c66acdf9059d643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=7b0b0097bb395d9da4e64179370cecc6d54405ce7cdc9e65f14d1f932d4f44a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=e5c86150f59ad0a70deaf3127918fab913bd4c2f0c525f4a022daf89c245c332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=32e9d4263570e36ebca3e89b35f2426ab8836c9fe55266b2dcaabc08e74365e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=b1de6145edef03e443d89f005e56ac6a3d1606937b43bcdffccf8c67373f5fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=c7808efeba9f23c94502319fa9ac1e936cb8f9bbae7b6e4542f902ad1eaccb9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=f0e034872a66fd80a75f007e000b108ea6bcc581f1ab448a97cc914147667b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=83cf029dd1d83f00b9c6c9f49497ac67c5bb5c7cbdba3246f7eb9d5e57f5f324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start add these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H2FQNRN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGDutkHjHc80oZ%2FdWwqL0QxVCFxkxNZJ3puRL6C%2BpHZHAiBbCwxVeLTARG78uqat%2Bwn7ILwGyEwU%2Fuvml84gv7K1Rir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMETMRiCWV6sxDpHkBKtwDdeXtnBWHK5vpOq8DeUNXzhEx1PG7OP8KZrU3wbUyIsThTcyxrYB%2BX%2FpS7Nftl6FZt4kDuLliFHj9%2BuqRmrUs3QG%2BQ%2BLfpo9nEH%2BCD6li6jZV%2Bg7FP12YZ6cfEBaFwC6H51lgWBw%2Bs4zxmlwseE%2F03owuHwArEHOwSr1GWMn8OLxw7418%2Flr1Ox1pcfsxFOXehlSL4ivbNe32W81t0Cg3A8tuq6qT0NWmn42iJ8D2HLFOWT8D0ZWvLmhk9O6Sbq17sqH72pmvuaKtH%2BRq%2BZvnW2CG%2FRtNgfzEH5aiwUEgNFsm9GdKadkH6oXRmQaEVfAaB3CnEOafzPRak2IbvgUJ7dnuPUW4NFRhHBJUNdVd5AaFyGSBM6fLETIjSttmpOft%2FfUezum%2F1UCR53UGXUhVqJcnbZYIARTrVxHfqEbe%2BHyfT3bmQH3prbntBCFK7FoWUhE64MFv9H1ckfhYsDQVTS4x27USEFYBuYwQud%2B1N2yfcwknhI%2FPg%2Fg3te%2BlpSUVUtHe3box1Z72VualCxrS3uPANXOt1%2FUgr%2B7XeVYKiO7EYrz8mT1FpB%2BBeTJ797YtrcBm6isvby%2BblHGdYmd7dJnR6O3FwqQ1D57qUDNq%2FIzNk4yyfBO%2BApHZp%2FIwt5KCxQY6pgGr3iQOP9nBa2SKU36MXfrStBjC5UyVPCsLu%2BpMuDNlGgZNQBiJfNL8AH0R440PHTNiBzZhZJYY%2FrBk4pS3lwGzk4xEOfhPs0wyj%2FuVCkB%2Bo2cQEJhNvPk5i1wkS36brRQGqExTKvy3S0zMv7B7Y1dsX6XmOhqu9UOG2mKVT76njORfRmAnf8uFukmn6zvFN%2FhFWNejequJ8QeDvjFO5%2BuGuyGFGAEk&X-Amz-Signature=d2e32bc1ab096ccd268d1cb9d08567eb0c78db8260bad33b3a2f10fcd7f18d5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUIFW7VE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIELBVjdkkDVC%2FGxVSZMhEi4zgnYiyicx8yQoNnqBtpJDAiEAvpHkqezMRM2QvD3ANfHIfVhNLV3xZUvGCzXIKs1%2FfG8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPEs4sdq9XM%2FmQuE0CrcA%2F4jjEZVyAkdzF2w1b9VjhV08XNByj5KDbcGvySnGZaPQ27WiKwn3nEWsDuF0cFCUqLffiTRQy7arxOIT%2BVXGul5ufX3E2WShsslM3q07bq9qwz8eNbfdkX7YMlT%2Fv01JhetFLk8F3ZdYj48PJ889Lfsj31yMr1pgOMC%2FYJgjopLmzjAt0TZpL3IVvj5do6Ji67bJNqKAoZlFX5xQ1PWtokJ4v%2FH8uVJs3PF2wuiDaxsqv2G6zNBvV7oUdKbB5vm1iq0m6YdGK5OlN0B2m%2Fzx1naUyWDKBOlGRUteQWsJC%2B3%2FD03aVoErdz8gaowc6LiXu4%2FbfRLZMYrwGLFolkzFbDgvXl7MZEFrNGzIA%2Bv%2F2U37Z4dvHeo1ROKb1IwpEhQeSo%2FNJkGqU35PGd3SgJj8TTTYoOUP%2FoEMsVg2aoz4yxiS1a%2FyKvvOm0WX6EVPxFCI4OGdQVpVj6NIdWxlzu69xOJvSspsPSddGW0ja%2B277W6DbT1JB2jWL%2BDu97L%2B%2Ba6X7vGRO%2FNcNudwA2QWHTkLfrhqCASKZ8gnKtWgshTM9eBVSmvc72z8%2BLks3qjIVmRYHVyUapNiyyR0kQZcU%2BaN0NNRrgwV5wM41JibI3gYQvneC5V8xqaHHKd9AYYMLOdgsUGOqUB3%2BZU3IITIdYm8qmRlDsmD2r%2BuX2lLQXsYyMoSFBh5JuMQi16crWYhfCcQdwO9UETG6x7hPWDtxjuZ2ojp4fTYPRzswTfPT1m5ngCZ2CIKyDCEYWmZZ9rGV%2BbBJ6PFaAhWLMG4TWrFpzWX4p7xp8mJe9kZOsYFiUnVnqxL4CQwSTcZHSQV6eOAfnfSZEPnXfzpCk5Md93zF2VVCE34VRSMYcGC1kO&X-Amz-Signature=9fbc9974764059e9dedffdf81ccaaaa386b084621a4dd793b5405bc6ed214cb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDD2P22A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG6Tc6Z6h1gZ%2BhmizbIaq2rn1y%2BmWi8IT4Vs8NcfnUPGAiEAw%2FkhGGmxShD4zFC4lu8kDgAeI6GQA5bo%2FDLqUpeOHcgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGEtLFiLIP5wQLh3tircA5th8Y8MPQOngPn%2FvTRi7DNcIQkXrWfK9lhneXlqzUg2N%2FqqJgkLlsZXHBs2MHQCYQGBPxEkk%2FJ%2F%2B%2BBj7aitECxpcJ%2FAO%2FCyJh084Ke6Du3NkN2bxSdt%2FzwocSfa65qOJCht68fbILCVUAiFE8W3iSxQ7mDevKhEFUpzaYQxMh0ngPIWPA2TDliujdYdaHK4MFAtXypUR%2FLZVLp9VH%2FMbZXpOaSo9uVho0rtVneDJP6wy3aOHCnwHJDVn%2BbMoobOlBCZHa2fkGtloczm1vQ4ItihPU2pEuSIGAazWG2SQDNy3TadH6Y%2Fc%2FtGLvLRvVYwXtCjQL1BFYGuK8uAT2def4JCV0bxgXf2vFOyV31cCdrhpdmr5CqawNN51tzudv0vnyiqVIoL%2BknE6V5KM%2FiqJwqZRcIEXcTx9oc4NOiOPNrhAWm951qkhFzQ07zurVsXKU%2FEwwTdRFKZXzziLTbLWtQROLg31mJNjBUTm%2Bo0jm%2BdDkxf4quZZPVLI23D6I8gvnuWBxlcYvH5lpbzgbR8RqCT0ADKwUW9quYTPFZ%2FVsPSF%2B77mgvx0sbZhq3UxNPSrRhnn3N9b6gRlDD8JP3xlCvo2CF3woM2A6nZQNBQSySQbRV1PKVHgSIlynJTMPqdgsUGOqUB5ZATJc714Eb1H7NT%2FjfYw7N%2FpWxyMAc3Er4i0xL9BzANO2f1K2MTZp%2FWbQZMlba8XlYn3Ttgr06dnsane2q0Flvszi2B5N90CzNtRHlEG%2Fl%2BHsNsNKRsnWbV7bHX%2BsEKTisGWA0DQD9pvlo0K376thTQJLNZ4r6ywJCvLp7xa4PYwqenS7BFv1XiBlv68byMpPddzruIP037Pqkg%2Fcj9LnnwOrfZ&X-Amz-Signature=73ce6a903ebe1163b0666b6905e0203a97edf36adc255acf90a7a08b16f15240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=6f526406ec0054f51f4a862d26470e46be848025d2a7261891d5db65011b17c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5EJS3C%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAYqzH0Zi3lugB8CCTB8bCujWVSDUKhfsN%2B2caFO8S%2F%2FAiEA04OMGIKr0RDQjv4JEyJoSFoDn3YzufEijHzamy9y%2Bkgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLACvjYGS5yHQ%2B4wiCrcA9JO2AcuSAvH8y%2BgJBjNzIhMCCYuctd5OH1MxdCAPca3yLG6jLj4pZ1HHE0uTu2jgZxiXUGwmwC1ikUpXqrmCQ30%2BCeLQsbi0MdzFyGon56x3wyfpB7%2FNUFZg%2FHulsMjYDRhjGVJvw7wG0q69SMOm%2B1dLTQ35cWpxEjD0a7SyRkcHzY4qzPxctHp7w9vfErxgYEGel585i4SiHY2Be3HWsOt2%2BEzKKGahcqhAOhiUxgPZ4dnvKvs%2FJI0LL0LJ8VAtl064hy8b08Qzo6ZIB%2FBi%2F8Kqcxd5S7GvVsTR%2Bv%2FLGmrPyImsyNg1GufQyPEiyVGX2nYFs1As17FH17w9jfOhMoE%2B71c%2BsXZ1oPMTvOjRym0yRZR9ovN%2BOd27yzOFnWtTF8vN3oqGa%2FEATJ3UOqnIUzKzBBRVWasNe4EbdUrkvm%2FNPzn5TZEqfN5rOe8E2Fof8UQEjiw9nM22T8C5nkp6%2BAQJ71DJ8PWcZw3pdD8OzDW5YkXnDtxPrqsDOUDSZPsngT3j1T4J16rgbo%2FbikikOWaPULZFZsvglOH84AWeq2ybiyRzieuUuu0dN%2FyO48gB41s6aZ0gOWXctD70L3Q0rj8W6yTHC%2FlwOLrTCK%2FkuqkUaHmSY7oC%2BHHEuBuMJeagsUGOqUBUcbOqPRxczW4jzPXMxYhH69pMVgsAnzlEY3xBYKiazg%2Bo2UsMX4iMahlHYDD%2BvbGlySdMynltznHMf%2BVAwNwhVN9QTc%2BWzmOtRdSOZSxRqnKwAeWLkgbEcxMdiXxjh2zdKkZSxNvaqqSjagkAutuMJ9%2Fb4h03XAcdKU%2B19sB61vyyVf%2BQ5sHN6dK40WYbYHfXBY0TQcd2N6RMGyASVeggHyiOR%2F0&X-Amz-Signature=c5c97e9541a93c3cc88e44bb2fbe20e9d5afa79e87e8aaaf580dbd2a0037ebb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=9e45ca10604f5380e2849906cc61ff32789f0a9038f72721d7030e63cbe88b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEBVQJWI%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCEEe3oAQmVz9mL5e70uSQ5Nl9jU2bjvExWkM7F6m7%2BeAIhAPgeBnOJzZ3e4Lxyoz74aKBxAK0DQUh8gRkDXZul6wceKv8DCHcQABoMNjM3NDIzMTgzODA1Igy43lrCTyXkFB3OXtMq3AMjb7Hp13UPRHvkKXgcI2Nv%2FkzILC2XQuwaUTvOssJRxUtjhi5cwLfKpV%2FRYJsJaYEmI%2ByAGW5WEvntbEZuNwdyFP39DoLatfbcmMcFUCKVPx%2BR7Tf9aVgjoUYBPmjaHtXKEBM6FX0KBdaInW3hmolD0HquZ1fRKdb3mjjZIVfi9EjQKKf8JdEsv0AFjSjWLZFJ53e1XF1PkzjTHundnOdqgGMdLCYRY4kSXkioqL8wMPLHjjMhDxChmdstO%2BSDqQcF1KgL03kuNelmzwdYTHxqQaQBoijp9lLsfw9wOzTgil94fq2QSDA5%2Ft%2FDJ5MmEhOWE9GKVwQzjO8WtUDlR2Ulxedc8y6826lL2ov4%2FahwKxC%2BD9m3M%2BJgJuUZEUO3Ct6NMtmkid3yPNIzRaGiu3n9SWBB55bf9c89ZwRtHKi08sXDcPvaR9dBJLxuK%2BDcRirDDFQI4SQodYdUPz%2BwhMzuqzuLY7VlNdwNMpqrLzejCtiUkvTRstbFLDoJLzCj1aqdNVpQnnpGDMt1EP25%2FOCN8GXmo0iTkpMe2NNWl7ZGGTytCjmZqpYEUoJMLpL2gJb8%2FxsJ7XN04NdNw2Wt3HsywWp8XFBf18J9nF%2F4DKkCaaUF0i5EnwkhHaGWtjDwm4LFBjqkAQItCMTxO%2BTy17K6BaSazw9CfszzvJWtts4xloL8Fx7MG2HQQeC%2BMk%2Fa9q8dfDaR9mYnmJ1ITnArP91RZ26gzFzuGADFZZuOZBJF8WyQSn5bZrrZnTnW%2FSCx4u4Hsn55VPvkwog5K2lQdoIC2EWmDuUmlhph0ZDFgGmIE3d2Zruu6okIWsK1KJU09Zza4GBx9LmyYr5EmwZFYYuPp0ZVHIZG3jlU&X-Amz-Signature=b9d48b9f6488353b2f2b047997d8a08fd286a6e72e28385794fb0a51bf4c7c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=781f37ed33e209efe53af9d8efe0416da136fd8d6a7a5e5b0f5eb9395c3ea014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NRMSVDQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCXLmPiSKm%2FA%2BHC273LYVz6VN%2F%2B4WR%2BOG4UFtx4JLhBdwIgSh32rK%2B7TRb%2FYmxn74bYXYwDdfUuWUtFka3P230EcjUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHsk9PURqr2dKpqWDircA1AgJPTPmNquRrFOjhc2xHoKW6NTKfNKGY5lQgeN0lMjUK2G0wEtypCgVInc0gmyh5ufXY7jZ24Z%2B6G3VV2Oifc%2BEgcvNzmSHA7JH3SVlrfvjxeW6sc%2B61MQTAIqGWJY7ZO0%2BkLgW5Wq1kW%2B4SSOnMDKdklJGlJYsMAGVW6cf3gjG63eUKkbCPiuyjHwb%2FVgmtZqFUWJWemaGA2U0lE1iHLiatsD2JDUhG1xw2MEpV35ksrg3PfsR0dn%2BkL5JT%2Fb4qTY9WaD3fkTgW3svTZQ1o6ysPcJoAanFfNhD8PMkIxRg1aodqlej6NnUBzwnndRaImIjk08KE7NQ8F7hJmvyGdGQNPzlvg9xON2sWeNQ1GeVPuh1A%2F4wDStYGHll1W6S24ld1kOxpRljjfuVBblPElKod9UwQRNZt6nFQ3rZfQjF%2BaulTs8RpUI15UIoy6wIe9knH5W0xkVQGPakiD9oNuI%2B6l%2F0yDHpsxqm5%2B6LZOT3NRt5f2wgl1PhYafNYxrnyDIRIDxHZ1PhcTKT9OiJVVr7IvjDRgew%2BoW%2FmKhTGwJoVM3QyFotKvVOn%2FPDN%2Fq98gDulshaHRl7khk0%2BFbJnXK66KKmCpYR1OHQGuySae4gEDLsQq2nszONNGlMPKZgsUGOqUBzdwa2PIGrQ4ygj7o%2Bk6tfVzAENDCbXucswaciVAB2P2LHAQ1Q4D1hyCPzPRh4RtF9nUZC%2FdKnZ6TGSj%2Fo%2B0WXSKxq4llUw%2FM8Q%2BENcxkiMO31i8n39S7Dn54nnbJxTyQfoojA5b322Cwk8azrmmp09Fl8HtzbrfG5VWX8plB4j9P3%2BCNMCYFdbsQh62u1wAoJ34rr9IPSwviDcw81WHcWYt%2FC3XI&X-Amz-Signature=02ca6687becc22471b655d1054df2e58f53c8b9e44fc82e5b247be5cf253b05d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=cf7ca5ff84a7b1b884054e25171e831bfebaeb9ab63a4e4d325a2ecf0d22741f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZVKW76H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD7iXAwljZNc92BbIBgJmprCa4jZjzkRjYX4D1GQbH30QIgauSkmYD9%2F2YUXtjeQCasXRwxLOkmhe0H1HbYDpU%2B2zQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGb1s88Dhc%2FMjexPxCrcA2wQWCGWRbDoRQhxhMw6gB5NKVQczUeypXfIYumboTV4jdFsQ7fQCpRumiYJCOZC8luyMDaNuKtSwcZlyLUn%2FqZ9owe7tPKolVbzgkE%2BHc0etTTxvj9Ph2JixU8PaawWUih4d10s9%2Br6vg%2B5%2FRSYSFFXTHGt%2BIT6H%2FUh4zM%2BChdGNlkLs0U8zuMB%2FreDefLcUL8q1bMwezhnyxnvohU32Pt65lHCEBpuhY8BcPHfBLeEuN%2BO92m7lGOQBlOKr%2FHvaHe%2FTx0WrimC8OsKqm%2Ffk3Eu6ugoAlWUKrFNhMA6anc9cvpIHXLw9hyPjlCO%2BQ3ApN6dBhitwX8AoFIW6omABc%2Fe9J0cKItDYzArUQ1pIQx1B4g76pqVDRIlPkZeDzYaF6gw7EIoztYPLIduOeEv69nlhC0DvxL7NkGFSIk9MboffpNjbrUr8KTm8R67a7JwY%2B3aneBs2KqdLYeAQ2A8BsLMU%2BLedjyV7PX8USAppe1MgxehIuWE%2BAmokAlpAaBUQ%2FOCCIA6WNBJ%2FIQDoNv1e34sQfaOL9qM5q2oGrVYI5LID3HDs1h25W8FmtcacDnT2TSyqOJlVzi%2F8kZ8iv82E6a0PvmSwHvu1jVSnisanUbOmAmdZa2ItsaU923uMKyegsUGOqUB4IxHmQSXx%2F069mG5CYh%2BLSl4kIRfs6XWm%2Fd8LGd252%2F%2BXRK8ZcYWrLlvtVHawNC8%2BB6k4dFq6baFLn5btLQDpq5mvxb8faHWwxo66VxXSqyovm35bLREzmYSWizSTVaTk01tFZBLq5XD4Whunj6FmnhuDwk0CYO8MtR%2FIxILoQhPtZ1ounHIbUEybMtzUVnPvCDbJDiExQlzIlkprCtmuOzsS2xt&X-Amz-Signature=6de8e22683ad90ac5f97af8dd007109ca2eff51ed7fc10f90bc6af706482bd97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7QJV6D%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDxTouysgw4FR393hgeB2g7VTS%2FJLIPAPuu2mXy724PHgIhAMqOyv1%2Bojp3MaV0a7Fbz8g5dt8asM6pMhedPhaxUog5Kv8DCHcQABoMNjM3NDIzMTgzODA1Igyi5nMhoU0N1zLfhZUq3AMmZ0E%2FM14hrxUozCqT38MZ9iN%2BfoaGzLZgyVZBu%2FFPVUexL1yQyyTmvcChj79gqBTCDvVGG4BXAZWyZ%2FiQL%2BF1BSA74omxtquDsV3ZljPZs2tdJ1cKDWcnRZ903Y%2FtWw%2FRqRNjih8K38ql123tR4jNrVXez1xEOQUsL2l0gP4mWV3yxYUeAol3w0PiFgib%2FfNNfH79%2BUGCwGsQi2OKCV4hgfQlhXpsnN0pZ1xEm4tkPmlkXt7olTPc%2F8c%2BVCqGNA%2B63wqg0HidM8yguMwgZogykG%2Bli%2F5tzmsFTykiUhukc81KhSjYFrwbTZrJjfKgOlTkDMGTz2YoOi424DCWI%2BZx4B4chYYMuWqtPzrz4Y7i0Oryj7RcX6vs%2B0u2INEFRD4cicJ1g4DYcWdMByccjpiJmH8GjUTzWBQT4QXpsLAiDP%2FmYDasJFwQxK7unSn4qO1RQye86mv4C4MENVmFC6yuciMReJer3i5HmzV%2F4ZPQdb%2B1DTYIkSCJ66AK7QIM2h8T3e3FIaXxZ%2BkB7KAsqkRJZ5JGpI2NQ7%2FlXWwZtysyuvmVxUPW4OyUHTbDbu8QY9vhpoVAv0Y0dipCCrjM8Bgdlv45CbtHLiX7DmJDEN%2FM2fng%2FlIhmh67h442MjDcmILFBjqkAcqqmdK0HhFMCvAK1rQATJxG7oRTJ0eR7cavYbDWoUU%2B4yyBJm7hb1RRigP6QtVKbrghmUMdYHW8kOost0mfVuz5vWvvgqFAq0LgitjyjhbG41sIrDCN4k8BaY7zo36SFW7g9CjuOZsLPPdRmBNZ0ti4JfIJAX3WRB%2BfYGgXvBsGuCRgF1ToCKNV4QPng5Q11EpIL3Medx7E%2F4b8wqehO75ne0%2Bm&X-Amz-Signature=c5528649435b680b4ec0f712f9c82b2e9463cb489dfb7a3cf48dfe171fc365fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQGCPHOL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICYaSjd9tKnveKPvtUg9Nwn6RjVeeS9mPjkYOBusSRhqAiAlkd9It7gFv5qhrKZslPCPh7BRyclMFBBuLTYCXUpdXir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMIslZRrn28Mbu4HGmKtwDxysGhS%2BlnzCNXFYH7lOdxywKIi8B1EWS1%2BKVMOINvryvo46PNsSlFGc2jrzlrYXVQ1G35M9ZZgW7yf4QWYLs1qpW3K%2FA5YooQr2TR9bZpunB8blone8JhWHxCe%2BOCO39JwmPExBQ56F15McNyJo%2FP%2Fu6IHALmAak9PhUT13dUetYTbY3mjJMgtJdvmwHg2jj1DNdpvp9l14DPf%2BUGVp7uM3FUIbnGBMz6IxBCZp%2FUYq8OyAwrqx2PMGYVrq2y76q822KHFY6dmjdNBHy6fSPM0ervfOpfa3bPU8miZtrU%2FRvqfWoLoUZlhFd%2BhrSb1lUP%2BMZCb%2BUZKeG0iqtK76OBJWLGqG4GrgEk2A8o%2BGuU03Dk70MiOtCG6e3165zstux3IEYA0lvzb3IwzgdYRLtBMtjjOJbr6GbOXmIrDB4F2M7mUvD%2BW1GxTJYqMqql7KRQwQYWCCT%2BC7uyR8%2FfqMa7fcwv1MMIVmLB%2FVqUY0bKV0Ezx1Er%2B6aumqnj%2FXlrD7EyI8Aq1DXqqi2v1w1lClVDyiWe4hqHc8md7VD77fIW7tcF9hGxBriHgnPf9MIQGCRFrKjip7oxa9NsfZ9UWxcZbStt31QHuFqvfJsEoEL7r5ve1sMuI%2BY05YIWBcwrZuCxQY6pgFGqP5FZbpv%2B9sL6aX4JlDATv%2FpWE6xEuniV7L0vGTutDqrik%2FhzzuyGNSfoMho5q%2BMPz3sFE91lHylz1xf3JtEvdaIAfJL%2BHlqtPUPWPXFR%2B0MyLXzn6Cj6x2cVivzZauvggUOuNSzKQ%2FKSqGgO%2FZ9%2Fss8T9zJttIer1kkUO8Vr58w9TUbGBe9Ob1qkgDoetpZxquoIhJgwtnW6Qh4J4mpNRJVyWcC&X-Amz-Signature=7d1d0c52d35d149f3e3b4851c0ceabf8b1ec55a24ce18084bf6b5fcfcad1a9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKO2SCA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDtkKDnjH6VUsgOOwqkbfkr2kXhjob2MSuhCmL8whLHygIhAMNYlWeCBKGQk8lgIzNEaMTMVVyvk5ciishuDB2efKGNKv8DCHcQABoMNjM3NDIzMTgzODA1Igyx5C7y8qRQL1tT%2Fiwq3APuRQyoiaZnrPo0%2BJw3TnYCsmM%2BtwiF%2FgJv6CML%2Febrq8Jjh8tL5Gb5WKbBWEacSaB5Tmt4Y6cpSxR%2BLrUpnT1rh%2ByKe2cbywb4IViTpaHWrt27Hjh0lo1ljSeJZxo%2BKJJWzjBsz28X6CXkJjrs1YlujsdIwAEzFINOlVYxmPSZT2X8WNJMzB6WvDgSU9azsK9OZQXYjzlZpqyapJdp%2FJwepUqzyw5qH7394tCw6neE11J0s3JA0PjwZN3qZbFoYi5%2Fp%2F0UrT5sOZDvdLaJOCmD8sPO3xt3SrIadFaAV1nrEaA71Zc8Np%2F6Mgr8Xl7QKCUV2zMwtdxF1nNFniMcwkSS5Qc00FZ72HkqUqfr%2FDtnraWMa4BtrM%2BTY2H6i9gM%2FbQWSoJL8PrnhiliSYcwpUXR%2FppoCLgTA0MopMxVFjLs20sbN2eCIqAiaZnsLLj7BZBfMtJ0jCWRqzHB1sALE%2BdDL6ajxHp2OQR7pIBeTz%2Bej7rU%2Bs%2BCbJODbfs9YtTsS9q2fV99ZVWGcCMx8XEIHMJU7%2F2NMc2HUDGx3zIYKSefj00dS5RclG9TyjbbNlzdEVQvCIKtqzNSNHUlzf466Nk7gzfkceEETqOHK7%2FgjA6sy4v9Nho1LiPWaWRZ9TDMk4LFBjqkAbFM3S356Y0FRxVT9nOLxQRfUHrEHI%2FEhft3PVEshQe8wr0GjmAkZj9wIL%2BMK%2FY90OujEiUJxcZ4WzBZ1J2DyTXBp5nKvEP3dm6OsDBlv%2Feh9X08PXRsL%2BuSNif0s4FMwmV8sgJoag1UZ3nglDYaZvCvmHpn1nMkg6OEAYd7yrNZ2GHgdtX0%2BHD%2BF7RIh2ZjTazTfb2eJ6kd9IumqBpYxyMtwkDZ&X-Amz-Signature=284048864047121ca6e050261dd96a3ef4457796a627a6e6a8df1f0c49877e8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKBOGRUF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCx1vwKCj2KOp0VJascrCMthXFanTVI9UblhSDGsMG10AIhAKOIib83D07GsRXSEpwOwXxs2QzIR8aFxIHnDZiH3AKjKv8DCHcQABoMNjM3NDIzMTgzODA1IgwJYDj5JpRlg3azfy0q3AND2%2B8pqBCKxPNRJI9VNE%2Bfr7mPQSZ%2BS5Li82y60W4dQ%2BiZ8LwPFtpj0j2HAsmE4q2RRNzQb9YYsxXrecY4a2rHT8YwCYLc5MKY7RhcENEzXMNO0fpxWGfnyBWiweR2CjWCRxoJdxnQ0rYditEEm%2FKZGdF6JFDHC5k2igssifU9%2BX7x7cJUZs8fEgfBmsqi2H5TOH5ssbnTv0Pffe3tTWjUqG6mWjt5gZjOzlQ4v1M78gkTqv2KMAxzqE%2B%2BzXu9BhNwIW2zUbtnbFjBVcXYp5ce0kCEV8zzQHA%2FTIOIE51d3B9a1mkc74jkICSm921Lqe%2BefSzKhBKMZoDpyolH56%2Bx1UIOB39%2FsFqUi27fF06RXQcxmR2tPBoxFmGv%2BEI%2BG6u720DZ9VEfo5d2V5z2RXA8stLxFr1XXohjhc23yKO0x0cgOS4%2BJd7qbuG1gyCGVcvymEp5wjLptPiuibdmGNO2Soq2s%2BXY%2BoBoKO9wUmZg%2B8ZSt9P0b1nfzNx3kF0JBgnLUDl7yZozdt7XtEKtwrntUBHswYpQwcjO3EewwlRh5wymezc8c%2F2092Te3zomqvfmf7c%2F6WGMqa9%2FOLwlhRAD2RirI36Qp5NbxNE%2BHfvjTl1HiBNyNVLfkpItyjDvl4LFBjqkAYrWgPo4qPlFghQWfSjrA3IH0HkKU8FMT7MzpgvR6F%2BKO1x%2FLzFxv%2FchBpWvR7ryLpQoPAeKagyd8ct4im%2Fxs%2BHjI%2F60QsBKdPSLsBhggmORd571hAtKGquoe1j1XBCN7aDTpRddK%2BIHA0sauyFyyVyGJaEdxDoWZKeB%2BvAuazypggdWiTEXcPK2aCvxLGcZs%2B65%2FMq5aYCDNwlt9394g5qvraCx&X-Amz-Signature=b8ec48949ff90d6a1dc6a40b6db3bac4ebc13b3f6941b7e99dbb2b950f74974c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=a00a2a544633428a3bd5e0c28fc98fcade473350baec4159c2e34bad2b497d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=38bfb1989cb5281ff8c33358f4ed66c482fbd8372f567b99fc97d7e7de491e48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQANK6A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCczjtk3dCjWhzI1lq54XOot4CmR%2FgdRX2GggzWInL0fAIgN4NYobXxbRHYaAwyHlWnZ0knrQkPeBNJCKSkZebakQoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCGAVJikfvYI4jUkqyrcA4rDuCsJ22y5PQlD3hGIZXHSkYZX4UVfn4kblzqytnaj%2Fycu3mNep7Itwq2%2Ftg3LHIX07WHXR4oUEtPn0FBK99ZeT5D%2Fc6FaHgQlFIzSAe1%2B%2BD1GYQgX3TbCqGmW%2BdKyT1oDQySDFkQNi7D0n0FzCNwWD2dypHpN8I6toN7Wpm7YkJOPWuSF1NLvhFnUtlq55wd4YP74aYzsjNoitiPBpIea999J34poQSi1KDQcePr52zAZedtwtBHoW5sELngvHUEvHm6xlUMpoj92Pk5Radbi9KntbwWpbVPpH9WjSRCVZu5dud3tKPBRx0kbVBH0ZCfv%2BBRRZ9JealzxxNIvw3GUPLpXIHITGeZZaZbYgySVv%2F%2Fif4UqpUL3LNnk4ulFbEKZLNDM4TK3esg0a%2FlUUdwhZosXmzvUu99B6gBe2TqH7T%2FOSmpzmbELlCSKUVf9yHreivudS97yUZcMHUWe4ZbD8bsexsI%2Fz10hUh0kujyVyqvCSRq8tlWPaRYvazOUV8O%2Fi0nO2yBwh%2Bh%2Ff2r%2BJm9%2FAwdcyZh4lDE%2F4U6%2BnA27lbyTkqWdAyZKQ%2BwVKrKZ4dEpYrsUE74LCUF0lBrY6ZsSNx2iMwSo7JbiOG0uYyO3kT4mFkZX60P7xeexMLeWgsUGOqUBGCe4Ryw%2FLAwOx%2BI45htlzsXe15u7jkc2Y5ysMZ1iUuHJXzRXNVQhRvac%2BqcMf5%2BhBUYrchnMkzb%2FhMoULrNjTG5JHLL3e6x3e7IaYsNfy3SLXnPbkCXWiSardm2JXWwqMrn9Nmz%2FxIBHFseyt6asO8FdvKclE%2BjkbcOKC1busYcrXHN9mG0yEdqwO8%2Bf883pPt414DtoY3qgCMb9yXqEd4cjhzMy&X-Amz-Signature=8062fc9fde6ad9633c1ceb9b6eb067b0c065644c17c60bfb05939d86dcf01217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQANK6A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCczjtk3dCjWhzI1lq54XOot4CmR%2FgdRX2GggzWInL0fAIgN4NYobXxbRHYaAwyHlWnZ0knrQkPeBNJCKSkZebakQoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCGAVJikfvYI4jUkqyrcA4rDuCsJ22y5PQlD3hGIZXHSkYZX4UVfn4kblzqytnaj%2Fycu3mNep7Itwq2%2Ftg3LHIX07WHXR4oUEtPn0FBK99ZeT5D%2Fc6FaHgQlFIzSAe1%2B%2BD1GYQgX3TbCqGmW%2BdKyT1oDQySDFkQNi7D0n0FzCNwWD2dypHpN8I6toN7Wpm7YkJOPWuSF1NLvhFnUtlq55wd4YP74aYzsjNoitiPBpIea999J34poQSi1KDQcePr52zAZedtwtBHoW5sELngvHUEvHm6xlUMpoj92Pk5Radbi9KntbwWpbVPpH9WjSRCVZu5dud3tKPBRx0kbVBH0ZCfv%2BBRRZ9JealzxxNIvw3GUPLpXIHITGeZZaZbYgySVv%2F%2Fif4UqpUL3LNnk4ulFbEKZLNDM4TK3esg0a%2FlUUdwhZosXmzvUu99B6gBe2TqH7T%2FOSmpzmbELlCSKUVf9yHreivudS97yUZcMHUWe4ZbD8bsexsI%2Fz10hUh0kujyVyqvCSRq8tlWPaRYvazOUV8O%2Fi0nO2yBwh%2Bh%2Ff2r%2BJm9%2FAwdcyZh4lDE%2F4U6%2BnA27lbyTkqWdAyZKQ%2BwVKrKZ4dEpYrsUE74LCUF0lBrY6ZsSNx2iMwSo7JbiOG0uYyO3kT4mFkZX60P7xeexMLeWgsUGOqUBGCe4Ryw%2FLAwOx%2BI45htlzsXe15u7jkc2Y5ysMZ1iUuHJXzRXNVQhRvac%2BqcMf5%2BhBUYrchnMkzb%2FhMoULrNjTG5JHLL3e6x3e7IaYsNfy3SLXnPbkCXWiSardm2JXWwqMrn9Nmz%2FxIBHFseyt6asO8FdvKclE%2BjkbcOKC1busYcrXHN9mG0yEdqwO8%2Bf883pPt414DtoY3qgCMb9yXqEd4cjhzMy&X-Amz-Signature=93475c96ec956b70d87c71401b36be9cbd38339e2d8be95d49e86bb0bd9a5eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQANK6A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCczjtk3dCjWhzI1lq54XOot4CmR%2FgdRX2GggzWInL0fAIgN4NYobXxbRHYaAwyHlWnZ0knrQkPeBNJCKSkZebakQoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCGAVJikfvYI4jUkqyrcA4rDuCsJ22y5PQlD3hGIZXHSkYZX4UVfn4kblzqytnaj%2Fycu3mNep7Itwq2%2Ftg3LHIX07WHXR4oUEtPn0FBK99ZeT5D%2Fc6FaHgQlFIzSAe1%2B%2BD1GYQgX3TbCqGmW%2BdKyT1oDQySDFkQNi7D0n0FzCNwWD2dypHpN8I6toN7Wpm7YkJOPWuSF1NLvhFnUtlq55wd4YP74aYzsjNoitiPBpIea999J34poQSi1KDQcePr52zAZedtwtBHoW5sELngvHUEvHm6xlUMpoj92Pk5Radbi9KntbwWpbVPpH9WjSRCVZu5dud3tKPBRx0kbVBH0ZCfv%2BBRRZ9JealzxxNIvw3GUPLpXIHITGeZZaZbYgySVv%2F%2Fif4UqpUL3LNnk4ulFbEKZLNDM4TK3esg0a%2FlUUdwhZosXmzvUu99B6gBe2TqH7T%2FOSmpzmbELlCSKUVf9yHreivudS97yUZcMHUWe4ZbD8bsexsI%2Fz10hUh0kujyVyqvCSRq8tlWPaRYvazOUV8O%2Fi0nO2yBwh%2Bh%2Ff2r%2BJm9%2FAwdcyZh4lDE%2F4U6%2BnA27lbyTkqWdAyZKQ%2BwVKrKZ4dEpYrsUE74LCUF0lBrY6ZsSNx2iMwSo7JbiOG0uYyO3kT4mFkZX60P7xeexMLeWgsUGOqUBGCe4Ryw%2FLAwOx%2BI45htlzsXe15u7jkc2Y5ysMZ1iUuHJXzRXNVQhRvac%2BqcMf5%2BhBUYrchnMkzb%2FhMoULrNjTG5JHLL3e6x3e7IaYsNfy3SLXnPbkCXWiSardm2JXWwqMrn9Nmz%2FxIBHFseyt6asO8FdvKclE%2BjkbcOKC1busYcrXHN9mG0yEdqwO8%2Bf883pPt414DtoY3qgCMb9yXqEd4cjhzMy&X-Amz-Signature=06e13c549322cd0b7f74c2617968a21f73e4796c16e992d97405fef47756e03b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQANK6A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCczjtk3dCjWhzI1lq54XOot4CmR%2FgdRX2GggzWInL0fAIgN4NYobXxbRHYaAwyHlWnZ0knrQkPeBNJCKSkZebakQoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCGAVJikfvYI4jUkqyrcA4rDuCsJ22y5PQlD3hGIZXHSkYZX4UVfn4kblzqytnaj%2Fycu3mNep7Itwq2%2Ftg3LHIX07WHXR4oUEtPn0FBK99ZeT5D%2Fc6FaHgQlFIzSAe1%2B%2BD1GYQgX3TbCqGmW%2BdKyT1oDQySDFkQNi7D0n0FzCNwWD2dypHpN8I6toN7Wpm7YkJOPWuSF1NLvhFnUtlq55wd4YP74aYzsjNoitiPBpIea999J34poQSi1KDQcePr52zAZedtwtBHoW5sELngvHUEvHm6xlUMpoj92Pk5Radbi9KntbwWpbVPpH9WjSRCVZu5dud3tKPBRx0kbVBH0ZCfv%2BBRRZ9JealzxxNIvw3GUPLpXIHITGeZZaZbYgySVv%2F%2Fif4UqpUL3LNnk4ulFbEKZLNDM4TK3esg0a%2FlUUdwhZosXmzvUu99B6gBe2TqH7T%2FOSmpzmbELlCSKUVf9yHreivudS97yUZcMHUWe4ZbD8bsexsI%2Fz10hUh0kujyVyqvCSRq8tlWPaRYvazOUV8O%2Fi0nO2yBwh%2Bh%2Ff2r%2BJm9%2FAwdcyZh4lDE%2F4U6%2BnA27lbyTkqWdAyZKQ%2BwVKrKZ4dEpYrsUE74LCUF0lBrY6ZsSNx2iMwSo7JbiOG0uYyO3kT4mFkZX60P7xeexMLeWgsUGOqUBGCe4Ryw%2FLAwOx%2BI45htlzsXe15u7jkc2Y5ysMZ1iUuHJXzRXNVQhRvac%2BqcMf5%2BhBUYrchnMkzb%2FhMoULrNjTG5JHLL3e6x3e7IaYsNfy3SLXnPbkCXWiSardm2JXWwqMrn9Nmz%2FxIBHFseyt6asO8FdvKclE%2BjkbcOKC1busYcrXHN9mG0yEdqwO8%2Bf883pPt414DtoY3qgCMb9yXqEd4cjhzMy&X-Amz-Signature=fd06cac819d3011d2c341e9fa00d37505106baf391d36e1062c161f5012b52e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQANK6A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCczjtk3dCjWhzI1lq54XOot4CmR%2FgdRX2GggzWInL0fAIgN4NYobXxbRHYaAwyHlWnZ0knrQkPeBNJCKSkZebakQoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCGAVJikfvYI4jUkqyrcA4rDuCsJ22y5PQlD3hGIZXHSkYZX4UVfn4kblzqytnaj%2Fycu3mNep7Itwq2%2Ftg3LHIX07WHXR4oUEtPn0FBK99ZeT5D%2Fc6FaHgQlFIzSAe1%2B%2BD1GYQgX3TbCqGmW%2BdKyT1oDQySDFkQNi7D0n0FzCNwWD2dypHpN8I6toN7Wpm7YkJOPWuSF1NLvhFnUtlq55wd4YP74aYzsjNoitiPBpIea999J34poQSi1KDQcePr52zAZedtwtBHoW5sELngvHUEvHm6xlUMpoj92Pk5Radbi9KntbwWpbVPpH9WjSRCVZu5dud3tKPBRx0kbVBH0ZCfv%2BBRRZ9JealzxxNIvw3GUPLpXIHITGeZZaZbYgySVv%2F%2Fif4UqpUL3LNnk4ulFbEKZLNDM4TK3esg0a%2FlUUdwhZosXmzvUu99B6gBe2TqH7T%2FOSmpzmbELlCSKUVf9yHreivudS97yUZcMHUWe4ZbD8bsexsI%2Fz10hUh0kujyVyqvCSRq8tlWPaRYvazOUV8O%2Fi0nO2yBwh%2Bh%2Ff2r%2BJm9%2FAwdcyZh4lDE%2F4U6%2BnA27lbyTkqWdAyZKQ%2BwVKrKZ4dEpYrsUE74LCUF0lBrY6ZsSNx2iMwSo7JbiOG0uYyO3kT4mFkZX60P7xeexMLeWgsUGOqUBGCe4Ryw%2FLAwOx%2BI45htlzsXe15u7jkc2Y5ysMZ1iUuHJXzRXNVQhRvac%2BqcMf5%2BhBUYrchnMkzb%2FhMoULrNjTG5JHLL3e6x3e7IaYsNfy3SLXnPbkCXWiSardm2JXWwqMrn9Nmz%2FxIBHFseyt6asO8FdvKclE%2BjkbcOKC1busYcrXHN9mG0yEdqwO8%2Bf883pPt414DtoY3qgCMb9yXqEd4cjhzMy&X-Amz-Signature=85d28df91cb1b785358f146b4dbcf1fa04e6ad3069d19cd0ae14a983b5a38a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQANK6A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCczjtk3dCjWhzI1lq54XOot4CmR%2FgdRX2GggzWInL0fAIgN4NYobXxbRHYaAwyHlWnZ0knrQkPeBNJCKSkZebakQoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCGAVJikfvYI4jUkqyrcA4rDuCsJ22y5PQlD3hGIZXHSkYZX4UVfn4kblzqytnaj%2Fycu3mNep7Itwq2%2Ftg3LHIX07WHXR4oUEtPn0FBK99ZeT5D%2Fc6FaHgQlFIzSAe1%2B%2BD1GYQgX3TbCqGmW%2BdKyT1oDQySDFkQNi7D0n0FzCNwWD2dypHpN8I6toN7Wpm7YkJOPWuSF1NLvhFnUtlq55wd4YP74aYzsjNoitiPBpIea999J34poQSi1KDQcePr52zAZedtwtBHoW5sELngvHUEvHm6xlUMpoj92Pk5Radbi9KntbwWpbVPpH9WjSRCVZu5dud3tKPBRx0kbVBH0ZCfv%2BBRRZ9JealzxxNIvw3GUPLpXIHITGeZZaZbYgySVv%2F%2Fif4UqpUL3LNnk4ulFbEKZLNDM4TK3esg0a%2FlUUdwhZosXmzvUu99B6gBe2TqH7T%2FOSmpzmbELlCSKUVf9yHreivudS97yUZcMHUWe4ZbD8bsexsI%2Fz10hUh0kujyVyqvCSRq8tlWPaRYvazOUV8O%2Fi0nO2yBwh%2Bh%2Ff2r%2BJm9%2FAwdcyZh4lDE%2F4U6%2BnA27lbyTkqWdAyZKQ%2BwVKrKZ4dEpYrsUE74LCUF0lBrY6ZsSNx2iMwSo7JbiOG0uYyO3kT4mFkZX60P7xeexMLeWgsUGOqUBGCe4Ryw%2FLAwOx%2BI45htlzsXe15u7jkc2Y5ysMZ1iUuHJXzRXNVQhRvac%2BqcMf5%2BhBUYrchnMkzb%2FhMoULrNjTG5JHLL3e6x3e7IaYsNfy3SLXnPbkCXWiSardm2JXWwqMrn9Nmz%2FxIBHFseyt6asO8FdvKclE%2BjkbcOKC1busYcrXHN9mG0yEdqwO8%2Bf883pPt414DtoY3qgCMb9yXqEd4cjhzMy&X-Amz-Signature=faec714fb4f110d0627c8255a3e816e4840ce2d0c7aad30f25832094715e79b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQANK6A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCczjtk3dCjWhzI1lq54XOot4CmR%2FgdRX2GggzWInL0fAIgN4NYobXxbRHYaAwyHlWnZ0knrQkPeBNJCKSkZebakQoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCGAVJikfvYI4jUkqyrcA4rDuCsJ22y5PQlD3hGIZXHSkYZX4UVfn4kblzqytnaj%2Fycu3mNep7Itwq2%2Ftg3LHIX07WHXR4oUEtPn0FBK99ZeT5D%2Fc6FaHgQlFIzSAe1%2B%2BD1GYQgX3TbCqGmW%2BdKyT1oDQySDFkQNi7D0n0FzCNwWD2dypHpN8I6toN7Wpm7YkJOPWuSF1NLvhFnUtlq55wd4YP74aYzsjNoitiPBpIea999J34poQSi1KDQcePr52zAZedtwtBHoW5sELngvHUEvHm6xlUMpoj92Pk5Radbi9KntbwWpbVPpH9WjSRCVZu5dud3tKPBRx0kbVBH0ZCfv%2BBRRZ9JealzxxNIvw3GUPLpXIHITGeZZaZbYgySVv%2F%2Fif4UqpUL3LNnk4ulFbEKZLNDM4TK3esg0a%2FlUUdwhZosXmzvUu99B6gBe2TqH7T%2FOSmpzmbELlCSKUVf9yHreivudS97yUZcMHUWe4ZbD8bsexsI%2Fz10hUh0kujyVyqvCSRq8tlWPaRYvazOUV8O%2Fi0nO2yBwh%2Bh%2Ff2r%2BJm9%2FAwdcyZh4lDE%2F4U6%2BnA27lbyTkqWdAyZKQ%2BwVKrKZ4dEpYrsUE74LCUF0lBrY6ZsSNx2iMwSo7JbiOG0uYyO3kT4mFkZX60P7xeexMLeWgsUGOqUBGCe4Ryw%2FLAwOx%2BI45htlzsXe15u7jkc2Y5ysMZ1iUuHJXzRXNVQhRvac%2BqcMf5%2BhBUYrchnMkzb%2FhMoULrNjTG5JHLL3e6x3e7IaYsNfy3SLXnPbkCXWiSardm2JXWwqMrn9Nmz%2FxIBHFseyt6asO8FdvKclE%2BjkbcOKC1busYcrXHN9mG0yEdqwO8%2Bf883pPt414DtoY3qgCMb9yXqEd4cjhzMy&X-Amz-Signature=0e1c87defd348b561311b8350fd1dbbaf14179a432ac5f896e84b3044489956a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQANK6A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCczjtk3dCjWhzI1lq54XOot4CmR%2FgdRX2GggzWInL0fAIgN4NYobXxbRHYaAwyHlWnZ0knrQkPeBNJCKSkZebakQoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCGAVJikfvYI4jUkqyrcA4rDuCsJ22y5PQlD3hGIZXHSkYZX4UVfn4kblzqytnaj%2Fycu3mNep7Itwq2%2Ftg3LHIX07WHXR4oUEtPn0FBK99ZeT5D%2Fc6FaHgQlFIzSAe1%2B%2BD1GYQgX3TbCqGmW%2BdKyT1oDQySDFkQNi7D0n0FzCNwWD2dypHpN8I6toN7Wpm7YkJOPWuSF1NLvhFnUtlq55wd4YP74aYzsjNoitiPBpIea999J34poQSi1KDQcePr52zAZedtwtBHoW5sELngvHUEvHm6xlUMpoj92Pk5Radbi9KntbwWpbVPpH9WjSRCVZu5dud3tKPBRx0kbVBH0ZCfv%2BBRRZ9JealzxxNIvw3GUPLpXIHITGeZZaZbYgySVv%2F%2Fif4UqpUL3LNnk4ulFbEKZLNDM4TK3esg0a%2FlUUdwhZosXmzvUu99B6gBe2TqH7T%2FOSmpzmbELlCSKUVf9yHreivudS97yUZcMHUWe4ZbD8bsexsI%2Fz10hUh0kujyVyqvCSRq8tlWPaRYvazOUV8O%2Fi0nO2yBwh%2Bh%2Ff2r%2BJm9%2FAwdcyZh4lDE%2F4U6%2BnA27lbyTkqWdAyZKQ%2BwVKrKZ4dEpYrsUE74LCUF0lBrY6ZsSNx2iMwSo7JbiOG0uYyO3kT4mFkZX60P7xeexMLeWgsUGOqUBGCe4Ryw%2FLAwOx%2BI45htlzsXe15u7jkc2Y5ysMZ1iUuHJXzRXNVQhRvac%2BqcMf5%2BhBUYrchnMkzb%2FhMoULrNjTG5JHLL3e6x3e7IaYsNfy3SLXnPbkCXWiSardm2JXWwqMrn9Nmz%2FxIBHFseyt6asO8FdvKclE%2BjkbcOKC1busYcrXHN9mG0yEdqwO8%2Bf883pPt414DtoY3qgCMb9yXqEd4cjhzMy&X-Amz-Signature=a9c4305fbb0ef115eb422b1ce6546bcd0144cd488483a097b163680bb4a9db02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQANK6A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCczjtk3dCjWhzI1lq54XOot4CmR%2FgdRX2GggzWInL0fAIgN4NYobXxbRHYaAwyHlWnZ0knrQkPeBNJCKSkZebakQoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCGAVJikfvYI4jUkqyrcA4rDuCsJ22y5PQlD3hGIZXHSkYZX4UVfn4kblzqytnaj%2Fycu3mNep7Itwq2%2Ftg3LHIX07WHXR4oUEtPn0FBK99ZeT5D%2Fc6FaHgQlFIzSAe1%2B%2BD1GYQgX3TbCqGmW%2BdKyT1oDQySDFkQNi7D0n0FzCNwWD2dypHpN8I6toN7Wpm7YkJOPWuSF1NLvhFnUtlq55wd4YP74aYzsjNoitiPBpIea999J34poQSi1KDQcePr52zAZedtwtBHoW5sELngvHUEvHm6xlUMpoj92Pk5Radbi9KntbwWpbVPpH9WjSRCVZu5dud3tKPBRx0kbVBH0ZCfv%2BBRRZ9JealzxxNIvw3GUPLpXIHITGeZZaZbYgySVv%2F%2Fif4UqpUL3LNnk4ulFbEKZLNDM4TK3esg0a%2FlUUdwhZosXmzvUu99B6gBe2TqH7T%2FOSmpzmbELlCSKUVf9yHreivudS97yUZcMHUWe4ZbD8bsexsI%2Fz10hUh0kujyVyqvCSRq8tlWPaRYvazOUV8O%2Fi0nO2yBwh%2Bh%2Ff2r%2BJm9%2FAwdcyZh4lDE%2F4U6%2BnA27lbyTkqWdAyZKQ%2BwVKrKZ4dEpYrsUE74LCUF0lBrY6ZsSNx2iMwSo7JbiOG0uYyO3kT4mFkZX60P7xeexMLeWgsUGOqUBGCe4Ryw%2FLAwOx%2BI45htlzsXe15u7jkc2Y5ysMZ1iUuHJXzRXNVQhRvac%2BqcMf5%2BhBUYrchnMkzb%2FhMoULrNjTG5JHLL3e6x3e7IaYsNfy3SLXnPbkCXWiSardm2JXWwqMrn9Nmz%2FxIBHFseyt6asO8FdvKclE%2BjkbcOKC1busYcrXHN9mG0yEdqwO8%2Bf883pPt414DtoY3qgCMb9yXqEd4cjhzMy&X-Amz-Signature=28bff05a0149b9351b08bb3b7568f18f450b9fc7887df65d1cbc59514aeab808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQANK6A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCczjtk3dCjWhzI1lq54XOot4CmR%2FgdRX2GggzWInL0fAIgN4NYobXxbRHYaAwyHlWnZ0knrQkPeBNJCKSkZebakQoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCGAVJikfvYI4jUkqyrcA4rDuCsJ22y5PQlD3hGIZXHSkYZX4UVfn4kblzqytnaj%2Fycu3mNep7Itwq2%2Ftg3LHIX07WHXR4oUEtPn0FBK99ZeT5D%2Fc6FaHgQlFIzSAe1%2B%2BD1GYQgX3TbCqGmW%2BdKyT1oDQySDFkQNi7D0n0FzCNwWD2dypHpN8I6toN7Wpm7YkJOPWuSF1NLvhFnUtlq55wd4YP74aYzsjNoitiPBpIea999J34poQSi1KDQcePr52zAZedtwtBHoW5sELngvHUEvHm6xlUMpoj92Pk5Radbi9KntbwWpbVPpH9WjSRCVZu5dud3tKPBRx0kbVBH0ZCfv%2BBRRZ9JealzxxNIvw3GUPLpXIHITGeZZaZbYgySVv%2F%2Fif4UqpUL3LNnk4ulFbEKZLNDM4TK3esg0a%2FlUUdwhZosXmzvUu99B6gBe2TqH7T%2FOSmpzmbELlCSKUVf9yHreivudS97yUZcMHUWe4ZbD8bsexsI%2Fz10hUh0kujyVyqvCSRq8tlWPaRYvazOUV8O%2Fi0nO2yBwh%2Bh%2Ff2r%2BJm9%2FAwdcyZh4lDE%2F4U6%2BnA27lbyTkqWdAyZKQ%2BwVKrKZ4dEpYrsUE74LCUF0lBrY6ZsSNx2iMwSo7JbiOG0uYyO3kT4mFkZX60P7xeexMLeWgsUGOqUBGCe4Ryw%2FLAwOx%2BI45htlzsXe15u7jkc2Y5ysMZ1iUuHJXzRXNVQhRvac%2BqcMf5%2BhBUYrchnMkzb%2FhMoULrNjTG5JHLL3e6x3e7IaYsNfy3SLXnPbkCXWiSardm2JXWwqMrn9Nmz%2FxIBHFseyt6asO8FdvKclE%2BjkbcOKC1busYcrXHN9mG0yEdqwO8%2Bf883pPt414DtoY3qgCMb9yXqEd4cjhzMy&X-Amz-Signature=6a75a9a8d54ff618492f7269e4f5f8a2cc5e7d591b6eab568d3be1e56680ba3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
