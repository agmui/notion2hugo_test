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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545MPFRY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2zMG36c5y87MSLj7M9MmRdiIZVbWoBX5UFQ4TRB2gVAIgAUjoGwoKfuCaKxU%2FEguSb71pZegABlTBENmn9RQbLtoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5xa4KAwMtpdwjIyrcA93spX4hr52r0IMIc9G%2Bw0FejTyhjb2Quar93ea1FHiSCyUQUbkkjN0Kkklv8xGLWcmBbO7MU5urA8PsDZu8OBNvRRk0PX776NiPtVP4yHfeiDbA0XMGZn%2FyHwk3iHuaNF1MvW%2BhXJesdWdA7MvDDbP3W6jMidJQrfW5h1XGasvATOhh7KNAyMMT0c2OfMMXyC%2FW4T0MRXCbKl4hghE1PzvLz2R3%2F5JwfUA2IbDcGtMSVpeTS4JOavPDdjNOQm8upanl1GUEVZWgOvgUMbqPXCams8E0R8RTKgf%2BlzvnnRV1dtAkqW8MkYhAnSTZao6RqsIod664Wk02UWYJ%2FvGrt6sAwPGVWkWEi667%2F82qBRq0VKZ1Q4WoisW%2FGsGnLkMGGHl7RgnFO6AxPCWbok112xOK31pWS20dPd7FdhzNyjgDKQrZXtM9ZYZ0PZrUjTUmjXMjHtie9AZRY%2B0r%2B7KKMs7XZ2LGoBGiJsR4XG7AWV8KmzhvuXGEDGdmVICzctE6yEtFm47Fe5l3xcMxwGLaoQCC6cwdRav2CsqCXsKI58wqU2ssWczQIA9ctWgE1O5HJt69qjX1zIWGyeaxQZzPNP3OasswczAenKfx%2Bmz8gvPws%2Fcki8fGD4kVMjQGMNDuosYGOqUB5yeNRQLQWk35Tmdz9mUZfPvVDvc7ZDvNjaxm3SeXzt3bQk0Fbt93doclw30x7gppifyiD5eLN4YKQ9Fw3sxVcB3ilScKXXgrtbOiOJCpYo5%2BDSTPGOyhLOo8pgvkSTtUH6r0ckvHsH%2BZxhCh19EPDyWgnTf%2F7iPgc%2FLUkMOOvedVHr5Q3YPJ1ApJf8KHLjmmAkAc2JBwNV%2FiZZ4iDQuS4kEtzrIb&X-Amz-Signature=546489d51fbd276abaea1c9441d59843dc52518d5df8a91127981bbdcec75581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545MPFRY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2zMG36c5y87MSLj7M9MmRdiIZVbWoBX5UFQ4TRB2gVAIgAUjoGwoKfuCaKxU%2FEguSb71pZegABlTBENmn9RQbLtoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5xa4KAwMtpdwjIyrcA93spX4hr52r0IMIc9G%2Bw0FejTyhjb2Quar93ea1FHiSCyUQUbkkjN0Kkklv8xGLWcmBbO7MU5urA8PsDZu8OBNvRRk0PX776NiPtVP4yHfeiDbA0XMGZn%2FyHwk3iHuaNF1MvW%2BhXJesdWdA7MvDDbP3W6jMidJQrfW5h1XGasvATOhh7KNAyMMT0c2OfMMXyC%2FW4T0MRXCbKl4hghE1PzvLz2R3%2F5JwfUA2IbDcGtMSVpeTS4JOavPDdjNOQm8upanl1GUEVZWgOvgUMbqPXCams8E0R8RTKgf%2BlzvnnRV1dtAkqW8MkYhAnSTZao6RqsIod664Wk02UWYJ%2FvGrt6sAwPGVWkWEi667%2F82qBRq0VKZ1Q4WoisW%2FGsGnLkMGGHl7RgnFO6AxPCWbok112xOK31pWS20dPd7FdhzNyjgDKQrZXtM9ZYZ0PZrUjTUmjXMjHtie9AZRY%2B0r%2B7KKMs7XZ2LGoBGiJsR4XG7AWV8KmzhvuXGEDGdmVICzctE6yEtFm47Fe5l3xcMxwGLaoQCC6cwdRav2CsqCXsKI58wqU2ssWczQIA9ctWgE1O5HJt69qjX1zIWGyeaxQZzPNP3OasswczAenKfx%2Bmz8gvPws%2Fcki8fGD4kVMjQGMNDuosYGOqUB5yeNRQLQWk35Tmdz9mUZfPvVDvc7ZDvNjaxm3SeXzt3bQk0Fbt93doclw30x7gppifyiD5eLN4YKQ9Fw3sxVcB3ilScKXXgrtbOiOJCpYo5%2BDSTPGOyhLOo8pgvkSTtUH6r0ckvHsH%2BZxhCh19EPDyWgnTf%2F7iPgc%2FLUkMOOvedVHr5Q3YPJ1ApJf8KHLjmmAkAc2JBwNV%2FiZZ4iDQuS4kEtzrIb&X-Amz-Signature=2d794fadd260ad61d574741cad80528c4a54199e7ee8209852bd4950e468652e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545MPFRY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2zMG36c5y87MSLj7M9MmRdiIZVbWoBX5UFQ4TRB2gVAIgAUjoGwoKfuCaKxU%2FEguSb71pZegABlTBENmn9RQbLtoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5xa4KAwMtpdwjIyrcA93spX4hr52r0IMIc9G%2Bw0FejTyhjb2Quar93ea1FHiSCyUQUbkkjN0Kkklv8xGLWcmBbO7MU5urA8PsDZu8OBNvRRk0PX776NiPtVP4yHfeiDbA0XMGZn%2FyHwk3iHuaNF1MvW%2BhXJesdWdA7MvDDbP3W6jMidJQrfW5h1XGasvATOhh7KNAyMMT0c2OfMMXyC%2FW4T0MRXCbKl4hghE1PzvLz2R3%2F5JwfUA2IbDcGtMSVpeTS4JOavPDdjNOQm8upanl1GUEVZWgOvgUMbqPXCams8E0R8RTKgf%2BlzvnnRV1dtAkqW8MkYhAnSTZao6RqsIod664Wk02UWYJ%2FvGrt6sAwPGVWkWEi667%2F82qBRq0VKZ1Q4WoisW%2FGsGnLkMGGHl7RgnFO6AxPCWbok112xOK31pWS20dPd7FdhzNyjgDKQrZXtM9ZYZ0PZrUjTUmjXMjHtie9AZRY%2B0r%2B7KKMs7XZ2LGoBGiJsR4XG7AWV8KmzhvuXGEDGdmVICzctE6yEtFm47Fe5l3xcMxwGLaoQCC6cwdRav2CsqCXsKI58wqU2ssWczQIA9ctWgE1O5HJt69qjX1zIWGyeaxQZzPNP3OasswczAenKfx%2Bmz8gvPws%2Fcki8fGD4kVMjQGMNDuosYGOqUB5yeNRQLQWk35Tmdz9mUZfPvVDvc7ZDvNjaxm3SeXzt3bQk0Fbt93doclw30x7gppifyiD5eLN4YKQ9Fw3sxVcB3ilScKXXgrtbOiOJCpYo5%2BDSTPGOyhLOo8pgvkSTtUH6r0ckvHsH%2BZxhCh19EPDyWgnTf%2F7iPgc%2FLUkMOOvedVHr5Q3YPJ1ApJf8KHLjmmAkAc2JBwNV%2FiZZ4iDQuS4kEtzrIb&X-Amz-Signature=71ee33806712e214e51e05e0cffac385e0eebcbcefb603b54b4b4fe9c0dc796d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545MPFRY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2zMG36c5y87MSLj7M9MmRdiIZVbWoBX5UFQ4TRB2gVAIgAUjoGwoKfuCaKxU%2FEguSb71pZegABlTBENmn9RQbLtoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5xa4KAwMtpdwjIyrcA93spX4hr52r0IMIc9G%2Bw0FejTyhjb2Quar93ea1FHiSCyUQUbkkjN0Kkklv8xGLWcmBbO7MU5urA8PsDZu8OBNvRRk0PX776NiPtVP4yHfeiDbA0XMGZn%2FyHwk3iHuaNF1MvW%2BhXJesdWdA7MvDDbP3W6jMidJQrfW5h1XGasvATOhh7KNAyMMT0c2OfMMXyC%2FW4T0MRXCbKl4hghE1PzvLz2R3%2F5JwfUA2IbDcGtMSVpeTS4JOavPDdjNOQm8upanl1GUEVZWgOvgUMbqPXCams8E0R8RTKgf%2BlzvnnRV1dtAkqW8MkYhAnSTZao6RqsIod664Wk02UWYJ%2FvGrt6sAwPGVWkWEi667%2F82qBRq0VKZ1Q4WoisW%2FGsGnLkMGGHl7RgnFO6AxPCWbok112xOK31pWS20dPd7FdhzNyjgDKQrZXtM9ZYZ0PZrUjTUmjXMjHtie9AZRY%2B0r%2B7KKMs7XZ2LGoBGiJsR4XG7AWV8KmzhvuXGEDGdmVICzctE6yEtFm47Fe5l3xcMxwGLaoQCC6cwdRav2CsqCXsKI58wqU2ssWczQIA9ctWgE1O5HJt69qjX1zIWGyeaxQZzPNP3OasswczAenKfx%2Bmz8gvPws%2Fcki8fGD4kVMjQGMNDuosYGOqUB5yeNRQLQWk35Tmdz9mUZfPvVDvc7ZDvNjaxm3SeXzt3bQk0Fbt93doclw30x7gppifyiD5eLN4YKQ9Fw3sxVcB3ilScKXXgrtbOiOJCpYo5%2BDSTPGOyhLOo8pgvkSTtUH6r0ckvHsH%2BZxhCh19EPDyWgnTf%2F7iPgc%2FLUkMOOvedVHr5Q3YPJ1ApJf8KHLjmmAkAc2JBwNV%2FiZZ4iDQuS4kEtzrIb&X-Amz-Signature=ae5218f49b17cec6dbd920af937bd1bb1972097b8ebf9146875504b68c26f706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545MPFRY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2zMG36c5y87MSLj7M9MmRdiIZVbWoBX5UFQ4TRB2gVAIgAUjoGwoKfuCaKxU%2FEguSb71pZegABlTBENmn9RQbLtoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5xa4KAwMtpdwjIyrcA93spX4hr52r0IMIc9G%2Bw0FejTyhjb2Quar93ea1FHiSCyUQUbkkjN0Kkklv8xGLWcmBbO7MU5urA8PsDZu8OBNvRRk0PX776NiPtVP4yHfeiDbA0XMGZn%2FyHwk3iHuaNF1MvW%2BhXJesdWdA7MvDDbP3W6jMidJQrfW5h1XGasvATOhh7KNAyMMT0c2OfMMXyC%2FW4T0MRXCbKl4hghE1PzvLz2R3%2F5JwfUA2IbDcGtMSVpeTS4JOavPDdjNOQm8upanl1GUEVZWgOvgUMbqPXCams8E0R8RTKgf%2BlzvnnRV1dtAkqW8MkYhAnSTZao6RqsIod664Wk02UWYJ%2FvGrt6sAwPGVWkWEi667%2F82qBRq0VKZ1Q4WoisW%2FGsGnLkMGGHl7RgnFO6AxPCWbok112xOK31pWS20dPd7FdhzNyjgDKQrZXtM9ZYZ0PZrUjTUmjXMjHtie9AZRY%2B0r%2B7KKMs7XZ2LGoBGiJsR4XG7AWV8KmzhvuXGEDGdmVICzctE6yEtFm47Fe5l3xcMxwGLaoQCC6cwdRav2CsqCXsKI58wqU2ssWczQIA9ctWgE1O5HJt69qjX1zIWGyeaxQZzPNP3OasswczAenKfx%2Bmz8gvPws%2Fcki8fGD4kVMjQGMNDuosYGOqUB5yeNRQLQWk35Tmdz9mUZfPvVDvc7ZDvNjaxm3SeXzt3bQk0Fbt93doclw30x7gppifyiD5eLN4YKQ9Fw3sxVcB3ilScKXXgrtbOiOJCpYo5%2BDSTPGOyhLOo8pgvkSTtUH6r0ckvHsH%2BZxhCh19EPDyWgnTf%2F7iPgc%2FLUkMOOvedVHr5Q3YPJ1ApJf8KHLjmmAkAc2JBwNV%2FiZZ4iDQuS4kEtzrIb&X-Amz-Signature=30b745aaee1b9ce9ff9e5ad62eb23050c6082a8ad2a38961180be24c880ed46a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545MPFRY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2zMG36c5y87MSLj7M9MmRdiIZVbWoBX5UFQ4TRB2gVAIgAUjoGwoKfuCaKxU%2FEguSb71pZegABlTBENmn9RQbLtoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5xa4KAwMtpdwjIyrcA93spX4hr52r0IMIc9G%2Bw0FejTyhjb2Quar93ea1FHiSCyUQUbkkjN0Kkklv8xGLWcmBbO7MU5urA8PsDZu8OBNvRRk0PX776NiPtVP4yHfeiDbA0XMGZn%2FyHwk3iHuaNF1MvW%2BhXJesdWdA7MvDDbP3W6jMidJQrfW5h1XGasvATOhh7KNAyMMT0c2OfMMXyC%2FW4T0MRXCbKl4hghE1PzvLz2R3%2F5JwfUA2IbDcGtMSVpeTS4JOavPDdjNOQm8upanl1GUEVZWgOvgUMbqPXCams8E0R8RTKgf%2BlzvnnRV1dtAkqW8MkYhAnSTZao6RqsIod664Wk02UWYJ%2FvGrt6sAwPGVWkWEi667%2F82qBRq0VKZ1Q4WoisW%2FGsGnLkMGGHl7RgnFO6AxPCWbok112xOK31pWS20dPd7FdhzNyjgDKQrZXtM9ZYZ0PZrUjTUmjXMjHtie9AZRY%2B0r%2B7KKMs7XZ2LGoBGiJsR4XG7AWV8KmzhvuXGEDGdmVICzctE6yEtFm47Fe5l3xcMxwGLaoQCC6cwdRav2CsqCXsKI58wqU2ssWczQIA9ctWgE1O5HJt69qjX1zIWGyeaxQZzPNP3OasswczAenKfx%2Bmz8gvPws%2Fcki8fGD4kVMjQGMNDuosYGOqUB5yeNRQLQWk35Tmdz9mUZfPvVDvc7ZDvNjaxm3SeXzt3bQk0Fbt93doclw30x7gppifyiD5eLN4YKQ9Fw3sxVcB3ilScKXXgrtbOiOJCpYo5%2BDSTPGOyhLOo8pgvkSTtUH6r0ckvHsH%2BZxhCh19EPDyWgnTf%2F7iPgc%2FLUkMOOvedVHr5Q3YPJ1ApJf8KHLjmmAkAc2JBwNV%2FiZZ4iDQuS4kEtzrIb&X-Amz-Signature=5597f1b6fde4e327db44ffd0fba262595783111901b8a37d49e9ed96a654952d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545MPFRY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2zMG36c5y87MSLj7M9MmRdiIZVbWoBX5UFQ4TRB2gVAIgAUjoGwoKfuCaKxU%2FEguSb71pZegABlTBENmn9RQbLtoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5xa4KAwMtpdwjIyrcA93spX4hr52r0IMIc9G%2Bw0FejTyhjb2Quar93ea1FHiSCyUQUbkkjN0Kkklv8xGLWcmBbO7MU5urA8PsDZu8OBNvRRk0PX776NiPtVP4yHfeiDbA0XMGZn%2FyHwk3iHuaNF1MvW%2BhXJesdWdA7MvDDbP3W6jMidJQrfW5h1XGasvATOhh7KNAyMMT0c2OfMMXyC%2FW4T0MRXCbKl4hghE1PzvLz2R3%2F5JwfUA2IbDcGtMSVpeTS4JOavPDdjNOQm8upanl1GUEVZWgOvgUMbqPXCams8E0R8RTKgf%2BlzvnnRV1dtAkqW8MkYhAnSTZao6RqsIod664Wk02UWYJ%2FvGrt6sAwPGVWkWEi667%2F82qBRq0VKZ1Q4WoisW%2FGsGnLkMGGHl7RgnFO6AxPCWbok112xOK31pWS20dPd7FdhzNyjgDKQrZXtM9ZYZ0PZrUjTUmjXMjHtie9AZRY%2B0r%2B7KKMs7XZ2LGoBGiJsR4XG7AWV8KmzhvuXGEDGdmVICzctE6yEtFm47Fe5l3xcMxwGLaoQCC6cwdRav2CsqCXsKI58wqU2ssWczQIA9ctWgE1O5HJt69qjX1zIWGyeaxQZzPNP3OasswczAenKfx%2Bmz8gvPws%2Fcki8fGD4kVMjQGMNDuosYGOqUB5yeNRQLQWk35Tmdz9mUZfPvVDvc7ZDvNjaxm3SeXzt3bQk0Fbt93doclw30x7gppifyiD5eLN4YKQ9Fw3sxVcB3ilScKXXgrtbOiOJCpYo5%2BDSTPGOyhLOo8pgvkSTtUH6r0ckvHsH%2BZxhCh19EPDyWgnTf%2F7iPgc%2FLUkMOOvedVHr5Q3YPJ1ApJf8KHLjmmAkAc2JBwNV%2FiZZ4iDQuS4kEtzrIb&X-Amz-Signature=06960253937ebe0441bf39fd355641b97f364b197ea41b337c333857a572bd51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545MPFRY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2zMG36c5y87MSLj7M9MmRdiIZVbWoBX5UFQ4TRB2gVAIgAUjoGwoKfuCaKxU%2FEguSb71pZegABlTBENmn9RQbLtoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5xa4KAwMtpdwjIyrcA93spX4hr52r0IMIc9G%2Bw0FejTyhjb2Quar93ea1FHiSCyUQUbkkjN0Kkklv8xGLWcmBbO7MU5urA8PsDZu8OBNvRRk0PX776NiPtVP4yHfeiDbA0XMGZn%2FyHwk3iHuaNF1MvW%2BhXJesdWdA7MvDDbP3W6jMidJQrfW5h1XGasvATOhh7KNAyMMT0c2OfMMXyC%2FW4T0MRXCbKl4hghE1PzvLz2R3%2F5JwfUA2IbDcGtMSVpeTS4JOavPDdjNOQm8upanl1GUEVZWgOvgUMbqPXCams8E0R8RTKgf%2BlzvnnRV1dtAkqW8MkYhAnSTZao6RqsIod664Wk02UWYJ%2FvGrt6sAwPGVWkWEi667%2F82qBRq0VKZ1Q4WoisW%2FGsGnLkMGGHl7RgnFO6AxPCWbok112xOK31pWS20dPd7FdhzNyjgDKQrZXtM9ZYZ0PZrUjTUmjXMjHtie9AZRY%2B0r%2B7KKMs7XZ2LGoBGiJsR4XG7AWV8KmzhvuXGEDGdmVICzctE6yEtFm47Fe5l3xcMxwGLaoQCC6cwdRav2CsqCXsKI58wqU2ssWczQIA9ctWgE1O5HJt69qjX1zIWGyeaxQZzPNP3OasswczAenKfx%2Bmz8gvPws%2Fcki8fGD4kVMjQGMNDuosYGOqUB5yeNRQLQWk35Tmdz9mUZfPvVDvc7ZDvNjaxm3SeXzt3bQk0Fbt93doclw30x7gppifyiD5eLN4YKQ9Fw3sxVcB3ilScKXXgrtbOiOJCpYo5%2BDSTPGOyhLOo8pgvkSTtUH6r0ckvHsH%2BZxhCh19EPDyWgnTf%2F7iPgc%2FLUkMOOvedVHr5Q3YPJ1ApJf8KHLjmmAkAc2JBwNV%2FiZZ4iDQuS4kEtzrIb&X-Amz-Signature=30da5ca89feebc493f74252735dde25bc2c055c882dbc73dbc02d477b4b090ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545MPFRY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2zMG36c5y87MSLj7M9MmRdiIZVbWoBX5UFQ4TRB2gVAIgAUjoGwoKfuCaKxU%2FEguSb71pZegABlTBENmn9RQbLtoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5xa4KAwMtpdwjIyrcA93spX4hr52r0IMIc9G%2Bw0FejTyhjb2Quar93ea1FHiSCyUQUbkkjN0Kkklv8xGLWcmBbO7MU5urA8PsDZu8OBNvRRk0PX776NiPtVP4yHfeiDbA0XMGZn%2FyHwk3iHuaNF1MvW%2BhXJesdWdA7MvDDbP3W6jMidJQrfW5h1XGasvATOhh7KNAyMMT0c2OfMMXyC%2FW4T0MRXCbKl4hghE1PzvLz2R3%2F5JwfUA2IbDcGtMSVpeTS4JOavPDdjNOQm8upanl1GUEVZWgOvgUMbqPXCams8E0R8RTKgf%2BlzvnnRV1dtAkqW8MkYhAnSTZao6RqsIod664Wk02UWYJ%2FvGrt6sAwPGVWkWEi667%2F82qBRq0VKZ1Q4WoisW%2FGsGnLkMGGHl7RgnFO6AxPCWbok112xOK31pWS20dPd7FdhzNyjgDKQrZXtM9ZYZ0PZrUjTUmjXMjHtie9AZRY%2B0r%2B7KKMs7XZ2LGoBGiJsR4XG7AWV8KmzhvuXGEDGdmVICzctE6yEtFm47Fe5l3xcMxwGLaoQCC6cwdRav2CsqCXsKI58wqU2ssWczQIA9ctWgE1O5HJt69qjX1zIWGyeaxQZzPNP3OasswczAenKfx%2Bmz8gvPws%2Fcki8fGD4kVMjQGMNDuosYGOqUB5yeNRQLQWk35Tmdz9mUZfPvVDvc7ZDvNjaxm3SeXzt3bQk0Fbt93doclw30x7gppifyiD5eLN4YKQ9Fw3sxVcB3ilScKXXgrtbOiOJCpYo5%2BDSTPGOyhLOo8pgvkSTtUH6r0ckvHsH%2BZxhCh19EPDyWgnTf%2F7iPgc%2FLUkMOOvedVHr5Q3YPJ1ApJf8KHLjmmAkAc2JBwNV%2FiZZ4iDQuS4kEtzrIb&X-Amz-Signature=1bacf3ebc988434f99641a44fd5ba64f8a2d77bf9ed629f54981bda4633ab8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545MPFRY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2zMG36c5y87MSLj7M9MmRdiIZVbWoBX5UFQ4TRB2gVAIgAUjoGwoKfuCaKxU%2FEguSb71pZegABlTBENmn9RQbLtoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5xa4KAwMtpdwjIyrcA93spX4hr52r0IMIc9G%2Bw0FejTyhjb2Quar93ea1FHiSCyUQUbkkjN0Kkklv8xGLWcmBbO7MU5urA8PsDZu8OBNvRRk0PX776NiPtVP4yHfeiDbA0XMGZn%2FyHwk3iHuaNF1MvW%2BhXJesdWdA7MvDDbP3W6jMidJQrfW5h1XGasvATOhh7KNAyMMT0c2OfMMXyC%2FW4T0MRXCbKl4hghE1PzvLz2R3%2F5JwfUA2IbDcGtMSVpeTS4JOavPDdjNOQm8upanl1GUEVZWgOvgUMbqPXCams8E0R8RTKgf%2BlzvnnRV1dtAkqW8MkYhAnSTZao6RqsIod664Wk02UWYJ%2FvGrt6sAwPGVWkWEi667%2F82qBRq0VKZ1Q4WoisW%2FGsGnLkMGGHl7RgnFO6AxPCWbok112xOK31pWS20dPd7FdhzNyjgDKQrZXtM9ZYZ0PZrUjTUmjXMjHtie9AZRY%2B0r%2B7KKMs7XZ2LGoBGiJsR4XG7AWV8KmzhvuXGEDGdmVICzctE6yEtFm47Fe5l3xcMxwGLaoQCC6cwdRav2CsqCXsKI58wqU2ssWczQIA9ctWgE1O5HJt69qjX1zIWGyeaxQZzPNP3OasswczAenKfx%2Bmz8gvPws%2Fcki8fGD4kVMjQGMNDuosYGOqUB5yeNRQLQWk35Tmdz9mUZfPvVDvc7ZDvNjaxm3SeXzt3bQk0Fbt93doclw30x7gppifyiD5eLN4YKQ9Fw3sxVcB3ilScKXXgrtbOiOJCpYo5%2BDSTPGOyhLOo8pgvkSTtUH6r0ckvHsH%2BZxhCh19EPDyWgnTf%2F7iPgc%2FLUkMOOvedVHr5Q3YPJ1ApJf8KHLjmmAkAc2JBwNV%2FiZZ4iDQuS4kEtzrIb&X-Amz-Signature=c2b0086e3ab87e7de8cabf20f8a841eadd13765d5a3ab51dce52a20e5caa74ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBELC3X2%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCGJ5lqc2ZSyKtzuf4dXoSB9lV12geQl7rPfODLZ9X3RgIgFGdeOlUHvb66INnYEX4kp3aOnz3WtwdikeIGJpY3RdsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiHjZanx30gshH4fCrcA0Y55owS3xZ%2BqBjsggHQr1Q52RjmoCl5K8kxPWj0dSLi4kb4ChM4ph%2Fd8a7huc7zLZ7wLhVwOUNhxA3aPnKLlLz8ftEwIICTw%2FAaWZRUTzI1S2uwc0oABRnS34IoAX0%2BUpZ4d5HIsTKTVQ6vYfvBOtxBs%2FTdhg7P3wezcPrirm%2FJ%2BPcjRgbADKyzjKnZ0vSFYnSVCM5%2B2GbXr%2FtJyoKKz%2FsF71nnaW7oI7Rux0TmAqFtKTfD5P57I0J151nBeOXAetDCCmpTbyBGlkxtniO28k2J2T5iq2%2FvYlkEmqaoUS7f1tUNVUu9MUWCWVA0%2FXDTGy8BFsAUKTOoR3%2BgH4oqAwPKoJY3qE3zGZnJTtmHZQew2qllByEQB2FzITn9GNeeySNNGI1UqzJevrKDzj1PVtbVwi4HV9kw%2BI1qnIQMeyFWFOLWuUhwSzXbtChrQA4tCfxf1ycm0md8%2BLHsCNPbcfxT4K9W6f%2BbkbFw%2BH47fr7xgpbs7IwkkxvtSdl9hc30RtiTAyDTHZr6031JpFX8bt5g%2FtMYkxmn%2FFUp5mrHgTJHX2b8bSoy9fclolsX8StFoIxn2djOhZKi%2BOG6ESUKBXDGfhvv5bATA7iht%2BOL7Lhq7iDk7hzvZdpd7zzwMI%2FwosYGOqUBQJ7ifPEKJTirMC6hPtOj81rdmPM61BDoYi%2FqSYmdVearfVuqZ%2FG35mm2fekdK0lKJfHPrNC9EcGLJsEm3MqAq0C4S4KNJjs9RJeg9CDZOvGneau%2Bnm%2FIQS7kukm1Yd50OUX34SpZzd546ORF7WwBBM76QXZb2%2Fpm6JP5%2FQS91uFEoFJtRNQ8HElDI%2BYsADTOgtPTOhxLKj%2BAYfZVWNRnC9Qv6evm&X-Amz-Signature=adb9c283d98b3cdf080072cb339661b3bc2b83974efe4f32346f3d238985df49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDFIW7Z3%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCt6qFC%2Fw0dRe82U0XM7HdvEuxvNiGeKXVARTHCjcUf1QIgdeJwvmMhkZs7C9RvBQ%2B0vKXnQRAuNRxUD7Ej%2BmLK7AkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwHZwTjQFwTd%2BeknSrcA8U45batfYZnFeRCI%2FBpRMhPtIoeJtJYk%2FMnrmtJsWA5WvmEZfMNmzIPho9qr1JEyIZzPPOcbi%2F5S3kd%2FLxPnEIWNgX0qdBSDdhjjKzjmutvW8YDJq4yUxYoyAF1deOt3%2F7XESmq1AObPw906RLtHhh6oLrMQDfUDMOi5fcGOFkWKHG5u19c7rkPpcoppOU4zXMD%2BsPxBtHLqrRSttsosuRAQTLtol2dhh%2FNmYX0c7sFQ8UA43Oqyy1tg8Ku8fjXstUZ1ofJSR1yF%2FmOR1XzOLrYxddpBmWO%2F3JHNVCw5tfX5CyrBcu0vHYzF8qiAIPo36A8QlzVLCqMlf0FquYQ6jY4pLDVctPv8J6W%2FhGLq8vZrbMuQ49oMotwNcdLipK3nuLy9xfTFwT0R5D%2BWPwkoNqKq80bDfBdPJu5WBr1lo%2F3SnQWvA%2FnYrD4z%2FQibcnU6t%2BzOcY%2Fnz87a6tvBPMQE0NxA4eEDYXmjun%2FCrrnfBBlMXyoX7fneY50YUTevsFBO8ia2nH5MFO%2BcaIwb5h4vshkqwNkSftzG8iOLFMdp93iXIG3B5S1mVxUucFXTxLxj58dVsZby1dkiQIY5oip7TtbtiLWzFh7GjWDV6w3JuxvA%2Fb7njPOa4jHGNqWMLnuosYGOqUBkGq4toPMhb3oP1PcX5Y1V6wpHlKY%2BaiJXDQxlaXSB5k38%2FJ5Y0IK1dA2FWJLF0Lbii%2FcTTjtNy8gWGXC9MQC8F0cbxLc3cL%2FXnOEW4s9NcFnD%2F3rfXWlDe437weAtwP7a45H2IqIZMXUOn8EyCshuHOU398Y7ckSI1ArY1zq%2FWQbewCuv1Ul%2B4j2t50zuKJMGwclAt%2FlR8s9qaiQTGQGDZzQxx0u&X-Amz-Signature=a47a8173fb3d9cf93a54ed9adfeb94d94a045835a0aa1907a1dd8d134e59e549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLMRARU2%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIE3P7lHH%2FzXDt6XsC8hUD%2BcbY7754PiSSSnzhcIY1QuPAiB3jhX9FJ0Jb2dT%2FdbLqJQtRAWHId84X4sPMErz33DrYyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMApSwMcOSOAvvT%2B17KtwDPlRIsmb%2FQRWgBpIs4H1EiZCSSYeVLQTnc4E%2FOSg7N0vWqs1WBw248qor0w03BjILEF9nFvtDZEx7Oa%2BJJ3EpZ%2BvVZU6slsv3XkZB4GGwmlZsy5TbO99DURHZ%2FAAnYGaM5gLvq7yRokjWe4b09pSi63xnDw8%2Fxs9h%2Fq3Fby9e6qD8%2FZHN252wfzsPnAODBlE36%2FH6Wv6zhjsDqPnve8Cd2cNC1y7doA93J6v3BQc0DHEVLmGg7PLf4D90515pOLSe%2BR4yz19aaG4OT%2BOKTYdyXZVZbbfjjJTnv3co87nTfwth4yBjpHsP09EjbGG6K%2F9VWj7sN%2BwC60c6po5ZzLV7S8%2FwxowSHdgSZn03%2F%2B7WGI27TMvovFB0g%2FJmWwbceM0WfszAvLV8XPc%2BPpy3sLK3FtB%2Fbg36ypxlqRPieryKn36LqXC6CPvkZkhOt89Hr0Yoe4QHPucxA3sv6uwuJhFEXtCCrc8qbIWHBqYBuWd%2Fpl71nOb0PQmI1g3NnWefbgvIuKWeQNSG50XUECluYtJ3b8SEIJF6QKPnqhgAEFpAAQ0FygwWXHaYA9eQWgguvwy7w7AFztc06Z772YqD5uLyFjRDelRGTm3P1y3NH8SpNtg9bjb1FhjmzKV8H8AwtfCixgY6pgGf6CVqTPAgyYlRU8DGXhuQPKubCKGzAmhnRJTZ2%2BMr%2FgoVuyexpTmuIOoHux8tqhTFFLf6Wb4uCi2m%2BQdfFWGzBJ5R9gkS570nIBdjz%2FBFcwhF05bGSj5I2OWHXOz%2Bz8TVAubvsSBMkFmXdS1u882nSbT%2F8qcUPAqQmAw%2Fuq07%2B2Q8QO2bXbRIak6rO87E5ukKZpachDj2bI9TGkTeItkIq1bgJPp3&X-Amz-Signature=3906e913854da698a67f039af053be0571724fd8981b7b1eb304a8843d9def14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545MPFRY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2zMG36c5y87MSLj7M9MmRdiIZVbWoBX5UFQ4TRB2gVAIgAUjoGwoKfuCaKxU%2FEguSb71pZegABlTBENmn9RQbLtoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5xa4KAwMtpdwjIyrcA93spX4hr52r0IMIc9G%2Bw0FejTyhjb2Quar93ea1FHiSCyUQUbkkjN0Kkklv8xGLWcmBbO7MU5urA8PsDZu8OBNvRRk0PX776NiPtVP4yHfeiDbA0XMGZn%2FyHwk3iHuaNF1MvW%2BhXJesdWdA7MvDDbP3W6jMidJQrfW5h1XGasvATOhh7KNAyMMT0c2OfMMXyC%2FW4T0MRXCbKl4hghE1PzvLz2R3%2F5JwfUA2IbDcGtMSVpeTS4JOavPDdjNOQm8upanl1GUEVZWgOvgUMbqPXCams8E0R8RTKgf%2BlzvnnRV1dtAkqW8MkYhAnSTZao6RqsIod664Wk02UWYJ%2FvGrt6sAwPGVWkWEi667%2F82qBRq0VKZ1Q4WoisW%2FGsGnLkMGGHl7RgnFO6AxPCWbok112xOK31pWS20dPd7FdhzNyjgDKQrZXtM9ZYZ0PZrUjTUmjXMjHtie9AZRY%2B0r%2B7KKMs7XZ2LGoBGiJsR4XG7AWV8KmzhvuXGEDGdmVICzctE6yEtFm47Fe5l3xcMxwGLaoQCC6cwdRav2CsqCXsKI58wqU2ssWczQIA9ctWgE1O5HJt69qjX1zIWGyeaxQZzPNP3OasswczAenKfx%2Bmz8gvPws%2Fcki8fGD4kVMjQGMNDuosYGOqUB5yeNRQLQWk35Tmdz9mUZfPvVDvc7ZDvNjaxm3SeXzt3bQk0Fbt93doclw30x7gppifyiD5eLN4YKQ9Fw3sxVcB3ilScKXXgrtbOiOJCpYo5%2BDSTPGOyhLOo8pgvkSTtUH6r0ckvHsH%2BZxhCh19EPDyWgnTf%2F7iPgc%2FLUkMOOvedVHr5Q3YPJ1ApJf8KHLjmmAkAc2JBwNV%2FiZZ4iDQuS4kEtzrIb&X-Amz-Signature=5787297f1047e7cb446542c3ff25b5229815d0dcd0f9963d4d6459216beca73c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4YVBG63%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDFP2Ii8f1FpxgZfmgXwAfXdetivt2zMckFXJkyx7JBHAiEA05EYzr22Bz9%2FejwfW06EmUz0j7OO4YDOFEgdiLeW0t0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOm6NUOhk9nUpyTQWCrcAwHXgVfm1A5A1oeGQHT6ZRfi6A8TI3d6%2FJC6ECXVNpgRckmRwI%2B59nLgfEyvvLSNznss%2B7d%2BsI1g2%2FOM%2BY9bBsRO71sKw%2Bf5xR0WDY7lXKEqKmAJHMrk5vrKt9rWgQP5HtymxTWDZYq6asneGe0Z6%2FKrvsBn8Nm1W003adAY2G3m%2FWyC%2BfdhBogw6JQ0QVlROdcdEq3cN1Y7bjluQvGXte2Fhrrkkym7HJP1x7Qx3E47LF%2FV%2BNwYav688E49JJHN0nIQY0tPMxxKF178W8G3YDfE9wGpdqbV8RyG0BP0UUP2UrKxP4dzXokqfJpTqq08XObvrE67dRXATVHSHEHTJYNiCXm5%2BKQSUgj7hx1tPkfy914MY6O5QGSjzl6AAhUsmxLtQ%2Bdol5VZQwsgnAjaBbNG0yE72%2BaLxKHpKepNxLmUD9x4DjhUPhO8GkliJ1%2FSpLc33F%2BvTJjQjV3%2BEBci1FzE7Z0JelyTRgonBKsVmdpanCV65EG%2FTcOQfInn2pGBs2WoT0%2FzXl0zPLvxsQK0y2p5UcX2lUorgjSVMwxkoQQMYaPYuVQtL4Yv0FiFbRGxxn6LK3wTLvUpbU3Mq%2FseNgAYO0r6bWIwDlWWJ6edhOl7R7sxI%2BSDhXGxPjRQMLDwosYGOqUBpUoHTcaDR9jZ%2BT%2BhHQu0e43IPfGjVtT6%2Fj7fcwx7GlkYmgiXA%2B5Zr4R7HznnyEaIUBSEKAPFQp8lnFAC5zGbjdy6fnq0MtMGhgWO4G8EMVp6tnyqT1h2Q%2B6soC%2B9rSvfKoQKpNml%2Br6MaGAcUQZKK6XOSIgM4gJfLY1xChC%2Ftoe6prJ106gDOoc8vL73su61ctuhzKmKlLq%2BMWyF5%2F%2B7MHGEHQxN&X-Amz-Signature=93934e1c3c900376825c09c17d2931fb40d11646061a3ef5b0e8d48eb5c20e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545MPFRY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2zMG36c5y87MSLj7M9MmRdiIZVbWoBX5UFQ4TRB2gVAIgAUjoGwoKfuCaKxU%2FEguSb71pZegABlTBENmn9RQbLtoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5xa4KAwMtpdwjIyrcA93spX4hr52r0IMIc9G%2Bw0FejTyhjb2Quar93ea1FHiSCyUQUbkkjN0Kkklv8xGLWcmBbO7MU5urA8PsDZu8OBNvRRk0PX776NiPtVP4yHfeiDbA0XMGZn%2FyHwk3iHuaNF1MvW%2BhXJesdWdA7MvDDbP3W6jMidJQrfW5h1XGasvATOhh7KNAyMMT0c2OfMMXyC%2FW4T0MRXCbKl4hghE1PzvLz2R3%2F5JwfUA2IbDcGtMSVpeTS4JOavPDdjNOQm8upanl1GUEVZWgOvgUMbqPXCams8E0R8RTKgf%2BlzvnnRV1dtAkqW8MkYhAnSTZao6RqsIod664Wk02UWYJ%2FvGrt6sAwPGVWkWEi667%2F82qBRq0VKZ1Q4WoisW%2FGsGnLkMGGHl7RgnFO6AxPCWbok112xOK31pWS20dPd7FdhzNyjgDKQrZXtM9ZYZ0PZrUjTUmjXMjHtie9AZRY%2B0r%2B7KKMs7XZ2LGoBGiJsR4XG7AWV8KmzhvuXGEDGdmVICzctE6yEtFm47Fe5l3xcMxwGLaoQCC6cwdRav2CsqCXsKI58wqU2ssWczQIA9ctWgE1O5HJt69qjX1zIWGyeaxQZzPNP3OasswczAenKfx%2Bmz8gvPws%2Fcki8fGD4kVMjQGMNDuosYGOqUB5yeNRQLQWk35Tmdz9mUZfPvVDvc7ZDvNjaxm3SeXzt3bQk0Fbt93doclw30x7gppifyiD5eLN4YKQ9Fw3sxVcB3ilScKXXgrtbOiOJCpYo5%2BDSTPGOyhLOo8pgvkSTtUH6r0ckvHsH%2BZxhCh19EPDyWgnTf%2F7iPgc%2FLUkMOOvedVHr5Q3YPJ1ApJf8KHLjmmAkAc2JBwNV%2FiZZ4iDQuS4kEtzrIb&X-Amz-Signature=40531e51d0b7ed86c6d7cb96a13c9ef114071562f8a54c1f74123236e80233f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WAF7N4R%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCPe%2Bb6cFpguGgF9mCNEixpLhk2Unc%2FsULYDCpLI1XocQIgEIf2RIe%2FaKe%2Fs4NtgpnLrbASdaWXj0mx8PsGE8hdI0gqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOvSwArZaRbE9ZTUircAz7fPEhzxNHVdKTtNn4BP29fGT6lfZx1CCvxUlz0soDrl1617mekHcqyBN0lTYnKlUZpbE3dy5PXWLmFveti81A6X43IPbS00Fad2PxtBa2BtsRMUfOgO0Wkwxbevn%2Bj3mSrjYgEoifuVwihtGAMGHFuEV%2F4gF8Yt%2B30%2Fr%2BVGVWFn8WKf31z4k3xcEabMe4VsFye4AweWIFT9qvPbS8ZTtdm2lQHxPXIATZRa9FKoCq3EpwXkrrdRKiDd9ZvUO2EbELgL%2BwYriMIQB1Sa%2FnzvWYfbTBoqgT7KiCNPNAD5WEwVC9Gxax2rLG0hUKZO13%2FR5mvFaxW%2FGXRCDkoSNBsxKObVUtu%2BBa9g2HW%2Bdxfy%2BHxml4cof9ScWAQIkXpVI8LDxOpjzrv3bJkgDywBo6vyMhl60pjNFYMJMZAhaSf8hl9U5e92jE4vQ5EDyehqruu2MT1jlJdO42Y%2F6jbzy4KQs9G%2BzflpGFV99RnJY5qCuu3ggIFLa%2FNsxajc%2BtxEd%2FGXxUq%2BcNHZsPIh1L98c%2Bn3ZHS2kl1CpOwZOwV%2BOfGyOdOVSAZTxvzaOgFzTiatYU5LT5es0mNUtq3KtzcAFkQzxeywkPgBefQfhN0SoHWZgQ%2BBp%2FHCfB%2FU%2B9uBHuYMNXvosYGOqUBdZZxZHcwqSC6ZILFcfE2mqrom4pJe3H7XhqTFAyWXz%2Bd%2FC6VwNobYBJsB%2BS8TMfW%2BpaVwO%2BKmGi3m%2BRYznXJtyo0sJYdrgJfr%2F4HPiadg489V3rGSmHwQULDJItPgCh6X063EvQu6wacW2A4CmfOhvM7sHkp%2BCwdz0HwpiLJZASE7x3wTL4WXj%2BsVaQmCYQ2cpe4sFiLfBkdUOnTSXmnSSKlc896&X-Amz-Signature=653c50d92399f0f52e4935e066a18edb0d5b8a3b8753896cecb715aa741936ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545MPFRY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2zMG36c5y87MSLj7M9MmRdiIZVbWoBX5UFQ4TRB2gVAIgAUjoGwoKfuCaKxU%2FEguSb71pZegABlTBENmn9RQbLtoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5xa4KAwMtpdwjIyrcA93spX4hr52r0IMIc9G%2Bw0FejTyhjb2Quar93ea1FHiSCyUQUbkkjN0Kkklv8xGLWcmBbO7MU5urA8PsDZu8OBNvRRk0PX776NiPtVP4yHfeiDbA0XMGZn%2FyHwk3iHuaNF1MvW%2BhXJesdWdA7MvDDbP3W6jMidJQrfW5h1XGasvATOhh7KNAyMMT0c2OfMMXyC%2FW4T0MRXCbKl4hghE1PzvLz2R3%2F5JwfUA2IbDcGtMSVpeTS4JOavPDdjNOQm8upanl1GUEVZWgOvgUMbqPXCams8E0R8RTKgf%2BlzvnnRV1dtAkqW8MkYhAnSTZao6RqsIod664Wk02UWYJ%2FvGrt6sAwPGVWkWEi667%2F82qBRq0VKZ1Q4WoisW%2FGsGnLkMGGHl7RgnFO6AxPCWbok112xOK31pWS20dPd7FdhzNyjgDKQrZXtM9ZYZ0PZrUjTUmjXMjHtie9AZRY%2B0r%2B7KKMs7XZ2LGoBGiJsR4XG7AWV8KmzhvuXGEDGdmVICzctE6yEtFm47Fe5l3xcMxwGLaoQCC6cwdRav2CsqCXsKI58wqU2ssWczQIA9ctWgE1O5HJt69qjX1zIWGyeaxQZzPNP3OasswczAenKfx%2Bmz8gvPws%2Fcki8fGD4kVMjQGMNDuosYGOqUB5yeNRQLQWk35Tmdz9mUZfPvVDvc7ZDvNjaxm3SeXzt3bQk0Fbt93doclw30x7gppifyiD5eLN4YKQ9Fw3sxVcB3ilScKXXgrtbOiOJCpYo5%2BDSTPGOyhLOo8pgvkSTtUH6r0ckvHsH%2BZxhCh19EPDyWgnTf%2F7iPgc%2FLUkMOOvedVHr5Q3YPJ1ApJf8KHLjmmAkAc2JBwNV%2FiZZ4iDQuS4kEtzrIb&X-Amz-Signature=ab4b09f91def2e3b5d09231f38b4edd93028c8e74a6b370101338359b5a089c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKH43X6%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFjU0qYNAEKHsdeTnTlUSrFcnxp%2B%2BRE%2BrMV%2FMab02qcUAiEAvSgjIO76Ii%2FH8NJw7Si7eZBmEmtX9kOTNOo%2F1quGZKwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAC5jLd8PTkk0pV6dSrcA2jhYkBxO%2Fi%2BzralB1oVDfGfsmhCL8vBfLXiP06j3mirWbnIItgfxUP%2BTzssHFn2oQweHa3l%2FSkEnIU6cf%2BftarD8rGeMsxJIcRTcaCA5vmxYrIpwfTBDzHF4Kw4PxBoGYjthIAUaSQ4SDu3AHJaJ2n3pxR3yPN0pKW1su0eGu5KL6LgsCpfcElYWEoAHgSaNjRV10FsDf%2FEx6mt5M1dSwwTRu28fv9kBeriFg2Ut%2ByxhKg%2BZD2tw3J%2BcXveSJLuM0taQXYiPaRJYOrObx1FNRnbojpUKLyas5edQObWW7MgYHy8s56YIEitNFos93EN%2Fj9mrZZyHhFXRADu60ib26KYKpqMbyOXFG%2BjfhWfv8gnaOVtEGibp6DxLz6gzrqUguT5yd3%2FSPfOzcYJyVkbCuJDVQ3SYUIiXiivisnGLOBV%2BX%2B8OKW8M%2FNZWy8ELHggveGjc4ArrlyXwXb%2BfEhLkwczd8dVlZEfWEG8QYgMTNRKEb6o5OhgAnK8zhGDxHAx6vv2BxFwLIAKNo9Mxc17KTmwxio1U3w5UVSf6U5CjSRuFz3wzpPRhrMOk0Pqw9dnPfe1mxZQbyu6Ir6TS9rc9q4unIzuE43jfNQ85%2BiKhzDGqGdKlXlacOMYNQKmMJvwosYGOqUBfoDBta2aqyleClqbhBbHde8O0MhHrjkEe82aA5%2B9uXfs2BXzYGwn86qpr4BOa%2BAyyWcdOTxKbijxe%2ByDJVgTw67DTlY9d%2FuttjqQa5fa9qTCI8wHIusjozjhDj5gGZEHnFUVY3jTXz4qv%2FMI4bbECeQkI33xCAa914ilx1GhhXAOp0%2BJFH3Nthaxp5mXrZX0GJxNy%2Fn3hCDNeq2vqFripesFNKKH&X-Amz-Signature=b9580b2e7137b32aa87712f6837812c646e59eb231d0fcfd86e1e59d159daaf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545MPFRY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2zMG36c5y87MSLj7M9MmRdiIZVbWoBX5UFQ4TRB2gVAIgAUjoGwoKfuCaKxU%2FEguSb71pZegABlTBENmn9RQbLtoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5xa4KAwMtpdwjIyrcA93spX4hr52r0IMIc9G%2Bw0FejTyhjb2Quar93ea1FHiSCyUQUbkkjN0Kkklv8xGLWcmBbO7MU5urA8PsDZu8OBNvRRk0PX776NiPtVP4yHfeiDbA0XMGZn%2FyHwk3iHuaNF1MvW%2BhXJesdWdA7MvDDbP3W6jMidJQrfW5h1XGasvATOhh7KNAyMMT0c2OfMMXyC%2FW4T0MRXCbKl4hghE1PzvLz2R3%2F5JwfUA2IbDcGtMSVpeTS4JOavPDdjNOQm8upanl1GUEVZWgOvgUMbqPXCams8E0R8RTKgf%2BlzvnnRV1dtAkqW8MkYhAnSTZao6RqsIod664Wk02UWYJ%2FvGrt6sAwPGVWkWEi667%2F82qBRq0VKZ1Q4WoisW%2FGsGnLkMGGHl7RgnFO6AxPCWbok112xOK31pWS20dPd7FdhzNyjgDKQrZXtM9ZYZ0PZrUjTUmjXMjHtie9AZRY%2B0r%2B7KKMs7XZ2LGoBGiJsR4XG7AWV8KmzhvuXGEDGdmVICzctE6yEtFm47Fe5l3xcMxwGLaoQCC6cwdRav2CsqCXsKI58wqU2ssWczQIA9ctWgE1O5HJt69qjX1zIWGyeaxQZzPNP3OasswczAenKfx%2Bmz8gvPws%2Fcki8fGD4kVMjQGMNDuosYGOqUB5yeNRQLQWk35Tmdz9mUZfPvVDvc7ZDvNjaxm3SeXzt3bQk0Fbt93doclw30x7gppifyiD5eLN4YKQ9Fw3sxVcB3ilScKXXgrtbOiOJCpYo5%2BDSTPGOyhLOo8pgvkSTtUH6r0ckvHsH%2BZxhCh19EPDyWgnTf%2F7iPgc%2FLUkMOOvedVHr5Q3YPJ1ApJf8KHLjmmAkAc2JBwNV%2FiZZ4iDQuS4kEtzrIb&X-Amz-Signature=6b65c88601240e3e171862e7096f46117a0fe04a3e54c952baf161beb899c6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZS4H43D%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCFSWkCrfCUM0xeCkG27LW97jYrYu%2FccngynzO0nkgwYgIgffqRQEpz5YE7WLTvfJFkiNZZfhUKHi9FV9Zomr4TZTYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdniuTprnLE6pg4%2BircA0CxWRmEdj9QLy8ESSVxMHJ1lKJiUQpfAkMAhdc2cBYmDKdUC%2FG%2BD0n173Oe8vR8youTAHS%2F33ZlJIkusQvLk%2F691j%2Bxinn2YCQPXaGeGfnz8uJVpuQqHP878KH1WgGfN3Ytg9hFYkYLURJ2iABbrbXLQa0V%2FSygdWXxffjgfWgH3JJEBPeuQKWCc7Pj0MssRe%2BOsFeRPzHTa2L%2F2Tq7ZKeEjwLeNkAXinYpj%2BVonYN2l9P52TAtXV4S%2FYoa%2Fe4%2BguuicLetALn%2BqNwrvkTh9x3aHrb5EN0hjIOwqQgPgJ0WSX%2Bfmn62Wka99qj5465VXEvmdP4bl4DPZ9m7V%2BAQ4LYGXXDxD4I%2Ffru2xH0pnv6WmyIWH9pXJrKuo7JFUkHViM%2FHl52PVu8QOThuXHGXbL8QB00bsEd6YngBtPQ94Klox0MLorNQMTnAslsqIGYpiudwnPFFvu95XvJE3TuxzbNWL7M5ubJgUroH%2Begg5NT9ieQFBJbQD%2FSQ2ttQdrdbLxJz4180imyzPwIH0vKwhEsgf4PB3AslQgXguwSLI%2F8KH0YkVE06rTyIRMTLVQUdnn%2B3kGRyIZZ%2FxwM4zSpwJPKLMalZeJU9e1xoYoZ08yuJUCHPw5xlkxJxwILBMIHvosYGOqUBA5IeOYL9UmJnaSVtuIJ9H7rsCSZqjuaxfmJo1ZHXs4ODzvyCaxoNbcbfocloMA8L6OzK5AJox0Ns6gkbk20udkyY7I6H9DFcQ7%2B4YsU96vBQnnMurwa0cIwFzyxtn0Sp9Zw7TTPbMcKCHy8eUh4SL2tOWJyxfsP90aDJdjiXCyN4vL7wv2gRKyYBWVzJ9Vdic3aKlOB62C9g0Iz7b%2BzigH9x2Nzq&X-Amz-Signature=1b02561cfc31a970857dd741540bdbeec0d10c36d13ce66a8d4398f0b9e6eb5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545MPFRY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2zMG36c5y87MSLj7M9MmRdiIZVbWoBX5UFQ4TRB2gVAIgAUjoGwoKfuCaKxU%2FEguSb71pZegABlTBENmn9RQbLtoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5xa4KAwMtpdwjIyrcA93spX4hr52r0IMIc9G%2Bw0FejTyhjb2Quar93ea1FHiSCyUQUbkkjN0Kkklv8xGLWcmBbO7MU5urA8PsDZu8OBNvRRk0PX776NiPtVP4yHfeiDbA0XMGZn%2FyHwk3iHuaNF1MvW%2BhXJesdWdA7MvDDbP3W6jMidJQrfW5h1XGasvATOhh7KNAyMMT0c2OfMMXyC%2FW4T0MRXCbKl4hghE1PzvLz2R3%2F5JwfUA2IbDcGtMSVpeTS4JOavPDdjNOQm8upanl1GUEVZWgOvgUMbqPXCams8E0R8RTKgf%2BlzvnnRV1dtAkqW8MkYhAnSTZao6RqsIod664Wk02UWYJ%2FvGrt6sAwPGVWkWEi667%2F82qBRq0VKZ1Q4WoisW%2FGsGnLkMGGHl7RgnFO6AxPCWbok112xOK31pWS20dPd7FdhzNyjgDKQrZXtM9ZYZ0PZrUjTUmjXMjHtie9AZRY%2B0r%2B7KKMs7XZ2LGoBGiJsR4XG7AWV8KmzhvuXGEDGdmVICzctE6yEtFm47Fe5l3xcMxwGLaoQCC6cwdRav2CsqCXsKI58wqU2ssWczQIA9ctWgE1O5HJt69qjX1zIWGyeaxQZzPNP3OasswczAenKfx%2Bmz8gvPws%2Fcki8fGD4kVMjQGMNDuosYGOqUB5yeNRQLQWk35Tmdz9mUZfPvVDvc7ZDvNjaxm3SeXzt3bQk0Fbt93doclw30x7gppifyiD5eLN4YKQ9Fw3sxVcB3ilScKXXgrtbOiOJCpYo5%2BDSTPGOyhLOo8pgvkSTtUH6r0ckvHsH%2BZxhCh19EPDyWgnTf%2F7iPgc%2FLUkMOOvedVHr5Q3YPJ1ApJf8KHLjmmAkAc2JBwNV%2FiZZ4iDQuS4kEtzrIb&X-Amz-Signature=070ad8d059d843511cc785c825aa9fd5b2b871bfe2bb99161d563dadd3c6e1b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TOVHHGQ%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCNblXW2ZJgzZDVCevMXGF2C56ip9OikGuN9%2F4LZCJW2AIgf4p4X2EchBNYbmMWrF01OkfViYmsmgEC9DQ4C1h9hMIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0BCtxyVfrIH06idCrcA%2BrQYNGN8Tj%2FkTGZPG74OS7xHY%2FydXqxv6qbRE7Zo1xGG9L%2BQalAzxWj9wTtCjNfdij4nB7%2BMSnLt1TypttK%2FPIj6JD5pd5BMAMexUWIwhdnRj2ne9nEtzkvJLkgtgDyimzNKIJpMjP6MQfKB3NmI48lE5ey3tMibjzo8r%2FHghzm5FoQOPaRJNJtA8%2BEmftvixAQynjVgI2F%2BWGHlkWfoeWltCKbuhsMR1vJCtI5%2F0x8BpFUBukzAixtAt0qk9ihqUdjuLGXAPf4UUAtsEfKG8xUz4gTUM39%2BsBDntk9fJfj28kszl8JEu3SL8AJtjwRcsaagR%2BknWRNkA4faCjJh7zanxzqoOtLihIq5%2BTRzkxnmNCjbgUz1NPhP0Bkt6GyyLmTd2q%2Bpu6MCmjH5UaLJR9kPAghK%2BnTLywS2QMaA2qx9mY5mGH4j8E2LLu0z3ysldN0JhGE4frc4eQt4l36UJwzwIfkU4eQuDwsnWYkm%2FBhxwL4sgZ%2FYtSPcbpqfnUsBpVHzV1wMrBbVsOP5rEkYPQVU2LoqosnKtN66Mn0l9KMvzgbOq1roYHf8xz5TP1iYt508U9FGXl42tO0kEC8FQpO6nWnnOelIusWgEqJvOCdhmlCj3UghSKTA2dPMJzvosYGOqUBOgyOy484i26GF5j5W5kfvyJMOoJCtxAzXJot3SDZftUoFWLHePHMzms%2FCtZ4NfIUA86Svw%2FKh6h1BFKCwcy3WXG2698RUKxaB7SBINAxMHbTvCf5ieOOrFnlT1ag9PFfqTfd%2BGt3h5HC4OEiWqQij%2Fy2XS4USgVLdV4YFxfUtIajjyA8hbmm3N4eIApU6dsQ%2FUF2WsUwfL158nsMxxC0LP49jxej&X-Amz-Signature=cb90d24d471e826a99b7753c90c8b98ecb88f771d514b4ed655e0cf9f4b2b5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2W6FNZL%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCpPOnoKNwXfoLeIl60RvOlHH8bbJcqAK7K2HafT9n8hwIgFAlWo%2F3qe%2BXtznezhTQU5ibyhZp84C4STYni8ljb4dwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FNBXn6cNH3LqhsJSrcA4A%2Bh7N5ctLzn%2BWEKlpZjj0k%2FbaDlAcWUlS22B1PmrWrpwh%2BbIgVlOGfXftJsx9CpkNUv7vmxvXpkdJQMR50NK3z%2BtEwC6waLpouO5XVp2cK4Q8EgKRgUNuutfMvhtzPgE69cwrPoWO0ptX9fOX6g05gl5xCkliqhsrNzCPWXswOjhCmsz%2FKZya2qGLPKnpNL0RtR9iDMjydqCnViO%2FiweEPoPR%2FKPRwdrj9SAwpnqLQIV0EHbasIRIb3kQ0VuDPb15yKWH8lk7Ly5kbHTEVtrS9HptJrWzw8UDc9F%2FD7W6fKo%2B6lW%2BXk9r07WCcBmQuPWU7O9gEuYyozYH6tm5f4yqBMM2VPAPWkE3xTN8%2BUJDicXayrao7kMxSRnCNTOB9yzZilUkKMIZkGhjT4%2Fa9RSvthB8DQd4V%2BbaoN8UdT5e7XYjTl8g3Hk9tCHd4TUw76JSr0ZWleA2bnegLMvkPjjdYPs%2F0zz%2BJ6wn3VverZtZDp9tlOPMkkSeIohHCzFHezv9jUYx520Uc78AwJhxWziqL69FLjnomvBrNXbJRGMepk%2BUYJyLs%2Bqw3h%2BI27sfZyH1yuOW2r7anz3Zx3aqbcWe7E%2BORvYZwgCmM2Np%2F2uA1NEwHR6ZwBJgQJ0qzMLjvosYGOqUBQZFxfVuG4TL5SfJmcagQ9zFk2aL3Y1RfX3Zpn54HZWeFwpeFF%2BStW7NylyVUw9qFxOczSZclgQ5Ct67WRuKtjyd7BeU%2FCfzEWmuN6NQWjozBH6cDZ90GZTQ9lwkD8B%2B5svmxcCREib9g%2F%2Bg8Da4atm%2FG9BF8op4xDcZx9E6xDFVDvaz2SB2e1h1fqA%2B2hSc%2BDOkzEcUg1y%2F2O1JFUlGqNGNhIwHi&X-Amz-Signature=0ba348b5b9a0a450a73ae80ede23bc04e6f7c2e2e025c1c8762c11a9177ef0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7RBP67G%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCX2vLk7PuRnkwUlE3o0CYxVpas3GPL9R%2Bwp1eBAYmDMwIhAI71Mi0RETEK1qRGUy5IBdE1GpsBf2eDQ6cSfVnK0sFpKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRPNvIB8Ti5a%2FuVY8q3AM%2BYjUAxEJmH4I1H0k7efm3j7goEmwjjN073XaeUevNJAtV4Au5%2Fggrf0%2BoapRtexcLWeQVvj7xhQGs7guYvidurc%2Fa9SyAkOkKOMzbuJH3dxSinXyvQGUql14X4FbYR%2BwU9zgbjhUdPtcrN9wbIn8SnBMnN7hAD84bLp0d7MCMuog4UeUqEcv3H%2B%2FyFrw%2FZlzhuq%2B6QJv%2FURTYMXj%2FWtrwWwAmwvAAOhFENrcmNafIMewJozMqkXGRAvoHLgj8MaY6yqrmxF5g7FVonmYipCI1Fh5sB19xOFNIplJbSt1N%2FvG1VeyMCk%2F8WSnl3qsoUk9zjBCZ00J%2BraJ%2BFsR1ORntoV83d2Gm0q60DvVkVBzMDrlhr7mCBc5576YHOivJU1TXN%2B5S8ipy84QNDmkx2zA5rPBFkpdCUyYD2sbB3FhC%2F7%2BWrJicIROCbVWEwzXI%2FgDheJlVMFMkLwzzvVUtzVVFeJq4UPDKkfBHifStIFAn0HdKEjGwBUOIl%2BcsQ3pHithMCgZWhUSxFd4WxmyaaSkjlGWFnNoq0gjkZpZNsAppTkvmGhXvVw6UaVD3MjPqQVg%2BfTkSE%2Ft34qyeNR329hQctZDejiFa5Hc4%2BCo4TGjYR8jamKjWanPZtC6uODCb76LGBjqkART5T4YbJMOGKYmY2CsheiDknWzvjXzJvbvd4X%2FbBdeXoQsiHORA2nvyeFizZk6byRWI%2B%2FFve00ZnxJM%2FK6lFnA5mLbLWYMY50sMvtJ95G3GZkblrERnxO81aM2fabGNeWvCj16CKKiCfVYuzjvequACrYWWzlMSnIqzcJczpdTr0eMaHWTGAjQfH5Glf04vyH7Gxb1ImFeJf%2BhNofK%2Fq4pXAAxz&X-Amz-Signature=2692d6653ba86c8ee691a4e734b8965c0f42d9f1a1f005b38ff8626699294ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545MPFRY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2zMG36c5y87MSLj7M9MmRdiIZVbWoBX5UFQ4TRB2gVAIgAUjoGwoKfuCaKxU%2FEguSb71pZegABlTBENmn9RQbLtoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5xa4KAwMtpdwjIyrcA93spX4hr52r0IMIc9G%2Bw0FejTyhjb2Quar93ea1FHiSCyUQUbkkjN0Kkklv8xGLWcmBbO7MU5urA8PsDZu8OBNvRRk0PX776NiPtVP4yHfeiDbA0XMGZn%2FyHwk3iHuaNF1MvW%2BhXJesdWdA7MvDDbP3W6jMidJQrfW5h1XGasvATOhh7KNAyMMT0c2OfMMXyC%2FW4T0MRXCbKl4hghE1PzvLz2R3%2F5JwfUA2IbDcGtMSVpeTS4JOavPDdjNOQm8upanl1GUEVZWgOvgUMbqPXCams8E0R8RTKgf%2BlzvnnRV1dtAkqW8MkYhAnSTZao6RqsIod664Wk02UWYJ%2FvGrt6sAwPGVWkWEi667%2F82qBRq0VKZ1Q4WoisW%2FGsGnLkMGGHl7RgnFO6AxPCWbok112xOK31pWS20dPd7FdhzNyjgDKQrZXtM9ZYZ0PZrUjTUmjXMjHtie9AZRY%2B0r%2B7KKMs7XZ2LGoBGiJsR4XG7AWV8KmzhvuXGEDGdmVICzctE6yEtFm47Fe5l3xcMxwGLaoQCC6cwdRav2CsqCXsKI58wqU2ssWczQIA9ctWgE1O5HJt69qjX1zIWGyeaxQZzPNP3OasswczAenKfx%2Bmz8gvPws%2Fcki8fGD4kVMjQGMNDuosYGOqUB5yeNRQLQWk35Tmdz9mUZfPvVDvc7ZDvNjaxm3SeXzt3bQk0Fbt93doclw30x7gppifyiD5eLN4YKQ9Fw3sxVcB3ilScKXXgrtbOiOJCpYo5%2BDSTPGOyhLOo8pgvkSTtUH6r0ckvHsH%2BZxhCh19EPDyWgnTf%2F7iPgc%2FLUkMOOvedVHr5Q3YPJ1ApJf8KHLjmmAkAc2JBwNV%2FiZZ4iDQuS4kEtzrIb&X-Amz-Signature=71bb46a314bf4cb707cf375204f2408fda6a9dc722b8a2c264b636dc9d6953c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545MPFRY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2zMG36c5y87MSLj7M9MmRdiIZVbWoBX5UFQ4TRB2gVAIgAUjoGwoKfuCaKxU%2FEguSb71pZegABlTBENmn9RQbLtoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5xa4KAwMtpdwjIyrcA93spX4hr52r0IMIc9G%2Bw0FejTyhjb2Quar93ea1FHiSCyUQUbkkjN0Kkklv8xGLWcmBbO7MU5urA8PsDZu8OBNvRRk0PX776NiPtVP4yHfeiDbA0XMGZn%2FyHwk3iHuaNF1MvW%2BhXJesdWdA7MvDDbP3W6jMidJQrfW5h1XGasvATOhh7KNAyMMT0c2OfMMXyC%2FW4T0MRXCbKl4hghE1PzvLz2R3%2F5JwfUA2IbDcGtMSVpeTS4JOavPDdjNOQm8upanl1GUEVZWgOvgUMbqPXCams8E0R8RTKgf%2BlzvnnRV1dtAkqW8MkYhAnSTZao6RqsIod664Wk02UWYJ%2FvGrt6sAwPGVWkWEi667%2F82qBRq0VKZ1Q4WoisW%2FGsGnLkMGGHl7RgnFO6AxPCWbok112xOK31pWS20dPd7FdhzNyjgDKQrZXtM9ZYZ0PZrUjTUmjXMjHtie9AZRY%2B0r%2B7KKMs7XZ2LGoBGiJsR4XG7AWV8KmzhvuXGEDGdmVICzctE6yEtFm47Fe5l3xcMxwGLaoQCC6cwdRav2CsqCXsKI58wqU2ssWczQIA9ctWgE1O5HJt69qjX1zIWGyeaxQZzPNP3OasswczAenKfx%2Bmz8gvPws%2Fcki8fGD4kVMjQGMNDuosYGOqUB5yeNRQLQWk35Tmdz9mUZfPvVDvc7ZDvNjaxm3SeXzt3bQk0Fbt93doclw30x7gppifyiD5eLN4YKQ9Fw3sxVcB3ilScKXXgrtbOiOJCpYo5%2BDSTPGOyhLOo8pgvkSTtUH6r0ckvHsH%2BZxhCh19EPDyWgnTf%2F7iPgc%2FLUkMOOvedVHr5Q3YPJ1ApJf8KHLjmmAkAc2JBwNV%2FiZZ4iDQuS4kEtzrIb&X-Amz-Signature=43089740ee5879973fd5fef5b94b1c78546833d530933802260b4bae7e741672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLSAVFR%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCwb2mpoE9HGtwGL0QauNbU10KRzpUELhxmbZTmNsCOHgIhAM2e%2BGtx%2BCBcNAkVD7udvkXKhao5AfU9gQLorM9zx%2B31KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfqHJKpnxmdTCVe2Eq3AMfqoQiEtVRyKxya21blS8NR9O3FmXXdUBq4L0Qqtbcj4aV1vu43%2FKP26T6pX7gi6G3q9xoFpuElZFGEC3U6dpKniULfRpRCvtLgdzAzr2nh4tHDkDfrxUc0WDBj%2FOvXKa3JGSfc7McsUdd5zpf0Te5JYgDCB7WNIkBhUNeKHEiVuk0Cd1QH5kCXuPFoh8oCgLsygwnNImD7NkeRg0MiHZK%2BnZB3EEJR1%2B33EDFNuKF6duvUB2McpA%2B1Eo3H2ktkZ09K7SU7KAk4mQfiUlv6Gh2m6pwbQCZvyE5O675gvGPFPE4B9z4kK4pc%2FFD3F1fafOc0Eww68T00Bh%2BsU2m%2FIi4fRAykQuCHXm5RYbG31aLkrMlKUufE%2FN5bjmkDYDta4CIas75B0UWwjnmpsxOLlA%2FWRVW0ELi5ZCmqHIAj9coHGewSAu2v9OQTXQbX5vkNWFRcqjJOFsKWSv7%2BYS%2Fm70auKAWRTah%2FWYSglGu2KhJMe5HxJ%2B%2F%2FMxXDbG4QNh%2B%2Bm8svTCwmWw9PxY1beWLq5B%2Bnq32iSQx28xVuQM2xz9seoGQk%2FE7pIbGFQgXuYv82Fa4x5DGz2ojHSat6QDgueO8w6md8Gc2JWuu%2BO1bmd42WEVmqf7y%2FuwB0NKOPTC876LGBjqkAYBpncmiYfcS3B0vhe7C6taFrtklvv2Ecxs7yii%2Bh%2Bp7iglha8IYfEU0PWBPUVBWzci1IMpoPpOavQfBJRglQEhLqL28uVTD7%2BmubLgr3IpoS91IM7kyOSN7%2FsrgRwRfIWqx6tTRBiMMUaYQJH9CQhT3tLLOpi%2BmJOreq42T9E5AgSIcozuTTni9yYAMMoBgeiOLAGZZvaktO2DvImjv%2F91oa5Gh&X-Amz-Signature=dfc9a4ee80d0a202bacde26d6ba5f361f0ba6b1b9248ffbe78bcf3f977902f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLSAVFR%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCwb2mpoE9HGtwGL0QauNbU10KRzpUELhxmbZTmNsCOHgIhAM2e%2BGtx%2BCBcNAkVD7udvkXKhao5AfU9gQLorM9zx%2B31KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfqHJKpnxmdTCVe2Eq3AMfqoQiEtVRyKxya21blS8NR9O3FmXXdUBq4L0Qqtbcj4aV1vu43%2FKP26T6pX7gi6G3q9xoFpuElZFGEC3U6dpKniULfRpRCvtLgdzAzr2nh4tHDkDfrxUc0WDBj%2FOvXKa3JGSfc7McsUdd5zpf0Te5JYgDCB7WNIkBhUNeKHEiVuk0Cd1QH5kCXuPFoh8oCgLsygwnNImD7NkeRg0MiHZK%2BnZB3EEJR1%2B33EDFNuKF6duvUB2McpA%2B1Eo3H2ktkZ09K7SU7KAk4mQfiUlv6Gh2m6pwbQCZvyE5O675gvGPFPE4B9z4kK4pc%2FFD3F1fafOc0Eww68T00Bh%2BsU2m%2FIi4fRAykQuCHXm5RYbG31aLkrMlKUufE%2FN5bjmkDYDta4CIas75B0UWwjnmpsxOLlA%2FWRVW0ELi5ZCmqHIAj9coHGewSAu2v9OQTXQbX5vkNWFRcqjJOFsKWSv7%2BYS%2Fm70auKAWRTah%2FWYSglGu2KhJMe5HxJ%2B%2F%2FMxXDbG4QNh%2B%2Bm8svTCwmWw9PxY1beWLq5B%2Bnq32iSQx28xVuQM2xz9seoGQk%2FE7pIbGFQgXuYv82Fa4x5DGz2ojHSat6QDgueO8w6md8Gc2JWuu%2BO1bmd42WEVmqf7y%2FuwB0NKOPTC876LGBjqkAYBpncmiYfcS3B0vhe7C6taFrtklvv2Ecxs7yii%2Bh%2Bp7iglha8IYfEU0PWBPUVBWzci1IMpoPpOavQfBJRglQEhLqL28uVTD7%2BmubLgr3IpoS91IM7kyOSN7%2FsrgRwRfIWqx6tTRBiMMUaYQJH9CQhT3tLLOpi%2BmJOreq42T9E5AgSIcozuTTni9yYAMMoBgeiOLAGZZvaktO2DvImjv%2F91oa5Gh&X-Amz-Signature=94bef79e8af871ce158592455acceca32bbabebcc85f69c014fe25591c87bb59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLSAVFR%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCwb2mpoE9HGtwGL0QauNbU10KRzpUELhxmbZTmNsCOHgIhAM2e%2BGtx%2BCBcNAkVD7udvkXKhao5AfU9gQLorM9zx%2B31KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfqHJKpnxmdTCVe2Eq3AMfqoQiEtVRyKxya21blS8NR9O3FmXXdUBq4L0Qqtbcj4aV1vu43%2FKP26T6pX7gi6G3q9xoFpuElZFGEC3U6dpKniULfRpRCvtLgdzAzr2nh4tHDkDfrxUc0WDBj%2FOvXKa3JGSfc7McsUdd5zpf0Te5JYgDCB7WNIkBhUNeKHEiVuk0Cd1QH5kCXuPFoh8oCgLsygwnNImD7NkeRg0MiHZK%2BnZB3EEJR1%2B33EDFNuKF6duvUB2McpA%2B1Eo3H2ktkZ09K7SU7KAk4mQfiUlv6Gh2m6pwbQCZvyE5O675gvGPFPE4B9z4kK4pc%2FFD3F1fafOc0Eww68T00Bh%2BsU2m%2FIi4fRAykQuCHXm5RYbG31aLkrMlKUufE%2FN5bjmkDYDta4CIas75B0UWwjnmpsxOLlA%2FWRVW0ELi5ZCmqHIAj9coHGewSAu2v9OQTXQbX5vkNWFRcqjJOFsKWSv7%2BYS%2Fm70auKAWRTah%2FWYSglGu2KhJMe5HxJ%2B%2F%2FMxXDbG4QNh%2B%2Bm8svTCwmWw9PxY1beWLq5B%2Bnq32iSQx28xVuQM2xz9seoGQk%2FE7pIbGFQgXuYv82Fa4x5DGz2ojHSat6QDgueO8w6md8Gc2JWuu%2BO1bmd42WEVmqf7y%2FuwB0NKOPTC876LGBjqkAYBpncmiYfcS3B0vhe7C6taFrtklvv2Ecxs7yii%2Bh%2Bp7iglha8IYfEU0PWBPUVBWzci1IMpoPpOavQfBJRglQEhLqL28uVTD7%2BmubLgr3IpoS91IM7kyOSN7%2FsrgRwRfIWqx6tTRBiMMUaYQJH9CQhT3tLLOpi%2BmJOreq42T9E5AgSIcozuTTni9yYAMMoBgeiOLAGZZvaktO2DvImjv%2F91oa5Gh&X-Amz-Signature=c0773ccfd1c42152d5f6671d9bfc87a22be63961ae7e804c7c847039ed141ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLSAVFR%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCwb2mpoE9HGtwGL0QauNbU10KRzpUELhxmbZTmNsCOHgIhAM2e%2BGtx%2BCBcNAkVD7udvkXKhao5AfU9gQLorM9zx%2B31KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfqHJKpnxmdTCVe2Eq3AMfqoQiEtVRyKxya21blS8NR9O3FmXXdUBq4L0Qqtbcj4aV1vu43%2FKP26T6pX7gi6G3q9xoFpuElZFGEC3U6dpKniULfRpRCvtLgdzAzr2nh4tHDkDfrxUc0WDBj%2FOvXKa3JGSfc7McsUdd5zpf0Te5JYgDCB7WNIkBhUNeKHEiVuk0Cd1QH5kCXuPFoh8oCgLsygwnNImD7NkeRg0MiHZK%2BnZB3EEJR1%2B33EDFNuKF6duvUB2McpA%2B1Eo3H2ktkZ09K7SU7KAk4mQfiUlv6Gh2m6pwbQCZvyE5O675gvGPFPE4B9z4kK4pc%2FFD3F1fafOc0Eww68T00Bh%2BsU2m%2FIi4fRAykQuCHXm5RYbG31aLkrMlKUufE%2FN5bjmkDYDta4CIas75B0UWwjnmpsxOLlA%2FWRVW0ELi5ZCmqHIAj9coHGewSAu2v9OQTXQbX5vkNWFRcqjJOFsKWSv7%2BYS%2Fm70auKAWRTah%2FWYSglGu2KhJMe5HxJ%2B%2F%2FMxXDbG4QNh%2B%2Bm8svTCwmWw9PxY1beWLq5B%2Bnq32iSQx28xVuQM2xz9seoGQk%2FE7pIbGFQgXuYv82Fa4x5DGz2ojHSat6QDgueO8w6md8Gc2JWuu%2BO1bmd42WEVmqf7y%2FuwB0NKOPTC876LGBjqkAYBpncmiYfcS3B0vhe7C6taFrtklvv2Ecxs7yii%2Bh%2Bp7iglha8IYfEU0PWBPUVBWzci1IMpoPpOavQfBJRglQEhLqL28uVTD7%2BmubLgr3IpoS91IM7kyOSN7%2FsrgRwRfIWqx6tTRBiMMUaYQJH9CQhT3tLLOpi%2BmJOreq42T9E5AgSIcozuTTni9yYAMMoBgeiOLAGZZvaktO2DvImjv%2F91oa5Gh&X-Amz-Signature=8079f2a4d41db00470525cd94c4f65e2e7c46dc5eabc587495bc0c9b6dcc9e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4SJQRD%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIGvEc6XQIICv72tgUR0Mcyr8qS4w8B4ab%2BTD9ZNUotYdAiBIYW7ZzlcUs4lKP8qLbiWtSVrbZUwartGwDOzgIbhTQCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMckQz%2Bc8gehTA5em%2FKtwDNuDDzHJYq94A3c5zBb%2FiijIMCOdPHXZ3ISzbA3AMuzXMoyZRqlZTiaTIk3ahKK2kiUQ5mfr1vLGvz25urPQ6Gdm6bpryAJvohXsvEQmA%2BRtlSw5IoDgXEpwqoUSwMOxlvnKyAEQudIRerISVEbUfVpvDJykTkoEvRQjrHczN3sxPZPFVbp%2FK4voBMuN3r4lX0OCyfJp5pUH5YjdWHoc9qcObFjGgLEB%2Fcs3zibo3w8MVqQUFvKLMQGRROLy4hGSTB9DKliHDge%2FSGkfoR0Rj1nwIWHSPaf%2BpLgdEsOeGphyMP9s0b5Al0EES6%2BRpUM5BwkAa6F7Xv3CjnY74oJ97bVuqHelz%2BgpPEtHBSHLTNB%2FYf6zib9wR3YGHkVTCWNJ9WfDow6RAeACcxeaTbDWWzjOnDEIYhN%2F%2Ff0NIauAInmQ7ymo0fJdkzG288GELFEgvD4ksm0PZMpIbU%2BMl8D%2F%2BzqrzfP07P%2BGR36TVZI8oFsjHfbZDmVJgDcWUPoHHA7JNXeXYlAa%2BEQGOh3Wl57GwjY2jOQkC6vyGna%2BFev0V4czt8lF9bqNhztIoma9o%2FecfMEz35x2ndiXO7g7gjpZ6yykete5veyt3YLzPSlIO8%2BcvZrTCAiK6TWlimaow4%2B%2BixgY6pgGzZMCEiAm6KLCgY9vPKSE5qFOd5EgbYNbdQ4Y7ebo98UZhsmMGTFH1d1VdzwCiwUcyz2C1CS3BKSSuK07s3Y6dZt%2FL5V6KfhpJ%2FlZuXEs20e%2FmM6vL4eiDBbhWnqhDHJsRKTiFEh%2B8oAaWTbyQXjSjgxrl%2B9aFph0PE2AoZgxJuArErnuWRK1Y0k%2F6jM96gDPvX13W%2BXoUkcl0HKqvKgBp5ee88T55&X-Amz-Signature=465b3cdd4fc7359c7a079f83bf2593ae80a888a82134351a5a0445af1c2fbe28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLSAVFR%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCwb2mpoE9HGtwGL0QauNbU10KRzpUELhxmbZTmNsCOHgIhAM2e%2BGtx%2BCBcNAkVD7udvkXKhao5AfU9gQLorM9zx%2B31KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfqHJKpnxmdTCVe2Eq3AMfqoQiEtVRyKxya21blS8NR9O3FmXXdUBq4L0Qqtbcj4aV1vu43%2FKP26T6pX7gi6G3q9xoFpuElZFGEC3U6dpKniULfRpRCvtLgdzAzr2nh4tHDkDfrxUc0WDBj%2FOvXKa3JGSfc7McsUdd5zpf0Te5JYgDCB7WNIkBhUNeKHEiVuk0Cd1QH5kCXuPFoh8oCgLsygwnNImD7NkeRg0MiHZK%2BnZB3EEJR1%2B33EDFNuKF6duvUB2McpA%2B1Eo3H2ktkZ09K7SU7KAk4mQfiUlv6Gh2m6pwbQCZvyE5O675gvGPFPE4B9z4kK4pc%2FFD3F1fafOc0Eww68T00Bh%2BsU2m%2FIi4fRAykQuCHXm5RYbG31aLkrMlKUufE%2FN5bjmkDYDta4CIas75B0UWwjnmpsxOLlA%2FWRVW0ELi5ZCmqHIAj9coHGewSAu2v9OQTXQbX5vkNWFRcqjJOFsKWSv7%2BYS%2Fm70auKAWRTah%2FWYSglGu2KhJMe5HxJ%2B%2F%2FMxXDbG4QNh%2B%2Bm8svTCwmWw9PxY1beWLq5B%2Bnq32iSQx28xVuQM2xz9seoGQk%2FE7pIbGFQgXuYv82Fa4x5DGz2ojHSat6QDgueO8w6md8Gc2JWuu%2BO1bmd42WEVmqf7y%2FuwB0NKOPTC876LGBjqkAYBpncmiYfcS3B0vhe7C6taFrtklvv2Ecxs7yii%2Bh%2Bp7iglha8IYfEU0PWBPUVBWzci1IMpoPpOavQfBJRglQEhLqL28uVTD7%2BmubLgr3IpoS91IM7kyOSN7%2FsrgRwRfIWqx6tTRBiMMUaYQJH9CQhT3tLLOpi%2BmJOreq42T9E5AgSIcozuTTni9yYAMMoBgeiOLAGZZvaktO2DvImjv%2F91oa5Gh&X-Amz-Signature=254a6502ac12d1d7592624c01871ea87a5bd31a9dd5172196a5427d211182b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLSAVFR%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCwb2mpoE9HGtwGL0QauNbU10KRzpUELhxmbZTmNsCOHgIhAM2e%2BGtx%2BCBcNAkVD7udvkXKhao5AfU9gQLorM9zx%2B31KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfqHJKpnxmdTCVe2Eq3AMfqoQiEtVRyKxya21blS8NR9O3FmXXdUBq4L0Qqtbcj4aV1vu43%2FKP26T6pX7gi6G3q9xoFpuElZFGEC3U6dpKniULfRpRCvtLgdzAzr2nh4tHDkDfrxUc0WDBj%2FOvXKa3JGSfc7McsUdd5zpf0Te5JYgDCB7WNIkBhUNeKHEiVuk0Cd1QH5kCXuPFoh8oCgLsygwnNImD7NkeRg0MiHZK%2BnZB3EEJR1%2B33EDFNuKF6duvUB2McpA%2B1Eo3H2ktkZ09K7SU7KAk4mQfiUlv6Gh2m6pwbQCZvyE5O675gvGPFPE4B9z4kK4pc%2FFD3F1fafOc0Eww68T00Bh%2BsU2m%2FIi4fRAykQuCHXm5RYbG31aLkrMlKUufE%2FN5bjmkDYDta4CIas75B0UWwjnmpsxOLlA%2FWRVW0ELi5ZCmqHIAj9coHGewSAu2v9OQTXQbX5vkNWFRcqjJOFsKWSv7%2BYS%2Fm70auKAWRTah%2FWYSglGu2KhJMe5HxJ%2B%2F%2FMxXDbG4QNh%2B%2Bm8svTCwmWw9PxY1beWLq5B%2Bnq32iSQx28xVuQM2xz9seoGQk%2FE7pIbGFQgXuYv82Fa4x5DGz2ojHSat6QDgueO8w6md8Gc2JWuu%2BO1bmd42WEVmqf7y%2FuwB0NKOPTC876LGBjqkAYBpncmiYfcS3B0vhe7C6taFrtklvv2Ecxs7yii%2Bh%2Bp7iglha8IYfEU0PWBPUVBWzci1IMpoPpOavQfBJRglQEhLqL28uVTD7%2BmubLgr3IpoS91IM7kyOSN7%2FsrgRwRfIWqx6tTRBiMMUaYQJH9CQhT3tLLOpi%2BmJOreq42T9E5AgSIcozuTTni9yYAMMoBgeiOLAGZZvaktO2DvImjv%2F91oa5Gh&X-Amz-Signature=a2422c664c2b624f831e4e4e605439ef7677b072f67c39e83a5462d37c6af2d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLSAVFR%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCwb2mpoE9HGtwGL0QauNbU10KRzpUELhxmbZTmNsCOHgIhAM2e%2BGtx%2BCBcNAkVD7udvkXKhao5AfU9gQLorM9zx%2B31KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfqHJKpnxmdTCVe2Eq3AMfqoQiEtVRyKxya21blS8NR9O3FmXXdUBq4L0Qqtbcj4aV1vu43%2FKP26T6pX7gi6G3q9xoFpuElZFGEC3U6dpKniULfRpRCvtLgdzAzr2nh4tHDkDfrxUc0WDBj%2FOvXKa3JGSfc7McsUdd5zpf0Te5JYgDCB7WNIkBhUNeKHEiVuk0Cd1QH5kCXuPFoh8oCgLsygwnNImD7NkeRg0MiHZK%2BnZB3EEJR1%2B33EDFNuKF6duvUB2McpA%2B1Eo3H2ktkZ09K7SU7KAk4mQfiUlv6Gh2m6pwbQCZvyE5O675gvGPFPE4B9z4kK4pc%2FFD3F1fafOc0Eww68T00Bh%2BsU2m%2FIi4fRAykQuCHXm5RYbG31aLkrMlKUufE%2FN5bjmkDYDta4CIas75B0UWwjnmpsxOLlA%2FWRVW0ELi5ZCmqHIAj9coHGewSAu2v9OQTXQbX5vkNWFRcqjJOFsKWSv7%2BYS%2Fm70auKAWRTah%2FWYSglGu2KhJMe5HxJ%2B%2F%2FMxXDbG4QNh%2B%2Bm8svTCwmWw9PxY1beWLq5B%2Bnq32iSQx28xVuQM2xz9seoGQk%2FE7pIbGFQgXuYv82Fa4x5DGz2ojHSat6QDgueO8w6md8Gc2JWuu%2BO1bmd42WEVmqf7y%2FuwB0NKOPTC876LGBjqkAYBpncmiYfcS3B0vhe7C6taFrtklvv2Ecxs7yii%2Bh%2Bp7iglha8IYfEU0PWBPUVBWzci1IMpoPpOavQfBJRglQEhLqL28uVTD7%2BmubLgr3IpoS91IM7kyOSN7%2FsrgRwRfIWqx6tTRBiMMUaYQJH9CQhT3tLLOpi%2BmJOreq42T9E5AgSIcozuTTni9yYAMMoBgeiOLAGZZvaktO2DvImjv%2F91oa5Gh&X-Amz-Signature=402c0d88947498ad7616ec6cad54c3e1a7fb1c934581123d7d10aa1947001278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLSAVFR%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCwb2mpoE9HGtwGL0QauNbU10KRzpUELhxmbZTmNsCOHgIhAM2e%2BGtx%2BCBcNAkVD7udvkXKhao5AfU9gQLorM9zx%2B31KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfqHJKpnxmdTCVe2Eq3AMfqoQiEtVRyKxya21blS8NR9O3FmXXdUBq4L0Qqtbcj4aV1vu43%2FKP26T6pX7gi6G3q9xoFpuElZFGEC3U6dpKniULfRpRCvtLgdzAzr2nh4tHDkDfrxUc0WDBj%2FOvXKa3JGSfc7McsUdd5zpf0Te5JYgDCB7WNIkBhUNeKHEiVuk0Cd1QH5kCXuPFoh8oCgLsygwnNImD7NkeRg0MiHZK%2BnZB3EEJR1%2B33EDFNuKF6duvUB2McpA%2B1Eo3H2ktkZ09K7SU7KAk4mQfiUlv6Gh2m6pwbQCZvyE5O675gvGPFPE4B9z4kK4pc%2FFD3F1fafOc0Eww68T00Bh%2BsU2m%2FIi4fRAykQuCHXm5RYbG31aLkrMlKUufE%2FN5bjmkDYDta4CIas75B0UWwjnmpsxOLlA%2FWRVW0ELi5ZCmqHIAj9coHGewSAu2v9OQTXQbX5vkNWFRcqjJOFsKWSv7%2BYS%2Fm70auKAWRTah%2FWYSglGu2KhJMe5HxJ%2B%2F%2FMxXDbG4QNh%2B%2Bm8svTCwmWw9PxY1beWLq5B%2Bnq32iSQx28xVuQM2xz9seoGQk%2FE7pIbGFQgXuYv82Fa4x5DGz2ojHSat6QDgueO8w6md8Gc2JWuu%2BO1bmd42WEVmqf7y%2FuwB0NKOPTC876LGBjqkAYBpncmiYfcS3B0vhe7C6taFrtklvv2Ecxs7yii%2Bh%2Bp7iglha8IYfEU0PWBPUVBWzci1IMpoPpOavQfBJRglQEhLqL28uVTD7%2BmubLgr3IpoS91IM7kyOSN7%2FsrgRwRfIWqx6tTRBiMMUaYQJH9CQhT3tLLOpi%2BmJOreq42T9E5AgSIcozuTTni9yYAMMoBgeiOLAGZZvaktO2DvImjv%2F91oa5Gh&X-Amz-Signature=33ebc84e4a610aa8838911521e2be00c06b4dcbc843c1bda04c4bd34d485dccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLSAVFR%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCwb2mpoE9HGtwGL0QauNbU10KRzpUELhxmbZTmNsCOHgIhAM2e%2BGtx%2BCBcNAkVD7udvkXKhao5AfU9gQLorM9zx%2B31KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfqHJKpnxmdTCVe2Eq3AMfqoQiEtVRyKxya21blS8NR9O3FmXXdUBq4L0Qqtbcj4aV1vu43%2FKP26T6pX7gi6G3q9xoFpuElZFGEC3U6dpKniULfRpRCvtLgdzAzr2nh4tHDkDfrxUc0WDBj%2FOvXKa3JGSfc7McsUdd5zpf0Te5JYgDCB7WNIkBhUNeKHEiVuk0Cd1QH5kCXuPFoh8oCgLsygwnNImD7NkeRg0MiHZK%2BnZB3EEJR1%2B33EDFNuKF6duvUB2McpA%2B1Eo3H2ktkZ09K7SU7KAk4mQfiUlv6Gh2m6pwbQCZvyE5O675gvGPFPE4B9z4kK4pc%2FFD3F1fafOc0Eww68T00Bh%2BsU2m%2FIi4fRAykQuCHXm5RYbG31aLkrMlKUufE%2FN5bjmkDYDta4CIas75B0UWwjnmpsxOLlA%2FWRVW0ELi5ZCmqHIAj9coHGewSAu2v9OQTXQbX5vkNWFRcqjJOFsKWSv7%2BYS%2Fm70auKAWRTah%2FWYSglGu2KhJMe5HxJ%2B%2F%2FMxXDbG4QNh%2B%2Bm8svTCwmWw9PxY1beWLq5B%2Bnq32iSQx28xVuQM2xz9seoGQk%2FE7pIbGFQgXuYv82Fa4x5DGz2ojHSat6QDgueO8w6md8Gc2JWuu%2BO1bmd42WEVmqf7y%2FuwB0NKOPTC876LGBjqkAYBpncmiYfcS3B0vhe7C6taFrtklvv2Ecxs7yii%2Bh%2Bp7iglha8IYfEU0PWBPUVBWzci1IMpoPpOavQfBJRglQEhLqL28uVTD7%2BmubLgr3IpoS91IM7kyOSN7%2FsrgRwRfIWqx6tTRBiMMUaYQJH9CQhT3tLLOpi%2BmJOreq42T9E5AgSIcozuTTni9yYAMMoBgeiOLAGZZvaktO2DvImjv%2F91oa5Gh&X-Amz-Signature=a293949a9072fe5e89d4fb9577464ed3f16c96c9455711746e38ed51afe37f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLSAVFR%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCwb2mpoE9HGtwGL0QauNbU10KRzpUELhxmbZTmNsCOHgIhAM2e%2BGtx%2BCBcNAkVD7udvkXKhao5AfU9gQLorM9zx%2B31KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfqHJKpnxmdTCVe2Eq3AMfqoQiEtVRyKxya21blS8NR9O3FmXXdUBq4L0Qqtbcj4aV1vu43%2FKP26T6pX7gi6G3q9xoFpuElZFGEC3U6dpKniULfRpRCvtLgdzAzr2nh4tHDkDfrxUc0WDBj%2FOvXKa3JGSfc7McsUdd5zpf0Te5JYgDCB7WNIkBhUNeKHEiVuk0Cd1QH5kCXuPFoh8oCgLsygwnNImD7NkeRg0MiHZK%2BnZB3EEJR1%2B33EDFNuKF6duvUB2McpA%2B1Eo3H2ktkZ09K7SU7KAk4mQfiUlv6Gh2m6pwbQCZvyE5O675gvGPFPE4B9z4kK4pc%2FFD3F1fafOc0Eww68T00Bh%2BsU2m%2FIi4fRAykQuCHXm5RYbG31aLkrMlKUufE%2FN5bjmkDYDta4CIas75B0UWwjnmpsxOLlA%2FWRVW0ELi5ZCmqHIAj9coHGewSAu2v9OQTXQbX5vkNWFRcqjJOFsKWSv7%2BYS%2Fm70auKAWRTah%2FWYSglGu2KhJMe5HxJ%2B%2F%2FMxXDbG4QNh%2B%2Bm8svTCwmWw9PxY1beWLq5B%2Bnq32iSQx28xVuQM2xz9seoGQk%2FE7pIbGFQgXuYv82Fa4x5DGz2ojHSat6QDgueO8w6md8Gc2JWuu%2BO1bmd42WEVmqf7y%2FuwB0NKOPTC876LGBjqkAYBpncmiYfcS3B0vhe7C6taFrtklvv2Ecxs7yii%2Bh%2Bp7iglha8IYfEU0PWBPUVBWzci1IMpoPpOavQfBJRglQEhLqL28uVTD7%2BmubLgr3IpoS91IM7kyOSN7%2FsrgRwRfIWqx6tTRBiMMUaYQJH9CQhT3tLLOpi%2BmJOreq42T9E5AgSIcozuTTni9yYAMMoBgeiOLAGZZvaktO2DvImjv%2F91oa5Gh&X-Amz-Signature=7cd0a90611bd48ea567aaf29a3faf4519babdfe1c28fd7b67419676927672479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


