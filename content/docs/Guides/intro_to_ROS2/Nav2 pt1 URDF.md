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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2SVJSY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDppeYF3iPfzMFEPlv9Gp%2FrxBVkz%2FIvu80kB0L3rYalFAiBwAYI4XmPrTFxQhmsgrGpGawKZ27sL7cro5Mc5lPZEPyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMGDwYiqqR%2FGhePtteKtwDaSNo6qJl93f1mAvm%2BUmpr7YEBbdvQoayOgBF8dPtqHwGgsKait8MBeotGxjPTYdbGhsyJH0Zys42FsY3VkA9oHyN3CcNM%2FLl8gGheEPSIKrPI7LYTL5PyxBUWmWiIsJUcpa6tYUvATFe%2FAnBUVaMmVNyWNy0q%2F81plquEXmLiYmK9KWl2V1IDPRDYp%2F8xcFVAFgpZkF1ytsyDHUJgUIkhKoarr%2BZw5P8F5ReftgyM1a6Qxgva6meOPomGPMyWBTCPLlmKu5KNQBdH67kGj1YLlTYXi1wb1iOEptK6yZdksszbPHexkRB0jxTqkYCxr3LkIxsxnD5zLmwJUbDrAMyf8v6kDa3cHzTAvR02lY3FRgfv7QjgwAJR4rDGp8GAeMaXH8LuQx%2FLEILkYXlzSbVoILJejqlMSxl5nORiENOGgIraTFfo%2Bjj6cuHHLv3KET884i3l99RJ67GdpI5LN9wRHdL3a2qodNeQXXCWixE7vbNtsYB59LM3aaLthIkyCt1aO%2Bzt0wUJLyIiphetEqacDHKibZWIhRgZBa48aFTv%2FuayY0qVm0U7tcFUgcyFNc48AOJf3bmJ25PQp9ZE7PJmxKloFDus3PR1Ts1gUWQLi6i4XX0IAHEbAyCVGswy%2B%2FZ0wY6pgHvqyv3hMRi7GQKvqBWQa5QMLwyC5rz288q%2Fuk9lJCmX2qVq8pRCzK8LqZvNot%2BbshfeAAIizDWJaAZ5y%2FpFh5njU71qJb5jhI55%2BwwO7BgGqboO4HEBJjYW2nJVaLlxvOFr9LloZdugiFCN6OxOe5Dth7HTL2TJXJ4ItHjCfPJceX3AjtXsc50KXLsirZ7mhkDQ6dh65Y6euS3b8fsN1mltpRwhj4P&X-Amz-Signature=436a27f55a1d81bb9ddfdd30e9810e44d09d5637d1759ca954716fcfc0c819f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2SVJSY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDppeYF3iPfzMFEPlv9Gp%2FrxBVkz%2FIvu80kB0L3rYalFAiBwAYI4XmPrTFxQhmsgrGpGawKZ27sL7cro5Mc5lPZEPyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMGDwYiqqR%2FGhePtteKtwDaSNo6qJl93f1mAvm%2BUmpr7YEBbdvQoayOgBF8dPtqHwGgsKait8MBeotGxjPTYdbGhsyJH0Zys42FsY3VkA9oHyN3CcNM%2FLl8gGheEPSIKrPI7LYTL5PyxBUWmWiIsJUcpa6tYUvATFe%2FAnBUVaMmVNyWNy0q%2F81plquEXmLiYmK9KWl2V1IDPRDYp%2F8xcFVAFgpZkF1ytsyDHUJgUIkhKoarr%2BZw5P8F5ReftgyM1a6Qxgva6meOPomGPMyWBTCPLlmKu5KNQBdH67kGj1YLlTYXi1wb1iOEptK6yZdksszbPHexkRB0jxTqkYCxr3LkIxsxnD5zLmwJUbDrAMyf8v6kDa3cHzTAvR02lY3FRgfv7QjgwAJR4rDGp8GAeMaXH8LuQx%2FLEILkYXlzSbVoILJejqlMSxl5nORiENOGgIraTFfo%2Bjj6cuHHLv3KET884i3l99RJ67GdpI5LN9wRHdL3a2qodNeQXXCWixE7vbNtsYB59LM3aaLthIkyCt1aO%2Bzt0wUJLyIiphetEqacDHKibZWIhRgZBa48aFTv%2FuayY0qVm0U7tcFUgcyFNc48AOJf3bmJ25PQp9ZE7PJmxKloFDus3PR1Ts1gUWQLi6i4XX0IAHEbAyCVGswy%2B%2FZ0wY6pgHvqyv3hMRi7GQKvqBWQa5QMLwyC5rz288q%2Fuk9lJCmX2qVq8pRCzK8LqZvNot%2BbshfeAAIizDWJaAZ5y%2FpFh5njU71qJb5jhI55%2BwwO7BgGqboO4HEBJjYW2nJVaLlxvOFr9LloZdugiFCN6OxOe5Dth7HTL2TJXJ4ItHjCfPJceX3AjtXsc50KXLsirZ7mhkDQ6dh65Y6euS3b8fsN1mltpRwhj4P&X-Amz-Signature=3b3ba672c2ef11227ae9c5f06d91f593e318bd3d13d6b360b4f1ef3d352bbe15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2SVJSY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDppeYF3iPfzMFEPlv9Gp%2FrxBVkz%2FIvu80kB0L3rYalFAiBwAYI4XmPrTFxQhmsgrGpGawKZ27sL7cro5Mc5lPZEPyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMGDwYiqqR%2FGhePtteKtwDaSNo6qJl93f1mAvm%2BUmpr7YEBbdvQoayOgBF8dPtqHwGgsKait8MBeotGxjPTYdbGhsyJH0Zys42FsY3VkA9oHyN3CcNM%2FLl8gGheEPSIKrPI7LYTL5PyxBUWmWiIsJUcpa6tYUvATFe%2FAnBUVaMmVNyWNy0q%2F81plquEXmLiYmK9KWl2V1IDPRDYp%2F8xcFVAFgpZkF1ytsyDHUJgUIkhKoarr%2BZw5P8F5ReftgyM1a6Qxgva6meOPomGPMyWBTCPLlmKu5KNQBdH67kGj1YLlTYXi1wb1iOEptK6yZdksszbPHexkRB0jxTqkYCxr3LkIxsxnD5zLmwJUbDrAMyf8v6kDa3cHzTAvR02lY3FRgfv7QjgwAJR4rDGp8GAeMaXH8LuQx%2FLEILkYXlzSbVoILJejqlMSxl5nORiENOGgIraTFfo%2Bjj6cuHHLv3KET884i3l99RJ67GdpI5LN9wRHdL3a2qodNeQXXCWixE7vbNtsYB59LM3aaLthIkyCt1aO%2Bzt0wUJLyIiphetEqacDHKibZWIhRgZBa48aFTv%2FuayY0qVm0U7tcFUgcyFNc48AOJf3bmJ25PQp9ZE7PJmxKloFDus3PR1Ts1gUWQLi6i4XX0IAHEbAyCVGswy%2B%2FZ0wY6pgHvqyv3hMRi7GQKvqBWQa5QMLwyC5rz288q%2Fuk9lJCmX2qVq8pRCzK8LqZvNot%2BbshfeAAIizDWJaAZ5y%2FpFh5njU71qJb5jhI55%2BwwO7BgGqboO4HEBJjYW2nJVaLlxvOFr9LloZdugiFCN6OxOe5Dth7HTL2TJXJ4ItHjCfPJceX3AjtXsc50KXLsirZ7mhkDQ6dh65Y6euS3b8fsN1mltpRwhj4P&X-Amz-Signature=1cb4b2bfdd1373c77385b3fe252a05ace55c7b5fbdd71015030257d5c4c2a343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2SVJSY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDppeYF3iPfzMFEPlv9Gp%2FrxBVkz%2FIvu80kB0L3rYalFAiBwAYI4XmPrTFxQhmsgrGpGawKZ27sL7cro5Mc5lPZEPyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMGDwYiqqR%2FGhePtteKtwDaSNo6qJl93f1mAvm%2BUmpr7YEBbdvQoayOgBF8dPtqHwGgsKait8MBeotGxjPTYdbGhsyJH0Zys42FsY3VkA9oHyN3CcNM%2FLl8gGheEPSIKrPI7LYTL5PyxBUWmWiIsJUcpa6tYUvATFe%2FAnBUVaMmVNyWNy0q%2F81plquEXmLiYmK9KWl2V1IDPRDYp%2F8xcFVAFgpZkF1ytsyDHUJgUIkhKoarr%2BZw5P8F5ReftgyM1a6Qxgva6meOPomGPMyWBTCPLlmKu5KNQBdH67kGj1YLlTYXi1wb1iOEptK6yZdksszbPHexkRB0jxTqkYCxr3LkIxsxnD5zLmwJUbDrAMyf8v6kDa3cHzTAvR02lY3FRgfv7QjgwAJR4rDGp8GAeMaXH8LuQx%2FLEILkYXlzSbVoILJejqlMSxl5nORiENOGgIraTFfo%2Bjj6cuHHLv3KET884i3l99RJ67GdpI5LN9wRHdL3a2qodNeQXXCWixE7vbNtsYB59LM3aaLthIkyCt1aO%2Bzt0wUJLyIiphetEqacDHKibZWIhRgZBa48aFTv%2FuayY0qVm0U7tcFUgcyFNc48AOJf3bmJ25PQp9ZE7PJmxKloFDus3PR1Ts1gUWQLi6i4XX0IAHEbAyCVGswy%2B%2FZ0wY6pgHvqyv3hMRi7GQKvqBWQa5QMLwyC5rz288q%2Fuk9lJCmX2qVq8pRCzK8LqZvNot%2BbshfeAAIizDWJaAZ5y%2FpFh5njU71qJb5jhI55%2BwwO7BgGqboO4HEBJjYW2nJVaLlxvOFr9LloZdugiFCN6OxOe5Dth7HTL2TJXJ4ItHjCfPJceX3AjtXsc50KXLsirZ7mhkDQ6dh65Y6euS3b8fsN1mltpRwhj4P&X-Amz-Signature=0924f93e3fd7b18d445e5ca25e14f307f2f2b108e489661367b9340ba9269a05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2SVJSY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDppeYF3iPfzMFEPlv9Gp%2FrxBVkz%2FIvu80kB0L3rYalFAiBwAYI4XmPrTFxQhmsgrGpGawKZ27sL7cro5Mc5lPZEPyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMGDwYiqqR%2FGhePtteKtwDaSNo6qJl93f1mAvm%2BUmpr7YEBbdvQoayOgBF8dPtqHwGgsKait8MBeotGxjPTYdbGhsyJH0Zys42FsY3VkA9oHyN3CcNM%2FLl8gGheEPSIKrPI7LYTL5PyxBUWmWiIsJUcpa6tYUvATFe%2FAnBUVaMmVNyWNy0q%2F81plquEXmLiYmK9KWl2V1IDPRDYp%2F8xcFVAFgpZkF1ytsyDHUJgUIkhKoarr%2BZw5P8F5ReftgyM1a6Qxgva6meOPomGPMyWBTCPLlmKu5KNQBdH67kGj1YLlTYXi1wb1iOEptK6yZdksszbPHexkRB0jxTqkYCxr3LkIxsxnD5zLmwJUbDrAMyf8v6kDa3cHzTAvR02lY3FRgfv7QjgwAJR4rDGp8GAeMaXH8LuQx%2FLEILkYXlzSbVoILJejqlMSxl5nORiENOGgIraTFfo%2Bjj6cuHHLv3KET884i3l99RJ67GdpI5LN9wRHdL3a2qodNeQXXCWixE7vbNtsYB59LM3aaLthIkyCt1aO%2Bzt0wUJLyIiphetEqacDHKibZWIhRgZBa48aFTv%2FuayY0qVm0U7tcFUgcyFNc48AOJf3bmJ25PQp9ZE7PJmxKloFDus3PR1Ts1gUWQLi6i4XX0IAHEbAyCVGswy%2B%2FZ0wY6pgHvqyv3hMRi7GQKvqBWQa5QMLwyC5rz288q%2Fuk9lJCmX2qVq8pRCzK8LqZvNot%2BbshfeAAIizDWJaAZ5y%2FpFh5njU71qJb5jhI55%2BwwO7BgGqboO4HEBJjYW2nJVaLlxvOFr9LloZdugiFCN6OxOe5Dth7HTL2TJXJ4ItHjCfPJceX3AjtXsc50KXLsirZ7mhkDQ6dh65Y6euS3b8fsN1mltpRwhj4P&X-Amz-Signature=b48b26b97b72ff9dae7975bc2b6d99946a601457e650b77df50a130f2bbbf0ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2SVJSY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDppeYF3iPfzMFEPlv9Gp%2FrxBVkz%2FIvu80kB0L3rYalFAiBwAYI4XmPrTFxQhmsgrGpGawKZ27sL7cro5Mc5lPZEPyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMGDwYiqqR%2FGhePtteKtwDaSNo6qJl93f1mAvm%2BUmpr7YEBbdvQoayOgBF8dPtqHwGgsKait8MBeotGxjPTYdbGhsyJH0Zys42FsY3VkA9oHyN3CcNM%2FLl8gGheEPSIKrPI7LYTL5PyxBUWmWiIsJUcpa6tYUvATFe%2FAnBUVaMmVNyWNy0q%2F81plquEXmLiYmK9KWl2V1IDPRDYp%2F8xcFVAFgpZkF1ytsyDHUJgUIkhKoarr%2BZw5P8F5ReftgyM1a6Qxgva6meOPomGPMyWBTCPLlmKu5KNQBdH67kGj1YLlTYXi1wb1iOEptK6yZdksszbPHexkRB0jxTqkYCxr3LkIxsxnD5zLmwJUbDrAMyf8v6kDa3cHzTAvR02lY3FRgfv7QjgwAJR4rDGp8GAeMaXH8LuQx%2FLEILkYXlzSbVoILJejqlMSxl5nORiENOGgIraTFfo%2Bjj6cuHHLv3KET884i3l99RJ67GdpI5LN9wRHdL3a2qodNeQXXCWixE7vbNtsYB59LM3aaLthIkyCt1aO%2Bzt0wUJLyIiphetEqacDHKibZWIhRgZBa48aFTv%2FuayY0qVm0U7tcFUgcyFNc48AOJf3bmJ25PQp9ZE7PJmxKloFDus3PR1Ts1gUWQLi6i4XX0IAHEbAyCVGswy%2B%2FZ0wY6pgHvqyv3hMRi7GQKvqBWQa5QMLwyC5rz288q%2Fuk9lJCmX2qVq8pRCzK8LqZvNot%2BbshfeAAIizDWJaAZ5y%2FpFh5njU71qJb5jhI55%2BwwO7BgGqboO4HEBJjYW2nJVaLlxvOFr9LloZdugiFCN6OxOe5Dth7HTL2TJXJ4ItHjCfPJceX3AjtXsc50KXLsirZ7mhkDQ6dh65Y6euS3b8fsN1mltpRwhj4P&X-Amz-Signature=549e3262188fac1bc7ff6719179e54569dfaf0b0a20f0bbda9ce6104de0b6c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2SVJSY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDppeYF3iPfzMFEPlv9Gp%2FrxBVkz%2FIvu80kB0L3rYalFAiBwAYI4XmPrTFxQhmsgrGpGawKZ27sL7cro5Mc5lPZEPyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMGDwYiqqR%2FGhePtteKtwDaSNo6qJl93f1mAvm%2BUmpr7YEBbdvQoayOgBF8dPtqHwGgsKait8MBeotGxjPTYdbGhsyJH0Zys42FsY3VkA9oHyN3CcNM%2FLl8gGheEPSIKrPI7LYTL5PyxBUWmWiIsJUcpa6tYUvATFe%2FAnBUVaMmVNyWNy0q%2F81plquEXmLiYmK9KWl2V1IDPRDYp%2F8xcFVAFgpZkF1ytsyDHUJgUIkhKoarr%2BZw5P8F5ReftgyM1a6Qxgva6meOPomGPMyWBTCPLlmKu5KNQBdH67kGj1YLlTYXi1wb1iOEptK6yZdksszbPHexkRB0jxTqkYCxr3LkIxsxnD5zLmwJUbDrAMyf8v6kDa3cHzTAvR02lY3FRgfv7QjgwAJR4rDGp8GAeMaXH8LuQx%2FLEILkYXlzSbVoILJejqlMSxl5nORiENOGgIraTFfo%2Bjj6cuHHLv3KET884i3l99RJ67GdpI5LN9wRHdL3a2qodNeQXXCWixE7vbNtsYB59LM3aaLthIkyCt1aO%2Bzt0wUJLyIiphetEqacDHKibZWIhRgZBa48aFTv%2FuayY0qVm0U7tcFUgcyFNc48AOJf3bmJ25PQp9ZE7PJmxKloFDus3PR1Ts1gUWQLi6i4XX0IAHEbAyCVGswy%2B%2FZ0wY6pgHvqyv3hMRi7GQKvqBWQa5QMLwyC5rz288q%2Fuk9lJCmX2qVq8pRCzK8LqZvNot%2BbshfeAAIizDWJaAZ5y%2FpFh5njU71qJb5jhI55%2BwwO7BgGqboO4HEBJjYW2nJVaLlxvOFr9LloZdugiFCN6OxOe5Dth7HTL2TJXJ4ItHjCfPJceX3AjtXsc50KXLsirZ7mhkDQ6dh65Y6euS3b8fsN1mltpRwhj4P&X-Amz-Signature=584fa5a20d25b684d2255dcbf19e7e8ee5177c2148f2ac7a63e722d4666cb93a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2SVJSY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDppeYF3iPfzMFEPlv9Gp%2FrxBVkz%2FIvu80kB0L3rYalFAiBwAYI4XmPrTFxQhmsgrGpGawKZ27sL7cro5Mc5lPZEPyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMGDwYiqqR%2FGhePtteKtwDaSNo6qJl93f1mAvm%2BUmpr7YEBbdvQoayOgBF8dPtqHwGgsKait8MBeotGxjPTYdbGhsyJH0Zys42FsY3VkA9oHyN3CcNM%2FLl8gGheEPSIKrPI7LYTL5PyxBUWmWiIsJUcpa6tYUvATFe%2FAnBUVaMmVNyWNy0q%2F81plquEXmLiYmK9KWl2V1IDPRDYp%2F8xcFVAFgpZkF1ytsyDHUJgUIkhKoarr%2BZw5P8F5ReftgyM1a6Qxgva6meOPomGPMyWBTCPLlmKu5KNQBdH67kGj1YLlTYXi1wb1iOEptK6yZdksszbPHexkRB0jxTqkYCxr3LkIxsxnD5zLmwJUbDrAMyf8v6kDa3cHzTAvR02lY3FRgfv7QjgwAJR4rDGp8GAeMaXH8LuQx%2FLEILkYXlzSbVoILJejqlMSxl5nORiENOGgIraTFfo%2Bjj6cuHHLv3KET884i3l99RJ67GdpI5LN9wRHdL3a2qodNeQXXCWixE7vbNtsYB59LM3aaLthIkyCt1aO%2Bzt0wUJLyIiphetEqacDHKibZWIhRgZBa48aFTv%2FuayY0qVm0U7tcFUgcyFNc48AOJf3bmJ25PQp9ZE7PJmxKloFDus3PR1Ts1gUWQLi6i4XX0IAHEbAyCVGswy%2B%2FZ0wY6pgHvqyv3hMRi7GQKvqBWQa5QMLwyC5rz288q%2Fuk9lJCmX2qVq8pRCzK8LqZvNot%2BbshfeAAIizDWJaAZ5y%2FpFh5njU71qJb5jhI55%2BwwO7BgGqboO4HEBJjYW2nJVaLlxvOFr9LloZdugiFCN6OxOe5Dth7HTL2TJXJ4ItHjCfPJceX3AjtXsc50KXLsirZ7mhkDQ6dh65Y6euS3b8fsN1mltpRwhj4P&X-Amz-Signature=20c3465ce77f559a429220f83c4dbd09783619fb284c014f86519f23c8317c21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2SVJSY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDppeYF3iPfzMFEPlv9Gp%2FrxBVkz%2FIvu80kB0L3rYalFAiBwAYI4XmPrTFxQhmsgrGpGawKZ27sL7cro5Mc5lPZEPyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMGDwYiqqR%2FGhePtteKtwDaSNo6qJl93f1mAvm%2BUmpr7YEBbdvQoayOgBF8dPtqHwGgsKait8MBeotGxjPTYdbGhsyJH0Zys42FsY3VkA9oHyN3CcNM%2FLl8gGheEPSIKrPI7LYTL5PyxBUWmWiIsJUcpa6tYUvATFe%2FAnBUVaMmVNyWNy0q%2F81plquEXmLiYmK9KWl2V1IDPRDYp%2F8xcFVAFgpZkF1ytsyDHUJgUIkhKoarr%2BZw5P8F5ReftgyM1a6Qxgva6meOPomGPMyWBTCPLlmKu5KNQBdH67kGj1YLlTYXi1wb1iOEptK6yZdksszbPHexkRB0jxTqkYCxr3LkIxsxnD5zLmwJUbDrAMyf8v6kDa3cHzTAvR02lY3FRgfv7QjgwAJR4rDGp8GAeMaXH8LuQx%2FLEILkYXlzSbVoILJejqlMSxl5nORiENOGgIraTFfo%2Bjj6cuHHLv3KET884i3l99RJ67GdpI5LN9wRHdL3a2qodNeQXXCWixE7vbNtsYB59LM3aaLthIkyCt1aO%2Bzt0wUJLyIiphetEqacDHKibZWIhRgZBa48aFTv%2FuayY0qVm0U7tcFUgcyFNc48AOJf3bmJ25PQp9ZE7PJmxKloFDus3PR1Ts1gUWQLi6i4XX0IAHEbAyCVGswy%2B%2FZ0wY6pgHvqyv3hMRi7GQKvqBWQa5QMLwyC5rz288q%2Fuk9lJCmX2qVq8pRCzK8LqZvNot%2BbshfeAAIizDWJaAZ5y%2FpFh5njU71qJb5jhI55%2BwwO7BgGqboO4HEBJjYW2nJVaLlxvOFr9LloZdugiFCN6OxOe5Dth7HTL2TJXJ4ItHjCfPJceX3AjtXsc50KXLsirZ7mhkDQ6dh65Y6euS3b8fsN1mltpRwhj4P&X-Amz-Signature=02aef0be792841b2efa82501894b815a67bae8d81e289d0526ef47de3cc241a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2SVJSY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDppeYF3iPfzMFEPlv9Gp%2FrxBVkz%2FIvu80kB0L3rYalFAiBwAYI4XmPrTFxQhmsgrGpGawKZ27sL7cro5Mc5lPZEPyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMGDwYiqqR%2FGhePtteKtwDaSNo6qJl93f1mAvm%2BUmpr7YEBbdvQoayOgBF8dPtqHwGgsKait8MBeotGxjPTYdbGhsyJH0Zys42FsY3VkA9oHyN3CcNM%2FLl8gGheEPSIKrPI7LYTL5PyxBUWmWiIsJUcpa6tYUvATFe%2FAnBUVaMmVNyWNy0q%2F81plquEXmLiYmK9KWl2V1IDPRDYp%2F8xcFVAFgpZkF1ytsyDHUJgUIkhKoarr%2BZw5P8F5ReftgyM1a6Qxgva6meOPomGPMyWBTCPLlmKu5KNQBdH67kGj1YLlTYXi1wb1iOEptK6yZdksszbPHexkRB0jxTqkYCxr3LkIxsxnD5zLmwJUbDrAMyf8v6kDa3cHzTAvR02lY3FRgfv7QjgwAJR4rDGp8GAeMaXH8LuQx%2FLEILkYXlzSbVoILJejqlMSxl5nORiENOGgIraTFfo%2Bjj6cuHHLv3KET884i3l99RJ67GdpI5LN9wRHdL3a2qodNeQXXCWixE7vbNtsYB59LM3aaLthIkyCt1aO%2Bzt0wUJLyIiphetEqacDHKibZWIhRgZBa48aFTv%2FuayY0qVm0U7tcFUgcyFNc48AOJf3bmJ25PQp9ZE7PJmxKloFDus3PR1Ts1gUWQLi6i4XX0IAHEbAyCVGswy%2B%2FZ0wY6pgHvqyv3hMRi7GQKvqBWQa5QMLwyC5rz288q%2Fuk9lJCmX2qVq8pRCzK8LqZvNot%2BbshfeAAIizDWJaAZ5y%2FpFh5njU71qJb5jhI55%2BwwO7BgGqboO4HEBJjYW2nJVaLlxvOFr9LloZdugiFCN6OxOe5Dth7HTL2TJXJ4ItHjCfPJceX3AjtXsc50KXLsirZ7mhkDQ6dh65Y6euS3b8fsN1mltpRwhj4P&X-Amz-Signature=dd2b9a28f5af5c34cc0071d0f4c95d7f56194732f5bc13c4539ffdc5d15ba0f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUECFIH2%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9MziUpQLyFy9iREt031D7rIDUwl5aXSxaSZ2RdL6FhQIhAIl0x2rDJXqacL5PxZD9kQ7cEbO6rn3tdtffuquxxrczKv8DCGIQABoMNjM3NDIzMTgzODA1IgwUtYHrz7frAyQYseMq3AN3ZrCUcfbYs%2BVy7JdCUnfOO%2BzJW7MAp73%2FiO9K4e7bDWMchp9P1FjpQg4aFrSwohPIaHZ2VWzbE4gjkvmwPGQbPGCzIGPh79H15iY9S0x9TMpVCEYnYtM%2F8choxIH0K00u9xVdtQW6KCmE4hsxrr3KjUp0a6NiGCDq8TeLJ%2F1dVTxPfuPFW47xOlXxluNb8c68Mxa5Hrncf4%2BDt2X7Q4%2BpCHku%2BHMfXZ%2Bcscwtm0EkvfZ7SSiKBNk3tOCo%2FdiU4FzQxbgOeZtAI2jwyf57nzaoX6v9S%2Ftd8GTdDzfzDVo0ZUpNkptTSz567bvCu485U7Cm4iobbbiX0PrWnqNQzvJ%2FH%2BylEIFWj2PcMZNKf%2BZAWDvrtj%2BusOnzMXYqfzDXaH6pBLL86nRZqDhMS72%2BI1KyztH1gBHcy6dhRokyn1xmdgAAh5M3erxs%2BTA6khat3x%2FSVHQOYg6zAXs%2BSxpu2T7J8KacKDLZGJic7YSGNtTmXJnzYcPsYGI3nJ6jp%2F%2F2Xj14V1LfjwpwoUthxlzW4Qi3bX1M%2FUYweu0w3YjhzJLTQrI6T8TaTzhOudENtcragdDKhx79N8NzabS68wFPhUB6AAedeZjiihBKXXQHca34cwtykoYa1i3KAn9zKDCY79nTBjqkAaclF6p96K92oE9%2B%2FOJfX%2FfaQ%2B8%2F%2Famm%2BfB1qeySvMGat%2BqeF7kEKZAJsNDwTDXchxxkCulvp3c547FHDyAHNmm7fx2mHShClsklYDrPHAnLI%2Bd3zV0KBG6EGbdVnUo45jUFLSGepYacbio8ZlswZTXkSIovXVAyCuj1UeE5UFw8MvF55KDUZXGdQ8tBpmLAB7GlmUaDMvexjyNXp5zcWUyo0pBY&X-Amz-Signature=266f06a6903af4acfd690c0f873fe12bf792f2131a58438b21f091b6a56a53d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHBOXO6Y%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuo22mletJ38hl3dFfaOvJvs%2BeIZZ2PV7Uw802nm9Y8AiB1t82tdiKy7jF8lI7w2ZGaUgfrFtbaLGgtIS5tbjIaUCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM4SqNoSZDMMD9nC8qKtwD8dDisceuD0OrwWUNyFnHY3rhv8hRujLJuEteTlr%2B86HBH6QgTwd39BvsIkWtJntk0heAm1tQw366NxUp21yJTYp4DY520vJ6pFsm%2FA43CAJN9jXPQbsjecPWm9aPM8MYZNoQRwXPqkK7j%2FAaXB3qlHXu8oO4lfXABeYxr47USmHsiLdLDiTyJgD7WEVm8hF0JGHeJ28BQSbBEG9GHcGEEIokv5LqlgbLtQxjnJ6AL528ZICbMUlLcyiBTjzYf3Mi5NGG2bBRRuVhs0kJfj52TWpVBVV4fiPL9KIE%2BjNtqWPqIFek%2F0XbW1IRpo2fgoUjnqwhU2zSNe528jRcHWC8sw9qejGDqjQY4Zl%2F9YPRNE%2Bcts0jRRZUUQ7j9IoRYye%2Fgxxh8WitYeGBEizbwm4nU52t6j%2FTwJnUbag%2BOHrP5dVd9h1%2BbQYd34cnO%2BkpNeHDm4wEWZavDbvFDh3QcbZ0B5iIAk3v5wowhPdKdkvdOCgkoYZH5vVdhpd7C%2FSWZ88XU51JPiTxwf2V4dJwmFLusaz%2BjyrEfb0M6Nj9N2VvwbKVSzmYPDr0nmfdZOCtygByc%2BX87Ik1%2FB3%2Bd9rMY2pvjPzoUNtENX8wjMIkpXL4E37g3V2EnTCijyGkq3swxO3Z0wY6pgGWnehmNkNSs0WesGOOpce9RDUTBfnnEAQ2hq9kyDu66O9RscUbJaQoD8eGcoZY%2FgACz%2BXgs7V%2FFeHc8QeSsec8%2FGKx1rTwwwCx%2BqEQgqIVSu1XFpxcrHZWiYig3wNqlPZZSsOXmYyaABRqfrns4YjbF7bo8syHpmfWUL9La%2FcJmPSbHimgJpeUkihqGPmFdYdqNIzC7iSEg3ytqiim%2FPs8HV%2BISCh3&X-Amz-Signature=625027259a13700ac583197b456526866b6a60bb891276f5eeaf6d135ee7029e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLY5MPG%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMt4prZrDcufUn2lPAtG7Qgp2XGq2Q9PN%2BrD8lUMD%2FLgIhAIbRBKazHhu9xIvjLpQmdXMdyIe4VA2KMM4eUM%2FpF%2F9qKv8DCGIQABoMNjM3NDIzMTgzODA1Igyqm0PfaIUe5nm8Qocq3APALazqfqo6RizD7pjJXTC6OyTk6H0aHJP7HkX5%2Fvy4LKlgSLf7YeJ20MUZJU5aqjcE3HRms5y7dkw1%2FOCp%2BERXKKSCs2jH7rUV8Ep3LM3bJTeXdhngP2650ZOfEqJKK8FXJVp%2FUjQZKNjv7R42UYQfNhrGcEXpxPofb%2BMxhNqlmo7YIU70v5J0%2Foslk1jtjXVCcRkLwJq7Lp0L66R3qy31Ijr6Xqg0OWN4jUM6JYat1TiKlvrzJaw5MNbs4aAbZFVu1nLyTKSfbXgD%2B4YP8%2BXW3KWUsmbMl52lymHLCv5nJXartQ3bw%2FkxGY8evos93phIg6vdMkUW7V1M5AzwJaSRV9Avc%2BXEGdT3%2BaZqqCkgRQIIoBGh5onNuiJ2AvCzi7wNhwMNHEGBaFpmkRI7zPyNHIUbpeTF8MV2OPSUotWDVVaB9sXq8S7ZyTo1nLzYuL4hK8XG8ziaBU9Oo0KawyQnLoPxyQCMjmbAOcnser7zHu1RoHf%2FAEY0HQic3vPOyItvf10YR5oOXPPcIqZYflC9EaLcS9YqGLjh2Mry5Xs2nKVTywQ3OyI5NvEriKU2REohAI%2FyjI7pdGBnLFlKZ80QNXnzDk9fyuyN3BaKM8eCNMyMgK2jBEOWHqiRRTD579nTBjqkAR2PDy3LQUAkPLkAbOMdBc6SnyarRajuMSmMBm1zDGbdigP3MriQQhXQuxISDv8ESgJQzZGk0j9XraoHUdVsMSMYDgEmVH5R7OjlsIrt6MflpsL0%2FjLiUoWlThmUQeUwdwf93NW8iMj8LzDEJTqSi8NN%2F%2FsF%2F2rtZrZ0UQ1OG2%2FvohNGNdp2Kcq7t0g%2BpCXDhrrD8M5UW45DzgAgz7wK0VTnX9f8&X-Amz-Signature=02f54cb593099ce8b9b8c0eb956140706d507febf8eb6f620a739720ee30ab67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2SVJSY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDppeYF3iPfzMFEPlv9Gp%2FrxBVkz%2FIvu80kB0L3rYalFAiBwAYI4XmPrTFxQhmsgrGpGawKZ27sL7cro5Mc5lPZEPyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMGDwYiqqR%2FGhePtteKtwDaSNo6qJl93f1mAvm%2BUmpr7YEBbdvQoayOgBF8dPtqHwGgsKait8MBeotGxjPTYdbGhsyJH0Zys42FsY3VkA9oHyN3CcNM%2FLl8gGheEPSIKrPI7LYTL5PyxBUWmWiIsJUcpa6tYUvATFe%2FAnBUVaMmVNyWNy0q%2F81plquEXmLiYmK9KWl2V1IDPRDYp%2F8xcFVAFgpZkF1ytsyDHUJgUIkhKoarr%2BZw5P8F5ReftgyM1a6Qxgva6meOPomGPMyWBTCPLlmKu5KNQBdH67kGj1YLlTYXi1wb1iOEptK6yZdksszbPHexkRB0jxTqkYCxr3LkIxsxnD5zLmwJUbDrAMyf8v6kDa3cHzTAvR02lY3FRgfv7QjgwAJR4rDGp8GAeMaXH8LuQx%2FLEILkYXlzSbVoILJejqlMSxl5nORiENOGgIraTFfo%2Bjj6cuHHLv3KET884i3l99RJ67GdpI5LN9wRHdL3a2qodNeQXXCWixE7vbNtsYB59LM3aaLthIkyCt1aO%2Bzt0wUJLyIiphetEqacDHKibZWIhRgZBa48aFTv%2FuayY0qVm0U7tcFUgcyFNc48AOJf3bmJ25PQp9ZE7PJmxKloFDus3PR1Ts1gUWQLi6i4XX0IAHEbAyCVGswy%2B%2FZ0wY6pgHvqyv3hMRi7GQKvqBWQa5QMLwyC5rz288q%2Fuk9lJCmX2qVq8pRCzK8LqZvNot%2BbshfeAAIizDWJaAZ5y%2FpFh5njU71qJb5jhI55%2BwwO7BgGqboO4HEBJjYW2nJVaLlxvOFr9LloZdugiFCN6OxOe5Dth7HTL2TJXJ4ItHjCfPJceX3AjtXsc50KXLsirZ7mhkDQ6dh65Y6euS3b8fsN1mltpRwhj4P&X-Amz-Signature=8bba2ba520569d038bac377817d0fe169f6a106a7232d7d463b253ab1b598d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUECFIH2%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9MziUpQLyFy9iREt031D7rIDUwl5aXSxaSZ2RdL6FhQIhAIl0x2rDJXqacL5PxZD9kQ7cEbO6rn3tdtffuquxxrczKv8DCGIQABoMNjM3NDIzMTgzODA1IgwUtYHrz7frAyQYseMq3AN3ZrCUcfbYs%2BVy7JdCUnfOO%2BzJW7MAp73%2FiO9K4e7bDWMchp9P1FjpQg4aFrSwohPIaHZ2VWzbE4gjkvmwPGQbPGCzIGPh79H15iY9S0x9TMpVCEYnYtM%2F8choxIH0K00u9xVdtQW6KCmE4hsxrr3KjUp0a6NiGCDq8TeLJ%2F1dVTxPfuPFW47xOlXxluNb8c68Mxa5Hrncf4%2BDt2X7Q4%2BpCHku%2BHMfXZ%2Bcscwtm0EkvfZ7SSiKBNk3tOCo%2FdiU4FzQxbgOeZtAI2jwyf57nzaoX6v9S%2Ftd8GTdDzfzDVo0ZUpNkptTSz567bvCu485U7Cm4iobbbiX0PrWnqNQzvJ%2FH%2BylEIFWj2PcMZNKf%2BZAWDvrtj%2BusOnzMXYqfzDXaH6pBLL86nRZqDhMS72%2BI1KyztH1gBHcy6dhRokyn1xmdgAAh5M3erxs%2BTA6khat3x%2FSVHQOYg6zAXs%2BSxpu2T7J8KacKDLZGJic7YSGNtTmXJnzYcPsYGI3nJ6jp%2F%2F2Xj14V1LfjwpwoUthxlzW4Qi3bX1M%2FUYweu0w3YjhzJLTQrI6T8TaTzhOudENtcragdDKhx79N8NzabS68wFPhUB6AAedeZjiihBKXXQHca34cwtykoYa1i3KAn9zKDCY79nTBjqkAaclF6p96K92oE9%2B%2FOJfX%2FfaQ%2B8%2F%2Famm%2BfB1qeySvMGat%2BqeF7kEKZAJsNDwTDXchxxkCulvp3c547FHDyAHNmm7fx2mHShClsklYDrPHAnLI%2Bd3zV0KBG6EGbdVnUo45jUFLSGepYacbio8ZlswZTXkSIovXVAyCuj1UeE5UFw8MvF55KDUZXGdQ8tBpmLAB7GlmUaDMvexjyNXp5zcWUyo0pBY&X-Amz-Signature=042257e67a7931c180422627a10b59b0f82350265cdf539cf4ca689cf5f5344b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2SVJSY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDppeYF3iPfzMFEPlv9Gp%2FrxBVkz%2FIvu80kB0L3rYalFAiBwAYI4XmPrTFxQhmsgrGpGawKZ27sL7cro5Mc5lPZEPyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMGDwYiqqR%2FGhePtteKtwDaSNo6qJl93f1mAvm%2BUmpr7YEBbdvQoayOgBF8dPtqHwGgsKait8MBeotGxjPTYdbGhsyJH0Zys42FsY3VkA9oHyN3CcNM%2FLl8gGheEPSIKrPI7LYTL5PyxBUWmWiIsJUcpa6tYUvATFe%2FAnBUVaMmVNyWNy0q%2F81plquEXmLiYmK9KWl2V1IDPRDYp%2F8xcFVAFgpZkF1ytsyDHUJgUIkhKoarr%2BZw5P8F5ReftgyM1a6Qxgva6meOPomGPMyWBTCPLlmKu5KNQBdH67kGj1YLlTYXi1wb1iOEptK6yZdksszbPHexkRB0jxTqkYCxr3LkIxsxnD5zLmwJUbDrAMyf8v6kDa3cHzTAvR02lY3FRgfv7QjgwAJR4rDGp8GAeMaXH8LuQx%2FLEILkYXlzSbVoILJejqlMSxl5nORiENOGgIraTFfo%2Bjj6cuHHLv3KET884i3l99RJ67GdpI5LN9wRHdL3a2qodNeQXXCWixE7vbNtsYB59LM3aaLthIkyCt1aO%2Bzt0wUJLyIiphetEqacDHKibZWIhRgZBa48aFTv%2FuayY0qVm0U7tcFUgcyFNc48AOJf3bmJ25PQp9ZE7PJmxKloFDus3PR1Ts1gUWQLi6i4XX0IAHEbAyCVGswy%2B%2FZ0wY6pgHvqyv3hMRi7GQKvqBWQa5QMLwyC5rz288q%2Fuk9lJCmX2qVq8pRCzK8LqZvNot%2BbshfeAAIizDWJaAZ5y%2FpFh5njU71qJb5jhI55%2BwwO7BgGqboO4HEBJjYW2nJVaLlxvOFr9LloZdugiFCN6OxOe5Dth7HTL2TJXJ4ItHjCfPJceX3AjtXsc50KXLsirZ7mhkDQ6dh65Y6euS3b8fsN1mltpRwhj4P&X-Amz-Signature=8758127f9e696ebdb4e9e0b921b8b2b26701aa595f3f233f6a72e415c7d55182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU3IWIUU%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ1gP%2BujqraNoRhKNzIjI0eJ9AiGq4OEuc2kLZPKH5hAIhAI6l%2Ff9GNPBel7AR1WWn1TgJnSPHnu%2B9NVNCZqykd4KsKv8DCGEQABoMNjM3NDIzMTgzODA1IgzNkrbryilym5B9Ca0q3ANAyXVWiQZkIW0ZntxoZZnXEJ02sDO%2FX2XS0JYUC3H1oGRURYmNAbxmdyngaIYWKGVsmjax0tX8UDb%2BwahU8Ta7l0YL8NWjEbqVgWy9oCeo8FNOC9BxsWgqJV8di1ZTQtX0%2ByYQhf1DaJ4ux%2BBQCbn4znEKzhQxO0FLuLSDqKZKJF0%2BKdJVwCRg%2BVkvZp0MotgrDLswn1SrRVdJMibG3jJFdvSY53txMPz9mhjpB5fWCznM9YZIyA%2FHlkg2%2FYmbXt9tz1oz6gDLFvH6eXzhXdxXnFEIHuqXPEUDWDXjeuXAHvWkaBJFUB7zca1ckl558yv822a6%2B2eWRVpbeGzbKCHkfoppE8Yc2kDJVzZmYBnqBwZZHtSPaKMdDx0S0qfOKMPsjbVGmfs3bv8P%2FcEle4XG7B%2F4uJCQ%2BPswrWB3Z0NKn3DMS3ZV%2Foc1pEBN3Pzon4QnmTGQUWl4bnQ3o2u72H5WltLveG1nM6yT087QLgMoqJxBGInuPFf21iij%2B3Ybj56JUvFtswNsptBtQ6R2C5PnM8OovW%2FMun%2B3%2FraxA6gTXlFsZiK0E%2F8NkTQcuyDOr9hVywZ4iPZYIHI7UtunO8mgQpTICNDWpgLwQUjhKcz1aViIci%2FazuCuL61zDjCF8NnTBjqkASO%2FL52fwpD2u8JZCRx3rsHM7ZiX3QLRAx4a3ymeMGF8wsReo7NqO%2FY%2B1QjU69qgT%2BNCnt2B9KrVm04POPTio6zIaQP5NBDXG32iL9AcuE7hpW9Il0OTaVar6bF%2Bo%2FbnchXIu%2BcnhwABb%2BlP1cBl%2F8rNWZTq5C%2BxectTCGy9c9M54HDfiL9Ks9cmMwGCJ75nYXYE99ITaYuoLOxLss4DIqz5qzSd&X-Amz-Signature=5a3416ea0864b0feda4d77a225d785b2af0ce54a8f497533170b0d443baebd7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2SVJSY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDppeYF3iPfzMFEPlv9Gp%2FrxBVkz%2FIvu80kB0L3rYalFAiBwAYI4XmPrTFxQhmsgrGpGawKZ27sL7cro5Mc5lPZEPyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMGDwYiqqR%2FGhePtteKtwDaSNo6qJl93f1mAvm%2BUmpr7YEBbdvQoayOgBF8dPtqHwGgsKait8MBeotGxjPTYdbGhsyJH0Zys42FsY3VkA9oHyN3CcNM%2FLl8gGheEPSIKrPI7LYTL5PyxBUWmWiIsJUcpa6tYUvATFe%2FAnBUVaMmVNyWNy0q%2F81plquEXmLiYmK9KWl2V1IDPRDYp%2F8xcFVAFgpZkF1ytsyDHUJgUIkhKoarr%2BZw5P8F5ReftgyM1a6Qxgva6meOPomGPMyWBTCPLlmKu5KNQBdH67kGj1YLlTYXi1wb1iOEptK6yZdksszbPHexkRB0jxTqkYCxr3LkIxsxnD5zLmwJUbDrAMyf8v6kDa3cHzTAvR02lY3FRgfv7QjgwAJR4rDGp8GAeMaXH8LuQx%2FLEILkYXlzSbVoILJejqlMSxl5nORiENOGgIraTFfo%2Bjj6cuHHLv3KET884i3l99RJ67GdpI5LN9wRHdL3a2qodNeQXXCWixE7vbNtsYB59LM3aaLthIkyCt1aO%2Bzt0wUJLyIiphetEqacDHKibZWIhRgZBa48aFTv%2FuayY0qVm0U7tcFUgcyFNc48AOJf3bmJ25PQp9ZE7PJmxKloFDus3PR1Ts1gUWQLi6i4XX0IAHEbAyCVGswy%2B%2FZ0wY6pgHvqyv3hMRi7GQKvqBWQa5QMLwyC5rz288q%2Fuk9lJCmX2qVq8pRCzK8LqZvNot%2BbshfeAAIizDWJaAZ5y%2FpFh5njU71qJb5jhI55%2BwwO7BgGqboO4HEBJjYW2nJVaLlxvOFr9LloZdugiFCN6OxOe5Dth7HTL2TJXJ4ItHjCfPJceX3AjtXsc50KXLsirZ7mhkDQ6dh65Y6euS3b8fsN1mltpRwhj4P&X-Amz-Signature=5ce1ca51a1a7ae539f195f678af678df72194f3c159e00fcbe53b310d33433ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLS2KKOT%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGn0C%2BiGnQKhOP44dxAp2LWbzPZhUVE76pEA5c7M0aqVAiEA6ZZIjXoVRiFZwhMH5QZXJJUQ0v66DOE19qxz705MgDAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDH1ziu%2FRowMWGZ8AdCrcA8NzhzQeid0aG8dRElmGr9UvlFqsrBBuvqKVB9QmTKxOORqQ50Hyf4j0pTpSPWMGSf0E7xz%2FJKWzVx6DwHFzJptSkGXT17BRoszAFOXstbpVB7dQMn8t3q35O4qfb2hUI%2Bb1IO6vZACUBPeoNotfk2R5OrAWK3om4UrruK%2By9DDBXyxpUtttL2LIn8BYT036xeae%2BnNfqYLtBWmDGSMMDW0yRO0GyLnMHOGwCkJtdVqEtL9X2TJguddkrDqaGg3tSf69ruH9YTHbS%2BXOT70i4DM7s8HRJ4d3%2FcVzG%2BBZfW6xnv3DhBXW1tO3YH6t31a%2BZg7wurEg6cUBK4FA2cW9TbuhJavM1DzZYrwazw7jZvLA3GwRBCwU7s1JX1o5wynkBhe%2FlKLx8bZhSPwZ7KBZhXziDG7vnWXl%2F8%2ByoOLcevdfFrh1ZM0NgiRqRUZDgTgsPI%2BGUOpDgqIl0oo%2BfTJ3b6qf%2FPg%2FoPT0vt41X4aj%2FHOxg8Aai3JVhHkjeDtRw2BlUCMJp92dK2EDg8gL34v8Dt%2FphkvFtQcNjqkl24m2F294drWWmH3H8abwoJzYqka65SZTvXjWUnTVXxy2Dxp8GLIFV5qgyIb5t7YQ64lmnZYJbp4ayRoOybc6BdUxMNrt2dMGOqUBO%2BAC2QRsb6x0PVaEuDYfKkx%2Br3pkZs%2BTri5IoI9BQUqBOkLaS9%2FblGtEX%2Fs1Lo1uB709oZG4ppg91vj%2BjBM0fJu9JFZLr%2FbCl09rYqQ5NQwNVta0aawQ0gIIBT1KhxD8AsR45Ydesbm5IN8gs0xUkBt9FMjwwVicG4jYW3iQaNQGUGFkOqojDw89C6WPsY38FbYWhe7BI9tX63eKAdFh2nxvbJSB&X-Amz-Signature=ee950339d454fa2eb94d104d50dc826cd89afdc87cd25e0bb5f55578e20c4854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2SVJSY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDppeYF3iPfzMFEPlv9Gp%2FrxBVkz%2FIvu80kB0L3rYalFAiBwAYI4XmPrTFxQhmsgrGpGawKZ27sL7cro5Mc5lPZEPyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMGDwYiqqR%2FGhePtteKtwDaSNo6qJl93f1mAvm%2BUmpr7YEBbdvQoayOgBF8dPtqHwGgsKait8MBeotGxjPTYdbGhsyJH0Zys42FsY3VkA9oHyN3CcNM%2FLl8gGheEPSIKrPI7LYTL5PyxBUWmWiIsJUcpa6tYUvATFe%2FAnBUVaMmVNyWNy0q%2F81plquEXmLiYmK9KWl2V1IDPRDYp%2F8xcFVAFgpZkF1ytsyDHUJgUIkhKoarr%2BZw5P8F5ReftgyM1a6Qxgva6meOPomGPMyWBTCPLlmKu5KNQBdH67kGj1YLlTYXi1wb1iOEptK6yZdksszbPHexkRB0jxTqkYCxr3LkIxsxnD5zLmwJUbDrAMyf8v6kDa3cHzTAvR02lY3FRgfv7QjgwAJR4rDGp8GAeMaXH8LuQx%2FLEILkYXlzSbVoILJejqlMSxl5nORiENOGgIraTFfo%2Bjj6cuHHLv3KET884i3l99RJ67GdpI5LN9wRHdL3a2qodNeQXXCWixE7vbNtsYB59LM3aaLthIkyCt1aO%2Bzt0wUJLyIiphetEqacDHKibZWIhRgZBa48aFTv%2FuayY0qVm0U7tcFUgcyFNc48AOJf3bmJ25PQp9ZE7PJmxKloFDus3PR1Ts1gUWQLi6i4XX0IAHEbAyCVGswy%2B%2FZ0wY6pgHvqyv3hMRi7GQKvqBWQa5QMLwyC5rz288q%2Fuk9lJCmX2qVq8pRCzK8LqZvNot%2BbshfeAAIizDWJaAZ5y%2FpFh5njU71qJb5jhI55%2BwwO7BgGqboO4HEBJjYW2nJVaLlxvOFr9LloZdugiFCN6OxOe5Dth7HTL2TJXJ4ItHjCfPJceX3AjtXsc50KXLsirZ7mhkDQ6dh65Y6euS3b8fsN1mltpRwhj4P&X-Amz-Signature=e2a230efab924352c74d88dbd802a7577d841fe5bbeb67cbea762d461fd7cfc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MP6WREQ%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYo6SBdO1chb2zOlzHANgEH%2BZdwGEmXYEkmqXKEHBrSgIhAPbDiG%2BondNYr%2FEkTJfeR0oKf1amnUDS4oyYNNixQS%2BOKv8DCGIQABoMNjM3NDIzMTgzODA1IgxRS7Ky%2F6btL8cR4lcq3ANYnTiPHcnWG5sORNFpNzcMeB8OLyKdV4RSxnPpMPiYsrGTO3yWp2De7CKqYg6ycVkX2Hu8lI4H3FJHtP2Ry6Ci58qddMekxCOM%2FSKC3AADr3aalIpviF7svps1shXY6Zk%2BOqFxvwI%2F5KLkXyhn2jQAbYSSFt%2BmAYR8UlYkvhqOxjSAf3Kid9LxNzm%2BlLvEumr5dHpvenSUOILBH9y1vsLh%2FAn7B8SnpgQrdAr6XaNy9tW5rwDIkBImwUKUeOjn0cvvtkNuFAg2IOLShq3XSIDjzwVTumITSZOfQpswhm1GG3VscOBZQpP0dbOnOw7K4ykJZ35gvUSDUjgJHBuUJ6RVswS9QqlRWoE%2BZhzYPCITGXxLNwNan5U2E0nxq76U6qiFwV39HszGeeUT2TnZ2kV8%2FbJq9h9ng5hfkuHmLA6s0M%2FvzNBrzkmykZS4%2Ff0n0vOZ4Ns%2BMZCdxynzJQdfZwmhL3qdyead0Eo8rWBfFmi2BxuwA88aamXy0aHOWjJrZoLNF0ng7JX%2BkZSf%2F%2FdYn9MjrFu8MrLVL8WER5WGrTQiuGqgWnkjHAuQqnZCpYcO7jKeWohSPKU2uzlypvOFqUJmx2AO7KpioFNqeodf8TEWf%2BjYl2CseRhzbp51eTDq79nTBjqkAdYq6FWm71BnpQ0uANpX7LctjOYXDjvubLsHBJzi9o2FA%2F9nhCjKcR1oVFpV%2BwGv0gUfU5PEruz2u2aK5zAw3vTUjwo3WnEG8yR7R%2B5icCY4l9KYkdcvqvEPuVhyG60ndXOjKKSzSDoTlRLwgAjWyyuexDeke41h3wPpruHj4XvubDi%2FDZKAS37mFMPeD8gU9eQMHCaHukjoCh8gXi0fEnkBkGZ1&X-Amz-Signature=c2d4d9378d4f0030ccd54d43773d648cf9b3c4dcf89314e67153a269966c2ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2SVJSY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDppeYF3iPfzMFEPlv9Gp%2FrxBVkz%2FIvu80kB0L3rYalFAiBwAYI4XmPrTFxQhmsgrGpGawKZ27sL7cro5Mc5lPZEPyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMGDwYiqqR%2FGhePtteKtwDaSNo6qJl93f1mAvm%2BUmpr7YEBbdvQoayOgBF8dPtqHwGgsKait8MBeotGxjPTYdbGhsyJH0Zys42FsY3VkA9oHyN3CcNM%2FLl8gGheEPSIKrPI7LYTL5PyxBUWmWiIsJUcpa6tYUvATFe%2FAnBUVaMmVNyWNy0q%2F81plquEXmLiYmK9KWl2V1IDPRDYp%2F8xcFVAFgpZkF1ytsyDHUJgUIkhKoarr%2BZw5P8F5ReftgyM1a6Qxgva6meOPomGPMyWBTCPLlmKu5KNQBdH67kGj1YLlTYXi1wb1iOEptK6yZdksszbPHexkRB0jxTqkYCxr3LkIxsxnD5zLmwJUbDrAMyf8v6kDa3cHzTAvR02lY3FRgfv7QjgwAJR4rDGp8GAeMaXH8LuQx%2FLEILkYXlzSbVoILJejqlMSxl5nORiENOGgIraTFfo%2Bjj6cuHHLv3KET884i3l99RJ67GdpI5LN9wRHdL3a2qodNeQXXCWixE7vbNtsYB59LM3aaLthIkyCt1aO%2Bzt0wUJLyIiphetEqacDHKibZWIhRgZBa48aFTv%2FuayY0qVm0U7tcFUgcyFNc48AOJf3bmJ25PQp9ZE7PJmxKloFDus3PR1Ts1gUWQLi6i4XX0IAHEbAyCVGswy%2B%2FZ0wY6pgHvqyv3hMRi7GQKvqBWQa5QMLwyC5rz288q%2Fuk9lJCmX2qVq8pRCzK8LqZvNot%2BbshfeAAIizDWJaAZ5y%2FpFh5njU71qJb5jhI55%2BwwO7BgGqboO4HEBJjYW2nJVaLlxvOFr9LloZdugiFCN6OxOe5Dth7HTL2TJXJ4ItHjCfPJceX3AjtXsc50KXLsirZ7mhkDQ6dh65Y6euS3b8fsN1mltpRwhj4P&X-Amz-Signature=f49dfe16b3151d3c624013fc2eb395ed999eccf3f4bcf97490eb7a5f89d85dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RURMCX2Y%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2bkSOvSOIO5YfB0qSIE0J%2FSy9sFZAbv8Jp5dMv8SapAiBQdOsvlRg077jLptXlTS21BamFiv8H6RyJhDQjGLAXhCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMej3WTU3x5%2BddX7DkKtwD1c5dMCRlKSRjIklKmF%2FTlfC3ql021lg%2BZXgrkP%2FKvWm3SKxFIEeZuPRWSF0kYhdDSiX%2Fx4deWVluYSSzgajsBOs7oQ3bO5w1MKzI4XyfALv%2F5bzuItCAJcTAMS5CFXkVOCgqZ4G8lJR3WP%2FA1JabUouhn31zBHGMthTh0aETD9S58OHCjAsDcDFGdpPqvdbfm0OU1RoL%2Bjaj1o5jbOf6fwWiKAr5TjFi6VuClHWtyelrQcB30EpBnoiIXuRL%2B%2Fk9yLkf5cghutUqxTvs%2BiUfllkdI7tqNt7Y6c9flbS%2BG5fx5HFfk%2FFEti%2BljdzFBIIzZEhrPEt272bIE3OjDJlsuPNz4CyYsNhTIyc1ogk0%2FZzDI9c%2BfDY6S4jIeBgqmtjljHLBhnXoEvYS8Bn84gSPn%2By4AZz9llz2sH6jHNlNFxwODt2vGUAEY86PGh%2FYu97TCiC%2FB1Rv%2Fp1M3xaBXvat0lLBuzN3gnpWNMkOqgyh3BElOtQdnmZn%2F5sg5zj6NOX0m1aDUGj4FJGLbiODgmWPlP1UfjDba3Tq9lWkOigY8eZ1adrfe048ZhXhPcQgbuR8JRETxGIqZKIV3s5rYBwEv%2FlV5Gcs7HO8IKqa7DhO9nfypKPGAa%2BLlRLde2UwiO7Z0wY6pgHtIxP58dl0%2FchfgBQOetgLTkFavTDNhP%2B9ZtCrCnJ8YR63uNJKrXOSJP3DhtcQ%2B023EmXdJtNplRkm3btBwqFyOSM8gC1afuw9NSx66ljocE5gOVDVujIBuwcMuAK%2BfqHtJ4TVPwMp6EPxbTF9UgCK4%2FFtYc34LdQK2u%2FwEbGfwHLFJZ6Y5gY4mwiiuL3aC4WTMS0AwbVC%2BC2p%2BadjRP6%2F8l2VCZhZ&X-Amz-Signature=dc7f17707e77ba412f4e9ef867a143b61266239b8c023861e34450a5d1c95744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMQD62F4%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcHEW9XJdn2j6wkuPm2uwtc3JrRR75VgNnWIaMnBlWggIhAIYQ9B9guxsA6HNftddOvq%2BRtZz1fWWHJFLNQIZvO6DnKv8DCGIQABoMNjM3NDIzMTgzODA1IgzgUmo37bBPVhd3X6Aq3AMUVhYECR8hwDHS7pzQz3UKXVnqFWtkYMzLMdj00IkhNIg%2F3dQfQXtcg55QcWug1zXN%2B5ZG5Cg%2F8FEhJYGGtLHOlYgNX%2FXjqZtTYntpU4%2BlwK8S7lZzC1JvEkNyNTYseGcl2P0saLX6u4ruDs%2BG7LXTs6JC83hq3l21By8Sno6HJn%2BRG5WsVdAYN3IlVPpaJFE7cu5gttWxobLrmzk7zhk9lTOOLSbrm2es8RwHETbpAyK2xO6nHDCgU4SBesFCdhRvPDqCab3dMDHPsPhLKc5g0UJBe%2BZyMik66WJ95HRTln1dyY28o085BRLQppykHJc9zXTFkiXOKfoMdqWwz3fBY7jY0ZP1l5v7sJ3teuVCdvk7ybGr1vz2TgCF%2BYT1nEzcMy8dpF5hCHnI%2F0FDiP02xcybWpal9e%2BcUg3RFUh42Xqi%2FhggEJMGvQkLPy%2F8O5n5EEcfRKoz8XwY1l6pJXR6%2BXnSvm9jaiJZkdJ6O7Vg9GPUGYLktAmJpa7lVlOTKvAriXtWdF2cEVI7gOM9gJZo2yZCNoqzLzfjC%2F19BzUZIIiI2Rn0bkP5VX%2F01AZw6cZVRSQ03SZ6%2BmIYKk2mklYd6Ry8ZcZoWyIUgdnlpkF9GBna2PXaOX50a%2BUIQDDa79nTBjqkAVXiyyUFQrpp8DSImlwUGegnklTtEo2XWbmIKuBfuH32Z3bXeUxaghM9ordaawzDFRaw1lbVGvSpoUv1ZjxZA6vKfkvFtCiEU9NvrmmI9DwYlG3wdjMGPAydQTWEvMKKNxSdpxE4nfK%2FhQgsiNZk2XikED4MUYRHjZlb8ZwGUCrKREv3gIlhNgKeGxRlFy4FmT5ie0RfCbvqyJ5YX9%2FzF%2BZ1v9yI&X-Amz-Signature=82d26ae7c64608b2d824786f3e3a394b6778d119b21526592cf097ec78de7673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKDHDV4%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsMESq11raCYep%2B3qpipuW7LgvLm2%2BzE3aXUpSaBKfngIgHh1I0T3XtGsByJx3pXGd78UgQk5ubBW%2BphPwLFMBQq8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDIA4u6INfqfc9xGQ9ircA9S9JemDUYWUI9GbEJ9mxHdpaCFKipelvtOxKuZajWR4j2wF9Xrdkq9JUfQTFGQjlWiLZM%2F7Ld1Cmjf2wP8NGgNRBFC0RbX%2FT6XFnOu4auIZcO2%2BXpQqbC5ZCDph84yuyVweKDqjKhOy0HXr3MCXTWi4zQeHx3iT99IPNfPQp6623bmGQA%2Ffx1AvBcY33vmU8TE34ntJvqDWKpDdU8VUtg%2Fl4MEOmfIsR2sKOX%2FiC0Gt1zdHbqOuJeoaImoIcTwmKZ3LVotTVKYKFIavKH2UKvHNKGV67az6rZEWsJjZrgfOHrCB%2F1VsA3NvZptlsCRnanhH1iIVae5HZj1%2FGJdvcv5Rap5ejVr7ZTfJUhIVEt4RXC5AIA%2BrgEcRUfnkk7E7zUBr5gQGTBi5TN1FLLbGoIvKWdEzSvAYPNHfrYGPuKJueTliFaGrHPZsV4sByB5R4fkRcBb06skHi0456c5pcSlhYETQF3Ii1PSn%2BQsjiJGZLd9ESQ8HGKpLflvqBGC2tgIT49TwTp0eoeh%2B%2FOWywUN163G88A%2BUB6Pucfxn%2FW%2FDuPtsJeoBRZWna%2F6pOrgg%2BwT%2B%2F3zMGPePN061hZ93wb%2FtPus8yUfGYMOI1Qk63mk9cbIOqzaUzc%2BvR6HgMIjv2dMGOqUBmpi8csFNgDesw7QSaAv9aHDoPa6RgpyF7z%2Fzv1cNXJQcelKg%2Brmn1pZXv%2FY68VIgINS32XHy48cPbvBy%2FynNmxRZ5i5Qdzi1HeamTN3zDaxVw%2BXJsGVrEwKpRN3ZX1E7qv3yzUabukXCKKpaHHrYIu6Y4jVIuwIC8zjGDGobZGuB0yDIWC1M%2BpHzaGk4Y3TnaLBjZ26rVMmUa862ePc7rXLLlj%2BA&X-Amz-Signature=69dff2ac0a488411b968bf72845eb9886fd8ebd77020a6552f9c9bdca9c49811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2SVJSY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDppeYF3iPfzMFEPlv9Gp%2FrxBVkz%2FIvu80kB0L3rYalFAiBwAYI4XmPrTFxQhmsgrGpGawKZ27sL7cro5Mc5lPZEPyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMGDwYiqqR%2FGhePtteKtwDaSNo6qJl93f1mAvm%2BUmpr7YEBbdvQoayOgBF8dPtqHwGgsKait8MBeotGxjPTYdbGhsyJH0Zys42FsY3VkA9oHyN3CcNM%2FLl8gGheEPSIKrPI7LYTL5PyxBUWmWiIsJUcpa6tYUvATFe%2FAnBUVaMmVNyWNy0q%2F81plquEXmLiYmK9KWl2V1IDPRDYp%2F8xcFVAFgpZkF1ytsyDHUJgUIkhKoarr%2BZw5P8F5ReftgyM1a6Qxgva6meOPomGPMyWBTCPLlmKu5KNQBdH67kGj1YLlTYXi1wb1iOEptK6yZdksszbPHexkRB0jxTqkYCxr3LkIxsxnD5zLmwJUbDrAMyf8v6kDa3cHzTAvR02lY3FRgfv7QjgwAJR4rDGp8GAeMaXH8LuQx%2FLEILkYXlzSbVoILJejqlMSxl5nORiENOGgIraTFfo%2Bjj6cuHHLv3KET884i3l99RJ67GdpI5LN9wRHdL3a2qodNeQXXCWixE7vbNtsYB59LM3aaLthIkyCt1aO%2Bzt0wUJLyIiphetEqacDHKibZWIhRgZBa48aFTv%2FuayY0qVm0U7tcFUgcyFNc48AOJf3bmJ25PQp9ZE7PJmxKloFDus3PR1Ts1gUWQLi6i4XX0IAHEbAyCVGswy%2B%2FZ0wY6pgHvqyv3hMRi7GQKvqBWQa5QMLwyC5rz288q%2Fuk9lJCmX2qVq8pRCzK8LqZvNot%2BbshfeAAIizDWJaAZ5y%2FpFh5njU71qJb5jhI55%2BwwO7BgGqboO4HEBJjYW2nJVaLlxvOFr9LloZdugiFCN6OxOe5Dth7HTL2TJXJ4ItHjCfPJceX3AjtXsc50KXLsirZ7mhkDQ6dh65Y6euS3b8fsN1mltpRwhj4P&X-Amz-Signature=847e41478a930049fac354b12713ad27e81e51207c71d6dbda7ac2805ce4e4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2SVJSY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDppeYF3iPfzMFEPlv9Gp%2FrxBVkz%2FIvu80kB0L3rYalFAiBwAYI4XmPrTFxQhmsgrGpGawKZ27sL7cro5Mc5lPZEPyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMGDwYiqqR%2FGhePtteKtwDaSNo6qJl93f1mAvm%2BUmpr7YEBbdvQoayOgBF8dPtqHwGgsKait8MBeotGxjPTYdbGhsyJH0Zys42FsY3VkA9oHyN3CcNM%2FLl8gGheEPSIKrPI7LYTL5PyxBUWmWiIsJUcpa6tYUvATFe%2FAnBUVaMmVNyWNy0q%2F81plquEXmLiYmK9KWl2V1IDPRDYp%2F8xcFVAFgpZkF1ytsyDHUJgUIkhKoarr%2BZw5P8F5ReftgyM1a6Qxgva6meOPomGPMyWBTCPLlmKu5KNQBdH67kGj1YLlTYXi1wb1iOEptK6yZdksszbPHexkRB0jxTqkYCxr3LkIxsxnD5zLmwJUbDrAMyf8v6kDa3cHzTAvR02lY3FRgfv7QjgwAJR4rDGp8GAeMaXH8LuQx%2FLEILkYXlzSbVoILJejqlMSxl5nORiENOGgIraTFfo%2Bjj6cuHHLv3KET884i3l99RJ67GdpI5LN9wRHdL3a2qodNeQXXCWixE7vbNtsYB59LM3aaLthIkyCt1aO%2Bzt0wUJLyIiphetEqacDHKibZWIhRgZBa48aFTv%2FuayY0qVm0U7tcFUgcyFNc48AOJf3bmJ25PQp9ZE7PJmxKloFDus3PR1Ts1gUWQLi6i4XX0IAHEbAyCVGswy%2B%2FZ0wY6pgHvqyv3hMRi7GQKvqBWQa5QMLwyC5rz288q%2Fuk9lJCmX2qVq8pRCzK8LqZvNot%2BbshfeAAIizDWJaAZ5y%2FpFh5njU71qJb5jhI55%2BwwO7BgGqboO4HEBJjYW2nJVaLlxvOFr9LloZdugiFCN6OxOe5Dth7HTL2TJXJ4ItHjCfPJceX3AjtXsc50KXLsirZ7mhkDQ6dh65Y6euS3b8fsN1mltpRwhj4P&X-Amz-Signature=af29151469382b0c61a6daa6fba7836e95d8ec16ab66fedae0a20dd06a32f810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUAJHLM%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAywH1QOGjwa4wbx6RT7KaRZRxHu7%2BWbnENcPX%2B6rMGrAiEA8a14QilG6EB7%2FGH8YNRihRC7mHGfSxdfN7GRG303rGQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDELe6DQ4yhwS7s9rESrcA5bBc7iiv64tIVxNUgiPgm2XJ%2FI0V0Q1FH8pdluSk5EoPjOJnEmh9Yuc%2B7esfaL5cU7xNDT4Vm94n01rqeSTlEgrddRFsJoHPOUEOQp8LKiy2SvWo5bh4Hi5K31SMLg%2BVTcFpvnIjgKNTiVlxgFtC5x6X5gSu2saPJ5eRc9AIX3GkgSM4mupgQlYMBtwQx%2BjKwKzM%2FGjVwSN7BIKeoFSWb5ZDck1KysZ%2Bj530YIzII7TlHZ%2Bby%2BZMFtajYaDjhsuUelHKsgP2V8bMiXnKCTcs0t1H%2BHzdABsRE2KXYONCpeRisY%2BRYQ3L3GG%2BC0q1saamlBpTYz3pvKfK%2FMq9szyNXp41U%2FC5o%2FI%2FSt8H%2BN%2BC4bzcEwpu8CnGJRgbYHobGor36xWm1pLM7xEVUN9ir4%2BJ1JGGhxEHxzZVvUhJoQvtLyN9mSuySZoF3bLjMGuGx2EsRFBaPlGdY7v%2FVw8U6NkMiBg6w2nM5KnuuAumd8g%2FIep0ej0HVjqWXMCAZMNmKTvIqlIICVYumLXEMD%2FX4KqtSkJ6zc9HRgccvfh1%2BLcBPcpzUYWtIq5mU1NyS2GtSA5cCf9u1We4h%2BtKrd%2BjvJ8VBD9h8EJLHdEiZZw6RDzwy2J3KwwI1DCZGbACFuGMIjt2dMGOqUBMVUJIMQJOYWw53gzdURJoCxnKm9hKl3D66giAHrvZ02xZ2AtpjjvPkLZc3PUdmSgBr%2Bv8do%2BU5j9pOYfZUDtxOwcsGamsqZIE3OB1vgv%2FASrZu4UnWrre24kzqJSftLnBfP5uxD4rg85qcXEknG46Zt3mFIXvHR2tnYsDaBbQAWUHJ18%2F7akeXak9FV4bKGCWpSbXwAOvxUG%2FdyTIlrolm3xA%2Fbx&X-Amz-Signature=cea46330d426b1a7ec090515fc39274e0c1f28d2f4a5373a5e0f56cdd601be51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUAJHLM%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAywH1QOGjwa4wbx6RT7KaRZRxHu7%2BWbnENcPX%2B6rMGrAiEA8a14QilG6EB7%2FGH8YNRihRC7mHGfSxdfN7GRG303rGQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDELe6DQ4yhwS7s9rESrcA5bBc7iiv64tIVxNUgiPgm2XJ%2FI0V0Q1FH8pdluSk5EoPjOJnEmh9Yuc%2B7esfaL5cU7xNDT4Vm94n01rqeSTlEgrddRFsJoHPOUEOQp8LKiy2SvWo5bh4Hi5K31SMLg%2BVTcFpvnIjgKNTiVlxgFtC5x6X5gSu2saPJ5eRc9AIX3GkgSM4mupgQlYMBtwQx%2BjKwKzM%2FGjVwSN7BIKeoFSWb5ZDck1KysZ%2Bj530YIzII7TlHZ%2Bby%2BZMFtajYaDjhsuUelHKsgP2V8bMiXnKCTcs0t1H%2BHzdABsRE2KXYONCpeRisY%2BRYQ3L3GG%2BC0q1saamlBpTYz3pvKfK%2FMq9szyNXp41U%2FC5o%2FI%2FSt8H%2BN%2BC4bzcEwpu8CnGJRgbYHobGor36xWm1pLM7xEVUN9ir4%2BJ1JGGhxEHxzZVvUhJoQvtLyN9mSuySZoF3bLjMGuGx2EsRFBaPlGdY7v%2FVw8U6NkMiBg6w2nM5KnuuAumd8g%2FIep0ej0HVjqWXMCAZMNmKTvIqlIICVYumLXEMD%2FX4KqtSkJ6zc9HRgccvfh1%2BLcBPcpzUYWtIq5mU1NyS2GtSA5cCf9u1We4h%2BtKrd%2BjvJ8VBD9h8EJLHdEiZZw6RDzwy2J3KwwI1DCZGbACFuGMIjt2dMGOqUBMVUJIMQJOYWw53gzdURJoCxnKm9hKl3D66giAHrvZ02xZ2AtpjjvPkLZc3PUdmSgBr%2Bv8do%2BU5j9pOYfZUDtxOwcsGamsqZIE3OB1vgv%2FASrZu4UnWrre24kzqJSftLnBfP5uxD4rg85qcXEknG46Zt3mFIXvHR2tnYsDaBbQAWUHJ18%2F7akeXak9FV4bKGCWpSbXwAOvxUG%2FdyTIlrolm3xA%2Fbx&X-Amz-Signature=72abe18114ec5a86347aaf4ff435e5ef9405122cbaa8e5dcf764a62a3b0b2b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUAJHLM%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAywH1QOGjwa4wbx6RT7KaRZRxHu7%2BWbnENcPX%2B6rMGrAiEA8a14QilG6EB7%2FGH8YNRihRC7mHGfSxdfN7GRG303rGQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDELe6DQ4yhwS7s9rESrcA5bBc7iiv64tIVxNUgiPgm2XJ%2FI0V0Q1FH8pdluSk5EoPjOJnEmh9Yuc%2B7esfaL5cU7xNDT4Vm94n01rqeSTlEgrddRFsJoHPOUEOQp8LKiy2SvWo5bh4Hi5K31SMLg%2BVTcFpvnIjgKNTiVlxgFtC5x6X5gSu2saPJ5eRc9AIX3GkgSM4mupgQlYMBtwQx%2BjKwKzM%2FGjVwSN7BIKeoFSWb5ZDck1KysZ%2Bj530YIzII7TlHZ%2Bby%2BZMFtajYaDjhsuUelHKsgP2V8bMiXnKCTcs0t1H%2BHzdABsRE2KXYONCpeRisY%2BRYQ3L3GG%2BC0q1saamlBpTYz3pvKfK%2FMq9szyNXp41U%2FC5o%2FI%2FSt8H%2BN%2BC4bzcEwpu8CnGJRgbYHobGor36xWm1pLM7xEVUN9ir4%2BJ1JGGhxEHxzZVvUhJoQvtLyN9mSuySZoF3bLjMGuGx2EsRFBaPlGdY7v%2FVw8U6NkMiBg6w2nM5KnuuAumd8g%2FIep0ej0HVjqWXMCAZMNmKTvIqlIICVYumLXEMD%2FX4KqtSkJ6zc9HRgccvfh1%2BLcBPcpzUYWtIq5mU1NyS2GtSA5cCf9u1We4h%2BtKrd%2BjvJ8VBD9h8EJLHdEiZZw6RDzwy2J3KwwI1DCZGbACFuGMIjt2dMGOqUBMVUJIMQJOYWw53gzdURJoCxnKm9hKl3D66giAHrvZ02xZ2AtpjjvPkLZc3PUdmSgBr%2Bv8do%2BU5j9pOYfZUDtxOwcsGamsqZIE3OB1vgv%2FASrZu4UnWrre24kzqJSftLnBfP5uxD4rg85qcXEknG46Zt3mFIXvHR2tnYsDaBbQAWUHJ18%2F7akeXak9FV4bKGCWpSbXwAOvxUG%2FdyTIlrolm3xA%2Fbx&X-Amz-Signature=72b2acea6147675a138fb5bd7e7e6b159ff5696afbb3607f62fb3f5607070af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUAJHLM%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAywH1QOGjwa4wbx6RT7KaRZRxHu7%2BWbnENcPX%2B6rMGrAiEA8a14QilG6EB7%2FGH8YNRihRC7mHGfSxdfN7GRG303rGQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDELe6DQ4yhwS7s9rESrcA5bBc7iiv64tIVxNUgiPgm2XJ%2FI0V0Q1FH8pdluSk5EoPjOJnEmh9Yuc%2B7esfaL5cU7xNDT4Vm94n01rqeSTlEgrddRFsJoHPOUEOQp8LKiy2SvWo5bh4Hi5K31SMLg%2BVTcFpvnIjgKNTiVlxgFtC5x6X5gSu2saPJ5eRc9AIX3GkgSM4mupgQlYMBtwQx%2BjKwKzM%2FGjVwSN7BIKeoFSWb5ZDck1KysZ%2Bj530YIzII7TlHZ%2Bby%2BZMFtajYaDjhsuUelHKsgP2V8bMiXnKCTcs0t1H%2BHzdABsRE2KXYONCpeRisY%2BRYQ3L3GG%2BC0q1saamlBpTYz3pvKfK%2FMq9szyNXp41U%2FC5o%2FI%2FSt8H%2BN%2BC4bzcEwpu8CnGJRgbYHobGor36xWm1pLM7xEVUN9ir4%2BJ1JGGhxEHxzZVvUhJoQvtLyN9mSuySZoF3bLjMGuGx2EsRFBaPlGdY7v%2FVw8U6NkMiBg6w2nM5KnuuAumd8g%2FIep0ej0HVjqWXMCAZMNmKTvIqlIICVYumLXEMD%2FX4KqtSkJ6zc9HRgccvfh1%2BLcBPcpzUYWtIq5mU1NyS2GtSA5cCf9u1We4h%2BtKrd%2BjvJ8VBD9h8EJLHdEiZZw6RDzwy2J3KwwI1DCZGbACFuGMIjt2dMGOqUBMVUJIMQJOYWw53gzdURJoCxnKm9hKl3D66giAHrvZ02xZ2AtpjjvPkLZc3PUdmSgBr%2Bv8do%2BU5j9pOYfZUDtxOwcsGamsqZIE3OB1vgv%2FASrZu4UnWrre24kzqJSftLnBfP5uxD4rg85qcXEknG46Zt3mFIXvHR2tnYsDaBbQAWUHJ18%2F7akeXak9FV4bKGCWpSbXwAOvxUG%2FdyTIlrolm3xA%2Fbx&X-Amz-Signature=b531067991b58af13c9366fa10090a064c998720a285af24a053ba836629e657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUZV5BN7%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeJGer4e70ARyWxJBaBE2u%2BxedxrErFz8nFXSzqeul5wIhAONZAUVtZjriRNNvVTp2Fy2AD1Z8uoqENIaajDWSoYy4Kv8DCGIQABoMNjM3NDIzMTgzODA1IgwMOPnEpfoP4mfwNLsq3AN9WO%2ByYmTxvoEUbRuI%2FjkZCk9H9mkWHtc6eMgyTylD0me97e0n%2FDg80nn2nh%2B7upL%2BQDLl8JGrMzjRAG5dXjhq2u7QRPxEOWB5C1KhNoVKt93MgHBvSgmsoi%2BAvYAOFj1Q1tnc09yQrA9xuHcOf2PF7rgpHzY3KiOh8pO4eiVonJQ15X4VNapK6nacvQqLGQsuunsSgYBhZ1L4oAu5gSLWbX8KF8ItbWzxt%2F48i7AQ1GeQ7nMMTpK6Eqrh7KdahZAEhR0OUllIL5BITH%2FIhN07AA32SRcntPRhv%2FqWZbMhuFkuZ%2BGeii7Cflf8%2F4%2Bid9TzzJc5hHFRVnQn9XMwIk24e9LLilFhSLGupkvISLMROhXwCLyM%2FZWItjjdpKiWBj3io6kaPGVGwHfgFM7f%2BGsTMqWEgRzD0djAE6Tkb5gOJJr4%2BUoZ0f5rqy1YLG4d%2BpbRaD6rZ7pNGoZ4%2Bn64R4OISq982HRk5H%2FOc1Bsx9MJQPQ1cJqg7IXX5IFexx9MBEvDtkIiJ1Y%2BaWEa5y08chZ2pkQqu5CyRUYoNoet1graLyjgyDu%2BlrimuxuOIFTJHnX7OsigxWGS0OQ5p%2FWKSVOrJds1yTpJY4n4V0Y6E7%2B%2BOzPA25ZMcmsS5l7YszCa79nTBjqkAdHpl4bXZ0V5xga1OTd0A3AkubMzcaKpIZHF7JkbiTt3KBiiWTMtadkfvr07WdnlokW%2BaXeiE6rb%2Bn8FODQaAkK4yjFiCHTdSaBd14AUZzn1MQCqEvkhYOSRNkDrIXv%2BmYystEP%2BOW62hhhHBuo6%2BUxVmOouzFD%2F%2FIgf9DrZEgGMdyM6q5kzcdzgjgFdiOFCquJ52uK6nSpEbU6HdONI%2FyjSm9LZ&X-Amz-Signature=ac0985b7a1de6c31b7d21bec308758278af526b0fe9767725992d5c423de4e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUAJHLM%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAywH1QOGjwa4wbx6RT7KaRZRxHu7%2BWbnENcPX%2B6rMGrAiEA8a14QilG6EB7%2FGH8YNRihRC7mHGfSxdfN7GRG303rGQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDELe6DQ4yhwS7s9rESrcA5bBc7iiv64tIVxNUgiPgm2XJ%2FI0V0Q1FH8pdluSk5EoPjOJnEmh9Yuc%2B7esfaL5cU7xNDT4Vm94n01rqeSTlEgrddRFsJoHPOUEOQp8LKiy2SvWo5bh4Hi5K31SMLg%2BVTcFpvnIjgKNTiVlxgFtC5x6X5gSu2saPJ5eRc9AIX3GkgSM4mupgQlYMBtwQx%2BjKwKzM%2FGjVwSN7BIKeoFSWb5ZDck1KysZ%2Bj530YIzII7TlHZ%2Bby%2BZMFtajYaDjhsuUelHKsgP2V8bMiXnKCTcs0t1H%2BHzdABsRE2KXYONCpeRisY%2BRYQ3L3GG%2BC0q1saamlBpTYz3pvKfK%2FMq9szyNXp41U%2FC5o%2FI%2FSt8H%2BN%2BC4bzcEwpu8CnGJRgbYHobGor36xWm1pLM7xEVUN9ir4%2BJ1JGGhxEHxzZVvUhJoQvtLyN9mSuySZoF3bLjMGuGx2EsRFBaPlGdY7v%2FVw8U6NkMiBg6w2nM5KnuuAumd8g%2FIep0ej0HVjqWXMCAZMNmKTvIqlIICVYumLXEMD%2FX4KqtSkJ6zc9HRgccvfh1%2BLcBPcpzUYWtIq5mU1NyS2GtSA5cCf9u1We4h%2BtKrd%2BjvJ8VBD9h8EJLHdEiZZw6RDzwy2J3KwwI1DCZGbACFuGMIjt2dMGOqUBMVUJIMQJOYWw53gzdURJoCxnKm9hKl3D66giAHrvZ02xZ2AtpjjvPkLZc3PUdmSgBr%2Bv8do%2BU5j9pOYfZUDtxOwcsGamsqZIE3OB1vgv%2FASrZu4UnWrre24kzqJSftLnBfP5uxD4rg85qcXEknG46Zt3mFIXvHR2tnYsDaBbQAWUHJ18%2F7akeXak9FV4bKGCWpSbXwAOvxUG%2FdyTIlrolm3xA%2Fbx&X-Amz-Signature=4f533fd456f8f8f6412c1a3a1be2bec23a628f80c7cf08957d4995545de48bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUAJHLM%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAywH1QOGjwa4wbx6RT7KaRZRxHu7%2BWbnENcPX%2B6rMGrAiEA8a14QilG6EB7%2FGH8YNRihRC7mHGfSxdfN7GRG303rGQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDELe6DQ4yhwS7s9rESrcA5bBc7iiv64tIVxNUgiPgm2XJ%2FI0V0Q1FH8pdluSk5EoPjOJnEmh9Yuc%2B7esfaL5cU7xNDT4Vm94n01rqeSTlEgrddRFsJoHPOUEOQp8LKiy2SvWo5bh4Hi5K31SMLg%2BVTcFpvnIjgKNTiVlxgFtC5x6X5gSu2saPJ5eRc9AIX3GkgSM4mupgQlYMBtwQx%2BjKwKzM%2FGjVwSN7BIKeoFSWb5ZDck1KysZ%2Bj530YIzII7TlHZ%2Bby%2BZMFtajYaDjhsuUelHKsgP2V8bMiXnKCTcs0t1H%2BHzdABsRE2KXYONCpeRisY%2BRYQ3L3GG%2BC0q1saamlBpTYz3pvKfK%2FMq9szyNXp41U%2FC5o%2FI%2FSt8H%2BN%2BC4bzcEwpu8CnGJRgbYHobGor36xWm1pLM7xEVUN9ir4%2BJ1JGGhxEHxzZVvUhJoQvtLyN9mSuySZoF3bLjMGuGx2EsRFBaPlGdY7v%2FVw8U6NkMiBg6w2nM5KnuuAumd8g%2FIep0ej0HVjqWXMCAZMNmKTvIqlIICVYumLXEMD%2FX4KqtSkJ6zc9HRgccvfh1%2BLcBPcpzUYWtIq5mU1NyS2GtSA5cCf9u1We4h%2BtKrd%2BjvJ8VBD9h8EJLHdEiZZw6RDzwy2J3KwwI1DCZGbACFuGMIjt2dMGOqUBMVUJIMQJOYWw53gzdURJoCxnKm9hKl3D66giAHrvZ02xZ2AtpjjvPkLZc3PUdmSgBr%2Bv8do%2BU5j9pOYfZUDtxOwcsGamsqZIE3OB1vgv%2FASrZu4UnWrre24kzqJSftLnBfP5uxD4rg85qcXEknG46Zt3mFIXvHR2tnYsDaBbQAWUHJ18%2F7akeXak9FV4bKGCWpSbXwAOvxUG%2FdyTIlrolm3xA%2Fbx&X-Amz-Signature=78da0c1b4017c61ad2fe931ee25eb8529f8ce7e151c74a3f04c33f684cadb3b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUAJHLM%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAywH1QOGjwa4wbx6RT7KaRZRxHu7%2BWbnENcPX%2B6rMGrAiEA8a14QilG6EB7%2FGH8YNRihRC7mHGfSxdfN7GRG303rGQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDELe6DQ4yhwS7s9rESrcA5bBc7iiv64tIVxNUgiPgm2XJ%2FI0V0Q1FH8pdluSk5EoPjOJnEmh9Yuc%2B7esfaL5cU7xNDT4Vm94n01rqeSTlEgrddRFsJoHPOUEOQp8LKiy2SvWo5bh4Hi5K31SMLg%2BVTcFpvnIjgKNTiVlxgFtC5x6X5gSu2saPJ5eRc9AIX3GkgSM4mupgQlYMBtwQx%2BjKwKzM%2FGjVwSN7BIKeoFSWb5ZDck1KysZ%2Bj530YIzII7TlHZ%2Bby%2BZMFtajYaDjhsuUelHKsgP2V8bMiXnKCTcs0t1H%2BHzdABsRE2KXYONCpeRisY%2BRYQ3L3GG%2BC0q1saamlBpTYz3pvKfK%2FMq9szyNXp41U%2FC5o%2FI%2FSt8H%2BN%2BC4bzcEwpu8CnGJRgbYHobGor36xWm1pLM7xEVUN9ir4%2BJ1JGGhxEHxzZVvUhJoQvtLyN9mSuySZoF3bLjMGuGx2EsRFBaPlGdY7v%2FVw8U6NkMiBg6w2nM5KnuuAumd8g%2FIep0ej0HVjqWXMCAZMNmKTvIqlIICVYumLXEMD%2FX4KqtSkJ6zc9HRgccvfh1%2BLcBPcpzUYWtIq5mU1NyS2GtSA5cCf9u1We4h%2BtKrd%2BjvJ8VBD9h8EJLHdEiZZw6RDzwy2J3KwwI1DCZGbACFuGMIjt2dMGOqUBMVUJIMQJOYWw53gzdURJoCxnKm9hKl3D66giAHrvZ02xZ2AtpjjvPkLZc3PUdmSgBr%2Bv8do%2BU5j9pOYfZUDtxOwcsGamsqZIE3OB1vgv%2FASrZu4UnWrre24kzqJSftLnBfP5uxD4rg85qcXEknG46Zt3mFIXvHR2tnYsDaBbQAWUHJ18%2F7akeXak9FV4bKGCWpSbXwAOvxUG%2FdyTIlrolm3xA%2Fbx&X-Amz-Signature=72b2acea6147675a138fb5bd7e7e6b159ff5696afbb3607f62fb3f5607070af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUAJHLM%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAywH1QOGjwa4wbx6RT7KaRZRxHu7%2BWbnENcPX%2B6rMGrAiEA8a14QilG6EB7%2FGH8YNRihRC7mHGfSxdfN7GRG303rGQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDELe6DQ4yhwS7s9rESrcA5bBc7iiv64tIVxNUgiPgm2XJ%2FI0V0Q1FH8pdluSk5EoPjOJnEmh9Yuc%2B7esfaL5cU7xNDT4Vm94n01rqeSTlEgrddRFsJoHPOUEOQp8LKiy2SvWo5bh4Hi5K31SMLg%2BVTcFpvnIjgKNTiVlxgFtC5x6X5gSu2saPJ5eRc9AIX3GkgSM4mupgQlYMBtwQx%2BjKwKzM%2FGjVwSN7BIKeoFSWb5ZDck1KysZ%2Bj530YIzII7TlHZ%2Bby%2BZMFtajYaDjhsuUelHKsgP2V8bMiXnKCTcs0t1H%2BHzdABsRE2KXYONCpeRisY%2BRYQ3L3GG%2BC0q1saamlBpTYz3pvKfK%2FMq9szyNXp41U%2FC5o%2FI%2FSt8H%2BN%2BC4bzcEwpu8CnGJRgbYHobGor36xWm1pLM7xEVUN9ir4%2BJ1JGGhxEHxzZVvUhJoQvtLyN9mSuySZoF3bLjMGuGx2EsRFBaPlGdY7v%2FVw8U6NkMiBg6w2nM5KnuuAumd8g%2FIep0ej0HVjqWXMCAZMNmKTvIqlIICVYumLXEMD%2FX4KqtSkJ6zc9HRgccvfh1%2BLcBPcpzUYWtIq5mU1NyS2GtSA5cCf9u1We4h%2BtKrd%2BjvJ8VBD9h8EJLHdEiZZw6RDzwy2J3KwwI1DCZGbACFuGMIjt2dMGOqUBMVUJIMQJOYWw53gzdURJoCxnKm9hKl3D66giAHrvZ02xZ2AtpjjvPkLZc3PUdmSgBr%2Bv8do%2BU5j9pOYfZUDtxOwcsGamsqZIE3OB1vgv%2FASrZu4UnWrre24kzqJSftLnBfP5uxD4rg85qcXEknG46Zt3mFIXvHR2tnYsDaBbQAWUHJ18%2F7akeXak9FV4bKGCWpSbXwAOvxUG%2FdyTIlrolm3xA%2Fbx&X-Amz-Signature=fc17a9e4e474702a6feea451c6ec524381dc599c5540c164a03f565fd93295eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUAJHLM%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAywH1QOGjwa4wbx6RT7KaRZRxHu7%2BWbnENcPX%2B6rMGrAiEA8a14QilG6EB7%2FGH8YNRihRC7mHGfSxdfN7GRG303rGQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDELe6DQ4yhwS7s9rESrcA5bBc7iiv64tIVxNUgiPgm2XJ%2FI0V0Q1FH8pdluSk5EoPjOJnEmh9Yuc%2B7esfaL5cU7xNDT4Vm94n01rqeSTlEgrddRFsJoHPOUEOQp8LKiy2SvWo5bh4Hi5K31SMLg%2BVTcFpvnIjgKNTiVlxgFtC5x6X5gSu2saPJ5eRc9AIX3GkgSM4mupgQlYMBtwQx%2BjKwKzM%2FGjVwSN7BIKeoFSWb5ZDck1KysZ%2Bj530YIzII7TlHZ%2Bby%2BZMFtajYaDjhsuUelHKsgP2V8bMiXnKCTcs0t1H%2BHzdABsRE2KXYONCpeRisY%2BRYQ3L3GG%2BC0q1saamlBpTYz3pvKfK%2FMq9szyNXp41U%2FC5o%2FI%2FSt8H%2BN%2BC4bzcEwpu8CnGJRgbYHobGor36xWm1pLM7xEVUN9ir4%2BJ1JGGhxEHxzZVvUhJoQvtLyN9mSuySZoF3bLjMGuGx2EsRFBaPlGdY7v%2FVw8U6NkMiBg6w2nM5KnuuAumd8g%2FIep0ej0HVjqWXMCAZMNmKTvIqlIICVYumLXEMD%2FX4KqtSkJ6zc9HRgccvfh1%2BLcBPcpzUYWtIq5mU1NyS2GtSA5cCf9u1We4h%2BtKrd%2BjvJ8VBD9h8EJLHdEiZZw6RDzwy2J3KwwI1DCZGbACFuGMIjt2dMGOqUBMVUJIMQJOYWw53gzdURJoCxnKm9hKl3D66giAHrvZ02xZ2AtpjjvPkLZc3PUdmSgBr%2Bv8do%2BU5j9pOYfZUDtxOwcsGamsqZIE3OB1vgv%2FASrZu4UnWrre24kzqJSftLnBfP5uxD4rg85qcXEknG46Zt3mFIXvHR2tnYsDaBbQAWUHJ18%2F7akeXak9FV4bKGCWpSbXwAOvxUG%2FdyTIlrolm3xA%2Fbx&X-Amz-Signature=a9422377a484d4bf9735bda3c8fb3ef95fa76ae0ad60ac7423e789229a1f75fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUAJHLM%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAywH1QOGjwa4wbx6RT7KaRZRxHu7%2BWbnENcPX%2B6rMGrAiEA8a14QilG6EB7%2FGH8YNRihRC7mHGfSxdfN7GRG303rGQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDELe6DQ4yhwS7s9rESrcA5bBc7iiv64tIVxNUgiPgm2XJ%2FI0V0Q1FH8pdluSk5EoPjOJnEmh9Yuc%2B7esfaL5cU7xNDT4Vm94n01rqeSTlEgrddRFsJoHPOUEOQp8LKiy2SvWo5bh4Hi5K31SMLg%2BVTcFpvnIjgKNTiVlxgFtC5x6X5gSu2saPJ5eRc9AIX3GkgSM4mupgQlYMBtwQx%2BjKwKzM%2FGjVwSN7BIKeoFSWb5ZDck1KysZ%2Bj530YIzII7TlHZ%2Bby%2BZMFtajYaDjhsuUelHKsgP2V8bMiXnKCTcs0t1H%2BHzdABsRE2KXYONCpeRisY%2BRYQ3L3GG%2BC0q1saamlBpTYz3pvKfK%2FMq9szyNXp41U%2FC5o%2FI%2FSt8H%2BN%2BC4bzcEwpu8CnGJRgbYHobGor36xWm1pLM7xEVUN9ir4%2BJ1JGGhxEHxzZVvUhJoQvtLyN9mSuySZoF3bLjMGuGx2EsRFBaPlGdY7v%2FVw8U6NkMiBg6w2nM5KnuuAumd8g%2FIep0ej0HVjqWXMCAZMNmKTvIqlIICVYumLXEMD%2FX4KqtSkJ6zc9HRgccvfh1%2BLcBPcpzUYWtIq5mU1NyS2GtSA5cCf9u1We4h%2BtKrd%2BjvJ8VBD9h8EJLHdEiZZw6RDzwy2J3KwwI1DCZGbACFuGMIjt2dMGOqUBMVUJIMQJOYWw53gzdURJoCxnKm9hKl3D66giAHrvZ02xZ2AtpjjvPkLZc3PUdmSgBr%2Bv8do%2BU5j9pOYfZUDtxOwcsGamsqZIE3OB1vgv%2FASrZu4UnWrre24kzqJSftLnBfP5uxD4rg85qcXEknG46Zt3mFIXvHR2tnYsDaBbQAWUHJ18%2F7akeXak9FV4bKGCWpSbXwAOvxUG%2FdyTIlrolm3xA%2Fbx&X-Amz-Signature=90032041792d3b1a4773b6e445296df74c956371a53153de7436b74f0e7d17b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


