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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=07177ee74f7934d8a2f13a196c8ee0509bb0cbf498e892856218585b25430cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=d8e910ac8d383b336973a3f04749c4bab89089db52dad6d8a0966c6d186b335b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=5693e979d535f8818946b2d1eba4922846b6793c6d28abc95229a984ff23813b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=899a014bbe71cea7b7fb08f94e62720f4b9c7ee8ab5e0a3724987d8ac7030b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=b029528956e334167f016f1e03c753cafb261f45a4f25573edaf8ffcf9d09697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=905938ab4196f04f71d3097a62734f3620c459bc8a228b32d620b6486f28206f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=ff531415e5c22a199ec794ad7b61b630c78ed36667538196f248466d62ebfc26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=888ea58a212e40c1a24533d61bc40445353d3537ef4c087b98f699479c477d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=c51f9d940cbbfb4c98d58fb8dae3de0aadc84597c0735452428cdd4a4e151a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=055a67c90a8cbdacb411cf004ba96057ac57b185a53316abce618bc422e15bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RINSIIID%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIBmu8SJSGm9LxSdJy%2FSuOqkiP9%2BR1injxLGXnVWTWg6wAiAWChtNqCMxFJttLTvjR2ZRvE4wUcQ9p661tMX8eVO6UCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMty%2BOA5kIe%2FpYXf6iKtwDOUVUTxUIbO%2BhsNh02PoP6aQD6mRJu3Yb9Dp%2BeeonwTX8914yStwp4JUP5kg2fDxntp6dVoqE5S%2BjQfGtsxUYLanZNSyZsIaCkHNnDLbowa4Ljko9ka0hOe8PMnfi13pJYlIwYSKYeoIZokobZPOR7N8KGRcaxR9FZ2gcEI5KB6YZpwibC5iG5MkVdaRf2qwYG6Pec7gFpcYVsYTdm0aFDsriSb5KqP2PYr9OlWke1W79%2BHATfvaDedfDbLiYuII7vVdp96DSDPsbkZfz0FgyqddlktOEM5JcaLdyfSe%2B6fpfHpVuvmuNI02Eftdf%2BAReMTZ9oM9skXmbSYGiC2b3fAZfjSnLaFRMz3YoojiFWCwujolsQwHP5qky995uxbjET9Vsvh8SMJwZgmIXM9Hw6t8S4qqEm98jmUnTsJyUHNxFMBKse67muQJR8OURbLvBbZFBN%2BB1R1BU0h%2FgzLXCWpuJpd3RCZKm%2FmCZbGBls1DIF44qtT377GCmHeRjL9C0c%2FeVjq%2FPEtDBgUQ6uAzN2ZdWxS8xdxowfzRnsOcCyNnGmhWWdt6rk7zTUT%2FSsf5nIuvWOt8htosc49H3FXI3r0PPx5OlPXHFpr5I6OLAKUhihWPzGSW6BGww%2FWgw4P%2B3xgY6pgF4bHa%2FYClkOGg3lvmpc3WSnSVdf7B0KFL%2B4dd6SLrw14UnlRcnX5kqT66j0QCiV2pJUZ03nCbAxR2mOpLbvK0r74G573nqsiSTw29JzEdeMjxDrlrrREcjCY4ikx8Km5Waa6nYjbaDF%2BSaQjThz%2BP7VRT8OVNlWyp1sf4U6UKEDoZBRTzqwd7LBLGpT51gTit5xpxywEN5QJg8LefG1SEYX%2FnvPMFR&X-Amz-Signature=aff7e0671d5e3b1c63e640739e29ead2bd0276fe4c9c979b849cd76425b532bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625P3BZYL%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDI%2BnlrfRoONLHBgLnZ0eE5aQDXPV8%2F161ntnFCJhz4nQIgQCDCVY%2Bh%2BOazuhKIRDEZZrldYJKD%2FoeXwBoWjkDl%2FbYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBB4GQ3zwsE0vFJ2PyrcA6OG%2Fb5YTCTYx6D8wy6y5hk54%2BKpYESmgWvXqKwCkUWfaDc0Sx1%2BUXB70Ed2SpcuF1ll7JC9vBcpIDQIzPF8S9hQiJtE3eTh4AkX067xmiHmxrA3ipOqE3UgednCztZZx9JVpqDg9klhDkw1aQx%2BhlPQ7AfmFJn04vY0oDHIZ4MAk8VTvU5fRRT5RyUjhleGgvzNkk3eDTRc1kglakhD3DOg7PBotDIGlX%2FzstWjNLcQVSlHAhi1PM%2BWoSAsdZYT%2BuPc28XpPSRcAH%2Bg4sJ9ng%2BSpuT%2FLW1EVsT4xSTDY9B6dyOBLwPHsAhnLYKYZSIXQvkAJWl%2BdIY9PO%2FmqWATqEViWXWlNvcfMQajEnaPg%2BaT0n60R6TnwI%2F4LudD1ypeBR%2BTly4h2b4pfXR5apLl0qaCfpwALQ6L%2FoQza2CApt9aMq7LT4dUhHEI5Ta2xyUnNQZNhgBkIVme6QoXVLi5ofxzX3lZRTZ0n5OQTQq%2F00B1c8T67L7a2YfHU507I8SggjUL8%2BgXCgirTziyNx9cx2pEdKCcHC4yD5uzBvu9vjMtML5OBDE08oxkO3MbQtB2rgcWp3Eo%2BgC%2B2WoXENpD4wfHsK6dL5zUYwgCPuoN3UCbMnul5eyAQtEsj%2BP3MNz%2Ft8YGOqUBn0B1%2BBDVd2r4u2Q8%2FjlQiCbNN18rxtYmf%2BKMLb6i%2FHVz5%2FcQFpy7HYfxOcsUPlhAJ1mb%2BIUlRV4YO13WWyaEoD7bBJENhor97rpw4egRWnZ30vUWTF%2Bm9023Vk%2B3GN336RKI8M8Z6x3Px0NVvF4NapILF9%2BCF9x%2FdaS%2Fv%2BVkzcT2pIt1ZTLM1cWIWCI9ZJ97igDuyM387mjX3JdBagD6MziZ2PfA&X-Amz-Signature=d2b32bd814e69dac42a0882eb04bb4d11df11237f70212c6155d5b38c988cfa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QHPWSQQ%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCMY1ETFrVE56G7YyOL5%2BURUMZSftY%2B5RLmW3Zb2u%2F8xgIhAPjRDzZQoOnI%2B9DBXxobHfRjar%2BPyh3225Ok1W%2FLx5pKKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkp8V2n4UrDhwiCwMq3AOUUmzpxAmIUSU5tESCjk5yJUtrQaey8trF1Y4HfnfeW2pU1OW13KZfUQKKRB5xjfFSBTLUG0bWJqR3Fxj8nPw0ez1Cm2qqATWsuwQD2y1MBzEkaRdLXAvpirJje%2BESzszBUOle7ELL2Fn3EAziL0csA6kmpTw4BZdbhX9mx3fi2REkdFiypr9nS5MOZi23wxnxJLkMEIJBYYQMuR9kXcqMbf8yU09nDY2xR0%2FnLWmJRlZF2DeYaE0zoB0brH2Ptvv%2B9mPxzddpxBlpdtp4yQKShQOvQVyT4UN70ONsU5nQc6I2w7ZdQkE7v8eG1DegUDsydFmWS7sCthNOvo7ut7VdF4cqOF8Gi8oTI1DEJfUbLjuL7ys5yUY97SmsJ397y%2BRWUMPaAplxDINBqtDXP%2BDKzO8uaJ3dREHOX1wLuTypTXA6pjt7%2BPftkWA6DZtA8FKAWD9Bxj97%2BwJ6D1EqBhsQlCT9lg4upwNWaFJsqTblBWi0GiLYw7aqUfrvc2NZDkokt5CHLScN4YK2%2FGSk3rqwaBDdpi2bacv24TCDBsbPudbPnOXUG008cVJZuXDaQzuQSFm7%2BS%2BpPjSJ2rXCew3tuVnamcEJ8RrQzdCJVH6f7hBVnZwx9T6PBgcrmTCAgLjGBjqkAVCzn9kCjEpl6%2ByDOrwgLbd5qPlswsGXYLxgbQNuzkIHj1Md3eBmKcWPa0M0zSn4u7FkqUsD7fjixgOXWVLv%2B%2BuGE9zffxEw5fx1ZQUjtESEMwfjd3H%2BXQG4CrZhR4F4mxjvrzi9Qz%2FFLMMK5tsfd6%2FDLZh7VE7%2FlSRpHYQHPIAsh8nWFVQOQCZ07YOC5EQWsXC0v%2FUh29iV2l%2FgFWujGft7zqtW&X-Amz-Signature=c115e9f1daa2f4db334f61dc7ee41c4dc0ebe7a6a3a4916d1fffd58a0ac07d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=da9f75e15488052e2cbc008c806817eceaab98e9c17773f1c7affef177e48532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XLPVYQX%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDIL7DhXfnA%2FzIAuo7B%2BDFkv7pVdqeLeR9NhymQqLZIPAiBiVf1EXSPFBvg4m7gElZyK%2BzOYD8Zf5bL4511ikQHH9CqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY%2FKIi3e6NpeP9JjoKtwDMsUSebYdX8Qcj6I5Kzqo2ywKF05yxARgKyOghonsLTTXgV3L24UqT1bH5eMGHy2Rej4XkmtFGDoRQp%2BZ4rYDC0adYF3pTuIXxaVD8hFcGCXm7LWQzWBdOs6UGhzCZj12yW6OC7q4rNPailtpwgW9PPmIBiXfqqWtiDDM4cbscBy%2BSbCwSBs15m7z3PDG1MghUbhoVCjZiH2DIJQ3UVhYa6UeLYRYvLro1rrb%2B19oAO%2FM8HlTy7Ky8FShx2RGazBM%2FnXPpsdP%2FAs%2FmUxgLTn0DHoEMc%2BKU0dz%2BL%2F97kN88HxPBpT3MpDs2ecUfxQJ8KQ7pzJfZde2njYZVNJ4hf7MZQXOQTzpnI8gefBTvNAc5Yh3sfIcHDqurROf0VJhJlTvd9YWNPu6o%2FqoztI7Lp6LcJrf3yZ5aFJhFBxcHsifaEOAJO4fJbhMOAtAt9bjH99sONDk3Qz33yb5Au0RxZ659O0JnV9LRRuGEpQLKxePfdEUhs%2F0JR9NFhfbFBpL0Wmt6p8OjzKFQgF43pXL6j7%2FJyDaFPzDadUUe%2BunDLIXUAMJRQ4yycKRrHZgn2vu3KCXY1Kq8ez6GO2Ojb9c%2FAb9cX1nWojheYJbL%2FjEtZ%2BwOtedUE579pbWwDtkky4whoC4xgY6pgEZDBj3YzqCGUg2QNeU%2Bvqj%2BkzpJEf6N4rIESUgQuxCkHdRvBiR76e%2FD7W%2FCSHPa%2F3h%2B8y2RS2Jag7ctc4t3KB1JtLRpKuUVjtpjc9b1Z4b7fjLixqYWJTB3T0SFyZnhTtU21Qv58TnM1tkCsc1OBby7rYzFli%2FMiIkcAVbXXe9C65S2t74%2FwZG0BC1Hfo0AFNe%2FVSnUPHF6P2U2iVVwa0UsjZLao4K&X-Amz-Signature=8ad6edf96dcfe93c700b9009065ed71877d4554a31b2f12eb3ea16e8607c8a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=4c64e147315565eaf48c87f78876be6992029cba01c926ff5e34ab49a6a600c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JHE6YEA%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCICxiTDPStGAdzcTd2FNf8i9jJF1R%2FiTJosuPf2UPKlruAiA6kKZRXuyBaC979pv9TFH7P6UeFYLzRrb2MPWpnGE%2BYiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMscvmOB7ACuK60c%2B9KtwD96EsH%2FgM4H4Sm%2FUdDVMl7bfLXGCh%2B2HauN2HhRv59XosVQJJ8pEhkcQiyw0sO8T3mZONxI0BZyVWensh69LT2UdAaHJ3ji3DGMTTOySFtUutCqM8ox7Xt%2FE9tC%2BDT4Gbt8KXZ%2BNOwK4eRWoYXSEKkf7XA0ziND%2BAoSxAZFD4qA8Ra49CmuWrObdFrlR%2BDoOJ9mBsO54gjYNf5Lglkse8jZ7ARd%2FYAbGS6mfrOh73WAnDH%2FFO8c5tlHhcDQisnBSEwhnVZwk3u%2Fxq8k3j8Z4Wa4lt049ZapLJmLCRWDMo8WCyBOwTrLnwweAo6gP3%2F9Xv8hYa%2BGDN5ulEWPeQS82kfG3aOsu3x4ZinLlSPDnT1R06FoV%2BBQzRjPEpdaSk7lzgw7JxM93OiYlCDkThfvo%2BhzQpa5QU5%2BXYFguUj3gUBq3RLXXwP4U3u7hRMbrl0fguCVGYrtDV7zcQJH%2FQrHprOWg0shggAXFFkzBKB8SGqokTaG67tugPjklIDkLxvWU%2FM2Me1Z%2B3R%2BxXGBljuP2s8Kdd%2B0Ai1Vm0878kSjj%2B8ZKQ6fBsI4lbQO9X0MMqkFXUb9xxD2wFvNjbgybEulSh%2BlpZJ1xDD8exd10A3isXoa6%2FQRI2IkR2kKUxYTww6f%2B3xgY6pgG3EUSokJXIA5h38Ou2Xnc2j33s6Rto0vsvlpf6hsYSPp1d1s4MdOVdaaITK%2Ff%2BLnEkvXDHL0%2BGDOynmh62M6196m5jkd0VQhIly8BlY1Qu3oQ%2F73uVNUfA2%2B9m8DXxHfKgiDRYiwgQ2g3FeEYV0yR8BVupTEsxtmnKBuxLgP3zDzoAaP9k2Rq%2F5dyF4QhIL3ofCpJpHJcXuGb1gYBD%2F9MVgs8ej9Sm&X-Amz-Signature=5e9c834caf4c1b719406f4f789dc0438df4c6aff3a76e3519b83b0978c6dbc01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=1ee254a1b4a2a86ef337988e87cebe4b1f6ed363f5f5c3524e41dae40e9185fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTEKNDYO%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCTAn9e7HHn9ASZXpqPZxtd1VCJrJl9K%2FyuncsjSruGagIhAIEnfXsNk56LD6nnIKIxRlakNIjhZ9xCSTLyak37svQkKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTp%2Bt97Y5XaRn5pqwq3AM5obwMya7b59jZlZdG6fSRnv%2FM0R029Y2dcoCGthqGJ1ECr6U%2BzKet4v76FdDA8msR8pl5aVGvspcrvFOEo1FBRmksPfM5FO5IKxxdZuGMUzttX%2FkkzqDzeBi%2B84ulo2u5zG0dQGhf070Iv7ZOaOfP6oBS8i8xfNOCZRdPHFVv1eZgQ%2BuQrHG17w46ymRmMisVgBc%2FU8wnEJBgmjx0oqVnx4bzax84JB72CfPPiRH%2FRuS%2FiHoPpRoDkzrk%2FOmBgIwpdli0k%2BEwsLuYTqBfpaOg2p5kNjuLEnlLrGInJ%2F4T%2B8ym1WX%2FzWCa9yDyItHK366u9w6DKv5LqW3WkCR4WAmYyypg2M89wP3mMbFM2%2FgqfXeJ8zlPKWx4cZ5j3DDYubOOQGzSpKZ3NOvqt%2F%2BIQiCJCwKoC21DEMkyGIToRJctl%2Fj3dwpUylY4dxNlZMzWIlAbkZTFvQ8bXnIhTHw97ctqi6cqELkA8AY8yNRHdI4q161NKMmAWB56d3%2FczHGEpSLxwXfuHcZcYkcVTAEDuVbJYrxkKTWQa2TZlPB%2BhM%2FErvdVKcJScrZxO40hbC2G%2BDBufT4avks6wv7Qr38vtYfWjR8nVn1Tfs61uwzjuhWkGqJF1TOHMOz2Jm6ToTDp%2F7fGBjqkAQX2jKEsZTv5Y8EFt40GD%2ByZTkA%2FQmr1s1NJGUWgC6fAoKIcrC0s99FpjYabzE4aaTQ0QC%2BBPiw3KC3jKzd3YggaG31IfTeMpHnDi5mbdjJy%2B5AOYYu63wKkdOnUVUAlZ%2FrAwd5WHA5jcdD05izW2dMINwcDT3UvpaT18vPlHrDNJQtv3219VMYuro4lJso0LBctoWZd%2BqYo8zGp%2FaLfCRwkeGy8&X-Amz-Signature=a1c9d527535a15dded53259ae67d3a9be853c121ca142edbf936c75429d74904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=b45f3b914f98d6a97dcccb138e088cb1eea31c53bc3a5329ae911f795f7e558c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZRZUVRL%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIGnspkO9aMzkT3ebx9asmc5JRnGczwfDxn4euHt%2BtbW3AiAheaB%2BwauoakZxdmEaFqf8t8lbCkuhG9faoAECzX4n9iqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp4Z%2FhOnk%2FGE09pHGKtwDT168kEMFqw81jPz5XK3NJUgFWArvAf17IDaJHcJr3clZrPDyghHVXOKFJ%2Fz%2FgUtNLCGr3LQfWb6r0g3xTcDE8rdVU49jb1vxhJL7ECnseSL7GS%2F%2FsG5x1zaBs0ATVdaypzFUCDdMa30UyW8Za1FUpfqRvqvU7hJhuyG5Wi3h2ygRoLyaCOI6yOMbwjFIZCd3tGRY5K5JK%2Flyvho%2FpzGEiSkmSuCU8tXvSbIXum%2BRiiCIMZ8WPJ6u8uVVjYGKUFYZBTgP%2FBxKTBI0sXOIgY45klV5%2Bzuu%2F%2BE9l46Ocw3XcupWV1ps%2BiOxUM9%2Flhrxg758ILNaajOIXbzdXPLP2BaBF1vyuPFjO9sawuX%2BwJrO8vjJ4pSMoRlZfjPGt6bhwV4Fe25hNfbiMZHZsG7YBZsujkEhUuGyQn67FaFj4ZKYkxmGyVJpYqeHMPrj3z3D%2Flwb5h3K8FNgsTf6tJiqdVgCJQWeA90vdogxBX2mddV1jlK6oE6T3K6X%2BYJsjE%2BTJdB63%2FPTe70fCDllELT89OdayBYPoIOKhAItRliWTt0RBD0Dzp66rwz%2BkFOOBz7sUaDkAVs7GmUOV88Sl9ac%2Fh%2Fe8ZTLIhiwQh2srbkd2W22YWb06lPV%2BWqcpuOVPF8ww%2F%2B3xgY6pgEyPnOH%2F1xyjwPj3VFf%2FpCnAxiP60s6HGQh5CyOZ0hqVmvzkRADwK0f8d6U23bv1qwI3sD3UC%2F9ytKQy7u9%2F6HaiL43zZ%2F2EvH9SIRyEP2YhOWa2Cz8q%2B%2Fmsr2NPYOUd4M3AndzA8HJ4kRTuVQ%2FmvCsyekYVFHLt6yrJc4yUcxxh7GOrStVAIuiO0v%2Bs2HBVQUrnE7xRvuYPKan%2FJSsUlSCZToEFJ3e&X-Amz-Signature=b8202ae50501804e43e75df659b35a6dea5e6308cfaddbd8e95461bb3ffe2d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=5d7b941657598b20ceadb33bfb7aed233483a959eccdffc8909158b3abad7707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBNSCRMP%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAtq0Pcpv8DM9B5SarsLTBgj2gBrzXzR85kiuIYTMd3JAiB5BLQVrUhuR62liXZ6u%2BqEQNLpfy4Xp9Wpxy9pNZbpJSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1zQLCX51tVlBX8N7KtwDIinpUjkXUBa%2BAhJp6ot4oXoG8p7rLLHCfg%2FaIdu7pyaluWPGmwGq%2B95MvmcXAT8Diw9bAQCKc%2FFBiVuDh%2FrtK1K4yswKI%2FL8n5LXVcvUnDlP9uKoex0zKSLTFAKjbaq%2FA%2BN5vVMpybZfWmhtzqR%2BKttZVPBZaXIGq9GScDclLaUvSFbts3zMO50lzlibsA33l1nwf9bL9zi1GPpSDAyUPEXXZylN6OmI3cPZ%2BRwTI%2B%2F%2FrzP%2BO%2Fce9WIXkLxv26WZJ2ROos%2FE5%2Bk7aRh%2F3YlhraNia7cQGl8O7T8ZzHFK477Bm9Nwu3MxqAmikgW1TKtvMmMsnCD3ywgkrZEPrzlfmW%2FEBrTKephWpdlpAjkp9QdUOF3te%2B8BoUzSRg5FHSaTS9Wl%2FbJcVBnvPy9ONvNQGP7sbgTx8K5OLH%2FttGU1marSZSAvuziL0hYr6%2FP9%2Fnn0c32jGqXfqBtedVb0xLPw6rDQ331%2BFJNkgsqzPtiOHwdphi8tkGvAkypZpxTkY9fMavBesjjGcil3fowfZdgzu8dQ9XAwoJH0q3MTQ3qCI4R875TOddL%2FsN4fnTZQAhqZaDLsDN8ao1G%2FAje9TWalJxiPm0hSwvtQtYIWbaEWCBzwCivb9UioGK815AEw1f%2B3xgY6pgEDOvzoERgov2RoDzlmNDoQ83Jq3NI66Y1ou4hoXI%2FhIYe7cTCbI4v6cwEmlwa%2BrEEjDypmmvuNNDuWgReDs%2Fu3BC1mFfMrISIvG1jC9MaoXRiqPQPRZvrLQeDRxJjgj74FC2YQM9T0TQLSc22yiJmW3RPppCGBuOx6SM5mq1KqVYnxTWbciL66ktKOfexvI89dE%2B47kQow07PB2j1ZflY5pqGbIb48&X-Amz-Signature=d58db61712ea4d7a1fceff7eb577e1d7ce512d7661a4babab6b491e885dcbfb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLFMEHUZ%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBUPllOZS0zN1Z8nsGxSIAOCwBngg6NJgrIVZlYbT6pxAiEA9ERpJGFvAAAv2Btj4cL9NdkLTKWHY98XGO%2F6wj7XsX8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEl7uZjqMw647aAsoSrcAzSPHpozKMIULFv6f3Oe3wu6I0ZSYSkcldoSB%2BGqYxql7CLX87QPvu2PvaCmibMaluTTge7gzu3ZUL9NZFWFBt3KmkDmlLyc9BeHpzNNG23SiAP3qWfSKgCywebtjp%2Fo030%2BN8wDe11GJ19dVg1OICH3gTaVC2hgW612mkG3DxVp6f3pjkwJrOeqYfEiAywUcSyGP9VgUsifV9OqLmjeoX%2FhK70KGuGiF6mXVhcc7RjRoyXF2dqjmI6%2BYOp6PlgXMmgBtblkx7SKh2LbgYtOqgkmT1Enzb8ZKcP9%2B0v1plp1eHP5RzA89A6Eym30EFT6tjgxlJRU9%2BALs15qlVRdG3QjJVFkOagW83rl7l1jwl673w7Ppe8aYchg0KezW0W91LfZVUJ5%2BbakumBpwl2Hgm1L3ikX7kC88eKduYshnNZuqvIY47VxN8Ct4L5%2FzQAvl8Bi9%2Fx6ei8MPk%2FF6Z5pAoESk1%2FO2a3JBuUV8E3h0FfQNGTU7UIqT0aJl7I%2FLrG4Rm1x65Gho2S9z3HoUYwRAeLpi3nuN8TskHoqTTT1zeIq52k7Q5AU1LaD5LN6RSJti3vaQr4WKlRIszOWvmhgJgZtnGesnKsCnE0CBdaE9JWOQHr%2BW1oGjwblA5gPMIKAuMYGOqUB5Uju7KMjNgl1dh28WZ2fK3zf%2BcdBFcWgxrLFJPC2VhWhyuRC0ixEU%2B1DAHjOI6o3K7kkU0yiklYTS8k1gxHRh%2FDYAPiT%2FnObr9H9%2Bd8Te9J2wFUIOdaRfnsMHv5LkGeynbyEm9eEBqVLkrCl19qsRb76BNMWNThLDN0XFAqD0kdo8kjLS0%2BEDKzKk2AKeQwLsFczp8S023fwqC0iMZeeDFdM8wfw&X-Amz-Signature=93192ae5fae1857600acaa40242c9c12a1cc1e6bcc97b3c550db73ab5834c751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB3F7OLQ%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDyHLpDiCm1C7h3CuIlP6670dW3vvL%2Fs7DvD4cy0sqrywIgKVHb3qj6VQb50ryfPDOO0W5FTEKWVGTliHOSreyzOx4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0JOPXl1DT2oxLojCrcA0WJ5GRm3lWOcB9GbjrRnW44Sgi8BvzEC9RT68RpleyFq34oS5ra%2BdU6b0KLVYXBDKt3dwioX1zb3ocEwM24rODtlHaeofF%2FoNwFzqxU6rRZ3RgtQHgLEjkhyDziM9rX4zYQTted3u7scsDl26dh7ARKR479Fm%2ByKM28MUFrogrimF7rL9YpttfatoxqeEHyKb2HtFuwyWeR8AMH%2B%2FWbYQUER7WtqeiPI9NSp9fpHLIN%2FRY5%2FjRn2aU4mTl7k0AnLsqOTiF7o7nsJycDLOgF4gf64PuXbZIl1yi%2F%2B2a1K3Wd%2FN0UmzC%2FVJqU0%2FyfmhRSuFthzFrY%2BX94jX9R8shoSwGs%2BmbLyt7zR8lxjTt9IHuzcM%2B5FCmSCv381zoyaFDyKga4rZw94uK85C%2BwY9lrbMK0Vgfs9IBk9J0%2Bm6QobyGNWCFmXPxBwcxjGXRPDi9FiLfGGbFlI7qQqxU9k0Ntlbac%2Fg4nl44erAhZKvL1Q6f%2B0mKlhkvl6NzzXm8syQ0gEUdOiEXDxHWwheuW%2BC4%2FHvvfzvW6QRBZMeQpha8g0qzGE7XEfqPAmUpq%2Bxh64vqFsZJSvX0Jzc5rlt7am9WdNv0aL1VJ5Qz7d%2FbgrWtYSqZebbadNNWp2VzT6BZbMNn%2Ft8YGOqUBiBU6ROe%2FkNhQlzPrBAig9SDJE3nTaZ9huh%2BB5F5AekJ1jy3QiPa7L%2FR6tedOrZ4vI5Iq%2BnDEZxf%2B37fSUBUzSs7%2Fw%2F08ccxUtoqF9bOJ4eD4ERk4qJzyIJ4ePB1CxEvqMgJR45%2FaPHSZfog8tXcwdCFoNDlOI2Xy2OCFMptXZSvEobrkJNnyo2rkuF1OXRg%2BiwpxaYXj%2FYAL2ZYGei5JfmOo9Uu7&X-Amz-Signature=7ab351b55eb8724263458083cedb9583ae06753293b974b2b56328521dac65f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=fe8dafaa18d534554c147433ff08b97957cfc3da1f29523556ab8d565ddb98a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=054e50293d8668f910744f98b24a8ec6d0fa0bdc431de3e96cf8a0ebafa45124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQRZXADS%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF1CvRgM0%2FIal9OqY52Gh%2BhwprmllIceCWPhbVXGQsE6AiAxZYD9v%2F%2FcTd3Q3VVx1zM5njQjFZAQn5abvED7Fdlz%2FiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQBREEsmyb7jUadLKtwDdn4AkjSUF%2BntgUkwiCAtdFlbdqpez7W1dk7PQDBOj8eJUUZpLaFzYbPHAPp4bCwsLX43HYXs%2BUe28UhwXSUdHRtfmETNt585bcH7f9yFjO2S%2BzjTVAtKqjsEqRUcFyqMSpdJLifNLrHNCVCkZ3EQSBGLtCBtHP50vW1cDVSOqfmm%2BE5uDbc3u10JROhC1syKqAKiAbwgve3bR4tNt8bWFwDggrZyTzX9ZH43w3SsTBT1VzxhDmcJy3jRwFFSui3l%2FxYq%2B4uaa66nK5mGBwOmWwtTATXDXGE7SkaQlODPR9BehJdvt3oVfb5Ez2tiQ4c8yykmaCpzPxn%2B5GJ%2FNpIzCFMQFevsrgHkvasAHluDFe%2Flu9AG7OpK2WmIjWYeBCYfwYNdtmiSkMkwbW9r5JQr7oCes8yu1Df9y%2Bopgrbe%2FBXV5itvA0EPcDn0rGRiymy0d9XFJDbGw3Hw373vou5IIomapVEOLeQnBrJlnTseZomE41o9oZzup8AsB5By9tt8YkTploq9dGUtuP9LXda1069k15qEfhJSHDg%2Bcl%2BIpA56W9xDK2PdSZJv9sCPSx7kIucQw2E%2F4hXzC7CMOtKcIyeY5kIP1giTaUkcgP69085BL9epHjI8bZPFJJ4wmYC4xgY6pgHSS01ZxMqt82mbfkFwsVLmyDcLbttQbVMAtmlmgECXhLLXnXux82UiA%2BdLtD%2Bwq8YjfOJoqIh1WiAZ%2BcBOdBb3ZhrZFK8WQnFaGcY7MvWc0ZvhWXKivq9rih%2FoAE6D%2BJz69jxiiiYp7Kn%2FYiXb3OOceDNfz8IL7pD1NSPHsUtWh5DJyv1p%2F14rDw7Z1kfPP1wBoU%2Fv%2BvHf98MgTipKbA0zGwKc3IAJ&X-Amz-Signature=e216a8f7a49c5a5012823dcbb7e17d0ed41c67299630d50ca0a52dd034c12c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQRZXADS%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF1CvRgM0%2FIal9OqY52Gh%2BhwprmllIceCWPhbVXGQsE6AiAxZYD9v%2F%2FcTd3Q3VVx1zM5njQjFZAQn5abvED7Fdlz%2FiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQBREEsmyb7jUadLKtwDdn4AkjSUF%2BntgUkwiCAtdFlbdqpez7W1dk7PQDBOj8eJUUZpLaFzYbPHAPp4bCwsLX43HYXs%2BUe28UhwXSUdHRtfmETNt585bcH7f9yFjO2S%2BzjTVAtKqjsEqRUcFyqMSpdJLifNLrHNCVCkZ3EQSBGLtCBtHP50vW1cDVSOqfmm%2BE5uDbc3u10JROhC1syKqAKiAbwgve3bR4tNt8bWFwDggrZyTzX9ZH43w3SsTBT1VzxhDmcJy3jRwFFSui3l%2FxYq%2B4uaa66nK5mGBwOmWwtTATXDXGE7SkaQlODPR9BehJdvt3oVfb5Ez2tiQ4c8yykmaCpzPxn%2B5GJ%2FNpIzCFMQFevsrgHkvasAHluDFe%2Flu9AG7OpK2WmIjWYeBCYfwYNdtmiSkMkwbW9r5JQr7oCes8yu1Df9y%2Bopgrbe%2FBXV5itvA0EPcDn0rGRiymy0d9XFJDbGw3Hw373vou5IIomapVEOLeQnBrJlnTseZomE41o9oZzup8AsB5By9tt8YkTploq9dGUtuP9LXda1069k15qEfhJSHDg%2Bcl%2BIpA56W9xDK2PdSZJv9sCPSx7kIucQw2E%2F4hXzC7CMOtKcIyeY5kIP1giTaUkcgP69085BL9epHjI8bZPFJJ4wmYC4xgY6pgHSS01ZxMqt82mbfkFwsVLmyDcLbttQbVMAtmlmgECXhLLXnXux82UiA%2BdLtD%2Bwq8YjfOJoqIh1WiAZ%2BcBOdBb3ZhrZFK8WQnFaGcY7MvWc0ZvhWXKivq9rih%2FoAE6D%2BJz69jxiiiYp7Kn%2FYiXb3OOceDNfz8IL7pD1NSPHsUtWh5DJyv1p%2F14rDw7Z1kfPP1wBoU%2Fv%2BvHf98MgTipKbA0zGwKc3IAJ&X-Amz-Signature=1112710bf03d83a24ca4ff0c0a8a750b52084b99e165fa1db9711dc3ba96877e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQRZXADS%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF1CvRgM0%2FIal9OqY52Gh%2BhwprmllIceCWPhbVXGQsE6AiAxZYD9v%2F%2FcTd3Q3VVx1zM5njQjFZAQn5abvED7Fdlz%2FiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQBREEsmyb7jUadLKtwDdn4AkjSUF%2BntgUkwiCAtdFlbdqpez7W1dk7PQDBOj8eJUUZpLaFzYbPHAPp4bCwsLX43HYXs%2BUe28UhwXSUdHRtfmETNt585bcH7f9yFjO2S%2BzjTVAtKqjsEqRUcFyqMSpdJLifNLrHNCVCkZ3EQSBGLtCBtHP50vW1cDVSOqfmm%2BE5uDbc3u10JROhC1syKqAKiAbwgve3bR4tNt8bWFwDggrZyTzX9ZH43w3SsTBT1VzxhDmcJy3jRwFFSui3l%2FxYq%2B4uaa66nK5mGBwOmWwtTATXDXGE7SkaQlODPR9BehJdvt3oVfb5Ez2tiQ4c8yykmaCpzPxn%2B5GJ%2FNpIzCFMQFevsrgHkvasAHluDFe%2Flu9AG7OpK2WmIjWYeBCYfwYNdtmiSkMkwbW9r5JQr7oCes8yu1Df9y%2Bopgrbe%2FBXV5itvA0EPcDn0rGRiymy0d9XFJDbGw3Hw373vou5IIomapVEOLeQnBrJlnTseZomE41o9oZzup8AsB5By9tt8YkTploq9dGUtuP9LXda1069k15qEfhJSHDg%2Bcl%2BIpA56W9xDK2PdSZJv9sCPSx7kIucQw2E%2F4hXzC7CMOtKcIyeY5kIP1giTaUkcgP69085BL9epHjI8bZPFJJ4wmYC4xgY6pgHSS01ZxMqt82mbfkFwsVLmyDcLbttQbVMAtmlmgECXhLLXnXux82UiA%2BdLtD%2Bwq8YjfOJoqIh1WiAZ%2BcBOdBb3ZhrZFK8WQnFaGcY7MvWc0ZvhWXKivq9rih%2FoAE6D%2BJz69jxiiiYp7Kn%2FYiXb3OOceDNfz8IL7pD1NSPHsUtWh5DJyv1p%2F14rDw7Z1kfPP1wBoU%2Fv%2BvHf98MgTipKbA0zGwKc3IAJ&X-Amz-Signature=c832c04075f5f5a982a3d3fce070dfa2f58daff33e64bfbd0bc3a1d45f9eb016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQRZXADS%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF1CvRgM0%2FIal9OqY52Gh%2BhwprmllIceCWPhbVXGQsE6AiAxZYD9v%2F%2FcTd3Q3VVx1zM5njQjFZAQn5abvED7Fdlz%2FiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQBREEsmyb7jUadLKtwDdn4AkjSUF%2BntgUkwiCAtdFlbdqpez7W1dk7PQDBOj8eJUUZpLaFzYbPHAPp4bCwsLX43HYXs%2BUe28UhwXSUdHRtfmETNt585bcH7f9yFjO2S%2BzjTVAtKqjsEqRUcFyqMSpdJLifNLrHNCVCkZ3EQSBGLtCBtHP50vW1cDVSOqfmm%2BE5uDbc3u10JROhC1syKqAKiAbwgve3bR4tNt8bWFwDggrZyTzX9ZH43w3SsTBT1VzxhDmcJy3jRwFFSui3l%2FxYq%2B4uaa66nK5mGBwOmWwtTATXDXGE7SkaQlODPR9BehJdvt3oVfb5Ez2tiQ4c8yykmaCpzPxn%2B5GJ%2FNpIzCFMQFevsrgHkvasAHluDFe%2Flu9AG7OpK2WmIjWYeBCYfwYNdtmiSkMkwbW9r5JQr7oCes8yu1Df9y%2Bopgrbe%2FBXV5itvA0EPcDn0rGRiymy0d9XFJDbGw3Hw373vou5IIomapVEOLeQnBrJlnTseZomE41o9oZzup8AsB5By9tt8YkTploq9dGUtuP9LXda1069k15qEfhJSHDg%2Bcl%2BIpA56W9xDK2PdSZJv9sCPSx7kIucQw2E%2F4hXzC7CMOtKcIyeY5kIP1giTaUkcgP69085BL9epHjI8bZPFJJ4wmYC4xgY6pgHSS01ZxMqt82mbfkFwsVLmyDcLbttQbVMAtmlmgECXhLLXnXux82UiA%2BdLtD%2Bwq8YjfOJoqIh1WiAZ%2BcBOdBb3ZhrZFK8WQnFaGcY7MvWc0ZvhWXKivq9rih%2FoAE6D%2BJz69jxiiiYp7Kn%2FYiXb3OOceDNfz8IL7pD1NSPHsUtWh5DJyv1p%2F14rDw7Z1kfPP1wBoU%2Fv%2BvHf98MgTipKbA0zGwKc3IAJ&X-Amz-Signature=52a3c22140aff3464e69cc36f4b5795f7f8861c96db1f7b0361c4b96a059cc29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H6W262W%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIESZo3BOSRLz0gog0r0FIvXIsns6EtR5h4VDn7xiGjmgAiB02%2BUqHj3u2F3DLfKliUXzd9c%2FO1rBIbzMPohA6rU9jiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Sq6AHI5rBavch82KtwDKhaKCUc%2FyrjasHz2QdG7%2F%2FiPaXVxoEyfOawVOU6R0gTqWYQzvOVTTUheXigYuvxwhG3KEML0%2FVi2c3xZ1R2DOOvlRR9ADBriRQ0vsA0UswA5hjKFhiu2R9tUc21Bd8bRmjKXbbDHh6Rp7IkIEi7MTXph%2FTeZ%2FPVsDiaP%2FZ612gVxStjkVYH5EGBbHP2AcQ8e3ybAvO%2F9j%2BaII7FmNEwqF%2B3sxDU%2Bg2jtZBwpm42echpRuu2D%2BVUp6YTgsru9SdtN%2ByEK9KP%2BO4UsusCkibWYcBaAC%2BXPLX7R5LF34sc0uSoVpdxmPN8f67LI%2FnUMDHt688ANxqTFcAAqkirfEn7a7sF3Aat0VcZCl%2Fj1%2BNBxBVDGth7vhWVIeEj7O9O2vdfumZRLkYFsnjBAotSSSqrr331yofljKvi8fVuWg1xqw6ouuKzDEBczUZZ9oTnHKJwDGloH8CwC3zwYFdjVXGHIyUe9RT9eIODpKJ4YbRB5Ph%2BYWM4c5NSPlBrRQDNdA%2BANFRH8%2FNHNjF9Nm%2B1FIBzn6BOkef6d5YyKE9P7hSJaLNvcazvsLbN6CAjfsP8gDpvCu8NwwHNU6c1jtuqdCmbKWxl9zEYfEW4B%2B5ajLoikVbLcIsyo9Z%2FdM9%2BhKUMwmIC4xgY6pgEdSb8r8pUGgynsL3Or592cnilR0aHO%2BEx5hT7%2FpN2mDJOk7uR33e%2F5rwFSV2vGSZEKyhRSzaopYHJPLb1iSikaGTEjVscQ3O1RDi3xVcloKtdclKWrXc3jn16nxFk4MW4TSHmPbAMJpiI7J%2B0VWGbabNNMCgejPGCJ7dlN6FbxGqH%2B62S%2FPofHPEJ%2B6Vlvp0GpTiWEa93fFnZsGp65wo2Fa3pnopxM&X-Amz-Signature=f9d85975d59198a8eebafefa6252b4f3cefc18377e6fb8ffaa24e8bc5bea84cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQRZXADS%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF1CvRgM0%2FIal9OqY52Gh%2BhwprmllIceCWPhbVXGQsE6AiAxZYD9v%2F%2FcTd3Q3VVx1zM5njQjFZAQn5abvED7Fdlz%2FiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQBREEsmyb7jUadLKtwDdn4AkjSUF%2BntgUkwiCAtdFlbdqpez7W1dk7PQDBOj8eJUUZpLaFzYbPHAPp4bCwsLX43HYXs%2BUe28UhwXSUdHRtfmETNt585bcH7f9yFjO2S%2BzjTVAtKqjsEqRUcFyqMSpdJLifNLrHNCVCkZ3EQSBGLtCBtHP50vW1cDVSOqfmm%2BE5uDbc3u10JROhC1syKqAKiAbwgve3bR4tNt8bWFwDggrZyTzX9ZH43w3SsTBT1VzxhDmcJy3jRwFFSui3l%2FxYq%2B4uaa66nK5mGBwOmWwtTATXDXGE7SkaQlODPR9BehJdvt3oVfb5Ez2tiQ4c8yykmaCpzPxn%2B5GJ%2FNpIzCFMQFevsrgHkvasAHluDFe%2Flu9AG7OpK2WmIjWYeBCYfwYNdtmiSkMkwbW9r5JQr7oCes8yu1Df9y%2Bopgrbe%2FBXV5itvA0EPcDn0rGRiymy0d9XFJDbGw3Hw373vou5IIomapVEOLeQnBrJlnTseZomE41o9oZzup8AsB5By9tt8YkTploq9dGUtuP9LXda1069k15qEfhJSHDg%2Bcl%2BIpA56W9xDK2PdSZJv9sCPSx7kIucQw2E%2F4hXzC7CMOtKcIyeY5kIP1giTaUkcgP69085BL9epHjI8bZPFJJ4wmYC4xgY6pgHSS01ZxMqt82mbfkFwsVLmyDcLbttQbVMAtmlmgECXhLLXnXux82UiA%2BdLtD%2Bwq8YjfOJoqIh1WiAZ%2BcBOdBb3ZhrZFK8WQnFaGcY7MvWc0ZvhWXKivq9rih%2FoAE6D%2BJz69jxiiiYp7Kn%2FYiXb3OOceDNfz8IL7pD1NSPHsUtWh5DJyv1p%2F14rDw7Z1kfPP1wBoU%2Fv%2BvHf98MgTipKbA0zGwKc3IAJ&X-Amz-Signature=1e5505e59ebfb70f300a0c2acdba61133989f13084a1e9f6b0faebf29b2bee63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQRZXADS%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF1CvRgM0%2FIal9OqY52Gh%2BhwprmllIceCWPhbVXGQsE6AiAxZYD9v%2F%2FcTd3Q3VVx1zM5njQjFZAQn5abvED7Fdlz%2FiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQBREEsmyb7jUadLKtwDdn4AkjSUF%2BntgUkwiCAtdFlbdqpez7W1dk7PQDBOj8eJUUZpLaFzYbPHAPp4bCwsLX43HYXs%2BUe28UhwXSUdHRtfmETNt585bcH7f9yFjO2S%2BzjTVAtKqjsEqRUcFyqMSpdJLifNLrHNCVCkZ3EQSBGLtCBtHP50vW1cDVSOqfmm%2BE5uDbc3u10JROhC1syKqAKiAbwgve3bR4tNt8bWFwDggrZyTzX9ZH43w3SsTBT1VzxhDmcJy3jRwFFSui3l%2FxYq%2B4uaa66nK5mGBwOmWwtTATXDXGE7SkaQlODPR9BehJdvt3oVfb5Ez2tiQ4c8yykmaCpzPxn%2B5GJ%2FNpIzCFMQFevsrgHkvasAHluDFe%2Flu9AG7OpK2WmIjWYeBCYfwYNdtmiSkMkwbW9r5JQr7oCes8yu1Df9y%2Bopgrbe%2FBXV5itvA0EPcDn0rGRiymy0d9XFJDbGw3Hw373vou5IIomapVEOLeQnBrJlnTseZomE41o9oZzup8AsB5By9tt8YkTploq9dGUtuP9LXda1069k15qEfhJSHDg%2Bcl%2BIpA56W9xDK2PdSZJv9sCPSx7kIucQw2E%2F4hXzC7CMOtKcIyeY5kIP1giTaUkcgP69085BL9epHjI8bZPFJJ4wmYC4xgY6pgHSS01ZxMqt82mbfkFwsVLmyDcLbttQbVMAtmlmgECXhLLXnXux82UiA%2BdLtD%2Bwq8YjfOJoqIh1WiAZ%2BcBOdBb3ZhrZFK8WQnFaGcY7MvWc0ZvhWXKivq9rih%2FoAE6D%2BJz69jxiiiYp7Kn%2FYiXb3OOceDNfz8IL7pD1NSPHsUtWh5DJyv1p%2F14rDw7Z1kfPP1wBoU%2Fv%2BvHf98MgTipKbA0zGwKc3IAJ&X-Amz-Signature=704d12b6cdd27c712ba519dbb24c32997e718ba70ff17531e74da3932af9592f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQRZXADS%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF1CvRgM0%2FIal9OqY52Gh%2BhwprmllIceCWPhbVXGQsE6AiAxZYD9v%2F%2FcTd3Q3VVx1zM5njQjFZAQn5abvED7Fdlz%2FiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQBREEsmyb7jUadLKtwDdn4AkjSUF%2BntgUkwiCAtdFlbdqpez7W1dk7PQDBOj8eJUUZpLaFzYbPHAPp4bCwsLX43HYXs%2BUe28UhwXSUdHRtfmETNt585bcH7f9yFjO2S%2BzjTVAtKqjsEqRUcFyqMSpdJLifNLrHNCVCkZ3EQSBGLtCBtHP50vW1cDVSOqfmm%2BE5uDbc3u10JROhC1syKqAKiAbwgve3bR4tNt8bWFwDggrZyTzX9ZH43w3SsTBT1VzxhDmcJy3jRwFFSui3l%2FxYq%2B4uaa66nK5mGBwOmWwtTATXDXGE7SkaQlODPR9BehJdvt3oVfb5Ez2tiQ4c8yykmaCpzPxn%2B5GJ%2FNpIzCFMQFevsrgHkvasAHluDFe%2Flu9AG7OpK2WmIjWYeBCYfwYNdtmiSkMkwbW9r5JQr7oCes8yu1Df9y%2Bopgrbe%2FBXV5itvA0EPcDn0rGRiymy0d9XFJDbGw3Hw373vou5IIomapVEOLeQnBrJlnTseZomE41o9oZzup8AsB5By9tt8YkTploq9dGUtuP9LXda1069k15qEfhJSHDg%2Bcl%2BIpA56W9xDK2PdSZJv9sCPSx7kIucQw2E%2F4hXzC7CMOtKcIyeY5kIP1giTaUkcgP69085BL9epHjI8bZPFJJ4wmYC4xgY6pgHSS01ZxMqt82mbfkFwsVLmyDcLbttQbVMAtmlmgECXhLLXnXux82UiA%2BdLtD%2Bwq8YjfOJoqIh1WiAZ%2BcBOdBb3ZhrZFK8WQnFaGcY7MvWc0ZvhWXKivq9rih%2FoAE6D%2BJz69jxiiiYp7Kn%2FYiXb3OOceDNfz8IL7pD1NSPHsUtWh5DJyv1p%2F14rDw7Z1kfPP1wBoU%2Fv%2BvHf98MgTipKbA0zGwKc3IAJ&X-Amz-Signature=c832c04075f5f5a982a3d3fce070dfa2f58daff33e64bfbd0bc3a1d45f9eb016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQRZXADS%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF1CvRgM0%2FIal9OqY52Gh%2BhwprmllIceCWPhbVXGQsE6AiAxZYD9v%2F%2FcTd3Q3VVx1zM5njQjFZAQn5abvED7Fdlz%2FiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQBREEsmyb7jUadLKtwDdn4AkjSUF%2BntgUkwiCAtdFlbdqpez7W1dk7PQDBOj8eJUUZpLaFzYbPHAPp4bCwsLX43HYXs%2BUe28UhwXSUdHRtfmETNt585bcH7f9yFjO2S%2BzjTVAtKqjsEqRUcFyqMSpdJLifNLrHNCVCkZ3EQSBGLtCBtHP50vW1cDVSOqfmm%2BE5uDbc3u10JROhC1syKqAKiAbwgve3bR4tNt8bWFwDggrZyTzX9ZH43w3SsTBT1VzxhDmcJy3jRwFFSui3l%2FxYq%2B4uaa66nK5mGBwOmWwtTATXDXGE7SkaQlODPR9BehJdvt3oVfb5Ez2tiQ4c8yykmaCpzPxn%2B5GJ%2FNpIzCFMQFevsrgHkvasAHluDFe%2Flu9AG7OpK2WmIjWYeBCYfwYNdtmiSkMkwbW9r5JQr7oCes8yu1Df9y%2Bopgrbe%2FBXV5itvA0EPcDn0rGRiymy0d9XFJDbGw3Hw373vou5IIomapVEOLeQnBrJlnTseZomE41o9oZzup8AsB5By9tt8YkTploq9dGUtuP9LXda1069k15qEfhJSHDg%2Bcl%2BIpA56W9xDK2PdSZJv9sCPSx7kIucQw2E%2F4hXzC7CMOtKcIyeY5kIP1giTaUkcgP69085BL9epHjI8bZPFJJ4wmYC4xgY6pgHSS01ZxMqt82mbfkFwsVLmyDcLbttQbVMAtmlmgECXhLLXnXux82UiA%2BdLtD%2Bwq8YjfOJoqIh1WiAZ%2BcBOdBb3ZhrZFK8WQnFaGcY7MvWc0ZvhWXKivq9rih%2FoAE6D%2BJz69jxiiiYp7Kn%2FYiXb3OOceDNfz8IL7pD1NSPHsUtWh5DJyv1p%2F14rDw7Z1kfPP1wBoU%2Fv%2BvHf98MgTipKbA0zGwKc3IAJ&X-Amz-Signature=c8eb74170f41a1199196bd89b235bec0f56ed762ee79760b126a4df6f6c32359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQRZXADS%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF1CvRgM0%2FIal9OqY52Gh%2BhwprmllIceCWPhbVXGQsE6AiAxZYD9v%2F%2FcTd3Q3VVx1zM5njQjFZAQn5abvED7Fdlz%2FiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQBREEsmyb7jUadLKtwDdn4AkjSUF%2BntgUkwiCAtdFlbdqpez7W1dk7PQDBOj8eJUUZpLaFzYbPHAPp4bCwsLX43HYXs%2BUe28UhwXSUdHRtfmETNt585bcH7f9yFjO2S%2BzjTVAtKqjsEqRUcFyqMSpdJLifNLrHNCVCkZ3EQSBGLtCBtHP50vW1cDVSOqfmm%2BE5uDbc3u10JROhC1syKqAKiAbwgve3bR4tNt8bWFwDggrZyTzX9ZH43w3SsTBT1VzxhDmcJy3jRwFFSui3l%2FxYq%2B4uaa66nK5mGBwOmWwtTATXDXGE7SkaQlODPR9BehJdvt3oVfb5Ez2tiQ4c8yykmaCpzPxn%2B5GJ%2FNpIzCFMQFevsrgHkvasAHluDFe%2Flu9AG7OpK2WmIjWYeBCYfwYNdtmiSkMkwbW9r5JQr7oCes8yu1Df9y%2Bopgrbe%2FBXV5itvA0EPcDn0rGRiymy0d9XFJDbGw3Hw373vou5IIomapVEOLeQnBrJlnTseZomE41o9oZzup8AsB5By9tt8YkTploq9dGUtuP9LXda1069k15qEfhJSHDg%2Bcl%2BIpA56W9xDK2PdSZJv9sCPSx7kIucQw2E%2F4hXzC7CMOtKcIyeY5kIP1giTaUkcgP69085BL9epHjI8bZPFJJ4wmYC4xgY6pgHSS01ZxMqt82mbfkFwsVLmyDcLbttQbVMAtmlmgECXhLLXnXux82UiA%2BdLtD%2Bwq8YjfOJoqIh1WiAZ%2BcBOdBb3ZhrZFK8WQnFaGcY7MvWc0ZvhWXKivq9rih%2FoAE6D%2BJz69jxiiiYp7Kn%2FYiXb3OOceDNfz8IL7pD1NSPHsUtWh5DJyv1p%2F14rDw7Z1kfPP1wBoU%2Fv%2BvHf98MgTipKbA0zGwKc3IAJ&X-Amz-Signature=8b68905ac4b12ff4b6535b87b40d7ee2a8eebb7fb6c3fbba21e0eaa3f2e892c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQRZXADS%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF1CvRgM0%2FIal9OqY52Gh%2BhwprmllIceCWPhbVXGQsE6AiAxZYD9v%2F%2FcTd3Q3VVx1zM5njQjFZAQn5abvED7Fdlz%2FiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQBREEsmyb7jUadLKtwDdn4AkjSUF%2BntgUkwiCAtdFlbdqpez7W1dk7PQDBOj8eJUUZpLaFzYbPHAPp4bCwsLX43HYXs%2BUe28UhwXSUdHRtfmETNt585bcH7f9yFjO2S%2BzjTVAtKqjsEqRUcFyqMSpdJLifNLrHNCVCkZ3EQSBGLtCBtHP50vW1cDVSOqfmm%2BE5uDbc3u10JROhC1syKqAKiAbwgve3bR4tNt8bWFwDggrZyTzX9ZH43w3SsTBT1VzxhDmcJy3jRwFFSui3l%2FxYq%2B4uaa66nK5mGBwOmWwtTATXDXGE7SkaQlODPR9BehJdvt3oVfb5Ez2tiQ4c8yykmaCpzPxn%2B5GJ%2FNpIzCFMQFevsrgHkvasAHluDFe%2Flu9AG7OpK2WmIjWYeBCYfwYNdtmiSkMkwbW9r5JQr7oCes8yu1Df9y%2Bopgrbe%2FBXV5itvA0EPcDn0rGRiymy0d9XFJDbGw3Hw373vou5IIomapVEOLeQnBrJlnTseZomE41o9oZzup8AsB5By9tt8YkTploq9dGUtuP9LXda1069k15qEfhJSHDg%2Bcl%2BIpA56W9xDK2PdSZJv9sCPSx7kIucQw2E%2F4hXzC7CMOtKcIyeY5kIP1giTaUkcgP69085BL9epHjI8bZPFJJ4wmYC4xgY6pgHSS01ZxMqt82mbfkFwsVLmyDcLbttQbVMAtmlmgECXhLLXnXux82UiA%2BdLtD%2Bwq8YjfOJoqIh1WiAZ%2BcBOdBb3ZhrZFK8WQnFaGcY7MvWc0ZvhWXKivq9rih%2FoAE6D%2BJz69jxiiiYp7Kn%2FYiXb3OOceDNfz8IL7pD1NSPHsUtWh5DJyv1p%2F14rDw7Z1kfPP1wBoU%2Fv%2BvHf98MgTipKbA0zGwKc3IAJ&X-Amz-Signature=5eed1aae3e1f466bc0e69e20dd8e1827c2fe268c5da69a09e63cfae57e3559ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


