---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQNHPUV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCxZYkA%2BBvDPdIFXA5l0jGMF%2Fxd2oZTMUan0KODkt7A7AIhAPTDfdqP6L9Qh%2BSA9y%2BewH%2FUDYi2lsLcrX2gWl1eMtZSKv8DCD4QABoMNjM3NDIzMTgzODA1IgyyF85vrZPtLz91dxkq3AOMrWUEt48M7UIoaq7JVVjnSQQPtQF4o7mNIU0lUg3PjzZPpFOY%2F0rQrjjSzQ%2BLJPk%2B3JaCe%2BpGIuArncBBMknBjsBzGCvlgIWFe6ZxWynKC%2Bf%2BI9yoikYlBvC0Lm9GHbpspk3ZKG5b%2FZtvbggIa%2FAT8vlaSfMdHgvXkfGtaxWBBi30tSXzomWEbHvZCt4A%2FKGBhuvDWFQ5oHEgbq6irkSRR9co%2FtvrZAGQjzxbsA0%2BuYnnkOq6lgPdB97lJeuhUI%2Bno2nPvvo7rfjB3fno%2FD5LG4JFfeksraBJeK%2BvX7ojt3oWbA4mqtSlNkPwQFcXOMeTuJnyNYPJpndHmQd275WQuGMM%2FzPhFv6p1q0mV41vJz7jcjdX8WJgDjZjVD4rBe2iaNcip9rDWh7MB7lpvmDL%2Ff2lVKz3Y3mEjCkhjlysAbTGHMfmVf8uKp2aDcuOMo%2BnBiwnKuKZyOq3qvw7zU7Sqc6n3UG5sHd0cFGiAHu06ARUxFX0XnR0YYlG67CiddSourAW6lsE8DieAcj3OPkX3Xx2qmCCE8PK8aYrzJ81RzNOfG0CR6X3BjwyVvGTEtCIgfAimYku7mDxxc%2F%2Faq3nO123u4EwxzJ%2FtYRV7xqQ8aq44FMdYWjVhLKzfDDUnIzEBjqkAYPbIVX4QEBg7O1N00FtukzSpRncO9TewB2IJWcCRrpagMeSck%2BmWL%2Bm5%2BeXowRaDOR7GBnTAL4zgPzqQr7blTVlMXCHdVKE%2FOU9cab78J9o63y6MKYevgUQSwu%2FWSaDflk6XGhG1Eh9yEzrg9yPgAo7OWp5l9D0q5BHgVt326YXLKjvZ4rfJahNAou%2B9%2BhK4kWAMXwFLD9onRjiNQUZBSIurzA7&X-Amz-Signature=55ce5d29fe68a0e5797a6480dd3ab83ebcb9f8f35258580caa1a7e6313f73f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQNHPUV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCxZYkA%2BBvDPdIFXA5l0jGMF%2Fxd2oZTMUan0KODkt7A7AIhAPTDfdqP6L9Qh%2BSA9y%2BewH%2FUDYi2lsLcrX2gWl1eMtZSKv8DCD4QABoMNjM3NDIzMTgzODA1IgyyF85vrZPtLz91dxkq3AOMrWUEt48M7UIoaq7JVVjnSQQPtQF4o7mNIU0lUg3PjzZPpFOY%2F0rQrjjSzQ%2BLJPk%2B3JaCe%2BpGIuArncBBMknBjsBzGCvlgIWFe6ZxWynKC%2Bf%2BI9yoikYlBvC0Lm9GHbpspk3ZKG5b%2FZtvbggIa%2FAT8vlaSfMdHgvXkfGtaxWBBi30tSXzomWEbHvZCt4A%2FKGBhuvDWFQ5oHEgbq6irkSRR9co%2FtvrZAGQjzxbsA0%2BuYnnkOq6lgPdB97lJeuhUI%2Bno2nPvvo7rfjB3fno%2FD5LG4JFfeksraBJeK%2BvX7ojt3oWbA4mqtSlNkPwQFcXOMeTuJnyNYPJpndHmQd275WQuGMM%2FzPhFv6p1q0mV41vJz7jcjdX8WJgDjZjVD4rBe2iaNcip9rDWh7MB7lpvmDL%2Ff2lVKz3Y3mEjCkhjlysAbTGHMfmVf8uKp2aDcuOMo%2BnBiwnKuKZyOq3qvw7zU7Sqc6n3UG5sHd0cFGiAHu06ARUxFX0XnR0YYlG67CiddSourAW6lsE8DieAcj3OPkX3Xx2qmCCE8PK8aYrzJ81RzNOfG0CR6X3BjwyVvGTEtCIgfAimYku7mDxxc%2F%2Faq3nO123u4EwxzJ%2FtYRV7xqQ8aq44FMdYWjVhLKzfDDUnIzEBjqkAYPbIVX4QEBg7O1N00FtukzSpRncO9TewB2IJWcCRrpagMeSck%2BmWL%2Bm5%2BeXowRaDOR7GBnTAL4zgPzqQr7blTVlMXCHdVKE%2FOU9cab78J9o63y6MKYevgUQSwu%2FWSaDflk6XGhG1Eh9yEzrg9yPgAo7OWp5l9D0q5BHgVt326YXLKjvZ4rfJahNAou%2B9%2BhK4kWAMXwFLD9onRjiNQUZBSIurzA7&X-Amz-Signature=17d0c5f0dcaf4377a309fa9083524b9dc547cbc1ff691e75141f8ba08e486010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQNHPUV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCxZYkA%2BBvDPdIFXA5l0jGMF%2Fxd2oZTMUan0KODkt7A7AIhAPTDfdqP6L9Qh%2BSA9y%2BewH%2FUDYi2lsLcrX2gWl1eMtZSKv8DCD4QABoMNjM3NDIzMTgzODA1IgyyF85vrZPtLz91dxkq3AOMrWUEt48M7UIoaq7JVVjnSQQPtQF4o7mNIU0lUg3PjzZPpFOY%2F0rQrjjSzQ%2BLJPk%2B3JaCe%2BpGIuArncBBMknBjsBzGCvlgIWFe6ZxWynKC%2Bf%2BI9yoikYlBvC0Lm9GHbpspk3ZKG5b%2FZtvbggIa%2FAT8vlaSfMdHgvXkfGtaxWBBi30tSXzomWEbHvZCt4A%2FKGBhuvDWFQ5oHEgbq6irkSRR9co%2FtvrZAGQjzxbsA0%2BuYnnkOq6lgPdB97lJeuhUI%2Bno2nPvvo7rfjB3fno%2FD5LG4JFfeksraBJeK%2BvX7ojt3oWbA4mqtSlNkPwQFcXOMeTuJnyNYPJpndHmQd275WQuGMM%2FzPhFv6p1q0mV41vJz7jcjdX8WJgDjZjVD4rBe2iaNcip9rDWh7MB7lpvmDL%2Ff2lVKz3Y3mEjCkhjlysAbTGHMfmVf8uKp2aDcuOMo%2BnBiwnKuKZyOq3qvw7zU7Sqc6n3UG5sHd0cFGiAHu06ARUxFX0XnR0YYlG67CiddSourAW6lsE8DieAcj3OPkX3Xx2qmCCE8PK8aYrzJ81RzNOfG0CR6X3BjwyVvGTEtCIgfAimYku7mDxxc%2F%2Faq3nO123u4EwxzJ%2FtYRV7xqQ8aq44FMdYWjVhLKzfDDUnIzEBjqkAYPbIVX4QEBg7O1N00FtukzSpRncO9TewB2IJWcCRrpagMeSck%2BmWL%2Bm5%2BeXowRaDOR7GBnTAL4zgPzqQr7blTVlMXCHdVKE%2FOU9cab78J9o63y6MKYevgUQSwu%2FWSaDflk6XGhG1Eh9yEzrg9yPgAo7OWp5l9D0q5BHgVt326YXLKjvZ4rfJahNAou%2B9%2BhK4kWAMXwFLD9onRjiNQUZBSIurzA7&X-Amz-Signature=6c709dfb9b411b61a239cd8573ecb46d08a598c52ebc1787346ff2a154d984ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQNHPUV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCxZYkA%2BBvDPdIFXA5l0jGMF%2Fxd2oZTMUan0KODkt7A7AIhAPTDfdqP6L9Qh%2BSA9y%2BewH%2FUDYi2lsLcrX2gWl1eMtZSKv8DCD4QABoMNjM3NDIzMTgzODA1IgyyF85vrZPtLz91dxkq3AOMrWUEt48M7UIoaq7JVVjnSQQPtQF4o7mNIU0lUg3PjzZPpFOY%2F0rQrjjSzQ%2BLJPk%2B3JaCe%2BpGIuArncBBMknBjsBzGCvlgIWFe6ZxWynKC%2Bf%2BI9yoikYlBvC0Lm9GHbpspk3ZKG5b%2FZtvbggIa%2FAT8vlaSfMdHgvXkfGtaxWBBi30tSXzomWEbHvZCt4A%2FKGBhuvDWFQ5oHEgbq6irkSRR9co%2FtvrZAGQjzxbsA0%2BuYnnkOq6lgPdB97lJeuhUI%2Bno2nPvvo7rfjB3fno%2FD5LG4JFfeksraBJeK%2BvX7ojt3oWbA4mqtSlNkPwQFcXOMeTuJnyNYPJpndHmQd275WQuGMM%2FzPhFv6p1q0mV41vJz7jcjdX8WJgDjZjVD4rBe2iaNcip9rDWh7MB7lpvmDL%2Ff2lVKz3Y3mEjCkhjlysAbTGHMfmVf8uKp2aDcuOMo%2BnBiwnKuKZyOq3qvw7zU7Sqc6n3UG5sHd0cFGiAHu06ARUxFX0XnR0YYlG67CiddSourAW6lsE8DieAcj3OPkX3Xx2qmCCE8PK8aYrzJ81RzNOfG0CR6X3BjwyVvGTEtCIgfAimYku7mDxxc%2F%2Faq3nO123u4EwxzJ%2FtYRV7xqQ8aq44FMdYWjVhLKzfDDUnIzEBjqkAYPbIVX4QEBg7O1N00FtukzSpRncO9TewB2IJWcCRrpagMeSck%2BmWL%2Bm5%2BeXowRaDOR7GBnTAL4zgPzqQr7blTVlMXCHdVKE%2FOU9cab78J9o63y6MKYevgUQSwu%2FWSaDflk6XGhG1Eh9yEzrg9yPgAo7OWp5l9D0q5BHgVt326YXLKjvZ4rfJahNAou%2B9%2BhK4kWAMXwFLD9onRjiNQUZBSIurzA7&X-Amz-Signature=09e95d3b7546d469a9ee01e9d6f8c5f4bae09a4848b20adc9ddcf082048aa321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQNHPUV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCxZYkA%2BBvDPdIFXA5l0jGMF%2Fxd2oZTMUan0KODkt7A7AIhAPTDfdqP6L9Qh%2BSA9y%2BewH%2FUDYi2lsLcrX2gWl1eMtZSKv8DCD4QABoMNjM3NDIzMTgzODA1IgyyF85vrZPtLz91dxkq3AOMrWUEt48M7UIoaq7JVVjnSQQPtQF4o7mNIU0lUg3PjzZPpFOY%2F0rQrjjSzQ%2BLJPk%2B3JaCe%2BpGIuArncBBMknBjsBzGCvlgIWFe6ZxWynKC%2Bf%2BI9yoikYlBvC0Lm9GHbpspk3ZKG5b%2FZtvbggIa%2FAT8vlaSfMdHgvXkfGtaxWBBi30tSXzomWEbHvZCt4A%2FKGBhuvDWFQ5oHEgbq6irkSRR9co%2FtvrZAGQjzxbsA0%2BuYnnkOq6lgPdB97lJeuhUI%2Bno2nPvvo7rfjB3fno%2FD5LG4JFfeksraBJeK%2BvX7ojt3oWbA4mqtSlNkPwQFcXOMeTuJnyNYPJpndHmQd275WQuGMM%2FzPhFv6p1q0mV41vJz7jcjdX8WJgDjZjVD4rBe2iaNcip9rDWh7MB7lpvmDL%2Ff2lVKz3Y3mEjCkhjlysAbTGHMfmVf8uKp2aDcuOMo%2BnBiwnKuKZyOq3qvw7zU7Sqc6n3UG5sHd0cFGiAHu06ARUxFX0XnR0YYlG67CiddSourAW6lsE8DieAcj3OPkX3Xx2qmCCE8PK8aYrzJ81RzNOfG0CR6X3BjwyVvGTEtCIgfAimYku7mDxxc%2F%2Faq3nO123u4EwxzJ%2FtYRV7xqQ8aq44FMdYWjVhLKzfDDUnIzEBjqkAYPbIVX4QEBg7O1N00FtukzSpRncO9TewB2IJWcCRrpagMeSck%2BmWL%2Bm5%2BeXowRaDOR7GBnTAL4zgPzqQr7blTVlMXCHdVKE%2FOU9cab78J9o63y6MKYevgUQSwu%2FWSaDflk6XGhG1Eh9yEzrg9yPgAo7OWp5l9D0q5BHgVt326YXLKjvZ4rfJahNAou%2B9%2BhK4kWAMXwFLD9onRjiNQUZBSIurzA7&X-Amz-Signature=58b5d13c72140eb791213d02b7b6a6f582bfe4d4de9c598fe9be4c00e19b0700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQNHPUV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCxZYkA%2BBvDPdIFXA5l0jGMF%2Fxd2oZTMUan0KODkt7A7AIhAPTDfdqP6L9Qh%2BSA9y%2BewH%2FUDYi2lsLcrX2gWl1eMtZSKv8DCD4QABoMNjM3NDIzMTgzODA1IgyyF85vrZPtLz91dxkq3AOMrWUEt48M7UIoaq7JVVjnSQQPtQF4o7mNIU0lUg3PjzZPpFOY%2F0rQrjjSzQ%2BLJPk%2B3JaCe%2BpGIuArncBBMknBjsBzGCvlgIWFe6ZxWynKC%2Bf%2BI9yoikYlBvC0Lm9GHbpspk3ZKG5b%2FZtvbggIa%2FAT8vlaSfMdHgvXkfGtaxWBBi30tSXzomWEbHvZCt4A%2FKGBhuvDWFQ5oHEgbq6irkSRR9co%2FtvrZAGQjzxbsA0%2BuYnnkOq6lgPdB97lJeuhUI%2Bno2nPvvo7rfjB3fno%2FD5LG4JFfeksraBJeK%2BvX7ojt3oWbA4mqtSlNkPwQFcXOMeTuJnyNYPJpndHmQd275WQuGMM%2FzPhFv6p1q0mV41vJz7jcjdX8WJgDjZjVD4rBe2iaNcip9rDWh7MB7lpvmDL%2Ff2lVKz3Y3mEjCkhjlysAbTGHMfmVf8uKp2aDcuOMo%2BnBiwnKuKZyOq3qvw7zU7Sqc6n3UG5sHd0cFGiAHu06ARUxFX0XnR0YYlG67CiddSourAW6lsE8DieAcj3OPkX3Xx2qmCCE8PK8aYrzJ81RzNOfG0CR6X3BjwyVvGTEtCIgfAimYku7mDxxc%2F%2Faq3nO123u4EwxzJ%2FtYRV7xqQ8aq44FMdYWjVhLKzfDDUnIzEBjqkAYPbIVX4QEBg7O1N00FtukzSpRncO9TewB2IJWcCRrpagMeSck%2BmWL%2Bm5%2BeXowRaDOR7GBnTAL4zgPzqQr7blTVlMXCHdVKE%2FOU9cab78J9o63y6MKYevgUQSwu%2FWSaDflk6XGhG1Eh9yEzrg9yPgAo7OWp5l9D0q5BHgVt326YXLKjvZ4rfJahNAou%2B9%2BhK4kWAMXwFLD9onRjiNQUZBSIurzA7&X-Amz-Signature=fdd6dc8292498a727d9f8e7564069abab8e1d9e3f66a414ec4610e8281d9e77b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQNHPUV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCxZYkA%2BBvDPdIFXA5l0jGMF%2Fxd2oZTMUan0KODkt7A7AIhAPTDfdqP6L9Qh%2BSA9y%2BewH%2FUDYi2lsLcrX2gWl1eMtZSKv8DCD4QABoMNjM3NDIzMTgzODA1IgyyF85vrZPtLz91dxkq3AOMrWUEt48M7UIoaq7JVVjnSQQPtQF4o7mNIU0lUg3PjzZPpFOY%2F0rQrjjSzQ%2BLJPk%2B3JaCe%2BpGIuArncBBMknBjsBzGCvlgIWFe6ZxWynKC%2Bf%2BI9yoikYlBvC0Lm9GHbpspk3ZKG5b%2FZtvbggIa%2FAT8vlaSfMdHgvXkfGtaxWBBi30tSXzomWEbHvZCt4A%2FKGBhuvDWFQ5oHEgbq6irkSRR9co%2FtvrZAGQjzxbsA0%2BuYnnkOq6lgPdB97lJeuhUI%2Bno2nPvvo7rfjB3fno%2FD5LG4JFfeksraBJeK%2BvX7ojt3oWbA4mqtSlNkPwQFcXOMeTuJnyNYPJpndHmQd275WQuGMM%2FzPhFv6p1q0mV41vJz7jcjdX8WJgDjZjVD4rBe2iaNcip9rDWh7MB7lpvmDL%2Ff2lVKz3Y3mEjCkhjlysAbTGHMfmVf8uKp2aDcuOMo%2BnBiwnKuKZyOq3qvw7zU7Sqc6n3UG5sHd0cFGiAHu06ARUxFX0XnR0YYlG67CiddSourAW6lsE8DieAcj3OPkX3Xx2qmCCE8PK8aYrzJ81RzNOfG0CR6X3BjwyVvGTEtCIgfAimYku7mDxxc%2F%2Faq3nO123u4EwxzJ%2FtYRV7xqQ8aq44FMdYWjVhLKzfDDUnIzEBjqkAYPbIVX4QEBg7O1N00FtukzSpRncO9TewB2IJWcCRrpagMeSck%2BmWL%2Bm5%2BeXowRaDOR7GBnTAL4zgPzqQr7blTVlMXCHdVKE%2FOU9cab78J9o63y6MKYevgUQSwu%2FWSaDflk6XGhG1Eh9yEzrg9yPgAo7OWp5l9D0q5BHgVt326YXLKjvZ4rfJahNAou%2B9%2BhK4kWAMXwFLD9onRjiNQUZBSIurzA7&X-Amz-Signature=ad2f9034fa147512a499915bad59f0d733df7860c58a87fadf54b38fcca41d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQNHPUV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCxZYkA%2BBvDPdIFXA5l0jGMF%2Fxd2oZTMUan0KODkt7A7AIhAPTDfdqP6L9Qh%2BSA9y%2BewH%2FUDYi2lsLcrX2gWl1eMtZSKv8DCD4QABoMNjM3NDIzMTgzODA1IgyyF85vrZPtLz91dxkq3AOMrWUEt48M7UIoaq7JVVjnSQQPtQF4o7mNIU0lUg3PjzZPpFOY%2F0rQrjjSzQ%2BLJPk%2B3JaCe%2BpGIuArncBBMknBjsBzGCvlgIWFe6ZxWynKC%2Bf%2BI9yoikYlBvC0Lm9GHbpspk3ZKG5b%2FZtvbggIa%2FAT8vlaSfMdHgvXkfGtaxWBBi30tSXzomWEbHvZCt4A%2FKGBhuvDWFQ5oHEgbq6irkSRR9co%2FtvrZAGQjzxbsA0%2BuYnnkOq6lgPdB97lJeuhUI%2Bno2nPvvo7rfjB3fno%2FD5LG4JFfeksraBJeK%2BvX7ojt3oWbA4mqtSlNkPwQFcXOMeTuJnyNYPJpndHmQd275WQuGMM%2FzPhFv6p1q0mV41vJz7jcjdX8WJgDjZjVD4rBe2iaNcip9rDWh7MB7lpvmDL%2Ff2lVKz3Y3mEjCkhjlysAbTGHMfmVf8uKp2aDcuOMo%2BnBiwnKuKZyOq3qvw7zU7Sqc6n3UG5sHd0cFGiAHu06ARUxFX0XnR0YYlG67CiddSourAW6lsE8DieAcj3OPkX3Xx2qmCCE8PK8aYrzJ81RzNOfG0CR6X3BjwyVvGTEtCIgfAimYku7mDxxc%2F%2Faq3nO123u4EwxzJ%2FtYRV7xqQ8aq44FMdYWjVhLKzfDDUnIzEBjqkAYPbIVX4QEBg7O1N00FtukzSpRncO9TewB2IJWcCRrpagMeSck%2BmWL%2Bm5%2BeXowRaDOR7GBnTAL4zgPzqQr7blTVlMXCHdVKE%2FOU9cab78J9o63y6MKYevgUQSwu%2FWSaDflk6XGhG1Eh9yEzrg9yPgAo7OWp5l9D0q5BHgVt326YXLKjvZ4rfJahNAou%2B9%2BhK4kWAMXwFLD9onRjiNQUZBSIurzA7&X-Amz-Signature=ffced473b1d9e034536a18920d467ab1337baea5bf5a832c6dc462bfc2b63a91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQNHPUV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCxZYkA%2BBvDPdIFXA5l0jGMF%2Fxd2oZTMUan0KODkt7A7AIhAPTDfdqP6L9Qh%2BSA9y%2BewH%2FUDYi2lsLcrX2gWl1eMtZSKv8DCD4QABoMNjM3NDIzMTgzODA1IgyyF85vrZPtLz91dxkq3AOMrWUEt48M7UIoaq7JVVjnSQQPtQF4o7mNIU0lUg3PjzZPpFOY%2F0rQrjjSzQ%2BLJPk%2B3JaCe%2BpGIuArncBBMknBjsBzGCvlgIWFe6ZxWynKC%2Bf%2BI9yoikYlBvC0Lm9GHbpspk3ZKG5b%2FZtvbggIa%2FAT8vlaSfMdHgvXkfGtaxWBBi30tSXzomWEbHvZCt4A%2FKGBhuvDWFQ5oHEgbq6irkSRR9co%2FtvrZAGQjzxbsA0%2BuYnnkOq6lgPdB97lJeuhUI%2Bno2nPvvo7rfjB3fno%2FD5LG4JFfeksraBJeK%2BvX7ojt3oWbA4mqtSlNkPwQFcXOMeTuJnyNYPJpndHmQd275WQuGMM%2FzPhFv6p1q0mV41vJz7jcjdX8WJgDjZjVD4rBe2iaNcip9rDWh7MB7lpvmDL%2Ff2lVKz3Y3mEjCkhjlysAbTGHMfmVf8uKp2aDcuOMo%2BnBiwnKuKZyOq3qvw7zU7Sqc6n3UG5sHd0cFGiAHu06ARUxFX0XnR0YYlG67CiddSourAW6lsE8DieAcj3OPkX3Xx2qmCCE8PK8aYrzJ81RzNOfG0CR6X3BjwyVvGTEtCIgfAimYku7mDxxc%2F%2Faq3nO123u4EwxzJ%2FtYRV7xqQ8aq44FMdYWjVhLKzfDDUnIzEBjqkAYPbIVX4QEBg7O1N00FtukzSpRncO9TewB2IJWcCRrpagMeSck%2BmWL%2Bm5%2BeXowRaDOR7GBnTAL4zgPzqQr7blTVlMXCHdVKE%2FOU9cab78J9o63y6MKYevgUQSwu%2FWSaDflk6XGhG1Eh9yEzrg9yPgAo7OWp5l9D0q5BHgVt326YXLKjvZ4rfJahNAou%2B9%2BhK4kWAMXwFLD9onRjiNQUZBSIurzA7&X-Amz-Signature=8264dd7644c93783430589260e512eca0f25b3d6db3cf3f8f7d3247297676720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQNHPUV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCxZYkA%2BBvDPdIFXA5l0jGMF%2Fxd2oZTMUan0KODkt7A7AIhAPTDfdqP6L9Qh%2BSA9y%2BewH%2FUDYi2lsLcrX2gWl1eMtZSKv8DCD4QABoMNjM3NDIzMTgzODA1IgyyF85vrZPtLz91dxkq3AOMrWUEt48M7UIoaq7JVVjnSQQPtQF4o7mNIU0lUg3PjzZPpFOY%2F0rQrjjSzQ%2BLJPk%2B3JaCe%2BpGIuArncBBMknBjsBzGCvlgIWFe6ZxWynKC%2Bf%2BI9yoikYlBvC0Lm9GHbpspk3ZKG5b%2FZtvbggIa%2FAT8vlaSfMdHgvXkfGtaxWBBi30tSXzomWEbHvZCt4A%2FKGBhuvDWFQ5oHEgbq6irkSRR9co%2FtvrZAGQjzxbsA0%2BuYnnkOq6lgPdB97lJeuhUI%2Bno2nPvvo7rfjB3fno%2FD5LG4JFfeksraBJeK%2BvX7ojt3oWbA4mqtSlNkPwQFcXOMeTuJnyNYPJpndHmQd275WQuGMM%2FzPhFv6p1q0mV41vJz7jcjdX8WJgDjZjVD4rBe2iaNcip9rDWh7MB7lpvmDL%2Ff2lVKz3Y3mEjCkhjlysAbTGHMfmVf8uKp2aDcuOMo%2BnBiwnKuKZyOq3qvw7zU7Sqc6n3UG5sHd0cFGiAHu06ARUxFX0XnR0YYlG67CiddSourAW6lsE8DieAcj3OPkX3Xx2qmCCE8PK8aYrzJ81RzNOfG0CR6X3BjwyVvGTEtCIgfAimYku7mDxxc%2F%2Faq3nO123u4EwxzJ%2FtYRV7xqQ8aq44FMdYWjVhLKzfDDUnIzEBjqkAYPbIVX4QEBg7O1N00FtukzSpRncO9TewB2IJWcCRrpagMeSck%2BmWL%2Bm5%2BeXowRaDOR7GBnTAL4zgPzqQr7blTVlMXCHdVKE%2FOU9cab78J9o63y6MKYevgUQSwu%2FWSaDflk6XGhG1Eh9yEzrg9yPgAo7OWp5l9D0q5BHgVt326YXLKjvZ4rfJahNAou%2B9%2BhK4kWAMXwFLD9onRjiNQUZBSIurzA7&X-Amz-Signature=ea6df894ccda8f904adda4e040761bd75eb5b8e54f4ff475f381a838a6ea1b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQNHPUV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCxZYkA%2BBvDPdIFXA5l0jGMF%2Fxd2oZTMUan0KODkt7A7AIhAPTDfdqP6L9Qh%2BSA9y%2BewH%2FUDYi2lsLcrX2gWl1eMtZSKv8DCD4QABoMNjM3NDIzMTgzODA1IgyyF85vrZPtLz91dxkq3AOMrWUEt48M7UIoaq7JVVjnSQQPtQF4o7mNIU0lUg3PjzZPpFOY%2F0rQrjjSzQ%2BLJPk%2B3JaCe%2BpGIuArncBBMknBjsBzGCvlgIWFe6ZxWynKC%2Bf%2BI9yoikYlBvC0Lm9GHbpspk3ZKG5b%2FZtvbggIa%2FAT8vlaSfMdHgvXkfGtaxWBBi30tSXzomWEbHvZCt4A%2FKGBhuvDWFQ5oHEgbq6irkSRR9co%2FtvrZAGQjzxbsA0%2BuYnnkOq6lgPdB97lJeuhUI%2Bno2nPvvo7rfjB3fno%2FD5LG4JFfeksraBJeK%2BvX7ojt3oWbA4mqtSlNkPwQFcXOMeTuJnyNYPJpndHmQd275WQuGMM%2FzPhFv6p1q0mV41vJz7jcjdX8WJgDjZjVD4rBe2iaNcip9rDWh7MB7lpvmDL%2Ff2lVKz3Y3mEjCkhjlysAbTGHMfmVf8uKp2aDcuOMo%2BnBiwnKuKZyOq3qvw7zU7Sqc6n3UG5sHd0cFGiAHu06ARUxFX0XnR0YYlG67CiddSourAW6lsE8DieAcj3OPkX3Xx2qmCCE8PK8aYrzJ81RzNOfG0CR6X3BjwyVvGTEtCIgfAimYku7mDxxc%2F%2Faq3nO123u4EwxzJ%2FtYRV7xqQ8aq44FMdYWjVhLKzfDDUnIzEBjqkAYPbIVX4QEBg7O1N00FtukzSpRncO9TewB2IJWcCRrpagMeSck%2BmWL%2Bm5%2BeXowRaDOR7GBnTAL4zgPzqQr7blTVlMXCHdVKE%2FOU9cab78J9o63y6MKYevgUQSwu%2FWSaDflk6XGhG1Eh9yEzrg9yPgAo7OWp5l9D0q5BHgVt326YXLKjvZ4rfJahNAou%2B9%2BhK4kWAMXwFLD9onRjiNQUZBSIurzA7&X-Amz-Signature=b64171da0baa9e45783f6362377550e878e8d858b93d1e2f20d6c58afc2e59e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQNHPUV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCxZYkA%2BBvDPdIFXA5l0jGMF%2Fxd2oZTMUan0KODkt7A7AIhAPTDfdqP6L9Qh%2BSA9y%2BewH%2FUDYi2lsLcrX2gWl1eMtZSKv8DCD4QABoMNjM3NDIzMTgzODA1IgyyF85vrZPtLz91dxkq3AOMrWUEt48M7UIoaq7JVVjnSQQPtQF4o7mNIU0lUg3PjzZPpFOY%2F0rQrjjSzQ%2BLJPk%2B3JaCe%2BpGIuArncBBMknBjsBzGCvlgIWFe6ZxWynKC%2Bf%2BI9yoikYlBvC0Lm9GHbpspk3ZKG5b%2FZtvbggIa%2FAT8vlaSfMdHgvXkfGtaxWBBi30tSXzomWEbHvZCt4A%2FKGBhuvDWFQ5oHEgbq6irkSRR9co%2FtvrZAGQjzxbsA0%2BuYnnkOq6lgPdB97lJeuhUI%2Bno2nPvvo7rfjB3fno%2FD5LG4JFfeksraBJeK%2BvX7ojt3oWbA4mqtSlNkPwQFcXOMeTuJnyNYPJpndHmQd275WQuGMM%2FzPhFv6p1q0mV41vJz7jcjdX8WJgDjZjVD4rBe2iaNcip9rDWh7MB7lpvmDL%2Ff2lVKz3Y3mEjCkhjlysAbTGHMfmVf8uKp2aDcuOMo%2BnBiwnKuKZyOq3qvw7zU7Sqc6n3UG5sHd0cFGiAHu06ARUxFX0XnR0YYlG67CiddSourAW6lsE8DieAcj3OPkX3Xx2qmCCE8PK8aYrzJ81RzNOfG0CR6X3BjwyVvGTEtCIgfAimYku7mDxxc%2F%2Faq3nO123u4EwxzJ%2FtYRV7xqQ8aq44FMdYWjVhLKzfDDUnIzEBjqkAYPbIVX4QEBg7O1N00FtukzSpRncO9TewB2IJWcCRrpagMeSck%2BmWL%2Bm5%2BeXowRaDOR7GBnTAL4zgPzqQr7blTVlMXCHdVKE%2FOU9cab78J9o63y6MKYevgUQSwu%2FWSaDflk6XGhG1Eh9yEzrg9yPgAo7OWp5l9D0q5BHgVt326YXLKjvZ4rfJahNAou%2B9%2BhK4kWAMXwFLD9onRjiNQUZBSIurzA7&X-Amz-Signature=141677e3a61a96ed8e94910d7a054ca16a03a72bd045877ac735931064d41224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQNHPUV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCxZYkA%2BBvDPdIFXA5l0jGMF%2Fxd2oZTMUan0KODkt7A7AIhAPTDfdqP6L9Qh%2BSA9y%2BewH%2FUDYi2lsLcrX2gWl1eMtZSKv8DCD4QABoMNjM3NDIzMTgzODA1IgyyF85vrZPtLz91dxkq3AOMrWUEt48M7UIoaq7JVVjnSQQPtQF4o7mNIU0lUg3PjzZPpFOY%2F0rQrjjSzQ%2BLJPk%2B3JaCe%2BpGIuArncBBMknBjsBzGCvlgIWFe6ZxWynKC%2Bf%2BI9yoikYlBvC0Lm9GHbpspk3ZKG5b%2FZtvbggIa%2FAT8vlaSfMdHgvXkfGtaxWBBi30tSXzomWEbHvZCt4A%2FKGBhuvDWFQ5oHEgbq6irkSRR9co%2FtvrZAGQjzxbsA0%2BuYnnkOq6lgPdB97lJeuhUI%2Bno2nPvvo7rfjB3fno%2FD5LG4JFfeksraBJeK%2BvX7ojt3oWbA4mqtSlNkPwQFcXOMeTuJnyNYPJpndHmQd275WQuGMM%2FzPhFv6p1q0mV41vJz7jcjdX8WJgDjZjVD4rBe2iaNcip9rDWh7MB7lpvmDL%2Ff2lVKz3Y3mEjCkhjlysAbTGHMfmVf8uKp2aDcuOMo%2BnBiwnKuKZyOq3qvw7zU7Sqc6n3UG5sHd0cFGiAHu06ARUxFX0XnR0YYlG67CiddSourAW6lsE8DieAcj3OPkX3Xx2qmCCE8PK8aYrzJ81RzNOfG0CR6X3BjwyVvGTEtCIgfAimYku7mDxxc%2F%2Faq3nO123u4EwxzJ%2FtYRV7xqQ8aq44FMdYWjVhLKzfDDUnIzEBjqkAYPbIVX4QEBg7O1N00FtukzSpRncO9TewB2IJWcCRrpagMeSck%2BmWL%2Bm5%2BeXowRaDOR7GBnTAL4zgPzqQr7blTVlMXCHdVKE%2FOU9cab78J9o63y6MKYevgUQSwu%2FWSaDflk6XGhG1Eh9yEzrg9yPgAo7OWp5l9D0q5BHgVt326YXLKjvZ4rfJahNAou%2B9%2BhK4kWAMXwFLD9onRjiNQUZBSIurzA7&X-Amz-Signature=d10842e086c671842454c1d26e84afec7b1824aba7fff0397ab371dcd2f7c890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQNHPUV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCxZYkA%2BBvDPdIFXA5l0jGMF%2Fxd2oZTMUan0KODkt7A7AIhAPTDfdqP6L9Qh%2BSA9y%2BewH%2FUDYi2lsLcrX2gWl1eMtZSKv8DCD4QABoMNjM3NDIzMTgzODA1IgyyF85vrZPtLz91dxkq3AOMrWUEt48M7UIoaq7JVVjnSQQPtQF4o7mNIU0lUg3PjzZPpFOY%2F0rQrjjSzQ%2BLJPk%2B3JaCe%2BpGIuArncBBMknBjsBzGCvlgIWFe6ZxWynKC%2Bf%2BI9yoikYlBvC0Lm9GHbpspk3ZKG5b%2FZtvbggIa%2FAT8vlaSfMdHgvXkfGtaxWBBi30tSXzomWEbHvZCt4A%2FKGBhuvDWFQ5oHEgbq6irkSRR9co%2FtvrZAGQjzxbsA0%2BuYnnkOq6lgPdB97lJeuhUI%2Bno2nPvvo7rfjB3fno%2FD5LG4JFfeksraBJeK%2BvX7ojt3oWbA4mqtSlNkPwQFcXOMeTuJnyNYPJpndHmQd275WQuGMM%2FzPhFv6p1q0mV41vJz7jcjdX8WJgDjZjVD4rBe2iaNcip9rDWh7MB7lpvmDL%2Ff2lVKz3Y3mEjCkhjlysAbTGHMfmVf8uKp2aDcuOMo%2BnBiwnKuKZyOq3qvw7zU7Sqc6n3UG5sHd0cFGiAHu06ARUxFX0XnR0YYlG67CiddSourAW6lsE8DieAcj3OPkX3Xx2qmCCE8PK8aYrzJ81RzNOfG0CR6X3BjwyVvGTEtCIgfAimYku7mDxxc%2F%2Faq3nO123u4EwxzJ%2FtYRV7xqQ8aq44FMdYWjVhLKzfDDUnIzEBjqkAYPbIVX4QEBg7O1N00FtukzSpRncO9TewB2IJWcCRrpagMeSck%2BmWL%2Bm5%2BeXowRaDOR7GBnTAL4zgPzqQr7blTVlMXCHdVKE%2FOU9cab78J9o63y6MKYevgUQSwu%2FWSaDflk6XGhG1Eh9yEzrg9yPgAo7OWp5l9D0q5BHgVt326YXLKjvZ4rfJahNAou%2B9%2BhK4kWAMXwFLD9onRjiNQUZBSIurzA7&X-Amz-Signature=d2f3e1d92093a73863a2c6abfc10758f2429d7b2f3f7a3eddaeadb71b327f017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W63LEYOZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDIlrsSlfjRHdnSKK82Gotd%2FunIGg2n%2BkXeYahCLgJrUQIhAIVOXaioWL5%2Bhj%2BIDTL6M3SS9U2JLoiUR3QtOX8e5AovKv8DCD4QABoMNjM3NDIzMTgzODA1IgwPoFh6f9gwRopX318q3ANYdAOFop5CD8sst6uRfmwnycQXuk48Y1jSl1%2B%2FYkgVbTwGJKOiHAcyUOgZ%2FJ%2BkytxUz4Xc90dEhdnH7IIwB7yLFgrx3QMvcKGJ%2BA%2BXn49AWY7Ov4A%2FE7S0PmtlKJT%2BN%2FENBJh02TfAFiZ%2FcQHD2fV4TwHfZgV7TCtH21vzGgJYlhNg6TSGM3l7Ii%2Fn6%2BdjhvEsw%2B50lPHZIzmWTLiPzG%2FiN97XXR%2BYG8Ta%2FbqkVGFunub62w9Sh2mMvvrFCYf1GO6IZcSmZXwE7jumD0%2Fh6QZghd3LgC5E0O42pkoLps7KQuvZuZePRnl%2FAVjIOpR2zKcHvW%2BTdOgsBG1oD8n51hI94OrpncLZaR2hMC6Ny5ZJ%2F5lxipwxL2Z78vfkVu2S%2FiqNbHHK01Z29KbXCeWHJWfTaQHdwIjOg0fFCGWaC20rYZbMp9XGrtnLcOjhfBpu1iEx9FqQCUGyRscPzPuOdDAxPiTv0RgXo%2FzmYwubnYbcGraEurUO56kDzCV8usFfDczV2dR99Y4sdz19cs4JIAabMs23moCMXlGbjTXvBqU4Bbgl4%2Fo89ygCLA7iQM0GO%2BHoZ%2BUwUQBjoIDpEPYcuO6fQtYbeAVgxs6CgjO1mOo5r29cIKBRgwaGoezfGDDinIzEBjqkAXeVuggi83II%2BLBmIb1Bp6dgpAdYD3VjB1jv1QXEqBX7CyTs%2F1f8NNSOeTTU9dOEUFwQwXvAkZHm%2FWD2zowDcEYmiYBpxt8Z93fUJCDlcPkF0P6C4yCkKwOeWllJMnnxjJoi%2FptkiUhgCi36%2FDisK2Aj%2B0Oq2Uo4GWXQjpAZtKdOh9G1kkLMaEKD%2FonraFnE4zH3a0a%2FZknitTia93OxG3wYbGLt&X-Amz-Signature=ebffab3373bf0cb47e879837f75401f61ef463a8c046ab9d413f6d0524cd26b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W63LEYOZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDIlrsSlfjRHdnSKK82Gotd%2FunIGg2n%2BkXeYahCLgJrUQIhAIVOXaioWL5%2Bhj%2BIDTL6M3SS9U2JLoiUR3QtOX8e5AovKv8DCD4QABoMNjM3NDIzMTgzODA1IgwPoFh6f9gwRopX318q3ANYdAOFop5CD8sst6uRfmwnycQXuk48Y1jSl1%2B%2FYkgVbTwGJKOiHAcyUOgZ%2FJ%2BkytxUz4Xc90dEhdnH7IIwB7yLFgrx3QMvcKGJ%2BA%2BXn49AWY7Ov4A%2FE7S0PmtlKJT%2BN%2FENBJh02TfAFiZ%2FcQHD2fV4TwHfZgV7TCtH21vzGgJYlhNg6TSGM3l7Ii%2Fn6%2BdjhvEsw%2B50lPHZIzmWTLiPzG%2FiN97XXR%2BYG8Ta%2FbqkVGFunub62w9Sh2mMvvrFCYf1GO6IZcSmZXwE7jumD0%2Fh6QZghd3LgC5E0O42pkoLps7KQuvZuZePRnl%2FAVjIOpR2zKcHvW%2BTdOgsBG1oD8n51hI94OrpncLZaR2hMC6Ny5ZJ%2F5lxipwxL2Z78vfkVu2S%2FiqNbHHK01Z29KbXCeWHJWfTaQHdwIjOg0fFCGWaC20rYZbMp9XGrtnLcOjhfBpu1iEx9FqQCUGyRscPzPuOdDAxPiTv0RgXo%2FzmYwubnYbcGraEurUO56kDzCV8usFfDczV2dR99Y4sdz19cs4JIAabMs23moCMXlGbjTXvBqU4Bbgl4%2Fo89ygCLA7iQM0GO%2BHoZ%2BUwUQBjoIDpEPYcuO6fQtYbeAVgxs6CgjO1mOo5r29cIKBRgwaGoezfGDDinIzEBjqkAXeVuggi83II%2BLBmIb1Bp6dgpAdYD3VjB1jv1QXEqBX7CyTs%2F1f8NNSOeTTU9dOEUFwQwXvAkZHm%2FWD2zowDcEYmiYBpxt8Z93fUJCDlcPkF0P6C4yCkKwOeWllJMnnxjJoi%2FptkiUhgCi36%2FDisK2Aj%2B0Oq2Uo4GWXQjpAZtKdOh9G1kkLMaEKD%2FonraFnE4zH3a0a%2FZknitTia93OxG3wYbGLt&X-Amz-Signature=c97b12b2522e24d373154129570d235b8387e851120fa2228f6ad2abc71527e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W63LEYOZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDIlrsSlfjRHdnSKK82Gotd%2FunIGg2n%2BkXeYahCLgJrUQIhAIVOXaioWL5%2Bhj%2BIDTL6M3SS9U2JLoiUR3QtOX8e5AovKv8DCD4QABoMNjM3NDIzMTgzODA1IgwPoFh6f9gwRopX318q3ANYdAOFop5CD8sst6uRfmwnycQXuk48Y1jSl1%2B%2FYkgVbTwGJKOiHAcyUOgZ%2FJ%2BkytxUz4Xc90dEhdnH7IIwB7yLFgrx3QMvcKGJ%2BA%2BXn49AWY7Ov4A%2FE7S0PmtlKJT%2BN%2FENBJh02TfAFiZ%2FcQHD2fV4TwHfZgV7TCtH21vzGgJYlhNg6TSGM3l7Ii%2Fn6%2BdjhvEsw%2B50lPHZIzmWTLiPzG%2FiN97XXR%2BYG8Ta%2FbqkVGFunub62w9Sh2mMvvrFCYf1GO6IZcSmZXwE7jumD0%2Fh6QZghd3LgC5E0O42pkoLps7KQuvZuZePRnl%2FAVjIOpR2zKcHvW%2BTdOgsBG1oD8n51hI94OrpncLZaR2hMC6Ny5ZJ%2F5lxipwxL2Z78vfkVu2S%2FiqNbHHK01Z29KbXCeWHJWfTaQHdwIjOg0fFCGWaC20rYZbMp9XGrtnLcOjhfBpu1iEx9FqQCUGyRscPzPuOdDAxPiTv0RgXo%2FzmYwubnYbcGraEurUO56kDzCV8usFfDczV2dR99Y4sdz19cs4JIAabMs23moCMXlGbjTXvBqU4Bbgl4%2Fo89ygCLA7iQM0GO%2BHoZ%2BUwUQBjoIDpEPYcuO6fQtYbeAVgxs6CgjO1mOo5r29cIKBRgwaGoezfGDDinIzEBjqkAXeVuggi83II%2BLBmIb1Bp6dgpAdYD3VjB1jv1QXEqBX7CyTs%2F1f8NNSOeTTU9dOEUFwQwXvAkZHm%2FWD2zowDcEYmiYBpxt8Z93fUJCDlcPkF0P6C4yCkKwOeWllJMnnxjJoi%2FptkiUhgCi36%2FDisK2Aj%2B0Oq2Uo4GWXQjpAZtKdOh9G1kkLMaEKD%2FonraFnE4zH3a0a%2FZknitTia93OxG3wYbGLt&X-Amz-Signature=3945dea219e7c1ba4d1e4b5aeeee9b6dc058d830a9e7ad1e88b3b70c062b7ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W63LEYOZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDIlrsSlfjRHdnSKK82Gotd%2FunIGg2n%2BkXeYahCLgJrUQIhAIVOXaioWL5%2Bhj%2BIDTL6M3SS9U2JLoiUR3QtOX8e5AovKv8DCD4QABoMNjM3NDIzMTgzODA1IgwPoFh6f9gwRopX318q3ANYdAOFop5CD8sst6uRfmwnycQXuk48Y1jSl1%2B%2FYkgVbTwGJKOiHAcyUOgZ%2FJ%2BkytxUz4Xc90dEhdnH7IIwB7yLFgrx3QMvcKGJ%2BA%2BXn49AWY7Ov4A%2FE7S0PmtlKJT%2BN%2FENBJh02TfAFiZ%2FcQHD2fV4TwHfZgV7TCtH21vzGgJYlhNg6TSGM3l7Ii%2Fn6%2BdjhvEsw%2B50lPHZIzmWTLiPzG%2FiN97XXR%2BYG8Ta%2FbqkVGFunub62w9Sh2mMvvrFCYf1GO6IZcSmZXwE7jumD0%2Fh6QZghd3LgC5E0O42pkoLps7KQuvZuZePRnl%2FAVjIOpR2zKcHvW%2BTdOgsBG1oD8n51hI94OrpncLZaR2hMC6Ny5ZJ%2F5lxipwxL2Z78vfkVu2S%2FiqNbHHK01Z29KbXCeWHJWfTaQHdwIjOg0fFCGWaC20rYZbMp9XGrtnLcOjhfBpu1iEx9FqQCUGyRscPzPuOdDAxPiTv0RgXo%2FzmYwubnYbcGraEurUO56kDzCV8usFfDczV2dR99Y4sdz19cs4JIAabMs23moCMXlGbjTXvBqU4Bbgl4%2Fo89ygCLA7iQM0GO%2BHoZ%2BUwUQBjoIDpEPYcuO6fQtYbeAVgxs6CgjO1mOo5r29cIKBRgwaGoezfGDDinIzEBjqkAXeVuggi83II%2BLBmIb1Bp6dgpAdYD3VjB1jv1QXEqBX7CyTs%2F1f8NNSOeTTU9dOEUFwQwXvAkZHm%2FWD2zowDcEYmiYBpxt8Z93fUJCDlcPkF0P6C4yCkKwOeWllJMnnxjJoi%2FptkiUhgCi36%2FDisK2Aj%2B0Oq2Uo4GWXQjpAZtKdOh9G1kkLMaEKD%2FonraFnE4zH3a0a%2FZknitTia93OxG3wYbGLt&X-Amz-Signature=f2e0c89842f4909db08e6acaf90521295b61bd6417f6770d2d43e2ddeb829e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W63LEYOZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDIlrsSlfjRHdnSKK82Gotd%2FunIGg2n%2BkXeYahCLgJrUQIhAIVOXaioWL5%2Bhj%2BIDTL6M3SS9U2JLoiUR3QtOX8e5AovKv8DCD4QABoMNjM3NDIzMTgzODA1IgwPoFh6f9gwRopX318q3ANYdAOFop5CD8sst6uRfmwnycQXuk48Y1jSl1%2B%2FYkgVbTwGJKOiHAcyUOgZ%2FJ%2BkytxUz4Xc90dEhdnH7IIwB7yLFgrx3QMvcKGJ%2BA%2BXn49AWY7Ov4A%2FE7S0PmtlKJT%2BN%2FENBJh02TfAFiZ%2FcQHD2fV4TwHfZgV7TCtH21vzGgJYlhNg6TSGM3l7Ii%2Fn6%2BdjhvEsw%2B50lPHZIzmWTLiPzG%2FiN97XXR%2BYG8Ta%2FbqkVGFunub62w9Sh2mMvvrFCYf1GO6IZcSmZXwE7jumD0%2Fh6QZghd3LgC5E0O42pkoLps7KQuvZuZePRnl%2FAVjIOpR2zKcHvW%2BTdOgsBG1oD8n51hI94OrpncLZaR2hMC6Ny5ZJ%2F5lxipwxL2Z78vfkVu2S%2FiqNbHHK01Z29KbXCeWHJWfTaQHdwIjOg0fFCGWaC20rYZbMp9XGrtnLcOjhfBpu1iEx9FqQCUGyRscPzPuOdDAxPiTv0RgXo%2FzmYwubnYbcGraEurUO56kDzCV8usFfDczV2dR99Y4sdz19cs4JIAabMs23moCMXlGbjTXvBqU4Bbgl4%2Fo89ygCLA7iQM0GO%2BHoZ%2BUwUQBjoIDpEPYcuO6fQtYbeAVgxs6CgjO1mOo5r29cIKBRgwaGoezfGDDinIzEBjqkAXeVuggi83II%2BLBmIb1Bp6dgpAdYD3VjB1jv1QXEqBX7CyTs%2F1f8NNSOeTTU9dOEUFwQwXvAkZHm%2FWD2zowDcEYmiYBpxt8Z93fUJCDlcPkF0P6C4yCkKwOeWllJMnnxjJoi%2FptkiUhgCi36%2FDisK2Aj%2B0Oq2Uo4GWXQjpAZtKdOh9G1kkLMaEKD%2FonraFnE4zH3a0a%2FZknitTia93OxG3wYbGLt&X-Amz-Signature=17355b3d25abf0efdb8b67786e89ce2eebf9408f5b8b036ba90fd8d9772102e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W63LEYOZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDIlrsSlfjRHdnSKK82Gotd%2FunIGg2n%2BkXeYahCLgJrUQIhAIVOXaioWL5%2Bhj%2BIDTL6M3SS9U2JLoiUR3QtOX8e5AovKv8DCD4QABoMNjM3NDIzMTgzODA1IgwPoFh6f9gwRopX318q3ANYdAOFop5CD8sst6uRfmwnycQXuk48Y1jSl1%2B%2FYkgVbTwGJKOiHAcyUOgZ%2FJ%2BkytxUz4Xc90dEhdnH7IIwB7yLFgrx3QMvcKGJ%2BA%2BXn49AWY7Ov4A%2FE7S0PmtlKJT%2BN%2FENBJh02TfAFiZ%2FcQHD2fV4TwHfZgV7TCtH21vzGgJYlhNg6TSGM3l7Ii%2Fn6%2BdjhvEsw%2B50lPHZIzmWTLiPzG%2FiN97XXR%2BYG8Ta%2FbqkVGFunub62w9Sh2mMvvrFCYf1GO6IZcSmZXwE7jumD0%2Fh6QZghd3LgC5E0O42pkoLps7KQuvZuZePRnl%2FAVjIOpR2zKcHvW%2BTdOgsBG1oD8n51hI94OrpncLZaR2hMC6Ny5ZJ%2F5lxipwxL2Z78vfkVu2S%2FiqNbHHK01Z29KbXCeWHJWfTaQHdwIjOg0fFCGWaC20rYZbMp9XGrtnLcOjhfBpu1iEx9FqQCUGyRscPzPuOdDAxPiTv0RgXo%2FzmYwubnYbcGraEurUO56kDzCV8usFfDczV2dR99Y4sdz19cs4JIAabMs23moCMXlGbjTXvBqU4Bbgl4%2Fo89ygCLA7iQM0GO%2BHoZ%2BUwUQBjoIDpEPYcuO6fQtYbeAVgxs6CgjO1mOo5r29cIKBRgwaGoezfGDDinIzEBjqkAXeVuggi83II%2BLBmIb1Bp6dgpAdYD3VjB1jv1QXEqBX7CyTs%2F1f8NNSOeTTU9dOEUFwQwXvAkZHm%2FWD2zowDcEYmiYBpxt8Z93fUJCDlcPkF0P6C4yCkKwOeWllJMnnxjJoi%2FptkiUhgCi36%2FDisK2Aj%2B0Oq2Uo4GWXQjpAZtKdOh9G1kkLMaEKD%2FonraFnE4zH3a0a%2FZknitTia93OxG3wYbGLt&X-Amz-Signature=2ab45845139723b41c58f5e1c753155d834769ba66e329fba0c5e7b2612831d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
