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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSBMIKK%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXwIRtZc71iPqCbgCBlCEBBvIWZanFlwJfGf7dwrB3BwIgKQdSF6ghyK1CTmJ%2FbuQEuZHTSppKP7xCPqaRsuJWY0cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhEhWUMnoCI4%2FuoOyrcA2%2FW%2B5A6%2FSBvupu%2BJQT6BdU8SkKdqS6KerDPf6E%2BOwL7MILJM85wP%2FL74FAjN63NiLjW7HsLOaAvx%2BAmq%2FdZ0YDyaK4AiiKz9GUeJ4d%2Fodr3rNHtufOpSR1Spo%2F8OJF7aZYTRq%2FTpGX0rjn8VUExQV5hfqFI%2BW6VCLKc96E5AeaTF93Cj%2F%2B6an1BWJNK2MRKT9wowrkyPTdx2oFURakMBWJeUc91%2Bwb0h%2Fn9vHysF4ToOL5v3KajK2KR8YT4yBiX6MgNMXuEJRpnYakHshvbAux7Oq42Y%2F%2BwP%2FRk8Ndja9plvTvJ0j8DZYh%2Bz2qtI1VfRsYLl6kVrTa9mpmw8M5YuVWg8ByhJwLsj5BBV49a2nQpGeWmsac9c84JqAxch7KXg5cvdMLsqsQY5XyNVKVf78SD8AFhelQkyH8QhIOTLmiO4ZQs51YD01pseFbMMNBXsWV0BKGIzThrilZ8eKkAhW5NqlSyzT7LJUs2PPO1JAoOLoXGUl5%2Bf%2F8tZfK%2BVt%2FbaToUnxLL9xwIg56PKmMWeadChUhdZQbrLas8LLasoT%2BY4%2Fdends%2B4yLi6Iw01BAJMv%2Fp4yF7ekAWPq44vaXKSBUOnrd5cvENgT%2FYeRJi8unIOg7rv1Ve07qYcJkoMJvdtcsGOqUBj643IDQAKv4RG%2BkKIMIvESJ4%2BP1J30GqriKWJWev%2BROOpkSkoegoYU8%2FeQx4wVWERe2XsXe7as10V69O%2FG6%2FGxKQKM%2FtIiQkuWBA%2Bi27iG9zoxgtZTb0yvXFVRNWAOQk%2FElsZLk%2Bnd%2BrAeGnR%2FUkowkX9l2yW5UBi9pTqv5JL%2Ftcm7ktVuUbgHBjre%2Baz8lLeIKDSmF%2Bj1hVRbdt0FZ1Ihr9Bs1a&X-Amz-Signature=781678e1ed824fcb5c6d5e11b800a3589afe638fd3f51b15bc7f762c88873cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSBMIKK%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXwIRtZc71iPqCbgCBlCEBBvIWZanFlwJfGf7dwrB3BwIgKQdSF6ghyK1CTmJ%2FbuQEuZHTSppKP7xCPqaRsuJWY0cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhEhWUMnoCI4%2FuoOyrcA2%2FW%2B5A6%2FSBvupu%2BJQT6BdU8SkKdqS6KerDPf6E%2BOwL7MILJM85wP%2FL74FAjN63NiLjW7HsLOaAvx%2BAmq%2FdZ0YDyaK4AiiKz9GUeJ4d%2Fodr3rNHtufOpSR1Spo%2F8OJF7aZYTRq%2FTpGX0rjn8VUExQV5hfqFI%2BW6VCLKc96E5AeaTF93Cj%2F%2B6an1BWJNK2MRKT9wowrkyPTdx2oFURakMBWJeUc91%2Bwb0h%2Fn9vHysF4ToOL5v3KajK2KR8YT4yBiX6MgNMXuEJRpnYakHshvbAux7Oq42Y%2F%2BwP%2FRk8Ndja9plvTvJ0j8DZYh%2Bz2qtI1VfRsYLl6kVrTa9mpmw8M5YuVWg8ByhJwLsj5BBV49a2nQpGeWmsac9c84JqAxch7KXg5cvdMLsqsQY5XyNVKVf78SD8AFhelQkyH8QhIOTLmiO4ZQs51YD01pseFbMMNBXsWV0BKGIzThrilZ8eKkAhW5NqlSyzT7LJUs2PPO1JAoOLoXGUl5%2Bf%2F8tZfK%2BVt%2FbaToUnxLL9xwIg56PKmMWeadChUhdZQbrLas8LLasoT%2BY4%2Fdends%2B4yLi6Iw01BAJMv%2Fp4yF7ekAWPq44vaXKSBUOnrd5cvENgT%2FYeRJi8unIOg7rv1Ve07qYcJkoMJvdtcsGOqUBj643IDQAKv4RG%2BkKIMIvESJ4%2BP1J30GqriKWJWev%2BROOpkSkoegoYU8%2FeQx4wVWERe2XsXe7as10V69O%2FG6%2FGxKQKM%2FtIiQkuWBA%2Bi27iG9zoxgtZTb0yvXFVRNWAOQk%2FElsZLk%2Bnd%2BrAeGnR%2FUkowkX9l2yW5UBi9pTqv5JL%2Ftcm7ktVuUbgHBjre%2Baz8lLeIKDSmF%2Bj1hVRbdt0FZ1Ihr9Bs1a&X-Amz-Signature=52c426e6c695f15f3bae0075cc86fcc757b9634d9ef618b574a45db2aeec2557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSBMIKK%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXwIRtZc71iPqCbgCBlCEBBvIWZanFlwJfGf7dwrB3BwIgKQdSF6ghyK1CTmJ%2FbuQEuZHTSppKP7xCPqaRsuJWY0cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhEhWUMnoCI4%2FuoOyrcA2%2FW%2B5A6%2FSBvupu%2BJQT6BdU8SkKdqS6KerDPf6E%2BOwL7MILJM85wP%2FL74FAjN63NiLjW7HsLOaAvx%2BAmq%2FdZ0YDyaK4AiiKz9GUeJ4d%2Fodr3rNHtufOpSR1Spo%2F8OJF7aZYTRq%2FTpGX0rjn8VUExQV5hfqFI%2BW6VCLKc96E5AeaTF93Cj%2F%2B6an1BWJNK2MRKT9wowrkyPTdx2oFURakMBWJeUc91%2Bwb0h%2Fn9vHysF4ToOL5v3KajK2KR8YT4yBiX6MgNMXuEJRpnYakHshvbAux7Oq42Y%2F%2BwP%2FRk8Ndja9plvTvJ0j8DZYh%2Bz2qtI1VfRsYLl6kVrTa9mpmw8M5YuVWg8ByhJwLsj5BBV49a2nQpGeWmsac9c84JqAxch7KXg5cvdMLsqsQY5XyNVKVf78SD8AFhelQkyH8QhIOTLmiO4ZQs51YD01pseFbMMNBXsWV0BKGIzThrilZ8eKkAhW5NqlSyzT7LJUs2PPO1JAoOLoXGUl5%2Bf%2F8tZfK%2BVt%2FbaToUnxLL9xwIg56PKmMWeadChUhdZQbrLas8LLasoT%2BY4%2Fdends%2B4yLi6Iw01BAJMv%2Fp4yF7ekAWPq44vaXKSBUOnrd5cvENgT%2FYeRJi8unIOg7rv1Ve07qYcJkoMJvdtcsGOqUBj643IDQAKv4RG%2BkKIMIvESJ4%2BP1J30GqriKWJWev%2BROOpkSkoegoYU8%2FeQx4wVWERe2XsXe7as10V69O%2FG6%2FGxKQKM%2FtIiQkuWBA%2Bi27iG9zoxgtZTb0yvXFVRNWAOQk%2FElsZLk%2Bnd%2BrAeGnR%2FUkowkX9l2yW5UBi9pTqv5JL%2Ftcm7ktVuUbgHBjre%2Baz8lLeIKDSmF%2Bj1hVRbdt0FZ1Ihr9Bs1a&X-Amz-Signature=af7299f36722295c3393abbb76dca492e092da5ca60437d6306f2b43d0523346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSBMIKK%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXwIRtZc71iPqCbgCBlCEBBvIWZanFlwJfGf7dwrB3BwIgKQdSF6ghyK1CTmJ%2FbuQEuZHTSppKP7xCPqaRsuJWY0cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhEhWUMnoCI4%2FuoOyrcA2%2FW%2B5A6%2FSBvupu%2BJQT6BdU8SkKdqS6KerDPf6E%2BOwL7MILJM85wP%2FL74FAjN63NiLjW7HsLOaAvx%2BAmq%2FdZ0YDyaK4AiiKz9GUeJ4d%2Fodr3rNHtufOpSR1Spo%2F8OJF7aZYTRq%2FTpGX0rjn8VUExQV5hfqFI%2BW6VCLKc96E5AeaTF93Cj%2F%2B6an1BWJNK2MRKT9wowrkyPTdx2oFURakMBWJeUc91%2Bwb0h%2Fn9vHysF4ToOL5v3KajK2KR8YT4yBiX6MgNMXuEJRpnYakHshvbAux7Oq42Y%2F%2BwP%2FRk8Ndja9plvTvJ0j8DZYh%2Bz2qtI1VfRsYLl6kVrTa9mpmw8M5YuVWg8ByhJwLsj5BBV49a2nQpGeWmsac9c84JqAxch7KXg5cvdMLsqsQY5XyNVKVf78SD8AFhelQkyH8QhIOTLmiO4ZQs51YD01pseFbMMNBXsWV0BKGIzThrilZ8eKkAhW5NqlSyzT7LJUs2PPO1JAoOLoXGUl5%2Bf%2F8tZfK%2BVt%2FbaToUnxLL9xwIg56PKmMWeadChUhdZQbrLas8LLasoT%2BY4%2Fdends%2B4yLi6Iw01BAJMv%2Fp4yF7ekAWPq44vaXKSBUOnrd5cvENgT%2FYeRJi8unIOg7rv1Ve07qYcJkoMJvdtcsGOqUBj643IDQAKv4RG%2BkKIMIvESJ4%2BP1J30GqriKWJWev%2BROOpkSkoegoYU8%2FeQx4wVWERe2XsXe7as10V69O%2FG6%2FGxKQKM%2FtIiQkuWBA%2Bi27iG9zoxgtZTb0yvXFVRNWAOQk%2FElsZLk%2Bnd%2BrAeGnR%2FUkowkX9l2yW5UBi9pTqv5JL%2Ftcm7ktVuUbgHBjre%2Baz8lLeIKDSmF%2Bj1hVRbdt0FZ1Ihr9Bs1a&X-Amz-Signature=8b32b87b055faa019cc21c37d2b31e650e41b7aeaa8fb9cd88149b04a6776667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSBMIKK%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXwIRtZc71iPqCbgCBlCEBBvIWZanFlwJfGf7dwrB3BwIgKQdSF6ghyK1CTmJ%2FbuQEuZHTSppKP7xCPqaRsuJWY0cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhEhWUMnoCI4%2FuoOyrcA2%2FW%2B5A6%2FSBvupu%2BJQT6BdU8SkKdqS6KerDPf6E%2BOwL7MILJM85wP%2FL74FAjN63NiLjW7HsLOaAvx%2BAmq%2FdZ0YDyaK4AiiKz9GUeJ4d%2Fodr3rNHtufOpSR1Spo%2F8OJF7aZYTRq%2FTpGX0rjn8VUExQV5hfqFI%2BW6VCLKc96E5AeaTF93Cj%2F%2B6an1BWJNK2MRKT9wowrkyPTdx2oFURakMBWJeUc91%2Bwb0h%2Fn9vHysF4ToOL5v3KajK2KR8YT4yBiX6MgNMXuEJRpnYakHshvbAux7Oq42Y%2F%2BwP%2FRk8Ndja9plvTvJ0j8DZYh%2Bz2qtI1VfRsYLl6kVrTa9mpmw8M5YuVWg8ByhJwLsj5BBV49a2nQpGeWmsac9c84JqAxch7KXg5cvdMLsqsQY5XyNVKVf78SD8AFhelQkyH8QhIOTLmiO4ZQs51YD01pseFbMMNBXsWV0BKGIzThrilZ8eKkAhW5NqlSyzT7LJUs2PPO1JAoOLoXGUl5%2Bf%2F8tZfK%2BVt%2FbaToUnxLL9xwIg56PKmMWeadChUhdZQbrLas8LLasoT%2BY4%2Fdends%2B4yLi6Iw01BAJMv%2Fp4yF7ekAWPq44vaXKSBUOnrd5cvENgT%2FYeRJi8unIOg7rv1Ve07qYcJkoMJvdtcsGOqUBj643IDQAKv4RG%2BkKIMIvESJ4%2BP1J30GqriKWJWev%2BROOpkSkoegoYU8%2FeQx4wVWERe2XsXe7as10V69O%2FG6%2FGxKQKM%2FtIiQkuWBA%2Bi27iG9zoxgtZTb0yvXFVRNWAOQk%2FElsZLk%2Bnd%2BrAeGnR%2FUkowkX9l2yW5UBi9pTqv5JL%2Ftcm7ktVuUbgHBjre%2Baz8lLeIKDSmF%2Bj1hVRbdt0FZ1Ihr9Bs1a&X-Amz-Signature=66af1ab6342135d0c33e3271980da5652464269952555032afea920c7fc1f386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSBMIKK%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXwIRtZc71iPqCbgCBlCEBBvIWZanFlwJfGf7dwrB3BwIgKQdSF6ghyK1CTmJ%2FbuQEuZHTSppKP7xCPqaRsuJWY0cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhEhWUMnoCI4%2FuoOyrcA2%2FW%2B5A6%2FSBvupu%2BJQT6BdU8SkKdqS6KerDPf6E%2BOwL7MILJM85wP%2FL74FAjN63NiLjW7HsLOaAvx%2BAmq%2FdZ0YDyaK4AiiKz9GUeJ4d%2Fodr3rNHtufOpSR1Spo%2F8OJF7aZYTRq%2FTpGX0rjn8VUExQV5hfqFI%2BW6VCLKc96E5AeaTF93Cj%2F%2B6an1BWJNK2MRKT9wowrkyPTdx2oFURakMBWJeUc91%2Bwb0h%2Fn9vHysF4ToOL5v3KajK2KR8YT4yBiX6MgNMXuEJRpnYakHshvbAux7Oq42Y%2F%2BwP%2FRk8Ndja9plvTvJ0j8DZYh%2Bz2qtI1VfRsYLl6kVrTa9mpmw8M5YuVWg8ByhJwLsj5BBV49a2nQpGeWmsac9c84JqAxch7KXg5cvdMLsqsQY5XyNVKVf78SD8AFhelQkyH8QhIOTLmiO4ZQs51YD01pseFbMMNBXsWV0BKGIzThrilZ8eKkAhW5NqlSyzT7LJUs2PPO1JAoOLoXGUl5%2Bf%2F8tZfK%2BVt%2FbaToUnxLL9xwIg56PKmMWeadChUhdZQbrLas8LLasoT%2BY4%2Fdends%2B4yLi6Iw01BAJMv%2Fp4yF7ekAWPq44vaXKSBUOnrd5cvENgT%2FYeRJi8unIOg7rv1Ve07qYcJkoMJvdtcsGOqUBj643IDQAKv4RG%2BkKIMIvESJ4%2BP1J30GqriKWJWev%2BROOpkSkoegoYU8%2FeQx4wVWERe2XsXe7as10V69O%2FG6%2FGxKQKM%2FtIiQkuWBA%2Bi27iG9zoxgtZTb0yvXFVRNWAOQk%2FElsZLk%2Bnd%2BrAeGnR%2FUkowkX9l2yW5UBi9pTqv5JL%2Ftcm7ktVuUbgHBjre%2Baz8lLeIKDSmF%2Bj1hVRbdt0FZ1Ihr9Bs1a&X-Amz-Signature=b73df54bb875abfc792bddafbbcd05c2ea491e08cf8ff1e16e293e2404072f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSBMIKK%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXwIRtZc71iPqCbgCBlCEBBvIWZanFlwJfGf7dwrB3BwIgKQdSF6ghyK1CTmJ%2FbuQEuZHTSppKP7xCPqaRsuJWY0cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhEhWUMnoCI4%2FuoOyrcA2%2FW%2B5A6%2FSBvupu%2BJQT6BdU8SkKdqS6KerDPf6E%2BOwL7MILJM85wP%2FL74FAjN63NiLjW7HsLOaAvx%2BAmq%2FdZ0YDyaK4AiiKz9GUeJ4d%2Fodr3rNHtufOpSR1Spo%2F8OJF7aZYTRq%2FTpGX0rjn8VUExQV5hfqFI%2BW6VCLKc96E5AeaTF93Cj%2F%2B6an1BWJNK2MRKT9wowrkyPTdx2oFURakMBWJeUc91%2Bwb0h%2Fn9vHysF4ToOL5v3KajK2KR8YT4yBiX6MgNMXuEJRpnYakHshvbAux7Oq42Y%2F%2BwP%2FRk8Ndja9plvTvJ0j8DZYh%2Bz2qtI1VfRsYLl6kVrTa9mpmw8M5YuVWg8ByhJwLsj5BBV49a2nQpGeWmsac9c84JqAxch7KXg5cvdMLsqsQY5XyNVKVf78SD8AFhelQkyH8QhIOTLmiO4ZQs51YD01pseFbMMNBXsWV0BKGIzThrilZ8eKkAhW5NqlSyzT7LJUs2PPO1JAoOLoXGUl5%2Bf%2F8tZfK%2BVt%2FbaToUnxLL9xwIg56PKmMWeadChUhdZQbrLas8LLasoT%2BY4%2Fdends%2B4yLi6Iw01BAJMv%2Fp4yF7ekAWPq44vaXKSBUOnrd5cvENgT%2FYeRJi8unIOg7rv1Ve07qYcJkoMJvdtcsGOqUBj643IDQAKv4RG%2BkKIMIvESJ4%2BP1J30GqriKWJWev%2BROOpkSkoegoYU8%2FeQx4wVWERe2XsXe7as10V69O%2FG6%2FGxKQKM%2FtIiQkuWBA%2Bi27iG9zoxgtZTb0yvXFVRNWAOQk%2FElsZLk%2Bnd%2BrAeGnR%2FUkowkX9l2yW5UBi9pTqv5JL%2Ftcm7ktVuUbgHBjre%2Baz8lLeIKDSmF%2Bj1hVRbdt0FZ1Ihr9Bs1a&X-Amz-Signature=de4acad5f1de6e8ac451eeee75bcd048723751d9bf6f4e84690bb31d7cf8f4b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSBMIKK%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXwIRtZc71iPqCbgCBlCEBBvIWZanFlwJfGf7dwrB3BwIgKQdSF6ghyK1CTmJ%2FbuQEuZHTSppKP7xCPqaRsuJWY0cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhEhWUMnoCI4%2FuoOyrcA2%2FW%2B5A6%2FSBvupu%2BJQT6BdU8SkKdqS6KerDPf6E%2BOwL7MILJM85wP%2FL74FAjN63NiLjW7HsLOaAvx%2BAmq%2FdZ0YDyaK4AiiKz9GUeJ4d%2Fodr3rNHtufOpSR1Spo%2F8OJF7aZYTRq%2FTpGX0rjn8VUExQV5hfqFI%2BW6VCLKc96E5AeaTF93Cj%2F%2B6an1BWJNK2MRKT9wowrkyPTdx2oFURakMBWJeUc91%2Bwb0h%2Fn9vHysF4ToOL5v3KajK2KR8YT4yBiX6MgNMXuEJRpnYakHshvbAux7Oq42Y%2F%2BwP%2FRk8Ndja9plvTvJ0j8DZYh%2Bz2qtI1VfRsYLl6kVrTa9mpmw8M5YuVWg8ByhJwLsj5BBV49a2nQpGeWmsac9c84JqAxch7KXg5cvdMLsqsQY5XyNVKVf78SD8AFhelQkyH8QhIOTLmiO4ZQs51YD01pseFbMMNBXsWV0BKGIzThrilZ8eKkAhW5NqlSyzT7LJUs2PPO1JAoOLoXGUl5%2Bf%2F8tZfK%2BVt%2FbaToUnxLL9xwIg56PKmMWeadChUhdZQbrLas8LLasoT%2BY4%2Fdends%2B4yLi6Iw01BAJMv%2Fp4yF7ekAWPq44vaXKSBUOnrd5cvENgT%2FYeRJi8unIOg7rv1Ve07qYcJkoMJvdtcsGOqUBj643IDQAKv4RG%2BkKIMIvESJ4%2BP1J30GqriKWJWev%2BROOpkSkoegoYU8%2FeQx4wVWERe2XsXe7as10V69O%2FG6%2FGxKQKM%2FtIiQkuWBA%2Bi27iG9zoxgtZTb0yvXFVRNWAOQk%2FElsZLk%2Bnd%2BrAeGnR%2FUkowkX9l2yW5UBi9pTqv5JL%2Ftcm7ktVuUbgHBjre%2Baz8lLeIKDSmF%2Bj1hVRbdt0FZ1Ihr9Bs1a&X-Amz-Signature=b3c7cbcd6b614e0e76775c0aba07f5877317cd2bf00533bea49ad9d537da6ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSBMIKK%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXwIRtZc71iPqCbgCBlCEBBvIWZanFlwJfGf7dwrB3BwIgKQdSF6ghyK1CTmJ%2FbuQEuZHTSppKP7xCPqaRsuJWY0cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhEhWUMnoCI4%2FuoOyrcA2%2FW%2B5A6%2FSBvupu%2BJQT6BdU8SkKdqS6KerDPf6E%2BOwL7MILJM85wP%2FL74FAjN63NiLjW7HsLOaAvx%2BAmq%2FdZ0YDyaK4AiiKz9GUeJ4d%2Fodr3rNHtufOpSR1Spo%2F8OJF7aZYTRq%2FTpGX0rjn8VUExQV5hfqFI%2BW6VCLKc96E5AeaTF93Cj%2F%2B6an1BWJNK2MRKT9wowrkyPTdx2oFURakMBWJeUc91%2Bwb0h%2Fn9vHysF4ToOL5v3KajK2KR8YT4yBiX6MgNMXuEJRpnYakHshvbAux7Oq42Y%2F%2BwP%2FRk8Ndja9plvTvJ0j8DZYh%2Bz2qtI1VfRsYLl6kVrTa9mpmw8M5YuVWg8ByhJwLsj5BBV49a2nQpGeWmsac9c84JqAxch7KXg5cvdMLsqsQY5XyNVKVf78SD8AFhelQkyH8QhIOTLmiO4ZQs51YD01pseFbMMNBXsWV0BKGIzThrilZ8eKkAhW5NqlSyzT7LJUs2PPO1JAoOLoXGUl5%2Bf%2F8tZfK%2BVt%2FbaToUnxLL9xwIg56PKmMWeadChUhdZQbrLas8LLasoT%2BY4%2Fdends%2B4yLi6Iw01BAJMv%2Fp4yF7ekAWPq44vaXKSBUOnrd5cvENgT%2FYeRJi8unIOg7rv1Ve07qYcJkoMJvdtcsGOqUBj643IDQAKv4RG%2BkKIMIvESJ4%2BP1J30GqriKWJWev%2BROOpkSkoegoYU8%2FeQx4wVWERe2XsXe7as10V69O%2FG6%2FGxKQKM%2FtIiQkuWBA%2Bi27iG9zoxgtZTb0yvXFVRNWAOQk%2FElsZLk%2Bnd%2BrAeGnR%2FUkowkX9l2yW5UBi9pTqv5JL%2Ftcm7ktVuUbgHBjre%2Baz8lLeIKDSmF%2Bj1hVRbdt0FZ1Ihr9Bs1a&X-Amz-Signature=b22f161a816abad51ae88e1dde069ce0ffabc695ddfcea5f1b9c96706e920201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSBMIKK%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXwIRtZc71iPqCbgCBlCEBBvIWZanFlwJfGf7dwrB3BwIgKQdSF6ghyK1CTmJ%2FbuQEuZHTSppKP7xCPqaRsuJWY0cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhEhWUMnoCI4%2FuoOyrcA2%2FW%2B5A6%2FSBvupu%2BJQT6BdU8SkKdqS6KerDPf6E%2BOwL7MILJM85wP%2FL74FAjN63NiLjW7HsLOaAvx%2BAmq%2FdZ0YDyaK4AiiKz9GUeJ4d%2Fodr3rNHtufOpSR1Spo%2F8OJF7aZYTRq%2FTpGX0rjn8VUExQV5hfqFI%2BW6VCLKc96E5AeaTF93Cj%2F%2B6an1BWJNK2MRKT9wowrkyPTdx2oFURakMBWJeUc91%2Bwb0h%2Fn9vHysF4ToOL5v3KajK2KR8YT4yBiX6MgNMXuEJRpnYakHshvbAux7Oq42Y%2F%2BwP%2FRk8Ndja9plvTvJ0j8DZYh%2Bz2qtI1VfRsYLl6kVrTa9mpmw8M5YuVWg8ByhJwLsj5BBV49a2nQpGeWmsac9c84JqAxch7KXg5cvdMLsqsQY5XyNVKVf78SD8AFhelQkyH8QhIOTLmiO4ZQs51YD01pseFbMMNBXsWV0BKGIzThrilZ8eKkAhW5NqlSyzT7LJUs2PPO1JAoOLoXGUl5%2Bf%2F8tZfK%2BVt%2FbaToUnxLL9xwIg56PKmMWeadChUhdZQbrLas8LLasoT%2BY4%2Fdends%2B4yLi6Iw01BAJMv%2Fp4yF7ekAWPq44vaXKSBUOnrd5cvENgT%2FYeRJi8unIOg7rv1Ve07qYcJkoMJvdtcsGOqUBj643IDQAKv4RG%2BkKIMIvESJ4%2BP1J30GqriKWJWev%2BROOpkSkoegoYU8%2FeQx4wVWERe2XsXe7as10V69O%2FG6%2FGxKQKM%2FtIiQkuWBA%2Bi27iG9zoxgtZTb0yvXFVRNWAOQk%2FElsZLk%2Bnd%2BrAeGnR%2FUkowkX9l2yW5UBi9pTqv5JL%2Ftcm7ktVuUbgHBjre%2Baz8lLeIKDSmF%2Bj1hVRbdt0FZ1Ihr9Bs1a&X-Amz-Signature=d970cd0d106b9ad9017ec9ffcb4ca8ff8397dbe41f1523ca2256bfc09c95be6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652XKMMRZ%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZjNxD78%2B1K7NtCJLpKwEU14WyLpDRXXSsLyKzDNItegIhAMnwomCvx4uqnzkSZclwcih9tY6ZicN5s76wftqpKP97KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8kpSZE%2BlEA2%2BioA0q3AO%2BwgK2btOiqHpbKnbfNDvPKffB3d6E9oUKPxrrWARZdX87qcg%2FdKbqZAzBxH%2BLJzFtJ%2F%2F%2BqqUDqj%2FiefV2RC1a3EbQjVHymD2orqJ9lNFUnlt7OgY9QB11Pal8wNVMlZmvsS76vrelPpWpLaf7rLjIuttpn8ReoXJcb5pW7OuGf3SWsBszqJbO09mc54vSF3N860J0WmuT6xOEGJbsk7VkI6VSKQCooM2sADHLtKm8EIDDlibIKv%2B8AM5yrpZvfmhEDClXyKtsgKsmWkvdNKgz2Ca7OQEK%2FSso2OCTSf5exUwDb6CQjp39xVMYmpzbhkvvDdgy%2FwzaekrFw6wdL9d0%2BmXQ%2FtWnvn0aNtTgjmplSRyQjpBdsC3HdFvvySFQOQMGMm83a2pcLBqj7Uf0f%2BiRNQeUGS3WiKnQ%2BQy%2FFjecS9Xp6mhcr4fUoeNlYF9NzEaDbTjxSQ8zqkGNWaWB59SfywKDtdb53PBHz2XeNYAsJ%2FW47oa6NHxjzsaMF%2F%2FIRyIZOMYbx89m5S0JfW%2BUoIobUUFhPNIj%2BHKtNYkODkzcFH19bH6fEKMN6N0lY5BWJYaGup4n49bT7%2B8jvSPEDuCksu92MrKeET%2FdecOogQT2J%2BmHoU3oRm%2FUMUiQpDDM3LXLBjqkAZkKkx9fh6wJaO%2Fdt%2BbQx3P%2B%2FOWqHbKX5lPphhR7awZYlMWPV7wEevnu0LDFLQJ%2Bp%2BdnOY52aETGGbfIVGzA2gChV3ymy1FTAzkISb32H78P9s8bKBubmk118XfDN7vTvkjky6LJqZRarXT0Zhz%2Fp%2FAJ8XJCYNfjcD2gN%2BELU9O5KV2wijAHlMab78nCthUwwd6OMGpWVAStLmCTs%2BcZxZKAkJTv&X-Amz-Signature=5298de2880876f38f6c7c4f1ed4b7db5bbef7c3860df533fcdbbce2131dbcaea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ25UCO5%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuPNjT9VFu72eCTgp0xkmGajtn1wmR3TRF8emdA%2Bj3SAiEAh%2FwOa5cXkfiUjXUPOUL8JWW%2BfvQz4t8DfttE8IQHo0UqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuQ0Wib3CnFsDvZdyrcA8H3e2GXOMl4vobirFmEcgX0XaPSlv%2BQaqOn1yY0%2BzJJXk6G7MsCYWkv1CkuaVkGBop%2FJbKBpZa5Y%2FbJDj5%2FQLYgvrMKHKK0UdYBHpWIQEXfP247sTsQuU4xP%2BB%2B6l6JD6lMcE25GwCMqf7P3EAaLGcqbBXusjGyt6dxU%2BdPrHIaTCIfbGOCXaEyn6Spd6wRvcdtDcShyZehYoIGOj69G%2FMM%2BA82vEuNHO%2ByLLMxBm8DP%2BYue%2BICwEO6vouUrAsvWX1FLrfbmi4mUZbhuh25vsVfhqKFsO9Z13WZ9G2m7A7lZDPHip634Oe%2BwegnMBWK3uDQSeFk4n8DL2sYxN%2FUBUIRPZZ2F%2FecLlmKbE1h31F1U9oaF9P9Uelw2gdG3RCb6WSuqRjn4A7wxjJTkVZzR8YUqHHel1GOy3tIqehWH1aWvjLaH8Paa46s%2BPqyI5%2BRmuqnE7XG30lYyB5bWIx5ypBzU2EH47Y0tpA9eefePZWccTLjwDByqHQYYSG2JgpxoN%2FHe4JM25nO1hkjERYnxZ5ij8bKQDr6FnSptSf20E1Edvs8acZ5wQ%2BoaIZ1LYv%2BPk8tftJQY0mrAzVWQzPDoszgeHH5Ov%2F6BIGUXciIX343VSmHDD%2BtGc%2BRCRkeMPLctcsGOqUBQsUZr9qW8pw20Lqvcu5qnXspbV5KUN4A3oCzL22Hz%2BShOjJEoAtQsMmXh42BTLy0chZK1%2BOQC83%2B0ND%2Fwj5ITs%2Fjof9ZmJYiAzQLz2kBpw7LsLxok2aVU6aQMlVU%2FKeOyl0NKOp4uliuseEwtV%2B9PN2JOlSk3NPTY5tVdnpOlX%2FGz1tnL6RcV6Mz7f4DKkUPrbJj%2BF9%2FjpvhD6m%2Fiw7Fx8vG4yNl&X-Amz-Signature=b5652dffe1bd03566f1df4146ec8872213056bc3a6202b100bc8a0a6d4f1a49d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTIHHD6O%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGHQhweEwvFh1JotZXDtmuhiIyr%2FP%2FVrXSJVqKagPPyAIgbcSnbvKYI6SC4adW6lmftCrb2ogQcnxv42WYbARbJXMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHfYoWi1hUWhpebsircAyemVtQt9hUShQrWq6z%2BO9xcNECnBT43O5T7b0awROMHegxeTecKF39jwPkepDIVKU5dvxFWZ%2F2lrFjEgJJ48kxBh6eGIrL3obgCPAoRYhyydra08SMtRZ06%2BfVIdRdGgfgFxXT4eFMLXOh%2Fk2Y1A%2FyviJ3iEIeGzCCFhV%2FXFfFqUrDD9Tm9wRgFRnGGtaLYI29GNj33RW0e%2FY26cocAWYmvmDV2nbzEuBbmEiM5HmORHWIBMdGPMLHdsefFyn%2F3ADOimlva8bWoPlm%2FzjbivRdmU1OSMxyB6PZD0VLX72leY5XbYx0lO%2BHXozl43u6xd3wepkPEDvylemzzEgHBzpo4VdDvglXqsYzIuBBbFfepJNzSa2E1TBLaFhNmbinRM%2B7t5VR4FBSstgVFIVHE%2FhycrEZB5do%2Bg8S1wulkVNY%2FZHI7liVuMfJ%2FnbnZtEH%2FSjQemjXNA0vFB15MgFFcbSAETtG2HPijxXTwq3g6D6KIWEwGDRW8nlJ6fngIL%2BL9WjiIDNTlvx92cKRUYn1mUiDsgp6r%2FFu6UwGtE%2FNN5zAX2lHheV2sIcu5H8VUpjlnpC2A1YTjyMy6jqEnmk%2BHoJ%2BFE074144DpTongCAO3CQQYnp67zCPKB5uWBtHMOXctcsGOqUBmx5vkGVQYltTOzWTk25%2Bv6mImYCy59MOqkrzPRooJjlO45Ob1VijTXgE3hPM6d%2BQPYxCNz7cHOByv%2BTXEugt9V%2Bvm7gtFnun7Po3O3Dhy%2Fevne2JIAslzhaFG1TPD7DzgS%2Fax8SG7Lje5iLLD2A06OLHDjeoMs5gP7%2Bk5B2r717uwilMfKw97PYvq6Ay3Wo9AHP9PefM2ljUxPzH4K2CrVDO%2FCOM&X-Amz-Signature=0de2d03c0c7781c752c8a493a1f70632608051721da7b6a8e8b3bd281bbb6892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSBMIKK%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXwIRtZc71iPqCbgCBlCEBBvIWZanFlwJfGf7dwrB3BwIgKQdSF6ghyK1CTmJ%2FbuQEuZHTSppKP7xCPqaRsuJWY0cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhEhWUMnoCI4%2FuoOyrcA2%2FW%2B5A6%2FSBvupu%2BJQT6BdU8SkKdqS6KerDPf6E%2BOwL7MILJM85wP%2FL74FAjN63NiLjW7HsLOaAvx%2BAmq%2FdZ0YDyaK4AiiKz9GUeJ4d%2Fodr3rNHtufOpSR1Spo%2F8OJF7aZYTRq%2FTpGX0rjn8VUExQV5hfqFI%2BW6VCLKc96E5AeaTF93Cj%2F%2B6an1BWJNK2MRKT9wowrkyPTdx2oFURakMBWJeUc91%2Bwb0h%2Fn9vHysF4ToOL5v3KajK2KR8YT4yBiX6MgNMXuEJRpnYakHshvbAux7Oq42Y%2F%2BwP%2FRk8Ndja9plvTvJ0j8DZYh%2Bz2qtI1VfRsYLl6kVrTa9mpmw8M5YuVWg8ByhJwLsj5BBV49a2nQpGeWmsac9c84JqAxch7KXg5cvdMLsqsQY5XyNVKVf78SD8AFhelQkyH8QhIOTLmiO4ZQs51YD01pseFbMMNBXsWV0BKGIzThrilZ8eKkAhW5NqlSyzT7LJUs2PPO1JAoOLoXGUl5%2Bf%2F8tZfK%2BVt%2FbaToUnxLL9xwIg56PKmMWeadChUhdZQbrLas8LLasoT%2BY4%2Fdends%2B4yLi6Iw01BAJMv%2Fp4yF7ekAWPq44vaXKSBUOnrd5cvENgT%2FYeRJi8unIOg7rv1Ve07qYcJkoMJvdtcsGOqUBj643IDQAKv4RG%2BkKIMIvESJ4%2BP1J30GqriKWJWev%2BROOpkSkoegoYU8%2FeQx4wVWERe2XsXe7as10V69O%2FG6%2FGxKQKM%2FtIiQkuWBA%2Bi27iG9zoxgtZTb0yvXFVRNWAOQk%2FElsZLk%2Bnd%2BrAeGnR%2FUkowkX9l2yW5UBi9pTqv5JL%2Ftcm7ktVuUbgHBjre%2Baz8lLeIKDSmF%2Bj1hVRbdt0FZ1Ihr9Bs1a&X-Amz-Signature=f78e570b67518bed954eaeeeade6c1b71e9c74f0e466e547d0f88a06a371ba9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4KKWE3F%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJ0nQ0YkIR%2Fjtc35bCwISTRT4G5I1xgEJEVIGLX8HH5AiEAiBAoxgOcM4nhOt3GLKAptnh1Vp3Hp72calbOLQLkUF8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxbVJ0lu5%2FbVDkdIircA%2Facyf2MeWvJMSqg5epX9GMe968mMHVRbU1Q72yF2A0oKzhfkoMfV5H%2BZ6LB76HesUjFm9hkbxlQbQGcSX5%2BNiun79ddcBRQi97LHxzHpxEHSYnnvUQ%2FBw4PDnIuKM3VZV5bQUiinfMtXjCNBRGCYiZ0mGtL5u5jFZDmNF03MyLMCgGFTuIyK7CAsWrkDuOw5dsE9E7BkjjNft0rh1aVHBMhFoi5IlwI16OLsWtPw%2BQ%2BKtivR42k%2FvcEN9jOX163iAx2%2FOfduupfWsRRrOMnJDwYa2e5av%2Ffv%2FBz0h%2FrxEO%2B75TsEMM63l1Oc10nLeBZHDpQmV%2F0F3FhaT8hwKoMe9%2F5fLiHCxnsO8XTDSAe0U2QJHO934s82mXxu5yp9%2FzisVmLyVyzvg%2B21Z4QCYX6HqGpwj8NmGfwUCFTpeRsRzZWhBupfW4tHatWgghtKNpW9GCf75t8I6HtLohR68Lcy8ZmqvA3q%2FGkwi%2FGukpLhbEPK2L%2B6QTp6Y3QMnPPTB4heRuutfJnJPy%2FO%2FIqrECEKobmDSnUc1T7k6m9bh4FaYjWIOH9x0hasHIU7ietwbe36W%2B9hXn9NE8DYX%2F19GO3ZzFByt4z8haI6jexWwDpoWy6nY2XsUx0j2QkukwaMO%2FdtcsGOqUBkRbAWsvgP6s%2FotcPWRcQnmo4GhxOq1w%2BdqjKiW8w4j95aHmpdU2GFhGuP51wPbnR%2BQIVupex3JSi21u9sLWMHLi2yx1RWvNt3ng9gtDL4XruL3xK6NZrr%2BXHvpRFKPAKfjXf%2FUf5Q6XoVm2o2%2BM0Tk%2BFAVoyQKa76c41%2BI6JsUJLcYuICgCwr%2BGimOh%2ByF7xn%2BI4RqiRpI1keeR%2BPMvcJDXMPsbv&X-Amz-Signature=2fc87a2cda7ce6aa7ecb23158c14df1a76532eb646d8a8d314fdfccfbdbe12e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSBMIKK%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXwIRtZc71iPqCbgCBlCEBBvIWZanFlwJfGf7dwrB3BwIgKQdSF6ghyK1CTmJ%2FbuQEuZHTSppKP7xCPqaRsuJWY0cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhEhWUMnoCI4%2FuoOyrcA2%2FW%2B5A6%2FSBvupu%2BJQT6BdU8SkKdqS6KerDPf6E%2BOwL7MILJM85wP%2FL74FAjN63NiLjW7HsLOaAvx%2BAmq%2FdZ0YDyaK4AiiKz9GUeJ4d%2Fodr3rNHtufOpSR1Spo%2F8OJF7aZYTRq%2FTpGX0rjn8VUExQV5hfqFI%2BW6VCLKc96E5AeaTF93Cj%2F%2B6an1BWJNK2MRKT9wowrkyPTdx2oFURakMBWJeUc91%2Bwb0h%2Fn9vHysF4ToOL5v3KajK2KR8YT4yBiX6MgNMXuEJRpnYakHshvbAux7Oq42Y%2F%2BwP%2FRk8Ndja9plvTvJ0j8DZYh%2Bz2qtI1VfRsYLl6kVrTa9mpmw8M5YuVWg8ByhJwLsj5BBV49a2nQpGeWmsac9c84JqAxch7KXg5cvdMLsqsQY5XyNVKVf78SD8AFhelQkyH8QhIOTLmiO4ZQs51YD01pseFbMMNBXsWV0BKGIzThrilZ8eKkAhW5NqlSyzT7LJUs2PPO1JAoOLoXGUl5%2Bf%2F8tZfK%2BVt%2FbaToUnxLL9xwIg56PKmMWeadChUhdZQbrLas8LLasoT%2BY4%2Fdends%2B4yLi6Iw01BAJMv%2Fp4yF7ekAWPq44vaXKSBUOnrd5cvENgT%2FYeRJi8unIOg7rv1Ve07qYcJkoMJvdtcsGOqUBj643IDQAKv4RG%2BkKIMIvESJ4%2BP1J30GqriKWJWev%2BROOpkSkoegoYU8%2FeQx4wVWERe2XsXe7as10V69O%2FG6%2FGxKQKM%2FtIiQkuWBA%2Bi27iG9zoxgtZTb0yvXFVRNWAOQk%2FElsZLk%2Bnd%2BrAeGnR%2FUkowkX9l2yW5UBi9pTqv5JL%2Ftcm7ktVuUbgHBjre%2Baz8lLeIKDSmF%2Bj1hVRbdt0FZ1Ihr9Bs1a&X-Amz-Signature=e0f82837c9803d5a528c29a5ae3ebd0b63846a7fb5b1876289270120206ccddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQMEYUK%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKpppAl3yw%2FIyvyntF4ucrT%2BsCamx%2FwAo0Jbv3f5LlZAIgBp0mQEPN0F%2BQO9OjA88Cd%2BT6b2oojf%2Ba3ZeGyeFtRCcqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwLMaLr5G4vf7wifyrcA4gYWxnygLYEjIdurjv2nZWHwj3m5IaPjWulfQDd39R2%2FM72bV3alU3owXCRn7AW0K0k6kpk1VcoCFh2NvsEuDA5HuRMmLpM0qtWww4Q%2FHQFPssAqrkn9Vp6w3NnGlLfFvlhf0LVhAe2YCbgN3Lku3ALi2Ur53QCX%2BXaPp64z1aGI4yflo4eUcRIyMDrdexanu0am8eGRHNMETWF86%2B%2FBSthbV9nMSQUGuJMxoqwbc3S3AEWmTmXQIoYryK7%2F4Tspk9E7ok1UvxiCrOlyDqviVHofA7ATSfFuxerekzsXEfCjYDQvaUYIf1K8PYzb%2BtvCZ87rVweThz0L025SsYa6fXK%2BvBOgyG4m8MVXb2NPTdpv2YzxRe4Ep3UH%2BSPbf4ZksOymboLwB5nF8bGyGkeb2cTzyB6j6H2B11HiJj91EMMqCRoFUhbHi5e721ms0DQP4y8CGbFybpnO2vlL0gaeXkEIEnx7u6VPbTJmaGFUhDP8EYcWMoQr2lybXwdoy%2Fu7fX6gCxC0a4j1evBvHr5e6%2BsFDlI7nWWkk8%2F5f2VSw0s5SbcEkNlUMG0tECim6C4HI%2BngdOOaNyse%2BUb4FM7uUrBSk2STWSg%2B4k3Dy5rz0WeoXG%2FrRWIaPWBuFmUMOnctcsGOqUBIgxjrj%2BtfyFJiCPVZiw2980s2R8JtY7BddPclQcIv2Ljb2%2FxN1xhVnOgeiLDxjW%2FNKZD8SGCHB2Thi6JotuzAGmGzwx25B32EokFHAewxZL0Hfawet3idZCP5X7tzKMxzHO4SpDb09PPNIlZitTxf1uDc68ra4z0eNSROA3f980BFcRTklo1RDTOetewMtw10Pm05WKcoQZr72hzVSyhIpgvKiPS&X-Amz-Signature=9e5580d8f22e2c51d3c6c0ef1ea8692dd37df801215c461ffaaf7c67365ac9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSBMIKK%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXwIRtZc71iPqCbgCBlCEBBvIWZanFlwJfGf7dwrB3BwIgKQdSF6ghyK1CTmJ%2FbuQEuZHTSppKP7xCPqaRsuJWY0cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhEhWUMnoCI4%2FuoOyrcA2%2FW%2B5A6%2FSBvupu%2BJQT6BdU8SkKdqS6KerDPf6E%2BOwL7MILJM85wP%2FL74FAjN63NiLjW7HsLOaAvx%2BAmq%2FdZ0YDyaK4AiiKz9GUeJ4d%2Fodr3rNHtufOpSR1Spo%2F8OJF7aZYTRq%2FTpGX0rjn8VUExQV5hfqFI%2BW6VCLKc96E5AeaTF93Cj%2F%2B6an1BWJNK2MRKT9wowrkyPTdx2oFURakMBWJeUc91%2Bwb0h%2Fn9vHysF4ToOL5v3KajK2KR8YT4yBiX6MgNMXuEJRpnYakHshvbAux7Oq42Y%2F%2BwP%2FRk8Ndja9plvTvJ0j8DZYh%2Bz2qtI1VfRsYLl6kVrTa9mpmw8M5YuVWg8ByhJwLsj5BBV49a2nQpGeWmsac9c84JqAxch7KXg5cvdMLsqsQY5XyNVKVf78SD8AFhelQkyH8QhIOTLmiO4ZQs51YD01pseFbMMNBXsWV0BKGIzThrilZ8eKkAhW5NqlSyzT7LJUs2PPO1JAoOLoXGUl5%2Bf%2F8tZfK%2BVt%2FbaToUnxLL9xwIg56PKmMWeadChUhdZQbrLas8LLasoT%2BY4%2Fdends%2B4yLi6Iw01BAJMv%2Fp4yF7ekAWPq44vaXKSBUOnrd5cvENgT%2FYeRJi8unIOg7rv1Ve07qYcJkoMJvdtcsGOqUBj643IDQAKv4RG%2BkKIMIvESJ4%2BP1J30GqriKWJWev%2BROOpkSkoegoYU8%2FeQx4wVWERe2XsXe7as10V69O%2FG6%2FGxKQKM%2FtIiQkuWBA%2Bi27iG9zoxgtZTb0yvXFVRNWAOQk%2FElsZLk%2Bnd%2BrAeGnR%2FUkowkX9l2yW5UBi9pTqv5JL%2Ftcm7ktVuUbgHBjre%2Baz8lLeIKDSmF%2Bj1hVRbdt0FZ1Ihr9Bs1a&X-Amz-Signature=6e64662315359eca2b100cb8d3d5fdf3a64c8e354080a2d6a0741d87603fef3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N664PYK%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZ6P2DkqaRS1TreGltfCpLTgPWjPBDmqdkFnEc38P3SAiEArHTNvD8%2BZUXCeslaMxfyaJXxZuH7iTiI3nBTL08Mlh0qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQIWPTJuT2Eonv7uyrcA7iErlVxJqSkmHPKYfPcTYkb2bLpBfKrEuK6s7g1HibV%2FRzGoBVGS%2B%2B00Cjc%2Fovmnasd9A5B%2BGLnXL526ozfkAeeGnlu6vf69CIoCscHmnG%2F2cB3PAPKOnjW19IY%2FYVB3J3Emfwo%2B44O7wOGI9SZWtoa6tUiLth38lJ4j%2FGDR6UL0wgRy9NLQe%2BHQUs5l2p%2Bk0sALSfciZywQ%2Fb6sUasXxOVSorANaJMDCB901gkCZ3J7XQV%2FUiatkLIvf2Rkr62VrZvbSUvPsApfKA6%2F%2FAxKC5IS%2F6J%2FnBKWZO1cirwAQVrT6nAXOyg4%2BrIYLHL6Qby19l6KA9WUNaE2DpzZ9r9IGWOJdgFk1FXN2Qjw7fSCftcSjHdcK4obY%2F%2Fv7BbXX94sQRZ1MLOGLIyJMzssayRixMG7OKgCJGup3eQhD53iU%2BgwmB2xtJbtaziVb9H2%2BMqF%2BbawMHckzV5cIJUNucPyVaCmm7pZ2XHgvSoHHO25WSTNaNOdhuLgancR7aCzxZHxTtn0Py8YGQbCxGGIFZcw7SHUpCOuyBHkCdoM0XSBEVNlNwE3Ar11dgAeo8wGRT7FSBfXLo%2FuX0iicE36sE5hrr5PDVx6YQcjL7g5aM9vWcKCwBT%2BG7qcLY5BEHzMJ3dtcsGOqUBR3glTdn0XnlP7bDDS%2B7geBElFSWYW1FQPBZUk3VPKo%2BBtRAWL8AJkdGRWABiG8fzI94bsZznYIdI7n0RJnzN9kPwFe8FMvN8Y3sdBeaJZqCGAzx3lusu3hJeF2Kyey3xI%2BcC%2F1lW3ekt7RqBOlvLY6QvfyEOjmW7fqevHav%2Fw3GYrEhW9r%2FCbJf3QS2ykHx%2FoHJa9C%2Bb2A5PqY6CzaUk56G5HXzK&X-Amz-Signature=f3e2a076f8518c407ea0c7a2a4684415ff6c7fb477f904e7e2866c44d50dbc16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSBMIKK%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXwIRtZc71iPqCbgCBlCEBBvIWZanFlwJfGf7dwrB3BwIgKQdSF6ghyK1CTmJ%2FbuQEuZHTSppKP7xCPqaRsuJWY0cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhEhWUMnoCI4%2FuoOyrcA2%2FW%2B5A6%2FSBvupu%2BJQT6BdU8SkKdqS6KerDPf6E%2BOwL7MILJM85wP%2FL74FAjN63NiLjW7HsLOaAvx%2BAmq%2FdZ0YDyaK4AiiKz9GUeJ4d%2Fodr3rNHtufOpSR1Spo%2F8OJF7aZYTRq%2FTpGX0rjn8VUExQV5hfqFI%2BW6VCLKc96E5AeaTF93Cj%2F%2B6an1BWJNK2MRKT9wowrkyPTdx2oFURakMBWJeUc91%2Bwb0h%2Fn9vHysF4ToOL5v3KajK2KR8YT4yBiX6MgNMXuEJRpnYakHshvbAux7Oq42Y%2F%2BwP%2FRk8Ndja9plvTvJ0j8DZYh%2Bz2qtI1VfRsYLl6kVrTa9mpmw8M5YuVWg8ByhJwLsj5BBV49a2nQpGeWmsac9c84JqAxch7KXg5cvdMLsqsQY5XyNVKVf78SD8AFhelQkyH8QhIOTLmiO4ZQs51YD01pseFbMMNBXsWV0BKGIzThrilZ8eKkAhW5NqlSyzT7LJUs2PPO1JAoOLoXGUl5%2Bf%2F8tZfK%2BVt%2FbaToUnxLL9xwIg56PKmMWeadChUhdZQbrLas8LLasoT%2BY4%2Fdends%2B4yLi6Iw01BAJMv%2Fp4yF7ekAWPq44vaXKSBUOnrd5cvENgT%2FYeRJi8unIOg7rv1Ve07qYcJkoMJvdtcsGOqUBj643IDQAKv4RG%2BkKIMIvESJ4%2BP1J30GqriKWJWev%2BROOpkSkoegoYU8%2FeQx4wVWERe2XsXe7as10V69O%2FG6%2FGxKQKM%2FtIiQkuWBA%2Bi27iG9zoxgtZTb0yvXFVRNWAOQk%2FElsZLk%2Bnd%2BrAeGnR%2FUkowkX9l2yW5UBi9pTqv5JL%2Ftcm7ktVuUbgHBjre%2Baz8lLeIKDSmF%2Bj1hVRbdt0FZ1Ihr9Bs1a&X-Amz-Signature=60674e7861f809f939a3fc44ad4b1e72699d837a77c1f6ae8bebf53894094afd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RDMMWPP%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr%2FdaRsYzuOvJ8unnh7A1jLZjKqAs2UXeabTmRX7pmYAIgYT497ahnTKS4tHBdQ4i42pextWwzWHIjt67xebOv4n0qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOznANR6FGlz8GqpAircA9S%2BsCv2NVujAytGq4ph3em5XntV9UZKLgaEwP5m5cDcNMw05N6%2BfgAOZx%2Fbl8Y4B3EYMNzUsJQD9MBcMguQcC%2FF2071Ds5kfJGjnYFkYH6CGkOU2f9UEazOGq9a4%2BN3Jr%2B8cWmI1SUiAmr4mv0DHOKHfivcU2s%2FzuK9NS9qAmx%2FMTku3frbyUT%2B0uTSTuHDNedbEnV4GCoo4HIvDe7bUJ2XnHsYmlxyVL2TY1bKYl3dmagq%2FISCPExmjV6kT3SmmzBJ%2FqhbbEoR%2BQMDm78oholZgUfrNTKRzY%2FwLl0ETDp%2BoBS52NG3nPeTca0uEaXe0jPhEYEGNxsBPZBIIXJ8FzPLp%2Fi2Nj71YMGacfHdE0QeyyaCyXS9LscpUGBhG6ACNBr%2Bu6n%2FFVdNjVDr26B1VpLy1sB%2FXFkU6KgGCUusElq21%2BOcmppLJOpDGbnhUkl6Iz28wZHkzIeYrMLpz9%2Fz4WXBQlwaI0jLTSzbKJvukVjFZzyYMXv9Ov%2FplgkXdU5pviLjYzUT%2Fzzyd%2F4fFVBm0l2zvlFTJ00qDRtfT9Vyd%2Bsgo6eT2E9jaa2%2FwCiVn2gOfUcy6gmXaGBmGudM86zVFpmE3yELPobVKAL78455pgzMt09UQBu9RWV44OLRMMfdtcsGOqUB%2BTyO7jpbDMCBDCNB%2BbX508WkxGTo%2FdoV%2Bahvr6QHtLoFMp4uKmZ2Sv6MXzmistFP9PYVcLQj%2BUihpyx7ktj%2BxrWL%2Bg2fFr1afoJKii5QK%2BqOG9q4BceCPG2DSSi1vb1s2js8GzTa6PszDJrztZoNyjRetSz0C4hmmvkyR8%2BbzO4UhvNdAsMv5hYRIk2KqdhZAesv6Cc%2BldyzUIi7r%2BhfJzg%2Bqjse&X-Amz-Signature=67ac6250da6037a288cfb76cec278db29b48a5c9c64554f9ea1de26445f866d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSBMIKK%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXwIRtZc71iPqCbgCBlCEBBvIWZanFlwJfGf7dwrB3BwIgKQdSF6ghyK1CTmJ%2FbuQEuZHTSppKP7xCPqaRsuJWY0cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhEhWUMnoCI4%2FuoOyrcA2%2FW%2B5A6%2FSBvupu%2BJQT6BdU8SkKdqS6KerDPf6E%2BOwL7MILJM85wP%2FL74FAjN63NiLjW7HsLOaAvx%2BAmq%2FdZ0YDyaK4AiiKz9GUeJ4d%2Fodr3rNHtufOpSR1Spo%2F8OJF7aZYTRq%2FTpGX0rjn8VUExQV5hfqFI%2BW6VCLKc96E5AeaTF93Cj%2F%2B6an1BWJNK2MRKT9wowrkyPTdx2oFURakMBWJeUc91%2Bwb0h%2Fn9vHysF4ToOL5v3KajK2KR8YT4yBiX6MgNMXuEJRpnYakHshvbAux7Oq42Y%2F%2BwP%2FRk8Ndja9plvTvJ0j8DZYh%2Bz2qtI1VfRsYLl6kVrTa9mpmw8M5YuVWg8ByhJwLsj5BBV49a2nQpGeWmsac9c84JqAxch7KXg5cvdMLsqsQY5XyNVKVf78SD8AFhelQkyH8QhIOTLmiO4ZQs51YD01pseFbMMNBXsWV0BKGIzThrilZ8eKkAhW5NqlSyzT7LJUs2PPO1JAoOLoXGUl5%2Bf%2F8tZfK%2BVt%2FbaToUnxLL9xwIg56PKmMWeadChUhdZQbrLas8LLasoT%2BY4%2Fdends%2B4yLi6Iw01BAJMv%2Fp4yF7ekAWPq44vaXKSBUOnrd5cvENgT%2FYeRJi8unIOg7rv1Ve07qYcJkoMJvdtcsGOqUBj643IDQAKv4RG%2BkKIMIvESJ4%2BP1J30GqriKWJWev%2BROOpkSkoegoYU8%2FeQx4wVWERe2XsXe7as10V69O%2FG6%2FGxKQKM%2FtIiQkuWBA%2Bi27iG9zoxgtZTb0yvXFVRNWAOQk%2FElsZLk%2Bnd%2BrAeGnR%2FUkowkX9l2yW5UBi9pTqv5JL%2Ftcm7ktVuUbgHBjre%2Baz8lLeIKDSmF%2Bj1hVRbdt0FZ1Ihr9Bs1a&X-Amz-Signature=a18e9c6297bbfdeae05af0a393c2a1fe290b8f3bdf142087d5af879a4a096d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBPYRC2%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5aFC87pG7%2FGn%2BFlTNUILT3sVzI6V3ROOiAEEgxI4wNAiEAt0I8YOqkm6P%2BeNZ2mOJ24gpZhjM1QKxwBiXDGvJ%2F4BAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPZptqW%2F4KmyReVbircA2ZmiKBwOezbAAkjuFCxrFCUH70RGvXbKSd2bsgmkfWFuGWT6FnVoPkwQp6skUZH4yJ5Gb7dDMkKPuIuOrFqs9H3z4hh93PMP2nGjHeDzbAx7ulfOgrxXQq%2BmxmpIIKh2TaTpqGmJiCXw74mDq84K3ZkvpaN39YuIZnnGhxqnMm%2Fn49eXK0Ucjjq%2B4iFuj9foBsgJi%2FJXUanYJNhZFPHnf9hg%2BkTtKN8tM6%2FONubG%2FufLyEIOBlwEk%2Be0zhdCINs5k0mlg5dByisGdEfpi5a1DSTTfOpntmgrZxFnpN7K%2BpyCO7hhMhd7meVdJOIjPFU0F8%2FYejO6odS%2BAMn5WU%2FVQ6y6%2BdtcNJVg6F1w8%2BGsiqtKQ5tQgi1aDM7q8NzNi4DNTLj7BwaYqV%2BTWn4ZPa3NS3JnRiEXs7sMIG2BsMsK6HWWA%2BTueSSFGYPs98%2F5TxxPy0il%2BafIMBRgkRsZMG%2F64h6z4DvNnGSRAMmHW9WN%2Bq4inOoYr2%2F9lifCy33BOQ0oPkR2WfvqUvG7YfXs%2FiCphu47BFUrK6D4NoWNaT6fM2ynKAfSXYnYJYZ0YDjEckU%2BL%2BgvtdROiqU3O%2B%2BZc%2FbtFlmUiqqfLj1A%2BUnvtenDzbxTzZQutj0VWS%2FMKJuMPPctcsGOqUBmbnUHJBPBjeVgdqQxhW7HE8TFmYvg%2BvV%2BNTkXSmTc4igumYXSsxAlFhM6NCu71NwTj48S%2FSr1dX6DVn5UWaYEWTlhyvmf39qrDl81Rogm6RrLVj84xzv1icePv4xR8lgoEi6JQW5Bz4DQM9BX0IiHS4bmxmUy3HTgUmXN%2BhzsBVOcPwI9A6ViaUHcsjWQJJrG4X5oJwMuexdwUjrNb6HwPgndf7G&X-Amz-Signature=47217914605954a7b3fe4c5c704e991f0503f4603b7f452d9863096b74781f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QO7FGEB%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaZNzGf27%2BzFHZsF7B8xiy%2FcAQalBA%2BJhdA7Y7UKyrDAiAIB7LpRnFJVcCgMOtr7iCQJ1YNC3lpOnIuii07cdivoCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1wGQm018jOa3yX3XKtwDF17d5vrEPzsGBUieEjarWNzaBUGnXOzEdVo4gafX4xppKGL7SwsgAfwsQfN1Wf1tlLWpavoXYctWZWL1v%2FI%2B%2BMAre8uM5te40oCkF1yAUXj3br4bLNSSZmAfInuf8A8FB14pOZXLRWmnY%2BakIvOaPX58ZDJOOJ5G2x%2Bnk%2FteKHh6ctoi8IsmWyOzJrEK%2FtICXk6S92Nwk4yAN2raYeQMIJ9ostP5DPj67SoaR%2FCkGA6JDi%2BaXHLsiyyo4e3qU0V1U27AIByiT0sKNr%2FAT2mdAyNp%2BR4Pjeyh6EpCwXLnOP%2BKEZXdRVJIWoFCdEuUHvZv4lp%2FvePgM%2Fipv7OjBbXsPH0ASB4KqY4rJaoqJiyKFZJzmN03xAcKl9Vk0YGaP2GoCi8EQufdIduhbgrHjOa5ACpcYfKmuRqhKj38buIJIc8v2w%2B%2F4BlQNI1%2BYIsv9cKlzAMl7xDcB2TmAQq5WwVcRB416s0twCFAXjsOzquMT7YP81JBup8LW2uf3ochb%2BvpWL2nLfQVfbDUJ%2FBZhD5GIoulzGhpMGiH3bl7jEdaPk086Ytr1garbWhv8OdV8Ew6S89CppP5XkYDctrrYNWRLw1OecD1BG78WJZgLrLkmOMKyV2qiWhHtJEYIIEwmN21ywY6pgFYvtKJu4%2FbZKWGUeu5gNE6Bh8yhuZ5oEl54RiiDGluBS0iTYkETmzTzsaooVpvHTIwaaL%2BVIpeMxZUJGsYwrVt1NYNei6uvGpqr6xzvVQXU9duHywCqiLLQeRXLnXq7gEf06jFxSiAVepfXpmFT3Ov7bGdL0DPEOwrxxkDp2NshbgEF4G7isSgC8dpkMmUOPXXgUM99%2FOShrOC1vA80wcCppewrZcy&X-Amz-Signature=3aea2adc91756e77edbc20d43d5b509ebdab0624ea691467bf5df6d3862ecb3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7EEXWBZ%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqfFBUzGIDdSda4HTMmfZNwq4i2waj9QQxLb8Fq9J%2FbAIgWc3nRwVEkPHjEcxyCKkB7uDDetnvPsW1fGkZpdg1JOMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOd1%2BIomTCYGfqenHSrcAygkQQ15378cBrgRiBSAYTZP1cr3bT8ePJwtC5odoUC%2FFdxSVvr1%2BJQG109NF8br%2BAYifC1cFjZ4cawP2kePUHaQfvprAC4d53BWgNZajgPFb9pnB1neT5cpw2QRlRFlBQ3Z%2BzN5qb4wQpIlSniq6nKvIDbZalWj4uwrU8CgDhtJQicBvcIMjhc7dO9E0%2Byl%2Bb1idiEcNJHUqyzxsXsR7dN9k%2F8DkhiZNQlNta9VVJ4xVvQmyTpMsoaRTPi5lPUHxlFz5lbrw49Dv1avircwgMkZm%2Bfw9JSfYcpLgKGaIlIsiOUX6909%2FjGwHxSQUVntJjugJ4766CNMxEXyQsR7B9Kcz%2B5%2BQ0EZ6Ea07hfvH77CLy%2B72jSbQo3ABvRRWcdwsvQpFXYqIPgbQxqAg8HaFDPqdfn%2FdgobHw7hsry8m3szo1dRlLo5wMgrdZnAGrVRs0BE5NP6V%2FKFc9tJtJZTyNRQ4orQbvMqvsb0jPWwOOWumBJiQCaZlBSypqRxHHkMM1nDZizK2IzgYAFTgVECK35ZufyMVPyx7Jh9SYT1VSttUVrAHlKen4Sh09KNVc%2FyNYZWDDUECdh5nRR7ZHAvnQPjnHKjBi5Iqfgdv%2BYUW%2FenbCA9rhi%2B5NZVhmvsMJLdtcsGOqUBuMlNWgkVgKTS%2FbMC0Ibk6MUI1tkH0kYRxr6UyRdi9cvPLuDMR9HIldZniWTZyLPx4QCq50RQfCiBCVCYJMD9x2L%2Fvzc8ON9CnDngIjD%2B2Zp8%2FAmNNQ8gD%2Bl0kq9zXUFjVVxkFk5vC31tRyhzELMF48og4xnBYERwrTlLrtaWh%2Bbh0lgFgtTsYDHTwUJNb13WXrS8MIA5vV1keuYt3mtgJkRXU%2FkH&X-Amz-Signature=8d23aa9f92ff6d9c58b2ced34b4b272625db008038a2707aead513d32c943f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSBMIKK%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXwIRtZc71iPqCbgCBlCEBBvIWZanFlwJfGf7dwrB3BwIgKQdSF6ghyK1CTmJ%2FbuQEuZHTSppKP7xCPqaRsuJWY0cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhEhWUMnoCI4%2FuoOyrcA2%2FW%2B5A6%2FSBvupu%2BJQT6BdU8SkKdqS6KerDPf6E%2BOwL7MILJM85wP%2FL74FAjN63NiLjW7HsLOaAvx%2BAmq%2FdZ0YDyaK4AiiKz9GUeJ4d%2Fodr3rNHtufOpSR1Spo%2F8OJF7aZYTRq%2FTpGX0rjn8VUExQV5hfqFI%2BW6VCLKc96E5AeaTF93Cj%2F%2B6an1BWJNK2MRKT9wowrkyPTdx2oFURakMBWJeUc91%2Bwb0h%2Fn9vHysF4ToOL5v3KajK2KR8YT4yBiX6MgNMXuEJRpnYakHshvbAux7Oq42Y%2F%2BwP%2FRk8Ndja9plvTvJ0j8DZYh%2Bz2qtI1VfRsYLl6kVrTa9mpmw8M5YuVWg8ByhJwLsj5BBV49a2nQpGeWmsac9c84JqAxch7KXg5cvdMLsqsQY5XyNVKVf78SD8AFhelQkyH8QhIOTLmiO4ZQs51YD01pseFbMMNBXsWV0BKGIzThrilZ8eKkAhW5NqlSyzT7LJUs2PPO1JAoOLoXGUl5%2Bf%2F8tZfK%2BVt%2FbaToUnxLL9xwIg56PKmMWeadChUhdZQbrLas8LLasoT%2BY4%2Fdends%2B4yLi6Iw01BAJMv%2Fp4yF7ekAWPq44vaXKSBUOnrd5cvENgT%2FYeRJi8unIOg7rv1Ve07qYcJkoMJvdtcsGOqUBj643IDQAKv4RG%2BkKIMIvESJ4%2BP1J30GqriKWJWev%2BROOpkSkoegoYU8%2FeQx4wVWERe2XsXe7as10V69O%2FG6%2FGxKQKM%2FtIiQkuWBA%2Bi27iG9zoxgtZTb0yvXFVRNWAOQk%2FElsZLk%2Bnd%2BrAeGnR%2FUkowkX9l2yW5UBi9pTqv5JL%2Ftcm7ktVuUbgHBjre%2Baz8lLeIKDSmF%2Bj1hVRbdt0FZ1Ihr9Bs1a&X-Amz-Signature=cec1f91688dcc4fd310879c80ad2344546d8b23aae12e3dcedb8f79ab6c7a99d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSBMIKK%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXwIRtZc71iPqCbgCBlCEBBvIWZanFlwJfGf7dwrB3BwIgKQdSF6ghyK1CTmJ%2FbuQEuZHTSppKP7xCPqaRsuJWY0cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhEhWUMnoCI4%2FuoOyrcA2%2FW%2B5A6%2FSBvupu%2BJQT6BdU8SkKdqS6KerDPf6E%2BOwL7MILJM85wP%2FL74FAjN63NiLjW7HsLOaAvx%2BAmq%2FdZ0YDyaK4AiiKz9GUeJ4d%2Fodr3rNHtufOpSR1Spo%2F8OJF7aZYTRq%2FTpGX0rjn8VUExQV5hfqFI%2BW6VCLKc96E5AeaTF93Cj%2F%2B6an1BWJNK2MRKT9wowrkyPTdx2oFURakMBWJeUc91%2Bwb0h%2Fn9vHysF4ToOL5v3KajK2KR8YT4yBiX6MgNMXuEJRpnYakHshvbAux7Oq42Y%2F%2BwP%2FRk8Ndja9plvTvJ0j8DZYh%2Bz2qtI1VfRsYLl6kVrTa9mpmw8M5YuVWg8ByhJwLsj5BBV49a2nQpGeWmsac9c84JqAxch7KXg5cvdMLsqsQY5XyNVKVf78SD8AFhelQkyH8QhIOTLmiO4ZQs51YD01pseFbMMNBXsWV0BKGIzThrilZ8eKkAhW5NqlSyzT7LJUs2PPO1JAoOLoXGUl5%2Bf%2F8tZfK%2BVt%2FbaToUnxLL9xwIg56PKmMWeadChUhdZQbrLas8LLasoT%2BY4%2Fdends%2B4yLi6Iw01BAJMv%2Fp4yF7ekAWPq44vaXKSBUOnrd5cvENgT%2FYeRJi8unIOg7rv1Ve07qYcJkoMJvdtcsGOqUBj643IDQAKv4RG%2BkKIMIvESJ4%2BP1J30GqriKWJWev%2BROOpkSkoegoYU8%2FeQx4wVWERe2XsXe7as10V69O%2FG6%2FGxKQKM%2FtIiQkuWBA%2Bi27iG9zoxgtZTb0yvXFVRNWAOQk%2FElsZLk%2Bnd%2BrAeGnR%2FUkowkX9l2yW5UBi9pTqv5JL%2Ftcm7ktVuUbgHBjre%2Baz8lLeIKDSmF%2Bj1hVRbdt0FZ1Ihr9Bs1a&X-Amz-Signature=469acb22b5c733c386fc64d070025cc0fd3913fe708c1e0fb1970da0d8eb8459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7AGQ4P%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJCljcKSUyb0uQsz1Pp6jAe4MtFhxKBMmciRYxYFbUXAiBzTftRbv0s9bjzABGgp7R2nd%2BKEZH2%2F%2B8d7go0SUjwMiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsUoOWuWTdTsRGvX3KtwDxbzZIYuQYQC%2Ft8uyJOeZDejQRl0vgyyF0bwN59dOvvkbNSiHRNlX69NuDpRxFqIBs65zEyX9IGE0J9KGsYoFSQmbMyzFHIlUYybWxkJQVcXLPifnMo5%2BX%2B4bHyyXWwC7iPkpKHedX0ioKfdDnSp9wLz9jAbTCejcRMCFuGD6t0s5lLq8YEE4DZNJkYtrBzdxWQFLu%2FLZXUa8jVtsSL2zpolEWAA%2B74lfV1PcqBxatyrZRGSuoX9fsUt7W7wwLm9S6B4Iv9yV5wSF2K4kPs53YIHkb1En70S%2BdQiM4lL1nsNnH5%2FFUePvFFImpZdCsxWehwbI%2B07sSxLYfI1mPaL1QZsBt3u0mAl4hso1mMuSNn76sqwVMoDhHgbByHeaFQsR6Jzw3HR1nQj%2Fxl5gcC5agvcQn6G0vqQk3nSKARQS9nl6PcomHULoh7BEhaIAZXlY07wEmj4K0I1kXAhlifMM48ijG6CEfjFAuVNf3A2aOFU83SWox96kTGunv5nY3rPg6mm12W7nEQJRvQTL90ELLBGCjFBSEjzut3sh5yea%2BZHpzpD72jjyS%2FU72eKPXuuRz8MPW0Htfx67wmC2aq%2Bll53IZu8UVqE0BISNUvdfBjY7L%2B9EFI26X5NsRz4w89y1ywY6pgFXTmmj7w%2FmJBFmkVEJxfDP9yqhEwW3V9nGmaAx0HOmEbQMjDEKxY28kG9cKiVNmD2vBjsOmvU2DJzZF0sAy03dC4gN4UZX7LVWl7f%2FHgR1nhhZ9KyBICBfXF96xtvFwncBfQh9EPKrzF2%2BNKYbgb6hjOjh98EsCtCTl2Zm%2FJ4GU5NNmKqODm%2FbK9wzhvlXVWNwXfqu7yFtW17UWiE%2FFdjGtjkzbX7j&X-Amz-Signature=d5f9979924127007756272616e824c0316ba091e1dd7bb4d3db688b3117c6aba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7AGQ4P%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJCljcKSUyb0uQsz1Pp6jAe4MtFhxKBMmciRYxYFbUXAiBzTftRbv0s9bjzABGgp7R2nd%2BKEZH2%2F%2B8d7go0SUjwMiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsUoOWuWTdTsRGvX3KtwDxbzZIYuQYQC%2Ft8uyJOeZDejQRl0vgyyF0bwN59dOvvkbNSiHRNlX69NuDpRxFqIBs65zEyX9IGE0J9KGsYoFSQmbMyzFHIlUYybWxkJQVcXLPifnMo5%2BX%2B4bHyyXWwC7iPkpKHedX0ioKfdDnSp9wLz9jAbTCejcRMCFuGD6t0s5lLq8YEE4DZNJkYtrBzdxWQFLu%2FLZXUa8jVtsSL2zpolEWAA%2B74lfV1PcqBxatyrZRGSuoX9fsUt7W7wwLm9S6B4Iv9yV5wSF2K4kPs53YIHkb1En70S%2BdQiM4lL1nsNnH5%2FFUePvFFImpZdCsxWehwbI%2B07sSxLYfI1mPaL1QZsBt3u0mAl4hso1mMuSNn76sqwVMoDhHgbByHeaFQsR6Jzw3HR1nQj%2Fxl5gcC5agvcQn6G0vqQk3nSKARQS9nl6PcomHULoh7BEhaIAZXlY07wEmj4K0I1kXAhlifMM48ijG6CEfjFAuVNf3A2aOFU83SWox96kTGunv5nY3rPg6mm12W7nEQJRvQTL90ELLBGCjFBSEjzut3sh5yea%2BZHpzpD72jjyS%2FU72eKPXuuRz8MPW0Htfx67wmC2aq%2Bll53IZu8UVqE0BISNUvdfBjY7L%2B9EFI26X5NsRz4w89y1ywY6pgFXTmmj7w%2FmJBFmkVEJxfDP9yqhEwW3V9nGmaAx0HOmEbQMjDEKxY28kG9cKiVNmD2vBjsOmvU2DJzZF0sAy03dC4gN4UZX7LVWl7f%2FHgR1nhhZ9KyBICBfXF96xtvFwncBfQh9EPKrzF2%2BNKYbgb6hjOjh98EsCtCTl2Zm%2FJ4GU5NNmKqODm%2FbK9wzhvlXVWNwXfqu7yFtW17UWiE%2FFdjGtjkzbX7j&X-Amz-Signature=4ec471c9d24b195a02eac65fe4664a64f748a6c057f7a87fef6d7d837fc66768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7AGQ4P%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJCljcKSUyb0uQsz1Pp6jAe4MtFhxKBMmciRYxYFbUXAiBzTftRbv0s9bjzABGgp7R2nd%2BKEZH2%2F%2B8d7go0SUjwMiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsUoOWuWTdTsRGvX3KtwDxbzZIYuQYQC%2Ft8uyJOeZDejQRl0vgyyF0bwN59dOvvkbNSiHRNlX69NuDpRxFqIBs65zEyX9IGE0J9KGsYoFSQmbMyzFHIlUYybWxkJQVcXLPifnMo5%2BX%2B4bHyyXWwC7iPkpKHedX0ioKfdDnSp9wLz9jAbTCejcRMCFuGD6t0s5lLq8YEE4DZNJkYtrBzdxWQFLu%2FLZXUa8jVtsSL2zpolEWAA%2B74lfV1PcqBxatyrZRGSuoX9fsUt7W7wwLm9S6B4Iv9yV5wSF2K4kPs53YIHkb1En70S%2BdQiM4lL1nsNnH5%2FFUePvFFImpZdCsxWehwbI%2B07sSxLYfI1mPaL1QZsBt3u0mAl4hso1mMuSNn76sqwVMoDhHgbByHeaFQsR6Jzw3HR1nQj%2Fxl5gcC5agvcQn6G0vqQk3nSKARQS9nl6PcomHULoh7BEhaIAZXlY07wEmj4K0I1kXAhlifMM48ijG6CEfjFAuVNf3A2aOFU83SWox96kTGunv5nY3rPg6mm12W7nEQJRvQTL90ELLBGCjFBSEjzut3sh5yea%2BZHpzpD72jjyS%2FU72eKPXuuRz8MPW0Htfx67wmC2aq%2Bll53IZu8UVqE0BISNUvdfBjY7L%2B9EFI26X5NsRz4w89y1ywY6pgFXTmmj7w%2FmJBFmkVEJxfDP9yqhEwW3V9nGmaAx0HOmEbQMjDEKxY28kG9cKiVNmD2vBjsOmvU2DJzZF0sAy03dC4gN4UZX7LVWl7f%2FHgR1nhhZ9KyBICBfXF96xtvFwncBfQh9EPKrzF2%2BNKYbgb6hjOjh98EsCtCTl2Zm%2FJ4GU5NNmKqODm%2FbK9wzhvlXVWNwXfqu7yFtW17UWiE%2FFdjGtjkzbX7j&X-Amz-Signature=44ed5af620d46035d9992cbee6a70dfc691e81afe5d4a1b6b2afef6f7c735afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7AGQ4P%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJCljcKSUyb0uQsz1Pp6jAe4MtFhxKBMmciRYxYFbUXAiBzTftRbv0s9bjzABGgp7R2nd%2BKEZH2%2F%2B8d7go0SUjwMiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsUoOWuWTdTsRGvX3KtwDxbzZIYuQYQC%2Ft8uyJOeZDejQRl0vgyyF0bwN59dOvvkbNSiHRNlX69NuDpRxFqIBs65zEyX9IGE0J9KGsYoFSQmbMyzFHIlUYybWxkJQVcXLPifnMo5%2BX%2B4bHyyXWwC7iPkpKHedX0ioKfdDnSp9wLz9jAbTCejcRMCFuGD6t0s5lLq8YEE4DZNJkYtrBzdxWQFLu%2FLZXUa8jVtsSL2zpolEWAA%2B74lfV1PcqBxatyrZRGSuoX9fsUt7W7wwLm9S6B4Iv9yV5wSF2K4kPs53YIHkb1En70S%2BdQiM4lL1nsNnH5%2FFUePvFFImpZdCsxWehwbI%2B07sSxLYfI1mPaL1QZsBt3u0mAl4hso1mMuSNn76sqwVMoDhHgbByHeaFQsR6Jzw3HR1nQj%2Fxl5gcC5agvcQn6G0vqQk3nSKARQS9nl6PcomHULoh7BEhaIAZXlY07wEmj4K0I1kXAhlifMM48ijG6CEfjFAuVNf3A2aOFU83SWox96kTGunv5nY3rPg6mm12W7nEQJRvQTL90ELLBGCjFBSEjzut3sh5yea%2BZHpzpD72jjyS%2FU72eKPXuuRz8MPW0Htfx67wmC2aq%2Bll53IZu8UVqE0BISNUvdfBjY7L%2B9EFI26X5NsRz4w89y1ywY6pgFXTmmj7w%2FmJBFmkVEJxfDP9yqhEwW3V9nGmaAx0HOmEbQMjDEKxY28kG9cKiVNmD2vBjsOmvU2DJzZF0sAy03dC4gN4UZX7LVWl7f%2FHgR1nhhZ9KyBICBfXF96xtvFwncBfQh9EPKrzF2%2BNKYbgb6hjOjh98EsCtCTl2Zm%2FJ4GU5NNmKqODm%2FbK9wzhvlXVWNwXfqu7yFtW17UWiE%2FFdjGtjkzbX7j&X-Amz-Signature=b7ca0fbbe3496af3b568de761e6fb97ea92048e4eed98e6aecf4a5bb6562dabe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FHLFHZR%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhnMY6%2BsSgE54RxnpyhkvM7Cuk1pNDd9dKPvbGl5hVoAiEAmgjPRPimLIQDolgnZYTC5FLiVHDdv%2F5kmZKGkzqXWvoqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIH8Zcp9j0toiuijCrcA8ed1OSirDeYGEiGhw%2FcNy4KB2X43azJ6lvwWu5EE8%2FN2XkcqTVRqnUeTlE2xGc5CVeAU9nUNBHCYFvtyoE7250tcc5i%2F%2FG0JoM9O8gw5HHgX%2BLXEVRGKWOnnVlj53LKyU8%2Fy74q8uK8KWYuMVuaU5K0mSh9Pi7%2F%2FOtv3aFISHN%2Bjekdxxo8TGgq9%2BMx0l8XfwtGpbYJ%2BZJJHNeNOU%2B8RM0I%2BjYsn9PPq7zYiil%2Biw6SVQLtcO%2BcJHpuKTXGrY1qrfwmy995KuWeTN%2FeK0%2B499RfWKnbATaYbliXAH9u9TOQ6t%2B3kchopI7xqxjE%2BLZSBwFMbyni%2BdK6Vl127ZxFV57JoZ%2FohEAItJKkkc0jVafHMjZZUbAk%2BXIHx%2FNrgdqbokkR95kU4yCPqFkIEm06EylPjKqoXkYvSrfYO1id3T%2F2YfkUAW7KTO720MQ45LMM2sf5692h0RgC9ysnK7I6Db5tKFKdc%2BBbqBbqAS9RTZPVbLsK5PGF0QJH7s4hvvkN9cJWtRj5yhHeNg7QscnNIu88v8%2BPPWI3oqC9PvuheNoAF8A7oMMyxCm6vtqjpZusnrtRe5dU7BKpExB022HtRSWCpamiQSeTlIgpK%2F8FUJ0%2FAYHaghtf41gJ%2B7DQMKbdtcsGOqUBbzfJnb3uVS3q%2BoNmvs0D8UrdkRJ6zOo0bsIzyt1RBpDn2RNKfZywrnQlLS5brBNXyp%2B4AZh6BcA%2BNSNQiA5KCmjSNsq2dgfw3r1k41uQ9lk5UfDLzzz5jv3TB4Bsg%2BbCCKc9kjqXG%2B6j2w2OpcKiabwmM97nWEAl0B5hdwDRQ%2FUbN%2BWAs8xGTOzINF7dHCmiTOMJl%2FsJtc0WaCZh51Ikt576SYES&X-Amz-Signature=2ef777fe83093debd3ce78e7ce5baec4490fd35fddf034f9a0aa070b617b9f56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7AGQ4P%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJCljcKSUyb0uQsz1Pp6jAe4MtFhxKBMmciRYxYFbUXAiBzTftRbv0s9bjzABGgp7R2nd%2BKEZH2%2F%2B8d7go0SUjwMiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsUoOWuWTdTsRGvX3KtwDxbzZIYuQYQC%2Ft8uyJOeZDejQRl0vgyyF0bwN59dOvvkbNSiHRNlX69NuDpRxFqIBs65zEyX9IGE0J9KGsYoFSQmbMyzFHIlUYybWxkJQVcXLPifnMo5%2BX%2B4bHyyXWwC7iPkpKHedX0ioKfdDnSp9wLz9jAbTCejcRMCFuGD6t0s5lLq8YEE4DZNJkYtrBzdxWQFLu%2FLZXUa8jVtsSL2zpolEWAA%2B74lfV1PcqBxatyrZRGSuoX9fsUt7W7wwLm9S6B4Iv9yV5wSF2K4kPs53YIHkb1En70S%2BdQiM4lL1nsNnH5%2FFUePvFFImpZdCsxWehwbI%2B07sSxLYfI1mPaL1QZsBt3u0mAl4hso1mMuSNn76sqwVMoDhHgbByHeaFQsR6Jzw3HR1nQj%2Fxl5gcC5agvcQn6G0vqQk3nSKARQS9nl6PcomHULoh7BEhaIAZXlY07wEmj4K0I1kXAhlifMM48ijG6CEfjFAuVNf3A2aOFU83SWox96kTGunv5nY3rPg6mm12W7nEQJRvQTL90ELLBGCjFBSEjzut3sh5yea%2BZHpzpD72jjyS%2FU72eKPXuuRz8MPW0Htfx67wmC2aq%2Bll53IZu8UVqE0BISNUvdfBjY7L%2B9EFI26X5NsRz4w89y1ywY6pgFXTmmj7w%2FmJBFmkVEJxfDP9yqhEwW3V9nGmaAx0HOmEbQMjDEKxY28kG9cKiVNmD2vBjsOmvU2DJzZF0sAy03dC4gN4UZX7LVWl7f%2FHgR1nhhZ9KyBICBfXF96xtvFwncBfQh9EPKrzF2%2BNKYbgb6hjOjh98EsCtCTl2Zm%2FJ4GU5NNmKqODm%2FbK9wzhvlXVWNwXfqu7yFtW17UWiE%2FFdjGtjkzbX7j&X-Amz-Signature=cbbee9ef80ed9e32df5c082417a116e4469e839b2e164b421641a5b0a3f0916a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7AGQ4P%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJCljcKSUyb0uQsz1Pp6jAe4MtFhxKBMmciRYxYFbUXAiBzTftRbv0s9bjzABGgp7R2nd%2BKEZH2%2F%2B8d7go0SUjwMiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsUoOWuWTdTsRGvX3KtwDxbzZIYuQYQC%2Ft8uyJOeZDejQRl0vgyyF0bwN59dOvvkbNSiHRNlX69NuDpRxFqIBs65zEyX9IGE0J9KGsYoFSQmbMyzFHIlUYybWxkJQVcXLPifnMo5%2BX%2B4bHyyXWwC7iPkpKHedX0ioKfdDnSp9wLz9jAbTCejcRMCFuGD6t0s5lLq8YEE4DZNJkYtrBzdxWQFLu%2FLZXUa8jVtsSL2zpolEWAA%2B74lfV1PcqBxatyrZRGSuoX9fsUt7W7wwLm9S6B4Iv9yV5wSF2K4kPs53YIHkb1En70S%2BdQiM4lL1nsNnH5%2FFUePvFFImpZdCsxWehwbI%2B07sSxLYfI1mPaL1QZsBt3u0mAl4hso1mMuSNn76sqwVMoDhHgbByHeaFQsR6Jzw3HR1nQj%2Fxl5gcC5agvcQn6G0vqQk3nSKARQS9nl6PcomHULoh7BEhaIAZXlY07wEmj4K0I1kXAhlifMM48ijG6CEfjFAuVNf3A2aOFU83SWox96kTGunv5nY3rPg6mm12W7nEQJRvQTL90ELLBGCjFBSEjzut3sh5yea%2BZHpzpD72jjyS%2FU72eKPXuuRz8MPW0Htfx67wmC2aq%2Bll53IZu8UVqE0BISNUvdfBjY7L%2B9EFI26X5NsRz4w89y1ywY6pgFXTmmj7w%2FmJBFmkVEJxfDP9yqhEwW3V9nGmaAx0HOmEbQMjDEKxY28kG9cKiVNmD2vBjsOmvU2DJzZF0sAy03dC4gN4UZX7LVWl7f%2FHgR1nhhZ9KyBICBfXF96xtvFwncBfQh9EPKrzF2%2BNKYbgb6hjOjh98EsCtCTl2Zm%2FJ4GU5NNmKqODm%2FbK9wzhvlXVWNwXfqu7yFtW17UWiE%2FFdjGtjkzbX7j&X-Amz-Signature=19e24eac4e6b07d7db3a80f89c560089675aad266b26cc9bf89fc997463913fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7AGQ4P%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJCljcKSUyb0uQsz1Pp6jAe4MtFhxKBMmciRYxYFbUXAiBzTftRbv0s9bjzABGgp7R2nd%2BKEZH2%2F%2B8d7go0SUjwMiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsUoOWuWTdTsRGvX3KtwDxbzZIYuQYQC%2Ft8uyJOeZDejQRl0vgyyF0bwN59dOvvkbNSiHRNlX69NuDpRxFqIBs65zEyX9IGE0J9KGsYoFSQmbMyzFHIlUYybWxkJQVcXLPifnMo5%2BX%2B4bHyyXWwC7iPkpKHedX0ioKfdDnSp9wLz9jAbTCejcRMCFuGD6t0s5lLq8YEE4DZNJkYtrBzdxWQFLu%2FLZXUa8jVtsSL2zpolEWAA%2B74lfV1PcqBxatyrZRGSuoX9fsUt7W7wwLm9S6B4Iv9yV5wSF2K4kPs53YIHkb1En70S%2BdQiM4lL1nsNnH5%2FFUePvFFImpZdCsxWehwbI%2B07sSxLYfI1mPaL1QZsBt3u0mAl4hso1mMuSNn76sqwVMoDhHgbByHeaFQsR6Jzw3HR1nQj%2Fxl5gcC5agvcQn6G0vqQk3nSKARQS9nl6PcomHULoh7BEhaIAZXlY07wEmj4K0I1kXAhlifMM48ijG6CEfjFAuVNf3A2aOFU83SWox96kTGunv5nY3rPg6mm12W7nEQJRvQTL90ELLBGCjFBSEjzut3sh5yea%2BZHpzpD72jjyS%2FU72eKPXuuRz8MPW0Htfx67wmC2aq%2Bll53IZu8UVqE0BISNUvdfBjY7L%2B9EFI26X5NsRz4w89y1ywY6pgFXTmmj7w%2FmJBFmkVEJxfDP9yqhEwW3V9nGmaAx0HOmEbQMjDEKxY28kG9cKiVNmD2vBjsOmvU2DJzZF0sAy03dC4gN4UZX7LVWl7f%2FHgR1nhhZ9KyBICBfXF96xtvFwncBfQh9EPKrzF2%2BNKYbgb6hjOjh98EsCtCTl2Zm%2FJ4GU5NNmKqODm%2FbK9wzhvlXVWNwXfqu7yFtW17UWiE%2FFdjGtjkzbX7j&X-Amz-Signature=817eefe8b6e38d94a9126ff8361544dee89f14d9b17b794a669e5a1181366441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7AGQ4P%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJCljcKSUyb0uQsz1Pp6jAe4MtFhxKBMmciRYxYFbUXAiBzTftRbv0s9bjzABGgp7R2nd%2BKEZH2%2F%2B8d7go0SUjwMiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsUoOWuWTdTsRGvX3KtwDxbzZIYuQYQC%2Ft8uyJOeZDejQRl0vgyyF0bwN59dOvvkbNSiHRNlX69NuDpRxFqIBs65zEyX9IGE0J9KGsYoFSQmbMyzFHIlUYybWxkJQVcXLPifnMo5%2BX%2B4bHyyXWwC7iPkpKHedX0ioKfdDnSp9wLz9jAbTCejcRMCFuGD6t0s5lLq8YEE4DZNJkYtrBzdxWQFLu%2FLZXUa8jVtsSL2zpolEWAA%2B74lfV1PcqBxatyrZRGSuoX9fsUt7W7wwLm9S6B4Iv9yV5wSF2K4kPs53YIHkb1En70S%2BdQiM4lL1nsNnH5%2FFUePvFFImpZdCsxWehwbI%2B07sSxLYfI1mPaL1QZsBt3u0mAl4hso1mMuSNn76sqwVMoDhHgbByHeaFQsR6Jzw3HR1nQj%2Fxl5gcC5agvcQn6G0vqQk3nSKARQS9nl6PcomHULoh7BEhaIAZXlY07wEmj4K0I1kXAhlifMM48ijG6CEfjFAuVNf3A2aOFU83SWox96kTGunv5nY3rPg6mm12W7nEQJRvQTL90ELLBGCjFBSEjzut3sh5yea%2BZHpzpD72jjyS%2FU72eKPXuuRz8MPW0Htfx67wmC2aq%2Bll53IZu8UVqE0BISNUvdfBjY7L%2B9EFI26X5NsRz4w89y1ywY6pgFXTmmj7w%2FmJBFmkVEJxfDP9yqhEwW3V9nGmaAx0HOmEbQMjDEKxY28kG9cKiVNmD2vBjsOmvU2DJzZF0sAy03dC4gN4UZX7LVWl7f%2FHgR1nhhZ9KyBICBfXF96xtvFwncBfQh9EPKrzF2%2BNKYbgb6hjOjh98EsCtCTl2Zm%2FJ4GU5NNmKqODm%2FbK9wzhvlXVWNwXfqu7yFtW17UWiE%2FFdjGtjkzbX7j&X-Amz-Signature=a67466a9575afe45195062bf8fa0a1df663dd5878d418f4814e131702e2744a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7AGQ4P%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJCljcKSUyb0uQsz1Pp6jAe4MtFhxKBMmciRYxYFbUXAiBzTftRbv0s9bjzABGgp7R2nd%2BKEZH2%2F%2B8d7go0SUjwMiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsUoOWuWTdTsRGvX3KtwDxbzZIYuQYQC%2Ft8uyJOeZDejQRl0vgyyF0bwN59dOvvkbNSiHRNlX69NuDpRxFqIBs65zEyX9IGE0J9KGsYoFSQmbMyzFHIlUYybWxkJQVcXLPifnMo5%2BX%2B4bHyyXWwC7iPkpKHedX0ioKfdDnSp9wLz9jAbTCejcRMCFuGD6t0s5lLq8YEE4DZNJkYtrBzdxWQFLu%2FLZXUa8jVtsSL2zpolEWAA%2B74lfV1PcqBxatyrZRGSuoX9fsUt7W7wwLm9S6B4Iv9yV5wSF2K4kPs53YIHkb1En70S%2BdQiM4lL1nsNnH5%2FFUePvFFImpZdCsxWehwbI%2B07sSxLYfI1mPaL1QZsBt3u0mAl4hso1mMuSNn76sqwVMoDhHgbByHeaFQsR6Jzw3HR1nQj%2Fxl5gcC5agvcQn6G0vqQk3nSKARQS9nl6PcomHULoh7BEhaIAZXlY07wEmj4K0I1kXAhlifMM48ijG6CEfjFAuVNf3A2aOFU83SWox96kTGunv5nY3rPg6mm12W7nEQJRvQTL90ELLBGCjFBSEjzut3sh5yea%2BZHpzpD72jjyS%2FU72eKPXuuRz8MPW0Htfx67wmC2aq%2Bll53IZu8UVqE0BISNUvdfBjY7L%2B9EFI26X5NsRz4w89y1ywY6pgFXTmmj7w%2FmJBFmkVEJxfDP9yqhEwW3V9nGmaAx0HOmEbQMjDEKxY28kG9cKiVNmD2vBjsOmvU2DJzZF0sAy03dC4gN4UZX7LVWl7f%2FHgR1nhhZ9KyBICBfXF96xtvFwncBfQh9EPKrzF2%2BNKYbgb6hjOjh98EsCtCTl2Zm%2FJ4GU5NNmKqODm%2FbK9wzhvlXVWNwXfqu7yFtW17UWiE%2FFdjGtjkzbX7j&X-Amz-Signature=e374c05d2b8f888686c867ae33945982bd6ed30949cec2fffa8d6fde5748f0a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7AGQ4P%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJCljcKSUyb0uQsz1Pp6jAe4MtFhxKBMmciRYxYFbUXAiBzTftRbv0s9bjzABGgp7R2nd%2BKEZH2%2F%2B8d7go0SUjwMiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsUoOWuWTdTsRGvX3KtwDxbzZIYuQYQC%2Ft8uyJOeZDejQRl0vgyyF0bwN59dOvvkbNSiHRNlX69NuDpRxFqIBs65zEyX9IGE0J9KGsYoFSQmbMyzFHIlUYybWxkJQVcXLPifnMo5%2BX%2B4bHyyXWwC7iPkpKHedX0ioKfdDnSp9wLz9jAbTCejcRMCFuGD6t0s5lLq8YEE4DZNJkYtrBzdxWQFLu%2FLZXUa8jVtsSL2zpolEWAA%2B74lfV1PcqBxatyrZRGSuoX9fsUt7W7wwLm9S6B4Iv9yV5wSF2K4kPs53YIHkb1En70S%2BdQiM4lL1nsNnH5%2FFUePvFFImpZdCsxWehwbI%2B07sSxLYfI1mPaL1QZsBt3u0mAl4hso1mMuSNn76sqwVMoDhHgbByHeaFQsR6Jzw3HR1nQj%2Fxl5gcC5agvcQn6G0vqQk3nSKARQS9nl6PcomHULoh7BEhaIAZXlY07wEmj4K0I1kXAhlifMM48ijG6CEfjFAuVNf3A2aOFU83SWox96kTGunv5nY3rPg6mm12W7nEQJRvQTL90ELLBGCjFBSEjzut3sh5yea%2BZHpzpD72jjyS%2FU72eKPXuuRz8MPW0Htfx67wmC2aq%2Bll53IZu8UVqE0BISNUvdfBjY7L%2B9EFI26X5NsRz4w89y1ywY6pgFXTmmj7w%2FmJBFmkVEJxfDP9yqhEwW3V9nGmaAx0HOmEbQMjDEKxY28kG9cKiVNmD2vBjsOmvU2DJzZF0sAy03dC4gN4UZX7LVWl7f%2FHgR1nhhZ9KyBICBfXF96xtvFwncBfQh9EPKrzF2%2BNKYbgb6hjOjh98EsCtCTl2Zm%2FJ4GU5NNmKqODm%2FbK9wzhvlXVWNwXfqu7yFtW17UWiE%2FFdjGtjkzbX7j&X-Amz-Signature=ec628f8b8492f8c6c4c1060214e439b406ba1bc4bcdc96477667021e2dbd2293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


