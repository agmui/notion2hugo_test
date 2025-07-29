---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-28T21:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-28T21:43:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOVTTTP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAamv9%2B1aJmCQBkZlLUJ%2B6IEIYopfGsbWnd93aUPs36EAiEA8JWPH9AZWVkCGJ4VlZtRGIY%2FyvGLhj12QM7VPou0xNcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYntbiT%2BBMW6jAiISrcAypeWv1tHYJkYCXbY3q%2BNrnGCtdk8KbCeVbbZtYFrvTP2UT4PcWv%2FSOtI%2FANEUMoI8ouFBcpk3DwP9Uwg6C9Xzs5%2B80Qk2OJWnBXbics0Xm1LCU0mzD5vI9KdUzuZ0Texfmfu3Z9WOIwVmgQXkdodSJri6cwyMpshSqk0MzTEpARztjd38IEkB0Sf3mcN4DmSJ%2Fuo1M9IfOInR8aTWRgf2Hh%2F6P5kiKxyAGEGFO6jvkOyDecULOZH5n8npd85S66JWwpNbliViTue5Hhye0SMn2ygfLYHgKDU0EGw7b%2BKvzAUGyOtgtI%2F0sJIB40LUWQl9EudxiHI2%2BOXRyl8yxaF%2Bh1A0Kl4ZMSQ5HtCSLhpqh3O3VYzes6%2FI2jxOjmfyfE7t9eGE7Hl3xLefpmJg%2FB%2FyB8YBOHea%2FvINtERnZwb%2F8a5KjmXmUtX8irZLtAadV4q7LA%2BWTqGOUrv%2B8xj0DlJesPIZKeYqwWVS1ennyYc9cvh47ga%2BcZPvx%2Ba5D%2Fe5sJTV4DL4bdaUrndqqO82oBIDoFIe27mQP8TeGMOGE%2FSJP8O2lr7U5NsnmLYNR4XKpVH5MehLtHpsBFHTJbfoz9RiTEQJ7dwiwt6RRFrvOroRE5u5vFWQpygZI%2BnR6zMOaxosQGOqUBB8523yWRN04gxojk1hW9SuT8e%2BtK%2BPCGcrePVS0stpd8chnNX50cF23qcLODUQPcFz%2FJaf564xGxb2%2FEuqV7rW5PsrsqJsEN5WvwV03xBZDpkFHyrJLKsXYv5WjRKcSWy5xVq4IinUOWKeqFJlLghwiGiKAWUzfoJOJK7FAyIQoszb%2Fif14c1%2BWBxImV%2FQ9ECGR3QL3vURM5260n53uzccqgE8hC&X-Amz-Signature=3b6ee7eca7e878d3135b573f7c1d18787e6983caafc89c2f7ba54d9e882111d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOVTTTP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAamv9%2B1aJmCQBkZlLUJ%2B6IEIYopfGsbWnd93aUPs36EAiEA8JWPH9AZWVkCGJ4VlZtRGIY%2FyvGLhj12QM7VPou0xNcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYntbiT%2BBMW6jAiISrcAypeWv1tHYJkYCXbY3q%2BNrnGCtdk8KbCeVbbZtYFrvTP2UT4PcWv%2FSOtI%2FANEUMoI8ouFBcpk3DwP9Uwg6C9Xzs5%2B80Qk2OJWnBXbics0Xm1LCU0mzD5vI9KdUzuZ0Texfmfu3Z9WOIwVmgQXkdodSJri6cwyMpshSqk0MzTEpARztjd38IEkB0Sf3mcN4DmSJ%2Fuo1M9IfOInR8aTWRgf2Hh%2F6P5kiKxyAGEGFO6jvkOyDecULOZH5n8npd85S66JWwpNbliViTue5Hhye0SMn2ygfLYHgKDU0EGw7b%2BKvzAUGyOtgtI%2F0sJIB40LUWQl9EudxiHI2%2BOXRyl8yxaF%2Bh1A0Kl4ZMSQ5HtCSLhpqh3O3VYzes6%2FI2jxOjmfyfE7t9eGE7Hl3xLefpmJg%2FB%2FyB8YBOHea%2FvINtERnZwb%2F8a5KjmXmUtX8irZLtAadV4q7LA%2BWTqGOUrv%2B8xj0DlJesPIZKeYqwWVS1ennyYc9cvh47ga%2BcZPvx%2Ba5D%2Fe5sJTV4DL4bdaUrndqqO82oBIDoFIe27mQP8TeGMOGE%2FSJP8O2lr7U5NsnmLYNR4XKpVH5MehLtHpsBFHTJbfoz9RiTEQJ7dwiwt6RRFrvOroRE5u5vFWQpygZI%2BnR6zMOaxosQGOqUBB8523yWRN04gxojk1hW9SuT8e%2BtK%2BPCGcrePVS0stpd8chnNX50cF23qcLODUQPcFz%2FJaf564xGxb2%2FEuqV7rW5PsrsqJsEN5WvwV03xBZDpkFHyrJLKsXYv5WjRKcSWy5xVq4IinUOWKeqFJlLghwiGiKAWUzfoJOJK7FAyIQoszb%2Fif14c1%2BWBxImV%2FQ9ECGR3QL3vURM5260n53uzccqgE8hC&X-Amz-Signature=c1740135c85686115a190190f45cc36ffe290575f57fb40db7b5577e0b8d9fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOVTTTP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAamv9%2B1aJmCQBkZlLUJ%2B6IEIYopfGsbWnd93aUPs36EAiEA8JWPH9AZWVkCGJ4VlZtRGIY%2FyvGLhj12QM7VPou0xNcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYntbiT%2BBMW6jAiISrcAypeWv1tHYJkYCXbY3q%2BNrnGCtdk8KbCeVbbZtYFrvTP2UT4PcWv%2FSOtI%2FANEUMoI8ouFBcpk3DwP9Uwg6C9Xzs5%2B80Qk2OJWnBXbics0Xm1LCU0mzD5vI9KdUzuZ0Texfmfu3Z9WOIwVmgQXkdodSJri6cwyMpshSqk0MzTEpARztjd38IEkB0Sf3mcN4DmSJ%2Fuo1M9IfOInR8aTWRgf2Hh%2F6P5kiKxyAGEGFO6jvkOyDecULOZH5n8npd85S66JWwpNbliViTue5Hhye0SMn2ygfLYHgKDU0EGw7b%2BKvzAUGyOtgtI%2F0sJIB40LUWQl9EudxiHI2%2BOXRyl8yxaF%2Bh1A0Kl4ZMSQ5HtCSLhpqh3O3VYzes6%2FI2jxOjmfyfE7t9eGE7Hl3xLefpmJg%2FB%2FyB8YBOHea%2FvINtERnZwb%2F8a5KjmXmUtX8irZLtAadV4q7LA%2BWTqGOUrv%2B8xj0DlJesPIZKeYqwWVS1ennyYc9cvh47ga%2BcZPvx%2Ba5D%2Fe5sJTV4DL4bdaUrndqqO82oBIDoFIe27mQP8TeGMOGE%2FSJP8O2lr7U5NsnmLYNR4XKpVH5MehLtHpsBFHTJbfoz9RiTEQJ7dwiwt6RRFrvOroRE5u5vFWQpygZI%2BnR6zMOaxosQGOqUBB8523yWRN04gxojk1hW9SuT8e%2BtK%2BPCGcrePVS0stpd8chnNX50cF23qcLODUQPcFz%2FJaf564xGxb2%2FEuqV7rW5PsrsqJsEN5WvwV03xBZDpkFHyrJLKsXYv5WjRKcSWy5xVq4IinUOWKeqFJlLghwiGiKAWUzfoJOJK7FAyIQoszb%2Fif14c1%2BWBxImV%2FQ9ECGR3QL3vURM5260n53uzccqgE8hC&X-Amz-Signature=285ebae73d2cfe3c621fd59f51e659625a01576edfb83a9265e54bd860ffec5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOVTTTP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAamv9%2B1aJmCQBkZlLUJ%2B6IEIYopfGsbWnd93aUPs36EAiEA8JWPH9AZWVkCGJ4VlZtRGIY%2FyvGLhj12QM7VPou0xNcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYntbiT%2BBMW6jAiISrcAypeWv1tHYJkYCXbY3q%2BNrnGCtdk8KbCeVbbZtYFrvTP2UT4PcWv%2FSOtI%2FANEUMoI8ouFBcpk3DwP9Uwg6C9Xzs5%2B80Qk2OJWnBXbics0Xm1LCU0mzD5vI9KdUzuZ0Texfmfu3Z9WOIwVmgQXkdodSJri6cwyMpshSqk0MzTEpARztjd38IEkB0Sf3mcN4DmSJ%2Fuo1M9IfOInR8aTWRgf2Hh%2F6P5kiKxyAGEGFO6jvkOyDecULOZH5n8npd85S66JWwpNbliViTue5Hhye0SMn2ygfLYHgKDU0EGw7b%2BKvzAUGyOtgtI%2F0sJIB40LUWQl9EudxiHI2%2BOXRyl8yxaF%2Bh1A0Kl4ZMSQ5HtCSLhpqh3O3VYzes6%2FI2jxOjmfyfE7t9eGE7Hl3xLefpmJg%2FB%2FyB8YBOHea%2FvINtERnZwb%2F8a5KjmXmUtX8irZLtAadV4q7LA%2BWTqGOUrv%2B8xj0DlJesPIZKeYqwWVS1ennyYc9cvh47ga%2BcZPvx%2Ba5D%2Fe5sJTV4DL4bdaUrndqqO82oBIDoFIe27mQP8TeGMOGE%2FSJP8O2lr7U5NsnmLYNR4XKpVH5MehLtHpsBFHTJbfoz9RiTEQJ7dwiwt6RRFrvOroRE5u5vFWQpygZI%2BnR6zMOaxosQGOqUBB8523yWRN04gxojk1hW9SuT8e%2BtK%2BPCGcrePVS0stpd8chnNX50cF23qcLODUQPcFz%2FJaf564xGxb2%2FEuqV7rW5PsrsqJsEN5WvwV03xBZDpkFHyrJLKsXYv5WjRKcSWy5xVq4IinUOWKeqFJlLghwiGiKAWUzfoJOJK7FAyIQoszb%2Fif14c1%2BWBxImV%2FQ9ECGR3QL3vURM5260n53uzccqgE8hC&X-Amz-Signature=dab69a69662ef4cd9616736f6ceda7ad972b3d5b50fb3ade222c37e8a9e9fc1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOVTTTP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAamv9%2B1aJmCQBkZlLUJ%2B6IEIYopfGsbWnd93aUPs36EAiEA8JWPH9AZWVkCGJ4VlZtRGIY%2FyvGLhj12QM7VPou0xNcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYntbiT%2BBMW6jAiISrcAypeWv1tHYJkYCXbY3q%2BNrnGCtdk8KbCeVbbZtYFrvTP2UT4PcWv%2FSOtI%2FANEUMoI8ouFBcpk3DwP9Uwg6C9Xzs5%2B80Qk2OJWnBXbics0Xm1LCU0mzD5vI9KdUzuZ0Texfmfu3Z9WOIwVmgQXkdodSJri6cwyMpshSqk0MzTEpARztjd38IEkB0Sf3mcN4DmSJ%2Fuo1M9IfOInR8aTWRgf2Hh%2F6P5kiKxyAGEGFO6jvkOyDecULOZH5n8npd85S66JWwpNbliViTue5Hhye0SMn2ygfLYHgKDU0EGw7b%2BKvzAUGyOtgtI%2F0sJIB40LUWQl9EudxiHI2%2BOXRyl8yxaF%2Bh1A0Kl4ZMSQ5HtCSLhpqh3O3VYzes6%2FI2jxOjmfyfE7t9eGE7Hl3xLefpmJg%2FB%2FyB8YBOHea%2FvINtERnZwb%2F8a5KjmXmUtX8irZLtAadV4q7LA%2BWTqGOUrv%2B8xj0DlJesPIZKeYqwWVS1ennyYc9cvh47ga%2BcZPvx%2Ba5D%2Fe5sJTV4DL4bdaUrndqqO82oBIDoFIe27mQP8TeGMOGE%2FSJP8O2lr7U5NsnmLYNR4XKpVH5MehLtHpsBFHTJbfoz9RiTEQJ7dwiwt6RRFrvOroRE5u5vFWQpygZI%2BnR6zMOaxosQGOqUBB8523yWRN04gxojk1hW9SuT8e%2BtK%2BPCGcrePVS0stpd8chnNX50cF23qcLODUQPcFz%2FJaf564xGxb2%2FEuqV7rW5PsrsqJsEN5WvwV03xBZDpkFHyrJLKsXYv5WjRKcSWy5xVq4IinUOWKeqFJlLghwiGiKAWUzfoJOJK7FAyIQoszb%2Fif14c1%2BWBxImV%2FQ9ECGR3QL3vURM5260n53uzccqgE8hC&X-Amz-Signature=e926a0e4d44a0feafcef5ce96363f2352436f127a36cf16ec8453f1c8aa44b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOVTTTP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAamv9%2B1aJmCQBkZlLUJ%2B6IEIYopfGsbWnd93aUPs36EAiEA8JWPH9AZWVkCGJ4VlZtRGIY%2FyvGLhj12QM7VPou0xNcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYntbiT%2BBMW6jAiISrcAypeWv1tHYJkYCXbY3q%2BNrnGCtdk8KbCeVbbZtYFrvTP2UT4PcWv%2FSOtI%2FANEUMoI8ouFBcpk3DwP9Uwg6C9Xzs5%2B80Qk2OJWnBXbics0Xm1LCU0mzD5vI9KdUzuZ0Texfmfu3Z9WOIwVmgQXkdodSJri6cwyMpshSqk0MzTEpARztjd38IEkB0Sf3mcN4DmSJ%2Fuo1M9IfOInR8aTWRgf2Hh%2F6P5kiKxyAGEGFO6jvkOyDecULOZH5n8npd85S66JWwpNbliViTue5Hhye0SMn2ygfLYHgKDU0EGw7b%2BKvzAUGyOtgtI%2F0sJIB40LUWQl9EudxiHI2%2BOXRyl8yxaF%2Bh1A0Kl4ZMSQ5HtCSLhpqh3O3VYzes6%2FI2jxOjmfyfE7t9eGE7Hl3xLefpmJg%2FB%2FyB8YBOHea%2FvINtERnZwb%2F8a5KjmXmUtX8irZLtAadV4q7LA%2BWTqGOUrv%2B8xj0DlJesPIZKeYqwWVS1ennyYc9cvh47ga%2BcZPvx%2Ba5D%2Fe5sJTV4DL4bdaUrndqqO82oBIDoFIe27mQP8TeGMOGE%2FSJP8O2lr7U5NsnmLYNR4XKpVH5MehLtHpsBFHTJbfoz9RiTEQJ7dwiwt6RRFrvOroRE5u5vFWQpygZI%2BnR6zMOaxosQGOqUBB8523yWRN04gxojk1hW9SuT8e%2BtK%2BPCGcrePVS0stpd8chnNX50cF23qcLODUQPcFz%2FJaf564xGxb2%2FEuqV7rW5PsrsqJsEN5WvwV03xBZDpkFHyrJLKsXYv5WjRKcSWy5xVq4IinUOWKeqFJlLghwiGiKAWUzfoJOJK7FAyIQoszb%2Fif14c1%2BWBxImV%2FQ9ECGR3QL3vURM5260n53uzccqgE8hC&X-Amz-Signature=9c21e96ea6ba8e2aeab82d90345ea876a306f53caa7520214c4284d3fb16c819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOVTTTP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAamv9%2B1aJmCQBkZlLUJ%2B6IEIYopfGsbWnd93aUPs36EAiEA8JWPH9AZWVkCGJ4VlZtRGIY%2FyvGLhj12QM7VPou0xNcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYntbiT%2BBMW6jAiISrcAypeWv1tHYJkYCXbY3q%2BNrnGCtdk8KbCeVbbZtYFrvTP2UT4PcWv%2FSOtI%2FANEUMoI8ouFBcpk3DwP9Uwg6C9Xzs5%2B80Qk2OJWnBXbics0Xm1LCU0mzD5vI9KdUzuZ0Texfmfu3Z9WOIwVmgQXkdodSJri6cwyMpshSqk0MzTEpARztjd38IEkB0Sf3mcN4DmSJ%2Fuo1M9IfOInR8aTWRgf2Hh%2F6P5kiKxyAGEGFO6jvkOyDecULOZH5n8npd85S66JWwpNbliViTue5Hhye0SMn2ygfLYHgKDU0EGw7b%2BKvzAUGyOtgtI%2F0sJIB40LUWQl9EudxiHI2%2BOXRyl8yxaF%2Bh1A0Kl4ZMSQ5HtCSLhpqh3O3VYzes6%2FI2jxOjmfyfE7t9eGE7Hl3xLefpmJg%2FB%2FyB8YBOHea%2FvINtERnZwb%2F8a5KjmXmUtX8irZLtAadV4q7LA%2BWTqGOUrv%2B8xj0DlJesPIZKeYqwWVS1ennyYc9cvh47ga%2BcZPvx%2Ba5D%2Fe5sJTV4DL4bdaUrndqqO82oBIDoFIe27mQP8TeGMOGE%2FSJP8O2lr7U5NsnmLYNR4XKpVH5MehLtHpsBFHTJbfoz9RiTEQJ7dwiwt6RRFrvOroRE5u5vFWQpygZI%2BnR6zMOaxosQGOqUBB8523yWRN04gxojk1hW9SuT8e%2BtK%2BPCGcrePVS0stpd8chnNX50cF23qcLODUQPcFz%2FJaf564xGxb2%2FEuqV7rW5PsrsqJsEN5WvwV03xBZDpkFHyrJLKsXYv5WjRKcSWy5xVq4IinUOWKeqFJlLghwiGiKAWUzfoJOJK7FAyIQoszb%2Fif14c1%2BWBxImV%2FQ9ECGR3QL3vURM5260n53uzccqgE8hC&X-Amz-Signature=3325821592d941ec623f544c64b4cf466a0551e15d136ad11f88c26e65f295b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOVTTTP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAamv9%2B1aJmCQBkZlLUJ%2B6IEIYopfGsbWnd93aUPs36EAiEA8JWPH9AZWVkCGJ4VlZtRGIY%2FyvGLhj12QM7VPou0xNcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYntbiT%2BBMW6jAiISrcAypeWv1tHYJkYCXbY3q%2BNrnGCtdk8KbCeVbbZtYFrvTP2UT4PcWv%2FSOtI%2FANEUMoI8ouFBcpk3DwP9Uwg6C9Xzs5%2B80Qk2OJWnBXbics0Xm1LCU0mzD5vI9KdUzuZ0Texfmfu3Z9WOIwVmgQXkdodSJri6cwyMpshSqk0MzTEpARztjd38IEkB0Sf3mcN4DmSJ%2Fuo1M9IfOInR8aTWRgf2Hh%2F6P5kiKxyAGEGFO6jvkOyDecULOZH5n8npd85S66JWwpNbliViTue5Hhye0SMn2ygfLYHgKDU0EGw7b%2BKvzAUGyOtgtI%2F0sJIB40LUWQl9EudxiHI2%2BOXRyl8yxaF%2Bh1A0Kl4ZMSQ5HtCSLhpqh3O3VYzes6%2FI2jxOjmfyfE7t9eGE7Hl3xLefpmJg%2FB%2FyB8YBOHea%2FvINtERnZwb%2F8a5KjmXmUtX8irZLtAadV4q7LA%2BWTqGOUrv%2B8xj0DlJesPIZKeYqwWVS1ennyYc9cvh47ga%2BcZPvx%2Ba5D%2Fe5sJTV4DL4bdaUrndqqO82oBIDoFIe27mQP8TeGMOGE%2FSJP8O2lr7U5NsnmLYNR4XKpVH5MehLtHpsBFHTJbfoz9RiTEQJ7dwiwt6RRFrvOroRE5u5vFWQpygZI%2BnR6zMOaxosQGOqUBB8523yWRN04gxojk1hW9SuT8e%2BtK%2BPCGcrePVS0stpd8chnNX50cF23qcLODUQPcFz%2FJaf564xGxb2%2FEuqV7rW5PsrsqJsEN5WvwV03xBZDpkFHyrJLKsXYv5WjRKcSWy5xVq4IinUOWKeqFJlLghwiGiKAWUzfoJOJK7FAyIQoszb%2Fif14c1%2BWBxImV%2FQ9ECGR3QL3vURM5260n53uzccqgE8hC&X-Amz-Signature=8fc111294426cc02897c43ebaae7b77f845781800e12ca7988cda030639f7b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOVTTTP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAamv9%2B1aJmCQBkZlLUJ%2B6IEIYopfGsbWnd93aUPs36EAiEA8JWPH9AZWVkCGJ4VlZtRGIY%2FyvGLhj12QM7VPou0xNcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYntbiT%2BBMW6jAiISrcAypeWv1tHYJkYCXbY3q%2BNrnGCtdk8KbCeVbbZtYFrvTP2UT4PcWv%2FSOtI%2FANEUMoI8ouFBcpk3DwP9Uwg6C9Xzs5%2B80Qk2OJWnBXbics0Xm1LCU0mzD5vI9KdUzuZ0Texfmfu3Z9WOIwVmgQXkdodSJri6cwyMpshSqk0MzTEpARztjd38IEkB0Sf3mcN4DmSJ%2Fuo1M9IfOInR8aTWRgf2Hh%2F6P5kiKxyAGEGFO6jvkOyDecULOZH5n8npd85S66JWwpNbliViTue5Hhye0SMn2ygfLYHgKDU0EGw7b%2BKvzAUGyOtgtI%2F0sJIB40LUWQl9EudxiHI2%2BOXRyl8yxaF%2Bh1A0Kl4ZMSQ5HtCSLhpqh3O3VYzes6%2FI2jxOjmfyfE7t9eGE7Hl3xLefpmJg%2FB%2FyB8YBOHea%2FvINtERnZwb%2F8a5KjmXmUtX8irZLtAadV4q7LA%2BWTqGOUrv%2B8xj0DlJesPIZKeYqwWVS1ennyYc9cvh47ga%2BcZPvx%2Ba5D%2Fe5sJTV4DL4bdaUrndqqO82oBIDoFIe27mQP8TeGMOGE%2FSJP8O2lr7U5NsnmLYNR4XKpVH5MehLtHpsBFHTJbfoz9RiTEQJ7dwiwt6RRFrvOroRE5u5vFWQpygZI%2BnR6zMOaxosQGOqUBB8523yWRN04gxojk1hW9SuT8e%2BtK%2BPCGcrePVS0stpd8chnNX50cF23qcLODUQPcFz%2FJaf564xGxb2%2FEuqV7rW5PsrsqJsEN5WvwV03xBZDpkFHyrJLKsXYv5WjRKcSWy5xVq4IinUOWKeqFJlLghwiGiKAWUzfoJOJK7FAyIQoszb%2Fif14c1%2BWBxImV%2FQ9ECGR3QL3vURM5260n53uzccqgE8hC&X-Amz-Signature=978b33baa511c89d41735170ada67d03aa3b15b86e1c22aa50de5b515e78e78c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOVTTTP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAamv9%2B1aJmCQBkZlLUJ%2B6IEIYopfGsbWnd93aUPs36EAiEA8JWPH9AZWVkCGJ4VlZtRGIY%2FyvGLhj12QM7VPou0xNcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYntbiT%2BBMW6jAiISrcAypeWv1tHYJkYCXbY3q%2BNrnGCtdk8KbCeVbbZtYFrvTP2UT4PcWv%2FSOtI%2FANEUMoI8ouFBcpk3DwP9Uwg6C9Xzs5%2B80Qk2OJWnBXbics0Xm1LCU0mzD5vI9KdUzuZ0Texfmfu3Z9WOIwVmgQXkdodSJri6cwyMpshSqk0MzTEpARztjd38IEkB0Sf3mcN4DmSJ%2Fuo1M9IfOInR8aTWRgf2Hh%2F6P5kiKxyAGEGFO6jvkOyDecULOZH5n8npd85S66JWwpNbliViTue5Hhye0SMn2ygfLYHgKDU0EGw7b%2BKvzAUGyOtgtI%2F0sJIB40LUWQl9EudxiHI2%2BOXRyl8yxaF%2Bh1A0Kl4ZMSQ5HtCSLhpqh3O3VYzes6%2FI2jxOjmfyfE7t9eGE7Hl3xLefpmJg%2FB%2FyB8YBOHea%2FvINtERnZwb%2F8a5KjmXmUtX8irZLtAadV4q7LA%2BWTqGOUrv%2B8xj0DlJesPIZKeYqwWVS1ennyYc9cvh47ga%2BcZPvx%2Ba5D%2Fe5sJTV4DL4bdaUrndqqO82oBIDoFIe27mQP8TeGMOGE%2FSJP8O2lr7U5NsnmLYNR4XKpVH5MehLtHpsBFHTJbfoz9RiTEQJ7dwiwt6RRFrvOroRE5u5vFWQpygZI%2BnR6zMOaxosQGOqUBB8523yWRN04gxojk1hW9SuT8e%2BtK%2BPCGcrePVS0stpd8chnNX50cF23qcLODUQPcFz%2FJaf564xGxb2%2FEuqV7rW5PsrsqJsEN5WvwV03xBZDpkFHyrJLKsXYv5WjRKcSWy5xVq4IinUOWKeqFJlLghwiGiKAWUzfoJOJK7FAyIQoszb%2Fif14c1%2BWBxImV%2FQ9ECGR3QL3vURM5260n53uzccqgE8hC&X-Amz-Signature=6e359fbf4436325d45f5e4b9be974cd404574011966c403d171fe23d7519d29b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
   
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>

    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOVTTTP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAamv9%2B1aJmCQBkZlLUJ%2B6IEIYopfGsbWnd93aUPs36EAiEA8JWPH9AZWVkCGJ4VlZtRGIY%2FyvGLhj12QM7VPou0xNcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYntbiT%2BBMW6jAiISrcAypeWv1tHYJkYCXbY3q%2BNrnGCtdk8KbCeVbbZtYFrvTP2UT4PcWv%2FSOtI%2FANEUMoI8ouFBcpk3DwP9Uwg6C9Xzs5%2B80Qk2OJWnBXbics0Xm1LCU0mzD5vI9KdUzuZ0Texfmfu3Z9WOIwVmgQXkdodSJri6cwyMpshSqk0MzTEpARztjd38IEkB0Sf3mcN4DmSJ%2Fuo1M9IfOInR8aTWRgf2Hh%2F6P5kiKxyAGEGFO6jvkOyDecULOZH5n8npd85S66JWwpNbliViTue5Hhye0SMn2ygfLYHgKDU0EGw7b%2BKvzAUGyOtgtI%2F0sJIB40LUWQl9EudxiHI2%2BOXRyl8yxaF%2Bh1A0Kl4ZMSQ5HtCSLhpqh3O3VYzes6%2FI2jxOjmfyfE7t9eGE7Hl3xLefpmJg%2FB%2FyB8YBOHea%2FvINtERnZwb%2F8a5KjmXmUtX8irZLtAadV4q7LA%2BWTqGOUrv%2B8xj0DlJesPIZKeYqwWVS1ennyYc9cvh47ga%2BcZPvx%2Ba5D%2Fe5sJTV4DL4bdaUrndqqO82oBIDoFIe27mQP8TeGMOGE%2FSJP8O2lr7U5NsnmLYNR4XKpVH5MehLtHpsBFHTJbfoz9RiTEQJ7dwiwt6RRFrvOroRE5u5vFWQpygZI%2BnR6zMOaxosQGOqUBB8523yWRN04gxojk1hW9SuT8e%2BtK%2BPCGcrePVS0stpd8chnNX50cF23qcLODUQPcFz%2FJaf564xGxb2%2FEuqV7rW5PsrsqJsEN5WvwV03xBZDpkFHyrJLKsXYv5WjRKcSWy5xVq4IinUOWKeqFJlLghwiGiKAWUzfoJOJK7FAyIQoszb%2Fif14c1%2BWBxImV%2FQ9ECGR3QL3vURM5260n53uzccqgE8hC&X-Amz-Signature=7635f3914b4a45b4c342ed5d3f42441fe7fb34fd083720e50b0267420d75db68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOVTTTP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAamv9%2B1aJmCQBkZlLUJ%2B6IEIYopfGsbWnd93aUPs36EAiEA8JWPH9AZWVkCGJ4VlZtRGIY%2FyvGLhj12QM7VPou0xNcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYntbiT%2BBMW6jAiISrcAypeWv1tHYJkYCXbY3q%2BNrnGCtdk8KbCeVbbZtYFrvTP2UT4PcWv%2FSOtI%2FANEUMoI8ouFBcpk3DwP9Uwg6C9Xzs5%2B80Qk2OJWnBXbics0Xm1LCU0mzD5vI9KdUzuZ0Texfmfu3Z9WOIwVmgQXkdodSJri6cwyMpshSqk0MzTEpARztjd38IEkB0Sf3mcN4DmSJ%2Fuo1M9IfOInR8aTWRgf2Hh%2F6P5kiKxyAGEGFO6jvkOyDecULOZH5n8npd85S66JWwpNbliViTue5Hhye0SMn2ygfLYHgKDU0EGw7b%2BKvzAUGyOtgtI%2F0sJIB40LUWQl9EudxiHI2%2BOXRyl8yxaF%2Bh1A0Kl4ZMSQ5HtCSLhpqh3O3VYzes6%2FI2jxOjmfyfE7t9eGE7Hl3xLefpmJg%2FB%2FyB8YBOHea%2FvINtERnZwb%2F8a5KjmXmUtX8irZLtAadV4q7LA%2BWTqGOUrv%2B8xj0DlJesPIZKeYqwWVS1ennyYc9cvh47ga%2BcZPvx%2Ba5D%2Fe5sJTV4DL4bdaUrndqqO82oBIDoFIe27mQP8TeGMOGE%2FSJP8O2lr7U5NsnmLYNR4XKpVH5MehLtHpsBFHTJbfoz9RiTEQJ7dwiwt6RRFrvOroRE5u5vFWQpygZI%2BnR6zMOaxosQGOqUBB8523yWRN04gxojk1hW9SuT8e%2BtK%2BPCGcrePVS0stpd8chnNX50cF23qcLODUQPcFz%2FJaf564xGxb2%2FEuqV7rW5PsrsqJsEN5WvwV03xBZDpkFHyrJLKsXYv5WjRKcSWy5xVq4IinUOWKeqFJlLghwiGiKAWUzfoJOJK7FAyIQoszb%2Fif14c1%2BWBxImV%2FQ9ECGR3QL3vURM5260n53uzccqgE8hC&X-Amz-Signature=a511a5c9aeda016fb96115a250e80489b6eae3c490e9908e9be0e1cdb091cfed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOVTTTP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAamv9%2B1aJmCQBkZlLUJ%2B6IEIYopfGsbWnd93aUPs36EAiEA8JWPH9AZWVkCGJ4VlZtRGIY%2FyvGLhj12QM7VPou0xNcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYntbiT%2BBMW6jAiISrcAypeWv1tHYJkYCXbY3q%2BNrnGCtdk8KbCeVbbZtYFrvTP2UT4PcWv%2FSOtI%2FANEUMoI8ouFBcpk3DwP9Uwg6C9Xzs5%2B80Qk2OJWnBXbics0Xm1LCU0mzD5vI9KdUzuZ0Texfmfu3Z9WOIwVmgQXkdodSJri6cwyMpshSqk0MzTEpARztjd38IEkB0Sf3mcN4DmSJ%2Fuo1M9IfOInR8aTWRgf2Hh%2F6P5kiKxyAGEGFO6jvkOyDecULOZH5n8npd85S66JWwpNbliViTue5Hhye0SMn2ygfLYHgKDU0EGw7b%2BKvzAUGyOtgtI%2F0sJIB40LUWQl9EudxiHI2%2BOXRyl8yxaF%2Bh1A0Kl4ZMSQ5HtCSLhpqh3O3VYzes6%2FI2jxOjmfyfE7t9eGE7Hl3xLefpmJg%2FB%2FyB8YBOHea%2FvINtERnZwb%2F8a5KjmXmUtX8irZLtAadV4q7LA%2BWTqGOUrv%2B8xj0DlJesPIZKeYqwWVS1ennyYc9cvh47ga%2BcZPvx%2Ba5D%2Fe5sJTV4DL4bdaUrndqqO82oBIDoFIe27mQP8TeGMOGE%2FSJP8O2lr7U5NsnmLYNR4XKpVH5MehLtHpsBFHTJbfoz9RiTEQJ7dwiwt6RRFrvOroRE5u5vFWQpygZI%2BnR6zMOaxosQGOqUBB8523yWRN04gxojk1hW9SuT8e%2BtK%2BPCGcrePVS0stpd8chnNX50cF23qcLODUQPcFz%2FJaf564xGxb2%2FEuqV7rW5PsrsqJsEN5WvwV03xBZDpkFHyrJLKsXYv5WjRKcSWy5xVq4IinUOWKeqFJlLghwiGiKAWUzfoJOJK7FAyIQoszb%2Fif14c1%2BWBxImV%2FQ9ECGR3QL3vURM5260n53uzccqgE8hC&X-Amz-Signature=f86c2e3d9d6013aee5d838bff15afd0c6a6c12538bcedee334a1f25b499defef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOVTTTP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAamv9%2B1aJmCQBkZlLUJ%2B6IEIYopfGsbWnd93aUPs36EAiEA8JWPH9AZWVkCGJ4VlZtRGIY%2FyvGLhj12QM7VPou0xNcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYntbiT%2BBMW6jAiISrcAypeWv1tHYJkYCXbY3q%2BNrnGCtdk8KbCeVbbZtYFrvTP2UT4PcWv%2FSOtI%2FANEUMoI8ouFBcpk3DwP9Uwg6C9Xzs5%2B80Qk2OJWnBXbics0Xm1LCU0mzD5vI9KdUzuZ0Texfmfu3Z9WOIwVmgQXkdodSJri6cwyMpshSqk0MzTEpARztjd38IEkB0Sf3mcN4DmSJ%2Fuo1M9IfOInR8aTWRgf2Hh%2F6P5kiKxyAGEGFO6jvkOyDecULOZH5n8npd85S66JWwpNbliViTue5Hhye0SMn2ygfLYHgKDU0EGw7b%2BKvzAUGyOtgtI%2F0sJIB40LUWQl9EudxiHI2%2BOXRyl8yxaF%2Bh1A0Kl4ZMSQ5HtCSLhpqh3O3VYzes6%2FI2jxOjmfyfE7t9eGE7Hl3xLefpmJg%2FB%2FyB8YBOHea%2FvINtERnZwb%2F8a5KjmXmUtX8irZLtAadV4q7LA%2BWTqGOUrv%2B8xj0DlJesPIZKeYqwWVS1ennyYc9cvh47ga%2BcZPvx%2Ba5D%2Fe5sJTV4DL4bdaUrndqqO82oBIDoFIe27mQP8TeGMOGE%2FSJP8O2lr7U5NsnmLYNR4XKpVH5MehLtHpsBFHTJbfoz9RiTEQJ7dwiwt6RRFrvOroRE5u5vFWQpygZI%2BnR6zMOaxosQGOqUBB8523yWRN04gxojk1hW9SuT8e%2BtK%2BPCGcrePVS0stpd8chnNX50cF23qcLODUQPcFz%2FJaf564xGxb2%2FEuqV7rW5PsrsqJsEN5WvwV03xBZDpkFHyrJLKsXYv5WjRKcSWy5xVq4IinUOWKeqFJlLghwiGiKAWUzfoJOJK7FAyIQoszb%2Fif14c1%2BWBxImV%2FQ9ECGR3QL3vURM5260n53uzccqgE8hC&X-Amz-Signature=d24d4bae46d1f820e209339b1ec4ab2a3d43ebc699e7d7600bb2c29a2e69de1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNSSDMB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIH%2BqcBpk2FQcvVLN2MjP9rJTddmnpp8Rt%2Bl%2F2enH32AjAiAVOFgY7zGeCSwflfT%2FM%2F1SbEm%2BSyJWmTnIC4SuIO88oyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaPlv3FfERV2DAhQjKtwDn1hWy%2BYIV3JfTNN2b3CLxyWGkoU74oGDJRb79r6fvIGLiq8m9hwoU1CA7KpVFqCZTl2U1SpiRYbU7CmTsHIE%2B3mmWutUAxoBWkDKXPE50vVBPgrgV31NHxvj4F4rOn9YkG4nOLggx4hrk5neOSa7EY1uynmy8KpuPYxlN1JKEknrM3R82yS72EoHZNTkj7uxtzh0mNnk7X0qxQVsUcYpEIEnf1TD%2BmiJFAoKMl3koCmcsrvaZ5cUtrJ1KMCFJoHPQCSTUvF1iHAy6%2BvXZ1lB1HhtInmJNty18MWUVeyxw28bMX1SlU4N7WsYVkWbINT%2FpyuihO2Xh9uU6Q%2FpIPzjrev4NkDVNI6xkU7seZaVZHwPQUqNIL84bZtvTA7IeF7JEkzC79tx5CM2XgVuHPzIdnCYj5Ed1qU980hpFNvVsL83XA4dvH0aY2FumZHqW%2F9euTC%2FOCRIlKPlr5z7wxrUZfVhRCRCYiTaQb7KtQ9GZbkjW5VcUa5ULVGkZgJRX6%2FwVRaquEzVLAdarnZr2L99fZLPH77Zahbp1OhnwrhIOo5uOXYmZVZlnGGG%2BA8GVpWpwci75hBrOe2PaTPPZELEoA3cZRYkfkPf5IZRAAzJdFnkzWEQvzXSgo2FkCIwurGixAY6pgFh5gLcinvdqOXK13K6VV9dTnYTQHrjJUdIaBbE4B1ed49y1B4FRefVcBCug%2FsOQ2oTeQd2WajZ3ziqMrQxJKXQV3SPfhJP7eF%2FFtAHIvnoSE%2FZyiuQSd9iiOPw28QyOhq4kvrukLuOUvqiD%2F8rtnm8ITssYBUsSSY%2Bz4Rtp2%2Fdtj5LE1FxRACBwoZEsjBn7NXGXPGsr8J3Qqx3FtZNr%2FpSbG8D%2BTvP&X-Amz-Signature=a3106754280915f587852cbb09ef2eb6d130950e5d4e11d84ad406e36f40a793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNSSDMB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIH%2BqcBpk2FQcvVLN2MjP9rJTddmnpp8Rt%2Bl%2F2enH32AjAiAVOFgY7zGeCSwflfT%2FM%2F1SbEm%2BSyJWmTnIC4SuIO88oyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaPlv3FfERV2DAhQjKtwDn1hWy%2BYIV3JfTNN2b3CLxyWGkoU74oGDJRb79r6fvIGLiq8m9hwoU1CA7KpVFqCZTl2U1SpiRYbU7CmTsHIE%2B3mmWutUAxoBWkDKXPE50vVBPgrgV31NHxvj4F4rOn9YkG4nOLggx4hrk5neOSa7EY1uynmy8KpuPYxlN1JKEknrM3R82yS72EoHZNTkj7uxtzh0mNnk7X0qxQVsUcYpEIEnf1TD%2BmiJFAoKMl3koCmcsrvaZ5cUtrJ1KMCFJoHPQCSTUvF1iHAy6%2BvXZ1lB1HhtInmJNty18MWUVeyxw28bMX1SlU4N7WsYVkWbINT%2FpyuihO2Xh9uU6Q%2FpIPzjrev4NkDVNI6xkU7seZaVZHwPQUqNIL84bZtvTA7IeF7JEkzC79tx5CM2XgVuHPzIdnCYj5Ed1qU980hpFNvVsL83XA4dvH0aY2FumZHqW%2F9euTC%2FOCRIlKPlr5z7wxrUZfVhRCRCYiTaQb7KtQ9GZbkjW5VcUa5ULVGkZgJRX6%2FwVRaquEzVLAdarnZr2L99fZLPH77Zahbp1OhnwrhIOo5uOXYmZVZlnGGG%2BA8GVpWpwci75hBrOe2PaTPPZELEoA3cZRYkfkPf5IZRAAzJdFnkzWEQvzXSgo2FkCIwurGixAY6pgFh5gLcinvdqOXK13K6VV9dTnYTQHrjJUdIaBbE4B1ed49y1B4FRefVcBCug%2FsOQ2oTeQd2WajZ3ziqMrQxJKXQV3SPfhJP7eF%2FFtAHIvnoSE%2FZyiuQSd9iiOPw28QyOhq4kvrukLuOUvqiD%2F8rtnm8ITssYBUsSSY%2Bz4Rtp2%2Fdtj5LE1FxRACBwoZEsjBn7NXGXPGsr8J3Qqx3FtZNr%2FpSbG8D%2BTvP&X-Amz-Signature=9b6c375a3475938dbac370520b1633309691a76bb5d1ca1c1ae81e73b8a1212f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNSSDMB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIH%2BqcBpk2FQcvVLN2MjP9rJTddmnpp8Rt%2Bl%2F2enH32AjAiAVOFgY7zGeCSwflfT%2FM%2F1SbEm%2BSyJWmTnIC4SuIO88oyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaPlv3FfERV2DAhQjKtwDn1hWy%2BYIV3JfTNN2b3CLxyWGkoU74oGDJRb79r6fvIGLiq8m9hwoU1CA7KpVFqCZTl2U1SpiRYbU7CmTsHIE%2B3mmWutUAxoBWkDKXPE50vVBPgrgV31NHxvj4F4rOn9YkG4nOLggx4hrk5neOSa7EY1uynmy8KpuPYxlN1JKEknrM3R82yS72EoHZNTkj7uxtzh0mNnk7X0qxQVsUcYpEIEnf1TD%2BmiJFAoKMl3koCmcsrvaZ5cUtrJ1KMCFJoHPQCSTUvF1iHAy6%2BvXZ1lB1HhtInmJNty18MWUVeyxw28bMX1SlU4N7WsYVkWbINT%2FpyuihO2Xh9uU6Q%2FpIPzjrev4NkDVNI6xkU7seZaVZHwPQUqNIL84bZtvTA7IeF7JEkzC79tx5CM2XgVuHPzIdnCYj5Ed1qU980hpFNvVsL83XA4dvH0aY2FumZHqW%2F9euTC%2FOCRIlKPlr5z7wxrUZfVhRCRCYiTaQb7KtQ9GZbkjW5VcUa5ULVGkZgJRX6%2FwVRaquEzVLAdarnZr2L99fZLPH77Zahbp1OhnwrhIOo5uOXYmZVZlnGGG%2BA8GVpWpwci75hBrOe2PaTPPZELEoA3cZRYkfkPf5IZRAAzJdFnkzWEQvzXSgo2FkCIwurGixAY6pgFh5gLcinvdqOXK13K6VV9dTnYTQHrjJUdIaBbE4B1ed49y1B4FRefVcBCug%2FsOQ2oTeQd2WajZ3ziqMrQxJKXQV3SPfhJP7eF%2FFtAHIvnoSE%2FZyiuQSd9iiOPw28QyOhq4kvrukLuOUvqiD%2F8rtnm8ITssYBUsSSY%2Bz4Rtp2%2Fdtj5LE1FxRACBwoZEsjBn7NXGXPGsr8J3Qqx3FtZNr%2FpSbG8D%2BTvP&X-Amz-Signature=28fee4b48c0170dd4ca11466b2dba55acc968de2849ef083a5cbd60c0cda4f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNSSDMB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIH%2BqcBpk2FQcvVLN2MjP9rJTddmnpp8Rt%2Bl%2F2enH32AjAiAVOFgY7zGeCSwflfT%2FM%2F1SbEm%2BSyJWmTnIC4SuIO88oyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaPlv3FfERV2DAhQjKtwDn1hWy%2BYIV3JfTNN2b3CLxyWGkoU74oGDJRb79r6fvIGLiq8m9hwoU1CA7KpVFqCZTl2U1SpiRYbU7CmTsHIE%2B3mmWutUAxoBWkDKXPE50vVBPgrgV31NHxvj4F4rOn9YkG4nOLggx4hrk5neOSa7EY1uynmy8KpuPYxlN1JKEknrM3R82yS72EoHZNTkj7uxtzh0mNnk7X0qxQVsUcYpEIEnf1TD%2BmiJFAoKMl3koCmcsrvaZ5cUtrJ1KMCFJoHPQCSTUvF1iHAy6%2BvXZ1lB1HhtInmJNty18MWUVeyxw28bMX1SlU4N7WsYVkWbINT%2FpyuihO2Xh9uU6Q%2FpIPzjrev4NkDVNI6xkU7seZaVZHwPQUqNIL84bZtvTA7IeF7JEkzC79tx5CM2XgVuHPzIdnCYj5Ed1qU980hpFNvVsL83XA4dvH0aY2FumZHqW%2F9euTC%2FOCRIlKPlr5z7wxrUZfVhRCRCYiTaQb7KtQ9GZbkjW5VcUa5ULVGkZgJRX6%2FwVRaquEzVLAdarnZr2L99fZLPH77Zahbp1OhnwrhIOo5uOXYmZVZlnGGG%2BA8GVpWpwci75hBrOe2PaTPPZELEoA3cZRYkfkPf5IZRAAzJdFnkzWEQvzXSgo2FkCIwurGixAY6pgFh5gLcinvdqOXK13K6VV9dTnYTQHrjJUdIaBbE4B1ed49y1B4FRefVcBCug%2FsOQ2oTeQd2WajZ3ziqMrQxJKXQV3SPfhJP7eF%2FFtAHIvnoSE%2FZyiuQSd9iiOPw28QyOhq4kvrukLuOUvqiD%2F8rtnm8ITssYBUsSSY%2Bz4Rtp2%2Fdtj5LE1FxRACBwoZEsjBn7NXGXPGsr8J3Qqx3FtZNr%2FpSbG8D%2BTvP&X-Amz-Signature=93b6317bd2911b1cefca03e89dbd2b61088fb4ffc08d43354323691280c12770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNSSDMB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIH%2BqcBpk2FQcvVLN2MjP9rJTddmnpp8Rt%2Bl%2F2enH32AjAiAVOFgY7zGeCSwflfT%2FM%2F1SbEm%2BSyJWmTnIC4SuIO88oyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaPlv3FfERV2DAhQjKtwDn1hWy%2BYIV3JfTNN2b3CLxyWGkoU74oGDJRb79r6fvIGLiq8m9hwoU1CA7KpVFqCZTl2U1SpiRYbU7CmTsHIE%2B3mmWutUAxoBWkDKXPE50vVBPgrgV31NHxvj4F4rOn9YkG4nOLggx4hrk5neOSa7EY1uynmy8KpuPYxlN1JKEknrM3R82yS72EoHZNTkj7uxtzh0mNnk7X0qxQVsUcYpEIEnf1TD%2BmiJFAoKMl3koCmcsrvaZ5cUtrJ1KMCFJoHPQCSTUvF1iHAy6%2BvXZ1lB1HhtInmJNty18MWUVeyxw28bMX1SlU4N7WsYVkWbINT%2FpyuihO2Xh9uU6Q%2FpIPzjrev4NkDVNI6xkU7seZaVZHwPQUqNIL84bZtvTA7IeF7JEkzC79tx5CM2XgVuHPzIdnCYj5Ed1qU980hpFNvVsL83XA4dvH0aY2FumZHqW%2F9euTC%2FOCRIlKPlr5z7wxrUZfVhRCRCYiTaQb7KtQ9GZbkjW5VcUa5ULVGkZgJRX6%2FwVRaquEzVLAdarnZr2L99fZLPH77Zahbp1OhnwrhIOo5uOXYmZVZlnGGG%2BA8GVpWpwci75hBrOe2PaTPPZELEoA3cZRYkfkPf5IZRAAzJdFnkzWEQvzXSgo2FkCIwurGixAY6pgFh5gLcinvdqOXK13K6VV9dTnYTQHrjJUdIaBbE4B1ed49y1B4FRefVcBCug%2FsOQ2oTeQd2WajZ3ziqMrQxJKXQV3SPfhJP7eF%2FFtAHIvnoSE%2FZyiuQSd9iiOPw28QyOhq4kvrukLuOUvqiD%2F8rtnm8ITssYBUsSSY%2Bz4Rtp2%2Fdtj5LE1FxRACBwoZEsjBn7NXGXPGsr8J3Qqx3FtZNr%2FpSbG8D%2BTvP&X-Amz-Signature=357b3f5fd82a67b4a305e341101a456826b8b7ba9e47ecec93c97c60154f87c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNSSDMB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIH%2BqcBpk2FQcvVLN2MjP9rJTddmnpp8Rt%2Bl%2F2enH32AjAiAVOFgY7zGeCSwflfT%2FM%2F1SbEm%2BSyJWmTnIC4SuIO88oyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaPlv3FfERV2DAhQjKtwDn1hWy%2BYIV3JfTNN2b3CLxyWGkoU74oGDJRb79r6fvIGLiq8m9hwoU1CA7KpVFqCZTl2U1SpiRYbU7CmTsHIE%2B3mmWutUAxoBWkDKXPE50vVBPgrgV31NHxvj4F4rOn9YkG4nOLggx4hrk5neOSa7EY1uynmy8KpuPYxlN1JKEknrM3R82yS72EoHZNTkj7uxtzh0mNnk7X0qxQVsUcYpEIEnf1TD%2BmiJFAoKMl3koCmcsrvaZ5cUtrJ1KMCFJoHPQCSTUvF1iHAy6%2BvXZ1lB1HhtInmJNty18MWUVeyxw28bMX1SlU4N7WsYVkWbINT%2FpyuihO2Xh9uU6Q%2FpIPzjrev4NkDVNI6xkU7seZaVZHwPQUqNIL84bZtvTA7IeF7JEkzC79tx5CM2XgVuHPzIdnCYj5Ed1qU980hpFNvVsL83XA4dvH0aY2FumZHqW%2F9euTC%2FOCRIlKPlr5z7wxrUZfVhRCRCYiTaQb7KtQ9GZbkjW5VcUa5ULVGkZgJRX6%2FwVRaquEzVLAdarnZr2L99fZLPH77Zahbp1OhnwrhIOo5uOXYmZVZlnGGG%2BA8GVpWpwci75hBrOe2PaTPPZELEoA3cZRYkfkPf5IZRAAzJdFnkzWEQvzXSgo2FkCIwurGixAY6pgFh5gLcinvdqOXK13K6VV9dTnYTQHrjJUdIaBbE4B1ed49y1B4FRefVcBCug%2FsOQ2oTeQd2WajZ3ziqMrQxJKXQV3SPfhJP7eF%2FFtAHIvnoSE%2FZyiuQSd9iiOPw28QyOhq4kvrukLuOUvqiD%2F8rtnm8ITssYBUsSSY%2Bz4Rtp2%2Fdtj5LE1FxRACBwoZEsjBn7NXGXPGsr8J3Qqx3FtZNr%2FpSbG8D%2BTvP&X-Amz-Signature=abb29ba3b5544aaee7b29b1b2fbc2a8d7fb0007d9c1753b3e6662f6109de0d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
