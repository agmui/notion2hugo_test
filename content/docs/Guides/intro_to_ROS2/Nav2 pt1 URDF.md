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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDDZ5GR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHw10frihejvADvCfv1PXAGXm39DH1fKu90OMcXK4NVPAiADjcbxaP9cMol3PshCjn3h1qpyv5NqJ6kLZOi%2BBTlYBCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXXFvJ8r4bRjPxlHVKtwDafIa1gNTZe7phwwj6QSEHIRAQFhdxROrxk7Y%2FmhteVWUmo9yFVMLRfr2JHTMPax5O%2FHiPR6vOxSsRvs7m3A8rLlEJoJqXCfMAXlbFVscXbaj89T4z5dlCWwY%2BKYiSM%2FILBoFMXrZYsOxVz7jgPJYgyMoGi1WAnrtGNurYhIv%2BQnqpsbm6iEHbHRv34q3hbbTgek6jhgLGcX2yLDrwKw9kX0Ng4v91WQIj4KZ%2FQLZDod67AdB94mGMgWl42OYy3O6aG2hFC97ozmcNAoLPKRyefOS5Whjh%2BglTUxl%2FvFKyl4rAPSq9VoXQD7cZJ8xbrAu3wsLDeGonAjAaDtrnTqaSrL2TO2SQC%2BAKRC7phxemP%2BTxBvi45HbUiHLXi9G4mrf7lhIgumYj7iOC3znvVIqSxEGadWoS7YuHHZdBJkp4UKhAnK0cwuMD20UlIY8KepWlJmDwlPT1wTYwSs7%2Bvi3tpRxem8Xwe1AF1x7QSLiPrP2KLbNSZJqWHYE9IvaFi5cmzgCK5SLYNeKf2ir%2B0wu7BSGp5yzrVrJfNVYZ5ySToADHhjQ%2F48mFA18oxGND5KCvwu9Y5zlWj7%2BjI90XiPY3%2F5qeqdFpAGu2WgTt%2BSnUTKvUq747AjGqEwYiWkwldfP0wY6pgHXT8KsAgz8caayaR34IFi1q2wW09E5%2BzWoqYYKUJU5UdgH8otgaolKukENjJKSu0LDJ2jI%2B4dENuS8oeHYUEqLZZrYdCEAkhIUprOY5Sh0kLoR3CnDuYqEOHZQUuQI4SJHG5koZSzv%2BIyruvn9tc8%2FTNWmPlsu3lbfHw9W087Y%2BxDv2hebmO2nGhmWe4%2F7KYl8kUzCnqV9U26QPZMAnuNGb1US7Pfx&X-Amz-Signature=8aa53e3f2fbbcfdbf21d89d7233881e1e3e7e02f19aa271b65bdc5b54e80104b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDDZ5GR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHw10frihejvADvCfv1PXAGXm39DH1fKu90OMcXK4NVPAiADjcbxaP9cMol3PshCjn3h1qpyv5NqJ6kLZOi%2BBTlYBCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXXFvJ8r4bRjPxlHVKtwDafIa1gNTZe7phwwj6QSEHIRAQFhdxROrxk7Y%2FmhteVWUmo9yFVMLRfr2JHTMPax5O%2FHiPR6vOxSsRvs7m3A8rLlEJoJqXCfMAXlbFVscXbaj89T4z5dlCWwY%2BKYiSM%2FILBoFMXrZYsOxVz7jgPJYgyMoGi1WAnrtGNurYhIv%2BQnqpsbm6iEHbHRv34q3hbbTgek6jhgLGcX2yLDrwKw9kX0Ng4v91WQIj4KZ%2FQLZDod67AdB94mGMgWl42OYy3O6aG2hFC97ozmcNAoLPKRyefOS5Whjh%2BglTUxl%2FvFKyl4rAPSq9VoXQD7cZJ8xbrAu3wsLDeGonAjAaDtrnTqaSrL2TO2SQC%2BAKRC7phxemP%2BTxBvi45HbUiHLXi9G4mrf7lhIgumYj7iOC3znvVIqSxEGadWoS7YuHHZdBJkp4UKhAnK0cwuMD20UlIY8KepWlJmDwlPT1wTYwSs7%2Bvi3tpRxem8Xwe1AF1x7QSLiPrP2KLbNSZJqWHYE9IvaFi5cmzgCK5SLYNeKf2ir%2B0wu7BSGp5yzrVrJfNVYZ5ySToADHhjQ%2F48mFA18oxGND5KCvwu9Y5zlWj7%2BjI90XiPY3%2F5qeqdFpAGu2WgTt%2BSnUTKvUq747AjGqEwYiWkwldfP0wY6pgHXT8KsAgz8caayaR34IFi1q2wW09E5%2BzWoqYYKUJU5UdgH8otgaolKukENjJKSu0LDJ2jI%2B4dENuS8oeHYUEqLZZrYdCEAkhIUprOY5Sh0kLoR3CnDuYqEOHZQUuQI4SJHG5koZSzv%2BIyruvn9tc8%2FTNWmPlsu3lbfHw9W087Y%2BxDv2hebmO2nGhmWe4%2F7KYl8kUzCnqV9U26QPZMAnuNGb1US7Pfx&X-Amz-Signature=317c29560776e7814a306e3658b1a99b295c5512e0758b6fda70eb383bac9286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDDZ5GR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHw10frihejvADvCfv1PXAGXm39DH1fKu90OMcXK4NVPAiADjcbxaP9cMol3PshCjn3h1qpyv5NqJ6kLZOi%2BBTlYBCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXXFvJ8r4bRjPxlHVKtwDafIa1gNTZe7phwwj6QSEHIRAQFhdxROrxk7Y%2FmhteVWUmo9yFVMLRfr2JHTMPax5O%2FHiPR6vOxSsRvs7m3A8rLlEJoJqXCfMAXlbFVscXbaj89T4z5dlCWwY%2BKYiSM%2FILBoFMXrZYsOxVz7jgPJYgyMoGi1WAnrtGNurYhIv%2BQnqpsbm6iEHbHRv34q3hbbTgek6jhgLGcX2yLDrwKw9kX0Ng4v91WQIj4KZ%2FQLZDod67AdB94mGMgWl42OYy3O6aG2hFC97ozmcNAoLPKRyefOS5Whjh%2BglTUxl%2FvFKyl4rAPSq9VoXQD7cZJ8xbrAu3wsLDeGonAjAaDtrnTqaSrL2TO2SQC%2BAKRC7phxemP%2BTxBvi45HbUiHLXi9G4mrf7lhIgumYj7iOC3znvVIqSxEGadWoS7YuHHZdBJkp4UKhAnK0cwuMD20UlIY8KepWlJmDwlPT1wTYwSs7%2Bvi3tpRxem8Xwe1AF1x7QSLiPrP2KLbNSZJqWHYE9IvaFi5cmzgCK5SLYNeKf2ir%2B0wu7BSGp5yzrVrJfNVYZ5ySToADHhjQ%2F48mFA18oxGND5KCvwu9Y5zlWj7%2BjI90XiPY3%2F5qeqdFpAGu2WgTt%2BSnUTKvUq747AjGqEwYiWkwldfP0wY6pgHXT8KsAgz8caayaR34IFi1q2wW09E5%2BzWoqYYKUJU5UdgH8otgaolKukENjJKSu0LDJ2jI%2B4dENuS8oeHYUEqLZZrYdCEAkhIUprOY5Sh0kLoR3CnDuYqEOHZQUuQI4SJHG5koZSzv%2BIyruvn9tc8%2FTNWmPlsu3lbfHw9W087Y%2BxDv2hebmO2nGhmWe4%2F7KYl8kUzCnqV9U26QPZMAnuNGb1US7Pfx&X-Amz-Signature=2438b6d3ffce04b25db08034bab87d99b85b099db98a6e215c35596267672c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDDZ5GR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHw10frihejvADvCfv1PXAGXm39DH1fKu90OMcXK4NVPAiADjcbxaP9cMol3PshCjn3h1qpyv5NqJ6kLZOi%2BBTlYBCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXXFvJ8r4bRjPxlHVKtwDafIa1gNTZe7phwwj6QSEHIRAQFhdxROrxk7Y%2FmhteVWUmo9yFVMLRfr2JHTMPax5O%2FHiPR6vOxSsRvs7m3A8rLlEJoJqXCfMAXlbFVscXbaj89T4z5dlCWwY%2BKYiSM%2FILBoFMXrZYsOxVz7jgPJYgyMoGi1WAnrtGNurYhIv%2BQnqpsbm6iEHbHRv34q3hbbTgek6jhgLGcX2yLDrwKw9kX0Ng4v91WQIj4KZ%2FQLZDod67AdB94mGMgWl42OYy3O6aG2hFC97ozmcNAoLPKRyefOS5Whjh%2BglTUxl%2FvFKyl4rAPSq9VoXQD7cZJ8xbrAu3wsLDeGonAjAaDtrnTqaSrL2TO2SQC%2BAKRC7phxemP%2BTxBvi45HbUiHLXi9G4mrf7lhIgumYj7iOC3znvVIqSxEGadWoS7YuHHZdBJkp4UKhAnK0cwuMD20UlIY8KepWlJmDwlPT1wTYwSs7%2Bvi3tpRxem8Xwe1AF1x7QSLiPrP2KLbNSZJqWHYE9IvaFi5cmzgCK5SLYNeKf2ir%2B0wu7BSGp5yzrVrJfNVYZ5ySToADHhjQ%2F48mFA18oxGND5KCvwu9Y5zlWj7%2BjI90XiPY3%2F5qeqdFpAGu2WgTt%2BSnUTKvUq747AjGqEwYiWkwldfP0wY6pgHXT8KsAgz8caayaR34IFi1q2wW09E5%2BzWoqYYKUJU5UdgH8otgaolKukENjJKSu0LDJ2jI%2B4dENuS8oeHYUEqLZZrYdCEAkhIUprOY5Sh0kLoR3CnDuYqEOHZQUuQI4SJHG5koZSzv%2BIyruvn9tc8%2FTNWmPlsu3lbfHw9W087Y%2BxDv2hebmO2nGhmWe4%2F7KYl8kUzCnqV9U26QPZMAnuNGb1US7Pfx&X-Amz-Signature=5fa2bd7179fd0b0370de699ad7b9b4e6a65833a2d6530fc2a9eb74ab2f1f2fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDDZ5GR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHw10frihejvADvCfv1PXAGXm39DH1fKu90OMcXK4NVPAiADjcbxaP9cMol3PshCjn3h1qpyv5NqJ6kLZOi%2BBTlYBCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXXFvJ8r4bRjPxlHVKtwDafIa1gNTZe7phwwj6QSEHIRAQFhdxROrxk7Y%2FmhteVWUmo9yFVMLRfr2JHTMPax5O%2FHiPR6vOxSsRvs7m3A8rLlEJoJqXCfMAXlbFVscXbaj89T4z5dlCWwY%2BKYiSM%2FILBoFMXrZYsOxVz7jgPJYgyMoGi1WAnrtGNurYhIv%2BQnqpsbm6iEHbHRv34q3hbbTgek6jhgLGcX2yLDrwKw9kX0Ng4v91WQIj4KZ%2FQLZDod67AdB94mGMgWl42OYy3O6aG2hFC97ozmcNAoLPKRyefOS5Whjh%2BglTUxl%2FvFKyl4rAPSq9VoXQD7cZJ8xbrAu3wsLDeGonAjAaDtrnTqaSrL2TO2SQC%2BAKRC7phxemP%2BTxBvi45HbUiHLXi9G4mrf7lhIgumYj7iOC3znvVIqSxEGadWoS7YuHHZdBJkp4UKhAnK0cwuMD20UlIY8KepWlJmDwlPT1wTYwSs7%2Bvi3tpRxem8Xwe1AF1x7QSLiPrP2KLbNSZJqWHYE9IvaFi5cmzgCK5SLYNeKf2ir%2B0wu7BSGp5yzrVrJfNVYZ5ySToADHhjQ%2F48mFA18oxGND5KCvwu9Y5zlWj7%2BjI90XiPY3%2F5qeqdFpAGu2WgTt%2BSnUTKvUq747AjGqEwYiWkwldfP0wY6pgHXT8KsAgz8caayaR34IFi1q2wW09E5%2BzWoqYYKUJU5UdgH8otgaolKukENjJKSu0LDJ2jI%2B4dENuS8oeHYUEqLZZrYdCEAkhIUprOY5Sh0kLoR3CnDuYqEOHZQUuQI4SJHG5koZSzv%2BIyruvn9tc8%2FTNWmPlsu3lbfHw9W087Y%2BxDv2hebmO2nGhmWe4%2F7KYl8kUzCnqV9U26QPZMAnuNGb1US7Pfx&X-Amz-Signature=100df613644551597f1886f54251c13a3e6967e1ef70709c1c423585fe5b6f0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDDZ5GR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHw10frihejvADvCfv1PXAGXm39DH1fKu90OMcXK4NVPAiADjcbxaP9cMol3PshCjn3h1qpyv5NqJ6kLZOi%2BBTlYBCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXXFvJ8r4bRjPxlHVKtwDafIa1gNTZe7phwwj6QSEHIRAQFhdxROrxk7Y%2FmhteVWUmo9yFVMLRfr2JHTMPax5O%2FHiPR6vOxSsRvs7m3A8rLlEJoJqXCfMAXlbFVscXbaj89T4z5dlCWwY%2BKYiSM%2FILBoFMXrZYsOxVz7jgPJYgyMoGi1WAnrtGNurYhIv%2BQnqpsbm6iEHbHRv34q3hbbTgek6jhgLGcX2yLDrwKw9kX0Ng4v91WQIj4KZ%2FQLZDod67AdB94mGMgWl42OYy3O6aG2hFC97ozmcNAoLPKRyefOS5Whjh%2BglTUxl%2FvFKyl4rAPSq9VoXQD7cZJ8xbrAu3wsLDeGonAjAaDtrnTqaSrL2TO2SQC%2BAKRC7phxemP%2BTxBvi45HbUiHLXi9G4mrf7lhIgumYj7iOC3znvVIqSxEGadWoS7YuHHZdBJkp4UKhAnK0cwuMD20UlIY8KepWlJmDwlPT1wTYwSs7%2Bvi3tpRxem8Xwe1AF1x7QSLiPrP2KLbNSZJqWHYE9IvaFi5cmzgCK5SLYNeKf2ir%2B0wu7BSGp5yzrVrJfNVYZ5ySToADHhjQ%2F48mFA18oxGND5KCvwu9Y5zlWj7%2BjI90XiPY3%2F5qeqdFpAGu2WgTt%2BSnUTKvUq747AjGqEwYiWkwldfP0wY6pgHXT8KsAgz8caayaR34IFi1q2wW09E5%2BzWoqYYKUJU5UdgH8otgaolKukENjJKSu0LDJ2jI%2B4dENuS8oeHYUEqLZZrYdCEAkhIUprOY5Sh0kLoR3CnDuYqEOHZQUuQI4SJHG5koZSzv%2BIyruvn9tc8%2FTNWmPlsu3lbfHw9W087Y%2BxDv2hebmO2nGhmWe4%2F7KYl8kUzCnqV9U26QPZMAnuNGb1US7Pfx&X-Amz-Signature=43c3ab586c37106d7002042a37695f40d6f3e5d3d5b7ea5eece53bc33faaa28e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDDZ5GR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHw10frihejvADvCfv1PXAGXm39DH1fKu90OMcXK4NVPAiADjcbxaP9cMol3PshCjn3h1qpyv5NqJ6kLZOi%2BBTlYBCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXXFvJ8r4bRjPxlHVKtwDafIa1gNTZe7phwwj6QSEHIRAQFhdxROrxk7Y%2FmhteVWUmo9yFVMLRfr2JHTMPax5O%2FHiPR6vOxSsRvs7m3A8rLlEJoJqXCfMAXlbFVscXbaj89T4z5dlCWwY%2BKYiSM%2FILBoFMXrZYsOxVz7jgPJYgyMoGi1WAnrtGNurYhIv%2BQnqpsbm6iEHbHRv34q3hbbTgek6jhgLGcX2yLDrwKw9kX0Ng4v91WQIj4KZ%2FQLZDod67AdB94mGMgWl42OYy3O6aG2hFC97ozmcNAoLPKRyefOS5Whjh%2BglTUxl%2FvFKyl4rAPSq9VoXQD7cZJ8xbrAu3wsLDeGonAjAaDtrnTqaSrL2TO2SQC%2BAKRC7phxemP%2BTxBvi45HbUiHLXi9G4mrf7lhIgumYj7iOC3znvVIqSxEGadWoS7YuHHZdBJkp4UKhAnK0cwuMD20UlIY8KepWlJmDwlPT1wTYwSs7%2Bvi3tpRxem8Xwe1AF1x7QSLiPrP2KLbNSZJqWHYE9IvaFi5cmzgCK5SLYNeKf2ir%2B0wu7BSGp5yzrVrJfNVYZ5ySToADHhjQ%2F48mFA18oxGND5KCvwu9Y5zlWj7%2BjI90XiPY3%2F5qeqdFpAGu2WgTt%2BSnUTKvUq747AjGqEwYiWkwldfP0wY6pgHXT8KsAgz8caayaR34IFi1q2wW09E5%2BzWoqYYKUJU5UdgH8otgaolKukENjJKSu0LDJ2jI%2B4dENuS8oeHYUEqLZZrYdCEAkhIUprOY5Sh0kLoR3CnDuYqEOHZQUuQI4SJHG5koZSzv%2BIyruvn9tc8%2FTNWmPlsu3lbfHw9W087Y%2BxDv2hebmO2nGhmWe4%2F7KYl8kUzCnqV9U26QPZMAnuNGb1US7Pfx&X-Amz-Signature=2ddfe4e17ccb20952991ced4570099e28aa9fd615426f05b0ab815b64a7b6e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDDZ5GR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHw10frihejvADvCfv1PXAGXm39DH1fKu90OMcXK4NVPAiADjcbxaP9cMol3PshCjn3h1qpyv5NqJ6kLZOi%2BBTlYBCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXXFvJ8r4bRjPxlHVKtwDafIa1gNTZe7phwwj6QSEHIRAQFhdxROrxk7Y%2FmhteVWUmo9yFVMLRfr2JHTMPax5O%2FHiPR6vOxSsRvs7m3A8rLlEJoJqXCfMAXlbFVscXbaj89T4z5dlCWwY%2BKYiSM%2FILBoFMXrZYsOxVz7jgPJYgyMoGi1WAnrtGNurYhIv%2BQnqpsbm6iEHbHRv34q3hbbTgek6jhgLGcX2yLDrwKw9kX0Ng4v91WQIj4KZ%2FQLZDod67AdB94mGMgWl42OYy3O6aG2hFC97ozmcNAoLPKRyefOS5Whjh%2BglTUxl%2FvFKyl4rAPSq9VoXQD7cZJ8xbrAu3wsLDeGonAjAaDtrnTqaSrL2TO2SQC%2BAKRC7phxemP%2BTxBvi45HbUiHLXi9G4mrf7lhIgumYj7iOC3znvVIqSxEGadWoS7YuHHZdBJkp4UKhAnK0cwuMD20UlIY8KepWlJmDwlPT1wTYwSs7%2Bvi3tpRxem8Xwe1AF1x7QSLiPrP2KLbNSZJqWHYE9IvaFi5cmzgCK5SLYNeKf2ir%2B0wu7BSGp5yzrVrJfNVYZ5ySToADHhjQ%2F48mFA18oxGND5KCvwu9Y5zlWj7%2BjI90XiPY3%2F5qeqdFpAGu2WgTt%2BSnUTKvUq747AjGqEwYiWkwldfP0wY6pgHXT8KsAgz8caayaR34IFi1q2wW09E5%2BzWoqYYKUJU5UdgH8otgaolKukENjJKSu0LDJ2jI%2B4dENuS8oeHYUEqLZZrYdCEAkhIUprOY5Sh0kLoR3CnDuYqEOHZQUuQI4SJHG5koZSzv%2BIyruvn9tc8%2FTNWmPlsu3lbfHw9W087Y%2BxDv2hebmO2nGhmWe4%2F7KYl8kUzCnqV9U26QPZMAnuNGb1US7Pfx&X-Amz-Signature=eb70e75e70e8b4da9342639220b43134b5dc0241cdc720fd6b4d3bba4eff637f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDDZ5GR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHw10frihejvADvCfv1PXAGXm39DH1fKu90OMcXK4NVPAiADjcbxaP9cMol3PshCjn3h1qpyv5NqJ6kLZOi%2BBTlYBCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXXFvJ8r4bRjPxlHVKtwDafIa1gNTZe7phwwj6QSEHIRAQFhdxROrxk7Y%2FmhteVWUmo9yFVMLRfr2JHTMPax5O%2FHiPR6vOxSsRvs7m3A8rLlEJoJqXCfMAXlbFVscXbaj89T4z5dlCWwY%2BKYiSM%2FILBoFMXrZYsOxVz7jgPJYgyMoGi1WAnrtGNurYhIv%2BQnqpsbm6iEHbHRv34q3hbbTgek6jhgLGcX2yLDrwKw9kX0Ng4v91WQIj4KZ%2FQLZDod67AdB94mGMgWl42OYy3O6aG2hFC97ozmcNAoLPKRyefOS5Whjh%2BglTUxl%2FvFKyl4rAPSq9VoXQD7cZJ8xbrAu3wsLDeGonAjAaDtrnTqaSrL2TO2SQC%2BAKRC7phxemP%2BTxBvi45HbUiHLXi9G4mrf7lhIgumYj7iOC3znvVIqSxEGadWoS7YuHHZdBJkp4UKhAnK0cwuMD20UlIY8KepWlJmDwlPT1wTYwSs7%2Bvi3tpRxem8Xwe1AF1x7QSLiPrP2KLbNSZJqWHYE9IvaFi5cmzgCK5SLYNeKf2ir%2B0wu7BSGp5yzrVrJfNVYZ5ySToADHhjQ%2F48mFA18oxGND5KCvwu9Y5zlWj7%2BjI90XiPY3%2F5qeqdFpAGu2WgTt%2BSnUTKvUq747AjGqEwYiWkwldfP0wY6pgHXT8KsAgz8caayaR34IFi1q2wW09E5%2BzWoqYYKUJU5UdgH8otgaolKukENjJKSu0LDJ2jI%2B4dENuS8oeHYUEqLZZrYdCEAkhIUprOY5Sh0kLoR3CnDuYqEOHZQUuQI4SJHG5koZSzv%2BIyruvn9tc8%2FTNWmPlsu3lbfHw9W087Y%2BxDv2hebmO2nGhmWe4%2F7KYl8kUzCnqV9U26QPZMAnuNGb1US7Pfx&X-Amz-Signature=297614cf6a957a76842bb475035e7e4f1322c99a3a558c53b98ed11915b1ca21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDDZ5GR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHw10frihejvADvCfv1PXAGXm39DH1fKu90OMcXK4NVPAiADjcbxaP9cMol3PshCjn3h1qpyv5NqJ6kLZOi%2BBTlYBCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXXFvJ8r4bRjPxlHVKtwDafIa1gNTZe7phwwj6QSEHIRAQFhdxROrxk7Y%2FmhteVWUmo9yFVMLRfr2JHTMPax5O%2FHiPR6vOxSsRvs7m3A8rLlEJoJqXCfMAXlbFVscXbaj89T4z5dlCWwY%2BKYiSM%2FILBoFMXrZYsOxVz7jgPJYgyMoGi1WAnrtGNurYhIv%2BQnqpsbm6iEHbHRv34q3hbbTgek6jhgLGcX2yLDrwKw9kX0Ng4v91WQIj4KZ%2FQLZDod67AdB94mGMgWl42OYy3O6aG2hFC97ozmcNAoLPKRyefOS5Whjh%2BglTUxl%2FvFKyl4rAPSq9VoXQD7cZJ8xbrAu3wsLDeGonAjAaDtrnTqaSrL2TO2SQC%2BAKRC7phxemP%2BTxBvi45HbUiHLXi9G4mrf7lhIgumYj7iOC3znvVIqSxEGadWoS7YuHHZdBJkp4UKhAnK0cwuMD20UlIY8KepWlJmDwlPT1wTYwSs7%2Bvi3tpRxem8Xwe1AF1x7QSLiPrP2KLbNSZJqWHYE9IvaFi5cmzgCK5SLYNeKf2ir%2B0wu7BSGp5yzrVrJfNVYZ5ySToADHhjQ%2F48mFA18oxGND5KCvwu9Y5zlWj7%2BjI90XiPY3%2F5qeqdFpAGu2WgTt%2BSnUTKvUq747AjGqEwYiWkwldfP0wY6pgHXT8KsAgz8caayaR34IFi1q2wW09E5%2BzWoqYYKUJU5UdgH8otgaolKukENjJKSu0LDJ2jI%2B4dENuS8oeHYUEqLZZrYdCEAkhIUprOY5Sh0kLoR3CnDuYqEOHZQUuQI4SJHG5koZSzv%2BIyruvn9tc8%2FTNWmPlsu3lbfHw9W087Y%2BxDv2hebmO2nGhmWe4%2F7KYl8kUzCnqV9U26QPZMAnuNGb1US7Pfx&X-Amz-Signature=5b11ff4f469676d09ad4c193b3d8117b15d4fe950d3f7028e6e4ea96832e14c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634OFPSBS%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE0Wru%2FzMhfFAXS4fVZgFn88L9m0Ua%2BJdXycuTJ%2BuFM0AiEA8PdOxLngZ5jt11mSQ9DqIXZ6rSL2qWraRkfocDhm4h4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFPc%2BJL2dgfDsCP%2BYSrcA7x7Jm5v9kMkklfTxEWEf%2FeHdFG7yiKBQiCoN9WFew0mJvX6iwf5l06DlGV3VJRrMs2wlthWA%2BpjvTfilBmdELkALVoAuuaRedJcwRLApzBI26KxCzkJUtAo36ok4GKVIWax89T3HPaWK7CJ7tjxdZfAjZIY2OSiwEkDuAk1ggZHt%2FvfcioHO0jT8f4m%2FU2ny3iR%2Fs5nTW5O5jByxO5TnE2HbDGRUPpsEdDDiAyedvjzNhGbYeZTqL%2FwQV%2FxO%2BhtW3b%2FzQGIcUTusHvn4wjqHusI%2BQf9siBX0WVOuZbD9CXP1e1bV1W%2BTenZu0RsV5kiA3k2TP2cJNE3IKl0kWRq4x2hcoBHfpelS9ogekwIIo3EVwo62eZz3AF%2FSYtyp7MLqOLVvILgGmIWQOoiG0dS6ffxs1GA3nMBDIdhFg5XuHUo99%2FaIOto8XA6cqdvvRaOdki95CJEhfd2TYKAFc1qNlZkQ9EAFWSydMrdwGpquHW%2Fxr6G7yFuObm%2BI38JWsWYtJvBBSS4K93Kwvb8BsT%2F5vovJ7rAw0P%2BH7c07uWOenN8gSnVYjCtN2tSKK0PUIS4q1aBd%2BKXV2MjPP%2FrEmo4VC6AdJv%2ByQbn3P85j5KH7fz7yg97pQWLNYl8ndp7MKTXz9MGOqUBnj4uupVcWeL4TAOAU586TuAO%2BjhTuyzuWkXwAeIFVD4ZZD2ds2poNGkkmZLlJi9umDGCQDBMOZr0IVXgxI7iEeRWI3IxTighD0bcoawDE%2Fpz8aD0lTWU%2Bsj%2BGUzRicGGNYaAnwf8FAiFnXIfr6GTXtcduR2uqdCG9bT5GGxxqpXyyxu9jMxJFuvO0yL8mI0tTGjwEeAGYBJsIhoYMlHPxUNRkAzX&X-Amz-Signature=26404bbaeaec05382632561b175e20790dba17fc3a7c2fbdb010771c6b13e821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTCQUJZT%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBl2klBvL2%2FxxnvFUP2IajmHOA69qxF1qQYWttA8%2BYu8AiBRPBKLaRAV1wctpzPrpCnBOqjUiXl%2F6VilkIo3MDsxySr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMwut7wZ257jpW%2FX%2FFKtwDPGUOZpwMHHhEr3JB4a4dgulTbuVnrc4qDpu9QbzLl2zaImilvnWEjZhS9KvoG7vSGx%2B7bWBXkzsOhV5oS4DQtqEKQJY9eV8XBqY0QK%2B5FO5YMiWilFI4BSpU7pzFHFy0XyXQVOKsMeiaGai01akUnANhcI58M4xuWp1STqL5vErqD5ZIak1NM%2BFPcn4JsgrEIQxqiUGr5xh4pegXy5gruC17BFo4XhdeU6ZjaMSwDr%2BYmWLnNq4%2FeXFqJBN%2FEqViVyBFyZ2Vto0iZ2Z%2FfaopCE6xQ5DQPOQ6sFjIHxgDyEcMjqIdvQocVxycwodcdctSo5QYBO2iXc%2ByfW8wgOGNKN3hKIRKzKxmLWWP9W%2FC4IDZw7EyQX3Oxfb5tCOnh5Mo%2FtdMYJ2U3zXTsycfBRQ7HGHA9cAzWtSGrB%2BFf6KLuIDb9GeM2Cx9e%2FI5QJzo%2BGtEnzsncM9uLggzl0dP2aoHTaMhWdUvY7%2FPyhZVRK77QOxoAtgOr%2FIMwoX3O3nji2fEf0McZ56sLPHLPJKkhcoRhzbZ2Ei8%2B2SPQOr0xJpA9ngSwG6DBQZc1dIqjQLDMdwQ49yUymG9AvMy%2BHwrUGVm5CWbW0npu8tVHjOYeCEPjE5I5zm0Ou1HORs2YMEwzNTP0wY6pgFXC3ZUkehvLXgOhI5sI8hCFyFZUqZ9Q60UOvSoi9Up09p%2BlO2VunSsNGZL9rysB3ubzoGr7u8Oy7%2FIVdrOcnc4QRmBSN8H59hlcsT1GUoHmsIV31RVqCwGef3RWj5g5Wu6pY%2BraKDtRtd%2Fno6eoe2lTeZxggvM2FwL9c7WbxgshWnj7BmR%2B8vRIYOqC457uxiKJdf8OGFLkYRsK9hVdiAaOAig8fbo&X-Amz-Signature=1bb7522e203dec33c5f3bae994d8acfe906d4100ed63e65dec8a7a6a231863d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL24G573%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIBk%2B0nzeL9IOPNGK5P8BPcqQC6ulIHKtG5FMhZJzjmFjAiEA22arHSkNo%2FLczOVn6tVxPGWs5cdpVp5vJdAhWbVLTEUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDONogDcCZhF3KxJLTircA6UfMW2h%2FAuog29SJwWl%2FwIKjNjYTrOvj%2BNmM4lZljwOrq5lvpUVRt3zY9v8i8OAhjq52cZW9DjRKAVt1V8fyYns0fUWAb2SDb5ONhiTu5348voX3mz9n266Ut6KhcJ7ZZmOHxDmc4ac7h73GJwbofVdt%2BNZm2BmCIJyEykgd%2FoHmmrf4j0i6FvUBbwSZbSpo%2BcIkT%2Flyod8%2FSQ4deC3slMLtxVi%2BDIEUAvSGnGBtFDwreALzqvG8VfMS6wTqgdjQRKT9WOJZIt3Ajwxqpqqsk9ybTEj4yvPmoxJ1oLvPmypxSlcoNx8GG6ZEDLy7Q57K%2FRrv63HaZ8lwWIKi10jkq4S72QdaahxS%2F7W0QxjBiTUp7wdA0O0IEPJJhaJw9TEUYz93vG9gQlEiHmCunlR2QUHf2wF6jeQe1e7JY8q5e%2BUB1ZaWKVM0MDPNDz0QIEtoxnd8kTdEFEbFIab9PG9X6qNleNs9p11wePjwbnPVOVX6PNLNs2dga1JGOVqSpCHM0y2nSZnKIXHYymJ28j10kXlIf4HsmyNdHOqe50PK7WEJOMvyHnWUXgerSjDFSHH9PjMMvFV3s5BaYTvZRGY7V0FQQROkIpPzox3t5AToibCAKMqPg3xO%2BVyPwOSMP7Tz9MGOqUB8c3GiBrIv02ZxpjtwTbKJovPKN1LPSsCP%2B8BWB35oqjAEghop21Acgrm0cdQ4huMKcQ6BlFbRoTkSBvYtvrwRpOM11ONusgjrbjRWpWFWso7XzAsWkZco9M0tWevsArzj4OR4OMXMgupU5SxaKMsRuW9%2FQFntt%2FkUv2fEeP2Mf8btOgCg8jlGlaN%2FXp7p42%2B3WM%2BvjQ3%2Fa8FF012Hix6SF4bJq7o&X-Amz-Signature=fd14855ca56600f2502da829dca322b382ab23a3bf129084a9c0f32889f78c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDDZ5GR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHw10frihejvADvCfv1PXAGXm39DH1fKu90OMcXK4NVPAiADjcbxaP9cMol3PshCjn3h1qpyv5NqJ6kLZOi%2BBTlYBCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXXFvJ8r4bRjPxlHVKtwDafIa1gNTZe7phwwj6QSEHIRAQFhdxROrxk7Y%2FmhteVWUmo9yFVMLRfr2JHTMPax5O%2FHiPR6vOxSsRvs7m3A8rLlEJoJqXCfMAXlbFVscXbaj89T4z5dlCWwY%2BKYiSM%2FILBoFMXrZYsOxVz7jgPJYgyMoGi1WAnrtGNurYhIv%2BQnqpsbm6iEHbHRv34q3hbbTgek6jhgLGcX2yLDrwKw9kX0Ng4v91WQIj4KZ%2FQLZDod67AdB94mGMgWl42OYy3O6aG2hFC97ozmcNAoLPKRyefOS5Whjh%2BglTUxl%2FvFKyl4rAPSq9VoXQD7cZJ8xbrAu3wsLDeGonAjAaDtrnTqaSrL2TO2SQC%2BAKRC7phxemP%2BTxBvi45HbUiHLXi9G4mrf7lhIgumYj7iOC3znvVIqSxEGadWoS7YuHHZdBJkp4UKhAnK0cwuMD20UlIY8KepWlJmDwlPT1wTYwSs7%2Bvi3tpRxem8Xwe1AF1x7QSLiPrP2KLbNSZJqWHYE9IvaFi5cmzgCK5SLYNeKf2ir%2B0wu7BSGp5yzrVrJfNVYZ5ySToADHhjQ%2F48mFA18oxGND5KCvwu9Y5zlWj7%2BjI90XiPY3%2F5qeqdFpAGu2WgTt%2BSnUTKvUq747AjGqEwYiWkwldfP0wY6pgHXT8KsAgz8caayaR34IFi1q2wW09E5%2BzWoqYYKUJU5UdgH8otgaolKukENjJKSu0LDJ2jI%2B4dENuS8oeHYUEqLZZrYdCEAkhIUprOY5Sh0kLoR3CnDuYqEOHZQUuQI4SJHG5koZSzv%2BIyruvn9tc8%2FTNWmPlsu3lbfHw9W087Y%2BxDv2hebmO2nGhmWe4%2F7KYl8kUzCnqV9U26QPZMAnuNGb1US7Pfx&X-Amz-Signature=53991909d7949bd4a5eadb15b985244bc530b040dffb66ad43dbaea50ca6f3e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSEAN23F%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCBGMA5vXCTVGB64DubK8zNcQJ%2BrhuDOOgOj8oiYxY4JQIhAOh%2FfsEyxqHGVX1u4%2Ft1LAB73jB4JHUyDeryVg3zY7PhKv8DCDMQABoMNjM3NDIzMTgzODA1IgzuUeHT8rKSoJKP8rMq3ANdt1nzZKd2qsyi0D8R1WIpuG6fajw8FvsfFtgeN6tDGOYEDdrp2x03dY9XPxWDk6BqXLdKdsVc0QfgbsMoXqTCIHXNdAPPcZlQy28OuvirnsEmw5NsgvU2dzJttT6boLTGl2qKCjQpuh%2FhK3A2f%2FO7cGf8%2FCexq%2BqJwY5vo27AHSEdqh3pAXgzFtp9yqZwvJAazz6ohklKpYI9GrKLAmXCLDoIeX6081045yDV7dsdMMR4G3NxDAHCdlg2BwhwKEWkARo5CG0iCzkX39rINwqifbZEMDq8M6myrqamHYRLAWVSOstrYqVynwpqRY1LOIu1iZkt53V0%2B7LpN%2BZtItLLhcMBx8bpiaU7bRGqabt7%2FAOBXOzgeNSASJPWTSs2kdY0d11LKlddCWQ%2FUahha0FXgkYj1PhdF5PAqQ8LDG8lBkAL0evKbOvk6VMN0n4IRWB7XHCJnDFieJ6magSrcO4QmrsGdjSh1MgfT140u1jSfauitYosOfeH%2FKhPJoycK%2B7JyrAY6ZyIvEr%2B9IYDO%2Bcpkl9EQ3BmvJKXN4HbaJCEuViVi2Bq5DtU5RM8leViD%2FaxXdfYTerCaqycchPmqi3DaI20chlySFoZc3lsu5WOEe2b5pG%2F1NtJbKAAlzC618%2FTBjqkAWOJFq5cZJpXrNXh9aTlYmijKl4eJ%2F7WkOlUYmnXlYNu%2BeBV2YPjEUn58lCrUG5%2Bq6l8wec%2FonpmbO219voZ9Bfz046J94H54dKLY7maZoBXvgqEon49umHytEYi0VTMsxVP4bZk1PxGNNNxFTGecXEq5TueToyrqePARhP%2F4CdWeQShJ5z6Xc73RjGpOpiSe4bImQKherC2WOINi6uWE2ReRYtr&X-Amz-Signature=b871d5033bd2b05efb55da99030c746654b2a8e271fbc4ff5ae4884f43cc39cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDDZ5GR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHw10frihejvADvCfv1PXAGXm39DH1fKu90OMcXK4NVPAiADjcbxaP9cMol3PshCjn3h1qpyv5NqJ6kLZOi%2BBTlYBCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXXFvJ8r4bRjPxlHVKtwDafIa1gNTZe7phwwj6QSEHIRAQFhdxROrxk7Y%2FmhteVWUmo9yFVMLRfr2JHTMPax5O%2FHiPR6vOxSsRvs7m3A8rLlEJoJqXCfMAXlbFVscXbaj89T4z5dlCWwY%2BKYiSM%2FILBoFMXrZYsOxVz7jgPJYgyMoGi1WAnrtGNurYhIv%2BQnqpsbm6iEHbHRv34q3hbbTgek6jhgLGcX2yLDrwKw9kX0Ng4v91WQIj4KZ%2FQLZDod67AdB94mGMgWl42OYy3O6aG2hFC97ozmcNAoLPKRyefOS5Whjh%2BglTUxl%2FvFKyl4rAPSq9VoXQD7cZJ8xbrAu3wsLDeGonAjAaDtrnTqaSrL2TO2SQC%2BAKRC7phxemP%2BTxBvi45HbUiHLXi9G4mrf7lhIgumYj7iOC3znvVIqSxEGadWoS7YuHHZdBJkp4UKhAnK0cwuMD20UlIY8KepWlJmDwlPT1wTYwSs7%2Bvi3tpRxem8Xwe1AF1x7QSLiPrP2KLbNSZJqWHYE9IvaFi5cmzgCK5SLYNeKf2ir%2B0wu7BSGp5yzrVrJfNVYZ5ySToADHhjQ%2F48mFA18oxGND5KCvwu9Y5zlWj7%2BjI90XiPY3%2F5qeqdFpAGu2WgTt%2BSnUTKvUq747AjGqEwYiWkwldfP0wY6pgHXT8KsAgz8caayaR34IFi1q2wW09E5%2BzWoqYYKUJU5UdgH8otgaolKukENjJKSu0LDJ2jI%2B4dENuS8oeHYUEqLZZrYdCEAkhIUprOY5Sh0kLoR3CnDuYqEOHZQUuQI4SJHG5koZSzv%2BIyruvn9tc8%2FTNWmPlsu3lbfHw9W087Y%2BxDv2hebmO2nGhmWe4%2F7KYl8kUzCnqV9U26QPZMAnuNGb1US7Pfx&X-Amz-Signature=f1fdd470490d60bea41aa35fef77ea2f7b84bd4171680d039cc819e8aa52ad2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEPVHV2S%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHY4rNQB16ib0N9dfBS3pM6EeU1NUKcS%2B%2F1KjMVuFD8YAiEA8n23E0k4cMON7Bkcn8CxV1MyI7jRnJB9hAnueqdB%2Ftsq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDJLt6BWPUA%2BGEpz%2BJCrcA4blL44AwP4SBPq4mQsExZ8kmgvOgU6Z3cckMQULnrmTHyPyIN0ze4XqLg2h7DA4zXsUmdHIQUVUaeTmCLXb0d8mznOxHAt7dRUtMZw8AM3QwyFAT2094VVpVnQ96pS%2BQAZ%2Fc040MdLyR%2FTr5alcnQqu%2FLFgrMCm9jPFxL5KftoBFp%2FAdKEdxsndxdqT9bldKLuoXSNQgWxyHtiTn9GT4GqtVELuIs%2B%2BzIRYpsTrRB9ba9eFpsaRmeJIIpKRjNWdKCmHeQSI%2BlF7K9PLxh0L5h90CYQZbTGxh3i5u787OGtud3s9WdjWsdPhnVtwrrsWg4Q9XEKw5b7kKRMP2J4xvNUWrXQD3h9wZgrVHdhCFxeAxT1IlxISCCy1Jo0XocIoF258ux81a8P5DiyWDLaCZZ3Y1oPlesa0Bv1x4kUReOmwLloptaezQzitSfb8IEJIDOqedq3U8qi%2F2aR4i1PFdMUIZl2V3hXIWorvU1FWDGWa3oAusZ6mqZxWAyBXM0PAsbYHdvQl%2FWJD8MhROSclQpeBi%2FTycp%2FZLdra2xg2hTTz72R5uMInJmQ1Teo%2FJQWM203iCHoFyTtnjKISraC06kTiEAKlAwk3CRK8ujOrnHnyr%2BGBirJ8wup7HlxQMKXUz9MGOqUBmYorUgBKgPDsU2GuwnY5OdCAIVfKid5LBo928OnFeVvZt%2F7HRW%2B%2F5iDLfd86ukpbOCdRUQXuW4bOTc2YAD8ClZ6WN9%2B0JwMNxm91DEp40oFoFN3rXHPMeX2xstQqkppelquZ7ICa%2Bzv4A2ltVxqGfyqAdi1Xm1mH9MO3DxO3YylU85sj01H%2Ftxn6afCsMTkTu1Ull97Av1omK5J3ttV1fW8dlMiO&X-Amz-Signature=b191e44cf310da7942c560759b9bcca3e2af6209cca4d2be9d4b110b0f2bec66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDDZ5GR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHw10frihejvADvCfv1PXAGXm39DH1fKu90OMcXK4NVPAiADjcbxaP9cMol3PshCjn3h1qpyv5NqJ6kLZOi%2BBTlYBCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXXFvJ8r4bRjPxlHVKtwDafIa1gNTZe7phwwj6QSEHIRAQFhdxROrxk7Y%2FmhteVWUmo9yFVMLRfr2JHTMPax5O%2FHiPR6vOxSsRvs7m3A8rLlEJoJqXCfMAXlbFVscXbaj89T4z5dlCWwY%2BKYiSM%2FILBoFMXrZYsOxVz7jgPJYgyMoGi1WAnrtGNurYhIv%2BQnqpsbm6iEHbHRv34q3hbbTgek6jhgLGcX2yLDrwKw9kX0Ng4v91WQIj4KZ%2FQLZDod67AdB94mGMgWl42OYy3O6aG2hFC97ozmcNAoLPKRyefOS5Whjh%2BglTUxl%2FvFKyl4rAPSq9VoXQD7cZJ8xbrAu3wsLDeGonAjAaDtrnTqaSrL2TO2SQC%2BAKRC7phxemP%2BTxBvi45HbUiHLXi9G4mrf7lhIgumYj7iOC3znvVIqSxEGadWoS7YuHHZdBJkp4UKhAnK0cwuMD20UlIY8KepWlJmDwlPT1wTYwSs7%2Bvi3tpRxem8Xwe1AF1x7QSLiPrP2KLbNSZJqWHYE9IvaFi5cmzgCK5SLYNeKf2ir%2B0wu7BSGp5yzrVrJfNVYZ5ySToADHhjQ%2F48mFA18oxGND5KCvwu9Y5zlWj7%2BjI90XiPY3%2F5qeqdFpAGu2WgTt%2BSnUTKvUq747AjGqEwYiWkwldfP0wY6pgHXT8KsAgz8caayaR34IFi1q2wW09E5%2BzWoqYYKUJU5UdgH8otgaolKukENjJKSu0LDJ2jI%2B4dENuS8oeHYUEqLZZrYdCEAkhIUprOY5Sh0kLoR3CnDuYqEOHZQUuQI4SJHG5koZSzv%2BIyruvn9tc8%2FTNWmPlsu3lbfHw9W087Y%2BxDv2hebmO2nGhmWe4%2F7KYl8kUzCnqV9U26QPZMAnuNGb1US7Pfx&X-Amz-Signature=b538ad0ac7dcb61e538801538804aa7d9aeea534eeff52cc0a1d5d1c06a7febe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VFGXAEW%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEE3jID8SvSWls55U8D9DQmhluux9vzcSwXdJmZgwWhsAiAUe1kyrZ0IAO1qg1r4ubdeGJdAu0XfxAY8V7xNvcjRFyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpktjhL9vxc3YoUeKKtwDPx4T90UUm1KoYVtpW%2FpLSE%2BVUyedJeogICDdGh9r%2BL27bXVd5%2F0egM0FEa5Kax%2FEkKXpI2NhycQSI1V4D7mqr%2FPufaW6xU%2F404XzBxjPhLaPjEvC2Qq9i%2FX8bQHD8eAF%2FSES4vi4ZQF1iT5MT0JeUSb4IaMvlDH49xK1hgrkZdln5jqImoxrytWT2XH%2FrJWgi02JLgLKM4oE3ie8due7gwB%2FWPZMFI4Gc13MJ9WyW%2Fps%2B1TlFj92flgr%2Fu4bAvzjP3B1fR315xZ%2F%2FBU2F0bYyK1Kt6eSqHZRgHVFBxJjtrJkqe6d7O8hAojRUEmCiF2frivHecusYInBcfYA%2FDYGIornygrADsqtiHMIUwxLD3v54fk%2BtjIxC65Mt38bac2eYNUstWkM3KgWVYusOikpac1bla6fGL9sEHMHSc2OdtLkyGvXqhV%2FyM%2Ffv0r%2Bkm2rb%2Fe0PLuu3fr%2B5zDjnVS%2FRgGYxd99iEc08hJH8aL3cEExPkpJuexMh%2BzEYr2MRuaNsoWatm8ln0R1EUsqDKjDIRnUbpKVhTN%2Bhpzrq3qoNHreavSShGInBmB2WfPUiCJ43X9%2BXBnvUcK0qEbt7%2Fbl%2FS2%2Fm9fxfpq7RyA4%2B5%2BwXtHSYRKZ7EO3NVYOCmowlNfP0wY6pgFE%2Bm0n3ei0arIFeDVRP%2FfCcMPb5d7JPFqxakb922luWQLYSbag4cfEp%2FLVd7OSWGY0C4aLtSQHmaHRq%2FmPjqpjHlS4MN0FlTDzqQM5x6uVCAy5ymGNl%2F3BDCh24V5dwG71wNj2RUOcI6e%2B10Fan34MA3wnlsI1m7yiO%2BDBdrFX%2BoBZDPtBZxIINHxZuvsY6cFwk2pY8Ss%2BGAcvrUQ86NvnKgAFrhJL&X-Amz-Signature=e59ccc6c7fae740d9ea5850c0cf2a4899faa230fdce09b6201579deb8f773b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDDZ5GR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHw10frihejvADvCfv1PXAGXm39DH1fKu90OMcXK4NVPAiADjcbxaP9cMol3PshCjn3h1qpyv5NqJ6kLZOi%2BBTlYBCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXXFvJ8r4bRjPxlHVKtwDafIa1gNTZe7phwwj6QSEHIRAQFhdxROrxk7Y%2FmhteVWUmo9yFVMLRfr2JHTMPax5O%2FHiPR6vOxSsRvs7m3A8rLlEJoJqXCfMAXlbFVscXbaj89T4z5dlCWwY%2BKYiSM%2FILBoFMXrZYsOxVz7jgPJYgyMoGi1WAnrtGNurYhIv%2BQnqpsbm6iEHbHRv34q3hbbTgek6jhgLGcX2yLDrwKw9kX0Ng4v91WQIj4KZ%2FQLZDod67AdB94mGMgWl42OYy3O6aG2hFC97ozmcNAoLPKRyefOS5Whjh%2BglTUxl%2FvFKyl4rAPSq9VoXQD7cZJ8xbrAu3wsLDeGonAjAaDtrnTqaSrL2TO2SQC%2BAKRC7phxemP%2BTxBvi45HbUiHLXi9G4mrf7lhIgumYj7iOC3znvVIqSxEGadWoS7YuHHZdBJkp4UKhAnK0cwuMD20UlIY8KepWlJmDwlPT1wTYwSs7%2Bvi3tpRxem8Xwe1AF1x7QSLiPrP2KLbNSZJqWHYE9IvaFi5cmzgCK5SLYNeKf2ir%2B0wu7BSGp5yzrVrJfNVYZ5ySToADHhjQ%2F48mFA18oxGND5KCvwu9Y5zlWj7%2BjI90XiPY3%2F5qeqdFpAGu2WgTt%2BSnUTKvUq747AjGqEwYiWkwldfP0wY6pgHXT8KsAgz8caayaR34IFi1q2wW09E5%2BzWoqYYKUJU5UdgH8otgaolKukENjJKSu0LDJ2jI%2B4dENuS8oeHYUEqLZZrYdCEAkhIUprOY5Sh0kLoR3CnDuYqEOHZQUuQI4SJHG5koZSzv%2BIyruvn9tc8%2FTNWmPlsu3lbfHw9W087Y%2BxDv2hebmO2nGhmWe4%2F7KYl8kUzCnqV9U26QPZMAnuNGb1US7Pfx&X-Amz-Signature=8876fdc3d5e53c74c5bfbb855fb55b3bf23a5fde208f8cad215581feda9afbc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XVNCOEC%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIB3tnDdAZ%2FPpfERR%2BUs9%2BjH5OZQ9E%2FGh5Rqz3pSzEd1xAiAh5yE33wO5wG4hXc38hNDRxp6yF1aNgG7ceJZbjJerNir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMsCLSm7bKWtl18chaKtwDhwIefvBOYPkzXKPUelXC5Tht9RPvzmYLdZwVdQ9Uh50q0XiZqZHFJ3dyIwPtWTQQ2sFbCOud6Jl6G8%2FaYE2iAv4ohyFA3780ngi6Kag4AvhSo1Ed3wQx%2BJvVlWOAvjjmmWkAMDJZpCINXi69RVKecVj7Vb6TJn8xqF99FbcMdxD8Rfh%2FoZR929eMeUdpieijmdk5KaXLDZxg8IticeoAif%2FiFn%2FVO%2Bnu%2BWAumXtYCBjH3naQIkV9CzB4ZJkW6%2BldcDacAmt4MJW%2FlDD0Ks9PtTDvHxKJ1NPOLQ%2Fz6SFPz1EbSi%2B2A94Qy6q8PMk6yJgs3t%2B7HYDrp37YrQ1FVXe0lBd0CahG5MyHisYtbPO%2BFUeAXPw7DknHOXpVNvKZvoGdX2gCHj4Bc02L9hW8%2FF6i7uHAyJNX07mkkiv3B0mlZd9vBPy9zH%2FpagELZuvGYpoVw%2BpiPnmRONVmySlHdxxq6gerb%2FYjsKlIxEIJiD%2FqrvPGzJ2npJekfu1JnD86YfCNUUW9W7vgTaPvcWUGIAR4ZeumsfVHoBBOGR1WsI7Z8BjjdNTEdzMH58zcUwk%2BQ4glNfnd%2FBXNWde%2BR%2BIVAeC1cwYCxjbKTD7vyWAe8%2ByXAvgFffNpN33eBwx5km4wptfP0wY6pgGnQW5jbSZ38w%2FlC%2FoOWScPL6ly7gNW72ZGijXL7S%2BR2UpopLFXMJXfE3IP0DXPKI7UCTItEIiRl4A1g%2BE%2FRG46Fcy4MvU1dLEVimveYAjuq02ad4c3%2BomBTphj6PJ6dVcS0fzlJkshmmtZVQoHc76lG1zfVureZtC1MwjTh8%2FBNjhqpxiEaZH0m9YkpSMpOmeriUy8UhVK0Ahh0jYzbAVyVUl5d0v%2B&X-Amz-Signature=238499672812d604791d361929976b68610b657fbb7a38915cc6c0a10dae94f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDDZ5GR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHw10frihejvADvCfv1PXAGXm39DH1fKu90OMcXK4NVPAiADjcbxaP9cMol3PshCjn3h1qpyv5NqJ6kLZOi%2BBTlYBCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXXFvJ8r4bRjPxlHVKtwDafIa1gNTZe7phwwj6QSEHIRAQFhdxROrxk7Y%2FmhteVWUmo9yFVMLRfr2JHTMPax5O%2FHiPR6vOxSsRvs7m3A8rLlEJoJqXCfMAXlbFVscXbaj89T4z5dlCWwY%2BKYiSM%2FILBoFMXrZYsOxVz7jgPJYgyMoGi1WAnrtGNurYhIv%2BQnqpsbm6iEHbHRv34q3hbbTgek6jhgLGcX2yLDrwKw9kX0Ng4v91WQIj4KZ%2FQLZDod67AdB94mGMgWl42OYy3O6aG2hFC97ozmcNAoLPKRyefOS5Whjh%2BglTUxl%2FvFKyl4rAPSq9VoXQD7cZJ8xbrAu3wsLDeGonAjAaDtrnTqaSrL2TO2SQC%2BAKRC7phxemP%2BTxBvi45HbUiHLXi9G4mrf7lhIgumYj7iOC3znvVIqSxEGadWoS7YuHHZdBJkp4UKhAnK0cwuMD20UlIY8KepWlJmDwlPT1wTYwSs7%2Bvi3tpRxem8Xwe1AF1x7QSLiPrP2KLbNSZJqWHYE9IvaFi5cmzgCK5SLYNeKf2ir%2B0wu7BSGp5yzrVrJfNVYZ5ySToADHhjQ%2F48mFA18oxGND5KCvwu9Y5zlWj7%2BjI90XiPY3%2F5qeqdFpAGu2WgTt%2BSnUTKvUq747AjGqEwYiWkwldfP0wY6pgHXT8KsAgz8caayaR34IFi1q2wW09E5%2BzWoqYYKUJU5UdgH8otgaolKukENjJKSu0LDJ2jI%2B4dENuS8oeHYUEqLZZrYdCEAkhIUprOY5Sh0kLoR3CnDuYqEOHZQUuQI4SJHG5koZSzv%2BIyruvn9tc8%2FTNWmPlsu3lbfHw9W087Y%2BxDv2hebmO2nGhmWe4%2F7KYl8kUzCnqV9U26QPZMAnuNGb1US7Pfx&X-Amz-Signature=1fc3c151112b01b7973891f2ea51480f8a516ad8158e6296a397e0622074bba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBVCOGYI%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDBm%2Fwp7NLXOy81mwux6xrSuzRvVULNQw9PfCdDT1uWpAiEAyDquUWUL0YZpAuQrLjFWATDRSUEPjiuQpxTOuxM%2B8xYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCXOclXax8Oh9mTuXCrcA6u%2B%2F64i%2BDfYUmhtBku96OYfS8yEX%2BtO8wb3dV8BIViLLT2D0pDcORQss4RALYpkOAcw5uD80fz3ie3ApxIvOTV0UWR1nacMivq81Jo%2BF2HnGqXJrjbC7vZiDi%2FsKBHv4qdXwPvfxw0bpY9n0xRwyqaVMsfiGVhtH9%2B1mw%2BhFMYBEQFLnWJStqkUj8vTPjasat6LzWqp3KCqLaOgm7KxxDWN7kYoNzBL8gYwXnz1bTVk5mS5NFI0Q21JsmLLU9DTliL7xexiXJe5WWOcs%2BJ%2B8EEkbd%2BcqYncxwuAFxXAvFDZGbaW6H3riVFdpnr%2FuM%2F4sxyjyr4fI8IugxUb60fP9RcDWckcEUj0wYldp9A%2BCjybPnpA0HuFJz3JaUPQjBwrMzW34CzfoMRUVTC83Xa5CB1P0jxrb80rbrqJGpESSHGTeHCZosBnloouF4zXhgFVUbVoRki%2B6pLJvY08JXHWdgMbW3TzGgPRg0IwONQ55SYzyAoPdKxFjf%2Btr9jP6FyNW3qJJSngWv5qboz82wATvDA%2BQ6PYVj%2BlnVSI5IkNuefkEdOXye6ALYzd3Rt2OT8RX5UZ5JKdxXfSXM0h2GdyDfiO6i6Pp%2BGpNFjNf5QT7oz3jjRe6SQ3wXQV%2BcASMJLWz9MGOqUBlkyKixamHSGr2NjyBSkVrnENbZK6zypdhtZTjW6K%2BgXBQMvldhHYPZ7PcQofjWxaiTNEDWZ7fbUOIA0FM3GFW%2BfDdlKvmfEEDr1v0VEMiOiLClX%2Fi1iHGs4PYXB8aUFi%2B7XDwRokuBYRbkCGWo0qK0TuvYbrhaJSSNegnt0gHyzrpOFJvAqe50Px9c%2BMhrysER8LfXwYm3bRelxphjXIcUXLra7f&X-Amz-Signature=dbeebec7fc65f74e87d4f23f5872984147dc0c2da8db8e1ee852fd4c192ce70d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652XH7PMW%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDo6LkH35Kn82gGPq0yZzOfkYaHGHFKc6vaCHqSABAcTQIhAKYI8llSHPCLXoWjo7Qy3%2BKhsF1q9NDtmHTcaLhABsNZKv8DCDMQABoMNjM3NDIzMTgzODA1Igzpvkinko9bMx0L3NIq3AMy44%2FURvD968IXmZfikO1qU75hEpJJZoQQtroPseq0ABniTnyIQ1MRrfPsF2zHrLDU3sSJOkSFJUjlZzfXFZf3meTkGj7i%2Fmec2uRx2vMvqNKEgGLdVDhx%2BobdqDRqrrkU1iEHkoYCn1swDAXiozONCWO%2BvyBqzqFfBzUjJzFHbUqgzKAo7lCWO3%2BywuJmXpG58phes0%2BrBUWm3Ah4nigqYSOrdjPm9SI9KSDMbvef%2BzDG%2BSTToCj%2BkZMGgejrdngDXtAjOiqURyRspWote4DHnxVxxc82vjuL7DuhMDOe4vBuXulprBuHh17R%2Fwwrc9EVP0iglUlei2v7s5TiD9pDFSuc3wUGAVRGlrGZU%2FS47xctSoocPEc8Zeayg6lvdfEDAkjL3ac4v10fOn%2B0YmBzpn0Dz%2B9z8RH2OHBxC3a%2B%2BitVyzUGclB2wfmiGrvzrtxKxbDzsvZIw9xWI%2BqShQ23HgWmdmwSPFB8ns6kImfUFJDw8A1Je6797p%2B6960bTbbKiHQEYgIIpJhN6p68nVkY9F1nUNXhWG0DSNrIjrn11Foz7uuLQ3SyDitDs1BOztbGaYOFuWCr%2FXxadYIXxVLyt2JnUn0vTEznu2KWFo%2FEbQ%2FjxTG0Nrom0FiuojD81s%2FTBjqkAenSunyEi5VtLluQ6HQSe5VE%2B7pM4s%2FT1HPYAVDRFYABuLL3MjWpJwojOZlrFKD0aflE%2BclR29nFbLuCPnB9onkgeVrSZrpbKdMi5YMHJDnSK7b5FQrnk5qRPYYpFCE7FPalY9SffO42eQRYUbovscXByxa3F1JaIk%2Fi22A0vc7K9IEukGXs8kjEOY5Fy80BwMLrsPYXrBuDwX9AUllh1zBp7%2BgD&X-Amz-Signature=d47f0866aea9fe447aa32d883ae23997219ec96c4b0ea9e39a4704fd28e4030d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEZIXGWE%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCp7Vu28U0u%2FHrXumthkvS%2FBw8777PgjJI%2FB6JdkBEm7wIhAKptKdP1%2FWzSm40cUkJqgiLjrAO4wbKNCjob7ynuFKGeKv8DCDMQABoMNjM3NDIzMTgzODA1IgzsFaeFsyQryy6bNiUq3AN1kihBudUGRHS2NjyGP4%2BPQ4TxdQtsEhxZsZFZs%2BFLqMp3jxkL8uYhqqL%2BhADDHcvX%2FY6BKpKfQqYZJQm%2Fm1REXIkqHiDhUDmTk12aShWJcMcHnK%2B1uwVHFMcxV5BIeYbbT9aR1RWfBSXZfavK6lu3ZV9MBCFEQA4%2BYOqSftZkWWeEE2y2i5PgEVB9qzg0XVxaNSl%2Fh8%2FszxxPqMjWyT4K5qEQJ9dxOak72xVRCT9fiCINuZdDaSQpaEjCxE5TWA%2B5KQL6TYr%2FY34US1O8ntqPWsGS2%2BtvyxzyrYNHbbnApCSH%2FWFtfiiwKKTWhV7NpxVJ9Ae8DqTDEEofkHb9U8w6oNBZPaG%2Fc3Gp211HoCOMiL8pm%2Bct6KqL41%2FbhB6WKOGgdswRluNJLNY5JXXqWPB5ffRVHNqKtzUHcgrHi1CXcc0Hn1qnG8vDedswA2ht5E120%2BWLSDMdnjR%2BHtXHqYNS5jSawuty9m0kJVO%2BDZSGDQMnOhv7OSrZGVHATHPoQ65zBiyWJQHN%2BVLiRx0%2B4EhJf3kRHVOuHkceBeicD9O7AMGw7Jv6U%2BBTb9IFTd%2FhtDK%2FvIFcLs6Zngpn55Px6bPhAr%2BbZ1%2FE87wFbdUkdKIrcv3Iw97lOhNyyzEvDzCF1M%2FTBjqkAQfdid9Tb2v4R3cGHGlAz7bhMsLw8rfEQIAi1rlJXmDEfA%2BQXmPTa4d%2Fe1PAuQDbPG1dTJ%2FGxIBdSq7%2FPXr2lWrZvoCYghqPcOzOZeszNor0v%2FppUc7Pj%2BQbIS9RtR0ZQNOIAhsf%2FSE2iblx%2F9XHoWzLRaHAx0GX90T%2BTBJxGZLNxnTBZ%2FnuskX5atoD1miyfHnNc0zxOI9mjgWzlGUUZCRGJR9h&X-Amz-Signature=e6023313434053d7153751d051cd427cb19c954e5451d56dcab6086c5605f454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDDZ5GR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHw10frihejvADvCfv1PXAGXm39DH1fKu90OMcXK4NVPAiADjcbxaP9cMol3PshCjn3h1qpyv5NqJ6kLZOi%2BBTlYBCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXXFvJ8r4bRjPxlHVKtwDafIa1gNTZe7phwwj6QSEHIRAQFhdxROrxk7Y%2FmhteVWUmo9yFVMLRfr2JHTMPax5O%2FHiPR6vOxSsRvs7m3A8rLlEJoJqXCfMAXlbFVscXbaj89T4z5dlCWwY%2BKYiSM%2FILBoFMXrZYsOxVz7jgPJYgyMoGi1WAnrtGNurYhIv%2BQnqpsbm6iEHbHRv34q3hbbTgek6jhgLGcX2yLDrwKw9kX0Ng4v91WQIj4KZ%2FQLZDod67AdB94mGMgWl42OYy3O6aG2hFC97ozmcNAoLPKRyefOS5Whjh%2BglTUxl%2FvFKyl4rAPSq9VoXQD7cZJ8xbrAu3wsLDeGonAjAaDtrnTqaSrL2TO2SQC%2BAKRC7phxemP%2BTxBvi45HbUiHLXi9G4mrf7lhIgumYj7iOC3znvVIqSxEGadWoS7YuHHZdBJkp4UKhAnK0cwuMD20UlIY8KepWlJmDwlPT1wTYwSs7%2Bvi3tpRxem8Xwe1AF1x7QSLiPrP2KLbNSZJqWHYE9IvaFi5cmzgCK5SLYNeKf2ir%2B0wu7BSGp5yzrVrJfNVYZ5ySToADHhjQ%2F48mFA18oxGND5KCvwu9Y5zlWj7%2BjI90XiPY3%2F5qeqdFpAGu2WgTt%2BSnUTKvUq747AjGqEwYiWkwldfP0wY6pgHXT8KsAgz8caayaR34IFi1q2wW09E5%2BzWoqYYKUJU5UdgH8otgaolKukENjJKSu0LDJ2jI%2B4dENuS8oeHYUEqLZZrYdCEAkhIUprOY5Sh0kLoR3CnDuYqEOHZQUuQI4SJHG5koZSzv%2BIyruvn9tc8%2FTNWmPlsu3lbfHw9W087Y%2BxDv2hebmO2nGhmWe4%2F7KYl8kUzCnqV9U26QPZMAnuNGb1US7Pfx&X-Amz-Signature=6e305f8a9f62893fd2d07ea2384c3420e13934ad5c275bd8b4b4ebde53421cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDDZ5GR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHw10frihejvADvCfv1PXAGXm39DH1fKu90OMcXK4NVPAiADjcbxaP9cMol3PshCjn3h1qpyv5NqJ6kLZOi%2BBTlYBCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXXFvJ8r4bRjPxlHVKtwDafIa1gNTZe7phwwj6QSEHIRAQFhdxROrxk7Y%2FmhteVWUmo9yFVMLRfr2JHTMPax5O%2FHiPR6vOxSsRvs7m3A8rLlEJoJqXCfMAXlbFVscXbaj89T4z5dlCWwY%2BKYiSM%2FILBoFMXrZYsOxVz7jgPJYgyMoGi1WAnrtGNurYhIv%2BQnqpsbm6iEHbHRv34q3hbbTgek6jhgLGcX2yLDrwKw9kX0Ng4v91WQIj4KZ%2FQLZDod67AdB94mGMgWl42OYy3O6aG2hFC97ozmcNAoLPKRyefOS5Whjh%2BglTUxl%2FvFKyl4rAPSq9VoXQD7cZJ8xbrAu3wsLDeGonAjAaDtrnTqaSrL2TO2SQC%2BAKRC7phxemP%2BTxBvi45HbUiHLXi9G4mrf7lhIgumYj7iOC3znvVIqSxEGadWoS7YuHHZdBJkp4UKhAnK0cwuMD20UlIY8KepWlJmDwlPT1wTYwSs7%2Bvi3tpRxem8Xwe1AF1x7QSLiPrP2KLbNSZJqWHYE9IvaFi5cmzgCK5SLYNeKf2ir%2B0wu7BSGp5yzrVrJfNVYZ5ySToADHhjQ%2F48mFA18oxGND5KCvwu9Y5zlWj7%2BjI90XiPY3%2F5qeqdFpAGu2WgTt%2BSnUTKvUq747AjGqEwYiWkwldfP0wY6pgHXT8KsAgz8caayaR34IFi1q2wW09E5%2BzWoqYYKUJU5UdgH8otgaolKukENjJKSu0LDJ2jI%2B4dENuS8oeHYUEqLZZrYdCEAkhIUprOY5Sh0kLoR3CnDuYqEOHZQUuQI4SJHG5koZSzv%2BIyruvn9tc8%2FTNWmPlsu3lbfHw9W087Y%2BxDv2hebmO2nGhmWe4%2F7KYl8kUzCnqV9U26QPZMAnuNGb1US7Pfx&X-Amz-Signature=8d3d903e046e5603f7083f114b78b133c44842f135d7579c6942cad37c632ce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIOP5RO%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDcHR2WBTzr3%2F8hqRYL2xioTY3YV8qTpoPOvugUProS4AIgHDoOHgtafVvorQ36VYlvgOGvQ6KhfZb9a9NBNmQi7Msq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDICew9iEf9BeizDn%2FircA%2BgBOMpHJewaWyee%2B6U625c%2B40jpcjXrMU%2FypQf0HShb5nnHc6ExwQiydEBGkAwGnlfRAaWyUAXCCOENQURBRKEMfYA2BaoUfnkQgJ0cAyo8XFnqXWV7lHCKKJ5Q96HCwgn%2FzpAinPDeB3qRUHfNGeQbdWXUqaHYCu5dnTjdc%2BC1pKDd4NSiem7838FweEKYU%2BART8Q1HhMSaYL9ZBD8o9JDgZE5RVyb2m6qeQm44YoinDIRLKJjc6U82q6ubhqvTpE7bWw%2FgWXmARgwcP0i29wPEem0E4ZfjEYJRwGUz41rh2ZP4%2Brv9FoHkt6%2B2CGV3eNnj2LayAH6QADEBZ3flCN9sZ%2Fi34eibGErT51AT3WD34VqUZkcxJLllNMCM9dKLWYd0rK9eY6n5uSvIsTlmQbtNmChiey9u%2FlA6jhozWENFPy3tTwJ9SggpuziPrxFHeXFBuXSemDjGmf%2BuSCEBfe5NSfRRL36hSzznaVeKAYg2akAYEjMD%2BbtGtLPRh7tAuBRnY0R1KVMCDH%2Bw1vzp7lz7eJsiicJkZkzkmvyb9Sz6COtnkbUoRA2eC15h8roXvXPxFTEI4OzuQc4pbHXT9wrJnzwwgZHiKpwBXipJzeYGt%2BhmYPirsnThI43MLDXz9MGOqUBPDgEJgqCEnGtQr9mLVVsDfUcf1hdA3hzLosKhGvx2I%2BPzXnilgoXEzwzge8h6bGdqhNFAla0FfpLzSxcNqC%2B9t7HhIXBUUX%2FnFpi8vJbRwCFToQTKdmPc5PufclNewXzdHVdRYwT%2BqUncMM4qcZsciqo4wGVtytpCCVf2e7C8bKuVtN14DhJ72x3o90yOW0AwB8qpU5p1D5OoW%2B0Ld2JNoZfODSm&X-Amz-Signature=2019f730083137c4a749947d0bc6502ef60494e9dbc16ae03bba90179030a1dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIOP5RO%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDcHR2WBTzr3%2F8hqRYL2xioTY3YV8qTpoPOvugUProS4AIgHDoOHgtafVvorQ36VYlvgOGvQ6KhfZb9a9NBNmQi7Msq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDICew9iEf9BeizDn%2FircA%2BgBOMpHJewaWyee%2B6U625c%2B40jpcjXrMU%2FypQf0HShb5nnHc6ExwQiydEBGkAwGnlfRAaWyUAXCCOENQURBRKEMfYA2BaoUfnkQgJ0cAyo8XFnqXWV7lHCKKJ5Q96HCwgn%2FzpAinPDeB3qRUHfNGeQbdWXUqaHYCu5dnTjdc%2BC1pKDd4NSiem7838FweEKYU%2BART8Q1HhMSaYL9ZBD8o9JDgZE5RVyb2m6qeQm44YoinDIRLKJjc6U82q6ubhqvTpE7bWw%2FgWXmARgwcP0i29wPEem0E4ZfjEYJRwGUz41rh2ZP4%2Brv9FoHkt6%2B2CGV3eNnj2LayAH6QADEBZ3flCN9sZ%2Fi34eibGErT51AT3WD34VqUZkcxJLllNMCM9dKLWYd0rK9eY6n5uSvIsTlmQbtNmChiey9u%2FlA6jhozWENFPy3tTwJ9SggpuziPrxFHeXFBuXSemDjGmf%2BuSCEBfe5NSfRRL36hSzznaVeKAYg2akAYEjMD%2BbtGtLPRh7tAuBRnY0R1KVMCDH%2Bw1vzp7lz7eJsiicJkZkzkmvyb9Sz6COtnkbUoRA2eC15h8roXvXPxFTEI4OzuQc4pbHXT9wrJnzwwgZHiKpwBXipJzeYGt%2BhmYPirsnThI43MLDXz9MGOqUBPDgEJgqCEnGtQr9mLVVsDfUcf1hdA3hzLosKhGvx2I%2BPzXnilgoXEzwzge8h6bGdqhNFAla0FfpLzSxcNqC%2B9t7HhIXBUUX%2FnFpi8vJbRwCFToQTKdmPc5PufclNewXzdHVdRYwT%2BqUncMM4qcZsciqo4wGVtytpCCVf2e7C8bKuVtN14DhJ72x3o90yOW0AwB8qpU5p1D5OoW%2B0Ld2JNoZfODSm&X-Amz-Signature=b586d0501d38c14e7657ede8fe36083ffc562378267d7e9d3c9a413fd8b94915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIOP5RO%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDcHR2WBTzr3%2F8hqRYL2xioTY3YV8qTpoPOvugUProS4AIgHDoOHgtafVvorQ36VYlvgOGvQ6KhfZb9a9NBNmQi7Msq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDICew9iEf9BeizDn%2FircA%2BgBOMpHJewaWyee%2B6U625c%2B40jpcjXrMU%2FypQf0HShb5nnHc6ExwQiydEBGkAwGnlfRAaWyUAXCCOENQURBRKEMfYA2BaoUfnkQgJ0cAyo8XFnqXWV7lHCKKJ5Q96HCwgn%2FzpAinPDeB3qRUHfNGeQbdWXUqaHYCu5dnTjdc%2BC1pKDd4NSiem7838FweEKYU%2BART8Q1HhMSaYL9ZBD8o9JDgZE5RVyb2m6qeQm44YoinDIRLKJjc6U82q6ubhqvTpE7bWw%2FgWXmARgwcP0i29wPEem0E4ZfjEYJRwGUz41rh2ZP4%2Brv9FoHkt6%2B2CGV3eNnj2LayAH6QADEBZ3flCN9sZ%2Fi34eibGErT51AT3WD34VqUZkcxJLllNMCM9dKLWYd0rK9eY6n5uSvIsTlmQbtNmChiey9u%2FlA6jhozWENFPy3tTwJ9SggpuziPrxFHeXFBuXSemDjGmf%2BuSCEBfe5NSfRRL36hSzznaVeKAYg2akAYEjMD%2BbtGtLPRh7tAuBRnY0R1KVMCDH%2Bw1vzp7lz7eJsiicJkZkzkmvyb9Sz6COtnkbUoRA2eC15h8roXvXPxFTEI4OzuQc4pbHXT9wrJnzwwgZHiKpwBXipJzeYGt%2BhmYPirsnThI43MLDXz9MGOqUBPDgEJgqCEnGtQr9mLVVsDfUcf1hdA3hzLosKhGvx2I%2BPzXnilgoXEzwzge8h6bGdqhNFAla0FfpLzSxcNqC%2B9t7HhIXBUUX%2FnFpi8vJbRwCFToQTKdmPc5PufclNewXzdHVdRYwT%2BqUncMM4qcZsciqo4wGVtytpCCVf2e7C8bKuVtN14DhJ72x3o90yOW0AwB8qpU5p1D5OoW%2B0Ld2JNoZfODSm&X-Amz-Signature=4dadc9b85e63ee97b3720aadf4e947d147c8be096dc4e6c41932c6f973fe5af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIOP5RO%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDcHR2WBTzr3%2F8hqRYL2xioTY3YV8qTpoPOvugUProS4AIgHDoOHgtafVvorQ36VYlvgOGvQ6KhfZb9a9NBNmQi7Msq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDICew9iEf9BeizDn%2FircA%2BgBOMpHJewaWyee%2B6U625c%2B40jpcjXrMU%2FypQf0HShb5nnHc6ExwQiydEBGkAwGnlfRAaWyUAXCCOENQURBRKEMfYA2BaoUfnkQgJ0cAyo8XFnqXWV7lHCKKJ5Q96HCwgn%2FzpAinPDeB3qRUHfNGeQbdWXUqaHYCu5dnTjdc%2BC1pKDd4NSiem7838FweEKYU%2BART8Q1HhMSaYL9ZBD8o9JDgZE5RVyb2m6qeQm44YoinDIRLKJjc6U82q6ubhqvTpE7bWw%2FgWXmARgwcP0i29wPEem0E4ZfjEYJRwGUz41rh2ZP4%2Brv9FoHkt6%2B2CGV3eNnj2LayAH6QADEBZ3flCN9sZ%2Fi34eibGErT51AT3WD34VqUZkcxJLllNMCM9dKLWYd0rK9eY6n5uSvIsTlmQbtNmChiey9u%2FlA6jhozWENFPy3tTwJ9SggpuziPrxFHeXFBuXSemDjGmf%2BuSCEBfe5NSfRRL36hSzznaVeKAYg2akAYEjMD%2BbtGtLPRh7tAuBRnY0R1KVMCDH%2Bw1vzp7lz7eJsiicJkZkzkmvyb9Sz6COtnkbUoRA2eC15h8roXvXPxFTEI4OzuQc4pbHXT9wrJnzwwgZHiKpwBXipJzeYGt%2BhmYPirsnThI43MLDXz9MGOqUBPDgEJgqCEnGtQr9mLVVsDfUcf1hdA3hzLosKhGvx2I%2BPzXnilgoXEzwzge8h6bGdqhNFAla0FfpLzSxcNqC%2B9t7HhIXBUUX%2FnFpi8vJbRwCFToQTKdmPc5PufclNewXzdHVdRYwT%2BqUncMM4qcZsciqo4wGVtytpCCVf2e7C8bKuVtN14DhJ72x3o90yOW0AwB8qpU5p1D5OoW%2B0Ld2JNoZfODSm&X-Amz-Signature=08ea6012780db0662d8aaed28e2d13d0443df8d87c4f0a1cfc6afc74c041ab9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665534K6BR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCICa5UeX52AwRps29r2UG2vvFRzpZn9BakhEzgFsDP6YDAiEAirkz5rRr2tkTMdQjhHsfXfzkQJG1La3K1gHILMZaJBAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDJ5rpywByq87r1wZKircA9Y8KXJFwh56%2BOLeZcn5lJ34hQj6N%2BkIz9YS%2Ben6rGkLeVn6fyJoBtedVmcLmsvKfQ7ehYhmRDlu%2BK6fHE2QGFRWk0YXg28bMGTG%2BoiSHrQgwQDjZPYK2MqxlQdwoJNdlnUtwCXdrMXiILD6dFYlNA%2Bw86%2FDM%2BPHyS3agkI%2B9mD%2F9Xuw3HJ6Q9D9F57QJxAW3BtB9HyQLZ0nep%2BdKu9tAGgrI%2FPSrApn0iiYj3ldmpFyFQMNJzHkZeg86dGqcldh7ZT9FgtoobosgUzPX9Zl2naFYPm8dKaDz9wEfGNPNeDuCcQY9KELznp4TxC0V7EiVrOD%2BfhBln%2Bho8WJauY4I6ktrQfzGGTu5BBF1xJulPX6BevbBmofFhMeapnhcdElqpszVzQOMzSMhDu0FBdfUd3qZmZ%2Bm5zjCvVssNUXAMyzP0vy1CqaQGR9m1zkd6MF5eEe2MLVz1F5gYfQxG6LLw9mBgCIbSGI7Pc7J5%2BooXWEWFQOSzxqAF%2FpZAO%2Bkrzyz6Ql5r6b3jNriOdAN7TSJyU3Kf2e4aTLWsV8gGoH1D1Nbqw8m82q7XYrRZ1VpSVpIOIQ2EH23kXKP8OBv18r0ZcyXhPrR99IV2N2Q60YdZXgShCZ2vFKxtNotvFmMPPTz9MGOqUBwu1ZYEbaAcS%2B98j9hlz4uDr%2BoDS0dpqLY6gKgHmGDXd8KcuVzenrerM9crjjyj0Mo0X3n1G4aOUwxV%2FpZY7e%2FvcXGkLjFXgJiT7fOloXx4e%2FKQDXd0jPZiU0SCa8AFLKqERE3PO2ahUDyInL1ttS2Bv%2BmvgJ4EinGeNfnBgg6%2BJVH0ZJwZg9Y0uUR8STv%2BWlWI2MBpfSC%2B8wbgE9HRy%2B6tZJT%2BBW&X-Amz-Signature=3b6daa7551b5a68e38825e553bc882927b1ea708fb53779fb300fa1a94872a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIOP5RO%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDcHR2WBTzr3%2F8hqRYL2xioTY3YV8qTpoPOvugUProS4AIgHDoOHgtafVvorQ36VYlvgOGvQ6KhfZb9a9NBNmQi7Msq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDICew9iEf9BeizDn%2FircA%2BgBOMpHJewaWyee%2B6U625c%2B40jpcjXrMU%2FypQf0HShb5nnHc6ExwQiydEBGkAwGnlfRAaWyUAXCCOENQURBRKEMfYA2BaoUfnkQgJ0cAyo8XFnqXWV7lHCKKJ5Q96HCwgn%2FzpAinPDeB3qRUHfNGeQbdWXUqaHYCu5dnTjdc%2BC1pKDd4NSiem7838FweEKYU%2BART8Q1HhMSaYL9ZBD8o9JDgZE5RVyb2m6qeQm44YoinDIRLKJjc6U82q6ubhqvTpE7bWw%2FgWXmARgwcP0i29wPEem0E4ZfjEYJRwGUz41rh2ZP4%2Brv9FoHkt6%2B2CGV3eNnj2LayAH6QADEBZ3flCN9sZ%2Fi34eibGErT51AT3WD34VqUZkcxJLllNMCM9dKLWYd0rK9eY6n5uSvIsTlmQbtNmChiey9u%2FlA6jhozWENFPy3tTwJ9SggpuziPrxFHeXFBuXSemDjGmf%2BuSCEBfe5NSfRRL36hSzznaVeKAYg2akAYEjMD%2BbtGtLPRh7tAuBRnY0R1KVMCDH%2Bw1vzp7lz7eJsiicJkZkzkmvyb9Sz6COtnkbUoRA2eC15h8roXvXPxFTEI4OzuQc4pbHXT9wrJnzwwgZHiKpwBXipJzeYGt%2BhmYPirsnThI43MLDXz9MGOqUBPDgEJgqCEnGtQr9mLVVsDfUcf1hdA3hzLosKhGvx2I%2BPzXnilgoXEzwzge8h6bGdqhNFAla0FfpLzSxcNqC%2B9t7HhIXBUUX%2FnFpi8vJbRwCFToQTKdmPc5PufclNewXzdHVdRYwT%2BqUncMM4qcZsciqo4wGVtytpCCVf2e7C8bKuVtN14DhJ72x3o90yOW0AwB8qpU5p1D5OoW%2B0Ld2JNoZfODSm&X-Amz-Signature=bbcf5fd482b92e0120ae80722addf681ce920b9245341de5983788f924835df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIOP5RO%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDcHR2WBTzr3%2F8hqRYL2xioTY3YV8qTpoPOvugUProS4AIgHDoOHgtafVvorQ36VYlvgOGvQ6KhfZb9a9NBNmQi7Msq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDICew9iEf9BeizDn%2FircA%2BgBOMpHJewaWyee%2B6U625c%2B40jpcjXrMU%2FypQf0HShb5nnHc6ExwQiydEBGkAwGnlfRAaWyUAXCCOENQURBRKEMfYA2BaoUfnkQgJ0cAyo8XFnqXWV7lHCKKJ5Q96HCwgn%2FzpAinPDeB3qRUHfNGeQbdWXUqaHYCu5dnTjdc%2BC1pKDd4NSiem7838FweEKYU%2BART8Q1HhMSaYL9ZBD8o9JDgZE5RVyb2m6qeQm44YoinDIRLKJjc6U82q6ubhqvTpE7bWw%2FgWXmARgwcP0i29wPEem0E4ZfjEYJRwGUz41rh2ZP4%2Brv9FoHkt6%2B2CGV3eNnj2LayAH6QADEBZ3flCN9sZ%2Fi34eibGErT51AT3WD34VqUZkcxJLllNMCM9dKLWYd0rK9eY6n5uSvIsTlmQbtNmChiey9u%2FlA6jhozWENFPy3tTwJ9SggpuziPrxFHeXFBuXSemDjGmf%2BuSCEBfe5NSfRRL36hSzznaVeKAYg2akAYEjMD%2BbtGtLPRh7tAuBRnY0R1KVMCDH%2Bw1vzp7lz7eJsiicJkZkzkmvyb9Sz6COtnkbUoRA2eC15h8roXvXPxFTEI4OzuQc4pbHXT9wrJnzwwgZHiKpwBXipJzeYGt%2BhmYPirsnThI43MLDXz9MGOqUBPDgEJgqCEnGtQr9mLVVsDfUcf1hdA3hzLosKhGvx2I%2BPzXnilgoXEzwzge8h6bGdqhNFAla0FfpLzSxcNqC%2B9t7HhIXBUUX%2FnFpi8vJbRwCFToQTKdmPc5PufclNewXzdHVdRYwT%2BqUncMM4qcZsciqo4wGVtytpCCVf2e7C8bKuVtN14DhJ72x3o90yOW0AwB8qpU5p1D5OoW%2B0Ld2JNoZfODSm&X-Amz-Signature=6657675a3b3b38b2ba1a21b7d9d5f29efa90c4ecd052718e55a2c6fdfd6891c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIOP5RO%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDcHR2WBTzr3%2F8hqRYL2xioTY3YV8qTpoPOvugUProS4AIgHDoOHgtafVvorQ36VYlvgOGvQ6KhfZb9a9NBNmQi7Msq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDICew9iEf9BeizDn%2FircA%2BgBOMpHJewaWyee%2B6U625c%2B40jpcjXrMU%2FypQf0HShb5nnHc6ExwQiydEBGkAwGnlfRAaWyUAXCCOENQURBRKEMfYA2BaoUfnkQgJ0cAyo8XFnqXWV7lHCKKJ5Q96HCwgn%2FzpAinPDeB3qRUHfNGeQbdWXUqaHYCu5dnTjdc%2BC1pKDd4NSiem7838FweEKYU%2BART8Q1HhMSaYL9ZBD8o9JDgZE5RVyb2m6qeQm44YoinDIRLKJjc6U82q6ubhqvTpE7bWw%2FgWXmARgwcP0i29wPEem0E4ZfjEYJRwGUz41rh2ZP4%2Brv9FoHkt6%2B2CGV3eNnj2LayAH6QADEBZ3flCN9sZ%2Fi34eibGErT51AT3WD34VqUZkcxJLllNMCM9dKLWYd0rK9eY6n5uSvIsTlmQbtNmChiey9u%2FlA6jhozWENFPy3tTwJ9SggpuziPrxFHeXFBuXSemDjGmf%2BuSCEBfe5NSfRRL36hSzznaVeKAYg2akAYEjMD%2BbtGtLPRh7tAuBRnY0R1KVMCDH%2Bw1vzp7lz7eJsiicJkZkzkmvyb9Sz6COtnkbUoRA2eC15h8roXvXPxFTEI4OzuQc4pbHXT9wrJnzwwgZHiKpwBXipJzeYGt%2BhmYPirsnThI43MLDXz9MGOqUBPDgEJgqCEnGtQr9mLVVsDfUcf1hdA3hzLosKhGvx2I%2BPzXnilgoXEzwzge8h6bGdqhNFAla0FfpLzSxcNqC%2B9t7HhIXBUUX%2FnFpi8vJbRwCFToQTKdmPc5PufclNewXzdHVdRYwT%2BqUncMM4qcZsciqo4wGVtytpCCVf2e7C8bKuVtN14DhJ72x3o90yOW0AwB8qpU5p1D5OoW%2B0Ld2JNoZfODSm&X-Amz-Signature=4dadc9b85e63ee97b3720aadf4e947d147c8be096dc4e6c41932c6f973fe5af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIOP5RO%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDcHR2WBTzr3%2F8hqRYL2xioTY3YV8qTpoPOvugUProS4AIgHDoOHgtafVvorQ36VYlvgOGvQ6KhfZb9a9NBNmQi7Msq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDICew9iEf9BeizDn%2FircA%2BgBOMpHJewaWyee%2B6U625c%2B40jpcjXrMU%2FypQf0HShb5nnHc6ExwQiydEBGkAwGnlfRAaWyUAXCCOENQURBRKEMfYA2BaoUfnkQgJ0cAyo8XFnqXWV7lHCKKJ5Q96HCwgn%2FzpAinPDeB3qRUHfNGeQbdWXUqaHYCu5dnTjdc%2BC1pKDd4NSiem7838FweEKYU%2BART8Q1HhMSaYL9ZBD8o9JDgZE5RVyb2m6qeQm44YoinDIRLKJjc6U82q6ubhqvTpE7bWw%2FgWXmARgwcP0i29wPEem0E4ZfjEYJRwGUz41rh2ZP4%2Brv9FoHkt6%2B2CGV3eNnj2LayAH6QADEBZ3flCN9sZ%2Fi34eibGErT51AT3WD34VqUZkcxJLllNMCM9dKLWYd0rK9eY6n5uSvIsTlmQbtNmChiey9u%2FlA6jhozWENFPy3tTwJ9SggpuziPrxFHeXFBuXSemDjGmf%2BuSCEBfe5NSfRRL36hSzznaVeKAYg2akAYEjMD%2BbtGtLPRh7tAuBRnY0R1KVMCDH%2Bw1vzp7lz7eJsiicJkZkzkmvyb9Sz6COtnkbUoRA2eC15h8roXvXPxFTEI4OzuQc4pbHXT9wrJnzwwgZHiKpwBXipJzeYGt%2BhmYPirsnThI43MLDXz9MGOqUBPDgEJgqCEnGtQr9mLVVsDfUcf1hdA3hzLosKhGvx2I%2BPzXnilgoXEzwzge8h6bGdqhNFAla0FfpLzSxcNqC%2B9t7HhIXBUUX%2FnFpi8vJbRwCFToQTKdmPc5PufclNewXzdHVdRYwT%2BqUncMM4qcZsciqo4wGVtytpCCVf2e7C8bKuVtN14DhJ72x3o90yOW0AwB8qpU5p1D5OoW%2B0Ld2JNoZfODSm&X-Amz-Signature=c8004c2ca76fa2dbf3cb51c526776de43aaa97e67697de8fc7f77f94030fe5a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIOP5RO%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDcHR2WBTzr3%2F8hqRYL2xioTY3YV8qTpoPOvugUProS4AIgHDoOHgtafVvorQ36VYlvgOGvQ6KhfZb9a9NBNmQi7Msq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDICew9iEf9BeizDn%2FircA%2BgBOMpHJewaWyee%2B6U625c%2B40jpcjXrMU%2FypQf0HShb5nnHc6ExwQiydEBGkAwGnlfRAaWyUAXCCOENQURBRKEMfYA2BaoUfnkQgJ0cAyo8XFnqXWV7lHCKKJ5Q96HCwgn%2FzpAinPDeB3qRUHfNGeQbdWXUqaHYCu5dnTjdc%2BC1pKDd4NSiem7838FweEKYU%2BART8Q1HhMSaYL9ZBD8o9JDgZE5RVyb2m6qeQm44YoinDIRLKJjc6U82q6ubhqvTpE7bWw%2FgWXmARgwcP0i29wPEem0E4ZfjEYJRwGUz41rh2ZP4%2Brv9FoHkt6%2B2CGV3eNnj2LayAH6QADEBZ3flCN9sZ%2Fi34eibGErT51AT3WD34VqUZkcxJLllNMCM9dKLWYd0rK9eY6n5uSvIsTlmQbtNmChiey9u%2FlA6jhozWENFPy3tTwJ9SggpuziPrxFHeXFBuXSemDjGmf%2BuSCEBfe5NSfRRL36hSzznaVeKAYg2akAYEjMD%2BbtGtLPRh7tAuBRnY0R1KVMCDH%2Bw1vzp7lz7eJsiicJkZkzkmvyb9Sz6COtnkbUoRA2eC15h8roXvXPxFTEI4OzuQc4pbHXT9wrJnzwwgZHiKpwBXipJzeYGt%2BhmYPirsnThI43MLDXz9MGOqUBPDgEJgqCEnGtQr9mLVVsDfUcf1hdA3hzLosKhGvx2I%2BPzXnilgoXEzwzge8h6bGdqhNFAla0FfpLzSxcNqC%2B9t7HhIXBUUX%2FnFpi8vJbRwCFToQTKdmPc5PufclNewXzdHVdRYwT%2BqUncMM4qcZsciqo4wGVtytpCCVf2e7C8bKuVtN14DhJ72x3o90yOW0AwB8qpU5p1D5OoW%2B0Ld2JNoZfODSm&X-Amz-Signature=3f9a8dbf76f0bbb44c0632428e6b442df922e0981637cb1fe676910029a9990f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIOP5RO%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDcHR2WBTzr3%2F8hqRYL2xioTY3YV8qTpoPOvugUProS4AIgHDoOHgtafVvorQ36VYlvgOGvQ6KhfZb9a9NBNmQi7Msq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDICew9iEf9BeizDn%2FircA%2BgBOMpHJewaWyee%2B6U625c%2B40jpcjXrMU%2FypQf0HShb5nnHc6ExwQiydEBGkAwGnlfRAaWyUAXCCOENQURBRKEMfYA2BaoUfnkQgJ0cAyo8XFnqXWV7lHCKKJ5Q96HCwgn%2FzpAinPDeB3qRUHfNGeQbdWXUqaHYCu5dnTjdc%2BC1pKDd4NSiem7838FweEKYU%2BART8Q1HhMSaYL9ZBD8o9JDgZE5RVyb2m6qeQm44YoinDIRLKJjc6U82q6ubhqvTpE7bWw%2FgWXmARgwcP0i29wPEem0E4ZfjEYJRwGUz41rh2ZP4%2Brv9FoHkt6%2B2CGV3eNnj2LayAH6QADEBZ3flCN9sZ%2Fi34eibGErT51AT3WD34VqUZkcxJLllNMCM9dKLWYd0rK9eY6n5uSvIsTlmQbtNmChiey9u%2FlA6jhozWENFPy3tTwJ9SggpuziPrxFHeXFBuXSemDjGmf%2BuSCEBfe5NSfRRL36hSzznaVeKAYg2akAYEjMD%2BbtGtLPRh7tAuBRnY0R1KVMCDH%2Bw1vzp7lz7eJsiicJkZkzkmvyb9Sz6COtnkbUoRA2eC15h8roXvXPxFTEI4OzuQc4pbHXT9wrJnzwwgZHiKpwBXipJzeYGt%2BhmYPirsnThI43MLDXz9MGOqUBPDgEJgqCEnGtQr9mLVVsDfUcf1hdA3hzLosKhGvx2I%2BPzXnilgoXEzwzge8h6bGdqhNFAla0FfpLzSxcNqC%2B9t7HhIXBUUX%2FnFpi8vJbRwCFToQTKdmPc5PufclNewXzdHVdRYwT%2BqUncMM4qcZsciqo4wGVtytpCCVf2e7C8bKuVtN14DhJ72x3o90yOW0AwB8qpU5p1D5OoW%2B0Ld2JNoZfODSm&X-Amz-Signature=c0d42d11e3b936e0800643d1055969b6626adadef9240a1200c503245e7e0ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


