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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHEZW7X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCgk1F95w3%2FnxGif8wdnNAVI3KDkF%2FDWwiXAZ8oiYxB%2FQIhANlOxVQzmX1tbMyDujikH1ZmG14T08NoaWGNGQNLgMXRKv8DCEgQABoMNjM3NDIzMTgzODA1IgxPCIwSAlPqK69Brmkq3AOkZJIuDGyk%2B7ebwg6TMFZHwkRA%2FZGElPu0NMBuIM7aM4s4%2BRkGQOHFjzC05CAbBthXsynLc8eFePWVnURfbIpued%2BM7kpCGYyV5KmeR29T3iF6g3QBH4ovDcMgvoQgZIkAcCuICC5uulHOOyW%2Fk2Jg8cUkEaNkuLqagmkBi6hiNffK6l4W3MNVUvVcMtkWN28OrukyZwCHGBUNmvkV%2FwpVMrMsEvn9EZhgOAXA6kbOqlynnlQ%2BJmeZycJVNtzGO7ty0I7ZyxalBouPY%2Be7lalyskjQM4WQM%2F7nFgEdSj4RjVzoCY6bYLWyhWW5CCM2sL%2BdWi0c022%2BSpe8WpKplWenjr6a3AlmII9193bpGJpWJ7OeKVKok1lQLLtzZVPIJoFLjvB5kJUZfs6YQsQ5Z3cZyLavqTaxY9Thkn9QVHwqH%2BHeYSwNQo6OnG3cQpSFoJplBv19TwBl2G8ZUhLqUS6Oo1R3J4VABgVdzQSuX%2BWuQBscDuV1jAJSY2SFqQaYLskh2lxH5pnqvvYmKFt3I5li1RULejE6jDyddYP79ST0DNZVMqqMj4m8QQEiQWX5i5%2Fga7VArmt2YOHS3Lsh2Y89qq79eqJDTGbRa7OcR5rPqIvbcS055CM6W35B3TDQksPEBjqkAciMbt8EJNIOMyx96oZAb%2FrpKfec4uodxFzEPGrSMmkJGzlPUA4FwfxFLqpOLFuhsBji5t9nDs2o6xbfLJCavDPqlWAuwDvb9zKuKfdm0%2BuQTERO0ZWJaPt65Kr6N1cr37WFY9MlbH5er76W9436g3TobrIZPu%2FUOuWPgicigcvZNDZ1vAmfGuB5rLAmSA3z5i8sw4N7zvjUad1j0hNZpCIPJxvW&X-Amz-Signature=ee26af93206f13bae675441a99acf1d5e9971f82706561e475ee4c75f80e605d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHEZW7X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCgk1F95w3%2FnxGif8wdnNAVI3KDkF%2FDWwiXAZ8oiYxB%2FQIhANlOxVQzmX1tbMyDujikH1ZmG14T08NoaWGNGQNLgMXRKv8DCEgQABoMNjM3NDIzMTgzODA1IgxPCIwSAlPqK69Brmkq3AOkZJIuDGyk%2B7ebwg6TMFZHwkRA%2FZGElPu0NMBuIM7aM4s4%2BRkGQOHFjzC05CAbBthXsynLc8eFePWVnURfbIpued%2BM7kpCGYyV5KmeR29T3iF6g3QBH4ovDcMgvoQgZIkAcCuICC5uulHOOyW%2Fk2Jg8cUkEaNkuLqagmkBi6hiNffK6l4W3MNVUvVcMtkWN28OrukyZwCHGBUNmvkV%2FwpVMrMsEvn9EZhgOAXA6kbOqlynnlQ%2BJmeZycJVNtzGO7ty0I7ZyxalBouPY%2Be7lalyskjQM4WQM%2F7nFgEdSj4RjVzoCY6bYLWyhWW5CCM2sL%2BdWi0c022%2BSpe8WpKplWenjr6a3AlmII9193bpGJpWJ7OeKVKok1lQLLtzZVPIJoFLjvB5kJUZfs6YQsQ5Z3cZyLavqTaxY9Thkn9QVHwqH%2BHeYSwNQo6OnG3cQpSFoJplBv19TwBl2G8ZUhLqUS6Oo1R3J4VABgVdzQSuX%2BWuQBscDuV1jAJSY2SFqQaYLskh2lxH5pnqvvYmKFt3I5li1RULejE6jDyddYP79ST0DNZVMqqMj4m8QQEiQWX5i5%2Fga7VArmt2YOHS3Lsh2Y89qq79eqJDTGbRa7OcR5rPqIvbcS055CM6W35B3TDQksPEBjqkAciMbt8EJNIOMyx96oZAb%2FrpKfec4uodxFzEPGrSMmkJGzlPUA4FwfxFLqpOLFuhsBji5t9nDs2o6xbfLJCavDPqlWAuwDvb9zKuKfdm0%2BuQTERO0ZWJaPt65Kr6N1cr37WFY9MlbH5er76W9436g3TobrIZPu%2FUOuWPgicigcvZNDZ1vAmfGuB5rLAmSA3z5i8sw4N7zvjUad1j0hNZpCIPJxvW&X-Amz-Signature=86edb8b631daa5043766589530b27a8b5ab976d39cba46da53b292ff059c48b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHEZW7X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCgk1F95w3%2FnxGif8wdnNAVI3KDkF%2FDWwiXAZ8oiYxB%2FQIhANlOxVQzmX1tbMyDujikH1ZmG14T08NoaWGNGQNLgMXRKv8DCEgQABoMNjM3NDIzMTgzODA1IgxPCIwSAlPqK69Brmkq3AOkZJIuDGyk%2B7ebwg6TMFZHwkRA%2FZGElPu0NMBuIM7aM4s4%2BRkGQOHFjzC05CAbBthXsynLc8eFePWVnURfbIpued%2BM7kpCGYyV5KmeR29T3iF6g3QBH4ovDcMgvoQgZIkAcCuICC5uulHOOyW%2Fk2Jg8cUkEaNkuLqagmkBi6hiNffK6l4W3MNVUvVcMtkWN28OrukyZwCHGBUNmvkV%2FwpVMrMsEvn9EZhgOAXA6kbOqlynnlQ%2BJmeZycJVNtzGO7ty0I7ZyxalBouPY%2Be7lalyskjQM4WQM%2F7nFgEdSj4RjVzoCY6bYLWyhWW5CCM2sL%2BdWi0c022%2BSpe8WpKplWenjr6a3AlmII9193bpGJpWJ7OeKVKok1lQLLtzZVPIJoFLjvB5kJUZfs6YQsQ5Z3cZyLavqTaxY9Thkn9QVHwqH%2BHeYSwNQo6OnG3cQpSFoJplBv19TwBl2G8ZUhLqUS6Oo1R3J4VABgVdzQSuX%2BWuQBscDuV1jAJSY2SFqQaYLskh2lxH5pnqvvYmKFt3I5li1RULejE6jDyddYP79ST0DNZVMqqMj4m8QQEiQWX5i5%2Fga7VArmt2YOHS3Lsh2Y89qq79eqJDTGbRa7OcR5rPqIvbcS055CM6W35B3TDQksPEBjqkAciMbt8EJNIOMyx96oZAb%2FrpKfec4uodxFzEPGrSMmkJGzlPUA4FwfxFLqpOLFuhsBji5t9nDs2o6xbfLJCavDPqlWAuwDvb9zKuKfdm0%2BuQTERO0ZWJaPt65Kr6N1cr37WFY9MlbH5er76W9436g3TobrIZPu%2FUOuWPgicigcvZNDZ1vAmfGuB5rLAmSA3z5i8sw4N7zvjUad1j0hNZpCIPJxvW&X-Amz-Signature=20c6f4b8f0f62668a3522e4a54d782761c6942cd712367f072c372c90b87a206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHEZW7X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCgk1F95w3%2FnxGif8wdnNAVI3KDkF%2FDWwiXAZ8oiYxB%2FQIhANlOxVQzmX1tbMyDujikH1ZmG14T08NoaWGNGQNLgMXRKv8DCEgQABoMNjM3NDIzMTgzODA1IgxPCIwSAlPqK69Brmkq3AOkZJIuDGyk%2B7ebwg6TMFZHwkRA%2FZGElPu0NMBuIM7aM4s4%2BRkGQOHFjzC05CAbBthXsynLc8eFePWVnURfbIpued%2BM7kpCGYyV5KmeR29T3iF6g3QBH4ovDcMgvoQgZIkAcCuICC5uulHOOyW%2Fk2Jg8cUkEaNkuLqagmkBi6hiNffK6l4W3MNVUvVcMtkWN28OrukyZwCHGBUNmvkV%2FwpVMrMsEvn9EZhgOAXA6kbOqlynnlQ%2BJmeZycJVNtzGO7ty0I7ZyxalBouPY%2Be7lalyskjQM4WQM%2F7nFgEdSj4RjVzoCY6bYLWyhWW5CCM2sL%2BdWi0c022%2BSpe8WpKplWenjr6a3AlmII9193bpGJpWJ7OeKVKok1lQLLtzZVPIJoFLjvB5kJUZfs6YQsQ5Z3cZyLavqTaxY9Thkn9QVHwqH%2BHeYSwNQo6OnG3cQpSFoJplBv19TwBl2G8ZUhLqUS6Oo1R3J4VABgVdzQSuX%2BWuQBscDuV1jAJSY2SFqQaYLskh2lxH5pnqvvYmKFt3I5li1RULejE6jDyddYP79ST0DNZVMqqMj4m8QQEiQWX5i5%2Fga7VArmt2YOHS3Lsh2Y89qq79eqJDTGbRa7OcR5rPqIvbcS055CM6W35B3TDQksPEBjqkAciMbt8EJNIOMyx96oZAb%2FrpKfec4uodxFzEPGrSMmkJGzlPUA4FwfxFLqpOLFuhsBji5t9nDs2o6xbfLJCavDPqlWAuwDvb9zKuKfdm0%2BuQTERO0ZWJaPt65Kr6N1cr37WFY9MlbH5er76W9436g3TobrIZPu%2FUOuWPgicigcvZNDZ1vAmfGuB5rLAmSA3z5i8sw4N7zvjUad1j0hNZpCIPJxvW&X-Amz-Signature=3f41a67f7a83c03d52b61a7cc36e3b31d49d9ac678edc64a1aadf4ab1b5466ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHEZW7X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCgk1F95w3%2FnxGif8wdnNAVI3KDkF%2FDWwiXAZ8oiYxB%2FQIhANlOxVQzmX1tbMyDujikH1ZmG14T08NoaWGNGQNLgMXRKv8DCEgQABoMNjM3NDIzMTgzODA1IgxPCIwSAlPqK69Brmkq3AOkZJIuDGyk%2B7ebwg6TMFZHwkRA%2FZGElPu0NMBuIM7aM4s4%2BRkGQOHFjzC05CAbBthXsynLc8eFePWVnURfbIpued%2BM7kpCGYyV5KmeR29T3iF6g3QBH4ovDcMgvoQgZIkAcCuICC5uulHOOyW%2Fk2Jg8cUkEaNkuLqagmkBi6hiNffK6l4W3MNVUvVcMtkWN28OrukyZwCHGBUNmvkV%2FwpVMrMsEvn9EZhgOAXA6kbOqlynnlQ%2BJmeZycJVNtzGO7ty0I7ZyxalBouPY%2Be7lalyskjQM4WQM%2F7nFgEdSj4RjVzoCY6bYLWyhWW5CCM2sL%2BdWi0c022%2BSpe8WpKplWenjr6a3AlmII9193bpGJpWJ7OeKVKok1lQLLtzZVPIJoFLjvB5kJUZfs6YQsQ5Z3cZyLavqTaxY9Thkn9QVHwqH%2BHeYSwNQo6OnG3cQpSFoJplBv19TwBl2G8ZUhLqUS6Oo1R3J4VABgVdzQSuX%2BWuQBscDuV1jAJSY2SFqQaYLskh2lxH5pnqvvYmKFt3I5li1RULejE6jDyddYP79ST0DNZVMqqMj4m8QQEiQWX5i5%2Fga7VArmt2YOHS3Lsh2Y89qq79eqJDTGbRa7OcR5rPqIvbcS055CM6W35B3TDQksPEBjqkAciMbt8EJNIOMyx96oZAb%2FrpKfec4uodxFzEPGrSMmkJGzlPUA4FwfxFLqpOLFuhsBji5t9nDs2o6xbfLJCavDPqlWAuwDvb9zKuKfdm0%2BuQTERO0ZWJaPt65Kr6N1cr37WFY9MlbH5er76W9436g3TobrIZPu%2FUOuWPgicigcvZNDZ1vAmfGuB5rLAmSA3z5i8sw4N7zvjUad1j0hNZpCIPJxvW&X-Amz-Signature=453ae334e27f4dbaa799b009962501cf14537503d7d10dc47ccab9c54d660971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHEZW7X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCgk1F95w3%2FnxGif8wdnNAVI3KDkF%2FDWwiXAZ8oiYxB%2FQIhANlOxVQzmX1tbMyDujikH1ZmG14T08NoaWGNGQNLgMXRKv8DCEgQABoMNjM3NDIzMTgzODA1IgxPCIwSAlPqK69Brmkq3AOkZJIuDGyk%2B7ebwg6TMFZHwkRA%2FZGElPu0NMBuIM7aM4s4%2BRkGQOHFjzC05CAbBthXsynLc8eFePWVnURfbIpued%2BM7kpCGYyV5KmeR29T3iF6g3QBH4ovDcMgvoQgZIkAcCuICC5uulHOOyW%2Fk2Jg8cUkEaNkuLqagmkBi6hiNffK6l4W3MNVUvVcMtkWN28OrukyZwCHGBUNmvkV%2FwpVMrMsEvn9EZhgOAXA6kbOqlynnlQ%2BJmeZycJVNtzGO7ty0I7ZyxalBouPY%2Be7lalyskjQM4WQM%2F7nFgEdSj4RjVzoCY6bYLWyhWW5CCM2sL%2BdWi0c022%2BSpe8WpKplWenjr6a3AlmII9193bpGJpWJ7OeKVKok1lQLLtzZVPIJoFLjvB5kJUZfs6YQsQ5Z3cZyLavqTaxY9Thkn9QVHwqH%2BHeYSwNQo6OnG3cQpSFoJplBv19TwBl2G8ZUhLqUS6Oo1R3J4VABgVdzQSuX%2BWuQBscDuV1jAJSY2SFqQaYLskh2lxH5pnqvvYmKFt3I5li1RULejE6jDyddYP79ST0DNZVMqqMj4m8QQEiQWX5i5%2Fga7VArmt2YOHS3Lsh2Y89qq79eqJDTGbRa7OcR5rPqIvbcS055CM6W35B3TDQksPEBjqkAciMbt8EJNIOMyx96oZAb%2FrpKfec4uodxFzEPGrSMmkJGzlPUA4FwfxFLqpOLFuhsBji5t9nDs2o6xbfLJCavDPqlWAuwDvb9zKuKfdm0%2BuQTERO0ZWJaPt65Kr6N1cr37WFY9MlbH5er76W9436g3TobrIZPu%2FUOuWPgicigcvZNDZ1vAmfGuB5rLAmSA3z5i8sw4N7zvjUad1j0hNZpCIPJxvW&X-Amz-Signature=d58b26144a60c091d109af54e17150d560ed906805ad0c7feeb2f56c6ab2e2c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHEZW7X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCgk1F95w3%2FnxGif8wdnNAVI3KDkF%2FDWwiXAZ8oiYxB%2FQIhANlOxVQzmX1tbMyDujikH1ZmG14T08NoaWGNGQNLgMXRKv8DCEgQABoMNjM3NDIzMTgzODA1IgxPCIwSAlPqK69Brmkq3AOkZJIuDGyk%2B7ebwg6TMFZHwkRA%2FZGElPu0NMBuIM7aM4s4%2BRkGQOHFjzC05CAbBthXsynLc8eFePWVnURfbIpued%2BM7kpCGYyV5KmeR29T3iF6g3QBH4ovDcMgvoQgZIkAcCuICC5uulHOOyW%2Fk2Jg8cUkEaNkuLqagmkBi6hiNffK6l4W3MNVUvVcMtkWN28OrukyZwCHGBUNmvkV%2FwpVMrMsEvn9EZhgOAXA6kbOqlynnlQ%2BJmeZycJVNtzGO7ty0I7ZyxalBouPY%2Be7lalyskjQM4WQM%2F7nFgEdSj4RjVzoCY6bYLWyhWW5CCM2sL%2BdWi0c022%2BSpe8WpKplWenjr6a3AlmII9193bpGJpWJ7OeKVKok1lQLLtzZVPIJoFLjvB5kJUZfs6YQsQ5Z3cZyLavqTaxY9Thkn9QVHwqH%2BHeYSwNQo6OnG3cQpSFoJplBv19TwBl2G8ZUhLqUS6Oo1R3J4VABgVdzQSuX%2BWuQBscDuV1jAJSY2SFqQaYLskh2lxH5pnqvvYmKFt3I5li1RULejE6jDyddYP79ST0DNZVMqqMj4m8QQEiQWX5i5%2Fga7VArmt2YOHS3Lsh2Y89qq79eqJDTGbRa7OcR5rPqIvbcS055CM6W35B3TDQksPEBjqkAciMbt8EJNIOMyx96oZAb%2FrpKfec4uodxFzEPGrSMmkJGzlPUA4FwfxFLqpOLFuhsBji5t9nDs2o6xbfLJCavDPqlWAuwDvb9zKuKfdm0%2BuQTERO0ZWJaPt65Kr6N1cr37WFY9MlbH5er76W9436g3TobrIZPu%2FUOuWPgicigcvZNDZ1vAmfGuB5rLAmSA3z5i8sw4N7zvjUad1j0hNZpCIPJxvW&X-Amz-Signature=7765e77af86a8436e3d193fa0e035bba1ebb1e8ee0bf6b359d59b7759065c7ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHEZW7X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCgk1F95w3%2FnxGif8wdnNAVI3KDkF%2FDWwiXAZ8oiYxB%2FQIhANlOxVQzmX1tbMyDujikH1ZmG14T08NoaWGNGQNLgMXRKv8DCEgQABoMNjM3NDIzMTgzODA1IgxPCIwSAlPqK69Brmkq3AOkZJIuDGyk%2B7ebwg6TMFZHwkRA%2FZGElPu0NMBuIM7aM4s4%2BRkGQOHFjzC05CAbBthXsynLc8eFePWVnURfbIpued%2BM7kpCGYyV5KmeR29T3iF6g3QBH4ovDcMgvoQgZIkAcCuICC5uulHOOyW%2Fk2Jg8cUkEaNkuLqagmkBi6hiNffK6l4W3MNVUvVcMtkWN28OrukyZwCHGBUNmvkV%2FwpVMrMsEvn9EZhgOAXA6kbOqlynnlQ%2BJmeZycJVNtzGO7ty0I7ZyxalBouPY%2Be7lalyskjQM4WQM%2F7nFgEdSj4RjVzoCY6bYLWyhWW5CCM2sL%2BdWi0c022%2BSpe8WpKplWenjr6a3AlmII9193bpGJpWJ7OeKVKok1lQLLtzZVPIJoFLjvB5kJUZfs6YQsQ5Z3cZyLavqTaxY9Thkn9QVHwqH%2BHeYSwNQo6OnG3cQpSFoJplBv19TwBl2G8ZUhLqUS6Oo1R3J4VABgVdzQSuX%2BWuQBscDuV1jAJSY2SFqQaYLskh2lxH5pnqvvYmKFt3I5li1RULejE6jDyddYP79ST0DNZVMqqMj4m8QQEiQWX5i5%2Fga7VArmt2YOHS3Lsh2Y89qq79eqJDTGbRa7OcR5rPqIvbcS055CM6W35B3TDQksPEBjqkAciMbt8EJNIOMyx96oZAb%2FrpKfec4uodxFzEPGrSMmkJGzlPUA4FwfxFLqpOLFuhsBji5t9nDs2o6xbfLJCavDPqlWAuwDvb9zKuKfdm0%2BuQTERO0ZWJaPt65Kr6N1cr37WFY9MlbH5er76W9436g3TobrIZPu%2FUOuWPgicigcvZNDZ1vAmfGuB5rLAmSA3z5i8sw4N7zvjUad1j0hNZpCIPJxvW&X-Amz-Signature=ad8d24d4058bb75fd47ae333df4af7aede37573a5670ca9eca199602fc86c0df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHEZW7X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCgk1F95w3%2FnxGif8wdnNAVI3KDkF%2FDWwiXAZ8oiYxB%2FQIhANlOxVQzmX1tbMyDujikH1ZmG14T08NoaWGNGQNLgMXRKv8DCEgQABoMNjM3NDIzMTgzODA1IgxPCIwSAlPqK69Brmkq3AOkZJIuDGyk%2B7ebwg6TMFZHwkRA%2FZGElPu0NMBuIM7aM4s4%2BRkGQOHFjzC05CAbBthXsynLc8eFePWVnURfbIpued%2BM7kpCGYyV5KmeR29T3iF6g3QBH4ovDcMgvoQgZIkAcCuICC5uulHOOyW%2Fk2Jg8cUkEaNkuLqagmkBi6hiNffK6l4W3MNVUvVcMtkWN28OrukyZwCHGBUNmvkV%2FwpVMrMsEvn9EZhgOAXA6kbOqlynnlQ%2BJmeZycJVNtzGO7ty0I7ZyxalBouPY%2Be7lalyskjQM4WQM%2F7nFgEdSj4RjVzoCY6bYLWyhWW5CCM2sL%2BdWi0c022%2BSpe8WpKplWenjr6a3AlmII9193bpGJpWJ7OeKVKok1lQLLtzZVPIJoFLjvB5kJUZfs6YQsQ5Z3cZyLavqTaxY9Thkn9QVHwqH%2BHeYSwNQo6OnG3cQpSFoJplBv19TwBl2G8ZUhLqUS6Oo1R3J4VABgVdzQSuX%2BWuQBscDuV1jAJSY2SFqQaYLskh2lxH5pnqvvYmKFt3I5li1RULejE6jDyddYP79ST0DNZVMqqMj4m8QQEiQWX5i5%2Fga7VArmt2YOHS3Lsh2Y89qq79eqJDTGbRa7OcR5rPqIvbcS055CM6W35B3TDQksPEBjqkAciMbt8EJNIOMyx96oZAb%2FrpKfec4uodxFzEPGrSMmkJGzlPUA4FwfxFLqpOLFuhsBji5t9nDs2o6xbfLJCavDPqlWAuwDvb9zKuKfdm0%2BuQTERO0ZWJaPt65Kr6N1cr37WFY9MlbH5er76W9436g3TobrIZPu%2FUOuWPgicigcvZNDZ1vAmfGuB5rLAmSA3z5i8sw4N7zvjUad1j0hNZpCIPJxvW&X-Amz-Signature=8557d2427c09854524c70d4e90d18bdf297e2d99343959671c15e53e2777f770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHEZW7X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCgk1F95w3%2FnxGif8wdnNAVI3KDkF%2FDWwiXAZ8oiYxB%2FQIhANlOxVQzmX1tbMyDujikH1ZmG14T08NoaWGNGQNLgMXRKv8DCEgQABoMNjM3NDIzMTgzODA1IgxPCIwSAlPqK69Brmkq3AOkZJIuDGyk%2B7ebwg6TMFZHwkRA%2FZGElPu0NMBuIM7aM4s4%2BRkGQOHFjzC05CAbBthXsynLc8eFePWVnURfbIpued%2BM7kpCGYyV5KmeR29T3iF6g3QBH4ovDcMgvoQgZIkAcCuICC5uulHOOyW%2Fk2Jg8cUkEaNkuLqagmkBi6hiNffK6l4W3MNVUvVcMtkWN28OrukyZwCHGBUNmvkV%2FwpVMrMsEvn9EZhgOAXA6kbOqlynnlQ%2BJmeZycJVNtzGO7ty0I7ZyxalBouPY%2Be7lalyskjQM4WQM%2F7nFgEdSj4RjVzoCY6bYLWyhWW5CCM2sL%2BdWi0c022%2BSpe8WpKplWenjr6a3AlmII9193bpGJpWJ7OeKVKok1lQLLtzZVPIJoFLjvB5kJUZfs6YQsQ5Z3cZyLavqTaxY9Thkn9QVHwqH%2BHeYSwNQo6OnG3cQpSFoJplBv19TwBl2G8ZUhLqUS6Oo1R3J4VABgVdzQSuX%2BWuQBscDuV1jAJSY2SFqQaYLskh2lxH5pnqvvYmKFt3I5li1RULejE6jDyddYP79ST0DNZVMqqMj4m8QQEiQWX5i5%2Fga7VArmt2YOHS3Lsh2Y89qq79eqJDTGbRa7OcR5rPqIvbcS055CM6W35B3TDQksPEBjqkAciMbt8EJNIOMyx96oZAb%2FrpKfec4uodxFzEPGrSMmkJGzlPUA4FwfxFLqpOLFuhsBji5t9nDs2o6xbfLJCavDPqlWAuwDvb9zKuKfdm0%2BuQTERO0ZWJaPt65Kr6N1cr37WFY9MlbH5er76W9436g3TobrIZPu%2FUOuWPgicigcvZNDZ1vAmfGuB5rLAmSA3z5i8sw4N7zvjUad1j0hNZpCIPJxvW&X-Amz-Signature=9e986a7726fb760f7ab41a02c91ac7126161aa7dc57e1132aa376b9ff1d298dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJNFLFC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEi7z4hrLJqeQbDG9NedmWDElK7kxoOfBYTkAYz8%2Ftd3AiBOCyUlrC3EN5taR8Wa%2FqDJ6l96z1ti69ZenMSpwM%2BcRyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM1117EVl9%2BIX5HvG8KtwDa7M9QUu2TI4ukjChllLBbuv6wE14PRdrzCe6HgBMK2Y6PpB9hz5YIWpNADlzHl0JUNdUvXJv9Ll83yG3XvhGi4hFIJeBe%2BXw8QLNDlxKCVqB20BhvKzBfn8wrXbUx6gnTWQLw3RmueMu54EjeurFXkSBK9rm2AP1LFJ67gzpHovIQmdiCcz88AuWF8%2BmolKLYbdKqWs6a617Cz8EnJI3njimqhTeYo6o1hOiZgfPvWyI3uJ0i6o9Q63vSfVJ%2BqgGoI9g68h3IZFcl1Rn%2FZw2I9CebAplXi%2BpaeYt1AYtJMZamHDhQDeoXnZaE0Q4%2FT8zxM9bU08M29nPJBN8nABsF9wIwMnl%2BJRY5DNDAmAAAMYjL%2BrMk2BPyx3i8rIczDGtWppsOzgc6CmESVy%2BnmCgEHVyizwvhQMEdcsZ1bAyjmLOiUc53Xbtng1AsbKF%2F2QWfU2HPC0FxWFmZkxEipEq9jNoFNORWs6Fu5G4pdercsyrtUXLc309F8yLf6QKuHFTLWUugfZu7gPgJJzQKPw8mhfda7n5dZp%2FMbS3eoLraGi5fxq%2FUkHyaNHvCA%2F69u%2FkV406EYqph17GXf8HU7aN0tUpAXL2y%2Bhfq%2FzfF6TaqeAQC6SarcXYVRMGAw0w7ZDDxAY6pgHHrlhw8QQGBuVlfkO5uOMuaoNSHCi%2B5md91dDMPZ3hOFZodPnBI79eoJi%2FZJxkOYzLeuezapqqfsyD8YHxOfkmjwh2imKFZLn0bHWiyRG0iS0U8ldjMogIo%2F5TfNAiwYYkqOGo%2FBqA%2FsQDGE4Y3IuIy%2Fy8nmKoXfxzDYm8jzt9HbzAtqn166gbgnSpCo%2FsyUEd5b0c0Nqdjv4G6kjaFgPvAo59ixB9&X-Amz-Signature=7ba79a5327b7eba51d9b7caad42a1fbe5c25aca87d90c6780927a8d97b2e1260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YE2O75J%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQD3AooOHPv5B1c%2FUIQSin4MmP%2BUEQcqAZam8s88tQJwuAIhAMXhSUcRMP7nC4wvhjEqbY0Sd7%2BQcwViF1KriGOKQlYFKv8DCEgQABoMNjM3NDIzMTgzODA1IgxyEPovInIO2UdOfqkq3APpBlqXNo1249sINFBkSTy7fCUOypSSGTs7y7sX1bAdNwPF0SysZNhWLWwQx7ZPKBLVl3pPEGLzGQTI9bvtqg5Di%2FYFQOxkkx%2Fo7pdVZ9Zc8JYsTyJ%2Fhi51WQp0T117vqigSF6J%2BSHXbBJoqPv2zGR3fP6CMpU48TbfPl58CFAqiiXhklDmjhb4l3B5XzDIRs%2BhxBk0SHoo6EJjjQUxgGHkRi2MR%2FsqTrXPgkTtfOD8wkPl4um1MQ9K6nhOmBCAsNSpYfbV6i3DhSlAdy%2Blts5EOx9JuAcyOvO77r1QHy9FmCYbbERcWn%2FC7CRsLKzXl4KQJMUyMQTn4%2FyCSH9lBxfjGhFEkhWhg8cHpEIwxPczKvDA3f1Tc8%2BCLhhhxZElqAV1Q%2FycC8I9o3%2Fkzk5kwwBU56iukSPp1wzjqLF244ehZ5Pi%2FpoeEkITMlLCRFxEWbuVgeodhW%2FCqhv%2BkYsUw1IArKJ75BiEj4AVcmbtuk0agdxB37MD8GZiqDgkjRX2a3sAJH2NDh2HlNuubJHMsMv3H7siTnggd2JzUOuoHY0wUy7d6IGsIDw1MlaAYHiGeT7coX99nPCgmL2%2BBpgJ4b0k%2Bk%2FXOI42hEOwrgjHgDQdwEYvK7rtoQNKAG%2FjKDCnkcPEBjqkATR2Onoh5HB%2BczDla0sNEjcJWjEGrFwRJkwqwdWospRd5iGmJJVU5W9qie%2FGvzcm4uul9pppL%2FvrYA0AmcSXWKhH%2Bo0dKrWiJ39QuSfniCVqzl7PanmwqhAz3hU7%2BtYCuVKMWmMhs%2B5PD8ZIe0o6uMF6diGMIx49iN%2BFheNDGRyplJ7nEkNeCCRcEmLSlCK6tAH43FZYcbWZKCzyZihas19aInbR&X-Amz-Signature=d56edc0846e7923e6cbc1f3745fa0562434803f363a54b645f080685bfd228d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BJ5A3U7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICltVxzf3jdSxEF1dQv3toJTAuymhDyWpubxIMiylYztAiAzq9FxYOG0L1plGTkcwFdZTzaTwgeH8ErDd9HKCDGcjCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMSOjRQ2GXRtFH2JScKtwDYFcstL9huK7sz8Nqw9eisxF%2BYZ%2FTm9v5LEYHcZjxiqAHA%2BKtlsav5my8S18vspByS2HeFvniQLNDXuiOwIX2w0o6QkOvnknHsAvyrsiu18AuUuFemj5w7yG2FzVD79BldADrtizvJVRjz0U%2BlvZ6EuZkiul0n7ryvY%2BrXZDGRmRW6Dm%2ByF8wLzfN9NmBXeHHbVrhQ4b3wv2DOm%2F2XLIIgG9QswbBxQ8M8Q1LYHPg%2BnyBilCIgiUZlR3VcimWXAsH0WJGN41%2F9FCWZLuCd0s08527DaGchBCgsCMCocrae1THD2wamW%2BiZJRf5rs4jOQPIYXsdl6ake%2By2nPHkvrEGG0eemzljrxcbdOrZRaDK6WmF%2BAG2pBntheqOAeQjDyhFg8euiGJ%2BD9y1JUEBUSehTApjpthy0cIdJH0JJLCxvrX9YaAhzaZrU2C5FRoArDjbu5ZOt459ggNNbB9PpJhrwvdqzSpYrdKTNrjDfKRG%2BtJoLPkzuI4eKtyqIGZLZhWyJRWuYCnAGdQeadJ5SzEmGAMjrXOageG8V%2FP2b1PPjM5ijm7p52F8Z586C74th6H3AbTujHLPjMaqbDmVYOABRXjo0CqmjLl75kNoaf0gUqToLwW%2FSF2vrUs7how75DDxAY6pgGRjw3ZNG%2BlVlddg7W27yavLdjcCy82fwEQBKHTkxAdAgZePu9O0ddASuA9D42qdKL7t4G3kC9s2Ga55GFNxPfRi1CleVPJ4ZG0G4P2amWu6TcwIaZfeSkuu%2Bxv0YXcTjyn8bMOpD6Fn%2FLhT74DdHywCVwwiCI9uNry7xDO7JFrEMVaXkuYAlQ7bXOvApTcTthYqeS6VIix4U821KHChW%2BkHhUb7PXy&X-Amz-Signature=e80a229d7900ab20e945b7c33452a1e91f16d5c5ca4009954d8d3032bc4b8fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHEZW7X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCgk1F95w3%2FnxGif8wdnNAVI3KDkF%2FDWwiXAZ8oiYxB%2FQIhANlOxVQzmX1tbMyDujikH1ZmG14T08NoaWGNGQNLgMXRKv8DCEgQABoMNjM3NDIzMTgzODA1IgxPCIwSAlPqK69Brmkq3AOkZJIuDGyk%2B7ebwg6TMFZHwkRA%2FZGElPu0NMBuIM7aM4s4%2BRkGQOHFjzC05CAbBthXsynLc8eFePWVnURfbIpued%2BM7kpCGYyV5KmeR29T3iF6g3QBH4ovDcMgvoQgZIkAcCuICC5uulHOOyW%2Fk2Jg8cUkEaNkuLqagmkBi6hiNffK6l4W3MNVUvVcMtkWN28OrukyZwCHGBUNmvkV%2FwpVMrMsEvn9EZhgOAXA6kbOqlynnlQ%2BJmeZycJVNtzGO7ty0I7ZyxalBouPY%2Be7lalyskjQM4WQM%2F7nFgEdSj4RjVzoCY6bYLWyhWW5CCM2sL%2BdWi0c022%2BSpe8WpKplWenjr6a3AlmII9193bpGJpWJ7OeKVKok1lQLLtzZVPIJoFLjvB5kJUZfs6YQsQ5Z3cZyLavqTaxY9Thkn9QVHwqH%2BHeYSwNQo6OnG3cQpSFoJplBv19TwBl2G8ZUhLqUS6Oo1R3J4VABgVdzQSuX%2BWuQBscDuV1jAJSY2SFqQaYLskh2lxH5pnqvvYmKFt3I5li1RULejE6jDyddYP79ST0DNZVMqqMj4m8QQEiQWX5i5%2Fga7VArmt2YOHS3Lsh2Y89qq79eqJDTGbRa7OcR5rPqIvbcS055CM6W35B3TDQksPEBjqkAciMbt8EJNIOMyx96oZAb%2FrpKfec4uodxFzEPGrSMmkJGzlPUA4FwfxFLqpOLFuhsBji5t9nDs2o6xbfLJCavDPqlWAuwDvb9zKuKfdm0%2BuQTERO0ZWJaPt65Kr6N1cr37WFY9MlbH5er76W9436g3TobrIZPu%2FUOuWPgicigcvZNDZ1vAmfGuB5rLAmSA3z5i8sw4N7zvjUad1j0hNZpCIPJxvW&X-Amz-Signature=3c981eca6b19beb1eecf2e67157ea43b9d264cccee025c32b113557b4731e485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRBJIPBM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDqUfv%2B14MrYDGI79MyFrTtkONKKIcKdScirD1dR%2BwrowIgUybWwCC5DTKI2JuIy2JMNiciUspXnp6YVSmS7hpppAkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKtOZMkDMuo6yK54uCrcAxG6iA3MM7DS%2BCg%2F%2BTPAAG%2F8zcQiQdHzB3sXpSVb1D5sPNw6ls2AlTL9dRqIhqgGs9Um1%2FvOK4I91BM4FkQBD8Zn6qNmq4cjSl%2BbtgENKfslD4VOXuYf9FXgxK4QmJ%2FZhl34olx6OEscMbBqdter%2FyfM6jh6oe%2BnbDtfWhevWYEzp7vifZOszFA9i%2FjqGqEgriX55a3MOFPX42%2BXR%2Fwgb%2B%2BP5tJfKenzdtQB7kcvjgL93ITveyoQHne%2B%2BEFpCE2ciCI1F%2FzPQUO2fiveM7jgrvS6ruItFB5Na7JZgi6u7gXVhnTEQqzdUgmYeq3pt28kEgn%2FAOYWPNxNi6klvmrevenO53GU5aVM7wSGXg5iTZ7qQuo1kZcSB5B2zEtLVUVloHkXsqSqBMdlYSbwSIz3VZLmblB1z1WOw0uvSLRr%2BLJAV0Fc1MAZrXrKJZHdJvr9zqWG9i1QRU%2FGnDnAlXClijegJnjHi2aQZUeOuuS%2FCA7ITgxm%2Ft0%2BbmVwNo%2F%2BjRTiEUmSuW5ck3jpJG5f3M8wo%2FPjPfjsrSzpkxxI%2FjeZH1%2FcIoTifwWLT2suqN1PnNpDjnVkDFGZa7B4%2B0%2FjgTIbLDVqmOoLql2iP63waSNIRz35wt%2B70jAJuvj69eGcMO2Sw8QGOqUBgHkn%2FIu1NL1ITSf7jgdYljtIKLuoNcSD6Jo1E5q2UpvaCLPywJkj0JbmRr%2BO3sKmR9Jauf%2FD%2FLvwu1MCLSEDu6NvGiQzyc%2Fj4iLbL%2Fwll%2F3B0yanfNxzHXSvj8L2G4aL2Gar5W2O1e7DF97j3ucERJ5oQ9JcajrQO47OEa0x3houTrTU8DoeuN6BzfSpnM7YaWmYdPfYvjKfsfMtnY%2Be96epRLWx&X-Amz-Signature=e713404ec7db1f229a15c49e288c84bf2c9b34721fae2c74aaba87cdf9404b69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHEZW7X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCgk1F95w3%2FnxGif8wdnNAVI3KDkF%2FDWwiXAZ8oiYxB%2FQIhANlOxVQzmX1tbMyDujikH1ZmG14T08NoaWGNGQNLgMXRKv8DCEgQABoMNjM3NDIzMTgzODA1IgxPCIwSAlPqK69Brmkq3AOkZJIuDGyk%2B7ebwg6TMFZHwkRA%2FZGElPu0NMBuIM7aM4s4%2BRkGQOHFjzC05CAbBthXsynLc8eFePWVnURfbIpued%2BM7kpCGYyV5KmeR29T3iF6g3QBH4ovDcMgvoQgZIkAcCuICC5uulHOOyW%2Fk2Jg8cUkEaNkuLqagmkBi6hiNffK6l4W3MNVUvVcMtkWN28OrukyZwCHGBUNmvkV%2FwpVMrMsEvn9EZhgOAXA6kbOqlynnlQ%2BJmeZycJVNtzGO7ty0I7ZyxalBouPY%2Be7lalyskjQM4WQM%2F7nFgEdSj4RjVzoCY6bYLWyhWW5CCM2sL%2BdWi0c022%2BSpe8WpKplWenjr6a3AlmII9193bpGJpWJ7OeKVKok1lQLLtzZVPIJoFLjvB5kJUZfs6YQsQ5Z3cZyLavqTaxY9Thkn9QVHwqH%2BHeYSwNQo6OnG3cQpSFoJplBv19TwBl2G8ZUhLqUS6Oo1R3J4VABgVdzQSuX%2BWuQBscDuV1jAJSY2SFqQaYLskh2lxH5pnqvvYmKFt3I5li1RULejE6jDyddYP79ST0DNZVMqqMj4m8QQEiQWX5i5%2Fga7VArmt2YOHS3Lsh2Y89qq79eqJDTGbRa7OcR5rPqIvbcS055CM6W35B3TDQksPEBjqkAciMbt8EJNIOMyx96oZAb%2FrpKfec4uodxFzEPGrSMmkJGzlPUA4FwfxFLqpOLFuhsBji5t9nDs2o6xbfLJCavDPqlWAuwDvb9zKuKfdm0%2BuQTERO0ZWJaPt65Kr6N1cr37WFY9MlbH5er76W9436g3TobrIZPu%2FUOuWPgicigcvZNDZ1vAmfGuB5rLAmSA3z5i8sw4N7zvjUad1j0hNZpCIPJxvW&X-Amz-Signature=0d4bcb618d47c86016813550db3f795829e2a3e3f8f76be8b9a9a72674626338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWUDE2YC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDADU8YyIZTce1%2Bbgc7Sy05K5CqB6q36nl68Cq0%2Fs8zqAIhAMy%2FvdAkQ2XRGCEGvO53Kor3ASfw3Z2Xdx6pPAgCXT8IKv8DCEgQABoMNjM3NDIzMTgzODA1Igy7w0YEQJ8Gu1d85hQq3AOm%2FFW%2FppCJNTgxdRZziZqX4NDA6TGOcN3bkMzpvW7dlSc90TOmPvoZd7FA%2BLj2L8Dd8j%2Fb1ML%2FUtr%2BuVM3iPBb6ep7pevUi99zham7kL1OuNiHB8udwr3w3RoP42cAD3lkOiOE4MtI86khkYoF823MuojZ%2F1eN%2FQcZGoI201fsHH0MiByuSEdXB4PrU7noqrbu4gYC2xHPXBw4lwVx3NdKCMnMeXC8U4jCw9QkiSOmcAImQnfCcm3KACYIU%2B%2BzG11EAMd4RNyqjRx%2BfUGxTYWr%2F7VXVLPq6D72TTLUNnBMhJWQNyXcZ21nnx%2Fxatf%2BMLpUdaAO7TdSzDtldPgUH9q1Wq0UnUvEHy5%2FIzsvzU5YDdctlrO43heSjC9ZYevOvkOpszKlLoVc8ppEon%2FP%2BN2lVBRt41vSvsVhMVP5DqQL1dMQcuuxkko0abfUe%2BVxJj3BDMe%2F9H0rS%2FF8ZSJfRoqs2EdfL5IRoM%2FzhhPFcFYmbZyNEEE5UPwx%2BPK8jVf9iOrl9z3TX95DOf9HyDCuGOsD3uk1A4nS6yVNpP9e%2FrDleEzU2juTc0a4gq0DBAhXcJedH%2F5oqhAmv7B2fUJ3sm5He4rqXYNpsykKvQMYlMPzvm4I2%2F5uJAGvFtRWbzCVkcPEBjqkAXwjW9TW6BdW4MKtUb8Xx2bcwLMcsm5X1jmu2d5pimEheKi9Ypc21TzzQBa5elmoVaAg1q7dXlZnA0uL3%2FNQxxjxDfXBrzNQWXSZSM9KW1SdcrdjdKKQMC53%2BpEW82nuvYji%2BlsuUZZ45VCdEHLUXI3st4ANd3KdDYAj5xYa0LJ9S%2F9ozhmWwJpIoRaa6oZJmiUevDcUuNPSyR%2FZrnYmuUve%2BxwD&X-Amz-Signature=16742acc05f003d8f42361b16651a42834078abaf1cf5bb0632b9a34186f6f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHEZW7X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCgk1F95w3%2FnxGif8wdnNAVI3KDkF%2FDWwiXAZ8oiYxB%2FQIhANlOxVQzmX1tbMyDujikH1ZmG14T08NoaWGNGQNLgMXRKv8DCEgQABoMNjM3NDIzMTgzODA1IgxPCIwSAlPqK69Brmkq3AOkZJIuDGyk%2B7ebwg6TMFZHwkRA%2FZGElPu0NMBuIM7aM4s4%2BRkGQOHFjzC05CAbBthXsynLc8eFePWVnURfbIpued%2BM7kpCGYyV5KmeR29T3iF6g3QBH4ovDcMgvoQgZIkAcCuICC5uulHOOyW%2Fk2Jg8cUkEaNkuLqagmkBi6hiNffK6l4W3MNVUvVcMtkWN28OrukyZwCHGBUNmvkV%2FwpVMrMsEvn9EZhgOAXA6kbOqlynnlQ%2BJmeZycJVNtzGO7ty0I7ZyxalBouPY%2Be7lalyskjQM4WQM%2F7nFgEdSj4RjVzoCY6bYLWyhWW5CCM2sL%2BdWi0c022%2BSpe8WpKplWenjr6a3AlmII9193bpGJpWJ7OeKVKok1lQLLtzZVPIJoFLjvB5kJUZfs6YQsQ5Z3cZyLavqTaxY9Thkn9QVHwqH%2BHeYSwNQo6OnG3cQpSFoJplBv19TwBl2G8ZUhLqUS6Oo1R3J4VABgVdzQSuX%2BWuQBscDuV1jAJSY2SFqQaYLskh2lxH5pnqvvYmKFt3I5li1RULejE6jDyddYP79ST0DNZVMqqMj4m8QQEiQWX5i5%2Fga7VArmt2YOHS3Lsh2Y89qq79eqJDTGbRa7OcR5rPqIvbcS055CM6W35B3TDQksPEBjqkAciMbt8EJNIOMyx96oZAb%2FrpKfec4uodxFzEPGrSMmkJGzlPUA4FwfxFLqpOLFuhsBji5t9nDs2o6xbfLJCavDPqlWAuwDvb9zKuKfdm0%2BuQTERO0ZWJaPt65Kr6N1cr37WFY9MlbH5er76W9436g3TobrIZPu%2FUOuWPgicigcvZNDZ1vAmfGuB5rLAmSA3z5i8sw4N7zvjUad1j0hNZpCIPJxvW&X-Amz-Signature=b7d257233793da4d35425e6f72f8c17ab7fab8b21c0228c999596261ddc22252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMVPAKZT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCEH93iXEGOCauNacIQtgfEpeDfNHcKphY9XNHve%2BHVhQIgfkG18W8LiwaocNvNDyEDRfjSl%2FxHuBMPyzHP%2BpQfpycq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGGBme1pomYSbv6siircA6eV1unykmIo%2Bw5u0UdUJn%2B9gChhdDQLRD%2BFMbOgX2CUwXpmK%2BsaLu%2B2DBufnDZ8dQXEn60ggMd%2BaF6wXJHUBjHHCXlnAqTkablr7CUWfGReC5Vvr3tXNK90%2BpuyRc4PQN55z%2BBivmlIhbmbSeGNNJb6dRH%2F3TU6jtFhrewlvB3Zm1wIfWFQGhvDKkp67PtQv5QGsvjB75p4Yw1SVQCbjSA%2FifPJGZY2XfhuecKhDaqsxDzApf3ImyqN9o2N9mJv4GxrOtLEwbQEa5xaenplSLnva4VzjKn6iaA%2FsQ28xmjiwo6%2BRws6cFRbmVUw4WiiQoIzwtQvhgFLrmJr67hzvnrurBw7LED6hMP8xTK1V%2FNPDOT035pEU7ECCHG3OCI8D7lnAKQgsbgeas%2FT%2FVuXTkmthAG%2BH4P7lwBCNQvc%2FNt1sYGKbyNvO%2F%2FdthJUbh1pDuVwZS%2FXzuTAYEWiSq8Mve7TRCpJ9CsshvC8qjcqVX29G7K4OxroPv5dtjOWVvQpNMPzajnsw33BeXATo8KECeMFGioZOKlYRLGxDD21WVCAA7gdSaSg5JJY5sdHSz3ZrwLh%2BdgXbjmVhCbT69BI8Bkq%2Fsz2f%2BbT69mhpQmPcqLFXn50e0PHa%2FWwbf4zMOWRw8QGOqUBSuo1WnP6%2FUbDAGnzmnt8N49xSnadsu7cUtHMQjHGP8L9Cw8O%2F7uTyXjvNAAiggSIZosETRIQWwEz7OCjNG0nYjuvonqZ%2FxSRRV9CqQ9N3mBT41eWOk7AawJUpdgHXpd6%2FSCXG8KCVYLfeafr4aV%2B3%2Bq4mSIE94S2cOfAUQmk30Zculh5fObJ1onrSzIUjuC4DuBOIb1bhtXIw9dQb0EcR6316NMd&X-Amz-Signature=b4c027d76e84344355d3371196037be3511afd62fcc695e897f5d6724a07d906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHEZW7X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCgk1F95w3%2FnxGif8wdnNAVI3KDkF%2FDWwiXAZ8oiYxB%2FQIhANlOxVQzmX1tbMyDujikH1ZmG14T08NoaWGNGQNLgMXRKv8DCEgQABoMNjM3NDIzMTgzODA1IgxPCIwSAlPqK69Brmkq3AOkZJIuDGyk%2B7ebwg6TMFZHwkRA%2FZGElPu0NMBuIM7aM4s4%2BRkGQOHFjzC05CAbBthXsynLc8eFePWVnURfbIpued%2BM7kpCGYyV5KmeR29T3iF6g3QBH4ovDcMgvoQgZIkAcCuICC5uulHOOyW%2Fk2Jg8cUkEaNkuLqagmkBi6hiNffK6l4W3MNVUvVcMtkWN28OrukyZwCHGBUNmvkV%2FwpVMrMsEvn9EZhgOAXA6kbOqlynnlQ%2BJmeZycJVNtzGO7ty0I7ZyxalBouPY%2Be7lalyskjQM4WQM%2F7nFgEdSj4RjVzoCY6bYLWyhWW5CCM2sL%2BdWi0c022%2BSpe8WpKplWenjr6a3AlmII9193bpGJpWJ7OeKVKok1lQLLtzZVPIJoFLjvB5kJUZfs6YQsQ5Z3cZyLavqTaxY9Thkn9QVHwqH%2BHeYSwNQo6OnG3cQpSFoJplBv19TwBl2G8ZUhLqUS6Oo1R3J4VABgVdzQSuX%2BWuQBscDuV1jAJSY2SFqQaYLskh2lxH5pnqvvYmKFt3I5li1RULejE6jDyddYP79ST0DNZVMqqMj4m8QQEiQWX5i5%2Fga7VArmt2YOHS3Lsh2Y89qq79eqJDTGbRa7OcR5rPqIvbcS055CM6W35B3TDQksPEBjqkAciMbt8EJNIOMyx96oZAb%2FrpKfec4uodxFzEPGrSMmkJGzlPUA4FwfxFLqpOLFuhsBji5t9nDs2o6xbfLJCavDPqlWAuwDvb9zKuKfdm0%2BuQTERO0ZWJaPt65Kr6N1cr37WFY9MlbH5er76W9436g3TobrIZPu%2FUOuWPgicigcvZNDZ1vAmfGuB5rLAmSA3z5i8sw4N7zvjUad1j0hNZpCIPJxvW&X-Amz-Signature=b9f8827f2dfb246662305100523e38417039935bd91a817c1b503330ab23390c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM3EFOPN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCgYNq1jsgpDvhfaO%2FREp4KcehUX%2BNEH2x0PV5Y1PhTMAIgW%2FumphV7X71ac1cYqb0trV80EvCN8V78DZr22nLK5boq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCUoFg2W2ShrpBjSRCrcA6%2FH%2BU0GFadRuBID739O9T9JAr7NYZMyEQKXwFsFRW%2BrrFWbs3uWJJbVpewOKjc%2BUjUtOIM1VAllild8H9vmPZd9Zrm%2FfMPRg83vYuYtrLrj%2FpoYan5kkvG5hab6bf7OBFNJegVQGPwWs7uph%2Bh8j5K8pJ3%2BQ5%2F0Wrwnvqudt5TU8mBZ1AkA3sUjgoO1qkyArfzKfP6%2B90Us6Li8mDMTmusyszjut7HDLorACAejdy%2BSN2C1bqebN7acv3813i3ldXDqF9SZcznX10aoecdKcaPuCMAc1%2Bqic2AHXs%2FlOyjrVTcjbRd4VvUJsclUfLgsEFcg3s8qqokMM3QCmS5ufTZAoU%2Bwov0AMa1P3WYxKbsU5uzlpPUlWIHf37SUwL6mYUaA7g95GlIgtOwN1EAKWCEY00dKpuMGWoWw0dgS2ofo1hl91cXU2mJwfrEy5q3fCfAefmken1fZQAnCrcMrYtjLhzZwcDTJjlb6TX0cPi%2Fksc5uJuU4K0gkREcJIdxlTGBbZ2Vug%2BABj1FjaJFYWd%2BICuOlyQ7xVZnSL1PWwL%2FuWRodwEa57fQOkLFmnDte%2Bq7VjNnL3HALVbw7G31%2Bfd%2FVlvlrSvcnUs5hFEUKdAxM2HaVoeZdK9ZuExvFMP6Rw8QGOqUB39lK4QZQKtzt8nIYOwh2TU9lEgCr33nMhxRAcU1%2FEpySXo9%2BSzvDKiaVMG3s%2FIIrvGo%2FyIrXzMnanpN%2FXQXATQ%2BADyJcMcQVJ3SkeC297y7cRqRSL5uLEFh1zJ%2FsMCo0PaRcl7IgPYuuxER5cg4XFuMIyACD6mgvATGCEwBcn6gkZA0PYvdNsCnAmwbZXe5hT%2BJFyXxUv8IBHBJ2MTHfmWmjpQjM&X-Amz-Signature=3ff4dacc465fc4c20b60fb5ee58f06f3b85f4c8274ab7925ebce46dd20e433ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673GPJBR3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCEiBzQcz22nByjShVs0VuEIas9USKxBjBnfDai9sYalwIgefYdrwoy4F7Aq0NOzzh3G61tWA2exOnMI0euqJ6fnvAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCqb%2BXoc%2BlrmdHW1VyrcA3sF5kUxTL6996T9RDgAlNSHWm3J28%2Bp89xQBqNd9wDSqds3fk5nzlgQKfA5qHmbVTgk8LqCqp7zSwv2G3NzBE%2FfYIDL%2BZ44MIFuHRTty0y%2Bfs3OYb3skeZnzNvPusbcRw5mf73UzjpXKN5DnBVptr7EG%2BLrkoJdh5nJy7dqxnPSIzVBZByQCYI%2FPv8Ea74WDMLWrd7vjcWwyfoSGmJT4qTvXjiJ9TN42GXciXFqKDA3r%2F8KftQcQcIqETB9va%2B%2FxbB67OaViq%2FUT9taURsMrPh0c%2FRZ1wnv942RPGOc4ndlVpcrSLrh7vNC2fspryoy9apVcgpCa3xSNwblaTNU%2BFOLJUjQvWBUxbc3aNhDXFhA6pXnREf0vBAI2Jhy%2F10ls5leaLtM3aJtYnnlbCQ54miqrOXZyOweY28Eg1gWjEVfd0hlWIpGI%2Bib5Gzxus%2FItLD2uLi6kgbGnE3bSrAu8TR5YuXOJFOo2y0b7eTiOETGYRm0YQl56yqZQv8InjLwkG06%2Fhnuje4f7Tkjgg5vNUo2tmRObGG%2BCkrglYI%2FyAfeLwa%2FSgNmUp%2BNXK9ueXTZ2CUVK74EBEpOH3MHKFUztYCeq%2FT3xO1xGGzCf7%2ByKoYUh1Ccvf9ytx%2BVmHG6MNORw8QGOqUBrDpM7DZb5JRNwza%2FcJXsL2g2EuKbqRISM0V%2FJXLTCRrteMOWxv00k%2F8RM0gy%2FFlmfxQAw3sR2sSd%2BBGR03gXholO4%2FEwynWls5UtTN3lLxGkDFFj7p0%2BDKKncAAfAK3V40mYSWPzHnUO7dk1fxte1P%2F3i9jSvOq6sWpCFWItqEpx0JTtlsYNJ7%2BZFEIYtLb20BTpwrYmQCQDGrFTB1%2BQTFLE4b%2Fy&X-Amz-Signature=45f28b7f70be6f47384d4a837b06c2d2b88cfcde7ccb428179e74a95e0f7483c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBTAAIQ3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQClWZ8b5dBHI%2FftmM8nGkRkl0Dw1aayE2YcCFiSRM16GwIhAJE%2BAXoSx0%2FZkY5CTJ%2FtCE7AtSTKcfKJU9hDN5bgNKRAKv8DCEgQABoMNjM3NDIzMTgzODA1IgxqGS1201dtXtQPWjEq3AP1H9IfoJJmWyI%2BJoeb72cVpcIUdY%2FHZX4RNUYApXkwP%2BV1V8X%2FNpGtSlDAaJcepnx7G8EH6e%2F3fr5SOBNzP3AhP4WUQUKYpLdTTlCjcwwIujRQJIeSL0O8FntQ82hsAITpWYZAsuAnhGxuk8WM6MUwsQtxANOFEmQpCfDg%2F00%2Fa8wONkjkvUq9n0wigwgk3TvFct%2B0EtbdqkT5Il3%2BYmKJOags7CuYzy%2Fvtrqwtz3bybkiaPR39sblADq3Eubr8svL5v%2Br%2BZhMUYv9OIIRxmg0X88X8cG4UOozAd%2FdxVMdVSU%2BIIMGUdTV8OjLVzJjtsNIVQTu3VPk4n4u5AydAf9hX63Y9lFrRiuwnoZFM2moAPkybk2gMuyrLmC3%2FlPJ8kdfEz%2FnX600LOk4%2BNBKB55IOo4NN17r2gqvYzflBKkPbazrNYwVFzBUXuAw7O8hufJGVpRQ6TZGtaVcrIjldZTzXr1z%2F%2B9tTzhwUbgjTW5WGWp12%2FqsAeyEbVd1S4NfqZr9Syo%2Bi%2FXihv5JznFRLO1JKnqHDBO3URt1xUXrncTUhdv1wVAJg4lTxBPYwnzKrueh36GmgvwLaP8Vq7VWWeKd9j0QQtJrcpZH%2BI20CqW%2Fcvw4y%2Fn9HuN%2FZqNoizCXkcPEBjqkAdstPD3ekfrjQBoUaOS175esIJ7quACVEBYtqKwRrjGNNon%2Fpx36ww7Gr1bkw4timZK1%2BKlhWsnAyLGmhLeqWXplzRwirySCVeMaTiB6XaQn%2FuUIwP26xZApr9Q5X8EdSOcSbKNuT6dcoXynwbvl3IXHxQa6HK%2BVHBn%2B92MAkUodOZEMgPcLzR13siiISeUA3XqR57ZFKIzjSM7po70FIA8Qsuvg&X-Amz-Signature=fd61c9794573886b48fbdb01247cf3d196dde950a6bd21a93b267ae32d577ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZMURPNT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIAasfOI181OhqeARrPYgrgZImBM5rJ%2FvhAzPfBviUtCHAiEAsubshP%2F%2BOGY%2BOgpYvojwzhn%2FoPv90h1MAhp0QxrzQO8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBMvOYBXpDOrBJjM%2BCrcAwKg%2BcYkgf%2Fzx82UDK3FiNRePyk4cabuslzCwcex8Pwq4mX11JqQE6SaoxkQ1gayqI%2FYqT5b%2FyaJhcICeg5LFAdoRGHap9YXCt%2BzQzdFbQtMI1mGiQNfid7ReZ8%2FqnNGMaOFFLif%2Frh7KU9cR98dBuE2k0VQ6NKndk6AVnmVK5dLI6CvsPP3Tw2AsTiznvnyOdT6p0soKzNwTvxFmj1qrDbZh%2FCiYkou9JfofGD7jtFQDH%2BI1dLQjbY3w1tuJ8sdhrx24q7tslvJqC2CPssLvVVq5s5qJ2nA%2B2Ju982ueNhDXJ9EZdKW0VpLvppYJbrN1VmHpCWk%2FQW2Fu2XNqPw28aJf5jZt6TcYbnFo6jKYjdSGCSLYyJVN8rlnDSDBAaCobR2imie0vCVs6vo44PoRGBhlRbSn8Y7BSWFU73aZJW1ectF%2FOucJnKhuDOMwSYt3fuRsZNapf5PmEILOzAdYF6C3tJHOzEjGE5FPL4Gz9Lb0jg%2BBp62FBXLLthR1supwsZnpJj8DAkpZbyStN4bCgHBIBwh2BZlryo237SD1YeIbFXmF2QsXA%2F%2FEb2oFFlNOqoA%2B%2Bk%2BQ0gucuUmLArVadna5bj4lOrF7eIan8dmTtBYKg59Wth%2FSfchYLZ6MO%2BQw8QGOqUB6DdxzFRg2V0bgWH3Va8WjOLD97%2BqwH4gewxZ%2FwvAUX04VrZwWlobJaOHtvqp9owJWOSHDH0GvWn9xY5m5g3g%2FaTYQDmYUvAOZBxUn7dVTLCNiHRx9QKMS7RJNd9hbGfDuum8RRcSgB54XRjrxB3xMHkSw%2BN1AOjR7FNkuz08TEjPU3DubIrb%2BlizidtliWOULwa%2F1ZNQQavKXe9K39AIExVZtfyG&X-Amz-Signature=642cdd66f04604efee8321c224593d892a0f1dcd353bd4f5378e12f4fe285bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JWCSGRF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCEn0rXud8j6G%2BNSrH%2BhY3WYWDYV6OnWRn5eYf%2BFMgWGQIhAM2YDAo26dLwOgbSdz%2FvsqsyOi%2B4ruLzhCd7KnWlC5AbKv8DCEgQABoMNjM3NDIzMTgzODA1IgwFkLMKKDOLolcLmzwq3APjOFIIRmRDKBevkwQiL2QwgjZQPiqnAYmYXcIzQQeGnn3r17F0ijCZUx7pMbn6%2Ft2uk%2BF9N7HdIKQDfLZXu8ixcjs7co1tTY10Ven4bLEIJ0gWSCO2tCU9hqi4erE0mUrq5rmJveSpURpdtL1QdDYe0ZPVSd7yTBa9JG3yQIF7FF9xUwY%2FFQKhNSUmS6fbupQXdpI%2FW%2Fs5ki86Wy%2BR8FswxlpuzNuPtDpRMl4Rq1EcJNH6ChVrbAMUBxwngD82VB7rRTJZuptp%2FVWBONQA2fH38mJphXkG72B0JmnPN0J2fV5ZQjROiUDbomEBKUgGksBjNAq3upObD2OO6zlxJ%2Bdzq3Nhn4EQjdxWV44tI2wnK7I%2BD%2FYnwlzVjhcrIlty65pQtxcSOU8ddhsEeC8EN48zwNqWfrexMKUpisFuDOTmGDSvnOZDOH1q3NvzVqmclg%2FdmRmWH0EFQ3lalbVeDQnLmKZyO1BPH7wXTU6RcttN%2FND6O677LWT40wCNcdczjlLvi7HAot5Fs01YjK5QUZ4qPBx3AXlr8zeDbN6ZmvAr1pXp9s34CDyt2bav%2FBnvjC1KdwUYX%2F8ogcDhMDTM7wpQjHS0hMjOjuldmb2xAX6n2ly%2BbOP4wdxJBKhSRDDskcPEBjqkAUVlsDiPE0ruROVbDbNkyMqKB9QHpKJzn3k8l0YatyE9FwIx%2F4EjWy8viqvpsmbSkX4lDXlNHLEgBuF2LYXLjm7o03KNXiuIBOIPsjfGHVpqtu%2BbUs9y7FxFg7NQHP60a41Cc1SlKRHkeJ1LL04yQTGiBlCgigPGfq%2BCPvZA4CXgzSn08BSXW5rnZAQ61d1VSLiPjLsR5WVuiqHGKZ3sFHogll5z&X-Amz-Signature=fc502d65fd35e6753b300b0fd6fe40572d1d62fe4a9293753b7b84c6120c6771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHEZW7X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCgk1F95w3%2FnxGif8wdnNAVI3KDkF%2FDWwiXAZ8oiYxB%2FQIhANlOxVQzmX1tbMyDujikH1ZmG14T08NoaWGNGQNLgMXRKv8DCEgQABoMNjM3NDIzMTgzODA1IgxPCIwSAlPqK69Brmkq3AOkZJIuDGyk%2B7ebwg6TMFZHwkRA%2FZGElPu0NMBuIM7aM4s4%2BRkGQOHFjzC05CAbBthXsynLc8eFePWVnURfbIpued%2BM7kpCGYyV5KmeR29T3iF6g3QBH4ovDcMgvoQgZIkAcCuICC5uulHOOyW%2Fk2Jg8cUkEaNkuLqagmkBi6hiNffK6l4W3MNVUvVcMtkWN28OrukyZwCHGBUNmvkV%2FwpVMrMsEvn9EZhgOAXA6kbOqlynnlQ%2BJmeZycJVNtzGO7ty0I7ZyxalBouPY%2Be7lalyskjQM4WQM%2F7nFgEdSj4RjVzoCY6bYLWyhWW5CCM2sL%2BdWi0c022%2BSpe8WpKplWenjr6a3AlmII9193bpGJpWJ7OeKVKok1lQLLtzZVPIJoFLjvB5kJUZfs6YQsQ5Z3cZyLavqTaxY9Thkn9QVHwqH%2BHeYSwNQo6OnG3cQpSFoJplBv19TwBl2G8ZUhLqUS6Oo1R3J4VABgVdzQSuX%2BWuQBscDuV1jAJSY2SFqQaYLskh2lxH5pnqvvYmKFt3I5li1RULejE6jDyddYP79ST0DNZVMqqMj4m8QQEiQWX5i5%2Fga7VArmt2YOHS3Lsh2Y89qq79eqJDTGbRa7OcR5rPqIvbcS055CM6W35B3TDQksPEBjqkAciMbt8EJNIOMyx96oZAb%2FrpKfec4uodxFzEPGrSMmkJGzlPUA4FwfxFLqpOLFuhsBji5t9nDs2o6xbfLJCavDPqlWAuwDvb9zKuKfdm0%2BuQTERO0ZWJaPt65Kr6N1cr37WFY9MlbH5er76W9436g3TobrIZPu%2FUOuWPgicigcvZNDZ1vAmfGuB5rLAmSA3z5i8sw4N7zvjUad1j0hNZpCIPJxvW&X-Amz-Signature=32b7705a8e625986a11d91236bf82b6dac844c52204b90fee14a87e49c7ee9ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHEZW7X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCgk1F95w3%2FnxGif8wdnNAVI3KDkF%2FDWwiXAZ8oiYxB%2FQIhANlOxVQzmX1tbMyDujikH1ZmG14T08NoaWGNGQNLgMXRKv8DCEgQABoMNjM3NDIzMTgzODA1IgxPCIwSAlPqK69Brmkq3AOkZJIuDGyk%2B7ebwg6TMFZHwkRA%2FZGElPu0NMBuIM7aM4s4%2BRkGQOHFjzC05CAbBthXsynLc8eFePWVnURfbIpued%2BM7kpCGYyV5KmeR29T3iF6g3QBH4ovDcMgvoQgZIkAcCuICC5uulHOOyW%2Fk2Jg8cUkEaNkuLqagmkBi6hiNffK6l4W3MNVUvVcMtkWN28OrukyZwCHGBUNmvkV%2FwpVMrMsEvn9EZhgOAXA6kbOqlynnlQ%2BJmeZycJVNtzGO7ty0I7ZyxalBouPY%2Be7lalyskjQM4WQM%2F7nFgEdSj4RjVzoCY6bYLWyhWW5CCM2sL%2BdWi0c022%2BSpe8WpKplWenjr6a3AlmII9193bpGJpWJ7OeKVKok1lQLLtzZVPIJoFLjvB5kJUZfs6YQsQ5Z3cZyLavqTaxY9Thkn9QVHwqH%2BHeYSwNQo6OnG3cQpSFoJplBv19TwBl2G8ZUhLqUS6Oo1R3J4VABgVdzQSuX%2BWuQBscDuV1jAJSY2SFqQaYLskh2lxH5pnqvvYmKFt3I5li1RULejE6jDyddYP79ST0DNZVMqqMj4m8QQEiQWX5i5%2Fga7VArmt2YOHS3Lsh2Y89qq79eqJDTGbRa7OcR5rPqIvbcS055CM6W35B3TDQksPEBjqkAciMbt8EJNIOMyx96oZAb%2FrpKfec4uodxFzEPGrSMmkJGzlPUA4FwfxFLqpOLFuhsBji5t9nDs2o6xbfLJCavDPqlWAuwDvb9zKuKfdm0%2BuQTERO0ZWJaPt65Kr6N1cr37WFY9MlbH5er76W9436g3TobrIZPu%2FUOuWPgicigcvZNDZ1vAmfGuB5rLAmSA3z5i8sw4N7zvjUad1j0hNZpCIPJxvW&X-Amz-Signature=f23b2a5966693a37ed6ccb4b38cb2e791d8764fc5e16bf1f6595773e506c839f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV7TKVE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQChJPg7finsmRfHyKaRYHh7513Gs%2BfZGmS87DejRYMiwwIhAJmYzhyI3IVDqx8XjXOy8zDzViO6z3E%2BjqLInFFf4C8KKv8DCEgQABoMNjM3NDIzMTgzODA1Igwmp%2B2V%2BAZ49SNJH04q3AO%2FT%2BQxGJKTRMIM%2BCdl0pRzeohHlVSpqR3zIziSzvkCtu8AUUai50nXovZnh0WNYtZqOrNQBHyNQpBQtvhGrfQUYFMRC6FUKkfaSMm%2FisVy3OdExGSnVwewb8R5OPzY3ZQdb9S2py1CnvHBdjvI8nBm52i4um4%2BF%2FgSz%2FOcdjG0xlRfaNfOWOH24vS4MXFfOZDvGXqCu7ZFNur1dsv%2BBJRmOw%2FQD88Ejth2e21S6%2BhVi7RSLGQcA9uq69P2LC1ZDXdqORqGlSRNhiahfKYRWVas4cmuLM%2FGGpwkfmy2Jpt664pqvDIMiGchBeKg210SmDhU0jBOMS9Rsm0YAchlZd0E%2Fgd49Gy9zTXTGkYde%2F5PqGrPi3DOFjwcirqPMp3B9VYY2CV%2F9nlo5%2BGrksQLPLvbO3ha1HUatHebek5851svO57K7ak%2BuErzPSdOBSkxPzLDlxGALbelcnhW9HqV0yBKQl9O7d2WNSFfJBIyQLs3ibBU9mbUSpRMi4ntU5kznNdcZAz1EN1zQTRXuP9a%2F56BBBPqjMmLGAxeYX7ZwB3VILSAP72JDG9YL5YgcUJC%2FrJQR7de2GNSuLrvdJmNNez7ietPDsTzmjXUNwM7kDdMfyWksPrifY8Eu9HHVTCzkcPEBjqkATRAGlzr1znCLjHOIN%2Bbrru3RhQn25sYGxYXjazxJaMerxzi7bZfkyk2Ce8eHT6spOMRfxngSAalrIo09KW%2F4FF8qUzrqFDcAPzVUoCBQs4SnmB1jTVFT83Pujh8P70BOfh590fO4415UYtDU%2Bu%2BH8kTC%2FZkwuDFYUOljTBuj%2FNLNWL2wAaZqUoX27teAfqo2kRq8PTqOqOrEXlpDt8Ch9YCL7g1&X-Amz-Signature=0ce291127b7eb8ffdac84d19d73802a5174abab63d7163cf165a4bb7e0a797cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV7TKVE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQChJPg7finsmRfHyKaRYHh7513Gs%2BfZGmS87DejRYMiwwIhAJmYzhyI3IVDqx8XjXOy8zDzViO6z3E%2BjqLInFFf4C8KKv8DCEgQABoMNjM3NDIzMTgzODA1Igwmp%2B2V%2BAZ49SNJH04q3AO%2FT%2BQxGJKTRMIM%2BCdl0pRzeohHlVSpqR3zIziSzvkCtu8AUUai50nXovZnh0WNYtZqOrNQBHyNQpBQtvhGrfQUYFMRC6FUKkfaSMm%2FisVy3OdExGSnVwewb8R5OPzY3ZQdb9S2py1CnvHBdjvI8nBm52i4um4%2BF%2FgSz%2FOcdjG0xlRfaNfOWOH24vS4MXFfOZDvGXqCu7ZFNur1dsv%2BBJRmOw%2FQD88Ejth2e21S6%2BhVi7RSLGQcA9uq69P2LC1ZDXdqORqGlSRNhiahfKYRWVas4cmuLM%2FGGpwkfmy2Jpt664pqvDIMiGchBeKg210SmDhU0jBOMS9Rsm0YAchlZd0E%2Fgd49Gy9zTXTGkYde%2F5PqGrPi3DOFjwcirqPMp3B9VYY2CV%2F9nlo5%2BGrksQLPLvbO3ha1HUatHebek5851svO57K7ak%2BuErzPSdOBSkxPzLDlxGALbelcnhW9HqV0yBKQl9O7d2WNSFfJBIyQLs3ibBU9mbUSpRMi4ntU5kznNdcZAz1EN1zQTRXuP9a%2F56BBBPqjMmLGAxeYX7ZwB3VILSAP72JDG9YL5YgcUJC%2FrJQR7de2GNSuLrvdJmNNez7ietPDsTzmjXUNwM7kDdMfyWksPrifY8Eu9HHVTCzkcPEBjqkATRAGlzr1znCLjHOIN%2Bbrru3RhQn25sYGxYXjazxJaMerxzi7bZfkyk2Ce8eHT6spOMRfxngSAalrIo09KW%2F4FF8qUzrqFDcAPzVUoCBQs4SnmB1jTVFT83Pujh8P70BOfh590fO4415UYtDU%2Bu%2BH8kTC%2FZkwuDFYUOljTBuj%2FNLNWL2wAaZqUoX27teAfqo2kRq8PTqOqOrEXlpDt8Ch9YCL7g1&X-Amz-Signature=8775eb7c34a8d7f97f8ad7a5a6b4ebeb3dbedae9929f7a1fc796180115b3b9d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV7TKVE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQChJPg7finsmRfHyKaRYHh7513Gs%2BfZGmS87DejRYMiwwIhAJmYzhyI3IVDqx8XjXOy8zDzViO6z3E%2BjqLInFFf4C8KKv8DCEgQABoMNjM3NDIzMTgzODA1Igwmp%2B2V%2BAZ49SNJH04q3AO%2FT%2BQxGJKTRMIM%2BCdl0pRzeohHlVSpqR3zIziSzvkCtu8AUUai50nXovZnh0WNYtZqOrNQBHyNQpBQtvhGrfQUYFMRC6FUKkfaSMm%2FisVy3OdExGSnVwewb8R5OPzY3ZQdb9S2py1CnvHBdjvI8nBm52i4um4%2BF%2FgSz%2FOcdjG0xlRfaNfOWOH24vS4MXFfOZDvGXqCu7ZFNur1dsv%2BBJRmOw%2FQD88Ejth2e21S6%2BhVi7RSLGQcA9uq69P2LC1ZDXdqORqGlSRNhiahfKYRWVas4cmuLM%2FGGpwkfmy2Jpt664pqvDIMiGchBeKg210SmDhU0jBOMS9Rsm0YAchlZd0E%2Fgd49Gy9zTXTGkYde%2F5PqGrPi3DOFjwcirqPMp3B9VYY2CV%2F9nlo5%2BGrksQLPLvbO3ha1HUatHebek5851svO57K7ak%2BuErzPSdOBSkxPzLDlxGALbelcnhW9HqV0yBKQl9O7d2WNSFfJBIyQLs3ibBU9mbUSpRMi4ntU5kznNdcZAz1EN1zQTRXuP9a%2F56BBBPqjMmLGAxeYX7ZwB3VILSAP72JDG9YL5YgcUJC%2FrJQR7de2GNSuLrvdJmNNez7ietPDsTzmjXUNwM7kDdMfyWksPrifY8Eu9HHVTCzkcPEBjqkATRAGlzr1znCLjHOIN%2Bbrru3RhQn25sYGxYXjazxJaMerxzi7bZfkyk2Ce8eHT6spOMRfxngSAalrIo09KW%2F4FF8qUzrqFDcAPzVUoCBQs4SnmB1jTVFT83Pujh8P70BOfh590fO4415UYtDU%2Bu%2BH8kTC%2FZkwuDFYUOljTBuj%2FNLNWL2wAaZqUoX27teAfqo2kRq8PTqOqOrEXlpDt8Ch9YCL7g1&X-Amz-Signature=e763900cabdfcda3e6df678311ce925560127d171e41735299e033d7850c1892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV7TKVE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQChJPg7finsmRfHyKaRYHh7513Gs%2BfZGmS87DejRYMiwwIhAJmYzhyI3IVDqx8XjXOy8zDzViO6z3E%2BjqLInFFf4C8KKv8DCEgQABoMNjM3NDIzMTgzODA1Igwmp%2B2V%2BAZ49SNJH04q3AO%2FT%2BQxGJKTRMIM%2BCdl0pRzeohHlVSpqR3zIziSzvkCtu8AUUai50nXovZnh0WNYtZqOrNQBHyNQpBQtvhGrfQUYFMRC6FUKkfaSMm%2FisVy3OdExGSnVwewb8R5OPzY3ZQdb9S2py1CnvHBdjvI8nBm52i4um4%2BF%2FgSz%2FOcdjG0xlRfaNfOWOH24vS4MXFfOZDvGXqCu7ZFNur1dsv%2BBJRmOw%2FQD88Ejth2e21S6%2BhVi7RSLGQcA9uq69P2LC1ZDXdqORqGlSRNhiahfKYRWVas4cmuLM%2FGGpwkfmy2Jpt664pqvDIMiGchBeKg210SmDhU0jBOMS9Rsm0YAchlZd0E%2Fgd49Gy9zTXTGkYde%2F5PqGrPi3DOFjwcirqPMp3B9VYY2CV%2F9nlo5%2BGrksQLPLvbO3ha1HUatHebek5851svO57K7ak%2BuErzPSdOBSkxPzLDlxGALbelcnhW9HqV0yBKQl9O7d2WNSFfJBIyQLs3ibBU9mbUSpRMi4ntU5kznNdcZAz1EN1zQTRXuP9a%2F56BBBPqjMmLGAxeYX7ZwB3VILSAP72JDG9YL5YgcUJC%2FrJQR7de2GNSuLrvdJmNNez7ietPDsTzmjXUNwM7kDdMfyWksPrifY8Eu9HHVTCzkcPEBjqkATRAGlzr1znCLjHOIN%2Bbrru3RhQn25sYGxYXjazxJaMerxzi7bZfkyk2Ce8eHT6spOMRfxngSAalrIo09KW%2F4FF8qUzrqFDcAPzVUoCBQs4SnmB1jTVFT83Pujh8P70BOfh590fO4415UYtDU%2Bu%2BH8kTC%2FZkwuDFYUOljTBuj%2FNLNWL2wAaZqUoX27teAfqo2kRq8PTqOqOrEXlpDt8Ch9YCL7g1&X-Amz-Signature=818c5fd1d656d0f33ec290689d82899bf83dceeed578bdacfd6cc3671e9d837b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV7TKVE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQChJPg7finsmRfHyKaRYHh7513Gs%2BfZGmS87DejRYMiwwIhAJmYzhyI3IVDqx8XjXOy8zDzViO6z3E%2BjqLInFFf4C8KKv8DCEgQABoMNjM3NDIzMTgzODA1Igwmp%2B2V%2BAZ49SNJH04q3AO%2FT%2BQxGJKTRMIM%2BCdl0pRzeohHlVSpqR3zIziSzvkCtu8AUUai50nXovZnh0WNYtZqOrNQBHyNQpBQtvhGrfQUYFMRC6FUKkfaSMm%2FisVy3OdExGSnVwewb8R5OPzY3ZQdb9S2py1CnvHBdjvI8nBm52i4um4%2BF%2FgSz%2FOcdjG0xlRfaNfOWOH24vS4MXFfOZDvGXqCu7ZFNur1dsv%2BBJRmOw%2FQD88Ejth2e21S6%2BhVi7RSLGQcA9uq69P2LC1ZDXdqORqGlSRNhiahfKYRWVas4cmuLM%2FGGpwkfmy2Jpt664pqvDIMiGchBeKg210SmDhU0jBOMS9Rsm0YAchlZd0E%2Fgd49Gy9zTXTGkYde%2F5PqGrPi3DOFjwcirqPMp3B9VYY2CV%2F9nlo5%2BGrksQLPLvbO3ha1HUatHebek5851svO57K7ak%2BuErzPSdOBSkxPzLDlxGALbelcnhW9HqV0yBKQl9O7d2WNSFfJBIyQLs3ibBU9mbUSpRMi4ntU5kznNdcZAz1EN1zQTRXuP9a%2F56BBBPqjMmLGAxeYX7ZwB3VILSAP72JDG9YL5YgcUJC%2FrJQR7de2GNSuLrvdJmNNez7ietPDsTzmjXUNwM7kDdMfyWksPrifY8Eu9HHVTCzkcPEBjqkATRAGlzr1znCLjHOIN%2Bbrru3RhQn25sYGxYXjazxJaMerxzi7bZfkyk2Ce8eHT6spOMRfxngSAalrIo09KW%2F4FF8qUzrqFDcAPzVUoCBQs4SnmB1jTVFT83Pujh8P70BOfh590fO4415UYtDU%2Bu%2BH8kTC%2FZkwuDFYUOljTBuj%2FNLNWL2wAaZqUoX27teAfqo2kRq8PTqOqOrEXlpDt8Ch9YCL7g1&X-Amz-Signature=c1637c6adddf0a9836d9721cf22c978c865b87b084e939063eca8fc4ddfa2e92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV7TKVE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQChJPg7finsmRfHyKaRYHh7513Gs%2BfZGmS87DejRYMiwwIhAJmYzhyI3IVDqx8XjXOy8zDzViO6z3E%2BjqLInFFf4C8KKv8DCEgQABoMNjM3NDIzMTgzODA1Igwmp%2B2V%2BAZ49SNJH04q3AO%2FT%2BQxGJKTRMIM%2BCdl0pRzeohHlVSpqR3zIziSzvkCtu8AUUai50nXovZnh0WNYtZqOrNQBHyNQpBQtvhGrfQUYFMRC6FUKkfaSMm%2FisVy3OdExGSnVwewb8R5OPzY3ZQdb9S2py1CnvHBdjvI8nBm52i4um4%2BF%2FgSz%2FOcdjG0xlRfaNfOWOH24vS4MXFfOZDvGXqCu7ZFNur1dsv%2BBJRmOw%2FQD88Ejth2e21S6%2BhVi7RSLGQcA9uq69P2LC1ZDXdqORqGlSRNhiahfKYRWVas4cmuLM%2FGGpwkfmy2Jpt664pqvDIMiGchBeKg210SmDhU0jBOMS9Rsm0YAchlZd0E%2Fgd49Gy9zTXTGkYde%2F5PqGrPi3DOFjwcirqPMp3B9VYY2CV%2F9nlo5%2BGrksQLPLvbO3ha1HUatHebek5851svO57K7ak%2BuErzPSdOBSkxPzLDlxGALbelcnhW9HqV0yBKQl9O7d2WNSFfJBIyQLs3ibBU9mbUSpRMi4ntU5kznNdcZAz1EN1zQTRXuP9a%2F56BBBPqjMmLGAxeYX7ZwB3VILSAP72JDG9YL5YgcUJC%2FrJQR7de2GNSuLrvdJmNNez7ietPDsTzmjXUNwM7kDdMfyWksPrifY8Eu9HHVTCzkcPEBjqkATRAGlzr1znCLjHOIN%2Bbrru3RhQn25sYGxYXjazxJaMerxzi7bZfkyk2Ce8eHT6spOMRfxngSAalrIo09KW%2F4FF8qUzrqFDcAPzVUoCBQs4SnmB1jTVFT83Pujh8P70BOfh590fO4415UYtDU%2Bu%2BH8kTC%2FZkwuDFYUOljTBuj%2FNLNWL2wAaZqUoX27teAfqo2kRq8PTqOqOrEXlpDt8Ch9YCL7g1&X-Amz-Signature=c6c7f0644d9d58b2848f97da6c0bfa9f9e69097b88b2a581c7fc1122a1fbf662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV7TKVE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQChJPg7finsmRfHyKaRYHh7513Gs%2BfZGmS87DejRYMiwwIhAJmYzhyI3IVDqx8XjXOy8zDzViO6z3E%2BjqLInFFf4C8KKv8DCEgQABoMNjM3NDIzMTgzODA1Igwmp%2B2V%2BAZ49SNJH04q3AO%2FT%2BQxGJKTRMIM%2BCdl0pRzeohHlVSpqR3zIziSzvkCtu8AUUai50nXovZnh0WNYtZqOrNQBHyNQpBQtvhGrfQUYFMRC6FUKkfaSMm%2FisVy3OdExGSnVwewb8R5OPzY3ZQdb9S2py1CnvHBdjvI8nBm52i4um4%2BF%2FgSz%2FOcdjG0xlRfaNfOWOH24vS4MXFfOZDvGXqCu7ZFNur1dsv%2BBJRmOw%2FQD88Ejth2e21S6%2BhVi7RSLGQcA9uq69P2LC1ZDXdqORqGlSRNhiahfKYRWVas4cmuLM%2FGGpwkfmy2Jpt664pqvDIMiGchBeKg210SmDhU0jBOMS9Rsm0YAchlZd0E%2Fgd49Gy9zTXTGkYde%2F5PqGrPi3DOFjwcirqPMp3B9VYY2CV%2F9nlo5%2BGrksQLPLvbO3ha1HUatHebek5851svO57K7ak%2BuErzPSdOBSkxPzLDlxGALbelcnhW9HqV0yBKQl9O7d2WNSFfJBIyQLs3ibBU9mbUSpRMi4ntU5kznNdcZAz1EN1zQTRXuP9a%2F56BBBPqjMmLGAxeYX7ZwB3VILSAP72JDG9YL5YgcUJC%2FrJQR7de2GNSuLrvdJmNNez7ietPDsTzmjXUNwM7kDdMfyWksPrifY8Eu9HHVTCzkcPEBjqkATRAGlzr1znCLjHOIN%2Bbrru3RhQn25sYGxYXjazxJaMerxzi7bZfkyk2Ce8eHT6spOMRfxngSAalrIo09KW%2F4FF8qUzrqFDcAPzVUoCBQs4SnmB1jTVFT83Pujh8P70BOfh590fO4415UYtDU%2Bu%2BH8kTC%2FZkwuDFYUOljTBuj%2FNLNWL2wAaZqUoX27teAfqo2kRq8PTqOqOrEXlpDt8Ch9YCL7g1&X-Amz-Signature=f0d0edd3bb39ed88a70ae360c49afe5f9269749340e8d5cbf54e2396e99cbe59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV7TKVE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQChJPg7finsmRfHyKaRYHh7513Gs%2BfZGmS87DejRYMiwwIhAJmYzhyI3IVDqx8XjXOy8zDzViO6z3E%2BjqLInFFf4C8KKv8DCEgQABoMNjM3NDIzMTgzODA1Igwmp%2B2V%2BAZ49SNJH04q3AO%2FT%2BQxGJKTRMIM%2BCdl0pRzeohHlVSpqR3zIziSzvkCtu8AUUai50nXovZnh0WNYtZqOrNQBHyNQpBQtvhGrfQUYFMRC6FUKkfaSMm%2FisVy3OdExGSnVwewb8R5OPzY3ZQdb9S2py1CnvHBdjvI8nBm52i4um4%2BF%2FgSz%2FOcdjG0xlRfaNfOWOH24vS4MXFfOZDvGXqCu7ZFNur1dsv%2BBJRmOw%2FQD88Ejth2e21S6%2BhVi7RSLGQcA9uq69P2LC1ZDXdqORqGlSRNhiahfKYRWVas4cmuLM%2FGGpwkfmy2Jpt664pqvDIMiGchBeKg210SmDhU0jBOMS9Rsm0YAchlZd0E%2Fgd49Gy9zTXTGkYde%2F5PqGrPi3DOFjwcirqPMp3B9VYY2CV%2F9nlo5%2BGrksQLPLvbO3ha1HUatHebek5851svO57K7ak%2BuErzPSdOBSkxPzLDlxGALbelcnhW9HqV0yBKQl9O7d2WNSFfJBIyQLs3ibBU9mbUSpRMi4ntU5kznNdcZAz1EN1zQTRXuP9a%2F56BBBPqjMmLGAxeYX7ZwB3VILSAP72JDG9YL5YgcUJC%2FrJQR7de2GNSuLrvdJmNNez7ietPDsTzmjXUNwM7kDdMfyWksPrifY8Eu9HHVTCzkcPEBjqkATRAGlzr1znCLjHOIN%2Bbrru3RhQn25sYGxYXjazxJaMerxzi7bZfkyk2Ce8eHT6spOMRfxngSAalrIo09KW%2F4FF8qUzrqFDcAPzVUoCBQs4SnmB1jTVFT83Pujh8P70BOfh590fO4415UYtDU%2Bu%2BH8kTC%2FZkwuDFYUOljTBuj%2FNLNWL2wAaZqUoX27teAfqo2kRq8PTqOqOrEXlpDt8Ch9YCL7g1&X-Amz-Signature=d14d7e490be06649dd86d6f7df244c28ed90d7355a5b0a610f9935ef1695575b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV7TKVE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQChJPg7finsmRfHyKaRYHh7513Gs%2BfZGmS87DejRYMiwwIhAJmYzhyI3IVDqx8XjXOy8zDzViO6z3E%2BjqLInFFf4C8KKv8DCEgQABoMNjM3NDIzMTgzODA1Igwmp%2B2V%2BAZ49SNJH04q3AO%2FT%2BQxGJKTRMIM%2BCdl0pRzeohHlVSpqR3zIziSzvkCtu8AUUai50nXovZnh0WNYtZqOrNQBHyNQpBQtvhGrfQUYFMRC6FUKkfaSMm%2FisVy3OdExGSnVwewb8R5OPzY3ZQdb9S2py1CnvHBdjvI8nBm52i4um4%2BF%2FgSz%2FOcdjG0xlRfaNfOWOH24vS4MXFfOZDvGXqCu7ZFNur1dsv%2BBJRmOw%2FQD88Ejth2e21S6%2BhVi7RSLGQcA9uq69P2LC1ZDXdqORqGlSRNhiahfKYRWVas4cmuLM%2FGGpwkfmy2Jpt664pqvDIMiGchBeKg210SmDhU0jBOMS9Rsm0YAchlZd0E%2Fgd49Gy9zTXTGkYde%2F5PqGrPi3DOFjwcirqPMp3B9VYY2CV%2F9nlo5%2BGrksQLPLvbO3ha1HUatHebek5851svO57K7ak%2BuErzPSdOBSkxPzLDlxGALbelcnhW9HqV0yBKQl9O7d2WNSFfJBIyQLs3ibBU9mbUSpRMi4ntU5kznNdcZAz1EN1zQTRXuP9a%2F56BBBPqjMmLGAxeYX7ZwB3VILSAP72JDG9YL5YgcUJC%2FrJQR7de2GNSuLrvdJmNNez7ietPDsTzmjXUNwM7kDdMfyWksPrifY8Eu9HHVTCzkcPEBjqkATRAGlzr1znCLjHOIN%2Bbrru3RhQn25sYGxYXjazxJaMerxzi7bZfkyk2Ce8eHT6spOMRfxngSAalrIo09KW%2F4FF8qUzrqFDcAPzVUoCBQs4SnmB1jTVFT83Pujh8P70BOfh590fO4415UYtDU%2Bu%2BH8kTC%2FZkwuDFYUOljTBuj%2FNLNWL2wAaZqUoX27teAfqo2kRq8PTqOqOrEXlpDt8Ch9YCL7g1&X-Amz-Signature=3c0a4ca6d1b27ee23576208c0e0b36f78d7618b4be2b280d8f480edf053c79cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV7TKVE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQChJPg7finsmRfHyKaRYHh7513Gs%2BfZGmS87DejRYMiwwIhAJmYzhyI3IVDqx8XjXOy8zDzViO6z3E%2BjqLInFFf4C8KKv8DCEgQABoMNjM3NDIzMTgzODA1Igwmp%2B2V%2BAZ49SNJH04q3AO%2FT%2BQxGJKTRMIM%2BCdl0pRzeohHlVSpqR3zIziSzvkCtu8AUUai50nXovZnh0WNYtZqOrNQBHyNQpBQtvhGrfQUYFMRC6FUKkfaSMm%2FisVy3OdExGSnVwewb8R5OPzY3ZQdb9S2py1CnvHBdjvI8nBm52i4um4%2BF%2FgSz%2FOcdjG0xlRfaNfOWOH24vS4MXFfOZDvGXqCu7ZFNur1dsv%2BBJRmOw%2FQD88Ejth2e21S6%2BhVi7RSLGQcA9uq69P2LC1ZDXdqORqGlSRNhiahfKYRWVas4cmuLM%2FGGpwkfmy2Jpt664pqvDIMiGchBeKg210SmDhU0jBOMS9Rsm0YAchlZd0E%2Fgd49Gy9zTXTGkYde%2F5PqGrPi3DOFjwcirqPMp3B9VYY2CV%2F9nlo5%2BGrksQLPLvbO3ha1HUatHebek5851svO57K7ak%2BuErzPSdOBSkxPzLDlxGALbelcnhW9HqV0yBKQl9O7d2WNSFfJBIyQLs3ibBU9mbUSpRMi4ntU5kznNdcZAz1EN1zQTRXuP9a%2F56BBBPqjMmLGAxeYX7ZwB3VILSAP72JDG9YL5YgcUJC%2FrJQR7de2GNSuLrvdJmNNez7ietPDsTzmjXUNwM7kDdMfyWksPrifY8Eu9HHVTCzkcPEBjqkATRAGlzr1znCLjHOIN%2Bbrru3RhQn25sYGxYXjazxJaMerxzi7bZfkyk2Ce8eHT6spOMRfxngSAalrIo09KW%2F4FF8qUzrqFDcAPzVUoCBQs4SnmB1jTVFT83Pujh8P70BOfh590fO4415UYtDU%2Bu%2BH8kTC%2FZkwuDFYUOljTBuj%2FNLNWL2wAaZqUoX27teAfqo2kRq8PTqOqOrEXlpDt8Ch9YCL7g1&X-Amz-Signature=fec8e331d22c4a3cce529b351ccd12163635735e6fd27779d74be3ba7891c006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
