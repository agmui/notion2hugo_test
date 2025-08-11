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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NGASYU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPLNSuQdDNFvq9yKa8ITyeAK3AMEtO0naB1FBaqxbzowIhAIgxTXupuEMmQ7mJAUYb9TFCeatZNroEH9GdCelVrCM3KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEqC2Rg19DyEljAiEq3AOuwvFEN34q12xjvEKQnkJyycwj5QVwc5dYmAKCzonwnjQ2xE5eUUiGVAXg8zdUM6El0l3FMD5vFnaSbLK3RI2OiV%2FTd%2FgZK8UUU%2FntANcahECDuTuAadzY9T9i6dvcuLvkgpNG05yOLy2qsxkgNYO%2BDLViDuw1JgRq4WOxDSnSl0dNiFmW6765P7hOKCSj5z9Exc6DwpBVjEDVXQqc%2BMCyPnQpsMMrHnaGp%2BCSxfoP9j8pmaB5RjK8cuxlIs3W6cBVd0zckk22c0cb2JxuC4P3ocdFVz42mGoHE28UqsgJXF336HXdcG9WY0JDkp41c3vifooSzTRoiM%2BSKBuM6LLyhslPlmAPIMeKNSTvErfH0yVAc4FDy5CNmdx62IJtbB4lp3L10kTqVhHUCF%2BoobfcFAsQ4zO4PxtN1b%2FfrG3GA2W2rANMO%2B3dKhJYiYy37yXMT0lT67gaEZkZVqHN%2FFDk6cPzqGjX5SFqm7qye1ZMf9fAnoeqqEiKMh2Qtvafjgal1rMTjlUtesIV%2Bim6uNJFNkT%2F%2FiYsiVRiObrHZ2dio2jYb6r34bDFMWJ%2BVlCWjC2kOZ7rGeMpdLMZ9E7zbGuGCPErGjhN2ct7YZbGPI%2BY7b%2BwC%2B8mqPq9Qq4WXTD38ufEBjqkAfOauyUwXMxhr4OUPnmar83SXt3C%2Fprd1LBoHZeBdRXbGweg9Lzb5zc0oIE76xepu1hVeVtr1657paVWL3hAX%2B9y1Z%2F0Pi5cLEZdDLdwAnR2%2Fz8dSL0A8tcLVovWBhLTqJnHDwzU%2F66nSK3Wv8377pwPIgqce0g5Alh18sj1BaROPI5RDUrYCYx113CHajf71Iw19vq6Kid4%2FSA9ds%2F%2FIuMXpQ%2B3&X-Amz-Signature=7f9b4bf20fa24afb969fb9e69f7fc571726329583c40bb8fcda088582617ac7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NGASYU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPLNSuQdDNFvq9yKa8ITyeAK3AMEtO0naB1FBaqxbzowIhAIgxTXupuEMmQ7mJAUYb9TFCeatZNroEH9GdCelVrCM3KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEqC2Rg19DyEljAiEq3AOuwvFEN34q12xjvEKQnkJyycwj5QVwc5dYmAKCzonwnjQ2xE5eUUiGVAXg8zdUM6El0l3FMD5vFnaSbLK3RI2OiV%2FTd%2FgZK8UUU%2FntANcahECDuTuAadzY9T9i6dvcuLvkgpNG05yOLy2qsxkgNYO%2BDLViDuw1JgRq4WOxDSnSl0dNiFmW6765P7hOKCSj5z9Exc6DwpBVjEDVXQqc%2BMCyPnQpsMMrHnaGp%2BCSxfoP9j8pmaB5RjK8cuxlIs3W6cBVd0zckk22c0cb2JxuC4P3ocdFVz42mGoHE28UqsgJXF336HXdcG9WY0JDkp41c3vifooSzTRoiM%2BSKBuM6LLyhslPlmAPIMeKNSTvErfH0yVAc4FDy5CNmdx62IJtbB4lp3L10kTqVhHUCF%2BoobfcFAsQ4zO4PxtN1b%2FfrG3GA2W2rANMO%2B3dKhJYiYy37yXMT0lT67gaEZkZVqHN%2FFDk6cPzqGjX5SFqm7qye1ZMf9fAnoeqqEiKMh2Qtvafjgal1rMTjlUtesIV%2Bim6uNJFNkT%2F%2FiYsiVRiObrHZ2dio2jYb6r34bDFMWJ%2BVlCWjC2kOZ7rGeMpdLMZ9E7zbGuGCPErGjhN2ct7YZbGPI%2BY7b%2BwC%2B8mqPq9Qq4WXTD38ufEBjqkAfOauyUwXMxhr4OUPnmar83SXt3C%2Fprd1LBoHZeBdRXbGweg9Lzb5zc0oIE76xepu1hVeVtr1657paVWL3hAX%2B9y1Z%2F0Pi5cLEZdDLdwAnR2%2Fz8dSL0A8tcLVovWBhLTqJnHDwzU%2F66nSK3Wv8377pwPIgqce0g5Alh18sj1BaROPI5RDUrYCYx113CHajf71Iw19vq6Kid4%2FSA9ds%2F%2FIuMXpQ%2B3&X-Amz-Signature=c1f516fe19782e7cbddddd1f7c18825dc3067d73d98c0429cac9865281c4845a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NGASYU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPLNSuQdDNFvq9yKa8ITyeAK3AMEtO0naB1FBaqxbzowIhAIgxTXupuEMmQ7mJAUYb9TFCeatZNroEH9GdCelVrCM3KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEqC2Rg19DyEljAiEq3AOuwvFEN34q12xjvEKQnkJyycwj5QVwc5dYmAKCzonwnjQ2xE5eUUiGVAXg8zdUM6El0l3FMD5vFnaSbLK3RI2OiV%2FTd%2FgZK8UUU%2FntANcahECDuTuAadzY9T9i6dvcuLvkgpNG05yOLy2qsxkgNYO%2BDLViDuw1JgRq4WOxDSnSl0dNiFmW6765P7hOKCSj5z9Exc6DwpBVjEDVXQqc%2BMCyPnQpsMMrHnaGp%2BCSxfoP9j8pmaB5RjK8cuxlIs3W6cBVd0zckk22c0cb2JxuC4P3ocdFVz42mGoHE28UqsgJXF336HXdcG9WY0JDkp41c3vifooSzTRoiM%2BSKBuM6LLyhslPlmAPIMeKNSTvErfH0yVAc4FDy5CNmdx62IJtbB4lp3L10kTqVhHUCF%2BoobfcFAsQ4zO4PxtN1b%2FfrG3GA2W2rANMO%2B3dKhJYiYy37yXMT0lT67gaEZkZVqHN%2FFDk6cPzqGjX5SFqm7qye1ZMf9fAnoeqqEiKMh2Qtvafjgal1rMTjlUtesIV%2Bim6uNJFNkT%2F%2FiYsiVRiObrHZ2dio2jYb6r34bDFMWJ%2BVlCWjC2kOZ7rGeMpdLMZ9E7zbGuGCPErGjhN2ct7YZbGPI%2BY7b%2BwC%2B8mqPq9Qq4WXTD38ufEBjqkAfOauyUwXMxhr4OUPnmar83SXt3C%2Fprd1LBoHZeBdRXbGweg9Lzb5zc0oIE76xepu1hVeVtr1657paVWL3hAX%2B9y1Z%2F0Pi5cLEZdDLdwAnR2%2Fz8dSL0A8tcLVovWBhLTqJnHDwzU%2F66nSK3Wv8377pwPIgqce0g5Alh18sj1BaROPI5RDUrYCYx113CHajf71Iw19vq6Kid4%2FSA9ds%2F%2FIuMXpQ%2B3&X-Amz-Signature=50083559d4520fe47f35e7172caafc107d90f7fcef7c110ebf8660094fd441fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NGASYU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPLNSuQdDNFvq9yKa8ITyeAK3AMEtO0naB1FBaqxbzowIhAIgxTXupuEMmQ7mJAUYb9TFCeatZNroEH9GdCelVrCM3KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEqC2Rg19DyEljAiEq3AOuwvFEN34q12xjvEKQnkJyycwj5QVwc5dYmAKCzonwnjQ2xE5eUUiGVAXg8zdUM6El0l3FMD5vFnaSbLK3RI2OiV%2FTd%2FgZK8UUU%2FntANcahECDuTuAadzY9T9i6dvcuLvkgpNG05yOLy2qsxkgNYO%2BDLViDuw1JgRq4WOxDSnSl0dNiFmW6765P7hOKCSj5z9Exc6DwpBVjEDVXQqc%2BMCyPnQpsMMrHnaGp%2BCSxfoP9j8pmaB5RjK8cuxlIs3W6cBVd0zckk22c0cb2JxuC4P3ocdFVz42mGoHE28UqsgJXF336HXdcG9WY0JDkp41c3vifooSzTRoiM%2BSKBuM6LLyhslPlmAPIMeKNSTvErfH0yVAc4FDy5CNmdx62IJtbB4lp3L10kTqVhHUCF%2BoobfcFAsQ4zO4PxtN1b%2FfrG3GA2W2rANMO%2B3dKhJYiYy37yXMT0lT67gaEZkZVqHN%2FFDk6cPzqGjX5SFqm7qye1ZMf9fAnoeqqEiKMh2Qtvafjgal1rMTjlUtesIV%2Bim6uNJFNkT%2F%2FiYsiVRiObrHZ2dio2jYb6r34bDFMWJ%2BVlCWjC2kOZ7rGeMpdLMZ9E7zbGuGCPErGjhN2ct7YZbGPI%2BY7b%2BwC%2B8mqPq9Qq4WXTD38ufEBjqkAfOauyUwXMxhr4OUPnmar83SXt3C%2Fprd1LBoHZeBdRXbGweg9Lzb5zc0oIE76xepu1hVeVtr1657paVWL3hAX%2B9y1Z%2F0Pi5cLEZdDLdwAnR2%2Fz8dSL0A8tcLVovWBhLTqJnHDwzU%2F66nSK3Wv8377pwPIgqce0g5Alh18sj1BaROPI5RDUrYCYx113CHajf71Iw19vq6Kid4%2FSA9ds%2F%2FIuMXpQ%2B3&X-Amz-Signature=72e292e37a70aa1a3319a1214c908c6c63e4a57756bda23bcc89f4270d7db38a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NGASYU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPLNSuQdDNFvq9yKa8ITyeAK3AMEtO0naB1FBaqxbzowIhAIgxTXupuEMmQ7mJAUYb9TFCeatZNroEH9GdCelVrCM3KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEqC2Rg19DyEljAiEq3AOuwvFEN34q12xjvEKQnkJyycwj5QVwc5dYmAKCzonwnjQ2xE5eUUiGVAXg8zdUM6El0l3FMD5vFnaSbLK3RI2OiV%2FTd%2FgZK8UUU%2FntANcahECDuTuAadzY9T9i6dvcuLvkgpNG05yOLy2qsxkgNYO%2BDLViDuw1JgRq4WOxDSnSl0dNiFmW6765P7hOKCSj5z9Exc6DwpBVjEDVXQqc%2BMCyPnQpsMMrHnaGp%2BCSxfoP9j8pmaB5RjK8cuxlIs3W6cBVd0zckk22c0cb2JxuC4P3ocdFVz42mGoHE28UqsgJXF336HXdcG9WY0JDkp41c3vifooSzTRoiM%2BSKBuM6LLyhslPlmAPIMeKNSTvErfH0yVAc4FDy5CNmdx62IJtbB4lp3L10kTqVhHUCF%2BoobfcFAsQ4zO4PxtN1b%2FfrG3GA2W2rANMO%2B3dKhJYiYy37yXMT0lT67gaEZkZVqHN%2FFDk6cPzqGjX5SFqm7qye1ZMf9fAnoeqqEiKMh2Qtvafjgal1rMTjlUtesIV%2Bim6uNJFNkT%2F%2FiYsiVRiObrHZ2dio2jYb6r34bDFMWJ%2BVlCWjC2kOZ7rGeMpdLMZ9E7zbGuGCPErGjhN2ct7YZbGPI%2BY7b%2BwC%2B8mqPq9Qq4WXTD38ufEBjqkAfOauyUwXMxhr4OUPnmar83SXt3C%2Fprd1LBoHZeBdRXbGweg9Lzb5zc0oIE76xepu1hVeVtr1657paVWL3hAX%2B9y1Z%2F0Pi5cLEZdDLdwAnR2%2Fz8dSL0A8tcLVovWBhLTqJnHDwzU%2F66nSK3Wv8377pwPIgqce0g5Alh18sj1BaROPI5RDUrYCYx113CHajf71Iw19vq6Kid4%2FSA9ds%2F%2FIuMXpQ%2B3&X-Amz-Signature=046dc206335b35beb5ea409e3c9b989e05639249856d44b90d825642efceb6e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NGASYU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPLNSuQdDNFvq9yKa8ITyeAK3AMEtO0naB1FBaqxbzowIhAIgxTXupuEMmQ7mJAUYb9TFCeatZNroEH9GdCelVrCM3KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEqC2Rg19DyEljAiEq3AOuwvFEN34q12xjvEKQnkJyycwj5QVwc5dYmAKCzonwnjQ2xE5eUUiGVAXg8zdUM6El0l3FMD5vFnaSbLK3RI2OiV%2FTd%2FgZK8UUU%2FntANcahECDuTuAadzY9T9i6dvcuLvkgpNG05yOLy2qsxkgNYO%2BDLViDuw1JgRq4WOxDSnSl0dNiFmW6765P7hOKCSj5z9Exc6DwpBVjEDVXQqc%2BMCyPnQpsMMrHnaGp%2BCSxfoP9j8pmaB5RjK8cuxlIs3W6cBVd0zckk22c0cb2JxuC4P3ocdFVz42mGoHE28UqsgJXF336HXdcG9WY0JDkp41c3vifooSzTRoiM%2BSKBuM6LLyhslPlmAPIMeKNSTvErfH0yVAc4FDy5CNmdx62IJtbB4lp3L10kTqVhHUCF%2BoobfcFAsQ4zO4PxtN1b%2FfrG3GA2W2rANMO%2B3dKhJYiYy37yXMT0lT67gaEZkZVqHN%2FFDk6cPzqGjX5SFqm7qye1ZMf9fAnoeqqEiKMh2Qtvafjgal1rMTjlUtesIV%2Bim6uNJFNkT%2F%2FiYsiVRiObrHZ2dio2jYb6r34bDFMWJ%2BVlCWjC2kOZ7rGeMpdLMZ9E7zbGuGCPErGjhN2ct7YZbGPI%2BY7b%2BwC%2B8mqPq9Qq4WXTD38ufEBjqkAfOauyUwXMxhr4OUPnmar83SXt3C%2Fprd1LBoHZeBdRXbGweg9Lzb5zc0oIE76xepu1hVeVtr1657paVWL3hAX%2B9y1Z%2F0Pi5cLEZdDLdwAnR2%2Fz8dSL0A8tcLVovWBhLTqJnHDwzU%2F66nSK3Wv8377pwPIgqce0g5Alh18sj1BaROPI5RDUrYCYx113CHajf71Iw19vq6Kid4%2FSA9ds%2F%2FIuMXpQ%2B3&X-Amz-Signature=973d23a1de2f0b3dd31c5c3d4f87bdd213685a23ba6bb99457d376295031d550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NGASYU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPLNSuQdDNFvq9yKa8ITyeAK3AMEtO0naB1FBaqxbzowIhAIgxTXupuEMmQ7mJAUYb9TFCeatZNroEH9GdCelVrCM3KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEqC2Rg19DyEljAiEq3AOuwvFEN34q12xjvEKQnkJyycwj5QVwc5dYmAKCzonwnjQ2xE5eUUiGVAXg8zdUM6El0l3FMD5vFnaSbLK3RI2OiV%2FTd%2FgZK8UUU%2FntANcahECDuTuAadzY9T9i6dvcuLvkgpNG05yOLy2qsxkgNYO%2BDLViDuw1JgRq4WOxDSnSl0dNiFmW6765P7hOKCSj5z9Exc6DwpBVjEDVXQqc%2BMCyPnQpsMMrHnaGp%2BCSxfoP9j8pmaB5RjK8cuxlIs3W6cBVd0zckk22c0cb2JxuC4P3ocdFVz42mGoHE28UqsgJXF336HXdcG9WY0JDkp41c3vifooSzTRoiM%2BSKBuM6LLyhslPlmAPIMeKNSTvErfH0yVAc4FDy5CNmdx62IJtbB4lp3L10kTqVhHUCF%2BoobfcFAsQ4zO4PxtN1b%2FfrG3GA2W2rANMO%2B3dKhJYiYy37yXMT0lT67gaEZkZVqHN%2FFDk6cPzqGjX5SFqm7qye1ZMf9fAnoeqqEiKMh2Qtvafjgal1rMTjlUtesIV%2Bim6uNJFNkT%2F%2FiYsiVRiObrHZ2dio2jYb6r34bDFMWJ%2BVlCWjC2kOZ7rGeMpdLMZ9E7zbGuGCPErGjhN2ct7YZbGPI%2BY7b%2BwC%2B8mqPq9Qq4WXTD38ufEBjqkAfOauyUwXMxhr4OUPnmar83SXt3C%2Fprd1LBoHZeBdRXbGweg9Lzb5zc0oIE76xepu1hVeVtr1657paVWL3hAX%2B9y1Z%2F0Pi5cLEZdDLdwAnR2%2Fz8dSL0A8tcLVovWBhLTqJnHDwzU%2F66nSK3Wv8377pwPIgqce0g5Alh18sj1BaROPI5RDUrYCYx113CHajf71Iw19vq6Kid4%2FSA9ds%2F%2FIuMXpQ%2B3&X-Amz-Signature=7480a066ef666608abd1c1cc576b65b9e3ea8f7c5d99dfa7b978f816af876541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NGASYU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPLNSuQdDNFvq9yKa8ITyeAK3AMEtO0naB1FBaqxbzowIhAIgxTXupuEMmQ7mJAUYb9TFCeatZNroEH9GdCelVrCM3KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEqC2Rg19DyEljAiEq3AOuwvFEN34q12xjvEKQnkJyycwj5QVwc5dYmAKCzonwnjQ2xE5eUUiGVAXg8zdUM6El0l3FMD5vFnaSbLK3RI2OiV%2FTd%2FgZK8UUU%2FntANcahECDuTuAadzY9T9i6dvcuLvkgpNG05yOLy2qsxkgNYO%2BDLViDuw1JgRq4WOxDSnSl0dNiFmW6765P7hOKCSj5z9Exc6DwpBVjEDVXQqc%2BMCyPnQpsMMrHnaGp%2BCSxfoP9j8pmaB5RjK8cuxlIs3W6cBVd0zckk22c0cb2JxuC4P3ocdFVz42mGoHE28UqsgJXF336HXdcG9WY0JDkp41c3vifooSzTRoiM%2BSKBuM6LLyhslPlmAPIMeKNSTvErfH0yVAc4FDy5CNmdx62IJtbB4lp3L10kTqVhHUCF%2BoobfcFAsQ4zO4PxtN1b%2FfrG3GA2W2rANMO%2B3dKhJYiYy37yXMT0lT67gaEZkZVqHN%2FFDk6cPzqGjX5SFqm7qye1ZMf9fAnoeqqEiKMh2Qtvafjgal1rMTjlUtesIV%2Bim6uNJFNkT%2F%2FiYsiVRiObrHZ2dio2jYb6r34bDFMWJ%2BVlCWjC2kOZ7rGeMpdLMZ9E7zbGuGCPErGjhN2ct7YZbGPI%2BY7b%2BwC%2B8mqPq9Qq4WXTD38ufEBjqkAfOauyUwXMxhr4OUPnmar83SXt3C%2Fprd1LBoHZeBdRXbGweg9Lzb5zc0oIE76xepu1hVeVtr1657paVWL3hAX%2B9y1Z%2F0Pi5cLEZdDLdwAnR2%2Fz8dSL0A8tcLVovWBhLTqJnHDwzU%2F66nSK3Wv8377pwPIgqce0g5Alh18sj1BaROPI5RDUrYCYx113CHajf71Iw19vq6Kid4%2FSA9ds%2F%2FIuMXpQ%2B3&X-Amz-Signature=20aac766adbcf6714c693e0fe634abb67c83edafce2b725888baca9d68ee87f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NGASYU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPLNSuQdDNFvq9yKa8ITyeAK3AMEtO0naB1FBaqxbzowIhAIgxTXupuEMmQ7mJAUYb9TFCeatZNroEH9GdCelVrCM3KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEqC2Rg19DyEljAiEq3AOuwvFEN34q12xjvEKQnkJyycwj5QVwc5dYmAKCzonwnjQ2xE5eUUiGVAXg8zdUM6El0l3FMD5vFnaSbLK3RI2OiV%2FTd%2FgZK8UUU%2FntANcahECDuTuAadzY9T9i6dvcuLvkgpNG05yOLy2qsxkgNYO%2BDLViDuw1JgRq4WOxDSnSl0dNiFmW6765P7hOKCSj5z9Exc6DwpBVjEDVXQqc%2BMCyPnQpsMMrHnaGp%2BCSxfoP9j8pmaB5RjK8cuxlIs3W6cBVd0zckk22c0cb2JxuC4P3ocdFVz42mGoHE28UqsgJXF336HXdcG9WY0JDkp41c3vifooSzTRoiM%2BSKBuM6LLyhslPlmAPIMeKNSTvErfH0yVAc4FDy5CNmdx62IJtbB4lp3L10kTqVhHUCF%2BoobfcFAsQ4zO4PxtN1b%2FfrG3GA2W2rANMO%2B3dKhJYiYy37yXMT0lT67gaEZkZVqHN%2FFDk6cPzqGjX5SFqm7qye1ZMf9fAnoeqqEiKMh2Qtvafjgal1rMTjlUtesIV%2Bim6uNJFNkT%2F%2FiYsiVRiObrHZ2dio2jYb6r34bDFMWJ%2BVlCWjC2kOZ7rGeMpdLMZ9E7zbGuGCPErGjhN2ct7YZbGPI%2BY7b%2BwC%2B8mqPq9Qq4WXTD38ufEBjqkAfOauyUwXMxhr4OUPnmar83SXt3C%2Fprd1LBoHZeBdRXbGweg9Lzb5zc0oIE76xepu1hVeVtr1657paVWL3hAX%2B9y1Z%2F0Pi5cLEZdDLdwAnR2%2Fz8dSL0A8tcLVovWBhLTqJnHDwzU%2F66nSK3Wv8377pwPIgqce0g5Alh18sj1BaROPI5RDUrYCYx113CHajf71Iw19vq6Kid4%2FSA9ds%2F%2FIuMXpQ%2B3&X-Amz-Signature=38d5c59757d92ecea02a4a8b225ad0fc08a7dcbd3a0071b6de3b018c6ee9fb7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NGASYU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPLNSuQdDNFvq9yKa8ITyeAK3AMEtO0naB1FBaqxbzowIhAIgxTXupuEMmQ7mJAUYb9TFCeatZNroEH9GdCelVrCM3KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEqC2Rg19DyEljAiEq3AOuwvFEN34q12xjvEKQnkJyycwj5QVwc5dYmAKCzonwnjQ2xE5eUUiGVAXg8zdUM6El0l3FMD5vFnaSbLK3RI2OiV%2FTd%2FgZK8UUU%2FntANcahECDuTuAadzY9T9i6dvcuLvkgpNG05yOLy2qsxkgNYO%2BDLViDuw1JgRq4WOxDSnSl0dNiFmW6765P7hOKCSj5z9Exc6DwpBVjEDVXQqc%2BMCyPnQpsMMrHnaGp%2BCSxfoP9j8pmaB5RjK8cuxlIs3W6cBVd0zckk22c0cb2JxuC4P3ocdFVz42mGoHE28UqsgJXF336HXdcG9WY0JDkp41c3vifooSzTRoiM%2BSKBuM6LLyhslPlmAPIMeKNSTvErfH0yVAc4FDy5CNmdx62IJtbB4lp3L10kTqVhHUCF%2BoobfcFAsQ4zO4PxtN1b%2FfrG3GA2W2rANMO%2B3dKhJYiYy37yXMT0lT67gaEZkZVqHN%2FFDk6cPzqGjX5SFqm7qye1ZMf9fAnoeqqEiKMh2Qtvafjgal1rMTjlUtesIV%2Bim6uNJFNkT%2F%2FiYsiVRiObrHZ2dio2jYb6r34bDFMWJ%2BVlCWjC2kOZ7rGeMpdLMZ9E7zbGuGCPErGjhN2ct7YZbGPI%2BY7b%2BwC%2B8mqPq9Qq4WXTD38ufEBjqkAfOauyUwXMxhr4OUPnmar83SXt3C%2Fprd1LBoHZeBdRXbGweg9Lzb5zc0oIE76xepu1hVeVtr1657paVWL3hAX%2B9y1Z%2F0Pi5cLEZdDLdwAnR2%2Fz8dSL0A8tcLVovWBhLTqJnHDwzU%2F66nSK3Wv8377pwPIgqce0g5Alh18sj1BaROPI5RDUrYCYx113CHajf71Iw19vq6Kid4%2FSA9ds%2F%2FIuMXpQ%2B3&X-Amz-Signature=cdb8ee2f6086b407f11f2fea99175f4d3f9d903df6fede1f433a42ee4d16284e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH6IEW2G%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHw6UosyC6Q0s2no2IElDW1H39uyoM5HJSluNNXIdRUcCIQDe1V3ZiAJDBYUd8KWv%2Fk4f%2FecmGAyWME7QVTNJiGK40yqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeKx%2B7SmiCSXjlsyGKtwDRjci735mbobRH2i78%2FcsJ%2FRZF%2FoGzFbZFfGRCOR4i1ckTsnozHW%2BiWlhMgZZjyBHfUnq1A56jx%2B1pWSJ7hmRDrGfqD5l3xKpTYLbsohS%2FA1%2B3lFumYfP%2F0lOKAtBRFHzd%2FYojtcik0qfMAzDbD5MwFMx0Th0VX60qiXy2K%2BRcmgZYJdJsbMnouGCR3gQVjtV4ZK4S%2Bnn7pk6ASe9Q%2FjYhRFHLegJ%2BivFDyTksxWnhCoD06u2OytFjbFn9b6mdkElZb1UyBBRqPUnCcf0jJAIKYcLAgdlR4TMVjCG7jXlfiXOVHkMJeSI0%2BTA07Vsa4OlrDGYMi63rG5kTBy36uKpfRULVK8nOsas4sdJ3ffy24YmzV7%2Fo%2FxRfzZ26dHLPbIAktXZISbgcO5MM2nicHluh28nONbpgYBEFxaZWRBhbhBxXvIPYynf0wv2ZQTBsZdtw%2BHVjmoA6rjv0HuGIr%2B6bdoug9EWHvs3%2F%2BAHFbyR1nE7%2Bg4oRBZN8R0%2Fk%2Fr9Yl1694g4e5GH8zhKwg1UGmFK5qffDgmVI7PpodRPBhQxNfSHLIQUfWlkrSwcGDJlJv8p1TAbrFp1F7V8vixyOQAxO42kayo8G8Qw7mGv2ppGjD36IXdYyAZ3po%2FA754wvfLnxAY6pgHpvL8H%2BJdGUOvCIorKebrZ96%2FdZntFeFB2gByy8JQ0ZWLjsZwMmwKGbKAqnSQGPVdCdLa%2B4MkUf8P5MhnvxE9jSVxopo8suIpFhT%2FATcC45PnQHPOJHAoNV9hGPq5R2roo8B7Sw8UsVZ58h%2FHHCvQSyYpRARzi9%2BhU45dc%2Fnm%2FQA7OJ7UzwT4vMDjCFsxnECTAN6lpzqaQMrOXSV2wXDNDVaWiRcuR&X-Amz-Signature=178c849217475e3be13e038789bf7ce84ff4dbdafefc20926f48a86bb49bd43c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXRJ4UZX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC57YhS24tV6DvscfGEj5Vx5bPb%2F7Q1bkemvqo4Hv4s5AiEA2W%2F5imOcr5%2FJ17UJkfijb8YPo39NlTZiENAZE3YvV%2FcqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtahPnTXQ%2BMNViDvCrcA0Rxr3aE7ec1kE3RThfJrJtCxRpyXaU0eQIfy7cttzpCbkThfJ4Qinl2MfeeKbsILauNBpmd7nc%2BanHqQHiSIERmV3A5OH2eSY8VJLIMfywYFzqpUOiWQ8l6vtDJMLxOfQoIvSrB%2FwL2cRbpOjJc3fYQ7P3R1%2F8yhyaZwKkm08LcXk%2FB7bzxs1HNX821mJI5Eb7cc9%2F7Fkv3XMVIe8GjuJ2a5btUCnytUHRIQivnUC0gQddG9LrqF7umDPCIs2MZeGMptydqE7YaEf%2FANDEGWdyGVVukeajAu3Resd%2FKiRnrGsTdmrMNt6qAGdVdwKeVepFROxeCkDfzE9lj5KL6r1yhS16%2FKt%2BAnvUcxvalSRZ0bfQOOW8qG17G6jidOU%2FtAIErbyusNImhpqtUEE9o4feqvKkvrSRFmIUp%2FYNOIjAbpW5w61vpPsmDJ1Fo1tHai2bwwLkF9RfdJeQRouuacLg6WMyNOOlqeqavV7WXDEPR5R%2FBPX%2BlakBw9BAz7sx6N0kzgAJbXS9hqwPUhab3El4gadwF6zLqSEdIBAHZfyywO9CnvFyhDa%2Bun7PGCBhPijxd59DeG4MvtlkMluBylhzBkGp9LRn%2FEYZ9NXvwyNGRGprEhUxJ%2FDt1CEPNML3y58QGOqUByLHkrkNfO9RkV7FHWQztSZs%2FebYvmqArZdDIESTMFOSomUp%2BE7uESqiUbbIHbI49zGL3qEBKSg5GCObjqRLo8fC1I9ska6dheiR9E%2BCNKtgDRDZnQoADXQOG10tMR6CRl84TFO6WgUCVZKE4On6KW16faXkOd1uNrhP3zRFYtbtD%2B2eBTumPlgSOrKm%2FMHjSyJkFrZ%2BLu7rTFv5Dy5CP1QDQkIvQ&X-Amz-Signature=bb9fe68d2c91cee2ce41a82956b3a97d441d1903a5817f69c52c40ba9bb1f5b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHDLPSK7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDADpZR%2FC2FzideIOD5DZDutUJ3wn2BpE4zQnDqQoFL%2FwIhAP3bFLk6tYdMebNDHWrGRX46fsJdILHEJ3x%2BJXeNgKVbKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz79a4zuJuV1Y4Likoq3AP1dUBrlqg02vn6m%2Fnrb4URO20yIeIk4uNb6Yv7wzI9Vwm2NT%2FuhgEHof5oxzH8YG1EG%2BKR3pGRAmZPV1WrlbuEprwSHwGQncSIHtqe7DS9x8%2F032rkOSVrJxNpU08T%2BfLCBUBEpIKbPgJ3CcrWJ7i1zlYXg3yhYpM1NlvVzDM7THbftCe1URrbx5fMaCezPkLv3WO4KTTUs9IPVFxKCMwDr3GJ4YzUscL69MJMMuJeID77DAQ7s7tKWEcj8Ym%2F1W3vwYPtzaN5eYfjIJFp5IOqzzbGcUE2UYlW3lKpt2pguGNlBnhl1CZm1DMP07g5mKEANhq1EatD9fZWCielPHWIuvE15RkspQO9dyNh5vt051SXTXjV9i89Fg%2F4CkWHm3Y9Bm5PkcL2V26UgjxTHOCLR58vfGxXaWUui1%2BfbP8eGGLIP%2BgeYx9xEHybeAHGMEi9GrmbCI89dVZY%2FvO33DeSfqN%2FzrcQKC62ITL%2FLIt%2BnenS0c6pp0nkJJ5zQxVEEq8FegwLqDxmxgq7WtYFf6Naib%2FtRP9nZP0yke9F%2BTS2KPYlTFg1VeY5cGym30h%2F01oKhsPd8%2FNAQmyFOvczgXZxvzeqcLFlQ1slds5XnTKRX%2FTnumwD8xZGJH3gPjCH8%2BfEBjqkAeyrQ1sj3UfWvl3XxVa01fMysh%2B0Pldak%2F%2FlsQDxiI3dm01zqdNvFFIIj756HTizAAtgxFrbVq8tLKjaHRUaKoS6txRWPrAYIAA8gRi57W6niJTBq3wk8MzRVBOZ4rhYIwiA13y3mO%2Fj9%2BJBlGVCYYr2%2FTI8EvJUa0dIQxG87v2cV8s3%2FR5oKX73wM%2BtTIswkJn5hiKEollnUtDKL88vx1GI8rfU&X-Amz-Signature=279d6fa5acf9220b360e896600b6785b17a79bc3146b5541172daf1f27512509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NGASYU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPLNSuQdDNFvq9yKa8ITyeAK3AMEtO0naB1FBaqxbzowIhAIgxTXupuEMmQ7mJAUYb9TFCeatZNroEH9GdCelVrCM3KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEqC2Rg19DyEljAiEq3AOuwvFEN34q12xjvEKQnkJyycwj5QVwc5dYmAKCzonwnjQ2xE5eUUiGVAXg8zdUM6El0l3FMD5vFnaSbLK3RI2OiV%2FTd%2FgZK8UUU%2FntANcahECDuTuAadzY9T9i6dvcuLvkgpNG05yOLy2qsxkgNYO%2BDLViDuw1JgRq4WOxDSnSl0dNiFmW6765P7hOKCSj5z9Exc6DwpBVjEDVXQqc%2BMCyPnQpsMMrHnaGp%2BCSxfoP9j8pmaB5RjK8cuxlIs3W6cBVd0zckk22c0cb2JxuC4P3ocdFVz42mGoHE28UqsgJXF336HXdcG9WY0JDkp41c3vifooSzTRoiM%2BSKBuM6LLyhslPlmAPIMeKNSTvErfH0yVAc4FDy5CNmdx62IJtbB4lp3L10kTqVhHUCF%2BoobfcFAsQ4zO4PxtN1b%2FfrG3GA2W2rANMO%2B3dKhJYiYy37yXMT0lT67gaEZkZVqHN%2FFDk6cPzqGjX5SFqm7qye1ZMf9fAnoeqqEiKMh2Qtvafjgal1rMTjlUtesIV%2Bim6uNJFNkT%2F%2FiYsiVRiObrHZ2dio2jYb6r34bDFMWJ%2BVlCWjC2kOZ7rGeMpdLMZ9E7zbGuGCPErGjhN2ct7YZbGPI%2BY7b%2BwC%2B8mqPq9Qq4WXTD38ufEBjqkAfOauyUwXMxhr4OUPnmar83SXt3C%2Fprd1LBoHZeBdRXbGweg9Lzb5zc0oIE76xepu1hVeVtr1657paVWL3hAX%2B9y1Z%2F0Pi5cLEZdDLdwAnR2%2Fz8dSL0A8tcLVovWBhLTqJnHDwzU%2F66nSK3Wv8377pwPIgqce0g5Alh18sj1BaROPI5RDUrYCYx113CHajf71Iw19vq6Kid4%2FSA9ds%2F%2FIuMXpQ%2B3&X-Amz-Signature=ec8027582f2605ca612b345d8edc6193eb7e096f0771ca3ba91ea0518217298f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFCEIWL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBK4zHbW1%2BRMRL2cl0oRV6%2FOP70yWEa9U%2BaEG85iXzb4AiEA1K%2F6F0%2FIIy9laax%2FGrGrLviqwJROPthOtCmoxV%2FA%2BJoqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEo5KiRWb7YW165%2BLCrcA5ty9MCj1GGNzZyIidDVwdr7%2Fh710pfWrmyAq9ugB44bCILIU72oDK4ROEjQ2%2FX5z%2Bl%2FVrQwGaGuCBOEYVWR6JHf%2FBwHuc7wJ9xMutMlm1glcW2zkTce3ZjvuaguoU%2FgDIZRx5Hrq19OMoQLP%2FZ9l6xu%2B80l5O3svGNfCHX28QPHpVMLGrbM22gjGCLQSJx2LwNZN%2BQO67WOg%2FDhlj2T5b%2F%2Bi8O0HMl22nhET7gh%2FIspdeQN%2FDdi8l1dkBy2b3BSol5%2BZHWXkksZk32u5Yq6rljo%2Bpg9V44ReCn5%2FyWbbpKsctrrDJCVsm%2Bjvnec0ygcFF9Hilo8ZmpXEHc0150Toy%2FxvlOye53TxvqJFH3YisfwE1GVMDJzqa9CEHoEumXOp8SCW7L1quIKg8T80gYsiQbWV9dBac33L9YJYHqeOlJ9AZS%2FA%2FrkhgnLJ4K2R5M719yfR2VpYCTmi6eyytwrN5gBQjrDMljwHxR4Bry3aNcSioHJN1uk8k2UHoOiZMcxOD%2F%2F0pjGuWgKEASpEjmShGiydQvBMLyu1Ze4MmsVDjeNRD1CTZdhsxbO5ubVg2sCZyoNshzmsVVQwki1rYKDYdCu2%2BNw0to4zZa9a0YNCq6UWCdsVM5Xgp5kJu6pMO3y58QGOqUBEs5CIxisbPijtskDaBeRNgH0dgqop3ThzYi3SaH3%2BO5zW5k1ZywpNNN%2BM3BTGLWwxiQO1FZTuT2ur54%2Fp3hJl7U2mak1i3xaztf1bUjWoThvyu9A0YBtLgCwzN1uVtrGMAbYWlTs20EGb2sO8yBPZ72YIBOzFqYg1gmeSZpGJw2bi3r%2BTG9jm6AX5VKRvFSfL0IPvMhJ4lbNWK21Bn2gdbnVVLoZ&X-Amz-Signature=84a2730f7180a32728594491768395d35884d1d73b59f00e085ecf8592318fd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NGASYU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPLNSuQdDNFvq9yKa8ITyeAK3AMEtO0naB1FBaqxbzowIhAIgxTXupuEMmQ7mJAUYb9TFCeatZNroEH9GdCelVrCM3KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEqC2Rg19DyEljAiEq3AOuwvFEN34q12xjvEKQnkJyycwj5QVwc5dYmAKCzonwnjQ2xE5eUUiGVAXg8zdUM6El0l3FMD5vFnaSbLK3RI2OiV%2FTd%2FgZK8UUU%2FntANcahECDuTuAadzY9T9i6dvcuLvkgpNG05yOLy2qsxkgNYO%2BDLViDuw1JgRq4WOxDSnSl0dNiFmW6765P7hOKCSj5z9Exc6DwpBVjEDVXQqc%2BMCyPnQpsMMrHnaGp%2BCSxfoP9j8pmaB5RjK8cuxlIs3W6cBVd0zckk22c0cb2JxuC4P3ocdFVz42mGoHE28UqsgJXF336HXdcG9WY0JDkp41c3vifooSzTRoiM%2BSKBuM6LLyhslPlmAPIMeKNSTvErfH0yVAc4FDy5CNmdx62IJtbB4lp3L10kTqVhHUCF%2BoobfcFAsQ4zO4PxtN1b%2FfrG3GA2W2rANMO%2B3dKhJYiYy37yXMT0lT67gaEZkZVqHN%2FFDk6cPzqGjX5SFqm7qye1ZMf9fAnoeqqEiKMh2Qtvafjgal1rMTjlUtesIV%2Bim6uNJFNkT%2F%2FiYsiVRiObrHZ2dio2jYb6r34bDFMWJ%2BVlCWjC2kOZ7rGeMpdLMZ9E7zbGuGCPErGjhN2ct7YZbGPI%2BY7b%2BwC%2B8mqPq9Qq4WXTD38ufEBjqkAfOauyUwXMxhr4OUPnmar83SXt3C%2Fprd1LBoHZeBdRXbGweg9Lzb5zc0oIE76xepu1hVeVtr1657paVWL3hAX%2B9y1Z%2F0Pi5cLEZdDLdwAnR2%2Fz8dSL0A8tcLVovWBhLTqJnHDwzU%2F66nSK3Wv8377pwPIgqce0g5Alh18sj1BaROPI5RDUrYCYx113CHajf71Iw19vq6Kid4%2FSA9ds%2F%2FIuMXpQ%2B3&X-Amz-Signature=4278a88fbb30575978492cd1d01d75a2960f4afe8a2d8c1d136f8bbf2e3aa03a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMMEA5CU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmEA0PiisOLNIQc39loJk0xJ%2FXtkTzC8JdC70tbgQpJgIhAJqp8jyeA9QU%2BdTwp2HpNfdu4tGg51K%2Fe23ULIUPlw7NKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjVGIVEtJ0kzlZwtIq3APHNEmfj9BJTCVNWTiaWmeFbLplJOL2L47sEFx%2BnFdlT2s2rrsqLzFPey%2FCQGUe0jTepoOMJPRuAl4waGnsieKKLY6Trll1%2FwchDRRE2tAZlzR1dwzc1MbUaDMFK%2FWdxQCXKjxxtB0YLpZkm2AtPX4hZPPHiYg28nKNskkxpck1vkWJm29qPO2oieEUVYb0Nx8Z4jkYqfvrhJJi%2Bad5DNRqKA3i6zRyek4Pkx7DB5b77L2ASmzTGd8sT033b%2BSG1A2fari6vbe6nGtqTbKLGN1pfTy4mQpH7WOpsK7FJURczwhDIxtFqN1LAavOdGl%2FAfID3W5gUR9XW7eyGyj%2BkQIDBlp49IrxETUeiyScNeg6DxSD2W1%2F1BKS96n3RPm%2FS4ieKz5lYuck3gheU8Fpq2rHleHlnaD7F2Q0ZEye17Uev1k1ZBpm2Bk7xzLj5DEPC6716mlRHTF3NFJ%2BW9EJMKpVr%2Bm%2BhGb9X8DgBUnl60kDX%2BanRRijMH1iCfyqeCzvgFnCN0siGugUsFCIdraOSTiGMXB44Ir0%2FFqFIPhLhmQz9wS8vthzDTKGx%2F7Za1rKX5%2FH%2FfcG15onzKbMzNEvGrt4I1aH7ph3jh28CcSMSHmaM%2Bk85wUqz%2BGJ84UGJjDT8ufEBjqkAaTRHBFlyz1%2Fl75G%2FGGt%2B5qeT%2FgIH6el4sbB7n2apGSviwlDrOl%2F1Zy4dWjcvSUKYmWDzWsWPh8ij%2BmvC1GlTZatgLPWGNAXVHkOhntRuX3u4c82n8wkG%2BC7QRW1T6zCDMs2p5JLgtfRYQQ7fAKIWZOgC9GggZ3XyipNGnVrccUr54KZW8KQfq9rhWO%2B5qn2bh4DPNnkmIyBebS1lflp5qY86lgX&X-Amz-Signature=e36da690bf1bd4943fce87da16550cc961d3c47719f988bfefc0168fce2ef81e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NGASYU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPLNSuQdDNFvq9yKa8ITyeAK3AMEtO0naB1FBaqxbzowIhAIgxTXupuEMmQ7mJAUYb9TFCeatZNroEH9GdCelVrCM3KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEqC2Rg19DyEljAiEq3AOuwvFEN34q12xjvEKQnkJyycwj5QVwc5dYmAKCzonwnjQ2xE5eUUiGVAXg8zdUM6El0l3FMD5vFnaSbLK3RI2OiV%2FTd%2FgZK8UUU%2FntANcahECDuTuAadzY9T9i6dvcuLvkgpNG05yOLy2qsxkgNYO%2BDLViDuw1JgRq4WOxDSnSl0dNiFmW6765P7hOKCSj5z9Exc6DwpBVjEDVXQqc%2BMCyPnQpsMMrHnaGp%2BCSxfoP9j8pmaB5RjK8cuxlIs3W6cBVd0zckk22c0cb2JxuC4P3ocdFVz42mGoHE28UqsgJXF336HXdcG9WY0JDkp41c3vifooSzTRoiM%2BSKBuM6LLyhslPlmAPIMeKNSTvErfH0yVAc4FDy5CNmdx62IJtbB4lp3L10kTqVhHUCF%2BoobfcFAsQ4zO4PxtN1b%2FfrG3GA2W2rANMO%2B3dKhJYiYy37yXMT0lT67gaEZkZVqHN%2FFDk6cPzqGjX5SFqm7qye1ZMf9fAnoeqqEiKMh2Qtvafjgal1rMTjlUtesIV%2Bim6uNJFNkT%2F%2FiYsiVRiObrHZ2dio2jYb6r34bDFMWJ%2BVlCWjC2kOZ7rGeMpdLMZ9E7zbGuGCPErGjhN2ct7YZbGPI%2BY7b%2BwC%2B8mqPq9Qq4WXTD38ufEBjqkAfOauyUwXMxhr4OUPnmar83SXt3C%2Fprd1LBoHZeBdRXbGweg9Lzb5zc0oIE76xepu1hVeVtr1657paVWL3hAX%2B9y1Z%2F0Pi5cLEZdDLdwAnR2%2Fz8dSL0A8tcLVovWBhLTqJnHDwzU%2F66nSK3Wv8377pwPIgqce0g5Alh18sj1BaROPI5RDUrYCYx113CHajf71Iw19vq6Kid4%2FSA9ds%2F%2FIuMXpQ%2B3&X-Amz-Signature=776f298567f41f1036512c5a8418ef0d208630ae5a93eda6fe2b41623c2b2274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFLUXYJG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoKE1XD%2F45LUbwya%2Br4ciC7XWUTi%2FpLaehvDfgDPF39gIgN%2FTVrVdq%2Bj%2BA3rY5U5QfY1bQqkT3T0Z4AiQMJhYeakYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0TwZcBvp%2FiOMWBmCrcA7USYinSsJP%2FyNxiamDkC1J27nDIWQFYwBrBFPOalSigmAOVe7PHtGk2hhgV9kHKCjSGFokeUZVXAxG9KZqaRobFyVyoifMDIos0j0CejqQ6wXL%2BhJRq%2F1l0AGE2zTMpxQ7cH%2Fkfo32oqwvixttt4sWWf30h7kIeZ4nL2df102zLHLznvm%2F27D8r6GV1%2FtPQHc0rdgWQS6URJtR6skkZwFW2aN1WBh7c3zbIb6IT06QVYoO0owptoPcsKhLERtR7XZmoXevhixmTLNpeU3NT7uwCNefRf4xzeUPlfDoJYkG%2BYd7bOn1HNI%2FpQlHQmJ8%2BY6b0p0OUwjuVnboq2ONNImGl60c4A6vY17QP2bk2WPxPH2ZkG2enOPPE1Is7UXPDj0QO0T%2ByoDtCMdbLg1AiWJVXESEIYyY14fOkTIA%2BqQ%2Fbx3Y0PNu%2FPOURYWkU0guK%2BOXyl95vjEIFxsyxbbN1mYvZnobfBK58bmfv3VuQWRSdJBN1%2BsiRhpUMDXGbak2TsIUa95sex46KCzCQkDY88E0dBoCFp%2Bhi5dZg43MAzk5MUS4wFJMtnoEprJtd1ns7i6qLjJrT3DVTvcbmSIgkFlnoplOWeTwFHHgQbaVLJzTXR37aefA0zpzC4wPsMI%2Fy58QGOqUBEEQnbMZdu3Me96RGsZ5SgSZZ0jQVKOoWuMO4FkQMkEYOJdRCVm6QWYHvwcUWz7AAbb3B9kv3Bh7oRZghbB%2F4njQQ52%2BzLyb3xDLwznsq15AYs1991cAuTwxsh1KvAmtW2Y90KUpXjUondz4%2BNnVV%2BM7e%2BOPbon8NHZw0wzF032EzOV9QOQx%2BURffRi%2BxYLVCx%2Bkb5GbkncpW7QjtN42bc6Ex8S9Z&X-Amz-Signature=3f37b0091c8e74333f7e016aa2c08e56aec51fcd30c3a94ddd369e3403159af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NGASYU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPLNSuQdDNFvq9yKa8ITyeAK3AMEtO0naB1FBaqxbzowIhAIgxTXupuEMmQ7mJAUYb9TFCeatZNroEH9GdCelVrCM3KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEqC2Rg19DyEljAiEq3AOuwvFEN34q12xjvEKQnkJyycwj5QVwc5dYmAKCzonwnjQ2xE5eUUiGVAXg8zdUM6El0l3FMD5vFnaSbLK3RI2OiV%2FTd%2FgZK8UUU%2FntANcahECDuTuAadzY9T9i6dvcuLvkgpNG05yOLy2qsxkgNYO%2BDLViDuw1JgRq4WOxDSnSl0dNiFmW6765P7hOKCSj5z9Exc6DwpBVjEDVXQqc%2BMCyPnQpsMMrHnaGp%2BCSxfoP9j8pmaB5RjK8cuxlIs3W6cBVd0zckk22c0cb2JxuC4P3ocdFVz42mGoHE28UqsgJXF336HXdcG9WY0JDkp41c3vifooSzTRoiM%2BSKBuM6LLyhslPlmAPIMeKNSTvErfH0yVAc4FDy5CNmdx62IJtbB4lp3L10kTqVhHUCF%2BoobfcFAsQ4zO4PxtN1b%2FfrG3GA2W2rANMO%2B3dKhJYiYy37yXMT0lT67gaEZkZVqHN%2FFDk6cPzqGjX5SFqm7qye1ZMf9fAnoeqqEiKMh2Qtvafjgal1rMTjlUtesIV%2Bim6uNJFNkT%2F%2FiYsiVRiObrHZ2dio2jYb6r34bDFMWJ%2BVlCWjC2kOZ7rGeMpdLMZ9E7zbGuGCPErGjhN2ct7YZbGPI%2BY7b%2BwC%2B8mqPq9Qq4WXTD38ufEBjqkAfOauyUwXMxhr4OUPnmar83SXt3C%2Fprd1LBoHZeBdRXbGweg9Lzb5zc0oIE76xepu1hVeVtr1657paVWL3hAX%2B9y1Z%2F0Pi5cLEZdDLdwAnR2%2Fz8dSL0A8tcLVovWBhLTqJnHDwzU%2F66nSK3Wv8377pwPIgqce0g5Alh18sj1BaROPI5RDUrYCYx113CHajf71Iw19vq6Kid4%2FSA9ds%2F%2FIuMXpQ%2B3&X-Amz-Signature=289461a81a642efe62c75fc7d3ef3d88368acf82d8a4f1cc26fada96b3b1fbe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OZHC777%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAUsrjN9GksdjBktgyuEdG2yzgm9QkM%2BKheAaqOnhrFAiARd3TFciW6YD9P3s%2FE1QV%2BkonySe3a2rupZNm6a4o7bCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfbPQnbcQk6Myw23WKtwDdAUUMCtzWRDLVcLrEjie2Xfny5DGjr8XZQvPTGTv%2B7KeDre8HtwrzX9i0GfRp86FDGNC4wfisAH7MEPJdByMyatR18eOmADv8XU7xGhdOY4oFwLc5RiUXGwxgec4yg5thhRh2Bm4zwrZfxpEOC09gow69zwx7t25b9hHYJgLcRbjA1g0m2HcBZOvv1v46JkdXRqB2ulTbMxLy9vba4goWAjGdt0%2By0VxaOLczq4jnMLlwwLytLgYl75sdazmpNPWFHkwqtX6pXCPXQlMaO2iIAgfePCYSXYUodkPD%2Bex3U%2BV%2FOeMDdayzpWI7Ko1Za34kByyx%2BcaU2kw%2BrAHYeT%2B31X3bXxC8hAm6Iiq%2FIP5dfPauEjtIhrHJ8tGLR6Ys9FrkKU0peVBjCu1S28iRifjS%2FFlj6rwy5ddyWb%2BsgnRNdVdVRy5nhZcocTgPuxWwEe7Lae8ZvyD1XO1rFmBNyv0HwltnDBE7qy%2B7a4AEzyjgT0g3l1v73fXz3r6UVvpMo%2FMs8ep5an5lJrt4FLiXvb%2FK6VaUNsUqpFLmxLDxqe%2F83wrBdCQGm0b8GJioTyjcBQepies1kaBfgom0Gbb9rwLbkTSeZXCjgT3FJoMdudfU%2BS8of0VVmYOxAjFiM4wiPLnxAY6pgFbuJ9qK1v4w4GapsaFn5N%2B9go8tz%2F8OWblPk7z%2BD%2Fi42lyrHnc8FLqmeeTgVs70fLJLGyDSBUI1%2BJy8UlVUQ7uWb2%2FqE4yeIuohwN%2BVaHhPgIO3j4U8MnKHWLSpF96voCx%2FMrb1fPYjP3rL30YWpfT%2BIyfxwm1AdH%2B7MkBOt3Pmh5TfqMw6SZU8w9HLgBYdjkYNiBz8nBOwWUPRkankniiJT50tzz0&X-Amz-Signature=730519e56cc91c9cde817711edacfb84a7139ba5b469f4918a349ea4fda29843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636ZRNH6L%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKb9cSk6wQoez2Wqkhq2eIHvhw%2BSCHO2i9lBMdar9s1gIhAL9w1y0FQoq8P%2Bde2mvIbljgM4aP1NBGB0fYduqQFkn9KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxioiK19wLZ8EnP%2FUUq3AMZDWIPcnxOxoIddZcLubS3taiSD%2FWUAPOjgg8lh770WjiAtcdNdCXxJS4btkx3yepWJJQX5n7qpD74lgs5J64e6vhH%2B7hzIxlESDDsOCLLhUQHR2N0vcQ0h%2FHpWmeeJ%2BIsj76Qozwy8Gl1VjonLc0OA4rMmAVdavziPfn8XL3tr19mq4AujGnURYI1Q%2Fr2MUzuGdj1PI7REOU3wKFa7jRrDcIUJVqz0l%2BzXgW9yw1aiKGEsFCBDbyLqh%2FAHSMO1zvyk3getCleg6wy%2BbTV6CFxJdimJ7bEYLUoHWd77319g%2FKHBDBHvM%2B5GLyE0d7bBIr1SQ4gHhyz%2FOrkKDW3c6xlnfH5KWG8p8zkLFmrRa9E%2FOtUJcn8U4rKwXkvg9XJiwONl%2BrKTfeZOGUw3gIllaWMTvqIutK3gfTVD2psZulpz1YtDBlfo%2BaLz4wze94rGfB5osmZQl6%2B2KdJfaVKIarevPzSB3aK5ClK1U0nk%2FSMdUf06iUp51TLGXIpYHRabyV%2FcUIyCt2X2IXEUj4ck7fuPJsiZV%2FsFFCl4xXgErpnevd2xE8GG5shcLTCYQsm%2FHYt2C9N0Sg1Vfz9D6IrjM%2FikOb%2BkrIOGHRyenBplYZrV1DKp4CZezX%2B4bFh7TCP8%2BfEBjqkASBnAOcuy35C7VCTmbTvB2eDWttuzMn4H75su5rYbzO1mqjVKV0meq7ZFygdn6vQJbEM0RZWP3NQ7ayIaoTD%2F2qYcufFXgkon7YQ9ZJ1eLWQOAnMGM%2FunMCODbizNxlF6vpNdHR1RLwtY%2BcwirOlYWiDyy09YicDfOHspEA%2BVysaGeeFYhPT4ay7HluIs7%2FWQB05JQEMxlqGiqoLIHmJu%2FRnu2Rl&X-Amz-Signature=a6a527b20da05e19febe6fdbdc0c146993f08bd4203d8956a6b6b0a425bf1c75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ES4YLX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOzJ4KjNhrKZPN7208vIMywfxMFK2XTN9RV%2FwLOB6C1gIhAKhiHZi9BfQl5UYtOsudLnDKq8h1e79AvCCH1HOzJueFKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlc%2F8OJJp123Ma7OQq3AOGgaSh5aUBGCnU3dhVDY18QOPqBvr907K5qxI1%2BWkp7LhXCmq6rfxpAZjLABCx1FKs%2F%2F2OLNBRn%2FLscri3UGqpDhjoQ73v5NwW5uSgplzSPE1ivSIKCjRZem%2BZO0CRixvV7BsOaPVb0RG3k%2B8nnFsKHJMG6BqpWn3nP%2FH8G3frVQDN2YwRkJCBzExM1z89Xo5wJlSVftrlzUeua9aCAFb%2Fye2eOHXm59kMzgzrgNIi7HnGuIbKYzbtHL%2BfGH3skHCyBDag9bYYtBhJ6u7diHytm7CuX00kQ6KrhUnlDm1bKUAfVlXZWtH8NHBzI6nEKNtXkVKqhc3g1%2BIqlQlqDc1bfGQv7OVJtRMWEnJjJV8T%2FP6gyMM6cohJrVXbyGmApF0AleTa9eRkDf%2B3JKqNDrggqxbgSlH%2BrpMqcw%2Bz2iHZF6UYMZ40cB6%2Bq2dUjo3kNPv91h%2BW3yjIrMQTABUqTj7o3YUZJb%2FgTBC3cZrA%2FtTi%2Bu2C%2F%2FoZp%2FsMTlfP86tP1AIaqgEnyUlnxlr3RlZZTFGONFJ7Nx8HcC4GAMNoX19481QbBVD%2FhPo2D4EIGB9%2FPUu%2FKrFuWzwgiAQ%2F6mjrTycwFihGtjVCul2cTJ1yUcENbqpRq%2FgPoD0nQv6E3TDr8efEBjqkAbhwSHdn2AqgDc23kbzoONXpgsGeZoBstF1T4r2BpJvjngw9YtT4gmKPBtIq%2B10eQ%2FlqB29f%2FAM9bnjUUM%2F2%2Fg02cFcKsZ4TFbrGMXj8ITcLRioj6CfKwZtGg%2FKxWs2OCjVNQCn2MrAyjAQ3PzejHEVr1xmA7EZzaMBfSjpFr2Pa1BDSh0DllbCDxh1cNe2ftUXhZkiUvG97jdbShtqGs%2B6Q7qb1&X-Amz-Signature=3500917a6338343c89f3170683507e74d5afb64b11a9eb1e34394b8e25088dce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5AYUVO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzeB49dTxhN1AutIt4KbYu%2B40QJVejxbirAtCHOZxrVgIgGTczSWf2rjQg43gbiA2k9Rc7u41bK0ApVLaZKkMCWngqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRpCMPJOSQUi2B8uSrcA9eKjR4%2BrJmL%2BxrNY%2F66mnqODeSaCKRJK79bv5LUrIBn2AvgfjN%2BcTZmKZWxd8LUYKDlJZ0rtrZTbqiABbZR81TgsGYWeXFcW%2B%2F2kcLwKUyDFyeFUv1EDOIJpP9Bg9P4WvzUwnG8IgLHCMZ8%2BCPemN7tKoK2tkNPi4QOeo7ZSK9BxOHjn6RE8mZ4zcXtD4cDndBVs5owinHzAq6YchNaPva1A57A9RzAy8Wzo489WD2wWKWiPMwFBWgFFL4U1uMcCZUBFO5uTbbpco%2BcMW5iSXk8AOj4feQftp4rSl1dwXz3Xt1b67rXFyFlRtxwu8fMP1QYvJKEZMBmdpwJ3zdBVSzvn3LURJ6%2BajrSj8P63eFliR6C%2Bi12M8DHLNRgEiq1OdHgdFQc4vg%2FuXWDTNcQQuX92uGNfZeojdp%2FbW89xN4N5Ow%2BRMMJ1rjlhw9XzkRTy0diK5KYrzJgIwmH6AX2aqKCU3QpLiY%2FSXtns%2F6lpgc%2FSt1iMEDPVN9PFPd8TEmwpBSNFRDXOeppylJ5CBkrT7yvx35Kv6znq3jc98ccpr2vwJ6EYnFYLme0499kx4DgFJtGHjlW4qOYw1uCCIxkIrBoLqNglcJExvC8DOotSnEHdiJsTY3oGNpyJcSLMIrz58QGOqUBXutxY1DWz%2FTw%2BrNcm5Q9MwCiidVExRQ%2FZCJyUEstW1Ql35IuBMtX%2BddHHo0Sdbj0umwY6%2BxHoRbATYrPiQ6RZt5OCEGre%2FLNXaD8EklKGigSUDkYkrknw5AVGcsFnweKQzCFBM1UTcCgz1ClUhAOLspzkMn1smGymHauES2O8RnVajs%2F9XB734SLlLHPJ1i%2BHDmjkRXi52q8%2B8PDmZ162DfI7xBd&X-Amz-Signature=e8588b55697fdd185b891e7279ab17be851b13a99ad2cda1ec8b74bc54978b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQXUG5SX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAdWoyubr9x71zNt%2F%2BhFdIOUbUmyTCuWkuPLiK4oNKiQIhAO%2FlrwHcpS7vJJ2UXydVhKsWY%2B6dlFY4khGztgqUgfdhKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKbjTLjLMlkV1Clqkq3ANjoqoS%2BqV%2B%2BDTP0qOgm7BFzbb%2B2eplBFGJJq7Yas8UE5vWVXpVDyp17t82Yo5mYK4w8Mmvtner1fMC0KDuI%2FKvEqU2ZktW6fUQp9bflJKkd1GZmGaoPqRotSZ32gMk%2B6trPRyCJD%2FOHvwlI8PgbbAD709VJDli1YsUtwFmbmgjJcSUygshyJadWJKOgw46G4dMtMhaOW9RyBI8x2Gv%2BeFYxFSdfdyUwu75juNu28djsUtPxeOl0ZIkrP0UO42s%2Bl38XNTLNeVFJ3FLEuxu2bn4a6%2FkYZ9x2X9AMQAYqvgJuVzAL6xwC5OixOkseUVp3C2W%2FBIDE%2FR1r2chE5IGatfOYD3YgkAI8HH4BiqZcnhQQ50C1%2B6B%2Bw5DQoF47z5qNNDaRKQr3Dvo4kdIQAKJJoPTMujUTfGlp9I9p7FNmxu4eeOGDZUHjVObKGlmPFBS%2B%2BuLEJjt4uwZ8%2Fk0GoA2L%2B%2Bhp7lg4V59V8POxZBx0cKwaaJb6K6eazk6DpZcaM%2BGf0NgnonEbHPRhDciAmGXCMxpeGZ6CUfg3qRr7fNVvVxTJu%2FwxuSnSjvIYc%2BUYa6shgjc4%2FKnaw5zDHdRAXKSxbTzsQiAqQQx3EHGj6Ty5fgBcpzI2BTpIgC6MAmxfzCG8%2BfEBjqkAc5O2mqtG1smiWYedF%2FrYLn4Mpika%2BXvUVLycaVkjRadKki76cwt6JPJ8YBWhcTcVxy%2FaaMKZJWzAXqQXLY%2Fl85uL38RiZMRdTOYa3uDFRzAyJ5BqbEYeI21a4IWnaWtfuhlk3FWx8ZbY7N5ee4V3dv4xVNsVOJVWcL9xLr8S7j2iGGDf8vDuM5TbFYGRU70AE6xdr7GynVk7u5GOLdFo4SbptcJ&X-Amz-Signature=f67e447e94dfc2727ac7b6d297297ec0f9639a6fee4247bab3f14c35a2764180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NGASYU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPLNSuQdDNFvq9yKa8ITyeAK3AMEtO0naB1FBaqxbzowIhAIgxTXupuEMmQ7mJAUYb9TFCeatZNroEH9GdCelVrCM3KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEqC2Rg19DyEljAiEq3AOuwvFEN34q12xjvEKQnkJyycwj5QVwc5dYmAKCzonwnjQ2xE5eUUiGVAXg8zdUM6El0l3FMD5vFnaSbLK3RI2OiV%2FTd%2FgZK8UUU%2FntANcahECDuTuAadzY9T9i6dvcuLvkgpNG05yOLy2qsxkgNYO%2BDLViDuw1JgRq4WOxDSnSl0dNiFmW6765P7hOKCSj5z9Exc6DwpBVjEDVXQqc%2BMCyPnQpsMMrHnaGp%2BCSxfoP9j8pmaB5RjK8cuxlIs3W6cBVd0zckk22c0cb2JxuC4P3ocdFVz42mGoHE28UqsgJXF336HXdcG9WY0JDkp41c3vifooSzTRoiM%2BSKBuM6LLyhslPlmAPIMeKNSTvErfH0yVAc4FDy5CNmdx62IJtbB4lp3L10kTqVhHUCF%2BoobfcFAsQ4zO4PxtN1b%2FfrG3GA2W2rANMO%2B3dKhJYiYy37yXMT0lT67gaEZkZVqHN%2FFDk6cPzqGjX5SFqm7qye1ZMf9fAnoeqqEiKMh2Qtvafjgal1rMTjlUtesIV%2Bim6uNJFNkT%2F%2FiYsiVRiObrHZ2dio2jYb6r34bDFMWJ%2BVlCWjC2kOZ7rGeMpdLMZ9E7zbGuGCPErGjhN2ct7YZbGPI%2BY7b%2BwC%2B8mqPq9Qq4WXTD38ufEBjqkAfOauyUwXMxhr4OUPnmar83SXt3C%2Fprd1LBoHZeBdRXbGweg9Lzb5zc0oIE76xepu1hVeVtr1657paVWL3hAX%2B9y1Z%2F0Pi5cLEZdDLdwAnR2%2Fz8dSL0A8tcLVovWBhLTqJnHDwzU%2F66nSK3Wv8377pwPIgqce0g5Alh18sj1BaROPI5RDUrYCYx113CHajf71Iw19vq6Kid4%2FSA9ds%2F%2FIuMXpQ%2B3&X-Amz-Signature=dd47b584d8dc8d5e90e93c0f979a35b0fe10b3d4bc5f6aed35fcb82b5faa1844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NGASYU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPLNSuQdDNFvq9yKa8ITyeAK3AMEtO0naB1FBaqxbzowIhAIgxTXupuEMmQ7mJAUYb9TFCeatZNroEH9GdCelVrCM3KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEqC2Rg19DyEljAiEq3AOuwvFEN34q12xjvEKQnkJyycwj5QVwc5dYmAKCzonwnjQ2xE5eUUiGVAXg8zdUM6El0l3FMD5vFnaSbLK3RI2OiV%2FTd%2FgZK8UUU%2FntANcahECDuTuAadzY9T9i6dvcuLvkgpNG05yOLy2qsxkgNYO%2BDLViDuw1JgRq4WOxDSnSl0dNiFmW6765P7hOKCSj5z9Exc6DwpBVjEDVXQqc%2BMCyPnQpsMMrHnaGp%2BCSxfoP9j8pmaB5RjK8cuxlIs3W6cBVd0zckk22c0cb2JxuC4P3ocdFVz42mGoHE28UqsgJXF336HXdcG9WY0JDkp41c3vifooSzTRoiM%2BSKBuM6LLyhslPlmAPIMeKNSTvErfH0yVAc4FDy5CNmdx62IJtbB4lp3L10kTqVhHUCF%2BoobfcFAsQ4zO4PxtN1b%2FfrG3GA2W2rANMO%2B3dKhJYiYy37yXMT0lT67gaEZkZVqHN%2FFDk6cPzqGjX5SFqm7qye1ZMf9fAnoeqqEiKMh2Qtvafjgal1rMTjlUtesIV%2Bim6uNJFNkT%2F%2FiYsiVRiObrHZ2dio2jYb6r34bDFMWJ%2BVlCWjC2kOZ7rGeMpdLMZ9E7zbGuGCPErGjhN2ct7YZbGPI%2BY7b%2BwC%2B8mqPq9Qq4WXTD38ufEBjqkAfOauyUwXMxhr4OUPnmar83SXt3C%2Fprd1LBoHZeBdRXbGweg9Lzb5zc0oIE76xepu1hVeVtr1657paVWL3hAX%2B9y1Z%2F0Pi5cLEZdDLdwAnR2%2Fz8dSL0A8tcLVovWBhLTqJnHDwzU%2F66nSK3Wv8377pwPIgqce0g5Alh18sj1BaROPI5RDUrYCYx113CHajf71Iw19vq6Kid4%2FSA9ds%2F%2FIuMXpQ%2B3&X-Amz-Signature=73d6fae5facd81bfc13ce9bebbbee94b1f8d519512c8fe5a14077ffb0612f9e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJHE4B5%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSJZstoFHWJVSOBzfDWZT9d1HzgFP9HD3HtDoTHEuv%2BAiAGIzWFTcwQQza1yite5xx7Wq18C%2BCeSntUJDGTfqQvkyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fj7LygCDpnAcy5J7KtwD92PkdtMndApP4kiCENHHgPL%2Fh8uBFo2gWmXCuxPxY%2BaA%2BB1QGeA7dI4PBfUU%2BVjikWvqqTzELajUwyS7498Qr69v2EG90zbS9T%2FzKkuGbRD9XlfLmumWjSquhyZrPXNKQOWVoj3wbthYhN6KXE48FUHYN3YNCjcJgfHC8N5lhmY8jz1U%2FwJKKucB%2BQCa2u2ZArbfxQtO6CiSKv4gWySyhkkhg852wxyRULFxN6C13AbmrQF2%2Fbu2gdFMpi92iFynaMgrzdHovmpWAZKzg%2Fbjar7pO%2BJQ8%2BJyJOIZofVc%2BfAFkUHOj4wYPrHT4%2Fp5wx2I3th7bYT9l6xalvgpZkgojZN9BWIhVxo3onYGvXx3z9l64r8dcCxSmLqEQlySwQqlyax0t3KNoqjdzjDfWoejz0rRdOOa0z%2BffkrPc5D2vjKIYAB%2BuGMw%2F4u8ujIRkFRHOEfEVolhbhek7pI8VHGmNij%2BUNmy%2FTPlZgvEYpqfgCj1NKoztKV4DFSCL5Ervu3T6f9rUMFjAOKZwx8jwHtxKKHKi5xjLM9OCjUEkrrAFm6KO%2FZ3G6jR06Yh8jHGlQZ0%2B%2BEkqDvDL3MlTC7BPn6z9YNh8a63xtXN3kO8MGIUjyTHI30wiT4NdXQYIcow4PLnxAY6pgGkRCh8Nv9J9fOrEVPcGIR%2BVljBv7s4Zhs2J0wIC6zAFO6IvChja9tWbB7fbZt4gi3oRaV6oWxgbFzVYbnAyotNzNfQ4rKA4sGELP6O0CGWwxG29l0112t%2BEAjdT0PXg4L55v%2BH%2B0GpThn7Ebg77xDJ16XgfoSimRr3%2F3Pnqd0cGtavJ%2FOh4F9DMzfciWHzTwqSxSD1R57MBQcrHqrFFJa3Ug7ME5TE&X-Amz-Signature=c527ca7d2b70dd7dbe76e9881e39e374d52de710755edae8811a9e49e7064aaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJHE4B5%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSJZstoFHWJVSOBzfDWZT9d1HzgFP9HD3HtDoTHEuv%2BAiAGIzWFTcwQQza1yite5xx7Wq18C%2BCeSntUJDGTfqQvkyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fj7LygCDpnAcy5J7KtwD92PkdtMndApP4kiCENHHgPL%2Fh8uBFo2gWmXCuxPxY%2BaA%2BB1QGeA7dI4PBfUU%2BVjikWvqqTzELajUwyS7498Qr69v2EG90zbS9T%2FzKkuGbRD9XlfLmumWjSquhyZrPXNKQOWVoj3wbthYhN6KXE48FUHYN3YNCjcJgfHC8N5lhmY8jz1U%2FwJKKucB%2BQCa2u2ZArbfxQtO6CiSKv4gWySyhkkhg852wxyRULFxN6C13AbmrQF2%2Fbu2gdFMpi92iFynaMgrzdHovmpWAZKzg%2Fbjar7pO%2BJQ8%2BJyJOIZofVc%2BfAFkUHOj4wYPrHT4%2Fp5wx2I3th7bYT9l6xalvgpZkgojZN9BWIhVxo3onYGvXx3z9l64r8dcCxSmLqEQlySwQqlyax0t3KNoqjdzjDfWoejz0rRdOOa0z%2BffkrPc5D2vjKIYAB%2BuGMw%2F4u8ujIRkFRHOEfEVolhbhek7pI8VHGmNij%2BUNmy%2FTPlZgvEYpqfgCj1NKoztKV4DFSCL5Ervu3T6f9rUMFjAOKZwx8jwHtxKKHKi5xjLM9OCjUEkrrAFm6KO%2FZ3G6jR06Yh8jHGlQZ0%2B%2BEkqDvDL3MlTC7BPn6z9YNh8a63xtXN3kO8MGIUjyTHI30wiT4NdXQYIcow4PLnxAY6pgGkRCh8Nv9J9fOrEVPcGIR%2BVljBv7s4Zhs2J0wIC6zAFO6IvChja9tWbB7fbZt4gi3oRaV6oWxgbFzVYbnAyotNzNfQ4rKA4sGELP6O0CGWwxG29l0112t%2BEAjdT0PXg4L55v%2BH%2B0GpThn7Ebg77xDJ16XgfoSimRr3%2F3Pnqd0cGtavJ%2FOh4F9DMzfciWHzTwqSxSD1R57MBQcrHqrFFJa3Ug7ME5TE&X-Amz-Signature=78b2601b52e008bb226d28fa7454cb44845280d09ac6dc1fd3c7afec574b921d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJHE4B5%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSJZstoFHWJVSOBzfDWZT9d1HzgFP9HD3HtDoTHEuv%2BAiAGIzWFTcwQQza1yite5xx7Wq18C%2BCeSntUJDGTfqQvkyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fj7LygCDpnAcy5J7KtwD92PkdtMndApP4kiCENHHgPL%2Fh8uBFo2gWmXCuxPxY%2BaA%2BB1QGeA7dI4PBfUU%2BVjikWvqqTzELajUwyS7498Qr69v2EG90zbS9T%2FzKkuGbRD9XlfLmumWjSquhyZrPXNKQOWVoj3wbthYhN6KXE48FUHYN3YNCjcJgfHC8N5lhmY8jz1U%2FwJKKucB%2BQCa2u2ZArbfxQtO6CiSKv4gWySyhkkhg852wxyRULFxN6C13AbmrQF2%2Fbu2gdFMpi92iFynaMgrzdHovmpWAZKzg%2Fbjar7pO%2BJQ8%2BJyJOIZofVc%2BfAFkUHOj4wYPrHT4%2Fp5wx2I3th7bYT9l6xalvgpZkgojZN9BWIhVxo3onYGvXx3z9l64r8dcCxSmLqEQlySwQqlyax0t3KNoqjdzjDfWoejz0rRdOOa0z%2BffkrPc5D2vjKIYAB%2BuGMw%2F4u8ujIRkFRHOEfEVolhbhek7pI8VHGmNij%2BUNmy%2FTPlZgvEYpqfgCj1NKoztKV4DFSCL5Ervu3T6f9rUMFjAOKZwx8jwHtxKKHKi5xjLM9OCjUEkrrAFm6KO%2FZ3G6jR06Yh8jHGlQZ0%2B%2BEkqDvDL3MlTC7BPn6z9YNh8a63xtXN3kO8MGIUjyTHI30wiT4NdXQYIcow4PLnxAY6pgGkRCh8Nv9J9fOrEVPcGIR%2BVljBv7s4Zhs2J0wIC6zAFO6IvChja9tWbB7fbZt4gi3oRaV6oWxgbFzVYbnAyotNzNfQ4rKA4sGELP6O0CGWwxG29l0112t%2BEAjdT0PXg4L55v%2BH%2B0GpThn7Ebg77xDJ16XgfoSimRr3%2F3Pnqd0cGtavJ%2FOh4F9DMzfciWHzTwqSxSD1R57MBQcrHqrFFJa3Ug7ME5TE&X-Amz-Signature=d5fca34dd8c62da829b92c084f03b1ec9cdd4956c9cc8fd797a250813b47cf1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJHE4B5%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSJZstoFHWJVSOBzfDWZT9d1HzgFP9HD3HtDoTHEuv%2BAiAGIzWFTcwQQza1yite5xx7Wq18C%2BCeSntUJDGTfqQvkyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fj7LygCDpnAcy5J7KtwD92PkdtMndApP4kiCENHHgPL%2Fh8uBFo2gWmXCuxPxY%2BaA%2BB1QGeA7dI4PBfUU%2BVjikWvqqTzELajUwyS7498Qr69v2EG90zbS9T%2FzKkuGbRD9XlfLmumWjSquhyZrPXNKQOWVoj3wbthYhN6KXE48FUHYN3YNCjcJgfHC8N5lhmY8jz1U%2FwJKKucB%2BQCa2u2ZArbfxQtO6CiSKv4gWySyhkkhg852wxyRULFxN6C13AbmrQF2%2Fbu2gdFMpi92iFynaMgrzdHovmpWAZKzg%2Fbjar7pO%2BJQ8%2BJyJOIZofVc%2BfAFkUHOj4wYPrHT4%2Fp5wx2I3th7bYT9l6xalvgpZkgojZN9BWIhVxo3onYGvXx3z9l64r8dcCxSmLqEQlySwQqlyax0t3KNoqjdzjDfWoejz0rRdOOa0z%2BffkrPc5D2vjKIYAB%2BuGMw%2F4u8ujIRkFRHOEfEVolhbhek7pI8VHGmNij%2BUNmy%2FTPlZgvEYpqfgCj1NKoztKV4DFSCL5Ervu3T6f9rUMFjAOKZwx8jwHtxKKHKi5xjLM9OCjUEkrrAFm6KO%2FZ3G6jR06Yh8jHGlQZ0%2B%2BEkqDvDL3MlTC7BPn6z9YNh8a63xtXN3kO8MGIUjyTHI30wiT4NdXQYIcow4PLnxAY6pgGkRCh8Nv9J9fOrEVPcGIR%2BVljBv7s4Zhs2J0wIC6zAFO6IvChja9tWbB7fbZt4gi3oRaV6oWxgbFzVYbnAyotNzNfQ4rKA4sGELP6O0CGWwxG29l0112t%2BEAjdT0PXg4L55v%2BH%2B0GpThn7Ebg77xDJ16XgfoSimRr3%2F3Pnqd0cGtavJ%2FOh4F9DMzfciWHzTwqSxSD1R57MBQcrHqrFFJa3Ug7ME5TE&X-Amz-Signature=7c081aee362adc358a3ce94543914864e7c3f7930ce12237ec23c739545610c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJHE4B5%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSJZstoFHWJVSOBzfDWZT9d1HzgFP9HD3HtDoTHEuv%2BAiAGIzWFTcwQQza1yite5xx7Wq18C%2BCeSntUJDGTfqQvkyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fj7LygCDpnAcy5J7KtwD92PkdtMndApP4kiCENHHgPL%2Fh8uBFo2gWmXCuxPxY%2BaA%2BB1QGeA7dI4PBfUU%2BVjikWvqqTzELajUwyS7498Qr69v2EG90zbS9T%2FzKkuGbRD9XlfLmumWjSquhyZrPXNKQOWVoj3wbthYhN6KXE48FUHYN3YNCjcJgfHC8N5lhmY8jz1U%2FwJKKucB%2BQCa2u2ZArbfxQtO6CiSKv4gWySyhkkhg852wxyRULFxN6C13AbmrQF2%2Fbu2gdFMpi92iFynaMgrzdHovmpWAZKzg%2Fbjar7pO%2BJQ8%2BJyJOIZofVc%2BfAFkUHOj4wYPrHT4%2Fp5wx2I3th7bYT9l6xalvgpZkgojZN9BWIhVxo3onYGvXx3z9l64r8dcCxSmLqEQlySwQqlyax0t3KNoqjdzjDfWoejz0rRdOOa0z%2BffkrPc5D2vjKIYAB%2BuGMw%2F4u8ujIRkFRHOEfEVolhbhek7pI8VHGmNij%2BUNmy%2FTPlZgvEYpqfgCj1NKoztKV4DFSCL5Ervu3T6f9rUMFjAOKZwx8jwHtxKKHKi5xjLM9OCjUEkrrAFm6KO%2FZ3G6jR06Yh8jHGlQZ0%2B%2BEkqDvDL3MlTC7BPn6z9YNh8a63xtXN3kO8MGIUjyTHI30wiT4NdXQYIcow4PLnxAY6pgGkRCh8Nv9J9fOrEVPcGIR%2BVljBv7s4Zhs2J0wIC6zAFO6IvChja9tWbB7fbZt4gi3oRaV6oWxgbFzVYbnAyotNzNfQ4rKA4sGELP6O0CGWwxG29l0112t%2BEAjdT0PXg4L55v%2BH%2B0GpThn7Ebg77xDJ16XgfoSimRr3%2F3Pnqd0cGtavJ%2FOh4F9DMzfciWHzTwqSxSD1R57MBQcrHqrFFJa3Ug7ME5TE&X-Amz-Signature=e173e13a42b6327521240232651fd3b2eb9384ba0d7340c1f44771422f50a34f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJHE4B5%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSJZstoFHWJVSOBzfDWZT9d1HzgFP9HD3HtDoTHEuv%2BAiAGIzWFTcwQQza1yite5xx7Wq18C%2BCeSntUJDGTfqQvkyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fj7LygCDpnAcy5J7KtwD92PkdtMndApP4kiCENHHgPL%2Fh8uBFo2gWmXCuxPxY%2BaA%2BB1QGeA7dI4PBfUU%2BVjikWvqqTzELajUwyS7498Qr69v2EG90zbS9T%2FzKkuGbRD9XlfLmumWjSquhyZrPXNKQOWVoj3wbthYhN6KXE48FUHYN3YNCjcJgfHC8N5lhmY8jz1U%2FwJKKucB%2BQCa2u2ZArbfxQtO6CiSKv4gWySyhkkhg852wxyRULFxN6C13AbmrQF2%2Fbu2gdFMpi92iFynaMgrzdHovmpWAZKzg%2Fbjar7pO%2BJQ8%2BJyJOIZofVc%2BfAFkUHOj4wYPrHT4%2Fp5wx2I3th7bYT9l6xalvgpZkgojZN9BWIhVxo3onYGvXx3z9l64r8dcCxSmLqEQlySwQqlyax0t3KNoqjdzjDfWoejz0rRdOOa0z%2BffkrPc5D2vjKIYAB%2BuGMw%2F4u8ujIRkFRHOEfEVolhbhek7pI8VHGmNij%2BUNmy%2FTPlZgvEYpqfgCj1NKoztKV4DFSCL5Ervu3T6f9rUMFjAOKZwx8jwHtxKKHKi5xjLM9OCjUEkrrAFm6KO%2FZ3G6jR06Yh8jHGlQZ0%2B%2BEkqDvDL3MlTC7BPn6z9YNh8a63xtXN3kO8MGIUjyTHI30wiT4NdXQYIcow4PLnxAY6pgGkRCh8Nv9J9fOrEVPcGIR%2BVljBv7s4Zhs2J0wIC6zAFO6IvChja9tWbB7fbZt4gi3oRaV6oWxgbFzVYbnAyotNzNfQ4rKA4sGELP6O0CGWwxG29l0112t%2BEAjdT0PXg4L55v%2BH%2B0GpThn7Ebg77xDJ16XgfoSimRr3%2F3Pnqd0cGtavJ%2FOh4F9DMzfciWHzTwqSxSD1R57MBQcrHqrFFJa3Ug7ME5TE&X-Amz-Signature=da2400941ecb55577f4229279b64ea594d6e1105bd58deda8acadd499425bf0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJHE4B5%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSJZstoFHWJVSOBzfDWZT9d1HzgFP9HD3HtDoTHEuv%2BAiAGIzWFTcwQQza1yite5xx7Wq18C%2BCeSntUJDGTfqQvkyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fj7LygCDpnAcy5J7KtwD92PkdtMndApP4kiCENHHgPL%2Fh8uBFo2gWmXCuxPxY%2BaA%2BB1QGeA7dI4PBfUU%2BVjikWvqqTzELajUwyS7498Qr69v2EG90zbS9T%2FzKkuGbRD9XlfLmumWjSquhyZrPXNKQOWVoj3wbthYhN6KXE48FUHYN3YNCjcJgfHC8N5lhmY8jz1U%2FwJKKucB%2BQCa2u2ZArbfxQtO6CiSKv4gWySyhkkhg852wxyRULFxN6C13AbmrQF2%2Fbu2gdFMpi92iFynaMgrzdHovmpWAZKzg%2Fbjar7pO%2BJQ8%2BJyJOIZofVc%2BfAFkUHOj4wYPrHT4%2Fp5wx2I3th7bYT9l6xalvgpZkgojZN9BWIhVxo3onYGvXx3z9l64r8dcCxSmLqEQlySwQqlyax0t3KNoqjdzjDfWoejz0rRdOOa0z%2BffkrPc5D2vjKIYAB%2BuGMw%2F4u8ujIRkFRHOEfEVolhbhek7pI8VHGmNij%2BUNmy%2FTPlZgvEYpqfgCj1NKoztKV4DFSCL5Ervu3T6f9rUMFjAOKZwx8jwHtxKKHKi5xjLM9OCjUEkrrAFm6KO%2FZ3G6jR06Yh8jHGlQZ0%2B%2BEkqDvDL3MlTC7BPn6z9YNh8a63xtXN3kO8MGIUjyTHI30wiT4NdXQYIcow4PLnxAY6pgGkRCh8Nv9J9fOrEVPcGIR%2BVljBv7s4Zhs2J0wIC6zAFO6IvChja9tWbB7fbZt4gi3oRaV6oWxgbFzVYbnAyotNzNfQ4rKA4sGELP6O0CGWwxG29l0112t%2BEAjdT0PXg4L55v%2BH%2B0GpThn7Ebg77xDJ16XgfoSimRr3%2F3Pnqd0cGtavJ%2FOh4F9DMzfciWHzTwqSxSD1R57MBQcrHqrFFJa3Ug7ME5TE&X-Amz-Signature=d5fca34dd8c62da829b92c084f03b1ec9cdd4956c9cc8fd797a250813b47cf1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJHE4B5%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSJZstoFHWJVSOBzfDWZT9d1HzgFP9HD3HtDoTHEuv%2BAiAGIzWFTcwQQza1yite5xx7Wq18C%2BCeSntUJDGTfqQvkyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fj7LygCDpnAcy5J7KtwD92PkdtMndApP4kiCENHHgPL%2Fh8uBFo2gWmXCuxPxY%2BaA%2BB1QGeA7dI4PBfUU%2BVjikWvqqTzELajUwyS7498Qr69v2EG90zbS9T%2FzKkuGbRD9XlfLmumWjSquhyZrPXNKQOWVoj3wbthYhN6KXE48FUHYN3YNCjcJgfHC8N5lhmY8jz1U%2FwJKKucB%2BQCa2u2ZArbfxQtO6CiSKv4gWySyhkkhg852wxyRULFxN6C13AbmrQF2%2Fbu2gdFMpi92iFynaMgrzdHovmpWAZKzg%2Fbjar7pO%2BJQ8%2BJyJOIZofVc%2BfAFkUHOj4wYPrHT4%2Fp5wx2I3th7bYT9l6xalvgpZkgojZN9BWIhVxo3onYGvXx3z9l64r8dcCxSmLqEQlySwQqlyax0t3KNoqjdzjDfWoejz0rRdOOa0z%2BffkrPc5D2vjKIYAB%2BuGMw%2F4u8ujIRkFRHOEfEVolhbhek7pI8VHGmNij%2BUNmy%2FTPlZgvEYpqfgCj1NKoztKV4DFSCL5Ervu3T6f9rUMFjAOKZwx8jwHtxKKHKi5xjLM9OCjUEkrrAFm6KO%2FZ3G6jR06Yh8jHGlQZ0%2B%2BEkqDvDL3MlTC7BPn6z9YNh8a63xtXN3kO8MGIUjyTHI30wiT4NdXQYIcow4PLnxAY6pgGkRCh8Nv9J9fOrEVPcGIR%2BVljBv7s4Zhs2J0wIC6zAFO6IvChja9tWbB7fbZt4gi3oRaV6oWxgbFzVYbnAyotNzNfQ4rKA4sGELP6O0CGWwxG29l0112t%2BEAjdT0PXg4L55v%2BH%2B0GpThn7Ebg77xDJ16XgfoSimRr3%2F3Pnqd0cGtavJ%2FOh4F9DMzfciWHzTwqSxSD1R57MBQcrHqrFFJa3Ug7ME5TE&X-Amz-Signature=5871d3f42a1f9cf991cad1b939fcca515b9b3fb8aa0fb6fa0eb55bc92c31bc41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJHE4B5%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSJZstoFHWJVSOBzfDWZT9d1HzgFP9HD3HtDoTHEuv%2BAiAGIzWFTcwQQza1yite5xx7Wq18C%2BCeSntUJDGTfqQvkyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fj7LygCDpnAcy5J7KtwD92PkdtMndApP4kiCENHHgPL%2Fh8uBFo2gWmXCuxPxY%2BaA%2BB1QGeA7dI4PBfUU%2BVjikWvqqTzELajUwyS7498Qr69v2EG90zbS9T%2FzKkuGbRD9XlfLmumWjSquhyZrPXNKQOWVoj3wbthYhN6KXE48FUHYN3YNCjcJgfHC8N5lhmY8jz1U%2FwJKKucB%2BQCa2u2ZArbfxQtO6CiSKv4gWySyhkkhg852wxyRULFxN6C13AbmrQF2%2Fbu2gdFMpi92iFynaMgrzdHovmpWAZKzg%2Fbjar7pO%2BJQ8%2BJyJOIZofVc%2BfAFkUHOj4wYPrHT4%2Fp5wx2I3th7bYT9l6xalvgpZkgojZN9BWIhVxo3onYGvXx3z9l64r8dcCxSmLqEQlySwQqlyax0t3KNoqjdzjDfWoejz0rRdOOa0z%2BffkrPc5D2vjKIYAB%2BuGMw%2F4u8ujIRkFRHOEfEVolhbhek7pI8VHGmNij%2BUNmy%2FTPlZgvEYpqfgCj1NKoztKV4DFSCL5Ervu3T6f9rUMFjAOKZwx8jwHtxKKHKi5xjLM9OCjUEkrrAFm6KO%2FZ3G6jR06Yh8jHGlQZ0%2B%2BEkqDvDL3MlTC7BPn6z9YNh8a63xtXN3kO8MGIUjyTHI30wiT4NdXQYIcow4PLnxAY6pgGkRCh8Nv9J9fOrEVPcGIR%2BVljBv7s4Zhs2J0wIC6zAFO6IvChja9tWbB7fbZt4gi3oRaV6oWxgbFzVYbnAyotNzNfQ4rKA4sGELP6O0CGWwxG29l0112t%2BEAjdT0PXg4L55v%2BH%2B0GpThn7Ebg77xDJ16XgfoSimRr3%2F3Pnqd0cGtavJ%2FOh4F9DMzfciWHzTwqSxSD1R57MBQcrHqrFFJa3Ug7ME5TE&X-Amz-Signature=189f588777fd26de5e1e6f9689c441dbf217b1963592bf27aa471d26d9b0490d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJHE4B5%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSJZstoFHWJVSOBzfDWZT9d1HzgFP9HD3HtDoTHEuv%2BAiAGIzWFTcwQQza1yite5xx7Wq18C%2BCeSntUJDGTfqQvkyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fj7LygCDpnAcy5J7KtwD92PkdtMndApP4kiCENHHgPL%2Fh8uBFo2gWmXCuxPxY%2BaA%2BB1QGeA7dI4PBfUU%2BVjikWvqqTzELajUwyS7498Qr69v2EG90zbS9T%2FzKkuGbRD9XlfLmumWjSquhyZrPXNKQOWVoj3wbthYhN6KXE48FUHYN3YNCjcJgfHC8N5lhmY8jz1U%2FwJKKucB%2BQCa2u2ZArbfxQtO6CiSKv4gWySyhkkhg852wxyRULFxN6C13AbmrQF2%2Fbu2gdFMpi92iFynaMgrzdHovmpWAZKzg%2Fbjar7pO%2BJQ8%2BJyJOIZofVc%2BfAFkUHOj4wYPrHT4%2Fp5wx2I3th7bYT9l6xalvgpZkgojZN9BWIhVxo3onYGvXx3z9l64r8dcCxSmLqEQlySwQqlyax0t3KNoqjdzjDfWoejz0rRdOOa0z%2BffkrPc5D2vjKIYAB%2BuGMw%2F4u8ujIRkFRHOEfEVolhbhek7pI8VHGmNij%2BUNmy%2FTPlZgvEYpqfgCj1NKoztKV4DFSCL5Ervu3T6f9rUMFjAOKZwx8jwHtxKKHKi5xjLM9OCjUEkrrAFm6KO%2FZ3G6jR06Yh8jHGlQZ0%2B%2BEkqDvDL3MlTC7BPn6z9YNh8a63xtXN3kO8MGIUjyTHI30wiT4NdXQYIcow4PLnxAY6pgGkRCh8Nv9J9fOrEVPcGIR%2BVljBv7s4Zhs2J0wIC6zAFO6IvChja9tWbB7fbZt4gi3oRaV6oWxgbFzVYbnAyotNzNfQ4rKA4sGELP6O0CGWwxG29l0112t%2BEAjdT0PXg4L55v%2BH%2B0GpThn7Ebg77xDJ16XgfoSimRr3%2F3Pnqd0cGtavJ%2FOh4F9DMzfciWHzTwqSxSD1R57MBQcrHqrFFJa3Ug7ME5TE&X-Amz-Signature=c199dcb155567f0bda353c287692d0944bbb6064eb7fdf41dcc617ac193b5e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
