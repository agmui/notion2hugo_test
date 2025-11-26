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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWE5YB55%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgdJNsrQGoktDdf16GKZUQZHg%2FqoeC0utQFJTvvkv78QIgIkDOAgY%2BPNk4Fz4miRzmqg9v%2BKZonbme6NpYq%2F%2Fj%2FJ8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKUTtY7vwtoEc9wsfCrcAxe0dSzqUSxEzt0GZJuj5BBI7Fg6K1iHIKQnMYPZpOAd4lRoIGZr5I8CykpJKsI%2BEzfgLYQsUvWoOc%2FagPhcQ%2FfsrHDdtt2vqtojz%2Fzlhh6T5k9SWhriEzeSfs55gqFoofAQQpiwV7QGM66vROcVanchEud%2FhsU0gixO%2Bm0H5iUSzjPOFmc9y1CudnhXLTd2LVNtE1kwTeoInzPDz8f150HjeF9yAU2hsDOhDhxlv4050PZRdEHR9%2BlSOqPIYal31gG%2FbZcGV1Y10aSJ5%2BaYMsHUKPMYXx2ZPuFF94xIWkyUo%2BX7BbiO9wVK0F%2FpP8J90roITkTiqrc2q7i96PTehbVMQ7sSR%2FO795LTH3BgAygPzHVqjFOI0vvi1wCaDQZ4wsi8PPDC%2B9kyV7zjziBXYCHELypNpn4aYC%2B0Vd%2B98i62ZJCHcQfWEmx3fBvFOfVUWtOuRWPxtqNYNMcoViEFrEdUC%2FTu7oo%2FRlfH%2BC86zQpaI4JUEl4NP9TlDO1ekjDcLcgfNKa3feFo%2FgU0UQ7Vwvb8c8AB2UjpL3dCfupMD0PrGI6N7PD8ikfqlPoBIuH80u3HiBxTjEY37Xnd4SaN080X6D0bVV5YcHHzCQ1mvea8kfs8jG4m%2FIOSz5oWMNGxmckGOqUBH3XCOfVnrcXYksPIexvrGWoH2TLtJGhtlCzbBgKSFLXedz2hsjenIO%2BCdGOtEdz9PXoqB27m8kUe9E%2BZl1DkhROrFXJGpoXjwVgcO7%2F4D8cSt4y%2FUZPid6uYZp0OEGLUH1nwRV4iNw%2BdOrTwA0vanO66hr7nRxuoSWe08XfTa%2B0sAsnPdSZDYlAl%2FPu7GXbaMnOvZRoZC69vIC5PAE6IAUj9rMzR&X-Amz-Signature=c4d37f94e3df997ddd3311871d668acc6ac3fbf28bf48800d3138eceed2a88ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWE5YB55%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgdJNsrQGoktDdf16GKZUQZHg%2FqoeC0utQFJTvvkv78QIgIkDOAgY%2BPNk4Fz4miRzmqg9v%2BKZonbme6NpYq%2F%2Fj%2FJ8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKUTtY7vwtoEc9wsfCrcAxe0dSzqUSxEzt0GZJuj5BBI7Fg6K1iHIKQnMYPZpOAd4lRoIGZr5I8CykpJKsI%2BEzfgLYQsUvWoOc%2FagPhcQ%2FfsrHDdtt2vqtojz%2Fzlhh6T5k9SWhriEzeSfs55gqFoofAQQpiwV7QGM66vROcVanchEud%2FhsU0gixO%2Bm0H5iUSzjPOFmc9y1CudnhXLTd2LVNtE1kwTeoInzPDz8f150HjeF9yAU2hsDOhDhxlv4050PZRdEHR9%2BlSOqPIYal31gG%2FbZcGV1Y10aSJ5%2BaYMsHUKPMYXx2ZPuFF94xIWkyUo%2BX7BbiO9wVK0F%2FpP8J90roITkTiqrc2q7i96PTehbVMQ7sSR%2FO795LTH3BgAygPzHVqjFOI0vvi1wCaDQZ4wsi8PPDC%2B9kyV7zjziBXYCHELypNpn4aYC%2B0Vd%2B98i62ZJCHcQfWEmx3fBvFOfVUWtOuRWPxtqNYNMcoViEFrEdUC%2FTu7oo%2FRlfH%2BC86zQpaI4JUEl4NP9TlDO1ekjDcLcgfNKa3feFo%2FgU0UQ7Vwvb8c8AB2UjpL3dCfupMD0PrGI6N7PD8ikfqlPoBIuH80u3HiBxTjEY37Xnd4SaN080X6D0bVV5YcHHzCQ1mvea8kfs8jG4m%2FIOSz5oWMNGxmckGOqUBH3XCOfVnrcXYksPIexvrGWoH2TLtJGhtlCzbBgKSFLXedz2hsjenIO%2BCdGOtEdz9PXoqB27m8kUe9E%2BZl1DkhROrFXJGpoXjwVgcO7%2F4D8cSt4y%2FUZPid6uYZp0OEGLUH1nwRV4iNw%2BdOrTwA0vanO66hr7nRxuoSWe08XfTa%2B0sAsnPdSZDYlAl%2FPu7GXbaMnOvZRoZC69vIC5PAE6IAUj9rMzR&X-Amz-Signature=b5fa77f405b6b78c7528f7a17c1803b47b7c81fee60e3502384483ca3072e237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWE5YB55%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgdJNsrQGoktDdf16GKZUQZHg%2FqoeC0utQFJTvvkv78QIgIkDOAgY%2BPNk4Fz4miRzmqg9v%2BKZonbme6NpYq%2F%2Fj%2FJ8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKUTtY7vwtoEc9wsfCrcAxe0dSzqUSxEzt0GZJuj5BBI7Fg6K1iHIKQnMYPZpOAd4lRoIGZr5I8CykpJKsI%2BEzfgLYQsUvWoOc%2FagPhcQ%2FfsrHDdtt2vqtojz%2Fzlhh6T5k9SWhriEzeSfs55gqFoofAQQpiwV7QGM66vROcVanchEud%2FhsU0gixO%2Bm0H5iUSzjPOFmc9y1CudnhXLTd2LVNtE1kwTeoInzPDz8f150HjeF9yAU2hsDOhDhxlv4050PZRdEHR9%2BlSOqPIYal31gG%2FbZcGV1Y10aSJ5%2BaYMsHUKPMYXx2ZPuFF94xIWkyUo%2BX7BbiO9wVK0F%2FpP8J90roITkTiqrc2q7i96PTehbVMQ7sSR%2FO795LTH3BgAygPzHVqjFOI0vvi1wCaDQZ4wsi8PPDC%2B9kyV7zjziBXYCHELypNpn4aYC%2B0Vd%2B98i62ZJCHcQfWEmx3fBvFOfVUWtOuRWPxtqNYNMcoViEFrEdUC%2FTu7oo%2FRlfH%2BC86zQpaI4JUEl4NP9TlDO1ekjDcLcgfNKa3feFo%2FgU0UQ7Vwvb8c8AB2UjpL3dCfupMD0PrGI6N7PD8ikfqlPoBIuH80u3HiBxTjEY37Xnd4SaN080X6D0bVV5YcHHzCQ1mvea8kfs8jG4m%2FIOSz5oWMNGxmckGOqUBH3XCOfVnrcXYksPIexvrGWoH2TLtJGhtlCzbBgKSFLXedz2hsjenIO%2BCdGOtEdz9PXoqB27m8kUe9E%2BZl1DkhROrFXJGpoXjwVgcO7%2F4D8cSt4y%2FUZPid6uYZp0OEGLUH1nwRV4iNw%2BdOrTwA0vanO66hr7nRxuoSWe08XfTa%2B0sAsnPdSZDYlAl%2FPu7GXbaMnOvZRoZC69vIC5PAE6IAUj9rMzR&X-Amz-Signature=c6111bd9bf110af75378320ff90e4a974bea6cb905a8b4b6114bb373b3db1efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWE5YB55%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgdJNsrQGoktDdf16GKZUQZHg%2FqoeC0utQFJTvvkv78QIgIkDOAgY%2BPNk4Fz4miRzmqg9v%2BKZonbme6NpYq%2F%2Fj%2FJ8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKUTtY7vwtoEc9wsfCrcAxe0dSzqUSxEzt0GZJuj5BBI7Fg6K1iHIKQnMYPZpOAd4lRoIGZr5I8CykpJKsI%2BEzfgLYQsUvWoOc%2FagPhcQ%2FfsrHDdtt2vqtojz%2Fzlhh6T5k9SWhriEzeSfs55gqFoofAQQpiwV7QGM66vROcVanchEud%2FhsU0gixO%2Bm0H5iUSzjPOFmc9y1CudnhXLTd2LVNtE1kwTeoInzPDz8f150HjeF9yAU2hsDOhDhxlv4050PZRdEHR9%2BlSOqPIYal31gG%2FbZcGV1Y10aSJ5%2BaYMsHUKPMYXx2ZPuFF94xIWkyUo%2BX7BbiO9wVK0F%2FpP8J90roITkTiqrc2q7i96PTehbVMQ7sSR%2FO795LTH3BgAygPzHVqjFOI0vvi1wCaDQZ4wsi8PPDC%2B9kyV7zjziBXYCHELypNpn4aYC%2B0Vd%2B98i62ZJCHcQfWEmx3fBvFOfVUWtOuRWPxtqNYNMcoViEFrEdUC%2FTu7oo%2FRlfH%2BC86zQpaI4JUEl4NP9TlDO1ekjDcLcgfNKa3feFo%2FgU0UQ7Vwvb8c8AB2UjpL3dCfupMD0PrGI6N7PD8ikfqlPoBIuH80u3HiBxTjEY37Xnd4SaN080X6D0bVV5YcHHzCQ1mvea8kfs8jG4m%2FIOSz5oWMNGxmckGOqUBH3XCOfVnrcXYksPIexvrGWoH2TLtJGhtlCzbBgKSFLXedz2hsjenIO%2BCdGOtEdz9PXoqB27m8kUe9E%2BZl1DkhROrFXJGpoXjwVgcO7%2F4D8cSt4y%2FUZPid6uYZp0OEGLUH1nwRV4iNw%2BdOrTwA0vanO66hr7nRxuoSWe08XfTa%2B0sAsnPdSZDYlAl%2FPu7GXbaMnOvZRoZC69vIC5PAE6IAUj9rMzR&X-Amz-Signature=4afe88d1f9328c494ee6ea7f744f070e22770ab55bdab7aa091bafefcf4d240c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWE5YB55%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgdJNsrQGoktDdf16GKZUQZHg%2FqoeC0utQFJTvvkv78QIgIkDOAgY%2BPNk4Fz4miRzmqg9v%2BKZonbme6NpYq%2F%2Fj%2FJ8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKUTtY7vwtoEc9wsfCrcAxe0dSzqUSxEzt0GZJuj5BBI7Fg6K1iHIKQnMYPZpOAd4lRoIGZr5I8CykpJKsI%2BEzfgLYQsUvWoOc%2FagPhcQ%2FfsrHDdtt2vqtojz%2Fzlhh6T5k9SWhriEzeSfs55gqFoofAQQpiwV7QGM66vROcVanchEud%2FhsU0gixO%2Bm0H5iUSzjPOFmc9y1CudnhXLTd2LVNtE1kwTeoInzPDz8f150HjeF9yAU2hsDOhDhxlv4050PZRdEHR9%2BlSOqPIYal31gG%2FbZcGV1Y10aSJ5%2BaYMsHUKPMYXx2ZPuFF94xIWkyUo%2BX7BbiO9wVK0F%2FpP8J90roITkTiqrc2q7i96PTehbVMQ7sSR%2FO795LTH3BgAygPzHVqjFOI0vvi1wCaDQZ4wsi8PPDC%2B9kyV7zjziBXYCHELypNpn4aYC%2B0Vd%2B98i62ZJCHcQfWEmx3fBvFOfVUWtOuRWPxtqNYNMcoViEFrEdUC%2FTu7oo%2FRlfH%2BC86zQpaI4JUEl4NP9TlDO1ekjDcLcgfNKa3feFo%2FgU0UQ7Vwvb8c8AB2UjpL3dCfupMD0PrGI6N7PD8ikfqlPoBIuH80u3HiBxTjEY37Xnd4SaN080X6D0bVV5YcHHzCQ1mvea8kfs8jG4m%2FIOSz5oWMNGxmckGOqUBH3XCOfVnrcXYksPIexvrGWoH2TLtJGhtlCzbBgKSFLXedz2hsjenIO%2BCdGOtEdz9PXoqB27m8kUe9E%2BZl1DkhROrFXJGpoXjwVgcO7%2F4D8cSt4y%2FUZPid6uYZp0OEGLUH1nwRV4iNw%2BdOrTwA0vanO66hr7nRxuoSWe08XfTa%2B0sAsnPdSZDYlAl%2FPu7GXbaMnOvZRoZC69vIC5PAE6IAUj9rMzR&X-Amz-Signature=67227680c03758114a1a14f06c3f84a96f398ec3c3ea1fcb29069a504eac274b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWE5YB55%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgdJNsrQGoktDdf16GKZUQZHg%2FqoeC0utQFJTvvkv78QIgIkDOAgY%2BPNk4Fz4miRzmqg9v%2BKZonbme6NpYq%2F%2Fj%2FJ8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKUTtY7vwtoEc9wsfCrcAxe0dSzqUSxEzt0GZJuj5BBI7Fg6K1iHIKQnMYPZpOAd4lRoIGZr5I8CykpJKsI%2BEzfgLYQsUvWoOc%2FagPhcQ%2FfsrHDdtt2vqtojz%2Fzlhh6T5k9SWhriEzeSfs55gqFoofAQQpiwV7QGM66vROcVanchEud%2FhsU0gixO%2Bm0H5iUSzjPOFmc9y1CudnhXLTd2LVNtE1kwTeoInzPDz8f150HjeF9yAU2hsDOhDhxlv4050PZRdEHR9%2BlSOqPIYal31gG%2FbZcGV1Y10aSJ5%2BaYMsHUKPMYXx2ZPuFF94xIWkyUo%2BX7BbiO9wVK0F%2FpP8J90roITkTiqrc2q7i96PTehbVMQ7sSR%2FO795LTH3BgAygPzHVqjFOI0vvi1wCaDQZ4wsi8PPDC%2B9kyV7zjziBXYCHELypNpn4aYC%2B0Vd%2B98i62ZJCHcQfWEmx3fBvFOfVUWtOuRWPxtqNYNMcoViEFrEdUC%2FTu7oo%2FRlfH%2BC86zQpaI4JUEl4NP9TlDO1ekjDcLcgfNKa3feFo%2FgU0UQ7Vwvb8c8AB2UjpL3dCfupMD0PrGI6N7PD8ikfqlPoBIuH80u3HiBxTjEY37Xnd4SaN080X6D0bVV5YcHHzCQ1mvea8kfs8jG4m%2FIOSz5oWMNGxmckGOqUBH3XCOfVnrcXYksPIexvrGWoH2TLtJGhtlCzbBgKSFLXedz2hsjenIO%2BCdGOtEdz9PXoqB27m8kUe9E%2BZl1DkhROrFXJGpoXjwVgcO7%2F4D8cSt4y%2FUZPid6uYZp0OEGLUH1nwRV4iNw%2BdOrTwA0vanO66hr7nRxuoSWe08XfTa%2B0sAsnPdSZDYlAl%2FPu7GXbaMnOvZRoZC69vIC5PAE6IAUj9rMzR&X-Amz-Signature=ef0d8db753131b67786721834b40ab90d9ea52c52c58802970c8cef689a3145c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWE5YB55%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgdJNsrQGoktDdf16GKZUQZHg%2FqoeC0utQFJTvvkv78QIgIkDOAgY%2BPNk4Fz4miRzmqg9v%2BKZonbme6NpYq%2F%2Fj%2FJ8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKUTtY7vwtoEc9wsfCrcAxe0dSzqUSxEzt0GZJuj5BBI7Fg6K1iHIKQnMYPZpOAd4lRoIGZr5I8CykpJKsI%2BEzfgLYQsUvWoOc%2FagPhcQ%2FfsrHDdtt2vqtojz%2Fzlhh6T5k9SWhriEzeSfs55gqFoofAQQpiwV7QGM66vROcVanchEud%2FhsU0gixO%2Bm0H5iUSzjPOFmc9y1CudnhXLTd2LVNtE1kwTeoInzPDz8f150HjeF9yAU2hsDOhDhxlv4050PZRdEHR9%2BlSOqPIYal31gG%2FbZcGV1Y10aSJ5%2BaYMsHUKPMYXx2ZPuFF94xIWkyUo%2BX7BbiO9wVK0F%2FpP8J90roITkTiqrc2q7i96PTehbVMQ7sSR%2FO795LTH3BgAygPzHVqjFOI0vvi1wCaDQZ4wsi8PPDC%2B9kyV7zjziBXYCHELypNpn4aYC%2B0Vd%2B98i62ZJCHcQfWEmx3fBvFOfVUWtOuRWPxtqNYNMcoViEFrEdUC%2FTu7oo%2FRlfH%2BC86zQpaI4JUEl4NP9TlDO1ekjDcLcgfNKa3feFo%2FgU0UQ7Vwvb8c8AB2UjpL3dCfupMD0PrGI6N7PD8ikfqlPoBIuH80u3HiBxTjEY37Xnd4SaN080X6D0bVV5YcHHzCQ1mvea8kfs8jG4m%2FIOSz5oWMNGxmckGOqUBH3XCOfVnrcXYksPIexvrGWoH2TLtJGhtlCzbBgKSFLXedz2hsjenIO%2BCdGOtEdz9PXoqB27m8kUe9E%2BZl1DkhROrFXJGpoXjwVgcO7%2F4D8cSt4y%2FUZPid6uYZp0OEGLUH1nwRV4iNw%2BdOrTwA0vanO66hr7nRxuoSWe08XfTa%2B0sAsnPdSZDYlAl%2FPu7GXbaMnOvZRoZC69vIC5PAE6IAUj9rMzR&X-Amz-Signature=04305205e981448b9398b9ea2dba1cd84bc5e236f29d5ac506f5646aa3e38928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWE5YB55%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgdJNsrQGoktDdf16GKZUQZHg%2FqoeC0utQFJTvvkv78QIgIkDOAgY%2BPNk4Fz4miRzmqg9v%2BKZonbme6NpYq%2F%2Fj%2FJ8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKUTtY7vwtoEc9wsfCrcAxe0dSzqUSxEzt0GZJuj5BBI7Fg6K1iHIKQnMYPZpOAd4lRoIGZr5I8CykpJKsI%2BEzfgLYQsUvWoOc%2FagPhcQ%2FfsrHDdtt2vqtojz%2Fzlhh6T5k9SWhriEzeSfs55gqFoofAQQpiwV7QGM66vROcVanchEud%2FhsU0gixO%2Bm0H5iUSzjPOFmc9y1CudnhXLTd2LVNtE1kwTeoInzPDz8f150HjeF9yAU2hsDOhDhxlv4050PZRdEHR9%2BlSOqPIYal31gG%2FbZcGV1Y10aSJ5%2BaYMsHUKPMYXx2ZPuFF94xIWkyUo%2BX7BbiO9wVK0F%2FpP8J90roITkTiqrc2q7i96PTehbVMQ7sSR%2FO795LTH3BgAygPzHVqjFOI0vvi1wCaDQZ4wsi8PPDC%2B9kyV7zjziBXYCHELypNpn4aYC%2B0Vd%2B98i62ZJCHcQfWEmx3fBvFOfVUWtOuRWPxtqNYNMcoViEFrEdUC%2FTu7oo%2FRlfH%2BC86zQpaI4JUEl4NP9TlDO1ekjDcLcgfNKa3feFo%2FgU0UQ7Vwvb8c8AB2UjpL3dCfupMD0PrGI6N7PD8ikfqlPoBIuH80u3HiBxTjEY37Xnd4SaN080X6D0bVV5YcHHzCQ1mvea8kfs8jG4m%2FIOSz5oWMNGxmckGOqUBH3XCOfVnrcXYksPIexvrGWoH2TLtJGhtlCzbBgKSFLXedz2hsjenIO%2BCdGOtEdz9PXoqB27m8kUe9E%2BZl1DkhROrFXJGpoXjwVgcO7%2F4D8cSt4y%2FUZPid6uYZp0OEGLUH1nwRV4iNw%2BdOrTwA0vanO66hr7nRxuoSWe08XfTa%2B0sAsnPdSZDYlAl%2FPu7GXbaMnOvZRoZC69vIC5PAE6IAUj9rMzR&X-Amz-Signature=c4996f3104fa44ed002806e4e15b4363bece0083b0b2dc751c550025c5086dce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWE5YB55%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgdJNsrQGoktDdf16GKZUQZHg%2FqoeC0utQFJTvvkv78QIgIkDOAgY%2BPNk4Fz4miRzmqg9v%2BKZonbme6NpYq%2F%2Fj%2FJ8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKUTtY7vwtoEc9wsfCrcAxe0dSzqUSxEzt0GZJuj5BBI7Fg6K1iHIKQnMYPZpOAd4lRoIGZr5I8CykpJKsI%2BEzfgLYQsUvWoOc%2FagPhcQ%2FfsrHDdtt2vqtojz%2Fzlhh6T5k9SWhriEzeSfs55gqFoofAQQpiwV7QGM66vROcVanchEud%2FhsU0gixO%2Bm0H5iUSzjPOFmc9y1CudnhXLTd2LVNtE1kwTeoInzPDz8f150HjeF9yAU2hsDOhDhxlv4050PZRdEHR9%2BlSOqPIYal31gG%2FbZcGV1Y10aSJ5%2BaYMsHUKPMYXx2ZPuFF94xIWkyUo%2BX7BbiO9wVK0F%2FpP8J90roITkTiqrc2q7i96PTehbVMQ7sSR%2FO795LTH3BgAygPzHVqjFOI0vvi1wCaDQZ4wsi8PPDC%2B9kyV7zjziBXYCHELypNpn4aYC%2B0Vd%2B98i62ZJCHcQfWEmx3fBvFOfVUWtOuRWPxtqNYNMcoViEFrEdUC%2FTu7oo%2FRlfH%2BC86zQpaI4JUEl4NP9TlDO1ekjDcLcgfNKa3feFo%2FgU0UQ7Vwvb8c8AB2UjpL3dCfupMD0PrGI6N7PD8ikfqlPoBIuH80u3HiBxTjEY37Xnd4SaN080X6D0bVV5YcHHzCQ1mvea8kfs8jG4m%2FIOSz5oWMNGxmckGOqUBH3XCOfVnrcXYksPIexvrGWoH2TLtJGhtlCzbBgKSFLXedz2hsjenIO%2BCdGOtEdz9PXoqB27m8kUe9E%2BZl1DkhROrFXJGpoXjwVgcO7%2F4D8cSt4y%2FUZPid6uYZp0OEGLUH1nwRV4iNw%2BdOrTwA0vanO66hr7nRxuoSWe08XfTa%2B0sAsnPdSZDYlAl%2FPu7GXbaMnOvZRoZC69vIC5PAE6IAUj9rMzR&X-Amz-Signature=5f731c0b0b0b2741379a804737eb42138941856d5446524eb34f479cd13031e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWE5YB55%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgdJNsrQGoktDdf16GKZUQZHg%2FqoeC0utQFJTvvkv78QIgIkDOAgY%2BPNk4Fz4miRzmqg9v%2BKZonbme6NpYq%2F%2Fj%2FJ8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKUTtY7vwtoEc9wsfCrcAxe0dSzqUSxEzt0GZJuj5BBI7Fg6K1iHIKQnMYPZpOAd4lRoIGZr5I8CykpJKsI%2BEzfgLYQsUvWoOc%2FagPhcQ%2FfsrHDdtt2vqtojz%2Fzlhh6T5k9SWhriEzeSfs55gqFoofAQQpiwV7QGM66vROcVanchEud%2FhsU0gixO%2Bm0H5iUSzjPOFmc9y1CudnhXLTd2LVNtE1kwTeoInzPDz8f150HjeF9yAU2hsDOhDhxlv4050PZRdEHR9%2BlSOqPIYal31gG%2FbZcGV1Y10aSJ5%2BaYMsHUKPMYXx2ZPuFF94xIWkyUo%2BX7BbiO9wVK0F%2FpP8J90roITkTiqrc2q7i96PTehbVMQ7sSR%2FO795LTH3BgAygPzHVqjFOI0vvi1wCaDQZ4wsi8PPDC%2B9kyV7zjziBXYCHELypNpn4aYC%2B0Vd%2B98i62ZJCHcQfWEmx3fBvFOfVUWtOuRWPxtqNYNMcoViEFrEdUC%2FTu7oo%2FRlfH%2BC86zQpaI4JUEl4NP9TlDO1ekjDcLcgfNKa3feFo%2FgU0UQ7Vwvb8c8AB2UjpL3dCfupMD0PrGI6N7PD8ikfqlPoBIuH80u3HiBxTjEY37Xnd4SaN080X6D0bVV5YcHHzCQ1mvea8kfs8jG4m%2FIOSz5oWMNGxmckGOqUBH3XCOfVnrcXYksPIexvrGWoH2TLtJGhtlCzbBgKSFLXedz2hsjenIO%2BCdGOtEdz9PXoqB27m8kUe9E%2BZl1DkhROrFXJGpoXjwVgcO7%2F4D8cSt4y%2FUZPid6uYZp0OEGLUH1nwRV4iNw%2BdOrTwA0vanO66hr7nRxuoSWe08XfTa%2B0sAsnPdSZDYlAl%2FPu7GXbaMnOvZRoZC69vIC5PAE6IAUj9rMzR&X-Amz-Signature=662bc3d8c8eea2b53702ccd3c2c469b5d957c3bd6364ee0691057c16689fbcbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2BN7VX3%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGQo31ZSyB3wcYJtTQKhdiGACCjsiz9dAnue%2Fw%2Fdx%2FJAIgJWxGH04c5T%2BZFfoVrQrDh%2BHFp2liwjLX8VMeMLaqL%2Fcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJOZUkl08cqdT4EieSrcA4ogZ3Dd0Mv6BuVonQ2aGEgLxxwvX4iVQF0LefP0awWNFTafF9rxAI2bcXN7xV3ozmEYYgMZBQ3a4Sgca0%2Fqb8k39lp2hppkLRkl9dJZy%2FZPOeyupI2KIXS8sFOXlI%2FXQHCv5s4RJbwHR63%2F188TQcDi%2Be8Q4Imp5HC42Xudxhvktuj27yoGf9OI6S5E8SqmONy4G9BhF9iTMUoDqT3c3n8XHBzemmytXzb9ty8kcViHpk6AlhwjNsNMbnoYR8J8ODaDeLAf8rTn2fP9uyfDJH29NaUVEQsuM8ev3JG%2FBYHC3yk5Bh3eQnLpnOQhpNmSMyzzg796adtqUh%2Bc8p0tTs5N6yKBu%2BhOSlr%2BRqDVNJ%2BjRzvpDpVzArsckb2to4PnpfCB9XG8k2at9TkQaojguvT40U2OnTnwD5lJYyAQsoQ%2BbaBxejCRfS7VDSx%2FARUwl2moscskC5G3bs%2F15hAQ9yJxl0Lr1VVeP5deiLVImIfqhCZbtXodN5XJHlOxabN1OWlAiNPt0MXWcYtmsT86T2k2%2B0TM8lpyXFmrESoX3%2FkKGzaUdasnyiCcEa1V3zZd34AMyRfLMCB0DuSYWlytMH30s2Z1u9SG7g6JixTHBLY%2FUivvbtVQz8tLa9yqMP%2BvmckGOqUBJJlDTCEMF3aC946b86XY3uTh9eF7IxlguyMb03Cv%2BVcnX%2BHUH4tlm17tgIk%2BUpdyP7qJIOxr%2BqTM01TmXsKMFZ7mv5%2Bdssp7ZRZNNZrQVEuwRlHccZgcT%2Fl9zuzBxHJAWNbTGNe89O5OVfdUfu6IGQvs%2Bh8xktlVposesBE0cxAtH%2F28C4FEqH0htKHrvC2d9YzAA4ATwXlc8PF%2FLUJONe4KpS%2FB&X-Amz-Signature=2367d2e8c965720f0660e05c0b0658c5a6b12d041f72a32b4765ad84063105f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P6DMR26%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLLY9m%2FKZNoBTMRpfpZ6R2VB38p7himmmX%2F7zsilcI0gIhANFg7JW%2F7D6hCPB3aDW%2FDF65RtXw9SE9m9TbebMJFoFKKv8DCHsQABoMNjM3NDIzMTgzODA1IgxPPodv1c8gpN7cBY4q3APa%2FBHmHXWFbelDWbO0X0wppGqOdc7U2dp2nWcgL3tQXoZB%2FeqCabiwUP1CALbkuVhMZu5uLKAExeKejJLF2%2BhBtFWaNE0OQ9id9uSCSBN8EJQ0A455%2BgFVrnI%2FlIx86gxtEfMNew%2FQ3kmtX8jbjqPRGFIe6rIbHHNM94YrDgxiQyP0uiKcIXhmimmSsz44ASznpwqxdbn31YnfOg77VTYrB0sNQCbpZoMrOfz1wSYR4VZowsxsYMiCFmTFI5y9wBiXBfZQ3hL7wMsnTvJ0BaKM%2BpXTatPGLjsmRPuNIX4BHV8D4UT%2FlRRiionSNcyaMYAIHS8bolqA0ro1brqJ87xLHWirh4U%2FS%2FVHg8CDLxYdjW4PPeatCbyvVBIWbhzwaFJhjPFMqugw5FxSA3vP3SS1V25cvTVX41gFiT8EDJ4V65iY%2Bqkh25gKTPWfKq%2FeK1WbiwlGnMJHMjJxeh6xji0s2Zttn5pOiPG41LjVf%2F0aQ5oPVqIQR%2Fz%2BbmcwQFAnNHFGlnpKni5ippIOqXDXUQ3fPPGjA2d5JS50E8MX7cTDfG%2FLgrBUOFTxytGPdiNsABHnAWN9pT9whNk0BCbHe9ckhbVJoAZC%2FtofZGA%2F8Sgn4HslV9rOrau38SkwPTD8spnJBjqkAa15Zy3T6UiPfqu5H%2BzSSiXGmFCavF%2FdqKCLCuDUvW0l62uvdwJfIhU1dYDxiT1aYtycBPdKUJ9Dq0%2BKU4SXV0FABv11PhdbPKZ%2BSfoIO0yQlgfH51Nt5UCTfpojXvscBCc%2FEtCgrA9pbMr1TZodWZ%2BUU7jb%2F4%2B1qyV0YmveRo0UIDzHrGbl9Xt8mQGR%2BdMIqiZ5A9kGZYp3o8I0tSAyuTRXYVnl&X-Amz-Signature=de1c7a353f066c9304fcb81ff0c17c64339becf25ce14945b5bfbb4c881f6ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNVTZRA%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu%2FeDw0EjBRhi5hDonZ9rJA%2F68P3z4eFte9FF6m1s3%2FQIhAL8PjnrvpftT4QrIdkLPT01H7Uss7O5cN3Xm%2Bg1VtLqzKv8DCHsQABoMNjM3NDIzMTgzODA1Igzk8pba%2BVy3J2i5mNUq3APiTvc6gwjxL8qjQ0XWdmspGG0Dxrn4gU59egoRSx3wO3DjxLro4NVvogiXzcn3ZHD2qBFUyinniL7mcZnnhqrOn9mcsGFZF59bc3LxMTC4QAllD%2BnHtMXphYoS2xOQ57SaIZI8I0RyfR%2FaYa8h64Jf8XQs%2FZkm3%2Ba7Cy%2FGfuGJyVxamaNS%2FNcqIfDus9TolTITbUTnJ86YPICPRER7Uyfejo8nb5%2Fk0K14N2vP3NO3EKttBGjqUhBBPB2C%2F%2FaxATpxI9UTZA0RrUr0yX9Rk%2FzfeL8nT95b6QSOAVuu%2FdehYBcq5idSSM2KxtX4brtXHlLVXDYqYVhK%2BYDBdEKF9scTvktl6i2OfsdD%2B4X%2F1Ja8Ge7g63q%2BTE1aeOHSCml2l479ySOB2wfoY2%2ByfcVJZrpdXzgJ%2Bc49iEEYxXI3eNeaf50o4YqMN%2F0emy%2FC4ymG1g%2FB%2B%2BttWsmJIL25D%2B3W3mCk6yzBpCaSh7q%2BCniFSw19pQZIPi95j6cEexwiuGU4DEKpGQSQ87U7aEGuHaKulSeIrzszUfFTcyyoPfOu2KILC19xKb8GtFTLfkUOjMKjOV0o7fxSVGvfeNn75NVKcaQdIgMP8JuqgSflsbHnjaHjZWSlGWu3RpagNbDg%2BDCQsJnJBjqkAYri%2FsknXsjVz%2Be%2BqYpuXOfDirOtap3OGseZF9TZ3NNOpccajhT8e3oQ3z2S0SJjPU71vLqZSnBuEU51o8dtp82NwmONsAhXEbv3XCegWcHCsKGQFe2yDyoXuk8BcdhLS%2B1uqtJ5aM92TWoKOV6OgisZLBoQNgfAuvYt4dvnPD9ptKvOi7Y%2Fw%2FRTRr8b6aEqrUNka%2FjdBcqyVs%2Fh6muFaXKYlg4%2F&X-Amz-Signature=19c06a8d000a9bc0d0c707efba75265dcb5a246bf82472fb74fd0c7966ed911e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWE5YB55%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgdJNsrQGoktDdf16GKZUQZHg%2FqoeC0utQFJTvvkv78QIgIkDOAgY%2BPNk4Fz4miRzmqg9v%2BKZonbme6NpYq%2F%2Fj%2FJ8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKUTtY7vwtoEc9wsfCrcAxe0dSzqUSxEzt0GZJuj5BBI7Fg6K1iHIKQnMYPZpOAd4lRoIGZr5I8CykpJKsI%2BEzfgLYQsUvWoOc%2FagPhcQ%2FfsrHDdtt2vqtojz%2Fzlhh6T5k9SWhriEzeSfs55gqFoofAQQpiwV7QGM66vROcVanchEud%2FhsU0gixO%2Bm0H5iUSzjPOFmc9y1CudnhXLTd2LVNtE1kwTeoInzPDz8f150HjeF9yAU2hsDOhDhxlv4050PZRdEHR9%2BlSOqPIYal31gG%2FbZcGV1Y10aSJ5%2BaYMsHUKPMYXx2ZPuFF94xIWkyUo%2BX7BbiO9wVK0F%2FpP8J90roITkTiqrc2q7i96PTehbVMQ7sSR%2FO795LTH3BgAygPzHVqjFOI0vvi1wCaDQZ4wsi8PPDC%2B9kyV7zjziBXYCHELypNpn4aYC%2B0Vd%2B98i62ZJCHcQfWEmx3fBvFOfVUWtOuRWPxtqNYNMcoViEFrEdUC%2FTu7oo%2FRlfH%2BC86zQpaI4JUEl4NP9TlDO1ekjDcLcgfNKa3feFo%2FgU0UQ7Vwvb8c8AB2UjpL3dCfupMD0PrGI6N7PD8ikfqlPoBIuH80u3HiBxTjEY37Xnd4SaN080X6D0bVV5YcHHzCQ1mvea8kfs8jG4m%2FIOSz5oWMNGxmckGOqUBH3XCOfVnrcXYksPIexvrGWoH2TLtJGhtlCzbBgKSFLXedz2hsjenIO%2BCdGOtEdz9PXoqB27m8kUe9E%2BZl1DkhROrFXJGpoXjwVgcO7%2F4D8cSt4y%2FUZPid6uYZp0OEGLUH1nwRV4iNw%2BdOrTwA0vanO66hr7nRxuoSWe08XfTa%2B0sAsnPdSZDYlAl%2FPu7GXbaMnOvZRoZC69vIC5PAE6IAUj9rMzR&X-Amz-Signature=4834dd4422fc79efca4d12a71793d3012afcd0849d54a66ae390d207f3f5b38a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKAEA2KR%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FRL%2Ba6kG1guuBQDwMNdhNhTByfTM15u68wPgeizJHXAiEA77Hkby%2F6YqdFlHzB4vCm5MUSeb1WyQmaiGZLN52ebioq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFEDqfKn1sKcakPnnircA5vh0TQGuyQg4oKNgmTD0tDe%2BWZSP02Ki%2FMCbWGzD8Km2Lh0Lo0mgp5x7QA9LqQBiJAUQM%2BxkCrjuamyD0MUMzcTdxDILkTEiJDoZ7bTQ6Vehm4gnE%2BBDOyHnDQtSoMpezCWFiZeCjW2xbKcaz25%2Bd4LJ44LVwxCHx4Ifyn7c1gx2kwlOGxt2AW3MD6eDc16hKTN03CNIRh6lsnRQ0kWAROrcRTbjbvbPZZynjY%2FEGkd0CW8OYbORAygRDEqNE48ttmLhpYVK1taMOg96hq4es85tVUYwiozTm71QL0ZEuQnIBdHLTNpaj4VoPkL%2BfBDNDFQs83tNhss%2FvrePu2or4sovx%2FvQeiF%2FtAbbqPbP0h2zTzSOXl81mUWNpYx9SbpuGyDtUcRPbSG6G3XMBTa2c7OgujayMx%2BkmhYMTFo8q0OWDvagcmfCsQ5u%2BckSiggaTTiFUpX413zyAuqrWLXw0AIqLIwAmX1puIOfBI8BX2EdDERvnjO8wTaIJd0p66IP2XgYvYP045NjChpOqqSYXJTeM5UKLZ%2F20eTfD%2Fmq%2FBDkDjV6HlmJYWK72OJOICM4bTbDoTCUizlbK8wF9Kw%2FWyY2TEFJ9Tql9nwW3SBWy%2FBk6AyctG93WHtMweBMJSxmckGOqUB0lY6i1Du0JAImR5x9ebIAdG%2BM2db1KstuNpfmc1UbE5wt6dj%2B8HswAZk2Qwgpsp4LJCdwUHz4cacyEtJzpRQ3S4L44GCJ15Zcq5QmAB%2FiAc0u8fLglK7Ruvgb9OijcI4Xxp%2FsUpouO9CD1qz2FGuHDKLQBj2uTuNhshI9F4Dahh2BVQgE3P6zDUv0XMHZuS6P4hgz2zrnLgLmGweglaySuzfpdyN&X-Amz-Signature=ed036244851d49e69730903c0cf3ae7e988e639f434bc9d722c9753e237e5481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWE5YB55%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgdJNsrQGoktDdf16GKZUQZHg%2FqoeC0utQFJTvvkv78QIgIkDOAgY%2BPNk4Fz4miRzmqg9v%2BKZonbme6NpYq%2F%2Fj%2FJ8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKUTtY7vwtoEc9wsfCrcAxe0dSzqUSxEzt0GZJuj5BBI7Fg6K1iHIKQnMYPZpOAd4lRoIGZr5I8CykpJKsI%2BEzfgLYQsUvWoOc%2FagPhcQ%2FfsrHDdtt2vqtojz%2Fzlhh6T5k9SWhriEzeSfs55gqFoofAQQpiwV7QGM66vROcVanchEud%2FhsU0gixO%2Bm0H5iUSzjPOFmc9y1CudnhXLTd2LVNtE1kwTeoInzPDz8f150HjeF9yAU2hsDOhDhxlv4050PZRdEHR9%2BlSOqPIYal31gG%2FbZcGV1Y10aSJ5%2BaYMsHUKPMYXx2ZPuFF94xIWkyUo%2BX7BbiO9wVK0F%2FpP8J90roITkTiqrc2q7i96PTehbVMQ7sSR%2FO795LTH3BgAygPzHVqjFOI0vvi1wCaDQZ4wsi8PPDC%2B9kyV7zjziBXYCHELypNpn4aYC%2B0Vd%2B98i62ZJCHcQfWEmx3fBvFOfVUWtOuRWPxtqNYNMcoViEFrEdUC%2FTu7oo%2FRlfH%2BC86zQpaI4JUEl4NP9TlDO1ekjDcLcgfNKa3feFo%2FgU0UQ7Vwvb8c8AB2UjpL3dCfupMD0PrGI6N7PD8ikfqlPoBIuH80u3HiBxTjEY37Xnd4SaN080X6D0bVV5YcHHzCQ1mvea8kfs8jG4m%2FIOSz5oWMNGxmckGOqUBH3XCOfVnrcXYksPIexvrGWoH2TLtJGhtlCzbBgKSFLXedz2hsjenIO%2BCdGOtEdz9PXoqB27m8kUe9E%2BZl1DkhROrFXJGpoXjwVgcO7%2F4D8cSt4y%2FUZPid6uYZp0OEGLUH1nwRV4iNw%2BdOrTwA0vanO66hr7nRxuoSWe08XfTa%2B0sAsnPdSZDYlAl%2FPu7GXbaMnOvZRoZC69vIC5PAE6IAUj9rMzR&X-Amz-Signature=94e8904c232f9fb5f8295a3311266925da6db528fe8090f5b358d05c9d17a998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTVRGWYI%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFQxadlclqspmB9Uj%2BXsL14O9D2cpE9O3K2cAKnjCwGgIhAJCuN1fRmhIZaWzw4LQHy7PnwFuRyGg07pluiRZXC61LKv8DCHsQABoMNjM3NDIzMTgzODA1IgxrspONZTfm52E31OEq3ANXe8y9NzqUvEzvh%2BsuLuCzeh2u7Q84nWADcZAJD%2BcjpySbWupcGrpEwvzvuiq5bzZI890jBnj5Ve7sSsTVmK%2FquQRX0Ks9sRKK5h9HhMabCoo0OCKTCw2bcjnsERDdCbWqzONtszeRZ%2BKCw1bVGeZaRKWdGb98IYM4ZxgRpb1SoPmJXd3GHbzgDbvGQsIrc4t5TN0ozmuGrC5pmO0kYS4V2DPFZeCyPyb7giG7Yb7AERhSA%2Fm%2F2fsipWtA8eaWmwMTxkWF2H3YNfHJSzkoL1btx19B3GbVAOlkn70bQ9TpHaqBJhU%2FWgxWKle31ookJbnsTX6fNqzcleDQEnHeUh3KMKFaMHdMJFttQaGY09NxfXV5QHNFzj58yqt66dg7sth6V2URWPYx4rLY%2FJqbGB81S8RZSZYJkaxsDMcIyWdf3y4ni5KGP%2FJs5hD3TYCSms9ukvzayV2hFWJFwwUzIwV0aVv6cZ5UwZt%2F7i3FM1s%2BIsqn%2BowZQ8odV92IeqHdp9imEo7xYrqriul9DV5hy%2Bea3fQaCkmUY9KXTEwCWeR0bhQA%2FrzxoO67BjlkFncZehY8VNFOD1xSEfo5Md3vWemmXkK8zNZePikupc6J4aJRQJzwSL%2Fopyx0CmjGGjCSsZnJBjqkAVXzuyfahZY5VD3pxFL4Jhfcqyb%2B7a0YVAY7k0ecEXKfRP8CndEehOmMjdpqzmrW7wjFTpVUMDTxr6mCFkVvyxEczBbfTMg7ALhDNSL4QaZyW%2BjTJDDKu43Tx%2BXJrzHF1t4puP9pQhXS0JktAYgFSFowqPD73I9qYlN1pkX2CUGHzuJTKueutKGPcA1hXUF8X04CHiNBQ96OLlX5wyng8o9O5gpR&X-Amz-Signature=2d5f67843154061fb8aa0e6e2167b57ebac18a0b366fdaa4507cc314877638b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWE5YB55%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgdJNsrQGoktDdf16GKZUQZHg%2FqoeC0utQFJTvvkv78QIgIkDOAgY%2BPNk4Fz4miRzmqg9v%2BKZonbme6NpYq%2F%2Fj%2FJ8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKUTtY7vwtoEc9wsfCrcAxe0dSzqUSxEzt0GZJuj5BBI7Fg6K1iHIKQnMYPZpOAd4lRoIGZr5I8CykpJKsI%2BEzfgLYQsUvWoOc%2FagPhcQ%2FfsrHDdtt2vqtojz%2Fzlhh6T5k9SWhriEzeSfs55gqFoofAQQpiwV7QGM66vROcVanchEud%2FhsU0gixO%2Bm0H5iUSzjPOFmc9y1CudnhXLTd2LVNtE1kwTeoInzPDz8f150HjeF9yAU2hsDOhDhxlv4050PZRdEHR9%2BlSOqPIYal31gG%2FbZcGV1Y10aSJ5%2BaYMsHUKPMYXx2ZPuFF94xIWkyUo%2BX7BbiO9wVK0F%2FpP8J90roITkTiqrc2q7i96PTehbVMQ7sSR%2FO795LTH3BgAygPzHVqjFOI0vvi1wCaDQZ4wsi8PPDC%2B9kyV7zjziBXYCHELypNpn4aYC%2B0Vd%2B98i62ZJCHcQfWEmx3fBvFOfVUWtOuRWPxtqNYNMcoViEFrEdUC%2FTu7oo%2FRlfH%2BC86zQpaI4JUEl4NP9TlDO1ekjDcLcgfNKa3feFo%2FgU0UQ7Vwvb8c8AB2UjpL3dCfupMD0PrGI6N7PD8ikfqlPoBIuH80u3HiBxTjEY37Xnd4SaN080X6D0bVV5YcHHzCQ1mvea8kfs8jG4m%2FIOSz5oWMNGxmckGOqUBH3XCOfVnrcXYksPIexvrGWoH2TLtJGhtlCzbBgKSFLXedz2hsjenIO%2BCdGOtEdz9PXoqB27m8kUe9E%2BZl1DkhROrFXJGpoXjwVgcO7%2F4D8cSt4y%2FUZPid6uYZp0OEGLUH1nwRV4iNw%2BdOrTwA0vanO66hr7nRxuoSWe08XfTa%2B0sAsnPdSZDYlAl%2FPu7GXbaMnOvZRoZC69vIC5PAE6IAUj9rMzR&X-Amz-Signature=4d643183e374b452aad162ddb46cb670752c44bbde7aaf03db89afdf994b89a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNJTZDJG%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa21Gp4%2FqWXPhWtKp1YYQKPIIKjhaVM3mAaLp2mUwKhQIgGzuak8Q%2Be4UyZg%2BJ3BKz3K4KadZo8yOvZGXF4QsmNosq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIvDUICFmrXFaMTbZircA5zERMZ6snWjf%2ByymBsGDHnEMzvL0ybFKh8NEQ71X252OHnkIiUJaMFesVj7ZiDVqXpAxw6yQo8qY%2BN4PwmuptSDBtMHfh35IL5td4XGnBWHBroD7oMQ8wgMLIN7yJyQ2JuO7cKAgDCgBoIVZOw8m3wnE%2FE8rNOu4BXmQ4OA9MF3VwTGT2TNwOWXAMXzFtgXxIGDw0b2U8%2BNCvhQEJOhrQavw1dyiBkMO5lE71ED0UePTBefbiFR8yzmful5pD9tG%2F2M60lUGLDWub%2FglBLlV5ss7DIAP0zxuS64iWPclypZNw%2Ft7TiO9a7u6mdA0Nkse8WYjIAoz8u88SJl6imUiatkpgL7dd2pCi8TM4b5Nx6EpxGv8P68pHPiE0xPrJ8xsJuOPIjKz7gFZ9iRgs2iL%2Bm1ugrApRFcbAZuQUB51deLJNKR90fT446GlS5dLuzDd0UZg6VRiaAIccaUcOF0x%2Ff0fyXHN0gYOSZT0CAeS80yFzJ0uXCtEkPjE4%2B6I82%2Bz2aMi8IzaQm1tA14ojhqmnaDume%2FFNbfu%2BNfKlH%2FDjkVbPtJqXxYCr4gSs6jbn5ahyVnIOoGuERUCN%2FuQm2zNgo%2BocFVo9vD0zkarIWVV96PVsAy6hokkbC6GmnCMNKxmckGOqUBRWz6kf7I%2BsKQDmGwPq2%2FkXhNEbbqKCcphSMblokCyItsC2C0Gv9tz0a5wtNb4a6HOu1crRuxBYz3YumDM4qXehJVdKrY6mBtl6fN1akv3xkGZkHjnINZBC86lA29MhHTDfcRWtROe4KU73ZeI89u%2FaCU7NoUhe62J9wnYLERJHgwwyCW8tVwpE%2BK0gbGM%2FeYZJ8%2FR4cDknNBsEbGBez2%2F8XCoh3X&X-Amz-Signature=6e3d99145c6863825aa0278513bde23a04694e2dc2499d9fc8a55ead34be837d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWE5YB55%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgdJNsrQGoktDdf16GKZUQZHg%2FqoeC0utQFJTvvkv78QIgIkDOAgY%2BPNk4Fz4miRzmqg9v%2BKZonbme6NpYq%2F%2Fj%2FJ8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKUTtY7vwtoEc9wsfCrcAxe0dSzqUSxEzt0GZJuj5BBI7Fg6K1iHIKQnMYPZpOAd4lRoIGZr5I8CykpJKsI%2BEzfgLYQsUvWoOc%2FagPhcQ%2FfsrHDdtt2vqtojz%2Fzlhh6T5k9SWhriEzeSfs55gqFoofAQQpiwV7QGM66vROcVanchEud%2FhsU0gixO%2Bm0H5iUSzjPOFmc9y1CudnhXLTd2LVNtE1kwTeoInzPDz8f150HjeF9yAU2hsDOhDhxlv4050PZRdEHR9%2BlSOqPIYal31gG%2FbZcGV1Y10aSJ5%2BaYMsHUKPMYXx2ZPuFF94xIWkyUo%2BX7BbiO9wVK0F%2FpP8J90roITkTiqrc2q7i96PTehbVMQ7sSR%2FO795LTH3BgAygPzHVqjFOI0vvi1wCaDQZ4wsi8PPDC%2B9kyV7zjziBXYCHELypNpn4aYC%2B0Vd%2B98i62ZJCHcQfWEmx3fBvFOfVUWtOuRWPxtqNYNMcoViEFrEdUC%2FTu7oo%2FRlfH%2BC86zQpaI4JUEl4NP9TlDO1ekjDcLcgfNKa3feFo%2FgU0UQ7Vwvb8c8AB2UjpL3dCfupMD0PrGI6N7PD8ikfqlPoBIuH80u3HiBxTjEY37Xnd4SaN080X6D0bVV5YcHHzCQ1mvea8kfs8jG4m%2FIOSz5oWMNGxmckGOqUBH3XCOfVnrcXYksPIexvrGWoH2TLtJGhtlCzbBgKSFLXedz2hsjenIO%2BCdGOtEdz9PXoqB27m8kUe9E%2BZl1DkhROrFXJGpoXjwVgcO7%2F4D8cSt4y%2FUZPid6uYZp0OEGLUH1nwRV4iNw%2BdOrTwA0vanO66hr7nRxuoSWe08XfTa%2B0sAsnPdSZDYlAl%2FPu7GXbaMnOvZRoZC69vIC5PAE6IAUj9rMzR&X-Amz-Signature=be52de4b7893406b9263b9038b0ee1cb28d543ba8c5c322009a28ec429daced9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CDFWKPP%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVG1m6DHBifnOnwF1asw%2BdtnKxHGC9eyvwp2lIBUqs2QIgap3NREm1GS3maD3FEHrbsCjqE8YSrz3HajUHGKH72fkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLMhtK5Kg%2BHHKsAh%2FircA1uhDlA1xHLnf7%2BKL2krI9sjiPWA8mfCjGiMg6gGOeIZ65YFfhBKqekvPLbqAtpw4uplUZdfipXVNg8VtIikhv4vzhiLkIBjfQmWCKN%2FHHYx4fU9BPlgvdPG6T9PBcgQHIAqoN666kbBRdDJpMQhKS84AQRiH4raNRcdXGV3W5sPa%2FaWV2bdP8FZnjlN0nibozBOrXQzbB9uLM72YM%2BIJbcL9rMgHYSC0BtMKQG11O%2Fxwkq7l4qy6PzL4B48Q7HoziO24wwQfIN5ybaB3XWc2CrB9HcPK5DJTPZ2r0r9dslC44DNgKSt6ZgVQBLzX%2Bf%2Fc89fL5LUL6L%2BoaXntn4Nfd5sK1Yr0VTpX%2F8fgKTzHIT10vZVtE1doxGNU7fcTAxmDaUhSNbxlv0GfonMRn56RNGOpRyXVyjnEuB64g%2Bn07eZgE07NefpOm2JNq61BskFW0TtZX3wAbxzg9Hbd9lPbNcNXOlgVvTHAjcPJhHROd3rRoVcKQMyJm%2FvH%2BJTxVslmrBMyN762iV5trJnq0uxVH3G0wWjmtBlWAyBYs%2Byi2Ta%2FYyCfhdGQUbzYjnJXoVZiGzlpbM5%2FxklUhGS1mGHPS%2FsabwThKnMK7DvJyQ19q2%2BjWj1f5kEOpSK1SU3MNexmckGOqUBvhzfCAwg%2Bj8ouyBn3VA6XfpDOcLeebWi7Bgf0bIb7%2BrP%2BP6KJ48p002VPxKU1u7GZ5SW1v8sPedTYqgUDBUfn4mdsSJC2mckVEMkE2cQS3DA8J%2FxovsxkpPmBpYg4dfBUUL7BWeq98DCdVUNcxF3m0mtmpdGkwUr6tJLA36WWNBNQZjD21dJxDLQrVBV5c%2FZjU8tfX7aWmYki2HJ3Mg677oD5QEE&X-Amz-Signature=566ffd502e508163f96e2f0ed62db06f1f9f330758d8faa2eb0896a6d43e2fe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWE5YB55%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgdJNsrQGoktDdf16GKZUQZHg%2FqoeC0utQFJTvvkv78QIgIkDOAgY%2BPNk4Fz4miRzmqg9v%2BKZonbme6NpYq%2F%2Fj%2FJ8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKUTtY7vwtoEc9wsfCrcAxe0dSzqUSxEzt0GZJuj5BBI7Fg6K1iHIKQnMYPZpOAd4lRoIGZr5I8CykpJKsI%2BEzfgLYQsUvWoOc%2FagPhcQ%2FfsrHDdtt2vqtojz%2Fzlhh6T5k9SWhriEzeSfs55gqFoofAQQpiwV7QGM66vROcVanchEud%2FhsU0gixO%2Bm0H5iUSzjPOFmc9y1CudnhXLTd2LVNtE1kwTeoInzPDz8f150HjeF9yAU2hsDOhDhxlv4050PZRdEHR9%2BlSOqPIYal31gG%2FbZcGV1Y10aSJ5%2BaYMsHUKPMYXx2ZPuFF94xIWkyUo%2BX7BbiO9wVK0F%2FpP8J90roITkTiqrc2q7i96PTehbVMQ7sSR%2FO795LTH3BgAygPzHVqjFOI0vvi1wCaDQZ4wsi8PPDC%2B9kyV7zjziBXYCHELypNpn4aYC%2B0Vd%2B98i62ZJCHcQfWEmx3fBvFOfVUWtOuRWPxtqNYNMcoViEFrEdUC%2FTu7oo%2FRlfH%2BC86zQpaI4JUEl4NP9TlDO1ekjDcLcgfNKa3feFo%2FgU0UQ7Vwvb8c8AB2UjpL3dCfupMD0PrGI6N7PD8ikfqlPoBIuH80u3HiBxTjEY37Xnd4SaN080X6D0bVV5YcHHzCQ1mvea8kfs8jG4m%2FIOSz5oWMNGxmckGOqUBH3XCOfVnrcXYksPIexvrGWoH2TLtJGhtlCzbBgKSFLXedz2hsjenIO%2BCdGOtEdz9PXoqB27m8kUe9E%2BZl1DkhROrFXJGpoXjwVgcO7%2F4D8cSt4y%2FUZPid6uYZp0OEGLUH1nwRV4iNw%2BdOrTwA0vanO66hr7nRxuoSWe08XfTa%2B0sAsnPdSZDYlAl%2FPu7GXbaMnOvZRoZC69vIC5PAE6IAUj9rMzR&X-Amz-Signature=7412f21b33f86a071f2738ac6f7799ef66e384be82e9d0f75038c1b3f5da960f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGA5BOY6%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa61nOpsRZnizuXrj8zgrFeGAvOwdMGNtOlckpjdzbmQIhAMUaNJQGymI7CSAJD3IvHi02vNSUotuzEp19yfKiufDYKv8DCHsQABoMNjM3NDIzMTgzODA1IgwqdjONrwAmrxOMTbcq3ANJByvpp7bvojyfa6j80OLdYs1tjZo1BvSJocwnGnet82OUi2cMCUgFmNSLZI4mNVQSyPozY5FwjKr9nQUf5EfIIMnM7X7LddXsW2OUpKGxzIHTrAwGif%2FGMFnwcnkaTOxti10g4qJRkMiIxhzfTxJ9dDHGB2%2FyMs6jXiZUCnonS6kx7etwy3XSydiDrQ45sqp%2BfPI9RTh7khXb%2BXym3bP2fapuHhvKssETN1j0spmhGWbZ%2F3%2BHCihSNV3CaKWH%2BE4j3DOAEITqe%2BK9o3iIkEishpTnQ3BgdkxZsxmF%2FTbJEygbXwUXBWEc8Pg26hmjE9%2FmyC6ANP5p%2BnzX45Rf9TmQihsnMn6tH1R4xKH%2FjZBtG%2FrK9gZLEll%2Fd6b1%2FAPF5Hk%2B5NZteOXzElnI%2BxeanMfElJ8xg0pPCz1jJKymW2I9EtP%2FSJEnudwpiSeuiJIms%2Fckcpk%2Bf6Q5lvabY4CzPJTfOPxBn%2BI0aZ5LXJh6Km%2BtdnnTO0nw7C7pRT41%2FivQZhOvj4nHpnoAL4pp8tSeJlWcE78cR4XreKWOWo2z1aslUDnwGHpxcxgSoRgQtzYAre2F5B2Yx%2BnEKUdxD%2BTJhTHQ4z8yYeIjCurw%2FPC4bXn0K3%2FIMrFUXsRXat2R4jDJsZnJBjqkAalDGHZR6So5D%2FY%2BircQO5Q7KIM%2BCJlMDAzQ90Q8AhTCWfPhncqmHWIJRlBqKjP6%2FsZmJWyzxQjdV7ZRinX35uNpH6p18%2F41GetTmWiNfrHAx4VvI1WFOovqWXq70BRArNqQ0gs0QR1HxzHDe3Fx%2F2%2F1pcc2IkJkpNVFD5TBLUdbkmAQUsmi52MmdnAiHVeR29qCdKBP%2B8rsTEVhEfTFI%2BWDFrB0&X-Amz-Signature=314b48fb6ef03b4f1e77e4ee4324e5875a13b34e5849f183c33dc85c6aa20d70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QFEN2Q%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIxidtWO8lJypXlWxu5IxWX%2F5u8xqp4%2BXAnYnoauffYgIgKdv7Y%2FO9LPTOpCVAOcGfrjm4Nlg9KGYxEKZ4QjT2hRYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMQQLOoyew86UK8gRSrcAwj7mY%2FyOa40quPddyhonUDDgow97%2FQzRK29OQQlPsBDJxk9yENyhzMQfxotoBeUTV9dTvUeqbDAphokKJ2PjTJ7%2FyZUMOeo925SReOGwZMe%2BFpD%2FXA2uDjk1vbUxl3aKxiI9q689Ewc6nYi0fpjNIzrzZEAJOYkTeb35Yt1muCKhHB%2FaXYYL%2FXH0Q2I%2Fh8SJ8OGSmoh3TvASZ7D0p%2FLkIrbznxwhBQcVlYzuzBJ6w%2BSJz1BnYF5m7MU22YNfgRPCcMBUMQNcAMCyZBRoUGpocKEVTUZbukkvU%2ByGvnuv4N2nH200ybB5Uc%2BpxOkB9IivQY5WcY49pKfHNbhbGpsi3WDhq%2FdLVc7i9z02AaRDqSuMuHmY62zytx84h1sa2fZ0hN2V%2FfCFaLooUzfw6DUp2iD2XTDu0q%2B6bRZ9I6BRZGj9klQdRDk%2FBOVz7YUu4huFAQhf%2B3XkfNmSDepu2hL6VRpT7%2FWYwl4%2BmWh7giokDHEa64mfnqXqhLyvpPm54OfAnfeZDOpdp5ehL1ETnnBpPkAjHumfkjb7w%2FZ0mSUQk18akXJOKs98cW9JV4Q67eH1ihm292kKlQhLxl6k4mjv6ETIU79%2F9ikqYeNNpj%2Bapd%2FXSKBjrYWaWy0q1nVMPeymckGOqUBlllDwOrjX%2Fxlvq%2FfCxuLJaouH9%2FGkHiY15wN3m%2FRsYxXTtszvCLmeiGjk4TE3ewIlBuy4b2hnxuJUtfs%2FlpPq6M055t4wVE7jNpUKZklFQ0qEH7V3%2BBJQv4YnarXAqIa4dXsV8Ey5dmv2FlptmlCx0Edd0hTum%2FJv5OI5sdWnMS765yKpwlkUqAjRdi16fpT8%2B9Eoj8327nuAPcZja%2B%2F9mcRPNaI&X-Amz-Signature=b828e3cdff504f228fb5bde37a0e9992b1965309eda1267d5965dc5c72158cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VVBSBL%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE%2B5x8Yb05iJfV6urnAqUNTLIlpGqkY5OvfvfkSXs0VwIhAIXXKAazR7CvQZQ4YR%2By2xPcA5a1UCx09Xp46kiBlk5YKv8DCHoQABoMNjM3NDIzMTgzODA1Igzuu5LitX9qAAeJcdUq3AOwCdqRYVfcTzSCflEUwW%2FZYFs%2BwOFhiK5FDXLOUOs%2BsiHB9HGbz1We92BeXrB1xBTj9UL4TbNMR2joE0Au5FhXskLi%2FavUp%2Fb%2Bgfodm0akktacIGSt%2BEWoBTvAZWxUzBBtgWJZGvDFxKaK22%2BjkDXcA8a7i6m6fV1opgszE5aYLE6kVQSeNLeOhzZqwdcxDtff2Pbujn15Im%2FGy5r%2Fm7iTO9b5BQ9evezOefIM%2B97FFHEAuiZWqR8FEcOpcy1GJesTWZB0DDqTBaTz7ff%2FON9Q9TlQBEIPw2c7OmELch9nxGT%2FowVgPzs7AQBgJYA%2F8CJgIxQ6Jp3HvaR%2BdipRlLnwu0ktOlb97MQOP4WFDVymsyRa3BAJmfjU3NzxMq17EiSj9kCpIvw0aUWOAOQ8ct2R4fYta0qisjLba5lZkzntnbZVI2Oxy3mxcsllAKKmB8u35DzXdQXWxZWFdtMiafna2C1aoVNA%2F7wg%2BiDVYoIpwefCatVNPC5XzkIsBhBXwnkqy6KoRWIHGGdaLljf%2B7%2Fjx%2FlfyeAitbDirF8M6fkv0u%2FPFrFGNElW%2Fj8PhSYekRaNhKfAz1OfEC4YfnOPwhbgNNhaQvXE0jiNXIQdEEVn8MWNEQZzpK5Q1YkNjjCjsJnJBjqkASjd4JPLLx21homMvlfQ%2BdCHqy9folVwP1j8KhnMov2KG%2B5%2BEPfB%2F13nVMhI79KUJLomx9SV7ixu2tbhCSvk%2Bf9DpU%2Fag8ZKTcIAppk%2F85I1kMX1OIeLNBs9VBIW3YGdQfdZxH6kK%2FkWMEtQ18SPZuOuAJKa22tdA1tnrFhzkijrfp9mxURxiLnAwYpq1FoLXuf%2BE3T7UnkWaf157iBpe%2Fto0fwh&X-Amz-Signature=0c2a20acdb85b70c1ecdf78818a2003173cbdf7834a72b683677766c4eecaf6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWE5YB55%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgdJNsrQGoktDdf16GKZUQZHg%2FqoeC0utQFJTvvkv78QIgIkDOAgY%2BPNk4Fz4miRzmqg9v%2BKZonbme6NpYq%2F%2Fj%2FJ8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKUTtY7vwtoEc9wsfCrcAxe0dSzqUSxEzt0GZJuj5BBI7Fg6K1iHIKQnMYPZpOAd4lRoIGZr5I8CykpJKsI%2BEzfgLYQsUvWoOc%2FagPhcQ%2FfsrHDdtt2vqtojz%2Fzlhh6T5k9SWhriEzeSfs55gqFoofAQQpiwV7QGM66vROcVanchEud%2FhsU0gixO%2Bm0H5iUSzjPOFmc9y1CudnhXLTd2LVNtE1kwTeoInzPDz8f150HjeF9yAU2hsDOhDhxlv4050PZRdEHR9%2BlSOqPIYal31gG%2FbZcGV1Y10aSJ5%2BaYMsHUKPMYXx2ZPuFF94xIWkyUo%2BX7BbiO9wVK0F%2FpP8J90roITkTiqrc2q7i96PTehbVMQ7sSR%2FO795LTH3BgAygPzHVqjFOI0vvi1wCaDQZ4wsi8PPDC%2B9kyV7zjziBXYCHELypNpn4aYC%2B0Vd%2B98i62ZJCHcQfWEmx3fBvFOfVUWtOuRWPxtqNYNMcoViEFrEdUC%2FTu7oo%2FRlfH%2BC86zQpaI4JUEl4NP9TlDO1ekjDcLcgfNKa3feFo%2FgU0UQ7Vwvb8c8AB2UjpL3dCfupMD0PrGI6N7PD8ikfqlPoBIuH80u3HiBxTjEY37Xnd4SaN080X6D0bVV5YcHHzCQ1mvea8kfs8jG4m%2FIOSz5oWMNGxmckGOqUBH3XCOfVnrcXYksPIexvrGWoH2TLtJGhtlCzbBgKSFLXedz2hsjenIO%2BCdGOtEdz9PXoqB27m8kUe9E%2BZl1DkhROrFXJGpoXjwVgcO7%2F4D8cSt4y%2FUZPid6uYZp0OEGLUH1nwRV4iNw%2BdOrTwA0vanO66hr7nRxuoSWe08XfTa%2B0sAsnPdSZDYlAl%2FPu7GXbaMnOvZRoZC69vIC5PAE6IAUj9rMzR&X-Amz-Signature=3a446b5eaa24ecdc39d1b20c792b7993f418fce2795699a45dfccd24bb415838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWE5YB55%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgdJNsrQGoktDdf16GKZUQZHg%2FqoeC0utQFJTvvkv78QIgIkDOAgY%2BPNk4Fz4miRzmqg9v%2BKZonbme6NpYq%2F%2Fj%2FJ8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKUTtY7vwtoEc9wsfCrcAxe0dSzqUSxEzt0GZJuj5BBI7Fg6K1iHIKQnMYPZpOAd4lRoIGZr5I8CykpJKsI%2BEzfgLYQsUvWoOc%2FagPhcQ%2FfsrHDdtt2vqtojz%2Fzlhh6T5k9SWhriEzeSfs55gqFoofAQQpiwV7QGM66vROcVanchEud%2FhsU0gixO%2Bm0H5iUSzjPOFmc9y1CudnhXLTd2LVNtE1kwTeoInzPDz8f150HjeF9yAU2hsDOhDhxlv4050PZRdEHR9%2BlSOqPIYal31gG%2FbZcGV1Y10aSJ5%2BaYMsHUKPMYXx2ZPuFF94xIWkyUo%2BX7BbiO9wVK0F%2FpP8J90roITkTiqrc2q7i96PTehbVMQ7sSR%2FO795LTH3BgAygPzHVqjFOI0vvi1wCaDQZ4wsi8PPDC%2B9kyV7zjziBXYCHELypNpn4aYC%2B0Vd%2B98i62ZJCHcQfWEmx3fBvFOfVUWtOuRWPxtqNYNMcoViEFrEdUC%2FTu7oo%2FRlfH%2BC86zQpaI4JUEl4NP9TlDO1ekjDcLcgfNKa3feFo%2FgU0UQ7Vwvb8c8AB2UjpL3dCfupMD0PrGI6N7PD8ikfqlPoBIuH80u3HiBxTjEY37Xnd4SaN080X6D0bVV5YcHHzCQ1mvea8kfs8jG4m%2FIOSz5oWMNGxmckGOqUBH3XCOfVnrcXYksPIexvrGWoH2TLtJGhtlCzbBgKSFLXedz2hsjenIO%2BCdGOtEdz9PXoqB27m8kUe9E%2BZl1DkhROrFXJGpoXjwVgcO7%2F4D8cSt4y%2FUZPid6uYZp0OEGLUH1nwRV4iNw%2BdOrTwA0vanO66hr7nRxuoSWe08XfTa%2B0sAsnPdSZDYlAl%2FPu7GXbaMnOvZRoZC69vIC5PAE6IAUj9rMzR&X-Amz-Signature=bd9e144002cc9e8d35b1df5583e89d294666c69b9af9a1148dff31714bb53440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTUVRTHN%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCKmux8nxL%2FLT%2B26o0E84BOuVPt4yDCAFIckIfHtfzIQIhAOnp1Hu2qVTe6iIiEjulQuTI8DCrNCY7bHT5uadaiwENKv8DCHsQABoMNjM3NDIzMTgzODA1IgxElQfUiNyTuoSQ5HQq3AMssTj7M6dcc%2B3tNAgC6GCTCWKsrhIV05rkrYPrVcRX5JLlS9582BGBUnnEtlFUUZ8puXbNedBG4KKoC2Lf4FxK3Y22cwNr1yJ%2F3JULYbErqdEdFdNBLZWEMNIurNz2BWzNW0ZwyRfSQUXmcd9KaGD73ZVEMfZjPsLYgEWYNvx4Q3QHfQD6zzZdMc8XrCeNtuRqH1ovyTLajvmAXlvzb89FtJKZ6sNRkWIE3yknDI7Fszr0A%2BbhucVjpE0JPVUIysfAdQ%2FQwk9swfUf2t1%2BjZXCSrxvo5dTGA4gBPiwOkID7E%2F0SDQFTzOAFoO35daemK4KoWY%2FrkWvKxLBQnwoxmGBooh1GyW8wLXY4vI3kYRXBORX9as8SSHt7f5Xyl7CQRttFpaZeBdeY87DMnUoGrCUnj0EukGdtjT45XwtA8BRCggvHuCVOjy8FjesKaz2qmXqABRtHUS0ebMc6KqjhIl5Wx%2BS3NYSvdDtOj%2FqcXxWe7tkuKwx0FiRZ2osb5%2B1Wpz49sIKFgx%2BpL2RiX3Hj%2FL9CyXkLVZ2nCggOMiChWqZp3mCV9HQ19CQB%2FM85uvXDollpv%2FhbfKMMhjrRH6ClmAPfKcu7NoqKzO8PUpi8UEu8f6gNcTiV1x6PJLeeDDwsJnJBjqkAUBBpeLW5F8sV%2BQOd1Dk0edoVh48nOwF2Yakee6hB%2BReVqjhuZX3IYWedqu4uULgCle86BZxII%2FBPTYEJd6bMBHhoa3GTL%2BMEEntZ0fyScC%2FVFbowpzil54cnYElCem%2FvRDztceI%2BEQl%2Fn1mLgsFPu8xhSWl%2BDy3SobQUUbDtupC80BqoFH2xEVE5ocCnFH6ncx3KWcZICFQ9c0r2ayUijLuybnG&X-Amz-Signature=909b9ca3c6589ba0ecbcfb60d20e09bba8a7dd3308282a404a363102cc79f386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTUVRTHN%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCKmux8nxL%2FLT%2B26o0E84BOuVPt4yDCAFIckIfHtfzIQIhAOnp1Hu2qVTe6iIiEjulQuTI8DCrNCY7bHT5uadaiwENKv8DCHsQABoMNjM3NDIzMTgzODA1IgxElQfUiNyTuoSQ5HQq3AMssTj7M6dcc%2B3tNAgC6GCTCWKsrhIV05rkrYPrVcRX5JLlS9582BGBUnnEtlFUUZ8puXbNedBG4KKoC2Lf4FxK3Y22cwNr1yJ%2F3JULYbErqdEdFdNBLZWEMNIurNz2BWzNW0ZwyRfSQUXmcd9KaGD73ZVEMfZjPsLYgEWYNvx4Q3QHfQD6zzZdMc8XrCeNtuRqH1ovyTLajvmAXlvzb89FtJKZ6sNRkWIE3yknDI7Fszr0A%2BbhucVjpE0JPVUIysfAdQ%2FQwk9swfUf2t1%2BjZXCSrxvo5dTGA4gBPiwOkID7E%2F0SDQFTzOAFoO35daemK4KoWY%2FrkWvKxLBQnwoxmGBooh1GyW8wLXY4vI3kYRXBORX9as8SSHt7f5Xyl7CQRttFpaZeBdeY87DMnUoGrCUnj0EukGdtjT45XwtA8BRCggvHuCVOjy8FjesKaz2qmXqABRtHUS0ebMc6KqjhIl5Wx%2BS3NYSvdDtOj%2FqcXxWe7tkuKwx0FiRZ2osb5%2B1Wpz49sIKFgx%2BpL2RiX3Hj%2FL9CyXkLVZ2nCggOMiChWqZp3mCV9HQ19CQB%2FM85uvXDollpv%2FhbfKMMhjrRH6ClmAPfKcu7NoqKzO8PUpi8UEu8f6gNcTiV1x6PJLeeDDwsJnJBjqkAUBBpeLW5F8sV%2BQOd1Dk0edoVh48nOwF2Yakee6hB%2BReVqjhuZX3IYWedqu4uULgCle86BZxII%2FBPTYEJd6bMBHhoa3GTL%2BMEEntZ0fyScC%2FVFbowpzil54cnYElCem%2FvRDztceI%2BEQl%2Fn1mLgsFPu8xhSWl%2BDy3SobQUUbDtupC80BqoFH2xEVE5ocCnFH6ncx3KWcZICFQ9c0r2ayUijLuybnG&X-Amz-Signature=dcb435bc4f7264fc4cacd26f6255e1a4514563fec9fc4ac273e17cfa17444b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTUVRTHN%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCKmux8nxL%2FLT%2B26o0E84BOuVPt4yDCAFIckIfHtfzIQIhAOnp1Hu2qVTe6iIiEjulQuTI8DCrNCY7bHT5uadaiwENKv8DCHsQABoMNjM3NDIzMTgzODA1IgxElQfUiNyTuoSQ5HQq3AMssTj7M6dcc%2B3tNAgC6GCTCWKsrhIV05rkrYPrVcRX5JLlS9582BGBUnnEtlFUUZ8puXbNedBG4KKoC2Lf4FxK3Y22cwNr1yJ%2F3JULYbErqdEdFdNBLZWEMNIurNz2BWzNW0ZwyRfSQUXmcd9KaGD73ZVEMfZjPsLYgEWYNvx4Q3QHfQD6zzZdMc8XrCeNtuRqH1ovyTLajvmAXlvzb89FtJKZ6sNRkWIE3yknDI7Fszr0A%2BbhucVjpE0JPVUIysfAdQ%2FQwk9swfUf2t1%2BjZXCSrxvo5dTGA4gBPiwOkID7E%2F0SDQFTzOAFoO35daemK4KoWY%2FrkWvKxLBQnwoxmGBooh1GyW8wLXY4vI3kYRXBORX9as8SSHt7f5Xyl7CQRttFpaZeBdeY87DMnUoGrCUnj0EukGdtjT45XwtA8BRCggvHuCVOjy8FjesKaz2qmXqABRtHUS0ebMc6KqjhIl5Wx%2BS3NYSvdDtOj%2FqcXxWe7tkuKwx0FiRZ2osb5%2B1Wpz49sIKFgx%2BpL2RiX3Hj%2FL9CyXkLVZ2nCggOMiChWqZp3mCV9HQ19CQB%2FM85uvXDollpv%2FhbfKMMhjrRH6ClmAPfKcu7NoqKzO8PUpi8UEu8f6gNcTiV1x6PJLeeDDwsJnJBjqkAUBBpeLW5F8sV%2BQOd1Dk0edoVh48nOwF2Yakee6hB%2BReVqjhuZX3IYWedqu4uULgCle86BZxII%2FBPTYEJd6bMBHhoa3GTL%2BMEEntZ0fyScC%2FVFbowpzil54cnYElCem%2FvRDztceI%2BEQl%2Fn1mLgsFPu8xhSWl%2BDy3SobQUUbDtupC80BqoFH2xEVE5ocCnFH6ncx3KWcZICFQ9c0r2ayUijLuybnG&X-Amz-Signature=18cce26799a6e639ad7f7f090b3608d58f71efdc771f846b7f45e50fe02b423f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTUVRTHN%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCKmux8nxL%2FLT%2B26o0E84BOuVPt4yDCAFIckIfHtfzIQIhAOnp1Hu2qVTe6iIiEjulQuTI8DCrNCY7bHT5uadaiwENKv8DCHsQABoMNjM3NDIzMTgzODA1IgxElQfUiNyTuoSQ5HQq3AMssTj7M6dcc%2B3tNAgC6GCTCWKsrhIV05rkrYPrVcRX5JLlS9582BGBUnnEtlFUUZ8puXbNedBG4KKoC2Lf4FxK3Y22cwNr1yJ%2F3JULYbErqdEdFdNBLZWEMNIurNz2BWzNW0ZwyRfSQUXmcd9KaGD73ZVEMfZjPsLYgEWYNvx4Q3QHfQD6zzZdMc8XrCeNtuRqH1ovyTLajvmAXlvzb89FtJKZ6sNRkWIE3yknDI7Fszr0A%2BbhucVjpE0JPVUIysfAdQ%2FQwk9swfUf2t1%2BjZXCSrxvo5dTGA4gBPiwOkID7E%2F0SDQFTzOAFoO35daemK4KoWY%2FrkWvKxLBQnwoxmGBooh1GyW8wLXY4vI3kYRXBORX9as8SSHt7f5Xyl7CQRttFpaZeBdeY87DMnUoGrCUnj0EukGdtjT45XwtA8BRCggvHuCVOjy8FjesKaz2qmXqABRtHUS0ebMc6KqjhIl5Wx%2BS3NYSvdDtOj%2FqcXxWe7tkuKwx0FiRZ2osb5%2B1Wpz49sIKFgx%2BpL2RiX3Hj%2FL9CyXkLVZ2nCggOMiChWqZp3mCV9HQ19CQB%2FM85uvXDollpv%2FhbfKMMhjrRH6ClmAPfKcu7NoqKzO8PUpi8UEu8f6gNcTiV1x6PJLeeDDwsJnJBjqkAUBBpeLW5F8sV%2BQOd1Dk0edoVh48nOwF2Yakee6hB%2BReVqjhuZX3IYWedqu4uULgCle86BZxII%2FBPTYEJd6bMBHhoa3GTL%2BMEEntZ0fyScC%2FVFbowpzil54cnYElCem%2FvRDztceI%2BEQl%2Fn1mLgsFPu8xhSWl%2BDy3SobQUUbDtupC80BqoFH2xEVE5ocCnFH6ncx3KWcZICFQ9c0r2ayUijLuybnG&X-Amz-Signature=69fe9bc239ef654f01495e470a93d6d3dda2a63b7a4a94d2a4ba182200be4c6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2PUZGBY%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV7O4i%2FffZBRJ6mAPlx9h5zVdW0x2XN%2BR56uKiVR5toQIhAMQY%2B8iej2fOxpH5v8DvRV282djI6I938Lj0wgXArZqiKv8DCHsQABoMNjM3NDIzMTgzODA1Igxnvew%2BON9lmT1EXB0q3APCzWMOGEjehPTdeJS5jzl4jPbrVWPbYp7YTQxArc65%2BifKUZH1KD4mhL3AfsvKYh5sDxp7wzW4DRC4zj0qV0Xb4Y%2Fxgm81loMq2E%2Bx33S5Sju17mqIxWxLgu7DgpP5A%2FYckKiNOJ6iEldHdUnTqw4ZUQkFw8qOx%2Bf6EoyASQWATHSS15NfieYU9bkhE%2BgFz5KWfR9uAOASrkt2EfwG7GWPMYtewIA2OduthATXv1CIBd%2FF%2BI4uCjGXJ8XmAQDuOtRYyjr9wCfikL4pPF8g0Of7uxVQH%2F3iizXLzvDo8yFL%2BQMOCwtB0EJzOoRxI7HmKwejsmgEZRtcdenFmB737yA%2FSNkAgrMu5PQ6uSWbm%2FnPTAzwgtEXvDpOjpQN6uT6e2Cxmjdxkg50AphLUbEP0Npg7RfbdynL1pVK7WY0qooaTx6cTt2dPGh0gFN689DpWdc1y4mNpIcA5Ki4AMZ%2BRmnXWBbZFVg3nI0QVHvqiMizg3SE4FX%2ByrZR72rq1Aq9jbWaz%2BreQ5WlnG%2FkXLqCcV4e1XURseOJlIEv2%2BEyCipWhfPkJTq9WgCeNBQxToQN7AW57oMXuxum10HKODuEYTDvg5YfpZndvrcor9FmZBhLh7u5oD0WKsPLO2y6%2FjDHsJnJBjqkAeNigh2WyCdZOfn04A8vQqXoIhT5BcQcbKcmAIalYeDa2gDemuKhQu4YE2G2fsnUbmFgQwiWL9qqijCvCcG51Tfhyo%2B3GYIBh8ir6lXuGSaXeIxvTEzV%2Bjk75MkNoElmR2zmxbGCPR43Y%2FNk%2FzznkPaJX9npxTRJJ4t%2FUFLCt8cW%2F70KGesDuANZ3aAf1jcEOXxoBIackSGZNdeDijC9WDlPPLQX&X-Amz-Signature=c87d32a14b9df4c7e5c4a0e3f59ebeadb0a8be852b860b4117ec579a2a92e998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTUVRTHN%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCKmux8nxL%2FLT%2B26o0E84BOuVPt4yDCAFIckIfHtfzIQIhAOnp1Hu2qVTe6iIiEjulQuTI8DCrNCY7bHT5uadaiwENKv8DCHsQABoMNjM3NDIzMTgzODA1IgxElQfUiNyTuoSQ5HQq3AMssTj7M6dcc%2B3tNAgC6GCTCWKsrhIV05rkrYPrVcRX5JLlS9582BGBUnnEtlFUUZ8puXbNedBG4KKoC2Lf4FxK3Y22cwNr1yJ%2F3JULYbErqdEdFdNBLZWEMNIurNz2BWzNW0ZwyRfSQUXmcd9KaGD73ZVEMfZjPsLYgEWYNvx4Q3QHfQD6zzZdMc8XrCeNtuRqH1ovyTLajvmAXlvzb89FtJKZ6sNRkWIE3yknDI7Fszr0A%2BbhucVjpE0JPVUIysfAdQ%2FQwk9swfUf2t1%2BjZXCSrxvo5dTGA4gBPiwOkID7E%2F0SDQFTzOAFoO35daemK4KoWY%2FrkWvKxLBQnwoxmGBooh1GyW8wLXY4vI3kYRXBORX9as8SSHt7f5Xyl7CQRttFpaZeBdeY87DMnUoGrCUnj0EukGdtjT45XwtA8BRCggvHuCVOjy8FjesKaz2qmXqABRtHUS0ebMc6KqjhIl5Wx%2BS3NYSvdDtOj%2FqcXxWe7tkuKwx0FiRZ2osb5%2B1Wpz49sIKFgx%2BpL2RiX3Hj%2FL9CyXkLVZ2nCggOMiChWqZp3mCV9HQ19CQB%2FM85uvXDollpv%2FhbfKMMhjrRH6ClmAPfKcu7NoqKzO8PUpi8UEu8f6gNcTiV1x6PJLeeDDwsJnJBjqkAUBBpeLW5F8sV%2BQOd1Dk0edoVh48nOwF2Yakee6hB%2BReVqjhuZX3IYWedqu4uULgCle86BZxII%2FBPTYEJd6bMBHhoa3GTL%2BMEEntZ0fyScC%2FVFbowpzil54cnYElCem%2FvRDztceI%2BEQl%2Fn1mLgsFPu8xhSWl%2BDy3SobQUUbDtupC80BqoFH2xEVE5ocCnFH6ncx3KWcZICFQ9c0r2ayUijLuybnG&X-Amz-Signature=3dc23a437edc448039249124e492021e91d78227e94091d5411778c37dfe5f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTUVRTHN%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCKmux8nxL%2FLT%2B26o0E84BOuVPt4yDCAFIckIfHtfzIQIhAOnp1Hu2qVTe6iIiEjulQuTI8DCrNCY7bHT5uadaiwENKv8DCHsQABoMNjM3NDIzMTgzODA1IgxElQfUiNyTuoSQ5HQq3AMssTj7M6dcc%2B3tNAgC6GCTCWKsrhIV05rkrYPrVcRX5JLlS9582BGBUnnEtlFUUZ8puXbNedBG4KKoC2Lf4FxK3Y22cwNr1yJ%2F3JULYbErqdEdFdNBLZWEMNIurNz2BWzNW0ZwyRfSQUXmcd9KaGD73ZVEMfZjPsLYgEWYNvx4Q3QHfQD6zzZdMc8XrCeNtuRqH1ovyTLajvmAXlvzb89FtJKZ6sNRkWIE3yknDI7Fszr0A%2BbhucVjpE0JPVUIysfAdQ%2FQwk9swfUf2t1%2BjZXCSrxvo5dTGA4gBPiwOkID7E%2F0SDQFTzOAFoO35daemK4KoWY%2FrkWvKxLBQnwoxmGBooh1GyW8wLXY4vI3kYRXBORX9as8SSHt7f5Xyl7CQRttFpaZeBdeY87DMnUoGrCUnj0EukGdtjT45XwtA8BRCggvHuCVOjy8FjesKaz2qmXqABRtHUS0ebMc6KqjhIl5Wx%2BS3NYSvdDtOj%2FqcXxWe7tkuKwx0FiRZ2osb5%2B1Wpz49sIKFgx%2BpL2RiX3Hj%2FL9CyXkLVZ2nCggOMiChWqZp3mCV9HQ19CQB%2FM85uvXDollpv%2FhbfKMMhjrRH6ClmAPfKcu7NoqKzO8PUpi8UEu8f6gNcTiV1x6PJLeeDDwsJnJBjqkAUBBpeLW5F8sV%2BQOd1Dk0edoVh48nOwF2Yakee6hB%2BReVqjhuZX3IYWedqu4uULgCle86BZxII%2FBPTYEJd6bMBHhoa3GTL%2BMEEntZ0fyScC%2FVFbowpzil54cnYElCem%2FvRDztceI%2BEQl%2Fn1mLgsFPu8xhSWl%2BDy3SobQUUbDtupC80BqoFH2xEVE5ocCnFH6ncx3KWcZICFQ9c0r2ayUijLuybnG&X-Amz-Signature=3a92f604ea788b9c17a337874429298f93bb927593f9a47167d6c1729dfa02c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTUVRTHN%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCKmux8nxL%2FLT%2B26o0E84BOuVPt4yDCAFIckIfHtfzIQIhAOnp1Hu2qVTe6iIiEjulQuTI8DCrNCY7bHT5uadaiwENKv8DCHsQABoMNjM3NDIzMTgzODA1IgxElQfUiNyTuoSQ5HQq3AMssTj7M6dcc%2B3tNAgC6GCTCWKsrhIV05rkrYPrVcRX5JLlS9582BGBUnnEtlFUUZ8puXbNedBG4KKoC2Lf4FxK3Y22cwNr1yJ%2F3JULYbErqdEdFdNBLZWEMNIurNz2BWzNW0ZwyRfSQUXmcd9KaGD73ZVEMfZjPsLYgEWYNvx4Q3QHfQD6zzZdMc8XrCeNtuRqH1ovyTLajvmAXlvzb89FtJKZ6sNRkWIE3yknDI7Fszr0A%2BbhucVjpE0JPVUIysfAdQ%2FQwk9swfUf2t1%2BjZXCSrxvo5dTGA4gBPiwOkID7E%2F0SDQFTzOAFoO35daemK4KoWY%2FrkWvKxLBQnwoxmGBooh1GyW8wLXY4vI3kYRXBORX9as8SSHt7f5Xyl7CQRttFpaZeBdeY87DMnUoGrCUnj0EukGdtjT45XwtA8BRCggvHuCVOjy8FjesKaz2qmXqABRtHUS0ebMc6KqjhIl5Wx%2BS3NYSvdDtOj%2FqcXxWe7tkuKwx0FiRZ2osb5%2B1Wpz49sIKFgx%2BpL2RiX3Hj%2FL9CyXkLVZ2nCggOMiChWqZp3mCV9HQ19CQB%2FM85uvXDollpv%2FhbfKMMhjrRH6ClmAPfKcu7NoqKzO8PUpi8UEu8f6gNcTiV1x6PJLeeDDwsJnJBjqkAUBBpeLW5F8sV%2BQOd1Dk0edoVh48nOwF2Yakee6hB%2BReVqjhuZX3IYWedqu4uULgCle86BZxII%2FBPTYEJd6bMBHhoa3GTL%2BMEEntZ0fyScC%2FVFbowpzil54cnYElCem%2FvRDztceI%2BEQl%2Fn1mLgsFPu8xhSWl%2BDy3SobQUUbDtupC80BqoFH2xEVE5ocCnFH6ncx3KWcZICFQ9c0r2ayUijLuybnG&X-Amz-Signature=18cce26799a6e639ad7f7f090b3608d58f71efdc771f846b7f45e50fe02b423f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTUVRTHN%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCKmux8nxL%2FLT%2B26o0E84BOuVPt4yDCAFIckIfHtfzIQIhAOnp1Hu2qVTe6iIiEjulQuTI8DCrNCY7bHT5uadaiwENKv8DCHsQABoMNjM3NDIzMTgzODA1IgxElQfUiNyTuoSQ5HQq3AMssTj7M6dcc%2B3tNAgC6GCTCWKsrhIV05rkrYPrVcRX5JLlS9582BGBUnnEtlFUUZ8puXbNedBG4KKoC2Lf4FxK3Y22cwNr1yJ%2F3JULYbErqdEdFdNBLZWEMNIurNz2BWzNW0ZwyRfSQUXmcd9KaGD73ZVEMfZjPsLYgEWYNvx4Q3QHfQD6zzZdMc8XrCeNtuRqH1ovyTLajvmAXlvzb89FtJKZ6sNRkWIE3yknDI7Fszr0A%2BbhucVjpE0JPVUIysfAdQ%2FQwk9swfUf2t1%2BjZXCSrxvo5dTGA4gBPiwOkID7E%2F0SDQFTzOAFoO35daemK4KoWY%2FrkWvKxLBQnwoxmGBooh1GyW8wLXY4vI3kYRXBORX9as8SSHt7f5Xyl7CQRttFpaZeBdeY87DMnUoGrCUnj0EukGdtjT45XwtA8BRCggvHuCVOjy8FjesKaz2qmXqABRtHUS0ebMc6KqjhIl5Wx%2BS3NYSvdDtOj%2FqcXxWe7tkuKwx0FiRZ2osb5%2B1Wpz49sIKFgx%2BpL2RiX3Hj%2FL9CyXkLVZ2nCggOMiChWqZp3mCV9HQ19CQB%2FM85uvXDollpv%2FhbfKMMhjrRH6ClmAPfKcu7NoqKzO8PUpi8UEu8f6gNcTiV1x6PJLeeDDwsJnJBjqkAUBBpeLW5F8sV%2BQOd1Dk0edoVh48nOwF2Yakee6hB%2BReVqjhuZX3IYWedqu4uULgCle86BZxII%2FBPTYEJd6bMBHhoa3GTL%2BMEEntZ0fyScC%2FVFbowpzil54cnYElCem%2FvRDztceI%2BEQl%2Fn1mLgsFPu8xhSWl%2BDy3SobQUUbDtupC80BqoFH2xEVE5ocCnFH6ncx3KWcZICFQ9c0r2ayUijLuybnG&X-Amz-Signature=afa64e0aff8a80433e69f55f06e5e7e3751abff717f88435c43cb32b67e3431b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTUVRTHN%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCKmux8nxL%2FLT%2B26o0E84BOuVPt4yDCAFIckIfHtfzIQIhAOnp1Hu2qVTe6iIiEjulQuTI8DCrNCY7bHT5uadaiwENKv8DCHsQABoMNjM3NDIzMTgzODA1IgxElQfUiNyTuoSQ5HQq3AMssTj7M6dcc%2B3tNAgC6GCTCWKsrhIV05rkrYPrVcRX5JLlS9582BGBUnnEtlFUUZ8puXbNedBG4KKoC2Lf4FxK3Y22cwNr1yJ%2F3JULYbErqdEdFdNBLZWEMNIurNz2BWzNW0ZwyRfSQUXmcd9KaGD73ZVEMfZjPsLYgEWYNvx4Q3QHfQD6zzZdMc8XrCeNtuRqH1ovyTLajvmAXlvzb89FtJKZ6sNRkWIE3yknDI7Fszr0A%2BbhucVjpE0JPVUIysfAdQ%2FQwk9swfUf2t1%2BjZXCSrxvo5dTGA4gBPiwOkID7E%2F0SDQFTzOAFoO35daemK4KoWY%2FrkWvKxLBQnwoxmGBooh1GyW8wLXY4vI3kYRXBORX9as8SSHt7f5Xyl7CQRttFpaZeBdeY87DMnUoGrCUnj0EukGdtjT45XwtA8BRCggvHuCVOjy8FjesKaz2qmXqABRtHUS0ebMc6KqjhIl5Wx%2BS3NYSvdDtOj%2FqcXxWe7tkuKwx0FiRZ2osb5%2B1Wpz49sIKFgx%2BpL2RiX3Hj%2FL9CyXkLVZ2nCggOMiChWqZp3mCV9HQ19CQB%2FM85uvXDollpv%2FhbfKMMhjrRH6ClmAPfKcu7NoqKzO8PUpi8UEu8f6gNcTiV1x6PJLeeDDwsJnJBjqkAUBBpeLW5F8sV%2BQOd1Dk0edoVh48nOwF2Yakee6hB%2BReVqjhuZX3IYWedqu4uULgCle86BZxII%2FBPTYEJd6bMBHhoa3GTL%2BMEEntZ0fyScC%2FVFbowpzil54cnYElCem%2FvRDztceI%2BEQl%2Fn1mLgsFPu8xhSWl%2BDy3SobQUUbDtupC80BqoFH2xEVE5ocCnFH6ncx3KWcZICFQ9c0r2ayUijLuybnG&X-Amz-Signature=89ecbd94814a5aceacaadc847c983c6c1d544914361f78416c37921602f90d9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTUVRTHN%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCKmux8nxL%2FLT%2B26o0E84BOuVPt4yDCAFIckIfHtfzIQIhAOnp1Hu2qVTe6iIiEjulQuTI8DCrNCY7bHT5uadaiwENKv8DCHsQABoMNjM3NDIzMTgzODA1IgxElQfUiNyTuoSQ5HQq3AMssTj7M6dcc%2B3tNAgC6GCTCWKsrhIV05rkrYPrVcRX5JLlS9582BGBUnnEtlFUUZ8puXbNedBG4KKoC2Lf4FxK3Y22cwNr1yJ%2F3JULYbErqdEdFdNBLZWEMNIurNz2BWzNW0ZwyRfSQUXmcd9KaGD73ZVEMfZjPsLYgEWYNvx4Q3QHfQD6zzZdMc8XrCeNtuRqH1ovyTLajvmAXlvzb89FtJKZ6sNRkWIE3yknDI7Fszr0A%2BbhucVjpE0JPVUIysfAdQ%2FQwk9swfUf2t1%2BjZXCSrxvo5dTGA4gBPiwOkID7E%2F0SDQFTzOAFoO35daemK4KoWY%2FrkWvKxLBQnwoxmGBooh1GyW8wLXY4vI3kYRXBORX9as8SSHt7f5Xyl7CQRttFpaZeBdeY87DMnUoGrCUnj0EukGdtjT45XwtA8BRCggvHuCVOjy8FjesKaz2qmXqABRtHUS0ebMc6KqjhIl5Wx%2BS3NYSvdDtOj%2FqcXxWe7tkuKwx0FiRZ2osb5%2B1Wpz49sIKFgx%2BpL2RiX3Hj%2FL9CyXkLVZ2nCggOMiChWqZp3mCV9HQ19CQB%2FM85uvXDollpv%2FhbfKMMhjrRH6ClmAPfKcu7NoqKzO8PUpi8UEu8f6gNcTiV1x6PJLeeDDwsJnJBjqkAUBBpeLW5F8sV%2BQOd1Dk0edoVh48nOwF2Yakee6hB%2BReVqjhuZX3IYWedqu4uULgCle86BZxII%2FBPTYEJd6bMBHhoa3GTL%2BMEEntZ0fyScC%2FVFbowpzil54cnYElCem%2FvRDztceI%2BEQl%2Fn1mLgsFPu8xhSWl%2BDy3SobQUUbDtupC80BqoFH2xEVE5ocCnFH6ncx3KWcZICFQ9c0r2ayUijLuybnG&X-Amz-Signature=84a32af56f7e718a38ffbcea85122ccec81731f1e53273a61f4c55c41d3e3873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


