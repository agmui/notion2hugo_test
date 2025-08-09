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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623M6SFXP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCc4ldG4fkleSKibWmOgdDPwdUZVG1tgXedaUDIdBwX6AIgMMYl3LDbgWZQ0GB6OIkqD1GpkvJQGyVtWE0wpYm%2B3yIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK%2BWLYDVP9FkNSKeSrcA4IUD0oOIYmir5CtcvkURMltF3%2F151m6EL0%2FfhsZjin0JoXaAcBef2aolMiX5hMj6xqu3LNxQ%2FjYf9ptfSuE7KJRV3%2FLQeY7fgm3wqem0SO5qXfpJzfs2H7d9jdRrWYzJfiGxWvamGzkUz3J3Htv%2Bg1QdxyN0jbhJnjQc4OSIWqq4QtSyaO0thSbs3yBhVQBp%2Fm2O%2F%2FD01THM4Mf8J28LI7X%2FyefsVqJKwxOfwZRcy0ysp5xQEyjOEcEq8V%2FhAYGd%2Fw8TkWl5b3gV6VWky%2FqreaSHb9XysdkBMYJdpxvnEoRJ%2F4YU9gtmp6c%2FInq7RgRwHmRT34wG%2BRCPEQ6ohTc1MpYYn%2FDbqAs%2BHBvNerCvRH%2BB6SnYGI%2BfzyAZQ4J7MG2iYjU948icV7G7RAV4D460DlSpERDsDuevVvE0bMllI%2FMlcqkobnnrpLFnaRBNx5xMFW0wZ4IZGpuimLpecKq4xqiCPBQnfkgcPuP2el%2FfI0mrvXYAiWPWaZGsdreM8SVdiLy676N5oC7MJSA8uFpzP5g4M0aESkluL9U0dOJLupGI5gohacsv1mzb%2B64mjjO428n10rs%2F6UjMw0qkygMaoJH%2FCFPtD9BhC0SinZcbk2JBYYZFrHvEiLzca9rMJSr2sQGOqUBYsCqsu5XejuneCyM8K8aYu8sMazdIza59vnaAE0WYELsVebm1zDNQU3%2Bm3YcJ%2B4mm4Vo9BXzcI57cj6BoFXtoSlweJAc7u6qAGX01WyDwiftcOsPLENYVrTBpuwVdHuSb%2F5xyZCgnvuYYLIe0LeLgNxur5Hr04HRUnJyKHPmiqFxkehbqkapl%2BmMn8hH14z7qwVCoR4LxkcTYd4I6ML5jZNrMBnJ&X-Amz-Signature=97267aa51a3d16ed0d97e09d1d3d8c488a38b6595c06fc97d900ed3b0cdb1eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623M6SFXP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCc4ldG4fkleSKibWmOgdDPwdUZVG1tgXedaUDIdBwX6AIgMMYl3LDbgWZQ0GB6OIkqD1GpkvJQGyVtWE0wpYm%2B3yIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK%2BWLYDVP9FkNSKeSrcA4IUD0oOIYmir5CtcvkURMltF3%2F151m6EL0%2FfhsZjin0JoXaAcBef2aolMiX5hMj6xqu3LNxQ%2FjYf9ptfSuE7KJRV3%2FLQeY7fgm3wqem0SO5qXfpJzfs2H7d9jdRrWYzJfiGxWvamGzkUz3J3Htv%2Bg1QdxyN0jbhJnjQc4OSIWqq4QtSyaO0thSbs3yBhVQBp%2Fm2O%2F%2FD01THM4Mf8J28LI7X%2FyefsVqJKwxOfwZRcy0ysp5xQEyjOEcEq8V%2FhAYGd%2Fw8TkWl5b3gV6VWky%2FqreaSHb9XysdkBMYJdpxvnEoRJ%2F4YU9gtmp6c%2FInq7RgRwHmRT34wG%2BRCPEQ6ohTc1MpYYn%2FDbqAs%2BHBvNerCvRH%2BB6SnYGI%2BfzyAZQ4J7MG2iYjU948icV7G7RAV4D460DlSpERDsDuevVvE0bMllI%2FMlcqkobnnrpLFnaRBNx5xMFW0wZ4IZGpuimLpecKq4xqiCPBQnfkgcPuP2el%2FfI0mrvXYAiWPWaZGsdreM8SVdiLy676N5oC7MJSA8uFpzP5g4M0aESkluL9U0dOJLupGI5gohacsv1mzb%2B64mjjO428n10rs%2F6UjMw0qkygMaoJH%2FCFPtD9BhC0SinZcbk2JBYYZFrHvEiLzca9rMJSr2sQGOqUBYsCqsu5XejuneCyM8K8aYu8sMazdIza59vnaAE0WYELsVebm1zDNQU3%2Bm3YcJ%2B4mm4Vo9BXzcI57cj6BoFXtoSlweJAc7u6qAGX01WyDwiftcOsPLENYVrTBpuwVdHuSb%2F5xyZCgnvuYYLIe0LeLgNxur5Hr04HRUnJyKHPmiqFxkehbqkapl%2BmMn8hH14z7qwVCoR4LxkcTYd4I6ML5jZNrMBnJ&X-Amz-Signature=5370ab920a485556b61dd8fd09f4dc93334e3c2372b7d41f6fe5d2582bbfb88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623M6SFXP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCc4ldG4fkleSKibWmOgdDPwdUZVG1tgXedaUDIdBwX6AIgMMYl3LDbgWZQ0GB6OIkqD1GpkvJQGyVtWE0wpYm%2B3yIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK%2BWLYDVP9FkNSKeSrcA4IUD0oOIYmir5CtcvkURMltF3%2F151m6EL0%2FfhsZjin0JoXaAcBef2aolMiX5hMj6xqu3LNxQ%2FjYf9ptfSuE7KJRV3%2FLQeY7fgm3wqem0SO5qXfpJzfs2H7d9jdRrWYzJfiGxWvamGzkUz3J3Htv%2Bg1QdxyN0jbhJnjQc4OSIWqq4QtSyaO0thSbs3yBhVQBp%2Fm2O%2F%2FD01THM4Mf8J28LI7X%2FyefsVqJKwxOfwZRcy0ysp5xQEyjOEcEq8V%2FhAYGd%2Fw8TkWl5b3gV6VWky%2FqreaSHb9XysdkBMYJdpxvnEoRJ%2F4YU9gtmp6c%2FInq7RgRwHmRT34wG%2BRCPEQ6ohTc1MpYYn%2FDbqAs%2BHBvNerCvRH%2BB6SnYGI%2BfzyAZQ4J7MG2iYjU948icV7G7RAV4D460DlSpERDsDuevVvE0bMllI%2FMlcqkobnnrpLFnaRBNx5xMFW0wZ4IZGpuimLpecKq4xqiCPBQnfkgcPuP2el%2FfI0mrvXYAiWPWaZGsdreM8SVdiLy676N5oC7MJSA8uFpzP5g4M0aESkluL9U0dOJLupGI5gohacsv1mzb%2B64mjjO428n10rs%2F6UjMw0qkygMaoJH%2FCFPtD9BhC0SinZcbk2JBYYZFrHvEiLzca9rMJSr2sQGOqUBYsCqsu5XejuneCyM8K8aYu8sMazdIza59vnaAE0WYELsVebm1zDNQU3%2Bm3YcJ%2B4mm4Vo9BXzcI57cj6BoFXtoSlweJAc7u6qAGX01WyDwiftcOsPLENYVrTBpuwVdHuSb%2F5xyZCgnvuYYLIe0LeLgNxur5Hr04HRUnJyKHPmiqFxkehbqkapl%2BmMn8hH14z7qwVCoR4LxkcTYd4I6ML5jZNrMBnJ&X-Amz-Signature=2706a40850a936a19d5a6ffa1c2fd10aeaf613c6245f9d1ac8693d826758d556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623M6SFXP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCc4ldG4fkleSKibWmOgdDPwdUZVG1tgXedaUDIdBwX6AIgMMYl3LDbgWZQ0GB6OIkqD1GpkvJQGyVtWE0wpYm%2B3yIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK%2BWLYDVP9FkNSKeSrcA4IUD0oOIYmir5CtcvkURMltF3%2F151m6EL0%2FfhsZjin0JoXaAcBef2aolMiX5hMj6xqu3LNxQ%2FjYf9ptfSuE7KJRV3%2FLQeY7fgm3wqem0SO5qXfpJzfs2H7d9jdRrWYzJfiGxWvamGzkUz3J3Htv%2Bg1QdxyN0jbhJnjQc4OSIWqq4QtSyaO0thSbs3yBhVQBp%2Fm2O%2F%2FD01THM4Mf8J28LI7X%2FyefsVqJKwxOfwZRcy0ysp5xQEyjOEcEq8V%2FhAYGd%2Fw8TkWl5b3gV6VWky%2FqreaSHb9XysdkBMYJdpxvnEoRJ%2F4YU9gtmp6c%2FInq7RgRwHmRT34wG%2BRCPEQ6ohTc1MpYYn%2FDbqAs%2BHBvNerCvRH%2BB6SnYGI%2BfzyAZQ4J7MG2iYjU948icV7G7RAV4D460DlSpERDsDuevVvE0bMllI%2FMlcqkobnnrpLFnaRBNx5xMFW0wZ4IZGpuimLpecKq4xqiCPBQnfkgcPuP2el%2FfI0mrvXYAiWPWaZGsdreM8SVdiLy676N5oC7MJSA8uFpzP5g4M0aESkluL9U0dOJLupGI5gohacsv1mzb%2B64mjjO428n10rs%2F6UjMw0qkygMaoJH%2FCFPtD9BhC0SinZcbk2JBYYZFrHvEiLzca9rMJSr2sQGOqUBYsCqsu5XejuneCyM8K8aYu8sMazdIza59vnaAE0WYELsVebm1zDNQU3%2Bm3YcJ%2B4mm4Vo9BXzcI57cj6BoFXtoSlweJAc7u6qAGX01WyDwiftcOsPLENYVrTBpuwVdHuSb%2F5xyZCgnvuYYLIe0LeLgNxur5Hr04HRUnJyKHPmiqFxkehbqkapl%2BmMn8hH14z7qwVCoR4LxkcTYd4I6ML5jZNrMBnJ&X-Amz-Signature=9d44725b60148fe94c80d980c86ad788aed7322122dd77517a0183447e4cdfd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623M6SFXP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCc4ldG4fkleSKibWmOgdDPwdUZVG1tgXedaUDIdBwX6AIgMMYl3LDbgWZQ0GB6OIkqD1GpkvJQGyVtWE0wpYm%2B3yIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK%2BWLYDVP9FkNSKeSrcA4IUD0oOIYmir5CtcvkURMltF3%2F151m6EL0%2FfhsZjin0JoXaAcBef2aolMiX5hMj6xqu3LNxQ%2FjYf9ptfSuE7KJRV3%2FLQeY7fgm3wqem0SO5qXfpJzfs2H7d9jdRrWYzJfiGxWvamGzkUz3J3Htv%2Bg1QdxyN0jbhJnjQc4OSIWqq4QtSyaO0thSbs3yBhVQBp%2Fm2O%2F%2FD01THM4Mf8J28LI7X%2FyefsVqJKwxOfwZRcy0ysp5xQEyjOEcEq8V%2FhAYGd%2Fw8TkWl5b3gV6VWky%2FqreaSHb9XysdkBMYJdpxvnEoRJ%2F4YU9gtmp6c%2FInq7RgRwHmRT34wG%2BRCPEQ6ohTc1MpYYn%2FDbqAs%2BHBvNerCvRH%2BB6SnYGI%2BfzyAZQ4J7MG2iYjU948icV7G7RAV4D460DlSpERDsDuevVvE0bMllI%2FMlcqkobnnrpLFnaRBNx5xMFW0wZ4IZGpuimLpecKq4xqiCPBQnfkgcPuP2el%2FfI0mrvXYAiWPWaZGsdreM8SVdiLy676N5oC7MJSA8uFpzP5g4M0aESkluL9U0dOJLupGI5gohacsv1mzb%2B64mjjO428n10rs%2F6UjMw0qkygMaoJH%2FCFPtD9BhC0SinZcbk2JBYYZFrHvEiLzca9rMJSr2sQGOqUBYsCqsu5XejuneCyM8K8aYu8sMazdIza59vnaAE0WYELsVebm1zDNQU3%2Bm3YcJ%2B4mm4Vo9BXzcI57cj6BoFXtoSlweJAc7u6qAGX01WyDwiftcOsPLENYVrTBpuwVdHuSb%2F5xyZCgnvuYYLIe0LeLgNxur5Hr04HRUnJyKHPmiqFxkehbqkapl%2BmMn8hH14z7qwVCoR4LxkcTYd4I6ML5jZNrMBnJ&X-Amz-Signature=3e18a3ae783e264ba8f67299721f889fcd0d2094848e8651e8af134667dabcb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623M6SFXP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCc4ldG4fkleSKibWmOgdDPwdUZVG1tgXedaUDIdBwX6AIgMMYl3LDbgWZQ0GB6OIkqD1GpkvJQGyVtWE0wpYm%2B3yIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK%2BWLYDVP9FkNSKeSrcA4IUD0oOIYmir5CtcvkURMltF3%2F151m6EL0%2FfhsZjin0JoXaAcBef2aolMiX5hMj6xqu3LNxQ%2FjYf9ptfSuE7KJRV3%2FLQeY7fgm3wqem0SO5qXfpJzfs2H7d9jdRrWYzJfiGxWvamGzkUz3J3Htv%2Bg1QdxyN0jbhJnjQc4OSIWqq4QtSyaO0thSbs3yBhVQBp%2Fm2O%2F%2FD01THM4Mf8J28LI7X%2FyefsVqJKwxOfwZRcy0ysp5xQEyjOEcEq8V%2FhAYGd%2Fw8TkWl5b3gV6VWky%2FqreaSHb9XysdkBMYJdpxvnEoRJ%2F4YU9gtmp6c%2FInq7RgRwHmRT34wG%2BRCPEQ6ohTc1MpYYn%2FDbqAs%2BHBvNerCvRH%2BB6SnYGI%2BfzyAZQ4J7MG2iYjU948icV7G7RAV4D460DlSpERDsDuevVvE0bMllI%2FMlcqkobnnrpLFnaRBNx5xMFW0wZ4IZGpuimLpecKq4xqiCPBQnfkgcPuP2el%2FfI0mrvXYAiWPWaZGsdreM8SVdiLy676N5oC7MJSA8uFpzP5g4M0aESkluL9U0dOJLupGI5gohacsv1mzb%2B64mjjO428n10rs%2F6UjMw0qkygMaoJH%2FCFPtD9BhC0SinZcbk2JBYYZFrHvEiLzca9rMJSr2sQGOqUBYsCqsu5XejuneCyM8K8aYu8sMazdIza59vnaAE0WYELsVebm1zDNQU3%2Bm3YcJ%2B4mm4Vo9BXzcI57cj6BoFXtoSlweJAc7u6qAGX01WyDwiftcOsPLENYVrTBpuwVdHuSb%2F5xyZCgnvuYYLIe0LeLgNxur5Hr04HRUnJyKHPmiqFxkehbqkapl%2BmMn8hH14z7qwVCoR4LxkcTYd4I6ML5jZNrMBnJ&X-Amz-Signature=9dda172b4bcdeb5bddaff40f8ffed622d9186f8e8ec648becac18b90e38daeba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623M6SFXP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCc4ldG4fkleSKibWmOgdDPwdUZVG1tgXedaUDIdBwX6AIgMMYl3LDbgWZQ0GB6OIkqD1GpkvJQGyVtWE0wpYm%2B3yIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK%2BWLYDVP9FkNSKeSrcA4IUD0oOIYmir5CtcvkURMltF3%2F151m6EL0%2FfhsZjin0JoXaAcBef2aolMiX5hMj6xqu3LNxQ%2FjYf9ptfSuE7KJRV3%2FLQeY7fgm3wqem0SO5qXfpJzfs2H7d9jdRrWYzJfiGxWvamGzkUz3J3Htv%2Bg1QdxyN0jbhJnjQc4OSIWqq4QtSyaO0thSbs3yBhVQBp%2Fm2O%2F%2FD01THM4Mf8J28LI7X%2FyefsVqJKwxOfwZRcy0ysp5xQEyjOEcEq8V%2FhAYGd%2Fw8TkWl5b3gV6VWky%2FqreaSHb9XysdkBMYJdpxvnEoRJ%2F4YU9gtmp6c%2FInq7RgRwHmRT34wG%2BRCPEQ6ohTc1MpYYn%2FDbqAs%2BHBvNerCvRH%2BB6SnYGI%2BfzyAZQ4J7MG2iYjU948icV7G7RAV4D460DlSpERDsDuevVvE0bMllI%2FMlcqkobnnrpLFnaRBNx5xMFW0wZ4IZGpuimLpecKq4xqiCPBQnfkgcPuP2el%2FfI0mrvXYAiWPWaZGsdreM8SVdiLy676N5oC7MJSA8uFpzP5g4M0aESkluL9U0dOJLupGI5gohacsv1mzb%2B64mjjO428n10rs%2F6UjMw0qkygMaoJH%2FCFPtD9BhC0SinZcbk2JBYYZFrHvEiLzca9rMJSr2sQGOqUBYsCqsu5XejuneCyM8K8aYu8sMazdIza59vnaAE0WYELsVebm1zDNQU3%2Bm3YcJ%2B4mm4Vo9BXzcI57cj6BoFXtoSlweJAc7u6qAGX01WyDwiftcOsPLENYVrTBpuwVdHuSb%2F5xyZCgnvuYYLIe0LeLgNxur5Hr04HRUnJyKHPmiqFxkehbqkapl%2BmMn8hH14z7qwVCoR4LxkcTYd4I6ML5jZNrMBnJ&X-Amz-Signature=537edc47c6b4f85dacb85c3f88431f66e0bbd53e5698dc743e01e774b8b95fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623M6SFXP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCc4ldG4fkleSKibWmOgdDPwdUZVG1tgXedaUDIdBwX6AIgMMYl3LDbgWZQ0GB6OIkqD1GpkvJQGyVtWE0wpYm%2B3yIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK%2BWLYDVP9FkNSKeSrcA4IUD0oOIYmir5CtcvkURMltF3%2F151m6EL0%2FfhsZjin0JoXaAcBef2aolMiX5hMj6xqu3LNxQ%2FjYf9ptfSuE7KJRV3%2FLQeY7fgm3wqem0SO5qXfpJzfs2H7d9jdRrWYzJfiGxWvamGzkUz3J3Htv%2Bg1QdxyN0jbhJnjQc4OSIWqq4QtSyaO0thSbs3yBhVQBp%2Fm2O%2F%2FD01THM4Mf8J28LI7X%2FyefsVqJKwxOfwZRcy0ysp5xQEyjOEcEq8V%2FhAYGd%2Fw8TkWl5b3gV6VWky%2FqreaSHb9XysdkBMYJdpxvnEoRJ%2F4YU9gtmp6c%2FInq7RgRwHmRT34wG%2BRCPEQ6ohTc1MpYYn%2FDbqAs%2BHBvNerCvRH%2BB6SnYGI%2BfzyAZQ4J7MG2iYjU948icV7G7RAV4D460DlSpERDsDuevVvE0bMllI%2FMlcqkobnnrpLFnaRBNx5xMFW0wZ4IZGpuimLpecKq4xqiCPBQnfkgcPuP2el%2FfI0mrvXYAiWPWaZGsdreM8SVdiLy676N5oC7MJSA8uFpzP5g4M0aESkluL9U0dOJLupGI5gohacsv1mzb%2B64mjjO428n10rs%2F6UjMw0qkygMaoJH%2FCFPtD9BhC0SinZcbk2JBYYZFrHvEiLzca9rMJSr2sQGOqUBYsCqsu5XejuneCyM8K8aYu8sMazdIza59vnaAE0WYELsVebm1zDNQU3%2Bm3YcJ%2B4mm4Vo9BXzcI57cj6BoFXtoSlweJAc7u6qAGX01WyDwiftcOsPLENYVrTBpuwVdHuSb%2F5xyZCgnvuYYLIe0LeLgNxur5Hr04HRUnJyKHPmiqFxkehbqkapl%2BmMn8hH14z7qwVCoR4LxkcTYd4I6ML5jZNrMBnJ&X-Amz-Signature=a715be46c73b07f1985faa1656027f3b6ef43c8a339dbcb55f2fe658132229aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623M6SFXP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCc4ldG4fkleSKibWmOgdDPwdUZVG1tgXedaUDIdBwX6AIgMMYl3LDbgWZQ0GB6OIkqD1GpkvJQGyVtWE0wpYm%2B3yIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK%2BWLYDVP9FkNSKeSrcA4IUD0oOIYmir5CtcvkURMltF3%2F151m6EL0%2FfhsZjin0JoXaAcBef2aolMiX5hMj6xqu3LNxQ%2FjYf9ptfSuE7KJRV3%2FLQeY7fgm3wqem0SO5qXfpJzfs2H7d9jdRrWYzJfiGxWvamGzkUz3J3Htv%2Bg1QdxyN0jbhJnjQc4OSIWqq4QtSyaO0thSbs3yBhVQBp%2Fm2O%2F%2FD01THM4Mf8J28LI7X%2FyefsVqJKwxOfwZRcy0ysp5xQEyjOEcEq8V%2FhAYGd%2Fw8TkWl5b3gV6VWky%2FqreaSHb9XysdkBMYJdpxvnEoRJ%2F4YU9gtmp6c%2FInq7RgRwHmRT34wG%2BRCPEQ6ohTc1MpYYn%2FDbqAs%2BHBvNerCvRH%2BB6SnYGI%2BfzyAZQ4J7MG2iYjU948icV7G7RAV4D460DlSpERDsDuevVvE0bMllI%2FMlcqkobnnrpLFnaRBNx5xMFW0wZ4IZGpuimLpecKq4xqiCPBQnfkgcPuP2el%2FfI0mrvXYAiWPWaZGsdreM8SVdiLy676N5oC7MJSA8uFpzP5g4M0aESkluL9U0dOJLupGI5gohacsv1mzb%2B64mjjO428n10rs%2F6UjMw0qkygMaoJH%2FCFPtD9BhC0SinZcbk2JBYYZFrHvEiLzca9rMJSr2sQGOqUBYsCqsu5XejuneCyM8K8aYu8sMazdIza59vnaAE0WYELsVebm1zDNQU3%2Bm3YcJ%2B4mm4Vo9BXzcI57cj6BoFXtoSlweJAc7u6qAGX01WyDwiftcOsPLENYVrTBpuwVdHuSb%2F5xyZCgnvuYYLIe0LeLgNxur5Hr04HRUnJyKHPmiqFxkehbqkapl%2BmMn8hH14z7qwVCoR4LxkcTYd4I6ML5jZNrMBnJ&X-Amz-Signature=a20d36688a9674e3fb9a5a939e83501351a2366b32a73e185bbffda77999e355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623M6SFXP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCc4ldG4fkleSKibWmOgdDPwdUZVG1tgXedaUDIdBwX6AIgMMYl3LDbgWZQ0GB6OIkqD1GpkvJQGyVtWE0wpYm%2B3yIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK%2BWLYDVP9FkNSKeSrcA4IUD0oOIYmir5CtcvkURMltF3%2F151m6EL0%2FfhsZjin0JoXaAcBef2aolMiX5hMj6xqu3LNxQ%2FjYf9ptfSuE7KJRV3%2FLQeY7fgm3wqem0SO5qXfpJzfs2H7d9jdRrWYzJfiGxWvamGzkUz3J3Htv%2Bg1QdxyN0jbhJnjQc4OSIWqq4QtSyaO0thSbs3yBhVQBp%2Fm2O%2F%2FD01THM4Mf8J28LI7X%2FyefsVqJKwxOfwZRcy0ysp5xQEyjOEcEq8V%2FhAYGd%2Fw8TkWl5b3gV6VWky%2FqreaSHb9XysdkBMYJdpxvnEoRJ%2F4YU9gtmp6c%2FInq7RgRwHmRT34wG%2BRCPEQ6ohTc1MpYYn%2FDbqAs%2BHBvNerCvRH%2BB6SnYGI%2BfzyAZQ4J7MG2iYjU948icV7G7RAV4D460DlSpERDsDuevVvE0bMllI%2FMlcqkobnnrpLFnaRBNx5xMFW0wZ4IZGpuimLpecKq4xqiCPBQnfkgcPuP2el%2FfI0mrvXYAiWPWaZGsdreM8SVdiLy676N5oC7MJSA8uFpzP5g4M0aESkluL9U0dOJLupGI5gohacsv1mzb%2B64mjjO428n10rs%2F6UjMw0qkygMaoJH%2FCFPtD9BhC0SinZcbk2JBYYZFrHvEiLzca9rMJSr2sQGOqUBYsCqsu5XejuneCyM8K8aYu8sMazdIza59vnaAE0WYELsVebm1zDNQU3%2Bm3YcJ%2B4mm4Vo9BXzcI57cj6BoFXtoSlweJAc7u6qAGX01WyDwiftcOsPLENYVrTBpuwVdHuSb%2F5xyZCgnvuYYLIe0LeLgNxur5Hr04HRUnJyKHPmiqFxkehbqkapl%2BmMn8hH14z7qwVCoR4LxkcTYd4I6ML5jZNrMBnJ&X-Amz-Signature=9ff7aa41cac4d65538a0c21855f52e9f0f40a47836cc5baabc63b380790fcf8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H5GIUYL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDyY%2B9ctdYILMeJElSaoFYZ2ObAfOywmGvCivjzPRE%2B5gIgbhr2UXe%2BVsEmOAr1Ekq%2Fe3MEiH0iI6dA6Ip8kLDrVxQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Ffz%2BLL34yI6W8deircA6CNpoEPC28NVSlHHuNBOWbgSfrrKNJfJK2nbQ%2BA7gSI7mPZumrFTqHgdu3yJrbyhRCBlgp9rfL1ySeBhZq1RgxOHUAmpemPlyDX5WOB8Dcw%2FE05nGq6Tg%2F7z3BXMunrD64yOJVsMnEmc8TKU8m4RN0eBi3B0FBDpsem6NU1USKfyakH7%2FDrFy%2FnsgpWTBgiSNepEzsSHSrRHOJJ67fKPi2UCy4ABy3Fyzg%2Bm189DcCVrqzOro8v5izGwwOS7%2Baopst4YJbvsKoIDe%2FhYsbzgvCIf92oK5MBNEJ1K3UaT87fDQ3h5pkiu0urOFx%2Br0Uy74fwAeZtB95QYUOSnzQDPRVBvX9HopqHsWy0ylZWroViSk4sksHV3jsQgSfm6ZqutNDeM5BCO4doRvFP2SNYGZGEg561oQ%2FmWOYm74qNQSlqTKlwYxSbim9golHmFJyaInAwPXBjizJZjG2mQTswKsrk%2BRCArx4K%2F1yq9LD5jVr2v%2Bt1ALDIPp9cZpAwAvClCR%2BKwaL3HGy6fc5cP6H7NiRivWyK8iTaKEYi9ZgM6z1LI21V%2FwDyp%2BuVJcqtFM0X6ti8e4GMk5TWM%2Bc7b8Xcb6yzjtZmzOSlbO9WUT5QwWfNB0S8TzfY40BFuo6GMI6r2sQGOqUB6CT2NjXyk%2FGL2U59ejToBXffnxgB1txmQVI%2BFJkLOkk11Z6zT8V%2BKmajgNZxOABvY4LAbX4xAoobVpJk1OWmkR6bS2epU00wCueXTUcV9DkzcrhcZg1gVxZvT7zERQ874T2h2NA0VqUkdbFcOu6%2F9eipzr%2Fy8CRl2M5jfAu2Orv5XBPgS616b7vf3ndCi1xMcmcb1aCl24ZnzwKYdyWysuk%2BjjS2&X-Amz-Signature=95a4154eb3b2a4b6fcbbeedaa45a38590c5d3117efd07b55377fb989cd4edd0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UIFKO4K%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGdG9JTzISfofhsrWavZHnQYjWvpWm3ktx6nfwKU7b8qAiB%2BTirTQaQJydSI7wd7i0Z9nZ5pNk0qQnxj5u43tB%2BDViqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtth268lN8ZxJwHONKtwDguk41UvG7rQPGB1%2Bb9bkQGSVbByGniC%2BHX4nLm7O8TSvniszKzG9%2FvS95Ffm%2B7ZbocVlu2JqSFUpgfhMH8VAI3Tf6fFMmdq%2FEdkQp8jxsoD39XWPnLj5dyrQyZSyoZVdh42vdECVd56u005UxwI1ZpwzDXf78kce7Y5FOn%2BqGQ8zlAKm1XqHRK%2BhjGnbuF23TEHZSWQRq8%2BmlBN5Ma4YvMF2gVPYqMMMFpXCJWD9a4zVt35rpbNUvBjtb%2BUlIjkX7XvusJNIR%2BJ52Hcjq1kNtaUDZJ1EQ6a9Twtvbnp0JZkJBm%2F2%2BaGRGdgkFZj95XUfPVrUz9eDOQHWxUSu1VTJzK%2FSQEG4VynoRks7v8UHSA9%2BFnqsw0dqWErr9YrFjJi0iJJYu6rUn2lO8B0auWs5gD%2Frsf2KtDiurYtXatGscrrKhZFqqbfI1%2FQXdKaS1qPFusXSTSENUCpK477nJ3hRSuFGrKdPVh7JkSOTRO1A4DWrUYjwlSVqmWpEjp2LGf%2FOnFQEk%2Fpx%2BDurQ4UdV84W19WlSqIUHphmP%2Bso2xdBXK5BgArq5TCNEIKs6AqyU%2Fy5MZosr0dPaVtOf7ca03360yJVcdqnCRIZdCWm6ys9l4OXtu0xMMccKl4iSZYwu6vaxAY6pgFsLiTLUuGrYX5aKyo%2B9N4GgdEtZPfwvkqJi12Jzm%2Fa%2BwYMLxb0J%2FGMsaw25JUHTATNJXBmCBqprCC0hmk2w5NVWTYkyQFsteJXEbWzcXEMawVFRwNpKjXbEkaAKxcSf7%2B4sng0vcteQW8czo5EhbYwzfu6EVxW2UJYNkC702mIAL8FBECyIdQxFL6QdA8W5w3CyWql6YNEJmUcR1ukrgO8i1MRK33L&X-Amz-Signature=b36768df3126bbd3cdb116e9a2238abc675f6f8f197f9b0c9cfefa965fe9a1a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQNS2Y3T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIFfqaGqCw8ZumjvzY9LWV4bHXgJkDTLlRbR8KX9gPZ1uAiBF0vcvnSxWGBuC4HIe9TBWBwidmrWHFR5q4dF30H8PLiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzDPuGdzwlxPitiroKtwD9rJOh2tYauWiGIsFXwTQf0mCUCKLFCeHaetByQOrGqOK0QGhU7Hum%2B2mOzllbOZzR%2FxblBtv77t%2BwQfeiVFICvRvIps%2FvIOIc1rFlQ7g0ZAV4igcBuRyJiq9xb5Jr5dK885HK5nuRWuysdcslJJ8SqZe%2B3E9I82%2Fq%2FjRDEAt4vNMES7Nw%2FsfoC%2B4qLW%2BEvKPMqVBEmdP0Q6%2FIGUDDteY%2Bs%2Bjd7aC9LrmOQgtq8i3LybSYovQ7TlLWH6hA8%2BVgolWiJRMKCVjfpnkWmIirPzcKE2eD50fxd%2BCeyESvayEEdEbf9saiIhdqyO9kLBV0Yr0XtEa%2FZZAlVEhqrdbEzn5gV8jcuWRl0Sq3uOP8F5gn6eqzz625l7bwB%2FpGEqVzNtdjDn9VQ%2FPrryhKze0hvt%2B6QWzs94we0VJCav9NwMq1ZtAf5krJVTgcq2JqYZfnBUEEJrqlxoMJzYfT%2FXyl5eIuMrsAykWdtPvryzYBK3xXCZl1ODnOV7jMZoUGaIhdYntNG7ibi0jkwmUnpYXB1W4UTvy6Wliu26PKqR%2FW3Q1OwP%2BPIYsTpQ47RTz%2Fjo2ShDcJQPLRrSWAJaM8C4ndOZ45U9Y%2B28jRtuR3q9zcc6b0kT0Sxl6CCZeEMjWt1gw9qraxAY6pgHg72BnYZw0YSY90jEOmESsKaL4XD%2F4ScZMj3c2Yywd%2FI9Htooz8sjCueLYwFK94TqZtqLc4%2FThOgjr6Y0LTf1o5KxX2lnpmJOPcaXIUxg0%2FXdbDay6at%2F6eXW%2Bc2%2FVXPn3jf8gDqCW%2FLDyK1A9PBdpDzicI6YHMZSMPAR2HRNOrouAFKGKra6aJ0t2ARjx%2BmKsZWWnUjQ7XQ%2FxULrZ2CfBfeHmONqT&X-Amz-Signature=d77bcf84660188e9dca8b10554b28a62f5c55d09becc2f4bf9053b181acdc469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623M6SFXP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCc4ldG4fkleSKibWmOgdDPwdUZVG1tgXedaUDIdBwX6AIgMMYl3LDbgWZQ0GB6OIkqD1GpkvJQGyVtWE0wpYm%2B3yIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK%2BWLYDVP9FkNSKeSrcA4IUD0oOIYmir5CtcvkURMltF3%2F151m6EL0%2FfhsZjin0JoXaAcBef2aolMiX5hMj6xqu3LNxQ%2FjYf9ptfSuE7KJRV3%2FLQeY7fgm3wqem0SO5qXfpJzfs2H7d9jdRrWYzJfiGxWvamGzkUz3J3Htv%2Bg1QdxyN0jbhJnjQc4OSIWqq4QtSyaO0thSbs3yBhVQBp%2Fm2O%2F%2FD01THM4Mf8J28LI7X%2FyefsVqJKwxOfwZRcy0ysp5xQEyjOEcEq8V%2FhAYGd%2Fw8TkWl5b3gV6VWky%2FqreaSHb9XysdkBMYJdpxvnEoRJ%2F4YU9gtmp6c%2FInq7RgRwHmRT34wG%2BRCPEQ6ohTc1MpYYn%2FDbqAs%2BHBvNerCvRH%2BB6SnYGI%2BfzyAZQ4J7MG2iYjU948icV7G7RAV4D460DlSpERDsDuevVvE0bMllI%2FMlcqkobnnrpLFnaRBNx5xMFW0wZ4IZGpuimLpecKq4xqiCPBQnfkgcPuP2el%2FfI0mrvXYAiWPWaZGsdreM8SVdiLy676N5oC7MJSA8uFpzP5g4M0aESkluL9U0dOJLupGI5gohacsv1mzb%2B64mjjO428n10rs%2F6UjMw0qkygMaoJH%2FCFPtD9BhC0SinZcbk2JBYYZFrHvEiLzca9rMJSr2sQGOqUBYsCqsu5XejuneCyM8K8aYu8sMazdIza59vnaAE0WYELsVebm1zDNQU3%2Bm3YcJ%2B4mm4Vo9BXzcI57cj6BoFXtoSlweJAc7u6qAGX01WyDwiftcOsPLENYVrTBpuwVdHuSb%2F5xyZCgnvuYYLIe0LeLgNxur5Hr04HRUnJyKHPmiqFxkehbqkapl%2BmMn8hH14z7qwVCoR4LxkcTYd4I6ML5jZNrMBnJ&X-Amz-Signature=810d940d2fb53cf4bfacd58d15fe69f9255a54d700ab8cfbcd1e02813dafc926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RTKYO7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIGUpihh0BIluVSVlAihiMS7plclWrXprvakPUcQmrRWyAiEAucrW8AuKQYXy39f9Apeg3YOmUoQ%2BlDTJCafk53MGGs8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOEu0pDSgI6dJyAMircA4JbxQI7Z9E8wbKkWCdTBdcy%2FiFUqBuoMmHgKfaRIGeKjSNrJKVwc%2BN9zllTxbCPD4BRZwT0JDQRF8EwD9%2F2ROqHcbBWxHR%2Bq%2FcX9bV25s7S4iN6xvMc3t6%2BjuOOGD%2FNrjsYBUTUxRLpxRteS5Z2c%2BWZNrHTi8yjT40r4VwyVVJTatiB2u9KY%2B6YENsRklDgB1sueKJAolZipXylDFrQ5A%2B0wDkFdkMgWFsvpumDQpow0D9%2FP13hu9icdEkn74dgT4KnK6SxKwbPT%2F91QpA%2FrtSXvm2RZ%2BLXLY2PVioG%2FhEEw7Ai5I0IbSudV%2BpyEuP6OCpM%2BP%2BwsSggMMzrE4kxjAfmGZjA0QxaynCccU2bjQbHwjmUVlKc2xNJfeU1uwyw1KbDaLh7Xbi31ZZUHWvR8VnHYgKDKA1qvkgCFCJNCk91LIdlypj471Eowwgd0Fs6IyUNsN4o6YJgglRHGmRtqGp5ez%2BRLl4GWirnVkKOm%2FsQyXVBVQJquZfOwq7na0QwbBxu1a59SaX6icKZ7UJDDB4rYynaGzbC%2BnS8cuZJedOFWryy7tM6ZKN%2BeGeumZObQSTfYU4Oig2yLmNAFU0yzJzwjs15YamZiwxa8JLG6UTQqYn5pULs5vJWNvPFMKKr2sQGOqUBjS020zsegLTexbNXMyHcDvgbVq%2F0MKoCm0S5jhAW%2BBM33%2B6s80iBOtOLxMXd9sRFGDWfLbvapggDLLgYzPN89Qh0GK5OCyAQ2cjnUEKwronUbjLV4CY%2BzGwS%2BTSXGZ%2F%2FSpz0ckj4PlhqGOsXsw3SuDW0nArdRnreC4gSndRELG%2BZjnhlQ3R%2F2eADXcTEm1GS%2Flj%2FD4Dmi6EjOZp35vfGcn9f0igg&X-Amz-Signature=96cba500d39b5729bd743d95c4d27e8f6643e67fbba3310d0b4af29d6900ae21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623M6SFXP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCc4ldG4fkleSKibWmOgdDPwdUZVG1tgXedaUDIdBwX6AIgMMYl3LDbgWZQ0GB6OIkqD1GpkvJQGyVtWE0wpYm%2B3yIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK%2BWLYDVP9FkNSKeSrcA4IUD0oOIYmir5CtcvkURMltF3%2F151m6EL0%2FfhsZjin0JoXaAcBef2aolMiX5hMj6xqu3LNxQ%2FjYf9ptfSuE7KJRV3%2FLQeY7fgm3wqem0SO5qXfpJzfs2H7d9jdRrWYzJfiGxWvamGzkUz3J3Htv%2Bg1QdxyN0jbhJnjQc4OSIWqq4QtSyaO0thSbs3yBhVQBp%2Fm2O%2F%2FD01THM4Mf8J28LI7X%2FyefsVqJKwxOfwZRcy0ysp5xQEyjOEcEq8V%2FhAYGd%2Fw8TkWl5b3gV6VWky%2FqreaSHb9XysdkBMYJdpxvnEoRJ%2F4YU9gtmp6c%2FInq7RgRwHmRT34wG%2BRCPEQ6ohTc1MpYYn%2FDbqAs%2BHBvNerCvRH%2BB6SnYGI%2BfzyAZQ4J7MG2iYjU948icV7G7RAV4D460DlSpERDsDuevVvE0bMllI%2FMlcqkobnnrpLFnaRBNx5xMFW0wZ4IZGpuimLpecKq4xqiCPBQnfkgcPuP2el%2FfI0mrvXYAiWPWaZGsdreM8SVdiLy676N5oC7MJSA8uFpzP5g4M0aESkluL9U0dOJLupGI5gohacsv1mzb%2B64mjjO428n10rs%2F6UjMw0qkygMaoJH%2FCFPtD9BhC0SinZcbk2JBYYZFrHvEiLzca9rMJSr2sQGOqUBYsCqsu5XejuneCyM8K8aYu8sMazdIza59vnaAE0WYELsVebm1zDNQU3%2Bm3YcJ%2B4mm4Vo9BXzcI57cj6BoFXtoSlweJAc7u6qAGX01WyDwiftcOsPLENYVrTBpuwVdHuSb%2F5xyZCgnvuYYLIe0LeLgNxur5Hr04HRUnJyKHPmiqFxkehbqkapl%2BmMn8hH14z7qwVCoR4LxkcTYd4I6ML5jZNrMBnJ&X-Amz-Signature=ac260c7f92613e3aa37a7df140f06b977cc5d21dac824b297b3951b933625323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WNVSB7D%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCID9JXWxTe0KMfuSqSo1vPgzNVLcYwtzy44UTiKhAS2GgAiEAjx8isXay8tC8X6c%2Bt0UPuam04yJMdQYBlzp4giXhb90qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5bVisBaChLpS6VByrcA8NM%2B5UL2uifNeBwo1XrngVNMBfRxnkUkZ3YefbzkaXRd38kb3poQywUAxmV7bfjphrf%2F8CzUuIhbPB7G7sA0EPakFn4%2BKVdgboWQSu832hk3vhVFIWSXrFiX5QNS%2FzlxNrwjoOMJASp%2BNNVRpTlbZ%2Fqd35k2zmEEu2sgcaIpdxg%2BfUJ3CN%2BGY2SogQxLv2YHP7qSixlTbGX1MXoPsbo9fZxXthsZ5zWBkwXVgtHzRrlaonly%2F4yjOIQhgJbQNWt4WFEmx4AK4%2B9zZ%2BvE%2FyzFkzcQvJXAOPsuRe6gfSflyxkeGxPKkHmX0%2F9keADvQsLuVr4An7k9w3Yhfq%2BnUpjZFtoqLrmtAdviRrYo9rO0FJTclzf4185wfQMAQdo2EeomAANLtyyWKOoVOkFdZm%2FTWl4lBmApfZjDjoS%2FIGehoZYL9U1n%2BeXgq0eiax8ixPvbIyRa0XWYUFIWQ%2Be2F1K4jj86PuRg%2B4qsvqk31f4U4ZBhMwq5OBfX%2Fu%2FUHRlbMG%2FvCqCofrh6MKPIo0BaZ%2FgPjAzs3OOU9ill0WgHdRykluHIZxTIqH4CZqe4vL5BOPfF1Bcld3OP2Pr6BStqjXpoP62hz5u%2BCF8raZbDjakeKbRT3wtWpjpQsi9qtGcMJir2sQGOqUBYLQgeSiT%2Fn4jsa5%2Bw9Z86mJtVA79WRb4jZD8uwGA3BdgIQChYv3oAPGomM7%2B082Yttcq1KzsEnjBinK%2BWHax8nygVEoTcxLEK991e95udMp9sKrIyprJlVC%2BUU1GI9OW3N01eRP7olWkom%2Bw2QjYhKkYsjL1c1cLRG01dqVrGPRhdM4S%2BwAb2GvtGCunqCTmHu%2FfGrAc4yaOzII8NLOxybSzwSnz&X-Amz-Signature=c8231b1d531fa38c4e9843b2ea7016e07dece330a959f6949b16fcb08ff74c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623M6SFXP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCc4ldG4fkleSKibWmOgdDPwdUZVG1tgXedaUDIdBwX6AIgMMYl3LDbgWZQ0GB6OIkqD1GpkvJQGyVtWE0wpYm%2B3yIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK%2BWLYDVP9FkNSKeSrcA4IUD0oOIYmir5CtcvkURMltF3%2F151m6EL0%2FfhsZjin0JoXaAcBef2aolMiX5hMj6xqu3LNxQ%2FjYf9ptfSuE7KJRV3%2FLQeY7fgm3wqem0SO5qXfpJzfs2H7d9jdRrWYzJfiGxWvamGzkUz3J3Htv%2Bg1QdxyN0jbhJnjQc4OSIWqq4QtSyaO0thSbs3yBhVQBp%2Fm2O%2F%2FD01THM4Mf8J28LI7X%2FyefsVqJKwxOfwZRcy0ysp5xQEyjOEcEq8V%2FhAYGd%2Fw8TkWl5b3gV6VWky%2FqreaSHb9XysdkBMYJdpxvnEoRJ%2F4YU9gtmp6c%2FInq7RgRwHmRT34wG%2BRCPEQ6ohTc1MpYYn%2FDbqAs%2BHBvNerCvRH%2BB6SnYGI%2BfzyAZQ4J7MG2iYjU948icV7G7RAV4D460DlSpERDsDuevVvE0bMllI%2FMlcqkobnnrpLFnaRBNx5xMFW0wZ4IZGpuimLpecKq4xqiCPBQnfkgcPuP2el%2FfI0mrvXYAiWPWaZGsdreM8SVdiLy676N5oC7MJSA8uFpzP5g4M0aESkluL9U0dOJLupGI5gohacsv1mzb%2B64mjjO428n10rs%2F6UjMw0qkygMaoJH%2FCFPtD9BhC0SinZcbk2JBYYZFrHvEiLzca9rMJSr2sQGOqUBYsCqsu5XejuneCyM8K8aYu8sMazdIza59vnaAE0WYELsVebm1zDNQU3%2Bm3YcJ%2B4mm4Vo9BXzcI57cj6BoFXtoSlweJAc7u6qAGX01WyDwiftcOsPLENYVrTBpuwVdHuSb%2F5xyZCgnvuYYLIe0LeLgNxur5Hr04HRUnJyKHPmiqFxkehbqkapl%2BmMn8hH14z7qwVCoR4LxkcTYd4I6ML5jZNrMBnJ&X-Amz-Signature=3f940ca67f3b3422f0273dc361dcfd2454cff8aa2dc1b8f5dc36d10a94438cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JQWBMA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5vEW%2FqiL6c0tsNrL%2BJkwvll4iQc15L%2BiavStCXaS0QgIgd%2BJGOzOZKV0jkKRGt8vw9ja9awZecZh8g88CSsabM3wqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPpdoc5NVNFvOB1YyrcA%2BEEw%2F4Mbysuj4PVRLdTq%2BcU23QAGyWkpV26HwexGJ8LNQrxIlOO6%2Fl0kLZw7Fv7no2fkRW6AfiHJ%2FA8RoVwrsBtiqjcS6kBvE2BG7SeFwds8I3N9K9S5OyS%2F7maACL9gPXHaAcgDPlUj8N6mHeOQHfZdccLvse0RocK8uwkYGPKx5SwNAuAmpAaKUZyb6FGE8DUqbNt7BfPgWq9HJLNIYCsIW3CpW2OsfH1NaK%2F64mHwQlHXcSH%2FzO%2BsNIYyr3hgl8DIUP1SdaMxlq5nmADsdSvNyyoh20SWAgk8K2fBqe0Yvzlw6OaScqxe3B276iA1lkIOFq3raell1sXpm%2Boro4UQjXKurUTUSZ%2FzYZkoKDT79QpVVeo5ZLqaVloVvp2a3i6dArmOBfAgefGQKyPslIc0nlslIz8pFtJfrjFJRFlmfxi2dRJ%2FCRObeqwVqWpYgs0wP%2Fep2G%2F0xHkmx3WKz%2Fbpcb5KTnCZHASKfBKomB5hZbM1ceScf53itATdTKrEiZaWn7puQwtku24Pi9UzjJhjT%2BPMSN%2Fk%2Bme9ZBIQqai04Mm8m8KlqCslEoBN%2BVLqG2cS8%2F8BugiJGesQSijFJBxdubXYwfRvXChEMW3ZOoayetcVAcMxaaJ0KGDMK6r2sQGOqUBNDzFtjZEaLOqfWOQ2M8%2FN%2BkartyVFGgSX7Yb8ye6Y08qrXy2lpe1u9X1Do9bSIrhZdtbAnQCCR0F4RY%2BJuYWUQCgl%2FbCr4iysISPc6xXA2eufAXuMz7oaPDsJERcz2wmTr0ovVmhcbgTLasAGxsl0BD7RSpZ%2BGvraHcz8wcfbCFm05uSJ%2FFDcxPG0kGzzvh5Wh%2FjIHHI2MIXgyJhWsUdWUUxFqDb&X-Amz-Signature=b225465df0ddc52b964287463c8d0e51d900c377ea79369d819396a1d392ae68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623M6SFXP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCc4ldG4fkleSKibWmOgdDPwdUZVG1tgXedaUDIdBwX6AIgMMYl3LDbgWZQ0GB6OIkqD1GpkvJQGyVtWE0wpYm%2B3yIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK%2BWLYDVP9FkNSKeSrcA4IUD0oOIYmir5CtcvkURMltF3%2F151m6EL0%2FfhsZjin0JoXaAcBef2aolMiX5hMj6xqu3LNxQ%2FjYf9ptfSuE7KJRV3%2FLQeY7fgm3wqem0SO5qXfpJzfs2H7d9jdRrWYzJfiGxWvamGzkUz3J3Htv%2Bg1QdxyN0jbhJnjQc4OSIWqq4QtSyaO0thSbs3yBhVQBp%2Fm2O%2F%2FD01THM4Mf8J28LI7X%2FyefsVqJKwxOfwZRcy0ysp5xQEyjOEcEq8V%2FhAYGd%2Fw8TkWl5b3gV6VWky%2FqreaSHb9XysdkBMYJdpxvnEoRJ%2F4YU9gtmp6c%2FInq7RgRwHmRT34wG%2BRCPEQ6ohTc1MpYYn%2FDbqAs%2BHBvNerCvRH%2BB6SnYGI%2BfzyAZQ4J7MG2iYjU948icV7G7RAV4D460DlSpERDsDuevVvE0bMllI%2FMlcqkobnnrpLFnaRBNx5xMFW0wZ4IZGpuimLpecKq4xqiCPBQnfkgcPuP2el%2FfI0mrvXYAiWPWaZGsdreM8SVdiLy676N5oC7MJSA8uFpzP5g4M0aESkluL9U0dOJLupGI5gohacsv1mzb%2B64mjjO428n10rs%2F6UjMw0qkygMaoJH%2FCFPtD9BhC0SinZcbk2JBYYZFrHvEiLzca9rMJSr2sQGOqUBYsCqsu5XejuneCyM8K8aYu8sMazdIza59vnaAE0WYELsVebm1zDNQU3%2Bm3YcJ%2B4mm4Vo9BXzcI57cj6BoFXtoSlweJAc7u6qAGX01WyDwiftcOsPLENYVrTBpuwVdHuSb%2F5xyZCgnvuYYLIe0LeLgNxur5Hr04HRUnJyKHPmiqFxkehbqkapl%2BmMn8hH14z7qwVCoR4LxkcTYd4I6ML5jZNrMBnJ&X-Amz-Signature=7f326dbd0f92c2cf66f9ab14b482550c2b1204b5ccc56e649fd246d11cbccd5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYT5LHY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCzodGj448GQzVw8vYfBx%2FjmbvuBqORp7ai7V0bBERwkwIgPBQAg1p1AZU5TiPPmvHZ74bAiJ7J5y3gX6I%2BmHj%2BvUMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETRG3q1RcHf19oEtyrcAxGPu75AcioN8q6AJDeEZbrzDiFrdeN0oBlOArFclOa2k%2BwskDhQYsj%2BNrItt%2Fn3%2B2%2Bxo%2BB3mwxhXk%2BLz6rZy1BDSmgk5mHqz755xahEJL2cOkkkse9oGcjaBIE9MVYeGGVtDeQFEitbuoW3vPFEdbOmVRhgd%2FI2vn%2FoCDeNzADq9PdayckipOUraBwyrN67bdW%2F6qH0R8BtJPs8D%2FPgwWY9lOmbm9VC1XTmjB58%2BK8EcHXeqa8S%2F4ElQptyG9kvDH6%2FBUnU9WH7o2JvxwDogaAcUxia51J8DsM7xwrTtgYhqSDQGRuzEvGn41z5PDSGihG2ucEtH4YIETCofbtI3acuUsESSfSWMLLLvHAsHTCNSJZoXYPOnCEWUDeUL1S3pdqgFMXKzVXltV2OyS4sCZ7PJ9gn%2BuvmjFrZwBU%2B%2Bcz1zraijzxN6zkodjIiEdlbWNPDc35PWVdK3Yp2CSwoFASnA2uByRcqN9xuhUqJuTPYapKc9UWtDYWg4GvPbwd32KJZOHJHnz04m33qhsKlssI1%2F6T3oFBH6FsLCme71rjnLxH3dtDTYaREFEQCIXNLzZXhq1LSDRioU91g4UmSJHob9L9L3VEUQ4f6zSkdQan2B7SkGw05Exjn7b5UMPCq2sQGOqUBIf6ybPcw6ELlR47f6VG3wAiksuP488DCZOLoPl7m5OiRyZ6ySUAsd%2BVH7RBwXeCe7k5YsIYcLN698BkaJXzGitV1Z0wMdYp9qQUATmXV0sVUfAOx0on6eoy1MBd69J6I1EWniY0Cjc7tf3LqAfdsdnUBzwtxSrhNYVIbWyVyqR8%2Bv1%2BC%2FtZYDY5OyPmOnVvYctmMPBzBpSYeqpZxA0ZZ8iJzF9aZ&X-Amz-Signature=db93f999a7fdb29aefca0efb3b4b8afa1f3b6ce627b36c311ff99ddaa565d20e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYTH73HJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDEoODVkpFFGSRz7tovoEstGHddNgTEe%2Bou%2Fv9BtAg0HAiEA%2FrZttQ8sAFzi2%2BGdjquj28YlcXFDedN3nx8LWhc4HV8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMO521fvZhap18cSWircA9N3iAhjPo43S7OXzzZyg2Lr%2F%2F1d%2FpUNtGEIHUo%2Fmbqthf%2B%2B4PNFdVARTqjA%2BxuXsQo89T6mK80hryJ5loWbeDc3Wns3UnxsJY1oiPBjlMz%2Fv%2BrPRaMTCootNz2FIM4KYZxHxKC1n%2B29AwtQsbouXOqqakonMeazehuGmnWE%2F4y1VVsbDCkm7mY6I5ebUoL5OtQrG6alDddnmRIKi2dk%2F%2BLnCHiUW2OcsI6%2Fniirf3m8O7nng63tfI6iies2nWrX9%2Fg1O4YarnTZOC2jqSqhytTePhEJGrYndkC%2BGSB1I%2F4eocTO6C%2FcJNo%2BX6Itdn4whDvlngPRUH4u0Fc6zWKGExO8mTe8iZ01amidCJsyt7D70QITHxvXp0fzEPJNOPUEQBikN%2BIyKhj7RIEkiuySMqPlgxHIXnfIg39aiLlsawXC49t4zi37HqPwgHLIOERms4xNu1f77QN%2BGMS%2Bac7EYftIQaLLsScWyeU5rsUCh%2BQfUBaf6xEtWaNgVT96YvWk2jU6UbLnkVbJhifvUc41zGeUVn2NZDa%2FFlthwz3NMVH0jbTc0KjHOI89GGLoTeyZn2PnWDOuP0BBCKtnPUGtYZ%2BgFqAJoGdo0%2F4im0S%2Flb6ZIEyTkCYXq93X0X9WMIyr2sQGOqUBQ6Iye%2B7VMa39KMmhqrxdqsoh9MGnA9RJu8ssmy%2FE1fsw2FdzFa1Xq2E6R4epmPv1ikM3Lmsz%2Bd06wIZ%2F7mdo%2BKh5EZI13qsmxxHuFwoAMZ8pCgMSmpp6kFo7wKQCwXquux0QRgCTt2IHcJaHZnOLH7GPNOOr9iEJjXHgZOhCm1SUZPHayJi0q7cJdGCaDBl4QtQwG6F86BzSyxw9QAfqXjTKatce&X-Amz-Signature=1a9c46915eb4f73c92e221e4e5eca12fe95a642652852821a05828a4da851377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QOHMEDG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIFwKlFtRJu82rjP6jTcfFO9tV9kEWvY1vS5MMee8OjmvAiEA2ZltUH4%2FpD6EYKZ3%2FczhxIoku88%2FF084yO2T4diUGqYqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHe02vCIda8efMc%2FxyrcA5UtJa95OVH4D6QMbT63MZp2PC3EJJyP%2FxLyTMVB3UHjem3RXMbDE7MSp2tS4QuYm4AYJ7jCkB2%2BGTSZ8mkh78M0O3QIn9V91zuFBm5DHrVvE4DyXJ4tMx1M8%2FIlIcVWfMm3aS2NXEWnI5nGsfm2KAbd6YTt5OOiI2GrJkfdfiHGfgoE8Xw6dpVY4KIK56U6O8kWvqID4DJUpe1TMzFKqXNWm6b9OhVov5iEO1KEjQYzY4MYgnzWnIPqTOWXzjGU8me7g2dhK8w4Zc%2F%2Bb81XuzMkWSEkPeJgzfCJYMaYYyJxDmXfqsKEViCDigxOGhqGnidQ4d%2FS9viwp1tYKlrkNyZCE%2FGndVwreGpJwpYTE2aHseJJ1cn7%2FRRKTGQ%2BmDs%2FMlwRRb1wtER4WsJiH8VZXAtOlDwoHvPE3sjEhxi9sVErzzeNKFqMx6QuqalR8MjSPUFhOPwirb07nnA%2B2TrrmW%2Fa2MQQRcqVMlCmVs9pTJoqarAAG6ZyFJVXfRuFY4v4mKR0XtFzdWpTbMGDphxFH%2Fy3EhGRfyCL6JQ9lDWy3eeBpiBn59OgAc%2FjfCB47f7c%2B1THB4gclNCYdecKqPYXE7I0mTvF5jBF9gz39xk0wdcUUDWaOPEn3L7cAFfWMLur2sQGOqUBzLxYPUIawa2OgWW5sutr2u5cheIOZ3HhK34XsP3dCAPwS5TCc%2FyobmmIbEO0wqXp7W02zgAVMJWwqVpIHJK2xo%2FatiPSBV6XTtak34JeS692PzObzABDImWJyl4oEfbVKt5tUdNsKUbUzvk3j%2B1VVLU8r8wyaufK3XPR0akFEMKoIJvVA54dL33lp01dyYM8k3r7ZTO5gu1ko7al7kGMrxMFvniz&X-Amz-Signature=5a0c4aa0f8315986cf63cc29a8b9c1ced8834bb25da09b8348f6f73520bf2120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQQNT2BU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIAbxkZt0DmHPGEFOjomjTMvbEMfmX%2FR0bHb87ks8ts8IAiEA0SCI7fkWrh7prqR9I%2BQlbFbL9nIhdwbApfqlazK4iS4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqDwItSCVUc5AteaCrcA10aaNcf3n1RJZmm1%2BvIE93GW5bQT5jYiFKMyHd%2Fb2PHq74XGCHR%2BMd7VOmIGsma9F7rFr%2BztfgzqY0bilW%2FrjrVNcBNM63cGJdm9j9JXH%2FVJYUc17bZkw01w4e0XiaNTXkDElhDsqIUGJ%2BoAl%2BTnxjub6kBttgmkJNVgp9Asu4kNSlnCOo88ldW4jKEmaSYWEWG769ZR9sYrnRBFRxKBVzoIFp9RbIby6jrdanulvrBUmyBDW1OMsUAuAHuaPNeRGdoCwiF1jbagywAc4LKmvQNoCnuAyxTPni8lzJWAHXOg6caJlrgebXUDJ3PygBOtHB5BNQJTWIwQLW2KSDlaM5IvBsSeVP2eCTCnyejvYdgRlToK0UH6GI2KsXeHJ5ydZGXrBo3294CVuJyOOsQvKMVX9K%2Fi3bZ7VzpH61Yywk2jABw4Wf6dkW15dMbpk5WlQLu9QsKs9CXISn1wlnKnXO8LMTpbY2j7OOGSdoK%2F%2FXZ%2FJEE0FHcgSgO3%2BiU1GYQbtYZ7aKfYO9Lmera%2BX6cwniXRZhbnGdA7IAwn1PoF8Ik%2FzlbZSkYNQmCs9lw4tGqx88zxMg%2Bj25SRik64OhOYiqx50rzqNA35%2BoUB9EfkGJM6UJLCdjBTTnPf9D%2FMLer2sQGOqUBD2ow9bRDM80FWTs2p5mFNV7pU%2F02YMeB58cHgjw5ZAgGfcz6PWeQA1%2BupmZwprpZRpCjyZBUKfS8J%2F5VEjxNcMbOxjHEL2YHVrKARDDlyYxqw%2FvgwvSm%2BIDdlfciMPA7ikbZXragl6WY9U%2Fq1Ny8uvR1CdFat0QQeCPe%2F7m%2BykaCtirVimIdGpBVpNYSpDW%2FjlAVzjj3YoWaifqmYhqTgVnXBxmU&X-Amz-Signature=81a2cce6e827ca81943d70d9d7f18c2f4f433fa63c6b71fbb46e8af294137b2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGUKLBL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDqeU5a2TSuyv21lpr%2BbDRD11tR0J85dRyk3QA45eAOvAiEAikcA9yjGGt7lOoMqxxgOK7vFn9W9oDpaNjj4ELdeg9EqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwzro4u0iVmoAkIzSrcA6ndNa1PE1aIw1zz2iBJ39uy1epY0xN2Jn5vbYB6h77EyoZgWdV3DvzH6R8IvAYbFYPZFnzIiO21cV%2FSucyRRtZLgrQWAWxhXjc1CHbyyTASx2XKVsin9m1AsM27eBw8EIWitstjumJ9EhE8GqX3Zube0SdiC%2BsDxuHQ8xEbGU%2FhGGyVzEWWTSNyVb1DpN1%2BL1gJNLdqP%2F1N7D0kwHf1%2B7v%2Bu2wHOvC5wg6pMVbzPwIKLAh1bAIhqG59N0dqi%2B073fuRUBK6m4nqtfEnZ44i7V3i0zAgUd3lFQZ%2F6iwhaO9HYN1T%2BG8dTcmdRACzgzl1ZwmU4qrC8jQQLPyU668dUqmMjFx8gh6vpNj2VCBlb6rYYiRcFjQVo3y0mXDLA7eI6ff3JzVTFOk8K2Ixmh6fTW4QkjLERd1ofiQvJdu5Y%2BMPsaSOeUBb3uEFKjc4Ik%2BIn3e393R%2FIKpUdNEfrU6hGqstcXCMyxGBGfpD01ceVYW3jGXAIguHZCKAEmbdkHA0RoEQWvu%2BeIp8AyyjH2obbm4%2B9byxzkmCuH2t8kmaX9eGbI59c6JlGYvxrMDl731qtu%2F61jXQjTxYGggL1EBTkV%2BX3t0UDUFXgWdJ2uQrAsLcM6%2B7pfo%2B9AfpwJTfMJSr2sQGOqUBR2bT6Dyl96O2Z6d9aVrLJXFdDWBTwICrlYUdxwnK8DB5og%2BbvEi7m%2BglHT4f53pgwH7ZOQeE0JclUlPRPTNstD8NjGxWuma5Ge8wA%2FdDlyZCQREo4hEsV1nCgcaRGWni0euMOnSkI06sEtsyh9OeVIy9ost8oULP9VjSea%2BgpqkGBjsYBuPxjRmIzR2OsH%2Bq%2FGmQM2pEzQMnXaZL%2B%2F3WYYP%2Fykk3&X-Amz-Signature=93d48edcc10720ad5e1083b0e894231d75e6e5dd7102cb9e9cb5fa61c0d75592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623M6SFXP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCc4ldG4fkleSKibWmOgdDPwdUZVG1tgXedaUDIdBwX6AIgMMYl3LDbgWZQ0GB6OIkqD1GpkvJQGyVtWE0wpYm%2B3yIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK%2BWLYDVP9FkNSKeSrcA4IUD0oOIYmir5CtcvkURMltF3%2F151m6EL0%2FfhsZjin0JoXaAcBef2aolMiX5hMj6xqu3LNxQ%2FjYf9ptfSuE7KJRV3%2FLQeY7fgm3wqem0SO5qXfpJzfs2H7d9jdRrWYzJfiGxWvamGzkUz3J3Htv%2Bg1QdxyN0jbhJnjQc4OSIWqq4QtSyaO0thSbs3yBhVQBp%2Fm2O%2F%2FD01THM4Mf8J28LI7X%2FyefsVqJKwxOfwZRcy0ysp5xQEyjOEcEq8V%2FhAYGd%2Fw8TkWl5b3gV6VWky%2FqreaSHb9XysdkBMYJdpxvnEoRJ%2F4YU9gtmp6c%2FInq7RgRwHmRT34wG%2BRCPEQ6ohTc1MpYYn%2FDbqAs%2BHBvNerCvRH%2BB6SnYGI%2BfzyAZQ4J7MG2iYjU948icV7G7RAV4D460DlSpERDsDuevVvE0bMllI%2FMlcqkobnnrpLFnaRBNx5xMFW0wZ4IZGpuimLpecKq4xqiCPBQnfkgcPuP2el%2FfI0mrvXYAiWPWaZGsdreM8SVdiLy676N5oC7MJSA8uFpzP5g4M0aESkluL9U0dOJLupGI5gohacsv1mzb%2B64mjjO428n10rs%2F6UjMw0qkygMaoJH%2FCFPtD9BhC0SinZcbk2JBYYZFrHvEiLzca9rMJSr2sQGOqUBYsCqsu5XejuneCyM8K8aYu8sMazdIza59vnaAE0WYELsVebm1zDNQU3%2Bm3YcJ%2B4mm4Vo9BXzcI57cj6BoFXtoSlweJAc7u6qAGX01WyDwiftcOsPLENYVrTBpuwVdHuSb%2F5xyZCgnvuYYLIe0LeLgNxur5Hr04HRUnJyKHPmiqFxkehbqkapl%2BmMn8hH14z7qwVCoR4LxkcTYd4I6ML5jZNrMBnJ&X-Amz-Signature=e2169170090f06cd5264d0407fb3793f42156e21f2d006e17528527e7549b8e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623M6SFXP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCc4ldG4fkleSKibWmOgdDPwdUZVG1tgXedaUDIdBwX6AIgMMYl3LDbgWZQ0GB6OIkqD1GpkvJQGyVtWE0wpYm%2B3yIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK%2BWLYDVP9FkNSKeSrcA4IUD0oOIYmir5CtcvkURMltF3%2F151m6EL0%2FfhsZjin0JoXaAcBef2aolMiX5hMj6xqu3LNxQ%2FjYf9ptfSuE7KJRV3%2FLQeY7fgm3wqem0SO5qXfpJzfs2H7d9jdRrWYzJfiGxWvamGzkUz3J3Htv%2Bg1QdxyN0jbhJnjQc4OSIWqq4QtSyaO0thSbs3yBhVQBp%2Fm2O%2F%2FD01THM4Mf8J28LI7X%2FyefsVqJKwxOfwZRcy0ysp5xQEyjOEcEq8V%2FhAYGd%2Fw8TkWl5b3gV6VWky%2FqreaSHb9XysdkBMYJdpxvnEoRJ%2F4YU9gtmp6c%2FInq7RgRwHmRT34wG%2BRCPEQ6ohTc1MpYYn%2FDbqAs%2BHBvNerCvRH%2BB6SnYGI%2BfzyAZQ4J7MG2iYjU948icV7G7RAV4D460DlSpERDsDuevVvE0bMllI%2FMlcqkobnnrpLFnaRBNx5xMFW0wZ4IZGpuimLpecKq4xqiCPBQnfkgcPuP2el%2FfI0mrvXYAiWPWaZGsdreM8SVdiLy676N5oC7MJSA8uFpzP5g4M0aESkluL9U0dOJLupGI5gohacsv1mzb%2B64mjjO428n10rs%2F6UjMw0qkygMaoJH%2FCFPtD9BhC0SinZcbk2JBYYZFrHvEiLzca9rMJSr2sQGOqUBYsCqsu5XejuneCyM8K8aYu8sMazdIza59vnaAE0WYELsVebm1zDNQU3%2Bm3YcJ%2B4mm4Vo9BXzcI57cj6BoFXtoSlweJAc7u6qAGX01WyDwiftcOsPLENYVrTBpuwVdHuSb%2F5xyZCgnvuYYLIe0LeLgNxur5Hr04HRUnJyKHPmiqFxkehbqkapl%2BmMn8hH14z7qwVCoR4LxkcTYd4I6ML5jZNrMBnJ&X-Amz-Signature=ae90809755b389c30521093bb49cd3765b3403ddf15d6759c48673aa7fe484bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOLRZZY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHbrsOFb21jZkY753xmcfgeyvUK1seaHGzGgB2Pif4szAiEAzC1GFeRuaj5GxbKnyDe8zcCqWZN%2FhYi2BrQ0AfZIFdQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtoutbm9ap9LHbzMCrcA8ES2V9fYIdF9nabpYULAsUSKLDTfXfQiSPaN19N6vtV2w139Xjjl30FwRk8wDXee9f9KTJettLXE7%2By4WCx%2BAVQjoAAGybwodGYByFefNbayBUZ3TYvYVC6gtBdZo644MpGl%2BuZGJT0PhXRVd17NaArQaRgY7ETKceRYVZkyrM6ZwLeOO1ZJufYoWN4UHv1fhVcsWi0f4CgF6WbqQzUqEWkae0vVGwA2V%2FU2jFWKyyqMpLx8VgUiI32D7Xcqq8z3Ruf4EfoAtA%2FyxehNt7BrZQMKH%2FDtl42%2BY29aRzqhjiuBpalsgmP1iB6zxijQtNubTDdZLNA40sdxOCxuFAMRFSxJGJjLnab6CiJmGSvVS4X84FtSTYmRHyxsNP7TjLi4lqGoAhLks%2BWbPcbCJeQec5Ve0bBKWE4qGvQQMguCkrjuTJ7Olhgp4gKNxPsWh3KnCWfaCM4QpXNbHPYeNSSAToWc%2BJGOpgS8E1ud1lZLPBQBW40xTkcljhHsujphlJf3okonpFUDMMKeeZG8n5C0lKW1fEr0gUj4iCHZ6ZGs%2BgSeDm%2FFTRs2ZOliYkNpFyTpQwuF0ddtHOilc5VcVKhIuzZUqEsU79xIV4ZlCgtSeHbvkUovPvTPGE6MS0xMIyr2sQGOqUBS71jA%2BbllnA0Q3MTn%2F9sb4Z0xEwgkyRrU40UZZN7Oyv03dIPvBgpoEmlw9JY4bxHohu34QpYqb0C0z%2FxIyvRTb%2BtRGDFjrU8rhhNcxMWhEn%2BuwUp%2FPXFSK9fMVKqVPdoCUt332lQxd0D48FZqHgMMl423zjo3MWO2kNTipIoYzW4CjHj4sLcqOiv%2BArDT%2BfrIxywWowUTqZALhRfGfpNKxOAUyra&X-Amz-Signature=aae745f74e364c31ccdcca2c617ed7c2778579d325aaa96d8243ebf64862e26a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOLRZZY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHbrsOFb21jZkY753xmcfgeyvUK1seaHGzGgB2Pif4szAiEAzC1GFeRuaj5GxbKnyDe8zcCqWZN%2FhYi2BrQ0AfZIFdQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtoutbm9ap9LHbzMCrcA8ES2V9fYIdF9nabpYULAsUSKLDTfXfQiSPaN19N6vtV2w139Xjjl30FwRk8wDXee9f9KTJettLXE7%2By4WCx%2BAVQjoAAGybwodGYByFefNbayBUZ3TYvYVC6gtBdZo644MpGl%2BuZGJT0PhXRVd17NaArQaRgY7ETKceRYVZkyrM6ZwLeOO1ZJufYoWN4UHv1fhVcsWi0f4CgF6WbqQzUqEWkae0vVGwA2V%2FU2jFWKyyqMpLx8VgUiI32D7Xcqq8z3Ruf4EfoAtA%2FyxehNt7BrZQMKH%2FDtl42%2BY29aRzqhjiuBpalsgmP1iB6zxijQtNubTDdZLNA40sdxOCxuFAMRFSxJGJjLnab6CiJmGSvVS4X84FtSTYmRHyxsNP7TjLi4lqGoAhLks%2BWbPcbCJeQec5Ve0bBKWE4qGvQQMguCkrjuTJ7Olhgp4gKNxPsWh3KnCWfaCM4QpXNbHPYeNSSAToWc%2BJGOpgS8E1ud1lZLPBQBW40xTkcljhHsujphlJf3okonpFUDMMKeeZG8n5C0lKW1fEr0gUj4iCHZ6ZGs%2BgSeDm%2FFTRs2ZOliYkNpFyTpQwuF0ddtHOilc5VcVKhIuzZUqEsU79xIV4ZlCgtSeHbvkUovPvTPGE6MS0xMIyr2sQGOqUBS71jA%2BbllnA0Q3MTn%2F9sb4Z0xEwgkyRrU40UZZN7Oyv03dIPvBgpoEmlw9JY4bxHohu34QpYqb0C0z%2FxIyvRTb%2BtRGDFjrU8rhhNcxMWhEn%2BuwUp%2FPXFSK9fMVKqVPdoCUt332lQxd0D48FZqHgMMl423zjo3MWO2kNTipIoYzW4CjHj4sLcqOiv%2BArDT%2BfrIxywWowUTqZALhRfGfpNKxOAUyra&X-Amz-Signature=fd65fccf81af11656908cd7fe345cc5cbd4b6868bdbc53025ba1a633ee9c042f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOLRZZY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHbrsOFb21jZkY753xmcfgeyvUK1seaHGzGgB2Pif4szAiEAzC1GFeRuaj5GxbKnyDe8zcCqWZN%2FhYi2BrQ0AfZIFdQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtoutbm9ap9LHbzMCrcA8ES2V9fYIdF9nabpYULAsUSKLDTfXfQiSPaN19N6vtV2w139Xjjl30FwRk8wDXee9f9KTJettLXE7%2By4WCx%2BAVQjoAAGybwodGYByFefNbayBUZ3TYvYVC6gtBdZo644MpGl%2BuZGJT0PhXRVd17NaArQaRgY7ETKceRYVZkyrM6ZwLeOO1ZJufYoWN4UHv1fhVcsWi0f4CgF6WbqQzUqEWkae0vVGwA2V%2FU2jFWKyyqMpLx8VgUiI32D7Xcqq8z3Ruf4EfoAtA%2FyxehNt7BrZQMKH%2FDtl42%2BY29aRzqhjiuBpalsgmP1iB6zxijQtNubTDdZLNA40sdxOCxuFAMRFSxJGJjLnab6CiJmGSvVS4X84FtSTYmRHyxsNP7TjLi4lqGoAhLks%2BWbPcbCJeQec5Ve0bBKWE4qGvQQMguCkrjuTJ7Olhgp4gKNxPsWh3KnCWfaCM4QpXNbHPYeNSSAToWc%2BJGOpgS8E1ud1lZLPBQBW40xTkcljhHsujphlJf3okonpFUDMMKeeZG8n5C0lKW1fEr0gUj4iCHZ6ZGs%2BgSeDm%2FFTRs2ZOliYkNpFyTpQwuF0ddtHOilc5VcVKhIuzZUqEsU79xIV4ZlCgtSeHbvkUovPvTPGE6MS0xMIyr2sQGOqUBS71jA%2BbllnA0Q3MTn%2F9sb4Z0xEwgkyRrU40UZZN7Oyv03dIPvBgpoEmlw9JY4bxHohu34QpYqb0C0z%2FxIyvRTb%2BtRGDFjrU8rhhNcxMWhEn%2BuwUp%2FPXFSK9fMVKqVPdoCUt332lQxd0D48FZqHgMMl423zjo3MWO2kNTipIoYzW4CjHj4sLcqOiv%2BArDT%2BfrIxywWowUTqZALhRfGfpNKxOAUyra&X-Amz-Signature=92b0bc53d6dd614e26195343638659fe88ce94edbeecbbba9242c6db7ebe49e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOLRZZY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHbrsOFb21jZkY753xmcfgeyvUK1seaHGzGgB2Pif4szAiEAzC1GFeRuaj5GxbKnyDe8zcCqWZN%2FhYi2BrQ0AfZIFdQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtoutbm9ap9LHbzMCrcA8ES2V9fYIdF9nabpYULAsUSKLDTfXfQiSPaN19N6vtV2w139Xjjl30FwRk8wDXee9f9KTJettLXE7%2By4WCx%2BAVQjoAAGybwodGYByFefNbayBUZ3TYvYVC6gtBdZo644MpGl%2BuZGJT0PhXRVd17NaArQaRgY7ETKceRYVZkyrM6ZwLeOO1ZJufYoWN4UHv1fhVcsWi0f4CgF6WbqQzUqEWkae0vVGwA2V%2FU2jFWKyyqMpLx8VgUiI32D7Xcqq8z3Ruf4EfoAtA%2FyxehNt7BrZQMKH%2FDtl42%2BY29aRzqhjiuBpalsgmP1iB6zxijQtNubTDdZLNA40sdxOCxuFAMRFSxJGJjLnab6CiJmGSvVS4X84FtSTYmRHyxsNP7TjLi4lqGoAhLks%2BWbPcbCJeQec5Ve0bBKWE4qGvQQMguCkrjuTJ7Olhgp4gKNxPsWh3KnCWfaCM4QpXNbHPYeNSSAToWc%2BJGOpgS8E1ud1lZLPBQBW40xTkcljhHsujphlJf3okonpFUDMMKeeZG8n5C0lKW1fEr0gUj4iCHZ6ZGs%2BgSeDm%2FFTRs2ZOliYkNpFyTpQwuF0ddtHOilc5VcVKhIuzZUqEsU79xIV4ZlCgtSeHbvkUovPvTPGE6MS0xMIyr2sQGOqUBS71jA%2BbllnA0Q3MTn%2F9sb4Z0xEwgkyRrU40UZZN7Oyv03dIPvBgpoEmlw9JY4bxHohu34QpYqb0C0z%2FxIyvRTb%2BtRGDFjrU8rhhNcxMWhEn%2BuwUp%2FPXFSK9fMVKqVPdoCUt332lQxd0D48FZqHgMMl423zjo3MWO2kNTipIoYzW4CjHj4sLcqOiv%2BArDT%2BfrIxywWowUTqZALhRfGfpNKxOAUyra&X-Amz-Signature=755265a9ed91cddd2f306241322831702d6c350509212836a0f42021096663f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOLRZZY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHbrsOFb21jZkY753xmcfgeyvUK1seaHGzGgB2Pif4szAiEAzC1GFeRuaj5GxbKnyDe8zcCqWZN%2FhYi2BrQ0AfZIFdQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtoutbm9ap9LHbzMCrcA8ES2V9fYIdF9nabpYULAsUSKLDTfXfQiSPaN19N6vtV2w139Xjjl30FwRk8wDXee9f9KTJettLXE7%2By4WCx%2BAVQjoAAGybwodGYByFefNbayBUZ3TYvYVC6gtBdZo644MpGl%2BuZGJT0PhXRVd17NaArQaRgY7ETKceRYVZkyrM6ZwLeOO1ZJufYoWN4UHv1fhVcsWi0f4CgF6WbqQzUqEWkae0vVGwA2V%2FU2jFWKyyqMpLx8VgUiI32D7Xcqq8z3Ruf4EfoAtA%2FyxehNt7BrZQMKH%2FDtl42%2BY29aRzqhjiuBpalsgmP1iB6zxijQtNubTDdZLNA40sdxOCxuFAMRFSxJGJjLnab6CiJmGSvVS4X84FtSTYmRHyxsNP7TjLi4lqGoAhLks%2BWbPcbCJeQec5Ve0bBKWE4qGvQQMguCkrjuTJ7Olhgp4gKNxPsWh3KnCWfaCM4QpXNbHPYeNSSAToWc%2BJGOpgS8E1ud1lZLPBQBW40xTkcljhHsujphlJf3okonpFUDMMKeeZG8n5C0lKW1fEr0gUj4iCHZ6ZGs%2BgSeDm%2FFTRs2ZOliYkNpFyTpQwuF0ddtHOilc5VcVKhIuzZUqEsU79xIV4ZlCgtSeHbvkUovPvTPGE6MS0xMIyr2sQGOqUBS71jA%2BbllnA0Q3MTn%2F9sb4Z0xEwgkyRrU40UZZN7Oyv03dIPvBgpoEmlw9JY4bxHohu34QpYqb0C0z%2FxIyvRTb%2BtRGDFjrU8rhhNcxMWhEn%2BuwUp%2FPXFSK9fMVKqVPdoCUt332lQxd0D48FZqHgMMl423zjo3MWO2kNTipIoYzW4CjHj4sLcqOiv%2BArDT%2BfrIxywWowUTqZALhRfGfpNKxOAUyra&X-Amz-Signature=80676b4e02e8647cc98cb27a0f1db5bbfc8b7e2398300a4fe5cf0460972f1d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOLRZZY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHbrsOFb21jZkY753xmcfgeyvUK1seaHGzGgB2Pif4szAiEAzC1GFeRuaj5GxbKnyDe8zcCqWZN%2FhYi2BrQ0AfZIFdQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtoutbm9ap9LHbzMCrcA8ES2V9fYIdF9nabpYULAsUSKLDTfXfQiSPaN19N6vtV2w139Xjjl30FwRk8wDXee9f9KTJettLXE7%2By4WCx%2BAVQjoAAGybwodGYByFefNbayBUZ3TYvYVC6gtBdZo644MpGl%2BuZGJT0PhXRVd17NaArQaRgY7ETKceRYVZkyrM6ZwLeOO1ZJufYoWN4UHv1fhVcsWi0f4CgF6WbqQzUqEWkae0vVGwA2V%2FU2jFWKyyqMpLx8VgUiI32D7Xcqq8z3Ruf4EfoAtA%2FyxehNt7BrZQMKH%2FDtl42%2BY29aRzqhjiuBpalsgmP1iB6zxijQtNubTDdZLNA40sdxOCxuFAMRFSxJGJjLnab6CiJmGSvVS4X84FtSTYmRHyxsNP7TjLi4lqGoAhLks%2BWbPcbCJeQec5Ve0bBKWE4qGvQQMguCkrjuTJ7Olhgp4gKNxPsWh3KnCWfaCM4QpXNbHPYeNSSAToWc%2BJGOpgS8E1ud1lZLPBQBW40xTkcljhHsujphlJf3okonpFUDMMKeeZG8n5C0lKW1fEr0gUj4iCHZ6ZGs%2BgSeDm%2FFTRs2ZOliYkNpFyTpQwuF0ddtHOilc5VcVKhIuzZUqEsU79xIV4ZlCgtSeHbvkUovPvTPGE6MS0xMIyr2sQGOqUBS71jA%2BbllnA0Q3MTn%2F9sb4Z0xEwgkyRrU40UZZN7Oyv03dIPvBgpoEmlw9JY4bxHohu34QpYqb0C0z%2FxIyvRTb%2BtRGDFjrU8rhhNcxMWhEn%2BuwUp%2FPXFSK9fMVKqVPdoCUt332lQxd0D48FZqHgMMl423zjo3MWO2kNTipIoYzW4CjHj4sLcqOiv%2BArDT%2BfrIxywWowUTqZALhRfGfpNKxOAUyra&X-Amz-Signature=6a448c81477a06c213fea9f984cf1347e63f3e33d18c191afa7107097a927ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOLRZZY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHbrsOFb21jZkY753xmcfgeyvUK1seaHGzGgB2Pif4szAiEAzC1GFeRuaj5GxbKnyDe8zcCqWZN%2FhYi2BrQ0AfZIFdQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtoutbm9ap9LHbzMCrcA8ES2V9fYIdF9nabpYULAsUSKLDTfXfQiSPaN19N6vtV2w139Xjjl30FwRk8wDXee9f9KTJettLXE7%2By4WCx%2BAVQjoAAGybwodGYByFefNbayBUZ3TYvYVC6gtBdZo644MpGl%2BuZGJT0PhXRVd17NaArQaRgY7ETKceRYVZkyrM6ZwLeOO1ZJufYoWN4UHv1fhVcsWi0f4CgF6WbqQzUqEWkae0vVGwA2V%2FU2jFWKyyqMpLx8VgUiI32D7Xcqq8z3Ruf4EfoAtA%2FyxehNt7BrZQMKH%2FDtl42%2BY29aRzqhjiuBpalsgmP1iB6zxijQtNubTDdZLNA40sdxOCxuFAMRFSxJGJjLnab6CiJmGSvVS4X84FtSTYmRHyxsNP7TjLi4lqGoAhLks%2BWbPcbCJeQec5Ve0bBKWE4qGvQQMguCkrjuTJ7Olhgp4gKNxPsWh3KnCWfaCM4QpXNbHPYeNSSAToWc%2BJGOpgS8E1ud1lZLPBQBW40xTkcljhHsujphlJf3okonpFUDMMKeeZG8n5C0lKW1fEr0gUj4iCHZ6ZGs%2BgSeDm%2FFTRs2ZOliYkNpFyTpQwuF0ddtHOilc5VcVKhIuzZUqEsU79xIV4ZlCgtSeHbvkUovPvTPGE6MS0xMIyr2sQGOqUBS71jA%2BbllnA0Q3MTn%2F9sb4Z0xEwgkyRrU40UZZN7Oyv03dIPvBgpoEmlw9JY4bxHohu34QpYqb0C0z%2FxIyvRTb%2BtRGDFjrU8rhhNcxMWhEn%2BuwUp%2FPXFSK9fMVKqVPdoCUt332lQxd0D48FZqHgMMl423zjo3MWO2kNTipIoYzW4CjHj4sLcqOiv%2BArDT%2BfrIxywWowUTqZALhRfGfpNKxOAUyra&X-Amz-Signature=92b0bc53d6dd614e26195343638659fe88ce94edbeecbbba9242c6db7ebe49e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOLRZZY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHbrsOFb21jZkY753xmcfgeyvUK1seaHGzGgB2Pif4szAiEAzC1GFeRuaj5GxbKnyDe8zcCqWZN%2FhYi2BrQ0AfZIFdQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtoutbm9ap9LHbzMCrcA8ES2V9fYIdF9nabpYULAsUSKLDTfXfQiSPaN19N6vtV2w139Xjjl30FwRk8wDXee9f9KTJettLXE7%2By4WCx%2BAVQjoAAGybwodGYByFefNbayBUZ3TYvYVC6gtBdZo644MpGl%2BuZGJT0PhXRVd17NaArQaRgY7ETKceRYVZkyrM6ZwLeOO1ZJufYoWN4UHv1fhVcsWi0f4CgF6WbqQzUqEWkae0vVGwA2V%2FU2jFWKyyqMpLx8VgUiI32D7Xcqq8z3Ruf4EfoAtA%2FyxehNt7BrZQMKH%2FDtl42%2BY29aRzqhjiuBpalsgmP1iB6zxijQtNubTDdZLNA40sdxOCxuFAMRFSxJGJjLnab6CiJmGSvVS4X84FtSTYmRHyxsNP7TjLi4lqGoAhLks%2BWbPcbCJeQec5Ve0bBKWE4qGvQQMguCkrjuTJ7Olhgp4gKNxPsWh3KnCWfaCM4QpXNbHPYeNSSAToWc%2BJGOpgS8E1ud1lZLPBQBW40xTkcljhHsujphlJf3okonpFUDMMKeeZG8n5C0lKW1fEr0gUj4iCHZ6ZGs%2BgSeDm%2FFTRs2ZOliYkNpFyTpQwuF0ddtHOilc5VcVKhIuzZUqEsU79xIV4ZlCgtSeHbvkUovPvTPGE6MS0xMIyr2sQGOqUBS71jA%2BbllnA0Q3MTn%2F9sb4Z0xEwgkyRrU40UZZN7Oyv03dIPvBgpoEmlw9JY4bxHohu34QpYqb0C0z%2FxIyvRTb%2BtRGDFjrU8rhhNcxMWhEn%2BuwUp%2FPXFSK9fMVKqVPdoCUt332lQxd0D48FZqHgMMl423zjo3MWO2kNTipIoYzW4CjHj4sLcqOiv%2BArDT%2BfrIxywWowUTqZALhRfGfpNKxOAUyra&X-Amz-Signature=dd436e06e7a80e8cf9aae5eeb9617baa159b7a10954bd1768339f29281f22c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOLRZZY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHbrsOFb21jZkY753xmcfgeyvUK1seaHGzGgB2Pif4szAiEAzC1GFeRuaj5GxbKnyDe8zcCqWZN%2FhYi2BrQ0AfZIFdQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtoutbm9ap9LHbzMCrcA8ES2V9fYIdF9nabpYULAsUSKLDTfXfQiSPaN19N6vtV2w139Xjjl30FwRk8wDXee9f9KTJettLXE7%2By4WCx%2BAVQjoAAGybwodGYByFefNbayBUZ3TYvYVC6gtBdZo644MpGl%2BuZGJT0PhXRVd17NaArQaRgY7ETKceRYVZkyrM6ZwLeOO1ZJufYoWN4UHv1fhVcsWi0f4CgF6WbqQzUqEWkae0vVGwA2V%2FU2jFWKyyqMpLx8VgUiI32D7Xcqq8z3Ruf4EfoAtA%2FyxehNt7BrZQMKH%2FDtl42%2BY29aRzqhjiuBpalsgmP1iB6zxijQtNubTDdZLNA40sdxOCxuFAMRFSxJGJjLnab6CiJmGSvVS4X84FtSTYmRHyxsNP7TjLi4lqGoAhLks%2BWbPcbCJeQec5Ve0bBKWE4qGvQQMguCkrjuTJ7Olhgp4gKNxPsWh3KnCWfaCM4QpXNbHPYeNSSAToWc%2BJGOpgS8E1ud1lZLPBQBW40xTkcljhHsujphlJf3okonpFUDMMKeeZG8n5C0lKW1fEr0gUj4iCHZ6ZGs%2BgSeDm%2FFTRs2ZOliYkNpFyTpQwuF0ddtHOilc5VcVKhIuzZUqEsU79xIV4ZlCgtSeHbvkUovPvTPGE6MS0xMIyr2sQGOqUBS71jA%2BbllnA0Q3MTn%2F9sb4Z0xEwgkyRrU40UZZN7Oyv03dIPvBgpoEmlw9JY4bxHohu34QpYqb0C0z%2FxIyvRTb%2BtRGDFjrU8rhhNcxMWhEn%2BuwUp%2FPXFSK9fMVKqVPdoCUt332lQxd0D48FZqHgMMl423zjo3MWO2kNTipIoYzW4CjHj4sLcqOiv%2BArDT%2BfrIxywWowUTqZALhRfGfpNKxOAUyra&X-Amz-Signature=51aa2755030d88be7d72f2fa0967d522586e5243f6c42bb5aeece443ee694371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOLRZZY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHbrsOFb21jZkY753xmcfgeyvUK1seaHGzGgB2Pif4szAiEAzC1GFeRuaj5GxbKnyDe8zcCqWZN%2FhYi2BrQ0AfZIFdQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtoutbm9ap9LHbzMCrcA8ES2V9fYIdF9nabpYULAsUSKLDTfXfQiSPaN19N6vtV2w139Xjjl30FwRk8wDXee9f9KTJettLXE7%2By4WCx%2BAVQjoAAGybwodGYByFefNbayBUZ3TYvYVC6gtBdZo644MpGl%2BuZGJT0PhXRVd17NaArQaRgY7ETKceRYVZkyrM6ZwLeOO1ZJufYoWN4UHv1fhVcsWi0f4CgF6WbqQzUqEWkae0vVGwA2V%2FU2jFWKyyqMpLx8VgUiI32D7Xcqq8z3Ruf4EfoAtA%2FyxehNt7BrZQMKH%2FDtl42%2BY29aRzqhjiuBpalsgmP1iB6zxijQtNubTDdZLNA40sdxOCxuFAMRFSxJGJjLnab6CiJmGSvVS4X84FtSTYmRHyxsNP7TjLi4lqGoAhLks%2BWbPcbCJeQec5Ve0bBKWE4qGvQQMguCkrjuTJ7Olhgp4gKNxPsWh3KnCWfaCM4QpXNbHPYeNSSAToWc%2BJGOpgS8E1ud1lZLPBQBW40xTkcljhHsujphlJf3okonpFUDMMKeeZG8n5C0lKW1fEr0gUj4iCHZ6ZGs%2BgSeDm%2FFTRs2ZOliYkNpFyTpQwuF0ddtHOilc5VcVKhIuzZUqEsU79xIV4ZlCgtSeHbvkUovPvTPGE6MS0xMIyr2sQGOqUBS71jA%2BbllnA0Q3MTn%2F9sb4Z0xEwgkyRrU40UZZN7Oyv03dIPvBgpoEmlw9JY4bxHohu34QpYqb0C0z%2FxIyvRTb%2BtRGDFjrU8rhhNcxMWhEn%2BuwUp%2FPXFSK9fMVKqVPdoCUt332lQxd0D48FZqHgMMl423zjo3MWO2kNTipIoYzW4CjHj4sLcqOiv%2BArDT%2BfrIxywWowUTqZALhRfGfpNKxOAUyra&X-Amz-Signature=7fb540eb8b153c35badee6147d49c7b4b105385e9ba261f4accee2cefba6892a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
