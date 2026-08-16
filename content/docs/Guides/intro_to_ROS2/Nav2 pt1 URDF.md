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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQ6PIDC%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDZkxESUwmpOdP7uO9f7wz3PCIOxeZTxBxSxSKMR1%2BnPgIhALAeLZS0b9EATuE4Rd1QWOL0SfogKoUeMNQPMSr4cac%2BKv8DCCAQABoMNjM3NDIzMTgzODA1Igx9iwbXY%2BTiFxdfv1gq3APXW3RQsHfdigUJTLjSQB9hFufqgrRc3Im7BMyePP5vx1oJ1sN%2FEwGtLbdjKvlakb%2F8gs3Rg7xT5ygEeW2ZwUgYXke%2Bmjg%2BDUIup8D31iuCZ2qPwA8vnPEY%2Bz%2Bp%2BS2mT%2Bix3BhdYc3aZR5Ii5YHGjUpHeBDKaVkogEmAJFUWk1xx5rMMJhpxy3S9aYJzQDWXqZloUZgEDEXg%2FpesMc3xY3saXC4P8pabnqRGfkNhZj1rLDqcBbKtmaTTidT18Z3qC%2FMoVCNJS8R%2B591MSLwNs4JaTnf2FHvE9krHKeK2i15jKsGa5dOP8OZwo4vWGe%2B8idT%2BCMVzIaRG4RlwWpzOGNCkoUVKoq6Hxw%2BgCC84eqlRjRD6bQVpiaPoGatAo0x%2FCuafKxfpFPMNx6B9RX%2Bam%2FCGHjkYnP%2FuO0%2FA%2BO1JUixugkHoD9kRot2Q5Vjq4sCTWSm5wAurvOREnOy3QbmIcLpOSXeiUnOaoohpDHEX6zUQ243KMXaQyGf4HCF%2ByYJgjmgHn93JWMqboOKz%2FVXfKHsgcJfLAHt1jrkh%2BnKsyYfjPDl8tNVrfqXlyfu7HicByYPosEPFABXe7CecqY2eC7jDHiglZe%2FeeOEOPHM2%2Fy%2FklVPLsrXM9%2FGXChzHzCP64PUBjqkAWWBPRqW3XfiBeaHGyjDj9kb%2Ba%2FIJgqNQxXSgvz%2BfWkmHFXQXVmWGfOtdE6Ofil9kitaI6%2BotL5l1UJwcLvEH74WYf6xkLCnHrrg%2BgExLOX6aSIjczfne16z9bqyxUsEFXafGwKtpetojsA6ARSlkK0Y9FRZWsPgwI5VY74JK9SBCOnZ1m%2FbMxJR2hFhmzRGfggaOtvoTr4yRl5TCgind4oGWxWs&X-Amz-Signature=c9824493c78a4b733efff4208d801f860d19efd579b414ac4c8b485830d10362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQ6PIDC%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDZkxESUwmpOdP7uO9f7wz3PCIOxeZTxBxSxSKMR1%2BnPgIhALAeLZS0b9EATuE4Rd1QWOL0SfogKoUeMNQPMSr4cac%2BKv8DCCAQABoMNjM3NDIzMTgzODA1Igx9iwbXY%2BTiFxdfv1gq3APXW3RQsHfdigUJTLjSQB9hFufqgrRc3Im7BMyePP5vx1oJ1sN%2FEwGtLbdjKvlakb%2F8gs3Rg7xT5ygEeW2ZwUgYXke%2Bmjg%2BDUIup8D31iuCZ2qPwA8vnPEY%2Bz%2Bp%2BS2mT%2Bix3BhdYc3aZR5Ii5YHGjUpHeBDKaVkogEmAJFUWk1xx5rMMJhpxy3S9aYJzQDWXqZloUZgEDEXg%2FpesMc3xY3saXC4P8pabnqRGfkNhZj1rLDqcBbKtmaTTidT18Z3qC%2FMoVCNJS8R%2B591MSLwNs4JaTnf2FHvE9krHKeK2i15jKsGa5dOP8OZwo4vWGe%2B8idT%2BCMVzIaRG4RlwWpzOGNCkoUVKoq6Hxw%2BgCC84eqlRjRD6bQVpiaPoGatAo0x%2FCuafKxfpFPMNx6B9RX%2Bam%2FCGHjkYnP%2FuO0%2FA%2BO1JUixugkHoD9kRot2Q5Vjq4sCTWSm5wAurvOREnOy3QbmIcLpOSXeiUnOaoohpDHEX6zUQ243KMXaQyGf4HCF%2ByYJgjmgHn93JWMqboOKz%2FVXfKHsgcJfLAHt1jrkh%2BnKsyYfjPDl8tNVrfqXlyfu7HicByYPosEPFABXe7CecqY2eC7jDHiglZe%2FeeOEOPHM2%2Fy%2FklVPLsrXM9%2FGXChzHzCP64PUBjqkAWWBPRqW3XfiBeaHGyjDj9kb%2Ba%2FIJgqNQxXSgvz%2BfWkmHFXQXVmWGfOtdE6Ofil9kitaI6%2BotL5l1UJwcLvEH74WYf6xkLCnHrrg%2BgExLOX6aSIjczfne16z9bqyxUsEFXafGwKtpetojsA6ARSlkK0Y9FRZWsPgwI5VY74JK9SBCOnZ1m%2FbMxJR2hFhmzRGfggaOtvoTr4yRl5TCgind4oGWxWs&X-Amz-Signature=5ec0ed2a6e9d7793c3ec6f942b3d616595100b160ffb6b67d321132c386da48b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQ6PIDC%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDZkxESUwmpOdP7uO9f7wz3PCIOxeZTxBxSxSKMR1%2BnPgIhALAeLZS0b9EATuE4Rd1QWOL0SfogKoUeMNQPMSr4cac%2BKv8DCCAQABoMNjM3NDIzMTgzODA1Igx9iwbXY%2BTiFxdfv1gq3APXW3RQsHfdigUJTLjSQB9hFufqgrRc3Im7BMyePP5vx1oJ1sN%2FEwGtLbdjKvlakb%2F8gs3Rg7xT5ygEeW2ZwUgYXke%2Bmjg%2BDUIup8D31iuCZ2qPwA8vnPEY%2Bz%2Bp%2BS2mT%2Bix3BhdYc3aZR5Ii5YHGjUpHeBDKaVkogEmAJFUWk1xx5rMMJhpxy3S9aYJzQDWXqZloUZgEDEXg%2FpesMc3xY3saXC4P8pabnqRGfkNhZj1rLDqcBbKtmaTTidT18Z3qC%2FMoVCNJS8R%2B591MSLwNs4JaTnf2FHvE9krHKeK2i15jKsGa5dOP8OZwo4vWGe%2B8idT%2BCMVzIaRG4RlwWpzOGNCkoUVKoq6Hxw%2BgCC84eqlRjRD6bQVpiaPoGatAo0x%2FCuafKxfpFPMNx6B9RX%2Bam%2FCGHjkYnP%2FuO0%2FA%2BO1JUixugkHoD9kRot2Q5Vjq4sCTWSm5wAurvOREnOy3QbmIcLpOSXeiUnOaoohpDHEX6zUQ243KMXaQyGf4HCF%2ByYJgjmgHn93JWMqboOKz%2FVXfKHsgcJfLAHt1jrkh%2BnKsyYfjPDl8tNVrfqXlyfu7HicByYPosEPFABXe7CecqY2eC7jDHiglZe%2FeeOEOPHM2%2Fy%2FklVPLsrXM9%2FGXChzHzCP64PUBjqkAWWBPRqW3XfiBeaHGyjDj9kb%2Ba%2FIJgqNQxXSgvz%2BfWkmHFXQXVmWGfOtdE6Ofil9kitaI6%2BotL5l1UJwcLvEH74WYf6xkLCnHrrg%2BgExLOX6aSIjczfne16z9bqyxUsEFXafGwKtpetojsA6ARSlkK0Y9FRZWsPgwI5VY74JK9SBCOnZ1m%2FbMxJR2hFhmzRGfggaOtvoTr4yRl5TCgind4oGWxWs&X-Amz-Signature=60f719af975ea90e3d4c2d76550ebf2687297161f9a8850cc4de37546331a467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQ6PIDC%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDZkxESUwmpOdP7uO9f7wz3PCIOxeZTxBxSxSKMR1%2BnPgIhALAeLZS0b9EATuE4Rd1QWOL0SfogKoUeMNQPMSr4cac%2BKv8DCCAQABoMNjM3NDIzMTgzODA1Igx9iwbXY%2BTiFxdfv1gq3APXW3RQsHfdigUJTLjSQB9hFufqgrRc3Im7BMyePP5vx1oJ1sN%2FEwGtLbdjKvlakb%2F8gs3Rg7xT5ygEeW2ZwUgYXke%2Bmjg%2BDUIup8D31iuCZ2qPwA8vnPEY%2Bz%2Bp%2BS2mT%2Bix3BhdYc3aZR5Ii5YHGjUpHeBDKaVkogEmAJFUWk1xx5rMMJhpxy3S9aYJzQDWXqZloUZgEDEXg%2FpesMc3xY3saXC4P8pabnqRGfkNhZj1rLDqcBbKtmaTTidT18Z3qC%2FMoVCNJS8R%2B591MSLwNs4JaTnf2FHvE9krHKeK2i15jKsGa5dOP8OZwo4vWGe%2B8idT%2BCMVzIaRG4RlwWpzOGNCkoUVKoq6Hxw%2BgCC84eqlRjRD6bQVpiaPoGatAo0x%2FCuafKxfpFPMNx6B9RX%2Bam%2FCGHjkYnP%2FuO0%2FA%2BO1JUixugkHoD9kRot2Q5Vjq4sCTWSm5wAurvOREnOy3QbmIcLpOSXeiUnOaoohpDHEX6zUQ243KMXaQyGf4HCF%2ByYJgjmgHn93JWMqboOKz%2FVXfKHsgcJfLAHt1jrkh%2BnKsyYfjPDl8tNVrfqXlyfu7HicByYPosEPFABXe7CecqY2eC7jDHiglZe%2FeeOEOPHM2%2Fy%2FklVPLsrXM9%2FGXChzHzCP64PUBjqkAWWBPRqW3XfiBeaHGyjDj9kb%2Ba%2FIJgqNQxXSgvz%2BfWkmHFXQXVmWGfOtdE6Ofil9kitaI6%2BotL5l1UJwcLvEH74WYf6xkLCnHrrg%2BgExLOX6aSIjczfne16z9bqyxUsEFXafGwKtpetojsA6ARSlkK0Y9FRZWsPgwI5VY74JK9SBCOnZ1m%2FbMxJR2hFhmzRGfggaOtvoTr4yRl5TCgind4oGWxWs&X-Amz-Signature=0fc80f8691d9d9eb217b9a4e2afc187cacbed63f5b5417cfe7ce10560cb4490a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQ6PIDC%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDZkxESUwmpOdP7uO9f7wz3PCIOxeZTxBxSxSKMR1%2BnPgIhALAeLZS0b9EATuE4Rd1QWOL0SfogKoUeMNQPMSr4cac%2BKv8DCCAQABoMNjM3NDIzMTgzODA1Igx9iwbXY%2BTiFxdfv1gq3APXW3RQsHfdigUJTLjSQB9hFufqgrRc3Im7BMyePP5vx1oJ1sN%2FEwGtLbdjKvlakb%2F8gs3Rg7xT5ygEeW2ZwUgYXke%2Bmjg%2BDUIup8D31iuCZ2qPwA8vnPEY%2Bz%2Bp%2BS2mT%2Bix3BhdYc3aZR5Ii5YHGjUpHeBDKaVkogEmAJFUWk1xx5rMMJhpxy3S9aYJzQDWXqZloUZgEDEXg%2FpesMc3xY3saXC4P8pabnqRGfkNhZj1rLDqcBbKtmaTTidT18Z3qC%2FMoVCNJS8R%2B591MSLwNs4JaTnf2FHvE9krHKeK2i15jKsGa5dOP8OZwo4vWGe%2B8idT%2BCMVzIaRG4RlwWpzOGNCkoUVKoq6Hxw%2BgCC84eqlRjRD6bQVpiaPoGatAo0x%2FCuafKxfpFPMNx6B9RX%2Bam%2FCGHjkYnP%2FuO0%2FA%2BO1JUixugkHoD9kRot2Q5Vjq4sCTWSm5wAurvOREnOy3QbmIcLpOSXeiUnOaoohpDHEX6zUQ243KMXaQyGf4HCF%2ByYJgjmgHn93JWMqboOKz%2FVXfKHsgcJfLAHt1jrkh%2BnKsyYfjPDl8tNVrfqXlyfu7HicByYPosEPFABXe7CecqY2eC7jDHiglZe%2FeeOEOPHM2%2Fy%2FklVPLsrXM9%2FGXChzHzCP64PUBjqkAWWBPRqW3XfiBeaHGyjDj9kb%2Ba%2FIJgqNQxXSgvz%2BfWkmHFXQXVmWGfOtdE6Ofil9kitaI6%2BotL5l1UJwcLvEH74WYf6xkLCnHrrg%2BgExLOX6aSIjczfne16z9bqyxUsEFXafGwKtpetojsA6ARSlkK0Y9FRZWsPgwI5VY74JK9SBCOnZ1m%2FbMxJR2hFhmzRGfggaOtvoTr4yRl5TCgind4oGWxWs&X-Amz-Signature=94687687e48940ec7b0b6a045003b27b1f14c33ec17d7d8f8b668dfa59523726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQ6PIDC%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDZkxESUwmpOdP7uO9f7wz3PCIOxeZTxBxSxSKMR1%2BnPgIhALAeLZS0b9EATuE4Rd1QWOL0SfogKoUeMNQPMSr4cac%2BKv8DCCAQABoMNjM3NDIzMTgzODA1Igx9iwbXY%2BTiFxdfv1gq3APXW3RQsHfdigUJTLjSQB9hFufqgrRc3Im7BMyePP5vx1oJ1sN%2FEwGtLbdjKvlakb%2F8gs3Rg7xT5ygEeW2ZwUgYXke%2Bmjg%2BDUIup8D31iuCZ2qPwA8vnPEY%2Bz%2Bp%2BS2mT%2Bix3BhdYc3aZR5Ii5YHGjUpHeBDKaVkogEmAJFUWk1xx5rMMJhpxy3S9aYJzQDWXqZloUZgEDEXg%2FpesMc3xY3saXC4P8pabnqRGfkNhZj1rLDqcBbKtmaTTidT18Z3qC%2FMoVCNJS8R%2B591MSLwNs4JaTnf2FHvE9krHKeK2i15jKsGa5dOP8OZwo4vWGe%2B8idT%2BCMVzIaRG4RlwWpzOGNCkoUVKoq6Hxw%2BgCC84eqlRjRD6bQVpiaPoGatAo0x%2FCuafKxfpFPMNx6B9RX%2Bam%2FCGHjkYnP%2FuO0%2FA%2BO1JUixugkHoD9kRot2Q5Vjq4sCTWSm5wAurvOREnOy3QbmIcLpOSXeiUnOaoohpDHEX6zUQ243KMXaQyGf4HCF%2ByYJgjmgHn93JWMqboOKz%2FVXfKHsgcJfLAHt1jrkh%2BnKsyYfjPDl8tNVrfqXlyfu7HicByYPosEPFABXe7CecqY2eC7jDHiglZe%2FeeOEOPHM2%2Fy%2FklVPLsrXM9%2FGXChzHzCP64PUBjqkAWWBPRqW3XfiBeaHGyjDj9kb%2Ba%2FIJgqNQxXSgvz%2BfWkmHFXQXVmWGfOtdE6Ofil9kitaI6%2BotL5l1UJwcLvEH74WYf6xkLCnHrrg%2BgExLOX6aSIjczfne16z9bqyxUsEFXafGwKtpetojsA6ARSlkK0Y9FRZWsPgwI5VY74JK9SBCOnZ1m%2FbMxJR2hFhmzRGfggaOtvoTr4yRl5TCgind4oGWxWs&X-Amz-Signature=44f561986d8d6da059d98d0d8c583e92145b847904dd3e574feedb703f965812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQ6PIDC%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDZkxESUwmpOdP7uO9f7wz3PCIOxeZTxBxSxSKMR1%2BnPgIhALAeLZS0b9EATuE4Rd1QWOL0SfogKoUeMNQPMSr4cac%2BKv8DCCAQABoMNjM3NDIzMTgzODA1Igx9iwbXY%2BTiFxdfv1gq3APXW3RQsHfdigUJTLjSQB9hFufqgrRc3Im7BMyePP5vx1oJ1sN%2FEwGtLbdjKvlakb%2F8gs3Rg7xT5ygEeW2ZwUgYXke%2Bmjg%2BDUIup8D31iuCZ2qPwA8vnPEY%2Bz%2Bp%2BS2mT%2Bix3BhdYc3aZR5Ii5YHGjUpHeBDKaVkogEmAJFUWk1xx5rMMJhpxy3S9aYJzQDWXqZloUZgEDEXg%2FpesMc3xY3saXC4P8pabnqRGfkNhZj1rLDqcBbKtmaTTidT18Z3qC%2FMoVCNJS8R%2B591MSLwNs4JaTnf2FHvE9krHKeK2i15jKsGa5dOP8OZwo4vWGe%2B8idT%2BCMVzIaRG4RlwWpzOGNCkoUVKoq6Hxw%2BgCC84eqlRjRD6bQVpiaPoGatAo0x%2FCuafKxfpFPMNx6B9RX%2Bam%2FCGHjkYnP%2FuO0%2FA%2BO1JUixugkHoD9kRot2Q5Vjq4sCTWSm5wAurvOREnOy3QbmIcLpOSXeiUnOaoohpDHEX6zUQ243KMXaQyGf4HCF%2ByYJgjmgHn93JWMqboOKz%2FVXfKHsgcJfLAHt1jrkh%2BnKsyYfjPDl8tNVrfqXlyfu7HicByYPosEPFABXe7CecqY2eC7jDHiglZe%2FeeOEOPHM2%2Fy%2FklVPLsrXM9%2FGXChzHzCP64PUBjqkAWWBPRqW3XfiBeaHGyjDj9kb%2Ba%2FIJgqNQxXSgvz%2BfWkmHFXQXVmWGfOtdE6Ofil9kitaI6%2BotL5l1UJwcLvEH74WYf6xkLCnHrrg%2BgExLOX6aSIjczfne16z9bqyxUsEFXafGwKtpetojsA6ARSlkK0Y9FRZWsPgwI5VY74JK9SBCOnZ1m%2FbMxJR2hFhmzRGfggaOtvoTr4yRl5TCgind4oGWxWs&X-Amz-Signature=bd83ac8a1a960c410f3a84dc09d24e7a1e5300a94cc1cc1befbfd217a5372ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQ6PIDC%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDZkxESUwmpOdP7uO9f7wz3PCIOxeZTxBxSxSKMR1%2BnPgIhALAeLZS0b9EATuE4Rd1QWOL0SfogKoUeMNQPMSr4cac%2BKv8DCCAQABoMNjM3NDIzMTgzODA1Igx9iwbXY%2BTiFxdfv1gq3APXW3RQsHfdigUJTLjSQB9hFufqgrRc3Im7BMyePP5vx1oJ1sN%2FEwGtLbdjKvlakb%2F8gs3Rg7xT5ygEeW2ZwUgYXke%2Bmjg%2BDUIup8D31iuCZ2qPwA8vnPEY%2Bz%2Bp%2BS2mT%2Bix3BhdYc3aZR5Ii5YHGjUpHeBDKaVkogEmAJFUWk1xx5rMMJhpxy3S9aYJzQDWXqZloUZgEDEXg%2FpesMc3xY3saXC4P8pabnqRGfkNhZj1rLDqcBbKtmaTTidT18Z3qC%2FMoVCNJS8R%2B591MSLwNs4JaTnf2FHvE9krHKeK2i15jKsGa5dOP8OZwo4vWGe%2B8idT%2BCMVzIaRG4RlwWpzOGNCkoUVKoq6Hxw%2BgCC84eqlRjRD6bQVpiaPoGatAo0x%2FCuafKxfpFPMNx6B9RX%2Bam%2FCGHjkYnP%2FuO0%2FA%2BO1JUixugkHoD9kRot2Q5Vjq4sCTWSm5wAurvOREnOy3QbmIcLpOSXeiUnOaoohpDHEX6zUQ243KMXaQyGf4HCF%2ByYJgjmgHn93JWMqboOKz%2FVXfKHsgcJfLAHt1jrkh%2BnKsyYfjPDl8tNVrfqXlyfu7HicByYPosEPFABXe7CecqY2eC7jDHiglZe%2FeeOEOPHM2%2Fy%2FklVPLsrXM9%2FGXChzHzCP64PUBjqkAWWBPRqW3XfiBeaHGyjDj9kb%2Ba%2FIJgqNQxXSgvz%2BfWkmHFXQXVmWGfOtdE6Ofil9kitaI6%2BotL5l1UJwcLvEH74WYf6xkLCnHrrg%2BgExLOX6aSIjczfne16z9bqyxUsEFXafGwKtpetojsA6ARSlkK0Y9FRZWsPgwI5VY74JK9SBCOnZ1m%2FbMxJR2hFhmzRGfggaOtvoTr4yRl5TCgind4oGWxWs&X-Amz-Signature=b889564561207d596c11999011f5c905d101f5a8d2a5df4b42751ff1836a0670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQ6PIDC%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDZkxESUwmpOdP7uO9f7wz3PCIOxeZTxBxSxSKMR1%2BnPgIhALAeLZS0b9EATuE4Rd1QWOL0SfogKoUeMNQPMSr4cac%2BKv8DCCAQABoMNjM3NDIzMTgzODA1Igx9iwbXY%2BTiFxdfv1gq3APXW3RQsHfdigUJTLjSQB9hFufqgrRc3Im7BMyePP5vx1oJ1sN%2FEwGtLbdjKvlakb%2F8gs3Rg7xT5ygEeW2ZwUgYXke%2Bmjg%2BDUIup8D31iuCZ2qPwA8vnPEY%2Bz%2Bp%2BS2mT%2Bix3BhdYc3aZR5Ii5YHGjUpHeBDKaVkogEmAJFUWk1xx5rMMJhpxy3S9aYJzQDWXqZloUZgEDEXg%2FpesMc3xY3saXC4P8pabnqRGfkNhZj1rLDqcBbKtmaTTidT18Z3qC%2FMoVCNJS8R%2B591MSLwNs4JaTnf2FHvE9krHKeK2i15jKsGa5dOP8OZwo4vWGe%2B8idT%2BCMVzIaRG4RlwWpzOGNCkoUVKoq6Hxw%2BgCC84eqlRjRD6bQVpiaPoGatAo0x%2FCuafKxfpFPMNx6B9RX%2Bam%2FCGHjkYnP%2FuO0%2FA%2BO1JUixugkHoD9kRot2Q5Vjq4sCTWSm5wAurvOREnOy3QbmIcLpOSXeiUnOaoohpDHEX6zUQ243KMXaQyGf4HCF%2ByYJgjmgHn93JWMqboOKz%2FVXfKHsgcJfLAHt1jrkh%2BnKsyYfjPDl8tNVrfqXlyfu7HicByYPosEPFABXe7CecqY2eC7jDHiglZe%2FeeOEOPHM2%2Fy%2FklVPLsrXM9%2FGXChzHzCP64PUBjqkAWWBPRqW3XfiBeaHGyjDj9kb%2Ba%2FIJgqNQxXSgvz%2BfWkmHFXQXVmWGfOtdE6Ofil9kitaI6%2BotL5l1UJwcLvEH74WYf6xkLCnHrrg%2BgExLOX6aSIjczfne16z9bqyxUsEFXafGwKtpetojsA6ARSlkK0Y9FRZWsPgwI5VY74JK9SBCOnZ1m%2FbMxJR2hFhmzRGfggaOtvoTr4yRl5TCgind4oGWxWs&X-Amz-Signature=711239dc84a3da26be52b33af416a7c317fb5e3b8d1820c234654f5b887c6d0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQ6PIDC%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDZkxESUwmpOdP7uO9f7wz3PCIOxeZTxBxSxSKMR1%2BnPgIhALAeLZS0b9EATuE4Rd1QWOL0SfogKoUeMNQPMSr4cac%2BKv8DCCAQABoMNjM3NDIzMTgzODA1Igx9iwbXY%2BTiFxdfv1gq3APXW3RQsHfdigUJTLjSQB9hFufqgrRc3Im7BMyePP5vx1oJ1sN%2FEwGtLbdjKvlakb%2F8gs3Rg7xT5ygEeW2ZwUgYXke%2Bmjg%2BDUIup8D31iuCZ2qPwA8vnPEY%2Bz%2Bp%2BS2mT%2Bix3BhdYc3aZR5Ii5YHGjUpHeBDKaVkogEmAJFUWk1xx5rMMJhpxy3S9aYJzQDWXqZloUZgEDEXg%2FpesMc3xY3saXC4P8pabnqRGfkNhZj1rLDqcBbKtmaTTidT18Z3qC%2FMoVCNJS8R%2B591MSLwNs4JaTnf2FHvE9krHKeK2i15jKsGa5dOP8OZwo4vWGe%2B8idT%2BCMVzIaRG4RlwWpzOGNCkoUVKoq6Hxw%2BgCC84eqlRjRD6bQVpiaPoGatAo0x%2FCuafKxfpFPMNx6B9RX%2Bam%2FCGHjkYnP%2FuO0%2FA%2BO1JUixugkHoD9kRot2Q5Vjq4sCTWSm5wAurvOREnOy3QbmIcLpOSXeiUnOaoohpDHEX6zUQ243KMXaQyGf4HCF%2ByYJgjmgHn93JWMqboOKz%2FVXfKHsgcJfLAHt1jrkh%2BnKsyYfjPDl8tNVrfqXlyfu7HicByYPosEPFABXe7CecqY2eC7jDHiglZe%2FeeOEOPHM2%2Fy%2FklVPLsrXM9%2FGXChzHzCP64PUBjqkAWWBPRqW3XfiBeaHGyjDj9kb%2Ba%2FIJgqNQxXSgvz%2BfWkmHFXQXVmWGfOtdE6Ofil9kitaI6%2BotL5l1UJwcLvEH74WYf6xkLCnHrrg%2BgExLOX6aSIjczfne16z9bqyxUsEFXafGwKtpetojsA6ARSlkK0Y9FRZWsPgwI5VY74JK9SBCOnZ1m%2FbMxJR2hFhmzRGfggaOtvoTr4yRl5TCgind4oGWxWs&X-Amz-Signature=ce10125c8e47f7701722cb7a18cc36f699dc3fa653e328b14a4c3171449c857c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJRDK2H%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDgyi%2F2RS5pg1EZB9qqu7xUobDev86poyh%2B14oPCvE15AiBmOQl%2B2Qx%2Bo0ER6g2gBNOBXJs9oW04L2KqNbUeimrQHyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMQlEHTtRsSqyXX8XKKtwDM%2FKv7lKrNrpbZTPkFXf3gCmsMBWpWMCTf%2F1XP%2BQtiLXQ5woH%2B8uhwY%2Bhpt2BdGzAKSqNSJ7qb%2FLjH9uzjdhIp%2BNc3P10UlFjtDTc%2F91GM9fDTDZveD7ddkc8%2FtBhoDiyQVOfhYNsK%2Fz5OmVVeJFIvwxQR%2BQfOc%2B1NbzYvSVKx3ZOtL9SvOP0wkxjod4Gbu4wbN%2F7HULBely2hANdMFniU0XoEcaST3F0YShPBPGDHrlHeZOV3BoOo79yUy%2Fhpa2K50IIrbQc2ABZp6L60KiCmQyVHDRIoxJwFpvbVPmxMbBuFV5yTeRRNnnL0Xhtis0ViGvewXnPWnQ7ivcuBvegZeHOtK2dP8Zj2qS1apUCAB%2Bqg%2BFWuW6jHnxU5s6JfkZ0bEq8g1VJPetcKJ7H4nOqVvYpXEFlaqKxie05cI%2FuVwUxmFN%2FXAxqIQXq6q2waXi6xmQxQ3jOSlX6M2cE3G3W9gGk%2BwRFbwgCi3gosLUWnXLH0CSILJH3%2BW1nHQstsRqDaIKGEloJ8RzvKfgKWrwrNPnWySJvnkLddSw34m0Sfp2a%2Brjcjpwh4YO8DvY0NmmoS%2BpMY7iuu2oLvwf2PdzbYfuzrXVzYn16exOUruD%2BNzffWybRv4SF7S1FjUQwoO6D1AY6pgEpxcXWkpw%2B1SzXlCllezKWxqH4gTlB4Q7bNpPuuq39jd2j2DAVp6Pj5448p0n6ioL5z6ANLCSBeVUgWKe6MCghtG0iDKzmOSgi7oSW%2B2KUkIKk2ol8ikCsFtFv4l3qWrIHo%2BPQH1I5UG0qe4oe8AhRCc3Vh7kCt53z0w%2F985FK%2BdQMhKnmP6Kw4QD13uieud09RGyE%2FBAoO5WX6QXbxNrufmBSR6Ou&X-Amz-Signature=d8716391e99c729b217229a7f2efc84f1601fe23eee11a86576fdee7e170e366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCRF6R2H%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGsKZOE%2BF0FLnKfm9gT%2FV56FQzL%2B7jXy%2BWY2n2kLmdgqAiAZ3eLvSX4fjLYmEhaatZ49Qy1E91Nitvj9HfUTIjVI5ir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM7Mh%2BKp85YVo5oZirKtwD9xljK2CgMJl85kHSQRdykPb3gzbjw9i%2BafEBqcG0nJSnJa1vzCCeQnMcwNehgj8vyi8zJCYb1Yu7BG%2BatBAXfHzJARg22a%2B4bEBrLEIVUsGfyLX8b%2BDaOeoH45yl59gBrZGSBZ7n4YZKth3xwp6jz1cpRQ9EdODVtMYAr5hEPbnXpCcb%2FkFKo%2Bmu0IjpbZME%2FtmLtQCr8qcgrIS2v9tUT5Al8K%2Ba7q9wMDgqZjEkZh8Qf1uy6K3rO0E15EkikGZ5u5REf1n0z%2FsaEKuC30LKCOKNwa8lAtzGQR8ZLiggboqUNwsv64EWCOtNTereFqX4hy3cSFrZ%2FI5T5eCGgsHItK5naJNR2P%2Be7X3Flk3rGNmCNsl4fe5mGqDQkACxNESByC10IAEx1j0k4TdMtLdcm5GrZA4Zzn6YXmtHa9OskbGb%2FF9v92%2B0yzS3TThJP7iXn1bIY0I63ybA9oVWm7aqR1mO0Ah8RpzZNFSi%2BrRKfTYcVl8WXyr3P0wtvzdRqdqL3Y9cH5lToJ3GFpOlzwCtrvbhXyUD%2FDlaJ6Keo1q%2BSycf4Fd6%2F23LXQTpwcOAo8vieWyJPtDZzliNqzd2ToToP9FnPYSKFTxp2mduHY%2BTCR%2FbhUGeymdd4b8k7lUw9euD1AY6pgHKallJ%2Fek3qi53TAY8i9AEZme%2FGqRtjI%2Bli4ucHGpG%2BUTnsNwlcYP9iuVBzAUsSAPH0tYz868ilIa8uXZtN1xbPScX8vtQETen6ljGpllwY%2F%2BOTuzn8Xxkc7anSLUPlM4sMyGN%2Bd9LxEyJpZUzEq3QSPIPX1bUj5B8be2r5VLRXA%2FlIIlGIrBq0KxvauYAuX6juX%2B4kn9Wc4kBx6Buhep51E2asZ77&X-Amz-Signature=e44e5e1057bc0066620ee5980277cb45527e6d712d28d178ed4daf0da3963145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3AI3VY3%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIA%2FrvHkvU%2Fg0sQsF3MqrTzCnCaTDaM%2BHJedEsqznrSahAiAy7GaDW0PYtW7NSCJcE2wiYAu8%2BnhUR%2BrqDsA2SS7prir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMTvTbm2K0loC8WT0YKtwDHhKGDYTCh6gLeUhuVWnF1jHinqDtDQel5nkVw3eVmBL%2FagNhz2IiOXNIwezLMmDnXaExk3c69AiMdxdUAhdK%2BFP%2FKFc8zBCZ4KcY6WO0lfuflV96dt7tQi8NmH8uvedsWlM2plIOyO2mYkcDrv9LxzV5S9Feij6euZn5048El%2BBWl%2FmJhzWWFgJwO6nq39R%2B%2FVhhu6IhPATJbkRiwqvwrIf7n%2BhOlM%2FNNSVbC5eDQS%2B8ad4Bu4un%2FnP1qw6de01pXnZli8%2FzWD4B0%2Biacqni20rVZ70ajoM%2FQA6dhwrIvQq4soI%2FcSE2YnAh9gIQOgPqpEi9vWJLy%2F09heUBMKfdcDLuOpl2qda4rCszdjcU0GCEtTVL0kZY6Gid0dYGtYlCj0hEt0%2B4eIgMfGBW5NtvNnCORQb%2BGdqnwXuz7zIcdbbN5wFGlPu48T2PGFGsYwgURmFnqU%2BHhhvkqpKyAdz6Fj0p0XxtA7xOodtaWHQr%2Fefa5Owatp9LYSAlrpF7gV8z5WTTcbCnzoYXs%2BwoPwLEj8X%2FJey83UlRnAlq6PW5Gyx7PoCuS5pDi7nnkrcwUWIyfoq7cWMPAwtI6W3f1WEusjVb8JFAvhqnYdKmpGFUoM5trmELaPSZtzObewsw%2FuuD1AY6pgE7PQKwsl7MBI0a7Y9VtVi3aLdaw50VqDnTcBwiqXnUSTihW7IzLdA61GhoWRs4AteDBo3n0xJg80wzzRMaHnMmUnmqhfV0uNexVu1bYv1Ku0SRuITB76XB21jZNMjPBkGax4w24KSsEPu7POcHcofVKnUs4VAPUgVX8qYprMwkBUNN3SFyb2fYxQGK4StN6MHOlalZSo9C0B%2FtVUEjNubGWG6C1BhF&X-Amz-Signature=2b3b942d5409c3dac1886498680ea8c47051bea7565a00d7e1a0fdee0dd27104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQ6PIDC%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDZkxESUwmpOdP7uO9f7wz3PCIOxeZTxBxSxSKMR1%2BnPgIhALAeLZS0b9EATuE4Rd1QWOL0SfogKoUeMNQPMSr4cac%2BKv8DCCAQABoMNjM3NDIzMTgzODA1Igx9iwbXY%2BTiFxdfv1gq3APXW3RQsHfdigUJTLjSQB9hFufqgrRc3Im7BMyePP5vx1oJ1sN%2FEwGtLbdjKvlakb%2F8gs3Rg7xT5ygEeW2ZwUgYXke%2Bmjg%2BDUIup8D31iuCZ2qPwA8vnPEY%2Bz%2Bp%2BS2mT%2Bix3BhdYc3aZR5Ii5YHGjUpHeBDKaVkogEmAJFUWk1xx5rMMJhpxy3S9aYJzQDWXqZloUZgEDEXg%2FpesMc3xY3saXC4P8pabnqRGfkNhZj1rLDqcBbKtmaTTidT18Z3qC%2FMoVCNJS8R%2B591MSLwNs4JaTnf2FHvE9krHKeK2i15jKsGa5dOP8OZwo4vWGe%2B8idT%2BCMVzIaRG4RlwWpzOGNCkoUVKoq6Hxw%2BgCC84eqlRjRD6bQVpiaPoGatAo0x%2FCuafKxfpFPMNx6B9RX%2Bam%2FCGHjkYnP%2FuO0%2FA%2BO1JUixugkHoD9kRot2Q5Vjq4sCTWSm5wAurvOREnOy3QbmIcLpOSXeiUnOaoohpDHEX6zUQ243KMXaQyGf4HCF%2ByYJgjmgHn93JWMqboOKz%2FVXfKHsgcJfLAHt1jrkh%2BnKsyYfjPDl8tNVrfqXlyfu7HicByYPosEPFABXe7CecqY2eC7jDHiglZe%2FeeOEOPHM2%2Fy%2FklVPLsrXM9%2FGXChzHzCP64PUBjqkAWWBPRqW3XfiBeaHGyjDj9kb%2Ba%2FIJgqNQxXSgvz%2BfWkmHFXQXVmWGfOtdE6Ofil9kitaI6%2BotL5l1UJwcLvEH74WYf6xkLCnHrrg%2BgExLOX6aSIjczfne16z9bqyxUsEFXafGwKtpetojsA6ARSlkK0Y9FRZWsPgwI5VY74JK9SBCOnZ1m%2FbMxJR2hFhmzRGfggaOtvoTr4yRl5TCgind4oGWxWs&X-Amz-Signature=09d495da203b337184b6883d893e4b52258e6a088277648bf7348e36b5479bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMGRGI5X%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIC9QzLp84hS%2F%2B0c2BMBEZUJkfKgYtD9z7Rr4HfdKolt3AiA4U5m45WHXSwFSQb95f8fSmjQkppk5OlNvvUer8%2FxzKSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMki626fulyx0ZScy%2BKtwDB%2F3sg3XGxpFA4dA4Rqqizc4afREkNimzlgx7Iw2ebew%2BVqIXIIX%2FcQS8ESby4Cn04u1unyCyXYcCA9RcIeLwuYXYoLICghvXhAXBSvRRdOmaBL1yu45XMFocjCBTqxnvPy80o1uNEgpzxpzXwBCXj8WKicisXmkBramZhwc1ZcLvGJISm0VC%2Bh3tGPGKIYxAO%2BpgSIdn82WC%2FChnMJfLnuXkIu6Ryq73TqpoibAlXG5zUS%2B6a2B8OXLuF%2BUF30zw3gkbsTVXXT4rcp6JsE8y8EdFEdZ62dvzvrxKkS17evoIFfNDeLy4TWZGT2c2JMIcTnQunAlPcLd7vNz8Yjc%2FDfku3DHpZDuB%2FurMQEaF8MLL2jePNHbx2%2BeCL69LOPDIDgp%2Fpx4DE%2FKZB0zDtZ%2Fw7NnJijd9oW6CAiJR4qgA8CYDe80VGohKeJnpVeH%2F7XyuRXzzE7i83w2Ur7U0dej8YzjyuPgZOOxEQoo3tjpj7Isvf32gRl5nDfw26Uyf1wneavZp4HoJSPEHI4hCf4FwvBB3P5NTV3aLLcQQKac63Ndv%2FPY4Nes%2FtIlSPXrYi0E5go0Nzdmrt%2BbKsRbTzne5BisRM6xy7P2CuS4MbHiQ7xWwy5oUmLEaLlzrEbgwk%2BuD1AY6pgFfggJS2SDfW2jQZ8CUimx0DZ%2FNJRJGNrty3%2F3oNYfrdQH2%2FJV3AlyoWk6lkKWj5EuQ22F9BSoJRX5YpASym8f1E1r7YHF0YyfnXe5Xq%2Bx4cv8%2BxjmZm%2FfhQbxw6IqpU3V4p3Ag5sKw9JM01cIWaPPwDYcNaRXS463jY9cMgorYoQekKBVYmnrAw0STJGWMoiuc19uZjj9zk1DBEcvGRTer%2FCGOzoEd&X-Amz-Signature=05f1288898a777a537c891b7344ba7c236996ee97267e0959efa60ffc96f90c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQ6PIDC%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDZkxESUwmpOdP7uO9f7wz3PCIOxeZTxBxSxSKMR1%2BnPgIhALAeLZS0b9EATuE4Rd1QWOL0SfogKoUeMNQPMSr4cac%2BKv8DCCAQABoMNjM3NDIzMTgzODA1Igx9iwbXY%2BTiFxdfv1gq3APXW3RQsHfdigUJTLjSQB9hFufqgrRc3Im7BMyePP5vx1oJ1sN%2FEwGtLbdjKvlakb%2F8gs3Rg7xT5ygEeW2ZwUgYXke%2Bmjg%2BDUIup8D31iuCZ2qPwA8vnPEY%2Bz%2Bp%2BS2mT%2Bix3BhdYc3aZR5Ii5YHGjUpHeBDKaVkogEmAJFUWk1xx5rMMJhpxy3S9aYJzQDWXqZloUZgEDEXg%2FpesMc3xY3saXC4P8pabnqRGfkNhZj1rLDqcBbKtmaTTidT18Z3qC%2FMoVCNJS8R%2B591MSLwNs4JaTnf2FHvE9krHKeK2i15jKsGa5dOP8OZwo4vWGe%2B8idT%2BCMVzIaRG4RlwWpzOGNCkoUVKoq6Hxw%2BgCC84eqlRjRD6bQVpiaPoGatAo0x%2FCuafKxfpFPMNx6B9RX%2Bam%2FCGHjkYnP%2FuO0%2FA%2BO1JUixugkHoD9kRot2Q5Vjq4sCTWSm5wAurvOREnOy3QbmIcLpOSXeiUnOaoohpDHEX6zUQ243KMXaQyGf4HCF%2ByYJgjmgHn93JWMqboOKz%2FVXfKHsgcJfLAHt1jrkh%2BnKsyYfjPDl8tNVrfqXlyfu7HicByYPosEPFABXe7CecqY2eC7jDHiglZe%2FeeOEOPHM2%2Fy%2FklVPLsrXM9%2FGXChzHzCP64PUBjqkAWWBPRqW3XfiBeaHGyjDj9kb%2Ba%2FIJgqNQxXSgvz%2BfWkmHFXQXVmWGfOtdE6Ofil9kitaI6%2BotL5l1UJwcLvEH74WYf6xkLCnHrrg%2BgExLOX6aSIjczfne16z9bqyxUsEFXafGwKtpetojsA6ARSlkK0Y9FRZWsPgwI5VY74JK9SBCOnZ1m%2FbMxJR2hFhmzRGfggaOtvoTr4yRl5TCgind4oGWxWs&X-Amz-Signature=26be53302c658b6a8a955b041ef67deed7386b27233adfd9e66ffa286326d90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQQIQML%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIEUtT%2BP5AbmX7GCD5HpI0M6oPePuIYQi8d54QBaqvT9GAiEAj5llE7ruiZC6kIwOeuYz0RuxP4lta3RbJcfANyrJ8C8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOg6DR%2FaftZIualJuCrcA3uQ08xWbD6eVcbPNL5afvlhVvcTlyY%2BMGhh9rq3E0qSdtDGgmJq12LggiY231nLXMhqOPDRwQJkRkWU0DPiCifCGiiqhAb1VpUx12TJ%2F7MnuoKmZx8g84ANuagIw3bKFLOJadcLzRSHEuTE1SyPeHnv7xGL6jDVGun0Y8XTph5Ihwnm0YnG0Gde7dsy9iM%2FjAJo4gTueth3Gdjr6DAweNhBzZylNvcZHCXWUVqEzgdZVA9HhxPsdDzAEi321CD8F6%2F49QP2My7A68nmW%2FKKxdZq4ADu7zkuHeoTHUNzBxEKfgsoJ08H6UPtqg0DCGcL%2FCtvzaTrNfIcP%2FuUiRfz7rSoZ4otYzUxBt5u6qsPUEAlCBL411YYrVzVXDVzCRP%2FnDff5TgYul5scJBtXYrHrOcm4cn3hWCDIJCgl%2FZUFSSYdubvjvliplXNikNFbRsjNR3U8zLSAtQBH1CYSf0h%2F%2F0xYUPdzgPJDpnAUIcBAJ77WFEKL%2BniTSo842pN9czs8lOgxL4%2BC17jVjfpjqUO5XCaw3szxI2g4HZNxVk2tGaarlZ2YgB4SgMyD9OZheRYuOoAKd9%2B4c4%2B0msBlvPfJn6CoKw3S0hhnwfVQ8%2FV1WLcyXin0wQaj5UdVAqYMMXrg9QGOqUB6TXUamw2PwLk5lX5XW5c6F6ua2%2Bsp8FyKUscTt0IUc%2Bt31qes5QJCEWRLYmRmJbCGO8ic3f25eExgl1tvkDWBZIuc0bhtlM6CJ8zlz1TlWQI%2FCgfEE0qSYGRqX5Vz1ZOsS4Pr4u0o89maGd19kwcgPgqHebtjFYWhorqMbnITN7Y4Yis0gBegGngZch1Roz%2Fqyujt2HwM9r2pS8FMT26P88ums4V&X-Amz-Signature=727a3e57f6651d7aeb3d2db6f5f61de27dfa842edf6c9cacd9417c749fd779a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQ6PIDC%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDZkxESUwmpOdP7uO9f7wz3PCIOxeZTxBxSxSKMR1%2BnPgIhALAeLZS0b9EATuE4Rd1QWOL0SfogKoUeMNQPMSr4cac%2BKv8DCCAQABoMNjM3NDIzMTgzODA1Igx9iwbXY%2BTiFxdfv1gq3APXW3RQsHfdigUJTLjSQB9hFufqgrRc3Im7BMyePP5vx1oJ1sN%2FEwGtLbdjKvlakb%2F8gs3Rg7xT5ygEeW2ZwUgYXke%2Bmjg%2BDUIup8D31iuCZ2qPwA8vnPEY%2Bz%2Bp%2BS2mT%2Bix3BhdYc3aZR5Ii5YHGjUpHeBDKaVkogEmAJFUWk1xx5rMMJhpxy3S9aYJzQDWXqZloUZgEDEXg%2FpesMc3xY3saXC4P8pabnqRGfkNhZj1rLDqcBbKtmaTTidT18Z3qC%2FMoVCNJS8R%2B591MSLwNs4JaTnf2FHvE9krHKeK2i15jKsGa5dOP8OZwo4vWGe%2B8idT%2BCMVzIaRG4RlwWpzOGNCkoUVKoq6Hxw%2BgCC84eqlRjRD6bQVpiaPoGatAo0x%2FCuafKxfpFPMNx6B9RX%2Bam%2FCGHjkYnP%2FuO0%2FA%2BO1JUixugkHoD9kRot2Q5Vjq4sCTWSm5wAurvOREnOy3QbmIcLpOSXeiUnOaoohpDHEX6zUQ243KMXaQyGf4HCF%2ByYJgjmgHn93JWMqboOKz%2FVXfKHsgcJfLAHt1jrkh%2BnKsyYfjPDl8tNVrfqXlyfu7HicByYPosEPFABXe7CecqY2eC7jDHiglZe%2FeeOEOPHM2%2Fy%2FklVPLsrXM9%2FGXChzHzCP64PUBjqkAWWBPRqW3XfiBeaHGyjDj9kb%2Ba%2FIJgqNQxXSgvz%2BfWkmHFXQXVmWGfOtdE6Ofil9kitaI6%2BotL5l1UJwcLvEH74WYf6xkLCnHrrg%2BgExLOX6aSIjczfne16z9bqyxUsEFXafGwKtpetojsA6ARSlkK0Y9FRZWsPgwI5VY74JK9SBCOnZ1m%2FbMxJR2hFhmzRGfggaOtvoTr4yRl5TCgind4oGWxWs&X-Amz-Signature=a38d51acbbe42d1635022375a2b73e98ac7169d4b2f8e0381ce1fb3caa5c0870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZMWLZ4P%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCh3Ewn11AXXOhZuPNz206ow6rRlM%2BbrqAYqZPz50B%2FJQIhALo6F8UZLwhYY8uTtrWMrl5DuwRroh0hDLAhOCZpNIe7Kv8DCCEQABoMNjM3NDIzMTgzODA1IgwmZjc2uGyb%2F82g3kEq3AN6Ivq6yUiyzpIXMnWytbQbcM8oEarePx334bnQYOfpM1GVIHcgGXIXqXJUeaZLDv%2Fk%2FSVgv%2F6iBK2d7XpvnTD5tDk%2B2nS9i9UhoKOSWcZR%2B%2BCdHeyQMj8I92vExjbOZajNqzIM3jwoYBR8No2WiuZVOSkZkwLTFrJuOitbFB5%2BxMI07DFHn03dfiYM063FUS86NGB7rZIgcrB8Olk%2FVieGglkk6UWgLMadUra9N3Qnm1OQOv58y7Fsv5IvC6V%2FynaToF%2BmOeP%2Fi2BFKAKVvPUQbCg93cLdgtGKVx6rpy%2B8CrVS2fcQf9wc8ww6jwWzkf%2BL00SgYi3zZRIPdQGLhgG1v%2FWy3LqmFP2lTdzuJ1sajRYj6J3I1GNMM7%2B4WpinflRtVFR5mY3U7B5F7a1tKLe0%2B5bINCRo16Lw1AduQa%2FWr%2FukopFlIju91XA8NPUY8Xk%2FkSsK1Qlp11oVAGfCxXCYFBySpfNUYPSk7WVl9ewzig18%2F1CVTVjb22e%2B9UcGoMMDMlO96LU4torGtY1B7Jg81Cz3dQQOLC8WZGj0V0jSDOkemVQVGltlrWI9AZhMKBVU7ioCSblh5j%2FtMwbV92NVBxVwGxZF3hdpvMV5Ou6AdrWrSQS1rQpxXhowPjC67oPUBjqkATAl%2Fv3VNxpxGjT9xXwuCwaB8Hq8u5XMyjtzbxqOgasEfgLGzgqLMOZFbNKWuVQ4xrsD8Nx3FOp%2FAjt9tvep0eACEg6mZz4JAoIA4szTt77UcO3m%2BMrExkb2RA%2F%2F36prH%2FHCtCeLgFx7igOn385MZW6UbtiK3%2Bc%2FTFOmapWFt290drMeC1QYUkV%2BKIFPAtP7H2wWEg7i%2B93am9nVwdAegjOZqpBu&X-Amz-Signature=33b3d0704a046f6bee34ba8e6ef74049388d5112fb5fb22785455156ffa777ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQ6PIDC%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDZkxESUwmpOdP7uO9f7wz3PCIOxeZTxBxSxSKMR1%2BnPgIhALAeLZS0b9EATuE4Rd1QWOL0SfogKoUeMNQPMSr4cac%2BKv8DCCAQABoMNjM3NDIzMTgzODA1Igx9iwbXY%2BTiFxdfv1gq3APXW3RQsHfdigUJTLjSQB9hFufqgrRc3Im7BMyePP5vx1oJ1sN%2FEwGtLbdjKvlakb%2F8gs3Rg7xT5ygEeW2ZwUgYXke%2Bmjg%2BDUIup8D31iuCZ2qPwA8vnPEY%2Bz%2Bp%2BS2mT%2Bix3BhdYc3aZR5Ii5YHGjUpHeBDKaVkogEmAJFUWk1xx5rMMJhpxy3S9aYJzQDWXqZloUZgEDEXg%2FpesMc3xY3saXC4P8pabnqRGfkNhZj1rLDqcBbKtmaTTidT18Z3qC%2FMoVCNJS8R%2B591MSLwNs4JaTnf2FHvE9krHKeK2i15jKsGa5dOP8OZwo4vWGe%2B8idT%2BCMVzIaRG4RlwWpzOGNCkoUVKoq6Hxw%2BgCC84eqlRjRD6bQVpiaPoGatAo0x%2FCuafKxfpFPMNx6B9RX%2Bam%2FCGHjkYnP%2FuO0%2FA%2BO1JUixugkHoD9kRot2Q5Vjq4sCTWSm5wAurvOREnOy3QbmIcLpOSXeiUnOaoohpDHEX6zUQ243KMXaQyGf4HCF%2ByYJgjmgHn93JWMqboOKz%2FVXfKHsgcJfLAHt1jrkh%2BnKsyYfjPDl8tNVrfqXlyfu7HicByYPosEPFABXe7CecqY2eC7jDHiglZe%2FeeOEOPHM2%2Fy%2FklVPLsrXM9%2FGXChzHzCP64PUBjqkAWWBPRqW3XfiBeaHGyjDj9kb%2Ba%2FIJgqNQxXSgvz%2BfWkmHFXQXVmWGfOtdE6Ofil9kitaI6%2BotL5l1UJwcLvEH74WYf6xkLCnHrrg%2BgExLOX6aSIjczfne16z9bqyxUsEFXafGwKtpetojsA6ARSlkK0Y9FRZWsPgwI5VY74JK9SBCOnZ1m%2FbMxJR2hFhmzRGfggaOtvoTr4yRl5TCgind4oGWxWs&X-Amz-Signature=e5dc4d5b43df68601acba3fcf21bfb642f2adce58d7e0776572e552e4bf09857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPSSTPGP%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIG09E5AVLGtAHzImQ%2FH1c9S9g1ONYQ82Xchpu3ZrXN2aAiBctStt9vU9W9J73ugVHJDJ7Y3ACvQRRUTaw70inFmxwCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMxGGHu9%2F6PjCKe90gKtwDNI6xop%2FNs6Gvwf80nAiUfmupRXii4qfEqfekpHTJA9wE8Yd9ixtn6F48dP8FFKCYeZQCJk0bP6l5sj0uXBCfOLUxpmTHFjUERhnLpL5VfbzpY6fLa1WvkcLPkatMTg3FfuXgKZaO8lM7fkfOKVpx4Ys88UuLEEtYLkFcldaH0fhFOuRGr4qQmPLWTpWIdS1GTuy6S0qrlm98%2B0%2FhBgEXLBbNRzFI2wtIlvZ6liNBmrtkaWzWQybYETUN813rC%2FxciO0hZmVpadVIcv9rJUpZwwSdwv5OYxU1Hu9oNImx%2BC6kXLYT9ZNmuqTwvOmDfpOU81U%2FDIGbsn9Z8PcPLgvpNNyq9C%2FdzV7W4m%2BZON%2BAgMAmL3yjTE%2BP%2B%2Bf27Ll13sH6cKi3zWX7gcNAV7Ow92dP4ZnLCnqbKZo1E%2Bw%2BihNlOIAlRt1nemFZCSXDYGM22apo9jneICZ7sqS%2BeVoeLXqoGH1ErwBORYOa%2Buau84r6b3%2FfVJXunqoZLK98Uf%2BREkNhUJzLxpQqZnpUPIFlw3KXXh7UjPWvjGlmed%2Fw1sFEHG2k%2FarkX6HBJCntGPVxKd0Btr9brY2xOsmDVp3WsUzB92050LMfjfDXCBxKCxIUoQBBTzxRGwehFX7Zg5cw4%2B2D1AY6pgFLDbbxn5wySoeIXYmPSmiwsxLDhx9%2FtwV%2FuErBIBKOdYWsoTgcLLoRZ0uuqAfvbwF5C6cajb4JMuToOsUU%2BK4x1o7z6CP5nFfBE8DICZsf2EJmEUSMUWa52x0dn1yZkCAFddYa%2FPuKnnTyKzal%2B0xzdvfEo8inILwSAbw5GwSdy4mS%2FUJ%2FBgehtuomBpqz00ZCB%2FE8%2BrDqy2cBZryhlvJgbQyLy%2Fpl&X-Amz-Signature=76f5a2b7740fb8ac5c8c23e74e61a2dfc663b5c8c30e7c68f3a180d3f571132b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQ6PIDC%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDZkxESUwmpOdP7uO9f7wz3PCIOxeZTxBxSxSKMR1%2BnPgIhALAeLZS0b9EATuE4Rd1QWOL0SfogKoUeMNQPMSr4cac%2BKv8DCCAQABoMNjM3NDIzMTgzODA1Igx9iwbXY%2BTiFxdfv1gq3APXW3RQsHfdigUJTLjSQB9hFufqgrRc3Im7BMyePP5vx1oJ1sN%2FEwGtLbdjKvlakb%2F8gs3Rg7xT5ygEeW2ZwUgYXke%2Bmjg%2BDUIup8D31iuCZ2qPwA8vnPEY%2Bz%2Bp%2BS2mT%2Bix3BhdYc3aZR5Ii5YHGjUpHeBDKaVkogEmAJFUWk1xx5rMMJhpxy3S9aYJzQDWXqZloUZgEDEXg%2FpesMc3xY3saXC4P8pabnqRGfkNhZj1rLDqcBbKtmaTTidT18Z3qC%2FMoVCNJS8R%2B591MSLwNs4JaTnf2FHvE9krHKeK2i15jKsGa5dOP8OZwo4vWGe%2B8idT%2BCMVzIaRG4RlwWpzOGNCkoUVKoq6Hxw%2BgCC84eqlRjRD6bQVpiaPoGatAo0x%2FCuafKxfpFPMNx6B9RX%2Bam%2FCGHjkYnP%2FuO0%2FA%2BO1JUixugkHoD9kRot2Q5Vjq4sCTWSm5wAurvOREnOy3QbmIcLpOSXeiUnOaoohpDHEX6zUQ243KMXaQyGf4HCF%2ByYJgjmgHn93JWMqboOKz%2FVXfKHsgcJfLAHt1jrkh%2BnKsyYfjPDl8tNVrfqXlyfu7HicByYPosEPFABXe7CecqY2eC7jDHiglZe%2FeeOEOPHM2%2Fy%2FklVPLsrXM9%2FGXChzHzCP64PUBjqkAWWBPRqW3XfiBeaHGyjDj9kb%2Ba%2FIJgqNQxXSgvz%2BfWkmHFXQXVmWGfOtdE6Ofil9kitaI6%2BotL5l1UJwcLvEH74WYf6xkLCnHrrg%2BgExLOX6aSIjczfne16z9bqyxUsEFXafGwKtpetojsA6ARSlkK0Y9FRZWsPgwI5VY74JK9SBCOnZ1m%2FbMxJR2hFhmzRGfggaOtvoTr4yRl5TCgind4oGWxWs&X-Amz-Signature=2e3df1036069533277b342c6f6116efec4180dcb3d50b80b665eef4ddd3f47f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLW3SEEU%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCcmleFYP7%2FXzRW8p2vbslGvkGPueFSRaCM5gEM2SXFjQIhALg1GIAqfUcHy17NM0myFxQf20HxTIZLCrTO%2FXDhCjJkKv8DCCEQABoMNjM3NDIzMTgzODA1Igy66wMgBS21MqHFMUQq3AO1qX22UmRSnmT8UPpoBf%2BUtz0cIMM81TxBQBxwYvjt5I3VARQ6TSbtvvrG79mcTzhDpPC%2B77gfTP%2BJwZsiYx17H4jyWLMD3l5L8dzq0CBDzMkmA6Ua4jb0w%2B2bU3TaruhPgOQxg6lInN7crcOXx%2FVY0SR%2FYo48RSThzFQPme%2FNOUT88oVBnm0jvGRMt5IHMg8rwFI4O1mJmg%2FRLAH05Kn%2BWuBfUX1x2AycO8VDxFp5Vge3ptuFpHsg9zyaulOXji6YgtDyoGvANINkUQlmRvA5tya4388UGwlPLEI7eWZ1O%2B%2BKXhS3VfNReiA7UHfG7VafPqaPOzTdte8Wah8MLXJXeQCiNsNA2nagaBgKWTR18j8EIK1GD9%2FKydf%2BaiO6yGlxe%2B8%2B6TMDWIRlLkLjMv0ZLmq%2B%2BXWJLv81KcMUNyQtJTpF%2FixH66p%2FzPXWFtGCuXk%2FYf%2BWHWULOfLalRKdQewsCtALwfjCSzcgYAJo81NTz1WEhrRxkTV4Rw8pVuoxI6ieCx%2FwWI7w1QgY%2FLjLW4rIGcewFw0UgN7ru7Y3dBEVDn9A6m94aGVUinfzdFdPSTFzyUUiFooCYM4S7yrAifDxSYP4%2B7gX6QAprn6rTZrO3c0XLjDpecl18CDUDTCi7YPUBjqkAdB%2Fy8xYM0YKc%2BLYtH9hmUJksWuQrTbe6yOJitHjvTgQzA9mCUsXTUdaQ8qG124lkvOfGMF3MFIKIPm7dLaURswH6Bxn8Yqh0Bmuj4PbnfINT2do55yLXurXMCmDNn3VkxnCjoCpwjCP8DVcMvJaTiSea4Vh4yeim5wLlArzdZ0N6mrB71FZRiM%2Fw4sDJ2jo3rrg5m0YUryXaxcqsKSNgrmqjF89&X-Amz-Signature=84afe4e904c81b44c9a8b941e5069638bdfa42caba36291f9e160bfca683acf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4QCHNOL%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID6pJTF0c6QV5Ksk3R2yiDNP4HxPBWYln4EQD3%2Fl7QnkAiEA1yVqndaSicjZpKOe9NQ%2BJb8qRE8JGk4IvRqK11T%2F2w0q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDAXBIeMghJJUhd3DFSrcA03Pu6kOMgan7sNVJiZR4Ktsspi0%2FLUiPabVeksQkbzAH1KgkxdXAMUembrXpiVtNoAUy%2FheOQFp8MgU5oHz3z2ZDYMfHNJB%2B7fu7jFCDL%2FKe9UwwEf4yFvsx9wOsr%2Fifgf0IX2R9MFjlMZ19OeWSxZE%2FhVlHhPkeLrBwmNRll0%2FsBdhsPs0FxJnOG%2F8EyWe9Rl3wRl3sJ1edd326pW4lAeeMfRpd5MdhEIoZr5mPONva7xfmAx4lp92GysZJZ%2FssGgMvgIMY4IpY%2BI55hMHMHsyXOj5VXUXip2yAxqHEhFbc2KkUOXZ1pTAw05Kd85dnh%2FM0z3zjM%2F4NK77AIcphtpSzW7wWE8PC1xlDJl%2Bz65IgkAUb1AK4x2uf8YFXJ4Y5Y118jC7eOoruwUmNIaYvE55Gvj%2BVNxTICierbGkN5PxYcULrSMwV2xOnHnG8hEzOKpoe1r5QKPjSrQCVAHQD0yqGAutKotfUEarSBJNJBUl8xMYl06zKHNZCu1Fb%2FU%2BROKniPHSFAeb3d8266GkS9yYc7xzC8%2BhOWyQ9gMrm8DsWjzTVtBEXr2eR2zYnQg30pJcB5iGmeVF3OPjBQ127UoghyeEUxMxSqWwcCsB%2BbMxyCPy%2FD5sulfDRxFAMOntg9QGOqUBS%2FvbBAYNWZxg0mSs2b8o1Ze8uV%2BXXt6m192maiN2AEKPaPsalJC8iO8reQ%2BxgEsIOVJNmJmYmLkKKTrdLYUFbIvjVE8zMQjU9odTdQZEg9wum3t4mYmuoykJnJw%2FX7GXjzqf7StZhQ0mnj8%2BKey9oLqZcc%2Fi6NAfkpcjatX2hnrIalpFbyxPVXigmrJ6UYJO6c%2FJwFGSnoQB0aiOkzrgrhbrc5c%2F&X-Amz-Signature=38be8e654872be3a46981252c7f0e84d4501880d0437b2095607aa41a6365407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6YMSEDB%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIBxjA1H57A7Upv6fXosYFxH%2By2VC8KydeMfKPR8ampuwAiEA5me9t0UwDHjANgqQY5cNLTV57E7KovxmTh%2FZS%2FtE5CEq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDIJQU42BUlvEnSdtoSrcAxi9MlYU3b8esSJ74aajLwORYpb2%2FEtX4sdLiWN6AyVZuUCQgFU5Wqgu9MDMCV5%2BC%2FNFyqZIuWUWsyQxNFgHZ4kTRwbUfcI6DYMMtKATyeuwNP9aKNbQGExE30fN1P%2F1Y6z6d50X3Mj6bbUXLTVE4KjCEqGhjOJGRvenCdWr%2Fh98gwYl56z8S0RqNhrCt%2BKTft1LBjme9aOmCwHZzwbggQwddl8OqlrvSbkeGnjUK9sMe%2BZ7FZ7%2BP1MIW%2FzsKwQASoodNcObgOrX4ERY6J6VXPlZiwk58NVOoBs%2Bpu1PQPO0M%2BAk9XLQBedtfA7j9hOtLbiVZuS3JFiw8j6KqnVf8g%2BWCxzQ0fKgTNID9mj9mDR9iDNeqWOSOoNxlDw5lmZ8HH8i5PD3t5RzANJ7dAqPb3YCaiHnXnZRcs5iA%2Fyvcj6IP75JXovXrfo3DvYK568vrBmvcmjCLcRJYcTBn6TI8aNJj5CqcjK%2FuFLYCb8F81ie99FsLieUoVlKkP%2BhA15MIUy0LwAggmRYAjWeDWk2PBtfP6tUswl%2BTlbCg1sLHgGHkV4gTVZckiIah60wuSxOrKXQk%2Fa99X6gmDeno7rT9b7Mvv%2ByUF4rBnwbxxCzeTlGpQ4ha8ujUL4beEtvMLDrg9QGOqUBy1rYwcrJzfLODcjf2%2BUDYE2TYs%2BQp68Rb4JP%2BCnJ%2BCYrBh4qlEacDiBZVUo0%2BL39%2FWgbjXFzAGUai1yeS7DvojPKELI8qHZQZetbziy9wfedhn36X8DkLBc0G7YygJKy%2FmVMk8SXbO0n2YcjLTZMLl0qIc10wU5iohdR63OPlTS9afmSQoKbd%2BQtlzuXP8Rz3cjymx3MyMs%2Fr4AHcsjphHwbU23W&X-Amz-Signature=fcb0eb4ca4668d7e35329e76bb0a36c7b41d3ad08501cf57c8ee2f4a1b04a51f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQ6PIDC%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDZkxESUwmpOdP7uO9f7wz3PCIOxeZTxBxSxSKMR1%2BnPgIhALAeLZS0b9EATuE4Rd1QWOL0SfogKoUeMNQPMSr4cac%2BKv8DCCAQABoMNjM3NDIzMTgzODA1Igx9iwbXY%2BTiFxdfv1gq3APXW3RQsHfdigUJTLjSQB9hFufqgrRc3Im7BMyePP5vx1oJ1sN%2FEwGtLbdjKvlakb%2F8gs3Rg7xT5ygEeW2ZwUgYXke%2Bmjg%2BDUIup8D31iuCZ2qPwA8vnPEY%2Bz%2Bp%2BS2mT%2Bix3BhdYc3aZR5Ii5YHGjUpHeBDKaVkogEmAJFUWk1xx5rMMJhpxy3S9aYJzQDWXqZloUZgEDEXg%2FpesMc3xY3saXC4P8pabnqRGfkNhZj1rLDqcBbKtmaTTidT18Z3qC%2FMoVCNJS8R%2B591MSLwNs4JaTnf2FHvE9krHKeK2i15jKsGa5dOP8OZwo4vWGe%2B8idT%2BCMVzIaRG4RlwWpzOGNCkoUVKoq6Hxw%2BgCC84eqlRjRD6bQVpiaPoGatAo0x%2FCuafKxfpFPMNx6B9RX%2Bam%2FCGHjkYnP%2FuO0%2FA%2BO1JUixugkHoD9kRot2Q5Vjq4sCTWSm5wAurvOREnOy3QbmIcLpOSXeiUnOaoohpDHEX6zUQ243KMXaQyGf4HCF%2ByYJgjmgHn93JWMqboOKz%2FVXfKHsgcJfLAHt1jrkh%2BnKsyYfjPDl8tNVrfqXlyfu7HicByYPosEPFABXe7CecqY2eC7jDHiglZe%2FeeOEOPHM2%2Fy%2FklVPLsrXM9%2FGXChzHzCP64PUBjqkAWWBPRqW3XfiBeaHGyjDj9kb%2Ba%2FIJgqNQxXSgvz%2BfWkmHFXQXVmWGfOtdE6Ofil9kitaI6%2BotL5l1UJwcLvEH74WYf6xkLCnHrrg%2BgExLOX6aSIjczfne16z9bqyxUsEFXafGwKtpetojsA6ARSlkK0Y9FRZWsPgwI5VY74JK9SBCOnZ1m%2FbMxJR2hFhmzRGfggaOtvoTr4yRl5TCgind4oGWxWs&X-Amz-Signature=892094f34134e0fd9e4bf7cf57de9cb8ed1986f403a6f6f4fd122325ddbfeb8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQ6PIDC%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDZkxESUwmpOdP7uO9f7wz3PCIOxeZTxBxSxSKMR1%2BnPgIhALAeLZS0b9EATuE4Rd1QWOL0SfogKoUeMNQPMSr4cac%2BKv8DCCAQABoMNjM3NDIzMTgzODA1Igx9iwbXY%2BTiFxdfv1gq3APXW3RQsHfdigUJTLjSQB9hFufqgrRc3Im7BMyePP5vx1oJ1sN%2FEwGtLbdjKvlakb%2F8gs3Rg7xT5ygEeW2ZwUgYXke%2Bmjg%2BDUIup8D31iuCZ2qPwA8vnPEY%2Bz%2Bp%2BS2mT%2Bix3BhdYc3aZR5Ii5YHGjUpHeBDKaVkogEmAJFUWk1xx5rMMJhpxy3S9aYJzQDWXqZloUZgEDEXg%2FpesMc3xY3saXC4P8pabnqRGfkNhZj1rLDqcBbKtmaTTidT18Z3qC%2FMoVCNJS8R%2B591MSLwNs4JaTnf2FHvE9krHKeK2i15jKsGa5dOP8OZwo4vWGe%2B8idT%2BCMVzIaRG4RlwWpzOGNCkoUVKoq6Hxw%2BgCC84eqlRjRD6bQVpiaPoGatAo0x%2FCuafKxfpFPMNx6B9RX%2Bam%2FCGHjkYnP%2FuO0%2FA%2BO1JUixugkHoD9kRot2Q5Vjq4sCTWSm5wAurvOREnOy3QbmIcLpOSXeiUnOaoohpDHEX6zUQ243KMXaQyGf4HCF%2ByYJgjmgHn93JWMqboOKz%2FVXfKHsgcJfLAHt1jrkh%2BnKsyYfjPDl8tNVrfqXlyfu7HicByYPosEPFABXe7CecqY2eC7jDHiglZe%2FeeOEOPHM2%2Fy%2FklVPLsrXM9%2FGXChzHzCP64PUBjqkAWWBPRqW3XfiBeaHGyjDj9kb%2Ba%2FIJgqNQxXSgvz%2BfWkmHFXQXVmWGfOtdE6Ofil9kitaI6%2BotL5l1UJwcLvEH74WYf6xkLCnHrrg%2BgExLOX6aSIjczfne16z9bqyxUsEFXafGwKtpetojsA6ARSlkK0Y9FRZWsPgwI5VY74JK9SBCOnZ1m%2FbMxJR2hFhmzRGfggaOtvoTr4yRl5TCgind4oGWxWs&X-Amz-Signature=fe3a2bf0d45bd7b580955344696842045abdffbd5cd34cc823b044ab8affe226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QLXOIEO%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDv%2FFOrw1iTMoczeQPFcfepXnaanYGePDBqPeXvto546gIgTNUv4KKPe%2BxCniTXx5fFspEEbqdlKJJLoChcmF6Fbmkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCiecvjqxD1aQnpQ9yrcA%2FjfgMOw6YDIjzUsvOMG9vsPyYXheIHktSbLgbSnNZVrHUignSa98XbXUJ5B5eCtPRS3Ma5CFIqU5H7Q7tFJkWWAU%2BadR51OiP8QCMM%2B4FmpQn4z94MCYko10pyWj4yf0yFp8ERi1zhktPHW2dqAjubkbf%2FO60VrXDG0aL4sc2KSAgZJJr2BBtgKKMgcMkPRH3kMXxuthgNEo6Onp43AxBzbsgMckQqwLytJ8giUMaKPNJFyLsUrKQZ%2FfuKhrCIbXV3Jg1d%2BVUc0oXXZJ6JMbuDv1IeEBEys5LMEscqoJdDE78Ht7xYJVPOrtdgTjYabHsoq4XWitoUGN3caBbAMyyBVF3f92%2BFrQgK3Ied8lah0xP2ZJamItdFNXU%2F7cYTZ4KgIn3Ivt9TQqqCFzHNdqie%2F%2FmQvdykMzcExrtYUZGf%2B0GlHpEEd0eR%2B5ru9mwvkvDn6xhrdwchRXkbm66k29r92UM20nq%2FNl0PRGS%2Bb5W%2BWS8qKvKMG7%2F%2FQULIrbJ89sdDk0lVsinHBjjXIirNpSNG6y0pVLujbbCML6l4JQD07yW2uiOVRjtlIbC%2F51jGCXzyxEqt27IIwh5cjHoG%2FqOHNkjtvjza%2BBFJGTTNVkMXKKhs3BNYAto127t3RMJ3rg9QGOqUBXNROoTZWpDKwDSLasXV%2BpoTRCGpZNlxk5VCjrmzfikvw97wLetpHTuFUjSSdrcAHywGLYGY%2BzCoOAZVwkP%2FV32xT4WgXm4mdbEdxhaGz%2FlYhpmcS4N5SmHxn77sABp12A4CUVorCPKclhWDMU9GuORduw2CV6SY6EnBPhuSQMxOqYBZ2ZkLO5ru5k9j9icJOmkKlMhR5FXFwUvAdUsLrZZ%2BoYXT0&X-Amz-Signature=69d9d8adf85ac0be294942ed5d3620701a6ae706e8a2ffc80ad8d973d3f4c4c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QLXOIEO%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDv%2FFOrw1iTMoczeQPFcfepXnaanYGePDBqPeXvto546gIgTNUv4KKPe%2BxCniTXx5fFspEEbqdlKJJLoChcmF6Fbmkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCiecvjqxD1aQnpQ9yrcA%2FjfgMOw6YDIjzUsvOMG9vsPyYXheIHktSbLgbSnNZVrHUignSa98XbXUJ5B5eCtPRS3Ma5CFIqU5H7Q7tFJkWWAU%2BadR51OiP8QCMM%2B4FmpQn4z94MCYko10pyWj4yf0yFp8ERi1zhktPHW2dqAjubkbf%2FO60VrXDG0aL4sc2KSAgZJJr2BBtgKKMgcMkPRH3kMXxuthgNEo6Onp43AxBzbsgMckQqwLytJ8giUMaKPNJFyLsUrKQZ%2FfuKhrCIbXV3Jg1d%2BVUc0oXXZJ6JMbuDv1IeEBEys5LMEscqoJdDE78Ht7xYJVPOrtdgTjYabHsoq4XWitoUGN3caBbAMyyBVF3f92%2BFrQgK3Ied8lah0xP2ZJamItdFNXU%2F7cYTZ4KgIn3Ivt9TQqqCFzHNdqie%2F%2FmQvdykMzcExrtYUZGf%2B0GlHpEEd0eR%2B5ru9mwvkvDn6xhrdwchRXkbm66k29r92UM20nq%2FNl0PRGS%2Bb5W%2BWS8qKvKMG7%2F%2FQULIrbJ89sdDk0lVsinHBjjXIirNpSNG6y0pVLujbbCML6l4JQD07yW2uiOVRjtlIbC%2F51jGCXzyxEqt27IIwh5cjHoG%2FqOHNkjtvjza%2BBFJGTTNVkMXKKhs3BNYAto127t3RMJ3rg9QGOqUBXNROoTZWpDKwDSLasXV%2BpoTRCGpZNlxk5VCjrmzfikvw97wLetpHTuFUjSSdrcAHywGLYGY%2BzCoOAZVwkP%2FV32xT4WgXm4mdbEdxhaGz%2FlYhpmcS4N5SmHxn77sABp12A4CUVorCPKclhWDMU9GuORduw2CV6SY6EnBPhuSQMxOqYBZ2ZkLO5ru5k9j9icJOmkKlMhR5FXFwUvAdUsLrZZ%2BoYXT0&X-Amz-Signature=c533494f0e7c1e8a0e4b881524358de0be9872987284482cfcf8dad7bd5246c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QLXOIEO%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDv%2FFOrw1iTMoczeQPFcfepXnaanYGePDBqPeXvto546gIgTNUv4KKPe%2BxCniTXx5fFspEEbqdlKJJLoChcmF6Fbmkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCiecvjqxD1aQnpQ9yrcA%2FjfgMOw6YDIjzUsvOMG9vsPyYXheIHktSbLgbSnNZVrHUignSa98XbXUJ5B5eCtPRS3Ma5CFIqU5H7Q7tFJkWWAU%2BadR51OiP8QCMM%2B4FmpQn4z94MCYko10pyWj4yf0yFp8ERi1zhktPHW2dqAjubkbf%2FO60VrXDG0aL4sc2KSAgZJJr2BBtgKKMgcMkPRH3kMXxuthgNEo6Onp43AxBzbsgMckQqwLytJ8giUMaKPNJFyLsUrKQZ%2FfuKhrCIbXV3Jg1d%2BVUc0oXXZJ6JMbuDv1IeEBEys5LMEscqoJdDE78Ht7xYJVPOrtdgTjYabHsoq4XWitoUGN3caBbAMyyBVF3f92%2BFrQgK3Ied8lah0xP2ZJamItdFNXU%2F7cYTZ4KgIn3Ivt9TQqqCFzHNdqie%2F%2FmQvdykMzcExrtYUZGf%2B0GlHpEEd0eR%2B5ru9mwvkvDn6xhrdwchRXkbm66k29r92UM20nq%2FNl0PRGS%2Bb5W%2BWS8qKvKMG7%2F%2FQULIrbJ89sdDk0lVsinHBjjXIirNpSNG6y0pVLujbbCML6l4JQD07yW2uiOVRjtlIbC%2F51jGCXzyxEqt27IIwh5cjHoG%2FqOHNkjtvjza%2BBFJGTTNVkMXKKhs3BNYAto127t3RMJ3rg9QGOqUBXNROoTZWpDKwDSLasXV%2BpoTRCGpZNlxk5VCjrmzfikvw97wLetpHTuFUjSSdrcAHywGLYGY%2BzCoOAZVwkP%2FV32xT4WgXm4mdbEdxhaGz%2FlYhpmcS4N5SmHxn77sABp12A4CUVorCPKclhWDMU9GuORduw2CV6SY6EnBPhuSQMxOqYBZ2ZkLO5ru5k9j9icJOmkKlMhR5FXFwUvAdUsLrZZ%2BoYXT0&X-Amz-Signature=4cffcc5b439913c7b747e15fe7a1d6d606e889db19fd8dc9fb6e565715bce28a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QLXOIEO%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDv%2FFOrw1iTMoczeQPFcfepXnaanYGePDBqPeXvto546gIgTNUv4KKPe%2BxCniTXx5fFspEEbqdlKJJLoChcmF6Fbmkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCiecvjqxD1aQnpQ9yrcA%2FjfgMOw6YDIjzUsvOMG9vsPyYXheIHktSbLgbSnNZVrHUignSa98XbXUJ5B5eCtPRS3Ma5CFIqU5H7Q7tFJkWWAU%2BadR51OiP8QCMM%2B4FmpQn4z94MCYko10pyWj4yf0yFp8ERi1zhktPHW2dqAjubkbf%2FO60VrXDG0aL4sc2KSAgZJJr2BBtgKKMgcMkPRH3kMXxuthgNEo6Onp43AxBzbsgMckQqwLytJ8giUMaKPNJFyLsUrKQZ%2FfuKhrCIbXV3Jg1d%2BVUc0oXXZJ6JMbuDv1IeEBEys5LMEscqoJdDE78Ht7xYJVPOrtdgTjYabHsoq4XWitoUGN3caBbAMyyBVF3f92%2BFrQgK3Ied8lah0xP2ZJamItdFNXU%2F7cYTZ4KgIn3Ivt9TQqqCFzHNdqie%2F%2FmQvdykMzcExrtYUZGf%2B0GlHpEEd0eR%2B5ru9mwvkvDn6xhrdwchRXkbm66k29r92UM20nq%2FNl0PRGS%2Bb5W%2BWS8qKvKMG7%2F%2FQULIrbJ89sdDk0lVsinHBjjXIirNpSNG6y0pVLujbbCML6l4JQD07yW2uiOVRjtlIbC%2F51jGCXzyxEqt27IIwh5cjHoG%2FqOHNkjtvjza%2BBFJGTTNVkMXKKhs3BNYAto127t3RMJ3rg9QGOqUBXNROoTZWpDKwDSLasXV%2BpoTRCGpZNlxk5VCjrmzfikvw97wLetpHTuFUjSSdrcAHywGLYGY%2BzCoOAZVwkP%2FV32xT4WgXm4mdbEdxhaGz%2FlYhpmcS4N5SmHxn77sABp12A4CUVorCPKclhWDMU9GuORduw2CV6SY6EnBPhuSQMxOqYBZ2ZkLO5ru5k9j9icJOmkKlMhR5FXFwUvAdUsLrZZ%2BoYXT0&X-Amz-Signature=f397ea1f0432b27fcabd7d72c6d9306fdea61dedf9c030067b1960b3508914db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJC4UAEY%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIEcYp0QyLctuYSLoMc1PR5gw5kj%2BSyQ8ADekZTBCJVZZAiEAiv0Wtj5vt5jrnuX2UB81r90olqmL6neUHRJ1V%2FerFQoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDH5%2F9gLMV3N8Ss9a6yrcA18OzovdBvhspdcf%2FAHebV1Zdz3k5eLtx%2FvScGmXb1fSoQ9jgU1baFwHqeleUB9JQPYAFrjtnaiJdGDoSgMDB%2BgqHowa%2FM4oNevGha85ANfBd0YJw2Ll08A4KZHUkpu3%2B6PTLjR0sQeOvaDdZGa4wSic%2BfJpWM9qYe5MPQXfLNgQK3CLJy76qN86VlIlxxzpb8Hza%2FaYp%2B504V1UjskV61CMfvcoE6NU3DMauxSARfbhYf0%2BzCeNKXjaE%2FSgvdzqtoqg%2F6maxnCDWX3Inz0LCUC09b%2BE5gNpzMHrAOV6PBLzsLUo6OI40Y4sF28%2BLZOdOTdYw7SmXzDRq%2B5k5xVNJRCjuep%2FG9gi7RSOXPox8BqjuBHNOS3Ir3vUvb%2BCvHKt5859w0oKoIBGB%2F97Eer1BPlH9jga%2BNi6J5NLCEQmuR3mKlsbXMT%2FP5d3Znv8sfD0QqY44%2BLYSWMZ6jw06HaNgZFudvz96KEsxDjyfPVivzRMw101hjc7TdDvZIBF9hMv6FOmLUqPMz6U6%2Fk5mZFbqpaaKWBIH4if4wTZz0BfNesAM2bIbNOaMsp0MJ1k58v1EIw%2Fkst%2FQ4m6phAXfe0aoFhoKWOx%2FMzB%2F5w4yRQrYDlGrDM%2F%2FvvRDkkKemC4MPjtg9QGOqUB7O57C6s%2FHv3XJwSWvM2tfyjwk0vBF5qxtsZyOnFQsOiSkQV5gyGdIi472uxiSRQPjQ5FSVH%2FmBKmeRUD5RB%2FpF0ouiJmNqlETRbp1eMtA%2FrluoJbrDHm9RXIIO86aozLut7ERYEGyQrv4ewfNdHPAes7O89cC6mq9Fo9pXFi724yVCtN7oObZYH%2BDWFUm0rCinEE4XzH3Y88%2FZdwesFA9oJHg1a%2F&X-Amz-Signature=3861b330c1fd7f3c95ca117e97efa9cce32a98cc651ee200847b918e8c7dd6be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QLXOIEO%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDv%2FFOrw1iTMoczeQPFcfepXnaanYGePDBqPeXvto546gIgTNUv4KKPe%2BxCniTXx5fFspEEbqdlKJJLoChcmF6Fbmkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCiecvjqxD1aQnpQ9yrcA%2FjfgMOw6YDIjzUsvOMG9vsPyYXheIHktSbLgbSnNZVrHUignSa98XbXUJ5B5eCtPRS3Ma5CFIqU5H7Q7tFJkWWAU%2BadR51OiP8QCMM%2B4FmpQn4z94MCYko10pyWj4yf0yFp8ERi1zhktPHW2dqAjubkbf%2FO60VrXDG0aL4sc2KSAgZJJr2BBtgKKMgcMkPRH3kMXxuthgNEo6Onp43AxBzbsgMckQqwLytJ8giUMaKPNJFyLsUrKQZ%2FfuKhrCIbXV3Jg1d%2BVUc0oXXZJ6JMbuDv1IeEBEys5LMEscqoJdDE78Ht7xYJVPOrtdgTjYabHsoq4XWitoUGN3caBbAMyyBVF3f92%2BFrQgK3Ied8lah0xP2ZJamItdFNXU%2F7cYTZ4KgIn3Ivt9TQqqCFzHNdqie%2F%2FmQvdykMzcExrtYUZGf%2B0GlHpEEd0eR%2B5ru9mwvkvDn6xhrdwchRXkbm66k29r92UM20nq%2FNl0PRGS%2Bb5W%2BWS8qKvKMG7%2F%2FQULIrbJ89sdDk0lVsinHBjjXIirNpSNG6y0pVLujbbCML6l4JQD07yW2uiOVRjtlIbC%2F51jGCXzyxEqt27IIwh5cjHoG%2FqOHNkjtvjza%2BBFJGTTNVkMXKKhs3BNYAto127t3RMJ3rg9QGOqUBXNROoTZWpDKwDSLasXV%2BpoTRCGpZNlxk5VCjrmzfikvw97wLetpHTuFUjSSdrcAHywGLYGY%2BzCoOAZVwkP%2FV32xT4WgXm4mdbEdxhaGz%2FlYhpmcS4N5SmHxn77sABp12A4CUVorCPKclhWDMU9GuORduw2CV6SY6EnBPhuSQMxOqYBZ2ZkLO5ru5k9j9icJOmkKlMhR5FXFwUvAdUsLrZZ%2BoYXT0&X-Amz-Signature=01cf52eb52ddb6ec2c6dbc77889ea6e98acdb8cf5cd20176243543a5749e0e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QLXOIEO%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDv%2FFOrw1iTMoczeQPFcfepXnaanYGePDBqPeXvto546gIgTNUv4KKPe%2BxCniTXx5fFspEEbqdlKJJLoChcmF6Fbmkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCiecvjqxD1aQnpQ9yrcA%2FjfgMOw6YDIjzUsvOMG9vsPyYXheIHktSbLgbSnNZVrHUignSa98XbXUJ5B5eCtPRS3Ma5CFIqU5H7Q7tFJkWWAU%2BadR51OiP8QCMM%2B4FmpQn4z94MCYko10pyWj4yf0yFp8ERi1zhktPHW2dqAjubkbf%2FO60VrXDG0aL4sc2KSAgZJJr2BBtgKKMgcMkPRH3kMXxuthgNEo6Onp43AxBzbsgMckQqwLytJ8giUMaKPNJFyLsUrKQZ%2FfuKhrCIbXV3Jg1d%2BVUc0oXXZJ6JMbuDv1IeEBEys5LMEscqoJdDE78Ht7xYJVPOrtdgTjYabHsoq4XWitoUGN3caBbAMyyBVF3f92%2BFrQgK3Ied8lah0xP2ZJamItdFNXU%2F7cYTZ4KgIn3Ivt9TQqqCFzHNdqie%2F%2FmQvdykMzcExrtYUZGf%2B0GlHpEEd0eR%2B5ru9mwvkvDn6xhrdwchRXkbm66k29r92UM20nq%2FNl0PRGS%2Bb5W%2BWS8qKvKMG7%2F%2FQULIrbJ89sdDk0lVsinHBjjXIirNpSNG6y0pVLujbbCML6l4JQD07yW2uiOVRjtlIbC%2F51jGCXzyxEqt27IIwh5cjHoG%2FqOHNkjtvjza%2BBFJGTTNVkMXKKhs3BNYAto127t3RMJ3rg9QGOqUBXNROoTZWpDKwDSLasXV%2BpoTRCGpZNlxk5VCjrmzfikvw97wLetpHTuFUjSSdrcAHywGLYGY%2BzCoOAZVwkP%2FV32xT4WgXm4mdbEdxhaGz%2FlYhpmcS4N5SmHxn77sABp12A4CUVorCPKclhWDMU9GuORduw2CV6SY6EnBPhuSQMxOqYBZ2ZkLO5ru5k9j9icJOmkKlMhR5FXFwUvAdUsLrZZ%2BoYXT0&X-Amz-Signature=c6ec7ad671ea568acac910dcc20c4d65733a6d79df1bad0b939d8c603b7e1522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QLXOIEO%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDv%2FFOrw1iTMoczeQPFcfepXnaanYGePDBqPeXvto546gIgTNUv4KKPe%2BxCniTXx5fFspEEbqdlKJJLoChcmF6Fbmkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCiecvjqxD1aQnpQ9yrcA%2FjfgMOw6YDIjzUsvOMG9vsPyYXheIHktSbLgbSnNZVrHUignSa98XbXUJ5B5eCtPRS3Ma5CFIqU5H7Q7tFJkWWAU%2BadR51OiP8QCMM%2B4FmpQn4z94MCYko10pyWj4yf0yFp8ERi1zhktPHW2dqAjubkbf%2FO60VrXDG0aL4sc2KSAgZJJr2BBtgKKMgcMkPRH3kMXxuthgNEo6Onp43AxBzbsgMckQqwLytJ8giUMaKPNJFyLsUrKQZ%2FfuKhrCIbXV3Jg1d%2BVUc0oXXZJ6JMbuDv1IeEBEys5LMEscqoJdDE78Ht7xYJVPOrtdgTjYabHsoq4XWitoUGN3caBbAMyyBVF3f92%2BFrQgK3Ied8lah0xP2ZJamItdFNXU%2F7cYTZ4KgIn3Ivt9TQqqCFzHNdqie%2F%2FmQvdykMzcExrtYUZGf%2B0GlHpEEd0eR%2B5ru9mwvkvDn6xhrdwchRXkbm66k29r92UM20nq%2FNl0PRGS%2Bb5W%2BWS8qKvKMG7%2F%2FQULIrbJ89sdDk0lVsinHBjjXIirNpSNG6y0pVLujbbCML6l4JQD07yW2uiOVRjtlIbC%2F51jGCXzyxEqt27IIwh5cjHoG%2FqOHNkjtvjza%2BBFJGTTNVkMXKKhs3BNYAto127t3RMJ3rg9QGOqUBXNROoTZWpDKwDSLasXV%2BpoTRCGpZNlxk5VCjrmzfikvw97wLetpHTuFUjSSdrcAHywGLYGY%2BzCoOAZVwkP%2FV32xT4WgXm4mdbEdxhaGz%2FlYhpmcS4N5SmHxn77sABp12A4CUVorCPKclhWDMU9GuORduw2CV6SY6EnBPhuSQMxOqYBZ2ZkLO5ru5k9j9icJOmkKlMhR5FXFwUvAdUsLrZZ%2BoYXT0&X-Amz-Signature=4cffcc5b439913c7b747e15fe7a1d6d606e889db19fd8dc9fb6e565715bce28a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QLXOIEO%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDv%2FFOrw1iTMoczeQPFcfepXnaanYGePDBqPeXvto546gIgTNUv4KKPe%2BxCniTXx5fFspEEbqdlKJJLoChcmF6Fbmkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCiecvjqxD1aQnpQ9yrcA%2FjfgMOw6YDIjzUsvOMG9vsPyYXheIHktSbLgbSnNZVrHUignSa98XbXUJ5B5eCtPRS3Ma5CFIqU5H7Q7tFJkWWAU%2BadR51OiP8QCMM%2B4FmpQn4z94MCYko10pyWj4yf0yFp8ERi1zhktPHW2dqAjubkbf%2FO60VrXDG0aL4sc2KSAgZJJr2BBtgKKMgcMkPRH3kMXxuthgNEo6Onp43AxBzbsgMckQqwLytJ8giUMaKPNJFyLsUrKQZ%2FfuKhrCIbXV3Jg1d%2BVUc0oXXZJ6JMbuDv1IeEBEys5LMEscqoJdDE78Ht7xYJVPOrtdgTjYabHsoq4XWitoUGN3caBbAMyyBVF3f92%2BFrQgK3Ied8lah0xP2ZJamItdFNXU%2F7cYTZ4KgIn3Ivt9TQqqCFzHNdqie%2F%2FmQvdykMzcExrtYUZGf%2B0GlHpEEd0eR%2B5ru9mwvkvDn6xhrdwchRXkbm66k29r92UM20nq%2FNl0PRGS%2Bb5W%2BWS8qKvKMG7%2F%2FQULIrbJ89sdDk0lVsinHBjjXIirNpSNG6y0pVLujbbCML6l4JQD07yW2uiOVRjtlIbC%2F51jGCXzyxEqt27IIwh5cjHoG%2FqOHNkjtvjza%2BBFJGTTNVkMXKKhs3BNYAto127t3RMJ3rg9QGOqUBXNROoTZWpDKwDSLasXV%2BpoTRCGpZNlxk5VCjrmzfikvw97wLetpHTuFUjSSdrcAHywGLYGY%2BzCoOAZVwkP%2FV32xT4WgXm4mdbEdxhaGz%2FlYhpmcS4N5SmHxn77sABp12A4CUVorCPKclhWDMU9GuORduw2CV6SY6EnBPhuSQMxOqYBZ2ZkLO5ru5k9j9icJOmkKlMhR5FXFwUvAdUsLrZZ%2BoYXT0&X-Amz-Signature=e650446d84fa8d54b027605d0eb536322d440e30925e23e1a4c713415f7262ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QLXOIEO%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDv%2FFOrw1iTMoczeQPFcfepXnaanYGePDBqPeXvto546gIgTNUv4KKPe%2BxCniTXx5fFspEEbqdlKJJLoChcmF6Fbmkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCiecvjqxD1aQnpQ9yrcA%2FjfgMOw6YDIjzUsvOMG9vsPyYXheIHktSbLgbSnNZVrHUignSa98XbXUJ5B5eCtPRS3Ma5CFIqU5H7Q7tFJkWWAU%2BadR51OiP8QCMM%2B4FmpQn4z94MCYko10pyWj4yf0yFp8ERi1zhktPHW2dqAjubkbf%2FO60VrXDG0aL4sc2KSAgZJJr2BBtgKKMgcMkPRH3kMXxuthgNEo6Onp43AxBzbsgMckQqwLytJ8giUMaKPNJFyLsUrKQZ%2FfuKhrCIbXV3Jg1d%2BVUc0oXXZJ6JMbuDv1IeEBEys5LMEscqoJdDE78Ht7xYJVPOrtdgTjYabHsoq4XWitoUGN3caBbAMyyBVF3f92%2BFrQgK3Ied8lah0xP2ZJamItdFNXU%2F7cYTZ4KgIn3Ivt9TQqqCFzHNdqie%2F%2FmQvdykMzcExrtYUZGf%2B0GlHpEEd0eR%2B5ru9mwvkvDn6xhrdwchRXkbm66k29r92UM20nq%2FNl0PRGS%2Bb5W%2BWS8qKvKMG7%2F%2FQULIrbJ89sdDk0lVsinHBjjXIirNpSNG6y0pVLujbbCML6l4JQD07yW2uiOVRjtlIbC%2F51jGCXzyxEqt27IIwh5cjHoG%2FqOHNkjtvjza%2BBFJGTTNVkMXKKhs3BNYAto127t3RMJ3rg9QGOqUBXNROoTZWpDKwDSLasXV%2BpoTRCGpZNlxk5VCjrmzfikvw97wLetpHTuFUjSSdrcAHywGLYGY%2BzCoOAZVwkP%2FV32xT4WgXm4mdbEdxhaGz%2FlYhpmcS4N5SmHxn77sABp12A4CUVorCPKclhWDMU9GuORduw2CV6SY6EnBPhuSQMxOqYBZ2ZkLO5ru5k9j9icJOmkKlMhR5FXFwUvAdUsLrZZ%2BoYXT0&X-Amz-Signature=27daa614b6c0d5732716886f93db5e2d1f933ff87283c87e1d3c179a01aa2119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QLXOIEO%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDv%2FFOrw1iTMoczeQPFcfepXnaanYGePDBqPeXvto546gIgTNUv4KKPe%2BxCniTXx5fFspEEbqdlKJJLoChcmF6Fbmkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCiecvjqxD1aQnpQ9yrcA%2FjfgMOw6YDIjzUsvOMG9vsPyYXheIHktSbLgbSnNZVrHUignSa98XbXUJ5B5eCtPRS3Ma5CFIqU5H7Q7tFJkWWAU%2BadR51OiP8QCMM%2B4FmpQn4z94MCYko10pyWj4yf0yFp8ERi1zhktPHW2dqAjubkbf%2FO60VrXDG0aL4sc2KSAgZJJr2BBtgKKMgcMkPRH3kMXxuthgNEo6Onp43AxBzbsgMckQqwLytJ8giUMaKPNJFyLsUrKQZ%2FfuKhrCIbXV3Jg1d%2BVUc0oXXZJ6JMbuDv1IeEBEys5LMEscqoJdDE78Ht7xYJVPOrtdgTjYabHsoq4XWitoUGN3caBbAMyyBVF3f92%2BFrQgK3Ied8lah0xP2ZJamItdFNXU%2F7cYTZ4KgIn3Ivt9TQqqCFzHNdqie%2F%2FmQvdykMzcExrtYUZGf%2B0GlHpEEd0eR%2B5ru9mwvkvDn6xhrdwchRXkbm66k29r92UM20nq%2FNl0PRGS%2Bb5W%2BWS8qKvKMG7%2F%2FQULIrbJ89sdDk0lVsinHBjjXIirNpSNG6y0pVLujbbCML6l4JQD07yW2uiOVRjtlIbC%2F51jGCXzyxEqt27IIwh5cjHoG%2FqOHNkjtvjza%2BBFJGTTNVkMXKKhs3BNYAto127t3RMJ3rg9QGOqUBXNROoTZWpDKwDSLasXV%2BpoTRCGpZNlxk5VCjrmzfikvw97wLetpHTuFUjSSdrcAHywGLYGY%2BzCoOAZVwkP%2FV32xT4WgXm4mdbEdxhaGz%2FlYhpmcS4N5SmHxn77sABp12A4CUVorCPKclhWDMU9GuORduw2CV6SY6EnBPhuSQMxOqYBZ2ZkLO5ru5k9j9icJOmkKlMhR5FXFwUvAdUsLrZZ%2BoYXT0&X-Amz-Signature=99ad12860d5b17541af64a4484b243dc03190cdb53252edc8c84769ce2450064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


