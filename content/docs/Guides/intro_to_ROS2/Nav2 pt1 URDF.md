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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQSB57DQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCBSgJaP%2FHMzqTpy5Ram8tSio%2FxwsKI27zmLCTG7pVcOwIgJGphzp%2B398I3G1VLhc%2F2w3ucUMZnbyZSjvL%2FSTLyLAYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCZIvLLavFHbjR9GvSrcA7vSdyd1XVaftMTKwLbLTzB6SFW%2FzPI%2BCIHMPwYRnPz2S5bWDGQ%2FscQDAPwqESa0FQA8Kimqbg6oQg2nnHLhlRbchg4bGqdxYpYfwwVrr1nTKU1ctkR0hfBqyAxUsgis9dqmo2Ft8MFQr8LAvWmFUPM49w587eyIjv3O8ReFm87NMs8pYbd4sh6I%2F27ufiPAJSIADZ28NDibbq%2F3j%2F2vLcZwbxE9m9qw5fz%2FTo%2BdlxQpq4LV657OhLrjYYgWJCb1301%2FJrYAwdqPCEybRW7eFKdgPX8EjmokAI4jTLCe24xTO6tSp9rJUs%2FoLz46ZB4EBRB0HG9ZEkqmIBrneKflw4QeVq79fGXJUgMavskH5B1w6F9nMg22yOfPJ8pnTZD62Z7y%2BQ3YRx3PucfRDdlfS9XQqggZxvuGcWzFK9KhbaHVhk3JJDoEgP3JjBjU6m9K8xVYK%2BMTt0FK0r2mjbw81qByD0bnXLOI7AY1IoMWycpqSDlyp0etE7nQ0K2HhRv%2BQdboh5hQxjXUhGcAPC3I%2FIuc%2BQAFnQRT3%2Ba%2FRJOT5HNSOvfz4ecdn9Li81U2abFi8j%2FhYSiCRRVx97c6Fo1%2Fl4Xc5ecAnmDVpaaDzN0vTEK%2FGlgg3eygLfSqtRVcMMOkitAGOqUBXEYxecXGTyC4XLJ2ycbZ3PLkJFeyQISksZYBIpfi2%2F9PSLLxdBj6qkDZlyt6Jo5WjqZniqQOwW39x6NzPALwpAWlN%2BRF%2BIV4rcnGsa%2BOglZ6qNLQrqppmOAt%2FLv6WXvXfPzk9Dkgam3czhLHjcfGY3kCTrNBUi%2Bc0wGwlGpjHFwylzYzFAgnTFtjzhHuG%2B1RAyCkwYFieIo7FpU1PxuXE9r6xWpY&X-Amz-Signature=92815045f1c755e243b4b48454dc259c6f9c0a1e22fc87a32e5ab39b24e0dc35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQSB57DQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCBSgJaP%2FHMzqTpy5Ram8tSio%2FxwsKI27zmLCTG7pVcOwIgJGphzp%2B398I3G1VLhc%2F2w3ucUMZnbyZSjvL%2FSTLyLAYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCZIvLLavFHbjR9GvSrcA7vSdyd1XVaftMTKwLbLTzB6SFW%2FzPI%2BCIHMPwYRnPz2S5bWDGQ%2FscQDAPwqESa0FQA8Kimqbg6oQg2nnHLhlRbchg4bGqdxYpYfwwVrr1nTKU1ctkR0hfBqyAxUsgis9dqmo2Ft8MFQr8LAvWmFUPM49w587eyIjv3O8ReFm87NMs8pYbd4sh6I%2F27ufiPAJSIADZ28NDibbq%2F3j%2F2vLcZwbxE9m9qw5fz%2FTo%2BdlxQpq4LV657OhLrjYYgWJCb1301%2FJrYAwdqPCEybRW7eFKdgPX8EjmokAI4jTLCe24xTO6tSp9rJUs%2FoLz46ZB4EBRB0HG9ZEkqmIBrneKflw4QeVq79fGXJUgMavskH5B1w6F9nMg22yOfPJ8pnTZD62Z7y%2BQ3YRx3PucfRDdlfS9XQqggZxvuGcWzFK9KhbaHVhk3JJDoEgP3JjBjU6m9K8xVYK%2BMTt0FK0r2mjbw81qByD0bnXLOI7AY1IoMWycpqSDlyp0etE7nQ0K2HhRv%2BQdboh5hQxjXUhGcAPC3I%2FIuc%2BQAFnQRT3%2Ba%2FRJOT5HNSOvfz4ecdn9Li81U2abFi8j%2FhYSiCRRVx97c6Fo1%2Fl4Xc5ecAnmDVpaaDzN0vTEK%2FGlgg3eygLfSqtRVcMMOkitAGOqUBXEYxecXGTyC4XLJ2ycbZ3PLkJFeyQISksZYBIpfi2%2F9PSLLxdBj6qkDZlyt6Jo5WjqZniqQOwW39x6NzPALwpAWlN%2BRF%2BIV4rcnGsa%2BOglZ6qNLQrqppmOAt%2FLv6WXvXfPzk9Dkgam3czhLHjcfGY3kCTrNBUi%2Bc0wGwlGpjHFwylzYzFAgnTFtjzhHuG%2B1RAyCkwYFieIo7FpU1PxuXE9r6xWpY&X-Amz-Signature=406062d0d629f96d14bbd19e45cc53e7cc9fcff7ab3322afbf1a92b625c86552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQSB57DQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCBSgJaP%2FHMzqTpy5Ram8tSio%2FxwsKI27zmLCTG7pVcOwIgJGphzp%2B398I3G1VLhc%2F2w3ucUMZnbyZSjvL%2FSTLyLAYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCZIvLLavFHbjR9GvSrcA7vSdyd1XVaftMTKwLbLTzB6SFW%2FzPI%2BCIHMPwYRnPz2S5bWDGQ%2FscQDAPwqESa0FQA8Kimqbg6oQg2nnHLhlRbchg4bGqdxYpYfwwVrr1nTKU1ctkR0hfBqyAxUsgis9dqmo2Ft8MFQr8LAvWmFUPM49w587eyIjv3O8ReFm87NMs8pYbd4sh6I%2F27ufiPAJSIADZ28NDibbq%2F3j%2F2vLcZwbxE9m9qw5fz%2FTo%2BdlxQpq4LV657OhLrjYYgWJCb1301%2FJrYAwdqPCEybRW7eFKdgPX8EjmokAI4jTLCe24xTO6tSp9rJUs%2FoLz46ZB4EBRB0HG9ZEkqmIBrneKflw4QeVq79fGXJUgMavskH5B1w6F9nMg22yOfPJ8pnTZD62Z7y%2BQ3YRx3PucfRDdlfS9XQqggZxvuGcWzFK9KhbaHVhk3JJDoEgP3JjBjU6m9K8xVYK%2BMTt0FK0r2mjbw81qByD0bnXLOI7AY1IoMWycpqSDlyp0etE7nQ0K2HhRv%2BQdboh5hQxjXUhGcAPC3I%2FIuc%2BQAFnQRT3%2Ba%2FRJOT5HNSOvfz4ecdn9Li81U2abFi8j%2FhYSiCRRVx97c6Fo1%2Fl4Xc5ecAnmDVpaaDzN0vTEK%2FGlgg3eygLfSqtRVcMMOkitAGOqUBXEYxecXGTyC4XLJ2ycbZ3PLkJFeyQISksZYBIpfi2%2F9PSLLxdBj6qkDZlyt6Jo5WjqZniqQOwW39x6NzPALwpAWlN%2BRF%2BIV4rcnGsa%2BOglZ6qNLQrqppmOAt%2FLv6WXvXfPzk9Dkgam3czhLHjcfGY3kCTrNBUi%2Bc0wGwlGpjHFwylzYzFAgnTFtjzhHuG%2B1RAyCkwYFieIo7FpU1PxuXE9r6xWpY&X-Amz-Signature=4a38e2e2bc789ee8f18f51abc70dea998b6f9145c7cfa6ffa66d81b06f722d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQSB57DQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCBSgJaP%2FHMzqTpy5Ram8tSio%2FxwsKI27zmLCTG7pVcOwIgJGphzp%2B398I3G1VLhc%2F2w3ucUMZnbyZSjvL%2FSTLyLAYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCZIvLLavFHbjR9GvSrcA7vSdyd1XVaftMTKwLbLTzB6SFW%2FzPI%2BCIHMPwYRnPz2S5bWDGQ%2FscQDAPwqESa0FQA8Kimqbg6oQg2nnHLhlRbchg4bGqdxYpYfwwVrr1nTKU1ctkR0hfBqyAxUsgis9dqmo2Ft8MFQr8LAvWmFUPM49w587eyIjv3O8ReFm87NMs8pYbd4sh6I%2F27ufiPAJSIADZ28NDibbq%2F3j%2F2vLcZwbxE9m9qw5fz%2FTo%2BdlxQpq4LV657OhLrjYYgWJCb1301%2FJrYAwdqPCEybRW7eFKdgPX8EjmokAI4jTLCe24xTO6tSp9rJUs%2FoLz46ZB4EBRB0HG9ZEkqmIBrneKflw4QeVq79fGXJUgMavskH5B1w6F9nMg22yOfPJ8pnTZD62Z7y%2BQ3YRx3PucfRDdlfS9XQqggZxvuGcWzFK9KhbaHVhk3JJDoEgP3JjBjU6m9K8xVYK%2BMTt0FK0r2mjbw81qByD0bnXLOI7AY1IoMWycpqSDlyp0etE7nQ0K2HhRv%2BQdboh5hQxjXUhGcAPC3I%2FIuc%2BQAFnQRT3%2Ba%2FRJOT5HNSOvfz4ecdn9Li81U2abFi8j%2FhYSiCRRVx97c6Fo1%2Fl4Xc5ecAnmDVpaaDzN0vTEK%2FGlgg3eygLfSqtRVcMMOkitAGOqUBXEYxecXGTyC4XLJ2ycbZ3PLkJFeyQISksZYBIpfi2%2F9PSLLxdBj6qkDZlyt6Jo5WjqZniqQOwW39x6NzPALwpAWlN%2BRF%2BIV4rcnGsa%2BOglZ6qNLQrqppmOAt%2FLv6WXvXfPzk9Dkgam3czhLHjcfGY3kCTrNBUi%2Bc0wGwlGpjHFwylzYzFAgnTFtjzhHuG%2B1RAyCkwYFieIo7FpU1PxuXE9r6xWpY&X-Amz-Signature=89d79f686dfb8f3d18a2cbaa0c51bd479e35dcd5d7395aeb8c58b33f81c55356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQSB57DQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCBSgJaP%2FHMzqTpy5Ram8tSio%2FxwsKI27zmLCTG7pVcOwIgJGphzp%2B398I3G1VLhc%2F2w3ucUMZnbyZSjvL%2FSTLyLAYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCZIvLLavFHbjR9GvSrcA7vSdyd1XVaftMTKwLbLTzB6SFW%2FzPI%2BCIHMPwYRnPz2S5bWDGQ%2FscQDAPwqESa0FQA8Kimqbg6oQg2nnHLhlRbchg4bGqdxYpYfwwVrr1nTKU1ctkR0hfBqyAxUsgis9dqmo2Ft8MFQr8LAvWmFUPM49w587eyIjv3O8ReFm87NMs8pYbd4sh6I%2F27ufiPAJSIADZ28NDibbq%2F3j%2F2vLcZwbxE9m9qw5fz%2FTo%2BdlxQpq4LV657OhLrjYYgWJCb1301%2FJrYAwdqPCEybRW7eFKdgPX8EjmokAI4jTLCe24xTO6tSp9rJUs%2FoLz46ZB4EBRB0HG9ZEkqmIBrneKflw4QeVq79fGXJUgMavskH5B1w6F9nMg22yOfPJ8pnTZD62Z7y%2BQ3YRx3PucfRDdlfS9XQqggZxvuGcWzFK9KhbaHVhk3JJDoEgP3JjBjU6m9K8xVYK%2BMTt0FK0r2mjbw81qByD0bnXLOI7AY1IoMWycpqSDlyp0etE7nQ0K2HhRv%2BQdboh5hQxjXUhGcAPC3I%2FIuc%2BQAFnQRT3%2Ba%2FRJOT5HNSOvfz4ecdn9Li81U2abFi8j%2FhYSiCRRVx97c6Fo1%2Fl4Xc5ecAnmDVpaaDzN0vTEK%2FGlgg3eygLfSqtRVcMMOkitAGOqUBXEYxecXGTyC4XLJ2ycbZ3PLkJFeyQISksZYBIpfi2%2F9PSLLxdBj6qkDZlyt6Jo5WjqZniqQOwW39x6NzPALwpAWlN%2BRF%2BIV4rcnGsa%2BOglZ6qNLQrqppmOAt%2FLv6WXvXfPzk9Dkgam3czhLHjcfGY3kCTrNBUi%2Bc0wGwlGpjHFwylzYzFAgnTFtjzhHuG%2B1RAyCkwYFieIo7FpU1PxuXE9r6xWpY&X-Amz-Signature=076caf90cecace6757158c4a2e95dfe67dfeecf66f0c49035a39f4dbdb1bf4f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQSB57DQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCBSgJaP%2FHMzqTpy5Ram8tSio%2FxwsKI27zmLCTG7pVcOwIgJGphzp%2B398I3G1VLhc%2F2w3ucUMZnbyZSjvL%2FSTLyLAYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCZIvLLavFHbjR9GvSrcA7vSdyd1XVaftMTKwLbLTzB6SFW%2FzPI%2BCIHMPwYRnPz2S5bWDGQ%2FscQDAPwqESa0FQA8Kimqbg6oQg2nnHLhlRbchg4bGqdxYpYfwwVrr1nTKU1ctkR0hfBqyAxUsgis9dqmo2Ft8MFQr8LAvWmFUPM49w587eyIjv3O8ReFm87NMs8pYbd4sh6I%2F27ufiPAJSIADZ28NDibbq%2F3j%2F2vLcZwbxE9m9qw5fz%2FTo%2BdlxQpq4LV657OhLrjYYgWJCb1301%2FJrYAwdqPCEybRW7eFKdgPX8EjmokAI4jTLCe24xTO6tSp9rJUs%2FoLz46ZB4EBRB0HG9ZEkqmIBrneKflw4QeVq79fGXJUgMavskH5B1w6F9nMg22yOfPJ8pnTZD62Z7y%2BQ3YRx3PucfRDdlfS9XQqggZxvuGcWzFK9KhbaHVhk3JJDoEgP3JjBjU6m9K8xVYK%2BMTt0FK0r2mjbw81qByD0bnXLOI7AY1IoMWycpqSDlyp0etE7nQ0K2HhRv%2BQdboh5hQxjXUhGcAPC3I%2FIuc%2BQAFnQRT3%2Ba%2FRJOT5HNSOvfz4ecdn9Li81U2abFi8j%2FhYSiCRRVx97c6Fo1%2Fl4Xc5ecAnmDVpaaDzN0vTEK%2FGlgg3eygLfSqtRVcMMOkitAGOqUBXEYxecXGTyC4XLJ2ycbZ3PLkJFeyQISksZYBIpfi2%2F9PSLLxdBj6qkDZlyt6Jo5WjqZniqQOwW39x6NzPALwpAWlN%2BRF%2BIV4rcnGsa%2BOglZ6qNLQrqppmOAt%2FLv6WXvXfPzk9Dkgam3czhLHjcfGY3kCTrNBUi%2Bc0wGwlGpjHFwylzYzFAgnTFtjzhHuG%2B1RAyCkwYFieIo7FpU1PxuXE9r6xWpY&X-Amz-Signature=30acc7fdb41aa12199d62b85151098dbe941b8039d459f6c3d124fb56cbb99f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQSB57DQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCBSgJaP%2FHMzqTpy5Ram8tSio%2FxwsKI27zmLCTG7pVcOwIgJGphzp%2B398I3G1VLhc%2F2w3ucUMZnbyZSjvL%2FSTLyLAYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCZIvLLavFHbjR9GvSrcA7vSdyd1XVaftMTKwLbLTzB6SFW%2FzPI%2BCIHMPwYRnPz2S5bWDGQ%2FscQDAPwqESa0FQA8Kimqbg6oQg2nnHLhlRbchg4bGqdxYpYfwwVrr1nTKU1ctkR0hfBqyAxUsgis9dqmo2Ft8MFQr8LAvWmFUPM49w587eyIjv3O8ReFm87NMs8pYbd4sh6I%2F27ufiPAJSIADZ28NDibbq%2F3j%2F2vLcZwbxE9m9qw5fz%2FTo%2BdlxQpq4LV657OhLrjYYgWJCb1301%2FJrYAwdqPCEybRW7eFKdgPX8EjmokAI4jTLCe24xTO6tSp9rJUs%2FoLz46ZB4EBRB0HG9ZEkqmIBrneKflw4QeVq79fGXJUgMavskH5B1w6F9nMg22yOfPJ8pnTZD62Z7y%2BQ3YRx3PucfRDdlfS9XQqggZxvuGcWzFK9KhbaHVhk3JJDoEgP3JjBjU6m9K8xVYK%2BMTt0FK0r2mjbw81qByD0bnXLOI7AY1IoMWycpqSDlyp0etE7nQ0K2HhRv%2BQdboh5hQxjXUhGcAPC3I%2FIuc%2BQAFnQRT3%2Ba%2FRJOT5HNSOvfz4ecdn9Li81U2abFi8j%2FhYSiCRRVx97c6Fo1%2Fl4Xc5ecAnmDVpaaDzN0vTEK%2FGlgg3eygLfSqtRVcMMOkitAGOqUBXEYxecXGTyC4XLJ2ycbZ3PLkJFeyQISksZYBIpfi2%2F9PSLLxdBj6qkDZlyt6Jo5WjqZniqQOwW39x6NzPALwpAWlN%2BRF%2BIV4rcnGsa%2BOglZ6qNLQrqppmOAt%2FLv6WXvXfPzk9Dkgam3czhLHjcfGY3kCTrNBUi%2Bc0wGwlGpjHFwylzYzFAgnTFtjzhHuG%2B1RAyCkwYFieIo7FpU1PxuXE9r6xWpY&X-Amz-Signature=70ead4e26486db352e82ea3b89e944ff6e93f7079d678604dc790292486d8622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQSB57DQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCBSgJaP%2FHMzqTpy5Ram8tSio%2FxwsKI27zmLCTG7pVcOwIgJGphzp%2B398I3G1VLhc%2F2w3ucUMZnbyZSjvL%2FSTLyLAYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCZIvLLavFHbjR9GvSrcA7vSdyd1XVaftMTKwLbLTzB6SFW%2FzPI%2BCIHMPwYRnPz2S5bWDGQ%2FscQDAPwqESa0FQA8Kimqbg6oQg2nnHLhlRbchg4bGqdxYpYfwwVrr1nTKU1ctkR0hfBqyAxUsgis9dqmo2Ft8MFQr8LAvWmFUPM49w587eyIjv3O8ReFm87NMs8pYbd4sh6I%2F27ufiPAJSIADZ28NDibbq%2F3j%2F2vLcZwbxE9m9qw5fz%2FTo%2BdlxQpq4LV657OhLrjYYgWJCb1301%2FJrYAwdqPCEybRW7eFKdgPX8EjmokAI4jTLCe24xTO6tSp9rJUs%2FoLz46ZB4EBRB0HG9ZEkqmIBrneKflw4QeVq79fGXJUgMavskH5B1w6F9nMg22yOfPJ8pnTZD62Z7y%2BQ3YRx3PucfRDdlfS9XQqggZxvuGcWzFK9KhbaHVhk3JJDoEgP3JjBjU6m9K8xVYK%2BMTt0FK0r2mjbw81qByD0bnXLOI7AY1IoMWycpqSDlyp0etE7nQ0K2HhRv%2BQdboh5hQxjXUhGcAPC3I%2FIuc%2BQAFnQRT3%2Ba%2FRJOT5HNSOvfz4ecdn9Li81U2abFi8j%2FhYSiCRRVx97c6Fo1%2Fl4Xc5ecAnmDVpaaDzN0vTEK%2FGlgg3eygLfSqtRVcMMOkitAGOqUBXEYxecXGTyC4XLJ2ycbZ3PLkJFeyQISksZYBIpfi2%2F9PSLLxdBj6qkDZlyt6Jo5WjqZniqQOwW39x6NzPALwpAWlN%2BRF%2BIV4rcnGsa%2BOglZ6qNLQrqppmOAt%2FLv6WXvXfPzk9Dkgam3czhLHjcfGY3kCTrNBUi%2Bc0wGwlGpjHFwylzYzFAgnTFtjzhHuG%2B1RAyCkwYFieIo7FpU1PxuXE9r6xWpY&X-Amz-Signature=1a30efb6e15d1ee834ed2c51bac78d6ac09ba869daa1599cd2c9fbcd30a7af8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQSB57DQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCBSgJaP%2FHMzqTpy5Ram8tSio%2FxwsKI27zmLCTG7pVcOwIgJGphzp%2B398I3G1VLhc%2F2w3ucUMZnbyZSjvL%2FSTLyLAYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCZIvLLavFHbjR9GvSrcA7vSdyd1XVaftMTKwLbLTzB6SFW%2FzPI%2BCIHMPwYRnPz2S5bWDGQ%2FscQDAPwqESa0FQA8Kimqbg6oQg2nnHLhlRbchg4bGqdxYpYfwwVrr1nTKU1ctkR0hfBqyAxUsgis9dqmo2Ft8MFQr8LAvWmFUPM49w587eyIjv3O8ReFm87NMs8pYbd4sh6I%2F27ufiPAJSIADZ28NDibbq%2F3j%2F2vLcZwbxE9m9qw5fz%2FTo%2BdlxQpq4LV657OhLrjYYgWJCb1301%2FJrYAwdqPCEybRW7eFKdgPX8EjmokAI4jTLCe24xTO6tSp9rJUs%2FoLz46ZB4EBRB0HG9ZEkqmIBrneKflw4QeVq79fGXJUgMavskH5B1w6F9nMg22yOfPJ8pnTZD62Z7y%2BQ3YRx3PucfRDdlfS9XQqggZxvuGcWzFK9KhbaHVhk3JJDoEgP3JjBjU6m9K8xVYK%2BMTt0FK0r2mjbw81qByD0bnXLOI7AY1IoMWycpqSDlyp0etE7nQ0K2HhRv%2BQdboh5hQxjXUhGcAPC3I%2FIuc%2BQAFnQRT3%2Ba%2FRJOT5HNSOvfz4ecdn9Li81U2abFi8j%2FhYSiCRRVx97c6Fo1%2Fl4Xc5ecAnmDVpaaDzN0vTEK%2FGlgg3eygLfSqtRVcMMOkitAGOqUBXEYxecXGTyC4XLJ2ycbZ3PLkJFeyQISksZYBIpfi2%2F9PSLLxdBj6qkDZlyt6Jo5WjqZniqQOwW39x6NzPALwpAWlN%2BRF%2BIV4rcnGsa%2BOglZ6qNLQrqppmOAt%2FLv6WXvXfPzk9Dkgam3czhLHjcfGY3kCTrNBUi%2Bc0wGwlGpjHFwylzYzFAgnTFtjzhHuG%2B1RAyCkwYFieIo7FpU1PxuXE9r6xWpY&X-Amz-Signature=2a3c7135e32e9f181123344c696727d2175646999c7f1382ecea2a97a1d4922c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQSB57DQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCBSgJaP%2FHMzqTpy5Ram8tSio%2FxwsKI27zmLCTG7pVcOwIgJGphzp%2B398I3G1VLhc%2F2w3ucUMZnbyZSjvL%2FSTLyLAYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCZIvLLavFHbjR9GvSrcA7vSdyd1XVaftMTKwLbLTzB6SFW%2FzPI%2BCIHMPwYRnPz2S5bWDGQ%2FscQDAPwqESa0FQA8Kimqbg6oQg2nnHLhlRbchg4bGqdxYpYfwwVrr1nTKU1ctkR0hfBqyAxUsgis9dqmo2Ft8MFQr8LAvWmFUPM49w587eyIjv3O8ReFm87NMs8pYbd4sh6I%2F27ufiPAJSIADZ28NDibbq%2F3j%2F2vLcZwbxE9m9qw5fz%2FTo%2BdlxQpq4LV657OhLrjYYgWJCb1301%2FJrYAwdqPCEybRW7eFKdgPX8EjmokAI4jTLCe24xTO6tSp9rJUs%2FoLz46ZB4EBRB0HG9ZEkqmIBrneKflw4QeVq79fGXJUgMavskH5B1w6F9nMg22yOfPJ8pnTZD62Z7y%2BQ3YRx3PucfRDdlfS9XQqggZxvuGcWzFK9KhbaHVhk3JJDoEgP3JjBjU6m9K8xVYK%2BMTt0FK0r2mjbw81qByD0bnXLOI7AY1IoMWycpqSDlyp0etE7nQ0K2HhRv%2BQdboh5hQxjXUhGcAPC3I%2FIuc%2BQAFnQRT3%2Ba%2FRJOT5HNSOvfz4ecdn9Li81U2abFi8j%2FhYSiCRRVx97c6Fo1%2Fl4Xc5ecAnmDVpaaDzN0vTEK%2FGlgg3eygLfSqtRVcMMOkitAGOqUBXEYxecXGTyC4XLJ2ycbZ3PLkJFeyQISksZYBIpfi2%2F9PSLLxdBj6qkDZlyt6Jo5WjqZniqQOwW39x6NzPALwpAWlN%2BRF%2BIV4rcnGsa%2BOglZ6qNLQrqppmOAt%2FLv6WXvXfPzk9Dkgam3czhLHjcfGY3kCTrNBUi%2Bc0wGwlGpjHFwylzYzFAgnTFtjzhHuG%2B1RAyCkwYFieIo7FpU1PxuXE9r6xWpY&X-Amz-Signature=2e97f2b5f17d9a9d4153c95ff4978b1b7174a1f9218667e381db597663a612fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3S6WNMS%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHqHWaZP8V7F6%2F%2FEugq33XbGSGAmKL1FfEYHl4vovZg%2BAiB8VG3X7UywxhfZ1%2FMMRHPlkz8RQswVYhhYREa%2BZO2CjSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMTYkA2JmaaHy5KRzSKtwDmr20OOiw3WD7v14XLUEg2dCud1obinfxrNP4JCr2AJ1ny3Ft9VtakTota6PBcpuYy%2BY5z%2BVU%2BTcLlAWwRKLn6gBajY2RXYLuUL6au7IwrHrwor7DPn1zGszaUY%2FfllDHaaE%2FMDsMMaW9XddfT%2Fuen%2Bj3bT63HCXtefleOR%2BbBiyHVeAm%2BX%2B16LSUCEym1uhc%2BR8As42OGkPtGCm%2BYaNiteIKVsfhjlBu%2BND1lI%2BTeDuxSovOMPj6ObjRi3uoe36IQYXTI89spgU2%2BY4NO8JEaTlrWF6GOjdR7uc1jg38J9uVmAOiSiaeyaWpZ0d4KVy0wZhxt7VvBVNddFT3Ab257kWmqb8r17DsfPl9UquOY1y3J1FYvEUwCWyVGPW49OIIcO72xAnO9OHZK4Su8s19xlFyJLflwpnMFdyz9uL%2BkfzWZJ6z2556nLG%2BB3bE1cugXbXeJmiRMPmsPT9VbLO3uGT04i5gJJnrNMPvBC4dEpL0YXZLpIf%2BX0J33L6MjE%2F%2F2sCg8KUqVEe9k%2F3m4pUsGrupxwLDGpAyrizmeK8MyhieBmtieUZGCEmSfl3lALa74kbcsTsakmkELKovqLAXJhpGnv971Txdrtx8x8FPyUn5H7GiKrY5%2BCbhq9EwsqSK0AY6pgFWwG8Jez7IxRLRSzS1byb%2BJSghXBY8IldGuNwgRxtqydvNjStWtcGzISkFguJNSg39GfMYZ9Z7C7%2Ba7egQBwPUxzn8IxJmQsaF%2Ff0%2FLTxUxPfdWB9BqQV5SXukODNC1E5BuNz%2F9rR1X0vWNeaIx6NR1xfiEtL2wxxH79yZwS4tHUgodKOwpCVojd0kyL972%2FXDxT1TthY%2F37rjBpqjU58KKxsb4VBY&X-Amz-Signature=20855c44e8c24d548dbfbd7bb56d4c59a6952ca8042156c201bf456f3a0c911f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TROABXI4%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDFAMh9riSArMFU2YpWlKd90wQab9dteHrlW4gXXIO65AiAmU1Xq7ud%2BBFrtJWWjwCgQFPCuhDDO6LtXmEiQjFKDZyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMGT7Szj0vnh7lbOyBKtwDIrTY%2BYieO74gVcy74zVXabmQuDuf9SheA4FXrHsoQhrU7r3eOVGEJwpWgieuCo%2BZrCu2uDr6U6nMFPb2UYjz1kxMpkGd%2FT6C%2BNxtgnl2JyKzp6f0L7EJ9NzTvSbPfxEmpoGS0dValO3rnXtrtaACdObyOVUhVMb3Cpxyek8p%2B5CSl2rb%2FzlyfmaogT76TiaAJE%2F8xtGPqpMsrsrLqF6jHbRfquZyh6YB29pIWAjcHNYE1AaIsvNHAmT%2BzL9m5kDE60nACPZvjvWteLQb13mY03cqtXgriA3M2BYlRC%2FA3Q2WJQmx8mE7b36EIamE9ufff5GZ6Yc7LA2LewkhtMB35CmMezQDJZ3R6oDTYNYNuU67ySq%2BFL28a4A2QgnGUP4Vc5J7fAcXN7QOUYOnRvekl%2B8GPiHulifpQt7zqiiJw2HUYH5BEo2EOi2FIrj2NEwoiADYN7%2FaaOfuambofl8Zl%2FxRNQ%2BfUNMz45ZJ4uV6TsoIlUivbOPgDl9%2BbxejMQwa5BFlMTGmrEMAj7Z2jzYbHLm6DI7ZsFwzCCQMfN6Xu2S9uSfpz8ZhbmsIkV0F1V0BRveWaxM7A2mBYJOmqB6xaXntgbNSzJWd1wTIBYiOBqWK6ZDJ9wn9m0z%2BWLkwhKWK0AY6pgGae8JQnwqpHsRfRGc4NxFI0aOA0DiLxS%2BYdFU0CNBdtlzVJ9438oUtqaUNYcbsLgtUO7%2F8hvwxU8AAiNDVN17Ke4tZqh%2FdKaDjLIrREN%2Fy0Wp95iSP8%2BjemJyzPNzRAMCzUR9XeicqMfh3GZPR%2Bl3F3VZZgmUS1wNZO5I6asCN3fy4bpTo4DQ%2FKh2TjL4T%2F6uO9SDY%2F2xkgu1MLk9nJd0ZkobaRcqk&X-Amz-Signature=c0f42cfa6644a6da6a615bc96b7d9632a5d48cd0799cae77a08c62aecc37230d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBSXCNI%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEZFl%2FgE8B7i6HUZ2LUeYlN8GA3uNVavd0ZSg%2FJojsBXAiEAzcm5Ssey%2Bz6HIqkfUosS1zeqQP0bHWaYAJdqduvkkLkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEim1LK2peW6XLPzFircA8t3Zbmu2hfQ5KCNNxagY%2FxqSY0YMFsGfO%2FyuTlo5Mcy38NVV%2FxpKpwpY7vHXav00y%2FplIkTVD0X3115%2FIwAhP0L7UaRIgynK5ga5rqTCidBDmsKfJaPO%2Fd6CDrnCzUkAhlehULtlTHr6p8WsriYlZM9dJCfqu0lmNAkC1Fd2i0G9LTMnw2LPBqiYcJK008PbBDgm6wELdv%2FKbgDZtGlIIF0iBSxLCbGWaT162GgnxA7511db19YlOph73ynVfFm2TEYjrvFco7dGpGztLoF4GIxpBV5XC3D6U8sYPlyCMAFqgyiGYDcp3p1VM404ka9SMnfxYQ6sgq1Ve84fIp%2B2Mb2pbHUqtDuHc12GpbuXZV89udp6w3RaLZvRgeRBIZ1uigl8tbtHAJhZoE%2Bs9KaQ85CyeGspI8CJ4ESJlV2LHvtiYyOVJ13jWJAUWKBGFYykKaH03IHfbmt7RefgccuZqVHx0at2vkE7pPWRVFU6jSB7f449FA8Be%2FFYDCTgFhJNyec3H%2F7sM9IbxjidGp8KKceQKPWiNGjzwR3L3ZzPQXxv5XaaupUW%2F5fJ6g9uSduHiBGrWt3Z5wQpaj4zxYWAJ2fD%2BoTse%2BTmGF%2FH4arGqTDJnSUrFXIKE6dafvGMNOjitAGOqUBJcOCm4BjtRdNXIdg4M0qlBe%2FLve%2FA3ydm1sZDaUpoUNGBZeJKUL1N0oevPfrl3gpL3fECpweqNNjs9oq8QeYbsLdY0T%2BGYUe0KViKXyNarARlJOjMKcBfUfmTYbvSOEtR5TIlyNfCX84RdfujGA%2BaLUeT4I8Lr4qAuV%2FqrMexuYzHyTXPs9l2ritQYpg1jaWdqK0FXCxMJwOMddh5DYzT1l33qP9&X-Amz-Signature=43d523f221997052f65c14611e34ec93056f07d2243a15880ccf3345a5ab4315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQSB57DQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCBSgJaP%2FHMzqTpy5Ram8tSio%2FxwsKI27zmLCTG7pVcOwIgJGphzp%2B398I3G1VLhc%2F2w3ucUMZnbyZSjvL%2FSTLyLAYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCZIvLLavFHbjR9GvSrcA7vSdyd1XVaftMTKwLbLTzB6SFW%2FzPI%2BCIHMPwYRnPz2S5bWDGQ%2FscQDAPwqESa0FQA8Kimqbg6oQg2nnHLhlRbchg4bGqdxYpYfwwVrr1nTKU1ctkR0hfBqyAxUsgis9dqmo2Ft8MFQr8LAvWmFUPM49w587eyIjv3O8ReFm87NMs8pYbd4sh6I%2F27ufiPAJSIADZ28NDibbq%2F3j%2F2vLcZwbxE9m9qw5fz%2FTo%2BdlxQpq4LV657OhLrjYYgWJCb1301%2FJrYAwdqPCEybRW7eFKdgPX8EjmokAI4jTLCe24xTO6tSp9rJUs%2FoLz46ZB4EBRB0HG9ZEkqmIBrneKflw4QeVq79fGXJUgMavskH5B1w6F9nMg22yOfPJ8pnTZD62Z7y%2BQ3YRx3PucfRDdlfS9XQqggZxvuGcWzFK9KhbaHVhk3JJDoEgP3JjBjU6m9K8xVYK%2BMTt0FK0r2mjbw81qByD0bnXLOI7AY1IoMWycpqSDlyp0etE7nQ0K2HhRv%2BQdboh5hQxjXUhGcAPC3I%2FIuc%2BQAFnQRT3%2Ba%2FRJOT5HNSOvfz4ecdn9Li81U2abFi8j%2FhYSiCRRVx97c6Fo1%2Fl4Xc5ecAnmDVpaaDzN0vTEK%2FGlgg3eygLfSqtRVcMMOkitAGOqUBXEYxecXGTyC4XLJ2ycbZ3PLkJFeyQISksZYBIpfi2%2F9PSLLxdBj6qkDZlyt6Jo5WjqZniqQOwW39x6NzPALwpAWlN%2BRF%2BIV4rcnGsa%2BOglZ6qNLQrqppmOAt%2FLv6WXvXfPzk9Dkgam3czhLHjcfGY3kCTrNBUi%2Bc0wGwlGpjHFwylzYzFAgnTFtjzhHuG%2B1RAyCkwYFieIo7FpU1PxuXE9r6xWpY&X-Amz-Signature=5e2b81f9800a821f313787e06cccb555e295dcb808a2d15b6d7cde2a4f1be4a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OBH6CTT%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCmRItmDwQTbZCAX1KMzRzs5i3Ddk7I%2BdB9l3FHl3VuowIhAP5I8Oi9K%2FBCq0RKj4E5WtOTDAMQl%2BGqALYkldtdHyP9Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzWT8eF8QF3wVnhwZ8q3AO4B1oXQI0CjqgxO43wTC6koFx4%2FIkCEfpmxACmrfcbjZOGpBSi8YoNyQDLxbQZmbKnxDGa43Pj3v2VTgYucx%2FLvSWg3AXqWjQndrRk5G%2Fs0LClMs6BeUplzis0KDG1SMAdEH5c%2FZ2oY84fZw0BpZXbipvpGmT8G9i9a%2F5Z23aU%2Fe2J5A9sknFV8cUB9lizXFSqTkdmOuqlTIYyOEn%2FXB%2FjsMuebmp9d3vFsks95tlwX6w6TyvPMlLd9B2i0Zx8oTYoCkwVfgB7kNU6R%2B7ldWOn%2FxEt7%2B4kc8D%2FJZ1zHD0MozLpnrPNyWHx%2FOVSbXz5%2FN8Pz%2FtZ4xFfBB9kieWo5rnc3iLNV2GNDhAXqIpna9uVWtphPvBDxB3tF%2BmaMyifu7fhpdqX%2FT%2Bv81kuYt5hSYVygNpcvMHWoBEzI5ITuTDyuMGqq%2FMhoDxMztTL7b4IXFQ6sOj8%2FazfDTPyWh5kTqSq%2FqjcZk86KCjoJWB2vv5QpOLBMqwZG0mjvmL3PYNuxpGzwQGhTIazok6CoKq%2BiyGXsdEq7JTPHuHCGnjtcxbGdwBeii71GP7vlP%2BP6JU1DfOLXe0X5WHSHiB0lfnb0wWlAze46mMGbHhIORcCKiTEzIMXyJvC5TtyQc7FAjCcp4rQBjqkAVT38%2F2u0akHv3myB7egfKenkgiWsRyY%2FefakLB4FY1ZwS9RTCnRnt3pjk%2Bjec5XJBUyEwN0rMrtPzBrzr0rCgwMCiPt4zRKJqh3X%2BOR09Z%2FHiFOGZBRYGCiWY1OiSI4F7uHdxMmOTCpN6o61eq8OlW%2BiMs9nFc5DLHVIudgzXeRregIc7%2B%2BeYs8bsDeGjU3QXCv7G12g0eq9wejJW9n0pXzZoDI&X-Amz-Signature=188250f9c17dea866d7f6e72a63fd7b955b717cd64947fa5635a64668cb06757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQSB57DQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCBSgJaP%2FHMzqTpy5Ram8tSio%2FxwsKI27zmLCTG7pVcOwIgJGphzp%2B398I3G1VLhc%2F2w3ucUMZnbyZSjvL%2FSTLyLAYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCZIvLLavFHbjR9GvSrcA7vSdyd1XVaftMTKwLbLTzB6SFW%2FzPI%2BCIHMPwYRnPz2S5bWDGQ%2FscQDAPwqESa0FQA8Kimqbg6oQg2nnHLhlRbchg4bGqdxYpYfwwVrr1nTKU1ctkR0hfBqyAxUsgis9dqmo2Ft8MFQr8LAvWmFUPM49w587eyIjv3O8ReFm87NMs8pYbd4sh6I%2F27ufiPAJSIADZ28NDibbq%2F3j%2F2vLcZwbxE9m9qw5fz%2FTo%2BdlxQpq4LV657OhLrjYYgWJCb1301%2FJrYAwdqPCEybRW7eFKdgPX8EjmokAI4jTLCe24xTO6tSp9rJUs%2FoLz46ZB4EBRB0HG9ZEkqmIBrneKflw4QeVq79fGXJUgMavskH5B1w6F9nMg22yOfPJ8pnTZD62Z7y%2BQ3YRx3PucfRDdlfS9XQqggZxvuGcWzFK9KhbaHVhk3JJDoEgP3JjBjU6m9K8xVYK%2BMTt0FK0r2mjbw81qByD0bnXLOI7AY1IoMWycpqSDlyp0etE7nQ0K2HhRv%2BQdboh5hQxjXUhGcAPC3I%2FIuc%2BQAFnQRT3%2Ba%2FRJOT5HNSOvfz4ecdn9Li81U2abFi8j%2FhYSiCRRVx97c6Fo1%2Fl4Xc5ecAnmDVpaaDzN0vTEK%2FGlgg3eygLfSqtRVcMMOkitAGOqUBXEYxecXGTyC4XLJ2ycbZ3PLkJFeyQISksZYBIpfi2%2F9PSLLxdBj6qkDZlyt6Jo5WjqZniqQOwW39x6NzPALwpAWlN%2BRF%2BIV4rcnGsa%2BOglZ6qNLQrqppmOAt%2FLv6WXvXfPzk9Dkgam3czhLHjcfGY3kCTrNBUi%2Bc0wGwlGpjHFwylzYzFAgnTFtjzhHuG%2B1RAyCkwYFieIo7FpU1PxuXE9r6xWpY&X-Amz-Signature=7e504bbf1379e3aa63e0ddadcd6673f2601ea9db22eb2193faaab50b1c4d7a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GGCESEI%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD1t1V0dJYPK7SxT9AJ9PHjkjhsp2hR7uIctybETyTpEQIgCewlTvmNQL6S9hePH1jGe9uyUdrVgYxd46%2FZVukWMt0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCHlupIr4DWkgkLqECrcA2e2jaKyRb21UOCJ%2Fhs3SpWYfX0onxfRyF%2FANNWpKN6FgWmdhYODEWqQe2nM7C6VNxcb1JWpg7RrCgPaeWpHn5PA6bXgY2ZWqrGEeQ5i4%2F1w30U60VZFRT7rhxWIk6Wl%2BNdKAuSZDXq0yhWRqp1BRTWNlGGDs6eWBiCVxe65TKrZxzq7FZpGlvK%2Fh9Tm2NePM%2BB5pacs81QinZ9mfs5DHc6LjyxyDDdvkKcMJXrmWfafhVyWQ5MtsuUnwpGLjs7b%2FkIvx8%2B25szBrXMeDM5ewjGhGiIkZvAyaOC9qBcr5hDHcTXEAIkRp7kcATgowpOUV0OyBfnjj25%2B8mjiIxaJrk1qKr6vuN4tr4C8JveG0QAdiya%2Fh%2FVHlRNNOj%2Few5wwCpzjA1U%2BC0%2FvJoG1YEu50tyJ9RJB0uvcIY5Zq7FWduZ2GFhf7iFcP3ti8M3XCxWmzvhOcFPfExI%2FTLCnf9spysOR5dkPl2JWpt%2BfFlk7bCIxCv8Cu5k8MFwPqXQG3YofhJRNh4BiWMnjn4tgkIG7lJI6S5LGusKAZk%2FLEoJ3pDwBftB5iapNznfK6hJQ96GETMgEv7n%2BJfLR%2BB23PXTraAaEdfN7pwTMOK6ash9Bu5Vg3lkXnDhnEwP2lB2IMKukitAGOqUBPMh%2FiwtylwhV4vxoOl%2FExIPv8BRQ%2BlKCCn6W6X4RmIhsFU%2B23Cj0PgeCdhmIW2vA5r2ONfIh3cImWj2idGYumZWEFpiHMrCVzHXYNjjIh%2BsFNBqbeoYHJ3uZeDW%2BQdMXjTGvhjvy2vg%2BI%2BUUJEixZYSaKoAGKiZ3DXrZgwp2e%2FG%2FDRqqSYcDFBTyUxW5WHUJ%2Fw0Q8DsrOZmDvk9czfAmLHzNH5mN&X-Amz-Signature=cf57e18897828e7f2fd3f86b7bdb604a9f29b86f54e1f5aca7516e69690f1729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQSB57DQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCBSgJaP%2FHMzqTpy5Ram8tSio%2FxwsKI27zmLCTG7pVcOwIgJGphzp%2B398I3G1VLhc%2F2w3ucUMZnbyZSjvL%2FSTLyLAYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCZIvLLavFHbjR9GvSrcA7vSdyd1XVaftMTKwLbLTzB6SFW%2FzPI%2BCIHMPwYRnPz2S5bWDGQ%2FscQDAPwqESa0FQA8Kimqbg6oQg2nnHLhlRbchg4bGqdxYpYfwwVrr1nTKU1ctkR0hfBqyAxUsgis9dqmo2Ft8MFQr8LAvWmFUPM49w587eyIjv3O8ReFm87NMs8pYbd4sh6I%2F27ufiPAJSIADZ28NDibbq%2F3j%2F2vLcZwbxE9m9qw5fz%2FTo%2BdlxQpq4LV657OhLrjYYgWJCb1301%2FJrYAwdqPCEybRW7eFKdgPX8EjmokAI4jTLCe24xTO6tSp9rJUs%2FoLz46ZB4EBRB0HG9ZEkqmIBrneKflw4QeVq79fGXJUgMavskH5B1w6F9nMg22yOfPJ8pnTZD62Z7y%2BQ3YRx3PucfRDdlfS9XQqggZxvuGcWzFK9KhbaHVhk3JJDoEgP3JjBjU6m9K8xVYK%2BMTt0FK0r2mjbw81qByD0bnXLOI7AY1IoMWycpqSDlyp0etE7nQ0K2HhRv%2BQdboh5hQxjXUhGcAPC3I%2FIuc%2BQAFnQRT3%2Ba%2FRJOT5HNSOvfz4ecdn9Li81U2abFi8j%2FhYSiCRRVx97c6Fo1%2Fl4Xc5ecAnmDVpaaDzN0vTEK%2FGlgg3eygLfSqtRVcMMOkitAGOqUBXEYxecXGTyC4XLJ2ycbZ3PLkJFeyQISksZYBIpfi2%2F9PSLLxdBj6qkDZlyt6Jo5WjqZniqQOwW39x6NzPALwpAWlN%2BRF%2BIV4rcnGsa%2BOglZ6qNLQrqppmOAt%2FLv6WXvXfPzk9Dkgam3czhLHjcfGY3kCTrNBUi%2Bc0wGwlGpjHFwylzYzFAgnTFtjzhHuG%2B1RAyCkwYFieIo7FpU1PxuXE9r6xWpY&X-Amz-Signature=08305ec27435f5be02e1de496f3f76dd4ea61004de1b68eea4a84c60a56b9316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7MTMI6S%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCsgaEiQGZu1YwTcDTrJSKa90aV8zpfZqFqgy2ttXwzTgIgdzdc2BwtLZScVa4bEyOWHiPI5r2UYxCQdDqbFb09mQAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCKu9ZuiDyC%2FEeJ4PircA%2BlTceeIzZrRpip44gx8vYqPf2E5b2%2FQHsJ6ScSdyx4RJ%2Fz9smuk3vCVIfX3ya%2FAGuEOX42NBXwmQbeQaXRvZwr7mZ%2FDVP3fpJ%2FNe7QYgrkROcZdAjBpEiRWWtXB%2BxbCmSJbJkBoNpuS%2BSREjjY21ztXDYFxhnYPJerQYrYykihr5P1e5d4EQnm8oSGMEZ%2BFWd5G93%2F7ooL5fx%2BCe67b2cSedvmG1YaNNUNQWS9RB8wQh6koDK%2B2BXgnngWo6INSQzH9Z7lA9hgvigB8nlkD%2FGU0ChGWeICTlkPaccFMTE2qC2xTihW%2FGHuovm3%2FaKSuNuqr763jGJxFTLOkqHsTzcvtwagOXct%2FpGIKJccHFqXeziCCQvVQzWV12I4w1V2acZuD00ahoWGotOG0H6TlnRlN%2BdVamnODLLia8gaFXBznEy%2FSC7lebiM6bCpBVEKKkc32dIbHks%2FsCsgm0z2IeeulaRh1I4srg0hTNNpzsFVK%2FqeszTgq3WqTuSTohiz6TBPMPjxIm8wK6GLQpKJY588EpjKjn58nR3PZJ%2BciOqVN39nSy6yo4FQODLgxqVcM2WOi4CRTblGxo4LuLjxUnQ5mOlMcOGi%2BSR%2BAYIVQG2lsu8g6KMcbTtsWA8mfMOejitAGOqUB0KQnTId84rKj1I3zKksTWdBoXPNbFwBTEA9zaOGpc88jZieihAK%2B1CYUhgkvUWuIWL2rkEuO1zrwOIDJ9IZfJ6P3MBsmX5VsCoe%2BIa9zVs5vCbUOcIewh%2BbTt2ubyPQ0nPt5J45bMqK9Ahw0K2GgR6GP3c2uLa0oiZF4KQUqrDY6i1saPL6MJjwNXh4eux7QWQ0rm7UjcSgCltjkZm1SA1A9%2FTpb&X-Amz-Signature=efbababbcdb6b297bafd85f02321f5f8879762b7643ad0eda828f9b0cf8162ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQSB57DQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCBSgJaP%2FHMzqTpy5Ram8tSio%2FxwsKI27zmLCTG7pVcOwIgJGphzp%2B398I3G1VLhc%2F2w3ucUMZnbyZSjvL%2FSTLyLAYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCZIvLLavFHbjR9GvSrcA7vSdyd1XVaftMTKwLbLTzB6SFW%2FzPI%2BCIHMPwYRnPz2S5bWDGQ%2FscQDAPwqESa0FQA8Kimqbg6oQg2nnHLhlRbchg4bGqdxYpYfwwVrr1nTKU1ctkR0hfBqyAxUsgis9dqmo2Ft8MFQr8LAvWmFUPM49w587eyIjv3O8ReFm87NMs8pYbd4sh6I%2F27ufiPAJSIADZ28NDibbq%2F3j%2F2vLcZwbxE9m9qw5fz%2FTo%2BdlxQpq4LV657OhLrjYYgWJCb1301%2FJrYAwdqPCEybRW7eFKdgPX8EjmokAI4jTLCe24xTO6tSp9rJUs%2FoLz46ZB4EBRB0HG9ZEkqmIBrneKflw4QeVq79fGXJUgMavskH5B1w6F9nMg22yOfPJ8pnTZD62Z7y%2BQ3YRx3PucfRDdlfS9XQqggZxvuGcWzFK9KhbaHVhk3JJDoEgP3JjBjU6m9K8xVYK%2BMTt0FK0r2mjbw81qByD0bnXLOI7AY1IoMWycpqSDlyp0etE7nQ0K2HhRv%2BQdboh5hQxjXUhGcAPC3I%2FIuc%2BQAFnQRT3%2Ba%2FRJOT5HNSOvfz4ecdn9Li81U2abFi8j%2FhYSiCRRVx97c6Fo1%2Fl4Xc5ecAnmDVpaaDzN0vTEK%2FGlgg3eygLfSqtRVcMMOkitAGOqUBXEYxecXGTyC4XLJ2ycbZ3PLkJFeyQISksZYBIpfi2%2F9PSLLxdBj6qkDZlyt6Jo5WjqZniqQOwW39x6NzPALwpAWlN%2BRF%2BIV4rcnGsa%2BOglZ6qNLQrqppmOAt%2FLv6WXvXfPzk9Dkgam3czhLHjcfGY3kCTrNBUi%2Bc0wGwlGpjHFwylzYzFAgnTFtjzhHuG%2B1RAyCkwYFieIo7FpU1PxuXE9r6xWpY&X-Amz-Signature=cd70d4f9e3782476c0965a56d1f5586c2e789d727752c18b29736bea3566da97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEDKLDAN%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDZY5JqcxWZUXZ7ycwVgia5sov6%2FL3FlbVwk7H0frOmXAiBagvDE%2FeWjgTic%2FmL%2BC5NCbXPss%2BlZkE%2BUdfho8NNlxir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMakAkRR4pjfqzqXNwKtwDUmgAelMYTCH9rYPauiARPbOSwS4XeOOdrlTfXBybpzzCXV6hWCAfECVtD5lEKKRpT3lf30voutO6B3OMRXmbgTcr%2BGIvdIVgBzE8uRGQAcd%2FiYqqGsW7BNpf0n1m%2FXPUeGOj8K5%2F%2BPVtemRB5ralh60gdW%2Blpf06YozknGe118vN%2FbLS5VnCJAlLalc%2FPziJeD1A0CX8Knpk%2B1WVZI1unPLxWVdwT0d1Y5skgGq4VQr7SaCA%2BAP8%2BjpYrTgDR8XZFIT032zuTwuYjP122SkdjFWMQeO6o1HvPt7LsjBNPjfUAzcFzLGTbLnO1b%2BxwHhtzSbQOJqGhCl2QXfXEnDI9Jt5v2rEr3AKxPjWhtkEcoivQsGFkkpi0pTVewTJWycjeizkAiTo1kW0vH9eiAVERQwZ897TADv64tx5gjWVEN2%2F3XwSIsZqvcoztjhUXeGAsy61wHQL8pNLPHiyF%2BmPrWVj%2FKWzjbVMZanH64SrNveqgli%2FFw8pIRipG1YOIsh3EtonKZ6OV0IRXRSyxYQW6Wkaxokp6iodcoUZH7CNtljm4HwcNKeC5doNqDaJvleBZyx8hJWju3xqa3O0iMy8lhJmggCQQrRy39CQOe0Nu9kPDyO5paY%2B%2FOkWLEgw6aKK0AY6pgECl2%2BTvquGzgi4%2BViCVGf9UnmDuFm1nSeH8Eq%2F4cUW1pMulBiOkfL0erkFHujy4QcMWnGhEDtrdO%2B5Z4nhssJfQUNM17IEK5VuEMX08hwBfQ2y1Tn8EEwv%2FcJA1GiHN2tBMsCTfkEBZUKgEBZN%2B0B%2BbKyQRjfJfwfVYVxANJh18YqPgi3RLL0hf3lDrDb4v0R9KU69JZi9eY%2BFjlFjdNNGO6un83nW&X-Amz-Signature=95b93ac958688f6feacb79aa6ae41dd4b245fa7b740d21ee85bac8ac882471da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQSB57DQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCBSgJaP%2FHMzqTpy5Ram8tSio%2FxwsKI27zmLCTG7pVcOwIgJGphzp%2B398I3G1VLhc%2F2w3ucUMZnbyZSjvL%2FSTLyLAYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCZIvLLavFHbjR9GvSrcA7vSdyd1XVaftMTKwLbLTzB6SFW%2FzPI%2BCIHMPwYRnPz2S5bWDGQ%2FscQDAPwqESa0FQA8Kimqbg6oQg2nnHLhlRbchg4bGqdxYpYfwwVrr1nTKU1ctkR0hfBqyAxUsgis9dqmo2Ft8MFQr8LAvWmFUPM49w587eyIjv3O8ReFm87NMs8pYbd4sh6I%2F27ufiPAJSIADZ28NDibbq%2F3j%2F2vLcZwbxE9m9qw5fz%2FTo%2BdlxQpq4LV657OhLrjYYgWJCb1301%2FJrYAwdqPCEybRW7eFKdgPX8EjmokAI4jTLCe24xTO6tSp9rJUs%2FoLz46ZB4EBRB0HG9ZEkqmIBrneKflw4QeVq79fGXJUgMavskH5B1w6F9nMg22yOfPJ8pnTZD62Z7y%2BQ3YRx3PucfRDdlfS9XQqggZxvuGcWzFK9KhbaHVhk3JJDoEgP3JjBjU6m9K8xVYK%2BMTt0FK0r2mjbw81qByD0bnXLOI7AY1IoMWycpqSDlyp0etE7nQ0K2HhRv%2BQdboh5hQxjXUhGcAPC3I%2FIuc%2BQAFnQRT3%2Ba%2FRJOT5HNSOvfz4ecdn9Li81U2abFi8j%2FhYSiCRRVx97c6Fo1%2Fl4Xc5ecAnmDVpaaDzN0vTEK%2FGlgg3eygLfSqtRVcMMOkitAGOqUBXEYxecXGTyC4XLJ2ycbZ3PLkJFeyQISksZYBIpfi2%2F9PSLLxdBj6qkDZlyt6Jo5WjqZniqQOwW39x6NzPALwpAWlN%2BRF%2BIV4rcnGsa%2BOglZ6qNLQrqppmOAt%2FLv6WXvXfPzk9Dkgam3czhLHjcfGY3kCTrNBUi%2Bc0wGwlGpjHFwylzYzFAgnTFtjzhHuG%2B1RAyCkwYFieIo7FpU1PxuXE9r6xWpY&X-Amz-Signature=6c60cf0f150d83906d84af035495a38c6459e611494e7db1c8271192ee4b3406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIC2IBU%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCz29rmVqaDLed1Ts3qhWz7Mbnxag7U3LXVfB6Xd7nZHgIhALfQund3FC7NPsBAS11ZEcDzvfVsSjSmixfjC48H8K1UKv8DCCQQABoMNjM3NDIzMTgzODA1IgyRaeuKZQYQirN%2Fwa8q3APLC56CzBJfnb6KNtGa0y24kDBRRdugpd9pnt1MpK7nQ74yQJjXlumEbc4voCwOnTNXVQrVmFQbr1Ihb%2BIgxxCIkJOlGjQaUSDsDbp%2FzPprZTpQdnggNrBXACffg5hFCx99Bth12SLK56aEXY8urgfUop8gyBLjSRS54Q7nOLSfu%2BMZk%2BlvxVr9%2F0W%2BhW9auWR1uk0qbpIaGj%2FWH0%2Fhs5%2BMA3tSrXfvOAzzE3%2BGLkH6%2FxmhbLNF81yVnSv%2BWlgvtGAcZbJUCFqvCfVuYVa%2BdsN58AyrRUf0d6hzSBSltJ984DG3q9lkYqm5%2FICz67N6KY7iwhjjcWRwkWCf8ACCk5mJqNJQTQEfPo3%2FbWCFDGBn4EpEMrfXE2TbyKIcxW%2FqQm%2BSNzSKINWQ5yVKxEbaarK6e1lvyGLlw6CVV0k54DdzY01izLIqEO6d2TwZ9S87J778Hvqs4yNIePrz58dPg4kanorMe9OBev3ir7CT9lEySCrmvqVaw1eSIJP8xx1i3q67U22sEUTxYb7SYO3DSoRRV%2F33G8BJvBU7zM%2FXTMvebyu5OTcxDUFSDx2dK%2Bphlssp00LE5e1JcLtIpFt6tWRYl%2FmvRqZJfWg2vou9aHi4wLEBQWSrI4Ga2SrIjTDeo4rQBjqkAbz2dJGKDn3ZDQK7VWXVXhed6KOxb2lbm2govhkBglynADs4Ot2vaWGdN76e0M025%2BO7XQxOdk2N8jhwFzSU%2BIRx8iHHwAWKJ9BFBu%2FKTtZhPDTFO79pgZNXsq7agRdIqA8sDa4iR2uOjiXJB4HbztUvCoE0nrB6iPzDUBmoxpEvyYDONpdVbe77PEN0p0GfInSDjBOH3lCyQpWSxuFYhkPnr2Q%2F&X-Amz-Signature=30d53612604c0f659b580098acc31a5f0a6b17e16c1343bfd3215411b0415f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674KFQGMD%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIF%2Fgmwkqx9YqOs52PI2xn8nx4U9rqxj6dOISu%2Bs2YRecAiAjyGWq2fG3FWoSVd8BdaBItZYeXAn%2FAwwShNY5zqZxgyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSu4PvY9z4IvOwW%2FQKtwDRT91ZylFBLNC%2BW1T7LYr%2FlZRcPXojh4hF3EqktiX0EtZKa01piumyJgvpJ9wzBnfxXUI0HjGoqFDgw%2BevVFhyXb5qxHM76%2F0uYLFCd%2BGgxy5%2BUX%2BJvOKJN0tEgJv2ZLc4JlJoPPhDk%2BKTqG0pM1QxUSnZllnimD7dnEYHbfxKupF%2BM9sQGF9PqeAvReWT7sXkvsVXPjW2Gktpq04nssfhkJqAqh7G9iOUCK3LB6XtnbBSpSy2hZcFH3cE3uPtBqoUFJNR0XVMudH2BRcvbsqDlXUFwWB3mTSkgZCc00rnXhO%2BlMfZhek5tSguX7WORfdr2I5YrryoQSXGgUfGTycuORzfnG6HJgPc9kmyN4tfoVDibQZVZu7HJCyJ8ZCgKlz3Y8idMxmYdSE5I%2FgETbEkyG0tRRv2JbT%2B29PKdS5pSDGlFg01gprOjstZDoy1%2BXCp%2BoMdQXP0Mp2NPMmEf4OkJoyNOs1I3haIXC4l%2FOINx%2BA41GUiXGmr6MRUGpYAvAw6Ct61VwmvuZHa6bX0F4s8wXG2NhE634guTQDCcD%2FCvN58KojHroah8LLPWeP6j8mHVb0NJGfMNj1q%2Btbs4WFDU9%2FaB9p%2F3At08fef8NBks%2FGkdPlBU4TAmZTZwMw86SK0AY6pgEYMeThjYow%2F14Lah3XnYmjDqZIy8rT8YCAIff8TbR3%2FIn0ifA9BR7TXGfIRQDUY%2FjxyHbAVhxZq3M5rN9QrDLBn788Kqo92mHhOtZaCp9XvVz4wpIyyTPEGvUC4%2F782ZtKq%2BxRKnP3qKqgqW5LN00sntLCFwZUR8713SXBSoXbNb8H8hMmK5gmtNQEDkhoAnxw4IJU5NdLz9IARKLh4Bzf7I7hVduq&X-Amz-Signature=fa9dce2b0ceb5725a5ecca00fa37163aaa3fd395cc3dee8a8dd71f920ebf2a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIYTT6IQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD8uc8DNImyRRXj47d%2B12ekJ0YPfUaRI5pf%2BCy1pfDItwIgEpnNmnOgOdMbDGAwx63tRhXrRX0zTCUKTScV4o6Cop8q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDO%2BV9oD5IMyIyt8RqSrcA7wPzTlR1AaBnTVAkmyU604FpCJ%2B%2FtEnO6CWw63oTid5q45%2FfeakstXdBFAUmRO3hEHIQChfsfhRDPrsbP5nHKhqRnyoYEYH00wfS6Ldpz9II4%2BCAJej74xkLPDKXeuKE9n3My%2FFeW20ke5vuHVRHdunEllYmnIQ1pjpNAlo6tBBSNlPNgP7L8vdZZ76ifpUC5xlwsm%2Bmp5RaMCcL0B9xhab2SxiEvsUEcv4HzmuATQLs2rRiyiwGiaRQevQTzjJaK2PPDEVOXF1m5rUtVQR2R7bwu2%2Beji4B4bAn3XmhlFBYIqCzUAZMNbqtrFSOUDftkWfAfn9Qwg%2BoqcObn6eufL4W7GNWkXG1eVPelfJlA1ywIlQ204bTjGFHQdJPg5cUful5FeGa81odaqkAIA%2FCKRVSH1UWoTY0ApDVP5oRoVXvUj2H2AYxgsXJojZy%2BaQ3ZL4W0YQNuxi9BpyaD%2FMuea6NOq6623Mh4ZlK%2FPH90Ntrt5ApJ8hrrBkCEf0NMIShU6pCxTt1lQ4t44NZJvQ9NmRaggRf12YH57HRC%2BPpXnknKuZCWP6be%2FrVBvbJrctehRdzTvpNJQisOhXZ1EOC17xqGIrxs59a%2Fs06JmOHjTtV164JW%2BD%2F2r4ORHzMKGkitAGOqUBq77gYvJc02bqjiBy72iEoj9CtwBleZGDjIOvlrLmdujUIPH3unGlrrHI2SKZPwETt7bMZVLyfTZxVXECNLg5afxe6aReWDmThy46PIkeUhBmon0saKXtzTdlDa4Vj16o8wmx73uwSmVTmHU3jPiic8mnQ%2BLhzgb05iJWY3elHKwtD6DoyKaFfRN1xtM7bOitX5NQgrTZNUNlzvcS%2Fw9dwb9%2FkgXA&X-Amz-Signature=bad14614c5a21ca8172136bd0f0813ee94079bd8d2673cfd8bbb5eeb73449d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQSB57DQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCBSgJaP%2FHMzqTpy5Ram8tSio%2FxwsKI27zmLCTG7pVcOwIgJGphzp%2B398I3G1VLhc%2F2w3ucUMZnbyZSjvL%2FSTLyLAYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCZIvLLavFHbjR9GvSrcA7vSdyd1XVaftMTKwLbLTzB6SFW%2FzPI%2BCIHMPwYRnPz2S5bWDGQ%2FscQDAPwqESa0FQA8Kimqbg6oQg2nnHLhlRbchg4bGqdxYpYfwwVrr1nTKU1ctkR0hfBqyAxUsgis9dqmo2Ft8MFQr8LAvWmFUPM49w587eyIjv3O8ReFm87NMs8pYbd4sh6I%2F27ufiPAJSIADZ28NDibbq%2F3j%2F2vLcZwbxE9m9qw5fz%2FTo%2BdlxQpq4LV657OhLrjYYgWJCb1301%2FJrYAwdqPCEybRW7eFKdgPX8EjmokAI4jTLCe24xTO6tSp9rJUs%2FoLz46ZB4EBRB0HG9ZEkqmIBrneKflw4QeVq79fGXJUgMavskH5B1w6F9nMg22yOfPJ8pnTZD62Z7y%2BQ3YRx3PucfRDdlfS9XQqggZxvuGcWzFK9KhbaHVhk3JJDoEgP3JjBjU6m9K8xVYK%2BMTt0FK0r2mjbw81qByD0bnXLOI7AY1IoMWycpqSDlyp0etE7nQ0K2HhRv%2BQdboh5hQxjXUhGcAPC3I%2FIuc%2BQAFnQRT3%2Ba%2FRJOT5HNSOvfz4ecdn9Li81U2abFi8j%2FhYSiCRRVx97c6Fo1%2Fl4Xc5ecAnmDVpaaDzN0vTEK%2FGlgg3eygLfSqtRVcMMOkitAGOqUBXEYxecXGTyC4XLJ2ycbZ3PLkJFeyQISksZYBIpfi2%2F9PSLLxdBj6qkDZlyt6Jo5WjqZniqQOwW39x6NzPALwpAWlN%2BRF%2BIV4rcnGsa%2BOglZ6qNLQrqppmOAt%2FLv6WXvXfPzk9Dkgam3czhLHjcfGY3kCTrNBUi%2Bc0wGwlGpjHFwylzYzFAgnTFtjzhHuG%2B1RAyCkwYFieIo7FpU1PxuXE9r6xWpY&X-Amz-Signature=059ec6c479102527c640dcf053ab36a748b226735b1f6c5312875998baf9f0c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQSB57DQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCBSgJaP%2FHMzqTpy5Ram8tSio%2FxwsKI27zmLCTG7pVcOwIgJGphzp%2B398I3G1VLhc%2F2w3ucUMZnbyZSjvL%2FSTLyLAYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCZIvLLavFHbjR9GvSrcA7vSdyd1XVaftMTKwLbLTzB6SFW%2FzPI%2BCIHMPwYRnPz2S5bWDGQ%2FscQDAPwqESa0FQA8Kimqbg6oQg2nnHLhlRbchg4bGqdxYpYfwwVrr1nTKU1ctkR0hfBqyAxUsgis9dqmo2Ft8MFQr8LAvWmFUPM49w587eyIjv3O8ReFm87NMs8pYbd4sh6I%2F27ufiPAJSIADZ28NDibbq%2F3j%2F2vLcZwbxE9m9qw5fz%2FTo%2BdlxQpq4LV657OhLrjYYgWJCb1301%2FJrYAwdqPCEybRW7eFKdgPX8EjmokAI4jTLCe24xTO6tSp9rJUs%2FoLz46ZB4EBRB0HG9ZEkqmIBrneKflw4QeVq79fGXJUgMavskH5B1w6F9nMg22yOfPJ8pnTZD62Z7y%2BQ3YRx3PucfRDdlfS9XQqggZxvuGcWzFK9KhbaHVhk3JJDoEgP3JjBjU6m9K8xVYK%2BMTt0FK0r2mjbw81qByD0bnXLOI7AY1IoMWycpqSDlyp0etE7nQ0K2HhRv%2BQdboh5hQxjXUhGcAPC3I%2FIuc%2BQAFnQRT3%2Ba%2FRJOT5HNSOvfz4ecdn9Li81U2abFi8j%2FhYSiCRRVx97c6Fo1%2Fl4Xc5ecAnmDVpaaDzN0vTEK%2FGlgg3eygLfSqtRVcMMOkitAGOqUBXEYxecXGTyC4XLJ2ycbZ3PLkJFeyQISksZYBIpfi2%2F9PSLLxdBj6qkDZlyt6Jo5WjqZniqQOwW39x6NzPALwpAWlN%2BRF%2BIV4rcnGsa%2BOglZ6qNLQrqppmOAt%2FLv6WXvXfPzk9Dkgam3czhLHjcfGY3kCTrNBUi%2Bc0wGwlGpjHFwylzYzFAgnTFtjzhHuG%2B1RAyCkwYFieIo7FpU1PxuXE9r6xWpY&X-Amz-Signature=2a4d134f10feda3e29ef48207e9f1eb30210015b10b8b69adedabd49668d1442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLQ4BX6%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAhSzsVhtZlq2euRCrXvLjSnyqeq%2BKOCoLwUa7Wcwa3tAiEAitxtdp5PsHisEOdoNaAmSq5l42JOIOTo1eGtBLeAYNwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFMGCQOa6dyDp%2FzDAircA629s%2Fm6PsQd7nYlgQy1PBby694L3KiD%2BCxUbs9v3yoA3Cxcmi8oXrzCqebwoc0hQfbYWmlL%2FjByHyiM2u4e08pJRWNWTKbU723%2FYcxvpJcL%2BK5f7JqhqYQryoR6oZPlQEbl1M3RYbacACJH7yjtllhawN%2FKj5RH2TEk2i2HOmlZHY2kmAklLXxyuWxQwVOztu5kpt1PZxSNKGWVvQLZrbwbds7PP77OF%2F3lrb12UdP7f8whKxyq5O4ZrWQC1k4AKGacwyuG8fvkuLs20pdIDzTE3VtQCdACuPCw9ShexqOhVE3Ts8aLu2b0yezoBmJKdZQr3ev5p%2BtA%2F3e%2B%2B4sO9LppWyYB4oV1Tb0vVcV%2FSOqBagvrClkaqhe8IGFDQNqAvSl87pXdvunO1HZy8iyWNjydly2Yn6OkA40PdeNPZa9E8s%2BhoCg90%2FqLnXSPZw09aJW%2BmybSPIsVkD4nA9lv7%2FdwnUBvuBDgDMblEY0dvPc20dONgKtGXaMsoAyasUps3kAItTN9HMiqTEpkOepvfcPLPb8ngm2qlOhLocAVuNR6qhihA29Fx6HMuFzFWUYHKNy9LHYLHmGWMG3jT1g30scCLnSBpRo94bVRIvXMaWvNsmpfhIoopWdNyGVIMIWlitAGOqUBF3MbSY6qM%2BvylZ1RW4g0laTv3BWOYtS%2BCdKYvyBnT89FidWFeSjzgb7z3%2BWTxYR6VYirvYfQ12ZfnVGXWmOnfA6OCLsmqowUDZJRMttPAnLheSuu0EHncDs8On3HJo2DDKTCj7VJ2fVHIjWJ5BlP35D52qy24PdFAbdwOHzSoVlWuGBU%2FjT2MZpO4GorMVaYyRKt1HP%2FTrun7rO3oOZfhWc6i5aM&X-Amz-Signature=53ff633d5d8c732ce7b73395d8a3674383b0a464353e95dadea1682fc899bf01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLQ4BX6%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAhSzsVhtZlq2euRCrXvLjSnyqeq%2BKOCoLwUa7Wcwa3tAiEAitxtdp5PsHisEOdoNaAmSq5l42JOIOTo1eGtBLeAYNwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFMGCQOa6dyDp%2FzDAircA629s%2Fm6PsQd7nYlgQy1PBby694L3KiD%2BCxUbs9v3yoA3Cxcmi8oXrzCqebwoc0hQfbYWmlL%2FjByHyiM2u4e08pJRWNWTKbU723%2FYcxvpJcL%2BK5f7JqhqYQryoR6oZPlQEbl1M3RYbacACJH7yjtllhawN%2FKj5RH2TEk2i2HOmlZHY2kmAklLXxyuWxQwVOztu5kpt1PZxSNKGWVvQLZrbwbds7PP77OF%2F3lrb12UdP7f8whKxyq5O4ZrWQC1k4AKGacwyuG8fvkuLs20pdIDzTE3VtQCdACuPCw9ShexqOhVE3Ts8aLu2b0yezoBmJKdZQr3ev5p%2BtA%2F3e%2B%2B4sO9LppWyYB4oV1Tb0vVcV%2FSOqBagvrClkaqhe8IGFDQNqAvSl87pXdvunO1HZy8iyWNjydly2Yn6OkA40PdeNPZa9E8s%2BhoCg90%2FqLnXSPZw09aJW%2BmybSPIsVkD4nA9lv7%2FdwnUBvuBDgDMblEY0dvPc20dONgKtGXaMsoAyasUps3kAItTN9HMiqTEpkOepvfcPLPb8ngm2qlOhLocAVuNR6qhihA29Fx6HMuFzFWUYHKNy9LHYLHmGWMG3jT1g30scCLnSBpRo94bVRIvXMaWvNsmpfhIoopWdNyGVIMIWlitAGOqUBF3MbSY6qM%2BvylZ1RW4g0laTv3BWOYtS%2BCdKYvyBnT89FidWFeSjzgb7z3%2BWTxYR6VYirvYfQ12ZfnVGXWmOnfA6OCLsmqowUDZJRMttPAnLheSuu0EHncDs8On3HJo2DDKTCj7VJ2fVHIjWJ5BlP35D52qy24PdFAbdwOHzSoVlWuGBU%2FjT2MZpO4GorMVaYyRKt1HP%2FTrun7rO3oOZfhWc6i5aM&X-Amz-Signature=4465f8a47d4bd3c23debac9361746da81579dabcb1245655469731c246082ff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLQ4BX6%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAhSzsVhtZlq2euRCrXvLjSnyqeq%2BKOCoLwUa7Wcwa3tAiEAitxtdp5PsHisEOdoNaAmSq5l42JOIOTo1eGtBLeAYNwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFMGCQOa6dyDp%2FzDAircA629s%2Fm6PsQd7nYlgQy1PBby694L3KiD%2BCxUbs9v3yoA3Cxcmi8oXrzCqebwoc0hQfbYWmlL%2FjByHyiM2u4e08pJRWNWTKbU723%2FYcxvpJcL%2BK5f7JqhqYQryoR6oZPlQEbl1M3RYbacACJH7yjtllhawN%2FKj5RH2TEk2i2HOmlZHY2kmAklLXxyuWxQwVOztu5kpt1PZxSNKGWVvQLZrbwbds7PP77OF%2F3lrb12UdP7f8whKxyq5O4ZrWQC1k4AKGacwyuG8fvkuLs20pdIDzTE3VtQCdACuPCw9ShexqOhVE3Ts8aLu2b0yezoBmJKdZQr3ev5p%2BtA%2F3e%2B%2B4sO9LppWyYB4oV1Tb0vVcV%2FSOqBagvrClkaqhe8IGFDQNqAvSl87pXdvunO1HZy8iyWNjydly2Yn6OkA40PdeNPZa9E8s%2BhoCg90%2FqLnXSPZw09aJW%2BmybSPIsVkD4nA9lv7%2FdwnUBvuBDgDMblEY0dvPc20dONgKtGXaMsoAyasUps3kAItTN9HMiqTEpkOepvfcPLPb8ngm2qlOhLocAVuNR6qhihA29Fx6HMuFzFWUYHKNy9LHYLHmGWMG3jT1g30scCLnSBpRo94bVRIvXMaWvNsmpfhIoopWdNyGVIMIWlitAGOqUBF3MbSY6qM%2BvylZ1RW4g0laTv3BWOYtS%2BCdKYvyBnT89FidWFeSjzgb7z3%2BWTxYR6VYirvYfQ12ZfnVGXWmOnfA6OCLsmqowUDZJRMttPAnLheSuu0EHncDs8On3HJo2DDKTCj7VJ2fVHIjWJ5BlP35D52qy24PdFAbdwOHzSoVlWuGBU%2FjT2MZpO4GorMVaYyRKt1HP%2FTrun7rO3oOZfhWc6i5aM&X-Amz-Signature=f02ccedfb5577da28d171911a0b23db04506d16909d5b87be88ba65cabc5b9b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLQ4BX6%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAhSzsVhtZlq2euRCrXvLjSnyqeq%2BKOCoLwUa7Wcwa3tAiEAitxtdp5PsHisEOdoNaAmSq5l42JOIOTo1eGtBLeAYNwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFMGCQOa6dyDp%2FzDAircA629s%2Fm6PsQd7nYlgQy1PBby694L3KiD%2BCxUbs9v3yoA3Cxcmi8oXrzCqebwoc0hQfbYWmlL%2FjByHyiM2u4e08pJRWNWTKbU723%2FYcxvpJcL%2BK5f7JqhqYQryoR6oZPlQEbl1M3RYbacACJH7yjtllhawN%2FKj5RH2TEk2i2HOmlZHY2kmAklLXxyuWxQwVOztu5kpt1PZxSNKGWVvQLZrbwbds7PP77OF%2F3lrb12UdP7f8whKxyq5O4ZrWQC1k4AKGacwyuG8fvkuLs20pdIDzTE3VtQCdACuPCw9ShexqOhVE3Ts8aLu2b0yezoBmJKdZQr3ev5p%2BtA%2F3e%2B%2B4sO9LppWyYB4oV1Tb0vVcV%2FSOqBagvrClkaqhe8IGFDQNqAvSl87pXdvunO1HZy8iyWNjydly2Yn6OkA40PdeNPZa9E8s%2BhoCg90%2FqLnXSPZw09aJW%2BmybSPIsVkD4nA9lv7%2FdwnUBvuBDgDMblEY0dvPc20dONgKtGXaMsoAyasUps3kAItTN9HMiqTEpkOepvfcPLPb8ngm2qlOhLocAVuNR6qhihA29Fx6HMuFzFWUYHKNy9LHYLHmGWMG3jT1g30scCLnSBpRo94bVRIvXMaWvNsmpfhIoopWdNyGVIMIWlitAGOqUBF3MbSY6qM%2BvylZ1RW4g0laTv3BWOYtS%2BCdKYvyBnT89FidWFeSjzgb7z3%2BWTxYR6VYirvYfQ12ZfnVGXWmOnfA6OCLsmqowUDZJRMttPAnLheSuu0EHncDs8On3HJo2DDKTCj7VJ2fVHIjWJ5BlP35D52qy24PdFAbdwOHzSoVlWuGBU%2FjT2MZpO4GorMVaYyRKt1HP%2FTrun7rO3oOZfhWc6i5aM&X-Amz-Signature=ad43f385c80d8eaf60336e9b140ca9bef84cb25520316e24ecb168a758b467d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCLDIKY%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDLUfKS6NU9%2BN4z8v3RUIGkYTE53y9s2%2BGiNwbnBRU%2BAAiBUjBioDLRujJzYIVpJZcqyGgGMAQwIZlcf8YsEweV8gCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMT9qDS5su3IPWmBqOKtwD56bP7vjsHBMhJ%2FP59O2yBo2qo%2F7he%2FsqOZ1%2BUHokxmK%2FmBYz%2BZgPmBf5qSmFQMR3jrpTb82ba8T5LlEaZV%2FjydemOx9BdvFGdTinrWuYBIjtSKtEDDALkYu%2Ba96%2FtIxc0xAC8KhQE2h5%2Br39t%2FY9LPnKK%2FjGDcAin14vlGyHeopdoaIGYN%2Ffqb%2FefqBn6qOBm6PPmBFFBkuZYwFu9o2dryVOGiTiUswax8PxOnvLlM5289Whd1jlVisg1fQpA3mCPMRVnDid9RvjyXpZ1WELxDDErSQyIbqw9h56KkRVpILAVO820OdcHf1yq8A4J3OTvCngbjq62iSZPTEJY0dSyHy4cObeLsxB4sOFG1ysTFQM0pq%2FdZUNYX7uwThXbpHuDQgI4vWLsadhrodiUoprElBMYH%2BfbSYHTYnsGsuyADyEyf0UzuOG3%2Bikj9U7LBBvQKcHXlda7kREjszknHfT4xWIu9xUA9krVpvYG1nZkn418%2BqnlF8Zh4yt7FS3KAvZLIAUYhkd2ru5V2x8iKoEOhtNbIsI3pw%2FUq%2BfmucqJPwFjWDzYVuHdh1PF%2BLpgYUl7LTB%2FI2zYihiCX1wG5ZcnemeZ6aKVH%2BdLAoknmyeKGI2SgyFN7T8FHxC6eww3JyK0AY6pgER%2Bvx9%2BrlzCafToZ%2BIKs5GhlkCW6oFlcyLgrWBytQZtymaf7K%2BmcU8jYJiAB0qheDrBhs6AKjbyNK118QLQ2mml6Bh5J%2BazjTPUjLLckVhQRFHWhSvei3YTgCKpLbq%2BuilLzfNWK%2Fzm2D5AEsq3S4jm8VBsIoTTPydajqjgTqqfIXhprJFhDPV7Wm7%2BagbUhtOhKL3czjVxzit8XuHNacTydV41980&X-Amz-Signature=1a4f6fc5a30aa22489a0327845035187b1bdef4f2255e6cb44917ecb2821dd34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLQ4BX6%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAhSzsVhtZlq2euRCrXvLjSnyqeq%2BKOCoLwUa7Wcwa3tAiEAitxtdp5PsHisEOdoNaAmSq5l42JOIOTo1eGtBLeAYNwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFMGCQOa6dyDp%2FzDAircA629s%2Fm6PsQd7nYlgQy1PBby694L3KiD%2BCxUbs9v3yoA3Cxcmi8oXrzCqebwoc0hQfbYWmlL%2FjByHyiM2u4e08pJRWNWTKbU723%2FYcxvpJcL%2BK5f7JqhqYQryoR6oZPlQEbl1M3RYbacACJH7yjtllhawN%2FKj5RH2TEk2i2HOmlZHY2kmAklLXxyuWxQwVOztu5kpt1PZxSNKGWVvQLZrbwbds7PP77OF%2F3lrb12UdP7f8whKxyq5O4ZrWQC1k4AKGacwyuG8fvkuLs20pdIDzTE3VtQCdACuPCw9ShexqOhVE3Ts8aLu2b0yezoBmJKdZQr3ev5p%2BtA%2F3e%2B%2B4sO9LppWyYB4oV1Tb0vVcV%2FSOqBagvrClkaqhe8IGFDQNqAvSl87pXdvunO1HZy8iyWNjydly2Yn6OkA40PdeNPZa9E8s%2BhoCg90%2FqLnXSPZw09aJW%2BmybSPIsVkD4nA9lv7%2FdwnUBvuBDgDMblEY0dvPc20dONgKtGXaMsoAyasUps3kAItTN9HMiqTEpkOepvfcPLPb8ngm2qlOhLocAVuNR6qhihA29Fx6HMuFzFWUYHKNy9LHYLHmGWMG3jT1g30scCLnSBpRo94bVRIvXMaWvNsmpfhIoopWdNyGVIMIWlitAGOqUBF3MbSY6qM%2BvylZ1RW4g0laTv3BWOYtS%2BCdKYvyBnT89FidWFeSjzgb7z3%2BWTxYR6VYirvYfQ12ZfnVGXWmOnfA6OCLsmqowUDZJRMttPAnLheSuu0EHncDs8On3HJo2DDKTCj7VJ2fVHIjWJ5BlP35D52qy24PdFAbdwOHzSoVlWuGBU%2FjT2MZpO4GorMVaYyRKt1HP%2FTrun7rO3oOZfhWc6i5aM&X-Amz-Signature=9694f3b45243725b481dc33ba580aa247186471752230ae3d5886cf6f638b222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLQ4BX6%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAhSzsVhtZlq2euRCrXvLjSnyqeq%2BKOCoLwUa7Wcwa3tAiEAitxtdp5PsHisEOdoNaAmSq5l42JOIOTo1eGtBLeAYNwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFMGCQOa6dyDp%2FzDAircA629s%2Fm6PsQd7nYlgQy1PBby694L3KiD%2BCxUbs9v3yoA3Cxcmi8oXrzCqebwoc0hQfbYWmlL%2FjByHyiM2u4e08pJRWNWTKbU723%2FYcxvpJcL%2BK5f7JqhqYQryoR6oZPlQEbl1M3RYbacACJH7yjtllhawN%2FKj5RH2TEk2i2HOmlZHY2kmAklLXxyuWxQwVOztu5kpt1PZxSNKGWVvQLZrbwbds7PP77OF%2F3lrb12UdP7f8whKxyq5O4ZrWQC1k4AKGacwyuG8fvkuLs20pdIDzTE3VtQCdACuPCw9ShexqOhVE3Ts8aLu2b0yezoBmJKdZQr3ev5p%2BtA%2F3e%2B%2B4sO9LppWyYB4oV1Tb0vVcV%2FSOqBagvrClkaqhe8IGFDQNqAvSl87pXdvunO1HZy8iyWNjydly2Yn6OkA40PdeNPZa9E8s%2BhoCg90%2FqLnXSPZw09aJW%2BmybSPIsVkD4nA9lv7%2FdwnUBvuBDgDMblEY0dvPc20dONgKtGXaMsoAyasUps3kAItTN9HMiqTEpkOepvfcPLPb8ngm2qlOhLocAVuNR6qhihA29Fx6HMuFzFWUYHKNy9LHYLHmGWMG3jT1g30scCLnSBpRo94bVRIvXMaWvNsmpfhIoopWdNyGVIMIWlitAGOqUBF3MbSY6qM%2BvylZ1RW4g0laTv3BWOYtS%2BCdKYvyBnT89FidWFeSjzgb7z3%2BWTxYR6VYirvYfQ12ZfnVGXWmOnfA6OCLsmqowUDZJRMttPAnLheSuu0EHncDs8On3HJo2DDKTCj7VJ2fVHIjWJ5BlP35D52qy24PdFAbdwOHzSoVlWuGBU%2FjT2MZpO4GorMVaYyRKt1HP%2FTrun7rO3oOZfhWc6i5aM&X-Amz-Signature=45f3055e27c5987a423ba4bff1b931cbf1d0b942ee12aaed038170ccb186bb8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLQ4BX6%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAhSzsVhtZlq2euRCrXvLjSnyqeq%2BKOCoLwUa7Wcwa3tAiEAitxtdp5PsHisEOdoNaAmSq5l42JOIOTo1eGtBLeAYNwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFMGCQOa6dyDp%2FzDAircA629s%2Fm6PsQd7nYlgQy1PBby694L3KiD%2BCxUbs9v3yoA3Cxcmi8oXrzCqebwoc0hQfbYWmlL%2FjByHyiM2u4e08pJRWNWTKbU723%2FYcxvpJcL%2BK5f7JqhqYQryoR6oZPlQEbl1M3RYbacACJH7yjtllhawN%2FKj5RH2TEk2i2HOmlZHY2kmAklLXxyuWxQwVOztu5kpt1PZxSNKGWVvQLZrbwbds7PP77OF%2F3lrb12UdP7f8whKxyq5O4ZrWQC1k4AKGacwyuG8fvkuLs20pdIDzTE3VtQCdACuPCw9ShexqOhVE3Ts8aLu2b0yezoBmJKdZQr3ev5p%2BtA%2F3e%2B%2B4sO9LppWyYB4oV1Tb0vVcV%2FSOqBagvrClkaqhe8IGFDQNqAvSl87pXdvunO1HZy8iyWNjydly2Yn6OkA40PdeNPZa9E8s%2BhoCg90%2FqLnXSPZw09aJW%2BmybSPIsVkD4nA9lv7%2FdwnUBvuBDgDMblEY0dvPc20dONgKtGXaMsoAyasUps3kAItTN9HMiqTEpkOepvfcPLPb8ngm2qlOhLocAVuNR6qhihA29Fx6HMuFzFWUYHKNy9LHYLHmGWMG3jT1g30scCLnSBpRo94bVRIvXMaWvNsmpfhIoopWdNyGVIMIWlitAGOqUBF3MbSY6qM%2BvylZ1RW4g0laTv3BWOYtS%2BCdKYvyBnT89FidWFeSjzgb7z3%2BWTxYR6VYirvYfQ12ZfnVGXWmOnfA6OCLsmqowUDZJRMttPAnLheSuu0EHncDs8On3HJo2DDKTCj7VJ2fVHIjWJ5BlP35D52qy24PdFAbdwOHzSoVlWuGBU%2FjT2MZpO4GorMVaYyRKt1HP%2FTrun7rO3oOZfhWc6i5aM&X-Amz-Signature=f02ccedfb5577da28d171911a0b23db04506d16909d5b87be88ba65cabc5b9b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLQ4BX6%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAhSzsVhtZlq2euRCrXvLjSnyqeq%2BKOCoLwUa7Wcwa3tAiEAitxtdp5PsHisEOdoNaAmSq5l42JOIOTo1eGtBLeAYNwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFMGCQOa6dyDp%2FzDAircA629s%2Fm6PsQd7nYlgQy1PBby694L3KiD%2BCxUbs9v3yoA3Cxcmi8oXrzCqebwoc0hQfbYWmlL%2FjByHyiM2u4e08pJRWNWTKbU723%2FYcxvpJcL%2BK5f7JqhqYQryoR6oZPlQEbl1M3RYbacACJH7yjtllhawN%2FKj5RH2TEk2i2HOmlZHY2kmAklLXxyuWxQwVOztu5kpt1PZxSNKGWVvQLZrbwbds7PP77OF%2F3lrb12UdP7f8whKxyq5O4ZrWQC1k4AKGacwyuG8fvkuLs20pdIDzTE3VtQCdACuPCw9ShexqOhVE3Ts8aLu2b0yezoBmJKdZQr3ev5p%2BtA%2F3e%2B%2B4sO9LppWyYB4oV1Tb0vVcV%2FSOqBagvrClkaqhe8IGFDQNqAvSl87pXdvunO1HZy8iyWNjydly2Yn6OkA40PdeNPZa9E8s%2BhoCg90%2FqLnXSPZw09aJW%2BmybSPIsVkD4nA9lv7%2FdwnUBvuBDgDMblEY0dvPc20dONgKtGXaMsoAyasUps3kAItTN9HMiqTEpkOepvfcPLPb8ngm2qlOhLocAVuNR6qhihA29Fx6HMuFzFWUYHKNy9LHYLHmGWMG3jT1g30scCLnSBpRo94bVRIvXMaWvNsmpfhIoopWdNyGVIMIWlitAGOqUBF3MbSY6qM%2BvylZ1RW4g0laTv3BWOYtS%2BCdKYvyBnT89FidWFeSjzgb7z3%2BWTxYR6VYirvYfQ12ZfnVGXWmOnfA6OCLsmqowUDZJRMttPAnLheSuu0EHncDs8On3HJo2DDKTCj7VJ2fVHIjWJ5BlP35D52qy24PdFAbdwOHzSoVlWuGBU%2FjT2MZpO4GorMVaYyRKt1HP%2FTrun7rO3oOZfhWc6i5aM&X-Amz-Signature=f124885b025170e0305c0fd12b59e267b2416c94770337508ea620aa46fae7b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLQ4BX6%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAhSzsVhtZlq2euRCrXvLjSnyqeq%2BKOCoLwUa7Wcwa3tAiEAitxtdp5PsHisEOdoNaAmSq5l42JOIOTo1eGtBLeAYNwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFMGCQOa6dyDp%2FzDAircA629s%2Fm6PsQd7nYlgQy1PBby694L3KiD%2BCxUbs9v3yoA3Cxcmi8oXrzCqebwoc0hQfbYWmlL%2FjByHyiM2u4e08pJRWNWTKbU723%2FYcxvpJcL%2BK5f7JqhqYQryoR6oZPlQEbl1M3RYbacACJH7yjtllhawN%2FKj5RH2TEk2i2HOmlZHY2kmAklLXxyuWxQwVOztu5kpt1PZxSNKGWVvQLZrbwbds7PP77OF%2F3lrb12UdP7f8whKxyq5O4ZrWQC1k4AKGacwyuG8fvkuLs20pdIDzTE3VtQCdACuPCw9ShexqOhVE3Ts8aLu2b0yezoBmJKdZQr3ev5p%2BtA%2F3e%2B%2B4sO9LppWyYB4oV1Tb0vVcV%2FSOqBagvrClkaqhe8IGFDQNqAvSl87pXdvunO1HZy8iyWNjydly2Yn6OkA40PdeNPZa9E8s%2BhoCg90%2FqLnXSPZw09aJW%2BmybSPIsVkD4nA9lv7%2FdwnUBvuBDgDMblEY0dvPc20dONgKtGXaMsoAyasUps3kAItTN9HMiqTEpkOepvfcPLPb8ngm2qlOhLocAVuNR6qhihA29Fx6HMuFzFWUYHKNy9LHYLHmGWMG3jT1g30scCLnSBpRo94bVRIvXMaWvNsmpfhIoopWdNyGVIMIWlitAGOqUBF3MbSY6qM%2BvylZ1RW4g0laTv3BWOYtS%2BCdKYvyBnT89FidWFeSjzgb7z3%2BWTxYR6VYirvYfQ12ZfnVGXWmOnfA6OCLsmqowUDZJRMttPAnLheSuu0EHncDs8On3HJo2DDKTCj7VJ2fVHIjWJ5BlP35D52qy24PdFAbdwOHzSoVlWuGBU%2FjT2MZpO4GorMVaYyRKt1HP%2FTrun7rO3oOZfhWc6i5aM&X-Amz-Signature=b77ed867ba598ea4d1d57fe379c9b3767d5e83225499c0a62b14883d996e868b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLQ4BX6%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAhSzsVhtZlq2euRCrXvLjSnyqeq%2BKOCoLwUa7Wcwa3tAiEAitxtdp5PsHisEOdoNaAmSq5l42JOIOTo1eGtBLeAYNwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFMGCQOa6dyDp%2FzDAircA629s%2Fm6PsQd7nYlgQy1PBby694L3KiD%2BCxUbs9v3yoA3Cxcmi8oXrzCqebwoc0hQfbYWmlL%2FjByHyiM2u4e08pJRWNWTKbU723%2FYcxvpJcL%2BK5f7JqhqYQryoR6oZPlQEbl1M3RYbacACJH7yjtllhawN%2FKj5RH2TEk2i2HOmlZHY2kmAklLXxyuWxQwVOztu5kpt1PZxSNKGWVvQLZrbwbds7PP77OF%2F3lrb12UdP7f8whKxyq5O4ZrWQC1k4AKGacwyuG8fvkuLs20pdIDzTE3VtQCdACuPCw9ShexqOhVE3Ts8aLu2b0yezoBmJKdZQr3ev5p%2BtA%2F3e%2B%2B4sO9LppWyYB4oV1Tb0vVcV%2FSOqBagvrClkaqhe8IGFDQNqAvSl87pXdvunO1HZy8iyWNjydly2Yn6OkA40PdeNPZa9E8s%2BhoCg90%2FqLnXSPZw09aJW%2BmybSPIsVkD4nA9lv7%2FdwnUBvuBDgDMblEY0dvPc20dONgKtGXaMsoAyasUps3kAItTN9HMiqTEpkOepvfcPLPb8ngm2qlOhLocAVuNR6qhihA29Fx6HMuFzFWUYHKNy9LHYLHmGWMG3jT1g30scCLnSBpRo94bVRIvXMaWvNsmpfhIoopWdNyGVIMIWlitAGOqUBF3MbSY6qM%2BvylZ1RW4g0laTv3BWOYtS%2BCdKYvyBnT89FidWFeSjzgb7z3%2BWTxYR6VYirvYfQ12ZfnVGXWmOnfA6OCLsmqowUDZJRMttPAnLheSuu0EHncDs8On3HJo2DDKTCj7VJ2fVHIjWJ5BlP35D52qy24PdFAbdwOHzSoVlWuGBU%2FjT2MZpO4GorMVaYyRKt1HP%2FTrun7rO3oOZfhWc6i5aM&X-Amz-Signature=75afba5512508f1ee550d2f400e97a3a8a91100b9708f3228c2bd2c9f56ef7ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


