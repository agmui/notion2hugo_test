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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHFLXA4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDkdHMtjtDjf7ahiUA4wouAjKZstIoPHNP9JK30B%2Fl11wIhAK%2FtmQEof6jDbnvDhHB3iu05mgPJrvxF%2BjJVuL70tyNAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfZHLPQd2rZJEDH%2F4q3APzW%2BwDlK6lwIqrTB3NGaLr1Q2%2BEJOzL1ZR%2B1Z3EHelEBBC4BJjFvFbfO5DmaM1R2mbSd1k3FNXkntaM9NiOIcu%2BZDxzQ2lc4vlaGY0J%2Bc8ng9mljOS9vwrnbNrKZD0AIMvOf266wT2rfrW95wuZlEhxKdWkIdjDsUX5KdgmBGYrgJgm%2FzvARaVgKD7756s4n6eHXkrMjXQ8rOYCQFv0Z5YZzHn8y%2B78oN6OHJYFxXjA8LcQDp%2BqIPOk4AzYXpIuwzFtUONJBjZuJMdSDRZybYJvWN4T13HCrrfj5DpS5I9JQgwcPPqduF8MXlde0tcNhs7GxBzSLTUQTISsqGx78QThdkvFmszMoT58lectWi%2FDrTO7B4yYFLyDr0SV%2BoiufyxVZiKTSK9upK28%2FTI2%2BZ6uJLAJojefllv%2F6dJAXAA%2B6wAFmPy%2BuVhPlSbDIlwf4xXrArCX6NP5ONVz1tdsgQnGKY6lYxKYFNY1wTQn4XtvxxN%2BS59HV9U0BY%2FxBlswx7P5M8IR2zsdd%2BzhFBruWuUSuI%2F3U%2BhRu8I6i3PSm15Ml4Z6HSpc0iZ1OQaQloHH4t%2Fvh8gr5KbHQDtZf2N5rg%2BDeTJz4MQJbPhk2emBRKvXQ9GyUls7iNVfpAWcDD%2F%2BdLEBjqkAa%2B0%2BAiFQwIczPgd%2Bu3jqCkFmrFlpc8%2FP02kLHnewDW4Zdfv46ngfgkVu4HWTF8TqBoY7wqibmEZY%2BCo0c3bCZ%2Bz36lS7lCvWsAJJg3Ar3jatyQ2l9%2FNeGc6ORLwvZ5IXydn4CWf4plHE%2FBj8uJCP3nmluOcD8hO9tsMYokuOiNOdYeC3cmeI%2F0oTmpoNdD%2Bz7I4OEzOhWjp0JfwcnP75ZIgSFBG&X-Amz-Signature=926e72ebe54014f90879eb17fb068bb2082224a85d73f9a86c59845909c6fda1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHFLXA4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDkdHMtjtDjf7ahiUA4wouAjKZstIoPHNP9JK30B%2Fl11wIhAK%2FtmQEof6jDbnvDhHB3iu05mgPJrvxF%2BjJVuL70tyNAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfZHLPQd2rZJEDH%2F4q3APzW%2BwDlK6lwIqrTB3NGaLr1Q2%2BEJOzL1ZR%2B1Z3EHelEBBC4BJjFvFbfO5DmaM1R2mbSd1k3FNXkntaM9NiOIcu%2BZDxzQ2lc4vlaGY0J%2Bc8ng9mljOS9vwrnbNrKZD0AIMvOf266wT2rfrW95wuZlEhxKdWkIdjDsUX5KdgmBGYrgJgm%2FzvARaVgKD7756s4n6eHXkrMjXQ8rOYCQFv0Z5YZzHn8y%2B78oN6OHJYFxXjA8LcQDp%2BqIPOk4AzYXpIuwzFtUONJBjZuJMdSDRZybYJvWN4T13HCrrfj5DpS5I9JQgwcPPqduF8MXlde0tcNhs7GxBzSLTUQTISsqGx78QThdkvFmszMoT58lectWi%2FDrTO7B4yYFLyDr0SV%2BoiufyxVZiKTSK9upK28%2FTI2%2BZ6uJLAJojefllv%2F6dJAXAA%2B6wAFmPy%2BuVhPlSbDIlwf4xXrArCX6NP5ONVz1tdsgQnGKY6lYxKYFNY1wTQn4XtvxxN%2BS59HV9U0BY%2FxBlswx7P5M8IR2zsdd%2BzhFBruWuUSuI%2F3U%2BhRu8I6i3PSm15Ml4Z6HSpc0iZ1OQaQloHH4t%2Fvh8gr5KbHQDtZf2N5rg%2BDeTJz4MQJbPhk2emBRKvXQ9GyUls7iNVfpAWcDD%2F%2BdLEBjqkAa%2B0%2BAiFQwIczPgd%2Bu3jqCkFmrFlpc8%2FP02kLHnewDW4Zdfv46ngfgkVu4HWTF8TqBoY7wqibmEZY%2BCo0c3bCZ%2Bz36lS7lCvWsAJJg3Ar3jatyQ2l9%2FNeGc6ORLwvZ5IXydn4CWf4plHE%2FBj8uJCP3nmluOcD8hO9tsMYokuOiNOdYeC3cmeI%2F0oTmpoNdD%2Bz7I4OEzOhWjp0JfwcnP75ZIgSFBG&X-Amz-Signature=0d666bca6a32699d525d982ad6e013364fef8677495a866a8ba6993eed1e79ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHFLXA4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDkdHMtjtDjf7ahiUA4wouAjKZstIoPHNP9JK30B%2Fl11wIhAK%2FtmQEof6jDbnvDhHB3iu05mgPJrvxF%2BjJVuL70tyNAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfZHLPQd2rZJEDH%2F4q3APzW%2BwDlK6lwIqrTB3NGaLr1Q2%2BEJOzL1ZR%2B1Z3EHelEBBC4BJjFvFbfO5DmaM1R2mbSd1k3FNXkntaM9NiOIcu%2BZDxzQ2lc4vlaGY0J%2Bc8ng9mljOS9vwrnbNrKZD0AIMvOf266wT2rfrW95wuZlEhxKdWkIdjDsUX5KdgmBGYrgJgm%2FzvARaVgKD7756s4n6eHXkrMjXQ8rOYCQFv0Z5YZzHn8y%2B78oN6OHJYFxXjA8LcQDp%2BqIPOk4AzYXpIuwzFtUONJBjZuJMdSDRZybYJvWN4T13HCrrfj5DpS5I9JQgwcPPqduF8MXlde0tcNhs7GxBzSLTUQTISsqGx78QThdkvFmszMoT58lectWi%2FDrTO7B4yYFLyDr0SV%2BoiufyxVZiKTSK9upK28%2FTI2%2BZ6uJLAJojefllv%2F6dJAXAA%2B6wAFmPy%2BuVhPlSbDIlwf4xXrArCX6NP5ONVz1tdsgQnGKY6lYxKYFNY1wTQn4XtvxxN%2BS59HV9U0BY%2FxBlswx7P5M8IR2zsdd%2BzhFBruWuUSuI%2F3U%2BhRu8I6i3PSm15Ml4Z6HSpc0iZ1OQaQloHH4t%2Fvh8gr5KbHQDtZf2N5rg%2BDeTJz4MQJbPhk2emBRKvXQ9GyUls7iNVfpAWcDD%2F%2BdLEBjqkAa%2B0%2BAiFQwIczPgd%2Bu3jqCkFmrFlpc8%2FP02kLHnewDW4Zdfv46ngfgkVu4HWTF8TqBoY7wqibmEZY%2BCo0c3bCZ%2Bz36lS7lCvWsAJJg3Ar3jatyQ2l9%2FNeGc6ORLwvZ5IXydn4CWf4plHE%2FBj8uJCP3nmluOcD8hO9tsMYokuOiNOdYeC3cmeI%2F0oTmpoNdD%2Bz7I4OEzOhWjp0JfwcnP75ZIgSFBG&X-Amz-Signature=4be929ed8792cb702190ac2bad2efd093d576564d624c75f5a5a52effa3f9832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHFLXA4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDkdHMtjtDjf7ahiUA4wouAjKZstIoPHNP9JK30B%2Fl11wIhAK%2FtmQEof6jDbnvDhHB3iu05mgPJrvxF%2BjJVuL70tyNAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfZHLPQd2rZJEDH%2F4q3APzW%2BwDlK6lwIqrTB3NGaLr1Q2%2BEJOzL1ZR%2B1Z3EHelEBBC4BJjFvFbfO5DmaM1R2mbSd1k3FNXkntaM9NiOIcu%2BZDxzQ2lc4vlaGY0J%2Bc8ng9mljOS9vwrnbNrKZD0AIMvOf266wT2rfrW95wuZlEhxKdWkIdjDsUX5KdgmBGYrgJgm%2FzvARaVgKD7756s4n6eHXkrMjXQ8rOYCQFv0Z5YZzHn8y%2B78oN6OHJYFxXjA8LcQDp%2BqIPOk4AzYXpIuwzFtUONJBjZuJMdSDRZybYJvWN4T13HCrrfj5DpS5I9JQgwcPPqduF8MXlde0tcNhs7GxBzSLTUQTISsqGx78QThdkvFmszMoT58lectWi%2FDrTO7B4yYFLyDr0SV%2BoiufyxVZiKTSK9upK28%2FTI2%2BZ6uJLAJojefllv%2F6dJAXAA%2B6wAFmPy%2BuVhPlSbDIlwf4xXrArCX6NP5ONVz1tdsgQnGKY6lYxKYFNY1wTQn4XtvxxN%2BS59HV9U0BY%2FxBlswx7P5M8IR2zsdd%2BzhFBruWuUSuI%2F3U%2BhRu8I6i3PSm15Ml4Z6HSpc0iZ1OQaQloHH4t%2Fvh8gr5KbHQDtZf2N5rg%2BDeTJz4MQJbPhk2emBRKvXQ9GyUls7iNVfpAWcDD%2F%2BdLEBjqkAa%2B0%2BAiFQwIczPgd%2Bu3jqCkFmrFlpc8%2FP02kLHnewDW4Zdfv46ngfgkVu4HWTF8TqBoY7wqibmEZY%2BCo0c3bCZ%2Bz36lS7lCvWsAJJg3Ar3jatyQ2l9%2FNeGc6ORLwvZ5IXydn4CWf4plHE%2FBj8uJCP3nmluOcD8hO9tsMYokuOiNOdYeC3cmeI%2F0oTmpoNdD%2Bz7I4OEzOhWjp0JfwcnP75ZIgSFBG&X-Amz-Signature=da551484f2f10bfb65f38caf235798d31f4d7da6f6098125c537411b2deb8b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHFLXA4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDkdHMtjtDjf7ahiUA4wouAjKZstIoPHNP9JK30B%2Fl11wIhAK%2FtmQEof6jDbnvDhHB3iu05mgPJrvxF%2BjJVuL70tyNAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfZHLPQd2rZJEDH%2F4q3APzW%2BwDlK6lwIqrTB3NGaLr1Q2%2BEJOzL1ZR%2B1Z3EHelEBBC4BJjFvFbfO5DmaM1R2mbSd1k3FNXkntaM9NiOIcu%2BZDxzQ2lc4vlaGY0J%2Bc8ng9mljOS9vwrnbNrKZD0AIMvOf266wT2rfrW95wuZlEhxKdWkIdjDsUX5KdgmBGYrgJgm%2FzvARaVgKD7756s4n6eHXkrMjXQ8rOYCQFv0Z5YZzHn8y%2B78oN6OHJYFxXjA8LcQDp%2BqIPOk4AzYXpIuwzFtUONJBjZuJMdSDRZybYJvWN4T13HCrrfj5DpS5I9JQgwcPPqduF8MXlde0tcNhs7GxBzSLTUQTISsqGx78QThdkvFmszMoT58lectWi%2FDrTO7B4yYFLyDr0SV%2BoiufyxVZiKTSK9upK28%2FTI2%2BZ6uJLAJojefllv%2F6dJAXAA%2B6wAFmPy%2BuVhPlSbDIlwf4xXrArCX6NP5ONVz1tdsgQnGKY6lYxKYFNY1wTQn4XtvxxN%2BS59HV9U0BY%2FxBlswx7P5M8IR2zsdd%2BzhFBruWuUSuI%2F3U%2BhRu8I6i3PSm15Ml4Z6HSpc0iZ1OQaQloHH4t%2Fvh8gr5KbHQDtZf2N5rg%2BDeTJz4MQJbPhk2emBRKvXQ9GyUls7iNVfpAWcDD%2F%2BdLEBjqkAa%2B0%2BAiFQwIczPgd%2Bu3jqCkFmrFlpc8%2FP02kLHnewDW4Zdfv46ngfgkVu4HWTF8TqBoY7wqibmEZY%2BCo0c3bCZ%2Bz36lS7lCvWsAJJg3Ar3jatyQ2l9%2FNeGc6ORLwvZ5IXydn4CWf4plHE%2FBj8uJCP3nmluOcD8hO9tsMYokuOiNOdYeC3cmeI%2F0oTmpoNdD%2Bz7I4OEzOhWjp0JfwcnP75ZIgSFBG&X-Amz-Signature=5530a3739c7c2d862f13cb1cca4dbe0cffabbc72f3a6f39c985c5e8ac3aa7e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHFLXA4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDkdHMtjtDjf7ahiUA4wouAjKZstIoPHNP9JK30B%2Fl11wIhAK%2FtmQEof6jDbnvDhHB3iu05mgPJrvxF%2BjJVuL70tyNAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfZHLPQd2rZJEDH%2F4q3APzW%2BwDlK6lwIqrTB3NGaLr1Q2%2BEJOzL1ZR%2B1Z3EHelEBBC4BJjFvFbfO5DmaM1R2mbSd1k3FNXkntaM9NiOIcu%2BZDxzQ2lc4vlaGY0J%2Bc8ng9mljOS9vwrnbNrKZD0AIMvOf266wT2rfrW95wuZlEhxKdWkIdjDsUX5KdgmBGYrgJgm%2FzvARaVgKD7756s4n6eHXkrMjXQ8rOYCQFv0Z5YZzHn8y%2B78oN6OHJYFxXjA8LcQDp%2BqIPOk4AzYXpIuwzFtUONJBjZuJMdSDRZybYJvWN4T13HCrrfj5DpS5I9JQgwcPPqduF8MXlde0tcNhs7GxBzSLTUQTISsqGx78QThdkvFmszMoT58lectWi%2FDrTO7B4yYFLyDr0SV%2BoiufyxVZiKTSK9upK28%2FTI2%2BZ6uJLAJojefllv%2F6dJAXAA%2B6wAFmPy%2BuVhPlSbDIlwf4xXrArCX6NP5ONVz1tdsgQnGKY6lYxKYFNY1wTQn4XtvxxN%2BS59HV9U0BY%2FxBlswx7P5M8IR2zsdd%2BzhFBruWuUSuI%2F3U%2BhRu8I6i3PSm15Ml4Z6HSpc0iZ1OQaQloHH4t%2Fvh8gr5KbHQDtZf2N5rg%2BDeTJz4MQJbPhk2emBRKvXQ9GyUls7iNVfpAWcDD%2F%2BdLEBjqkAa%2B0%2BAiFQwIczPgd%2Bu3jqCkFmrFlpc8%2FP02kLHnewDW4Zdfv46ngfgkVu4HWTF8TqBoY7wqibmEZY%2BCo0c3bCZ%2Bz36lS7lCvWsAJJg3Ar3jatyQ2l9%2FNeGc6ORLwvZ5IXydn4CWf4plHE%2FBj8uJCP3nmluOcD8hO9tsMYokuOiNOdYeC3cmeI%2F0oTmpoNdD%2Bz7I4OEzOhWjp0JfwcnP75ZIgSFBG&X-Amz-Signature=8c78090b999c6559d8d7a28115b5149a65881827b29bacdf1b19e83f1c5b0e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHFLXA4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDkdHMtjtDjf7ahiUA4wouAjKZstIoPHNP9JK30B%2Fl11wIhAK%2FtmQEof6jDbnvDhHB3iu05mgPJrvxF%2BjJVuL70tyNAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfZHLPQd2rZJEDH%2F4q3APzW%2BwDlK6lwIqrTB3NGaLr1Q2%2BEJOzL1ZR%2B1Z3EHelEBBC4BJjFvFbfO5DmaM1R2mbSd1k3FNXkntaM9NiOIcu%2BZDxzQ2lc4vlaGY0J%2Bc8ng9mljOS9vwrnbNrKZD0AIMvOf266wT2rfrW95wuZlEhxKdWkIdjDsUX5KdgmBGYrgJgm%2FzvARaVgKD7756s4n6eHXkrMjXQ8rOYCQFv0Z5YZzHn8y%2B78oN6OHJYFxXjA8LcQDp%2BqIPOk4AzYXpIuwzFtUONJBjZuJMdSDRZybYJvWN4T13HCrrfj5DpS5I9JQgwcPPqduF8MXlde0tcNhs7GxBzSLTUQTISsqGx78QThdkvFmszMoT58lectWi%2FDrTO7B4yYFLyDr0SV%2BoiufyxVZiKTSK9upK28%2FTI2%2BZ6uJLAJojefllv%2F6dJAXAA%2B6wAFmPy%2BuVhPlSbDIlwf4xXrArCX6NP5ONVz1tdsgQnGKY6lYxKYFNY1wTQn4XtvxxN%2BS59HV9U0BY%2FxBlswx7P5M8IR2zsdd%2BzhFBruWuUSuI%2F3U%2BhRu8I6i3PSm15Ml4Z6HSpc0iZ1OQaQloHH4t%2Fvh8gr5KbHQDtZf2N5rg%2BDeTJz4MQJbPhk2emBRKvXQ9GyUls7iNVfpAWcDD%2F%2BdLEBjqkAa%2B0%2BAiFQwIczPgd%2Bu3jqCkFmrFlpc8%2FP02kLHnewDW4Zdfv46ngfgkVu4HWTF8TqBoY7wqibmEZY%2BCo0c3bCZ%2Bz36lS7lCvWsAJJg3Ar3jatyQ2l9%2FNeGc6ORLwvZ5IXydn4CWf4plHE%2FBj8uJCP3nmluOcD8hO9tsMYokuOiNOdYeC3cmeI%2F0oTmpoNdD%2Bz7I4OEzOhWjp0JfwcnP75ZIgSFBG&X-Amz-Signature=c41475017e40ef7c89336716fbdf7d68139c38713254803685a4c0818b920e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHFLXA4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDkdHMtjtDjf7ahiUA4wouAjKZstIoPHNP9JK30B%2Fl11wIhAK%2FtmQEof6jDbnvDhHB3iu05mgPJrvxF%2BjJVuL70tyNAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfZHLPQd2rZJEDH%2F4q3APzW%2BwDlK6lwIqrTB3NGaLr1Q2%2BEJOzL1ZR%2B1Z3EHelEBBC4BJjFvFbfO5DmaM1R2mbSd1k3FNXkntaM9NiOIcu%2BZDxzQ2lc4vlaGY0J%2Bc8ng9mljOS9vwrnbNrKZD0AIMvOf266wT2rfrW95wuZlEhxKdWkIdjDsUX5KdgmBGYrgJgm%2FzvARaVgKD7756s4n6eHXkrMjXQ8rOYCQFv0Z5YZzHn8y%2B78oN6OHJYFxXjA8LcQDp%2BqIPOk4AzYXpIuwzFtUONJBjZuJMdSDRZybYJvWN4T13HCrrfj5DpS5I9JQgwcPPqduF8MXlde0tcNhs7GxBzSLTUQTISsqGx78QThdkvFmszMoT58lectWi%2FDrTO7B4yYFLyDr0SV%2BoiufyxVZiKTSK9upK28%2FTI2%2BZ6uJLAJojefllv%2F6dJAXAA%2B6wAFmPy%2BuVhPlSbDIlwf4xXrArCX6NP5ONVz1tdsgQnGKY6lYxKYFNY1wTQn4XtvxxN%2BS59HV9U0BY%2FxBlswx7P5M8IR2zsdd%2BzhFBruWuUSuI%2F3U%2BhRu8I6i3PSm15Ml4Z6HSpc0iZ1OQaQloHH4t%2Fvh8gr5KbHQDtZf2N5rg%2BDeTJz4MQJbPhk2emBRKvXQ9GyUls7iNVfpAWcDD%2F%2BdLEBjqkAa%2B0%2BAiFQwIczPgd%2Bu3jqCkFmrFlpc8%2FP02kLHnewDW4Zdfv46ngfgkVu4HWTF8TqBoY7wqibmEZY%2BCo0c3bCZ%2Bz36lS7lCvWsAJJg3Ar3jatyQ2l9%2FNeGc6ORLwvZ5IXydn4CWf4plHE%2FBj8uJCP3nmluOcD8hO9tsMYokuOiNOdYeC3cmeI%2F0oTmpoNdD%2Bz7I4OEzOhWjp0JfwcnP75ZIgSFBG&X-Amz-Signature=a1a28a91461267b792a8f50dbad26a9bbf08898adf65f384c4077f6c64b9d2d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHFLXA4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDkdHMtjtDjf7ahiUA4wouAjKZstIoPHNP9JK30B%2Fl11wIhAK%2FtmQEof6jDbnvDhHB3iu05mgPJrvxF%2BjJVuL70tyNAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfZHLPQd2rZJEDH%2F4q3APzW%2BwDlK6lwIqrTB3NGaLr1Q2%2BEJOzL1ZR%2B1Z3EHelEBBC4BJjFvFbfO5DmaM1R2mbSd1k3FNXkntaM9NiOIcu%2BZDxzQ2lc4vlaGY0J%2Bc8ng9mljOS9vwrnbNrKZD0AIMvOf266wT2rfrW95wuZlEhxKdWkIdjDsUX5KdgmBGYrgJgm%2FzvARaVgKD7756s4n6eHXkrMjXQ8rOYCQFv0Z5YZzHn8y%2B78oN6OHJYFxXjA8LcQDp%2BqIPOk4AzYXpIuwzFtUONJBjZuJMdSDRZybYJvWN4T13HCrrfj5DpS5I9JQgwcPPqduF8MXlde0tcNhs7GxBzSLTUQTISsqGx78QThdkvFmszMoT58lectWi%2FDrTO7B4yYFLyDr0SV%2BoiufyxVZiKTSK9upK28%2FTI2%2BZ6uJLAJojefllv%2F6dJAXAA%2B6wAFmPy%2BuVhPlSbDIlwf4xXrArCX6NP5ONVz1tdsgQnGKY6lYxKYFNY1wTQn4XtvxxN%2BS59HV9U0BY%2FxBlswx7P5M8IR2zsdd%2BzhFBruWuUSuI%2F3U%2BhRu8I6i3PSm15Ml4Z6HSpc0iZ1OQaQloHH4t%2Fvh8gr5KbHQDtZf2N5rg%2BDeTJz4MQJbPhk2emBRKvXQ9GyUls7iNVfpAWcDD%2F%2BdLEBjqkAa%2B0%2BAiFQwIczPgd%2Bu3jqCkFmrFlpc8%2FP02kLHnewDW4Zdfv46ngfgkVu4HWTF8TqBoY7wqibmEZY%2BCo0c3bCZ%2Bz36lS7lCvWsAJJg3Ar3jatyQ2l9%2FNeGc6ORLwvZ5IXydn4CWf4plHE%2FBj8uJCP3nmluOcD8hO9tsMYokuOiNOdYeC3cmeI%2F0oTmpoNdD%2Bz7I4OEzOhWjp0JfwcnP75ZIgSFBG&X-Amz-Signature=4c076a00123edfd33249ceb157a3dbff406f45e52331ca4f9588b45eaddaf3b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHFLXA4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDkdHMtjtDjf7ahiUA4wouAjKZstIoPHNP9JK30B%2Fl11wIhAK%2FtmQEof6jDbnvDhHB3iu05mgPJrvxF%2BjJVuL70tyNAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfZHLPQd2rZJEDH%2F4q3APzW%2BwDlK6lwIqrTB3NGaLr1Q2%2BEJOzL1ZR%2B1Z3EHelEBBC4BJjFvFbfO5DmaM1R2mbSd1k3FNXkntaM9NiOIcu%2BZDxzQ2lc4vlaGY0J%2Bc8ng9mljOS9vwrnbNrKZD0AIMvOf266wT2rfrW95wuZlEhxKdWkIdjDsUX5KdgmBGYrgJgm%2FzvARaVgKD7756s4n6eHXkrMjXQ8rOYCQFv0Z5YZzHn8y%2B78oN6OHJYFxXjA8LcQDp%2BqIPOk4AzYXpIuwzFtUONJBjZuJMdSDRZybYJvWN4T13HCrrfj5DpS5I9JQgwcPPqduF8MXlde0tcNhs7GxBzSLTUQTISsqGx78QThdkvFmszMoT58lectWi%2FDrTO7B4yYFLyDr0SV%2BoiufyxVZiKTSK9upK28%2FTI2%2BZ6uJLAJojefllv%2F6dJAXAA%2B6wAFmPy%2BuVhPlSbDIlwf4xXrArCX6NP5ONVz1tdsgQnGKY6lYxKYFNY1wTQn4XtvxxN%2BS59HV9U0BY%2FxBlswx7P5M8IR2zsdd%2BzhFBruWuUSuI%2F3U%2BhRu8I6i3PSm15Ml4Z6HSpc0iZ1OQaQloHH4t%2Fvh8gr5KbHQDtZf2N5rg%2BDeTJz4MQJbPhk2emBRKvXQ9GyUls7iNVfpAWcDD%2F%2BdLEBjqkAa%2B0%2BAiFQwIczPgd%2Bu3jqCkFmrFlpc8%2FP02kLHnewDW4Zdfv46ngfgkVu4HWTF8TqBoY7wqibmEZY%2BCo0c3bCZ%2Bz36lS7lCvWsAJJg3Ar3jatyQ2l9%2FNeGc6ORLwvZ5IXydn4CWf4plHE%2FBj8uJCP3nmluOcD8hO9tsMYokuOiNOdYeC3cmeI%2F0oTmpoNdD%2Bz7I4OEzOhWjp0JfwcnP75ZIgSFBG&X-Amz-Signature=31352914c69d73a63cf545c9d395a575beb8ba146e44d4a17060f3f42c3e8ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPOBNPOZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHWSBBzMRq9XIMSE0bAIAvwj0N53AB08qDVgjtYvQGsSAiEAy1RIFNLDvNoI2yiFHSqACg0xYWXgR444D74xTemv7XIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUXXHmP6cojXIQj2yrcA%2FW%2FqO0NYwW%2FSkrMu6%2FnJVBl1Bmd50GzXIgHfe%2FdDvqDMJJTHOeI9UckOnWbpTgQ5doHzmOztecRzLp0C%2BmrUmxKqflqh9oTv86%2F2mcal116H7HofDiuj8SqiAb%2F18%2Fw4FWjUMSMumOCXB2KcScrjlI%2BspY5%2Fx4E5bTmJ7yXO6MsBmUJ9SqVYw6Aslg91kcpLWzPXEm6whfBez7SYSviOlrtd2Tfu5RlTSnaM9iFMUeqg8lGxIUP44SsyZD1iHGT1ui14lZiZnz%2FoSrnxs6ya73%2BmjKMoohxidqeBf43NmpZa5hM4Ijx0bDy1FQI8VBlD00Tlu1bXs%2Bj8slydc7vdw8LiUhLNpRb7%2B0QD6fb%2BVjOyNb%2FIvytUwP%2F%2BotpUj2DRhEpEAzbcPdwluxCWDSFSguY0mGZ%2FbcB5AF6qJp3cJbOT6GVkpWUvbnixBcDR6%2Fy4cyTe6C1CIvkNx7thUwWoXgy1TW8y5F8cm2IC9IL43ViZsDyv2eNYcPVPanU0o7r8waz0OW%2F2bYCmvbTETTzECtfPW0loHFK05qiodUXyK6UQR0jljngfPGjzYb2OtZ065IUtUwqrB55qGxd9YoHXqOe7xfJJYjeOM4yqcAY0YtRbUUWM97cZLxmcPTEMPD50sQGOqUBjJi2dxzL3UeVNXTW8C6RRVa2eGBKLt8dXAPvc69RE%2FKY0%2FTDiOeZdScuEZENH7yALvpic%2FtYDSE0WNp6UjbWxG6Arf%2BSjg99UO%2FCk%2B9ayIB872iZoTJVs96bkY77%2BMKYXy3U3nf6lGKyqUpdzjS8QI6DilnGWjFStTaQpzYwKXkmuDhcKmv7%2BstMBW6osvRitl4%2BmW79QIKvzIjbWlYXkOt4pZ%2B1&X-Amz-Signature=fb854f57246b238ab1243ebd124e4255d2f18d1379da1016bf12871b4f0edd4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3RFWN3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC0ZACe%2FjyYEAPnkSZl9w%2FCQPwvw1BaqVVjkYmLvB0ZXgIhAOo4I%2BSKSrxC3VrWhFtn58r%2BJADkVsGUDrqcDj7Z7QrnKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwnt6t%2FhRlXebQ7MUYq3APC1Fdn7SS694Kk4LyWNoQ4F%2FIjB45jIlr4a%2BqfcLNm7KvQv6LuC5yZ4ozATVKUWlvrvV2ora7wMJl7JVQ1ZvD9fPbaKrgqKnJSoTVZDTJIDPMckfk13eKKdXqToFT9ar%2B7wse45syJ3RJy5Qm8B1i892ns8nHkmKKQMwxSSb2NlIcGbGdfe4Z8YfhSbgU96la1qK5Wty1OlUnOnAdjbKoEPhLgxXp1mxEh36Eow3hvAZNGQYGmjmE6Yf8JzUtFWha15XTbIqM0r1BANPe0yjXYfDRAtJrmXohcznNXsLwV1EMgkR4v1x8tpXTDuYxJSPTEksMxl8o0req5wFDZtsBuqyaH2RWTkr9V651gJ5KMnLiaBcOrUvDcHTJjnaAWuDt36AnSpqNEIqatSVIoq8AIRVANDfuNc96YLa5GLUAP2PIm%2BznS09Faq39uNbxPqFLNe%2FRvaTJya%2F9p1CVErn1g2DIb%2Fz514bZ17dWrp0VxEwWJWO5KB7QnkNy%2F7y4%2F6xuwmUD7iqitldzTQEfqlNf7CPnCvCx6E5IV2rS5mjHTfirSzBCcBoYpWtxAY0oZbEEK%2FuC0mzl%2Bvrlc43Kg2sKsAUOlzd1n87pB6%2BMTuX65uP%2FgekplBuT7%2B09PMDC1%2BtLEBjqkASoLqT4xcEdmjEOLRVzG713RQpnLu4cnogF%2B4vQuswZfPaVpifFCdFlSJhy3lIsLcaeE2iyAL7m18mE%2FFMbUrqjxM%2BNfvZ4XraLkbN60T%2BwXCrt9JYEdNqY0chF%2BZ1KYJp1yrzxImGLfDCz3wmvw1Lc3wP9w19lUjF0ovcPsoYbM%2B1PJWLo0B6eiwaQij%2Fdw7zWU56fdsxJfsPZk5h%2FutwfRbPPU&X-Amz-Signature=dda9898fbb0a6693a66a5799d1045505db57b0d083d183162f3623120331e2e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6RVHHA5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCNorIz6vBT%2BoMfX3Ec3NRVStFAsXCvVQK418Gw567lVAIgBYKyDk3uZNMHgICI%2BFycmTYiTQgtD1WSu6OQo%2FDu6VAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYdHfhVqkHAQzWs2yrcA1Aczg8kL9P6vdLc1VfvWwfNGYTTWrgZMS%2B%2Fuzyn5yHLEWnElWuCBWtQUBX%2FepwrKKlDdR97NGhWaO3Cz2FZTJy2ZZV05QjgDmPBemp9wGwXLDb6fX%2F3uqkOfd58rwjcRFWE%2FhhulVJveKe7nFez2uY56c%2Fhs1QxnrioeBLN42WDWpKzqau1yg3cmLGMKq5EP27Fjvv5W2Wt2C4snBqw%2Bpi4cTWlbfXqeX3N%2FY4HiNlB1RgRASexhLswWgV53dqemQA9V4VAMR99bYUWsrem83tuPRlhGml%2Fb5pbMjtMTF8r0kCCzJmhxw7ouAeN5WRLPvTkfLetKZ5UeXiKuavM7r%2F48LdTlZKN%2BYnQiHonYjPLadyAJ57XsmWojhzqk5Bwhnd1jbytUnxzfK8LB0S2lqhS7zZ9j6PFN%2Fj5Sz6P4oEekXlrTmRQhu3I3bA9%2BznjpsXbtvsegMymfR4weWx4VPOejuXjUgUaqhM3J5N0UThIuPJbq%2FKH9AMiaiP8Ql%2FQRyG1xSHv1MOCNzFPaTlvbJK5IxZez%2B8di1vhyPVXddlDvFqEtvw%2Bm6jc4TzTfksDbn5ZnsAgp2VhD8XzbLAiQ6E0WQv4d5Se8qAp9tM5OSJjMaN7%2BXdcDASilwCmMP%2F50sQGOqUBJ4hYvJxV8GKYCjz8Ap8u4pJzY%2FqJwdDYn330z8P1RH3CGkd61kp9lRxhh6RvH81hw%2BjzvFDBpKbZcAVETZG7o3q8I7elh4F398fYx474a2wZOOJlyd7RJdnbpnERFIgE81BodRX6ADMVfu2FOM3KKpnYJawOlH%2B9FtBQAtWudx57zIrxJKFesbi5MLISQVprrBAQ3rQrDfn2G%2F5qpERoa1hqARzs&X-Amz-Signature=88ac869f16baeff6c3886ffce0b7817abd81c66da9216cf38338b3dcf7cfe1c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHFLXA4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDkdHMtjtDjf7ahiUA4wouAjKZstIoPHNP9JK30B%2Fl11wIhAK%2FtmQEof6jDbnvDhHB3iu05mgPJrvxF%2BjJVuL70tyNAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfZHLPQd2rZJEDH%2F4q3APzW%2BwDlK6lwIqrTB3NGaLr1Q2%2BEJOzL1ZR%2B1Z3EHelEBBC4BJjFvFbfO5DmaM1R2mbSd1k3FNXkntaM9NiOIcu%2BZDxzQ2lc4vlaGY0J%2Bc8ng9mljOS9vwrnbNrKZD0AIMvOf266wT2rfrW95wuZlEhxKdWkIdjDsUX5KdgmBGYrgJgm%2FzvARaVgKD7756s4n6eHXkrMjXQ8rOYCQFv0Z5YZzHn8y%2B78oN6OHJYFxXjA8LcQDp%2BqIPOk4AzYXpIuwzFtUONJBjZuJMdSDRZybYJvWN4T13HCrrfj5DpS5I9JQgwcPPqduF8MXlde0tcNhs7GxBzSLTUQTISsqGx78QThdkvFmszMoT58lectWi%2FDrTO7B4yYFLyDr0SV%2BoiufyxVZiKTSK9upK28%2FTI2%2BZ6uJLAJojefllv%2F6dJAXAA%2B6wAFmPy%2BuVhPlSbDIlwf4xXrArCX6NP5ONVz1tdsgQnGKY6lYxKYFNY1wTQn4XtvxxN%2BS59HV9U0BY%2FxBlswx7P5M8IR2zsdd%2BzhFBruWuUSuI%2F3U%2BhRu8I6i3PSm15Ml4Z6HSpc0iZ1OQaQloHH4t%2Fvh8gr5KbHQDtZf2N5rg%2BDeTJz4MQJbPhk2emBRKvXQ9GyUls7iNVfpAWcDD%2F%2BdLEBjqkAa%2B0%2BAiFQwIczPgd%2Bu3jqCkFmrFlpc8%2FP02kLHnewDW4Zdfv46ngfgkVu4HWTF8TqBoY7wqibmEZY%2BCo0c3bCZ%2Bz36lS7lCvWsAJJg3Ar3jatyQ2l9%2FNeGc6ORLwvZ5IXydn4CWf4plHE%2FBj8uJCP3nmluOcD8hO9tsMYokuOiNOdYeC3cmeI%2F0oTmpoNdD%2Bz7I4OEzOhWjp0JfwcnP75ZIgSFBG&X-Amz-Signature=97e90236aa09b6dbbd3c47ac892dc9df83e91ff766b4db96873d86dd104422a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AOBO4OX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFlb5vItSv084i2wl7kw5VaTZXX%2BG5vzOBHQvG0Ywr4EAiAwCj%2F8j8N%2FI7ITLCph9ADXNOsJtIostHod05uJ0Kca5yqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhopH9zMR3Ausvh3JKtwDWC%2FaetFTW8YcLYWIAESJYS66iMh8NEKdmdtQohcUxFTTOJjTLjov84Kepig9BG2eFd3fcEBS3x9Yo%2F1X6R64mNiXPUtplv7Y9tGSIcf0kMUDAAy8Mrk9Ag0wV4oOIyQmDURas20YSeMKodvu%2BdNpKhZZD%2FZDmcerMR%2Bn%2B%2Ftzu7Y0gnaponZ3MyaVji8qdudVB07OjwWwWXQFyjqWeXUQppJ%2FFQj7%2F3x4hIH5g2XXqASHiWLMtqywMULcwMqxLdZNGnQyw%2BWbHkJV7iCQ7ObHeb8UeX9tcmqKcPEF5RiVjfMOz%2FuldhJRClfu%2B4SftdylulnxJK%2BDqf2NatIWSLzjdkvAqZ3cGXT41PKzw%2BV5QQED8ADvonbrqjhfHeMVirsqZYagkBnIkid2TuqMBRrzWC8uq%2FfhPAJU6f43gCdebINMlM6yxIX6b1oeUY3jgdDd5Ofn2REvdGg865xYW6NR6YYkKLOHnCJ2lEbt3fnmGoHYOmge7AXk7nBkVJRrEj5w6rh5A7Vwpj%2FTxO1iLBC9OHZpl752UU31nOrk2XRKkXzXWRrBmHoqHYFdRCWQtXAl2V8ftiEiU7RUFPafhzvxU0xhL2rMLWhRtBaiZU3AueirylA3YBZKN3v4AKUwwvrSxAY6pgGrGPQdOJ%2Bc8chpzWimmBbtpFA5yoGmHUp%2BE%2FewsHGBhUjU0WxIW7Y91sV2PGNv1CyJVPYx%2B9salAGlwFVoT8mf8UtmacWKCTgTCAq0qMDUWoQut%2FvYLst1jgb2ue%2BqyEvlrEyUFF8mQDHRF8hyluoONKeury0%2F1RUTP10pDjsGoNxpCJK4gIHa4fHQghPOvWAQh11ZraavL3jD4HHRFYgE3YKOjIhr&X-Amz-Signature=aec8338db32dc1aea2a63a7ebc3a617a9f50429e8b5790dd7b8edbd0da230f6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHFLXA4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDkdHMtjtDjf7ahiUA4wouAjKZstIoPHNP9JK30B%2Fl11wIhAK%2FtmQEof6jDbnvDhHB3iu05mgPJrvxF%2BjJVuL70tyNAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfZHLPQd2rZJEDH%2F4q3APzW%2BwDlK6lwIqrTB3NGaLr1Q2%2BEJOzL1ZR%2B1Z3EHelEBBC4BJjFvFbfO5DmaM1R2mbSd1k3FNXkntaM9NiOIcu%2BZDxzQ2lc4vlaGY0J%2Bc8ng9mljOS9vwrnbNrKZD0AIMvOf266wT2rfrW95wuZlEhxKdWkIdjDsUX5KdgmBGYrgJgm%2FzvARaVgKD7756s4n6eHXkrMjXQ8rOYCQFv0Z5YZzHn8y%2B78oN6OHJYFxXjA8LcQDp%2BqIPOk4AzYXpIuwzFtUONJBjZuJMdSDRZybYJvWN4T13HCrrfj5DpS5I9JQgwcPPqduF8MXlde0tcNhs7GxBzSLTUQTISsqGx78QThdkvFmszMoT58lectWi%2FDrTO7B4yYFLyDr0SV%2BoiufyxVZiKTSK9upK28%2FTI2%2BZ6uJLAJojefllv%2F6dJAXAA%2B6wAFmPy%2BuVhPlSbDIlwf4xXrArCX6NP5ONVz1tdsgQnGKY6lYxKYFNY1wTQn4XtvxxN%2BS59HV9U0BY%2FxBlswx7P5M8IR2zsdd%2BzhFBruWuUSuI%2F3U%2BhRu8I6i3PSm15Ml4Z6HSpc0iZ1OQaQloHH4t%2Fvh8gr5KbHQDtZf2N5rg%2BDeTJz4MQJbPhk2emBRKvXQ9GyUls7iNVfpAWcDD%2F%2BdLEBjqkAa%2B0%2BAiFQwIczPgd%2Bu3jqCkFmrFlpc8%2FP02kLHnewDW4Zdfv46ngfgkVu4HWTF8TqBoY7wqibmEZY%2BCo0c3bCZ%2Bz36lS7lCvWsAJJg3Ar3jatyQ2l9%2FNeGc6ORLwvZ5IXydn4CWf4plHE%2FBj8uJCP3nmluOcD8hO9tsMYokuOiNOdYeC3cmeI%2F0oTmpoNdD%2Bz7I4OEzOhWjp0JfwcnP75ZIgSFBG&X-Amz-Signature=912d6a8edad251256ea48c9c4b721428f7364f562630ce6b64684a64e659b4fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRQXDFZM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIDqjLN9c%2Bkqtv3w5lUDtnVoqEwmBurjcW26E3i3xSRcbAiEAuq6gQyspR0BErZrZAADGGH%2BT00kAiHbjcmxpBSQLUpYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwdZYIhbB160PAocSrcA7huCzZapgD2xC2RWuADq6eFVu22UfKnZRo6uR8YRwTYPvicKnOlQjwVcunRyPAJUtTS%2FTiIsN0SA7mKqX%2BltbTejUKqu%2B02E2KQ5ZkhOD8DrinuRTF%2F1wVTy2rBDBbM%2B4AD2PbxhIlSWi57kHjWf0%2BJU3869YmjCerlTs4oHzNJkLcF8y3cVS8i7VWbi9bPbRKMKu0mGTHAwvoOaYHICdjgzZ8rQcr37E3Fk%2FXDplF4%2BUV2m4Cxd433YDe3wsm4uRRYjdhCy7RgUl%2FjjZd4hgKFQyl6tpyGHqAfELtjoFZxSFlgQOPJJNpSTB10E0GkAWV86GoNOzyHAi8OW5Sg3EQGvCCK401CZrCWlwQnRnOdSPYqLPJFC4Ww9gjC1SPl0WTGZLf4pIZRi17bijJIIFGwWOse%2BueM9JJCM%2BSy5%2FopaEWyWrIe7ILzVZwSDiT4tQUJAMJ97y6FAamWkGUrrFaSYf4B3vRVMrIfGYbf%2BTH1TkoEthf8x3ZLu6FFJnlidQKtnBhjhy2vmpXA5gO3TM8ukWt0SBvD5v6dL0uaIKVggkdmQWQ2bIxU84VYaNeCbUpOPn8oSIIocvQYxA2GBYLDn1Rlv9cftpOPnamHGCOTjMjd%2FMyuVKDdgQXkMJf50sQGOqUBDO4D0%2FzhLbaZAQjLPr4sz8JIXf9TmbTK%2Bcin22WZt7Bg%2Bwon7GkG8yyde8KkKQOddnIGqPZZhmPEF1Svm23azp2jin5C6UklAf9jZqSLZ4Ypfy9OIVIBqtUDijtqSuGyI4inxC0oyYZWGDVRUd27C2iEJYStCbTCwseuGGpjS0khdVvFn%2FiPm7kBmfIy8mT5RWE3qrUXZWq4hEO1zpLMZi%2BFZJug&X-Amz-Signature=63b22e840d2fff13423c630ece7784ca525a04a2fa3028204a891ec4ad66bfab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHFLXA4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDkdHMtjtDjf7ahiUA4wouAjKZstIoPHNP9JK30B%2Fl11wIhAK%2FtmQEof6jDbnvDhHB3iu05mgPJrvxF%2BjJVuL70tyNAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfZHLPQd2rZJEDH%2F4q3APzW%2BwDlK6lwIqrTB3NGaLr1Q2%2BEJOzL1ZR%2B1Z3EHelEBBC4BJjFvFbfO5DmaM1R2mbSd1k3FNXkntaM9NiOIcu%2BZDxzQ2lc4vlaGY0J%2Bc8ng9mljOS9vwrnbNrKZD0AIMvOf266wT2rfrW95wuZlEhxKdWkIdjDsUX5KdgmBGYrgJgm%2FzvARaVgKD7756s4n6eHXkrMjXQ8rOYCQFv0Z5YZzHn8y%2B78oN6OHJYFxXjA8LcQDp%2BqIPOk4AzYXpIuwzFtUONJBjZuJMdSDRZybYJvWN4T13HCrrfj5DpS5I9JQgwcPPqduF8MXlde0tcNhs7GxBzSLTUQTISsqGx78QThdkvFmszMoT58lectWi%2FDrTO7B4yYFLyDr0SV%2BoiufyxVZiKTSK9upK28%2FTI2%2BZ6uJLAJojefllv%2F6dJAXAA%2B6wAFmPy%2BuVhPlSbDIlwf4xXrArCX6NP5ONVz1tdsgQnGKY6lYxKYFNY1wTQn4XtvxxN%2BS59HV9U0BY%2FxBlswx7P5M8IR2zsdd%2BzhFBruWuUSuI%2F3U%2BhRu8I6i3PSm15Ml4Z6HSpc0iZ1OQaQloHH4t%2Fvh8gr5KbHQDtZf2N5rg%2BDeTJz4MQJbPhk2emBRKvXQ9GyUls7iNVfpAWcDD%2F%2BdLEBjqkAa%2B0%2BAiFQwIczPgd%2Bu3jqCkFmrFlpc8%2FP02kLHnewDW4Zdfv46ngfgkVu4HWTF8TqBoY7wqibmEZY%2BCo0c3bCZ%2Bz36lS7lCvWsAJJg3Ar3jatyQ2l9%2FNeGc6ORLwvZ5IXydn4CWf4plHE%2FBj8uJCP3nmluOcD8hO9tsMYokuOiNOdYeC3cmeI%2F0oTmpoNdD%2Bz7I4OEzOhWjp0JfwcnP75ZIgSFBG&X-Amz-Signature=8ba6c5cfd2948f80afc20d8f65ebae9cc59e16c732c12de9950d11ec0bf0da73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TELJX4K6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIDxlf%2FLkLupbTY1I4kFM2a%2Fq%2BRldSstZQVOT%2BurohFaJAiBvtaROhMx8Ctm82LZVGdHx%2BLYHT1jSVmRf10eO1o2SciqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMhWQWjgSD3dyAwnaKtwDptdHnSiPRKaHmnmTJ2gnNpbB7gWSm7Vk5AwrwdwWFUkh%2BYIq9uaeiQS8c5C%2BNzLgocb7AGWDv1aF5Hni4Li91YAdVSlC3ZpAJndJJNCK0HC7MtQXEtcZW3ukwDpSqYSCsfjJkYBFK0oCkPXey2mMwznzQqjGNPpEq%2BqhxdcuDdKOQD98pIYeXlXYpgfyghiI7hKsBJHhW86FBN%2FXKid2qBZXuQ8yKtVng8yG351sg5BzGjwXzig5%2BRjrUpc7tWYdd5jLs5TZvKy%2Bh4VkovXG3RShN38e0HsbPFcM708HD%2FZ%2BIpJ5eg%2Fr%2F2DrUfnTQxIVFsgbuDX7fPP5DICECZbP6FBKP1mJu4TzkbilID05QiKVjvWXtvXA5NcheAuGk69Ell8yRqPTHaQ0TBaQdfMdILSK2V%2BBnCT5JOLE7hGyohvRcNkBcD1pTo4BzQc0Tg47b8aqGpge36xseeX0Bb%2FulVI5KhFzPOoJLXbrUldNuQOmTc1XOACRSb%2BAYqJOeFyKLvUC0sBsBxQJKH6ZlKoMLEeZrRBhkIDTajZgr0MMV1B4MmIsWXd%2B7czO6XZYYlJJv0bvqMRlzKkOBryWB9RUvQ9y7X9iprMiYeZFxyNN9hFNqt71locsv8JWYRkwkfnSxAY6pgEFnWMNOnJdipeQBnTPMcv7em8vJ%2F5rg7ufK3bsf%2FGX4TKkNDhjeg4yBj7kbXiMQB23NwcStpBzpzHI%2BOMviyMJoCzBKUEMc6Pd%2Fseuo7OiWLHVXJJ6YGzzU8MPcIe7zapYF4JajEr9WVXo38Mcm1qUkgI8oV6rcKF58tW0qYdiB6S%2B91RiW%2Fdj9rZbk0iQpTjEdnTgk32p3Y6lVN0t3fmvgAh7bFjL&X-Amz-Signature=15c81fb588c90f988c4e40dd72224ed589f73b203f124d8e8d67df7c0fb7d508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHFLXA4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDkdHMtjtDjf7ahiUA4wouAjKZstIoPHNP9JK30B%2Fl11wIhAK%2FtmQEof6jDbnvDhHB3iu05mgPJrvxF%2BjJVuL70tyNAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfZHLPQd2rZJEDH%2F4q3APzW%2BwDlK6lwIqrTB3NGaLr1Q2%2BEJOzL1ZR%2B1Z3EHelEBBC4BJjFvFbfO5DmaM1R2mbSd1k3FNXkntaM9NiOIcu%2BZDxzQ2lc4vlaGY0J%2Bc8ng9mljOS9vwrnbNrKZD0AIMvOf266wT2rfrW95wuZlEhxKdWkIdjDsUX5KdgmBGYrgJgm%2FzvARaVgKD7756s4n6eHXkrMjXQ8rOYCQFv0Z5YZzHn8y%2B78oN6OHJYFxXjA8LcQDp%2BqIPOk4AzYXpIuwzFtUONJBjZuJMdSDRZybYJvWN4T13HCrrfj5DpS5I9JQgwcPPqduF8MXlde0tcNhs7GxBzSLTUQTISsqGx78QThdkvFmszMoT58lectWi%2FDrTO7B4yYFLyDr0SV%2BoiufyxVZiKTSK9upK28%2FTI2%2BZ6uJLAJojefllv%2F6dJAXAA%2B6wAFmPy%2BuVhPlSbDIlwf4xXrArCX6NP5ONVz1tdsgQnGKY6lYxKYFNY1wTQn4XtvxxN%2BS59HV9U0BY%2FxBlswx7P5M8IR2zsdd%2BzhFBruWuUSuI%2F3U%2BhRu8I6i3PSm15Ml4Z6HSpc0iZ1OQaQloHH4t%2Fvh8gr5KbHQDtZf2N5rg%2BDeTJz4MQJbPhk2emBRKvXQ9GyUls7iNVfpAWcDD%2F%2BdLEBjqkAa%2B0%2BAiFQwIczPgd%2Bu3jqCkFmrFlpc8%2FP02kLHnewDW4Zdfv46ngfgkVu4HWTF8TqBoY7wqibmEZY%2BCo0c3bCZ%2Bz36lS7lCvWsAJJg3Ar3jatyQ2l9%2FNeGc6ORLwvZ5IXydn4CWf4plHE%2FBj8uJCP3nmluOcD8hO9tsMYokuOiNOdYeC3cmeI%2F0oTmpoNdD%2Bz7I4OEzOhWjp0JfwcnP75ZIgSFBG&X-Amz-Signature=02c94807ed50268023736ccda05084ef3144a330fb87dbfccc1eb2f35abfc373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGKX5O6N%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCq2vw%2B4jsO0fHSSCNB%2BXTx5vtzRU9v1s9oWpPSE7T4AAIgfcsiaBtE5YqH1PeQw%2FMlTHF6CZ8PNd7L5ub%2BUU8P0d8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBIiooFX21MTqevLSrcA3tZ3LODfPt2gxZJVCAtuz5wUGTxcS91%2Fzo7DXiDKufzgQM8OAtAEk%2FYMSder44Z2OAw63tnsDzbuCu%2BZ9jGcXPs9o3HnTi88QraSUwU0RGMeo5nfw5ZFp6aA%2BDxOxQ48RK1WJCeI8Cummn41N%2FJiVTiecCfLWnoNvYmGB%2B1NWRyFYTpNGQPhm0ZEuZAqCuZdtUUUlABQqsZEhLJES5Uqc6%2B4lzhgNQ4B00xZzHCWhpB4kouw6Bnq79pCmrvINcVcz0ewqv6TKlvKwRnaZDvGYxhNIU04pixxejxoTUeVHnbOLRbPRWi4%2Fnr3%2BE1xs7s4T%2BPidOHkKumDb8mUByCnZru2MC6HlnaWARti%2FPvAcNCkecAc4S5ishgEo6DocdrbJbkgPtVIwEQqN1vfaFg8fC%2BQSAgrG3yLivhHaWfc7NJpxEkxJNmh%2Fjg2aB72oN5votHE2Z%2FeXrI58wSZ%2BJHz63nqxW5MgaRDW43bZJle%2B%2FhnDgQpdk9%2FGYIlTJRZicTxvNrQqrCGpPU6t0kwC8sJEw5NSQKHeUy6VcHC12KYxeM7VT9zzxNde3abryhP%2BGQt8VVaqlIfPzviMBwtBgTbahxfBtkYtiZq4DPqsqg8UVS4Eg%2F80%2BcGX8Mj5f7MID60sQGOqUBKvtUbUYepaaFDzh0HMIOE3vAS9Lv0o2ad%2F9Mqy034ypclr19LVGKHwSkyn0dJq993x8pGV1E8LUvwZQIgYAMvquenT4TffYh%2Bym4S7ZY5yLcdD7MiGD32vQMFOGpo3uTv2xiFJzdEaW4yfR5cNJ1wClnpbKPFc0GTlsheSXs5q9iccSL42VzPaLC6NNt0GG1V6YnjiVEqf8cRyiZiFOKHHdqE%2FX8&X-Amz-Signature=ead3a84aeae67e54cf994ef1457f5ef20bb07040c4ad3a666507080fb845668c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7GL67N%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCfcymenuCcBqJ7JIlZBRMeJyCJvH4GIg7BDAOq8fPX%2FQIgZ9GMXRlQVCoNfw0CwSCE%2BfgJXhlvnXw8EsGJyZWUiLQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWbzFbsaWQPVewLpCrcA2tMHhP4XZWMwp%2BqYVD07bNl5Smt5Wjan4%2F0Vfoimdynl%2FAOqJBN0voZItVbpe%2F8Wu369tpB0aa7BTDmFsqB%2F11%2BWRB5VbrlaffEqC2P1op4%2FxqVju5anhhe7leFEFVpFgpUmazfN8OWu25dSYnupyniwLpiJ76mkviiUuVXQTkJDiRzUplMvbNv96h5MW852VmT4mdWzuQoXHlt%2Foq%2BQqhxx9y97X7RUpzPwKRbqCLZPR%2F6%2FflyYP9RvxCzR53e2JbIAMyNeI%2BZ0N4zRmgs7b6Q%2FPG0WSqalMeQIRLamNNah1gsHY9ZDtrODAwD5VjQJ89mMgsWZ70yNUTD168%2Fw08EXW4epIbehEf0IMZSOKHUhfb4mjwgNMokPrV03FcmhDqFPaWThDJti84%2Fi0F4mbMe%2FQ6fpQ7KHTfZhv8CaEcQbPnQ6wi7CTL6a0fz95dgOJN4oYJXtpBIB%2B8W0WtQd58L1shaiyNOAeVo2DKoQaffXzKB3mcM3YDO4EEOMOSWaLhMEd6L8CpQSywt3N%2BbMg3eMkBwEciR5P8qnx2nbgWJO8VTxz4N5Saee3lSj4rO7JjD41RxG5FVSDCM3Bgb0zfI49ScOVoVWL1GmCQSLjtdOBZlvZYree%2BYkF%2B2MJ760sQGOqUBNUwskSFtMMR9V57NLE13b%2BwP%2Bho1a1ndgbqEu23MWShfhj1K71gf%2FfOpjRyDbZVM50J44rPTjfkkYIKyWFrGnqhCVtbwyOyT3qye%2B3EkxjHPxGECmT7TjXzMksKgHwFZQeGjPzf5PCbtkl1X91NWWb62tk6BFiPBmqgMYSPhdBhNSAfZCu7ImGBIYx3meYsjQkLMUz822M0l2PYE6n6q0KFCZdZM&X-Amz-Signature=be22e8ca285146295650ed19e1e033b70182a2fdecf6b1ea3447ee84a4e6cfb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YACTEH5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBVC49dN%2B5VWQHFnVbvQTeK6Ap%2B0xiEYO0vxGGCQ1BJBAiEArd0qDIiFnA2YQ8FJ3uakIbR2MDXKZqiechFlo9oTDjoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOThPNUCizC%2FiueJwyrcAyuV%2FWyTmp9GK3hOx5TvZrE1EPe3iPuropVv0UfjqCyYou3oOh%2FP7P%2BOZGBdpEmyPpRvhvMw0lyPI7VETsnZLhgGXcbeDqMcE6%2B%2Bk1o9nM7hzzF3L0gaqU9zvV6WBC3YxU2NvM7adyAar7pmsUQuc8uJ5btDnTYCkwBuyRxcjlHKb0GiiS8B%2Bzmu8e%2BraR0Odxxa0O6VmTrWrr%2F6zzK2em0Y%2FiZLYTrWHs9zi7%2FZB%2FdwQMWTzOGp7IF9H2xiAClWUcg5Xkiwco2%2B6hpow4Aljcbc%2F1oK9mZD8Mpfq8qjckZG0rk3hMs3EwAaWV5d22qe7rhyR3YIyrEv%2FMMfDT7tpQP3mQ91t5mT6ywMtvr2SEjcpv%2FJ%2FgiSMbDFFHTAGrGqZ%2Bkdfen0x0s7sY173Iv28wD%2BnUZysbL5NXJOFR2ShHJ8%2B7E8v3VIPmH5HUtM%2FwjLO1lIFncUJqUNEzADq1gCsDorqeauspB482H7JRxpplEclbGOEwsEFIeP6voUsIiHpK88G%2BCjEjMc%2BuN64RGJuB0OnoL%2FajhxvfC5%2B7m0mrUQIROGU4RQ3DibOx9DwB5%2B0k3yiHEelYW9B205kgtxAU8refSwVNXNhOLwSg0zwYDrfYQ9sbHaIb9sXv38MIL50sQGOqUBhdkj7z4zo7wc7pvibmFK8WnyYKtU4AM9aBLUNFkHwhUQ%2FfoXsMi91juXNXlblkI%2FUZkvjgiEfID8JHTBVx8GGKtzTERsSrM65KHqjqp9pP1k1t2oobtxDq8Djbo1iqSQDS4bm8vObiKUvVyBA8gM6PDkAfD47vax0tHlhoHYC33tltj7ticQ3oT0u4Co5SSx1oDRHsQ2w5UZbRPXqmy8MfsUtIKW&X-Amz-Signature=4d869ad38d53aa0c498faea757d7d13e530daa1c840a05f08aca8d07851a0dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLCYZUCI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAgck7f9dF8AglhHtmaiUyxLCADqLaJj3c6%2BAz6zLpEBAiA76yRnWz5nrjL3bH7twGTSTL08jANuxpI%2BV16qslMEuCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgOykWQDC%2BscwpF7pKtwDsbYsso2jaep1BpoGtBP%2FugYzT6ibkFp5cnrgJPJunglVc7%2FqLO2eCScrTx%2Bx7BC2oUHNi%2B%2FJ31OyB2Nv9w0wvzKBalfif1vJgEwOs30kTEkMIHhYbCwUrVMa0OEzTClNWqRBR0HMKGTWXUkVW7PKZMRbjdifDig5FqswIRe0W9RQKiXMWhaW7IZyTKCdlxE%2B6tcuYh2wH3KRtq0fNBRQWpSW7XXHMrV5iIfcKupVijpmANjJTrpiNYNFr%2BLBzZ4SpSWRRiW609unn2gw3vLXtz3U%2BlUALkaM1mT9HekvAU8KMczPZz93hV6%2Bnn8gQaXNtstWCnosMafqjOni%2BdYIlyRDLXmh7q7R%2FY7aqa%2Fclj%2FThNQe5nWG2gA2wVVkXkltWOs37k8i8Pm7eWcq4bk%2FTkPBC%2BuS36VYtoasiJldU0ybHWZeuwUVcfen%2FbSgVSO993DmBijjns8qLeEwUjnDjELGHOpokCeEsZeucSV2dFM7sVaWMn%2BinWPSlm8qI4iDYeXQRUJf%2FblkbJk8WVDJbKqNNUhF%2FifO6ITfyCyhEoXFT%2FlKlgRFK2K5e6MdUrIX21NqWCLSZUxv7NHOVlkwxmw7YLODlhvIrunj9XVi%2F7kr3oh53F%2Bgc0EjKiswhfrSxAY6pgEV6U%2BcKSMJJWpvsMhn8rqkajiVRFTjmCyyeMh3GL0ZudEKi7vRs2Mika0O4npLIVFmqKu4WNSeBn8trjGe5Oud%2FogV4MXOug4qOrOZKNaByX5ZQHFW69tmPc3i%2B5ppYScfEoUUMl7J%2BSB4sKnA9CJh0NZSe86eEeOtVexHQO8Ab%2B%2BOCTEsj%2BW0feumm%2B%2BzvrGoLdmqwajC5%2BJvVwxn%2FDUcNxSs0%2FUJ&X-Amz-Signature=8c5f4f55785e487f4ab49befe6505a69a55f99c3349ec27ff0595c2826f187e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BNFUT3P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCQXVH66AtoLkQBapray0Qtn1%2BztWdJZhUtZheK%2FdfYoAIgChP%2BSKTWiS9slccrOwR8AlSf%2BqfpMnl%2FrFvt7mulwt4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbgLddut5dwyB8eRSrcA2xDCzVRZ5%2Fq7ElIlCJAS0h34eetJY85yj0DdR9iS3Qk0ybAcrc%2BmP28K93m%2B2zu4zd4KSem62RPbHU%2Bfl983BD4heihuRpkMWJf0hhFtXUB5HeeYWTG%2B7%2Fuhdn0xZYH81%2BHFg9ZmoXUtgn8e35w0HLuamO%2BKIzSeRHtf7k5HZZYoi3Mkke%2BM5M2MMYH7TtIWLnKTUtbjaisAzwZKgXZTI4jixXcztugmSfCdiNc%2FoIb0ACJhkONxkOwu6w4ENv%2BiznIsaAJWmCvN6Ufx6iphseSvlIEfUtkFev8Qga%2FTmI2oMnMYwgDYu30EWIhn8TpeSTN08AuNI%2FrirPqJ%2B8kn%2BEIWCoXBaVN5MgdGpepi9HnhamH3koFfr5IcQrjbbXtpJa836j994y8%2ByL4dt8dyjHAYx4nz6WaUnBKeYGa%2FuQlDKij2t6MniuHJthi5Vf6pV69uPspPbcqf18RNerjMHyCxL9HB8blI3ALsGQA7OwQy4wphKmR6Y4CxZDoe%2BLMasyt2dTQATz58xOvR2z5torsQFAlXcYOToOdEtFphkORmA4xX5r4yLtHtYebsEvHMJjHm3xmn3kTIYCpsKavARKjBH4j3OexJ5PZeqd1YBW70q9%2Fx4HxYN%2BpP8OyMIz50sQGOqUBmuxACASdTDpNIWtVQEoELiCjlyKiqvkMq3oNmbRKl19aVXLG6rmZSTP%2FnjtptqV7wB4onkvebq08G6uIWLGrix2Oluc2dcon9tnRPGTxiR%2BYLrTsVKW1V%2FEYQD4O5TO3Tr4JFNOgP26i5uzespIwg12yRIKveqqd4k26WVP35oOtJydeWCtQt1jaMVCDXDnvIz8kMraTGehfsPXoCLXY%2B8mfLzAd&X-Amz-Signature=b6d0d676bc957822807727326de5dc4904a4d14a308911cc5b5c2a63b0e97665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHFLXA4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDkdHMtjtDjf7ahiUA4wouAjKZstIoPHNP9JK30B%2Fl11wIhAK%2FtmQEof6jDbnvDhHB3iu05mgPJrvxF%2BjJVuL70tyNAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfZHLPQd2rZJEDH%2F4q3APzW%2BwDlK6lwIqrTB3NGaLr1Q2%2BEJOzL1ZR%2B1Z3EHelEBBC4BJjFvFbfO5DmaM1R2mbSd1k3FNXkntaM9NiOIcu%2BZDxzQ2lc4vlaGY0J%2Bc8ng9mljOS9vwrnbNrKZD0AIMvOf266wT2rfrW95wuZlEhxKdWkIdjDsUX5KdgmBGYrgJgm%2FzvARaVgKD7756s4n6eHXkrMjXQ8rOYCQFv0Z5YZzHn8y%2B78oN6OHJYFxXjA8LcQDp%2BqIPOk4AzYXpIuwzFtUONJBjZuJMdSDRZybYJvWN4T13HCrrfj5DpS5I9JQgwcPPqduF8MXlde0tcNhs7GxBzSLTUQTISsqGx78QThdkvFmszMoT58lectWi%2FDrTO7B4yYFLyDr0SV%2BoiufyxVZiKTSK9upK28%2FTI2%2BZ6uJLAJojefllv%2F6dJAXAA%2B6wAFmPy%2BuVhPlSbDIlwf4xXrArCX6NP5ONVz1tdsgQnGKY6lYxKYFNY1wTQn4XtvxxN%2BS59HV9U0BY%2FxBlswx7P5M8IR2zsdd%2BzhFBruWuUSuI%2F3U%2BhRu8I6i3PSm15Ml4Z6HSpc0iZ1OQaQloHH4t%2Fvh8gr5KbHQDtZf2N5rg%2BDeTJz4MQJbPhk2emBRKvXQ9GyUls7iNVfpAWcDD%2F%2BdLEBjqkAa%2B0%2BAiFQwIczPgd%2Bu3jqCkFmrFlpc8%2FP02kLHnewDW4Zdfv46ngfgkVu4HWTF8TqBoY7wqibmEZY%2BCo0c3bCZ%2Bz36lS7lCvWsAJJg3Ar3jatyQ2l9%2FNeGc6ORLwvZ5IXydn4CWf4plHE%2FBj8uJCP3nmluOcD8hO9tsMYokuOiNOdYeC3cmeI%2F0oTmpoNdD%2Bz7I4OEzOhWjp0JfwcnP75ZIgSFBG&X-Amz-Signature=77179f582c07c106c22960681963845352ce036dc5597ec2118be27851c24d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHFLXA4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDkdHMtjtDjf7ahiUA4wouAjKZstIoPHNP9JK30B%2Fl11wIhAK%2FtmQEof6jDbnvDhHB3iu05mgPJrvxF%2BjJVuL70tyNAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfZHLPQd2rZJEDH%2F4q3APzW%2BwDlK6lwIqrTB3NGaLr1Q2%2BEJOzL1ZR%2B1Z3EHelEBBC4BJjFvFbfO5DmaM1R2mbSd1k3FNXkntaM9NiOIcu%2BZDxzQ2lc4vlaGY0J%2Bc8ng9mljOS9vwrnbNrKZD0AIMvOf266wT2rfrW95wuZlEhxKdWkIdjDsUX5KdgmBGYrgJgm%2FzvARaVgKD7756s4n6eHXkrMjXQ8rOYCQFv0Z5YZzHn8y%2B78oN6OHJYFxXjA8LcQDp%2BqIPOk4AzYXpIuwzFtUONJBjZuJMdSDRZybYJvWN4T13HCrrfj5DpS5I9JQgwcPPqduF8MXlde0tcNhs7GxBzSLTUQTISsqGx78QThdkvFmszMoT58lectWi%2FDrTO7B4yYFLyDr0SV%2BoiufyxVZiKTSK9upK28%2FTI2%2BZ6uJLAJojefllv%2F6dJAXAA%2B6wAFmPy%2BuVhPlSbDIlwf4xXrArCX6NP5ONVz1tdsgQnGKY6lYxKYFNY1wTQn4XtvxxN%2BS59HV9U0BY%2FxBlswx7P5M8IR2zsdd%2BzhFBruWuUSuI%2F3U%2BhRu8I6i3PSm15Ml4Z6HSpc0iZ1OQaQloHH4t%2Fvh8gr5KbHQDtZf2N5rg%2BDeTJz4MQJbPhk2emBRKvXQ9GyUls7iNVfpAWcDD%2F%2BdLEBjqkAa%2B0%2BAiFQwIczPgd%2Bu3jqCkFmrFlpc8%2FP02kLHnewDW4Zdfv46ngfgkVu4HWTF8TqBoY7wqibmEZY%2BCo0c3bCZ%2Bz36lS7lCvWsAJJg3Ar3jatyQ2l9%2FNeGc6ORLwvZ5IXydn4CWf4plHE%2FBj8uJCP3nmluOcD8hO9tsMYokuOiNOdYeC3cmeI%2F0oTmpoNdD%2Bz7I4OEzOhWjp0JfwcnP75ZIgSFBG&X-Amz-Signature=fce243d1103b65bde2958ccc24212777cc1b82d6f894726d811ddf1097917e97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QUQTN3F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBrYCYS1QdCLDnUymIZq%2FhX3vLMl%2B4YwECUOUEZoN%2FW3AiEAxGVu1Q3%2FzM5Q4uxcaz82JfYz3rRg1Sx25fXs09iOMzcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv5B%2FPVGaGwZTrB9yrcA3LJbqcrJF1kq7CSDGuJIwQtVfCe2mBcDfY8AUL5Z9SXjaZcbDgTw1s6MJ9%2BlPtPyR6S0etTjd3fvC8rvi6K4cJz%2B8m%2Bsg9YFVW1iOGp4VIV4nYGv4v3KrgInvP9UmLo1xcHDLvHooLNqcDHaGvw3AXIcIHBcHvp5Xn2dZrVdYBDE3pyxyH5ZNauqzWUcv9C1K4KLNmpgaoNP6k8A8QBInTW5551HlrOdkZcx%2BvAl5Pj42I4wuayn0LYvS0xD64c8igHS%2FNEBC0KkCmDOk5YJRRbH1sltr68u%2F1WLpk%2BfpvGvOIg1c1nl9AeawhEd2IjG%2B1TXM67u4z%2FkIUNo0oqw0yZODHJFBppJWQPOa0T9Fa5PoFPFNYnkIRXcsmKawLM6PJ91vO7Y233cidOSXW7AApWVyvMTpg4IMAxPF%2FwiEoOzK9XX%2BPv5tyAjHYAoUbB6LbsMRct3jdyB7af%2FsOTTBq6F32BiYe4knPZZ5AWPgoF%2B8BCZvCubTPkn1OLKFDl%2BiKnDu1Mwe5dNkqPShii5W5iWUPbpCQ8sJ6EzmbbYD%2FH3Dr23%2B69QU%2F5%2B8Dtphpfj%2Fjl9pkIk4LxX0g%2F36jwmxfYcx5phGC9%2Fv%2F9waZ1WrGcWS9UTIpbv7hqsM1%2FMOn50sQGOqUBvewAKrBXrhVrC2bcBhLTVndE5STAFmoTWFfX%2BbmUvJIRKj48fu2FAYMMN%2BlgjeUmuVg6lYK1pOnMcD27mSCL61occOa%2BE9iZ%2F2o3dsnPyFDz7lnCLPClZihfXaT9RG6jfNBrDWnbz8qqpZUjnYpUIrZnt7rz9NpQFKilGcvjkGSBVBcoVYkOjlS03d2zN1CXTt3bUwXgmIEHauAyygxVqj13%2BiC8&X-Amz-Signature=1d00c76d45b1789a3f004ff18f4511b634a2ba6c6736d73a1139e40bfe302a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QUQTN3F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBrYCYS1QdCLDnUymIZq%2FhX3vLMl%2B4YwECUOUEZoN%2FW3AiEAxGVu1Q3%2FzM5Q4uxcaz82JfYz3rRg1Sx25fXs09iOMzcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv5B%2FPVGaGwZTrB9yrcA3LJbqcrJF1kq7CSDGuJIwQtVfCe2mBcDfY8AUL5Z9SXjaZcbDgTw1s6MJ9%2BlPtPyR6S0etTjd3fvC8rvi6K4cJz%2B8m%2Bsg9YFVW1iOGp4VIV4nYGv4v3KrgInvP9UmLo1xcHDLvHooLNqcDHaGvw3AXIcIHBcHvp5Xn2dZrVdYBDE3pyxyH5ZNauqzWUcv9C1K4KLNmpgaoNP6k8A8QBInTW5551HlrOdkZcx%2BvAl5Pj42I4wuayn0LYvS0xD64c8igHS%2FNEBC0KkCmDOk5YJRRbH1sltr68u%2F1WLpk%2BfpvGvOIg1c1nl9AeawhEd2IjG%2B1TXM67u4z%2FkIUNo0oqw0yZODHJFBppJWQPOa0T9Fa5PoFPFNYnkIRXcsmKawLM6PJ91vO7Y233cidOSXW7AApWVyvMTpg4IMAxPF%2FwiEoOzK9XX%2BPv5tyAjHYAoUbB6LbsMRct3jdyB7af%2FsOTTBq6F32BiYe4knPZZ5AWPgoF%2B8BCZvCubTPkn1OLKFDl%2BiKnDu1Mwe5dNkqPShii5W5iWUPbpCQ8sJ6EzmbbYD%2FH3Dr23%2B69QU%2F5%2B8Dtphpfj%2Fjl9pkIk4LxX0g%2F36jwmxfYcx5phGC9%2Fv%2F9waZ1WrGcWS9UTIpbv7hqsM1%2FMOn50sQGOqUBvewAKrBXrhVrC2bcBhLTVndE5STAFmoTWFfX%2BbmUvJIRKj48fu2FAYMMN%2BlgjeUmuVg6lYK1pOnMcD27mSCL61occOa%2BE9iZ%2F2o3dsnPyFDz7lnCLPClZihfXaT9RG6jfNBrDWnbz8qqpZUjnYpUIrZnt7rz9NpQFKilGcvjkGSBVBcoVYkOjlS03d2zN1CXTt3bUwXgmIEHauAyygxVqj13%2BiC8&X-Amz-Signature=5589049a07c978d3b048ff4cf1ab5e1ef6db4a71c893991699f70706d696bd2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QUQTN3F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBrYCYS1QdCLDnUymIZq%2FhX3vLMl%2B4YwECUOUEZoN%2FW3AiEAxGVu1Q3%2FzM5Q4uxcaz82JfYz3rRg1Sx25fXs09iOMzcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv5B%2FPVGaGwZTrB9yrcA3LJbqcrJF1kq7CSDGuJIwQtVfCe2mBcDfY8AUL5Z9SXjaZcbDgTw1s6MJ9%2BlPtPyR6S0etTjd3fvC8rvi6K4cJz%2B8m%2Bsg9YFVW1iOGp4VIV4nYGv4v3KrgInvP9UmLo1xcHDLvHooLNqcDHaGvw3AXIcIHBcHvp5Xn2dZrVdYBDE3pyxyH5ZNauqzWUcv9C1K4KLNmpgaoNP6k8A8QBInTW5551HlrOdkZcx%2BvAl5Pj42I4wuayn0LYvS0xD64c8igHS%2FNEBC0KkCmDOk5YJRRbH1sltr68u%2F1WLpk%2BfpvGvOIg1c1nl9AeawhEd2IjG%2B1TXM67u4z%2FkIUNo0oqw0yZODHJFBppJWQPOa0T9Fa5PoFPFNYnkIRXcsmKawLM6PJ91vO7Y233cidOSXW7AApWVyvMTpg4IMAxPF%2FwiEoOzK9XX%2BPv5tyAjHYAoUbB6LbsMRct3jdyB7af%2FsOTTBq6F32BiYe4knPZZ5AWPgoF%2B8BCZvCubTPkn1OLKFDl%2BiKnDu1Mwe5dNkqPShii5W5iWUPbpCQ8sJ6EzmbbYD%2FH3Dr23%2B69QU%2F5%2B8Dtphpfj%2Fjl9pkIk4LxX0g%2F36jwmxfYcx5phGC9%2Fv%2F9waZ1WrGcWS9UTIpbv7hqsM1%2FMOn50sQGOqUBvewAKrBXrhVrC2bcBhLTVndE5STAFmoTWFfX%2BbmUvJIRKj48fu2FAYMMN%2BlgjeUmuVg6lYK1pOnMcD27mSCL61occOa%2BE9iZ%2F2o3dsnPyFDz7lnCLPClZihfXaT9RG6jfNBrDWnbz8qqpZUjnYpUIrZnt7rz9NpQFKilGcvjkGSBVBcoVYkOjlS03d2zN1CXTt3bUwXgmIEHauAyygxVqj13%2BiC8&X-Amz-Signature=07c6a54f2e80c4a94440134bd0f2c2c223586796d3cd9c39b5da6b383635e7a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QUQTN3F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBrYCYS1QdCLDnUymIZq%2FhX3vLMl%2B4YwECUOUEZoN%2FW3AiEAxGVu1Q3%2FzM5Q4uxcaz82JfYz3rRg1Sx25fXs09iOMzcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv5B%2FPVGaGwZTrB9yrcA3LJbqcrJF1kq7CSDGuJIwQtVfCe2mBcDfY8AUL5Z9SXjaZcbDgTw1s6MJ9%2BlPtPyR6S0etTjd3fvC8rvi6K4cJz%2B8m%2Bsg9YFVW1iOGp4VIV4nYGv4v3KrgInvP9UmLo1xcHDLvHooLNqcDHaGvw3AXIcIHBcHvp5Xn2dZrVdYBDE3pyxyH5ZNauqzWUcv9C1K4KLNmpgaoNP6k8A8QBInTW5551HlrOdkZcx%2BvAl5Pj42I4wuayn0LYvS0xD64c8igHS%2FNEBC0KkCmDOk5YJRRbH1sltr68u%2F1WLpk%2BfpvGvOIg1c1nl9AeawhEd2IjG%2B1TXM67u4z%2FkIUNo0oqw0yZODHJFBppJWQPOa0T9Fa5PoFPFNYnkIRXcsmKawLM6PJ91vO7Y233cidOSXW7AApWVyvMTpg4IMAxPF%2FwiEoOzK9XX%2BPv5tyAjHYAoUbB6LbsMRct3jdyB7af%2FsOTTBq6F32BiYe4knPZZ5AWPgoF%2B8BCZvCubTPkn1OLKFDl%2BiKnDu1Mwe5dNkqPShii5W5iWUPbpCQ8sJ6EzmbbYD%2FH3Dr23%2B69QU%2F5%2B8Dtphpfj%2Fjl9pkIk4LxX0g%2F36jwmxfYcx5phGC9%2Fv%2F9waZ1WrGcWS9UTIpbv7hqsM1%2FMOn50sQGOqUBvewAKrBXrhVrC2bcBhLTVndE5STAFmoTWFfX%2BbmUvJIRKj48fu2FAYMMN%2BlgjeUmuVg6lYK1pOnMcD27mSCL61occOa%2BE9iZ%2F2o3dsnPyFDz7lnCLPClZihfXaT9RG6jfNBrDWnbz8qqpZUjnYpUIrZnt7rz9NpQFKilGcvjkGSBVBcoVYkOjlS03d2zN1CXTt3bUwXgmIEHauAyygxVqj13%2BiC8&X-Amz-Signature=56ab9404db1cb1ab4baef1355ccbfb3b6247f4cb4d94dba3d15fb7658fbd12d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QUQTN3F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBrYCYS1QdCLDnUymIZq%2FhX3vLMl%2B4YwECUOUEZoN%2FW3AiEAxGVu1Q3%2FzM5Q4uxcaz82JfYz3rRg1Sx25fXs09iOMzcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv5B%2FPVGaGwZTrB9yrcA3LJbqcrJF1kq7CSDGuJIwQtVfCe2mBcDfY8AUL5Z9SXjaZcbDgTw1s6MJ9%2BlPtPyR6S0etTjd3fvC8rvi6K4cJz%2B8m%2Bsg9YFVW1iOGp4VIV4nYGv4v3KrgInvP9UmLo1xcHDLvHooLNqcDHaGvw3AXIcIHBcHvp5Xn2dZrVdYBDE3pyxyH5ZNauqzWUcv9C1K4KLNmpgaoNP6k8A8QBInTW5551HlrOdkZcx%2BvAl5Pj42I4wuayn0LYvS0xD64c8igHS%2FNEBC0KkCmDOk5YJRRbH1sltr68u%2F1WLpk%2BfpvGvOIg1c1nl9AeawhEd2IjG%2B1TXM67u4z%2FkIUNo0oqw0yZODHJFBppJWQPOa0T9Fa5PoFPFNYnkIRXcsmKawLM6PJ91vO7Y233cidOSXW7AApWVyvMTpg4IMAxPF%2FwiEoOzK9XX%2BPv5tyAjHYAoUbB6LbsMRct3jdyB7af%2FsOTTBq6F32BiYe4knPZZ5AWPgoF%2B8BCZvCubTPkn1OLKFDl%2BiKnDu1Mwe5dNkqPShii5W5iWUPbpCQ8sJ6EzmbbYD%2FH3Dr23%2B69QU%2F5%2B8Dtphpfj%2Fjl9pkIk4LxX0g%2F36jwmxfYcx5phGC9%2Fv%2F9waZ1WrGcWS9UTIpbv7hqsM1%2FMOn50sQGOqUBvewAKrBXrhVrC2bcBhLTVndE5STAFmoTWFfX%2BbmUvJIRKj48fu2FAYMMN%2BlgjeUmuVg6lYK1pOnMcD27mSCL61occOa%2BE9iZ%2F2o3dsnPyFDz7lnCLPClZihfXaT9RG6jfNBrDWnbz8qqpZUjnYpUIrZnt7rz9NpQFKilGcvjkGSBVBcoVYkOjlS03d2zN1CXTt3bUwXgmIEHauAyygxVqj13%2BiC8&X-Amz-Signature=b25811399a883309d95db60371b8630170f2115787c438956174fa848303bc04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QUQTN3F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBrYCYS1QdCLDnUymIZq%2FhX3vLMl%2B4YwECUOUEZoN%2FW3AiEAxGVu1Q3%2FzM5Q4uxcaz82JfYz3rRg1Sx25fXs09iOMzcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv5B%2FPVGaGwZTrB9yrcA3LJbqcrJF1kq7CSDGuJIwQtVfCe2mBcDfY8AUL5Z9SXjaZcbDgTw1s6MJ9%2BlPtPyR6S0etTjd3fvC8rvi6K4cJz%2B8m%2Bsg9YFVW1iOGp4VIV4nYGv4v3KrgInvP9UmLo1xcHDLvHooLNqcDHaGvw3AXIcIHBcHvp5Xn2dZrVdYBDE3pyxyH5ZNauqzWUcv9C1K4KLNmpgaoNP6k8A8QBInTW5551HlrOdkZcx%2BvAl5Pj42I4wuayn0LYvS0xD64c8igHS%2FNEBC0KkCmDOk5YJRRbH1sltr68u%2F1WLpk%2BfpvGvOIg1c1nl9AeawhEd2IjG%2B1TXM67u4z%2FkIUNo0oqw0yZODHJFBppJWQPOa0T9Fa5PoFPFNYnkIRXcsmKawLM6PJ91vO7Y233cidOSXW7AApWVyvMTpg4IMAxPF%2FwiEoOzK9XX%2BPv5tyAjHYAoUbB6LbsMRct3jdyB7af%2FsOTTBq6F32BiYe4knPZZ5AWPgoF%2B8BCZvCubTPkn1OLKFDl%2BiKnDu1Mwe5dNkqPShii5W5iWUPbpCQ8sJ6EzmbbYD%2FH3Dr23%2B69QU%2F5%2B8Dtphpfj%2Fjl9pkIk4LxX0g%2F36jwmxfYcx5phGC9%2Fv%2F9waZ1WrGcWS9UTIpbv7hqsM1%2FMOn50sQGOqUBvewAKrBXrhVrC2bcBhLTVndE5STAFmoTWFfX%2BbmUvJIRKj48fu2FAYMMN%2BlgjeUmuVg6lYK1pOnMcD27mSCL61occOa%2BE9iZ%2F2o3dsnPyFDz7lnCLPClZihfXaT9RG6jfNBrDWnbz8qqpZUjnYpUIrZnt7rz9NpQFKilGcvjkGSBVBcoVYkOjlS03d2zN1CXTt3bUwXgmIEHauAyygxVqj13%2BiC8&X-Amz-Signature=9bd361c96d5347b6934f2fbfcc0f6641b7a74c03eefbb8862b5f0dca16133b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QUQTN3F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBrYCYS1QdCLDnUymIZq%2FhX3vLMl%2B4YwECUOUEZoN%2FW3AiEAxGVu1Q3%2FzM5Q4uxcaz82JfYz3rRg1Sx25fXs09iOMzcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv5B%2FPVGaGwZTrB9yrcA3LJbqcrJF1kq7CSDGuJIwQtVfCe2mBcDfY8AUL5Z9SXjaZcbDgTw1s6MJ9%2BlPtPyR6S0etTjd3fvC8rvi6K4cJz%2B8m%2Bsg9YFVW1iOGp4VIV4nYGv4v3KrgInvP9UmLo1xcHDLvHooLNqcDHaGvw3AXIcIHBcHvp5Xn2dZrVdYBDE3pyxyH5ZNauqzWUcv9C1K4KLNmpgaoNP6k8A8QBInTW5551HlrOdkZcx%2BvAl5Pj42I4wuayn0LYvS0xD64c8igHS%2FNEBC0KkCmDOk5YJRRbH1sltr68u%2F1WLpk%2BfpvGvOIg1c1nl9AeawhEd2IjG%2B1TXM67u4z%2FkIUNo0oqw0yZODHJFBppJWQPOa0T9Fa5PoFPFNYnkIRXcsmKawLM6PJ91vO7Y233cidOSXW7AApWVyvMTpg4IMAxPF%2FwiEoOzK9XX%2BPv5tyAjHYAoUbB6LbsMRct3jdyB7af%2FsOTTBq6F32BiYe4knPZZ5AWPgoF%2B8BCZvCubTPkn1OLKFDl%2BiKnDu1Mwe5dNkqPShii5W5iWUPbpCQ8sJ6EzmbbYD%2FH3Dr23%2B69QU%2F5%2B8Dtphpfj%2Fjl9pkIk4LxX0g%2F36jwmxfYcx5phGC9%2Fv%2F9waZ1WrGcWS9UTIpbv7hqsM1%2FMOn50sQGOqUBvewAKrBXrhVrC2bcBhLTVndE5STAFmoTWFfX%2BbmUvJIRKj48fu2FAYMMN%2BlgjeUmuVg6lYK1pOnMcD27mSCL61occOa%2BE9iZ%2F2o3dsnPyFDz7lnCLPClZihfXaT9RG6jfNBrDWnbz8qqpZUjnYpUIrZnt7rz9NpQFKilGcvjkGSBVBcoVYkOjlS03d2zN1CXTt3bUwXgmIEHauAyygxVqj13%2BiC8&X-Amz-Signature=07c6a54f2e80c4a94440134bd0f2c2c223586796d3cd9c39b5da6b383635e7a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QUQTN3F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBrYCYS1QdCLDnUymIZq%2FhX3vLMl%2B4YwECUOUEZoN%2FW3AiEAxGVu1Q3%2FzM5Q4uxcaz82JfYz3rRg1Sx25fXs09iOMzcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv5B%2FPVGaGwZTrB9yrcA3LJbqcrJF1kq7CSDGuJIwQtVfCe2mBcDfY8AUL5Z9SXjaZcbDgTw1s6MJ9%2BlPtPyR6S0etTjd3fvC8rvi6K4cJz%2B8m%2Bsg9YFVW1iOGp4VIV4nYGv4v3KrgInvP9UmLo1xcHDLvHooLNqcDHaGvw3AXIcIHBcHvp5Xn2dZrVdYBDE3pyxyH5ZNauqzWUcv9C1K4KLNmpgaoNP6k8A8QBInTW5551HlrOdkZcx%2BvAl5Pj42I4wuayn0LYvS0xD64c8igHS%2FNEBC0KkCmDOk5YJRRbH1sltr68u%2F1WLpk%2BfpvGvOIg1c1nl9AeawhEd2IjG%2B1TXM67u4z%2FkIUNo0oqw0yZODHJFBppJWQPOa0T9Fa5PoFPFNYnkIRXcsmKawLM6PJ91vO7Y233cidOSXW7AApWVyvMTpg4IMAxPF%2FwiEoOzK9XX%2BPv5tyAjHYAoUbB6LbsMRct3jdyB7af%2FsOTTBq6F32BiYe4knPZZ5AWPgoF%2B8BCZvCubTPkn1OLKFDl%2BiKnDu1Mwe5dNkqPShii5W5iWUPbpCQ8sJ6EzmbbYD%2FH3Dr23%2B69QU%2F5%2B8Dtphpfj%2Fjl9pkIk4LxX0g%2F36jwmxfYcx5phGC9%2Fv%2F9waZ1WrGcWS9UTIpbv7hqsM1%2FMOn50sQGOqUBvewAKrBXrhVrC2bcBhLTVndE5STAFmoTWFfX%2BbmUvJIRKj48fu2FAYMMN%2BlgjeUmuVg6lYK1pOnMcD27mSCL61occOa%2BE9iZ%2F2o3dsnPyFDz7lnCLPClZihfXaT9RG6jfNBrDWnbz8qqpZUjnYpUIrZnt7rz9NpQFKilGcvjkGSBVBcoVYkOjlS03d2zN1CXTt3bUwXgmIEHauAyygxVqj13%2BiC8&X-Amz-Signature=bbc5029530efc4dd4eabcdeafe9819598650e3865eba6dc3dca930896d09b10b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QUQTN3F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBrYCYS1QdCLDnUymIZq%2FhX3vLMl%2B4YwECUOUEZoN%2FW3AiEAxGVu1Q3%2FzM5Q4uxcaz82JfYz3rRg1Sx25fXs09iOMzcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv5B%2FPVGaGwZTrB9yrcA3LJbqcrJF1kq7CSDGuJIwQtVfCe2mBcDfY8AUL5Z9SXjaZcbDgTw1s6MJ9%2BlPtPyR6S0etTjd3fvC8rvi6K4cJz%2B8m%2Bsg9YFVW1iOGp4VIV4nYGv4v3KrgInvP9UmLo1xcHDLvHooLNqcDHaGvw3AXIcIHBcHvp5Xn2dZrVdYBDE3pyxyH5ZNauqzWUcv9C1K4KLNmpgaoNP6k8A8QBInTW5551HlrOdkZcx%2BvAl5Pj42I4wuayn0LYvS0xD64c8igHS%2FNEBC0KkCmDOk5YJRRbH1sltr68u%2F1WLpk%2BfpvGvOIg1c1nl9AeawhEd2IjG%2B1TXM67u4z%2FkIUNo0oqw0yZODHJFBppJWQPOa0T9Fa5PoFPFNYnkIRXcsmKawLM6PJ91vO7Y233cidOSXW7AApWVyvMTpg4IMAxPF%2FwiEoOzK9XX%2BPv5tyAjHYAoUbB6LbsMRct3jdyB7af%2FsOTTBq6F32BiYe4knPZZ5AWPgoF%2B8BCZvCubTPkn1OLKFDl%2BiKnDu1Mwe5dNkqPShii5W5iWUPbpCQ8sJ6EzmbbYD%2FH3Dr23%2B69QU%2F5%2B8Dtphpfj%2Fjl9pkIk4LxX0g%2F36jwmxfYcx5phGC9%2Fv%2F9waZ1WrGcWS9UTIpbv7hqsM1%2FMOn50sQGOqUBvewAKrBXrhVrC2bcBhLTVndE5STAFmoTWFfX%2BbmUvJIRKj48fu2FAYMMN%2BlgjeUmuVg6lYK1pOnMcD27mSCL61occOa%2BE9iZ%2F2o3dsnPyFDz7lnCLPClZihfXaT9RG6jfNBrDWnbz8qqpZUjnYpUIrZnt7rz9NpQFKilGcvjkGSBVBcoVYkOjlS03d2zN1CXTt3bUwXgmIEHauAyygxVqj13%2BiC8&X-Amz-Signature=7cb026caa63c33cc9351922370f97e6a1513087d345ad21f76c02d288d13c13b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QUQTN3F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBrYCYS1QdCLDnUymIZq%2FhX3vLMl%2B4YwECUOUEZoN%2FW3AiEAxGVu1Q3%2FzM5Q4uxcaz82JfYz3rRg1Sx25fXs09iOMzcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv5B%2FPVGaGwZTrB9yrcA3LJbqcrJF1kq7CSDGuJIwQtVfCe2mBcDfY8AUL5Z9SXjaZcbDgTw1s6MJ9%2BlPtPyR6S0etTjd3fvC8rvi6K4cJz%2B8m%2Bsg9YFVW1iOGp4VIV4nYGv4v3KrgInvP9UmLo1xcHDLvHooLNqcDHaGvw3AXIcIHBcHvp5Xn2dZrVdYBDE3pyxyH5ZNauqzWUcv9C1K4KLNmpgaoNP6k8A8QBInTW5551HlrOdkZcx%2BvAl5Pj42I4wuayn0LYvS0xD64c8igHS%2FNEBC0KkCmDOk5YJRRbH1sltr68u%2F1WLpk%2BfpvGvOIg1c1nl9AeawhEd2IjG%2B1TXM67u4z%2FkIUNo0oqw0yZODHJFBppJWQPOa0T9Fa5PoFPFNYnkIRXcsmKawLM6PJ91vO7Y233cidOSXW7AApWVyvMTpg4IMAxPF%2FwiEoOzK9XX%2BPv5tyAjHYAoUbB6LbsMRct3jdyB7af%2FsOTTBq6F32BiYe4knPZZ5AWPgoF%2B8BCZvCubTPkn1OLKFDl%2BiKnDu1Mwe5dNkqPShii5W5iWUPbpCQ8sJ6EzmbbYD%2FH3Dr23%2B69QU%2F5%2B8Dtphpfj%2Fjl9pkIk4LxX0g%2F36jwmxfYcx5phGC9%2Fv%2F9waZ1WrGcWS9UTIpbv7hqsM1%2FMOn50sQGOqUBvewAKrBXrhVrC2bcBhLTVndE5STAFmoTWFfX%2BbmUvJIRKj48fu2FAYMMN%2BlgjeUmuVg6lYK1pOnMcD27mSCL61occOa%2BE9iZ%2F2o3dsnPyFDz7lnCLPClZihfXaT9RG6jfNBrDWnbz8qqpZUjnYpUIrZnt7rz9NpQFKilGcvjkGSBVBcoVYkOjlS03d2zN1CXTt3bUwXgmIEHauAyygxVqj13%2BiC8&X-Amz-Signature=0a2325c925311f25c676164b7ba80b45b751e7ad43909a28e81d904447ea085e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
