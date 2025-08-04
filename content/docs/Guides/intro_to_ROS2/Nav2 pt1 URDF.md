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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX7ANPIK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGAbDRbarQbV4pjWAgac%2FoMsCdmXvG66pKhYtwu1Z8ZPAiAnM9OaSSjWK7pBNmza0TmwYwQRNpXQfRXOH%2FXgcPMczCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMeH9QaxFxMRJydm%2FHKtwDtgOnW9RohRggTLStmm1exsur8jK%2BLAxDFlIrlYZ1eGzYjNxRQKrM9k3vwUjWQm%2BvB%2F1f9xLc%2BStcMqJ58jPz9gnaab7u6rs%2Bh6JuN8bg%2BHGdNFOZ7Y8DMlr7HrLTSjUmrlTJApVzpQyd7U0f9IklLcEsmW2GbXwQyVnYyCm0WYtSgt4xyR2u3KkBp%2Bs%2B6a1PEmJau0kgsf8lx%2BNCh235IvIvgRVc22mz2MEXFPWBrzBpEEr340zLOx4lulhw5bBLUlerA%2BRwOCURyuyyr9Vme535dOwljTlNMv7Lmb%2F%2FK77IOox4LPJcQKfJWih%2BC4AbjjScHimvx0dc4Adc83%2FNbmk%2F42EkIlNBOclAhcFZGZ7PA4W3%2FBTsfTjFf3zGCd%2BZQwYo5NqQyS2DSFgaZe59IDLmfxjiv7%2FqFrUoVrSH%2FlbHbD5CYJ1lsYJnpV0uJjnetkbaTT4rxkQfqc0D5WsvyXR83%2F4YD2MTm2IBk3iyovkrQUV27%2F9ykB2U4gjsMGcLcTWxWX7qWGSs%2FCXyZgpDCakz%2Br2RNJ%2F2mjHU3%2FKtUX1sguwiFrhZSDhr%2B8Ld%2B9HsLmskX5MX%2F5XLpUCfbqeRhA%2B9wwcHidTOMuk3OFIYXRvWnuR76L021uWU7gkwk8bAxAY6pgHgnTjxnI5MVzlAsby28VBnLcpxSD0wDi%2BiOsv%2B3QnwSaVzA3BI5u6Hb%2Bu3727ToCYPDNuVVjSGg1cte7qTXfx1hTfN5tKtzKF2lWUdiqJxPsp9Hed3WLMWk0cgstXXBPFSDP0XXX0Wgib4yJaSxDIqfacS7nfkLq3WY5JA8dR7VyXbD3oF3I7rNXvH2T4Qrl7B4byv3qhNvxB4QVuSrAHbnqms7dbB&X-Amz-Signature=3f8e954d22ef04072113cc88d06986d99d21936929b10e6fc7bfb70ec26db005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX7ANPIK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGAbDRbarQbV4pjWAgac%2FoMsCdmXvG66pKhYtwu1Z8ZPAiAnM9OaSSjWK7pBNmza0TmwYwQRNpXQfRXOH%2FXgcPMczCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMeH9QaxFxMRJydm%2FHKtwDtgOnW9RohRggTLStmm1exsur8jK%2BLAxDFlIrlYZ1eGzYjNxRQKrM9k3vwUjWQm%2BvB%2F1f9xLc%2BStcMqJ58jPz9gnaab7u6rs%2Bh6JuN8bg%2BHGdNFOZ7Y8DMlr7HrLTSjUmrlTJApVzpQyd7U0f9IklLcEsmW2GbXwQyVnYyCm0WYtSgt4xyR2u3KkBp%2Bs%2B6a1PEmJau0kgsf8lx%2BNCh235IvIvgRVc22mz2MEXFPWBrzBpEEr340zLOx4lulhw5bBLUlerA%2BRwOCURyuyyr9Vme535dOwljTlNMv7Lmb%2F%2FK77IOox4LPJcQKfJWih%2BC4AbjjScHimvx0dc4Adc83%2FNbmk%2F42EkIlNBOclAhcFZGZ7PA4W3%2FBTsfTjFf3zGCd%2BZQwYo5NqQyS2DSFgaZe59IDLmfxjiv7%2FqFrUoVrSH%2FlbHbD5CYJ1lsYJnpV0uJjnetkbaTT4rxkQfqc0D5WsvyXR83%2F4YD2MTm2IBk3iyovkrQUV27%2F9ykB2U4gjsMGcLcTWxWX7qWGSs%2FCXyZgpDCakz%2Br2RNJ%2F2mjHU3%2FKtUX1sguwiFrhZSDhr%2B8Ld%2B9HsLmskX5MX%2F5XLpUCfbqeRhA%2B9wwcHidTOMuk3OFIYXRvWnuR76L021uWU7gkwk8bAxAY6pgHgnTjxnI5MVzlAsby28VBnLcpxSD0wDi%2BiOsv%2B3QnwSaVzA3BI5u6Hb%2Bu3727ToCYPDNuVVjSGg1cte7qTXfx1hTfN5tKtzKF2lWUdiqJxPsp9Hed3WLMWk0cgstXXBPFSDP0XXX0Wgib4yJaSxDIqfacS7nfkLq3WY5JA8dR7VyXbD3oF3I7rNXvH2T4Qrl7B4byv3qhNvxB4QVuSrAHbnqms7dbB&X-Amz-Signature=fdd12ab999922b0f2f3e12cf2d059d0103b0897a10d6ea4be630d45105344e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX7ANPIK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGAbDRbarQbV4pjWAgac%2FoMsCdmXvG66pKhYtwu1Z8ZPAiAnM9OaSSjWK7pBNmza0TmwYwQRNpXQfRXOH%2FXgcPMczCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMeH9QaxFxMRJydm%2FHKtwDtgOnW9RohRggTLStmm1exsur8jK%2BLAxDFlIrlYZ1eGzYjNxRQKrM9k3vwUjWQm%2BvB%2F1f9xLc%2BStcMqJ58jPz9gnaab7u6rs%2Bh6JuN8bg%2BHGdNFOZ7Y8DMlr7HrLTSjUmrlTJApVzpQyd7U0f9IklLcEsmW2GbXwQyVnYyCm0WYtSgt4xyR2u3KkBp%2Bs%2B6a1PEmJau0kgsf8lx%2BNCh235IvIvgRVc22mz2MEXFPWBrzBpEEr340zLOx4lulhw5bBLUlerA%2BRwOCURyuyyr9Vme535dOwljTlNMv7Lmb%2F%2FK77IOox4LPJcQKfJWih%2BC4AbjjScHimvx0dc4Adc83%2FNbmk%2F42EkIlNBOclAhcFZGZ7PA4W3%2FBTsfTjFf3zGCd%2BZQwYo5NqQyS2DSFgaZe59IDLmfxjiv7%2FqFrUoVrSH%2FlbHbD5CYJ1lsYJnpV0uJjnetkbaTT4rxkQfqc0D5WsvyXR83%2F4YD2MTm2IBk3iyovkrQUV27%2F9ykB2U4gjsMGcLcTWxWX7qWGSs%2FCXyZgpDCakz%2Br2RNJ%2F2mjHU3%2FKtUX1sguwiFrhZSDhr%2B8Ld%2B9HsLmskX5MX%2F5XLpUCfbqeRhA%2B9wwcHidTOMuk3OFIYXRvWnuR76L021uWU7gkwk8bAxAY6pgHgnTjxnI5MVzlAsby28VBnLcpxSD0wDi%2BiOsv%2B3QnwSaVzA3BI5u6Hb%2Bu3727ToCYPDNuVVjSGg1cte7qTXfx1hTfN5tKtzKF2lWUdiqJxPsp9Hed3WLMWk0cgstXXBPFSDP0XXX0Wgib4yJaSxDIqfacS7nfkLq3WY5JA8dR7VyXbD3oF3I7rNXvH2T4Qrl7B4byv3qhNvxB4QVuSrAHbnqms7dbB&X-Amz-Signature=252a04893dfcb9009906878bf05b3b303110c47c7da464a4ff0f05922199d468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX7ANPIK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGAbDRbarQbV4pjWAgac%2FoMsCdmXvG66pKhYtwu1Z8ZPAiAnM9OaSSjWK7pBNmza0TmwYwQRNpXQfRXOH%2FXgcPMczCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMeH9QaxFxMRJydm%2FHKtwDtgOnW9RohRggTLStmm1exsur8jK%2BLAxDFlIrlYZ1eGzYjNxRQKrM9k3vwUjWQm%2BvB%2F1f9xLc%2BStcMqJ58jPz9gnaab7u6rs%2Bh6JuN8bg%2BHGdNFOZ7Y8DMlr7HrLTSjUmrlTJApVzpQyd7U0f9IklLcEsmW2GbXwQyVnYyCm0WYtSgt4xyR2u3KkBp%2Bs%2B6a1PEmJau0kgsf8lx%2BNCh235IvIvgRVc22mz2MEXFPWBrzBpEEr340zLOx4lulhw5bBLUlerA%2BRwOCURyuyyr9Vme535dOwljTlNMv7Lmb%2F%2FK77IOox4LPJcQKfJWih%2BC4AbjjScHimvx0dc4Adc83%2FNbmk%2F42EkIlNBOclAhcFZGZ7PA4W3%2FBTsfTjFf3zGCd%2BZQwYo5NqQyS2DSFgaZe59IDLmfxjiv7%2FqFrUoVrSH%2FlbHbD5CYJ1lsYJnpV0uJjnetkbaTT4rxkQfqc0D5WsvyXR83%2F4YD2MTm2IBk3iyovkrQUV27%2F9ykB2U4gjsMGcLcTWxWX7qWGSs%2FCXyZgpDCakz%2Br2RNJ%2F2mjHU3%2FKtUX1sguwiFrhZSDhr%2B8Ld%2B9HsLmskX5MX%2F5XLpUCfbqeRhA%2B9wwcHidTOMuk3OFIYXRvWnuR76L021uWU7gkwk8bAxAY6pgHgnTjxnI5MVzlAsby28VBnLcpxSD0wDi%2BiOsv%2B3QnwSaVzA3BI5u6Hb%2Bu3727ToCYPDNuVVjSGg1cte7qTXfx1hTfN5tKtzKF2lWUdiqJxPsp9Hed3WLMWk0cgstXXBPFSDP0XXX0Wgib4yJaSxDIqfacS7nfkLq3WY5JA8dR7VyXbD3oF3I7rNXvH2T4Qrl7B4byv3qhNvxB4QVuSrAHbnqms7dbB&X-Amz-Signature=f17bea1ab15766864dab7a3ca45f1af5c7e4085139b8a2746ead178752728c6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX7ANPIK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGAbDRbarQbV4pjWAgac%2FoMsCdmXvG66pKhYtwu1Z8ZPAiAnM9OaSSjWK7pBNmza0TmwYwQRNpXQfRXOH%2FXgcPMczCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMeH9QaxFxMRJydm%2FHKtwDtgOnW9RohRggTLStmm1exsur8jK%2BLAxDFlIrlYZ1eGzYjNxRQKrM9k3vwUjWQm%2BvB%2F1f9xLc%2BStcMqJ58jPz9gnaab7u6rs%2Bh6JuN8bg%2BHGdNFOZ7Y8DMlr7HrLTSjUmrlTJApVzpQyd7U0f9IklLcEsmW2GbXwQyVnYyCm0WYtSgt4xyR2u3KkBp%2Bs%2B6a1PEmJau0kgsf8lx%2BNCh235IvIvgRVc22mz2MEXFPWBrzBpEEr340zLOx4lulhw5bBLUlerA%2BRwOCURyuyyr9Vme535dOwljTlNMv7Lmb%2F%2FK77IOox4LPJcQKfJWih%2BC4AbjjScHimvx0dc4Adc83%2FNbmk%2F42EkIlNBOclAhcFZGZ7PA4W3%2FBTsfTjFf3zGCd%2BZQwYo5NqQyS2DSFgaZe59IDLmfxjiv7%2FqFrUoVrSH%2FlbHbD5CYJ1lsYJnpV0uJjnetkbaTT4rxkQfqc0D5WsvyXR83%2F4YD2MTm2IBk3iyovkrQUV27%2F9ykB2U4gjsMGcLcTWxWX7qWGSs%2FCXyZgpDCakz%2Br2RNJ%2F2mjHU3%2FKtUX1sguwiFrhZSDhr%2B8Ld%2B9HsLmskX5MX%2F5XLpUCfbqeRhA%2B9wwcHidTOMuk3OFIYXRvWnuR76L021uWU7gkwk8bAxAY6pgHgnTjxnI5MVzlAsby28VBnLcpxSD0wDi%2BiOsv%2B3QnwSaVzA3BI5u6Hb%2Bu3727ToCYPDNuVVjSGg1cte7qTXfx1hTfN5tKtzKF2lWUdiqJxPsp9Hed3WLMWk0cgstXXBPFSDP0XXX0Wgib4yJaSxDIqfacS7nfkLq3WY5JA8dR7VyXbD3oF3I7rNXvH2T4Qrl7B4byv3qhNvxB4QVuSrAHbnqms7dbB&X-Amz-Signature=aaea801464ee6330608e007ff6d7f9943ac457d008714da1a706e08845c088ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX7ANPIK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGAbDRbarQbV4pjWAgac%2FoMsCdmXvG66pKhYtwu1Z8ZPAiAnM9OaSSjWK7pBNmza0TmwYwQRNpXQfRXOH%2FXgcPMczCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMeH9QaxFxMRJydm%2FHKtwDtgOnW9RohRggTLStmm1exsur8jK%2BLAxDFlIrlYZ1eGzYjNxRQKrM9k3vwUjWQm%2BvB%2F1f9xLc%2BStcMqJ58jPz9gnaab7u6rs%2Bh6JuN8bg%2BHGdNFOZ7Y8DMlr7HrLTSjUmrlTJApVzpQyd7U0f9IklLcEsmW2GbXwQyVnYyCm0WYtSgt4xyR2u3KkBp%2Bs%2B6a1PEmJau0kgsf8lx%2BNCh235IvIvgRVc22mz2MEXFPWBrzBpEEr340zLOx4lulhw5bBLUlerA%2BRwOCURyuyyr9Vme535dOwljTlNMv7Lmb%2F%2FK77IOox4LPJcQKfJWih%2BC4AbjjScHimvx0dc4Adc83%2FNbmk%2F42EkIlNBOclAhcFZGZ7PA4W3%2FBTsfTjFf3zGCd%2BZQwYo5NqQyS2DSFgaZe59IDLmfxjiv7%2FqFrUoVrSH%2FlbHbD5CYJ1lsYJnpV0uJjnetkbaTT4rxkQfqc0D5WsvyXR83%2F4YD2MTm2IBk3iyovkrQUV27%2F9ykB2U4gjsMGcLcTWxWX7qWGSs%2FCXyZgpDCakz%2Br2RNJ%2F2mjHU3%2FKtUX1sguwiFrhZSDhr%2B8Ld%2B9HsLmskX5MX%2F5XLpUCfbqeRhA%2B9wwcHidTOMuk3OFIYXRvWnuR76L021uWU7gkwk8bAxAY6pgHgnTjxnI5MVzlAsby28VBnLcpxSD0wDi%2BiOsv%2B3QnwSaVzA3BI5u6Hb%2Bu3727ToCYPDNuVVjSGg1cte7qTXfx1hTfN5tKtzKF2lWUdiqJxPsp9Hed3WLMWk0cgstXXBPFSDP0XXX0Wgib4yJaSxDIqfacS7nfkLq3WY5JA8dR7VyXbD3oF3I7rNXvH2T4Qrl7B4byv3qhNvxB4QVuSrAHbnqms7dbB&X-Amz-Signature=79786c9b835338c40e82d24d32dd701436a859a256892db3448b149936611d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX7ANPIK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGAbDRbarQbV4pjWAgac%2FoMsCdmXvG66pKhYtwu1Z8ZPAiAnM9OaSSjWK7pBNmza0TmwYwQRNpXQfRXOH%2FXgcPMczCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMeH9QaxFxMRJydm%2FHKtwDtgOnW9RohRggTLStmm1exsur8jK%2BLAxDFlIrlYZ1eGzYjNxRQKrM9k3vwUjWQm%2BvB%2F1f9xLc%2BStcMqJ58jPz9gnaab7u6rs%2Bh6JuN8bg%2BHGdNFOZ7Y8DMlr7HrLTSjUmrlTJApVzpQyd7U0f9IklLcEsmW2GbXwQyVnYyCm0WYtSgt4xyR2u3KkBp%2Bs%2B6a1PEmJau0kgsf8lx%2BNCh235IvIvgRVc22mz2MEXFPWBrzBpEEr340zLOx4lulhw5bBLUlerA%2BRwOCURyuyyr9Vme535dOwljTlNMv7Lmb%2F%2FK77IOox4LPJcQKfJWih%2BC4AbjjScHimvx0dc4Adc83%2FNbmk%2F42EkIlNBOclAhcFZGZ7PA4W3%2FBTsfTjFf3zGCd%2BZQwYo5NqQyS2DSFgaZe59IDLmfxjiv7%2FqFrUoVrSH%2FlbHbD5CYJ1lsYJnpV0uJjnetkbaTT4rxkQfqc0D5WsvyXR83%2F4YD2MTm2IBk3iyovkrQUV27%2F9ykB2U4gjsMGcLcTWxWX7qWGSs%2FCXyZgpDCakz%2Br2RNJ%2F2mjHU3%2FKtUX1sguwiFrhZSDhr%2B8Ld%2B9HsLmskX5MX%2F5XLpUCfbqeRhA%2B9wwcHidTOMuk3OFIYXRvWnuR76L021uWU7gkwk8bAxAY6pgHgnTjxnI5MVzlAsby28VBnLcpxSD0wDi%2BiOsv%2B3QnwSaVzA3BI5u6Hb%2Bu3727ToCYPDNuVVjSGg1cte7qTXfx1hTfN5tKtzKF2lWUdiqJxPsp9Hed3WLMWk0cgstXXBPFSDP0XXX0Wgib4yJaSxDIqfacS7nfkLq3WY5JA8dR7VyXbD3oF3I7rNXvH2T4Qrl7B4byv3qhNvxB4QVuSrAHbnqms7dbB&X-Amz-Signature=829df6fc4fc49cb2793280c4b8d86a3e3a35519c6bb886f09462a336650f013d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX7ANPIK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGAbDRbarQbV4pjWAgac%2FoMsCdmXvG66pKhYtwu1Z8ZPAiAnM9OaSSjWK7pBNmza0TmwYwQRNpXQfRXOH%2FXgcPMczCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMeH9QaxFxMRJydm%2FHKtwDtgOnW9RohRggTLStmm1exsur8jK%2BLAxDFlIrlYZ1eGzYjNxRQKrM9k3vwUjWQm%2BvB%2F1f9xLc%2BStcMqJ58jPz9gnaab7u6rs%2Bh6JuN8bg%2BHGdNFOZ7Y8DMlr7HrLTSjUmrlTJApVzpQyd7U0f9IklLcEsmW2GbXwQyVnYyCm0WYtSgt4xyR2u3KkBp%2Bs%2B6a1PEmJau0kgsf8lx%2BNCh235IvIvgRVc22mz2MEXFPWBrzBpEEr340zLOx4lulhw5bBLUlerA%2BRwOCURyuyyr9Vme535dOwljTlNMv7Lmb%2F%2FK77IOox4LPJcQKfJWih%2BC4AbjjScHimvx0dc4Adc83%2FNbmk%2F42EkIlNBOclAhcFZGZ7PA4W3%2FBTsfTjFf3zGCd%2BZQwYo5NqQyS2DSFgaZe59IDLmfxjiv7%2FqFrUoVrSH%2FlbHbD5CYJ1lsYJnpV0uJjnetkbaTT4rxkQfqc0D5WsvyXR83%2F4YD2MTm2IBk3iyovkrQUV27%2F9ykB2U4gjsMGcLcTWxWX7qWGSs%2FCXyZgpDCakz%2Br2RNJ%2F2mjHU3%2FKtUX1sguwiFrhZSDhr%2B8Ld%2B9HsLmskX5MX%2F5XLpUCfbqeRhA%2B9wwcHidTOMuk3OFIYXRvWnuR76L021uWU7gkwk8bAxAY6pgHgnTjxnI5MVzlAsby28VBnLcpxSD0wDi%2BiOsv%2B3QnwSaVzA3BI5u6Hb%2Bu3727ToCYPDNuVVjSGg1cte7qTXfx1hTfN5tKtzKF2lWUdiqJxPsp9Hed3WLMWk0cgstXXBPFSDP0XXX0Wgib4yJaSxDIqfacS7nfkLq3WY5JA8dR7VyXbD3oF3I7rNXvH2T4Qrl7B4byv3qhNvxB4QVuSrAHbnqms7dbB&X-Amz-Signature=712dcba193f45e0193a0fa697b5394119ce8576522593819b1ed7656c998280d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX7ANPIK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGAbDRbarQbV4pjWAgac%2FoMsCdmXvG66pKhYtwu1Z8ZPAiAnM9OaSSjWK7pBNmza0TmwYwQRNpXQfRXOH%2FXgcPMczCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMeH9QaxFxMRJydm%2FHKtwDtgOnW9RohRggTLStmm1exsur8jK%2BLAxDFlIrlYZ1eGzYjNxRQKrM9k3vwUjWQm%2BvB%2F1f9xLc%2BStcMqJ58jPz9gnaab7u6rs%2Bh6JuN8bg%2BHGdNFOZ7Y8DMlr7HrLTSjUmrlTJApVzpQyd7U0f9IklLcEsmW2GbXwQyVnYyCm0WYtSgt4xyR2u3KkBp%2Bs%2B6a1PEmJau0kgsf8lx%2BNCh235IvIvgRVc22mz2MEXFPWBrzBpEEr340zLOx4lulhw5bBLUlerA%2BRwOCURyuyyr9Vme535dOwljTlNMv7Lmb%2F%2FK77IOox4LPJcQKfJWih%2BC4AbjjScHimvx0dc4Adc83%2FNbmk%2F42EkIlNBOclAhcFZGZ7PA4W3%2FBTsfTjFf3zGCd%2BZQwYo5NqQyS2DSFgaZe59IDLmfxjiv7%2FqFrUoVrSH%2FlbHbD5CYJ1lsYJnpV0uJjnetkbaTT4rxkQfqc0D5WsvyXR83%2F4YD2MTm2IBk3iyovkrQUV27%2F9ykB2U4gjsMGcLcTWxWX7qWGSs%2FCXyZgpDCakz%2Br2RNJ%2F2mjHU3%2FKtUX1sguwiFrhZSDhr%2B8Ld%2B9HsLmskX5MX%2F5XLpUCfbqeRhA%2B9wwcHidTOMuk3OFIYXRvWnuR76L021uWU7gkwk8bAxAY6pgHgnTjxnI5MVzlAsby28VBnLcpxSD0wDi%2BiOsv%2B3QnwSaVzA3BI5u6Hb%2Bu3727ToCYPDNuVVjSGg1cte7qTXfx1hTfN5tKtzKF2lWUdiqJxPsp9Hed3WLMWk0cgstXXBPFSDP0XXX0Wgib4yJaSxDIqfacS7nfkLq3WY5JA8dR7VyXbD3oF3I7rNXvH2T4Qrl7B4byv3qhNvxB4QVuSrAHbnqms7dbB&X-Amz-Signature=b9b6cdfbdd406429444fe99ccfa3987009877be43dcbeefd45f5bf476f7b25b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX7ANPIK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGAbDRbarQbV4pjWAgac%2FoMsCdmXvG66pKhYtwu1Z8ZPAiAnM9OaSSjWK7pBNmza0TmwYwQRNpXQfRXOH%2FXgcPMczCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMeH9QaxFxMRJydm%2FHKtwDtgOnW9RohRggTLStmm1exsur8jK%2BLAxDFlIrlYZ1eGzYjNxRQKrM9k3vwUjWQm%2BvB%2F1f9xLc%2BStcMqJ58jPz9gnaab7u6rs%2Bh6JuN8bg%2BHGdNFOZ7Y8DMlr7HrLTSjUmrlTJApVzpQyd7U0f9IklLcEsmW2GbXwQyVnYyCm0WYtSgt4xyR2u3KkBp%2Bs%2B6a1PEmJau0kgsf8lx%2BNCh235IvIvgRVc22mz2MEXFPWBrzBpEEr340zLOx4lulhw5bBLUlerA%2BRwOCURyuyyr9Vme535dOwljTlNMv7Lmb%2F%2FK77IOox4LPJcQKfJWih%2BC4AbjjScHimvx0dc4Adc83%2FNbmk%2F42EkIlNBOclAhcFZGZ7PA4W3%2FBTsfTjFf3zGCd%2BZQwYo5NqQyS2DSFgaZe59IDLmfxjiv7%2FqFrUoVrSH%2FlbHbD5CYJ1lsYJnpV0uJjnetkbaTT4rxkQfqc0D5WsvyXR83%2F4YD2MTm2IBk3iyovkrQUV27%2F9ykB2U4gjsMGcLcTWxWX7qWGSs%2FCXyZgpDCakz%2Br2RNJ%2F2mjHU3%2FKtUX1sguwiFrhZSDhr%2B8Ld%2B9HsLmskX5MX%2F5XLpUCfbqeRhA%2B9wwcHidTOMuk3OFIYXRvWnuR76L021uWU7gkwk8bAxAY6pgHgnTjxnI5MVzlAsby28VBnLcpxSD0wDi%2BiOsv%2B3QnwSaVzA3BI5u6Hb%2Bu3727ToCYPDNuVVjSGg1cte7qTXfx1hTfN5tKtzKF2lWUdiqJxPsp9Hed3WLMWk0cgstXXBPFSDP0XXX0Wgib4yJaSxDIqfacS7nfkLq3WY5JA8dR7VyXbD3oF3I7rNXvH2T4Qrl7B4byv3qhNvxB4QVuSrAHbnqms7dbB&X-Amz-Signature=d41afea1c1781fcbffce868ea44f42b2556d0d4c8e32cc901957fed99a4c5aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RDUVVC3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCICRlThqWs1B3i0SlWAUIEr5VynW1Bgw%2Ff2oSI8rgBNkmAiB7oItucBup%2BdAoIejkECIhEcsMEk8aYiFgj%2Bwo5Kv5gyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM%2FahgYf6DlntdrcRmKtwDqSk5Qhuds64Y%2FvhZY6rWnxv0eXM3Zyo6XFqy6cyCnnJ2%2BvdYHXqHhJmIJ4dbH8z4bgAF%2FxNynipebDfRAcIBUtXDSuin41ieyfhNZF02ihnO%2B%2FzUhDqUuqadp8P%2FRS1rnQe7RaMPM5JBVTcPyb5kJPrV%2Bi3y%2B%2BDDYdQlVp6T%2BTLZHUexo7uWKs6zE1ODfSaW1VY7nwe%2B%2BwbNTC4co7i1ybdlKcghEaVpj9zV0lezCDXprmvU03F8Sy4hN4di6su0F1X5kIxKnMuTu%2BdA8G2oQ1Mg9HNW6gZv9WAgehTqzC3TP4cLoNakPFDHCB%2BbOxbFjgoVA157XNvgpqgTvZjKop2XkQ7KLWSd0krd5Me4iewTn2gVjFJEC7i8hAHk9%2FPx2SJUVLidgLqjuthNUqMFji0ZKH7DeuZEc7Qnpg1VbgD%2FF%2Bv1uHo%2FbavXkYnUk9vIh4kjndtEmaCGO%2FrWl1jujmoeyHVz%2BCwue%2FRPUF8UyFEmLqtx2dKBNt09azjVpAjXiH74QM2EbV1OG0F9A%2FTr3xxwoLFnMVjfHM5opOv6x0jeGFVg70jUDsHl%2BoybfffNvIHYFxkLhCrVUzq1MGjJIWWrZJrOmDJMfVO1nzG0oHMWzRGJsy6qRIbSy3Qwzfu%2FxAY6pgET7BYuW%2BqeI1qgKO0Q1eQSEXrjvjshxImBSAWep1u8ARyhMmb3P%2BooSV2uTSqsK4xCiamSG2sgO1h4a9lgs9q1mPi24XTwCSzs1un9UhkTpHZGSdq8cpQLoJ%2BMJNfBSD6EB8o606NyyztykOa%2BgMFUYFpU1XrOGZBKI%2FDvgSWwFSdJDfiUsqfj4%2BoBjLPvkE%2Frir7KLzkNpsgLuRQ17il8uJ5alfYC&X-Amz-Signature=9d98e55f2a2abe2bbe533a88842af87a7c7973316b7ea3e121db2346a6eec36e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH5XSIML%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCIp5btzmP0ZJrBRX2wE3Bq8f8XuPRJZ9LgzA64sL0TjAIgQwyosmWwHGIMNMUOUVBR%2BD29JvVD3sU1P0JxWp8YySgq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGw0QhmLDpozTyslqyrcAzOPY6KbA%2FRIPiFFOdOA859pe3NPLn7ZnBG5LmpIPu5t5p36RdIMAzCHukajJzcwMFYzc0rFp2B6VCi0vjcMilXyOmUaDHqCCpsUTlX1KD3YRwxYT5cKFhgL3SPyo%2FmLqebqnKUrL2LkFx3O1AYjQ6AvwfES%2BJAtRfAI0QDpHFM3Y7wf9o28f2TVEBwueBQi9pRyzB%2BipA02lB9TzU2h%2FG7ITN1Wu25fugOgnPLXX7s7offiG9200HTOd39AcwulNt5AqwdZ%2FExjqpNX4oGGju%2BqaxqlnbD38r9ACmMLDYSnPnS%2F5TYmys5k88qXkn4m9kKbjZjREg4BIDmgjODELfXPaCphmZfRSL9UpPjJoLDZEWwwGF8TEzz5Q67gFw53kkihqIyUS4eMwXzSEOiKDOkQ8hpmiSG13feeUe%2BppdfLh3C1MDHdrcQaCD1OQm5Ot9COjqyzdqxng8MNgZGMQbcvJ9Kmb4VIhZcvNz6VDx8rP0menK8YFn5r83Sn1Y2mT7uBRBIdFBecwsICfuQdLCoI630V07Quk2SYgwgRwwjZF4X0o%2Fybd6HIm%2Bucmye4AKki2G%2FAS1o5paA5u5dATD%2FMZ1R%2FBE26C27PI4rr4S7Pog3nCHrYDJTTCymsMPb6v8QGOqUBnd4L1pkpJExHpv4OhMkhI9D5tYWj1eF5OJvSCoK5GyhNrcIo%2Bo22y366vSeQlAMSPh%2FoPFANdChR4rumLyBU3isoEATipyjnDlka%2Ba54cDy7yA0pI6fhXAClcG5m0vwU0GvchEGiEUwhh6zezpPmISDCcMd%2FV5h86zgF7D13a0hLUqjDShDw4fkqeCINSD%2B0TQxWh9Wv3k6jLL5xnciZI0qHa13E&X-Amz-Signature=80ed7c6a8204d6845b871bd27ee6fcaa66ba9084bffc77bb37361753a563a478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV3UU4OK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEtr1IXpO58hDwHdb%2BrYbIln2EuiGshuOB%2B5UdnDxLyPAiEAi79sd7A4u5aFb1vHOrUkhjr60L1zu45iln0gUuf9Azgq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKJqTLRACl3FaVAm3ircA8FaU3AGm7oo540wI7UWZiG3XwTT70woZV3IP7X0bH5%2F%2Fna1Rs4XwhL1imjsWG4DCVYW3wO3%2BOqlDxi7aOatrK7t%2F%2BvSl57qQsSQOWM8g3hi0C%2B4fsW6iQ2an5CNukScDsBu79lNZ7kh8O%2BOfXJZczc0wQBpIDrmbe9ERZgmxdn5n%2FYYWR%2FYcRsFDGjSMPkDJfyBR6CKQgE8I5HTyq1AEZoolo2oYE2qlQOO7JauPsIYylS11V7ILtb1IMzFrhTBlggpFTTcZ%2BIwTHnvaG%2FBsyxeDsU96LQFdYoOtTL3yLJSDoGyjGHLHWpaglJG%2BygS7ETO3kuqg%2B3Ww6AwLWjTSpQEtSVavVL0nKCCs3iz%2F8e7xcvT4JkcInMfng%2B9O2VifDzD%2Bj8Ga5eg1kAtH5KY8HmvjIZjSq7uzWPDLG68PW7E96Xd%2FvxSaVJJN7W0l4fbfCd%2FcfYSgNIAxBjqcZFSGkgguAk%2Bml8VV6PVZpwfw77gebUMSxcytdJcelC4EWCb8P2aabTg8j3QpfnXgFFIE8wS76ji4%2BX%2BGAukZc8cn2Xn2yxupY9fT04AQo4ehAHP5OU1ZRkB0BZ4bstvaNDwgHB7Tf6cH5mazy3i3eeJfUppdhPGagkDt%2F%2Fxj2G%2FMPT%2Fv8QGOqUBqhChizYVqlRbsykMyFstoJ5lSyyZfIEWvvnnaK5aIgIudPh4A2x4HCAASziJ9fBWA4RlEcAYFiWCWPi99bL3tBwZDUsznotRSLrmPYaiD%2BaKtU%2B5ICVAob2zr%2BySACidBuvI7OZ%2B3U2NpsKKK%2FV1Rm0gJ35%2BF3x6YK%2FWI%2BsDuaJZSLL%2FCs2FDCA%2FlXBhzpZN0ckNQ3GaTZo5lVvBqj8xg%2BjNR9GD&X-Amz-Signature=c6d0edf3a33cc6093027d3ece9fa99da6da25135f49ab834047503878ba48886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX7ANPIK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGAbDRbarQbV4pjWAgac%2FoMsCdmXvG66pKhYtwu1Z8ZPAiAnM9OaSSjWK7pBNmza0TmwYwQRNpXQfRXOH%2FXgcPMczCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMeH9QaxFxMRJydm%2FHKtwDtgOnW9RohRggTLStmm1exsur8jK%2BLAxDFlIrlYZ1eGzYjNxRQKrM9k3vwUjWQm%2BvB%2F1f9xLc%2BStcMqJ58jPz9gnaab7u6rs%2Bh6JuN8bg%2BHGdNFOZ7Y8DMlr7HrLTSjUmrlTJApVzpQyd7U0f9IklLcEsmW2GbXwQyVnYyCm0WYtSgt4xyR2u3KkBp%2Bs%2B6a1PEmJau0kgsf8lx%2BNCh235IvIvgRVc22mz2MEXFPWBrzBpEEr340zLOx4lulhw5bBLUlerA%2BRwOCURyuyyr9Vme535dOwljTlNMv7Lmb%2F%2FK77IOox4LPJcQKfJWih%2BC4AbjjScHimvx0dc4Adc83%2FNbmk%2F42EkIlNBOclAhcFZGZ7PA4W3%2FBTsfTjFf3zGCd%2BZQwYo5NqQyS2DSFgaZe59IDLmfxjiv7%2FqFrUoVrSH%2FlbHbD5CYJ1lsYJnpV0uJjnetkbaTT4rxkQfqc0D5WsvyXR83%2F4YD2MTm2IBk3iyovkrQUV27%2F9ykB2U4gjsMGcLcTWxWX7qWGSs%2FCXyZgpDCakz%2Br2RNJ%2F2mjHU3%2FKtUX1sguwiFrhZSDhr%2B8Ld%2B9HsLmskX5MX%2F5XLpUCfbqeRhA%2B9wwcHidTOMuk3OFIYXRvWnuR76L021uWU7gkwk8bAxAY6pgHgnTjxnI5MVzlAsby28VBnLcpxSD0wDi%2BiOsv%2B3QnwSaVzA3BI5u6Hb%2Bu3727ToCYPDNuVVjSGg1cte7qTXfx1hTfN5tKtzKF2lWUdiqJxPsp9Hed3WLMWk0cgstXXBPFSDP0XXX0Wgib4yJaSxDIqfacS7nfkLq3WY5JA8dR7VyXbD3oF3I7rNXvH2T4Qrl7B4byv3qhNvxB4QVuSrAHbnqms7dbB&X-Amz-Signature=03a9f9b82cd05847580136796d15cbe5fda2db984a15d788eec8b607bd05c35b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UTAWHGI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAGKhrpHVKEJL4Yd2TVKFuo%2Bs0386Rw5w4N1h242iRUlAiEAjK%2F%2BP7If59Yv%2Fp60Ir5sse582pdJ6ZBVb6aCto8JgXkq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCJSDjMrkeVmIWEkcircAwvmf6mhggeFFy%2FWhlaSP0p1AEv8NuuzvQeNOqwTl7bpOPmWk4U4cp9LWE86lg3nU0aYDQ9ApnXIg%2Bd4pKHTl3e41QTpVR2Y8GKu6mSmIe%2Fq80TKo3jnfsgyQfKP1rt%2B1vmECBTiZ6YjSGLJh2LzWOdiJBu0PFNcV5G%2B40NGZmZR0gFgojaP0YBeoEBhi4eRiFR4SBy%2By9Y7Bxfgr%2B9lutEWOhLaM7C1DANQa5HmG7tWRVkno1H4bT%2F3gxSoowq2W6%2FrnbVF9epDE9Fi%2FxYWtpCaFPj3DKorHE%2F2lf16XEAtJIJK02NWNDfw5J2QU8pd%2B38trTrr1QzUEEnlQoQkww7LxRk8NRQemzkdCwH%2BkIdUYJ32kP1fPd4gnsk7BbsefVYbSl6EHQQg9MJOHVo4gTAQfhLPDHUsn%2FGNthG9ShPFIv91to5dZSSned83fovCES89a1kE0rHRF2oSSjv0FsySX58TG9TehpnAD1JkZzdffVT1Frz0YDQFqUX7xZaJuwMX8%2FP%2BJPyqS9rroJMUl1EYUCNWCvA6SlXOG8vR6MX9IMe2UtdUXIFmidP0hIIPkVn1eOPA86ATiRCRz8wAC%2BwKW%2FE4OeY9yr3hMJVYpwE%2BbUqtWJX2I%2FTjYNMQMPv9v8QGOqUBkg6RTXYTk4qMAkFtNiTgWTJR%2B4QrdHdr8va0ToxPaqKFwD%2FzBfushRrFr1FHKaomHlE655tZ4xOZfR%2FsYzyhceKxDL25KaF3N8H8eOMt2%2Bw1KC2uOaqz0cc0v7XoW9KQySliVS85QL8RPhOKIy%2FVtRCv26pHOAQZVCq3okX7dLUMcj9mqXAxF3BZr6nwu%2FyBpFA22zcczQn4oEk2%2FG3v1%2B1Yx3vm&X-Amz-Signature=acc5ea51b923bfc1fe5b83ba5c1dd1724624acfb0a76778fc8c76f4dc89f2d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX7ANPIK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGAbDRbarQbV4pjWAgac%2FoMsCdmXvG66pKhYtwu1Z8ZPAiAnM9OaSSjWK7pBNmza0TmwYwQRNpXQfRXOH%2FXgcPMczCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMeH9QaxFxMRJydm%2FHKtwDtgOnW9RohRggTLStmm1exsur8jK%2BLAxDFlIrlYZ1eGzYjNxRQKrM9k3vwUjWQm%2BvB%2F1f9xLc%2BStcMqJ58jPz9gnaab7u6rs%2Bh6JuN8bg%2BHGdNFOZ7Y8DMlr7HrLTSjUmrlTJApVzpQyd7U0f9IklLcEsmW2GbXwQyVnYyCm0WYtSgt4xyR2u3KkBp%2Bs%2B6a1PEmJau0kgsf8lx%2BNCh235IvIvgRVc22mz2MEXFPWBrzBpEEr340zLOx4lulhw5bBLUlerA%2BRwOCURyuyyr9Vme535dOwljTlNMv7Lmb%2F%2FK77IOox4LPJcQKfJWih%2BC4AbjjScHimvx0dc4Adc83%2FNbmk%2F42EkIlNBOclAhcFZGZ7PA4W3%2FBTsfTjFf3zGCd%2BZQwYo5NqQyS2DSFgaZe59IDLmfxjiv7%2FqFrUoVrSH%2FlbHbD5CYJ1lsYJnpV0uJjnetkbaTT4rxkQfqc0D5WsvyXR83%2F4YD2MTm2IBk3iyovkrQUV27%2F9ykB2U4gjsMGcLcTWxWX7qWGSs%2FCXyZgpDCakz%2Br2RNJ%2F2mjHU3%2FKtUX1sguwiFrhZSDhr%2B8Ld%2B9HsLmskX5MX%2F5XLpUCfbqeRhA%2B9wwcHidTOMuk3OFIYXRvWnuR76L021uWU7gkwk8bAxAY6pgHgnTjxnI5MVzlAsby28VBnLcpxSD0wDi%2BiOsv%2B3QnwSaVzA3BI5u6Hb%2Bu3727ToCYPDNuVVjSGg1cte7qTXfx1hTfN5tKtzKF2lWUdiqJxPsp9Hed3WLMWk0cgstXXBPFSDP0XXX0Wgib4yJaSxDIqfacS7nfkLq3WY5JA8dR7VyXbD3oF3I7rNXvH2T4Qrl7B4byv3qhNvxB4QVuSrAHbnqms7dbB&X-Amz-Signature=31f867d10d8942586bc58af8b34ffeb2a69a663a3ecb0980af2f333d78d5dc92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS25AUMS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDGOgIBmcWRTN3CzZ0jp24M0tjkdZZsTo9BEUub7bfoiQIgDP%2B4Ms%2BkdgeIQTwf96eVndaVs8Lf7ACuEi2rN0ThOU4q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDHVxSYgCJ%2BMYhWbWnircA9AHCewUTb1zxwongp9NkRVzXGWognZODy%2FBjIsFx%2BSGvWZpgdg1D6UBoNQTrf6hg1D%2BODqGvnJyGsQYh811rp8oZ5nyNvYT%2BKGMCQe%2BDDK9%2BrDEnuGKlM5sMQpjosVWXVd5H9gbL2XSQIFZCjKewUxiMtRUqiRYlfaTz0Tpe98C2HvnJ4IWLelVrmFm2avkbWqDL1m9fIztmShGXv1tPO8n52mv6mMvpROidZgC7DUPReyCBlhbMyxd2Dpa5kHio7rgt75JwEJ03F6bTTqutb97GDNg5Bdo4qiGgE5%2FedQ9kInWOBfZ0rjDKXmB0cc6SJi9LxZt45ttk0%2Bn9aXc9KvR%2BPDkjl%2FIWv5s9cmwniODXhIBNg9X%2BtAu1H01x3IgeIPxcOAN5K5QWa8fN%2BSDc3J5fiKzTbjMF9tb7dV1596hEFxIxnynKeONLzSAsIlX65jY856huOfk8VfRQ6exFUSpNKeWlBsi43f5JoiekJsSnsqCRjNk0CM3pVmgUXNzdr9xxfRos2684JR%2BmYzVCgioi5vuRVesZjdjD71l7ekJoM1kpfIuUK9ZCN%2B87sDBghAsFa2VL1VEYkifsloCfH0iU09HeKCGp3Xo0%2BxuzVv2IqmzzjKljCWTzKdNMOnFwMQGOqUBqQeUH8CebkFFl0wFabqCuLKxBmObuRfT3DIk5Lv6cw7JNbruhfuUw%2BEBLvQ6vD5mCXSbcP3cX8skXj46y0pfW7COo24ESYmXAhCj%2B8NUPdMprw1AQ3OpPU%2FYW34IIkYUX8Wj9hQ4ks0Lkh%2FSaQ75DfA51OK6B2AfJti37HmWqqe11nvLIURucpUraq2lwl3bNCQ2zMa820B%2Fd2owXxo1BOQfUtrO&X-Amz-Signature=17e97fd63b7b7d502f271dae452ae843aeab3c508879e5d3c60b60c6a5e57d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX7ANPIK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGAbDRbarQbV4pjWAgac%2FoMsCdmXvG66pKhYtwu1Z8ZPAiAnM9OaSSjWK7pBNmza0TmwYwQRNpXQfRXOH%2FXgcPMczCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMeH9QaxFxMRJydm%2FHKtwDtgOnW9RohRggTLStmm1exsur8jK%2BLAxDFlIrlYZ1eGzYjNxRQKrM9k3vwUjWQm%2BvB%2F1f9xLc%2BStcMqJ58jPz9gnaab7u6rs%2Bh6JuN8bg%2BHGdNFOZ7Y8DMlr7HrLTSjUmrlTJApVzpQyd7U0f9IklLcEsmW2GbXwQyVnYyCm0WYtSgt4xyR2u3KkBp%2Bs%2B6a1PEmJau0kgsf8lx%2BNCh235IvIvgRVc22mz2MEXFPWBrzBpEEr340zLOx4lulhw5bBLUlerA%2BRwOCURyuyyr9Vme535dOwljTlNMv7Lmb%2F%2FK77IOox4LPJcQKfJWih%2BC4AbjjScHimvx0dc4Adc83%2FNbmk%2F42EkIlNBOclAhcFZGZ7PA4W3%2FBTsfTjFf3zGCd%2BZQwYo5NqQyS2DSFgaZe59IDLmfxjiv7%2FqFrUoVrSH%2FlbHbD5CYJ1lsYJnpV0uJjnetkbaTT4rxkQfqc0D5WsvyXR83%2F4YD2MTm2IBk3iyovkrQUV27%2F9ykB2U4gjsMGcLcTWxWX7qWGSs%2FCXyZgpDCakz%2Br2RNJ%2F2mjHU3%2FKtUX1sguwiFrhZSDhr%2B8Ld%2B9HsLmskX5MX%2F5XLpUCfbqeRhA%2B9wwcHidTOMuk3OFIYXRvWnuR76L021uWU7gkwk8bAxAY6pgHgnTjxnI5MVzlAsby28VBnLcpxSD0wDi%2BiOsv%2B3QnwSaVzA3BI5u6Hb%2Bu3727ToCYPDNuVVjSGg1cte7qTXfx1hTfN5tKtzKF2lWUdiqJxPsp9Hed3WLMWk0cgstXXBPFSDP0XXX0Wgib4yJaSxDIqfacS7nfkLq3WY5JA8dR7VyXbD3oF3I7rNXvH2T4Qrl7B4byv3qhNvxB4QVuSrAHbnqms7dbB&X-Amz-Signature=d8318e3524edc69cbff0d64405090a8f0868b23004bf96d96960424f9726bf5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WBOMTQ4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDpg%2FuEjWglBHn0aC%2B40wSQIXWkw8xxv5V%2BW8u4l1UzfgIgcHC9ltLn3gAdINfpMpm7oRA%2B9kFEqvEir7Vhgt0njNkq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKQ7D8oK8z5EPcsZQCrcA8LKTuPFz0qChfyn890%2Bjyv9ZBYhTou1U%2FugQb%2BoNQfdZGPEA7eaZJ8nE2q3Ie%2BopT%2Bc1u4yYV2Noe5hCYyYhyCgfiVRmIlDzszW8eeIMKxrXBdySiuowv19qXFMTUd2D1uhkhnWrieapPXNwgBto9NUIyI0XGDTpw%2Felse3950DM4i73i7KLsZBnfzZ%2B%2BNV9ZrWtnA26zrmyDNp6Ln%2F7RvsGQ8IZNQmnrHV3NRt4p2nJSuMD8aOdFT2nm91dUActtaMmuIPGA5RRrztwyWtqL1nj9rVqZkJDep7zxF0XkfmExke4G5MHOZv%2BWEEs94cu59M4KpjDTXHC5RiYEZV9GT9pCtK2Tuk1jWgpZ0IFvkA4vB96VevU9v%2Fo2CCV%2BqqYXHEhY5zxVvR8Fd3cTzyKMwl7CQWjbOVjnoxFhD%2FhT1gGbZetT8KCo9iTr9SPac09b80xbUnaVx0FlXwX%2BFVwdMlW1svaij5pfKhwI2H7wvTrbsJheozdbDHoBMKqnKSPnyNNCB4EDDP6OlI0sUHJ%2B%2F2HE3Kq3FZFiDebXR4fMP5r%2FIdDAyLOJmuVnY0iN2dnNdrwMQCTgHWdvsfVyFmc7vraQAHOXnVk8Cg9KGTHz%2BPXTIkACHi2uUVa6HRMP3GwMQGOqUB4ulF4JQwlhQ7SM074Q0%2Bw5K8tzIoVs9aoi4IVp04V293I44KUGYzGrLrYmCNHhBuRPPGCBcP%2Bn3jrMSslRKyyjeLy1SKyhinwyYyr0Tfoy6TiclNX5cfihQe0jyeR9JkjmRF3g98LO6%2Ba5ebA8BWeuPRG84ZrtQAeS6lgyyIsrefCi3t%2BIStPwtNf10nUcPf369KbHz7WJvwMoyV5qhA2Prn%2FW7g&X-Amz-Signature=121421d4e936125815dcf9452de4ad5e46a9592f550d5a32602bcb2faf7cdaf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX7ANPIK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGAbDRbarQbV4pjWAgac%2FoMsCdmXvG66pKhYtwu1Z8ZPAiAnM9OaSSjWK7pBNmza0TmwYwQRNpXQfRXOH%2FXgcPMczCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMeH9QaxFxMRJydm%2FHKtwDtgOnW9RohRggTLStmm1exsur8jK%2BLAxDFlIrlYZ1eGzYjNxRQKrM9k3vwUjWQm%2BvB%2F1f9xLc%2BStcMqJ58jPz9gnaab7u6rs%2Bh6JuN8bg%2BHGdNFOZ7Y8DMlr7HrLTSjUmrlTJApVzpQyd7U0f9IklLcEsmW2GbXwQyVnYyCm0WYtSgt4xyR2u3KkBp%2Bs%2B6a1PEmJau0kgsf8lx%2BNCh235IvIvgRVc22mz2MEXFPWBrzBpEEr340zLOx4lulhw5bBLUlerA%2BRwOCURyuyyr9Vme535dOwljTlNMv7Lmb%2F%2FK77IOox4LPJcQKfJWih%2BC4AbjjScHimvx0dc4Adc83%2FNbmk%2F42EkIlNBOclAhcFZGZ7PA4W3%2FBTsfTjFf3zGCd%2BZQwYo5NqQyS2DSFgaZe59IDLmfxjiv7%2FqFrUoVrSH%2FlbHbD5CYJ1lsYJnpV0uJjnetkbaTT4rxkQfqc0D5WsvyXR83%2F4YD2MTm2IBk3iyovkrQUV27%2F9ykB2U4gjsMGcLcTWxWX7qWGSs%2FCXyZgpDCakz%2Br2RNJ%2F2mjHU3%2FKtUX1sguwiFrhZSDhr%2B8Ld%2B9HsLmskX5MX%2F5XLpUCfbqeRhA%2B9wwcHidTOMuk3OFIYXRvWnuR76L021uWU7gkwk8bAxAY6pgHgnTjxnI5MVzlAsby28VBnLcpxSD0wDi%2BiOsv%2B3QnwSaVzA3BI5u6Hb%2Bu3727ToCYPDNuVVjSGg1cte7qTXfx1hTfN5tKtzKF2lWUdiqJxPsp9Hed3WLMWk0cgstXXBPFSDP0XXX0Wgib4yJaSxDIqfacS7nfkLq3WY5JA8dR7VyXbD3oF3I7rNXvH2T4Qrl7B4byv3qhNvxB4QVuSrAHbnqms7dbB&X-Amz-Signature=0fe1e53a0361f67a57c455c19580ca55fe8033650aa6151f13adc016e2a232b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAZFGUWU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDzhKdllvsdyH1ulI5swR5mw%2Fj7YulEAZK4h%2BO%2FkXohgAiAr3FPYq6Oqx%2Fa5CoZxm5Lk24HJEQmAekZqitNF57LsUir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMT1PvfOkp5SbGxm8KKtwD4gnSyevyQX7fuMuq6jFlXQrBwG8fPSAnIyjpbP%2FGsKoToskqPXUTU%2BFbDAk%2BZs1sNxq%2FTW9FUmaFJWp0bSsSX2DS30nRlhI4pny55flhrsNwGwuA6aius2VJqRfv%2BwspWB6ySlG6HdIHValHoI67mUSPlVd8OmdUJCY%2FVbCvSl7JU2zLSja%2FdmoVIX9%2BX77p0QafwUMXIzuRyJK%2Fh%2ByxrX1EZ5FNdW4jsjb%2FVXlWD8jUdfBo0XPP0Pd7Wnghm9i1vVs4zlVTt31NebItMtA7euGNYfmN9wtVT3Mf%2FbPJLqK9TOt6unxPcQiS5bA3xItYluSBU9NnTZIxeFZw3WaEL5oOCMWtru%2FFBb7EydW1xtVdwUYpi0rDIfV1Q7JrZrmOp6Y8rEy2hCZRKQuHRSYW%2F%2FFE4ukMmlvhoK7Hd08jK2KG%2B6km4A%2FQBZROSgtEPerPDLxX%2Bx3npSHIr%2BLDTJLpckPOibsulxI9NdbSQLIfGDahFKwqAiX2Xp3BdoSjxunFL7sILx2rJJMPh%2FYL2PYjWrG2hUfnG0rRdHgXhekUAbOUcpWnto5UJkWGMUAdAge5xyFm%2BuW%2B9Af6Jkuk35oqXn9WOkPjmIfZGaRj5g7wMsOt30J3aTXcD%2B6fnlgwk8bAxAY6pgFXHDvbyVIb%2B%2Bodqho4NhKwAHlL7Ju9t0trToQhm4Gr%2F6jDHF0%2Bk0dpDzHNdl9qBPqloVlRQ6SUHofPZYAchGSRHjFLV7OB67NYVmuNk9rkuSaHBcF3FmHDPwh%2FwdFrDNaAiqOBj17D5NUtF0wOe4zap%2FnjvChguFSdMY4BZsT31E5pIDhc272kHKigW1XCjut6QNg07nHfHSxiRXJ6aGzA1r%2FxX1sz&X-Amz-Signature=75b6a4fc6b36e6da71df4afaaeeedcd3f31066878580b1ecb5e3ce3439bf944b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDMPZHC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCID6PHRzpsH%2F29Qz6kXTA2QNDbTNR7cprG%2FjdRl6FOEN5AiEAsGjeQ6%2FzRnNk6gBsVIWWDLJ%2BZ1C5q3dz1ReKigFRTXwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCbwzan4Z3DQvVDQdCrcA6kk3KycmpRWw9bHkfNhNZAANJHSAz6Nzk4O3%2BQ4FzTJDB0GujUTZTJI9mV3C67txubuTGMTNz7fvUg5rxNEBQp2aGoBOHI34YeD1EJ0Rm3%2F1p6HJCm50BCeDi%2BC%2F6WzhW5sUHGN%2BSaOO8nq45GvJV0vTteDm%2F39P%2B4uYQyDwicJWUVi%2BA%2FfTYPa1XsdHTmy7818%2BWqbf3TkQbhQbOdeNN1eOOZ5hkE9aDitr5GTQ%2BSl2ux2Es2O1lNTuw33wp9aT8AkEtLMVAyCJckV%2BlAn1g%2FGMSrh8sz2fFhQj0XQWw9q6WlgvsYwQlE36pYKCKWeQ9XS28s6RclDKjsHF5o0JvA5A%2FwaSqKDd0%2BZgC984uwuaEI%2BLg3y58PYZXgl74ym2MLKFfT2LXaGbujmw7JdpCTr1GeGSvzZC4pEm29wXZXvPs45f4ENi8ichEjJaUourg%2BBWEP4teQSVXbHnXYznnk3AM%2B%2Fw0TS9m0zsG56xrsSe8DULHaKOWUfn3OmXSfZtHniOguYx5dv1QaVg0VG%2FDS30ROOg3rQzkLkDdAdSm%2FhlsRod7OCe9xj9xzrpz8NXzgi8XAwzOsqYVC4G7AA7%2BCevKYAuJHKpP3lpa2ru0TTrD%2B8nUI%2B3OHqp581MPv9v8QGOqUBaZg9tuZTB1SkfW4CIyJouwgm8%2BQES38hszy%2FyYR7KQ3OsnZfYosDWjN8yvSRwJnPloAUPOb%2FYlHnznNyEhS3q28c%2FrqM8P9c2%2FulKfDan%2BDbqlqiCdzzZIIE7YnSRdyt4nJntIGiaeu%2FVqTScPIgx%2BU1pnkCezSu8YtILp5yHi2gZkxA503NNjfWCLpZaRfdvVvFbPPnm1a2oB7b%2FBlMIHPPZhu0&X-Amz-Signature=8760d1eb82e683e7957ff41871d3732225acdd1d61f3cf88ce8a20a4f898c1f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZISJV4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIG5dnAq4bCK%2FLomeLWe4z2zLpCP1pUbEsYFqk4aez8B0AiB8OoTarM1T3%2FdPSZbN90SQgl4z5Tl9gz5kkVDXC1pn%2FCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM6yTofwjb5JmerkwoKtwDzpQ7APdEJ1G5Yt0ibS03a0dxC6XNJTs%2BLwbVKa0XcqagIgIF1kKrFkN%2F5oCfD87ypcOTkXGzC%2BXjVLFbQGdcETP0%2B8Bq7BXVHE0Ighs9q4xqhqT5lMi5JkUyiTZC4mZ7UdNMePfLJgyLcZ9ZJoODoZFEomECX57OmBxwS9lof9X2C1R4fd0aeIca6%2BbcgvFHA8vHwtWoXLQwiffYKdTwB4jbMgAH7WRw%2BKkLQddt7tdIvDpsfws9gRTsVycIX7xz2U5T5ka5eo%2FwhytygQsOQPEa%2FuEbrjcLbEpDeFf9e%2F4sbMaVQaAhUtBtZmDFK68jdDuU4WjqPcS7Ifju%2B0pSCUrEohfYje%2Bk%2BD4ll%2FrTd3Nc%2B5CCUsgkAhZgHAz32rsNKy%2FmGtzruAiZSsBajWUFl%2BLWrawRQLTLFi72sslNUvj9oQbsjVRVflsdeyjHLLenZMmnYoKVC%2BtoyEIL1krRabh4XVV7Ztx%2B6ZP07cA5jy%2FHU9R2wVbcxSD2uWWaiiydMP3FBwOB9UDJMrPYjtUIM9CP0Pzj%2BismCW9VUXXpxOZN2icdGB9Klr%2BP9UX%2FqIujFeRD8zfl0Y181wRfpFAEvidrbPjnWjLaZqLp5cM3tzzIw2%2ByH9y2y5J5p8owhMbAxAY6pgHn89gtuht4XgjDmZGZV%2FUBnqxYFrZszT8bVfP2%2FheFIiUC5PIe6CwVhvfQ0hf%2FCG0eLrfSndQjHr6JVjzgiZW7XJXLdv7rruuqEL9auHXeV5%2FC5QozAsCCROl8VvsEtp2gcoo7xTNVw7ED9H1JsgrDQ0p%2F6us%2BYH77DlYDZYSDR1wJAPBybPDKJWICXrykwrMFjWuFf6qbNl%2BNUIQBmCVhlkAgCgYv&X-Amz-Signature=51b268456fbc0506c1b57c296f2f8a972b11ec5ffabce747c4962b0cefd74f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RIWJCUH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDHI8%2Flx%2BL9ic5v5Eo4%2BQ9KryTT4FieiuAFlJleb7j8TgIgfTPK3a6D2lScvIPA4uOYrj79ki7Qop8LW6dMM9gKoq4q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDM%2Bcouelms9PCrqMOSrcA9DTzore0ZOLvmWI2eLj1jqpRWtQR8jnJETBmyg9caLyKLCagklBB2%2FUakw4AR15C61OP0zYWr3YA9Bo%2Bkv1QkV0ug90nBswNQ5zK5MXfbe%2FAJDOngJpn9ESdWfqHUuumT3nPM%2B%2BnWKWXX2zcqcJypqeqrGFD0v15EPF8RALdY8ECpLX7mWqgQGZWMKBXKO5CfiyOuOWYXMnZnPNcuWQRnVIfBQ90DOGBvX6yZDsJwhXUnIBddDw3%2B9UCJhkBbjtIN52OIgrQfH%2BW70fDUipw97q5t9mNBZIsL1mLMbVODmexpde20sn2ACpblvJISkKuDxhb8ZY%2Bc3Zwm0v2uGAQ4BdgKh9FemtaMgiY7hozDLNZGMv9PxocPu7%2FhfcHHu68FJDask%2FddzwT8VGjMABvQ4YCLDn0gO0RW8Z2Jb71NFci8FHMfog90KOShmriIIUeuZUMDpONolh62%2FbIq2%2Fkuz167DzU69BgNyegOKRGU2NKcWLhXrNTdT3er6BgFdI6jcGw8izQQVDY7BFBl4vxCQy79ozsiP9vbJvKE%2BxFALhfuf3SJrBXqNB30bYxSG6pMgXAuebBodLEq3X3AG4%2BLB15rYgIJqHA4KzD%2B7QmL7ZFPpjVsZS%2FNUR4KKRMILGwMQGOqUBBgqsWc9rrOiYCWx8%2BgR08vnvJAv6aLSflNdHqmrhPBN%2FvTJgZBrnbNkkHbOowKwDpqDbSCL1BVI7yqQ8ke5tx6%2FT5jIAITUuCs0K1oeVXf28Lv5WJES6YDX%2FzEUUCfFU4CbnHWpbcqi9kpHrMCtR1W0RDWr0NFA3%2BugwFXVqawAwwHU7NQ92T8z35aiLeYNy0uM9jRtW%2FjEV1KE1QCxDavGvl%2BBS&X-Amz-Signature=9904cc4f1505915fef5dc683cbe8436731b7a428e658c4e7e1b5b5658d7d33e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTALAOVH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDv%2F24yUNMrwrcVAExBiOLdDd8n4IrhUrD0nP6evgsOigIgP6WXylPrqPbAqCknGqcbqJrw02dl9mDIPX8welCu4%2FYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDGKqoCBDzeJXpPJgfyrcA0FFCdNt7dBOOqESR%2FpSE%2BVWJc1STinPheyX1LhGwUpf4RiPfrTzOV6LRvVmb%2FpxYhEH6VOb2nZF7uFjAMBI0H7bQ88Hcrua0hjasIiA5%2Bwo0lwx1lx713RrFsoPsmpnyJdlnwfkrmRXeiaUQALYL0Vhhkax3TITJALCDg%2BpzY6KNit9ZwDoSFVB9KqHV7iFtHiQ8Iu2IftRiYTev3dX4xwEKBLl7deLJjsI7WRzT%2BWwKH%2BVJqzSSgZGqeb0kk4MDrtpxTn0zkxiKxzIbLaQwa9TxKAu8idl8pkno0ujOJCVvwlZ7K0OgN29QQiNAagwdV6jhnDfLMei3brEZReqGGTqhr9Uz%2BioPADDcM%2FCkrMSt1nu7htomjVme%2BiRb9iQQO06DoDa0MgWzl5s0Wvo7VWp7HIrhJMZZlF70MTXSKkJ8Aa8y3O2Bt4onyDsdZT4HHYO70Lnl44T1JF7iCYAGi0MDg%2B%2B0stYhD2H8ekiD6ABvXFO%2FtAJJBeoAABiQdnWKuhvoQ2EZgtgA9Tk69rqlYX9pWm7Fno5y1j681eacSdUb0znBScKtYeJvtdEtuXelxw9VDa6kL3kp2QgNXMeVQsWsAUcDen9u7DXVCQZf7dUdbXt%2Fx7%2Bi2k8HGYQMP%2FFwMQGOqUBr6OSeBMWDbd3hSL71fiKvQlaHzoU1ehcWZqGUcEakU9SPyO5G83JZN%2BJpr%2BntmAAxZ6bmYVGKhbfQ%2FW5lsZL8haRGWC1vlwUbbW6VzGa66avzgwQdfiKx8z4fyVfwBx7uL6OcWyYbMm1JjIFhJi4wehSg84A6v53sNh4RmvuGbNJcw0Nc6gyM16TOPFEErQZdAmNbdWgJtohJWm5gXuLXqZmmQXx&X-Amz-Signature=3c819659485e626f59101f35d5ae1bfd94d107979239c0f6a4e3fb723e04d01d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX7ANPIK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGAbDRbarQbV4pjWAgac%2FoMsCdmXvG66pKhYtwu1Z8ZPAiAnM9OaSSjWK7pBNmza0TmwYwQRNpXQfRXOH%2FXgcPMczCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMeH9QaxFxMRJydm%2FHKtwDtgOnW9RohRggTLStmm1exsur8jK%2BLAxDFlIrlYZ1eGzYjNxRQKrM9k3vwUjWQm%2BvB%2F1f9xLc%2BStcMqJ58jPz9gnaab7u6rs%2Bh6JuN8bg%2BHGdNFOZ7Y8DMlr7HrLTSjUmrlTJApVzpQyd7U0f9IklLcEsmW2GbXwQyVnYyCm0WYtSgt4xyR2u3KkBp%2Bs%2B6a1PEmJau0kgsf8lx%2BNCh235IvIvgRVc22mz2MEXFPWBrzBpEEr340zLOx4lulhw5bBLUlerA%2BRwOCURyuyyr9Vme535dOwljTlNMv7Lmb%2F%2FK77IOox4LPJcQKfJWih%2BC4AbjjScHimvx0dc4Adc83%2FNbmk%2F42EkIlNBOclAhcFZGZ7PA4W3%2FBTsfTjFf3zGCd%2BZQwYo5NqQyS2DSFgaZe59IDLmfxjiv7%2FqFrUoVrSH%2FlbHbD5CYJ1lsYJnpV0uJjnetkbaTT4rxkQfqc0D5WsvyXR83%2F4YD2MTm2IBk3iyovkrQUV27%2F9ykB2U4gjsMGcLcTWxWX7qWGSs%2FCXyZgpDCakz%2Br2RNJ%2F2mjHU3%2FKtUX1sguwiFrhZSDhr%2B8Ld%2B9HsLmskX5MX%2F5XLpUCfbqeRhA%2B9wwcHidTOMuk3OFIYXRvWnuR76L021uWU7gkwk8bAxAY6pgHgnTjxnI5MVzlAsby28VBnLcpxSD0wDi%2BiOsv%2B3QnwSaVzA3BI5u6Hb%2Bu3727ToCYPDNuVVjSGg1cte7qTXfx1hTfN5tKtzKF2lWUdiqJxPsp9Hed3WLMWk0cgstXXBPFSDP0XXX0Wgib4yJaSxDIqfacS7nfkLq3WY5JA8dR7VyXbD3oF3I7rNXvH2T4Qrl7B4byv3qhNvxB4QVuSrAHbnqms7dbB&X-Amz-Signature=eaf25a376b9b8b7f94352ebf1300d39c918c74a254de0a0eb264f1e8697ebab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX7ANPIK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGAbDRbarQbV4pjWAgac%2FoMsCdmXvG66pKhYtwu1Z8ZPAiAnM9OaSSjWK7pBNmza0TmwYwQRNpXQfRXOH%2FXgcPMczCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMeH9QaxFxMRJydm%2FHKtwDtgOnW9RohRggTLStmm1exsur8jK%2BLAxDFlIrlYZ1eGzYjNxRQKrM9k3vwUjWQm%2BvB%2F1f9xLc%2BStcMqJ58jPz9gnaab7u6rs%2Bh6JuN8bg%2BHGdNFOZ7Y8DMlr7HrLTSjUmrlTJApVzpQyd7U0f9IklLcEsmW2GbXwQyVnYyCm0WYtSgt4xyR2u3KkBp%2Bs%2B6a1PEmJau0kgsf8lx%2BNCh235IvIvgRVc22mz2MEXFPWBrzBpEEr340zLOx4lulhw5bBLUlerA%2BRwOCURyuyyr9Vme535dOwljTlNMv7Lmb%2F%2FK77IOox4LPJcQKfJWih%2BC4AbjjScHimvx0dc4Adc83%2FNbmk%2F42EkIlNBOclAhcFZGZ7PA4W3%2FBTsfTjFf3zGCd%2BZQwYo5NqQyS2DSFgaZe59IDLmfxjiv7%2FqFrUoVrSH%2FlbHbD5CYJ1lsYJnpV0uJjnetkbaTT4rxkQfqc0D5WsvyXR83%2F4YD2MTm2IBk3iyovkrQUV27%2F9ykB2U4gjsMGcLcTWxWX7qWGSs%2FCXyZgpDCakz%2Br2RNJ%2F2mjHU3%2FKtUX1sguwiFrhZSDhr%2B8Ld%2B9HsLmskX5MX%2F5XLpUCfbqeRhA%2B9wwcHidTOMuk3OFIYXRvWnuR76L021uWU7gkwk8bAxAY6pgHgnTjxnI5MVzlAsby28VBnLcpxSD0wDi%2BiOsv%2B3QnwSaVzA3BI5u6Hb%2Bu3727ToCYPDNuVVjSGg1cte7qTXfx1hTfN5tKtzKF2lWUdiqJxPsp9Hed3WLMWk0cgstXXBPFSDP0XXX0Wgib4yJaSxDIqfacS7nfkLq3WY5JA8dR7VyXbD3oF3I7rNXvH2T4Qrl7B4byv3qhNvxB4QVuSrAHbnqms7dbB&X-Amz-Signature=26448897acf55eeedb49ca7acdef69447df93d547b63405d5aebb5dee791d99d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CT6TIE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC49zQ2ufkcHvM5Pb54v4fU77Se0fikguHpOiWSChyCowIgDPhywE2C5sfgQwygbbwCKs1BmL8brt4FK9ZgBUiaD9wq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCgL7o2dHJvRi9hqKCrcA4IKO5fMVl%2Bptf2BOsjP3qdO7qFJk4eXYVPCyHh4LLnUAeAfQ8kgLev%2FWBpDWPDGBmpGgsts10K7LXFAeC152OlJaAfPPk55gWnYs1vQ6GLCjR18NaPS9FPPoSb9BPQi1PAjoQZsFs3Q4uDdlNGUM9%2BdGuUf2gE%2BWJwCrqRB8JgPxF5xZispx1gQzQwlTJiTTu83fVgAvPEm62UtabAjZIrL6AviMEPLWSGno77nOIfyOmjoEiPUOfR9qKcNKNW3hgF6JuNUFYGPAPwaHBxTPoM0Qq7ehyRVaH5OQTFQW6nAGF%2FTW3RbxSxqralsdhPWy0uVQjeRQ90Sg%2F2h0aXZ7L3eCbZkJvj8j8ySc1c64X8rRnOuX5UBB9LKy3LzwSu0S3ydq6W3Ar7JtnXMEV3hu8FoJ2bo8Yhch2CrZ8gjj165b%2FGOfveAKXqWRuFTq0LbsQiblAXSyv5Ykmks7DoMz1ooRcoUFoKXt%2FTgG44qMg82e1B%2FQsxI83naCQALAT1lfveFeQdrjbwHX8IRY0Bu0npsqBiVqJbSgHv6HklA4S5ryHCnsC50jVzdbBZdkPskCXuU3bHQt4xcglPg5q4TPBMhAteorL3CZuQRbT%2FFJdFZve%2B%2FdcTeyMSYkZjDMNrzv8QGOqUBrI86NSUGf3HEcbDyUKi01SFzYnbZeE3SqhrD9Q7o84uITiStRTGvn8hITiYeqcI00Qj1thiPJVPFdOwHoZtCcxVYL10KLgeRwIiJmrGvjYRM0JRGneNjrgWb1uwRi1Xx%2BBlgfdjByHx94QYN%2BOWFN2koxysVG0XLSh83xBwhf2ijok0gKTmCD2b9KuoiLnyIVXLDJWYneq4B7QZPE90B1gbEEtMy&X-Amz-Signature=2d5bdfe1e0e69137b7708b21f586ca74f061c264dc10afc7549dd6fcfa40df72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CT6TIE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC49zQ2ufkcHvM5Pb54v4fU77Se0fikguHpOiWSChyCowIgDPhywE2C5sfgQwygbbwCKs1BmL8brt4FK9ZgBUiaD9wq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCgL7o2dHJvRi9hqKCrcA4IKO5fMVl%2Bptf2BOsjP3qdO7qFJk4eXYVPCyHh4LLnUAeAfQ8kgLev%2FWBpDWPDGBmpGgsts10K7LXFAeC152OlJaAfPPk55gWnYs1vQ6GLCjR18NaPS9FPPoSb9BPQi1PAjoQZsFs3Q4uDdlNGUM9%2BdGuUf2gE%2BWJwCrqRB8JgPxF5xZispx1gQzQwlTJiTTu83fVgAvPEm62UtabAjZIrL6AviMEPLWSGno77nOIfyOmjoEiPUOfR9qKcNKNW3hgF6JuNUFYGPAPwaHBxTPoM0Qq7ehyRVaH5OQTFQW6nAGF%2FTW3RbxSxqralsdhPWy0uVQjeRQ90Sg%2F2h0aXZ7L3eCbZkJvj8j8ySc1c64X8rRnOuX5UBB9LKy3LzwSu0S3ydq6W3Ar7JtnXMEV3hu8FoJ2bo8Yhch2CrZ8gjj165b%2FGOfveAKXqWRuFTq0LbsQiblAXSyv5Ykmks7DoMz1ooRcoUFoKXt%2FTgG44qMg82e1B%2FQsxI83naCQALAT1lfveFeQdrjbwHX8IRY0Bu0npsqBiVqJbSgHv6HklA4S5ryHCnsC50jVzdbBZdkPskCXuU3bHQt4xcglPg5q4TPBMhAteorL3CZuQRbT%2FFJdFZve%2B%2FdcTeyMSYkZjDMNrzv8QGOqUBrI86NSUGf3HEcbDyUKi01SFzYnbZeE3SqhrD9Q7o84uITiStRTGvn8hITiYeqcI00Qj1thiPJVPFdOwHoZtCcxVYL10KLgeRwIiJmrGvjYRM0JRGneNjrgWb1uwRi1Xx%2BBlgfdjByHx94QYN%2BOWFN2koxysVG0XLSh83xBwhf2ijok0gKTmCD2b9KuoiLnyIVXLDJWYneq4B7QZPE90B1gbEEtMy&X-Amz-Signature=06c481b5ec33c92d598ea9a95a3c656178f6720bea66e64227ebf4cc48abbf58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CT6TIE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC49zQ2ufkcHvM5Pb54v4fU77Se0fikguHpOiWSChyCowIgDPhywE2C5sfgQwygbbwCKs1BmL8brt4FK9ZgBUiaD9wq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCgL7o2dHJvRi9hqKCrcA4IKO5fMVl%2Bptf2BOsjP3qdO7qFJk4eXYVPCyHh4LLnUAeAfQ8kgLev%2FWBpDWPDGBmpGgsts10K7LXFAeC152OlJaAfPPk55gWnYs1vQ6GLCjR18NaPS9FPPoSb9BPQi1PAjoQZsFs3Q4uDdlNGUM9%2BdGuUf2gE%2BWJwCrqRB8JgPxF5xZispx1gQzQwlTJiTTu83fVgAvPEm62UtabAjZIrL6AviMEPLWSGno77nOIfyOmjoEiPUOfR9qKcNKNW3hgF6JuNUFYGPAPwaHBxTPoM0Qq7ehyRVaH5OQTFQW6nAGF%2FTW3RbxSxqralsdhPWy0uVQjeRQ90Sg%2F2h0aXZ7L3eCbZkJvj8j8ySc1c64X8rRnOuX5UBB9LKy3LzwSu0S3ydq6W3Ar7JtnXMEV3hu8FoJ2bo8Yhch2CrZ8gjj165b%2FGOfveAKXqWRuFTq0LbsQiblAXSyv5Ykmks7DoMz1ooRcoUFoKXt%2FTgG44qMg82e1B%2FQsxI83naCQALAT1lfveFeQdrjbwHX8IRY0Bu0npsqBiVqJbSgHv6HklA4S5ryHCnsC50jVzdbBZdkPskCXuU3bHQt4xcglPg5q4TPBMhAteorL3CZuQRbT%2FFJdFZve%2B%2FdcTeyMSYkZjDMNrzv8QGOqUBrI86NSUGf3HEcbDyUKi01SFzYnbZeE3SqhrD9Q7o84uITiStRTGvn8hITiYeqcI00Qj1thiPJVPFdOwHoZtCcxVYL10KLgeRwIiJmrGvjYRM0JRGneNjrgWb1uwRi1Xx%2BBlgfdjByHx94QYN%2BOWFN2koxysVG0XLSh83xBwhf2ijok0gKTmCD2b9KuoiLnyIVXLDJWYneq4B7QZPE90B1gbEEtMy&X-Amz-Signature=b1825519f2a0696ddee44f874469d3c9715d924212307159361664dc44780a0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CT6TIE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC49zQ2ufkcHvM5Pb54v4fU77Se0fikguHpOiWSChyCowIgDPhywE2C5sfgQwygbbwCKs1BmL8brt4FK9ZgBUiaD9wq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCgL7o2dHJvRi9hqKCrcA4IKO5fMVl%2Bptf2BOsjP3qdO7qFJk4eXYVPCyHh4LLnUAeAfQ8kgLev%2FWBpDWPDGBmpGgsts10K7LXFAeC152OlJaAfPPk55gWnYs1vQ6GLCjR18NaPS9FPPoSb9BPQi1PAjoQZsFs3Q4uDdlNGUM9%2BdGuUf2gE%2BWJwCrqRB8JgPxF5xZispx1gQzQwlTJiTTu83fVgAvPEm62UtabAjZIrL6AviMEPLWSGno77nOIfyOmjoEiPUOfR9qKcNKNW3hgF6JuNUFYGPAPwaHBxTPoM0Qq7ehyRVaH5OQTFQW6nAGF%2FTW3RbxSxqralsdhPWy0uVQjeRQ90Sg%2F2h0aXZ7L3eCbZkJvj8j8ySc1c64X8rRnOuX5UBB9LKy3LzwSu0S3ydq6W3Ar7JtnXMEV3hu8FoJ2bo8Yhch2CrZ8gjj165b%2FGOfveAKXqWRuFTq0LbsQiblAXSyv5Ykmks7DoMz1ooRcoUFoKXt%2FTgG44qMg82e1B%2FQsxI83naCQALAT1lfveFeQdrjbwHX8IRY0Bu0npsqBiVqJbSgHv6HklA4S5ryHCnsC50jVzdbBZdkPskCXuU3bHQt4xcglPg5q4TPBMhAteorL3CZuQRbT%2FFJdFZve%2B%2FdcTeyMSYkZjDMNrzv8QGOqUBrI86NSUGf3HEcbDyUKi01SFzYnbZeE3SqhrD9Q7o84uITiStRTGvn8hITiYeqcI00Qj1thiPJVPFdOwHoZtCcxVYL10KLgeRwIiJmrGvjYRM0JRGneNjrgWb1uwRi1Xx%2BBlgfdjByHx94QYN%2BOWFN2koxysVG0XLSh83xBwhf2ijok0gKTmCD2b9KuoiLnyIVXLDJWYneq4B7QZPE90B1gbEEtMy&X-Amz-Signature=b5c17c17fa616d8918b2d114ce1c2c1018048f315b8b49661ef4c33190e1cebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CT6TIE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC49zQ2ufkcHvM5Pb54v4fU77Se0fikguHpOiWSChyCowIgDPhywE2C5sfgQwygbbwCKs1BmL8brt4FK9ZgBUiaD9wq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCgL7o2dHJvRi9hqKCrcA4IKO5fMVl%2Bptf2BOsjP3qdO7qFJk4eXYVPCyHh4LLnUAeAfQ8kgLev%2FWBpDWPDGBmpGgsts10K7LXFAeC152OlJaAfPPk55gWnYs1vQ6GLCjR18NaPS9FPPoSb9BPQi1PAjoQZsFs3Q4uDdlNGUM9%2BdGuUf2gE%2BWJwCrqRB8JgPxF5xZispx1gQzQwlTJiTTu83fVgAvPEm62UtabAjZIrL6AviMEPLWSGno77nOIfyOmjoEiPUOfR9qKcNKNW3hgF6JuNUFYGPAPwaHBxTPoM0Qq7ehyRVaH5OQTFQW6nAGF%2FTW3RbxSxqralsdhPWy0uVQjeRQ90Sg%2F2h0aXZ7L3eCbZkJvj8j8ySc1c64X8rRnOuX5UBB9LKy3LzwSu0S3ydq6W3Ar7JtnXMEV3hu8FoJ2bo8Yhch2CrZ8gjj165b%2FGOfveAKXqWRuFTq0LbsQiblAXSyv5Ykmks7DoMz1ooRcoUFoKXt%2FTgG44qMg82e1B%2FQsxI83naCQALAT1lfveFeQdrjbwHX8IRY0Bu0npsqBiVqJbSgHv6HklA4S5ryHCnsC50jVzdbBZdkPskCXuU3bHQt4xcglPg5q4TPBMhAteorL3CZuQRbT%2FFJdFZve%2B%2FdcTeyMSYkZjDMNrzv8QGOqUBrI86NSUGf3HEcbDyUKi01SFzYnbZeE3SqhrD9Q7o84uITiStRTGvn8hITiYeqcI00Qj1thiPJVPFdOwHoZtCcxVYL10KLgeRwIiJmrGvjYRM0JRGneNjrgWb1uwRi1Xx%2BBlgfdjByHx94QYN%2BOWFN2koxysVG0XLSh83xBwhf2ijok0gKTmCD2b9KuoiLnyIVXLDJWYneq4B7QZPE90B1gbEEtMy&X-Amz-Signature=e796bcd86103784939ebe7ca0e7e118afd589aa4b2456faad510d5652f1c5606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CT6TIE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC49zQ2ufkcHvM5Pb54v4fU77Se0fikguHpOiWSChyCowIgDPhywE2C5sfgQwygbbwCKs1BmL8brt4FK9ZgBUiaD9wq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCgL7o2dHJvRi9hqKCrcA4IKO5fMVl%2Bptf2BOsjP3qdO7qFJk4eXYVPCyHh4LLnUAeAfQ8kgLev%2FWBpDWPDGBmpGgsts10K7LXFAeC152OlJaAfPPk55gWnYs1vQ6GLCjR18NaPS9FPPoSb9BPQi1PAjoQZsFs3Q4uDdlNGUM9%2BdGuUf2gE%2BWJwCrqRB8JgPxF5xZispx1gQzQwlTJiTTu83fVgAvPEm62UtabAjZIrL6AviMEPLWSGno77nOIfyOmjoEiPUOfR9qKcNKNW3hgF6JuNUFYGPAPwaHBxTPoM0Qq7ehyRVaH5OQTFQW6nAGF%2FTW3RbxSxqralsdhPWy0uVQjeRQ90Sg%2F2h0aXZ7L3eCbZkJvj8j8ySc1c64X8rRnOuX5UBB9LKy3LzwSu0S3ydq6W3Ar7JtnXMEV3hu8FoJ2bo8Yhch2CrZ8gjj165b%2FGOfveAKXqWRuFTq0LbsQiblAXSyv5Ykmks7DoMz1ooRcoUFoKXt%2FTgG44qMg82e1B%2FQsxI83naCQALAT1lfveFeQdrjbwHX8IRY0Bu0npsqBiVqJbSgHv6HklA4S5ryHCnsC50jVzdbBZdkPskCXuU3bHQt4xcglPg5q4TPBMhAteorL3CZuQRbT%2FFJdFZve%2B%2FdcTeyMSYkZjDMNrzv8QGOqUBrI86NSUGf3HEcbDyUKi01SFzYnbZeE3SqhrD9Q7o84uITiStRTGvn8hITiYeqcI00Qj1thiPJVPFdOwHoZtCcxVYL10KLgeRwIiJmrGvjYRM0JRGneNjrgWb1uwRi1Xx%2BBlgfdjByHx94QYN%2BOWFN2koxysVG0XLSh83xBwhf2ijok0gKTmCD2b9KuoiLnyIVXLDJWYneq4B7QZPE90B1gbEEtMy&X-Amz-Signature=6d204bdacdff0370a2d72b0b31c516da400cf87b433582d3659e2980367e9412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CT6TIE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC49zQ2ufkcHvM5Pb54v4fU77Se0fikguHpOiWSChyCowIgDPhywE2C5sfgQwygbbwCKs1BmL8brt4FK9ZgBUiaD9wq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCgL7o2dHJvRi9hqKCrcA4IKO5fMVl%2Bptf2BOsjP3qdO7qFJk4eXYVPCyHh4LLnUAeAfQ8kgLev%2FWBpDWPDGBmpGgsts10K7LXFAeC152OlJaAfPPk55gWnYs1vQ6GLCjR18NaPS9FPPoSb9BPQi1PAjoQZsFs3Q4uDdlNGUM9%2BdGuUf2gE%2BWJwCrqRB8JgPxF5xZispx1gQzQwlTJiTTu83fVgAvPEm62UtabAjZIrL6AviMEPLWSGno77nOIfyOmjoEiPUOfR9qKcNKNW3hgF6JuNUFYGPAPwaHBxTPoM0Qq7ehyRVaH5OQTFQW6nAGF%2FTW3RbxSxqralsdhPWy0uVQjeRQ90Sg%2F2h0aXZ7L3eCbZkJvj8j8ySc1c64X8rRnOuX5UBB9LKy3LzwSu0S3ydq6W3Ar7JtnXMEV3hu8FoJ2bo8Yhch2CrZ8gjj165b%2FGOfveAKXqWRuFTq0LbsQiblAXSyv5Ykmks7DoMz1ooRcoUFoKXt%2FTgG44qMg82e1B%2FQsxI83naCQALAT1lfveFeQdrjbwHX8IRY0Bu0npsqBiVqJbSgHv6HklA4S5ryHCnsC50jVzdbBZdkPskCXuU3bHQt4xcglPg5q4TPBMhAteorL3CZuQRbT%2FFJdFZve%2B%2FdcTeyMSYkZjDMNrzv8QGOqUBrI86NSUGf3HEcbDyUKi01SFzYnbZeE3SqhrD9Q7o84uITiStRTGvn8hITiYeqcI00Qj1thiPJVPFdOwHoZtCcxVYL10KLgeRwIiJmrGvjYRM0JRGneNjrgWb1uwRi1Xx%2BBlgfdjByHx94QYN%2BOWFN2koxysVG0XLSh83xBwhf2ijok0gKTmCD2b9KuoiLnyIVXLDJWYneq4B7QZPE90B1gbEEtMy&X-Amz-Signature=4f7b40373b177fcadec390904bf981f23f19e7b5c71df4f30a5afc713ea50c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CT6TIE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC49zQ2ufkcHvM5Pb54v4fU77Se0fikguHpOiWSChyCowIgDPhywE2C5sfgQwygbbwCKs1BmL8brt4FK9ZgBUiaD9wq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCgL7o2dHJvRi9hqKCrcA4IKO5fMVl%2Bptf2BOsjP3qdO7qFJk4eXYVPCyHh4LLnUAeAfQ8kgLev%2FWBpDWPDGBmpGgsts10K7LXFAeC152OlJaAfPPk55gWnYs1vQ6GLCjR18NaPS9FPPoSb9BPQi1PAjoQZsFs3Q4uDdlNGUM9%2BdGuUf2gE%2BWJwCrqRB8JgPxF5xZispx1gQzQwlTJiTTu83fVgAvPEm62UtabAjZIrL6AviMEPLWSGno77nOIfyOmjoEiPUOfR9qKcNKNW3hgF6JuNUFYGPAPwaHBxTPoM0Qq7ehyRVaH5OQTFQW6nAGF%2FTW3RbxSxqralsdhPWy0uVQjeRQ90Sg%2F2h0aXZ7L3eCbZkJvj8j8ySc1c64X8rRnOuX5UBB9LKy3LzwSu0S3ydq6W3Ar7JtnXMEV3hu8FoJ2bo8Yhch2CrZ8gjj165b%2FGOfveAKXqWRuFTq0LbsQiblAXSyv5Ykmks7DoMz1ooRcoUFoKXt%2FTgG44qMg82e1B%2FQsxI83naCQALAT1lfveFeQdrjbwHX8IRY0Bu0npsqBiVqJbSgHv6HklA4S5ryHCnsC50jVzdbBZdkPskCXuU3bHQt4xcglPg5q4TPBMhAteorL3CZuQRbT%2FFJdFZve%2B%2FdcTeyMSYkZjDMNrzv8QGOqUBrI86NSUGf3HEcbDyUKi01SFzYnbZeE3SqhrD9Q7o84uITiStRTGvn8hITiYeqcI00Qj1thiPJVPFdOwHoZtCcxVYL10KLgeRwIiJmrGvjYRM0JRGneNjrgWb1uwRi1Xx%2BBlgfdjByHx94QYN%2BOWFN2koxysVG0XLSh83xBwhf2ijok0gKTmCD2b9KuoiLnyIVXLDJWYneq4B7QZPE90B1gbEEtMy&X-Amz-Signature=acc283acdb6710e85f7ff743ba00c11878bd1e9ea9f5b68b49fb9c424a03a930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CT6TIE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC49zQ2ufkcHvM5Pb54v4fU77Se0fikguHpOiWSChyCowIgDPhywE2C5sfgQwygbbwCKs1BmL8brt4FK9ZgBUiaD9wq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCgL7o2dHJvRi9hqKCrcA4IKO5fMVl%2Bptf2BOsjP3qdO7qFJk4eXYVPCyHh4LLnUAeAfQ8kgLev%2FWBpDWPDGBmpGgsts10K7LXFAeC152OlJaAfPPk55gWnYs1vQ6GLCjR18NaPS9FPPoSb9BPQi1PAjoQZsFs3Q4uDdlNGUM9%2BdGuUf2gE%2BWJwCrqRB8JgPxF5xZispx1gQzQwlTJiTTu83fVgAvPEm62UtabAjZIrL6AviMEPLWSGno77nOIfyOmjoEiPUOfR9qKcNKNW3hgF6JuNUFYGPAPwaHBxTPoM0Qq7ehyRVaH5OQTFQW6nAGF%2FTW3RbxSxqralsdhPWy0uVQjeRQ90Sg%2F2h0aXZ7L3eCbZkJvj8j8ySc1c64X8rRnOuX5UBB9LKy3LzwSu0S3ydq6W3Ar7JtnXMEV3hu8FoJ2bo8Yhch2CrZ8gjj165b%2FGOfveAKXqWRuFTq0LbsQiblAXSyv5Ykmks7DoMz1ooRcoUFoKXt%2FTgG44qMg82e1B%2FQsxI83naCQALAT1lfveFeQdrjbwHX8IRY0Bu0npsqBiVqJbSgHv6HklA4S5ryHCnsC50jVzdbBZdkPskCXuU3bHQt4xcglPg5q4TPBMhAteorL3CZuQRbT%2FFJdFZve%2B%2FdcTeyMSYkZjDMNrzv8QGOqUBrI86NSUGf3HEcbDyUKi01SFzYnbZeE3SqhrD9Q7o84uITiStRTGvn8hITiYeqcI00Qj1thiPJVPFdOwHoZtCcxVYL10KLgeRwIiJmrGvjYRM0JRGneNjrgWb1uwRi1Xx%2BBlgfdjByHx94QYN%2BOWFN2koxysVG0XLSh83xBwhf2ijok0gKTmCD2b9KuoiLnyIVXLDJWYneq4B7QZPE90B1gbEEtMy&X-Amz-Signature=77c36effa89f542cb84f976d542aa01c83dd875b71b4d5cc6daa946029c4f8f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CT6TIE6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC49zQ2ufkcHvM5Pb54v4fU77Se0fikguHpOiWSChyCowIgDPhywE2C5sfgQwygbbwCKs1BmL8brt4FK9ZgBUiaD9wq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCgL7o2dHJvRi9hqKCrcA4IKO5fMVl%2Bptf2BOsjP3qdO7qFJk4eXYVPCyHh4LLnUAeAfQ8kgLev%2FWBpDWPDGBmpGgsts10K7LXFAeC152OlJaAfPPk55gWnYs1vQ6GLCjR18NaPS9FPPoSb9BPQi1PAjoQZsFs3Q4uDdlNGUM9%2BdGuUf2gE%2BWJwCrqRB8JgPxF5xZispx1gQzQwlTJiTTu83fVgAvPEm62UtabAjZIrL6AviMEPLWSGno77nOIfyOmjoEiPUOfR9qKcNKNW3hgF6JuNUFYGPAPwaHBxTPoM0Qq7ehyRVaH5OQTFQW6nAGF%2FTW3RbxSxqralsdhPWy0uVQjeRQ90Sg%2F2h0aXZ7L3eCbZkJvj8j8ySc1c64X8rRnOuX5UBB9LKy3LzwSu0S3ydq6W3Ar7JtnXMEV3hu8FoJ2bo8Yhch2CrZ8gjj165b%2FGOfveAKXqWRuFTq0LbsQiblAXSyv5Ykmks7DoMz1ooRcoUFoKXt%2FTgG44qMg82e1B%2FQsxI83naCQALAT1lfveFeQdrjbwHX8IRY0Bu0npsqBiVqJbSgHv6HklA4S5ryHCnsC50jVzdbBZdkPskCXuU3bHQt4xcglPg5q4TPBMhAteorL3CZuQRbT%2FFJdFZve%2B%2FdcTeyMSYkZjDMNrzv8QGOqUBrI86NSUGf3HEcbDyUKi01SFzYnbZeE3SqhrD9Q7o84uITiStRTGvn8hITiYeqcI00Qj1thiPJVPFdOwHoZtCcxVYL10KLgeRwIiJmrGvjYRM0JRGneNjrgWb1uwRi1Xx%2BBlgfdjByHx94QYN%2BOWFN2koxysVG0XLSh83xBwhf2ijok0gKTmCD2b9KuoiLnyIVXLDJWYneq4B7QZPE90B1gbEEtMy&X-Amz-Signature=69cc574a61a14feceac3c90c4306fc73b0b2ea112b54cf506ae2fdd9c717eaee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
