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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGIFKCD%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK%2FYwd2AlYyH4z4GQRy%2F0Jpu3CHB0zk1fmgdhIPGlZaAiEA2AfHfTKMvK9N5j%2FPt3HPgNh%2BuQlSGBEkgGNu%2FcM1vS4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpPS4hce63zRjONiSrcA0VHPbIgBdQ3yJ4O2QXzso%2BXoPw7NgOkI1B03RwWX3kDPSgEajR%2B5Ud00Dew62FvxocPvce4ksYUznaoLWBTTsoAmHT8RunaAWKSChahXRJAnvGBpbEy6xsyDpSnPgH78KYtihqjSxr1AZPdxw8B5EFFdEeL0zRTSpblKH4l89qysmluVcNxboonWzJ1lEps1O5Fyk6Q02A0jW%2F301033MxNH5DPz41kYVTp%2FQAe7JtuG31SexrxQcxaT2s0d502Z4%2F5WRuue7XnuvvQvLi2oIfe2%2BKvhcnBXiEDzOEBg2Gg7r90nw1DsfZqDT%2F0meQo07ftuToXTImUN6vU3nC8xXG8P2w0SWzD%2FeVS7h3GkWcjVUQHbYNJaySOwwh1rIHKtcppiixKfHG%2FaD4gyi3d6I7b0yFK306Vwr5OL9GswKmkzhoS7sxfoGgjlNrQwGZcOJTTm0oYJw%2BvkNIqAJKl%2FeMS2RsfdjGErq8n2LrgqY93VZ0JE86IKhl82Ku9WuhzGp%2BoGg6u0BkDhMVgvYPDm8N8lBzIGuuP9Lg9u3fEdkB1YShHdDUBazabvsSBZVzblkIdsr6xVN%2FQ8Ec8flICEiG206BeJyoe0YqL%2F2LvFyZgsDtbu4rURhMFRrfxMPCP2M0GOqUB%2FWgWZlqkJB6cut0SrNvaBUQ9%2BCqWIzu472IWh2deGA8LOBwyDFUu1hs91oLGFAJSSFDMbwWKRaC1RkPnkwgA1pmLqcrBJNSxHVO%2B3%2F89qmf2UjeqCxmlLC%2FXCJGdDTmRBrx3wywnJ6bR9quoLCbxcPHw%2By4b123rTO3eDkgWZ91MYKzz4oKEOmLcDxlGtqMlHNxjsQXL5Lb7YVOCWIcFhfjcG%2F1W&X-Amz-Signature=5cc8ecc5ca476a23560ab83cfa206e03a9d828965b66219d36ffa78f964f0d0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGIFKCD%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK%2FYwd2AlYyH4z4GQRy%2F0Jpu3CHB0zk1fmgdhIPGlZaAiEA2AfHfTKMvK9N5j%2FPt3HPgNh%2BuQlSGBEkgGNu%2FcM1vS4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpPS4hce63zRjONiSrcA0VHPbIgBdQ3yJ4O2QXzso%2BXoPw7NgOkI1B03RwWX3kDPSgEajR%2B5Ud00Dew62FvxocPvce4ksYUznaoLWBTTsoAmHT8RunaAWKSChahXRJAnvGBpbEy6xsyDpSnPgH78KYtihqjSxr1AZPdxw8B5EFFdEeL0zRTSpblKH4l89qysmluVcNxboonWzJ1lEps1O5Fyk6Q02A0jW%2F301033MxNH5DPz41kYVTp%2FQAe7JtuG31SexrxQcxaT2s0d502Z4%2F5WRuue7XnuvvQvLi2oIfe2%2BKvhcnBXiEDzOEBg2Gg7r90nw1DsfZqDT%2F0meQo07ftuToXTImUN6vU3nC8xXG8P2w0SWzD%2FeVS7h3GkWcjVUQHbYNJaySOwwh1rIHKtcppiixKfHG%2FaD4gyi3d6I7b0yFK306Vwr5OL9GswKmkzhoS7sxfoGgjlNrQwGZcOJTTm0oYJw%2BvkNIqAJKl%2FeMS2RsfdjGErq8n2LrgqY93VZ0JE86IKhl82Ku9WuhzGp%2BoGg6u0BkDhMVgvYPDm8N8lBzIGuuP9Lg9u3fEdkB1YShHdDUBazabvsSBZVzblkIdsr6xVN%2FQ8Ec8flICEiG206BeJyoe0YqL%2F2LvFyZgsDtbu4rURhMFRrfxMPCP2M0GOqUB%2FWgWZlqkJB6cut0SrNvaBUQ9%2BCqWIzu472IWh2deGA8LOBwyDFUu1hs91oLGFAJSSFDMbwWKRaC1RkPnkwgA1pmLqcrBJNSxHVO%2B3%2F89qmf2UjeqCxmlLC%2FXCJGdDTmRBrx3wywnJ6bR9quoLCbxcPHw%2By4b123rTO3eDkgWZ91MYKzz4oKEOmLcDxlGtqMlHNxjsQXL5Lb7YVOCWIcFhfjcG%2F1W&X-Amz-Signature=5a51dac440b6ebbc51bf46694001f7671e51a2e5962e5093665afd9597a73634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGIFKCD%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK%2FYwd2AlYyH4z4GQRy%2F0Jpu3CHB0zk1fmgdhIPGlZaAiEA2AfHfTKMvK9N5j%2FPt3HPgNh%2BuQlSGBEkgGNu%2FcM1vS4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpPS4hce63zRjONiSrcA0VHPbIgBdQ3yJ4O2QXzso%2BXoPw7NgOkI1B03RwWX3kDPSgEajR%2B5Ud00Dew62FvxocPvce4ksYUznaoLWBTTsoAmHT8RunaAWKSChahXRJAnvGBpbEy6xsyDpSnPgH78KYtihqjSxr1AZPdxw8B5EFFdEeL0zRTSpblKH4l89qysmluVcNxboonWzJ1lEps1O5Fyk6Q02A0jW%2F301033MxNH5DPz41kYVTp%2FQAe7JtuG31SexrxQcxaT2s0d502Z4%2F5WRuue7XnuvvQvLi2oIfe2%2BKvhcnBXiEDzOEBg2Gg7r90nw1DsfZqDT%2F0meQo07ftuToXTImUN6vU3nC8xXG8P2w0SWzD%2FeVS7h3GkWcjVUQHbYNJaySOwwh1rIHKtcppiixKfHG%2FaD4gyi3d6I7b0yFK306Vwr5OL9GswKmkzhoS7sxfoGgjlNrQwGZcOJTTm0oYJw%2BvkNIqAJKl%2FeMS2RsfdjGErq8n2LrgqY93VZ0JE86IKhl82Ku9WuhzGp%2BoGg6u0BkDhMVgvYPDm8N8lBzIGuuP9Lg9u3fEdkB1YShHdDUBazabvsSBZVzblkIdsr6xVN%2FQ8Ec8flICEiG206BeJyoe0YqL%2F2LvFyZgsDtbu4rURhMFRrfxMPCP2M0GOqUB%2FWgWZlqkJB6cut0SrNvaBUQ9%2BCqWIzu472IWh2deGA8LOBwyDFUu1hs91oLGFAJSSFDMbwWKRaC1RkPnkwgA1pmLqcrBJNSxHVO%2B3%2F89qmf2UjeqCxmlLC%2FXCJGdDTmRBrx3wywnJ6bR9quoLCbxcPHw%2By4b123rTO3eDkgWZ91MYKzz4oKEOmLcDxlGtqMlHNxjsQXL5Lb7YVOCWIcFhfjcG%2F1W&X-Amz-Signature=c7d7f23c7bd882feb86a6183e1e338aee0f8c0391fd64b9299d6c8560118a392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGIFKCD%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK%2FYwd2AlYyH4z4GQRy%2F0Jpu3CHB0zk1fmgdhIPGlZaAiEA2AfHfTKMvK9N5j%2FPt3HPgNh%2BuQlSGBEkgGNu%2FcM1vS4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpPS4hce63zRjONiSrcA0VHPbIgBdQ3yJ4O2QXzso%2BXoPw7NgOkI1B03RwWX3kDPSgEajR%2B5Ud00Dew62FvxocPvce4ksYUznaoLWBTTsoAmHT8RunaAWKSChahXRJAnvGBpbEy6xsyDpSnPgH78KYtihqjSxr1AZPdxw8B5EFFdEeL0zRTSpblKH4l89qysmluVcNxboonWzJ1lEps1O5Fyk6Q02A0jW%2F301033MxNH5DPz41kYVTp%2FQAe7JtuG31SexrxQcxaT2s0d502Z4%2F5WRuue7XnuvvQvLi2oIfe2%2BKvhcnBXiEDzOEBg2Gg7r90nw1DsfZqDT%2F0meQo07ftuToXTImUN6vU3nC8xXG8P2w0SWzD%2FeVS7h3GkWcjVUQHbYNJaySOwwh1rIHKtcppiixKfHG%2FaD4gyi3d6I7b0yFK306Vwr5OL9GswKmkzhoS7sxfoGgjlNrQwGZcOJTTm0oYJw%2BvkNIqAJKl%2FeMS2RsfdjGErq8n2LrgqY93VZ0JE86IKhl82Ku9WuhzGp%2BoGg6u0BkDhMVgvYPDm8N8lBzIGuuP9Lg9u3fEdkB1YShHdDUBazabvsSBZVzblkIdsr6xVN%2FQ8Ec8flICEiG206BeJyoe0YqL%2F2LvFyZgsDtbu4rURhMFRrfxMPCP2M0GOqUB%2FWgWZlqkJB6cut0SrNvaBUQ9%2BCqWIzu472IWh2deGA8LOBwyDFUu1hs91oLGFAJSSFDMbwWKRaC1RkPnkwgA1pmLqcrBJNSxHVO%2B3%2F89qmf2UjeqCxmlLC%2FXCJGdDTmRBrx3wywnJ6bR9quoLCbxcPHw%2By4b123rTO3eDkgWZ91MYKzz4oKEOmLcDxlGtqMlHNxjsQXL5Lb7YVOCWIcFhfjcG%2F1W&X-Amz-Signature=994bd797e38e52c1d6e1c17a293448e42cf1b884ecd6837ae92979b8c9d04116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGIFKCD%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK%2FYwd2AlYyH4z4GQRy%2F0Jpu3CHB0zk1fmgdhIPGlZaAiEA2AfHfTKMvK9N5j%2FPt3HPgNh%2BuQlSGBEkgGNu%2FcM1vS4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpPS4hce63zRjONiSrcA0VHPbIgBdQ3yJ4O2QXzso%2BXoPw7NgOkI1B03RwWX3kDPSgEajR%2B5Ud00Dew62FvxocPvce4ksYUznaoLWBTTsoAmHT8RunaAWKSChahXRJAnvGBpbEy6xsyDpSnPgH78KYtihqjSxr1AZPdxw8B5EFFdEeL0zRTSpblKH4l89qysmluVcNxboonWzJ1lEps1O5Fyk6Q02A0jW%2F301033MxNH5DPz41kYVTp%2FQAe7JtuG31SexrxQcxaT2s0d502Z4%2F5WRuue7XnuvvQvLi2oIfe2%2BKvhcnBXiEDzOEBg2Gg7r90nw1DsfZqDT%2F0meQo07ftuToXTImUN6vU3nC8xXG8P2w0SWzD%2FeVS7h3GkWcjVUQHbYNJaySOwwh1rIHKtcppiixKfHG%2FaD4gyi3d6I7b0yFK306Vwr5OL9GswKmkzhoS7sxfoGgjlNrQwGZcOJTTm0oYJw%2BvkNIqAJKl%2FeMS2RsfdjGErq8n2LrgqY93VZ0JE86IKhl82Ku9WuhzGp%2BoGg6u0BkDhMVgvYPDm8N8lBzIGuuP9Lg9u3fEdkB1YShHdDUBazabvsSBZVzblkIdsr6xVN%2FQ8Ec8flICEiG206BeJyoe0YqL%2F2LvFyZgsDtbu4rURhMFRrfxMPCP2M0GOqUB%2FWgWZlqkJB6cut0SrNvaBUQ9%2BCqWIzu472IWh2deGA8LOBwyDFUu1hs91oLGFAJSSFDMbwWKRaC1RkPnkwgA1pmLqcrBJNSxHVO%2B3%2F89qmf2UjeqCxmlLC%2FXCJGdDTmRBrx3wywnJ6bR9quoLCbxcPHw%2By4b123rTO3eDkgWZ91MYKzz4oKEOmLcDxlGtqMlHNxjsQXL5Lb7YVOCWIcFhfjcG%2F1W&X-Amz-Signature=b69d2e89ad80279de6a48cb6d2e61ec8af653396c16aeba2c237f2ac36e615a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGIFKCD%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK%2FYwd2AlYyH4z4GQRy%2F0Jpu3CHB0zk1fmgdhIPGlZaAiEA2AfHfTKMvK9N5j%2FPt3HPgNh%2BuQlSGBEkgGNu%2FcM1vS4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpPS4hce63zRjONiSrcA0VHPbIgBdQ3yJ4O2QXzso%2BXoPw7NgOkI1B03RwWX3kDPSgEajR%2B5Ud00Dew62FvxocPvce4ksYUznaoLWBTTsoAmHT8RunaAWKSChahXRJAnvGBpbEy6xsyDpSnPgH78KYtihqjSxr1AZPdxw8B5EFFdEeL0zRTSpblKH4l89qysmluVcNxboonWzJ1lEps1O5Fyk6Q02A0jW%2F301033MxNH5DPz41kYVTp%2FQAe7JtuG31SexrxQcxaT2s0d502Z4%2F5WRuue7XnuvvQvLi2oIfe2%2BKvhcnBXiEDzOEBg2Gg7r90nw1DsfZqDT%2F0meQo07ftuToXTImUN6vU3nC8xXG8P2w0SWzD%2FeVS7h3GkWcjVUQHbYNJaySOwwh1rIHKtcppiixKfHG%2FaD4gyi3d6I7b0yFK306Vwr5OL9GswKmkzhoS7sxfoGgjlNrQwGZcOJTTm0oYJw%2BvkNIqAJKl%2FeMS2RsfdjGErq8n2LrgqY93VZ0JE86IKhl82Ku9WuhzGp%2BoGg6u0BkDhMVgvYPDm8N8lBzIGuuP9Lg9u3fEdkB1YShHdDUBazabvsSBZVzblkIdsr6xVN%2FQ8Ec8flICEiG206BeJyoe0YqL%2F2LvFyZgsDtbu4rURhMFRrfxMPCP2M0GOqUB%2FWgWZlqkJB6cut0SrNvaBUQ9%2BCqWIzu472IWh2deGA8LOBwyDFUu1hs91oLGFAJSSFDMbwWKRaC1RkPnkwgA1pmLqcrBJNSxHVO%2B3%2F89qmf2UjeqCxmlLC%2FXCJGdDTmRBrx3wywnJ6bR9quoLCbxcPHw%2By4b123rTO3eDkgWZ91MYKzz4oKEOmLcDxlGtqMlHNxjsQXL5Lb7YVOCWIcFhfjcG%2F1W&X-Amz-Signature=193dfdb5d61ccf67d647cbfcb6ddb133914cf6e84b082811a11752cda5f95897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGIFKCD%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK%2FYwd2AlYyH4z4GQRy%2F0Jpu3CHB0zk1fmgdhIPGlZaAiEA2AfHfTKMvK9N5j%2FPt3HPgNh%2BuQlSGBEkgGNu%2FcM1vS4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpPS4hce63zRjONiSrcA0VHPbIgBdQ3yJ4O2QXzso%2BXoPw7NgOkI1B03RwWX3kDPSgEajR%2B5Ud00Dew62FvxocPvce4ksYUznaoLWBTTsoAmHT8RunaAWKSChahXRJAnvGBpbEy6xsyDpSnPgH78KYtihqjSxr1AZPdxw8B5EFFdEeL0zRTSpblKH4l89qysmluVcNxboonWzJ1lEps1O5Fyk6Q02A0jW%2F301033MxNH5DPz41kYVTp%2FQAe7JtuG31SexrxQcxaT2s0d502Z4%2F5WRuue7XnuvvQvLi2oIfe2%2BKvhcnBXiEDzOEBg2Gg7r90nw1DsfZqDT%2F0meQo07ftuToXTImUN6vU3nC8xXG8P2w0SWzD%2FeVS7h3GkWcjVUQHbYNJaySOwwh1rIHKtcppiixKfHG%2FaD4gyi3d6I7b0yFK306Vwr5OL9GswKmkzhoS7sxfoGgjlNrQwGZcOJTTm0oYJw%2BvkNIqAJKl%2FeMS2RsfdjGErq8n2LrgqY93VZ0JE86IKhl82Ku9WuhzGp%2BoGg6u0BkDhMVgvYPDm8N8lBzIGuuP9Lg9u3fEdkB1YShHdDUBazabvsSBZVzblkIdsr6xVN%2FQ8Ec8flICEiG206BeJyoe0YqL%2F2LvFyZgsDtbu4rURhMFRrfxMPCP2M0GOqUB%2FWgWZlqkJB6cut0SrNvaBUQ9%2BCqWIzu472IWh2deGA8LOBwyDFUu1hs91oLGFAJSSFDMbwWKRaC1RkPnkwgA1pmLqcrBJNSxHVO%2B3%2F89qmf2UjeqCxmlLC%2FXCJGdDTmRBrx3wywnJ6bR9quoLCbxcPHw%2By4b123rTO3eDkgWZ91MYKzz4oKEOmLcDxlGtqMlHNxjsQXL5Lb7YVOCWIcFhfjcG%2F1W&X-Amz-Signature=c904563db2adf779da4cc1429ae292d7321cc31d43ba3497d1927c0845216649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGIFKCD%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK%2FYwd2AlYyH4z4GQRy%2F0Jpu3CHB0zk1fmgdhIPGlZaAiEA2AfHfTKMvK9N5j%2FPt3HPgNh%2BuQlSGBEkgGNu%2FcM1vS4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpPS4hce63zRjONiSrcA0VHPbIgBdQ3yJ4O2QXzso%2BXoPw7NgOkI1B03RwWX3kDPSgEajR%2B5Ud00Dew62FvxocPvce4ksYUznaoLWBTTsoAmHT8RunaAWKSChahXRJAnvGBpbEy6xsyDpSnPgH78KYtihqjSxr1AZPdxw8B5EFFdEeL0zRTSpblKH4l89qysmluVcNxboonWzJ1lEps1O5Fyk6Q02A0jW%2F301033MxNH5DPz41kYVTp%2FQAe7JtuG31SexrxQcxaT2s0d502Z4%2F5WRuue7XnuvvQvLi2oIfe2%2BKvhcnBXiEDzOEBg2Gg7r90nw1DsfZqDT%2F0meQo07ftuToXTImUN6vU3nC8xXG8P2w0SWzD%2FeVS7h3GkWcjVUQHbYNJaySOwwh1rIHKtcppiixKfHG%2FaD4gyi3d6I7b0yFK306Vwr5OL9GswKmkzhoS7sxfoGgjlNrQwGZcOJTTm0oYJw%2BvkNIqAJKl%2FeMS2RsfdjGErq8n2LrgqY93VZ0JE86IKhl82Ku9WuhzGp%2BoGg6u0BkDhMVgvYPDm8N8lBzIGuuP9Lg9u3fEdkB1YShHdDUBazabvsSBZVzblkIdsr6xVN%2FQ8Ec8flICEiG206BeJyoe0YqL%2F2LvFyZgsDtbu4rURhMFRrfxMPCP2M0GOqUB%2FWgWZlqkJB6cut0SrNvaBUQ9%2BCqWIzu472IWh2deGA8LOBwyDFUu1hs91oLGFAJSSFDMbwWKRaC1RkPnkwgA1pmLqcrBJNSxHVO%2B3%2F89qmf2UjeqCxmlLC%2FXCJGdDTmRBrx3wywnJ6bR9quoLCbxcPHw%2By4b123rTO3eDkgWZ91MYKzz4oKEOmLcDxlGtqMlHNxjsQXL5Lb7YVOCWIcFhfjcG%2F1W&X-Amz-Signature=9c93f5ee33089a11efb2bad21627d8fa5e3e8b2a720cfe2555bce007521954a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGIFKCD%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK%2FYwd2AlYyH4z4GQRy%2F0Jpu3CHB0zk1fmgdhIPGlZaAiEA2AfHfTKMvK9N5j%2FPt3HPgNh%2BuQlSGBEkgGNu%2FcM1vS4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpPS4hce63zRjONiSrcA0VHPbIgBdQ3yJ4O2QXzso%2BXoPw7NgOkI1B03RwWX3kDPSgEajR%2B5Ud00Dew62FvxocPvce4ksYUznaoLWBTTsoAmHT8RunaAWKSChahXRJAnvGBpbEy6xsyDpSnPgH78KYtihqjSxr1AZPdxw8B5EFFdEeL0zRTSpblKH4l89qysmluVcNxboonWzJ1lEps1O5Fyk6Q02A0jW%2F301033MxNH5DPz41kYVTp%2FQAe7JtuG31SexrxQcxaT2s0d502Z4%2F5WRuue7XnuvvQvLi2oIfe2%2BKvhcnBXiEDzOEBg2Gg7r90nw1DsfZqDT%2F0meQo07ftuToXTImUN6vU3nC8xXG8P2w0SWzD%2FeVS7h3GkWcjVUQHbYNJaySOwwh1rIHKtcppiixKfHG%2FaD4gyi3d6I7b0yFK306Vwr5OL9GswKmkzhoS7sxfoGgjlNrQwGZcOJTTm0oYJw%2BvkNIqAJKl%2FeMS2RsfdjGErq8n2LrgqY93VZ0JE86IKhl82Ku9WuhzGp%2BoGg6u0BkDhMVgvYPDm8N8lBzIGuuP9Lg9u3fEdkB1YShHdDUBazabvsSBZVzblkIdsr6xVN%2FQ8Ec8flICEiG206BeJyoe0YqL%2F2LvFyZgsDtbu4rURhMFRrfxMPCP2M0GOqUB%2FWgWZlqkJB6cut0SrNvaBUQ9%2BCqWIzu472IWh2deGA8LOBwyDFUu1hs91oLGFAJSSFDMbwWKRaC1RkPnkwgA1pmLqcrBJNSxHVO%2B3%2F89qmf2UjeqCxmlLC%2FXCJGdDTmRBrx3wywnJ6bR9quoLCbxcPHw%2By4b123rTO3eDkgWZ91MYKzz4oKEOmLcDxlGtqMlHNxjsQXL5Lb7YVOCWIcFhfjcG%2F1W&X-Amz-Signature=880fe295607b6653641d2fbdd5d004625c26f669ec33431acbdc2b43f2db126e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGIFKCD%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK%2FYwd2AlYyH4z4GQRy%2F0Jpu3CHB0zk1fmgdhIPGlZaAiEA2AfHfTKMvK9N5j%2FPt3HPgNh%2BuQlSGBEkgGNu%2FcM1vS4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpPS4hce63zRjONiSrcA0VHPbIgBdQ3yJ4O2QXzso%2BXoPw7NgOkI1B03RwWX3kDPSgEajR%2B5Ud00Dew62FvxocPvce4ksYUznaoLWBTTsoAmHT8RunaAWKSChahXRJAnvGBpbEy6xsyDpSnPgH78KYtihqjSxr1AZPdxw8B5EFFdEeL0zRTSpblKH4l89qysmluVcNxboonWzJ1lEps1O5Fyk6Q02A0jW%2F301033MxNH5DPz41kYVTp%2FQAe7JtuG31SexrxQcxaT2s0d502Z4%2F5WRuue7XnuvvQvLi2oIfe2%2BKvhcnBXiEDzOEBg2Gg7r90nw1DsfZqDT%2F0meQo07ftuToXTImUN6vU3nC8xXG8P2w0SWzD%2FeVS7h3GkWcjVUQHbYNJaySOwwh1rIHKtcppiixKfHG%2FaD4gyi3d6I7b0yFK306Vwr5OL9GswKmkzhoS7sxfoGgjlNrQwGZcOJTTm0oYJw%2BvkNIqAJKl%2FeMS2RsfdjGErq8n2LrgqY93VZ0JE86IKhl82Ku9WuhzGp%2BoGg6u0BkDhMVgvYPDm8N8lBzIGuuP9Lg9u3fEdkB1YShHdDUBazabvsSBZVzblkIdsr6xVN%2FQ8Ec8flICEiG206BeJyoe0YqL%2F2LvFyZgsDtbu4rURhMFRrfxMPCP2M0GOqUB%2FWgWZlqkJB6cut0SrNvaBUQ9%2BCqWIzu472IWh2deGA8LOBwyDFUu1hs91oLGFAJSSFDMbwWKRaC1RkPnkwgA1pmLqcrBJNSxHVO%2B3%2F89qmf2UjeqCxmlLC%2FXCJGdDTmRBrx3wywnJ6bR9quoLCbxcPHw%2By4b123rTO3eDkgWZ91MYKzz4oKEOmLcDxlGtqMlHNxjsQXL5Lb7YVOCWIcFhfjcG%2F1W&X-Amz-Signature=ce412ce26d85bbe9a864d7499eadb53f757b39f9a453c580521b07a10e4d0e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HMOTACO%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN6INcWQZqzB5OHbPzqDSqh4xWZJSqro55mweeBQMNMwIhAMR1%2FlqhJzZ6gcDjSh7YwvghJUedrjvpJaVw0k%2FWufP0KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL1WRr6WGt%2FnB%2FVGsq3AOagyCdTwQ767Yae%2Fqtof29s9XwyArnbyC2DkdPZZSDov926KgwyXf0R1pSTkSTEM9subgSqUQZ%2Fvh%2BAFkaKhZbnBDfpoJGvodwwRgXT7cWyQ3CDdXfqVNfMLO3o9czVIbtwTLYdrYrnX%2BKkpRXBcwRWXTSpJHvWRKaf0THvJBUlM21tazppQuSgYcyZCwNP3maq7J8EmINY7vrc0aU4IGrx%2Fa8xTCGhbbEzuRMu%2F1GtNZeA9IFjeP%2FV6bO3MbET4n4O9lwI8AjM%2FDqSDPms3K9Ye%2FbiYpoRlxooSwp%2BUh5KVQ8PuwGyhANYwCRM8lBryF%2BiwhpTKRYO0rlI%2Fo8Q5HeHmKfNsxb6HbuNQDm9L%2BLeAbIV0stY5ZSagSwnGmEfJe390nmWArx0FGtCnoMhCEDgkjvvHHOcgJpREnY867x4OJYrOgZ8r%2FatCZLGCYJGbA6wB%2Bd0miJ7NzzELhO47xAX5Zx%2BTrgIhZxLHLNrKyx8VhHvgVEBjIQ%2BCPB1peSek4Hskm8YZ98c9EPNoyKbcC9NQHnvOaEey4Vkj51zJcyC233QADUwRlv7Xih3%2BBZz2dUDVC04EoaGop1OtMXv2LnP5bXV%2F5UDVIZxWgLM2mdKPAzLz0UwSPAn9fABzCrkNjNBjqkASTDorIuDHRqJ6QVUL2tFD7zYFuSVxZcwJxxudLE2yVRaSSwA3vX%2F%2FIzS1%2FBJhKQqBYZXbk%2BoCKsdXS4%2Fqkd4K3BRrUH4WEFrKomSG77xoA96tiu2qbAOhWwxohBN9QByWUGGyq%2FwKhegt4JbIjNiXHgWJ94NvRVUdegw%2BgEUFVMRAUE0L3khyAyPnSYqRtB0q6cHZs0rg0c%2FtZPIoOiM%2BLJmSfT&X-Amz-Signature=bef5fa8b5abd78d78018cb209ff4c3ca77893c33e0292ece24d897b7335b4f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNUPDN2Z%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS1K3KL6SRUyKvp85BIxtZZpmyQ94wGBDbrhNveTa62AIhAKA0%2Bh33BzJ2uPqCqPoNpcg9JIDUGSMZJ3H7Cmm4Gyd%2FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuAJ4d7CB2P8O4eFMq3AMUaVWzpkljD9YT997uWWizmqN88xrLku3yxVhfEKdYg97xUsnHPFcuk0rAToDRKxgiNcuWLJO0gKpwoqDXgbHJSwMCCyEkHU1VlAmkjrsMlgyjuSV7hTAOIPOcwCh7YxysS8l9P%2F4mhSzhOZ4gYULew7Ae2zkbCo7MgeRZLg8JFPM2vXRv2stKA%2FgNJ081%2BVg1Qsc7q7Jf59IpnKIWXcbcL%2BgXp93Di9iNiBDf8rG0EGhEkfw2h78hRSJYc1mXx3SVFuv2doTI9lfjhUNcaXCKYqs8hBXaK2MYN13jhlGtICkXSFXESAa%2FkmmDnp49RC7I4SQbJUnVhAYfz5smdTJPaJG2FyZY%2BNbt6fL4pw5UVwjYbMPPoSQzMkF4xvSTb%2FaJ%2FtUvwiK70D7qgfGr6IhcwimNN3m0LFn2JL3WNL%2Fc5re%2FSe0hWFuCTFBunTbcO3XeVpC5Y%2FMaptJXEMevy%2Bi8dRY8hxlatv7Gs%2BZfV6hZbjxoeBWDX6NO6BaKmYUIrSZVJlS4O%2FMho5vmY7VmqqFU2tsG0ceC5LanWUZBnanjDte8bHgFxo3Bm53wHSWb2OO4cH%2Bj8TbwHmcuRGAdY7ugCwGoGiEisLHaJeWILNt78FcIkf%2FBkkG3DOJrsTCwkdjNBjqkARrYGNTeNqY6zCjiC8GtbNpYIYETid7G5jmmerJSPKQT556NmuDJSVAEsR7nbxZ5P%2FuHHFTsZ9q7KnWBhUgnFGsRRzOg%2B%2FZhj3OndhM%2F%2BoQBcpowpjZNZlvauikuE6w1tsW1erLuHD%2FRR4mGikEAp8IJugefM9qGVCS6W3rl9mZ9AQioE13Rf5d7Y7yiBK8D%2BOOopVeFK8m55Spl%2B4dr8YbnycGM&X-Amz-Signature=3b45bb7de040434c63a86709f6c7ff83df78f11568db4d0eb3cae4d975dbf67e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZTYAQWO%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjJSX%2F9CujewR33bo8DIUHDxkB1ZtcQMXIeZnD5NtTUAiEAo6vFzKxDgiZXxMA%2FGclOZoakAamnvc%2FWojvvKDexZBkqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLm8NTA%2FdCa8hUknircA%2FpgKWu3yQd0kFl6NlUj1pccD79JJeoEmveai8PA5a1SSPVypS0Jelz1Efcqjq2mn%2B3g4eZqYwiryGLSZ3zdGUw2TKtTbvFng3jh5ZDqAMC5HLe4Babgt1Opyegyg0TVCodMAXDUf23SymaajGH9yNWBk6Krn%2FzhW5Sv1uw4iI%2F10VPxnLz0AQw0oe0JnuKtrKWbFMQvzr38PqBnOByiFr8W6RZ4%2BKd53s99DZqEV6dX8QOyP4PORD%2BIw2bTeDPbO20TY3M1XETZlQogY%2By0rncscSRfPjlmCGO71TrLKcPZf7CGHtSnYn9Xs1S6HFJ5nOf%2FU2S9YbQjIuU1I0jdS9jNUgqMd0o5SNxZ9liKRqhgwHMyjpJCayJe2p8htgXv7Lc1XH2Pkecr1scL3rkm398SSGYlapduZV4BWGDP25vEeGpw7xzJEE4G%2F%2BaFEfGL7hCWFePcveNqGjwwkMTG%2BkAue6EWRS6IDAozMfmg1vRLg8P0Fr%2BOw5i4pPXSlRbycaUZbBuzXRIyrJ7FJDTbELog5uvfiilqM%2F6qe92IpUlek96cwZVZfTib67lLaVfS4eZPZIXN2oAMjZohtkAsWtXuNoVN97nCwRrjJkIs1aZpvHUxENuoMgHqv1ANMKWQ2M0GOqUBwUB0p2jpC%2FW1zmY9tVAPTaY5PWM62mN1OGMYZ08OcudpJy6zL8NqfWNglEeXpZYZj3fWSw2YtG7%2FOHQsamN2r22qD4Bx5%2FWxz4r8UUqfuPWYlt%2BrfKgoDePtxfq9TA52b6wX3Z1k7QeE1oncy0lPhZmIOfTyTmX6h8vqUYGnTA9bpnYpCbbIPgfrpCMa11cpxGxmRyndpLQZjfc2gQBJm9STfHq4&X-Amz-Signature=67d7a61db14b08d86a8bd513dbca0141567f11a7fe5e8c74d16686ea1a97a421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGIFKCD%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK%2FYwd2AlYyH4z4GQRy%2F0Jpu3CHB0zk1fmgdhIPGlZaAiEA2AfHfTKMvK9N5j%2FPt3HPgNh%2BuQlSGBEkgGNu%2FcM1vS4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpPS4hce63zRjONiSrcA0VHPbIgBdQ3yJ4O2QXzso%2BXoPw7NgOkI1B03RwWX3kDPSgEajR%2B5Ud00Dew62FvxocPvce4ksYUznaoLWBTTsoAmHT8RunaAWKSChahXRJAnvGBpbEy6xsyDpSnPgH78KYtihqjSxr1AZPdxw8B5EFFdEeL0zRTSpblKH4l89qysmluVcNxboonWzJ1lEps1O5Fyk6Q02A0jW%2F301033MxNH5DPz41kYVTp%2FQAe7JtuG31SexrxQcxaT2s0d502Z4%2F5WRuue7XnuvvQvLi2oIfe2%2BKvhcnBXiEDzOEBg2Gg7r90nw1DsfZqDT%2F0meQo07ftuToXTImUN6vU3nC8xXG8P2w0SWzD%2FeVS7h3GkWcjVUQHbYNJaySOwwh1rIHKtcppiixKfHG%2FaD4gyi3d6I7b0yFK306Vwr5OL9GswKmkzhoS7sxfoGgjlNrQwGZcOJTTm0oYJw%2BvkNIqAJKl%2FeMS2RsfdjGErq8n2LrgqY93VZ0JE86IKhl82Ku9WuhzGp%2BoGg6u0BkDhMVgvYPDm8N8lBzIGuuP9Lg9u3fEdkB1YShHdDUBazabvsSBZVzblkIdsr6xVN%2FQ8Ec8flICEiG206BeJyoe0YqL%2F2LvFyZgsDtbu4rURhMFRrfxMPCP2M0GOqUB%2FWgWZlqkJB6cut0SrNvaBUQ9%2BCqWIzu472IWh2deGA8LOBwyDFUu1hs91oLGFAJSSFDMbwWKRaC1RkPnkwgA1pmLqcrBJNSxHVO%2B3%2F89qmf2UjeqCxmlLC%2FXCJGdDTmRBrx3wywnJ6bR9quoLCbxcPHw%2By4b123rTO3eDkgWZ91MYKzz4oKEOmLcDxlGtqMlHNxjsQXL5Lb7YVOCWIcFhfjcG%2F1W&X-Amz-Signature=63fbed13777a37b77bb62926d7d4c8629ea760201fc21fc07a4f1faefd6a18cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQNJOOI%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXrIaYFTcvefItrlMr7tchbTdh%2B%2FNZFRN5wAs%2FeKi4bQIgctzL%2FyAOXIfJQuzekbm4MI03w1OXEmzMqfoEq1UnS2kqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWQrm91rf%2Fkpxr9PSrcA%2B4pkzrLHBlnD0hzTgkrXSYxQfjfB6oyN525Kdy1ioYs2TsPBEhTPGoW0PHzgA8tLEFfbA9LT35R31M62VzeCIX%2B8S%2BE8IdvgTg47ueNMFyNad1P27zksmn1k1CdPZF%2B%2FfQ5VSV79EkhG5kM2t3y5i2AGVTSp8LmLpjo0P0UZ8jeCoCNikcB4SBw3%2F3XE6C2DOEZTtsauXe7MB5MAkOWGY0RDBQpDp4%2FZujhN1DD6l0Ux93PLu8R5yYrFH5e%2FOyomAk1eXcPxEdkr9bVBOnADJ5bpvSOzpxVCK%2F6P3KNZpk5h9J9bNQChxX%2BhYPDJEfoQMcYbEa6cnBUKveurZD7MDcaz%2FIH4EaqMdWkW3KRBK4%2BRkGQRjtpi9C8e3o8fP%2FSJ01isaf37%2F85cnEE%2Bc%2FEbtagAsjQbpNQNAMooF8vGwv2odBVKXUePE7GDSWaTeg91PqiR%2Fm6K8x%2FcIwyXsOa%2FQlCz9FK9QO6NrexTujVN%2FJhJRN5xFL8wAqHBtQ1MfaysnafNtcqV%2B7JL4HlVpfKcWahfN1xl%2FA9ybbDlcdb5kUb8iilt0SeQ0e09vaufvzRMvjKPkVJqyLcwJwVMlWtahUkXXRuqC%2B0JnLdZgPLZqwwEHCe8sOADGQNAup%2BMKWQ2M0GOqUB0fK63Koc6LoJ41NPG4uCpLRqHVZBamhGLUtW3at5IUumbc%2B5mk%2FoH1rqHBuBJsWphHYRvNEkzXl9XYPwI1FoInXgft%2BqAeZMhe53cnRVtGv8kEZ1ON91WDOll%2FCj2iOR7u0whLhBBI6qmtj4cf7qyzv0CZzyHpf0CiZBbByulc5PoL0YImDEaYyffWEkMzhNPVZywHMV2eqB6T2jr2qgH0dgK2dg&X-Amz-Signature=d58a6fe89a6e12bdd18b329bdfef21c8a3975e692b5fdd3f253dfc3798ff2df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGIFKCD%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK%2FYwd2AlYyH4z4GQRy%2F0Jpu3CHB0zk1fmgdhIPGlZaAiEA2AfHfTKMvK9N5j%2FPt3HPgNh%2BuQlSGBEkgGNu%2FcM1vS4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpPS4hce63zRjONiSrcA0VHPbIgBdQ3yJ4O2QXzso%2BXoPw7NgOkI1B03RwWX3kDPSgEajR%2B5Ud00Dew62FvxocPvce4ksYUznaoLWBTTsoAmHT8RunaAWKSChahXRJAnvGBpbEy6xsyDpSnPgH78KYtihqjSxr1AZPdxw8B5EFFdEeL0zRTSpblKH4l89qysmluVcNxboonWzJ1lEps1O5Fyk6Q02A0jW%2F301033MxNH5DPz41kYVTp%2FQAe7JtuG31SexrxQcxaT2s0d502Z4%2F5WRuue7XnuvvQvLi2oIfe2%2BKvhcnBXiEDzOEBg2Gg7r90nw1DsfZqDT%2F0meQo07ftuToXTImUN6vU3nC8xXG8P2w0SWzD%2FeVS7h3GkWcjVUQHbYNJaySOwwh1rIHKtcppiixKfHG%2FaD4gyi3d6I7b0yFK306Vwr5OL9GswKmkzhoS7sxfoGgjlNrQwGZcOJTTm0oYJw%2BvkNIqAJKl%2FeMS2RsfdjGErq8n2LrgqY93VZ0JE86IKhl82Ku9WuhzGp%2BoGg6u0BkDhMVgvYPDm8N8lBzIGuuP9Lg9u3fEdkB1YShHdDUBazabvsSBZVzblkIdsr6xVN%2FQ8Ec8flICEiG206BeJyoe0YqL%2F2LvFyZgsDtbu4rURhMFRrfxMPCP2M0GOqUB%2FWgWZlqkJB6cut0SrNvaBUQ9%2BCqWIzu472IWh2deGA8LOBwyDFUu1hs91oLGFAJSSFDMbwWKRaC1RkPnkwgA1pmLqcrBJNSxHVO%2B3%2F89qmf2UjeqCxmlLC%2FXCJGdDTmRBrx3wywnJ6bR9quoLCbxcPHw%2By4b123rTO3eDkgWZ91MYKzz4oKEOmLcDxlGtqMlHNxjsQXL5Lb7YVOCWIcFhfjcG%2F1W&X-Amz-Signature=862569205f817d5232e39975e9d877ae6a5f0863856089aaec92086b14f4c4ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUPII57V%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSQaUYKFEPcEusbl4bujYgsu%2B3y%2B6nXPdP0kOGixC7QAiBGSC6NPv7JlOsB7ZfP0Zo2E38x0cXsPMS8CNCnfuznhCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMICzrHjVVu%2Be%2BJx6wKtwDdXYWnbm8N04puEwew3Y3FmwKExaQc%2BI%2F5R2MJCeH8ivAS9V3HGc42S57RxeUtAz9bIusBaEwOyPfQid3uPcI1tIQ%2BR0ovtBuFUuLMyKRIau65y42ek4GrW2a%2BDq%2Fq70kOKF3tt2vE%2Fb01RvONgN01W0rOeiz%2BMoMn7NsudfLugW8sR4DwpyO4V3O0HZ1HP93iivpW%2Bokp1%2F3hvZK9JpvjqbKcDm9kYJf%2BCoWKafd5XKjDxCTWToIL3PtPUiVFdkHz%2BROcSOAt1M4knbT9xyjuxXC%2BmcAN1qCyvcVuZlNj6A%2F7dMWcFsSJpP3FuNau9PM26PdGt8Ews2gupFyWKPqV%2Beo9ZvrfBNSUuPNEg5VB9yBnVz%2BvbKr0kx7IIot3ZxKp8EJ%2FINmY2dgLvUi98Ti9wDJBK9hm8pjEMLlPobfNh0ZRIVN5nciJQovNb%2BIysEO9jC3VuvAy1eNGeNmZ6AM6VCzTCFWoBljuaemuZbDKt50TkqiNHGNlRenHA7Ra%2FJyKat8Sww98K%2Fhz%2FkDX8EbXScNsnWsntycMwbS8K7BubkfoMA%2BzlReCqzSrSKHDHeSDpoFqyoIf4U%2FxBaQaHeYLlYKOOYQJ2pro%2BJGNnyMWy2GEch1sOeapHgmudUwpZDYzQY6pgGQUcUV0AEoFoUZVCu2lNLaEWlcT4HlZhDlXjpaIMmI4s554sov2Xz8XSgTdgTM3QsY6pPRcQKQDvtxkDsHFfdkiBuLJgvrg0HrqOw40pvLYVfm9Yt8LPFLdrJ1cotP3RLiUhsHH%2BTf3KzAhS%2FsbN9B3VMPRUFewRAHHk01ywuh42IIbnFgPC99HVEWlwSnw9H0Qh3YKjCUbXhvSSf40ts9bqgb5BEV&X-Amz-Signature=d93b4f48d23c18136846d3c08bd078759f1b31e7101d687040514e198730671b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGIFKCD%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK%2FYwd2AlYyH4z4GQRy%2F0Jpu3CHB0zk1fmgdhIPGlZaAiEA2AfHfTKMvK9N5j%2FPt3HPgNh%2BuQlSGBEkgGNu%2FcM1vS4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpPS4hce63zRjONiSrcA0VHPbIgBdQ3yJ4O2QXzso%2BXoPw7NgOkI1B03RwWX3kDPSgEajR%2B5Ud00Dew62FvxocPvce4ksYUznaoLWBTTsoAmHT8RunaAWKSChahXRJAnvGBpbEy6xsyDpSnPgH78KYtihqjSxr1AZPdxw8B5EFFdEeL0zRTSpblKH4l89qysmluVcNxboonWzJ1lEps1O5Fyk6Q02A0jW%2F301033MxNH5DPz41kYVTp%2FQAe7JtuG31SexrxQcxaT2s0d502Z4%2F5WRuue7XnuvvQvLi2oIfe2%2BKvhcnBXiEDzOEBg2Gg7r90nw1DsfZqDT%2F0meQo07ftuToXTImUN6vU3nC8xXG8P2w0SWzD%2FeVS7h3GkWcjVUQHbYNJaySOwwh1rIHKtcppiixKfHG%2FaD4gyi3d6I7b0yFK306Vwr5OL9GswKmkzhoS7sxfoGgjlNrQwGZcOJTTm0oYJw%2BvkNIqAJKl%2FeMS2RsfdjGErq8n2LrgqY93VZ0JE86IKhl82Ku9WuhzGp%2BoGg6u0BkDhMVgvYPDm8N8lBzIGuuP9Lg9u3fEdkB1YShHdDUBazabvsSBZVzblkIdsr6xVN%2FQ8Ec8flICEiG206BeJyoe0YqL%2F2LvFyZgsDtbu4rURhMFRrfxMPCP2M0GOqUB%2FWgWZlqkJB6cut0SrNvaBUQ9%2BCqWIzu472IWh2deGA8LOBwyDFUu1hs91oLGFAJSSFDMbwWKRaC1RkPnkwgA1pmLqcrBJNSxHVO%2B3%2F89qmf2UjeqCxmlLC%2FXCJGdDTmRBrx3wywnJ6bR9quoLCbxcPHw%2By4b123rTO3eDkgWZ91MYKzz4oKEOmLcDxlGtqMlHNxjsQXL5Lb7YVOCWIcFhfjcG%2F1W&X-Amz-Signature=74703a376670d6105e42ea0352e9aed0e8db01be24f4736eef96dc40024b1306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YIMIL73%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGC2F2RJk3pS4s2IREWDpLW2xnKMTYmSEGK1XsuoqiyAIgXJi2ME3vFzl5yb%2BEu%2BxEhwZganLbdKFLIBIyTKwjcmsqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoNj1a7qZaiwg%2BT3ircA6giwf9HbHexWW50JnVYCTaE%2FnrA71Z9KYTw%2FVI5GdKcU0IlMU7b2J%2Bvc%2FwJ8BiZQcFrU6LlhxoqQp7I4e1gvmpLCPzcMea7Z8oPXyk067QzflPrBKxiaj16gtUN9kgPhVaTtw2XLL2JzHv%2BM27ccjffj92zHFEyzS8g8c%2B%2BBmQPU%2Bj%2Fro%2FZ1hDgUiRN%2FN89NbGSqFc%2Bfy%2B1jNckWVjONDMa23sVhtdEGlrEmuio3ydTD1EaU%2FHR7c9YfA%2BpqhkJxUlOaum8OrMewBDRgnJJ3JrbkxseKtBMJqrgL6A6iitAf7c%2FNmHeArCeueif7z4Z97UmNIig2OxibfsdI8WMuG01Y%2By1PR9LNOCDfa6jzoiD0Fxw2mkbEli5Uy6xou0r1VqaH0x1VtuZqFIpxomYT87EGQ%2BREOy66J4NW8KutjIRoKpVk4Ak%2F0IC8nGk13tNNHirIqad4QMod1ZgsXls2E8e7xnm4rsJjc5qLbdxfNRLevKXlLcBM1jcwv72PNZWb7YCfjRyI3y1I8WTBAyhF8xbrFBobqcpXQ3sUQN92%2BLlpTccsNxKeqXLixmE2IhBXyNeCJLMJnm%2FUMWdTE77rDuBLqJJXeYb099MIN9x52V3%2BHYsnn8CZT%2FVMsgbMMWQ2M0GOqUB5hLXMFK1%2F0U7QjnQsOdkm2sPzTWrzSICpOTBfcTH35yrfZ6ihsPC6AttpoYWnnTq8S7%2BA31U0fz%2BVuq15bhC98fE8%2FgJsL6YQBE4moYdHTp2OUmMXjGyV10TPken1DnoXo3e%2BQiO1c3V62Q7AfOxoeCfm5QukdMJAjXSWixkymsWVxdtatuUEhtQd3XpZME5S7t5ArvDfHKeg1DiIVBySp0rvtk6&X-Amz-Signature=65cd88eb7a84098ec2760296f25e2f0a2c1746fdfd7c109fdd7351297ad7a7d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGIFKCD%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK%2FYwd2AlYyH4z4GQRy%2F0Jpu3CHB0zk1fmgdhIPGlZaAiEA2AfHfTKMvK9N5j%2FPt3HPgNh%2BuQlSGBEkgGNu%2FcM1vS4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpPS4hce63zRjONiSrcA0VHPbIgBdQ3yJ4O2QXzso%2BXoPw7NgOkI1B03RwWX3kDPSgEajR%2B5Ud00Dew62FvxocPvce4ksYUznaoLWBTTsoAmHT8RunaAWKSChahXRJAnvGBpbEy6xsyDpSnPgH78KYtihqjSxr1AZPdxw8B5EFFdEeL0zRTSpblKH4l89qysmluVcNxboonWzJ1lEps1O5Fyk6Q02A0jW%2F301033MxNH5DPz41kYVTp%2FQAe7JtuG31SexrxQcxaT2s0d502Z4%2F5WRuue7XnuvvQvLi2oIfe2%2BKvhcnBXiEDzOEBg2Gg7r90nw1DsfZqDT%2F0meQo07ftuToXTImUN6vU3nC8xXG8P2w0SWzD%2FeVS7h3GkWcjVUQHbYNJaySOwwh1rIHKtcppiixKfHG%2FaD4gyi3d6I7b0yFK306Vwr5OL9GswKmkzhoS7sxfoGgjlNrQwGZcOJTTm0oYJw%2BvkNIqAJKl%2FeMS2RsfdjGErq8n2LrgqY93VZ0JE86IKhl82Ku9WuhzGp%2BoGg6u0BkDhMVgvYPDm8N8lBzIGuuP9Lg9u3fEdkB1YShHdDUBazabvsSBZVzblkIdsr6xVN%2FQ8Ec8flICEiG206BeJyoe0YqL%2F2LvFyZgsDtbu4rURhMFRrfxMPCP2M0GOqUB%2FWgWZlqkJB6cut0SrNvaBUQ9%2BCqWIzu472IWh2deGA8LOBwyDFUu1hs91oLGFAJSSFDMbwWKRaC1RkPnkwgA1pmLqcrBJNSxHVO%2B3%2F89qmf2UjeqCxmlLC%2FXCJGdDTmRBrx3wywnJ6bR9quoLCbxcPHw%2By4b123rTO3eDkgWZ91MYKzz4oKEOmLcDxlGtqMlHNxjsQXL5Lb7YVOCWIcFhfjcG%2F1W&X-Amz-Signature=8bdaf7e3b0447f5db10711d83a9e8fe02ebce024ce562f47e61ab57176861be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LZNZ57Z%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFdYSUf0elRUbrGgGVKxbkN3qQiLdyc%2BUZiauJ3tspmQIhAIHp952JFgQzngGK%2FoNQ3FZrWFJagvEOYaStZFFhty4yKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTkCn8wiJoYQL116Iq3ANcr3Z0jQfEK2E3Ol0C4d7tcp78XjtmxcrSjmAk5kP%2FqbghiMlwJlJ1YVZ9HFBH13PaPjXhhrhUsLKxvaC%2BcKXNA6iehzCQgPxW6CoW%2BanzINp9qxXCuLwOrhnBXpCskmaRVzO0dk%2Fnp33vs7xbJt10xakLYeFAsv9M0T97SIKr6RlWRYpo5NH7ieBjJGAkI4GYSvN8c8CFzhhyoT5Bf6NEPiFTkm%2F5IMkJ5s6dGRGYLvcaRJHuBxmFAgrc8Ct9lfq3H%2BAGAqd5HmCppV%2BQH0JzhUAzBlwDhW%2FWFGXQsJ9b06GSMamywfsm6CYCJr%2BWioLuRM5UzQuG83xmcw%2F0rQbQ%2BwLI2MXqo%2FsoXgdxsa3yGWS86hVeiKvsn2ONynTnA60Tb5EsGKgXEOyOaXwI7b77rLrkM9aBrEf1vjAYJnA%2B1ie5Xs59WcwOLPVIsTSVEmVd4H1kTXgJTiKzI5MTCXL2P%2By9d7FO7Eqjrx26CfzvCkzfZAakZg0jsIAWwKV8iW03p4%2BcHE02N9Y5oHY%2BnLVNvSPh7PcatbT8tUdTmDWJ7m5nlsLdswt8vPGyqi5ZmS%2F1hzDNgkouftaJv%2FXb%2B%2BsxG06CVrze0E34%2FwMKVq77ORmDXMjSAimLwGbgjzCwkNjNBjqkAXBi7Q7Ja%2FUUNxauFImCl71e6RxAiQ4Jmz6yjcSYye9OeRKr6haiRWnGeTlcOEJkrh%2F5s2oKK2Ljt%2FtqM55YyzqAOHq%2BnWFgbzlIeg6tdGGZbJQUItWxaNETCnc0WmX%2FulstkKvrJ98S8QDOteDe4XSkI1WAx2lgUmm0nzNMOGIVvEKlA3wyDwq89OcoMA50%2BNV7dnOK2JmKg8mvV4bZMCFgjgVF&X-Amz-Signature=6bc34c88d86cbb3528d7ad0dc4c7e9da9bc243969ecdd090b70dce99638999d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGIFKCD%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK%2FYwd2AlYyH4z4GQRy%2F0Jpu3CHB0zk1fmgdhIPGlZaAiEA2AfHfTKMvK9N5j%2FPt3HPgNh%2BuQlSGBEkgGNu%2FcM1vS4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpPS4hce63zRjONiSrcA0VHPbIgBdQ3yJ4O2QXzso%2BXoPw7NgOkI1B03RwWX3kDPSgEajR%2B5Ud00Dew62FvxocPvce4ksYUznaoLWBTTsoAmHT8RunaAWKSChahXRJAnvGBpbEy6xsyDpSnPgH78KYtihqjSxr1AZPdxw8B5EFFdEeL0zRTSpblKH4l89qysmluVcNxboonWzJ1lEps1O5Fyk6Q02A0jW%2F301033MxNH5DPz41kYVTp%2FQAe7JtuG31SexrxQcxaT2s0d502Z4%2F5WRuue7XnuvvQvLi2oIfe2%2BKvhcnBXiEDzOEBg2Gg7r90nw1DsfZqDT%2F0meQo07ftuToXTImUN6vU3nC8xXG8P2w0SWzD%2FeVS7h3GkWcjVUQHbYNJaySOwwh1rIHKtcppiixKfHG%2FaD4gyi3d6I7b0yFK306Vwr5OL9GswKmkzhoS7sxfoGgjlNrQwGZcOJTTm0oYJw%2BvkNIqAJKl%2FeMS2RsfdjGErq8n2LrgqY93VZ0JE86IKhl82Ku9WuhzGp%2BoGg6u0BkDhMVgvYPDm8N8lBzIGuuP9Lg9u3fEdkB1YShHdDUBazabvsSBZVzblkIdsr6xVN%2FQ8Ec8flICEiG206BeJyoe0YqL%2F2LvFyZgsDtbu4rURhMFRrfxMPCP2M0GOqUB%2FWgWZlqkJB6cut0SrNvaBUQ9%2BCqWIzu472IWh2deGA8LOBwyDFUu1hs91oLGFAJSSFDMbwWKRaC1RkPnkwgA1pmLqcrBJNSxHVO%2B3%2F89qmf2UjeqCxmlLC%2FXCJGdDTmRBrx3wywnJ6bR9quoLCbxcPHw%2By4b123rTO3eDkgWZ91MYKzz4oKEOmLcDxlGtqMlHNxjsQXL5Lb7YVOCWIcFhfjcG%2F1W&X-Amz-Signature=32fe2694e428dbca78e13cbc67914c07466c573858b1795cad642cbc3a9d5d25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFGBKHXB%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7hmupEDyYAAyAbVqIyVE32mBjbbo1OAN1SvRcR%2FvNKgIgZmX5uDFjEZ91HIoJ8AQ7%2FXfw7MO1j%2FOl%2BB1fpQhXxgEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNzwjRTIiVc0FRGNyrcA1FpTqOU7xQf9UIo6rrkv4EVhYbLdcStH2uon2i70ICIeUCpLPL9550SyZL468UaLT5ZwgWjB0A9qhp1m3basXouMILsOT1N4kEefdy2CHQBVAEBMwSe6ZxXyD%2FK2kHdCNx99EhOghGP7SGdM4Q8TBoqvXiTeIHgzsAP41gtC%2BMQ5pu%2FeFj4%2Bs73ULS7LwuvRJjz8pU7XOy6lCfW7yDSGtPmPSkIZaZ7tkDR%2BdZ029f9UIIHgzcIRoaS02EBqP4tvsZDVSvE1nL0LSskYu7g9cXdgDiL5V%2FBUyOzRK4NGl7bNMv2VD8q4Hhdz%2FG2CyDgWG9BA3CZAUtqVZ%2FFrwQTvr8G46siKJl6X1r2zeRDGONr60YAuhvmaaUdbnBK%2FDeIBreYo0%2FWCoYVgZ31qUUQcJV3h8BRcOeagJ62fQEc4k1iIks%2F%2FkFaAhyqA6k4JEdZ5bxUn%2BNZRIeF0J6tExzTkx%2BcrUu82qsPocSM0tzu84YQmE7SZ9ryWHwY9BLsY3or%2B%2FEk0aS8VzTkCgXwY%2Fvr4LbatozEw7mz7qxfKOctN%2FUKUK8q41DT6fdSLz5YRILxOU3si7k%2FsahLVD30QpQDqx75frnXTvcM5uFKaeTAyrlCyKeq8xeml9Catc7hMP%2BP2M0GOqUBKA6RpL1sXRiFvXRlnfyrJFU%2BIfY01ro28nB7G9JsiOnk2UOXx7gqT3n9cGTZaACDyEPPAZFV0nkf5Vu%2B210KFjwe79mth0u08rHmD5gQvkWLXI13Qt0I%2B7WOYsVe8yRqxa0wLvzVsJrAPuaDaFTM3ZAbmy%2B9TWMxig6Tw3XRvD8pWTbeZq6gTQwIifRHqJhM%2BypPCbNnBwokZPWV%2BKz4fl%2B1a5n6&X-Amz-Signature=adbef3518c4e63a5c3b5f6bb29b6b92fd9b361e565f757ded124711bf608d696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQNJOOI%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXrIaYFTcvefItrlMr7tchbTdh%2B%2FNZFRN5wAs%2FeKi4bQIgctzL%2FyAOXIfJQuzekbm4MI03w1OXEmzMqfoEq1UnS2kqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWQrm91rf%2Fkpxr9PSrcA%2B4pkzrLHBlnD0hzTgkrXSYxQfjfB6oyN525Kdy1ioYs2TsPBEhTPGoW0PHzgA8tLEFfbA9LT35R31M62VzeCIX%2B8S%2BE8IdvgTg47ueNMFyNad1P27zksmn1k1CdPZF%2B%2FfQ5VSV79EkhG5kM2t3y5i2AGVTSp8LmLpjo0P0UZ8jeCoCNikcB4SBw3%2F3XE6C2DOEZTtsauXe7MB5MAkOWGY0RDBQpDp4%2FZujhN1DD6l0Ux93PLu8R5yYrFH5e%2FOyomAk1eXcPxEdkr9bVBOnADJ5bpvSOzpxVCK%2F6P3KNZpk5h9J9bNQChxX%2BhYPDJEfoQMcYbEa6cnBUKveurZD7MDcaz%2FIH4EaqMdWkW3KRBK4%2BRkGQRjtpi9C8e3o8fP%2FSJ01isaf37%2F85cnEE%2Bc%2FEbtagAsjQbpNQNAMooF8vGwv2odBVKXUePE7GDSWaTeg91PqiR%2Fm6K8x%2FcIwyXsOa%2FQlCz9FK9QO6NrexTujVN%2FJhJRN5xFL8wAqHBtQ1MfaysnafNtcqV%2B7JL4HlVpfKcWahfN1xl%2FA9ybbDlcdb5kUb8iilt0SeQ0e09vaufvzRMvjKPkVJqyLcwJwVMlWtahUkXXRuqC%2B0JnLdZgPLZqwwEHCe8sOADGQNAup%2BMKWQ2M0GOqUB0fK63Koc6LoJ41NPG4uCpLRqHVZBamhGLUtW3at5IUumbc%2B5mk%2FoH1rqHBuBJsWphHYRvNEkzXl9XYPwI1FoInXgft%2BqAeZMhe53cnRVtGv8kEZ1ON91WDOll%2FCj2iOR7u0whLhBBI6qmtj4cf7qyzv0CZzyHpf0CiZBbByulc5PoL0YImDEaYyffWEkMzhNPVZywHMV2eqB6T2jr2qgH0dgK2dg&X-Amz-Signature=444953d6026c50dc8d42ef70f683e8e0cc09bd9047ab6ce06af89c5de09099ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLFZX6U%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFrS47u8gJ6IVdGqdr7Ajl7VlN8zTYKUl7pj3V0G%2BOcwIgA8JIomd7ztdWasiS9niyzuNid9CDTZfPulqx4rgbZNsqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6vdZY6k5GDn1KlTircAz07Ka65xcxtictV1t%2BOkfiwRAXxvCbP7f2HWemwzxr%2BCvk25vETzXjbKxPHpMDnjACVB9WaAlCiEna05sT4AwXvWZaeJDTpY7zEr7Fqrh820A9bQ7g2iWvnfZXUemdJ7lCeE7uN1S0Qrp16BwZLfeodTJ2xH7VVfFijC4GMdexsimkxq5krDUejCYsR8fZ2%2Fug51tYrHRR%2B47oyFd%2B39rul%2F3uVLZwNmqgFoqDz5wsRFhD3mefQBZ3FvWqA06X6NGEruRszkEjuVg5Hj7u%2Fyew8Ee4qHomql8yKSBSm07jrtxhXkinVWiGpB%2Fjo%2BT8trfBzkFElyLzkz7%2BxRy4ySvMh%2FaAqV74G82lfHULqLb3Ml4ftX1nAjNQmVRvuKGEDnVQ5Z8inH3xUFtMivuVnTKGNMIXHid2kxw%2FPn73ADLq6giruY%2FM%2B0kr7yQzeSf%2B6TrCXps%2BNom0wTnyNtvZ%2BKEfeW7Xzv0kTtLMwM%2Bs0NlX1isUAnFKkrBkgKpCcq2QOMSMdn3bZx0%2Bsw4ByFLFy%2BEpQ2cddlex7jufPr8ruWg2TLcE9G3G9Qr%2Ffh%2FFPqWe7v%2B%2FleOgf8fmmHRuIPUENQwkj3UWJkjdMnpOgQhmVwNHafPjeutg0rCxcw43jMKOQ2M0GOqUBA610cFratuP%2B4QaUvrRgcz0dzzC4G4oRDyDwNmX2FMLw0gddmM8YS00Ap3X3k6C%2FgwZJKVDdmAQce1seO8Aq6wV6P7P4Zgaw3qLsITiCtvzt2CdYB3F6iRsBAwWgyGaInRp9CxOWH2viL%2F%2Fd5B42pdpyyTMS4I61o77ikJXExpyEsXFNjf9AEckseFfsGrBr01raS3quxEqBVdeY2xij4tTreJWa&X-Amz-Signature=ed4a7eb94dfbeb10bd42fd5171db6ab62a1d7a6708473ac8fbb3845073dab3ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGIFKCD%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK%2FYwd2AlYyH4z4GQRy%2F0Jpu3CHB0zk1fmgdhIPGlZaAiEA2AfHfTKMvK9N5j%2FPt3HPgNh%2BuQlSGBEkgGNu%2FcM1vS4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpPS4hce63zRjONiSrcA0VHPbIgBdQ3yJ4O2QXzso%2BXoPw7NgOkI1B03RwWX3kDPSgEajR%2B5Ud00Dew62FvxocPvce4ksYUznaoLWBTTsoAmHT8RunaAWKSChahXRJAnvGBpbEy6xsyDpSnPgH78KYtihqjSxr1AZPdxw8B5EFFdEeL0zRTSpblKH4l89qysmluVcNxboonWzJ1lEps1O5Fyk6Q02A0jW%2F301033MxNH5DPz41kYVTp%2FQAe7JtuG31SexrxQcxaT2s0d502Z4%2F5WRuue7XnuvvQvLi2oIfe2%2BKvhcnBXiEDzOEBg2Gg7r90nw1DsfZqDT%2F0meQo07ftuToXTImUN6vU3nC8xXG8P2w0SWzD%2FeVS7h3GkWcjVUQHbYNJaySOwwh1rIHKtcppiixKfHG%2FaD4gyi3d6I7b0yFK306Vwr5OL9GswKmkzhoS7sxfoGgjlNrQwGZcOJTTm0oYJw%2BvkNIqAJKl%2FeMS2RsfdjGErq8n2LrgqY93VZ0JE86IKhl82Ku9WuhzGp%2BoGg6u0BkDhMVgvYPDm8N8lBzIGuuP9Lg9u3fEdkB1YShHdDUBazabvsSBZVzblkIdsr6xVN%2FQ8Ec8flICEiG206BeJyoe0YqL%2F2LvFyZgsDtbu4rURhMFRrfxMPCP2M0GOqUB%2FWgWZlqkJB6cut0SrNvaBUQ9%2BCqWIzu472IWh2deGA8LOBwyDFUu1hs91oLGFAJSSFDMbwWKRaC1RkPnkwgA1pmLqcrBJNSxHVO%2B3%2F89qmf2UjeqCxmlLC%2FXCJGdDTmRBrx3wywnJ6bR9quoLCbxcPHw%2By4b123rTO3eDkgWZ91MYKzz4oKEOmLcDxlGtqMlHNxjsQXL5Lb7YVOCWIcFhfjcG%2F1W&X-Amz-Signature=f0d26cee865c0d0bb779c5f846edb745e3474bab3f80c4a9f92dc70803c809e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGIFKCD%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK%2FYwd2AlYyH4z4GQRy%2F0Jpu3CHB0zk1fmgdhIPGlZaAiEA2AfHfTKMvK9N5j%2FPt3HPgNh%2BuQlSGBEkgGNu%2FcM1vS4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpPS4hce63zRjONiSrcA0VHPbIgBdQ3yJ4O2QXzso%2BXoPw7NgOkI1B03RwWX3kDPSgEajR%2B5Ud00Dew62FvxocPvce4ksYUznaoLWBTTsoAmHT8RunaAWKSChahXRJAnvGBpbEy6xsyDpSnPgH78KYtihqjSxr1AZPdxw8B5EFFdEeL0zRTSpblKH4l89qysmluVcNxboonWzJ1lEps1O5Fyk6Q02A0jW%2F301033MxNH5DPz41kYVTp%2FQAe7JtuG31SexrxQcxaT2s0d502Z4%2F5WRuue7XnuvvQvLi2oIfe2%2BKvhcnBXiEDzOEBg2Gg7r90nw1DsfZqDT%2F0meQo07ftuToXTImUN6vU3nC8xXG8P2w0SWzD%2FeVS7h3GkWcjVUQHbYNJaySOwwh1rIHKtcppiixKfHG%2FaD4gyi3d6I7b0yFK306Vwr5OL9GswKmkzhoS7sxfoGgjlNrQwGZcOJTTm0oYJw%2BvkNIqAJKl%2FeMS2RsfdjGErq8n2LrgqY93VZ0JE86IKhl82Ku9WuhzGp%2BoGg6u0BkDhMVgvYPDm8N8lBzIGuuP9Lg9u3fEdkB1YShHdDUBazabvsSBZVzblkIdsr6xVN%2FQ8Ec8flICEiG206BeJyoe0YqL%2F2LvFyZgsDtbu4rURhMFRrfxMPCP2M0GOqUB%2FWgWZlqkJB6cut0SrNvaBUQ9%2BCqWIzu472IWh2deGA8LOBwyDFUu1hs91oLGFAJSSFDMbwWKRaC1RkPnkwgA1pmLqcrBJNSxHVO%2B3%2F89qmf2UjeqCxmlLC%2FXCJGdDTmRBrx3wywnJ6bR9quoLCbxcPHw%2By4b123rTO3eDkgWZ91MYKzz4oKEOmLcDxlGtqMlHNxjsQXL5Lb7YVOCWIcFhfjcG%2F1W&X-Amz-Signature=0d8cd636d1df29fa6964b94a08e21547c21b98a58ac6f80f92ab604973d1a15d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BPLME2%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwKWBSUlw%2BeOV5REmhK5eDU6PFgVUAm4KuJp0KJFnDiwIgMGjCpauexX0W93cKWcen7RpW88nqPBQdp9kFa6uiWsUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhvcxRtXscDObHuACrcA5kPCZK%2B9X2AuP1KUHxC4YPnvi%2BJ%2B6Um1XpnSD52vUPs5laUgrtp6zFD78VKABu5QWk4hKA85MGgnhefmq7NsKq5VXZwgWzrULRFzpHrAY20CxiT6MgcyRxKD6kE%2B1yxcMl8IbStPw66CeFemlctordLS8BoQGWkECo%2FGOJ5eoploMegxHD7XbUgYvPeE4fz9V%2FT%2Bp2sNCgOlMePiUegk6hOOyh7y2jNxndwKV6gFJqpuufjsyGdw6URJIU6iWZs0EAwReRjo0Y%2BKBF2ssiprn%2FIykKm%2F0fnyizXdPzvPgSimXG46pjn9VE01iNA0u6GpRs8%2FKSUKp5Tc8WHqZvfeopqTAAYhuFPj%2Brfo2zbz5Vzz86FoZuoU3RpSv1oigM6ZeLaOFP1tp9AtLCoTvVrRGl7e4eGumFw7jKps6MZpXJSLRA5MItDpjYT0LOPmT3VvfR8rHOHrERGoox7a1FkwYNMTP6mmXsawD1VdcW5c94H662Y%2FWPVhsCfTZrFV3MDRjuk%2FsY6em7yKv0WmodF135LF7ixq8xLQ3bVh5bVJ7OQXWwhhdJC8ccBo0eIuqkpfdsAqSefkda%2FawuqL3MNwtleT4WA5s0roHAI0T3qlGXxoeAUmlE6VrbhSJ5dMLyQ2M0GOqUB1oSoPsbTl0DSGJY%2FxLYulI%2B9o5zp9Pp9tDmon2KqegI%2B%2BK53Zl2OdoADREWY6Hn5VMBSvjBFKReCoteHdIa02dHmMy6JA36sHB9QsX0UHUp3poZC%2Ft%2F5OUdVSgvrjCKalFKb7JPh7GQFE9V%2B%2Bcd4slH9LFrwywlmCNqUVIvVVNqio7u8IK7gP2rAf3LD0wVDCfDfY2NB4FEaSo9UPaKLXkmFN1sp&X-Amz-Signature=5dc150a3656b6e7fca915a6b87a1fe6bf37acc470e8fc9e4d5bdea5066b6bca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BPLME2%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwKWBSUlw%2BeOV5REmhK5eDU6PFgVUAm4KuJp0KJFnDiwIgMGjCpauexX0W93cKWcen7RpW88nqPBQdp9kFa6uiWsUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhvcxRtXscDObHuACrcA5kPCZK%2B9X2AuP1KUHxC4YPnvi%2BJ%2B6Um1XpnSD52vUPs5laUgrtp6zFD78VKABu5QWk4hKA85MGgnhefmq7NsKq5VXZwgWzrULRFzpHrAY20CxiT6MgcyRxKD6kE%2B1yxcMl8IbStPw66CeFemlctordLS8BoQGWkECo%2FGOJ5eoploMegxHD7XbUgYvPeE4fz9V%2FT%2Bp2sNCgOlMePiUegk6hOOyh7y2jNxndwKV6gFJqpuufjsyGdw6URJIU6iWZs0EAwReRjo0Y%2BKBF2ssiprn%2FIykKm%2F0fnyizXdPzvPgSimXG46pjn9VE01iNA0u6GpRs8%2FKSUKp5Tc8WHqZvfeopqTAAYhuFPj%2Brfo2zbz5Vzz86FoZuoU3RpSv1oigM6ZeLaOFP1tp9AtLCoTvVrRGl7e4eGumFw7jKps6MZpXJSLRA5MItDpjYT0LOPmT3VvfR8rHOHrERGoox7a1FkwYNMTP6mmXsawD1VdcW5c94H662Y%2FWPVhsCfTZrFV3MDRjuk%2FsY6em7yKv0WmodF135LF7ixq8xLQ3bVh5bVJ7OQXWwhhdJC8ccBo0eIuqkpfdsAqSefkda%2FawuqL3MNwtleT4WA5s0roHAI0T3qlGXxoeAUmlE6VrbhSJ5dMLyQ2M0GOqUB1oSoPsbTl0DSGJY%2FxLYulI%2B9o5zp9Pp9tDmon2KqegI%2B%2BK53Zl2OdoADREWY6Hn5VMBSvjBFKReCoteHdIa02dHmMy6JA36sHB9QsX0UHUp3poZC%2Ft%2F5OUdVSgvrjCKalFKb7JPh7GQFE9V%2B%2Bcd4slH9LFrwywlmCNqUVIvVVNqio7u8IK7gP2rAf3LD0wVDCfDfY2NB4FEaSo9UPaKLXkmFN1sp&X-Amz-Signature=f54ead85bedc6c7cc01e4faa91382c8347b43488110c809f672c214e5eedca59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BPLME2%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwKWBSUlw%2BeOV5REmhK5eDU6PFgVUAm4KuJp0KJFnDiwIgMGjCpauexX0W93cKWcen7RpW88nqPBQdp9kFa6uiWsUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhvcxRtXscDObHuACrcA5kPCZK%2B9X2AuP1KUHxC4YPnvi%2BJ%2B6Um1XpnSD52vUPs5laUgrtp6zFD78VKABu5QWk4hKA85MGgnhefmq7NsKq5VXZwgWzrULRFzpHrAY20CxiT6MgcyRxKD6kE%2B1yxcMl8IbStPw66CeFemlctordLS8BoQGWkECo%2FGOJ5eoploMegxHD7XbUgYvPeE4fz9V%2FT%2Bp2sNCgOlMePiUegk6hOOyh7y2jNxndwKV6gFJqpuufjsyGdw6URJIU6iWZs0EAwReRjo0Y%2BKBF2ssiprn%2FIykKm%2F0fnyizXdPzvPgSimXG46pjn9VE01iNA0u6GpRs8%2FKSUKp5Tc8WHqZvfeopqTAAYhuFPj%2Brfo2zbz5Vzz86FoZuoU3RpSv1oigM6ZeLaOFP1tp9AtLCoTvVrRGl7e4eGumFw7jKps6MZpXJSLRA5MItDpjYT0LOPmT3VvfR8rHOHrERGoox7a1FkwYNMTP6mmXsawD1VdcW5c94H662Y%2FWPVhsCfTZrFV3MDRjuk%2FsY6em7yKv0WmodF135LF7ixq8xLQ3bVh5bVJ7OQXWwhhdJC8ccBo0eIuqkpfdsAqSefkda%2FawuqL3MNwtleT4WA5s0roHAI0T3qlGXxoeAUmlE6VrbhSJ5dMLyQ2M0GOqUB1oSoPsbTl0DSGJY%2FxLYulI%2B9o5zp9Pp9tDmon2KqegI%2B%2BK53Zl2OdoADREWY6Hn5VMBSvjBFKReCoteHdIa02dHmMy6JA36sHB9QsX0UHUp3poZC%2Ft%2F5OUdVSgvrjCKalFKb7JPh7GQFE9V%2B%2Bcd4slH9LFrwywlmCNqUVIvVVNqio7u8IK7gP2rAf3LD0wVDCfDfY2NB4FEaSo9UPaKLXkmFN1sp&X-Amz-Signature=d140f5935d588a500adecbdccb720c8450eeac109a2d0480141385fb297b6cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BPLME2%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwKWBSUlw%2BeOV5REmhK5eDU6PFgVUAm4KuJp0KJFnDiwIgMGjCpauexX0W93cKWcen7RpW88nqPBQdp9kFa6uiWsUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhvcxRtXscDObHuACrcA5kPCZK%2B9X2AuP1KUHxC4YPnvi%2BJ%2B6Um1XpnSD52vUPs5laUgrtp6zFD78VKABu5QWk4hKA85MGgnhefmq7NsKq5VXZwgWzrULRFzpHrAY20CxiT6MgcyRxKD6kE%2B1yxcMl8IbStPw66CeFemlctordLS8BoQGWkECo%2FGOJ5eoploMegxHD7XbUgYvPeE4fz9V%2FT%2Bp2sNCgOlMePiUegk6hOOyh7y2jNxndwKV6gFJqpuufjsyGdw6URJIU6iWZs0EAwReRjo0Y%2BKBF2ssiprn%2FIykKm%2F0fnyizXdPzvPgSimXG46pjn9VE01iNA0u6GpRs8%2FKSUKp5Tc8WHqZvfeopqTAAYhuFPj%2Brfo2zbz5Vzz86FoZuoU3RpSv1oigM6ZeLaOFP1tp9AtLCoTvVrRGl7e4eGumFw7jKps6MZpXJSLRA5MItDpjYT0LOPmT3VvfR8rHOHrERGoox7a1FkwYNMTP6mmXsawD1VdcW5c94H662Y%2FWPVhsCfTZrFV3MDRjuk%2FsY6em7yKv0WmodF135LF7ixq8xLQ3bVh5bVJ7OQXWwhhdJC8ccBo0eIuqkpfdsAqSefkda%2FawuqL3MNwtleT4WA5s0roHAI0T3qlGXxoeAUmlE6VrbhSJ5dMLyQ2M0GOqUB1oSoPsbTl0DSGJY%2FxLYulI%2B9o5zp9Pp9tDmon2KqegI%2B%2BK53Zl2OdoADREWY6Hn5VMBSvjBFKReCoteHdIa02dHmMy6JA36sHB9QsX0UHUp3poZC%2Ft%2F5OUdVSgvrjCKalFKb7JPh7GQFE9V%2B%2Bcd4slH9LFrwywlmCNqUVIvVVNqio7u8IK7gP2rAf3LD0wVDCfDfY2NB4FEaSo9UPaKLXkmFN1sp&X-Amz-Signature=90585b4b8a641b0c73f24cf393580fb84d6fc4acdc15f865b2b017ba66aa858c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XURVEFSB%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEs7sUf1hE8h7RrYHIskRc7gbtX9TobJJuA4KfoYE26BAiAYSrcdOjPjSbug%2FNoFVV2xB4o8ewRTW3TUrDEKGHQOLyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiKGmoO740b9KRZw9KtwDwhdEseEeUizkcNJIh%2B%2BHSan5B%2F1H2tV8%2BxQ95TmPrnhynF%2BIkDSaz4KuC9LHVDKApA0SGrS30svF887lQASLLX%2BdkPR9MRfyVUpvXi8OkcWrNRci2yS7hu7VRpgajBkvVCN7rkvrFZpEkAo8RyIMDn8MhdNls9SDb9sl%2BxRImaY%2B3uh6tryBVTNKx8DWq1NHF8R2jLqKzvZvS47Z67bla30gfzME3KFGHUAAev9M905HqPbboNdcznlH1coX7dL75jHThXedahoTnXFqNyXNl0qjMK4X91ztKK5DIUpJksasWLzcIX18mlVGsikkmiiz3fzhqE%2Fg8qn0hrWvFpNeKeidp5UmNvyBhcu84ns34D2m9kfwqVXhhgph33iogR2nAX3dCPrEvTimQRMRHh99lF4FbhCR2KSjX6qn6L1DautC30hIdEfGpl1OpHcKQBLp9HsFdRhDzm7%2F5ChDEMKowqEf0iRBDNPW7FXfrelfTk8jG36Cn9hHCU9r%2BEuBYoLZLCxrwS%2BrlPlK6N5RlKx64q46MVXoQQNLrBvhSLIy6dtTw6FQrfXJv6dNJk0lOgqanrkQyPvAseoE6fZY%2F9TvlydacyJ2IisPpP9QPXXwXcitHLd%2FMV0Moco%2FSTowm5DYzQY6pgENLImnFm3vaAczud5d8LkVV6rPw4JKahYPFkJhf0HXsMXCipS2Rhxc1C2HyZFZts5Oi3tlI43jED%2FCN9Cpf0TJ58Euq9US5XaPXThsQqx6RDYSLuf4rakhPRx3xDGxfK1Y5UzpuCxJ9DMT3DpD7%2B1R5wCzeYD9OQQKODSrhiLjMhIA7avQs0NJjQF8WjGGRIzlAalnHEu%2B2Or06pvf2g2tua1%2Fq%2BaX&X-Amz-Signature=25b9805dcb8d37e45e70eda48a05ff1d849b5c44d9283b24aa4497f52bfd5cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BPLME2%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwKWBSUlw%2BeOV5REmhK5eDU6PFgVUAm4KuJp0KJFnDiwIgMGjCpauexX0W93cKWcen7RpW88nqPBQdp9kFa6uiWsUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhvcxRtXscDObHuACrcA5kPCZK%2B9X2AuP1KUHxC4YPnvi%2BJ%2B6Um1XpnSD52vUPs5laUgrtp6zFD78VKABu5QWk4hKA85MGgnhefmq7NsKq5VXZwgWzrULRFzpHrAY20CxiT6MgcyRxKD6kE%2B1yxcMl8IbStPw66CeFemlctordLS8BoQGWkECo%2FGOJ5eoploMegxHD7XbUgYvPeE4fz9V%2FT%2Bp2sNCgOlMePiUegk6hOOyh7y2jNxndwKV6gFJqpuufjsyGdw6URJIU6iWZs0EAwReRjo0Y%2BKBF2ssiprn%2FIykKm%2F0fnyizXdPzvPgSimXG46pjn9VE01iNA0u6GpRs8%2FKSUKp5Tc8WHqZvfeopqTAAYhuFPj%2Brfo2zbz5Vzz86FoZuoU3RpSv1oigM6ZeLaOFP1tp9AtLCoTvVrRGl7e4eGumFw7jKps6MZpXJSLRA5MItDpjYT0LOPmT3VvfR8rHOHrERGoox7a1FkwYNMTP6mmXsawD1VdcW5c94H662Y%2FWPVhsCfTZrFV3MDRjuk%2FsY6em7yKv0WmodF135LF7ixq8xLQ3bVh5bVJ7OQXWwhhdJC8ccBo0eIuqkpfdsAqSefkda%2FawuqL3MNwtleT4WA5s0roHAI0T3qlGXxoeAUmlE6VrbhSJ5dMLyQ2M0GOqUB1oSoPsbTl0DSGJY%2FxLYulI%2B9o5zp9Pp9tDmon2KqegI%2B%2BK53Zl2OdoADREWY6Hn5VMBSvjBFKReCoteHdIa02dHmMy6JA36sHB9QsX0UHUp3poZC%2Ft%2F5OUdVSgvrjCKalFKb7JPh7GQFE9V%2B%2Bcd4slH9LFrwywlmCNqUVIvVVNqio7u8IK7gP2rAf3LD0wVDCfDfY2NB4FEaSo9UPaKLXkmFN1sp&X-Amz-Signature=6fe7dc5ad4cdc8ac9426956974076fa67b8a930ea7b27fc2203d309bd307e272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BPLME2%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwKWBSUlw%2BeOV5REmhK5eDU6PFgVUAm4KuJp0KJFnDiwIgMGjCpauexX0W93cKWcen7RpW88nqPBQdp9kFa6uiWsUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhvcxRtXscDObHuACrcA5kPCZK%2B9X2AuP1KUHxC4YPnvi%2BJ%2B6Um1XpnSD52vUPs5laUgrtp6zFD78VKABu5QWk4hKA85MGgnhefmq7NsKq5VXZwgWzrULRFzpHrAY20CxiT6MgcyRxKD6kE%2B1yxcMl8IbStPw66CeFemlctordLS8BoQGWkECo%2FGOJ5eoploMegxHD7XbUgYvPeE4fz9V%2FT%2Bp2sNCgOlMePiUegk6hOOyh7y2jNxndwKV6gFJqpuufjsyGdw6URJIU6iWZs0EAwReRjo0Y%2BKBF2ssiprn%2FIykKm%2F0fnyizXdPzvPgSimXG46pjn9VE01iNA0u6GpRs8%2FKSUKp5Tc8WHqZvfeopqTAAYhuFPj%2Brfo2zbz5Vzz86FoZuoU3RpSv1oigM6ZeLaOFP1tp9AtLCoTvVrRGl7e4eGumFw7jKps6MZpXJSLRA5MItDpjYT0LOPmT3VvfR8rHOHrERGoox7a1FkwYNMTP6mmXsawD1VdcW5c94H662Y%2FWPVhsCfTZrFV3MDRjuk%2FsY6em7yKv0WmodF135LF7ixq8xLQ3bVh5bVJ7OQXWwhhdJC8ccBo0eIuqkpfdsAqSefkda%2FawuqL3MNwtleT4WA5s0roHAI0T3qlGXxoeAUmlE6VrbhSJ5dMLyQ2M0GOqUB1oSoPsbTl0DSGJY%2FxLYulI%2B9o5zp9Pp9tDmon2KqegI%2B%2BK53Zl2OdoADREWY6Hn5VMBSvjBFKReCoteHdIa02dHmMy6JA36sHB9QsX0UHUp3poZC%2Ft%2F5OUdVSgvrjCKalFKb7JPh7GQFE9V%2B%2Bcd4slH9LFrwywlmCNqUVIvVVNqio7u8IK7gP2rAf3LD0wVDCfDfY2NB4FEaSo9UPaKLXkmFN1sp&X-Amz-Signature=9252763b7fa61fa070e188a44925f41207641ae76dca2521dbcc9e26ba749802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BPLME2%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwKWBSUlw%2BeOV5REmhK5eDU6PFgVUAm4KuJp0KJFnDiwIgMGjCpauexX0W93cKWcen7RpW88nqPBQdp9kFa6uiWsUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhvcxRtXscDObHuACrcA5kPCZK%2B9X2AuP1KUHxC4YPnvi%2BJ%2B6Um1XpnSD52vUPs5laUgrtp6zFD78VKABu5QWk4hKA85MGgnhefmq7NsKq5VXZwgWzrULRFzpHrAY20CxiT6MgcyRxKD6kE%2B1yxcMl8IbStPw66CeFemlctordLS8BoQGWkECo%2FGOJ5eoploMegxHD7XbUgYvPeE4fz9V%2FT%2Bp2sNCgOlMePiUegk6hOOyh7y2jNxndwKV6gFJqpuufjsyGdw6URJIU6iWZs0EAwReRjo0Y%2BKBF2ssiprn%2FIykKm%2F0fnyizXdPzvPgSimXG46pjn9VE01iNA0u6GpRs8%2FKSUKp5Tc8WHqZvfeopqTAAYhuFPj%2Brfo2zbz5Vzz86FoZuoU3RpSv1oigM6ZeLaOFP1tp9AtLCoTvVrRGl7e4eGumFw7jKps6MZpXJSLRA5MItDpjYT0LOPmT3VvfR8rHOHrERGoox7a1FkwYNMTP6mmXsawD1VdcW5c94H662Y%2FWPVhsCfTZrFV3MDRjuk%2FsY6em7yKv0WmodF135LF7ixq8xLQ3bVh5bVJ7OQXWwhhdJC8ccBo0eIuqkpfdsAqSefkda%2FawuqL3MNwtleT4WA5s0roHAI0T3qlGXxoeAUmlE6VrbhSJ5dMLyQ2M0GOqUB1oSoPsbTl0DSGJY%2FxLYulI%2B9o5zp9Pp9tDmon2KqegI%2B%2BK53Zl2OdoADREWY6Hn5VMBSvjBFKReCoteHdIa02dHmMy6JA36sHB9QsX0UHUp3poZC%2Ft%2F5OUdVSgvrjCKalFKb7JPh7GQFE9V%2B%2Bcd4slH9LFrwywlmCNqUVIvVVNqio7u8IK7gP2rAf3LD0wVDCfDfY2NB4FEaSo9UPaKLXkmFN1sp&X-Amz-Signature=d140f5935d588a500adecbdccb720c8450eeac109a2d0480141385fb297b6cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BPLME2%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwKWBSUlw%2BeOV5REmhK5eDU6PFgVUAm4KuJp0KJFnDiwIgMGjCpauexX0W93cKWcen7RpW88nqPBQdp9kFa6uiWsUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhvcxRtXscDObHuACrcA5kPCZK%2B9X2AuP1KUHxC4YPnvi%2BJ%2B6Um1XpnSD52vUPs5laUgrtp6zFD78VKABu5QWk4hKA85MGgnhefmq7NsKq5VXZwgWzrULRFzpHrAY20CxiT6MgcyRxKD6kE%2B1yxcMl8IbStPw66CeFemlctordLS8BoQGWkECo%2FGOJ5eoploMegxHD7XbUgYvPeE4fz9V%2FT%2Bp2sNCgOlMePiUegk6hOOyh7y2jNxndwKV6gFJqpuufjsyGdw6URJIU6iWZs0EAwReRjo0Y%2BKBF2ssiprn%2FIykKm%2F0fnyizXdPzvPgSimXG46pjn9VE01iNA0u6GpRs8%2FKSUKp5Tc8WHqZvfeopqTAAYhuFPj%2Brfo2zbz5Vzz86FoZuoU3RpSv1oigM6ZeLaOFP1tp9AtLCoTvVrRGl7e4eGumFw7jKps6MZpXJSLRA5MItDpjYT0LOPmT3VvfR8rHOHrERGoox7a1FkwYNMTP6mmXsawD1VdcW5c94H662Y%2FWPVhsCfTZrFV3MDRjuk%2FsY6em7yKv0WmodF135LF7ixq8xLQ3bVh5bVJ7OQXWwhhdJC8ccBo0eIuqkpfdsAqSefkda%2FawuqL3MNwtleT4WA5s0roHAI0T3qlGXxoeAUmlE6VrbhSJ5dMLyQ2M0GOqUB1oSoPsbTl0DSGJY%2FxLYulI%2B9o5zp9Pp9tDmon2KqegI%2B%2BK53Zl2OdoADREWY6Hn5VMBSvjBFKReCoteHdIa02dHmMy6JA36sHB9QsX0UHUp3poZC%2Ft%2F5OUdVSgvrjCKalFKb7JPh7GQFE9V%2B%2Bcd4slH9LFrwywlmCNqUVIvVVNqio7u8IK7gP2rAf3LD0wVDCfDfY2NB4FEaSo9UPaKLXkmFN1sp&X-Amz-Signature=e76271da18fdb3ba222fddfcb6da4a912565d3ef573e6b0949a8b976e4d70496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BPLME2%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwKWBSUlw%2BeOV5REmhK5eDU6PFgVUAm4KuJp0KJFnDiwIgMGjCpauexX0W93cKWcen7RpW88nqPBQdp9kFa6uiWsUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhvcxRtXscDObHuACrcA5kPCZK%2B9X2AuP1KUHxC4YPnvi%2BJ%2B6Um1XpnSD52vUPs5laUgrtp6zFD78VKABu5QWk4hKA85MGgnhefmq7NsKq5VXZwgWzrULRFzpHrAY20CxiT6MgcyRxKD6kE%2B1yxcMl8IbStPw66CeFemlctordLS8BoQGWkECo%2FGOJ5eoploMegxHD7XbUgYvPeE4fz9V%2FT%2Bp2sNCgOlMePiUegk6hOOyh7y2jNxndwKV6gFJqpuufjsyGdw6URJIU6iWZs0EAwReRjo0Y%2BKBF2ssiprn%2FIykKm%2F0fnyizXdPzvPgSimXG46pjn9VE01iNA0u6GpRs8%2FKSUKp5Tc8WHqZvfeopqTAAYhuFPj%2Brfo2zbz5Vzz86FoZuoU3RpSv1oigM6ZeLaOFP1tp9AtLCoTvVrRGl7e4eGumFw7jKps6MZpXJSLRA5MItDpjYT0LOPmT3VvfR8rHOHrERGoox7a1FkwYNMTP6mmXsawD1VdcW5c94H662Y%2FWPVhsCfTZrFV3MDRjuk%2FsY6em7yKv0WmodF135LF7ixq8xLQ3bVh5bVJ7OQXWwhhdJC8ccBo0eIuqkpfdsAqSefkda%2FawuqL3MNwtleT4WA5s0roHAI0T3qlGXxoeAUmlE6VrbhSJ5dMLyQ2M0GOqUB1oSoPsbTl0DSGJY%2FxLYulI%2B9o5zp9Pp9tDmon2KqegI%2B%2BK53Zl2OdoADREWY6Hn5VMBSvjBFKReCoteHdIa02dHmMy6JA36sHB9QsX0UHUp3poZC%2Ft%2F5OUdVSgvrjCKalFKb7JPh7GQFE9V%2B%2Bcd4slH9LFrwywlmCNqUVIvVVNqio7u8IK7gP2rAf3LD0wVDCfDfY2NB4FEaSo9UPaKLXkmFN1sp&X-Amz-Signature=f5f858f59462c0926920b9bae84772c5c4998e6b8ecfc55bdd6cb3427664889d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BPLME2%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwKWBSUlw%2BeOV5REmhK5eDU6PFgVUAm4KuJp0KJFnDiwIgMGjCpauexX0W93cKWcen7RpW88nqPBQdp9kFa6uiWsUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhvcxRtXscDObHuACrcA5kPCZK%2B9X2AuP1KUHxC4YPnvi%2BJ%2B6Um1XpnSD52vUPs5laUgrtp6zFD78VKABu5QWk4hKA85MGgnhefmq7NsKq5VXZwgWzrULRFzpHrAY20CxiT6MgcyRxKD6kE%2B1yxcMl8IbStPw66CeFemlctordLS8BoQGWkECo%2FGOJ5eoploMegxHD7XbUgYvPeE4fz9V%2FT%2Bp2sNCgOlMePiUegk6hOOyh7y2jNxndwKV6gFJqpuufjsyGdw6URJIU6iWZs0EAwReRjo0Y%2BKBF2ssiprn%2FIykKm%2F0fnyizXdPzvPgSimXG46pjn9VE01iNA0u6GpRs8%2FKSUKp5Tc8WHqZvfeopqTAAYhuFPj%2Brfo2zbz5Vzz86FoZuoU3RpSv1oigM6ZeLaOFP1tp9AtLCoTvVrRGl7e4eGumFw7jKps6MZpXJSLRA5MItDpjYT0LOPmT3VvfR8rHOHrERGoox7a1FkwYNMTP6mmXsawD1VdcW5c94H662Y%2FWPVhsCfTZrFV3MDRjuk%2FsY6em7yKv0WmodF135LF7ixq8xLQ3bVh5bVJ7OQXWwhhdJC8ccBo0eIuqkpfdsAqSefkda%2FawuqL3MNwtleT4WA5s0roHAI0T3qlGXxoeAUmlE6VrbhSJ5dMLyQ2M0GOqUB1oSoPsbTl0DSGJY%2FxLYulI%2B9o5zp9Pp9tDmon2KqegI%2B%2BK53Zl2OdoADREWY6Hn5VMBSvjBFKReCoteHdIa02dHmMy6JA36sHB9QsX0UHUp3poZC%2Ft%2F5OUdVSgvrjCKalFKb7JPh7GQFE9V%2B%2Bcd4slH9LFrwywlmCNqUVIvVVNqio7u8IK7gP2rAf3LD0wVDCfDfY2NB4FEaSo9UPaKLXkmFN1sp&X-Amz-Signature=62031653b0205a29bd2d51c3ec9dc0aa727845f895dc448efddd4138f659f077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


