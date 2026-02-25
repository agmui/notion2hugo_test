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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XE5EN4%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAb%2BF6JGnStChQZP%2FnLpKytwWEojayXjeSogFA%2B9nFF7AiBa4kMA89lJEjRlcSNUtZAnVSVvnTnklPu4aiNwj7GCxCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM27QW%2BQuC89mfPL7qKtwDz7KCcJNeGu4ad1Wp1%2FOpQGbjBjlPgM9G4pNg%2FNfu%2B0J%2FOHmXHnjmPA0rGynS7Ogs1OsTqUL9f3TmPl3KEzQeyMlKK7ly3eXNRH1%2F33TsKZqEZpJoy0i6EPFcB%2FIy9ZfaiqHwoYguZesvil3IGkd9aBpszWkCPKclpsaggs3lSJlbMPaBgY1fGzi%2Fl0MpjG8GZgincfaha6mNnEpi0qaChnYI32OT6Ue6FQH%2BcHnRzgizkQ%2FLmTjdoAXHejaAi0wlF9EAiEkEZso1X97xSDLhAhNGvDNmDqiMkynrW10CjPYUUTa%2Fo5yq44AMjcTq11OOqOPc797pZ%2F89GXa43AAlsyXKpsp2dO3DkYnC6Mwyu1JX8dy7RCNNNfeQ2tWzRkypIEF7WtgMt%2B1uSYqFn3GWMu%2BI0m6fSob2QfzrDzY%2B1QWaL6%2B7BnVw2PcWMIpJJlwl6SdvzZFQLt9kfJr6bS4c3N5tQhYQA7dpElaTXCsxd7D6Z0dOEjyQeCabxD4aJzcOE4%2ByF01kWfHWTlLLCu7PKmERLDUXt4RNiTttnVrjkeCLMBtjMGK2eyH7KohK1dLjU8%2FMj8CtN4s8mJAaWMe8Mg%2Fn140u%2B2E1GE%2Fzt%2FIenjMWbap8w89hr7zWcnswk4X5zAY6pgHFLmK7Dx2ttIrOydLUMwKfYsPfV2egGECFrvMR2VIrxAso5II931nwW1JC5%2BbOXoHVUYBJ0iCGvuyoF4R8r5evErtSAbTYRkhNEYYyfj%2FqgJ9B6JtD4mPE%2FY4jvsR9IEsfaWxB6VCxKD2kWUymOaujqM5FodrdYHDKD5epfwLQj5hYib4lzaIBoHRpkhS%2FqaLbdlbIVPHre%2BUO1tjCIh%2Fy%2FnB2ELFv&X-Amz-Signature=6fe4209b76271f20b587e66543f183c4c9f412cbbf38ef3498de4aa05a41ad11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XE5EN4%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAb%2BF6JGnStChQZP%2FnLpKytwWEojayXjeSogFA%2B9nFF7AiBa4kMA89lJEjRlcSNUtZAnVSVvnTnklPu4aiNwj7GCxCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM27QW%2BQuC89mfPL7qKtwDz7KCcJNeGu4ad1Wp1%2FOpQGbjBjlPgM9G4pNg%2FNfu%2B0J%2FOHmXHnjmPA0rGynS7Ogs1OsTqUL9f3TmPl3KEzQeyMlKK7ly3eXNRH1%2F33TsKZqEZpJoy0i6EPFcB%2FIy9ZfaiqHwoYguZesvil3IGkd9aBpszWkCPKclpsaggs3lSJlbMPaBgY1fGzi%2Fl0MpjG8GZgincfaha6mNnEpi0qaChnYI32OT6Ue6FQH%2BcHnRzgizkQ%2FLmTjdoAXHejaAi0wlF9EAiEkEZso1X97xSDLhAhNGvDNmDqiMkynrW10CjPYUUTa%2Fo5yq44AMjcTq11OOqOPc797pZ%2F89GXa43AAlsyXKpsp2dO3DkYnC6Mwyu1JX8dy7RCNNNfeQ2tWzRkypIEF7WtgMt%2B1uSYqFn3GWMu%2BI0m6fSob2QfzrDzY%2B1QWaL6%2B7BnVw2PcWMIpJJlwl6SdvzZFQLt9kfJr6bS4c3N5tQhYQA7dpElaTXCsxd7D6Z0dOEjyQeCabxD4aJzcOE4%2ByF01kWfHWTlLLCu7PKmERLDUXt4RNiTttnVrjkeCLMBtjMGK2eyH7KohK1dLjU8%2FMj8CtN4s8mJAaWMe8Mg%2Fn140u%2B2E1GE%2Fzt%2FIenjMWbap8w89hr7zWcnswk4X5zAY6pgHFLmK7Dx2ttIrOydLUMwKfYsPfV2egGECFrvMR2VIrxAso5II931nwW1JC5%2BbOXoHVUYBJ0iCGvuyoF4R8r5evErtSAbTYRkhNEYYyfj%2FqgJ9B6JtD4mPE%2FY4jvsR9IEsfaWxB6VCxKD2kWUymOaujqM5FodrdYHDKD5epfwLQj5hYib4lzaIBoHRpkhS%2FqaLbdlbIVPHre%2BUO1tjCIh%2Fy%2FnB2ELFv&X-Amz-Signature=26f24561098928ae044b1c6816fc7e267673619840046818822103bf8b70e706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XE5EN4%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAb%2BF6JGnStChQZP%2FnLpKytwWEojayXjeSogFA%2B9nFF7AiBa4kMA89lJEjRlcSNUtZAnVSVvnTnklPu4aiNwj7GCxCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM27QW%2BQuC89mfPL7qKtwDz7KCcJNeGu4ad1Wp1%2FOpQGbjBjlPgM9G4pNg%2FNfu%2B0J%2FOHmXHnjmPA0rGynS7Ogs1OsTqUL9f3TmPl3KEzQeyMlKK7ly3eXNRH1%2F33TsKZqEZpJoy0i6EPFcB%2FIy9ZfaiqHwoYguZesvil3IGkd9aBpszWkCPKclpsaggs3lSJlbMPaBgY1fGzi%2Fl0MpjG8GZgincfaha6mNnEpi0qaChnYI32OT6Ue6FQH%2BcHnRzgizkQ%2FLmTjdoAXHejaAi0wlF9EAiEkEZso1X97xSDLhAhNGvDNmDqiMkynrW10CjPYUUTa%2Fo5yq44AMjcTq11OOqOPc797pZ%2F89GXa43AAlsyXKpsp2dO3DkYnC6Mwyu1JX8dy7RCNNNfeQ2tWzRkypIEF7WtgMt%2B1uSYqFn3GWMu%2BI0m6fSob2QfzrDzY%2B1QWaL6%2B7BnVw2PcWMIpJJlwl6SdvzZFQLt9kfJr6bS4c3N5tQhYQA7dpElaTXCsxd7D6Z0dOEjyQeCabxD4aJzcOE4%2ByF01kWfHWTlLLCu7PKmERLDUXt4RNiTttnVrjkeCLMBtjMGK2eyH7KohK1dLjU8%2FMj8CtN4s8mJAaWMe8Mg%2Fn140u%2B2E1GE%2Fzt%2FIenjMWbap8w89hr7zWcnswk4X5zAY6pgHFLmK7Dx2ttIrOydLUMwKfYsPfV2egGECFrvMR2VIrxAso5II931nwW1JC5%2BbOXoHVUYBJ0iCGvuyoF4R8r5evErtSAbTYRkhNEYYyfj%2FqgJ9B6JtD4mPE%2FY4jvsR9IEsfaWxB6VCxKD2kWUymOaujqM5FodrdYHDKD5epfwLQj5hYib4lzaIBoHRpkhS%2FqaLbdlbIVPHre%2BUO1tjCIh%2Fy%2FnB2ELFv&X-Amz-Signature=c8266056459cc5592f254d1e9b8b02f7779fddfb201342bad0fd0311f0fb2207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XE5EN4%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAb%2BF6JGnStChQZP%2FnLpKytwWEojayXjeSogFA%2B9nFF7AiBa4kMA89lJEjRlcSNUtZAnVSVvnTnklPu4aiNwj7GCxCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM27QW%2BQuC89mfPL7qKtwDz7KCcJNeGu4ad1Wp1%2FOpQGbjBjlPgM9G4pNg%2FNfu%2B0J%2FOHmXHnjmPA0rGynS7Ogs1OsTqUL9f3TmPl3KEzQeyMlKK7ly3eXNRH1%2F33TsKZqEZpJoy0i6EPFcB%2FIy9ZfaiqHwoYguZesvil3IGkd9aBpszWkCPKclpsaggs3lSJlbMPaBgY1fGzi%2Fl0MpjG8GZgincfaha6mNnEpi0qaChnYI32OT6Ue6FQH%2BcHnRzgizkQ%2FLmTjdoAXHejaAi0wlF9EAiEkEZso1X97xSDLhAhNGvDNmDqiMkynrW10CjPYUUTa%2Fo5yq44AMjcTq11OOqOPc797pZ%2F89GXa43AAlsyXKpsp2dO3DkYnC6Mwyu1JX8dy7RCNNNfeQ2tWzRkypIEF7WtgMt%2B1uSYqFn3GWMu%2BI0m6fSob2QfzrDzY%2B1QWaL6%2B7BnVw2PcWMIpJJlwl6SdvzZFQLt9kfJr6bS4c3N5tQhYQA7dpElaTXCsxd7D6Z0dOEjyQeCabxD4aJzcOE4%2ByF01kWfHWTlLLCu7PKmERLDUXt4RNiTttnVrjkeCLMBtjMGK2eyH7KohK1dLjU8%2FMj8CtN4s8mJAaWMe8Mg%2Fn140u%2B2E1GE%2Fzt%2FIenjMWbap8w89hr7zWcnswk4X5zAY6pgHFLmK7Dx2ttIrOydLUMwKfYsPfV2egGECFrvMR2VIrxAso5II931nwW1JC5%2BbOXoHVUYBJ0iCGvuyoF4R8r5evErtSAbTYRkhNEYYyfj%2FqgJ9B6JtD4mPE%2FY4jvsR9IEsfaWxB6VCxKD2kWUymOaujqM5FodrdYHDKD5epfwLQj5hYib4lzaIBoHRpkhS%2FqaLbdlbIVPHre%2BUO1tjCIh%2Fy%2FnB2ELFv&X-Amz-Signature=11ba02f2c2edf7d0449cc5a2c6a103b9da640adcf01204263c6fdd3a2e0b9e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XE5EN4%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAb%2BF6JGnStChQZP%2FnLpKytwWEojayXjeSogFA%2B9nFF7AiBa4kMA89lJEjRlcSNUtZAnVSVvnTnklPu4aiNwj7GCxCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM27QW%2BQuC89mfPL7qKtwDz7KCcJNeGu4ad1Wp1%2FOpQGbjBjlPgM9G4pNg%2FNfu%2B0J%2FOHmXHnjmPA0rGynS7Ogs1OsTqUL9f3TmPl3KEzQeyMlKK7ly3eXNRH1%2F33TsKZqEZpJoy0i6EPFcB%2FIy9ZfaiqHwoYguZesvil3IGkd9aBpszWkCPKclpsaggs3lSJlbMPaBgY1fGzi%2Fl0MpjG8GZgincfaha6mNnEpi0qaChnYI32OT6Ue6FQH%2BcHnRzgizkQ%2FLmTjdoAXHejaAi0wlF9EAiEkEZso1X97xSDLhAhNGvDNmDqiMkynrW10CjPYUUTa%2Fo5yq44AMjcTq11OOqOPc797pZ%2F89GXa43AAlsyXKpsp2dO3DkYnC6Mwyu1JX8dy7RCNNNfeQ2tWzRkypIEF7WtgMt%2B1uSYqFn3GWMu%2BI0m6fSob2QfzrDzY%2B1QWaL6%2B7BnVw2PcWMIpJJlwl6SdvzZFQLt9kfJr6bS4c3N5tQhYQA7dpElaTXCsxd7D6Z0dOEjyQeCabxD4aJzcOE4%2ByF01kWfHWTlLLCu7PKmERLDUXt4RNiTttnVrjkeCLMBtjMGK2eyH7KohK1dLjU8%2FMj8CtN4s8mJAaWMe8Mg%2Fn140u%2B2E1GE%2Fzt%2FIenjMWbap8w89hr7zWcnswk4X5zAY6pgHFLmK7Dx2ttIrOydLUMwKfYsPfV2egGECFrvMR2VIrxAso5II931nwW1JC5%2BbOXoHVUYBJ0iCGvuyoF4R8r5evErtSAbTYRkhNEYYyfj%2FqgJ9B6JtD4mPE%2FY4jvsR9IEsfaWxB6VCxKD2kWUymOaujqM5FodrdYHDKD5epfwLQj5hYib4lzaIBoHRpkhS%2FqaLbdlbIVPHre%2BUO1tjCIh%2Fy%2FnB2ELFv&X-Amz-Signature=1d398c26983fbcbafbe6adbf659df2eaca8da33b4032c0018505adc94168fc16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XE5EN4%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAb%2BF6JGnStChQZP%2FnLpKytwWEojayXjeSogFA%2B9nFF7AiBa4kMA89lJEjRlcSNUtZAnVSVvnTnklPu4aiNwj7GCxCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM27QW%2BQuC89mfPL7qKtwDz7KCcJNeGu4ad1Wp1%2FOpQGbjBjlPgM9G4pNg%2FNfu%2B0J%2FOHmXHnjmPA0rGynS7Ogs1OsTqUL9f3TmPl3KEzQeyMlKK7ly3eXNRH1%2F33TsKZqEZpJoy0i6EPFcB%2FIy9ZfaiqHwoYguZesvil3IGkd9aBpszWkCPKclpsaggs3lSJlbMPaBgY1fGzi%2Fl0MpjG8GZgincfaha6mNnEpi0qaChnYI32OT6Ue6FQH%2BcHnRzgizkQ%2FLmTjdoAXHejaAi0wlF9EAiEkEZso1X97xSDLhAhNGvDNmDqiMkynrW10CjPYUUTa%2Fo5yq44AMjcTq11OOqOPc797pZ%2F89GXa43AAlsyXKpsp2dO3DkYnC6Mwyu1JX8dy7RCNNNfeQ2tWzRkypIEF7WtgMt%2B1uSYqFn3GWMu%2BI0m6fSob2QfzrDzY%2B1QWaL6%2B7BnVw2PcWMIpJJlwl6SdvzZFQLt9kfJr6bS4c3N5tQhYQA7dpElaTXCsxd7D6Z0dOEjyQeCabxD4aJzcOE4%2ByF01kWfHWTlLLCu7PKmERLDUXt4RNiTttnVrjkeCLMBtjMGK2eyH7KohK1dLjU8%2FMj8CtN4s8mJAaWMe8Mg%2Fn140u%2B2E1GE%2Fzt%2FIenjMWbap8w89hr7zWcnswk4X5zAY6pgHFLmK7Dx2ttIrOydLUMwKfYsPfV2egGECFrvMR2VIrxAso5II931nwW1JC5%2BbOXoHVUYBJ0iCGvuyoF4R8r5evErtSAbTYRkhNEYYyfj%2FqgJ9B6JtD4mPE%2FY4jvsR9IEsfaWxB6VCxKD2kWUymOaujqM5FodrdYHDKD5epfwLQj5hYib4lzaIBoHRpkhS%2FqaLbdlbIVPHre%2BUO1tjCIh%2Fy%2FnB2ELFv&X-Amz-Signature=fa330a5ef13c2c88c33d57c3751181f6f863264aaccccc921cc17d0e2cea7817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XE5EN4%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAb%2BF6JGnStChQZP%2FnLpKytwWEojayXjeSogFA%2B9nFF7AiBa4kMA89lJEjRlcSNUtZAnVSVvnTnklPu4aiNwj7GCxCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM27QW%2BQuC89mfPL7qKtwDz7KCcJNeGu4ad1Wp1%2FOpQGbjBjlPgM9G4pNg%2FNfu%2B0J%2FOHmXHnjmPA0rGynS7Ogs1OsTqUL9f3TmPl3KEzQeyMlKK7ly3eXNRH1%2F33TsKZqEZpJoy0i6EPFcB%2FIy9ZfaiqHwoYguZesvil3IGkd9aBpszWkCPKclpsaggs3lSJlbMPaBgY1fGzi%2Fl0MpjG8GZgincfaha6mNnEpi0qaChnYI32OT6Ue6FQH%2BcHnRzgizkQ%2FLmTjdoAXHejaAi0wlF9EAiEkEZso1X97xSDLhAhNGvDNmDqiMkynrW10CjPYUUTa%2Fo5yq44AMjcTq11OOqOPc797pZ%2F89GXa43AAlsyXKpsp2dO3DkYnC6Mwyu1JX8dy7RCNNNfeQ2tWzRkypIEF7WtgMt%2B1uSYqFn3GWMu%2BI0m6fSob2QfzrDzY%2B1QWaL6%2B7BnVw2PcWMIpJJlwl6SdvzZFQLt9kfJr6bS4c3N5tQhYQA7dpElaTXCsxd7D6Z0dOEjyQeCabxD4aJzcOE4%2ByF01kWfHWTlLLCu7PKmERLDUXt4RNiTttnVrjkeCLMBtjMGK2eyH7KohK1dLjU8%2FMj8CtN4s8mJAaWMe8Mg%2Fn140u%2B2E1GE%2Fzt%2FIenjMWbap8w89hr7zWcnswk4X5zAY6pgHFLmK7Dx2ttIrOydLUMwKfYsPfV2egGECFrvMR2VIrxAso5II931nwW1JC5%2BbOXoHVUYBJ0iCGvuyoF4R8r5evErtSAbTYRkhNEYYyfj%2FqgJ9B6JtD4mPE%2FY4jvsR9IEsfaWxB6VCxKD2kWUymOaujqM5FodrdYHDKD5epfwLQj5hYib4lzaIBoHRpkhS%2FqaLbdlbIVPHre%2BUO1tjCIh%2Fy%2FnB2ELFv&X-Amz-Signature=7f1685d13de09447507960d87716536027aa8194db5533e1eff35bbd1748eaf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XE5EN4%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAb%2BF6JGnStChQZP%2FnLpKytwWEojayXjeSogFA%2B9nFF7AiBa4kMA89lJEjRlcSNUtZAnVSVvnTnklPu4aiNwj7GCxCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM27QW%2BQuC89mfPL7qKtwDz7KCcJNeGu4ad1Wp1%2FOpQGbjBjlPgM9G4pNg%2FNfu%2B0J%2FOHmXHnjmPA0rGynS7Ogs1OsTqUL9f3TmPl3KEzQeyMlKK7ly3eXNRH1%2F33TsKZqEZpJoy0i6EPFcB%2FIy9ZfaiqHwoYguZesvil3IGkd9aBpszWkCPKclpsaggs3lSJlbMPaBgY1fGzi%2Fl0MpjG8GZgincfaha6mNnEpi0qaChnYI32OT6Ue6FQH%2BcHnRzgizkQ%2FLmTjdoAXHejaAi0wlF9EAiEkEZso1X97xSDLhAhNGvDNmDqiMkynrW10CjPYUUTa%2Fo5yq44AMjcTq11OOqOPc797pZ%2F89GXa43AAlsyXKpsp2dO3DkYnC6Mwyu1JX8dy7RCNNNfeQ2tWzRkypIEF7WtgMt%2B1uSYqFn3GWMu%2BI0m6fSob2QfzrDzY%2B1QWaL6%2B7BnVw2PcWMIpJJlwl6SdvzZFQLt9kfJr6bS4c3N5tQhYQA7dpElaTXCsxd7D6Z0dOEjyQeCabxD4aJzcOE4%2ByF01kWfHWTlLLCu7PKmERLDUXt4RNiTttnVrjkeCLMBtjMGK2eyH7KohK1dLjU8%2FMj8CtN4s8mJAaWMe8Mg%2Fn140u%2B2E1GE%2Fzt%2FIenjMWbap8w89hr7zWcnswk4X5zAY6pgHFLmK7Dx2ttIrOydLUMwKfYsPfV2egGECFrvMR2VIrxAso5II931nwW1JC5%2BbOXoHVUYBJ0iCGvuyoF4R8r5evErtSAbTYRkhNEYYyfj%2FqgJ9B6JtD4mPE%2FY4jvsR9IEsfaWxB6VCxKD2kWUymOaujqM5FodrdYHDKD5epfwLQj5hYib4lzaIBoHRpkhS%2FqaLbdlbIVPHre%2BUO1tjCIh%2Fy%2FnB2ELFv&X-Amz-Signature=5d8a4418f895adf53710f030243c4a406e86da0b6ff3abb3a0127ded15527e24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XE5EN4%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAb%2BF6JGnStChQZP%2FnLpKytwWEojayXjeSogFA%2B9nFF7AiBa4kMA89lJEjRlcSNUtZAnVSVvnTnklPu4aiNwj7GCxCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM27QW%2BQuC89mfPL7qKtwDz7KCcJNeGu4ad1Wp1%2FOpQGbjBjlPgM9G4pNg%2FNfu%2B0J%2FOHmXHnjmPA0rGynS7Ogs1OsTqUL9f3TmPl3KEzQeyMlKK7ly3eXNRH1%2F33TsKZqEZpJoy0i6EPFcB%2FIy9ZfaiqHwoYguZesvil3IGkd9aBpszWkCPKclpsaggs3lSJlbMPaBgY1fGzi%2Fl0MpjG8GZgincfaha6mNnEpi0qaChnYI32OT6Ue6FQH%2BcHnRzgizkQ%2FLmTjdoAXHejaAi0wlF9EAiEkEZso1X97xSDLhAhNGvDNmDqiMkynrW10CjPYUUTa%2Fo5yq44AMjcTq11OOqOPc797pZ%2F89GXa43AAlsyXKpsp2dO3DkYnC6Mwyu1JX8dy7RCNNNfeQ2tWzRkypIEF7WtgMt%2B1uSYqFn3GWMu%2BI0m6fSob2QfzrDzY%2B1QWaL6%2B7BnVw2PcWMIpJJlwl6SdvzZFQLt9kfJr6bS4c3N5tQhYQA7dpElaTXCsxd7D6Z0dOEjyQeCabxD4aJzcOE4%2ByF01kWfHWTlLLCu7PKmERLDUXt4RNiTttnVrjkeCLMBtjMGK2eyH7KohK1dLjU8%2FMj8CtN4s8mJAaWMe8Mg%2Fn140u%2B2E1GE%2Fzt%2FIenjMWbap8w89hr7zWcnswk4X5zAY6pgHFLmK7Dx2ttIrOydLUMwKfYsPfV2egGECFrvMR2VIrxAso5II931nwW1JC5%2BbOXoHVUYBJ0iCGvuyoF4R8r5evErtSAbTYRkhNEYYyfj%2FqgJ9B6JtD4mPE%2FY4jvsR9IEsfaWxB6VCxKD2kWUymOaujqM5FodrdYHDKD5epfwLQj5hYib4lzaIBoHRpkhS%2FqaLbdlbIVPHre%2BUO1tjCIh%2Fy%2FnB2ELFv&X-Amz-Signature=53135fb52fd71b62ddf288f1205af6ca3e1ea3cb702143a52a606947a040d939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XE5EN4%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAb%2BF6JGnStChQZP%2FnLpKytwWEojayXjeSogFA%2B9nFF7AiBa4kMA89lJEjRlcSNUtZAnVSVvnTnklPu4aiNwj7GCxCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM27QW%2BQuC89mfPL7qKtwDz7KCcJNeGu4ad1Wp1%2FOpQGbjBjlPgM9G4pNg%2FNfu%2B0J%2FOHmXHnjmPA0rGynS7Ogs1OsTqUL9f3TmPl3KEzQeyMlKK7ly3eXNRH1%2F33TsKZqEZpJoy0i6EPFcB%2FIy9ZfaiqHwoYguZesvil3IGkd9aBpszWkCPKclpsaggs3lSJlbMPaBgY1fGzi%2Fl0MpjG8GZgincfaha6mNnEpi0qaChnYI32OT6Ue6FQH%2BcHnRzgizkQ%2FLmTjdoAXHejaAi0wlF9EAiEkEZso1X97xSDLhAhNGvDNmDqiMkynrW10CjPYUUTa%2Fo5yq44AMjcTq11OOqOPc797pZ%2F89GXa43AAlsyXKpsp2dO3DkYnC6Mwyu1JX8dy7RCNNNfeQ2tWzRkypIEF7WtgMt%2B1uSYqFn3GWMu%2BI0m6fSob2QfzrDzY%2B1QWaL6%2B7BnVw2PcWMIpJJlwl6SdvzZFQLt9kfJr6bS4c3N5tQhYQA7dpElaTXCsxd7D6Z0dOEjyQeCabxD4aJzcOE4%2ByF01kWfHWTlLLCu7PKmERLDUXt4RNiTttnVrjkeCLMBtjMGK2eyH7KohK1dLjU8%2FMj8CtN4s8mJAaWMe8Mg%2Fn140u%2B2E1GE%2Fzt%2FIenjMWbap8w89hr7zWcnswk4X5zAY6pgHFLmK7Dx2ttIrOydLUMwKfYsPfV2egGECFrvMR2VIrxAso5II931nwW1JC5%2BbOXoHVUYBJ0iCGvuyoF4R8r5evErtSAbTYRkhNEYYyfj%2FqgJ9B6JtD4mPE%2FY4jvsR9IEsfaWxB6VCxKD2kWUymOaujqM5FodrdYHDKD5epfwLQj5hYib4lzaIBoHRpkhS%2FqaLbdlbIVPHre%2BUO1tjCIh%2Fy%2FnB2ELFv&X-Amz-Signature=5024507b09b7532c1c312b9252d10fa9fc00019c80171f4ae3ab8e3846149b1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTMEQDU5%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIBVhhf11PF9IPTh8Cp5ZK6PkRoFwRdoI%2BeGRdJ4pVfljAiEAjlLDqwaAE6kKkSj%2F5ScEI2tbIVcDVID1VWVAHLFxvdgq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDDFG1BnNT3iVoULsQyrcA4DNgvZ8%2F3BelvVEk1qiHnTxxP%2BHrBfQxvxxUFHA6uOxoQzaD%2BbvirBBPiIkN3CrjRQig6BirG0SlAfw5V%2B%2F7pxTbE2%2BvJqxX5slhZ4rYN3aYDmwhbiYqgiiWzpa4O7GTjuSGyKE1P1KmjMOt9%2FDenmMfwFaiMVeQ57epiVreQ5%2BdZpJQx1ZlJOSjQDscDJPw0apLthVHt2eJ2%2FyYpRn%2FynOpBS21RI45v2Yva50WI5XD%2FVT%2BVMI8XD5%2FGIMR496eU5AitC%2B24RBczi2KxskSolksclJdm0BLHMf3D7rNgvwMjtSukMTn%2F27CFv7n%2FHF2FlvdGh3gH5QZKPx6qIODL0d9SiC26O9sjJjVOtpzowpaYuUj4GsguuaqwawJIqG1xa0YmnamNoHASNN5AzsDX5xOCoEKme7KaqoXkxa8GfY6q%2BTHvWVYCCPsRVSO830by6ERjHYXSkI2%2Fr50MI1bqKI9dfVpaNjxwPUQAQI9N%2FBE%2Bh1i5y3lWucR50jMaADYsB9d%2Fmf7QSlRGGwc%2FhSt9YPwvBf1x6NArCUURNvt2CHA7QqqX7aRYTT4xMahi0T1Ofws7EXUG4tKRj8pebJR0AVeRkokdWq%2B0%2FaNzB4WDv1gpUA4VQ%2BgWruExqjMOKE%2BcwGOqUBFa970DPVOdKVlg%2FTquskxcCI%2B75qHyrbuOaz%2F13sEFOzPdasCagTfDqiOQ%2FyiYFDsEMyShTp9b539tOeHtDKW%2BBcWWEFDrxhvlaymIZlNEGsjo1trtsMlxUpBEMtbhL7ikTOAeDcCCO8phYxu5YPh2Epbwab5ZS5U110mpOoSukQLuDs2u7xe5Megok9vdv%2FPJmJH1RiJSHCGGtacLJzlyeBZ3Nt&X-Amz-Signature=ee621fcd4f06a5c689ef2eb95c0c50ab8baa5ef5c7193e369c9cf9f26f68ec16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULV3HHTT%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFxe8xNx7hr20OwcFENbR6Bamb6889yZCyGCbTIizobCAiEAoFMySYb3brrbni34vDYMAzGopfiF2c0NliOogYrYnh4q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDI8u04SsH0H6QekHlircA%2BYyUeOXw3Pr4aatgcY0ajGf66%2BUTBf5PTYWIgu%2B3GOCzzCukvP0XVGiPiEW%2Fr9r3%2FfAAhz4AmQlLZTTkHIu7R5HQBAG2Gvwtdhj%2Fm%2BarG8lKxx8Ado8ix5MoCS0ssevZzq1VMJCo8bDZcK1xsFIPbWrLZZhH2D13MGdW7m%2B7qGm%2Bz26XO7stEKGOX46MnMKomfeV0K9uUpj4Pr%2FDSWvCZObW%2BK%2F3Nur7MJKRbIKsdJAb73s1lWkJ%2FJPpcc4bWjlP2OpCcwncZxRf1Ef01j6Ec37NEh8L7Nqpg6RuQ93C5iej09MGcOprkMWpeAcCGVp2dHpFZExgBiCvjk0FWzbSc6XtyIRtAshFn6anTz9WePC71qovJJTQJPzzTN1%2FlRg7Nj1aT9cW%2F%2FUdpkVSTdgK%2B17TuPfL4ja7JJWRJejcGmBBJ3ss1sCHSj%2BQkG5F0OAcvxJ%2F%2BdpTEjAkm6xqxCkxaNMareitv2LlDflJJ8wbQMPBgonTBlvDm1J%2BtRtgFiRKnWEEqIu4uLpQfuf%2FkgXGnPli%2FihTiotQUz6S8FgOVkyzjTJoxYuvjj1UEAGJwrteBkGt0T1pGqwtCzRFxaLte5Ad1lK6pAF7vl0RWhfjlPUr0S4MgzNO0sipKquMKeE%2BcwGOqUBNJGWnKCIeEZcWwN2Ldoa0yBFSoiawMDlvJTnkCx7RwY0Sv6%2B%2FBVhQqYzzy4EeOi%2FwrpeWKCIDnlSQUlAcmFFknHl7vva857HMcU4RKcNEqiWMLfsbF%2Bn06i9wkP1f7iLCUfOs3GGc91q2fR6MUh%2B7s9IH%2FHirO5n%2BEK%2B7RJRus4f%2ByxJ2ZmABafs4AcA23cEB3DD0Pb%2FHPuQjYy9NMWw8%2Fgrd%2Bil&X-Amz-Signature=a3c6a747ec4805bd8e46eb67fa9c2d4d382b0c83c0bba795b161d6077ca97983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V73SBUFH%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCUXJ0YZReGUNxJ%2FusyfJ1z9ex%2FZCogiJ5h8Evg56QgBQIgG7CMhyJ5lroutEp2%2FlbQe1qsUdFp3F5BjHF1K9MyW7Qq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDG5zUoqdPiOpJTDhLircA6cT3qe2BbG011q83X%2FXDB2pcvqfBAeg7ZNRskI44nyXbpK2KeV6yiEgCljUp9h27nWRM01hlcO0RddTdapA6GI5jCSxzSide592HrWw%2FSs%2BTSD5zypS8B%2BJrm0wpwJEJAHW%2FIfABEs7%2FuNehvxU6bRf61tQrxXVUbg1sny1YH1g%2FT%2BD54T4%2FfMlOvQrofmjwEd5ncqgAJajlw8DTLd3i4Od5JsxfUKp2h%2B9Sz0zPwKxhYsIo339GRUd0SwZPhLb2cydNaPnLHKxSRaK6NUdcMs%2BxW%2BJIUcs52MqGDYvWqwStwx9OqyXuFsQe4cnO2UyIz0MoOEZeq6akcJwjyB3gQKrv1l7PqEYu2QqNjgXMZIczzML836i53D5JpOZaQbPRYYs3r7l4uDTOM%2FeGDf5nzym7bo2q50%2F2fposVxBS16epgZQrDf%2BDffXDuHYby15ydzVz5OixgzWIEwlqab4P94VqRCnI8u9AvfhgpUCvPkLPqt8OqaMtXGslJU3b1Zus7OGV4SakLNY4O9hsjRMAZkiZFx0y1YbCFeqlJOLY1KMu0Mo65JuGob4Ek8%2FsJHNjPLyd2UmQbaJx5jRWHgyCofDOTFntJ3UOKya1sDzZrHRdBx6%2BXPPO%2BwOYkXmMNuD%2BcwGOqUBC1CFv3NnDVynESFZEESGjagE%2B5%2BISC9ChPuyKgdIQukDweKhMBBjS6OtkI2bzNxtDI2fr20PMbeBAA9Spd%2FdXPf6Cl5u143X03M4V5RpfEKrO63eZSvxKnGnv8cV6LiHiU76OVfBV%2Bn6RpJEVygSoJ0BGwvDLa9bl%2F%2FKFyZY5SX2WOJp4mbraDI4lL3dmtRHYWxKstUTtFRgSG%2Bzg7zbh5yUHabl&X-Amz-Signature=bac13bb572e4b13e19fa7365248fb0371ff6725c5e317034d68511e2a3b481af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XE5EN4%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAb%2BF6JGnStChQZP%2FnLpKytwWEojayXjeSogFA%2B9nFF7AiBa4kMA89lJEjRlcSNUtZAnVSVvnTnklPu4aiNwj7GCxCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM27QW%2BQuC89mfPL7qKtwDz7KCcJNeGu4ad1Wp1%2FOpQGbjBjlPgM9G4pNg%2FNfu%2B0J%2FOHmXHnjmPA0rGynS7Ogs1OsTqUL9f3TmPl3KEzQeyMlKK7ly3eXNRH1%2F33TsKZqEZpJoy0i6EPFcB%2FIy9ZfaiqHwoYguZesvil3IGkd9aBpszWkCPKclpsaggs3lSJlbMPaBgY1fGzi%2Fl0MpjG8GZgincfaha6mNnEpi0qaChnYI32OT6Ue6FQH%2BcHnRzgizkQ%2FLmTjdoAXHejaAi0wlF9EAiEkEZso1X97xSDLhAhNGvDNmDqiMkynrW10CjPYUUTa%2Fo5yq44AMjcTq11OOqOPc797pZ%2F89GXa43AAlsyXKpsp2dO3DkYnC6Mwyu1JX8dy7RCNNNfeQ2tWzRkypIEF7WtgMt%2B1uSYqFn3GWMu%2BI0m6fSob2QfzrDzY%2B1QWaL6%2B7BnVw2PcWMIpJJlwl6SdvzZFQLt9kfJr6bS4c3N5tQhYQA7dpElaTXCsxd7D6Z0dOEjyQeCabxD4aJzcOE4%2ByF01kWfHWTlLLCu7PKmERLDUXt4RNiTttnVrjkeCLMBtjMGK2eyH7KohK1dLjU8%2FMj8CtN4s8mJAaWMe8Mg%2Fn140u%2B2E1GE%2Fzt%2FIenjMWbap8w89hr7zWcnswk4X5zAY6pgHFLmK7Dx2ttIrOydLUMwKfYsPfV2egGECFrvMR2VIrxAso5II931nwW1JC5%2BbOXoHVUYBJ0iCGvuyoF4R8r5evErtSAbTYRkhNEYYyfj%2FqgJ9B6JtD4mPE%2FY4jvsR9IEsfaWxB6VCxKD2kWUymOaujqM5FodrdYHDKD5epfwLQj5hYib4lzaIBoHRpkhS%2FqaLbdlbIVPHre%2BUO1tjCIh%2Fy%2FnB2ELFv&X-Amz-Signature=5699404afb63579d649de8777bc89a7a0fcd5b1ab8bac97847b602ea76da0f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z64ZGAZY%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAbAV93WUAMgqKJR2j55OWGwBRHnP7JS5pbjTY6nKbqZAiEAzW9gRNygISOnKkEvSBqx5rPXhHYXsaIa07NjEaAHhm8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDEiSgEdgToVoyGw6YircAyIyQCn9KjWrX47IvfLIggeWq0O1UFc%2FdS03ZJcOwCxlbgq4G4nAQ6wUV9ppN4JxvYxdifBr%2BUQAOSpsJAkSGmtZh2HLCWiurSqWZsAx26SoVWSQwBjXhsNtqc7GC58Vfh%2BXtdvVVvyMzYkxa3Bctelsjby3FkZyzctYeuCMffRwBvFAPQDQUg9egeCQXkKkUfbvV9zbQOGu%2FTmNxAHUV9A6sSVhXoHHeaCbvyRNLMPwc%2FTuEr%2B5SVj23g%2F7Htq%2FUGp4zn9DaP4tE3t9xqMF%2FNHszIbBVPgao75c68m7MsWMZBC%2BUiP3NWSf71Vr33Y9vZIwVrwb4pqtTYi4868FuPnHsAMZ%2FVCTiovgUkuPuEN6yyPRoFhM59S%2Bgw%2B%2BNTbV2x0NVOilXFu4nqz%2FzEF0p14B%2FOyVPb%2F8IwS1HRW%2Fki1J2RtjCPAKdeQ%2B1GihYLqC9E0TmlWWvJHNt%2BoPX7pNDissWNvZyjVcTSWgW%2FANnnCP4So7CF27PJrFeqrp46HVe9S2nYUHyBnvRaPLM8do1MMmkcFFVn6IT5%2FmmiCaJyoBRmfqzX2wYKGGMu1He%2BGBKzSd%2FpF7ZKm7MtJoondkYL1qOYkwYcSy6%2F3Ir4cyLzuNI9qJkQcDey63GoenMOeD%2BcwGOqUBGf5rLiUDOx7MXlVWk5VsCkIQia8ZLngFhhvq3Zbt%2BVguOl41NATABEsh7VYjW95jcGIx2o1S6jCvENAdzQ0H0Embm2P339n0tR%2FR5T9dj%2BYeA9DHGGuBA7ML8akUGV%2BnNd%2BjejJnIgG4uJq7m4bBVlhYGXQtoi5xKU8Dnfl11pqOYdfbdl4jodzlwpHrCONVpAQz8aPRvsZgaERPq%2FI0Eiix0ZTc&X-Amz-Signature=4ba229a648612ca7cf2ad71987e47dc6a042697e3f34f45472e3f8bb30ca6fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XE5EN4%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAb%2BF6JGnStChQZP%2FnLpKytwWEojayXjeSogFA%2B9nFF7AiBa4kMA89lJEjRlcSNUtZAnVSVvnTnklPu4aiNwj7GCxCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM27QW%2BQuC89mfPL7qKtwDz7KCcJNeGu4ad1Wp1%2FOpQGbjBjlPgM9G4pNg%2FNfu%2B0J%2FOHmXHnjmPA0rGynS7Ogs1OsTqUL9f3TmPl3KEzQeyMlKK7ly3eXNRH1%2F33TsKZqEZpJoy0i6EPFcB%2FIy9ZfaiqHwoYguZesvil3IGkd9aBpszWkCPKclpsaggs3lSJlbMPaBgY1fGzi%2Fl0MpjG8GZgincfaha6mNnEpi0qaChnYI32OT6Ue6FQH%2BcHnRzgizkQ%2FLmTjdoAXHejaAi0wlF9EAiEkEZso1X97xSDLhAhNGvDNmDqiMkynrW10CjPYUUTa%2Fo5yq44AMjcTq11OOqOPc797pZ%2F89GXa43AAlsyXKpsp2dO3DkYnC6Mwyu1JX8dy7RCNNNfeQ2tWzRkypIEF7WtgMt%2B1uSYqFn3GWMu%2BI0m6fSob2QfzrDzY%2B1QWaL6%2B7BnVw2PcWMIpJJlwl6SdvzZFQLt9kfJr6bS4c3N5tQhYQA7dpElaTXCsxd7D6Z0dOEjyQeCabxD4aJzcOE4%2ByF01kWfHWTlLLCu7PKmERLDUXt4RNiTttnVrjkeCLMBtjMGK2eyH7KohK1dLjU8%2FMj8CtN4s8mJAaWMe8Mg%2Fn140u%2B2E1GE%2Fzt%2FIenjMWbap8w89hr7zWcnswk4X5zAY6pgHFLmK7Dx2ttIrOydLUMwKfYsPfV2egGECFrvMR2VIrxAso5II931nwW1JC5%2BbOXoHVUYBJ0iCGvuyoF4R8r5evErtSAbTYRkhNEYYyfj%2FqgJ9B6JtD4mPE%2FY4jvsR9IEsfaWxB6VCxKD2kWUymOaujqM5FodrdYHDKD5epfwLQj5hYib4lzaIBoHRpkhS%2FqaLbdlbIVPHre%2BUO1tjCIh%2Fy%2FnB2ELFv&X-Amz-Signature=f95c3aed192fdb41eb30d45d599243287c52ad301a3879438e3224cefa25946c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ODC2K6N%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCzYKeThefgON8x13lISEYTCC%2BE5sy2aCkvIXudHaitYAIhANMJshBUKG3Rtgf7wc6gDpMy%2BA9BP8%2BYuf%2B3SdXhXuvlKv8DCAIQABoMNjM3NDIzMTgzODA1Igythlqc%2B3FgQWaRJqUq3AMfvyXIWOzhBOeiUV0HwCZBz%2FFJM%2BK3hyzkS1nyS1F6bzYKE1HD14GQjpY7%2Bf%2BCbEnSsiYmnHZH7QcDYpO%2FM%2FGic21ZJdxPlOJf9ewRpLyR5SVQPyNCKUjuUeYwQldIyO%2B1MiV5yU9T10cIwt9oPvGDYAA%2BK0Zrz8kcfHTiDEE%2FP7GhcYS%2BlROWgmK7ZIX4EdeuigT%2BatBg%2FbbZPU5mVPZfOVrH4SDykkmpKpCYt9pVCEd3sq3CNjTfKaZUVDhVzSBgEpy5lkupWwM2LnYuF9VvgxMl3%2Bh8UQmDHNSrRqNtmJ7cn0oco%2BYqpeOXEOSFtLbsXEEWrwkCvvUQoRaDo477Q17HLSUOsou7j%2FkZn7fDqK2VwHy4BsMY8p4w%2BeI%2F4TJkpdZOWTEFpsfN090Z06kDMfCRkmvYBkwspyEgy1c9XCXnc%2Fwl63EmZ8IggGCzULXiJ7%2BqJay%2BYe535lwff0T2lRG7vIAFs4gGknIkOTXnhAwJd%2FgEoN9N9W4olh3Kmq%2B5cImdHhsBHrJnaqD1olctei3mhMkmgtpfKPqjbAEY6Up4T6fdGmdbZrCnm4oou56c62m5qd5q%2Bggwdp6610gspaMqSCASfVIyWjOw20pUq21xLLpjrUrFro2AfjCyg%2FnMBjqkARbvTzZw8fSS2gQ7rAr%2Fihmv%2F3%2FJ0aBNAbR5PjKMe5GGntdSSOo95LOgr2ub7xVkzvAIuImhB2H2BpjVZ55y8OGjanPMTfz486YZ6M22jVT%2BCQtXUknSreCfWojz5uf9nKOGi2yqkuG3W6egljkcl%2BzQHfJvUzqa09e%2BcILwYgUjZTFNs0iJaNN8reow6lGJpeI3TQfuEYN6qmGhpeUxE9h3%2FRPY&X-Amz-Signature=300325393f7ebb4f5f68255dcb4d2a16cc5d8c89432dfe8f8c1abe86e643fe87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XE5EN4%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAb%2BF6JGnStChQZP%2FnLpKytwWEojayXjeSogFA%2B9nFF7AiBa4kMA89lJEjRlcSNUtZAnVSVvnTnklPu4aiNwj7GCxCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM27QW%2BQuC89mfPL7qKtwDz7KCcJNeGu4ad1Wp1%2FOpQGbjBjlPgM9G4pNg%2FNfu%2B0J%2FOHmXHnjmPA0rGynS7Ogs1OsTqUL9f3TmPl3KEzQeyMlKK7ly3eXNRH1%2F33TsKZqEZpJoy0i6EPFcB%2FIy9ZfaiqHwoYguZesvil3IGkd9aBpszWkCPKclpsaggs3lSJlbMPaBgY1fGzi%2Fl0MpjG8GZgincfaha6mNnEpi0qaChnYI32OT6Ue6FQH%2BcHnRzgizkQ%2FLmTjdoAXHejaAi0wlF9EAiEkEZso1X97xSDLhAhNGvDNmDqiMkynrW10CjPYUUTa%2Fo5yq44AMjcTq11OOqOPc797pZ%2F89GXa43AAlsyXKpsp2dO3DkYnC6Mwyu1JX8dy7RCNNNfeQ2tWzRkypIEF7WtgMt%2B1uSYqFn3GWMu%2BI0m6fSob2QfzrDzY%2B1QWaL6%2B7BnVw2PcWMIpJJlwl6SdvzZFQLt9kfJr6bS4c3N5tQhYQA7dpElaTXCsxd7D6Z0dOEjyQeCabxD4aJzcOE4%2ByF01kWfHWTlLLCu7PKmERLDUXt4RNiTttnVrjkeCLMBtjMGK2eyH7KohK1dLjU8%2FMj8CtN4s8mJAaWMe8Mg%2Fn140u%2B2E1GE%2Fzt%2FIenjMWbap8w89hr7zWcnswk4X5zAY6pgHFLmK7Dx2ttIrOydLUMwKfYsPfV2egGECFrvMR2VIrxAso5II931nwW1JC5%2BbOXoHVUYBJ0iCGvuyoF4R8r5evErtSAbTYRkhNEYYyfj%2FqgJ9B6JtD4mPE%2FY4jvsR9IEsfaWxB6VCxKD2kWUymOaujqM5FodrdYHDKD5epfwLQj5hYib4lzaIBoHRpkhS%2FqaLbdlbIVPHre%2BUO1tjCIh%2Fy%2FnB2ELFv&X-Amz-Signature=62e61510569917ef468f4e0b5a18d3d05ad022bc47e0cfda2d7c47ad80a29161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXI4M5HY%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQChb%2F9JDFZzmRwQjA7GB8bsEwgH0ixaqA1PSBYF7uR7IwIgXxcvowXUV%2BQRkfptYANumLKGvLqFcIFXhH1l%2FeYjj7gq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDAh6P1Fgn7dNQU9qgSrcAwYMmaFdH6L9XT3dDpPuwN%2F93DC58P2lyfouS1MlBcJ0qq%2BPUnjI4WXuuSKwCBfP9WCjf%2FVkmTkykxbdzFNVNAIK%2BQ%2B6iky7N9tw7fr6nr7swEH9cfhwIbSMK6pq6qtQSFSjsbL8XrsF743uMFH4BjrWbHGpoJ2L5z6M03%2FHQFbMpIGDzO0ACpy9SCTZ%2B29nwluPQPmsAavNq%2BYlXlqoPwtBBIus%2Frpfc8QfkrXGRuGC%2BUt%2Fe1oQv2mo4pXRvHqkz65F0c8AG%2B0NbUJZXAIxua9EC8oFAIR9oyEvLPCcYRDYTRu5hqx13qd3wZV3vDn9E3JtFo%2Fy%2Fb1Y%2FpFcZncI2BXrCI9TLO4iJRbvAGbpU0UQBiHiiyKNnXuCkwz08mnmRWZ0swMw5JrMAbdqvtqz5VdaN5ngNG4RQqZwnGD%2B7ORbLj5WYIQNC%2F7qnyLBKRyFD1O4dYO5mVfXB0wFUj1imuYuDWAicZ4UlUbImiPtqLynT9eO4WFsmn7tr2%2FBheuFeXu77bcrM9hL%2Bh1K82EhWlbeQIFDYS47TZWnhQ4TZ4i75B32XP%2FakOju8iWVWy%2FbgUQnUcltaZ6tUlMaVb%2FwALC4DAaLxB6gqvzW73ue1ObHFCvW7Te%2BWpHZkVr5MIuE%2BcwGOqUBsIaomZR%2F78zHwJzB4oa%2FDpTv50II1Q1EBFsqCKhxmROIRbtIYLnIwv7DclINQIhe2HN4ZUBmrTteYzhzybFkk%2B51cXYShC6mWYOB3xVdIqmC%2F61IVK%2Fc2hwmUO4TtY36o2lFjDy4tbAvPgEa0c%2B%2B419sg73gArz7xxtaOg6ILIdEcVygUpTMrMorXFysS%2FyHNCphTJseqYdMCeFUIJamHCgapeLw&X-Amz-Signature=49dc0c4976187bb8f683104b73c699609f64a64c501fcd2d11c3ac73cddc4869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XE5EN4%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAb%2BF6JGnStChQZP%2FnLpKytwWEojayXjeSogFA%2B9nFF7AiBa4kMA89lJEjRlcSNUtZAnVSVvnTnklPu4aiNwj7GCxCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM27QW%2BQuC89mfPL7qKtwDz7KCcJNeGu4ad1Wp1%2FOpQGbjBjlPgM9G4pNg%2FNfu%2B0J%2FOHmXHnjmPA0rGynS7Ogs1OsTqUL9f3TmPl3KEzQeyMlKK7ly3eXNRH1%2F33TsKZqEZpJoy0i6EPFcB%2FIy9ZfaiqHwoYguZesvil3IGkd9aBpszWkCPKclpsaggs3lSJlbMPaBgY1fGzi%2Fl0MpjG8GZgincfaha6mNnEpi0qaChnYI32OT6Ue6FQH%2BcHnRzgizkQ%2FLmTjdoAXHejaAi0wlF9EAiEkEZso1X97xSDLhAhNGvDNmDqiMkynrW10CjPYUUTa%2Fo5yq44AMjcTq11OOqOPc797pZ%2F89GXa43AAlsyXKpsp2dO3DkYnC6Mwyu1JX8dy7RCNNNfeQ2tWzRkypIEF7WtgMt%2B1uSYqFn3GWMu%2BI0m6fSob2QfzrDzY%2B1QWaL6%2B7BnVw2PcWMIpJJlwl6SdvzZFQLt9kfJr6bS4c3N5tQhYQA7dpElaTXCsxd7D6Z0dOEjyQeCabxD4aJzcOE4%2ByF01kWfHWTlLLCu7PKmERLDUXt4RNiTttnVrjkeCLMBtjMGK2eyH7KohK1dLjU8%2FMj8CtN4s8mJAaWMe8Mg%2Fn140u%2B2E1GE%2Fzt%2FIenjMWbap8w89hr7zWcnswk4X5zAY6pgHFLmK7Dx2ttIrOydLUMwKfYsPfV2egGECFrvMR2VIrxAso5II931nwW1JC5%2BbOXoHVUYBJ0iCGvuyoF4R8r5evErtSAbTYRkhNEYYyfj%2FqgJ9B6JtD4mPE%2FY4jvsR9IEsfaWxB6VCxKD2kWUymOaujqM5FodrdYHDKD5epfwLQj5hYib4lzaIBoHRpkhS%2FqaLbdlbIVPHre%2BUO1tjCIh%2Fy%2FnB2ELFv&X-Amz-Signature=378223314a2f4fd7c9db72f5fc4e0c697398451e343d11e41dc71d66ae770cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XXHLPCE%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDk%2FMzVs78f0GoOf%2BUqJczFpjLUMu1cd50nq2aO4lOs3QIgaFvnsd2pTa%2FZ3krTo1tJpFsaSdIOPh2jy2jpkQOSOn8q%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDFeSJgT8eqda0FlzjCrcA4IzPdIPTnrNb0D0ilUH5NUaQWAXDLVMX3IxIBTKUVjKyRQe6B44G0tpNAquPP%2FGjl6j7l1fHSXh%2BSn2x70hdCpe8S0EmMxQzFf9FD2WY%2B3sQN50vzGgUrn7%2F3ve1sSr4CRXmhxLbWvNkt3YKeJ7DHwhw%2B37Ep%2FTEKgfB%2F9Roe1Fmgjbj1n9JDuY1HGYwliQBDJNAE8KGyZKCikT3ho8MuKRnFWDJRX3OYUvYgchMNv%2BF6pcPCBA6X3bGv0T%2FSkc8JQEgiOl%2FJPPAPb3v9rXOs8XwP3w0fBXxDzml2X7BsE8QEfzEh%2FvQ0lewy7%2FiSt2XohhqwLBe%2BXZ8MS4YrAn8e4EYcZsh18QykacMNmd5046o19Vl%2BbTF0uUAswwbyz7rts1OGNVRgcgiEVw04tE7VahD8JWJfj%2FUqhNPOuGzXkZP7njO1ierx96K7My1ljVg%2BDRJZwey%2BP55HSI3cwlBoO7Z%2BmfkwccsMBrQB2gojRuBPIqId4Xrl9BPdVdJlmPvw5%2FOQQPAiH6B4VCs1ns20iR%2FUt7dY6gD5iOrEnDoVsrKxUVCfix69C8Qo2cmgI%2FrGI8IPE2xN4pWS18P2hGeePja3t4oNsxOjoDeDxCoo59xSuKI9EVihr8Dqa2MM6D%2BcwGOqUBhl9sexDhfiIonXg7pDmkbz34UH68eR3WVvm8wR77iA%2Fmz9bUQjVf8VEYvB4%2BObOuYRysucOI2EbRKK%2F6LvG%2Bgx7gentPI2pNDYrITUtr%2FBgBn5M28y90iPg7SmUigdWjwAWvrQzfwBkwWZIKjBbLdRn8DWT2S2af4o%2FDNfwj%2BRLzUPLHtbdVQTkAZNqF5rs%2FZsmylB1upvC8eepxPiy7StdzT5ji&X-Amz-Signature=a8d7f2105b9c0c3d46fa51e6b5a9cb8a8aa05dc23317b157708e2e28a9a22318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XE5EN4%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAb%2BF6JGnStChQZP%2FnLpKytwWEojayXjeSogFA%2B9nFF7AiBa4kMA89lJEjRlcSNUtZAnVSVvnTnklPu4aiNwj7GCxCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM27QW%2BQuC89mfPL7qKtwDz7KCcJNeGu4ad1Wp1%2FOpQGbjBjlPgM9G4pNg%2FNfu%2B0J%2FOHmXHnjmPA0rGynS7Ogs1OsTqUL9f3TmPl3KEzQeyMlKK7ly3eXNRH1%2F33TsKZqEZpJoy0i6EPFcB%2FIy9ZfaiqHwoYguZesvil3IGkd9aBpszWkCPKclpsaggs3lSJlbMPaBgY1fGzi%2Fl0MpjG8GZgincfaha6mNnEpi0qaChnYI32OT6Ue6FQH%2BcHnRzgizkQ%2FLmTjdoAXHejaAi0wlF9EAiEkEZso1X97xSDLhAhNGvDNmDqiMkynrW10CjPYUUTa%2Fo5yq44AMjcTq11OOqOPc797pZ%2F89GXa43AAlsyXKpsp2dO3DkYnC6Mwyu1JX8dy7RCNNNfeQ2tWzRkypIEF7WtgMt%2B1uSYqFn3GWMu%2BI0m6fSob2QfzrDzY%2B1QWaL6%2B7BnVw2PcWMIpJJlwl6SdvzZFQLt9kfJr6bS4c3N5tQhYQA7dpElaTXCsxd7D6Z0dOEjyQeCabxD4aJzcOE4%2ByF01kWfHWTlLLCu7PKmERLDUXt4RNiTttnVrjkeCLMBtjMGK2eyH7KohK1dLjU8%2FMj8CtN4s8mJAaWMe8Mg%2Fn140u%2B2E1GE%2Fzt%2FIenjMWbap8w89hr7zWcnswk4X5zAY6pgHFLmK7Dx2ttIrOydLUMwKfYsPfV2egGECFrvMR2VIrxAso5II931nwW1JC5%2BbOXoHVUYBJ0iCGvuyoF4R8r5evErtSAbTYRkhNEYYyfj%2FqgJ9B6JtD4mPE%2FY4jvsR9IEsfaWxB6VCxKD2kWUymOaujqM5FodrdYHDKD5epfwLQj5hYib4lzaIBoHRpkhS%2FqaLbdlbIVPHre%2BUO1tjCIh%2Fy%2FnB2ELFv&X-Amz-Signature=64de0644e21c25c2e50f5948ac223d8375fa594921ef3535ec706603236367f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AYGAKPD%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD8LLfeTIgaRsV5jkRYv1as7sliWFeEgSeQ0xXYyqdpRAIhAI9Fy5zXeYGev45pl1Krb%2BEYWfBiuCpMvcv0WyFkSa%2B3Kv8DCAIQABoMNjM3NDIzMTgzODA1IgzOB4R0gB5JwS%2B59n0q3AOZ5PHnQtmLEt6ABU8pFz3PQH4D3PSaRaCD5P2GlT8p7or1%2BUaqvz680BtSAMsdkocX17MKY98ovo5HH7Cgy1QtlfQkelCnqCxHAZMVGJzg6DpxIcKBLKjzAhkJaffglNny%2FdvA0XLWXs1ThXgPYqpR%2F5XRbCUaBWXgLD%2F%2BcuJDli6%2FOcRB7XR7nnCFhC0weSO8tqsF7z%2FFt%2Bi2rHa79RGeOKCxFnecHGMR98Oquc0pbfLcgY1W0UmQeY%2BfjZ8b5dhMuEeASN71DmlWAvz%2BWG5Gv6HoKoFqz8CH%2Bhw%2BoEa3xzHP6sB2sJooXzMqDldEmGeVpPvJ%2B6p2sPqGQnidllLj5vzGhjYzn8hDZ8JgaCvhDp20LiZJlcZtRHdzqUc%2B5xpPZFgN1kqAv5b9lNJ61HcncR91oR4ej2CqUnl9914%2BhVc19UM4k4tCqVQlAKhObM44uPfAW4YI3gpjktlxbkMUNSNajHYp45vthULbncFBq%2BLdsKjwOnnWThmjhHISl077LRgfGUOss%2BWkt2HVHjH6VcMHijLgY932fsmZBnOrPzbAMN3KzbAqfxSdNS%2FmHWV8mfxdKPlro0eLEv%2FOqdFV0yVSOG0oo6A349Mywb9FEOfQhb2O741VjQFhDTD%2Bg%2FnMBjqkAS%2Fp2YtjNRxRCTdMd2hCQqmNT%2F8xQA%2BvaBnnAh5RRNarK6O8n16u2Cj%2BR6IdYTllyL7Wxdv61RSGpdWg1B9WrEKMWXdnDyxSENNFKPo%2FWVi5552zi50PP5m5l4CvlLdKgZ3RqxkZdKTxkZa7CPf3CdQzeLFcHw6a5B8b7fdU7OqXnnj2PiwVZtZ4%2FOqTH2yzjMFtC%2FX7RhzPwK2Nrpi9ig8VTjgc&X-Amz-Signature=d7e81305370a37904f6c4d7569f74e14107c0583281a6a4c736f5bef15fd4c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPSGVVVO%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHDjWFkZAju7z6VQSAfc5nImvofye5l6mKAetCnQ8k4OAiAlMwV%2FTwrJe1dAJQ63Iwo6i5%2FL9z6kWyJRYjnQ6nx6air%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMuyYyMXR0IUabbXAjKtwDePLQqj%2Fi7TABK1Noe%2BqO%2FJKQtapXSVOx5mCreXWpIcHQ12DxQOMaYo557OlVzDk8mJKxU%2FY0dIBX7CX3ACRo6jK2Z6BlyPn2kwumzE%2Bk%2BZlGS90IecaffYiQQLX9cSHYoK%2BTMtNM0JN4ZagdcoPK8LZtiwLlNbbWTvK5sjyF6AeYz7WZJtL2isyMhU6%2Bay17bdC1xfKfWVqnIEF3OvBnyzlDaf85eAUI9teS9HYSVHpu1MqAzwP4H3%2FT7vuDjHtqfTPuCOdSxu8WVK5q7fgTzdbKbXkH54k9i3mgWFuVJ9ssUtKJxo%2FtyZHHVRluG8tonlbetZDBBhu3%2FXjRG6erR%2BXMCgTSVW9%2Fo5vMDOkhfW6W4McecCA1jirW2UlL0ngVpQTC8KJYlVYoXW%2ByaBPFclYdJE6KeBvcbkNvDOWJpzeaXbH9DqqlnTvJsQXgceoSLLRdiY9jmMfsDNWprS5VFxUUjB1RPLXlp1Dzw6fjgktEtK6IXMAgaiMJcVqSdU2IBjle0PlKyM8TOfQ4Uv1WwJqCJ%2FUwH78OhfMXY5h79a0mTabJbC6yZN%2Fhd0IJNeeqHl%2F0ZZQaj7pxY%2FQW%2BcDH2I1QfY6Tzu0hvKZ1TicI%2BpXmitDlFhSHbxXLS5gwjoT5zAY6pgGlzXSj3%2BxlZ5i0NE22eFRr76z11UV0w%2BLNQm8KZVdwzcfHMPMpFXX6Dy3DvhHtNZ4g9O30g4diFZQoU8ebjInZA%2FLiCnEuAdRTmONcBtuXF%2Fmiuomt4Toe%2F6fcEz4dCTzq1hLU2UEUegmrCnu7JOz5PLNbUT4ESsiu%2BIlszr%2BTsBLFfif7Y9c60zCvJ3WGw%2Beat84JrlWmLqU2ati0IAx3xgeaTC8c&X-Amz-Signature=f55053ccf5b54ac911abf7d58ce4d9713ba02d144345e91bb39d6d2fef06fcad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z47NQC77%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEUWqM0Beut09HuNHIRswn1K6wPSFq%2BFowqZGJEMsDSRAiBJuw0LU7qqHhzENfC95cqH9q8vx6YRrAe9704DsVI0tir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMtoMJ4GvudsesAMsDKtwDo%2FvfTwWMV5Tnn20JQeNe0c31a2wTGfAWaFbjpPeFSsFo0Cj1dq07P%2BQQJrRQ1oZgEEmTiYP3vkwpEss8b9ir8hUeAxAOusQQJNtmM%2B8lIcReOHIxUUXcwgMDX87RHisGEZC93hgxQruelVVx0DYy9hotmKjwAwJJ1MJUxTqc7%2B3QJgx0ZRfwAEMK%2FKW%2FK%2BLI10nYDoerWn1wsBaPUfz0zKW98cKK7sbbyEDpC0TigSPG%2BEzVg0N%2FHWghTaIi9vTdiBbi1yO95D3PzLpKU8h1QuYbrtjDwi36i%2Blvent9EuH6QdpLiymG5pTXCsZjL3Zl4dgjwmhvMl7uT3Jx%2Bqyc4KNp3%2FHcZLv17rl5INAIZEz01KzNQ%2BKV2co9HCSnOycxvBWMCy5Bi1QzlGsTHo9QC59jCLTY4FrycMK%2BtRT44p8D3eHO8lqV6vW7F8JDXWGleSMujNj3qgSRJWLgKcXaZUeLyyjo2unhj3P06jGVGZ%2FR3NF%2BpjN55P8DZxzMTQgt5b6CL0CkFZ24wh7Tjo2b3LAmDIQe%2FUz7R0mWoFkgv9oFrJDFsxcOODAilwgobTDyhgf9Og%2FLNhQl1QsO0Lnngwy8wT75jV7Cb8yKiVUNCPv8uc9EHbFA9HsV8Ssw9IP5zAY6pgGrR1A9fvcHHBohWKO7QLwxOstdXsOuWqZh6ZlZ0Ffqw1AXepHBpkDBRUs3pTLzpZfc3ca1xBxQzxa34trJv9IKRxXYGfz7o9U4qhxDO9JVIDUh%2FpXYFxBNl1DUnrAwIH8GECtsVR6L9Qv7K2Ei6Vg1zDTCnufN%2BdDW1xQX6RY%2BwfsJhIo5D8DIhlBU1Ky3jmo7frUZsIwtUGKCqnODN3CE04WArY2c&X-Amz-Signature=ffd8072bfc9634157ce889a4e7fa620557bd8dd736844f37d0c02c229d0aff85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XE5EN4%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAb%2BF6JGnStChQZP%2FnLpKytwWEojayXjeSogFA%2B9nFF7AiBa4kMA89lJEjRlcSNUtZAnVSVvnTnklPu4aiNwj7GCxCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM27QW%2BQuC89mfPL7qKtwDz7KCcJNeGu4ad1Wp1%2FOpQGbjBjlPgM9G4pNg%2FNfu%2B0J%2FOHmXHnjmPA0rGynS7Ogs1OsTqUL9f3TmPl3KEzQeyMlKK7ly3eXNRH1%2F33TsKZqEZpJoy0i6EPFcB%2FIy9ZfaiqHwoYguZesvil3IGkd9aBpszWkCPKclpsaggs3lSJlbMPaBgY1fGzi%2Fl0MpjG8GZgincfaha6mNnEpi0qaChnYI32OT6Ue6FQH%2BcHnRzgizkQ%2FLmTjdoAXHejaAi0wlF9EAiEkEZso1X97xSDLhAhNGvDNmDqiMkynrW10CjPYUUTa%2Fo5yq44AMjcTq11OOqOPc797pZ%2F89GXa43AAlsyXKpsp2dO3DkYnC6Mwyu1JX8dy7RCNNNfeQ2tWzRkypIEF7WtgMt%2B1uSYqFn3GWMu%2BI0m6fSob2QfzrDzY%2B1QWaL6%2B7BnVw2PcWMIpJJlwl6SdvzZFQLt9kfJr6bS4c3N5tQhYQA7dpElaTXCsxd7D6Z0dOEjyQeCabxD4aJzcOE4%2ByF01kWfHWTlLLCu7PKmERLDUXt4RNiTttnVrjkeCLMBtjMGK2eyH7KohK1dLjU8%2FMj8CtN4s8mJAaWMe8Mg%2Fn140u%2B2E1GE%2Fzt%2FIenjMWbap8w89hr7zWcnswk4X5zAY6pgHFLmK7Dx2ttIrOydLUMwKfYsPfV2egGECFrvMR2VIrxAso5II931nwW1JC5%2BbOXoHVUYBJ0iCGvuyoF4R8r5evErtSAbTYRkhNEYYyfj%2FqgJ9B6JtD4mPE%2FY4jvsR9IEsfaWxB6VCxKD2kWUymOaujqM5FodrdYHDKD5epfwLQj5hYib4lzaIBoHRpkhS%2FqaLbdlbIVPHre%2BUO1tjCIh%2Fy%2FnB2ELFv&X-Amz-Signature=88f77de51bea896a72b205f6908a18f1ea06033ad582c61433830554ff94a442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XE5EN4%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAb%2BF6JGnStChQZP%2FnLpKytwWEojayXjeSogFA%2B9nFF7AiBa4kMA89lJEjRlcSNUtZAnVSVvnTnklPu4aiNwj7GCxCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM27QW%2BQuC89mfPL7qKtwDz7KCcJNeGu4ad1Wp1%2FOpQGbjBjlPgM9G4pNg%2FNfu%2B0J%2FOHmXHnjmPA0rGynS7Ogs1OsTqUL9f3TmPl3KEzQeyMlKK7ly3eXNRH1%2F33TsKZqEZpJoy0i6EPFcB%2FIy9ZfaiqHwoYguZesvil3IGkd9aBpszWkCPKclpsaggs3lSJlbMPaBgY1fGzi%2Fl0MpjG8GZgincfaha6mNnEpi0qaChnYI32OT6Ue6FQH%2BcHnRzgizkQ%2FLmTjdoAXHejaAi0wlF9EAiEkEZso1X97xSDLhAhNGvDNmDqiMkynrW10CjPYUUTa%2Fo5yq44AMjcTq11OOqOPc797pZ%2F89GXa43AAlsyXKpsp2dO3DkYnC6Mwyu1JX8dy7RCNNNfeQ2tWzRkypIEF7WtgMt%2B1uSYqFn3GWMu%2BI0m6fSob2QfzrDzY%2B1QWaL6%2B7BnVw2PcWMIpJJlwl6SdvzZFQLt9kfJr6bS4c3N5tQhYQA7dpElaTXCsxd7D6Z0dOEjyQeCabxD4aJzcOE4%2ByF01kWfHWTlLLCu7PKmERLDUXt4RNiTttnVrjkeCLMBtjMGK2eyH7KohK1dLjU8%2FMj8CtN4s8mJAaWMe8Mg%2Fn140u%2B2E1GE%2Fzt%2FIenjMWbap8w89hr7zWcnswk4X5zAY6pgHFLmK7Dx2ttIrOydLUMwKfYsPfV2egGECFrvMR2VIrxAso5II931nwW1JC5%2BbOXoHVUYBJ0iCGvuyoF4R8r5evErtSAbTYRkhNEYYyfj%2FqgJ9B6JtD4mPE%2FY4jvsR9IEsfaWxB6VCxKD2kWUymOaujqM5FodrdYHDKD5epfwLQj5hYib4lzaIBoHRpkhS%2FqaLbdlbIVPHre%2BUO1tjCIh%2Fy%2FnB2ELFv&X-Amz-Signature=0d19e53eba753384df66149ca01f6928f3d08e1994ac7a6fa79b5b10f417180a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPQRQYS%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGbaG7mwfaJEPJNrkMPz2degwiZkDeqp2kGBn69XKWMgAiAt3W7U6NPhstHhetXz4BAcmu7gQOOD7188MzIETLGBDSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMLfO8Omgcg2yKfzkXKtwDSjJQsPJNObZ5y7qQgHlXMDiBJyVI74BpblG7hQCqYM4isgJoPb4FYmErSdvUEMay1qe7xVxU%2BNRvH1qwjprK24zohksCN5vCc0%2Fs8sYqtxxJ6g2h4cwhjjgzM2FXRckTbcolJT940Sc%2BCE1J8rc5nBYu%2F1PNvBg2VH7SZYBmKbPfAM2XBNxwtGj4i8JzMSR28%2ByYc%2BH0yxRXqI7CKToosimwDQPBMWF2lQUd7XWp4nAd%2BCfN0MZBckCthqaYGUqWX5iZNEo%2FvzLCS9WS16vM9RXaKnrlqRoXjnQN%2BI%2BX5vjUnRPy3HJn5glsDOYUVYEPA9qXSpFs30S3UmU5UH34%2F53SVEQD5lXeV3mVQBt9XHaDlZuIzZuGMlQcKVPGyG45bjf02ClHaizvIcH23PLC4FgEPOZnaaAbf6UdxOllJGlOoakEz8%2FlPksTwoenq%2BvFoGZvy%2BvG2RsMPnz1AU8fKSGr5khjvGRZt1aBta05VUCVe%2FXy1ua%2B%2FM%2B2L54itPBEghlUqWQnxRDi%2BIVkxL2074hdUlxMI9aozUoEt9tefYVfJ3zs5tEn7F8eUTE0zE9GXYiSzuE3ZwcLhu26m25itIACNAlo5GnCVAAasXf2ZIhersaVlX%2Bs2%2B%2FQlS8wyoP5zAY6pgGzbb0Sm4WDokj0oBD935Wfg8YI3obZeg27IITyoh1t%2FiALM4q94m6c4XbmezMBfEf%2BGS2mDSGZvqWSB6sHW2j4EeglGi59juZd2a1mZsnfYzQ%2Brht2RVNaD1lKMuF8zHZgTv6%2F05B%2FUXJtbgWl45dsDcDOgqrKxj3Ptcfi67gM0StNiCD0QFy50AlaJH83bGS6dUrjRKX2jR8fPg%2F5a4TmTCK5UbuZ&X-Amz-Signature=2b7b4dcb73e182f9a2c421dab7f57ead4366d3fc48cd7be80d5a5fa1665ae27e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPQRQYS%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGbaG7mwfaJEPJNrkMPz2degwiZkDeqp2kGBn69XKWMgAiAt3W7U6NPhstHhetXz4BAcmu7gQOOD7188MzIETLGBDSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMLfO8Omgcg2yKfzkXKtwDSjJQsPJNObZ5y7qQgHlXMDiBJyVI74BpblG7hQCqYM4isgJoPb4FYmErSdvUEMay1qe7xVxU%2BNRvH1qwjprK24zohksCN5vCc0%2Fs8sYqtxxJ6g2h4cwhjjgzM2FXRckTbcolJT940Sc%2BCE1J8rc5nBYu%2F1PNvBg2VH7SZYBmKbPfAM2XBNxwtGj4i8JzMSR28%2ByYc%2BH0yxRXqI7CKToosimwDQPBMWF2lQUd7XWp4nAd%2BCfN0MZBckCthqaYGUqWX5iZNEo%2FvzLCS9WS16vM9RXaKnrlqRoXjnQN%2BI%2BX5vjUnRPy3HJn5glsDOYUVYEPA9qXSpFs30S3UmU5UH34%2F53SVEQD5lXeV3mVQBt9XHaDlZuIzZuGMlQcKVPGyG45bjf02ClHaizvIcH23PLC4FgEPOZnaaAbf6UdxOllJGlOoakEz8%2FlPksTwoenq%2BvFoGZvy%2BvG2RsMPnz1AU8fKSGr5khjvGRZt1aBta05VUCVe%2FXy1ua%2B%2FM%2B2L54itPBEghlUqWQnxRDi%2BIVkxL2074hdUlxMI9aozUoEt9tefYVfJ3zs5tEn7F8eUTE0zE9GXYiSzuE3ZwcLhu26m25itIACNAlo5GnCVAAasXf2ZIhersaVlX%2Bs2%2B%2FQlS8wyoP5zAY6pgGzbb0Sm4WDokj0oBD935Wfg8YI3obZeg27IITyoh1t%2FiALM4q94m6c4XbmezMBfEf%2BGS2mDSGZvqWSB6sHW2j4EeglGi59juZd2a1mZsnfYzQ%2Brht2RVNaD1lKMuF8zHZgTv6%2F05B%2FUXJtbgWl45dsDcDOgqrKxj3Ptcfi67gM0StNiCD0QFy50AlaJH83bGS6dUrjRKX2jR8fPg%2F5a4TmTCK5UbuZ&X-Amz-Signature=4f05ac8c928c079563254d3d3b50645aff8a092d7c3228bad9beb331629457cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPQRQYS%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGbaG7mwfaJEPJNrkMPz2degwiZkDeqp2kGBn69XKWMgAiAt3W7U6NPhstHhetXz4BAcmu7gQOOD7188MzIETLGBDSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMLfO8Omgcg2yKfzkXKtwDSjJQsPJNObZ5y7qQgHlXMDiBJyVI74BpblG7hQCqYM4isgJoPb4FYmErSdvUEMay1qe7xVxU%2BNRvH1qwjprK24zohksCN5vCc0%2Fs8sYqtxxJ6g2h4cwhjjgzM2FXRckTbcolJT940Sc%2BCE1J8rc5nBYu%2F1PNvBg2VH7SZYBmKbPfAM2XBNxwtGj4i8JzMSR28%2ByYc%2BH0yxRXqI7CKToosimwDQPBMWF2lQUd7XWp4nAd%2BCfN0MZBckCthqaYGUqWX5iZNEo%2FvzLCS9WS16vM9RXaKnrlqRoXjnQN%2BI%2BX5vjUnRPy3HJn5glsDOYUVYEPA9qXSpFs30S3UmU5UH34%2F53SVEQD5lXeV3mVQBt9XHaDlZuIzZuGMlQcKVPGyG45bjf02ClHaizvIcH23PLC4FgEPOZnaaAbf6UdxOllJGlOoakEz8%2FlPksTwoenq%2BvFoGZvy%2BvG2RsMPnz1AU8fKSGr5khjvGRZt1aBta05VUCVe%2FXy1ua%2B%2FM%2B2L54itPBEghlUqWQnxRDi%2BIVkxL2074hdUlxMI9aozUoEt9tefYVfJ3zs5tEn7F8eUTE0zE9GXYiSzuE3ZwcLhu26m25itIACNAlo5GnCVAAasXf2ZIhersaVlX%2Bs2%2B%2FQlS8wyoP5zAY6pgGzbb0Sm4WDokj0oBD935Wfg8YI3obZeg27IITyoh1t%2FiALM4q94m6c4XbmezMBfEf%2BGS2mDSGZvqWSB6sHW2j4EeglGi59juZd2a1mZsnfYzQ%2Brht2RVNaD1lKMuF8zHZgTv6%2F05B%2FUXJtbgWl45dsDcDOgqrKxj3Ptcfi67gM0StNiCD0QFy50AlaJH83bGS6dUrjRKX2jR8fPg%2F5a4TmTCK5UbuZ&X-Amz-Signature=7fc77c4383a1c17444596d6a7b91d0fc9bff262fbf68d4bcef3f2ab2df8d798b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPQRQYS%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGbaG7mwfaJEPJNrkMPz2degwiZkDeqp2kGBn69XKWMgAiAt3W7U6NPhstHhetXz4BAcmu7gQOOD7188MzIETLGBDSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMLfO8Omgcg2yKfzkXKtwDSjJQsPJNObZ5y7qQgHlXMDiBJyVI74BpblG7hQCqYM4isgJoPb4FYmErSdvUEMay1qe7xVxU%2BNRvH1qwjprK24zohksCN5vCc0%2Fs8sYqtxxJ6g2h4cwhjjgzM2FXRckTbcolJT940Sc%2BCE1J8rc5nBYu%2F1PNvBg2VH7SZYBmKbPfAM2XBNxwtGj4i8JzMSR28%2ByYc%2BH0yxRXqI7CKToosimwDQPBMWF2lQUd7XWp4nAd%2BCfN0MZBckCthqaYGUqWX5iZNEo%2FvzLCS9WS16vM9RXaKnrlqRoXjnQN%2BI%2BX5vjUnRPy3HJn5glsDOYUVYEPA9qXSpFs30S3UmU5UH34%2F53SVEQD5lXeV3mVQBt9XHaDlZuIzZuGMlQcKVPGyG45bjf02ClHaizvIcH23PLC4FgEPOZnaaAbf6UdxOllJGlOoakEz8%2FlPksTwoenq%2BvFoGZvy%2BvG2RsMPnz1AU8fKSGr5khjvGRZt1aBta05VUCVe%2FXy1ua%2B%2FM%2B2L54itPBEghlUqWQnxRDi%2BIVkxL2074hdUlxMI9aozUoEt9tefYVfJ3zs5tEn7F8eUTE0zE9GXYiSzuE3ZwcLhu26m25itIACNAlo5GnCVAAasXf2ZIhersaVlX%2Bs2%2B%2FQlS8wyoP5zAY6pgGzbb0Sm4WDokj0oBD935Wfg8YI3obZeg27IITyoh1t%2FiALM4q94m6c4XbmezMBfEf%2BGS2mDSGZvqWSB6sHW2j4EeglGi59juZd2a1mZsnfYzQ%2Brht2RVNaD1lKMuF8zHZgTv6%2F05B%2FUXJtbgWl45dsDcDOgqrKxj3Ptcfi67gM0StNiCD0QFy50AlaJH83bGS6dUrjRKX2jR8fPg%2F5a4TmTCK5UbuZ&X-Amz-Signature=5a71415f83b952c0b7362e70ac018018b56f6180c07b01dc549935524e1951a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCDZZR26%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDAIsqRu7NsMP6K1czxPkvcVVl%2F8sAmNhArt5Bxu3h3twIhAK%2FRfIxLwh4BQdv1VIEFsg5txFWDV6s6xfQvvtYb6y54Kv8DCAIQABoMNjM3NDIzMTgzODA1IgyK%2F%2F514gvim8YcZv4q3AOF%2BU7fWsPQswiIPwIY0Dx0Ooo2bzXUbFTn9LmmT4DAucxO%2Bw3QT2D%2FPCVpV%2Bp9xebxyfRUxGfo3AOUHLO9ZLw%2FP4LuMifFEWdtLIVi%2FGrY7L3ZslowFSQtYvKUQ1yn26BLC%2FM%2BA1%2BS1VcDwPAIe1tKySJMrpG1SBOcqetyc3k9lDE%2Fr%2BeJcS3%2BBtCFKg7bo4HM4C6xW0vhH5Bikf6Xlg8wPu%2Bwu8C9lKtYZkiE%2FcW2YWThdw3LqNQwj42nBIA1K0URI20FEL%2Bpanmn6TuflXPyBOnCOxwNYtSMLZ%2B22W0yhYvdsLPrEtgQVwmUNpcxMaF1mgrq7v0v9BwnIjWmKnxuFxHni2egdaomUIQzuOyVKPGrjTyf%2FdBf6lddDO0yYszPlHnPPy%2BHrWjCaFvyiqmp%2B%2FHeqU4hYoeHe3VwiCWopwVwrjKloxbxlVAoN4z4BuvA9X5eDy5tuNJu9mP%2F0ZaQHesPpDshSakWd2NRCh0icER%2Fj8bF1pZ91UhfKtbm3jeNbFnNBDeT%2B8rAbHHltvQ0OLG5RhY1MBSye0%2BolafVNnY1IgadzQFlR%2BUq4PGVWMyNfUTs58PofNffEZYYHHzBFqXQzI0l7ksUsK7oRxCadkMhi%2FPo1N1uTuuMxjC7g%2FnMBjqkAZaF%2BI%2BvypqPGSHaSsj8sUwjMbwdLfBjcMewuwtM79n9hWo34ETTsaWai59FnHKqgQBhrNsWg7khrOBqxvrNRsWtVe4O3Yaf0W7FirfWZoccp2diKEnmAn8pCBIQ%2B2K%2F6s7%2FkPTizIfCeEAeO69Pd1MVTQYAzjrHJpu4mX2ZjJntG2MU8yr6srWAeYmd9KTt1Y8x8G2lLZxXDAEX30AQ4wHqc8nQ&X-Amz-Signature=61c714a8141b65b37547745b4c0a74331f17fc008dd9cdd109419fd00abd1fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPQRQYS%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGbaG7mwfaJEPJNrkMPz2degwiZkDeqp2kGBn69XKWMgAiAt3W7U6NPhstHhetXz4BAcmu7gQOOD7188MzIETLGBDSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMLfO8Omgcg2yKfzkXKtwDSjJQsPJNObZ5y7qQgHlXMDiBJyVI74BpblG7hQCqYM4isgJoPb4FYmErSdvUEMay1qe7xVxU%2BNRvH1qwjprK24zohksCN5vCc0%2Fs8sYqtxxJ6g2h4cwhjjgzM2FXRckTbcolJT940Sc%2BCE1J8rc5nBYu%2F1PNvBg2VH7SZYBmKbPfAM2XBNxwtGj4i8JzMSR28%2ByYc%2BH0yxRXqI7CKToosimwDQPBMWF2lQUd7XWp4nAd%2BCfN0MZBckCthqaYGUqWX5iZNEo%2FvzLCS9WS16vM9RXaKnrlqRoXjnQN%2BI%2BX5vjUnRPy3HJn5glsDOYUVYEPA9qXSpFs30S3UmU5UH34%2F53SVEQD5lXeV3mVQBt9XHaDlZuIzZuGMlQcKVPGyG45bjf02ClHaizvIcH23PLC4FgEPOZnaaAbf6UdxOllJGlOoakEz8%2FlPksTwoenq%2BvFoGZvy%2BvG2RsMPnz1AU8fKSGr5khjvGRZt1aBta05VUCVe%2FXy1ua%2B%2FM%2B2L54itPBEghlUqWQnxRDi%2BIVkxL2074hdUlxMI9aozUoEt9tefYVfJ3zs5tEn7F8eUTE0zE9GXYiSzuE3ZwcLhu26m25itIACNAlo5GnCVAAasXf2ZIhersaVlX%2Bs2%2B%2FQlS8wyoP5zAY6pgGzbb0Sm4WDokj0oBD935Wfg8YI3obZeg27IITyoh1t%2FiALM4q94m6c4XbmezMBfEf%2BGS2mDSGZvqWSB6sHW2j4EeglGi59juZd2a1mZsnfYzQ%2Brht2RVNaD1lKMuF8zHZgTv6%2F05B%2FUXJtbgWl45dsDcDOgqrKxj3Ptcfi67gM0StNiCD0QFy50AlaJH83bGS6dUrjRKX2jR8fPg%2F5a4TmTCK5UbuZ&X-Amz-Signature=57578d0e89b865a90db34e2ecb1a643e9c90d11feb9b404efbf21e6179407946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPQRQYS%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGbaG7mwfaJEPJNrkMPz2degwiZkDeqp2kGBn69XKWMgAiAt3W7U6NPhstHhetXz4BAcmu7gQOOD7188MzIETLGBDSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMLfO8Omgcg2yKfzkXKtwDSjJQsPJNObZ5y7qQgHlXMDiBJyVI74BpblG7hQCqYM4isgJoPb4FYmErSdvUEMay1qe7xVxU%2BNRvH1qwjprK24zohksCN5vCc0%2Fs8sYqtxxJ6g2h4cwhjjgzM2FXRckTbcolJT940Sc%2BCE1J8rc5nBYu%2F1PNvBg2VH7SZYBmKbPfAM2XBNxwtGj4i8JzMSR28%2ByYc%2BH0yxRXqI7CKToosimwDQPBMWF2lQUd7XWp4nAd%2BCfN0MZBckCthqaYGUqWX5iZNEo%2FvzLCS9WS16vM9RXaKnrlqRoXjnQN%2BI%2BX5vjUnRPy3HJn5glsDOYUVYEPA9qXSpFs30S3UmU5UH34%2F53SVEQD5lXeV3mVQBt9XHaDlZuIzZuGMlQcKVPGyG45bjf02ClHaizvIcH23PLC4FgEPOZnaaAbf6UdxOllJGlOoakEz8%2FlPksTwoenq%2BvFoGZvy%2BvG2RsMPnz1AU8fKSGr5khjvGRZt1aBta05VUCVe%2FXy1ua%2B%2FM%2B2L54itPBEghlUqWQnxRDi%2BIVkxL2074hdUlxMI9aozUoEt9tefYVfJ3zs5tEn7F8eUTE0zE9GXYiSzuE3ZwcLhu26m25itIACNAlo5GnCVAAasXf2ZIhersaVlX%2Bs2%2B%2FQlS8wyoP5zAY6pgGzbb0Sm4WDokj0oBD935Wfg8YI3obZeg27IITyoh1t%2FiALM4q94m6c4XbmezMBfEf%2BGS2mDSGZvqWSB6sHW2j4EeglGi59juZd2a1mZsnfYzQ%2Brht2RVNaD1lKMuF8zHZgTv6%2F05B%2FUXJtbgWl45dsDcDOgqrKxj3Ptcfi67gM0StNiCD0QFy50AlaJH83bGS6dUrjRKX2jR8fPg%2F5a4TmTCK5UbuZ&X-Amz-Signature=f8ac99b50e85838b892b8f6175fad2ee2c607c9049bb7839d390d3997eb765c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPQRQYS%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGbaG7mwfaJEPJNrkMPz2degwiZkDeqp2kGBn69XKWMgAiAt3W7U6NPhstHhetXz4BAcmu7gQOOD7188MzIETLGBDSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMLfO8Omgcg2yKfzkXKtwDSjJQsPJNObZ5y7qQgHlXMDiBJyVI74BpblG7hQCqYM4isgJoPb4FYmErSdvUEMay1qe7xVxU%2BNRvH1qwjprK24zohksCN5vCc0%2Fs8sYqtxxJ6g2h4cwhjjgzM2FXRckTbcolJT940Sc%2BCE1J8rc5nBYu%2F1PNvBg2VH7SZYBmKbPfAM2XBNxwtGj4i8JzMSR28%2ByYc%2BH0yxRXqI7CKToosimwDQPBMWF2lQUd7XWp4nAd%2BCfN0MZBckCthqaYGUqWX5iZNEo%2FvzLCS9WS16vM9RXaKnrlqRoXjnQN%2BI%2BX5vjUnRPy3HJn5glsDOYUVYEPA9qXSpFs30S3UmU5UH34%2F53SVEQD5lXeV3mVQBt9XHaDlZuIzZuGMlQcKVPGyG45bjf02ClHaizvIcH23PLC4FgEPOZnaaAbf6UdxOllJGlOoakEz8%2FlPksTwoenq%2BvFoGZvy%2BvG2RsMPnz1AU8fKSGr5khjvGRZt1aBta05VUCVe%2FXy1ua%2B%2FM%2B2L54itPBEghlUqWQnxRDi%2BIVkxL2074hdUlxMI9aozUoEt9tefYVfJ3zs5tEn7F8eUTE0zE9GXYiSzuE3ZwcLhu26m25itIACNAlo5GnCVAAasXf2ZIhersaVlX%2Bs2%2B%2FQlS8wyoP5zAY6pgGzbb0Sm4WDokj0oBD935Wfg8YI3obZeg27IITyoh1t%2FiALM4q94m6c4XbmezMBfEf%2BGS2mDSGZvqWSB6sHW2j4EeglGi59juZd2a1mZsnfYzQ%2Brht2RVNaD1lKMuF8zHZgTv6%2F05B%2FUXJtbgWl45dsDcDOgqrKxj3Ptcfi67gM0StNiCD0QFy50AlaJH83bGS6dUrjRKX2jR8fPg%2F5a4TmTCK5UbuZ&X-Amz-Signature=d4a0bc153a3a8665088bc480606e4e0411da8272c0c6dd2e53294ddbb5f45942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPQRQYS%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGbaG7mwfaJEPJNrkMPz2degwiZkDeqp2kGBn69XKWMgAiAt3W7U6NPhstHhetXz4BAcmu7gQOOD7188MzIETLGBDSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMLfO8Omgcg2yKfzkXKtwDSjJQsPJNObZ5y7qQgHlXMDiBJyVI74BpblG7hQCqYM4isgJoPb4FYmErSdvUEMay1qe7xVxU%2BNRvH1qwjprK24zohksCN5vCc0%2Fs8sYqtxxJ6g2h4cwhjjgzM2FXRckTbcolJT940Sc%2BCE1J8rc5nBYu%2F1PNvBg2VH7SZYBmKbPfAM2XBNxwtGj4i8JzMSR28%2ByYc%2BH0yxRXqI7CKToosimwDQPBMWF2lQUd7XWp4nAd%2BCfN0MZBckCthqaYGUqWX5iZNEo%2FvzLCS9WS16vM9RXaKnrlqRoXjnQN%2BI%2BX5vjUnRPy3HJn5glsDOYUVYEPA9qXSpFs30S3UmU5UH34%2F53SVEQD5lXeV3mVQBt9XHaDlZuIzZuGMlQcKVPGyG45bjf02ClHaizvIcH23PLC4FgEPOZnaaAbf6UdxOllJGlOoakEz8%2FlPksTwoenq%2BvFoGZvy%2BvG2RsMPnz1AU8fKSGr5khjvGRZt1aBta05VUCVe%2FXy1ua%2B%2FM%2B2L54itPBEghlUqWQnxRDi%2BIVkxL2074hdUlxMI9aozUoEt9tefYVfJ3zs5tEn7F8eUTE0zE9GXYiSzuE3ZwcLhu26m25itIACNAlo5GnCVAAasXf2ZIhersaVlX%2Bs2%2B%2FQlS8wyoP5zAY6pgGzbb0Sm4WDokj0oBD935Wfg8YI3obZeg27IITyoh1t%2FiALM4q94m6c4XbmezMBfEf%2BGS2mDSGZvqWSB6sHW2j4EeglGi59juZd2a1mZsnfYzQ%2Brht2RVNaD1lKMuF8zHZgTv6%2F05B%2FUXJtbgWl45dsDcDOgqrKxj3Ptcfi67gM0StNiCD0QFy50AlaJH83bGS6dUrjRKX2jR8fPg%2F5a4TmTCK5UbuZ&X-Amz-Signature=ad841bc797404bd266de2911c7bfe6b0b9fadc0db516b8621c7465722ffd3831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPQRQYS%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGbaG7mwfaJEPJNrkMPz2degwiZkDeqp2kGBn69XKWMgAiAt3W7U6NPhstHhetXz4BAcmu7gQOOD7188MzIETLGBDSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMLfO8Omgcg2yKfzkXKtwDSjJQsPJNObZ5y7qQgHlXMDiBJyVI74BpblG7hQCqYM4isgJoPb4FYmErSdvUEMay1qe7xVxU%2BNRvH1qwjprK24zohksCN5vCc0%2Fs8sYqtxxJ6g2h4cwhjjgzM2FXRckTbcolJT940Sc%2BCE1J8rc5nBYu%2F1PNvBg2VH7SZYBmKbPfAM2XBNxwtGj4i8JzMSR28%2ByYc%2BH0yxRXqI7CKToosimwDQPBMWF2lQUd7XWp4nAd%2BCfN0MZBckCthqaYGUqWX5iZNEo%2FvzLCS9WS16vM9RXaKnrlqRoXjnQN%2BI%2BX5vjUnRPy3HJn5glsDOYUVYEPA9qXSpFs30S3UmU5UH34%2F53SVEQD5lXeV3mVQBt9XHaDlZuIzZuGMlQcKVPGyG45bjf02ClHaizvIcH23PLC4FgEPOZnaaAbf6UdxOllJGlOoakEz8%2FlPksTwoenq%2BvFoGZvy%2BvG2RsMPnz1AU8fKSGr5khjvGRZt1aBta05VUCVe%2FXy1ua%2B%2FM%2B2L54itPBEghlUqWQnxRDi%2BIVkxL2074hdUlxMI9aozUoEt9tefYVfJ3zs5tEn7F8eUTE0zE9GXYiSzuE3ZwcLhu26m25itIACNAlo5GnCVAAasXf2ZIhersaVlX%2Bs2%2B%2FQlS8wyoP5zAY6pgGzbb0Sm4WDokj0oBD935Wfg8YI3obZeg27IITyoh1t%2FiALM4q94m6c4XbmezMBfEf%2BGS2mDSGZvqWSB6sHW2j4EeglGi59juZd2a1mZsnfYzQ%2Brht2RVNaD1lKMuF8zHZgTv6%2F05B%2FUXJtbgWl45dsDcDOgqrKxj3Ptcfi67gM0StNiCD0QFy50AlaJH83bGS6dUrjRKX2jR8fPg%2F5a4TmTCK5UbuZ&X-Amz-Signature=995eb232c454d8146cc12251fa53990a522d102f053f8bab2593d8a79dd72617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPQRQYS%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGbaG7mwfaJEPJNrkMPz2degwiZkDeqp2kGBn69XKWMgAiAt3W7U6NPhstHhetXz4BAcmu7gQOOD7188MzIETLGBDSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMLfO8Omgcg2yKfzkXKtwDSjJQsPJNObZ5y7qQgHlXMDiBJyVI74BpblG7hQCqYM4isgJoPb4FYmErSdvUEMay1qe7xVxU%2BNRvH1qwjprK24zohksCN5vCc0%2Fs8sYqtxxJ6g2h4cwhjjgzM2FXRckTbcolJT940Sc%2BCE1J8rc5nBYu%2F1PNvBg2VH7SZYBmKbPfAM2XBNxwtGj4i8JzMSR28%2ByYc%2BH0yxRXqI7CKToosimwDQPBMWF2lQUd7XWp4nAd%2BCfN0MZBckCthqaYGUqWX5iZNEo%2FvzLCS9WS16vM9RXaKnrlqRoXjnQN%2BI%2BX5vjUnRPy3HJn5glsDOYUVYEPA9qXSpFs30S3UmU5UH34%2F53SVEQD5lXeV3mVQBt9XHaDlZuIzZuGMlQcKVPGyG45bjf02ClHaizvIcH23PLC4FgEPOZnaaAbf6UdxOllJGlOoakEz8%2FlPksTwoenq%2BvFoGZvy%2BvG2RsMPnz1AU8fKSGr5khjvGRZt1aBta05VUCVe%2FXy1ua%2B%2FM%2B2L54itPBEghlUqWQnxRDi%2BIVkxL2074hdUlxMI9aozUoEt9tefYVfJ3zs5tEn7F8eUTE0zE9GXYiSzuE3ZwcLhu26m25itIACNAlo5GnCVAAasXf2ZIhersaVlX%2Bs2%2B%2FQlS8wyoP5zAY6pgGzbb0Sm4WDokj0oBD935Wfg8YI3obZeg27IITyoh1t%2FiALM4q94m6c4XbmezMBfEf%2BGS2mDSGZvqWSB6sHW2j4EeglGi59juZd2a1mZsnfYzQ%2Brht2RVNaD1lKMuF8zHZgTv6%2F05B%2FUXJtbgWl45dsDcDOgqrKxj3Ptcfi67gM0StNiCD0QFy50AlaJH83bGS6dUrjRKX2jR8fPg%2F5a4TmTCK5UbuZ&X-Amz-Signature=079c4f61174d3d349932ea5f5114a40057f4a9001fdfddbfce25738a786eb49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


