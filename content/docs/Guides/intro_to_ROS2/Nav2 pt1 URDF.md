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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJNSF5E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIE3bIYMVeU0I3bx9VFE1sAD%2BhJ5UMcdDBQ1vi1zVw99mAiEA7o3TeeZsss1fTjqBOIJjGdnx%2FLNBml3BUAQwqODazpsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFduDQVO6egJ8X0k%2FircA4saiRzuuakTa61W3h894HwXVdSBkGk2U5gz1xpsI4zTXES8d8NJ1XoHqc6cWlQ1kT4IaaMP%2B62rYo3yF%2BIQiXdAhl%2BA70PIqBVAgVa25IWtb3SSLKfG8orzOUIkqlow5g2NteXZkRCe49NlfyrUtRrxIHubulH%2BTkBUou5slJu287cQqJjq8AqG3e74mlhwBhPI84PDriqYeEH5Ur1pX9J183prn8YEWQ9r%2BKg2odeQmpEaz6%2Fz43%2FNvnnhJAS7YjXOBjpvWlStE6OqgNkyf%2BFaPoTJI9vwbsQGVZ%2BlweijpiD7P4%2FOxmMZbu%2FtrbWQq79p6g9SE0xqwaXS8G9CQfbKV1DPto1XJcIdS8lkrj4%2BpL%2F4cn5yc%2FE5mQckV1X9%2FHUri3KoGDvwbDpYY1PMxGeU7uEVPSEJoGoTFOTHchPrpzpX71g1ovcYdfEFjLoq25qrJbIC2%2B8x3JyylIknCLzrSOvMLq3Lgz4zTXcsGzUbhAdIE9wRV4bPBRhP2XcKjA782IE3cvBBPL85MsnJPyu%2B52s5vzUB%2FttOVIr2lgmlZb%2FAiX2ZvkizXZwA03mzRAd1RK66qGyYbAQQ8ON0shl%2FVDus3dHEIMe31woDs4A1b0F0UJFDKbSd3U8lMKbE28QGOqUBW3Iyv7mSe99c%2BYIKF12tPK8h3CLZMuVJm9hE1A6QBmjj6MDJc%2Boy30iDxSNh5gnaLCy%2FjnTrVWh28NR%2FtaAv%2FVN4S41bn%2FB1HuI3C42J4ugkjQl3PEmSaApBmYYCGhTNWWODKTFHQj7WDERUMtK8Q3slSIGmM0unAVmfmNry8%2FXzyWREMa6a3J7YGj4wX14a3x1l2fLe%2F0iAftcCXs1R5TmtzD8W&X-Amz-Signature=20417b6d568d24ebda5b61aa76f32da466d8c550f80df066f3099e92a407628a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJNSF5E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIE3bIYMVeU0I3bx9VFE1sAD%2BhJ5UMcdDBQ1vi1zVw99mAiEA7o3TeeZsss1fTjqBOIJjGdnx%2FLNBml3BUAQwqODazpsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFduDQVO6egJ8X0k%2FircA4saiRzuuakTa61W3h894HwXVdSBkGk2U5gz1xpsI4zTXES8d8NJ1XoHqc6cWlQ1kT4IaaMP%2B62rYo3yF%2BIQiXdAhl%2BA70PIqBVAgVa25IWtb3SSLKfG8orzOUIkqlow5g2NteXZkRCe49NlfyrUtRrxIHubulH%2BTkBUou5slJu287cQqJjq8AqG3e74mlhwBhPI84PDriqYeEH5Ur1pX9J183prn8YEWQ9r%2BKg2odeQmpEaz6%2Fz43%2FNvnnhJAS7YjXOBjpvWlStE6OqgNkyf%2BFaPoTJI9vwbsQGVZ%2BlweijpiD7P4%2FOxmMZbu%2FtrbWQq79p6g9SE0xqwaXS8G9CQfbKV1DPto1XJcIdS8lkrj4%2BpL%2F4cn5yc%2FE5mQckV1X9%2FHUri3KoGDvwbDpYY1PMxGeU7uEVPSEJoGoTFOTHchPrpzpX71g1ovcYdfEFjLoq25qrJbIC2%2B8x3JyylIknCLzrSOvMLq3Lgz4zTXcsGzUbhAdIE9wRV4bPBRhP2XcKjA782IE3cvBBPL85MsnJPyu%2B52s5vzUB%2FttOVIr2lgmlZb%2FAiX2ZvkizXZwA03mzRAd1RK66qGyYbAQQ8ON0shl%2FVDus3dHEIMe31woDs4A1b0F0UJFDKbSd3U8lMKbE28QGOqUBW3Iyv7mSe99c%2BYIKF12tPK8h3CLZMuVJm9hE1A6QBmjj6MDJc%2Boy30iDxSNh5gnaLCy%2FjnTrVWh28NR%2FtaAv%2FVN4S41bn%2FB1HuI3C42J4ugkjQl3PEmSaApBmYYCGhTNWWODKTFHQj7WDERUMtK8Q3slSIGmM0unAVmfmNry8%2FXzyWREMa6a3J7YGj4wX14a3x1l2fLe%2F0iAftcCXs1R5TmtzD8W&X-Amz-Signature=a4ece87d457afff558557adf03f6a8a50513c9598f18204f207de4d4349ed38b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJNSF5E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIE3bIYMVeU0I3bx9VFE1sAD%2BhJ5UMcdDBQ1vi1zVw99mAiEA7o3TeeZsss1fTjqBOIJjGdnx%2FLNBml3BUAQwqODazpsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFduDQVO6egJ8X0k%2FircA4saiRzuuakTa61W3h894HwXVdSBkGk2U5gz1xpsI4zTXES8d8NJ1XoHqc6cWlQ1kT4IaaMP%2B62rYo3yF%2BIQiXdAhl%2BA70PIqBVAgVa25IWtb3SSLKfG8orzOUIkqlow5g2NteXZkRCe49NlfyrUtRrxIHubulH%2BTkBUou5slJu287cQqJjq8AqG3e74mlhwBhPI84PDriqYeEH5Ur1pX9J183prn8YEWQ9r%2BKg2odeQmpEaz6%2Fz43%2FNvnnhJAS7YjXOBjpvWlStE6OqgNkyf%2BFaPoTJI9vwbsQGVZ%2BlweijpiD7P4%2FOxmMZbu%2FtrbWQq79p6g9SE0xqwaXS8G9CQfbKV1DPto1XJcIdS8lkrj4%2BpL%2F4cn5yc%2FE5mQckV1X9%2FHUri3KoGDvwbDpYY1PMxGeU7uEVPSEJoGoTFOTHchPrpzpX71g1ovcYdfEFjLoq25qrJbIC2%2B8x3JyylIknCLzrSOvMLq3Lgz4zTXcsGzUbhAdIE9wRV4bPBRhP2XcKjA782IE3cvBBPL85MsnJPyu%2B52s5vzUB%2FttOVIr2lgmlZb%2FAiX2ZvkizXZwA03mzRAd1RK66qGyYbAQQ8ON0shl%2FVDus3dHEIMe31woDs4A1b0F0UJFDKbSd3U8lMKbE28QGOqUBW3Iyv7mSe99c%2BYIKF12tPK8h3CLZMuVJm9hE1A6QBmjj6MDJc%2Boy30iDxSNh5gnaLCy%2FjnTrVWh28NR%2FtaAv%2FVN4S41bn%2FB1HuI3C42J4ugkjQl3PEmSaApBmYYCGhTNWWODKTFHQj7WDERUMtK8Q3slSIGmM0unAVmfmNry8%2FXzyWREMa6a3J7YGj4wX14a3x1l2fLe%2F0iAftcCXs1R5TmtzD8W&X-Amz-Signature=a81adc021dec9fc08a3cfd541d4fffde33dbaef95e2ddfa4bd63c52b1916a7a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJNSF5E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIE3bIYMVeU0I3bx9VFE1sAD%2BhJ5UMcdDBQ1vi1zVw99mAiEA7o3TeeZsss1fTjqBOIJjGdnx%2FLNBml3BUAQwqODazpsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFduDQVO6egJ8X0k%2FircA4saiRzuuakTa61W3h894HwXVdSBkGk2U5gz1xpsI4zTXES8d8NJ1XoHqc6cWlQ1kT4IaaMP%2B62rYo3yF%2BIQiXdAhl%2BA70PIqBVAgVa25IWtb3SSLKfG8orzOUIkqlow5g2NteXZkRCe49NlfyrUtRrxIHubulH%2BTkBUou5slJu287cQqJjq8AqG3e74mlhwBhPI84PDriqYeEH5Ur1pX9J183prn8YEWQ9r%2BKg2odeQmpEaz6%2Fz43%2FNvnnhJAS7YjXOBjpvWlStE6OqgNkyf%2BFaPoTJI9vwbsQGVZ%2BlweijpiD7P4%2FOxmMZbu%2FtrbWQq79p6g9SE0xqwaXS8G9CQfbKV1DPto1XJcIdS8lkrj4%2BpL%2F4cn5yc%2FE5mQckV1X9%2FHUri3KoGDvwbDpYY1PMxGeU7uEVPSEJoGoTFOTHchPrpzpX71g1ovcYdfEFjLoq25qrJbIC2%2B8x3JyylIknCLzrSOvMLq3Lgz4zTXcsGzUbhAdIE9wRV4bPBRhP2XcKjA782IE3cvBBPL85MsnJPyu%2B52s5vzUB%2FttOVIr2lgmlZb%2FAiX2ZvkizXZwA03mzRAd1RK66qGyYbAQQ8ON0shl%2FVDus3dHEIMe31woDs4A1b0F0UJFDKbSd3U8lMKbE28QGOqUBW3Iyv7mSe99c%2BYIKF12tPK8h3CLZMuVJm9hE1A6QBmjj6MDJc%2Boy30iDxSNh5gnaLCy%2FjnTrVWh28NR%2FtaAv%2FVN4S41bn%2FB1HuI3C42J4ugkjQl3PEmSaApBmYYCGhTNWWODKTFHQj7WDERUMtK8Q3slSIGmM0unAVmfmNry8%2FXzyWREMa6a3J7YGj4wX14a3x1l2fLe%2F0iAftcCXs1R5TmtzD8W&X-Amz-Signature=e719ab4dc71d8b51c212100d13cfd16ff49c9652d67748ef5de003f10e7a3e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJNSF5E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIE3bIYMVeU0I3bx9VFE1sAD%2BhJ5UMcdDBQ1vi1zVw99mAiEA7o3TeeZsss1fTjqBOIJjGdnx%2FLNBml3BUAQwqODazpsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFduDQVO6egJ8X0k%2FircA4saiRzuuakTa61W3h894HwXVdSBkGk2U5gz1xpsI4zTXES8d8NJ1XoHqc6cWlQ1kT4IaaMP%2B62rYo3yF%2BIQiXdAhl%2BA70PIqBVAgVa25IWtb3SSLKfG8orzOUIkqlow5g2NteXZkRCe49NlfyrUtRrxIHubulH%2BTkBUou5slJu287cQqJjq8AqG3e74mlhwBhPI84PDriqYeEH5Ur1pX9J183prn8YEWQ9r%2BKg2odeQmpEaz6%2Fz43%2FNvnnhJAS7YjXOBjpvWlStE6OqgNkyf%2BFaPoTJI9vwbsQGVZ%2BlweijpiD7P4%2FOxmMZbu%2FtrbWQq79p6g9SE0xqwaXS8G9CQfbKV1DPto1XJcIdS8lkrj4%2BpL%2F4cn5yc%2FE5mQckV1X9%2FHUri3KoGDvwbDpYY1PMxGeU7uEVPSEJoGoTFOTHchPrpzpX71g1ovcYdfEFjLoq25qrJbIC2%2B8x3JyylIknCLzrSOvMLq3Lgz4zTXcsGzUbhAdIE9wRV4bPBRhP2XcKjA782IE3cvBBPL85MsnJPyu%2B52s5vzUB%2FttOVIr2lgmlZb%2FAiX2ZvkizXZwA03mzRAd1RK66qGyYbAQQ8ON0shl%2FVDus3dHEIMe31woDs4A1b0F0UJFDKbSd3U8lMKbE28QGOqUBW3Iyv7mSe99c%2BYIKF12tPK8h3CLZMuVJm9hE1A6QBmjj6MDJc%2Boy30iDxSNh5gnaLCy%2FjnTrVWh28NR%2FtaAv%2FVN4S41bn%2FB1HuI3C42J4ugkjQl3PEmSaApBmYYCGhTNWWODKTFHQj7WDERUMtK8Q3slSIGmM0unAVmfmNry8%2FXzyWREMa6a3J7YGj4wX14a3x1l2fLe%2F0iAftcCXs1R5TmtzD8W&X-Amz-Signature=2f65171151b1d19e4c13f65708a35e34eabb4ccd9a9d77b339f247179c94dd4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJNSF5E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIE3bIYMVeU0I3bx9VFE1sAD%2BhJ5UMcdDBQ1vi1zVw99mAiEA7o3TeeZsss1fTjqBOIJjGdnx%2FLNBml3BUAQwqODazpsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFduDQVO6egJ8X0k%2FircA4saiRzuuakTa61W3h894HwXVdSBkGk2U5gz1xpsI4zTXES8d8NJ1XoHqc6cWlQ1kT4IaaMP%2B62rYo3yF%2BIQiXdAhl%2BA70PIqBVAgVa25IWtb3SSLKfG8orzOUIkqlow5g2NteXZkRCe49NlfyrUtRrxIHubulH%2BTkBUou5slJu287cQqJjq8AqG3e74mlhwBhPI84PDriqYeEH5Ur1pX9J183prn8YEWQ9r%2BKg2odeQmpEaz6%2Fz43%2FNvnnhJAS7YjXOBjpvWlStE6OqgNkyf%2BFaPoTJI9vwbsQGVZ%2BlweijpiD7P4%2FOxmMZbu%2FtrbWQq79p6g9SE0xqwaXS8G9CQfbKV1DPto1XJcIdS8lkrj4%2BpL%2F4cn5yc%2FE5mQckV1X9%2FHUri3KoGDvwbDpYY1PMxGeU7uEVPSEJoGoTFOTHchPrpzpX71g1ovcYdfEFjLoq25qrJbIC2%2B8x3JyylIknCLzrSOvMLq3Lgz4zTXcsGzUbhAdIE9wRV4bPBRhP2XcKjA782IE3cvBBPL85MsnJPyu%2B52s5vzUB%2FttOVIr2lgmlZb%2FAiX2ZvkizXZwA03mzRAd1RK66qGyYbAQQ8ON0shl%2FVDus3dHEIMe31woDs4A1b0F0UJFDKbSd3U8lMKbE28QGOqUBW3Iyv7mSe99c%2BYIKF12tPK8h3CLZMuVJm9hE1A6QBmjj6MDJc%2Boy30iDxSNh5gnaLCy%2FjnTrVWh28NR%2FtaAv%2FVN4S41bn%2FB1HuI3C42J4ugkjQl3PEmSaApBmYYCGhTNWWODKTFHQj7WDERUMtK8Q3slSIGmM0unAVmfmNry8%2FXzyWREMa6a3J7YGj4wX14a3x1l2fLe%2F0iAftcCXs1R5TmtzD8W&X-Amz-Signature=90532b8b91b5ba1a6799df82c669f2ac3380335208114888ed404f495420f913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJNSF5E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIE3bIYMVeU0I3bx9VFE1sAD%2BhJ5UMcdDBQ1vi1zVw99mAiEA7o3TeeZsss1fTjqBOIJjGdnx%2FLNBml3BUAQwqODazpsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFduDQVO6egJ8X0k%2FircA4saiRzuuakTa61W3h894HwXVdSBkGk2U5gz1xpsI4zTXES8d8NJ1XoHqc6cWlQ1kT4IaaMP%2B62rYo3yF%2BIQiXdAhl%2BA70PIqBVAgVa25IWtb3SSLKfG8orzOUIkqlow5g2NteXZkRCe49NlfyrUtRrxIHubulH%2BTkBUou5slJu287cQqJjq8AqG3e74mlhwBhPI84PDriqYeEH5Ur1pX9J183prn8YEWQ9r%2BKg2odeQmpEaz6%2Fz43%2FNvnnhJAS7YjXOBjpvWlStE6OqgNkyf%2BFaPoTJI9vwbsQGVZ%2BlweijpiD7P4%2FOxmMZbu%2FtrbWQq79p6g9SE0xqwaXS8G9CQfbKV1DPto1XJcIdS8lkrj4%2BpL%2F4cn5yc%2FE5mQckV1X9%2FHUri3KoGDvwbDpYY1PMxGeU7uEVPSEJoGoTFOTHchPrpzpX71g1ovcYdfEFjLoq25qrJbIC2%2B8x3JyylIknCLzrSOvMLq3Lgz4zTXcsGzUbhAdIE9wRV4bPBRhP2XcKjA782IE3cvBBPL85MsnJPyu%2B52s5vzUB%2FttOVIr2lgmlZb%2FAiX2ZvkizXZwA03mzRAd1RK66qGyYbAQQ8ON0shl%2FVDus3dHEIMe31woDs4A1b0F0UJFDKbSd3U8lMKbE28QGOqUBW3Iyv7mSe99c%2BYIKF12tPK8h3CLZMuVJm9hE1A6QBmjj6MDJc%2Boy30iDxSNh5gnaLCy%2FjnTrVWh28NR%2FtaAv%2FVN4S41bn%2FB1HuI3C42J4ugkjQl3PEmSaApBmYYCGhTNWWODKTFHQj7WDERUMtK8Q3slSIGmM0unAVmfmNry8%2FXzyWREMa6a3J7YGj4wX14a3x1l2fLe%2F0iAftcCXs1R5TmtzD8W&X-Amz-Signature=856c54398a1d0698c68b8d9fe2013ed6d731d4bb4852e0f8443cfdb88f796313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJNSF5E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIE3bIYMVeU0I3bx9VFE1sAD%2BhJ5UMcdDBQ1vi1zVw99mAiEA7o3TeeZsss1fTjqBOIJjGdnx%2FLNBml3BUAQwqODazpsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFduDQVO6egJ8X0k%2FircA4saiRzuuakTa61W3h894HwXVdSBkGk2U5gz1xpsI4zTXES8d8NJ1XoHqc6cWlQ1kT4IaaMP%2B62rYo3yF%2BIQiXdAhl%2BA70PIqBVAgVa25IWtb3SSLKfG8orzOUIkqlow5g2NteXZkRCe49NlfyrUtRrxIHubulH%2BTkBUou5slJu287cQqJjq8AqG3e74mlhwBhPI84PDriqYeEH5Ur1pX9J183prn8YEWQ9r%2BKg2odeQmpEaz6%2Fz43%2FNvnnhJAS7YjXOBjpvWlStE6OqgNkyf%2BFaPoTJI9vwbsQGVZ%2BlweijpiD7P4%2FOxmMZbu%2FtrbWQq79p6g9SE0xqwaXS8G9CQfbKV1DPto1XJcIdS8lkrj4%2BpL%2F4cn5yc%2FE5mQckV1X9%2FHUri3KoGDvwbDpYY1PMxGeU7uEVPSEJoGoTFOTHchPrpzpX71g1ovcYdfEFjLoq25qrJbIC2%2B8x3JyylIknCLzrSOvMLq3Lgz4zTXcsGzUbhAdIE9wRV4bPBRhP2XcKjA782IE3cvBBPL85MsnJPyu%2B52s5vzUB%2FttOVIr2lgmlZb%2FAiX2ZvkizXZwA03mzRAd1RK66qGyYbAQQ8ON0shl%2FVDus3dHEIMe31woDs4A1b0F0UJFDKbSd3U8lMKbE28QGOqUBW3Iyv7mSe99c%2BYIKF12tPK8h3CLZMuVJm9hE1A6QBmjj6MDJc%2Boy30iDxSNh5gnaLCy%2FjnTrVWh28NR%2FtaAv%2FVN4S41bn%2FB1HuI3C42J4ugkjQl3PEmSaApBmYYCGhTNWWODKTFHQj7WDERUMtK8Q3slSIGmM0unAVmfmNry8%2FXzyWREMa6a3J7YGj4wX14a3x1l2fLe%2F0iAftcCXs1R5TmtzD8W&X-Amz-Signature=02ebe40ac5fb50dd9b0ddc94ba3487e748ab4f38747df7910b2eca52cd477e48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJNSF5E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIE3bIYMVeU0I3bx9VFE1sAD%2BhJ5UMcdDBQ1vi1zVw99mAiEA7o3TeeZsss1fTjqBOIJjGdnx%2FLNBml3BUAQwqODazpsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFduDQVO6egJ8X0k%2FircA4saiRzuuakTa61W3h894HwXVdSBkGk2U5gz1xpsI4zTXES8d8NJ1XoHqc6cWlQ1kT4IaaMP%2B62rYo3yF%2BIQiXdAhl%2BA70PIqBVAgVa25IWtb3SSLKfG8orzOUIkqlow5g2NteXZkRCe49NlfyrUtRrxIHubulH%2BTkBUou5slJu287cQqJjq8AqG3e74mlhwBhPI84PDriqYeEH5Ur1pX9J183prn8YEWQ9r%2BKg2odeQmpEaz6%2Fz43%2FNvnnhJAS7YjXOBjpvWlStE6OqgNkyf%2BFaPoTJI9vwbsQGVZ%2BlweijpiD7P4%2FOxmMZbu%2FtrbWQq79p6g9SE0xqwaXS8G9CQfbKV1DPto1XJcIdS8lkrj4%2BpL%2F4cn5yc%2FE5mQckV1X9%2FHUri3KoGDvwbDpYY1PMxGeU7uEVPSEJoGoTFOTHchPrpzpX71g1ovcYdfEFjLoq25qrJbIC2%2B8x3JyylIknCLzrSOvMLq3Lgz4zTXcsGzUbhAdIE9wRV4bPBRhP2XcKjA782IE3cvBBPL85MsnJPyu%2B52s5vzUB%2FttOVIr2lgmlZb%2FAiX2ZvkizXZwA03mzRAd1RK66qGyYbAQQ8ON0shl%2FVDus3dHEIMe31woDs4A1b0F0UJFDKbSd3U8lMKbE28QGOqUBW3Iyv7mSe99c%2BYIKF12tPK8h3CLZMuVJm9hE1A6QBmjj6MDJc%2Boy30iDxSNh5gnaLCy%2FjnTrVWh28NR%2FtaAv%2FVN4S41bn%2FB1HuI3C42J4ugkjQl3PEmSaApBmYYCGhTNWWODKTFHQj7WDERUMtK8Q3slSIGmM0unAVmfmNry8%2FXzyWREMa6a3J7YGj4wX14a3x1l2fLe%2F0iAftcCXs1R5TmtzD8W&X-Amz-Signature=0a480e2f289224c3a835543b31ab8f3d9a56180251502cbc5808d61218106f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJNSF5E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIE3bIYMVeU0I3bx9VFE1sAD%2BhJ5UMcdDBQ1vi1zVw99mAiEA7o3TeeZsss1fTjqBOIJjGdnx%2FLNBml3BUAQwqODazpsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFduDQVO6egJ8X0k%2FircA4saiRzuuakTa61W3h894HwXVdSBkGk2U5gz1xpsI4zTXES8d8NJ1XoHqc6cWlQ1kT4IaaMP%2B62rYo3yF%2BIQiXdAhl%2BA70PIqBVAgVa25IWtb3SSLKfG8orzOUIkqlow5g2NteXZkRCe49NlfyrUtRrxIHubulH%2BTkBUou5slJu287cQqJjq8AqG3e74mlhwBhPI84PDriqYeEH5Ur1pX9J183prn8YEWQ9r%2BKg2odeQmpEaz6%2Fz43%2FNvnnhJAS7YjXOBjpvWlStE6OqgNkyf%2BFaPoTJI9vwbsQGVZ%2BlweijpiD7P4%2FOxmMZbu%2FtrbWQq79p6g9SE0xqwaXS8G9CQfbKV1DPto1XJcIdS8lkrj4%2BpL%2F4cn5yc%2FE5mQckV1X9%2FHUri3KoGDvwbDpYY1PMxGeU7uEVPSEJoGoTFOTHchPrpzpX71g1ovcYdfEFjLoq25qrJbIC2%2B8x3JyylIknCLzrSOvMLq3Lgz4zTXcsGzUbhAdIE9wRV4bPBRhP2XcKjA782IE3cvBBPL85MsnJPyu%2B52s5vzUB%2FttOVIr2lgmlZb%2FAiX2ZvkizXZwA03mzRAd1RK66qGyYbAQQ8ON0shl%2FVDus3dHEIMe31woDs4A1b0F0UJFDKbSd3U8lMKbE28QGOqUBW3Iyv7mSe99c%2BYIKF12tPK8h3CLZMuVJm9hE1A6QBmjj6MDJc%2Boy30iDxSNh5gnaLCy%2FjnTrVWh28NR%2FtaAv%2FVN4S41bn%2FB1HuI3C42J4ugkjQl3PEmSaApBmYYCGhTNWWODKTFHQj7WDERUMtK8Q3slSIGmM0unAVmfmNry8%2FXzyWREMa6a3J7YGj4wX14a3x1l2fLe%2F0iAftcCXs1R5TmtzD8W&X-Amz-Signature=7af7705c16e38af1dc164f08534647649a1795b4f433d0a54ad4e86994760d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RNYEVXZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDJsS3e1IN5zDUUH1o6Rfx04ncb8mKLc%2BrMgX%2Fj36Ao7gIgR%2FPla02l%2BjyRumZbII3%2BJc7%2FH6JGZBxkiCcIsjbBIAkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBsieVb18mkbXDX1yrcA8%2BS1tfM0PTvJ5HTY1WTguqo5JRa53driH8f0UJRzc7a8%2F0Qstilv92C2%2BQL0CdM48m3QrhKCcxizY2ohjwA%2B16Sr4PyogeB%2Bx9wGKRmkrj9Xa7sw%2FRm2sbrobxVMdBobWJbX2fJOauQ7XZzaxwl5HceoflwR%2Fh2QkICBS30%2BgJMnKwURUY6gHhNa2R6U5UkuskkOYqRhBkCkSMsAgXbeTEmjkuUWz0aXa6iap9s8opBI8AiiIx47oz8duD%2B0opT1SMminR9AzCksY%2BSvLXkPMH4htODQN1Oox%2BbaGci%2FZjMt5oIvdq9ZuzEny%2Fu6yLNYUU0JBDjZ7mX2WronASmcgC7aNhkT9wk%2B1Sxkyvsyi%2FE0M6%2FmOh%2FND2825uE3ydxeFAFmVz09Mcr76UJV75eBxZZMOQ8BPX3GaBX045DdHoTeVr9N9fVInSC9neGaDjgULPnl9sdqNDB2GlfaFyaOkMkqyL63neL%2F59L3ajk3ObzEX9rHkyGbx0nfgFEa0GV61M64HUytzPEoaS6PpU%2B0gpFua6UP5lRRSDPgoBN2pXdvbVm2QUVN4pyJfotsBvpmsP7urThKoUS4%2FX3J0xZfetqfIYB1xNIYth3taPsJcEZ%2BSBQSH1aRLwc3e%2BHMMzE28QGOqUBkKfmdVZtwJ2N3UJNolfyvq4RDzeHZ40RRS4ytTunAU2BeVWjPTEZI7zXErVDjcYVLXGav24F0VMA1ANVX%2FCOvXa%2B5559NbQMqL%2BQKDnTnM1%2BLJrAcBTwHI%2B5JXbciIna8gPOwpSB5Bt30PE8OLEKKsfB6FHMis1vD88J4qWheZYGG0wxmlJR6HaxWLWLYueV0AHxliIcJ5xTSUHYu0D8kcSdZWju&X-Amz-Signature=e36712a6d97387d92d6dfdfc28574d410d21da7dbf0410b20e9dc69a48cf256e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XCVJWGM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAFLe6EvKzvLqXS4Q5XyVaylB1IUO3o6cqDD1WLXAydBAiBeRhoi6cAsI4d8UMCwVf%2B45Q1nU9%2FfwU%2BxzOZIFWWxSSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdJAUSBcc2I%2FqFUA3KtwDo%2FEPuFv73kH10rON%2FRUkGbWULpFprdXjrBZUnv5z6FhvwS9aSL159pO5NPsb%2BVa%2BY8RLIf5SnxA08EKBr81aTKkULfjPKqpWBS6OwROfo1Yu1s8ADEUDIS1Q00W0EFBsNK70wR7YtDziG4%2BBTI3R%2BZnMTYyQdZZsjVdELuFl%2F1BxUDN30%2BCEMouJVNOEoUERrdSAg76tar8JFUnFezpPJuk7wQ46WodmHgKmbOBGjlQHLM3sIInUEkgA45Z%2FN4mPQXurg0KotF3CPuizEw72XzKxDZhe%2FxhYHOriWpCSMFbImPuQviIUge%2BPd7vKc4EbFUus%2FR92j28wClEX%2FEWppQCW4fQK1NC7t9NhoPYEmLQPj9GtWA5I3J2OUJ%2F6X6Evml6ucfpgw6uffHc8v0hxtdpwNctFwpnbKljxDKeygL4ewG9xI6Wn%2Bp1DNod489YyPkHvYfHf7mwpn1hrn6tLhJxpCACSpUNNEO%2FzLUWovaUASXDpUAKFZog32AMINhaRT%2BFzKEPIjU%2FC8Hw332MU8%2B0I03FOdc7fD%2FPyn0agebuiy9cZHbn8NQ1xYj%2BHVXegStNipGrJkFZIDDVvSGTBNsJupqZ%2BA%2BMAYYk86IX8jaHgCSBQubdIw9hwIIYw58TbxAY6pgEqsH21%2BbZoxglAJqjRn%2FkiW1fm2SuGde9OE2TRMamZuxnwENUPz95A%2Fq2bjOrIM%2Bj7mygR50q0ypOSTjAXk7Z%2BxgL8wHun4bRXygIohZBorSLHdPlQK6oNj8nBW%2BN3bgOFQ2y4PXRJ2bcxkUoBVfW0HgozBCdYfDD4hhMl8%2BLWziCwndT2OuUYDi1BoH0NRfkh3F4iseaVUBUxGTZ0o64lW%2BOdTc34&X-Amz-Signature=e84c6871e0927a9d186d78e8538b453edf0e4dc4d725ca1b1406e55eaba1f988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHKMNIQZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDZsczI6dUVLtxnow7bg62e5oBkyZoTzE%2BwzSKd8C%2F5cgIgJOoakox45z4p5T66uCLiTroamOX0g09OGrxmITylWZcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdLKatCtVqTYORxnyrcA6lhewjQZIgatZn5a2Ed%2Bf2EYpiq3JVya%2FZzuEldB7WcM7CuU35UEY284LJ27loC2RfBoqjIE%2FvT%2FIu2R%2BzYmb7VbK0OnjADg9rAYuiMrLSE2EVnVY1k7%2FdpOUH18M879AD2rZSFO4h8GpgYSsHQ1MCQD2pS3kO0ZmXjZ8EE95ajHsSD7D6%2FU%2BRCqj6I7bHoXHSbkaOcB%2Bz6NBQWVwEy%2FVUI6N6Tvlj6ekso1xFf7PM%2F7R6uCyYrcqU5cMb1ooXqS5%2B0XLSnPN0wZDLN88N3qqkUexDoMbqFgWUmCTpYAJH0WO8gVJkoCNXzCOslx6MVFO3vloMwcqQ9gFdj%2Bg2EUW6Yh%2BoPEak8O5yq0p54HSgBjkBQBiFaIRoS9vV9q9K7jYPQzFmWZr7NmbFzd5hgV5qQXgNrd7lWLdDry0V30HIEGSMaVKdf40Yf%2BdhNBH6ZD%2BLymVmUSriVU4qRAKOVscyVpTCQMytYy414ty6rgl0X%2F%2FrzsUIG5IrkCusyAUcxhUm%2Bbc9yH7tDVLSYQYpcyHD1CGWpf7FqVi9mrNpJq36OhqBXt9wbJt1CT%2FCHpBfWXyR9wEKPGBbg0QdATjEFxGFXyBt%2FlKFbeP6fADaAGN1W7ZzRnIMNoR3dSiNLMIrF28QGOqUBHeCz5Lrehaiy%2BkZAqo9oqnhCAfm6VzDZyu1bd%2BcK5Muo%2BeULE0l6bWr3F%2F44n%2BlBoLipQRoUG2Y84BIcS8IRvvEYJYZz6ULxgIlEaz7ybJN6SdOphy96qe0B43MQXOUxXOJlDDN8HSwbU%2FvVk%2FdAmJcoknOh8G69hMHp8AKXRycktbUbxXrCzx%2FfU3LIJonVVN%2Bp%2BJptIcotyCXi7RtjKeFEy8uK&X-Amz-Signature=0ea2062cc354a3d16ff99e6e53eaeb403713ea09844003b14aa119d6edd1a57f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJNSF5E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIE3bIYMVeU0I3bx9VFE1sAD%2BhJ5UMcdDBQ1vi1zVw99mAiEA7o3TeeZsss1fTjqBOIJjGdnx%2FLNBml3BUAQwqODazpsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFduDQVO6egJ8X0k%2FircA4saiRzuuakTa61W3h894HwXVdSBkGk2U5gz1xpsI4zTXES8d8NJ1XoHqc6cWlQ1kT4IaaMP%2B62rYo3yF%2BIQiXdAhl%2BA70PIqBVAgVa25IWtb3SSLKfG8orzOUIkqlow5g2NteXZkRCe49NlfyrUtRrxIHubulH%2BTkBUou5slJu287cQqJjq8AqG3e74mlhwBhPI84PDriqYeEH5Ur1pX9J183prn8YEWQ9r%2BKg2odeQmpEaz6%2Fz43%2FNvnnhJAS7YjXOBjpvWlStE6OqgNkyf%2BFaPoTJI9vwbsQGVZ%2BlweijpiD7P4%2FOxmMZbu%2FtrbWQq79p6g9SE0xqwaXS8G9CQfbKV1DPto1XJcIdS8lkrj4%2BpL%2F4cn5yc%2FE5mQckV1X9%2FHUri3KoGDvwbDpYY1PMxGeU7uEVPSEJoGoTFOTHchPrpzpX71g1ovcYdfEFjLoq25qrJbIC2%2B8x3JyylIknCLzrSOvMLq3Lgz4zTXcsGzUbhAdIE9wRV4bPBRhP2XcKjA782IE3cvBBPL85MsnJPyu%2B52s5vzUB%2FttOVIr2lgmlZb%2FAiX2ZvkizXZwA03mzRAd1RK66qGyYbAQQ8ON0shl%2FVDus3dHEIMe31woDs4A1b0F0UJFDKbSd3U8lMKbE28QGOqUBW3Iyv7mSe99c%2BYIKF12tPK8h3CLZMuVJm9hE1A6QBmjj6MDJc%2Boy30iDxSNh5gnaLCy%2FjnTrVWh28NR%2FtaAv%2FVN4S41bn%2FB1HuI3C42J4ugkjQl3PEmSaApBmYYCGhTNWWODKTFHQj7WDERUMtK8Q3slSIGmM0unAVmfmNry8%2FXzyWREMa6a3J7YGj4wX14a3x1l2fLe%2F0iAftcCXs1R5TmtzD8W&X-Amz-Signature=6127aa170b9534e2058d799595d1a29fa302390813e0a19e5c089a08eb35380a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GIUGDVS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T071002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEIVs0MUp7GEL5X5vDZr9hXU69M8sck2mj53A%2B24dNN0AiA0RcqS2z2zpoaKzk0wz0%2FN5sUQmHZZK5Nm27POpd2vyiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSGDpKP98XCtyQl48KtwDifNTUnnkumRXvX0rlV7SPZ0j1JNWu6wdYPGAuMysmQUQMI%2F2ajjhwhU5d%2Bho%2FDG2S6orVnmi8hmd1TvPkiyCdy6gWOKPNRI69LSyjyGXQMEHtrHPnIikfkyZ3SkuDkCJzJXk9E4PwttLRwFBMYKvRdavFPcymZvlp48MWFzGjytorvnDp3AP6IrV9yG7FxhjYey5VuieuqnRttjHjqYgIE0UGL9PG4IQKqq1ie%2FIT68L97zWUN4NEu9yNHWQP7IvrnSm90FiHtd5n2wV%2FsDc%2FkLyAzyfwOfg74MBEnhknZnP3zzzGq%2FBUbVcvtGsJRXWvi%2F6ZGMy7pavjU04vAy%2Fwq6REWY9%2BanjJeGfXLyLxIWdZlA3tqPFFwMmtVXBUE5n2QRb41lp29%2BWKvTNKArl%2FTGxYSdbz4BDvWNrFQE8IEjKS5Fl1PXYmR8nvNAAIAGCQh%2BCa6z3%2FVNqhWNhJr%2F2X%2FoVk6y59KoMidkLDpJtUhLIAyFgPofqx2Ai%2FuOZE3RrQCIUrn1zI8SA%2BMKtOkizJiACLc25I85mBA0xiv1HstznPg3VbGlwakrGfavAlklAT%2BAnY12PHzD7MvgrQex6fri9JxrWKm06%2BC%2BYGR2F4WWABhhKLb5Yc%2B%2FQZNcw5sTbxAY6pgEvJFWbZVqohNJPQEGR0TktMt%2BwNzsZk5D1tdgWPd07XgsB8eH012zcteF1rykvB1XbE8cw2cW2jj51C01jASCnsjVqYWH9ISHlhyrcVrZ4aV2NVU6SVXTBTj8iWlbygPxfMXBHDk31P0JUcriicg18tF2F8sBv5CKeBKzECEyZEjKpMpNgZkl2hOmClpeGIvtR83sOjOVNFpRvLJvq%2Bqee%2BVgn9n4F&X-Amz-Signature=d7c8bd487ac6114b1df043f1535db16cdaec76399a623e050e0ab5fc904a906c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJNSF5E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIE3bIYMVeU0I3bx9VFE1sAD%2BhJ5UMcdDBQ1vi1zVw99mAiEA7o3TeeZsss1fTjqBOIJjGdnx%2FLNBml3BUAQwqODazpsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFduDQVO6egJ8X0k%2FircA4saiRzuuakTa61W3h894HwXVdSBkGk2U5gz1xpsI4zTXES8d8NJ1XoHqc6cWlQ1kT4IaaMP%2B62rYo3yF%2BIQiXdAhl%2BA70PIqBVAgVa25IWtb3SSLKfG8orzOUIkqlow5g2NteXZkRCe49NlfyrUtRrxIHubulH%2BTkBUou5slJu287cQqJjq8AqG3e74mlhwBhPI84PDriqYeEH5Ur1pX9J183prn8YEWQ9r%2BKg2odeQmpEaz6%2Fz43%2FNvnnhJAS7YjXOBjpvWlStE6OqgNkyf%2BFaPoTJI9vwbsQGVZ%2BlweijpiD7P4%2FOxmMZbu%2FtrbWQq79p6g9SE0xqwaXS8G9CQfbKV1DPto1XJcIdS8lkrj4%2BpL%2F4cn5yc%2FE5mQckV1X9%2FHUri3KoGDvwbDpYY1PMxGeU7uEVPSEJoGoTFOTHchPrpzpX71g1ovcYdfEFjLoq25qrJbIC2%2B8x3JyylIknCLzrSOvMLq3Lgz4zTXcsGzUbhAdIE9wRV4bPBRhP2XcKjA782IE3cvBBPL85MsnJPyu%2B52s5vzUB%2FttOVIr2lgmlZb%2FAiX2ZvkizXZwA03mzRAd1RK66qGyYbAQQ8ON0shl%2FVDus3dHEIMe31woDs4A1b0F0UJFDKbSd3U8lMKbE28QGOqUBW3Iyv7mSe99c%2BYIKF12tPK8h3CLZMuVJm9hE1A6QBmjj6MDJc%2Boy30iDxSNh5gnaLCy%2FjnTrVWh28NR%2FtaAv%2FVN4S41bn%2FB1HuI3C42J4ugkjQl3PEmSaApBmYYCGhTNWWODKTFHQj7WDERUMtK8Q3slSIGmM0unAVmfmNry8%2FXzyWREMa6a3J7YGj4wX14a3x1l2fLe%2F0iAftcCXs1R5TmtzD8W&X-Amz-Signature=6f09c736c9ae93ca46ad451b216e091306faa052adf96b181be720ee3887e04a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SBBIH6V%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T071003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGnMEAkmIeovx5JL%2BMA5UQQhr%2F%2FY%2ByZsLwgGxoP816dGAiAec3gb2el5iNQ9J5M6JeKF3wHhjfmsxpBDzu4dIC8LqyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnxx7icsdKMnFJBVPKtwD%2FTEiwiVJgZs%2BEgzM3bqKQ3ADj6WJuLSRE%2BWK%2B%2FSImwkxfQ%2B6Rr7BdyFY0IwkJPnq5NeKTYuoxlzOwWbMUMUjseAtPGw7GaLUdbGxBejJ7ESx3jaU0cpYwqrFEKWm%2Beg5N5gxEKUhnE5t%2FSUXi2c%2Bjz9UOHCPK%2FoWEnkargFEuCqh5XO47ACS32%2F0ogYXvLHyPlTC2f9kZT8ncie29s3NoSkNbud%2Fjw0TDbiDGpcFkYXGsBwTHJVeijtmYzKKCmDchRuz2Ba5RFaCrnLAof4S4Tq6Kcv9rwVp%2FXoMBT5D3GrXnw4Sb2jXy6NEO263wGmA6g9hgv0DG2fFTsRV8WEGqdRMbcgyhwCkqpSUqavZQRI6GWm6Wqe4N3mLZrX3VZ7ROMxP20nMvSHSC4qdEMcF9ZKYGrLv1ksb%2BOFtsyJrKMLDgz1kc0OlbVCheXxPwgyEo3f1xPFwXVgTHVizcXO5PbX2JDgglNLP619iXdwYn6zqydKDaynksBAr%2BMte%2Bkdm0Vf94T8DfkFPbzSSvLSnJml9G5pLceKGr0PoscV1UPeh0Mu324hgO2ilSFPUJOEx99JO7GjDLLMRhDYTUMIAZEuDAvK9NVVXTHmedklV8JsGoh3XahlO3oZc708w78TbxAY6pgFBxMxTq0musPoKYgioXqoqDmOnIeBtmMwygO3dcEnUAKwuN7PTkOKBvSlCxcAcgRgKWpZm4LeEnkdN2ifyxWA7ogl9Z%2BJDvH22AZ7wlKA3%2FxhOTAoe5lt7k1t31zKf4TCiAkYa7gOCXMLjX6AUZ0UNSHonhLX%2BWPyE86RqTzbEjby52dL7UanP7opUFg6igO%2Ft7R6J53tHoPmzDrc%2FUfCuBgXjwQU7&X-Amz-Signature=74c82bdb2e002c7b1a405450c3e85da1278421ca353d7009b679d7c359997260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJNSF5E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIE3bIYMVeU0I3bx9VFE1sAD%2BhJ5UMcdDBQ1vi1zVw99mAiEA7o3TeeZsss1fTjqBOIJjGdnx%2FLNBml3BUAQwqODazpsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFduDQVO6egJ8X0k%2FircA4saiRzuuakTa61W3h894HwXVdSBkGk2U5gz1xpsI4zTXES8d8NJ1XoHqc6cWlQ1kT4IaaMP%2B62rYo3yF%2BIQiXdAhl%2BA70PIqBVAgVa25IWtb3SSLKfG8orzOUIkqlow5g2NteXZkRCe49NlfyrUtRrxIHubulH%2BTkBUou5slJu287cQqJjq8AqG3e74mlhwBhPI84PDriqYeEH5Ur1pX9J183prn8YEWQ9r%2BKg2odeQmpEaz6%2Fz43%2FNvnnhJAS7YjXOBjpvWlStE6OqgNkyf%2BFaPoTJI9vwbsQGVZ%2BlweijpiD7P4%2FOxmMZbu%2FtrbWQq79p6g9SE0xqwaXS8G9CQfbKV1DPto1XJcIdS8lkrj4%2BpL%2F4cn5yc%2FE5mQckV1X9%2FHUri3KoGDvwbDpYY1PMxGeU7uEVPSEJoGoTFOTHchPrpzpX71g1ovcYdfEFjLoq25qrJbIC2%2B8x3JyylIknCLzrSOvMLq3Lgz4zTXcsGzUbhAdIE9wRV4bPBRhP2XcKjA782IE3cvBBPL85MsnJPyu%2B52s5vzUB%2FttOVIr2lgmlZb%2FAiX2ZvkizXZwA03mzRAd1RK66qGyYbAQQ8ON0shl%2FVDus3dHEIMe31woDs4A1b0F0UJFDKbSd3U8lMKbE28QGOqUBW3Iyv7mSe99c%2BYIKF12tPK8h3CLZMuVJm9hE1A6QBmjj6MDJc%2Boy30iDxSNh5gnaLCy%2FjnTrVWh28NR%2FtaAv%2FVN4S41bn%2FB1HuI3C42J4ugkjQl3PEmSaApBmYYCGhTNWWODKTFHQj7WDERUMtK8Q3slSIGmM0unAVmfmNry8%2FXzyWREMa6a3J7YGj4wX14a3x1l2fLe%2F0iAftcCXs1R5TmtzD8W&X-Amz-Signature=f7a66e3bda82902d62738570afb80a381946a373859e1e14024705e95f3fc9d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675GS3WHN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T071006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDIrP5Ifc8wdFvd%2B3p8y2P7RT3qvFs84rAkH64cUsmT3AiEAgm5tX536%2Fyx7AVWM5h%2FeXYFOVBZdKZLB%2BgCWJ1owQBcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdDP8coyWugJDZwLSrcA73UlDlwanH7em2C6MjzzaefH4HdSRKlyXkur3wX2wpz9Qyost5Ef7m6YF7Wvf4H7%2FNqaWtHnsjdO4TbykW57pLPoXMGVGz7HbAod0YIROHLDSokXz6Yzzy2R1rrMLOlpBKy0PG9GyR2D5PO8loANFaP2PsIGhRITPaXSGdT%2BhOY%2BSS6lPkmgFlPeNznFtCfwSnGtb3D5d10IwYicBgVmYUhTeBcE0qISZveIYA4wW3FZo7rbI1W7sVbg%2FfV8p%2FxUhTGSXLbMC7YuRFBqOIPhQd2AkE1yLjek3SUGUuG3BFv4cIWFNCZ5n4zUIm5DRw3%2FAFmHh5291iB0KchrHZeG5o9%2Fu3QXXSO%2BiwATGczlxilR4tbiPVVG%2FyXQudu%2B52lmGMO1xodJU9XKo4P0Lz5mmruTGNKK74NHLTbPKXKULc0nkSzsE4Ayyy2HckgtXfkeCpavj7G5lEsaG3Xgpgkm%2Fx18ZU%2FhzQ%2BF0F7yXzIgpMlZt7nWOHkQexmFdoXweYJDEnIhVUpQo6aGmMV48%2BBYnMbKwyWMPrKxt%2FWCW40hE%2F5mw6tJtXhTEpn5PaJJj76vIXHWlRWMr5nwMsgZazyyxAJ5aHRrVIuEXyAiq0oCJF8QBJT1AMMsgHQcCAWMMHE28QGOqUBQCLMs4X%2BvX9py5OmUFcXqvkR7zWwfE6bxs4hctNHXZ9d4u5W3q6tFbliZMBWN0JCe7vOIfKFHVf6K7lFAR5YZbBQEffaUnjk8cdC%2FhAizeOCWeP4XGdRI4G2diFXtrEAKcXh3%2FFd6i4VFcDMxj2gxgF73zC7NBT7XcJnHN612gXZEjoNN6DK8QxhwtmwZLBN44pgLUOJTqeXOYrf3uvCIMZ853zi&X-Amz-Signature=d7f419d66419fdccbd5e0e882aba64eaf434a05cd1367cdc966b89ee324804d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJNSF5E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIE3bIYMVeU0I3bx9VFE1sAD%2BhJ5UMcdDBQ1vi1zVw99mAiEA7o3TeeZsss1fTjqBOIJjGdnx%2FLNBml3BUAQwqODazpsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFduDQVO6egJ8X0k%2FircA4saiRzuuakTa61W3h894HwXVdSBkGk2U5gz1xpsI4zTXES8d8NJ1XoHqc6cWlQ1kT4IaaMP%2B62rYo3yF%2BIQiXdAhl%2BA70PIqBVAgVa25IWtb3SSLKfG8orzOUIkqlow5g2NteXZkRCe49NlfyrUtRrxIHubulH%2BTkBUou5slJu287cQqJjq8AqG3e74mlhwBhPI84PDriqYeEH5Ur1pX9J183prn8YEWQ9r%2BKg2odeQmpEaz6%2Fz43%2FNvnnhJAS7YjXOBjpvWlStE6OqgNkyf%2BFaPoTJI9vwbsQGVZ%2BlweijpiD7P4%2FOxmMZbu%2FtrbWQq79p6g9SE0xqwaXS8G9CQfbKV1DPto1XJcIdS8lkrj4%2BpL%2F4cn5yc%2FE5mQckV1X9%2FHUri3KoGDvwbDpYY1PMxGeU7uEVPSEJoGoTFOTHchPrpzpX71g1ovcYdfEFjLoq25qrJbIC2%2B8x3JyylIknCLzrSOvMLq3Lgz4zTXcsGzUbhAdIE9wRV4bPBRhP2XcKjA782IE3cvBBPL85MsnJPyu%2B52s5vzUB%2FttOVIr2lgmlZb%2FAiX2ZvkizXZwA03mzRAd1RK66qGyYbAQQ8ON0shl%2FVDus3dHEIMe31woDs4A1b0F0UJFDKbSd3U8lMKbE28QGOqUBW3Iyv7mSe99c%2BYIKF12tPK8h3CLZMuVJm9hE1A6QBmjj6MDJc%2Boy30iDxSNh5gnaLCy%2FjnTrVWh28NR%2FtaAv%2FVN4S41bn%2FB1HuI3C42J4ugkjQl3PEmSaApBmYYCGhTNWWODKTFHQj7WDERUMtK8Q3slSIGmM0unAVmfmNry8%2FXzyWREMa6a3J7YGj4wX14a3x1l2fLe%2F0iAftcCXs1R5TmtzD8W&X-Amz-Signature=52c3d601bc0e65871bf1e6b0b20e5bb5b8e96c20d0e2421ecb796dffb7722935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUL6MW3N%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFUdpjtAtSgibPXhflYbXvA%2FA0MmR2Mk9bW2KkiZiNgTAiEAxNcY7KX%2FTre2%2BjFHAY5nhvN4IemVEa9p2ZDS%2BlrGUBMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQrAxEoXZiNCBaRvircAyxa74WB5ZYxatPyHo9vVr8hScKX4CME8sjVgVIRK%2BUTtSvh%2Bypldz18iCUmjGKtZdUJvhyixrjQaV5SN6GIVKNqouGzqCU99vmvGvGMs0zbLngfkZeej7PnDiC043JswGn5lwSXcvrspddYwttoZOdVXPxwCXhHfqpD5LS8g3prMidLCM7T90VGL%2FjmifUk2jUyhtnGd1E5ReskwKYHH082fa0TIYliP5xFpj0rucYXMIX9f2qPoZoiC%2F5EmKaI%2FiIZoI0wah5Jt8H%2BtDxP%2FIK7MgSOC93MxYZ7j%2Fsn0YPYqFLC8hhJvcEgP8BMJFCatoNQR3g47ajWlekxfVxMKJHBLhKnADxlmElR%2Fzj0bxlDUOZF8GG0BhRkOBssMdggvhnP46hN7iaGfV1VcwiCUcgWM3NfFHkxSRqemxp3nDkvYTEbTZ7l3Sy7y2zj3yGm1ZK4fgsqZUYQ3ZsrqU9fmmCVTLlecFA13gXxmiO7kdb%2F3SWuuMO7V9DV3YhFuIGivHaI3oaqb11JFMYfPgLPwvU8ni5JuzKcj6pupbw7JsFgOcFckV%2BOajG7yNuVlspyylOKee%2BEthtOXw1LXKTdG6aaAIVzSx0KrPNR2qGT11YXOdY28VgeTqGZsnU7MPDE28QGOqUBqb1W7GsUJTW4c6KmiLgDcoubbfu1Td1LHgphpBbABLaYHMaxJbpSxdBHUKJ0uClxpnt%2Fil%2BBgm5IEeYiuWno3siV8ipt9p%2Ft3S0YcZCr%2BiM3TSRxoUV6Nflbj9UDeFlClq0wo6DRsyOsD4x39%2BfQVHRK5BuUzfSGg9v%2FEH8hLKhfSfbIgp3DAKjTVezs3ChY%2F3Q%2Fnvw15fx5z9YzakXXu2imEwRv&X-Amz-Signature=6ec974e7278cd4bcf8cf33828b759856dc587a89c540ef898f8d8922e2ad012a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAMKJ2HS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC%2BCoVzgNAZTRJoVq64eNSpr2FTQjDXqtHh5MaTefo6%2BQIgfF8EqB46fZu%2B5gzwmI7eZ5xGAg%2B2%2F7h18sgQVILSK0QqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx0UqBkee0idW1uYCrcA21RPENrHxiH1hdaLuqSKc1fsv3Z6JP5kTVVFA2P0hR1LnvoONmTqovTV19qILrgs3jHCXwFMz%2BZS7pRUoeldLOp57TjvFt7Z%2FS1R6vixE%2FJvFx8bFmTugiHx88DXJgMFd78iJM5%2BfhZsKhAtaBcmERJ%2BcScT4W2FQHc%2B0G7syerbpLAhe3xSFQp1W9YeL0pvoQvZ1P77BBSnKlV8ZDwijot4AOXDZBw4nNBB%2FgdTt2wjyvw5pVw%2B5IJ9oiZWHmvMutcZIf%2FrmJofrqT3k3VXjIKLy2qxDTbhoE7OnTUdQ8w0oy8JszFO5T4zzvfZTJGcRcxUtYx3C%2BxKtHsUGsiq5EY%2BQ2M%2FdC3RTLk%2FusW%2Bp6tcRLKKRPHsrG0%2BfiZuc%2FLgQrra9fO4YmB0ZHOjvc7aXsujGHS%2Fuhnayg9fuM1XOvHWVzZCTCL9V6qzlwFI0GkUw9OcnXkN6Jasjxf%2FY8ahCRpef%2B2E8Wp1t7FBWw0xe4DQ4iEs5sFszXVRWJ1YF0AaxCLlIymbYu5Q5Gqm52mtHPQZNRg%2BNC7xGewtmQz%2FMq%2F3FWBoUZp8IHNpLfryFuDVdq4vzYgVB5vZmE1i0nQlXoFsUxUJGPb3UAi1zwq1hRg1MpX%2B3TFPbrbcs%2BMMObE28QGOqUBMyLGuH7ZNUUPaUwp1lXkceRpIG22CwBXumvl%2Fb23wdwwB%2FLAs%2BIlwljdSDv8xP33N4%2Fxung9NpsjxgOdzEHGsHs0%2BEkRvo%2BL8PsB0UM6CMJ5GqMwha1SrmOFa9C7N%2Fops75jLAHlCqhFxxUbIOKCwNz3idabKYAqI2rSrVNzhLuPw9rvhkI6WtVSqfPKM3qTtRBrvyugLRViwpUJ6YZDraS3u%2FqV&X-Amz-Signature=94c9f856dfe4e24f9686bcafe86cbb9232863e238e6e2ba1119d3fbc1394a6c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CDZZMH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T071014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIG07clrBJDUcUzawwHzoN7X%2B17ZNC1c4vPFmSd65RG8kAiEAkNdJ4UCHlriOqBHYId3HaAnUSIpO5ioBcBCeAJdEdDcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSKBp%2FMPDQtvgkf4ircA0vgGSz%2B3gJN7rZwVedVUI2TduvVSkBngEeUpqMqILdfrFm7IwuqTkUoDHWIwkM%2BvhBNVC8RiraqiZtnIcz28F%2BdRTfw0D0BmsMv5G1eDH2gOubiLekUH4mO%2F1bjro9jOh1JQiZXwl4xZ07o9rZUTe5gSFxrBqH0C%2FKJlgRNcX1STRdKhN%2FbLDfvkKuSov3NB0gM0KnIJ%2FN1Py5h1gI1L%2Fne29pCF%2F4VaXK8QTKAO9pR0MCkrNoyxiCyTcJ4932DJWdHbFQ9xAGLujSCM9TnTQCuhII3Aum6gFWEPokTSVa8I4IYVzARuRt1YYBOaUufzOmnpX0Q5JSKC%2F27qy11SDvFHK8CyAnz2G1Hm62mGUyqDDAMlDkY6pLAppYKhisJ%2Bm1Ko3AAexx3nHD7DJiX2acNxabkJJCM8z%2BFGNiyrWflZv7twbmLGzw54r%2Bpi4n93IUjHs8dfkprL83rg55RJ%2FkP2t9eK1tfrNtxRKgXjMrhgFy8eYHEoe8Ylg6pJ62aW2DSdQabewKnOMAQKaNPYzLTq0mLQcCUxeoSxW46ofVLRVsKztHdEhwF%2FaCtwspaKtWGuyijSt18YWqfh5cUIkN4YmOciDiy5qKzuTZjEd4%2Bguf%2FdsVCa%2FxkiHfyMOnE28QGOqUBKIam%2FuJmKlIQBG5%2FzmP1x%2B4RHKcHcW8Ca04hZfutUz7YqxFSZ%2BcpN2qEJYCIcn3%2FCnj4eMGcKfapsl7k81iDTPZFddqG%2BTlHidoWNqjx3rWweWd%2FlpyOkWUMvLCBiWMVW2PKE%2FSbrXVJzh7M3YxhGWKw10Dkj%2F2A6EWIeGIXeE%2Ba1XExaE6p4WbvDSMQJDYhtJoqUT7Jr53XqMassGKOW47Y%2Bfz4&X-Amz-Signature=2c0fa50fdb900d7304735640240784e42b62a0dcbfb5f634f39c200c8447e8d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEV7T7NF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDNLLTBRIEY9cq8GpK%2FIph5s65VgoYSQOcCUunYUw%2FOSQIhAJPS3FqFkLYyj6XIatpjnjsTq7E98Vbfid%2FIMQ9DlFEBKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBsOjTRT6YDW0gyjAq3AOuuYP80Cn628iwrkmNSzdXqt9cOHJfUD9E44jmuHcOV7oauL4Bt%2FrDVVn5vg9EhqiBQvOLvOeIxylNA4hlUryRDcguJ3fFC1TW0A92OG4WzUp1x%2BwNHrNOzQXoh6evu%2F59%2FroJMmqlOH%2BOJNdcRrh5CYk80rN9p3x2scdu58lUIHPQW0CCLkGCkC1%2B%2FBlnpCtVpMezVlItDTMlQvg5prRTyQ1JS1kn9eK2IvQmE2QldJJGkJYR59cPqBVwf6RDBMfhTn%2BXvincY70bw%2BewQ16OI%2Fas5FO4iDeJpHvg%2FONEL%2FhlQFKZRZqLHcamOnn%2FS79wTHbgko2iCMfcT3pI6YsnLxn02FkFz%2FalizDbV8kcgVwE0TUnVU4SlizwgPeAlRzVArwRg3CyozJ7Usrr%2BNr2WnG70B2JoYsIMnyfEVwjMvGrfFg8XmK7qG0VILMpp73u6sLu53Hh%2FFSKrApgw2AC10B3tQc0XXZP75tLh2GBmgGliToDvMC16JxBsjYzMHlp8nLcZyFe1U5kXvjP8TsFh1rCHx6qbAM6xQE31dC8gLvlFFBW6mvpRVr4P6bg1vmKUJCK%2FSRyv8ysAZCmxqdesd1wKscYIqO8fAUBZgWeWSjXQTIsKN0N2%2FMqMTDdxNvEBjqkAaLuaJiDZg4ndpZyFRmVlCND%2F%2FmLxT9xZ0ExUHe5GplVZAkOcOZPvxbxdUVD2dS0pHJ5pOwrTIsgFUbG9TD6JMaLQjG4CImPw719N5sMtsX8EqM28axvvEUIS5epsObiFpkdj0K%2FZOSUW8SO%2BSDdyYtQqU3nFwI%2B0%2BW0tsYGg2TjRBQ14iMWVTRxpWCicOxTZ0viKVbmYKQWhWyZX40tzEk4QMrh&X-Amz-Signature=cc444655c2cdb98f7ce3a01b242a2d96f29dd199b782a1a0f1cf5570a13db737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2ERNKAL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T071017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICqUMkU2Am9sOMY9a8wzHeUJNvYiC1MXDJXpFaVuEslpAiAQTZDItPinjGjr8oL28SS6%2FWIzSk7nEeXZMx59%2BxTqWyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAcJjH76jRca1nbFaKtwDC%2FElgdlw6BCkusXyKgj7WwX6GrMWOw0lPluhbrCbqXLPPyUHLl0cRD%2BzfL%2BNbSXZmlGKWbcVUlC2%2BIPYLNmHX0Bwu6fkNlznqe8IWm9ZSwTl9phTBvEOIWvpzrfHQI2yTzT7axmAdvWQTx7vvYGFfUsmd7A18csa7AmiXi8b4W8dFl%2B2o7IaZVC3tytYga1bDSYqj170WE0ZIEqO1PwKC9VpeShQMw8POvZ%2F4FnTHXEG73wzAO9kh0FemTpCSEgZPzXKTwkfYgRwizpBiuRy5jcGroasZkTqFnI6DQcaBQw2Vs8%2B9ft%2F3x7fbURDML4DjZn6m%2BWwb2dfCPX1CQ1NiUpepWeVeESvJcmRvlpWdzE4M3FphOoCuxUjW76Dj3GIAt%2FkE8Pk4u7G3LL09kYAFf9yH5wRjtdhYQkODfGDtCf3el46AuHn%2BGGmWDwzFrCYz3LZeS8%2FTJqpXfoabArxFXC%2FO%2BS%2B1ikULWEoXRZ4o9zEAt3JP2P%2B4ksjyEL5h%2FWEGKlWG9CUaGenfHiLCUOWnzjxH3ICuHtJlDvCm5wIqcwqCGOiefy5i%2FM9UhjSm8K%2F%2FXxJC%2FuI%2Fy6pFmFRWh7SF9wEpanQaeckw0XJCdY9%2BFQY2XYQ2X7JIWEueC0wtMTbxAY6pgE%2FqT5VNOcZRyw1N41ez6DhHl1Tyoe8DfyHQ8uCnUXMZ90QioUJ1q1nrGWlZEu1ZctKQPPvCdTr%2F%2FocrXIQp0MmRn22j%2BaqJLZndjsy83heB7kgwxBaw%2BD2K%2Bzfq%2FqIiSSeUm1be2UC41cXx4t0aIet95Oc1Ifme3m2gCpHL%2F9hkxk7QGITRPg3n%2FpFFjHg4%2BANOYYHY8D2nwcYgHI9NbWeABdvRCCS&X-Amz-Signature=996856fbd878ac37515887ad30fddfcc233db0476ab9c531fad484db6f617a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJNSF5E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIE3bIYMVeU0I3bx9VFE1sAD%2BhJ5UMcdDBQ1vi1zVw99mAiEA7o3TeeZsss1fTjqBOIJjGdnx%2FLNBml3BUAQwqODazpsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFduDQVO6egJ8X0k%2FircA4saiRzuuakTa61W3h894HwXVdSBkGk2U5gz1xpsI4zTXES8d8NJ1XoHqc6cWlQ1kT4IaaMP%2B62rYo3yF%2BIQiXdAhl%2BA70PIqBVAgVa25IWtb3SSLKfG8orzOUIkqlow5g2NteXZkRCe49NlfyrUtRrxIHubulH%2BTkBUou5slJu287cQqJjq8AqG3e74mlhwBhPI84PDriqYeEH5Ur1pX9J183prn8YEWQ9r%2BKg2odeQmpEaz6%2Fz43%2FNvnnhJAS7YjXOBjpvWlStE6OqgNkyf%2BFaPoTJI9vwbsQGVZ%2BlweijpiD7P4%2FOxmMZbu%2FtrbWQq79p6g9SE0xqwaXS8G9CQfbKV1DPto1XJcIdS8lkrj4%2BpL%2F4cn5yc%2FE5mQckV1X9%2FHUri3KoGDvwbDpYY1PMxGeU7uEVPSEJoGoTFOTHchPrpzpX71g1ovcYdfEFjLoq25qrJbIC2%2B8x3JyylIknCLzrSOvMLq3Lgz4zTXcsGzUbhAdIE9wRV4bPBRhP2XcKjA782IE3cvBBPL85MsnJPyu%2B52s5vzUB%2FttOVIr2lgmlZb%2FAiX2ZvkizXZwA03mzRAd1RK66qGyYbAQQ8ON0shl%2FVDus3dHEIMe31woDs4A1b0F0UJFDKbSd3U8lMKbE28QGOqUBW3Iyv7mSe99c%2BYIKF12tPK8h3CLZMuVJm9hE1A6QBmjj6MDJc%2Boy30iDxSNh5gnaLCy%2FjnTrVWh28NR%2FtaAv%2FVN4S41bn%2FB1HuI3C42J4ugkjQl3PEmSaApBmYYCGhTNWWODKTFHQj7WDERUMtK8Q3slSIGmM0unAVmfmNry8%2FXzyWREMa6a3J7YGj4wX14a3x1l2fLe%2F0iAftcCXs1R5TmtzD8W&X-Amz-Signature=59093c2f1304fb7c04014e4f828813b22b52466b3dbec7a0de42a839df1b6013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJNSF5E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIE3bIYMVeU0I3bx9VFE1sAD%2BhJ5UMcdDBQ1vi1zVw99mAiEA7o3TeeZsss1fTjqBOIJjGdnx%2FLNBml3BUAQwqODazpsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFduDQVO6egJ8X0k%2FircA4saiRzuuakTa61W3h894HwXVdSBkGk2U5gz1xpsI4zTXES8d8NJ1XoHqc6cWlQ1kT4IaaMP%2B62rYo3yF%2BIQiXdAhl%2BA70PIqBVAgVa25IWtb3SSLKfG8orzOUIkqlow5g2NteXZkRCe49NlfyrUtRrxIHubulH%2BTkBUou5slJu287cQqJjq8AqG3e74mlhwBhPI84PDriqYeEH5Ur1pX9J183prn8YEWQ9r%2BKg2odeQmpEaz6%2Fz43%2FNvnnhJAS7YjXOBjpvWlStE6OqgNkyf%2BFaPoTJI9vwbsQGVZ%2BlweijpiD7P4%2FOxmMZbu%2FtrbWQq79p6g9SE0xqwaXS8G9CQfbKV1DPto1XJcIdS8lkrj4%2BpL%2F4cn5yc%2FE5mQckV1X9%2FHUri3KoGDvwbDpYY1PMxGeU7uEVPSEJoGoTFOTHchPrpzpX71g1ovcYdfEFjLoq25qrJbIC2%2B8x3JyylIknCLzrSOvMLq3Lgz4zTXcsGzUbhAdIE9wRV4bPBRhP2XcKjA782IE3cvBBPL85MsnJPyu%2B52s5vzUB%2FttOVIr2lgmlZb%2FAiX2ZvkizXZwA03mzRAd1RK66qGyYbAQQ8ON0shl%2FVDus3dHEIMe31woDs4A1b0F0UJFDKbSd3U8lMKbE28QGOqUBW3Iyv7mSe99c%2BYIKF12tPK8h3CLZMuVJm9hE1A6QBmjj6MDJc%2Boy30iDxSNh5gnaLCy%2FjnTrVWh28NR%2FtaAv%2FVN4S41bn%2FB1HuI3C42J4ugkjQl3PEmSaApBmYYCGhTNWWODKTFHQj7WDERUMtK8Q3slSIGmM0unAVmfmNry8%2FXzyWREMa6a3J7YGj4wX14a3x1l2fLe%2F0iAftcCXs1R5TmtzD8W&X-Amz-Signature=16f61d4ac33cb9d05f6046caf240a813c6b0e5c4756e516af9f87a6fbbf17c91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPMA72FM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFPtVZc5ST97uSc0%2FWuhDZqo8d6hXv0cNXsjqTE6KnY7AiEA1PFHopAPS2QB9Vrn3pgpxPOUR9pwmjbp7XUVrEhITXMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsrVajLtnDY5WzYtSrcA5Phqvo%2FHtd%2BP2axSmnOQjlozjcaHila%2B9Y4WhXlyn6uLWpsy9AjWQs7GqF9vQqxZhr1mpC5rRTyRBIZO7y4P9fSWZg2qkeAn8bfRPjSxkbApRPEBxSCJMh%2BOvkeV3fRR8iTm0R7Dxs06Qw0zTz2obKdoc6koU0MNu4XmYLDRp5SVhKXNUSa4ZLQ0W8KNR4Oswbn0ZLJgsaqYmMh%2FpQJyEpWOt8DDu5FnoxYf0ZRSf4ryNN09nzbwmyyIg7AzMwHLhu1VAe%2FC5ejnno%2FaSN3P74T37BDb9xJE98lynd1OKOgK2NmX%2FhJSGnB1W7MED13Pg3%2F3bIjCSIBZHnC2mh91Z%2Bk2GYAg79rkqIxQpp7sRWOce45PZaiKPTvg8tagImku1LfhzuXYVQYB1KA5CiUUJ5irxFA7wbr6rrwxe1y4uKV3C5eUCZ9PjPnZW0vzXKzKkdsIvQgZPpotng%2Bjlm6w7XHNu6s5UsJMqukrFYDnto2esOIuea8woukKp%2Fjw1tj2NdQlXT3DeuOxjKnPj2P5OsGjDkxnu%2FzLx2w%2B9IV6Z9q6PB1xfC9ZW28eyVVJggrJqzSbCwKFOUBqmnN5JCHaZJm5DWs2tNHzlZhvRuh6Uu7ye4uLbin2x1Cl5fzMOjE28QGOqUB5qFEacYEjlfMAsZd6WEOTyK%2BQCC2GZC87usY9zZmqvr9b7lBdVCSZ6V6D41nNy4hntbgmUoVfuJAbeeXpj104whKFhaE8kqArWa3eQ%2Bjf6EkHH7ZnHRncqZhTGbwDP6u766NDmcdqnonmBIgG%2BbWyRNMffSTpmYrSJ1HhFYHDS5bYFqMsvX2XoDY6nh3XoqEftkDyvMNzEQk3gPMMIb0cPGUO%2Ff6&X-Amz-Signature=9664e9d73d963d14eb5dd312ee82c9d1e2a2fc570b7aa5066c9d12d3677bcbc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPMA72FM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFPtVZc5ST97uSc0%2FWuhDZqo8d6hXv0cNXsjqTE6KnY7AiEA1PFHopAPS2QB9Vrn3pgpxPOUR9pwmjbp7XUVrEhITXMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsrVajLtnDY5WzYtSrcA5Phqvo%2FHtd%2BP2axSmnOQjlozjcaHila%2B9Y4WhXlyn6uLWpsy9AjWQs7GqF9vQqxZhr1mpC5rRTyRBIZO7y4P9fSWZg2qkeAn8bfRPjSxkbApRPEBxSCJMh%2BOvkeV3fRR8iTm0R7Dxs06Qw0zTz2obKdoc6koU0MNu4XmYLDRp5SVhKXNUSa4ZLQ0W8KNR4Oswbn0ZLJgsaqYmMh%2FpQJyEpWOt8DDu5FnoxYf0ZRSf4ryNN09nzbwmyyIg7AzMwHLhu1VAe%2FC5ejnno%2FaSN3P74T37BDb9xJE98lynd1OKOgK2NmX%2FhJSGnB1W7MED13Pg3%2F3bIjCSIBZHnC2mh91Z%2Bk2GYAg79rkqIxQpp7sRWOce45PZaiKPTvg8tagImku1LfhzuXYVQYB1KA5CiUUJ5irxFA7wbr6rrwxe1y4uKV3C5eUCZ9PjPnZW0vzXKzKkdsIvQgZPpotng%2Bjlm6w7XHNu6s5UsJMqukrFYDnto2esOIuea8woukKp%2Fjw1tj2NdQlXT3DeuOxjKnPj2P5OsGjDkxnu%2FzLx2w%2B9IV6Z9q6PB1xfC9ZW28eyVVJggrJqzSbCwKFOUBqmnN5JCHaZJm5DWs2tNHzlZhvRuh6Uu7ye4uLbin2x1Cl5fzMOjE28QGOqUB5qFEacYEjlfMAsZd6WEOTyK%2BQCC2GZC87usY9zZmqvr9b7lBdVCSZ6V6D41nNy4hntbgmUoVfuJAbeeXpj104whKFhaE8kqArWa3eQ%2Bjf6EkHH7ZnHRncqZhTGbwDP6u766NDmcdqnonmBIgG%2BbWyRNMffSTpmYrSJ1HhFYHDS5bYFqMsvX2XoDY6nh3XoqEftkDyvMNzEQk3gPMMIb0cPGUO%2Ff6&X-Amz-Signature=b5df4b8f67d9c0de42049fbd10b1a884a7585f85720fcdd3d161a6aa25bf1b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPMA72FM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFPtVZc5ST97uSc0%2FWuhDZqo8d6hXv0cNXsjqTE6KnY7AiEA1PFHopAPS2QB9Vrn3pgpxPOUR9pwmjbp7XUVrEhITXMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsrVajLtnDY5WzYtSrcA5Phqvo%2FHtd%2BP2axSmnOQjlozjcaHila%2B9Y4WhXlyn6uLWpsy9AjWQs7GqF9vQqxZhr1mpC5rRTyRBIZO7y4P9fSWZg2qkeAn8bfRPjSxkbApRPEBxSCJMh%2BOvkeV3fRR8iTm0R7Dxs06Qw0zTz2obKdoc6koU0MNu4XmYLDRp5SVhKXNUSa4ZLQ0W8KNR4Oswbn0ZLJgsaqYmMh%2FpQJyEpWOt8DDu5FnoxYf0ZRSf4ryNN09nzbwmyyIg7AzMwHLhu1VAe%2FC5ejnno%2FaSN3P74T37BDb9xJE98lynd1OKOgK2NmX%2FhJSGnB1W7MED13Pg3%2F3bIjCSIBZHnC2mh91Z%2Bk2GYAg79rkqIxQpp7sRWOce45PZaiKPTvg8tagImku1LfhzuXYVQYB1KA5CiUUJ5irxFA7wbr6rrwxe1y4uKV3C5eUCZ9PjPnZW0vzXKzKkdsIvQgZPpotng%2Bjlm6w7XHNu6s5UsJMqukrFYDnto2esOIuea8woukKp%2Fjw1tj2NdQlXT3DeuOxjKnPj2P5OsGjDkxnu%2FzLx2w%2B9IV6Z9q6PB1xfC9ZW28eyVVJggrJqzSbCwKFOUBqmnN5JCHaZJm5DWs2tNHzlZhvRuh6Uu7ye4uLbin2x1Cl5fzMOjE28QGOqUB5qFEacYEjlfMAsZd6WEOTyK%2BQCC2GZC87usY9zZmqvr9b7lBdVCSZ6V6D41nNy4hntbgmUoVfuJAbeeXpj104whKFhaE8kqArWa3eQ%2Bjf6EkHH7ZnHRncqZhTGbwDP6u766NDmcdqnonmBIgG%2BbWyRNMffSTpmYrSJ1HhFYHDS5bYFqMsvX2XoDY6nh3XoqEftkDyvMNzEQk3gPMMIb0cPGUO%2Ff6&X-Amz-Signature=e0308ff6f33b6fdb2785cfdb180cf09fe51c411ae284f07e8ad5e834f4308dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPMA72FM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFPtVZc5ST97uSc0%2FWuhDZqo8d6hXv0cNXsjqTE6KnY7AiEA1PFHopAPS2QB9Vrn3pgpxPOUR9pwmjbp7XUVrEhITXMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsrVajLtnDY5WzYtSrcA5Phqvo%2FHtd%2BP2axSmnOQjlozjcaHila%2B9Y4WhXlyn6uLWpsy9AjWQs7GqF9vQqxZhr1mpC5rRTyRBIZO7y4P9fSWZg2qkeAn8bfRPjSxkbApRPEBxSCJMh%2BOvkeV3fRR8iTm0R7Dxs06Qw0zTz2obKdoc6koU0MNu4XmYLDRp5SVhKXNUSa4ZLQ0W8KNR4Oswbn0ZLJgsaqYmMh%2FpQJyEpWOt8DDu5FnoxYf0ZRSf4ryNN09nzbwmyyIg7AzMwHLhu1VAe%2FC5ejnno%2FaSN3P74T37BDb9xJE98lynd1OKOgK2NmX%2FhJSGnB1W7MED13Pg3%2F3bIjCSIBZHnC2mh91Z%2Bk2GYAg79rkqIxQpp7sRWOce45PZaiKPTvg8tagImku1LfhzuXYVQYB1KA5CiUUJ5irxFA7wbr6rrwxe1y4uKV3C5eUCZ9PjPnZW0vzXKzKkdsIvQgZPpotng%2Bjlm6w7XHNu6s5UsJMqukrFYDnto2esOIuea8woukKp%2Fjw1tj2NdQlXT3DeuOxjKnPj2P5OsGjDkxnu%2FzLx2w%2B9IV6Z9q6PB1xfC9ZW28eyVVJggrJqzSbCwKFOUBqmnN5JCHaZJm5DWs2tNHzlZhvRuh6Uu7ye4uLbin2x1Cl5fzMOjE28QGOqUB5qFEacYEjlfMAsZd6WEOTyK%2BQCC2GZC87usY9zZmqvr9b7lBdVCSZ6V6D41nNy4hntbgmUoVfuJAbeeXpj104whKFhaE8kqArWa3eQ%2Bjf6EkHH7ZnHRncqZhTGbwDP6u766NDmcdqnonmBIgG%2BbWyRNMffSTpmYrSJ1HhFYHDS5bYFqMsvX2XoDY6nh3XoqEftkDyvMNzEQk3gPMMIb0cPGUO%2Ff6&X-Amz-Signature=3def5ada938a49fc265a865c111b135647673ca66c4274c334cc6df87844f3f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPMA72FM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFPtVZc5ST97uSc0%2FWuhDZqo8d6hXv0cNXsjqTE6KnY7AiEA1PFHopAPS2QB9Vrn3pgpxPOUR9pwmjbp7XUVrEhITXMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsrVajLtnDY5WzYtSrcA5Phqvo%2FHtd%2BP2axSmnOQjlozjcaHila%2B9Y4WhXlyn6uLWpsy9AjWQs7GqF9vQqxZhr1mpC5rRTyRBIZO7y4P9fSWZg2qkeAn8bfRPjSxkbApRPEBxSCJMh%2BOvkeV3fRR8iTm0R7Dxs06Qw0zTz2obKdoc6koU0MNu4XmYLDRp5SVhKXNUSa4ZLQ0W8KNR4Oswbn0ZLJgsaqYmMh%2FpQJyEpWOt8DDu5FnoxYf0ZRSf4ryNN09nzbwmyyIg7AzMwHLhu1VAe%2FC5ejnno%2FaSN3P74T37BDb9xJE98lynd1OKOgK2NmX%2FhJSGnB1W7MED13Pg3%2F3bIjCSIBZHnC2mh91Z%2Bk2GYAg79rkqIxQpp7sRWOce45PZaiKPTvg8tagImku1LfhzuXYVQYB1KA5CiUUJ5irxFA7wbr6rrwxe1y4uKV3C5eUCZ9PjPnZW0vzXKzKkdsIvQgZPpotng%2Bjlm6w7XHNu6s5UsJMqukrFYDnto2esOIuea8woukKp%2Fjw1tj2NdQlXT3DeuOxjKnPj2P5OsGjDkxnu%2FzLx2w%2B9IV6Z9q6PB1xfC9ZW28eyVVJggrJqzSbCwKFOUBqmnN5JCHaZJm5DWs2tNHzlZhvRuh6Uu7ye4uLbin2x1Cl5fzMOjE28QGOqUB5qFEacYEjlfMAsZd6WEOTyK%2BQCC2GZC87usY9zZmqvr9b7lBdVCSZ6V6D41nNy4hntbgmUoVfuJAbeeXpj104whKFhaE8kqArWa3eQ%2Bjf6EkHH7ZnHRncqZhTGbwDP6u766NDmcdqnonmBIgG%2BbWyRNMffSTpmYrSJ1HhFYHDS5bYFqMsvX2XoDY6nh3XoqEftkDyvMNzEQk3gPMMIb0cPGUO%2Ff6&X-Amz-Signature=fcf90e9b7c63cdad3c3270d29c5f11c3102541e4d806350bf6b0b5de81d32d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPMA72FM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFPtVZc5ST97uSc0%2FWuhDZqo8d6hXv0cNXsjqTE6KnY7AiEA1PFHopAPS2QB9Vrn3pgpxPOUR9pwmjbp7XUVrEhITXMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsrVajLtnDY5WzYtSrcA5Phqvo%2FHtd%2BP2axSmnOQjlozjcaHila%2B9Y4WhXlyn6uLWpsy9AjWQs7GqF9vQqxZhr1mpC5rRTyRBIZO7y4P9fSWZg2qkeAn8bfRPjSxkbApRPEBxSCJMh%2BOvkeV3fRR8iTm0R7Dxs06Qw0zTz2obKdoc6koU0MNu4XmYLDRp5SVhKXNUSa4ZLQ0W8KNR4Oswbn0ZLJgsaqYmMh%2FpQJyEpWOt8DDu5FnoxYf0ZRSf4ryNN09nzbwmyyIg7AzMwHLhu1VAe%2FC5ejnno%2FaSN3P74T37BDb9xJE98lynd1OKOgK2NmX%2FhJSGnB1W7MED13Pg3%2F3bIjCSIBZHnC2mh91Z%2Bk2GYAg79rkqIxQpp7sRWOce45PZaiKPTvg8tagImku1LfhzuXYVQYB1KA5CiUUJ5irxFA7wbr6rrwxe1y4uKV3C5eUCZ9PjPnZW0vzXKzKkdsIvQgZPpotng%2Bjlm6w7XHNu6s5UsJMqukrFYDnto2esOIuea8woukKp%2Fjw1tj2NdQlXT3DeuOxjKnPj2P5OsGjDkxnu%2FzLx2w%2B9IV6Z9q6PB1xfC9ZW28eyVVJggrJqzSbCwKFOUBqmnN5JCHaZJm5DWs2tNHzlZhvRuh6Uu7ye4uLbin2x1Cl5fzMOjE28QGOqUB5qFEacYEjlfMAsZd6WEOTyK%2BQCC2GZC87usY9zZmqvr9b7lBdVCSZ6V6D41nNy4hntbgmUoVfuJAbeeXpj104whKFhaE8kqArWa3eQ%2Bjf6EkHH7ZnHRncqZhTGbwDP6u766NDmcdqnonmBIgG%2BbWyRNMffSTpmYrSJ1HhFYHDS5bYFqMsvX2XoDY6nh3XoqEftkDyvMNzEQk3gPMMIb0cPGUO%2Ff6&X-Amz-Signature=ff548ccfc26152a44f30cf70cf72f88b139d4e1c09fc02ce602e1a68173fb395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPMA72FM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFPtVZc5ST97uSc0%2FWuhDZqo8d6hXv0cNXsjqTE6KnY7AiEA1PFHopAPS2QB9Vrn3pgpxPOUR9pwmjbp7XUVrEhITXMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsrVajLtnDY5WzYtSrcA5Phqvo%2FHtd%2BP2axSmnOQjlozjcaHila%2B9Y4WhXlyn6uLWpsy9AjWQs7GqF9vQqxZhr1mpC5rRTyRBIZO7y4P9fSWZg2qkeAn8bfRPjSxkbApRPEBxSCJMh%2BOvkeV3fRR8iTm0R7Dxs06Qw0zTz2obKdoc6koU0MNu4XmYLDRp5SVhKXNUSa4ZLQ0W8KNR4Oswbn0ZLJgsaqYmMh%2FpQJyEpWOt8DDu5FnoxYf0ZRSf4ryNN09nzbwmyyIg7AzMwHLhu1VAe%2FC5ejnno%2FaSN3P74T37BDb9xJE98lynd1OKOgK2NmX%2FhJSGnB1W7MED13Pg3%2F3bIjCSIBZHnC2mh91Z%2Bk2GYAg79rkqIxQpp7sRWOce45PZaiKPTvg8tagImku1LfhzuXYVQYB1KA5CiUUJ5irxFA7wbr6rrwxe1y4uKV3C5eUCZ9PjPnZW0vzXKzKkdsIvQgZPpotng%2Bjlm6w7XHNu6s5UsJMqukrFYDnto2esOIuea8woukKp%2Fjw1tj2NdQlXT3DeuOxjKnPj2P5OsGjDkxnu%2FzLx2w%2B9IV6Z9q6PB1xfC9ZW28eyVVJggrJqzSbCwKFOUBqmnN5JCHaZJm5DWs2tNHzlZhvRuh6Uu7ye4uLbin2x1Cl5fzMOjE28QGOqUB5qFEacYEjlfMAsZd6WEOTyK%2BQCC2GZC87usY9zZmqvr9b7lBdVCSZ6V6D41nNy4hntbgmUoVfuJAbeeXpj104whKFhaE8kqArWa3eQ%2Bjf6EkHH7ZnHRncqZhTGbwDP6u766NDmcdqnonmBIgG%2BbWyRNMffSTpmYrSJ1HhFYHDS5bYFqMsvX2XoDY6nh3XoqEftkDyvMNzEQk3gPMMIb0cPGUO%2Ff6&X-Amz-Signature=e0308ff6f33b6fdb2785cfdb180cf09fe51c411ae284f07e8ad5e834f4308dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPMA72FM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFPtVZc5ST97uSc0%2FWuhDZqo8d6hXv0cNXsjqTE6KnY7AiEA1PFHopAPS2QB9Vrn3pgpxPOUR9pwmjbp7XUVrEhITXMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsrVajLtnDY5WzYtSrcA5Phqvo%2FHtd%2BP2axSmnOQjlozjcaHila%2B9Y4WhXlyn6uLWpsy9AjWQs7GqF9vQqxZhr1mpC5rRTyRBIZO7y4P9fSWZg2qkeAn8bfRPjSxkbApRPEBxSCJMh%2BOvkeV3fRR8iTm0R7Dxs06Qw0zTz2obKdoc6koU0MNu4XmYLDRp5SVhKXNUSa4ZLQ0W8KNR4Oswbn0ZLJgsaqYmMh%2FpQJyEpWOt8DDu5FnoxYf0ZRSf4ryNN09nzbwmyyIg7AzMwHLhu1VAe%2FC5ejnno%2FaSN3P74T37BDb9xJE98lynd1OKOgK2NmX%2FhJSGnB1W7MED13Pg3%2F3bIjCSIBZHnC2mh91Z%2Bk2GYAg79rkqIxQpp7sRWOce45PZaiKPTvg8tagImku1LfhzuXYVQYB1KA5CiUUJ5irxFA7wbr6rrwxe1y4uKV3C5eUCZ9PjPnZW0vzXKzKkdsIvQgZPpotng%2Bjlm6w7XHNu6s5UsJMqukrFYDnto2esOIuea8woukKp%2Fjw1tj2NdQlXT3DeuOxjKnPj2P5OsGjDkxnu%2FzLx2w%2B9IV6Z9q6PB1xfC9ZW28eyVVJggrJqzSbCwKFOUBqmnN5JCHaZJm5DWs2tNHzlZhvRuh6Uu7ye4uLbin2x1Cl5fzMOjE28QGOqUB5qFEacYEjlfMAsZd6WEOTyK%2BQCC2GZC87usY9zZmqvr9b7lBdVCSZ6V6D41nNy4hntbgmUoVfuJAbeeXpj104whKFhaE8kqArWa3eQ%2Bjf6EkHH7ZnHRncqZhTGbwDP6u766NDmcdqnonmBIgG%2BbWyRNMffSTpmYrSJ1HhFYHDS5bYFqMsvX2XoDY6nh3XoqEftkDyvMNzEQk3gPMMIb0cPGUO%2Ff6&X-Amz-Signature=cb19250549779df731a6ccbbc5be863cddec2f0010a5c5d23d2ab78c72b104a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPMA72FM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFPtVZc5ST97uSc0%2FWuhDZqo8d6hXv0cNXsjqTE6KnY7AiEA1PFHopAPS2QB9Vrn3pgpxPOUR9pwmjbp7XUVrEhITXMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsrVajLtnDY5WzYtSrcA5Phqvo%2FHtd%2BP2axSmnOQjlozjcaHila%2B9Y4WhXlyn6uLWpsy9AjWQs7GqF9vQqxZhr1mpC5rRTyRBIZO7y4P9fSWZg2qkeAn8bfRPjSxkbApRPEBxSCJMh%2BOvkeV3fRR8iTm0R7Dxs06Qw0zTz2obKdoc6koU0MNu4XmYLDRp5SVhKXNUSa4ZLQ0W8KNR4Oswbn0ZLJgsaqYmMh%2FpQJyEpWOt8DDu5FnoxYf0ZRSf4ryNN09nzbwmyyIg7AzMwHLhu1VAe%2FC5ejnno%2FaSN3P74T37BDb9xJE98lynd1OKOgK2NmX%2FhJSGnB1W7MED13Pg3%2F3bIjCSIBZHnC2mh91Z%2Bk2GYAg79rkqIxQpp7sRWOce45PZaiKPTvg8tagImku1LfhzuXYVQYB1KA5CiUUJ5irxFA7wbr6rrwxe1y4uKV3C5eUCZ9PjPnZW0vzXKzKkdsIvQgZPpotng%2Bjlm6w7XHNu6s5UsJMqukrFYDnto2esOIuea8woukKp%2Fjw1tj2NdQlXT3DeuOxjKnPj2P5OsGjDkxnu%2FzLx2w%2B9IV6Z9q6PB1xfC9ZW28eyVVJggrJqzSbCwKFOUBqmnN5JCHaZJm5DWs2tNHzlZhvRuh6Uu7ye4uLbin2x1Cl5fzMOjE28QGOqUB5qFEacYEjlfMAsZd6WEOTyK%2BQCC2GZC87usY9zZmqvr9b7lBdVCSZ6V6D41nNy4hntbgmUoVfuJAbeeXpj104whKFhaE8kqArWa3eQ%2Bjf6EkHH7ZnHRncqZhTGbwDP6u766NDmcdqnonmBIgG%2BbWyRNMffSTpmYrSJ1HhFYHDS5bYFqMsvX2XoDY6nh3XoqEftkDyvMNzEQk3gPMMIb0cPGUO%2Ff6&X-Amz-Signature=8a3fd7a8e7bdeee93a2253d08fc94338501a63fa495102d6012cde9e62c1a0f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPMA72FM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFPtVZc5ST97uSc0%2FWuhDZqo8d6hXv0cNXsjqTE6KnY7AiEA1PFHopAPS2QB9Vrn3pgpxPOUR9pwmjbp7XUVrEhITXMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsrVajLtnDY5WzYtSrcA5Phqvo%2FHtd%2BP2axSmnOQjlozjcaHila%2B9Y4WhXlyn6uLWpsy9AjWQs7GqF9vQqxZhr1mpC5rRTyRBIZO7y4P9fSWZg2qkeAn8bfRPjSxkbApRPEBxSCJMh%2BOvkeV3fRR8iTm0R7Dxs06Qw0zTz2obKdoc6koU0MNu4XmYLDRp5SVhKXNUSa4ZLQ0W8KNR4Oswbn0ZLJgsaqYmMh%2FpQJyEpWOt8DDu5FnoxYf0ZRSf4ryNN09nzbwmyyIg7AzMwHLhu1VAe%2FC5ejnno%2FaSN3P74T37BDb9xJE98lynd1OKOgK2NmX%2FhJSGnB1W7MED13Pg3%2F3bIjCSIBZHnC2mh91Z%2Bk2GYAg79rkqIxQpp7sRWOce45PZaiKPTvg8tagImku1LfhzuXYVQYB1KA5CiUUJ5irxFA7wbr6rrwxe1y4uKV3C5eUCZ9PjPnZW0vzXKzKkdsIvQgZPpotng%2Bjlm6w7XHNu6s5UsJMqukrFYDnto2esOIuea8woukKp%2Fjw1tj2NdQlXT3DeuOxjKnPj2P5OsGjDkxnu%2FzLx2w%2B9IV6Z9q6PB1xfC9ZW28eyVVJggrJqzSbCwKFOUBqmnN5JCHaZJm5DWs2tNHzlZhvRuh6Uu7ye4uLbin2x1Cl5fzMOjE28QGOqUB5qFEacYEjlfMAsZd6WEOTyK%2BQCC2GZC87usY9zZmqvr9b7lBdVCSZ6V6D41nNy4hntbgmUoVfuJAbeeXpj104whKFhaE8kqArWa3eQ%2Bjf6EkHH7ZnHRncqZhTGbwDP6u766NDmcdqnonmBIgG%2BbWyRNMffSTpmYrSJ1HhFYHDS5bYFqMsvX2XoDY6nh3XoqEftkDyvMNzEQk3gPMMIb0cPGUO%2Ff6&X-Amz-Signature=48731ece0f15a611a82acc3fff1e13774a59577e56b466ffdc0b52b98eed339b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
