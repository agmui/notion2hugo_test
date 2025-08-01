---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-01T02:02:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-01T02:02:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4KKMG5I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfxwHP6C%2BY5adNI9F35qZV4NSCgKA6kUdBP7Le3Wbv1AiEAwiJewqTJpZMafu87qFRlrxvfnzDXHCZfD%2BaIjPq2rJAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDt8Lkvf1plluHoktyrcAztxBe1LK2wOlx7OR2ZwIwX9Ashdn7OE73QYGm0sf7hbMRRY4ck24ujuskBGVhXyf%2FRwcJ%2FPs8d6UnMea2LhRuM%2FRJIa5jKmxsZzIszaJgXVs%2B%2Fuj%2Be1j5DeyT%2BAt8qLHMyaYCWb2hTzZStrFEPsgCmBJQPZoEWimy8ow34bctEACbZxK%2BuHTn8NP6AvInSitxGqp1DKcpPZCv9QE3qOCDC1FuMy7lm8PebLskQPiJbl4x0NCCBzeyJH8ow2QcS8lfLKCmeX6uv0JycQ2dFUTvdkNnxy9J%2Fo2HMKxgQY8vP7Ln%2BgcLwuNOmEaKV11f%2BGmdlLCBrDDwCisIzei8chtWKgwbieuIMiEwWKkIGnb%2B5zT%2BWPPCD4tgs6lEk5gez8oPimEQepx%2Ftk%2BgGHafsap05hWDCT5UoY6mwN0TWzWaV%2Feh3SSzOXX1HeyXtEnASgp6bVQTJ8%2BAiQOzrZYq1EjeWBvCu9xX9MWoNqvHWcBSylKp%2BVV9cQRmx0OUtEm8W2PCfM17JxrlQG%2F%2FADSQZTWRDj4H1NZ6kO8%2B3HDkO%2BJvBXPNgtDLcNz5aaREAWT4sW12qyQ%2B%2FhtaHjT91Nu35RzNyoI1ypdK7nbASQ7VKaNdzGxxE9L8992BR8P0I9MOTAscQGOqUBUSZjAe%2Fryr%2F6fdWt8jYIkPWIUeb4vQp%2Bj801%2B7i7a%2BSMfIxnHoIMe25tnBMlOhxX3aanrYuz7%2BXin2fc7TteMqN7K%2FndxFnYmlmGdcEcr%2BPw%2FAvtmSjmZA2Iz3uw4u6bz8BiBVKvNdDaILlfuSj2zxIyKh607lIhjLCVmdhQ4aliZz43r6FZDoYdnxp4eGLSNvdoR4UpC1h3KvtpQ0emeru%2FyaGF&X-Amz-Signature=e8ab5fed04aee24674728219c3db456e1aac509c7f607dd6f288d96a27a0315e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4KKMG5I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfxwHP6C%2BY5adNI9F35qZV4NSCgKA6kUdBP7Le3Wbv1AiEAwiJewqTJpZMafu87qFRlrxvfnzDXHCZfD%2BaIjPq2rJAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDt8Lkvf1plluHoktyrcAztxBe1LK2wOlx7OR2ZwIwX9Ashdn7OE73QYGm0sf7hbMRRY4ck24ujuskBGVhXyf%2FRwcJ%2FPs8d6UnMea2LhRuM%2FRJIa5jKmxsZzIszaJgXVs%2B%2Fuj%2Be1j5DeyT%2BAt8qLHMyaYCWb2hTzZStrFEPsgCmBJQPZoEWimy8ow34bctEACbZxK%2BuHTn8NP6AvInSitxGqp1DKcpPZCv9QE3qOCDC1FuMy7lm8PebLskQPiJbl4x0NCCBzeyJH8ow2QcS8lfLKCmeX6uv0JycQ2dFUTvdkNnxy9J%2Fo2HMKxgQY8vP7Ln%2BgcLwuNOmEaKV11f%2BGmdlLCBrDDwCisIzei8chtWKgwbieuIMiEwWKkIGnb%2B5zT%2BWPPCD4tgs6lEk5gez8oPimEQepx%2Ftk%2BgGHafsap05hWDCT5UoY6mwN0TWzWaV%2Feh3SSzOXX1HeyXtEnASgp6bVQTJ8%2BAiQOzrZYq1EjeWBvCu9xX9MWoNqvHWcBSylKp%2BVV9cQRmx0OUtEm8W2PCfM17JxrlQG%2F%2FADSQZTWRDj4H1NZ6kO8%2B3HDkO%2BJvBXPNgtDLcNz5aaREAWT4sW12qyQ%2B%2FhtaHjT91Nu35RzNyoI1ypdK7nbASQ7VKaNdzGxxE9L8992BR8P0I9MOTAscQGOqUBUSZjAe%2Fryr%2F6fdWt8jYIkPWIUeb4vQp%2Bj801%2B7i7a%2BSMfIxnHoIMe25tnBMlOhxX3aanrYuz7%2BXin2fc7TteMqN7K%2FndxFnYmlmGdcEcr%2BPw%2FAvtmSjmZA2Iz3uw4u6bz8BiBVKvNdDaILlfuSj2zxIyKh607lIhjLCVmdhQ4aliZz43r6FZDoYdnxp4eGLSNvdoR4UpC1h3KvtpQ0emeru%2FyaGF&X-Amz-Signature=383b4e50b95c9cf76d8f9e49873d53ef4c7538ef7743a82a6ebbadc64435c6dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4KKMG5I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfxwHP6C%2BY5adNI9F35qZV4NSCgKA6kUdBP7Le3Wbv1AiEAwiJewqTJpZMafu87qFRlrxvfnzDXHCZfD%2BaIjPq2rJAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDt8Lkvf1plluHoktyrcAztxBe1LK2wOlx7OR2ZwIwX9Ashdn7OE73QYGm0sf7hbMRRY4ck24ujuskBGVhXyf%2FRwcJ%2FPs8d6UnMea2LhRuM%2FRJIa5jKmxsZzIszaJgXVs%2B%2Fuj%2Be1j5DeyT%2BAt8qLHMyaYCWb2hTzZStrFEPsgCmBJQPZoEWimy8ow34bctEACbZxK%2BuHTn8NP6AvInSitxGqp1DKcpPZCv9QE3qOCDC1FuMy7lm8PebLskQPiJbl4x0NCCBzeyJH8ow2QcS8lfLKCmeX6uv0JycQ2dFUTvdkNnxy9J%2Fo2HMKxgQY8vP7Ln%2BgcLwuNOmEaKV11f%2BGmdlLCBrDDwCisIzei8chtWKgwbieuIMiEwWKkIGnb%2B5zT%2BWPPCD4tgs6lEk5gez8oPimEQepx%2Ftk%2BgGHafsap05hWDCT5UoY6mwN0TWzWaV%2Feh3SSzOXX1HeyXtEnASgp6bVQTJ8%2BAiQOzrZYq1EjeWBvCu9xX9MWoNqvHWcBSylKp%2BVV9cQRmx0OUtEm8W2PCfM17JxrlQG%2F%2FADSQZTWRDj4H1NZ6kO8%2B3HDkO%2BJvBXPNgtDLcNz5aaREAWT4sW12qyQ%2B%2FhtaHjT91Nu35RzNyoI1ypdK7nbASQ7VKaNdzGxxE9L8992BR8P0I9MOTAscQGOqUBUSZjAe%2Fryr%2F6fdWt8jYIkPWIUeb4vQp%2Bj801%2B7i7a%2BSMfIxnHoIMe25tnBMlOhxX3aanrYuz7%2BXin2fc7TteMqN7K%2FndxFnYmlmGdcEcr%2BPw%2FAvtmSjmZA2Iz3uw4u6bz8BiBVKvNdDaILlfuSj2zxIyKh607lIhjLCVmdhQ4aliZz43r6FZDoYdnxp4eGLSNvdoR4UpC1h3KvtpQ0emeru%2FyaGF&X-Amz-Signature=1902674b82a5777715ce6f0d2bd310a857994a0e97f1e712a20652cc198681a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4KKMG5I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfxwHP6C%2BY5adNI9F35qZV4NSCgKA6kUdBP7Le3Wbv1AiEAwiJewqTJpZMafu87qFRlrxvfnzDXHCZfD%2BaIjPq2rJAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDt8Lkvf1plluHoktyrcAztxBe1LK2wOlx7OR2ZwIwX9Ashdn7OE73QYGm0sf7hbMRRY4ck24ujuskBGVhXyf%2FRwcJ%2FPs8d6UnMea2LhRuM%2FRJIa5jKmxsZzIszaJgXVs%2B%2Fuj%2Be1j5DeyT%2BAt8qLHMyaYCWb2hTzZStrFEPsgCmBJQPZoEWimy8ow34bctEACbZxK%2BuHTn8NP6AvInSitxGqp1DKcpPZCv9QE3qOCDC1FuMy7lm8PebLskQPiJbl4x0NCCBzeyJH8ow2QcS8lfLKCmeX6uv0JycQ2dFUTvdkNnxy9J%2Fo2HMKxgQY8vP7Ln%2BgcLwuNOmEaKV11f%2BGmdlLCBrDDwCisIzei8chtWKgwbieuIMiEwWKkIGnb%2B5zT%2BWPPCD4tgs6lEk5gez8oPimEQepx%2Ftk%2BgGHafsap05hWDCT5UoY6mwN0TWzWaV%2Feh3SSzOXX1HeyXtEnASgp6bVQTJ8%2BAiQOzrZYq1EjeWBvCu9xX9MWoNqvHWcBSylKp%2BVV9cQRmx0OUtEm8W2PCfM17JxrlQG%2F%2FADSQZTWRDj4H1NZ6kO8%2B3HDkO%2BJvBXPNgtDLcNz5aaREAWT4sW12qyQ%2B%2FhtaHjT91Nu35RzNyoI1ypdK7nbASQ7VKaNdzGxxE9L8992BR8P0I9MOTAscQGOqUBUSZjAe%2Fryr%2F6fdWt8jYIkPWIUeb4vQp%2Bj801%2B7i7a%2BSMfIxnHoIMe25tnBMlOhxX3aanrYuz7%2BXin2fc7TteMqN7K%2FndxFnYmlmGdcEcr%2BPw%2FAvtmSjmZA2Iz3uw4u6bz8BiBVKvNdDaILlfuSj2zxIyKh607lIhjLCVmdhQ4aliZz43r6FZDoYdnxp4eGLSNvdoR4UpC1h3KvtpQ0emeru%2FyaGF&X-Amz-Signature=7d82ae07f0b798656ded35e3bf094550f2400b185a12208e5926b99fa255fc32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4KKMG5I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfxwHP6C%2BY5adNI9F35qZV4NSCgKA6kUdBP7Le3Wbv1AiEAwiJewqTJpZMafu87qFRlrxvfnzDXHCZfD%2BaIjPq2rJAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDt8Lkvf1plluHoktyrcAztxBe1LK2wOlx7OR2ZwIwX9Ashdn7OE73QYGm0sf7hbMRRY4ck24ujuskBGVhXyf%2FRwcJ%2FPs8d6UnMea2LhRuM%2FRJIa5jKmxsZzIszaJgXVs%2B%2Fuj%2Be1j5DeyT%2BAt8qLHMyaYCWb2hTzZStrFEPsgCmBJQPZoEWimy8ow34bctEACbZxK%2BuHTn8NP6AvInSitxGqp1DKcpPZCv9QE3qOCDC1FuMy7lm8PebLskQPiJbl4x0NCCBzeyJH8ow2QcS8lfLKCmeX6uv0JycQ2dFUTvdkNnxy9J%2Fo2HMKxgQY8vP7Ln%2BgcLwuNOmEaKV11f%2BGmdlLCBrDDwCisIzei8chtWKgwbieuIMiEwWKkIGnb%2B5zT%2BWPPCD4tgs6lEk5gez8oPimEQepx%2Ftk%2BgGHafsap05hWDCT5UoY6mwN0TWzWaV%2Feh3SSzOXX1HeyXtEnASgp6bVQTJ8%2BAiQOzrZYq1EjeWBvCu9xX9MWoNqvHWcBSylKp%2BVV9cQRmx0OUtEm8W2PCfM17JxrlQG%2F%2FADSQZTWRDj4H1NZ6kO8%2B3HDkO%2BJvBXPNgtDLcNz5aaREAWT4sW12qyQ%2B%2FhtaHjT91Nu35RzNyoI1ypdK7nbASQ7VKaNdzGxxE9L8992BR8P0I9MOTAscQGOqUBUSZjAe%2Fryr%2F6fdWt8jYIkPWIUeb4vQp%2Bj801%2B7i7a%2BSMfIxnHoIMe25tnBMlOhxX3aanrYuz7%2BXin2fc7TteMqN7K%2FndxFnYmlmGdcEcr%2BPw%2FAvtmSjmZA2Iz3uw4u6bz8BiBVKvNdDaILlfuSj2zxIyKh607lIhjLCVmdhQ4aliZz43r6FZDoYdnxp4eGLSNvdoR4UpC1h3KvtpQ0emeru%2FyaGF&X-Amz-Signature=9c176336e5dd089ab6cdd3efa07326a62645d3d385913d284ac10cd6eef91fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4KKMG5I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfxwHP6C%2BY5adNI9F35qZV4NSCgKA6kUdBP7Le3Wbv1AiEAwiJewqTJpZMafu87qFRlrxvfnzDXHCZfD%2BaIjPq2rJAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDt8Lkvf1plluHoktyrcAztxBe1LK2wOlx7OR2ZwIwX9Ashdn7OE73QYGm0sf7hbMRRY4ck24ujuskBGVhXyf%2FRwcJ%2FPs8d6UnMea2LhRuM%2FRJIa5jKmxsZzIszaJgXVs%2B%2Fuj%2Be1j5DeyT%2BAt8qLHMyaYCWb2hTzZStrFEPsgCmBJQPZoEWimy8ow34bctEACbZxK%2BuHTn8NP6AvInSitxGqp1DKcpPZCv9QE3qOCDC1FuMy7lm8PebLskQPiJbl4x0NCCBzeyJH8ow2QcS8lfLKCmeX6uv0JycQ2dFUTvdkNnxy9J%2Fo2HMKxgQY8vP7Ln%2BgcLwuNOmEaKV11f%2BGmdlLCBrDDwCisIzei8chtWKgwbieuIMiEwWKkIGnb%2B5zT%2BWPPCD4tgs6lEk5gez8oPimEQepx%2Ftk%2BgGHafsap05hWDCT5UoY6mwN0TWzWaV%2Feh3SSzOXX1HeyXtEnASgp6bVQTJ8%2BAiQOzrZYq1EjeWBvCu9xX9MWoNqvHWcBSylKp%2BVV9cQRmx0OUtEm8W2PCfM17JxrlQG%2F%2FADSQZTWRDj4H1NZ6kO8%2B3HDkO%2BJvBXPNgtDLcNz5aaREAWT4sW12qyQ%2B%2FhtaHjT91Nu35RzNyoI1ypdK7nbASQ7VKaNdzGxxE9L8992BR8P0I9MOTAscQGOqUBUSZjAe%2Fryr%2F6fdWt8jYIkPWIUeb4vQp%2Bj801%2B7i7a%2BSMfIxnHoIMe25tnBMlOhxX3aanrYuz7%2BXin2fc7TteMqN7K%2FndxFnYmlmGdcEcr%2BPw%2FAvtmSjmZA2Iz3uw4u6bz8BiBVKvNdDaILlfuSj2zxIyKh607lIhjLCVmdhQ4aliZz43r6FZDoYdnxp4eGLSNvdoR4UpC1h3KvtpQ0emeru%2FyaGF&X-Amz-Signature=11e37fed4d5e944f006b32a4aea07e3564726a59ed016259dbdac9ff81fbbc47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4KKMG5I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfxwHP6C%2BY5adNI9F35qZV4NSCgKA6kUdBP7Le3Wbv1AiEAwiJewqTJpZMafu87qFRlrxvfnzDXHCZfD%2BaIjPq2rJAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDt8Lkvf1plluHoktyrcAztxBe1LK2wOlx7OR2ZwIwX9Ashdn7OE73QYGm0sf7hbMRRY4ck24ujuskBGVhXyf%2FRwcJ%2FPs8d6UnMea2LhRuM%2FRJIa5jKmxsZzIszaJgXVs%2B%2Fuj%2Be1j5DeyT%2BAt8qLHMyaYCWb2hTzZStrFEPsgCmBJQPZoEWimy8ow34bctEACbZxK%2BuHTn8NP6AvInSitxGqp1DKcpPZCv9QE3qOCDC1FuMy7lm8PebLskQPiJbl4x0NCCBzeyJH8ow2QcS8lfLKCmeX6uv0JycQ2dFUTvdkNnxy9J%2Fo2HMKxgQY8vP7Ln%2BgcLwuNOmEaKV11f%2BGmdlLCBrDDwCisIzei8chtWKgwbieuIMiEwWKkIGnb%2B5zT%2BWPPCD4tgs6lEk5gez8oPimEQepx%2Ftk%2BgGHafsap05hWDCT5UoY6mwN0TWzWaV%2Feh3SSzOXX1HeyXtEnASgp6bVQTJ8%2BAiQOzrZYq1EjeWBvCu9xX9MWoNqvHWcBSylKp%2BVV9cQRmx0OUtEm8W2PCfM17JxrlQG%2F%2FADSQZTWRDj4H1NZ6kO8%2B3HDkO%2BJvBXPNgtDLcNz5aaREAWT4sW12qyQ%2B%2FhtaHjT91Nu35RzNyoI1ypdK7nbASQ7VKaNdzGxxE9L8992BR8P0I9MOTAscQGOqUBUSZjAe%2Fryr%2F6fdWt8jYIkPWIUeb4vQp%2Bj801%2B7i7a%2BSMfIxnHoIMe25tnBMlOhxX3aanrYuz7%2BXin2fc7TteMqN7K%2FndxFnYmlmGdcEcr%2BPw%2FAvtmSjmZA2Iz3uw4u6bz8BiBVKvNdDaILlfuSj2zxIyKh607lIhjLCVmdhQ4aliZz43r6FZDoYdnxp4eGLSNvdoR4UpC1h3KvtpQ0emeru%2FyaGF&X-Amz-Signature=32003d75bcec5f54946bfb50b639f88e86622ced5484037181b280c5c6692027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4KKMG5I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfxwHP6C%2BY5adNI9F35qZV4NSCgKA6kUdBP7Le3Wbv1AiEAwiJewqTJpZMafu87qFRlrxvfnzDXHCZfD%2BaIjPq2rJAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDt8Lkvf1plluHoktyrcAztxBe1LK2wOlx7OR2ZwIwX9Ashdn7OE73QYGm0sf7hbMRRY4ck24ujuskBGVhXyf%2FRwcJ%2FPs8d6UnMea2LhRuM%2FRJIa5jKmxsZzIszaJgXVs%2B%2Fuj%2Be1j5DeyT%2BAt8qLHMyaYCWb2hTzZStrFEPsgCmBJQPZoEWimy8ow34bctEACbZxK%2BuHTn8NP6AvInSitxGqp1DKcpPZCv9QE3qOCDC1FuMy7lm8PebLskQPiJbl4x0NCCBzeyJH8ow2QcS8lfLKCmeX6uv0JycQ2dFUTvdkNnxy9J%2Fo2HMKxgQY8vP7Ln%2BgcLwuNOmEaKV11f%2BGmdlLCBrDDwCisIzei8chtWKgwbieuIMiEwWKkIGnb%2B5zT%2BWPPCD4tgs6lEk5gez8oPimEQepx%2Ftk%2BgGHafsap05hWDCT5UoY6mwN0TWzWaV%2Feh3SSzOXX1HeyXtEnASgp6bVQTJ8%2BAiQOzrZYq1EjeWBvCu9xX9MWoNqvHWcBSylKp%2BVV9cQRmx0OUtEm8W2PCfM17JxrlQG%2F%2FADSQZTWRDj4H1NZ6kO8%2B3HDkO%2BJvBXPNgtDLcNz5aaREAWT4sW12qyQ%2B%2FhtaHjT91Nu35RzNyoI1ypdK7nbASQ7VKaNdzGxxE9L8992BR8P0I9MOTAscQGOqUBUSZjAe%2Fryr%2F6fdWt8jYIkPWIUeb4vQp%2Bj801%2B7i7a%2BSMfIxnHoIMe25tnBMlOhxX3aanrYuz7%2BXin2fc7TteMqN7K%2FndxFnYmlmGdcEcr%2BPw%2FAvtmSjmZA2Iz3uw4u6bz8BiBVKvNdDaILlfuSj2zxIyKh607lIhjLCVmdhQ4aliZz43r6FZDoYdnxp4eGLSNvdoR4UpC1h3KvtpQ0emeru%2FyaGF&X-Amz-Signature=45c8aa27d8b56aa521a1fa478e9fcdc87b30e486754cd317ef667b88df8c93cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4KKMG5I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfxwHP6C%2BY5adNI9F35qZV4NSCgKA6kUdBP7Le3Wbv1AiEAwiJewqTJpZMafu87qFRlrxvfnzDXHCZfD%2BaIjPq2rJAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDt8Lkvf1plluHoktyrcAztxBe1LK2wOlx7OR2ZwIwX9Ashdn7OE73QYGm0sf7hbMRRY4ck24ujuskBGVhXyf%2FRwcJ%2FPs8d6UnMea2LhRuM%2FRJIa5jKmxsZzIszaJgXVs%2B%2Fuj%2Be1j5DeyT%2BAt8qLHMyaYCWb2hTzZStrFEPsgCmBJQPZoEWimy8ow34bctEACbZxK%2BuHTn8NP6AvInSitxGqp1DKcpPZCv9QE3qOCDC1FuMy7lm8PebLskQPiJbl4x0NCCBzeyJH8ow2QcS8lfLKCmeX6uv0JycQ2dFUTvdkNnxy9J%2Fo2HMKxgQY8vP7Ln%2BgcLwuNOmEaKV11f%2BGmdlLCBrDDwCisIzei8chtWKgwbieuIMiEwWKkIGnb%2B5zT%2BWPPCD4tgs6lEk5gez8oPimEQepx%2Ftk%2BgGHafsap05hWDCT5UoY6mwN0TWzWaV%2Feh3SSzOXX1HeyXtEnASgp6bVQTJ8%2BAiQOzrZYq1EjeWBvCu9xX9MWoNqvHWcBSylKp%2BVV9cQRmx0OUtEm8W2PCfM17JxrlQG%2F%2FADSQZTWRDj4H1NZ6kO8%2B3HDkO%2BJvBXPNgtDLcNz5aaREAWT4sW12qyQ%2B%2FhtaHjT91Nu35RzNyoI1ypdK7nbASQ7VKaNdzGxxE9L8992BR8P0I9MOTAscQGOqUBUSZjAe%2Fryr%2F6fdWt8jYIkPWIUeb4vQp%2Bj801%2B7i7a%2BSMfIxnHoIMe25tnBMlOhxX3aanrYuz7%2BXin2fc7TteMqN7K%2FndxFnYmlmGdcEcr%2BPw%2FAvtmSjmZA2Iz3uw4u6bz8BiBVKvNdDaILlfuSj2zxIyKh607lIhjLCVmdhQ4aliZz43r6FZDoYdnxp4eGLSNvdoR4UpC1h3KvtpQ0emeru%2FyaGF&X-Amz-Signature=6dc465f954737696f5885f0fd0816dec85896c790bb88cbf69d7bbed8d9ae66d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4KKMG5I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfxwHP6C%2BY5adNI9F35qZV4NSCgKA6kUdBP7Le3Wbv1AiEAwiJewqTJpZMafu87qFRlrxvfnzDXHCZfD%2BaIjPq2rJAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDt8Lkvf1plluHoktyrcAztxBe1LK2wOlx7OR2ZwIwX9Ashdn7OE73QYGm0sf7hbMRRY4ck24ujuskBGVhXyf%2FRwcJ%2FPs8d6UnMea2LhRuM%2FRJIa5jKmxsZzIszaJgXVs%2B%2Fuj%2Be1j5DeyT%2BAt8qLHMyaYCWb2hTzZStrFEPsgCmBJQPZoEWimy8ow34bctEACbZxK%2BuHTn8NP6AvInSitxGqp1DKcpPZCv9QE3qOCDC1FuMy7lm8PebLskQPiJbl4x0NCCBzeyJH8ow2QcS8lfLKCmeX6uv0JycQ2dFUTvdkNnxy9J%2Fo2HMKxgQY8vP7Ln%2BgcLwuNOmEaKV11f%2BGmdlLCBrDDwCisIzei8chtWKgwbieuIMiEwWKkIGnb%2B5zT%2BWPPCD4tgs6lEk5gez8oPimEQepx%2Ftk%2BgGHafsap05hWDCT5UoY6mwN0TWzWaV%2Feh3SSzOXX1HeyXtEnASgp6bVQTJ8%2BAiQOzrZYq1EjeWBvCu9xX9MWoNqvHWcBSylKp%2BVV9cQRmx0OUtEm8W2PCfM17JxrlQG%2F%2FADSQZTWRDj4H1NZ6kO8%2B3HDkO%2BJvBXPNgtDLcNz5aaREAWT4sW12qyQ%2B%2FhtaHjT91Nu35RzNyoI1ypdK7nbASQ7VKaNdzGxxE9L8992BR8P0I9MOTAscQGOqUBUSZjAe%2Fryr%2F6fdWt8jYIkPWIUeb4vQp%2Bj801%2B7i7a%2BSMfIxnHoIMe25tnBMlOhxX3aanrYuz7%2BXin2fc7TteMqN7K%2FndxFnYmlmGdcEcr%2BPw%2FAvtmSjmZA2Iz3uw4u6bz8BiBVKvNdDaILlfuSj2zxIyKh607lIhjLCVmdhQ4aliZz43r6FZDoYdnxp4eGLSNvdoR4UpC1h3KvtpQ0emeru%2FyaGF&X-Amz-Signature=333d363b7467fc359452d16ce6a75d3ef3736364e5701e9d0a76ef48440e1b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
	- inertial
		- origin
		- mass
		- inertia
- link:
	- visual
		- geometry
			- box
			- cylinder
			- sphere
		- material
			- color
	- collision
		- ~~origin~~
		- geometry
		- friction
	- xacro:box_inertia
	- xacro:cylinder_inertia
	- xacro:sphere_inertia
- joint:
	- parent
	- child
	- ~~origin~~
- xacro:wheel

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
        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
          <fdir1>1 0 0</fdir1>
        </ode></friction></surface>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4KKMG5I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfxwHP6C%2BY5adNI9F35qZV4NSCgKA6kUdBP7Le3Wbv1AiEAwiJewqTJpZMafu87qFRlrxvfnzDXHCZfD%2BaIjPq2rJAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDt8Lkvf1plluHoktyrcAztxBe1LK2wOlx7OR2ZwIwX9Ashdn7OE73QYGm0sf7hbMRRY4ck24ujuskBGVhXyf%2FRwcJ%2FPs8d6UnMea2LhRuM%2FRJIa5jKmxsZzIszaJgXVs%2B%2Fuj%2Be1j5DeyT%2BAt8qLHMyaYCWb2hTzZStrFEPsgCmBJQPZoEWimy8ow34bctEACbZxK%2BuHTn8NP6AvInSitxGqp1DKcpPZCv9QE3qOCDC1FuMy7lm8PebLskQPiJbl4x0NCCBzeyJH8ow2QcS8lfLKCmeX6uv0JycQ2dFUTvdkNnxy9J%2Fo2HMKxgQY8vP7Ln%2BgcLwuNOmEaKV11f%2BGmdlLCBrDDwCisIzei8chtWKgwbieuIMiEwWKkIGnb%2B5zT%2BWPPCD4tgs6lEk5gez8oPimEQepx%2Ftk%2BgGHafsap05hWDCT5UoY6mwN0TWzWaV%2Feh3SSzOXX1HeyXtEnASgp6bVQTJ8%2BAiQOzrZYq1EjeWBvCu9xX9MWoNqvHWcBSylKp%2BVV9cQRmx0OUtEm8W2PCfM17JxrlQG%2F%2FADSQZTWRDj4H1NZ6kO8%2B3HDkO%2BJvBXPNgtDLcNz5aaREAWT4sW12qyQ%2B%2FhtaHjT91Nu35RzNyoI1ypdK7nbASQ7VKaNdzGxxE9L8992BR8P0I9MOTAscQGOqUBUSZjAe%2Fryr%2F6fdWt8jYIkPWIUeb4vQp%2Bj801%2B7i7a%2BSMfIxnHoIMe25tnBMlOhxX3aanrYuz7%2BXin2fc7TteMqN7K%2FndxFnYmlmGdcEcr%2BPw%2FAvtmSjmZA2Iz3uw4u6bz8BiBVKvNdDaILlfuSj2zxIyKh607lIhjLCVmdhQ4aliZz43r6FZDoYdnxp4eGLSNvdoR4UpC1h3KvtpQ0emeru%2FyaGF&X-Amz-Signature=a97da5cfbabe80f88ccbcddc21d8fb1a183f6ac263422f96855da5dc48769195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4KKMG5I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfxwHP6C%2BY5adNI9F35qZV4NSCgKA6kUdBP7Le3Wbv1AiEAwiJewqTJpZMafu87qFRlrxvfnzDXHCZfD%2BaIjPq2rJAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDt8Lkvf1plluHoktyrcAztxBe1LK2wOlx7OR2ZwIwX9Ashdn7OE73QYGm0sf7hbMRRY4ck24ujuskBGVhXyf%2FRwcJ%2FPs8d6UnMea2LhRuM%2FRJIa5jKmxsZzIszaJgXVs%2B%2Fuj%2Be1j5DeyT%2BAt8qLHMyaYCWb2hTzZStrFEPsgCmBJQPZoEWimy8ow34bctEACbZxK%2BuHTn8NP6AvInSitxGqp1DKcpPZCv9QE3qOCDC1FuMy7lm8PebLskQPiJbl4x0NCCBzeyJH8ow2QcS8lfLKCmeX6uv0JycQ2dFUTvdkNnxy9J%2Fo2HMKxgQY8vP7Ln%2BgcLwuNOmEaKV11f%2BGmdlLCBrDDwCisIzei8chtWKgwbieuIMiEwWKkIGnb%2B5zT%2BWPPCD4tgs6lEk5gez8oPimEQepx%2Ftk%2BgGHafsap05hWDCT5UoY6mwN0TWzWaV%2Feh3SSzOXX1HeyXtEnASgp6bVQTJ8%2BAiQOzrZYq1EjeWBvCu9xX9MWoNqvHWcBSylKp%2BVV9cQRmx0OUtEm8W2PCfM17JxrlQG%2F%2FADSQZTWRDj4H1NZ6kO8%2B3HDkO%2BJvBXPNgtDLcNz5aaREAWT4sW12qyQ%2B%2FhtaHjT91Nu35RzNyoI1ypdK7nbASQ7VKaNdzGxxE9L8992BR8P0I9MOTAscQGOqUBUSZjAe%2Fryr%2F6fdWt8jYIkPWIUeb4vQp%2Bj801%2B7i7a%2BSMfIxnHoIMe25tnBMlOhxX3aanrYuz7%2BXin2fc7TteMqN7K%2FndxFnYmlmGdcEcr%2BPw%2FAvtmSjmZA2Iz3uw4u6bz8BiBVKvNdDaILlfuSj2zxIyKh607lIhjLCVmdhQ4aliZz43r6FZDoYdnxp4eGLSNvdoR4UpC1h3KvtpQ0emeru%2FyaGF&X-Amz-Signature=ffd183808c77a0db52e73cc5ddaefcc82809e5acf6a7d521846762439896a5dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4KKMG5I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfxwHP6C%2BY5adNI9F35qZV4NSCgKA6kUdBP7Le3Wbv1AiEAwiJewqTJpZMafu87qFRlrxvfnzDXHCZfD%2BaIjPq2rJAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDt8Lkvf1plluHoktyrcAztxBe1LK2wOlx7OR2ZwIwX9Ashdn7OE73QYGm0sf7hbMRRY4ck24ujuskBGVhXyf%2FRwcJ%2FPs8d6UnMea2LhRuM%2FRJIa5jKmxsZzIszaJgXVs%2B%2Fuj%2Be1j5DeyT%2BAt8qLHMyaYCWb2hTzZStrFEPsgCmBJQPZoEWimy8ow34bctEACbZxK%2BuHTn8NP6AvInSitxGqp1DKcpPZCv9QE3qOCDC1FuMy7lm8PebLskQPiJbl4x0NCCBzeyJH8ow2QcS8lfLKCmeX6uv0JycQ2dFUTvdkNnxy9J%2Fo2HMKxgQY8vP7Ln%2BgcLwuNOmEaKV11f%2BGmdlLCBrDDwCisIzei8chtWKgwbieuIMiEwWKkIGnb%2B5zT%2BWPPCD4tgs6lEk5gez8oPimEQepx%2Ftk%2BgGHafsap05hWDCT5UoY6mwN0TWzWaV%2Feh3SSzOXX1HeyXtEnASgp6bVQTJ8%2BAiQOzrZYq1EjeWBvCu9xX9MWoNqvHWcBSylKp%2BVV9cQRmx0OUtEm8W2PCfM17JxrlQG%2F%2FADSQZTWRDj4H1NZ6kO8%2B3HDkO%2BJvBXPNgtDLcNz5aaREAWT4sW12qyQ%2B%2FhtaHjT91Nu35RzNyoI1ypdK7nbASQ7VKaNdzGxxE9L8992BR8P0I9MOTAscQGOqUBUSZjAe%2Fryr%2F6fdWt8jYIkPWIUeb4vQp%2Bj801%2B7i7a%2BSMfIxnHoIMe25tnBMlOhxX3aanrYuz7%2BXin2fc7TteMqN7K%2FndxFnYmlmGdcEcr%2BPw%2FAvtmSjmZA2Iz3uw4u6bz8BiBVKvNdDaILlfuSj2zxIyKh607lIhjLCVmdhQ4aliZz43r6FZDoYdnxp4eGLSNvdoR4UpC1h3KvtpQ0emeru%2FyaGF&X-Amz-Signature=05daf57078c99ca70302e669f4d7438e7f3ba0f8b282c9fcaef651098c325a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C2RC4XC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BkhvHQvaG5TbiDkRvdN47lMEWRvdnZiplp83iEH0x%2FAiAfx%2BkkZYtplEMIJOnTOiHMA5DlN3N5GdmXXrbtJuWebyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdYReAFjpJNxVhW%2BpKtwDtDXtSPkCcNES2xpNdUKUlv3jiUnLue7ZDMSIz4HRdoUarhery13tgbhehNaHMbndu%2Fson1W8uUp%2Bs8dyz%2BO%2B4g6MqZOhJHw8G%2F0Bdxx%2FzKmpke3Lh3mq2z3LYeVb%2BzJYnaXRBR2VvLk0Kiya0FY53lRIQAjermP3FiU%2BGzDzs5RAAaQ6CTV%2BkCcK%2BPzjC3%2FJWxXSQiCWKlJGnXBy1aBb0R%2F7w8PurKeE0kAyrR3awNYU6sNMRrQ8IjlcadrvUg9tLErZLRd4SErQBN9xm5IggKU1E3AsM%2BuQrLNV%2FWtozaa9c8fopH1VDXr9artFkK%2FgP48V3dtCO6wvpflVRd5%2BM7VTBrqhV8f%2FKQNQfUpS8tq95HUducJjRCUfglpw38aFjatPdmAwZTERxOSeEqox5tD0PLpnXg7qJmQeA7xfJcGn5p1QaSDXiTTNZ2rKmAAa%2BRMzRLvJ12WUc26XreVL%2Bkrs9DyE6t%2FdkKMVnUKEeFGAZyU5ZYcjKQl%2FrL5%2BWZIn3BIz4zaGwXX8CB0qF3l3CTzzd31LPGlZBtWkwCgxas28gZblcxLmI4PFdWYAsSEPrbvZPyYRg1Qc8F7EnelZLtxGvgdNNXd9D9XVBe97MdER5m0ikc536unG5Ygw%2B7%2BxxAY6pgF8jtpH0ewvQjsk94Ob8uAgvniRz6204745RFXDnFTd7pwzHbKgScHPhnFvxdpZL3lvFvsj4BKwvqLtCql1aBkBCG0u3DSfCWJVYdIr24%2FUHL4%2B2KSvNnaZRz%2BWZWIst%2F9OyyfV%2FqYxsPw%2FEFe984Eu43VFUZIIQhB%2Fx%2F%2Bw8HaPGm%2FZcpAwIvzVc2oSsXp2nqSUPwZMHQEoBNiqUpwndDkVR41brDnJ&X-Amz-Signature=0fb3c2714c4bd53df2073cc514e8da5b70f97bc4008d8ec1f94f66ec111109e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C2RC4XC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BkhvHQvaG5TbiDkRvdN47lMEWRvdnZiplp83iEH0x%2FAiAfx%2BkkZYtplEMIJOnTOiHMA5DlN3N5GdmXXrbtJuWebyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdYReAFjpJNxVhW%2BpKtwDtDXtSPkCcNES2xpNdUKUlv3jiUnLue7ZDMSIz4HRdoUarhery13tgbhehNaHMbndu%2Fson1W8uUp%2Bs8dyz%2BO%2B4g6MqZOhJHw8G%2F0Bdxx%2FzKmpke3Lh3mq2z3LYeVb%2BzJYnaXRBR2VvLk0Kiya0FY53lRIQAjermP3FiU%2BGzDzs5RAAaQ6CTV%2BkCcK%2BPzjC3%2FJWxXSQiCWKlJGnXBy1aBb0R%2F7w8PurKeE0kAyrR3awNYU6sNMRrQ8IjlcadrvUg9tLErZLRd4SErQBN9xm5IggKU1E3AsM%2BuQrLNV%2FWtozaa9c8fopH1VDXr9artFkK%2FgP48V3dtCO6wvpflVRd5%2BM7VTBrqhV8f%2FKQNQfUpS8tq95HUducJjRCUfglpw38aFjatPdmAwZTERxOSeEqox5tD0PLpnXg7qJmQeA7xfJcGn5p1QaSDXiTTNZ2rKmAAa%2BRMzRLvJ12WUc26XreVL%2Bkrs9DyE6t%2FdkKMVnUKEeFGAZyU5ZYcjKQl%2FrL5%2BWZIn3BIz4zaGwXX8CB0qF3l3CTzzd31LPGlZBtWkwCgxas28gZblcxLmI4PFdWYAsSEPrbvZPyYRg1Qc8F7EnelZLtxGvgdNNXd9D9XVBe97MdER5m0ikc536unG5Ygw%2B7%2BxxAY6pgF8jtpH0ewvQjsk94Ob8uAgvniRz6204745RFXDnFTd7pwzHbKgScHPhnFvxdpZL3lvFvsj4BKwvqLtCql1aBkBCG0u3DSfCWJVYdIr24%2FUHL4%2B2KSvNnaZRz%2BWZWIst%2F9OyyfV%2FqYxsPw%2FEFe984Eu43VFUZIIQhB%2Fx%2F%2Bw8HaPGm%2FZcpAwIvzVc2oSsXp2nqSUPwZMHQEoBNiqUpwndDkVR41brDnJ&X-Amz-Signature=861d50d4c261eb4529f5880ee9b5078f0c237f9661e5345554fb51bc7b9d3746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C2RC4XC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BkhvHQvaG5TbiDkRvdN47lMEWRvdnZiplp83iEH0x%2FAiAfx%2BkkZYtplEMIJOnTOiHMA5DlN3N5GdmXXrbtJuWebyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdYReAFjpJNxVhW%2BpKtwDtDXtSPkCcNES2xpNdUKUlv3jiUnLue7ZDMSIz4HRdoUarhery13tgbhehNaHMbndu%2Fson1W8uUp%2Bs8dyz%2BO%2B4g6MqZOhJHw8G%2F0Bdxx%2FzKmpke3Lh3mq2z3LYeVb%2BzJYnaXRBR2VvLk0Kiya0FY53lRIQAjermP3FiU%2BGzDzs5RAAaQ6CTV%2BkCcK%2BPzjC3%2FJWxXSQiCWKlJGnXBy1aBb0R%2F7w8PurKeE0kAyrR3awNYU6sNMRrQ8IjlcadrvUg9tLErZLRd4SErQBN9xm5IggKU1E3AsM%2BuQrLNV%2FWtozaa9c8fopH1VDXr9artFkK%2FgP48V3dtCO6wvpflVRd5%2BM7VTBrqhV8f%2FKQNQfUpS8tq95HUducJjRCUfglpw38aFjatPdmAwZTERxOSeEqox5tD0PLpnXg7qJmQeA7xfJcGn5p1QaSDXiTTNZ2rKmAAa%2BRMzRLvJ12WUc26XreVL%2Bkrs9DyE6t%2FdkKMVnUKEeFGAZyU5ZYcjKQl%2FrL5%2BWZIn3BIz4zaGwXX8CB0qF3l3CTzzd31LPGlZBtWkwCgxas28gZblcxLmI4PFdWYAsSEPrbvZPyYRg1Qc8F7EnelZLtxGvgdNNXd9D9XVBe97MdER5m0ikc536unG5Ygw%2B7%2BxxAY6pgF8jtpH0ewvQjsk94Ob8uAgvniRz6204745RFXDnFTd7pwzHbKgScHPhnFvxdpZL3lvFvsj4BKwvqLtCql1aBkBCG0u3DSfCWJVYdIr24%2FUHL4%2B2KSvNnaZRz%2BWZWIst%2F9OyyfV%2FqYxsPw%2FEFe984Eu43VFUZIIQhB%2Fx%2F%2Bw8HaPGm%2FZcpAwIvzVc2oSsXp2nqSUPwZMHQEoBNiqUpwndDkVR41brDnJ&X-Amz-Signature=8300c33ac695d1340e878aef1c92c3360d07f05b80abdfacb732a0c54b0d5179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C2RC4XC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BkhvHQvaG5TbiDkRvdN47lMEWRvdnZiplp83iEH0x%2FAiAfx%2BkkZYtplEMIJOnTOiHMA5DlN3N5GdmXXrbtJuWebyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdYReAFjpJNxVhW%2BpKtwDtDXtSPkCcNES2xpNdUKUlv3jiUnLue7ZDMSIz4HRdoUarhery13tgbhehNaHMbndu%2Fson1W8uUp%2Bs8dyz%2BO%2B4g6MqZOhJHw8G%2F0Bdxx%2FzKmpke3Lh3mq2z3LYeVb%2BzJYnaXRBR2VvLk0Kiya0FY53lRIQAjermP3FiU%2BGzDzs5RAAaQ6CTV%2BkCcK%2BPzjC3%2FJWxXSQiCWKlJGnXBy1aBb0R%2F7w8PurKeE0kAyrR3awNYU6sNMRrQ8IjlcadrvUg9tLErZLRd4SErQBN9xm5IggKU1E3AsM%2BuQrLNV%2FWtozaa9c8fopH1VDXr9artFkK%2FgP48V3dtCO6wvpflVRd5%2BM7VTBrqhV8f%2FKQNQfUpS8tq95HUducJjRCUfglpw38aFjatPdmAwZTERxOSeEqox5tD0PLpnXg7qJmQeA7xfJcGn5p1QaSDXiTTNZ2rKmAAa%2BRMzRLvJ12WUc26XreVL%2Bkrs9DyE6t%2FdkKMVnUKEeFGAZyU5ZYcjKQl%2FrL5%2BWZIn3BIz4zaGwXX8CB0qF3l3CTzzd31LPGlZBtWkwCgxas28gZblcxLmI4PFdWYAsSEPrbvZPyYRg1Qc8F7EnelZLtxGvgdNNXd9D9XVBe97MdER5m0ikc536unG5Ygw%2B7%2BxxAY6pgF8jtpH0ewvQjsk94Ob8uAgvniRz6204745RFXDnFTd7pwzHbKgScHPhnFvxdpZL3lvFvsj4BKwvqLtCql1aBkBCG0u3DSfCWJVYdIr24%2FUHL4%2B2KSvNnaZRz%2BWZWIst%2F9OyyfV%2FqYxsPw%2FEFe984Eu43VFUZIIQhB%2Fx%2F%2Bw8HaPGm%2FZcpAwIvzVc2oSsXp2nqSUPwZMHQEoBNiqUpwndDkVR41brDnJ&X-Amz-Signature=cc47a04879460424909bb2e868ece948b1b9fe083a8bdd05d55eb7314d7d8d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C2RC4XC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BkhvHQvaG5TbiDkRvdN47lMEWRvdnZiplp83iEH0x%2FAiAfx%2BkkZYtplEMIJOnTOiHMA5DlN3N5GdmXXrbtJuWebyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdYReAFjpJNxVhW%2BpKtwDtDXtSPkCcNES2xpNdUKUlv3jiUnLue7ZDMSIz4HRdoUarhery13tgbhehNaHMbndu%2Fson1W8uUp%2Bs8dyz%2BO%2B4g6MqZOhJHw8G%2F0Bdxx%2FzKmpke3Lh3mq2z3LYeVb%2BzJYnaXRBR2VvLk0Kiya0FY53lRIQAjermP3FiU%2BGzDzs5RAAaQ6CTV%2BkCcK%2BPzjC3%2FJWxXSQiCWKlJGnXBy1aBb0R%2F7w8PurKeE0kAyrR3awNYU6sNMRrQ8IjlcadrvUg9tLErZLRd4SErQBN9xm5IggKU1E3AsM%2BuQrLNV%2FWtozaa9c8fopH1VDXr9artFkK%2FgP48V3dtCO6wvpflVRd5%2BM7VTBrqhV8f%2FKQNQfUpS8tq95HUducJjRCUfglpw38aFjatPdmAwZTERxOSeEqox5tD0PLpnXg7qJmQeA7xfJcGn5p1QaSDXiTTNZ2rKmAAa%2BRMzRLvJ12WUc26XreVL%2Bkrs9DyE6t%2FdkKMVnUKEeFGAZyU5ZYcjKQl%2FrL5%2BWZIn3BIz4zaGwXX8CB0qF3l3CTzzd31LPGlZBtWkwCgxas28gZblcxLmI4PFdWYAsSEPrbvZPyYRg1Qc8F7EnelZLtxGvgdNNXd9D9XVBe97MdER5m0ikc536unG5Ygw%2B7%2BxxAY6pgF8jtpH0ewvQjsk94Ob8uAgvniRz6204745RFXDnFTd7pwzHbKgScHPhnFvxdpZL3lvFvsj4BKwvqLtCql1aBkBCG0u3DSfCWJVYdIr24%2FUHL4%2B2KSvNnaZRz%2BWZWIst%2F9OyyfV%2FqYxsPw%2FEFe984Eu43VFUZIIQhB%2Fx%2F%2Bw8HaPGm%2FZcpAwIvzVc2oSsXp2nqSUPwZMHQEoBNiqUpwndDkVR41brDnJ&X-Amz-Signature=95e21f0cd97acc9b7e52ff4f491cf25db7bd7a2be96ed5e30d7be0fe011f4d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C2RC4XC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BkhvHQvaG5TbiDkRvdN47lMEWRvdnZiplp83iEH0x%2FAiAfx%2BkkZYtplEMIJOnTOiHMA5DlN3N5GdmXXrbtJuWebyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdYReAFjpJNxVhW%2BpKtwDtDXtSPkCcNES2xpNdUKUlv3jiUnLue7ZDMSIz4HRdoUarhery13tgbhehNaHMbndu%2Fson1W8uUp%2Bs8dyz%2BO%2B4g6MqZOhJHw8G%2F0Bdxx%2FzKmpke3Lh3mq2z3LYeVb%2BzJYnaXRBR2VvLk0Kiya0FY53lRIQAjermP3FiU%2BGzDzs5RAAaQ6CTV%2BkCcK%2BPzjC3%2FJWxXSQiCWKlJGnXBy1aBb0R%2F7w8PurKeE0kAyrR3awNYU6sNMRrQ8IjlcadrvUg9tLErZLRd4SErQBN9xm5IggKU1E3AsM%2BuQrLNV%2FWtozaa9c8fopH1VDXr9artFkK%2FgP48V3dtCO6wvpflVRd5%2BM7VTBrqhV8f%2FKQNQfUpS8tq95HUducJjRCUfglpw38aFjatPdmAwZTERxOSeEqox5tD0PLpnXg7qJmQeA7xfJcGn5p1QaSDXiTTNZ2rKmAAa%2BRMzRLvJ12WUc26XreVL%2Bkrs9DyE6t%2FdkKMVnUKEeFGAZyU5ZYcjKQl%2FrL5%2BWZIn3BIz4zaGwXX8CB0qF3l3CTzzd31LPGlZBtWkwCgxas28gZblcxLmI4PFdWYAsSEPrbvZPyYRg1Qc8F7EnelZLtxGvgdNNXd9D9XVBe97MdER5m0ikc536unG5Ygw%2B7%2BxxAY6pgF8jtpH0ewvQjsk94Ob8uAgvniRz6204745RFXDnFTd7pwzHbKgScHPhnFvxdpZL3lvFvsj4BKwvqLtCql1aBkBCG0u3DSfCWJVYdIr24%2FUHL4%2B2KSvNnaZRz%2BWZWIst%2F9OyyfV%2FqYxsPw%2FEFe984Eu43VFUZIIQhB%2Fx%2F%2Bw8HaPGm%2FZcpAwIvzVc2oSsXp2nqSUPwZMHQEoBNiqUpwndDkVR41brDnJ&X-Amz-Signature=f14739ceaf001f5424bcbc92c8e616c6f451fc783eb64d40138998cba7413f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C2RC4XC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BkhvHQvaG5TbiDkRvdN47lMEWRvdnZiplp83iEH0x%2FAiAfx%2BkkZYtplEMIJOnTOiHMA5DlN3N5GdmXXrbtJuWebyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdYReAFjpJNxVhW%2BpKtwDtDXtSPkCcNES2xpNdUKUlv3jiUnLue7ZDMSIz4HRdoUarhery13tgbhehNaHMbndu%2Fson1W8uUp%2Bs8dyz%2BO%2B4g6MqZOhJHw8G%2F0Bdxx%2FzKmpke3Lh3mq2z3LYeVb%2BzJYnaXRBR2VvLk0Kiya0FY53lRIQAjermP3FiU%2BGzDzs5RAAaQ6CTV%2BkCcK%2BPzjC3%2FJWxXSQiCWKlJGnXBy1aBb0R%2F7w8PurKeE0kAyrR3awNYU6sNMRrQ8IjlcadrvUg9tLErZLRd4SErQBN9xm5IggKU1E3AsM%2BuQrLNV%2FWtozaa9c8fopH1VDXr9artFkK%2FgP48V3dtCO6wvpflVRd5%2BM7VTBrqhV8f%2FKQNQfUpS8tq95HUducJjRCUfglpw38aFjatPdmAwZTERxOSeEqox5tD0PLpnXg7qJmQeA7xfJcGn5p1QaSDXiTTNZ2rKmAAa%2BRMzRLvJ12WUc26XreVL%2Bkrs9DyE6t%2FdkKMVnUKEeFGAZyU5ZYcjKQl%2FrL5%2BWZIn3BIz4zaGwXX8CB0qF3l3CTzzd31LPGlZBtWkwCgxas28gZblcxLmI4PFdWYAsSEPrbvZPyYRg1Qc8F7EnelZLtxGvgdNNXd9D9XVBe97MdER5m0ikc536unG5Ygw%2B7%2BxxAY6pgF8jtpH0ewvQjsk94Ob8uAgvniRz6204745RFXDnFTd7pwzHbKgScHPhnFvxdpZL3lvFvsj4BKwvqLtCql1aBkBCG0u3DSfCWJVYdIr24%2FUHL4%2B2KSvNnaZRz%2BWZWIst%2F9OyyfV%2FqYxsPw%2FEFe984Eu43VFUZIIQhB%2Fx%2F%2Bw8HaPGm%2FZcpAwIvzVc2oSsXp2nqSUPwZMHQEoBNiqUpwndDkVR41brDnJ&X-Amz-Signature=4601c321bcea4a06b316cc12144253e0642abfc378fa51793485c016a7cdeb1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
