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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VUNFYUW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGP0b53YbLz13CnMlbbTiXFTk5ht2AyHEZDUivAk3yWUAiEAwooeSmIFEXtYaMdK57RmYINSYFbPw5rX%2Fq5DolHE1c4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPgfPgtR94LfvMxq3CrcAxzxi9suIdCgj5x4A84VShx32a2BSWuNDWBM8uhZc0OaOw%2B2ccToXBdQXpSeeMlSvKnWgR1LZBtkIbYm5VD53gnOrPbR2VblXMzmAPtf6Nk3escKs7VqZhqdjmcYfxoh8ykng4M2uReEVqFPBQHRpQ%2Fx3OIhFmyO2jepqbAx5Qiw8MbgDT7ujOxfE%2Bz1cWQp2U8BOmrZrWjEIUzHKV3PmWKqofSWkW9OMLSI6Sm9Q85xUnrKE14WUbts%2BqibRoggqyzSu3nfkqrJG8JJIqSGESASG4Y1o2uMdQYy2Vfw6ZyugnQTPnMSJ1NW%2FA2GfGDtRC5NHBfw8XXLYQAx97IG3mhuG4isBnuHUiUuG4ktsuSKY%2BEdDM12LEAgLFC1jYNU0VQv38D92kYixZF4AQs2RIN0yLDv8Iwt6SC8wn5fm6IviLFZEPocETDhyOhC4fkSVWeadu7iJC3jteXTklYwzVLVcVRMJESX6sDbHlC8ZnETnjT6OBzerU47Mfb43Y94%2FurIhOMl1fOmSHqZWPH76P5EYoSH%2B%2FTvbT5hWpA1Eys6haNMrys1oHSXnWK1bIfbJwt0a9PunVi0iHLxw0GAlu8yy0mQKF%2Bvn7Q6cl9rKrjwh6OG9U82thckRF6MMIr4i8QGOqUBtvQ8zQNlQ8mM3wxdPt%2Bg6JhQ9MkmM6GGvQfKlu5bIMpGuQmVVG4E%2FChCj0HB1xcmj7CZBeuXBDQ8gN45wGHPkhFW1pg5McdmwEr5bPs71toOuKQmh4SYVs6IjP%2B7w4k299lZ6CUTyer1BzZT3XBcTg%2FAXCytnTSug8nmxoN12WBLzm%2FaKchqSXDRXLOCnsJtaUonqsjnu08Q3KaTyUgqS%2F%2B8x%2F7L&X-Amz-Signature=cb8d8f2c42aee71fa87d58c92a747e81a14a9d405b26a10a6a09d84f3798ef62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VUNFYUW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGP0b53YbLz13CnMlbbTiXFTk5ht2AyHEZDUivAk3yWUAiEAwooeSmIFEXtYaMdK57RmYINSYFbPw5rX%2Fq5DolHE1c4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPgfPgtR94LfvMxq3CrcAxzxi9suIdCgj5x4A84VShx32a2BSWuNDWBM8uhZc0OaOw%2B2ccToXBdQXpSeeMlSvKnWgR1LZBtkIbYm5VD53gnOrPbR2VblXMzmAPtf6Nk3escKs7VqZhqdjmcYfxoh8ykng4M2uReEVqFPBQHRpQ%2Fx3OIhFmyO2jepqbAx5Qiw8MbgDT7ujOxfE%2Bz1cWQp2U8BOmrZrWjEIUzHKV3PmWKqofSWkW9OMLSI6Sm9Q85xUnrKE14WUbts%2BqibRoggqyzSu3nfkqrJG8JJIqSGESASG4Y1o2uMdQYy2Vfw6ZyugnQTPnMSJ1NW%2FA2GfGDtRC5NHBfw8XXLYQAx97IG3mhuG4isBnuHUiUuG4ktsuSKY%2BEdDM12LEAgLFC1jYNU0VQv38D92kYixZF4AQs2RIN0yLDv8Iwt6SC8wn5fm6IviLFZEPocETDhyOhC4fkSVWeadu7iJC3jteXTklYwzVLVcVRMJESX6sDbHlC8ZnETnjT6OBzerU47Mfb43Y94%2FurIhOMl1fOmSHqZWPH76P5EYoSH%2B%2FTvbT5hWpA1Eys6haNMrys1oHSXnWK1bIfbJwt0a9PunVi0iHLxw0GAlu8yy0mQKF%2Bvn7Q6cl9rKrjwh6OG9U82thckRF6MMIr4i8QGOqUBtvQ8zQNlQ8mM3wxdPt%2Bg6JhQ9MkmM6GGvQfKlu5bIMpGuQmVVG4E%2FChCj0HB1xcmj7CZBeuXBDQ8gN45wGHPkhFW1pg5McdmwEr5bPs71toOuKQmh4SYVs6IjP%2B7w4k299lZ6CUTyer1BzZT3XBcTg%2FAXCytnTSug8nmxoN12WBLzm%2FaKchqSXDRXLOCnsJtaUonqsjnu08Q3KaTyUgqS%2F%2B8x%2F7L&X-Amz-Signature=f5e88d70a1464255f368cfb61c8db53793bb44e553abfead43f884c2455712eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VUNFYUW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGP0b53YbLz13CnMlbbTiXFTk5ht2AyHEZDUivAk3yWUAiEAwooeSmIFEXtYaMdK57RmYINSYFbPw5rX%2Fq5DolHE1c4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPgfPgtR94LfvMxq3CrcAxzxi9suIdCgj5x4A84VShx32a2BSWuNDWBM8uhZc0OaOw%2B2ccToXBdQXpSeeMlSvKnWgR1LZBtkIbYm5VD53gnOrPbR2VblXMzmAPtf6Nk3escKs7VqZhqdjmcYfxoh8ykng4M2uReEVqFPBQHRpQ%2Fx3OIhFmyO2jepqbAx5Qiw8MbgDT7ujOxfE%2Bz1cWQp2U8BOmrZrWjEIUzHKV3PmWKqofSWkW9OMLSI6Sm9Q85xUnrKE14WUbts%2BqibRoggqyzSu3nfkqrJG8JJIqSGESASG4Y1o2uMdQYy2Vfw6ZyugnQTPnMSJ1NW%2FA2GfGDtRC5NHBfw8XXLYQAx97IG3mhuG4isBnuHUiUuG4ktsuSKY%2BEdDM12LEAgLFC1jYNU0VQv38D92kYixZF4AQs2RIN0yLDv8Iwt6SC8wn5fm6IviLFZEPocETDhyOhC4fkSVWeadu7iJC3jteXTklYwzVLVcVRMJESX6sDbHlC8ZnETnjT6OBzerU47Mfb43Y94%2FurIhOMl1fOmSHqZWPH76P5EYoSH%2B%2FTvbT5hWpA1Eys6haNMrys1oHSXnWK1bIfbJwt0a9PunVi0iHLxw0GAlu8yy0mQKF%2Bvn7Q6cl9rKrjwh6OG9U82thckRF6MMIr4i8QGOqUBtvQ8zQNlQ8mM3wxdPt%2Bg6JhQ9MkmM6GGvQfKlu5bIMpGuQmVVG4E%2FChCj0HB1xcmj7CZBeuXBDQ8gN45wGHPkhFW1pg5McdmwEr5bPs71toOuKQmh4SYVs6IjP%2B7w4k299lZ6CUTyer1BzZT3XBcTg%2FAXCytnTSug8nmxoN12WBLzm%2FaKchqSXDRXLOCnsJtaUonqsjnu08Q3KaTyUgqS%2F%2B8x%2F7L&X-Amz-Signature=18f313600514184e2bb5645434b7e719d78f6d01fc1f8a990ad1655f90e826f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VUNFYUW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGP0b53YbLz13CnMlbbTiXFTk5ht2AyHEZDUivAk3yWUAiEAwooeSmIFEXtYaMdK57RmYINSYFbPw5rX%2Fq5DolHE1c4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPgfPgtR94LfvMxq3CrcAxzxi9suIdCgj5x4A84VShx32a2BSWuNDWBM8uhZc0OaOw%2B2ccToXBdQXpSeeMlSvKnWgR1LZBtkIbYm5VD53gnOrPbR2VblXMzmAPtf6Nk3escKs7VqZhqdjmcYfxoh8ykng4M2uReEVqFPBQHRpQ%2Fx3OIhFmyO2jepqbAx5Qiw8MbgDT7ujOxfE%2Bz1cWQp2U8BOmrZrWjEIUzHKV3PmWKqofSWkW9OMLSI6Sm9Q85xUnrKE14WUbts%2BqibRoggqyzSu3nfkqrJG8JJIqSGESASG4Y1o2uMdQYy2Vfw6ZyugnQTPnMSJ1NW%2FA2GfGDtRC5NHBfw8XXLYQAx97IG3mhuG4isBnuHUiUuG4ktsuSKY%2BEdDM12LEAgLFC1jYNU0VQv38D92kYixZF4AQs2RIN0yLDv8Iwt6SC8wn5fm6IviLFZEPocETDhyOhC4fkSVWeadu7iJC3jteXTklYwzVLVcVRMJESX6sDbHlC8ZnETnjT6OBzerU47Mfb43Y94%2FurIhOMl1fOmSHqZWPH76P5EYoSH%2B%2FTvbT5hWpA1Eys6haNMrys1oHSXnWK1bIfbJwt0a9PunVi0iHLxw0GAlu8yy0mQKF%2Bvn7Q6cl9rKrjwh6OG9U82thckRF6MMIr4i8QGOqUBtvQ8zQNlQ8mM3wxdPt%2Bg6JhQ9MkmM6GGvQfKlu5bIMpGuQmVVG4E%2FChCj0HB1xcmj7CZBeuXBDQ8gN45wGHPkhFW1pg5McdmwEr5bPs71toOuKQmh4SYVs6IjP%2B7w4k299lZ6CUTyer1BzZT3XBcTg%2FAXCytnTSug8nmxoN12WBLzm%2FaKchqSXDRXLOCnsJtaUonqsjnu08Q3KaTyUgqS%2F%2B8x%2F7L&X-Amz-Signature=aa40f4acf9ccfc3bef1f1d752c0d5fe65a567778a961f42fd0bc3e4c87c40378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VUNFYUW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGP0b53YbLz13CnMlbbTiXFTk5ht2AyHEZDUivAk3yWUAiEAwooeSmIFEXtYaMdK57RmYINSYFbPw5rX%2Fq5DolHE1c4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPgfPgtR94LfvMxq3CrcAxzxi9suIdCgj5x4A84VShx32a2BSWuNDWBM8uhZc0OaOw%2B2ccToXBdQXpSeeMlSvKnWgR1LZBtkIbYm5VD53gnOrPbR2VblXMzmAPtf6Nk3escKs7VqZhqdjmcYfxoh8ykng4M2uReEVqFPBQHRpQ%2Fx3OIhFmyO2jepqbAx5Qiw8MbgDT7ujOxfE%2Bz1cWQp2U8BOmrZrWjEIUzHKV3PmWKqofSWkW9OMLSI6Sm9Q85xUnrKE14WUbts%2BqibRoggqyzSu3nfkqrJG8JJIqSGESASG4Y1o2uMdQYy2Vfw6ZyugnQTPnMSJ1NW%2FA2GfGDtRC5NHBfw8XXLYQAx97IG3mhuG4isBnuHUiUuG4ktsuSKY%2BEdDM12LEAgLFC1jYNU0VQv38D92kYixZF4AQs2RIN0yLDv8Iwt6SC8wn5fm6IviLFZEPocETDhyOhC4fkSVWeadu7iJC3jteXTklYwzVLVcVRMJESX6sDbHlC8ZnETnjT6OBzerU47Mfb43Y94%2FurIhOMl1fOmSHqZWPH76P5EYoSH%2B%2FTvbT5hWpA1Eys6haNMrys1oHSXnWK1bIfbJwt0a9PunVi0iHLxw0GAlu8yy0mQKF%2Bvn7Q6cl9rKrjwh6OG9U82thckRF6MMIr4i8QGOqUBtvQ8zQNlQ8mM3wxdPt%2Bg6JhQ9MkmM6GGvQfKlu5bIMpGuQmVVG4E%2FChCj0HB1xcmj7CZBeuXBDQ8gN45wGHPkhFW1pg5McdmwEr5bPs71toOuKQmh4SYVs6IjP%2B7w4k299lZ6CUTyer1BzZT3XBcTg%2FAXCytnTSug8nmxoN12WBLzm%2FaKchqSXDRXLOCnsJtaUonqsjnu08Q3KaTyUgqS%2F%2B8x%2F7L&X-Amz-Signature=f237ce5a65fed52e88b714478c58eab0ac6521528820205670420cf34c86e5d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VUNFYUW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGP0b53YbLz13CnMlbbTiXFTk5ht2AyHEZDUivAk3yWUAiEAwooeSmIFEXtYaMdK57RmYINSYFbPw5rX%2Fq5DolHE1c4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPgfPgtR94LfvMxq3CrcAxzxi9suIdCgj5x4A84VShx32a2BSWuNDWBM8uhZc0OaOw%2B2ccToXBdQXpSeeMlSvKnWgR1LZBtkIbYm5VD53gnOrPbR2VblXMzmAPtf6Nk3escKs7VqZhqdjmcYfxoh8ykng4M2uReEVqFPBQHRpQ%2Fx3OIhFmyO2jepqbAx5Qiw8MbgDT7ujOxfE%2Bz1cWQp2U8BOmrZrWjEIUzHKV3PmWKqofSWkW9OMLSI6Sm9Q85xUnrKE14WUbts%2BqibRoggqyzSu3nfkqrJG8JJIqSGESASG4Y1o2uMdQYy2Vfw6ZyugnQTPnMSJ1NW%2FA2GfGDtRC5NHBfw8XXLYQAx97IG3mhuG4isBnuHUiUuG4ktsuSKY%2BEdDM12LEAgLFC1jYNU0VQv38D92kYixZF4AQs2RIN0yLDv8Iwt6SC8wn5fm6IviLFZEPocETDhyOhC4fkSVWeadu7iJC3jteXTklYwzVLVcVRMJESX6sDbHlC8ZnETnjT6OBzerU47Mfb43Y94%2FurIhOMl1fOmSHqZWPH76P5EYoSH%2B%2FTvbT5hWpA1Eys6haNMrys1oHSXnWK1bIfbJwt0a9PunVi0iHLxw0GAlu8yy0mQKF%2Bvn7Q6cl9rKrjwh6OG9U82thckRF6MMIr4i8QGOqUBtvQ8zQNlQ8mM3wxdPt%2Bg6JhQ9MkmM6GGvQfKlu5bIMpGuQmVVG4E%2FChCj0HB1xcmj7CZBeuXBDQ8gN45wGHPkhFW1pg5McdmwEr5bPs71toOuKQmh4SYVs6IjP%2B7w4k299lZ6CUTyer1BzZT3XBcTg%2FAXCytnTSug8nmxoN12WBLzm%2FaKchqSXDRXLOCnsJtaUonqsjnu08Q3KaTyUgqS%2F%2B8x%2F7L&X-Amz-Signature=f9632ae169ff7b1e5068bb382d41d308f9fc0b9e164b2da3ae3eba59a9a65bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VUNFYUW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGP0b53YbLz13CnMlbbTiXFTk5ht2AyHEZDUivAk3yWUAiEAwooeSmIFEXtYaMdK57RmYINSYFbPw5rX%2Fq5DolHE1c4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPgfPgtR94LfvMxq3CrcAxzxi9suIdCgj5x4A84VShx32a2BSWuNDWBM8uhZc0OaOw%2B2ccToXBdQXpSeeMlSvKnWgR1LZBtkIbYm5VD53gnOrPbR2VblXMzmAPtf6Nk3escKs7VqZhqdjmcYfxoh8ykng4M2uReEVqFPBQHRpQ%2Fx3OIhFmyO2jepqbAx5Qiw8MbgDT7ujOxfE%2Bz1cWQp2U8BOmrZrWjEIUzHKV3PmWKqofSWkW9OMLSI6Sm9Q85xUnrKE14WUbts%2BqibRoggqyzSu3nfkqrJG8JJIqSGESASG4Y1o2uMdQYy2Vfw6ZyugnQTPnMSJ1NW%2FA2GfGDtRC5NHBfw8XXLYQAx97IG3mhuG4isBnuHUiUuG4ktsuSKY%2BEdDM12LEAgLFC1jYNU0VQv38D92kYixZF4AQs2RIN0yLDv8Iwt6SC8wn5fm6IviLFZEPocETDhyOhC4fkSVWeadu7iJC3jteXTklYwzVLVcVRMJESX6sDbHlC8ZnETnjT6OBzerU47Mfb43Y94%2FurIhOMl1fOmSHqZWPH76P5EYoSH%2B%2FTvbT5hWpA1Eys6haNMrys1oHSXnWK1bIfbJwt0a9PunVi0iHLxw0GAlu8yy0mQKF%2Bvn7Q6cl9rKrjwh6OG9U82thckRF6MMIr4i8QGOqUBtvQ8zQNlQ8mM3wxdPt%2Bg6JhQ9MkmM6GGvQfKlu5bIMpGuQmVVG4E%2FChCj0HB1xcmj7CZBeuXBDQ8gN45wGHPkhFW1pg5McdmwEr5bPs71toOuKQmh4SYVs6IjP%2B7w4k299lZ6CUTyer1BzZT3XBcTg%2FAXCytnTSug8nmxoN12WBLzm%2FaKchqSXDRXLOCnsJtaUonqsjnu08Q3KaTyUgqS%2F%2B8x%2F7L&X-Amz-Signature=c231bd35e6a3239272eb1f88d918b2db814b6b0bd026608b1aebcbaf001e116b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VUNFYUW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGP0b53YbLz13CnMlbbTiXFTk5ht2AyHEZDUivAk3yWUAiEAwooeSmIFEXtYaMdK57RmYINSYFbPw5rX%2Fq5DolHE1c4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPgfPgtR94LfvMxq3CrcAxzxi9suIdCgj5x4A84VShx32a2BSWuNDWBM8uhZc0OaOw%2B2ccToXBdQXpSeeMlSvKnWgR1LZBtkIbYm5VD53gnOrPbR2VblXMzmAPtf6Nk3escKs7VqZhqdjmcYfxoh8ykng4M2uReEVqFPBQHRpQ%2Fx3OIhFmyO2jepqbAx5Qiw8MbgDT7ujOxfE%2Bz1cWQp2U8BOmrZrWjEIUzHKV3PmWKqofSWkW9OMLSI6Sm9Q85xUnrKE14WUbts%2BqibRoggqyzSu3nfkqrJG8JJIqSGESASG4Y1o2uMdQYy2Vfw6ZyugnQTPnMSJ1NW%2FA2GfGDtRC5NHBfw8XXLYQAx97IG3mhuG4isBnuHUiUuG4ktsuSKY%2BEdDM12LEAgLFC1jYNU0VQv38D92kYixZF4AQs2RIN0yLDv8Iwt6SC8wn5fm6IviLFZEPocETDhyOhC4fkSVWeadu7iJC3jteXTklYwzVLVcVRMJESX6sDbHlC8ZnETnjT6OBzerU47Mfb43Y94%2FurIhOMl1fOmSHqZWPH76P5EYoSH%2B%2FTvbT5hWpA1Eys6haNMrys1oHSXnWK1bIfbJwt0a9PunVi0iHLxw0GAlu8yy0mQKF%2Bvn7Q6cl9rKrjwh6OG9U82thckRF6MMIr4i8QGOqUBtvQ8zQNlQ8mM3wxdPt%2Bg6JhQ9MkmM6GGvQfKlu5bIMpGuQmVVG4E%2FChCj0HB1xcmj7CZBeuXBDQ8gN45wGHPkhFW1pg5McdmwEr5bPs71toOuKQmh4SYVs6IjP%2B7w4k299lZ6CUTyer1BzZT3XBcTg%2FAXCytnTSug8nmxoN12WBLzm%2FaKchqSXDRXLOCnsJtaUonqsjnu08Q3KaTyUgqS%2F%2B8x%2F7L&X-Amz-Signature=cb3a9c6010ca6c0a68142d7e9b02097d89ced6a58bec88b46224decd25c94d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VUNFYUW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGP0b53YbLz13CnMlbbTiXFTk5ht2AyHEZDUivAk3yWUAiEAwooeSmIFEXtYaMdK57RmYINSYFbPw5rX%2Fq5DolHE1c4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPgfPgtR94LfvMxq3CrcAxzxi9suIdCgj5x4A84VShx32a2BSWuNDWBM8uhZc0OaOw%2B2ccToXBdQXpSeeMlSvKnWgR1LZBtkIbYm5VD53gnOrPbR2VblXMzmAPtf6Nk3escKs7VqZhqdjmcYfxoh8ykng4M2uReEVqFPBQHRpQ%2Fx3OIhFmyO2jepqbAx5Qiw8MbgDT7ujOxfE%2Bz1cWQp2U8BOmrZrWjEIUzHKV3PmWKqofSWkW9OMLSI6Sm9Q85xUnrKE14WUbts%2BqibRoggqyzSu3nfkqrJG8JJIqSGESASG4Y1o2uMdQYy2Vfw6ZyugnQTPnMSJ1NW%2FA2GfGDtRC5NHBfw8XXLYQAx97IG3mhuG4isBnuHUiUuG4ktsuSKY%2BEdDM12LEAgLFC1jYNU0VQv38D92kYixZF4AQs2RIN0yLDv8Iwt6SC8wn5fm6IviLFZEPocETDhyOhC4fkSVWeadu7iJC3jteXTklYwzVLVcVRMJESX6sDbHlC8ZnETnjT6OBzerU47Mfb43Y94%2FurIhOMl1fOmSHqZWPH76P5EYoSH%2B%2FTvbT5hWpA1Eys6haNMrys1oHSXnWK1bIfbJwt0a9PunVi0iHLxw0GAlu8yy0mQKF%2Bvn7Q6cl9rKrjwh6OG9U82thckRF6MMIr4i8QGOqUBtvQ8zQNlQ8mM3wxdPt%2Bg6JhQ9MkmM6GGvQfKlu5bIMpGuQmVVG4E%2FChCj0HB1xcmj7CZBeuXBDQ8gN45wGHPkhFW1pg5McdmwEr5bPs71toOuKQmh4SYVs6IjP%2B7w4k299lZ6CUTyer1BzZT3XBcTg%2FAXCytnTSug8nmxoN12WBLzm%2FaKchqSXDRXLOCnsJtaUonqsjnu08Q3KaTyUgqS%2F%2B8x%2F7L&X-Amz-Signature=907291a3f702720ba02f990ad9463376cdcef5a6ffad5f5c52677e1ae129bedb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VUNFYUW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGP0b53YbLz13CnMlbbTiXFTk5ht2AyHEZDUivAk3yWUAiEAwooeSmIFEXtYaMdK57RmYINSYFbPw5rX%2Fq5DolHE1c4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPgfPgtR94LfvMxq3CrcAxzxi9suIdCgj5x4A84VShx32a2BSWuNDWBM8uhZc0OaOw%2B2ccToXBdQXpSeeMlSvKnWgR1LZBtkIbYm5VD53gnOrPbR2VblXMzmAPtf6Nk3escKs7VqZhqdjmcYfxoh8ykng4M2uReEVqFPBQHRpQ%2Fx3OIhFmyO2jepqbAx5Qiw8MbgDT7ujOxfE%2Bz1cWQp2U8BOmrZrWjEIUzHKV3PmWKqofSWkW9OMLSI6Sm9Q85xUnrKE14WUbts%2BqibRoggqyzSu3nfkqrJG8JJIqSGESASG4Y1o2uMdQYy2Vfw6ZyugnQTPnMSJ1NW%2FA2GfGDtRC5NHBfw8XXLYQAx97IG3mhuG4isBnuHUiUuG4ktsuSKY%2BEdDM12LEAgLFC1jYNU0VQv38D92kYixZF4AQs2RIN0yLDv8Iwt6SC8wn5fm6IviLFZEPocETDhyOhC4fkSVWeadu7iJC3jteXTklYwzVLVcVRMJESX6sDbHlC8ZnETnjT6OBzerU47Mfb43Y94%2FurIhOMl1fOmSHqZWPH76P5EYoSH%2B%2FTvbT5hWpA1Eys6haNMrys1oHSXnWK1bIfbJwt0a9PunVi0iHLxw0GAlu8yy0mQKF%2Bvn7Q6cl9rKrjwh6OG9U82thckRF6MMIr4i8QGOqUBtvQ8zQNlQ8mM3wxdPt%2Bg6JhQ9MkmM6GGvQfKlu5bIMpGuQmVVG4E%2FChCj0HB1xcmj7CZBeuXBDQ8gN45wGHPkhFW1pg5McdmwEr5bPs71toOuKQmh4SYVs6IjP%2B7w4k299lZ6CUTyer1BzZT3XBcTg%2FAXCytnTSug8nmxoN12WBLzm%2FaKchqSXDRXLOCnsJtaUonqsjnu08Q3KaTyUgqS%2F%2B8x%2F7L&X-Amz-Signature=cda9e416f76b587444fd6956aea4f92046d1b073555b53e250f983f010181532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VUNFYUW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGP0b53YbLz13CnMlbbTiXFTk5ht2AyHEZDUivAk3yWUAiEAwooeSmIFEXtYaMdK57RmYINSYFbPw5rX%2Fq5DolHE1c4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPgfPgtR94LfvMxq3CrcAxzxi9suIdCgj5x4A84VShx32a2BSWuNDWBM8uhZc0OaOw%2B2ccToXBdQXpSeeMlSvKnWgR1LZBtkIbYm5VD53gnOrPbR2VblXMzmAPtf6Nk3escKs7VqZhqdjmcYfxoh8ykng4M2uReEVqFPBQHRpQ%2Fx3OIhFmyO2jepqbAx5Qiw8MbgDT7ujOxfE%2Bz1cWQp2U8BOmrZrWjEIUzHKV3PmWKqofSWkW9OMLSI6Sm9Q85xUnrKE14WUbts%2BqibRoggqyzSu3nfkqrJG8JJIqSGESASG4Y1o2uMdQYy2Vfw6ZyugnQTPnMSJ1NW%2FA2GfGDtRC5NHBfw8XXLYQAx97IG3mhuG4isBnuHUiUuG4ktsuSKY%2BEdDM12LEAgLFC1jYNU0VQv38D92kYixZF4AQs2RIN0yLDv8Iwt6SC8wn5fm6IviLFZEPocETDhyOhC4fkSVWeadu7iJC3jteXTklYwzVLVcVRMJESX6sDbHlC8ZnETnjT6OBzerU47Mfb43Y94%2FurIhOMl1fOmSHqZWPH76P5EYoSH%2B%2FTvbT5hWpA1Eys6haNMrys1oHSXnWK1bIfbJwt0a9PunVi0iHLxw0GAlu8yy0mQKF%2Bvn7Q6cl9rKrjwh6OG9U82thckRF6MMIr4i8QGOqUBtvQ8zQNlQ8mM3wxdPt%2Bg6JhQ9MkmM6GGvQfKlu5bIMpGuQmVVG4E%2FChCj0HB1xcmj7CZBeuXBDQ8gN45wGHPkhFW1pg5McdmwEr5bPs71toOuKQmh4SYVs6IjP%2B7w4k299lZ6CUTyer1BzZT3XBcTg%2FAXCytnTSug8nmxoN12WBLzm%2FaKchqSXDRXLOCnsJtaUonqsjnu08Q3KaTyUgqS%2F%2B8x%2F7L&X-Amz-Signature=bee8cd3b201c63d4138e414189849d41fcaf2fa94fc34eed255a4b087b76ef4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VUNFYUW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGP0b53YbLz13CnMlbbTiXFTk5ht2AyHEZDUivAk3yWUAiEAwooeSmIFEXtYaMdK57RmYINSYFbPw5rX%2Fq5DolHE1c4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPgfPgtR94LfvMxq3CrcAxzxi9suIdCgj5x4A84VShx32a2BSWuNDWBM8uhZc0OaOw%2B2ccToXBdQXpSeeMlSvKnWgR1LZBtkIbYm5VD53gnOrPbR2VblXMzmAPtf6Nk3escKs7VqZhqdjmcYfxoh8ykng4M2uReEVqFPBQHRpQ%2Fx3OIhFmyO2jepqbAx5Qiw8MbgDT7ujOxfE%2Bz1cWQp2U8BOmrZrWjEIUzHKV3PmWKqofSWkW9OMLSI6Sm9Q85xUnrKE14WUbts%2BqibRoggqyzSu3nfkqrJG8JJIqSGESASG4Y1o2uMdQYy2Vfw6ZyugnQTPnMSJ1NW%2FA2GfGDtRC5NHBfw8XXLYQAx97IG3mhuG4isBnuHUiUuG4ktsuSKY%2BEdDM12LEAgLFC1jYNU0VQv38D92kYixZF4AQs2RIN0yLDv8Iwt6SC8wn5fm6IviLFZEPocETDhyOhC4fkSVWeadu7iJC3jteXTklYwzVLVcVRMJESX6sDbHlC8ZnETnjT6OBzerU47Mfb43Y94%2FurIhOMl1fOmSHqZWPH76P5EYoSH%2B%2FTvbT5hWpA1Eys6haNMrys1oHSXnWK1bIfbJwt0a9PunVi0iHLxw0GAlu8yy0mQKF%2Bvn7Q6cl9rKrjwh6OG9U82thckRF6MMIr4i8QGOqUBtvQ8zQNlQ8mM3wxdPt%2Bg6JhQ9MkmM6GGvQfKlu5bIMpGuQmVVG4E%2FChCj0HB1xcmj7CZBeuXBDQ8gN45wGHPkhFW1pg5McdmwEr5bPs71toOuKQmh4SYVs6IjP%2B7w4k299lZ6CUTyer1BzZT3XBcTg%2FAXCytnTSug8nmxoN12WBLzm%2FaKchqSXDRXLOCnsJtaUonqsjnu08Q3KaTyUgqS%2F%2B8x%2F7L&X-Amz-Signature=26f2f4a8042ca48dd439748337f04e2ba0b9876ff43422c7680987cebd68d61e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VUNFYUW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGP0b53YbLz13CnMlbbTiXFTk5ht2AyHEZDUivAk3yWUAiEAwooeSmIFEXtYaMdK57RmYINSYFbPw5rX%2Fq5DolHE1c4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPgfPgtR94LfvMxq3CrcAxzxi9suIdCgj5x4A84VShx32a2BSWuNDWBM8uhZc0OaOw%2B2ccToXBdQXpSeeMlSvKnWgR1LZBtkIbYm5VD53gnOrPbR2VblXMzmAPtf6Nk3escKs7VqZhqdjmcYfxoh8ykng4M2uReEVqFPBQHRpQ%2Fx3OIhFmyO2jepqbAx5Qiw8MbgDT7ujOxfE%2Bz1cWQp2U8BOmrZrWjEIUzHKV3PmWKqofSWkW9OMLSI6Sm9Q85xUnrKE14WUbts%2BqibRoggqyzSu3nfkqrJG8JJIqSGESASG4Y1o2uMdQYy2Vfw6ZyugnQTPnMSJ1NW%2FA2GfGDtRC5NHBfw8XXLYQAx97IG3mhuG4isBnuHUiUuG4ktsuSKY%2BEdDM12LEAgLFC1jYNU0VQv38D92kYixZF4AQs2RIN0yLDv8Iwt6SC8wn5fm6IviLFZEPocETDhyOhC4fkSVWeadu7iJC3jteXTklYwzVLVcVRMJESX6sDbHlC8ZnETnjT6OBzerU47Mfb43Y94%2FurIhOMl1fOmSHqZWPH76P5EYoSH%2B%2FTvbT5hWpA1Eys6haNMrys1oHSXnWK1bIfbJwt0a9PunVi0iHLxw0GAlu8yy0mQKF%2Bvn7Q6cl9rKrjwh6OG9U82thckRF6MMIr4i8QGOqUBtvQ8zQNlQ8mM3wxdPt%2Bg6JhQ9MkmM6GGvQfKlu5bIMpGuQmVVG4E%2FChCj0HB1xcmj7CZBeuXBDQ8gN45wGHPkhFW1pg5McdmwEr5bPs71toOuKQmh4SYVs6IjP%2B7w4k299lZ6CUTyer1BzZT3XBcTg%2FAXCytnTSug8nmxoN12WBLzm%2FaKchqSXDRXLOCnsJtaUonqsjnu08Q3KaTyUgqS%2F%2B8x%2F7L&X-Amz-Signature=9c8fcf95916f5d6dacabfcbea65ee9cded31131f3ed00915c174fb8921a0c631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VUNFYUW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGP0b53YbLz13CnMlbbTiXFTk5ht2AyHEZDUivAk3yWUAiEAwooeSmIFEXtYaMdK57RmYINSYFbPw5rX%2Fq5DolHE1c4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPgfPgtR94LfvMxq3CrcAxzxi9suIdCgj5x4A84VShx32a2BSWuNDWBM8uhZc0OaOw%2B2ccToXBdQXpSeeMlSvKnWgR1LZBtkIbYm5VD53gnOrPbR2VblXMzmAPtf6Nk3escKs7VqZhqdjmcYfxoh8ykng4M2uReEVqFPBQHRpQ%2Fx3OIhFmyO2jepqbAx5Qiw8MbgDT7ujOxfE%2Bz1cWQp2U8BOmrZrWjEIUzHKV3PmWKqofSWkW9OMLSI6Sm9Q85xUnrKE14WUbts%2BqibRoggqyzSu3nfkqrJG8JJIqSGESASG4Y1o2uMdQYy2Vfw6ZyugnQTPnMSJ1NW%2FA2GfGDtRC5NHBfw8XXLYQAx97IG3mhuG4isBnuHUiUuG4ktsuSKY%2BEdDM12LEAgLFC1jYNU0VQv38D92kYixZF4AQs2RIN0yLDv8Iwt6SC8wn5fm6IviLFZEPocETDhyOhC4fkSVWeadu7iJC3jteXTklYwzVLVcVRMJESX6sDbHlC8ZnETnjT6OBzerU47Mfb43Y94%2FurIhOMl1fOmSHqZWPH76P5EYoSH%2B%2FTvbT5hWpA1Eys6haNMrys1oHSXnWK1bIfbJwt0a9PunVi0iHLxw0GAlu8yy0mQKF%2Bvn7Q6cl9rKrjwh6OG9U82thckRF6MMIr4i8QGOqUBtvQ8zQNlQ8mM3wxdPt%2Bg6JhQ9MkmM6GGvQfKlu5bIMpGuQmVVG4E%2FChCj0HB1xcmj7CZBeuXBDQ8gN45wGHPkhFW1pg5McdmwEr5bPs71toOuKQmh4SYVs6IjP%2B7w4k299lZ6CUTyer1BzZT3XBcTg%2FAXCytnTSug8nmxoN12WBLzm%2FaKchqSXDRXLOCnsJtaUonqsjnu08Q3KaTyUgqS%2F%2B8x%2F7L&X-Amz-Signature=5860f91da74019eabb39dd9c494652168cdff630de407d3d0619a5ccf0aadb29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673OKCEWA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDIWBmfMuWp5LipltVJzANlMoTJQPzjMwK%2FKJf0V1Tx2AiEAmwKPBlJo6zUjz%2BYoNfFyHjildz0wEd5w8ui5ZnZNC38q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMJX1JAcHigcK9jbwSrcAx7%2FYUZqkXi9h7G9xaDYFEvxlZKAmKx%2FCh%2BTLwqXc%2B%2FzKw4YoFEEpr%2F6ynohS1zR9eLNC5VF7qP8R4gDUiDczdckSkurjzJ79rEDTfoaGFBq84V0SX%2FkpJTwrZKMHCfidpPxv%2FfhYkmNp1BL4qfEM7P28hP2380x3RNv6uEB3RXuGn8DaR7FmVmzOGmlFVFlJjivG8aD882Q1keAeyE8iXismHQSuvId0R32p5uTqGLFIhWfAY6b9%2Fyxx6e0R%2FgVRPnfV5mYOv%2Fk8VKhV0FIYzoMqHPg7FkN%2FlhRr56fEKHh8XBI4MyM6D%2BQcn1QecbHM8FL0fYLAtK7mSsRDjJgOfRS9jzhgFf2Bgd1WuKn6dN34nMX3uWMeLaGYX%2Fo9RKxTv91VNzg6QKS6p4ZGhu7pD6hX5Wo2j%2F19a1erlXPmpvi%2BU1%2B11sfx8sO%2BHbhj4kxK73G84PXk%2Fa1%2BAN7ypYF%2BVV8EMFPWPc0i3m%2BSX0pm9iLYGQqX%2FPZX3rHJCp6VHG32sw7D0RCcdaeMF0sML6%2B9Inul6m3o5IB5E00GcIJS3U6QIACZvulAv1gZkFJF66789h4DqIVJP3AJdRb8toPmFmdIaBn0hhUfqhW30AHTcsDASL93k1XZGDQUCkXMMr3i8QGOqUB%2FKqp2ujFSytL5mpd3aZOSn0emSDpxqaIVElwwaLHQNuFQYvasnxeFc%2FiwUtV4W%2FDq0gD3b1QmJ4qWln%2BYjSDJy%2Fv4rEXDRuKUSWsj5VAMmiglgx%2B1pNg%2FwTe0TPE3EOhIT16f0vu2PDPmXff%2BlodFuvQL8sPkNuLxvl8i623Cb3PunzrXtzsh0lOHgDS2BKRiMVSErx34DFyQ1TvdKJ5ePu7XzGV&X-Amz-Signature=b454cfce43414bad0c1db1fa9d0e55a5ca7a94bc5a3ff42c955a8684002644c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673OKCEWA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDIWBmfMuWp5LipltVJzANlMoTJQPzjMwK%2FKJf0V1Tx2AiEAmwKPBlJo6zUjz%2BYoNfFyHjildz0wEd5w8ui5ZnZNC38q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMJX1JAcHigcK9jbwSrcAx7%2FYUZqkXi9h7G9xaDYFEvxlZKAmKx%2FCh%2BTLwqXc%2B%2FzKw4YoFEEpr%2F6ynohS1zR9eLNC5VF7qP8R4gDUiDczdckSkurjzJ79rEDTfoaGFBq84V0SX%2FkpJTwrZKMHCfidpPxv%2FfhYkmNp1BL4qfEM7P28hP2380x3RNv6uEB3RXuGn8DaR7FmVmzOGmlFVFlJjivG8aD882Q1keAeyE8iXismHQSuvId0R32p5uTqGLFIhWfAY6b9%2Fyxx6e0R%2FgVRPnfV5mYOv%2Fk8VKhV0FIYzoMqHPg7FkN%2FlhRr56fEKHh8XBI4MyM6D%2BQcn1QecbHM8FL0fYLAtK7mSsRDjJgOfRS9jzhgFf2Bgd1WuKn6dN34nMX3uWMeLaGYX%2Fo9RKxTv91VNzg6QKS6p4ZGhu7pD6hX5Wo2j%2F19a1erlXPmpvi%2BU1%2B11sfx8sO%2BHbhj4kxK73G84PXk%2Fa1%2BAN7ypYF%2BVV8EMFPWPc0i3m%2BSX0pm9iLYGQqX%2FPZX3rHJCp6VHG32sw7D0RCcdaeMF0sML6%2B9Inul6m3o5IB5E00GcIJS3U6QIACZvulAv1gZkFJF66789h4DqIVJP3AJdRb8toPmFmdIaBn0hhUfqhW30AHTcsDASL93k1XZGDQUCkXMMr3i8QGOqUB%2FKqp2ujFSytL5mpd3aZOSn0emSDpxqaIVElwwaLHQNuFQYvasnxeFc%2FiwUtV4W%2FDq0gD3b1QmJ4qWln%2BYjSDJy%2Fv4rEXDRuKUSWsj5VAMmiglgx%2B1pNg%2FwTe0TPE3EOhIT16f0vu2PDPmXff%2BlodFuvQL8sPkNuLxvl8i623Cb3PunzrXtzsh0lOHgDS2BKRiMVSErx34DFyQ1TvdKJ5ePu7XzGV&X-Amz-Signature=214ed080eac314fc990d11d93a9b5087787d7db594e30c93809f7674ca1437fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673OKCEWA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDIWBmfMuWp5LipltVJzANlMoTJQPzjMwK%2FKJf0V1Tx2AiEAmwKPBlJo6zUjz%2BYoNfFyHjildz0wEd5w8ui5ZnZNC38q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMJX1JAcHigcK9jbwSrcAx7%2FYUZqkXi9h7G9xaDYFEvxlZKAmKx%2FCh%2BTLwqXc%2B%2FzKw4YoFEEpr%2F6ynohS1zR9eLNC5VF7qP8R4gDUiDczdckSkurjzJ79rEDTfoaGFBq84V0SX%2FkpJTwrZKMHCfidpPxv%2FfhYkmNp1BL4qfEM7P28hP2380x3RNv6uEB3RXuGn8DaR7FmVmzOGmlFVFlJjivG8aD882Q1keAeyE8iXismHQSuvId0R32p5uTqGLFIhWfAY6b9%2Fyxx6e0R%2FgVRPnfV5mYOv%2Fk8VKhV0FIYzoMqHPg7FkN%2FlhRr56fEKHh8XBI4MyM6D%2BQcn1QecbHM8FL0fYLAtK7mSsRDjJgOfRS9jzhgFf2Bgd1WuKn6dN34nMX3uWMeLaGYX%2Fo9RKxTv91VNzg6QKS6p4ZGhu7pD6hX5Wo2j%2F19a1erlXPmpvi%2BU1%2B11sfx8sO%2BHbhj4kxK73G84PXk%2Fa1%2BAN7ypYF%2BVV8EMFPWPc0i3m%2BSX0pm9iLYGQqX%2FPZX3rHJCp6VHG32sw7D0RCcdaeMF0sML6%2B9Inul6m3o5IB5E00GcIJS3U6QIACZvulAv1gZkFJF66789h4DqIVJP3AJdRb8toPmFmdIaBn0hhUfqhW30AHTcsDASL93k1XZGDQUCkXMMr3i8QGOqUB%2FKqp2ujFSytL5mpd3aZOSn0emSDpxqaIVElwwaLHQNuFQYvasnxeFc%2FiwUtV4W%2FDq0gD3b1QmJ4qWln%2BYjSDJy%2Fv4rEXDRuKUSWsj5VAMmiglgx%2B1pNg%2FwTe0TPE3EOhIT16f0vu2PDPmXff%2BlodFuvQL8sPkNuLxvl8i623Cb3PunzrXtzsh0lOHgDS2BKRiMVSErx34DFyQ1TvdKJ5ePu7XzGV&X-Amz-Signature=579ad1b967dbe7739a77f1bf8881f181cbf86333995d7d20eb28f35c00421506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673OKCEWA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDIWBmfMuWp5LipltVJzANlMoTJQPzjMwK%2FKJf0V1Tx2AiEAmwKPBlJo6zUjz%2BYoNfFyHjildz0wEd5w8ui5ZnZNC38q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMJX1JAcHigcK9jbwSrcAx7%2FYUZqkXi9h7G9xaDYFEvxlZKAmKx%2FCh%2BTLwqXc%2B%2FzKw4YoFEEpr%2F6ynohS1zR9eLNC5VF7qP8R4gDUiDczdckSkurjzJ79rEDTfoaGFBq84V0SX%2FkpJTwrZKMHCfidpPxv%2FfhYkmNp1BL4qfEM7P28hP2380x3RNv6uEB3RXuGn8DaR7FmVmzOGmlFVFlJjivG8aD882Q1keAeyE8iXismHQSuvId0R32p5uTqGLFIhWfAY6b9%2Fyxx6e0R%2FgVRPnfV5mYOv%2Fk8VKhV0FIYzoMqHPg7FkN%2FlhRr56fEKHh8XBI4MyM6D%2BQcn1QecbHM8FL0fYLAtK7mSsRDjJgOfRS9jzhgFf2Bgd1WuKn6dN34nMX3uWMeLaGYX%2Fo9RKxTv91VNzg6QKS6p4ZGhu7pD6hX5Wo2j%2F19a1erlXPmpvi%2BU1%2B11sfx8sO%2BHbhj4kxK73G84PXk%2Fa1%2BAN7ypYF%2BVV8EMFPWPc0i3m%2BSX0pm9iLYGQqX%2FPZX3rHJCp6VHG32sw7D0RCcdaeMF0sML6%2B9Inul6m3o5IB5E00GcIJS3U6QIACZvulAv1gZkFJF66789h4DqIVJP3AJdRb8toPmFmdIaBn0hhUfqhW30AHTcsDASL93k1XZGDQUCkXMMr3i8QGOqUB%2FKqp2ujFSytL5mpd3aZOSn0emSDpxqaIVElwwaLHQNuFQYvasnxeFc%2FiwUtV4W%2FDq0gD3b1QmJ4qWln%2BYjSDJy%2Fv4rEXDRuKUSWsj5VAMmiglgx%2B1pNg%2FwTe0TPE3EOhIT16f0vu2PDPmXff%2BlodFuvQL8sPkNuLxvl8i623Cb3PunzrXtzsh0lOHgDS2BKRiMVSErx34DFyQ1TvdKJ5ePu7XzGV&X-Amz-Signature=9f359ce17edf2dd9d2cc1ae30cd2a2a1d40dc67b67d2ea00adb72d296398f267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673OKCEWA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDIWBmfMuWp5LipltVJzANlMoTJQPzjMwK%2FKJf0V1Tx2AiEAmwKPBlJo6zUjz%2BYoNfFyHjildz0wEd5w8ui5ZnZNC38q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMJX1JAcHigcK9jbwSrcAx7%2FYUZqkXi9h7G9xaDYFEvxlZKAmKx%2FCh%2BTLwqXc%2B%2FzKw4YoFEEpr%2F6ynohS1zR9eLNC5VF7qP8R4gDUiDczdckSkurjzJ79rEDTfoaGFBq84V0SX%2FkpJTwrZKMHCfidpPxv%2FfhYkmNp1BL4qfEM7P28hP2380x3RNv6uEB3RXuGn8DaR7FmVmzOGmlFVFlJjivG8aD882Q1keAeyE8iXismHQSuvId0R32p5uTqGLFIhWfAY6b9%2Fyxx6e0R%2FgVRPnfV5mYOv%2Fk8VKhV0FIYzoMqHPg7FkN%2FlhRr56fEKHh8XBI4MyM6D%2BQcn1QecbHM8FL0fYLAtK7mSsRDjJgOfRS9jzhgFf2Bgd1WuKn6dN34nMX3uWMeLaGYX%2Fo9RKxTv91VNzg6QKS6p4ZGhu7pD6hX5Wo2j%2F19a1erlXPmpvi%2BU1%2B11sfx8sO%2BHbhj4kxK73G84PXk%2Fa1%2BAN7ypYF%2BVV8EMFPWPc0i3m%2BSX0pm9iLYGQqX%2FPZX3rHJCp6VHG32sw7D0RCcdaeMF0sML6%2B9Inul6m3o5IB5E00GcIJS3U6QIACZvulAv1gZkFJF66789h4DqIVJP3AJdRb8toPmFmdIaBn0hhUfqhW30AHTcsDASL93k1XZGDQUCkXMMr3i8QGOqUB%2FKqp2ujFSytL5mpd3aZOSn0emSDpxqaIVElwwaLHQNuFQYvasnxeFc%2FiwUtV4W%2FDq0gD3b1QmJ4qWln%2BYjSDJy%2Fv4rEXDRuKUSWsj5VAMmiglgx%2B1pNg%2FwTe0TPE3EOhIT16f0vu2PDPmXff%2BlodFuvQL8sPkNuLxvl8i623Cb3PunzrXtzsh0lOHgDS2BKRiMVSErx34DFyQ1TvdKJ5ePu7XzGV&X-Amz-Signature=b544eb27fc4bd8151ab2e9fcf54c6da70ba8b33983d9a7064786646ff3201ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673OKCEWA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDIWBmfMuWp5LipltVJzANlMoTJQPzjMwK%2FKJf0V1Tx2AiEAmwKPBlJo6zUjz%2BYoNfFyHjildz0wEd5w8ui5ZnZNC38q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMJX1JAcHigcK9jbwSrcAx7%2FYUZqkXi9h7G9xaDYFEvxlZKAmKx%2FCh%2BTLwqXc%2B%2FzKw4YoFEEpr%2F6ynohS1zR9eLNC5VF7qP8R4gDUiDczdckSkurjzJ79rEDTfoaGFBq84V0SX%2FkpJTwrZKMHCfidpPxv%2FfhYkmNp1BL4qfEM7P28hP2380x3RNv6uEB3RXuGn8DaR7FmVmzOGmlFVFlJjivG8aD882Q1keAeyE8iXismHQSuvId0R32p5uTqGLFIhWfAY6b9%2Fyxx6e0R%2FgVRPnfV5mYOv%2Fk8VKhV0FIYzoMqHPg7FkN%2FlhRr56fEKHh8XBI4MyM6D%2BQcn1QecbHM8FL0fYLAtK7mSsRDjJgOfRS9jzhgFf2Bgd1WuKn6dN34nMX3uWMeLaGYX%2Fo9RKxTv91VNzg6QKS6p4ZGhu7pD6hX5Wo2j%2F19a1erlXPmpvi%2BU1%2B11sfx8sO%2BHbhj4kxK73G84PXk%2Fa1%2BAN7ypYF%2BVV8EMFPWPc0i3m%2BSX0pm9iLYGQqX%2FPZX3rHJCp6VHG32sw7D0RCcdaeMF0sML6%2B9Inul6m3o5IB5E00GcIJS3U6QIACZvulAv1gZkFJF66789h4DqIVJP3AJdRb8toPmFmdIaBn0hhUfqhW30AHTcsDASL93k1XZGDQUCkXMMr3i8QGOqUB%2FKqp2ujFSytL5mpd3aZOSn0emSDpxqaIVElwwaLHQNuFQYvasnxeFc%2FiwUtV4W%2FDq0gD3b1QmJ4qWln%2BYjSDJy%2Fv4rEXDRuKUSWsj5VAMmiglgx%2B1pNg%2FwTe0TPE3EOhIT16f0vu2PDPmXff%2BlodFuvQL8sPkNuLxvl8i623Cb3PunzrXtzsh0lOHgDS2BKRiMVSErx34DFyQ1TvdKJ5ePu7XzGV&X-Amz-Signature=8da851c06e35b14f98ea02da2b80a06cdadbe79859b09ba0e8edad25a7782fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
