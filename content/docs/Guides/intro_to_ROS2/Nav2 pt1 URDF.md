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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQS5AD3M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDnXxR3KRoN2%2B1wvdJspN2aOqDvIv3YIubYVNlSlQ77JAiAWgiZBnOLs48K%2BAv2CwR1y1usdsvsakSknJxTGPYOL7Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRMV59wZdeM4E5ZTKKtwDQ4b2MpDNuXOBYiIxzPuJyT4SpgzUDrNjj7YiVO1v%2B0TXvwC9w7%2Fp3ETV7tFvkYDVLU7HLcAd1lUBlsMOYG1XGXAGhf%2BCdjc8dMWkF3I%2B%2By1Ox5cupAIbI9N9s6aRq7HSZi1plLm3TdaAJXAUnQUFdYDfI3MLgkLsQWYdi%2B%2B4NQ7i4TRh5B%2FM3AFA%2BORii3DtOjNrb%2BHjORNna30M2nOsxxM71waxpzNW9U6jsbraKeUqmb%2FrTHBz2ZeZSwZDhmccJPmQ1VqwNRghNnSMFBRqDkOVlGveJDmgK8PTQ2iXNgTxxDkdwmgklQXFhOQltXRBGE1UUg7lDny5MO3MyFkT4MXOUZbOyzqv%2FzOnT5rK%2BmEz98tc6kNU2nohV1%2F2pNsbgTOaUsKiUbYw2jS0o6vEtObD5JveXpVInQwdn5QKDr9F4fwrYtxnnsRbCQ3042sR%2FplQ3Kxci4Isp%2F1hVYmmHftIpzDEF8AYEursOWvWb2Mr9s%2FiGnzcwurslaDn2N%2FyyKsy%2B7zvxwZrFxTMZTwOZmtlGSLKyyCGiVkPC79wA7OaxCeDrcY62736Mx7uT%2Bkw1qMzcXIOQ3Dxe5cLSquj4%2FAYCghhJeswCTjv7cvyfZw9HJQRVEbxZ7igNLowzLX9xAY6pgERO%2BJxYtgV1%2FMjtACS3xpV7mWWGTXiGf6jxOQkX0IdWBEBHvbOvwYocr8sASTuv5QxaF2B3oSmV9TqvUhm8gwjCbLJrvVqHzD1yI%2BEswZ8mx7MLMQCovbPD0aaZ%2Blr1kCLOJsJTACzsMZMX786UjRsMy9wPBuzTPvH5Nik1hwRdaRdcuBTxtTbhTmblWUqiWh1VtXhpq0xUrTWYsN6cXEQrfmDQe9%2B&X-Amz-Signature=55b86d14662f5ff4de66cab80d1423b7dbaf2779e3603b4ae6d56d03ea4592a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQS5AD3M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDnXxR3KRoN2%2B1wvdJspN2aOqDvIv3YIubYVNlSlQ77JAiAWgiZBnOLs48K%2BAv2CwR1y1usdsvsakSknJxTGPYOL7Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRMV59wZdeM4E5ZTKKtwDQ4b2MpDNuXOBYiIxzPuJyT4SpgzUDrNjj7YiVO1v%2B0TXvwC9w7%2Fp3ETV7tFvkYDVLU7HLcAd1lUBlsMOYG1XGXAGhf%2BCdjc8dMWkF3I%2B%2By1Ox5cupAIbI9N9s6aRq7HSZi1plLm3TdaAJXAUnQUFdYDfI3MLgkLsQWYdi%2B%2B4NQ7i4TRh5B%2FM3AFA%2BORii3DtOjNrb%2BHjORNna30M2nOsxxM71waxpzNW9U6jsbraKeUqmb%2FrTHBz2ZeZSwZDhmccJPmQ1VqwNRghNnSMFBRqDkOVlGveJDmgK8PTQ2iXNgTxxDkdwmgklQXFhOQltXRBGE1UUg7lDny5MO3MyFkT4MXOUZbOyzqv%2FzOnT5rK%2BmEz98tc6kNU2nohV1%2F2pNsbgTOaUsKiUbYw2jS0o6vEtObD5JveXpVInQwdn5QKDr9F4fwrYtxnnsRbCQ3042sR%2FplQ3Kxci4Isp%2F1hVYmmHftIpzDEF8AYEursOWvWb2Mr9s%2FiGnzcwurslaDn2N%2FyyKsy%2B7zvxwZrFxTMZTwOZmtlGSLKyyCGiVkPC79wA7OaxCeDrcY62736Mx7uT%2Bkw1qMzcXIOQ3Dxe5cLSquj4%2FAYCghhJeswCTjv7cvyfZw9HJQRVEbxZ7igNLowzLX9xAY6pgERO%2BJxYtgV1%2FMjtACS3xpV7mWWGTXiGf6jxOQkX0IdWBEBHvbOvwYocr8sASTuv5QxaF2B3oSmV9TqvUhm8gwjCbLJrvVqHzD1yI%2BEswZ8mx7MLMQCovbPD0aaZ%2Blr1kCLOJsJTACzsMZMX786UjRsMy9wPBuzTPvH5Nik1hwRdaRdcuBTxtTbhTmblWUqiWh1VtXhpq0xUrTWYsN6cXEQrfmDQe9%2B&X-Amz-Signature=e4035abb62e7422e2cda247f20a2f102e08dbb23f317138157d6bd9fac1e3010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQS5AD3M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDnXxR3KRoN2%2B1wvdJspN2aOqDvIv3YIubYVNlSlQ77JAiAWgiZBnOLs48K%2BAv2CwR1y1usdsvsakSknJxTGPYOL7Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRMV59wZdeM4E5ZTKKtwDQ4b2MpDNuXOBYiIxzPuJyT4SpgzUDrNjj7YiVO1v%2B0TXvwC9w7%2Fp3ETV7tFvkYDVLU7HLcAd1lUBlsMOYG1XGXAGhf%2BCdjc8dMWkF3I%2B%2By1Ox5cupAIbI9N9s6aRq7HSZi1plLm3TdaAJXAUnQUFdYDfI3MLgkLsQWYdi%2B%2B4NQ7i4TRh5B%2FM3AFA%2BORii3DtOjNrb%2BHjORNna30M2nOsxxM71waxpzNW9U6jsbraKeUqmb%2FrTHBz2ZeZSwZDhmccJPmQ1VqwNRghNnSMFBRqDkOVlGveJDmgK8PTQ2iXNgTxxDkdwmgklQXFhOQltXRBGE1UUg7lDny5MO3MyFkT4MXOUZbOyzqv%2FzOnT5rK%2BmEz98tc6kNU2nohV1%2F2pNsbgTOaUsKiUbYw2jS0o6vEtObD5JveXpVInQwdn5QKDr9F4fwrYtxnnsRbCQ3042sR%2FplQ3Kxci4Isp%2F1hVYmmHftIpzDEF8AYEursOWvWb2Mr9s%2FiGnzcwurslaDn2N%2FyyKsy%2B7zvxwZrFxTMZTwOZmtlGSLKyyCGiVkPC79wA7OaxCeDrcY62736Mx7uT%2Bkw1qMzcXIOQ3Dxe5cLSquj4%2FAYCghhJeswCTjv7cvyfZw9HJQRVEbxZ7igNLowzLX9xAY6pgERO%2BJxYtgV1%2FMjtACS3xpV7mWWGTXiGf6jxOQkX0IdWBEBHvbOvwYocr8sASTuv5QxaF2B3oSmV9TqvUhm8gwjCbLJrvVqHzD1yI%2BEswZ8mx7MLMQCovbPD0aaZ%2Blr1kCLOJsJTACzsMZMX786UjRsMy9wPBuzTPvH5Nik1hwRdaRdcuBTxtTbhTmblWUqiWh1VtXhpq0xUrTWYsN6cXEQrfmDQe9%2B&X-Amz-Signature=b4f7173bdc1fbce29420144d31014d478cc388697a175ede29e7c14f85c3cf8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQS5AD3M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDnXxR3KRoN2%2B1wvdJspN2aOqDvIv3YIubYVNlSlQ77JAiAWgiZBnOLs48K%2BAv2CwR1y1usdsvsakSknJxTGPYOL7Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRMV59wZdeM4E5ZTKKtwDQ4b2MpDNuXOBYiIxzPuJyT4SpgzUDrNjj7YiVO1v%2B0TXvwC9w7%2Fp3ETV7tFvkYDVLU7HLcAd1lUBlsMOYG1XGXAGhf%2BCdjc8dMWkF3I%2B%2By1Ox5cupAIbI9N9s6aRq7HSZi1plLm3TdaAJXAUnQUFdYDfI3MLgkLsQWYdi%2B%2B4NQ7i4TRh5B%2FM3AFA%2BORii3DtOjNrb%2BHjORNna30M2nOsxxM71waxpzNW9U6jsbraKeUqmb%2FrTHBz2ZeZSwZDhmccJPmQ1VqwNRghNnSMFBRqDkOVlGveJDmgK8PTQ2iXNgTxxDkdwmgklQXFhOQltXRBGE1UUg7lDny5MO3MyFkT4MXOUZbOyzqv%2FzOnT5rK%2BmEz98tc6kNU2nohV1%2F2pNsbgTOaUsKiUbYw2jS0o6vEtObD5JveXpVInQwdn5QKDr9F4fwrYtxnnsRbCQ3042sR%2FplQ3Kxci4Isp%2F1hVYmmHftIpzDEF8AYEursOWvWb2Mr9s%2FiGnzcwurslaDn2N%2FyyKsy%2B7zvxwZrFxTMZTwOZmtlGSLKyyCGiVkPC79wA7OaxCeDrcY62736Mx7uT%2Bkw1qMzcXIOQ3Dxe5cLSquj4%2FAYCghhJeswCTjv7cvyfZw9HJQRVEbxZ7igNLowzLX9xAY6pgERO%2BJxYtgV1%2FMjtACS3xpV7mWWGTXiGf6jxOQkX0IdWBEBHvbOvwYocr8sASTuv5QxaF2B3oSmV9TqvUhm8gwjCbLJrvVqHzD1yI%2BEswZ8mx7MLMQCovbPD0aaZ%2Blr1kCLOJsJTACzsMZMX786UjRsMy9wPBuzTPvH5Nik1hwRdaRdcuBTxtTbhTmblWUqiWh1VtXhpq0xUrTWYsN6cXEQrfmDQe9%2B&X-Amz-Signature=e5522e077876e31a38aae2a868bfb4e4becef2ad1c260950b7f6bf6949b06102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQS5AD3M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDnXxR3KRoN2%2B1wvdJspN2aOqDvIv3YIubYVNlSlQ77JAiAWgiZBnOLs48K%2BAv2CwR1y1usdsvsakSknJxTGPYOL7Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRMV59wZdeM4E5ZTKKtwDQ4b2MpDNuXOBYiIxzPuJyT4SpgzUDrNjj7YiVO1v%2B0TXvwC9w7%2Fp3ETV7tFvkYDVLU7HLcAd1lUBlsMOYG1XGXAGhf%2BCdjc8dMWkF3I%2B%2By1Ox5cupAIbI9N9s6aRq7HSZi1plLm3TdaAJXAUnQUFdYDfI3MLgkLsQWYdi%2B%2B4NQ7i4TRh5B%2FM3AFA%2BORii3DtOjNrb%2BHjORNna30M2nOsxxM71waxpzNW9U6jsbraKeUqmb%2FrTHBz2ZeZSwZDhmccJPmQ1VqwNRghNnSMFBRqDkOVlGveJDmgK8PTQ2iXNgTxxDkdwmgklQXFhOQltXRBGE1UUg7lDny5MO3MyFkT4MXOUZbOyzqv%2FzOnT5rK%2BmEz98tc6kNU2nohV1%2F2pNsbgTOaUsKiUbYw2jS0o6vEtObD5JveXpVInQwdn5QKDr9F4fwrYtxnnsRbCQ3042sR%2FplQ3Kxci4Isp%2F1hVYmmHftIpzDEF8AYEursOWvWb2Mr9s%2FiGnzcwurslaDn2N%2FyyKsy%2B7zvxwZrFxTMZTwOZmtlGSLKyyCGiVkPC79wA7OaxCeDrcY62736Mx7uT%2Bkw1qMzcXIOQ3Dxe5cLSquj4%2FAYCghhJeswCTjv7cvyfZw9HJQRVEbxZ7igNLowzLX9xAY6pgERO%2BJxYtgV1%2FMjtACS3xpV7mWWGTXiGf6jxOQkX0IdWBEBHvbOvwYocr8sASTuv5QxaF2B3oSmV9TqvUhm8gwjCbLJrvVqHzD1yI%2BEswZ8mx7MLMQCovbPD0aaZ%2Blr1kCLOJsJTACzsMZMX786UjRsMy9wPBuzTPvH5Nik1hwRdaRdcuBTxtTbhTmblWUqiWh1VtXhpq0xUrTWYsN6cXEQrfmDQe9%2B&X-Amz-Signature=9197d5f7b5dac072caa66d618407d6dd8b00dad1dbb9bbf851f37c5911a3aba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQS5AD3M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDnXxR3KRoN2%2B1wvdJspN2aOqDvIv3YIubYVNlSlQ77JAiAWgiZBnOLs48K%2BAv2CwR1y1usdsvsakSknJxTGPYOL7Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRMV59wZdeM4E5ZTKKtwDQ4b2MpDNuXOBYiIxzPuJyT4SpgzUDrNjj7YiVO1v%2B0TXvwC9w7%2Fp3ETV7tFvkYDVLU7HLcAd1lUBlsMOYG1XGXAGhf%2BCdjc8dMWkF3I%2B%2By1Ox5cupAIbI9N9s6aRq7HSZi1plLm3TdaAJXAUnQUFdYDfI3MLgkLsQWYdi%2B%2B4NQ7i4TRh5B%2FM3AFA%2BORii3DtOjNrb%2BHjORNna30M2nOsxxM71waxpzNW9U6jsbraKeUqmb%2FrTHBz2ZeZSwZDhmccJPmQ1VqwNRghNnSMFBRqDkOVlGveJDmgK8PTQ2iXNgTxxDkdwmgklQXFhOQltXRBGE1UUg7lDny5MO3MyFkT4MXOUZbOyzqv%2FzOnT5rK%2BmEz98tc6kNU2nohV1%2F2pNsbgTOaUsKiUbYw2jS0o6vEtObD5JveXpVInQwdn5QKDr9F4fwrYtxnnsRbCQ3042sR%2FplQ3Kxci4Isp%2F1hVYmmHftIpzDEF8AYEursOWvWb2Mr9s%2FiGnzcwurslaDn2N%2FyyKsy%2B7zvxwZrFxTMZTwOZmtlGSLKyyCGiVkPC79wA7OaxCeDrcY62736Mx7uT%2Bkw1qMzcXIOQ3Dxe5cLSquj4%2FAYCghhJeswCTjv7cvyfZw9HJQRVEbxZ7igNLowzLX9xAY6pgERO%2BJxYtgV1%2FMjtACS3xpV7mWWGTXiGf6jxOQkX0IdWBEBHvbOvwYocr8sASTuv5QxaF2B3oSmV9TqvUhm8gwjCbLJrvVqHzD1yI%2BEswZ8mx7MLMQCovbPD0aaZ%2Blr1kCLOJsJTACzsMZMX786UjRsMy9wPBuzTPvH5Nik1hwRdaRdcuBTxtTbhTmblWUqiWh1VtXhpq0xUrTWYsN6cXEQrfmDQe9%2B&X-Amz-Signature=3481e8e7192e2591d33ce93f0377b79e1d7602dd65a268296a828be1b186e3e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQS5AD3M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDnXxR3KRoN2%2B1wvdJspN2aOqDvIv3YIubYVNlSlQ77JAiAWgiZBnOLs48K%2BAv2CwR1y1usdsvsakSknJxTGPYOL7Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRMV59wZdeM4E5ZTKKtwDQ4b2MpDNuXOBYiIxzPuJyT4SpgzUDrNjj7YiVO1v%2B0TXvwC9w7%2Fp3ETV7tFvkYDVLU7HLcAd1lUBlsMOYG1XGXAGhf%2BCdjc8dMWkF3I%2B%2By1Ox5cupAIbI9N9s6aRq7HSZi1plLm3TdaAJXAUnQUFdYDfI3MLgkLsQWYdi%2B%2B4NQ7i4TRh5B%2FM3AFA%2BORii3DtOjNrb%2BHjORNna30M2nOsxxM71waxpzNW9U6jsbraKeUqmb%2FrTHBz2ZeZSwZDhmccJPmQ1VqwNRghNnSMFBRqDkOVlGveJDmgK8PTQ2iXNgTxxDkdwmgklQXFhOQltXRBGE1UUg7lDny5MO3MyFkT4MXOUZbOyzqv%2FzOnT5rK%2BmEz98tc6kNU2nohV1%2F2pNsbgTOaUsKiUbYw2jS0o6vEtObD5JveXpVInQwdn5QKDr9F4fwrYtxnnsRbCQ3042sR%2FplQ3Kxci4Isp%2F1hVYmmHftIpzDEF8AYEursOWvWb2Mr9s%2FiGnzcwurslaDn2N%2FyyKsy%2B7zvxwZrFxTMZTwOZmtlGSLKyyCGiVkPC79wA7OaxCeDrcY62736Mx7uT%2Bkw1qMzcXIOQ3Dxe5cLSquj4%2FAYCghhJeswCTjv7cvyfZw9HJQRVEbxZ7igNLowzLX9xAY6pgERO%2BJxYtgV1%2FMjtACS3xpV7mWWGTXiGf6jxOQkX0IdWBEBHvbOvwYocr8sASTuv5QxaF2B3oSmV9TqvUhm8gwjCbLJrvVqHzD1yI%2BEswZ8mx7MLMQCovbPD0aaZ%2Blr1kCLOJsJTACzsMZMX786UjRsMy9wPBuzTPvH5Nik1hwRdaRdcuBTxtTbhTmblWUqiWh1VtXhpq0xUrTWYsN6cXEQrfmDQe9%2B&X-Amz-Signature=ef4ce1b769b7184b2b6d361a9e6a17f9425ab06abd65e8c9bdad747183a20437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQS5AD3M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDnXxR3KRoN2%2B1wvdJspN2aOqDvIv3YIubYVNlSlQ77JAiAWgiZBnOLs48K%2BAv2CwR1y1usdsvsakSknJxTGPYOL7Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRMV59wZdeM4E5ZTKKtwDQ4b2MpDNuXOBYiIxzPuJyT4SpgzUDrNjj7YiVO1v%2B0TXvwC9w7%2Fp3ETV7tFvkYDVLU7HLcAd1lUBlsMOYG1XGXAGhf%2BCdjc8dMWkF3I%2B%2By1Ox5cupAIbI9N9s6aRq7HSZi1plLm3TdaAJXAUnQUFdYDfI3MLgkLsQWYdi%2B%2B4NQ7i4TRh5B%2FM3AFA%2BORii3DtOjNrb%2BHjORNna30M2nOsxxM71waxpzNW9U6jsbraKeUqmb%2FrTHBz2ZeZSwZDhmccJPmQ1VqwNRghNnSMFBRqDkOVlGveJDmgK8PTQ2iXNgTxxDkdwmgklQXFhOQltXRBGE1UUg7lDny5MO3MyFkT4MXOUZbOyzqv%2FzOnT5rK%2BmEz98tc6kNU2nohV1%2F2pNsbgTOaUsKiUbYw2jS0o6vEtObD5JveXpVInQwdn5QKDr9F4fwrYtxnnsRbCQ3042sR%2FplQ3Kxci4Isp%2F1hVYmmHftIpzDEF8AYEursOWvWb2Mr9s%2FiGnzcwurslaDn2N%2FyyKsy%2B7zvxwZrFxTMZTwOZmtlGSLKyyCGiVkPC79wA7OaxCeDrcY62736Mx7uT%2Bkw1qMzcXIOQ3Dxe5cLSquj4%2FAYCghhJeswCTjv7cvyfZw9HJQRVEbxZ7igNLowzLX9xAY6pgERO%2BJxYtgV1%2FMjtACS3xpV7mWWGTXiGf6jxOQkX0IdWBEBHvbOvwYocr8sASTuv5QxaF2B3oSmV9TqvUhm8gwjCbLJrvVqHzD1yI%2BEswZ8mx7MLMQCovbPD0aaZ%2Blr1kCLOJsJTACzsMZMX786UjRsMy9wPBuzTPvH5Nik1hwRdaRdcuBTxtTbhTmblWUqiWh1VtXhpq0xUrTWYsN6cXEQrfmDQe9%2B&X-Amz-Signature=4376b3ad69a0c643f8349b35507736b5f6708cfa5a3d732a9e4da08bffcbb66c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQS5AD3M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDnXxR3KRoN2%2B1wvdJspN2aOqDvIv3YIubYVNlSlQ77JAiAWgiZBnOLs48K%2BAv2CwR1y1usdsvsakSknJxTGPYOL7Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRMV59wZdeM4E5ZTKKtwDQ4b2MpDNuXOBYiIxzPuJyT4SpgzUDrNjj7YiVO1v%2B0TXvwC9w7%2Fp3ETV7tFvkYDVLU7HLcAd1lUBlsMOYG1XGXAGhf%2BCdjc8dMWkF3I%2B%2By1Ox5cupAIbI9N9s6aRq7HSZi1plLm3TdaAJXAUnQUFdYDfI3MLgkLsQWYdi%2B%2B4NQ7i4TRh5B%2FM3AFA%2BORii3DtOjNrb%2BHjORNna30M2nOsxxM71waxpzNW9U6jsbraKeUqmb%2FrTHBz2ZeZSwZDhmccJPmQ1VqwNRghNnSMFBRqDkOVlGveJDmgK8PTQ2iXNgTxxDkdwmgklQXFhOQltXRBGE1UUg7lDny5MO3MyFkT4MXOUZbOyzqv%2FzOnT5rK%2BmEz98tc6kNU2nohV1%2F2pNsbgTOaUsKiUbYw2jS0o6vEtObD5JveXpVInQwdn5QKDr9F4fwrYtxnnsRbCQ3042sR%2FplQ3Kxci4Isp%2F1hVYmmHftIpzDEF8AYEursOWvWb2Mr9s%2FiGnzcwurslaDn2N%2FyyKsy%2B7zvxwZrFxTMZTwOZmtlGSLKyyCGiVkPC79wA7OaxCeDrcY62736Mx7uT%2Bkw1qMzcXIOQ3Dxe5cLSquj4%2FAYCghhJeswCTjv7cvyfZw9HJQRVEbxZ7igNLowzLX9xAY6pgERO%2BJxYtgV1%2FMjtACS3xpV7mWWGTXiGf6jxOQkX0IdWBEBHvbOvwYocr8sASTuv5QxaF2B3oSmV9TqvUhm8gwjCbLJrvVqHzD1yI%2BEswZ8mx7MLMQCovbPD0aaZ%2Blr1kCLOJsJTACzsMZMX786UjRsMy9wPBuzTPvH5Nik1hwRdaRdcuBTxtTbhTmblWUqiWh1VtXhpq0xUrTWYsN6cXEQrfmDQe9%2B&X-Amz-Signature=14fd780601c3b1b3cb0120be47b742fc6c16860dd774f037b04c73caaa76ae13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQS5AD3M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDnXxR3KRoN2%2B1wvdJspN2aOqDvIv3YIubYVNlSlQ77JAiAWgiZBnOLs48K%2BAv2CwR1y1usdsvsakSknJxTGPYOL7Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRMV59wZdeM4E5ZTKKtwDQ4b2MpDNuXOBYiIxzPuJyT4SpgzUDrNjj7YiVO1v%2B0TXvwC9w7%2Fp3ETV7tFvkYDVLU7HLcAd1lUBlsMOYG1XGXAGhf%2BCdjc8dMWkF3I%2B%2By1Ox5cupAIbI9N9s6aRq7HSZi1plLm3TdaAJXAUnQUFdYDfI3MLgkLsQWYdi%2B%2B4NQ7i4TRh5B%2FM3AFA%2BORii3DtOjNrb%2BHjORNna30M2nOsxxM71waxpzNW9U6jsbraKeUqmb%2FrTHBz2ZeZSwZDhmccJPmQ1VqwNRghNnSMFBRqDkOVlGveJDmgK8PTQ2iXNgTxxDkdwmgklQXFhOQltXRBGE1UUg7lDny5MO3MyFkT4MXOUZbOyzqv%2FzOnT5rK%2BmEz98tc6kNU2nohV1%2F2pNsbgTOaUsKiUbYw2jS0o6vEtObD5JveXpVInQwdn5QKDr9F4fwrYtxnnsRbCQ3042sR%2FplQ3Kxci4Isp%2F1hVYmmHftIpzDEF8AYEursOWvWb2Mr9s%2FiGnzcwurslaDn2N%2FyyKsy%2B7zvxwZrFxTMZTwOZmtlGSLKyyCGiVkPC79wA7OaxCeDrcY62736Mx7uT%2Bkw1qMzcXIOQ3Dxe5cLSquj4%2FAYCghhJeswCTjv7cvyfZw9HJQRVEbxZ7igNLowzLX9xAY6pgERO%2BJxYtgV1%2FMjtACS3xpV7mWWGTXiGf6jxOQkX0IdWBEBHvbOvwYocr8sASTuv5QxaF2B3oSmV9TqvUhm8gwjCbLJrvVqHzD1yI%2BEswZ8mx7MLMQCovbPD0aaZ%2Blr1kCLOJsJTACzsMZMX786UjRsMy9wPBuzTPvH5Nik1hwRdaRdcuBTxtTbhTmblWUqiWh1VtXhpq0xUrTWYsN6cXEQrfmDQe9%2B&X-Amz-Signature=61b4faba33f6ef33151678ce12b130f49baca1d682f0a24c74471d3880e0bf6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4R6YCUY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIDhJO6lC6wpYg%2F6D6vZHvvryT7RcXrqVw9qs1nqTjgqrAiEAtoNUsNspiEUwJU8SnvCFoAVV7GpLoERp1J04v%2B6Lrm8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDNk7WJ9FrWBb0bA1QSrcA6u35XhbwDk5AkUuDDU7dTA5L8J7Z5QiPmCkY00M5LYW9TSIIQepretySqD9HicBz9llLcbTsS0RxL%2BsCWUB%2BtyFcC13q9opy517hn%2FPPun3lxbIg%2FvdFz6hJpNtsefIvGJEsKAB%2BGBUZVtD1hVlZvnXwgXjHcc9Iq83Qtp6sh05R%2Fw7Robon1RG6bgPZn4qn2FnKkSCC%2BBtTO71OojqMzXTHvZrQOystq8jM1VF0H493xEyXqXhXOZ65xLQZD0Nq%2BYbk%2FZjEUoEp9bnVnH9aZe1CS%2BR1fryjrzZSUhEZaNgNZecRWNT69kGqoYpII8mzs2XQHF4xC5lQc5Fp6wuqVBmL5DiuWkzAtzFTobOlwVeZFoXtuncZlqvIYgAnfQC9qiSARoZZ%2BTs855QmJd2IMjyZM2ZyvWSIv%2B2YvFsjzAxBsnswiMr9Wka6prrDSMHs6QqF3YE%2FZJtFnAKXNKTdev7ler%2Bho4QMGC%2BQRETpQ5qhotZTcy1DPJBjbN6vSZKesjSCIBP08edennh4dZamCtAYtxIKAVf7w7w8%2FgAWzEq7vP7xrGfRM2tH%2BMtyNHP9BxRldwx3gziRtQKno%2B4d4szHDntlh%2FIDgWObdmICG6i6nHTHoq7mcKtUoCpMK21%2FcQGOqUBg2A825lNGVtMt%2FrG3F5%2Bvbuq2DW6D%2FeeBfwymXdriw196n34%2BYMk%2BIABzyvPZ%2FQUhkw7hPRuiCe0OauuxsFyKG8vmxcvDrfxfLM0BfPaYIj1%2F5jzZxSZjSBZFp3XsQROVHx6WEzXskzKK521GGF9mO7Zl0J1RlIsDmClz%2FUJxln7UJAGb2ysXX2EUpngOQQaRS5vNwiShcjORH%2F68D0AtTTaRzpC&X-Amz-Signature=9e2c3704a5ff211cf90fd92bff9fd8f099e381b7aee6dc3acc2ef1ea89f54fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWGHPTDB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCDLkg3ISVc6jC6aVcTkrtJ6zgI7%2Fom2354M1v4OPRShQIgT3RsqNA7jhMbRgTeB2RNJ%2BPZbw2TOrasNhAKm1bK91gq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOkeYIh7%2B0A0vAqVDSrcA4fPbwqhNY5IcS6e7MviSCWTfpPzaZvY3rGAAgyQ7IH1%2BUWRV5LBPR6USxlR9ui81Rgl%2BiIED9Ul6i8PUbCDzLr3Gq9LPXOCQGgJwK4DAJn%2FvTtgmAO95olbZ6TcwACJ9ZPhM6OTF8PRIVtqdJ695f5UbQVfIaQd03e9AT8Ks2s3uA0VqpJDSR8Ou8AbrbDh%2FxjV3Amrd4DZwuMGrqgKJwiV6uRZltfZF5qapfEc5wyXVBWtDXaMQZ%2BIOuwGr70IhJQi34r%2FqFX8YhFsC4S80WnF%2F89F0EgIBHAoO2lt6ZQ3Z%2FRTFakA6ZKhoKTDKQSUa0%2FRwSJtzj2L0ZWd6gX4J6RCLESENxOoS7vcufH4FcWwMX9bLQFUsL5l49cXTPI5fREFwnl6%2BgOdFN%2F6Vuxz%2F9VlhwiF%2F3KAbPJsBPBGo8vBHcIJ%2F8SGKG%2FKUHIBW3MJ%2BjAMNj%2F4LWN7GOYInFVqDawxzwIebh7RHy%2BBKNyz77OjXoV55fAtyrrgWbA%2BycvvsHCsuKQnBlYfrVXJep3a%2Fp9mPlB8tt21aZX9xZUaCEhy63OIAX2DfqPQ2JNtihdF9tIDfbMScNsW%2BwcZ7FY9yma%2FZ6rqivfO8BJK0yjPtzuuAseb0spHFupej8hOMK60%2FcQGOqUB1%2BGhRitqusxHlaaYyNwkhanrg4RFR%2B%2FAoUqPRMtOV9IV7%2FRl7mC4qGb5u4e3wz4pYUwfEKIGdSIK%2Fy%2FmMnr8WRzeyJ%2FcNg0iQ0EbtlwC9FO32c7n%2FYRydbUtfTAJXSPQmXz8ULHZCMjE5F%2BEgzIn3CS3GPMLwbAPqXEkDvzxbt4DlMefRQw6onyqX%2BhgeLuTe%2BEXiMCYUoeczhmEms6u3nKptd7G&X-Amz-Signature=3731ebca84732fe4f4efb5684e42641a06212cea6f827db70dd4752801e619d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q42AYPFT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIDNjjolW8c72%2FhT9JlAIK%2B0L6SZb%2FG17qONdY1wz3x8mAiEAvzHmtfJrrUgmLwaOf3TVAuwuA%2BLDyuGpoLxIFSBctHQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAK%2FhkL%2BU%2BbcojSYZircAwOXawdTbCFEKfHFP4R2MXuqv4%2BQaMSa6osx1ifLZl3g%2BDnC50Nxvfst72xgSVWbUA79%2BB1%2BAlNWbVjk%2BPqx6nteAsLVRwIllntmKIdUOthDQm1bPsHC6o81Z4AAlxmZU97USZ5F63FMCv4arqiUw3I0%2FPrtGZXX8ZhzQWK%2BKMdFoSmb0xYtVTpMTZQCXwY60q10rOevlUYHVLjDBK%2FULX0IPODtz07gvUOUkbHa4OrsHqtx%2B6qUzcyiSJWOkZVlvIGmkQQ3USivaU3nGrk3Kd5wBz6Kx2nhJM8MG5i4ymbliYeL1H1vKfJwDNpmkPp7f77ZZ29sVxN2AnWohSk7RzZHP3J8G05gUkd6yuHTw%2FVMfqrQORzElOktLmxRWmL%2BZzc12cECm%2FBEwBBTtyD%2FSn7LTJzh%2BWnio%2BSmIFYwrAjupVUTPjPjmF5WmlH3xHZVANE%2B8mYLVfDFMULUqryGvlS2GaBW2j4R2zq0LenDzHt2SnaEeVv0oEFIQ4FnekPJ4y0UiOac8m%2FH%2FB3C4N9K%2BPoVnhzhBRynisar%2FDFRT%2BEkgjn3fsrhmeT%2BKaXbq3V2cISbmK5ig5ClnE6VNA5tPMLvvqShAkFQXdhFu64zfp7Mvzr4Dbly2t7hgB7YMMC1%2FcQGOqUBI4xq9ptv7KnFawYmcKI3y5MCQbXd%2FxaPOs%2BCoefBbuoU%2BoXt3mfaC9N1lUKmn31ypYe6ndOz1%2FQdSEdZ3NB9f4hgZcHpsSPbKfTbLtEFcKP5QqAs08Wm%2F909Im9839TP3MkUJhkd6XCFPBtgClutCdJS7wdapom4jwWENGDDZdEHzyQ4%2FE6COVU95M0sXacKiYPcCymA89%2FqXo7Cl029G2qL%2FMuR&X-Amz-Signature=174fa35458f326da7118e3208a3bd570a375eea9ec6973b5201ee79a93b870a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQS5AD3M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDnXxR3KRoN2%2B1wvdJspN2aOqDvIv3YIubYVNlSlQ77JAiAWgiZBnOLs48K%2BAv2CwR1y1usdsvsakSknJxTGPYOL7Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRMV59wZdeM4E5ZTKKtwDQ4b2MpDNuXOBYiIxzPuJyT4SpgzUDrNjj7YiVO1v%2B0TXvwC9w7%2Fp3ETV7tFvkYDVLU7HLcAd1lUBlsMOYG1XGXAGhf%2BCdjc8dMWkF3I%2B%2By1Ox5cupAIbI9N9s6aRq7HSZi1plLm3TdaAJXAUnQUFdYDfI3MLgkLsQWYdi%2B%2B4NQ7i4TRh5B%2FM3AFA%2BORii3DtOjNrb%2BHjORNna30M2nOsxxM71waxpzNW9U6jsbraKeUqmb%2FrTHBz2ZeZSwZDhmccJPmQ1VqwNRghNnSMFBRqDkOVlGveJDmgK8PTQ2iXNgTxxDkdwmgklQXFhOQltXRBGE1UUg7lDny5MO3MyFkT4MXOUZbOyzqv%2FzOnT5rK%2BmEz98tc6kNU2nohV1%2F2pNsbgTOaUsKiUbYw2jS0o6vEtObD5JveXpVInQwdn5QKDr9F4fwrYtxnnsRbCQ3042sR%2FplQ3Kxci4Isp%2F1hVYmmHftIpzDEF8AYEursOWvWb2Mr9s%2FiGnzcwurslaDn2N%2FyyKsy%2B7zvxwZrFxTMZTwOZmtlGSLKyyCGiVkPC79wA7OaxCeDrcY62736Mx7uT%2Bkw1qMzcXIOQ3Dxe5cLSquj4%2FAYCghhJeswCTjv7cvyfZw9HJQRVEbxZ7igNLowzLX9xAY6pgERO%2BJxYtgV1%2FMjtACS3xpV7mWWGTXiGf6jxOQkX0IdWBEBHvbOvwYocr8sASTuv5QxaF2B3oSmV9TqvUhm8gwjCbLJrvVqHzD1yI%2BEswZ8mx7MLMQCovbPD0aaZ%2Blr1kCLOJsJTACzsMZMX786UjRsMy9wPBuzTPvH5Nik1hwRdaRdcuBTxtTbhTmblWUqiWh1VtXhpq0xUrTWYsN6cXEQrfmDQe9%2B&X-Amz-Signature=e20be0c73d611c6dd5862c0cabc80ed5c8c3f4bf32d3d8f7b3f108d4ff03b6b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632X2UGB7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQC6bcCorwYI%2BtbUT%2BC9ONqGpq8EJlkFxQTfN%2BSyaYoCgQIhAOiXO3wgZoob0PHj91WKn1AVbIC6E4X10JrUbAAsE1jNKv8DCGEQABoMNjM3NDIzMTgzODA1IgyMl%2F0FR2hEDdqNkFIq3AO55PZJpbBNTqmhKmlEsE4A8NZILW02vP61qRXXinjZA%2Bp%2FYf%2FACy%2Fi2b3HOfo5rC0Wa%2B5h4TwGVQXm%2F5OvCag%2B1TdxRB%2BT%2BFoyUd6GsBlE1GC4ujQFzT0jGg%2FQ3TGMXcDDsup34kphk85W1%2FgE3oOUQtlLfNq%2Bqxphi4DLxodn5ceeb0%2FlFmle28ZFiJZh0YUf7RUEFaRdz8qoxW6%2Fx%2F9cKw8pDLMkWgavnpMtcLR9LsjJ4DLQc1YwtCgMgffau68wi452B7kbmczsXOXIQLAvHEKZUSPsIxm9EYnRAYerTvZtRBxZ%2BB%2F%2BenJCWfQ0SzP9mfwjKXlRusf%2BKL8JLOTJHeNNk9xe0%2BDJuFyGIbg%2BiX7WCcdHfFLE4dI5R53gsOkmN3TI%2BVeD8a2NDtL6hQO%2FBX4K8EPKHMgg2%2BEwz3KCZUtyn9zrNhnAKajkodQdYCzfcfH4X8lD5FamL8%2FuC7sCthJ821uXxH1IQvJyos8pcX0ScjPlB%2BWn51J%2BOBJjynVvT84tnBrVjBe21Ah1D%2Bt5WYn%2BiZzAOEhmKjacV3ST2dTufel%2FkV96tdenAMadoBa78vhwGZs%2BPkbeHkCwocA967NCOnN4QNCn4lDxjNdKAtQh7H6u6OGVr0hdCDC5tf3EBjqkAW8CMczUC9cjCA7q3llsLNepLXSaAD7WuTlW3HI3WCvDHi46%2Ft2iJTxqpDt0zeMNnCY1enLKo%2FA7shnNOLMPoSEZ72SvlCMcOxkiLGjhpyuOUn03kYv2040WUu%2FWgM73zy2boZ%2Ba7%2FAdz4bMEECEV81sKVDqUbofzs7F5NNdKt2o1mkAUD%2FfpvigSCzPRdmFJ6bIS4a4jx57EsczbJHqyq45dtWC&X-Amz-Signature=f1ac4bbc2da49dca96069f092cdf44a077541be979fdca722076211e5eef8aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQS5AD3M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDnXxR3KRoN2%2B1wvdJspN2aOqDvIv3YIubYVNlSlQ77JAiAWgiZBnOLs48K%2BAv2CwR1y1usdsvsakSknJxTGPYOL7Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRMV59wZdeM4E5ZTKKtwDQ4b2MpDNuXOBYiIxzPuJyT4SpgzUDrNjj7YiVO1v%2B0TXvwC9w7%2Fp3ETV7tFvkYDVLU7HLcAd1lUBlsMOYG1XGXAGhf%2BCdjc8dMWkF3I%2B%2By1Ox5cupAIbI9N9s6aRq7HSZi1plLm3TdaAJXAUnQUFdYDfI3MLgkLsQWYdi%2B%2B4NQ7i4TRh5B%2FM3AFA%2BORii3DtOjNrb%2BHjORNna30M2nOsxxM71waxpzNW9U6jsbraKeUqmb%2FrTHBz2ZeZSwZDhmccJPmQ1VqwNRghNnSMFBRqDkOVlGveJDmgK8PTQ2iXNgTxxDkdwmgklQXFhOQltXRBGE1UUg7lDny5MO3MyFkT4MXOUZbOyzqv%2FzOnT5rK%2BmEz98tc6kNU2nohV1%2F2pNsbgTOaUsKiUbYw2jS0o6vEtObD5JveXpVInQwdn5QKDr9F4fwrYtxnnsRbCQ3042sR%2FplQ3Kxci4Isp%2F1hVYmmHftIpzDEF8AYEursOWvWb2Mr9s%2FiGnzcwurslaDn2N%2FyyKsy%2B7zvxwZrFxTMZTwOZmtlGSLKyyCGiVkPC79wA7OaxCeDrcY62736Mx7uT%2Bkw1qMzcXIOQ3Dxe5cLSquj4%2FAYCghhJeswCTjv7cvyfZw9HJQRVEbxZ7igNLowzLX9xAY6pgERO%2BJxYtgV1%2FMjtACS3xpV7mWWGTXiGf6jxOQkX0IdWBEBHvbOvwYocr8sASTuv5QxaF2B3oSmV9TqvUhm8gwjCbLJrvVqHzD1yI%2BEswZ8mx7MLMQCovbPD0aaZ%2Blr1kCLOJsJTACzsMZMX786UjRsMy9wPBuzTPvH5Nik1hwRdaRdcuBTxtTbhTmblWUqiWh1VtXhpq0xUrTWYsN6cXEQrfmDQe9%2B&X-Amz-Signature=cc6e6a8ca92bc7ff37754a024df8203888c56939db41c2742514e20610c94a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOMVVQ7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDSYix%2FCUVJN0YUTPCbmFxpOBz78K%2Bn5In82UrhNObofQIhAIIYd8FoKbhoRbqeZJrRVyvFxZa0ZYc5c0fs09Vt5FjMKv8DCGEQABoMNjM3NDIzMTgzODA1IgwrcZ8egZUMVyQeq2Uq3APLuhBOzHpWyPt3WN2%2B2j4Ju5WboCFW7UqkyQ1RWY4DZ3RA6miuPyZVMUyBz59mN%2FA31Ykxuqee5RGWf4Au5J%2FJY5UEbGQhdK3heK%2BPu33wFtCqaqnoiv%2BUOJg7VOMO5r4P%2FxQw2W4VcJhBGVvZzawty5MVqmOMvfy%2FNxK40GPTo9F2HaX1MrS1NcOgfY4JZygtbGobqdigL4hwWDJ0%2BkLbULPuqfO50LyQD2mCkNUP86yX%2BQiovgkS93EQ%2BHuKRYoGfEEeW0OVUFu9%2BotFnp34Bmm01GAj33RU27wRHd9DWiznRWxq9AO%2F%2BAlFYVY61esiBS9K8iH9gnWfDjiMO80qsHMSei8PE4Bie6%2FWdNfF7acOmU9JuuxJx%2BDQewcOL8mcCwbFtsdprIG6pNo36oopsQ5rVSwIUIFLPYaO1G%2FK3mYovB1fl3ImyMRP%2Bhqqqyq3Htxo3ntIa%2FVAFhz5cI%2FpYPHLnN6jRRbbN%2BufWKHCfOjbLSBcbXmzkrdhOTgZKerjwk4zShFXWsGyyBNs1C%2BPsZ%2Fis4SQr2DJnaCKCABeQYeZxPDSyKYYh0jyxT0Cg5GUHfSJJtpmZIJGCcfUFxYcaNgao4Q1%2Bl5BVm5EkAOQ8zJ%2BP%2B78utslCxavljDLtf3EBjqkAa3sfFY7P49Ozf9aY%2F4Y6%2F9iEuS4GXQWFsBHbT4bsErbbhOIk%2B0liI31z7v3Wy%2FMiR4KpiGEA%2BJI6vqnus8FljizYcRGQ2P6nak0aH4waQ15C5Ma%2BqFY%2Bk7SuslvvLsYdUPScPBgbJ7HNMbKBczYblxUxVY7ZNQsZu08%2BX%2BR%2F4FqfB%2FzATr4hTZucAqtQjEpHl99jrQYPcjVfRYMfj1KefcgnRpc&X-Amz-Signature=e27d629bc04cee7327832ba003201368fa02ab54a359662b5cc39975ec020bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQS5AD3M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDnXxR3KRoN2%2B1wvdJspN2aOqDvIv3YIubYVNlSlQ77JAiAWgiZBnOLs48K%2BAv2CwR1y1usdsvsakSknJxTGPYOL7Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRMV59wZdeM4E5ZTKKtwDQ4b2MpDNuXOBYiIxzPuJyT4SpgzUDrNjj7YiVO1v%2B0TXvwC9w7%2Fp3ETV7tFvkYDVLU7HLcAd1lUBlsMOYG1XGXAGhf%2BCdjc8dMWkF3I%2B%2By1Ox5cupAIbI9N9s6aRq7HSZi1plLm3TdaAJXAUnQUFdYDfI3MLgkLsQWYdi%2B%2B4NQ7i4TRh5B%2FM3AFA%2BORii3DtOjNrb%2BHjORNna30M2nOsxxM71waxpzNW9U6jsbraKeUqmb%2FrTHBz2ZeZSwZDhmccJPmQ1VqwNRghNnSMFBRqDkOVlGveJDmgK8PTQ2iXNgTxxDkdwmgklQXFhOQltXRBGE1UUg7lDny5MO3MyFkT4MXOUZbOyzqv%2FzOnT5rK%2BmEz98tc6kNU2nohV1%2F2pNsbgTOaUsKiUbYw2jS0o6vEtObD5JveXpVInQwdn5QKDr9F4fwrYtxnnsRbCQ3042sR%2FplQ3Kxci4Isp%2F1hVYmmHftIpzDEF8AYEursOWvWb2Mr9s%2FiGnzcwurslaDn2N%2FyyKsy%2B7zvxwZrFxTMZTwOZmtlGSLKyyCGiVkPC79wA7OaxCeDrcY62736Mx7uT%2Bkw1qMzcXIOQ3Dxe5cLSquj4%2FAYCghhJeswCTjv7cvyfZw9HJQRVEbxZ7igNLowzLX9xAY6pgERO%2BJxYtgV1%2FMjtACS3xpV7mWWGTXiGf6jxOQkX0IdWBEBHvbOvwYocr8sASTuv5QxaF2B3oSmV9TqvUhm8gwjCbLJrvVqHzD1yI%2BEswZ8mx7MLMQCovbPD0aaZ%2Blr1kCLOJsJTACzsMZMX786UjRsMy9wPBuzTPvH5Nik1hwRdaRdcuBTxtTbhTmblWUqiWh1VtXhpq0xUrTWYsN6cXEQrfmDQe9%2B&X-Amz-Signature=9669067ef5569ef2334717020dd0706fc3b9c92cde3facd3c226f62793a2c8a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22LFN73%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIDvHzCHVm8kIm0dhbLEnXodSDlb6sBtK2nOu2QyqjuMCAiEAnrAxZPciMIoGpYgq9xIGTuxQW0vN%2F%2Fp85dV4GgvHttsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKjT%2BKrxjQxIkDPFWircA15lgucUOc5eCMwRErlaMLEFV9zOK3zx%2Ffl9m2hMzcADkMT76IitGymGnqDDw7Wgx%2BYLewxXFIC3VE6Dum%2Bdc5DOn3wdTBfWuDfSr4gtJZ%2FH%2BzKkYJSx4SUcQ5HDhNW5As%2BnPjduW%2BX8OjdxiXkXlHrNIS7Mtn1VdSuw5%2BFNO%2FXAVzNA4Dld2os%2BgMNyRNf58cDM3VdhAAo4D2RnGm37bsiMjPARB6Gzo1n8oIeQRmfLfjUq8k7vZOPG8wQz4dCbjyJObGYVBGK7o6ltnMFXlX%2FkhCNzV5cb9d9sOKP3GbOW4Tk6wGWQl2SEkS5pUCwfb4cbkyxNOCpQvbPtEnG%2B7x%2B1sIhlS1sd8wGvwO55KK8QCJVnBkQFBK9n2skHTzAUtYE%2FvFepbiMqhRzR%2FxLI%2FF44zYrfE2uQU6hUighqJMe8pBcLJoAWSFqRBpwZu29ndo4XIcOY7frmoXxrCNcVmeKcyqiQmXC05idORLV5KvQD8DwGEP8BgYwslzCwfWy1HuZhQ2Vmmh3eGX2xdrXX1zhsZN%2BhTaghtHsm4yVpDQT8TI38nqiYBY1jFvkSyEKd%2BSw3YND6rJvXNbPjAXWj0%2BPXSk5fm%2Fo%2FObyt8H2335wBxH4bENQC%2FyXS0DtsMLu0%2FcQGOqUB67VdPhPTJULytFE26RJVO%2BHCLB1gbiI95jnnALJqPPEGCixVI27MBfp0H3R5vhAsW0cuEIJIr1ORtQ5jjkO9azOsHC3kvq6bPopb%2B7hyel2vKKkKxkAKyXxARW%2FkP1RD%2FwfbgStR8sYd1DZHZTJQKmLpV5zK5EMk5sa5O%2B5ZCFFzBZVqL%2F%2FK%2F3fQhirfGBqM40WstWOLupdep0a894myoDsdVApr&X-Amz-Signature=60b24b5e8863b3d4eae698b1eea59341ffe37eed366dd21c218ff19aace85966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQS5AD3M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDnXxR3KRoN2%2B1wvdJspN2aOqDvIv3YIubYVNlSlQ77JAiAWgiZBnOLs48K%2BAv2CwR1y1usdsvsakSknJxTGPYOL7Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRMV59wZdeM4E5ZTKKtwDQ4b2MpDNuXOBYiIxzPuJyT4SpgzUDrNjj7YiVO1v%2B0TXvwC9w7%2Fp3ETV7tFvkYDVLU7HLcAd1lUBlsMOYG1XGXAGhf%2BCdjc8dMWkF3I%2B%2By1Ox5cupAIbI9N9s6aRq7HSZi1plLm3TdaAJXAUnQUFdYDfI3MLgkLsQWYdi%2B%2B4NQ7i4TRh5B%2FM3AFA%2BORii3DtOjNrb%2BHjORNna30M2nOsxxM71waxpzNW9U6jsbraKeUqmb%2FrTHBz2ZeZSwZDhmccJPmQ1VqwNRghNnSMFBRqDkOVlGveJDmgK8PTQ2iXNgTxxDkdwmgklQXFhOQltXRBGE1UUg7lDny5MO3MyFkT4MXOUZbOyzqv%2FzOnT5rK%2BmEz98tc6kNU2nohV1%2F2pNsbgTOaUsKiUbYw2jS0o6vEtObD5JveXpVInQwdn5QKDr9F4fwrYtxnnsRbCQ3042sR%2FplQ3Kxci4Isp%2F1hVYmmHftIpzDEF8AYEursOWvWb2Mr9s%2FiGnzcwurslaDn2N%2FyyKsy%2B7zvxwZrFxTMZTwOZmtlGSLKyyCGiVkPC79wA7OaxCeDrcY62736Mx7uT%2Bkw1qMzcXIOQ3Dxe5cLSquj4%2FAYCghhJeswCTjv7cvyfZw9HJQRVEbxZ7igNLowzLX9xAY6pgERO%2BJxYtgV1%2FMjtACS3xpV7mWWGTXiGf6jxOQkX0IdWBEBHvbOvwYocr8sASTuv5QxaF2B3oSmV9TqvUhm8gwjCbLJrvVqHzD1yI%2BEswZ8mx7MLMQCovbPD0aaZ%2Blr1kCLOJsJTACzsMZMX786UjRsMy9wPBuzTPvH5Nik1hwRdaRdcuBTxtTbhTmblWUqiWh1VtXhpq0xUrTWYsN6cXEQrfmDQe9%2B&X-Amz-Signature=758f6da6f92d37efcc737b9aff2d680f323d071cc00db538987b9fd21e36e9e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6WMBWRM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIAcbfMWuKPrm2uzZkVFFOJk4%2BSkxatiuaK%2BoKcOw6AbGAiEA2Q%2F0nP20gB%2BohX%2BNQTl9a8f37LInFVwJYi86UZlG9u4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDNLaUpBbQLtNUe0w8yrcA9nz7gxGFCEPAXHgsb0VoivOcD%2F1LmFRBOqdv%2By86j91G9JTWjZm%2BtYczM0qi8voFo16YnvqXt0l1W41shuaJYMc360KLkqz3v6dvNKV5bho%2FmVOJXxT6TNkUKzdeVd%2FecxGP39GmFNgmwGISFkiSfknDWkTtX17UY4sfd19FmEUdSrRWMuBuoXXhXxI0q%2FWOhZkiNTCriiuZpfaImSlYEUnOIBA4xacLr0IHop5aHVEjYLL8jToq6kqgTrvyeXjWsr86XC1piiSQG5cOJ6fylZwMMv12zkSfb996b2MQxZxsaemwi6fB6C50LYiE4GZr5d0m1R20%2BAHIFXYumgMjvBYB76NvYt%2BJEVAqhRbzC9E%2FW75tndP3f8XSO%2Bx%2F4OFi%2B5ZpJAMvF0CIqmsvP7nai6hsCd8hZWx%2FD8Y7g0N%2FBJZUURuqzqZixSXUIERFZnzDzYSWf4SYiiMPpdQ%2BzNcQ8Hm4OiuJzugjXXqmupXpXjBCJyYydPFIuLq2EkdBX8W1DZ3M9ZZNLHZpDbYrtz2AxqdiwIh6A0hr8wXBN%2FlcG1hYGQoLm8LVlZCu13Xn6NqW%2FECtkBtc5aQvEhVYE6f1%2BoDlwDQBVidKjtLkheoNFFWPUcwMj27tNohPcXMMMy1%2FcQGOqUBCU9%2FexApgOB6M4eXmC4XSFQPAK42Yisox4i7nIdgiejJXM6gMosdilm2owH74FlggXdiIfl1m5VG53%2FOXJOgUb12fzNDMXO%2BOzPH0MwTa1ge%2BTCURXbwJs8s8yAWytsmVBDUOMJTc5HX2HPXlKt%2BFjU4QIwFfSuiDxtsPHhZzRIp3Z7D5GNod%2FqhzP3P7cV6sz%2BfjW72adtc%2Fc3ckIO8rktVRp72&X-Amz-Signature=e46962e942740af71da54c100bee68f2b76e5e8aa3080aa6a107b5f52c367996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IQ7DG4S%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQC%2FT5xVfUptASRQV1Wd3Mv3bOgI8wMxKxmPgpw8ENJTewIgRJsU0r86I7evKnFP2u5tHqq4ni8EtV1SFYzoZrC796Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDGBlTzVmhmboU%2FzB6SrcA73xlWks2RbY4IHWxBRDhHBF%2F9MewuNLplf%2Bi%2F085v6Kp2rIxf492bCV4DWmp7K3a9%2BEq2f5lQS2aOnjoV%2BhF3F0Wi21FdxxJ%2BmH6XeBpNxl5Qtt3p5%2FKrLoIW8O0nkYSbgsSR9mUjHEeoOa7C5IJ%2B9H9lkrCGfLTirhlpNc3ZumPXcx%2Fcq4tGaIR%2F0W80W9cHZs6Bg5ZEb8icJnsouXCVjd414U2cC%2BJAB%2BQBxcGft7Rn5qeyG73UlVs7e%2Bhsrie1znIjxzrIxbBwdLJX4L2zT88Ng31ZlRY6C%2F5G3Mn8NE9lvTLKLQhZj3o16qUgKjbZ8MrzavFVYVPH3YDpH9ZIxx9zZ2zYXtzJuqUyKQrehzB12Zugo%2Fj%2FHc7l8gbrSn1kF3hzNLFdJ26efdq0HV0Ds7G2WIbnkvddzePqOZJPoyE9AaVSMiXSvlXfckB3u929PhZN0eDZPaz5JUntSzvHabFT9dqsDdnfBLWDiUcYmSUSuDlxA45j4CvR0t95zifp23QquGGIA2785c9EdaiogIjFKJohhz8Ot2MAdSUERgJVKXNybZBArENKWhBQBXVHLLavITuINoXUoGjUqeA7Z7jzrkFDaVlmNNMyux9cDjBeyHvu2tYGbcQXEAMNK0%2FcQGOqUBXp9hwkRb53E51eua2G%2BR%2F%2FHwiZiq4mES3YVFCoVxXIpLwYIfh0DD4PPN5jTebQyCHaxCDDU3J%2FCiev0ada6CurV%2BMraxp8HcvfF2W3DmJiieMmPIqjZjMqu%2Fs2bHlYc%2FCnM%2FcWzgpSM7zZtkjQqQpErkgeGtfy0jpgkb1euB8LlQ0UuQzwxOLBtGWrG9glJaKtwMShJIHiROBtanHLoeeKU1vPjl&X-Amz-Signature=e31f8ca5350abdcf49f6389cbc109f333711b933af366052e979e0460c099782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBNJNFSM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDMXzHcn7jSzsLGUo73Iu6SDPFcf1t7g%2BpTVBtMJ3EbnQIhAN4AtWz9XaMb2fIvZOj7l3KjAxSyeKdnnARoOVljb4PIKv8DCGEQABoMNjM3NDIzMTgzODA1IgwAbwsM0PJa%2Fhp%2F8gkq3APwpBbN9Y94defSKNJEkp%2Bknethp4EJBsijK0jFYfyAwJS6ckuZuU3%2FbG3ShiUSNxexGwfy%2BNAJh6K2WCJxQocPRmY8vDCv2hYFOJ5p69YmHUNNI4IeQtbKQxyhXj4FCnLRXpPrn1tb1%2BeqA4ksp83POoj18oB5U3kLzslywQNeK9ftRBZdy2%2F%2BOjBGzavJjvc0uer7%2Fm7mcE%2B5qdowhzAjcXYmYX3Lhr5qxQkE9DL1wz7XdX8BKgX7FukgKCAnrlkpApZVvo9sasPt1WmhOn3O0aSQNgKC%2BwyYkpJ9H%2FHlFZfHDRHrgeHIy6d8sgB2%2BLkTGazngCp7R%2FMOwiU59ki24%2FQlfRwNVurahr%2FGQ5eA%2FdvmTihuKll4hYy2I2HVMkI2seroctDsorv1hfDOSoHDMxceX2wMz4SGiD9cgTcCQ5tswzW5STjv9A2FJThdConpz8dHYItS09jzuf6FDVedpq7g2QmX12Skb984JoMFEPUhvFBY2FN2AleWAu%2F%2BTfFZG8t%2FG%2FuVOPii%2BIQW4VwP%2Fe3Rf%2BB1Hk7e%2BqnYuVdE%2F4d%2BGeWFU4d7HCmwe5halk1r8uSqLDKXOSttLG8k3hRDlcPnRjnJ%2FEKUejXDkxCmGleV%2FXSS6YXOl40PljCItf3EBjqkAd30LVukmKDCDu6duqm%2BBXofIezVcjGSZhb5otXVdNf9gb32UnOEr6eONEPwOo5RrZWatVyyvCy8m9ZUqvl7N%2Fu1J1OdYagasBYLixXueXX20nTvawslj%2F7CixhnJOTWuB1NW4rMJ7bNQz6wfvXikpOobVFG515FqkzS6ernCRJSy0JcQg5LTAJ5pq9R8hCZKAUoFRq9NX2MO3V8q9h%2FukgCLoih&X-Amz-Signature=7867b06ebf5a1abace71952a828bcbd65cbce30992a587f2c814ea68dc495cff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DOTPHGY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIF%2BywNTAsgrtIIwyKvIE2%2FzYG9%2FCPRaDfN8sj49Aq9ifAiBpSuhglbbGK%2Fdi8zkv%2FfL8xWWn7IJXuGmzcE48BIulYSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM5MAvrXKDJ6TsmJaEKtwDcvolEt%2F1hFCm9Js1GYe0lSRt2zTBnOymEvW8uy7fWaam67cMS1yA3SOxSSXkjR5PaTC1jj4fAIHCQmHM2Rp89qShp1RWgCQjPA%2FEW0POw%2BW5o75gwaDUk81fvrnXHcyuJHb9g4e0jHEB06jWN340OhD8PMUthkPJ6nrYc6BXS7Uo4Os5%2ByH2Snl8G%2BAEPZkjUUXrlFYOtxP5Kdx3P0eN7C9jbi7U5wm7XvUaOeAjo4%2F%2Bm0RlK5s5heIScBkQXsW0%2FtgswkC2iK4Z4eqBGeYjVmIVw8Om4U7OEmL%2BW7aTufunvxokfRNWUf2lPkqvVh%2FeEynrHkzoFmApI0cXVB16wy1TgPGaCZ5xYw%2Blo4KpEofHRYS6B1TwKjAWmUPnD4%2FYDITrUeeIgnBA2FeYpopU0cMQa1Tp%2BEvVG9LORQpMb%2FlvnIzPcnsF2vQgPXjiB2b5Gg%2FeGrQfMh4bMCMjcLYmtlOgQ059%2F40TGCed27l1RtTlwj%2B2RZ2U8TuPkrixVwMKkmUceuB4%2Fy3MYLDcexhhaq4O1%2FbC2jwdoAyIqetfc5Pr0gqjpkikIPqfOkSlaw5FkIbwA2JsgdFHLfar3SMJ4IbAI6Rb6fwz9ekVnTFxGAfdYQxwx1AFLhxkOnQwsbX9xAY6pgHzuaBmMl2t3wAmJnRFpESvb0vqTcH7q4pya47zVCmK6JaZInVNSuyjRRL09fiHGvlqBYsGMoIt%2F9VLhRWMDX2QkXNP2hFrOekAolcSrEe%2Fim9DruPe80G8JT%2BBAYKL0rktTgB7N%2Fhq9rlwuBxeLzBYtW8hI8thx3YBOn6SlhcBK0B0sWYeNEuTL2I43KYDY4y9xa1g6SgT2neUpRKSuKIDk%2F%2Fk7tSi&X-Amz-Signature=661c7e2530e405ef743292cc1ba9a324f38cea9c2d96bdcbf7b7635bb651c44f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFCK34KM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCzjHOnA0Tn39S3JZZgknJNgECXezs91ErY0wpmXEkC8AIgHz8oH%2Ftin1PWmsEFxHkwyqG5084W2cKAcLkj%2Bm2Gua0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBcq6dvTB5OdPicMiircAzAgA1wCuFTVOwXTdBuYdYNWp7A4r6SePywy8eo8idJ5%2BJxNSzKLMSVh1d81lbQ2%2B7FwgIZ5yPe10VnBKHyu0h2umuq5U1YPPwqgOSrdt5KqV%2BTb5JU9tzYx2Vii7mp0SnFPJVSxbmGwwgz3F1kzr4FrdEfRCZURa3eHWEoqmqz%2BwTcsIIpuE8LXg1TInrR2JvS22RXu5gheu4ie4DrgFj5SK0HHPg%2FD%2BvSy44JyMwaId9aBplCXUMeBT97YdGiXLfhzpqrg%2Bc0euN5RCqocp8lMzDVTR1yPV88PQKrYmaVyHmHLOa11Wh%2B8%2Bg8vMA48Wowxu%2B32%2BXh1G5Bg%2FibmmA3PRRtK3bDvYWNp8XsMXpzKsUrEIW9Yp%2BigjRpkPw6h3bpcgTwyMqv%2FSRjg8a3OvBSEWliGJooXmaJQ4HzIsfmyINamt8wTq3wq4jOnLECEF2RFIteDeqMyv1XXyEGNBN3c9z%2BQ1DwSNczw3RVTo9X3dt%2BMpIDnXcFibbo7sOTb879pizymGDbByY0slhMp8ZBVhc6xzgkSPTBncxa32sr5n80%2F1uzc%2B2U6eFTTsKUXH%2Bvci6nkbxyHdi8F1JRRHRmYTsh15I%2FleHf70mUXm9Wv7y%2F%2BtfDtjomBQgPIMNK0%2FcQGOqUB9MxVym8iq5aTjvy1GyZTmtGvaSx5XQcEkWj%2BBUElYJlTojV5FNAy0N%2FJCM5DthX11NQUKpOV09cXyDDqHkgVgGfJAqHTkZ8P0461UIrwrBhm7KpJEs%2BRYcA3Bwl6%2Btaq%2BwGHjhaNkBkq0DhJrXrTRrzfym9EdgapHCniWyOkLsRp3HywHL85DamSPl7iCKfp6XwGp8w2eV5TDWJmHsQ%2BYyOHFms5&X-Amz-Signature=2f8bcd8ccebb5a44a57006950066744ebb6086b51d03da6dc266c177897b6efd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQS5AD3M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDnXxR3KRoN2%2B1wvdJspN2aOqDvIv3YIubYVNlSlQ77JAiAWgiZBnOLs48K%2BAv2CwR1y1usdsvsakSknJxTGPYOL7Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRMV59wZdeM4E5ZTKKtwDQ4b2MpDNuXOBYiIxzPuJyT4SpgzUDrNjj7YiVO1v%2B0TXvwC9w7%2Fp3ETV7tFvkYDVLU7HLcAd1lUBlsMOYG1XGXAGhf%2BCdjc8dMWkF3I%2B%2By1Ox5cupAIbI9N9s6aRq7HSZi1plLm3TdaAJXAUnQUFdYDfI3MLgkLsQWYdi%2B%2B4NQ7i4TRh5B%2FM3AFA%2BORii3DtOjNrb%2BHjORNna30M2nOsxxM71waxpzNW9U6jsbraKeUqmb%2FrTHBz2ZeZSwZDhmccJPmQ1VqwNRghNnSMFBRqDkOVlGveJDmgK8PTQ2iXNgTxxDkdwmgklQXFhOQltXRBGE1UUg7lDny5MO3MyFkT4MXOUZbOyzqv%2FzOnT5rK%2BmEz98tc6kNU2nohV1%2F2pNsbgTOaUsKiUbYw2jS0o6vEtObD5JveXpVInQwdn5QKDr9F4fwrYtxnnsRbCQ3042sR%2FplQ3Kxci4Isp%2F1hVYmmHftIpzDEF8AYEursOWvWb2Mr9s%2FiGnzcwurslaDn2N%2FyyKsy%2B7zvxwZrFxTMZTwOZmtlGSLKyyCGiVkPC79wA7OaxCeDrcY62736Mx7uT%2Bkw1qMzcXIOQ3Dxe5cLSquj4%2FAYCghhJeswCTjv7cvyfZw9HJQRVEbxZ7igNLowzLX9xAY6pgERO%2BJxYtgV1%2FMjtACS3xpV7mWWGTXiGf6jxOQkX0IdWBEBHvbOvwYocr8sASTuv5QxaF2B3oSmV9TqvUhm8gwjCbLJrvVqHzD1yI%2BEswZ8mx7MLMQCovbPD0aaZ%2Blr1kCLOJsJTACzsMZMX786UjRsMy9wPBuzTPvH5Nik1hwRdaRdcuBTxtTbhTmblWUqiWh1VtXhpq0xUrTWYsN6cXEQrfmDQe9%2B&X-Amz-Signature=296525df4ab3f609a2d4af8191c4fbdf838c083ca0e8374f6b7cb6f4732dbcee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQS5AD3M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDnXxR3KRoN2%2B1wvdJspN2aOqDvIv3YIubYVNlSlQ77JAiAWgiZBnOLs48K%2BAv2CwR1y1usdsvsakSknJxTGPYOL7Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRMV59wZdeM4E5ZTKKtwDQ4b2MpDNuXOBYiIxzPuJyT4SpgzUDrNjj7YiVO1v%2B0TXvwC9w7%2Fp3ETV7tFvkYDVLU7HLcAd1lUBlsMOYG1XGXAGhf%2BCdjc8dMWkF3I%2B%2By1Ox5cupAIbI9N9s6aRq7HSZi1plLm3TdaAJXAUnQUFdYDfI3MLgkLsQWYdi%2B%2B4NQ7i4TRh5B%2FM3AFA%2BORii3DtOjNrb%2BHjORNna30M2nOsxxM71waxpzNW9U6jsbraKeUqmb%2FrTHBz2ZeZSwZDhmccJPmQ1VqwNRghNnSMFBRqDkOVlGveJDmgK8PTQ2iXNgTxxDkdwmgklQXFhOQltXRBGE1UUg7lDny5MO3MyFkT4MXOUZbOyzqv%2FzOnT5rK%2BmEz98tc6kNU2nohV1%2F2pNsbgTOaUsKiUbYw2jS0o6vEtObD5JveXpVInQwdn5QKDr9F4fwrYtxnnsRbCQ3042sR%2FplQ3Kxci4Isp%2F1hVYmmHftIpzDEF8AYEursOWvWb2Mr9s%2FiGnzcwurslaDn2N%2FyyKsy%2B7zvxwZrFxTMZTwOZmtlGSLKyyCGiVkPC79wA7OaxCeDrcY62736Mx7uT%2Bkw1qMzcXIOQ3Dxe5cLSquj4%2FAYCghhJeswCTjv7cvyfZw9HJQRVEbxZ7igNLowzLX9xAY6pgERO%2BJxYtgV1%2FMjtACS3xpV7mWWGTXiGf6jxOQkX0IdWBEBHvbOvwYocr8sASTuv5QxaF2B3oSmV9TqvUhm8gwjCbLJrvVqHzD1yI%2BEswZ8mx7MLMQCovbPD0aaZ%2Blr1kCLOJsJTACzsMZMX786UjRsMy9wPBuzTPvH5Nik1hwRdaRdcuBTxtTbhTmblWUqiWh1VtXhpq0xUrTWYsN6cXEQrfmDQe9%2B&X-Amz-Signature=091d8d01deb5ff5d4630d3af4eceab68f97ed19ae89c2db12b68f76ad4cb69d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVQMPJY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICOP4gv7lzBmjs%2FGeeJWJ8%2FhEa0uIv0HRQecB2dwSfTgAiEAuqENfkq%2B9l4ikqwLJMmZnUrPTaSHg36f82eJ52S8Pegq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDcnA9Xy%2FVwlfV4mnyrcA%2FavBlm9UYcSNQqdDVEEwc8cBEe177guNk3Q1%2BYjw%2FreJp%2BoVUvN2MlvELXyKLAa8sTI7LisWRJ7Rudd0GiHRVeUf4NDEC4UHJ43oIeJt37ai8wnLu82acb7jv9so5VHVaMSFdVuiGYpw3x513xz4UkdD30aXiR5YwKfINFuJfRcMQ9JqpG0IZpz7UM81o5WkmbjXfY8k2Xb8DGti2f6dzHcSbk%2FFdpnS9gYrFTE14%2Bhylbtc7jVr64NoqIxSkb5%2F6OB6lkyBGO4u6Np0StJTaA6zErs10daEC4En66JoMQjIzblT7jPd86FmBzzvJJS%2BiB8UOUBhiGhnDphcoMkGlsoNaKNmyAyO7o4ngczVzTNiyb0yfpFgN5R%2BqgiTbKKaQgf1AgPTKl5uStcPLQaOp03PQ8gN2IJ7XbJ04oW0%2F9z1kPp7hrClIuS6Z3N%2Bf2tgp6iXl74PJuVIXPTjemJWmjNaSCEcg8JwRw6x3Cxpur%2FUNn%2F39nBgkaD16JTSV0XosCVcWyI9ZHpI7Ias73QguLNnuIIxBB4zzZ0fIMgmJuLv1HW0oD7suKFFmyvWakP2v%2BgFQGxbu37Gb2zdJ3KfL%2F4O1qL0s%2FjJnz0Hvx%2B1WwxtUiBROYreO8BHUMxMKi1%2FcQGOqUB1OCmQUf9%2BgnPhUUWFU4303oM%2FJ4ruZ5mbHE4XPlM8%2B389%2F7XLRu2iffUGunz7VNWyU0%2FI99Xo42811Kn3w6rf7s%2FS2K88k05WDd8EiftaB5kiNQoBNaLqKjw5o%2BTncrHvXBI2sUWtpHnaoBvsQ509nejak3gnA2Xavf6vkPm4I4q04xqwZRtnVlcEHYM%2B4UOtb9U6LPZnnyUQNr4uaIASnZJiPvR&X-Amz-Signature=dd17530b42df8f0dbd9b6fb25f57e0a60af1a558bf0eff2aedde69dd91365095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVQMPJY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICOP4gv7lzBmjs%2FGeeJWJ8%2FhEa0uIv0HRQecB2dwSfTgAiEAuqENfkq%2B9l4ikqwLJMmZnUrPTaSHg36f82eJ52S8Pegq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDcnA9Xy%2FVwlfV4mnyrcA%2FavBlm9UYcSNQqdDVEEwc8cBEe177guNk3Q1%2BYjw%2FreJp%2BoVUvN2MlvELXyKLAa8sTI7LisWRJ7Rudd0GiHRVeUf4NDEC4UHJ43oIeJt37ai8wnLu82acb7jv9so5VHVaMSFdVuiGYpw3x513xz4UkdD30aXiR5YwKfINFuJfRcMQ9JqpG0IZpz7UM81o5WkmbjXfY8k2Xb8DGti2f6dzHcSbk%2FFdpnS9gYrFTE14%2Bhylbtc7jVr64NoqIxSkb5%2F6OB6lkyBGO4u6Np0StJTaA6zErs10daEC4En66JoMQjIzblT7jPd86FmBzzvJJS%2BiB8UOUBhiGhnDphcoMkGlsoNaKNmyAyO7o4ngczVzTNiyb0yfpFgN5R%2BqgiTbKKaQgf1AgPTKl5uStcPLQaOp03PQ8gN2IJ7XbJ04oW0%2F9z1kPp7hrClIuS6Z3N%2Bf2tgp6iXl74PJuVIXPTjemJWmjNaSCEcg8JwRw6x3Cxpur%2FUNn%2F39nBgkaD16JTSV0XosCVcWyI9ZHpI7Ias73QguLNnuIIxBB4zzZ0fIMgmJuLv1HW0oD7suKFFmyvWakP2v%2BgFQGxbu37Gb2zdJ3KfL%2F4O1qL0s%2FjJnz0Hvx%2B1WwxtUiBROYreO8BHUMxMKi1%2FcQGOqUB1OCmQUf9%2BgnPhUUWFU4303oM%2FJ4ruZ5mbHE4XPlM8%2B389%2F7XLRu2iffUGunz7VNWyU0%2FI99Xo42811Kn3w6rf7s%2FS2K88k05WDd8EiftaB5kiNQoBNaLqKjw5o%2BTncrHvXBI2sUWtpHnaoBvsQ509nejak3gnA2Xavf6vkPm4I4q04xqwZRtnVlcEHYM%2B4UOtb9U6LPZnnyUQNr4uaIASnZJiPvR&X-Amz-Signature=e9b1f62bf97045249f952687c35c80dfb8cf16acb76727404028f20db1872c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVQMPJY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICOP4gv7lzBmjs%2FGeeJWJ8%2FhEa0uIv0HRQecB2dwSfTgAiEAuqENfkq%2B9l4ikqwLJMmZnUrPTaSHg36f82eJ52S8Pegq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDcnA9Xy%2FVwlfV4mnyrcA%2FavBlm9UYcSNQqdDVEEwc8cBEe177guNk3Q1%2BYjw%2FreJp%2BoVUvN2MlvELXyKLAa8sTI7LisWRJ7Rudd0GiHRVeUf4NDEC4UHJ43oIeJt37ai8wnLu82acb7jv9so5VHVaMSFdVuiGYpw3x513xz4UkdD30aXiR5YwKfINFuJfRcMQ9JqpG0IZpz7UM81o5WkmbjXfY8k2Xb8DGti2f6dzHcSbk%2FFdpnS9gYrFTE14%2Bhylbtc7jVr64NoqIxSkb5%2F6OB6lkyBGO4u6Np0StJTaA6zErs10daEC4En66JoMQjIzblT7jPd86FmBzzvJJS%2BiB8UOUBhiGhnDphcoMkGlsoNaKNmyAyO7o4ngczVzTNiyb0yfpFgN5R%2BqgiTbKKaQgf1AgPTKl5uStcPLQaOp03PQ8gN2IJ7XbJ04oW0%2F9z1kPp7hrClIuS6Z3N%2Bf2tgp6iXl74PJuVIXPTjemJWmjNaSCEcg8JwRw6x3Cxpur%2FUNn%2F39nBgkaD16JTSV0XosCVcWyI9ZHpI7Ias73QguLNnuIIxBB4zzZ0fIMgmJuLv1HW0oD7suKFFmyvWakP2v%2BgFQGxbu37Gb2zdJ3KfL%2F4O1qL0s%2FjJnz0Hvx%2B1WwxtUiBROYreO8BHUMxMKi1%2FcQGOqUB1OCmQUf9%2BgnPhUUWFU4303oM%2FJ4ruZ5mbHE4XPlM8%2B389%2F7XLRu2iffUGunz7VNWyU0%2FI99Xo42811Kn3w6rf7s%2FS2K88k05WDd8EiftaB5kiNQoBNaLqKjw5o%2BTncrHvXBI2sUWtpHnaoBvsQ509nejak3gnA2Xavf6vkPm4I4q04xqwZRtnVlcEHYM%2B4UOtb9U6LPZnnyUQNr4uaIASnZJiPvR&X-Amz-Signature=6efcc6e83835e9df732176e012d6a0118e69f10f7d948ca27c0dfe50a543a540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVQMPJY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICOP4gv7lzBmjs%2FGeeJWJ8%2FhEa0uIv0HRQecB2dwSfTgAiEAuqENfkq%2B9l4ikqwLJMmZnUrPTaSHg36f82eJ52S8Pegq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDcnA9Xy%2FVwlfV4mnyrcA%2FavBlm9UYcSNQqdDVEEwc8cBEe177guNk3Q1%2BYjw%2FreJp%2BoVUvN2MlvELXyKLAa8sTI7LisWRJ7Rudd0GiHRVeUf4NDEC4UHJ43oIeJt37ai8wnLu82acb7jv9so5VHVaMSFdVuiGYpw3x513xz4UkdD30aXiR5YwKfINFuJfRcMQ9JqpG0IZpz7UM81o5WkmbjXfY8k2Xb8DGti2f6dzHcSbk%2FFdpnS9gYrFTE14%2Bhylbtc7jVr64NoqIxSkb5%2F6OB6lkyBGO4u6Np0StJTaA6zErs10daEC4En66JoMQjIzblT7jPd86FmBzzvJJS%2BiB8UOUBhiGhnDphcoMkGlsoNaKNmyAyO7o4ngczVzTNiyb0yfpFgN5R%2BqgiTbKKaQgf1AgPTKl5uStcPLQaOp03PQ8gN2IJ7XbJ04oW0%2F9z1kPp7hrClIuS6Z3N%2Bf2tgp6iXl74PJuVIXPTjemJWmjNaSCEcg8JwRw6x3Cxpur%2FUNn%2F39nBgkaD16JTSV0XosCVcWyI9ZHpI7Ias73QguLNnuIIxBB4zzZ0fIMgmJuLv1HW0oD7suKFFmyvWakP2v%2BgFQGxbu37Gb2zdJ3KfL%2F4O1qL0s%2FjJnz0Hvx%2B1WwxtUiBROYreO8BHUMxMKi1%2FcQGOqUB1OCmQUf9%2BgnPhUUWFU4303oM%2FJ4ruZ5mbHE4XPlM8%2B389%2F7XLRu2iffUGunz7VNWyU0%2FI99Xo42811Kn3w6rf7s%2FS2K88k05WDd8EiftaB5kiNQoBNaLqKjw5o%2BTncrHvXBI2sUWtpHnaoBvsQ509nejak3gnA2Xavf6vkPm4I4q04xqwZRtnVlcEHYM%2B4UOtb9U6LPZnnyUQNr4uaIASnZJiPvR&X-Amz-Signature=09bde682e59ed5cf35469b6ed8571909144f6a2b2abf4b83b05815177290fd8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVQMPJY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICOP4gv7lzBmjs%2FGeeJWJ8%2FhEa0uIv0HRQecB2dwSfTgAiEAuqENfkq%2B9l4ikqwLJMmZnUrPTaSHg36f82eJ52S8Pegq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDcnA9Xy%2FVwlfV4mnyrcA%2FavBlm9UYcSNQqdDVEEwc8cBEe177guNk3Q1%2BYjw%2FreJp%2BoVUvN2MlvELXyKLAa8sTI7LisWRJ7Rudd0GiHRVeUf4NDEC4UHJ43oIeJt37ai8wnLu82acb7jv9so5VHVaMSFdVuiGYpw3x513xz4UkdD30aXiR5YwKfINFuJfRcMQ9JqpG0IZpz7UM81o5WkmbjXfY8k2Xb8DGti2f6dzHcSbk%2FFdpnS9gYrFTE14%2Bhylbtc7jVr64NoqIxSkb5%2F6OB6lkyBGO4u6Np0StJTaA6zErs10daEC4En66JoMQjIzblT7jPd86FmBzzvJJS%2BiB8UOUBhiGhnDphcoMkGlsoNaKNmyAyO7o4ngczVzTNiyb0yfpFgN5R%2BqgiTbKKaQgf1AgPTKl5uStcPLQaOp03PQ8gN2IJ7XbJ04oW0%2F9z1kPp7hrClIuS6Z3N%2Bf2tgp6iXl74PJuVIXPTjemJWmjNaSCEcg8JwRw6x3Cxpur%2FUNn%2F39nBgkaD16JTSV0XosCVcWyI9ZHpI7Ias73QguLNnuIIxBB4zzZ0fIMgmJuLv1HW0oD7suKFFmyvWakP2v%2BgFQGxbu37Gb2zdJ3KfL%2F4O1qL0s%2FjJnz0Hvx%2B1WwxtUiBROYreO8BHUMxMKi1%2FcQGOqUB1OCmQUf9%2BgnPhUUWFU4303oM%2FJ4ruZ5mbHE4XPlM8%2B389%2F7XLRu2iffUGunz7VNWyU0%2FI99Xo42811Kn3w6rf7s%2FS2K88k05WDd8EiftaB5kiNQoBNaLqKjw5o%2BTncrHvXBI2sUWtpHnaoBvsQ509nejak3gnA2Xavf6vkPm4I4q04xqwZRtnVlcEHYM%2B4UOtb9U6LPZnnyUQNr4uaIASnZJiPvR&X-Amz-Signature=d28e6e5a6300f5bd752e2d4b62ab87d29f845e6fc20b307784e80621e5dbb9a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVQMPJY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICOP4gv7lzBmjs%2FGeeJWJ8%2FhEa0uIv0HRQecB2dwSfTgAiEAuqENfkq%2B9l4ikqwLJMmZnUrPTaSHg36f82eJ52S8Pegq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDcnA9Xy%2FVwlfV4mnyrcA%2FavBlm9UYcSNQqdDVEEwc8cBEe177guNk3Q1%2BYjw%2FreJp%2BoVUvN2MlvELXyKLAa8sTI7LisWRJ7Rudd0GiHRVeUf4NDEC4UHJ43oIeJt37ai8wnLu82acb7jv9so5VHVaMSFdVuiGYpw3x513xz4UkdD30aXiR5YwKfINFuJfRcMQ9JqpG0IZpz7UM81o5WkmbjXfY8k2Xb8DGti2f6dzHcSbk%2FFdpnS9gYrFTE14%2Bhylbtc7jVr64NoqIxSkb5%2F6OB6lkyBGO4u6Np0StJTaA6zErs10daEC4En66JoMQjIzblT7jPd86FmBzzvJJS%2BiB8UOUBhiGhnDphcoMkGlsoNaKNmyAyO7o4ngczVzTNiyb0yfpFgN5R%2BqgiTbKKaQgf1AgPTKl5uStcPLQaOp03PQ8gN2IJ7XbJ04oW0%2F9z1kPp7hrClIuS6Z3N%2Bf2tgp6iXl74PJuVIXPTjemJWmjNaSCEcg8JwRw6x3Cxpur%2FUNn%2F39nBgkaD16JTSV0XosCVcWyI9ZHpI7Ias73QguLNnuIIxBB4zzZ0fIMgmJuLv1HW0oD7suKFFmyvWakP2v%2BgFQGxbu37Gb2zdJ3KfL%2F4O1qL0s%2FjJnz0Hvx%2B1WwxtUiBROYreO8BHUMxMKi1%2FcQGOqUB1OCmQUf9%2BgnPhUUWFU4303oM%2FJ4ruZ5mbHE4XPlM8%2B389%2F7XLRu2iffUGunz7VNWyU0%2FI99Xo42811Kn3w6rf7s%2FS2K88k05WDd8EiftaB5kiNQoBNaLqKjw5o%2BTncrHvXBI2sUWtpHnaoBvsQ509nejak3gnA2Xavf6vkPm4I4q04xqwZRtnVlcEHYM%2B4UOtb9U6LPZnnyUQNr4uaIASnZJiPvR&X-Amz-Signature=10e88d90328b953e53a0d1890140f2241146eb100472a18c29d1f44a29d05e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVQMPJY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICOP4gv7lzBmjs%2FGeeJWJ8%2FhEa0uIv0HRQecB2dwSfTgAiEAuqENfkq%2B9l4ikqwLJMmZnUrPTaSHg36f82eJ52S8Pegq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDcnA9Xy%2FVwlfV4mnyrcA%2FavBlm9UYcSNQqdDVEEwc8cBEe177guNk3Q1%2BYjw%2FreJp%2BoVUvN2MlvELXyKLAa8sTI7LisWRJ7Rudd0GiHRVeUf4NDEC4UHJ43oIeJt37ai8wnLu82acb7jv9so5VHVaMSFdVuiGYpw3x513xz4UkdD30aXiR5YwKfINFuJfRcMQ9JqpG0IZpz7UM81o5WkmbjXfY8k2Xb8DGti2f6dzHcSbk%2FFdpnS9gYrFTE14%2Bhylbtc7jVr64NoqIxSkb5%2F6OB6lkyBGO4u6Np0StJTaA6zErs10daEC4En66JoMQjIzblT7jPd86FmBzzvJJS%2BiB8UOUBhiGhnDphcoMkGlsoNaKNmyAyO7o4ngczVzTNiyb0yfpFgN5R%2BqgiTbKKaQgf1AgPTKl5uStcPLQaOp03PQ8gN2IJ7XbJ04oW0%2F9z1kPp7hrClIuS6Z3N%2Bf2tgp6iXl74PJuVIXPTjemJWmjNaSCEcg8JwRw6x3Cxpur%2FUNn%2F39nBgkaD16JTSV0XosCVcWyI9ZHpI7Ias73QguLNnuIIxBB4zzZ0fIMgmJuLv1HW0oD7suKFFmyvWakP2v%2BgFQGxbu37Gb2zdJ3KfL%2F4O1qL0s%2FjJnz0Hvx%2B1WwxtUiBROYreO8BHUMxMKi1%2FcQGOqUB1OCmQUf9%2BgnPhUUWFU4303oM%2FJ4ruZ5mbHE4XPlM8%2B389%2F7XLRu2iffUGunz7VNWyU0%2FI99Xo42811Kn3w6rf7s%2FS2K88k05WDd8EiftaB5kiNQoBNaLqKjw5o%2BTncrHvXBI2sUWtpHnaoBvsQ509nejak3gnA2Xavf6vkPm4I4q04xqwZRtnVlcEHYM%2B4UOtb9U6LPZnnyUQNr4uaIASnZJiPvR&X-Amz-Signature=6efcc6e83835e9df732176e012d6a0118e69f10f7d948ca27c0dfe50a543a540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVQMPJY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICOP4gv7lzBmjs%2FGeeJWJ8%2FhEa0uIv0HRQecB2dwSfTgAiEAuqENfkq%2B9l4ikqwLJMmZnUrPTaSHg36f82eJ52S8Pegq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDcnA9Xy%2FVwlfV4mnyrcA%2FavBlm9UYcSNQqdDVEEwc8cBEe177guNk3Q1%2BYjw%2FreJp%2BoVUvN2MlvELXyKLAa8sTI7LisWRJ7Rudd0GiHRVeUf4NDEC4UHJ43oIeJt37ai8wnLu82acb7jv9so5VHVaMSFdVuiGYpw3x513xz4UkdD30aXiR5YwKfINFuJfRcMQ9JqpG0IZpz7UM81o5WkmbjXfY8k2Xb8DGti2f6dzHcSbk%2FFdpnS9gYrFTE14%2Bhylbtc7jVr64NoqIxSkb5%2F6OB6lkyBGO4u6Np0StJTaA6zErs10daEC4En66JoMQjIzblT7jPd86FmBzzvJJS%2BiB8UOUBhiGhnDphcoMkGlsoNaKNmyAyO7o4ngczVzTNiyb0yfpFgN5R%2BqgiTbKKaQgf1AgPTKl5uStcPLQaOp03PQ8gN2IJ7XbJ04oW0%2F9z1kPp7hrClIuS6Z3N%2Bf2tgp6iXl74PJuVIXPTjemJWmjNaSCEcg8JwRw6x3Cxpur%2FUNn%2F39nBgkaD16JTSV0XosCVcWyI9ZHpI7Ias73QguLNnuIIxBB4zzZ0fIMgmJuLv1HW0oD7suKFFmyvWakP2v%2BgFQGxbu37Gb2zdJ3KfL%2F4O1qL0s%2FjJnz0Hvx%2B1WwxtUiBROYreO8BHUMxMKi1%2FcQGOqUB1OCmQUf9%2BgnPhUUWFU4303oM%2FJ4ruZ5mbHE4XPlM8%2B389%2F7XLRu2iffUGunz7VNWyU0%2FI99Xo42811Kn3w6rf7s%2FS2K88k05WDd8EiftaB5kiNQoBNaLqKjw5o%2BTncrHvXBI2sUWtpHnaoBvsQ509nejak3gnA2Xavf6vkPm4I4q04xqwZRtnVlcEHYM%2B4UOtb9U6LPZnnyUQNr4uaIASnZJiPvR&X-Amz-Signature=fbe6897eb31b37f703fe1e444ef5c9c387a13256098d5aba9384f3991cace3b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVQMPJY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICOP4gv7lzBmjs%2FGeeJWJ8%2FhEa0uIv0HRQecB2dwSfTgAiEAuqENfkq%2B9l4ikqwLJMmZnUrPTaSHg36f82eJ52S8Pegq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDcnA9Xy%2FVwlfV4mnyrcA%2FavBlm9UYcSNQqdDVEEwc8cBEe177guNk3Q1%2BYjw%2FreJp%2BoVUvN2MlvELXyKLAa8sTI7LisWRJ7Rudd0GiHRVeUf4NDEC4UHJ43oIeJt37ai8wnLu82acb7jv9so5VHVaMSFdVuiGYpw3x513xz4UkdD30aXiR5YwKfINFuJfRcMQ9JqpG0IZpz7UM81o5WkmbjXfY8k2Xb8DGti2f6dzHcSbk%2FFdpnS9gYrFTE14%2Bhylbtc7jVr64NoqIxSkb5%2F6OB6lkyBGO4u6Np0StJTaA6zErs10daEC4En66JoMQjIzblT7jPd86FmBzzvJJS%2BiB8UOUBhiGhnDphcoMkGlsoNaKNmyAyO7o4ngczVzTNiyb0yfpFgN5R%2BqgiTbKKaQgf1AgPTKl5uStcPLQaOp03PQ8gN2IJ7XbJ04oW0%2F9z1kPp7hrClIuS6Z3N%2Bf2tgp6iXl74PJuVIXPTjemJWmjNaSCEcg8JwRw6x3Cxpur%2FUNn%2F39nBgkaD16JTSV0XosCVcWyI9ZHpI7Ias73QguLNnuIIxBB4zzZ0fIMgmJuLv1HW0oD7suKFFmyvWakP2v%2BgFQGxbu37Gb2zdJ3KfL%2F4O1qL0s%2FjJnz0Hvx%2B1WwxtUiBROYreO8BHUMxMKi1%2FcQGOqUB1OCmQUf9%2BgnPhUUWFU4303oM%2FJ4ruZ5mbHE4XPlM8%2B389%2F7XLRu2iffUGunz7VNWyU0%2FI99Xo42811Kn3w6rf7s%2FS2K88k05WDd8EiftaB5kiNQoBNaLqKjw5o%2BTncrHvXBI2sUWtpHnaoBvsQ509nejak3gnA2Xavf6vkPm4I4q04xqwZRtnVlcEHYM%2B4UOtb9U6LPZnnyUQNr4uaIASnZJiPvR&X-Amz-Signature=caa64de3362828f11619e1cdf9c70ab14320a6674741ee470e0f8cfa000e47ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVQMPJY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICOP4gv7lzBmjs%2FGeeJWJ8%2FhEa0uIv0HRQecB2dwSfTgAiEAuqENfkq%2B9l4ikqwLJMmZnUrPTaSHg36f82eJ52S8Pegq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDcnA9Xy%2FVwlfV4mnyrcA%2FavBlm9UYcSNQqdDVEEwc8cBEe177guNk3Q1%2BYjw%2FreJp%2BoVUvN2MlvELXyKLAa8sTI7LisWRJ7Rudd0GiHRVeUf4NDEC4UHJ43oIeJt37ai8wnLu82acb7jv9so5VHVaMSFdVuiGYpw3x513xz4UkdD30aXiR5YwKfINFuJfRcMQ9JqpG0IZpz7UM81o5WkmbjXfY8k2Xb8DGti2f6dzHcSbk%2FFdpnS9gYrFTE14%2Bhylbtc7jVr64NoqIxSkb5%2F6OB6lkyBGO4u6Np0StJTaA6zErs10daEC4En66JoMQjIzblT7jPd86FmBzzvJJS%2BiB8UOUBhiGhnDphcoMkGlsoNaKNmyAyO7o4ngczVzTNiyb0yfpFgN5R%2BqgiTbKKaQgf1AgPTKl5uStcPLQaOp03PQ8gN2IJ7XbJ04oW0%2F9z1kPp7hrClIuS6Z3N%2Bf2tgp6iXl74PJuVIXPTjemJWmjNaSCEcg8JwRw6x3Cxpur%2FUNn%2F39nBgkaD16JTSV0XosCVcWyI9ZHpI7Ias73QguLNnuIIxBB4zzZ0fIMgmJuLv1HW0oD7suKFFmyvWakP2v%2BgFQGxbu37Gb2zdJ3KfL%2F4O1qL0s%2FjJnz0Hvx%2B1WwxtUiBROYreO8BHUMxMKi1%2FcQGOqUB1OCmQUf9%2BgnPhUUWFU4303oM%2FJ4ruZ5mbHE4XPlM8%2B389%2F7XLRu2iffUGunz7VNWyU0%2FI99Xo42811Kn3w6rf7s%2FS2K88k05WDd8EiftaB5kiNQoBNaLqKjw5o%2BTncrHvXBI2sUWtpHnaoBvsQ509nejak3gnA2Xavf6vkPm4I4q04xqwZRtnVlcEHYM%2B4UOtb9U6LPZnnyUQNr4uaIASnZJiPvR&X-Amz-Signature=ad7caa824641e2bae7e7f9a5f52320fddc1d4096f04a995aadb68ff8dfc1b903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
