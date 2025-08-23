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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZKIIOO7%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG49h46GvDWSF3q7BYJvfAC9Y36hA331e%2FLG%2F6%2BZlnkaAiEA7qMQRh7hCpkl%2FxMgHZweNUrojWxRRRKArpM5WoUTJqUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDFL9wqdqTWTcEIUrVCrcA91PAcARYB0I3vnD5btnyUsN%2Bbvl7DI3M3zua7G2QSeyMlredad5%2BHDMMCbEyCbKmDS0h2MMMTndAXdUI5u53%2FSbnSEONUQuPMYiFKnSU%2BeItlFy0mF%2BhX8tKfcbBBMP4bFt0mqn1bU9F1udADnetlBSMM%2BkBujpLKxDXGaOXg%2BmbZ6uocnU9ebgDhvuP1QlLPas5BTta6mZClrHeDgmUkzDTkcxYUF%2Booz4wuhxv5BQPJKWtygf8rdKdkrdoXcoCGQ%2Bq4xd9JV2CIDUJQrNE499l9H2magApKVcjIBZNskGe%2B9n%2FoiUSuUf1V6IDz0bKeT76zWC6s3pJd2MLFy9KtyT0HtJjZqfz9Sw%2FdsGSvmIqSZAYCkGknBfSFVnhd1kh%2FGWOgdoSEv%2BBpLeEpPlMd9GTcMfi3MtpQ6j2By9pTbKSQKyh5cvniL%2BgEPGykylcUe0ms6bl8F8FDnxub1u6lDSQgYoDWuXJOeuGORqak4%2FGL34ntVp%2BJ0bZcvSDzZxCYnWVmytSEHIkEZJuYZeTQ5TFeWWfK3nSdLSNYmAgIrOEI2LaklDVYIKXVYse4%2Fzv%2FwBJNHmVygB3uW3skyksPjIQO0WOmPstWWXCNmrrl1gJceCDe1Wq%2BSCzcEhMJaOpMUGOqUBsMDsJ41H9sETrHhpuiK%2FFabKSjpdEsJkl1WY5AyIYvrPFVKrqZaPr2F5e06T7TcmDVfduKKeAgNJ5vkmTTz14AHPev5PRaPuKuQBljF5%2FoLIQJIugwcGC2mmMEgUBhOrSW6r64%2BdYqziM%2FSoYiJyq1pFcnT7oZ%2FwGA7ax35wGtgnizqZw5KgglnPQ%2FqjZ8xrGpYJqEVcaw7S77yhaZ9HVDpyse35&X-Amz-Signature=5ca33989f89e42742c8f2a5d5b8bad7a4548cfc29558100f9e833eadc14eb8aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZKIIOO7%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG49h46GvDWSF3q7BYJvfAC9Y36hA331e%2FLG%2F6%2BZlnkaAiEA7qMQRh7hCpkl%2FxMgHZweNUrojWxRRRKArpM5WoUTJqUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDFL9wqdqTWTcEIUrVCrcA91PAcARYB0I3vnD5btnyUsN%2Bbvl7DI3M3zua7G2QSeyMlredad5%2BHDMMCbEyCbKmDS0h2MMMTndAXdUI5u53%2FSbnSEONUQuPMYiFKnSU%2BeItlFy0mF%2BhX8tKfcbBBMP4bFt0mqn1bU9F1udADnetlBSMM%2BkBujpLKxDXGaOXg%2BmbZ6uocnU9ebgDhvuP1QlLPas5BTta6mZClrHeDgmUkzDTkcxYUF%2Booz4wuhxv5BQPJKWtygf8rdKdkrdoXcoCGQ%2Bq4xd9JV2CIDUJQrNE499l9H2magApKVcjIBZNskGe%2B9n%2FoiUSuUf1V6IDz0bKeT76zWC6s3pJd2MLFy9KtyT0HtJjZqfz9Sw%2FdsGSvmIqSZAYCkGknBfSFVnhd1kh%2FGWOgdoSEv%2BBpLeEpPlMd9GTcMfi3MtpQ6j2By9pTbKSQKyh5cvniL%2BgEPGykylcUe0ms6bl8F8FDnxub1u6lDSQgYoDWuXJOeuGORqak4%2FGL34ntVp%2BJ0bZcvSDzZxCYnWVmytSEHIkEZJuYZeTQ5TFeWWfK3nSdLSNYmAgIrOEI2LaklDVYIKXVYse4%2Fzv%2FwBJNHmVygB3uW3skyksPjIQO0WOmPstWWXCNmrrl1gJceCDe1Wq%2BSCzcEhMJaOpMUGOqUBsMDsJ41H9sETrHhpuiK%2FFabKSjpdEsJkl1WY5AyIYvrPFVKrqZaPr2F5e06T7TcmDVfduKKeAgNJ5vkmTTz14AHPev5PRaPuKuQBljF5%2FoLIQJIugwcGC2mmMEgUBhOrSW6r64%2BdYqziM%2FSoYiJyq1pFcnT7oZ%2FwGA7ax35wGtgnizqZw5KgglnPQ%2FqjZ8xrGpYJqEVcaw7S77yhaZ9HVDpyse35&X-Amz-Signature=3997515ad6ae2a3dd2279a84d2881ed866bb4d5e3208f7175c051a288bdbf625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZKIIOO7%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG49h46GvDWSF3q7BYJvfAC9Y36hA331e%2FLG%2F6%2BZlnkaAiEA7qMQRh7hCpkl%2FxMgHZweNUrojWxRRRKArpM5WoUTJqUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDFL9wqdqTWTcEIUrVCrcA91PAcARYB0I3vnD5btnyUsN%2Bbvl7DI3M3zua7G2QSeyMlredad5%2BHDMMCbEyCbKmDS0h2MMMTndAXdUI5u53%2FSbnSEONUQuPMYiFKnSU%2BeItlFy0mF%2BhX8tKfcbBBMP4bFt0mqn1bU9F1udADnetlBSMM%2BkBujpLKxDXGaOXg%2BmbZ6uocnU9ebgDhvuP1QlLPas5BTta6mZClrHeDgmUkzDTkcxYUF%2Booz4wuhxv5BQPJKWtygf8rdKdkrdoXcoCGQ%2Bq4xd9JV2CIDUJQrNE499l9H2magApKVcjIBZNskGe%2B9n%2FoiUSuUf1V6IDz0bKeT76zWC6s3pJd2MLFy9KtyT0HtJjZqfz9Sw%2FdsGSvmIqSZAYCkGknBfSFVnhd1kh%2FGWOgdoSEv%2BBpLeEpPlMd9GTcMfi3MtpQ6j2By9pTbKSQKyh5cvniL%2BgEPGykylcUe0ms6bl8F8FDnxub1u6lDSQgYoDWuXJOeuGORqak4%2FGL34ntVp%2BJ0bZcvSDzZxCYnWVmytSEHIkEZJuYZeTQ5TFeWWfK3nSdLSNYmAgIrOEI2LaklDVYIKXVYse4%2Fzv%2FwBJNHmVygB3uW3skyksPjIQO0WOmPstWWXCNmrrl1gJceCDe1Wq%2BSCzcEhMJaOpMUGOqUBsMDsJ41H9sETrHhpuiK%2FFabKSjpdEsJkl1WY5AyIYvrPFVKrqZaPr2F5e06T7TcmDVfduKKeAgNJ5vkmTTz14AHPev5PRaPuKuQBljF5%2FoLIQJIugwcGC2mmMEgUBhOrSW6r64%2BdYqziM%2FSoYiJyq1pFcnT7oZ%2FwGA7ax35wGtgnizqZw5KgglnPQ%2FqjZ8xrGpYJqEVcaw7S77yhaZ9HVDpyse35&X-Amz-Signature=11506fe765381c8e5441a0c605001dc9fa671d641477ffed3d60d6279948955b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZKIIOO7%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG49h46GvDWSF3q7BYJvfAC9Y36hA331e%2FLG%2F6%2BZlnkaAiEA7qMQRh7hCpkl%2FxMgHZweNUrojWxRRRKArpM5WoUTJqUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDFL9wqdqTWTcEIUrVCrcA91PAcARYB0I3vnD5btnyUsN%2Bbvl7DI3M3zua7G2QSeyMlredad5%2BHDMMCbEyCbKmDS0h2MMMTndAXdUI5u53%2FSbnSEONUQuPMYiFKnSU%2BeItlFy0mF%2BhX8tKfcbBBMP4bFt0mqn1bU9F1udADnetlBSMM%2BkBujpLKxDXGaOXg%2BmbZ6uocnU9ebgDhvuP1QlLPas5BTta6mZClrHeDgmUkzDTkcxYUF%2Booz4wuhxv5BQPJKWtygf8rdKdkrdoXcoCGQ%2Bq4xd9JV2CIDUJQrNE499l9H2magApKVcjIBZNskGe%2B9n%2FoiUSuUf1V6IDz0bKeT76zWC6s3pJd2MLFy9KtyT0HtJjZqfz9Sw%2FdsGSvmIqSZAYCkGknBfSFVnhd1kh%2FGWOgdoSEv%2BBpLeEpPlMd9GTcMfi3MtpQ6j2By9pTbKSQKyh5cvniL%2BgEPGykylcUe0ms6bl8F8FDnxub1u6lDSQgYoDWuXJOeuGORqak4%2FGL34ntVp%2BJ0bZcvSDzZxCYnWVmytSEHIkEZJuYZeTQ5TFeWWfK3nSdLSNYmAgIrOEI2LaklDVYIKXVYse4%2Fzv%2FwBJNHmVygB3uW3skyksPjIQO0WOmPstWWXCNmrrl1gJceCDe1Wq%2BSCzcEhMJaOpMUGOqUBsMDsJ41H9sETrHhpuiK%2FFabKSjpdEsJkl1WY5AyIYvrPFVKrqZaPr2F5e06T7TcmDVfduKKeAgNJ5vkmTTz14AHPev5PRaPuKuQBljF5%2FoLIQJIugwcGC2mmMEgUBhOrSW6r64%2BdYqziM%2FSoYiJyq1pFcnT7oZ%2FwGA7ax35wGtgnizqZw5KgglnPQ%2FqjZ8xrGpYJqEVcaw7S77yhaZ9HVDpyse35&X-Amz-Signature=63ced58f05599ed77e8da63f8331f18d2d8af2c00f5b159d9c49d9509bd5722c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZKIIOO7%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG49h46GvDWSF3q7BYJvfAC9Y36hA331e%2FLG%2F6%2BZlnkaAiEA7qMQRh7hCpkl%2FxMgHZweNUrojWxRRRKArpM5WoUTJqUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDFL9wqdqTWTcEIUrVCrcA91PAcARYB0I3vnD5btnyUsN%2Bbvl7DI3M3zua7G2QSeyMlredad5%2BHDMMCbEyCbKmDS0h2MMMTndAXdUI5u53%2FSbnSEONUQuPMYiFKnSU%2BeItlFy0mF%2BhX8tKfcbBBMP4bFt0mqn1bU9F1udADnetlBSMM%2BkBujpLKxDXGaOXg%2BmbZ6uocnU9ebgDhvuP1QlLPas5BTta6mZClrHeDgmUkzDTkcxYUF%2Booz4wuhxv5BQPJKWtygf8rdKdkrdoXcoCGQ%2Bq4xd9JV2CIDUJQrNE499l9H2magApKVcjIBZNskGe%2B9n%2FoiUSuUf1V6IDz0bKeT76zWC6s3pJd2MLFy9KtyT0HtJjZqfz9Sw%2FdsGSvmIqSZAYCkGknBfSFVnhd1kh%2FGWOgdoSEv%2BBpLeEpPlMd9GTcMfi3MtpQ6j2By9pTbKSQKyh5cvniL%2BgEPGykylcUe0ms6bl8F8FDnxub1u6lDSQgYoDWuXJOeuGORqak4%2FGL34ntVp%2BJ0bZcvSDzZxCYnWVmytSEHIkEZJuYZeTQ5TFeWWfK3nSdLSNYmAgIrOEI2LaklDVYIKXVYse4%2Fzv%2FwBJNHmVygB3uW3skyksPjIQO0WOmPstWWXCNmrrl1gJceCDe1Wq%2BSCzcEhMJaOpMUGOqUBsMDsJ41H9sETrHhpuiK%2FFabKSjpdEsJkl1WY5AyIYvrPFVKrqZaPr2F5e06T7TcmDVfduKKeAgNJ5vkmTTz14AHPev5PRaPuKuQBljF5%2FoLIQJIugwcGC2mmMEgUBhOrSW6r64%2BdYqziM%2FSoYiJyq1pFcnT7oZ%2FwGA7ax35wGtgnizqZw5KgglnPQ%2FqjZ8xrGpYJqEVcaw7S77yhaZ9HVDpyse35&X-Amz-Signature=cd86a9fb98b8ac6e490476a4bbad8410aff52fd316496f98f5be920e17fe135e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZKIIOO7%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG49h46GvDWSF3q7BYJvfAC9Y36hA331e%2FLG%2F6%2BZlnkaAiEA7qMQRh7hCpkl%2FxMgHZweNUrojWxRRRKArpM5WoUTJqUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDFL9wqdqTWTcEIUrVCrcA91PAcARYB0I3vnD5btnyUsN%2Bbvl7DI3M3zua7G2QSeyMlredad5%2BHDMMCbEyCbKmDS0h2MMMTndAXdUI5u53%2FSbnSEONUQuPMYiFKnSU%2BeItlFy0mF%2BhX8tKfcbBBMP4bFt0mqn1bU9F1udADnetlBSMM%2BkBujpLKxDXGaOXg%2BmbZ6uocnU9ebgDhvuP1QlLPas5BTta6mZClrHeDgmUkzDTkcxYUF%2Booz4wuhxv5BQPJKWtygf8rdKdkrdoXcoCGQ%2Bq4xd9JV2CIDUJQrNE499l9H2magApKVcjIBZNskGe%2B9n%2FoiUSuUf1V6IDz0bKeT76zWC6s3pJd2MLFy9KtyT0HtJjZqfz9Sw%2FdsGSvmIqSZAYCkGknBfSFVnhd1kh%2FGWOgdoSEv%2BBpLeEpPlMd9GTcMfi3MtpQ6j2By9pTbKSQKyh5cvniL%2BgEPGykylcUe0ms6bl8F8FDnxub1u6lDSQgYoDWuXJOeuGORqak4%2FGL34ntVp%2BJ0bZcvSDzZxCYnWVmytSEHIkEZJuYZeTQ5TFeWWfK3nSdLSNYmAgIrOEI2LaklDVYIKXVYse4%2Fzv%2FwBJNHmVygB3uW3skyksPjIQO0WOmPstWWXCNmrrl1gJceCDe1Wq%2BSCzcEhMJaOpMUGOqUBsMDsJ41H9sETrHhpuiK%2FFabKSjpdEsJkl1WY5AyIYvrPFVKrqZaPr2F5e06T7TcmDVfduKKeAgNJ5vkmTTz14AHPev5PRaPuKuQBljF5%2FoLIQJIugwcGC2mmMEgUBhOrSW6r64%2BdYqziM%2FSoYiJyq1pFcnT7oZ%2FwGA7ax35wGtgnizqZw5KgglnPQ%2FqjZ8xrGpYJqEVcaw7S77yhaZ9HVDpyse35&X-Amz-Signature=6d6be318bee136f3d42002465c61060d28c3e550ddd8d4d32bc5c19dc725f2f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZKIIOO7%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG49h46GvDWSF3q7BYJvfAC9Y36hA331e%2FLG%2F6%2BZlnkaAiEA7qMQRh7hCpkl%2FxMgHZweNUrojWxRRRKArpM5WoUTJqUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDFL9wqdqTWTcEIUrVCrcA91PAcARYB0I3vnD5btnyUsN%2Bbvl7DI3M3zua7G2QSeyMlredad5%2BHDMMCbEyCbKmDS0h2MMMTndAXdUI5u53%2FSbnSEONUQuPMYiFKnSU%2BeItlFy0mF%2BhX8tKfcbBBMP4bFt0mqn1bU9F1udADnetlBSMM%2BkBujpLKxDXGaOXg%2BmbZ6uocnU9ebgDhvuP1QlLPas5BTta6mZClrHeDgmUkzDTkcxYUF%2Booz4wuhxv5BQPJKWtygf8rdKdkrdoXcoCGQ%2Bq4xd9JV2CIDUJQrNE499l9H2magApKVcjIBZNskGe%2B9n%2FoiUSuUf1V6IDz0bKeT76zWC6s3pJd2MLFy9KtyT0HtJjZqfz9Sw%2FdsGSvmIqSZAYCkGknBfSFVnhd1kh%2FGWOgdoSEv%2BBpLeEpPlMd9GTcMfi3MtpQ6j2By9pTbKSQKyh5cvniL%2BgEPGykylcUe0ms6bl8F8FDnxub1u6lDSQgYoDWuXJOeuGORqak4%2FGL34ntVp%2BJ0bZcvSDzZxCYnWVmytSEHIkEZJuYZeTQ5TFeWWfK3nSdLSNYmAgIrOEI2LaklDVYIKXVYse4%2Fzv%2FwBJNHmVygB3uW3skyksPjIQO0WOmPstWWXCNmrrl1gJceCDe1Wq%2BSCzcEhMJaOpMUGOqUBsMDsJ41H9sETrHhpuiK%2FFabKSjpdEsJkl1WY5AyIYvrPFVKrqZaPr2F5e06T7TcmDVfduKKeAgNJ5vkmTTz14AHPev5PRaPuKuQBljF5%2FoLIQJIugwcGC2mmMEgUBhOrSW6r64%2BdYqziM%2FSoYiJyq1pFcnT7oZ%2FwGA7ax35wGtgnizqZw5KgglnPQ%2FqjZ8xrGpYJqEVcaw7S77yhaZ9HVDpyse35&X-Amz-Signature=8ebe868cac2d1e8f4d780e04ac0bbda9cc5ec5c478e42f95274af589f50f14cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZKIIOO7%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG49h46GvDWSF3q7BYJvfAC9Y36hA331e%2FLG%2F6%2BZlnkaAiEA7qMQRh7hCpkl%2FxMgHZweNUrojWxRRRKArpM5WoUTJqUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDFL9wqdqTWTcEIUrVCrcA91PAcARYB0I3vnD5btnyUsN%2Bbvl7DI3M3zua7G2QSeyMlredad5%2BHDMMCbEyCbKmDS0h2MMMTndAXdUI5u53%2FSbnSEONUQuPMYiFKnSU%2BeItlFy0mF%2BhX8tKfcbBBMP4bFt0mqn1bU9F1udADnetlBSMM%2BkBujpLKxDXGaOXg%2BmbZ6uocnU9ebgDhvuP1QlLPas5BTta6mZClrHeDgmUkzDTkcxYUF%2Booz4wuhxv5BQPJKWtygf8rdKdkrdoXcoCGQ%2Bq4xd9JV2CIDUJQrNE499l9H2magApKVcjIBZNskGe%2B9n%2FoiUSuUf1V6IDz0bKeT76zWC6s3pJd2MLFy9KtyT0HtJjZqfz9Sw%2FdsGSvmIqSZAYCkGknBfSFVnhd1kh%2FGWOgdoSEv%2BBpLeEpPlMd9GTcMfi3MtpQ6j2By9pTbKSQKyh5cvniL%2BgEPGykylcUe0ms6bl8F8FDnxub1u6lDSQgYoDWuXJOeuGORqak4%2FGL34ntVp%2BJ0bZcvSDzZxCYnWVmytSEHIkEZJuYZeTQ5TFeWWfK3nSdLSNYmAgIrOEI2LaklDVYIKXVYse4%2Fzv%2FwBJNHmVygB3uW3skyksPjIQO0WOmPstWWXCNmrrl1gJceCDe1Wq%2BSCzcEhMJaOpMUGOqUBsMDsJ41H9sETrHhpuiK%2FFabKSjpdEsJkl1WY5AyIYvrPFVKrqZaPr2F5e06T7TcmDVfduKKeAgNJ5vkmTTz14AHPev5PRaPuKuQBljF5%2FoLIQJIugwcGC2mmMEgUBhOrSW6r64%2BdYqziM%2FSoYiJyq1pFcnT7oZ%2FwGA7ax35wGtgnizqZw5KgglnPQ%2FqjZ8xrGpYJqEVcaw7S77yhaZ9HVDpyse35&X-Amz-Signature=5d2c83085938e2a71d63eb9c5f27a6f6d3a807b32e37765ae53ca7369c9cb18a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZKIIOO7%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG49h46GvDWSF3q7BYJvfAC9Y36hA331e%2FLG%2F6%2BZlnkaAiEA7qMQRh7hCpkl%2FxMgHZweNUrojWxRRRKArpM5WoUTJqUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDFL9wqdqTWTcEIUrVCrcA91PAcARYB0I3vnD5btnyUsN%2Bbvl7DI3M3zua7G2QSeyMlredad5%2BHDMMCbEyCbKmDS0h2MMMTndAXdUI5u53%2FSbnSEONUQuPMYiFKnSU%2BeItlFy0mF%2BhX8tKfcbBBMP4bFt0mqn1bU9F1udADnetlBSMM%2BkBujpLKxDXGaOXg%2BmbZ6uocnU9ebgDhvuP1QlLPas5BTta6mZClrHeDgmUkzDTkcxYUF%2Booz4wuhxv5BQPJKWtygf8rdKdkrdoXcoCGQ%2Bq4xd9JV2CIDUJQrNE499l9H2magApKVcjIBZNskGe%2B9n%2FoiUSuUf1V6IDz0bKeT76zWC6s3pJd2MLFy9KtyT0HtJjZqfz9Sw%2FdsGSvmIqSZAYCkGknBfSFVnhd1kh%2FGWOgdoSEv%2BBpLeEpPlMd9GTcMfi3MtpQ6j2By9pTbKSQKyh5cvniL%2BgEPGykylcUe0ms6bl8F8FDnxub1u6lDSQgYoDWuXJOeuGORqak4%2FGL34ntVp%2BJ0bZcvSDzZxCYnWVmytSEHIkEZJuYZeTQ5TFeWWfK3nSdLSNYmAgIrOEI2LaklDVYIKXVYse4%2Fzv%2FwBJNHmVygB3uW3skyksPjIQO0WOmPstWWXCNmrrl1gJceCDe1Wq%2BSCzcEhMJaOpMUGOqUBsMDsJ41H9sETrHhpuiK%2FFabKSjpdEsJkl1WY5AyIYvrPFVKrqZaPr2F5e06T7TcmDVfduKKeAgNJ5vkmTTz14AHPev5PRaPuKuQBljF5%2FoLIQJIugwcGC2mmMEgUBhOrSW6r64%2BdYqziM%2FSoYiJyq1pFcnT7oZ%2FwGA7ax35wGtgnizqZw5KgglnPQ%2FqjZ8xrGpYJqEVcaw7S77yhaZ9HVDpyse35&X-Amz-Signature=a6079c57f76f2a9f2e4894854ff3baa40c7f56065bebfd033e02e2afc3115d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZKIIOO7%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG49h46GvDWSF3q7BYJvfAC9Y36hA331e%2FLG%2F6%2BZlnkaAiEA7qMQRh7hCpkl%2FxMgHZweNUrojWxRRRKArpM5WoUTJqUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDFL9wqdqTWTcEIUrVCrcA91PAcARYB0I3vnD5btnyUsN%2Bbvl7DI3M3zua7G2QSeyMlredad5%2BHDMMCbEyCbKmDS0h2MMMTndAXdUI5u53%2FSbnSEONUQuPMYiFKnSU%2BeItlFy0mF%2BhX8tKfcbBBMP4bFt0mqn1bU9F1udADnetlBSMM%2BkBujpLKxDXGaOXg%2BmbZ6uocnU9ebgDhvuP1QlLPas5BTta6mZClrHeDgmUkzDTkcxYUF%2Booz4wuhxv5BQPJKWtygf8rdKdkrdoXcoCGQ%2Bq4xd9JV2CIDUJQrNE499l9H2magApKVcjIBZNskGe%2B9n%2FoiUSuUf1V6IDz0bKeT76zWC6s3pJd2MLFy9KtyT0HtJjZqfz9Sw%2FdsGSvmIqSZAYCkGknBfSFVnhd1kh%2FGWOgdoSEv%2BBpLeEpPlMd9GTcMfi3MtpQ6j2By9pTbKSQKyh5cvniL%2BgEPGykylcUe0ms6bl8F8FDnxub1u6lDSQgYoDWuXJOeuGORqak4%2FGL34ntVp%2BJ0bZcvSDzZxCYnWVmytSEHIkEZJuYZeTQ5TFeWWfK3nSdLSNYmAgIrOEI2LaklDVYIKXVYse4%2Fzv%2FwBJNHmVygB3uW3skyksPjIQO0WOmPstWWXCNmrrl1gJceCDe1Wq%2BSCzcEhMJaOpMUGOqUBsMDsJ41H9sETrHhpuiK%2FFabKSjpdEsJkl1WY5AyIYvrPFVKrqZaPr2F5e06T7TcmDVfduKKeAgNJ5vkmTTz14AHPev5PRaPuKuQBljF5%2FoLIQJIugwcGC2mmMEgUBhOrSW6r64%2BdYqziM%2FSoYiJyq1pFcnT7oZ%2FwGA7ax35wGtgnizqZw5KgglnPQ%2FqjZ8xrGpYJqEVcaw7S77yhaZ9HVDpyse35&X-Amz-Signature=1d2f96e1ba06d48e7987257d5d4929f19926aa6e84f8acf4a055e515251f57f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKQZ3CW%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUHilLBSHkAMkbI9M4lfyXiiptCPntT9Bcg8RhiEPtEAiEA8bVq2NHSOLJ%2BznlK5VyntnmQZezx6%2BdFJRXCsCtdhNYq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDBtOPXb6uJcMaXIhzyrcA2mOU3gA7ULy0zCHeeGFd9ZnveBE5MSlhn2OjgBBxUKVOXp7ZRQ7isedrwKfmIyp91TckaN9UJXOLaHKc1ODpczmCXhGaOqsVIiZcoaCKdkCP%2FAgg5lbiMN%2BvyDtv6a9LfR7PqzQF4OyrZwz%2BdAjFEyF3FDDil6M4gIz9wnuUv%2FPtbEUb4LG3jayltK7sGBu0BRly8D7JTQZiK7Weo61YwdRXFarpCPH6hg5doUz0e5KkwNhxVCp3P1RTrhgvk6QUGtJGnklYzvnxz2EfM%2FYp2y35Fv2hqqy3zAoMoa6%2FAD%2F4%2FSF2cVVF6am6nzMBR4%2B4al5fHJNtu5whGkBwqfWZ%2F5b9657STizGXeyEl4mHPECc8OxVy%2FFSV7Rv29k4HNTKY%2F%2BQN8gMm5A0XaC%2BwebwmeqKkHKI1APWALQtqcxS9wD%2BvRsPqhKZsupNVzzC1%2BrpvRvMtAdTMcL3GnkE90Ma3Oj%2B2N8AzE%2F9no4AF%2BRCEB99XbJFrBUosHRmxAUA1vn2slOmS%2B6Bf9hElz8hYRMGz6YC7RthT%2B0xlnTKZuyDlhitFyxcW0c5QWKr4d%2FaFSgmkoU%2FX3dYmes9R0fXYw9SZq1msOspenb5Dc%2FIEq2xpoap%2BlawTY7IPOCk9GUMNWOpMUGOqUBIc8yQi6y6ngd4X0PcL20XZDTCIfhlw4i4wBriw85%2FtULMkeFm%2FhG6t2nXCau52DJF0EL6znEhGxeaNmvm5%2Bywa5yCazufYl7EKvHT3RagQG%2FCj4wiUJ9kULryjrEZIp3XAdzxc8UA%2FBsJ5%2FUhuiaoQD5CPR2glIU2QiHUdErupOD0m3sXgXF4uRjv59JnVADk6fNiXginln2Ugg%2F3sSpkDCGQoTV&X-Amz-Signature=8a7a92195b571fa04d10aec71ee13021c9e1f49a37ca89a78a84ce15a80b3914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466556R4H6R%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEHVOd8ziL11s3155AvbIu%2FXeUOietu9JpCzgAm7nXtAiAR4MUBSAiWz46meMC6Zp1lIgIOENXPtS8%2Ftvzq%2FOHe5yr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM%2FAIVMzRf31pnqBs8KtwD2IKexJ2sB9Wsy7%2BiYMnLf3ph4pN0wR8OrvuGtFIHOhp25rPVE%2BgPQ9DPeO83aNIzWxnStWfK4W8a165uxi0bkMoTRHktjKemMJRTKus1rtCo3e2mSKeMjjcg78TmDvwvGC75FsDvzNEj6Ez4a401YMm0gaufnatbPLxV%2FH%2B3q5CNlLRSk9A3pn3oITSYmoF8n6qN6mVnZ9%2Bge%2B8ik8pTVAdazahzg0c9oWCKH45ieqnvRo9sGKv4npfgoqQl7Lp6iw2GGsbsPK8SGjiu9re5XwuKAelErlKiLibWp9IIZkvOvgRYtJcEYgzCC4wqPvovS0uOelWIdBlsCmj59vhhuyvDRVeOaS7oKYu%2BSwpubVG471yuS9RMYqsiIf6TsKGsZ3sw2bTfazT9FCWJwc%2BiVi52GWFJf%2FNHhxDVhXLE01Kos1byz7gwCbG7IMOeD%2BaxLqebBqC8q4QXIf%2FE%2FrstC9ZuRzrc9NiV2glwiIo7b2Z2at%2FpDuJoxr3L9oxT9LkY1YpNVkDlD4VgX71m861jJsl1Ro70d5fGb4%2BLUvX1OVQPllBsUZd6eXcBn7yozXL5CmbYXzcUOLWAsp4xFRcpL5A270qPEIhzbqx5BYXTr5Rq%2BWLb5jdk%2F%2BUg97cwyY6kxQY6pgEImLtyixz%2Fl7KpSZYvVxnja3ISEdJqdJ5VPDuAbgCmuowsIGuOKQ%2BksDJj99SmOcj1PH2bkJVEMgdp0%2BvZLYcrja8q6Pynby8tMDB%2FGRlBNYWl4%2FQ6tjIaQYR6DJG00R8XhKSEPV5Ysemu4aAjZyrna4gKKgp0ha%2FejRtbkV14KTMApmt2CT3pjJtxgMhtkddzJ4FfL0GLakvQX4BTp%2BbSgGFGUPj1&X-Amz-Signature=b74e5b1c95d5463ab91364afd69be73858b48c235e3796431e8aa03b57311779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIPEY3Q6%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FdbzszjbB21j2De9bqABF8p5KCUnWq4giZzrDoutO5AiEArfQzEsZdvaKhFWjpdekxF4wfGt7am762gb%2BwQoxYp3Eq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLgzKr0ZB%2FSdyMEKQCrcA2E%2FhJFNuFL9Wl%2Ft9%2Fv4mobHt1HQU6zNuA0%2Bu5aSeStPGZGWJV3LTPqn2bCxlUN25B4ES4mPjLwpnlNxexmuj4GV4pOHBi4sU%2FClttEi6TNG%2BkB4YthV%2FCTEsVR6fVAHrFyXt1beHkkef2x9ugufDNgeiyOpAFfZQJKNlRpHV1Fy9H8lYatVpPv2v816BhiHgYjNyx0h1WVlCSvxBiOuSVrVwHgHwTGNdfCZfzPUR3HCybUHhthp8JlzGMWswXpQwG6ZVxs3PqeWtICjReRvY32DAzGhoE9dBIoPIkFao9gYQ87xHz7qFetAIjXFzRSPxGmdDryXJo3vpsyUOgLcGEHJF2VGuXKsLl5cxlOGdITdUmIi8UpIT%2F%2B8cwIeUTKJ029iJnd%2FoLhK9X5f6NHTO81SvsYtbiqPul5fsencps%2B0BWYiBA8J4QG1xW%2B3kuneLrG4DKV3pv9Pgl6kaI0wkMPaaSmQc2C8FwcU1gXCn3tOPqHAAlx4wWeGGGSOvm7BlmcVwKWE6k2DiIxOZbtkf1fFa%2F%2Fa4BO0NUY1FviCs3xL%2BDwr2cnKWRzjz6k7xq2yYVdDStD8Z52TMxdhSYkbAAIYcvAFUjMzCL6hrbtv%2F6oRAnne4QlxioxyxifCMOiPpMUGOqUBTfDxedVm9rMC54mlFgOdpxXfrEPvlgMXzBufY%2FLfrL%2FdkKBkwTzb6kMqm9xlhXzxIjY7A5oqahMacU9yr7zuoqWhW9HfwXU56FcrM%2FRyLsZamPpsk7G11FOUieP5xljTatrNu3LWgRrufJVYNJ7IKSwx1xnD09TqnCzdsJ3HBniokX8IXiSg5x8BGxHwwqEfY6pgkFFz0UJ%2Fb4TOm75mNnLkhvOJ&X-Amz-Signature=f1168e80823d837ec72bb151c93ed654bf5d02b7d8586b98a9df37c73654f5ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZKIIOO7%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG49h46GvDWSF3q7BYJvfAC9Y36hA331e%2FLG%2F6%2BZlnkaAiEA7qMQRh7hCpkl%2FxMgHZweNUrojWxRRRKArpM5WoUTJqUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDFL9wqdqTWTcEIUrVCrcA91PAcARYB0I3vnD5btnyUsN%2Bbvl7DI3M3zua7G2QSeyMlredad5%2BHDMMCbEyCbKmDS0h2MMMTndAXdUI5u53%2FSbnSEONUQuPMYiFKnSU%2BeItlFy0mF%2BhX8tKfcbBBMP4bFt0mqn1bU9F1udADnetlBSMM%2BkBujpLKxDXGaOXg%2BmbZ6uocnU9ebgDhvuP1QlLPas5BTta6mZClrHeDgmUkzDTkcxYUF%2Booz4wuhxv5BQPJKWtygf8rdKdkrdoXcoCGQ%2Bq4xd9JV2CIDUJQrNE499l9H2magApKVcjIBZNskGe%2B9n%2FoiUSuUf1V6IDz0bKeT76zWC6s3pJd2MLFy9KtyT0HtJjZqfz9Sw%2FdsGSvmIqSZAYCkGknBfSFVnhd1kh%2FGWOgdoSEv%2BBpLeEpPlMd9GTcMfi3MtpQ6j2By9pTbKSQKyh5cvniL%2BgEPGykylcUe0ms6bl8F8FDnxub1u6lDSQgYoDWuXJOeuGORqak4%2FGL34ntVp%2BJ0bZcvSDzZxCYnWVmytSEHIkEZJuYZeTQ5TFeWWfK3nSdLSNYmAgIrOEI2LaklDVYIKXVYse4%2Fzv%2FwBJNHmVygB3uW3skyksPjIQO0WOmPstWWXCNmrrl1gJceCDe1Wq%2BSCzcEhMJaOpMUGOqUBsMDsJ41H9sETrHhpuiK%2FFabKSjpdEsJkl1WY5AyIYvrPFVKrqZaPr2F5e06T7TcmDVfduKKeAgNJ5vkmTTz14AHPev5PRaPuKuQBljF5%2FoLIQJIugwcGC2mmMEgUBhOrSW6r64%2BdYqziM%2FSoYiJyq1pFcnT7oZ%2FwGA7ax35wGtgnizqZw5KgglnPQ%2FqjZ8xrGpYJqEVcaw7S77yhaZ9HVDpyse35&X-Amz-Signature=f71428d0b7441443bde9fe436963b1dd8956eda2974873599fb58abb6b07aff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HN4YRKU%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgaO7q93GXYBpYPcnZxtOuKL1LGV4Di5QjLS02gvJ5zAiEAtjuDUVysJkVV5Ac6J0YZ7Oj4pQv5pSmE2nNxfzLtvEcq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDFgghnj3nhSxqgISHSrcA1yiF219PSHU3g2mmbcqWRRTaenQOe5fRktBfz0Ay2frZWk6veNKFidpS8HBKTnTTlGPvE%2FmYAwba48AQ0ZSfp9w2ty0h8CyVzvrS3XA0yOgTW%2F1CfYcgQpEJZBKvW7JMSjlNB88x%2BwHYP%2BwCFnAFHG2g4E%2B9Hx7Nc6knxQ1jMIkyPFinhPTr5qdZaDc3p9f8QWEQ5sH4WtmaxgnCcecrlFuqahw1hmj6AO3soPetfHOYY0veafVd7KJmADBxHMQQ%2B%2BHwbpdeOIH3ixY8q%2FzbFwcsiGI9JQTcK%2BF6jfHk6NV3P3q1Vu1H11yxMb%2FLeqGd9sbv3AD9%2F3Tur4kVjwQMySJFU%2BwOpeW70RC9bq0f5bpi5AHe0oVCSRfDXLsOmSkOVQmMCIkoaGQogpNTYIlhd%2FXv41D7YSAaJsGmgdT9AWQOCAKmFMI0GedBXksBwU1D9R1RRsQc%2BsGQIl1Dcbwue2JFGpoT29oLr68INTi3VDfLqJekWpKBDXevAbVeRxeO%2FFOpP1VT3OGl6IaBfu2CFXEfOczG7Pos5ZEsT6bhXq5zCLYPk0C4XGKoWR2S8CvlVuAUPQGOcPI4wIPgaJfEzj2rOWUyLRaaXJNo%2BUUsEn2fyzxs3%2B2o6eQVAqsMNyOpMUGOqUB55FGG8iRSMUn%2Bl9JdlchZbIm0FRo2xciOBhFisiRI5wyLItUMRCbKe4zaz90J6cmTYClZE2FyiiNKs9XEOomeaJ5p%2BipR%2FWKcuA0kIzbp7SduVoxv0PjY3g%2Flg1Bw0uJOlZ70y7%2B0YwG%2BreYSmLT7Ka0tVIYq7xWl7NEPvsJ5dvo8K%2B3Jghng1rEzprFscZsgfoiFPD23flRxNKlZ9QgiMv0G2W2&X-Amz-Signature=43bec15f34af5aabd6effb4a2bc9a96f3b6b0fbfcd6b96cbfcb86e8bfadf5998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZKIIOO7%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG49h46GvDWSF3q7BYJvfAC9Y36hA331e%2FLG%2F6%2BZlnkaAiEA7qMQRh7hCpkl%2FxMgHZweNUrojWxRRRKArpM5WoUTJqUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDFL9wqdqTWTcEIUrVCrcA91PAcARYB0I3vnD5btnyUsN%2Bbvl7DI3M3zua7G2QSeyMlredad5%2BHDMMCbEyCbKmDS0h2MMMTndAXdUI5u53%2FSbnSEONUQuPMYiFKnSU%2BeItlFy0mF%2BhX8tKfcbBBMP4bFt0mqn1bU9F1udADnetlBSMM%2BkBujpLKxDXGaOXg%2BmbZ6uocnU9ebgDhvuP1QlLPas5BTta6mZClrHeDgmUkzDTkcxYUF%2Booz4wuhxv5BQPJKWtygf8rdKdkrdoXcoCGQ%2Bq4xd9JV2CIDUJQrNE499l9H2magApKVcjIBZNskGe%2B9n%2FoiUSuUf1V6IDz0bKeT76zWC6s3pJd2MLFy9KtyT0HtJjZqfz9Sw%2FdsGSvmIqSZAYCkGknBfSFVnhd1kh%2FGWOgdoSEv%2BBpLeEpPlMd9GTcMfi3MtpQ6j2By9pTbKSQKyh5cvniL%2BgEPGykylcUe0ms6bl8F8FDnxub1u6lDSQgYoDWuXJOeuGORqak4%2FGL34ntVp%2BJ0bZcvSDzZxCYnWVmytSEHIkEZJuYZeTQ5TFeWWfK3nSdLSNYmAgIrOEI2LaklDVYIKXVYse4%2Fzv%2FwBJNHmVygB3uW3skyksPjIQO0WOmPstWWXCNmrrl1gJceCDe1Wq%2BSCzcEhMJaOpMUGOqUBsMDsJ41H9sETrHhpuiK%2FFabKSjpdEsJkl1WY5AyIYvrPFVKrqZaPr2F5e06T7TcmDVfduKKeAgNJ5vkmTTz14AHPev5PRaPuKuQBljF5%2FoLIQJIugwcGC2mmMEgUBhOrSW6r64%2BdYqziM%2FSoYiJyq1pFcnT7oZ%2FwGA7ax35wGtgnizqZw5KgglnPQ%2FqjZ8xrGpYJqEVcaw7S77yhaZ9HVDpyse35&X-Amz-Signature=b69897b14f7aa79bbda855b8f35477df5138e2cbe1853f1b62b7ce1052a41144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KE7EIO4%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ws7t%2Bs15TJsNuYWoB79p1aCHCgoGolKPXirOK9qBsQIgJoSDPHTR5oZ%2BeGdTAxgWSeCTfzHCs9CqkW0z6z1BRegq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDKxpggC9TC5A1%2FyBWircA7NtNkXrid9uWlUa1JpFMqThuwJ%2BBXCy7TFIjM0Z0vqvJHVUf%2BXLBkUQB9EsARswKEJDzPA5YAL4wFxz1cDSFW0wao8WXihFHEJMgMMe9kFpyA%2BxB%2BSpARTHWmCjrYPyTfA3WCVUXqDI5J9sONUej%2BpTPNR%2FAxEKmngASq1hf5fEAOvN1egTM7IShgXntWplBHc3U%2B7Bzo4YyjW1PaYsZaI%2FGdfemn%2BxPf4Qcfwd0nfSSYjDnuv7hTJqh7JABDR%2FKZuUrez4vlYyVh%2FgkIVhbTqYi4DmzM8KrWYq3JYVnpL9lHTHslmioiGB8h0cFjgBXt5%2B7ODVjCaHMwSbVs9MYFDNONX9GBBx4Wc0vIvVum2s4MBQgJsITRpnBQhT0o%2FGbBSerIWXSq9kYyxFB10BZCG5BqU7H88gbKdl1srOhLetxdHR4LqYzRvIXjaBXaaLjHrNZ91IridB6sGG8QULFNZySOnstFhmDnIgDJ3yXLWh5VmAg8QDdzn8Z37xY0lcdjrsaDkaR8n7HbtYBpfOKAVZqqvYc%2BlD41jIaJRWfNSbO5zz5xS8dcbX6TI8ynHvCkuWcn0WfOqJtAF%2FgSKj82s%2FsiCw667mhU0ucChqe%2Brn62j7w524HB791eNFMOmPpMUGOqUBd1zOan%2BtWydjVECXQlCjivJdvCZ9V4wJnKEPWiQhTYZoT4Ym%2BPRX37mMDwk0HwkjgFK8g6mB0sCpxQT3zrwi%2B0NH9HPD%2BBbCYkSVC%2Bta6vgC2Fb6OLq5N8LVZ2T600SOgHJ%2F0Siu4oyhZzBxgGnwL%2BE7PkEoWrYjW27t2q3JtevSbhnuhKPLdgPL%2BakWVd0nWen%2BzB3fB7LQcKHZIa0H46T4UEgO&X-Amz-Signature=1ace76dc853bb208bbb2df3e201d35d1e8dd2ccd39965a98e63487dcd3c00cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZKIIOO7%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG49h46GvDWSF3q7BYJvfAC9Y36hA331e%2FLG%2F6%2BZlnkaAiEA7qMQRh7hCpkl%2FxMgHZweNUrojWxRRRKArpM5WoUTJqUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDFL9wqdqTWTcEIUrVCrcA91PAcARYB0I3vnD5btnyUsN%2Bbvl7DI3M3zua7G2QSeyMlredad5%2BHDMMCbEyCbKmDS0h2MMMTndAXdUI5u53%2FSbnSEONUQuPMYiFKnSU%2BeItlFy0mF%2BhX8tKfcbBBMP4bFt0mqn1bU9F1udADnetlBSMM%2BkBujpLKxDXGaOXg%2BmbZ6uocnU9ebgDhvuP1QlLPas5BTta6mZClrHeDgmUkzDTkcxYUF%2Booz4wuhxv5BQPJKWtygf8rdKdkrdoXcoCGQ%2Bq4xd9JV2CIDUJQrNE499l9H2magApKVcjIBZNskGe%2B9n%2FoiUSuUf1V6IDz0bKeT76zWC6s3pJd2MLFy9KtyT0HtJjZqfz9Sw%2FdsGSvmIqSZAYCkGknBfSFVnhd1kh%2FGWOgdoSEv%2BBpLeEpPlMd9GTcMfi3MtpQ6j2By9pTbKSQKyh5cvniL%2BgEPGykylcUe0ms6bl8F8FDnxub1u6lDSQgYoDWuXJOeuGORqak4%2FGL34ntVp%2BJ0bZcvSDzZxCYnWVmytSEHIkEZJuYZeTQ5TFeWWfK3nSdLSNYmAgIrOEI2LaklDVYIKXVYse4%2Fzv%2FwBJNHmVygB3uW3skyksPjIQO0WOmPstWWXCNmrrl1gJceCDe1Wq%2BSCzcEhMJaOpMUGOqUBsMDsJ41H9sETrHhpuiK%2FFabKSjpdEsJkl1WY5AyIYvrPFVKrqZaPr2F5e06T7TcmDVfduKKeAgNJ5vkmTTz14AHPev5PRaPuKuQBljF5%2FoLIQJIugwcGC2mmMEgUBhOrSW6r64%2BdYqziM%2FSoYiJyq1pFcnT7oZ%2FwGA7ax35wGtgnizqZw5KgglnPQ%2FqjZ8xrGpYJqEVcaw7S77yhaZ9HVDpyse35&X-Amz-Signature=a5f71f316faecb9fba2cf7d57924d261b37a409fa8cf368f0becb3d37197cd9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHI55ONL%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPn5UNEqYQydWBuY37fKEoLtbDe0yCz8qLo967THGBFAiEAqhTrnY6ienfOAhM35SHbqyAeg8aT20%2BO92Ta7lOkqvcq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNzlfsPym9e9Ff3gfircAzzWDmeRCkBWqJaa2XKwqQxqj3gCA6q4cbF3sXasfEte15sPYUJYIjUkdygtmhngyIRxl%2FEAbHf1Y5thTegiltOWPrEhsdvJH3Jbkc%2F4HK2Rc6rFdf52Wj%2FlnM6mq4NpRBVcx5Y066POBiKA0k1F84x2l2YZSNwY0OdH3ktTK1gD5R3wNrOni7UJbaG7ImNxPt1gPuG1AX0i%2B7qgbBA0yT%2FfIaSKJqTLf81%2B%2FHZXHsBbv6XI5OTb2oz6HtwJtLhf2RweLpNtjtGFSH0D5fIxD1Qh6fHiDzqHsBWzgGlZQJ4Hfb%2B3Bwse0R85VDnIOr9C4wzWz0ZPneEg7Y07FzbIbWlJIVojAFEt7NVCgeb9WJoo2iISAN0BDRiJtN41yE0gucjZ9RsraafkKulrUAwCCsp1Fchhsygs3gcq40AD1bmEQsn%2FAGZjCPS3L0PxHehPBVnAyPYFgqARiCzYbo8ENU%2BuekZfrQTA2hHDGSC1S8RL4VPXgmnj%2FDcijzUNKQtalmM6hV%2FZPAs5y5Qt4%2BuCvTaU5kdwonukmw0bXhvKEI%2BS19NYDkyOtknBiIt9DQXZk8lQ6UMhu5qBA9twU%2F2mypnb8iEw8rJ7s5pPTRgMLVTbG%2Bih62DheKp7BbofMPmPpMUGOqUBi6icOajEYO2GFsqyfiENlpsi4Waz1GbJYu3XW0%2BYHivYw4kyklBqbNew8H9WAW2duaiefFk0y4QctxqnNuG4lHvuQ4Pa%2BBGf2%2FQTaiJztuLJ1%2FnAWBVddZ6wdTDWbsDXYiLBKJFEXIj1LrkdgbFVfRecvwQ%2B1ozlBwG3uvqG6ofyRwC1t8cxMulpFG7GqA%2FVRADP%2BoqgG5%2FowyqvxlvbPibfa8fo&X-Amz-Signature=a6e0cd6d111083a5c06addd5d246cf02840815279f77376ea134a2a1be716341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZKIIOO7%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG49h46GvDWSF3q7BYJvfAC9Y36hA331e%2FLG%2F6%2BZlnkaAiEA7qMQRh7hCpkl%2FxMgHZweNUrojWxRRRKArpM5WoUTJqUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDFL9wqdqTWTcEIUrVCrcA91PAcARYB0I3vnD5btnyUsN%2Bbvl7DI3M3zua7G2QSeyMlredad5%2BHDMMCbEyCbKmDS0h2MMMTndAXdUI5u53%2FSbnSEONUQuPMYiFKnSU%2BeItlFy0mF%2BhX8tKfcbBBMP4bFt0mqn1bU9F1udADnetlBSMM%2BkBujpLKxDXGaOXg%2BmbZ6uocnU9ebgDhvuP1QlLPas5BTta6mZClrHeDgmUkzDTkcxYUF%2Booz4wuhxv5BQPJKWtygf8rdKdkrdoXcoCGQ%2Bq4xd9JV2CIDUJQrNE499l9H2magApKVcjIBZNskGe%2B9n%2FoiUSuUf1V6IDz0bKeT76zWC6s3pJd2MLFy9KtyT0HtJjZqfz9Sw%2FdsGSvmIqSZAYCkGknBfSFVnhd1kh%2FGWOgdoSEv%2BBpLeEpPlMd9GTcMfi3MtpQ6j2By9pTbKSQKyh5cvniL%2BgEPGykylcUe0ms6bl8F8FDnxub1u6lDSQgYoDWuXJOeuGORqak4%2FGL34ntVp%2BJ0bZcvSDzZxCYnWVmytSEHIkEZJuYZeTQ5TFeWWfK3nSdLSNYmAgIrOEI2LaklDVYIKXVYse4%2Fzv%2FwBJNHmVygB3uW3skyksPjIQO0WOmPstWWXCNmrrl1gJceCDe1Wq%2BSCzcEhMJaOpMUGOqUBsMDsJ41H9sETrHhpuiK%2FFabKSjpdEsJkl1WY5AyIYvrPFVKrqZaPr2F5e06T7TcmDVfduKKeAgNJ5vkmTTz14AHPev5PRaPuKuQBljF5%2FoLIQJIugwcGC2mmMEgUBhOrSW6r64%2BdYqziM%2FSoYiJyq1pFcnT7oZ%2FwGA7ax35wGtgnizqZw5KgglnPQ%2FqjZ8xrGpYJqEVcaw7S77yhaZ9HVDpyse35&X-Amz-Signature=f732de4735b8ac4096695b461865f301cbf96964cd128fbe679a0f215254e4a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZW5JFDC%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyyeJquDX8M4qJ%2FIPZnpW1tbk9G3JBAcNezItjSujeXgIhAPrayn43%2FkkWPS6fBj6nhHsXLCKa2dtniUmUfChQQLxyKv8DCCEQABoMNjM3NDIzMTgzODA1IgynB4wVdkGlbPlr8fQq3AMcUtEdbcIjnPtp0jVRoH4QW0RwiHMKELpUUOOTvnqKj7FfAhrGEPw6SyHwiAc4%2B7XVVzLAztfM3VqJnuf%2F2m2PSAJUpPbkeKdYkKbm7zRikSQUciZeyW40IsfYMeHnoY3SBum3nDYpi2HQtZRo2%2FTDrcmqchHzelyC8Md%2B64mGXKDOxKFk0CaYtdTUtmAqfQ3kuPpaUBfaTgI96tpMXPKUl3Gx4nvsxigAR4XqC5w1fLMKLkRKR%2BDatczHg0Vk1OaMp1vqe%2B2Hsm37ihipRKqdInY4ibVkDblJs0MqLASnhSdt9EEO9e5fv8vvyHgotmw25c4tYUJy2mDdS%2BkDEkXcqbc8Y4Khk7q%2FHD71%2FQ%2BMJYbyU5bIXAkHPZNfteh8UgfN%2BSYsmEDXQXKc%2F4kPEzzMoxrwKtFaf5uW0x%2FXbRbAskuGCO8xNyjt3FIBvZ3RcKzZzVb0gFdUwjlBWnQ2hzmmow4V4fcJwKvwebtAvv%2Bt3G3k4IWX6SLS80iNoU4LvC8%2F3NSCS0lEQeSP9yvc52oBLroD1x%2BSzC7LoJZ8kgPTFtFiLIGrLU3NwJD7juIT%2BGpwfJh5nLGcQGSuYoO13Ix%2BZHF6QHvT75WVnp%2BomrZ0MZ9m87Ep%2FgmusFfbaDCWjqTFBjqkAbp3ALOUhwduLdcdB%2B5ZRCwS%2BXJ5wgNWKk2ozSfag9x%2FlNdvDGyBqTX%2Fkug4A3GBpJ2F4%2BiIyROZZR7MOo4%2BfJ%2Bd4xkT%2FAJf%2FkKfO45zIBWrE%2B6v9tv17WCXyWXvKmV%2Fa75OZUaEIjM9BYJ5w4OjUQJxQ%2BpgIDcohbffrs9pRByJDbbWpuP6%2FHMR6JvfnLZZliQxf1kQTUK9SzlUV0k7xy9XMgUD&X-Amz-Signature=7da601f6d805fc70eba80aba8f7cf6f8f6005834502857ef01512efe47f1327f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZKIIOO7%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG49h46GvDWSF3q7BYJvfAC9Y36hA331e%2FLG%2F6%2BZlnkaAiEA7qMQRh7hCpkl%2FxMgHZweNUrojWxRRRKArpM5WoUTJqUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDFL9wqdqTWTcEIUrVCrcA91PAcARYB0I3vnD5btnyUsN%2Bbvl7DI3M3zua7G2QSeyMlredad5%2BHDMMCbEyCbKmDS0h2MMMTndAXdUI5u53%2FSbnSEONUQuPMYiFKnSU%2BeItlFy0mF%2BhX8tKfcbBBMP4bFt0mqn1bU9F1udADnetlBSMM%2BkBujpLKxDXGaOXg%2BmbZ6uocnU9ebgDhvuP1QlLPas5BTta6mZClrHeDgmUkzDTkcxYUF%2Booz4wuhxv5BQPJKWtygf8rdKdkrdoXcoCGQ%2Bq4xd9JV2CIDUJQrNE499l9H2magApKVcjIBZNskGe%2B9n%2FoiUSuUf1V6IDz0bKeT76zWC6s3pJd2MLFy9KtyT0HtJjZqfz9Sw%2FdsGSvmIqSZAYCkGknBfSFVnhd1kh%2FGWOgdoSEv%2BBpLeEpPlMd9GTcMfi3MtpQ6j2By9pTbKSQKyh5cvniL%2BgEPGykylcUe0ms6bl8F8FDnxub1u6lDSQgYoDWuXJOeuGORqak4%2FGL34ntVp%2BJ0bZcvSDzZxCYnWVmytSEHIkEZJuYZeTQ5TFeWWfK3nSdLSNYmAgIrOEI2LaklDVYIKXVYse4%2Fzv%2FwBJNHmVygB3uW3skyksPjIQO0WOmPstWWXCNmrrl1gJceCDe1Wq%2BSCzcEhMJaOpMUGOqUBsMDsJ41H9sETrHhpuiK%2FFabKSjpdEsJkl1WY5AyIYvrPFVKrqZaPr2F5e06T7TcmDVfduKKeAgNJ5vkmTTz14AHPev5PRaPuKuQBljF5%2FoLIQJIugwcGC2mmMEgUBhOrSW6r64%2BdYqziM%2FSoYiJyq1pFcnT7oZ%2FwGA7ax35wGtgnizqZw5KgglnPQ%2FqjZ8xrGpYJqEVcaw7S77yhaZ9HVDpyse35&X-Amz-Signature=94e5a01c72e3637511ed0aa41efb8b11b93ce333f7e76c6d0aa9c6c311404184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGKHULAU%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE39A8OD8oRAiHN6eZwVyOFuS5ifs6%2BBBD9L6uBReavFAiB99JUGk9eUnzHiDsBHrU8WF8b91w6Xz3AONWB0bUxs6ir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMoaYDYljSX7%2BURs7lKtwDWHpWPbXYOChTRxdFpc3UiRoY3jjwI7AA4kCzxBpHSSYVXSYLRg7zdN205pSH0OCmYB08nEz9bfzm%2FLcN8gJDDj3q%2FBU1lFsTae8sQ6SiccPSARr%2Bz7PaeKUA3tVbMd0oSggO2goRUbLwqcbwYcwsr1xmZPvUyE3xyavwmPxpi1xm2LeP%2FwWQo2%2FYysTr3bu3pVI6AzazarQiVbGFaMeJRrGYJTvpQXOAdPv1pVDY3cEGcEWUFn49Op04NASH0jV06dHSsKt2bKbR8Q9YiwgKmC8CqYa2TDQyJlGq1bdZ3jWQKo33tLYD2HNCJwvoNDUOkek8FlhfTYvPyNDNVskSnhzzGSgD3LztSTsl4ZE09c9RNOvUoOlWoRcwiuQUqJLjLE33R73RRBotmwhwnZrJas76YIckXpR8EYHdbvGdcZAi769X2A9ohabTca1lDUocLHQtGUDIt4xblwC7J%2FmB41k6AoIGajXjV4zfKdynpYweV4Bn9NiLnhj%2BZ3OefAZVpGGsKbRtqQtFJmfIUiYDOqkG8vWrDLP1Pu6sQ3BW4UYyqziQUwWRU60MVNa77%2Fec9xWv1mluLyt33n8wjOypd1I8Y9pZY6jPpbF33bcZIi461VThGBgNcvTe%2FSswgI6kxQY6pgGtN2Q8zQu6751WC7auBn5l1%2FoNKCTGTO%2BAZBHUHRp%2BhLyiM0noj3sG4HU6MBdaeFitBEaSMVueagkyvsCpdmG6fhfXKwnP72nC2JQWOLdTA1khMTV3YXGZSRmAED4J6mwAO1I7zjOzqUYb3ZKCsMu1cpqUzNgtMDg5pBJmsMV2Uoyyc25E0rRuKqKzLFWo2Tegr1SlRw183hxhN3voBs3UeyU71Esy&X-Amz-Signature=2d8858f484cbf7aeff6fc776791dedf1cda49afc59fb51dfab15d1aaf21f7b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBFBVOR%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2TMRdGX7Trjs6U4CasKrarSBCrUYV5m3Tac%2BBdWOkdAiBmNrKP33UbbW5K8T8m%2F6bvdydHOvgn01589Uj476xD1yr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMHEvSy0jf%2F5ckTwXyKtwDqlukgwq09fIHVI47NUupkDs%2F%2B80n3DSK5AK88cIvJx4KpW9DLKffwd3wdLdPTh18NQE3QTgnebz48t6lunH%2F4tRFnK8qlydlpuOnJZH0zKRkSNoyBqKr%2FS%2FGq%2ByieVOHsXxdC2LQD4qpkoR80TKfIzA6S2gauBleFiaNbqrTx1e20Za1cXKo9G9yHFr1YplpK9PbUz7bn7cMyf525htFIYli4wPn1ilUiGOEeUTbZxVLm%2BJqeNHZLQrXeL1DhA6Tw5zv0JcfcsybnvbJsx76UfjkLp1BXLuzWx%2F%2FDH2HGyblGgWZqSgsxPFf1cWFW4zDlzQb9u%2FFK4aVbg1d3jZ7Pnqh%2BSF%2F0juk6lN%2BAIgY5qCHJird14E%2FqQc92gCzIFdgPxGdgzQBwWNGxvwPVGNoQ9wiOLClHKFwZuu0nynMTB7%2F3uutcEHB4o0oHiOASo%2Fmfti3nfZYKRpwUHBRXidGMzldVlwLRB5yOyrzTUUgPw2D4JegiCq8Kxbjm1AmCg3Jc8AeTK50kVZACHNZUnQmW6lgoDLm%2Fyt%2Fj8q5CCJk%2B5k164CDKLDaR%2FQXiHE8jXItYnb%2B5f46muKdGfUxr3OARmnOEdM1WwnJmbflCwP9w0NDyvlVvAXH%2FVMQ2sMwoY6kxQY6pgH%2BMt88dh2Cizq99B9ry6tx%2FE8X31oGDV72bwxdooG6QLls0HILhceOrtMVHWuxUqlMlAzSDxKmoN0Y451PEXph3HZ3bO6%2BrD97tA5cnYWdK7hsmbCkm6tit89YbbAlq%2FtOzT0DLF40oOHQ5PfCA77TEdu6nRxlTNTMpuZ%2F4wqobGOjs9aCXpfLFMUSKZdpX3N5%2BI0DpFSWMoAYvrKAS6zdAapEi6Th&X-Amz-Signature=96345e889e082b23f189781e45df0c907f2091b640a9cecb56239f041aea656d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DJEKCZZ%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1rL2LeM6UlKH55mG5s4B9rxyAkepT5MSZ6aVkb5tFpAiBcac8JM7QlNZwm0WdesHrsXdDyDnASi%2FtWHIXmIwcpQyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM1AR%2F1nY5EUAbial8KtwDS3SfwovAa618LAZNVyzEHJTLRx4hi1MpZPipF293pTXR2Nu0YP3EqBXShvIOeMC4iAP%2BR54H%2FCtPhrCRrF7qxN4eew9veVYP0OKsLi9ifYEcNg64j2VpT%2By9WWF2Bp0kSvdiVAhzcR49QfLnlW9geCAmOLx9VSx41clU3RvMarYM94O2GoXrGP6rnJejv1qfyz6VnuJHhNSD%2BsHNF87P9enV7hYI12sn7jVepKwU0lCx3F5ZlOoUW%2FBYvfGUaJyACJaPmLfn1wkU2KwAf5V1HjY5H248QqSvX4i96%2BPVAeZVtbojGLoKjm5lrWDdrgilic92LB8h%2B6Ro2ZkocU1nQ6bp%2B980lty1ChyMbEFsr8CWJ3LtOSzv%2B1o5CRIf2Q%2Bt7fHtVcnt%2B%2Bwvkkc%2BOrrmaaN8k5Tjf%2FknG2Gugq74VV16DCq4eAZKRr2p67GiiDayHEa3xmDiNNwtPyDB0zZrtuHXpbtixtlXhRudKSZ7aOj3mbXO9Jpw6GTq6lUbECGpvXUVwGysKl9nYVCYMz%2BQ10mGM2dvIleZxCvwgU98%2FPg3%2FlCWQL2PwC7h9IW3wupZ7LqD%2BzOzFOq6yzqg4XDCkNHVzJTpunZWYC6yWbeahHIlBVnElyJXrc50wx4w4o6kxQY6pgHhnnvnwYpg1jvN4%2Fpq7rGvs0J9qQGNqm2VmN5QkDwzDUQCn9UaUAsSxKRtqQ97DjWGCG0oBZvBvdCyd5su%2BJ3uZBliDCUiyY%2B07m8i0XVc%2FZifrbStTeC4JrxK0UAhC4WckZYEbZiC%2Faq927DAp481NrXifn7h8ODkHdNlcSNItgedlaNKr99MWwvKeSC6pfrDs271EjLowX1HVYpB1zCQWooWcK0V&X-Amz-Signature=9db98b7155dbaa30950ab89ccd72d28e5e21290d46e764e0b76c6a0e09671705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZKIIOO7%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG49h46GvDWSF3q7BYJvfAC9Y36hA331e%2FLG%2F6%2BZlnkaAiEA7qMQRh7hCpkl%2FxMgHZweNUrojWxRRRKArpM5WoUTJqUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDFL9wqdqTWTcEIUrVCrcA91PAcARYB0I3vnD5btnyUsN%2Bbvl7DI3M3zua7G2QSeyMlredad5%2BHDMMCbEyCbKmDS0h2MMMTndAXdUI5u53%2FSbnSEONUQuPMYiFKnSU%2BeItlFy0mF%2BhX8tKfcbBBMP4bFt0mqn1bU9F1udADnetlBSMM%2BkBujpLKxDXGaOXg%2BmbZ6uocnU9ebgDhvuP1QlLPas5BTta6mZClrHeDgmUkzDTkcxYUF%2Booz4wuhxv5BQPJKWtygf8rdKdkrdoXcoCGQ%2Bq4xd9JV2CIDUJQrNE499l9H2magApKVcjIBZNskGe%2B9n%2FoiUSuUf1V6IDz0bKeT76zWC6s3pJd2MLFy9KtyT0HtJjZqfz9Sw%2FdsGSvmIqSZAYCkGknBfSFVnhd1kh%2FGWOgdoSEv%2BBpLeEpPlMd9GTcMfi3MtpQ6j2By9pTbKSQKyh5cvniL%2BgEPGykylcUe0ms6bl8F8FDnxub1u6lDSQgYoDWuXJOeuGORqak4%2FGL34ntVp%2BJ0bZcvSDzZxCYnWVmytSEHIkEZJuYZeTQ5TFeWWfK3nSdLSNYmAgIrOEI2LaklDVYIKXVYse4%2Fzv%2FwBJNHmVygB3uW3skyksPjIQO0WOmPstWWXCNmrrl1gJceCDe1Wq%2BSCzcEhMJaOpMUGOqUBsMDsJ41H9sETrHhpuiK%2FFabKSjpdEsJkl1WY5AyIYvrPFVKrqZaPr2F5e06T7TcmDVfduKKeAgNJ5vkmTTz14AHPev5PRaPuKuQBljF5%2FoLIQJIugwcGC2mmMEgUBhOrSW6r64%2BdYqziM%2FSoYiJyq1pFcnT7oZ%2FwGA7ax35wGtgnizqZw5KgglnPQ%2FqjZ8xrGpYJqEVcaw7S77yhaZ9HVDpyse35&X-Amz-Signature=c0126174e7fac73a9e3097ea521e4daa613fe7e3770d4978dec315f986a7d001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZKIIOO7%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG49h46GvDWSF3q7BYJvfAC9Y36hA331e%2FLG%2F6%2BZlnkaAiEA7qMQRh7hCpkl%2FxMgHZweNUrojWxRRRKArpM5WoUTJqUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDFL9wqdqTWTcEIUrVCrcA91PAcARYB0I3vnD5btnyUsN%2Bbvl7DI3M3zua7G2QSeyMlredad5%2BHDMMCbEyCbKmDS0h2MMMTndAXdUI5u53%2FSbnSEONUQuPMYiFKnSU%2BeItlFy0mF%2BhX8tKfcbBBMP4bFt0mqn1bU9F1udADnetlBSMM%2BkBujpLKxDXGaOXg%2BmbZ6uocnU9ebgDhvuP1QlLPas5BTta6mZClrHeDgmUkzDTkcxYUF%2Booz4wuhxv5BQPJKWtygf8rdKdkrdoXcoCGQ%2Bq4xd9JV2CIDUJQrNE499l9H2magApKVcjIBZNskGe%2B9n%2FoiUSuUf1V6IDz0bKeT76zWC6s3pJd2MLFy9KtyT0HtJjZqfz9Sw%2FdsGSvmIqSZAYCkGknBfSFVnhd1kh%2FGWOgdoSEv%2BBpLeEpPlMd9GTcMfi3MtpQ6j2By9pTbKSQKyh5cvniL%2BgEPGykylcUe0ms6bl8F8FDnxub1u6lDSQgYoDWuXJOeuGORqak4%2FGL34ntVp%2BJ0bZcvSDzZxCYnWVmytSEHIkEZJuYZeTQ5TFeWWfK3nSdLSNYmAgIrOEI2LaklDVYIKXVYse4%2Fzv%2FwBJNHmVygB3uW3skyksPjIQO0WOmPstWWXCNmrrl1gJceCDe1Wq%2BSCzcEhMJaOpMUGOqUBsMDsJ41H9sETrHhpuiK%2FFabKSjpdEsJkl1WY5AyIYvrPFVKrqZaPr2F5e06T7TcmDVfduKKeAgNJ5vkmTTz14AHPev5PRaPuKuQBljF5%2FoLIQJIugwcGC2mmMEgUBhOrSW6r64%2BdYqziM%2FSoYiJyq1pFcnT7oZ%2FwGA7ax35wGtgnizqZw5KgglnPQ%2FqjZ8xrGpYJqEVcaw7S77yhaZ9HVDpyse35&X-Amz-Signature=030b200c88588c272718eb6c1ff330ef2457d174c7d0dd9b141115ea6db28ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466556R4H6R%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEHVOd8ziL11s3155AvbIu%2FXeUOietu9JpCzgAm7nXtAiAR4MUBSAiWz46meMC6Zp1lIgIOENXPtS8%2Ftvzq%2FOHe5yr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM%2FAIVMzRf31pnqBs8KtwD2IKexJ2sB9Wsy7%2BiYMnLf3ph4pN0wR8OrvuGtFIHOhp25rPVE%2BgPQ9DPeO83aNIzWxnStWfK4W8a165uxi0bkMoTRHktjKemMJRTKus1rtCo3e2mSKeMjjcg78TmDvwvGC75FsDvzNEj6Ez4a401YMm0gaufnatbPLxV%2FH%2B3q5CNlLRSk9A3pn3oITSYmoF8n6qN6mVnZ9%2Bge%2B8ik8pTVAdazahzg0c9oWCKH45ieqnvRo9sGKv4npfgoqQl7Lp6iw2GGsbsPK8SGjiu9re5XwuKAelErlKiLibWp9IIZkvOvgRYtJcEYgzCC4wqPvovS0uOelWIdBlsCmj59vhhuyvDRVeOaS7oKYu%2BSwpubVG471yuS9RMYqsiIf6TsKGsZ3sw2bTfazT9FCWJwc%2BiVi52GWFJf%2FNHhxDVhXLE01Kos1byz7gwCbG7IMOeD%2BaxLqebBqC8q4QXIf%2FE%2FrstC9ZuRzrc9NiV2glwiIo7b2Z2at%2FpDuJoxr3L9oxT9LkY1YpNVkDlD4VgX71m861jJsl1Ro70d5fGb4%2BLUvX1OVQPllBsUZd6eXcBn7yozXL5CmbYXzcUOLWAsp4xFRcpL5A270qPEIhzbqx5BYXTr5Rq%2BWLb5jdk%2F%2BUg97cwyY6kxQY6pgEImLtyixz%2Fl7KpSZYvVxnja3ISEdJqdJ5VPDuAbgCmuowsIGuOKQ%2BksDJj99SmOcj1PH2bkJVEMgdp0%2BvZLYcrja8q6Pynby8tMDB%2FGRlBNYWl4%2FQ6tjIaQYR6DJG00R8XhKSEPV5Ysemu4aAjZyrna4gKKgp0ha%2FejRtbkV14KTMApmt2CT3pjJtxgMhtkddzJ4FfL0GLakvQX4BTp%2BbSgGFGUPj1&X-Amz-Signature=5c08a2fb97a4d88bdcac4dd4ec5c1b9b14ea458e59fd70608a50e9dd41631b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466556R4H6R%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEHVOd8ziL11s3155AvbIu%2FXeUOietu9JpCzgAm7nXtAiAR4MUBSAiWz46meMC6Zp1lIgIOENXPtS8%2Ftvzq%2FOHe5yr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM%2FAIVMzRf31pnqBs8KtwD2IKexJ2sB9Wsy7%2BiYMnLf3ph4pN0wR8OrvuGtFIHOhp25rPVE%2BgPQ9DPeO83aNIzWxnStWfK4W8a165uxi0bkMoTRHktjKemMJRTKus1rtCo3e2mSKeMjjcg78TmDvwvGC75FsDvzNEj6Ez4a401YMm0gaufnatbPLxV%2FH%2B3q5CNlLRSk9A3pn3oITSYmoF8n6qN6mVnZ9%2Bge%2B8ik8pTVAdazahzg0c9oWCKH45ieqnvRo9sGKv4npfgoqQl7Lp6iw2GGsbsPK8SGjiu9re5XwuKAelErlKiLibWp9IIZkvOvgRYtJcEYgzCC4wqPvovS0uOelWIdBlsCmj59vhhuyvDRVeOaS7oKYu%2BSwpubVG471yuS9RMYqsiIf6TsKGsZ3sw2bTfazT9FCWJwc%2BiVi52GWFJf%2FNHhxDVhXLE01Kos1byz7gwCbG7IMOeD%2BaxLqebBqC8q4QXIf%2FE%2FrstC9ZuRzrc9NiV2glwiIo7b2Z2at%2FpDuJoxr3L9oxT9LkY1YpNVkDlD4VgX71m861jJsl1Ro70d5fGb4%2BLUvX1OVQPllBsUZd6eXcBn7yozXL5CmbYXzcUOLWAsp4xFRcpL5A270qPEIhzbqx5BYXTr5Rq%2BWLb5jdk%2F%2BUg97cwyY6kxQY6pgEImLtyixz%2Fl7KpSZYvVxnja3ISEdJqdJ5VPDuAbgCmuowsIGuOKQ%2BksDJj99SmOcj1PH2bkJVEMgdp0%2BvZLYcrja8q6Pynby8tMDB%2FGRlBNYWl4%2FQ6tjIaQYR6DJG00R8XhKSEPV5Ysemu4aAjZyrna4gKKgp0ha%2FejRtbkV14KTMApmt2CT3pjJtxgMhtkddzJ4FfL0GLakvQX4BTp%2BbSgGFGUPj1&X-Amz-Signature=b2abc7d766499d4cc8e585512e9b945088ba06d8d09d263b1c4dca87e0a8d69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466556R4H6R%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEHVOd8ziL11s3155AvbIu%2FXeUOietu9JpCzgAm7nXtAiAR4MUBSAiWz46meMC6Zp1lIgIOENXPtS8%2Ftvzq%2FOHe5yr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM%2FAIVMzRf31pnqBs8KtwD2IKexJ2sB9Wsy7%2BiYMnLf3ph4pN0wR8OrvuGtFIHOhp25rPVE%2BgPQ9DPeO83aNIzWxnStWfK4W8a165uxi0bkMoTRHktjKemMJRTKus1rtCo3e2mSKeMjjcg78TmDvwvGC75FsDvzNEj6Ez4a401YMm0gaufnatbPLxV%2FH%2B3q5CNlLRSk9A3pn3oITSYmoF8n6qN6mVnZ9%2Bge%2B8ik8pTVAdazahzg0c9oWCKH45ieqnvRo9sGKv4npfgoqQl7Lp6iw2GGsbsPK8SGjiu9re5XwuKAelErlKiLibWp9IIZkvOvgRYtJcEYgzCC4wqPvovS0uOelWIdBlsCmj59vhhuyvDRVeOaS7oKYu%2BSwpubVG471yuS9RMYqsiIf6TsKGsZ3sw2bTfazT9FCWJwc%2BiVi52GWFJf%2FNHhxDVhXLE01Kos1byz7gwCbG7IMOeD%2BaxLqebBqC8q4QXIf%2FE%2FrstC9ZuRzrc9NiV2glwiIo7b2Z2at%2FpDuJoxr3L9oxT9LkY1YpNVkDlD4VgX71m861jJsl1Ro70d5fGb4%2BLUvX1OVQPllBsUZd6eXcBn7yozXL5CmbYXzcUOLWAsp4xFRcpL5A270qPEIhzbqx5BYXTr5Rq%2BWLb5jdk%2F%2BUg97cwyY6kxQY6pgEImLtyixz%2Fl7KpSZYvVxnja3ISEdJqdJ5VPDuAbgCmuowsIGuOKQ%2BksDJj99SmOcj1PH2bkJVEMgdp0%2BvZLYcrja8q6Pynby8tMDB%2FGRlBNYWl4%2FQ6tjIaQYR6DJG00R8XhKSEPV5Ysemu4aAjZyrna4gKKgp0ha%2FejRtbkV14KTMApmt2CT3pjJtxgMhtkddzJ4FfL0GLakvQX4BTp%2BbSgGFGUPj1&X-Amz-Signature=9fcac1eb69bd99b90edc00a47e57bb6a53d8d5c994f37facd7cd6197c438db31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466556R4H6R%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEHVOd8ziL11s3155AvbIu%2FXeUOietu9JpCzgAm7nXtAiAR4MUBSAiWz46meMC6Zp1lIgIOENXPtS8%2Ftvzq%2FOHe5yr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM%2FAIVMzRf31pnqBs8KtwD2IKexJ2sB9Wsy7%2BiYMnLf3ph4pN0wR8OrvuGtFIHOhp25rPVE%2BgPQ9DPeO83aNIzWxnStWfK4W8a165uxi0bkMoTRHktjKemMJRTKus1rtCo3e2mSKeMjjcg78TmDvwvGC75FsDvzNEj6Ez4a401YMm0gaufnatbPLxV%2FH%2B3q5CNlLRSk9A3pn3oITSYmoF8n6qN6mVnZ9%2Bge%2B8ik8pTVAdazahzg0c9oWCKH45ieqnvRo9sGKv4npfgoqQl7Lp6iw2GGsbsPK8SGjiu9re5XwuKAelErlKiLibWp9IIZkvOvgRYtJcEYgzCC4wqPvovS0uOelWIdBlsCmj59vhhuyvDRVeOaS7oKYu%2BSwpubVG471yuS9RMYqsiIf6TsKGsZ3sw2bTfazT9FCWJwc%2BiVi52GWFJf%2FNHhxDVhXLE01Kos1byz7gwCbG7IMOeD%2BaxLqebBqC8q4QXIf%2FE%2FrstC9ZuRzrc9NiV2glwiIo7b2Z2at%2FpDuJoxr3L9oxT9LkY1YpNVkDlD4VgX71m861jJsl1Ro70d5fGb4%2BLUvX1OVQPllBsUZd6eXcBn7yozXL5CmbYXzcUOLWAsp4xFRcpL5A270qPEIhzbqx5BYXTr5Rq%2BWLb5jdk%2F%2BUg97cwyY6kxQY6pgEImLtyixz%2Fl7KpSZYvVxnja3ISEdJqdJ5VPDuAbgCmuowsIGuOKQ%2BksDJj99SmOcj1PH2bkJVEMgdp0%2BvZLYcrja8q6Pynby8tMDB%2FGRlBNYWl4%2FQ6tjIaQYR6DJG00R8XhKSEPV5Ysemu4aAjZyrna4gKKgp0ha%2FejRtbkV14KTMApmt2CT3pjJtxgMhtkddzJ4FfL0GLakvQX4BTp%2BbSgGFGUPj1&X-Amz-Signature=190522bfc4d67bf3f70328703e123afab8e3a2cdeab452a3c8e0287be8437d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBBMYJ7K%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2s6PALJ%2BhC3jIeTJulavLTxydVq1p%2B8S5Elm6oB%2BMQgIhAJ755xzZZdndH%2Blis%2FYR11xYVpNae9azB3%2B1xuzAZGZRKv8DCCEQABoMNjM3NDIzMTgzODA1Igx7UHZkquwu6GlaVM0q3AO%2BLCuDb8Id52zejgfFLgZmlzsR3PgEmM2Rrf%2FYxcje1ndrkWiTnzmN8Do1RC2AbDAUi0lJiSvAE%2F9gVJuV6QDMJwJTBq9LC0sBPENhICUCzRIDFK8Ub3C4MI71nyT6MEgxL%2FAuuzBvLzzfGsEPRHhThiO8iGCtM02MVu6VW356NGaMszadIjMc0W84uRRPb1M4M9o0lHIMPiT7YP35g5ib23ZmXKJEMDZARzm5LkumjpbCozD%2B3IcUQh4jVoF4kRt%2FwN7gOSX46E0ukhkZK3f0to7lphQKFECrGuMI01rSaT7WZquwpshoKSy4WBju7KSmmkxS7h9Ax%2BIfV6ai7d9oOtqMx8aCUnW%2F%2BMDpQyI5I%2FLHoqGPxqdM5%2Fqab9JrZcgnquK2m980BVDa8pfgEB1iTQn2dVvMlkBeIu2q9L9O1pa5nvzBRt6JAVkm10NAnG3OKjyQvezb77xPqe01Ueeg4WHwIUXJ5JIuqXX4VWkFVEEQuELMx4G8xY32jPnuZnSgfKyfM%2Bm5dqd%2BfkbE%2B2XzlBkjjuCinmoacE6ScRqnLBWGJZiFroF%2FCjDKAOV7mWsWeQfcJDEeQUPBNg4yBWJ7LFOcX6aMixt5yyv3DvaWmaB%2BtKwdtr9eqKIMBzCGjqTFBjqkAZYMtvfNTpzzMzAWsYFPvY1x%2FcVpMPRQx0ctXx3VrRP35ibxk45xO08PLbjHUGlPOgNkXCkF7IXO4IPRxR9IZQLnWXjjvRdInCdkMu%2Bzc7wIHWlXc%2F8iNaVH4OgKLclyLMUKpkTg%2FcfVfMY59ayVXmh0EKEAcxL1%2FejHo3MJOT0e6YhT4IKBkshmSRM6roCJPXK35pq5jgLgpEcUzBuY1UpHLGBu&X-Amz-Signature=a99667edcd748fbe68b512150c2e125fb54146983a57d7b741a75cd7812f5597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466556R4H6R%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEHVOd8ziL11s3155AvbIu%2FXeUOietu9JpCzgAm7nXtAiAR4MUBSAiWz46meMC6Zp1lIgIOENXPtS8%2Ftvzq%2FOHe5yr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM%2FAIVMzRf31pnqBs8KtwD2IKexJ2sB9Wsy7%2BiYMnLf3ph4pN0wR8OrvuGtFIHOhp25rPVE%2BgPQ9DPeO83aNIzWxnStWfK4W8a165uxi0bkMoTRHktjKemMJRTKus1rtCo3e2mSKeMjjcg78TmDvwvGC75FsDvzNEj6Ez4a401YMm0gaufnatbPLxV%2FH%2B3q5CNlLRSk9A3pn3oITSYmoF8n6qN6mVnZ9%2Bge%2B8ik8pTVAdazahzg0c9oWCKH45ieqnvRo9sGKv4npfgoqQl7Lp6iw2GGsbsPK8SGjiu9re5XwuKAelErlKiLibWp9IIZkvOvgRYtJcEYgzCC4wqPvovS0uOelWIdBlsCmj59vhhuyvDRVeOaS7oKYu%2BSwpubVG471yuS9RMYqsiIf6TsKGsZ3sw2bTfazT9FCWJwc%2BiVi52GWFJf%2FNHhxDVhXLE01Kos1byz7gwCbG7IMOeD%2BaxLqebBqC8q4QXIf%2FE%2FrstC9ZuRzrc9NiV2glwiIo7b2Z2at%2FpDuJoxr3L9oxT9LkY1YpNVkDlD4VgX71m861jJsl1Ro70d5fGb4%2BLUvX1OVQPllBsUZd6eXcBn7yozXL5CmbYXzcUOLWAsp4xFRcpL5A270qPEIhzbqx5BYXTr5Rq%2BWLb5jdk%2F%2BUg97cwyY6kxQY6pgEImLtyixz%2Fl7KpSZYvVxnja3ISEdJqdJ5VPDuAbgCmuowsIGuOKQ%2BksDJj99SmOcj1PH2bkJVEMgdp0%2BvZLYcrja8q6Pynby8tMDB%2FGRlBNYWl4%2FQ6tjIaQYR6DJG00R8XhKSEPV5Ysemu4aAjZyrna4gKKgp0ha%2FejRtbkV14KTMApmt2CT3pjJtxgMhtkddzJ4FfL0GLakvQX4BTp%2BbSgGFGUPj1&X-Amz-Signature=1e727479c215d1e4149beddf841cc8d57233d239312b817e7093454967fb85ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466556R4H6R%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEHVOd8ziL11s3155AvbIu%2FXeUOietu9JpCzgAm7nXtAiAR4MUBSAiWz46meMC6Zp1lIgIOENXPtS8%2Ftvzq%2FOHe5yr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM%2FAIVMzRf31pnqBs8KtwD2IKexJ2sB9Wsy7%2BiYMnLf3ph4pN0wR8OrvuGtFIHOhp25rPVE%2BgPQ9DPeO83aNIzWxnStWfK4W8a165uxi0bkMoTRHktjKemMJRTKus1rtCo3e2mSKeMjjcg78TmDvwvGC75FsDvzNEj6Ez4a401YMm0gaufnatbPLxV%2FH%2B3q5CNlLRSk9A3pn3oITSYmoF8n6qN6mVnZ9%2Bge%2B8ik8pTVAdazahzg0c9oWCKH45ieqnvRo9sGKv4npfgoqQl7Lp6iw2GGsbsPK8SGjiu9re5XwuKAelErlKiLibWp9IIZkvOvgRYtJcEYgzCC4wqPvovS0uOelWIdBlsCmj59vhhuyvDRVeOaS7oKYu%2BSwpubVG471yuS9RMYqsiIf6TsKGsZ3sw2bTfazT9FCWJwc%2BiVi52GWFJf%2FNHhxDVhXLE01Kos1byz7gwCbG7IMOeD%2BaxLqebBqC8q4QXIf%2FE%2FrstC9ZuRzrc9NiV2glwiIo7b2Z2at%2FpDuJoxr3L9oxT9LkY1YpNVkDlD4VgX71m861jJsl1Ro70d5fGb4%2BLUvX1OVQPllBsUZd6eXcBn7yozXL5CmbYXzcUOLWAsp4xFRcpL5A270qPEIhzbqx5BYXTr5Rq%2BWLb5jdk%2F%2BUg97cwyY6kxQY6pgEImLtyixz%2Fl7KpSZYvVxnja3ISEdJqdJ5VPDuAbgCmuowsIGuOKQ%2BksDJj99SmOcj1PH2bkJVEMgdp0%2BvZLYcrja8q6Pynby8tMDB%2FGRlBNYWl4%2FQ6tjIaQYR6DJG00R8XhKSEPV5Ysemu4aAjZyrna4gKKgp0ha%2FejRtbkV14KTMApmt2CT3pjJtxgMhtkddzJ4FfL0GLakvQX4BTp%2BbSgGFGUPj1&X-Amz-Signature=56d9614cf7378b259b3d808ab8739850e85fdabbd5649dcc9bee934d62011285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466556R4H6R%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEHVOd8ziL11s3155AvbIu%2FXeUOietu9JpCzgAm7nXtAiAR4MUBSAiWz46meMC6Zp1lIgIOENXPtS8%2Ftvzq%2FOHe5yr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM%2FAIVMzRf31pnqBs8KtwD2IKexJ2sB9Wsy7%2BiYMnLf3ph4pN0wR8OrvuGtFIHOhp25rPVE%2BgPQ9DPeO83aNIzWxnStWfK4W8a165uxi0bkMoTRHktjKemMJRTKus1rtCo3e2mSKeMjjcg78TmDvwvGC75FsDvzNEj6Ez4a401YMm0gaufnatbPLxV%2FH%2B3q5CNlLRSk9A3pn3oITSYmoF8n6qN6mVnZ9%2Bge%2B8ik8pTVAdazahzg0c9oWCKH45ieqnvRo9sGKv4npfgoqQl7Lp6iw2GGsbsPK8SGjiu9re5XwuKAelErlKiLibWp9IIZkvOvgRYtJcEYgzCC4wqPvovS0uOelWIdBlsCmj59vhhuyvDRVeOaS7oKYu%2BSwpubVG471yuS9RMYqsiIf6TsKGsZ3sw2bTfazT9FCWJwc%2BiVi52GWFJf%2FNHhxDVhXLE01Kos1byz7gwCbG7IMOeD%2BaxLqebBqC8q4QXIf%2FE%2FrstC9ZuRzrc9NiV2glwiIo7b2Z2at%2FpDuJoxr3L9oxT9LkY1YpNVkDlD4VgX71m861jJsl1Ro70d5fGb4%2BLUvX1OVQPllBsUZd6eXcBn7yozXL5CmbYXzcUOLWAsp4xFRcpL5A270qPEIhzbqx5BYXTr5Rq%2BWLb5jdk%2F%2BUg97cwyY6kxQY6pgEImLtyixz%2Fl7KpSZYvVxnja3ISEdJqdJ5VPDuAbgCmuowsIGuOKQ%2BksDJj99SmOcj1PH2bkJVEMgdp0%2BvZLYcrja8q6Pynby8tMDB%2FGRlBNYWl4%2FQ6tjIaQYR6DJG00R8XhKSEPV5Ysemu4aAjZyrna4gKKgp0ha%2FejRtbkV14KTMApmt2CT3pjJtxgMhtkddzJ4FfL0GLakvQX4BTp%2BbSgGFGUPj1&X-Amz-Signature=9fcac1eb69bd99b90edc00a47e57bb6a53d8d5c994f37facd7cd6197c438db31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466556R4H6R%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEHVOd8ziL11s3155AvbIu%2FXeUOietu9JpCzgAm7nXtAiAR4MUBSAiWz46meMC6Zp1lIgIOENXPtS8%2Ftvzq%2FOHe5yr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM%2FAIVMzRf31pnqBs8KtwD2IKexJ2sB9Wsy7%2BiYMnLf3ph4pN0wR8OrvuGtFIHOhp25rPVE%2BgPQ9DPeO83aNIzWxnStWfK4W8a165uxi0bkMoTRHktjKemMJRTKus1rtCo3e2mSKeMjjcg78TmDvwvGC75FsDvzNEj6Ez4a401YMm0gaufnatbPLxV%2FH%2B3q5CNlLRSk9A3pn3oITSYmoF8n6qN6mVnZ9%2Bge%2B8ik8pTVAdazahzg0c9oWCKH45ieqnvRo9sGKv4npfgoqQl7Lp6iw2GGsbsPK8SGjiu9re5XwuKAelErlKiLibWp9IIZkvOvgRYtJcEYgzCC4wqPvovS0uOelWIdBlsCmj59vhhuyvDRVeOaS7oKYu%2BSwpubVG471yuS9RMYqsiIf6TsKGsZ3sw2bTfazT9FCWJwc%2BiVi52GWFJf%2FNHhxDVhXLE01Kos1byz7gwCbG7IMOeD%2BaxLqebBqC8q4QXIf%2FE%2FrstC9ZuRzrc9NiV2glwiIo7b2Z2at%2FpDuJoxr3L9oxT9LkY1YpNVkDlD4VgX71m861jJsl1Ro70d5fGb4%2BLUvX1OVQPllBsUZd6eXcBn7yozXL5CmbYXzcUOLWAsp4xFRcpL5A270qPEIhzbqx5BYXTr5Rq%2BWLb5jdk%2F%2BUg97cwyY6kxQY6pgEImLtyixz%2Fl7KpSZYvVxnja3ISEdJqdJ5VPDuAbgCmuowsIGuOKQ%2BksDJj99SmOcj1PH2bkJVEMgdp0%2BvZLYcrja8q6Pynby8tMDB%2FGRlBNYWl4%2FQ6tjIaQYR6DJG00R8XhKSEPV5Ysemu4aAjZyrna4gKKgp0ha%2FejRtbkV14KTMApmt2CT3pjJtxgMhtkddzJ4FfL0GLakvQX4BTp%2BbSgGFGUPj1&X-Amz-Signature=ec15e0c76f071d2fc41942b2681676aa4ed97ca9ab169423690e0fb64158ed01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466556R4H6R%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEHVOd8ziL11s3155AvbIu%2FXeUOietu9JpCzgAm7nXtAiAR4MUBSAiWz46meMC6Zp1lIgIOENXPtS8%2Ftvzq%2FOHe5yr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM%2FAIVMzRf31pnqBs8KtwD2IKexJ2sB9Wsy7%2BiYMnLf3ph4pN0wR8OrvuGtFIHOhp25rPVE%2BgPQ9DPeO83aNIzWxnStWfK4W8a165uxi0bkMoTRHktjKemMJRTKus1rtCo3e2mSKeMjjcg78TmDvwvGC75FsDvzNEj6Ez4a401YMm0gaufnatbPLxV%2FH%2B3q5CNlLRSk9A3pn3oITSYmoF8n6qN6mVnZ9%2Bge%2B8ik8pTVAdazahzg0c9oWCKH45ieqnvRo9sGKv4npfgoqQl7Lp6iw2GGsbsPK8SGjiu9re5XwuKAelErlKiLibWp9IIZkvOvgRYtJcEYgzCC4wqPvovS0uOelWIdBlsCmj59vhhuyvDRVeOaS7oKYu%2BSwpubVG471yuS9RMYqsiIf6TsKGsZ3sw2bTfazT9FCWJwc%2BiVi52GWFJf%2FNHhxDVhXLE01Kos1byz7gwCbG7IMOeD%2BaxLqebBqC8q4QXIf%2FE%2FrstC9ZuRzrc9NiV2glwiIo7b2Z2at%2FpDuJoxr3L9oxT9LkY1YpNVkDlD4VgX71m861jJsl1Ro70d5fGb4%2BLUvX1OVQPllBsUZd6eXcBn7yozXL5CmbYXzcUOLWAsp4xFRcpL5A270qPEIhzbqx5BYXTr5Rq%2BWLb5jdk%2F%2BUg97cwyY6kxQY6pgEImLtyixz%2Fl7KpSZYvVxnja3ISEdJqdJ5VPDuAbgCmuowsIGuOKQ%2BksDJj99SmOcj1PH2bkJVEMgdp0%2BvZLYcrja8q6Pynby8tMDB%2FGRlBNYWl4%2FQ6tjIaQYR6DJG00R8XhKSEPV5Ysemu4aAjZyrna4gKKgp0ha%2FejRtbkV14KTMApmt2CT3pjJtxgMhtkddzJ4FfL0GLakvQX4BTp%2BbSgGFGUPj1&X-Amz-Signature=e6ed619b814134044d4f026023c047ae091004248a1f381963fa55b6354641ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466556R4H6R%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEHVOd8ziL11s3155AvbIu%2FXeUOietu9JpCzgAm7nXtAiAR4MUBSAiWz46meMC6Zp1lIgIOENXPtS8%2Ftvzq%2FOHe5yr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM%2FAIVMzRf31pnqBs8KtwD2IKexJ2sB9Wsy7%2BiYMnLf3ph4pN0wR8OrvuGtFIHOhp25rPVE%2BgPQ9DPeO83aNIzWxnStWfK4W8a165uxi0bkMoTRHktjKemMJRTKus1rtCo3e2mSKeMjjcg78TmDvwvGC75FsDvzNEj6Ez4a401YMm0gaufnatbPLxV%2FH%2B3q5CNlLRSk9A3pn3oITSYmoF8n6qN6mVnZ9%2Bge%2B8ik8pTVAdazahzg0c9oWCKH45ieqnvRo9sGKv4npfgoqQl7Lp6iw2GGsbsPK8SGjiu9re5XwuKAelErlKiLibWp9IIZkvOvgRYtJcEYgzCC4wqPvovS0uOelWIdBlsCmj59vhhuyvDRVeOaS7oKYu%2BSwpubVG471yuS9RMYqsiIf6TsKGsZ3sw2bTfazT9FCWJwc%2BiVi52GWFJf%2FNHhxDVhXLE01Kos1byz7gwCbG7IMOeD%2BaxLqebBqC8q4QXIf%2FE%2FrstC9ZuRzrc9NiV2glwiIo7b2Z2at%2FpDuJoxr3L9oxT9LkY1YpNVkDlD4VgX71m861jJsl1Ro70d5fGb4%2BLUvX1OVQPllBsUZd6eXcBn7yozXL5CmbYXzcUOLWAsp4xFRcpL5A270qPEIhzbqx5BYXTr5Rq%2BWLb5jdk%2F%2BUg97cwyY6kxQY6pgEImLtyixz%2Fl7KpSZYvVxnja3ISEdJqdJ5VPDuAbgCmuowsIGuOKQ%2BksDJj99SmOcj1PH2bkJVEMgdp0%2BvZLYcrja8q6Pynby8tMDB%2FGRlBNYWl4%2FQ6tjIaQYR6DJG00R8XhKSEPV5Ysemu4aAjZyrna4gKKgp0ha%2FejRtbkV14KTMApmt2CT3pjJtxgMhtkddzJ4FfL0GLakvQX4BTp%2BbSgGFGUPj1&X-Amz-Signature=0fcc3e16074cc396ee703e797c6a2d3e57d600f167ebcb331fcba09e0007daad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


