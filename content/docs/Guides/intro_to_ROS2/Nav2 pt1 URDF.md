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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LKFTF4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAE8ol1MA3grKhYPc3PYV4IzGSlDr0%2FVhAK%2FA63gFzpQIga9crYoVTAE5HjdCxNmNpK3hoINsmKUL46CwuPiStotkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLTT6L%2FFkiJiBScYgCrcA%2FWEkQd%2BZd%2Fty0Efl9HRLcEQQQtZt%2BwOlEJe835zrbr5Tg9qcs16A%2Bp%2BBoAM%2BlXvgJ%2BxTem%2FwcLRQlLBl3tzBWmkCmHj9EX5was2lfIYKmFavWRy9O7c4bhAFOYMRXcHMFEIXD8H4gnCPYQ2kEDTbVF1j8iM7YpP3Z6diW%2F5DvpN%2Bxj%2FqXCzn467BZb5Q7FR6v0CeV%2FAiCR5MymtASwYZobfOpq50vhxl82l1wCKBowmS8mTt%2BwPWiHkGgS9JmNDQEE7qxxuYw6UDAA1nu7CILTeqhmpTv2Tkxx0rKsYBukhyj2GZzZpfkV0lP%2FloMus9gB1C9KuY5ygCfIFe%2BoS4NiWNmK%2FDksvfNROshSdZOHlxvFr1x9fk9KvH9dBJIwUBXRWEjuRrhWpoxQisnoetymmdZP1ZlSksPBvwfTjOhfFPQ9kA9kZsKUvGtvRfZQixNUlj66Kqao7mo8jY%2B4twfc1K%2BNPL%2FNYbRxjrv9%2BzybzRy05v4YZG43kW5WQOfL7%2Fy5fMct1U0RqtihXpBemA%2Fn%2B4EX7oP99qbGkQfPO%2FBxN6wsuMWsTGij9y7j5Si7JICBnqFgi9jT49nZ9Pn6e5MP%2BG5zGpk0WRXyqV%2F8yrlqoKbsx0F1siGjYdS0wMJzrzsQGOqUBneibFHTMClPZ6BdN%2FwcZB1iN5%2BYHa7SxmqKjPk1lovYj1g23Fq0CghF6c9ARlqTzLaahdE0a9F9jatgGifnTbxQc%2FIkqYGbxiEUiCWGNkX8D5aj6WnBSpgIarWpodwt6lNpvqyiyE0WbCIgVvZTtnTbj%2BYp4ym332o2wJXRuUqizytA3jpyp1EX%2BtmCemdlGJ1EbqDzVs1v1vzQ0vEfhbqfbdIIL&X-Amz-Signature=fb04350449eee0ba3e3ef0d5c3c6ecc5992eb7e53c52968bcba1758fd3c27918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LKFTF4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAE8ol1MA3grKhYPc3PYV4IzGSlDr0%2FVhAK%2FA63gFzpQIga9crYoVTAE5HjdCxNmNpK3hoINsmKUL46CwuPiStotkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLTT6L%2FFkiJiBScYgCrcA%2FWEkQd%2BZd%2Fty0Efl9HRLcEQQQtZt%2BwOlEJe835zrbr5Tg9qcs16A%2Bp%2BBoAM%2BlXvgJ%2BxTem%2FwcLRQlLBl3tzBWmkCmHj9EX5was2lfIYKmFavWRy9O7c4bhAFOYMRXcHMFEIXD8H4gnCPYQ2kEDTbVF1j8iM7YpP3Z6diW%2F5DvpN%2Bxj%2FqXCzn467BZb5Q7FR6v0CeV%2FAiCR5MymtASwYZobfOpq50vhxl82l1wCKBowmS8mTt%2BwPWiHkGgS9JmNDQEE7qxxuYw6UDAA1nu7CILTeqhmpTv2Tkxx0rKsYBukhyj2GZzZpfkV0lP%2FloMus9gB1C9KuY5ygCfIFe%2BoS4NiWNmK%2FDksvfNROshSdZOHlxvFr1x9fk9KvH9dBJIwUBXRWEjuRrhWpoxQisnoetymmdZP1ZlSksPBvwfTjOhfFPQ9kA9kZsKUvGtvRfZQixNUlj66Kqao7mo8jY%2B4twfc1K%2BNPL%2FNYbRxjrv9%2BzybzRy05v4YZG43kW5WQOfL7%2Fy5fMct1U0RqtihXpBemA%2Fn%2B4EX7oP99qbGkQfPO%2FBxN6wsuMWsTGij9y7j5Si7JICBnqFgi9jT49nZ9Pn6e5MP%2BG5zGpk0WRXyqV%2F8yrlqoKbsx0F1siGjYdS0wMJzrzsQGOqUBneibFHTMClPZ6BdN%2FwcZB1iN5%2BYHa7SxmqKjPk1lovYj1g23Fq0CghF6c9ARlqTzLaahdE0a9F9jatgGifnTbxQc%2FIkqYGbxiEUiCWGNkX8D5aj6WnBSpgIarWpodwt6lNpvqyiyE0WbCIgVvZTtnTbj%2BYp4ym332o2wJXRuUqizytA3jpyp1EX%2BtmCemdlGJ1EbqDzVs1v1vzQ0vEfhbqfbdIIL&X-Amz-Signature=b9cdcac5449e2d98260a5a8ba9a06390e7374021b762dcca61e38baef16155ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LKFTF4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAE8ol1MA3grKhYPc3PYV4IzGSlDr0%2FVhAK%2FA63gFzpQIga9crYoVTAE5HjdCxNmNpK3hoINsmKUL46CwuPiStotkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLTT6L%2FFkiJiBScYgCrcA%2FWEkQd%2BZd%2Fty0Efl9HRLcEQQQtZt%2BwOlEJe835zrbr5Tg9qcs16A%2Bp%2BBoAM%2BlXvgJ%2BxTem%2FwcLRQlLBl3tzBWmkCmHj9EX5was2lfIYKmFavWRy9O7c4bhAFOYMRXcHMFEIXD8H4gnCPYQ2kEDTbVF1j8iM7YpP3Z6diW%2F5DvpN%2Bxj%2FqXCzn467BZb5Q7FR6v0CeV%2FAiCR5MymtASwYZobfOpq50vhxl82l1wCKBowmS8mTt%2BwPWiHkGgS9JmNDQEE7qxxuYw6UDAA1nu7CILTeqhmpTv2Tkxx0rKsYBukhyj2GZzZpfkV0lP%2FloMus9gB1C9KuY5ygCfIFe%2BoS4NiWNmK%2FDksvfNROshSdZOHlxvFr1x9fk9KvH9dBJIwUBXRWEjuRrhWpoxQisnoetymmdZP1ZlSksPBvwfTjOhfFPQ9kA9kZsKUvGtvRfZQixNUlj66Kqao7mo8jY%2B4twfc1K%2BNPL%2FNYbRxjrv9%2BzybzRy05v4YZG43kW5WQOfL7%2Fy5fMct1U0RqtihXpBemA%2Fn%2B4EX7oP99qbGkQfPO%2FBxN6wsuMWsTGij9y7j5Si7JICBnqFgi9jT49nZ9Pn6e5MP%2BG5zGpk0WRXyqV%2F8yrlqoKbsx0F1siGjYdS0wMJzrzsQGOqUBneibFHTMClPZ6BdN%2FwcZB1iN5%2BYHa7SxmqKjPk1lovYj1g23Fq0CghF6c9ARlqTzLaahdE0a9F9jatgGifnTbxQc%2FIkqYGbxiEUiCWGNkX8D5aj6WnBSpgIarWpodwt6lNpvqyiyE0WbCIgVvZTtnTbj%2BYp4ym332o2wJXRuUqizytA3jpyp1EX%2BtmCemdlGJ1EbqDzVs1v1vzQ0vEfhbqfbdIIL&X-Amz-Signature=2c8996de97121793a1f87dfa3b04c20839f52639d120f0e59f2e79b02b5f2d98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LKFTF4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAE8ol1MA3grKhYPc3PYV4IzGSlDr0%2FVhAK%2FA63gFzpQIga9crYoVTAE5HjdCxNmNpK3hoINsmKUL46CwuPiStotkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLTT6L%2FFkiJiBScYgCrcA%2FWEkQd%2BZd%2Fty0Efl9HRLcEQQQtZt%2BwOlEJe835zrbr5Tg9qcs16A%2Bp%2BBoAM%2BlXvgJ%2BxTem%2FwcLRQlLBl3tzBWmkCmHj9EX5was2lfIYKmFavWRy9O7c4bhAFOYMRXcHMFEIXD8H4gnCPYQ2kEDTbVF1j8iM7YpP3Z6diW%2F5DvpN%2Bxj%2FqXCzn467BZb5Q7FR6v0CeV%2FAiCR5MymtASwYZobfOpq50vhxl82l1wCKBowmS8mTt%2BwPWiHkGgS9JmNDQEE7qxxuYw6UDAA1nu7CILTeqhmpTv2Tkxx0rKsYBukhyj2GZzZpfkV0lP%2FloMus9gB1C9KuY5ygCfIFe%2BoS4NiWNmK%2FDksvfNROshSdZOHlxvFr1x9fk9KvH9dBJIwUBXRWEjuRrhWpoxQisnoetymmdZP1ZlSksPBvwfTjOhfFPQ9kA9kZsKUvGtvRfZQixNUlj66Kqao7mo8jY%2B4twfc1K%2BNPL%2FNYbRxjrv9%2BzybzRy05v4YZG43kW5WQOfL7%2Fy5fMct1U0RqtihXpBemA%2Fn%2B4EX7oP99qbGkQfPO%2FBxN6wsuMWsTGij9y7j5Si7JICBnqFgi9jT49nZ9Pn6e5MP%2BG5zGpk0WRXyqV%2F8yrlqoKbsx0F1siGjYdS0wMJzrzsQGOqUBneibFHTMClPZ6BdN%2FwcZB1iN5%2BYHa7SxmqKjPk1lovYj1g23Fq0CghF6c9ARlqTzLaahdE0a9F9jatgGifnTbxQc%2FIkqYGbxiEUiCWGNkX8D5aj6WnBSpgIarWpodwt6lNpvqyiyE0WbCIgVvZTtnTbj%2BYp4ym332o2wJXRuUqizytA3jpyp1EX%2BtmCemdlGJ1EbqDzVs1v1vzQ0vEfhbqfbdIIL&X-Amz-Signature=47c5521f3c4f660f2fdc6ac9559e4bc65d1dd6d2e24a116bb18cf5fcd168d02c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LKFTF4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAE8ol1MA3grKhYPc3PYV4IzGSlDr0%2FVhAK%2FA63gFzpQIga9crYoVTAE5HjdCxNmNpK3hoINsmKUL46CwuPiStotkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLTT6L%2FFkiJiBScYgCrcA%2FWEkQd%2BZd%2Fty0Efl9HRLcEQQQtZt%2BwOlEJe835zrbr5Tg9qcs16A%2Bp%2BBoAM%2BlXvgJ%2BxTem%2FwcLRQlLBl3tzBWmkCmHj9EX5was2lfIYKmFavWRy9O7c4bhAFOYMRXcHMFEIXD8H4gnCPYQ2kEDTbVF1j8iM7YpP3Z6diW%2F5DvpN%2Bxj%2FqXCzn467BZb5Q7FR6v0CeV%2FAiCR5MymtASwYZobfOpq50vhxl82l1wCKBowmS8mTt%2BwPWiHkGgS9JmNDQEE7qxxuYw6UDAA1nu7CILTeqhmpTv2Tkxx0rKsYBukhyj2GZzZpfkV0lP%2FloMus9gB1C9KuY5ygCfIFe%2BoS4NiWNmK%2FDksvfNROshSdZOHlxvFr1x9fk9KvH9dBJIwUBXRWEjuRrhWpoxQisnoetymmdZP1ZlSksPBvwfTjOhfFPQ9kA9kZsKUvGtvRfZQixNUlj66Kqao7mo8jY%2B4twfc1K%2BNPL%2FNYbRxjrv9%2BzybzRy05v4YZG43kW5WQOfL7%2Fy5fMct1U0RqtihXpBemA%2Fn%2B4EX7oP99qbGkQfPO%2FBxN6wsuMWsTGij9y7j5Si7JICBnqFgi9jT49nZ9Pn6e5MP%2BG5zGpk0WRXyqV%2F8yrlqoKbsx0F1siGjYdS0wMJzrzsQGOqUBneibFHTMClPZ6BdN%2FwcZB1iN5%2BYHa7SxmqKjPk1lovYj1g23Fq0CghF6c9ARlqTzLaahdE0a9F9jatgGifnTbxQc%2FIkqYGbxiEUiCWGNkX8D5aj6WnBSpgIarWpodwt6lNpvqyiyE0WbCIgVvZTtnTbj%2BYp4ym332o2wJXRuUqizytA3jpyp1EX%2BtmCemdlGJ1EbqDzVs1v1vzQ0vEfhbqfbdIIL&X-Amz-Signature=ed3a7e19ffbeff29d4f5def779a439689e5f6a1f819f33df2919901ced0091e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LKFTF4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAE8ol1MA3grKhYPc3PYV4IzGSlDr0%2FVhAK%2FA63gFzpQIga9crYoVTAE5HjdCxNmNpK3hoINsmKUL46CwuPiStotkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLTT6L%2FFkiJiBScYgCrcA%2FWEkQd%2BZd%2Fty0Efl9HRLcEQQQtZt%2BwOlEJe835zrbr5Tg9qcs16A%2Bp%2BBoAM%2BlXvgJ%2BxTem%2FwcLRQlLBl3tzBWmkCmHj9EX5was2lfIYKmFavWRy9O7c4bhAFOYMRXcHMFEIXD8H4gnCPYQ2kEDTbVF1j8iM7YpP3Z6diW%2F5DvpN%2Bxj%2FqXCzn467BZb5Q7FR6v0CeV%2FAiCR5MymtASwYZobfOpq50vhxl82l1wCKBowmS8mTt%2BwPWiHkGgS9JmNDQEE7qxxuYw6UDAA1nu7CILTeqhmpTv2Tkxx0rKsYBukhyj2GZzZpfkV0lP%2FloMus9gB1C9KuY5ygCfIFe%2BoS4NiWNmK%2FDksvfNROshSdZOHlxvFr1x9fk9KvH9dBJIwUBXRWEjuRrhWpoxQisnoetymmdZP1ZlSksPBvwfTjOhfFPQ9kA9kZsKUvGtvRfZQixNUlj66Kqao7mo8jY%2B4twfc1K%2BNPL%2FNYbRxjrv9%2BzybzRy05v4YZG43kW5WQOfL7%2Fy5fMct1U0RqtihXpBemA%2Fn%2B4EX7oP99qbGkQfPO%2FBxN6wsuMWsTGij9y7j5Si7JICBnqFgi9jT49nZ9Pn6e5MP%2BG5zGpk0WRXyqV%2F8yrlqoKbsx0F1siGjYdS0wMJzrzsQGOqUBneibFHTMClPZ6BdN%2FwcZB1iN5%2BYHa7SxmqKjPk1lovYj1g23Fq0CghF6c9ARlqTzLaahdE0a9F9jatgGifnTbxQc%2FIkqYGbxiEUiCWGNkX8D5aj6WnBSpgIarWpodwt6lNpvqyiyE0WbCIgVvZTtnTbj%2BYp4ym332o2wJXRuUqizytA3jpyp1EX%2BtmCemdlGJ1EbqDzVs1v1vzQ0vEfhbqfbdIIL&X-Amz-Signature=ed88705b0ed833bba01ef867a940bc146e8d8822aa2015e116a7b6697bb1f24e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LKFTF4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAE8ol1MA3grKhYPc3PYV4IzGSlDr0%2FVhAK%2FA63gFzpQIga9crYoVTAE5HjdCxNmNpK3hoINsmKUL46CwuPiStotkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLTT6L%2FFkiJiBScYgCrcA%2FWEkQd%2BZd%2Fty0Efl9HRLcEQQQtZt%2BwOlEJe835zrbr5Tg9qcs16A%2Bp%2BBoAM%2BlXvgJ%2BxTem%2FwcLRQlLBl3tzBWmkCmHj9EX5was2lfIYKmFavWRy9O7c4bhAFOYMRXcHMFEIXD8H4gnCPYQ2kEDTbVF1j8iM7YpP3Z6diW%2F5DvpN%2Bxj%2FqXCzn467BZb5Q7FR6v0CeV%2FAiCR5MymtASwYZobfOpq50vhxl82l1wCKBowmS8mTt%2BwPWiHkGgS9JmNDQEE7qxxuYw6UDAA1nu7CILTeqhmpTv2Tkxx0rKsYBukhyj2GZzZpfkV0lP%2FloMus9gB1C9KuY5ygCfIFe%2BoS4NiWNmK%2FDksvfNROshSdZOHlxvFr1x9fk9KvH9dBJIwUBXRWEjuRrhWpoxQisnoetymmdZP1ZlSksPBvwfTjOhfFPQ9kA9kZsKUvGtvRfZQixNUlj66Kqao7mo8jY%2B4twfc1K%2BNPL%2FNYbRxjrv9%2BzybzRy05v4YZG43kW5WQOfL7%2Fy5fMct1U0RqtihXpBemA%2Fn%2B4EX7oP99qbGkQfPO%2FBxN6wsuMWsTGij9y7j5Si7JICBnqFgi9jT49nZ9Pn6e5MP%2BG5zGpk0WRXyqV%2F8yrlqoKbsx0F1siGjYdS0wMJzrzsQGOqUBneibFHTMClPZ6BdN%2FwcZB1iN5%2BYHa7SxmqKjPk1lovYj1g23Fq0CghF6c9ARlqTzLaahdE0a9F9jatgGifnTbxQc%2FIkqYGbxiEUiCWGNkX8D5aj6WnBSpgIarWpodwt6lNpvqyiyE0WbCIgVvZTtnTbj%2BYp4ym332o2wJXRuUqizytA3jpyp1EX%2BtmCemdlGJ1EbqDzVs1v1vzQ0vEfhbqfbdIIL&X-Amz-Signature=af0aae9d6e0f0c97c7614a357dca945fe316497793dca788321f6ad74635ada8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LKFTF4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAE8ol1MA3grKhYPc3PYV4IzGSlDr0%2FVhAK%2FA63gFzpQIga9crYoVTAE5HjdCxNmNpK3hoINsmKUL46CwuPiStotkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLTT6L%2FFkiJiBScYgCrcA%2FWEkQd%2BZd%2Fty0Efl9HRLcEQQQtZt%2BwOlEJe835zrbr5Tg9qcs16A%2Bp%2BBoAM%2BlXvgJ%2BxTem%2FwcLRQlLBl3tzBWmkCmHj9EX5was2lfIYKmFavWRy9O7c4bhAFOYMRXcHMFEIXD8H4gnCPYQ2kEDTbVF1j8iM7YpP3Z6diW%2F5DvpN%2Bxj%2FqXCzn467BZb5Q7FR6v0CeV%2FAiCR5MymtASwYZobfOpq50vhxl82l1wCKBowmS8mTt%2BwPWiHkGgS9JmNDQEE7qxxuYw6UDAA1nu7CILTeqhmpTv2Tkxx0rKsYBukhyj2GZzZpfkV0lP%2FloMus9gB1C9KuY5ygCfIFe%2BoS4NiWNmK%2FDksvfNROshSdZOHlxvFr1x9fk9KvH9dBJIwUBXRWEjuRrhWpoxQisnoetymmdZP1ZlSksPBvwfTjOhfFPQ9kA9kZsKUvGtvRfZQixNUlj66Kqao7mo8jY%2B4twfc1K%2BNPL%2FNYbRxjrv9%2BzybzRy05v4YZG43kW5WQOfL7%2Fy5fMct1U0RqtihXpBemA%2Fn%2B4EX7oP99qbGkQfPO%2FBxN6wsuMWsTGij9y7j5Si7JICBnqFgi9jT49nZ9Pn6e5MP%2BG5zGpk0WRXyqV%2F8yrlqoKbsx0F1siGjYdS0wMJzrzsQGOqUBneibFHTMClPZ6BdN%2FwcZB1iN5%2BYHa7SxmqKjPk1lovYj1g23Fq0CghF6c9ARlqTzLaahdE0a9F9jatgGifnTbxQc%2FIkqYGbxiEUiCWGNkX8D5aj6WnBSpgIarWpodwt6lNpvqyiyE0WbCIgVvZTtnTbj%2BYp4ym332o2wJXRuUqizytA3jpyp1EX%2BtmCemdlGJ1EbqDzVs1v1vzQ0vEfhbqfbdIIL&X-Amz-Signature=52c549166e32e9ad720fd670a4be2122649366600ef5610c01f239039a60e644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LKFTF4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAE8ol1MA3grKhYPc3PYV4IzGSlDr0%2FVhAK%2FA63gFzpQIga9crYoVTAE5HjdCxNmNpK3hoINsmKUL46CwuPiStotkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLTT6L%2FFkiJiBScYgCrcA%2FWEkQd%2BZd%2Fty0Efl9HRLcEQQQtZt%2BwOlEJe835zrbr5Tg9qcs16A%2Bp%2BBoAM%2BlXvgJ%2BxTem%2FwcLRQlLBl3tzBWmkCmHj9EX5was2lfIYKmFavWRy9O7c4bhAFOYMRXcHMFEIXD8H4gnCPYQ2kEDTbVF1j8iM7YpP3Z6diW%2F5DvpN%2Bxj%2FqXCzn467BZb5Q7FR6v0CeV%2FAiCR5MymtASwYZobfOpq50vhxl82l1wCKBowmS8mTt%2BwPWiHkGgS9JmNDQEE7qxxuYw6UDAA1nu7CILTeqhmpTv2Tkxx0rKsYBukhyj2GZzZpfkV0lP%2FloMus9gB1C9KuY5ygCfIFe%2BoS4NiWNmK%2FDksvfNROshSdZOHlxvFr1x9fk9KvH9dBJIwUBXRWEjuRrhWpoxQisnoetymmdZP1ZlSksPBvwfTjOhfFPQ9kA9kZsKUvGtvRfZQixNUlj66Kqao7mo8jY%2B4twfc1K%2BNPL%2FNYbRxjrv9%2BzybzRy05v4YZG43kW5WQOfL7%2Fy5fMct1U0RqtihXpBemA%2Fn%2B4EX7oP99qbGkQfPO%2FBxN6wsuMWsTGij9y7j5Si7JICBnqFgi9jT49nZ9Pn6e5MP%2BG5zGpk0WRXyqV%2F8yrlqoKbsx0F1siGjYdS0wMJzrzsQGOqUBneibFHTMClPZ6BdN%2FwcZB1iN5%2BYHa7SxmqKjPk1lovYj1g23Fq0CghF6c9ARlqTzLaahdE0a9F9jatgGifnTbxQc%2FIkqYGbxiEUiCWGNkX8D5aj6WnBSpgIarWpodwt6lNpvqyiyE0WbCIgVvZTtnTbj%2BYp4ym332o2wJXRuUqizytA3jpyp1EX%2BtmCemdlGJ1EbqDzVs1v1vzQ0vEfhbqfbdIIL&X-Amz-Signature=e40c218f6f6b0cce5a76fcbbf1dcd111582b930c286b1b44c7349a7fb9f24015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LKFTF4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAE8ol1MA3grKhYPc3PYV4IzGSlDr0%2FVhAK%2FA63gFzpQIga9crYoVTAE5HjdCxNmNpK3hoINsmKUL46CwuPiStotkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLTT6L%2FFkiJiBScYgCrcA%2FWEkQd%2BZd%2Fty0Efl9HRLcEQQQtZt%2BwOlEJe835zrbr5Tg9qcs16A%2Bp%2BBoAM%2BlXvgJ%2BxTem%2FwcLRQlLBl3tzBWmkCmHj9EX5was2lfIYKmFavWRy9O7c4bhAFOYMRXcHMFEIXD8H4gnCPYQ2kEDTbVF1j8iM7YpP3Z6diW%2F5DvpN%2Bxj%2FqXCzn467BZb5Q7FR6v0CeV%2FAiCR5MymtASwYZobfOpq50vhxl82l1wCKBowmS8mTt%2BwPWiHkGgS9JmNDQEE7qxxuYw6UDAA1nu7CILTeqhmpTv2Tkxx0rKsYBukhyj2GZzZpfkV0lP%2FloMus9gB1C9KuY5ygCfIFe%2BoS4NiWNmK%2FDksvfNROshSdZOHlxvFr1x9fk9KvH9dBJIwUBXRWEjuRrhWpoxQisnoetymmdZP1ZlSksPBvwfTjOhfFPQ9kA9kZsKUvGtvRfZQixNUlj66Kqao7mo8jY%2B4twfc1K%2BNPL%2FNYbRxjrv9%2BzybzRy05v4YZG43kW5WQOfL7%2Fy5fMct1U0RqtihXpBemA%2Fn%2B4EX7oP99qbGkQfPO%2FBxN6wsuMWsTGij9y7j5Si7JICBnqFgi9jT49nZ9Pn6e5MP%2BG5zGpk0WRXyqV%2F8yrlqoKbsx0F1siGjYdS0wMJzrzsQGOqUBneibFHTMClPZ6BdN%2FwcZB1iN5%2BYHa7SxmqKjPk1lovYj1g23Fq0CghF6c9ARlqTzLaahdE0a9F9jatgGifnTbxQc%2FIkqYGbxiEUiCWGNkX8D5aj6WnBSpgIarWpodwt6lNpvqyiyE0WbCIgVvZTtnTbj%2BYp4ym332o2wJXRuUqizytA3jpyp1EX%2BtmCemdlGJ1EbqDzVs1v1vzQ0vEfhbqfbdIIL&X-Amz-Signature=8c8e35033a0711f601afc655025c3f42937ade4ee32dbf957b058f4f0433655e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7FIQLVJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIB3mj39BjKVGXYbL9w%2B3Ecr1cBlgWZnowduMazRbOZDxAiEAuwPUcQuL8d6vlPdo8Pg3yNUd9NrwENuJt4Q%2FuZ35kCoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDGRLPZqYqbwN%2FU%2BfcyrcA%2F2BtVdAWgNz8bIZuZChROpnIPFoUsDmsDsPVt39336Bsgds2fhAWu3PJLpZFK5OB5Gn9P4uhGngrFlPKSj3kd7A6eiXEGpUFwEjCtFaGpe8KP4JsQL8cbK5RsjsEQ4pHDLGfSG8qy76T9UGNyAiNhdSJNmatxgTiJDk7tUOwz%2BDL7v7%2F%2F%2BgXDZmdZs%2BA2lijumrJilEiRMMERxPtmkxyQpbIcBQVP%2B%2FSum78GJWn3A5gN0KEJL00iyw2Gsnt%2BZVPdbhHZowAtx%2BYrcbbYZclS%2BVIVnyYmsKiqG63OA2bxdoqby52kH3gDNMk1CWRcuPbTcdQR25B7Ae2Ka7huRRVeMav4ZUFeGBYokSdDMcnvUdnlP5Eopu4dF9TRT7q5xWpWfrDCS1UixelCZ9VODnwIBvUUz9QDXrrus%2FOJjqbatZwKjuMOW5E7oD01auMW8YZcSU0hW4yGbvmzj2TNwakbtNg5loVxRLyoNOJNXp1YQHqT3pbJ9RKQXkKkplq%2FZEITZL%2FEm8Vqr%2BQ8KUz2T8cST8B3hfHCSJ0sM3nCwuMbtn5OX2U3wKo7Bdt9xP8iLqBK7m5KeaGX5jowDQHssnl8KNUU3pjyckIYQROVgHPJA%2BpmhF%2Fgnax9gqJshuMMLqzsQGOqUBAr284mNBPrNdArr7SLvyMLexTgF2AdJjgu%2Fyvq%2Btl1QzlBTDU0Gk4zU%2BuVYPTcy%2B7gibVmkQxS5O%2F7FLS%2BtCExsIt7W7UaA4UbmeglT5EP3ta9uBGmsZWeZVkeTWxjVjMF5KhHocLQiryh%2B7YlFonvpQGlfjSZ5tXMqlFNVlDhfethM4SqLnpRyL8jaENaw4afRapSPwGu0gmeiOPl2me7zULx%2F6&X-Amz-Signature=ecefd41cf07889b49a3aca942e576343de15110bd264eecdcef4f60ec3e4c119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6MX4WUA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIA8GgzuSvcH5kItV1%2BBkgRpFnCE3vxcUI7XCvhLuqkMHAiAzKRjw2GkRv05pYgmnkID3mAP2viJUyX5dTT6kusTO6Sr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMb92mDEg2b7w5t6wiKtwD50YXIjJneM07vQvf5vjj6%2B5lxKbDAkfaG4nMOIGc%2FX10tBErTGsQvqNn58ziStAupE8Wofycc5sz2vyzS5xSydmw1eIhYaNYENNWvvcZIDbE0jNQ%2F%2FwetqdV4QwPvy9SCFiuEI%2B1%2FE5qlaRft09UmsUxxsHZvty2Dvd0fRSLwN5Gxep5eG9bMFVO%2BYaGXoNl0%2BZamelvXpq7BXu58FvEbAseslnoX7XO8f%2B2i7x1pKsLDAiYYvTLF%2BkyT1Hjks8S3x3LPo1o%2FEQosmZ%2FJZnzAHFJt3uW0wI0Rltn4szEoKmA9EcXUjLSFoMYuyP9dAfiwTPAaRYGRCvflXbadNk2SizCdR167KzTBCGUGj95OZs%2FeBMPOVh3VviadtL5Rd63EYMUcugt5nwhg8G%2BX39nCPfgqZABIHJ7nJ8%2BVUvLhBv8ag88VpR0NMW94CTzzEqtSENHkSaX9xT5t%2BLm1Mf9vvWT2wv%2F3dlGcqf%2BEEH0qQu3pJqZly%2F%2FmjIxCNvSsMrLqjLnPHJfxDpyh6hto6UiiOFlet3m2fT5QE7%2F5mvV96IFKBjwlvaRV0Kef%2F5mtCnGwAiWcorRkKu2X1OG%2FeodgrNdba345bBJN3xhDSKdWIesL4ENn4hf1LG7YfkwuerOxAY6pgGidys1qEtV9YTwer1O8lTBo3hORetc71XPWWyRtZpAoTrlOQ0G8cY9HjkeliJahVM%2FJFeY%2FjAf%2BaTdA57yEiQI3BJqrqUnUiUcP7pdWgocTOaTPOkiIM8p2fwSomIgXHrWbO0b9bjVNTS9W1ckNr81ZXcCFRNFHbGqJESWqAdL9uexsFM7vH%2FGe4prA13qFguHod0EfydBl3ympU1mLqMvM4yIkfCb&X-Amz-Signature=3458ad3f57f92f2f1d6342011ba9d31670754d4dd95b6ab3d208acb91f340860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RF3VSAI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD3d40ctp%2BBnIWIBu%2F%2Bk5R1mjPph2z5%2BLItRIXAkQryPAIgX6K0mrFO9lwKBe9N%2BXAeeoJ1hnz22Q7wZ7gpeR7YmzQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLoeiydnns33K%2BIZfSrcAxg2iPAeQQLrpw%2FcPv0oWvLQ2g9174ptE3eOok6R2bnT190WBNvPNuKfFZFKl4Pip%2BN1xxvg0jO2TexY%2FWHxG2JN5Y84LHvIJS9%2B2xmJM9wUqvZc7X8FkIeCAps7DCIhDGROnQzNwVB27u0l8siblAVoTZJBHB0REp8USxGCdjIyLMuHwXJN7uGzubi38fNCqDJYqauxG6YU0SDwxiSQWNJkec%2Fvekg2pvofhpN4TwxRXVXhQD26asB5qHgszEOV%2F0yHA%2BISMns%2Bs8Z6xebOtMZQHy9Ytq6SYc6Bz69Tz8fpaKbpkMbknT%2B%2FXMvNjHWFghwuo%2F9PxJCWvde8xA18%2FfScLadfE%2FC1fN5jGrUT9kYNtoNVCSLtiAd0Ebj2tAoCG13YEMabiU4LOpyfEnlLAUdRNHZZ0kt3cSlRWXOf4i3zJ66BCZTVXIci47DKiZJESat4xE1VHGzxJpPEx0ZkfXn1NJHAyx0TwmIlTDHCy97DepuyUrCFHUB3o4rfi%2FhNcfrHFRJAuhzSOVgfF5ou3tguJjWBYUPhdzTgV4h2fip70SXyrEbQN25W9UKt8RXutTSC%2FX8G2ittAwgJvzCC0NYGmp7XcOn3uNKln8UF0ycgyszQeCv17J%2FNvwKfMJrrzsQGOqUB%2FD0OJeJmcxLviHwA5RHp0bmzuaBfhaH89dExsqHvha9bYzQgmw137KsnE98bedADTl%2FzIbZI%2FpVW5eerY%2FCFiKZDm8iyNQQDSsX%2Fq%2FFqVYuAUhvCvBMLzpBnI%2FoDe9tF%2FqeH2ogFTLA%2FW0Ww7UINMr8ixg1gaGnRP1d2D9y07%2BTR2t55kfUV62ZI71YurFt%2Brzdd2XtZpeZ%2BIEcSfnMs8sGLOlSC&X-Amz-Signature=e81cd9f1078203d25b3ae424e2a92f2202c98a3c96bd4cc15e03bdfc4b8e81e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LKFTF4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAE8ol1MA3grKhYPc3PYV4IzGSlDr0%2FVhAK%2FA63gFzpQIga9crYoVTAE5HjdCxNmNpK3hoINsmKUL46CwuPiStotkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLTT6L%2FFkiJiBScYgCrcA%2FWEkQd%2BZd%2Fty0Efl9HRLcEQQQtZt%2BwOlEJe835zrbr5Tg9qcs16A%2Bp%2BBoAM%2BlXvgJ%2BxTem%2FwcLRQlLBl3tzBWmkCmHj9EX5was2lfIYKmFavWRy9O7c4bhAFOYMRXcHMFEIXD8H4gnCPYQ2kEDTbVF1j8iM7YpP3Z6diW%2F5DvpN%2Bxj%2FqXCzn467BZb5Q7FR6v0CeV%2FAiCR5MymtASwYZobfOpq50vhxl82l1wCKBowmS8mTt%2BwPWiHkGgS9JmNDQEE7qxxuYw6UDAA1nu7CILTeqhmpTv2Tkxx0rKsYBukhyj2GZzZpfkV0lP%2FloMus9gB1C9KuY5ygCfIFe%2BoS4NiWNmK%2FDksvfNROshSdZOHlxvFr1x9fk9KvH9dBJIwUBXRWEjuRrhWpoxQisnoetymmdZP1ZlSksPBvwfTjOhfFPQ9kA9kZsKUvGtvRfZQixNUlj66Kqao7mo8jY%2B4twfc1K%2BNPL%2FNYbRxjrv9%2BzybzRy05v4YZG43kW5WQOfL7%2Fy5fMct1U0RqtihXpBemA%2Fn%2B4EX7oP99qbGkQfPO%2FBxN6wsuMWsTGij9y7j5Si7JICBnqFgi9jT49nZ9Pn6e5MP%2BG5zGpk0WRXyqV%2F8yrlqoKbsx0F1siGjYdS0wMJzrzsQGOqUBneibFHTMClPZ6BdN%2FwcZB1iN5%2BYHa7SxmqKjPk1lovYj1g23Fq0CghF6c9ARlqTzLaahdE0a9F9jatgGifnTbxQc%2FIkqYGbxiEUiCWGNkX8D5aj6WnBSpgIarWpodwt6lNpvqyiyE0WbCIgVvZTtnTbj%2BYp4ym332o2wJXRuUqizytA3jpyp1EX%2BtmCemdlGJ1EbqDzVs1v1vzQ0vEfhbqfbdIIL&X-Amz-Signature=1953016a764040cb0164b4824ddc805572d35c4507b0db12f209532d350ea0b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W4NGZYZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEFIsOgKhrG0pHRaIDQTJNz52fwtRmsETGWDyWPrCWTbAiACPj4vnGUKgpCGmliifSxt1uG3310T8cECcsGLTv1zGir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMpO0eWDCRXQLr4LpMKtwDONksjoJuVTEDd61Pe%2FIIyRWDcK68IXL7LeIpfhq86QV7dEw%2F3c7B2RTtWbbJUbHb4WJcaw6UDcxYKMgk%2FmDJbQCsCyOLtERzf%2F6eFzHCHEa0pVubpF12Yr3KPY1N1ogj7p%2FXfd7ex4D%2FuOb6bzKO1ZWXs36jZXxDaNxUcppui4j%2BgrwIW%2B5SV46vF%2FcvntfIyMEKIxs6Wueo3b%2BRam%2BTPm6MDaJbtO%2BgFXIPJcjlvas4RjfD%2BIa3fH%2BsqpxEOBuRq4XixQGhRYE0HKkPMkFPHdYMPkyGhOtVQVtcvq1w68dS%2BK2LBuHILsCSE7dt2is2%2BT%2FC9cm5sDDbQ1LKbLb6IXRqOq25VCEJrmgccnRaEzzyREQ8CC%2BUvvkJwr3uRU1QefnyA88viHpP2rWaRamaeXALijqenwoCNfZ7V4amJtMjHoZ6TFaLEBQ5Bwmea61nG2uZrCpt9AiTxCqUCYiI%2B1rM%2FRcqA52iA8EZLqDwRyq0AWx7qvliUikhhYDj5bL52NqZDcwddVlx8Ol9JcPm982lGTTqPSgQrlswjtFFxMn1%2BH9PWk%2FRADUZ%2Bhcm5DVLz%2FAVeEhpepLB3SeypDLJEjnXPKSZ6iUNJbvcP8d1eL9e6Nbs0Taur6nTn2sw8erOxAY6pgFMsjlVC3nDPTcyqXXJmU1wUl3KIBmxhADV8ICmxLvxSsqeybTEtYLMS7yo9%2FBHRnt6HWEAKW%2FmD26y6RByXS5LRr0eDC9PR6D1kGkx%2FrNAjOXF%2Fo9f83sGGD5KnHP96krXU6kgFJQaLhN9WvxhW3D2LIGzArP3oRwOhL5ycMaw0tgAThlZumYrTisoERqZPTqHGW32%2BKZvxwiwAJqJ7iRTvidkKXPA&X-Amz-Signature=b31eee879437e46090e28d7663367de3dbba05481b0791a0cc5404355d7a606b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LKFTF4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAE8ol1MA3grKhYPc3PYV4IzGSlDr0%2FVhAK%2FA63gFzpQIga9crYoVTAE5HjdCxNmNpK3hoINsmKUL46CwuPiStotkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLTT6L%2FFkiJiBScYgCrcA%2FWEkQd%2BZd%2Fty0Efl9HRLcEQQQtZt%2BwOlEJe835zrbr5Tg9qcs16A%2Bp%2BBoAM%2BlXvgJ%2BxTem%2FwcLRQlLBl3tzBWmkCmHj9EX5was2lfIYKmFavWRy9O7c4bhAFOYMRXcHMFEIXD8H4gnCPYQ2kEDTbVF1j8iM7YpP3Z6diW%2F5DvpN%2Bxj%2FqXCzn467BZb5Q7FR6v0CeV%2FAiCR5MymtASwYZobfOpq50vhxl82l1wCKBowmS8mTt%2BwPWiHkGgS9JmNDQEE7qxxuYw6UDAA1nu7CILTeqhmpTv2Tkxx0rKsYBukhyj2GZzZpfkV0lP%2FloMus9gB1C9KuY5ygCfIFe%2BoS4NiWNmK%2FDksvfNROshSdZOHlxvFr1x9fk9KvH9dBJIwUBXRWEjuRrhWpoxQisnoetymmdZP1ZlSksPBvwfTjOhfFPQ9kA9kZsKUvGtvRfZQixNUlj66Kqao7mo8jY%2B4twfc1K%2BNPL%2FNYbRxjrv9%2BzybzRy05v4YZG43kW5WQOfL7%2Fy5fMct1U0RqtihXpBemA%2Fn%2B4EX7oP99qbGkQfPO%2FBxN6wsuMWsTGij9y7j5Si7JICBnqFgi9jT49nZ9Pn6e5MP%2BG5zGpk0WRXyqV%2F8yrlqoKbsx0F1siGjYdS0wMJzrzsQGOqUBneibFHTMClPZ6BdN%2FwcZB1iN5%2BYHa7SxmqKjPk1lovYj1g23Fq0CghF6c9ARlqTzLaahdE0a9F9jatgGifnTbxQc%2FIkqYGbxiEUiCWGNkX8D5aj6WnBSpgIarWpodwt6lNpvqyiyE0WbCIgVvZTtnTbj%2BYp4ym332o2wJXRuUqizytA3jpyp1EX%2BtmCemdlGJ1EbqDzVs1v1vzQ0vEfhbqfbdIIL&X-Amz-Signature=6356e1e9e9ac78e0f37c16e9611e77242f7896048867f5911a07f3235319fdf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ4T6BJ7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBw5wmsiabdHBPHQYzULDZ9Nl4RDQd7n4J4VST4HTvfWAiEAmMKGMAmnafmC%2F0tQjN%2FgONjktfvcXnCeTqIPRgVCvBEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJFiw4RSgqLYHafbICrcA%2BnlIt8g6jnp3aJVp0PTGO2zlAfR3JGGu0b2VrQ0bZ%2BkvJIxQ2C%2FRxsc1uvaMTd3faKbnujITDrNukJdFDX6Kdqg2qGmT73EiP7Y4fIiRWMDQKYBUVijPuHrlBreR92VLlECsFw8fteNUTzTfT3kgb11oFbLmeys7rVQMwFYuFw2K4k8EiHS9U0nU%2BGd%2FUA%2Bq6mQt7xKd4e9eVRGJk1GSRClxEj4Yvzae9Z%2BiTFEKyo7RzsNiZqszxqtmakEUdxIdWOEb9%2F5aJVKtkOed4SBnXZo08lCT43O7lLcxOluo2kYGg0Bow%2Fo3VGhQjpttWngGT21yVXK7v8O7bbGvRD7uV5uXQZpPO85m9wfhw3Vnt1eX3l4XGJ8saJSnf%2F4rlZ7QezIw05Mp6zZnrXRXlkkOxSj%2B31rZ9y6y%2BPJWzzIDOK27if4J0iFrVZvQEZoq5%2FCZb4tiO5zshil81P7VNWBMb4dhdfViU98Hnbx%2FYqkBgYMuP0csCceA0VO4J7YFubRQh37JFFZZF9FpFCfmVfBpMemvl92UxepAaJ45q%2FWNnrQe2rrvHlZWNO2YNPIdMURYBQM5fPhtZRon6%2BBQfOVruWFCRnzYrAnr2CH4pwka64YyVYyNEdZ1c58g%2BfIMPTqzsQGOqUBADojKBRRYlS3gRZJlQlanICyyw%2Bn%2BqB7weD8X4imjoscw9VClftqaTzvRjVmBkbQvhIl9b%2Ff4osQoABhA2VdqGerb2mEuqESjxqqOPjP4OU971gsHEpMi3m0rLIRyq31lNqEkaVvUOGG8253MvwPACfchHACMy1EGFD4ALKqDiYckp1kvHIz8L3OqihQdq8pa5odr9qfY1iDP7ZULDAmLJoA2pTy&X-Amz-Signature=6c49eb68ac0c49c1c96fb4f47bfc9236b4475764f31954463fc912771d189003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LKFTF4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAE8ol1MA3grKhYPc3PYV4IzGSlDr0%2FVhAK%2FA63gFzpQIga9crYoVTAE5HjdCxNmNpK3hoINsmKUL46CwuPiStotkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLTT6L%2FFkiJiBScYgCrcA%2FWEkQd%2BZd%2Fty0Efl9HRLcEQQQtZt%2BwOlEJe835zrbr5Tg9qcs16A%2Bp%2BBoAM%2BlXvgJ%2BxTem%2FwcLRQlLBl3tzBWmkCmHj9EX5was2lfIYKmFavWRy9O7c4bhAFOYMRXcHMFEIXD8H4gnCPYQ2kEDTbVF1j8iM7YpP3Z6diW%2F5DvpN%2Bxj%2FqXCzn467BZb5Q7FR6v0CeV%2FAiCR5MymtASwYZobfOpq50vhxl82l1wCKBowmS8mTt%2BwPWiHkGgS9JmNDQEE7qxxuYw6UDAA1nu7CILTeqhmpTv2Tkxx0rKsYBukhyj2GZzZpfkV0lP%2FloMus9gB1C9KuY5ygCfIFe%2BoS4NiWNmK%2FDksvfNROshSdZOHlxvFr1x9fk9KvH9dBJIwUBXRWEjuRrhWpoxQisnoetymmdZP1ZlSksPBvwfTjOhfFPQ9kA9kZsKUvGtvRfZQixNUlj66Kqao7mo8jY%2B4twfc1K%2BNPL%2FNYbRxjrv9%2BzybzRy05v4YZG43kW5WQOfL7%2Fy5fMct1U0RqtihXpBemA%2Fn%2B4EX7oP99qbGkQfPO%2FBxN6wsuMWsTGij9y7j5Si7JICBnqFgi9jT49nZ9Pn6e5MP%2BG5zGpk0WRXyqV%2F8yrlqoKbsx0F1siGjYdS0wMJzrzsQGOqUBneibFHTMClPZ6BdN%2FwcZB1iN5%2BYHa7SxmqKjPk1lovYj1g23Fq0CghF6c9ARlqTzLaahdE0a9F9jatgGifnTbxQc%2FIkqYGbxiEUiCWGNkX8D5aj6WnBSpgIarWpodwt6lNpvqyiyE0WbCIgVvZTtnTbj%2BYp4ym332o2wJXRuUqizytA3jpyp1EX%2BtmCemdlGJ1EbqDzVs1v1vzQ0vEfhbqfbdIIL&X-Amz-Signature=6c4f0e633999c98599e3f2d87e13d93ce9e32a093c5503b908eccb3bb795141a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLORMRL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGzSsRO7BEqByi58s%2BzdBiaTor6l7Pnf1NpAA%2BkzxA0WAiAeeUTk5lzkrk1Qgm2IyNafRhgBuzW%2B7IppelSC1SztWSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMGXlLwC23pXJHLV2XKtwDT9%2Fdgzt8zHJw76IfXbh58vDz7M4AdTsPyNUPqFwAg3Do1saRXkUxFTI7cnpyewN7GCJoFFr3kry9ueauqm6gs%2BmJa%2Fe64%2BLPmhV1ioNTzxZw40nhoV%2BP0ooaf%2BJDi1CMZLzAZOUwI1s%2FmrayA7TXZnjdmMclbFdHpq1P3NUY6QvuC7gGzvlKArKdIm22RKyc%2Fz8DwYmznqPqtvJC%2FwDDca1VyoJid7GDqYYhY95phoNIID2UVnnPpqAYaLcBxN86duK2Dqocj6L79ir1WxLOIt1gV%2Bhn4hpddJkykkBKtTutYSdZlGQhGkqhU2KHuKoRkLdMnmIIYGmXz9580ufpHrGDQ9KCv9%2F5jzOU9RwGNQ5Vf8kJ%2FI6Up6fNCf4oIQ5uSQwbqOy1gcWU9IaU5qbj8Qbmi%2FI9C6KqTIqSLhi1WzNkInKDrb3NqEHPKXTjxFaWVE%2BGYZO%2FV30POVa6psGL%2FYATW9eNldwR414Hm86B7ORLnc%2Bd8l34ggguWDz%2BEhAxkpQfGupVV5z9rafkJ9rCKOO7eZ%2FB8m%2Be754Z9FgG1ka6b9FIyZt%2B9maulPUTc5yDkn3jP7jxg35pLU494k97TFgSXWxevjqfIRviTu%2BlcTf80zNdsXZqEXMwCM8w3%2BrOxAY6pgHLEUX5wjTm%2FlEevsyw2hAuzZ8xYNsaTASdTX6mG%2BCTybCJpZVCaxsfMZlOe6ef%2BLQ%2Fnqi%2B9Y7LuMyYVQR7aTqhwR%2BTn8Hn4%2B8MWz65f6M8WzgLcQ%2B5jZGGiXnNw6026z09X911I6R2LI9zapsBXdmevOSKgzirkY73YbjYxCMwIifz5rAItf7vXpAk95JzaSJYnd4RuFGz5ts%2Fpk4lVeFaI0flVjHv&X-Amz-Signature=0b7eaeffeeb124676a95970dde6ea8b0f0223c555eb8214c79a07099df2bf5eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LKFTF4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAE8ol1MA3grKhYPc3PYV4IzGSlDr0%2FVhAK%2FA63gFzpQIga9crYoVTAE5HjdCxNmNpK3hoINsmKUL46CwuPiStotkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLTT6L%2FFkiJiBScYgCrcA%2FWEkQd%2BZd%2Fty0Efl9HRLcEQQQtZt%2BwOlEJe835zrbr5Tg9qcs16A%2Bp%2BBoAM%2BlXvgJ%2BxTem%2FwcLRQlLBl3tzBWmkCmHj9EX5was2lfIYKmFavWRy9O7c4bhAFOYMRXcHMFEIXD8H4gnCPYQ2kEDTbVF1j8iM7YpP3Z6diW%2F5DvpN%2Bxj%2FqXCzn467BZb5Q7FR6v0CeV%2FAiCR5MymtASwYZobfOpq50vhxl82l1wCKBowmS8mTt%2BwPWiHkGgS9JmNDQEE7qxxuYw6UDAA1nu7CILTeqhmpTv2Tkxx0rKsYBukhyj2GZzZpfkV0lP%2FloMus9gB1C9KuY5ygCfIFe%2BoS4NiWNmK%2FDksvfNROshSdZOHlxvFr1x9fk9KvH9dBJIwUBXRWEjuRrhWpoxQisnoetymmdZP1ZlSksPBvwfTjOhfFPQ9kA9kZsKUvGtvRfZQixNUlj66Kqao7mo8jY%2B4twfc1K%2BNPL%2FNYbRxjrv9%2BzybzRy05v4YZG43kW5WQOfL7%2Fy5fMct1U0RqtihXpBemA%2Fn%2B4EX7oP99qbGkQfPO%2FBxN6wsuMWsTGij9y7j5Si7JICBnqFgi9jT49nZ9Pn6e5MP%2BG5zGpk0WRXyqV%2F8yrlqoKbsx0F1siGjYdS0wMJzrzsQGOqUBneibFHTMClPZ6BdN%2FwcZB1iN5%2BYHa7SxmqKjPk1lovYj1g23Fq0CghF6c9ARlqTzLaahdE0a9F9jatgGifnTbxQc%2FIkqYGbxiEUiCWGNkX8D5aj6WnBSpgIarWpodwt6lNpvqyiyE0WbCIgVvZTtnTbj%2BYp4ym332o2wJXRuUqizytA3jpyp1EX%2BtmCemdlGJ1EbqDzVs1v1vzQ0vEfhbqfbdIIL&X-Amz-Signature=e2c2af16b8fe4375b0502bed743a1af7f8d24da435f9dd8faa5862f2765baef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PIP2KXF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQChFumUwVYyurnifZ7JYp5UzwpT23p8uFCj5aHMovHINQIgPQln6U1AKkUclFxw9jn2Cg%2BzO4FXLXvMSHaF1nTNaV8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBObn4P6oG4GaN7xKSrcA8XpTGG7RPFuI1oF7et1vvhHy0QVWuvlA62iMyD5%2BnBWPac7wX23AJbEqYisF8v7zc%2F4Gd74JqyGEDkqjcLe6MLkSSnGZOixgwedemvcTfjeE4GMmNUUOrPzeRPWuVBC7gI0fw6Jt4z0NtSXK28%2FHsMovjnEvqlmMA6Z5YQBEEkEc%2B5FlIcp0g8r54nun%2BPznLEEvPU8K1oXnU72L%2BVycEz19QJFmRiUA5dQ7c8ZoMIbGl%2FLh5vHr5Ka2PoLJwF88tplfnXIzl6AUYRq7Ffo7MxnBnm%2F8hqxQKVW2AQCYGwREHVwAu5dTX1JH0NMKKWe5qjm%2FvYzBbhKtiOYJgquqPOwzV%2FdgzQ1ya9rqQLvam%2F0GQTXze6P5iAMu16cPTmk32tAuHxAZxq%2BVFfLhvAvUc93bi%2Fg3TvcVo882wbLLs7b9zcU%2BN0WOwLibQztXhwnk%2Fstc9N7g3oKYSengoHYIq0WQnj%2BuN%2BVyM8QBdyWcztjcJ%2BKoqWtFoegZZPnP6vjuUtgBv1oQJwrO7AnQtqZ5NJpP7tsyMUoZlWzZjjXzhk3ulJmsPtWoP%2BwVFYqIfPKrdbDqJBBDx1oHn6TLzzi8aCg4qxnFAUGxqF%2F1FUcvkF9NO%2Flf%2FpNYtazhyYsMI3rzsQGOqUBhW1p6yhVuotGfpBE5Z8YmS9Z4At9ysMw4KA0Vx%2BJjkjdsSbkOuvSCoCIPCv1exL0oIdeAQcKVhpKcL6yhT5tJLDjxe%2BtXPKAj15g5ysysBLU8cmHRdXsd3ZnCNBMTbsfemEUdg3eVebG7CqAgMbWxVw9cYOLdBbmqbwOkrmGrpbqap2otFTVkFR0jriWkTafu%2Fgk1%2F7lXcWRHsd2o5ASszxCKpRZ&X-Amz-Signature=b7df742c0f2009b9af2756249af76e31617d6ce1035755aeca714d986fa6566a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOTJ2A7O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFQUNMoI9SKfIdyVVwqzxbBrCphWCYd1vkp2pYz%2BYz57AiAN264NhEO%2F3ssY1DMu8fF4iFysWHTRvVvcea8t4E%2BCZSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM7bHs98DKw2pRbX5yKtwD%2BGTsO28MV9pSHxP2yNhfAB%2FOirFOVyvBmR13Wed6K0xY0aCuJiVE5z%2FozyqrPn1LFQgqKjijOiudhSUxFCBsvvFrq4RsvmLnc8X4uX%2BBKmhVIOyvTAC0EyOS6BaL2qlaJuYX0mo2fQwK4G%2FTAzTp5ILT8g1FjzcWb09x7kcfJnfwl9F5IA83bYgzRSMQ8GnbowO1T94K%2Fd0hsXITOIQ70623BBOzOw0oCAkb%2Bdf7TsC6rz9u1W8x2NkzUSkK6dqqOMOCMt04NYKotQT0sqj9hfb9C2UYYMEkASLUArRXl4zFCacXEaZf%2FqgLxKxlEOYIibhs0s6A2M3XeLVYdCpTapaonXowIx864GoOR9%2BVPa8VYfaP3bAcP8CS9McY%2FI%2FSAgeYA8veDMexKQOjNLbG9nJ6X7aCUYUlYwJ2Is4Britq8cO59jqh%2FkzFJqTZ4zXNb1%2B7KCeJ0ScD4SK9oPfPXJazjngpjny98CRTwMilKix2CA5vpM293cOd5kfkReoB6dg1hfy16BbAlyUePtkzWZlwC8YtBwfyF7EdYdvEj8Dv%2FtAc7ZUCeYWpQ5WNuFdEiBqze7qAgAMDZ8v1LsDzXeAn6Rbsf85XUhNxhYX89NzhD3xHMpR2CQcmymEww%2BrOxAY6pgGfCEZLANO8wrRhQY5Gm7hVtQyB3ueO5wz8lWt6rn2QmXPZNYio6T6rTygMFBLUQgoKb1WTZlC2MAS%2B%2BIwbk1v%2BM6y%2BMZmNKbCBMVAsWijFdPyBgD4l%2B5eU%2FX7O%2F8za%2BnG8cnnAG0e81O8OAZgWFILFfzK9N4VNLFPGL1ANeKab95bJiAZRrlSjGlUqwjwy2M9BCJkZp9rchpxYQ%2BoomVoUMUvhaCvw&X-Amz-Signature=dc5eb72d70377789f0ee12974f998c3427def0f7b79b992cac0acc117bd5a596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TQJ4CUB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDOug%2BPDkzwTE6QDT5A76vgX6%2B7%2FCvxOrJQIKJsUmw5XAiEAlbLPC3gDbib%2FG2qE9Z%2B%2F9dgcawnPULN5oglc7XPScO0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOUON9%2BPNaJpjNYo7CrcAzh2rVwmhoKRQFz06YJPoS9Xs2dIb8kEIKyYre5MwjMXuy8ePnEU2rldeX6pUfYINGYBgmqadEnU4VtVSOUdr4XZ1U7S6drS2Ruf88v7YwnGmqzezqZBjozlV%2F2DtnFTJHZM5Vo1YFb3RHFP0Qx6tMuMHEn9W2Ic5JQvexuJKiekF1gUFVo%2BjTEEltnktgOW7zlRdwFSY2z9gRm4RWWdBaA08hYsc4qsqy9gHp6j2rmvAygG6wO7Ck8JledMtItNs3x%2Fn7QI9m4%2FVvUN6FrN9H9RDu9ZG3lhII10H7RFYNAPIqZfG0J4uEhV5B0pLK22NFxE%2BSpkiZOP4%2BdM%2F85waq0%2BVIfnFPDzs9KeuBA1eS9KrUwIaDLenxila92OGWAcF%2BBgBNu%2FmM4Ua1febFJj4Gj43sM8tBGLmiuzrzFqAthPFv2Qf9f4tMd4ALOszDKji2O6CDRCP8JvAjsEW08iOgFGkKo9x58OB%2BuVMjFzgVKp1Xpxouym7DTOvCFWSZPOd661Z%2Fy%2BuWbxRcwxR5c1TCHhb1QtI9WIhYK3%2BAv7dB9ivWllVPFf8bNkdyLzixrj6clGTsgq4eHkmLxMF5vpD9tUJyUM2XXARj79MB0wc6pvNf0duEZ2E4yOQdn3MOnqzsQGOqUBDlUi74P%2BW1R9sBfEgmIBMtYDIj4KkkcuiWQgSVtxtNqwOxj7LRXSP7YNRV0gFYGkzH9AMFXJcXbHyIWjrr2bw9AivWGlnOn67f6VLlgadQPMsUsUan5Ww3QISMbK4UEeKdAjVOS69HwL2ezGOQFY%2F36NlsXTpIQCwKKxPeb5dikOA71G2mIosEIl%2BtyjA2gET0LK%2Bdee9I2l1ZSwz1e1tMBJBmqg&X-Amz-Signature=e238fa596ef3d69c0b28b7b8a2164ef2a4ead19bd06e66cb943a20cd9107e377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEMCI5IY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDHpThSR3CH1SOyyNRjiDGC2M%2FiQoJG9ZciZAWDTfub9QIhALM8Iw39mdHDwrVWENYU%2B1Xa1TUkvqLM1teZkkgNH7PTKv8DCH0QABoMNjM3NDIzMTgzODA1IgyZg0PE3nso%2FGFh%2FVsq3ANZ1Rvj21Ec9ZAe%2BzKRwB6CJqYPd9lytjInDj2zVF%2F98AMnNm%2FX8Pf%2Ba4YlOz50QxGP8U5WZU79TfhVKRsB40K8cRs7taAR%2BgcrSkoPZ8LymPyYnLhMjvpZt3hYxDBrFkFfztgLXMpAZQ%2BZWpmLeGM63aGcNLM8coMvtA8WRzKdFd0sxVDfyLwWlA5UtURNBGGNeBdeDTlTrBLKgypcRwkjFdAfn2rajwxG1fGHPDWOhPzey7%2BoFjPlPnYekcB6nmM1dTfYQqpQgMLXuVzgq%2F8Ga8IYy3Jx9PSIznzcIwXEyypsB%2Fr%2BmMYRkL3PKptYuomXOnh5W6n5364c2Yb5lP7Hxa%2BP3xixjojUg10jWoq0tis7hYx9I1rEAfFmiT%2BRNH%2BtbzSeric4a70IXIwwurvAa3ww27E%2FLUHQYz94rTQx8cGh6H4Xtl4W%2BVfZuur8%2BYGJOaNj5UsAWIewusAs89QUhQ%2Fmrtqw2JP%2FB%2BVTETSdXCkJtSNsXAgQ05KkEkli41DyJUe%2B1T618mzHOwqYGQOEmDTY5F7efRnlhhhF%2F2y8tPLPTSP9Qya9vWENN5hk%2B1FzWVrp1ZPd%2Fb%2BJNsxp3MSKa1FjGjO0%2Fgb0Wmp9l3PGDHO%2BbUHKzjRDzqn6oDDc6s7EBjqkAa2tp258oW14PrY%2BpYot0kqT7f8d05l0iEw%2BWf71cmW%2FDlSfyAcgqfPq3cHra8Bo0xoUqj7APc8CUtpNo7fjrQ%2BqWtUYY7YnoFR1eP8GBInaUy8goONPqLm3r6KFvxnHzZ1jg90t%2BzelwpIz44lPNdxu8dQf4b1oQQcxYto63%2B16INtSOMQgUA9TBjiS1zNB0c2fQ7jck0Wj3qlLxyzRKAarDtLE&X-Amz-Signature=33bc6bf305a51b12166c97ecc60845d9b546b46b7cf41dc3e9e67269d9b4a1f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4REIFLE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T211000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBB%2Bgm5ZAh94%2BX7F78Y22cOCyIyb2NEqcWroLk6Wt81GAiEAtZm4EMQmbDqfTJl%2BhxL3O8vQ8daMb%2BFpJILQgDUhmzEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDA1ttatxoPuylnWGCircA8KY%2Fod%2F2SXs9kg0rn1a866E0Ir%2Bq3rowCWZ9cZEo9wRz5KRtidRihSMIIzRSQkDPqeE7HSbzF0MEc3bB2Jgp0TdO3mN7lub%2FgQx0rx%2BWS7vsjancOU%2BM5XiIck3Jz8MhuUyMbwUnh5i%2B3kjVbWhpBW8sEAwICezIWdzXRoTXQhiwuhrUQj%2BV7B1Dxo8O%2FVWETMX07y3cjGUlNjqPREyD6lhUXLYE8sCjyD3cxxHMLkWPyuw3csnro5mriiQKXgzJGP4ldVoecBAzMhjWL%2FHKUIrvhqZsBVIFBnsLb%2FbxRt%2FViCKM6XFfVYnOM9sYG5E%2B4ulMMshqq1lHrkbkudFoVNPmBrofmI27VNFHDXq%2FS%2F9EEuZaPa3mFffinFuUVCLNj81wtu5xUF4enabFpygV09MBXIYshzqAn9EBe9xNzv5cjugiUqDlj4QoI6sMsICe6zfS2P43tC%2Fapw8J%2FzSSTFpCf5b4b5Z36vuIk8mELM71H7TkywCUTNTwdwiz98GGMEQrgrB%2BtHQCJFqTJlTRegs3d4xe031rJV42wyeMs%2Fz61u9yfY0%2BJGV7vhqbLpwo8Lblhl%2BRKXrsnPgacphCK91LKGIwhDYAv6ZBeESkwiwGsacwXVAzHXtsP8fMLHqzsQGOqUBgNdYqKQP8Lgk12op05ryeR%2F7DM4QJrbBBje%2FbEEsPY%2Bdizv3dcLdR2b4nGEYEMAz1tqED3TieBw1osFvTBBVuyW4paW%2FTKHlqHwEcJZMu5%2BLcZ%2Fkva6DawerapWpgZRddc%2Be7rpYQ%2Fvdk8PPFLTXQQjWR2tM9nFwuFUpUOWq4Agmkv1o43F2COO9hb8sAYZjBViaaX4V%2FAKKLyHX4jbJqTmBZ2sK&X-Amz-Signature=c8e9acaa76386948b1fce1cb3e054d6a553000509809ca037a8c4f3a0934f596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LKFTF4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAE8ol1MA3grKhYPc3PYV4IzGSlDr0%2FVhAK%2FA63gFzpQIga9crYoVTAE5HjdCxNmNpK3hoINsmKUL46CwuPiStotkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLTT6L%2FFkiJiBScYgCrcA%2FWEkQd%2BZd%2Fty0Efl9HRLcEQQQtZt%2BwOlEJe835zrbr5Tg9qcs16A%2Bp%2BBoAM%2BlXvgJ%2BxTem%2FwcLRQlLBl3tzBWmkCmHj9EX5was2lfIYKmFavWRy9O7c4bhAFOYMRXcHMFEIXD8H4gnCPYQ2kEDTbVF1j8iM7YpP3Z6diW%2F5DvpN%2Bxj%2FqXCzn467BZb5Q7FR6v0CeV%2FAiCR5MymtASwYZobfOpq50vhxl82l1wCKBowmS8mTt%2BwPWiHkGgS9JmNDQEE7qxxuYw6UDAA1nu7CILTeqhmpTv2Tkxx0rKsYBukhyj2GZzZpfkV0lP%2FloMus9gB1C9KuY5ygCfIFe%2BoS4NiWNmK%2FDksvfNROshSdZOHlxvFr1x9fk9KvH9dBJIwUBXRWEjuRrhWpoxQisnoetymmdZP1ZlSksPBvwfTjOhfFPQ9kA9kZsKUvGtvRfZQixNUlj66Kqao7mo8jY%2B4twfc1K%2BNPL%2FNYbRxjrv9%2BzybzRy05v4YZG43kW5WQOfL7%2Fy5fMct1U0RqtihXpBemA%2Fn%2B4EX7oP99qbGkQfPO%2FBxN6wsuMWsTGij9y7j5Si7JICBnqFgi9jT49nZ9Pn6e5MP%2BG5zGpk0WRXyqV%2F8yrlqoKbsx0F1siGjYdS0wMJzrzsQGOqUBneibFHTMClPZ6BdN%2FwcZB1iN5%2BYHa7SxmqKjPk1lovYj1g23Fq0CghF6c9ARlqTzLaahdE0a9F9jatgGifnTbxQc%2FIkqYGbxiEUiCWGNkX8D5aj6WnBSpgIarWpodwt6lNpvqyiyE0WbCIgVvZTtnTbj%2BYp4ym332o2wJXRuUqizytA3jpyp1EX%2BtmCemdlGJ1EbqDzVs1v1vzQ0vEfhbqfbdIIL&X-Amz-Signature=b7b2e944b8b2c76e03a8e9cd3c97fd69ea93a3eebfe767feb993d1a702aacf67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LKFTF4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAE8ol1MA3grKhYPc3PYV4IzGSlDr0%2FVhAK%2FA63gFzpQIga9crYoVTAE5HjdCxNmNpK3hoINsmKUL46CwuPiStotkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLTT6L%2FFkiJiBScYgCrcA%2FWEkQd%2BZd%2Fty0Efl9HRLcEQQQtZt%2BwOlEJe835zrbr5Tg9qcs16A%2Bp%2BBoAM%2BlXvgJ%2BxTem%2FwcLRQlLBl3tzBWmkCmHj9EX5was2lfIYKmFavWRy9O7c4bhAFOYMRXcHMFEIXD8H4gnCPYQ2kEDTbVF1j8iM7YpP3Z6diW%2F5DvpN%2Bxj%2FqXCzn467BZb5Q7FR6v0CeV%2FAiCR5MymtASwYZobfOpq50vhxl82l1wCKBowmS8mTt%2BwPWiHkGgS9JmNDQEE7qxxuYw6UDAA1nu7CILTeqhmpTv2Tkxx0rKsYBukhyj2GZzZpfkV0lP%2FloMus9gB1C9KuY5ygCfIFe%2BoS4NiWNmK%2FDksvfNROshSdZOHlxvFr1x9fk9KvH9dBJIwUBXRWEjuRrhWpoxQisnoetymmdZP1ZlSksPBvwfTjOhfFPQ9kA9kZsKUvGtvRfZQixNUlj66Kqao7mo8jY%2B4twfc1K%2BNPL%2FNYbRxjrv9%2BzybzRy05v4YZG43kW5WQOfL7%2Fy5fMct1U0RqtihXpBemA%2Fn%2B4EX7oP99qbGkQfPO%2FBxN6wsuMWsTGij9y7j5Si7JICBnqFgi9jT49nZ9Pn6e5MP%2BG5zGpk0WRXyqV%2F8yrlqoKbsx0F1siGjYdS0wMJzrzsQGOqUBneibFHTMClPZ6BdN%2FwcZB1iN5%2BYHa7SxmqKjPk1lovYj1g23Fq0CghF6c9ARlqTzLaahdE0a9F9jatgGifnTbxQc%2FIkqYGbxiEUiCWGNkX8D5aj6WnBSpgIarWpodwt6lNpvqyiyE0WbCIgVvZTtnTbj%2BYp4ym332o2wJXRuUqizytA3jpyp1EX%2BtmCemdlGJ1EbqDzVs1v1vzQ0vEfhbqfbdIIL&X-Amz-Signature=938a355bfe4023955a3a8949ed69b9b026cdad1bf6a360df0654eb2636241110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZFYE2I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBgubawMUE4w1%2FipGD5F4RdoeIA%2F4q%2F70KyG2zTxxi9MAiEAhIU60k8jvCv6ZEBLmwQckFFqxBkhydW86xbHarUVAg4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAe7515kNcsMxqSa2CrcA6PfYo0MwpUs5dyB3mZCW8NtrKMvz5whZ5o9GCetKxZpAdEQpQQe%2BRMmeUXek%2Fb8k9ZtQpwZ6t5OdAtNsw3qkcAvQ%2F4hk44tA%2B1n%2BCixRF4pWLXZKZldhxEAdJiybZ8kblHKcaF4ccdC%2F3%2BjykbciBnZgy0WJgur4DnjDbXnpY0k2NWk9jQbwqpamxPIPEkWE5uVD5tYeWVEpzvdMdC0iy8uxKURWMHNbER1VmQTXt8KY3LdkCOQLKgsFLO77%2F56H2HYrq3v%2FBqcZ85Hnsw97NYvkgZf5s5sPfCFsq%2FHcOXPIBoSFgSC3tkwlC5M5y4e5pYhCO%2FjJ4f%2FYw688q2LmeSWZkdAyh6mgn%2FsiT%2BkSgRzMzSVYfBsHtGp6nVrALaH8mFyaeSA7iVcAX3dSKbGjtO47iEAJ1qQPv%2BG1Q2HxVggT3yOoi9LBinRmitVfDfFqgfepxWJbx%2F2bjlmk8HbvVEX0H0mV7H%2Fhs5aAfMxMSmKnOMc8Py7sI2Aojg6x7GwJgYck5vlGzCzv3XQYgNbNZtVfWCtK0bxNqQ6HHnriirTon2KnvTArxNnfzCAgvaX8tv178Z3XA%2B4fvBvWesjmhW7Aw08%2BxBmzG2NPum%2F3LmlUPzjoeDy045J3mWUMI7rzsQGOqUBnCe9RqQnW1kgKAVSODuizHPZMTTYADtTUdy5Rh2T8iZuLq5c5XIS50dGceu3027%2BDirdZAhXSpqb4mYbMszWKImnP6NFG9XCIvCLLJl3dvtQUEB5xUiHBxE4a%2BCKlAhUsM5gZo6tciH5q75dq8ZxFQKz5vz0WG2WcQMTW8E5Rb6Ex4WIkOrjbk9wMDOSSyNBeSR4nZliAOXhJ%2FNdY23X4Lszydmk&X-Amz-Signature=b014a9829f2f28369864539ac256837f9c4e5b71ffe9f9015a5b04fd1064a5e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZFYE2I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBgubawMUE4w1%2FipGD5F4RdoeIA%2F4q%2F70KyG2zTxxi9MAiEAhIU60k8jvCv6ZEBLmwQckFFqxBkhydW86xbHarUVAg4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAe7515kNcsMxqSa2CrcA6PfYo0MwpUs5dyB3mZCW8NtrKMvz5whZ5o9GCetKxZpAdEQpQQe%2BRMmeUXek%2Fb8k9ZtQpwZ6t5OdAtNsw3qkcAvQ%2F4hk44tA%2B1n%2BCixRF4pWLXZKZldhxEAdJiybZ8kblHKcaF4ccdC%2F3%2BjykbciBnZgy0WJgur4DnjDbXnpY0k2NWk9jQbwqpamxPIPEkWE5uVD5tYeWVEpzvdMdC0iy8uxKURWMHNbER1VmQTXt8KY3LdkCOQLKgsFLO77%2F56H2HYrq3v%2FBqcZ85Hnsw97NYvkgZf5s5sPfCFsq%2FHcOXPIBoSFgSC3tkwlC5M5y4e5pYhCO%2FjJ4f%2FYw688q2LmeSWZkdAyh6mgn%2FsiT%2BkSgRzMzSVYfBsHtGp6nVrALaH8mFyaeSA7iVcAX3dSKbGjtO47iEAJ1qQPv%2BG1Q2HxVggT3yOoi9LBinRmitVfDfFqgfepxWJbx%2F2bjlmk8HbvVEX0H0mV7H%2Fhs5aAfMxMSmKnOMc8Py7sI2Aojg6x7GwJgYck5vlGzCzv3XQYgNbNZtVfWCtK0bxNqQ6HHnriirTon2KnvTArxNnfzCAgvaX8tv178Z3XA%2B4fvBvWesjmhW7Aw08%2BxBmzG2NPum%2F3LmlUPzjoeDy045J3mWUMI7rzsQGOqUBnCe9RqQnW1kgKAVSODuizHPZMTTYADtTUdy5Rh2T8iZuLq5c5XIS50dGceu3027%2BDirdZAhXSpqb4mYbMszWKImnP6NFG9XCIvCLLJl3dvtQUEB5xUiHBxE4a%2BCKlAhUsM5gZo6tciH5q75dq8ZxFQKz5vz0WG2WcQMTW8E5Rb6Ex4WIkOrjbk9wMDOSSyNBeSR4nZliAOXhJ%2FNdY23X4Lszydmk&X-Amz-Signature=ca245e39a7f17e5cb4205105d10e3edd3da9f4f9882effd8c425caf495e0c9fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZFYE2I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBgubawMUE4w1%2FipGD5F4RdoeIA%2F4q%2F70KyG2zTxxi9MAiEAhIU60k8jvCv6ZEBLmwQckFFqxBkhydW86xbHarUVAg4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAe7515kNcsMxqSa2CrcA6PfYo0MwpUs5dyB3mZCW8NtrKMvz5whZ5o9GCetKxZpAdEQpQQe%2BRMmeUXek%2Fb8k9ZtQpwZ6t5OdAtNsw3qkcAvQ%2F4hk44tA%2B1n%2BCixRF4pWLXZKZldhxEAdJiybZ8kblHKcaF4ccdC%2F3%2BjykbciBnZgy0WJgur4DnjDbXnpY0k2NWk9jQbwqpamxPIPEkWE5uVD5tYeWVEpzvdMdC0iy8uxKURWMHNbER1VmQTXt8KY3LdkCOQLKgsFLO77%2F56H2HYrq3v%2FBqcZ85Hnsw97NYvkgZf5s5sPfCFsq%2FHcOXPIBoSFgSC3tkwlC5M5y4e5pYhCO%2FjJ4f%2FYw688q2LmeSWZkdAyh6mgn%2FsiT%2BkSgRzMzSVYfBsHtGp6nVrALaH8mFyaeSA7iVcAX3dSKbGjtO47iEAJ1qQPv%2BG1Q2HxVggT3yOoi9LBinRmitVfDfFqgfepxWJbx%2F2bjlmk8HbvVEX0H0mV7H%2Fhs5aAfMxMSmKnOMc8Py7sI2Aojg6x7GwJgYck5vlGzCzv3XQYgNbNZtVfWCtK0bxNqQ6HHnriirTon2KnvTArxNnfzCAgvaX8tv178Z3XA%2B4fvBvWesjmhW7Aw08%2BxBmzG2NPum%2F3LmlUPzjoeDy045J3mWUMI7rzsQGOqUBnCe9RqQnW1kgKAVSODuizHPZMTTYADtTUdy5Rh2T8iZuLq5c5XIS50dGceu3027%2BDirdZAhXSpqb4mYbMszWKImnP6NFG9XCIvCLLJl3dvtQUEB5xUiHBxE4a%2BCKlAhUsM5gZo6tciH5q75dq8ZxFQKz5vz0WG2WcQMTW8E5Rb6Ex4WIkOrjbk9wMDOSSyNBeSR4nZliAOXhJ%2FNdY23X4Lszydmk&X-Amz-Signature=735495177debf286abc3e0aa0a73a508883655bf1c0991c72620df172e0b7565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZFYE2I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBgubawMUE4w1%2FipGD5F4RdoeIA%2F4q%2F70KyG2zTxxi9MAiEAhIU60k8jvCv6ZEBLmwQckFFqxBkhydW86xbHarUVAg4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAe7515kNcsMxqSa2CrcA6PfYo0MwpUs5dyB3mZCW8NtrKMvz5whZ5o9GCetKxZpAdEQpQQe%2BRMmeUXek%2Fb8k9ZtQpwZ6t5OdAtNsw3qkcAvQ%2F4hk44tA%2B1n%2BCixRF4pWLXZKZldhxEAdJiybZ8kblHKcaF4ccdC%2F3%2BjykbciBnZgy0WJgur4DnjDbXnpY0k2NWk9jQbwqpamxPIPEkWE5uVD5tYeWVEpzvdMdC0iy8uxKURWMHNbER1VmQTXt8KY3LdkCOQLKgsFLO77%2F56H2HYrq3v%2FBqcZ85Hnsw97NYvkgZf5s5sPfCFsq%2FHcOXPIBoSFgSC3tkwlC5M5y4e5pYhCO%2FjJ4f%2FYw688q2LmeSWZkdAyh6mgn%2FsiT%2BkSgRzMzSVYfBsHtGp6nVrALaH8mFyaeSA7iVcAX3dSKbGjtO47iEAJ1qQPv%2BG1Q2HxVggT3yOoi9LBinRmitVfDfFqgfepxWJbx%2F2bjlmk8HbvVEX0H0mV7H%2Fhs5aAfMxMSmKnOMc8Py7sI2Aojg6x7GwJgYck5vlGzCzv3XQYgNbNZtVfWCtK0bxNqQ6HHnriirTon2KnvTArxNnfzCAgvaX8tv178Z3XA%2B4fvBvWesjmhW7Aw08%2BxBmzG2NPum%2F3LmlUPzjoeDy045J3mWUMI7rzsQGOqUBnCe9RqQnW1kgKAVSODuizHPZMTTYADtTUdy5Rh2T8iZuLq5c5XIS50dGceu3027%2BDirdZAhXSpqb4mYbMszWKImnP6NFG9XCIvCLLJl3dvtQUEB5xUiHBxE4a%2BCKlAhUsM5gZo6tciH5q75dq8ZxFQKz5vz0WG2WcQMTW8E5Rb6Ex4WIkOrjbk9wMDOSSyNBeSR4nZliAOXhJ%2FNdY23X4Lszydmk&X-Amz-Signature=abe4093023eb645c47ec56513385c0a43d6347a927454f5bfcb189eb4e976df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZFYE2I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBgubawMUE4w1%2FipGD5F4RdoeIA%2F4q%2F70KyG2zTxxi9MAiEAhIU60k8jvCv6ZEBLmwQckFFqxBkhydW86xbHarUVAg4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAe7515kNcsMxqSa2CrcA6PfYo0MwpUs5dyB3mZCW8NtrKMvz5whZ5o9GCetKxZpAdEQpQQe%2BRMmeUXek%2Fb8k9ZtQpwZ6t5OdAtNsw3qkcAvQ%2F4hk44tA%2B1n%2BCixRF4pWLXZKZldhxEAdJiybZ8kblHKcaF4ccdC%2F3%2BjykbciBnZgy0WJgur4DnjDbXnpY0k2NWk9jQbwqpamxPIPEkWE5uVD5tYeWVEpzvdMdC0iy8uxKURWMHNbER1VmQTXt8KY3LdkCOQLKgsFLO77%2F56H2HYrq3v%2FBqcZ85Hnsw97NYvkgZf5s5sPfCFsq%2FHcOXPIBoSFgSC3tkwlC5M5y4e5pYhCO%2FjJ4f%2FYw688q2LmeSWZkdAyh6mgn%2FsiT%2BkSgRzMzSVYfBsHtGp6nVrALaH8mFyaeSA7iVcAX3dSKbGjtO47iEAJ1qQPv%2BG1Q2HxVggT3yOoi9LBinRmitVfDfFqgfepxWJbx%2F2bjlmk8HbvVEX0H0mV7H%2Fhs5aAfMxMSmKnOMc8Py7sI2Aojg6x7GwJgYck5vlGzCzv3XQYgNbNZtVfWCtK0bxNqQ6HHnriirTon2KnvTArxNnfzCAgvaX8tv178Z3XA%2B4fvBvWesjmhW7Aw08%2BxBmzG2NPum%2F3LmlUPzjoeDy045J3mWUMI7rzsQGOqUBnCe9RqQnW1kgKAVSODuizHPZMTTYADtTUdy5Rh2T8iZuLq5c5XIS50dGceu3027%2BDirdZAhXSpqb4mYbMszWKImnP6NFG9XCIvCLLJl3dvtQUEB5xUiHBxE4a%2BCKlAhUsM5gZo6tciH5q75dq8ZxFQKz5vz0WG2WcQMTW8E5Rb6Ex4WIkOrjbk9wMDOSSyNBeSR4nZliAOXhJ%2FNdY23X4Lszydmk&X-Amz-Signature=91130b836fcb6eaefbdd3d8409edcf155b8fa9ca31df73ceaeba14225d91598d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZFYE2I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBgubawMUE4w1%2FipGD5F4RdoeIA%2F4q%2F70KyG2zTxxi9MAiEAhIU60k8jvCv6ZEBLmwQckFFqxBkhydW86xbHarUVAg4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAe7515kNcsMxqSa2CrcA6PfYo0MwpUs5dyB3mZCW8NtrKMvz5whZ5o9GCetKxZpAdEQpQQe%2BRMmeUXek%2Fb8k9ZtQpwZ6t5OdAtNsw3qkcAvQ%2F4hk44tA%2B1n%2BCixRF4pWLXZKZldhxEAdJiybZ8kblHKcaF4ccdC%2F3%2BjykbciBnZgy0WJgur4DnjDbXnpY0k2NWk9jQbwqpamxPIPEkWE5uVD5tYeWVEpzvdMdC0iy8uxKURWMHNbER1VmQTXt8KY3LdkCOQLKgsFLO77%2F56H2HYrq3v%2FBqcZ85Hnsw97NYvkgZf5s5sPfCFsq%2FHcOXPIBoSFgSC3tkwlC5M5y4e5pYhCO%2FjJ4f%2FYw688q2LmeSWZkdAyh6mgn%2FsiT%2BkSgRzMzSVYfBsHtGp6nVrALaH8mFyaeSA7iVcAX3dSKbGjtO47iEAJ1qQPv%2BG1Q2HxVggT3yOoi9LBinRmitVfDfFqgfepxWJbx%2F2bjlmk8HbvVEX0H0mV7H%2Fhs5aAfMxMSmKnOMc8Py7sI2Aojg6x7GwJgYck5vlGzCzv3XQYgNbNZtVfWCtK0bxNqQ6HHnriirTon2KnvTArxNnfzCAgvaX8tv178Z3XA%2B4fvBvWesjmhW7Aw08%2BxBmzG2NPum%2F3LmlUPzjoeDy045J3mWUMI7rzsQGOqUBnCe9RqQnW1kgKAVSODuizHPZMTTYADtTUdy5Rh2T8iZuLq5c5XIS50dGceu3027%2BDirdZAhXSpqb4mYbMszWKImnP6NFG9XCIvCLLJl3dvtQUEB5xUiHBxE4a%2BCKlAhUsM5gZo6tciH5q75dq8ZxFQKz5vz0WG2WcQMTW8E5Rb6Ex4WIkOrjbk9wMDOSSyNBeSR4nZliAOXhJ%2FNdY23X4Lszydmk&X-Amz-Signature=228b46c49b0aa7207f802ea1ed61dc71a2238cfcb8f25c200aeb7068fcd69268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZFYE2I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBgubawMUE4w1%2FipGD5F4RdoeIA%2F4q%2F70KyG2zTxxi9MAiEAhIU60k8jvCv6ZEBLmwQckFFqxBkhydW86xbHarUVAg4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAe7515kNcsMxqSa2CrcA6PfYo0MwpUs5dyB3mZCW8NtrKMvz5whZ5o9GCetKxZpAdEQpQQe%2BRMmeUXek%2Fb8k9ZtQpwZ6t5OdAtNsw3qkcAvQ%2F4hk44tA%2B1n%2BCixRF4pWLXZKZldhxEAdJiybZ8kblHKcaF4ccdC%2F3%2BjykbciBnZgy0WJgur4DnjDbXnpY0k2NWk9jQbwqpamxPIPEkWE5uVD5tYeWVEpzvdMdC0iy8uxKURWMHNbER1VmQTXt8KY3LdkCOQLKgsFLO77%2F56H2HYrq3v%2FBqcZ85Hnsw97NYvkgZf5s5sPfCFsq%2FHcOXPIBoSFgSC3tkwlC5M5y4e5pYhCO%2FjJ4f%2FYw688q2LmeSWZkdAyh6mgn%2FsiT%2BkSgRzMzSVYfBsHtGp6nVrALaH8mFyaeSA7iVcAX3dSKbGjtO47iEAJ1qQPv%2BG1Q2HxVggT3yOoi9LBinRmitVfDfFqgfepxWJbx%2F2bjlmk8HbvVEX0H0mV7H%2Fhs5aAfMxMSmKnOMc8Py7sI2Aojg6x7GwJgYck5vlGzCzv3XQYgNbNZtVfWCtK0bxNqQ6HHnriirTon2KnvTArxNnfzCAgvaX8tv178Z3XA%2B4fvBvWesjmhW7Aw08%2BxBmzG2NPum%2F3LmlUPzjoeDy045J3mWUMI7rzsQGOqUBnCe9RqQnW1kgKAVSODuizHPZMTTYADtTUdy5Rh2T8iZuLq5c5XIS50dGceu3027%2BDirdZAhXSpqb4mYbMszWKImnP6NFG9XCIvCLLJl3dvtQUEB5xUiHBxE4a%2BCKlAhUsM5gZo6tciH5q75dq8ZxFQKz5vz0WG2WcQMTW8E5Rb6Ex4WIkOrjbk9wMDOSSyNBeSR4nZliAOXhJ%2FNdY23X4Lszydmk&X-Amz-Signature=735495177debf286abc3e0aa0a73a508883655bf1c0991c72620df172e0b7565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZFYE2I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBgubawMUE4w1%2FipGD5F4RdoeIA%2F4q%2F70KyG2zTxxi9MAiEAhIU60k8jvCv6ZEBLmwQckFFqxBkhydW86xbHarUVAg4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAe7515kNcsMxqSa2CrcA6PfYo0MwpUs5dyB3mZCW8NtrKMvz5whZ5o9GCetKxZpAdEQpQQe%2BRMmeUXek%2Fb8k9ZtQpwZ6t5OdAtNsw3qkcAvQ%2F4hk44tA%2B1n%2BCixRF4pWLXZKZldhxEAdJiybZ8kblHKcaF4ccdC%2F3%2BjykbciBnZgy0WJgur4DnjDbXnpY0k2NWk9jQbwqpamxPIPEkWE5uVD5tYeWVEpzvdMdC0iy8uxKURWMHNbER1VmQTXt8KY3LdkCOQLKgsFLO77%2F56H2HYrq3v%2FBqcZ85Hnsw97NYvkgZf5s5sPfCFsq%2FHcOXPIBoSFgSC3tkwlC5M5y4e5pYhCO%2FjJ4f%2FYw688q2LmeSWZkdAyh6mgn%2FsiT%2BkSgRzMzSVYfBsHtGp6nVrALaH8mFyaeSA7iVcAX3dSKbGjtO47iEAJ1qQPv%2BG1Q2HxVggT3yOoi9LBinRmitVfDfFqgfepxWJbx%2F2bjlmk8HbvVEX0H0mV7H%2Fhs5aAfMxMSmKnOMc8Py7sI2Aojg6x7GwJgYck5vlGzCzv3XQYgNbNZtVfWCtK0bxNqQ6HHnriirTon2KnvTArxNnfzCAgvaX8tv178Z3XA%2B4fvBvWesjmhW7Aw08%2BxBmzG2NPum%2F3LmlUPzjoeDy045J3mWUMI7rzsQGOqUBnCe9RqQnW1kgKAVSODuizHPZMTTYADtTUdy5Rh2T8iZuLq5c5XIS50dGceu3027%2BDirdZAhXSpqb4mYbMszWKImnP6NFG9XCIvCLLJl3dvtQUEB5xUiHBxE4a%2BCKlAhUsM5gZo6tciH5q75dq8ZxFQKz5vz0WG2WcQMTW8E5Rb6Ex4WIkOrjbk9wMDOSSyNBeSR4nZliAOXhJ%2FNdY23X4Lszydmk&X-Amz-Signature=40289b7975a643c2dfbcea8d3b503ba58eab9d83c1741f080db33a1005f0ab25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZFYE2I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBgubawMUE4w1%2FipGD5F4RdoeIA%2F4q%2F70KyG2zTxxi9MAiEAhIU60k8jvCv6ZEBLmwQckFFqxBkhydW86xbHarUVAg4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAe7515kNcsMxqSa2CrcA6PfYo0MwpUs5dyB3mZCW8NtrKMvz5whZ5o9GCetKxZpAdEQpQQe%2BRMmeUXek%2Fb8k9ZtQpwZ6t5OdAtNsw3qkcAvQ%2F4hk44tA%2B1n%2BCixRF4pWLXZKZldhxEAdJiybZ8kblHKcaF4ccdC%2F3%2BjykbciBnZgy0WJgur4DnjDbXnpY0k2NWk9jQbwqpamxPIPEkWE5uVD5tYeWVEpzvdMdC0iy8uxKURWMHNbER1VmQTXt8KY3LdkCOQLKgsFLO77%2F56H2HYrq3v%2FBqcZ85Hnsw97NYvkgZf5s5sPfCFsq%2FHcOXPIBoSFgSC3tkwlC5M5y4e5pYhCO%2FjJ4f%2FYw688q2LmeSWZkdAyh6mgn%2FsiT%2BkSgRzMzSVYfBsHtGp6nVrALaH8mFyaeSA7iVcAX3dSKbGjtO47iEAJ1qQPv%2BG1Q2HxVggT3yOoi9LBinRmitVfDfFqgfepxWJbx%2F2bjlmk8HbvVEX0H0mV7H%2Fhs5aAfMxMSmKnOMc8Py7sI2Aojg6x7GwJgYck5vlGzCzv3XQYgNbNZtVfWCtK0bxNqQ6HHnriirTon2KnvTArxNnfzCAgvaX8tv178Z3XA%2B4fvBvWesjmhW7Aw08%2BxBmzG2NPum%2F3LmlUPzjoeDy045J3mWUMI7rzsQGOqUBnCe9RqQnW1kgKAVSODuizHPZMTTYADtTUdy5Rh2T8iZuLq5c5XIS50dGceu3027%2BDirdZAhXSpqb4mYbMszWKImnP6NFG9XCIvCLLJl3dvtQUEB5xUiHBxE4a%2BCKlAhUsM5gZo6tciH5q75dq8ZxFQKz5vz0WG2WcQMTW8E5Rb6Ex4WIkOrjbk9wMDOSSyNBeSR4nZliAOXhJ%2FNdY23X4Lszydmk&X-Amz-Signature=edc7da292ad9d02f52fed5325265fac1999d8896f880405124718157e561f194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZFYE2I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBgubawMUE4w1%2FipGD5F4RdoeIA%2F4q%2F70KyG2zTxxi9MAiEAhIU60k8jvCv6ZEBLmwQckFFqxBkhydW86xbHarUVAg4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAe7515kNcsMxqSa2CrcA6PfYo0MwpUs5dyB3mZCW8NtrKMvz5whZ5o9GCetKxZpAdEQpQQe%2BRMmeUXek%2Fb8k9ZtQpwZ6t5OdAtNsw3qkcAvQ%2F4hk44tA%2B1n%2BCixRF4pWLXZKZldhxEAdJiybZ8kblHKcaF4ccdC%2F3%2BjykbciBnZgy0WJgur4DnjDbXnpY0k2NWk9jQbwqpamxPIPEkWE5uVD5tYeWVEpzvdMdC0iy8uxKURWMHNbER1VmQTXt8KY3LdkCOQLKgsFLO77%2F56H2HYrq3v%2FBqcZ85Hnsw97NYvkgZf5s5sPfCFsq%2FHcOXPIBoSFgSC3tkwlC5M5y4e5pYhCO%2FjJ4f%2FYw688q2LmeSWZkdAyh6mgn%2FsiT%2BkSgRzMzSVYfBsHtGp6nVrALaH8mFyaeSA7iVcAX3dSKbGjtO47iEAJ1qQPv%2BG1Q2HxVggT3yOoi9LBinRmitVfDfFqgfepxWJbx%2F2bjlmk8HbvVEX0H0mV7H%2Fhs5aAfMxMSmKnOMc8Py7sI2Aojg6x7GwJgYck5vlGzCzv3XQYgNbNZtVfWCtK0bxNqQ6HHnriirTon2KnvTArxNnfzCAgvaX8tv178Z3XA%2B4fvBvWesjmhW7Aw08%2BxBmzG2NPum%2F3LmlUPzjoeDy045J3mWUMI7rzsQGOqUBnCe9RqQnW1kgKAVSODuizHPZMTTYADtTUdy5Rh2T8iZuLq5c5XIS50dGceu3027%2BDirdZAhXSpqb4mYbMszWKImnP6NFG9XCIvCLLJl3dvtQUEB5xUiHBxE4a%2BCKlAhUsM5gZo6tciH5q75dq8ZxFQKz5vz0WG2WcQMTW8E5Rb6Ex4WIkOrjbk9wMDOSSyNBeSR4nZliAOXhJ%2FNdY23X4Lszydmk&X-Amz-Signature=afec084779ab6b26964912db0b18ae9661a4dfe5205007fdbf580f3565b6f8c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
