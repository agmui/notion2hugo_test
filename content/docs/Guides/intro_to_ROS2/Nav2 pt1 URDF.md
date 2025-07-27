---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFB2VQ5E%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCQf60WeyUcoYg70iXqmX7alrENB6RLzBJRR95W0KIiVAIhAOLRNGMDoEHFMaGzZg%2FsT%2FqNKjlx4p7A6p9WWJBxJMGPKv8DCHIQABoMNjM3NDIzMTgzODA1Igx1dIQP0DR%2BX%2Fqxj5kq3AOABRo146aQR%2F70xNVIGC1fy5xOezTqHIgyl7WHCjlXJqjHHLkW1oE1%2Bo9Bv8oKX2n5w2ORyriNq8wMSQDzTAWsht50JJBh35pQPNJDSDR7HR9BlB2S80ZOuMcMjlWe86x3uP%2FGmbpij%2BLYHAJqfeLjW4z6PjNKXBSdUAbsCAejdZMvVGasAAOONUTlnXsPKZZp7EFnNvfengCl7F1JgcxgMP2%2Fe%2FeAP%2BTFesHQ%2FTxgUvBMVaTS%2FXFc%2FoKTajPtV1%2FY0PWNizPAONSRqKIQaTCZcU8A5aOMDGrTapq%2BOthOhAL3VcyS003N1Ef6kGJu5u0hTTjtDHOyzqRqqabbqaXGw3j6%2Bh%2FFmHUykX89HBGeNFJR3oyfN3Tr0vjR2Yg1VICliWMGlOHn%2FFwSFAjAQNzJ%2FM677Nz8YgItbT3jewyVmy0tbNoAffttSnnEvqHUAsLfo41WJc5p8G35QYwcS10gJEINPDfzKNm835sAefaKlA0FOVZnjuHsV4TKr%2BuLpYKYry8vtnF6UZ0WQbryIe0wf69ACPbI7Cs6%2FLdTGb9MIXukawe01kkLkiR1RiRZLcKjwfiQS5zdl%2FS8eIJKGlPElN%2FVQ9oE7w1jBdr7BTYrUtMu3sTz%2FI%2FleITcAzCP4JfEBjqkAWLe3VSofJ8a6hJGppYuj2hjtuq7jrtEuGIr%2FQ8KWHDHBu4BzdMBbB%2BWJ7oN5x5Uqdx%2BN5cuMy3sBYkiDzSmoFVt%2B7ImZWBpXAjRrM7eeVuRTusgtFAbVRG22JTpykvDQ4LuQHqLrFHJgOM4CutLLEsMHouKQi009FrKcImsjs%2BbOGLy1BLKoGP8lK0iUez9EjE2dmSkPyF8hDKUC42yVpRAilZg&X-Amz-Signature=84fcee62023c03bd5def123b006f6123a8a4ebca08f0f0ea5077f2ad5880ca6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFB2VQ5E%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCQf60WeyUcoYg70iXqmX7alrENB6RLzBJRR95W0KIiVAIhAOLRNGMDoEHFMaGzZg%2FsT%2FqNKjlx4p7A6p9WWJBxJMGPKv8DCHIQABoMNjM3NDIzMTgzODA1Igx1dIQP0DR%2BX%2Fqxj5kq3AOABRo146aQR%2F70xNVIGC1fy5xOezTqHIgyl7WHCjlXJqjHHLkW1oE1%2Bo9Bv8oKX2n5w2ORyriNq8wMSQDzTAWsht50JJBh35pQPNJDSDR7HR9BlB2S80ZOuMcMjlWe86x3uP%2FGmbpij%2BLYHAJqfeLjW4z6PjNKXBSdUAbsCAejdZMvVGasAAOONUTlnXsPKZZp7EFnNvfengCl7F1JgcxgMP2%2Fe%2FeAP%2BTFesHQ%2FTxgUvBMVaTS%2FXFc%2FoKTajPtV1%2FY0PWNizPAONSRqKIQaTCZcU8A5aOMDGrTapq%2BOthOhAL3VcyS003N1Ef6kGJu5u0hTTjtDHOyzqRqqabbqaXGw3j6%2Bh%2FFmHUykX89HBGeNFJR3oyfN3Tr0vjR2Yg1VICliWMGlOHn%2FFwSFAjAQNzJ%2FM677Nz8YgItbT3jewyVmy0tbNoAffttSnnEvqHUAsLfo41WJc5p8G35QYwcS10gJEINPDfzKNm835sAefaKlA0FOVZnjuHsV4TKr%2BuLpYKYry8vtnF6UZ0WQbryIe0wf69ACPbI7Cs6%2FLdTGb9MIXukawe01kkLkiR1RiRZLcKjwfiQS5zdl%2FS8eIJKGlPElN%2FVQ9oE7w1jBdr7BTYrUtMu3sTz%2FI%2FleITcAzCP4JfEBjqkAWLe3VSofJ8a6hJGppYuj2hjtuq7jrtEuGIr%2FQ8KWHDHBu4BzdMBbB%2BWJ7oN5x5Uqdx%2BN5cuMy3sBYkiDzSmoFVt%2B7ImZWBpXAjRrM7eeVuRTusgtFAbVRG22JTpykvDQ4LuQHqLrFHJgOM4CutLLEsMHouKQi009FrKcImsjs%2BbOGLy1BLKoGP8lK0iUez9EjE2dmSkPyF8hDKUC42yVpRAilZg&X-Amz-Signature=f0d145af34e6093e00bbfee3e12dd19fb05785c4d8bfa734c634653027e11d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFB2VQ5E%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCQf60WeyUcoYg70iXqmX7alrENB6RLzBJRR95W0KIiVAIhAOLRNGMDoEHFMaGzZg%2FsT%2FqNKjlx4p7A6p9WWJBxJMGPKv8DCHIQABoMNjM3NDIzMTgzODA1Igx1dIQP0DR%2BX%2Fqxj5kq3AOABRo146aQR%2F70xNVIGC1fy5xOezTqHIgyl7WHCjlXJqjHHLkW1oE1%2Bo9Bv8oKX2n5w2ORyriNq8wMSQDzTAWsht50JJBh35pQPNJDSDR7HR9BlB2S80ZOuMcMjlWe86x3uP%2FGmbpij%2BLYHAJqfeLjW4z6PjNKXBSdUAbsCAejdZMvVGasAAOONUTlnXsPKZZp7EFnNvfengCl7F1JgcxgMP2%2Fe%2FeAP%2BTFesHQ%2FTxgUvBMVaTS%2FXFc%2FoKTajPtV1%2FY0PWNizPAONSRqKIQaTCZcU8A5aOMDGrTapq%2BOthOhAL3VcyS003N1Ef6kGJu5u0hTTjtDHOyzqRqqabbqaXGw3j6%2Bh%2FFmHUykX89HBGeNFJR3oyfN3Tr0vjR2Yg1VICliWMGlOHn%2FFwSFAjAQNzJ%2FM677Nz8YgItbT3jewyVmy0tbNoAffttSnnEvqHUAsLfo41WJc5p8G35QYwcS10gJEINPDfzKNm835sAefaKlA0FOVZnjuHsV4TKr%2BuLpYKYry8vtnF6UZ0WQbryIe0wf69ACPbI7Cs6%2FLdTGb9MIXukawe01kkLkiR1RiRZLcKjwfiQS5zdl%2FS8eIJKGlPElN%2FVQ9oE7w1jBdr7BTYrUtMu3sTz%2FI%2FleITcAzCP4JfEBjqkAWLe3VSofJ8a6hJGppYuj2hjtuq7jrtEuGIr%2FQ8KWHDHBu4BzdMBbB%2BWJ7oN5x5Uqdx%2BN5cuMy3sBYkiDzSmoFVt%2B7ImZWBpXAjRrM7eeVuRTusgtFAbVRG22JTpykvDQ4LuQHqLrFHJgOM4CutLLEsMHouKQi009FrKcImsjs%2BbOGLy1BLKoGP8lK0iUez9EjE2dmSkPyF8hDKUC42yVpRAilZg&X-Amz-Signature=c36a18a06118a8e1c58e2b860e0742b601b27dc0331fb78ed414e5da62a4d084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFB2VQ5E%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCQf60WeyUcoYg70iXqmX7alrENB6RLzBJRR95W0KIiVAIhAOLRNGMDoEHFMaGzZg%2FsT%2FqNKjlx4p7A6p9WWJBxJMGPKv8DCHIQABoMNjM3NDIzMTgzODA1Igx1dIQP0DR%2BX%2Fqxj5kq3AOABRo146aQR%2F70xNVIGC1fy5xOezTqHIgyl7WHCjlXJqjHHLkW1oE1%2Bo9Bv8oKX2n5w2ORyriNq8wMSQDzTAWsht50JJBh35pQPNJDSDR7HR9BlB2S80ZOuMcMjlWe86x3uP%2FGmbpij%2BLYHAJqfeLjW4z6PjNKXBSdUAbsCAejdZMvVGasAAOONUTlnXsPKZZp7EFnNvfengCl7F1JgcxgMP2%2Fe%2FeAP%2BTFesHQ%2FTxgUvBMVaTS%2FXFc%2FoKTajPtV1%2FY0PWNizPAONSRqKIQaTCZcU8A5aOMDGrTapq%2BOthOhAL3VcyS003N1Ef6kGJu5u0hTTjtDHOyzqRqqabbqaXGw3j6%2Bh%2FFmHUykX89HBGeNFJR3oyfN3Tr0vjR2Yg1VICliWMGlOHn%2FFwSFAjAQNzJ%2FM677Nz8YgItbT3jewyVmy0tbNoAffttSnnEvqHUAsLfo41WJc5p8G35QYwcS10gJEINPDfzKNm835sAefaKlA0FOVZnjuHsV4TKr%2BuLpYKYry8vtnF6UZ0WQbryIe0wf69ACPbI7Cs6%2FLdTGb9MIXukawe01kkLkiR1RiRZLcKjwfiQS5zdl%2FS8eIJKGlPElN%2FVQ9oE7w1jBdr7BTYrUtMu3sTz%2FI%2FleITcAzCP4JfEBjqkAWLe3VSofJ8a6hJGppYuj2hjtuq7jrtEuGIr%2FQ8KWHDHBu4BzdMBbB%2BWJ7oN5x5Uqdx%2BN5cuMy3sBYkiDzSmoFVt%2B7ImZWBpXAjRrM7eeVuRTusgtFAbVRG22JTpykvDQ4LuQHqLrFHJgOM4CutLLEsMHouKQi009FrKcImsjs%2BbOGLy1BLKoGP8lK0iUez9EjE2dmSkPyF8hDKUC42yVpRAilZg&X-Amz-Signature=18433f954ebc849b31cfe110b14c2641398aa259446134a239557ea2855f9570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFB2VQ5E%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCQf60WeyUcoYg70iXqmX7alrENB6RLzBJRR95W0KIiVAIhAOLRNGMDoEHFMaGzZg%2FsT%2FqNKjlx4p7A6p9WWJBxJMGPKv8DCHIQABoMNjM3NDIzMTgzODA1Igx1dIQP0DR%2BX%2Fqxj5kq3AOABRo146aQR%2F70xNVIGC1fy5xOezTqHIgyl7WHCjlXJqjHHLkW1oE1%2Bo9Bv8oKX2n5w2ORyriNq8wMSQDzTAWsht50JJBh35pQPNJDSDR7HR9BlB2S80ZOuMcMjlWe86x3uP%2FGmbpij%2BLYHAJqfeLjW4z6PjNKXBSdUAbsCAejdZMvVGasAAOONUTlnXsPKZZp7EFnNvfengCl7F1JgcxgMP2%2Fe%2FeAP%2BTFesHQ%2FTxgUvBMVaTS%2FXFc%2FoKTajPtV1%2FY0PWNizPAONSRqKIQaTCZcU8A5aOMDGrTapq%2BOthOhAL3VcyS003N1Ef6kGJu5u0hTTjtDHOyzqRqqabbqaXGw3j6%2Bh%2FFmHUykX89HBGeNFJR3oyfN3Tr0vjR2Yg1VICliWMGlOHn%2FFwSFAjAQNzJ%2FM677Nz8YgItbT3jewyVmy0tbNoAffttSnnEvqHUAsLfo41WJc5p8G35QYwcS10gJEINPDfzKNm835sAefaKlA0FOVZnjuHsV4TKr%2BuLpYKYry8vtnF6UZ0WQbryIe0wf69ACPbI7Cs6%2FLdTGb9MIXukawe01kkLkiR1RiRZLcKjwfiQS5zdl%2FS8eIJKGlPElN%2FVQ9oE7w1jBdr7BTYrUtMu3sTz%2FI%2FleITcAzCP4JfEBjqkAWLe3VSofJ8a6hJGppYuj2hjtuq7jrtEuGIr%2FQ8KWHDHBu4BzdMBbB%2BWJ7oN5x5Uqdx%2BN5cuMy3sBYkiDzSmoFVt%2B7ImZWBpXAjRrM7eeVuRTusgtFAbVRG22JTpykvDQ4LuQHqLrFHJgOM4CutLLEsMHouKQi009FrKcImsjs%2BbOGLy1BLKoGP8lK0iUez9EjE2dmSkPyF8hDKUC42yVpRAilZg&X-Amz-Signature=1ae7ff2406373bc6b324ce2509dbb20a1e4da277179cfb85e6d66dbe3cdbca91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFB2VQ5E%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCQf60WeyUcoYg70iXqmX7alrENB6RLzBJRR95W0KIiVAIhAOLRNGMDoEHFMaGzZg%2FsT%2FqNKjlx4p7A6p9WWJBxJMGPKv8DCHIQABoMNjM3NDIzMTgzODA1Igx1dIQP0DR%2BX%2Fqxj5kq3AOABRo146aQR%2F70xNVIGC1fy5xOezTqHIgyl7WHCjlXJqjHHLkW1oE1%2Bo9Bv8oKX2n5w2ORyriNq8wMSQDzTAWsht50JJBh35pQPNJDSDR7HR9BlB2S80ZOuMcMjlWe86x3uP%2FGmbpij%2BLYHAJqfeLjW4z6PjNKXBSdUAbsCAejdZMvVGasAAOONUTlnXsPKZZp7EFnNvfengCl7F1JgcxgMP2%2Fe%2FeAP%2BTFesHQ%2FTxgUvBMVaTS%2FXFc%2FoKTajPtV1%2FY0PWNizPAONSRqKIQaTCZcU8A5aOMDGrTapq%2BOthOhAL3VcyS003N1Ef6kGJu5u0hTTjtDHOyzqRqqabbqaXGw3j6%2Bh%2FFmHUykX89HBGeNFJR3oyfN3Tr0vjR2Yg1VICliWMGlOHn%2FFwSFAjAQNzJ%2FM677Nz8YgItbT3jewyVmy0tbNoAffttSnnEvqHUAsLfo41WJc5p8G35QYwcS10gJEINPDfzKNm835sAefaKlA0FOVZnjuHsV4TKr%2BuLpYKYry8vtnF6UZ0WQbryIe0wf69ACPbI7Cs6%2FLdTGb9MIXukawe01kkLkiR1RiRZLcKjwfiQS5zdl%2FS8eIJKGlPElN%2FVQ9oE7w1jBdr7BTYrUtMu3sTz%2FI%2FleITcAzCP4JfEBjqkAWLe3VSofJ8a6hJGppYuj2hjtuq7jrtEuGIr%2FQ8KWHDHBu4BzdMBbB%2BWJ7oN5x5Uqdx%2BN5cuMy3sBYkiDzSmoFVt%2B7ImZWBpXAjRrM7eeVuRTusgtFAbVRG22JTpykvDQ4LuQHqLrFHJgOM4CutLLEsMHouKQi009FrKcImsjs%2BbOGLy1BLKoGP8lK0iUez9EjE2dmSkPyF8hDKUC42yVpRAilZg&X-Amz-Signature=615324b333ca9d0f1e5d0824b3de971b0c8ea3726421ecc8ee0669c05e8692aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFB2VQ5E%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCQf60WeyUcoYg70iXqmX7alrENB6RLzBJRR95W0KIiVAIhAOLRNGMDoEHFMaGzZg%2FsT%2FqNKjlx4p7A6p9WWJBxJMGPKv8DCHIQABoMNjM3NDIzMTgzODA1Igx1dIQP0DR%2BX%2Fqxj5kq3AOABRo146aQR%2F70xNVIGC1fy5xOezTqHIgyl7WHCjlXJqjHHLkW1oE1%2Bo9Bv8oKX2n5w2ORyriNq8wMSQDzTAWsht50JJBh35pQPNJDSDR7HR9BlB2S80ZOuMcMjlWe86x3uP%2FGmbpij%2BLYHAJqfeLjW4z6PjNKXBSdUAbsCAejdZMvVGasAAOONUTlnXsPKZZp7EFnNvfengCl7F1JgcxgMP2%2Fe%2FeAP%2BTFesHQ%2FTxgUvBMVaTS%2FXFc%2FoKTajPtV1%2FY0PWNizPAONSRqKIQaTCZcU8A5aOMDGrTapq%2BOthOhAL3VcyS003N1Ef6kGJu5u0hTTjtDHOyzqRqqabbqaXGw3j6%2Bh%2FFmHUykX89HBGeNFJR3oyfN3Tr0vjR2Yg1VICliWMGlOHn%2FFwSFAjAQNzJ%2FM677Nz8YgItbT3jewyVmy0tbNoAffttSnnEvqHUAsLfo41WJc5p8G35QYwcS10gJEINPDfzKNm835sAefaKlA0FOVZnjuHsV4TKr%2BuLpYKYry8vtnF6UZ0WQbryIe0wf69ACPbI7Cs6%2FLdTGb9MIXukawe01kkLkiR1RiRZLcKjwfiQS5zdl%2FS8eIJKGlPElN%2FVQ9oE7w1jBdr7BTYrUtMu3sTz%2FI%2FleITcAzCP4JfEBjqkAWLe3VSofJ8a6hJGppYuj2hjtuq7jrtEuGIr%2FQ8KWHDHBu4BzdMBbB%2BWJ7oN5x5Uqdx%2BN5cuMy3sBYkiDzSmoFVt%2B7ImZWBpXAjRrM7eeVuRTusgtFAbVRG22JTpykvDQ4LuQHqLrFHJgOM4CutLLEsMHouKQi009FrKcImsjs%2BbOGLy1BLKoGP8lK0iUez9EjE2dmSkPyF8hDKUC42yVpRAilZg&X-Amz-Signature=1cafe65a6cab951206cb01c9559db0446b7538af993238d262cdc5206fb864c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFB2VQ5E%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCQf60WeyUcoYg70iXqmX7alrENB6RLzBJRR95W0KIiVAIhAOLRNGMDoEHFMaGzZg%2FsT%2FqNKjlx4p7A6p9WWJBxJMGPKv8DCHIQABoMNjM3NDIzMTgzODA1Igx1dIQP0DR%2BX%2Fqxj5kq3AOABRo146aQR%2F70xNVIGC1fy5xOezTqHIgyl7WHCjlXJqjHHLkW1oE1%2Bo9Bv8oKX2n5w2ORyriNq8wMSQDzTAWsht50JJBh35pQPNJDSDR7HR9BlB2S80ZOuMcMjlWe86x3uP%2FGmbpij%2BLYHAJqfeLjW4z6PjNKXBSdUAbsCAejdZMvVGasAAOONUTlnXsPKZZp7EFnNvfengCl7F1JgcxgMP2%2Fe%2FeAP%2BTFesHQ%2FTxgUvBMVaTS%2FXFc%2FoKTajPtV1%2FY0PWNizPAONSRqKIQaTCZcU8A5aOMDGrTapq%2BOthOhAL3VcyS003N1Ef6kGJu5u0hTTjtDHOyzqRqqabbqaXGw3j6%2Bh%2FFmHUykX89HBGeNFJR3oyfN3Tr0vjR2Yg1VICliWMGlOHn%2FFwSFAjAQNzJ%2FM677Nz8YgItbT3jewyVmy0tbNoAffttSnnEvqHUAsLfo41WJc5p8G35QYwcS10gJEINPDfzKNm835sAefaKlA0FOVZnjuHsV4TKr%2BuLpYKYry8vtnF6UZ0WQbryIe0wf69ACPbI7Cs6%2FLdTGb9MIXukawe01kkLkiR1RiRZLcKjwfiQS5zdl%2FS8eIJKGlPElN%2FVQ9oE7w1jBdr7BTYrUtMu3sTz%2FI%2FleITcAzCP4JfEBjqkAWLe3VSofJ8a6hJGppYuj2hjtuq7jrtEuGIr%2FQ8KWHDHBu4BzdMBbB%2BWJ7oN5x5Uqdx%2BN5cuMy3sBYkiDzSmoFVt%2B7ImZWBpXAjRrM7eeVuRTusgtFAbVRG22JTpykvDQ4LuQHqLrFHJgOM4CutLLEsMHouKQi009FrKcImsjs%2BbOGLy1BLKoGP8lK0iUez9EjE2dmSkPyF8hDKUC42yVpRAilZg&X-Amz-Signature=2d1d63d85646cdaef2b35293a998ea71fa8823dd9a6b410e1201dafdb9948b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFB2VQ5E%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCQf60WeyUcoYg70iXqmX7alrENB6RLzBJRR95W0KIiVAIhAOLRNGMDoEHFMaGzZg%2FsT%2FqNKjlx4p7A6p9WWJBxJMGPKv8DCHIQABoMNjM3NDIzMTgzODA1Igx1dIQP0DR%2BX%2Fqxj5kq3AOABRo146aQR%2F70xNVIGC1fy5xOezTqHIgyl7WHCjlXJqjHHLkW1oE1%2Bo9Bv8oKX2n5w2ORyriNq8wMSQDzTAWsht50JJBh35pQPNJDSDR7HR9BlB2S80ZOuMcMjlWe86x3uP%2FGmbpij%2BLYHAJqfeLjW4z6PjNKXBSdUAbsCAejdZMvVGasAAOONUTlnXsPKZZp7EFnNvfengCl7F1JgcxgMP2%2Fe%2FeAP%2BTFesHQ%2FTxgUvBMVaTS%2FXFc%2FoKTajPtV1%2FY0PWNizPAONSRqKIQaTCZcU8A5aOMDGrTapq%2BOthOhAL3VcyS003N1Ef6kGJu5u0hTTjtDHOyzqRqqabbqaXGw3j6%2Bh%2FFmHUykX89HBGeNFJR3oyfN3Tr0vjR2Yg1VICliWMGlOHn%2FFwSFAjAQNzJ%2FM677Nz8YgItbT3jewyVmy0tbNoAffttSnnEvqHUAsLfo41WJc5p8G35QYwcS10gJEINPDfzKNm835sAefaKlA0FOVZnjuHsV4TKr%2BuLpYKYry8vtnF6UZ0WQbryIe0wf69ACPbI7Cs6%2FLdTGb9MIXukawe01kkLkiR1RiRZLcKjwfiQS5zdl%2FS8eIJKGlPElN%2FVQ9oE7w1jBdr7BTYrUtMu3sTz%2FI%2FleITcAzCP4JfEBjqkAWLe3VSofJ8a6hJGppYuj2hjtuq7jrtEuGIr%2FQ8KWHDHBu4BzdMBbB%2BWJ7oN5x5Uqdx%2BN5cuMy3sBYkiDzSmoFVt%2B7ImZWBpXAjRrM7eeVuRTusgtFAbVRG22JTpykvDQ4LuQHqLrFHJgOM4CutLLEsMHouKQi009FrKcImsjs%2BbOGLy1BLKoGP8lK0iUez9EjE2dmSkPyF8hDKUC42yVpRAilZg&X-Amz-Signature=b77b45cb26edfa73771742a627b5276551d4b9da272682d706fe4605eade0724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFB2VQ5E%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCQf60WeyUcoYg70iXqmX7alrENB6RLzBJRR95W0KIiVAIhAOLRNGMDoEHFMaGzZg%2FsT%2FqNKjlx4p7A6p9WWJBxJMGPKv8DCHIQABoMNjM3NDIzMTgzODA1Igx1dIQP0DR%2BX%2Fqxj5kq3AOABRo146aQR%2F70xNVIGC1fy5xOezTqHIgyl7WHCjlXJqjHHLkW1oE1%2Bo9Bv8oKX2n5w2ORyriNq8wMSQDzTAWsht50JJBh35pQPNJDSDR7HR9BlB2S80ZOuMcMjlWe86x3uP%2FGmbpij%2BLYHAJqfeLjW4z6PjNKXBSdUAbsCAejdZMvVGasAAOONUTlnXsPKZZp7EFnNvfengCl7F1JgcxgMP2%2Fe%2FeAP%2BTFesHQ%2FTxgUvBMVaTS%2FXFc%2FoKTajPtV1%2FY0PWNizPAONSRqKIQaTCZcU8A5aOMDGrTapq%2BOthOhAL3VcyS003N1Ef6kGJu5u0hTTjtDHOyzqRqqabbqaXGw3j6%2Bh%2FFmHUykX89HBGeNFJR3oyfN3Tr0vjR2Yg1VICliWMGlOHn%2FFwSFAjAQNzJ%2FM677Nz8YgItbT3jewyVmy0tbNoAffttSnnEvqHUAsLfo41WJc5p8G35QYwcS10gJEINPDfzKNm835sAefaKlA0FOVZnjuHsV4TKr%2BuLpYKYry8vtnF6UZ0WQbryIe0wf69ACPbI7Cs6%2FLdTGb9MIXukawe01kkLkiR1RiRZLcKjwfiQS5zdl%2FS8eIJKGlPElN%2FVQ9oE7w1jBdr7BTYrUtMu3sTz%2FI%2FleITcAzCP4JfEBjqkAWLe3VSofJ8a6hJGppYuj2hjtuq7jrtEuGIr%2FQ8KWHDHBu4BzdMBbB%2BWJ7oN5x5Uqdx%2BN5cuMy3sBYkiDzSmoFVt%2B7ImZWBpXAjRrM7eeVuRTusgtFAbVRG22JTpykvDQ4LuQHqLrFHJgOM4CutLLEsMHouKQi009FrKcImsjs%2BbOGLy1BLKoGP8lK0iUez9EjE2dmSkPyF8hDKUC42yVpRAilZg&X-Amz-Signature=699601ada2bee663b3bab384df42794c6293caa3e53df7efb6c5054c3b5cb10f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

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
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFB2VQ5E%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCQf60WeyUcoYg70iXqmX7alrENB6RLzBJRR95W0KIiVAIhAOLRNGMDoEHFMaGzZg%2FsT%2FqNKjlx4p7A6p9WWJBxJMGPKv8DCHIQABoMNjM3NDIzMTgzODA1Igx1dIQP0DR%2BX%2Fqxj5kq3AOABRo146aQR%2F70xNVIGC1fy5xOezTqHIgyl7WHCjlXJqjHHLkW1oE1%2Bo9Bv8oKX2n5w2ORyriNq8wMSQDzTAWsht50JJBh35pQPNJDSDR7HR9BlB2S80ZOuMcMjlWe86x3uP%2FGmbpij%2BLYHAJqfeLjW4z6PjNKXBSdUAbsCAejdZMvVGasAAOONUTlnXsPKZZp7EFnNvfengCl7F1JgcxgMP2%2Fe%2FeAP%2BTFesHQ%2FTxgUvBMVaTS%2FXFc%2FoKTajPtV1%2FY0PWNizPAONSRqKIQaTCZcU8A5aOMDGrTapq%2BOthOhAL3VcyS003N1Ef6kGJu5u0hTTjtDHOyzqRqqabbqaXGw3j6%2Bh%2FFmHUykX89HBGeNFJR3oyfN3Tr0vjR2Yg1VICliWMGlOHn%2FFwSFAjAQNzJ%2FM677Nz8YgItbT3jewyVmy0tbNoAffttSnnEvqHUAsLfo41WJc5p8G35QYwcS10gJEINPDfzKNm835sAefaKlA0FOVZnjuHsV4TKr%2BuLpYKYry8vtnF6UZ0WQbryIe0wf69ACPbI7Cs6%2FLdTGb9MIXukawe01kkLkiR1RiRZLcKjwfiQS5zdl%2FS8eIJKGlPElN%2FVQ9oE7w1jBdr7BTYrUtMu3sTz%2FI%2FleITcAzCP4JfEBjqkAWLe3VSofJ8a6hJGppYuj2hjtuq7jrtEuGIr%2FQ8KWHDHBu4BzdMBbB%2BWJ7oN5x5Uqdx%2BN5cuMy3sBYkiDzSmoFVt%2B7ImZWBpXAjRrM7eeVuRTusgtFAbVRG22JTpykvDQ4LuQHqLrFHJgOM4CutLLEsMHouKQi009FrKcImsjs%2BbOGLy1BLKoGP8lK0iUez9EjE2dmSkPyF8hDKUC42yVpRAilZg&X-Amz-Signature=cf2b8436ee12a2156416bfb99eddb53a4b4d057d9718292a0b190dc7dceb86db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFB2VQ5E%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCQf60WeyUcoYg70iXqmX7alrENB6RLzBJRR95W0KIiVAIhAOLRNGMDoEHFMaGzZg%2FsT%2FqNKjlx4p7A6p9WWJBxJMGPKv8DCHIQABoMNjM3NDIzMTgzODA1Igx1dIQP0DR%2BX%2Fqxj5kq3AOABRo146aQR%2F70xNVIGC1fy5xOezTqHIgyl7WHCjlXJqjHHLkW1oE1%2Bo9Bv8oKX2n5w2ORyriNq8wMSQDzTAWsht50JJBh35pQPNJDSDR7HR9BlB2S80ZOuMcMjlWe86x3uP%2FGmbpij%2BLYHAJqfeLjW4z6PjNKXBSdUAbsCAejdZMvVGasAAOONUTlnXsPKZZp7EFnNvfengCl7F1JgcxgMP2%2Fe%2FeAP%2BTFesHQ%2FTxgUvBMVaTS%2FXFc%2FoKTajPtV1%2FY0PWNizPAONSRqKIQaTCZcU8A5aOMDGrTapq%2BOthOhAL3VcyS003N1Ef6kGJu5u0hTTjtDHOyzqRqqabbqaXGw3j6%2Bh%2FFmHUykX89HBGeNFJR3oyfN3Tr0vjR2Yg1VICliWMGlOHn%2FFwSFAjAQNzJ%2FM677Nz8YgItbT3jewyVmy0tbNoAffttSnnEvqHUAsLfo41WJc5p8G35QYwcS10gJEINPDfzKNm835sAefaKlA0FOVZnjuHsV4TKr%2BuLpYKYry8vtnF6UZ0WQbryIe0wf69ACPbI7Cs6%2FLdTGb9MIXukawe01kkLkiR1RiRZLcKjwfiQS5zdl%2FS8eIJKGlPElN%2FVQ9oE7w1jBdr7BTYrUtMu3sTz%2FI%2FleITcAzCP4JfEBjqkAWLe3VSofJ8a6hJGppYuj2hjtuq7jrtEuGIr%2FQ8KWHDHBu4BzdMBbB%2BWJ7oN5x5Uqdx%2BN5cuMy3sBYkiDzSmoFVt%2B7ImZWBpXAjRrM7eeVuRTusgtFAbVRG22JTpykvDQ4LuQHqLrFHJgOM4CutLLEsMHouKQi009FrKcImsjs%2BbOGLy1BLKoGP8lK0iUez9EjE2dmSkPyF8hDKUC42yVpRAilZg&X-Amz-Signature=89fa033dbb10652869ba86c9e112ef9c83e31d5f0041fafc4a55bc47935dec01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFB2VQ5E%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCQf60WeyUcoYg70iXqmX7alrENB6RLzBJRR95W0KIiVAIhAOLRNGMDoEHFMaGzZg%2FsT%2FqNKjlx4p7A6p9WWJBxJMGPKv8DCHIQABoMNjM3NDIzMTgzODA1Igx1dIQP0DR%2BX%2Fqxj5kq3AOABRo146aQR%2F70xNVIGC1fy5xOezTqHIgyl7WHCjlXJqjHHLkW1oE1%2Bo9Bv8oKX2n5w2ORyriNq8wMSQDzTAWsht50JJBh35pQPNJDSDR7HR9BlB2S80ZOuMcMjlWe86x3uP%2FGmbpij%2BLYHAJqfeLjW4z6PjNKXBSdUAbsCAejdZMvVGasAAOONUTlnXsPKZZp7EFnNvfengCl7F1JgcxgMP2%2Fe%2FeAP%2BTFesHQ%2FTxgUvBMVaTS%2FXFc%2FoKTajPtV1%2FY0PWNizPAONSRqKIQaTCZcU8A5aOMDGrTapq%2BOthOhAL3VcyS003N1Ef6kGJu5u0hTTjtDHOyzqRqqabbqaXGw3j6%2Bh%2FFmHUykX89HBGeNFJR3oyfN3Tr0vjR2Yg1VICliWMGlOHn%2FFwSFAjAQNzJ%2FM677Nz8YgItbT3jewyVmy0tbNoAffttSnnEvqHUAsLfo41WJc5p8G35QYwcS10gJEINPDfzKNm835sAefaKlA0FOVZnjuHsV4TKr%2BuLpYKYry8vtnF6UZ0WQbryIe0wf69ACPbI7Cs6%2FLdTGb9MIXukawe01kkLkiR1RiRZLcKjwfiQS5zdl%2FS8eIJKGlPElN%2FVQ9oE7w1jBdr7BTYrUtMu3sTz%2FI%2FleITcAzCP4JfEBjqkAWLe3VSofJ8a6hJGppYuj2hjtuq7jrtEuGIr%2FQ8KWHDHBu4BzdMBbB%2BWJ7oN5x5Uqdx%2BN5cuMy3sBYkiDzSmoFVt%2B7ImZWBpXAjRrM7eeVuRTusgtFAbVRG22JTpykvDQ4LuQHqLrFHJgOM4CutLLEsMHouKQi009FrKcImsjs%2BbOGLy1BLKoGP8lK0iUez9EjE2dmSkPyF8hDKUC42yVpRAilZg&X-Amz-Signature=6018e10f8d0eaff94f6e35296c208cd86a3a164fea8854dd8a69e867d1352385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFB2VQ5E%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCQf60WeyUcoYg70iXqmX7alrENB6RLzBJRR95W0KIiVAIhAOLRNGMDoEHFMaGzZg%2FsT%2FqNKjlx4p7A6p9WWJBxJMGPKv8DCHIQABoMNjM3NDIzMTgzODA1Igx1dIQP0DR%2BX%2Fqxj5kq3AOABRo146aQR%2F70xNVIGC1fy5xOezTqHIgyl7WHCjlXJqjHHLkW1oE1%2Bo9Bv8oKX2n5w2ORyriNq8wMSQDzTAWsht50JJBh35pQPNJDSDR7HR9BlB2S80ZOuMcMjlWe86x3uP%2FGmbpij%2BLYHAJqfeLjW4z6PjNKXBSdUAbsCAejdZMvVGasAAOONUTlnXsPKZZp7EFnNvfengCl7F1JgcxgMP2%2Fe%2FeAP%2BTFesHQ%2FTxgUvBMVaTS%2FXFc%2FoKTajPtV1%2FY0PWNizPAONSRqKIQaTCZcU8A5aOMDGrTapq%2BOthOhAL3VcyS003N1Ef6kGJu5u0hTTjtDHOyzqRqqabbqaXGw3j6%2Bh%2FFmHUykX89HBGeNFJR3oyfN3Tr0vjR2Yg1VICliWMGlOHn%2FFwSFAjAQNzJ%2FM677Nz8YgItbT3jewyVmy0tbNoAffttSnnEvqHUAsLfo41WJc5p8G35QYwcS10gJEINPDfzKNm835sAefaKlA0FOVZnjuHsV4TKr%2BuLpYKYry8vtnF6UZ0WQbryIe0wf69ACPbI7Cs6%2FLdTGb9MIXukawe01kkLkiR1RiRZLcKjwfiQS5zdl%2FS8eIJKGlPElN%2FVQ9oE7w1jBdr7BTYrUtMu3sTz%2FI%2FleITcAzCP4JfEBjqkAWLe3VSofJ8a6hJGppYuj2hjtuq7jrtEuGIr%2FQ8KWHDHBu4BzdMBbB%2BWJ7oN5x5Uqdx%2BN5cuMy3sBYkiDzSmoFVt%2B7ImZWBpXAjRrM7eeVuRTusgtFAbVRG22JTpykvDQ4LuQHqLrFHJgOM4CutLLEsMHouKQi009FrKcImsjs%2BbOGLy1BLKoGP8lK0iUez9EjE2dmSkPyF8hDKUC42yVpRAilZg&X-Amz-Signature=bb902113bab428a6bee18c75537fd561f767a52b3e002bde68b4fa88bd697a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC75REDE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCUgXtka1yDwclKQ6J%2FuR6N5mrrMHrT7ZLjSMYm6Bk8BwIgFhbEfCHboNQNxA63ldUYlIsp3s2OFrLp5%2FvXDtZQ7V4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKN7t4k4iQLIPG5C6ircA61RllXVJ1fp%2F1BXaxZPsjwm3r8dKtDi64l9qDr4JECHCua6URUg4X9%2BZgSVTxdTCZq4sTFQAK4UjXVwxuXywGXXQtyL6pxI8bN7xeFfvHnhgEzige%2BeScxzrdrc7ap%2FyVFqPNBODXpiwqluRVAl1sZ1raazIdSOH1RuVsZXAGON9CNsMKEJKemiNnM5RqicksnVnUnhqnShYmSlUJ7MbFGw4VpAof28uCBom7%2Bz%2F4%2FsgAy5FOeOEI9ldYWvPLTdtcJFX5OBhtktTFA9wYi%2FBUaL4PKGDqiAshgPCSsyrPVVAgQSZXjUPU8qiIwqDkHTpZRNu8NpMos7qKGgtP%2F77NfoE83jPjWyDvEBYeOb0HmOEiOjIstF05M5hyJxb3SMoHQJitROj9aLBZspdXpBW%2BEDt0qbEnmMQEUhsQ6ExwpDqKArn3OvQFSOjhF9Ah0bFfdjpWX5HfWZFsiZF3rtx1YgS05QUjuDr9FvI5wF3rIDL3a9LghgvHEOOrhTOKrixtqc5zcapQGiyfIdoW%2BULV6YSc%2BR7waHpI87tY%2BMX2HPPxhB9mM7kCqECCchfRrniIa4w38H2VLyIj%2Fm1qfVcDk%2Bm3Y4n5rJlBODK4hkLTWXTuX5hpb4QYWNUswDMN7gl8QGOqUBtIgYCQj8qJ4xySrNOiRClccwyi0up6kP8fUqT7mXYKXH2baoCgLqcb9y4oDNGf2NH88%2FYhSj74M%2B5c1Fb7DL68BRfGvWjX1A15quO9aLsh6wl768agJy4UmYMbvQZFcWXZ%2FwpsikZO6lGlBLInEQMvStTJjWtodQTeKj%2FiOb2vtluu0nljZMcdpGa3rGUHj20ggNYmtHtBp5PvnDN1c6iZ79hEtV&X-Amz-Signature=2ab681c403b67bf057caa589fca4dd18f2e6a6990cdf087472c95e91e87fdd11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC75REDE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCUgXtka1yDwclKQ6J%2FuR6N5mrrMHrT7ZLjSMYm6Bk8BwIgFhbEfCHboNQNxA63ldUYlIsp3s2OFrLp5%2FvXDtZQ7V4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKN7t4k4iQLIPG5C6ircA61RllXVJ1fp%2F1BXaxZPsjwm3r8dKtDi64l9qDr4JECHCua6URUg4X9%2BZgSVTxdTCZq4sTFQAK4UjXVwxuXywGXXQtyL6pxI8bN7xeFfvHnhgEzige%2BeScxzrdrc7ap%2FyVFqPNBODXpiwqluRVAl1sZ1raazIdSOH1RuVsZXAGON9CNsMKEJKemiNnM5RqicksnVnUnhqnShYmSlUJ7MbFGw4VpAof28uCBom7%2Bz%2F4%2FsgAy5FOeOEI9ldYWvPLTdtcJFX5OBhtktTFA9wYi%2FBUaL4PKGDqiAshgPCSsyrPVVAgQSZXjUPU8qiIwqDkHTpZRNu8NpMos7qKGgtP%2F77NfoE83jPjWyDvEBYeOb0HmOEiOjIstF05M5hyJxb3SMoHQJitROj9aLBZspdXpBW%2BEDt0qbEnmMQEUhsQ6ExwpDqKArn3OvQFSOjhF9Ah0bFfdjpWX5HfWZFsiZF3rtx1YgS05QUjuDr9FvI5wF3rIDL3a9LghgvHEOOrhTOKrixtqc5zcapQGiyfIdoW%2BULV6YSc%2BR7waHpI87tY%2BMX2HPPxhB9mM7kCqECCchfRrniIa4w38H2VLyIj%2Fm1qfVcDk%2Bm3Y4n5rJlBODK4hkLTWXTuX5hpb4QYWNUswDMN7gl8QGOqUBtIgYCQj8qJ4xySrNOiRClccwyi0up6kP8fUqT7mXYKXH2baoCgLqcb9y4oDNGf2NH88%2FYhSj74M%2B5c1Fb7DL68BRfGvWjX1A15quO9aLsh6wl768agJy4UmYMbvQZFcWXZ%2FwpsikZO6lGlBLInEQMvStTJjWtodQTeKj%2FiOb2vtluu0nljZMcdpGa3rGUHj20ggNYmtHtBp5PvnDN1c6iZ79hEtV&X-Amz-Signature=958e93d7da9da910b85c1423fcb50370b24ba12dbb63701d2eba37ec6111e12f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      TODO:
  </details>

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

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC75REDE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCUgXtka1yDwclKQ6J%2FuR6N5mrrMHrT7ZLjSMYm6Bk8BwIgFhbEfCHboNQNxA63ldUYlIsp3s2OFrLp5%2FvXDtZQ7V4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKN7t4k4iQLIPG5C6ircA61RllXVJ1fp%2F1BXaxZPsjwm3r8dKtDi64l9qDr4JECHCua6URUg4X9%2BZgSVTxdTCZq4sTFQAK4UjXVwxuXywGXXQtyL6pxI8bN7xeFfvHnhgEzige%2BeScxzrdrc7ap%2FyVFqPNBODXpiwqluRVAl1sZ1raazIdSOH1RuVsZXAGON9CNsMKEJKemiNnM5RqicksnVnUnhqnShYmSlUJ7MbFGw4VpAof28uCBom7%2Bz%2F4%2FsgAy5FOeOEI9ldYWvPLTdtcJFX5OBhtktTFA9wYi%2FBUaL4PKGDqiAshgPCSsyrPVVAgQSZXjUPU8qiIwqDkHTpZRNu8NpMos7qKGgtP%2F77NfoE83jPjWyDvEBYeOb0HmOEiOjIstF05M5hyJxb3SMoHQJitROj9aLBZspdXpBW%2BEDt0qbEnmMQEUhsQ6ExwpDqKArn3OvQFSOjhF9Ah0bFfdjpWX5HfWZFsiZF3rtx1YgS05QUjuDr9FvI5wF3rIDL3a9LghgvHEOOrhTOKrixtqc5zcapQGiyfIdoW%2BULV6YSc%2BR7waHpI87tY%2BMX2HPPxhB9mM7kCqECCchfRrniIa4w38H2VLyIj%2Fm1qfVcDk%2Bm3Y4n5rJlBODK4hkLTWXTuX5hpb4QYWNUswDMN7gl8QGOqUBtIgYCQj8qJ4xySrNOiRClccwyi0up6kP8fUqT7mXYKXH2baoCgLqcb9y4oDNGf2NH88%2FYhSj74M%2B5c1Fb7DL68BRfGvWjX1A15quO9aLsh6wl768agJy4UmYMbvQZFcWXZ%2FwpsikZO6lGlBLInEQMvStTJjWtodQTeKj%2FiOb2vtluu0nljZMcdpGa3rGUHj20ggNYmtHtBp5PvnDN1c6iZ79hEtV&X-Amz-Signature=03155ee5e247f33caf023ce8731d5dc5a4d08eb34b1b7f2d518b091746dd15e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC75REDE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCUgXtka1yDwclKQ6J%2FuR6N5mrrMHrT7ZLjSMYm6Bk8BwIgFhbEfCHboNQNxA63ldUYlIsp3s2OFrLp5%2FvXDtZQ7V4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKN7t4k4iQLIPG5C6ircA61RllXVJ1fp%2F1BXaxZPsjwm3r8dKtDi64l9qDr4JECHCua6URUg4X9%2BZgSVTxdTCZq4sTFQAK4UjXVwxuXywGXXQtyL6pxI8bN7xeFfvHnhgEzige%2BeScxzrdrc7ap%2FyVFqPNBODXpiwqluRVAl1sZ1raazIdSOH1RuVsZXAGON9CNsMKEJKemiNnM5RqicksnVnUnhqnShYmSlUJ7MbFGw4VpAof28uCBom7%2Bz%2F4%2FsgAy5FOeOEI9ldYWvPLTdtcJFX5OBhtktTFA9wYi%2FBUaL4PKGDqiAshgPCSsyrPVVAgQSZXjUPU8qiIwqDkHTpZRNu8NpMos7qKGgtP%2F77NfoE83jPjWyDvEBYeOb0HmOEiOjIstF05M5hyJxb3SMoHQJitROj9aLBZspdXpBW%2BEDt0qbEnmMQEUhsQ6ExwpDqKArn3OvQFSOjhF9Ah0bFfdjpWX5HfWZFsiZF3rtx1YgS05QUjuDr9FvI5wF3rIDL3a9LghgvHEOOrhTOKrixtqc5zcapQGiyfIdoW%2BULV6YSc%2BR7waHpI87tY%2BMX2HPPxhB9mM7kCqECCchfRrniIa4w38H2VLyIj%2Fm1qfVcDk%2Bm3Y4n5rJlBODK4hkLTWXTuX5hpb4QYWNUswDMN7gl8QGOqUBtIgYCQj8qJ4xySrNOiRClccwyi0up6kP8fUqT7mXYKXH2baoCgLqcb9y4oDNGf2NH88%2FYhSj74M%2B5c1Fb7DL68BRfGvWjX1A15quO9aLsh6wl768agJy4UmYMbvQZFcWXZ%2FwpsikZO6lGlBLInEQMvStTJjWtodQTeKj%2FiOb2vtluu0nljZMcdpGa3rGUHj20ggNYmtHtBp5PvnDN1c6iZ79hEtV&X-Amz-Signature=c2503a26bed850ce7a7f0c0404e35e1ee1966e9bc1b268c0aaa7d95d1cd4299d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC75REDE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCUgXtka1yDwclKQ6J%2FuR6N5mrrMHrT7ZLjSMYm6Bk8BwIgFhbEfCHboNQNxA63ldUYlIsp3s2OFrLp5%2FvXDtZQ7V4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKN7t4k4iQLIPG5C6ircA61RllXVJ1fp%2F1BXaxZPsjwm3r8dKtDi64l9qDr4JECHCua6URUg4X9%2BZgSVTxdTCZq4sTFQAK4UjXVwxuXywGXXQtyL6pxI8bN7xeFfvHnhgEzige%2BeScxzrdrc7ap%2FyVFqPNBODXpiwqluRVAl1sZ1raazIdSOH1RuVsZXAGON9CNsMKEJKemiNnM5RqicksnVnUnhqnShYmSlUJ7MbFGw4VpAof28uCBom7%2Bz%2F4%2FsgAy5FOeOEI9ldYWvPLTdtcJFX5OBhtktTFA9wYi%2FBUaL4PKGDqiAshgPCSsyrPVVAgQSZXjUPU8qiIwqDkHTpZRNu8NpMos7qKGgtP%2F77NfoE83jPjWyDvEBYeOb0HmOEiOjIstF05M5hyJxb3SMoHQJitROj9aLBZspdXpBW%2BEDt0qbEnmMQEUhsQ6ExwpDqKArn3OvQFSOjhF9Ah0bFfdjpWX5HfWZFsiZF3rtx1YgS05QUjuDr9FvI5wF3rIDL3a9LghgvHEOOrhTOKrixtqc5zcapQGiyfIdoW%2BULV6YSc%2BR7waHpI87tY%2BMX2HPPxhB9mM7kCqECCchfRrniIa4w38H2VLyIj%2Fm1qfVcDk%2Bm3Y4n5rJlBODK4hkLTWXTuX5hpb4QYWNUswDMN7gl8QGOqUBtIgYCQj8qJ4xySrNOiRClccwyi0up6kP8fUqT7mXYKXH2baoCgLqcb9y4oDNGf2NH88%2FYhSj74M%2B5c1Fb7DL68BRfGvWjX1A15quO9aLsh6wl768agJy4UmYMbvQZFcWXZ%2FwpsikZO6lGlBLInEQMvStTJjWtodQTeKj%2FiOb2vtluu0nljZMcdpGa3rGUHj20ggNYmtHtBp5PvnDN1c6iZ79hEtV&X-Amz-Signature=cce239b27f7694d65c6beede1debac5ed92bf5aed7cffd7298eee46a8308af10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC75REDE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCUgXtka1yDwclKQ6J%2FuR6N5mrrMHrT7ZLjSMYm6Bk8BwIgFhbEfCHboNQNxA63ldUYlIsp3s2OFrLp5%2FvXDtZQ7V4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKN7t4k4iQLIPG5C6ircA61RllXVJ1fp%2F1BXaxZPsjwm3r8dKtDi64l9qDr4JECHCua6URUg4X9%2BZgSVTxdTCZq4sTFQAK4UjXVwxuXywGXXQtyL6pxI8bN7xeFfvHnhgEzige%2BeScxzrdrc7ap%2FyVFqPNBODXpiwqluRVAl1sZ1raazIdSOH1RuVsZXAGON9CNsMKEJKemiNnM5RqicksnVnUnhqnShYmSlUJ7MbFGw4VpAof28uCBom7%2Bz%2F4%2FsgAy5FOeOEI9ldYWvPLTdtcJFX5OBhtktTFA9wYi%2FBUaL4PKGDqiAshgPCSsyrPVVAgQSZXjUPU8qiIwqDkHTpZRNu8NpMos7qKGgtP%2F77NfoE83jPjWyDvEBYeOb0HmOEiOjIstF05M5hyJxb3SMoHQJitROj9aLBZspdXpBW%2BEDt0qbEnmMQEUhsQ6ExwpDqKArn3OvQFSOjhF9Ah0bFfdjpWX5HfWZFsiZF3rtx1YgS05QUjuDr9FvI5wF3rIDL3a9LghgvHEOOrhTOKrixtqc5zcapQGiyfIdoW%2BULV6YSc%2BR7waHpI87tY%2BMX2HPPxhB9mM7kCqECCchfRrniIa4w38H2VLyIj%2Fm1qfVcDk%2Bm3Y4n5rJlBODK4hkLTWXTuX5hpb4QYWNUswDMN7gl8QGOqUBtIgYCQj8qJ4xySrNOiRClccwyi0up6kP8fUqT7mXYKXH2baoCgLqcb9y4oDNGf2NH88%2FYhSj74M%2B5c1Fb7DL68BRfGvWjX1A15quO9aLsh6wl768agJy4UmYMbvQZFcWXZ%2FwpsikZO6lGlBLInEQMvStTJjWtodQTeKj%2FiOb2vtluu0nljZMcdpGa3rGUHj20ggNYmtHtBp5PvnDN1c6iZ79hEtV&X-Amz-Signature=3e4ae750915707bd0c843179ae50f8a9bdfb5b347f3e95c5f99f9f1f6fd24dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
