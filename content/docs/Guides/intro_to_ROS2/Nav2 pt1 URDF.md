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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZQMAB7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChXzpVIJkJ1XtKgcZiQzr1pgaQOVF2gmJw9kFYB4G5mAIhAOs0ePi0dNQXE3HCOYbGT4%2BmCd5aOd3uewy7jQ5Qi5fHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiwNtaOehbhSt2RBMq3AMKp16Q30nNtW0GDkE8phvCH9zCn03qiJzZ83zDN%2Bu2VEh6gs9PPyOCXu%2FxaZyzeGPy9LNrYJAXZrwdyMw320cmnCDb5DQntG%2F7wuUDrF43KVS70n6%2BjuB8ql7pkCEgTj0XQXd0b1UCyvk%2B%2FNdTSVVfS4HvxAbbqsVj9oDCkFSW0fTnihpn7MXbaARn4SfeyOU%2BesI%2BaobgZj9itjpBYCArXibL19hHViR89uBLKmJPbuds1UyKaHHkzaDew68T8yOvotGI%2F7KoF%2B5W4%2F3gnav1kRPFkTrY7rtFx4hQPdcFDJzjqAqGba7Wi%2BTtu%2BKMXlBsj%2BwV5l%2FhON33n7e36fK8LunLj%2FY1rk12wS%2B23J9GO2kKhD49x6%2B4mGrF%2FH3i8kmDrwHvB7RwhmHRo6%2BKtHpUXuSI0VkIMhEDgG0DUpHhOoB2Gt47ufCjBeYSxn9wmYxvhgwaEeHsTaDznRU30pZ9%2FECN7oi8em9cXxZ5lEUNVQ4WFssVxlzKc0oGK8JhSfdy8OTNAHNRf0u8RnK%2FwhWVs%2Bsnk%2BvTpuqqcaG7i4m4i%2Fd7uD5LB3SIHb8zkVEKK3trmcvfHqQomIuvM7KdVsvpuPSFTOpxsL9cIj6%2FGFAkGyBQx1zDbGLJnKxwBzDyxNvEBjqkAcLUiWMfSLN4Hx6KHRfG6cXGQvFTHv0Gn%2B6NdCFNz0nzm7i9IJJlCRfzoTLZwl7gTw1Dta0MWHLZpePJU%2BDkNUqKCyaPCBWTWHUQ%2FwBJLbCSpzmYsqjDmE0K8hn1Ll2qzNLoF%2Bjjj25KmxYLEX7y%2F4w2KaXOd1dDRWE3BK7SC1EsyCZYlrMo%2FMhxWoyRQOthxBgf28Ii97HchER8Yi9ZXmrLRA1I&X-Amz-Signature=c9d82424d4d4d25ccc049b3104ea50da6583e4f84efe11c9c6ed61ef7155ba90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZQMAB7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChXzpVIJkJ1XtKgcZiQzr1pgaQOVF2gmJw9kFYB4G5mAIhAOs0ePi0dNQXE3HCOYbGT4%2BmCd5aOd3uewy7jQ5Qi5fHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiwNtaOehbhSt2RBMq3AMKp16Q30nNtW0GDkE8phvCH9zCn03qiJzZ83zDN%2Bu2VEh6gs9PPyOCXu%2FxaZyzeGPy9LNrYJAXZrwdyMw320cmnCDb5DQntG%2F7wuUDrF43KVS70n6%2BjuB8ql7pkCEgTj0XQXd0b1UCyvk%2B%2FNdTSVVfS4HvxAbbqsVj9oDCkFSW0fTnihpn7MXbaARn4SfeyOU%2BesI%2BaobgZj9itjpBYCArXibL19hHViR89uBLKmJPbuds1UyKaHHkzaDew68T8yOvotGI%2F7KoF%2B5W4%2F3gnav1kRPFkTrY7rtFx4hQPdcFDJzjqAqGba7Wi%2BTtu%2BKMXlBsj%2BwV5l%2FhON33n7e36fK8LunLj%2FY1rk12wS%2B23J9GO2kKhD49x6%2B4mGrF%2FH3i8kmDrwHvB7RwhmHRo6%2BKtHpUXuSI0VkIMhEDgG0DUpHhOoB2Gt47ufCjBeYSxn9wmYxvhgwaEeHsTaDznRU30pZ9%2FECN7oi8em9cXxZ5lEUNVQ4WFssVxlzKc0oGK8JhSfdy8OTNAHNRf0u8RnK%2FwhWVs%2Bsnk%2BvTpuqqcaG7i4m4i%2Fd7uD5LB3SIHb8zkVEKK3trmcvfHqQomIuvM7KdVsvpuPSFTOpxsL9cIj6%2FGFAkGyBQx1zDbGLJnKxwBzDyxNvEBjqkAcLUiWMfSLN4Hx6KHRfG6cXGQvFTHv0Gn%2B6NdCFNz0nzm7i9IJJlCRfzoTLZwl7gTw1Dta0MWHLZpePJU%2BDkNUqKCyaPCBWTWHUQ%2FwBJLbCSpzmYsqjDmE0K8hn1Ll2qzNLoF%2Bjjj25KmxYLEX7y%2F4w2KaXOd1dDRWE3BK7SC1EsyCZYlrMo%2FMhxWoyRQOthxBgf28Ii97HchER8Yi9ZXmrLRA1I&X-Amz-Signature=8e95672efcc7ced9f0043a420624705a0bc669bc47d2dee98bb84a28a2d13256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZQMAB7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChXzpVIJkJ1XtKgcZiQzr1pgaQOVF2gmJw9kFYB4G5mAIhAOs0ePi0dNQXE3HCOYbGT4%2BmCd5aOd3uewy7jQ5Qi5fHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiwNtaOehbhSt2RBMq3AMKp16Q30nNtW0GDkE8phvCH9zCn03qiJzZ83zDN%2Bu2VEh6gs9PPyOCXu%2FxaZyzeGPy9LNrYJAXZrwdyMw320cmnCDb5DQntG%2F7wuUDrF43KVS70n6%2BjuB8ql7pkCEgTj0XQXd0b1UCyvk%2B%2FNdTSVVfS4HvxAbbqsVj9oDCkFSW0fTnihpn7MXbaARn4SfeyOU%2BesI%2BaobgZj9itjpBYCArXibL19hHViR89uBLKmJPbuds1UyKaHHkzaDew68T8yOvotGI%2F7KoF%2B5W4%2F3gnav1kRPFkTrY7rtFx4hQPdcFDJzjqAqGba7Wi%2BTtu%2BKMXlBsj%2BwV5l%2FhON33n7e36fK8LunLj%2FY1rk12wS%2B23J9GO2kKhD49x6%2B4mGrF%2FH3i8kmDrwHvB7RwhmHRo6%2BKtHpUXuSI0VkIMhEDgG0DUpHhOoB2Gt47ufCjBeYSxn9wmYxvhgwaEeHsTaDznRU30pZ9%2FECN7oi8em9cXxZ5lEUNVQ4WFssVxlzKc0oGK8JhSfdy8OTNAHNRf0u8RnK%2FwhWVs%2Bsnk%2BvTpuqqcaG7i4m4i%2Fd7uD5LB3SIHb8zkVEKK3trmcvfHqQomIuvM7KdVsvpuPSFTOpxsL9cIj6%2FGFAkGyBQx1zDbGLJnKxwBzDyxNvEBjqkAcLUiWMfSLN4Hx6KHRfG6cXGQvFTHv0Gn%2B6NdCFNz0nzm7i9IJJlCRfzoTLZwl7gTw1Dta0MWHLZpePJU%2BDkNUqKCyaPCBWTWHUQ%2FwBJLbCSpzmYsqjDmE0K8hn1Ll2qzNLoF%2Bjjj25KmxYLEX7y%2F4w2KaXOd1dDRWE3BK7SC1EsyCZYlrMo%2FMhxWoyRQOthxBgf28Ii97HchER8Yi9ZXmrLRA1I&X-Amz-Signature=81e16bc531d2e858f5e1713a688f4ed404361419fff8b52677810c3719458a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZQMAB7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChXzpVIJkJ1XtKgcZiQzr1pgaQOVF2gmJw9kFYB4G5mAIhAOs0ePi0dNQXE3HCOYbGT4%2BmCd5aOd3uewy7jQ5Qi5fHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiwNtaOehbhSt2RBMq3AMKp16Q30nNtW0GDkE8phvCH9zCn03qiJzZ83zDN%2Bu2VEh6gs9PPyOCXu%2FxaZyzeGPy9LNrYJAXZrwdyMw320cmnCDb5DQntG%2F7wuUDrF43KVS70n6%2BjuB8ql7pkCEgTj0XQXd0b1UCyvk%2B%2FNdTSVVfS4HvxAbbqsVj9oDCkFSW0fTnihpn7MXbaARn4SfeyOU%2BesI%2BaobgZj9itjpBYCArXibL19hHViR89uBLKmJPbuds1UyKaHHkzaDew68T8yOvotGI%2F7KoF%2B5W4%2F3gnav1kRPFkTrY7rtFx4hQPdcFDJzjqAqGba7Wi%2BTtu%2BKMXlBsj%2BwV5l%2FhON33n7e36fK8LunLj%2FY1rk12wS%2B23J9GO2kKhD49x6%2B4mGrF%2FH3i8kmDrwHvB7RwhmHRo6%2BKtHpUXuSI0VkIMhEDgG0DUpHhOoB2Gt47ufCjBeYSxn9wmYxvhgwaEeHsTaDznRU30pZ9%2FECN7oi8em9cXxZ5lEUNVQ4WFssVxlzKc0oGK8JhSfdy8OTNAHNRf0u8RnK%2FwhWVs%2Bsnk%2BvTpuqqcaG7i4m4i%2Fd7uD5LB3SIHb8zkVEKK3trmcvfHqQomIuvM7KdVsvpuPSFTOpxsL9cIj6%2FGFAkGyBQx1zDbGLJnKxwBzDyxNvEBjqkAcLUiWMfSLN4Hx6KHRfG6cXGQvFTHv0Gn%2B6NdCFNz0nzm7i9IJJlCRfzoTLZwl7gTw1Dta0MWHLZpePJU%2BDkNUqKCyaPCBWTWHUQ%2FwBJLbCSpzmYsqjDmE0K8hn1Ll2qzNLoF%2Bjjj25KmxYLEX7y%2F4w2KaXOd1dDRWE3BK7SC1EsyCZYlrMo%2FMhxWoyRQOthxBgf28Ii97HchER8Yi9ZXmrLRA1I&X-Amz-Signature=c35d4d9f5b4abc343a0243966d5f7ca0d33874cb1e607529601005725311aef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZQMAB7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChXzpVIJkJ1XtKgcZiQzr1pgaQOVF2gmJw9kFYB4G5mAIhAOs0ePi0dNQXE3HCOYbGT4%2BmCd5aOd3uewy7jQ5Qi5fHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiwNtaOehbhSt2RBMq3AMKp16Q30nNtW0GDkE8phvCH9zCn03qiJzZ83zDN%2Bu2VEh6gs9PPyOCXu%2FxaZyzeGPy9LNrYJAXZrwdyMw320cmnCDb5DQntG%2F7wuUDrF43KVS70n6%2BjuB8ql7pkCEgTj0XQXd0b1UCyvk%2B%2FNdTSVVfS4HvxAbbqsVj9oDCkFSW0fTnihpn7MXbaARn4SfeyOU%2BesI%2BaobgZj9itjpBYCArXibL19hHViR89uBLKmJPbuds1UyKaHHkzaDew68T8yOvotGI%2F7KoF%2B5W4%2F3gnav1kRPFkTrY7rtFx4hQPdcFDJzjqAqGba7Wi%2BTtu%2BKMXlBsj%2BwV5l%2FhON33n7e36fK8LunLj%2FY1rk12wS%2B23J9GO2kKhD49x6%2B4mGrF%2FH3i8kmDrwHvB7RwhmHRo6%2BKtHpUXuSI0VkIMhEDgG0DUpHhOoB2Gt47ufCjBeYSxn9wmYxvhgwaEeHsTaDznRU30pZ9%2FECN7oi8em9cXxZ5lEUNVQ4WFssVxlzKc0oGK8JhSfdy8OTNAHNRf0u8RnK%2FwhWVs%2Bsnk%2BvTpuqqcaG7i4m4i%2Fd7uD5LB3SIHb8zkVEKK3trmcvfHqQomIuvM7KdVsvpuPSFTOpxsL9cIj6%2FGFAkGyBQx1zDbGLJnKxwBzDyxNvEBjqkAcLUiWMfSLN4Hx6KHRfG6cXGQvFTHv0Gn%2B6NdCFNz0nzm7i9IJJlCRfzoTLZwl7gTw1Dta0MWHLZpePJU%2BDkNUqKCyaPCBWTWHUQ%2FwBJLbCSpzmYsqjDmE0K8hn1Ll2qzNLoF%2Bjjj25KmxYLEX7y%2F4w2KaXOd1dDRWE3BK7SC1EsyCZYlrMo%2FMhxWoyRQOthxBgf28Ii97HchER8Yi9ZXmrLRA1I&X-Amz-Signature=e05e6a813acf78721cb9d464cd4102363823d4ad72e8b21380ce5186fcac81c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZQMAB7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChXzpVIJkJ1XtKgcZiQzr1pgaQOVF2gmJw9kFYB4G5mAIhAOs0ePi0dNQXE3HCOYbGT4%2BmCd5aOd3uewy7jQ5Qi5fHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiwNtaOehbhSt2RBMq3AMKp16Q30nNtW0GDkE8phvCH9zCn03qiJzZ83zDN%2Bu2VEh6gs9PPyOCXu%2FxaZyzeGPy9LNrYJAXZrwdyMw320cmnCDb5DQntG%2F7wuUDrF43KVS70n6%2BjuB8ql7pkCEgTj0XQXd0b1UCyvk%2B%2FNdTSVVfS4HvxAbbqsVj9oDCkFSW0fTnihpn7MXbaARn4SfeyOU%2BesI%2BaobgZj9itjpBYCArXibL19hHViR89uBLKmJPbuds1UyKaHHkzaDew68T8yOvotGI%2F7KoF%2B5W4%2F3gnav1kRPFkTrY7rtFx4hQPdcFDJzjqAqGba7Wi%2BTtu%2BKMXlBsj%2BwV5l%2FhON33n7e36fK8LunLj%2FY1rk12wS%2B23J9GO2kKhD49x6%2B4mGrF%2FH3i8kmDrwHvB7RwhmHRo6%2BKtHpUXuSI0VkIMhEDgG0DUpHhOoB2Gt47ufCjBeYSxn9wmYxvhgwaEeHsTaDznRU30pZ9%2FECN7oi8em9cXxZ5lEUNVQ4WFssVxlzKc0oGK8JhSfdy8OTNAHNRf0u8RnK%2FwhWVs%2Bsnk%2BvTpuqqcaG7i4m4i%2Fd7uD5LB3SIHb8zkVEKK3trmcvfHqQomIuvM7KdVsvpuPSFTOpxsL9cIj6%2FGFAkGyBQx1zDbGLJnKxwBzDyxNvEBjqkAcLUiWMfSLN4Hx6KHRfG6cXGQvFTHv0Gn%2B6NdCFNz0nzm7i9IJJlCRfzoTLZwl7gTw1Dta0MWHLZpePJU%2BDkNUqKCyaPCBWTWHUQ%2FwBJLbCSpzmYsqjDmE0K8hn1Ll2qzNLoF%2Bjjj25KmxYLEX7y%2F4w2KaXOd1dDRWE3BK7SC1EsyCZYlrMo%2FMhxWoyRQOthxBgf28Ii97HchER8Yi9ZXmrLRA1I&X-Amz-Signature=6c3a7a10976516a4c7a2fb9273f10cf1d38b60011da90d4d5e04efdd5453a764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZQMAB7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChXzpVIJkJ1XtKgcZiQzr1pgaQOVF2gmJw9kFYB4G5mAIhAOs0ePi0dNQXE3HCOYbGT4%2BmCd5aOd3uewy7jQ5Qi5fHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiwNtaOehbhSt2RBMq3AMKp16Q30nNtW0GDkE8phvCH9zCn03qiJzZ83zDN%2Bu2VEh6gs9PPyOCXu%2FxaZyzeGPy9LNrYJAXZrwdyMw320cmnCDb5DQntG%2F7wuUDrF43KVS70n6%2BjuB8ql7pkCEgTj0XQXd0b1UCyvk%2B%2FNdTSVVfS4HvxAbbqsVj9oDCkFSW0fTnihpn7MXbaARn4SfeyOU%2BesI%2BaobgZj9itjpBYCArXibL19hHViR89uBLKmJPbuds1UyKaHHkzaDew68T8yOvotGI%2F7KoF%2B5W4%2F3gnav1kRPFkTrY7rtFx4hQPdcFDJzjqAqGba7Wi%2BTtu%2BKMXlBsj%2BwV5l%2FhON33n7e36fK8LunLj%2FY1rk12wS%2B23J9GO2kKhD49x6%2B4mGrF%2FH3i8kmDrwHvB7RwhmHRo6%2BKtHpUXuSI0VkIMhEDgG0DUpHhOoB2Gt47ufCjBeYSxn9wmYxvhgwaEeHsTaDznRU30pZ9%2FECN7oi8em9cXxZ5lEUNVQ4WFssVxlzKc0oGK8JhSfdy8OTNAHNRf0u8RnK%2FwhWVs%2Bsnk%2BvTpuqqcaG7i4m4i%2Fd7uD5LB3SIHb8zkVEKK3trmcvfHqQomIuvM7KdVsvpuPSFTOpxsL9cIj6%2FGFAkGyBQx1zDbGLJnKxwBzDyxNvEBjqkAcLUiWMfSLN4Hx6KHRfG6cXGQvFTHv0Gn%2B6NdCFNz0nzm7i9IJJlCRfzoTLZwl7gTw1Dta0MWHLZpePJU%2BDkNUqKCyaPCBWTWHUQ%2FwBJLbCSpzmYsqjDmE0K8hn1Ll2qzNLoF%2Bjjj25KmxYLEX7y%2F4w2KaXOd1dDRWE3BK7SC1EsyCZYlrMo%2FMhxWoyRQOthxBgf28Ii97HchER8Yi9ZXmrLRA1I&X-Amz-Signature=b77f826fb35be51501033c490c8514fc991b916d1230373140a7d5ae1ae395f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZQMAB7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChXzpVIJkJ1XtKgcZiQzr1pgaQOVF2gmJw9kFYB4G5mAIhAOs0ePi0dNQXE3HCOYbGT4%2BmCd5aOd3uewy7jQ5Qi5fHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiwNtaOehbhSt2RBMq3AMKp16Q30nNtW0GDkE8phvCH9zCn03qiJzZ83zDN%2Bu2VEh6gs9PPyOCXu%2FxaZyzeGPy9LNrYJAXZrwdyMw320cmnCDb5DQntG%2F7wuUDrF43KVS70n6%2BjuB8ql7pkCEgTj0XQXd0b1UCyvk%2B%2FNdTSVVfS4HvxAbbqsVj9oDCkFSW0fTnihpn7MXbaARn4SfeyOU%2BesI%2BaobgZj9itjpBYCArXibL19hHViR89uBLKmJPbuds1UyKaHHkzaDew68T8yOvotGI%2F7KoF%2B5W4%2F3gnav1kRPFkTrY7rtFx4hQPdcFDJzjqAqGba7Wi%2BTtu%2BKMXlBsj%2BwV5l%2FhON33n7e36fK8LunLj%2FY1rk12wS%2B23J9GO2kKhD49x6%2B4mGrF%2FH3i8kmDrwHvB7RwhmHRo6%2BKtHpUXuSI0VkIMhEDgG0DUpHhOoB2Gt47ufCjBeYSxn9wmYxvhgwaEeHsTaDznRU30pZ9%2FECN7oi8em9cXxZ5lEUNVQ4WFssVxlzKc0oGK8JhSfdy8OTNAHNRf0u8RnK%2FwhWVs%2Bsnk%2BvTpuqqcaG7i4m4i%2Fd7uD5LB3SIHb8zkVEKK3trmcvfHqQomIuvM7KdVsvpuPSFTOpxsL9cIj6%2FGFAkGyBQx1zDbGLJnKxwBzDyxNvEBjqkAcLUiWMfSLN4Hx6KHRfG6cXGQvFTHv0Gn%2B6NdCFNz0nzm7i9IJJlCRfzoTLZwl7gTw1Dta0MWHLZpePJU%2BDkNUqKCyaPCBWTWHUQ%2FwBJLbCSpzmYsqjDmE0K8hn1Ll2qzNLoF%2Bjjj25KmxYLEX7y%2F4w2KaXOd1dDRWE3BK7SC1EsyCZYlrMo%2FMhxWoyRQOthxBgf28Ii97HchER8Yi9ZXmrLRA1I&X-Amz-Signature=6df11f477f15efa6f29275f131762b55e82180a5441c2a632235e27f544da9d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZQMAB7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChXzpVIJkJ1XtKgcZiQzr1pgaQOVF2gmJw9kFYB4G5mAIhAOs0ePi0dNQXE3HCOYbGT4%2BmCd5aOd3uewy7jQ5Qi5fHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiwNtaOehbhSt2RBMq3AMKp16Q30nNtW0GDkE8phvCH9zCn03qiJzZ83zDN%2Bu2VEh6gs9PPyOCXu%2FxaZyzeGPy9LNrYJAXZrwdyMw320cmnCDb5DQntG%2F7wuUDrF43KVS70n6%2BjuB8ql7pkCEgTj0XQXd0b1UCyvk%2B%2FNdTSVVfS4HvxAbbqsVj9oDCkFSW0fTnihpn7MXbaARn4SfeyOU%2BesI%2BaobgZj9itjpBYCArXibL19hHViR89uBLKmJPbuds1UyKaHHkzaDew68T8yOvotGI%2F7KoF%2B5W4%2F3gnav1kRPFkTrY7rtFx4hQPdcFDJzjqAqGba7Wi%2BTtu%2BKMXlBsj%2BwV5l%2FhON33n7e36fK8LunLj%2FY1rk12wS%2B23J9GO2kKhD49x6%2B4mGrF%2FH3i8kmDrwHvB7RwhmHRo6%2BKtHpUXuSI0VkIMhEDgG0DUpHhOoB2Gt47ufCjBeYSxn9wmYxvhgwaEeHsTaDznRU30pZ9%2FECN7oi8em9cXxZ5lEUNVQ4WFssVxlzKc0oGK8JhSfdy8OTNAHNRf0u8RnK%2FwhWVs%2Bsnk%2BvTpuqqcaG7i4m4i%2Fd7uD5LB3SIHb8zkVEKK3trmcvfHqQomIuvM7KdVsvpuPSFTOpxsL9cIj6%2FGFAkGyBQx1zDbGLJnKxwBzDyxNvEBjqkAcLUiWMfSLN4Hx6KHRfG6cXGQvFTHv0Gn%2B6NdCFNz0nzm7i9IJJlCRfzoTLZwl7gTw1Dta0MWHLZpePJU%2BDkNUqKCyaPCBWTWHUQ%2FwBJLbCSpzmYsqjDmE0K8hn1Ll2qzNLoF%2Bjjj25KmxYLEX7y%2F4w2KaXOd1dDRWE3BK7SC1EsyCZYlrMo%2FMhxWoyRQOthxBgf28Ii97HchER8Yi9ZXmrLRA1I&X-Amz-Signature=2abc07a0effd2cfc14486ccff808e3cd184b71833e1e8d338c6e1634f9808b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZQMAB7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChXzpVIJkJ1XtKgcZiQzr1pgaQOVF2gmJw9kFYB4G5mAIhAOs0ePi0dNQXE3HCOYbGT4%2BmCd5aOd3uewy7jQ5Qi5fHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiwNtaOehbhSt2RBMq3AMKp16Q30nNtW0GDkE8phvCH9zCn03qiJzZ83zDN%2Bu2VEh6gs9PPyOCXu%2FxaZyzeGPy9LNrYJAXZrwdyMw320cmnCDb5DQntG%2F7wuUDrF43KVS70n6%2BjuB8ql7pkCEgTj0XQXd0b1UCyvk%2B%2FNdTSVVfS4HvxAbbqsVj9oDCkFSW0fTnihpn7MXbaARn4SfeyOU%2BesI%2BaobgZj9itjpBYCArXibL19hHViR89uBLKmJPbuds1UyKaHHkzaDew68T8yOvotGI%2F7KoF%2B5W4%2F3gnav1kRPFkTrY7rtFx4hQPdcFDJzjqAqGba7Wi%2BTtu%2BKMXlBsj%2BwV5l%2FhON33n7e36fK8LunLj%2FY1rk12wS%2B23J9GO2kKhD49x6%2B4mGrF%2FH3i8kmDrwHvB7RwhmHRo6%2BKtHpUXuSI0VkIMhEDgG0DUpHhOoB2Gt47ufCjBeYSxn9wmYxvhgwaEeHsTaDznRU30pZ9%2FECN7oi8em9cXxZ5lEUNVQ4WFssVxlzKc0oGK8JhSfdy8OTNAHNRf0u8RnK%2FwhWVs%2Bsnk%2BvTpuqqcaG7i4m4i%2Fd7uD5LB3SIHb8zkVEKK3trmcvfHqQomIuvM7KdVsvpuPSFTOpxsL9cIj6%2FGFAkGyBQx1zDbGLJnKxwBzDyxNvEBjqkAcLUiWMfSLN4Hx6KHRfG6cXGQvFTHv0Gn%2B6NdCFNz0nzm7i9IJJlCRfzoTLZwl7gTw1Dta0MWHLZpePJU%2BDkNUqKCyaPCBWTWHUQ%2FwBJLbCSpzmYsqjDmE0K8hn1Ll2qzNLoF%2Bjjj25KmxYLEX7y%2F4w2KaXOd1dDRWE3BK7SC1EsyCZYlrMo%2FMhxWoyRQOthxBgf28Ii97HchER8Yi9ZXmrLRA1I&X-Amz-Signature=13c18dbcd92c150c6b2f91b09988e08ce09a262c870eba0384d3231451970d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISZXATF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCMZmFxeW9b32x8AWFNivCWvIVvIa%2BjdL9La67DqjPx0AIgGDIYFmdx4HJwh9VaxQC4DKFiqAjcPpNUctc7K5YmXrcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsYXn6KZ5gbIu0opCrcA16V88Ve%2BGEhy6CB%2Bcn0Z4I3whXMokXMqmRD%2Bl50IKB38ii1rVfYJWXwdz7gInpl0gf8oZWwIUSDK962vdAu9D3CpmRR9iWO1xmr6fr%2FwpgKUGiAgnaCAFlWXtE4%2FokgtokqdHKjEMJx1XQHAjVu4AHm0hvCSGPKq%2BZ4VaB5UiDSPmKH6S48Tf50m6PJFpzB2oPT9VaMERyJB0PA%2F6Ul2mHyoD7AqYczF43JzZwhG57wGYZFCDGMlMI9F55MbYT5DKRcH6HUb6y1MUDbB07ai%2BN0RikZSd72VQ5ahnh1hfhB6aAdz2uaBj51uM%2FqATfixdoJjQqjpkEw2bDXPbb9l0xBUykARjcsriuwCfjCUwQO1IvsSFvIYNn%2F9BXs4WN4WIG2CIfP%2FIW6DcVpKHz9qaCQ%2FbC3DfIY60iJyfaXZIe%2F7iWag1pe1Dq54Ad8TmDDK6awl4u4fxt2tsPd8t4om1UkGPSVGO%2Bza8U5P9DzK1i79%2FDs%2BLaTracp1OW5dgYkQ%2FqJX1ceQa8dCRWRuzD%2F1Jn0VqZo02vI1%2FBEchQ5mi5vQxcrYtHt7Uh4jB2OfOn8zWu1MfhNxv6jwHvin3n4cpcjbpFyO2DIBemIznMBcziWgnLEHycW2ST%2FURKAMOrE28QGOqUB3qOyZ746f8EN%2Bf9IzT2b7%2FWAWpmQUOGzCVBmD56R%2FyzRgbGh54zgGU5n%2Fx3PsXmNNtXXo3rrxRqbbdsCAGSVNhoADePZNo%2BEspX0f7YNAIYEswhyPQSeLsXseKyjWQcTvJFOyZro2%2BxO%2B5FXhHEu1OpedxxAOIydzR6zSNcrDC6LiBOhmdYXFcxK1S6BSyxAM5iPkcp2bSG573Ys2qUCpri2gBw9&X-Amz-Signature=197c0e2086f7295b10342613e8fcf22ff593cb1f6d47cc745b722970f58ce4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4BCJYR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIH6Yl2WIWXMHLEEtnvKjlOFJkcGeKFfEH7pNq6SB2H3qAiBed2sfYpv3XY1RwJWQ5GsYFrjL9DQyVC3Uak%2Bc6Tu7IyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWrR5pERWXDv84Au3KtwDPtwkBApXN58VJNWsW7bXoTMhg2UJHrNXjustad4GungAwCot08UIW7Yjl%2FiL%2BpltEdiog0rv4IjcV5N5n6UiZSmhz0Pp%2BqUCOkm7rGqK6g6n348qgijSQIMH37EWlVZ1%2Bl0JYMvmxMdQVUs7mGiYobiwjxjAQYi5EsVlRaY09qbxzsa5bVhFcvo7vVgdM7DbGseGI%2FoxDvgULRaKjIHF0wn7lIVyO3ZVs6x%2FUICdRna5v6Fhdq%2F7BA%2FsQXN0UKry3eD3CTGOCZR8wO2h%2FJ2EMlkY5oacJIeuN2Fvx5SnbaOajTLxFgMTxAw4dd6kYOkSLr90pPUVSaM6D2N5T4mnaG%2FubQMhu7lzNGmNE2zTg7P0H0a5IgVibUobz1w4p1MyAxSQ3m8SrHd4X0J35CsASQN%2B%2B9giiwRakEviZn%2F2ovfcPA00WCSWaxrxlVF8RToikS%2F%2FvU01HcSTzU9MCbbXssFv6yJR2VVen9QbF8kyNb4%2BdL4sdCmNyYHCHUeXVuY69Hmeu9uGQe97IC7s%2B2TDikJA04OF2u%2B6qieqCnkMWSWi1dodqF8DFiva4%2BHEY3x0pxIBdzgn0byXqoTEjS%2BdTjmsmjmeWrk7IxjTrDQTxwTfa4DeQ%2FQUxO4O06Uw88TbxAY6pgHxhrGhR49Jv7cnALSsqFU8zd4KlR74YqFBprR89kkKq6kN6dEAC41jflPDjKuZXdNYXKbi9x5Cfweoof0pcUPk7fWKS77YaotC3H%2F%2BYmCWL6mVcHI9kP22maKfVinazQ6HgKqZNKgt5zVIIEVuNmJif7DX5qu1j1VyswWU9lMpXZMRAH5m2S1r6Eo0iFKi2y9kPSMjlVpe0TlM556Rd2yVQoIaVElS&X-Amz-Signature=c38582578921236efb1d78b45510cb90ee02a0de872b19bcf011e71cecc1f9a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627GUYD5X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIG42Jimgx%2FYGb6H7bxmFwm%2BCiF6P7gdB9arra25K74ZtAiEA0WjWveEZrkpq6jwYyv5dop37NkAbFcEOJ52ug6AaTQUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwhR1f7RzE8140PSircA4UalGw5H4yDh%2BxPAS5zQL7slFDlDW534ZUB%2FfKmEZ35Kzg7Mh1ub%2BJF0Ed3168jAgIoVY3VjoZQwzhW8%2B4KXZ13yEUPiCdRXKVS28gPbg41mU1gMwHxTHsIv06BPnVmj%2FX8T9t3TLA3qs8Oof5iPpQ2oG0w%2Bz8HqijB7oDjGh7W0R2DZBSF9jKjJq72lBhAExoc5xLXlqBVcBieZzEuGIWnvD5KCalDSHQRKa3vxjgRCYx92m1SdgB2HND7szhqvgGBip%2BCuFScaWgXf%2BXPKqhHwMliezp1LzXi%2BBMr6P2wDZggQuvn5cftCfVbc3UKexetNE3oaHEe5OcwVN33d24qKKTjr1LD3xPDn%2FREtbRRC92YbcFcut49r0yQvxbZuU3K7yxShvpWEEkmRC2vhebvLvtPzkjFsbUw7KJnzoBMBqEzN7zpzEVTHNaoSyYsx1S4aQa6sFdUidLkmF1OrPNlopu4UffgKDzvcdYHyuVxjto0awgIgaq%2BB0HP%2B12c%2BAyQu8Q%2BdyfFEXtWJIzumtURsihwIzk2c8CbUQ39t6HIy0VkFttbFYm6HlMjMzdXegC%2F2J84Poj0EqfQZrQbUwdEU1BbqVrXWxzwI74ZCJI7psrdNvk5wLJxTCzIMLzE28QGOqUBNmiH9kySErhN7VEzhlZIpGzRFdn0vz9V9Gl1TJ3VCcgdTttxjT3eu%2B1MUA7IHEjRf7O7ppSaGMq3XEbHmbPSp%2Bj8Jy40wVGQqKuBlCX1zoj2jyntHjBTxiG4TCjmHq1S7eqbYg%2BKuUrwqUdLfstPGSkPt%2BYzI9riq3s1HHMH%2BucCrOau1GMUrHe2wn%2FxcJebfTec%2FX2OsMp7IGsiL2%2BE7vmKngqa&X-Amz-Signature=7bbee6b966d286e7f7f45f4f1a026b73caf8a1dda51db00112a0694d882313b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZQMAB7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChXzpVIJkJ1XtKgcZiQzr1pgaQOVF2gmJw9kFYB4G5mAIhAOs0ePi0dNQXE3HCOYbGT4%2BmCd5aOd3uewy7jQ5Qi5fHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiwNtaOehbhSt2RBMq3AMKp16Q30nNtW0GDkE8phvCH9zCn03qiJzZ83zDN%2Bu2VEh6gs9PPyOCXu%2FxaZyzeGPy9LNrYJAXZrwdyMw320cmnCDb5DQntG%2F7wuUDrF43KVS70n6%2BjuB8ql7pkCEgTj0XQXd0b1UCyvk%2B%2FNdTSVVfS4HvxAbbqsVj9oDCkFSW0fTnihpn7MXbaARn4SfeyOU%2BesI%2BaobgZj9itjpBYCArXibL19hHViR89uBLKmJPbuds1UyKaHHkzaDew68T8yOvotGI%2F7KoF%2B5W4%2F3gnav1kRPFkTrY7rtFx4hQPdcFDJzjqAqGba7Wi%2BTtu%2BKMXlBsj%2BwV5l%2FhON33n7e36fK8LunLj%2FY1rk12wS%2B23J9GO2kKhD49x6%2B4mGrF%2FH3i8kmDrwHvB7RwhmHRo6%2BKtHpUXuSI0VkIMhEDgG0DUpHhOoB2Gt47ufCjBeYSxn9wmYxvhgwaEeHsTaDznRU30pZ9%2FECN7oi8em9cXxZ5lEUNVQ4WFssVxlzKc0oGK8JhSfdy8OTNAHNRf0u8RnK%2FwhWVs%2Bsnk%2BvTpuqqcaG7i4m4i%2Fd7uD5LB3SIHb8zkVEKK3trmcvfHqQomIuvM7KdVsvpuPSFTOpxsL9cIj6%2FGFAkGyBQx1zDbGLJnKxwBzDyxNvEBjqkAcLUiWMfSLN4Hx6KHRfG6cXGQvFTHv0Gn%2B6NdCFNz0nzm7i9IJJlCRfzoTLZwl7gTw1Dta0MWHLZpePJU%2BDkNUqKCyaPCBWTWHUQ%2FwBJLbCSpzmYsqjDmE0K8hn1Ll2qzNLoF%2Bjjj25KmxYLEX7y%2F4w2KaXOd1dDRWE3BK7SC1EsyCZYlrMo%2FMhxWoyRQOthxBgf28Ii97HchER8Yi9ZXmrLRA1I&X-Amz-Signature=778832485602c550c7e6fffdf4e187db0b968e07be8b655766666a43b7bfa2ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGUOO75%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCSzs75MQybufbfRIbgiVcpubCn8e3rQF9XVy%2ByNT53TQIgbMsYsmUTE4HiBLVQtYInLvGEf%2BntOUQLNj6eZpSiuW8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5rIWkmGcMd7SiJlSrcA1IwMqjVgIsOWESUHvIkAaFti8wz4NeDqyNGhZZvSJi8qmnKyJGCmQ5zeuXD8Nu78PZL%2B384f5p0%2Fdq3gxgCj%2FK4bx55tSR0t%2BVbgyL63861oQ0IP%2FQL%2FtIw%2BcLJ0zxAFgzSJfek%2B5Z9daticdKiUWSkj4IKG8sqfwFHpkMHMu1JtPZaIn86horLi7TeDDeAbdsfwLb2NKyHDLJE4C2I0PQh0XYOqjBAmWbP0gRWYgT%2Bc2oGs3z6QT9CzkqafNXT%2BIt8rpeu5p8zm8W25VT7F3g3xa7XFrGzYxrIFkM0QFh82a5qW0kWB7r%2FfKWJ8k6nVh9Fx9u6NhBiFmskrhBVfGoudxLUMrOn%2BhE3Bl%2BJdYDvK%2BkiNA4qFxeQdRpFoxUhkFwOTvISirlmJ%2FhMVZ5n9Ta%2BzqSaaeQM8%2BYgvM0lK0l5gDczKG9%2F3Yx4NTubea%2Bp2s2Bl5qYEhO%2F%2F4aiZGWhpfEUp6V0ItG4RGpVANhRP2W85H0amrg8TQIAc1aezFhCLKMrkxldYiF8oZE6DZQXhqF2C%2BJLqcsOorpkb4KkOcq%2B9WmzPjBlJSHHFC%2FV5GT%2BnoMdRUtPSgNf48NlZedxfyVQOC48ek%2FGBi1s3kLcJogQurQEJKfA3L%2BoZq9OMMbE28QGOqUBObHEJY9vOYDyTPLZKfIXaTlL7SdLueLq%2F7GZ9Kau6koALLjVqBXw4G%2FoIfd5xLfSmWFfFrbP1pVWObbiPJNuXrSGLsm5gwDvDZpMXluvyUzSr%2BXj76qps3urEBU2Og44AP3%2B38d%2BtxcO0uSJ92sY8PcLc%2FxAQFEsdwndAV1AMl1JimbhjoPE%2Beo5dTOIAOOUsckh4fvVp4L7SvlPiQoZuU2AoB6V&X-Amz-Signature=12c364258f6d66b521b0a8431abe06b404939113444fc8bd4b8af78c3ff72546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZQMAB7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChXzpVIJkJ1XtKgcZiQzr1pgaQOVF2gmJw9kFYB4G5mAIhAOs0ePi0dNQXE3HCOYbGT4%2BmCd5aOd3uewy7jQ5Qi5fHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiwNtaOehbhSt2RBMq3AMKp16Q30nNtW0GDkE8phvCH9zCn03qiJzZ83zDN%2Bu2VEh6gs9PPyOCXu%2FxaZyzeGPy9LNrYJAXZrwdyMw320cmnCDb5DQntG%2F7wuUDrF43KVS70n6%2BjuB8ql7pkCEgTj0XQXd0b1UCyvk%2B%2FNdTSVVfS4HvxAbbqsVj9oDCkFSW0fTnihpn7MXbaARn4SfeyOU%2BesI%2BaobgZj9itjpBYCArXibL19hHViR89uBLKmJPbuds1UyKaHHkzaDew68T8yOvotGI%2F7KoF%2B5W4%2F3gnav1kRPFkTrY7rtFx4hQPdcFDJzjqAqGba7Wi%2BTtu%2BKMXlBsj%2BwV5l%2FhON33n7e36fK8LunLj%2FY1rk12wS%2B23J9GO2kKhD49x6%2B4mGrF%2FH3i8kmDrwHvB7RwhmHRo6%2BKtHpUXuSI0VkIMhEDgG0DUpHhOoB2Gt47ufCjBeYSxn9wmYxvhgwaEeHsTaDznRU30pZ9%2FECN7oi8em9cXxZ5lEUNVQ4WFssVxlzKc0oGK8JhSfdy8OTNAHNRf0u8RnK%2FwhWVs%2Bsnk%2BvTpuqqcaG7i4m4i%2Fd7uD5LB3SIHb8zkVEKK3trmcvfHqQomIuvM7KdVsvpuPSFTOpxsL9cIj6%2FGFAkGyBQx1zDbGLJnKxwBzDyxNvEBjqkAcLUiWMfSLN4Hx6KHRfG6cXGQvFTHv0Gn%2B6NdCFNz0nzm7i9IJJlCRfzoTLZwl7gTw1Dta0MWHLZpePJU%2BDkNUqKCyaPCBWTWHUQ%2FwBJLbCSpzmYsqjDmE0K8hn1Ll2qzNLoF%2Bjjj25KmxYLEX7y%2F4w2KaXOd1dDRWE3BK7SC1EsyCZYlrMo%2FMhxWoyRQOthxBgf28Ii97HchER8Yi9ZXmrLRA1I&X-Amz-Signature=8995ccc8488b5cb514389e1aba3a707efb64cc0053845a43a2be829c3c19c3f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TL75KWV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCDyxSxInb84fww6kal%2FJm8d1X0Bl0ivkgNwks0TxWQhgIgQq16SmY9nGEDz3b%2BPesE0oOubtSZZi%2FooOsV4tran6wqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBf52Ls4pdAcsN2%2BCrcA0aNq1YIkzTlHSmD3xjilpnj4x0Ow87EYGWPBYXimRSEMI%2FivNbNuXrzdI3RdLUUi4OWoDCe4b62rb7MMFv%2F%2BR007ENcpbOQ%2FXAu%2F%2BPkRkcG8mJpejn4PXe%2BNUMSOf%2FLLmBiLP2rrNGZEZBhAsli1qpoOzEw5N%2Bwv0iz8dhwY8ss%2F4QJWpeBASkkrk%2Fc3O5iF6IdhbT%2FoLJKax7xx4fQfyKlleQc3y8uRn9Bi9Yui8SA36RxMs6FRxJ217Sz8AndQScTE6GxHGuL%2FjzVi7%2Bk0iAqwIQhstsw2hnloSgivKlnRG9AiTFbitovNbqaQKGXcFC%2Fycu3eeAGxE9GcYejagR7AG0CAKWeLvk2WoZE%2FUjY6cfjrRgYzrxXeNb6vl4yWAJGU2cLeTSGIr0JbF9REpWChJxzPyhcCypaXoQg1nupJSIjUQXKcB8i%2BG6aXz7xrrx45L02k51KlY6ooY4MAtFrHtgqyEMP8iAQfaRTvssd1lTu8FMkzx7qYlYmMG%2BzIpJjSG%2BHTLp5bS4TLMg6IOlpN6Lxcp5nuCO%2Fft%2Fco4zW9Y4LzCPmofdjpSD%2BXhV00FFxdiYmsMyZeMTiCL%2FM35DnGOhcsrn3gQKp5x7rKvevTeG%2F3sICIbu1WHk5MMDE28QGOqUBTQs8uzYMSFlJLTyHRatLF7futctaNaIb1VS5usFXSWb1hhq44VhgMUNiPh2goEK5CeUyw%2Bl2wBYSu4%2Ft%2FHXc03iEJjUr2k437eqKwCi3ipNBAKJ3b0QiwIIkd80bi%2F2oHNxA8Gpxe3lD9STNRtd0LD%2BS20MDI%2FM%2BGCVkDm3mB9pwXujzAgp3%2F0QaPgLsq0gXY9aZdEed5rE7mT0cxuCt10BCrLNt&X-Amz-Signature=de09e531d73758263ddf8d113cdc6936b3a1d743cb586f4b375109f5ce0a025e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZQMAB7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChXzpVIJkJ1XtKgcZiQzr1pgaQOVF2gmJw9kFYB4G5mAIhAOs0ePi0dNQXE3HCOYbGT4%2BmCd5aOd3uewy7jQ5Qi5fHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiwNtaOehbhSt2RBMq3AMKp16Q30nNtW0GDkE8phvCH9zCn03qiJzZ83zDN%2Bu2VEh6gs9PPyOCXu%2FxaZyzeGPy9LNrYJAXZrwdyMw320cmnCDb5DQntG%2F7wuUDrF43KVS70n6%2BjuB8ql7pkCEgTj0XQXd0b1UCyvk%2B%2FNdTSVVfS4HvxAbbqsVj9oDCkFSW0fTnihpn7MXbaARn4SfeyOU%2BesI%2BaobgZj9itjpBYCArXibL19hHViR89uBLKmJPbuds1UyKaHHkzaDew68T8yOvotGI%2F7KoF%2B5W4%2F3gnav1kRPFkTrY7rtFx4hQPdcFDJzjqAqGba7Wi%2BTtu%2BKMXlBsj%2BwV5l%2FhON33n7e36fK8LunLj%2FY1rk12wS%2B23J9GO2kKhD49x6%2B4mGrF%2FH3i8kmDrwHvB7RwhmHRo6%2BKtHpUXuSI0VkIMhEDgG0DUpHhOoB2Gt47ufCjBeYSxn9wmYxvhgwaEeHsTaDznRU30pZ9%2FECN7oi8em9cXxZ5lEUNVQ4WFssVxlzKc0oGK8JhSfdy8OTNAHNRf0u8RnK%2FwhWVs%2Bsnk%2BvTpuqqcaG7i4m4i%2Fd7uD5LB3SIHb8zkVEKK3trmcvfHqQomIuvM7KdVsvpuPSFTOpxsL9cIj6%2FGFAkGyBQx1zDbGLJnKxwBzDyxNvEBjqkAcLUiWMfSLN4Hx6KHRfG6cXGQvFTHv0Gn%2B6NdCFNz0nzm7i9IJJlCRfzoTLZwl7gTw1Dta0MWHLZpePJU%2BDkNUqKCyaPCBWTWHUQ%2FwBJLbCSpzmYsqjDmE0K8hn1Ll2qzNLoF%2Bjjj25KmxYLEX7y%2F4w2KaXOd1dDRWE3BK7SC1EsyCZYlrMo%2FMhxWoyRQOthxBgf28Ii97HchER8Yi9ZXmrLRA1I&X-Amz-Signature=f110e8ea01cc5c3f7755ca80dea209c92c93d25bc0fb8383d83b5c76d86f5bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBZFHYA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCx0LT%2F7jIigc82Fg31pdnkresGtC%2FOfhH9IT1DjBPMmwIgMgMbpIkPePgPkadct5lZgdjp63QBouxGSsP7NCnwFf0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFd4Ihp1vL%2B0VpFAfSrcA2Ut14Flfppd9wxe29WuclTNRSD5TSRiYBUBoiyeHn5cCO%2B84uhC6hY%2B9I3OScyAw84t9p0mo9xqJhEz3jRNQBxSg4UnlJbiZXONxftFuV6hg0wwQqEjZKVaS2D6ckOPJZSXsEKEfdRKJAg4i2GAZGFRNSNhecdbQm6%2BhZH8In4vJRrI1MiaNUTlkl8OeVOGN%2FlKzOY4wdzbtqo2MMQqMepRpqRKkXg4oX5fiDXCwYStLysdZEHUkwsS8LwuiFRmllywvy0zP2k55L8d7MNOH2%2BrUwHz4xPgaaz1%2F3GYQ6qvw6e1hQot3JCahQ8P3WO8di26eNECqpC7fu42tBE%2BiEI4CHHKfwQHSKM9wqAM1CcoSSueN%2BPEbWEl5m702grWeYkN3F8RuitHojXFakX2QYp6%2F93%2FNAUjXy2aTvGHI%2B%2BNbnvWJmPbJYMUp8BgyJP9o%2FhYbI%2B8VHCOhNQPyCW91lob5oMkb6KYxmydjWACIWQtsPxkB%2BX13x9GqyVjf6uIwte8HloMuX1x9R0OOkCVp%2BWHW9j08IFycd121SS0wFkHKYvSAK7PS6ds2YGYPt4NsYJoixEWcRb%2FtHcf5UMA%2FuXIq5ai2b7IwUIQNxt%2B0DgnL7gaBQhW0uAdwmbgMOfE28QGOqUBEfkjhwqObPvS64c2wKjlDSuCPZYVkgGsovelE2wQHfnhyhcWW6rRBeGbB7r38W%2FiE%2FGh6wl6e38IIdc9td0Q2g2MbSJYvXdDRnMm6c%2BwIYDhEQj6bDNUDL7jRoQKWG4%2FH%2BUXWMFPAT3Tzh8Y2tHqtkAQk4gpLiWm0%2FacAOvKxtRb1uA0imYaa5Ao9m%2FB28Ez5Cra5X9Vyx5X8o3YaqYOfRMrKGZN&X-Amz-Signature=ce28b0745ff3ca523d9ce784365bf953473608af0492ae4ac8ddf62ea82a8607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZQMAB7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChXzpVIJkJ1XtKgcZiQzr1pgaQOVF2gmJw9kFYB4G5mAIhAOs0ePi0dNQXE3HCOYbGT4%2BmCd5aOd3uewy7jQ5Qi5fHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiwNtaOehbhSt2RBMq3AMKp16Q30nNtW0GDkE8phvCH9zCn03qiJzZ83zDN%2Bu2VEh6gs9PPyOCXu%2FxaZyzeGPy9LNrYJAXZrwdyMw320cmnCDb5DQntG%2F7wuUDrF43KVS70n6%2BjuB8ql7pkCEgTj0XQXd0b1UCyvk%2B%2FNdTSVVfS4HvxAbbqsVj9oDCkFSW0fTnihpn7MXbaARn4SfeyOU%2BesI%2BaobgZj9itjpBYCArXibL19hHViR89uBLKmJPbuds1UyKaHHkzaDew68T8yOvotGI%2F7KoF%2B5W4%2F3gnav1kRPFkTrY7rtFx4hQPdcFDJzjqAqGba7Wi%2BTtu%2BKMXlBsj%2BwV5l%2FhON33n7e36fK8LunLj%2FY1rk12wS%2B23J9GO2kKhD49x6%2B4mGrF%2FH3i8kmDrwHvB7RwhmHRo6%2BKtHpUXuSI0VkIMhEDgG0DUpHhOoB2Gt47ufCjBeYSxn9wmYxvhgwaEeHsTaDznRU30pZ9%2FECN7oi8em9cXxZ5lEUNVQ4WFssVxlzKc0oGK8JhSfdy8OTNAHNRf0u8RnK%2FwhWVs%2Bsnk%2BvTpuqqcaG7i4m4i%2Fd7uD5LB3SIHb8zkVEKK3trmcvfHqQomIuvM7KdVsvpuPSFTOpxsL9cIj6%2FGFAkGyBQx1zDbGLJnKxwBzDyxNvEBjqkAcLUiWMfSLN4Hx6KHRfG6cXGQvFTHv0Gn%2B6NdCFNz0nzm7i9IJJlCRfzoTLZwl7gTw1Dta0MWHLZpePJU%2BDkNUqKCyaPCBWTWHUQ%2FwBJLbCSpzmYsqjDmE0K8hn1Ll2qzNLoF%2Bjjj25KmxYLEX7y%2F4w2KaXOd1dDRWE3BK7SC1EsyCZYlrMo%2FMhxWoyRQOthxBgf28Ii97HchER8Yi9ZXmrLRA1I&X-Amz-Signature=f9adad3ffb328a371462d2c9213d6ef70d6b9cfc85ee0d76dd3b505d4d828a26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5KJDCYK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGYmJuEPGOg8p%2BB%2Fspt7dOkuIubicnuTKMWtue5bWOpEAiBnRkaRtgYwIBn10rC6DGkwHPKKkdLsTVFfTsY9k1m1uiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPWDV59e%2BG2AUQVk8KtwDEQNRz50jOY6BYBDWG5uuIetZEHXEYGx5PQspenhYyo3eOiVWE5%2F8IuphBQ8AsHodzCesjQ%2FqS2SlL%2BjMIZy8E5SAwRevr%2BHlO%2BvJVDXHq2nZ7wEmhZwEAG7Io4ZzQspqCZED1OZpSm6n3C9W9wyJJVl5GjZFaa0u4iTHTsQafF3cAxh6Q8jTfoXQ2jiOVURKpRVFPbJZUrUZGb6k8lP7EuWazoUbOmKWtjGkUthLdr005MasA1G710gDpihcjXb%2BbLFxQM5wO4V%2FO7D7L33AQLsTVAg8Dx9jl7osF1qBM0ryXdo%2BqPTVpwDbJ4zSLYdY4BITpc3IPWMjFBN8KrfE%2BeMW5ESkkWgMMmjxFV2gDCkdrzPzeghLVNuG7X%2Fm95ZMmi3pXBJBn0GDNf7E6%2FLmJcMJhpnsUaTPVjvEMFrZjr15Vgu0syXwV2Ql5%2F5MxUpseO42Yx8RFcdlG%2FcmywVL1FmB9ARoC%2BwRWl9%2B8xh57w53UgQcJfA6REiFJktuU0Bwlcd%2BOXLBEV7hSjYQu862iseP5j1hNxJtWV%2BbUtk4N%2Btt%2FP5XeLqi87FP9I%2Fd7L1GQiIuqEnYNbV5rd7wYR7U4piw2%2Fcy%2B%2B%2BBq7sHbo9LTF2lAw%2F1SSjPyyWl9DUwisXbxAY6pgHaVeouLejJWEhgRNiOi2B8vpt%2FqZ7rWLbdg4FYQGOTGhCV5QDVHHGUg%2BTBDcFRfRLGZKRFCzzuF%2BoP12EU6oRQK52s5GRqBXU1icSSWREqu92tFx%2FjbqHksuoy2NYqbdk8yuV6dDOi%2FmP4eS44JTXRrYuvAVtkuhwiZ%2F2BHEWbU0CMtk6jRuSNHaxoJ1rWw%2Fp3qzxkBqCnoFfjk4ltQIuG0NKbK3%2FG&X-Amz-Signature=64854825667c50d90834590695007799347d56ca152fb5ca79232c8886a6a26d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKETPNNA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFTAcJ4%2BkcfN42rw1%2Fsy7IJogfMu4OQDGKn0PZhPz3skAiAhpBwdLmKYFa4r4D2uiXtG1bnm3ioIYlgs46Uuq0wJ3SqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZnTjsQHHYFvrkf54KtwDEp%2BNGscS%2FmSnL7PQEmZvDVss0PcAZ%2BQ9Phi8aBkgKFxLy%2BrOLRQkjdLXmG%2BneNLUmZGoJMK%2B5RUIj6aQq7x8hTG%2BPuG8WZKn6Ed1rbbNsrqaQbsP7Mok%2BfMUIXdqhZdJxmmDjgzYByLL0sG3dn4EVETDXVT41nmkf3diY8ZpqaJLKSMJr1P2cShAbEEdlTmt2XGrsMjZPfSKIX2CuGZ0Yp1VAdDaRNtab%2FdeN2KiOdyg5QHpfthIgfGpKVX05%2Bo71PiCVh6IR%2FPtwv8Tx7jFTOIN29QYQ0dmYlLDqQdrSnW7Y%2FRhTArZZUsUHBhyGdi9exd2obeLU5gyjGP4OZc4t7xbL%2FB7XHPSzADDc2aPEpRriSDL2ab%2BcLSORBxdyWaxqChqnGje2qY%2FVmyqEqnJ7kp%2F3zWrrlJ2rAnJHGdS%2B21Ysu2Jbqmo2oRq6g27u3OxJpM0z7npTDov5oly3tfTnH792dkmSfrNI4X00wQZR8hwjoHI8A6EwzM7h2E9fgI9%2B4pkV6lajjJHttlIX8Lro5K4ysjkWTfa6JIl3XqHmLiy4mGGjEc0BK5dLSsSeYP1GO8IDgWSdZS2VLetDB2dy6q8P7HB3%2B2jT2KnfnKuwTvIhCJC2XYtPznbIP0ws8TbxAY6pgEvLXKE1uR6zOUDBmibg5ePd9LSTEtNwL6agZGKOBV208saqusULg5%2BypRwusloHH5olzHOCR30bKu4hkXHR1tAMXPg6ePvz4MUHCEX7JbhPVY1dkyTTdaJqkgf4wUelEhJJVq%2FqVP%2BoWWCca15KbUFCM5SHsIX2KZnPUrW2E9A4IGh3IHex8JQ2ffyuuHxXGyVMraOCf%2BchyouSbdcw%2F8rP84Wk2Z%2F&X-Amz-Signature=7e1c11925acc501ab0561373e35426b8e1e9292af048991e5ec85246301037ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUUDBXF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC0ds%2BH6%2F6%2BmA%2BaQdmJcfY6iJUGkVgztFKXrUU317DqkgIgN9sqHehoPdXFYm8wsBzZjTw7InyPGvDBWr6W%2F3QdlvIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJoBfdZ6zq5PdtBSXCrcAwOF%2F3ZVgMHiw9xcHT4SQ9%2FxeYQ8baqbG%2BJahNRI%2BpuSq6OZaWStP4tgzYqi%2FHkt%2FBxSzlvK%2FlVERwepDXAuwqtMSbsFToax3VbmOpMwNoBa6%2BxsSrzrNP6dknsdFl10e91wtuMVCFJypPoheKGOJMfLuDag0r%2Bhezz4EtVo%2Bx8bxTYmsKXXD5ZFNPv4Kg7XIVYf6%2F4%2FAN%2Bx3U%2FANfLHFlLyBEjULUZDtIlL19Pe5zm1aYnmjG1w0P5SI%2FBTBKDYn4gmGPlnxgNi7GcpEzw%2F34mo9NMcm8OxdnzCMfxpDuL6TwWnJpWNE0IeuLMxKKgUv9AuhB2jWtaa4blE5EYoanTxr1ByYtaNJh5duwvP4qfB%2B4gHlZftBga5nJwXT7Kj6Nca9jFpcpgCGcRFMEdYEVTWltlyhmyg8bmCOHZIQjO5%2FCSiHYui3zNuMyFNn9FCEuqaDB%2BsORf13dQgN%2BcApRG8SUqLROLcqj9v5Vh6YX%2FPr3j5m2ErQ9YZyrCYzS0nU%2Bn5FCraNdzaUJ8ahoyEruyUkViB3KgeSo3h2MDTTjbOuoXfj%2FChTvpafenFOIXz8DEfv3P9x2JBPvU3ihYwDRPookSX0Jh0bm4SfaXAidBrch3iUABIXUeMfaLoMN3E28QGOqUBvJcKMCSDJUSXDEiSKpeBXfedI1OfE%2Ftp99%2Fae08ecA%2FvWaU69WBNAEUDms90QGFhMYoBuDM1IQLLACDK0xa4Ygb%2F%2FmE4QYfAi3qH74%2FoDEzKwwz83zAkkI6UhtfkV9epyOXjT1qGiXokjO2%2BNQiZHwBJGrz%2B%2FXmxUrj3befzvT5DeuJRp3zYgR0M0fpbSK40jLe%2BxpWxhBO2I267jDF1zOl4DGGk&X-Amz-Signature=13ab2192bd4c33cdb5943049e0970ecf83e05f9d6c4fd2a1cfe460a4c388043a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUT7J2XB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDHsRI3zieMP11E59l3Vo9r4f3k5iDkohISa6Mp8fJE9QIgLW03uqRssDbDPZdbpvUqBX3AOecL4DDuPynreaiga94qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApxDoh%2BiHyMRQcZrCrcA3Fo%2BFMlzr4WYQw%2BnV8DUK0cW%2BJJA%2BkotyUzMzaVOwWHvi%2BBzpkLzXzDqBwY253g1fnfxiOORpNtcZEdng7%2F9HhIK0CdNM1VmvMP0yN0eRH7oGmxB2jcoGqNnPRkX6iOcwGKy8tLmB3IWLL1jVmw8P7gEJXhmtlkAH5n3pV6t%2F3ohY7Tz5xY8Auoae38yBLdu7E3om23ReTEKfWnPNnbt1jdcDfOaJiu%2B9J3z7DkclHoG6squKZX7mZOidX0fV06FYn3Z3K7A96%2FOEFthDiQ8ydo9y%2Fuj8xkTSb%2FpOAp31oilco%2FEJCOhev7go5B3NO%2BMOpzflp9xXV16AZMByJWLX42rDfJbjS26gMZGAIxvCcmLpelCYp0i%2Fx%2FRVa8pm%2B3JGHhb1e4kM5vK2rn%2BvPjNSMvQ5TxcPAFLCi3k1S9Uf328hpRC%2FV1ZRL4KBcJlfeUZLx5lUMxtqDawvWlDLlZ4CLVkezy5huOYTH6hd9m5xoTAHfgTaC%2B7zweyQ0pufi4BGwYtYKK%2BqZJBb5EzrKa1kGwVvGlqfPpyZnjsdmy3059gQzksg432nEDpQalwoQ1%2BQzhNTqOLzdgWEUVm52dCNzYze55NYQe%2B0sdjcOi4AdZHKe1iBHQrjiSvwA3MKvE28QGOqUBO45UPHywMVE9kijj%2FLwIJQsPOzNUAHaPnvm0z1pq3Wtr9EayMJtKzRo8d7EIWSDdaS4q%2FxRpSdWCGSHQg3GmmD%2Fo2%2Bd%2B78C48DWCuSmmXkhwaA%2FJoSBQ3zlkWrpPmwJm2n1hOSSkZtv3ne0U%2BOysZnJfmmaPleIcab0ujKZMaRSyaWpmc34PRXMKmkn%2BMtOHTywyG5DqdtVeT01A4Ad1vk%2BorpUP&X-Amz-Signature=b3a94be69c2841fe2793c8505a30c9eac07404aa7dc60487d38011335dbce60e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CDZZMH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIG07clrBJDUcUzawwHzoN7X%2B17ZNC1c4vPFmSd65RG8kAiEAkNdJ4UCHlriOqBHYId3HaAnUSIpO5ioBcBCeAJdEdDcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSKBp%2FMPDQtvgkf4ircA0vgGSz%2B3gJN7rZwVedVUI2TduvVSkBngEeUpqMqILdfrFm7IwuqTkUoDHWIwkM%2BvhBNVC8RiraqiZtnIcz28F%2BdRTfw0D0BmsMv5G1eDH2gOubiLekUH4mO%2F1bjro9jOh1JQiZXwl4xZ07o9rZUTe5gSFxrBqH0C%2FKJlgRNcX1STRdKhN%2FbLDfvkKuSov3NB0gM0KnIJ%2FN1Py5h1gI1L%2Fne29pCF%2F4VaXK8QTKAO9pR0MCkrNoyxiCyTcJ4932DJWdHbFQ9xAGLujSCM9TnTQCuhII3Aum6gFWEPokTSVa8I4IYVzARuRt1YYBOaUufzOmnpX0Q5JSKC%2F27qy11SDvFHK8CyAnz2G1Hm62mGUyqDDAMlDkY6pLAppYKhisJ%2Bm1Ko3AAexx3nHD7DJiX2acNxabkJJCM8z%2BFGNiyrWflZv7twbmLGzw54r%2Bpi4n93IUjHs8dfkprL83rg55RJ%2FkP2t9eK1tfrNtxRKgXjMrhgFy8eYHEoe8Ylg6pJ62aW2DSdQabewKnOMAQKaNPYzLTq0mLQcCUxeoSxW46ofVLRVsKztHdEhwF%2FaCtwspaKtWGuyijSt18YWqfh5cUIkN4YmOciDiy5qKzuTZjEd4%2Bguf%2FdsVCa%2FxkiHfyMOnE28QGOqUBKIam%2FuJmKlIQBG5%2FzmP1x%2B4RHKcHcW8Ca04hZfutUz7YqxFSZ%2BcpN2qEJYCIcn3%2FCnj4eMGcKfapsl7k81iDTPZFddqG%2BTlHidoWNqjx3rWweWd%2FlpyOkWUMvLCBiWMVW2PKE%2FSbrXVJzh7M3YxhGWKw10Dkj%2F2A6EWIeGIXeE%2Ba1XExaE6p4WbvDSMQJDYhtJoqUT7Jr53XqMassGKOW47Y%2Bfz4&X-Amz-Signature=a9f17bdefe94f049986b8ac4ac2e24fdd474cb2e775517df99409179df2147fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZQMAB7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChXzpVIJkJ1XtKgcZiQzr1pgaQOVF2gmJw9kFYB4G5mAIhAOs0ePi0dNQXE3HCOYbGT4%2BmCd5aOd3uewy7jQ5Qi5fHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiwNtaOehbhSt2RBMq3AMKp16Q30nNtW0GDkE8phvCH9zCn03qiJzZ83zDN%2Bu2VEh6gs9PPyOCXu%2FxaZyzeGPy9LNrYJAXZrwdyMw320cmnCDb5DQntG%2F7wuUDrF43KVS70n6%2BjuB8ql7pkCEgTj0XQXd0b1UCyvk%2B%2FNdTSVVfS4HvxAbbqsVj9oDCkFSW0fTnihpn7MXbaARn4SfeyOU%2BesI%2BaobgZj9itjpBYCArXibL19hHViR89uBLKmJPbuds1UyKaHHkzaDew68T8yOvotGI%2F7KoF%2B5W4%2F3gnav1kRPFkTrY7rtFx4hQPdcFDJzjqAqGba7Wi%2BTtu%2BKMXlBsj%2BwV5l%2FhON33n7e36fK8LunLj%2FY1rk12wS%2B23J9GO2kKhD49x6%2B4mGrF%2FH3i8kmDrwHvB7RwhmHRo6%2BKtHpUXuSI0VkIMhEDgG0DUpHhOoB2Gt47ufCjBeYSxn9wmYxvhgwaEeHsTaDznRU30pZ9%2FECN7oi8em9cXxZ5lEUNVQ4WFssVxlzKc0oGK8JhSfdy8OTNAHNRf0u8RnK%2FwhWVs%2Bsnk%2BvTpuqqcaG7i4m4i%2Fd7uD5LB3SIHb8zkVEKK3trmcvfHqQomIuvM7KdVsvpuPSFTOpxsL9cIj6%2FGFAkGyBQx1zDbGLJnKxwBzDyxNvEBjqkAcLUiWMfSLN4Hx6KHRfG6cXGQvFTHv0Gn%2B6NdCFNz0nzm7i9IJJlCRfzoTLZwl7gTw1Dta0MWHLZpePJU%2BDkNUqKCyaPCBWTWHUQ%2FwBJLbCSpzmYsqjDmE0K8hn1Ll2qzNLoF%2Bjjj25KmxYLEX7y%2F4w2KaXOd1dDRWE3BK7SC1EsyCZYlrMo%2FMhxWoyRQOthxBgf28Ii97HchER8Yi9ZXmrLRA1I&X-Amz-Signature=2fec4fb37f78b064fd03f5a491af3c049e0953d6bbcf684141564f34eb9067bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZQMAB7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQChXzpVIJkJ1XtKgcZiQzr1pgaQOVF2gmJw9kFYB4G5mAIhAOs0ePi0dNQXE3HCOYbGT4%2BmCd5aOd3uewy7jQ5Qi5fHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiwNtaOehbhSt2RBMq3AMKp16Q30nNtW0GDkE8phvCH9zCn03qiJzZ83zDN%2Bu2VEh6gs9PPyOCXu%2FxaZyzeGPy9LNrYJAXZrwdyMw320cmnCDb5DQntG%2F7wuUDrF43KVS70n6%2BjuB8ql7pkCEgTj0XQXd0b1UCyvk%2B%2FNdTSVVfS4HvxAbbqsVj9oDCkFSW0fTnihpn7MXbaARn4SfeyOU%2BesI%2BaobgZj9itjpBYCArXibL19hHViR89uBLKmJPbuds1UyKaHHkzaDew68T8yOvotGI%2F7KoF%2B5W4%2F3gnav1kRPFkTrY7rtFx4hQPdcFDJzjqAqGba7Wi%2BTtu%2BKMXlBsj%2BwV5l%2FhON33n7e36fK8LunLj%2FY1rk12wS%2B23J9GO2kKhD49x6%2B4mGrF%2FH3i8kmDrwHvB7RwhmHRo6%2BKtHpUXuSI0VkIMhEDgG0DUpHhOoB2Gt47ufCjBeYSxn9wmYxvhgwaEeHsTaDznRU30pZ9%2FECN7oi8em9cXxZ5lEUNVQ4WFssVxlzKc0oGK8JhSfdy8OTNAHNRf0u8RnK%2FwhWVs%2Bsnk%2BvTpuqqcaG7i4m4i%2Fd7uD5LB3SIHb8zkVEKK3trmcvfHqQomIuvM7KdVsvpuPSFTOpxsL9cIj6%2FGFAkGyBQx1zDbGLJnKxwBzDyxNvEBjqkAcLUiWMfSLN4Hx6KHRfG6cXGQvFTHv0Gn%2B6NdCFNz0nzm7i9IJJlCRfzoTLZwl7gTw1Dta0MWHLZpePJU%2BDkNUqKCyaPCBWTWHUQ%2FwBJLbCSpzmYsqjDmE0K8hn1Ll2qzNLoF%2Bjjj25KmxYLEX7y%2F4w2KaXOd1dDRWE3BK7SC1EsyCZYlrMo%2FMhxWoyRQOthxBgf28Ii97HchER8Yi9ZXmrLRA1I&X-Amz-Signature=700280638bb51f3c2fe032b66d9b1d52e847669984b51826ae7a3c19d11f1de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGT7DSS3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCS2nk1AnFDWcuFtrV9breWTWLiSoyUkTzpPa7L66Tb2AIhAO2MIuNFZGjhIzbiLf8gt%2B1iYz6XyfwdInH48oDzvMciKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJtJkrQvZJvYMZUOIq3APTDjAkjDGBsDe2iQyVZ4rQpQjF6Sjgjdp1ESA916yC2xR7%2B2EYO2MhY5zb%2BPxJnPxOu6gf5VkPGQHUKnojReEEiVVM3ThbEYExGTZ3o6aFHqVfNWy55px6X4S65W6ITGpWkbMiZG%2FPQAYVG%2Br2QmsisGQCcUMHaT%2FI6Mqsv6fDAcRzOevXmR1kNmnrSVFMDclBdR20DEGa7H4Gt%2B6b6fF0U1hWSmuR4wnV3MSam8PCjdfSUkw86xNf5XScsf5N4hHN%2BL1xJEPXodNdqQLtSX0iHTfamFtlpwPA4Akmu6%2Fr7XH%2BBxKAcHl24WqF05PHVAyorNd0ZiyuqmVB772acYIvdN4cxK5xTiGJyoYfSc%2BRgoC5ezzOoN5YfQ2g2PQkJ4%2Fd5pGILz%2FMNGMVlgU2OchFNe56aynK3VtRsrV%2BlExgi0mn9pbIRZtNBF8VjIRuTgQj0iotUkOM4BCpwwmvSvCWSkcoWRoyGdx9ku7He9vjKNLy2sIZAJ6k804UrD3aQqGeAUgogwvB7NBqeApxHZt41SwivFGJmYypgBsSIW2L%2B2fk3CZ22uUu6jAsClhkLbXYWfgO0mvzZeoBYkTfg%2BCBFpyDrLCCRLPQtn2tZDmUCUsERfFDxlEwbegCGTD1xNvEBjqkAUCBk%2FzY1MCn8IHk1sbJY64OB9lxcCMaRSqJpsd0DrkMI22l9a3IVexcg%2FmJ0tFrQzpe41R4KxD%2Ff5PqYO0p1sj13ljiqF17f02csmdY1wehOtNlw4zXm1S%2F8xZwmfj%2FU7pIQYlIPTUUUltm12uFHOaTHJea5VHXODezb7HrT1PfrUZJEp8u%2BteeeJnBbemMa6hGu0usXqxDz6Smd5yNBZj04mOO&X-Amz-Signature=8c6913302bcbb0576eed841cfac1ce7f8f10c6d52d0ffaefc97ef374e6d67778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGT7DSS3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCS2nk1AnFDWcuFtrV9breWTWLiSoyUkTzpPa7L66Tb2AIhAO2MIuNFZGjhIzbiLf8gt%2B1iYz6XyfwdInH48oDzvMciKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJtJkrQvZJvYMZUOIq3APTDjAkjDGBsDe2iQyVZ4rQpQjF6Sjgjdp1ESA916yC2xR7%2B2EYO2MhY5zb%2BPxJnPxOu6gf5VkPGQHUKnojReEEiVVM3ThbEYExGTZ3o6aFHqVfNWy55px6X4S65W6ITGpWkbMiZG%2FPQAYVG%2Br2QmsisGQCcUMHaT%2FI6Mqsv6fDAcRzOevXmR1kNmnrSVFMDclBdR20DEGa7H4Gt%2B6b6fF0U1hWSmuR4wnV3MSam8PCjdfSUkw86xNf5XScsf5N4hHN%2BL1xJEPXodNdqQLtSX0iHTfamFtlpwPA4Akmu6%2Fr7XH%2BBxKAcHl24WqF05PHVAyorNd0ZiyuqmVB772acYIvdN4cxK5xTiGJyoYfSc%2BRgoC5ezzOoN5YfQ2g2PQkJ4%2Fd5pGILz%2FMNGMVlgU2OchFNe56aynK3VtRsrV%2BlExgi0mn9pbIRZtNBF8VjIRuTgQj0iotUkOM4BCpwwmvSvCWSkcoWRoyGdx9ku7He9vjKNLy2sIZAJ6k804UrD3aQqGeAUgogwvB7NBqeApxHZt41SwivFGJmYypgBsSIW2L%2B2fk3CZ22uUu6jAsClhkLbXYWfgO0mvzZeoBYkTfg%2BCBFpyDrLCCRLPQtn2tZDmUCUsERfFDxlEwbegCGTD1xNvEBjqkAUCBk%2FzY1MCn8IHk1sbJY64OB9lxcCMaRSqJpsd0DrkMI22l9a3IVexcg%2FmJ0tFrQzpe41R4KxD%2Ff5PqYO0p1sj13ljiqF17f02csmdY1wehOtNlw4zXm1S%2F8xZwmfj%2FU7pIQYlIPTUUUltm12uFHOaTHJea5VHXODezb7HrT1PfrUZJEp8u%2BteeeJnBbemMa6hGu0usXqxDz6Smd5yNBZj04mOO&X-Amz-Signature=5e1f3c5d74652928f3ac1f50af883dd0ad3a392db0ddba118e5267e5bab03301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGT7DSS3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCS2nk1AnFDWcuFtrV9breWTWLiSoyUkTzpPa7L66Tb2AIhAO2MIuNFZGjhIzbiLf8gt%2B1iYz6XyfwdInH48oDzvMciKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJtJkrQvZJvYMZUOIq3APTDjAkjDGBsDe2iQyVZ4rQpQjF6Sjgjdp1ESA916yC2xR7%2B2EYO2MhY5zb%2BPxJnPxOu6gf5VkPGQHUKnojReEEiVVM3ThbEYExGTZ3o6aFHqVfNWy55px6X4S65W6ITGpWkbMiZG%2FPQAYVG%2Br2QmsisGQCcUMHaT%2FI6Mqsv6fDAcRzOevXmR1kNmnrSVFMDclBdR20DEGa7H4Gt%2B6b6fF0U1hWSmuR4wnV3MSam8PCjdfSUkw86xNf5XScsf5N4hHN%2BL1xJEPXodNdqQLtSX0iHTfamFtlpwPA4Akmu6%2Fr7XH%2BBxKAcHl24WqF05PHVAyorNd0ZiyuqmVB772acYIvdN4cxK5xTiGJyoYfSc%2BRgoC5ezzOoN5YfQ2g2PQkJ4%2Fd5pGILz%2FMNGMVlgU2OchFNe56aynK3VtRsrV%2BlExgi0mn9pbIRZtNBF8VjIRuTgQj0iotUkOM4BCpwwmvSvCWSkcoWRoyGdx9ku7He9vjKNLy2sIZAJ6k804UrD3aQqGeAUgogwvB7NBqeApxHZt41SwivFGJmYypgBsSIW2L%2B2fk3CZ22uUu6jAsClhkLbXYWfgO0mvzZeoBYkTfg%2BCBFpyDrLCCRLPQtn2tZDmUCUsERfFDxlEwbegCGTD1xNvEBjqkAUCBk%2FzY1MCn8IHk1sbJY64OB9lxcCMaRSqJpsd0DrkMI22l9a3IVexcg%2FmJ0tFrQzpe41R4KxD%2Ff5PqYO0p1sj13ljiqF17f02csmdY1wehOtNlw4zXm1S%2F8xZwmfj%2FU7pIQYlIPTUUUltm12uFHOaTHJea5VHXODezb7HrT1PfrUZJEp8u%2BteeeJnBbemMa6hGu0usXqxDz6Smd5yNBZj04mOO&X-Amz-Signature=82da6769b754948ddea11a3d126bada59a75803fc75621fc3c4c54e3c575d19a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGT7DSS3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCS2nk1AnFDWcuFtrV9breWTWLiSoyUkTzpPa7L66Tb2AIhAO2MIuNFZGjhIzbiLf8gt%2B1iYz6XyfwdInH48oDzvMciKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJtJkrQvZJvYMZUOIq3APTDjAkjDGBsDe2iQyVZ4rQpQjF6Sjgjdp1ESA916yC2xR7%2B2EYO2MhY5zb%2BPxJnPxOu6gf5VkPGQHUKnojReEEiVVM3ThbEYExGTZ3o6aFHqVfNWy55px6X4S65W6ITGpWkbMiZG%2FPQAYVG%2Br2QmsisGQCcUMHaT%2FI6Mqsv6fDAcRzOevXmR1kNmnrSVFMDclBdR20DEGa7H4Gt%2B6b6fF0U1hWSmuR4wnV3MSam8PCjdfSUkw86xNf5XScsf5N4hHN%2BL1xJEPXodNdqQLtSX0iHTfamFtlpwPA4Akmu6%2Fr7XH%2BBxKAcHl24WqF05PHVAyorNd0ZiyuqmVB772acYIvdN4cxK5xTiGJyoYfSc%2BRgoC5ezzOoN5YfQ2g2PQkJ4%2Fd5pGILz%2FMNGMVlgU2OchFNe56aynK3VtRsrV%2BlExgi0mn9pbIRZtNBF8VjIRuTgQj0iotUkOM4BCpwwmvSvCWSkcoWRoyGdx9ku7He9vjKNLy2sIZAJ6k804UrD3aQqGeAUgogwvB7NBqeApxHZt41SwivFGJmYypgBsSIW2L%2B2fk3CZ22uUu6jAsClhkLbXYWfgO0mvzZeoBYkTfg%2BCBFpyDrLCCRLPQtn2tZDmUCUsERfFDxlEwbegCGTD1xNvEBjqkAUCBk%2FzY1MCn8IHk1sbJY64OB9lxcCMaRSqJpsd0DrkMI22l9a3IVexcg%2FmJ0tFrQzpe41R4KxD%2Ff5PqYO0p1sj13ljiqF17f02csmdY1wehOtNlw4zXm1S%2F8xZwmfj%2FU7pIQYlIPTUUUltm12uFHOaTHJea5VHXODezb7HrT1PfrUZJEp8u%2BteeeJnBbemMa6hGu0usXqxDz6Smd5yNBZj04mOO&X-Amz-Signature=7b35419031bb67049574526dee80016cb21c7dbdec415d173631b0fc18f1f931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGT7DSS3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCS2nk1AnFDWcuFtrV9breWTWLiSoyUkTzpPa7L66Tb2AIhAO2MIuNFZGjhIzbiLf8gt%2B1iYz6XyfwdInH48oDzvMciKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJtJkrQvZJvYMZUOIq3APTDjAkjDGBsDe2iQyVZ4rQpQjF6Sjgjdp1ESA916yC2xR7%2B2EYO2MhY5zb%2BPxJnPxOu6gf5VkPGQHUKnojReEEiVVM3ThbEYExGTZ3o6aFHqVfNWy55px6X4S65W6ITGpWkbMiZG%2FPQAYVG%2Br2QmsisGQCcUMHaT%2FI6Mqsv6fDAcRzOevXmR1kNmnrSVFMDclBdR20DEGa7H4Gt%2B6b6fF0U1hWSmuR4wnV3MSam8PCjdfSUkw86xNf5XScsf5N4hHN%2BL1xJEPXodNdqQLtSX0iHTfamFtlpwPA4Akmu6%2Fr7XH%2BBxKAcHl24WqF05PHVAyorNd0ZiyuqmVB772acYIvdN4cxK5xTiGJyoYfSc%2BRgoC5ezzOoN5YfQ2g2PQkJ4%2Fd5pGILz%2FMNGMVlgU2OchFNe56aynK3VtRsrV%2BlExgi0mn9pbIRZtNBF8VjIRuTgQj0iotUkOM4BCpwwmvSvCWSkcoWRoyGdx9ku7He9vjKNLy2sIZAJ6k804UrD3aQqGeAUgogwvB7NBqeApxHZt41SwivFGJmYypgBsSIW2L%2B2fk3CZ22uUu6jAsClhkLbXYWfgO0mvzZeoBYkTfg%2BCBFpyDrLCCRLPQtn2tZDmUCUsERfFDxlEwbegCGTD1xNvEBjqkAUCBk%2FzY1MCn8IHk1sbJY64OB9lxcCMaRSqJpsd0DrkMI22l9a3IVexcg%2FmJ0tFrQzpe41R4KxD%2Ff5PqYO0p1sj13ljiqF17f02csmdY1wehOtNlw4zXm1S%2F8xZwmfj%2FU7pIQYlIPTUUUltm12uFHOaTHJea5VHXODezb7HrT1PfrUZJEp8u%2BteeeJnBbemMa6hGu0usXqxDz6Smd5yNBZj04mOO&X-Amz-Signature=6732796fd29bc1a8a518769ed98dd89ba10de9ac315df836663c893e1b00b9c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGT7DSS3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCS2nk1AnFDWcuFtrV9breWTWLiSoyUkTzpPa7L66Tb2AIhAO2MIuNFZGjhIzbiLf8gt%2B1iYz6XyfwdInH48oDzvMciKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJtJkrQvZJvYMZUOIq3APTDjAkjDGBsDe2iQyVZ4rQpQjF6Sjgjdp1ESA916yC2xR7%2B2EYO2MhY5zb%2BPxJnPxOu6gf5VkPGQHUKnojReEEiVVM3ThbEYExGTZ3o6aFHqVfNWy55px6X4S65W6ITGpWkbMiZG%2FPQAYVG%2Br2QmsisGQCcUMHaT%2FI6Mqsv6fDAcRzOevXmR1kNmnrSVFMDclBdR20DEGa7H4Gt%2B6b6fF0U1hWSmuR4wnV3MSam8PCjdfSUkw86xNf5XScsf5N4hHN%2BL1xJEPXodNdqQLtSX0iHTfamFtlpwPA4Akmu6%2Fr7XH%2BBxKAcHl24WqF05PHVAyorNd0ZiyuqmVB772acYIvdN4cxK5xTiGJyoYfSc%2BRgoC5ezzOoN5YfQ2g2PQkJ4%2Fd5pGILz%2FMNGMVlgU2OchFNe56aynK3VtRsrV%2BlExgi0mn9pbIRZtNBF8VjIRuTgQj0iotUkOM4BCpwwmvSvCWSkcoWRoyGdx9ku7He9vjKNLy2sIZAJ6k804UrD3aQqGeAUgogwvB7NBqeApxHZt41SwivFGJmYypgBsSIW2L%2B2fk3CZ22uUu6jAsClhkLbXYWfgO0mvzZeoBYkTfg%2BCBFpyDrLCCRLPQtn2tZDmUCUsERfFDxlEwbegCGTD1xNvEBjqkAUCBk%2FzY1MCn8IHk1sbJY64OB9lxcCMaRSqJpsd0DrkMI22l9a3IVexcg%2FmJ0tFrQzpe41R4KxD%2Ff5PqYO0p1sj13ljiqF17f02csmdY1wehOtNlw4zXm1S%2F8xZwmfj%2FU7pIQYlIPTUUUltm12uFHOaTHJea5VHXODezb7HrT1PfrUZJEp8u%2BteeeJnBbemMa6hGu0usXqxDz6Smd5yNBZj04mOO&X-Amz-Signature=0c0ea436263650737ae5313ecf9fa1641429012d7842112e18b2550f32bb9e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGT7DSS3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCS2nk1AnFDWcuFtrV9breWTWLiSoyUkTzpPa7L66Tb2AIhAO2MIuNFZGjhIzbiLf8gt%2B1iYz6XyfwdInH48oDzvMciKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJtJkrQvZJvYMZUOIq3APTDjAkjDGBsDe2iQyVZ4rQpQjF6Sjgjdp1ESA916yC2xR7%2B2EYO2MhY5zb%2BPxJnPxOu6gf5VkPGQHUKnojReEEiVVM3ThbEYExGTZ3o6aFHqVfNWy55px6X4S65W6ITGpWkbMiZG%2FPQAYVG%2Br2QmsisGQCcUMHaT%2FI6Mqsv6fDAcRzOevXmR1kNmnrSVFMDclBdR20DEGa7H4Gt%2B6b6fF0U1hWSmuR4wnV3MSam8PCjdfSUkw86xNf5XScsf5N4hHN%2BL1xJEPXodNdqQLtSX0iHTfamFtlpwPA4Akmu6%2Fr7XH%2BBxKAcHl24WqF05PHVAyorNd0ZiyuqmVB772acYIvdN4cxK5xTiGJyoYfSc%2BRgoC5ezzOoN5YfQ2g2PQkJ4%2Fd5pGILz%2FMNGMVlgU2OchFNe56aynK3VtRsrV%2BlExgi0mn9pbIRZtNBF8VjIRuTgQj0iotUkOM4BCpwwmvSvCWSkcoWRoyGdx9ku7He9vjKNLy2sIZAJ6k804UrD3aQqGeAUgogwvB7NBqeApxHZt41SwivFGJmYypgBsSIW2L%2B2fk3CZ22uUu6jAsClhkLbXYWfgO0mvzZeoBYkTfg%2BCBFpyDrLCCRLPQtn2tZDmUCUsERfFDxlEwbegCGTD1xNvEBjqkAUCBk%2FzY1MCn8IHk1sbJY64OB9lxcCMaRSqJpsd0DrkMI22l9a3IVexcg%2FmJ0tFrQzpe41R4KxD%2Ff5PqYO0p1sj13ljiqF17f02csmdY1wehOtNlw4zXm1S%2F8xZwmfj%2FU7pIQYlIPTUUUltm12uFHOaTHJea5VHXODezb7HrT1PfrUZJEp8u%2BteeeJnBbemMa6hGu0usXqxDz6Smd5yNBZj04mOO&X-Amz-Signature=82da6769b754948ddea11a3d126bada59a75803fc75621fc3c4c54e3c575d19a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGT7DSS3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCS2nk1AnFDWcuFtrV9breWTWLiSoyUkTzpPa7L66Tb2AIhAO2MIuNFZGjhIzbiLf8gt%2B1iYz6XyfwdInH48oDzvMciKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJtJkrQvZJvYMZUOIq3APTDjAkjDGBsDe2iQyVZ4rQpQjF6Sjgjdp1ESA916yC2xR7%2B2EYO2MhY5zb%2BPxJnPxOu6gf5VkPGQHUKnojReEEiVVM3ThbEYExGTZ3o6aFHqVfNWy55px6X4S65W6ITGpWkbMiZG%2FPQAYVG%2Br2QmsisGQCcUMHaT%2FI6Mqsv6fDAcRzOevXmR1kNmnrSVFMDclBdR20DEGa7H4Gt%2B6b6fF0U1hWSmuR4wnV3MSam8PCjdfSUkw86xNf5XScsf5N4hHN%2BL1xJEPXodNdqQLtSX0iHTfamFtlpwPA4Akmu6%2Fr7XH%2BBxKAcHl24WqF05PHVAyorNd0ZiyuqmVB772acYIvdN4cxK5xTiGJyoYfSc%2BRgoC5ezzOoN5YfQ2g2PQkJ4%2Fd5pGILz%2FMNGMVlgU2OchFNe56aynK3VtRsrV%2BlExgi0mn9pbIRZtNBF8VjIRuTgQj0iotUkOM4BCpwwmvSvCWSkcoWRoyGdx9ku7He9vjKNLy2sIZAJ6k804UrD3aQqGeAUgogwvB7NBqeApxHZt41SwivFGJmYypgBsSIW2L%2B2fk3CZ22uUu6jAsClhkLbXYWfgO0mvzZeoBYkTfg%2BCBFpyDrLCCRLPQtn2tZDmUCUsERfFDxlEwbegCGTD1xNvEBjqkAUCBk%2FzY1MCn8IHk1sbJY64OB9lxcCMaRSqJpsd0DrkMI22l9a3IVexcg%2FmJ0tFrQzpe41R4KxD%2Ff5PqYO0p1sj13ljiqF17f02csmdY1wehOtNlw4zXm1S%2F8xZwmfj%2FU7pIQYlIPTUUUltm12uFHOaTHJea5VHXODezb7HrT1PfrUZJEp8u%2BteeeJnBbemMa6hGu0usXqxDz6Smd5yNBZj04mOO&X-Amz-Signature=3ed88fac5bdf883b9db5ca2a3717433d786205380fe26cd982c9c2762dfd323b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGT7DSS3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCS2nk1AnFDWcuFtrV9breWTWLiSoyUkTzpPa7L66Tb2AIhAO2MIuNFZGjhIzbiLf8gt%2B1iYz6XyfwdInH48oDzvMciKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJtJkrQvZJvYMZUOIq3APTDjAkjDGBsDe2iQyVZ4rQpQjF6Sjgjdp1ESA916yC2xR7%2B2EYO2MhY5zb%2BPxJnPxOu6gf5VkPGQHUKnojReEEiVVM3ThbEYExGTZ3o6aFHqVfNWy55px6X4S65W6ITGpWkbMiZG%2FPQAYVG%2Br2QmsisGQCcUMHaT%2FI6Mqsv6fDAcRzOevXmR1kNmnrSVFMDclBdR20DEGa7H4Gt%2B6b6fF0U1hWSmuR4wnV3MSam8PCjdfSUkw86xNf5XScsf5N4hHN%2BL1xJEPXodNdqQLtSX0iHTfamFtlpwPA4Akmu6%2Fr7XH%2BBxKAcHl24WqF05PHVAyorNd0ZiyuqmVB772acYIvdN4cxK5xTiGJyoYfSc%2BRgoC5ezzOoN5YfQ2g2PQkJ4%2Fd5pGILz%2FMNGMVlgU2OchFNe56aynK3VtRsrV%2BlExgi0mn9pbIRZtNBF8VjIRuTgQj0iotUkOM4BCpwwmvSvCWSkcoWRoyGdx9ku7He9vjKNLy2sIZAJ6k804UrD3aQqGeAUgogwvB7NBqeApxHZt41SwivFGJmYypgBsSIW2L%2B2fk3CZ22uUu6jAsClhkLbXYWfgO0mvzZeoBYkTfg%2BCBFpyDrLCCRLPQtn2tZDmUCUsERfFDxlEwbegCGTD1xNvEBjqkAUCBk%2FzY1MCn8IHk1sbJY64OB9lxcCMaRSqJpsd0DrkMI22l9a3IVexcg%2FmJ0tFrQzpe41R4KxD%2Ff5PqYO0p1sj13ljiqF17f02csmdY1wehOtNlw4zXm1S%2F8xZwmfj%2FU7pIQYlIPTUUUltm12uFHOaTHJea5VHXODezb7HrT1PfrUZJEp8u%2BteeeJnBbemMa6hGu0usXqxDz6Smd5yNBZj04mOO&X-Amz-Signature=3646f149fb1520a37c329473cc1c20342058484de9d41265b410d2d2fba607aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGT7DSS3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCS2nk1AnFDWcuFtrV9breWTWLiSoyUkTzpPa7L66Tb2AIhAO2MIuNFZGjhIzbiLf8gt%2B1iYz6XyfwdInH48oDzvMciKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJtJkrQvZJvYMZUOIq3APTDjAkjDGBsDe2iQyVZ4rQpQjF6Sjgjdp1ESA916yC2xR7%2B2EYO2MhY5zb%2BPxJnPxOu6gf5VkPGQHUKnojReEEiVVM3ThbEYExGTZ3o6aFHqVfNWy55px6X4S65W6ITGpWkbMiZG%2FPQAYVG%2Br2QmsisGQCcUMHaT%2FI6Mqsv6fDAcRzOevXmR1kNmnrSVFMDclBdR20DEGa7H4Gt%2B6b6fF0U1hWSmuR4wnV3MSam8PCjdfSUkw86xNf5XScsf5N4hHN%2BL1xJEPXodNdqQLtSX0iHTfamFtlpwPA4Akmu6%2Fr7XH%2BBxKAcHl24WqF05PHVAyorNd0ZiyuqmVB772acYIvdN4cxK5xTiGJyoYfSc%2BRgoC5ezzOoN5YfQ2g2PQkJ4%2Fd5pGILz%2FMNGMVlgU2OchFNe56aynK3VtRsrV%2BlExgi0mn9pbIRZtNBF8VjIRuTgQj0iotUkOM4BCpwwmvSvCWSkcoWRoyGdx9ku7He9vjKNLy2sIZAJ6k804UrD3aQqGeAUgogwvB7NBqeApxHZt41SwivFGJmYypgBsSIW2L%2B2fk3CZ22uUu6jAsClhkLbXYWfgO0mvzZeoBYkTfg%2BCBFpyDrLCCRLPQtn2tZDmUCUsERfFDxlEwbegCGTD1xNvEBjqkAUCBk%2FzY1MCn8IHk1sbJY64OB9lxcCMaRSqJpsd0DrkMI22l9a3IVexcg%2FmJ0tFrQzpe41R4KxD%2Ff5PqYO0p1sj13ljiqF17f02csmdY1wehOtNlw4zXm1S%2F8xZwmfj%2FU7pIQYlIPTUUUltm12uFHOaTHJea5VHXODezb7HrT1PfrUZJEp8u%2BteeeJnBbemMa6hGu0usXqxDz6Smd5yNBZj04mOO&X-Amz-Signature=1474e769493b6975e25253fee609cec60afd708e42df8e69227b360420d4c123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
