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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPYTZQH%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F8%2FBy%2BLr8va1tJOyf11DT4CkSktsSQ%2FQ%2BYjZ%2B0o2ORAiEA9J1Pn0PavQKoKdD2vdpKljjcIWREtI5j6LH2zYg3KBEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOfsFGSagfj4I5dCMircA1L9FEewW5lqQnzV7YfgDWt96dTXHdBDphY3vgLlI1PMzh5Q4TpEB%2BdB4JyeOttKLt7h%2FiqZb3W%2BY6K%2BrPwqWYCZI7QTIw25gzd1KCAaQnuFJIROpD1b5db1crubrgxvevj8GitVstHPWz3awqtm8rhIi3A8KBQ%2BgrXWH8IsyaxBZsfuFkLL8nOh57YatVk3Hp5ULcnnqMqWJCTF2q96XxsjdySC4waDjEdVqdUH3nlsLxS8qnXnu73g5Ix7YpsrecV8vqlTk6Fm2DrGs69%2FNA5VZxNS71Doey%2F2LahQWG%2F%2FlvVh9NWrwNTz3eD9gK0DV3AoCppUoZeJ7p0IcGAcUogdlcQqgkECKP3vWp7TwQ8QC1J9x3vkFVVB23FhPZ%2F4RCwf4YM5qwURQmaWSUU6TaPzXdw%2FnqbmTYh74NzPG2OliUH%2BPqLcF4hnbNU0rHTLvA3e20YhEgDJ39gZTcKoFdIDH89UHPE6oZDOlUG%2FL7D7TgH2vuGoC9%2FrWRP59aT9UsQZZYtlJ002w9QMaZQx7%2F9v7ZZAXZkAvc9dgdLBCmDVBE8OocTuYxZG5ZPH9YTVwYph3AntgqPLgi47sFGgnK88uyowfWgdo0MuwfoTYnZksXKBpjNh4UUIza0%2FMI%2FMztQGOqUB4FBBrkusUQeELm1fX5iMWM2Ewr7gY7kSikTKJ5yF3%2BOIcNtNX2g4bThrY%2B%2BLvwNQ%2FOpxdAoDUo6sB4Jya85iJSoBVl545yIXt2%2BAMELGnH9mBFhm7FCYnYn59%2BzWo9B5ksyTE5g10y96vnjh5CbwbFl57JYh7sJGi6NnvvQjGbRekTQrDngq%2BjuQTlkzaX8xc%2FD5J2I2FvTm17WYpyCfiMi9%2FSW3&X-Amz-Signature=34b966b969a759c2871a90a2da694ecc72839e09fa2e69839369a400aeb07ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPYTZQH%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F8%2FBy%2BLr8va1tJOyf11DT4CkSktsSQ%2FQ%2BYjZ%2B0o2ORAiEA9J1Pn0PavQKoKdD2vdpKljjcIWREtI5j6LH2zYg3KBEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOfsFGSagfj4I5dCMircA1L9FEewW5lqQnzV7YfgDWt96dTXHdBDphY3vgLlI1PMzh5Q4TpEB%2BdB4JyeOttKLt7h%2FiqZb3W%2BY6K%2BrPwqWYCZI7QTIw25gzd1KCAaQnuFJIROpD1b5db1crubrgxvevj8GitVstHPWz3awqtm8rhIi3A8KBQ%2BgrXWH8IsyaxBZsfuFkLL8nOh57YatVk3Hp5ULcnnqMqWJCTF2q96XxsjdySC4waDjEdVqdUH3nlsLxS8qnXnu73g5Ix7YpsrecV8vqlTk6Fm2DrGs69%2FNA5VZxNS71Doey%2F2LahQWG%2F%2FlvVh9NWrwNTz3eD9gK0DV3AoCppUoZeJ7p0IcGAcUogdlcQqgkECKP3vWp7TwQ8QC1J9x3vkFVVB23FhPZ%2F4RCwf4YM5qwURQmaWSUU6TaPzXdw%2FnqbmTYh74NzPG2OliUH%2BPqLcF4hnbNU0rHTLvA3e20YhEgDJ39gZTcKoFdIDH89UHPE6oZDOlUG%2FL7D7TgH2vuGoC9%2FrWRP59aT9UsQZZYtlJ002w9QMaZQx7%2F9v7ZZAXZkAvc9dgdLBCmDVBE8OocTuYxZG5ZPH9YTVwYph3AntgqPLgi47sFGgnK88uyowfWgdo0MuwfoTYnZksXKBpjNh4UUIza0%2FMI%2FMztQGOqUB4FBBrkusUQeELm1fX5iMWM2Ewr7gY7kSikTKJ5yF3%2BOIcNtNX2g4bThrY%2B%2BLvwNQ%2FOpxdAoDUo6sB4Jya85iJSoBVl545yIXt2%2BAMELGnH9mBFhm7FCYnYn59%2BzWo9B5ksyTE5g10y96vnjh5CbwbFl57JYh7sJGi6NnvvQjGbRekTQrDngq%2BjuQTlkzaX8xc%2FD5J2I2FvTm17WYpyCfiMi9%2FSW3&X-Amz-Signature=5e0d36833f8fbeaa29bac9818b5b2113c44576adcfa284292bed9a82431b2d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPYTZQH%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F8%2FBy%2BLr8va1tJOyf11DT4CkSktsSQ%2FQ%2BYjZ%2B0o2ORAiEA9J1Pn0PavQKoKdD2vdpKljjcIWREtI5j6LH2zYg3KBEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOfsFGSagfj4I5dCMircA1L9FEewW5lqQnzV7YfgDWt96dTXHdBDphY3vgLlI1PMzh5Q4TpEB%2BdB4JyeOttKLt7h%2FiqZb3W%2BY6K%2BrPwqWYCZI7QTIw25gzd1KCAaQnuFJIROpD1b5db1crubrgxvevj8GitVstHPWz3awqtm8rhIi3A8KBQ%2BgrXWH8IsyaxBZsfuFkLL8nOh57YatVk3Hp5ULcnnqMqWJCTF2q96XxsjdySC4waDjEdVqdUH3nlsLxS8qnXnu73g5Ix7YpsrecV8vqlTk6Fm2DrGs69%2FNA5VZxNS71Doey%2F2LahQWG%2F%2FlvVh9NWrwNTz3eD9gK0DV3AoCppUoZeJ7p0IcGAcUogdlcQqgkECKP3vWp7TwQ8QC1J9x3vkFVVB23FhPZ%2F4RCwf4YM5qwURQmaWSUU6TaPzXdw%2FnqbmTYh74NzPG2OliUH%2BPqLcF4hnbNU0rHTLvA3e20YhEgDJ39gZTcKoFdIDH89UHPE6oZDOlUG%2FL7D7TgH2vuGoC9%2FrWRP59aT9UsQZZYtlJ002w9QMaZQx7%2F9v7ZZAXZkAvc9dgdLBCmDVBE8OocTuYxZG5ZPH9YTVwYph3AntgqPLgi47sFGgnK88uyowfWgdo0MuwfoTYnZksXKBpjNh4UUIza0%2FMI%2FMztQGOqUB4FBBrkusUQeELm1fX5iMWM2Ewr7gY7kSikTKJ5yF3%2BOIcNtNX2g4bThrY%2B%2BLvwNQ%2FOpxdAoDUo6sB4Jya85iJSoBVl545yIXt2%2BAMELGnH9mBFhm7FCYnYn59%2BzWo9B5ksyTE5g10y96vnjh5CbwbFl57JYh7sJGi6NnvvQjGbRekTQrDngq%2BjuQTlkzaX8xc%2FD5J2I2FvTm17WYpyCfiMi9%2FSW3&X-Amz-Signature=80ca558ce3ecdd7fea6c26f6d9d17807aefbe60f47e52dd9e824fd6279381dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPYTZQH%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F8%2FBy%2BLr8va1tJOyf11DT4CkSktsSQ%2FQ%2BYjZ%2B0o2ORAiEA9J1Pn0PavQKoKdD2vdpKljjcIWREtI5j6LH2zYg3KBEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOfsFGSagfj4I5dCMircA1L9FEewW5lqQnzV7YfgDWt96dTXHdBDphY3vgLlI1PMzh5Q4TpEB%2BdB4JyeOttKLt7h%2FiqZb3W%2BY6K%2BrPwqWYCZI7QTIw25gzd1KCAaQnuFJIROpD1b5db1crubrgxvevj8GitVstHPWz3awqtm8rhIi3A8KBQ%2BgrXWH8IsyaxBZsfuFkLL8nOh57YatVk3Hp5ULcnnqMqWJCTF2q96XxsjdySC4waDjEdVqdUH3nlsLxS8qnXnu73g5Ix7YpsrecV8vqlTk6Fm2DrGs69%2FNA5VZxNS71Doey%2F2LahQWG%2F%2FlvVh9NWrwNTz3eD9gK0DV3AoCppUoZeJ7p0IcGAcUogdlcQqgkECKP3vWp7TwQ8QC1J9x3vkFVVB23FhPZ%2F4RCwf4YM5qwURQmaWSUU6TaPzXdw%2FnqbmTYh74NzPG2OliUH%2BPqLcF4hnbNU0rHTLvA3e20YhEgDJ39gZTcKoFdIDH89UHPE6oZDOlUG%2FL7D7TgH2vuGoC9%2FrWRP59aT9UsQZZYtlJ002w9QMaZQx7%2F9v7ZZAXZkAvc9dgdLBCmDVBE8OocTuYxZG5ZPH9YTVwYph3AntgqPLgi47sFGgnK88uyowfWgdo0MuwfoTYnZksXKBpjNh4UUIza0%2FMI%2FMztQGOqUB4FBBrkusUQeELm1fX5iMWM2Ewr7gY7kSikTKJ5yF3%2BOIcNtNX2g4bThrY%2B%2BLvwNQ%2FOpxdAoDUo6sB4Jya85iJSoBVl545yIXt2%2BAMELGnH9mBFhm7FCYnYn59%2BzWo9B5ksyTE5g10y96vnjh5CbwbFl57JYh7sJGi6NnvvQjGbRekTQrDngq%2BjuQTlkzaX8xc%2FD5J2I2FvTm17WYpyCfiMi9%2FSW3&X-Amz-Signature=381e01b9311decf00e0007a8a2e8d73048b132b5e8e812c3f4e0cf66d97e4586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPYTZQH%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F8%2FBy%2BLr8va1tJOyf11DT4CkSktsSQ%2FQ%2BYjZ%2B0o2ORAiEA9J1Pn0PavQKoKdD2vdpKljjcIWREtI5j6LH2zYg3KBEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOfsFGSagfj4I5dCMircA1L9FEewW5lqQnzV7YfgDWt96dTXHdBDphY3vgLlI1PMzh5Q4TpEB%2BdB4JyeOttKLt7h%2FiqZb3W%2BY6K%2BrPwqWYCZI7QTIw25gzd1KCAaQnuFJIROpD1b5db1crubrgxvevj8GitVstHPWz3awqtm8rhIi3A8KBQ%2BgrXWH8IsyaxBZsfuFkLL8nOh57YatVk3Hp5ULcnnqMqWJCTF2q96XxsjdySC4waDjEdVqdUH3nlsLxS8qnXnu73g5Ix7YpsrecV8vqlTk6Fm2DrGs69%2FNA5VZxNS71Doey%2F2LahQWG%2F%2FlvVh9NWrwNTz3eD9gK0DV3AoCppUoZeJ7p0IcGAcUogdlcQqgkECKP3vWp7TwQ8QC1J9x3vkFVVB23FhPZ%2F4RCwf4YM5qwURQmaWSUU6TaPzXdw%2FnqbmTYh74NzPG2OliUH%2BPqLcF4hnbNU0rHTLvA3e20YhEgDJ39gZTcKoFdIDH89UHPE6oZDOlUG%2FL7D7TgH2vuGoC9%2FrWRP59aT9UsQZZYtlJ002w9QMaZQx7%2F9v7ZZAXZkAvc9dgdLBCmDVBE8OocTuYxZG5ZPH9YTVwYph3AntgqPLgi47sFGgnK88uyowfWgdo0MuwfoTYnZksXKBpjNh4UUIza0%2FMI%2FMztQGOqUB4FBBrkusUQeELm1fX5iMWM2Ewr7gY7kSikTKJ5yF3%2BOIcNtNX2g4bThrY%2B%2BLvwNQ%2FOpxdAoDUo6sB4Jya85iJSoBVl545yIXt2%2BAMELGnH9mBFhm7FCYnYn59%2BzWo9B5ksyTE5g10y96vnjh5CbwbFl57JYh7sJGi6NnvvQjGbRekTQrDngq%2BjuQTlkzaX8xc%2FD5J2I2FvTm17WYpyCfiMi9%2FSW3&X-Amz-Signature=81ff6b1adb608ddfcb7b1975de6a7d767a92868a333a86f6f2ab157632232155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPYTZQH%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F8%2FBy%2BLr8va1tJOyf11DT4CkSktsSQ%2FQ%2BYjZ%2B0o2ORAiEA9J1Pn0PavQKoKdD2vdpKljjcIWREtI5j6LH2zYg3KBEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOfsFGSagfj4I5dCMircA1L9FEewW5lqQnzV7YfgDWt96dTXHdBDphY3vgLlI1PMzh5Q4TpEB%2BdB4JyeOttKLt7h%2FiqZb3W%2BY6K%2BrPwqWYCZI7QTIw25gzd1KCAaQnuFJIROpD1b5db1crubrgxvevj8GitVstHPWz3awqtm8rhIi3A8KBQ%2BgrXWH8IsyaxBZsfuFkLL8nOh57YatVk3Hp5ULcnnqMqWJCTF2q96XxsjdySC4waDjEdVqdUH3nlsLxS8qnXnu73g5Ix7YpsrecV8vqlTk6Fm2DrGs69%2FNA5VZxNS71Doey%2F2LahQWG%2F%2FlvVh9NWrwNTz3eD9gK0DV3AoCppUoZeJ7p0IcGAcUogdlcQqgkECKP3vWp7TwQ8QC1J9x3vkFVVB23FhPZ%2F4RCwf4YM5qwURQmaWSUU6TaPzXdw%2FnqbmTYh74NzPG2OliUH%2BPqLcF4hnbNU0rHTLvA3e20YhEgDJ39gZTcKoFdIDH89UHPE6oZDOlUG%2FL7D7TgH2vuGoC9%2FrWRP59aT9UsQZZYtlJ002w9QMaZQx7%2F9v7ZZAXZkAvc9dgdLBCmDVBE8OocTuYxZG5ZPH9YTVwYph3AntgqPLgi47sFGgnK88uyowfWgdo0MuwfoTYnZksXKBpjNh4UUIza0%2FMI%2FMztQGOqUB4FBBrkusUQeELm1fX5iMWM2Ewr7gY7kSikTKJ5yF3%2BOIcNtNX2g4bThrY%2B%2BLvwNQ%2FOpxdAoDUo6sB4Jya85iJSoBVl545yIXt2%2BAMELGnH9mBFhm7FCYnYn59%2BzWo9B5ksyTE5g10y96vnjh5CbwbFl57JYh7sJGi6NnvvQjGbRekTQrDngq%2BjuQTlkzaX8xc%2FD5J2I2FvTm17WYpyCfiMi9%2FSW3&X-Amz-Signature=2cb8ba52526d7dd656ecb450d97fa5ffe5fb68234ea71d3a54bb9946a02ccca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPYTZQH%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F8%2FBy%2BLr8va1tJOyf11DT4CkSktsSQ%2FQ%2BYjZ%2B0o2ORAiEA9J1Pn0PavQKoKdD2vdpKljjcIWREtI5j6LH2zYg3KBEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOfsFGSagfj4I5dCMircA1L9FEewW5lqQnzV7YfgDWt96dTXHdBDphY3vgLlI1PMzh5Q4TpEB%2BdB4JyeOttKLt7h%2FiqZb3W%2BY6K%2BrPwqWYCZI7QTIw25gzd1KCAaQnuFJIROpD1b5db1crubrgxvevj8GitVstHPWz3awqtm8rhIi3A8KBQ%2BgrXWH8IsyaxBZsfuFkLL8nOh57YatVk3Hp5ULcnnqMqWJCTF2q96XxsjdySC4waDjEdVqdUH3nlsLxS8qnXnu73g5Ix7YpsrecV8vqlTk6Fm2DrGs69%2FNA5VZxNS71Doey%2F2LahQWG%2F%2FlvVh9NWrwNTz3eD9gK0DV3AoCppUoZeJ7p0IcGAcUogdlcQqgkECKP3vWp7TwQ8QC1J9x3vkFVVB23FhPZ%2F4RCwf4YM5qwURQmaWSUU6TaPzXdw%2FnqbmTYh74NzPG2OliUH%2BPqLcF4hnbNU0rHTLvA3e20YhEgDJ39gZTcKoFdIDH89UHPE6oZDOlUG%2FL7D7TgH2vuGoC9%2FrWRP59aT9UsQZZYtlJ002w9QMaZQx7%2F9v7ZZAXZkAvc9dgdLBCmDVBE8OocTuYxZG5ZPH9YTVwYph3AntgqPLgi47sFGgnK88uyowfWgdo0MuwfoTYnZksXKBpjNh4UUIza0%2FMI%2FMztQGOqUB4FBBrkusUQeELm1fX5iMWM2Ewr7gY7kSikTKJ5yF3%2BOIcNtNX2g4bThrY%2B%2BLvwNQ%2FOpxdAoDUo6sB4Jya85iJSoBVl545yIXt2%2BAMELGnH9mBFhm7FCYnYn59%2BzWo9B5ksyTE5g10y96vnjh5CbwbFl57JYh7sJGi6NnvvQjGbRekTQrDngq%2BjuQTlkzaX8xc%2FD5J2I2FvTm17WYpyCfiMi9%2FSW3&X-Amz-Signature=a324d01a7f409e3bcd29c6e9a4b581e4cef9058651b42429aa9cfee37141376f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPYTZQH%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F8%2FBy%2BLr8va1tJOyf11DT4CkSktsSQ%2FQ%2BYjZ%2B0o2ORAiEA9J1Pn0PavQKoKdD2vdpKljjcIWREtI5j6LH2zYg3KBEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOfsFGSagfj4I5dCMircA1L9FEewW5lqQnzV7YfgDWt96dTXHdBDphY3vgLlI1PMzh5Q4TpEB%2BdB4JyeOttKLt7h%2FiqZb3W%2BY6K%2BrPwqWYCZI7QTIw25gzd1KCAaQnuFJIROpD1b5db1crubrgxvevj8GitVstHPWz3awqtm8rhIi3A8KBQ%2BgrXWH8IsyaxBZsfuFkLL8nOh57YatVk3Hp5ULcnnqMqWJCTF2q96XxsjdySC4waDjEdVqdUH3nlsLxS8qnXnu73g5Ix7YpsrecV8vqlTk6Fm2DrGs69%2FNA5VZxNS71Doey%2F2LahQWG%2F%2FlvVh9NWrwNTz3eD9gK0DV3AoCppUoZeJ7p0IcGAcUogdlcQqgkECKP3vWp7TwQ8QC1J9x3vkFVVB23FhPZ%2F4RCwf4YM5qwURQmaWSUU6TaPzXdw%2FnqbmTYh74NzPG2OliUH%2BPqLcF4hnbNU0rHTLvA3e20YhEgDJ39gZTcKoFdIDH89UHPE6oZDOlUG%2FL7D7TgH2vuGoC9%2FrWRP59aT9UsQZZYtlJ002w9QMaZQx7%2F9v7ZZAXZkAvc9dgdLBCmDVBE8OocTuYxZG5ZPH9YTVwYph3AntgqPLgi47sFGgnK88uyowfWgdo0MuwfoTYnZksXKBpjNh4UUIza0%2FMI%2FMztQGOqUB4FBBrkusUQeELm1fX5iMWM2Ewr7gY7kSikTKJ5yF3%2BOIcNtNX2g4bThrY%2B%2BLvwNQ%2FOpxdAoDUo6sB4Jya85iJSoBVl545yIXt2%2BAMELGnH9mBFhm7FCYnYn59%2BzWo9B5ksyTE5g10y96vnjh5CbwbFl57JYh7sJGi6NnvvQjGbRekTQrDngq%2BjuQTlkzaX8xc%2FD5J2I2FvTm17WYpyCfiMi9%2FSW3&X-Amz-Signature=6fd5fa1edf170f8ac64a5465bad1538f67b1128d28c8cbc6864dd5f698255906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPYTZQH%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F8%2FBy%2BLr8va1tJOyf11DT4CkSktsSQ%2FQ%2BYjZ%2B0o2ORAiEA9J1Pn0PavQKoKdD2vdpKljjcIWREtI5j6LH2zYg3KBEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOfsFGSagfj4I5dCMircA1L9FEewW5lqQnzV7YfgDWt96dTXHdBDphY3vgLlI1PMzh5Q4TpEB%2BdB4JyeOttKLt7h%2FiqZb3W%2BY6K%2BrPwqWYCZI7QTIw25gzd1KCAaQnuFJIROpD1b5db1crubrgxvevj8GitVstHPWz3awqtm8rhIi3A8KBQ%2BgrXWH8IsyaxBZsfuFkLL8nOh57YatVk3Hp5ULcnnqMqWJCTF2q96XxsjdySC4waDjEdVqdUH3nlsLxS8qnXnu73g5Ix7YpsrecV8vqlTk6Fm2DrGs69%2FNA5VZxNS71Doey%2F2LahQWG%2F%2FlvVh9NWrwNTz3eD9gK0DV3AoCppUoZeJ7p0IcGAcUogdlcQqgkECKP3vWp7TwQ8QC1J9x3vkFVVB23FhPZ%2F4RCwf4YM5qwURQmaWSUU6TaPzXdw%2FnqbmTYh74NzPG2OliUH%2BPqLcF4hnbNU0rHTLvA3e20YhEgDJ39gZTcKoFdIDH89UHPE6oZDOlUG%2FL7D7TgH2vuGoC9%2FrWRP59aT9UsQZZYtlJ002w9QMaZQx7%2F9v7ZZAXZkAvc9dgdLBCmDVBE8OocTuYxZG5ZPH9YTVwYph3AntgqPLgi47sFGgnK88uyowfWgdo0MuwfoTYnZksXKBpjNh4UUIza0%2FMI%2FMztQGOqUB4FBBrkusUQeELm1fX5iMWM2Ewr7gY7kSikTKJ5yF3%2BOIcNtNX2g4bThrY%2B%2BLvwNQ%2FOpxdAoDUo6sB4Jya85iJSoBVl545yIXt2%2BAMELGnH9mBFhm7FCYnYn59%2BzWo9B5ksyTE5g10y96vnjh5CbwbFl57JYh7sJGi6NnvvQjGbRekTQrDngq%2BjuQTlkzaX8xc%2FD5J2I2FvTm17WYpyCfiMi9%2FSW3&X-Amz-Signature=9a256dc4583c6e7f8e7c2a587d2b05a6e8df61a3de82eaafe834e61e086df081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPYTZQH%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F8%2FBy%2BLr8va1tJOyf11DT4CkSktsSQ%2FQ%2BYjZ%2B0o2ORAiEA9J1Pn0PavQKoKdD2vdpKljjcIWREtI5j6LH2zYg3KBEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOfsFGSagfj4I5dCMircA1L9FEewW5lqQnzV7YfgDWt96dTXHdBDphY3vgLlI1PMzh5Q4TpEB%2BdB4JyeOttKLt7h%2FiqZb3W%2BY6K%2BrPwqWYCZI7QTIw25gzd1KCAaQnuFJIROpD1b5db1crubrgxvevj8GitVstHPWz3awqtm8rhIi3A8KBQ%2BgrXWH8IsyaxBZsfuFkLL8nOh57YatVk3Hp5ULcnnqMqWJCTF2q96XxsjdySC4waDjEdVqdUH3nlsLxS8qnXnu73g5Ix7YpsrecV8vqlTk6Fm2DrGs69%2FNA5VZxNS71Doey%2F2LahQWG%2F%2FlvVh9NWrwNTz3eD9gK0DV3AoCppUoZeJ7p0IcGAcUogdlcQqgkECKP3vWp7TwQ8QC1J9x3vkFVVB23FhPZ%2F4RCwf4YM5qwURQmaWSUU6TaPzXdw%2FnqbmTYh74NzPG2OliUH%2BPqLcF4hnbNU0rHTLvA3e20YhEgDJ39gZTcKoFdIDH89UHPE6oZDOlUG%2FL7D7TgH2vuGoC9%2FrWRP59aT9UsQZZYtlJ002w9QMaZQx7%2F9v7ZZAXZkAvc9dgdLBCmDVBE8OocTuYxZG5ZPH9YTVwYph3AntgqPLgi47sFGgnK88uyowfWgdo0MuwfoTYnZksXKBpjNh4UUIza0%2FMI%2FMztQGOqUB4FBBrkusUQeELm1fX5iMWM2Ewr7gY7kSikTKJ5yF3%2BOIcNtNX2g4bThrY%2B%2BLvwNQ%2FOpxdAoDUo6sB4Jya85iJSoBVl545yIXt2%2BAMELGnH9mBFhm7FCYnYn59%2BzWo9B5ksyTE5g10y96vnjh5CbwbFl57JYh7sJGi6NnvvQjGbRekTQrDngq%2BjuQTlkzaX8xc%2FD5J2I2FvTm17WYpyCfiMi9%2FSW3&X-Amz-Signature=f39cf6d01228b1aab248e0900133ae8b2c44de25774acad4f290dc6d32386612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJFVYFT6%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvbCubEXDY%2B%2FGuNhp5rPVJcYjoNsUvT2bnc3bbXYSFgIga2oQyCWxisBHibmwoUMr5GhtnhmbHhGA85e8nOcvkPsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMP3J7Vk515EUYQkJCrcAy6lP77KXogN9RU4vl2ng41qiDhLkZ19bx%2BdKHbraOnJmWSzcyrX8OsT0ypUa6IbMUIQY4xQ0wBMlAhX0Hvq6bfPcBFW0%2BPVGCppfR91EunB5TaFzmpC10v%2FwKTZi5tq9SvopHSWES9Pm1yM81TgSyo%2FAZv1cOTKNT9rXU6WuGOgl%2Fkte4nXl4hByjwYoDkdtqAYcweDWMBkiO3lgylRN5qjnelZU%2FHWKIlwjTkqnDBix%2BN8M1L4FGqW5BiJ4i5xj1D7QQbXKdtMdKb%2B%2Fxpq%2BEE3ZgFqoKCIReKAooyKKDDSXZLNzCKM2KJkbYpgmyRGunwyUPdJ8%2F%2BblF02As2tdRp4qCq2FD1lhiJTEnMkIlW%2FyubOeXUiSbBEUbYTHJ2KPH6RpRUHYTOZ%2F19XMzfcq4e350HYDJmDIzcA4xXOXoyBUgOEe%2FfqsNVgl8%2FMBZE%2BqYrczEfzbV8OVX7a7uwaQjHNS%2F1tVQ1H86n8w4I%2BTX8KhafT%2B3okSZfl7x3%2FjFasCS46RTKlP203%2FaBJBxrLDHldt3G1%2F1X2aTHG19bPBJEbiI4Hv7LQ9HzV1LHqkYe6gt%2BaSVy4QHCtmVpIAb0FW11j3W1rT3TX1tg5IdxlOcIH8Ijm7DeGbymKhaPqMJbNztQGOqUBAo5UTNhpXvPcjwmiAyz2U8IJLIBJZO4F8smWpkREZ3OR7BKPfKKR9FFt1YDzgNbOFTGBOqATZumTdKg1fEtvCjQ07RaSLjx4WQ5eVEA6Yyhad2ChoXemIV5C8ysXypHIhK68DWnSIYCIjoaN8NFOoXLVvyacZc%2FLBmLdWZ%2BRWEI5yUBlqjbxY9XWjrAN8klYhNQCESSwA9ktV2r%2Bz%2ByWQpXtYPZj&X-Amz-Signature=54ca206f169a56d54c6af6992915cc1718d04c45b7c72dd144640501a0ea71dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBIKHUL5%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9IfRtR56JhJT2ESroGcNnK2j4sxZ9kdLxxEFiXTJn2AiEAwNQRUOI7hsLwuV6oka%2FsWWAlyhtNoxymYauwNhXRlgUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOlxzGjQG%2FGpwc8IsyrcA7PwaqTyqgZ02vKAzQLru6%2BNyJfi6WYqJs0OJQt9myEepDJ%2FzkEMVr9%2B7hGCzfnwpw3xcqHJzkJj9dhmfp5Dtj65keQo%2FmMS10QuG79uvdXBtHGw01QRoPGMvRMqRK97M8aAHLBCpDFKNSG2emgXD%2FTsO9XrJ2ndsq5sj%2FNdFXI507a9vQHjwHIQ%2F1BeCgKWedkrvdZQxNYeyL3KCS0iW8ptoYhKhQekrs3J%2FFI5AbetzepCzSmbEBYGvJ3KBvHoLeOE2AKLV6kbY5s5eO54cmmHuOCU352A6N%2BOxb2qQPWFkz5qGsIGEjKQQOY6WNY9tKWEnLQIj0u6IQ%2B3ftWny3mokGuQ7UtIVgejzscMEt7%2BuRNYnS2%2FhKcJQenjkfa5iWcD6rU27O75z8BOmwNfTshdj%2Fn2eFPwmbRWPP6KU7wx5h9eC9xLGoFKK%2BDlrck6jtAlPOxw5%2F3RtUcYt9Z1Msl4QGWkfLA53iiMWSgGKvowOruRh4fFC5DGpNcsBoSyut4SviNurpLVFiJ0s26Cs29XZm%2BcV6TjRWpDwc6rWaeBIH3Yzrmd82R8Gk4KZqdtxA1MkbVnjppjOIBGkkfzu2sEpm3jqy%2Fqo0Quss5st%2BC9Q%2F6CennF0fIj4NFKMP7NztQGOqUBSA6%2FoTJgnDqF%2FKC6orXEH0vqz2ibbrUEDVj5ZeGZkj2LFGWCs8R5kTrMCFMnpiR1eXqSdk9%2BJlTRGx%2FAdY9EGVOT6T8exPHQqqh45wToh%2FuFMf1l6h%2FgIxM4Xs0uI%2B5mkYsq1NJGCwCwYgAJQVIxNN%2Bj5uVoZt1ujvi48f3r%2FdngEyDCHRppFLu9gnKUl66s518TrUViP%2Bo%2Bo8klRBaYcuAEf4Ji&X-Amz-Signature=6c4dc47446424cf540f5d069bb0ff9a18469098adf31b071bcb4bd141687a1c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AHA6IU7%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWT5Y%2FkBtCR9QdPmSAuUCJsUBRa9Fzf35xS%2FNFnN7BFAIhAOG3xhAq3%2FrzqxhIceP7JnO9fzFLK8Z5CYFySh7b6z3IKv8DCHUQABoMNjM3NDIzMTgzODA1IgxmWZ9k%2BnwbVd%2FfQ1Yq3ANJkuBs1oKonOCvtvQQs6mupn8QyLF9MB2zrAflYX4kkExbpNj2rIlWFRMH6G%2F1vBf1mVSoIKf6ZPAri%2Fkb99XiiqvA2YmUCBoOgjvrYHZXDbJIvVXoqjs6dOgO6BlxMoSoa5OiZzfkuYuYUHOgTBRYqm%2BJOS65bpNbKjykoEWm1Id%2B0svtp4nfHuPa1xEeUh%2FAg1U6DJJoHRbKHIec8MkFQjYZadyG%2F9pBi1nt1IkB1f0lUoyPGeOugpmaJCLNqVpKli0eRgoS4pnMOAOKRmKnbGG2gkSrxdZytL%2BUlhrE9IUfAJbyYdkdk1ud98Xb4x7oY6nQvuzI%2B%2BDSgfmhwIg6oHg3Y20OtnMxXush8TI%2FzsUsF19KTPCogcWyDIFouaEdyXcBJWg5U%2BsENSGZ41TyaXi5atO%2BHmW3Qr2UndALjZOteHXiucRQOdw1xDXZg%2BsqkKAzzJ1MtYFEOGavleNZhp93Zv2lB3oxjGO4mMFzGl7XqbBUTGRf8f0nCRFzQTv085rCnQzlSmH5RcDOrQYoLGp39qMVHL0G8AFoitv%2F%2B6kGRlSAxrUTSDkLbdmbK251%2FCWZ%2FN%2FYTBFR4mtYfW5yBF%2FEZKmEoEy%2B%2BrVfUE0I7nZoD%2FtuDvS1y4GqezDny87UBjqkAVT%2Fx6tPZHRSYt7jTfWFQoI%2BVHNExqv8lmQNOWVbytKXxhA0xNdhUtlGy%2FstrksGpjtYp%2FudrOftVvwpv8kqMD6WOT0DRasOckfYP4NWfhBGB%2BruIz1pD%2FemqJUxclpTqjp5tbyEARmjk%2F0WbYtFNSgTKLKSMhhLUd2aNZhGC9d64Q3sL3%2BJlqrrl0tlgTue%2B39707FK0ySJsdtjbsNSekR0wK2R&X-Amz-Signature=42e3df84ca7f6fae557a60b947d1fcc3b9bd7d0273150b19258e9f8b3bb1f331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPYTZQH%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F8%2FBy%2BLr8va1tJOyf11DT4CkSktsSQ%2FQ%2BYjZ%2B0o2ORAiEA9J1Pn0PavQKoKdD2vdpKljjcIWREtI5j6LH2zYg3KBEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOfsFGSagfj4I5dCMircA1L9FEewW5lqQnzV7YfgDWt96dTXHdBDphY3vgLlI1PMzh5Q4TpEB%2BdB4JyeOttKLt7h%2FiqZb3W%2BY6K%2BrPwqWYCZI7QTIw25gzd1KCAaQnuFJIROpD1b5db1crubrgxvevj8GitVstHPWz3awqtm8rhIi3A8KBQ%2BgrXWH8IsyaxBZsfuFkLL8nOh57YatVk3Hp5ULcnnqMqWJCTF2q96XxsjdySC4waDjEdVqdUH3nlsLxS8qnXnu73g5Ix7YpsrecV8vqlTk6Fm2DrGs69%2FNA5VZxNS71Doey%2F2LahQWG%2F%2FlvVh9NWrwNTz3eD9gK0DV3AoCppUoZeJ7p0IcGAcUogdlcQqgkECKP3vWp7TwQ8QC1J9x3vkFVVB23FhPZ%2F4RCwf4YM5qwURQmaWSUU6TaPzXdw%2FnqbmTYh74NzPG2OliUH%2BPqLcF4hnbNU0rHTLvA3e20YhEgDJ39gZTcKoFdIDH89UHPE6oZDOlUG%2FL7D7TgH2vuGoC9%2FrWRP59aT9UsQZZYtlJ002w9QMaZQx7%2F9v7ZZAXZkAvc9dgdLBCmDVBE8OocTuYxZG5ZPH9YTVwYph3AntgqPLgi47sFGgnK88uyowfWgdo0MuwfoTYnZksXKBpjNh4UUIza0%2FMI%2FMztQGOqUB4FBBrkusUQeELm1fX5iMWM2Ewr7gY7kSikTKJ5yF3%2BOIcNtNX2g4bThrY%2B%2BLvwNQ%2FOpxdAoDUo6sB4Jya85iJSoBVl545yIXt2%2BAMELGnH9mBFhm7FCYnYn59%2BzWo9B5ksyTE5g10y96vnjh5CbwbFl57JYh7sJGi6NnvvQjGbRekTQrDngq%2BjuQTlkzaX8xc%2FD5J2I2FvTm17WYpyCfiMi9%2FSW3&X-Amz-Signature=2f1ba4315601ba63d80787722502c9629e8fe8c43b16e616f042a8e996f9eac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q543XIVE%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1fn9%2B%2FlV3HSICvld1bY66fwOiVq2Pq9u4bhncRaOn6AiBpN5Q6O6hvcKH8fDE1eVLswKw8XpaoHXrQ%2Bwk3gSREKSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMTQ8h19pqQ2ZnMU0nKtwDJrUEjXth9cEM59%2FPdvZsN0QbRGElNo4v7JeGvbHPGsx22xWCe4OnaHE%2F6IlS0DN79V56lbur%2BEUQF35cSPDKc4z%2BYNvqLTLJCjKrWg9WC7W3e%2FVeexfn%2FIYbVSg9EyXi9RpTFBP90ff%2F5S63gaei9tlH0iyEhlnH%2BrtbFY0ivVQgJgtomALw1dEQOH5UR7%2BrOmiMaikp6qiKhvaBaFdgeyIJzYU2O1ivHGnVacpuPYxSeLqtNu2mLmXnGfPDsIT1WgjV1%2B51ztV1kj49MOJTb1ROiY58EKakJ%2FvAHltJmtgue%2FDNnli3uapR%2FbpGvrMNlj4oahgwLMB87Clwg980F9TW5reVMQ4PlUGnbWVkAL6%2Bg4MRESveGl3CqLQ1o51I%2BYBBgB3ddXFyNThz64WHS%2B61mfMgHkSyagZsL0%2Bn7KLS31nfpzIAh72YuRook%2BQsVyYcjCnbDWjUbBhUFn1hlb39xIjGSbjVTSIsyYWyc8pDWdaKKXtaVYoUf3pvVeHA%2FgIMBsvb6F4wBAgbjA3LVBM8XtwkT6dLzpYcc2zgIY%2Bk15POsyWe%2BsNr3UAGZUrfYOwkpYlpNmgKP63et18pN60ouv59vGK9ItlPWwszN7ikCA5j8icEQ458LJkwts7O1AY6pgG0tUdoMqo6s%2Bw9y7ROqewq9LGpppX4H3Pf1EkRjOxZPuQHRR4ZBPgLkjJgbTarNVKzHxDND58ZySvER0txcUEqdqjN1Rj%2BKavvj%2FqJ008gAJJ0Ju1z7Lx5fwR1AU89fBjLZyNp1aQZGFe9s9KqekQJ4EUW4aE10i3mnhukFNKb7R4A%2BI0ZRnZ8OmvRlMIi7DyUzKW4Uvjakjr70k4yXVHXYtLsPHsP&X-Amz-Signature=098ed9e9c79e6b30d357e637415d1da25aa1dd19c7d23d60ed49b326eafcab72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPYTZQH%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F8%2FBy%2BLr8va1tJOyf11DT4CkSktsSQ%2FQ%2BYjZ%2B0o2ORAiEA9J1Pn0PavQKoKdD2vdpKljjcIWREtI5j6LH2zYg3KBEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOfsFGSagfj4I5dCMircA1L9FEewW5lqQnzV7YfgDWt96dTXHdBDphY3vgLlI1PMzh5Q4TpEB%2BdB4JyeOttKLt7h%2FiqZb3W%2BY6K%2BrPwqWYCZI7QTIw25gzd1KCAaQnuFJIROpD1b5db1crubrgxvevj8GitVstHPWz3awqtm8rhIi3A8KBQ%2BgrXWH8IsyaxBZsfuFkLL8nOh57YatVk3Hp5ULcnnqMqWJCTF2q96XxsjdySC4waDjEdVqdUH3nlsLxS8qnXnu73g5Ix7YpsrecV8vqlTk6Fm2DrGs69%2FNA5VZxNS71Doey%2F2LahQWG%2F%2FlvVh9NWrwNTz3eD9gK0DV3AoCppUoZeJ7p0IcGAcUogdlcQqgkECKP3vWp7TwQ8QC1J9x3vkFVVB23FhPZ%2F4RCwf4YM5qwURQmaWSUU6TaPzXdw%2FnqbmTYh74NzPG2OliUH%2BPqLcF4hnbNU0rHTLvA3e20YhEgDJ39gZTcKoFdIDH89UHPE6oZDOlUG%2FL7D7TgH2vuGoC9%2FrWRP59aT9UsQZZYtlJ002w9QMaZQx7%2F9v7ZZAXZkAvc9dgdLBCmDVBE8OocTuYxZG5ZPH9YTVwYph3AntgqPLgi47sFGgnK88uyowfWgdo0MuwfoTYnZksXKBpjNh4UUIza0%2FMI%2FMztQGOqUB4FBBrkusUQeELm1fX5iMWM2Ewr7gY7kSikTKJ5yF3%2BOIcNtNX2g4bThrY%2B%2BLvwNQ%2FOpxdAoDUo6sB4Jya85iJSoBVl545yIXt2%2BAMELGnH9mBFhm7FCYnYn59%2BzWo9B5ksyTE5g10y96vnjh5CbwbFl57JYh7sJGi6NnvvQjGbRekTQrDngq%2BjuQTlkzaX8xc%2FD5J2I2FvTm17WYpyCfiMi9%2FSW3&X-Amz-Signature=a5ef3464060fa62136f0b2788f3317c9a4b752b4011bfe098f390e90e5bd476c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD6B7Z42%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmu1GARLtr%2F3txTrJ6ESV%2Fa5GyvLRvcdALJcNtXnkmdAiEA%2FSJSU47YpY7QSeLu3ndmhPTeOF6OyUzxmU58%2FxNRy50q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDND8X7vNRbPctZEbeSrcAy3pgO7lwC20nT28PfxTx3BffwvBYSw%2F4uGhw4pTQAjB1gTr%2FiieZajm3J18yJclJ3RAJeRjXJYFLOtK1rFP6IBSaae8me9HZ45L159z2RjGXub2UKrNFnqYCmTt2xmT8OZu7u6HG6J0ojWd8Unja28eIUOQVCyoaHwDV5vRRe75JUFAKOMkQDlUEFkmIKnOPf434X%2FcCm6UHrTab0PWVEkyCPqonW2w2jBrFZAkHGOhOULFmNNOR%2FAfl5EvfZgS1HowcgoaawKxwytnnkqjYtX9m8ve01tvhR6vmq0hV0BayXlVf3448BmqHrs%2FYkVaDZHYwtLQHEtXwgiS%2BBWMxu00JCPy3ZKB%2Bmd5C0tybsKWvmDnVUAK4pWrJB8cqQjra0L2rKSm34i56GVmHdddGfx8Y51fmRuKE448CgEBQjJmP3Y3fb46ugyGTC1K75S1hv6Hca1Zj5HMWcBOGwuFGL27opLvY9V0uc26Qzau60V9ARdmIxJP91hL9qSANkzo%2BilWJHWVC4slAz5RU%2FZCs%2ByZczeIbM1YocluKVgmf4Nzwct0dqm4DkiRKkjuci6AjM2PSVl5kERNMJj3DJm%2F0G5IJCTP%2FgRT8cFVUmVulVI2BxMHLvdQfvFIDRgYMKrOztQGOqUB%2FFafbYpZV3O04LtvpJ8zwjgiMmg6%2BG1FDLq6hBppCUYBlPOim8%2Fdtsrk8%2BwQm%2BVqFigRL%2Bs5H9aczTFmn7ReCpMbQCArOgF1glbcCdGUbX6WRoVsfFj9b2VZBdZC9vhQ1cm5HsArnVZB5HbX6mnPsRJQpK2ysFJLsJT7KuLAGl4qSox25FrHJfQ9DtqsjB78nuDQVH9hNXdJDxtgZ%2FpPPbUqxekR&X-Amz-Signature=c4aef8c689a50a44f281d7e2e6011f6515df4e0a713a8602bc250ddb7bcccf00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPYTZQH%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F8%2FBy%2BLr8va1tJOyf11DT4CkSktsSQ%2FQ%2BYjZ%2B0o2ORAiEA9J1Pn0PavQKoKdD2vdpKljjcIWREtI5j6LH2zYg3KBEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOfsFGSagfj4I5dCMircA1L9FEewW5lqQnzV7YfgDWt96dTXHdBDphY3vgLlI1PMzh5Q4TpEB%2BdB4JyeOttKLt7h%2FiqZb3W%2BY6K%2BrPwqWYCZI7QTIw25gzd1KCAaQnuFJIROpD1b5db1crubrgxvevj8GitVstHPWz3awqtm8rhIi3A8KBQ%2BgrXWH8IsyaxBZsfuFkLL8nOh57YatVk3Hp5ULcnnqMqWJCTF2q96XxsjdySC4waDjEdVqdUH3nlsLxS8qnXnu73g5Ix7YpsrecV8vqlTk6Fm2DrGs69%2FNA5VZxNS71Doey%2F2LahQWG%2F%2FlvVh9NWrwNTz3eD9gK0DV3AoCppUoZeJ7p0IcGAcUogdlcQqgkECKP3vWp7TwQ8QC1J9x3vkFVVB23FhPZ%2F4RCwf4YM5qwURQmaWSUU6TaPzXdw%2FnqbmTYh74NzPG2OliUH%2BPqLcF4hnbNU0rHTLvA3e20YhEgDJ39gZTcKoFdIDH89UHPE6oZDOlUG%2FL7D7TgH2vuGoC9%2FrWRP59aT9UsQZZYtlJ002w9QMaZQx7%2F9v7ZZAXZkAvc9dgdLBCmDVBE8OocTuYxZG5ZPH9YTVwYph3AntgqPLgi47sFGgnK88uyowfWgdo0MuwfoTYnZksXKBpjNh4UUIza0%2FMI%2FMztQGOqUB4FBBrkusUQeELm1fX5iMWM2Ewr7gY7kSikTKJ5yF3%2BOIcNtNX2g4bThrY%2B%2BLvwNQ%2FOpxdAoDUo6sB4Jya85iJSoBVl545yIXt2%2BAMELGnH9mBFhm7FCYnYn59%2BzWo9B5ksyTE5g10y96vnjh5CbwbFl57JYh7sJGi6NnvvQjGbRekTQrDngq%2BjuQTlkzaX8xc%2FD5J2I2FvTm17WYpyCfiMi9%2FSW3&X-Amz-Signature=55702c55fb604c34321db959f3da67b5a5b3754f75ab03b16342628ca2c33c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNSHCGXV%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzPWMNGPpu0naJoi6eVRphKHL45WLiUl0NokXVZqKYFAiBXj65vp1OdhtzRtst4pJadkQj%2B8tYwJGDrYkDDK9o0pSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMn%2BlTwvE7mq2mE1BPKtwD0SsXxw%2BcH5mKZZMh33aaRTnAXhAtlzkTfmCKWu9iZNUihTmhHNUUm4dJMX%2FFY6vQrmqV9bD1VEgYawCgdfgtlYeFPrEkp09U63IK16tYgYLFsJFXQP0492BDvajC4nl5IseoOFDKhaUfQ93Lafn09CXx%2F124esjP2dipdCCONLbirnNGQQWbv6HpNQ6pD94Nui7f3PUkz6wpukUeed1u2Y%2Bk2juoIU93SA%2Fv2jyB5ZYKHMJwWGvBmafigvlv172EWH585t4PslSddXnmLizyNucZIsnGnYvdINjy42QGpdI3Q7XpXnszfDww8n2%2F9gpu6SGr4PZ4JQHdZqkC1iIdxMJszB59106%2FO8JsuJ%2FhRXZty3iZ98wy%2BgsC3J%2FlOxLK%2BKWujUZm05wzl3KcrtByqJHZ5PH0mZATTSJgMJFbMHWPdEESYWduzd3aWLNjAECtXjPVAkeIlMbCDg0Z4Q%2BNmGgDenB7L8m091iIEjVI1cpot4ejom%2FT0uRJyjvhc0w89II3AOlcNA4DRjcbvt0qwHiY7RL3Ih7v5%2Fp7t3MUo%2Fu54PNXLEPqGAtBwSORrWVC%2FRK739to%2BSGHK4Kj1nUeje%2Ft9ct6KC6%2FfB4WtjOzDKBWEattGtHdXgdYdikwts7O1AY6pgGXXbuipp8VSvkJaVmsBW0x8Imh47dXCODGZY%2BNLKtXNblq5lPy8FxjDV0%2BAcvrqu%2FMsxgbYn6w09gpuOnDe234nK7z4GdkNuapHow%2BEoJDZrxPhreABuktS1NR%2BFuemdpA9fDbomMJ7dY3Q83rN4AM2lAfNM7bFn%2F37t51w6eKUlulVgTDD%2FmEqqlN7PrjJ%2BZaEeA%2FsTqgHHNhELZxkNOya%2F6oRLBp&X-Amz-Signature=75750a9ac285adbe967476cb16516befe46821073b7d0f49562a3105d94ef58e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPYTZQH%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F8%2FBy%2BLr8va1tJOyf11DT4CkSktsSQ%2FQ%2BYjZ%2B0o2ORAiEA9J1Pn0PavQKoKdD2vdpKljjcIWREtI5j6LH2zYg3KBEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOfsFGSagfj4I5dCMircA1L9FEewW5lqQnzV7YfgDWt96dTXHdBDphY3vgLlI1PMzh5Q4TpEB%2BdB4JyeOttKLt7h%2FiqZb3W%2BY6K%2BrPwqWYCZI7QTIw25gzd1KCAaQnuFJIROpD1b5db1crubrgxvevj8GitVstHPWz3awqtm8rhIi3A8KBQ%2BgrXWH8IsyaxBZsfuFkLL8nOh57YatVk3Hp5ULcnnqMqWJCTF2q96XxsjdySC4waDjEdVqdUH3nlsLxS8qnXnu73g5Ix7YpsrecV8vqlTk6Fm2DrGs69%2FNA5VZxNS71Doey%2F2LahQWG%2F%2FlvVh9NWrwNTz3eD9gK0DV3AoCppUoZeJ7p0IcGAcUogdlcQqgkECKP3vWp7TwQ8QC1J9x3vkFVVB23FhPZ%2F4RCwf4YM5qwURQmaWSUU6TaPzXdw%2FnqbmTYh74NzPG2OliUH%2BPqLcF4hnbNU0rHTLvA3e20YhEgDJ39gZTcKoFdIDH89UHPE6oZDOlUG%2FL7D7TgH2vuGoC9%2FrWRP59aT9UsQZZYtlJ002w9QMaZQx7%2F9v7ZZAXZkAvc9dgdLBCmDVBE8OocTuYxZG5ZPH9YTVwYph3AntgqPLgi47sFGgnK88uyowfWgdo0MuwfoTYnZksXKBpjNh4UUIza0%2FMI%2FMztQGOqUB4FBBrkusUQeELm1fX5iMWM2Ewr7gY7kSikTKJ5yF3%2BOIcNtNX2g4bThrY%2B%2BLvwNQ%2FOpxdAoDUo6sB4Jya85iJSoBVl545yIXt2%2BAMELGnH9mBFhm7FCYnYn59%2BzWo9B5ksyTE5g10y96vnjh5CbwbFl57JYh7sJGi6NnvvQjGbRekTQrDngq%2BjuQTlkzaX8xc%2FD5J2I2FvTm17WYpyCfiMi9%2FSW3&X-Amz-Signature=ca742b243bf812845575ff50cb509427610d8dcc179eb2c42728f1b1d77e3d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52UOBZ2%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoxZ6ioFdrabm3818EXdk0FnFyHwZ2Y3QviD50EyINSwIgPZbVkAWpJD9%2B3pmtmNz30%2FN2R19M3KxzXYSlrS%2B%2FnnAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJgdTeAvGmiOVI0CPyrcA276Oi5cPTjL9fTXW44538JdrhiIK%2Fd9ISjPA%2BD7hxobrJR%2FqjXh0fSfa5lojKdp00AMSM1CtNga29U6r8gmHN%2B3rA3tWeftekygo%2Fnwg6cG42IGpeLhA%2BPKAzasqhlLa%2FY2Gn8cm80BcU7XAwcyv7RQsKxqfTswdXKuGdy4xy0Masjgv%2BamjXBHg8bXoEfT%2FdssYAaQ6wMLx3i1TOCQngpIWBiOOoHick9sHiIUmqo2zL85pqut8JHbrF6af7dJlRQY1DfWs2YJqmO4CKx%2BwpYw7%2Bdz4BwixIkznvDjmCyLYMar75qX4j7lSC%2FWIACH0QtCz7QQBRmsYWF2AkvDPaCqUVJXMPWcvBFsgUyS2lIe7U%2B%2Bpve24poqxGSVLVqnU%2BC9GQsmm2%2BD9i8Lt9Fad0TCUE78hCtqF5EuaMCLv%2BEaTNm0pddlS1oDTxKwTnngoZvZ3FTdjGQR9jSb%2B%2Fj4E8Mlat%2BeavBoQqjxqUc%2F8a8D9iRAp07wTfhUBgA1OM%2BUAvvDbjllCHo%2BT0nlzltbCHCBdYhy2r2rgAl%2FVxKK2EUk%2FbdTwtUo3KgBylRRZ37VIBvBz2EoWTF1DAe3dAzsiVetc5PoAAa4f9CNGRK72Rh6OsVmTMeF%2B2%2FE6AXSMJjOztQGOqUBO2erPKHdtOgJhAMVgFsvWJF2NUA8y86IDylGD0zE09aQzRu00ftPdZWsExitn4jsJQ3vAJvmP7Nd3w8AQ8lAK1GjI0PXGNO%2FeD%2BpoM%2BOe6NRZhCneLgfUyJh12miQULLKC5dvi4eLYCq%2BqXntDbGMZCoPMde35KFrmf7YNAkUZkL6mvK3OUUaD7NXvNkOG0UjLOnZxahzE8AgHNOiaWPJ9NIMmLx&X-Amz-Signature=a4388723ef3108f435e6bbbd82cecde9d7596c687765c0440f9459f613cd5c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPYTZQH%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F8%2FBy%2BLr8va1tJOyf11DT4CkSktsSQ%2FQ%2BYjZ%2B0o2ORAiEA9J1Pn0PavQKoKdD2vdpKljjcIWREtI5j6LH2zYg3KBEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOfsFGSagfj4I5dCMircA1L9FEewW5lqQnzV7YfgDWt96dTXHdBDphY3vgLlI1PMzh5Q4TpEB%2BdB4JyeOttKLt7h%2FiqZb3W%2BY6K%2BrPwqWYCZI7QTIw25gzd1KCAaQnuFJIROpD1b5db1crubrgxvevj8GitVstHPWz3awqtm8rhIi3A8KBQ%2BgrXWH8IsyaxBZsfuFkLL8nOh57YatVk3Hp5ULcnnqMqWJCTF2q96XxsjdySC4waDjEdVqdUH3nlsLxS8qnXnu73g5Ix7YpsrecV8vqlTk6Fm2DrGs69%2FNA5VZxNS71Doey%2F2LahQWG%2F%2FlvVh9NWrwNTz3eD9gK0DV3AoCppUoZeJ7p0IcGAcUogdlcQqgkECKP3vWp7TwQ8QC1J9x3vkFVVB23FhPZ%2F4RCwf4YM5qwURQmaWSUU6TaPzXdw%2FnqbmTYh74NzPG2OliUH%2BPqLcF4hnbNU0rHTLvA3e20YhEgDJ39gZTcKoFdIDH89UHPE6oZDOlUG%2FL7D7TgH2vuGoC9%2FrWRP59aT9UsQZZYtlJ002w9QMaZQx7%2F9v7ZZAXZkAvc9dgdLBCmDVBE8OocTuYxZG5ZPH9YTVwYph3AntgqPLgi47sFGgnK88uyowfWgdo0MuwfoTYnZksXKBpjNh4UUIza0%2FMI%2FMztQGOqUB4FBBrkusUQeELm1fX5iMWM2Ewr7gY7kSikTKJ5yF3%2BOIcNtNX2g4bThrY%2B%2BLvwNQ%2FOpxdAoDUo6sB4Jya85iJSoBVl545yIXt2%2BAMELGnH9mBFhm7FCYnYn59%2BzWo9B5ksyTE5g10y96vnjh5CbwbFl57JYh7sJGi6NnvvQjGbRekTQrDngq%2BjuQTlkzaX8xc%2FD5J2I2FvTm17WYpyCfiMi9%2FSW3&X-Amz-Signature=36b65aa23fa72d4bceacdd523de4a9b5068dad53073c1983f30f3129929b50c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5WMUF3G%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGchwoi0uxaYa1e7ZPPfMRXoHxJCh0A5%2FyWW%2BBi4GQD9AiB2AlIKQlJJMn4%2BaxsK9MthrEUOR3Cli12VwKmBlp0dayr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMPZ3e28VxagMFnmiDKtwDVXfh9SkF7QMJ9pn%2B9Zpp7gpTAgyEpz8cINqFNT0KYxYS%2BXpIiKX0Z3xm9YoQWr6E6y%2BZzMzd3hjhs3kD%2BFB7%2BZOzGXsuKxH2%2BhnHUJnrY%2BmCyrRSL0OHjE5FAstQJFmmJmbua3osq4ZygCp51%2ByaiRyO5aqOJSWC2vz%2FYGRnN2H8M%2Bggt6Va1Fjppz%2F4olwRTFisKWL6OKgGgnCWj92UZzdbdzOhMs4aAr7X8uX1NVWzgNEMqlclprlTnzY8QkLTr8qtJvKDkqay5ktr2bK0p1FhtukG9kHhj2RYCQwvrH2ZJhpXz4M5etD3bELEcgLc7wtntMWXn3pQsutSxp0gDsaelD7X63UoYGHs5lyefvSzAphzwEXWDXs%2F3iFCtToOPRkC6WBCwQV1QO4CNED45%2BGJ69r785J2ZXf6LE01ptEJcF%2FYyfB%2BoZfg14Tc0IQQa0L7pJZS5sPspMUBzeo%2FmDaYflLFOt09xLm4sxi0FKiF8amQ2qvZSmF6WJM5ZVsiM3yJ3MUiRVJLyEgc9qSkKySXAAz4Wmb32zUJUpBLbVzfr%2BfDVSov2lOvFxPh4URPmeVeptxGvRmU0G7Yn3iBR1hCpMktU61lFkubl3lyIdaJ%2BvGIYJMMO3hZZD0wvszO1AY6pgH9dH7yqffWeiSo1aNT%2BYv3g5oXbEMzkaaylp8N0upBDGkAlsNCoyH5ZOvFcGqP9WxE0VJf2XTfZLxhC%2FyiTFe5Swq6NnO49P%2B71MPbqPG7NQ%2BvE%2Fvi7EJUB6tRJzcUPFt%2BC663yjBcTIVx%2BtD9LwyM7J7eG67nNT8rCn7Cy6eazy5iPXsHEoGyGhx6H0I29mZVSbLNoObD9XhQEcA6%2BJukak%2BaAwz5&X-Amz-Signature=0daee9e5f31135273c9f8f0f0f4985b4039a0dd95e26bc8567b03e26c7edbf9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6PJNIQ4%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7o75mBns%2BJP0YPYEDDDuU2l00EXFc2GMcjz4kCV%2BfZAiEAkkjcq3a9h11AD9wYvVKvQncl915%2F%2BbECUezOYRCNiXoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHjE0%2FUEc0xwaybs%2FSrcA%2FCJNDajXYlAYpD5chIAzj9jw%2FWZra9fc84%2BjODFi4IFMPcIRKjS2iF%2F8bC1rvj1sktfx40UMCtyQ4GAuk6flfTCUF9l8zLmlXoBg8AsdbcFGq92ftHAxiUTAky3dFWhAh14dlfgyKrLiz27jIVj%2BTvKRnwZkhp5wdgU0SsITON%2BkeLmkmVDl2ignqDHr3vqehRsvVo5mCD0RhE6QT2UXRFzUI8jM5V9c%2BQOIq0pgeiTNA5Ehfl%2FJR1Xdtez1ORLJ2AhWZY74OHP5rmqH3IQyIhkljZlT%2FB9Lhq4vk3yru6ofBfoW2tJpUHDUus1IKusQR8sTl92j92BdAxbRdmjbMNamPiMVIlWwsP5XD1yl1hF2vMlfrmPYmWlzeXMJgavPL3JO4DEvMWpfA9FMNyOuMRHQcAEYu9Ozy0yQMPvTnKOH0Bg%2FDRLqQhO90J3BjVwUqRQmazKFb9SrpAbucuBHpuBy0OBVy2N24bp0B%2BuunJYowCcnueV9iX%2BVxjmAeY9xk9q1Ma4HMSQJjEsVwdUGoy6AylJn6qGTmK1gff1hGFL%2FOn6CwdaJCGbUwsAyUvszihZv%2FvGbPG9RMxS%2BABxlnXpow0yaGYrTU4G%2BKtk0qiPdLHRCUCF2y25gzddMIfNztQGOqUB1EApIPnJ30VzCdoMlSrPd8ASwOzLS2rwbOptPDikr%2Fm30u0%2FNSNJAm99olkBpDAPaX8qtIVjUeea494MB4uCmkJZ1gsJMQ5i9fgL8uIJY%2FooGzNya5X4127EIvwY2rsZflbrYtIEhFvegF9xRNXNhRbx1FpwITalrB9nPXVja7H3nrlXXXMedu9nVLpWv21Dx2%2B4BcNkC70T3FGg5CcVbJk3ZLHi&X-Amz-Signature=f2bb7bb76ed253a80498c0cbf715c18c6e57e10edd893b85e972dfce04f0859c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R235HUAW%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuIpNtyBBDzuSMjQIFnOz7CJHTSrcRh4r0J6ESEFQi%2BAiEAnibzGX5sgmCmoeiCnj8meDhIF65yJzWdLg4tA26rdAAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJWBKih5L9blt4o2bCrcA%2FwUa3%2FuS%2B6DrQB9QzLYHCdKRZ4ILrUEd5%2BUQ113sMOo1AmsWMW9c7Q4w%2BBw2R8uVa%2BvoG9NxOYF7vqcv5f2FpNtsZPkUS9wgFFZvVF1eZzZsh%2F1IABL4Iba7mOFGsj2sblrCacBEU6mAdqNluTLV17oH9GZdeMGi2tIkt3Ojh%2FvxgBrLH1Tmi3WxFoxnvKOxsYG00ezUxV1J3tBpA0AI%2F%2FS%2B1OuXRxOuW%2FfVL7KqHqPp9ACvcnh2X8Je5LrXx2qjwSWmndQBnqnpaz85LE8XY%2FS2Gc%2F1PNQR8rwSdHUxuADfffN0Uy%2FODb0Q3ygFDgWD7k%2Fi9soBE6P5zdwHFB9nZMqdDSpGrhyhFsfdhPpnWZi8xSs5sKHkyciYLn6AlAb0oAYCM1LAjYVovs7WqoX%2B8M02%2BMur3xqeR293vfLaklZgcFvglFeJkzimshxcje%2BZdte3%2F%2F38RJTogh50sz6%2FsMAjHuuF%2BD0Ori%2BRVKKeUgLOE0EuE%2FUaan%2BBDZrppFPLFbkplHGMKsSPVp6ldfCS9OsMaYVlGdKt6mjsD8EmHmb82fBkvwOb3iWlydzhtkevqYNQfIVyFL37D6PxBNXEOZOODE9FB2mPkE5O7RHKSxAiRmW6m%2FiFaOEGV0fMOvLztQGOqUBMxzwvXjpe8WQzBXUBQwbx562sP1gOveoGDHDD%2BQYLVpkGCvPZRhnjF5y1Q8e0QZddoi8hCF5oemmo9cczgtBgM4h0c9DNG9NV6PVBNUkPRLnkRLythVZoUcIDK9POVXPtwK4LGejBmVwRDrrXOqGgMRfPEQ7psbP4yWhKI0IcZ4RP77sCSkzrXmT%2FoVpjCYHVMjft7%2FEwvNNQhRyEOnpzLmp3e3U&X-Amz-Signature=b790b9ec3ee9b40173b794027ce759f09c2394b8774110d89b35f429db9a321e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPYTZQH%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F8%2FBy%2BLr8va1tJOyf11DT4CkSktsSQ%2FQ%2BYjZ%2B0o2ORAiEA9J1Pn0PavQKoKdD2vdpKljjcIWREtI5j6LH2zYg3KBEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOfsFGSagfj4I5dCMircA1L9FEewW5lqQnzV7YfgDWt96dTXHdBDphY3vgLlI1PMzh5Q4TpEB%2BdB4JyeOttKLt7h%2FiqZb3W%2BY6K%2BrPwqWYCZI7QTIw25gzd1KCAaQnuFJIROpD1b5db1crubrgxvevj8GitVstHPWz3awqtm8rhIi3A8KBQ%2BgrXWH8IsyaxBZsfuFkLL8nOh57YatVk3Hp5ULcnnqMqWJCTF2q96XxsjdySC4waDjEdVqdUH3nlsLxS8qnXnu73g5Ix7YpsrecV8vqlTk6Fm2DrGs69%2FNA5VZxNS71Doey%2F2LahQWG%2F%2FlvVh9NWrwNTz3eD9gK0DV3AoCppUoZeJ7p0IcGAcUogdlcQqgkECKP3vWp7TwQ8QC1J9x3vkFVVB23FhPZ%2F4RCwf4YM5qwURQmaWSUU6TaPzXdw%2FnqbmTYh74NzPG2OliUH%2BPqLcF4hnbNU0rHTLvA3e20YhEgDJ39gZTcKoFdIDH89UHPE6oZDOlUG%2FL7D7TgH2vuGoC9%2FrWRP59aT9UsQZZYtlJ002w9QMaZQx7%2F9v7ZZAXZkAvc9dgdLBCmDVBE8OocTuYxZG5ZPH9YTVwYph3AntgqPLgi47sFGgnK88uyowfWgdo0MuwfoTYnZksXKBpjNh4UUIza0%2FMI%2FMztQGOqUB4FBBrkusUQeELm1fX5iMWM2Ewr7gY7kSikTKJ5yF3%2BOIcNtNX2g4bThrY%2B%2BLvwNQ%2FOpxdAoDUo6sB4Jya85iJSoBVl545yIXt2%2BAMELGnH9mBFhm7FCYnYn59%2BzWo9B5ksyTE5g10y96vnjh5CbwbFl57JYh7sJGi6NnvvQjGbRekTQrDngq%2BjuQTlkzaX8xc%2FD5J2I2FvTm17WYpyCfiMi9%2FSW3&X-Amz-Signature=16c58244e2670b1137ae220447e2ce25c54055ca8beea7e78a612e7fd3f636fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPYTZQH%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2F8%2FBy%2BLr8va1tJOyf11DT4CkSktsSQ%2FQ%2BYjZ%2B0o2ORAiEA9J1Pn0PavQKoKdD2vdpKljjcIWREtI5j6LH2zYg3KBEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOfsFGSagfj4I5dCMircA1L9FEewW5lqQnzV7YfgDWt96dTXHdBDphY3vgLlI1PMzh5Q4TpEB%2BdB4JyeOttKLt7h%2FiqZb3W%2BY6K%2BrPwqWYCZI7QTIw25gzd1KCAaQnuFJIROpD1b5db1crubrgxvevj8GitVstHPWz3awqtm8rhIi3A8KBQ%2BgrXWH8IsyaxBZsfuFkLL8nOh57YatVk3Hp5ULcnnqMqWJCTF2q96XxsjdySC4waDjEdVqdUH3nlsLxS8qnXnu73g5Ix7YpsrecV8vqlTk6Fm2DrGs69%2FNA5VZxNS71Doey%2F2LahQWG%2F%2FlvVh9NWrwNTz3eD9gK0DV3AoCppUoZeJ7p0IcGAcUogdlcQqgkECKP3vWp7TwQ8QC1J9x3vkFVVB23FhPZ%2F4RCwf4YM5qwURQmaWSUU6TaPzXdw%2FnqbmTYh74NzPG2OliUH%2BPqLcF4hnbNU0rHTLvA3e20YhEgDJ39gZTcKoFdIDH89UHPE6oZDOlUG%2FL7D7TgH2vuGoC9%2FrWRP59aT9UsQZZYtlJ002w9QMaZQx7%2F9v7ZZAXZkAvc9dgdLBCmDVBE8OocTuYxZG5ZPH9YTVwYph3AntgqPLgi47sFGgnK88uyowfWgdo0MuwfoTYnZksXKBpjNh4UUIza0%2FMI%2FMztQGOqUB4FBBrkusUQeELm1fX5iMWM2Ewr7gY7kSikTKJ5yF3%2BOIcNtNX2g4bThrY%2B%2BLvwNQ%2FOpxdAoDUo6sB4Jya85iJSoBVl545yIXt2%2BAMELGnH9mBFhm7FCYnYn59%2BzWo9B5ksyTE5g10y96vnjh5CbwbFl57JYh7sJGi6NnvvQjGbRekTQrDngq%2BjuQTlkzaX8xc%2FD5J2I2FvTm17WYpyCfiMi9%2FSW3&X-Amz-Signature=3204f544def499480818133878856d8f3eedf8e5301d619bf48fa73bc7c49696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPPPRMNF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5gFFuXQTYL%2FzDH1g6l8grmpMOLJH%2BvWRTUpUP2nNBYAiAeAvoRouPT8Vhpa%2FOGJOcB0joGUpTznasyf6aL13Y30yr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM7FC%2FOiQCghZ6EFDMKtwD%2BSgv%2B9Ibc7BElR8%2Fqxfc6CjE%2FMECO9vPrMeQDpIrZ23zOjLNZlDkTpNZ49GGTT2EZ9fBs9i3gEwC0d7w%2F0Vpqe1PxAUGvzPnsSo4MsMBweVxilFNG4ZAG6viZZMtjJobWuLcCfUyo1PyYIdFrWn6oN8A%2F4f%2F%2Bx7biAfaxHfObhX1GuZW29PHSgFJIa5uPek18XQq9RL51DmWKXn%2F%2BZkZPhR%2BN0SVo9fcYq8xWVL1SFOLLgdyaRrcasc17nZjWrKelzRKhkUTDl30tTijQt7Fnv6IHiZ5DwUD%2F%2ByrL4iBLsm8%2BHq5mpQMReJG3zUKpRAlfscQ6H1giRtT7j%2BZX%2F3HQGBIilOiQzw8s%2FWwgCvd%2Fg8MR8WQ1wzd8b2FvvSf6%2BFzXNlJtVduWiFbTHLKq4PT3pM2xB%2BAFmKtnjH09Bwmkee64pNGZuiBPvch3TYTx3fOm%2FiKE%2Fk%2F3KrpOm%2F0bBpf2GStQWpg6mHNx4T7aa5m7d0xRC7KqEbzfaqY2x%2FhwBXAWNBQXKq8pHPLd2qnle3thP8QaRF0k1IJvQ30oRNTuzqSG0%2Bo%2FiqPAxCUn24q3oqxof%2BDLYnmUkGI4tZg5fV8S%2ByeKteffetdMUQcTZiJT63FWsqqpt7uTTIQ0Y4w6M3O1AY6pgFZkh%2BfYdEqSO1ujyrg19VlhBkfxVLxLmoUB1WhIG2BuVjoS0MBlez3eSAVYCN8aP7OPKeTz7O33lrrpcfStfEarkRRzpJcRi6t7H8HY%2BG953qfTJTuz%2BjldLeqhCKFKfTArUUWxh2X4YAwbwiNWvbP3IukrE2603xtTiyNhWyy2pPHWHW%2BlPDywqdzePD9Ut5K3R1Ad7DHJ4JxnwctKnc%2Fv%2FGmM9iM&X-Amz-Signature=51d186432d491034ecd7f2bb59596ae98f4ee8587dcf7deabb7f6efe7cebc4d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPPPRMNF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5gFFuXQTYL%2FzDH1g6l8grmpMOLJH%2BvWRTUpUP2nNBYAiAeAvoRouPT8Vhpa%2FOGJOcB0joGUpTznasyf6aL13Y30yr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM7FC%2FOiQCghZ6EFDMKtwD%2BSgv%2B9Ibc7BElR8%2Fqxfc6CjE%2FMECO9vPrMeQDpIrZ23zOjLNZlDkTpNZ49GGTT2EZ9fBs9i3gEwC0d7w%2F0Vpqe1PxAUGvzPnsSo4MsMBweVxilFNG4ZAG6viZZMtjJobWuLcCfUyo1PyYIdFrWn6oN8A%2F4f%2F%2Bx7biAfaxHfObhX1GuZW29PHSgFJIa5uPek18XQq9RL51DmWKXn%2F%2BZkZPhR%2BN0SVo9fcYq8xWVL1SFOLLgdyaRrcasc17nZjWrKelzRKhkUTDl30tTijQt7Fnv6IHiZ5DwUD%2F%2ByrL4iBLsm8%2BHq5mpQMReJG3zUKpRAlfscQ6H1giRtT7j%2BZX%2F3HQGBIilOiQzw8s%2FWwgCvd%2Fg8MR8WQ1wzd8b2FvvSf6%2BFzXNlJtVduWiFbTHLKq4PT3pM2xB%2BAFmKtnjH09Bwmkee64pNGZuiBPvch3TYTx3fOm%2FiKE%2Fk%2F3KrpOm%2F0bBpf2GStQWpg6mHNx4T7aa5m7d0xRC7KqEbzfaqY2x%2FhwBXAWNBQXKq8pHPLd2qnle3thP8QaRF0k1IJvQ30oRNTuzqSG0%2Bo%2FiqPAxCUn24q3oqxof%2BDLYnmUkGI4tZg5fV8S%2ByeKteffetdMUQcTZiJT63FWsqqpt7uTTIQ0Y4w6M3O1AY6pgFZkh%2BfYdEqSO1ujyrg19VlhBkfxVLxLmoUB1WhIG2BuVjoS0MBlez3eSAVYCN8aP7OPKeTz7O33lrrpcfStfEarkRRzpJcRi6t7H8HY%2BG953qfTJTuz%2BjldLeqhCKFKfTArUUWxh2X4YAwbwiNWvbP3IukrE2603xtTiyNhWyy2pPHWHW%2BlPDywqdzePD9Ut5K3R1Ad7DHJ4JxnwctKnc%2Fv%2FGmM9iM&X-Amz-Signature=224c4e806e6036f31b909fe48c1df3e99ae438a0eb80ce43dde2abc4f9b7ee92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPPPRMNF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5gFFuXQTYL%2FzDH1g6l8grmpMOLJH%2BvWRTUpUP2nNBYAiAeAvoRouPT8Vhpa%2FOGJOcB0joGUpTznasyf6aL13Y30yr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM7FC%2FOiQCghZ6EFDMKtwD%2BSgv%2B9Ibc7BElR8%2Fqxfc6CjE%2FMECO9vPrMeQDpIrZ23zOjLNZlDkTpNZ49GGTT2EZ9fBs9i3gEwC0d7w%2F0Vpqe1PxAUGvzPnsSo4MsMBweVxilFNG4ZAG6viZZMtjJobWuLcCfUyo1PyYIdFrWn6oN8A%2F4f%2F%2Bx7biAfaxHfObhX1GuZW29PHSgFJIa5uPek18XQq9RL51DmWKXn%2F%2BZkZPhR%2BN0SVo9fcYq8xWVL1SFOLLgdyaRrcasc17nZjWrKelzRKhkUTDl30tTijQt7Fnv6IHiZ5DwUD%2F%2ByrL4iBLsm8%2BHq5mpQMReJG3zUKpRAlfscQ6H1giRtT7j%2BZX%2F3HQGBIilOiQzw8s%2FWwgCvd%2Fg8MR8WQ1wzd8b2FvvSf6%2BFzXNlJtVduWiFbTHLKq4PT3pM2xB%2BAFmKtnjH09Bwmkee64pNGZuiBPvch3TYTx3fOm%2FiKE%2Fk%2F3KrpOm%2F0bBpf2GStQWpg6mHNx4T7aa5m7d0xRC7KqEbzfaqY2x%2FhwBXAWNBQXKq8pHPLd2qnle3thP8QaRF0k1IJvQ30oRNTuzqSG0%2Bo%2FiqPAxCUn24q3oqxof%2BDLYnmUkGI4tZg5fV8S%2ByeKteffetdMUQcTZiJT63FWsqqpt7uTTIQ0Y4w6M3O1AY6pgFZkh%2BfYdEqSO1ujyrg19VlhBkfxVLxLmoUB1WhIG2BuVjoS0MBlez3eSAVYCN8aP7OPKeTz7O33lrrpcfStfEarkRRzpJcRi6t7H8HY%2BG953qfTJTuz%2BjldLeqhCKFKfTArUUWxh2X4YAwbwiNWvbP3IukrE2603xtTiyNhWyy2pPHWHW%2BlPDywqdzePD9Ut5K3R1Ad7DHJ4JxnwctKnc%2Fv%2FGmM9iM&X-Amz-Signature=29efc8c4675129e87f2c8347967546af014a04359aa7335ea151982599be7337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPPPRMNF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5gFFuXQTYL%2FzDH1g6l8grmpMOLJH%2BvWRTUpUP2nNBYAiAeAvoRouPT8Vhpa%2FOGJOcB0joGUpTznasyf6aL13Y30yr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM7FC%2FOiQCghZ6EFDMKtwD%2BSgv%2B9Ibc7BElR8%2Fqxfc6CjE%2FMECO9vPrMeQDpIrZ23zOjLNZlDkTpNZ49GGTT2EZ9fBs9i3gEwC0d7w%2F0Vpqe1PxAUGvzPnsSo4MsMBweVxilFNG4ZAG6viZZMtjJobWuLcCfUyo1PyYIdFrWn6oN8A%2F4f%2F%2Bx7biAfaxHfObhX1GuZW29PHSgFJIa5uPek18XQq9RL51DmWKXn%2F%2BZkZPhR%2BN0SVo9fcYq8xWVL1SFOLLgdyaRrcasc17nZjWrKelzRKhkUTDl30tTijQt7Fnv6IHiZ5DwUD%2F%2ByrL4iBLsm8%2BHq5mpQMReJG3zUKpRAlfscQ6H1giRtT7j%2BZX%2F3HQGBIilOiQzw8s%2FWwgCvd%2Fg8MR8WQ1wzd8b2FvvSf6%2BFzXNlJtVduWiFbTHLKq4PT3pM2xB%2BAFmKtnjH09Bwmkee64pNGZuiBPvch3TYTx3fOm%2FiKE%2Fk%2F3KrpOm%2F0bBpf2GStQWpg6mHNx4T7aa5m7d0xRC7KqEbzfaqY2x%2FhwBXAWNBQXKq8pHPLd2qnle3thP8QaRF0k1IJvQ30oRNTuzqSG0%2Bo%2FiqPAxCUn24q3oqxof%2BDLYnmUkGI4tZg5fV8S%2ByeKteffetdMUQcTZiJT63FWsqqpt7uTTIQ0Y4w6M3O1AY6pgFZkh%2BfYdEqSO1ujyrg19VlhBkfxVLxLmoUB1WhIG2BuVjoS0MBlez3eSAVYCN8aP7OPKeTz7O33lrrpcfStfEarkRRzpJcRi6t7H8HY%2BG953qfTJTuz%2BjldLeqhCKFKfTArUUWxh2X4YAwbwiNWvbP3IukrE2603xtTiyNhWyy2pPHWHW%2BlPDywqdzePD9Ut5K3R1Ad7DHJ4JxnwctKnc%2Fv%2FGmM9iM&X-Amz-Signature=fdb5f043d0b7ad458c0e03f003066e0a506a0a5b8f44f2064d9cf564993ef7ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWRTSJR%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj7jVpje2C3WMJPewL9bpqShVU%2BIxMgbJXamsdng7NuwIgfRdrQIlwmnAgLl23UbkLkiiMRLj9h%2F0TcWZuLJcQ77sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL3aUS1dNUJOPTjG6ircA9r15pnj7KY2Kyfzd%2BE8g41OQkfy62lMzvKymF1g6s3Xv2ojbvKkuzU5xRR65rpBgavD9eYay%2FK1V6xtAVmTCnEldFvwHMp4xH3l5ANuUqQAdC6im0Lkkriwrv%2FNM1SyQYyxwRo7BgP9bBKtLDrasRuxmkEN65mt4FySKW0g8DQTuJ29LepYAw47uiC8Ay%2BNTUKJPY%2FwctSq7LARCAacEyRXI%2BLB8mu2fCsX1A6BRbTvCEvjW0C0L46Sev8Cavbkrb8PvQGibAGhYAfvwiQW0Q8Hp0jKalYCOl3Hnl1%2By%2BEmABbvRWtFKctNk2xBpCYxpoBcZB1J%2FxnGNR52pCZOdt0dRkxouuR4I1nDvU2KeB165%2BfiaV78YBuO9iph2WXb7IolgjD%2FqKchICeTJnjzOasxO%2BFU%2B4PiuuFXXStJHlrKQXtzbCxucqdLMCTHzC1Yp%2BHkDH7PshXRhRnI5hfMepDCsdhBXsUxcha6gR%2BK%2BSF7EszXAqKdGrnvzbMY9Mt6WDOekNorKejYdpGjYniuXfNcIzQFaxbwE160BQywKqciK4QFF%2BIGrmElbQ6mQasVjlcxUDVMrZth5JrI49B%2FPNHA4oNJ46W%2F%2BF62iOyoSMFM1an1BEgLMx3%2FMUo%2FMLvMztQGOqUB58ZC3VBnhbOO2MRSbI3iybm00MwiO9zGqMNUO2o%2FRz2wM08mbEVRP01vA%2F7hEaGRqa4r5Eaj0HvM27nuuj%2BVGGqBvIP8XCewH%2FvygdC7Kig16wLKlZFV2fJmNmYlYSsH%2BpdrkMQFQOhgsSYzrgntH7P1pkH2pOk35KzTyniUAFLt1NP8IwgLJhITeK%2BZKyd0JN4%2F9dIygi24Vp9JPGKIa8XRj09V&X-Amz-Signature=00cb96183c09e50663bf7e344f049e4c6f74741bf600f498d860901b0a9c8943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPPPRMNF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5gFFuXQTYL%2FzDH1g6l8grmpMOLJH%2BvWRTUpUP2nNBYAiAeAvoRouPT8Vhpa%2FOGJOcB0joGUpTznasyf6aL13Y30yr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM7FC%2FOiQCghZ6EFDMKtwD%2BSgv%2B9Ibc7BElR8%2Fqxfc6CjE%2FMECO9vPrMeQDpIrZ23zOjLNZlDkTpNZ49GGTT2EZ9fBs9i3gEwC0d7w%2F0Vpqe1PxAUGvzPnsSo4MsMBweVxilFNG4ZAG6viZZMtjJobWuLcCfUyo1PyYIdFrWn6oN8A%2F4f%2F%2Bx7biAfaxHfObhX1GuZW29PHSgFJIa5uPek18XQq9RL51DmWKXn%2F%2BZkZPhR%2BN0SVo9fcYq8xWVL1SFOLLgdyaRrcasc17nZjWrKelzRKhkUTDl30tTijQt7Fnv6IHiZ5DwUD%2F%2ByrL4iBLsm8%2BHq5mpQMReJG3zUKpRAlfscQ6H1giRtT7j%2BZX%2F3HQGBIilOiQzw8s%2FWwgCvd%2Fg8MR8WQ1wzd8b2FvvSf6%2BFzXNlJtVduWiFbTHLKq4PT3pM2xB%2BAFmKtnjH09Bwmkee64pNGZuiBPvch3TYTx3fOm%2FiKE%2Fk%2F3KrpOm%2F0bBpf2GStQWpg6mHNx4T7aa5m7d0xRC7KqEbzfaqY2x%2FhwBXAWNBQXKq8pHPLd2qnle3thP8QaRF0k1IJvQ30oRNTuzqSG0%2Bo%2FiqPAxCUn24q3oqxof%2BDLYnmUkGI4tZg5fV8S%2ByeKteffetdMUQcTZiJT63FWsqqpt7uTTIQ0Y4w6M3O1AY6pgFZkh%2BfYdEqSO1ujyrg19VlhBkfxVLxLmoUB1WhIG2BuVjoS0MBlez3eSAVYCN8aP7OPKeTz7O33lrrpcfStfEarkRRzpJcRi6t7H8HY%2BG953qfTJTuz%2BjldLeqhCKFKfTArUUWxh2X4YAwbwiNWvbP3IukrE2603xtTiyNhWyy2pPHWHW%2BlPDywqdzePD9Ut5K3R1Ad7DHJ4JxnwctKnc%2Fv%2FGmM9iM&X-Amz-Signature=449f7dbda2b8b7b01a1397811ef21573810c494ad6ffe9a2e5a162d5dc036cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPPPRMNF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5gFFuXQTYL%2FzDH1g6l8grmpMOLJH%2BvWRTUpUP2nNBYAiAeAvoRouPT8Vhpa%2FOGJOcB0joGUpTznasyf6aL13Y30yr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM7FC%2FOiQCghZ6EFDMKtwD%2BSgv%2B9Ibc7BElR8%2Fqxfc6CjE%2FMECO9vPrMeQDpIrZ23zOjLNZlDkTpNZ49GGTT2EZ9fBs9i3gEwC0d7w%2F0Vpqe1PxAUGvzPnsSo4MsMBweVxilFNG4ZAG6viZZMtjJobWuLcCfUyo1PyYIdFrWn6oN8A%2F4f%2F%2Bx7biAfaxHfObhX1GuZW29PHSgFJIa5uPek18XQq9RL51DmWKXn%2F%2BZkZPhR%2BN0SVo9fcYq8xWVL1SFOLLgdyaRrcasc17nZjWrKelzRKhkUTDl30tTijQt7Fnv6IHiZ5DwUD%2F%2ByrL4iBLsm8%2BHq5mpQMReJG3zUKpRAlfscQ6H1giRtT7j%2BZX%2F3HQGBIilOiQzw8s%2FWwgCvd%2Fg8MR8WQ1wzd8b2FvvSf6%2BFzXNlJtVduWiFbTHLKq4PT3pM2xB%2BAFmKtnjH09Bwmkee64pNGZuiBPvch3TYTx3fOm%2FiKE%2Fk%2F3KrpOm%2F0bBpf2GStQWpg6mHNx4T7aa5m7d0xRC7KqEbzfaqY2x%2FhwBXAWNBQXKq8pHPLd2qnle3thP8QaRF0k1IJvQ30oRNTuzqSG0%2Bo%2FiqPAxCUn24q3oqxof%2BDLYnmUkGI4tZg5fV8S%2ByeKteffetdMUQcTZiJT63FWsqqpt7uTTIQ0Y4w6M3O1AY6pgFZkh%2BfYdEqSO1ujyrg19VlhBkfxVLxLmoUB1WhIG2BuVjoS0MBlez3eSAVYCN8aP7OPKeTz7O33lrrpcfStfEarkRRzpJcRi6t7H8HY%2BG953qfTJTuz%2BjldLeqhCKFKfTArUUWxh2X4YAwbwiNWvbP3IukrE2603xtTiyNhWyy2pPHWHW%2BlPDywqdzePD9Ut5K3R1Ad7DHJ4JxnwctKnc%2Fv%2FGmM9iM&X-Amz-Signature=a0864dc2546e7fe0c424258d65aea5196572b12221182b1e48eb5ca4757cafd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPPPRMNF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5gFFuXQTYL%2FzDH1g6l8grmpMOLJH%2BvWRTUpUP2nNBYAiAeAvoRouPT8Vhpa%2FOGJOcB0joGUpTznasyf6aL13Y30yr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM7FC%2FOiQCghZ6EFDMKtwD%2BSgv%2B9Ibc7BElR8%2Fqxfc6CjE%2FMECO9vPrMeQDpIrZ23zOjLNZlDkTpNZ49GGTT2EZ9fBs9i3gEwC0d7w%2F0Vpqe1PxAUGvzPnsSo4MsMBweVxilFNG4ZAG6viZZMtjJobWuLcCfUyo1PyYIdFrWn6oN8A%2F4f%2F%2Bx7biAfaxHfObhX1GuZW29PHSgFJIa5uPek18XQq9RL51DmWKXn%2F%2BZkZPhR%2BN0SVo9fcYq8xWVL1SFOLLgdyaRrcasc17nZjWrKelzRKhkUTDl30tTijQt7Fnv6IHiZ5DwUD%2F%2ByrL4iBLsm8%2BHq5mpQMReJG3zUKpRAlfscQ6H1giRtT7j%2BZX%2F3HQGBIilOiQzw8s%2FWwgCvd%2Fg8MR8WQ1wzd8b2FvvSf6%2BFzXNlJtVduWiFbTHLKq4PT3pM2xB%2BAFmKtnjH09Bwmkee64pNGZuiBPvch3TYTx3fOm%2FiKE%2Fk%2F3KrpOm%2F0bBpf2GStQWpg6mHNx4T7aa5m7d0xRC7KqEbzfaqY2x%2FhwBXAWNBQXKq8pHPLd2qnle3thP8QaRF0k1IJvQ30oRNTuzqSG0%2Bo%2FiqPAxCUn24q3oqxof%2BDLYnmUkGI4tZg5fV8S%2ByeKteffetdMUQcTZiJT63FWsqqpt7uTTIQ0Y4w6M3O1AY6pgFZkh%2BfYdEqSO1ujyrg19VlhBkfxVLxLmoUB1WhIG2BuVjoS0MBlez3eSAVYCN8aP7OPKeTz7O33lrrpcfStfEarkRRzpJcRi6t7H8HY%2BG953qfTJTuz%2BjldLeqhCKFKfTArUUWxh2X4YAwbwiNWvbP3IukrE2603xtTiyNhWyy2pPHWHW%2BlPDywqdzePD9Ut5K3R1Ad7DHJ4JxnwctKnc%2Fv%2FGmM9iM&X-Amz-Signature=29efc8c4675129e87f2c8347967546af014a04359aa7335ea151982599be7337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPPPRMNF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5gFFuXQTYL%2FzDH1g6l8grmpMOLJH%2BvWRTUpUP2nNBYAiAeAvoRouPT8Vhpa%2FOGJOcB0joGUpTznasyf6aL13Y30yr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM7FC%2FOiQCghZ6EFDMKtwD%2BSgv%2B9Ibc7BElR8%2Fqxfc6CjE%2FMECO9vPrMeQDpIrZ23zOjLNZlDkTpNZ49GGTT2EZ9fBs9i3gEwC0d7w%2F0Vpqe1PxAUGvzPnsSo4MsMBweVxilFNG4ZAG6viZZMtjJobWuLcCfUyo1PyYIdFrWn6oN8A%2F4f%2F%2Bx7biAfaxHfObhX1GuZW29PHSgFJIa5uPek18XQq9RL51DmWKXn%2F%2BZkZPhR%2BN0SVo9fcYq8xWVL1SFOLLgdyaRrcasc17nZjWrKelzRKhkUTDl30tTijQt7Fnv6IHiZ5DwUD%2F%2ByrL4iBLsm8%2BHq5mpQMReJG3zUKpRAlfscQ6H1giRtT7j%2BZX%2F3HQGBIilOiQzw8s%2FWwgCvd%2Fg8MR8WQ1wzd8b2FvvSf6%2BFzXNlJtVduWiFbTHLKq4PT3pM2xB%2BAFmKtnjH09Bwmkee64pNGZuiBPvch3TYTx3fOm%2FiKE%2Fk%2F3KrpOm%2F0bBpf2GStQWpg6mHNx4T7aa5m7d0xRC7KqEbzfaqY2x%2FhwBXAWNBQXKq8pHPLd2qnle3thP8QaRF0k1IJvQ30oRNTuzqSG0%2Bo%2FiqPAxCUn24q3oqxof%2BDLYnmUkGI4tZg5fV8S%2ByeKteffetdMUQcTZiJT63FWsqqpt7uTTIQ0Y4w6M3O1AY6pgFZkh%2BfYdEqSO1ujyrg19VlhBkfxVLxLmoUB1WhIG2BuVjoS0MBlez3eSAVYCN8aP7OPKeTz7O33lrrpcfStfEarkRRzpJcRi6t7H8HY%2BG953qfTJTuz%2BjldLeqhCKFKfTArUUWxh2X4YAwbwiNWvbP3IukrE2603xtTiyNhWyy2pPHWHW%2BlPDywqdzePD9Ut5K3R1Ad7DHJ4JxnwctKnc%2Fv%2FGmM9iM&X-Amz-Signature=6a3d3c7f3c72966c65db1bdd5ec360000ac99a970e4f55dcb3f4c7faf060301c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPPPRMNF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5gFFuXQTYL%2FzDH1g6l8grmpMOLJH%2BvWRTUpUP2nNBYAiAeAvoRouPT8Vhpa%2FOGJOcB0joGUpTznasyf6aL13Y30yr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM7FC%2FOiQCghZ6EFDMKtwD%2BSgv%2B9Ibc7BElR8%2Fqxfc6CjE%2FMECO9vPrMeQDpIrZ23zOjLNZlDkTpNZ49GGTT2EZ9fBs9i3gEwC0d7w%2F0Vpqe1PxAUGvzPnsSo4MsMBweVxilFNG4ZAG6viZZMtjJobWuLcCfUyo1PyYIdFrWn6oN8A%2F4f%2F%2Bx7biAfaxHfObhX1GuZW29PHSgFJIa5uPek18XQq9RL51DmWKXn%2F%2BZkZPhR%2BN0SVo9fcYq8xWVL1SFOLLgdyaRrcasc17nZjWrKelzRKhkUTDl30tTijQt7Fnv6IHiZ5DwUD%2F%2ByrL4iBLsm8%2BHq5mpQMReJG3zUKpRAlfscQ6H1giRtT7j%2BZX%2F3HQGBIilOiQzw8s%2FWwgCvd%2Fg8MR8WQ1wzd8b2FvvSf6%2BFzXNlJtVduWiFbTHLKq4PT3pM2xB%2BAFmKtnjH09Bwmkee64pNGZuiBPvch3TYTx3fOm%2FiKE%2Fk%2F3KrpOm%2F0bBpf2GStQWpg6mHNx4T7aa5m7d0xRC7KqEbzfaqY2x%2FhwBXAWNBQXKq8pHPLd2qnle3thP8QaRF0k1IJvQ30oRNTuzqSG0%2Bo%2FiqPAxCUn24q3oqxof%2BDLYnmUkGI4tZg5fV8S%2ByeKteffetdMUQcTZiJT63FWsqqpt7uTTIQ0Y4w6M3O1AY6pgFZkh%2BfYdEqSO1ujyrg19VlhBkfxVLxLmoUB1WhIG2BuVjoS0MBlez3eSAVYCN8aP7OPKeTz7O33lrrpcfStfEarkRRzpJcRi6t7H8HY%2BG953qfTJTuz%2BjldLeqhCKFKfTArUUWxh2X4YAwbwiNWvbP3IukrE2603xtTiyNhWyy2pPHWHW%2BlPDywqdzePD9Ut5K3R1Ad7DHJ4JxnwctKnc%2Fv%2FGmM9iM&X-Amz-Signature=f0dff5392843a9e8d032f2b83aa05deda127395bc1504702e65b595034959355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPPPRMNF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5gFFuXQTYL%2FzDH1g6l8grmpMOLJH%2BvWRTUpUP2nNBYAiAeAvoRouPT8Vhpa%2FOGJOcB0joGUpTznasyf6aL13Y30yr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM7FC%2FOiQCghZ6EFDMKtwD%2BSgv%2B9Ibc7BElR8%2Fqxfc6CjE%2FMECO9vPrMeQDpIrZ23zOjLNZlDkTpNZ49GGTT2EZ9fBs9i3gEwC0d7w%2F0Vpqe1PxAUGvzPnsSo4MsMBweVxilFNG4ZAG6viZZMtjJobWuLcCfUyo1PyYIdFrWn6oN8A%2F4f%2F%2Bx7biAfaxHfObhX1GuZW29PHSgFJIa5uPek18XQq9RL51DmWKXn%2F%2BZkZPhR%2BN0SVo9fcYq8xWVL1SFOLLgdyaRrcasc17nZjWrKelzRKhkUTDl30tTijQt7Fnv6IHiZ5DwUD%2F%2ByrL4iBLsm8%2BHq5mpQMReJG3zUKpRAlfscQ6H1giRtT7j%2BZX%2F3HQGBIilOiQzw8s%2FWwgCvd%2Fg8MR8WQ1wzd8b2FvvSf6%2BFzXNlJtVduWiFbTHLKq4PT3pM2xB%2BAFmKtnjH09Bwmkee64pNGZuiBPvch3TYTx3fOm%2FiKE%2Fk%2F3KrpOm%2F0bBpf2GStQWpg6mHNx4T7aa5m7d0xRC7KqEbzfaqY2x%2FhwBXAWNBQXKq8pHPLd2qnle3thP8QaRF0k1IJvQ30oRNTuzqSG0%2Bo%2FiqPAxCUn24q3oqxof%2BDLYnmUkGI4tZg5fV8S%2ByeKteffetdMUQcTZiJT63FWsqqpt7uTTIQ0Y4w6M3O1AY6pgFZkh%2BfYdEqSO1ujyrg19VlhBkfxVLxLmoUB1WhIG2BuVjoS0MBlez3eSAVYCN8aP7OPKeTz7O33lrrpcfStfEarkRRzpJcRi6t7H8HY%2BG953qfTJTuz%2BjldLeqhCKFKfTArUUWxh2X4YAwbwiNWvbP3IukrE2603xtTiyNhWyy2pPHWHW%2BlPDywqdzePD9Ut5K3R1Ad7DHJ4JxnwctKnc%2Fv%2FGmM9iM&X-Amz-Signature=7d1c3e0a5fb259a8583cb40df890880a5249b7ecd8db161c4c516cba665e244c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


