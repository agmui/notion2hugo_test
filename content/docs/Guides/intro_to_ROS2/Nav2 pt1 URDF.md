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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBCS5BG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCmYNP5AtF3ldfAeT9VezFAHR7EMLzNefZRtONdv4zrdAIgNlYw5eAlm7ofe35agmf7Oz3TEggulNNBLKLan0xe1UIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMIGbhMQStwU2SWdFircA%2F3bqcIICtJ5Hkdo1W2uGsuctNd4O5gnk%2BNyXcUfd3R91GwKJZ29qEaQIdO7Q%2F%2FU%2BFNe8GMoMqqqIKO23nL21gDI1fuMbovmeCnV2hCUmaErhAkfmq7pCAl6PyJ7b11OkiUajtXMSbI3g7hcyVORa%2FNtlkAOzvlzfafHzHWRQSJyNxPu0wRQqoF%2BH7JovtGWHVHcKrsCBKlv%2Bb3qucwK50sbtA9zYHkTKMT0Ni%2BFdxy1FJTk0XD77Ke%2B2P6bVdWEoOyWZGZQ3v2%2BMpRVar8HNN0MFztTOJykf3%2BymQQVoIpuOdMob3Pyd9uelv6wuv6gCVK%2B4PJAju5ZzHsnUOxxGBp09heDpEVHPveXMvmHAqARRg0iZbIuiGn96AIjUUrViMlOhFzVaFtL8dcIiojcon%2B4%2BMABRozyz8po781d2iQbNz%2BZ9RLuZ1Mf7sVC%2Fnw%2FZOZNT71wd%2BXBa%2FpU2zPAlCTpFdmIbmug44pBMEna5M%2FuGyqvf960eIvq0zlR6I1hYnv3cgp4Wrk8G0aERN2ACDX6ZySCeNvBZgMBValO%2B0uUMhtuWycXy3T8P%2Fx5nNKAniTxqMdoUZQFA1aARrQgp4wmtGvzdbkXT0zZHHDHfUQb0Djd8eVFyOrW3W%2FmMMaj%2BsQGOqUBK%2FHy6RN4%2FpHkk2L594rQCHCVcL5mkDpI7EtMlXxg3oCToIEOIbduSG76qeNl4ONM6qU4uXGngQRde%2FJWw%2BEQzalGnDvp3getnkSMXEP1bgI5clFPOM2R8m%2BR%2BoZG94vTKQ3eGTrvm%2BGEiurge7AFy955d2aALe8mznzujflrEF6fEbjilWOlpoK6B8zPA89dC29ysH6hTg3TP%2BP%2FHbTXUwnHLjYR&X-Amz-Signature=056490caffa0a8bf7e178e574bebd7cfeb0345098fc668241c3993f534dac4e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBCS5BG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCmYNP5AtF3ldfAeT9VezFAHR7EMLzNefZRtONdv4zrdAIgNlYw5eAlm7ofe35agmf7Oz3TEggulNNBLKLan0xe1UIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMIGbhMQStwU2SWdFircA%2F3bqcIICtJ5Hkdo1W2uGsuctNd4O5gnk%2BNyXcUfd3R91GwKJZ29qEaQIdO7Q%2F%2FU%2BFNe8GMoMqqqIKO23nL21gDI1fuMbovmeCnV2hCUmaErhAkfmq7pCAl6PyJ7b11OkiUajtXMSbI3g7hcyVORa%2FNtlkAOzvlzfafHzHWRQSJyNxPu0wRQqoF%2BH7JovtGWHVHcKrsCBKlv%2Bb3qucwK50sbtA9zYHkTKMT0Ni%2BFdxy1FJTk0XD77Ke%2B2P6bVdWEoOyWZGZQ3v2%2BMpRVar8HNN0MFztTOJykf3%2BymQQVoIpuOdMob3Pyd9uelv6wuv6gCVK%2B4PJAju5ZzHsnUOxxGBp09heDpEVHPveXMvmHAqARRg0iZbIuiGn96AIjUUrViMlOhFzVaFtL8dcIiojcon%2B4%2BMABRozyz8po781d2iQbNz%2BZ9RLuZ1Mf7sVC%2Fnw%2FZOZNT71wd%2BXBa%2FpU2zPAlCTpFdmIbmug44pBMEna5M%2FuGyqvf960eIvq0zlR6I1hYnv3cgp4Wrk8G0aERN2ACDX6ZySCeNvBZgMBValO%2B0uUMhtuWycXy3T8P%2Fx5nNKAniTxqMdoUZQFA1aARrQgp4wmtGvzdbkXT0zZHHDHfUQb0Djd8eVFyOrW3W%2FmMMaj%2BsQGOqUBK%2FHy6RN4%2FpHkk2L594rQCHCVcL5mkDpI7EtMlXxg3oCToIEOIbduSG76qeNl4ONM6qU4uXGngQRde%2FJWw%2BEQzalGnDvp3getnkSMXEP1bgI5clFPOM2R8m%2BR%2BoZG94vTKQ3eGTrvm%2BGEiurge7AFy955d2aALe8mznzujflrEF6fEbjilWOlpoK6B8zPA89dC29ysH6hTg3TP%2BP%2FHbTXUwnHLjYR&X-Amz-Signature=2f06d7af7767d8d5cba1afc3aec2b64587d3b0f68206d8cf2baebcf1250b5ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBCS5BG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCmYNP5AtF3ldfAeT9VezFAHR7EMLzNefZRtONdv4zrdAIgNlYw5eAlm7ofe35agmf7Oz3TEggulNNBLKLan0xe1UIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMIGbhMQStwU2SWdFircA%2F3bqcIICtJ5Hkdo1W2uGsuctNd4O5gnk%2BNyXcUfd3R91GwKJZ29qEaQIdO7Q%2F%2FU%2BFNe8GMoMqqqIKO23nL21gDI1fuMbovmeCnV2hCUmaErhAkfmq7pCAl6PyJ7b11OkiUajtXMSbI3g7hcyVORa%2FNtlkAOzvlzfafHzHWRQSJyNxPu0wRQqoF%2BH7JovtGWHVHcKrsCBKlv%2Bb3qucwK50sbtA9zYHkTKMT0Ni%2BFdxy1FJTk0XD77Ke%2B2P6bVdWEoOyWZGZQ3v2%2BMpRVar8HNN0MFztTOJykf3%2BymQQVoIpuOdMob3Pyd9uelv6wuv6gCVK%2B4PJAju5ZzHsnUOxxGBp09heDpEVHPveXMvmHAqARRg0iZbIuiGn96AIjUUrViMlOhFzVaFtL8dcIiojcon%2B4%2BMABRozyz8po781d2iQbNz%2BZ9RLuZ1Mf7sVC%2Fnw%2FZOZNT71wd%2BXBa%2FpU2zPAlCTpFdmIbmug44pBMEna5M%2FuGyqvf960eIvq0zlR6I1hYnv3cgp4Wrk8G0aERN2ACDX6ZySCeNvBZgMBValO%2B0uUMhtuWycXy3T8P%2Fx5nNKAniTxqMdoUZQFA1aARrQgp4wmtGvzdbkXT0zZHHDHfUQb0Djd8eVFyOrW3W%2FmMMaj%2BsQGOqUBK%2FHy6RN4%2FpHkk2L594rQCHCVcL5mkDpI7EtMlXxg3oCToIEOIbduSG76qeNl4ONM6qU4uXGngQRde%2FJWw%2BEQzalGnDvp3getnkSMXEP1bgI5clFPOM2R8m%2BR%2BoZG94vTKQ3eGTrvm%2BGEiurge7AFy955d2aALe8mznzujflrEF6fEbjilWOlpoK6B8zPA89dC29ysH6hTg3TP%2BP%2FHbTXUwnHLjYR&X-Amz-Signature=19a08022a1e8e4fb4d8bf602d7bcf05096536738119c4bc292e5810cb09d257a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBCS5BG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCmYNP5AtF3ldfAeT9VezFAHR7EMLzNefZRtONdv4zrdAIgNlYw5eAlm7ofe35agmf7Oz3TEggulNNBLKLan0xe1UIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMIGbhMQStwU2SWdFircA%2F3bqcIICtJ5Hkdo1W2uGsuctNd4O5gnk%2BNyXcUfd3R91GwKJZ29qEaQIdO7Q%2F%2FU%2BFNe8GMoMqqqIKO23nL21gDI1fuMbovmeCnV2hCUmaErhAkfmq7pCAl6PyJ7b11OkiUajtXMSbI3g7hcyVORa%2FNtlkAOzvlzfafHzHWRQSJyNxPu0wRQqoF%2BH7JovtGWHVHcKrsCBKlv%2Bb3qucwK50sbtA9zYHkTKMT0Ni%2BFdxy1FJTk0XD77Ke%2B2P6bVdWEoOyWZGZQ3v2%2BMpRVar8HNN0MFztTOJykf3%2BymQQVoIpuOdMob3Pyd9uelv6wuv6gCVK%2B4PJAju5ZzHsnUOxxGBp09heDpEVHPveXMvmHAqARRg0iZbIuiGn96AIjUUrViMlOhFzVaFtL8dcIiojcon%2B4%2BMABRozyz8po781d2iQbNz%2BZ9RLuZ1Mf7sVC%2Fnw%2FZOZNT71wd%2BXBa%2FpU2zPAlCTpFdmIbmug44pBMEna5M%2FuGyqvf960eIvq0zlR6I1hYnv3cgp4Wrk8G0aERN2ACDX6ZySCeNvBZgMBValO%2B0uUMhtuWycXy3T8P%2Fx5nNKAniTxqMdoUZQFA1aARrQgp4wmtGvzdbkXT0zZHHDHfUQb0Djd8eVFyOrW3W%2FmMMaj%2BsQGOqUBK%2FHy6RN4%2FpHkk2L594rQCHCVcL5mkDpI7EtMlXxg3oCToIEOIbduSG76qeNl4ONM6qU4uXGngQRde%2FJWw%2BEQzalGnDvp3getnkSMXEP1bgI5clFPOM2R8m%2BR%2BoZG94vTKQ3eGTrvm%2BGEiurge7AFy955d2aALe8mznzujflrEF6fEbjilWOlpoK6B8zPA89dC29ysH6hTg3TP%2BP%2FHbTXUwnHLjYR&X-Amz-Signature=99b28930454c8b458244e89005d5abf198f11a4573ab7c1f1c138c0f935ef025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBCS5BG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCmYNP5AtF3ldfAeT9VezFAHR7EMLzNefZRtONdv4zrdAIgNlYw5eAlm7ofe35agmf7Oz3TEggulNNBLKLan0xe1UIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMIGbhMQStwU2SWdFircA%2F3bqcIICtJ5Hkdo1W2uGsuctNd4O5gnk%2BNyXcUfd3R91GwKJZ29qEaQIdO7Q%2F%2FU%2BFNe8GMoMqqqIKO23nL21gDI1fuMbovmeCnV2hCUmaErhAkfmq7pCAl6PyJ7b11OkiUajtXMSbI3g7hcyVORa%2FNtlkAOzvlzfafHzHWRQSJyNxPu0wRQqoF%2BH7JovtGWHVHcKrsCBKlv%2Bb3qucwK50sbtA9zYHkTKMT0Ni%2BFdxy1FJTk0XD77Ke%2B2P6bVdWEoOyWZGZQ3v2%2BMpRVar8HNN0MFztTOJykf3%2BymQQVoIpuOdMob3Pyd9uelv6wuv6gCVK%2B4PJAju5ZzHsnUOxxGBp09heDpEVHPveXMvmHAqARRg0iZbIuiGn96AIjUUrViMlOhFzVaFtL8dcIiojcon%2B4%2BMABRozyz8po781d2iQbNz%2BZ9RLuZ1Mf7sVC%2Fnw%2FZOZNT71wd%2BXBa%2FpU2zPAlCTpFdmIbmug44pBMEna5M%2FuGyqvf960eIvq0zlR6I1hYnv3cgp4Wrk8G0aERN2ACDX6ZySCeNvBZgMBValO%2B0uUMhtuWycXy3T8P%2Fx5nNKAniTxqMdoUZQFA1aARrQgp4wmtGvzdbkXT0zZHHDHfUQb0Djd8eVFyOrW3W%2FmMMaj%2BsQGOqUBK%2FHy6RN4%2FpHkk2L594rQCHCVcL5mkDpI7EtMlXxg3oCToIEOIbduSG76qeNl4ONM6qU4uXGngQRde%2FJWw%2BEQzalGnDvp3getnkSMXEP1bgI5clFPOM2R8m%2BR%2BoZG94vTKQ3eGTrvm%2BGEiurge7AFy955d2aALe8mznzujflrEF6fEbjilWOlpoK6B8zPA89dC29ysH6hTg3TP%2BP%2FHbTXUwnHLjYR&X-Amz-Signature=5b5a815ba6b887d1ccd06bef84d872542695a8da50c66659e43603ab36a949da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBCS5BG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCmYNP5AtF3ldfAeT9VezFAHR7EMLzNefZRtONdv4zrdAIgNlYw5eAlm7ofe35agmf7Oz3TEggulNNBLKLan0xe1UIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMIGbhMQStwU2SWdFircA%2F3bqcIICtJ5Hkdo1W2uGsuctNd4O5gnk%2BNyXcUfd3R91GwKJZ29qEaQIdO7Q%2F%2FU%2BFNe8GMoMqqqIKO23nL21gDI1fuMbovmeCnV2hCUmaErhAkfmq7pCAl6PyJ7b11OkiUajtXMSbI3g7hcyVORa%2FNtlkAOzvlzfafHzHWRQSJyNxPu0wRQqoF%2BH7JovtGWHVHcKrsCBKlv%2Bb3qucwK50sbtA9zYHkTKMT0Ni%2BFdxy1FJTk0XD77Ke%2B2P6bVdWEoOyWZGZQ3v2%2BMpRVar8HNN0MFztTOJykf3%2BymQQVoIpuOdMob3Pyd9uelv6wuv6gCVK%2B4PJAju5ZzHsnUOxxGBp09heDpEVHPveXMvmHAqARRg0iZbIuiGn96AIjUUrViMlOhFzVaFtL8dcIiojcon%2B4%2BMABRozyz8po781d2iQbNz%2BZ9RLuZ1Mf7sVC%2Fnw%2FZOZNT71wd%2BXBa%2FpU2zPAlCTpFdmIbmug44pBMEna5M%2FuGyqvf960eIvq0zlR6I1hYnv3cgp4Wrk8G0aERN2ACDX6ZySCeNvBZgMBValO%2B0uUMhtuWycXy3T8P%2Fx5nNKAniTxqMdoUZQFA1aARrQgp4wmtGvzdbkXT0zZHHDHfUQb0Djd8eVFyOrW3W%2FmMMaj%2BsQGOqUBK%2FHy6RN4%2FpHkk2L594rQCHCVcL5mkDpI7EtMlXxg3oCToIEOIbduSG76qeNl4ONM6qU4uXGngQRde%2FJWw%2BEQzalGnDvp3getnkSMXEP1bgI5clFPOM2R8m%2BR%2BoZG94vTKQ3eGTrvm%2BGEiurge7AFy955d2aALe8mznzujflrEF6fEbjilWOlpoK6B8zPA89dC29ysH6hTg3TP%2BP%2FHbTXUwnHLjYR&X-Amz-Signature=cec3f2d47fc401c458045587ee2529e043e0d519c606138ec89eea40a1f2b4bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBCS5BG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCmYNP5AtF3ldfAeT9VezFAHR7EMLzNefZRtONdv4zrdAIgNlYw5eAlm7ofe35agmf7Oz3TEggulNNBLKLan0xe1UIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMIGbhMQStwU2SWdFircA%2F3bqcIICtJ5Hkdo1W2uGsuctNd4O5gnk%2BNyXcUfd3R91GwKJZ29qEaQIdO7Q%2F%2FU%2BFNe8GMoMqqqIKO23nL21gDI1fuMbovmeCnV2hCUmaErhAkfmq7pCAl6PyJ7b11OkiUajtXMSbI3g7hcyVORa%2FNtlkAOzvlzfafHzHWRQSJyNxPu0wRQqoF%2BH7JovtGWHVHcKrsCBKlv%2Bb3qucwK50sbtA9zYHkTKMT0Ni%2BFdxy1FJTk0XD77Ke%2B2P6bVdWEoOyWZGZQ3v2%2BMpRVar8HNN0MFztTOJykf3%2BymQQVoIpuOdMob3Pyd9uelv6wuv6gCVK%2B4PJAju5ZzHsnUOxxGBp09heDpEVHPveXMvmHAqARRg0iZbIuiGn96AIjUUrViMlOhFzVaFtL8dcIiojcon%2B4%2BMABRozyz8po781d2iQbNz%2BZ9RLuZ1Mf7sVC%2Fnw%2FZOZNT71wd%2BXBa%2FpU2zPAlCTpFdmIbmug44pBMEna5M%2FuGyqvf960eIvq0zlR6I1hYnv3cgp4Wrk8G0aERN2ACDX6ZySCeNvBZgMBValO%2B0uUMhtuWycXy3T8P%2Fx5nNKAniTxqMdoUZQFA1aARrQgp4wmtGvzdbkXT0zZHHDHfUQb0Djd8eVFyOrW3W%2FmMMaj%2BsQGOqUBK%2FHy6RN4%2FpHkk2L594rQCHCVcL5mkDpI7EtMlXxg3oCToIEOIbduSG76qeNl4ONM6qU4uXGngQRde%2FJWw%2BEQzalGnDvp3getnkSMXEP1bgI5clFPOM2R8m%2BR%2BoZG94vTKQ3eGTrvm%2BGEiurge7AFy955d2aALe8mznzujflrEF6fEbjilWOlpoK6B8zPA89dC29ysH6hTg3TP%2BP%2FHbTXUwnHLjYR&X-Amz-Signature=9b449cf86976ab2fa7ffeba97baf3d17912e24134c9c64ee967356156deea8ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBCS5BG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCmYNP5AtF3ldfAeT9VezFAHR7EMLzNefZRtONdv4zrdAIgNlYw5eAlm7ofe35agmf7Oz3TEggulNNBLKLan0xe1UIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMIGbhMQStwU2SWdFircA%2F3bqcIICtJ5Hkdo1W2uGsuctNd4O5gnk%2BNyXcUfd3R91GwKJZ29qEaQIdO7Q%2F%2FU%2BFNe8GMoMqqqIKO23nL21gDI1fuMbovmeCnV2hCUmaErhAkfmq7pCAl6PyJ7b11OkiUajtXMSbI3g7hcyVORa%2FNtlkAOzvlzfafHzHWRQSJyNxPu0wRQqoF%2BH7JovtGWHVHcKrsCBKlv%2Bb3qucwK50sbtA9zYHkTKMT0Ni%2BFdxy1FJTk0XD77Ke%2B2P6bVdWEoOyWZGZQ3v2%2BMpRVar8HNN0MFztTOJykf3%2BymQQVoIpuOdMob3Pyd9uelv6wuv6gCVK%2B4PJAju5ZzHsnUOxxGBp09heDpEVHPveXMvmHAqARRg0iZbIuiGn96AIjUUrViMlOhFzVaFtL8dcIiojcon%2B4%2BMABRozyz8po781d2iQbNz%2BZ9RLuZ1Mf7sVC%2Fnw%2FZOZNT71wd%2BXBa%2FpU2zPAlCTpFdmIbmug44pBMEna5M%2FuGyqvf960eIvq0zlR6I1hYnv3cgp4Wrk8G0aERN2ACDX6ZySCeNvBZgMBValO%2B0uUMhtuWycXy3T8P%2Fx5nNKAniTxqMdoUZQFA1aARrQgp4wmtGvzdbkXT0zZHHDHfUQb0Djd8eVFyOrW3W%2FmMMaj%2BsQGOqUBK%2FHy6RN4%2FpHkk2L594rQCHCVcL5mkDpI7EtMlXxg3oCToIEOIbduSG76qeNl4ONM6qU4uXGngQRde%2FJWw%2BEQzalGnDvp3getnkSMXEP1bgI5clFPOM2R8m%2BR%2BoZG94vTKQ3eGTrvm%2BGEiurge7AFy955d2aALe8mznzujflrEF6fEbjilWOlpoK6B8zPA89dC29ysH6hTg3TP%2BP%2FHbTXUwnHLjYR&X-Amz-Signature=d3755ed96da80d9aa3e455335bbcae3d4f7c771b2a444151a9290e78b36506d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBCS5BG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCmYNP5AtF3ldfAeT9VezFAHR7EMLzNefZRtONdv4zrdAIgNlYw5eAlm7ofe35agmf7Oz3TEggulNNBLKLan0xe1UIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMIGbhMQStwU2SWdFircA%2F3bqcIICtJ5Hkdo1W2uGsuctNd4O5gnk%2BNyXcUfd3R91GwKJZ29qEaQIdO7Q%2F%2FU%2BFNe8GMoMqqqIKO23nL21gDI1fuMbovmeCnV2hCUmaErhAkfmq7pCAl6PyJ7b11OkiUajtXMSbI3g7hcyVORa%2FNtlkAOzvlzfafHzHWRQSJyNxPu0wRQqoF%2BH7JovtGWHVHcKrsCBKlv%2Bb3qucwK50sbtA9zYHkTKMT0Ni%2BFdxy1FJTk0XD77Ke%2B2P6bVdWEoOyWZGZQ3v2%2BMpRVar8HNN0MFztTOJykf3%2BymQQVoIpuOdMob3Pyd9uelv6wuv6gCVK%2B4PJAju5ZzHsnUOxxGBp09heDpEVHPveXMvmHAqARRg0iZbIuiGn96AIjUUrViMlOhFzVaFtL8dcIiojcon%2B4%2BMABRozyz8po781d2iQbNz%2BZ9RLuZ1Mf7sVC%2Fnw%2FZOZNT71wd%2BXBa%2FpU2zPAlCTpFdmIbmug44pBMEna5M%2FuGyqvf960eIvq0zlR6I1hYnv3cgp4Wrk8G0aERN2ACDX6ZySCeNvBZgMBValO%2B0uUMhtuWycXy3T8P%2Fx5nNKAniTxqMdoUZQFA1aARrQgp4wmtGvzdbkXT0zZHHDHfUQb0Djd8eVFyOrW3W%2FmMMaj%2BsQGOqUBK%2FHy6RN4%2FpHkk2L594rQCHCVcL5mkDpI7EtMlXxg3oCToIEOIbduSG76qeNl4ONM6qU4uXGngQRde%2FJWw%2BEQzalGnDvp3getnkSMXEP1bgI5clFPOM2R8m%2BR%2BoZG94vTKQ3eGTrvm%2BGEiurge7AFy955d2aALe8mznzujflrEF6fEbjilWOlpoK6B8zPA89dC29ysH6hTg3TP%2BP%2FHbTXUwnHLjYR&X-Amz-Signature=be3d2b198e9b0aa9762c0003c17e0038b05cae1eadb8cdba957e3a070df51d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBCS5BG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCmYNP5AtF3ldfAeT9VezFAHR7EMLzNefZRtONdv4zrdAIgNlYw5eAlm7ofe35agmf7Oz3TEggulNNBLKLan0xe1UIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMIGbhMQStwU2SWdFircA%2F3bqcIICtJ5Hkdo1W2uGsuctNd4O5gnk%2BNyXcUfd3R91GwKJZ29qEaQIdO7Q%2F%2FU%2BFNe8GMoMqqqIKO23nL21gDI1fuMbovmeCnV2hCUmaErhAkfmq7pCAl6PyJ7b11OkiUajtXMSbI3g7hcyVORa%2FNtlkAOzvlzfafHzHWRQSJyNxPu0wRQqoF%2BH7JovtGWHVHcKrsCBKlv%2Bb3qucwK50sbtA9zYHkTKMT0Ni%2BFdxy1FJTk0XD77Ke%2B2P6bVdWEoOyWZGZQ3v2%2BMpRVar8HNN0MFztTOJykf3%2BymQQVoIpuOdMob3Pyd9uelv6wuv6gCVK%2B4PJAju5ZzHsnUOxxGBp09heDpEVHPveXMvmHAqARRg0iZbIuiGn96AIjUUrViMlOhFzVaFtL8dcIiojcon%2B4%2BMABRozyz8po781d2iQbNz%2BZ9RLuZ1Mf7sVC%2Fnw%2FZOZNT71wd%2BXBa%2FpU2zPAlCTpFdmIbmug44pBMEna5M%2FuGyqvf960eIvq0zlR6I1hYnv3cgp4Wrk8G0aERN2ACDX6ZySCeNvBZgMBValO%2B0uUMhtuWycXy3T8P%2Fx5nNKAniTxqMdoUZQFA1aARrQgp4wmtGvzdbkXT0zZHHDHfUQb0Djd8eVFyOrW3W%2FmMMaj%2BsQGOqUBK%2FHy6RN4%2FpHkk2L594rQCHCVcL5mkDpI7EtMlXxg3oCToIEOIbduSG76qeNl4ONM6qU4uXGngQRde%2FJWw%2BEQzalGnDvp3getnkSMXEP1bgI5clFPOM2R8m%2BR%2BoZG94vTKQ3eGTrvm%2BGEiurge7AFy955d2aALe8mznzujflrEF6fEbjilWOlpoK6B8zPA89dC29ysH6hTg3TP%2BP%2FHbTXUwnHLjYR&X-Amz-Signature=e94bfc9592fc87837fb43da13b26b4860047131f43bc9f368c3a8967a0335297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7R74Y5G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDsv5DyCZ38dUlwNUIjzgkQj5Zrx5t2dpDhN39wVq%2FpFAiAqZ1vYaIMyNUgNMh%2FrE6pLG4cBcZtz%2BnodjigyZRMBMSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMEALi%2BOwxF3AiH2kAKtwDIUi3YVGapRl8ts1AopA%2B%2FrzXyu1t2Dba2zxvjBWEZR7i9v8weF2tQmIwhBiI3QAZatL230oduP7UeX5VC0FrrMilLWQ1BvvEHRwmJhrSh5PxhyMFA2IsGvOKU%2B80qtunBxOUemo4ryDqlQJUjOOw4Ul9xWU4PN4sg7E1j73lkUx1slNKXYK6In0FMpi9nWg9gg1c8kSdbpCUjG3mCb%2FkrU%2FMbweJqx5fwe1V5uEaVItr9Al9xXVgxvQVSe80F7Ce9DniVrAOH7CCT3lKjzmmpSGv6x2wHTbWZMz07hBqOa3n%2BgY6JFsd0ebcQW%2B7dE34QlbTMBx%2Bj4Aseev9gRmUc37dO2LKhXx2a7JD8bT4IrHTWJSyew68MnOwez7MhAZ2upTYG%2BWjfbM124FPLd%2B5voHKyMf0f5jPo3DAuGjveE4x6jQabIOVUEsolJ2%2B7S7N6JiRkuzmUZxcNdU9lOczxZ1AQvAOnM6nHPs8wDqlE0TmvPa4kXWfDFbMeonNljaUqOUv0hhaAKbpf4w%2FKXeZblo5fjWHnAqPNUIm81OSIVRgMLEpIo53hWLX76RNUdcCOa6Y8YnmPC5rOSyRgnWx5NW%2FEk91tWnpi95wDFhZv8hmv3xugPW1Z%2FhGJzEw%2BKL6xAY6pgEDNfDUhDSG6IbsqMZGmcCBmY9Z2mnHVaMt6C1x8wEpG%2BkHRgaCv0%2B7IX%2FSXDB%2F6W6yHu%2B0KvOhknpzm%2B%2FiCuFqeQC3fkUtQ4m9rNidklI6r3o9UDGvQ0UPbSkVDiQuxjHBcQsdgtCtiV6WHaRWezZfsPq3zu1dEIk3n%2FQtXPqIOVNDfgwyllUx8Elsufmq4BrKsf%2FzVVqRPgqyImKiW3qFcEoMLtGr&X-Amz-Signature=b850d9d46b570585b560f4201f12c771f6b1b26e8fb4c8df1c19d1f85e1c1cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666X5BS3H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCFK3%2Fpxr65hbmEEWPx2Kfqfqdq4FGqBr8Wdar93QgLFAIhANsMZwPzHYljT9aNgJVPL553jjvtQeJY%2BhmtKPTR%2Bdm9Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxVGEBxN1Sfj59KO9cq3AOi48RBj3TWDhKy4Cfs6W%2FXlN1qMmN7m4gghgx6e8BTBxO4FjbaoQs4uEGurM7LshuO%2FbWnVSIXTzG5OwLmfWIw5udW8kIrz15toNrgNJrKbpsVacGoBNM4B5ZnTqpyIsYpeZ20SpdwSz%2BcAphxKz4e4GLGEpiA5B5BPJjvBC6t5WgyWl3UClkov6BsRQmaqIjtaw2dyqVfHDamzsYwXJlrEcNRRH8C4CGTy3ekX5dyukSP%2FdBb4KyhnvxNJm%2FFTgsZ43sWjGBMmJr17kWAl42i1Xwbr3AjDV61O1aCm7IE2QGsLZ1fOltVpI5d4%2Ft74e4bHLHeE5YrkLid%2FwqPjvB6uICfgdh2dpaSjffyMoTgiOH0d1uLmwldDzLeh5yk1tVogyVD5F3%2FfZkqZaVhTRlJLXv3bDpllCGon8J9oeLEuT0uOyLLTZY14uGtQ0KCkRpaXdxfJEdDdJycu1gA7W3178xahSX%2FCAONEWivOWftsi4OjlDxugtiEtldBIgYCAEqY4%2Bm0Delmsfasz7Rq%2FsuASongo5OBjJ%2FFGt3TDGsK1UxVf8CCHq6M6469QioChmOtoqoBzVQ%2FH40q4cwKgm%2FOogj5Hz5nvfeBCYPHsRuflkWokby0Wz08dF%2F9TDhovrEBjqkAb35S6K54NDrKV4TDVdhpJm%2BOtSVPXtGUGuDCVXRvO9ToPqQmeblCx0XfsAdz6YOm6xBJIBNRWz3wmVAPUsQuyspMp0WbTbELq1RCCwbTRh1SRpWSuF8fSnk9quWPpJXnoEVDxyFlRZyARRqyxl5hRiVRYwW%2F1YvhEw4q42JuFbQxV9qQqrrMvLEjJU83uruSSALgPwDxLw3ii9vmr%2BRdoxh1wdd&X-Amz-Signature=b24fea8ffa8812dde4c66a484af94fb39469b31c2ba3fcd589734c9215b819a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52YVYK6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFo0xtpgz6HeC4gxORg%2FjVh8oaFK4KjVKIoSKcx1FBUiAiEAwhuxp5WE6Mb9kUD1XaVidVv1gtScYZfOLXBsHdQfaQYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJb4CWjm8ZKmY2cFsyrcA2l%2Fm5Q0Fe3hX682gl5H4xI3rN33TkmiasX5uUkRszWrLqndNgjgBzrHXo%2BXLSadskfB3xviomz%2BH2uPUPZ5HSJZzQtpKQFEaQP9MT5lRgtqONE9yDvvC68OuF%2FpOhYYuU3Gv0fDZibD1AKqiQgucFeaPy5pidmrLl7AmVc68vyvlnR3FSilxj5f86DqoFi0TBDfJiucvQSwBDNSPOzRmTWY9CyrrvARzVXU16s7bSV6i88k4ytlUdXqFjObkfMo2h8pyaLzhRBf7GhZRSv74OXvN6CwKr%2BEDm4pDVjX9h0Xlt4UFyxJNrUs4nquH8Fkp8f9KxFHD9wKFqlMJyCWnCHp393EENzJD%2BeW32ROBjuBEr4O030yNFFDpFFl0VwGULeghGc34v8UjE%2B5TDQDfhcC%2FDJ540Ni%2FGZ32GuVGTpDLO8zFQogmyXd1a2OEqQmqagbqn4ejYlitCasBaG5kvDmXqBKticUZwhFQi3yIEzOJN0RDBPbJcKUURUjwVR5Dx8Hfeva5IcjJn9G8cj2o0DWCCL%2BAW1Qw1lPCGkownZ%2FpYT9TQsUBWqOI82r8FF%2BObkToD04ZTUpYj%2Flq%2FIFu4rBE0%2FhWsp89INxf5LpbbnV3Z2tAc4vkvSP9c18MPaj%2BsQGOqUBaWq4Oqal03lj2t4oo7DnD2bzsAUlAzS08qJz6kW3S%2FvIx37XNc3J53PIgudKeOokJNXLrwFehXbS0OpVcLmBzHXnLCphOf8nGyBCFgd7PAmzy2T5QU8rMarvtnhhzlB8mv8eMVJ%2FuqvQRnkW%2Fd9aPCCiHyqiR1x1ZyG3%2FXqvca8dbWCr5vMg537euPBYrK3upXSTdOdkINdzvsmnFkbYueN%2FbPnw&X-Amz-Signature=95c8e1db81f9cc83d53da8db96e737b88f14d29263c6e5ec95f46b7b3a8f44c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBCS5BG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCmYNP5AtF3ldfAeT9VezFAHR7EMLzNefZRtONdv4zrdAIgNlYw5eAlm7ofe35agmf7Oz3TEggulNNBLKLan0xe1UIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMIGbhMQStwU2SWdFircA%2F3bqcIICtJ5Hkdo1W2uGsuctNd4O5gnk%2BNyXcUfd3R91GwKJZ29qEaQIdO7Q%2F%2FU%2BFNe8GMoMqqqIKO23nL21gDI1fuMbovmeCnV2hCUmaErhAkfmq7pCAl6PyJ7b11OkiUajtXMSbI3g7hcyVORa%2FNtlkAOzvlzfafHzHWRQSJyNxPu0wRQqoF%2BH7JovtGWHVHcKrsCBKlv%2Bb3qucwK50sbtA9zYHkTKMT0Ni%2BFdxy1FJTk0XD77Ke%2B2P6bVdWEoOyWZGZQ3v2%2BMpRVar8HNN0MFztTOJykf3%2BymQQVoIpuOdMob3Pyd9uelv6wuv6gCVK%2B4PJAju5ZzHsnUOxxGBp09heDpEVHPveXMvmHAqARRg0iZbIuiGn96AIjUUrViMlOhFzVaFtL8dcIiojcon%2B4%2BMABRozyz8po781d2iQbNz%2BZ9RLuZ1Mf7sVC%2Fnw%2FZOZNT71wd%2BXBa%2FpU2zPAlCTpFdmIbmug44pBMEna5M%2FuGyqvf960eIvq0zlR6I1hYnv3cgp4Wrk8G0aERN2ACDX6ZySCeNvBZgMBValO%2B0uUMhtuWycXy3T8P%2Fx5nNKAniTxqMdoUZQFA1aARrQgp4wmtGvzdbkXT0zZHHDHfUQb0Djd8eVFyOrW3W%2FmMMaj%2BsQGOqUBK%2FHy6RN4%2FpHkk2L594rQCHCVcL5mkDpI7EtMlXxg3oCToIEOIbduSG76qeNl4ONM6qU4uXGngQRde%2FJWw%2BEQzalGnDvp3getnkSMXEP1bgI5clFPOM2R8m%2BR%2BoZG94vTKQ3eGTrvm%2BGEiurge7AFy955d2aALe8mznzujflrEF6fEbjilWOlpoK6B8zPA89dC29ysH6hTg3TP%2BP%2FHbTXUwnHLjYR&X-Amz-Signature=48128cdfcf905ebf42fbbde139f43f12ecf5c222a6119a22db1158b05fd06761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJSGMDJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDgMTzyEx8MssPhsCmJI8tUkHPgqPWsHxitsGzl0vSiggIhALIYBX%2BOXu6T3ZIzy9eriKfzUmALJkqk2WFHwGWditrAKv8DCFMQABoMNjM3NDIzMTgzODA1IgwrmS5p66lYVBFWQ6Uq3AOCOhdfUFqv0Ja9g372M%2FaRyDz3wKrl%2Fz%2FnMhHrnmVuYh4jmDRKyNzpqsP2FctsNlqz16cJ2cMhJ4B%2BMVFuZhm9MyvoYQImN8R6k6q1WkArsNl3sCk%2BPJCTxppflFhFwXry4yRLplbpOAJEYOtRlOrwGKmHuZpo8Pr8xVa7I%2BPw1QqRx7GE4O9gbG9BFqR5NZCrZqbWPz%2FeLWH5KTzXkQtQy%2BVzpEB%2F6Y0lXbt6ANKqBPIayLCCKr0CLzZ0ODlltt%2Fn%2BMRYZ6V2jRmoSH5yrTlrgdZXNPRpmIIc7wZCUNzLuCF%2FMNR3rg4ht8eTlAfzbccb2nnsaWV2tEt4AdlNpWn3SNhyH080Stfj%2FJJa5SYhIPgBDU8dONCR5CvUPGxBj4dRJR78f5kqsFC%2BzTfmOG878qcZuJxkotkX0uGTrJgwz33SrWtOtLU9XW34Vs8yD0P%2FgUgxxOknGsZ5A54TksovSab9tG2F2B%2FbWJM7bQQUHagIjuTN%2BZB7NmfGRb5w96vhSCibDjAriHeef14hGyh%2FlS%2B4cMKL4kvgFsnEsVK0y9caVAwLgss06uYlUByEKb4cTzrSOOQjDSVn0OIPwBReqrG9tNSdC4Jmm%2BUNr%2BgIVf3LY6bo35HS2ZddCTCMo%2FrEBjqkAReF%2FCIOzgPb1U4JSfsKtdY2zLt7TdKegk6OlV1sN3wxTNtJV3YiUQmn5oShxz7RYLsp2eS4Q%2Fk4WL3FhDI%2BT1Eikefrt3lFpeAyO%2BymsqKKlOSKLGvJ%2FlP5%2FqjuIqD0zrQrgZW1LJByBA0lqC3hfbfZpjDhJr%2FQ4LPbGm2WvSBbab0BC9NYLAcnE97BvcBbGno5GP8FPmp9In8oLTUJIDUTEnia&X-Amz-Signature=863603e222ea95df9b59f70cc9a0df8b4981b7e0b5b78d14dc8b5c67301db5d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBCS5BG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCmYNP5AtF3ldfAeT9VezFAHR7EMLzNefZRtONdv4zrdAIgNlYw5eAlm7ofe35agmf7Oz3TEggulNNBLKLan0xe1UIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMIGbhMQStwU2SWdFircA%2F3bqcIICtJ5Hkdo1W2uGsuctNd4O5gnk%2BNyXcUfd3R91GwKJZ29qEaQIdO7Q%2F%2FU%2BFNe8GMoMqqqIKO23nL21gDI1fuMbovmeCnV2hCUmaErhAkfmq7pCAl6PyJ7b11OkiUajtXMSbI3g7hcyVORa%2FNtlkAOzvlzfafHzHWRQSJyNxPu0wRQqoF%2BH7JovtGWHVHcKrsCBKlv%2Bb3qucwK50sbtA9zYHkTKMT0Ni%2BFdxy1FJTk0XD77Ke%2B2P6bVdWEoOyWZGZQ3v2%2BMpRVar8HNN0MFztTOJykf3%2BymQQVoIpuOdMob3Pyd9uelv6wuv6gCVK%2B4PJAju5ZzHsnUOxxGBp09heDpEVHPveXMvmHAqARRg0iZbIuiGn96AIjUUrViMlOhFzVaFtL8dcIiojcon%2B4%2BMABRozyz8po781d2iQbNz%2BZ9RLuZ1Mf7sVC%2Fnw%2FZOZNT71wd%2BXBa%2FpU2zPAlCTpFdmIbmug44pBMEna5M%2FuGyqvf960eIvq0zlR6I1hYnv3cgp4Wrk8G0aERN2ACDX6ZySCeNvBZgMBValO%2B0uUMhtuWycXy3T8P%2Fx5nNKAniTxqMdoUZQFA1aARrQgp4wmtGvzdbkXT0zZHHDHfUQb0Djd8eVFyOrW3W%2FmMMaj%2BsQGOqUBK%2FHy6RN4%2FpHkk2L594rQCHCVcL5mkDpI7EtMlXxg3oCToIEOIbduSG76qeNl4ONM6qU4uXGngQRde%2FJWw%2BEQzalGnDvp3getnkSMXEP1bgI5clFPOM2R8m%2BR%2BoZG94vTKQ3eGTrvm%2BGEiurge7AFy955d2aALe8mznzujflrEF6fEbjilWOlpoK6B8zPA89dC29ysH6hTg3TP%2BP%2FHbTXUwnHLjYR&X-Amz-Signature=405c8c1aea2d60be23e7c6a5fc0107fdc31c197607cddb9d5a7f4f20b76a12cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OM37RAZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIG38M5Vlx7zSzjQ5rULwWFiSQLEcAusx%2BKJKePpa8dh7AiEAkBCB3olZdDASxmYAd5zXOckMtbeml4IJmb6I6tcS5Wwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDO6nrxQfTTyeNQblGSrcA0cWfnaCpfE2C14WVZI8n95mdqWW2cxeFwj1Nwau88HksFutB8xHDXye5rqMDx%2Fhh6Dk1uAako23hGJWwhpoIlShvpnY3F%2BX%2BcdeLvUGCNOCQ6Zv5YqtWhmRNGqiz5N0mg5X0rskbwY1f0Ub9u%2FwD7HBsxiImEbiAkAE8n3e%2BSOdW8cAyhDTuXwuAOTtpDobZK%2BtRzA3wIo5rJGvQCzIl5puB8rPh1OJhAJmBLTQ%2BJHK6HGlMakIuks5lfGG7%2Brci4kxxeCdjuOxf40DV4cEHbQ3p5%2BeYrMCVtbDppNYeof0m%2Bg8RjRQ%2FbeIriMVcLG81C9ymyU8d2MR9W%2FPsaFPKvoTwu6U14bEE8xWR0pUz5nubmIjj2TTf%2BLlvYYqiJ7e6vHGPsW4xmF6NZ6BcVZKHYfBatwOMXlAUHAGuVHS%2FOQpD9fuReydlYzIMlVgjixBgzKlKU5L1Oo8lhKUNA4KE6hAa9Z64s1ARxGartaty10Xniaomxd16b2rm9j3J04JB6MqdtdaAOhDIaVDseBO1NnGYuVpN0z2K8TXrEHjG7yYyiuAWJYl3goerZDFgPIMI3%2Fxz%2FguGANX0BTBblxwyYqNC9huC0wMTlhJhZTITwoz6LgmyrBYwNfGKJBzMImj%2BsQGOqUB5ltYx5Ci4%2FTZW8eq%2BeoB6keXsfodogXwZUfxk%2Fzrvr%2FcuqNjCbzC4kvIZyjLeNcfyQ89KAsWoozATBByNVzHcBC6fRMd9OeT9jQCRVgxhMcbM%2Bls%2FPE85QBAzcziv%2BaVEh44ZBfjLXW8jJKDQSYkoS3x28cQHBE%2BsGQOS0R1O9V%2BdFuhoaPuqi44DailleHo%2BQTCok6Cev%2BCM%2BySgMf53y8y2ogT&X-Amz-Signature=49d8b8d1bc5aef79bdec9ea48eff5169a53ab7804789dd99a84637f2dbf20bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBCS5BG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCmYNP5AtF3ldfAeT9VezFAHR7EMLzNefZRtONdv4zrdAIgNlYw5eAlm7ofe35agmf7Oz3TEggulNNBLKLan0xe1UIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMIGbhMQStwU2SWdFircA%2F3bqcIICtJ5Hkdo1W2uGsuctNd4O5gnk%2BNyXcUfd3R91GwKJZ29qEaQIdO7Q%2F%2FU%2BFNe8GMoMqqqIKO23nL21gDI1fuMbovmeCnV2hCUmaErhAkfmq7pCAl6PyJ7b11OkiUajtXMSbI3g7hcyVORa%2FNtlkAOzvlzfafHzHWRQSJyNxPu0wRQqoF%2BH7JovtGWHVHcKrsCBKlv%2Bb3qucwK50sbtA9zYHkTKMT0Ni%2BFdxy1FJTk0XD77Ke%2B2P6bVdWEoOyWZGZQ3v2%2BMpRVar8HNN0MFztTOJykf3%2BymQQVoIpuOdMob3Pyd9uelv6wuv6gCVK%2B4PJAju5ZzHsnUOxxGBp09heDpEVHPveXMvmHAqARRg0iZbIuiGn96AIjUUrViMlOhFzVaFtL8dcIiojcon%2B4%2BMABRozyz8po781d2iQbNz%2BZ9RLuZ1Mf7sVC%2Fnw%2FZOZNT71wd%2BXBa%2FpU2zPAlCTpFdmIbmug44pBMEna5M%2FuGyqvf960eIvq0zlR6I1hYnv3cgp4Wrk8G0aERN2ACDX6ZySCeNvBZgMBValO%2B0uUMhtuWycXy3T8P%2Fx5nNKAniTxqMdoUZQFA1aARrQgp4wmtGvzdbkXT0zZHHDHfUQb0Djd8eVFyOrW3W%2FmMMaj%2BsQGOqUBK%2FHy6RN4%2FpHkk2L594rQCHCVcL5mkDpI7EtMlXxg3oCToIEOIbduSG76qeNl4ONM6qU4uXGngQRde%2FJWw%2BEQzalGnDvp3getnkSMXEP1bgI5clFPOM2R8m%2BR%2BoZG94vTKQ3eGTrvm%2BGEiurge7AFy955d2aALe8mznzujflrEF6fEbjilWOlpoK6B8zPA89dC29ysH6hTg3TP%2BP%2FHbTXUwnHLjYR&X-Amz-Signature=57408b5fcf43ac9139951c3558a1754b50874cc82bc1e535edd05388bf0acad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7J4XI6M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCFttYwxLnMqc9dxX1S1L%2FkhTB3tYhazC6q6WqaCkR%2BVAIgXuxkFrns5cffEBa77bhPCMDjMTbJt7U3GhI2rnqyFTEq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDW2f6ZC6KZfhKQLfCrcA7%2Fh3Lo2pzERWFoCuWSmKfBZdc2k%2BFY1FOIIersQwBa4pzwerUfW8fGEpOXMrv1Lhs8sgqH4cf7Tq9C%2B4R2eHrmU9iWT9Ck6%2FC8ac0Iyy83mEnMT0IBrY3M2dbk2OaydBkuNuLX2QQ%2FBoEjaQMNAw0sKuLMhhBFRNV67alBu65bsKlmLp6sWTs7KAC7bpxZopuiIQR5blD8nMDc0HK017IFzF7WYWtn98pWluYFkqKycWotLdgynN%2Bi0pV7ueEmRpvuV%2Fsb8QGaTf%2BdD0lqey36Im0A0nBJZAVdovvl%2FbJ1I18dHTUDgYNyLlIxdz9l4r4aD8Kjkl3VgiPMJiFefY5exlIg6Fzs3gIjNdeD7BeQIoX9lApbwiAEuuhAobdXuCNaDRiN2yfaau7gvqsQCPqviLkaqAuuk0bop%2BRwKTaM0OkJacdPnYGhp3ifujbl111LPbFNluNY6HyMYl6gj331h%2F48SBHDYoQuqbVkfJNmx8xpMscDtlgGISkSMJwlUiZufs%2Fd5C01vvCBX5Ke9TVXIXQKR4V6jf%2FifB0raBO6uRyf0pob6LbFQdTfjJPD1GZM3LaT7kwojMQhbGyHNJkQyFHjFaSVPyoFfh8BMNmqBCRuFrIe8jMer%2FblLMPai%2BsQGOqUBcCDxiEsauf2F01REUYWIewEf8%2BD8vSNzN9qQRzdp70HbUQvHzBQBt%2BD5Qx3R8%2B06hoyFoV%2Bec%2Bmk7qWV4SgyBrZ5lym%2FbUuI0Veb4xBGdvK66YZWP2V8c9Lsi3J%2B7RamMTV7Nlz69qr28AlwQApLM61wkjN3re1eaknzEeHF3AbTIGXj%2Bs%2B8ndi5HtzSppEMXuP%2BZKKk1E%2FlBIZzC96b6tTQdwxw&X-Amz-Signature=fa28e08cd7dc032b0de702b8ba4561568d604bda78f3e0a8f722f0ce37d1c28e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBCS5BG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCmYNP5AtF3ldfAeT9VezFAHR7EMLzNefZRtONdv4zrdAIgNlYw5eAlm7ofe35agmf7Oz3TEggulNNBLKLan0xe1UIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMIGbhMQStwU2SWdFircA%2F3bqcIICtJ5Hkdo1W2uGsuctNd4O5gnk%2BNyXcUfd3R91GwKJZ29qEaQIdO7Q%2F%2FU%2BFNe8GMoMqqqIKO23nL21gDI1fuMbovmeCnV2hCUmaErhAkfmq7pCAl6PyJ7b11OkiUajtXMSbI3g7hcyVORa%2FNtlkAOzvlzfafHzHWRQSJyNxPu0wRQqoF%2BH7JovtGWHVHcKrsCBKlv%2Bb3qucwK50sbtA9zYHkTKMT0Ni%2BFdxy1FJTk0XD77Ke%2B2P6bVdWEoOyWZGZQ3v2%2BMpRVar8HNN0MFztTOJykf3%2BymQQVoIpuOdMob3Pyd9uelv6wuv6gCVK%2B4PJAju5ZzHsnUOxxGBp09heDpEVHPveXMvmHAqARRg0iZbIuiGn96AIjUUrViMlOhFzVaFtL8dcIiojcon%2B4%2BMABRozyz8po781d2iQbNz%2BZ9RLuZ1Mf7sVC%2Fnw%2FZOZNT71wd%2BXBa%2FpU2zPAlCTpFdmIbmug44pBMEna5M%2FuGyqvf960eIvq0zlR6I1hYnv3cgp4Wrk8G0aERN2ACDX6ZySCeNvBZgMBValO%2B0uUMhtuWycXy3T8P%2Fx5nNKAniTxqMdoUZQFA1aARrQgp4wmtGvzdbkXT0zZHHDHfUQb0Djd8eVFyOrW3W%2FmMMaj%2BsQGOqUBK%2FHy6RN4%2FpHkk2L594rQCHCVcL5mkDpI7EtMlXxg3oCToIEOIbduSG76qeNl4ONM6qU4uXGngQRde%2FJWw%2BEQzalGnDvp3getnkSMXEP1bgI5clFPOM2R8m%2BR%2BoZG94vTKQ3eGTrvm%2BGEiurge7AFy955d2aALe8mznzujflrEF6fEbjilWOlpoK6B8zPA89dC29ysH6hTg3TP%2BP%2FHbTXUwnHLjYR&X-Amz-Signature=a287498613097f29ee76417d71dc0f42cfbfb459f9cff33c7f9eb1290813f000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AOLTW3O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAxFkBkFUUKEecZ21NWUmDmzimYM00fbd7ehpL2XV8qFAiEAuBMety0Wi1kIUe4bY%2FvusVWp25b4WNjdqXaf%2BZqCpooq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDAIfpvqrM1EM%2FysxSyrcA9HTN%2F%2FKdND%2FjZXYtZ6ErDY%2FXdzoDueXWHEEUxEiWBONeEghc%2FtCuhNsothmdxzz5ETtcz3OsxMIAO5PDGsG7S6Q3a88X4bgow4dfzkVMmCfIbNGulYgOYLjcC8a3DolnkoL%2FaTKTnabwXCf04ORS2AmdAvhsHqpAvGCq3KzK1Eomms19Otf0HHdMtY%2FIRgqilntZz4x41UQRU84CtFER59yx7GGwGkQT6gMZoJaWDL%2B008YUcdl%2F%2Bf7oxTrZKaROqhqjamicMyLnARwJhY61CxcJLRcjST8RX6i9mrpkqfLWNHBZDS1uqrlq9J0yyj8s0QDDN3qNlcJ7J0PjwXgWqMzklsDR9k%2BJFo0mAgbw3%2F3evxNVocBBSgy1OTAb8QCXfxx85mJzF1zaYXlcj3bwkFgLST%2B6Fo0lJzbr56XMbxVjRw119I2wo2mD0Q7uXGBLvmadg2oyek1xoIAQynorgVaDpDlyt9j08BKGH1Js%2BAbUWiibuTIszO%2B%2FQ3E3UTT8diNjCyR4vxewDLBKGnEo9uxF9moGZOah1rAHdTHKjjru17XUqhRLEkTMYD55zAIsr0bVT9FwL%2FuwVwzCmZqvqDlizvQdcA9%2FLLwebjnq%2BE7H8CLHuO1OzV%2B%2BBkcMLej%2BsQGOqUB8WfzsrVvDnYDENOLZvjTY6UDGdjymO8wqk7hikXklCSOcGhQdvueJGIU2ykZe8%2B%2BQMSJfWNf6dh0d%2BvstmjyWVWekfTFztWyKVi%2FXYLsEMguuZgAKtA%2Bu%2F0NQOi200zHLTEnmcVohiuL7IwHGc4ZxklyiwvAX38NXFH4hsgIUpAGuluptqSQ8fr18cSYGMu9MHO27VG3GwNiO3uO4WLZXRxPURkf&X-Amz-Signature=f61ef52575d5388bb6277cb11b051cf2e1a4c63007448eabca296810b426f85d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ILXOPZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCa5VRYocH6TwezOa9WsGiLuxSHQXPvAOXomGgeaKEnGAIgQjGohqmzp8pZ%2FRwQkIUdN88510XzctZcOSVdVFYJOvEq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMFqHwtbLa%2F5lMVVuCrcA6bsKQNUvMJYSZ2mntOwk17RzNr0swUORb41O7zZYVT3cVS4kjyvdaAx8TkRGU30Ez4SVDd78VH8XaccObmfdhqRNkB8%2BPRzKgcpffU9JclUhnk3VjF%2FXmScCGe%2FC2f6Cxcbs8CmbZasG%2FXEOpA54xCVucoPM5hJEKaJCpZI5N99wREJAgzX1hJvbL24%2FEsMMrAhGKey7ikWdUaO%2BnocrYBskcJHHXR1Vh29O4SjZppo3IodMwA02xvdV%2BC6s6KjZu1H7BVnR2IGfr4AT9z%2FlItWI33Key8U1uVxFyVQFmh5oVywVLyHCA9pvjIhswxbpQGFXRnfjXm%2Ffy9idnzc25G%2FQmz6E8%2BKqyeVWfROe%2FSsJlAs5UE47xCAPSPAokaNdw6XendONhlT7MkeoqVipPq5N5tzpvlQW0seuqRyN1adKmmCtsJoneUw6b6ihewzt37odxKmAhsNcI5TlxYdOYT9vdAtkAfIkCcBrLQXNqm%2Fp0rUb4SgsUghD9OIgyRzGtCpkZEIS6G3m%2BnGrIIY8czXNLB2Yh3D8lqHVpkqMw7%2BgDpTi%2F5HGgjfQJ%2FV8wTdA2bCMUjiCs5AQEbvewhtZYb6P3M0zMC9BxpCco85eFAXGPcqqnkFJJ9CW8a0MIuj%2BsQGOqUBXHJTXO8NBGsFQkAeTD86IvfmIg5iEx2r6EOg%2BQuIO5U77Q6qR5p2DyLDi%2BPnDwhdmI7TxQjmJqSvwmvs6IR9tf0NiP8Ame85aDoyhGBlf66VmDqNQBk5BXDkB4Yoy2PzD2w7LhGMRIqAGuhfsKxPISve%2FrTj%2BH8Y%2FmJvZlsQRm0w6JvCKKx7k30ORBb%2BmBYSRA1fLp29AZ2P9D7iWBl8DB09fxIT&X-Amz-Signature=e69da861a506bac038f20981cb532240c360faee588583a89674a33a32946e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VHQIFNK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQC0ima6G%2BEgWNciIDsivZqLJAeqfy8WlpNzJlKPPPEPgwIgUfVsVk0Bf7WOZdhPycbvqNhKYoD8yX3NJWifvtMFG8Eq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGkkCoPm9b3bT8pO7CrcA88O7lqCxLyq2ItxyIkX1Ky46T%2Bz6HzK0%2FcE4E3AIzc2PEKhyyBcT3sRHtsAoCn%2BP4nGONvwHf824UjhvcFH2JEopjF6KMRbhwnnvyX2TrOs5CNZLu2SqzLZrcUgaKn%2FLiGkW%2BIETachjVMngNvtDJHqx8pvQq5WmTvPZO16tnCMpU%2B7YISORSDa4L3QYHXPRSONExaz%2BMLC0L7Y9WzjpiDOwwcZZURP%2FfzMJyIJWYNnHziZ2VRxHU5DE20lSoA%2BQBMmmEhxBuIYdgKdQfTEpaxUX62XWYfQ05S5y9dZbN0wlDD7oOKZqEp56sBlzPtfZUuVfukFfiFhEHhJyvhmh6AK%2BompkMUyLvSIoKWo6%2F58Z3mlTL8vY3XygcxuBvt1MPxtrR%2B2vR0GssFP%2BmTVFHT4sPxcfBjzd8ZP9LhFQDDoZ70P%2BCP8LZtINF%2Fwr%2FH9BGdDcE1noFMHlXFDE2fF66j0uYcOjhyGRXb94iVV5CwRBQ0UZrJNDBXEbJvQ74HZDbnGmUHhU1%2B8hYztE0LL2axX4WMP8NkDbTQcLNM5oQCjZEM5m%2BdSdOGrSnWobQoYMtmnrSHqIICBmwu6khsdW2r39BUnt%2ByMObQzoAwIxy8SseKJU6BWc4wWxiscMJ%2Bj%2BsQGOqUBdZXdrdAep%2Bvs7wUVss15%2FILs3z62khIJWgoZ50keuKHVl9U2ny8c1fAG2KKadtWLQM9TrftsPX0JFWCxwzqrrlFWY73jR8CsKm8MYc4ecP%2B8beoDCXIuczee95mh2VpcF5Ib4XZiOHekD5Cd3857J4K%2F6KKPmn4zeGJtR2fPyjA6LEB3f65SNTdFrOi8FL1PLTVaaQMuJWfASkP%2FSAnVLHbWQIcO&X-Amz-Signature=770b1a0a253489b2f4662202671974565a117e21fab67f2e863f7ee9a6545fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NGWALW2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDtaTnbCjEd%2Bqp%2FOyg%2BNKKi0mEKTJLQOYUm8lFvePCYuAIhALbZN9DGQp3Y3GfVpObVC2vGDsSJZEi5YpsN%2BafT1EvnKv8DCFMQABoMNjM3NDIzMTgzODA1IgxyegGl3CZnXjGdjGgq3APG2ZWj45Vx4PypLqawB6s1hgRjpzZCCo4DIIhnlM0%2BxjweXvd6tsivtr%2FqnA5RiKvM1EkPWoE68ml19p9HYy2QFJrkQExcHBlayGSDYyzRNCdsVktPDTF6DVbctMn%2BbN%2BcHfvt1dQpvpdQLiHSa2uGqkC5UGx2%2BJGPuQ36GMZNQoWK0qMkDKrRO161sdWAEOb%2FabTSNaLHH%2Bihn1xruagApghfIU%2FrUengbqg5SaciEWwf5A7V9m4MsHf3Jm2yjFMibfIsK8%2FGN%2F7p9xAN%2FTxaWSHV2LLq9DtPXeQ6iWg0OceLBO8uyBHRVGMGXmzX5ZjlSapEkNbmRCwVex5Zi59aF5u3hxcnv00INEoWKKHowEd%2B1Qf%2Bh0HRf9tql2tCQ1d8M36CHr6y%2FMCm44h57iICBrcMcimhTyZJD%2BQgqZ4doSe0hG0uOSjK7ZC5cKpDnquAYokVNMjxquo%2FHW4JhIkA0%2Bbwv0Swrgcu%2FT%2BI2INmxi4b5ZwJ9L%2FdUXw5%2B2jFpAYcSZBJu5bP5U9e9sLnjt1e4u5h2wtBtrK6zq11HzrjyigpdpFPdtLdnKhexeLLDv4sIH8z1nMQqCCpuy2f1GM8WUXAXaS2K9xJN7ofQuR%2BkzCe8q%2FfBxpc%2BhvKsDCqo%2FrEBjqkAQqWbFsNtsZ5cU8OCg0XE7aJmWMYaemlna7N7U8V8xg0TTIp0ap%2BrmRVbJEsoYho7qWM802sHsb8yZv1Tp%2BdTYIEuboHem7a4%2BFgonsvS8myTCmkfyCFDuufStjiK8U9SoZMeFU1Kufa28NOJXYKjT0Bt%2B8DH8ahUubmIuSMVisj6jXX9uNJMtcqF5u6uO4nvchgEsz1MPGzja5mtsoKpNQRjtf6&X-Amz-Signature=c6d1ae99af558819398bd391437b80c030f1e0952732c81bb1d32743bbb512d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5Y55TWP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCkutVVbcBQpYlLgXhd950uJiXekXyvD33NxqbIF4GQmwIhAIrEMxz%2F3Z5i3S1JaGEnFqV3elNTySaweTiqRt8ENmUfKv8DCFMQABoMNjM3NDIzMTgzODA1Igzgrkk%2B9XSDxGk53nkq3APOK8rmBnQOvjDqAzd2ob2wC5kriBnwrRJfFn8AkSUT4JkH3HGNzeCPw2f%2B4eRCxlmGqHqjwbbaAetlLqhFw6j8y1QzXjTWihhDgwd%2FeLk7u%2FvmYlfvP8qaosvzDFN9uifKqv2Ufb83ZX13pk4o3qmup7ovwMSktAu6Uc8TE7hPtP9l8q4dEvhtuRxSMYZyGXAytRDf78ww0AH26AVspYdM4l2qd75aXKXTv%2BNgiqR4pKkXth8GmXzbhgI7Qbyz%2FoiYBNqKWiRwmIQT%2BPdmzbQiP2zPOzGKNeKMRMl1Z62H6OEBxCnMzppkKdnxwU7WEUjnXzSul8ldRaeeIbQHO1p1NfQp1BYgb%2BrhWWEz3wlWW51wpBOTEG44OS7x%2BEDOnFVebnd3pt7HWbB8JY3125EyReayrOCU%2FNu6d%2FArNBYkrV4r69m7vorW%2BU86Qy%2BQlbhdkcVskrKnr4%2FhQ6nPkwotb9fnvzKi61HTu0J8zZJIUPLtrFfyzTxkvgo9mIaIO4pJUuOh8U2eFMPPo3OSh9GW8jx1XiC0LSXHfGVAjpKEfJIeI0jKh3SUdjmafxDbvnNxEdwUlhTYOpq3Xgtn5Pnw5SMnOjMQrcX7%2F8TiRhgUGELOLg5t4JKryc0JrjCMo%2FrEBjqkAcTosrBD4VcVcsulpfqw%2B4td2O6V%2B8DPtACkwxZDmV774YcoLvQwUuy1o%2FwvExxdrA9OH0m9q137AVOTOqvEM86wh%2FDlJEgHiawdvtICLYVCMoVrty2iCsX%2Fgu8jQfTXz9SmtxBrurdOzwBanMghFDnF0zzG%2Fps5xoNJwPjy7DAzdCcdhs9%2FZyhZLjW4fBI37SWKi%2B0hMQHSAtLC0BeUC3ZJBC0P&X-Amz-Signature=3e380be1bdf3c7f779f40318b14637ddcefa2cf6dbac87f33fe6d9cc9f2411d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBCS5BG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCmYNP5AtF3ldfAeT9VezFAHR7EMLzNefZRtONdv4zrdAIgNlYw5eAlm7ofe35agmf7Oz3TEggulNNBLKLan0xe1UIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMIGbhMQStwU2SWdFircA%2F3bqcIICtJ5Hkdo1W2uGsuctNd4O5gnk%2BNyXcUfd3R91GwKJZ29qEaQIdO7Q%2F%2FU%2BFNe8GMoMqqqIKO23nL21gDI1fuMbovmeCnV2hCUmaErhAkfmq7pCAl6PyJ7b11OkiUajtXMSbI3g7hcyVORa%2FNtlkAOzvlzfafHzHWRQSJyNxPu0wRQqoF%2BH7JovtGWHVHcKrsCBKlv%2Bb3qucwK50sbtA9zYHkTKMT0Ni%2BFdxy1FJTk0XD77Ke%2B2P6bVdWEoOyWZGZQ3v2%2BMpRVar8HNN0MFztTOJykf3%2BymQQVoIpuOdMob3Pyd9uelv6wuv6gCVK%2B4PJAju5ZzHsnUOxxGBp09heDpEVHPveXMvmHAqARRg0iZbIuiGn96AIjUUrViMlOhFzVaFtL8dcIiojcon%2B4%2BMABRozyz8po781d2iQbNz%2BZ9RLuZ1Mf7sVC%2Fnw%2FZOZNT71wd%2BXBa%2FpU2zPAlCTpFdmIbmug44pBMEna5M%2FuGyqvf960eIvq0zlR6I1hYnv3cgp4Wrk8G0aERN2ACDX6ZySCeNvBZgMBValO%2B0uUMhtuWycXy3T8P%2Fx5nNKAniTxqMdoUZQFA1aARrQgp4wmtGvzdbkXT0zZHHDHfUQb0Djd8eVFyOrW3W%2FmMMaj%2BsQGOqUBK%2FHy6RN4%2FpHkk2L594rQCHCVcL5mkDpI7EtMlXxg3oCToIEOIbduSG76qeNl4ONM6qU4uXGngQRde%2FJWw%2BEQzalGnDvp3getnkSMXEP1bgI5clFPOM2R8m%2BR%2BoZG94vTKQ3eGTrvm%2BGEiurge7AFy955d2aALe8mznzujflrEF6fEbjilWOlpoK6B8zPA89dC29ysH6hTg3TP%2BP%2FHbTXUwnHLjYR&X-Amz-Signature=38ece98ef5300fc2e8980f092d22aa7c23089399560b8a8528375d951b613d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBCS5BG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCmYNP5AtF3ldfAeT9VezFAHR7EMLzNefZRtONdv4zrdAIgNlYw5eAlm7ofe35agmf7Oz3TEggulNNBLKLan0xe1UIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMIGbhMQStwU2SWdFircA%2F3bqcIICtJ5Hkdo1W2uGsuctNd4O5gnk%2BNyXcUfd3R91GwKJZ29qEaQIdO7Q%2F%2FU%2BFNe8GMoMqqqIKO23nL21gDI1fuMbovmeCnV2hCUmaErhAkfmq7pCAl6PyJ7b11OkiUajtXMSbI3g7hcyVORa%2FNtlkAOzvlzfafHzHWRQSJyNxPu0wRQqoF%2BH7JovtGWHVHcKrsCBKlv%2Bb3qucwK50sbtA9zYHkTKMT0Ni%2BFdxy1FJTk0XD77Ke%2B2P6bVdWEoOyWZGZQ3v2%2BMpRVar8HNN0MFztTOJykf3%2BymQQVoIpuOdMob3Pyd9uelv6wuv6gCVK%2B4PJAju5ZzHsnUOxxGBp09heDpEVHPveXMvmHAqARRg0iZbIuiGn96AIjUUrViMlOhFzVaFtL8dcIiojcon%2B4%2BMABRozyz8po781d2iQbNz%2BZ9RLuZ1Mf7sVC%2Fnw%2FZOZNT71wd%2BXBa%2FpU2zPAlCTpFdmIbmug44pBMEna5M%2FuGyqvf960eIvq0zlR6I1hYnv3cgp4Wrk8G0aERN2ACDX6ZySCeNvBZgMBValO%2B0uUMhtuWycXy3T8P%2Fx5nNKAniTxqMdoUZQFA1aARrQgp4wmtGvzdbkXT0zZHHDHfUQb0Djd8eVFyOrW3W%2FmMMaj%2BsQGOqUBK%2FHy6RN4%2FpHkk2L594rQCHCVcL5mkDpI7EtMlXxg3oCToIEOIbduSG76qeNl4ONM6qU4uXGngQRde%2FJWw%2BEQzalGnDvp3getnkSMXEP1bgI5clFPOM2R8m%2BR%2BoZG94vTKQ3eGTrvm%2BGEiurge7AFy955d2aALe8mznzujflrEF6fEbjilWOlpoK6B8zPA89dC29ysH6hTg3TP%2BP%2FHbTXUwnHLjYR&X-Amz-Signature=4ac5b7899a005052e86ef27e14913dd1f80fdece74ceb2a1c5cfc6d3a4e32147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XV4ICBB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDbrUbvLiubvce%2BgHtNB%2BfxK7zOvW6ynXreaald4K83RQIgHubNGLDQRzu9lx8i7njACT%2BY%2BKdV506VZ3Eejny%2BJVYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOjeSvqZTHbawjOK4ircAznlqTF7h6S7PCBo997FZYBvQvjAJeWeR0kiNHNJfYPn01iFRuzLvCa6GhfQ9zOD6bVMGggVBVWrC7Yl7peQy8m9s6Wud9dWJ6cEnfLC4yxnVN%2BO0oL%2FCtkNbT6Fj5Rg%2FNvgoWg%2FXeySGE8ZRvLbf1Vwx6Um%2FYlJ%2B1wNglHicpPa6wu8QfgXxUf%2Bz4ZsQMs2N%2Be4o6fXCYBjf8qtN05KHKniULYT3nesh40kGr6%2FPnV%2FL0DqG8N7gf0VLvR3FmjAWArtVLtoq%2BgSJ2srR3MnlkWaev4Vol7bzRANw%2Bhtx5du%2FvQAycARQKqQjR06yqLeUQzmVwCA5o4pgWX2VsaDn%2Fr5pBdKE%2BlL0SZzCBcUc%2B%2FkM8AGzFln1c1mOtFOiGzVGyzrXyBKf%2FF8wsCAX7%2BtzNH2%2Ftse24lGCiw%2BF%2BuGkDplm99HW8voMk6sHlREDMaPudZqQ1a6cT0HAecaNYhh%2BCt%2BqrGeumrmz8%2BJu0VofKzFE9Of7l%2FT4G%2BPirD0f%2F5f%2B0GBtGJ1RdWArq2J6PfvaZ3fBijdWaRP75vKeye78QFFm%2BSZltHUUiJk403cge6aD3fib3gOxGbk1OXHiB3OsjdBEPRveqR9RnHmupH578NRWDxRAyE2sh9hLZUDMICj%2BsQGOqUBl2aHCHwNq1PA%2BM0Gtlw%2FliwlID8qyoBbmyKw2UhfJz4G1UwIp5ilwEGZ3hF0op1LKNf51uzzK%2Fs6KuCMFdCmX%2B%2FCnRnzic2N%2B2%2FGlIB9WuljBnUBT8Yg75eDxMG%2Byx%2BA80cBumKxksIix5P%2BVF4B9wNlHzhdhIZJFVuI5pkZqPHF7TTxsH1lzVtw7kvJ1QGqqbX56zIeSCAEwrf2mHIUurTBoaX2&X-Amz-Signature=e9ee5864d6c3482928ba38fa068f7b9373c8a7d84e6fd249923082bb5923c7de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XV4ICBB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDbrUbvLiubvce%2BgHtNB%2BfxK7zOvW6ynXreaald4K83RQIgHubNGLDQRzu9lx8i7njACT%2BY%2BKdV506VZ3Eejny%2BJVYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOjeSvqZTHbawjOK4ircAznlqTF7h6S7PCBo997FZYBvQvjAJeWeR0kiNHNJfYPn01iFRuzLvCa6GhfQ9zOD6bVMGggVBVWrC7Yl7peQy8m9s6Wud9dWJ6cEnfLC4yxnVN%2BO0oL%2FCtkNbT6Fj5Rg%2FNvgoWg%2FXeySGE8ZRvLbf1Vwx6Um%2FYlJ%2B1wNglHicpPa6wu8QfgXxUf%2Bz4ZsQMs2N%2Be4o6fXCYBjf8qtN05KHKniULYT3nesh40kGr6%2FPnV%2FL0DqG8N7gf0VLvR3FmjAWArtVLtoq%2BgSJ2srR3MnlkWaev4Vol7bzRANw%2Bhtx5du%2FvQAycARQKqQjR06yqLeUQzmVwCA5o4pgWX2VsaDn%2Fr5pBdKE%2BlL0SZzCBcUc%2B%2FkM8AGzFln1c1mOtFOiGzVGyzrXyBKf%2FF8wsCAX7%2BtzNH2%2Ftse24lGCiw%2BF%2BuGkDplm99HW8voMk6sHlREDMaPudZqQ1a6cT0HAecaNYhh%2BCt%2BqrGeumrmz8%2BJu0VofKzFE9Of7l%2FT4G%2BPirD0f%2F5f%2B0GBtGJ1RdWArq2J6PfvaZ3fBijdWaRP75vKeye78QFFm%2BSZltHUUiJk403cge6aD3fib3gOxGbk1OXHiB3OsjdBEPRveqR9RnHmupH578NRWDxRAyE2sh9hLZUDMICj%2BsQGOqUBl2aHCHwNq1PA%2BM0Gtlw%2FliwlID8qyoBbmyKw2UhfJz4G1UwIp5ilwEGZ3hF0op1LKNf51uzzK%2Fs6KuCMFdCmX%2B%2FCnRnzic2N%2B2%2FGlIB9WuljBnUBT8Yg75eDxMG%2Byx%2BA80cBumKxksIix5P%2BVF4B9wNlHzhdhIZJFVuI5pkZqPHF7TTxsH1lzVtw7kvJ1QGqqbX56zIeSCAEwrf2mHIUurTBoaX2&X-Amz-Signature=f506993a02963900b372f99f875287da376877096f3b73e03b5c8f038fa222ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XV4ICBB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDbrUbvLiubvce%2BgHtNB%2BfxK7zOvW6ynXreaald4K83RQIgHubNGLDQRzu9lx8i7njACT%2BY%2BKdV506VZ3Eejny%2BJVYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOjeSvqZTHbawjOK4ircAznlqTF7h6S7PCBo997FZYBvQvjAJeWeR0kiNHNJfYPn01iFRuzLvCa6GhfQ9zOD6bVMGggVBVWrC7Yl7peQy8m9s6Wud9dWJ6cEnfLC4yxnVN%2BO0oL%2FCtkNbT6Fj5Rg%2FNvgoWg%2FXeySGE8ZRvLbf1Vwx6Um%2FYlJ%2B1wNglHicpPa6wu8QfgXxUf%2Bz4ZsQMs2N%2Be4o6fXCYBjf8qtN05KHKniULYT3nesh40kGr6%2FPnV%2FL0DqG8N7gf0VLvR3FmjAWArtVLtoq%2BgSJ2srR3MnlkWaev4Vol7bzRANw%2Bhtx5du%2FvQAycARQKqQjR06yqLeUQzmVwCA5o4pgWX2VsaDn%2Fr5pBdKE%2BlL0SZzCBcUc%2B%2FkM8AGzFln1c1mOtFOiGzVGyzrXyBKf%2FF8wsCAX7%2BtzNH2%2Ftse24lGCiw%2BF%2BuGkDplm99HW8voMk6sHlREDMaPudZqQ1a6cT0HAecaNYhh%2BCt%2BqrGeumrmz8%2BJu0VofKzFE9Of7l%2FT4G%2BPirD0f%2F5f%2B0GBtGJ1RdWArq2J6PfvaZ3fBijdWaRP75vKeye78QFFm%2BSZltHUUiJk403cge6aD3fib3gOxGbk1OXHiB3OsjdBEPRveqR9RnHmupH578NRWDxRAyE2sh9hLZUDMICj%2BsQGOqUBl2aHCHwNq1PA%2BM0Gtlw%2FliwlID8qyoBbmyKw2UhfJz4G1UwIp5ilwEGZ3hF0op1LKNf51uzzK%2Fs6KuCMFdCmX%2B%2FCnRnzic2N%2B2%2FGlIB9WuljBnUBT8Yg75eDxMG%2Byx%2BA80cBumKxksIix5P%2BVF4B9wNlHzhdhIZJFVuI5pkZqPHF7TTxsH1lzVtw7kvJ1QGqqbX56zIeSCAEwrf2mHIUurTBoaX2&X-Amz-Signature=d83b50de36bc668418d328639dc5849a3c5ae12f4434ea57355124308ebf73cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XV4ICBB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDbrUbvLiubvce%2BgHtNB%2BfxK7zOvW6ynXreaald4K83RQIgHubNGLDQRzu9lx8i7njACT%2BY%2BKdV506VZ3Eejny%2BJVYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOjeSvqZTHbawjOK4ircAznlqTF7h6S7PCBo997FZYBvQvjAJeWeR0kiNHNJfYPn01iFRuzLvCa6GhfQ9zOD6bVMGggVBVWrC7Yl7peQy8m9s6Wud9dWJ6cEnfLC4yxnVN%2BO0oL%2FCtkNbT6Fj5Rg%2FNvgoWg%2FXeySGE8ZRvLbf1Vwx6Um%2FYlJ%2B1wNglHicpPa6wu8QfgXxUf%2Bz4ZsQMs2N%2Be4o6fXCYBjf8qtN05KHKniULYT3nesh40kGr6%2FPnV%2FL0DqG8N7gf0VLvR3FmjAWArtVLtoq%2BgSJ2srR3MnlkWaev4Vol7bzRANw%2Bhtx5du%2FvQAycARQKqQjR06yqLeUQzmVwCA5o4pgWX2VsaDn%2Fr5pBdKE%2BlL0SZzCBcUc%2B%2FkM8AGzFln1c1mOtFOiGzVGyzrXyBKf%2FF8wsCAX7%2BtzNH2%2Ftse24lGCiw%2BF%2BuGkDplm99HW8voMk6sHlREDMaPudZqQ1a6cT0HAecaNYhh%2BCt%2BqrGeumrmz8%2BJu0VofKzFE9Of7l%2FT4G%2BPirD0f%2F5f%2B0GBtGJ1RdWArq2J6PfvaZ3fBijdWaRP75vKeye78QFFm%2BSZltHUUiJk403cge6aD3fib3gOxGbk1OXHiB3OsjdBEPRveqR9RnHmupH578NRWDxRAyE2sh9hLZUDMICj%2BsQGOqUBl2aHCHwNq1PA%2BM0Gtlw%2FliwlID8qyoBbmyKw2UhfJz4G1UwIp5ilwEGZ3hF0op1LKNf51uzzK%2Fs6KuCMFdCmX%2B%2FCnRnzic2N%2B2%2FGlIB9WuljBnUBT8Yg75eDxMG%2Byx%2BA80cBumKxksIix5P%2BVF4B9wNlHzhdhIZJFVuI5pkZqPHF7TTxsH1lzVtw7kvJ1QGqqbX56zIeSCAEwrf2mHIUurTBoaX2&X-Amz-Signature=325e4671c600407b3e47b230f631cf7a727678d8db101f76d6d9995cb41054a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XV4ICBB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDbrUbvLiubvce%2BgHtNB%2BfxK7zOvW6ynXreaald4K83RQIgHubNGLDQRzu9lx8i7njACT%2BY%2BKdV506VZ3Eejny%2BJVYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOjeSvqZTHbawjOK4ircAznlqTF7h6S7PCBo997FZYBvQvjAJeWeR0kiNHNJfYPn01iFRuzLvCa6GhfQ9zOD6bVMGggVBVWrC7Yl7peQy8m9s6Wud9dWJ6cEnfLC4yxnVN%2BO0oL%2FCtkNbT6Fj5Rg%2FNvgoWg%2FXeySGE8ZRvLbf1Vwx6Um%2FYlJ%2B1wNglHicpPa6wu8QfgXxUf%2Bz4ZsQMs2N%2Be4o6fXCYBjf8qtN05KHKniULYT3nesh40kGr6%2FPnV%2FL0DqG8N7gf0VLvR3FmjAWArtVLtoq%2BgSJ2srR3MnlkWaev4Vol7bzRANw%2Bhtx5du%2FvQAycARQKqQjR06yqLeUQzmVwCA5o4pgWX2VsaDn%2Fr5pBdKE%2BlL0SZzCBcUc%2B%2FkM8AGzFln1c1mOtFOiGzVGyzrXyBKf%2FF8wsCAX7%2BtzNH2%2Ftse24lGCiw%2BF%2BuGkDplm99HW8voMk6sHlREDMaPudZqQ1a6cT0HAecaNYhh%2BCt%2BqrGeumrmz8%2BJu0VofKzFE9Of7l%2FT4G%2BPirD0f%2F5f%2B0GBtGJ1RdWArq2J6PfvaZ3fBijdWaRP75vKeye78QFFm%2BSZltHUUiJk403cge6aD3fib3gOxGbk1OXHiB3OsjdBEPRveqR9RnHmupH578NRWDxRAyE2sh9hLZUDMICj%2BsQGOqUBl2aHCHwNq1PA%2BM0Gtlw%2FliwlID8qyoBbmyKw2UhfJz4G1UwIp5ilwEGZ3hF0op1LKNf51uzzK%2Fs6KuCMFdCmX%2B%2FCnRnzic2N%2B2%2FGlIB9WuljBnUBT8Yg75eDxMG%2Byx%2BA80cBumKxksIix5P%2BVF4B9wNlHzhdhIZJFVuI5pkZqPHF7TTxsH1lzVtw7kvJ1QGqqbX56zIeSCAEwrf2mHIUurTBoaX2&X-Amz-Signature=cfe5fea3a2b70923da95f5a037358cea8360c16ec17e15bc853ec21f2c5a1084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XV4ICBB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDbrUbvLiubvce%2BgHtNB%2BfxK7zOvW6ynXreaald4K83RQIgHubNGLDQRzu9lx8i7njACT%2BY%2BKdV506VZ3Eejny%2BJVYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOjeSvqZTHbawjOK4ircAznlqTF7h6S7PCBo997FZYBvQvjAJeWeR0kiNHNJfYPn01iFRuzLvCa6GhfQ9zOD6bVMGggVBVWrC7Yl7peQy8m9s6Wud9dWJ6cEnfLC4yxnVN%2BO0oL%2FCtkNbT6Fj5Rg%2FNvgoWg%2FXeySGE8ZRvLbf1Vwx6Um%2FYlJ%2B1wNglHicpPa6wu8QfgXxUf%2Bz4ZsQMs2N%2Be4o6fXCYBjf8qtN05KHKniULYT3nesh40kGr6%2FPnV%2FL0DqG8N7gf0VLvR3FmjAWArtVLtoq%2BgSJ2srR3MnlkWaev4Vol7bzRANw%2Bhtx5du%2FvQAycARQKqQjR06yqLeUQzmVwCA5o4pgWX2VsaDn%2Fr5pBdKE%2BlL0SZzCBcUc%2B%2FkM8AGzFln1c1mOtFOiGzVGyzrXyBKf%2FF8wsCAX7%2BtzNH2%2Ftse24lGCiw%2BF%2BuGkDplm99HW8voMk6sHlREDMaPudZqQ1a6cT0HAecaNYhh%2BCt%2BqrGeumrmz8%2BJu0VofKzFE9Of7l%2FT4G%2BPirD0f%2F5f%2B0GBtGJ1RdWArq2J6PfvaZ3fBijdWaRP75vKeye78QFFm%2BSZltHUUiJk403cge6aD3fib3gOxGbk1OXHiB3OsjdBEPRveqR9RnHmupH578NRWDxRAyE2sh9hLZUDMICj%2BsQGOqUBl2aHCHwNq1PA%2BM0Gtlw%2FliwlID8qyoBbmyKw2UhfJz4G1UwIp5ilwEGZ3hF0op1LKNf51uzzK%2Fs6KuCMFdCmX%2B%2FCnRnzic2N%2B2%2FGlIB9WuljBnUBT8Yg75eDxMG%2Byx%2BA80cBumKxksIix5P%2BVF4B9wNlHzhdhIZJFVuI5pkZqPHF7TTxsH1lzVtw7kvJ1QGqqbX56zIeSCAEwrf2mHIUurTBoaX2&X-Amz-Signature=6d408ee27394f2b949faca36d12dafb56e292ce8ce3fa99e1e3a8a75c617f127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XV4ICBB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDbrUbvLiubvce%2BgHtNB%2BfxK7zOvW6ynXreaald4K83RQIgHubNGLDQRzu9lx8i7njACT%2BY%2BKdV506VZ3Eejny%2BJVYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOjeSvqZTHbawjOK4ircAznlqTF7h6S7PCBo997FZYBvQvjAJeWeR0kiNHNJfYPn01iFRuzLvCa6GhfQ9zOD6bVMGggVBVWrC7Yl7peQy8m9s6Wud9dWJ6cEnfLC4yxnVN%2BO0oL%2FCtkNbT6Fj5Rg%2FNvgoWg%2FXeySGE8ZRvLbf1Vwx6Um%2FYlJ%2B1wNglHicpPa6wu8QfgXxUf%2Bz4ZsQMs2N%2Be4o6fXCYBjf8qtN05KHKniULYT3nesh40kGr6%2FPnV%2FL0DqG8N7gf0VLvR3FmjAWArtVLtoq%2BgSJ2srR3MnlkWaev4Vol7bzRANw%2Bhtx5du%2FvQAycARQKqQjR06yqLeUQzmVwCA5o4pgWX2VsaDn%2Fr5pBdKE%2BlL0SZzCBcUc%2B%2FkM8AGzFln1c1mOtFOiGzVGyzrXyBKf%2FF8wsCAX7%2BtzNH2%2Ftse24lGCiw%2BF%2BuGkDplm99HW8voMk6sHlREDMaPudZqQ1a6cT0HAecaNYhh%2BCt%2BqrGeumrmz8%2BJu0VofKzFE9Of7l%2FT4G%2BPirD0f%2F5f%2B0GBtGJ1RdWArq2J6PfvaZ3fBijdWaRP75vKeye78QFFm%2BSZltHUUiJk403cge6aD3fib3gOxGbk1OXHiB3OsjdBEPRveqR9RnHmupH578NRWDxRAyE2sh9hLZUDMICj%2BsQGOqUBl2aHCHwNq1PA%2BM0Gtlw%2FliwlID8qyoBbmyKw2UhfJz4G1UwIp5ilwEGZ3hF0op1LKNf51uzzK%2Fs6KuCMFdCmX%2B%2FCnRnzic2N%2B2%2FGlIB9WuljBnUBT8Yg75eDxMG%2Byx%2BA80cBumKxksIix5P%2BVF4B9wNlHzhdhIZJFVuI5pkZqPHF7TTxsH1lzVtw7kvJ1QGqqbX56zIeSCAEwrf2mHIUurTBoaX2&X-Amz-Signature=d83b50de36bc668418d328639dc5849a3c5ae12f4434ea57355124308ebf73cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XV4ICBB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDbrUbvLiubvce%2BgHtNB%2BfxK7zOvW6ynXreaald4K83RQIgHubNGLDQRzu9lx8i7njACT%2BY%2BKdV506VZ3Eejny%2BJVYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOjeSvqZTHbawjOK4ircAznlqTF7h6S7PCBo997FZYBvQvjAJeWeR0kiNHNJfYPn01iFRuzLvCa6GhfQ9zOD6bVMGggVBVWrC7Yl7peQy8m9s6Wud9dWJ6cEnfLC4yxnVN%2BO0oL%2FCtkNbT6Fj5Rg%2FNvgoWg%2FXeySGE8ZRvLbf1Vwx6Um%2FYlJ%2B1wNglHicpPa6wu8QfgXxUf%2Bz4ZsQMs2N%2Be4o6fXCYBjf8qtN05KHKniULYT3nesh40kGr6%2FPnV%2FL0DqG8N7gf0VLvR3FmjAWArtVLtoq%2BgSJ2srR3MnlkWaev4Vol7bzRANw%2Bhtx5du%2FvQAycARQKqQjR06yqLeUQzmVwCA5o4pgWX2VsaDn%2Fr5pBdKE%2BlL0SZzCBcUc%2B%2FkM8AGzFln1c1mOtFOiGzVGyzrXyBKf%2FF8wsCAX7%2BtzNH2%2Ftse24lGCiw%2BF%2BuGkDplm99HW8voMk6sHlREDMaPudZqQ1a6cT0HAecaNYhh%2BCt%2BqrGeumrmz8%2BJu0VofKzFE9Of7l%2FT4G%2BPirD0f%2F5f%2B0GBtGJ1RdWArq2J6PfvaZ3fBijdWaRP75vKeye78QFFm%2BSZltHUUiJk403cge6aD3fib3gOxGbk1OXHiB3OsjdBEPRveqR9RnHmupH578NRWDxRAyE2sh9hLZUDMICj%2BsQGOqUBl2aHCHwNq1PA%2BM0Gtlw%2FliwlID8qyoBbmyKw2UhfJz4G1UwIp5ilwEGZ3hF0op1LKNf51uzzK%2Fs6KuCMFdCmX%2B%2FCnRnzic2N%2B2%2FGlIB9WuljBnUBT8Yg75eDxMG%2Byx%2BA80cBumKxksIix5P%2BVF4B9wNlHzhdhIZJFVuI5pkZqPHF7TTxsH1lzVtw7kvJ1QGqqbX56zIeSCAEwrf2mHIUurTBoaX2&X-Amz-Signature=9e13d9fb2f98a805caf24161625b57cb1a6c281be1199200d4e8b723a8a11451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XV4ICBB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDbrUbvLiubvce%2BgHtNB%2BfxK7zOvW6ynXreaald4K83RQIgHubNGLDQRzu9lx8i7njACT%2BY%2BKdV506VZ3Eejny%2BJVYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOjeSvqZTHbawjOK4ircAznlqTF7h6S7PCBo997FZYBvQvjAJeWeR0kiNHNJfYPn01iFRuzLvCa6GhfQ9zOD6bVMGggVBVWrC7Yl7peQy8m9s6Wud9dWJ6cEnfLC4yxnVN%2BO0oL%2FCtkNbT6Fj5Rg%2FNvgoWg%2FXeySGE8ZRvLbf1Vwx6Um%2FYlJ%2B1wNglHicpPa6wu8QfgXxUf%2Bz4ZsQMs2N%2Be4o6fXCYBjf8qtN05KHKniULYT3nesh40kGr6%2FPnV%2FL0DqG8N7gf0VLvR3FmjAWArtVLtoq%2BgSJ2srR3MnlkWaev4Vol7bzRANw%2Bhtx5du%2FvQAycARQKqQjR06yqLeUQzmVwCA5o4pgWX2VsaDn%2Fr5pBdKE%2BlL0SZzCBcUc%2B%2FkM8AGzFln1c1mOtFOiGzVGyzrXyBKf%2FF8wsCAX7%2BtzNH2%2Ftse24lGCiw%2BF%2BuGkDplm99HW8voMk6sHlREDMaPudZqQ1a6cT0HAecaNYhh%2BCt%2BqrGeumrmz8%2BJu0VofKzFE9Of7l%2FT4G%2BPirD0f%2F5f%2B0GBtGJ1RdWArq2J6PfvaZ3fBijdWaRP75vKeye78QFFm%2BSZltHUUiJk403cge6aD3fib3gOxGbk1OXHiB3OsjdBEPRveqR9RnHmupH578NRWDxRAyE2sh9hLZUDMICj%2BsQGOqUBl2aHCHwNq1PA%2BM0Gtlw%2FliwlID8qyoBbmyKw2UhfJz4G1UwIp5ilwEGZ3hF0op1LKNf51uzzK%2Fs6KuCMFdCmX%2B%2FCnRnzic2N%2B2%2FGlIB9WuljBnUBT8Yg75eDxMG%2Byx%2BA80cBumKxksIix5P%2BVF4B9wNlHzhdhIZJFVuI5pkZqPHF7TTxsH1lzVtw7kvJ1QGqqbX56zIeSCAEwrf2mHIUurTBoaX2&X-Amz-Signature=10387a3e8d6defb63d8c7103b17c28a2945c286dbad944545621ab5a656c011c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XV4ICBB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDbrUbvLiubvce%2BgHtNB%2BfxK7zOvW6ynXreaald4K83RQIgHubNGLDQRzu9lx8i7njACT%2BY%2BKdV506VZ3Eejny%2BJVYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOjeSvqZTHbawjOK4ircAznlqTF7h6S7PCBo997FZYBvQvjAJeWeR0kiNHNJfYPn01iFRuzLvCa6GhfQ9zOD6bVMGggVBVWrC7Yl7peQy8m9s6Wud9dWJ6cEnfLC4yxnVN%2BO0oL%2FCtkNbT6Fj5Rg%2FNvgoWg%2FXeySGE8ZRvLbf1Vwx6Um%2FYlJ%2B1wNglHicpPa6wu8QfgXxUf%2Bz4ZsQMs2N%2Be4o6fXCYBjf8qtN05KHKniULYT3nesh40kGr6%2FPnV%2FL0DqG8N7gf0VLvR3FmjAWArtVLtoq%2BgSJ2srR3MnlkWaev4Vol7bzRANw%2Bhtx5du%2FvQAycARQKqQjR06yqLeUQzmVwCA5o4pgWX2VsaDn%2Fr5pBdKE%2BlL0SZzCBcUc%2B%2FkM8AGzFln1c1mOtFOiGzVGyzrXyBKf%2FF8wsCAX7%2BtzNH2%2Ftse24lGCiw%2BF%2BuGkDplm99HW8voMk6sHlREDMaPudZqQ1a6cT0HAecaNYhh%2BCt%2BqrGeumrmz8%2BJu0VofKzFE9Of7l%2FT4G%2BPirD0f%2F5f%2B0GBtGJ1RdWArq2J6PfvaZ3fBijdWaRP75vKeye78QFFm%2BSZltHUUiJk403cge6aD3fib3gOxGbk1OXHiB3OsjdBEPRveqR9RnHmupH578NRWDxRAyE2sh9hLZUDMICj%2BsQGOqUBl2aHCHwNq1PA%2BM0Gtlw%2FliwlID8qyoBbmyKw2UhfJz4G1UwIp5ilwEGZ3hF0op1LKNf51uzzK%2Fs6KuCMFdCmX%2B%2FCnRnzic2N%2B2%2FGlIB9WuljBnUBT8Yg75eDxMG%2Byx%2BA80cBumKxksIix5P%2BVF4B9wNlHzhdhIZJFVuI5pkZqPHF7TTxsH1lzVtw7kvJ1QGqqbX56zIeSCAEwrf2mHIUurTBoaX2&X-Amz-Signature=38b2c8703ee1695c653238d6f1dff5aa967b0582b7fff1a934b49abf3004e9c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
