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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWXHBE52%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDuaADUXw8rn3LbGetgP6ecC9td3IEI867yjqAb3q6klwIhALqYv%2FO8%2FukZi6atoo4Kje%2Fjtt8e0WuGeZq4P8aeu76RKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqRCz1T83FVLSgqH4q3ANTy%2BlFAKiHgVTwwumaU0sPW6sl7FK1iaXt4f4psxvUtia884iFgS%2Fb0t2i4dDaWxJuuOyiCLSnDWDkG%2FEqh5yE361u4yh6g4596fEv6i%2FvHsTK1m%2B96OtFa1ztTPgS0%2B%2BujWeF72il46DEeqqQUPEBDF8jdzsVjaJvHQUsbqvWQyayXnvQU%2FdWsgC3tw7743NQDstcTB8OZY%2BBLXhNGOTTWkKb5WbExr8w73ZtpIIrtByZJ%2FtG51YeN8%2Fj93Whiv%2Bj%2BFbEwAuAN1LN2ObIcvuFdtaxsj2J2sfHtLwmdfC%2BeZADzo6FrN933XlCl4CiPIBOtBxAANj3ehj6apRk5te4JJNjEVAB4A4UhS7Zqn%2BOZvmTTvubz94VSvTHQSwXH820It28GOrfk%2F2RT6V8ou61aNIFJ11ttUgyWy43y%2BktaFpajDC0G5AbnYldKThgM0%2B%2BWfVGWIfM0etD7CELId1v1fASdHHztyaaElu3XTejxYlSybYklmiBemQUghOWStNIP81sr2YVHSrU9%2FZc15UTRD%2BmtEJ0PcAdvLkzWXvzTTgJhUiyK4yVjNJ3HhBMgay0nMrr3OZXSmdSESpBBhbsZ0%2FjYD9pM7vVAlFoZ7Y2g7IQLQtZPQnNfEq0sjCixNvEBjqkAfodyHxvxiKS5tt3IVKBPZwGI52TAZU6zq8gIOyCWoa65d6%2BNYY%2BHmRGw3zS3EFLpXJqQRgck1qMhzYx611Z03a397gPbsqV%2FfG2ZtbRbgk8603VwTtbEIaUfcuIYGUKosZGnartC6GFmEqgv420x0tv7wDSWISd2VjsEwNVISmd7BQHKBxXlmhntfVezz%2BWWzGNwf%2F9%2BJoQrnxOCN1Rk30kVVEc&X-Amz-Signature=e709101bed9e3a04683ff331d8fbaad85cdc49d93099c377b5ee417b113f0a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWXHBE52%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDuaADUXw8rn3LbGetgP6ecC9td3IEI867yjqAb3q6klwIhALqYv%2FO8%2FukZi6atoo4Kje%2Fjtt8e0WuGeZq4P8aeu76RKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqRCz1T83FVLSgqH4q3ANTy%2BlFAKiHgVTwwumaU0sPW6sl7FK1iaXt4f4psxvUtia884iFgS%2Fb0t2i4dDaWxJuuOyiCLSnDWDkG%2FEqh5yE361u4yh6g4596fEv6i%2FvHsTK1m%2B96OtFa1ztTPgS0%2B%2BujWeF72il46DEeqqQUPEBDF8jdzsVjaJvHQUsbqvWQyayXnvQU%2FdWsgC3tw7743NQDstcTB8OZY%2BBLXhNGOTTWkKb5WbExr8w73ZtpIIrtByZJ%2FtG51YeN8%2Fj93Whiv%2Bj%2BFbEwAuAN1LN2ObIcvuFdtaxsj2J2sfHtLwmdfC%2BeZADzo6FrN933XlCl4CiPIBOtBxAANj3ehj6apRk5te4JJNjEVAB4A4UhS7Zqn%2BOZvmTTvubz94VSvTHQSwXH820It28GOrfk%2F2RT6V8ou61aNIFJ11ttUgyWy43y%2BktaFpajDC0G5AbnYldKThgM0%2B%2BWfVGWIfM0etD7CELId1v1fASdHHztyaaElu3XTejxYlSybYklmiBemQUghOWStNIP81sr2YVHSrU9%2FZc15UTRD%2BmtEJ0PcAdvLkzWXvzTTgJhUiyK4yVjNJ3HhBMgay0nMrr3OZXSmdSESpBBhbsZ0%2FjYD9pM7vVAlFoZ7Y2g7IQLQtZPQnNfEq0sjCixNvEBjqkAfodyHxvxiKS5tt3IVKBPZwGI52TAZU6zq8gIOyCWoa65d6%2BNYY%2BHmRGw3zS3EFLpXJqQRgck1qMhzYx611Z03a397gPbsqV%2FfG2ZtbRbgk8603VwTtbEIaUfcuIYGUKosZGnartC6GFmEqgv420x0tv7wDSWISd2VjsEwNVISmd7BQHKBxXlmhntfVezz%2BWWzGNwf%2F9%2BJoQrnxOCN1Rk30kVVEc&X-Amz-Signature=3dd957831047b7724117198b4895faaeef3e9a99b1be0c6dbdbc7f5696534fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWXHBE52%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDuaADUXw8rn3LbGetgP6ecC9td3IEI867yjqAb3q6klwIhALqYv%2FO8%2FukZi6atoo4Kje%2Fjtt8e0WuGeZq4P8aeu76RKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqRCz1T83FVLSgqH4q3ANTy%2BlFAKiHgVTwwumaU0sPW6sl7FK1iaXt4f4psxvUtia884iFgS%2Fb0t2i4dDaWxJuuOyiCLSnDWDkG%2FEqh5yE361u4yh6g4596fEv6i%2FvHsTK1m%2B96OtFa1ztTPgS0%2B%2BujWeF72il46DEeqqQUPEBDF8jdzsVjaJvHQUsbqvWQyayXnvQU%2FdWsgC3tw7743NQDstcTB8OZY%2BBLXhNGOTTWkKb5WbExr8w73ZtpIIrtByZJ%2FtG51YeN8%2Fj93Whiv%2Bj%2BFbEwAuAN1LN2ObIcvuFdtaxsj2J2sfHtLwmdfC%2BeZADzo6FrN933XlCl4CiPIBOtBxAANj3ehj6apRk5te4JJNjEVAB4A4UhS7Zqn%2BOZvmTTvubz94VSvTHQSwXH820It28GOrfk%2F2RT6V8ou61aNIFJ11ttUgyWy43y%2BktaFpajDC0G5AbnYldKThgM0%2B%2BWfVGWIfM0etD7CELId1v1fASdHHztyaaElu3XTejxYlSybYklmiBemQUghOWStNIP81sr2YVHSrU9%2FZc15UTRD%2BmtEJ0PcAdvLkzWXvzTTgJhUiyK4yVjNJ3HhBMgay0nMrr3OZXSmdSESpBBhbsZ0%2FjYD9pM7vVAlFoZ7Y2g7IQLQtZPQnNfEq0sjCixNvEBjqkAfodyHxvxiKS5tt3IVKBPZwGI52TAZU6zq8gIOyCWoa65d6%2BNYY%2BHmRGw3zS3EFLpXJqQRgck1qMhzYx611Z03a397gPbsqV%2FfG2ZtbRbgk8603VwTtbEIaUfcuIYGUKosZGnartC6GFmEqgv420x0tv7wDSWISd2VjsEwNVISmd7BQHKBxXlmhntfVezz%2BWWzGNwf%2F9%2BJoQrnxOCN1Rk30kVVEc&X-Amz-Signature=49c7aec3d0acca673d638ad1bef2033bc23278b2784744033655b698f583a090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWXHBE52%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDuaADUXw8rn3LbGetgP6ecC9td3IEI867yjqAb3q6klwIhALqYv%2FO8%2FukZi6atoo4Kje%2Fjtt8e0WuGeZq4P8aeu76RKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqRCz1T83FVLSgqH4q3ANTy%2BlFAKiHgVTwwumaU0sPW6sl7FK1iaXt4f4psxvUtia884iFgS%2Fb0t2i4dDaWxJuuOyiCLSnDWDkG%2FEqh5yE361u4yh6g4596fEv6i%2FvHsTK1m%2B96OtFa1ztTPgS0%2B%2BujWeF72il46DEeqqQUPEBDF8jdzsVjaJvHQUsbqvWQyayXnvQU%2FdWsgC3tw7743NQDstcTB8OZY%2BBLXhNGOTTWkKb5WbExr8w73ZtpIIrtByZJ%2FtG51YeN8%2Fj93Whiv%2Bj%2BFbEwAuAN1LN2ObIcvuFdtaxsj2J2sfHtLwmdfC%2BeZADzo6FrN933XlCl4CiPIBOtBxAANj3ehj6apRk5te4JJNjEVAB4A4UhS7Zqn%2BOZvmTTvubz94VSvTHQSwXH820It28GOrfk%2F2RT6V8ou61aNIFJ11ttUgyWy43y%2BktaFpajDC0G5AbnYldKThgM0%2B%2BWfVGWIfM0etD7CELId1v1fASdHHztyaaElu3XTejxYlSybYklmiBemQUghOWStNIP81sr2YVHSrU9%2FZc15UTRD%2BmtEJ0PcAdvLkzWXvzTTgJhUiyK4yVjNJ3HhBMgay0nMrr3OZXSmdSESpBBhbsZ0%2FjYD9pM7vVAlFoZ7Y2g7IQLQtZPQnNfEq0sjCixNvEBjqkAfodyHxvxiKS5tt3IVKBPZwGI52TAZU6zq8gIOyCWoa65d6%2BNYY%2BHmRGw3zS3EFLpXJqQRgck1qMhzYx611Z03a397gPbsqV%2FfG2ZtbRbgk8603VwTtbEIaUfcuIYGUKosZGnartC6GFmEqgv420x0tv7wDSWISd2VjsEwNVISmd7BQHKBxXlmhntfVezz%2BWWzGNwf%2F9%2BJoQrnxOCN1Rk30kVVEc&X-Amz-Signature=8627d409b1c5e5d34ee81a15981d6e57e0272a3b5280eff2ca212512c413c4fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWXHBE52%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDuaADUXw8rn3LbGetgP6ecC9td3IEI867yjqAb3q6klwIhALqYv%2FO8%2FukZi6atoo4Kje%2Fjtt8e0WuGeZq4P8aeu76RKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqRCz1T83FVLSgqH4q3ANTy%2BlFAKiHgVTwwumaU0sPW6sl7FK1iaXt4f4psxvUtia884iFgS%2Fb0t2i4dDaWxJuuOyiCLSnDWDkG%2FEqh5yE361u4yh6g4596fEv6i%2FvHsTK1m%2B96OtFa1ztTPgS0%2B%2BujWeF72il46DEeqqQUPEBDF8jdzsVjaJvHQUsbqvWQyayXnvQU%2FdWsgC3tw7743NQDstcTB8OZY%2BBLXhNGOTTWkKb5WbExr8w73ZtpIIrtByZJ%2FtG51YeN8%2Fj93Whiv%2Bj%2BFbEwAuAN1LN2ObIcvuFdtaxsj2J2sfHtLwmdfC%2BeZADzo6FrN933XlCl4CiPIBOtBxAANj3ehj6apRk5te4JJNjEVAB4A4UhS7Zqn%2BOZvmTTvubz94VSvTHQSwXH820It28GOrfk%2F2RT6V8ou61aNIFJ11ttUgyWy43y%2BktaFpajDC0G5AbnYldKThgM0%2B%2BWfVGWIfM0etD7CELId1v1fASdHHztyaaElu3XTejxYlSybYklmiBemQUghOWStNIP81sr2YVHSrU9%2FZc15UTRD%2BmtEJ0PcAdvLkzWXvzTTgJhUiyK4yVjNJ3HhBMgay0nMrr3OZXSmdSESpBBhbsZ0%2FjYD9pM7vVAlFoZ7Y2g7IQLQtZPQnNfEq0sjCixNvEBjqkAfodyHxvxiKS5tt3IVKBPZwGI52TAZU6zq8gIOyCWoa65d6%2BNYY%2BHmRGw3zS3EFLpXJqQRgck1qMhzYx611Z03a397gPbsqV%2FfG2ZtbRbgk8603VwTtbEIaUfcuIYGUKosZGnartC6GFmEqgv420x0tv7wDSWISd2VjsEwNVISmd7BQHKBxXlmhntfVezz%2BWWzGNwf%2F9%2BJoQrnxOCN1Rk30kVVEc&X-Amz-Signature=d8780139bb50b97655ea9f7fb799143a1c08f58e011f6706032eb371d3a2f13a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWXHBE52%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDuaADUXw8rn3LbGetgP6ecC9td3IEI867yjqAb3q6klwIhALqYv%2FO8%2FukZi6atoo4Kje%2Fjtt8e0WuGeZq4P8aeu76RKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqRCz1T83FVLSgqH4q3ANTy%2BlFAKiHgVTwwumaU0sPW6sl7FK1iaXt4f4psxvUtia884iFgS%2Fb0t2i4dDaWxJuuOyiCLSnDWDkG%2FEqh5yE361u4yh6g4596fEv6i%2FvHsTK1m%2B96OtFa1ztTPgS0%2B%2BujWeF72il46DEeqqQUPEBDF8jdzsVjaJvHQUsbqvWQyayXnvQU%2FdWsgC3tw7743NQDstcTB8OZY%2BBLXhNGOTTWkKb5WbExr8w73ZtpIIrtByZJ%2FtG51YeN8%2Fj93Whiv%2Bj%2BFbEwAuAN1LN2ObIcvuFdtaxsj2J2sfHtLwmdfC%2BeZADzo6FrN933XlCl4CiPIBOtBxAANj3ehj6apRk5te4JJNjEVAB4A4UhS7Zqn%2BOZvmTTvubz94VSvTHQSwXH820It28GOrfk%2F2RT6V8ou61aNIFJ11ttUgyWy43y%2BktaFpajDC0G5AbnYldKThgM0%2B%2BWfVGWIfM0etD7CELId1v1fASdHHztyaaElu3XTejxYlSybYklmiBemQUghOWStNIP81sr2YVHSrU9%2FZc15UTRD%2BmtEJ0PcAdvLkzWXvzTTgJhUiyK4yVjNJ3HhBMgay0nMrr3OZXSmdSESpBBhbsZ0%2FjYD9pM7vVAlFoZ7Y2g7IQLQtZPQnNfEq0sjCixNvEBjqkAfodyHxvxiKS5tt3IVKBPZwGI52TAZU6zq8gIOyCWoa65d6%2BNYY%2BHmRGw3zS3EFLpXJqQRgck1qMhzYx611Z03a397gPbsqV%2FfG2ZtbRbgk8603VwTtbEIaUfcuIYGUKosZGnartC6GFmEqgv420x0tv7wDSWISd2VjsEwNVISmd7BQHKBxXlmhntfVezz%2BWWzGNwf%2F9%2BJoQrnxOCN1Rk30kVVEc&X-Amz-Signature=10b2cd5207f42e74d053b5f1b0d668e9327942fedc3fd5d6bae3c4c98fd08fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWXHBE52%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDuaADUXw8rn3LbGetgP6ecC9td3IEI867yjqAb3q6klwIhALqYv%2FO8%2FukZi6atoo4Kje%2Fjtt8e0WuGeZq4P8aeu76RKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqRCz1T83FVLSgqH4q3ANTy%2BlFAKiHgVTwwumaU0sPW6sl7FK1iaXt4f4psxvUtia884iFgS%2Fb0t2i4dDaWxJuuOyiCLSnDWDkG%2FEqh5yE361u4yh6g4596fEv6i%2FvHsTK1m%2B96OtFa1ztTPgS0%2B%2BujWeF72il46DEeqqQUPEBDF8jdzsVjaJvHQUsbqvWQyayXnvQU%2FdWsgC3tw7743NQDstcTB8OZY%2BBLXhNGOTTWkKb5WbExr8w73ZtpIIrtByZJ%2FtG51YeN8%2Fj93Whiv%2Bj%2BFbEwAuAN1LN2ObIcvuFdtaxsj2J2sfHtLwmdfC%2BeZADzo6FrN933XlCl4CiPIBOtBxAANj3ehj6apRk5te4JJNjEVAB4A4UhS7Zqn%2BOZvmTTvubz94VSvTHQSwXH820It28GOrfk%2F2RT6V8ou61aNIFJ11ttUgyWy43y%2BktaFpajDC0G5AbnYldKThgM0%2B%2BWfVGWIfM0etD7CELId1v1fASdHHztyaaElu3XTejxYlSybYklmiBemQUghOWStNIP81sr2YVHSrU9%2FZc15UTRD%2BmtEJ0PcAdvLkzWXvzTTgJhUiyK4yVjNJ3HhBMgay0nMrr3OZXSmdSESpBBhbsZ0%2FjYD9pM7vVAlFoZ7Y2g7IQLQtZPQnNfEq0sjCixNvEBjqkAfodyHxvxiKS5tt3IVKBPZwGI52TAZU6zq8gIOyCWoa65d6%2BNYY%2BHmRGw3zS3EFLpXJqQRgck1qMhzYx611Z03a397gPbsqV%2FfG2ZtbRbgk8603VwTtbEIaUfcuIYGUKosZGnartC6GFmEqgv420x0tv7wDSWISd2VjsEwNVISmd7BQHKBxXlmhntfVezz%2BWWzGNwf%2F9%2BJoQrnxOCN1Rk30kVVEc&X-Amz-Signature=224485660402ea29eb86a82e0e943683c02fca46077abd89e45a590108887d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWXHBE52%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDuaADUXw8rn3LbGetgP6ecC9td3IEI867yjqAb3q6klwIhALqYv%2FO8%2FukZi6atoo4Kje%2Fjtt8e0WuGeZq4P8aeu76RKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqRCz1T83FVLSgqH4q3ANTy%2BlFAKiHgVTwwumaU0sPW6sl7FK1iaXt4f4psxvUtia884iFgS%2Fb0t2i4dDaWxJuuOyiCLSnDWDkG%2FEqh5yE361u4yh6g4596fEv6i%2FvHsTK1m%2B96OtFa1ztTPgS0%2B%2BujWeF72il46DEeqqQUPEBDF8jdzsVjaJvHQUsbqvWQyayXnvQU%2FdWsgC3tw7743NQDstcTB8OZY%2BBLXhNGOTTWkKb5WbExr8w73ZtpIIrtByZJ%2FtG51YeN8%2Fj93Whiv%2Bj%2BFbEwAuAN1LN2ObIcvuFdtaxsj2J2sfHtLwmdfC%2BeZADzo6FrN933XlCl4CiPIBOtBxAANj3ehj6apRk5te4JJNjEVAB4A4UhS7Zqn%2BOZvmTTvubz94VSvTHQSwXH820It28GOrfk%2F2RT6V8ou61aNIFJ11ttUgyWy43y%2BktaFpajDC0G5AbnYldKThgM0%2B%2BWfVGWIfM0etD7CELId1v1fASdHHztyaaElu3XTejxYlSybYklmiBemQUghOWStNIP81sr2YVHSrU9%2FZc15UTRD%2BmtEJ0PcAdvLkzWXvzTTgJhUiyK4yVjNJ3HhBMgay0nMrr3OZXSmdSESpBBhbsZ0%2FjYD9pM7vVAlFoZ7Y2g7IQLQtZPQnNfEq0sjCixNvEBjqkAfodyHxvxiKS5tt3IVKBPZwGI52TAZU6zq8gIOyCWoa65d6%2BNYY%2BHmRGw3zS3EFLpXJqQRgck1qMhzYx611Z03a397gPbsqV%2FfG2ZtbRbgk8603VwTtbEIaUfcuIYGUKosZGnartC6GFmEqgv420x0tv7wDSWISd2VjsEwNVISmd7BQHKBxXlmhntfVezz%2BWWzGNwf%2F9%2BJoQrnxOCN1Rk30kVVEc&X-Amz-Signature=77b5a3b0cde8504069be61da1e3157dd7145e34d7d9dc11673bd4a0aaa72abce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWXHBE52%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDuaADUXw8rn3LbGetgP6ecC9td3IEI867yjqAb3q6klwIhALqYv%2FO8%2FukZi6atoo4Kje%2Fjtt8e0WuGeZq4P8aeu76RKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqRCz1T83FVLSgqH4q3ANTy%2BlFAKiHgVTwwumaU0sPW6sl7FK1iaXt4f4psxvUtia884iFgS%2Fb0t2i4dDaWxJuuOyiCLSnDWDkG%2FEqh5yE361u4yh6g4596fEv6i%2FvHsTK1m%2B96OtFa1ztTPgS0%2B%2BujWeF72il46DEeqqQUPEBDF8jdzsVjaJvHQUsbqvWQyayXnvQU%2FdWsgC3tw7743NQDstcTB8OZY%2BBLXhNGOTTWkKb5WbExr8w73ZtpIIrtByZJ%2FtG51YeN8%2Fj93Whiv%2Bj%2BFbEwAuAN1LN2ObIcvuFdtaxsj2J2sfHtLwmdfC%2BeZADzo6FrN933XlCl4CiPIBOtBxAANj3ehj6apRk5te4JJNjEVAB4A4UhS7Zqn%2BOZvmTTvubz94VSvTHQSwXH820It28GOrfk%2F2RT6V8ou61aNIFJ11ttUgyWy43y%2BktaFpajDC0G5AbnYldKThgM0%2B%2BWfVGWIfM0etD7CELId1v1fASdHHztyaaElu3XTejxYlSybYklmiBemQUghOWStNIP81sr2YVHSrU9%2FZc15UTRD%2BmtEJ0PcAdvLkzWXvzTTgJhUiyK4yVjNJ3HhBMgay0nMrr3OZXSmdSESpBBhbsZ0%2FjYD9pM7vVAlFoZ7Y2g7IQLQtZPQnNfEq0sjCixNvEBjqkAfodyHxvxiKS5tt3IVKBPZwGI52TAZU6zq8gIOyCWoa65d6%2BNYY%2BHmRGw3zS3EFLpXJqQRgck1qMhzYx611Z03a397gPbsqV%2FfG2ZtbRbgk8603VwTtbEIaUfcuIYGUKosZGnartC6GFmEqgv420x0tv7wDSWISd2VjsEwNVISmd7BQHKBxXlmhntfVezz%2BWWzGNwf%2F9%2BJoQrnxOCN1Rk30kVVEc&X-Amz-Signature=598682e0516c6e747ed1ab53556bd9576ca3ed4f456d1de596a0728eddcc7a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWXHBE52%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDuaADUXw8rn3LbGetgP6ecC9td3IEI867yjqAb3q6klwIhALqYv%2FO8%2FukZi6atoo4Kje%2Fjtt8e0WuGeZq4P8aeu76RKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqRCz1T83FVLSgqH4q3ANTy%2BlFAKiHgVTwwumaU0sPW6sl7FK1iaXt4f4psxvUtia884iFgS%2Fb0t2i4dDaWxJuuOyiCLSnDWDkG%2FEqh5yE361u4yh6g4596fEv6i%2FvHsTK1m%2B96OtFa1ztTPgS0%2B%2BujWeF72il46DEeqqQUPEBDF8jdzsVjaJvHQUsbqvWQyayXnvQU%2FdWsgC3tw7743NQDstcTB8OZY%2BBLXhNGOTTWkKb5WbExr8w73ZtpIIrtByZJ%2FtG51YeN8%2Fj93Whiv%2Bj%2BFbEwAuAN1LN2ObIcvuFdtaxsj2J2sfHtLwmdfC%2BeZADzo6FrN933XlCl4CiPIBOtBxAANj3ehj6apRk5te4JJNjEVAB4A4UhS7Zqn%2BOZvmTTvubz94VSvTHQSwXH820It28GOrfk%2F2RT6V8ou61aNIFJ11ttUgyWy43y%2BktaFpajDC0G5AbnYldKThgM0%2B%2BWfVGWIfM0etD7CELId1v1fASdHHztyaaElu3XTejxYlSybYklmiBemQUghOWStNIP81sr2YVHSrU9%2FZc15UTRD%2BmtEJ0PcAdvLkzWXvzTTgJhUiyK4yVjNJ3HhBMgay0nMrr3OZXSmdSESpBBhbsZ0%2FjYD9pM7vVAlFoZ7Y2g7IQLQtZPQnNfEq0sjCixNvEBjqkAfodyHxvxiKS5tt3IVKBPZwGI52TAZU6zq8gIOyCWoa65d6%2BNYY%2BHmRGw3zS3EFLpXJqQRgck1qMhzYx611Z03a397gPbsqV%2FfG2ZtbRbgk8603VwTtbEIaUfcuIYGUKosZGnartC6GFmEqgv420x0tv7wDSWISd2VjsEwNVISmd7BQHKBxXlmhntfVezz%2BWWzGNwf%2F9%2BJoQrnxOCN1Rk30kVVEc&X-Amz-Signature=24840a067e31e9534e1583fa43acf4729bc796821c85799b1259bd83400241d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S55WK5MO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDefHPAcx2m8N1ff%2B4QOm1YAHfd%2B6D78pK63K2EkqRASQIhAOXODEMzZMaI7IHW6E5az%2FUTCe1DCowFoi6Ojfb0Lk7DKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQaPQ9tw0%2F5dzWxycq3ANQRfMhq4P5UcLX1UCOprr%2BtQKX%2F%2B3xKwoaNWZPsLX2DjQj3x1OswQOhz0kxDSO4zmPcdDyfnNhSoTerTkTdZb8KOHxRU8RYLuj2JvF4nEUmawkmkr7sa%2FWaqpBhAgIjEPrkFmAYIzueij4cqZeBx4RUamYajnUHYP8UwXIYG8uCQ4SFuyxGs1%2BTis09Kf0TOYBmHStG98pV6dNsMLqEgOTuo586e%2FoVaYF99RYVyrz0v7%2BnzKwVQ6AE1ZXlzyFFQlZblO%2FzEqJ5JiOziRws5A9iiwwk8GaeVRNyCY2sCwXI6vcnHVEO0Sql6bGSkwpq%2FI5XVrDr8frJ0dBlJU1yhvnJwpWBgOhYsTm%2F6HGYLGTgDgfyIhY2wSbcBWe1P0xtBYeCI32b3zWqsO%2FeOJLLnPxIw33h5DT47SkDSWx9IH99Ol67ScX8V3SeYRZe2ZITTlAIZNZThjdxFbNYpY%2Bqo2BFmI5ZlzTAWo4KEdcHM0k2mBqJYAJ9y9Qlq2Q%2FrwQOk9fPXFJcaAjEVx7DRKKu4P02RW7HR2Yofkc4T6OLeZ02dxusR6DmuReJgg%2FmjePuL9PevjmvA580v50%2FzMhtg6Co%2Bv5IbvgYUEa9air%2B7ZabRXFD%2BjY4cJblX5VBjDKxNvEBjqkATt5OJypVV03j4wtYtqkQgE7L4O5mcTbvAXVcuIiBnxXlaaKXLrmeqwvVzUEwBTaUvoRT0zwYe5A6WvX50Xp3qHyVLJxLN6%2FBpMmqJDD8DcE032NFDYdp7A4R6zMoM6eM%2BD%2FLIuOtH7JFHr278c3Ntcr9Mf12WcaHznLmI31ixmkn%2FdQAg2D90lY%2FpcHo1WCNklya6NA3plzDNeTG%2F%2BdJhyrPSDH&X-Amz-Signature=1004a4861db7f27168712c6c367e46334f470342ffaf763d6a223293366c51ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDASFU4Y%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFEcMBy99qXNRFcIj7ieCtSXD2xIrLroNDi87mLECAsAAiBUV0lqrEmEDEoYs7dz1JWJnSAMIM%2F%2BdcnSvgr3A%2F1TdCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzoA73CuB5YRJ9QuQKtwDYqddNaa6RxWmhGdRL0%2B7pBA5wUFj5zM22RZ8TSXIdXUVSmLh%2FfWLjQoLj%2B5qu7acLIc5hZ0SPF39PebqBf1nvbPAHvaWbumPj2t6n0z5xzuVLvAlwcr192XajC8LhHFQIRlyQaky4y%2BeQ%2BomuaMaD4LZjKWAVSBNjd%2BhVvDYY7HNMtzkNP48jJmUUkRlBFLZiDQxMgq4T3UKG%2F1JOsCIfCbP%2B0Cy7Tfisk1RbGPNTSbqvwidEsvc3WOPTYZtGrtEufyOGXQ1Ta0VKkUO7tlxW9q%2BVlyafIgBrBzEVkZ7o%2BMWXqMU1DUfJXzX8v8Nz8%2BvUJA1CRkLeNDGAEThrWiOryOwkw4ozMrxK2h5CJZHqhJ2ty6zMNjfx4tNO%2BluhMgUg2zHU1r5aRIX8A9bX4TGdlQtqI%2BhjZp8%2F6fwKD2XwEdptdCKYaZXjIN76yZM1VzhQYAMDtctYhtS4rRdPtyJ0rWugemXlVpMjY5ENU7%2FJJpc7aSA76nwR0sh3D%2BoA%2F873dHhyFQ8JhnxExFW5JxWx9xpLiMbMRZZz2UUusvszSmQuv77fs8ePL0OxuYUVcG4qROfB0NSOGn0KavQoeqNfzCwbLDDNI%2F93XKDrp7NqboeBRX0U40WsPwJah0w28TbxAY6pgFgCmnD8cmCLZ5R64ZygfbDGS1c0WrOvD0MnED70UqtyWoum6laQ3GlF8ZS0AHJm8W9HsLWa4XBcw1o4agZtu9SHXKMBlTto%2BxxkzYz2pTRVWlyAcvCREdJxBHDHo7ZULt4EdYUcqv0VhwlqVzpa0zlhlqSswTlHNm%2BbCpstJk0GkMuXd1%2FbJCly3127ZOv970GewXuPcYOqBL4KiCPhPT8Y2aqFb6p&X-Amz-Signature=9a009f08b5b6cfd6a5ec114c2e37df61dc1f2a6a54085ed649299c6418103a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSQPDFU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHb7PGJM6vdT0wtmjsU%2BEFWOhZ9LzUOVC%2BbIATzl0cUQAiEA6l3W7sc8FmpqgtHdgu1v2wOErxTzcSTDIQRYQe7bfqAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvav9n49z%2FFaoKN9ircA3IZR9Ai1vNdI0DT7h8JVr8awaSjO6GUA8vPKtriwnLBYmHj6JggGZB%2BnFx7stkwWKXBgZ7TxWGxs2ZfxX1iChW40WF6IWqImVixmRCdzdiy4iX%2F5GVPUCA8bBicTj%2B5uu150pn940vBjT7U2Mevf3v4lEuwmD7CNjV%2F8ZaLVpXD71Nq%2BhW5tDv6Y36Ii2dV5GrV2z3MulAoSEc3LqoHTvYDpUxA3REdv0oZZsqDlkAmhL8pertoJWMy7JpG4r8AnOItB5M3txHvOSvwFSqsQs5Zt8G02LmfTnqBvoKd5ih%2FewJoNvjHv0%2B8IU%2FM9GoG5FBVDB5Ua4MGIWM1XhYcMN2XJJDXC4lXpLXjYPv30m3PYazvhI%2FbvXGvKUdk8krQZoJ2RPXoCaU%2F0%2FmIrGNVICF4WfXGJDtyTyKD%2BwFTmM6IhSsSg6LBnj2lqTmFW%2FGgY%2F%2Bu4zmSGmzqRtye5yD2DGTpCXRQaH%2Frqu7aTuSwvuL5cMEZPg%2BxJlUyxeXTXfppSUbrNclKFON0%2BQyyoFjHU%2FXz6kVqKPOxc6fRnqOyCrGWiO7GQwDuLIOxJYHIpP5YxkgSY%2F1fGiNv89ki8CBY5y1K8vPUaqxzl%2Fm%2Bu5KZV301hhvWN0buKpLnVfq3MN%2FE28QGOqUB3Or6Z7%2FqBZpngZkWlOEP6iDROfhEhP3Tn111iMjIzfIswZb0tM526%2Bl8kBzepYiti0AHt%2F%2FaLaFQGQPJlgm6feTwZYQ7ZWVbxVK%2FO6JSC4rvCEIJMCSDFPP7KhK7h1lLMED0gZJRn7vPgO2p%2BlHNei8GNQCFKyvJx1B6QhnccEeF52gMVtwk04gm6NiryEs4EvE77SO6%2FULuowP6csbJWsnKbO7f&X-Amz-Signature=a166e5c1e20725eb96a725ffafad3b87e5b9eb1e0f48e13c36c3df74739c7d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWXHBE52%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDuaADUXw8rn3LbGetgP6ecC9td3IEI867yjqAb3q6klwIhALqYv%2FO8%2FukZi6atoo4Kje%2Fjtt8e0WuGeZq4P8aeu76RKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqRCz1T83FVLSgqH4q3ANTy%2BlFAKiHgVTwwumaU0sPW6sl7FK1iaXt4f4psxvUtia884iFgS%2Fb0t2i4dDaWxJuuOyiCLSnDWDkG%2FEqh5yE361u4yh6g4596fEv6i%2FvHsTK1m%2B96OtFa1ztTPgS0%2B%2BujWeF72il46DEeqqQUPEBDF8jdzsVjaJvHQUsbqvWQyayXnvQU%2FdWsgC3tw7743NQDstcTB8OZY%2BBLXhNGOTTWkKb5WbExr8w73ZtpIIrtByZJ%2FtG51YeN8%2Fj93Whiv%2Bj%2BFbEwAuAN1LN2ObIcvuFdtaxsj2J2sfHtLwmdfC%2BeZADzo6FrN933XlCl4CiPIBOtBxAANj3ehj6apRk5te4JJNjEVAB4A4UhS7Zqn%2BOZvmTTvubz94VSvTHQSwXH820It28GOrfk%2F2RT6V8ou61aNIFJ11ttUgyWy43y%2BktaFpajDC0G5AbnYldKThgM0%2B%2BWfVGWIfM0etD7CELId1v1fASdHHztyaaElu3XTejxYlSybYklmiBemQUghOWStNIP81sr2YVHSrU9%2FZc15UTRD%2BmtEJ0PcAdvLkzWXvzTTgJhUiyK4yVjNJ3HhBMgay0nMrr3OZXSmdSESpBBhbsZ0%2FjYD9pM7vVAlFoZ7Y2g7IQLQtZPQnNfEq0sjCixNvEBjqkAfodyHxvxiKS5tt3IVKBPZwGI52TAZU6zq8gIOyCWoa65d6%2BNYY%2BHmRGw3zS3EFLpXJqQRgck1qMhzYx611Z03a397gPbsqV%2FfG2ZtbRbgk8603VwTtbEIaUfcuIYGUKosZGnartC6GFmEqgv420x0tv7wDSWISd2VjsEwNVISmd7BQHKBxXlmhntfVezz%2BWWzGNwf%2F9%2BJoQrnxOCN1Rk30kVVEc&X-Amz-Signature=80e22da31d4d7099ac3c8f828081d93ad6c0c39473cd3075fee2d4fd71594558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXOXGVMS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIC9tYuU9hpUWlTWFTH4vhrlyk31SxZbNr%2Ftf3MdBqWxkAiBjA9W054y202hvA4%2BWpsEHCkB3nFbvW%2BsPEb0ptpwqKCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhdDDQDn2xKxDTdKrKtwDo8TTdKtBzGkmWOugOVC29Dk%2Fjq3ZZU3OU6PCSY%2B14TPdiyyVJFJRRtnRfQja6%2B4PXUg9i4hPNh5WS2yl1HfK8l0cIeWfAFm5W%2B0JGght8Eh8zLdxybEWaD9FWQO08yypEWQ4ObbIFclrTxY6kjmPTZgk3NOsbzsHuZR5jXEWPVIZF5Q5uNRFfkN9HeRGhPNp%2BAvkkTPSSVyiUEpt5QASqiX4XwcgwJfvnz0rHVlFDzZWR97Md3FE6hEJaZKynr%2FMgojnVXgsePaIz%2BKWLEKqQ%2FFqrsjXw4PAwO9w8rrYLh2KLTO8V%2FJu25GTyd9jESDsydBtSVE5ZycXi3MTMo1GTs1w1%2FV36K0LY%2BaAxm2THpI5%2Bqtq3qcsuL2ih1K9j93kWRm7bzn8n%2FFZdp9Q6u2%2Fv%2BEQ1%2FC9RTqPQIXLTKsra2kS%2BjFTagSJ81E0VffLpselR%2BSj9QRuwGXsW%2F9wDRwcVsF0q3UX7rNG4lGEMireV%2B26qO%2FfVu7C2g15Z%2BYFs4Y0SSFD6NyG%2FGgDXhXDCyy8K5s9oevmMIORh3aFoJcAnWQIOrIDqMyVA8tTWy9bI%2Fb8SmFUyUcCUamBOzUoT1BDGdthtGhjaHrn9%2FFnqvLRVzpudRCr2XHUhPnrbwIw6cTbxAY6pgGZBLV6CQmRMDMh%2FUIsM9iwsgJXedZF194ilETNf9b%2FhTAo%2F7b9xWe8GVRQSnw7hg8JbCvtA%2BJQ4ThijsSoqOx9PxbViKUlfYRXZs23f%2B9ByekjNdUU58OMMby5dK09j1g2ZW1HjkS2y5bosj28DX%2FDpbG%2FHaoGvZ5conQhEpDAVn8eO3Imgvb4CJw6ycQPWYnq7naURt9LjrsD1ie1D5brOso88Ld%2B&X-Amz-Signature=f47cfce660cf73b2f246f147b29bd2658dbffe5c2bacfd75e3c632a9260848a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWXHBE52%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDuaADUXw8rn3LbGetgP6ecC9td3IEI867yjqAb3q6klwIhALqYv%2FO8%2FukZi6atoo4Kje%2Fjtt8e0WuGeZq4P8aeu76RKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqRCz1T83FVLSgqH4q3ANTy%2BlFAKiHgVTwwumaU0sPW6sl7FK1iaXt4f4psxvUtia884iFgS%2Fb0t2i4dDaWxJuuOyiCLSnDWDkG%2FEqh5yE361u4yh6g4596fEv6i%2FvHsTK1m%2B96OtFa1ztTPgS0%2B%2BujWeF72il46DEeqqQUPEBDF8jdzsVjaJvHQUsbqvWQyayXnvQU%2FdWsgC3tw7743NQDstcTB8OZY%2BBLXhNGOTTWkKb5WbExr8w73ZtpIIrtByZJ%2FtG51YeN8%2Fj93Whiv%2Bj%2BFbEwAuAN1LN2ObIcvuFdtaxsj2J2sfHtLwmdfC%2BeZADzo6FrN933XlCl4CiPIBOtBxAANj3ehj6apRk5te4JJNjEVAB4A4UhS7Zqn%2BOZvmTTvubz94VSvTHQSwXH820It28GOrfk%2F2RT6V8ou61aNIFJ11ttUgyWy43y%2BktaFpajDC0G5AbnYldKThgM0%2B%2BWfVGWIfM0etD7CELId1v1fASdHHztyaaElu3XTejxYlSybYklmiBemQUghOWStNIP81sr2YVHSrU9%2FZc15UTRD%2BmtEJ0PcAdvLkzWXvzTTgJhUiyK4yVjNJ3HhBMgay0nMrr3OZXSmdSESpBBhbsZ0%2FjYD9pM7vVAlFoZ7Y2g7IQLQtZPQnNfEq0sjCixNvEBjqkAfodyHxvxiKS5tt3IVKBPZwGI52TAZU6zq8gIOyCWoa65d6%2BNYY%2BHmRGw3zS3EFLpXJqQRgck1qMhzYx611Z03a397gPbsqV%2FfG2ZtbRbgk8603VwTtbEIaUfcuIYGUKosZGnartC6GFmEqgv420x0tv7wDSWISd2VjsEwNVISmd7BQHKBxXlmhntfVezz%2BWWzGNwf%2F9%2BJoQrnxOCN1Rk30kVVEc&X-Amz-Signature=eeb54eab342d3d838362d3c3b9dbeda1db806f72dd3d5a68edd0db9c73581614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=06de653d938e444bc4295a258a6f9d3a124983db1e2aeae2430b6449db00a88c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWXHBE52%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDuaADUXw8rn3LbGetgP6ecC9td3IEI867yjqAb3q6klwIhALqYv%2FO8%2FukZi6atoo4Kje%2Fjtt8e0WuGeZq4P8aeu76RKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqRCz1T83FVLSgqH4q3ANTy%2BlFAKiHgVTwwumaU0sPW6sl7FK1iaXt4f4psxvUtia884iFgS%2Fb0t2i4dDaWxJuuOyiCLSnDWDkG%2FEqh5yE361u4yh6g4596fEv6i%2FvHsTK1m%2B96OtFa1ztTPgS0%2B%2BujWeF72il46DEeqqQUPEBDF8jdzsVjaJvHQUsbqvWQyayXnvQU%2FdWsgC3tw7743NQDstcTB8OZY%2BBLXhNGOTTWkKb5WbExr8w73ZtpIIrtByZJ%2FtG51YeN8%2Fj93Whiv%2Bj%2BFbEwAuAN1LN2ObIcvuFdtaxsj2J2sfHtLwmdfC%2BeZADzo6FrN933XlCl4CiPIBOtBxAANj3ehj6apRk5te4JJNjEVAB4A4UhS7Zqn%2BOZvmTTvubz94VSvTHQSwXH820It28GOrfk%2F2RT6V8ou61aNIFJ11ttUgyWy43y%2BktaFpajDC0G5AbnYldKThgM0%2B%2BWfVGWIfM0etD7CELId1v1fASdHHztyaaElu3XTejxYlSybYklmiBemQUghOWStNIP81sr2YVHSrU9%2FZc15UTRD%2BmtEJ0PcAdvLkzWXvzTTgJhUiyK4yVjNJ3HhBMgay0nMrr3OZXSmdSESpBBhbsZ0%2FjYD9pM7vVAlFoZ7Y2g7IQLQtZPQnNfEq0sjCixNvEBjqkAfodyHxvxiKS5tt3IVKBPZwGI52TAZU6zq8gIOyCWoa65d6%2BNYY%2BHmRGw3zS3EFLpXJqQRgck1qMhzYx611Z03a397gPbsqV%2FfG2ZtbRbgk8603VwTtbEIaUfcuIYGUKosZGnartC6GFmEqgv420x0tv7wDSWISd2VjsEwNVISmd7BQHKBxXlmhntfVezz%2BWWzGNwf%2F9%2BJoQrnxOCN1Rk30kVVEc&X-Amz-Signature=0ec3f48d8d08638b52f449753f940b75739ec72e43b56ec6350abed9d89abbcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR4UK5NV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDkWN3bkWu96ccU2kLyOSGun6qrdgVI9uuryTP2HIvtwQIgLUd7e97DRD0RjRtgD8wMTaakoLZJbPv%2FarsxTFw3VRcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHZdXe8alA4feQ8eyrcA3CUBD3PP15YlCquEeLeQLrdIuAgKkfGucmDsuUTG%2B5pYeIqpuG%2BS1jvvo%2FOOzAPuIuFu0uMoNTzzgMmMh1HiF3FoXaq%2B1xiShYoprvx%2BA9E0vhuGjCug2bGody6PNNopftxpxTZyj8h8zir9dLa0tYVmyJb74y7YQc%2Fj4E4IJUa%2BwfpMbncFxf2g%2B6w0x%2Bj7gQRqeu%2FMXKMHvlmpbJiDoYPss5%2BDGh%2BKJww8v9Nut0Qz%2FRy97Mz2mrrNZa1y65UDTIt9KlNL1zQResCkfpaJN8qq7Qq70nFXw9SMp7JBmVMVBK3trtpyr8mGONl4OAyHSQ4NFlUNWp57OZ5eOvSPoxHemZJEnXBJecgjGgs56UD4cXis83gK6Y%2BQ27rZcpilUGcgd%2B4bGygVgxEQ2WYsogWGwxg8WOlqaQjUb%2FK7jX%2BN32vPzp%2FTdIHN1eG%2B1V19xNz3QCZT59V2gqN6AQs0C2fOVpURyXsqyzx003ZM2oRLz%2B3FGCCif0813rToaXCfOT4udufLCGJ%2B46U2v2u21xa7UslAmGtAc7p8EFI9bWQijhLECbcpzczB4%2BbsGDaGtf7wEtM3AIc%2B9FB30aS6yGx2mQUcD6wsOn6lP405r0IAjVIMmCKVS8QCakCMJ7E28QGOqUBs7xhoHqJ%2Bh1aCOkxkeKdEO%2FOujGtYFYKEQ94RfzkzgSP5HRmZBvtgYVLWUi9Y%2Fu2nzpTwg8lnOuMu9dIBlJkhLq2ADBNevQFSMA60i4qEmzGcaqUKwHAvJDxE0wjuWWoji%2Fr2ZE%2Fewiy7LoaDdtZrjcrIsIJqIP1xTvm0r1F4Ex7Rnp0A91tQnwJSEe9UdiYFinZ9vESED3HEv02LhEDXHoYjlZL&X-Amz-Signature=b94b9075bf35eb8948bdf1b2e498ec83d16d7c768781d3516e7e8d54d241b385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWXHBE52%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDuaADUXw8rn3LbGetgP6ecC9td3IEI867yjqAb3q6klwIhALqYv%2FO8%2FukZi6atoo4Kje%2Fjtt8e0WuGeZq4P8aeu76RKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqRCz1T83FVLSgqH4q3ANTy%2BlFAKiHgVTwwumaU0sPW6sl7FK1iaXt4f4psxvUtia884iFgS%2Fb0t2i4dDaWxJuuOyiCLSnDWDkG%2FEqh5yE361u4yh6g4596fEv6i%2FvHsTK1m%2B96OtFa1ztTPgS0%2B%2BujWeF72il46DEeqqQUPEBDF8jdzsVjaJvHQUsbqvWQyayXnvQU%2FdWsgC3tw7743NQDstcTB8OZY%2BBLXhNGOTTWkKb5WbExr8w73ZtpIIrtByZJ%2FtG51YeN8%2Fj93Whiv%2Bj%2BFbEwAuAN1LN2ObIcvuFdtaxsj2J2sfHtLwmdfC%2BeZADzo6FrN933XlCl4CiPIBOtBxAANj3ehj6apRk5te4JJNjEVAB4A4UhS7Zqn%2BOZvmTTvubz94VSvTHQSwXH820It28GOrfk%2F2RT6V8ou61aNIFJ11ttUgyWy43y%2BktaFpajDC0G5AbnYldKThgM0%2B%2BWfVGWIfM0etD7CELId1v1fASdHHztyaaElu3XTejxYlSybYklmiBemQUghOWStNIP81sr2YVHSrU9%2FZc15UTRD%2BmtEJ0PcAdvLkzWXvzTTgJhUiyK4yVjNJ3HhBMgay0nMrr3OZXSmdSESpBBhbsZ0%2FjYD9pM7vVAlFoZ7Y2g7IQLQtZPQnNfEq0sjCixNvEBjqkAfodyHxvxiKS5tt3IVKBPZwGI52TAZU6zq8gIOyCWoa65d6%2BNYY%2BHmRGw3zS3EFLpXJqQRgck1qMhzYx611Z03a397gPbsqV%2FfG2ZtbRbgk8603VwTtbEIaUfcuIYGUKosZGnartC6GFmEqgv420x0tv7wDSWISd2VjsEwNVISmd7BQHKBxXlmhntfVezz%2BWWzGNwf%2F9%2BJoQrnxOCN1Rk30kVVEc&X-Amz-Signature=0b2b77daec9e287a613152d624a53c495971e5959c3f528682bdcd5f5ddfd868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627JWD23L%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCSUGMxbuy90%2F5ZaCkp96FEAesP55DxbjDPqvwnV9yyRQIgNBdfFsF%2FT0sRoAHns4%2Fwt8UZzjuJBJ9H2OSPJFy2vHAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqddg6HIBZH2Dkd7CrcA%2F0qVAkcng7aXjiXcv7JPKiP4YTxQPSXpWPmICGJVCsCJGWRQbar0s1ViX7%2BX%2BenT4%2FE5dg3e4n1QL06Bz%2F2waKir%2F4az4Wza7S%2BTYr%2F%2FwZFRxpUmlFZaBRR7ppFAEOi%2BjMSKkZ4ACdI5R7DcGVrTZHM7KBDOamGnZwRoUrr94Vh%2B3NbT6sTWxC3cCoo65CL9JATvU3Z83GxY3kzVOy4NPnHDWzi19%2FYCmpMvmXH%2FkSOsTNhgqz8e9%2F3NPSsAXrG7N7QyAAK7ePayYg2ACRIOIMNNxz5eKGsxz1Dde1NB1ACopqY5e252A0DSLTFHjWkinuVlfXzd%2FIDOaUZ%2Fo2qglF3lwEV60Mo8m53FYIhaXoEbYzc7cWlWEpmGYIDfHHnI9TKfqNZTDTMjqBHoLcMk4EZCmyeQbObVLosjpjjT4P8wupFELyMVIBwx0JTN6f%2B%2FthurRVzWVxVbAHlttezJpMtkxxJ1ten6JAkQx957E%2F1QD8KlgtlDbkohgqbv7PIMjKJZzpS8mx6PjyU0uBuqgbRwicg6R80IQSBbK28a6j5w73FvLRyRYUPmRhjvmlO2758vqTQYklvhRBE1dDZAT2jMnCoF0xejXUiuiSJI01aRu9fNCKRWKjWdtLOMKrE28QGOqUB3Bv3p9yTMUjUlD0i5m%2BgS68onHN3efPAslKpjeDfPAFHFPapk2oSfr9i2aDCVNLDlgXCi32ENekW0VNEQMsmcVBQhAggzmiiX2Qu7k62FT1KHGQ7ecQ%2BnJiEoQpsXxp0mUjTOckaIJpzIG86%2FWj7vsDHtzcEweLEfxsFiA2wIBO3pjd%2BWTy%2BCbo8SbzHMZoJ%2BAycJrZE703Bni9lXjiXy1IS3HDw&X-Amz-Signature=8fbec93310f16bf4884a4b0786f99f74d687eb4099e84708bea5eca6e0b70e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTIFS3ZD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIG7JOkQlpKLgcE9f%2F%2FZX%2Bnj5uc26OLNMZjBNSxwfjN2%2FAiEA1aWSfcoGOp6tIZ0a01NSpIBq%2F13s2y5eWO4EnWRcRsoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTCW0UpUKb%2FEZCu1ircAwTiada%2F5%2BEXNb9N7V8F28RhtGAkP3PJ%2BwunVAOCP3WkPEEIB74hGsjbUszs%2B6wuURwVIC79U3m7g29qpiOkfrC9EDJFO7ebzeVOuDFdHhYt24I9oiuMYNQqt4oF2alR1lW8kqKOJ324%2FYj9nBWz%2BPWOUp5GJ6%2By8gZ%2FArZieL01Q3R2XS6LfS5C4l6oCgjqshUAuktjWE3WnpdHY7JwIIWH6ltEU3wvgVcZ4aceTaj1wH4vJlNDXxMN%2Bo8ruaH1xlZr6ZTGTwhCx78z3gauVYLiqWM4Y%2FLDoUQBzL85P5WOhhGBW5EFTRBvIAU5T1kqzsUedgWWZ6erETr%2F%2ByGruNJdDMOEqLfkgJQWel2kgqqv%2BSqUk2Clu1wqAhpYoEummgGZBD%2F%2FR2Ylrxh9b9SZarCqp1nZo8d%2FAu%2B1EelieCCtHfg%2BHWmc9UoA3fTwRBEBBpWguWlRx6bnqlrW1f30NDt5X7rf%2FYD%2BFZT%2B9K4BJ7B4%2FezUv09%2F0OA7S0R%2FNcizYwUi37aes2eVp3eZJwjnwEwKoQPD%2Fsxi61AZa57I1mDeDU0dgs40Hg99tSgCE7JxCsI5Cv2grMIVGIwrxM%2B%2Binjg02occdo06%2FYROotJD4Bg7WdveIg6BanNXcV7MOfE28QGOqUBN7vz%2FiNb5jLmM8jX2e1VIkn5W1La%2BsOXcDVR%2BX28MGctk%2FYxXZ%2Fz5U6o%2BSyFQ%2BftQgI1MRd12yWTdYfHFhKQakK0TPNCznYAFkG9J3FwRsGZBiwSoH74EHTeeq5rEYFwcyzm52grRWZADU4PbF%2BeW00oaJMRjJqLWB%2FbUV9u9u3ql75XePi%2FVx9jVWrGGUozMT7ZieumEx7BcDYg5udWTTVnGUvP&X-Amz-Signature=6d87a177d72828383dac73efc2edc14c43049166866bf653b1f5cd3dba162332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLETDJOB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCU5sIp8cB3kdbPB0UK1J2UdIuhfD0lQEcjMSOQmlWtwQIgdMgaPXhrywyxtw0cegFHwrl%2FEoYVauqqZd0EQGNDm6UqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJJIvCQ2N%2F6vW06XSrcAyO%2FojJKlQyZUY6rvIlrSY8Xm1Iva1nsnSEATfVjmH4aAQCsNPwx1YVEhqeYqF3Qv2IYLgAyKQfrOTlv9B0bPhi8luN4QIJnNvV9GZahRH772Jvt3uPQLe9NRyNjGBzkoZWYQK8Vhu80eYwWU4yCslbGMW%2F8oxP4up%2BjnHOzjGz6ic2D%2BTPM6gAeHbsna5wXs%2FJVI3XA%2B99YK9d228%2BR1h9LZfhmP54tBbSwwf6tATrnmKWeiA9Rba5CRy7vMvEqrYzWjz0IhT5kqASppzu3qIhjvOfxy8UeqZMJBtUEzSez0nwrQguoHPiTn7SX3mA6Z7AiZADRnDhc8sEJdPZ%2Bd39tr4VqM%2B8zKf6NQkllcWBveMyTPcwsSMup%2BNQuF0v%2F%2FLjZwD6wkFy9R2jZ9mormTUxhYcwdbLD7%2BWONZB%2FscVW99AoaOtrF1S4LYPPwCY6i12J7ElrCWPyKrd5fQq2BG7qK%2FLIn60w0iPohxblOmCB1YEKThKgOOpts6lBmvf5Rhha8S9PlKqpzgJAo7pJOFIuTNAe3O%2BfRV8PFkuPj5kN50fRT08nJT7l7%2BXCqCCeymQVvwEAp5OTaS3LsgfICPlMeBRbKAGMFFMYhoApGlvLcqVuZU%2FsiDrDFmsAMLLE28QGOqUBvIErGjhR6QmpUviTqF8cmE5DT2gmw00Dh46PG4BBGgdSnHGXeHAXsmhXXt7JiY671G4wmOAqIjX4lifQKrfRXYQZamAtM3pm42yp0XMHoFMd2fE7xKDj0pEm6gdD6DBX4NNFua9NVNQE9d3CPsOW9%2BtCpeZy7%2BriYR0gbBuXjBA9Vl1v%2F%2F9aMuBpJ2DhQskfVu33t%2F492J1xQtmfJsGomJuKKDVx&X-Amz-Signature=72b7b05355ed3340e44fc5fe4abe1f613acd79844f6d6424e818b9ea47cf30f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK73BAS5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHKiamIYQbc01XZq9k3L5j7gxfcVcGa5iXDF%2Fiaj0ciJAiEAt1f8ztLxqT1qHgwWZFWFX145Q7xFiVSKnkob7pJ01N0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0%2BU4HcMTEp1wVE4ircA%2FMN7VBTsYrQnKoNSsr4EKjhzwPHaAUqkG0zo5pTP8bGXnfiHzAIQDPGzC1fRTiFBbMaP7SEBbYYxxN5dd3M2ocixVTPrlU5emvg9X4rykCEBtqVM%2FBCqC49Ul%2F1y6aPPt63DByNi6CRp70qwKcM6vUZUSmaWcOuBV%2BybNvaq6Nu31p1cQpCcIVDSV0GNAXWMJQHOZY3H5SHy2Kc9k8MTdBb2ZlFo%2BdBM%2FxTLUQbLDpj17ZBEbsxSHEyxJPr%2FiZo2DgeTGbTaSsr0GRZ8lSqMIgt3fs6pfMjegScoX9bpV4DVLdw1T5ps%2Fc1xi0KgeHeYDWHpZU47xX2390yswGFCiekjf9Uh5axc3jrY0NZXehVrd%2FOW6P2aG0lwrZF%2BoopVZWEKSJWuVqO0lARbcCg6CZ4mvXk3WNtjAhsPJ%2FpBRZV7gjNQDW21kLSGbK5b4ojis2l%2B81jC%2F0TtDOe%2BDLREbQaPat7YjtQNYzQhqQHiS5PjCUdZZUjMx5frhsPbLLvb1sll3L9pCUcfJrtT8JMc9j9MyFbVwCU6z0Z6wBKOXJJebbdXKHo5N%2B55JDhYVv6L6U1Xgxe%2Fp6OiVG7KNCjFe9rK%2FWaYL0rNuqf%2FtabrQmA9MOju%2FB%2FgGf%2F%2BHl%2FMKbK28QGOqUB4M2GP2d9vVKylh9kGfO38y5cVQo3WbnGSzOnV1o%2Fee%2BwFhEQQiJKZ0AxED8M4F5vdcozb3k%2Bge1aAiKayPiM4mkgV9FiL6E%2BwrJ9oQXsyi86HUPOQ2%2FyWgN3BGhZyr5WwpEsPa8kB1f%2FmG%2Fo9Ze%2BXW8JQDbJ44tJD3lvKEA1ncYq0yqnfg0vh6ySTpwlO4OeRqXb57JKHv6E6Bh%2Fd5Fz1Pb8I%2FJi&X-Amz-Signature=1aecd9032fbd1c6c581f834743ff1be2baf29af79df77068500e36166456e9f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFUQ7A4P%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBEkYB2IPuOyAZQEAv%2B3NsUWe1uK0jo4968OvAxnqBmaAiAoCqG%2Fs6fPw%2FlCFzpupxJ0ClbIxdvK5dLAa9yxHH1DZSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAOiAQLJUHlTZa0vrKtwD7ZHt4QlzNs3MbyEl7ct%2BGqP26mWQn9etd9ZUWxEnQMAlzoAvuUrCl0Gnyk7nyYiTtLSU0cF%2FJrODobmFj6C5Dwcfqn1R85mHPuosQuilGHFWTR5p00JS%2F%2FaM9PaBFfBBaouiRZhgIy5sEvVlLqzktm63QsPYTw079iGCWvjOCACWEXk8VLkgBGrA7ZOAb7Dg2gDkF1AEJM5zEY2TlDC4nM4LJC2W3d%2Bv9yzKbYzG0uUG7X5Gz16wwrljBS%2Bmq4gxO1weqYvFbUUwh6pxF5bWWrlsWU0nmPeqKqELByahd55CBi%2F2JGNDX9Zt03vyPG9mhNHUdqtj2BqhMGMOkvqviBMTLalECKsNB2XtfY%2BjnzTmsUbFYbzkpd30udvLATczHz0Jd2zvoN1UgME7hVKCpuzQqN3pQ0B4svKuym458foHdBiL0KUwAxV8kawCD8CaGDalWnEb85%2BuzE5WSUPxY5MXMzBL04nTheC0WwphrMygtcsx0iyo1uCDEBrMUI9%2B%2BWhQHB2%2Bj1jXEbuDhD%2FtJE8hlMwac4hkGj7TyFBheeZoWTvOaZwBdYjgWrVg8sGAb43aG3gjvQJNiJ8zNs%2F9hlOq5%2F7A7IGK0UPD3cnriennKrp52qIHyN7yFO8wy8TbxAY6pgEw3oYQYIiu3JFYjV9b98vJNwJudR83bQH0JxA4ztKWt51U6XcAIEcxw7gmzB5G3Rb6Yq%2Bs5wlar1Wpjutosy4nR1dPya7e2PzcNKEEAQ80RJWZoV7oivjO98%2FvmeGyzS%2BX9T8diZHffIFvMa6b5q8pou4sF1NOeTrtcZhn9D5tp7BpIr83%2BbxMUZIi3P1VrYjLUIvr0DLN0bOXbsHB5v9gU%2FFsEQhN&X-Amz-Signature=61ae26138ae6f05680f56f1d1b841aae1a92451b0cb99366034e0338bfce22a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWXHBE52%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDuaADUXw8rn3LbGetgP6ecC9td3IEI867yjqAb3q6klwIhALqYv%2FO8%2FukZi6atoo4Kje%2Fjtt8e0WuGeZq4P8aeu76RKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqRCz1T83FVLSgqH4q3ANTy%2BlFAKiHgVTwwumaU0sPW6sl7FK1iaXt4f4psxvUtia884iFgS%2Fb0t2i4dDaWxJuuOyiCLSnDWDkG%2FEqh5yE361u4yh6g4596fEv6i%2FvHsTK1m%2B96OtFa1ztTPgS0%2B%2BujWeF72il46DEeqqQUPEBDF8jdzsVjaJvHQUsbqvWQyayXnvQU%2FdWsgC3tw7743NQDstcTB8OZY%2BBLXhNGOTTWkKb5WbExr8w73ZtpIIrtByZJ%2FtG51YeN8%2Fj93Whiv%2Bj%2BFbEwAuAN1LN2ObIcvuFdtaxsj2J2sfHtLwmdfC%2BeZADzo6FrN933XlCl4CiPIBOtBxAANj3ehj6apRk5te4JJNjEVAB4A4UhS7Zqn%2BOZvmTTvubz94VSvTHQSwXH820It28GOrfk%2F2RT6V8ou61aNIFJ11ttUgyWy43y%2BktaFpajDC0G5AbnYldKThgM0%2B%2BWfVGWIfM0etD7CELId1v1fASdHHztyaaElu3XTejxYlSybYklmiBemQUghOWStNIP81sr2YVHSrU9%2FZc15UTRD%2BmtEJ0PcAdvLkzWXvzTTgJhUiyK4yVjNJ3HhBMgay0nMrr3OZXSmdSESpBBhbsZ0%2FjYD9pM7vVAlFoZ7Y2g7IQLQtZPQnNfEq0sjCixNvEBjqkAfodyHxvxiKS5tt3IVKBPZwGI52TAZU6zq8gIOyCWoa65d6%2BNYY%2BHmRGw3zS3EFLpXJqQRgck1qMhzYx611Z03a397gPbsqV%2FfG2ZtbRbgk8603VwTtbEIaUfcuIYGUKosZGnartC6GFmEqgv420x0tv7wDSWISd2VjsEwNVISmd7BQHKBxXlmhntfVezz%2BWWzGNwf%2F9%2BJoQrnxOCN1Rk30kVVEc&X-Amz-Signature=4f96bbf4b7c7a13166e1422dfe16cbff11ed0881e1923351d1f17346cbcdab12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWXHBE52%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDuaADUXw8rn3LbGetgP6ecC9td3IEI867yjqAb3q6klwIhALqYv%2FO8%2FukZi6atoo4Kje%2Fjtt8e0WuGeZq4P8aeu76RKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqRCz1T83FVLSgqH4q3ANTy%2BlFAKiHgVTwwumaU0sPW6sl7FK1iaXt4f4psxvUtia884iFgS%2Fb0t2i4dDaWxJuuOyiCLSnDWDkG%2FEqh5yE361u4yh6g4596fEv6i%2FvHsTK1m%2B96OtFa1ztTPgS0%2B%2BujWeF72il46DEeqqQUPEBDF8jdzsVjaJvHQUsbqvWQyayXnvQU%2FdWsgC3tw7743NQDstcTB8OZY%2BBLXhNGOTTWkKb5WbExr8w73ZtpIIrtByZJ%2FtG51YeN8%2Fj93Whiv%2Bj%2BFbEwAuAN1LN2ObIcvuFdtaxsj2J2sfHtLwmdfC%2BeZADzo6FrN933XlCl4CiPIBOtBxAANj3ehj6apRk5te4JJNjEVAB4A4UhS7Zqn%2BOZvmTTvubz94VSvTHQSwXH820It28GOrfk%2F2RT6V8ou61aNIFJ11ttUgyWy43y%2BktaFpajDC0G5AbnYldKThgM0%2B%2BWfVGWIfM0etD7CELId1v1fASdHHztyaaElu3XTejxYlSybYklmiBemQUghOWStNIP81sr2YVHSrU9%2FZc15UTRD%2BmtEJ0PcAdvLkzWXvzTTgJhUiyK4yVjNJ3HhBMgay0nMrr3OZXSmdSESpBBhbsZ0%2FjYD9pM7vVAlFoZ7Y2g7IQLQtZPQnNfEq0sjCixNvEBjqkAfodyHxvxiKS5tt3IVKBPZwGI52TAZU6zq8gIOyCWoa65d6%2BNYY%2BHmRGw3zS3EFLpXJqQRgck1qMhzYx611Z03a397gPbsqV%2FfG2ZtbRbgk8603VwTtbEIaUfcuIYGUKosZGnartC6GFmEqgv420x0tv7wDSWISd2VjsEwNVISmd7BQHKBxXlmhntfVezz%2BWWzGNwf%2F9%2BJoQrnxOCN1Rk30kVVEc&X-Amz-Signature=b15d653960572294d8d1a421e50d55305fdc6d17ac91377b76f27f8337ac432e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NMQSTH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHBR95O8Sp0mdkZ2uKpqUdR3vULQYj1JtFvVom0vMbyzAiEA5Un1zL0LDYPkap7cQSNFDnn6UgkG%2FLxFbvIw9mULNhIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvY5NA0wEgwksJ9rSrcAy8SD%2By1ych3MAL5ZQ92D3zYOh%2BLVL4Qp3qSHF3jsRe7k4ZgD1k12wEXVYblv27JyJQZI7mRbDF1FqhMc%2BAyNZlS%2BmAzY0AQqxwBJMukcoGiBB0mQHgvUk7EEPzUI8fp%2F2AI9QCVH7eXUdBAeiwv2SKL7zj0e3ux7AGV9Ac7AGNW1KS6w1njRz0eix59kTYqFj6sXW9zgj%2BM7s%2B2zNGMUBPR3ECBZNptFl7ccfg8n25mJnygKU1RVOtE14Xd%2F7eOuHh%2BCDDCuaFPwW5nufRCXP7OUrqghDfB2Q0ALmyylTM4vnSWsJYb7xZ9isDtsLJ27fxlu5S2zp47bxKKPGfkCkoV54TxcDh9%2Bin3xkoKUoWj6hTGYqDx485JLwReeZs51Su7I0mXf14vIlluX7cfeH7y1xjKycBCh9%2F3fiTfsp4PmT1e3bFLzzv74Ydcbn1r5eMOyx7QEkFbMHHoHnlfmVHhnR0JUizSYFmRXlKgBhVyzPFNeMoodQzh12yPfTZpqM2d%2B9RpLuTDwyDBvg1ne0E%2FenXY9TnkE2jemCRh4MXAOXPAAIAu9r55%2BLTyaXpjo92KPqQCgCPZTH0phflblC8A7mhLWqwIcHNxbzocHn2STECbiI63rbFruDOdMPXE28QGOqUBqZ%2BMWdYrMBc7j4zYjdUaxc3MB3gRpDUAPMhUW97nrebMbjG9kOcPxori5E1%2FV5EtuXFMQqQpEYRJBxFgOP1YUrtxcJEj7HCKczVJPOzJxdVuzY6zauN0lVSGOGzULtVYrWsudRp9YiykZQGHFnToDBYY9DqwyNfbTBNDB0arJseeIA5rgpMjWAAsiUs9y8fotbhyvicijRXz%2B7ElxmR676%2BX307E&X-Amz-Signature=616bd748643bd27fa28057d2ec41a3c721367c7cfa20f227988a12da31473112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NMQSTH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHBR95O8Sp0mdkZ2uKpqUdR3vULQYj1JtFvVom0vMbyzAiEA5Un1zL0LDYPkap7cQSNFDnn6UgkG%2FLxFbvIw9mULNhIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvY5NA0wEgwksJ9rSrcAy8SD%2By1ych3MAL5ZQ92D3zYOh%2BLVL4Qp3qSHF3jsRe7k4ZgD1k12wEXVYblv27JyJQZI7mRbDF1FqhMc%2BAyNZlS%2BmAzY0AQqxwBJMukcoGiBB0mQHgvUk7EEPzUI8fp%2F2AI9QCVH7eXUdBAeiwv2SKL7zj0e3ux7AGV9Ac7AGNW1KS6w1njRz0eix59kTYqFj6sXW9zgj%2BM7s%2B2zNGMUBPR3ECBZNptFl7ccfg8n25mJnygKU1RVOtE14Xd%2F7eOuHh%2BCDDCuaFPwW5nufRCXP7OUrqghDfB2Q0ALmyylTM4vnSWsJYb7xZ9isDtsLJ27fxlu5S2zp47bxKKPGfkCkoV54TxcDh9%2Bin3xkoKUoWj6hTGYqDx485JLwReeZs51Su7I0mXf14vIlluX7cfeH7y1xjKycBCh9%2F3fiTfsp4PmT1e3bFLzzv74Ydcbn1r5eMOyx7QEkFbMHHoHnlfmVHhnR0JUizSYFmRXlKgBhVyzPFNeMoodQzh12yPfTZpqM2d%2B9RpLuTDwyDBvg1ne0E%2FenXY9TnkE2jemCRh4MXAOXPAAIAu9r55%2BLTyaXpjo92KPqQCgCPZTH0phflblC8A7mhLWqwIcHNxbzocHn2STECbiI63rbFruDOdMPXE28QGOqUBqZ%2BMWdYrMBc7j4zYjdUaxc3MB3gRpDUAPMhUW97nrebMbjG9kOcPxori5E1%2FV5EtuXFMQqQpEYRJBxFgOP1YUrtxcJEj7HCKczVJPOzJxdVuzY6zauN0lVSGOGzULtVYrWsudRp9YiykZQGHFnToDBYY9DqwyNfbTBNDB0arJseeIA5rgpMjWAAsiUs9y8fotbhyvicijRXz%2B7ElxmR676%2BX307E&X-Amz-Signature=4aedd24d8d8d9b7632be41802a5f112a91f0c5c407f98995c460ecb622a45d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NMQSTH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHBR95O8Sp0mdkZ2uKpqUdR3vULQYj1JtFvVom0vMbyzAiEA5Un1zL0LDYPkap7cQSNFDnn6UgkG%2FLxFbvIw9mULNhIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvY5NA0wEgwksJ9rSrcAy8SD%2By1ych3MAL5ZQ92D3zYOh%2BLVL4Qp3qSHF3jsRe7k4ZgD1k12wEXVYblv27JyJQZI7mRbDF1FqhMc%2BAyNZlS%2BmAzY0AQqxwBJMukcoGiBB0mQHgvUk7EEPzUI8fp%2F2AI9QCVH7eXUdBAeiwv2SKL7zj0e3ux7AGV9Ac7AGNW1KS6w1njRz0eix59kTYqFj6sXW9zgj%2BM7s%2B2zNGMUBPR3ECBZNptFl7ccfg8n25mJnygKU1RVOtE14Xd%2F7eOuHh%2BCDDCuaFPwW5nufRCXP7OUrqghDfB2Q0ALmyylTM4vnSWsJYb7xZ9isDtsLJ27fxlu5S2zp47bxKKPGfkCkoV54TxcDh9%2Bin3xkoKUoWj6hTGYqDx485JLwReeZs51Su7I0mXf14vIlluX7cfeH7y1xjKycBCh9%2F3fiTfsp4PmT1e3bFLzzv74Ydcbn1r5eMOyx7QEkFbMHHoHnlfmVHhnR0JUizSYFmRXlKgBhVyzPFNeMoodQzh12yPfTZpqM2d%2B9RpLuTDwyDBvg1ne0E%2FenXY9TnkE2jemCRh4MXAOXPAAIAu9r55%2BLTyaXpjo92KPqQCgCPZTH0phflblC8A7mhLWqwIcHNxbzocHn2STECbiI63rbFruDOdMPXE28QGOqUBqZ%2BMWdYrMBc7j4zYjdUaxc3MB3gRpDUAPMhUW97nrebMbjG9kOcPxori5E1%2FV5EtuXFMQqQpEYRJBxFgOP1YUrtxcJEj7HCKczVJPOzJxdVuzY6zauN0lVSGOGzULtVYrWsudRp9YiykZQGHFnToDBYY9DqwyNfbTBNDB0arJseeIA5rgpMjWAAsiUs9y8fotbhyvicijRXz%2B7ElxmR676%2BX307E&X-Amz-Signature=936b9853694ad7f8920792d07a6f404936a9ed5630ad777e42f21ea9bb3f2057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NMQSTH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHBR95O8Sp0mdkZ2uKpqUdR3vULQYj1JtFvVom0vMbyzAiEA5Un1zL0LDYPkap7cQSNFDnn6UgkG%2FLxFbvIw9mULNhIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvY5NA0wEgwksJ9rSrcAy8SD%2By1ych3MAL5ZQ92D3zYOh%2BLVL4Qp3qSHF3jsRe7k4ZgD1k12wEXVYblv27JyJQZI7mRbDF1FqhMc%2BAyNZlS%2BmAzY0AQqxwBJMukcoGiBB0mQHgvUk7EEPzUI8fp%2F2AI9QCVH7eXUdBAeiwv2SKL7zj0e3ux7AGV9Ac7AGNW1KS6w1njRz0eix59kTYqFj6sXW9zgj%2BM7s%2B2zNGMUBPR3ECBZNptFl7ccfg8n25mJnygKU1RVOtE14Xd%2F7eOuHh%2BCDDCuaFPwW5nufRCXP7OUrqghDfB2Q0ALmyylTM4vnSWsJYb7xZ9isDtsLJ27fxlu5S2zp47bxKKPGfkCkoV54TxcDh9%2Bin3xkoKUoWj6hTGYqDx485JLwReeZs51Su7I0mXf14vIlluX7cfeH7y1xjKycBCh9%2F3fiTfsp4PmT1e3bFLzzv74Ydcbn1r5eMOyx7QEkFbMHHoHnlfmVHhnR0JUizSYFmRXlKgBhVyzPFNeMoodQzh12yPfTZpqM2d%2B9RpLuTDwyDBvg1ne0E%2FenXY9TnkE2jemCRh4MXAOXPAAIAu9r55%2BLTyaXpjo92KPqQCgCPZTH0phflblC8A7mhLWqwIcHNxbzocHn2STECbiI63rbFruDOdMPXE28QGOqUBqZ%2BMWdYrMBc7j4zYjdUaxc3MB3gRpDUAPMhUW97nrebMbjG9kOcPxori5E1%2FV5EtuXFMQqQpEYRJBxFgOP1YUrtxcJEj7HCKczVJPOzJxdVuzY6zauN0lVSGOGzULtVYrWsudRp9YiykZQGHFnToDBYY9DqwyNfbTBNDB0arJseeIA5rgpMjWAAsiUs9y8fotbhyvicijRXz%2B7ElxmR676%2BX307E&X-Amz-Signature=1c0358fa0e5b51b5f324b8138f238df0712ef364564751cd8a85bb52bf25d589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NMQSTH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHBR95O8Sp0mdkZ2uKpqUdR3vULQYj1JtFvVom0vMbyzAiEA5Un1zL0LDYPkap7cQSNFDnn6UgkG%2FLxFbvIw9mULNhIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvY5NA0wEgwksJ9rSrcAy8SD%2By1ych3MAL5ZQ92D3zYOh%2BLVL4Qp3qSHF3jsRe7k4ZgD1k12wEXVYblv27JyJQZI7mRbDF1FqhMc%2BAyNZlS%2BmAzY0AQqxwBJMukcoGiBB0mQHgvUk7EEPzUI8fp%2F2AI9QCVH7eXUdBAeiwv2SKL7zj0e3ux7AGV9Ac7AGNW1KS6w1njRz0eix59kTYqFj6sXW9zgj%2BM7s%2B2zNGMUBPR3ECBZNptFl7ccfg8n25mJnygKU1RVOtE14Xd%2F7eOuHh%2BCDDCuaFPwW5nufRCXP7OUrqghDfB2Q0ALmyylTM4vnSWsJYb7xZ9isDtsLJ27fxlu5S2zp47bxKKPGfkCkoV54TxcDh9%2Bin3xkoKUoWj6hTGYqDx485JLwReeZs51Su7I0mXf14vIlluX7cfeH7y1xjKycBCh9%2F3fiTfsp4PmT1e3bFLzzv74Ydcbn1r5eMOyx7QEkFbMHHoHnlfmVHhnR0JUizSYFmRXlKgBhVyzPFNeMoodQzh12yPfTZpqM2d%2B9RpLuTDwyDBvg1ne0E%2FenXY9TnkE2jemCRh4MXAOXPAAIAu9r55%2BLTyaXpjo92KPqQCgCPZTH0phflblC8A7mhLWqwIcHNxbzocHn2STECbiI63rbFruDOdMPXE28QGOqUBqZ%2BMWdYrMBc7j4zYjdUaxc3MB3gRpDUAPMhUW97nrebMbjG9kOcPxori5E1%2FV5EtuXFMQqQpEYRJBxFgOP1YUrtxcJEj7HCKczVJPOzJxdVuzY6zauN0lVSGOGzULtVYrWsudRp9YiykZQGHFnToDBYY9DqwyNfbTBNDB0arJseeIA5rgpMjWAAsiUs9y8fotbhyvicijRXz%2B7ElxmR676%2BX307E&X-Amz-Signature=29aff7705819300f53d28431362c8ac0f51fd55c33c2caac68b886d4ca48393b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NMQSTH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHBR95O8Sp0mdkZ2uKpqUdR3vULQYj1JtFvVom0vMbyzAiEA5Un1zL0LDYPkap7cQSNFDnn6UgkG%2FLxFbvIw9mULNhIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvY5NA0wEgwksJ9rSrcAy8SD%2By1ych3MAL5ZQ92D3zYOh%2BLVL4Qp3qSHF3jsRe7k4ZgD1k12wEXVYblv27JyJQZI7mRbDF1FqhMc%2BAyNZlS%2BmAzY0AQqxwBJMukcoGiBB0mQHgvUk7EEPzUI8fp%2F2AI9QCVH7eXUdBAeiwv2SKL7zj0e3ux7AGV9Ac7AGNW1KS6w1njRz0eix59kTYqFj6sXW9zgj%2BM7s%2B2zNGMUBPR3ECBZNptFl7ccfg8n25mJnygKU1RVOtE14Xd%2F7eOuHh%2BCDDCuaFPwW5nufRCXP7OUrqghDfB2Q0ALmyylTM4vnSWsJYb7xZ9isDtsLJ27fxlu5S2zp47bxKKPGfkCkoV54TxcDh9%2Bin3xkoKUoWj6hTGYqDx485JLwReeZs51Su7I0mXf14vIlluX7cfeH7y1xjKycBCh9%2F3fiTfsp4PmT1e3bFLzzv74Ydcbn1r5eMOyx7QEkFbMHHoHnlfmVHhnR0JUizSYFmRXlKgBhVyzPFNeMoodQzh12yPfTZpqM2d%2B9RpLuTDwyDBvg1ne0E%2FenXY9TnkE2jemCRh4MXAOXPAAIAu9r55%2BLTyaXpjo92KPqQCgCPZTH0phflblC8A7mhLWqwIcHNxbzocHn2STECbiI63rbFruDOdMPXE28QGOqUBqZ%2BMWdYrMBc7j4zYjdUaxc3MB3gRpDUAPMhUW97nrebMbjG9kOcPxori5E1%2FV5EtuXFMQqQpEYRJBxFgOP1YUrtxcJEj7HCKczVJPOzJxdVuzY6zauN0lVSGOGzULtVYrWsudRp9YiykZQGHFnToDBYY9DqwyNfbTBNDB0arJseeIA5rgpMjWAAsiUs9y8fotbhyvicijRXz%2B7ElxmR676%2BX307E&X-Amz-Signature=38ab5bb74f3f8f6f32faf537e28641dfc559497287350472b35a480669c0547a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NMQSTH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHBR95O8Sp0mdkZ2uKpqUdR3vULQYj1JtFvVom0vMbyzAiEA5Un1zL0LDYPkap7cQSNFDnn6UgkG%2FLxFbvIw9mULNhIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvY5NA0wEgwksJ9rSrcAy8SD%2By1ych3MAL5ZQ92D3zYOh%2BLVL4Qp3qSHF3jsRe7k4ZgD1k12wEXVYblv27JyJQZI7mRbDF1FqhMc%2BAyNZlS%2BmAzY0AQqxwBJMukcoGiBB0mQHgvUk7EEPzUI8fp%2F2AI9QCVH7eXUdBAeiwv2SKL7zj0e3ux7AGV9Ac7AGNW1KS6w1njRz0eix59kTYqFj6sXW9zgj%2BM7s%2B2zNGMUBPR3ECBZNptFl7ccfg8n25mJnygKU1RVOtE14Xd%2F7eOuHh%2BCDDCuaFPwW5nufRCXP7OUrqghDfB2Q0ALmyylTM4vnSWsJYb7xZ9isDtsLJ27fxlu5S2zp47bxKKPGfkCkoV54TxcDh9%2Bin3xkoKUoWj6hTGYqDx485JLwReeZs51Su7I0mXf14vIlluX7cfeH7y1xjKycBCh9%2F3fiTfsp4PmT1e3bFLzzv74Ydcbn1r5eMOyx7QEkFbMHHoHnlfmVHhnR0JUizSYFmRXlKgBhVyzPFNeMoodQzh12yPfTZpqM2d%2B9RpLuTDwyDBvg1ne0E%2FenXY9TnkE2jemCRh4MXAOXPAAIAu9r55%2BLTyaXpjo92KPqQCgCPZTH0phflblC8A7mhLWqwIcHNxbzocHn2STECbiI63rbFruDOdMPXE28QGOqUBqZ%2BMWdYrMBc7j4zYjdUaxc3MB3gRpDUAPMhUW97nrebMbjG9kOcPxori5E1%2FV5EtuXFMQqQpEYRJBxFgOP1YUrtxcJEj7HCKczVJPOzJxdVuzY6zauN0lVSGOGzULtVYrWsudRp9YiykZQGHFnToDBYY9DqwyNfbTBNDB0arJseeIA5rgpMjWAAsiUs9y8fotbhyvicijRXz%2B7ElxmR676%2BX307E&X-Amz-Signature=936b9853694ad7f8920792d07a6f404936a9ed5630ad777e42f21ea9bb3f2057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NMQSTH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHBR95O8Sp0mdkZ2uKpqUdR3vULQYj1JtFvVom0vMbyzAiEA5Un1zL0LDYPkap7cQSNFDnn6UgkG%2FLxFbvIw9mULNhIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvY5NA0wEgwksJ9rSrcAy8SD%2By1ych3MAL5ZQ92D3zYOh%2BLVL4Qp3qSHF3jsRe7k4ZgD1k12wEXVYblv27JyJQZI7mRbDF1FqhMc%2BAyNZlS%2BmAzY0AQqxwBJMukcoGiBB0mQHgvUk7EEPzUI8fp%2F2AI9QCVH7eXUdBAeiwv2SKL7zj0e3ux7AGV9Ac7AGNW1KS6w1njRz0eix59kTYqFj6sXW9zgj%2BM7s%2B2zNGMUBPR3ECBZNptFl7ccfg8n25mJnygKU1RVOtE14Xd%2F7eOuHh%2BCDDCuaFPwW5nufRCXP7OUrqghDfB2Q0ALmyylTM4vnSWsJYb7xZ9isDtsLJ27fxlu5S2zp47bxKKPGfkCkoV54TxcDh9%2Bin3xkoKUoWj6hTGYqDx485JLwReeZs51Su7I0mXf14vIlluX7cfeH7y1xjKycBCh9%2F3fiTfsp4PmT1e3bFLzzv74Ydcbn1r5eMOyx7QEkFbMHHoHnlfmVHhnR0JUizSYFmRXlKgBhVyzPFNeMoodQzh12yPfTZpqM2d%2B9RpLuTDwyDBvg1ne0E%2FenXY9TnkE2jemCRh4MXAOXPAAIAu9r55%2BLTyaXpjo92KPqQCgCPZTH0phflblC8A7mhLWqwIcHNxbzocHn2STECbiI63rbFruDOdMPXE28QGOqUBqZ%2BMWdYrMBc7j4zYjdUaxc3MB3gRpDUAPMhUW97nrebMbjG9kOcPxori5E1%2FV5EtuXFMQqQpEYRJBxFgOP1YUrtxcJEj7HCKczVJPOzJxdVuzY6zauN0lVSGOGzULtVYrWsudRp9YiykZQGHFnToDBYY9DqwyNfbTBNDB0arJseeIA5rgpMjWAAsiUs9y8fotbhyvicijRXz%2B7ElxmR676%2BX307E&X-Amz-Signature=ddfe3dea545a6c4e53f21c1115c1ce18070829f9032cfd987775cd52dc5a4330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NMQSTH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHBR95O8Sp0mdkZ2uKpqUdR3vULQYj1JtFvVom0vMbyzAiEA5Un1zL0LDYPkap7cQSNFDnn6UgkG%2FLxFbvIw9mULNhIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvY5NA0wEgwksJ9rSrcAy8SD%2By1ych3MAL5ZQ92D3zYOh%2BLVL4Qp3qSHF3jsRe7k4ZgD1k12wEXVYblv27JyJQZI7mRbDF1FqhMc%2BAyNZlS%2BmAzY0AQqxwBJMukcoGiBB0mQHgvUk7EEPzUI8fp%2F2AI9QCVH7eXUdBAeiwv2SKL7zj0e3ux7AGV9Ac7AGNW1KS6w1njRz0eix59kTYqFj6sXW9zgj%2BM7s%2B2zNGMUBPR3ECBZNptFl7ccfg8n25mJnygKU1RVOtE14Xd%2F7eOuHh%2BCDDCuaFPwW5nufRCXP7OUrqghDfB2Q0ALmyylTM4vnSWsJYb7xZ9isDtsLJ27fxlu5S2zp47bxKKPGfkCkoV54TxcDh9%2Bin3xkoKUoWj6hTGYqDx485JLwReeZs51Su7I0mXf14vIlluX7cfeH7y1xjKycBCh9%2F3fiTfsp4PmT1e3bFLzzv74Ydcbn1r5eMOyx7QEkFbMHHoHnlfmVHhnR0JUizSYFmRXlKgBhVyzPFNeMoodQzh12yPfTZpqM2d%2B9RpLuTDwyDBvg1ne0E%2FenXY9TnkE2jemCRh4MXAOXPAAIAu9r55%2BLTyaXpjo92KPqQCgCPZTH0phflblC8A7mhLWqwIcHNxbzocHn2STECbiI63rbFruDOdMPXE28QGOqUBqZ%2BMWdYrMBc7j4zYjdUaxc3MB3gRpDUAPMhUW97nrebMbjG9kOcPxori5E1%2FV5EtuXFMQqQpEYRJBxFgOP1YUrtxcJEj7HCKczVJPOzJxdVuzY6zauN0lVSGOGzULtVYrWsudRp9YiykZQGHFnToDBYY9DqwyNfbTBNDB0arJseeIA5rgpMjWAAsiUs9y8fotbhyvicijRXz%2B7ElxmR676%2BX307E&X-Amz-Signature=45fa5d8dac6781b86e58db1e645fb458d896645e1786e2bff0116a9222a8b4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NMQSTH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHBR95O8Sp0mdkZ2uKpqUdR3vULQYj1JtFvVom0vMbyzAiEA5Un1zL0LDYPkap7cQSNFDnn6UgkG%2FLxFbvIw9mULNhIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvY5NA0wEgwksJ9rSrcAy8SD%2By1ych3MAL5ZQ92D3zYOh%2BLVL4Qp3qSHF3jsRe7k4ZgD1k12wEXVYblv27JyJQZI7mRbDF1FqhMc%2BAyNZlS%2BmAzY0AQqxwBJMukcoGiBB0mQHgvUk7EEPzUI8fp%2F2AI9QCVH7eXUdBAeiwv2SKL7zj0e3ux7AGV9Ac7AGNW1KS6w1njRz0eix59kTYqFj6sXW9zgj%2BM7s%2B2zNGMUBPR3ECBZNptFl7ccfg8n25mJnygKU1RVOtE14Xd%2F7eOuHh%2BCDDCuaFPwW5nufRCXP7OUrqghDfB2Q0ALmyylTM4vnSWsJYb7xZ9isDtsLJ27fxlu5S2zp47bxKKPGfkCkoV54TxcDh9%2Bin3xkoKUoWj6hTGYqDx485JLwReeZs51Su7I0mXf14vIlluX7cfeH7y1xjKycBCh9%2F3fiTfsp4PmT1e3bFLzzv74Ydcbn1r5eMOyx7QEkFbMHHoHnlfmVHhnR0JUizSYFmRXlKgBhVyzPFNeMoodQzh12yPfTZpqM2d%2B9RpLuTDwyDBvg1ne0E%2FenXY9TnkE2jemCRh4MXAOXPAAIAu9r55%2BLTyaXpjo92KPqQCgCPZTH0phflblC8A7mhLWqwIcHNxbzocHn2STECbiI63rbFruDOdMPXE28QGOqUBqZ%2BMWdYrMBc7j4zYjdUaxc3MB3gRpDUAPMhUW97nrebMbjG9kOcPxori5E1%2FV5EtuXFMQqQpEYRJBxFgOP1YUrtxcJEj7HCKczVJPOzJxdVuzY6zauN0lVSGOGzULtVYrWsudRp9YiykZQGHFnToDBYY9DqwyNfbTBNDB0arJseeIA5rgpMjWAAsiUs9y8fotbhyvicijRXz%2B7ElxmR676%2BX307E&X-Amz-Signature=a67acdf075f1eaeaa1d59648914b725f844308f49016e9eee049f355b3594db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
