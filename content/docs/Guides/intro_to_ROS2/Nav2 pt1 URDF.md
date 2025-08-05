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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNI54NE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIElnUTMNsFHe0ELVv9xlZluZF7PxEkQL9dtna%2B1c4lMAAiAX384749pa%2BHg5mZCMXUk%2FrIRejSdkyLIPawCbPnKUUSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMn4cXF%2BddQYSUCv2DKtwDcIGg98wq1YO7EPg%2BpRyoR2MCa2VuzmtXBtKZX4WXmz7iIzq4MEVI6qibgPic%2BYPynoIRwLIqylu6%2FOQ06AR2ged37YnBaX0FchsQrJ28gtr44cfbzyJWSzJ%2FyFfIgfEQQqeriIfKEmCw8mjJBbRtGQvConQ%2BTPMvDuN0GVD3dZsHoL8qN8YZ8nZR1VrYxGu2c9QHGYpdpUWei2eqiFoTyptEqqrlVwV9jY5JrsVpgpeRXlpdrbpB0AUIvZ%2BcmkOpklD4iwbp5uRVQUz0VCTeY1Gy%2FJAM3ktImgeaxsBQ6geZpY4t0uzg9rw%2BUNA6BjCUC4iZP8zzrB3Dy4lSOTBmneBTOtw0AMOQ50%2F07BVOMwOgVC4v04aLKUTM6%2BaXtrmO2vZgXadm1MIS%2Bvxwa6SPV2BZvg7m2w%2BvaRV%2BOCzeMZFUr530fbWVpjc%2FvUa534XMXC0Fe0nQaBdUNom11YpNxPnr0rzEx6i70sys3A2wYM08nS%2BB%2BntgfxzgUf98GW7a2u6hPBkOPhv9uAuPqEF3mMkpijrZUW4dBZgM%2FcDoKC7ra9zHg3laLgVW%2FMXHINSlN5HPLpMPwXFfdAYWCKPSi9eCS30d3C8Eoq5ieCR2SjFlgph%2FFG%2F5vyi7y2swo6zHxAY6pgELmT6uCDp37ZOVeklosECD8SXMqvpPdSZFyOAV8u3O3ReSb1WbsQSRCGn6x1fKDx1Ig74tSuN2QAJj6qfucHaaMfUEIkX1YLWrMwxawNHSeSDEPSmAa%2Fz0mMGH8RJdu2WCUVtWtIFchoxecVviCWTR6iq3UNDZg0belOE4A2VeWqDEy32f8ky3si9xQlNaVmBGy2HrrG22zRBYLN3K8sCAwcjATLzR&X-Amz-Signature=51db95cd88f0c4cc516e3eb60de44623d4275ef97fa8eaf99abf3a0c63edbdf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNI54NE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIElnUTMNsFHe0ELVv9xlZluZF7PxEkQL9dtna%2B1c4lMAAiAX384749pa%2BHg5mZCMXUk%2FrIRejSdkyLIPawCbPnKUUSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMn4cXF%2BddQYSUCv2DKtwDcIGg98wq1YO7EPg%2BpRyoR2MCa2VuzmtXBtKZX4WXmz7iIzq4MEVI6qibgPic%2BYPynoIRwLIqylu6%2FOQ06AR2ged37YnBaX0FchsQrJ28gtr44cfbzyJWSzJ%2FyFfIgfEQQqeriIfKEmCw8mjJBbRtGQvConQ%2BTPMvDuN0GVD3dZsHoL8qN8YZ8nZR1VrYxGu2c9QHGYpdpUWei2eqiFoTyptEqqrlVwV9jY5JrsVpgpeRXlpdrbpB0AUIvZ%2BcmkOpklD4iwbp5uRVQUz0VCTeY1Gy%2FJAM3ktImgeaxsBQ6geZpY4t0uzg9rw%2BUNA6BjCUC4iZP8zzrB3Dy4lSOTBmneBTOtw0AMOQ50%2F07BVOMwOgVC4v04aLKUTM6%2BaXtrmO2vZgXadm1MIS%2Bvxwa6SPV2BZvg7m2w%2BvaRV%2BOCzeMZFUr530fbWVpjc%2FvUa534XMXC0Fe0nQaBdUNom11YpNxPnr0rzEx6i70sys3A2wYM08nS%2BB%2BntgfxzgUf98GW7a2u6hPBkOPhv9uAuPqEF3mMkpijrZUW4dBZgM%2FcDoKC7ra9zHg3laLgVW%2FMXHINSlN5HPLpMPwXFfdAYWCKPSi9eCS30d3C8Eoq5ieCR2SjFlgph%2FFG%2F5vyi7y2swo6zHxAY6pgELmT6uCDp37ZOVeklosECD8SXMqvpPdSZFyOAV8u3O3ReSb1WbsQSRCGn6x1fKDx1Ig74tSuN2QAJj6qfucHaaMfUEIkX1YLWrMwxawNHSeSDEPSmAa%2Fz0mMGH8RJdu2WCUVtWtIFchoxecVviCWTR6iq3UNDZg0belOE4A2VeWqDEy32f8ky3si9xQlNaVmBGy2HrrG22zRBYLN3K8sCAwcjATLzR&X-Amz-Signature=96c665da3762ec049a1b78c0a0eb2481c75b64d20d8947cdd81a952247fff817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNI54NE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIElnUTMNsFHe0ELVv9xlZluZF7PxEkQL9dtna%2B1c4lMAAiAX384749pa%2BHg5mZCMXUk%2FrIRejSdkyLIPawCbPnKUUSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMn4cXF%2BddQYSUCv2DKtwDcIGg98wq1YO7EPg%2BpRyoR2MCa2VuzmtXBtKZX4WXmz7iIzq4MEVI6qibgPic%2BYPynoIRwLIqylu6%2FOQ06AR2ged37YnBaX0FchsQrJ28gtr44cfbzyJWSzJ%2FyFfIgfEQQqeriIfKEmCw8mjJBbRtGQvConQ%2BTPMvDuN0GVD3dZsHoL8qN8YZ8nZR1VrYxGu2c9QHGYpdpUWei2eqiFoTyptEqqrlVwV9jY5JrsVpgpeRXlpdrbpB0AUIvZ%2BcmkOpklD4iwbp5uRVQUz0VCTeY1Gy%2FJAM3ktImgeaxsBQ6geZpY4t0uzg9rw%2BUNA6BjCUC4iZP8zzrB3Dy4lSOTBmneBTOtw0AMOQ50%2F07BVOMwOgVC4v04aLKUTM6%2BaXtrmO2vZgXadm1MIS%2Bvxwa6SPV2BZvg7m2w%2BvaRV%2BOCzeMZFUr530fbWVpjc%2FvUa534XMXC0Fe0nQaBdUNom11YpNxPnr0rzEx6i70sys3A2wYM08nS%2BB%2BntgfxzgUf98GW7a2u6hPBkOPhv9uAuPqEF3mMkpijrZUW4dBZgM%2FcDoKC7ra9zHg3laLgVW%2FMXHINSlN5HPLpMPwXFfdAYWCKPSi9eCS30d3C8Eoq5ieCR2SjFlgph%2FFG%2F5vyi7y2swo6zHxAY6pgELmT6uCDp37ZOVeklosECD8SXMqvpPdSZFyOAV8u3O3ReSb1WbsQSRCGn6x1fKDx1Ig74tSuN2QAJj6qfucHaaMfUEIkX1YLWrMwxawNHSeSDEPSmAa%2Fz0mMGH8RJdu2WCUVtWtIFchoxecVviCWTR6iq3UNDZg0belOE4A2VeWqDEy32f8ky3si9xQlNaVmBGy2HrrG22zRBYLN3K8sCAwcjATLzR&X-Amz-Signature=5f8493ebcb89f955e41c45e1d79e6dc65bf45d70c39e6accbfaa4c520f7c330f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNI54NE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIElnUTMNsFHe0ELVv9xlZluZF7PxEkQL9dtna%2B1c4lMAAiAX384749pa%2BHg5mZCMXUk%2FrIRejSdkyLIPawCbPnKUUSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMn4cXF%2BddQYSUCv2DKtwDcIGg98wq1YO7EPg%2BpRyoR2MCa2VuzmtXBtKZX4WXmz7iIzq4MEVI6qibgPic%2BYPynoIRwLIqylu6%2FOQ06AR2ged37YnBaX0FchsQrJ28gtr44cfbzyJWSzJ%2FyFfIgfEQQqeriIfKEmCw8mjJBbRtGQvConQ%2BTPMvDuN0GVD3dZsHoL8qN8YZ8nZR1VrYxGu2c9QHGYpdpUWei2eqiFoTyptEqqrlVwV9jY5JrsVpgpeRXlpdrbpB0AUIvZ%2BcmkOpklD4iwbp5uRVQUz0VCTeY1Gy%2FJAM3ktImgeaxsBQ6geZpY4t0uzg9rw%2BUNA6BjCUC4iZP8zzrB3Dy4lSOTBmneBTOtw0AMOQ50%2F07BVOMwOgVC4v04aLKUTM6%2BaXtrmO2vZgXadm1MIS%2Bvxwa6SPV2BZvg7m2w%2BvaRV%2BOCzeMZFUr530fbWVpjc%2FvUa534XMXC0Fe0nQaBdUNom11YpNxPnr0rzEx6i70sys3A2wYM08nS%2BB%2BntgfxzgUf98GW7a2u6hPBkOPhv9uAuPqEF3mMkpijrZUW4dBZgM%2FcDoKC7ra9zHg3laLgVW%2FMXHINSlN5HPLpMPwXFfdAYWCKPSi9eCS30d3C8Eoq5ieCR2SjFlgph%2FFG%2F5vyi7y2swo6zHxAY6pgELmT6uCDp37ZOVeklosECD8SXMqvpPdSZFyOAV8u3O3ReSb1WbsQSRCGn6x1fKDx1Ig74tSuN2QAJj6qfucHaaMfUEIkX1YLWrMwxawNHSeSDEPSmAa%2Fz0mMGH8RJdu2WCUVtWtIFchoxecVviCWTR6iq3UNDZg0belOE4A2VeWqDEy32f8ky3si9xQlNaVmBGy2HrrG22zRBYLN3K8sCAwcjATLzR&X-Amz-Signature=87e70fe25d5160a691a0264d102d14ac7dfb643142e288492cf74e5765f2eda9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNI54NE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIElnUTMNsFHe0ELVv9xlZluZF7PxEkQL9dtna%2B1c4lMAAiAX384749pa%2BHg5mZCMXUk%2FrIRejSdkyLIPawCbPnKUUSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMn4cXF%2BddQYSUCv2DKtwDcIGg98wq1YO7EPg%2BpRyoR2MCa2VuzmtXBtKZX4WXmz7iIzq4MEVI6qibgPic%2BYPynoIRwLIqylu6%2FOQ06AR2ged37YnBaX0FchsQrJ28gtr44cfbzyJWSzJ%2FyFfIgfEQQqeriIfKEmCw8mjJBbRtGQvConQ%2BTPMvDuN0GVD3dZsHoL8qN8YZ8nZR1VrYxGu2c9QHGYpdpUWei2eqiFoTyptEqqrlVwV9jY5JrsVpgpeRXlpdrbpB0AUIvZ%2BcmkOpklD4iwbp5uRVQUz0VCTeY1Gy%2FJAM3ktImgeaxsBQ6geZpY4t0uzg9rw%2BUNA6BjCUC4iZP8zzrB3Dy4lSOTBmneBTOtw0AMOQ50%2F07BVOMwOgVC4v04aLKUTM6%2BaXtrmO2vZgXadm1MIS%2Bvxwa6SPV2BZvg7m2w%2BvaRV%2BOCzeMZFUr530fbWVpjc%2FvUa534XMXC0Fe0nQaBdUNom11YpNxPnr0rzEx6i70sys3A2wYM08nS%2BB%2BntgfxzgUf98GW7a2u6hPBkOPhv9uAuPqEF3mMkpijrZUW4dBZgM%2FcDoKC7ra9zHg3laLgVW%2FMXHINSlN5HPLpMPwXFfdAYWCKPSi9eCS30d3C8Eoq5ieCR2SjFlgph%2FFG%2F5vyi7y2swo6zHxAY6pgELmT6uCDp37ZOVeklosECD8SXMqvpPdSZFyOAV8u3O3ReSb1WbsQSRCGn6x1fKDx1Ig74tSuN2QAJj6qfucHaaMfUEIkX1YLWrMwxawNHSeSDEPSmAa%2Fz0mMGH8RJdu2WCUVtWtIFchoxecVviCWTR6iq3UNDZg0belOE4A2VeWqDEy32f8ky3si9xQlNaVmBGy2HrrG22zRBYLN3K8sCAwcjATLzR&X-Amz-Signature=97fc1e98d4e06319560e34725b7299d60465404c5ce0dc07ed24e861b4044ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNI54NE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIElnUTMNsFHe0ELVv9xlZluZF7PxEkQL9dtna%2B1c4lMAAiAX384749pa%2BHg5mZCMXUk%2FrIRejSdkyLIPawCbPnKUUSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMn4cXF%2BddQYSUCv2DKtwDcIGg98wq1YO7EPg%2BpRyoR2MCa2VuzmtXBtKZX4WXmz7iIzq4MEVI6qibgPic%2BYPynoIRwLIqylu6%2FOQ06AR2ged37YnBaX0FchsQrJ28gtr44cfbzyJWSzJ%2FyFfIgfEQQqeriIfKEmCw8mjJBbRtGQvConQ%2BTPMvDuN0GVD3dZsHoL8qN8YZ8nZR1VrYxGu2c9QHGYpdpUWei2eqiFoTyptEqqrlVwV9jY5JrsVpgpeRXlpdrbpB0AUIvZ%2BcmkOpklD4iwbp5uRVQUz0VCTeY1Gy%2FJAM3ktImgeaxsBQ6geZpY4t0uzg9rw%2BUNA6BjCUC4iZP8zzrB3Dy4lSOTBmneBTOtw0AMOQ50%2F07BVOMwOgVC4v04aLKUTM6%2BaXtrmO2vZgXadm1MIS%2Bvxwa6SPV2BZvg7m2w%2BvaRV%2BOCzeMZFUr530fbWVpjc%2FvUa534XMXC0Fe0nQaBdUNom11YpNxPnr0rzEx6i70sys3A2wYM08nS%2BB%2BntgfxzgUf98GW7a2u6hPBkOPhv9uAuPqEF3mMkpijrZUW4dBZgM%2FcDoKC7ra9zHg3laLgVW%2FMXHINSlN5HPLpMPwXFfdAYWCKPSi9eCS30d3C8Eoq5ieCR2SjFlgph%2FFG%2F5vyi7y2swo6zHxAY6pgELmT6uCDp37ZOVeklosECD8SXMqvpPdSZFyOAV8u3O3ReSb1WbsQSRCGn6x1fKDx1Ig74tSuN2QAJj6qfucHaaMfUEIkX1YLWrMwxawNHSeSDEPSmAa%2Fz0mMGH8RJdu2WCUVtWtIFchoxecVviCWTR6iq3UNDZg0belOE4A2VeWqDEy32f8ky3si9xQlNaVmBGy2HrrG22zRBYLN3K8sCAwcjATLzR&X-Amz-Signature=0cf22e4f867aa42ac2caa3160ee21a898738df70c30f8e3d995b717b583e3173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNI54NE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIElnUTMNsFHe0ELVv9xlZluZF7PxEkQL9dtna%2B1c4lMAAiAX384749pa%2BHg5mZCMXUk%2FrIRejSdkyLIPawCbPnKUUSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMn4cXF%2BddQYSUCv2DKtwDcIGg98wq1YO7EPg%2BpRyoR2MCa2VuzmtXBtKZX4WXmz7iIzq4MEVI6qibgPic%2BYPynoIRwLIqylu6%2FOQ06AR2ged37YnBaX0FchsQrJ28gtr44cfbzyJWSzJ%2FyFfIgfEQQqeriIfKEmCw8mjJBbRtGQvConQ%2BTPMvDuN0GVD3dZsHoL8qN8YZ8nZR1VrYxGu2c9QHGYpdpUWei2eqiFoTyptEqqrlVwV9jY5JrsVpgpeRXlpdrbpB0AUIvZ%2BcmkOpklD4iwbp5uRVQUz0VCTeY1Gy%2FJAM3ktImgeaxsBQ6geZpY4t0uzg9rw%2BUNA6BjCUC4iZP8zzrB3Dy4lSOTBmneBTOtw0AMOQ50%2F07BVOMwOgVC4v04aLKUTM6%2BaXtrmO2vZgXadm1MIS%2Bvxwa6SPV2BZvg7m2w%2BvaRV%2BOCzeMZFUr530fbWVpjc%2FvUa534XMXC0Fe0nQaBdUNom11YpNxPnr0rzEx6i70sys3A2wYM08nS%2BB%2BntgfxzgUf98GW7a2u6hPBkOPhv9uAuPqEF3mMkpijrZUW4dBZgM%2FcDoKC7ra9zHg3laLgVW%2FMXHINSlN5HPLpMPwXFfdAYWCKPSi9eCS30d3C8Eoq5ieCR2SjFlgph%2FFG%2F5vyi7y2swo6zHxAY6pgELmT6uCDp37ZOVeklosECD8SXMqvpPdSZFyOAV8u3O3ReSb1WbsQSRCGn6x1fKDx1Ig74tSuN2QAJj6qfucHaaMfUEIkX1YLWrMwxawNHSeSDEPSmAa%2Fz0mMGH8RJdu2WCUVtWtIFchoxecVviCWTR6iq3UNDZg0belOE4A2VeWqDEy32f8ky3si9xQlNaVmBGy2HrrG22zRBYLN3K8sCAwcjATLzR&X-Amz-Signature=9cad80cd21a3228c46d95340b4dcd6a55e0058eb2810e812b753f2059fa80e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNI54NE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIElnUTMNsFHe0ELVv9xlZluZF7PxEkQL9dtna%2B1c4lMAAiAX384749pa%2BHg5mZCMXUk%2FrIRejSdkyLIPawCbPnKUUSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMn4cXF%2BddQYSUCv2DKtwDcIGg98wq1YO7EPg%2BpRyoR2MCa2VuzmtXBtKZX4WXmz7iIzq4MEVI6qibgPic%2BYPynoIRwLIqylu6%2FOQ06AR2ged37YnBaX0FchsQrJ28gtr44cfbzyJWSzJ%2FyFfIgfEQQqeriIfKEmCw8mjJBbRtGQvConQ%2BTPMvDuN0GVD3dZsHoL8qN8YZ8nZR1VrYxGu2c9QHGYpdpUWei2eqiFoTyptEqqrlVwV9jY5JrsVpgpeRXlpdrbpB0AUIvZ%2BcmkOpklD4iwbp5uRVQUz0VCTeY1Gy%2FJAM3ktImgeaxsBQ6geZpY4t0uzg9rw%2BUNA6BjCUC4iZP8zzrB3Dy4lSOTBmneBTOtw0AMOQ50%2F07BVOMwOgVC4v04aLKUTM6%2BaXtrmO2vZgXadm1MIS%2Bvxwa6SPV2BZvg7m2w%2BvaRV%2BOCzeMZFUr530fbWVpjc%2FvUa534XMXC0Fe0nQaBdUNom11YpNxPnr0rzEx6i70sys3A2wYM08nS%2BB%2BntgfxzgUf98GW7a2u6hPBkOPhv9uAuPqEF3mMkpijrZUW4dBZgM%2FcDoKC7ra9zHg3laLgVW%2FMXHINSlN5HPLpMPwXFfdAYWCKPSi9eCS30d3C8Eoq5ieCR2SjFlgph%2FFG%2F5vyi7y2swo6zHxAY6pgELmT6uCDp37ZOVeklosECD8SXMqvpPdSZFyOAV8u3O3ReSb1WbsQSRCGn6x1fKDx1Ig74tSuN2QAJj6qfucHaaMfUEIkX1YLWrMwxawNHSeSDEPSmAa%2Fz0mMGH8RJdu2WCUVtWtIFchoxecVviCWTR6iq3UNDZg0belOE4A2VeWqDEy32f8ky3si9xQlNaVmBGy2HrrG22zRBYLN3K8sCAwcjATLzR&X-Amz-Signature=ef65f8cbe2d4f2f4dfe52512ff1acf5a1bacebd492da62783e7f3b066a792e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNI54NE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIElnUTMNsFHe0ELVv9xlZluZF7PxEkQL9dtna%2B1c4lMAAiAX384749pa%2BHg5mZCMXUk%2FrIRejSdkyLIPawCbPnKUUSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMn4cXF%2BddQYSUCv2DKtwDcIGg98wq1YO7EPg%2BpRyoR2MCa2VuzmtXBtKZX4WXmz7iIzq4MEVI6qibgPic%2BYPynoIRwLIqylu6%2FOQ06AR2ged37YnBaX0FchsQrJ28gtr44cfbzyJWSzJ%2FyFfIgfEQQqeriIfKEmCw8mjJBbRtGQvConQ%2BTPMvDuN0GVD3dZsHoL8qN8YZ8nZR1VrYxGu2c9QHGYpdpUWei2eqiFoTyptEqqrlVwV9jY5JrsVpgpeRXlpdrbpB0AUIvZ%2BcmkOpklD4iwbp5uRVQUz0VCTeY1Gy%2FJAM3ktImgeaxsBQ6geZpY4t0uzg9rw%2BUNA6BjCUC4iZP8zzrB3Dy4lSOTBmneBTOtw0AMOQ50%2F07BVOMwOgVC4v04aLKUTM6%2BaXtrmO2vZgXadm1MIS%2Bvxwa6SPV2BZvg7m2w%2BvaRV%2BOCzeMZFUr530fbWVpjc%2FvUa534XMXC0Fe0nQaBdUNom11YpNxPnr0rzEx6i70sys3A2wYM08nS%2BB%2BntgfxzgUf98GW7a2u6hPBkOPhv9uAuPqEF3mMkpijrZUW4dBZgM%2FcDoKC7ra9zHg3laLgVW%2FMXHINSlN5HPLpMPwXFfdAYWCKPSi9eCS30d3C8Eoq5ieCR2SjFlgph%2FFG%2F5vyi7y2swo6zHxAY6pgELmT6uCDp37ZOVeklosECD8SXMqvpPdSZFyOAV8u3O3ReSb1WbsQSRCGn6x1fKDx1Ig74tSuN2QAJj6qfucHaaMfUEIkX1YLWrMwxawNHSeSDEPSmAa%2Fz0mMGH8RJdu2WCUVtWtIFchoxecVviCWTR6iq3UNDZg0belOE4A2VeWqDEy32f8ky3si9xQlNaVmBGy2HrrG22zRBYLN3K8sCAwcjATLzR&X-Amz-Signature=9eb6353b05ce497d39f9ed651da22ede3ca05550382eb06cce43bbf04c28dc41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNI54NE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIElnUTMNsFHe0ELVv9xlZluZF7PxEkQL9dtna%2B1c4lMAAiAX384749pa%2BHg5mZCMXUk%2FrIRejSdkyLIPawCbPnKUUSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMn4cXF%2BddQYSUCv2DKtwDcIGg98wq1YO7EPg%2BpRyoR2MCa2VuzmtXBtKZX4WXmz7iIzq4MEVI6qibgPic%2BYPynoIRwLIqylu6%2FOQ06AR2ged37YnBaX0FchsQrJ28gtr44cfbzyJWSzJ%2FyFfIgfEQQqeriIfKEmCw8mjJBbRtGQvConQ%2BTPMvDuN0GVD3dZsHoL8qN8YZ8nZR1VrYxGu2c9QHGYpdpUWei2eqiFoTyptEqqrlVwV9jY5JrsVpgpeRXlpdrbpB0AUIvZ%2BcmkOpklD4iwbp5uRVQUz0VCTeY1Gy%2FJAM3ktImgeaxsBQ6geZpY4t0uzg9rw%2BUNA6BjCUC4iZP8zzrB3Dy4lSOTBmneBTOtw0AMOQ50%2F07BVOMwOgVC4v04aLKUTM6%2BaXtrmO2vZgXadm1MIS%2Bvxwa6SPV2BZvg7m2w%2BvaRV%2BOCzeMZFUr530fbWVpjc%2FvUa534XMXC0Fe0nQaBdUNom11YpNxPnr0rzEx6i70sys3A2wYM08nS%2BB%2BntgfxzgUf98GW7a2u6hPBkOPhv9uAuPqEF3mMkpijrZUW4dBZgM%2FcDoKC7ra9zHg3laLgVW%2FMXHINSlN5HPLpMPwXFfdAYWCKPSi9eCS30d3C8Eoq5ieCR2SjFlgph%2FFG%2F5vyi7y2swo6zHxAY6pgELmT6uCDp37ZOVeklosECD8SXMqvpPdSZFyOAV8u3O3ReSb1WbsQSRCGn6x1fKDx1Ig74tSuN2QAJj6qfucHaaMfUEIkX1YLWrMwxawNHSeSDEPSmAa%2Fz0mMGH8RJdu2WCUVtWtIFchoxecVviCWTR6iq3UNDZg0belOE4A2VeWqDEy32f8ky3si9xQlNaVmBGy2HrrG22zRBYLN3K8sCAwcjATLzR&X-Amz-Signature=9ec43c8df4112471d6e01f0c187e22caa018c5c2bc6b375ae7f9be98853676cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ5F6F6V%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCdho54rmYEz%2FUi1PCUD0F4ybF3NDm0yhFDqACCmSLGoQIhAJaqx9omgJv8L2rLqFBGoOSHjstMXxnqwXOZMC5HuXm1Kv8DCFsQABoMNjM3NDIzMTgzODA1Igz%2Bmh%2BuCrxn1USnLQIq3AMqjYs3uzUB4dtK73PgylccAB%2FQWeks%2FS34DXTg%2BW2%2B2OpMSizd4Rno03ddf%2BZl90dEAZmiQ8Bl8TPAJIzMemWPShjVF3tnRsFknriMDs890IAArGIJj%2F%2BfB%2BQI0T2HxYasC4aMi06yjKJvK%2FsOJJBr4SP%2B8UuswZE3xASAWq%2F2LsWhfomsNt4LPN2sYFboZL1nrdw%2BnxgKg%2F%2FEG%2Fbe3CfBkE5XVhKVHPi06gbOshu4oknjqZ1L0qZ%2BgbRDgG4VG3AcITnu9ll%2FD%2FAaZ86t7rFCRIZvlLt8TzJlLs1X758MOVtsbkGX3OV4yxmKj%2BkLxFk2Zfl5Iy9zHyp%2B6yIBmR%2Fj8ZojyUGNdClPDRu5EA6r88makr%2FUjC9XRhNW4ug04ZKrsWFQiEMiYCFL1U6H0f72iOjAgtDGGFRN8m8A40OY5qF1tIYjs9qkjIO9O77X6hs86OgCVw35PFTk2JXOyXVaytyGEfUNWJmMu%2FKUGghl75rUygdSrq2MQHKhBH0olhWpoCRB29lG6jTC9kIk2HYeUDwETh7XiklgquYSbEXWpLEbwKei%2FnW%2B1PMCBwcjgTsfJbqz1m6JMVtYCAPttG7tmQDWR8XrdxSHCfIzCxXTXpN7ASuWAuDypzYUNjCLrsfEBjqkAV057wOUROi9L7wI9Km9vm6%2FD6KBY%2FI1MLQA1PHaghJ%2B1yhuBYyMEwtXvcS8Q15FmkUtVortyhulDTs2a%2B9P60P7IppQkd4HHNknrm7bDWmqk0uplMascDZyU%2BKUbkitk9mK4IAkrRYbRkpmv9zedQPkjvs%2B31i9cCNbJEKTH0ynCHIXtAjT4HYoprcg2cIL7BNRrgmuYgvvclXmfVaEB1xQeqQz&X-Amz-Signature=eb1b9776fb1e20666b773f724c9ce2f168fe9ebd2236c31560a1dfbaabfbfb8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B54ZQUM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIAjgRx47093ze6MMoeYoLFl9cdmInHq0xJ6kWZmsJIRMAiB1W6qJCcFPJndOLRXlfqFQjJEG0WnHVpR8aj8Q3Pj6xSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMAaBC40FG6CqYRxEYKtwD5MnnhSjBdQjTJGG81nJNSPwPifCrT1H1LJzWdcGTGxqYurb9rUzZR%2FlOcR87zyXir2DvkQmD5WRsUnypp4%2Fcky0G5Y31yWkLc5W98LKyiiQ1%2FDxJPQZJpbs2TkQu7l%2FZqQ9jHjkPJ%2FZyqaK6pW6AmYIh4mp%2BHAzMcKI29aqA1Gl2tRbnnZE8NgVZxJ5byYR5rg%2FDVHPk98w%2FeAFHHV1WcESbp49lHG8TtOJX77E2JCvq0N5Jud%2FM4Q%2FKuDAh%2FtpQAPSnM5gfiw6BeumRkJxWxmeSsS6SyMNB2qGT8Ho8GvXYlk5J8e9N7vyJcH77lhvQxGaRLepoVLjAKo%2Fw%2Ffr60Yck6iNDWKaCSjxF5g%2BiYs4y1uwJ%2Fn1FeVudpEPBtBmJYUX96PWHWMrcgnIq3AkAhRmELbUVyS4EOeegYZkogPvgMLn99wWutgnC35TjOv4xWKm%2BGwoCLsmp%2F2xNgtQPo3Dk7gzLtj6ZA9BsryYyyTuq4wRIyaSZ12d5KeCgVJCC4qCO%2BLYyZsHyQm%2FKxickL7KB1cI6tHeNcICH4f47FjncF%2FUhH5fqItdgAHrutvT2X8z7X9sJzkuNxNf88ch%2FLiBLbFR6g0UA3FhgO3ZuSO%2Bc4Z1S%2BH1UDu2K6OcwoqzHxAY6pgERPxa%2BsP88xBwm%2B0RTc8iKOw8DMbxMFfhF4Zd5%2B5QlrJQRLhmIcTGomtZNgXXyZRgo1iSgpVNEc0zEqa5QDjSZ1nq59Ez3Ah8uKngVXAlw%2Ff2D6GFWVGFak4%2Bf4n3JtiTiyyJJ6wAOYlxKOtZxMqUQiCJwVhyz%2Fx%2F2DoDpYDluKf%2BwTohbdj5UbaF%2FSCv617iXOoxz%2B9kTnSA6jAcAOFPwpL0wOLuk&X-Amz-Signature=c808249fad8ad48eb00c67b845c432d24fec5272f8e4abeeb10bcab17e3da46d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PQIQRME%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCtjeHnTfGxHdBO3JWfxw4FcLwpFCjB%2FCzGO2MD7C3INAIhAIcuW9OhuUpCIVksS%2BjOKCeweY6tsrSvyxth%2FbFZVvSRKv8DCFsQABoMNjM3NDIzMTgzODA1Igyil2jtMY%2FlcC1J6EEq3AOoV8Jv3%2FI8w6y04kSDiE9%2Bcv69PTqzYvzvpgeqEFxdTvuNnescdgnROo3ILQUW4u1VM9fPbfNQ44NRgOyDdipVzKmx8tqm1W0h8YFceSJmeEtqyYGaYBiwaV1xhP8sLxZxzb08aRhTgmGVbECM%2F34O7nXxcx%2Br2pn8ik29PNcz%2FoyY6YiwM%2F9D3j%2BcY9RocbFrO4b2EUFq2s3CFQO9BvfsvhVddmbdsVJ%2FXNPc%2Ffe1AxlZoou6Fsg3ZIoXVrdhmV%2BsGoXB7ZgsEHkHWjTmpA79j5p6G1ATtFDFeb%2BhHrUBMJyxyegPozYTPJ948t7pLoIskgmVqDsCpdqblfxwEwcQi4ubrTYsusFqGWmrimAvjPA48Fh7dnHf87HQBWbrG8oR5IdrLd%2FzH2hXNnmUz86Dy7ZIIedGWBaQgNPkNCi%2B9v%2F%2FD1acJXN92d1Dk8C9eqJIuW6yhe25OkZh6cs5xN1TlppptD%2FsJJLQ74YVyGFKL6h%2BulqCfNMkIN%2BbTbNTmD7uvzYG5JatPFkICp8d9DDBYQB6LE24fnS0jXBSoefoPkHaEcrg%2BR6uzw0%2Bzdm1VlKR%2BS2QSmAl1UNjeEsr8KKzsNY5Vp7ibSULAxyZ9mUPOWUGr2sEcInfiY8rPjDHrcfEBjqkAT3V5mU7AoGHeV2N4PTR5wyIU0H6f0CA5lexDh1XuilaKpW0nDCCbBQMFE65v9yQEUHWkh%2BSBHi92KP6XuH4cfZ0CJJ0fr5XQMhl2CrI3vwhI%2BiSn9ZQ4Y%2BtDvHH2LZgkuuQkjaoR9Mr274tWgc15mIEnAneAn%2Bz3y%2BcSJea6GIjBrG0BbNoRSVfD4YzXCxRb%2B1NAY9ul8PPohGBjBTf7vP0nvv6&X-Amz-Signature=0ec71aef069c683cf79352b42028e2956b05dfcecaebe3ce2197a21fdaf75870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNI54NE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIElnUTMNsFHe0ELVv9xlZluZF7PxEkQL9dtna%2B1c4lMAAiAX384749pa%2BHg5mZCMXUk%2FrIRejSdkyLIPawCbPnKUUSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMn4cXF%2BddQYSUCv2DKtwDcIGg98wq1YO7EPg%2BpRyoR2MCa2VuzmtXBtKZX4WXmz7iIzq4MEVI6qibgPic%2BYPynoIRwLIqylu6%2FOQ06AR2ged37YnBaX0FchsQrJ28gtr44cfbzyJWSzJ%2FyFfIgfEQQqeriIfKEmCw8mjJBbRtGQvConQ%2BTPMvDuN0GVD3dZsHoL8qN8YZ8nZR1VrYxGu2c9QHGYpdpUWei2eqiFoTyptEqqrlVwV9jY5JrsVpgpeRXlpdrbpB0AUIvZ%2BcmkOpklD4iwbp5uRVQUz0VCTeY1Gy%2FJAM3ktImgeaxsBQ6geZpY4t0uzg9rw%2BUNA6BjCUC4iZP8zzrB3Dy4lSOTBmneBTOtw0AMOQ50%2F07BVOMwOgVC4v04aLKUTM6%2BaXtrmO2vZgXadm1MIS%2Bvxwa6SPV2BZvg7m2w%2BvaRV%2BOCzeMZFUr530fbWVpjc%2FvUa534XMXC0Fe0nQaBdUNom11YpNxPnr0rzEx6i70sys3A2wYM08nS%2BB%2BntgfxzgUf98GW7a2u6hPBkOPhv9uAuPqEF3mMkpijrZUW4dBZgM%2FcDoKC7ra9zHg3laLgVW%2FMXHINSlN5HPLpMPwXFfdAYWCKPSi9eCS30d3C8Eoq5ieCR2SjFlgph%2FFG%2F5vyi7y2swo6zHxAY6pgELmT6uCDp37ZOVeklosECD8SXMqvpPdSZFyOAV8u3O3ReSb1WbsQSRCGn6x1fKDx1Ig74tSuN2QAJj6qfucHaaMfUEIkX1YLWrMwxawNHSeSDEPSmAa%2Fz0mMGH8RJdu2WCUVtWtIFchoxecVviCWTR6iq3UNDZg0belOE4A2VeWqDEy32f8ky3si9xQlNaVmBGy2HrrG22zRBYLN3K8sCAwcjATLzR&X-Amz-Signature=a0b8a09c9b8c6f07ec756af1944293fdc7dbfa8c8614031ec5ef626c7b413ec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAF4U72V%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCfLulqgUDk508QrHQwTleLkLgVuQdUZcDnoFg0kpNrogIgOaXGhjviXkgn2a4m9pCGs0RXY2ngOAZpiBgFiPiK64gq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDHggQEoCFWYdoo%2BMLSrcA%2FFeVipOsK2cbZ6mQqWFsRqUQxss6X9ICoRIMzAgDgFWY4wXy39erP%2FzDdCTV2bcUQ9%2FBY5EGq219VG7xzsHZTdmFwrrekgjWtetF6ItB0Rrmk7dPuG8JuTUA2kbf7ni2FUqZAuGN9%2FHK5qAhW0YloN0w%2FxOrQzLA%2BlDHpXcdT92IjAZottE%2BgoMQf4yRq6ZOs8bQl0QIeSNq6R%2BIjoGOmEJHwb%2BT5FvkXE4Dfo1ahl6f9Q7DkjGWOeU%2BrzZaho5e58Xcl1nImyCkGZu%2B0ZJ87g8srgZBAeEn%2F6IRYLM%2B0vn5FHt3k0fkIwJSUpsNNQRuwDKt5wh%2BEks8cQgDhxarIxlCBqxqyOJGNyJcWfXxcnVcoio%2BZ4TV6xP%2FwfQhXUJWGUZogwW2CXR%2F%2Br4t5hegbODL62y3gyiqyClHNDgQeV08j2xGElKkW7PxjKbWoOTej3STK54MggTyyYUmNw7anC8itN%2Ft%2FZRnuOYah1mV%2FuFacdzzonLA406eKhGiY26egaMQSfGg5V%2BqgNCkwxe3Wj6zMoihysGYcr%2F5A3FzRcNhdJJQ6TOmPnZgbvirD2JT%2BixXvEufb4K2qVybUoNo%2BzVkgzvbsz9doGZG6x5ZOLEFs5k%2FnUfNK7Ib2O1MOqsx8QGOqUBm%2B5xNaC3QNgh3kk4YYXc9AEdCQH2wD7LQyEeuQ4y4wVHRwLA1Dkk1aKuht6RC1WU3aD6rJcieJFU2Jmi75EhFxHG%2BdAdRTNYcyP04CoWiyVmC4EIq6BW0U%2BC7EUFPgA52er%2BfS28EFFFrEBEq5hpF%2BCXAlkGyxwfsqwcTXzAMeQnQh8Uv2gdZQlDKyNFpzEBwawD4skEFKBt4bUqqCaI1NqDdJqm&X-Amz-Signature=a30311bfb6322bba7707bd34eccda6f831dd18cd6cbc5335ffc05304195d2614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNI54NE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIElnUTMNsFHe0ELVv9xlZluZF7PxEkQL9dtna%2B1c4lMAAiAX384749pa%2BHg5mZCMXUk%2FrIRejSdkyLIPawCbPnKUUSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMn4cXF%2BddQYSUCv2DKtwDcIGg98wq1YO7EPg%2BpRyoR2MCa2VuzmtXBtKZX4WXmz7iIzq4MEVI6qibgPic%2BYPynoIRwLIqylu6%2FOQ06AR2ged37YnBaX0FchsQrJ28gtr44cfbzyJWSzJ%2FyFfIgfEQQqeriIfKEmCw8mjJBbRtGQvConQ%2BTPMvDuN0GVD3dZsHoL8qN8YZ8nZR1VrYxGu2c9QHGYpdpUWei2eqiFoTyptEqqrlVwV9jY5JrsVpgpeRXlpdrbpB0AUIvZ%2BcmkOpklD4iwbp5uRVQUz0VCTeY1Gy%2FJAM3ktImgeaxsBQ6geZpY4t0uzg9rw%2BUNA6BjCUC4iZP8zzrB3Dy4lSOTBmneBTOtw0AMOQ50%2F07BVOMwOgVC4v04aLKUTM6%2BaXtrmO2vZgXadm1MIS%2Bvxwa6SPV2BZvg7m2w%2BvaRV%2BOCzeMZFUr530fbWVpjc%2FvUa534XMXC0Fe0nQaBdUNom11YpNxPnr0rzEx6i70sys3A2wYM08nS%2BB%2BntgfxzgUf98GW7a2u6hPBkOPhv9uAuPqEF3mMkpijrZUW4dBZgM%2FcDoKC7ra9zHg3laLgVW%2FMXHINSlN5HPLpMPwXFfdAYWCKPSi9eCS30d3C8Eoq5ieCR2SjFlgph%2FFG%2F5vyi7y2swo6zHxAY6pgELmT6uCDp37ZOVeklosECD8SXMqvpPdSZFyOAV8u3O3ReSb1WbsQSRCGn6x1fKDx1Ig74tSuN2QAJj6qfucHaaMfUEIkX1YLWrMwxawNHSeSDEPSmAa%2Fz0mMGH8RJdu2WCUVtWtIFchoxecVviCWTR6iq3UNDZg0belOE4A2VeWqDEy32f8ky3si9xQlNaVmBGy2HrrG22zRBYLN3K8sCAwcjATLzR&X-Amz-Signature=57f141acec0f2782587a1b82960839009b171754584a7c33be2402fb74b88dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THT5D33X%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBVqZbC7q5aLw5ljotuJ6p7ptqxsfYJqe0%2BGoJt3HZqDAiAQ6Nn6Vq6sOsQwlTH2QBRWDWSmzDtzrFR5j47%2F7Zsi7Sr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMPAVlnqtPm3KivTPvKtwDlnVMByZ3aPUenIGXpdpS2iaTQO802sZ1SXskbx9%2Brde7NpUN7JtOgf6FXKBmTFVBBUHlajPJ4f8w3MPhh2%2FtTtTwIP2tzfk%2BfqgFbNMIlfxQ4uY6bX9Lg8CaaPT53PYMmjSgHldfjYDdf3EaUlM08ork1T8Sy7TDIbNeE2kHQXxgUPEKNECzebPPPLCgZ%2BsmL71kYnjvvaFolFqZsuvCcBMMnphrUA8NiMEKvQfmZVi1wvWu7ANtg0sC2bk7bsL%2FyXdtli34h3M%2B%2BtNGP75ndhl74eFeby7LTlEWv8ulTcC9okK3peiPWYOztT3f3%2B8eIJhZZZybkvGOle9ZR2PH7wixU%2FqUydTKxqIYuhljuiTOI%2FPfAA%2B%2B8s2GI4NDjUINHfhIl1MJv12aCye5vMsHFofRyBh9GFH6XzgkcstJwOEfF2Mv6OVxofdHGi06%2Bw%2BOJWZlW1%2FL2RFcarzAkdIBwu7AfmBkUVoYib5hFk9sI0wTi5z0pQygZMIBX09OZcJawvfmy7aoZmvjDcwFcp8hJO3BEOwCBVr%2BQJgYYRiJ%2Bfux74xVwvQbG5mj9SQQPDsnkizz01iRiMXaKGbA0fG0wRI7OS2VBmoQW1VZXxm8fDFF8zH%2BWY3SPc4hv3Mw26zHxAY6pgHyp0I%2Bov1xu2m%2BWy3GwVKt2jGQqOWZb%2FnOEHiunjt2efX9fN9E%2B7PLJS6lcjl85yjs1FZyMaRzKSwgV%2F9YRhw8HyYFTMDRKOSVzWcPY4TVPCqNi7FDLAtR9eSodLlPYIw9c5bpe3IYRR6iiSqVC6YhFlfXprZWScIQIe66Zc4dPfBgEjPES%2BcsDBZHOT0e%2Basv3ld7QfPyf6fXh03EusA4A1hQ%2F60Z&X-Amz-Signature=ae4f6455e370fbc157756b1c1a786a7e38be6cc106b310803994d0e78f36b9fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNI54NE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIElnUTMNsFHe0ELVv9xlZluZF7PxEkQL9dtna%2B1c4lMAAiAX384749pa%2BHg5mZCMXUk%2FrIRejSdkyLIPawCbPnKUUSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMn4cXF%2BddQYSUCv2DKtwDcIGg98wq1YO7EPg%2BpRyoR2MCa2VuzmtXBtKZX4WXmz7iIzq4MEVI6qibgPic%2BYPynoIRwLIqylu6%2FOQ06AR2ged37YnBaX0FchsQrJ28gtr44cfbzyJWSzJ%2FyFfIgfEQQqeriIfKEmCw8mjJBbRtGQvConQ%2BTPMvDuN0GVD3dZsHoL8qN8YZ8nZR1VrYxGu2c9QHGYpdpUWei2eqiFoTyptEqqrlVwV9jY5JrsVpgpeRXlpdrbpB0AUIvZ%2BcmkOpklD4iwbp5uRVQUz0VCTeY1Gy%2FJAM3ktImgeaxsBQ6geZpY4t0uzg9rw%2BUNA6BjCUC4iZP8zzrB3Dy4lSOTBmneBTOtw0AMOQ50%2F07BVOMwOgVC4v04aLKUTM6%2BaXtrmO2vZgXadm1MIS%2Bvxwa6SPV2BZvg7m2w%2BvaRV%2BOCzeMZFUr530fbWVpjc%2FvUa534XMXC0Fe0nQaBdUNom11YpNxPnr0rzEx6i70sys3A2wYM08nS%2BB%2BntgfxzgUf98GW7a2u6hPBkOPhv9uAuPqEF3mMkpijrZUW4dBZgM%2FcDoKC7ra9zHg3laLgVW%2FMXHINSlN5HPLpMPwXFfdAYWCKPSi9eCS30d3C8Eoq5ieCR2SjFlgph%2FFG%2F5vyi7y2swo6zHxAY6pgELmT6uCDp37ZOVeklosECD8SXMqvpPdSZFyOAV8u3O3ReSb1WbsQSRCGn6x1fKDx1Ig74tSuN2QAJj6qfucHaaMfUEIkX1YLWrMwxawNHSeSDEPSmAa%2Fz0mMGH8RJdu2WCUVtWtIFchoxecVviCWTR6iq3UNDZg0belOE4A2VeWqDEy32f8ky3si9xQlNaVmBGy2HrrG22zRBYLN3K8sCAwcjATLzR&X-Amz-Signature=3975d78fa447a7d5cdbd83d27899d84013714514dcb21e80970367ea6f2e4aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLRS7U4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDggglMx7opYvnIuxjvBs3YYIbJLAL6acHXdGwKjOKYIQIhAL%2F%2F%2BVFT1bemKUdFVw9FVDe97rLTnH8ic23nRItQ2Q2tKv8DCFsQABoMNjM3NDIzMTgzODA1IgyTTZb3qP75BHbbCfkq3APmeYBnHJySxKcVMMKcrFdQT6wz0CWGNwFjka56r92JjkV9WRu4asGTH9bUFyTIH1%2BPoqMT98R3LqI%2B1CrkwgETA5CfHzkf3K7%2Fb93FWjKEo7r2G4sHNSXYRX2uwWsMuli7cj19LZafE%2BvE7fBs7U7CcwMogoo8vk9Ikb8ENTUFmu4P8YRVf4pO2aleL1Kk7uD7FgU%2BB4wc9V8xLUoT1MgcROszhzGuqPG3XKMgv2PCCH23%2BKEyAQDyOtuSeWdaQgUKDQyhbQm1xW%2BLrwHyMeDEIaYMwWfeLBhYBKQz8AMVii5RdaU5XQ5Ba%2BYBUuKq%2BFFZyk0y30FGGJuzdorB1EfoFI7Rhms4jqfMx2h%2FxCBLHfjszg9GkidjxLZR0oiiP4%2FUM1SmAibGSh3TUEimhonvZ9EqCxP9C3QlcXHNqw9nzbgda8%2F1ip5x0SOFR8NyOxPpFNE1%2FrwVhv7qLMkvlVyMlVLh66SzHfelf2lsEYSk26M5bC8EdB%2FunDYcrhqq7%2F64vlzHxbz9fnQB2IAUb9bydeKjnhYDpA37y0%2BKHzcy0o0r%2FSlWB%2BJdMDx%2F9xZgHnuR2EsvfczqI9Iuf6YMyytZzUJy2ny91lD1VH%2Fl5p9EJT1HRfyOIdhUKtxIpDDKrMfEBjqkAexWrCHanXvBN%2F7N9KfZ4qyyTCr1XkDDwu%2FxTUWj41L1TQ3MOZrz7Z805HoMY%2BacS%2BtIoOq5IVCHIJit6MTnhi93srC%2ByJ9XnT3w63lGapa5zXvMBVZ6RtXnQGWFwVRNlq%2B8aPORD3PVQAFYDgS4MT7baKpWnHJgcOjlNd%2FJ%2B0LFwGJH7WrxdcMaZftjAR57uG2NFz9BeL6LZAoYpphRcR1n5lUw&X-Amz-Signature=d176daaae5b41a6cf08c96b5025eaa35ee99e11c9e73f4b5786d6d2acc9e4521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNI54NE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIElnUTMNsFHe0ELVv9xlZluZF7PxEkQL9dtna%2B1c4lMAAiAX384749pa%2BHg5mZCMXUk%2FrIRejSdkyLIPawCbPnKUUSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMn4cXF%2BddQYSUCv2DKtwDcIGg98wq1YO7EPg%2BpRyoR2MCa2VuzmtXBtKZX4WXmz7iIzq4MEVI6qibgPic%2BYPynoIRwLIqylu6%2FOQ06AR2ged37YnBaX0FchsQrJ28gtr44cfbzyJWSzJ%2FyFfIgfEQQqeriIfKEmCw8mjJBbRtGQvConQ%2BTPMvDuN0GVD3dZsHoL8qN8YZ8nZR1VrYxGu2c9QHGYpdpUWei2eqiFoTyptEqqrlVwV9jY5JrsVpgpeRXlpdrbpB0AUIvZ%2BcmkOpklD4iwbp5uRVQUz0VCTeY1Gy%2FJAM3ktImgeaxsBQ6geZpY4t0uzg9rw%2BUNA6BjCUC4iZP8zzrB3Dy4lSOTBmneBTOtw0AMOQ50%2F07BVOMwOgVC4v04aLKUTM6%2BaXtrmO2vZgXadm1MIS%2Bvxwa6SPV2BZvg7m2w%2BvaRV%2BOCzeMZFUr530fbWVpjc%2FvUa534XMXC0Fe0nQaBdUNom11YpNxPnr0rzEx6i70sys3A2wYM08nS%2BB%2BntgfxzgUf98GW7a2u6hPBkOPhv9uAuPqEF3mMkpijrZUW4dBZgM%2FcDoKC7ra9zHg3laLgVW%2FMXHINSlN5HPLpMPwXFfdAYWCKPSi9eCS30d3C8Eoq5ieCR2SjFlgph%2FFG%2F5vyi7y2swo6zHxAY6pgELmT6uCDp37ZOVeklosECD8SXMqvpPdSZFyOAV8u3O3ReSb1WbsQSRCGn6x1fKDx1Ig74tSuN2QAJj6qfucHaaMfUEIkX1YLWrMwxawNHSeSDEPSmAa%2Fz0mMGH8RJdu2WCUVtWtIFchoxecVviCWTR6iq3UNDZg0belOE4A2VeWqDEy32f8ky3si9xQlNaVmBGy2HrrG22zRBYLN3K8sCAwcjATLzR&X-Amz-Signature=dc89cfbd4f7b4d80fee3cd468571ca428c5940257bd1e2dd68b140d37cbe07f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HUW3KAL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCbF6TQMfJxdXAw1GtpFcXjSlS8qkJa%2FlyJGwgwE7pu6QIhAL5ZA0QqqxO6E%2BrjgKX%2FmDb9xIg%2F5L2pt3IU3LvUGs5AKv8DCFsQABoMNjM3NDIzMTgzODA1IgzK56QuFcuzGI3NKKIq3ANyAzzt6RpJEcsaX%2BZo%2Bx62IrvncyXcp%2FTjzG84gFycGPMxuC6mWBbIV6puY8UrmjeCAKmyVoUC6OutNUF24XjzwGhEhTjHpbrvqihdi%2BA68P0e%2FjLNcCw0wxBRzu90kb5wqnnoECBJy9%2FnRpGyI26ad6obtHAH51kLt3vbKBofccaeXXaeOofAUGPi6YwUDJZ%2FJiQ7N0M73nFe0ovHTkK5RhceKYu8zWkIYr0LsNbFYmaUxRJFrRLDQE3j%2FKPoNF5UryrIDsUiADdyI%2FWG62ex3RWQ2QOEaeFqRay2I74QUiitPv9KzWEmOUISqCvsL6fIl1T9sIRkv%2Fnr2yUdDIlwUipwn3RlqPZ6w1aT%2BtCKWdhtnNzq9uFuaxQL%2FrEYvpbY2SPYEMfSDc65Z3hWPbksagxZAHsHRV702xD6eADgQ5MNExfNy3FQ%2Faa4jvJKv%2BykncKxvYah6eZmgD3QlNLp1VRWlBYm9ZVyCva0r0RQPwZOyE9BYdJ1JD1wP270lNnKzKjsfSBMKUaWeLpFm1%2BKAZ%2F%2BgbLnW83ERZO%2FHObEHzuS6dSKUl19XilNmgM%2BkGSpGiIF4DnvwdDtAWS6L%2BrkfDZXGyqxfB%2FpCNz5siBMQG%2BBEizcT%2BWR1KIr%2FTCirMfEBjqkAbav3blvf%2F28c6q9x%2FVBvli07AuA23ke%2B5mL1RqPYtlHjQ08rXvVi5NXGhQW952rXVHRiBuIBPRFdEtFBcRGD5eDFCKOeW9RMBT3jg9G%2Bh1TF77d27d7VNsG8AYMXKjy%2BDAxfZp%2Bym5%2FtXvz8W%2FDsqX6RyaZyB5zEg9ikv4YWQhpglwVvT8G8Ixii6HlIl5BxTMZqHFKz1tiDq5wN31%2Fw41Vewfc&X-Amz-Signature=8812f5cacecd6c53d9f3549105f80f80ef5d4e92308028cd5f969be8726e2cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NB56YKF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCvBQbEUJb9W04wxXXA5ejtUfNiHIlnq9UjIdGGC3MoDQIhAOw5W1oNgZrlA1MuG2FGUj%2FtcoTL9GUZwk6mGCXpo%2Bk0Kv8DCFsQABoMNjM3NDIzMTgzODA1Igz9s7gb1VAtZV1AGgQq3APUi4j6AnabzL4NwJexveL3LqNAcu0w4%2BTOkPoOYB%2BPEsj4Ohu2HrYtr3CSPnvEjtRunJ1tl86x8czpzpfzDmO%2BqGmb0V8IXvWOfOzodz36CzSpgaK0M7jDwa%2FdFCmx6oq8J2lyDZ3DOErRUfmiR09U723oGEZtGJngf%2B%2FMjP1YEZLkxBYaTjhkEQo60CTLC4oPfZNQawK%2BHIo9sibN3Gm0qq1%2FvuSo2H6kpCF0WFv7U3%2FyRGpub6M7E0PZpVWauk3MnfQ5RH%2FSRmzM9cBJD4BNcLI%2FeOX0J9DfKrTylbmDQVDSLOJQopr8goFCSN900aGQ4cWn8AbfeSph0lt%2BpR71GyBA0ubJg0rZmTu1EqOmMhYBOQGOCQJ7lqieLghNOWFldnpLFKvDFB%2FAnHD9pRdKVkqNGYmH%2FThU85qzTCDfbXy11BCBUko4O1n%2BA6H3nlFtmEqkaPEOYzYUSZ3iPoxZziUwQxp%2BympOfJJJ8GCvf9FWnQqL2K5NI%2FlCGdWdX9YUK5fPGG1Wi6XBYjfeM774r90tVBFFVni4P7W3TjYJGWcJyfdtGre4MEqgcCjBAdC8SL3z%2F36zUVcCPI3IBlW4ZM0QykBh28%2BfTNC0gzwLA63o2NYJMDF5EiZXEDDzrMfEBjqkAfNZhJCA%2BrspvuzkK%2FU8a%2B5rm11ccr7F7b832DJ5I4ky1kaFyNZW%2B5U9HjE5jOZFfM9EB6XcxjPFBa2ZbRmTm%2BZqSAlOS%2BoLU8mcSwhmqSrhsQZkVsAEPCIIhX%2FGqpRlnnDE9IXEcDo9VmeY5t93UfgG7N1Rihia2HCwZN%2Fr1UhbD1F4hlBgfr0gWm8wx1NNM5WBXGRjRBrGvtFgp%2FTcyxrl1uQY&X-Amz-Signature=08f7fce6e3e13edfbacea336e8c0630307306e12a1039a56a75a943f7dff6f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGVDPJOC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDDdCweI7R6BebXI4yGeiFD4MsqTtX3UzSUQa%2FYTLZW8AIgf2qNY3kcM3FcSjuNGZXRSPEMS14kEVXjHqQ%2B5t3oBL0q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNJR16lsZ3BeGWHEvircA5pUz1ILrdVxWJUJHRvD6oH5%2B1GcS3SL9pgxqEMk9szmYdrItGKCg%2B6977cyCSE1JYRtWPjUq3pE%2FE8C%2FqYoG3imfZYHRvL6KuVA1nbWFpm1EJYKBHJaR935S5V3PruHfhYzoyaDHouDXTCUAOFxiPxgWTir%2BQm6npo2Yzj3bqrvqYp%2B0vFWOH2UhG4CbnKgfiaBzaU5JULDUm0bECizyDltnxUodie3xFpK5bwvJv9itLh%2BfM%2F0xKjVWeJ3USPZuEaDSdvomh0vPERRthO1KfL0sxexMpb%2BQESnj7j5k5Ly0XMKPARHtfvlpMmQiNBrRKT6Tb%2B7sfgnbeSdxH2AO9n4AqWjNSC0uS15qvCeCW%2Ba5vyGpaWvl4wbQTqmXtbXk54ggD5WmKVwPPUWFPlpmTr90eaQfce0QQuxVLumawI705pw3s6jwNqD9DB9B2NfJzRDwNbiXdBFd7vzq33UIJiWvyuRfhd%2BnLixdF4jmrFMywYUK97YYlcgIzZGKkN5aapsQV%2FmnYJBU4FzYsgFg3%2FtN9oufunQ91uQIYJINw8Soqc2QmQbO9fvU%2BZCWjV7cDjSXgjHr5Wq7F5MKeJ7hlcDgh6L%2FEHYXxnSDEjQjzUhspzPYAd50S0yjOjnMPusx8QGOqUBPtnIq6LjidWlW7FBD8rjYCenfWA75NtpPdHIxvGqYJAZ0CQf8xDrhOiFS30f2vnmqb6Q0A2A7mLH%2B0xN3BKbLjbCd%2FpQYds54OEXGN45oF%2FYe9pWXvsWkYtjLXdeUUM84ErnubyfA%2B0yWuGnbvZzMtmWM6sFwxm9GwuWJZS52PY33pTl2gAb1gAp0C6wyFVLEC91NZw0EzNQvctMphgVe3afsput&X-Amz-Signature=9613cb60aa57e79fc508828eebb23f43d48b4a2a4a661f6d387efabf266084ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUZLAIS7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHy0uBeectvOfWS9wDD8TEaIYkfI4DwsuncT5O5GlscOAiBXjcSZH%2B5U35c59WZWd%2F3t6dvqqU9KTF1JeYtRoFS7OSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMAT9ZfgUTGCPNAvJdKtwDI%2BeI7bW2sdEwGyXMA94xRfYpdRak9op75TiLSZv6uJu3P7yuu4G7hKJ9VQeBZZjWFuoZp1WCK%2BjYIQ5%2BoJZLCpBrcYmaleS2U%2F%2FRaNfCQt8h4%2FYb%2BxSde8NLFpLPIYajT714VnfZKqNmZqQHeJ1zcAk5SLo8brw7fIJ1tsHsOiUwcW%2BpHQ%2BoOCOmtT0CrXsFdE1YXL3QTv%2BNcDHfMIaQAlrhu5rSm2mjMC5JM%2BjOpxirtlZ9zBxx7vPnqA1zsUJSqaep7vksxqAHdbH%2FvfRZsDzPWY2kK%2BSUxCSx%2FCKlPj%2B7PcsCPRjS0T1ta5lUjSpFD6Z%2BfZ33fHuxKsPun4orUqIH8PG0ypYD3l085tXJe4R%2FBX39NcPq935mDjiT5ar%2FYWxg%2B%2BHq4dJuFVcV12q7T%2BtjD5c79RDc1Im5x9NYEcGQ8DKfbYOJuhUn3OLUCC9n%2B5EOekoN%2BxW0dFwVgf1P7wI09pgQ4f9rOqdWdQQgZFSxPi20y6m1Iyslpq2vhTKCNTbzJdgRsDzypjMfe9jL4A21FYGw7wlX3xUC%2Fp9tcEQs9D1smhOHu%2FlbOxu31Sz0AjkyZsMUzaIisdW7h6bbzKdFQXdGBi8rXmp7b%2FR1oj85iE0qVNvne1GOCWowxazHxAY6pgFJg%2F9BC3qLgE4AC8jEgH83m4RKsUPhMSnvTSxbEKplGaPfPMyZ4wJEZYr3vlBKf2FJC5eGV1jf6FT5ErMBFZiT0NBvMz2RHMyvP9VbvSm1qUCsrSfeuSF4P1KKIfVYTaqaib7EM2fMrB1G6LiDOnlp4NbJ1bj0%2FSgH%2BH2r3ZI9a7c8s5ZFhtBnRPU%2BZQZWuFVJACKT2dYDXatXxHGOAfbB%2FCVx%2Fa5h&X-Amz-Signature=e0af7d965f2a23145733ecd8e1a969288c60e5adf79e4b27cbd6ecba708692a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45NLSPQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIAQRzhDHexE0Mjl3pPUiH21%2BAj0FZd6uNUGl2AtSXMw4AiA%2BBxFyxXfKWsPWcztUH4z1SzZJ37%2BpxbHb24jBmDiqLCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMncarGK%2BjpRcFfTDLKtwD9J4vWAzhAg6GJe5cfM%2BswcXLmgXRnzKfR4wNuvguh%2BC8U%2BQzxznfZsSfD7EusSTE%2F2jRKvX%2Fib9F7ij3BjuT570f4ylJg%2BYy1j33cIWGi3GUZmPykBC%2FkLg4DHT%2BX%2F1rjd8s%2FgAJiYsugSX7LDv9i1DGYGgISftTcB9ljeQMBrV5GprAtboCawl1Js2gZ732WSWDcHumVC%2Bh3NBhEX7MOQjhNg2kIFgP3iCNBtp4qYn5JLyB3VxreIoUk%2BIHQ2aSbk2X0ypw9htPo33BSRMvYO9YLGdBPwvuLxNGe%2BX3eJWxNC0t4lssW83ZGi%2BfjwqDvpO1dWP4EWQbY97dMJPnhD9y%2F5Xh6ord%2FDxhCuFB8LWDZc17LFSgB9xgOV8%2BbxRUzglbRSTOFq1bnINQ1BNInVYJrjPInqB3SfSOaIGfh2%2FR4BlTuYy%2BsFIbmkdrykZ%2F4YZPazWdMhW%2BeYifTsK6I61qUwwnAS5169OeRHidvGNjKBOi8KxHcL8IXQIxY8Wi6uVdgkgYVeTZsNfJn%2BiNFJzlLQTQgnx6puTmeu0nWu34nP%2FwsxZ8HjePB0r%2BopjCT91lqf3wrLJOEDnl5xwQEmNQnW8HcgHj8t75889qD8i7jWpoHyhZJ2lBG0wwxazHxAY6pgFz9KYAn90MMzJDcld42HgzTw65gVz1eP3wRHQaJrFIK3SHU3IlQE%2FGPCgWMOumAAOLQx8hvs6bCz07J6T0DZ6y5V1Yf0UwYIuj%2FVYa%2FlgYgVaGHNmamWSQNHAzI4bMq7F0L929C8%2F7NAGQuwfzGkUXrOkZ1mDGbSQKMAsHv70DTXrThZRqHwVDs3s5LAH7d5XbwoSZc1QkqO5yly2SevGrMkGFBYCi&X-Amz-Signature=9c84f954c91c5673945964be6859afff0b4db1cc71c6d4480d9a98dd9b20bdae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNI54NE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIElnUTMNsFHe0ELVv9xlZluZF7PxEkQL9dtna%2B1c4lMAAiAX384749pa%2BHg5mZCMXUk%2FrIRejSdkyLIPawCbPnKUUSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMn4cXF%2BddQYSUCv2DKtwDcIGg98wq1YO7EPg%2BpRyoR2MCa2VuzmtXBtKZX4WXmz7iIzq4MEVI6qibgPic%2BYPynoIRwLIqylu6%2FOQ06AR2ged37YnBaX0FchsQrJ28gtr44cfbzyJWSzJ%2FyFfIgfEQQqeriIfKEmCw8mjJBbRtGQvConQ%2BTPMvDuN0GVD3dZsHoL8qN8YZ8nZR1VrYxGu2c9QHGYpdpUWei2eqiFoTyptEqqrlVwV9jY5JrsVpgpeRXlpdrbpB0AUIvZ%2BcmkOpklD4iwbp5uRVQUz0VCTeY1Gy%2FJAM3ktImgeaxsBQ6geZpY4t0uzg9rw%2BUNA6BjCUC4iZP8zzrB3Dy4lSOTBmneBTOtw0AMOQ50%2F07BVOMwOgVC4v04aLKUTM6%2BaXtrmO2vZgXadm1MIS%2Bvxwa6SPV2BZvg7m2w%2BvaRV%2BOCzeMZFUr530fbWVpjc%2FvUa534XMXC0Fe0nQaBdUNom11YpNxPnr0rzEx6i70sys3A2wYM08nS%2BB%2BntgfxzgUf98GW7a2u6hPBkOPhv9uAuPqEF3mMkpijrZUW4dBZgM%2FcDoKC7ra9zHg3laLgVW%2FMXHINSlN5HPLpMPwXFfdAYWCKPSi9eCS30d3C8Eoq5ieCR2SjFlgph%2FFG%2F5vyi7y2swo6zHxAY6pgELmT6uCDp37ZOVeklosECD8SXMqvpPdSZFyOAV8u3O3ReSb1WbsQSRCGn6x1fKDx1Ig74tSuN2QAJj6qfucHaaMfUEIkX1YLWrMwxawNHSeSDEPSmAa%2Fz0mMGH8RJdu2WCUVtWtIFchoxecVviCWTR6iq3UNDZg0belOE4A2VeWqDEy32f8ky3si9xQlNaVmBGy2HrrG22zRBYLN3K8sCAwcjATLzR&X-Amz-Signature=b46cf8e4d62da5e050dccef2b97c293b243855650f15d0ecbf2d12311292db47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNI54NE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIElnUTMNsFHe0ELVv9xlZluZF7PxEkQL9dtna%2B1c4lMAAiAX384749pa%2BHg5mZCMXUk%2FrIRejSdkyLIPawCbPnKUUSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMn4cXF%2BddQYSUCv2DKtwDcIGg98wq1YO7EPg%2BpRyoR2MCa2VuzmtXBtKZX4WXmz7iIzq4MEVI6qibgPic%2BYPynoIRwLIqylu6%2FOQ06AR2ged37YnBaX0FchsQrJ28gtr44cfbzyJWSzJ%2FyFfIgfEQQqeriIfKEmCw8mjJBbRtGQvConQ%2BTPMvDuN0GVD3dZsHoL8qN8YZ8nZR1VrYxGu2c9QHGYpdpUWei2eqiFoTyptEqqrlVwV9jY5JrsVpgpeRXlpdrbpB0AUIvZ%2BcmkOpklD4iwbp5uRVQUz0VCTeY1Gy%2FJAM3ktImgeaxsBQ6geZpY4t0uzg9rw%2BUNA6BjCUC4iZP8zzrB3Dy4lSOTBmneBTOtw0AMOQ50%2F07BVOMwOgVC4v04aLKUTM6%2BaXtrmO2vZgXadm1MIS%2Bvxwa6SPV2BZvg7m2w%2BvaRV%2BOCzeMZFUr530fbWVpjc%2FvUa534XMXC0Fe0nQaBdUNom11YpNxPnr0rzEx6i70sys3A2wYM08nS%2BB%2BntgfxzgUf98GW7a2u6hPBkOPhv9uAuPqEF3mMkpijrZUW4dBZgM%2FcDoKC7ra9zHg3laLgVW%2FMXHINSlN5HPLpMPwXFfdAYWCKPSi9eCS30d3C8Eoq5ieCR2SjFlgph%2FFG%2F5vyi7y2swo6zHxAY6pgELmT6uCDp37ZOVeklosECD8SXMqvpPdSZFyOAV8u3O3ReSb1WbsQSRCGn6x1fKDx1Ig74tSuN2QAJj6qfucHaaMfUEIkX1YLWrMwxawNHSeSDEPSmAa%2Fz0mMGH8RJdu2WCUVtWtIFchoxecVviCWTR6iq3UNDZg0belOE4A2VeWqDEy32f8ky3si9xQlNaVmBGy2HrrG22zRBYLN3K8sCAwcjATLzR&X-Amz-Signature=7c203a2f95200aa30229179f5f192f9887c88b349ee752e04aa8ef6c05f9f8e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=1e6b69675e954a1c374677df2106a5b404a187adaec9e4dad5de5bd71cc23672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=bd02582e4171dc97eea0b4e5bd4212cf9d49a9b753190b2747822240a7f83a39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=9f626729b56d433023c5df82cafdbfc038663be088e2c38483ce1dfed990a9b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=fc9f467b3b66260498197e52795d32df0e9be4977b9cfed3b73d1303b27348ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=2fec01f79a5c71af2bb7f68da1f92f55e36d4552146731092445af9253752a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=b0a8ce472ad52d75d7cfcfb0fcb1bf8e7b5aaab2876bcbd82544c5b728f3674a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=5889c40def6f9ad079d66b2c33584e5d8727068b00c7c6b7ab3ac3bc0598ccbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=a34f061729c453372661b8fec9989429f13a8eac33853901ac93ca2977b808bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=0eb4252c34aac0eb6d7516e48345d84e5cf7dd525400128af0eec1235b500947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=ef1d117b00449f439edf1830a1e23d343e55bfc77db2cdf88bf3d3efb390baca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
