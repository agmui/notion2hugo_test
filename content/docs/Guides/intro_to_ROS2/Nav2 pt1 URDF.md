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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLQC2EQ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG7USK0z2lszq%2B%2BFz95mFCEohoCe3IA%2BSHeX0%2F%2FgStxDAiAWnZw1wg%2FuVnpej2OhiCrqdZ%2FmgfzLVvuqGLih2IUV7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMMmeyEz5thgJysnbfKtwD%2FsroK5xgT3qMI0A%2FlJZaWkatEkB9F%2Fw4S0uT3gMEU7p4mVbHfrNrTgHFzPwjEvm5%2F91E1WqSQqsDFGfpEeY26v%2BGJ7MGpQBiL1tDqxQxFHvR8Tpp2H7Vkf1w%2BV4QL5sBCSGxRa%2BCFISP1CFjNMOWJg8d3PKMrFjL77RE7xj8f%2Br51AcMRthXns4uvp15Zi950UNDSdbdLL5xbmmgVjw2jtXSFlJjEfzX%2Bdiu%2FWLQuz3SXlWMkfvVEYpyzMznXflyk3XxqTzcioIjg2Zv82JIOrKX0JRtk5xLwIT0dHLWJhcvgz2rTuzCK99zyccioJ2f0Xm%2FrTMcSaElOloY2RYL56aH2KaQvSUqsWBCzAjph92RgPsUTJmViKTZipqzzb%2FaE0szKrhL5bv%2Ff1JzTkVYhDxO%2BPn3IEI9l4ThAqZe%2FEuiAa3DbceqBhRzeakwPRwYYfw243WIDJqtTpTEOt05uuxeR7vejOJ%2F3hCJRNQobNB3%2BJl31gLFZvyzowcfT4%2BTipNVt7OcRa%2FwFswTlPdGxdDd3IK5ND2yizk6TxQt5j8u4S3zBCjnp70yPcWaVw%2BsY%2BMJBDtt%2FwpwsmIDVNKaN0q1t26iQBTDcx8WUBQUuvv71eROdxTkdtRhlBgwl%2B3rygY6pgHbO3T8oMlG8oBXjEDJE%2FQFsadEkimV9rQeD7zhOW9yKM1zECKGvG81ouqLhoR85U%2BcInlGEqQrrdrz%2FPT3EXMmrQ2updF8zt4CwWCjUY1wyVpjTbXoHBjg7mbLpD7I76fo0crI5Jez%2BNCcp8oi%2BQo0ob2DV1exyVNADyR7bCvXYzrgsrAV6%2F2%2F%2BJOhGs2dQ7TOt%2FL5B6EFvkBgY4m8DTocB3esCgN6&X-Amz-Signature=e0d920fef0598cfc52027dc9b212703cc16ceaeccac2d40fc2c537a91de8cbb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLQC2EQ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG7USK0z2lszq%2B%2BFz95mFCEohoCe3IA%2BSHeX0%2F%2FgStxDAiAWnZw1wg%2FuVnpej2OhiCrqdZ%2FmgfzLVvuqGLih2IUV7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMMmeyEz5thgJysnbfKtwD%2FsroK5xgT3qMI0A%2FlJZaWkatEkB9F%2Fw4S0uT3gMEU7p4mVbHfrNrTgHFzPwjEvm5%2F91E1WqSQqsDFGfpEeY26v%2BGJ7MGpQBiL1tDqxQxFHvR8Tpp2H7Vkf1w%2BV4QL5sBCSGxRa%2BCFISP1CFjNMOWJg8d3PKMrFjL77RE7xj8f%2Br51AcMRthXns4uvp15Zi950UNDSdbdLL5xbmmgVjw2jtXSFlJjEfzX%2Bdiu%2FWLQuz3SXlWMkfvVEYpyzMznXflyk3XxqTzcioIjg2Zv82JIOrKX0JRtk5xLwIT0dHLWJhcvgz2rTuzCK99zyccioJ2f0Xm%2FrTMcSaElOloY2RYL56aH2KaQvSUqsWBCzAjph92RgPsUTJmViKTZipqzzb%2FaE0szKrhL5bv%2Ff1JzTkVYhDxO%2BPn3IEI9l4ThAqZe%2FEuiAa3DbceqBhRzeakwPRwYYfw243WIDJqtTpTEOt05uuxeR7vejOJ%2F3hCJRNQobNB3%2BJl31gLFZvyzowcfT4%2BTipNVt7OcRa%2FwFswTlPdGxdDd3IK5ND2yizk6TxQt5j8u4S3zBCjnp70yPcWaVw%2BsY%2BMJBDtt%2FwpwsmIDVNKaN0q1t26iQBTDcx8WUBQUuvv71eROdxTkdtRhlBgwl%2B3rygY6pgHbO3T8oMlG8oBXjEDJE%2FQFsadEkimV9rQeD7zhOW9yKM1zECKGvG81ouqLhoR85U%2BcInlGEqQrrdrz%2FPT3EXMmrQ2updF8zt4CwWCjUY1wyVpjTbXoHBjg7mbLpD7I76fo0crI5Jez%2BNCcp8oi%2BQo0ob2DV1exyVNADyR7bCvXYzrgsrAV6%2F2%2F%2BJOhGs2dQ7TOt%2FL5B6EFvkBgY4m8DTocB3esCgN6&X-Amz-Signature=c5906681f9edf6d571781440a7ddc0e5419dc8ba4c53c8df60d9c2076e5d21ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLQC2EQ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG7USK0z2lszq%2B%2BFz95mFCEohoCe3IA%2BSHeX0%2F%2FgStxDAiAWnZw1wg%2FuVnpej2OhiCrqdZ%2FmgfzLVvuqGLih2IUV7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMMmeyEz5thgJysnbfKtwD%2FsroK5xgT3qMI0A%2FlJZaWkatEkB9F%2Fw4S0uT3gMEU7p4mVbHfrNrTgHFzPwjEvm5%2F91E1WqSQqsDFGfpEeY26v%2BGJ7MGpQBiL1tDqxQxFHvR8Tpp2H7Vkf1w%2BV4QL5sBCSGxRa%2BCFISP1CFjNMOWJg8d3PKMrFjL77RE7xj8f%2Br51AcMRthXns4uvp15Zi950UNDSdbdLL5xbmmgVjw2jtXSFlJjEfzX%2Bdiu%2FWLQuz3SXlWMkfvVEYpyzMznXflyk3XxqTzcioIjg2Zv82JIOrKX0JRtk5xLwIT0dHLWJhcvgz2rTuzCK99zyccioJ2f0Xm%2FrTMcSaElOloY2RYL56aH2KaQvSUqsWBCzAjph92RgPsUTJmViKTZipqzzb%2FaE0szKrhL5bv%2Ff1JzTkVYhDxO%2BPn3IEI9l4ThAqZe%2FEuiAa3DbceqBhRzeakwPRwYYfw243WIDJqtTpTEOt05uuxeR7vejOJ%2F3hCJRNQobNB3%2BJl31gLFZvyzowcfT4%2BTipNVt7OcRa%2FwFswTlPdGxdDd3IK5ND2yizk6TxQt5j8u4S3zBCjnp70yPcWaVw%2BsY%2BMJBDtt%2FwpwsmIDVNKaN0q1t26iQBTDcx8WUBQUuvv71eROdxTkdtRhlBgwl%2B3rygY6pgHbO3T8oMlG8oBXjEDJE%2FQFsadEkimV9rQeD7zhOW9yKM1zECKGvG81ouqLhoR85U%2BcInlGEqQrrdrz%2FPT3EXMmrQ2updF8zt4CwWCjUY1wyVpjTbXoHBjg7mbLpD7I76fo0crI5Jez%2BNCcp8oi%2BQo0ob2DV1exyVNADyR7bCvXYzrgsrAV6%2F2%2F%2BJOhGs2dQ7TOt%2FL5B6EFvkBgY4m8DTocB3esCgN6&X-Amz-Signature=d8b790036f07424ea0ebe55489251ac407b6d002b4f2550332b6ab7776574c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLQC2EQ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG7USK0z2lszq%2B%2BFz95mFCEohoCe3IA%2BSHeX0%2F%2FgStxDAiAWnZw1wg%2FuVnpej2OhiCrqdZ%2FmgfzLVvuqGLih2IUV7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMMmeyEz5thgJysnbfKtwD%2FsroK5xgT3qMI0A%2FlJZaWkatEkB9F%2Fw4S0uT3gMEU7p4mVbHfrNrTgHFzPwjEvm5%2F91E1WqSQqsDFGfpEeY26v%2BGJ7MGpQBiL1tDqxQxFHvR8Tpp2H7Vkf1w%2BV4QL5sBCSGxRa%2BCFISP1CFjNMOWJg8d3PKMrFjL77RE7xj8f%2Br51AcMRthXns4uvp15Zi950UNDSdbdLL5xbmmgVjw2jtXSFlJjEfzX%2Bdiu%2FWLQuz3SXlWMkfvVEYpyzMznXflyk3XxqTzcioIjg2Zv82JIOrKX0JRtk5xLwIT0dHLWJhcvgz2rTuzCK99zyccioJ2f0Xm%2FrTMcSaElOloY2RYL56aH2KaQvSUqsWBCzAjph92RgPsUTJmViKTZipqzzb%2FaE0szKrhL5bv%2Ff1JzTkVYhDxO%2BPn3IEI9l4ThAqZe%2FEuiAa3DbceqBhRzeakwPRwYYfw243WIDJqtTpTEOt05uuxeR7vejOJ%2F3hCJRNQobNB3%2BJl31gLFZvyzowcfT4%2BTipNVt7OcRa%2FwFswTlPdGxdDd3IK5ND2yizk6TxQt5j8u4S3zBCjnp70yPcWaVw%2BsY%2BMJBDtt%2FwpwsmIDVNKaN0q1t26iQBTDcx8WUBQUuvv71eROdxTkdtRhlBgwl%2B3rygY6pgHbO3T8oMlG8oBXjEDJE%2FQFsadEkimV9rQeD7zhOW9yKM1zECKGvG81ouqLhoR85U%2BcInlGEqQrrdrz%2FPT3EXMmrQ2updF8zt4CwWCjUY1wyVpjTbXoHBjg7mbLpD7I76fo0crI5Jez%2BNCcp8oi%2BQo0ob2DV1exyVNADyR7bCvXYzrgsrAV6%2F2%2F%2BJOhGs2dQ7TOt%2FL5B6EFvkBgY4m8DTocB3esCgN6&X-Amz-Signature=c7686f47b6886e72556fc8b1b44dad4f2f053eaa12fb1d8213433b1b4bc79ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLQC2EQ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG7USK0z2lszq%2B%2BFz95mFCEohoCe3IA%2BSHeX0%2F%2FgStxDAiAWnZw1wg%2FuVnpej2OhiCrqdZ%2FmgfzLVvuqGLih2IUV7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMMmeyEz5thgJysnbfKtwD%2FsroK5xgT3qMI0A%2FlJZaWkatEkB9F%2Fw4S0uT3gMEU7p4mVbHfrNrTgHFzPwjEvm5%2F91E1WqSQqsDFGfpEeY26v%2BGJ7MGpQBiL1tDqxQxFHvR8Tpp2H7Vkf1w%2BV4QL5sBCSGxRa%2BCFISP1CFjNMOWJg8d3PKMrFjL77RE7xj8f%2Br51AcMRthXns4uvp15Zi950UNDSdbdLL5xbmmgVjw2jtXSFlJjEfzX%2Bdiu%2FWLQuz3SXlWMkfvVEYpyzMznXflyk3XxqTzcioIjg2Zv82JIOrKX0JRtk5xLwIT0dHLWJhcvgz2rTuzCK99zyccioJ2f0Xm%2FrTMcSaElOloY2RYL56aH2KaQvSUqsWBCzAjph92RgPsUTJmViKTZipqzzb%2FaE0szKrhL5bv%2Ff1JzTkVYhDxO%2BPn3IEI9l4ThAqZe%2FEuiAa3DbceqBhRzeakwPRwYYfw243WIDJqtTpTEOt05uuxeR7vejOJ%2F3hCJRNQobNB3%2BJl31gLFZvyzowcfT4%2BTipNVt7OcRa%2FwFswTlPdGxdDd3IK5ND2yizk6TxQt5j8u4S3zBCjnp70yPcWaVw%2BsY%2BMJBDtt%2FwpwsmIDVNKaN0q1t26iQBTDcx8WUBQUuvv71eROdxTkdtRhlBgwl%2B3rygY6pgHbO3T8oMlG8oBXjEDJE%2FQFsadEkimV9rQeD7zhOW9yKM1zECKGvG81ouqLhoR85U%2BcInlGEqQrrdrz%2FPT3EXMmrQ2updF8zt4CwWCjUY1wyVpjTbXoHBjg7mbLpD7I76fo0crI5Jez%2BNCcp8oi%2BQo0ob2DV1exyVNADyR7bCvXYzrgsrAV6%2F2%2F%2BJOhGs2dQ7TOt%2FL5B6EFvkBgY4m8DTocB3esCgN6&X-Amz-Signature=cf6d55313128dfe9f9bdebca6ddf1b0562f8185b45c29043b6e23e5b9ce92c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLQC2EQ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG7USK0z2lszq%2B%2BFz95mFCEohoCe3IA%2BSHeX0%2F%2FgStxDAiAWnZw1wg%2FuVnpej2OhiCrqdZ%2FmgfzLVvuqGLih2IUV7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMMmeyEz5thgJysnbfKtwD%2FsroK5xgT3qMI0A%2FlJZaWkatEkB9F%2Fw4S0uT3gMEU7p4mVbHfrNrTgHFzPwjEvm5%2F91E1WqSQqsDFGfpEeY26v%2BGJ7MGpQBiL1tDqxQxFHvR8Tpp2H7Vkf1w%2BV4QL5sBCSGxRa%2BCFISP1CFjNMOWJg8d3PKMrFjL77RE7xj8f%2Br51AcMRthXns4uvp15Zi950UNDSdbdLL5xbmmgVjw2jtXSFlJjEfzX%2Bdiu%2FWLQuz3SXlWMkfvVEYpyzMznXflyk3XxqTzcioIjg2Zv82JIOrKX0JRtk5xLwIT0dHLWJhcvgz2rTuzCK99zyccioJ2f0Xm%2FrTMcSaElOloY2RYL56aH2KaQvSUqsWBCzAjph92RgPsUTJmViKTZipqzzb%2FaE0szKrhL5bv%2Ff1JzTkVYhDxO%2BPn3IEI9l4ThAqZe%2FEuiAa3DbceqBhRzeakwPRwYYfw243WIDJqtTpTEOt05uuxeR7vejOJ%2F3hCJRNQobNB3%2BJl31gLFZvyzowcfT4%2BTipNVt7OcRa%2FwFswTlPdGxdDd3IK5ND2yizk6TxQt5j8u4S3zBCjnp70yPcWaVw%2BsY%2BMJBDtt%2FwpwsmIDVNKaN0q1t26iQBTDcx8WUBQUuvv71eROdxTkdtRhlBgwl%2B3rygY6pgHbO3T8oMlG8oBXjEDJE%2FQFsadEkimV9rQeD7zhOW9yKM1zECKGvG81ouqLhoR85U%2BcInlGEqQrrdrz%2FPT3EXMmrQ2updF8zt4CwWCjUY1wyVpjTbXoHBjg7mbLpD7I76fo0crI5Jez%2BNCcp8oi%2BQo0ob2DV1exyVNADyR7bCvXYzrgsrAV6%2F2%2F%2BJOhGs2dQ7TOt%2FL5B6EFvkBgY4m8DTocB3esCgN6&X-Amz-Signature=99869efecb2084426393face16067a8be5ebb64d82929cbe1da0aeb469993ef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLQC2EQ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG7USK0z2lszq%2B%2BFz95mFCEohoCe3IA%2BSHeX0%2F%2FgStxDAiAWnZw1wg%2FuVnpej2OhiCrqdZ%2FmgfzLVvuqGLih2IUV7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMMmeyEz5thgJysnbfKtwD%2FsroK5xgT3qMI0A%2FlJZaWkatEkB9F%2Fw4S0uT3gMEU7p4mVbHfrNrTgHFzPwjEvm5%2F91E1WqSQqsDFGfpEeY26v%2BGJ7MGpQBiL1tDqxQxFHvR8Tpp2H7Vkf1w%2BV4QL5sBCSGxRa%2BCFISP1CFjNMOWJg8d3PKMrFjL77RE7xj8f%2Br51AcMRthXns4uvp15Zi950UNDSdbdLL5xbmmgVjw2jtXSFlJjEfzX%2Bdiu%2FWLQuz3SXlWMkfvVEYpyzMznXflyk3XxqTzcioIjg2Zv82JIOrKX0JRtk5xLwIT0dHLWJhcvgz2rTuzCK99zyccioJ2f0Xm%2FrTMcSaElOloY2RYL56aH2KaQvSUqsWBCzAjph92RgPsUTJmViKTZipqzzb%2FaE0szKrhL5bv%2Ff1JzTkVYhDxO%2BPn3IEI9l4ThAqZe%2FEuiAa3DbceqBhRzeakwPRwYYfw243WIDJqtTpTEOt05uuxeR7vejOJ%2F3hCJRNQobNB3%2BJl31gLFZvyzowcfT4%2BTipNVt7OcRa%2FwFswTlPdGxdDd3IK5ND2yizk6TxQt5j8u4S3zBCjnp70yPcWaVw%2BsY%2BMJBDtt%2FwpwsmIDVNKaN0q1t26iQBTDcx8WUBQUuvv71eROdxTkdtRhlBgwl%2B3rygY6pgHbO3T8oMlG8oBXjEDJE%2FQFsadEkimV9rQeD7zhOW9yKM1zECKGvG81ouqLhoR85U%2BcInlGEqQrrdrz%2FPT3EXMmrQ2updF8zt4CwWCjUY1wyVpjTbXoHBjg7mbLpD7I76fo0crI5Jez%2BNCcp8oi%2BQo0ob2DV1exyVNADyR7bCvXYzrgsrAV6%2F2%2F%2BJOhGs2dQ7TOt%2FL5B6EFvkBgY4m8DTocB3esCgN6&X-Amz-Signature=a1684ceef55a4158adace265c56ade963cdf12c9b05da60d8317618f769e4673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLQC2EQ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG7USK0z2lszq%2B%2BFz95mFCEohoCe3IA%2BSHeX0%2F%2FgStxDAiAWnZw1wg%2FuVnpej2OhiCrqdZ%2FmgfzLVvuqGLih2IUV7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMMmeyEz5thgJysnbfKtwD%2FsroK5xgT3qMI0A%2FlJZaWkatEkB9F%2Fw4S0uT3gMEU7p4mVbHfrNrTgHFzPwjEvm5%2F91E1WqSQqsDFGfpEeY26v%2BGJ7MGpQBiL1tDqxQxFHvR8Tpp2H7Vkf1w%2BV4QL5sBCSGxRa%2BCFISP1CFjNMOWJg8d3PKMrFjL77RE7xj8f%2Br51AcMRthXns4uvp15Zi950UNDSdbdLL5xbmmgVjw2jtXSFlJjEfzX%2Bdiu%2FWLQuz3SXlWMkfvVEYpyzMznXflyk3XxqTzcioIjg2Zv82JIOrKX0JRtk5xLwIT0dHLWJhcvgz2rTuzCK99zyccioJ2f0Xm%2FrTMcSaElOloY2RYL56aH2KaQvSUqsWBCzAjph92RgPsUTJmViKTZipqzzb%2FaE0szKrhL5bv%2Ff1JzTkVYhDxO%2BPn3IEI9l4ThAqZe%2FEuiAa3DbceqBhRzeakwPRwYYfw243WIDJqtTpTEOt05uuxeR7vejOJ%2F3hCJRNQobNB3%2BJl31gLFZvyzowcfT4%2BTipNVt7OcRa%2FwFswTlPdGxdDd3IK5ND2yizk6TxQt5j8u4S3zBCjnp70yPcWaVw%2BsY%2BMJBDtt%2FwpwsmIDVNKaN0q1t26iQBTDcx8WUBQUuvv71eROdxTkdtRhlBgwl%2B3rygY6pgHbO3T8oMlG8oBXjEDJE%2FQFsadEkimV9rQeD7zhOW9yKM1zECKGvG81ouqLhoR85U%2BcInlGEqQrrdrz%2FPT3EXMmrQ2updF8zt4CwWCjUY1wyVpjTbXoHBjg7mbLpD7I76fo0crI5Jez%2BNCcp8oi%2BQo0ob2DV1exyVNADyR7bCvXYzrgsrAV6%2F2%2F%2BJOhGs2dQ7TOt%2FL5B6EFvkBgY4m8DTocB3esCgN6&X-Amz-Signature=e4466ddaa71b4b167d4facde701e9a94889e1c179b5b6220bb658b95ed8db6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLQC2EQ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG7USK0z2lszq%2B%2BFz95mFCEohoCe3IA%2BSHeX0%2F%2FgStxDAiAWnZw1wg%2FuVnpej2OhiCrqdZ%2FmgfzLVvuqGLih2IUV7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMMmeyEz5thgJysnbfKtwD%2FsroK5xgT3qMI0A%2FlJZaWkatEkB9F%2Fw4S0uT3gMEU7p4mVbHfrNrTgHFzPwjEvm5%2F91E1WqSQqsDFGfpEeY26v%2BGJ7MGpQBiL1tDqxQxFHvR8Tpp2H7Vkf1w%2BV4QL5sBCSGxRa%2BCFISP1CFjNMOWJg8d3PKMrFjL77RE7xj8f%2Br51AcMRthXns4uvp15Zi950UNDSdbdLL5xbmmgVjw2jtXSFlJjEfzX%2Bdiu%2FWLQuz3SXlWMkfvVEYpyzMznXflyk3XxqTzcioIjg2Zv82JIOrKX0JRtk5xLwIT0dHLWJhcvgz2rTuzCK99zyccioJ2f0Xm%2FrTMcSaElOloY2RYL56aH2KaQvSUqsWBCzAjph92RgPsUTJmViKTZipqzzb%2FaE0szKrhL5bv%2Ff1JzTkVYhDxO%2BPn3IEI9l4ThAqZe%2FEuiAa3DbceqBhRzeakwPRwYYfw243WIDJqtTpTEOt05uuxeR7vejOJ%2F3hCJRNQobNB3%2BJl31gLFZvyzowcfT4%2BTipNVt7OcRa%2FwFswTlPdGxdDd3IK5ND2yizk6TxQt5j8u4S3zBCjnp70yPcWaVw%2BsY%2BMJBDtt%2FwpwsmIDVNKaN0q1t26iQBTDcx8WUBQUuvv71eROdxTkdtRhlBgwl%2B3rygY6pgHbO3T8oMlG8oBXjEDJE%2FQFsadEkimV9rQeD7zhOW9yKM1zECKGvG81ouqLhoR85U%2BcInlGEqQrrdrz%2FPT3EXMmrQ2updF8zt4CwWCjUY1wyVpjTbXoHBjg7mbLpD7I76fo0crI5Jez%2BNCcp8oi%2BQo0ob2DV1exyVNADyR7bCvXYzrgsrAV6%2F2%2F%2BJOhGs2dQ7TOt%2FL5B6EFvkBgY4m8DTocB3esCgN6&X-Amz-Signature=415b9895d71b99262760ce9a021a08187e9d9422d85e045fd6584194de1ecb21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLQC2EQ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG7USK0z2lszq%2B%2BFz95mFCEohoCe3IA%2BSHeX0%2F%2FgStxDAiAWnZw1wg%2FuVnpej2OhiCrqdZ%2FmgfzLVvuqGLih2IUV7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMMmeyEz5thgJysnbfKtwD%2FsroK5xgT3qMI0A%2FlJZaWkatEkB9F%2Fw4S0uT3gMEU7p4mVbHfrNrTgHFzPwjEvm5%2F91E1WqSQqsDFGfpEeY26v%2BGJ7MGpQBiL1tDqxQxFHvR8Tpp2H7Vkf1w%2BV4QL5sBCSGxRa%2BCFISP1CFjNMOWJg8d3PKMrFjL77RE7xj8f%2Br51AcMRthXns4uvp15Zi950UNDSdbdLL5xbmmgVjw2jtXSFlJjEfzX%2Bdiu%2FWLQuz3SXlWMkfvVEYpyzMznXflyk3XxqTzcioIjg2Zv82JIOrKX0JRtk5xLwIT0dHLWJhcvgz2rTuzCK99zyccioJ2f0Xm%2FrTMcSaElOloY2RYL56aH2KaQvSUqsWBCzAjph92RgPsUTJmViKTZipqzzb%2FaE0szKrhL5bv%2Ff1JzTkVYhDxO%2BPn3IEI9l4ThAqZe%2FEuiAa3DbceqBhRzeakwPRwYYfw243WIDJqtTpTEOt05uuxeR7vejOJ%2F3hCJRNQobNB3%2BJl31gLFZvyzowcfT4%2BTipNVt7OcRa%2FwFswTlPdGxdDd3IK5ND2yizk6TxQt5j8u4S3zBCjnp70yPcWaVw%2BsY%2BMJBDtt%2FwpwsmIDVNKaN0q1t26iQBTDcx8WUBQUuvv71eROdxTkdtRhlBgwl%2B3rygY6pgHbO3T8oMlG8oBXjEDJE%2FQFsadEkimV9rQeD7zhOW9yKM1zECKGvG81ouqLhoR85U%2BcInlGEqQrrdrz%2FPT3EXMmrQ2updF8zt4CwWCjUY1wyVpjTbXoHBjg7mbLpD7I76fo0crI5Jez%2BNCcp8oi%2BQo0ob2DV1exyVNADyR7bCvXYzrgsrAV6%2F2%2F%2BJOhGs2dQ7TOt%2FL5B6EFvkBgY4m8DTocB3esCgN6&X-Amz-Signature=3027823c56898ee40a4243322b7c44930ef6219e47a306ae309d97258cc9db8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R7FE4J5%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDRht%2Bsk2ThpGuskRl5kf5PKHfodTw6Q39vKFg1g6YTgAIhAKA97jMzncbLkCxbzZMd5gEs2EzJ7P1ekzRe6DVvloJ2Kv8DCDsQABoMNjM3NDIzMTgzODA1Igz4WkfxzEN7%2B4YS4ggq3ANKAz7CgEfbEioPT6hRq3DszYAwkxWwTVISziXbZ%2FPSkQN9TwW%2FYml8fsRvVUiUKE9%2FkyRwinGGMk7Uw7q2wJnFho30dS5CzygtYx9gPaRwq0YMVmSstAVz4NuDedRnVNYCzFO%2BKgI1fgUhDw2XhcZB7KZ1XxIWtCI%2FAe2FvXKeWkXVPVuwlmNhBAq8MSVKGJpov7%2F53%2FA4zrqj2kU1EyWbR2nTQbJLjyBLiWcx07zXob3SOLLPcTG5B2oDtnuB5%2Flqd4xdjjHPpyERz2gPnxlRSkBNnammzAPy72K5mASNpW%2BSJ8fqu%2B2%2F4k%2B%2BkBp1b3ySQRN36xgf2agW6RYHTdLQpgUi8b2iOTSXF%2FU%2FAgBJgQJ4U%2BQaHCHtxQ6875jrWW0HBaeKajsJnV6ZMEttrHrz%2BEirD6cJBqozqQpQyAuN2tQXhvkx50bTBrbZ0PXsCHk6kI34lndd14eqwGOjCVolphbkUgkU4lhZ5ru9MTfWDPlqRGDzLibbHtnTwjfxCqtAJnyQngFQl79EZd5N7f8%2FDzNUXPGodA1Y7JLitCXPrM4BGIN9ZANQdStq4Y3xYNSmEJ60A%2Fnf1qSukyWGieLgnR%2BYGToSkIIRkZm8ZgN9QiSCDedCQEadzcY4KTCvqezKBjqkAdxlVhB8HquK9RrPYMeV91v%2BaZsZ7xwiz7GXgYW8MViSiyNT9X%2F9ESPlWtZmtBl%2BozFWwnt94Imiy0upDwhy3ykao%2FCCf7%2Fw7lxdgR00wNCNCXscalljcrJkmvrY0Etxb6RO9jBceX8McjENctxGBYhH7rRtql5cjq%2B7ts9paTjpxI0aQUQtacEVfuBMgJqLfLwY53B5zqw2CzHLiHIqy6%2BlQgz1&X-Amz-Signature=62ce3975cd5004fc22cbf1babfb115d2f3024003a8fb9210c619b909192fb237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G6EEP2A%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCbOJfu%2FtL2O%2FzLCFHA%2Bg5gFSba0JWMYYruPWgs8cOynwIgbQG%2BHhot7qan1v7%2BAo4lFECXo0jtKEl%2BR86gz3WpdDcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCYP504CfAyUdcJufCrcA7RirAJsDCopRboSWy%2Fd6l3cYaiNjjwAza2%2Fkf82xHgND9PI5hyy2MlEuDVLpmsvPhfOXx8KCLrhzNXGBRmB9fqh7Gvpt5vOLhS0FvW%2BLvnlN4kTYre6och08uGsN2QPa5LymIuYLRRo5EUM3DtUfB3oP0vHUbaDW6XX9QOQQFwins3QdH4fWQODqgl%2BY0f6dOC1HL2ESUA3ucs%2BFHGVS9qkxouV%2FN7Mi8aZfCHd8MR2Znn7peKKEWd9Ha%2FxWg8ItKitGgrKMNPTZ5lVJbR%2BS9K48I5cSVEjbE1Xe7sCGp7M7mMrO8yYCvoi8H9rW8AROutGptQB9PNxyZeE6JSCPMN%2BLwn9UD56dmqaEmPpz0yjR3IGbm3Z8XWNwnW7sQ%2F9cY1BFBUiM9pDgJ6xT3Lp2%2FfZYEkm2sS4xwJw8YQvz3ufIFArU5C6uBhfbBCOrxxJG25TOtBO8SZVt3nt2Un%2Bk30KZVQFPAOgmcjxo55Vljbv5UFel%2F5vUMfZ6LpQ9Y60hYdUs7nbFHBuJPZ%2F8o8au4EmCayxdubOhnAoIo5b57NRtZw%2FCgxmmye%2BSCL48ZZ9020ta5c3S8pSkzG19OtjYhDsePLz1SNUV5AnUd0t9rcO3clZ0YhT567%2FewQnMOql7MoGOqUBl3f2FaDnogeBZ9LROVRk5RbvlhP1U%2FHM02Om09ozb%2BEm7PvXywZ%2FkAYQEffSVlE%2FI9tgKqtEsxYMaR26TO86c5DCHRAqJzyjhIlzMZV7atlcEwwsQ%2B3BauNzxK9b4zm%2F4yqwhbalcN7q0NBM6hjA%2BTswnp%2BZr1NMlIxvro5ejI%2Bi2C3RIbRry72woSUb98JDp4T6814lwcukS8prMeejJutoTYfa&X-Amz-Signature=27881f86e05830f40bfd8a44228a168665c107eec20d3191e642f59e5f61f45a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULU4E6TY%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDnhkBC6YS0mnNcQJA1mfKZzGoPWJRqQ7fD9bo0dYUo2AIgNMI2pmD94jv801ul5wc1HnPWJb%2FVegrburoev7KA9QMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDAc0w9cGyrrGtGHbqSrcA%2BhPqq5rxufJXqRzPOjr41W1wU1uPo7ZttR1loeQ%2F2z8fIZnkLJKfvYXXLWiRnDIE1HIk125IkA31PTyXk5%2BftslWgCC25ndLwlzcDEDfxwxLL%2FdbFhkaB%2B7Finl3RRxymGSqiWs9dXjhV6P7MUpUaXr570zSPfHVd0i2v8O6SVrKWfN29TanRMJiJV4CM6BsARs%2B82km%2Ba0qkYie2McjybGiLvS9pDWMJO%2BpR0pXW%2BMILzWm6VAoouuutO%2FzVLd1jUL%2B%2FvxWWnbS0C3CE0xOD%2BiYYvCAX15NJi8jJPOi401Ex%2BWPxRurnS8A%2FishYsMKzi3giPfM9MYkrbp4LTw1veocGSSuCLFuKnVjslJsqoWCk9hcOFcQN%2FaIaTbuXFjIfpd0cC1mOrc3zn0HVzGY%2FpOoCJztFGfNUtmHt5vVmItn0e5qXZqD2xn4xEh%2BL%2BmzQhlKbvt6N6m%2BluGVxZEwWfKg0m9jvvKw%2B7ynw6TNH5CgrCSRLWvzVWnuLybHl1mOjvQsU0kcNfgvKRMu5TbzSiXut0Hmx2S7TIIY6eaPxqYPJ1j81gMeXY7EQoNf3YTdoEA1y8iiuwTytCWF3RTkYRnH63dOiWUJQ9BxszjuXecj42RvYsVmQld3svAMKfh68oGOqUBvgTyo9mc7PmhZjR3XT4VjJXRzhdJbY1TCPM0UkJPiMEaUELNLVyHnH9wwlO%2Bfn0viCGlcZY2f6QpwRFpJT3gSHclfjIVUK4s4Bs6YxQPJNE48%2FdbssJjnJvoIYU0iwwkqrERp941W635Q9ux4oN3TpJztG%2B8kBMJh%2B9b0y9yHNloZ60H4A%2Bgi8qWcpdAdlMNRpjiDCOFDzqaKNhGPZOGMApp82tN&X-Amz-Signature=e5d5df4a3799759e3de64ed1162a578e1cce8cd81154db399ef0b4c648fd049c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLQC2EQ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG7USK0z2lszq%2B%2BFz95mFCEohoCe3IA%2BSHeX0%2F%2FgStxDAiAWnZw1wg%2FuVnpej2OhiCrqdZ%2FmgfzLVvuqGLih2IUV7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMMmeyEz5thgJysnbfKtwD%2FsroK5xgT3qMI0A%2FlJZaWkatEkB9F%2Fw4S0uT3gMEU7p4mVbHfrNrTgHFzPwjEvm5%2F91E1WqSQqsDFGfpEeY26v%2BGJ7MGpQBiL1tDqxQxFHvR8Tpp2H7Vkf1w%2BV4QL5sBCSGxRa%2BCFISP1CFjNMOWJg8d3PKMrFjL77RE7xj8f%2Br51AcMRthXns4uvp15Zi950UNDSdbdLL5xbmmgVjw2jtXSFlJjEfzX%2Bdiu%2FWLQuz3SXlWMkfvVEYpyzMznXflyk3XxqTzcioIjg2Zv82JIOrKX0JRtk5xLwIT0dHLWJhcvgz2rTuzCK99zyccioJ2f0Xm%2FrTMcSaElOloY2RYL56aH2KaQvSUqsWBCzAjph92RgPsUTJmViKTZipqzzb%2FaE0szKrhL5bv%2Ff1JzTkVYhDxO%2BPn3IEI9l4ThAqZe%2FEuiAa3DbceqBhRzeakwPRwYYfw243WIDJqtTpTEOt05uuxeR7vejOJ%2F3hCJRNQobNB3%2BJl31gLFZvyzowcfT4%2BTipNVt7OcRa%2FwFswTlPdGxdDd3IK5ND2yizk6TxQt5j8u4S3zBCjnp70yPcWaVw%2BsY%2BMJBDtt%2FwpwsmIDVNKaN0q1t26iQBTDcx8WUBQUuvv71eROdxTkdtRhlBgwl%2B3rygY6pgHbO3T8oMlG8oBXjEDJE%2FQFsadEkimV9rQeD7zhOW9yKM1zECKGvG81ouqLhoR85U%2BcInlGEqQrrdrz%2FPT3EXMmrQ2updF8zt4CwWCjUY1wyVpjTbXoHBjg7mbLpD7I76fo0crI5Jez%2BNCcp8oi%2BQo0ob2DV1exyVNADyR7bCvXYzrgsrAV6%2F2%2F%2BJOhGs2dQ7TOt%2FL5B6EFvkBgY4m8DTocB3esCgN6&X-Amz-Signature=4ff86210281806cf3fa9d7502a3e7c899ab924bb7b2f49005cfb3fb89a71946f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDR66UOX%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCID8%2FM97pwMqfRbGhJKVNItw0ZuI8aR%2B1wbJ0zxXePa1rAiEAq5L5cpo7enlF0INm8iR0yRcHi6aLjNxLb5nEJ%2F%2FlVSoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGa2jmLDuNGG9QApyircAzZEZtMUHVxL2DsJZsM%2BD9GnVFwRBgVgpUedysyHO%2B8Km655RS2vfDEaLVj7E6S9rboy3dMIvWYgab1l0UpOzi8aURY4flDHyX7VXwX6v6eIyrrsggc3YzTaHC3itXhjHkok9sE9uM2stnJjPU0qh%2FFCT20L5FBEd%2FoZVAyAml%2BLmJzkss%2FBq9eB%2BaAcZoQiQKE74RGFSkj8vFVDNqbzuZz2AWptdFi1KZAilJb5k3LV%2FUUZ3yYz8ogaC1%2FuZ8L10AHte%2FeBGFkDNg3GE9qNg6Fuy9lN1NPblKtXrDgDC0eVqcf%2BsEmkiDLCweL%2FquujVF2Wx5%2BU1i7my3GLGZEpNAXHzJPc9JvC9%2FlPYbXIfAeSAD29AOdMgu73U%2BXRjv3SOdxYKd6HXmG1dgelvRK%2FLCPdvQOOofdfd5iLETA78tDtwCLJVBeUn6ery83SEYNY1dfiuTnF1YIZG5foZ4C%2F9g7fzxXRBIPFVR7oOQa6h1KCNKnnZ5GyGUZliGW5HZWft3ZWfRfh65%2B5dZA1ywszZW%2BUca2GlfC9OlAx0qlcZAPfj0WK2ZGyE8%2FqMf5K10bYltBilcDhmnph1HMIGno1VXzVTaLvI30gYKkeBCx%2BD7n7PJ0SSYvZWJYWS3I8MN6B7MoGOqUBoWuaAdiZpngYGWIoQGDDnDWtMdAnfd1MneOaBV0bQSvYez3Qh32Z2NGcRAtWNjUQ0hzlzped2Za7tsnPjZpDbgL6JYxg6F9rZXRuP5X3nJSu%2Bz3%2Bz7GyLgEBaGU%2FnsoGM7JZHYPEGn4KnK%2FHTrXdi%2BMUnRwS81eMgi1b7kLJ7k2l4WZfY0O%2Fh1uBFw%2FGzFhRWHZQWLf5xT%2BOWBUkDS%2F9cuBHReJc&X-Amz-Signature=f8147d24a3da0ba6794671873495dcc36a5b17a3c8ef1e2e935e3ac02d7ce42e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLQC2EQ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG7USK0z2lszq%2B%2BFz95mFCEohoCe3IA%2BSHeX0%2F%2FgStxDAiAWnZw1wg%2FuVnpej2OhiCrqdZ%2FmgfzLVvuqGLih2IUV7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMMmeyEz5thgJysnbfKtwD%2FsroK5xgT3qMI0A%2FlJZaWkatEkB9F%2Fw4S0uT3gMEU7p4mVbHfrNrTgHFzPwjEvm5%2F91E1WqSQqsDFGfpEeY26v%2BGJ7MGpQBiL1tDqxQxFHvR8Tpp2H7Vkf1w%2BV4QL5sBCSGxRa%2BCFISP1CFjNMOWJg8d3PKMrFjL77RE7xj8f%2Br51AcMRthXns4uvp15Zi950UNDSdbdLL5xbmmgVjw2jtXSFlJjEfzX%2Bdiu%2FWLQuz3SXlWMkfvVEYpyzMznXflyk3XxqTzcioIjg2Zv82JIOrKX0JRtk5xLwIT0dHLWJhcvgz2rTuzCK99zyccioJ2f0Xm%2FrTMcSaElOloY2RYL56aH2KaQvSUqsWBCzAjph92RgPsUTJmViKTZipqzzb%2FaE0szKrhL5bv%2Ff1JzTkVYhDxO%2BPn3IEI9l4ThAqZe%2FEuiAa3DbceqBhRzeakwPRwYYfw243WIDJqtTpTEOt05uuxeR7vejOJ%2F3hCJRNQobNB3%2BJl31gLFZvyzowcfT4%2BTipNVt7OcRa%2FwFswTlPdGxdDd3IK5ND2yizk6TxQt5j8u4S3zBCjnp70yPcWaVw%2BsY%2BMJBDtt%2FwpwsmIDVNKaN0q1t26iQBTDcx8WUBQUuvv71eROdxTkdtRhlBgwl%2B3rygY6pgHbO3T8oMlG8oBXjEDJE%2FQFsadEkimV9rQeD7zhOW9yKM1zECKGvG81ouqLhoR85U%2BcInlGEqQrrdrz%2FPT3EXMmrQ2updF8zt4CwWCjUY1wyVpjTbXoHBjg7mbLpD7I76fo0crI5Jez%2BNCcp8oi%2BQo0ob2DV1exyVNADyR7bCvXYzrgsrAV6%2F2%2F%2BJOhGs2dQ7TOt%2FL5B6EFvkBgY4m8DTocB3esCgN6&X-Amz-Signature=e3d97d6baad9cc2b2d0847815265860ce2001f045b35dbc44c9553f92df9d82a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHFBXHM%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCgbLgFt3BYgH56RDIt27YhykUXIdhLfbuslQDRKRQg1gIhAK7HgYiMB8tSmvLWk2VLTcQw8b4eMVWr4q9xjdLy199CKv8DCDsQABoMNjM3NDIzMTgzODA1Igy01vt3%2FN6l8blxtAkq3APN%2FA6fo8oBWJcJ%2F8%2BlleD0bhzVWnpb%2FEhS3jLFi317kbzlpiyKSTulHsbQ0BdgP7D%2F3AmpsJJip44rlbU1JYXToIQLD9O%2BT6KkVIlmocU829vnB4Bxro3HivaOyw2605iOJfPzNnDGnWfRee2y1pSyJaxx%2FTTimc3Pu1xh7b3RQVOpKeTOl8Bp5JBJV6Ap7OCC88QdBz%2FpFJpIpJF%2F1AmeBZJNGEA70sYJ%2BZ6MDFqxl3L%2BKbGc9mqEq%2FPXjNSHgG5HZJSKqQx%2F7eMPJrITcq%2FLd87INTFqFpJBIvEnn7VuJY5w%2FPfIk0NTD7STUZ6eLYckEOELFokfFkOkq758L6kLqAjlL4PnHmTqQv03S1emaRugHCsCs4%2BPwWtKC3JOJlR7981lORXNdAh%2BXbc5o0%2FcJrLzTKOH9JcuWmMt%2FykTxoG1FCb20pbQR81uHUt8aDBWkETlWEpW%2BMpRLHKNeyje295219NMFPIILcGKoN7pSukFLe7AD0rZiLUfaIHFJMBrHVDhCr7dcTcMoAnD2BYuhuzi%2FxU8LnsvQUMQSFE1zo%2BPv%2BvtflRqKgQpk8jNWhHRCxUmLrSBc1wfaLb%2F%2FpkIicgySBpi%2BeFcFOdejKxGlPnZ4ZaCCmBz6OptfjCsrezKBjqkAdkuvAbgBQ7TC%2BXbQb9mefEoofu1an9dhRQ9ANpyhqnk9uswetIxmI7jNdtQQQ9%2FIig5KpnIWAYmKOGtbjSgVRufnYAC1FWkQ5mdQ9GeMjE9cP3pJZkcLQGo9d0UGDfxbjZcc2ujzpEduHcQnMc9lzWvPIC3nDtGUwM5n4uBeJ%2BLVsq%2F9HewJCnY0uKetJLQAoULJ7yELo9WBtwAnI2giT5OUoTc&X-Amz-Signature=44bd5c00d45005a182ef59c024d62832da2357cb623ad4a854a912a96e7f4b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLQC2EQ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG7USK0z2lszq%2B%2BFz95mFCEohoCe3IA%2BSHeX0%2F%2FgStxDAiAWnZw1wg%2FuVnpej2OhiCrqdZ%2FmgfzLVvuqGLih2IUV7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMMmeyEz5thgJysnbfKtwD%2FsroK5xgT3qMI0A%2FlJZaWkatEkB9F%2Fw4S0uT3gMEU7p4mVbHfrNrTgHFzPwjEvm5%2F91E1WqSQqsDFGfpEeY26v%2BGJ7MGpQBiL1tDqxQxFHvR8Tpp2H7Vkf1w%2BV4QL5sBCSGxRa%2BCFISP1CFjNMOWJg8d3PKMrFjL77RE7xj8f%2Br51AcMRthXns4uvp15Zi950UNDSdbdLL5xbmmgVjw2jtXSFlJjEfzX%2Bdiu%2FWLQuz3SXlWMkfvVEYpyzMznXflyk3XxqTzcioIjg2Zv82JIOrKX0JRtk5xLwIT0dHLWJhcvgz2rTuzCK99zyccioJ2f0Xm%2FrTMcSaElOloY2RYL56aH2KaQvSUqsWBCzAjph92RgPsUTJmViKTZipqzzb%2FaE0szKrhL5bv%2Ff1JzTkVYhDxO%2BPn3IEI9l4ThAqZe%2FEuiAa3DbceqBhRzeakwPRwYYfw243WIDJqtTpTEOt05uuxeR7vejOJ%2F3hCJRNQobNB3%2BJl31gLFZvyzowcfT4%2BTipNVt7OcRa%2FwFswTlPdGxdDd3IK5ND2yizk6TxQt5j8u4S3zBCjnp70yPcWaVw%2BsY%2BMJBDtt%2FwpwsmIDVNKaN0q1t26iQBTDcx8WUBQUuvv71eROdxTkdtRhlBgwl%2B3rygY6pgHbO3T8oMlG8oBXjEDJE%2FQFsadEkimV9rQeD7zhOW9yKM1zECKGvG81ouqLhoR85U%2BcInlGEqQrrdrz%2FPT3EXMmrQ2updF8zt4CwWCjUY1wyVpjTbXoHBjg7mbLpD7I76fo0crI5Jez%2BNCcp8oi%2BQo0ob2DV1exyVNADyR7bCvXYzrgsrAV6%2F2%2F%2BJOhGs2dQ7TOt%2FL5B6EFvkBgY4m8DTocB3esCgN6&X-Amz-Signature=a5098c78be87490d33a378ccd1b1b88336e65c57341d10b0011e71a17c14bcc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IDI24NY%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIEkEfXMN6gy43azhowoxGhBSKCRi%2FlsEQ1o9SR8QMPW2AiAyNTraR4uiCZV3mRZE0EzpcqT1EcfW60gZ7eHVErQ8vyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMKFrvggVNz%2Bnoy6sdKtwDHVXJnjSfRmdXe2ltBxPx7WasCPShvfynGnih2Qs8n6bQ9RuJJcRH7NA1CFOZnurPrtjvbexhXcP5%2BDy8Mg6hLyi%2FrkSFhFFbeOEHjJA6RW5fWecNTpQgW26UoZ%2Boe8NugWe2RZ1c3uT6oM4%2Bso%2FIXuPkRLaCaokmLkmWTvspg9Dvi%2F9qsfr4fbL32aC0PbWH%2BISagN0LCzDsMQGn4zd7S63tXhO68D3Ssrke6LN3JH8OjDefXVo8yylb7YeGIbiqG14GuVdguQ0OEWPkO0moZH%2BxuOo8rRGu4q241cytY7KMQg4FhZ3NiVbIipXv9ki9LG6FuVGeY4nJbNO781Bd7S0lfIxM6uYtFrxaUvBDdm5UZTsCVxVBWrKriOxOT7ZJAobn0on%2FsA3rDEeUVKa9efU8x9WtM9RnP5KpCCo1MrJTbIdgbdYAE2dUriJPPsR87uU2ID1IIM28KOjHLp6LXFpZHomVnuTPMkyd3H0CKb%2BEIkyVTC7d6YPzvovAIUVVc38M0OOJJ8iLMQv2qZpFrytStyHFhWmP1zMqyyv5KktEfPF8UBAQLDb0l8MeiIKlcCZvUCEO%2BkgRb3EKdHEk0YHPS8aT7TAu1WasZcKnMzBEXAzQcTRD8ovq4cAwp6PrygY6pgHxRs687P80mr%2FVstC6eVOeMEfrtSSQWlUzWyjJGxI%2B3yNOsrec796OSNgNF4olVtnnyBJcQ7lnOoUUeQuWx9OK7%2BeNhx7ew0EJNmDJAw7%2BPksYAZVB%2FyqArlUOin8OkR4DXlcCxFmf2cdSf8feuACqwyDVIGRcgUj8OarkUgTm7kO2rXHrjS%2FCdjTUsT5WewDpuRxnfjicdR2fjgynty%2BygJ%2BbHk4y&X-Amz-Signature=80c81a616e0b48808bd43c43e549ac88e0a4904b11442f5be91d78c7dde06982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLQC2EQ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG7USK0z2lszq%2B%2BFz95mFCEohoCe3IA%2BSHeX0%2F%2FgStxDAiAWnZw1wg%2FuVnpej2OhiCrqdZ%2FmgfzLVvuqGLih2IUV7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMMmeyEz5thgJysnbfKtwD%2FsroK5xgT3qMI0A%2FlJZaWkatEkB9F%2Fw4S0uT3gMEU7p4mVbHfrNrTgHFzPwjEvm5%2F91E1WqSQqsDFGfpEeY26v%2BGJ7MGpQBiL1tDqxQxFHvR8Tpp2H7Vkf1w%2BV4QL5sBCSGxRa%2BCFISP1CFjNMOWJg8d3PKMrFjL77RE7xj8f%2Br51AcMRthXns4uvp15Zi950UNDSdbdLL5xbmmgVjw2jtXSFlJjEfzX%2Bdiu%2FWLQuz3SXlWMkfvVEYpyzMznXflyk3XxqTzcioIjg2Zv82JIOrKX0JRtk5xLwIT0dHLWJhcvgz2rTuzCK99zyccioJ2f0Xm%2FrTMcSaElOloY2RYL56aH2KaQvSUqsWBCzAjph92RgPsUTJmViKTZipqzzb%2FaE0szKrhL5bv%2Ff1JzTkVYhDxO%2BPn3IEI9l4ThAqZe%2FEuiAa3DbceqBhRzeakwPRwYYfw243WIDJqtTpTEOt05uuxeR7vejOJ%2F3hCJRNQobNB3%2BJl31gLFZvyzowcfT4%2BTipNVt7OcRa%2FwFswTlPdGxdDd3IK5ND2yizk6TxQt5j8u4S3zBCjnp70yPcWaVw%2BsY%2BMJBDtt%2FwpwsmIDVNKaN0q1t26iQBTDcx8WUBQUuvv71eROdxTkdtRhlBgwl%2B3rygY6pgHbO3T8oMlG8oBXjEDJE%2FQFsadEkimV9rQeD7zhOW9yKM1zECKGvG81ouqLhoR85U%2BcInlGEqQrrdrz%2FPT3EXMmrQ2updF8zt4CwWCjUY1wyVpjTbXoHBjg7mbLpD7I76fo0crI5Jez%2BNCcp8oi%2BQo0ob2DV1exyVNADyR7bCvXYzrgsrAV6%2F2%2F%2BJOhGs2dQ7TOt%2FL5B6EFvkBgY4m8DTocB3esCgN6&X-Amz-Signature=b1ee442b802b3c21d284f57ef2af74a9a7593c67ab8724b84992800d8960168b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZGNMAO%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDhBQG8p85bWyE4pK03qAJuU0TbtiRQPlifOheyBMZwBAIhALlOUP%2BwuHbyeG2xC2pFKTLQdBzcHB0uqbwXV3yYc3VkKv8DCDcQABoMNjM3NDIzMTgzODA1Igxl0KvgWLEH70f0tPsq3AOkTKtOaVVm%2BSGFeF6kLosWv7D12wOn5siUpF6eIASUeOtYxDUGcpcaRM1%2BdgvJ1zAAS1owWnMpsFa3DyjH%2BZaZbzt4l2%2Bgg8AYuea8iYmOVenTSdfcKgdpwX4CyyW2KqGFEn4xQC3dJFnN%2BTx0kzL53NGuqk%2B47OV8r107lzOAVexZc9aIkZdxoKqnO1yLIkGW3CK95kUGwi7PgNjJhtw%2Bpu4NywQA1FhmLfZu8%2BVt7lEFo%2BUoikOykHe0a805oGE9BcGHzuOKFUGR74t4qG99maG90LRJ4EL09lfmi8Dk94b%2F4d08HpIna3GmTwmHwZQkrFbKEkFIwkjJB6adMJviwl9aJpovn2KEethSWQKygC%2FUC8O6h2skHMP%2FfgmS0%2F7mmaF3cPtcdqGKlTw4y1MYjMjTJjWM7Cwhxx9SBTaTpOPpTg6bK%2FySOoqLAQBjQfJFkZDX%2Fnhx7GwPKZFiH4j9u60GJvtTv0RvCtWOHwW8pp0Rl2a9Bjikx6w60Vi%2FBUuh%2FhPGbXZJw5fA27kQ40pgMtdJ%2FIOeaXU2otagsY2ALm0zICalHKCKxH5Hfk1LpjjI9OpzXhWUBzWbkvbXBJxbfY9zWJ8pHVpyE9QcS7UKKyKaQ2C%2B349IPfcLHDCgzuvKBjqkAcE2xU%2BerKccTivuu4elbM9kB%2FJxt9KsBIWwD2BDP3Hlm7gbdCFpolvfvvd%2B3FU5JtMSGmoEu7J%2Bzx0fxtT84GQIPk%2FNubyTGR0wbT32TnqJ6WrT%2FzLwHjkOM%2F1kL21s2zK2JPq9ayn20B3RUFm3MYvvLpxW2u8TwpYltSvXhnHdXM%2BJUr96%2BAb2LU4yWDX0IcVbwe8YK7lzuHbFpIykoA0BVnqj&X-Amz-Signature=522256f47cf0cf866a9962ce013bed8a8975627a46608c9b7cf1f8b446641810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLQC2EQ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG7USK0z2lszq%2B%2BFz95mFCEohoCe3IA%2BSHeX0%2F%2FgStxDAiAWnZw1wg%2FuVnpej2OhiCrqdZ%2FmgfzLVvuqGLih2IUV7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMMmeyEz5thgJysnbfKtwD%2FsroK5xgT3qMI0A%2FlJZaWkatEkB9F%2Fw4S0uT3gMEU7p4mVbHfrNrTgHFzPwjEvm5%2F91E1WqSQqsDFGfpEeY26v%2BGJ7MGpQBiL1tDqxQxFHvR8Tpp2H7Vkf1w%2BV4QL5sBCSGxRa%2BCFISP1CFjNMOWJg8d3PKMrFjL77RE7xj8f%2Br51AcMRthXns4uvp15Zi950UNDSdbdLL5xbmmgVjw2jtXSFlJjEfzX%2Bdiu%2FWLQuz3SXlWMkfvVEYpyzMznXflyk3XxqTzcioIjg2Zv82JIOrKX0JRtk5xLwIT0dHLWJhcvgz2rTuzCK99zyccioJ2f0Xm%2FrTMcSaElOloY2RYL56aH2KaQvSUqsWBCzAjph92RgPsUTJmViKTZipqzzb%2FaE0szKrhL5bv%2Ff1JzTkVYhDxO%2BPn3IEI9l4ThAqZe%2FEuiAa3DbceqBhRzeakwPRwYYfw243WIDJqtTpTEOt05uuxeR7vejOJ%2F3hCJRNQobNB3%2BJl31gLFZvyzowcfT4%2BTipNVt7OcRa%2FwFswTlPdGxdDd3IK5ND2yizk6TxQt5j8u4S3zBCjnp70yPcWaVw%2BsY%2BMJBDtt%2FwpwsmIDVNKaN0q1t26iQBTDcx8WUBQUuvv71eROdxTkdtRhlBgwl%2B3rygY6pgHbO3T8oMlG8oBXjEDJE%2FQFsadEkimV9rQeD7zhOW9yKM1zECKGvG81ouqLhoR85U%2BcInlGEqQrrdrz%2FPT3EXMmrQ2updF8zt4CwWCjUY1wyVpjTbXoHBjg7mbLpD7I76fo0crI5Jez%2BNCcp8oi%2BQo0ob2DV1exyVNADyR7bCvXYzrgsrAV6%2F2%2F%2BJOhGs2dQ7TOt%2FL5B6EFvkBgY4m8DTocB3esCgN6&X-Amz-Signature=a68a660b3537e8ce603cb13e0aa3a72bc07c3c365401cb42d26bfcb9d2112797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W6Y2PBC%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICw%2FtIj7qghcBD09V1z%2BvGpkobIyfJYlbeTBYNBBit4zAiAz74jIdy9OFpL2YiPkDwr3WhdCrz6oaCZNbTNJzX3H0Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMKCip98Ka0E8zYWz4KtwDh%2FXLQ5de%2Br%2B6UdpPsuCidFG7p2Vk7nREHiK47lgYQw1XfW616%2F3smYvUNrV%2BLgArEgzBC4EmAwMuPRA%2B763lZvv5DmljuI%2FgUE8UWj%2B%2Bc0mNA9kg51%2B9Q2NzF4GfYi2aP7zVhKSEAWGm5n%2BGqkKwKfB7yXZayB3sPcr%2BV%2FSMhsnRyF5Pm60jHRIDP5dWBBW5sDZr56N4SnI89ohVifPWExsQKGhM%2BeLdSm6Uq2RPomIX4znJ8Jd3Ktd2kVsyTxV0Ya3wpy7eZCgL99ZeZ34b75fbpXkqJzTK%2FZuREpEU964hSnn%2BFRz8CbOKxQEgGwgv0i%2BrQ%2Bra4qwYIn1f94eKCf9KZAMYC6sGVHPiJdHndFMFG6OYylKB6fFjTvuf6m8G9tvbndS4VUnuWe98fGd1EtIjWrh07nMWwZIM79WQPpm2ZrROxrY2JPh1pXGpFMHLWPw07FDHliJwTUjrZhBaUiLApJBjaNuX8Jhi5ezeejcFMZM%2B2LXxwpBidBqpZlz6Q90l0w3fXGaqCqcMdZR3JcK55447aRxVePlKOxH4bm2wRV6RRaj57nghEnXhZFWB4bX%2FmhKHADk6EzgV31NCK5KJg5IMelfCm%2BinDlwLBFn%2BFoBSsDLISWaAtCAwysPrygY6pgHXKNsKmZ4TMdE0arI15ukq5NCeZNW6%2B%2B4pN2cJ1iraDisBeeoSowxsx%2FUe4nZNs9GvQtzNA%2FXneFO0H0SXgUlClrCmShiKAi1RaJEEwZXCVb5QLIw%2BJkFSi9uIUW2a7DpLQyJsEnebHutwpm144yMEQLf98Y4E4LW8x%2BHcjaODhQxFFc9b69me3sm32hVw44ACPRD4gAO8XXhFmBtqwPDUWqgK9CA4&X-Amz-Signature=7a91b03dcb44ebf9b2e25cc3ef26fcff9a4881eb6ef7b7da90cf0e105dec22ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ROHWRF2%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIEnZ4E7vMxw4TdXmA3kO0PjJDy0go6GwVbm0YtBhZ1eXAiEA4WVSW4MU%2BtW%2FhYkGLvFIEMoNtS3oyex1RXC8r8BCg6Aq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH49uktj0ha0wGYF5ircA%2FnTyxEAoipV0vfFyfebvLl%2FxPhvUeWzfeovBKy71sxp%2BvwkB%2BUrq0hExdf3JMFPbg%2B2XYJfx6tCWBIQnxXrbm1FHRrA150c%2Fy9Mxie85nQCV%2F8j7XAf1i4XRCZwQjFMMM4ZJJyWjP9goCrioQD8%2BuCH4djsprvNGGTKC6c2aRPK8I5VXMdHB98bw0Aw%2BhgM9q91Y9e1g7C5QtI8xPf8Zr7OUwcqE8vaH7crSBYy%2B4gVeZK5eIXb2bV7yddAI8w4cbD9sTEYXJLrQbT9NH8xpQgU85QV1PcDI%2BH0pj4ZefMj6rphGSEFZ0NIZMBxTVXDPc3f1HucvLaB%2BOeSQI7Tm7%2ByCQ5bEdU%2FWJ7nKuWJ69UZskL2qw8DMFL7CgrutViDr4FkM%2BqBsiyTdhstjeneTkV9fcDuyNLmnzjxmnhnQZkXQQXtFplcqooTgFxrrjvoVgjGfcg6PZyBJujhU9HNK2u0pwnRp%2FB%2Fmi8g3Q3kXTww30ngCeDLT5%2F7Vg7JTefYcT8NAc91mMgXr3yeR7zGtD0WzDC0bRCZfYj3VUCWFv7quyUY%2FQGlMvbBIsVkzmBCqp%2BzeJfE3YBkOfL6RJcArRsMITiIjOFHAVupAsc1chSzvpmyd3HCrmKn9LrNMN2B7MoGOqUBIgss9ZlaunK3Uk1qXBHQ2MtGf6pSr01x8wMKgC%2FKrHhMe7fm4COfrYtwHzC7ltvHPZ93%2FTw7Z%2Fl3UllxnjAWb88RxahXowOzGn%2F9YRFEUWmG5Z30tL5eP9CWnWqY%2FXNd5CnuJh01sbwKVVCb4V173m4%2BeUVwdqUMLS7oWxJZ%2B%2BZ2rd7I%2FV19GDkSig8a1ZZZQZRjU6dAbTzDT459P4cqlahKPNhr&X-Amz-Signature=68ccc3611802fe0d6293b814acc289796142889ccda4aff6eca16abdc5e4f00f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2G7KVEE%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFcd651etRYdOZNj00ci7hLMToj7eWMJIdQBNzJGj0VBAiEAghma8uZy9s20f3KLUy5DoIVyU3%2BTfRHJ4BpSTDNuYWIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEvMkfnRXKR70rs97SrcA2Db4FdB3VNAaMJqT5J4ijn3uuISG%2FCFiykj3dXlBRvZXVp9XPwpeAkjxeLyyS%2BPW64mYB%2BfKPOKyh5giBMeXWC3Yz1iJAp8cKIoF5NBPXkJDhOZ%2BLdciuW2lpR3pe2KW%2BxbL5PCvdCaWBqRjkl64%2BJsgeWziJ2QsbQt33iR96UxnUOpL5ARUaMysHuuVKCPqXebUJ97ePYz4c3AU3TWzMHe0gwjcAi%2F82V8G8k7VuG6pGxMMIlHJhcRwDYjK1VunVM6Y5rjCx%2BlY3VzMwRfO0FAiy1lrmIOEZCwtMc1ZnvW%2FCfmnQOlnSLn82Tfz93TL%2Bme6ZuK%2Bew3xhtTvKZfW5yVkAnxdWyrT7%2BZjk5IHr9LypfVArDLvscxtEqdkAyjhHgmPdLV6JFNCf8LJwsj7PPLBz3gZmrO1WWTPROMG60kxvJdDKJkNN4M1OxGGvwQBohqjzxn27GjQG5IdbdJGiqXyl8R7bQLdnz6V4J6Nvss%2FLbUkmjIwPyZrlH0a%2BDYmHFnt11SaDbAl%2BlopBHB6CpyF1ubakGbJtK3EdS%2BOszQTUXWf7jRrsDJA1QmSA2vHDF0acPmjo4mZ3nrMLBFZgJyFNVV0GYTTeF1Mq8sFbAtd7QrJ4sIxnanFjIrMNu07MoGOqUB%2BkpXqnPrfHBXt5rXVWi9hJobm6aQMsSIuZSAPUBieXsvsZuJxB9IBVtHL3OcT9lDeijhyJ65LNk5IMHcTMhel4w9hN%2FO9PhpjUT2BXGgYQpuYmdwpihWxYNfLorz%2FSRHbN342kgBjXeS%2Bc7L%2BXKSljLQplwCcH5zKofsFNTQxaUXQf%2F3wnyyCfdmDu3brczaui9x5QC%2FH28vEFo7rekG0Zp%2FQ7rm&X-Amz-Signature=fa0f37042026ff273e953034702b6a59d507bd63efef545690cae9e50c6056f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLQC2EQ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG7USK0z2lszq%2B%2BFz95mFCEohoCe3IA%2BSHeX0%2F%2FgStxDAiAWnZw1wg%2FuVnpej2OhiCrqdZ%2FmgfzLVvuqGLih2IUV7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMMmeyEz5thgJysnbfKtwD%2FsroK5xgT3qMI0A%2FlJZaWkatEkB9F%2Fw4S0uT3gMEU7p4mVbHfrNrTgHFzPwjEvm5%2F91E1WqSQqsDFGfpEeY26v%2BGJ7MGpQBiL1tDqxQxFHvR8Tpp2H7Vkf1w%2BV4QL5sBCSGxRa%2BCFISP1CFjNMOWJg8d3PKMrFjL77RE7xj8f%2Br51AcMRthXns4uvp15Zi950UNDSdbdLL5xbmmgVjw2jtXSFlJjEfzX%2Bdiu%2FWLQuz3SXlWMkfvVEYpyzMznXflyk3XxqTzcioIjg2Zv82JIOrKX0JRtk5xLwIT0dHLWJhcvgz2rTuzCK99zyccioJ2f0Xm%2FrTMcSaElOloY2RYL56aH2KaQvSUqsWBCzAjph92RgPsUTJmViKTZipqzzb%2FaE0szKrhL5bv%2Ff1JzTkVYhDxO%2BPn3IEI9l4ThAqZe%2FEuiAa3DbceqBhRzeakwPRwYYfw243WIDJqtTpTEOt05uuxeR7vejOJ%2F3hCJRNQobNB3%2BJl31gLFZvyzowcfT4%2BTipNVt7OcRa%2FwFswTlPdGxdDd3IK5ND2yizk6TxQt5j8u4S3zBCjnp70yPcWaVw%2BsY%2BMJBDtt%2FwpwsmIDVNKaN0q1t26iQBTDcx8WUBQUuvv71eROdxTkdtRhlBgwl%2B3rygY6pgHbO3T8oMlG8oBXjEDJE%2FQFsadEkimV9rQeD7zhOW9yKM1zECKGvG81ouqLhoR85U%2BcInlGEqQrrdrz%2FPT3EXMmrQ2updF8zt4CwWCjUY1wyVpjTbXoHBjg7mbLpD7I76fo0crI5Jez%2BNCcp8oi%2BQo0ob2DV1exyVNADyR7bCvXYzrgsrAV6%2F2%2F%2BJOhGs2dQ7TOt%2FL5B6EFvkBgY4m8DTocB3esCgN6&X-Amz-Signature=cefe6eace123f77da1c6f517e223afcd57e7fae628b73414ed125e5c4d016f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLQC2EQ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG7USK0z2lszq%2B%2BFz95mFCEohoCe3IA%2BSHeX0%2F%2FgStxDAiAWnZw1wg%2FuVnpej2OhiCrqdZ%2FmgfzLVvuqGLih2IUV7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMMmeyEz5thgJysnbfKtwD%2FsroK5xgT3qMI0A%2FlJZaWkatEkB9F%2Fw4S0uT3gMEU7p4mVbHfrNrTgHFzPwjEvm5%2F91E1WqSQqsDFGfpEeY26v%2BGJ7MGpQBiL1tDqxQxFHvR8Tpp2H7Vkf1w%2BV4QL5sBCSGxRa%2BCFISP1CFjNMOWJg8d3PKMrFjL77RE7xj8f%2Br51AcMRthXns4uvp15Zi950UNDSdbdLL5xbmmgVjw2jtXSFlJjEfzX%2Bdiu%2FWLQuz3SXlWMkfvVEYpyzMznXflyk3XxqTzcioIjg2Zv82JIOrKX0JRtk5xLwIT0dHLWJhcvgz2rTuzCK99zyccioJ2f0Xm%2FrTMcSaElOloY2RYL56aH2KaQvSUqsWBCzAjph92RgPsUTJmViKTZipqzzb%2FaE0szKrhL5bv%2Ff1JzTkVYhDxO%2BPn3IEI9l4ThAqZe%2FEuiAa3DbceqBhRzeakwPRwYYfw243WIDJqtTpTEOt05uuxeR7vejOJ%2F3hCJRNQobNB3%2BJl31gLFZvyzowcfT4%2BTipNVt7OcRa%2FwFswTlPdGxdDd3IK5ND2yizk6TxQt5j8u4S3zBCjnp70yPcWaVw%2BsY%2BMJBDtt%2FwpwsmIDVNKaN0q1t26iQBTDcx8WUBQUuvv71eROdxTkdtRhlBgwl%2B3rygY6pgHbO3T8oMlG8oBXjEDJE%2FQFsadEkimV9rQeD7zhOW9yKM1zECKGvG81ouqLhoR85U%2BcInlGEqQrrdrz%2FPT3EXMmrQ2updF8zt4CwWCjUY1wyVpjTbXoHBjg7mbLpD7I76fo0crI5Jez%2BNCcp8oi%2BQo0ob2DV1exyVNADyR7bCvXYzrgsrAV6%2F2%2F%2BJOhGs2dQ7TOt%2FL5B6EFvkBgY4m8DTocB3esCgN6&X-Amz-Signature=30a52bc013146088854ef24a799774a73c63ee1d3665f6fa117a886161a64444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOFCBC3D%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGUmHBF2kprkoYKptaa78tLGkRDMBO741KNTacdQvarMAiBLjUSieQTRVE0vz%2BBWtqC4nqb5J8xBkyNggBrJ45T4oir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMzC4AeTFF0PpC86yiKtwDt%2BO2GE5FX7deq4Klvmk2zMKYNtav%2B%2F9KDZEJ0d%2BTfGMQZ6PixCEGSV3IfYcOHn5sUyFugZkvwsLlybPu3RXkxeC6Y%2BUDx3lkOUAd6zq%2FT5DAi7ggXvNWdUU9QfzLnnhhWJ97TVYfep7bi3%2FUEZkt2rEtTCnCxY7nqjv%2FzyRXqz1FfJbqnuMRofJi0mgHlPEV692bydTVSHuVkQqOkFZYWPhU4esJ%2FEZxDuvrPZVZ3QJEbPjvFnLdLRNzqTNX7uXfFG65Bj4Bh2LeWxHnPLW0DAeoe5xxmPha6CPrfzGQ%2FUm1bSxkzT92FmwabmE1%2FZtQyDN%2F8gvKq8QS6dBnpv0Rur%2F9ItnNc1Pkrc2HbxUQGCpTnz9fSOEo%2Bp6f8jw02SceaqVtQGSSGI9CTQUDWg%2FLD2lauvHyvyJjhMHWj9xj3EsgiToJb9W2FwBGM%2BL6%2Flm7x4IsDSIQ1ebCDVLIXpMsDRlaTC3eYI1sqT%2FN%2FnuhqB%2BiJHEHNQCsgKRAqD9Eg1VTy7vMy%2BFyBXiBmLV17%2BGLwqwKtC1aC24dEwIwiAyj8YvfoHMfv2XepnU0txU%2FKID%2Btjs4fPd3RcANbqtbLsp98pDLf6McVHBM3f67jPufhL3Akr3NFM8l4a9U2pYwqaXsygY6pgEXU517wOinNDz%2BnNK07UsMiICjVIrheNnAH%2BZU%2BhUjdM1cu%2B4z1kJIg143Cx%2FrokipNEVuWseTH%2Bq5bTx%2BiH7DrS%2FNbYcruZGlY%2BxpZxEO8MDLMqeZFt0ANqcknuJjjLQRXEZemp3Dxch6%2FvCl34015PUnhdcQzu7QJQ7S7sGaWwjIsLC2X2sa8KQQ4hMbfTSbw9YVmO4%2BEq%2FPSegvr1EcQNW9UZHU&X-Amz-Signature=c20b09b74e79322aaacbd0eb179a2c77cf1c8bffa055113c199c7b21b2a6cdb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOFCBC3D%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGUmHBF2kprkoYKptaa78tLGkRDMBO741KNTacdQvarMAiBLjUSieQTRVE0vz%2BBWtqC4nqb5J8xBkyNggBrJ45T4oir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMzC4AeTFF0PpC86yiKtwDt%2BO2GE5FX7deq4Klvmk2zMKYNtav%2B%2F9KDZEJ0d%2BTfGMQZ6PixCEGSV3IfYcOHn5sUyFugZkvwsLlybPu3RXkxeC6Y%2BUDx3lkOUAd6zq%2FT5DAi7ggXvNWdUU9QfzLnnhhWJ97TVYfep7bi3%2FUEZkt2rEtTCnCxY7nqjv%2FzyRXqz1FfJbqnuMRofJi0mgHlPEV692bydTVSHuVkQqOkFZYWPhU4esJ%2FEZxDuvrPZVZ3QJEbPjvFnLdLRNzqTNX7uXfFG65Bj4Bh2LeWxHnPLW0DAeoe5xxmPha6CPrfzGQ%2FUm1bSxkzT92FmwabmE1%2FZtQyDN%2F8gvKq8QS6dBnpv0Rur%2F9ItnNc1Pkrc2HbxUQGCpTnz9fSOEo%2Bp6f8jw02SceaqVtQGSSGI9CTQUDWg%2FLD2lauvHyvyJjhMHWj9xj3EsgiToJb9W2FwBGM%2BL6%2Flm7x4IsDSIQ1ebCDVLIXpMsDRlaTC3eYI1sqT%2FN%2FnuhqB%2BiJHEHNQCsgKRAqD9Eg1VTy7vMy%2BFyBXiBmLV17%2BGLwqwKtC1aC24dEwIwiAyj8YvfoHMfv2XepnU0txU%2FKID%2Btjs4fPd3RcANbqtbLsp98pDLf6McVHBM3f67jPufhL3Akr3NFM8l4a9U2pYwqaXsygY6pgEXU517wOinNDz%2BnNK07UsMiICjVIrheNnAH%2BZU%2BhUjdM1cu%2B4z1kJIg143Cx%2FrokipNEVuWseTH%2Bq5bTx%2BiH7DrS%2FNbYcruZGlY%2BxpZxEO8MDLMqeZFt0ANqcknuJjjLQRXEZemp3Dxch6%2FvCl34015PUnhdcQzu7QJQ7S7sGaWwjIsLC2X2sa8KQQ4hMbfTSbw9YVmO4%2BEq%2FPSegvr1EcQNW9UZHU&X-Amz-Signature=cfa97d82d14985b1ea356cceb28786e568d1dd62712806c505be3ac78758ef45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOFCBC3D%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGUmHBF2kprkoYKptaa78tLGkRDMBO741KNTacdQvarMAiBLjUSieQTRVE0vz%2BBWtqC4nqb5J8xBkyNggBrJ45T4oir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMzC4AeTFF0PpC86yiKtwDt%2BO2GE5FX7deq4Klvmk2zMKYNtav%2B%2F9KDZEJ0d%2BTfGMQZ6PixCEGSV3IfYcOHn5sUyFugZkvwsLlybPu3RXkxeC6Y%2BUDx3lkOUAd6zq%2FT5DAi7ggXvNWdUU9QfzLnnhhWJ97TVYfep7bi3%2FUEZkt2rEtTCnCxY7nqjv%2FzyRXqz1FfJbqnuMRofJi0mgHlPEV692bydTVSHuVkQqOkFZYWPhU4esJ%2FEZxDuvrPZVZ3QJEbPjvFnLdLRNzqTNX7uXfFG65Bj4Bh2LeWxHnPLW0DAeoe5xxmPha6CPrfzGQ%2FUm1bSxkzT92FmwabmE1%2FZtQyDN%2F8gvKq8QS6dBnpv0Rur%2F9ItnNc1Pkrc2HbxUQGCpTnz9fSOEo%2Bp6f8jw02SceaqVtQGSSGI9CTQUDWg%2FLD2lauvHyvyJjhMHWj9xj3EsgiToJb9W2FwBGM%2BL6%2Flm7x4IsDSIQ1ebCDVLIXpMsDRlaTC3eYI1sqT%2FN%2FnuhqB%2BiJHEHNQCsgKRAqD9Eg1VTy7vMy%2BFyBXiBmLV17%2BGLwqwKtC1aC24dEwIwiAyj8YvfoHMfv2XepnU0txU%2FKID%2Btjs4fPd3RcANbqtbLsp98pDLf6McVHBM3f67jPufhL3Akr3NFM8l4a9U2pYwqaXsygY6pgEXU517wOinNDz%2BnNK07UsMiICjVIrheNnAH%2BZU%2BhUjdM1cu%2B4z1kJIg143Cx%2FrokipNEVuWseTH%2Bq5bTx%2BiH7DrS%2FNbYcruZGlY%2BxpZxEO8MDLMqeZFt0ANqcknuJjjLQRXEZemp3Dxch6%2FvCl34015PUnhdcQzu7QJQ7S7sGaWwjIsLC2X2sa8KQQ4hMbfTSbw9YVmO4%2BEq%2FPSegvr1EcQNW9UZHU&X-Amz-Signature=c837793b8a8dd63d061ed9823acb9b5bed04431f678099677e08af8ad8400155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOFCBC3D%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGUmHBF2kprkoYKptaa78tLGkRDMBO741KNTacdQvarMAiBLjUSieQTRVE0vz%2BBWtqC4nqb5J8xBkyNggBrJ45T4oir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMzC4AeTFF0PpC86yiKtwDt%2BO2GE5FX7deq4Klvmk2zMKYNtav%2B%2F9KDZEJ0d%2BTfGMQZ6PixCEGSV3IfYcOHn5sUyFugZkvwsLlybPu3RXkxeC6Y%2BUDx3lkOUAd6zq%2FT5DAi7ggXvNWdUU9QfzLnnhhWJ97TVYfep7bi3%2FUEZkt2rEtTCnCxY7nqjv%2FzyRXqz1FfJbqnuMRofJi0mgHlPEV692bydTVSHuVkQqOkFZYWPhU4esJ%2FEZxDuvrPZVZ3QJEbPjvFnLdLRNzqTNX7uXfFG65Bj4Bh2LeWxHnPLW0DAeoe5xxmPha6CPrfzGQ%2FUm1bSxkzT92FmwabmE1%2FZtQyDN%2F8gvKq8QS6dBnpv0Rur%2F9ItnNc1Pkrc2HbxUQGCpTnz9fSOEo%2Bp6f8jw02SceaqVtQGSSGI9CTQUDWg%2FLD2lauvHyvyJjhMHWj9xj3EsgiToJb9W2FwBGM%2BL6%2Flm7x4IsDSIQ1ebCDVLIXpMsDRlaTC3eYI1sqT%2FN%2FnuhqB%2BiJHEHNQCsgKRAqD9Eg1VTy7vMy%2BFyBXiBmLV17%2BGLwqwKtC1aC24dEwIwiAyj8YvfoHMfv2XepnU0txU%2FKID%2Btjs4fPd3RcANbqtbLsp98pDLf6McVHBM3f67jPufhL3Akr3NFM8l4a9U2pYwqaXsygY6pgEXU517wOinNDz%2BnNK07UsMiICjVIrheNnAH%2BZU%2BhUjdM1cu%2B4z1kJIg143Cx%2FrokipNEVuWseTH%2Bq5bTx%2BiH7DrS%2FNbYcruZGlY%2BxpZxEO8MDLMqeZFt0ANqcknuJjjLQRXEZemp3Dxch6%2FvCl34015PUnhdcQzu7QJQ7S7sGaWwjIsLC2X2sa8KQQ4hMbfTSbw9YVmO4%2BEq%2FPSegvr1EcQNW9UZHU&X-Amz-Signature=9d91e35514d26606ae307a08bf2bfa83efbd652877453718cee01bb8b0c66229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGR7NX5V%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD86FPRoPsMvpBjM%2FDJMAvOgwr2YvRt2w%2Bo3O5bvjoHxgIhAIcWkFmoBF5ansmkTKYLMGEPC08GzTUO%2BM5TB0yw%2F0URKv8DCDsQABoMNjM3NDIzMTgzODA1Igy5Et7IEtRRIf8y5usq3AO04H9kkZNOIxRyWgJDHc%2FTqCOgjjqgt6x5KtdSBpU44Y6qXj%2BTlayAM0RIfoWi4Vntq%2FoToIOSgEO5qBRfIjvRAZTAZ5DXaRSK%2FLdMkcyzfTO3FEY8%2FOVhXtEba1YR2QWHbVXsmj95ZCmqAP1DkNHyrMCGdjcDLSIPexKAO81OFaGpnGg4JjtNEb4upVzHMYG26AVMbtjoFOBvsd3CqI36cFL2AEMG7VoCgLAGMqyajRSjAyLUBsMsrMk7avvzQE2CFQyvrr44KrPneTUQQc18%2F8Ffhu4c%2BWekRlUM%2F8NWoWNxOkbXAOnnx9krPqSUj%2BbzGbHvs4NJiSeZOIW6ycNlxTzrxVy0YOc9O1agHtbXsucXSX1i1srTQxmmlBT4C1%2B8%2F%2F4oYz9JmRu45vW7zaABeipnO1eiJfQkabKmIWyFdRNN2LGwe0WiAxhL5%2Bfh3qi6H7mArB2aWh3TLhZQwK0mNLei8kYnLcFYA4ZWxZkfNNx%2F78B2kpgID5099i2Vp0IypZmtYH0GLqx%2Bo3lm5R1Jv%2FKFe%2FmA%2F2C55OoCXzFqt4O%2BfmDhOFx3Z7AIscCxaqMhUL7TtrnKUXbJrfhqJuRfDVwgkfNCm0eeURmyVu9cCemRNele46H2J0lf8TD%2Bq%2BzKBjqkASUG1OdyMvFZRq7xVD89Fw5VOguU0zJll2XRV18vwdMiKgbn3QBmdrTDmAVhDvjvSPiIYl9tqgopM60sTpU9OLtHnwwBydJkaw%2Bfr1GtUq5XvTJ%2FP9Y6%2Fo1bM3mXR1Ig6hsOCwbxxfc5DHr0MSpZrfGA0XlvgYyrTXcASQ2H%2Fu0C1eVl0vrKZW9Ng%2BDeSGJhloGUNBb8gZtuQsPGaC8URWtOkjT9&X-Amz-Signature=4286eb4c2ffb3a9680827071875fb94e3b7120dd856ce02ab4fe137edc5b9583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOFCBC3D%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGUmHBF2kprkoYKptaa78tLGkRDMBO741KNTacdQvarMAiBLjUSieQTRVE0vz%2BBWtqC4nqb5J8xBkyNggBrJ45T4oir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMzC4AeTFF0PpC86yiKtwDt%2BO2GE5FX7deq4Klvmk2zMKYNtav%2B%2F9KDZEJ0d%2BTfGMQZ6PixCEGSV3IfYcOHn5sUyFugZkvwsLlybPu3RXkxeC6Y%2BUDx3lkOUAd6zq%2FT5DAi7ggXvNWdUU9QfzLnnhhWJ97TVYfep7bi3%2FUEZkt2rEtTCnCxY7nqjv%2FzyRXqz1FfJbqnuMRofJi0mgHlPEV692bydTVSHuVkQqOkFZYWPhU4esJ%2FEZxDuvrPZVZ3QJEbPjvFnLdLRNzqTNX7uXfFG65Bj4Bh2LeWxHnPLW0DAeoe5xxmPha6CPrfzGQ%2FUm1bSxkzT92FmwabmE1%2FZtQyDN%2F8gvKq8QS6dBnpv0Rur%2F9ItnNc1Pkrc2HbxUQGCpTnz9fSOEo%2Bp6f8jw02SceaqVtQGSSGI9CTQUDWg%2FLD2lauvHyvyJjhMHWj9xj3EsgiToJb9W2FwBGM%2BL6%2Flm7x4IsDSIQ1ebCDVLIXpMsDRlaTC3eYI1sqT%2FN%2FnuhqB%2BiJHEHNQCsgKRAqD9Eg1VTy7vMy%2BFyBXiBmLV17%2BGLwqwKtC1aC24dEwIwiAyj8YvfoHMfv2XepnU0txU%2FKID%2Btjs4fPd3RcANbqtbLsp98pDLf6McVHBM3f67jPufhL3Akr3NFM8l4a9U2pYwqaXsygY6pgEXU517wOinNDz%2BnNK07UsMiICjVIrheNnAH%2BZU%2BhUjdM1cu%2B4z1kJIg143Cx%2FrokipNEVuWseTH%2Bq5bTx%2BiH7DrS%2FNbYcruZGlY%2BxpZxEO8MDLMqeZFt0ANqcknuJjjLQRXEZemp3Dxch6%2FvCl34015PUnhdcQzu7QJQ7S7sGaWwjIsLC2X2sa8KQQ4hMbfTSbw9YVmO4%2BEq%2FPSegvr1EcQNW9UZHU&X-Amz-Signature=18d1a3c2d35dc54d3b4c0503593fb7de75ff2c8d172461b08ffabf8d92ab4e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOFCBC3D%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGUmHBF2kprkoYKptaa78tLGkRDMBO741KNTacdQvarMAiBLjUSieQTRVE0vz%2BBWtqC4nqb5J8xBkyNggBrJ45T4oir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMzC4AeTFF0PpC86yiKtwDt%2BO2GE5FX7deq4Klvmk2zMKYNtav%2B%2F9KDZEJ0d%2BTfGMQZ6PixCEGSV3IfYcOHn5sUyFugZkvwsLlybPu3RXkxeC6Y%2BUDx3lkOUAd6zq%2FT5DAi7ggXvNWdUU9QfzLnnhhWJ97TVYfep7bi3%2FUEZkt2rEtTCnCxY7nqjv%2FzyRXqz1FfJbqnuMRofJi0mgHlPEV692bydTVSHuVkQqOkFZYWPhU4esJ%2FEZxDuvrPZVZ3QJEbPjvFnLdLRNzqTNX7uXfFG65Bj4Bh2LeWxHnPLW0DAeoe5xxmPha6CPrfzGQ%2FUm1bSxkzT92FmwabmE1%2FZtQyDN%2F8gvKq8QS6dBnpv0Rur%2F9ItnNc1Pkrc2HbxUQGCpTnz9fSOEo%2Bp6f8jw02SceaqVtQGSSGI9CTQUDWg%2FLD2lauvHyvyJjhMHWj9xj3EsgiToJb9W2FwBGM%2BL6%2Flm7x4IsDSIQ1ebCDVLIXpMsDRlaTC3eYI1sqT%2FN%2FnuhqB%2BiJHEHNQCsgKRAqD9Eg1VTy7vMy%2BFyBXiBmLV17%2BGLwqwKtC1aC24dEwIwiAyj8YvfoHMfv2XepnU0txU%2FKID%2Btjs4fPd3RcANbqtbLsp98pDLf6McVHBM3f67jPufhL3Akr3NFM8l4a9U2pYwqaXsygY6pgEXU517wOinNDz%2BnNK07UsMiICjVIrheNnAH%2BZU%2BhUjdM1cu%2B4z1kJIg143Cx%2FrokipNEVuWseTH%2Bq5bTx%2BiH7DrS%2FNbYcruZGlY%2BxpZxEO8MDLMqeZFt0ANqcknuJjjLQRXEZemp3Dxch6%2FvCl34015PUnhdcQzu7QJQ7S7sGaWwjIsLC2X2sa8KQQ4hMbfTSbw9YVmO4%2BEq%2FPSegvr1EcQNW9UZHU&X-Amz-Signature=a2c07d4064a30f7b3af64e6d929f2d49fa5dbe4213182cf3511db7edf2554df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOFCBC3D%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGUmHBF2kprkoYKptaa78tLGkRDMBO741KNTacdQvarMAiBLjUSieQTRVE0vz%2BBWtqC4nqb5J8xBkyNggBrJ45T4oir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMzC4AeTFF0PpC86yiKtwDt%2BO2GE5FX7deq4Klvmk2zMKYNtav%2B%2F9KDZEJ0d%2BTfGMQZ6PixCEGSV3IfYcOHn5sUyFugZkvwsLlybPu3RXkxeC6Y%2BUDx3lkOUAd6zq%2FT5DAi7ggXvNWdUU9QfzLnnhhWJ97TVYfep7bi3%2FUEZkt2rEtTCnCxY7nqjv%2FzyRXqz1FfJbqnuMRofJi0mgHlPEV692bydTVSHuVkQqOkFZYWPhU4esJ%2FEZxDuvrPZVZ3QJEbPjvFnLdLRNzqTNX7uXfFG65Bj4Bh2LeWxHnPLW0DAeoe5xxmPha6CPrfzGQ%2FUm1bSxkzT92FmwabmE1%2FZtQyDN%2F8gvKq8QS6dBnpv0Rur%2F9ItnNc1Pkrc2HbxUQGCpTnz9fSOEo%2Bp6f8jw02SceaqVtQGSSGI9CTQUDWg%2FLD2lauvHyvyJjhMHWj9xj3EsgiToJb9W2FwBGM%2BL6%2Flm7x4IsDSIQ1ebCDVLIXpMsDRlaTC3eYI1sqT%2FN%2FnuhqB%2BiJHEHNQCsgKRAqD9Eg1VTy7vMy%2BFyBXiBmLV17%2BGLwqwKtC1aC24dEwIwiAyj8YvfoHMfv2XepnU0txU%2FKID%2Btjs4fPd3RcANbqtbLsp98pDLf6McVHBM3f67jPufhL3Akr3NFM8l4a9U2pYwqaXsygY6pgEXU517wOinNDz%2BnNK07UsMiICjVIrheNnAH%2BZU%2BhUjdM1cu%2B4z1kJIg143Cx%2FrokipNEVuWseTH%2Bq5bTx%2BiH7DrS%2FNbYcruZGlY%2BxpZxEO8MDLMqeZFt0ANqcknuJjjLQRXEZemp3Dxch6%2FvCl34015PUnhdcQzu7QJQ7S7sGaWwjIsLC2X2sa8KQQ4hMbfTSbw9YVmO4%2BEq%2FPSegvr1EcQNW9UZHU&X-Amz-Signature=c837793b8a8dd63d061ed9823acb9b5bed04431f678099677e08af8ad8400155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOFCBC3D%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGUmHBF2kprkoYKptaa78tLGkRDMBO741KNTacdQvarMAiBLjUSieQTRVE0vz%2BBWtqC4nqb5J8xBkyNggBrJ45T4oir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMzC4AeTFF0PpC86yiKtwDt%2BO2GE5FX7deq4Klvmk2zMKYNtav%2B%2F9KDZEJ0d%2BTfGMQZ6PixCEGSV3IfYcOHn5sUyFugZkvwsLlybPu3RXkxeC6Y%2BUDx3lkOUAd6zq%2FT5DAi7ggXvNWdUU9QfzLnnhhWJ97TVYfep7bi3%2FUEZkt2rEtTCnCxY7nqjv%2FzyRXqz1FfJbqnuMRofJi0mgHlPEV692bydTVSHuVkQqOkFZYWPhU4esJ%2FEZxDuvrPZVZ3QJEbPjvFnLdLRNzqTNX7uXfFG65Bj4Bh2LeWxHnPLW0DAeoe5xxmPha6CPrfzGQ%2FUm1bSxkzT92FmwabmE1%2FZtQyDN%2F8gvKq8QS6dBnpv0Rur%2F9ItnNc1Pkrc2HbxUQGCpTnz9fSOEo%2Bp6f8jw02SceaqVtQGSSGI9CTQUDWg%2FLD2lauvHyvyJjhMHWj9xj3EsgiToJb9W2FwBGM%2BL6%2Flm7x4IsDSIQ1ebCDVLIXpMsDRlaTC3eYI1sqT%2FN%2FnuhqB%2BiJHEHNQCsgKRAqD9Eg1VTy7vMy%2BFyBXiBmLV17%2BGLwqwKtC1aC24dEwIwiAyj8YvfoHMfv2XepnU0txU%2FKID%2Btjs4fPd3RcANbqtbLsp98pDLf6McVHBM3f67jPufhL3Akr3NFM8l4a9U2pYwqaXsygY6pgEXU517wOinNDz%2BnNK07UsMiICjVIrheNnAH%2BZU%2BhUjdM1cu%2B4z1kJIg143Cx%2FrokipNEVuWseTH%2Bq5bTx%2BiH7DrS%2FNbYcruZGlY%2BxpZxEO8MDLMqeZFt0ANqcknuJjjLQRXEZemp3Dxch6%2FvCl34015PUnhdcQzu7QJQ7S7sGaWwjIsLC2X2sa8KQQ4hMbfTSbw9YVmO4%2BEq%2FPSegvr1EcQNW9UZHU&X-Amz-Signature=d0f50e0d737af7e2e8d7c4776b41ce2c5a9977c52343d0b7e74c3d0ed16f6bd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOFCBC3D%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGUmHBF2kprkoYKptaa78tLGkRDMBO741KNTacdQvarMAiBLjUSieQTRVE0vz%2BBWtqC4nqb5J8xBkyNggBrJ45T4oir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMzC4AeTFF0PpC86yiKtwDt%2BO2GE5FX7deq4Klvmk2zMKYNtav%2B%2F9KDZEJ0d%2BTfGMQZ6PixCEGSV3IfYcOHn5sUyFugZkvwsLlybPu3RXkxeC6Y%2BUDx3lkOUAd6zq%2FT5DAi7ggXvNWdUU9QfzLnnhhWJ97TVYfep7bi3%2FUEZkt2rEtTCnCxY7nqjv%2FzyRXqz1FfJbqnuMRofJi0mgHlPEV692bydTVSHuVkQqOkFZYWPhU4esJ%2FEZxDuvrPZVZ3QJEbPjvFnLdLRNzqTNX7uXfFG65Bj4Bh2LeWxHnPLW0DAeoe5xxmPha6CPrfzGQ%2FUm1bSxkzT92FmwabmE1%2FZtQyDN%2F8gvKq8QS6dBnpv0Rur%2F9ItnNc1Pkrc2HbxUQGCpTnz9fSOEo%2Bp6f8jw02SceaqVtQGSSGI9CTQUDWg%2FLD2lauvHyvyJjhMHWj9xj3EsgiToJb9W2FwBGM%2BL6%2Flm7x4IsDSIQ1ebCDVLIXpMsDRlaTC3eYI1sqT%2FN%2FnuhqB%2BiJHEHNQCsgKRAqD9Eg1VTy7vMy%2BFyBXiBmLV17%2BGLwqwKtC1aC24dEwIwiAyj8YvfoHMfv2XepnU0txU%2FKID%2Btjs4fPd3RcANbqtbLsp98pDLf6McVHBM3f67jPufhL3Akr3NFM8l4a9U2pYwqaXsygY6pgEXU517wOinNDz%2BnNK07UsMiICjVIrheNnAH%2BZU%2BhUjdM1cu%2B4z1kJIg143Cx%2FrokipNEVuWseTH%2Bq5bTx%2BiH7DrS%2FNbYcruZGlY%2BxpZxEO8MDLMqeZFt0ANqcknuJjjLQRXEZemp3Dxch6%2FvCl34015PUnhdcQzu7QJQ7S7sGaWwjIsLC2X2sa8KQQ4hMbfTSbw9YVmO4%2BEq%2FPSegvr1EcQNW9UZHU&X-Amz-Signature=d0054dde371d8cdaa757d97a24470831f4c04bfccdaa2e98909628afa9423831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOFCBC3D%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGUmHBF2kprkoYKptaa78tLGkRDMBO741KNTacdQvarMAiBLjUSieQTRVE0vz%2BBWtqC4nqb5J8xBkyNggBrJ45T4oir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMzC4AeTFF0PpC86yiKtwDt%2BO2GE5FX7deq4Klvmk2zMKYNtav%2B%2F9KDZEJ0d%2BTfGMQZ6PixCEGSV3IfYcOHn5sUyFugZkvwsLlybPu3RXkxeC6Y%2BUDx3lkOUAd6zq%2FT5DAi7ggXvNWdUU9QfzLnnhhWJ97TVYfep7bi3%2FUEZkt2rEtTCnCxY7nqjv%2FzyRXqz1FfJbqnuMRofJi0mgHlPEV692bydTVSHuVkQqOkFZYWPhU4esJ%2FEZxDuvrPZVZ3QJEbPjvFnLdLRNzqTNX7uXfFG65Bj4Bh2LeWxHnPLW0DAeoe5xxmPha6CPrfzGQ%2FUm1bSxkzT92FmwabmE1%2FZtQyDN%2F8gvKq8QS6dBnpv0Rur%2F9ItnNc1Pkrc2HbxUQGCpTnz9fSOEo%2Bp6f8jw02SceaqVtQGSSGI9CTQUDWg%2FLD2lauvHyvyJjhMHWj9xj3EsgiToJb9W2FwBGM%2BL6%2Flm7x4IsDSIQ1ebCDVLIXpMsDRlaTC3eYI1sqT%2FN%2FnuhqB%2BiJHEHNQCsgKRAqD9Eg1VTy7vMy%2BFyBXiBmLV17%2BGLwqwKtC1aC24dEwIwiAyj8YvfoHMfv2XepnU0txU%2FKID%2Btjs4fPd3RcANbqtbLsp98pDLf6McVHBM3f67jPufhL3Akr3NFM8l4a9U2pYwqaXsygY6pgEXU517wOinNDz%2BnNK07UsMiICjVIrheNnAH%2BZU%2BhUjdM1cu%2B4z1kJIg143Cx%2FrokipNEVuWseTH%2Bq5bTx%2BiH7DrS%2FNbYcruZGlY%2BxpZxEO8MDLMqeZFt0ANqcknuJjjLQRXEZemp3Dxch6%2FvCl34015PUnhdcQzu7QJQ7S7sGaWwjIsLC2X2sa8KQQ4hMbfTSbw9YVmO4%2BEq%2FPSegvr1EcQNW9UZHU&X-Amz-Signature=e87623507fc995d03b50bdfaf4d2bd12b5652c8e891f5e57b1b453845099c465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


