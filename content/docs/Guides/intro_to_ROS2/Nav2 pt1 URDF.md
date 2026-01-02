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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3MZEFU%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA7ywudLNbguE%2BjdobRqqdXQIjhZsPSQR4WszRBjfdedAiEAjly7bjhPvcot0T%2Fzm%2FeNAR5%2B26ZBslIfE01VjMrMv3sqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtqQaduNczHnQ2ALSrcAy2HPEHEHyHl1A9RfadoHkb6O1%2F%2Brtojd9vJoTQlBJDPV34FuGTqy5Vq%2BfSiwcshQ2vJ69knTWjZ9T47oyUM91zFMXeGHMKRNKCtjZ1RqzgUdujoHLaZI2qwzPhFFQImhRr81e5SDFuAOJGVtKhmHt1sSsRxMbFDX8EvSjFM21aWVhu%2FZC%2FnrcKIvBVomVeUjimvM%2FIwAoiey2VvxqUm0oGiLszcFZQb0S9hFBuLU0HqDqXzK61ldgWpPlyoJHt190JeWmUSTtzQNLB8u6obhDJXKC%2BKCE49DW41rsBwreEJn%2FWOKh2OsascGQtV1MAsjPEwi4htWSihmhZIL%2BPq5yrmNmvA%2ByFL3SM9rsC4jIcUzmAJm0eCqg1SBBDChpA7KHzoU%2F%2FQbBRFfWVKNLaKR22Iz6YEVJS2WThKYB7kB0HKBueCQYJvMde9rU%2BimUQVWRrWZ%2F0sQtCF0lqkSjXEQdkMudQyCYP%2BG1GehkECKWT5ymr8fPJqUqqeQrH1iohKQVMeTQbWiB9p5vsOMgXXQUSwK9jN9xlJvJc7O%2FapHyicxzT5z2UDsBUtYumqUD1iLhh4wEzW1sS6dhWibA5%2BjiLSPW5kqqM0RsVdDWiIRqe7GI2YQAlD9hlfFEtPMMyc3MoGOqUB4tmsk5tXB1lBtGeOKbYFsTCxcKBrha8LECUYR9E4t8djPnpfrrHhdLXmxGt67UUJoej4FVZoy1OTVa4fI%2BITUJBQ4ervfjBUunlUgh6bj3104NkdPs8GoVnfUwHkifu3U%2FPR32Pn8EvpqpOhNUAZf2HbveJOyt8JM7saOF5scpSoG79YUaDWs3snOP%2Ba5moY02byof7zpomstGAPbg1K1Q%2F5NgrE&X-Amz-Signature=cb40ff397461b023d8357600c3be565e365383485ae0b96b751dcfff5fa80142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3MZEFU%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA7ywudLNbguE%2BjdobRqqdXQIjhZsPSQR4WszRBjfdedAiEAjly7bjhPvcot0T%2Fzm%2FeNAR5%2B26ZBslIfE01VjMrMv3sqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtqQaduNczHnQ2ALSrcAy2HPEHEHyHl1A9RfadoHkb6O1%2F%2Brtojd9vJoTQlBJDPV34FuGTqy5Vq%2BfSiwcshQ2vJ69knTWjZ9T47oyUM91zFMXeGHMKRNKCtjZ1RqzgUdujoHLaZI2qwzPhFFQImhRr81e5SDFuAOJGVtKhmHt1sSsRxMbFDX8EvSjFM21aWVhu%2FZC%2FnrcKIvBVomVeUjimvM%2FIwAoiey2VvxqUm0oGiLszcFZQb0S9hFBuLU0HqDqXzK61ldgWpPlyoJHt190JeWmUSTtzQNLB8u6obhDJXKC%2BKCE49DW41rsBwreEJn%2FWOKh2OsascGQtV1MAsjPEwi4htWSihmhZIL%2BPq5yrmNmvA%2ByFL3SM9rsC4jIcUzmAJm0eCqg1SBBDChpA7KHzoU%2F%2FQbBRFfWVKNLaKR22Iz6YEVJS2WThKYB7kB0HKBueCQYJvMde9rU%2BimUQVWRrWZ%2F0sQtCF0lqkSjXEQdkMudQyCYP%2BG1GehkECKWT5ymr8fPJqUqqeQrH1iohKQVMeTQbWiB9p5vsOMgXXQUSwK9jN9xlJvJc7O%2FapHyicxzT5z2UDsBUtYumqUD1iLhh4wEzW1sS6dhWibA5%2BjiLSPW5kqqM0RsVdDWiIRqe7GI2YQAlD9hlfFEtPMMyc3MoGOqUB4tmsk5tXB1lBtGeOKbYFsTCxcKBrha8LECUYR9E4t8djPnpfrrHhdLXmxGt67UUJoej4FVZoy1OTVa4fI%2BITUJBQ4ervfjBUunlUgh6bj3104NkdPs8GoVnfUwHkifu3U%2FPR32Pn8EvpqpOhNUAZf2HbveJOyt8JM7saOF5scpSoG79YUaDWs3snOP%2Ba5moY02byof7zpomstGAPbg1K1Q%2F5NgrE&X-Amz-Signature=1a74d99df570d2cc5e3f84e0d79b083506285cc6e1cf391b6c15f791721bfa8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3MZEFU%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA7ywudLNbguE%2BjdobRqqdXQIjhZsPSQR4WszRBjfdedAiEAjly7bjhPvcot0T%2Fzm%2FeNAR5%2B26ZBslIfE01VjMrMv3sqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtqQaduNczHnQ2ALSrcAy2HPEHEHyHl1A9RfadoHkb6O1%2F%2Brtojd9vJoTQlBJDPV34FuGTqy5Vq%2BfSiwcshQ2vJ69knTWjZ9T47oyUM91zFMXeGHMKRNKCtjZ1RqzgUdujoHLaZI2qwzPhFFQImhRr81e5SDFuAOJGVtKhmHt1sSsRxMbFDX8EvSjFM21aWVhu%2FZC%2FnrcKIvBVomVeUjimvM%2FIwAoiey2VvxqUm0oGiLszcFZQb0S9hFBuLU0HqDqXzK61ldgWpPlyoJHt190JeWmUSTtzQNLB8u6obhDJXKC%2BKCE49DW41rsBwreEJn%2FWOKh2OsascGQtV1MAsjPEwi4htWSihmhZIL%2BPq5yrmNmvA%2ByFL3SM9rsC4jIcUzmAJm0eCqg1SBBDChpA7KHzoU%2F%2FQbBRFfWVKNLaKR22Iz6YEVJS2WThKYB7kB0HKBueCQYJvMde9rU%2BimUQVWRrWZ%2F0sQtCF0lqkSjXEQdkMudQyCYP%2BG1GehkECKWT5ymr8fPJqUqqeQrH1iohKQVMeTQbWiB9p5vsOMgXXQUSwK9jN9xlJvJc7O%2FapHyicxzT5z2UDsBUtYumqUD1iLhh4wEzW1sS6dhWibA5%2BjiLSPW5kqqM0RsVdDWiIRqe7GI2YQAlD9hlfFEtPMMyc3MoGOqUB4tmsk5tXB1lBtGeOKbYFsTCxcKBrha8LECUYR9E4t8djPnpfrrHhdLXmxGt67UUJoej4FVZoy1OTVa4fI%2BITUJBQ4ervfjBUunlUgh6bj3104NkdPs8GoVnfUwHkifu3U%2FPR32Pn8EvpqpOhNUAZf2HbveJOyt8JM7saOF5scpSoG79YUaDWs3snOP%2Ba5moY02byof7zpomstGAPbg1K1Q%2F5NgrE&X-Amz-Signature=dc13e83638f88ae0fcf3fa117cc8461124731d0a2659c6d808225941025cba98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3MZEFU%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA7ywudLNbguE%2BjdobRqqdXQIjhZsPSQR4WszRBjfdedAiEAjly7bjhPvcot0T%2Fzm%2FeNAR5%2B26ZBslIfE01VjMrMv3sqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtqQaduNczHnQ2ALSrcAy2HPEHEHyHl1A9RfadoHkb6O1%2F%2Brtojd9vJoTQlBJDPV34FuGTqy5Vq%2BfSiwcshQ2vJ69knTWjZ9T47oyUM91zFMXeGHMKRNKCtjZ1RqzgUdujoHLaZI2qwzPhFFQImhRr81e5SDFuAOJGVtKhmHt1sSsRxMbFDX8EvSjFM21aWVhu%2FZC%2FnrcKIvBVomVeUjimvM%2FIwAoiey2VvxqUm0oGiLszcFZQb0S9hFBuLU0HqDqXzK61ldgWpPlyoJHt190JeWmUSTtzQNLB8u6obhDJXKC%2BKCE49DW41rsBwreEJn%2FWOKh2OsascGQtV1MAsjPEwi4htWSihmhZIL%2BPq5yrmNmvA%2ByFL3SM9rsC4jIcUzmAJm0eCqg1SBBDChpA7KHzoU%2F%2FQbBRFfWVKNLaKR22Iz6YEVJS2WThKYB7kB0HKBueCQYJvMde9rU%2BimUQVWRrWZ%2F0sQtCF0lqkSjXEQdkMudQyCYP%2BG1GehkECKWT5ymr8fPJqUqqeQrH1iohKQVMeTQbWiB9p5vsOMgXXQUSwK9jN9xlJvJc7O%2FapHyicxzT5z2UDsBUtYumqUD1iLhh4wEzW1sS6dhWibA5%2BjiLSPW5kqqM0RsVdDWiIRqe7GI2YQAlD9hlfFEtPMMyc3MoGOqUB4tmsk5tXB1lBtGeOKbYFsTCxcKBrha8LECUYR9E4t8djPnpfrrHhdLXmxGt67UUJoej4FVZoy1OTVa4fI%2BITUJBQ4ervfjBUunlUgh6bj3104NkdPs8GoVnfUwHkifu3U%2FPR32Pn8EvpqpOhNUAZf2HbveJOyt8JM7saOF5scpSoG79YUaDWs3snOP%2Ba5moY02byof7zpomstGAPbg1K1Q%2F5NgrE&X-Amz-Signature=8a1e5797b179b679452a9d2c28eab28cf53110f8a4af687db17be1f89bccf80b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3MZEFU%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA7ywudLNbguE%2BjdobRqqdXQIjhZsPSQR4WszRBjfdedAiEAjly7bjhPvcot0T%2Fzm%2FeNAR5%2B26ZBslIfE01VjMrMv3sqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtqQaduNczHnQ2ALSrcAy2HPEHEHyHl1A9RfadoHkb6O1%2F%2Brtojd9vJoTQlBJDPV34FuGTqy5Vq%2BfSiwcshQ2vJ69knTWjZ9T47oyUM91zFMXeGHMKRNKCtjZ1RqzgUdujoHLaZI2qwzPhFFQImhRr81e5SDFuAOJGVtKhmHt1sSsRxMbFDX8EvSjFM21aWVhu%2FZC%2FnrcKIvBVomVeUjimvM%2FIwAoiey2VvxqUm0oGiLszcFZQb0S9hFBuLU0HqDqXzK61ldgWpPlyoJHt190JeWmUSTtzQNLB8u6obhDJXKC%2BKCE49DW41rsBwreEJn%2FWOKh2OsascGQtV1MAsjPEwi4htWSihmhZIL%2BPq5yrmNmvA%2ByFL3SM9rsC4jIcUzmAJm0eCqg1SBBDChpA7KHzoU%2F%2FQbBRFfWVKNLaKR22Iz6YEVJS2WThKYB7kB0HKBueCQYJvMde9rU%2BimUQVWRrWZ%2F0sQtCF0lqkSjXEQdkMudQyCYP%2BG1GehkECKWT5ymr8fPJqUqqeQrH1iohKQVMeTQbWiB9p5vsOMgXXQUSwK9jN9xlJvJc7O%2FapHyicxzT5z2UDsBUtYumqUD1iLhh4wEzW1sS6dhWibA5%2BjiLSPW5kqqM0RsVdDWiIRqe7GI2YQAlD9hlfFEtPMMyc3MoGOqUB4tmsk5tXB1lBtGeOKbYFsTCxcKBrha8LECUYR9E4t8djPnpfrrHhdLXmxGt67UUJoej4FVZoy1OTVa4fI%2BITUJBQ4ervfjBUunlUgh6bj3104NkdPs8GoVnfUwHkifu3U%2FPR32Pn8EvpqpOhNUAZf2HbveJOyt8JM7saOF5scpSoG79YUaDWs3snOP%2Ba5moY02byof7zpomstGAPbg1K1Q%2F5NgrE&X-Amz-Signature=9c92d3206a4f1d26bfd536a9ae8185346b9c0a199699b95f16f32d38557dff58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3MZEFU%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA7ywudLNbguE%2BjdobRqqdXQIjhZsPSQR4WszRBjfdedAiEAjly7bjhPvcot0T%2Fzm%2FeNAR5%2B26ZBslIfE01VjMrMv3sqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtqQaduNczHnQ2ALSrcAy2HPEHEHyHl1A9RfadoHkb6O1%2F%2Brtojd9vJoTQlBJDPV34FuGTqy5Vq%2BfSiwcshQ2vJ69knTWjZ9T47oyUM91zFMXeGHMKRNKCtjZ1RqzgUdujoHLaZI2qwzPhFFQImhRr81e5SDFuAOJGVtKhmHt1sSsRxMbFDX8EvSjFM21aWVhu%2FZC%2FnrcKIvBVomVeUjimvM%2FIwAoiey2VvxqUm0oGiLszcFZQb0S9hFBuLU0HqDqXzK61ldgWpPlyoJHt190JeWmUSTtzQNLB8u6obhDJXKC%2BKCE49DW41rsBwreEJn%2FWOKh2OsascGQtV1MAsjPEwi4htWSihmhZIL%2BPq5yrmNmvA%2ByFL3SM9rsC4jIcUzmAJm0eCqg1SBBDChpA7KHzoU%2F%2FQbBRFfWVKNLaKR22Iz6YEVJS2WThKYB7kB0HKBueCQYJvMde9rU%2BimUQVWRrWZ%2F0sQtCF0lqkSjXEQdkMudQyCYP%2BG1GehkECKWT5ymr8fPJqUqqeQrH1iohKQVMeTQbWiB9p5vsOMgXXQUSwK9jN9xlJvJc7O%2FapHyicxzT5z2UDsBUtYumqUD1iLhh4wEzW1sS6dhWibA5%2BjiLSPW5kqqM0RsVdDWiIRqe7GI2YQAlD9hlfFEtPMMyc3MoGOqUB4tmsk5tXB1lBtGeOKbYFsTCxcKBrha8LECUYR9E4t8djPnpfrrHhdLXmxGt67UUJoej4FVZoy1OTVa4fI%2BITUJBQ4ervfjBUunlUgh6bj3104NkdPs8GoVnfUwHkifu3U%2FPR32Pn8EvpqpOhNUAZf2HbveJOyt8JM7saOF5scpSoG79YUaDWs3snOP%2Ba5moY02byof7zpomstGAPbg1K1Q%2F5NgrE&X-Amz-Signature=96ab14adbd1b79375b23cad27426106ca5f2319b453dc71229d76d1511a4c148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3MZEFU%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA7ywudLNbguE%2BjdobRqqdXQIjhZsPSQR4WszRBjfdedAiEAjly7bjhPvcot0T%2Fzm%2FeNAR5%2B26ZBslIfE01VjMrMv3sqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtqQaduNczHnQ2ALSrcAy2HPEHEHyHl1A9RfadoHkb6O1%2F%2Brtojd9vJoTQlBJDPV34FuGTqy5Vq%2BfSiwcshQ2vJ69knTWjZ9T47oyUM91zFMXeGHMKRNKCtjZ1RqzgUdujoHLaZI2qwzPhFFQImhRr81e5SDFuAOJGVtKhmHt1sSsRxMbFDX8EvSjFM21aWVhu%2FZC%2FnrcKIvBVomVeUjimvM%2FIwAoiey2VvxqUm0oGiLszcFZQb0S9hFBuLU0HqDqXzK61ldgWpPlyoJHt190JeWmUSTtzQNLB8u6obhDJXKC%2BKCE49DW41rsBwreEJn%2FWOKh2OsascGQtV1MAsjPEwi4htWSihmhZIL%2BPq5yrmNmvA%2ByFL3SM9rsC4jIcUzmAJm0eCqg1SBBDChpA7KHzoU%2F%2FQbBRFfWVKNLaKR22Iz6YEVJS2WThKYB7kB0HKBueCQYJvMde9rU%2BimUQVWRrWZ%2F0sQtCF0lqkSjXEQdkMudQyCYP%2BG1GehkECKWT5ymr8fPJqUqqeQrH1iohKQVMeTQbWiB9p5vsOMgXXQUSwK9jN9xlJvJc7O%2FapHyicxzT5z2UDsBUtYumqUD1iLhh4wEzW1sS6dhWibA5%2BjiLSPW5kqqM0RsVdDWiIRqe7GI2YQAlD9hlfFEtPMMyc3MoGOqUB4tmsk5tXB1lBtGeOKbYFsTCxcKBrha8LECUYR9E4t8djPnpfrrHhdLXmxGt67UUJoej4FVZoy1OTVa4fI%2BITUJBQ4ervfjBUunlUgh6bj3104NkdPs8GoVnfUwHkifu3U%2FPR32Pn8EvpqpOhNUAZf2HbveJOyt8JM7saOF5scpSoG79YUaDWs3snOP%2Ba5moY02byof7zpomstGAPbg1K1Q%2F5NgrE&X-Amz-Signature=01990e5a1d3c23c024c7d2c92455d73f01caea79c8cb6f946afb00a59fca1e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3MZEFU%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA7ywudLNbguE%2BjdobRqqdXQIjhZsPSQR4WszRBjfdedAiEAjly7bjhPvcot0T%2Fzm%2FeNAR5%2B26ZBslIfE01VjMrMv3sqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtqQaduNczHnQ2ALSrcAy2HPEHEHyHl1A9RfadoHkb6O1%2F%2Brtojd9vJoTQlBJDPV34FuGTqy5Vq%2BfSiwcshQ2vJ69knTWjZ9T47oyUM91zFMXeGHMKRNKCtjZ1RqzgUdujoHLaZI2qwzPhFFQImhRr81e5SDFuAOJGVtKhmHt1sSsRxMbFDX8EvSjFM21aWVhu%2FZC%2FnrcKIvBVomVeUjimvM%2FIwAoiey2VvxqUm0oGiLszcFZQb0S9hFBuLU0HqDqXzK61ldgWpPlyoJHt190JeWmUSTtzQNLB8u6obhDJXKC%2BKCE49DW41rsBwreEJn%2FWOKh2OsascGQtV1MAsjPEwi4htWSihmhZIL%2BPq5yrmNmvA%2ByFL3SM9rsC4jIcUzmAJm0eCqg1SBBDChpA7KHzoU%2F%2FQbBRFfWVKNLaKR22Iz6YEVJS2WThKYB7kB0HKBueCQYJvMde9rU%2BimUQVWRrWZ%2F0sQtCF0lqkSjXEQdkMudQyCYP%2BG1GehkECKWT5ymr8fPJqUqqeQrH1iohKQVMeTQbWiB9p5vsOMgXXQUSwK9jN9xlJvJc7O%2FapHyicxzT5z2UDsBUtYumqUD1iLhh4wEzW1sS6dhWibA5%2BjiLSPW5kqqM0RsVdDWiIRqe7GI2YQAlD9hlfFEtPMMyc3MoGOqUB4tmsk5tXB1lBtGeOKbYFsTCxcKBrha8LECUYR9E4t8djPnpfrrHhdLXmxGt67UUJoej4FVZoy1OTVa4fI%2BITUJBQ4ervfjBUunlUgh6bj3104NkdPs8GoVnfUwHkifu3U%2FPR32Pn8EvpqpOhNUAZf2HbveJOyt8JM7saOF5scpSoG79YUaDWs3snOP%2Ba5moY02byof7zpomstGAPbg1K1Q%2F5NgrE&X-Amz-Signature=061d9779b7eb029cbef602ebab162fcadfa493521aa7ef35baaa8ffa8c3311dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3MZEFU%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA7ywudLNbguE%2BjdobRqqdXQIjhZsPSQR4WszRBjfdedAiEAjly7bjhPvcot0T%2Fzm%2FeNAR5%2B26ZBslIfE01VjMrMv3sqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtqQaduNczHnQ2ALSrcAy2HPEHEHyHl1A9RfadoHkb6O1%2F%2Brtojd9vJoTQlBJDPV34FuGTqy5Vq%2BfSiwcshQ2vJ69knTWjZ9T47oyUM91zFMXeGHMKRNKCtjZ1RqzgUdujoHLaZI2qwzPhFFQImhRr81e5SDFuAOJGVtKhmHt1sSsRxMbFDX8EvSjFM21aWVhu%2FZC%2FnrcKIvBVomVeUjimvM%2FIwAoiey2VvxqUm0oGiLszcFZQb0S9hFBuLU0HqDqXzK61ldgWpPlyoJHt190JeWmUSTtzQNLB8u6obhDJXKC%2BKCE49DW41rsBwreEJn%2FWOKh2OsascGQtV1MAsjPEwi4htWSihmhZIL%2BPq5yrmNmvA%2ByFL3SM9rsC4jIcUzmAJm0eCqg1SBBDChpA7KHzoU%2F%2FQbBRFfWVKNLaKR22Iz6YEVJS2WThKYB7kB0HKBueCQYJvMde9rU%2BimUQVWRrWZ%2F0sQtCF0lqkSjXEQdkMudQyCYP%2BG1GehkECKWT5ymr8fPJqUqqeQrH1iohKQVMeTQbWiB9p5vsOMgXXQUSwK9jN9xlJvJc7O%2FapHyicxzT5z2UDsBUtYumqUD1iLhh4wEzW1sS6dhWibA5%2BjiLSPW5kqqM0RsVdDWiIRqe7GI2YQAlD9hlfFEtPMMyc3MoGOqUB4tmsk5tXB1lBtGeOKbYFsTCxcKBrha8LECUYR9E4t8djPnpfrrHhdLXmxGt67UUJoej4FVZoy1OTVa4fI%2BITUJBQ4ervfjBUunlUgh6bj3104NkdPs8GoVnfUwHkifu3U%2FPR32Pn8EvpqpOhNUAZf2HbveJOyt8JM7saOF5scpSoG79YUaDWs3snOP%2Ba5moY02byof7zpomstGAPbg1K1Q%2F5NgrE&X-Amz-Signature=b5837a1c11fa1994456943a3fc5197167da0b92c9e909d5c568cf920f031d4ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3MZEFU%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA7ywudLNbguE%2BjdobRqqdXQIjhZsPSQR4WszRBjfdedAiEAjly7bjhPvcot0T%2Fzm%2FeNAR5%2B26ZBslIfE01VjMrMv3sqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtqQaduNczHnQ2ALSrcAy2HPEHEHyHl1A9RfadoHkb6O1%2F%2Brtojd9vJoTQlBJDPV34FuGTqy5Vq%2BfSiwcshQ2vJ69knTWjZ9T47oyUM91zFMXeGHMKRNKCtjZ1RqzgUdujoHLaZI2qwzPhFFQImhRr81e5SDFuAOJGVtKhmHt1sSsRxMbFDX8EvSjFM21aWVhu%2FZC%2FnrcKIvBVomVeUjimvM%2FIwAoiey2VvxqUm0oGiLszcFZQb0S9hFBuLU0HqDqXzK61ldgWpPlyoJHt190JeWmUSTtzQNLB8u6obhDJXKC%2BKCE49DW41rsBwreEJn%2FWOKh2OsascGQtV1MAsjPEwi4htWSihmhZIL%2BPq5yrmNmvA%2ByFL3SM9rsC4jIcUzmAJm0eCqg1SBBDChpA7KHzoU%2F%2FQbBRFfWVKNLaKR22Iz6YEVJS2WThKYB7kB0HKBueCQYJvMde9rU%2BimUQVWRrWZ%2F0sQtCF0lqkSjXEQdkMudQyCYP%2BG1GehkECKWT5ymr8fPJqUqqeQrH1iohKQVMeTQbWiB9p5vsOMgXXQUSwK9jN9xlJvJc7O%2FapHyicxzT5z2UDsBUtYumqUD1iLhh4wEzW1sS6dhWibA5%2BjiLSPW5kqqM0RsVdDWiIRqe7GI2YQAlD9hlfFEtPMMyc3MoGOqUB4tmsk5tXB1lBtGeOKbYFsTCxcKBrha8LECUYR9E4t8djPnpfrrHhdLXmxGt67UUJoej4FVZoy1OTVa4fI%2BITUJBQ4ervfjBUunlUgh6bj3104NkdPs8GoVnfUwHkifu3U%2FPR32Pn8EvpqpOhNUAZf2HbveJOyt8JM7saOF5scpSoG79YUaDWs3snOP%2Ba5moY02byof7zpomstGAPbg1K1Q%2F5NgrE&X-Amz-Signature=aac93c5405b496a519e7b4144bc58aabd1df43bfedb5886d7293a86a6dc26a47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7Z2W3S3%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDDYX%2BUFoEd5P2TxrbXdZS0tzM0e3OT%2FPjLNYHQCxNuJwIgG2e0Jk4PN4gFugtb5K%2FbCDCnnbwKfBoHx%2BATyjSOH5gqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWgc2wRtfrJVQvlcCrcA%2FWW%2Btk8szAXyzSbNloZPN475EqJGseNnWteXk0ZtX858Ua9HbExx4QpocWmIu0pWZG2sycJvDzp7vzPa%2B8NstC%2Fpxcc9GPTRpL6qnAXsviYYGFS9eyAUHm1ZsMGkhMSwRVHvTZX0L6Z91%2BKkkTDf21C3WwVDB%2BuK%2FvnFyD0d%2FJGIrhHdD%2B2dn7rq%2BducHRfDZMEOdqTgjhAKZcrrL0RJuCL%2BW4d23ZJKW3nju795FUTbJh5tUaJONQ0tn9yRCmeZ5exJqXT3RddD%2BNwpsrrmRJ11NxudvrbWc4vPDksJ7KZakz3lH4LvINyF%2B6cP2lG9uRD1dpQuQaemhuCzA0McaHDW5U2BGUt53bC5RrIg72W%2FyYmt05EvjMV17hziqNQHpuplJS8KlP5OMViBXqyZC9KYqfPa2dq%2FC6stwdiBqG52PQZTdVjxSIi6aNGpl3lpJtdEXpA5WmLGLxWrIAj5y9yi9WQDaBy4GMjAbQBjuykmc99yzg4%2FTd94WkWI%2BVtfb%2Fhqu9HC3%2FyjsHgcQ1uo16AomNThJvJ7YFKniZ13p%2FIgKi0CtEmXwH8uDcuDhjF8XlPFETyOvMTIeCu9tpeADhJNODTTSqs6nZF1OOE5jEG4WE0pC3MHp2gLdVVMNTA3MoGOqUBypEYEno1CWF4sDSxDPH40yaMaiSWVrFFPHxeS0ACXmWYN6sRI2waKvyyV%2BfjeIV%2Bldcj%2Fcfv%2FM99NG3p%2F5GgljZbQqfEUk92qqYd32wqiihLm3Np7%2Bkwdde3u0AWmbVFbLdJllWPwP0noOkkqGq8QP8NinY7u7OZITuLJTxBFQ8RsnfM4YnPO91Q9WYuWjU0w3rXyNi7eGTl%2Bx8HHjIBY9%2BlCs1Z&X-Amz-Signature=39fbb62bbb2d66182a8846605b9b59c3077d59ddb62a0f91e35186438c1a6a5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNHVGMDS%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCQJSZACmPE%2FEH7cySt6EFOqxcXZZVDEFobTyuR2xBZ9wIgE24w6leRNKTkB6dqi97iBPt2aIYodmTy8SdVeqrB3AcqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNWzn0ptN9PKPzoQCrcA%2F3mFFer%2Bmd75k2kehx1ntzazk6xnTWMFHl9b9utWriLzULrsq5j1hZEtSlQCw5yyji4D4rwsQQ7IHPqynHUNvAZFyAwO%2Ffm4eSeXKZ2GpnNDxKje3Vpblb4HM3SmQX40wCJ8nrR8DWJPPc2GXeG3foy21DOifOcivVocsnVRHZklcxO2u3b8QEIG6Vnz%2FeukKOgOKSjpsPDCK%2BSCHS9LF%2Bxg8TboNULNlTkQ8rQwBty37jMTQb2wxBCwfyFgZetRm8O7z%2FAeiQl94vhgRWhU1sGmXaqCDWZvYnBbpuOdTnan292%2FwWyjBSZwN4aDQLHvRpOR67Xkaae7Th5aB5M0wyIGHsLxYCDlFSwxs6bQJuwwvs1F6fDWq8LNOSv%2B7vow2%2F2SCFkXPFYrY5grlND5oFVk55i1C36FM6dJeZgYkamFofjwoRXZiG9xWUEwjnwo5PyMuk98%2Fvy3ahLdwoCLPTsjOizBI1e8oXcamCfH8COE4W18ZZY3zxXP4oIaT7IfnY1d4RgK0%2F2IaFxSJ%2BruqgQC50tH4rboPimV3kOB%2BB%2FsC%2FWfRtBEmGLD1U%2Be4b0ZFXA65ZOD5r4wdiV31Xg06o4MIPfoTHx58gmJuzwClGg56pMwuwVTYPpyK4eMOfw28oGOqUBNlwOsqXFgZJoN1RnXLMosaWuXaiOqzCdR4pde5%2Fy0D8eux1MF2LBBnTsTK0LLZ2YND4ZfxfoicKWquA3FwcxHhCuQYPTwAQvXjh%2FQHxLrwVWQHefovxkUxHtritGh6454r1wxfo6wAvxDGGajpcfK4tyKBsXJ3NYP9HwJJaIWHaB0j1fDbn7LvAPqMQGiNHQksG6ktvHaL8tNO0pSkKhsoi9vB9r&X-Amz-Signature=271fd7f973a030899657e28b4a4d8daaa9a542a678c35e10baf3091da7946388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622FPJYNF%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDmwljcaiBx7Ba4S5BQ4%2FY2v%2BxlMAe4tNRUkA3CFJkApQIgDIxr9w21D1jTutQtnDiVDK8Kak3mNZgszulrlleo5t0qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHreAsipDwTueYb7RyrcA1B4Yis545LyxMvf7txnJ%2FEFf%2Fy%2BPxFgiySuyTry9%2FjmjBrzWk%2F7cIuN9abqDSaROKzhpG6D2J%2BKVwcSUvphCuosyPsQ%2B741e9wOOzTju89An%2B%2B8NHR17JUpAdc2VNMKy6PfR0PKgTz3qwgP7xCgHxrit%2FB01f6T1iizdLbcU%2BhPsyyptxp8DBA6AFp1rfHKVRG7D2LIYHwg2O4sG3kQSkTUDDcGW3J4wbRRCwkSsDV8zqST03uRXRmmyXEkuLUim5lN%2FY51xGnTlIvcKF9OWcBK0r%2FtTAfpr27lor1KCLRRMaqziLng1ZDfvRbaWNF5MgXRLac%2B0LxvZJv1Vk31wO%2FdLrmjtbJ439VgT3Eoy0x5WkypNnpfwSiJJ7%2FkQhwnkuipLC1oYOxDbJNkHQCoQAnSC%2FqxrWPKPLDNgOIKmXV8gBcESSLXUnrNmVImQkWEsvJRH79YVLXnXyne%2BI%2FQQsIYXl%2BuNnlKm%2BfX38kkhtS2ghTjTtmi7DFkfGjVh4LL%2BM%2F29%2B3C23PdVGu682uILIJSsmLqItEV0TBrDZeoKL0BNyc2wl30gVY8Xs1qQNhQgp4F77FvA0qyyuFzGr19WOM%2FpfP0xMUMwvq467A%2B14ol5VKiy25SLDwyKXQBMLC23MoGOqUBdPYZRYRseTpejt8xWsweeVobAgsIMDGag3gQQGYOUmpCxxRib2RhHSdm5I4qBcnrN4x%2FzKUDzkPBOnBQkl8FgBPJh4DJyBEjyjhrHc%2BGoIFJUBW1jWZdKqFFHMUfuJMOAZTaul%2F2pR8wMTWQguJdkPTkl7tjT8PuMEqmqArtAVaLkoftYJ1jHyuS8qxHiWaD22c6730hGtnA1xIMEuZ7i8B%2BLYAQ&X-Amz-Signature=d1d9ab0f0ee2573ae17ccb608cd491c8d98461c15416aa0da2d46ef4ea015fb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3MZEFU%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA7ywudLNbguE%2BjdobRqqdXQIjhZsPSQR4WszRBjfdedAiEAjly7bjhPvcot0T%2Fzm%2FeNAR5%2B26ZBslIfE01VjMrMv3sqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtqQaduNczHnQ2ALSrcAy2HPEHEHyHl1A9RfadoHkb6O1%2F%2Brtojd9vJoTQlBJDPV34FuGTqy5Vq%2BfSiwcshQ2vJ69knTWjZ9T47oyUM91zFMXeGHMKRNKCtjZ1RqzgUdujoHLaZI2qwzPhFFQImhRr81e5SDFuAOJGVtKhmHt1sSsRxMbFDX8EvSjFM21aWVhu%2FZC%2FnrcKIvBVomVeUjimvM%2FIwAoiey2VvxqUm0oGiLszcFZQb0S9hFBuLU0HqDqXzK61ldgWpPlyoJHt190JeWmUSTtzQNLB8u6obhDJXKC%2BKCE49DW41rsBwreEJn%2FWOKh2OsascGQtV1MAsjPEwi4htWSihmhZIL%2BPq5yrmNmvA%2ByFL3SM9rsC4jIcUzmAJm0eCqg1SBBDChpA7KHzoU%2F%2FQbBRFfWVKNLaKR22Iz6YEVJS2WThKYB7kB0HKBueCQYJvMde9rU%2BimUQVWRrWZ%2F0sQtCF0lqkSjXEQdkMudQyCYP%2BG1GehkECKWT5ymr8fPJqUqqeQrH1iohKQVMeTQbWiB9p5vsOMgXXQUSwK9jN9xlJvJc7O%2FapHyicxzT5z2UDsBUtYumqUD1iLhh4wEzW1sS6dhWibA5%2BjiLSPW5kqqM0RsVdDWiIRqe7GI2YQAlD9hlfFEtPMMyc3MoGOqUB4tmsk5tXB1lBtGeOKbYFsTCxcKBrha8LECUYR9E4t8djPnpfrrHhdLXmxGt67UUJoej4FVZoy1OTVa4fI%2BITUJBQ4ervfjBUunlUgh6bj3104NkdPs8GoVnfUwHkifu3U%2FPR32Pn8EvpqpOhNUAZf2HbveJOyt8JM7saOF5scpSoG79YUaDWs3snOP%2Ba5moY02byof7zpomstGAPbg1K1Q%2F5NgrE&X-Amz-Signature=93fca2ca0ec82c43ea778d4b25d60df075111d4888a28a4f638600120ac11052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X7UWESK%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDo1T%2BK%2FxPwln%2BxMczk0nAzrEgQGmpkdtgzi%2F9E799%2BLwIgISPsniUGwQx3FC59etOMdhPbWRIuJ6ahZXFQb6u92%2BAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMM%2By7L8%2Bte4QAOviCrcA8dnNSRPa2RqvtXkr%2BLU7p%2F1U%2BKwNwJCPcStYrAfF288zxqvfQWcY4VlqkDHvc3XxEgTtwhTMrferuw6pDDbqz8AMhKh376QHDvA8p4mbzv43wVDIcKMupjOkkHm1t7nZyoc2dTN5cbpezTo9f3kNGgmpiUjgbVR2t12ncUyXD6aRgBrLVAHM9xhUPjpaPmS3vxIgUEtSftl6OShcel2OKYK8OKICSPQCmAk4PDjL3LycDf11e7M4Va%2FHHztjWQ036E1%2Fi6A5TKAdf0KLOBBOmrfo1OWtdrT%2Fnj7MQh04%2FtM9fEy9XN%2B4N7EX4L7rSYQi%2FDic1arEKAAnsj%2Bh9imjCaCuMv9%2BgbvY6TGrjN8vreQPnq%2BZ3rNZSDA6Ty5%2FE56zaExUXf8N0BEl5NIHZpjH56wR86CjH3M%2B0M52PoG1%2FmqsiT1qnT2p5nctzguN5eVyfTFN%2FkRrBOES6c3u8hDR%2FKt4f8DjuNB83ichHwhpb4zt7xDfdpYL0iSdsausQmaFDGDsdqiMAYLLJnH%2Bly%2Fq2i%2FsXMwWq3fPqwJq%2BEc5sAUuspf2ZaFezQvhbJURfs1cf7CnnAlNq8Qs5yegWV0W9IYPAG4RZ4K9kP7A253gMXlM0rcsLH9YDga3puOMLe13MoGOqUBhoISLLIaTyvY07usOZH%2FoiMZ65jpHfllECV3z8gcnaZ6jiUmqP1UIESFzltlFsYVIQ6zTaL%2BTcFs7TiuVdItldVb6QLiOMnwuqPvMP9Fp2H4pAD3W1bRI0%2Bf9ixP4q54akyrmPiOI1wLiszaO6RuJD8CE0D4Yejk478%2BRiE81DrXdDYEGY2m8eYxQxDO6Wu3GRYbRdhkqwSyuYIKy%2BNWquCkCagI&X-Amz-Signature=6d6a8901f5fc6c32898e7eb6c896c54128feb91691c11c70af55f6d9870cf045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3MZEFU%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA7ywudLNbguE%2BjdobRqqdXQIjhZsPSQR4WszRBjfdedAiEAjly7bjhPvcot0T%2Fzm%2FeNAR5%2B26ZBslIfE01VjMrMv3sqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtqQaduNczHnQ2ALSrcAy2HPEHEHyHl1A9RfadoHkb6O1%2F%2Brtojd9vJoTQlBJDPV34FuGTqy5Vq%2BfSiwcshQ2vJ69knTWjZ9T47oyUM91zFMXeGHMKRNKCtjZ1RqzgUdujoHLaZI2qwzPhFFQImhRr81e5SDFuAOJGVtKhmHt1sSsRxMbFDX8EvSjFM21aWVhu%2FZC%2FnrcKIvBVomVeUjimvM%2FIwAoiey2VvxqUm0oGiLszcFZQb0S9hFBuLU0HqDqXzK61ldgWpPlyoJHt190JeWmUSTtzQNLB8u6obhDJXKC%2BKCE49DW41rsBwreEJn%2FWOKh2OsascGQtV1MAsjPEwi4htWSihmhZIL%2BPq5yrmNmvA%2ByFL3SM9rsC4jIcUzmAJm0eCqg1SBBDChpA7KHzoU%2F%2FQbBRFfWVKNLaKR22Iz6YEVJS2WThKYB7kB0HKBueCQYJvMde9rU%2BimUQVWRrWZ%2F0sQtCF0lqkSjXEQdkMudQyCYP%2BG1GehkECKWT5ymr8fPJqUqqeQrH1iohKQVMeTQbWiB9p5vsOMgXXQUSwK9jN9xlJvJc7O%2FapHyicxzT5z2UDsBUtYumqUD1iLhh4wEzW1sS6dhWibA5%2BjiLSPW5kqqM0RsVdDWiIRqe7GI2YQAlD9hlfFEtPMMyc3MoGOqUB4tmsk5tXB1lBtGeOKbYFsTCxcKBrha8LECUYR9E4t8djPnpfrrHhdLXmxGt67UUJoej4FVZoy1OTVa4fI%2BITUJBQ4ervfjBUunlUgh6bj3104NkdPs8GoVnfUwHkifu3U%2FPR32Pn8EvpqpOhNUAZf2HbveJOyt8JM7saOF5scpSoG79YUaDWs3snOP%2Ba5moY02byof7zpomstGAPbg1K1Q%2F5NgrE&X-Amz-Signature=3c6372e67f1f117a62f50ebaaa15f8f9a2bfa75e9c84b6003889987912fc2b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U67DNSPO%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHRYN3t58ZX1xbTxAJ4L2oGA3X%2FUqet7xWOkOcUGlLRPAiEAmfFfVZ7dVgAXQRy1IiGMl%2Fi0EfOf8fk134Myk9hnpzoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuWiU1mRrUF7kARuircA87tPm6E1mxuVm1JXHWTg4jPO3d31uQbAPHvhgteYh3gvbrOrw6DOpWrWTTGbgStr8bJi1aHJzCYcx9bZImAkBOHHVv1m3zs9fzLCo7UrsSJmPOTZGstvx3%2FDG88q83U8zNIdIFW%2BSV8SbZd%2FAzL8Yl21q9jlUM09yXw3E7jDynnVOGhqzFpobUqp28n02G1c1toeM5lD5mimt1jrkXMsdBX5dHRCMaqtfrVSbXJbY9OLCvj94tvBKTTGqT7mBD4MQ8seLOfRXmpX4stwWklmpjOSysV%2BA7MA7p8AEk1OlHVs4DcIdNv4AU4ZfYtZV2cMMP7EK%2BHSUp7t3AbbWQSWxDrrBi9k0HLU6B6%2BDYt4aJ8FYSt0nsGfMo7n0HBNA%2FYtLln563ntXsz2zstDdv4B7EDpQYZ08hOnacuDXZU1nU6itOJikMvIv9V8MNzNABKYdPx1VwvIfSPYsPQm68SpAO2yRxT7N4%2BpgO7Hx95eEufPfz7z9t3tdgFeGr%2Fj2wpWA71Wysrb%2Bx4SY42rQnKt2Lq%2BFGJR62t4iLAQprG21NZUORdFWPB0QjSR2%2FLe58L%2FoXkoJ8Rf%2F47fHy5b%2Btn6kIplBMorNNuYneCZtl7zmjUozoAirh%2BududFsxIMOWZ3MoGOqUByDtYgZ4qiKqKYJnUZDGnrfF1xjxiwF8Shlnss92RlmDtUgpg3ZWYj9kaaPP9DA9i3%2BmiFqaZaw0GYdBUS0JDelxhS8O2RG25Ibfmkxnh2TZfofuLfgW%2B%2BP5txi2RKzuruotOQSEQ9NaGlCLiZPZOzgg2mIzHZqoIqAa0ocskMrDbXEQFdw6SpZ5GlcPjyJdShs0nAUPSHqgRl9gNBDdrgqYRVB1H&X-Amz-Signature=f9ae9e7a5f9dcdccea810a9cf7ff121bc0cd57a99dd1566ed9ef52ae0d8c1e03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3MZEFU%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA7ywudLNbguE%2BjdobRqqdXQIjhZsPSQR4WszRBjfdedAiEAjly7bjhPvcot0T%2Fzm%2FeNAR5%2B26ZBslIfE01VjMrMv3sqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtqQaduNczHnQ2ALSrcAy2HPEHEHyHl1A9RfadoHkb6O1%2F%2Brtojd9vJoTQlBJDPV34FuGTqy5Vq%2BfSiwcshQ2vJ69knTWjZ9T47oyUM91zFMXeGHMKRNKCtjZ1RqzgUdujoHLaZI2qwzPhFFQImhRr81e5SDFuAOJGVtKhmHt1sSsRxMbFDX8EvSjFM21aWVhu%2FZC%2FnrcKIvBVomVeUjimvM%2FIwAoiey2VvxqUm0oGiLszcFZQb0S9hFBuLU0HqDqXzK61ldgWpPlyoJHt190JeWmUSTtzQNLB8u6obhDJXKC%2BKCE49DW41rsBwreEJn%2FWOKh2OsascGQtV1MAsjPEwi4htWSihmhZIL%2BPq5yrmNmvA%2ByFL3SM9rsC4jIcUzmAJm0eCqg1SBBDChpA7KHzoU%2F%2FQbBRFfWVKNLaKR22Iz6YEVJS2WThKYB7kB0HKBueCQYJvMde9rU%2BimUQVWRrWZ%2F0sQtCF0lqkSjXEQdkMudQyCYP%2BG1GehkECKWT5ymr8fPJqUqqeQrH1iohKQVMeTQbWiB9p5vsOMgXXQUSwK9jN9xlJvJc7O%2FapHyicxzT5z2UDsBUtYumqUD1iLhh4wEzW1sS6dhWibA5%2BjiLSPW5kqqM0RsVdDWiIRqe7GI2YQAlD9hlfFEtPMMyc3MoGOqUB4tmsk5tXB1lBtGeOKbYFsTCxcKBrha8LECUYR9E4t8djPnpfrrHhdLXmxGt67UUJoej4FVZoy1OTVa4fI%2BITUJBQ4ervfjBUunlUgh6bj3104NkdPs8GoVnfUwHkifu3U%2FPR32Pn8EvpqpOhNUAZf2HbveJOyt8JM7saOF5scpSoG79YUaDWs3snOP%2Ba5moY02byof7zpomstGAPbg1K1Q%2F5NgrE&X-Amz-Signature=206ca0ffc7cff63755b5cd7514a98343d42c0f0cb613e701a399cf601f33a93b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEBK7MUT%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD3gqeZaNsSYIhwtMAvMPVh30cc2wBfgP4yA8jO0DgjHwIhAL%2BlK8NSMT9Q9qGaFTjQHFQ3uuoTRqEtW%2FZgPi4aUUFkKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfFHdVy4NgYmLZ8ucq3AMqo1%2Bxqmenq3t7g%2BC1XStoi%2BdIRNCmjcgg1VwWmiFVeQHDjkaST2%2FPfsp7LDOuSP60pitN33di%2FwHKIcKQ4EVPTBCGnwJWuqixvyUxijwAANdwZzNhaIJ8erXYqoGG8xR%2FW%2BjOyccf4GZqR5xq6ufB0cr%2Fb6Q%2BNmFbReUM%2B6PDZMZBicoI8HSQyV6bW6pKNZRrcQfTbSJpVLkJ99uPb9QX2%2FfOx54lOY4HmT%2BTSrFY3GJGutzTjaUAnXox%2FhnOs%2FFnhVeCpbhebU8aP%2FUVgfFPzjKzkI2PfmUX3BNnj2KPcY5D1eDwH4uoULLaOHoEaotf1f7ZyigRQRSHfS0KWviaeCP3G%2FqTYEZtmqiNjcPVCriG%2FUm3GFxxs0yRUQsNAkVdzHwPUgxAqH9NlpSbaPagKkNMCWHat7O0GQgiqC7V6h3RdR0vccBPDEtlDnR5c5hJr%2F5gjhVs4UVhaYFBBp%2FahsbrOyZZeFLf9BrHNRztpoaSkqoEu6IPCTEUTpu7sJSGQG3QGeZ%2BnH27K%2BwHVAgFMTavrmZ0ycpvvhfmQsN9J0KAbAjxOBpeH9TGUbY%2F5wnC0qtzI0RyjuU7uhtX0wPbD7y5FSRQ1IttcRENrK1qVLxZrNYMHt%2BN6qgotDDwttzKBjqkAVS8i8CGq3XhzVzvAImHFDmBlSaMJ6de5h5DwElo99b9a33BLE6tERsHmJg%2FeczkdE7ShbsEarjt1XVtBXicdDekRNCt8FQ0soYCBFRuI%2BHIE2TzytA%2F8dDN34eg2UdfBCzYXUPMQiUW6qIJWMSf3IKg%2BX58I%2F8prBdIDtavOWHAWdcXE9AlENzQqitxRZ7xyD72aF5KpDBA2DGGto%2F07XBwJzot&X-Amz-Signature=604091f7c6c42462f6c48a6690d295cf326635fe5d76b502fcf60adfecc205e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3MZEFU%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA7ywudLNbguE%2BjdobRqqdXQIjhZsPSQR4WszRBjfdedAiEAjly7bjhPvcot0T%2Fzm%2FeNAR5%2B26ZBslIfE01VjMrMv3sqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtqQaduNczHnQ2ALSrcAy2HPEHEHyHl1A9RfadoHkb6O1%2F%2Brtojd9vJoTQlBJDPV34FuGTqy5Vq%2BfSiwcshQ2vJ69knTWjZ9T47oyUM91zFMXeGHMKRNKCtjZ1RqzgUdujoHLaZI2qwzPhFFQImhRr81e5SDFuAOJGVtKhmHt1sSsRxMbFDX8EvSjFM21aWVhu%2FZC%2FnrcKIvBVomVeUjimvM%2FIwAoiey2VvxqUm0oGiLszcFZQb0S9hFBuLU0HqDqXzK61ldgWpPlyoJHt190JeWmUSTtzQNLB8u6obhDJXKC%2BKCE49DW41rsBwreEJn%2FWOKh2OsascGQtV1MAsjPEwi4htWSihmhZIL%2BPq5yrmNmvA%2ByFL3SM9rsC4jIcUzmAJm0eCqg1SBBDChpA7KHzoU%2F%2FQbBRFfWVKNLaKR22Iz6YEVJS2WThKYB7kB0HKBueCQYJvMde9rU%2BimUQVWRrWZ%2F0sQtCF0lqkSjXEQdkMudQyCYP%2BG1GehkECKWT5ymr8fPJqUqqeQrH1iohKQVMeTQbWiB9p5vsOMgXXQUSwK9jN9xlJvJc7O%2FapHyicxzT5z2UDsBUtYumqUD1iLhh4wEzW1sS6dhWibA5%2BjiLSPW5kqqM0RsVdDWiIRqe7GI2YQAlD9hlfFEtPMMyc3MoGOqUB4tmsk5tXB1lBtGeOKbYFsTCxcKBrha8LECUYR9E4t8djPnpfrrHhdLXmxGt67UUJoej4FVZoy1OTVa4fI%2BITUJBQ4ervfjBUunlUgh6bj3104NkdPs8GoVnfUwHkifu3U%2FPR32Pn8EvpqpOhNUAZf2HbveJOyt8JM7saOF5scpSoG79YUaDWs3snOP%2Ba5moY02byof7zpomstGAPbg1K1Q%2F5NgrE&X-Amz-Signature=0077e643266891a85efde2ba1fe3bc19967370e6a6d0d3a49370dec3cf02ab37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW355WTN%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQD4%2FuwLse2jsdiLdVEyUz37J0Iccm8%2BiM0hWIqCo3bIZwIhAM7q2n%2FMzYJMCm2mrhEcMfaDZbauWhvsQ9rAYotHldNQKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYSFKiMkVZwwtUB3Eq3APSYEp9U8X%2BbPcoT41QXqjNwoePFE462%2FcPqvEt7WWIOGNWNaRemJQMkuCo5443yWm4al4oTm6EQ03%2FFAmiA%2BLLKsVBI2IlPjRrgw5UrF4aHCq8Iv78NI7ImBCZg9Iw5ItH7fYMzix6NSPkiWT07KMcVkada%2BBl9IQ1QA%2FDfUtet7554s%2Fdj%2FL%2BY4MICbs%2F4VGb%2FJSD1XQeaP7Q4HV6QvljZqiYFDzBVWTsepxM80fyKGvcbKAj23PGTDXs1jP9FbBxiD0n7WMEnn7wC3H%2BKEqcVAXAvaf%2BrgZTUc0F1HdqjSifIacLsI5EnRgT8R50Ws9qRKfm5JBQ5Lg9G3NqAWoeLR%2FE4dMi6bVN4ZsIxnnH5MWmwGaIvvRlas27Jl4q8mn1Z47f%2BmYEqaI7%2Bkf3g%2FI0ccd4eMVt74m%2B1p%2Fbv3CjyWMJwBB%2FIe6Utne7yCQdNeQDJ7xaJUBWMHQfEvRQm7m3TeIC9CLX25d5JkN1XX3Nwk5W4aPeq03cjbDGgEhct9pUdxYb2KVRCmYlgf2O8eauJ2Fi277u30e85WD96hVXo5aAzwmpfLn1wyUhKVnu3bD8FP%2F%2BBuWww%2FwTynv7EOcfWziLV%2FK%2Fo09ubTaiGnFw4rIqjfsSzDFTDlRXEjCUw9zKBjqkAfU8iJpYhE9Zpv0ldUDLDt30UTQHQqrs7UOEOR8REdJNhoTT7OFRh%2B7tN6bzvFK7a30a4h%2BT1tUGpe1oHlJwh9%2BtNwFfUZcFXQvuNgD850%2BvmocbYUhwJUoNEa3gc7S%2FD12tLQk6Xk6oCn2b%2BN%2BgCEUx6etNvPbwaHrekaVLn3rtmC%2B106mmEXhhllyI85uiSyLDO41OppJA7Wp2Y28cWvWUgJxa&X-Amz-Signature=e6bcb6a884f996e2a6a9b8ce002e5ad6c3be47a77f49d4c36b3bbc6503f607f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3MZEFU%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA7ywudLNbguE%2BjdobRqqdXQIjhZsPSQR4WszRBjfdedAiEAjly7bjhPvcot0T%2Fzm%2FeNAR5%2B26ZBslIfE01VjMrMv3sqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtqQaduNczHnQ2ALSrcAy2HPEHEHyHl1A9RfadoHkb6O1%2F%2Brtojd9vJoTQlBJDPV34FuGTqy5Vq%2BfSiwcshQ2vJ69knTWjZ9T47oyUM91zFMXeGHMKRNKCtjZ1RqzgUdujoHLaZI2qwzPhFFQImhRr81e5SDFuAOJGVtKhmHt1sSsRxMbFDX8EvSjFM21aWVhu%2FZC%2FnrcKIvBVomVeUjimvM%2FIwAoiey2VvxqUm0oGiLszcFZQb0S9hFBuLU0HqDqXzK61ldgWpPlyoJHt190JeWmUSTtzQNLB8u6obhDJXKC%2BKCE49DW41rsBwreEJn%2FWOKh2OsascGQtV1MAsjPEwi4htWSihmhZIL%2BPq5yrmNmvA%2ByFL3SM9rsC4jIcUzmAJm0eCqg1SBBDChpA7KHzoU%2F%2FQbBRFfWVKNLaKR22Iz6YEVJS2WThKYB7kB0HKBueCQYJvMde9rU%2BimUQVWRrWZ%2F0sQtCF0lqkSjXEQdkMudQyCYP%2BG1GehkECKWT5ymr8fPJqUqqeQrH1iohKQVMeTQbWiB9p5vsOMgXXQUSwK9jN9xlJvJc7O%2FapHyicxzT5z2UDsBUtYumqUD1iLhh4wEzW1sS6dhWibA5%2BjiLSPW5kqqM0RsVdDWiIRqe7GI2YQAlD9hlfFEtPMMyc3MoGOqUB4tmsk5tXB1lBtGeOKbYFsTCxcKBrha8LECUYR9E4t8djPnpfrrHhdLXmxGt67UUJoej4FVZoy1OTVa4fI%2BITUJBQ4ervfjBUunlUgh6bj3104NkdPs8GoVnfUwHkifu3U%2FPR32Pn8EvpqpOhNUAZf2HbveJOyt8JM7saOF5scpSoG79YUaDWs3snOP%2Ba5moY02byof7zpomstGAPbg1K1Q%2F5NgrE&X-Amz-Signature=9e6a8f934980b628ed17b0f7ecc74bd6d4538ad9e16d3539ce57d0e017240ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCT2DZCU%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBqkZwCMYXsBXmvQakyr%2FXPBXMBgDqDX9Tl1L3Blf45nAiEA1%2FZb%2B1dQ68n1HCVL2IvMy7zFZaiI96BWk93Z01ABZUUqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzCSlp39Gh7T%2FO4vyrcA5DaX5MyRClsVVeHK3Sqq0EM9CfDDSFWEDDR7WfWJk8BQfnSFRfCdBhFkEbIud%2Bl8stGQ4cXy9ucDcZbE71vP6IxT%2BXXb5HvWjZ55%2F7xKRoZpBdwVVsjxQ0biaR1coCIb4FOhyDLWLy1NnrXRJz6TVmHXpoaZkqs7KyWkbStqo4p6uTR41KwgB%2FMeg4XPcGmnjgG9Kx7vdab%2BINriXn3RK2GX9fpohbofb58M15RErcluC%2F6onU3rt8KDeHmBVOiX2ke8dywDEDTEAGzoaazFkV1PUBBdAEwcUIWXHac8fQ2V1Qqq0cnBFNIIU0d5MMeNgI6KkAAE0smPkiWgbyI%2FUW8uXKKqhzBft25V%2BksG7eWQ7cIjrYyEcd3ciQ4NfX%2BvhisLMj9OxyUD241xyuTKl11%2BmPkMWu0ZdnYqhkPxFASHk%2B5k5RP85nsED9obaZcfEknNBcMQhdWRqezh2wxmtPk%2BMWDMa%2FHc3aBZZORVy8nauGcUOl2jTaC%2F1XPuUH%2FmHDBtz7lDqlX759X8vCAqySYER3HaXIh7BvzNDJds9NHsiw9CNQhzGr3nVEtBAAXMwDmYUxAChcglcYoArFsRzl%2FieyT4tqDgPJ5UF5TPcykT3fjUTjbuxMggr4qMMCw3MoGOqUBU0RwzVbMolCwSzwygF8v7q5ZZI18SZCmflQpS%2FIgRvXED5jVpm3e4KMYQcviWhmSa5244hmTDK4jdaTu7kfJ7P7g0tz9tyOUEUmpaRmSmLHCNdS22aTFlssWUwYinzUkgAa1cMiZZsgdyqoyXqrzBryZy4v3fn84z0GPGzPyykCzWj97%2BbxP986dgymdqzt%2FrpvP45qjxAqHnOnI91JZtLswLHPG&X-Amz-Signature=a1682d987c2357b64b3cdc23072ae857571e56194581b6c01ac9380207f15e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644JBNX4I%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDJVEQ%2F4CYI0T0SqvkvfOO4ekp3MEZASDRcj5Ks2YPm2wIhAJE7mT9eNsrvhUsEJ06ZzasO6N1oLZ2SvNyT5kTi4r9sKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyol2t%2FZdYFr2SHNqwq3ANAexztLVeUavd5rtloXFn9GA3bRe0%2FdzqEZK3K5bDuyxnoqXGVGypzi1aQZTHYsanEC6Ce5mjqw8qPDx9S8sOjnD1qfm06JGd4VT9c6IMzvoAL%2BsLTFoPkZTALweAfESkJ06mnaWTHU3jQzrssvRhCXw5OWZCFtAejb6%2BnU1abIhfgU%2F3PlnOAZS9xboRxf%2BSzdjqbiAC59FR9RYLDA6f6qOJC%2FVa%2ByUwygDQhS2xrAaTumbVF7BzxqRxnHmPqs1EQRUEe2EGSFhAkB1IXQrg4JPy6zSCbtPfVPIQfpXvqo2iV3kFdandLlZf4lIO9gGjNc%2FLRwr0u3v78ebQnltSw0lB4O%2F1GZWO6QiIRPD4JlP57w2EErZpZCYjwdfEc%2FH8IMWJJI0qEWu1ZzHvAdIjDQw%2FCfwunTcA%2B4kNcE9blGIVEOEVPb23skmWHWMe2jtlgu4LWJRjJtzihz%2B%2F4yaXvMEYOVtAiLOpdE%2BPpxod5AC5BS3LIQbwFzLuR7gD0sAqkItilC4lXlJXRtnNg7JSfmudYnDQlOLJWJDmAdekFHCunajjP0jA9JH8iOeW5mAhwixbKXVvoCx2mrw7nH27P%2FMf9PwYvgWFzduCkIcGAXygmu7GZlYIzOECLgTCHp9zKBjqkARYLNf57sEUlY6MDU6TLR3vd%2FLcwPM18cJKie8C9mkW2Cgr3tlYXibwkmDTEgcJboCyPWfi5yaYgxFxC0ud7KBz3Fb6L%2FLw0eoZA5%2BV7IjB5m%2BZB4ayBr2ZPg89vds0gnvBv7kckp4lGP9yiuaBten%2FyYBCxznPuL9ZWY7B9RnWc6Z55P21mnYwWL%2BYZgHS7jlDqsa02FheQNUg2p%2BVV7g4ldI6d&X-Amz-Signature=0f80879edb91a0493c03cd84745dc5a53aa8e581d7ee12bf98f8913b14b7822e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6YROPT5%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQChCIvCQF%2BYsi2sbU%2B%2FgboG1h%2BsDT6ke7CWu%2B8ispBW9AIgFTpy6WVAw72CW2kAY4P976O1vpmrZ0qPcrzNU0GB4KQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEnT2M1TyPFaLiWDCrcAykzs9RgJjL3sN0nmjmkl0a78lO1duW6qV9Od1NVSaD9KzU53IrrArIo1QyhWbSjjze8sVIp7KR4jocN1xAHt3nLA1rm5e6giJoAtGY4kbPMNfrbZBev3yFN9OnF4rGgysDTNF0fi54PU0lllYwtirQStQL0S0h8BUm5Bd5O0WzZ%2BcWK5RGq%2FwKldC5DSHJmoQ5kyz7QKfCxV1LkheYhMHDGajf2%2BQvQAPoYFgQCrSHnjWvtZMLs6dAvO6rdlRO3hhV%2BE%2FhZb5tPNOfOnQA1aSwZU9%2BjMbth8o0EsqjYZmWCz6wHDPWCARr60mO6SmGTHH6K73dlQwx5bDzi3R1VWGtpG6pgcCGIg6lhb%2B14S2Uc3oxYbE9ykww0i35eVCmWH7XewBRTiENb7T3LFJmePs0khDlWhTLdVZetxL8a2Lcn5H5%2BRL0vcxqjTxSedBKHFTTy0YcFTjGrgBiUljE73ST4xOONpDhx58FeY3Mae0mVZMBri%2Ffu7PdfTqSTO3qwCyD4Sbkq9WZ96vM509lNVLvhukJzowK49C19U93PC%2BNZsdfs9ygCqgLYjqwVkwefXHJ51rIVfw7GTC3fz0dBs4EkFJVUDi6mnd82fZBe1jeFgbQ%2BKpqnlC2bpOxeMJ243MoGOqUB1oJ9k0a33OXY2K5NUNeEzx5LALl%2FsP9xaV%2FlmE%2Fghb2Wt0xdifAvGH%2BwuiMRCmhZTRYjbidmV9VFpkcUGhqG4arrFZh16209AyTar3cvx1x4cVBvt3VWs0gDxM8e4NWzefxnwDX4AOOMbtHynv1B%2Fkztkq5V3DuGX5w8rAuzISRYH42S3It0YHCOh046NVdjVTkghTrTrC9tg6YsYZ%2BI9d1vR96s&X-Amz-Signature=6c0315a1d4bfd76c21304ea93e7ce27c156bb5d53af46020f7a273390fda51a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3MZEFU%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA7ywudLNbguE%2BjdobRqqdXQIjhZsPSQR4WszRBjfdedAiEAjly7bjhPvcot0T%2Fzm%2FeNAR5%2B26ZBslIfE01VjMrMv3sqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtqQaduNczHnQ2ALSrcAy2HPEHEHyHl1A9RfadoHkb6O1%2F%2Brtojd9vJoTQlBJDPV34FuGTqy5Vq%2BfSiwcshQ2vJ69knTWjZ9T47oyUM91zFMXeGHMKRNKCtjZ1RqzgUdujoHLaZI2qwzPhFFQImhRr81e5SDFuAOJGVtKhmHt1sSsRxMbFDX8EvSjFM21aWVhu%2FZC%2FnrcKIvBVomVeUjimvM%2FIwAoiey2VvxqUm0oGiLszcFZQb0S9hFBuLU0HqDqXzK61ldgWpPlyoJHt190JeWmUSTtzQNLB8u6obhDJXKC%2BKCE49DW41rsBwreEJn%2FWOKh2OsascGQtV1MAsjPEwi4htWSihmhZIL%2BPq5yrmNmvA%2ByFL3SM9rsC4jIcUzmAJm0eCqg1SBBDChpA7KHzoU%2F%2FQbBRFfWVKNLaKR22Iz6YEVJS2WThKYB7kB0HKBueCQYJvMde9rU%2BimUQVWRrWZ%2F0sQtCF0lqkSjXEQdkMudQyCYP%2BG1GehkECKWT5ymr8fPJqUqqeQrH1iohKQVMeTQbWiB9p5vsOMgXXQUSwK9jN9xlJvJc7O%2FapHyicxzT5z2UDsBUtYumqUD1iLhh4wEzW1sS6dhWibA5%2BjiLSPW5kqqM0RsVdDWiIRqe7GI2YQAlD9hlfFEtPMMyc3MoGOqUB4tmsk5tXB1lBtGeOKbYFsTCxcKBrha8LECUYR9E4t8djPnpfrrHhdLXmxGt67UUJoej4FVZoy1OTVa4fI%2BITUJBQ4ervfjBUunlUgh6bj3104NkdPs8GoVnfUwHkifu3U%2FPR32Pn8EvpqpOhNUAZf2HbveJOyt8JM7saOF5scpSoG79YUaDWs3snOP%2Ba5moY02byof7zpomstGAPbg1K1Q%2F5NgrE&X-Amz-Signature=57dce457d84e4448aea58d23231f74ba2016bb4fbf88c1d5532a8223e6f0d724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3MZEFU%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA7ywudLNbguE%2BjdobRqqdXQIjhZsPSQR4WszRBjfdedAiEAjly7bjhPvcot0T%2Fzm%2FeNAR5%2B26ZBslIfE01VjMrMv3sqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtqQaduNczHnQ2ALSrcAy2HPEHEHyHl1A9RfadoHkb6O1%2F%2Brtojd9vJoTQlBJDPV34FuGTqy5Vq%2BfSiwcshQ2vJ69knTWjZ9T47oyUM91zFMXeGHMKRNKCtjZ1RqzgUdujoHLaZI2qwzPhFFQImhRr81e5SDFuAOJGVtKhmHt1sSsRxMbFDX8EvSjFM21aWVhu%2FZC%2FnrcKIvBVomVeUjimvM%2FIwAoiey2VvxqUm0oGiLszcFZQb0S9hFBuLU0HqDqXzK61ldgWpPlyoJHt190JeWmUSTtzQNLB8u6obhDJXKC%2BKCE49DW41rsBwreEJn%2FWOKh2OsascGQtV1MAsjPEwi4htWSihmhZIL%2BPq5yrmNmvA%2ByFL3SM9rsC4jIcUzmAJm0eCqg1SBBDChpA7KHzoU%2F%2FQbBRFfWVKNLaKR22Iz6YEVJS2WThKYB7kB0HKBueCQYJvMde9rU%2BimUQVWRrWZ%2F0sQtCF0lqkSjXEQdkMudQyCYP%2BG1GehkECKWT5ymr8fPJqUqqeQrH1iohKQVMeTQbWiB9p5vsOMgXXQUSwK9jN9xlJvJc7O%2FapHyicxzT5z2UDsBUtYumqUD1iLhh4wEzW1sS6dhWibA5%2BjiLSPW5kqqM0RsVdDWiIRqe7GI2YQAlD9hlfFEtPMMyc3MoGOqUB4tmsk5tXB1lBtGeOKbYFsTCxcKBrha8LECUYR9E4t8djPnpfrrHhdLXmxGt67UUJoej4FVZoy1OTVa4fI%2BITUJBQ4ervfjBUunlUgh6bj3104NkdPs8GoVnfUwHkifu3U%2FPR32Pn8EvpqpOhNUAZf2HbveJOyt8JM7saOF5scpSoG79YUaDWs3snOP%2Ba5moY02byof7zpomstGAPbg1K1Q%2F5NgrE&X-Amz-Signature=2bfa5fb64f079b55b981fe21addb570296c9e0dfda95ca9f7338ab2fc42cfc1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBV5XD2%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDMyT%2FbhIkFFtvOA6%2Bs9F8FDG3L1v9BXd2fDsUOR2CgKwIhAPGIQwsNf3PPhYdycx2aCOeTeneOkz1XJTTYGfmIDn%2BSKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoEtGOK1%2B0wyNMGF4q3AM265ABl7XvCcDaL3EauKL0e1qu2YN5O1x9N7Q7i6Y7voyfVUyoVCzJ4VnHF8sCBFHVkd3kH%2B4iohCIKfj6KCywFLsSvH9m8whZUSn8skGKycuTKyyLwzFVpj%2Bi0JAx0zsHHT0X1Cl2c5kVRXThptfrwV29e2PqwUcBKOEsMQhE2lh51EoUdXd3ubyj%2BgO0oKC8l%2BssojeFhFLhBDE7WSUiqAswzZ6JVXluBXknmNr7SjuE7LNhi5BsUWfemvmwVYUb1KVJCWYKUbSiVsoa39keL8Ag1apc2xGWoJMb76EK3jOpj6%2FusvxMgEZRXINPKDyqxpG7GRg2utYQrIQ%2FLyJpXCbQQvgV7Qlkr7cig0IzKKk1UsdMFK7W9xYwsT40oUq%2FivEGTeqD%2FvW4%2FQ85RQOx44c4BVOeH0FxMAXBKs7wcwbEBHnamEwj3IHVsfSYqoQ7IimlgZcXzsg3O%2FPz0JhjOI7or25ZdHcTBwXdtzmztmS9NfZXfLbi31WABGzrp1ShsaJi%2B3ZsX3zemwh8eysqnfFZ4ca%2Bpyk4YN3CGtVHMtj79oVu3xNpQXAPwEQQdXwpg3I9VNNOE2OtRjsXugKH2C37eSF46T9NiQtFFRWgnOnoc%2Bx%2B33y12k%2FMozDmptzKBjqkAclTAIWUQULidaavFE7fDV34IMkySYEm6lclQS81usp7dHkMFqVr8qqG%2BfnEPZqRqi2geTKipOeUZh%2BNf%2Fl41etrCe7Fzwzq1d9H8i7n1FPSCmOmurn0drk5ROaWcdjwdiaEjHJjjJTAqZR6UlxXfelBsw3SFp%2BLFV2zhrUvC0i%2F36thOBJP6yENTA4XHXjBipxzkqSLs2Lyw82uL78vxzJV9kx7&X-Amz-Signature=b82702a6240e4605eefd9b26541f944ebbc04cd3b0f75f001987822320c3f2d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBV5XD2%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDMyT%2FbhIkFFtvOA6%2Bs9F8FDG3L1v9BXd2fDsUOR2CgKwIhAPGIQwsNf3PPhYdycx2aCOeTeneOkz1XJTTYGfmIDn%2BSKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoEtGOK1%2B0wyNMGF4q3AM265ABl7XvCcDaL3EauKL0e1qu2YN5O1x9N7Q7i6Y7voyfVUyoVCzJ4VnHF8sCBFHVkd3kH%2B4iohCIKfj6KCywFLsSvH9m8whZUSn8skGKycuTKyyLwzFVpj%2Bi0JAx0zsHHT0X1Cl2c5kVRXThptfrwV29e2PqwUcBKOEsMQhE2lh51EoUdXd3ubyj%2BgO0oKC8l%2BssojeFhFLhBDE7WSUiqAswzZ6JVXluBXknmNr7SjuE7LNhi5BsUWfemvmwVYUb1KVJCWYKUbSiVsoa39keL8Ag1apc2xGWoJMb76EK3jOpj6%2FusvxMgEZRXINPKDyqxpG7GRg2utYQrIQ%2FLyJpXCbQQvgV7Qlkr7cig0IzKKk1UsdMFK7W9xYwsT40oUq%2FivEGTeqD%2FvW4%2FQ85RQOx44c4BVOeH0FxMAXBKs7wcwbEBHnamEwj3IHVsfSYqoQ7IimlgZcXzsg3O%2FPz0JhjOI7or25ZdHcTBwXdtzmztmS9NfZXfLbi31WABGzrp1ShsaJi%2B3ZsX3zemwh8eysqnfFZ4ca%2Bpyk4YN3CGtVHMtj79oVu3xNpQXAPwEQQdXwpg3I9VNNOE2OtRjsXugKH2C37eSF46T9NiQtFFRWgnOnoc%2Bx%2B33y12k%2FMozDmptzKBjqkAclTAIWUQULidaavFE7fDV34IMkySYEm6lclQS81usp7dHkMFqVr8qqG%2BfnEPZqRqi2geTKipOeUZh%2BNf%2Fl41etrCe7Fzwzq1d9H8i7n1FPSCmOmurn0drk5ROaWcdjwdiaEjHJjjJTAqZR6UlxXfelBsw3SFp%2BLFV2zhrUvC0i%2F36thOBJP6yENTA4XHXjBipxzkqSLs2Lyw82uL78vxzJV9kx7&X-Amz-Signature=7791aef962e34370ea6ca5bc1023c525a8412384b4ea4fd7e4aaa45561a98420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBV5XD2%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDMyT%2FbhIkFFtvOA6%2Bs9F8FDG3L1v9BXd2fDsUOR2CgKwIhAPGIQwsNf3PPhYdycx2aCOeTeneOkz1XJTTYGfmIDn%2BSKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoEtGOK1%2B0wyNMGF4q3AM265ABl7XvCcDaL3EauKL0e1qu2YN5O1x9N7Q7i6Y7voyfVUyoVCzJ4VnHF8sCBFHVkd3kH%2B4iohCIKfj6KCywFLsSvH9m8whZUSn8skGKycuTKyyLwzFVpj%2Bi0JAx0zsHHT0X1Cl2c5kVRXThptfrwV29e2PqwUcBKOEsMQhE2lh51EoUdXd3ubyj%2BgO0oKC8l%2BssojeFhFLhBDE7WSUiqAswzZ6JVXluBXknmNr7SjuE7LNhi5BsUWfemvmwVYUb1KVJCWYKUbSiVsoa39keL8Ag1apc2xGWoJMb76EK3jOpj6%2FusvxMgEZRXINPKDyqxpG7GRg2utYQrIQ%2FLyJpXCbQQvgV7Qlkr7cig0IzKKk1UsdMFK7W9xYwsT40oUq%2FivEGTeqD%2FvW4%2FQ85RQOx44c4BVOeH0FxMAXBKs7wcwbEBHnamEwj3IHVsfSYqoQ7IimlgZcXzsg3O%2FPz0JhjOI7or25ZdHcTBwXdtzmztmS9NfZXfLbi31WABGzrp1ShsaJi%2B3ZsX3zemwh8eysqnfFZ4ca%2Bpyk4YN3CGtVHMtj79oVu3xNpQXAPwEQQdXwpg3I9VNNOE2OtRjsXugKH2C37eSF46T9NiQtFFRWgnOnoc%2Bx%2B33y12k%2FMozDmptzKBjqkAclTAIWUQULidaavFE7fDV34IMkySYEm6lclQS81usp7dHkMFqVr8qqG%2BfnEPZqRqi2geTKipOeUZh%2BNf%2Fl41etrCe7Fzwzq1d9H8i7n1FPSCmOmurn0drk5ROaWcdjwdiaEjHJjjJTAqZR6UlxXfelBsw3SFp%2BLFV2zhrUvC0i%2F36thOBJP6yENTA4XHXjBipxzkqSLs2Lyw82uL78vxzJV9kx7&X-Amz-Signature=49fc676001a234f93a9fe81965d75a6f1b9edce8954b48fb5eacfddfa81d2918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBV5XD2%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDMyT%2FbhIkFFtvOA6%2Bs9F8FDG3L1v9BXd2fDsUOR2CgKwIhAPGIQwsNf3PPhYdycx2aCOeTeneOkz1XJTTYGfmIDn%2BSKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoEtGOK1%2B0wyNMGF4q3AM265ABl7XvCcDaL3EauKL0e1qu2YN5O1x9N7Q7i6Y7voyfVUyoVCzJ4VnHF8sCBFHVkd3kH%2B4iohCIKfj6KCywFLsSvH9m8whZUSn8skGKycuTKyyLwzFVpj%2Bi0JAx0zsHHT0X1Cl2c5kVRXThptfrwV29e2PqwUcBKOEsMQhE2lh51EoUdXd3ubyj%2BgO0oKC8l%2BssojeFhFLhBDE7WSUiqAswzZ6JVXluBXknmNr7SjuE7LNhi5BsUWfemvmwVYUb1KVJCWYKUbSiVsoa39keL8Ag1apc2xGWoJMb76EK3jOpj6%2FusvxMgEZRXINPKDyqxpG7GRg2utYQrIQ%2FLyJpXCbQQvgV7Qlkr7cig0IzKKk1UsdMFK7W9xYwsT40oUq%2FivEGTeqD%2FvW4%2FQ85RQOx44c4BVOeH0FxMAXBKs7wcwbEBHnamEwj3IHVsfSYqoQ7IimlgZcXzsg3O%2FPz0JhjOI7or25ZdHcTBwXdtzmztmS9NfZXfLbi31WABGzrp1ShsaJi%2B3ZsX3zemwh8eysqnfFZ4ca%2Bpyk4YN3CGtVHMtj79oVu3xNpQXAPwEQQdXwpg3I9VNNOE2OtRjsXugKH2C37eSF46T9NiQtFFRWgnOnoc%2Bx%2B33y12k%2FMozDmptzKBjqkAclTAIWUQULidaavFE7fDV34IMkySYEm6lclQS81usp7dHkMFqVr8qqG%2BfnEPZqRqi2geTKipOeUZh%2BNf%2Fl41etrCe7Fzwzq1d9H8i7n1FPSCmOmurn0drk5ROaWcdjwdiaEjHJjjJTAqZR6UlxXfelBsw3SFp%2BLFV2zhrUvC0i%2F36thOBJP6yENTA4XHXjBipxzkqSLs2Lyw82uL78vxzJV9kx7&X-Amz-Signature=04b0d6c6df7664557b0a85a68aaeacecc703e0e9cdfa3e4f51e7bede5b258b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X337KZAT%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCxCP3FUNgTa2lbtX11Txxc4%2BHPF7DK357sHpWfjOsvGQIgBWY2OJ8o3EnlTGo3T8UmaBg7nNxhpEMDj3LW3TYmtycqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOa2g0tpljvPbhqCCrcAxUiXp6HNz6LxsFA3vuVmCnsA%2FfW7FQYYoliyEWqMaD%2FyUmBD1rDT0lkrgJ5Shf%2FN%2BT0BWIN%2BWFt0fNsvud3DR2nrYdosWapvx7%2Fb%2FmiGHmH1sk6kI0QWF4PNkGoQi734bxkK6YST9hw9sJoUyXebbI5wXOZmJsqXttRqcirQsldAZHJgg1byS%2FoLgbRVeVxvLCDPKosPg2eX9bTcwZyKbX3ENma49PpV5WR5z3hkxW7USb2tYp4dQVULB4vR27EIEhRgA%2FvDhGfqJenrLADVktEkENpEZ4G3wCljjY5vH1awwJa0uE7qyhptKxjvY%2B83SHybSweKLotXFa%2B5SUdB4ZN08PI3egVVCl9c1NvLAbmOEZ3bJHskRfEIVjVC4jqT1EDnoDF%2BORGpC%2FXRaL9%2FZqUdB51ZASLN2QnWxwZ9OjKO%2FaZyL4sPbSSNd%2BS3kZoC0q%2BVgIh25sE4rf8gtg4kcfwBiStGTGCAiPiA7H7ueCggCEYGVLmn%2FiytjfGKTFUlWCA5VfoJZNWhuHzdZJihE7Z%2Bek42ptFM1DI7EDfPwA33QxP7m3sSav7b1czT3TXokP9vzPJ6nEfP%2B7HlBzc%2B3rjGks5jH367yIiGaV6DPzlrTKN2czTx996isyhMIag3MoGOqUByxOUTzhGcxb2ohPgKPUeJOUmRJG1V3gOalGIKnEIiPRA1VWapXvkmVr8IbSv5Kl81gMMcbRpQblN2wGivz%2F5rO4uAGad0YMtpEzsKqGuTlnnHzBWzgAacMDzss4a6YYp2HpQPy2bXl07mecrM8ou5G9JPr8xvgNg%2B90Yq1WdByP7OBjzEMAwMQsSKTNOMY1CcUUVxmpLVQqp3%2BKkY%2BGc9XNyb%2F%2FX&X-Amz-Signature=20a5cfd04d7c7c9eba39aad666e28ceca3cda806a24f1daf57f67a7b24224a5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBV5XD2%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDMyT%2FbhIkFFtvOA6%2Bs9F8FDG3L1v9BXd2fDsUOR2CgKwIhAPGIQwsNf3PPhYdycx2aCOeTeneOkz1XJTTYGfmIDn%2BSKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoEtGOK1%2B0wyNMGF4q3AM265ABl7XvCcDaL3EauKL0e1qu2YN5O1x9N7Q7i6Y7voyfVUyoVCzJ4VnHF8sCBFHVkd3kH%2B4iohCIKfj6KCywFLsSvH9m8whZUSn8skGKycuTKyyLwzFVpj%2Bi0JAx0zsHHT0X1Cl2c5kVRXThptfrwV29e2PqwUcBKOEsMQhE2lh51EoUdXd3ubyj%2BgO0oKC8l%2BssojeFhFLhBDE7WSUiqAswzZ6JVXluBXknmNr7SjuE7LNhi5BsUWfemvmwVYUb1KVJCWYKUbSiVsoa39keL8Ag1apc2xGWoJMb76EK3jOpj6%2FusvxMgEZRXINPKDyqxpG7GRg2utYQrIQ%2FLyJpXCbQQvgV7Qlkr7cig0IzKKk1UsdMFK7W9xYwsT40oUq%2FivEGTeqD%2FvW4%2FQ85RQOx44c4BVOeH0FxMAXBKs7wcwbEBHnamEwj3IHVsfSYqoQ7IimlgZcXzsg3O%2FPz0JhjOI7or25ZdHcTBwXdtzmztmS9NfZXfLbi31WABGzrp1ShsaJi%2B3ZsX3zemwh8eysqnfFZ4ca%2Bpyk4YN3CGtVHMtj79oVu3xNpQXAPwEQQdXwpg3I9VNNOE2OtRjsXugKH2C37eSF46T9NiQtFFRWgnOnoc%2Bx%2B33y12k%2FMozDmptzKBjqkAclTAIWUQULidaavFE7fDV34IMkySYEm6lclQS81usp7dHkMFqVr8qqG%2BfnEPZqRqi2geTKipOeUZh%2BNf%2Fl41etrCe7Fzwzq1d9H8i7n1FPSCmOmurn0drk5ROaWcdjwdiaEjHJjjJTAqZR6UlxXfelBsw3SFp%2BLFV2zhrUvC0i%2F36thOBJP6yENTA4XHXjBipxzkqSLs2Lyw82uL78vxzJV9kx7&X-Amz-Signature=27c4cd4becc7788a3d005124b7ca5c6f9f780d1a43f7f624e2cc409ed74b5fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBV5XD2%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDMyT%2FbhIkFFtvOA6%2Bs9F8FDG3L1v9BXd2fDsUOR2CgKwIhAPGIQwsNf3PPhYdycx2aCOeTeneOkz1XJTTYGfmIDn%2BSKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoEtGOK1%2B0wyNMGF4q3AM265ABl7XvCcDaL3EauKL0e1qu2YN5O1x9N7Q7i6Y7voyfVUyoVCzJ4VnHF8sCBFHVkd3kH%2B4iohCIKfj6KCywFLsSvH9m8whZUSn8skGKycuTKyyLwzFVpj%2Bi0JAx0zsHHT0X1Cl2c5kVRXThptfrwV29e2PqwUcBKOEsMQhE2lh51EoUdXd3ubyj%2BgO0oKC8l%2BssojeFhFLhBDE7WSUiqAswzZ6JVXluBXknmNr7SjuE7LNhi5BsUWfemvmwVYUb1KVJCWYKUbSiVsoa39keL8Ag1apc2xGWoJMb76EK3jOpj6%2FusvxMgEZRXINPKDyqxpG7GRg2utYQrIQ%2FLyJpXCbQQvgV7Qlkr7cig0IzKKk1UsdMFK7W9xYwsT40oUq%2FivEGTeqD%2FvW4%2FQ85RQOx44c4BVOeH0FxMAXBKs7wcwbEBHnamEwj3IHVsfSYqoQ7IimlgZcXzsg3O%2FPz0JhjOI7or25ZdHcTBwXdtzmztmS9NfZXfLbi31WABGzrp1ShsaJi%2B3ZsX3zemwh8eysqnfFZ4ca%2Bpyk4YN3CGtVHMtj79oVu3xNpQXAPwEQQdXwpg3I9VNNOE2OtRjsXugKH2C37eSF46T9NiQtFFRWgnOnoc%2Bx%2B33y12k%2FMozDmptzKBjqkAclTAIWUQULidaavFE7fDV34IMkySYEm6lclQS81usp7dHkMFqVr8qqG%2BfnEPZqRqi2geTKipOeUZh%2BNf%2Fl41etrCe7Fzwzq1d9H8i7n1FPSCmOmurn0drk5ROaWcdjwdiaEjHJjjJTAqZR6UlxXfelBsw3SFp%2BLFV2zhrUvC0i%2F36thOBJP6yENTA4XHXjBipxzkqSLs2Lyw82uL78vxzJV9kx7&X-Amz-Signature=09b6d6c3270815bb2a153ffe50cb95b563e684d308133dcb976fa7c944b0c542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBV5XD2%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDMyT%2FbhIkFFtvOA6%2Bs9F8FDG3L1v9BXd2fDsUOR2CgKwIhAPGIQwsNf3PPhYdycx2aCOeTeneOkz1XJTTYGfmIDn%2BSKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoEtGOK1%2B0wyNMGF4q3AM265ABl7XvCcDaL3EauKL0e1qu2YN5O1x9N7Q7i6Y7voyfVUyoVCzJ4VnHF8sCBFHVkd3kH%2B4iohCIKfj6KCywFLsSvH9m8whZUSn8skGKycuTKyyLwzFVpj%2Bi0JAx0zsHHT0X1Cl2c5kVRXThptfrwV29e2PqwUcBKOEsMQhE2lh51EoUdXd3ubyj%2BgO0oKC8l%2BssojeFhFLhBDE7WSUiqAswzZ6JVXluBXknmNr7SjuE7LNhi5BsUWfemvmwVYUb1KVJCWYKUbSiVsoa39keL8Ag1apc2xGWoJMb76EK3jOpj6%2FusvxMgEZRXINPKDyqxpG7GRg2utYQrIQ%2FLyJpXCbQQvgV7Qlkr7cig0IzKKk1UsdMFK7W9xYwsT40oUq%2FivEGTeqD%2FvW4%2FQ85RQOx44c4BVOeH0FxMAXBKs7wcwbEBHnamEwj3IHVsfSYqoQ7IimlgZcXzsg3O%2FPz0JhjOI7or25ZdHcTBwXdtzmztmS9NfZXfLbi31WABGzrp1ShsaJi%2B3ZsX3zemwh8eysqnfFZ4ca%2Bpyk4YN3CGtVHMtj79oVu3xNpQXAPwEQQdXwpg3I9VNNOE2OtRjsXugKH2C37eSF46T9NiQtFFRWgnOnoc%2Bx%2B33y12k%2FMozDmptzKBjqkAclTAIWUQULidaavFE7fDV34IMkySYEm6lclQS81usp7dHkMFqVr8qqG%2BfnEPZqRqi2geTKipOeUZh%2BNf%2Fl41etrCe7Fzwzq1d9H8i7n1FPSCmOmurn0drk5ROaWcdjwdiaEjHJjjJTAqZR6UlxXfelBsw3SFp%2BLFV2zhrUvC0i%2F36thOBJP6yENTA4XHXjBipxzkqSLs2Lyw82uL78vxzJV9kx7&X-Amz-Signature=49fc676001a234f93a9fe81965d75a6f1b9edce8954b48fb5eacfddfa81d2918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBV5XD2%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDMyT%2FbhIkFFtvOA6%2Bs9F8FDG3L1v9BXd2fDsUOR2CgKwIhAPGIQwsNf3PPhYdycx2aCOeTeneOkz1XJTTYGfmIDn%2BSKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoEtGOK1%2B0wyNMGF4q3AM265ABl7XvCcDaL3EauKL0e1qu2YN5O1x9N7Q7i6Y7voyfVUyoVCzJ4VnHF8sCBFHVkd3kH%2B4iohCIKfj6KCywFLsSvH9m8whZUSn8skGKycuTKyyLwzFVpj%2Bi0JAx0zsHHT0X1Cl2c5kVRXThptfrwV29e2PqwUcBKOEsMQhE2lh51EoUdXd3ubyj%2BgO0oKC8l%2BssojeFhFLhBDE7WSUiqAswzZ6JVXluBXknmNr7SjuE7LNhi5BsUWfemvmwVYUb1KVJCWYKUbSiVsoa39keL8Ag1apc2xGWoJMb76EK3jOpj6%2FusvxMgEZRXINPKDyqxpG7GRg2utYQrIQ%2FLyJpXCbQQvgV7Qlkr7cig0IzKKk1UsdMFK7W9xYwsT40oUq%2FivEGTeqD%2FvW4%2FQ85RQOx44c4BVOeH0FxMAXBKs7wcwbEBHnamEwj3IHVsfSYqoQ7IimlgZcXzsg3O%2FPz0JhjOI7or25ZdHcTBwXdtzmztmS9NfZXfLbi31WABGzrp1ShsaJi%2B3ZsX3zemwh8eysqnfFZ4ca%2Bpyk4YN3CGtVHMtj79oVu3xNpQXAPwEQQdXwpg3I9VNNOE2OtRjsXugKH2C37eSF46T9NiQtFFRWgnOnoc%2Bx%2B33y12k%2FMozDmptzKBjqkAclTAIWUQULidaavFE7fDV34IMkySYEm6lclQS81usp7dHkMFqVr8qqG%2BfnEPZqRqi2geTKipOeUZh%2BNf%2Fl41etrCe7Fzwzq1d9H8i7n1FPSCmOmurn0drk5ROaWcdjwdiaEjHJjjJTAqZR6UlxXfelBsw3SFp%2BLFV2zhrUvC0i%2F36thOBJP6yENTA4XHXjBipxzkqSLs2Lyw82uL78vxzJV9kx7&X-Amz-Signature=5f7284e74b147bafd17bbbd28dc2a921a84bf25fcadd4ce01b3f0676f5918cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBV5XD2%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDMyT%2FbhIkFFtvOA6%2Bs9F8FDG3L1v9BXd2fDsUOR2CgKwIhAPGIQwsNf3PPhYdycx2aCOeTeneOkz1XJTTYGfmIDn%2BSKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoEtGOK1%2B0wyNMGF4q3AM265ABl7XvCcDaL3EauKL0e1qu2YN5O1x9N7Q7i6Y7voyfVUyoVCzJ4VnHF8sCBFHVkd3kH%2B4iohCIKfj6KCywFLsSvH9m8whZUSn8skGKycuTKyyLwzFVpj%2Bi0JAx0zsHHT0X1Cl2c5kVRXThptfrwV29e2PqwUcBKOEsMQhE2lh51EoUdXd3ubyj%2BgO0oKC8l%2BssojeFhFLhBDE7WSUiqAswzZ6JVXluBXknmNr7SjuE7LNhi5BsUWfemvmwVYUb1KVJCWYKUbSiVsoa39keL8Ag1apc2xGWoJMb76EK3jOpj6%2FusvxMgEZRXINPKDyqxpG7GRg2utYQrIQ%2FLyJpXCbQQvgV7Qlkr7cig0IzKKk1UsdMFK7W9xYwsT40oUq%2FivEGTeqD%2FvW4%2FQ85RQOx44c4BVOeH0FxMAXBKs7wcwbEBHnamEwj3IHVsfSYqoQ7IimlgZcXzsg3O%2FPz0JhjOI7or25ZdHcTBwXdtzmztmS9NfZXfLbi31WABGzrp1ShsaJi%2B3ZsX3zemwh8eysqnfFZ4ca%2Bpyk4YN3CGtVHMtj79oVu3xNpQXAPwEQQdXwpg3I9VNNOE2OtRjsXugKH2C37eSF46T9NiQtFFRWgnOnoc%2Bx%2B33y12k%2FMozDmptzKBjqkAclTAIWUQULidaavFE7fDV34IMkySYEm6lclQS81usp7dHkMFqVr8qqG%2BfnEPZqRqi2geTKipOeUZh%2BNf%2Fl41etrCe7Fzwzq1d9H8i7n1FPSCmOmurn0drk5ROaWcdjwdiaEjHJjjJTAqZR6UlxXfelBsw3SFp%2BLFV2zhrUvC0i%2F36thOBJP6yENTA4XHXjBipxzkqSLs2Lyw82uL78vxzJV9kx7&X-Amz-Signature=874b5cce23b099b0680fb3de845d000595ce0ad6977ecd9d776e5076d6641981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBV5XD2%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDMyT%2FbhIkFFtvOA6%2Bs9F8FDG3L1v9BXd2fDsUOR2CgKwIhAPGIQwsNf3PPhYdycx2aCOeTeneOkz1XJTTYGfmIDn%2BSKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoEtGOK1%2B0wyNMGF4q3AM265ABl7XvCcDaL3EauKL0e1qu2YN5O1x9N7Q7i6Y7voyfVUyoVCzJ4VnHF8sCBFHVkd3kH%2B4iohCIKfj6KCywFLsSvH9m8whZUSn8skGKycuTKyyLwzFVpj%2Bi0JAx0zsHHT0X1Cl2c5kVRXThptfrwV29e2PqwUcBKOEsMQhE2lh51EoUdXd3ubyj%2BgO0oKC8l%2BssojeFhFLhBDE7WSUiqAswzZ6JVXluBXknmNr7SjuE7LNhi5BsUWfemvmwVYUb1KVJCWYKUbSiVsoa39keL8Ag1apc2xGWoJMb76EK3jOpj6%2FusvxMgEZRXINPKDyqxpG7GRg2utYQrIQ%2FLyJpXCbQQvgV7Qlkr7cig0IzKKk1UsdMFK7W9xYwsT40oUq%2FivEGTeqD%2FvW4%2FQ85RQOx44c4BVOeH0FxMAXBKs7wcwbEBHnamEwj3IHVsfSYqoQ7IimlgZcXzsg3O%2FPz0JhjOI7or25ZdHcTBwXdtzmztmS9NfZXfLbi31WABGzrp1ShsaJi%2B3ZsX3zemwh8eysqnfFZ4ca%2Bpyk4YN3CGtVHMtj79oVu3xNpQXAPwEQQdXwpg3I9VNNOE2OtRjsXugKH2C37eSF46T9NiQtFFRWgnOnoc%2Bx%2B33y12k%2FMozDmptzKBjqkAclTAIWUQULidaavFE7fDV34IMkySYEm6lclQS81usp7dHkMFqVr8qqG%2BfnEPZqRqi2geTKipOeUZh%2BNf%2Fl41etrCe7Fzwzq1d9H8i7n1FPSCmOmurn0drk5ROaWcdjwdiaEjHJjjJTAqZR6UlxXfelBsw3SFp%2BLFV2zhrUvC0i%2F36thOBJP6yENTA4XHXjBipxzkqSLs2Lyw82uL78vxzJV9kx7&X-Amz-Signature=c9394a14d6acbc03c066f5f2778c6276167d4c9bc9536d019c79b083c7fda32c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


