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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAHWKZ4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD04smObdIPof6Hk0vjldpdPCcNgEN4Njv9SwpU0K1gkgIgNcrYvdKxru%2FddARfqsTkCeblaiqtbqTmKCUNanJjzx8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOqn3f1vBgQSOZj4CrcA7Hkc8PlOU%2Ft3RlIVr1y8EVqIMGIDVLR4bETLMapaQXHG5Bl5l6zo0SN1Nfi2h2GLssq2I8XsM00JTmz8Iw5C5FLfPOBvqkTp3sQxtdyczXJgWrnf6b2R%2BHu3W3ylvUSzmPmcsuiG0VkSxIxHtHBLQpd8IuIreopbhwTZxoKZJHdz830hRL2i70GkID4Lp53fV2OdVww0sKlv0PIPTbSQRGA4GQLdn0yumEkPxmuSC2DSFUvA7opDRqmVvI8gr9cwop2%2F05CE8PyQMCizs5ox3nWTKaJTMpUuEMRr4oASdEKI2YLT3o0moJN%2B%2Bm4yPEMjMovSRRr2S5NC940DR5iUI1%2BKtuuniSE64wZJT%2Bc84cFhKTPO5vO9nSxfqpS5vkYNaifYWI6Z2BWszeNC71A3%2BGjmhsT2J3IZDS%2BCfsYU%2B96dh2rTBQdd%2FAQW1NNasm7g4NfwqoRjcL%2B1D%2FHYxVibZijgIjHWnxGAfKc%2Bd4%2BWUAlQFugrptGg81GgDMKvCZMW4JDkedN6LFzDxqLPxD6lkpbh9NwqOsJV1BDYS%2FyJ5lxE%2Fn60%2BqUekAa2Nx5A8T77AbyUXsIICQfQlt9UUhPON2jYohp9l%2BQJorCBaKX1rV5J8xjre%2FfvZV4vCfGMIzDutMGOqUBvUNcETUMirIVkuVoJGC8WnC1KPwyQCUqcFuTT0e72vyl8%2BRoTRanpBcC26NSkPRXjWJp%2FkEBYY9rysNPIvSz%2FuNDUsfXX5stw64TRUCbsrhQ8Od3Pt6xyDvqwUNWsD00fXUAvyA%2Bg2yCgPu%2FLYIEOUzzR%2F6vm2vy74uUYSS0KRjA1Vk5Gus9nbnnCySNtnEc7ZO1fjMZB5qOk24IivRkSfBR3HmE&X-Amz-Signature=f62fabfd34e653956e8b291706f38608206222e954da9ab66d741b89c04f79b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAHWKZ4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD04smObdIPof6Hk0vjldpdPCcNgEN4Njv9SwpU0K1gkgIgNcrYvdKxru%2FddARfqsTkCeblaiqtbqTmKCUNanJjzx8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOqn3f1vBgQSOZj4CrcA7Hkc8PlOU%2Ft3RlIVr1y8EVqIMGIDVLR4bETLMapaQXHG5Bl5l6zo0SN1Nfi2h2GLssq2I8XsM00JTmz8Iw5C5FLfPOBvqkTp3sQxtdyczXJgWrnf6b2R%2BHu3W3ylvUSzmPmcsuiG0VkSxIxHtHBLQpd8IuIreopbhwTZxoKZJHdz830hRL2i70GkID4Lp53fV2OdVww0sKlv0PIPTbSQRGA4GQLdn0yumEkPxmuSC2DSFUvA7opDRqmVvI8gr9cwop2%2F05CE8PyQMCizs5ox3nWTKaJTMpUuEMRr4oASdEKI2YLT3o0moJN%2B%2Bm4yPEMjMovSRRr2S5NC940DR5iUI1%2BKtuuniSE64wZJT%2Bc84cFhKTPO5vO9nSxfqpS5vkYNaifYWI6Z2BWszeNC71A3%2BGjmhsT2J3IZDS%2BCfsYU%2B96dh2rTBQdd%2FAQW1NNasm7g4NfwqoRjcL%2B1D%2FHYxVibZijgIjHWnxGAfKc%2Bd4%2BWUAlQFugrptGg81GgDMKvCZMW4JDkedN6LFzDxqLPxD6lkpbh9NwqOsJV1BDYS%2FyJ5lxE%2Fn60%2BqUekAa2Nx5A8T77AbyUXsIICQfQlt9UUhPON2jYohp9l%2BQJorCBaKX1rV5J8xjre%2FfvZV4vCfGMIzDutMGOqUBvUNcETUMirIVkuVoJGC8WnC1KPwyQCUqcFuTT0e72vyl8%2BRoTRanpBcC26NSkPRXjWJp%2FkEBYY9rysNPIvSz%2FuNDUsfXX5stw64TRUCbsrhQ8Od3Pt6xyDvqwUNWsD00fXUAvyA%2Bg2yCgPu%2FLYIEOUzzR%2F6vm2vy74uUYSS0KRjA1Vk5Gus9nbnnCySNtnEc7ZO1fjMZB5qOk24IivRkSfBR3HmE&X-Amz-Signature=663c4f515c783a7f6481e7a4ede9c917f7b617394d4566561733a1e4874328ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAHWKZ4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD04smObdIPof6Hk0vjldpdPCcNgEN4Njv9SwpU0K1gkgIgNcrYvdKxru%2FddARfqsTkCeblaiqtbqTmKCUNanJjzx8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOqn3f1vBgQSOZj4CrcA7Hkc8PlOU%2Ft3RlIVr1y8EVqIMGIDVLR4bETLMapaQXHG5Bl5l6zo0SN1Nfi2h2GLssq2I8XsM00JTmz8Iw5C5FLfPOBvqkTp3sQxtdyczXJgWrnf6b2R%2BHu3W3ylvUSzmPmcsuiG0VkSxIxHtHBLQpd8IuIreopbhwTZxoKZJHdz830hRL2i70GkID4Lp53fV2OdVww0sKlv0PIPTbSQRGA4GQLdn0yumEkPxmuSC2DSFUvA7opDRqmVvI8gr9cwop2%2F05CE8PyQMCizs5ox3nWTKaJTMpUuEMRr4oASdEKI2YLT3o0moJN%2B%2Bm4yPEMjMovSRRr2S5NC940DR5iUI1%2BKtuuniSE64wZJT%2Bc84cFhKTPO5vO9nSxfqpS5vkYNaifYWI6Z2BWszeNC71A3%2BGjmhsT2J3IZDS%2BCfsYU%2B96dh2rTBQdd%2FAQW1NNasm7g4NfwqoRjcL%2B1D%2FHYxVibZijgIjHWnxGAfKc%2Bd4%2BWUAlQFugrptGg81GgDMKvCZMW4JDkedN6LFzDxqLPxD6lkpbh9NwqOsJV1BDYS%2FyJ5lxE%2Fn60%2BqUekAa2Nx5A8T77AbyUXsIICQfQlt9UUhPON2jYohp9l%2BQJorCBaKX1rV5J8xjre%2FfvZV4vCfGMIzDutMGOqUBvUNcETUMirIVkuVoJGC8WnC1KPwyQCUqcFuTT0e72vyl8%2BRoTRanpBcC26NSkPRXjWJp%2FkEBYY9rysNPIvSz%2FuNDUsfXX5stw64TRUCbsrhQ8Od3Pt6xyDvqwUNWsD00fXUAvyA%2Bg2yCgPu%2FLYIEOUzzR%2F6vm2vy74uUYSS0KRjA1Vk5Gus9nbnnCySNtnEc7ZO1fjMZB5qOk24IivRkSfBR3HmE&X-Amz-Signature=9e9bb8f8398c5299c89a8ad274729213a6d28e63177a1b2404073db361d7cb32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAHWKZ4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD04smObdIPof6Hk0vjldpdPCcNgEN4Njv9SwpU0K1gkgIgNcrYvdKxru%2FddARfqsTkCeblaiqtbqTmKCUNanJjzx8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOqn3f1vBgQSOZj4CrcA7Hkc8PlOU%2Ft3RlIVr1y8EVqIMGIDVLR4bETLMapaQXHG5Bl5l6zo0SN1Nfi2h2GLssq2I8XsM00JTmz8Iw5C5FLfPOBvqkTp3sQxtdyczXJgWrnf6b2R%2BHu3W3ylvUSzmPmcsuiG0VkSxIxHtHBLQpd8IuIreopbhwTZxoKZJHdz830hRL2i70GkID4Lp53fV2OdVww0sKlv0PIPTbSQRGA4GQLdn0yumEkPxmuSC2DSFUvA7opDRqmVvI8gr9cwop2%2F05CE8PyQMCizs5ox3nWTKaJTMpUuEMRr4oASdEKI2YLT3o0moJN%2B%2Bm4yPEMjMovSRRr2S5NC940DR5iUI1%2BKtuuniSE64wZJT%2Bc84cFhKTPO5vO9nSxfqpS5vkYNaifYWI6Z2BWszeNC71A3%2BGjmhsT2J3IZDS%2BCfsYU%2B96dh2rTBQdd%2FAQW1NNasm7g4NfwqoRjcL%2B1D%2FHYxVibZijgIjHWnxGAfKc%2Bd4%2BWUAlQFugrptGg81GgDMKvCZMW4JDkedN6LFzDxqLPxD6lkpbh9NwqOsJV1BDYS%2FyJ5lxE%2Fn60%2BqUekAa2Nx5A8T77AbyUXsIICQfQlt9UUhPON2jYohp9l%2BQJorCBaKX1rV5J8xjre%2FfvZV4vCfGMIzDutMGOqUBvUNcETUMirIVkuVoJGC8WnC1KPwyQCUqcFuTT0e72vyl8%2BRoTRanpBcC26NSkPRXjWJp%2FkEBYY9rysNPIvSz%2FuNDUsfXX5stw64TRUCbsrhQ8Od3Pt6xyDvqwUNWsD00fXUAvyA%2Bg2yCgPu%2FLYIEOUzzR%2F6vm2vy74uUYSS0KRjA1Vk5Gus9nbnnCySNtnEc7ZO1fjMZB5qOk24IivRkSfBR3HmE&X-Amz-Signature=9051fe93f874323921300c8993dc6d8e4a1d2eab89b671c4f35a7d0dc79aa11f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAHWKZ4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD04smObdIPof6Hk0vjldpdPCcNgEN4Njv9SwpU0K1gkgIgNcrYvdKxru%2FddARfqsTkCeblaiqtbqTmKCUNanJjzx8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOqn3f1vBgQSOZj4CrcA7Hkc8PlOU%2Ft3RlIVr1y8EVqIMGIDVLR4bETLMapaQXHG5Bl5l6zo0SN1Nfi2h2GLssq2I8XsM00JTmz8Iw5C5FLfPOBvqkTp3sQxtdyczXJgWrnf6b2R%2BHu3W3ylvUSzmPmcsuiG0VkSxIxHtHBLQpd8IuIreopbhwTZxoKZJHdz830hRL2i70GkID4Lp53fV2OdVww0sKlv0PIPTbSQRGA4GQLdn0yumEkPxmuSC2DSFUvA7opDRqmVvI8gr9cwop2%2F05CE8PyQMCizs5ox3nWTKaJTMpUuEMRr4oASdEKI2YLT3o0moJN%2B%2Bm4yPEMjMovSRRr2S5NC940DR5iUI1%2BKtuuniSE64wZJT%2Bc84cFhKTPO5vO9nSxfqpS5vkYNaifYWI6Z2BWszeNC71A3%2BGjmhsT2J3IZDS%2BCfsYU%2B96dh2rTBQdd%2FAQW1NNasm7g4NfwqoRjcL%2B1D%2FHYxVibZijgIjHWnxGAfKc%2Bd4%2BWUAlQFugrptGg81GgDMKvCZMW4JDkedN6LFzDxqLPxD6lkpbh9NwqOsJV1BDYS%2FyJ5lxE%2Fn60%2BqUekAa2Nx5A8T77AbyUXsIICQfQlt9UUhPON2jYohp9l%2BQJorCBaKX1rV5J8xjre%2FfvZV4vCfGMIzDutMGOqUBvUNcETUMirIVkuVoJGC8WnC1KPwyQCUqcFuTT0e72vyl8%2BRoTRanpBcC26NSkPRXjWJp%2FkEBYY9rysNPIvSz%2FuNDUsfXX5stw64TRUCbsrhQ8Od3Pt6xyDvqwUNWsD00fXUAvyA%2Bg2yCgPu%2FLYIEOUzzR%2F6vm2vy74uUYSS0KRjA1Vk5Gus9nbnnCySNtnEc7ZO1fjMZB5qOk24IivRkSfBR3HmE&X-Amz-Signature=7123bd76936a82559caa7373b824a452755ab52aa98cdfdc8af4d8d765074379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAHWKZ4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD04smObdIPof6Hk0vjldpdPCcNgEN4Njv9SwpU0K1gkgIgNcrYvdKxru%2FddARfqsTkCeblaiqtbqTmKCUNanJjzx8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOqn3f1vBgQSOZj4CrcA7Hkc8PlOU%2Ft3RlIVr1y8EVqIMGIDVLR4bETLMapaQXHG5Bl5l6zo0SN1Nfi2h2GLssq2I8XsM00JTmz8Iw5C5FLfPOBvqkTp3sQxtdyczXJgWrnf6b2R%2BHu3W3ylvUSzmPmcsuiG0VkSxIxHtHBLQpd8IuIreopbhwTZxoKZJHdz830hRL2i70GkID4Lp53fV2OdVww0sKlv0PIPTbSQRGA4GQLdn0yumEkPxmuSC2DSFUvA7opDRqmVvI8gr9cwop2%2F05CE8PyQMCizs5ox3nWTKaJTMpUuEMRr4oASdEKI2YLT3o0moJN%2B%2Bm4yPEMjMovSRRr2S5NC940DR5iUI1%2BKtuuniSE64wZJT%2Bc84cFhKTPO5vO9nSxfqpS5vkYNaifYWI6Z2BWszeNC71A3%2BGjmhsT2J3IZDS%2BCfsYU%2B96dh2rTBQdd%2FAQW1NNasm7g4NfwqoRjcL%2B1D%2FHYxVibZijgIjHWnxGAfKc%2Bd4%2BWUAlQFugrptGg81GgDMKvCZMW4JDkedN6LFzDxqLPxD6lkpbh9NwqOsJV1BDYS%2FyJ5lxE%2Fn60%2BqUekAa2Nx5A8T77AbyUXsIICQfQlt9UUhPON2jYohp9l%2BQJorCBaKX1rV5J8xjre%2FfvZV4vCfGMIzDutMGOqUBvUNcETUMirIVkuVoJGC8WnC1KPwyQCUqcFuTT0e72vyl8%2BRoTRanpBcC26NSkPRXjWJp%2FkEBYY9rysNPIvSz%2FuNDUsfXX5stw64TRUCbsrhQ8Od3Pt6xyDvqwUNWsD00fXUAvyA%2Bg2yCgPu%2FLYIEOUzzR%2F6vm2vy74uUYSS0KRjA1Vk5Gus9nbnnCySNtnEc7ZO1fjMZB5qOk24IivRkSfBR3HmE&X-Amz-Signature=25f75116da4472bdbb165b0b9f7c90f4b4912238f660933e52ba0597c7cd37f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAHWKZ4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD04smObdIPof6Hk0vjldpdPCcNgEN4Njv9SwpU0K1gkgIgNcrYvdKxru%2FddARfqsTkCeblaiqtbqTmKCUNanJjzx8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOqn3f1vBgQSOZj4CrcA7Hkc8PlOU%2Ft3RlIVr1y8EVqIMGIDVLR4bETLMapaQXHG5Bl5l6zo0SN1Nfi2h2GLssq2I8XsM00JTmz8Iw5C5FLfPOBvqkTp3sQxtdyczXJgWrnf6b2R%2BHu3W3ylvUSzmPmcsuiG0VkSxIxHtHBLQpd8IuIreopbhwTZxoKZJHdz830hRL2i70GkID4Lp53fV2OdVww0sKlv0PIPTbSQRGA4GQLdn0yumEkPxmuSC2DSFUvA7opDRqmVvI8gr9cwop2%2F05CE8PyQMCizs5ox3nWTKaJTMpUuEMRr4oASdEKI2YLT3o0moJN%2B%2Bm4yPEMjMovSRRr2S5NC940DR5iUI1%2BKtuuniSE64wZJT%2Bc84cFhKTPO5vO9nSxfqpS5vkYNaifYWI6Z2BWszeNC71A3%2BGjmhsT2J3IZDS%2BCfsYU%2B96dh2rTBQdd%2FAQW1NNasm7g4NfwqoRjcL%2B1D%2FHYxVibZijgIjHWnxGAfKc%2Bd4%2BWUAlQFugrptGg81GgDMKvCZMW4JDkedN6LFzDxqLPxD6lkpbh9NwqOsJV1BDYS%2FyJ5lxE%2Fn60%2BqUekAa2Nx5A8T77AbyUXsIICQfQlt9UUhPON2jYohp9l%2BQJorCBaKX1rV5J8xjre%2FfvZV4vCfGMIzDutMGOqUBvUNcETUMirIVkuVoJGC8WnC1KPwyQCUqcFuTT0e72vyl8%2BRoTRanpBcC26NSkPRXjWJp%2FkEBYY9rysNPIvSz%2FuNDUsfXX5stw64TRUCbsrhQ8Od3Pt6xyDvqwUNWsD00fXUAvyA%2Bg2yCgPu%2FLYIEOUzzR%2F6vm2vy74uUYSS0KRjA1Vk5Gus9nbnnCySNtnEc7ZO1fjMZB5qOk24IivRkSfBR3HmE&X-Amz-Signature=51047b679c24c1d3ce31a7bebcb15e8735d25a6cb728ef2426b0809b42ee28d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAHWKZ4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD04smObdIPof6Hk0vjldpdPCcNgEN4Njv9SwpU0K1gkgIgNcrYvdKxru%2FddARfqsTkCeblaiqtbqTmKCUNanJjzx8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOqn3f1vBgQSOZj4CrcA7Hkc8PlOU%2Ft3RlIVr1y8EVqIMGIDVLR4bETLMapaQXHG5Bl5l6zo0SN1Nfi2h2GLssq2I8XsM00JTmz8Iw5C5FLfPOBvqkTp3sQxtdyczXJgWrnf6b2R%2BHu3W3ylvUSzmPmcsuiG0VkSxIxHtHBLQpd8IuIreopbhwTZxoKZJHdz830hRL2i70GkID4Lp53fV2OdVww0sKlv0PIPTbSQRGA4GQLdn0yumEkPxmuSC2DSFUvA7opDRqmVvI8gr9cwop2%2F05CE8PyQMCizs5ox3nWTKaJTMpUuEMRr4oASdEKI2YLT3o0moJN%2B%2Bm4yPEMjMovSRRr2S5NC940DR5iUI1%2BKtuuniSE64wZJT%2Bc84cFhKTPO5vO9nSxfqpS5vkYNaifYWI6Z2BWszeNC71A3%2BGjmhsT2J3IZDS%2BCfsYU%2B96dh2rTBQdd%2FAQW1NNasm7g4NfwqoRjcL%2B1D%2FHYxVibZijgIjHWnxGAfKc%2Bd4%2BWUAlQFugrptGg81GgDMKvCZMW4JDkedN6LFzDxqLPxD6lkpbh9NwqOsJV1BDYS%2FyJ5lxE%2Fn60%2BqUekAa2Nx5A8T77AbyUXsIICQfQlt9UUhPON2jYohp9l%2BQJorCBaKX1rV5J8xjre%2FfvZV4vCfGMIzDutMGOqUBvUNcETUMirIVkuVoJGC8WnC1KPwyQCUqcFuTT0e72vyl8%2BRoTRanpBcC26NSkPRXjWJp%2FkEBYY9rysNPIvSz%2FuNDUsfXX5stw64TRUCbsrhQ8Od3Pt6xyDvqwUNWsD00fXUAvyA%2Bg2yCgPu%2FLYIEOUzzR%2F6vm2vy74uUYSS0KRjA1Vk5Gus9nbnnCySNtnEc7ZO1fjMZB5qOk24IivRkSfBR3HmE&X-Amz-Signature=61324ca121fb5249dff08fa489bb038e0cf713b72e7c5831a29ee4cdda6d22e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAHWKZ4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD04smObdIPof6Hk0vjldpdPCcNgEN4Njv9SwpU0K1gkgIgNcrYvdKxru%2FddARfqsTkCeblaiqtbqTmKCUNanJjzx8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOqn3f1vBgQSOZj4CrcA7Hkc8PlOU%2Ft3RlIVr1y8EVqIMGIDVLR4bETLMapaQXHG5Bl5l6zo0SN1Nfi2h2GLssq2I8XsM00JTmz8Iw5C5FLfPOBvqkTp3sQxtdyczXJgWrnf6b2R%2BHu3W3ylvUSzmPmcsuiG0VkSxIxHtHBLQpd8IuIreopbhwTZxoKZJHdz830hRL2i70GkID4Lp53fV2OdVww0sKlv0PIPTbSQRGA4GQLdn0yumEkPxmuSC2DSFUvA7opDRqmVvI8gr9cwop2%2F05CE8PyQMCizs5ox3nWTKaJTMpUuEMRr4oASdEKI2YLT3o0moJN%2B%2Bm4yPEMjMovSRRr2S5NC940DR5iUI1%2BKtuuniSE64wZJT%2Bc84cFhKTPO5vO9nSxfqpS5vkYNaifYWI6Z2BWszeNC71A3%2BGjmhsT2J3IZDS%2BCfsYU%2B96dh2rTBQdd%2FAQW1NNasm7g4NfwqoRjcL%2B1D%2FHYxVibZijgIjHWnxGAfKc%2Bd4%2BWUAlQFugrptGg81GgDMKvCZMW4JDkedN6LFzDxqLPxD6lkpbh9NwqOsJV1BDYS%2FyJ5lxE%2Fn60%2BqUekAa2Nx5A8T77AbyUXsIICQfQlt9UUhPON2jYohp9l%2BQJorCBaKX1rV5J8xjre%2FfvZV4vCfGMIzDutMGOqUBvUNcETUMirIVkuVoJGC8WnC1KPwyQCUqcFuTT0e72vyl8%2BRoTRanpBcC26NSkPRXjWJp%2FkEBYY9rysNPIvSz%2FuNDUsfXX5stw64TRUCbsrhQ8Od3Pt6xyDvqwUNWsD00fXUAvyA%2Bg2yCgPu%2FLYIEOUzzR%2F6vm2vy74uUYSS0KRjA1Vk5Gus9nbnnCySNtnEc7ZO1fjMZB5qOk24IivRkSfBR3HmE&X-Amz-Signature=77c6a3db0531bd6d6dbdba3b71d744397d2f62eeb0e11b21e85f1828d23aae9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAHWKZ4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD04smObdIPof6Hk0vjldpdPCcNgEN4Njv9SwpU0K1gkgIgNcrYvdKxru%2FddARfqsTkCeblaiqtbqTmKCUNanJjzx8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOqn3f1vBgQSOZj4CrcA7Hkc8PlOU%2Ft3RlIVr1y8EVqIMGIDVLR4bETLMapaQXHG5Bl5l6zo0SN1Nfi2h2GLssq2I8XsM00JTmz8Iw5C5FLfPOBvqkTp3sQxtdyczXJgWrnf6b2R%2BHu3W3ylvUSzmPmcsuiG0VkSxIxHtHBLQpd8IuIreopbhwTZxoKZJHdz830hRL2i70GkID4Lp53fV2OdVww0sKlv0PIPTbSQRGA4GQLdn0yumEkPxmuSC2DSFUvA7opDRqmVvI8gr9cwop2%2F05CE8PyQMCizs5ox3nWTKaJTMpUuEMRr4oASdEKI2YLT3o0moJN%2B%2Bm4yPEMjMovSRRr2S5NC940DR5iUI1%2BKtuuniSE64wZJT%2Bc84cFhKTPO5vO9nSxfqpS5vkYNaifYWI6Z2BWszeNC71A3%2BGjmhsT2J3IZDS%2BCfsYU%2B96dh2rTBQdd%2FAQW1NNasm7g4NfwqoRjcL%2B1D%2FHYxVibZijgIjHWnxGAfKc%2Bd4%2BWUAlQFugrptGg81GgDMKvCZMW4JDkedN6LFzDxqLPxD6lkpbh9NwqOsJV1BDYS%2FyJ5lxE%2Fn60%2BqUekAa2Nx5A8T77AbyUXsIICQfQlt9UUhPON2jYohp9l%2BQJorCBaKX1rV5J8xjre%2FfvZV4vCfGMIzDutMGOqUBvUNcETUMirIVkuVoJGC8WnC1KPwyQCUqcFuTT0e72vyl8%2BRoTRanpBcC26NSkPRXjWJp%2FkEBYY9rysNPIvSz%2FuNDUsfXX5stw64TRUCbsrhQ8Od3Pt6xyDvqwUNWsD00fXUAvyA%2Bg2yCgPu%2FLYIEOUzzR%2F6vm2vy74uUYSS0KRjA1Vk5Gus9nbnnCySNtnEc7ZO1fjMZB5qOk24IivRkSfBR3HmE&X-Amz-Signature=35ed948ed01992e8ffb54b01ef577624981fde1e95bf758efafd60ed80e1d95d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36TICAM%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIERH2AbKNDJJVBH8bDciW04L8oG2oKo%2BGop3RxWcuUQQAiBX%2BtI3uMTCAhQGkkevpO6AfMx0KpMmlwwLXO7UXxA%2BaSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO2AFQJ5EUBSfHCIUKtwDVq38tBwyIfD8fOP68E%2FOrjXO6KOYDq0%2FkReTIzY7213pcb3QPGjnAfCAUL1D%2FAro%2FlGc%2B22aN6Ne23oOyxydlFY4Oksw2ewS7ZEscEZpqCd6zDupZWh2D5sgvjYj%2B0YgSwb0evc4UDdW67Bo1bbUdlhH0vM7vnTiGVtbviCC9POwBS9I6ex2jVe7110Hbz5DXDRNKco0g%2BWNFEdyGSTka1CsPcIwpTWZw3vku9stNN5lSyDc6kEd4rHg7CsWXJTGXoinAlDf5h%2BmUhjTZHhEKYOq9aN2lQhnKnxxwz%2B6V2I9UrwkQy8DpF5QGbWFZyBZ6ddZRVeECDLQe5OQ80qiBGN0uSYtC%2B9MeSdtCrgnJp9Flup6EKlZap0MsLNv8v6BU9ZYSspFUmSi3%2FFHTo2Gu%2Fv9k6ofkfsjiCHzj4xW5n%2BLe%2F99%2B40amyvQLZTDA%2Fx2lprfsYjjKH6FIyCEeqyg%2FsDBooOKIjGCzozX18Endw9k6wtxgUBk%2FMdlyA0wWocyApCPPzhBpfoNOoQUxOfY1bz5RPByVXHbXa268LqXRxAmwamrUXyxKbI9g8QU9%2BrTR87%2Ft1xyNPwMRkMBbfo0gDl6WNz%2Fpo0DcCA1V%2Fm5tRlzLZdomAWNQmUWBEwwx8C60wY6pgHWoSxXvxZ2nRSIc8I5Nr1ptSvMGX4MwPusNlz1qgYQ1yzp144TvZVNsR3l%2FB%2B4yvw8fpVhgKl1slQahO1Kr8xq4sXCLb4EBWoKRd14heSxWw6%2BXPBG0xsHr4Ii%2BzksSP8OZu2o9GEGzQnqIy%2Bw4lDleeX%2FmiuD7ILvig92%2BYkCL7hYkGlMpgNIKzNJwXoxEJ0oBtW%2FVMGOOnb40Lbb2RdRaA2sjDva&X-Amz-Signature=4f83317c3f6b6970c00a65a35c12921ab4b1acad0d4f917951296120b41c4e8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IQUXPZH%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDb6jcrTi8ihRsVvJ5DKESXWz69xj1rh4Vjwth%2FsM8D2AIgWxTh6w%2FeRt2gjoMmMthLFNT%2FNO8nATYzbmNsPtsv%2F5oqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1reyL2oEuKlq%2FnGSrcA6fZm%2F4JOd6HsTGXPoHL6MhdCgR0oPIiMAGzUel5DXYhj9ABH9Q6P4%2BJICCM4LqQkKhoGV5SvHYPYOkembmdoSAVJo%2BWNJKhB2RBPseX1CMV9p6Tu11jmtv7qDn0Wk1jwLIWWExfPS%2BIpVwwuqLxYXK1VDzeO41FN34JOOsdIVip13WYfJ2WNV1ZYpGq3BAlYmfJlQ%2BgDv5bXkHDA5fSwketr%2Btp1UE0bM8fs0gERTAhBZJcZNoWn3e02f65iwJtMtHsQYDfAhJc8elZ2dAaErziYQGYigQU%2BtAJ06jn4D%2FyDL%2BJEgcegLkP8mjZ4eO%2FT14ozPRGE%2FS0HELd7ZnuEAORExexPII6pfxR7BE%2BVt9aYEIdch5Q8wXEUGkpUG8axl10Vwn2bizrnYK%2B3xwC7BXU%2BtN374109h0STQo87OHBSDfMMVYVyz5ohn4DMhhkFJQfe1FW0kV7EXQaLa7qRLgVvAHKKIoWHQOvbpQvyfLb4td4n2ZgmqSyH740NQxyg6FqFGc6iQQ03SbJ2wDf7xr8aOjOyLpGcmtLDyyAfbVrySezjOfNJh0E7Bq27IuEfI62e1fPqchUWxLH01SgOIZwLu9XXGaPU5VMdv3ruzNkwMY2f63M2Q2TgJeoMPTAutMGOqUBob6CLbZWz6FQFoyqNWNfY3opAboFm0YDt1Jduh%2BdPj69I2SKqScI5jNUqhUz2yvBY4bXBCQi1GoJXDdDf1kdu8pZzYDNyVT5E1MtuxAzb4gWq6MHM5vbSn8Yr4vcqlrLqzzFyzK4D%2BAwgo%2B%2BgtNqXp3nRrW%2BmdqZoHn%2BFMd8ts%2FxgTnjcRu457AciXTMc5UtBbp96kNaHBAxScOXeJ5F%2BjcCnAyx&X-Amz-Signature=c28955f1daa403687ab4f10beb5e12cd7dd68385f53e147192845024b23f436f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4JUH45W%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHn6lsCCouP12VWE35ToTl7ktf8wKLm7kgZMGPfB7MdUAiB4tj8lW%2BzFM8TjcBHdbqgJor5gMLSDpgbkaEPRPBKLeSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9JljwbMJ6GdUozq0KtwDyyXXDjy%2FSXEyhGrCo2kcvud651JIiCy6E37Rz0S8sFqgjIGxhsuEb%2BDXSyFHzWZz3K7yaJ7sg%2FDwQaJP64jfqHdH3W5%2BaDu%2F6xMzqyouSaKzm%2FbZUEMXiws%2F09a8ePWx6HAn8qYMw00d0nlm7YzGNpHJgJ13TEx1U3PoCb07ErqlY4g4gqhCYb1EzvhJp5NAT71hxjng6ddFRUtw3BIhaeUoImykhYz2WQ0SnT27znOds4A7NuCgYMfupVAP4g9S56UWBwT%2BffRlwWuR6FM2NPWwhjCrfig03sxl4bJ%2FOVKAKO9EJdeHmzd86CN1ERXawR8pvRl%2Bz8DNug3vBvqIvxigG5uS59vTZ6UukN1J%2BDH%2BTBfvAea83eG%2Bh0Tz0YSU3PDDJJ2Q1hUzIYLbO6en4%2FDwRjni4PJdSsDyOX8HgMpGOkZl3vy6xNDQSYvh3MH%2BYJg4b6235RlPcVKtISbKpSnwIXQSfx3%2FS7ihPkLsXTCAt00vITMexJ9Fh9kAF2nmg%2By24%2Fo56OZE05cEBJk05FEpvP8UOueMDpoZYtM9ZemfF86l6X5Mq0Eei2BHe0fx9Rp6BdEcxR40RklQ%2BfXrPK%2BcBjIo51o8p6Tf9GJ0dvAoQuTUu5A1St4bk7UwmcG60wY6pgFphk81a1ZGpTulFvgCHbxRudzmE8s4SG0f9k2vGSGPJ%2FKEkv%2FmrSkEMcCu7u3HocafLFzHljsdk7MvATeJlji%2BioYAUpGOHtFWdDpBoTJME7N%2FQhBQfxsIp1oqV9vkJLX7e94TSRnGyv6MnkqJpD%2BitCCMaAu1gv5m3pH7QsL%2F1H%2Bd9pvdz1lcFZqjAz9nherNBczS7ephCDNbXhGVtxLh97ax3K2O&X-Amz-Signature=9601a5da134ae68a56b70770f40ad883e410db3426918f178df71f5fa5ef740f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAHWKZ4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD04smObdIPof6Hk0vjldpdPCcNgEN4Njv9SwpU0K1gkgIgNcrYvdKxru%2FddARfqsTkCeblaiqtbqTmKCUNanJjzx8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOqn3f1vBgQSOZj4CrcA7Hkc8PlOU%2Ft3RlIVr1y8EVqIMGIDVLR4bETLMapaQXHG5Bl5l6zo0SN1Nfi2h2GLssq2I8XsM00JTmz8Iw5C5FLfPOBvqkTp3sQxtdyczXJgWrnf6b2R%2BHu3W3ylvUSzmPmcsuiG0VkSxIxHtHBLQpd8IuIreopbhwTZxoKZJHdz830hRL2i70GkID4Lp53fV2OdVww0sKlv0PIPTbSQRGA4GQLdn0yumEkPxmuSC2DSFUvA7opDRqmVvI8gr9cwop2%2F05CE8PyQMCizs5ox3nWTKaJTMpUuEMRr4oASdEKI2YLT3o0moJN%2B%2Bm4yPEMjMovSRRr2S5NC940DR5iUI1%2BKtuuniSE64wZJT%2Bc84cFhKTPO5vO9nSxfqpS5vkYNaifYWI6Z2BWszeNC71A3%2BGjmhsT2J3IZDS%2BCfsYU%2B96dh2rTBQdd%2FAQW1NNasm7g4NfwqoRjcL%2B1D%2FHYxVibZijgIjHWnxGAfKc%2Bd4%2BWUAlQFugrptGg81GgDMKvCZMW4JDkedN6LFzDxqLPxD6lkpbh9NwqOsJV1BDYS%2FyJ5lxE%2Fn60%2BqUekAa2Nx5A8T77AbyUXsIICQfQlt9UUhPON2jYohp9l%2BQJorCBaKX1rV5J8xjre%2FfvZV4vCfGMIzDutMGOqUBvUNcETUMirIVkuVoJGC8WnC1KPwyQCUqcFuTT0e72vyl8%2BRoTRanpBcC26NSkPRXjWJp%2FkEBYY9rysNPIvSz%2FuNDUsfXX5stw64TRUCbsrhQ8Od3Pt6xyDvqwUNWsD00fXUAvyA%2Bg2yCgPu%2FLYIEOUzzR%2F6vm2vy74uUYSS0KRjA1Vk5Gus9nbnnCySNtnEc7ZO1fjMZB5qOk24IivRkSfBR3HmE&X-Amz-Signature=a1a4c2f4ccba2dc8a584cd9bc7425447deb8c20a01fb9a9f37131f795aa58ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5WKAOHT%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD511T%2FAEbuaL7VfvHTBsbUPfM7inuxxCNDTvp55%2BTIXQIhANlDEPGxxduLEQIaqJYTgXQ50JJQIkaVVswLtIaqJINQKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpS%2F0c4OeutmA0LFoq3AOkLTnDbuflSXjQeuZraMUFjRrdG5rRLpvuF2BLrqIJe4xpTfDNZQYubiUxexi99b%2BaUxvG6Uje1teGGMofj2M%2BJ6vd2lSYu6arbwsDeNQCreiTEsOhd5XWVf%2FegeEOJQoV80J2GL%2Fh3GT1z1mdNRAQZXZzvpXVP0%2B1wMNMLhTcK0ZawxmrxMX8UWyiv5XJYCstNAEiz80Sy2LhiTqN7PivppSW2kGPNRxgPGkn4%2BJCGH%2Bk29Olb1hrZC%2FYq%2BV4FH%2FdLMGXTm%2F9VA9%2FOSdnC5pmZdUWGRiH1BPOrJJSvcuH29gFDqHft8Qhy3owhKlMuT8X1K0KS7e%2Fedi9RtoK7qbbaaK%2BQvONUlxAVzyQ8pYDouSKzGI9RtQSGsv87f8d8YwK1olxP6m%2BCWQTX0yXykxCefEls%2FmHJvPEviA%2FR%2Bq4fqHmEuv4mYhHJ9uxzCAk5HNudU07AAk2WwvmUl0P1xcI67lTEHPfldVZIaEBWs7bc9ZeFON7ODKuIT%2FuX4qgEdSBoK21ts2GSOZl0%2FdTrNZ0y4v8bXwQlx%2Fn1neWluXiOpJjOCshxISr88Lcis5OUBjoMwqiqPXhSD22Lc9J7pFTbfGwScebp6YsBerahIZm%2BccFa6AErut6FecenTDqwbrTBjqkAaaoilMLjYx5osD9WFaOsu3g3KjtRQ6MYvnZYW2RqAJx1nIPpa06aG3cKb5%2FjoStIA0ytuetZ3QHfwVRewuvixSXwuNHZamcQN3EUcxC5Nz5Rnq%2Bz9CTJwnA1YT3YrozEhcsuFl8vYzgCGiWm%2BmzTAkNlgQbfszKJ6Z979xKgIK0N9lxPEi5GD%2Bpod91qww%2BCoVgR9GF2OUK92PQcslkhBmH2ET1&X-Amz-Signature=2c238a07e48ed48b4d437e0bab5daa677a7e50d066791251014253858555830b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAHWKZ4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD04smObdIPof6Hk0vjldpdPCcNgEN4Njv9SwpU0K1gkgIgNcrYvdKxru%2FddARfqsTkCeblaiqtbqTmKCUNanJjzx8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOqn3f1vBgQSOZj4CrcA7Hkc8PlOU%2Ft3RlIVr1y8EVqIMGIDVLR4bETLMapaQXHG5Bl5l6zo0SN1Nfi2h2GLssq2I8XsM00JTmz8Iw5C5FLfPOBvqkTp3sQxtdyczXJgWrnf6b2R%2BHu3W3ylvUSzmPmcsuiG0VkSxIxHtHBLQpd8IuIreopbhwTZxoKZJHdz830hRL2i70GkID4Lp53fV2OdVww0sKlv0PIPTbSQRGA4GQLdn0yumEkPxmuSC2DSFUvA7opDRqmVvI8gr9cwop2%2F05CE8PyQMCizs5ox3nWTKaJTMpUuEMRr4oASdEKI2YLT3o0moJN%2B%2Bm4yPEMjMovSRRr2S5NC940DR5iUI1%2BKtuuniSE64wZJT%2Bc84cFhKTPO5vO9nSxfqpS5vkYNaifYWI6Z2BWszeNC71A3%2BGjmhsT2J3IZDS%2BCfsYU%2B96dh2rTBQdd%2FAQW1NNasm7g4NfwqoRjcL%2B1D%2FHYxVibZijgIjHWnxGAfKc%2Bd4%2BWUAlQFugrptGg81GgDMKvCZMW4JDkedN6LFzDxqLPxD6lkpbh9NwqOsJV1BDYS%2FyJ5lxE%2Fn60%2BqUekAa2Nx5A8T77AbyUXsIICQfQlt9UUhPON2jYohp9l%2BQJorCBaKX1rV5J8xjre%2FfvZV4vCfGMIzDutMGOqUBvUNcETUMirIVkuVoJGC8WnC1KPwyQCUqcFuTT0e72vyl8%2BRoTRanpBcC26NSkPRXjWJp%2FkEBYY9rysNPIvSz%2FuNDUsfXX5stw64TRUCbsrhQ8Od3Pt6xyDvqwUNWsD00fXUAvyA%2Bg2yCgPu%2FLYIEOUzzR%2F6vm2vy74uUYSS0KRjA1Vk5Gus9nbnnCySNtnEc7ZO1fjMZB5qOk24IivRkSfBR3HmE&X-Amz-Signature=72367a17b83da4ed123ffd7484c21c59c2a8abe34c075db822f21cfd0919bdc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZTJQ62Y%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIF5FVJeXketyP1cIUVz9xC1kA7h1QrOFYS5AfyjURRmDAiEAiN0kUjlGucWcOvLD6BZEA%2FGkxilh0vWyBhYNgMYRieIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUxQlYuhUYpmByHMCrcA8Ie%2BdVf%2FZFiczk7PE2cUdCMuA%2F%2B04NIQLFxKnQIEXP5IhUgh6rsVObu0FMNKcQdOV9OYScih8lLY%2FdY2jXGS4tZ2AJ8ad5LwrsBfytOOfpyTbfnI1NhMbUwj6CtxK5v59LwxQK8an%2BrI26XlhW%2FZTyOORa6BdX1x2efkX0ChdoyXaKPIB8Gs%2BLxpAdC2gBHS7EAsAEAzlFu7s07gmSFEinY8R4ZA3YCFJ%2BATZNwwOxVZ%2FWh3e5ryh73Q5lu3YhTHA2SMe8Q4HWtUvDeojX86G%2FyK%2B7rQlzqFVI8K9mqEHbsHOBlW0k9RcEDdQmCvuQirUtDBjKeCKvJHAe5e4e3SagYcjSUXroa9jALJidLS4%2FjTvUFRp0%2FrnwxseOY3pkrePriMp3kC6%2BKpwunS%2Fe2NHF4Ntmi7XUs0tIdY6jyNH%2F1GMVBCVpxxwAtyFb3jQFDUNaWnbsgCpt7TDgxfCZW66CmctEOIlXaWM2KtAMNBVcbFuRILogbICYP5YGhjypa7JYi%2FvGZDUXCk7%2BxFDLEcLZuPcGQ0cYnVxWt1Sx6R5h9sRNnBb1O8Jigo7PZdO%2BbMHjJ6y0cS9UbdQVPPrlJP1EI24WF5rdLsG%2FwQK7KZOvsPsm3CZSFC4K0cXjRMIrDutMGOqUBmMCJu8%2Fc4fVtbbrO%2FpNwVI9a3FibRlR2nohCyuOeOznE%2BTsAvb1sPE9WYBO0IgAaNDphlcCwBKKzONOczVO4hSG6uJAtaraLHX6kop9d8NjmDCTMhAsPKKKyRnCDDS6gW4jBx6jZqbUq1aOH%2BeyVqZuOYdcp3uNq%2Bm7XX5auk6AIgkEoYNzxKk9r0Gb7AnoKHzJH0lFUQYHNurFQkI3Afpo5kpXI&X-Amz-Signature=d37699605e0ce87a00b9cc0b2d17dc22c53a81c10b0519a70b2d33d65d95282c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAHWKZ4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD04smObdIPof6Hk0vjldpdPCcNgEN4Njv9SwpU0K1gkgIgNcrYvdKxru%2FddARfqsTkCeblaiqtbqTmKCUNanJjzx8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOqn3f1vBgQSOZj4CrcA7Hkc8PlOU%2Ft3RlIVr1y8EVqIMGIDVLR4bETLMapaQXHG5Bl5l6zo0SN1Nfi2h2GLssq2I8XsM00JTmz8Iw5C5FLfPOBvqkTp3sQxtdyczXJgWrnf6b2R%2BHu3W3ylvUSzmPmcsuiG0VkSxIxHtHBLQpd8IuIreopbhwTZxoKZJHdz830hRL2i70GkID4Lp53fV2OdVww0sKlv0PIPTbSQRGA4GQLdn0yumEkPxmuSC2DSFUvA7opDRqmVvI8gr9cwop2%2F05CE8PyQMCizs5ox3nWTKaJTMpUuEMRr4oASdEKI2YLT3o0moJN%2B%2Bm4yPEMjMovSRRr2S5NC940DR5iUI1%2BKtuuniSE64wZJT%2Bc84cFhKTPO5vO9nSxfqpS5vkYNaifYWI6Z2BWszeNC71A3%2BGjmhsT2J3IZDS%2BCfsYU%2B96dh2rTBQdd%2FAQW1NNasm7g4NfwqoRjcL%2B1D%2FHYxVibZijgIjHWnxGAfKc%2Bd4%2BWUAlQFugrptGg81GgDMKvCZMW4JDkedN6LFzDxqLPxD6lkpbh9NwqOsJV1BDYS%2FyJ5lxE%2Fn60%2BqUekAa2Nx5A8T77AbyUXsIICQfQlt9UUhPON2jYohp9l%2BQJorCBaKX1rV5J8xjre%2FfvZV4vCfGMIzDutMGOqUBvUNcETUMirIVkuVoJGC8WnC1KPwyQCUqcFuTT0e72vyl8%2BRoTRanpBcC26NSkPRXjWJp%2FkEBYY9rysNPIvSz%2FuNDUsfXX5stw64TRUCbsrhQ8Od3Pt6xyDvqwUNWsD00fXUAvyA%2Bg2yCgPu%2FLYIEOUzzR%2F6vm2vy74uUYSS0KRjA1Vk5Gus9nbnnCySNtnEc7ZO1fjMZB5qOk24IivRkSfBR3HmE&X-Amz-Signature=32dbca61a49fee9c7855b2c0871289abdf0ab0d603725a61757d43c8ec7be90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUEV3MD3%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCdIeGOBZsbXnTVE9jI8eJInRj%2BJzZxLltG2709vjxMmAIgJKdgBWCm9WYPKNXOxWUfrDaBh873nsq%2FqxeBuGlLM7wqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBoIJdlaZyyLgiz2gSrcAzMhmN7joei1lHqS%2Fd6%2BbWQul73I3%2FYW8ym0v8w6tEWja6A7i6nEG6PYdTsKgVcO328nkb5WeNjPPqMQco7SQEStS9hrc1jLISsfho03e0KybNtisJSvCyWrVZmnXHWMyugXMDANDZbUQpfOg6b%2BXT8wGKq7%2FBseeRUjc9tErPyvGAD0PAHumY1GRT2YomeDxN9OlJtGlVLaYt44LrfDat3q0ijnl8G2xrX1ZowiPHqt7D3HRi0olaNEOVqo5R3RuD%2F69EUm2jTL4TqKuFy3poOjQaqdGa25pBdqoGndhIF2Nu%2FVUuLqxEfT4BNh6dWBmz%2FhHJjb0NH5GcYN8Fx%2Bm%2Fi8PsEQrxIRMQmTxlRA5dNmV3MzQo60hFn84YYnmYZVbvXjqBh0yyRJW0plY4ZazF5DHIBHon%2FQqLEbhLAUBcDg0yMhKKBxpEFhVUIhpWXOs7cuDylexyZWzHs07rXQME7pZG5FKgakcxEXFmhTv%2Br3v5H%2F6KdffLVRWS0LcVJOqQT2h57KUc7lZPqNRhba2QfeVXi5%2BjgQlg%2FZYcIm4Ff%2FFyZwT10RkHd1gD9%2FSgs4IRKggowhqGWNwD3Wrgsx1csAAwIMxp1VNbC7F68VfxrqfoPuyNZxJPSFFWWgMKTButMGOqUBSWKJO2P9lf2z%2FsELUyktdCr%2BS9tIlqESJwc7vEOZ11d7FHWdidwzHYc50mVn47K5WgCvvGotISIvj6tC%2BkXSNx%2BHcXoRzlTy%2BbK6zLUmeGNpyIgA8MwOIbzUj41inOSw8xV%2FcUBgQ5dThFRWsFkxeEQKFbuLaTjlyBmYFQid2PMic1VXWNWov0sV6xcT%2BB9zkT3t0VBT8PhkvaTMkU%2FB3LtgaLMB&X-Amz-Signature=1df0c2947f072db9c5b9cfe68cc8e050befd44bd92c3585b2c80ab85d2155027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAHWKZ4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD04smObdIPof6Hk0vjldpdPCcNgEN4Njv9SwpU0K1gkgIgNcrYvdKxru%2FddARfqsTkCeblaiqtbqTmKCUNanJjzx8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOqn3f1vBgQSOZj4CrcA7Hkc8PlOU%2Ft3RlIVr1y8EVqIMGIDVLR4bETLMapaQXHG5Bl5l6zo0SN1Nfi2h2GLssq2I8XsM00JTmz8Iw5C5FLfPOBvqkTp3sQxtdyczXJgWrnf6b2R%2BHu3W3ylvUSzmPmcsuiG0VkSxIxHtHBLQpd8IuIreopbhwTZxoKZJHdz830hRL2i70GkID4Lp53fV2OdVww0sKlv0PIPTbSQRGA4GQLdn0yumEkPxmuSC2DSFUvA7opDRqmVvI8gr9cwop2%2F05CE8PyQMCizs5ox3nWTKaJTMpUuEMRr4oASdEKI2YLT3o0moJN%2B%2Bm4yPEMjMovSRRr2S5NC940DR5iUI1%2BKtuuniSE64wZJT%2Bc84cFhKTPO5vO9nSxfqpS5vkYNaifYWI6Z2BWszeNC71A3%2BGjmhsT2J3IZDS%2BCfsYU%2B96dh2rTBQdd%2FAQW1NNasm7g4NfwqoRjcL%2B1D%2FHYxVibZijgIjHWnxGAfKc%2Bd4%2BWUAlQFugrptGg81GgDMKvCZMW4JDkedN6LFzDxqLPxD6lkpbh9NwqOsJV1BDYS%2FyJ5lxE%2Fn60%2BqUekAa2Nx5A8T77AbyUXsIICQfQlt9UUhPON2jYohp9l%2BQJorCBaKX1rV5J8xjre%2FfvZV4vCfGMIzDutMGOqUBvUNcETUMirIVkuVoJGC8WnC1KPwyQCUqcFuTT0e72vyl8%2BRoTRanpBcC26NSkPRXjWJp%2FkEBYY9rysNPIvSz%2FuNDUsfXX5stw64TRUCbsrhQ8Od3Pt6xyDvqwUNWsD00fXUAvyA%2Bg2yCgPu%2FLYIEOUzzR%2F6vm2vy74uUYSS0KRjA1Vk5Gus9nbnnCySNtnEc7ZO1fjMZB5qOk24IivRkSfBR3HmE&X-Amz-Signature=37aefa94f17887c23e29a92e1a16b6e9c2835cd6946ececce8b87c6e828db3d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFGDZL4W%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCJ4aRmNY2qFXYPEpqChU7WiZZ7iztq%2FZ9XfYOaSYNVLgIgKh%2BG6cuclv7P6ZkzgBjdOuSXXkpcuJjHqpnxv01l63MqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGh6jrEk8nOKlyAYzircA%2F%2Bk6sAHwF8%2BNEkakGQY7wtOBaVvqUArYskB3V902AtuyP63ZVB5MwMBGrgBPbzZaUcu8D7ZHtegRcBP5X0CatKbMhyqGTiTGSFvdXQpKju4m8ib%2F6OALs1SHbz2U6xqzViNlP64WIEwPXz3OrSiYgLdwRK44QR51UCOBwidXRB0mH%2BAMGrMW9EG9paplVDJEgmrxzBLb3G0C9ktsMWORMrI27dM6UCfiSpS%2B0eo4dM8ZU4bIBihIkOelZQ18Dwxk3HhoCIGNMRV%2BCCFR3zJGqcdpyKF2c3Vcs7HUgyA2YZEETqzirVYzd3pe%2BnHz%2F81N0rtUuy70nCASKXaW2GrJLJn5aNy9HlzJwe18y3CiJxm1My5HjSknoauVPNsh9KPpYI3hJv8lOVERNrDfi6a7uwTCfaOA2v2q1aRzOFqn5seEkK4hw4XVb1CoAasNN1Zar6DpRJyyFMABYyt94eZRHbAQk42kMDxxyJ9eGRs9D%2FuLIGddYhJq3%2BgovQLBKVdclka%2BSFzIBV67rZ06NhUl%2BBAB1aWou4w1fcHui7F73XINsrOZLR7iLvGO0I%2BSguGKotZXji%2BBYuXWiIMJuhbVDt264zw%2FGMziEsuCM%2B6xOaR7Bw3KuzyHcMWL7mGMKvDutMGOqUBAkBqgArn3eJ4W9bbHspXZt79xA%2FTiJGcTQPFEUiYCDGX%2BTOYozE53Gcfp47aflcEg%2F6w%2BPVN5wTlPIOeSsWtVpxLUyoza3mw%2B7vxJ3JbMnXkwK18bK1yMslmSf1agRfP0VpxjKPrBuytK7m1zeGNcDRSLnyrmGM7XqzkEQjI3UnDezkVrFZR6kZfyFO%2FUftp3%2F%2FQwNpdLb0OtknbjzZlGdhg37Un&X-Amz-Signature=73a07f60dfe86f689fec656ae4420271b29a8300bcb20ec83c21cc7472591e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAHWKZ4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD04smObdIPof6Hk0vjldpdPCcNgEN4Njv9SwpU0K1gkgIgNcrYvdKxru%2FddARfqsTkCeblaiqtbqTmKCUNanJjzx8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOqn3f1vBgQSOZj4CrcA7Hkc8PlOU%2Ft3RlIVr1y8EVqIMGIDVLR4bETLMapaQXHG5Bl5l6zo0SN1Nfi2h2GLssq2I8XsM00JTmz8Iw5C5FLfPOBvqkTp3sQxtdyczXJgWrnf6b2R%2BHu3W3ylvUSzmPmcsuiG0VkSxIxHtHBLQpd8IuIreopbhwTZxoKZJHdz830hRL2i70GkID4Lp53fV2OdVww0sKlv0PIPTbSQRGA4GQLdn0yumEkPxmuSC2DSFUvA7opDRqmVvI8gr9cwop2%2F05CE8PyQMCizs5ox3nWTKaJTMpUuEMRr4oASdEKI2YLT3o0moJN%2B%2Bm4yPEMjMovSRRr2S5NC940DR5iUI1%2BKtuuniSE64wZJT%2Bc84cFhKTPO5vO9nSxfqpS5vkYNaifYWI6Z2BWszeNC71A3%2BGjmhsT2J3IZDS%2BCfsYU%2B96dh2rTBQdd%2FAQW1NNasm7g4NfwqoRjcL%2B1D%2FHYxVibZijgIjHWnxGAfKc%2Bd4%2BWUAlQFugrptGg81GgDMKvCZMW4JDkedN6LFzDxqLPxD6lkpbh9NwqOsJV1BDYS%2FyJ5lxE%2Fn60%2BqUekAa2Nx5A8T77AbyUXsIICQfQlt9UUhPON2jYohp9l%2BQJorCBaKX1rV5J8xjre%2FfvZV4vCfGMIzDutMGOqUBvUNcETUMirIVkuVoJGC8WnC1KPwyQCUqcFuTT0e72vyl8%2BRoTRanpBcC26NSkPRXjWJp%2FkEBYY9rysNPIvSz%2FuNDUsfXX5stw64TRUCbsrhQ8Od3Pt6xyDvqwUNWsD00fXUAvyA%2Bg2yCgPu%2FLYIEOUzzR%2F6vm2vy74uUYSS0KRjA1Vk5Gus9nbnnCySNtnEc7ZO1fjMZB5qOk24IivRkSfBR3HmE&X-Amz-Signature=a7b9f01db9461355399e46477414af793823230fed99b6a2a7da5a649818a705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZILKGK%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCKBQJWPqaEktFPkeJTcRYQe1A2OVyuKyvbbOvk3XCsRwIgcOm2iPwQrZQ7uK4c4bz1uo0g0A7zXLPmRODQbmekBaEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHD8E%2BkkJTgDgDcXvCrcAwHtCiITlDCXtFI0HXEvbMMmAHMQ01FHjKwg7VqcDiwuWmUBnCNnDkgJfxRZLTe2rAY6pajr01HY2Rdy15rXL%2F3MOz0yi4S5mHfxMMa1Lt1D%2FEKDajSaqTgxCJ2oMp60NaOhSIjkGYvE0%2BHTAngaqpoNdbdeRR1Vl0lT%2Brg6A1vsgAwQED55cuOtcHT7HTtE33W9vkclz%2Frb%2F7NKiARJpsofpETD3eokEXczSCWczBm7327Gr0%2FJWjaMNgUQcwWpq8VFrceNb5Um44APbLDb6IZjTDmU1G7Y7OpJZHM2rNby3xsuffjYU3Tt1pa16xqOf8sIMKGtxIVtoZFxuMKtw01Ju07heBM3BRHNKjYUkzpJZpSWipoqdV0M17ZMUocFxMvjsIHAe0pIq8wpVUfdAFCU4DJ6RmYqBMqk4B3CvGKP3oyQaLTiBxZpC68h%2FZjMJxW7L5j56V%2FnEhoQdTvONsULnRZayB6ObYNRFhSpro%2FY1RrhSC58DRNwbL4ZOZCErj4Bc32OfzajSZTQ80tXTNy3W%2FbjmoBuIhti8g5SNbnzU6tcV32HpV0udQEaD%2F1YS%2F40GuJJ6g768SVK057WfO1awblRt3msFSRDwsUgLvpiEp2rSegKZDFRJh5tMOLCutMGOqUBXL6A9gYt2lKtIkXHoYwIp%2BVO9F1pxKKeo7MsGXDDONeDkOX8Jbs2CO2PtFEzl0%2FLAQ2BTp%2BtLq5A%2Beo%2BPvcuOhbI%2FlUSzdUsbPKYQLd6YLviW1sHcqIdOERDFiZ5KzTlCyrooRt7M5P3iK0a5%2Fffvxvys%2FQGgtndTNqjDILGHtWzEumtWZoAVeNWc3W82Xr8smB3eMOxauRzCfoJWIexXKSCBSqt&X-Amz-Signature=7f353701b5831de1923c162f867405fc69660935787d6db8657e772b40e810fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBP2RGFJ%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICbyfFpeylJ%2BuhT1oyjkvlKjaEfF7cETT1%2FU0ext4ftHAiEA3SI19GH%2BFo2JOphdNqkTRCLNcfg5Ana5KyKA%2FlVGjDgqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFn8OAuJ7Wdv%2BEB%2BQCrcA%2BNBzsv94AbUBJwnMW3%2B1oUTZ9Uvd4Q9P4LpG%2BAubMMvUw7ViciwAbInHXQpnijnejFZ9sdf2kS7Wtj7wXtX1jwDTII89x49mt7hhdy1vWpvfU2PKaDhb0zXlYUcc1RPFS3BYMXmk2jWgNzajct5EA6tEcdfDv8BiVRdEmR5mjoe1dW%2BxCAcFrEU7%2Fpl3h6gcIe1LNhsLEVO2S2sw7ISA6Z91qyL9zRU2nh13zntCpvecDZS2%2FlVy3T2mlt09UQAaxUQ1kjtkIHES%2B4OQNS6Dcc75EoGOXjs2A9HUe51cABCk9%2FxNIuUlEWrjxBE3EUv7%2B5MZ70uP8qTXzqEjpLXtGS9bYhnbTi5htrBDCUC28f0aSAvkcK8IETLmfSDPkcqsNgIEY5ijsez7pbvDwCXrzysemIAP%2Fi2ES%2FKkemtFFkG6Ft%2BKEbz6KiS0Zt4R%2BdWw6dnbZsgm8bdo03fKEEXjKwAjZxaUiUzuJ0O6wxpI%2BFH0GP4XMhj34DCiu8L9sJh5UATBBnq1xBWykAiaDWQlSDh2zRyQabB5wI1t9WS20HThTN4JckRqrtYTSPoA7568RyMRU0%2BLOn7nu6xDoiWW3DsHWjAC8VdpHw0gfsn1foKmpK8XMbLjZhIYqkaMLHCutMGOqUBMznw1Ap8M0h3M6pKY1C0Ez7bvCIVvKX64mjrIodWHQz01D5cINncxOoZbZg%2BPfuNTN5lrz67Dueo5%2BqkWNy34AfaE2YxQVisujU7fSjdEC0kHSXxyAzl7tmFS1he3zOTv6EAjL2dNYt1rmBncL2CfxZ6FDs1IPPSbSORSN93WQBTu4sZ%2F%2BgjB2TA%2FFa6muDRh1lSxEoBjLY2DTnijIFD3ur9B7y4&X-Amz-Signature=c5764df59c1672f624de74601729c2ee7353cfd93bb4031769ddaacd0aff3fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2DVM6BT%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCnVng16nsilzKnJoStkFMoP4S9856B3RlZy1FwbJ6R%2BQIhAKyu9NqbwrfXCmOyAU4Nj1ppyEBfstqw6RmkJEHLH0mtKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2e1Mgr5sz9ZteF4Mq3AMmBYMUuA2KNhNfT2q0gt2iNho4PFqKtdjiaXUN%2FeBtWblOuO3gu0a1JWHiAO9C4kZ1WUrHRlHRRkcV46zfJRxLkiEpw1lrcLHG6PLvzC5K%2FQL6%2Fv7QUK3mYYAdArpWkrvSlrKQe0Zm7op7%2FBPre4oiqL5tMAlz3DI9sI74hcCdYJKPut7469RXg4pb0cKOqYECBiXqqTvoPMuHLCBjEU9svGl8ySDwlJnWht9ycc2VHNlC0cNeYjX93J4yMx22t%2BEb7sHQ3xnOeODqYBfo9Evt3ps8NdWFtl5yGerLY7nMDKaOlYFw9uYY2ON3MJ8bKFi%2FBdXlsj2n%2FAOvgOkHuzvfXYewGH5hPuiI7mHcrjwEN08Jw9WnNQkJPBBNWFEKnAPQfn3VWFPR6PPr3Gl30tUbRK3tUTBOSfAVOZscoqoLEJi0BMv5Y7MSraSWt87OiFNGqnzAMfyThrx2HZc23zs9Vep7CYQDgaNb6BUv%2F8jFeJEhV1tNjJ%2BSv0V03Uhc7inXlx8cIA4mhNdiUbNlBeS%2B2b1aEk0JaEu%2F%2BxAg%2Ftsq8WO0q7v5ZsSJXmfaVLv1JmRdrnk9tw2CFGnwkC%2BykGqPQhSqHt4WHbIUtzSE47h4oLThmJ6IXS%2BBDknNpjD0wLrTBjqkAVuLVWrlXngwNQqWkLLgRGudavZz5gOBxRR4VQbRBa6uheOWt9NUQXY1pSkFXZ9kXqBex4g7oAG7ulmXCfCjkiWSlUdPk5H5DywNxj5BTFcb16EusxkhhsxCIPaTAyMbtTqvNE2enJjt2%2Bz9PRjDaEWoSxACK7UfGXz3lhnhQERaZL8PlCR78XDVLuv%2B30rlbVU2WuJnC7k31zupFCtpoXHiryjb&X-Amz-Signature=d966097bf8aa1cbec52c2fe8d587add98ef92cd5a3a041f0046b6a80f85f40fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAHWKZ4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD04smObdIPof6Hk0vjldpdPCcNgEN4Njv9SwpU0K1gkgIgNcrYvdKxru%2FddARfqsTkCeblaiqtbqTmKCUNanJjzx8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOqn3f1vBgQSOZj4CrcA7Hkc8PlOU%2Ft3RlIVr1y8EVqIMGIDVLR4bETLMapaQXHG5Bl5l6zo0SN1Nfi2h2GLssq2I8XsM00JTmz8Iw5C5FLfPOBvqkTp3sQxtdyczXJgWrnf6b2R%2BHu3W3ylvUSzmPmcsuiG0VkSxIxHtHBLQpd8IuIreopbhwTZxoKZJHdz830hRL2i70GkID4Lp53fV2OdVww0sKlv0PIPTbSQRGA4GQLdn0yumEkPxmuSC2DSFUvA7opDRqmVvI8gr9cwop2%2F05CE8PyQMCizs5ox3nWTKaJTMpUuEMRr4oASdEKI2YLT3o0moJN%2B%2Bm4yPEMjMovSRRr2S5NC940DR5iUI1%2BKtuuniSE64wZJT%2Bc84cFhKTPO5vO9nSxfqpS5vkYNaifYWI6Z2BWszeNC71A3%2BGjmhsT2J3IZDS%2BCfsYU%2B96dh2rTBQdd%2FAQW1NNasm7g4NfwqoRjcL%2B1D%2FHYxVibZijgIjHWnxGAfKc%2Bd4%2BWUAlQFugrptGg81GgDMKvCZMW4JDkedN6LFzDxqLPxD6lkpbh9NwqOsJV1BDYS%2FyJ5lxE%2Fn60%2BqUekAa2Nx5A8T77AbyUXsIICQfQlt9UUhPON2jYohp9l%2BQJorCBaKX1rV5J8xjre%2FfvZV4vCfGMIzDutMGOqUBvUNcETUMirIVkuVoJGC8WnC1KPwyQCUqcFuTT0e72vyl8%2BRoTRanpBcC26NSkPRXjWJp%2FkEBYY9rysNPIvSz%2FuNDUsfXX5stw64TRUCbsrhQ8Od3Pt6xyDvqwUNWsD00fXUAvyA%2Bg2yCgPu%2FLYIEOUzzR%2F6vm2vy74uUYSS0KRjA1Vk5Gus9nbnnCySNtnEc7ZO1fjMZB5qOk24IivRkSfBR3HmE&X-Amz-Signature=bc7b2618e74ec8c086b4001d815892dfb2b888933a3b742556402e15aef8adf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAHWKZ4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD04smObdIPof6Hk0vjldpdPCcNgEN4Njv9SwpU0K1gkgIgNcrYvdKxru%2FddARfqsTkCeblaiqtbqTmKCUNanJjzx8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOqn3f1vBgQSOZj4CrcA7Hkc8PlOU%2Ft3RlIVr1y8EVqIMGIDVLR4bETLMapaQXHG5Bl5l6zo0SN1Nfi2h2GLssq2I8XsM00JTmz8Iw5C5FLfPOBvqkTp3sQxtdyczXJgWrnf6b2R%2BHu3W3ylvUSzmPmcsuiG0VkSxIxHtHBLQpd8IuIreopbhwTZxoKZJHdz830hRL2i70GkID4Lp53fV2OdVww0sKlv0PIPTbSQRGA4GQLdn0yumEkPxmuSC2DSFUvA7opDRqmVvI8gr9cwop2%2F05CE8PyQMCizs5ox3nWTKaJTMpUuEMRr4oASdEKI2YLT3o0moJN%2B%2Bm4yPEMjMovSRRr2S5NC940DR5iUI1%2BKtuuniSE64wZJT%2Bc84cFhKTPO5vO9nSxfqpS5vkYNaifYWI6Z2BWszeNC71A3%2BGjmhsT2J3IZDS%2BCfsYU%2B96dh2rTBQdd%2FAQW1NNasm7g4NfwqoRjcL%2B1D%2FHYxVibZijgIjHWnxGAfKc%2Bd4%2BWUAlQFugrptGg81GgDMKvCZMW4JDkedN6LFzDxqLPxD6lkpbh9NwqOsJV1BDYS%2FyJ5lxE%2Fn60%2BqUekAa2Nx5A8T77AbyUXsIICQfQlt9UUhPON2jYohp9l%2BQJorCBaKX1rV5J8xjre%2FfvZV4vCfGMIzDutMGOqUBvUNcETUMirIVkuVoJGC8WnC1KPwyQCUqcFuTT0e72vyl8%2BRoTRanpBcC26NSkPRXjWJp%2FkEBYY9rysNPIvSz%2FuNDUsfXX5stw64TRUCbsrhQ8Od3Pt6xyDvqwUNWsD00fXUAvyA%2Bg2yCgPu%2FLYIEOUzzR%2F6vm2vy74uUYSS0KRjA1Vk5Gus9nbnnCySNtnEc7ZO1fjMZB5qOk24IivRkSfBR3HmE&X-Amz-Signature=bdcfacec42dbdbd86bb0cb9a1924e07548d514deb40bd6450e71012948ab7a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUE3DP4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICR2%2FOVMbXqlByNtmrO0KNeDd0SV6yEF7AkWkNAaqXhkAiBYvCT6UonGp%2BcRW0kvgU6pTggVGopomNFqwre7DR%2BLaiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCtRUOjoJfm4UjEwmKtwDwFpJrEVYluh3YjkEYLYakVTVWoBE09iWSzRIYIfhKa8cQt7JicoGyz%2FbtQyNyOD%2BlEt8CetrTQ71RtwD33QuXEZvdsJ5cBW7Cohx%2FLIJZ9xgPUn5S2OV4BtUb9%2BWAKwbMdu%2BECIqRBGpPyUq%2FI7haVGOoIlrw2F1xhBWICBN7kAhhDEy3m%2FFExdkfA3iu22OdFeSIoVbh4Egr7NR3wYWAD3YesjQlM2eFM0ELWbpWlklwO1IyIc5QzCIxqA4scQ6phTzUPzL%2Fe%2B1sIzxplx4MhQHP8OBRuCLhYMtpFvIElA6D6gZqFH%2Bd9TfNyANXt4%2FKYcEFiZ0qeejVV4CMRhDn87BiZ%2F106Oys9rjsQqM7iHQubYF%2Fd8uoDZeG17EMF9Sw33vIo75gL2uwK7x35najtlGNpvt%2FB6cRfWDZKOxZLCe1RIyD%2FqlGo0dqqT%2BF9Z3NAY0%2Fs%2BneI3FMG2PcTCpNs6TOCfT0Hlx9LmLrPmsRiSH8iPmsf6Rahw4%2BXAUam5G2GBt9qhMjwJJQak4h8wP45IssPL1U%2FQqRyByuOQ4oyhF4NJ2n4Ammr3K%2FEaulXaxV9NNwSeF32XhFvWH6G9HUuHgn%2F7ZnqZxaYZpGH1m5VGaqxePkLjJ8P1xAi4wo8G60wY6pgEA0NWLuDuhjjy21%2BG9QFHKxMPVETt2KpqFoRwpVX0lEzEiMsJo09gfPtyoJIoX4HM9agkQ8EWZQ6TUTosE7vJc1F%2BTV0WVqY1C%2BFPpUz2FahH2jZlsEtm%2Bmkd6CI33Ki7o9cN%2FrrsGQcefpHC1cb9Wby63bWjpPAC%2BmzVe0JcrDOuMEqEnOD9IxLDpKSER%2Brde1Wh7POTWHa4JJnXR1oObDRApwsmR&X-Amz-Signature=e557e0c6826a20a5824490cf218b37cda9e77bd0a15d6418d4841df06747fb2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUE3DP4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICR2%2FOVMbXqlByNtmrO0KNeDd0SV6yEF7AkWkNAaqXhkAiBYvCT6UonGp%2BcRW0kvgU6pTggVGopomNFqwre7DR%2BLaiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCtRUOjoJfm4UjEwmKtwDwFpJrEVYluh3YjkEYLYakVTVWoBE09iWSzRIYIfhKa8cQt7JicoGyz%2FbtQyNyOD%2BlEt8CetrTQ71RtwD33QuXEZvdsJ5cBW7Cohx%2FLIJZ9xgPUn5S2OV4BtUb9%2BWAKwbMdu%2BECIqRBGpPyUq%2FI7haVGOoIlrw2F1xhBWICBN7kAhhDEy3m%2FFExdkfA3iu22OdFeSIoVbh4Egr7NR3wYWAD3YesjQlM2eFM0ELWbpWlklwO1IyIc5QzCIxqA4scQ6phTzUPzL%2Fe%2B1sIzxplx4MhQHP8OBRuCLhYMtpFvIElA6D6gZqFH%2Bd9TfNyANXt4%2FKYcEFiZ0qeejVV4CMRhDn87BiZ%2F106Oys9rjsQqM7iHQubYF%2Fd8uoDZeG17EMF9Sw33vIo75gL2uwK7x35najtlGNpvt%2FB6cRfWDZKOxZLCe1RIyD%2FqlGo0dqqT%2BF9Z3NAY0%2Fs%2BneI3FMG2PcTCpNs6TOCfT0Hlx9LmLrPmsRiSH8iPmsf6Rahw4%2BXAUam5G2GBt9qhMjwJJQak4h8wP45IssPL1U%2FQqRyByuOQ4oyhF4NJ2n4Ammr3K%2FEaulXaxV9NNwSeF32XhFvWH6G9HUuHgn%2F7ZnqZxaYZpGH1m5VGaqxePkLjJ8P1xAi4wo8G60wY6pgEA0NWLuDuhjjy21%2BG9QFHKxMPVETt2KpqFoRwpVX0lEzEiMsJo09gfPtyoJIoX4HM9agkQ8EWZQ6TUTosE7vJc1F%2BTV0WVqY1C%2BFPpUz2FahH2jZlsEtm%2Bmkd6CI33Ki7o9cN%2FrrsGQcefpHC1cb9Wby63bWjpPAC%2BmzVe0JcrDOuMEqEnOD9IxLDpKSER%2Brde1Wh7POTWHa4JJnXR1oObDRApwsmR&X-Amz-Signature=9be6f09387ee12fc82103af0c2f58e8d0e808004b537e7b8e0f7db9c4976b1ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUE3DP4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICR2%2FOVMbXqlByNtmrO0KNeDd0SV6yEF7AkWkNAaqXhkAiBYvCT6UonGp%2BcRW0kvgU6pTggVGopomNFqwre7DR%2BLaiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCtRUOjoJfm4UjEwmKtwDwFpJrEVYluh3YjkEYLYakVTVWoBE09iWSzRIYIfhKa8cQt7JicoGyz%2FbtQyNyOD%2BlEt8CetrTQ71RtwD33QuXEZvdsJ5cBW7Cohx%2FLIJZ9xgPUn5S2OV4BtUb9%2BWAKwbMdu%2BECIqRBGpPyUq%2FI7haVGOoIlrw2F1xhBWICBN7kAhhDEy3m%2FFExdkfA3iu22OdFeSIoVbh4Egr7NR3wYWAD3YesjQlM2eFM0ELWbpWlklwO1IyIc5QzCIxqA4scQ6phTzUPzL%2Fe%2B1sIzxplx4MhQHP8OBRuCLhYMtpFvIElA6D6gZqFH%2Bd9TfNyANXt4%2FKYcEFiZ0qeejVV4CMRhDn87BiZ%2F106Oys9rjsQqM7iHQubYF%2Fd8uoDZeG17EMF9Sw33vIo75gL2uwK7x35najtlGNpvt%2FB6cRfWDZKOxZLCe1RIyD%2FqlGo0dqqT%2BF9Z3NAY0%2Fs%2BneI3FMG2PcTCpNs6TOCfT0Hlx9LmLrPmsRiSH8iPmsf6Rahw4%2BXAUam5G2GBt9qhMjwJJQak4h8wP45IssPL1U%2FQqRyByuOQ4oyhF4NJ2n4Ammr3K%2FEaulXaxV9NNwSeF32XhFvWH6G9HUuHgn%2F7ZnqZxaYZpGH1m5VGaqxePkLjJ8P1xAi4wo8G60wY6pgEA0NWLuDuhjjy21%2BG9QFHKxMPVETt2KpqFoRwpVX0lEzEiMsJo09gfPtyoJIoX4HM9agkQ8EWZQ6TUTosE7vJc1F%2BTV0WVqY1C%2BFPpUz2FahH2jZlsEtm%2Bmkd6CI33Ki7o9cN%2FrrsGQcefpHC1cb9Wby63bWjpPAC%2BmzVe0JcrDOuMEqEnOD9IxLDpKSER%2Brde1Wh7POTWHa4JJnXR1oObDRApwsmR&X-Amz-Signature=780d0a0f49fc18bb5f95c76928b60b162dc33fecdc183f922ce5679b221e55e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUE3DP4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICR2%2FOVMbXqlByNtmrO0KNeDd0SV6yEF7AkWkNAaqXhkAiBYvCT6UonGp%2BcRW0kvgU6pTggVGopomNFqwre7DR%2BLaiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCtRUOjoJfm4UjEwmKtwDwFpJrEVYluh3YjkEYLYakVTVWoBE09iWSzRIYIfhKa8cQt7JicoGyz%2FbtQyNyOD%2BlEt8CetrTQ71RtwD33QuXEZvdsJ5cBW7Cohx%2FLIJZ9xgPUn5S2OV4BtUb9%2BWAKwbMdu%2BECIqRBGpPyUq%2FI7haVGOoIlrw2F1xhBWICBN7kAhhDEy3m%2FFExdkfA3iu22OdFeSIoVbh4Egr7NR3wYWAD3YesjQlM2eFM0ELWbpWlklwO1IyIc5QzCIxqA4scQ6phTzUPzL%2Fe%2B1sIzxplx4MhQHP8OBRuCLhYMtpFvIElA6D6gZqFH%2Bd9TfNyANXt4%2FKYcEFiZ0qeejVV4CMRhDn87BiZ%2F106Oys9rjsQqM7iHQubYF%2Fd8uoDZeG17EMF9Sw33vIo75gL2uwK7x35najtlGNpvt%2FB6cRfWDZKOxZLCe1RIyD%2FqlGo0dqqT%2BF9Z3NAY0%2Fs%2BneI3FMG2PcTCpNs6TOCfT0Hlx9LmLrPmsRiSH8iPmsf6Rahw4%2BXAUam5G2GBt9qhMjwJJQak4h8wP45IssPL1U%2FQqRyByuOQ4oyhF4NJ2n4Ammr3K%2FEaulXaxV9NNwSeF32XhFvWH6G9HUuHgn%2F7ZnqZxaYZpGH1m5VGaqxePkLjJ8P1xAi4wo8G60wY6pgEA0NWLuDuhjjy21%2BG9QFHKxMPVETt2KpqFoRwpVX0lEzEiMsJo09gfPtyoJIoX4HM9agkQ8EWZQ6TUTosE7vJc1F%2BTV0WVqY1C%2BFPpUz2FahH2jZlsEtm%2Bmkd6CI33Ki7o9cN%2FrrsGQcefpHC1cb9Wby63bWjpPAC%2BmzVe0JcrDOuMEqEnOD9IxLDpKSER%2Brde1Wh7POTWHa4JJnXR1oObDRApwsmR&X-Amz-Signature=20f32e4f43655aad42a8d651aadf3318d1594590241e8cb4d88e673a2149a9ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X3ZQUHB%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCSntlYZFO9rypF5ksNm4mqbe8rfu1Ure2AT4aLvjD2BAIgW%2F3JEb2Kwn7Oy7CHwPJVgBapJLgrS%2BOooZbppcUIBPsqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0UTMjTuSu8DbGbgCrcA%2F8SSMrmDNnfw%2BqZs2AzU9npKI3p2Ct8C1pN4RfJXuaqCgpntskJDNITkQuIkTDEUIjKOvzQ01nVnRFDlD33LRsVZX6R8aliti9hKLrLJlFOP4FVu0ER0WQXSe59F5Rmzh1H0KtrKoHws6YF%2BQsnNIR7dbdSz5yjr1bDZRjfbLqBl%2BwjNXU9swxAW0%2Bf1cB42urQnrS8nkuLxNgjVOPGdN2BZ0M0%2F%2F%2BjaxDxQY%2FIspYlu3op1CVEr2vUH6js7gmkKDS1de2Srpz2BMQDzF0FD%2F97u3s5WlcV05L9cgagjsfw07UugqwAtU4tEd6M8mAA7rSEMZnEJUSj0P0aQ2JLan4WmQKiDxFaGZ2Bxhbmkbmd4yZwLTfcBjadYjGUnraKoEB%2Fg2Czf8ZSDwcaX9VapYsJsIZmWun%2B%2Fw5Vm6xhC4nsFy0ib%2FnsuCf79xT1vc8QQysoWJsBYJILTJ%2BkSm%2F8yzgQ5vHQ%2Fl0qpcINI0aopjc9J5kUSa24tEOd28HWLOJ5qWxND45pxinZCRqRrAgPr6%2FcMEecn2dKgofUWbBwZu6y7It9mjIr5%2F3BqjyPu0SEdXGcq7ZsbhDc%2FzNSDw9Hu%2FCSMhmCU6mTA9hJI5iGjIDJk5w3pu8R21p3LqjXMPvCutMGOqUBz4dovzUKqu7z%2F4JOHlH9z1dCYFaM2b8AL9GMMxT5XkHtua6OR1lY%2FtNHYmf6YBmsQ4CO%2Fd7fxZ9iI38mX4YOicq%2FS3O8uGX5Wwu0AQktX0iJvyMW%2FQ7KXEtbbHetqDhP6DZy3v%2F1SYEk86jrmnmOc7b434Jh%2B9mgANu9j4k%2FtIJAN5l2QBQGSM4lOJwdBcmLz3XuppxA2SJ8UBnPsxtnlgDut4c0&X-Amz-Signature=3d3c65ebf31e72a42ac81c6e4ce3205c10da9b1ec085685326c2a61d341f04b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUE3DP4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICR2%2FOVMbXqlByNtmrO0KNeDd0SV6yEF7AkWkNAaqXhkAiBYvCT6UonGp%2BcRW0kvgU6pTggVGopomNFqwre7DR%2BLaiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCtRUOjoJfm4UjEwmKtwDwFpJrEVYluh3YjkEYLYakVTVWoBE09iWSzRIYIfhKa8cQt7JicoGyz%2FbtQyNyOD%2BlEt8CetrTQ71RtwD33QuXEZvdsJ5cBW7Cohx%2FLIJZ9xgPUn5S2OV4BtUb9%2BWAKwbMdu%2BECIqRBGpPyUq%2FI7haVGOoIlrw2F1xhBWICBN7kAhhDEy3m%2FFExdkfA3iu22OdFeSIoVbh4Egr7NR3wYWAD3YesjQlM2eFM0ELWbpWlklwO1IyIc5QzCIxqA4scQ6phTzUPzL%2Fe%2B1sIzxplx4MhQHP8OBRuCLhYMtpFvIElA6D6gZqFH%2Bd9TfNyANXt4%2FKYcEFiZ0qeejVV4CMRhDn87BiZ%2F106Oys9rjsQqM7iHQubYF%2Fd8uoDZeG17EMF9Sw33vIo75gL2uwK7x35najtlGNpvt%2FB6cRfWDZKOxZLCe1RIyD%2FqlGo0dqqT%2BF9Z3NAY0%2Fs%2BneI3FMG2PcTCpNs6TOCfT0Hlx9LmLrPmsRiSH8iPmsf6Rahw4%2BXAUam5G2GBt9qhMjwJJQak4h8wP45IssPL1U%2FQqRyByuOQ4oyhF4NJ2n4Ammr3K%2FEaulXaxV9NNwSeF32XhFvWH6G9HUuHgn%2F7ZnqZxaYZpGH1m5VGaqxePkLjJ8P1xAi4wo8G60wY6pgEA0NWLuDuhjjy21%2BG9QFHKxMPVETt2KpqFoRwpVX0lEzEiMsJo09gfPtyoJIoX4HM9agkQ8EWZQ6TUTosE7vJc1F%2BTV0WVqY1C%2BFPpUz2FahH2jZlsEtm%2Bmkd6CI33Ki7o9cN%2FrrsGQcefpHC1cb9Wby63bWjpPAC%2BmzVe0JcrDOuMEqEnOD9IxLDpKSER%2Brde1Wh7POTWHa4JJnXR1oObDRApwsmR&X-Amz-Signature=74731e56af58119421cad0b3d817b49a1cfbcadad831975f5d51a45e5bcddfc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUE3DP4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICR2%2FOVMbXqlByNtmrO0KNeDd0SV6yEF7AkWkNAaqXhkAiBYvCT6UonGp%2BcRW0kvgU6pTggVGopomNFqwre7DR%2BLaiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCtRUOjoJfm4UjEwmKtwDwFpJrEVYluh3YjkEYLYakVTVWoBE09iWSzRIYIfhKa8cQt7JicoGyz%2FbtQyNyOD%2BlEt8CetrTQ71RtwD33QuXEZvdsJ5cBW7Cohx%2FLIJZ9xgPUn5S2OV4BtUb9%2BWAKwbMdu%2BECIqRBGpPyUq%2FI7haVGOoIlrw2F1xhBWICBN7kAhhDEy3m%2FFExdkfA3iu22OdFeSIoVbh4Egr7NR3wYWAD3YesjQlM2eFM0ELWbpWlklwO1IyIc5QzCIxqA4scQ6phTzUPzL%2Fe%2B1sIzxplx4MhQHP8OBRuCLhYMtpFvIElA6D6gZqFH%2Bd9TfNyANXt4%2FKYcEFiZ0qeejVV4CMRhDn87BiZ%2F106Oys9rjsQqM7iHQubYF%2Fd8uoDZeG17EMF9Sw33vIo75gL2uwK7x35najtlGNpvt%2FB6cRfWDZKOxZLCe1RIyD%2FqlGo0dqqT%2BF9Z3NAY0%2Fs%2BneI3FMG2PcTCpNs6TOCfT0Hlx9LmLrPmsRiSH8iPmsf6Rahw4%2BXAUam5G2GBt9qhMjwJJQak4h8wP45IssPL1U%2FQqRyByuOQ4oyhF4NJ2n4Ammr3K%2FEaulXaxV9NNwSeF32XhFvWH6G9HUuHgn%2F7ZnqZxaYZpGH1m5VGaqxePkLjJ8P1xAi4wo8G60wY6pgEA0NWLuDuhjjy21%2BG9QFHKxMPVETt2KpqFoRwpVX0lEzEiMsJo09gfPtyoJIoX4HM9agkQ8EWZQ6TUTosE7vJc1F%2BTV0WVqY1C%2BFPpUz2FahH2jZlsEtm%2Bmkd6CI33Ki7o9cN%2FrrsGQcefpHC1cb9Wby63bWjpPAC%2BmzVe0JcrDOuMEqEnOD9IxLDpKSER%2Brde1Wh7POTWHa4JJnXR1oObDRApwsmR&X-Amz-Signature=0af0033b02293bbdcd1d6bb92db24744c3eba6f12ec57eb08acfc52241757bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUE3DP4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICR2%2FOVMbXqlByNtmrO0KNeDd0SV6yEF7AkWkNAaqXhkAiBYvCT6UonGp%2BcRW0kvgU6pTggVGopomNFqwre7DR%2BLaiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCtRUOjoJfm4UjEwmKtwDwFpJrEVYluh3YjkEYLYakVTVWoBE09iWSzRIYIfhKa8cQt7JicoGyz%2FbtQyNyOD%2BlEt8CetrTQ71RtwD33QuXEZvdsJ5cBW7Cohx%2FLIJZ9xgPUn5S2OV4BtUb9%2BWAKwbMdu%2BECIqRBGpPyUq%2FI7haVGOoIlrw2F1xhBWICBN7kAhhDEy3m%2FFExdkfA3iu22OdFeSIoVbh4Egr7NR3wYWAD3YesjQlM2eFM0ELWbpWlklwO1IyIc5QzCIxqA4scQ6phTzUPzL%2Fe%2B1sIzxplx4MhQHP8OBRuCLhYMtpFvIElA6D6gZqFH%2Bd9TfNyANXt4%2FKYcEFiZ0qeejVV4CMRhDn87BiZ%2F106Oys9rjsQqM7iHQubYF%2Fd8uoDZeG17EMF9Sw33vIo75gL2uwK7x35najtlGNpvt%2FB6cRfWDZKOxZLCe1RIyD%2FqlGo0dqqT%2BF9Z3NAY0%2Fs%2BneI3FMG2PcTCpNs6TOCfT0Hlx9LmLrPmsRiSH8iPmsf6Rahw4%2BXAUam5G2GBt9qhMjwJJQak4h8wP45IssPL1U%2FQqRyByuOQ4oyhF4NJ2n4Ammr3K%2FEaulXaxV9NNwSeF32XhFvWH6G9HUuHgn%2F7ZnqZxaYZpGH1m5VGaqxePkLjJ8P1xAi4wo8G60wY6pgEA0NWLuDuhjjy21%2BG9QFHKxMPVETt2KpqFoRwpVX0lEzEiMsJo09gfPtyoJIoX4HM9agkQ8EWZQ6TUTosE7vJc1F%2BTV0WVqY1C%2BFPpUz2FahH2jZlsEtm%2Bmkd6CI33Ki7o9cN%2FrrsGQcefpHC1cb9Wby63bWjpPAC%2BmzVe0JcrDOuMEqEnOD9IxLDpKSER%2Brde1Wh7POTWHa4JJnXR1oObDRApwsmR&X-Amz-Signature=780d0a0f49fc18bb5f95c76928b60b162dc33fecdc183f922ce5679b221e55e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUE3DP4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICR2%2FOVMbXqlByNtmrO0KNeDd0SV6yEF7AkWkNAaqXhkAiBYvCT6UonGp%2BcRW0kvgU6pTggVGopomNFqwre7DR%2BLaiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCtRUOjoJfm4UjEwmKtwDwFpJrEVYluh3YjkEYLYakVTVWoBE09iWSzRIYIfhKa8cQt7JicoGyz%2FbtQyNyOD%2BlEt8CetrTQ71RtwD33QuXEZvdsJ5cBW7Cohx%2FLIJZ9xgPUn5S2OV4BtUb9%2BWAKwbMdu%2BECIqRBGpPyUq%2FI7haVGOoIlrw2F1xhBWICBN7kAhhDEy3m%2FFExdkfA3iu22OdFeSIoVbh4Egr7NR3wYWAD3YesjQlM2eFM0ELWbpWlklwO1IyIc5QzCIxqA4scQ6phTzUPzL%2Fe%2B1sIzxplx4MhQHP8OBRuCLhYMtpFvIElA6D6gZqFH%2Bd9TfNyANXt4%2FKYcEFiZ0qeejVV4CMRhDn87BiZ%2F106Oys9rjsQqM7iHQubYF%2Fd8uoDZeG17EMF9Sw33vIo75gL2uwK7x35najtlGNpvt%2FB6cRfWDZKOxZLCe1RIyD%2FqlGo0dqqT%2BF9Z3NAY0%2Fs%2BneI3FMG2PcTCpNs6TOCfT0Hlx9LmLrPmsRiSH8iPmsf6Rahw4%2BXAUam5G2GBt9qhMjwJJQak4h8wP45IssPL1U%2FQqRyByuOQ4oyhF4NJ2n4Ammr3K%2FEaulXaxV9NNwSeF32XhFvWH6G9HUuHgn%2F7ZnqZxaYZpGH1m5VGaqxePkLjJ8P1xAi4wo8G60wY6pgEA0NWLuDuhjjy21%2BG9QFHKxMPVETt2KpqFoRwpVX0lEzEiMsJo09gfPtyoJIoX4HM9agkQ8EWZQ6TUTosE7vJc1F%2BTV0WVqY1C%2BFPpUz2FahH2jZlsEtm%2Bmkd6CI33Ki7o9cN%2FrrsGQcefpHC1cb9Wby63bWjpPAC%2BmzVe0JcrDOuMEqEnOD9IxLDpKSER%2Brde1Wh7POTWHa4JJnXR1oObDRApwsmR&X-Amz-Signature=f5b409aadc8cdca30005c4a96a9faa80532a644655fc2abfb4b3a23a1feb19f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUE3DP4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICR2%2FOVMbXqlByNtmrO0KNeDd0SV6yEF7AkWkNAaqXhkAiBYvCT6UonGp%2BcRW0kvgU6pTggVGopomNFqwre7DR%2BLaiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCtRUOjoJfm4UjEwmKtwDwFpJrEVYluh3YjkEYLYakVTVWoBE09iWSzRIYIfhKa8cQt7JicoGyz%2FbtQyNyOD%2BlEt8CetrTQ71RtwD33QuXEZvdsJ5cBW7Cohx%2FLIJZ9xgPUn5S2OV4BtUb9%2BWAKwbMdu%2BECIqRBGpPyUq%2FI7haVGOoIlrw2F1xhBWICBN7kAhhDEy3m%2FFExdkfA3iu22OdFeSIoVbh4Egr7NR3wYWAD3YesjQlM2eFM0ELWbpWlklwO1IyIc5QzCIxqA4scQ6phTzUPzL%2Fe%2B1sIzxplx4MhQHP8OBRuCLhYMtpFvIElA6D6gZqFH%2Bd9TfNyANXt4%2FKYcEFiZ0qeejVV4CMRhDn87BiZ%2F106Oys9rjsQqM7iHQubYF%2Fd8uoDZeG17EMF9Sw33vIo75gL2uwK7x35najtlGNpvt%2FB6cRfWDZKOxZLCe1RIyD%2FqlGo0dqqT%2BF9Z3NAY0%2Fs%2BneI3FMG2PcTCpNs6TOCfT0Hlx9LmLrPmsRiSH8iPmsf6Rahw4%2BXAUam5G2GBt9qhMjwJJQak4h8wP45IssPL1U%2FQqRyByuOQ4oyhF4NJ2n4Ammr3K%2FEaulXaxV9NNwSeF32XhFvWH6G9HUuHgn%2F7ZnqZxaYZpGH1m5VGaqxePkLjJ8P1xAi4wo8G60wY6pgEA0NWLuDuhjjy21%2BG9QFHKxMPVETt2KpqFoRwpVX0lEzEiMsJo09gfPtyoJIoX4HM9agkQ8EWZQ6TUTosE7vJc1F%2BTV0WVqY1C%2BFPpUz2FahH2jZlsEtm%2Bmkd6CI33Ki7o9cN%2FrrsGQcefpHC1cb9Wby63bWjpPAC%2BmzVe0JcrDOuMEqEnOD9IxLDpKSER%2Brde1Wh7POTWHa4JJnXR1oObDRApwsmR&X-Amz-Signature=1f9c967071d660b164faa6cb75f78e50593bb798834a25b26ace76b6314bc0d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUE3DP4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICR2%2FOVMbXqlByNtmrO0KNeDd0SV6yEF7AkWkNAaqXhkAiBYvCT6UonGp%2BcRW0kvgU6pTggVGopomNFqwre7DR%2BLaiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCtRUOjoJfm4UjEwmKtwDwFpJrEVYluh3YjkEYLYakVTVWoBE09iWSzRIYIfhKa8cQt7JicoGyz%2FbtQyNyOD%2BlEt8CetrTQ71RtwD33QuXEZvdsJ5cBW7Cohx%2FLIJZ9xgPUn5S2OV4BtUb9%2BWAKwbMdu%2BECIqRBGpPyUq%2FI7haVGOoIlrw2F1xhBWICBN7kAhhDEy3m%2FFExdkfA3iu22OdFeSIoVbh4Egr7NR3wYWAD3YesjQlM2eFM0ELWbpWlklwO1IyIc5QzCIxqA4scQ6phTzUPzL%2Fe%2B1sIzxplx4MhQHP8OBRuCLhYMtpFvIElA6D6gZqFH%2Bd9TfNyANXt4%2FKYcEFiZ0qeejVV4CMRhDn87BiZ%2F106Oys9rjsQqM7iHQubYF%2Fd8uoDZeG17EMF9Sw33vIo75gL2uwK7x35najtlGNpvt%2FB6cRfWDZKOxZLCe1RIyD%2FqlGo0dqqT%2BF9Z3NAY0%2Fs%2BneI3FMG2PcTCpNs6TOCfT0Hlx9LmLrPmsRiSH8iPmsf6Rahw4%2BXAUam5G2GBt9qhMjwJJQak4h8wP45IssPL1U%2FQqRyByuOQ4oyhF4NJ2n4Ammr3K%2FEaulXaxV9NNwSeF32XhFvWH6G9HUuHgn%2F7ZnqZxaYZpGH1m5VGaqxePkLjJ8P1xAi4wo8G60wY6pgEA0NWLuDuhjjy21%2BG9QFHKxMPVETt2KpqFoRwpVX0lEzEiMsJo09gfPtyoJIoX4HM9agkQ8EWZQ6TUTosE7vJc1F%2BTV0WVqY1C%2BFPpUz2FahH2jZlsEtm%2Bmkd6CI33Ki7o9cN%2FrrsGQcefpHC1cb9Wby63bWjpPAC%2BmzVe0JcrDOuMEqEnOD9IxLDpKSER%2Brde1Wh7POTWHa4JJnXR1oObDRApwsmR&X-Amz-Signature=504f4b062b4dcb36db016344554bfdacc2eb7e9ef92b57f9a905e5602da0d1ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


