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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7FXICF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDuOzTl0a8IbeBHn4jqNv7RFV98d6EcZFyPHzb0d%2Fwu6AIhALii7s7WGTwDBoTxDzk0yv5G7mUrKew9k7bWTYHJdHgMKv8DCHYQABoMNjM3NDIzMTgzODA1IgxB%2FudRE5C%2BBBpgzJkq3AMSR5BonbW%2BBSEhCDyT%2BFcn%2FZTxqV6kg9RS6TOTfKuFx1JgvLDmtukZz56XFxIo4Bqrd7DhJiRnjFnpqsC98jF1yv7%2FuuRNRlcbsdgBdVGslJwKjH93BRS0HxrFZ9flSE98Hf6AVN4WKfwXyHyNYreaCgW8mRQ%2F950MTgrAgOw%2F2YUpPPyOBMsO9YLJ43LlKqkpIm74thql7vqBCj6I6BTVVsrTHCmxGowxlcHJdj9HtxP64W8HRkfrpUtTdg8YVe5TPlcak5g8qN34teHoFy%2Boslo6AkzThfqhP6YZRvR5RxjyMqRvt2%2BwrRc0PgyYVBQvl9NoAECwhVnbm7qsDt3Qt0Maa%2BLmo4mprVs8BrCM3HRbvg9fFltcWjhLSP7qTlwdf19%2FkO5zxp05WQd8PeVBOR4OiY433mwfHbEUvftBaA6TqzDRuYZ0WfDqRqWnydd1Rm972MuqYY%2F2DJqyQscaVlrj%2Bw5rXzBAU4uUGzuoMRLmFeJREZ6ZZGAjoSrtUlIbmwnlNUIci0QAYs9fryYJL9hhGCR7HuNtggYhpw2IpO19aplbRsb5QVtbYZi0ox2ETcSAoF8anON%2FxPlHu2xoCjw%2B9nTTHAJVf4cVag6qWOwyqKa6szeSHtp3OTDXrc3EBjqkAc5Wgq3AqYp3LJWBfU%2B1nZJjBBGDPPqqcm0hNuJZVKyAzqDqzfU2m0wMzVsejeNlf7%2FJBxlnaoPZm%2FuW2RQKdXN%2BP46ELAq2EhW4TP0y4A2aO0BvUtIS%2BVevmodXUUfd6UPJJEDpeT5mtmj9jVoq1FZldRBtCw35sWSUCsMBING66MgBBTevEkqjeHFOqmfG51fSFshDLUJtJSuMfQTL3Xiv9fkm&X-Amz-Signature=fd12f19cab7a1b84dbc93687c11c5f7145dfe0796fdf544aa9db0b9e607bb3a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7FXICF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDuOzTl0a8IbeBHn4jqNv7RFV98d6EcZFyPHzb0d%2Fwu6AIhALii7s7WGTwDBoTxDzk0yv5G7mUrKew9k7bWTYHJdHgMKv8DCHYQABoMNjM3NDIzMTgzODA1IgxB%2FudRE5C%2BBBpgzJkq3AMSR5BonbW%2BBSEhCDyT%2BFcn%2FZTxqV6kg9RS6TOTfKuFx1JgvLDmtukZz56XFxIo4Bqrd7DhJiRnjFnpqsC98jF1yv7%2FuuRNRlcbsdgBdVGslJwKjH93BRS0HxrFZ9flSE98Hf6AVN4WKfwXyHyNYreaCgW8mRQ%2F950MTgrAgOw%2F2YUpPPyOBMsO9YLJ43LlKqkpIm74thql7vqBCj6I6BTVVsrTHCmxGowxlcHJdj9HtxP64W8HRkfrpUtTdg8YVe5TPlcak5g8qN34teHoFy%2Boslo6AkzThfqhP6YZRvR5RxjyMqRvt2%2BwrRc0PgyYVBQvl9NoAECwhVnbm7qsDt3Qt0Maa%2BLmo4mprVs8BrCM3HRbvg9fFltcWjhLSP7qTlwdf19%2FkO5zxp05WQd8PeVBOR4OiY433mwfHbEUvftBaA6TqzDRuYZ0WfDqRqWnydd1Rm972MuqYY%2F2DJqyQscaVlrj%2Bw5rXzBAU4uUGzuoMRLmFeJREZ6ZZGAjoSrtUlIbmwnlNUIci0QAYs9fryYJL9hhGCR7HuNtggYhpw2IpO19aplbRsb5QVtbYZi0ox2ETcSAoF8anON%2FxPlHu2xoCjw%2B9nTTHAJVf4cVag6qWOwyqKa6szeSHtp3OTDXrc3EBjqkAc5Wgq3AqYp3LJWBfU%2B1nZJjBBGDPPqqcm0hNuJZVKyAzqDqzfU2m0wMzVsejeNlf7%2FJBxlnaoPZm%2FuW2RQKdXN%2BP46ELAq2EhW4TP0y4A2aO0BvUtIS%2BVevmodXUUfd6UPJJEDpeT5mtmj9jVoq1FZldRBtCw35sWSUCsMBING66MgBBTevEkqjeHFOqmfG51fSFshDLUJtJSuMfQTL3Xiv9fkm&X-Amz-Signature=c89a54961063eee34ae6519a2870be5667cc65fb274d41ea046e2f8a40859387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7FXICF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDuOzTl0a8IbeBHn4jqNv7RFV98d6EcZFyPHzb0d%2Fwu6AIhALii7s7WGTwDBoTxDzk0yv5G7mUrKew9k7bWTYHJdHgMKv8DCHYQABoMNjM3NDIzMTgzODA1IgxB%2FudRE5C%2BBBpgzJkq3AMSR5BonbW%2BBSEhCDyT%2BFcn%2FZTxqV6kg9RS6TOTfKuFx1JgvLDmtukZz56XFxIo4Bqrd7DhJiRnjFnpqsC98jF1yv7%2FuuRNRlcbsdgBdVGslJwKjH93BRS0HxrFZ9flSE98Hf6AVN4WKfwXyHyNYreaCgW8mRQ%2F950MTgrAgOw%2F2YUpPPyOBMsO9YLJ43LlKqkpIm74thql7vqBCj6I6BTVVsrTHCmxGowxlcHJdj9HtxP64W8HRkfrpUtTdg8YVe5TPlcak5g8qN34teHoFy%2Boslo6AkzThfqhP6YZRvR5RxjyMqRvt2%2BwrRc0PgyYVBQvl9NoAECwhVnbm7qsDt3Qt0Maa%2BLmo4mprVs8BrCM3HRbvg9fFltcWjhLSP7qTlwdf19%2FkO5zxp05WQd8PeVBOR4OiY433mwfHbEUvftBaA6TqzDRuYZ0WfDqRqWnydd1Rm972MuqYY%2F2DJqyQscaVlrj%2Bw5rXzBAU4uUGzuoMRLmFeJREZ6ZZGAjoSrtUlIbmwnlNUIci0QAYs9fryYJL9hhGCR7HuNtggYhpw2IpO19aplbRsb5QVtbYZi0ox2ETcSAoF8anON%2FxPlHu2xoCjw%2B9nTTHAJVf4cVag6qWOwyqKa6szeSHtp3OTDXrc3EBjqkAc5Wgq3AqYp3LJWBfU%2B1nZJjBBGDPPqqcm0hNuJZVKyAzqDqzfU2m0wMzVsejeNlf7%2FJBxlnaoPZm%2FuW2RQKdXN%2BP46ELAq2EhW4TP0y4A2aO0BvUtIS%2BVevmodXUUfd6UPJJEDpeT5mtmj9jVoq1FZldRBtCw35sWSUCsMBING66MgBBTevEkqjeHFOqmfG51fSFshDLUJtJSuMfQTL3Xiv9fkm&X-Amz-Signature=1e6f247a89bd39137e5032cbbf759fefba1961a66bab4dd935f28b068ba4af02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7FXICF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDuOzTl0a8IbeBHn4jqNv7RFV98d6EcZFyPHzb0d%2Fwu6AIhALii7s7WGTwDBoTxDzk0yv5G7mUrKew9k7bWTYHJdHgMKv8DCHYQABoMNjM3NDIzMTgzODA1IgxB%2FudRE5C%2BBBpgzJkq3AMSR5BonbW%2BBSEhCDyT%2BFcn%2FZTxqV6kg9RS6TOTfKuFx1JgvLDmtukZz56XFxIo4Bqrd7DhJiRnjFnpqsC98jF1yv7%2FuuRNRlcbsdgBdVGslJwKjH93BRS0HxrFZ9flSE98Hf6AVN4WKfwXyHyNYreaCgW8mRQ%2F950MTgrAgOw%2F2YUpPPyOBMsO9YLJ43LlKqkpIm74thql7vqBCj6I6BTVVsrTHCmxGowxlcHJdj9HtxP64W8HRkfrpUtTdg8YVe5TPlcak5g8qN34teHoFy%2Boslo6AkzThfqhP6YZRvR5RxjyMqRvt2%2BwrRc0PgyYVBQvl9NoAECwhVnbm7qsDt3Qt0Maa%2BLmo4mprVs8BrCM3HRbvg9fFltcWjhLSP7qTlwdf19%2FkO5zxp05WQd8PeVBOR4OiY433mwfHbEUvftBaA6TqzDRuYZ0WfDqRqWnydd1Rm972MuqYY%2F2DJqyQscaVlrj%2Bw5rXzBAU4uUGzuoMRLmFeJREZ6ZZGAjoSrtUlIbmwnlNUIci0QAYs9fryYJL9hhGCR7HuNtggYhpw2IpO19aplbRsb5QVtbYZi0ox2ETcSAoF8anON%2FxPlHu2xoCjw%2B9nTTHAJVf4cVag6qWOwyqKa6szeSHtp3OTDXrc3EBjqkAc5Wgq3AqYp3LJWBfU%2B1nZJjBBGDPPqqcm0hNuJZVKyAzqDqzfU2m0wMzVsejeNlf7%2FJBxlnaoPZm%2FuW2RQKdXN%2BP46ELAq2EhW4TP0y4A2aO0BvUtIS%2BVevmodXUUfd6UPJJEDpeT5mtmj9jVoq1FZldRBtCw35sWSUCsMBING66MgBBTevEkqjeHFOqmfG51fSFshDLUJtJSuMfQTL3Xiv9fkm&X-Amz-Signature=269a033e9fcd7634759c4e1c26e3a6c6bf4d23250fb996680e7bf9c7487ecc1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7FXICF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDuOzTl0a8IbeBHn4jqNv7RFV98d6EcZFyPHzb0d%2Fwu6AIhALii7s7WGTwDBoTxDzk0yv5G7mUrKew9k7bWTYHJdHgMKv8DCHYQABoMNjM3NDIzMTgzODA1IgxB%2FudRE5C%2BBBpgzJkq3AMSR5BonbW%2BBSEhCDyT%2BFcn%2FZTxqV6kg9RS6TOTfKuFx1JgvLDmtukZz56XFxIo4Bqrd7DhJiRnjFnpqsC98jF1yv7%2FuuRNRlcbsdgBdVGslJwKjH93BRS0HxrFZ9flSE98Hf6AVN4WKfwXyHyNYreaCgW8mRQ%2F950MTgrAgOw%2F2YUpPPyOBMsO9YLJ43LlKqkpIm74thql7vqBCj6I6BTVVsrTHCmxGowxlcHJdj9HtxP64W8HRkfrpUtTdg8YVe5TPlcak5g8qN34teHoFy%2Boslo6AkzThfqhP6YZRvR5RxjyMqRvt2%2BwrRc0PgyYVBQvl9NoAECwhVnbm7qsDt3Qt0Maa%2BLmo4mprVs8BrCM3HRbvg9fFltcWjhLSP7qTlwdf19%2FkO5zxp05WQd8PeVBOR4OiY433mwfHbEUvftBaA6TqzDRuYZ0WfDqRqWnydd1Rm972MuqYY%2F2DJqyQscaVlrj%2Bw5rXzBAU4uUGzuoMRLmFeJREZ6ZZGAjoSrtUlIbmwnlNUIci0QAYs9fryYJL9hhGCR7HuNtggYhpw2IpO19aplbRsb5QVtbYZi0ox2ETcSAoF8anON%2FxPlHu2xoCjw%2B9nTTHAJVf4cVag6qWOwyqKa6szeSHtp3OTDXrc3EBjqkAc5Wgq3AqYp3LJWBfU%2B1nZJjBBGDPPqqcm0hNuJZVKyAzqDqzfU2m0wMzVsejeNlf7%2FJBxlnaoPZm%2FuW2RQKdXN%2BP46ELAq2EhW4TP0y4A2aO0BvUtIS%2BVevmodXUUfd6UPJJEDpeT5mtmj9jVoq1FZldRBtCw35sWSUCsMBING66MgBBTevEkqjeHFOqmfG51fSFshDLUJtJSuMfQTL3Xiv9fkm&X-Amz-Signature=b27e2e4dad7352043da703b26f354cc48cf5ef0f4731c0c84444517712ab1838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7FXICF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDuOzTl0a8IbeBHn4jqNv7RFV98d6EcZFyPHzb0d%2Fwu6AIhALii7s7WGTwDBoTxDzk0yv5G7mUrKew9k7bWTYHJdHgMKv8DCHYQABoMNjM3NDIzMTgzODA1IgxB%2FudRE5C%2BBBpgzJkq3AMSR5BonbW%2BBSEhCDyT%2BFcn%2FZTxqV6kg9RS6TOTfKuFx1JgvLDmtukZz56XFxIo4Bqrd7DhJiRnjFnpqsC98jF1yv7%2FuuRNRlcbsdgBdVGslJwKjH93BRS0HxrFZ9flSE98Hf6AVN4WKfwXyHyNYreaCgW8mRQ%2F950MTgrAgOw%2F2YUpPPyOBMsO9YLJ43LlKqkpIm74thql7vqBCj6I6BTVVsrTHCmxGowxlcHJdj9HtxP64W8HRkfrpUtTdg8YVe5TPlcak5g8qN34teHoFy%2Boslo6AkzThfqhP6YZRvR5RxjyMqRvt2%2BwrRc0PgyYVBQvl9NoAECwhVnbm7qsDt3Qt0Maa%2BLmo4mprVs8BrCM3HRbvg9fFltcWjhLSP7qTlwdf19%2FkO5zxp05WQd8PeVBOR4OiY433mwfHbEUvftBaA6TqzDRuYZ0WfDqRqWnydd1Rm972MuqYY%2F2DJqyQscaVlrj%2Bw5rXzBAU4uUGzuoMRLmFeJREZ6ZZGAjoSrtUlIbmwnlNUIci0QAYs9fryYJL9hhGCR7HuNtggYhpw2IpO19aplbRsb5QVtbYZi0ox2ETcSAoF8anON%2FxPlHu2xoCjw%2B9nTTHAJVf4cVag6qWOwyqKa6szeSHtp3OTDXrc3EBjqkAc5Wgq3AqYp3LJWBfU%2B1nZJjBBGDPPqqcm0hNuJZVKyAzqDqzfU2m0wMzVsejeNlf7%2FJBxlnaoPZm%2FuW2RQKdXN%2BP46ELAq2EhW4TP0y4A2aO0BvUtIS%2BVevmodXUUfd6UPJJEDpeT5mtmj9jVoq1FZldRBtCw35sWSUCsMBING66MgBBTevEkqjeHFOqmfG51fSFshDLUJtJSuMfQTL3Xiv9fkm&X-Amz-Signature=8c9f3866952fea8151b3b38b318222313c428f87680eb04388711234aa5404ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7FXICF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDuOzTl0a8IbeBHn4jqNv7RFV98d6EcZFyPHzb0d%2Fwu6AIhALii7s7WGTwDBoTxDzk0yv5G7mUrKew9k7bWTYHJdHgMKv8DCHYQABoMNjM3NDIzMTgzODA1IgxB%2FudRE5C%2BBBpgzJkq3AMSR5BonbW%2BBSEhCDyT%2BFcn%2FZTxqV6kg9RS6TOTfKuFx1JgvLDmtukZz56XFxIo4Bqrd7DhJiRnjFnpqsC98jF1yv7%2FuuRNRlcbsdgBdVGslJwKjH93BRS0HxrFZ9flSE98Hf6AVN4WKfwXyHyNYreaCgW8mRQ%2F950MTgrAgOw%2F2YUpPPyOBMsO9YLJ43LlKqkpIm74thql7vqBCj6I6BTVVsrTHCmxGowxlcHJdj9HtxP64W8HRkfrpUtTdg8YVe5TPlcak5g8qN34teHoFy%2Boslo6AkzThfqhP6YZRvR5RxjyMqRvt2%2BwrRc0PgyYVBQvl9NoAECwhVnbm7qsDt3Qt0Maa%2BLmo4mprVs8BrCM3HRbvg9fFltcWjhLSP7qTlwdf19%2FkO5zxp05WQd8PeVBOR4OiY433mwfHbEUvftBaA6TqzDRuYZ0WfDqRqWnydd1Rm972MuqYY%2F2DJqyQscaVlrj%2Bw5rXzBAU4uUGzuoMRLmFeJREZ6ZZGAjoSrtUlIbmwnlNUIci0QAYs9fryYJL9hhGCR7HuNtggYhpw2IpO19aplbRsb5QVtbYZi0ox2ETcSAoF8anON%2FxPlHu2xoCjw%2B9nTTHAJVf4cVag6qWOwyqKa6szeSHtp3OTDXrc3EBjqkAc5Wgq3AqYp3LJWBfU%2B1nZJjBBGDPPqqcm0hNuJZVKyAzqDqzfU2m0wMzVsejeNlf7%2FJBxlnaoPZm%2FuW2RQKdXN%2BP46ELAq2EhW4TP0y4A2aO0BvUtIS%2BVevmodXUUfd6UPJJEDpeT5mtmj9jVoq1FZldRBtCw35sWSUCsMBING66MgBBTevEkqjeHFOqmfG51fSFshDLUJtJSuMfQTL3Xiv9fkm&X-Amz-Signature=2dbee84847a9c89d2ab4456eabb85d195c267651641f96be5fbdb5f4440c7c58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7FXICF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDuOzTl0a8IbeBHn4jqNv7RFV98d6EcZFyPHzb0d%2Fwu6AIhALii7s7WGTwDBoTxDzk0yv5G7mUrKew9k7bWTYHJdHgMKv8DCHYQABoMNjM3NDIzMTgzODA1IgxB%2FudRE5C%2BBBpgzJkq3AMSR5BonbW%2BBSEhCDyT%2BFcn%2FZTxqV6kg9RS6TOTfKuFx1JgvLDmtukZz56XFxIo4Bqrd7DhJiRnjFnpqsC98jF1yv7%2FuuRNRlcbsdgBdVGslJwKjH93BRS0HxrFZ9flSE98Hf6AVN4WKfwXyHyNYreaCgW8mRQ%2F950MTgrAgOw%2F2YUpPPyOBMsO9YLJ43LlKqkpIm74thql7vqBCj6I6BTVVsrTHCmxGowxlcHJdj9HtxP64W8HRkfrpUtTdg8YVe5TPlcak5g8qN34teHoFy%2Boslo6AkzThfqhP6YZRvR5RxjyMqRvt2%2BwrRc0PgyYVBQvl9NoAECwhVnbm7qsDt3Qt0Maa%2BLmo4mprVs8BrCM3HRbvg9fFltcWjhLSP7qTlwdf19%2FkO5zxp05WQd8PeVBOR4OiY433mwfHbEUvftBaA6TqzDRuYZ0WfDqRqWnydd1Rm972MuqYY%2F2DJqyQscaVlrj%2Bw5rXzBAU4uUGzuoMRLmFeJREZ6ZZGAjoSrtUlIbmwnlNUIci0QAYs9fryYJL9hhGCR7HuNtggYhpw2IpO19aplbRsb5QVtbYZi0ox2ETcSAoF8anON%2FxPlHu2xoCjw%2B9nTTHAJVf4cVag6qWOwyqKa6szeSHtp3OTDXrc3EBjqkAc5Wgq3AqYp3LJWBfU%2B1nZJjBBGDPPqqcm0hNuJZVKyAzqDqzfU2m0wMzVsejeNlf7%2FJBxlnaoPZm%2FuW2RQKdXN%2BP46ELAq2EhW4TP0y4A2aO0BvUtIS%2BVevmodXUUfd6UPJJEDpeT5mtmj9jVoq1FZldRBtCw35sWSUCsMBING66MgBBTevEkqjeHFOqmfG51fSFshDLUJtJSuMfQTL3Xiv9fkm&X-Amz-Signature=0f1c8469dc95d82365fb0993f3277f1cde003cc558c0d0f18beafb9a2d5754b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7FXICF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDuOzTl0a8IbeBHn4jqNv7RFV98d6EcZFyPHzb0d%2Fwu6AIhALii7s7WGTwDBoTxDzk0yv5G7mUrKew9k7bWTYHJdHgMKv8DCHYQABoMNjM3NDIzMTgzODA1IgxB%2FudRE5C%2BBBpgzJkq3AMSR5BonbW%2BBSEhCDyT%2BFcn%2FZTxqV6kg9RS6TOTfKuFx1JgvLDmtukZz56XFxIo4Bqrd7DhJiRnjFnpqsC98jF1yv7%2FuuRNRlcbsdgBdVGslJwKjH93BRS0HxrFZ9flSE98Hf6AVN4WKfwXyHyNYreaCgW8mRQ%2F950MTgrAgOw%2F2YUpPPyOBMsO9YLJ43LlKqkpIm74thql7vqBCj6I6BTVVsrTHCmxGowxlcHJdj9HtxP64W8HRkfrpUtTdg8YVe5TPlcak5g8qN34teHoFy%2Boslo6AkzThfqhP6YZRvR5RxjyMqRvt2%2BwrRc0PgyYVBQvl9NoAECwhVnbm7qsDt3Qt0Maa%2BLmo4mprVs8BrCM3HRbvg9fFltcWjhLSP7qTlwdf19%2FkO5zxp05WQd8PeVBOR4OiY433mwfHbEUvftBaA6TqzDRuYZ0WfDqRqWnydd1Rm972MuqYY%2F2DJqyQscaVlrj%2Bw5rXzBAU4uUGzuoMRLmFeJREZ6ZZGAjoSrtUlIbmwnlNUIci0QAYs9fryYJL9hhGCR7HuNtggYhpw2IpO19aplbRsb5QVtbYZi0ox2ETcSAoF8anON%2FxPlHu2xoCjw%2B9nTTHAJVf4cVag6qWOwyqKa6szeSHtp3OTDXrc3EBjqkAc5Wgq3AqYp3LJWBfU%2B1nZJjBBGDPPqqcm0hNuJZVKyAzqDqzfU2m0wMzVsejeNlf7%2FJBxlnaoPZm%2FuW2RQKdXN%2BP46ELAq2EhW4TP0y4A2aO0BvUtIS%2BVevmodXUUfd6UPJJEDpeT5mtmj9jVoq1FZldRBtCw35sWSUCsMBING66MgBBTevEkqjeHFOqmfG51fSFshDLUJtJSuMfQTL3Xiv9fkm&X-Amz-Signature=4f91454b4b8831a1954aea4caea7a4c4b07e5b6b8d1b7ec6e7e1d444fee56897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7FXICF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDuOzTl0a8IbeBHn4jqNv7RFV98d6EcZFyPHzb0d%2Fwu6AIhALii7s7WGTwDBoTxDzk0yv5G7mUrKew9k7bWTYHJdHgMKv8DCHYQABoMNjM3NDIzMTgzODA1IgxB%2FudRE5C%2BBBpgzJkq3AMSR5BonbW%2BBSEhCDyT%2BFcn%2FZTxqV6kg9RS6TOTfKuFx1JgvLDmtukZz56XFxIo4Bqrd7DhJiRnjFnpqsC98jF1yv7%2FuuRNRlcbsdgBdVGslJwKjH93BRS0HxrFZ9flSE98Hf6AVN4WKfwXyHyNYreaCgW8mRQ%2F950MTgrAgOw%2F2YUpPPyOBMsO9YLJ43LlKqkpIm74thql7vqBCj6I6BTVVsrTHCmxGowxlcHJdj9HtxP64W8HRkfrpUtTdg8YVe5TPlcak5g8qN34teHoFy%2Boslo6AkzThfqhP6YZRvR5RxjyMqRvt2%2BwrRc0PgyYVBQvl9NoAECwhVnbm7qsDt3Qt0Maa%2BLmo4mprVs8BrCM3HRbvg9fFltcWjhLSP7qTlwdf19%2FkO5zxp05WQd8PeVBOR4OiY433mwfHbEUvftBaA6TqzDRuYZ0WfDqRqWnydd1Rm972MuqYY%2F2DJqyQscaVlrj%2Bw5rXzBAU4uUGzuoMRLmFeJREZ6ZZGAjoSrtUlIbmwnlNUIci0QAYs9fryYJL9hhGCR7HuNtggYhpw2IpO19aplbRsb5QVtbYZi0ox2ETcSAoF8anON%2FxPlHu2xoCjw%2B9nTTHAJVf4cVag6qWOwyqKa6szeSHtp3OTDXrc3EBjqkAc5Wgq3AqYp3LJWBfU%2B1nZJjBBGDPPqqcm0hNuJZVKyAzqDqzfU2m0wMzVsejeNlf7%2FJBxlnaoPZm%2FuW2RQKdXN%2BP46ELAq2EhW4TP0y4A2aO0BvUtIS%2BVevmodXUUfd6UPJJEDpeT5mtmj9jVoq1FZldRBtCw35sWSUCsMBING66MgBBTevEkqjeHFOqmfG51fSFshDLUJtJSuMfQTL3Xiv9fkm&X-Amz-Signature=112bfbe635330d59fb82d36c682fa7285b30c6e222bc4dfc5a084e129ce36ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XSOSKCL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDRDXVSzCciZvWHdsKdQ%2BvGwIMLs4Eq0MWcAvcyXxpxCAiEA8yde%2FApYo7NtQlgVm0F7OyIvufWkrBStuMDeNlKeTcYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJ4J%2FBh0Mv%2B7BKuFayrcA893qRGRzLUXtdeDTbxuIQ6HBxbAxDhFwEz5rr0yWebA6RkhpSN1Daee6kTSw2q1G55Y%2Fswtezn4F6D5Ssp9v%2B85sK9zZwkTqcqsgwjmHG%2Fww07a1vcBY2uHSYX3ITb69hvaJCTBE%2Bq2SLmVoLtCnjm7l05gfilo80QIA94xqfl9z6Qm7%2FKsZIVDOLXtnLtnkLYv05GdkIRaLlzuWuw0wYMfU8KBVgr9wPlPLJtLFsrvSZ4u0f3c2fsWzdT5hoIa%2B%2FHfCs96ZCVJupGKpDtwUsirOp1E7qNpKqHbpRc8YeVLzxUePwElUlQyjOhZCJe3m%2F4veJdlH5PITY7gayDCge3CKaamuH4U3IVdpJAXYcZBOY9ySGPzuDlh4a6i6lRi%2FA3OWOZQbIl29kWGAV%2FSPJl5fbSlqWJ8VM5a18%2B1n51hvmADQi8gYUgSTuuV%2FX8jRcd%2FlnEF0KRlAES56uCZoGSbAAN34dSSLdCv7LT31ZW1FY72KU7o%2BB2JOA1HzyG9xZgy%2FnrlOQaNSLWnJOZ5l75y%2FFLO8BZaQTwmh%2BC1kLkc6TywCv7cEz36yyrG9vJMkfP2VWCNnZk0oDfbroaGg6Ex4lc5Z03GVuEkNkXq198s6d8fdY63ZCXT4UjHMMWtzcQGOqUBbbx7bdnOPbkdIHOjZp5fvs4Qq63FVTQimLtwR1mn8PFrIQOPDKrsZQRNiYI9LG4FMT9Pt2YlpcZsJhB0P7%2FBEXUzcCH%2BH%2Fx8pqL04wC0DEin0h44gxhoXp0Xr%2Fw2seaQzWJjTPni39HZU3ljcSs6sWc%2B964t84LdWpoi0oSjbdYtpCX1ZogjtBKvfRjB4wuluZLrcvd0r8DvfrmIpmONSaq3LZMc&X-Amz-Signature=851e27b46de5dc1994f64ad1685dfc2b240a22a16da10cc2467f96838d7b705d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2JUWVO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBKwd9RnavfYBGOeLd6EVwKeGRGnZ%2B7bomMU%2F0vUMLaGAiB86EK2nOyOV%2BTveSkxKWopcbHbTOexmkdllsCCXxO9Jyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMSTXeiDWzbniLkEZ3KtwDE7GS%2FLocV1TN6E%2FaLPAl1tAEHhfRPVZqFKg82L4oOM9WfSzhLR%2FvsrKa0UAFrMi9GlidHm1vo2VI0bmuJ9vVFe%2B7hk9IzsiKk6HQVMQ8z5CIW%2B2%2Fx4dXcGOa71Pjjqxs3pcKj1QoMSI8QVm947%2FG1BqpWr1w4pBFQnC7ItPcyMmCIl70oNBdM8J3CU9wvmqwLnx9ompk0B3Q0be7IsY1%2FDN%2F8mqnfcOY8x8GNoxYqQmMR5ALjCyr8Kw0AyY3nGoMXSBgPSARXZLT17DyDmwztm8dKNVZxhcxYI4d7sUy%2BJ0qrjKywXp2J5A6XC%2F4a%2FKYQhPl52nISa9903WmhDTog5ujAT2KnIdmcUUAMnr2JEEa1iBhk9G6HUYmawNcC7%2B3HSSouzhwc5BfeanhzffFZ2S8R2Qx%2BYfgktqHQOpzex5Xmy%2FTLFHlCWDw2YSy%2Foi2H55vv1FByn14hKySag4hvBx6JGFycKeRHq16mxDxW8X8d570Ap5sAwCY5NeV1NZoD7U0fxZsFqeufeQ4DsxQ81TLlzX1BXGvrybi6hzBq2L%2B4%2BEJy68%2FoX5o%2F%2BZM0GWPUfh34rzNv0i%2Bh90kkAEtAqfUKLXXvQ9lXEQPqYwpNIesTis2mSCqHgM316gwxa3NxAY6pgHxTZ%2BKURuCF7cmYFV8eh6sIHl0ki3VY11grvtTc1MymsnPeQqtkdMDtLqwqaOSwLW7Os6FFrSTAvteBOd1P7doDPGA4W305tGfBGSET%2BetW2Yn%2Bq2%2FIVxHBvBatrDlEqao4fM%2BgX1AfyyIvpbV6hbCKlXRiHfYJuhkw5aYruuf%2FBmWlAr23iBAdesTtNMq0NdyG2kHhvwnJ9Iylq0P%2FcQ3pvEPriPZ&X-Amz-Signature=d8c9a2dcc1553f94395ea46fd516eebb693f8d501e7c3273231995545821d35b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652JCQQLL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDvFBuXHNY40g0JjamF%2BxpdBkrLRs6PU6qVFSRLuC3ezAIgENtXZ5VcVf4X8vLhSbCCtf7EyT7oo9AyIJhf5P093oAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJp1TZDww5yuf7%2FEKSrcA3w2RHuuFQctAITWoaa6r3z92eYt%2F8UbuQLy%2BVkGaKkDN87ShUlNJJgxpTqzZohjJFsh%2F2jBDy%2B4%2BOTJI%2Bx1FtpNmCzWibO7vttpvRZwtHAPVPYoa6X8CW8JzMdBZRHDAtroD5UFN2%2BcsHcX16B%2FCPgb7o3Um18G7LhXaLFqqWkl3iKuMx8hf4bT2lQW%2Bw6JwJF0vrQFP2IgleCoa8ngT%2BYICYXSjdLRBhWHGU167w4wo4JBHwzQKTKuYb2MFavVr5iAJiwuwzjvKF2SN4nRKf%2BDTQPkL3M1T9MjGL1kAI0fIdAo5zLF%2F%2FA04qkH6etj54XTr0CljxzPEn3UBmogv4s2KAdoXEna77gZ56GQctOKNIeusBVRIli%2BpQsydEIGFUzj2zPZ9sc%2FlwA%2FlbQIjk2wrrMBnMIMjEN6XOdvQUSUakudN0yj1Yp%2B14AduveQ4oODk3pPGPQoU2qMr5JjwA2MKWY4qJ3NSQqknC9%2ByNY3L04LfxU4DLmCJwtqbAvBCBjve7yj7T5Hk6GHztygUmQNXZ5ro%2BJmcTHLTzJHsJJ2X4VJaSdCjpDfyEWrxbk7usp5bsI2p8fDX9tyxz3s2fwITFEDDTrZmOIKo6nWavEHciJ5dtZT2tu5wBShMKytzcQGOqUBuMdfVSMqAr%2Ba7MEHJ%2F8LkRxAWS5pcpy%2FtfvC07A3hJKNiwfjDn9yyC2NzEUHHxHnUQvxQEkFsiV02UgzjcKKkpz%2BPA8HGvoKqrVr4cs6kiHVeZ21raipqLHFzHQ3UFC3aIO7HO5onEFhNBA8LLbcx0xDpfSSLZoL1vU7jBVfE3RqdspFzZqu%2Bpax5gVhHaLbGPpEd0BrjXetdIWxgNjFXkHQMbXb&X-Amz-Signature=876508515e9cc8459b5ae9de2c60892671c55e2609584d54a025fd3b96e9e71f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7FXICF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDuOzTl0a8IbeBHn4jqNv7RFV98d6EcZFyPHzb0d%2Fwu6AIhALii7s7WGTwDBoTxDzk0yv5G7mUrKew9k7bWTYHJdHgMKv8DCHYQABoMNjM3NDIzMTgzODA1IgxB%2FudRE5C%2BBBpgzJkq3AMSR5BonbW%2BBSEhCDyT%2BFcn%2FZTxqV6kg9RS6TOTfKuFx1JgvLDmtukZz56XFxIo4Bqrd7DhJiRnjFnpqsC98jF1yv7%2FuuRNRlcbsdgBdVGslJwKjH93BRS0HxrFZ9flSE98Hf6AVN4WKfwXyHyNYreaCgW8mRQ%2F950MTgrAgOw%2F2YUpPPyOBMsO9YLJ43LlKqkpIm74thql7vqBCj6I6BTVVsrTHCmxGowxlcHJdj9HtxP64W8HRkfrpUtTdg8YVe5TPlcak5g8qN34teHoFy%2Boslo6AkzThfqhP6YZRvR5RxjyMqRvt2%2BwrRc0PgyYVBQvl9NoAECwhVnbm7qsDt3Qt0Maa%2BLmo4mprVs8BrCM3HRbvg9fFltcWjhLSP7qTlwdf19%2FkO5zxp05WQd8PeVBOR4OiY433mwfHbEUvftBaA6TqzDRuYZ0WfDqRqWnydd1Rm972MuqYY%2F2DJqyQscaVlrj%2Bw5rXzBAU4uUGzuoMRLmFeJREZ6ZZGAjoSrtUlIbmwnlNUIci0QAYs9fryYJL9hhGCR7HuNtggYhpw2IpO19aplbRsb5QVtbYZi0ox2ETcSAoF8anON%2FxPlHu2xoCjw%2B9nTTHAJVf4cVag6qWOwyqKa6szeSHtp3OTDXrc3EBjqkAc5Wgq3AqYp3LJWBfU%2B1nZJjBBGDPPqqcm0hNuJZVKyAzqDqzfU2m0wMzVsejeNlf7%2FJBxlnaoPZm%2FuW2RQKdXN%2BP46ELAq2EhW4TP0y4A2aO0BvUtIS%2BVevmodXUUfd6UPJJEDpeT5mtmj9jVoq1FZldRBtCw35sWSUCsMBING66MgBBTevEkqjeHFOqmfG51fSFshDLUJtJSuMfQTL3Xiv9fkm&X-Amz-Signature=c807f89b1927807d45ced8fc5839db8c8712df931a1feb423f94e31fff04a600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632EWMGVE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQC664dDQJMgNxIj%2BNTukefQ9MQXEhjbIRKNi67iMyaB%2FwIgNprIj3lbfEqeDy6A2FZn8ly3YFOIdeziTJ5NJNPHYgwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHv43R1%2B9hQgherbTSrcA0MDRXK4w6Y9kHOoh5tPbZRjW%2BZnJoswTw%2Fj6ykhsO7OclNjUuExRzRvmNVfmaQSmTsCl%2Fbgc0MzHbA3G92rqxMG6yragKDHo6g4WDaDIJeW1qEUwxTEAg3Of1ShyLQrHQcEprvzBQ8ZmHE%2FCK96%2BdS8Hiug4C%2FPb47ZLDaTVDfsouT82QBFdMOTRCYYtBnlHSpQ3DG2SkCVXIIDTCjSiTzW%2BaAucfhDGW7KbhWVP5wADW7Uhtfl2sSLJrJzw278OmPimpP3NTn%2FonFiebwDZkd6FZvF6tib3Cj5T1BfhGfrIzm7iSfqfTyfzBPQ8pkq1PpmpNPh728JneZaOqTkvTbgUhLsclQjcUkjJsjxdXu3x2kIJS4L1z3PLijqdUvRfgi%2FRBO7dKe%2FOjx6Tnmk9ste4DHVbXN8BHn1YCbAgjcBC8u1l32KIFdrbOU9D2SRambvNoYhN67jA9sM%2FQI%2FWcwCjAcInUXGIDobDxZj60TupjzfieZKJX28Gh4zDm1dQ%2FenaRZ8xkeStzRor64XSb63DLzopZgV73ObUGd%2BVO92XQbLssHELyl35c7e7N4zJ1r4jQCJXbGDFk9HhGg%2BpEdvsD9EHe93hf0fqq33PJ0nIDYXBpV3gbAmSpSMMKWtzcQGOqUBG1NH24%2B21XyArkiFlnseiEM5NrQyTdThV9R84vTQub3P%2F62DxRvQ12y5grm910hkh04BT2Iau0LMKERYdfNZg4QWTB2UMVk7MoskiffrOY3mC%2B%2BtRz236ksKnW2vYywPIhpufAGADcIPSmeZKKEjU9KtMF6dT56kwSOi%2FupIdDzSFEcPrxOHgdHXLCFfnIr9zcBTt6Kg6kcvvWZLT67rNLAHOAei&X-Amz-Signature=a473343b0cd44ccbedaa440d470ad9831c1a530de678e817a3e847a4604c0d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7FXICF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDuOzTl0a8IbeBHn4jqNv7RFV98d6EcZFyPHzb0d%2Fwu6AIhALii7s7WGTwDBoTxDzk0yv5G7mUrKew9k7bWTYHJdHgMKv8DCHYQABoMNjM3NDIzMTgzODA1IgxB%2FudRE5C%2BBBpgzJkq3AMSR5BonbW%2BBSEhCDyT%2BFcn%2FZTxqV6kg9RS6TOTfKuFx1JgvLDmtukZz56XFxIo4Bqrd7DhJiRnjFnpqsC98jF1yv7%2FuuRNRlcbsdgBdVGslJwKjH93BRS0HxrFZ9flSE98Hf6AVN4WKfwXyHyNYreaCgW8mRQ%2F950MTgrAgOw%2F2YUpPPyOBMsO9YLJ43LlKqkpIm74thql7vqBCj6I6BTVVsrTHCmxGowxlcHJdj9HtxP64W8HRkfrpUtTdg8YVe5TPlcak5g8qN34teHoFy%2Boslo6AkzThfqhP6YZRvR5RxjyMqRvt2%2BwrRc0PgyYVBQvl9NoAECwhVnbm7qsDt3Qt0Maa%2BLmo4mprVs8BrCM3HRbvg9fFltcWjhLSP7qTlwdf19%2FkO5zxp05WQd8PeVBOR4OiY433mwfHbEUvftBaA6TqzDRuYZ0WfDqRqWnydd1Rm972MuqYY%2F2DJqyQscaVlrj%2Bw5rXzBAU4uUGzuoMRLmFeJREZ6ZZGAjoSrtUlIbmwnlNUIci0QAYs9fryYJL9hhGCR7HuNtggYhpw2IpO19aplbRsb5QVtbYZi0ox2ETcSAoF8anON%2FxPlHu2xoCjw%2B9nTTHAJVf4cVag6qWOwyqKa6szeSHtp3OTDXrc3EBjqkAc5Wgq3AqYp3LJWBfU%2B1nZJjBBGDPPqqcm0hNuJZVKyAzqDqzfU2m0wMzVsejeNlf7%2FJBxlnaoPZm%2FuW2RQKdXN%2BP46ELAq2EhW4TP0y4A2aO0BvUtIS%2BVevmodXUUfd6UPJJEDpeT5mtmj9jVoq1FZldRBtCw35sWSUCsMBING66MgBBTevEkqjeHFOqmfG51fSFshDLUJtJSuMfQTL3Xiv9fkm&X-Amz-Signature=ee108b16d45e2b9d5c22abf8d95ac059e6a84633c39e95676cfdaac920079636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWDYQ5Z%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIG31TqIj3pneR2Fob3NK0iasJBIa7FEp3TeL44zQcqWFAiEA%2Bi%2FRFFQs3AuOfkZatIVwfsJ2af7pShit4wC8Buc8E04q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOa92pJ6kjrbboPPtyrcA2gnZXz%2FRzRrXWeZMn3BKpDUgLIiHtv4pYVoO%2BSIpB2tBNBhb%2BdXhPdUrSCEnOrWncSiAHscaFclYvnvrEzWcXfhy5RRgR2vIWLYmDzU7zPIG1B2q6o74VhwWbGTr1ocBP2GCukVceCMlmk87MeTeJ%2BiHJyRQKxr00wkg6EcvqQBnlNV4XcF1eYSxYqCXWtS8UjQHVnxLMw9%2BPYOYRSgmV4JHlq%2FCuPBwwsnzuFruOCKZCnLRaNQaCSZEAc8B4V7kJuK%2F2h57odpMezFwgKE7vyf74eu0S9xtwpgVrHXCkDpTEM%2BhxCbWp72X5bBpiZDXseMwJpoBxQhQzX%2BqZwPUTbjPBiQHB1WkPg%2FJdLyBXZAzjCUG6kM0o%2BnG7NLL%2F3rsAkUrjX8Z71KG6UX3JMFwBzvSG%2BgrdmYF1G66a88cVYCrJGHE4krLAt5tlO%2F8CpwX2UAbBTwlf0zwnPtCihnszbmdWN%2Foegt8T7qUE1J43VpRU95Uqf6IZXPVjxQVIdVB0BffweExMNPr8BQrqLwom83M8l0ANFtHlXAuH7%2BBaRwF1tY9fgERSU5orK8wLYIv00lQVfFQddlg70Y4vNGuj2xTo6%2Br5UAsNwXNg43iOidzMuNetvfw1dxPcS%2BMMyuzcQGOqUBAZNEUKCgy0vCJsfLPwWjGisVE4JYyrUYgeI%2BGRjFlOvSU9VmbP%2BF8xzUZfFCZq9d77G417kuyBScae6Yfsc438r4bIyCuGlvM8UWTBUzhjlKm2vn7feu4YWX7j%2FAfh4PZT%2FCui3kaADP218MZluHnehVXBxz2XvvhLPzBmoUgKz77GVyPNdlLBEmMS1MBG8LKsF3CltjVtHicLMKDmZV5StLSWEJ&X-Amz-Signature=4c124fa7795b8f787d67c20cfc18b3948b0092d8c77fee984e08cce54f801ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7FXICF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDuOzTl0a8IbeBHn4jqNv7RFV98d6EcZFyPHzb0d%2Fwu6AIhALii7s7WGTwDBoTxDzk0yv5G7mUrKew9k7bWTYHJdHgMKv8DCHYQABoMNjM3NDIzMTgzODA1IgxB%2FudRE5C%2BBBpgzJkq3AMSR5BonbW%2BBSEhCDyT%2BFcn%2FZTxqV6kg9RS6TOTfKuFx1JgvLDmtukZz56XFxIo4Bqrd7DhJiRnjFnpqsC98jF1yv7%2FuuRNRlcbsdgBdVGslJwKjH93BRS0HxrFZ9flSE98Hf6AVN4WKfwXyHyNYreaCgW8mRQ%2F950MTgrAgOw%2F2YUpPPyOBMsO9YLJ43LlKqkpIm74thql7vqBCj6I6BTVVsrTHCmxGowxlcHJdj9HtxP64W8HRkfrpUtTdg8YVe5TPlcak5g8qN34teHoFy%2Boslo6AkzThfqhP6YZRvR5RxjyMqRvt2%2BwrRc0PgyYVBQvl9NoAECwhVnbm7qsDt3Qt0Maa%2BLmo4mprVs8BrCM3HRbvg9fFltcWjhLSP7qTlwdf19%2FkO5zxp05WQd8PeVBOR4OiY433mwfHbEUvftBaA6TqzDRuYZ0WfDqRqWnydd1Rm972MuqYY%2F2DJqyQscaVlrj%2Bw5rXzBAU4uUGzuoMRLmFeJREZ6ZZGAjoSrtUlIbmwnlNUIci0QAYs9fryYJL9hhGCR7HuNtggYhpw2IpO19aplbRsb5QVtbYZi0ox2ETcSAoF8anON%2FxPlHu2xoCjw%2B9nTTHAJVf4cVag6qWOwyqKa6szeSHtp3OTDXrc3EBjqkAc5Wgq3AqYp3LJWBfU%2B1nZJjBBGDPPqqcm0hNuJZVKyAzqDqzfU2m0wMzVsejeNlf7%2FJBxlnaoPZm%2FuW2RQKdXN%2BP46ELAq2EhW4TP0y4A2aO0BvUtIS%2BVevmodXUUfd6UPJJEDpeT5mtmj9jVoq1FZldRBtCw35sWSUCsMBING66MgBBTevEkqjeHFOqmfG51fSFshDLUJtJSuMfQTL3Xiv9fkm&X-Amz-Signature=e69e32bda3fb65c8be5b17d161ec0a646e7d08b1f7d960b5c2456cc05d0fa9bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ORFRAQ5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDOy6odx2E5Cagx1mu7wCBP9UmOJlxzhqjkZmd5hnamgQIhALQ%2BhlKoz%2FyBdXKQOf5flTH%2BFjswROkTg1LQmBsPdC%2BqKv8DCHYQABoMNjM3NDIzMTgzODA1Igxt%2FVBhfLCPujMmsMkq3AP%2FVGU75AMapaZQ44cypBRKd8EtrlMYT%2F%2B4alOV6fUItiWeIPDZEPBI7pDJlvoGtr7qIovzv%2BzoS9kYiOY4pa5DnPpBGnMyVVTpXlIzqfjYJ%2BL2xEPX7p0QMAufwej1PwM2JMQOvWgF2Oi1k%2BmZBW%2BUBSnTxHva2%2F5WvH9iwG4vjum7Hxheg5VqmtSHBn9Y65XmaTCiNpzV4HGTRO7NCklKCIIJSyq%2Fe2l%2F0ODzTy2xwf7ST0X1VwaJWbvcOLsMxw1S4J5%2FGPiThRhMo38zRp1hiUUgdONXD28UEKDCADNxcojdmE0tfR5QUmwkdORlWFmMjbJV3pdUdWKSeO9rnr%2B0UIYtmUSqXl5LqhDHrld6Tw0tGgBPnQVl5c3wPY01KZwrY47XKdbAXjCoYMx1BQQ3msh9pFvzq%2BzId0ILUzLMBGCo2jlWZj%2FmCL54ypdiAoApyt7udOFh5DlpqmEUiVzCgfnk4FFCBxEyvCiaCpLp55HfA%2BLWy8lWdz%2FhTzCk95AevqzUs%2FI5eEEpQdwMIy7hCMLUpT6yE6OMxGAz%2FSlBcnTysszdHDaQj3RbymSld53Lu0VWfoi1h%2FLrZ7I3dobJEFusnANcGBqV9qHrBTEh3rqBiUmNN7nkUbDD8TCZrs3EBjqkAUYBlLLamdXdpxxBU7GyBkEtRdbWMbomuszukkMTUgeH0Sl3VjdNp2%2B%2F%2FCOYr8u%2Fu05PKVRFsaHgBJp0LCJ1Yk%2Bt5RWzRSU%2Fcl2wlE8o8VOb7fhLhEAC6Ccw5wZNKZAYXV3BNGrQbKTHRY9MIPsUOl%2B5BdNAguhhdqLZHcgJAITtp4p3xgIDGk8OyqJNHO7eQH%2BgA98cL0CsrOxEfQI7466Br%2BrW&X-Amz-Signature=e2b90bf4672b43b85ae0424798999dafd96c1ae2639056043c5a4fadf474a83b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7FXICF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDuOzTl0a8IbeBHn4jqNv7RFV98d6EcZFyPHzb0d%2Fwu6AIhALii7s7WGTwDBoTxDzk0yv5G7mUrKew9k7bWTYHJdHgMKv8DCHYQABoMNjM3NDIzMTgzODA1IgxB%2FudRE5C%2BBBpgzJkq3AMSR5BonbW%2BBSEhCDyT%2BFcn%2FZTxqV6kg9RS6TOTfKuFx1JgvLDmtukZz56XFxIo4Bqrd7DhJiRnjFnpqsC98jF1yv7%2FuuRNRlcbsdgBdVGslJwKjH93BRS0HxrFZ9flSE98Hf6AVN4WKfwXyHyNYreaCgW8mRQ%2F950MTgrAgOw%2F2YUpPPyOBMsO9YLJ43LlKqkpIm74thql7vqBCj6I6BTVVsrTHCmxGowxlcHJdj9HtxP64W8HRkfrpUtTdg8YVe5TPlcak5g8qN34teHoFy%2Boslo6AkzThfqhP6YZRvR5RxjyMqRvt2%2BwrRc0PgyYVBQvl9NoAECwhVnbm7qsDt3Qt0Maa%2BLmo4mprVs8BrCM3HRbvg9fFltcWjhLSP7qTlwdf19%2FkO5zxp05WQd8PeVBOR4OiY433mwfHbEUvftBaA6TqzDRuYZ0WfDqRqWnydd1Rm972MuqYY%2F2DJqyQscaVlrj%2Bw5rXzBAU4uUGzuoMRLmFeJREZ6ZZGAjoSrtUlIbmwnlNUIci0QAYs9fryYJL9hhGCR7HuNtggYhpw2IpO19aplbRsb5QVtbYZi0ox2ETcSAoF8anON%2FxPlHu2xoCjw%2B9nTTHAJVf4cVag6qWOwyqKa6szeSHtp3OTDXrc3EBjqkAc5Wgq3AqYp3LJWBfU%2B1nZJjBBGDPPqqcm0hNuJZVKyAzqDqzfU2m0wMzVsejeNlf7%2FJBxlnaoPZm%2FuW2RQKdXN%2BP46ELAq2EhW4TP0y4A2aO0BvUtIS%2BVevmodXUUfd6UPJJEDpeT5mtmj9jVoq1FZldRBtCw35sWSUCsMBING66MgBBTevEkqjeHFOqmfG51fSFshDLUJtJSuMfQTL3Xiv9fkm&X-Amz-Signature=682f39ce6ab260d6ac453c6d5b84e1b11c4bbdf8986416d33c5d7074d1a05411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674UHEJW2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIF%2FN%2BhN0vuBoDZXd4hvecJkF1G6tzrAnNb6HE1j9gx8NAiAwQCRossResaFAu24I9ypKoYSq1lDe2vdNARTJLmgOCyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMXsJWh1t3GS%2BTm6g0KtwDhynr33CFJlDEQWZGW1Ib%2Bo3Dhd1V22jh8O1%2B8VQwHke66UtiL7Jt0ppSvlv0DRyI7EfiwaHkKTJNhYY6UHsvKlj%2BJ5o32qAdDItBmb2Ep9VAATx0cZRDz75eJcdJ%2BHV80Z3CimtmPbY8U7vy9D3On9kia5WjZkA3CgROHkWH7rJuOWCWtIuI5WsAUb0u5XYw00M20N8UWnZEepx0clYG78MBDJok0npAuqP67I209A2eKQKMfpdOG8pGKg2Pawd%2BMLnxBYvh25kJ6JpJC%2BFgNvZNs3IYy%2F14SDoEKtu7MF8I9hAKOpSwUXLCPMtgxCw5MZA%2FDGQZKdUCOdj%2BEqmqN6m5CulywqksORlNWE0EvBRZVZqPK8gbK1LLdd4ahEnyPp0tVimDac7L8zd4E72VbNbGLm1DBKJRKnAteCRIQ8JdHercAqnLMe%2Fa6zhaQE4ABm%2BpCGMqSH3cyIO9BVwcXCsvE9YJAsN9MPO6q31jojMCLDFgCa8Lc96OAtmgw3X4QQrevlVS2ooJ%2FR0Ty5DLLMChwxX801ouf75lebL%2BgkQgRBarXQRWEvKx0Sw%2B6sSZz%2FL3%2FuvHnnOSvA%2FLwzVqWgkvvfbYcmUGddTlS5IQpq4ymBJBCUDyxywIp3Ewsq7NxAY6pgF3W5qFUYl2u3DCFq%2B02gb84y9SNkSEmpi3aB9NAYBbWYbGKBucbcgS5wjSGvNp%2FpcKOV0bAqL4SRvgmm6dCHK%2BaxZvTSQ0z%2BP94OiWb%2FEfY5AiU1sEGIDVdEj9rP6xFvw7QzVBgndJk7DpX%2Fti3s6TWaJ3NKnkDcwuvwuo40AHiFjdOvqBmMUvh4U%2BiLex5hozbuCYVj1YXGzCcRfR3tiZN5l2n6%2Ff&X-Amz-Signature=2ae39218e33819ebc32a0cecec0ee3e6ee99bb960b7bb50ecc9d951748bb8a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QNTLO4X%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDQ9mW9cKF%2Be53yNiXWxgLDvc0E8Dnai%2FAINHX%2FuehffwIgDhn%2FtFTHbzJFy4UQtjA3nsM8cxgQXlQ47R3Vuyf5ve0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDM8K3VItd2kujZ0GvSrcA21RQ%2BMq2YpwiXaLHomlM1ydhn0o%2BjnGQ2pfMnt9B1wrJhXGD2NjobFoMrn4a%2FVLT1ftz4aHz0wB5rasjxTestlYkf5mWlYzL3pXr%2B5BZI%2F5nzls4XwEfmlB3TOMHw4Pq4PbNOZhitZnb1MmMqEmVBLFWYbIk%2BnUZUipzdvrHjRRSk%2BWC1jdB%2BRRgcIq3u6QbmaoTgmKPUftSxRQriUNfJYGgYTDD%2FR%2Bp8YM2DtKDMMqjRZFVuywhp7ruoMFU5eEviih71xCzJhuQVj1rvy%2FNwmTviur%2FpblyPUkLhv7cXq5acFpVTQ4eFbsIZ1bfXlckbnd2bk4S%2FssAvhezV0e7D%2FAAH1ceCMH4%2FFmsPK8LJ7Wuom0SpZ7OAiA1kXt%2BQHaboNGTjbvPmuNVLGM9zxokHpiwTRbeazZoTuXC8884wvgXFa1rU50gl8UDYnE44olBhmPuoMiY0OId8GaxDJAQ3pDHsWOanWQuZc5G1Lo4Rh1S9GP7gaqeVsqtSL8%2BsPb7lyebEaDwOfjhdDFZgFdQVClTHF98ju29wcQQGfLaTrsvhLkku%2FgTrJvWuIMmkzohQHLeKLn%2F%2FBSnzOQtuXNqcjy%2BAd4aULHyO%2FRSn2N5gtRGkZpI%2FZOHUCsazoOMMKtzcQGOqUBd%2F0BkuzZ%2FbJb6z9SiYC2dCxs8pjMKb9mjhenizSn7t5DC98G50jX2ioQ2q0gkd2ZpJl8uMJsdNZCVmfz26qSPbpuBRF73FVee%2BnKNbdVuG8ebDGxbTg%2Ffwv1kuoG1jxjWAlRtQGHQcy%2F1me85fCJeP2W5UWna3IJUUF9qRjAXC3pVnULn4uR8QPskvNB%2B2pALbhNC8FlLbZCJn2jEGiTWwKylui6&X-Amz-Signature=b0303b7b8c99db413af4bfaf080483bbe8f1cb6fca28418723aa4e14d78c99a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLRYHLHI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIE3y9MnM04twpjzGpw%2F6BtytfICYWTfSwpGSUZ1AwlI3AiBsdIO2uj1buLOP94A3%2BFWaIST2i26pFf4lKroa3p0a3ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMuTth78PXbOtqGBTNKtwD%2BPFgSgXLZ83Sd1iT8YuvguG3rCxocVAmnpA9kqk8ELSOfbDzGbP9fll2nEPvnPB1ImfnYd5jeq00fAADNmbMSvobsmV%2FyRKJDl%2BVeu6DpfvBOC8trm3RXxnDbiwhSKjmBW4L9fTTFaxq8%2BcCmL0Oi7Uhclp4BdSIyATnoMn3jy%2Bjcq%2BN%2FvAytB5FhH%2Bmx9hklAMIYH9CTybpunf6OxhQpnU3%2F1ZgHW%2FmhTXJ0JXmuvi9ETjPAWuEGpR90PIc5Rbq1Ds1FaobN3xt8p9ikigdhP7%2BIJuvg7nZGhmvLuYaIVEuuS%2FIfwEUnvBMK99dYXXK8gPD12z16uIcefUCkbOi%2F0ULAo6hwJTuAiJHiXrbbJ1TD5sICyNqWStq5wgM4CE%2BMJ%2BFBjyw2uWTyyV2HUKLF6irZz0ToXv84y75w3aAZhZCTXJ6kDLvAMgtc%2BTez%2B5TkoX%2BUNGJCgVh%2BCRH%2B4fzBcAz0ciJLoRKRaeiRJehyspp7jGAXMborWN6%2FMuqHWg19trjRQ3GqPpmKRbnKTV8oq8LsaZPfphseYUCVFiKKMwxkge0qauQXfopzt6M%2FErP5uD4qWV0WrL4AN7iGnUX7PGRo91B34YDe0DIh%2FJlTqyqy0GvvGmTEZngiE8wmq7NxAY6pgEwZLvjqQOGgURq4SUQ8%2FIeeRrBkY7nxIoyC0lSjKkRnlDLq8deCHNS1bZt9mNouE2mcS%2Bmjcr67lHmMEuNd2EWOFTwbSZMkjhdJ0zFpQs%2F2u6NHlShOB7%2FuTu531Wd%2Fztf%2BTfajR90rmLlg%2FRt6L80hequDOqSQlW3GtXKt1HAX8NqSUuMQ2IJaxHVoajpFrYBKgdfJybxU1v3mBoZuZ2ynAX63Y0q&X-Amz-Signature=9484533c1141a5007bd15087f4856d345c376a1adfa7b175781a3725d92d4f6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ORFRAQ5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDOy6odx2E5Cagx1mu7wCBP9UmOJlxzhqjkZmd5hnamgQIhALQ%2BhlKoz%2FyBdXKQOf5flTH%2BFjswROkTg1LQmBsPdC%2BqKv8DCHYQABoMNjM3NDIzMTgzODA1Igxt%2FVBhfLCPujMmsMkq3AP%2FVGU75AMapaZQ44cypBRKd8EtrlMYT%2F%2B4alOV6fUItiWeIPDZEPBI7pDJlvoGtr7qIovzv%2BzoS9kYiOY4pa5DnPpBGnMyVVTpXlIzqfjYJ%2BL2xEPX7p0QMAufwej1PwM2JMQOvWgF2Oi1k%2BmZBW%2BUBSnTxHva2%2F5WvH9iwG4vjum7Hxheg5VqmtSHBn9Y65XmaTCiNpzV4HGTRO7NCklKCIIJSyq%2Fe2l%2F0ODzTy2xwf7ST0X1VwaJWbvcOLsMxw1S4J5%2FGPiThRhMo38zRp1hiUUgdONXD28UEKDCADNxcojdmE0tfR5QUmwkdORlWFmMjbJV3pdUdWKSeO9rnr%2B0UIYtmUSqXl5LqhDHrld6Tw0tGgBPnQVl5c3wPY01KZwrY47XKdbAXjCoYMx1BQQ3msh9pFvzq%2BzId0ILUzLMBGCo2jlWZj%2FmCL54ypdiAoApyt7udOFh5DlpqmEUiVzCgfnk4FFCBxEyvCiaCpLp55HfA%2BLWy8lWdz%2FhTzCk95AevqzUs%2FI5eEEpQdwMIy7hCMLUpT6yE6OMxGAz%2FSlBcnTysszdHDaQj3RbymSld53Lu0VWfoi1h%2FLrZ7I3dobJEFusnANcGBqV9qHrBTEh3rqBiUmNN7nkUbDD8TCZrs3EBjqkAUYBlLLamdXdpxxBU7GyBkEtRdbWMbomuszukkMTUgeH0Sl3VjdNp2%2B%2F%2FCOYr8u%2Fu05PKVRFsaHgBJp0LCJ1Yk%2Bt5RWzRSU%2Fcl2wlE8o8VOb7fhLhEAC6Ccw5wZNKZAYXV3BNGrQbKTHRY9MIPsUOl%2B5BdNAguhhdqLZHcgJAITtp4p3xgIDGk8OyqJNHO7eQH%2BgA98cL0CsrOxEfQI7466Br%2BrW&X-Amz-Signature=228099c826b36892c18e926648bb408b275c1bbc31a79362e657b4565b73e74a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674UHEJW2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIF%2FN%2BhN0vuBoDZXd4hvecJkF1G6tzrAnNb6HE1j9gx8NAiAwQCRossResaFAu24I9ypKoYSq1lDe2vdNARTJLmgOCyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMXsJWh1t3GS%2BTm6g0KtwDhynr33CFJlDEQWZGW1Ib%2Bo3Dhd1V22jh8O1%2B8VQwHke66UtiL7Jt0ppSvlv0DRyI7EfiwaHkKTJNhYY6UHsvKlj%2BJ5o32qAdDItBmb2Ep9VAATx0cZRDz75eJcdJ%2BHV80Z3CimtmPbY8U7vy9D3On9kia5WjZkA3CgROHkWH7rJuOWCWtIuI5WsAUb0u5XYw00M20N8UWnZEepx0clYG78MBDJok0npAuqP67I209A2eKQKMfpdOG8pGKg2Pawd%2BMLnxBYvh25kJ6JpJC%2BFgNvZNs3IYy%2F14SDoEKtu7MF8I9hAKOpSwUXLCPMtgxCw5MZA%2FDGQZKdUCOdj%2BEqmqN6m5CulywqksORlNWE0EvBRZVZqPK8gbK1LLdd4ahEnyPp0tVimDac7L8zd4E72VbNbGLm1DBKJRKnAteCRIQ8JdHercAqnLMe%2Fa6zhaQE4ABm%2BpCGMqSH3cyIO9BVwcXCsvE9YJAsN9MPO6q31jojMCLDFgCa8Lc96OAtmgw3X4QQrevlVS2ooJ%2FR0Ty5DLLMChwxX801ouf75lebL%2BgkQgRBarXQRWEvKx0Sw%2B6sSZz%2FL3%2FuvHnnOSvA%2FLwzVqWgkvvfbYcmUGddTlS5IQpq4ymBJBCUDyxywIp3Ewsq7NxAY6pgF3W5qFUYl2u3DCFq%2B02gb84y9SNkSEmpi3aB9NAYBbWYbGKBucbcgS5wjSGvNp%2FpcKOV0bAqL4SRvgmm6dCHK%2BaxZvTSQ0z%2BP94OiWb%2FEfY5AiU1sEGIDVdEj9rP6xFvw7QzVBgndJk7DpX%2Fti3s6TWaJ3NKnkDcwuvwuo40AHiFjdOvqBmMUvh4U%2BiLex5hozbuCYVj1YXGzCcRfR3tiZN5l2n6%2Ff&X-Amz-Signature=9d0f4248f60f66707c08bf2bdfb54e44497c26736cc00ee8b58967a53d3ad49e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7FXICF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDuOzTl0a8IbeBHn4jqNv7RFV98d6EcZFyPHzb0d%2Fwu6AIhALii7s7WGTwDBoTxDzk0yv5G7mUrKew9k7bWTYHJdHgMKv8DCHYQABoMNjM3NDIzMTgzODA1IgxB%2FudRE5C%2BBBpgzJkq3AMSR5BonbW%2BBSEhCDyT%2BFcn%2FZTxqV6kg9RS6TOTfKuFx1JgvLDmtukZz56XFxIo4Bqrd7DhJiRnjFnpqsC98jF1yv7%2FuuRNRlcbsdgBdVGslJwKjH93BRS0HxrFZ9flSE98Hf6AVN4WKfwXyHyNYreaCgW8mRQ%2F950MTgrAgOw%2F2YUpPPyOBMsO9YLJ43LlKqkpIm74thql7vqBCj6I6BTVVsrTHCmxGowxlcHJdj9HtxP64W8HRkfrpUtTdg8YVe5TPlcak5g8qN34teHoFy%2Boslo6AkzThfqhP6YZRvR5RxjyMqRvt2%2BwrRc0PgyYVBQvl9NoAECwhVnbm7qsDt3Qt0Maa%2BLmo4mprVs8BrCM3HRbvg9fFltcWjhLSP7qTlwdf19%2FkO5zxp05WQd8PeVBOR4OiY433mwfHbEUvftBaA6TqzDRuYZ0WfDqRqWnydd1Rm972MuqYY%2F2DJqyQscaVlrj%2Bw5rXzBAU4uUGzuoMRLmFeJREZ6ZZGAjoSrtUlIbmwnlNUIci0QAYs9fryYJL9hhGCR7HuNtggYhpw2IpO19aplbRsb5QVtbYZi0ox2ETcSAoF8anON%2FxPlHu2xoCjw%2B9nTTHAJVf4cVag6qWOwyqKa6szeSHtp3OTDXrc3EBjqkAc5Wgq3AqYp3LJWBfU%2B1nZJjBBGDPPqqcm0hNuJZVKyAzqDqzfU2m0wMzVsejeNlf7%2FJBxlnaoPZm%2FuW2RQKdXN%2BP46ELAq2EhW4TP0y4A2aO0BvUtIS%2BVevmodXUUfd6UPJJEDpeT5mtmj9jVoq1FZldRBtCw35sWSUCsMBING66MgBBTevEkqjeHFOqmfG51fSFshDLUJtJSuMfQTL3Xiv9fkm&X-Amz-Signature=cfdb997e3aef242a3507c911b6af352da41d1f4604e2328a1df73e4c2a60fbca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7FXICF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDuOzTl0a8IbeBHn4jqNv7RFV98d6EcZFyPHzb0d%2Fwu6AIhALii7s7WGTwDBoTxDzk0yv5G7mUrKew9k7bWTYHJdHgMKv8DCHYQABoMNjM3NDIzMTgzODA1IgxB%2FudRE5C%2BBBpgzJkq3AMSR5BonbW%2BBSEhCDyT%2BFcn%2FZTxqV6kg9RS6TOTfKuFx1JgvLDmtukZz56XFxIo4Bqrd7DhJiRnjFnpqsC98jF1yv7%2FuuRNRlcbsdgBdVGslJwKjH93BRS0HxrFZ9flSE98Hf6AVN4WKfwXyHyNYreaCgW8mRQ%2F950MTgrAgOw%2F2YUpPPyOBMsO9YLJ43LlKqkpIm74thql7vqBCj6I6BTVVsrTHCmxGowxlcHJdj9HtxP64W8HRkfrpUtTdg8YVe5TPlcak5g8qN34teHoFy%2Boslo6AkzThfqhP6YZRvR5RxjyMqRvt2%2BwrRc0PgyYVBQvl9NoAECwhVnbm7qsDt3Qt0Maa%2BLmo4mprVs8BrCM3HRbvg9fFltcWjhLSP7qTlwdf19%2FkO5zxp05WQd8PeVBOR4OiY433mwfHbEUvftBaA6TqzDRuYZ0WfDqRqWnydd1Rm972MuqYY%2F2DJqyQscaVlrj%2Bw5rXzBAU4uUGzuoMRLmFeJREZ6ZZGAjoSrtUlIbmwnlNUIci0QAYs9fryYJL9hhGCR7HuNtggYhpw2IpO19aplbRsb5QVtbYZi0ox2ETcSAoF8anON%2FxPlHu2xoCjw%2B9nTTHAJVf4cVag6qWOwyqKa6szeSHtp3OTDXrc3EBjqkAc5Wgq3AqYp3LJWBfU%2B1nZJjBBGDPPqqcm0hNuJZVKyAzqDqzfU2m0wMzVsejeNlf7%2FJBxlnaoPZm%2FuW2RQKdXN%2BP46ELAq2EhW4TP0y4A2aO0BvUtIS%2BVevmodXUUfd6UPJJEDpeT5mtmj9jVoq1FZldRBtCw35sWSUCsMBING66MgBBTevEkqjeHFOqmfG51fSFshDLUJtJSuMfQTL3Xiv9fkm&X-Amz-Signature=6b8aaa4225c3654be0b5d2280096b4c996c2cc1b391803eef8f5930162905c21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YERZDHHD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFgxcldSy%2FwVszivGHB%2FJvUdlEE%2FO8rBMjXawlx5pk3jAiBdAYgFHqiYq5cHzOM7wY7blgdQ5mO0Vmlln7wGpotkmyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMb6Lc3liHo7DjHzj6KtwDXLhL0mIZHY5Gl2vcoMG4EH%2BImcqqV5SvP2oZ8ucqVTW4JWaVhOZyw4lyaRyg%2FGAyAqtp%2FCDnG690Ra3ubjQQG6dty7plZUVvw9Ty9QCCP4v7jfCD8KEt5Zv96U4KeC26PIuzqeT4wWj9DbVgcg4wFbtJGrbS6TPKRCXCRpsYatBYGYGM4MenntAhE0IgqCbvrIFiGeB5RWTvDk%2Bin3dS0%2FNpWOlQqOHHjfQDMBLT8xxc3dctjkD6B%2BtT7IvuQ%2FBPP2bqg6htG%2BQ2dXFfeij4aDp8Ls8b1hKsDh%2FOt8FPaTFheSiHvA3Hcn9c4Jq%2F6j10ZYt5BUK2%2BgMgm5DNZ0uUZlTn6lrqmDbU2KAjDdkis3bn6eA%2FPCt6PpLZ4vff8loDuDxVJjwRbOUth8iK7mwLkRpaguoE7IDrb5j5yfJX6ifw2qjvYOugrTu3%2Bo0F5FUgXrwc51DU9rRmP3nwHROEyfbVYWBMZZCJhcIrxNoTS2SfD4nY%2BC%2BdvLj%2F2sggQ7ezXBabZKaV%2BOiQZtyuop8lL8frS9PtII61OcpCjwITzs6za9k%2F2t79P5N24CCiKC%2FpHDVLMB5IMEOCLmK%2Fx22QXNqw4LUB807yU6XZQKxvaf6mOYSxh1C0yQTVR4cw4K3NxAY6pgG0QP10ZC%2FCIB39HffSchaa5sz0kVDk3G9r3tNzCg0F9FPWjc5Hq0wTfTnPc82udZOSWp0n3HRBFcK1%2FoVTuD6yeAWGfRxe7nxTXy%2BjrJ4ThuwuH%2BI1B9UnlchZDbjGjlv70rsfRkyHgecB04KTkgxxadUb0ItG0crxt7aBGzrAuVcEZDvMg1oWKF0a%2FZdfCXZ6kG%2BQXdYoItBV3EfDs7gR532I48%2F7&X-Amz-Signature=d8e91c6d84d0b1da2bab10dcb209a4d06d68c559e9a1689dc9aae8ae815eef39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YERZDHHD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFgxcldSy%2FwVszivGHB%2FJvUdlEE%2FO8rBMjXawlx5pk3jAiBdAYgFHqiYq5cHzOM7wY7blgdQ5mO0Vmlln7wGpotkmyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMb6Lc3liHo7DjHzj6KtwDXLhL0mIZHY5Gl2vcoMG4EH%2BImcqqV5SvP2oZ8ucqVTW4JWaVhOZyw4lyaRyg%2FGAyAqtp%2FCDnG690Ra3ubjQQG6dty7plZUVvw9Ty9QCCP4v7jfCD8KEt5Zv96U4KeC26PIuzqeT4wWj9DbVgcg4wFbtJGrbS6TPKRCXCRpsYatBYGYGM4MenntAhE0IgqCbvrIFiGeB5RWTvDk%2Bin3dS0%2FNpWOlQqOHHjfQDMBLT8xxc3dctjkD6B%2BtT7IvuQ%2FBPP2bqg6htG%2BQ2dXFfeij4aDp8Ls8b1hKsDh%2FOt8FPaTFheSiHvA3Hcn9c4Jq%2F6j10ZYt5BUK2%2BgMgm5DNZ0uUZlTn6lrqmDbU2KAjDdkis3bn6eA%2FPCt6PpLZ4vff8loDuDxVJjwRbOUth8iK7mwLkRpaguoE7IDrb5j5yfJX6ifw2qjvYOugrTu3%2Bo0F5FUgXrwc51DU9rRmP3nwHROEyfbVYWBMZZCJhcIrxNoTS2SfD4nY%2BC%2BdvLj%2F2sggQ7ezXBabZKaV%2BOiQZtyuop8lL8frS9PtII61OcpCjwITzs6za9k%2F2t79P5N24CCiKC%2FpHDVLMB5IMEOCLmK%2Fx22QXNqw4LUB807yU6XZQKxvaf6mOYSxh1C0yQTVR4cw4K3NxAY6pgG0QP10ZC%2FCIB39HffSchaa5sz0kVDk3G9r3tNzCg0F9FPWjc5Hq0wTfTnPc82udZOSWp0n3HRBFcK1%2FoVTuD6yeAWGfRxe7nxTXy%2BjrJ4ThuwuH%2BI1B9UnlchZDbjGjlv70rsfRkyHgecB04KTkgxxadUb0ItG0crxt7aBGzrAuVcEZDvMg1oWKF0a%2FZdfCXZ6kG%2BQXdYoItBV3EfDs7gR532I48%2F7&X-Amz-Signature=e60a0027134cde79c6cb918e80467cf8f9cc2435f92d105d1193ab04dee0a0be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YERZDHHD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFgxcldSy%2FwVszivGHB%2FJvUdlEE%2FO8rBMjXawlx5pk3jAiBdAYgFHqiYq5cHzOM7wY7blgdQ5mO0Vmlln7wGpotkmyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMb6Lc3liHo7DjHzj6KtwDXLhL0mIZHY5Gl2vcoMG4EH%2BImcqqV5SvP2oZ8ucqVTW4JWaVhOZyw4lyaRyg%2FGAyAqtp%2FCDnG690Ra3ubjQQG6dty7plZUVvw9Ty9QCCP4v7jfCD8KEt5Zv96U4KeC26PIuzqeT4wWj9DbVgcg4wFbtJGrbS6TPKRCXCRpsYatBYGYGM4MenntAhE0IgqCbvrIFiGeB5RWTvDk%2Bin3dS0%2FNpWOlQqOHHjfQDMBLT8xxc3dctjkD6B%2BtT7IvuQ%2FBPP2bqg6htG%2BQ2dXFfeij4aDp8Ls8b1hKsDh%2FOt8FPaTFheSiHvA3Hcn9c4Jq%2F6j10ZYt5BUK2%2BgMgm5DNZ0uUZlTn6lrqmDbU2KAjDdkis3bn6eA%2FPCt6PpLZ4vff8loDuDxVJjwRbOUth8iK7mwLkRpaguoE7IDrb5j5yfJX6ifw2qjvYOugrTu3%2Bo0F5FUgXrwc51DU9rRmP3nwHROEyfbVYWBMZZCJhcIrxNoTS2SfD4nY%2BC%2BdvLj%2F2sggQ7ezXBabZKaV%2BOiQZtyuop8lL8frS9PtII61OcpCjwITzs6za9k%2F2t79P5N24CCiKC%2FpHDVLMB5IMEOCLmK%2Fx22QXNqw4LUB807yU6XZQKxvaf6mOYSxh1C0yQTVR4cw4K3NxAY6pgG0QP10ZC%2FCIB39HffSchaa5sz0kVDk3G9r3tNzCg0F9FPWjc5Hq0wTfTnPc82udZOSWp0n3HRBFcK1%2FoVTuD6yeAWGfRxe7nxTXy%2BjrJ4ThuwuH%2BI1B9UnlchZDbjGjlv70rsfRkyHgecB04KTkgxxadUb0ItG0crxt7aBGzrAuVcEZDvMg1oWKF0a%2FZdfCXZ6kG%2BQXdYoItBV3EfDs7gR532I48%2F7&X-Amz-Signature=ea01ba1e92b5c47478668af2d560926f9cfec744c3e03e2ed5432f3d2e57464b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YERZDHHD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFgxcldSy%2FwVszivGHB%2FJvUdlEE%2FO8rBMjXawlx5pk3jAiBdAYgFHqiYq5cHzOM7wY7blgdQ5mO0Vmlln7wGpotkmyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMb6Lc3liHo7DjHzj6KtwDXLhL0mIZHY5Gl2vcoMG4EH%2BImcqqV5SvP2oZ8ucqVTW4JWaVhOZyw4lyaRyg%2FGAyAqtp%2FCDnG690Ra3ubjQQG6dty7plZUVvw9Ty9QCCP4v7jfCD8KEt5Zv96U4KeC26PIuzqeT4wWj9DbVgcg4wFbtJGrbS6TPKRCXCRpsYatBYGYGM4MenntAhE0IgqCbvrIFiGeB5RWTvDk%2Bin3dS0%2FNpWOlQqOHHjfQDMBLT8xxc3dctjkD6B%2BtT7IvuQ%2FBPP2bqg6htG%2BQ2dXFfeij4aDp8Ls8b1hKsDh%2FOt8FPaTFheSiHvA3Hcn9c4Jq%2F6j10ZYt5BUK2%2BgMgm5DNZ0uUZlTn6lrqmDbU2KAjDdkis3bn6eA%2FPCt6PpLZ4vff8loDuDxVJjwRbOUth8iK7mwLkRpaguoE7IDrb5j5yfJX6ifw2qjvYOugrTu3%2Bo0F5FUgXrwc51DU9rRmP3nwHROEyfbVYWBMZZCJhcIrxNoTS2SfD4nY%2BC%2BdvLj%2F2sggQ7ezXBabZKaV%2BOiQZtyuop8lL8frS9PtII61OcpCjwITzs6za9k%2F2t79P5N24CCiKC%2FpHDVLMB5IMEOCLmK%2Fx22QXNqw4LUB807yU6XZQKxvaf6mOYSxh1C0yQTVR4cw4K3NxAY6pgG0QP10ZC%2FCIB39HffSchaa5sz0kVDk3G9r3tNzCg0F9FPWjc5Hq0wTfTnPc82udZOSWp0n3HRBFcK1%2FoVTuD6yeAWGfRxe7nxTXy%2BjrJ4ThuwuH%2BI1B9UnlchZDbjGjlv70rsfRkyHgecB04KTkgxxadUb0ItG0crxt7aBGzrAuVcEZDvMg1oWKF0a%2FZdfCXZ6kG%2BQXdYoItBV3EfDs7gR532I48%2F7&X-Amz-Signature=428e194eb12735e2b9bc09c0246e6764e6a792dd3dc85503b252cdc4c9df3027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YERZDHHD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFgxcldSy%2FwVszivGHB%2FJvUdlEE%2FO8rBMjXawlx5pk3jAiBdAYgFHqiYq5cHzOM7wY7blgdQ5mO0Vmlln7wGpotkmyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMb6Lc3liHo7DjHzj6KtwDXLhL0mIZHY5Gl2vcoMG4EH%2BImcqqV5SvP2oZ8ucqVTW4JWaVhOZyw4lyaRyg%2FGAyAqtp%2FCDnG690Ra3ubjQQG6dty7plZUVvw9Ty9QCCP4v7jfCD8KEt5Zv96U4KeC26PIuzqeT4wWj9DbVgcg4wFbtJGrbS6TPKRCXCRpsYatBYGYGM4MenntAhE0IgqCbvrIFiGeB5RWTvDk%2Bin3dS0%2FNpWOlQqOHHjfQDMBLT8xxc3dctjkD6B%2BtT7IvuQ%2FBPP2bqg6htG%2BQ2dXFfeij4aDp8Ls8b1hKsDh%2FOt8FPaTFheSiHvA3Hcn9c4Jq%2F6j10ZYt5BUK2%2BgMgm5DNZ0uUZlTn6lrqmDbU2KAjDdkis3bn6eA%2FPCt6PpLZ4vff8loDuDxVJjwRbOUth8iK7mwLkRpaguoE7IDrb5j5yfJX6ifw2qjvYOugrTu3%2Bo0F5FUgXrwc51DU9rRmP3nwHROEyfbVYWBMZZCJhcIrxNoTS2SfD4nY%2BC%2BdvLj%2F2sggQ7ezXBabZKaV%2BOiQZtyuop8lL8frS9PtII61OcpCjwITzs6za9k%2F2t79P5N24CCiKC%2FpHDVLMB5IMEOCLmK%2Fx22QXNqw4LUB807yU6XZQKxvaf6mOYSxh1C0yQTVR4cw4K3NxAY6pgG0QP10ZC%2FCIB39HffSchaa5sz0kVDk3G9r3tNzCg0F9FPWjc5Hq0wTfTnPc82udZOSWp0n3HRBFcK1%2FoVTuD6yeAWGfRxe7nxTXy%2BjrJ4ThuwuH%2BI1B9UnlchZDbjGjlv70rsfRkyHgecB04KTkgxxadUb0ItG0crxt7aBGzrAuVcEZDvMg1oWKF0a%2FZdfCXZ6kG%2BQXdYoItBV3EfDs7gR532I48%2F7&X-Amz-Signature=67b8bf76cf5cf5473b39b9d69da0fc9fef8bca9bfd28826a78e8ac723a15db83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YERZDHHD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFgxcldSy%2FwVszivGHB%2FJvUdlEE%2FO8rBMjXawlx5pk3jAiBdAYgFHqiYq5cHzOM7wY7blgdQ5mO0Vmlln7wGpotkmyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMb6Lc3liHo7DjHzj6KtwDXLhL0mIZHY5Gl2vcoMG4EH%2BImcqqV5SvP2oZ8ucqVTW4JWaVhOZyw4lyaRyg%2FGAyAqtp%2FCDnG690Ra3ubjQQG6dty7plZUVvw9Ty9QCCP4v7jfCD8KEt5Zv96U4KeC26PIuzqeT4wWj9DbVgcg4wFbtJGrbS6TPKRCXCRpsYatBYGYGM4MenntAhE0IgqCbvrIFiGeB5RWTvDk%2Bin3dS0%2FNpWOlQqOHHjfQDMBLT8xxc3dctjkD6B%2BtT7IvuQ%2FBPP2bqg6htG%2BQ2dXFfeij4aDp8Ls8b1hKsDh%2FOt8FPaTFheSiHvA3Hcn9c4Jq%2F6j10ZYt5BUK2%2BgMgm5DNZ0uUZlTn6lrqmDbU2KAjDdkis3bn6eA%2FPCt6PpLZ4vff8loDuDxVJjwRbOUth8iK7mwLkRpaguoE7IDrb5j5yfJX6ifw2qjvYOugrTu3%2Bo0F5FUgXrwc51DU9rRmP3nwHROEyfbVYWBMZZCJhcIrxNoTS2SfD4nY%2BC%2BdvLj%2F2sggQ7ezXBabZKaV%2BOiQZtyuop8lL8frS9PtII61OcpCjwITzs6za9k%2F2t79P5N24CCiKC%2FpHDVLMB5IMEOCLmK%2Fx22QXNqw4LUB807yU6XZQKxvaf6mOYSxh1C0yQTVR4cw4K3NxAY6pgG0QP10ZC%2FCIB39HffSchaa5sz0kVDk3G9r3tNzCg0F9FPWjc5Hq0wTfTnPc82udZOSWp0n3HRBFcK1%2FoVTuD6yeAWGfRxe7nxTXy%2BjrJ4ThuwuH%2BI1B9UnlchZDbjGjlv70rsfRkyHgecB04KTkgxxadUb0ItG0crxt7aBGzrAuVcEZDvMg1oWKF0a%2FZdfCXZ6kG%2BQXdYoItBV3EfDs7gR532I48%2F7&X-Amz-Signature=b0c119efefd6bd82f4a28d926bdbaf1528a10eac747fd6b05e935dd867128b8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YERZDHHD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFgxcldSy%2FwVszivGHB%2FJvUdlEE%2FO8rBMjXawlx5pk3jAiBdAYgFHqiYq5cHzOM7wY7blgdQ5mO0Vmlln7wGpotkmyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMb6Lc3liHo7DjHzj6KtwDXLhL0mIZHY5Gl2vcoMG4EH%2BImcqqV5SvP2oZ8ucqVTW4JWaVhOZyw4lyaRyg%2FGAyAqtp%2FCDnG690Ra3ubjQQG6dty7plZUVvw9Ty9QCCP4v7jfCD8KEt5Zv96U4KeC26PIuzqeT4wWj9DbVgcg4wFbtJGrbS6TPKRCXCRpsYatBYGYGM4MenntAhE0IgqCbvrIFiGeB5RWTvDk%2Bin3dS0%2FNpWOlQqOHHjfQDMBLT8xxc3dctjkD6B%2BtT7IvuQ%2FBPP2bqg6htG%2BQ2dXFfeij4aDp8Ls8b1hKsDh%2FOt8FPaTFheSiHvA3Hcn9c4Jq%2F6j10ZYt5BUK2%2BgMgm5DNZ0uUZlTn6lrqmDbU2KAjDdkis3bn6eA%2FPCt6PpLZ4vff8loDuDxVJjwRbOUth8iK7mwLkRpaguoE7IDrb5j5yfJX6ifw2qjvYOugrTu3%2Bo0F5FUgXrwc51DU9rRmP3nwHROEyfbVYWBMZZCJhcIrxNoTS2SfD4nY%2BC%2BdvLj%2F2sggQ7ezXBabZKaV%2BOiQZtyuop8lL8frS9PtII61OcpCjwITzs6za9k%2F2t79P5N24CCiKC%2FpHDVLMB5IMEOCLmK%2Fx22QXNqw4LUB807yU6XZQKxvaf6mOYSxh1C0yQTVR4cw4K3NxAY6pgG0QP10ZC%2FCIB39HffSchaa5sz0kVDk3G9r3tNzCg0F9FPWjc5Hq0wTfTnPc82udZOSWp0n3HRBFcK1%2FoVTuD6yeAWGfRxe7nxTXy%2BjrJ4ThuwuH%2BI1B9UnlchZDbjGjlv70rsfRkyHgecB04KTkgxxadUb0ItG0crxt7aBGzrAuVcEZDvMg1oWKF0a%2FZdfCXZ6kG%2BQXdYoItBV3EfDs7gR532I48%2F7&X-Amz-Signature=ea01ba1e92b5c47478668af2d560926f9cfec744c3e03e2ed5432f3d2e57464b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YERZDHHD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFgxcldSy%2FwVszivGHB%2FJvUdlEE%2FO8rBMjXawlx5pk3jAiBdAYgFHqiYq5cHzOM7wY7blgdQ5mO0Vmlln7wGpotkmyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMb6Lc3liHo7DjHzj6KtwDXLhL0mIZHY5Gl2vcoMG4EH%2BImcqqV5SvP2oZ8ucqVTW4JWaVhOZyw4lyaRyg%2FGAyAqtp%2FCDnG690Ra3ubjQQG6dty7plZUVvw9Ty9QCCP4v7jfCD8KEt5Zv96U4KeC26PIuzqeT4wWj9DbVgcg4wFbtJGrbS6TPKRCXCRpsYatBYGYGM4MenntAhE0IgqCbvrIFiGeB5RWTvDk%2Bin3dS0%2FNpWOlQqOHHjfQDMBLT8xxc3dctjkD6B%2BtT7IvuQ%2FBPP2bqg6htG%2BQ2dXFfeij4aDp8Ls8b1hKsDh%2FOt8FPaTFheSiHvA3Hcn9c4Jq%2F6j10ZYt5BUK2%2BgMgm5DNZ0uUZlTn6lrqmDbU2KAjDdkis3bn6eA%2FPCt6PpLZ4vff8loDuDxVJjwRbOUth8iK7mwLkRpaguoE7IDrb5j5yfJX6ifw2qjvYOugrTu3%2Bo0F5FUgXrwc51DU9rRmP3nwHROEyfbVYWBMZZCJhcIrxNoTS2SfD4nY%2BC%2BdvLj%2F2sggQ7ezXBabZKaV%2BOiQZtyuop8lL8frS9PtII61OcpCjwITzs6za9k%2F2t79P5N24CCiKC%2FpHDVLMB5IMEOCLmK%2Fx22QXNqw4LUB807yU6XZQKxvaf6mOYSxh1C0yQTVR4cw4K3NxAY6pgG0QP10ZC%2FCIB39HffSchaa5sz0kVDk3G9r3tNzCg0F9FPWjc5Hq0wTfTnPc82udZOSWp0n3HRBFcK1%2FoVTuD6yeAWGfRxe7nxTXy%2BjrJ4ThuwuH%2BI1B9UnlchZDbjGjlv70rsfRkyHgecB04KTkgxxadUb0ItG0crxt7aBGzrAuVcEZDvMg1oWKF0a%2FZdfCXZ6kG%2BQXdYoItBV3EfDs7gR532I48%2F7&X-Amz-Signature=da7878bf32cbc39d5fcbd006b87a2b58fa1e9d7473df60ea69139d63fae17ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YERZDHHD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFgxcldSy%2FwVszivGHB%2FJvUdlEE%2FO8rBMjXawlx5pk3jAiBdAYgFHqiYq5cHzOM7wY7blgdQ5mO0Vmlln7wGpotkmyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMb6Lc3liHo7DjHzj6KtwDXLhL0mIZHY5Gl2vcoMG4EH%2BImcqqV5SvP2oZ8ucqVTW4JWaVhOZyw4lyaRyg%2FGAyAqtp%2FCDnG690Ra3ubjQQG6dty7plZUVvw9Ty9QCCP4v7jfCD8KEt5Zv96U4KeC26PIuzqeT4wWj9DbVgcg4wFbtJGrbS6TPKRCXCRpsYatBYGYGM4MenntAhE0IgqCbvrIFiGeB5RWTvDk%2Bin3dS0%2FNpWOlQqOHHjfQDMBLT8xxc3dctjkD6B%2BtT7IvuQ%2FBPP2bqg6htG%2BQ2dXFfeij4aDp8Ls8b1hKsDh%2FOt8FPaTFheSiHvA3Hcn9c4Jq%2F6j10ZYt5BUK2%2BgMgm5DNZ0uUZlTn6lrqmDbU2KAjDdkis3bn6eA%2FPCt6PpLZ4vff8loDuDxVJjwRbOUth8iK7mwLkRpaguoE7IDrb5j5yfJX6ifw2qjvYOugrTu3%2Bo0F5FUgXrwc51DU9rRmP3nwHROEyfbVYWBMZZCJhcIrxNoTS2SfD4nY%2BC%2BdvLj%2F2sggQ7ezXBabZKaV%2BOiQZtyuop8lL8frS9PtII61OcpCjwITzs6za9k%2F2t79P5N24CCiKC%2FpHDVLMB5IMEOCLmK%2Fx22QXNqw4LUB807yU6XZQKxvaf6mOYSxh1C0yQTVR4cw4K3NxAY6pgG0QP10ZC%2FCIB39HffSchaa5sz0kVDk3G9r3tNzCg0F9FPWjc5Hq0wTfTnPc82udZOSWp0n3HRBFcK1%2FoVTuD6yeAWGfRxe7nxTXy%2BjrJ4ThuwuH%2BI1B9UnlchZDbjGjlv70rsfRkyHgecB04KTkgxxadUb0ItG0crxt7aBGzrAuVcEZDvMg1oWKF0a%2FZdfCXZ6kG%2BQXdYoItBV3EfDs7gR532I48%2F7&X-Amz-Signature=f1c250d7942a11177afeb0cdfbe795c49d733fa96f530b87cccab65110e78327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YERZDHHD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFgxcldSy%2FwVszivGHB%2FJvUdlEE%2FO8rBMjXawlx5pk3jAiBdAYgFHqiYq5cHzOM7wY7blgdQ5mO0Vmlln7wGpotkmyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMb6Lc3liHo7DjHzj6KtwDXLhL0mIZHY5Gl2vcoMG4EH%2BImcqqV5SvP2oZ8ucqVTW4JWaVhOZyw4lyaRyg%2FGAyAqtp%2FCDnG690Ra3ubjQQG6dty7plZUVvw9Ty9QCCP4v7jfCD8KEt5Zv96U4KeC26PIuzqeT4wWj9DbVgcg4wFbtJGrbS6TPKRCXCRpsYatBYGYGM4MenntAhE0IgqCbvrIFiGeB5RWTvDk%2Bin3dS0%2FNpWOlQqOHHjfQDMBLT8xxc3dctjkD6B%2BtT7IvuQ%2FBPP2bqg6htG%2BQ2dXFfeij4aDp8Ls8b1hKsDh%2FOt8FPaTFheSiHvA3Hcn9c4Jq%2F6j10ZYt5BUK2%2BgMgm5DNZ0uUZlTn6lrqmDbU2KAjDdkis3bn6eA%2FPCt6PpLZ4vff8loDuDxVJjwRbOUth8iK7mwLkRpaguoE7IDrb5j5yfJX6ifw2qjvYOugrTu3%2Bo0F5FUgXrwc51DU9rRmP3nwHROEyfbVYWBMZZCJhcIrxNoTS2SfD4nY%2BC%2BdvLj%2F2sggQ7ezXBabZKaV%2BOiQZtyuop8lL8frS9PtII61OcpCjwITzs6za9k%2F2t79P5N24CCiKC%2FpHDVLMB5IMEOCLmK%2Fx22QXNqw4LUB807yU6XZQKxvaf6mOYSxh1C0yQTVR4cw4K3NxAY6pgG0QP10ZC%2FCIB39HffSchaa5sz0kVDk3G9r3tNzCg0F9FPWjc5Hq0wTfTnPc82udZOSWp0n3HRBFcK1%2FoVTuD6yeAWGfRxe7nxTXy%2BjrJ4ThuwuH%2BI1B9UnlchZDbjGjlv70rsfRkyHgecB04KTkgxxadUb0ItG0crxt7aBGzrAuVcEZDvMg1oWKF0a%2FZdfCXZ6kG%2BQXdYoItBV3EfDs7gR532I48%2F7&X-Amz-Signature=2c27c0ca58764d690713745b0c719ce02b9eba44dbab5dd7ffad340a08446b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
