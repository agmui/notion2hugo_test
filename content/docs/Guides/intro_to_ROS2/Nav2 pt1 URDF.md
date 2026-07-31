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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZAFI6Y%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAd4LPpeQnEei0w7jpqC3mO%2BBWwfhQDoJvkH4tKhlngAiEA3ufb%2Bp2by3Ch%2BI343IQeeNT8Z9W04OXanta%2BHuV31oAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFY3MAs2zWku6OL%2FxircA1KPxevt7oyGraw5s1wJ%2BSaoa%2FgWscVs%2BvRd00tudhOXw4ytQpme1vuzHl2OeaZLjCdPx1H8xUv%2BKEwD7RbMcscyK15g72NuWQCSgsPQJKxUP9bIf5aZqCspSNdnLeJanwjjEXj5nfh29NaTwu0vKgN7DlNeDYt1ZGBR9vanmXqVqutpz8kODjGxeEkPIfiR5OgBgIHbUuMkrqqPxhVdvARdHdVl2Ld2GH9qpJZhxuptlHJfFQF%2FloZ%2BwRqHY2lR%2BsAQyF6%2B1PtVe5v1YVCgHojMC0vz8Qxnddx1%2BzhST6eCux8JDkULsEHZP5eTaJxK%2FDxQjLHxRRlCnetqxJxS7svU9lXlEGFueXLP82aR%2BCmEXet%2FLBFCLcSXkGxJ7TRQlR%2BG1j4iazx9cJ3m0ZI2Ef%2BNlPJj4ezBeo9GcCiPc0v5aTCh3gxpprUDNKmcnNIeT24F4W60OD7ulIzv4ZeXXh2qn2k6qsyzRVsYhltUzbXYLWn6qeNaiNFS5FOb9sczWDx9ZHjhyR662u90%2BGCHvTGIJ6KejZs6upa4IV6DB6CNId5xct2P7e%2FhW%2BYMogaMPo%2B6BcDZNuh7FdTn79hxB574badwst%2B1Cug5rNdV3QNSW26xcZ72rsDzIPR8MMCUsNMGOqUBCFFquuSacv0IJq%2FZ6VoRZGJftdNFt05b3Ce%2B7MzHAMexdak3zBv1l9E3y6a%2FQNSHIGcihPKZXld2vlDPfSQN%2FLazdCnh4D638UBJpy7O30oqgCY4GggAOqFQRigoLxOAg67LJtw2Ggff31ZdyTtuIB%2B8bdUIR96go5gKpCBb6LnZwABKHT%2FLCGZ4ruDQTR3c4H1CqEVCpy7NooCuGGuqZ%2BL%2FxFd9&X-Amz-Signature=3c8ffa6d868c88768327c3199bfe59c0a199b6f787a6edfe0c17254b193ca949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZAFI6Y%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAd4LPpeQnEei0w7jpqC3mO%2BBWwfhQDoJvkH4tKhlngAiEA3ufb%2Bp2by3Ch%2BI343IQeeNT8Z9W04OXanta%2BHuV31oAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFY3MAs2zWku6OL%2FxircA1KPxevt7oyGraw5s1wJ%2BSaoa%2FgWscVs%2BvRd00tudhOXw4ytQpme1vuzHl2OeaZLjCdPx1H8xUv%2BKEwD7RbMcscyK15g72NuWQCSgsPQJKxUP9bIf5aZqCspSNdnLeJanwjjEXj5nfh29NaTwu0vKgN7DlNeDYt1ZGBR9vanmXqVqutpz8kODjGxeEkPIfiR5OgBgIHbUuMkrqqPxhVdvARdHdVl2Ld2GH9qpJZhxuptlHJfFQF%2FloZ%2BwRqHY2lR%2BsAQyF6%2B1PtVe5v1YVCgHojMC0vz8Qxnddx1%2BzhST6eCux8JDkULsEHZP5eTaJxK%2FDxQjLHxRRlCnetqxJxS7svU9lXlEGFueXLP82aR%2BCmEXet%2FLBFCLcSXkGxJ7TRQlR%2BG1j4iazx9cJ3m0ZI2Ef%2BNlPJj4ezBeo9GcCiPc0v5aTCh3gxpprUDNKmcnNIeT24F4W60OD7ulIzv4ZeXXh2qn2k6qsyzRVsYhltUzbXYLWn6qeNaiNFS5FOb9sczWDx9ZHjhyR662u90%2BGCHvTGIJ6KejZs6upa4IV6DB6CNId5xct2P7e%2FhW%2BYMogaMPo%2B6BcDZNuh7FdTn79hxB574badwst%2B1Cug5rNdV3QNSW26xcZ72rsDzIPR8MMCUsNMGOqUBCFFquuSacv0IJq%2FZ6VoRZGJftdNFt05b3Ce%2B7MzHAMexdak3zBv1l9E3y6a%2FQNSHIGcihPKZXld2vlDPfSQN%2FLazdCnh4D638UBJpy7O30oqgCY4GggAOqFQRigoLxOAg67LJtw2Ggff31ZdyTtuIB%2B8bdUIR96go5gKpCBb6LnZwABKHT%2FLCGZ4ruDQTR3c4H1CqEVCpy7NooCuGGuqZ%2BL%2FxFd9&X-Amz-Signature=977286f9ce3a6984d2393353badd7bdee430d52e10c949ded6d9cf9f595467ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZAFI6Y%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAd4LPpeQnEei0w7jpqC3mO%2BBWwfhQDoJvkH4tKhlngAiEA3ufb%2Bp2by3Ch%2BI343IQeeNT8Z9W04OXanta%2BHuV31oAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFY3MAs2zWku6OL%2FxircA1KPxevt7oyGraw5s1wJ%2BSaoa%2FgWscVs%2BvRd00tudhOXw4ytQpme1vuzHl2OeaZLjCdPx1H8xUv%2BKEwD7RbMcscyK15g72NuWQCSgsPQJKxUP9bIf5aZqCspSNdnLeJanwjjEXj5nfh29NaTwu0vKgN7DlNeDYt1ZGBR9vanmXqVqutpz8kODjGxeEkPIfiR5OgBgIHbUuMkrqqPxhVdvARdHdVl2Ld2GH9qpJZhxuptlHJfFQF%2FloZ%2BwRqHY2lR%2BsAQyF6%2B1PtVe5v1YVCgHojMC0vz8Qxnddx1%2BzhST6eCux8JDkULsEHZP5eTaJxK%2FDxQjLHxRRlCnetqxJxS7svU9lXlEGFueXLP82aR%2BCmEXet%2FLBFCLcSXkGxJ7TRQlR%2BG1j4iazx9cJ3m0ZI2Ef%2BNlPJj4ezBeo9GcCiPc0v5aTCh3gxpprUDNKmcnNIeT24F4W60OD7ulIzv4ZeXXh2qn2k6qsyzRVsYhltUzbXYLWn6qeNaiNFS5FOb9sczWDx9ZHjhyR662u90%2BGCHvTGIJ6KejZs6upa4IV6DB6CNId5xct2P7e%2FhW%2BYMogaMPo%2B6BcDZNuh7FdTn79hxB574badwst%2B1Cug5rNdV3QNSW26xcZ72rsDzIPR8MMCUsNMGOqUBCFFquuSacv0IJq%2FZ6VoRZGJftdNFt05b3Ce%2B7MzHAMexdak3zBv1l9E3y6a%2FQNSHIGcihPKZXld2vlDPfSQN%2FLazdCnh4D638UBJpy7O30oqgCY4GggAOqFQRigoLxOAg67LJtw2Ggff31ZdyTtuIB%2B8bdUIR96go5gKpCBb6LnZwABKHT%2FLCGZ4ruDQTR3c4H1CqEVCpy7NooCuGGuqZ%2BL%2FxFd9&X-Amz-Signature=073ee9d20baa8d6c198fcb188908a6a99113bac8225910e72d5476870bdae561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZAFI6Y%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAd4LPpeQnEei0w7jpqC3mO%2BBWwfhQDoJvkH4tKhlngAiEA3ufb%2Bp2by3Ch%2BI343IQeeNT8Z9W04OXanta%2BHuV31oAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFY3MAs2zWku6OL%2FxircA1KPxevt7oyGraw5s1wJ%2BSaoa%2FgWscVs%2BvRd00tudhOXw4ytQpme1vuzHl2OeaZLjCdPx1H8xUv%2BKEwD7RbMcscyK15g72NuWQCSgsPQJKxUP9bIf5aZqCspSNdnLeJanwjjEXj5nfh29NaTwu0vKgN7DlNeDYt1ZGBR9vanmXqVqutpz8kODjGxeEkPIfiR5OgBgIHbUuMkrqqPxhVdvARdHdVl2Ld2GH9qpJZhxuptlHJfFQF%2FloZ%2BwRqHY2lR%2BsAQyF6%2B1PtVe5v1YVCgHojMC0vz8Qxnddx1%2BzhST6eCux8JDkULsEHZP5eTaJxK%2FDxQjLHxRRlCnetqxJxS7svU9lXlEGFueXLP82aR%2BCmEXet%2FLBFCLcSXkGxJ7TRQlR%2BG1j4iazx9cJ3m0ZI2Ef%2BNlPJj4ezBeo9GcCiPc0v5aTCh3gxpprUDNKmcnNIeT24F4W60OD7ulIzv4ZeXXh2qn2k6qsyzRVsYhltUzbXYLWn6qeNaiNFS5FOb9sczWDx9ZHjhyR662u90%2BGCHvTGIJ6KejZs6upa4IV6DB6CNId5xct2P7e%2FhW%2BYMogaMPo%2B6BcDZNuh7FdTn79hxB574badwst%2B1Cug5rNdV3QNSW26xcZ72rsDzIPR8MMCUsNMGOqUBCFFquuSacv0IJq%2FZ6VoRZGJftdNFt05b3Ce%2B7MzHAMexdak3zBv1l9E3y6a%2FQNSHIGcihPKZXld2vlDPfSQN%2FLazdCnh4D638UBJpy7O30oqgCY4GggAOqFQRigoLxOAg67LJtw2Ggff31ZdyTtuIB%2B8bdUIR96go5gKpCBb6LnZwABKHT%2FLCGZ4ruDQTR3c4H1CqEVCpy7NooCuGGuqZ%2BL%2FxFd9&X-Amz-Signature=8c695d634cefc969f5c15a9df1a55f2bf4108f91e25191e80861b5d79bd84167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZAFI6Y%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAd4LPpeQnEei0w7jpqC3mO%2BBWwfhQDoJvkH4tKhlngAiEA3ufb%2Bp2by3Ch%2BI343IQeeNT8Z9W04OXanta%2BHuV31oAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFY3MAs2zWku6OL%2FxircA1KPxevt7oyGraw5s1wJ%2BSaoa%2FgWscVs%2BvRd00tudhOXw4ytQpme1vuzHl2OeaZLjCdPx1H8xUv%2BKEwD7RbMcscyK15g72NuWQCSgsPQJKxUP9bIf5aZqCspSNdnLeJanwjjEXj5nfh29NaTwu0vKgN7DlNeDYt1ZGBR9vanmXqVqutpz8kODjGxeEkPIfiR5OgBgIHbUuMkrqqPxhVdvARdHdVl2Ld2GH9qpJZhxuptlHJfFQF%2FloZ%2BwRqHY2lR%2BsAQyF6%2B1PtVe5v1YVCgHojMC0vz8Qxnddx1%2BzhST6eCux8JDkULsEHZP5eTaJxK%2FDxQjLHxRRlCnetqxJxS7svU9lXlEGFueXLP82aR%2BCmEXet%2FLBFCLcSXkGxJ7TRQlR%2BG1j4iazx9cJ3m0ZI2Ef%2BNlPJj4ezBeo9GcCiPc0v5aTCh3gxpprUDNKmcnNIeT24F4W60OD7ulIzv4ZeXXh2qn2k6qsyzRVsYhltUzbXYLWn6qeNaiNFS5FOb9sczWDx9ZHjhyR662u90%2BGCHvTGIJ6KejZs6upa4IV6DB6CNId5xct2P7e%2FhW%2BYMogaMPo%2B6BcDZNuh7FdTn79hxB574badwst%2B1Cug5rNdV3QNSW26xcZ72rsDzIPR8MMCUsNMGOqUBCFFquuSacv0IJq%2FZ6VoRZGJftdNFt05b3Ce%2B7MzHAMexdak3zBv1l9E3y6a%2FQNSHIGcihPKZXld2vlDPfSQN%2FLazdCnh4D638UBJpy7O30oqgCY4GggAOqFQRigoLxOAg67LJtw2Ggff31ZdyTtuIB%2B8bdUIR96go5gKpCBb6LnZwABKHT%2FLCGZ4ruDQTR3c4H1CqEVCpy7NooCuGGuqZ%2BL%2FxFd9&X-Amz-Signature=fc28dec24cc929cdb08174296496b3f6100c7742989234b592cea9c78fe6b582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZAFI6Y%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAd4LPpeQnEei0w7jpqC3mO%2BBWwfhQDoJvkH4tKhlngAiEA3ufb%2Bp2by3Ch%2BI343IQeeNT8Z9W04OXanta%2BHuV31oAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFY3MAs2zWku6OL%2FxircA1KPxevt7oyGraw5s1wJ%2BSaoa%2FgWscVs%2BvRd00tudhOXw4ytQpme1vuzHl2OeaZLjCdPx1H8xUv%2BKEwD7RbMcscyK15g72NuWQCSgsPQJKxUP9bIf5aZqCspSNdnLeJanwjjEXj5nfh29NaTwu0vKgN7DlNeDYt1ZGBR9vanmXqVqutpz8kODjGxeEkPIfiR5OgBgIHbUuMkrqqPxhVdvARdHdVl2Ld2GH9qpJZhxuptlHJfFQF%2FloZ%2BwRqHY2lR%2BsAQyF6%2B1PtVe5v1YVCgHojMC0vz8Qxnddx1%2BzhST6eCux8JDkULsEHZP5eTaJxK%2FDxQjLHxRRlCnetqxJxS7svU9lXlEGFueXLP82aR%2BCmEXet%2FLBFCLcSXkGxJ7TRQlR%2BG1j4iazx9cJ3m0ZI2Ef%2BNlPJj4ezBeo9GcCiPc0v5aTCh3gxpprUDNKmcnNIeT24F4W60OD7ulIzv4ZeXXh2qn2k6qsyzRVsYhltUzbXYLWn6qeNaiNFS5FOb9sczWDx9ZHjhyR662u90%2BGCHvTGIJ6KejZs6upa4IV6DB6CNId5xct2P7e%2FhW%2BYMogaMPo%2B6BcDZNuh7FdTn79hxB574badwst%2B1Cug5rNdV3QNSW26xcZ72rsDzIPR8MMCUsNMGOqUBCFFquuSacv0IJq%2FZ6VoRZGJftdNFt05b3Ce%2B7MzHAMexdak3zBv1l9E3y6a%2FQNSHIGcihPKZXld2vlDPfSQN%2FLazdCnh4D638UBJpy7O30oqgCY4GggAOqFQRigoLxOAg67LJtw2Ggff31ZdyTtuIB%2B8bdUIR96go5gKpCBb6LnZwABKHT%2FLCGZ4ruDQTR3c4H1CqEVCpy7NooCuGGuqZ%2BL%2FxFd9&X-Amz-Signature=554cda76323ec54c5204eca79d24efcda8622ec94a600ffa18562459df9cd206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZAFI6Y%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAd4LPpeQnEei0w7jpqC3mO%2BBWwfhQDoJvkH4tKhlngAiEA3ufb%2Bp2by3Ch%2BI343IQeeNT8Z9W04OXanta%2BHuV31oAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFY3MAs2zWku6OL%2FxircA1KPxevt7oyGraw5s1wJ%2BSaoa%2FgWscVs%2BvRd00tudhOXw4ytQpme1vuzHl2OeaZLjCdPx1H8xUv%2BKEwD7RbMcscyK15g72NuWQCSgsPQJKxUP9bIf5aZqCspSNdnLeJanwjjEXj5nfh29NaTwu0vKgN7DlNeDYt1ZGBR9vanmXqVqutpz8kODjGxeEkPIfiR5OgBgIHbUuMkrqqPxhVdvARdHdVl2Ld2GH9qpJZhxuptlHJfFQF%2FloZ%2BwRqHY2lR%2BsAQyF6%2B1PtVe5v1YVCgHojMC0vz8Qxnddx1%2BzhST6eCux8JDkULsEHZP5eTaJxK%2FDxQjLHxRRlCnetqxJxS7svU9lXlEGFueXLP82aR%2BCmEXet%2FLBFCLcSXkGxJ7TRQlR%2BG1j4iazx9cJ3m0ZI2Ef%2BNlPJj4ezBeo9GcCiPc0v5aTCh3gxpprUDNKmcnNIeT24F4W60OD7ulIzv4ZeXXh2qn2k6qsyzRVsYhltUzbXYLWn6qeNaiNFS5FOb9sczWDx9ZHjhyR662u90%2BGCHvTGIJ6KejZs6upa4IV6DB6CNId5xct2P7e%2FhW%2BYMogaMPo%2B6BcDZNuh7FdTn79hxB574badwst%2B1Cug5rNdV3QNSW26xcZ72rsDzIPR8MMCUsNMGOqUBCFFquuSacv0IJq%2FZ6VoRZGJftdNFt05b3Ce%2B7MzHAMexdak3zBv1l9E3y6a%2FQNSHIGcihPKZXld2vlDPfSQN%2FLazdCnh4D638UBJpy7O30oqgCY4GggAOqFQRigoLxOAg67LJtw2Ggff31ZdyTtuIB%2B8bdUIR96go5gKpCBb6LnZwABKHT%2FLCGZ4ruDQTR3c4H1CqEVCpy7NooCuGGuqZ%2BL%2FxFd9&X-Amz-Signature=4dda0830690bdc5e603de2aca93b166c1f9419fff475c240bea30effd60b3a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZAFI6Y%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAd4LPpeQnEei0w7jpqC3mO%2BBWwfhQDoJvkH4tKhlngAiEA3ufb%2Bp2by3Ch%2BI343IQeeNT8Z9W04OXanta%2BHuV31oAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFY3MAs2zWku6OL%2FxircA1KPxevt7oyGraw5s1wJ%2BSaoa%2FgWscVs%2BvRd00tudhOXw4ytQpme1vuzHl2OeaZLjCdPx1H8xUv%2BKEwD7RbMcscyK15g72NuWQCSgsPQJKxUP9bIf5aZqCspSNdnLeJanwjjEXj5nfh29NaTwu0vKgN7DlNeDYt1ZGBR9vanmXqVqutpz8kODjGxeEkPIfiR5OgBgIHbUuMkrqqPxhVdvARdHdVl2Ld2GH9qpJZhxuptlHJfFQF%2FloZ%2BwRqHY2lR%2BsAQyF6%2B1PtVe5v1YVCgHojMC0vz8Qxnddx1%2BzhST6eCux8JDkULsEHZP5eTaJxK%2FDxQjLHxRRlCnetqxJxS7svU9lXlEGFueXLP82aR%2BCmEXet%2FLBFCLcSXkGxJ7TRQlR%2BG1j4iazx9cJ3m0ZI2Ef%2BNlPJj4ezBeo9GcCiPc0v5aTCh3gxpprUDNKmcnNIeT24F4W60OD7ulIzv4ZeXXh2qn2k6qsyzRVsYhltUzbXYLWn6qeNaiNFS5FOb9sczWDx9ZHjhyR662u90%2BGCHvTGIJ6KejZs6upa4IV6DB6CNId5xct2P7e%2FhW%2BYMogaMPo%2B6BcDZNuh7FdTn79hxB574badwst%2B1Cug5rNdV3QNSW26xcZ72rsDzIPR8MMCUsNMGOqUBCFFquuSacv0IJq%2FZ6VoRZGJftdNFt05b3Ce%2B7MzHAMexdak3zBv1l9E3y6a%2FQNSHIGcihPKZXld2vlDPfSQN%2FLazdCnh4D638UBJpy7O30oqgCY4GggAOqFQRigoLxOAg67LJtw2Ggff31ZdyTtuIB%2B8bdUIR96go5gKpCBb6LnZwABKHT%2FLCGZ4ruDQTR3c4H1CqEVCpy7NooCuGGuqZ%2BL%2FxFd9&X-Amz-Signature=b09afe7bd12566e757a799ff5a6c95d6de8b54aa66e66c6f73fd1a1b519ee469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZAFI6Y%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAd4LPpeQnEei0w7jpqC3mO%2BBWwfhQDoJvkH4tKhlngAiEA3ufb%2Bp2by3Ch%2BI343IQeeNT8Z9W04OXanta%2BHuV31oAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFY3MAs2zWku6OL%2FxircA1KPxevt7oyGraw5s1wJ%2BSaoa%2FgWscVs%2BvRd00tudhOXw4ytQpme1vuzHl2OeaZLjCdPx1H8xUv%2BKEwD7RbMcscyK15g72NuWQCSgsPQJKxUP9bIf5aZqCspSNdnLeJanwjjEXj5nfh29NaTwu0vKgN7DlNeDYt1ZGBR9vanmXqVqutpz8kODjGxeEkPIfiR5OgBgIHbUuMkrqqPxhVdvARdHdVl2Ld2GH9qpJZhxuptlHJfFQF%2FloZ%2BwRqHY2lR%2BsAQyF6%2B1PtVe5v1YVCgHojMC0vz8Qxnddx1%2BzhST6eCux8JDkULsEHZP5eTaJxK%2FDxQjLHxRRlCnetqxJxS7svU9lXlEGFueXLP82aR%2BCmEXet%2FLBFCLcSXkGxJ7TRQlR%2BG1j4iazx9cJ3m0ZI2Ef%2BNlPJj4ezBeo9GcCiPc0v5aTCh3gxpprUDNKmcnNIeT24F4W60OD7ulIzv4ZeXXh2qn2k6qsyzRVsYhltUzbXYLWn6qeNaiNFS5FOb9sczWDx9ZHjhyR662u90%2BGCHvTGIJ6KejZs6upa4IV6DB6CNId5xct2P7e%2FhW%2BYMogaMPo%2B6BcDZNuh7FdTn79hxB574badwst%2B1Cug5rNdV3QNSW26xcZ72rsDzIPR8MMCUsNMGOqUBCFFquuSacv0IJq%2FZ6VoRZGJftdNFt05b3Ce%2B7MzHAMexdak3zBv1l9E3y6a%2FQNSHIGcihPKZXld2vlDPfSQN%2FLazdCnh4D638UBJpy7O30oqgCY4GggAOqFQRigoLxOAg67LJtw2Ggff31ZdyTtuIB%2B8bdUIR96go5gKpCBb6LnZwABKHT%2FLCGZ4ruDQTR3c4H1CqEVCpy7NooCuGGuqZ%2BL%2FxFd9&X-Amz-Signature=fe3ff5326ca0ae4331dc2514871a506cc6a654f71c253208562d270dffb24adb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZAFI6Y%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAd4LPpeQnEei0w7jpqC3mO%2BBWwfhQDoJvkH4tKhlngAiEA3ufb%2Bp2by3Ch%2BI343IQeeNT8Z9W04OXanta%2BHuV31oAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFY3MAs2zWku6OL%2FxircA1KPxevt7oyGraw5s1wJ%2BSaoa%2FgWscVs%2BvRd00tudhOXw4ytQpme1vuzHl2OeaZLjCdPx1H8xUv%2BKEwD7RbMcscyK15g72NuWQCSgsPQJKxUP9bIf5aZqCspSNdnLeJanwjjEXj5nfh29NaTwu0vKgN7DlNeDYt1ZGBR9vanmXqVqutpz8kODjGxeEkPIfiR5OgBgIHbUuMkrqqPxhVdvARdHdVl2Ld2GH9qpJZhxuptlHJfFQF%2FloZ%2BwRqHY2lR%2BsAQyF6%2B1PtVe5v1YVCgHojMC0vz8Qxnddx1%2BzhST6eCux8JDkULsEHZP5eTaJxK%2FDxQjLHxRRlCnetqxJxS7svU9lXlEGFueXLP82aR%2BCmEXet%2FLBFCLcSXkGxJ7TRQlR%2BG1j4iazx9cJ3m0ZI2Ef%2BNlPJj4ezBeo9GcCiPc0v5aTCh3gxpprUDNKmcnNIeT24F4W60OD7ulIzv4ZeXXh2qn2k6qsyzRVsYhltUzbXYLWn6qeNaiNFS5FOb9sczWDx9ZHjhyR662u90%2BGCHvTGIJ6KejZs6upa4IV6DB6CNId5xct2P7e%2FhW%2BYMogaMPo%2B6BcDZNuh7FdTn79hxB574badwst%2B1Cug5rNdV3QNSW26xcZ72rsDzIPR8MMCUsNMGOqUBCFFquuSacv0IJq%2FZ6VoRZGJftdNFt05b3Ce%2B7MzHAMexdak3zBv1l9E3y6a%2FQNSHIGcihPKZXld2vlDPfSQN%2FLazdCnh4D638UBJpy7O30oqgCY4GggAOqFQRigoLxOAg67LJtw2Ggff31ZdyTtuIB%2B8bdUIR96go5gKpCBb6LnZwABKHT%2FLCGZ4ruDQTR3c4H1CqEVCpy7NooCuGGuqZ%2BL%2FxFd9&X-Amz-Signature=ea6d90c1832ede4e4ebdddad832d3c800d05ad3033f4073b99be8430f95bd248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HS5VJF4%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsiwr2YtF%2F0ON7hOf3boP1MHnMv97qkgVUvzkjzpD3VAiBgO8LGnNoynAYJvdox%2FDdyhqhIaTkhAtVh86gT6xd3WiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiWC1w6NB7s6%2FsEoMKtwDlkhyjg2GVONvImRa73bJ2Q71SVgMVio%2FFnsY0PJUM61StY%2FVj91b%2ByVCzpfLtL2AOhLJu0jrJ1HPiAL6CvvNVJQzmPP0tM9V0j3YvQl0zpB1gI163vPk%2FcHsHaN73rakPFUR%2BIPDPcg1Rg3Njyq9KZuxgV%2BtuZCwm%2Bx7M%2BKNrn1f%2FQj3xi%2BBfCoqKmVhaK3A9gjLKj9%2BIyYKcJBIV1Au3wuWwyaqREeZ7jSsRi%2B9BonYqkalsxQPFDcgx%2FVcIqGljRNf%2B59kO175OnoWfg5Wcee597It3N7NH7QrBB%2FsJCrnNGP5rdiYHriruJQ67vPQ0cSIdU2HrwIg0xcURcB%2B1IWkV7%2FYnDfjq75QT0l3RdOVzyH72fVALkYgPxkzz%2Bg9lndNjoRy8y1WC5OmGgVils5GqYgXuWjzkUK22Ut47mJySe6TU9BAf51q8KVIoQXZxMPnj7ERXWX1uvu%2FKMakb1fztqqyQkWsJ9cTFnlZaPJmBKmdwxJ%2B3IQSWJosSVrstppEnOH%2BgowNB4vSPS6CUJWJz3498pVyewohHmffY7uYtYoKJT2UzYR42ouGkKPmvka%2FZdxiAJCSFGg3MK2MJhdbToHhsNCpAFRmfDNEkLDK%2Fu51dZCgv9SIaTcwypSw0wY6pgGe1eSckYUW7oTqjNp5x20UR6kOpkN5sNwBvm9zKDB%2FZ9MJXFdY4Z1pYWyDwGuI%2BDIwckYOLZVVQAeo%2FVHmAVIa5Ez3bjCWVT%2FgW%2FP4sd%2FOV8ueb44Nvkdb63zkxm%2BhE4Onvww%2BtEmoBxDgfHzTjPB%2B7WCoklthhEyCnErOM2DzGHcQESFp9Oh8XC%2BX5tb9kIfB%2FnqEXloMbhUOrIweUh0oBrd32Ct2&X-Amz-Signature=57e0e0728f9c1909e7feb1d96efe6111e9be0dcaeb283b9d7d7b4191b85a5375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TULNG74S%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwfHdFazFUxD8hsiCVl3EFU32I3%2BY53l2eA14sbCkKPAiEA8q2q418Pgd%2B9z6R2cCdYgzWasrA3UCje7mW2z4EFNDcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FjvVBIePhVSjRI8yrcAx93Tq7XiF5j2kdrCMf1Vc2GxUoKcgGKNUo1uJggqoXXfgSMu9w2cqc%2BThUjdpPXdelX63GXIv2ydfV%2BFCwvHS7rcnSW2lOlpkH6LAJbBh5eooG%2Fg%2B%2BQECJp56QEG79RsZaJtgp8C7sgYcW9S2cxR9r3myYNVdKuPIKxKjWJbJT%2BuXU7Dw1XdS4v4%2FPlbqLqGaO8TpAEV9eQTNU8Qv88%2B5f5jaSFauzM9MEwYR7PKRKRM0O%2FhyGUFWkV1BhPhRQTWby7j8DCyShB6%2BnWh%2Fa%2BnHnNsT9Xe1294SRYagbD77qC01SNVDLIGfUcL%2BHZEh8vUtLaMaomiEfxpTDitrkvp1cFiPYJ3Z439h45KV4yvuI1L%2F5YAkD8xQN%2FFODKyzwu9K1JLbb%2Fw1xejzNFFKI4DLwVsEqI9sCv3TDROysH0VCJOb4w%2FqnqQVlapXKAedqIuCfaTjejdelKznBwECwdAGhKVqBSawenMD2zrh9B3vyxfZiu8RJpYjQRrl%2B5ijvpTgqhq4RWZ18iTuR%2F87G70wMk7ANBjMgjOBNrNzxm8KFEB5Tzm7cFI2tfWbF%2F652j2b7%2Fxhf5BCIU8V33LoX8NTqB1El%2FciHAmNtQTTorElkyM6nx1TPRJizuwSRgMKiXsNMGOqUB32IkhdBWLB%2FtyThimF%2F%2FUgnLG2m4T0EYX%2BClPoxHxTl%2FNgCUAxhUiWcwriSmfS5XZtKqt9jB3za5XM%2FxFta7mpGYpZ1KTquAG8sGC8fOh0XO9B5rs%2FLiew912LgI%2BcR3loo%2FKXTUREFOMHoFlVcNub2VYQO8eKAzBS2xoleA8PkcBT4z1QRB%2BfUTyRcXWz3sE8yUpTW6C2QWOZgkHmC8RNyIUb1X&X-Amz-Signature=3577161ab052fb79a7c188c83b6c3c8c1e6f4155332c23919544cd265f5deb57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPVYCZA3%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICULZB48IZ4RSfkX%2Bw%2BX6AFWb%2FwHO16VXj3rpVUlFkkdAiEAs%2FWOXcLmwnKkdk6COuG4EQXoxchmaQ%2FQ8FRMJMa%2BwWMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1bht55BJJ8phH8ICrcA3Bb1zNEGggmB1e0ak6mdLVasdDz1DVtpCid%2Fl7cmS9ENj8L9JiTVxM9Q9VHqFQ037olzs91K5lzdeAe%2BNQ0AcXTnngN%2Fmxg%2FA4JNJH5xSTKisqSRPP3Xq9f5kNZ3fA%2BlV7E%2FNUxy12o%2F9NKmUtzreyEiX45%2Bgz9ACHWMX1vz6vjxp66TV8M2Yxqh8taANzdWixHiPiaJ8K8avSfjb0Eq6XDAWyIUAkFJiqRLWV8MZ5N7SH01ZHNRyoiG2kmnZbPYBYK2IHxY4kUkpo7UhqnJBGlBLudgbz0EtH4i8JGpnVhSGzzCjepXZzS339999vCESo2grZ60%2BoBvAnTunWCjr86LhcglH16DhDrQkPgAnFi2vhMQydp1xgRJfb1VSRqlRhhHh5chn5TGHPZqGdP8cqbqocylCHZ5QjLKGveH%2FousJVAqB%2FCqDsz%2FHl8EEh92S086udNMLZFt1lXd2Tr2MuhpKRwy38l5EPZO9Ji3pEdKKHVo3wLOt61rivacMx14Hj1mksSb9e3K7JpK7Q16hGsWEyR6I5EQS6F4%2B5yOixcD8bWT%2BhPiARRdyp4xq%2FOefFgWL%2FnN5D546dzNlVMv9As6qH89sm8zgw0f3r1gg9ehxCJR0tjNPoGECOzML6WsNMGOqUBtWu6o6y3PS0MqGWXf3TTjV5cfFyP4Df949ozXlWTefj4wbbHgZpxMOTpM7L0xCFHsSuMdSKQr1HcNVZqZC0xW3WcidWnYCFsyW0wdwD8jnZDcNSbW34gRz6G5YlvInnguebjSwDWKko%2FebyYA06bfE1LIwY9w8D6%2BJQld1WzSP0q%2FSfP1YxGAmXSIeX%2B%2FTiOfLfozrgh9F%2B%2FTaCoj8tR9bWM96N%2B&X-Amz-Signature=b5345edde5148e803b14c88e5c971fe5200c781b7ec87c44a89a300912063b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZAFI6Y%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAd4LPpeQnEei0w7jpqC3mO%2BBWwfhQDoJvkH4tKhlngAiEA3ufb%2Bp2by3Ch%2BI343IQeeNT8Z9W04OXanta%2BHuV31oAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFY3MAs2zWku6OL%2FxircA1KPxevt7oyGraw5s1wJ%2BSaoa%2FgWscVs%2BvRd00tudhOXw4ytQpme1vuzHl2OeaZLjCdPx1H8xUv%2BKEwD7RbMcscyK15g72NuWQCSgsPQJKxUP9bIf5aZqCspSNdnLeJanwjjEXj5nfh29NaTwu0vKgN7DlNeDYt1ZGBR9vanmXqVqutpz8kODjGxeEkPIfiR5OgBgIHbUuMkrqqPxhVdvARdHdVl2Ld2GH9qpJZhxuptlHJfFQF%2FloZ%2BwRqHY2lR%2BsAQyF6%2B1PtVe5v1YVCgHojMC0vz8Qxnddx1%2BzhST6eCux8JDkULsEHZP5eTaJxK%2FDxQjLHxRRlCnetqxJxS7svU9lXlEGFueXLP82aR%2BCmEXet%2FLBFCLcSXkGxJ7TRQlR%2BG1j4iazx9cJ3m0ZI2Ef%2BNlPJj4ezBeo9GcCiPc0v5aTCh3gxpprUDNKmcnNIeT24F4W60OD7ulIzv4ZeXXh2qn2k6qsyzRVsYhltUzbXYLWn6qeNaiNFS5FOb9sczWDx9ZHjhyR662u90%2BGCHvTGIJ6KejZs6upa4IV6DB6CNId5xct2P7e%2FhW%2BYMogaMPo%2B6BcDZNuh7FdTn79hxB574badwst%2B1Cug5rNdV3QNSW26xcZ72rsDzIPR8MMCUsNMGOqUBCFFquuSacv0IJq%2FZ6VoRZGJftdNFt05b3Ce%2B7MzHAMexdak3zBv1l9E3y6a%2FQNSHIGcihPKZXld2vlDPfSQN%2FLazdCnh4D638UBJpy7O30oqgCY4GggAOqFQRigoLxOAg67LJtw2Ggff31ZdyTtuIB%2B8bdUIR96go5gKpCBb6LnZwABKHT%2FLCGZ4ruDQTR3c4H1CqEVCpy7NooCuGGuqZ%2BL%2FxFd9&X-Amz-Signature=28a53a5c9eebd31d5e068e9236f8b7009783ed89a6b592c3e30e86e7bfb400dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGCALTP%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzRW%2BMFO%2BzWd1tBNf%2FQeRMoVJeWMtm13rR5zr0W%2BEN2QIgDD5FWVpMKncOfrMNodyfdE9fffuEc2qeBo6PknT69yUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDgIMjooMIzWbipVircAw3P3%2BiQIT%2FMzbJ2MCLb40R3UovCJD7AJ7DIVhSIUmDbnSc89P7lAHHEan6Trh0KZzkXIrx2RGfcBXlymE15zmI6sEHwhy2G1KMVlTlUOP5pZu04K6JmUWF6kSnRvd2taGXdiqLsEjEjnpNwCj%2BGxF%2FoyVymbzjQXnpp7SXhpAbfMavjSRS7QGUrVTJbXmcMsvPbsmVK4%2Fdr%2FTXhbMITsyK4kn6642qew1jmR1sT4fPl6tSYEvkqrtyBMnxS02c7B9BF1EklV7I30GWadGXMRt%2BlrqsqNpqfAhhnFUWnMy25XDqWY64bi97fkOcQumv6jbC1vXfiLt7yrxc1vLTAvFaWWGzAUDfZ3gjP%2BII8h%2B3EVEUagnWAjWrwGQGnftaPRnsExuxHSQXTA5O%2FBxY5Mvs%2BXB%2B7Gh%2FJrzuvknBq%2B5Rj6pVNetlzWu5F3esF5FUB0pBIV7R%2BJeZW0syaODvXNGbAIkklozr8EZsq5GWN%2Bn5IQQlh0yQwCHPk86V2CNg8SLmE1w08lAICSH1uGNLccLSeKEHpUshY76g86%2F%2BLWEkkT5nVGxbk6hRbnJdmEithliGex4vahrWr5VyqIs6W1uHM4677DBGf9cwLoflsWk9Gg59Gblx2vlfMEZkcMKSUsNMGOqUBg1jwkyGyqYT%2BVvrRYTEejbEhgFRbC5%2FciTUVw45%2BfmicSs6TTrQxIry7fT0wFgkr91ONXxsVV%2BCSjTO7L9FrR%2ByoNrrAkEaqp9K2aoV4Ny86cA8aszmR25ZwYzvJM1JeRYmEroyXJZJCOSoBCVavN9qIrxXeUNAaRGQx7HUTleBbpWBvE14oEdP1f1%2B7QPD%2B3mhRB5xOb7iK3r2pXu9XxgQuQr8i&X-Amz-Signature=480516880fca46c2f9c8c40dc2c7fd9b0f5eefd84e4ec48eed81e8fca596b0a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZAFI6Y%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAd4LPpeQnEei0w7jpqC3mO%2BBWwfhQDoJvkH4tKhlngAiEA3ufb%2Bp2by3Ch%2BI343IQeeNT8Z9W04OXanta%2BHuV31oAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFY3MAs2zWku6OL%2FxircA1KPxevt7oyGraw5s1wJ%2BSaoa%2FgWscVs%2BvRd00tudhOXw4ytQpme1vuzHl2OeaZLjCdPx1H8xUv%2BKEwD7RbMcscyK15g72NuWQCSgsPQJKxUP9bIf5aZqCspSNdnLeJanwjjEXj5nfh29NaTwu0vKgN7DlNeDYt1ZGBR9vanmXqVqutpz8kODjGxeEkPIfiR5OgBgIHbUuMkrqqPxhVdvARdHdVl2Ld2GH9qpJZhxuptlHJfFQF%2FloZ%2BwRqHY2lR%2BsAQyF6%2B1PtVe5v1YVCgHojMC0vz8Qxnddx1%2BzhST6eCux8JDkULsEHZP5eTaJxK%2FDxQjLHxRRlCnetqxJxS7svU9lXlEGFueXLP82aR%2BCmEXet%2FLBFCLcSXkGxJ7TRQlR%2BG1j4iazx9cJ3m0ZI2Ef%2BNlPJj4ezBeo9GcCiPc0v5aTCh3gxpprUDNKmcnNIeT24F4W60OD7ulIzv4ZeXXh2qn2k6qsyzRVsYhltUzbXYLWn6qeNaiNFS5FOb9sczWDx9ZHjhyR662u90%2BGCHvTGIJ6KejZs6upa4IV6DB6CNId5xct2P7e%2FhW%2BYMogaMPo%2B6BcDZNuh7FdTn79hxB574badwst%2B1Cug5rNdV3QNSW26xcZ72rsDzIPR8MMCUsNMGOqUBCFFquuSacv0IJq%2FZ6VoRZGJftdNFt05b3Ce%2B7MzHAMexdak3zBv1l9E3y6a%2FQNSHIGcihPKZXld2vlDPfSQN%2FLazdCnh4D638UBJpy7O30oqgCY4GggAOqFQRigoLxOAg67LJtw2Ggff31ZdyTtuIB%2B8bdUIR96go5gKpCBb6LnZwABKHT%2FLCGZ4ruDQTR3c4H1CqEVCpy7NooCuGGuqZ%2BL%2FxFd9&X-Amz-Signature=4ba72cf843ddd1479a0a5e0f948a3fc5bf5dca3d6584af1cb52d82cc6fc7d9c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GDJV465%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgU5eC0uGBeq%2FmTHHEW5Rg7G3CFWtuXoZAYLT1c2UIZAiBCtp2UFWOsExhvx%2BmttImQVmLUvz9cUTelREo3Xz4w4iqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOOivWtJeo5nE8LtUKtwDoMYm6%2BnBXDTlk3xxJ0NfLgtusF8YtJ2VkvDoF5Gr1XNeeu1HTYdp0ByraIvzjuE1vqx56lvt%2BvDvoLCdMgxeZJvMU5M8UHm48dnV7uzyTFppRPYq01kmUxnZgdk5D%2BoGgURvuuyD%2BhIM3MCRrRAliGAan3M%2BAn3HfXdqopOvvj3Z6ln5Ewljuw%2FgAUFdimzkuR73zD3GOB5ucLtfejYCPS25tF5p9ghZxpaibaZfwt8k88Y9GLPeQCBpFp78YwJE07SBRaHZPVwXkvZOBQPw79JsijeIN53ylqACZoDSgjUvdT%2FtuhKLed6zHS3Yz1Xpp%2FbU99AKXJZTCMjBMeFRmFBmfwdCtBF%2FMcg9Tpy4gtxGHYnbhaICbZALjbrTdg9K9pmpxfsJtxvKYCMme2lxptgbkF4D7TtAoupyMGJN5G4lHR0PMuVu2As4%2BDVDwVuFe7ViMpsDZFe0MLLhveLW%2BrE467eb%2BNaeVSvvKe87dpzm8W9DbkTMuWvAj04HMkVnmAq8ypHpQ5J2c0vWGw4ScJBAFOlJN1MmFkCBlgVILDC8NmvJBcEknRa0l1i5%2FENdjsdNx2X5E%2FHYj6hpvKUEympNv0KhaqJzhm1CFUVS4KoBt%2FIAGrDBofxA6UMw6pSw0wY6pgEjL0ehPDapM1RkKwzlQ%2BlNE4BvbWz3nRc9E9GAyH2tzAfAL5NkDPBhYRQZ%2BtLqkOE7eSbQGXzaR9vpO7Q3UaXlb3k69f6e%2FZ02nbopdRtV%2FcI1B%2FINPtIsbtodPHoj%2BtbXy42JSeMCHbRQFVteTZCh6qgGE3k47YwZWIxxwdsErLIW81Jh0jwQODiikh0B%2Frti3xDwbA36gE%2BPZ680QP049BNonUgJ&X-Amz-Signature=950c7e7975f2986dfb058280a5fa37f7cd4b05a8229727e597bce93db70275f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZAFI6Y%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAd4LPpeQnEei0w7jpqC3mO%2BBWwfhQDoJvkH4tKhlngAiEA3ufb%2Bp2by3Ch%2BI343IQeeNT8Z9W04OXanta%2BHuV31oAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFY3MAs2zWku6OL%2FxircA1KPxevt7oyGraw5s1wJ%2BSaoa%2FgWscVs%2BvRd00tudhOXw4ytQpme1vuzHl2OeaZLjCdPx1H8xUv%2BKEwD7RbMcscyK15g72NuWQCSgsPQJKxUP9bIf5aZqCspSNdnLeJanwjjEXj5nfh29NaTwu0vKgN7DlNeDYt1ZGBR9vanmXqVqutpz8kODjGxeEkPIfiR5OgBgIHbUuMkrqqPxhVdvARdHdVl2Ld2GH9qpJZhxuptlHJfFQF%2FloZ%2BwRqHY2lR%2BsAQyF6%2B1PtVe5v1YVCgHojMC0vz8Qxnddx1%2BzhST6eCux8JDkULsEHZP5eTaJxK%2FDxQjLHxRRlCnetqxJxS7svU9lXlEGFueXLP82aR%2BCmEXet%2FLBFCLcSXkGxJ7TRQlR%2BG1j4iazx9cJ3m0ZI2Ef%2BNlPJj4ezBeo9GcCiPc0v5aTCh3gxpprUDNKmcnNIeT24F4W60OD7ulIzv4ZeXXh2qn2k6qsyzRVsYhltUzbXYLWn6qeNaiNFS5FOb9sczWDx9ZHjhyR662u90%2BGCHvTGIJ6KejZs6upa4IV6DB6CNId5xct2P7e%2FhW%2BYMogaMPo%2B6BcDZNuh7FdTn79hxB574badwst%2B1Cug5rNdV3QNSW26xcZ72rsDzIPR8MMCUsNMGOqUBCFFquuSacv0IJq%2FZ6VoRZGJftdNFt05b3Ce%2B7MzHAMexdak3zBv1l9E3y6a%2FQNSHIGcihPKZXld2vlDPfSQN%2FLazdCnh4D638UBJpy7O30oqgCY4GggAOqFQRigoLxOAg67LJtw2Ggff31ZdyTtuIB%2B8bdUIR96go5gKpCBb6LnZwABKHT%2FLCGZ4ruDQTR3c4H1CqEVCpy7NooCuGGuqZ%2BL%2FxFd9&X-Amz-Signature=83e71e71eee092c5199ce66d58e664bede698eb08f879d4c30ce16bb5a4036c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3OVNXHK%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKP0AHmsBKxzCuyh5VY6MBV%2Bh%2FPs17bEKcrfBzSdAvAAiEA0CkxgAtXdwBiL37SPXa5mU8QtigLLk38DaI5TL57fAYqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCB9UmDqXozHEoX%2B0SrcA%2BEfiSlXMdg%2F4yMx2P7dNoWnaIXoTp%2Fx4jywP8bCLSKE%2FY1qSWgKxc6YWRakXCapG7mw%2FDzPJPT9M0ayYLlKFQvCvr%2BnW9HavN3MYmGidZzb2xkK6atV%2BnxZLAIzq0RNqiIely5Q8yTr0ZhGzurYNvoW9isEpa85o85pBgEWabtNVNDXcTjnNlLGsbRtYRqUpua0WmbZDJy%2Fmb7UhHUkysVdIBEUPckIovYKlivC%2FHeMCt2%2F6X%2BgAwNJMZnP1LJTEe27EIVTcG1KiZoH7MboR%2BuMUXX0I%2FnGvbI45iXIRx09KyzGYvMFem6SolbTXdNF5EMHf%2Bsk4Ze%2FE%2B%2FCQrlk6p9w0Xjuy%2B3DmSTZ0G6UqyUVrVJLQZ0by8EnlLHP3fGmIL9aQ9nCDsdgUCYcxIdnkjMlTmTwg8fgeOkZ%2BbcQQXvpdBGVOgPhO93%2FqRv98CaMTPFoN%2F%2ByJwPdB8DddlY%2B%2BcoI%2B0oiIyZM8Hdk9dYbhItBCHRY4ZBMidEsfLzz89O8tcZVE6xAEAiiCO2iHZmTe8vM4I0NDOv89TIfqqWfBwtNK4QCDkpbfYYVrlolljnAYPWBADiKVMYCNceVKZ4uSrvZyV0mP2TZOCA02XC%2B9sBzdJ7%2FCmyOrC6jm0lzMPmTsNMGOqUBxUCucTVtl6BMcWOM4x96Blo2kSeF3ecWX21N3ShJ6gHamuZpExQsPqq6Z64VRypCqs5Grycm5BnrwscUBetRD9us%2F64DjDcded1QiuhhMPMGWTxIVsTpn64CaW398okT%2BawpENf0A3fGZbILXw6o7LLCnM3xJwcp%2Fd1gDMQKoqSQPi9EqaVRH80uIyX6OscKt%2Bc0mNd8YCgpjnHVluJLxkwFwzey&X-Amz-Signature=013464157a05e08e4ff92a279f58e1587c287d4d5310ec8cae28b8c1fd537f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZAFI6Y%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAd4LPpeQnEei0w7jpqC3mO%2BBWwfhQDoJvkH4tKhlngAiEA3ufb%2Bp2by3Ch%2BI343IQeeNT8Z9W04OXanta%2BHuV31oAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFY3MAs2zWku6OL%2FxircA1KPxevt7oyGraw5s1wJ%2BSaoa%2FgWscVs%2BvRd00tudhOXw4ytQpme1vuzHl2OeaZLjCdPx1H8xUv%2BKEwD7RbMcscyK15g72NuWQCSgsPQJKxUP9bIf5aZqCspSNdnLeJanwjjEXj5nfh29NaTwu0vKgN7DlNeDYt1ZGBR9vanmXqVqutpz8kODjGxeEkPIfiR5OgBgIHbUuMkrqqPxhVdvARdHdVl2Ld2GH9qpJZhxuptlHJfFQF%2FloZ%2BwRqHY2lR%2BsAQyF6%2B1PtVe5v1YVCgHojMC0vz8Qxnddx1%2BzhST6eCux8JDkULsEHZP5eTaJxK%2FDxQjLHxRRlCnetqxJxS7svU9lXlEGFueXLP82aR%2BCmEXet%2FLBFCLcSXkGxJ7TRQlR%2BG1j4iazx9cJ3m0ZI2Ef%2BNlPJj4ezBeo9GcCiPc0v5aTCh3gxpprUDNKmcnNIeT24F4W60OD7ulIzv4ZeXXh2qn2k6qsyzRVsYhltUzbXYLWn6qeNaiNFS5FOb9sczWDx9ZHjhyR662u90%2BGCHvTGIJ6KejZs6upa4IV6DB6CNId5xct2P7e%2FhW%2BYMogaMPo%2B6BcDZNuh7FdTn79hxB574badwst%2B1Cug5rNdV3QNSW26xcZ72rsDzIPR8MMCUsNMGOqUBCFFquuSacv0IJq%2FZ6VoRZGJftdNFt05b3Ce%2B7MzHAMexdak3zBv1l9E3y6a%2FQNSHIGcihPKZXld2vlDPfSQN%2FLazdCnh4D638UBJpy7O30oqgCY4GggAOqFQRigoLxOAg67LJtw2Ggff31ZdyTtuIB%2B8bdUIR96go5gKpCBb6LnZwABKHT%2FLCGZ4ruDQTR3c4H1CqEVCpy7NooCuGGuqZ%2BL%2FxFd9&X-Amz-Signature=22b4c4c749fbbddbaf661d172d79b19d98ab514613736cfe248a8c4e854b641b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667W7O4XQ%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd4wN0%2FBauo6ocsTBaOsb83zg81qIrX7RO3dLRHo63bgIgGuLrSkX63yz58hfPFdu9HZDATe%2B44FTE1w1CTlmpaWgqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJ5Qh0tl688Y04qlircAwf9tgivy5XqmFbLrs7MhyDeEuTn11F4y1Dq30Xu6O9zcQtenSXXMqFYpR3NHhuTgXna2Le4Btb%2BTFdSFX%2B%2FvDjrmIZcbbS9Ou8eN2%2BiRhq3J2BpJBgY8KMVTfr1fIflMCCjBEb%2F88L4zQQi3kIkzGY3B2lDck5WE9QPwAXOPvO265mFSmGVtXyawS%2F1ZI2Q2Nusn%2Fp1Bvl6krlEhBYwYPU4fjALKXyoJYijoNO%2FxipyfXT80hz6pE7vzaQjJ9X8opF%2FaRzX5Y3yzjZm83GKdouFwr0BWKYr8jODV2rkpfLaG7ZH%2FTD%2BGThM81je%2B21YiiPVMF9U75TiEhFyZ8MZYYpdu0vXQ%2BG5MIdVVC%2BcoziKKo2FheqRT87TwXTqVSFi67Lqg9JjfiJiElB0McMRAJLqhsZh9Btag802Vy7V0xuMvhZMNGPlhFqA05a5pi8w1OQr%2FUkTasLseWoY9EWBgj6bY2nuqIDxdhyj85aByBHwqcUi59fSBRdBDxb%2BaQrZX3n4nH72YNXRww9lgkNiUL3U%2BWANjp%2FUFVS%2Faz%2BIv7sniUQgjhx%2BA%2Fe%2BhUS%2FaTi7tLb%2BLPMMUqBBnX8rX1rT2E8E4welNU8%2FGF6NNnU2l3wT5FB136TmYy2LGuJYMPeWsNMGOqUBVQfbDQxOzA6HcbVuGDzFvEfx5zT4%2B7Z5lxec7rHUdUb0CPfcMxTcnhiDn8akulHjJgzSONy765e30YQD56PKbix7xiupS8%2BhNJlbqv3dGsxFM%2F%2BYE2VtnBl1%2B54PI%2BTBR4cdkzc%2FiINdZJPF%2BTxLRV4US7yUL8rcHA%2B%2FQvOwwNcUEiyb0VSy7WeOiCirBv6R74KcYgcOQUeAck1a%2FtXa6zPEiYfr&X-Amz-Signature=64fa8af8ceedd34cdd1811f05c756e7a8fb5fef2ce9ea2139cfa80f183c62b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZAFI6Y%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAd4LPpeQnEei0w7jpqC3mO%2BBWwfhQDoJvkH4tKhlngAiEA3ufb%2Bp2by3Ch%2BI343IQeeNT8Z9W04OXanta%2BHuV31oAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFY3MAs2zWku6OL%2FxircA1KPxevt7oyGraw5s1wJ%2BSaoa%2FgWscVs%2BvRd00tudhOXw4ytQpme1vuzHl2OeaZLjCdPx1H8xUv%2BKEwD7RbMcscyK15g72NuWQCSgsPQJKxUP9bIf5aZqCspSNdnLeJanwjjEXj5nfh29NaTwu0vKgN7DlNeDYt1ZGBR9vanmXqVqutpz8kODjGxeEkPIfiR5OgBgIHbUuMkrqqPxhVdvARdHdVl2Ld2GH9qpJZhxuptlHJfFQF%2FloZ%2BwRqHY2lR%2BsAQyF6%2B1PtVe5v1YVCgHojMC0vz8Qxnddx1%2BzhST6eCux8JDkULsEHZP5eTaJxK%2FDxQjLHxRRlCnetqxJxS7svU9lXlEGFueXLP82aR%2BCmEXet%2FLBFCLcSXkGxJ7TRQlR%2BG1j4iazx9cJ3m0ZI2Ef%2BNlPJj4ezBeo9GcCiPc0v5aTCh3gxpprUDNKmcnNIeT24F4W60OD7ulIzv4ZeXXh2qn2k6qsyzRVsYhltUzbXYLWn6qeNaiNFS5FOb9sczWDx9ZHjhyR662u90%2BGCHvTGIJ6KejZs6upa4IV6DB6CNId5xct2P7e%2FhW%2BYMogaMPo%2B6BcDZNuh7FdTn79hxB574badwst%2B1Cug5rNdV3QNSW26xcZ72rsDzIPR8MMCUsNMGOqUBCFFquuSacv0IJq%2FZ6VoRZGJftdNFt05b3Ce%2B7MzHAMexdak3zBv1l9E3y6a%2FQNSHIGcihPKZXld2vlDPfSQN%2FLazdCnh4D638UBJpy7O30oqgCY4GggAOqFQRigoLxOAg67LJtw2Ggff31ZdyTtuIB%2B8bdUIR96go5gKpCBb6LnZwABKHT%2FLCGZ4ruDQTR3c4H1CqEVCpy7NooCuGGuqZ%2BL%2FxFd9&X-Amz-Signature=9f3f82e7c57349befcec9e621b56a86dbb675f7516b884f9426b6b3e54378219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W63UWQS7%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOCMI8JB3XVblKDtONiTBqBPg9CDnfPnhPYeHKAbcD%2BAIhAImuxXYRJiixyUpQRlBukIcvN%2FfrRQxNYYW5Cl%2BQntEUKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTBh0KjTT%2FMJHoXWgq3ANPr%2FnyvIuY6hIzFyhQEYlBQIrnXf6S6HccG30lNJh7QOlsbmIhUiYmgMN%2FUcbsjCIWA7JM5r%2BeWnACeEffsItMtzA%2FpsgDnWd0T%2FwWkcCJqLucf5iE9l%2BRDMTEHfhDrPiOnzJhFEUM2JCtsi5%2BIeGfVc6zKEN11EYeqjLFqQSlSn%2FnvGlt3ZnYfoS1ZDedl0%2BT1E85%2FPmyA9FpF%2BfnOg9I%2F4y8RXiWOZu4QL0n9NOlKy3KTHU5HAU%2B4xJCzRs%2BjROV5vrb%2BIdzqFr7ZAPvEeeWb5WaTriKSrUntuDpdneVvO7bJZ8dYEXQnK0Rk3U%2FlZG%2Biu3VmJe5dHoPi13rjzJnic%2BJabwgdpmghLYkU%2F%2FcZIw6CEcF3pKF3MMnPIhrzvLfrfgp180uZXqjgVkAVYfgSQwrQx5WLTfyRwhEl096HPpYgGcj0ifxYs73YqRk4xPhKNSv6f4Amg0ziF%2B%2FDwpuYtvzQh9VJWLE%2FgXTMk26rFsU%2FDdSsXvOCtA98KAbPrO0qrSz2Q2O9WFgiRNwDmymLzy%2FbukP6X0vap4dHtJBGFkSfLtkWIHbvZcy2xZSOazXLHrd%2BlUmxuZCFGjPN17GbdqZv%2FlozJ%2FXwn69tz1iRE6iFRwJO1XtZFRkmjDSl7DTBjqkASv90uj%2BGT7foH%2BuckhXY6EAkoWyIGP0uKRIcSmCw6G4G1h%2Fseb3MNy%2FDkhZbQX%2BQH41i448WiPgFFmagUDMcNbUKUAPnI%2BOEwW%2F6gCFYfsu6pkQOTFJLgwaVlCWj6k6sNfv6ROE8JkRN8xkXj2TzB%2BvXH%2B%2FnpfHwuI3Z5fgjfDZHd7FIehP11NAk7W96N2BQM91ZEyWujfHCXAW7Kn1jZUsbaGM&X-Amz-Signature=fcaf006a5e96d380885e09fd5955b47edb0f1f121e96aa2bea1dabd8f5db0ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AVG3JUS%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRfp6tmyocE4wQAiybHvzN2q02oyFwxP7CAmRPscobOQIhAIIlc6WoROnLG366OnV%2FkZiA11%2BFXVq4GSph3OWHmYl8KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNOmcyGA2Q%2Bp0jdYYq3APIY%2FNEhWN1C%2BmvqQBQgKjQSZsh3hd71pFxiY55CWDU1Qb4UOVo4odwkng%2FZL2IdRcQdrMOlDiCZfSf0CdzPoRBUFjeaF8g01s8dTxhNH4tjw1df1xb4K6LSzENYhMlIXsZDe41kRF70GEE%2B%2BKV%2BKtEd45ZKvVbwPYbhqBMfEyg8dlPNcTtmwCpOJsE%2FOSG2upXM5PjqxI78qh%2F82kyHPq8M3RBcGu8Qztf7SgPLzRNhJonfurjrwVXO6QJEiWsfB49dqOXIHeLss2PujnEUJJZvCR1yRgQLuHD%2BgAMPh6bBjAlpVe0XgA02WKslHh9P9R4VRs2Ja0PmMRjkkEcjDMfqQunQ1cggIW4npvH4UQw3FDxEWginsABpDarwewoaq2yab0YEMM%2Frq5GozEVQLDh5TBQ9J%2FWtEykPvqoJTAQGEy6QI6%2BNacdD0NafKweRrU7IR17450l0cjY6st8Wln%2BqTew4AvyrKrGMONVuqC7%2F0oJamudBUOCfxLTU8cHJZTPTyblMMNq9jo%2BO7weOL9%2BxRrti1%2FEFozTajmnAwmv1uaHFzTtpv4cfrikVMxRusZ5ZJUtvotfirN0ooQgqw5tPuTGWVSLDCuTlk2hMjgq5CyZ2uf4Nm0jr3NnUDDRlLDTBjqkAciuu9Fbm2ymu5aI%2BH2pI2z1GZVyHin3XQna5eBtK3Zcgie0MqE71AFx4K1UvrWrl8PyNzG4wjeBVVXvT4y02l03opASfN26OElp7W9CWy0oEZqxc9vV5mSHhTaodFmtTT%2BWkROx%2BwrApjslVlfeBayHTdqLLelXKuF24SC9dy9CqE8TghM94U4cKjZwX2Bb9reGg45C4W9xzGNfNIte9d251Pb%2B&X-Amz-Signature=03605f3d6ec6bd685969d05f03ad6e1e0729e02fdf5edec7429d3db20efc0704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE2CEJBB%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfzcYSPvOdp10UnAihDqmT1xJ6LT1Tmc09%2BUwMoMjkfQIhAL7b1Kw8EFMy6nYX1Vn7%2F6LXyUuA%2BbfRaFqH%2B3hj5cvBKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcVHMIGcNc5gYCVZAq3AM2cMFR37W1jNbVavfviily12Q9Qagdnta8ffo1cY8YNDsbxxYJ4MHngV2uLHV9J0Lwujbq5myUyE1X3eFwfmQK%2FIP%2BbXHPhhOVGlozo2HN6VNRVS3HWAZRsDifjaU%2B9F1OJFpvemBVkzcW5cVouzmHEZPXLm1BWJC8FF7nrFrOpO7VXGkkwdXlYYXH4tbrxrOtkgx3o0KeyNdfZphQE8aPH2mORtok5dFfhukLN7qd62lFbR0yF8AHZSdn%2Bh0svxAKn2mBi01sXLunQQIoYFiSWfqKrGBL4teq2q6x53QSGEI4Yw7DeWHOzyoF73A%2FKgveXaHCZX3769yqF%2Fc1%2F1jGzDH4%2BuuBDrXUvuzQKRk%2BDnKfwwgJxFkwnSXBm0hxd38wGfcCSgELVxvEWrG2QokiuJh5IRa%2BG%2FsUYPuYE80psWMqduozEtnjaSXVuvE2n%2BU6ASeUnWU3s7h2elPJ3rQLFFDMpRGXDMCZ7zvgyJEO1YUyPntvJRvBFuCAz%2F%2B%2BcvQomBWcXG0SwDFQ22F69Hxj794D%2Bp0UeatcCaISyWFR4Jix1Sd7gprrVA2%2B%2F6ynxL0KM3XX7k%2FurYsUrCppMj9TxZj9KyqWJXKpQ%2FRQ5GXGlx2%2BfWy2DeDa9HggwDD3k7DTBjqkAXlOLQO0EtDW7nYp61Tjt1aM2bKn0uRbb1Xbj9%2BSC6lp0feCTyf7dDd3eW3aTU7%2BKp6Emb745pbCdnXkXKExehtEj7WMQ00zLB4WWYnKjBtljcSfHoOyqaWlhnOjHVMlwjJ1XLp2xZwmrVtoFZys6a7q%2FqxkO94DxUO3HOC45%2B0uEu8bIay7aapfcWgscfwC0yxz3qzuFqca2Oc4t2MOXLefnx5C&X-Amz-Signature=f22f93f153ec220a0118fa5818774bd71363e7f5869882d11bda8ded74d1c637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZAFI6Y%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAd4LPpeQnEei0w7jpqC3mO%2BBWwfhQDoJvkH4tKhlngAiEA3ufb%2Bp2by3Ch%2BI343IQeeNT8Z9W04OXanta%2BHuV31oAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFY3MAs2zWku6OL%2FxircA1KPxevt7oyGraw5s1wJ%2BSaoa%2FgWscVs%2BvRd00tudhOXw4ytQpme1vuzHl2OeaZLjCdPx1H8xUv%2BKEwD7RbMcscyK15g72NuWQCSgsPQJKxUP9bIf5aZqCspSNdnLeJanwjjEXj5nfh29NaTwu0vKgN7DlNeDYt1ZGBR9vanmXqVqutpz8kODjGxeEkPIfiR5OgBgIHbUuMkrqqPxhVdvARdHdVl2Ld2GH9qpJZhxuptlHJfFQF%2FloZ%2BwRqHY2lR%2BsAQyF6%2B1PtVe5v1YVCgHojMC0vz8Qxnddx1%2BzhST6eCux8JDkULsEHZP5eTaJxK%2FDxQjLHxRRlCnetqxJxS7svU9lXlEGFueXLP82aR%2BCmEXet%2FLBFCLcSXkGxJ7TRQlR%2BG1j4iazx9cJ3m0ZI2Ef%2BNlPJj4ezBeo9GcCiPc0v5aTCh3gxpprUDNKmcnNIeT24F4W60OD7ulIzv4ZeXXh2qn2k6qsyzRVsYhltUzbXYLWn6qeNaiNFS5FOb9sczWDx9ZHjhyR662u90%2BGCHvTGIJ6KejZs6upa4IV6DB6CNId5xct2P7e%2FhW%2BYMogaMPo%2B6BcDZNuh7FdTn79hxB574badwst%2B1Cug5rNdV3QNSW26xcZ72rsDzIPR8MMCUsNMGOqUBCFFquuSacv0IJq%2FZ6VoRZGJftdNFt05b3Ce%2B7MzHAMexdak3zBv1l9E3y6a%2FQNSHIGcihPKZXld2vlDPfSQN%2FLazdCnh4D638UBJpy7O30oqgCY4GggAOqFQRigoLxOAg67LJtw2Ggff31ZdyTtuIB%2B8bdUIR96go5gKpCBb6LnZwABKHT%2FLCGZ4ruDQTR3c4H1CqEVCpy7NooCuGGuqZ%2BL%2FxFd9&X-Amz-Signature=c45b9c4aac7c2cbe24c4a209fe50ee1cf770388ed67187e66709014ea13bdb0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZAFI6Y%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAd4LPpeQnEei0w7jpqC3mO%2BBWwfhQDoJvkH4tKhlngAiEA3ufb%2Bp2by3Ch%2BI343IQeeNT8Z9W04OXanta%2BHuV31oAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFY3MAs2zWku6OL%2FxircA1KPxevt7oyGraw5s1wJ%2BSaoa%2FgWscVs%2BvRd00tudhOXw4ytQpme1vuzHl2OeaZLjCdPx1H8xUv%2BKEwD7RbMcscyK15g72NuWQCSgsPQJKxUP9bIf5aZqCspSNdnLeJanwjjEXj5nfh29NaTwu0vKgN7DlNeDYt1ZGBR9vanmXqVqutpz8kODjGxeEkPIfiR5OgBgIHbUuMkrqqPxhVdvARdHdVl2Ld2GH9qpJZhxuptlHJfFQF%2FloZ%2BwRqHY2lR%2BsAQyF6%2B1PtVe5v1YVCgHojMC0vz8Qxnddx1%2BzhST6eCux8JDkULsEHZP5eTaJxK%2FDxQjLHxRRlCnetqxJxS7svU9lXlEGFueXLP82aR%2BCmEXet%2FLBFCLcSXkGxJ7TRQlR%2BG1j4iazx9cJ3m0ZI2Ef%2BNlPJj4ezBeo9GcCiPc0v5aTCh3gxpprUDNKmcnNIeT24F4W60OD7ulIzv4ZeXXh2qn2k6qsyzRVsYhltUzbXYLWn6qeNaiNFS5FOb9sczWDx9ZHjhyR662u90%2BGCHvTGIJ6KejZs6upa4IV6DB6CNId5xct2P7e%2FhW%2BYMogaMPo%2B6BcDZNuh7FdTn79hxB574badwst%2B1Cug5rNdV3QNSW26xcZ72rsDzIPR8MMCUsNMGOqUBCFFquuSacv0IJq%2FZ6VoRZGJftdNFt05b3Ce%2B7MzHAMexdak3zBv1l9E3y6a%2FQNSHIGcihPKZXld2vlDPfSQN%2FLazdCnh4D638UBJpy7O30oqgCY4GggAOqFQRigoLxOAg67LJtw2Ggff31ZdyTtuIB%2B8bdUIR96go5gKpCBb6LnZwABKHT%2FLCGZ4ruDQTR3c4H1CqEVCpy7NooCuGGuqZ%2BL%2FxFd9&X-Amz-Signature=aa8cfefe332ee4a1b68c999b1efdc50886269ada620b5d6a952136d6ad647789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YRFFRQG%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd9OWPcqu7Nre%2B7uWQ%2FpeZnQ%2BXcSFGdvKMVwZCxTRktAiAFYCtLL%2FnsVqcMbrNnZ0xlxICWt4sGfO%2Bj1pji%2BzfffCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYc5LxJs4qx%2F%2BCGuKtwD6arHWJD5nFSNiMPViG4sEXD%2FMlaAUkm8G3pYHYYD%2BUCeeuEPk9Od%2FwIkgSnbgCJDiQX8s2Ergvuz5fo7HsuES2FuxVTVoREkZuwkU6SgbrHwBoPqJXYyQkTMhrGr6myqad9WE4ArW3PaRTxKX%2F9JnA%2FVK2JoSzEva%2B9v1RHkDLbmEnjIwb54P%2FVTDbfGhwsyiu%2BSDIWmBU6raxA%2FGB02tXPuZ7%2F5KYS68AuOAL6Rv5i4Gnoqhy%2FAaLu89%2FLnYygXcNXMqTKejonpejEMBia%2Bb0f4kXjCJt53KRpPiRggpjpD3R%2BWBKXh1UPXIKdFlgkTLODGD5fc839kyNJF0mqXhMsJcnf96KKzukHT0kF%2F%2Bskb10q0VLuk4GHTFNZl8ZSHmci2qGZ%2BUoHEjoufTPAm%2BiZQoDCO89H4xn8rEeI3QZS0s6MgqjG7FkGkt9wSdN3HU1vJ9%2FM0rv1mbVTegB1EHSiWc2DVZ8t1F%2ByPX7CsL%2B0ZxAE6PjmpEdIadhj9%2BU%2BqhRRl4MACDDKK2SGtMwUm5WHB44ZCTpnEhC3mNIyrNTHO%2Bwcpytpp2H4jfEQ%2BW7ukhw5DVZu3O1i%2B%2B10lk6v%2B34BW4tB57JVU5Y7YvjMKBxALBRWFwG%2FaSbK%2Bdxkwnpew0wY6pgFUqa1nlVd4I886k65n3Y4PW8afYBPOAZQF26X5fixsIggtEramvFi3b0CDYTXM%2F8mJ8gi0LAxAw22%2FXH7c3E93%2BKus55hMnVR3%2BA2Wy89SP5pbpzamfx6ATGTy5p0HeUKmyaE8%2Fnc2pb2JK%2BDB2uqeDIR%2F5%2BNdLt4CNdBRu3wf6acgCI86y%2FOiQnj%2BeZtawwSxxT%2FHqDh%2BcYA2rZIXWzL6Jt4zcBsd&X-Amz-Signature=046d1374ce319920f2fbb0a53f2c9697626d9a7c37e3843ae1a5b8830404a5fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YRFFRQG%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd9OWPcqu7Nre%2B7uWQ%2FpeZnQ%2BXcSFGdvKMVwZCxTRktAiAFYCtLL%2FnsVqcMbrNnZ0xlxICWt4sGfO%2Bj1pji%2BzfffCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYc5LxJs4qx%2F%2BCGuKtwD6arHWJD5nFSNiMPViG4sEXD%2FMlaAUkm8G3pYHYYD%2BUCeeuEPk9Od%2FwIkgSnbgCJDiQX8s2Ergvuz5fo7HsuES2FuxVTVoREkZuwkU6SgbrHwBoPqJXYyQkTMhrGr6myqad9WE4ArW3PaRTxKX%2F9JnA%2FVK2JoSzEva%2B9v1RHkDLbmEnjIwb54P%2FVTDbfGhwsyiu%2BSDIWmBU6raxA%2FGB02tXPuZ7%2F5KYS68AuOAL6Rv5i4Gnoqhy%2FAaLu89%2FLnYygXcNXMqTKejonpejEMBia%2Bb0f4kXjCJt53KRpPiRggpjpD3R%2BWBKXh1UPXIKdFlgkTLODGD5fc839kyNJF0mqXhMsJcnf96KKzukHT0kF%2F%2Bskb10q0VLuk4GHTFNZl8ZSHmci2qGZ%2BUoHEjoufTPAm%2BiZQoDCO89H4xn8rEeI3QZS0s6MgqjG7FkGkt9wSdN3HU1vJ9%2FM0rv1mbVTegB1EHSiWc2DVZ8t1F%2ByPX7CsL%2B0ZxAE6PjmpEdIadhj9%2BU%2BqhRRl4MACDDKK2SGtMwUm5WHB44ZCTpnEhC3mNIyrNTHO%2Bwcpytpp2H4jfEQ%2BW7ukhw5DVZu3O1i%2B%2B10lk6v%2B34BW4tB57JVU5Y7YvjMKBxALBRWFwG%2FaSbK%2Bdxkwnpew0wY6pgFUqa1nlVd4I886k65n3Y4PW8afYBPOAZQF26X5fixsIggtEramvFi3b0CDYTXM%2F8mJ8gi0LAxAw22%2FXH7c3E93%2BKus55hMnVR3%2BA2Wy89SP5pbpzamfx6ATGTy5p0HeUKmyaE8%2Fnc2pb2JK%2BDB2uqeDIR%2F5%2BNdLt4CNdBRu3wf6acgCI86y%2FOiQnj%2BeZtawwSxxT%2FHqDh%2BcYA2rZIXWzL6Jt4zcBsd&X-Amz-Signature=e012fefb7aae70f037433668dd8a86e24386e7397fff4cf2ebec0709d5725945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YRFFRQG%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd9OWPcqu7Nre%2B7uWQ%2FpeZnQ%2BXcSFGdvKMVwZCxTRktAiAFYCtLL%2FnsVqcMbrNnZ0xlxICWt4sGfO%2Bj1pji%2BzfffCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYc5LxJs4qx%2F%2BCGuKtwD6arHWJD5nFSNiMPViG4sEXD%2FMlaAUkm8G3pYHYYD%2BUCeeuEPk9Od%2FwIkgSnbgCJDiQX8s2Ergvuz5fo7HsuES2FuxVTVoREkZuwkU6SgbrHwBoPqJXYyQkTMhrGr6myqad9WE4ArW3PaRTxKX%2F9JnA%2FVK2JoSzEva%2B9v1RHkDLbmEnjIwb54P%2FVTDbfGhwsyiu%2BSDIWmBU6raxA%2FGB02tXPuZ7%2F5KYS68AuOAL6Rv5i4Gnoqhy%2FAaLu89%2FLnYygXcNXMqTKejonpejEMBia%2Bb0f4kXjCJt53KRpPiRggpjpD3R%2BWBKXh1UPXIKdFlgkTLODGD5fc839kyNJF0mqXhMsJcnf96KKzukHT0kF%2F%2Bskb10q0VLuk4GHTFNZl8ZSHmci2qGZ%2BUoHEjoufTPAm%2BiZQoDCO89H4xn8rEeI3QZS0s6MgqjG7FkGkt9wSdN3HU1vJ9%2FM0rv1mbVTegB1EHSiWc2DVZ8t1F%2ByPX7CsL%2B0ZxAE6PjmpEdIadhj9%2BU%2BqhRRl4MACDDKK2SGtMwUm5WHB44ZCTpnEhC3mNIyrNTHO%2Bwcpytpp2H4jfEQ%2BW7ukhw5DVZu3O1i%2B%2B10lk6v%2B34BW4tB57JVU5Y7YvjMKBxALBRWFwG%2FaSbK%2Bdxkwnpew0wY6pgFUqa1nlVd4I886k65n3Y4PW8afYBPOAZQF26X5fixsIggtEramvFi3b0CDYTXM%2F8mJ8gi0LAxAw22%2FXH7c3E93%2BKus55hMnVR3%2BA2Wy89SP5pbpzamfx6ATGTy5p0HeUKmyaE8%2Fnc2pb2JK%2BDB2uqeDIR%2F5%2BNdLt4CNdBRu3wf6acgCI86y%2FOiQnj%2BeZtawwSxxT%2FHqDh%2BcYA2rZIXWzL6Jt4zcBsd&X-Amz-Signature=092b08f9a5cfbb59e4b074de9b575556497164be3c1efd695945c649f47d2c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YRFFRQG%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd9OWPcqu7Nre%2B7uWQ%2FpeZnQ%2BXcSFGdvKMVwZCxTRktAiAFYCtLL%2FnsVqcMbrNnZ0xlxICWt4sGfO%2Bj1pji%2BzfffCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYc5LxJs4qx%2F%2BCGuKtwD6arHWJD5nFSNiMPViG4sEXD%2FMlaAUkm8G3pYHYYD%2BUCeeuEPk9Od%2FwIkgSnbgCJDiQX8s2Ergvuz5fo7HsuES2FuxVTVoREkZuwkU6SgbrHwBoPqJXYyQkTMhrGr6myqad9WE4ArW3PaRTxKX%2F9JnA%2FVK2JoSzEva%2B9v1RHkDLbmEnjIwb54P%2FVTDbfGhwsyiu%2BSDIWmBU6raxA%2FGB02tXPuZ7%2F5KYS68AuOAL6Rv5i4Gnoqhy%2FAaLu89%2FLnYygXcNXMqTKejonpejEMBia%2Bb0f4kXjCJt53KRpPiRggpjpD3R%2BWBKXh1UPXIKdFlgkTLODGD5fc839kyNJF0mqXhMsJcnf96KKzukHT0kF%2F%2Bskb10q0VLuk4GHTFNZl8ZSHmci2qGZ%2BUoHEjoufTPAm%2BiZQoDCO89H4xn8rEeI3QZS0s6MgqjG7FkGkt9wSdN3HU1vJ9%2FM0rv1mbVTegB1EHSiWc2DVZ8t1F%2ByPX7CsL%2B0ZxAE6PjmpEdIadhj9%2BU%2BqhRRl4MACDDKK2SGtMwUm5WHB44ZCTpnEhC3mNIyrNTHO%2Bwcpytpp2H4jfEQ%2BW7ukhw5DVZu3O1i%2B%2B10lk6v%2B34BW4tB57JVU5Y7YvjMKBxALBRWFwG%2FaSbK%2Bdxkwnpew0wY6pgFUqa1nlVd4I886k65n3Y4PW8afYBPOAZQF26X5fixsIggtEramvFi3b0CDYTXM%2F8mJ8gi0LAxAw22%2FXH7c3E93%2BKus55hMnVR3%2BA2Wy89SP5pbpzamfx6ATGTy5p0HeUKmyaE8%2Fnc2pb2JK%2BDB2uqeDIR%2F5%2BNdLt4CNdBRu3wf6acgCI86y%2FOiQnj%2BeZtawwSxxT%2FHqDh%2BcYA2rZIXWzL6Jt4zcBsd&X-Amz-Signature=b9bf4ec014cc8cc7315d82e2988142259c441197ff4c12159ef0e1cb4ee5f9e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TPOVDGS%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5Wr9i0IUCYTWRp3ennbpax5UCcJYUnQH75uAOLJjTlwIhALg6WQEk5%2Fs2q%2BgAa3HopdcRkdfOb1%2FHcAs0ky7p9WlyKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy68vA4LTIccu9DJsQq3APQQVpqzd2UH6dtj1ZDHjd2WzZ4Jmt2dahB87SPoXrze0j%2FUiAYVGCnkWEdBTPdstrUdgPSt6d%2BgorKSyAcJQp%2F2kB18sxAqTGqtegfj1Wf7a8DCFSBNN%2BkSh63y95y4ZzyTjUnEw%2Bq%2FKhhNfrV0RDmbUGkIC%2FLvuoBepHS89gf7lI2g2GjjIHARlRa%2BtYEybteZGxOA6fExpbE3sALfP9IEtgoYHDSyLQsAZdhZfp%2F4q88ZhHUO5mexFYESLUBBSWkh5rBM8Y3pNmMFWsAgrCvFYaWFlgYhD8oh6UYm90UDyGAAN7eGfxPoOUQUYAeO8QMi%2BLlWg3dqHFGvv1%2Bw47rmmwqjQFvINjzmXVanMFOMDLToZCvV9%2BRaWXmushPje64pgrhF%2BHA96nOWTwsOLCu9NiD%2BNXRC5OzLAduQUATIKLz1mASRKpHYkRmCiAQATIvyoMD3vQk0O48us7CzKd6vSqYbiVkIexFkd%2Few7D5TC%2BmsndcsHn8odTsHj7YjLo1JX%2FftEkIv2uPp3jijih26poFf1DO64xDk70TIlwyrbArLRAYBQmZAEXC5eZvVCsEi1b4YZLpDwhf0i2yjw1ZbYbQ2FsacBZkmcX%2F%2BdUieSE7bXWlO%2FJdB2uMzTD3k7DTBjqkAQCyfF%2Fjy9ZbfLWYMESxh8tpy9%2FaQ3h2GvROtadc9F52ZtMVAtEHSmJ%2FHAl3h5e4CEMSG5EbkYnnKpRcfIW23d1wriiMhX822dA202GfHAy7brxuj8CbYVab0EkU80fyWQc9VlnVjtpQkb9AWXZHX9hn89RWk04GswUzKr%2FW6ni4ClOHiM4qHoa40J7sB4s%2FBoI8DM2ITkxwegJY%2FNFEiBnCGXpY&X-Amz-Signature=32261d86165a746d95a48e8ff6d5fb081379454dd94117f24d51dc750b9195e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YRFFRQG%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd9OWPcqu7Nre%2B7uWQ%2FpeZnQ%2BXcSFGdvKMVwZCxTRktAiAFYCtLL%2FnsVqcMbrNnZ0xlxICWt4sGfO%2Bj1pji%2BzfffCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYc5LxJs4qx%2F%2BCGuKtwD6arHWJD5nFSNiMPViG4sEXD%2FMlaAUkm8G3pYHYYD%2BUCeeuEPk9Od%2FwIkgSnbgCJDiQX8s2Ergvuz5fo7HsuES2FuxVTVoREkZuwkU6SgbrHwBoPqJXYyQkTMhrGr6myqad9WE4ArW3PaRTxKX%2F9JnA%2FVK2JoSzEva%2B9v1RHkDLbmEnjIwb54P%2FVTDbfGhwsyiu%2BSDIWmBU6raxA%2FGB02tXPuZ7%2F5KYS68AuOAL6Rv5i4Gnoqhy%2FAaLu89%2FLnYygXcNXMqTKejonpejEMBia%2Bb0f4kXjCJt53KRpPiRggpjpD3R%2BWBKXh1UPXIKdFlgkTLODGD5fc839kyNJF0mqXhMsJcnf96KKzukHT0kF%2F%2Bskb10q0VLuk4GHTFNZl8ZSHmci2qGZ%2BUoHEjoufTPAm%2BiZQoDCO89H4xn8rEeI3QZS0s6MgqjG7FkGkt9wSdN3HU1vJ9%2FM0rv1mbVTegB1EHSiWc2DVZ8t1F%2ByPX7CsL%2B0ZxAE6PjmpEdIadhj9%2BU%2BqhRRl4MACDDKK2SGtMwUm5WHB44ZCTpnEhC3mNIyrNTHO%2Bwcpytpp2H4jfEQ%2BW7ukhw5DVZu3O1i%2B%2B10lk6v%2B34BW4tB57JVU5Y7YvjMKBxALBRWFwG%2FaSbK%2Bdxkwnpew0wY6pgFUqa1nlVd4I886k65n3Y4PW8afYBPOAZQF26X5fixsIggtEramvFi3b0CDYTXM%2F8mJ8gi0LAxAw22%2FXH7c3E93%2BKus55hMnVR3%2BA2Wy89SP5pbpzamfx6ATGTy5p0HeUKmyaE8%2Fnc2pb2JK%2BDB2uqeDIR%2F5%2BNdLt4CNdBRu3wf6acgCI86y%2FOiQnj%2BeZtawwSxxT%2FHqDh%2BcYA2rZIXWzL6Jt4zcBsd&X-Amz-Signature=17aca5f1b8e088120e807f15cc598b2725e1ddd8c97bec6c123ff6dfac28a0a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YRFFRQG%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd9OWPcqu7Nre%2B7uWQ%2FpeZnQ%2BXcSFGdvKMVwZCxTRktAiAFYCtLL%2FnsVqcMbrNnZ0xlxICWt4sGfO%2Bj1pji%2BzfffCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYc5LxJs4qx%2F%2BCGuKtwD6arHWJD5nFSNiMPViG4sEXD%2FMlaAUkm8G3pYHYYD%2BUCeeuEPk9Od%2FwIkgSnbgCJDiQX8s2Ergvuz5fo7HsuES2FuxVTVoREkZuwkU6SgbrHwBoPqJXYyQkTMhrGr6myqad9WE4ArW3PaRTxKX%2F9JnA%2FVK2JoSzEva%2B9v1RHkDLbmEnjIwb54P%2FVTDbfGhwsyiu%2BSDIWmBU6raxA%2FGB02tXPuZ7%2F5KYS68AuOAL6Rv5i4Gnoqhy%2FAaLu89%2FLnYygXcNXMqTKejonpejEMBia%2Bb0f4kXjCJt53KRpPiRggpjpD3R%2BWBKXh1UPXIKdFlgkTLODGD5fc839kyNJF0mqXhMsJcnf96KKzukHT0kF%2F%2Bskb10q0VLuk4GHTFNZl8ZSHmci2qGZ%2BUoHEjoufTPAm%2BiZQoDCO89H4xn8rEeI3QZS0s6MgqjG7FkGkt9wSdN3HU1vJ9%2FM0rv1mbVTegB1EHSiWc2DVZ8t1F%2ByPX7CsL%2B0ZxAE6PjmpEdIadhj9%2BU%2BqhRRl4MACDDKK2SGtMwUm5WHB44ZCTpnEhC3mNIyrNTHO%2Bwcpytpp2H4jfEQ%2BW7ukhw5DVZu3O1i%2B%2B10lk6v%2B34BW4tB57JVU5Y7YvjMKBxALBRWFwG%2FaSbK%2Bdxkwnpew0wY6pgFUqa1nlVd4I886k65n3Y4PW8afYBPOAZQF26X5fixsIggtEramvFi3b0CDYTXM%2F8mJ8gi0LAxAw22%2FXH7c3E93%2BKus55hMnVR3%2BA2Wy89SP5pbpzamfx6ATGTy5p0HeUKmyaE8%2Fnc2pb2JK%2BDB2uqeDIR%2F5%2BNdLt4CNdBRu3wf6acgCI86y%2FOiQnj%2BeZtawwSxxT%2FHqDh%2BcYA2rZIXWzL6Jt4zcBsd&X-Amz-Signature=8711c8b49fb6a8f69f396125c4109d9fe18046d5ba16038825e6cee7ec9c6592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YRFFRQG%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd9OWPcqu7Nre%2B7uWQ%2FpeZnQ%2BXcSFGdvKMVwZCxTRktAiAFYCtLL%2FnsVqcMbrNnZ0xlxICWt4sGfO%2Bj1pji%2BzfffCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYc5LxJs4qx%2F%2BCGuKtwD6arHWJD5nFSNiMPViG4sEXD%2FMlaAUkm8G3pYHYYD%2BUCeeuEPk9Od%2FwIkgSnbgCJDiQX8s2Ergvuz5fo7HsuES2FuxVTVoREkZuwkU6SgbrHwBoPqJXYyQkTMhrGr6myqad9WE4ArW3PaRTxKX%2F9JnA%2FVK2JoSzEva%2B9v1RHkDLbmEnjIwb54P%2FVTDbfGhwsyiu%2BSDIWmBU6raxA%2FGB02tXPuZ7%2F5KYS68AuOAL6Rv5i4Gnoqhy%2FAaLu89%2FLnYygXcNXMqTKejonpejEMBia%2Bb0f4kXjCJt53KRpPiRggpjpD3R%2BWBKXh1UPXIKdFlgkTLODGD5fc839kyNJF0mqXhMsJcnf96KKzukHT0kF%2F%2Bskb10q0VLuk4GHTFNZl8ZSHmci2qGZ%2BUoHEjoufTPAm%2BiZQoDCO89H4xn8rEeI3QZS0s6MgqjG7FkGkt9wSdN3HU1vJ9%2FM0rv1mbVTegB1EHSiWc2DVZ8t1F%2ByPX7CsL%2B0ZxAE6PjmpEdIadhj9%2BU%2BqhRRl4MACDDKK2SGtMwUm5WHB44ZCTpnEhC3mNIyrNTHO%2Bwcpytpp2H4jfEQ%2BW7ukhw5DVZu3O1i%2B%2B10lk6v%2B34BW4tB57JVU5Y7YvjMKBxALBRWFwG%2FaSbK%2Bdxkwnpew0wY6pgFUqa1nlVd4I886k65n3Y4PW8afYBPOAZQF26X5fixsIggtEramvFi3b0CDYTXM%2F8mJ8gi0LAxAw22%2FXH7c3E93%2BKus55hMnVR3%2BA2Wy89SP5pbpzamfx6ATGTy5p0HeUKmyaE8%2Fnc2pb2JK%2BDB2uqeDIR%2F5%2BNdLt4CNdBRu3wf6acgCI86y%2FOiQnj%2BeZtawwSxxT%2FHqDh%2BcYA2rZIXWzL6Jt4zcBsd&X-Amz-Signature=29fc24a19e7e3b25f2775ae12dc0d7901cec54bcd1d01afee87152a16c129e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YRFFRQG%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd9OWPcqu7Nre%2B7uWQ%2FpeZnQ%2BXcSFGdvKMVwZCxTRktAiAFYCtLL%2FnsVqcMbrNnZ0xlxICWt4sGfO%2Bj1pji%2BzfffCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYc5LxJs4qx%2F%2BCGuKtwD6arHWJD5nFSNiMPViG4sEXD%2FMlaAUkm8G3pYHYYD%2BUCeeuEPk9Od%2FwIkgSnbgCJDiQX8s2Ergvuz5fo7HsuES2FuxVTVoREkZuwkU6SgbrHwBoPqJXYyQkTMhrGr6myqad9WE4ArW3PaRTxKX%2F9JnA%2FVK2JoSzEva%2B9v1RHkDLbmEnjIwb54P%2FVTDbfGhwsyiu%2BSDIWmBU6raxA%2FGB02tXPuZ7%2F5KYS68AuOAL6Rv5i4Gnoqhy%2FAaLu89%2FLnYygXcNXMqTKejonpejEMBia%2Bb0f4kXjCJt53KRpPiRggpjpD3R%2BWBKXh1UPXIKdFlgkTLODGD5fc839kyNJF0mqXhMsJcnf96KKzukHT0kF%2F%2Bskb10q0VLuk4GHTFNZl8ZSHmci2qGZ%2BUoHEjoufTPAm%2BiZQoDCO89H4xn8rEeI3QZS0s6MgqjG7FkGkt9wSdN3HU1vJ9%2FM0rv1mbVTegB1EHSiWc2DVZ8t1F%2ByPX7CsL%2B0ZxAE6PjmpEdIadhj9%2BU%2BqhRRl4MACDDKK2SGtMwUm5WHB44ZCTpnEhC3mNIyrNTHO%2Bwcpytpp2H4jfEQ%2BW7ukhw5DVZu3O1i%2B%2B10lk6v%2B34BW4tB57JVU5Y7YvjMKBxALBRWFwG%2FaSbK%2Bdxkwnpew0wY6pgFUqa1nlVd4I886k65n3Y4PW8afYBPOAZQF26X5fixsIggtEramvFi3b0CDYTXM%2F8mJ8gi0LAxAw22%2FXH7c3E93%2BKus55hMnVR3%2BA2Wy89SP5pbpzamfx6ATGTy5p0HeUKmyaE8%2Fnc2pb2JK%2BDB2uqeDIR%2F5%2BNdLt4CNdBRu3wf6acgCI86y%2FOiQnj%2BeZtawwSxxT%2FHqDh%2BcYA2rZIXWzL6Jt4zcBsd&X-Amz-Signature=e842229295fcf4f8028cb156a7c23055428b9a460162cb83089683ba82e6ba33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YRFFRQG%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd9OWPcqu7Nre%2B7uWQ%2FpeZnQ%2BXcSFGdvKMVwZCxTRktAiAFYCtLL%2FnsVqcMbrNnZ0xlxICWt4sGfO%2Bj1pji%2BzfffCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYc5LxJs4qx%2F%2BCGuKtwD6arHWJD5nFSNiMPViG4sEXD%2FMlaAUkm8G3pYHYYD%2BUCeeuEPk9Od%2FwIkgSnbgCJDiQX8s2Ergvuz5fo7HsuES2FuxVTVoREkZuwkU6SgbrHwBoPqJXYyQkTMhrGr6myqad9WE4ArW3PaRTxKX%2F9JnA%2FVK2JoSzEva%2B9v1RHkDLbmEnjIwb54P%2FVTDbfGhwsyiu%2BSDIWmBU6raxA%2FGB02tXPuZ7%2F5KYS68AuOAL6Rv5i4Gnoqhy%2FAaLu89%2FLnYygXcNXMqTKejonpejEMBia%2Bb0f4kXjCJt53KRpPiRggpjpD3R%2BWBKXh1UPXIKdFlgkTLODGD5fc839kyNJF0mqXhMsJcnf96KKzukHT0kF%2F%2Bskb10q0VLuk4GHTFNZl8ZSHmci2qGZ%2BUoHEjoufTPAm%2BiZQoDCO89H4xn8rEeI3QZS0s6MgqjG7FkGkt9wSdN3HU1vJ9%2FM0rv1mbVTegB1EHSiWc2DVZ8t1F%2ByPX7CsL%2B0ZxAE6PjmpEdIadhj9%2BU%2BqhRRl4MACDDKK2SGtMwUm5WHB44ZCTpnEhC3mNIyrNTHO%2Bwcpytpp2H4jfEQ%2BW7ukhw5DVZu3O1i%2B%2B10lk6v%2B34BW4tB57JVU5Y7YvjMKBxALBRWFwG%2FaSbK%2Bdxkwnpew0wY6pgFUqa1nlVd4I886k65n3Y4PW8afYBPOAZQF26X5fixsIggtEramvFi3b0CDYTXM%2F8mJ8gi0LAxAw22%2FXH7c3E93%2BKus55hMnVR3%2BA2Wy89SP5pbpzamfx6ATGTy5p0HeUKmyaE8%2Fnc2pb2JK%2BDB2uqeDIR%2F5%2BNdLt4CNdBRu3wf6acgCI86y%2FOiQnj%2BeZtawwSxxT%2FHqDh%2BcYA2rZIXWzL6Jt4zcBsd&X-Amz-Signature=31a18aba328e52ac16575f8c0464f806eec3427fcf6537ee10d017437d73093f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YRFFRQG%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd9OWPcqu7Nre%2B7uWQ%2FpeZnQ%2BXcSFGdvKMVwZCxTRktAiAFYCtLL%2FnsVqcMbrNnZ0xlxICWt4sGfO%2Bj1pji%2BzfffCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYc5LxJs4qx%2F%2BCGuKtwD6arHWJD5nFSNiMPViG4sEXD%2FMlaAUkm8G3pYHYYD%2BUCeeuEPk9Od%2FwIkgSnbgCJDiQX8s2Ergvuz5fo7HsuES2FuxVTVoREkZuwkU6SgbrHwBoPqJXYyQkTMhrGr6myqad9WE4ArW3PaRTxKX%2F9JnA%2FVK2JoSzEva%2B9v1RHkDLbmEnjIwb54P%2FVTDbfGhwsyiu%2BSDIWmBU6raxA%2FGB02tXPuZ7%2F5KYS68AuOAL6Rv5i4Gnoqhy%2FAaLu89%2FLnYygXcNXMqTKejonpejEMBia%2Bb0f4kXjCJt53KRpPiRggpjpD3R%2BWBKXh1UPXIKdFlgkTLODGD5fc839kyNJF0mqXhMsJcnf96KKzukHT0kF%2F%2Bskb10q0VLuk4GHTFNZl8ZSHmci2qGZ%2BUoHEjoufTPAm%2BiZQoDCO89H4xn8rEeI3QZS0s6MgqjG7FkGkt9wSdN3HU1vJ9%2FM0rv1mbVTegB1EHSiWc2DVZ8t1F%2ByPX7CsL%2B0ZxAE6PjmpEdIadhj9%2BU%2BqhRRl4MACDDKK2SGtMwUm5WHB44ZCTpnEhC3mNIyrNTHO%2Bwcpytpp2H4jfEQ%2BW7ukhw5DVZu3O1i%2B%2B10lk6v%2B34BW4tB57JVU5Y7YvjMKBxALBRWFwG%2FaSbK%2Bdxkwnpew0wY6pgFUqa1nlVd4I886k65n3Y4PW8afYBPOAZQF26X5fixsIggtEramvFi3b0CDYTXM%2F8mJ8gi0LAxAw22%2FXH7c3E93%2BKus55hMnVR3%2BA2Wy89SP5pbpzamfx6ATGTy5p0HeUKmyaE8%2Fnc2pb2JK%2BDB2uqeDIR%2F5%2BNdLt4CNdBRu3wf6acgCI86y%2FOiQnj%2BeZtawwSxxT%2FHqDh%2BcYA2rZIXWzL6Jt4zcBsd&X-Amz-Signature=fd65385d7d635da73c19b09b24d33204331a837819373b6e852ed8c8868d9d92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


