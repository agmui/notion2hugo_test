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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLF4CAG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxTFzQWJc7wobeReAdXBqcFe15C4u52TQ%2FnLoyK4%2FoJAiEAinGbLE04sQ4Gu3E03eq2LLIHmUcnBuGp7lAEznpb1awq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCUECdSfkvwuGLQFsyrcA0oQpD9nQT7KGOzKZYAkQl8J7ddT80NHJoDcckBsXIqBNijvw0BEOniPp0rwjf0LJ%2ByxINC8DEtqbMf7KDmOe6vZqZXiX4bvuiAcnSRWT9R5fcyTHQ3%2BQTnKDzn2yPpum2myguTK%2FfNsB7E4jSsylMW9rW0kHwEwlKmj33iMAX8lRbVfJUop9pqTuSXX7SqwdjUikLLuUpg75ai3e%2BhH4F4fHfPanMdweOV2MUbskQsx%2FQy2eN9NI47Y28DTZI2cdhAzlHh%2FmC9JnJ4dDh6CzrciVa%2BwOhZhLKT4NFpDulHEDk7h5OH%2FZmUV732cLdLsifkKoeBNUW47H9iaLqRPOn5XBMmiJVXkS5QBLIvUPlLUvukYqyImKpjezeKDvRaUZgL1zPh2iZIROnoDUK5O3w3WrM70bC%2FcjsuGeNNgigLU2wJmNUDCK879puooXKqtrW3nngc6ikBBrd6LijlWrORpQX%2B3tMKl4sqYb7SZHEuxv0sZKw%2FaglvNFVrib2NDVVLoZ9VLyBqJjErKhM7KwOppxAk%2BfcqsMkTK1o3%2BfoVXZItfOgWKWmIIxjfsF%2F5MmPnr54wA5rnbb2qqDEbboj9o4eXs2GzDFLP5ytJ4cWTzJwYQ9NKEsSgFAF5QMPL3gMUGOqUBbULtZlPkoQ4LvLljHIyuN30dGgJH%2Ba%2FSuXKwuqxhmW7w5EgD2fdann%2Bf21bLymlvEDggfuHcqAijCtk6V%2F9uKfYrovJLXIjCdtpyEfT64nZVQKUcIUoyalAd7R5xUl9WonqRjsR6MZjr5PIIx1t9Q2WcxlMIg%2BBTpVl3nw9U9r9bnjaIFjrKQtBDFnE6kiqqhC%2Bx8aMZfl2uAGIAL7MlifIrYOV5&X-Amz-Signature=5dac76e725912c038e96ff344f6cf45ae86e699dfabe27b447e35dccf051bd75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLF4CAG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxTFzQWJc7wobeReAdXBqcFe15C4u52TQ%2FnLoyK4%2FoJAiEAinGbLE04sQ4Gu3E03eq2LLIHmUcnBuGp7lAEznpb1awq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCUECdSfkvwuGLQFsyrcA0oQpD9nQT7KGOzKZYAkQl8J7ddT80NHJoDcckBsXIqBNijvw0BEOniPp0rwjf0LJ%2ByxINC8DEtqbMf7KDmOe6vZqZXiX4bvuiAcnSRWT9R5fcyTHQ3%2BQTnKDzn2yPpum2myguTK%2FfNsB7E4jSsylMW9rW0kHwEwlKmj33iMAX8lRbVfJUop9pqTuSXX7SqwdjUikLLuUpg75ai3e%2BhH4F4fHfPanMdweOV2MUbskQsx%2FQy2eN9NI47Y28DTZI2cdhAzlHh%2FmC9JnJ4dDh6CzrciVa%2BwOhZhLKT4NFpDulHEDk7h5OH%2FZmUV732cLdLsifkKoeBNUW47H9iaLqRPOn5XBMmiJVXkS5QBLIvUPlLUvukYqyImKpjezeKDvRaUZgL1zPh2iZIROnoDUK5O3w3WrM70bC%2FcjsuGeNNgigLU2wJmNUDCK879puooXKqtrW3nngc6ikBBrd6LijlWrORpQX%2B3tMKl4sqYb7SZHEuxv0sZKw%2FaglvNFVrib2NDVVLoZ9VLyBqJjErKhM7KwOppxAk%2BfcqsMkTK1o3%2BfoVXZItfOgWKWmIIxjfsF%2F5MmPnr54wA5rnbb2qqDEbboj9o4eXs2GzDFLP5ytJ4cWTzJwYQ9NKEsSgFAF5QMPL3gMUGOqUBbULtZlPkoQ4LvLljHIyuN30dGgJH%2Ba%2FSuXKwuqxhmW7w5EgD2fdann%2Bf21bLymlvEDggfuHcqAijCtk6V%2F9uKfYrovJLXIjCdtpyEfT64nZVQKUcIUoyalAd7R5xUl9WonqRjsR6MZjr5PIIx1t9Q2WcxlMIg%2BBTpVl3nw9U9r9bnjaIFjrKQtBDFnE6kiqqhC%2Bx8aMZfl2uAGIAL7MlifIrYOV5&X-Amz-Signature=6e37f3d48ef963d21dbf334cdfff4614b0fed8f15ecded87251a5c462cc4a958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLF4CAG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxTFzQWJc7wobeReAdXBqcFe15C4u52TQ%2FnLoyK4%2FoJAiEAinGbLE04sQ4Gu3E03eq2LLIHmUcnBuGp7lAEznpb1awq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCUECdSfkvwuGLQFsyrcA0oQpD9nQT7KGOzKZYAkQl8J7ddT80NHJoDcckBsXIqBNijvw0BEOniPp0rwjf0LJ%2ByxINC8DEtqbMf7KDmOe6vZqZXiX4bvuiAcnSRWT9R5fcyTHQ3%2BQTnKDzn2yPpum2myguTK%2FfNsB7E4jSsylMW9rW0kHwEwlKmj33iMAX8lRbVfJUop9pqTuSXX7SqwdjUikLLuUpg75ai3e%2BhH4F4fHfPanMdweOV2MUbskQsx%2FQy2eN9NI47Y28DTZI2cdhAzlHh%2FmC9JnJ4dDh6CzrciVa%2BwOhZhLKT4NFpDulHEDk7h5OH%2FZmUV732cLdLsifkKoeBNUW47H9iaLqRPOn5XBMmiJVXkS5QBLIvUPlLUvukYqyImKpjezeKDvRaUZgL1zPh2iZIROnoDUK5O3w3WrM70bC%2FcjsuGeNNgigLU2wJmNUDCK879puooXKqtrW3nngc6ikBBrd6LijlWrORpQX%2B3tMKl4sqYb7SZHEuxv0sZKw%2FaglvNFVrib2NDVVLoZ9VLyBqJjErKhM7KwOppxAk%2BfcqsMkTK1o3%2BfoVXZItfOgWKWmIIxjfsF%2F5MmPnr54wA5rnbb2qqDEbboj9o4eXs2GzDFLP5ytJ4cWTzJwYQ9NKEsSgFAF5QMPL3gMUGOqUBbULtZlPkoQ4LvLljHIyuN30dGgJH%2Ba%2FSuXKwuqxhmW7w5EgD2fdann%2Bf21bLymlvEDggfuHcqAijCtk6V%2F9uKfYrovJLXIjCdtpyEfT64nZVQKUcIUoyalAd7R5xUl9WonqRjsR6MZjr5PIIx1t9Q2WcxlMIg%2BBTpVl3nw9U9r9bnjaIFjrKQtBDFnE6kiqqhC%2Bx8aMZfl2uAGIAL7MlifIrYOV5&X-Amz-Signature=310bd464eca721765a91990b8172f21b1e2ccff31000dd0b7ef7facddfff50e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLF4CAG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxTFzQWJc7wobeReAdXBqcFe15C4u52TQ%2FnLoyK4%2FoJAiEAinGbLE04sQ4Gu3E03eq2LLIHmUcnBuGp7lAEznpb1awq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCUECdSfkvwuGLQFsyrcA0oQpD9nQT7KGOzKZYAkQl8J7ddT80NHJoDcckBsXIqBNijvw0BEOniPp0rwjf0LJ%2ByxINC8DEtqbMf7KDmOe6vZqZXiX4bvuiAcnSRWT9R5fcyTHQ3%2BQTnKDzn2yPpum2myguTK%2FfNsB7E4jSsylMW9rW0kHwEwlKmj33iMAX8lRbVfJUop9pqTuSXX7SqwdjUikLLuUpg75ai3e%2BhH4F4fHfPanMdweOV2MUbskQsx%2FQy2eN9NI47Y28DTZI2cdhAzlHh%2FmC9JnJ4dDh6CzrciVa%2BwOhZhLKT4NFpDulHEDk7h5OH%2FZmUV732cLdLsifkKoeBNUW47H9iaLqRPOn5XBMmiJVXkS5QBLIvUPlLUvukYqyImKpjezeKDvRaUZgL1zPh2iZIROnoDUK5O3w3WrM70bC%2FcjsuGeNNgigLU2wJmNUDCK879puooXKqtrW3nngc6ikBBrd6LijlWrORpQX%2B3tMKl4sqYb7SZHEuxv0sZKw%2FaglvNFVrib2NDVVLoZ9VLyBqJjErKhM7KwOppxAk%2BfcqsMkTK1o3%2BfoVXZItfOgWKWmIIxjfsF%2F5MmPnr54wA5rnbb2qqDEbboj9o4eXs2GzDFLP5ytJ4cWTzJwYQ9NKEsSgFAF5QMPL3gMUGOqUBbULtZlPkoQ4LvLljHIyuN30dGgJH%2Ba%2FSuXKwuqxhmW7w5EgD2fdann%2Bf21bLymlvEDggfuHcqAijCtk6V%2F9uKfYrovJLXIjCdtpyEfT64nZVQKUcIUoyalAd7R5xUl9WonqRjsR6MZjr5PIIx1t9Q2WcxlMIg%2BBTpVl3nw9U9r9bnjaIFjrKQtBDFnE6kiqqhC%2Bx8aMZfl2uAGIAL7MlifIrYOV5&X-Amz-Signature=70fed2ee5e1137dbda5ea3ce397554c58c6fe320085bc84be463acf29942a8ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLF4CAG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxTFzQWJc7wobeReAdXBqcFe15C4u52TQ%2FnLoyK4%2FoJAiEAinGbLE04sQ4Gu3E03eq2LLIHmUcnBuGp7lAEznpb1awq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCUECdSfkvwuGLQFsyrcA0oQpD9nQT7KGOzKZYAkQl8J7ddT80NHJoDcckBsXIqBNijvw0BEOniPp0rwjf0LJ%2ByxINC8DEtqbMf7KDmOe6vZqZXiX4bvuiAcnSRWT9R5fcyTHQ3%2BQTnKDzn2yPpum2myguTK%2FfNsB7E4jSsylMW9rW0kHwEwlKmj33iMAX8lRbVfJUop9pqTuSXX7SqwdjUikLLuUpg75ai3e%2BhH4F4fHfPanMdweOV2MUbskQsx%2FQy2eN9NI47Y28DTZI2cdhAzlHh%2FmC9JnJ4dDh6CzrciVa%2BwOhZhLKT4NFpDulHEDk7h5OH%2FZmUV732cLdLsifkKoeBNUW47H9iaLqRPOn5XBMmiJVXkS5QBLIvUPlLUvukYqyImKpjezeKDvRaUZgL1zPh2iZIROnoDUK5O3w3WrM70bC%2FcjsuGeNNgigLU2wJmNUDCK879puooXKqtrW3nngc6ikBBrd6LijlWrORpQX%2B3tMKl4sqYb7SZHEuxv0sZKw%2FaglvNFVrib2NDVVLoZ9VLyBqJjErKhM7KwOppxAk%2BfcqsMkTK1o3%2BfoVXZItfOgWKWmIIxjfsF%2F5MmPnr54wA5rnbb2qqDEbboj9o4eXs2GzDFLP5ytJ4cWTzJwYQ9NKEsSgFAF5QMPL3gMUGOqUBbULtZlPkoQ4LvLljHIyuN30dGgJH%2Ba%2FSuXKwuqxhmW7w5EgD2fdann%2Bf21bLymlvEDggfuHcqAijCtk6V%2F9uKfYrovJLXIjCdtpyEfT64nZVQKUcIUoyalAd7R5xUl9WonqRjsR6MZjr5PIIx1t9Q2WcxlMIg%2BBTpVl3nw9U9r9bnjaIFjrKQtBDFnE6kiqqhC%2Bx8aMZfl2uAGIAL7MlifIrYOV5&X-Amz-Signature=a644cad898506f5f538e3e4e1329d7e2c84fca4c026347844809aeec4fb1093b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLF4CAG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxTFzQWJc7wobeReAdXBqcFe15C4u52TQ%2FnLoyK4%2FoJAiEAinGbLE04sQ4Gu3E03eq2LLIHmUcnBuGp7lAEznpb1awq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCUECdSfkvwuGLQFsyrcA0oQpD9nQT7KGOzKZYAkQl8J7ddT80NHJoDcckBsXIqBNijvw0BEOniPp0rwjf0LJ%2ByxINC8DEtqbMf7KDmOe6vZqZXiX4bvuiAcnSRWT9R5fcyTHQ3%2BQTnKDzn2yPpum2myguTK%2FfNsB7E4jSsylMW9rW0kHwEwlKmj33iMAX8lRbVfJUop9pqTuSXX7SqwdjUikLLuUpg75ai3e%2BhH4F4fHfPanMdweOV2MUbskQsx%2FQy2eN9NI47Y28DTZI2cdhAzlHh%2FmC9JnJ4dDh6CzrciVa%2BwOhZhLKT4NFpDulHEDk7h5OH%2FZmUV732cLdLsifkKoeBNUW47H9iaLqRPOn5XBMmiJVXkS5QBLIvUPlLUvukYqyImKpjezeKDvRaUZgL1zPh2iZIROnoDUK5O3w3WrM70bC%2FcjsuGeNNgigLU2wJmNUDCK879puooXKqtrW3nngc6ikBBrd6LijlWrORpQX%2B3tMKl4sqYb7SZHEuxv0sZKw%2FaglvNFVrib2NDVVLoZ9VLyBqJjErKhM7KwOppxAk%2BfcqsMkTK1o3%2BfoVXZItfOgWKWmIIxjfsF%2F5MmPnr54wA5rnbb2qqDEbboj9o4eXs2GzDFLP5ytJ4cWTzJwYQ9NKEsSgFAF5QMPL3gMUGOqUBbULtZlPkoQ4LvLljHIyuN30dGgJH%2Ba%2FSuXKwuqxhmW7w5EgD2fdann%2Bf21bLymlvEDggfuHcqAijCtk6V%2F9uKfYrovJLXIjCdtpyEfT64nZVQKUcIUoyalAd7R5xUl9WonqRjsR6MZjr5PIIx1t9Q2WcxlMIg%2BBTpVl3nw9U9r9bnjaIFjrKQtBDFnE6kiqqhC%2Bx8aMZfl2uAGIAL7MlifIrYOV5&X-Amz-Signature=607d1739720720d60d8578c269b7d56922dd5508b9cf7a212beb773702e815d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLF4CAG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxTFzQWJc7wobeReAdXBqcFe15C4u52TQ%2FnLoyK4%2FoJAiEAinGbLE04sQ4Gu3E03eq2LLIHmUcnBuGp7lAEznpb1awq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCUECdSfkvwuGLQFsyrcA0oQpD9nQT7KGOzKZYAkQl8J7ddT80NHJoDcckBsXIqBNijvw0BEOniPp0rwjf0LJ%2ByxINC8DEtqbMf7KDmOe6vZqZXiX4bvuiAcnSRWT9R5fcyTHQ3%2BQTnKDzn2yPpum2myguTK%2FfNsB7E4jSsylMW9rW0kHwEwlKmj33iMAX8lRbVfJUop9pqTuSXX7SqwdjUikLLuUpg75ai3e%2BhH4F4fHfPanMdweOV2MUbskQsx%2FQy2eN9NI47Y28DTZI2cdhAzlHh%2FmC9JnJ4dDh6CzrciVa%2BwOhZhLKT4NFpDulHEDk7h5OH%2FZmUV732cLdLsifkKoeBNUW47H9iaLqRPOn5XBMmiJVXkS5QBLIvUPlLUvukYqyImKpjezeKDvRaUZgL1zPh2iZIROnoDUK5O3w3WrM70bC%2FcjsuGeNNgigLU2wJmNUDCK879puooXKqtrW3nngc6ikBBrd6LijlWrORpQX%2B3tMKl4sqYb7SZHEuxv0sZKw%2FaglvNFVrib2NDVVLoZ9VLyBqJjErKhM7KwOppxAk%2BfcqsMkTK1o3%2BfoVXZItfOgWKWmIIxjfsF%2F5MmPnr54wA5rnbb2qqDEbboj9o4eXs2GzDFLP5ytJ4cWTzJwYQ9NKEsSgFAF5QMPL3gMUGOqUBbULtZlPkoQ4LvLljHIyuN30dGgJH%2Ba%2FSuXKwuqxhmW7w5EgD2fdann%2Bf21bLymlvEDggfuHcqAijCtk6V%2F9uKfYrovJLXIjCdtpyEfT64nZVQKUcIUoyalAd7R5xUl9WonqRjsR6MZjr5PIIx1t9Q2WcxlMIg%2BBTpVl3nw9U9r9bnjaIFjrKQtBDFnE6kiqqhC%2Bx8aMZfl2uAGIAL7MlifIrYOV5&X-Amz-Signature=71f338193e32b297fa794604c0b0edd6311897e2b413e3d9020487a79021c4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLF4CAG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxTFzQWJc7wobeReAdXBqcFe15C4u52TQ%2FnLoyK4%2FoJAiEAinGbLE04sQ4Gu3E03eq2LLIHmUcnBuGp7lAEznpb1awq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCUECdSfkvwuGLQFsyrcA0oQpD9nQT7KGOzKZYAkQl8J7ddT80NHJoDcckBsXIqBNijvw0BEOniPp0rwjf0LJ%2ByxINC8DEtqbMf7KDmOe6vZqZXiX4bvuiAcnSRWT9R5fcyTHQ3%2BQTnKDzn2yPpum2myguTK%2FfNsB7E4jSsylMW9rW0kHwEwlKmj33iMAX8lRbVfJUop9pqTuSXX7SqwdjUikLLuUpg75ai3e%2BhH4F4fHfPanMdweOV2MUbskQsx%2FQy2eN9NI47Y28DTZI2cdhAzlHh%2FmC9JnJ4dDh6CzrciVa%2BwOhZhLKT4NFpDulHEDk7h5OH%2FZmUV732cLdLsifkKoeBNUW47H9iaLqRPOn5XBMmiJVXkS5QBLIvUPlLUvukYqyImKpjezeKDvRaUZgL1zPh2iZIROnoDUK5O3w3WrM70bC%2FcjsuGeNNgigLU2wJmNUDCK879puooXKqtrW3nngc6ikBBrd6LijlWrORpQX%2B3tMKl4sqYb7SZHEuxv0sZKw%2FaglvNFVrib2NDVVLoZ9VLyBqJjErKhM7KwOppxAk%2BfcqsMkTK1o3%2BfoVXZItfOgWKWmIIxjfsF%2F5MmPnr54wA5rnbb2qqDEbboj9o4eXs2GzDFLP5ytJ4cWTzJwYQ9NKEsSgFAF5QMPL3gMUGOqUBbULtZlPkoQ4LvLljHIyuN30dGgJH%2Ba%2FSuXKwuqxhmW7w5EgD2fdann%2Bf21bLymlvEDggfuHcqAijCtk6V%2F9uKfYrovJLXIjCdtpyEfT64nZVQKUcIUoyalAd7R5xUl9WonqRjsR6MZjr5PIIx1t9Q2WcxlMIg%2BBTpVl3nw9U9r9bnjaIFjrKQtBDFnE6kiqqhC%2Bx8aMZfl2uAGIAL7MlifIrYOV5&X-Amz-Signature=7355ee940bba7854053960b8e2b243d528559e1290736d928783b905cc7eb786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLF4CAG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxTFzQWJc7wobeReAdXBqcFe15C4u52TQ%2FnLoyK4%2FoJAiEAinGbLE04sQ4Gu3E03eq2LLIHmUcnBuGp7lAEznpb1awq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCUECdSfkvwuGLQFsyrcA0oQpD9nQT7KGOzKZYAkQl8J7ddT80NHJoDcckBsXIqBNijvw0BEOniPp0rwjf0LJ%2ByxINC8DEtqbMf7KDmOe6vZqZXiX4bvuiAcnSRWT9R5fcyTHQ3%2BQTnKDzn2yPpum2myguTK%2FfNsB7E4jSsylMW9rW0kHwEwlKmj33iMAX8lRbVfJUop9pqTuSXX7SqwdjUikLLuUpg75ai3e%2BhH4F4fHfPanMdweOV2MUbskQsx%2FQy2eN9NI47Y28DTZI2cdhAzlHh%2FmC9JnJ4dDh6CzrciVa%2BwOhZhLKT4NFpDulHEDk7h5OH%2FZmUV732cLdLsifkKoeBNUW47H9iaLqRPOn5XBMmiJVXkS5QBLIvUPlLUvukYqyImKpjezeKDvRaUZgL1zPh2iZIROnoDUK5O3w3WrM70bC%2FcjsuGeNNgigLU2wJmNUDCK879puooXKqtrW3nngc6ikBBrd6LijlWrORpQX%2B3tMKl4sqYb7SZHEuxv0sZKw%2FaglvNFVrib2NDVVLoZ9VLyBqJjErKhM7KwOppxAk%2BfcqsMkTK1o3%2BfoVXZItfOgWKWmIIxjfsF%2F5MmPnr54wA5rnbb2qqDEbboj9o4eXs2GzDFLP5ytJ4cWTzJwYQ9NKEsSgFAF5QMPL3gMUGOqUBbULtZlPkoQ4LvLljHIyuN30dGgJH%2Ba%2FSuXKwuqxhmW7w5EgD2fdann%2Bf21bLymlvEDggfuHcqAijCtk6V%2F9uKfYrovJLXIjCdtpyEfT64nZVQKUcIUoyalAd7R5xUl9WonqRjsR6MZjr5PIIx1t9Q2WcxlMIg%2BBTpVl3nw9U9r9bnjaIFjrKQtBDFnE6kiqqhC%2Bx8aMZfl2uAGIAL7MlifIrYOV5&X-Amz-Signature=26d2d7b22f86bc3fecb143972491a1ea3e0d3ec07beeaeb4e26a5d14b0d1937c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLF4CAG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxTFzQWJc7wobeReAdXBqcFe15C4u52TQ%2FnLoyK4%2FoJAiEAinGbLE04sQ4Gu3E03eq2LLIHmUcnBuGp7lAEznpb1awq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCUECdSfkvwuGLQFsyrcA0oQpD9nQT7KGOzKZYAkQl8J7ddT80NHJoDcckBsXIqBNijvw0BEOniPp0rwjf0LJ%2ByxINC8DEtqbMf7KDmOe6vZqZXiX4bvuiAcnSRWT9R5fcyTHQ3%2BQTnKDzn2yPpum2myguTK%2FfNsB7E4jSsylMW9rW0kHwEwlKmj33iMAX8lRbVfJUop9pqTuSXX7SqwdjUikLLuUpg75ai3e%2BhH4F4fHfPanMdweOV2MUbskQsx%2FQy2eN9NI47Y28DTZI2cdhAzlHh%2FmC9JnJ4dDh6CzrciVa%2BwOhZhLKT4NFpDulHEDk7h5OH%2FZmUV732cLdLsifkKoeBNUW47H9iaLqRPOn5XBMmiJVXkS5QBLIvUPlLUvukYqyImKpjezeKDvRaUZgL1zPh2iZIROnoDUK5O3w3WrM70bC%2FcjsuGeNNgigLU2wJmNUDCK879puooXKqtrW3nngc6ikBBrd6LijlWrORpQX%2B3tMKl4sqYb7SZHEuxv0sZKw%2FaglvNFVrib2NDVVLoZ9VLyBqJjErKhM7KwOppxAk%2BfcqsMkTK1o3%2BfoVXZItfOgWKWmIIxjfsF%2F5MmPnr54wA5rnbb2qqDEbboj9o4eXs2GzDFLP5ytJ4cWTzJwYQ9NKEsSgFAF5QMPL3gMUGOqUBbULtZlPkoQ4LvLljHIyuN30dGgJH%2Ba%2FSuXKwuqxhmW7w5EgD2fdann%2Bf21bLymlvEDggfuHcqAijCtk6V%2F9uKfYrovJLXIjCdtpyEfT64nZVQKUcIUoyalAd7R5xUl9WonqRjsR6MZjr5PIIx1t9Q2WcxlMIg%2BBTpVl3nw9U9r9bnjaIFjrKQtBDFnE6kiqqhC%2Bx8aMZfl2uAGIAL7MlifIrYOV5&X-Amz-Signature=6f5405d2fbbdbff9af1cd44cded69b89cd1b1599c0de66f13e15c10c7c84c626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622GTHIH3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE8g8Wai5otrda7Z1GT7j6OEqrvzxDCGTjFdCsshtK%2BwAiEA9gXL5zGJvOzT1fZLBrty2xCmZ%2BqzHztIY9%2BHa4RE09cq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCwTMQpH036AP51oRCrcAw879lM9m734TKxja9jTzEqZNYVMmLUCQV3f2JZjp9E0w7gtEVT4Jc302%2B%2Fmgjx%2FZyyXHbihRsg3FUzPSwy%2FqRaY8E%2FpMX0RDcTPgo3VEKsu76SiHhJfo2IQkbGnLO5UwFMVGl%2FfsiBoVzG7ezUCdJq9Bose2QVIPyFBy%2B6u7g%2BOKxuluAEXY9n8PX%2B%2FT9prSGq7a%2Fyc2dMUBx1Gj2NfJcs5QocHGrX%2Bmd6rJjJk0yNKYrpzakF2BtLAE6Q7%2B1tRDHz0XamtxYebnWk9tLPiQBhHqCzUWKKubpdoe%2BlUAtLYw7nh7suumxFWphec2p6QzZNlMKhf8b0QvUyuFngm33ZtqeW%2FLgdPRwGpze9CEVy2aiZCsQwaGlN2zfFps6y2TjxzyflQKstR%2F2z%2FXSU6uLWgrkClhqSoVmPgKDmv03UZAyT7C7jbSrnIMoBSh5uMQ3qrEhxNMf8yW%2FHNJqPpVoiROQqwogxRBqji%2FmCsgpbynF77A%2B6K4ix2%2BxPUCW93SZpak1SrnI5MNa3JK58mS7589gBAVVVqoV9313zmIkyTU11ivFnpTIE%2FqwkuShpGqhX0piKVuWJ7YTe39W6nPky%2BpiYv90Pkjd7bzx%2B%2FwadspPCVsYpD%2FeXHh39NMKr4gMUGOqUBKox5aeo4HmSS3sl%2B83NWh%2FIMt5JO%2B46rX0wJ%2FqXbsTZuSavzuX9GZvgYVAKI7dFSiKGivOpLOgEEQfJ3AI9D0C8JtTdoTodp2p4hHHLo1P148Pnl1swhI33PTZlcN%2Fyeuib3Un4a6AwMYwbPamFcScFu1KAQr%2BVeP9p1fSEtLcVaFM8AGXAIKyCgBAa6qDgDuEDCHJ8Hb34L1REiiIZCzVQh0aRT&X-Amz-Signature=1bbe48e514eccb3a1e1c548afccbb5c86e11d66e945243fc8ed520e5d4009d44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMFRHBK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDHrQei7cSDI%2FuBgbNFvuGxj3N8%2BwAmMP9kz6Ae9biQhAiEAzivUwh4eE3VTuj6K7WacKcpewIU7YT1ub3nWISxcnBkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBRVBoBPc%2BXaSJOyOircAwCIK4QCuFH%2Fs%2BaIWXKX3P%2FEEniNVyKlsZjGJNrFp%2BAAhT%2BAb6bxll9xRpoUd785FCFR%2BWMqLOoVYB4qNc1ZP1wA4GI10TkQAPBd1gZ2Gikb4TGo8gPvQesLgv5%2BQJ7E7X1NVkradQi0OG9fLX0lSbHOa%2FMhtscKFRWiLu75gTFMp%2Fmg%2BL7OeFdjamSmzqh5yOwlXDIesYI0VJpB69p0F1cXIwZEgvPxrO2gQ1e%2F0OU5IDZZ%2F7PsWFnpDN1ecKUeuU7iyXc1jdkBQIR2TQesGpjXlKWuhz6eW7xHAxeCzHdF0YeWl8bDh2mIFk%2Fsoerm412vaXedf28t%2FE%2BV3%2F5O5prjssbi3jUy4zzi88NUSTR%2Bh3bVF1LzO1t5o2hrEPjqJB%2FHrI0%2BcKwDo5%2Bn2c1brfZoVTdNXjIx8l%2BMLESkxivIuxS7%2BTQzZ778eSK32qOM0ocxGu9j230iL2U0nsyYzU0gJ8WuPjLtB8eaJTT3NajJwDkLecLpSORrl4Wld%2BTP%2F9Nc3eZfbaF%2Be3tMXz%2FUe3Zqmg1yfvkUzm690S346z5NkIgbw1tKrVytCcmm9%2FDcQrtFRZvpTHSr5H9Exy98ogXClG%2FsKd4Ufd%2BI%2F2s9Lb5E9WeMvRfKqQtV7lf%2BMJj4gMUGOqUB5pJGudUMN2GYCzbvSdaQYfAOyl3qb3c%2FTRnotKKo68civplS2STSbq0crjPvpV5kMvzggSlbk6UWctgOBXpgbOfHLcwk5cJa6%2B72B2YZlgxzrxasnMI4fxAb3OPKE8aCNnap4t8WeB9pR2hMsDUzTFViHTNtNtGukGKRU%2FqbAJVs2%2BbjZ5emShfRKEGT1arcFzg2NP9EwDQ872PJ9qji%2FrgASSTd&X-Amz-Signature=097e2de8284857f0936cdcde0840f8aa32b97697b52280d9904e7a33bf79c2b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDYDL5O%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIG4%2FagMmzDDab%2B3g%2B1r4l3rJ0eF9mtik55vkCP7p3QTLAiB69x5m3eWkLgvmr8msIg4m%2BFXZkhXBTlaKI26XC3ggySr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMZh%2Fpliw3pSl%2BEpmYKtwDX3q6bPP5D%2Ff%2F6Et%2BqILefjx918HIXcBFQo3DwNsiOKwTHu2VIEUOGyRboiAqSCBiH6D6IYqQEBqVQxVBRq9T1bKqOm87c9juJlhuLzlV%2FWNDxehQDBUzZ3pwfNWmEo7XY%2B1LshF4yDho3jMeQNHciyFzg5R3Ix3zS2PV81GhvyZ0IwtQBu7TYKurgcQ2TQovl0gE4YhIiDSkDbyJ%2BAshSrRsw2a9y%2F76vfj0EmPfiULtDimS9pT7KvdM5aTd8gH2weUviEFd%2B4%2BXwcqf3h9NT57AKRg1EIob4GJq72HJy0KXWr9r81R%2Bpc6xRHeCPj%2BYqMVYs1uM4MqWZu1p8BDz%2FH9VBbQsduYOGaAZ3T%2B5n%2B1eyTW3lhbtZU68%2FurRzQ%2FuV0kZO0n1dA4%2BAyAJopnaGdMPNYdBobjgVrBs1DoudU5AGxtJO9fQnG3ps2b9UYIFuQpnx%2FiEoM753NfU1LiclxDjPvk%2BBw7e%2FZxBXM2K8WrNGRejxeFX8feY%2BhTVIDuSCkk%2FR1sTGCLcca1htWwnclKtE6WxASqQRg4JUqxWklE5YpCxp0aWZhz9bhvHjwph3NQYFydjkkCc1UYOPPGBymJDHXJWdmVKJiq3ysZ2PeB5UteycQQA5fStkqowwveAxQY6pgH1xa4DOpO7GEWwhahR9kBBzbrCZ8cBWDv6TB5HG7rWpNtAoSfaaa84mnNYQVVPAToqPNkAaE3XTFw9rfd6n2t990NSbEyb9RAuBJtPsLIDMFmRtTv%2FTkgtZlBGY0VBHWi7VFjmfEY9%2BvKViC4VdEQpA0bt%2BufqYgpE%2FopPG57m5gGEsdIYk19xT0U%2B%2BU8fNIA4mWIKGgb0NN%2FyZ9TwpIlTZE%2ByWU1V&X-Amz-Signature=69c3be6759b367b87be0f1ce866f055b2b87fab40388c6eec0d188dc30f48273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLF4CAG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxTFzQWJc7wobeReAdXBqcFe15C4u52TQ%2FnLoyK4%2FoJAiEAinGbLE04sQ4Gu3E03eq2LLIHmUcnBuGp7lAEznpb1awq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCUECdSfkvwuGLQFsyrcA0oQpD9nQT7KGOzKZYAkQl8J7ddT80NHJoDcckBsXIqBNijvw0BEOniPp0rwjf0LJ%2ByxINC8DEtqbMf7KDmOe6vZqZXiX4bvuiAcnSRWT9R5fcyTHQ3%2BQTnKDzn2yPpum2myguTK%2FfNsB7E4jSsylMW9rW0kHwEwlKmj33iMAX8lRbVfJUop9pqTuSXX7SqwdjUikLLuUpg75ai3e%2BhH4F4fHfPanMdweOV2MUbskQsx%2FQy2eN9NI47Y28DTZI2cdhAzlHh%2FmC9JnJ4dDh6CzrciVa%2BwOhZhLKT4NFpDulHEDk7h5OH%2FZmUV732cLdLsifkKoeBNUW47H9iaLqRPOn5XBMmiJVXkS5QBLIvUPlLUvukYqyImKpjezeKDvRaUZgL1zPh2iZIROnoDUK5O3w3WrM70bC%2FcjsuGeNNgigLU2wJmNUDCK879puooXKqtrW3nngc6ikBBrd6LijlWrORpQX%2B3tMKl4sqYb7SZHEuxv0sZKw%2FaglvNFVrib2NDVVLoZ9VLyBqJjErKhM7KwOppxAk%2BfcqsMkTK1o3%2BfoVXZItfOgWKWmIIxjfsF%2F5MmPnr54wA5rnbb2qqDEbboj9o4eXs2GzDFLP5ytJ4cWTzJwYQ9NKEsSgFAF5QMPL3gMUGOqUBbULtZlPkoQ4LvLljHIyuN30dGgJH%2Ba%2FSuXKwuqxhmW7w5EgD2fdann%2Bf21bLymlvEDggfuHcqAijCtk6V%2F9uKfYrovJLXIjCdtpyEfT64nZVQKUcIUoyalAd7R5xUl9WonqRjsR6MZjr5PIIx1t9Q2WcxlMIg%2BBTpVl3nw9U9r9bnjaIFjrKQtBDFnE6kiqqhC%2Bx8aMZfl2uAGIAL7MlifIrYOV5&X-Amz-Signature=37604ff44e4d02ff7527d254d8d9c13617708e580870172a9560794531f94d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCKHIWE2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEkNtM1V9lWYIClxu7pQlgeN43ch1IHRlx0qX7OFvQd9AiBXhmL7f8dwZpUstyszTpuZnaegWshAYq4aPKhB45mGoSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMoBaRecKquG0KZ1Y4KtwDdeytFWhmywAsHhCIwQH5wiwHUhGHStyQeLRr1cI2OP50jpPhHtrTVS54CtdpfUbS9oRr4n6LUSRJ8gdMfvh%2BPnSDkvhG89ByGcvJtVrqhIdT7G6cL48VIOURLcdk1Wf9X8n3V4KyJZC3Rc4fw3Eysv5gBbSDDoehFMmALZwOep09rRlHggC%2FBG3z5ePdMRy0fKJcvbkQTQoYsiqzyhQrifi8lpowjlPoVuSbDYDmMkqOoQfP4rADXCIIn9m4fqt8KAjOQH0RII9Uf1Zuhw6le6aAn7wQHjFN3oUGvLzeiUdnZTVuYXamPeAnthUFvh1sWiDEb%2FA9laQajWeIv0oH8LbnRbk8cE5SWn3QQrTeRByTAGzdmtACDtdJzYqXS%2BRHiquX6fQ8awjWo6F%2B5773tpb3M%2B1aSfTwlCEFsLO%2BfZKqnnVGR32gUCH6%2F6XvkdsrxdNup3gvS82QGNphbHzjWnENdHzud0B%2Fj6mC1rUiR4ygo4RLXrouE18ZGt19qx%2BolrRiKYNhZRswXrJS1sw73lYWUH2r8WyYOMo4YUN4HOOrdmcBLT8Cr%2BGtMeBdTFlZERVc8Nm1TL9R1gj2yrJsjgl%2FKbH362FhMbaRJMIvJN70voXhnaAcxz4%2F4kAwlviAxQY6pgHONNDVLaaj9WY4h2LiQcdoxeDKeUHDpTbQhzCJ3H7QHjy1Rg7tgRVJ1cHtnqWiEHaW2O0UsJ62ne51LmSEzYqQWpHy0uMnnE5A8o%2BbQGcfs5rbE1wlLONrsc8oMbtCEfC1HU%2Fhy7Z3v7064sHHvWb%2B7RiB8qy%2FF%2BtCsMm9ulEfhnHhDBiMRFW5Mgr40JotLpKYXGIBNDS31h2VKk5yLciyB4yM4m%2BF&X-Amz-Signature=3fec0d7e20d6b3c2c9e081ecf04a523ac40177af61812d40bf0f1abf58fe0a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLF4CAG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxTFzQWJc7wobeReAdXBqcFe15C4u52TQ%2FnLoyK4%2FoJAiEAinGbLE04sQ4Gu3E03eq2LLIHmUcnBuGp7lAEznpb1awq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCUECdSfkvwuGLQFsyrcA0oQpD9nQT7KGOzKZYAkQl8J7ddT80NHJoDcckBsXIqBNijvw0BEOniPp0rwjf0LJ%2ByxINC8DEtqbMf7KDmOe6vZqZXiX4bvuiAcnSRWT9R5fcyTHQ3%2BQTnKDzn2yPpum2myguTK%2FfNsB7E4jSsylMW9rW0kHwEwlKmj33iMAX8lRbVfJUop9pqTuSXX7SqwdjUikLLuUpg75ai3e%2BhH4F4fHfPanMdweOV2MUbskQsx%2FQy2eN9NI47Y28DTZI2cdhAzlHh%2FmC9JnJ4dDh6CzrciVa%2BwOhZhLKT4NFpDulHEDk7h5OH%2FZmUV732cLdLsifkKoeBNUW47H9iaLqRPOn5XBMmiJVXkS5QBLIvUPlLUvukYqyImKpjezeKDvRaUZgL1zPh2iZIROnoDUK5O3w3WrM70bC%2FcjsuGeNNgigLU2wJmNUDCK879puooXKqtrW3nngc6ikBBrd6LijlWrORpQX%2B3tMKl4sqYb7SZHEuxv0sZKw%2FaglvNFVrib2NDVVLoZ9VLyBqJjErKhM7KwOppxAk%2BfcqsMkTK1o3%2BfoVXZItfOgWKWmIIxjfsF%2F5MmPnr54wA5rnbb2qqDEbboj9o4eXs2GzDFLP5ytJ4cWTzJwYQ9NKEsSgFAF5QMPL3gMUGOqUBbULtZlPkoQ4LvLljHIyuN30dGgJH%2Ba%2FSuXKwuqxhmW7w5EgD2fdann%2Bf21bLymlvEDggfuHcqAijCtk6V%2F9uKfYrovJLXIjCdtpyEfT64nZVQKUcIUoyalAd7R5xUl9WonqRjsR6MZjr5PIIx1t9Q2WcxlMIg%2BBTpVl3nw9U9r9bnjaIFjrKQtBDFnE6kiqqhC%2Bx8aMZfl2uAGIAL7MlifIrYOV5&X-Amz-Signature=2f011aa379fc6d2c3417c947c6a90368567e7f194b69b1954b3fc119cc492593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65ZH6GQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD2NBCn7S3jfTt7avvB4BSgGVAuhvmzMqiH426E4rFtmwIgIlxz18SjsPIY%2FCvaG3R81i574Fk3zTKY3Th9otJCimoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDE4H2RL9vohemj0M1yrcAxtedc2DqrUSjYh1FerYYDT4Rj2rb5SwmomnYOa3LpgOOcy%2BlXPS5tCao8WjewIV6LsGpK%2BapHGJeXTCoeVTTUjnJXo5IMu8xyB9YB2aAhWDndmzHWzGgaDx%2B2ahvCbleT5K5%2BedHO2FeHCeXuUfPUTkNVTzG71ZPT%2BOyMmX7v83c2gw8NekDKIiSgpDhNsR9ltQIk0AiE%2B9Vu0WnxaNJ39TVMSQQnUDskpNA2keHKYoGtDllSPmkfBgtW9%2BurTlnwior1l2KJi%2BmhC5Mh%2B0WiYS81X3XAKrZOl18PmZwscwThiOnFnE7SsM%2Bv3D2L80XQiHQD3GfBL9E%2B8LXMXCyYCWiCiX6JzAaA%2FYvMtv%2F65FuaG%2FRS5POeeEjoBoik097%2FE2RlP4HSIPkiP1IQnl0ch1vXLPxTpLTJuf%2ByyJNAReXG8L0x5KQXZiNYgmTU4Xo8qtiSHpG1rnvI86QliBFHKoIddTyVhfbNybz6RQtZ7TjorkdfFr0z2Bv7VgEeIiQwj5D1XVDM7zSIw%2BSptY9jF55yXn21dtvWy8sB1Pok4M3sf9Y4u%2Bh%2FAeh23xbVALN9LZho1JLB9CqTgBjPxvK215rLbQYOBU9FHEBxxPfOOCpxw1oyHexeD5%2B2a8MLv4gMUGOqUB%2FVXWIWL9TFHNMI%2FENYRf3Ua%2BJ%2BPatCYsI0XFL7DMLWyApKItEsjplX%2BN2SaKp8gEZPzn9fOml%2BO3glICjBf1IxMb4pzwVHkpXQ%2FtlV8h9Gp3ats3k3CUE5DodibYeqGstsJTzYlHpVoyhueyoO3grq0FVYY4u60XsxT03XaPoiEao%2Fjkq4Nieo%2F7aSNDedR1VotWQD9cyZQ37yUY6%2Fg8HlLl3jnN&X-Amz-Signature=a909a3c4aafd07953859e01ee36cbcebe83ed6cf022b8be3818eee106e5a5e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLF4CAG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxTFzQWJc7wobeReAdXBqcFe15C4u52TQ%2FnLoyK4%2FoJAiEAinGbLE04sQ4Gu3E03eq2LLIHmUcnBuGp7lAEznpb1awq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCUECdSfkvwuGLQFsyrcA0oQpD9nQT7KGOzKZYAkQl8J7ddT80NHJoDcckBsXIqBNijvw0BEOniPp0rwjf0LJ%2ByxINC8DEtqbMf7KDmOe6vZqZXiX4bvuiAcnSRWT9R5fcyTHQ3%2BQTnKDzn2yPpum2myguTK%2FfNsB7E4jSsylMW9rW0kHwEwlKmj33iMAX8lRbVfJUop9pqTuSXX7SqwdjUikLLuUpg75ai3e%2BhH4F4fHfPanMdweOV2MUbskQsx%2FQy2eN9NI47Y28DTZI2cdhAzlHh%2FmC9JnJ4dDh6CzrciVa%2BwOhZhLKT4NFpDulHEDk7h5OH%2FZmUV732cLdLsifkKoeBNUW47H9iaLqRPOn5XBMmiJVXkS5QBLIvUPlLUvukYqyImKpjezeKDvRaUZgL1zPh2iZIROnoDUK5O3w3WrM70bC%2FcjsuGeNNgigLU2wJmNUDCK879puooXKqtrW3nngc6ikBBrd6LijlWrORpQX%2B3tMKl4sqYb7SZHEuxv0sZKw%2FaglvNFVrib2NDVVLoZ9VLyBqJjErKhM7KwOppxAk%2BfcqsMkTK1o3%2BfoVXZItfOgWKWmIIxjfsF%2F5MmPnr54wA5rnbb2qqDEbboj9o4eXs2GzDFLP5ytJ4cWTzJwYQ9NKEsSgFAF5QMPL3gMUGOqUBbULtZlPkoQ4LvLljHIyuN30dGgJH%2Ba%2FSuXKwuqxhmW7w5EgD2fdann%2Bf21bLymlvEDggfuHcqAijCtk6V%2F9uKfYrovJLXIjCdtpyEfT64nZVQKUcIUoyalAd7R5xUl9WonqRjsR6MZjr5PIIx1t9Q2WcxlMIg%2BBTpVl3nw9U9r9bnjaIFjrKQtBDFnE6kiqqhC%2Bx8aMZfl2uAGIAL7MlifIrYOV5&X-Amz-Signature=a2109470e4b4576dabee1f5e2b031cd962e5e33775b98d11c743ed11210ab1a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIFMVOZY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEEpFB0vI1PxZ6N%2BxnhaMpPCeSCm1ZRJvaiv%2FK0QPgZHAiB7TZQwC9M4VggCXYR4EKFwDFqOanI6clWUBh5PF6m%2FRir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMmUW%2BpM6L3yoSbmw9KtwDUUQv1PqpJeS9V0qyyAlII3K%2FjIWhtx77OCcALsOOWnuc0SKXRuUkiwb0MW%2Fc1l%2F5obU1dXSsbXfb36QqoLLZRXk4%2B3KFBpqbYJMhsLOqW6X%2FmRDfqyllCIzYCK5aUhwVM91eDMyaKAvGUIGSloVM8%2FWaxOqM%2BKIBA0x31e7vR6LCcemlQrXVlqU%2BuHoMmqiZ2bAYqoXBALqww9hfyLseBeuH5qzrN4jDqtXnlkqlt%2F%2FbpEplDbdrZDfvB80Xnf6sd189CP43DS2DSIjDvFhe%2Fu165%2BdPmE3t3T3iS3dHCaaSMGkfR4fBj%2F%2FLbj3eNT35cNZjoxZbnP5vS7caQP7PXBleNpsGKwbOGCnZDpcMcMqj3x4hRp3rJGVAwf%2F2CSI70gW5qOdNdaboF78Kh03VvNCrcebQzJbtaOKd%2BfF50wOfENt4JFmtkx%2FoO4OJxHRK9P2WmP10DenggkrvNUGgTmtSqCk%2BOSDh9bWp3M6fALVvuXapgmYqSi29P%2Bve1nPqlBePhpvOgjSkYzqadoVIRUT%2FJcWmXUmvsurLm%2BZ4%2FU5wkZFd8dLjFK7u0%2FpXGOtYJQDkaIy4fDNXeOS%2FgcSFaOAG05xFHrWTLJ6Kw8LNfzUGhUOsLVjtrTgeVYQw5%2FiAxQY6pgFwm8r0E8fwQCSpbBy0j6cfTGQ6n%2Banio2%2F%2BrFYxFgWBm89A4mqib8275g2kFvQNXQcOBDepLFygYNlnMff8SUhDCoN89qYrke3tV%2BuMBHUmXhe4p5dJAscOUZaRoLOh8aSIlrue1b0VO5ndTWypEZ4gstEAE%2F1gBS6a4WKALrUYlpjPntNinYjwXKo27X3d24CTN16p1wHLKQXYr%2F9mjG7ikL5SQnT&X-Amz-Signature=4d8169cd805e9040900b54967e407c1f49618c52f60e1090a3320e2f7c05e753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLF4CAG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxTFzQWJc7wobeReAdXBqcFe15C4u52TQ%2FnLoyK4%2FoJAiEAinGbLE04sQ4Gu3E03eq2LLIHmUcnBuGp7lAEznpb1awq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCUECdSfkvwuGLQFsyrcA0oQpD9nQT7KGOzKZYAkQl8J7ddT80NHJoDcckBsXIqBNijvw0BEOniPp0rwjf0LJ%2ByxINC8DEtqbMf7KDmOe6vZqZXiX4bvuiAcnSRWT9R5fcyTHQ3%2BQTnKDzn2yPpum2myguTK%2FfNsB7E4jSsylMW9rW0kHwEwlKmj33iMAX8lRbVfJUop9pqTuSXX7SqwdjUikLLuUpg75ai3e%2BhH4F4fHfPanMdweOV2MUbskQsx%2FQy2eN9NI47Y28DTZI2cdhAzlHh%2FmC9JnJ4dDh6CzrciVa%2BwOhZhLKT4NFpDulHEDk7h5OH%2FZmUV732cLdLsifkKoeBNUW47H9iaLqRPOn5XBMmiJVXkS5QBLIvUPlLUvukYqyImKpjezeKDvRaUZgL1zPh2iZIROnoDUK5O3w3WrM70bC%2FcjsuGeNNgigLU2wJmNUDCK879puooXKqtrW3nngc6ikBBrd6LijlWrORpQX%2B3tMKl4sqYb7SZHEuxv0sZKw%2FaglvNFVrib2NDVVLoZ9VLyBqJjErKhM7KwOppxAk%2BfcqsMkTK1o3%2BfoVXZItfOgWKWmIIxjfsF%2F5MmPnr54wA5rnbb2qqDEbboj9o4eXs2GzDFLP5ytJ4cWTzJwYQ9NKEsSgFAF5QMPL3gMUGOqUBbULtZlPkoQ4LvLljHIyuN30dGgJH%2Ba%2FSuXKwuqxhmW7w5EgD2fdann%2Bf21bLymlvEDggfuHcqAijCtk6V%2F9uKfYrovJLXIjCdtpyEfT64nZVQKUcIUoyalAd7R5xUl9WonqRjsR6MZjr5PIIx1t9Q2WcxlMIg%2BBTpVl3nw9U9r9bnjaIFjrKQtBDFnE6kiqqhC%2Bx8aMZfl2uAGIAL7MlifIrYOV5&X-Amz-Signature=c34c6e1d0fe286f9cb45a0d77b2e5732d73360f6576542cebaadb29e7995b916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DVODBFA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC1JcsBV0Cj8LF%2FDT6Im2omc3eDnj2ldVmJDTZ9G6YyqAiEA%2B%2Fxv0B%2FqoeL%2BF3bNvOaw7z2tKX4wiKYYO036CZIEL%2BEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDISBBowMlORqXc37HCrcA64nKJ2IgCGxgHgTmSLtiKDFELApd8CUrMA9viyW8xDRwfSsPbjUtXDNllsh8sV76orOkMj7y5N498ppYOMO7Zap1ucDh8%2BCrDi4ARoqul7APo2f2daqoj805el%2FgQjEOaoIjF3ENdhhglzcA8px97xWNZwHVCpLkVwMzg4Celm4l1wrRw%2BLLy8e7CJeiuGSIhWdd1YhtgX9c4yhXwFIcQr%2BaMp4VGoRb6XBHBkuNqvhAuqZ0FBdRgETFiP5vkvrI5IDQNLnjYSlhsofkC7yCHgXJFGhuD5e8vC6L4o%2BlgZ2piuBMctgmaBAVfzCDRQM3ti0v0m8SFAgD1wiyV46JGA4Yv9pS2AA6PqRjUuTPm1mOtKarOUp3hk0UEF0NItAVdkVWiQlThjo3i83%2Fy7KkgJY%2Fq7lluLzfJxJuquBEBpqZmet1G78uMJborXL1XuvKkuyGh9Pgev4GfUIoDEw2BhZJHq03AS42yJ%2Fhvl6%2FWT5UR%2F9Jfx7BCi%2FCXxNfQEpAHWbyq%2FC7Cm6zZ0U8Jn3Uaf4FPhxMrdjEx38%2FyGyB5E04w7eDybYqmaRjmDa6guoOwihR6Ir0obviJeh1W50627lnqdax4A4eUmL4Q93TGM38oQVsYjAfbuguPrOMJ34gMUGOqUBBMXTBQXb5AqpbFH3c3lzIKrwYIhyGjYzlxgoq6xS66A6OKGluPJDqiPgPVTW1lBqWto7o2oOBmX9rPw8U0qQTlXaMzyOWsqHTfp03xh6Pbg9tTAKV70tP8clyL7FTv%2BQZxLqcHNtziXKd1YjHxfBSy8iODLL3JvTTxpKaRQaW85kXrsCPH1%2BOrp4xmgeOMkTuqhBtX3pHw1VeCSy2naDUIlfXmGs&X-Amz-Signature=8cf1a0771714cc58f6811c73f0cd70e3a6a73f74530b5bf78e863bc090f3dad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7LOI25J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDxq2ffvOMdhlepwMwhdLTxWvkBfgUieMXeNioPqzZbTAIgNdllUtlrq3WkhXXsthyzumJVUkI804JK%2FeTQpqCs7GUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFM4XpmJYNCBFdFPeyrcAwOW2LzXexZOlpS7eIb17tGsvTkERTmiqSz5pAwqZb7OZkrullyqzDtDIyWiY6FQpoXgowqphD4RMSNN055x6I47zdlpoqqjymm0qOFaSwOvyJUzzjDaFn9k885ySAy37OM2fuMenRScPJ4G4ezO0or%2FLYHc%2FYm2rQHIAw18ZMukqRrGZtC7kOnoNlUtfm%2BicQ5yxrH6v6he6EsgqGpOhLVJavB6IhMSrdVna5RUq5U10rOi1yLPIQS5iElWTKwocvFPNFDFfU6ABeww6ue%2BzjWsPa4X8Za7OHzdFId0f%2BZKbd%2FYBvW1f%2BJ03i3vtv6NRKhbCy224pqFAyLsg3uj8eO%2FORHTYMutctmPuJkmYyw1K1GuERZcYhFEp9FODe5PSokHiyda882X4vPgj0MAP4riokwRBNK2DOvWLP%2B2dUJis3GixvTatcDQMLrx3bk2GT55dS82DP%2B91mr5yyfZ9i%2Bxy0iNYuZiY1DEKaFFXnTiSwjxMD1MDL93t9KKDkYBb1%2FudeL%2Bodfsz1G3Q7M62n6kbtk5%2Fi7VMo5HWb4UJL0P51%2FWqwK3bo%2F7YKz6K7hE7jP%2BRLlhlhQnd1UD6CRV41ZuIBh9BMqDFmUySN3DePiDIHhhtiR8WpAcSAepMJn4gMUGOqUB54Xu6ocH4iI4psv8mwUr1GF0cbzOLtyxtEhh5xpO7ypKDDaUH2sTKXDh%2Bzr7Gk7Tdr5p2ANYKdBbhpMd03NRRtWF0plikkq4PETcUSQuV2Z2bu1uitdK2PxjRBN0HFHl3JwRfqj2nQbqD0kYazQ6gSm5Mfm9KSiNanDN3QvKXzVN1jW%2FmJnXt60Ld2TkyieUdztq9tbAMfFrw8%2BjgKsbYLP1FwPS&X-Amz-Signature=ad3be1c04751722a576ab695b7e78e8a7f54ba9d5851032881182c2918fc6cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UIZW5OP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDX33fgVMwAwBc%2BShDtpSJhx2Wwfc2ywZi56BA5G0ifGAiAxgpvu0ifhLS2yAEl3npWDJQGtJNVzhJXCYLuMpgyQGyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMK1xnu74XSlbk6ZCGKtwDU7KJJxBzHUZ%2BsYaGEV5AnCNbGlyllp2CD60sntX78L5sx9zsxUUVdfi2cmmUqgRh382w%2BzbpQ1ElSTRF6rsrSis1CUaBYIXCbTU1eMMKy1OOxQP5meY%2BaS59xk%2BjYGnkIxgJvFhrsVAr1%2FWOFLtPQNk4IEANBZsXR2%2FiqjvoMrS0U%2FUeZANQ4CfVJON6NDQU1FsG%2BR0RATgpUW0qRXBrSyAGM6ozWTABy6E3TIRwW8qLf6WoZdGe%2BDva%2F3ijzEV%2BaWTlFbKyW%2BzjyUlgVLhgd8E%2By%2FsVSWGi8n0CK7X4Etcxv%2B%2FVU%2Fz7HxAN5IIdBuUMA1Enr0dqIK8X6sBsbcL%2FjoJ8v6P3Df7NhFfo1bMFqqtdFc9ZrxrCW9B6ANb1yPwW%2BVb1vOyDaFUQ%2B7TzuUWRPijDxF0AGR8G7DQIKYnwCo4AmsF7wDRRbBC9Pq0AbJrvTjoS0vJJ3%2B6%2FIiZ%2FafIFE%2Fa9m%2BWYvJAk%2B1KhuQgbaSQBFabaUj5fD%2Fz9MBct5JOybP%2F2OV4hxoV16fIexVUtsMiCyEWMKbtI60yeA81GjdG9%2FpnGIRL8xTxOtBSNlYSvH1ZAZtWA6ccHOUgKBxkbVHLmwb%2BTSMP%2F3NUs4hl15vSwqFCfoRpAW5%2F6sIAww%2FeAxQY6pgEejEJ4i1RucsT4ewD3kfwehJLHoHTFK%2FZcVfBUSaPhNrFnRPF9Glu9WpPt2VnaI%2FsTk5vldsi1f%2FRAs9qgtburM7VhUI6MB2HtzZdggXdFs3BFJF1nbckZoUrbJKuoFy%2BQCP%2Fdfc2c0O49z0nZFfeOLsURSNao6dbMQUrAVvsVBLeBLfCso260t8AwGWN3WdH%2B7RKSYnBrafNd2W4t%2FUiqk5c%2BNBwk&X-Amz-Signature=fce03b496c2f233c28031e3c288b689caa8ee8e8a6074505454a5a10a567f4d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNCALHBF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDW6UqiZQ%2BQhNyv%2F5XeYlwUaAD00BEuGifW9QSMvag1zAIhAJtcl3JyD%2BYPmA0AHJdLnlzhX%2BUKsiC3iPj7X5bVzvcaKv8DCHEQABoMNjM3NDIzMTgzODA1IgwGVv8NK5PjEjeWjUcq3ANXziclnHEHg6pars6zXn8S3X%2FjtHVztIIf3IhdXj%2FjU9BOIe%2BnP6Q1na7fLFiQ6GLTMsytF55SmnWdgnZxLEkE%2FEFrOfrwVnkI3ef%2F5ibz0cPVN8yMY6h6Qzos7G6E59PinDBy0qans03U52qNV6G88tcOHKUV9J3CwXqXsgvNYJrXt70WzWSCIFK9eXVdagxPgff7Vxx9NES3mzaya8MC8E%2B7n%2FuoUS81UZ4l%2BN96KdhHoNQiCxWfC8Ye921DhIKJ%2F95Xr5k5kS%2FHWIN9hlHHYqtTo2vTEBS4oIlRfBQoRX1uPjKNQ3%2Fl9SRzMuqgVJ0XtJyjZVRoznJhpActm8sW%2FbGqnl0SOa0bp%2BIX5cxF8gICkEOMcv6TPZ6KJTKbm4YYokqitPGc0X5YSCvvklvH%2Fo99Z%2FY7qjqAAR%2F8uZ7l1Vcih90L8uIqBiyjMA7aAemY%2FewQff4ZXVo6%2BsHbZQYD0hk7q24qq33J%2Fiv6%2FbnI7o%2BD2335wAF9b6rV%2BYcEQASHjy2G4H0LMlP4IzggGTa5jEl1YXiY18vj%2B6U65CCHDe49AT4Q%2BPGysjAQ2TAZ7q6F2r4MYLAsfNoQTd8HzjiH0j%2B1vInh5Zq0HEectQ8hRsGoUiScwb5P%2FjlsYzCj%2BIDFBjqkAQmyC7LGKg99nE%2BRCEOCKLL3bZPdJyqSq8I9afipAswyMWSdL0AsQlrIMzc6pUziDeeCDcJ8jzdRoSXibV%2F1ALHoqubHFHv6buGCu95CwX6MSRZDk5JYWZ%2BhMZuiDwY7VWg4tjl3Cqlum%2BTH2QHRchAFh1S3ueB1OoaQDR%2FMks2LEJd9OzZYUABTsnyK2ZUkjiNK%2BHseblEI7%2BxsNoqbXkMY2zO8&X-Amz-Signature=11771d420cf626d337768cbb5567cf6d525d05434e73915b7d837fd097ae2e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5U2WKHA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDVmiXtdhOT0xWtjdNigyosi0hddHpg4z2ny9x0g8QMlAiEAwJePuyQDqyiIyQIs7z0OMYntDRRhNvIrk6WQPZYS8cgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMfKOqCFkZKlKkl5HCrcAzQ%2FGZROG3yoakgL4oZukLTpkrJo7ra072EzSoVZrfZH9be0R1ejtYg2%2B%2FlesIP0Of7TAZMLkMLeU1SseTtMU0RU%2Fk2oY1zXUHvKb0sxu%2FsNagSe0foujTX9wepeu9ErXFvZBvAGPzgcHA%2F3NNAro%2FH%2BfD1kUuGxbBYcWEBsqlcKBGiggIEmukCQdSVSYpxD%2Bb4JFF54PEfZSRjZd7FP6NPcGoFgK7G2poZz3%2FQC1Atvao6GxpMdSPL2CLKFnumNamgHn1mNRD327V61bvvMJjXOtOFh5Cf2W6zPrD5b50PsIx9N70fddzjBX52L5EDLyuj09ycZdIE4WUHIGJHJYOg2jdZdfmwpb01wAT18G%2FEN5hFe3UTvb6aoqNd3ro%2BofswXFo0Mi63AQ%2B%2FZgisCmHGYsYQOyT8n0TSeem1vCiXHWMpi50HZOqHJpZZDney%2BKVylYGIZSfexbT0RT%2FgpzaphM3QG3%2BNKCYJC%2BjAv%2FGHzyoGbz%2F46H4R7M%2F82HXFa6Ahsu%2BLqsqORRnq5xQiXF1z8zH3o518Nf6MoRqIQcis7scJCB2w4VFzdWVGj7k1y7fbH6HdqQvkh0zF0Ky5HR7jj4KcReYtIKMTwjYTBobFPFIOgxNlVHEFF%2BSyIMOD3gMUGOqUBrShnUC6ap5vokJNUzDx4TGwGWv6SIl%2BdJdHbCwmftrdSSYqYr%2FvuuahWJXyTNZKlUVBzEZseOOxEKrwlD8OTo38VM72hSR6G%2B2%2FwTpAJmNaFnub%2F9OtbdqgyiyuoMHemjZCTEu4pS%2BcL5mF26Mm6%2FCJPeZaMN2zcqE%2Fe3qxCghgvLNz8Q0FfIAktz9z%2BucO9TUSlJEkUpjZKQJlUMXMaDO%2FMz8CC&X-Amz-Signature=1affd167feeb8501791d5beed09e0d18fdda3dabdb1a122949761611884001ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLF4CAG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxTFzQWJc7wobeReAdXBqcFe15C4u52TQ%2FnLoyK4%2FoJAiEAinGbLE04sQ4Gu3E03eq2LLIHmUcnBuGp7lAEznpb1awq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCUECdSfkvwuGLQFsyrcA0oQpD9nQT7KGOzKZYAkQl8J7ddT80NHJoDcckBsXIqBNijvw0BEOniPp0rwjf0LJ%2ByxINC8DEtqbMf7KDmOe6vZqZXiX4bvuiAcnSRWT9R5fcyTHQ3%2BQTnKDzn2yPpum2myguTK%2FfNsB7E4jSsylMW9rW0kHwEwlKmj33iMAX8lRbVfJUop9pqTuSXX7SqwdjUikLLuUpg75ai3e%2BhH4F4fHfPanMdweOV2MUbskQsx%2FQy2eN9NI47Y28DTZI2cdhAzlHh%2FmC9JnJ4dDh6CzrciVa%2BwOhZhLKT4NFpDulHEDk7h5OH%2FZmUV732cLdLsifkKoeBNUW47H9iaLqRPOn5XBMmiJVXkS5QBLIvUPlLUvukYqyImKpjezeKDvRaUZgL1zPh2iZIROnoDUK5O3w3WrM70bC%2FcjsuGeNNgigLU2wJmNUDCK879puooXKqtrW3nngc6ikBBrd6LijlWrORpQX%2B3tMKl4sqYb7SZHEuxv0sZKw%2FaglvNFVrib2NDVVLoZ9VLyBqJjErKhM7KwOppxAk%2BfcqsMkTK1o3%2BfoVXZItfOgWKWmIIxjfsF%2F5MmPnr54wA5rnbb2qqDEbboj9o4eXs2GzDFLP5ytJ4cWTzJwYQ9NKEsSgFAF5QMPL3gMUGOqUBbULtZlPkoQ4LvLljHIyuN30dGgJH%2Ba%2FSuXKwuqxhmW7w5EgD2fdann%2Bf21bLymlvEDggfuHcqAijCtk6V%2F9uKfYrovJLXIjCdtpyEfT64nZVQKUcIUoyalAd7R5xUl9WonqRjsR6MZjr5PIIx1t9Q2WcxlMIg%2BBTpVl3nw9U9r9bnjaIFjrKQtBDFnE6kiqqhC%2Bx8aMZfl2uAGIAL7MlifIrYOV5&X-Amz-Signature=d77d5a143c9c029f1b55eb57811c6a7e7a2ac3f1bccfd6492a809289dd39f5e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLF4CAG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxTFzQWJc7wobeReAdXBqcFe15C4u52TQ%2FnLoyK4%2FoJAiEAinGbLE04sQ4Gu3E03eq2LLIHmUcnBuGp7lAEznpb1awq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCUECdSfkvwuGLQFsyrcA0oQpD9nQT7KGOzKZYAkQl8J7ddT80NHJoDcckBsXIqBNijvw0BEOniPp0rwjf0LJ%2ByxINC8DEtqbMf7KDmOe6vZqZXiX4bvuiAcnSRWT9R5fcyTHQ3%2BQTnKDzn2yPpum2myguTK%2FfNsB7E4jSsylMW9rW0kHwEwlKmj33iMAX8lRbVfJUop9pqTuSXX7SqwdjUikLLuUpg75ai3e%2BhH4F4fHfPanMdweOV2MUbskQsx%2FQy2eN9NI47Y28DTZI2cdhAzlHh%2FmC9JnJ4dDh6CzrciVa%2BwOhZhLKT4NFpDulHEDk7h5OH%2FZmUV732cLdLsifkKoeBNUW47H9iaLqRPOn5XBMmiJVXkS5QBLIvUPlLUvukYqyImKpjezeKDvRaUZgL1zPh2iZIROnoDUK5O3w3WrM70bC%2FcjsuGeNNgigLU2wJmNUDCK879puooXKqtrW3nngc6ikBBrd6LijlWrORpQX%2B3tMKl4sqYb7SZHEuxv0sZKw%2FaglvNFVrib2NDVVLoZ9VLyBqJjErKhM7KwOppxAk%2BfcqsMkTK1o3%2BfoVXZItfOgWKWmIIxjfsF%2F5MmPnr54wA5rnbb2qqDEbboj9o4eXs2GzDFLP5ytJ4cWTzJwYQ9NKEsSgFAF5QMPL3gMUGOqUBbULtZlPkoQ4LvLljHIyuN30dGgJH%2Ba%2FSuXKwuqxhmW7w5EgD2fdann%2Bf21bLymlvEDggfuHcqAijCtk6V%2F9uKfYrovJLXIjCdtpyEfT64nZVQKUcIUoyalAd7R5xUl9WonqRjsR6MZjr5PIIx1t9Q2WcxlMIg%2BBTpVl3nw9U9r9bnjaIFjrKQtBDFnE6kiqqhC%2Bx8aMZfl2uAGIAL7MlifIrYOV5&X-Amz-Signature=bf49283f66a1c6281a64fe8ab3f0d3560b145f73acdb8286445efc6ac29d0de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4RHQWU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDaCCUKsiuRts14%2BAZtibtvmnsDRmecND3UApR1N99E5QIgGXm5ApFgIfmzV2h6vOZw2eUrFLUEVamZX03oZgkeCFgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCtVQ0wHXKmGT84v8CrcA0MLA4obucCF%2F6RY5M5LAVjCmMMpj%2Bi%2FrnJdYabycsJRM5IzRatwaV%2Bhim0A3DiHo52ec3u3cnnEqKqKlTyAtjeWbN0ib5xcDwVN2C32N7K19yYdix86jt5JvMUwFWGX5LKeB80QeKnvFgJCy8iCImLLCVACKKNxA9WJzxm%2B3L%2BrGfNcOcIzE62HcEHkK2LD2u%2BfuEkx7Dsi%2FGgca4Mp0rB8Wu%2BMKzXh6grZXmWCY%2F5tDSn1wYwAkKts8xrHDnPCBiaj8xEuqI%2BmTazQFF2Bo%2FUQvU9enbSYDA7Eb%2F2l4gUSKY%2BlK6k24TaX4JDPOAyQp52VkxCv8p8P0YVBnrJIg5LsumMoqnF1QZkTL5hUPN9R7HIF7R5ClLVJ0cMc8wBwiiw7W8kHanymS%2BNf11C%2BWllWdw8ZomDQ2adoj4ltgbzR28VKTO1PbUbgh5wFcKmT5SQ3MizYHaKbSEEdGpwmG%2BIxdF3dHODMi5TxuYQ9aJco1Js37ZN6DJR5KLolLQM9cNhzGn0wW8oepvDeZSS%2BFOMsH2NwpE46bU13GOZ9Ws22IYhNReWDHeKyYWwJcca2aZeSWsxvmZwYnc7RA921zorncNd81OksMAdoIl0PYQae6ai7IDsV%2Fv1%2FMnAGMMX3gMUGOqUBXnZp6v42z4Rc0d80Bg7jqHZqItJfWIha0qf%2FzEfPfYaTTo2Z2nGEShGDcjvEO%2FidihCObzhK2Js4YQ78MEk2hKcRhxwxCu0cwFyogtVgFTgqj5ls7b0ZJOJjMd9wv1jnnxwvU0aXcjDsYBBjyPm0r1tKlGE3jt%2BnAnfG1TPIyujLFLmMbbuCxXr5STw9QSfOEEDGiaLpDosJolrdi%2F%2BXSemS4L8K&X-Amz-Signature=480765665d12e2a36a42d100d5f5f63170627b8279c8b8375c38eb843144db87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4RHQWU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDaCCUKsiuRts14%2BAZtibtvmnsDRmecND3UApR1N99E5QIgGXm5ApFgIfmzV2h6vOZw2eUrFLUEVamZX03oZgkeCFgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCtVQ0wHXKmGT84v8CrcA0MLA4obucCF%2F6RY5M5LAVjCmMMpj%2Bi%2FrnJdYabycsJRM5IzRatwaV%2Bhim0A3DiHo52ec3u3cnnEqKqKlTyAtjeWbN0ib5xcDwVN2C32N7K19yYdix86jt5JvMUwFWGX5LKeB80QeKnvFgJCy8iCImLLCVACKKNxA9WJzxm%2B3L%2BrGfNcOcIzE62HcEHkK2LD2u%2BfuEkx7Dsi%2FGgca4Mp0rB8Wu%2BMKzXh6grZXmWCY%2F5tDSn1wYwAkKts8xrHDnPCBiaj8xEuqI%2BmTazQFF2Bo%2FUQvU9enbSYDA7Eb%2F2l4gUSKY%2BlK6k24TaX4JDPOAyQp52VkxCv8p8P0YVBnrJIg5LsumMoqnF1QZkTL5hUPN9R7HIF7R5ClLVJ0cMc8wBwiiw7W8kHanymS%2BNf11C%2BWllWdw8ZomDQ2adoj4ltgbzR28VKTO1PbUbgh5wFcKmT5SQ3MizYHaKbSEEdGpwmG%2BIxdF3dHODMi5TxuYQ9aJco1Js37ZN6DJR5KLolLQM9cNhzGn0wW8oepvDeZSS%2BFOMsH2NwpE46bU13GOZ9Ws22IYhNReWDHeKyYWwJcca2aZeSWsxvmZwYnc7RA921zorncNd81OksMAdoIl0PYQae6ai7IDsV%2Fv1%2FMnAGMMX3gMUGOqUBXnZp6v42z4Rc0d80Bg7jqHZqItJfWIha0qf%2FzEfPfYaTTo2Z2nGEShGDcjvEO%2FidihCObzhK2Js4YQ78MEk2hKcRhxwxCu0cwFyogtVgFTgqj5ls7b0ZJOJjMd9wv1jnnxwvU0aXcjDsYBBjyPm0r1tKlGE3jt%2BnAnfG1TPIyujLFLmMbbuCxXr5STw9QSfOEEDGiaLpDosJolrdi%2F%2BXSemS4L8K&X-Amz-Signature=e25d276471c0ef7574ec46f0a10dea5b638df5a105522c5cdcd5c8cdfce788ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4RHQWU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDaCCUKsiuRts14%2BAZtibtvmnsDRmecND3UApR1N99E5QIgGXm5ApFgIfmzV2h6vOZw2eUrFLUEVamZX03oZgkeCFgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCtVQ0wHXKmGT84v8CrcA0MLA4obucCF%2F6RY5M5LAVjCmMMpj%2Bi%2FrnJdYabycsJRM5IzRatwaV%2Bhim0A3DiHo52ec3u3cnnEqKqKlTyAtjeWbN0ib5xcDwVN2C32N7K19yYdix86jt5JvMUwFWGX5LKeB80QeKnvFgJCy8iCImLLCVACKKNxA9WJzxm%2B3L%2BrGfNcOcIzE62HcEHkK2LD2u%2BfuEkx7Dsi%2FGgca4Mp0rB8Wu%2BMKzXh6grZXmWCY%2F5tDSn1wYwAkKts8xrHDnPCBiaj8xEuqI%2BmTazQFF2Bo%2FUQvU9enbSYDA7Eb%2F2l4gUSKY%2BlK6k24TaX4JDPOAyQp52VkxCv8p8P0YVBnrJIg5LsumMoqnF1QZkTL5hUPN9R7HIF7R5ClLVJ0cMc8wBwiiw7W8kHanymS%2BNf11C%2BWllWdw8ZomDQ2adoj4ltgbzR28VKTO1PbUbgh5wFcKmT5SQ3MizYHaKbSEEdGpwmG%2BIxdF3dHODMi5TxuYQ9aJco1Js37ZN6DJR5KLolLQM9cNhzGn0wW8oepvDeZSS%2BFOMsH2NwpE46bU13GOZ9Ws22IYhNReWDHeKyYWwJcca2aZeSWsxvmZwYnc7RA921zorncNd81OksMAdoIl0PYQae6ai7IDsV%2Fv1%2FMnAGMMX3gMUGOqUBXnZp6v42z4Rc0d80Bg7jqHZqItJfWIha0qf%2FzEfPfYaTTo2Z2nGEShGDcjvEO%2FidihCObzhK2Js4YQ78MEk2hKcRhxwxCu0cwFyogtVgFTgqj5ls7b0ZJOJjMd9wv1jnnxwvU0aXcjDsYBBjyPm0r1tKlGE3jt%2BnAnfG1TPIyujLFLmMbbuCxXr5STw9QSfOEEDGiaLpDosJolrdi%2F%2BXSemS4L8K&X-Amz-Signature=bed8505bbf4991c4930766baec043f08f34721315f6356ececcb3ae33dd8cdcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4RHQWU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDaCCUKsiuRts14%2BAZtibtvmnsDRmecND3UApR1N99E5QIgGXm5ApFgIfmzV2h6vOZw2eUrFLUEVamZX03oZgkeCFgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCtVQ0wHXKmGT84v8CrcA0MLA4obucCF%2F6RY5M5LAVjCmMMpj%2Bi%2FrnJdYabycsJRM5IzRatwaV%2Bhim0A3DiHo52ec3u3cnnEqKqKlTyAtjeWbN0ib5xcDwVN2C32N7K19yYdix86jt5JvMUwFWGX5LKeB80QeKnvFgJCy8iCImLLCVACKKNxA9WJzxm%2B3L%2BrGfNcOcIzE62HcEHkK2LD2u%2BfuEkx7Dsi%2FGgca4Mp0rB8Wu%2BMKzXh6grZXmWCY%2F5tDSn1wYwAkKts8xrHDnPCBiaj8xEuqI%2BmTazQFF2Bo%2FUQvU9enbSYDA7Eb%2F2l4gUSKY%2BlK6k24TaX4JDPOAyQp52VkxCv8p8P0YVBnrJIg5LsumMoqnF1QZkTL5hUPN9R7HIF7R5ClLVJ0cMc8wBwiiw7W8kHanymS%2BNf11C%2BWllWdw8ZomDQ2adoj4ltgbzR28VKTO1PbUbgh5wFcKmT5SQ3MizYHaKbSEEdGpwmG%2BIxdF3dHODMi5TxuYQ9aJco1Js37ZN6DJR5KLolLQM9cNhzGn0wW8oepvDeZSS%2BFOMsH2NwpE46bU13GOZ9Ws22IYhNReWDHeKyYWwJcca2aZeSWsxvmZwYnc7RA921zorncNd81OksMAdoIl0PYQae6ai7IDsV%2Fv1%2FMnAGMMX3gMUGOqUBXnZp6v42z4Rc0d80Bg7jqHZqItJfWIha0qf%2FzEfPfYaTTo2Z2nGEShGDcjvEO%2FidihCObzhK2Js4YQ78MEk2hKcRhxwxCu0cwFyogtVgFTgqj5ls7b0ZJOJjMd9wv1jnnxwvU0aXcjDsYBBjyPm0r1tKlGE3jt%2BnAnfG1TPIyujLFLmMbbuCxXr5STw9QSfOEEDGiaLpDosJolrdi%2F%2BXSemS4L8K&X-Amz-Signature=e16a12f2c26c9bdc58e9e7056fce31dbd2ecdc043dc430d04c493fdee0f68a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4RHQWU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDaCCUKsiuRts14%2BAZtibtvmnsDRmecND3UApR1N99E5QIgGXm5ApFgIfmzV2h6vOZw2eUrFLUEVamZX03oZgkeCFgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCtVQ0wHXKmGT84v8CrcA0MLA4obucCF%2F6RY5M5LAVjCmMMpj%2Bi%2FrnJdYabycsJRM5IzRatwaV%2Bhim0A3DiHo52ec3u3cnnEqKqKlTyAtjeWbN0ib5xcDwVN2C32N7K19yYdix86jt5JvMUwFWGX5LKeB80QeKnvFgJCy8iCImLLCVACKKNxA9WJzxm%2B3L%2BrGfNcOcIzE62HcEHkK2LD2u%2BfuEkx7Dsi%2FGgca4Mp0rB8Wu%2BMKzXh6grZXmWCY%2F5tDSn1wYwAkKts8xrHDnPCBiaj8xEuqI%2BmTazQFF2Bo%2FUQvU9enbSYDA7Eb%2F2l4gUSKY%2BlK6k24TaX4JDPOAyQp52VkxCv8p8P0YVBnrJIg5LsumMoqnF1QZkTL5hUPN9R7HIF7R5ClLVJ0cMc8wBwiiw7W8kHanymS%2BNf11C%2BWllWdw8ZomDQ2adoj4ltgbzR28VKTO1PbUbgh5wFcKmT5SQ3MizYHaKbSEEdGpwmG%2BIxdF3dHODMi5TxuYQ9aJco1Js37ZN6DJR5KLolLQM9cNhzGn0wW8oepvDeZSS%2BFOMsH2NwpE46bU13GOZ9Ws22IYhNReWDHeKyYWwJcca2aZeSWsxvmZwYnc7RA921zorncNd81OksMAdoIl0PYQae6ai7IDsV%2Fv1%2FMnAGMMX3gMUGOqUBXnZp6v42z4Rc0d80Bg7jqHZqItJfWIha0qf%2FzEfPfYaTTo2Z2nGEShGDcjvEO%2FidihCObzhK2Js4YQ78MEk2hKcRhxwxCu0cwFyogtVgFTgqj5ls7b0ZJOJjMd9wv1jnnxwvU0aXcjDsYBBjyPm0r1tKlGE3jt%2BnAnfG1TPIyujLFLmMbbuCxXr5STw9QSfOEEDGiaLpDosJolrdi%2F%2BXSemS4L8K&X-Amz-Signature=9b95cab19228c292486b30df58755ee7eebd5c44e701c4a9c82c0e798548a945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4RHQWU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDaCCUKsiuRts14%2BAZtibtvmnsDRmecND3UApR1N99E5QIgGXm5ApFgIfmzV2h6vOZw2eUrFLUEVamZX03oZgkeCFgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCtVQ0wHXKmGT84v8CrcA0MLA4obucCF%2F6RY5M5LAVjCmMMpj%2Bi%2FrnJdYabycsJRM5IzRatwaV%2Bhim0A3DiHo52ec3u3cnnEqKqKlTyAtjeWbN0ib5xcDwVN2C32N7K19yYdix86jt5JvMUwFWGX5LKeB80QeKnvFgJCy8iCImLLCVACKKNxA9WJzxm%2B3L%2BrGfNcOcIzE62HcEHkK2LD2u%2BfuEkx7Dsi%2FGgca4Mp0rB8Wu%2BMKzXh6grZXmWCY%2F5tDSn1wYwAkKts8xrHDnPCBiaj8xEuqI%2BmTazQFF2Bo%2FUQvU9enbSYDA7Eb%2F2l4gUSKY%2BlK6k24TaX4JDPOAyQp52VkxCv8p8P0YVBnrJIg5LsumMoqnF1QZkTL5hUPN9R7HIF7R5ClLVJ0cMc8wBwiiw7W8kHanymS%2BNf11C%2BWllWdw8ZomDQ2adoj4ltgbzR28VKTO1PbUbgh5wFcKmT5SQ3MizYHaKbSEEdGpwmG%2BIxdF3dHODMi5TxuYQ9aJco1Js37ZN6DJR5KLolLQM9cNhzGn0wW8oepvDeZSS%2BFOMsH2NwpE46bU13GOZ9Ws22IYhNReWDHeKyYWwJcca2aZeSWsxvmZwYnc7RA921zorncNd81OksMAdoIl0PYQae6ai7IDsV%2Fv1%2FMnAGMMX3gMUGOqUBXnZp6v42z4Rc0d80Bg7jqHZqItJfWIha0qf%2FzEfPfYaTTo2Z2nGEShGDcjvEO%2FidihCObzhK2Js4YQ78MEk2hKcRhxwxCu0cwFyogtVgFTgqj5ls7b0ZJOJjMd9wv1jnnxwvU0aXcjDsYBBjyPm0r1tKlGE3jt%2BnAnfG1TPIyujLFLmMbbuCxXr5STw9QSfOEEDGiaLpDosJolrdi%2F%2BXSemS4L8K&X-Amz-Signature=bfa71c57340d1bf4e5f6e48a33e1da8bb0c0609a8c8fd57fed2980dd0dd0cd4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4RHQWU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDaCCUKsiuRts14%2BAZtibtvmnsDRmecND3UApR1N99E5QIgGXm5ApFgIfmzV2h6vOZw2eUrFLUEVamZX03oZgkeCFgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCtVQ0wHXKmGT84v8CrcA0MLA4obucCF%2F6RY5M5LAVjCmMMpj%2Bi%2FrnJdYabycsJRM5IzRatwaV%2Bhim0A3DiHo52ec3u3cnnEqKqKlTyAtjeWbN0ib5xcDwVN2C32N7K19yYdix86jt5JvMUwFWGX5LKeB80QeKnvFgJCy8iCImLLCVACKKNxA9WJzxm%2B3L%2BrGfNcOcIzE62HcEHkK2LD2u%2BfuEkx7Dsi%2FGgca4Mp0rB8Wu%2BMKzXh6grZXmWCY%2F5tDSn1wYwAkKts8xrHDnPCBiaj8xEuqI%2BmTazQFF2Bo%2FUQvU9enbSYDA7Eb%2F2l4gUSKY%2BlK6k24TaX4JDPOAyQp52VkxCv8p8P0YVBnrJIg5LsumMoqnF1QZkTL5hUPN9R7HIF7R5ClLVJ0cMc8wBwiiw7W8kHanymS%2BNf11C%2BWllWdw8ZomDQ2adoj4ltgbzR28VKTO1PbUbgh5wFcKmT5SQ3MizYHaKbSEEdGpwmG%2BIxdF3dHODMi5TxuYQ9aJco1Js37ZN6DJR5KLolLQM9cNhzGn0wW8oepvDeZSS%2BFOMsH2NwpE46bU13GOZ9Ws22IYhNReWDHeKyYWwJcca2aZeSWsxvmZwYnc7RA921zorncNd81OksMAdoIl0PYQae6ai7IDsV%2Fv1%2FMnAGMMX3gMUGOqUBXnZp6v42z4Rc0d80Bg7jqHZqItJfWIha0qf%2FzEfPfYaTTo2Z2nGEShGDcjvEO%2FidihCObzhK2Js4YQ78MEk2hKcRhxwxCu0cwFyogtVgFTgqj5ls7b0ZJOJjMd9wv1jnnxwvU0aXcjDsYBBjyPm0r1tKlGE3jt%2BnAnfG1TPIyujLFLmMbbuCxXr5STw9QSfOEEDGiaLpDosJolrdi%2F%2BXSemS4L8K&X-Amz-Signature=37579bdab360876b49bad2f39287677aa7a1142ebd9c3d64f176e84e2528fba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4RHQWU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDaCCUKsiuRts14%2BAZtibtvmnsDRmecND3UApR1N99E5QIgGXm5ApFgIfmzV2h6vOZw2eUrFLUEVamZX03oZgkeCFgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCtVQ0wHXKmGT84v8CrcA0MLA4obucCF%2F6RY5M5LAVjCmMMpj%2Bi%2FrnJdYabycsJRM5IzRatwaV%2Bhim0A3DiHo52ec3u3cnnEqKqKlTyAtjeWbN0ib5xcDwVN2C32N7K19yYdix86jt5JvMUwFWGX5LKeB80QeKnvFgJCy8iCImLLCVACKKNxA9WJzxm%2B3L%2BrGfNcOcIzE62HcEHkK2LD2u%2BfuEkx7Dsi%2FGgca4Mp0rB8Wu%2BMKzXh6grZXmWCY%2F5tDSn1wYwAkKts8xrHDnPCBiaj8xEuqI%2BmTazQFF2Bo%2FUQvU9enbSYDA7Eb%2F2l4gUSKY%2BlK6k24TaX4JDPOAyQp52VkxCv8p8P0YVBnrJIg5LsumMoqnF1QZkTL5hUPN9R7HIF7R5ClLVJ0cMc8wBwiiw7W8kHanymS%2BNf11C%2BWllWdw8ZomDQ2adoj4ltgbzR28VKTO1PbUbgh5wFcKmT5SQ3MizYHaKbSEEdGpwmG%2BIxdF3dHODMi5TxuYQ9aJco1Js37ZN6DJR5KLolLQM9cNhzGn0wW8oepvDeZSS%2BFOMsH2NwpE46bU13GOZ9Ws22IYhNReWDHeKyYWwJcca2aZeSWsxvmZwYnc7RA921zorncNd81OksMAdoIl0PYQae6ai7IDsV%2Fv1%2FMnAGMMX3gMUGOqUBXnZp6v42z4Rc0d80Bg7jqHZqItJfWIha0qf%2FzEfPfYaTTo2Z2nGEShGDcjvEO%2FidihCObzhK2Js4YQ78MEk2hKcRhxwxCu0cwFyogtVgFTgqj5ls7b0ZJOJjMd9wv1jnnxwvU0aXcjDsYBBjyPm0r1tKlGE3jt%2BnAnfG1TPIyujLFLmMbbuCxXr5STw9QSfOEEDGiaLpDosJolrdi%2F%2BXSemS4L8K&X-Amz-Signature=273b62310902885f6a4e1c32a4bef335a297eb5edc4730df76cfeb2dbf09dbac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4RHQWU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDaCCUKsiuRts14%2BAZtibtvmnsDRmecND3UApR1N99E5QIgGXm5ApFgIfmzV2h6vOZw2eUrFLUEVamZX03oZgkeCFgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCtVQ0wHXKmGT84v8CrcA0MLA4obucCF%2F6RY5M5LAVjCmMMpj%2Bi%2FrnJdYabycsJRM5IzRatwaV%2Bhim0A3DiHo52ec3u3cnnEqKqKlTyAtjeWbN0ib5xcDwVN2C32N7K19yYdix86jt5JvMUwFWGX5LKeB80QeKnvFgJCy8iCImLLCVACKKNxA9WJzxm%2B3L%2BrGfNcOcIzE62HcEHkK2LD2u%2BfuEkx7Dsi%2FGgca4Mp0rB8Wu%2BMKzXh6grZXmWCY%2F5tDSn1wYwAkKts8xrHDnPCBiaj8xEuqI%2BmTazQFF2Bo%2FUQvU9enbSYDA7Eb%2F2l4gUSKY%2BlK6k24TaX4JDPOAyQp52VkxCv8p8P0YVBnrJIg5LsumMoqnF1QZkTL5hUPN9R7HIF7R5ClLVJ0cMc8wBwiiw7W8kHanymS%2BNf11C%2BWllWdw8ZomDQ2adoj4ltgbzR28VKTO1PbUbgh5wFcKmT5SQ3MizYHaKbSEEdGpwmG%2BIxdF3dHODMi5TxuYQ9aJco1Js37ZN6DJR5KLolLQM9cNhzGn0wW8oepvDeZSS%2BFOMsH2NwpE46bU13GOZ9Ws22IYhNReWDHeKyYWwJcca2aZeSWsxvmZwYnc7RA921zorncNd81OksMAdoIl0PYQae6ai7IDsV%2Fv1%2FMnAGMMX3gMUGOqUBXnZp6v42z4Rc0d80Bg7jqHZqItJfWIha0qf%2FzEfPfYaTTo2Z2nGEShGDcjvEO%2FidihCObzhK2Js4YQ78MEk2hKcRhxwxCu0cwFyogtVgFTgqj5ls7b0ZJOJjMd9wv1jnnxwvU0aXcjDsYBBjyPm0r1tKlGE3jt%2BnAnfG1TPIyujLFLmMbbuCxXr5STw9QSfOEEDGiaLpDosJolrdi%2F%2BXSemS4L8K&X-Amz-Signature=f85b667573e70e5ba4e1995b10e05561e00325f6d52c68c35a8fa0e1f7c38c1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4RHQWU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDaCCUKsiuRts14%2BAZtibtvmnsDRmecND3UApR1N99E5QIgGXm5ApFgIfmzV2h6vOZw2eUrFLUEVamZX03oZgkeCFgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCtVQ0wHXKmGT84v8CrcA0MLA4obucCF%2F6RY5M5LAVjCmMMpj%2Bi%2FrnJdYabycsJRM5IzRatwaV%2Bhim0A3DiHo52ec3u3cnnEqKqKlTyAtjeWbN0ib5xcDwVN2C32N7K19yYdix86jt5JvMUwFWGX5LKeB80QeKnvFgJCy8iCImLLCVACKKNxA9WJzxm%2B3L%2BrGfNcOcIzE62HcEHkK2LD2u%2BfuEkx7Dsi%2FGgca4Mp0rB8Wu%2BMKzXh6grZXmWCY%2F5tDSn1wYwAkKts8xrHDnPCBiaj8xEuqI%2BmTazQFF2Bo%2FUQvU9enbSYDA7Eb%2F2l4gUSKY%2BlK6k24TaX4JDPOAyQp52VkxCv8p8P0YVBnrJIg5LsumMoqnF1QZkTL5hUPN9R7HIF7R5ClLVJ0cMc8wBwiiw7W8kHanymS%2BNf11C%2BWllWdw8ZomDQ2adoj4ltgbzR28VKTO1PbUbgh5wFcKmT5SQ3MizYHaKbSEEdGpwmG%2BIxdF3dHODMi5TxuYQ9aJco1Js37ZN6DJR5KLolLQM9cNhzGn0wW8oepvDeZSS%2BFOMsH2NwpE46bU13GOZ9Ws22IYhNReWDHeKyYWwJcca2aZeSWsxvmZwYnc7RA921zorncNd81OksMAdoIl0PYQae6ai7IDsV%2Fv1%2FMnAGMMX3gMUGOqUBXnZp6v42z4Rc0d80Bg7jqHZqItJfWIha0qf%2FzEfPfYaTTo2Z2nGEShGDcjvEO%2FidihCObzhK2Js4YQ78MEk2hKcRhxwxCu0cwFyogtVgFTgqj5ls7b0ZJOJjMd9wv1jnnxwvU0aXcjDsYBBjyPm0r1tKlGE3jt%2BnAnfG1TPIyujLFLmMbbuCxXr5STw9QSfOEEDGiaLpDosJolrdi%2F%2BXSemS4L8K&X-Amz-Signature=7f684f809caa7efa77de29950bfefd728a6986a0f319602830510fd13c6546e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
