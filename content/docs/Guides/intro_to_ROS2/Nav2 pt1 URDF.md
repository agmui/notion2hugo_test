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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LICQGDI%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj59m7oVGcvRYAp1aWhwfn4yWHj8E1ujapRLj2rXnhzwIhALIsBzJSnOR0R5k5f49HPaOadpv2PY4w5WZNekUM0rStKv8DCEsQABoMNjM3NDIzMTgzODA1Igyrmj4HGWWnnUJ1%2BL4q3ANQBjYeiy4w1E4qAZiWYqNyz2iDMi9wZimhGhGK46fo%2F8%2FYHNUneEJYy28DNGOrC%2FHeSk6LCVKxu16MYYcQVxctNuhKtl0ag05iv8mKANkzxafpKCmy2KYhhrIu%2BNxvkQBfqmKlET40lItQm2Xg9aIsPrDis8JUEoCt4g7RoE%2FNf5VnGgvPiQlm1a4q%2FRQGYAyR5X5K62sPZbDcjrxNodCFKHlWtfjNyEk8vMq7LFkQoB15mdwMPgISf4SBq2C4EIb2CFCGAmb7JGs0BU1Q2Mx0CVXPpef2NwqycIdBS%2Fj1rpt61aPuiIL%2FPOLneujZB8r1W6rIBT%2BhLLFxtiv7nuQxEl6AmNxZUTkbKwgMAdnNN8e5iFzy0ipVFnooOHs97a4h40au5i0x9sOB3he2NQKENPYltc8%2FmEZr%2B8MAdpV7sMKlR%2Brub5QLqtnmu4wG2I%2B1BxXja2YHW7TtkicXD1BH72jl%2F7A0tueBlLDjF%2Bndq%2BBeVv6an0pam5VLlwUm4WzWeF7M%2BYzXFBsMI0%2BHqicHDvJ14dE7yvPgb9uBb%2ByaSa4urbnWJI6kZgtgymUgpmqscdlOZ%2BERP%2B%2BveePA7J3L3u5S0Zdrx5kVkNIk25fH%2Bee3QFu2kJAzycghUTCp19rPBjqkAfZt68lVUMcfNogaEemOTo6pfwQsh%2FdOzt1nYiiM0TnqKl5NfolvQSG9cDlNlUnsuZIB0DdPY%2ByabgeDeldWFYWkpQm8bRCiAaIA%2FuFckvY0%2BEHdoUz2N9S4JdkhSvejdRBmsBfixQ%2F%2BzXkCwB4BUmXGdOApYOZUv80wldTrMk5HaZ7rTLcUo8V6YuUEJ0y73p4Vef9sVKjcxmhR22g2EC8YIU1x&X-Amz-Signature=ff3e9773b0745469be87105132c851de69c505296e1e63fa6a1c6b2321559b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LICQGDI%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj59m7oVGcvRYAp1aWhwfn4yWHj8E1ujapRLj2rXnhzwIhALIsBzJSnOR0R5k5f49HPaOadpv2PY4w5WZNekUM0rStKv8DCEsQABoMNjM3NDIzMTgzODA1Igyrmj4HGWWnnUJ1%2BL4q3ANQBjYeiy4w1E4qAZiWYqNyz2iDMi9wZimhGhGK46fo%2F8%2FYHNUneEJYy28DNGOrC%2FHeSk6LCVKxu16MYYcQVxctNuhKtl0ag05iv8mKANkzxafpKCmy2KYhhrIu%2BNxvkQBfqmKlET40lItQm2Xg9aIsPrDis8JUEoCt4g7RoE%2FNf5VnGgvPiQlm1a4q%2FRQGYAyR5X5K62sPZbDcjrxNodCFKHlWtfjNyEk8vMq7LFkQoB15mdwMPgISf4SBq2C4EIb2CFCGAmb7JGs0BU1Q2Mx0CVXPpef2NwqycIdBS%2Fj1rpt61aPuiIL%2FPOLneujZB8r1W6rIBT%2BhLLFxtiv7nuQxEl6AmNxZUTkbKwgMAdnNN8e5iFzy0ipVFnooOHs97a4h40au5i0x9sOB3he2NQKENPYltc8%2FmEZr%2B8MAdpV7sMKlR%2Brub5QLqtnmu4wG2I%2B1BxXja2YHW7TtkicXD1BH72jl%2F7A0tueBlLDjF%2Bndq%2BBeVv6an0pam5VLlwUm4WzWeF7M%2BYzXFBsMI0%2BHqicHDvJ14dE7yvPgb9uBb%2ByaSa4urbnWJI6kZgtgymUgpmqscdlOZ%2BERP%2B%2BveePA7J3L3u5S0Zdrx5kVkNIk25fH%2Bee3QFu2kJAzycghUTCp19rPBjqkAfZt68lVUMcfNogaEemOTo6pfwQsh%2FdOzt1nYiiM0TnqKl5NfolvQSG9cDlNlUnsuZIB0DdPY%2ByabgeDeldWFYWkpQm8bRCiAaIA%2FuFckvY0%2BEHdoUz2N9S4JdkhSvejdRBmsBfixQ%2F%2BzXkCwB4BUmXGdOApYOZUv80wldTrMk5HaZ7rTLcUo8V6YuUEJ0y73p4Vef9sVKjcxmhR22g2EC8YIU1x&X-Amz-Signature=06548912a2229388907517d1aae53938f9299389d46b167584ab8c295cf543ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LICQGDI%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj59m7oVGcvRYAp1aWhwfn4yWHj8E1ujapRLj2rXnhzwIhALIsBzJSnOR0R5k5f49HPaOadpv2PY4w5WZNekUM0rStKv8DCEsQABoMNjM3NDIzMTgzODA1Igyrmj4HGWWnnUJ1%2BL4q3ANQBjYeiy4w1E4qAZiWYqNyz2iDMi9wZimhGhGK46fo%2F8%2FYHNUneEJYy28DNGOrC%2FHeSk6LCVKxu16MYYcQVxctNuhKtl0ag05iv8mKANkzxafpKCmy2KYhhrIu%2BNxvkQBfqmKlET40lItQm2Xg9aIsPrDis8JUEoCt4g7RoE%2FNf5VnGgvPiQlm1a4q%2FRQGYAyR5X5K62sPZbDcjrxNodCFKHlWtfjNyEk8vMq7LFkQoB15mdwMPgISf4SBq2C4EIb2CFCGAmb7JGs0BU1Q2Mx0CVXPpef2NwqycIdBS%2Fj1rpt61aPuiIL%2FPOLneujZB8r1W6rIBT%2BhLLFxtiv7nuQxEl6AmNxZUTkbKwgMAdnNN8e5iFzy0ipVFnooOHs97a4h40au5i0x9sOB3he2NQKENPYltc8%2FmEZr%2B8MAdpV7sMKlR%2Brub5QLqtnmu4wG2I%2B1BxXja2YHW7TtkicXD1BH72jl%2F7A0tueBlLDjF%2Bndq%2BBeVv6an0pam5VLlwUm4WzWeF7M%2BYzXFBsMI0%2BHqicHDvJ14dE7yvPgb9uBb%2ByaSa4urbnWJI6kZgtgymUgpmqscdlOZ%2BERP%2B%2BveePA7J3L3u5S0Zdrx5kVkNIk25fH%2Bee3QFu2kJAzycghUTCp19rPBjqkAfZt68lVUMcfNogaEemOTo6pfwQsh%2FdOzt1nYiiM0TnqKl5NfolvQSG9cDlNlUnsuZIB0DdPY%2ByabgeDeldWFYWkpQm8bRCiAaIA%2FuFckvY0%2BEHdoUz2N9S4JdkhSvejdRBmsBfixQ%2F%2BzXkCwB4BUmXGdOApYOZUv80wldTrMk5HaZ7rTLcUo8V6YuUEJ0y73p4Vef9sVKjcxmhR22g2EC8YIU1x&X-Amz-Signature=92607446b65f19fd01b6b034dc0f3fbaab866b90740f6764a558782c97227f4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LICQGDI%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj59m7oVGcvRYAp1aWhwfn4yWHj8E1ujapRLj2rXnhzwIhALIsBzJSnOR0R5k5f49HPaOadpv2PY4w5WZNekUM0rStKv8DCEsQABoMNjM3NDIzMTgzODA1Igyrmj4HGWWnnUJ1%2BL4q3ANQBjYeiy4w1E4qAZiWYqNyz2iDMi9wZimhGhGK46fo%2F8%2FYHNUneEJYy28DNGOrC%2FHeSk6LCVKxu16MYYcQVxctNuhKtl0ag05iv8mKANkzxafpKCmy2KYhhrIu%2BNxvkQBfqmKlET40lItQm2Xg9aIsPrDis8JUEoCt4g7RoE%2FNf5VnGgvPiQlm1a4q%2FRQGYAyR5X5K62sPZbDcjrxNodCFKHlWtfjNyEk8vMq7LFkQoB15mdwMPgISf4SBq2C4EIb2CFCGAmb7JGs0BU1Q2Mx0CVXPpef2NwqycIdBS%2Fj1rpt61aPuiIL%2FPOLneujZB8r1W6rIBT%2BhLLFxtiv7nuQxEl6AmNxZUTkbKwgMAdnNN8e5iFzy0ipVFnooOHs97a4h40au5i0x9sOB3he2NQKENPYltc8%2FmEZr%2B8MAdpV7sMKlR%2Brub5QLqtnmu4wG2I%2B1BxXja2YHW7TtkicXD1BH72jl%2F7A0tueBlLDjF%2Bndq%2BBeVv6an0pam5VLlwUm4WzWeF7M%2BYzXFBsMI0%2BHqicHDvJ14dE7yvPgb9uBb%2ByaSa4urbnWJI6kZgtgymUgpmqscdlOZ%2BERP%2B%2BveePA7J3L3u5S0Zdrx5kVkNIk25fH%2Bee3QFu2kJAzycghUTCp19rPBjqkAfZt68lVUMcfNogaEemOTo6pfwQsh%2FdOzt1nYiiM0TnqKl5NfolvQSG9cDlNlUnsuZIB0DdPY%2ByabgeDeldWFYWkpQm8bRCiAaIA%2FuFckvY0%2BEHdoUz2N9S4JdkhSvejdRBmsBfixQ%2F%2BzXkCwB4BUmXGdOApYOZUv80wldTrMk5HaZ7rTLcUo8V6YuUEJ0y73p4Vef9sVKjcxmhR22g2EC8YIU1x&X-Amz-Signature=8877a53902fc356b58d0bb0e649a037585fd3bb29ef964bb7b95c094ecee723c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LICQGDI%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj59m7oVGcvRYAp1aWhwfn4yWHj8E1ujapRLj2rXnhzwIhALIsBzJSnOR0R5k5f49HPaOadpv2PY4w5WZNekUM0rStKv8DCEsQABoMNjM3NDIzMTgzODA1Igyrmj4HGWWnnUJ1%2BL4q3ANQBjYeiy4w1E4qAZiWYqNyz2iDMi9wZimhGhGK46fo%2F8%2FYHNUneEJYy28DNGOrC%2FHeSk6LCVKxu16MYYcQVxctNuhKtl0ag05iv8mKANkzxafpKCmy2KYhhrIu%2BNxvkQBfqmKlET40lItQm2Xg9aIsPrDis8JUEoCt4g7RoE%2FNf5VnGgvPiQlm1a4q%2FRQGYAyR5X5K62sPZbDcjrxNodCFKHlWtfjNyEk8vMq7LFkQoB15mdwMPgISf4SBq2C4EIb2CFCGAmb7JGs0BU1Q2Mx0CVXPpef2NwqycIdBS%2Fj1rpt61aPuiIL%2FPOLneujZB8r1W6rIBT%2BhLLFxtiv7nuQxEl6AmNxZUTkbKwgMAdnNN8e5iFzy0ipVFnooOHs97a4h40au5i0x9sOB3he2NQKENPYltc8%2FmEZr%2B8MAdpV7sMKlR%2Brub5QLqtnmu4wG2I%2B1BxXja2YHW7TtkicXD1BH72jl%2F7A0tueBlLDjF%2Bndq%2BBeVv6an0pam5VLlwUm4WzWeF7M%2BYzXFBsMI0%2BHqicHDvJ14dE7yvPgb9uBb%2ByaSa4urbnWJI6kZgtgymUgpmqscdlOZ%2BERP%2B%2BveePA7J3L3u5S0Zdrx5kVkNIk25fH%2Bee3QFu2kJAzycghUTCp19rPBjqkAfZt68lVUMcfNogaEemOTo6pfwQsh%2FdOzt1nYiiM0TnqKl5NfolvQSG9cDlNlUnsuZIB0DdPY%2ByabgeDeldWFYWkpQm8bRCiAaIA%2FuFckvY0%2BEHdoUz2N9S4JdkhSvejdRBmsBfixQ%2F%2BzXkCwB4BUmXGdOApYOZUv80wldTrMk5HaZ7rTLcUo8V6YuUEJ0y73p4Vef9sVKjcxmhR22g2EC8YIU1x&X-Amz-Signature=4e65e199fc6ed59c09e390fba2803809a94c6a18a36ca40d1bd1b1b9dfd71ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LICQGDI%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj59m7oVGcvRYAp1aWhwfn4yWHj8E1ujapRLj2rXnhzwIhALIsBzJSnOR0R5k5f49HPaOadpv2PY4w5WZNekUM0rStKv8DCEsQABoMNjM3NDIzMTgzODA1Igyrmj4HGWWnnUJ1%2BL4q3ANQBjYeiy4w1E4qAZiWYqNyz2iDMi9wZimhGhGK46fo%2F8%2FYHNUneEJYy28DNGOrC%2FHeSk6LCVKxu16MYYcQVxctNuhKtl0ag05iv8mKANkzxafpKCmy2KYhhrIu%2BNxvkQBfqmKlET40lItQm2Xg9aIsPrDis8JUEoCt4g7RoE%2FNf5VnGgvPiQlm1a4q%2FRQGYAyR5X5K62sPZbDcjrxNodCFKHlWtfjNyEk8vMq7LFkQoB15mdwMPgISf4SBq2C4EIb2CFCGAmb7JGs0BU1Q2Mx0CVXPpef2NwqycIdBS%2Fj1rpt61aPuiIL%2FPOLneujZB8r1W6rIBT%2BhLLFxtiv7nuQxEl6AmNxZUTkbKwgMAdnNN8e5iFzy0ipVFnooOHs97a4h40au5i0x9sOB3he2NQKENPYltc8%2FmEZr%2B8MAdpV7sMKlR%2Brub5QLqtnmu4wG2I%2B1BxXja2YHW7TtkicXD1BH72jl%2F7A0tueBlLDjF%2Bndq%2BBeVv6an0pam5VLlwUm4WzWeF7M%2BYzXFBsMI0%2BHqicHDvJ14dE7yvPgb9uBb%2ByaSa4urbnWJI6kZgtgymUgpmqscdlOZ%2BERP%2B%2BveePA7J3L3u5S0Zdrx5kVkNIk25fH%2Bee3QFu2kJAzycghUTCp19rPBjqkAfZt68lVUMcfNogaEemOTo6pfwQsh%2FdOzt1nYiiM0TnqKl5NfolvQSG9cDlNlUnsuZIB0DdPY%2ByabgeDeldWFYWkpQm8bRCiAaIA%2FuFckvY0%2BEHdoUz2N9S4JdkhSvejdRBmsBfixQ%2F%2BzXkCwB4BUmXGdOApYOZUv80wldTrMk5HaZ7rTLcUo8V6YuUEJ0y73p4Vef9sVKjcxmhR22g2EC8YIU1x&X-Amz-Signature=353cb8a40342de1be86289df2cf96510c6ad19a69d9d23965aec86f25cae614e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LICQGDI%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj59m7oVGcvRYAp1aWhwfn4yWHj8E1ujapRLj2rXnhzwIhALIsBzJSnOR0R5k5f49HPaOadpv2PY4w5WZNekUM0rStKv8DCEsQABoMNjM3NDIzMTgzODA1Igyrmj4HGWWnnUJ1%2BL4q3ANQBjYeiy4w1E4qAZiWYqNyz2iDMi9wZimhGhGK46fo%2F8%2FYHNUneEJYy28DNGOrC%2FHeSk6LCVKxu16MYYcQVxctNuhKtl0ag05iv8mKANkzxafpKCmy2KYhhrIu%2BNxvkQBfqmKlET40lItQm2Xg9aIsPrDis8JUEoCt4g7RoE%2FNf5VnGgvPiQlm1a4q%2FRQGYAyR5X5K62sPZbDcjrxNodCFKHlWtfjNyEk8vMq7LFkQoB15mdwMPgISf4SBq2C4EIb2CFCGAmb7JGs0BU1Q2Mx0CVXPpef2NwqycIdBS%2Fj1rpt61aPuiIL%2FPOLneujZB8r1W6rIBT%2BhLLFxtiv7nuQxEl6AmNxZUTkbKwgMAdnNN8e5iFzy0ipVFnooOHs97a4h40au5i0x9sOB3he2NQKENPYltc8%2FmEZr%2B8MAdpV7sMKlR%2Brub5QLqtnmu4wG2I%2B1BxXja2YHW7TtkicXD1BH72jl%2F7A0tueBlLDjF%2Bndq%2BBeVv6an0pam5VLlwUm4WzWeF7M%2BYzXFBsMI0%2BHqicHDvJ14dE7yvPgb9uBb%2ByaSa4urbnWJI6kZgtgymUgpmqscdlOZ%2BERP%2B%2BveePA7J3L3u5S0Zdrx5kVkNIk25fH%2Bee3QFu2kJAzycghUTCp19rPBjqkAfZt68lVUMcfNogaEemOTo6pfwQsh%2FdOzt1nYiiM0TnqKl5NfolvQSG9cDlNlUnsuZIB0DdPY%2ByabgeDeldWFYWkpQm8bRCiAaIA%2FuFckvY0%2BEHdoUz2N9S4JdkhSvejdRBmsBfixQ%2F%2BzXkCwB4BUmXGdOApYOZUv80wldTrMk5HaZ7rTLcUo8V6YuUEJ0y73p4Vef9sVKjcxmhR22g2EC8YIU1x&X-Amz-Signature=d12aa4f686ee604565c4baa9dd9f1dbfe769ea7135f44ff0233e43e567d37634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LICQGDI%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj59m7oVGcvRYAp1aWhwfn4yWHj8E1ujapRLj2rXnhzwIhALIsBzJSnOR0R5k5f49HPaOadpv2PY4w5WZNekUM0rStKv8DCEsQABoMNjM3NDIzMTgzODA1Igyrmj4HGWWnnUJ1%2BL4q3ANQBjYeiy4w1E4qAZiWYqNyz2iDMi9wZimhGhGK46fo%2F8%2FYHNUneEJYy28DNGOrC%2FHeSk6LCVKxu16MYYcQVxctNuhKtl0ag05iv8mKANkzxafpKCmy2KYhhrIu%2BNxvkQBfqmKlET40lItQm2Xg9aIsPrDis8JUEoCt4g7RoE%2FNf5VnGgvPiQlm1a4q%2FRQGYAyR5X5K62sPZbDcjrxNodCFKHlWtfjNyEk8vMq7LFkQoB15mdwMPgISf4SBq2C4EIb2CFCGAmb7JGs0BU1Q2Mx0CVXPpef2NwqycIdBS%2Fj1rpt61aPuiIL%2FPOLneujZB8r1W6rIBT%2BhLLFxtiv7nuQxEl6AmNxZUTkbKwgMAdnNN8e5iFzy0ipVFnooOHs97a4h40au5i0x9sOB3he2NQKENPYltc8%2FmEZr%2B8MAdpV7sMKlR%2Brub5QLqtnmu4wG2I%2B1BxXja2YHW7TtkicXD1BH72jl%2F7A0tueBlLDjF%2Bndq%2BBeVv6an0pam5VLlwUm4WzWeF7M%2BYzXFBsMI0%2BHqicHDvJ14dE7yvPgb9uBb%2ByaSa4urbnWJI6kZgtgymUgpmqscdlOZ%2BERP%2B%2BveePA7J3L3u5S0Zdrx5kVkNIk25fH%2Bee3QFu2kJAzycghUTCp19rPBjqkAfZt68lVUMcfNogaEemOTo6pfwQsh%2FdOzt1nYiiM0TnqKl5NfolvQSG9cDlNlUnsuZIB0DdPY%2ByabgeDeldWFYWkpQm8bRCiAaIA%2FuFckvY0%2BEHdoUz2N9S4JdkhSvejdRBmsBfixQ%2F%2BzXkCwB4BUmXGdOApYOZUv80wldTrMk5HaZ7rTLcUo8V6YuUEJ0y73p4Vef9sVKjcxmhR22g2EC8YIU1x&X-Amz-Signature=b9cafc78abb2cec4843117138c5f4f17af48e96d62dfa9d2b4d00c0db051f553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LICQGDI%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj59m7oVGcvRYAp1aWhwfn4yWHj8E1ujapRLj2rXnhzwIhALIsBzJSnOR0R5k5f49HPaOadpv2PY4w5WZNekUM0rStKv8DCEsQABoMNjM3NDIzMTgzODA1Igyrmj4HGWWnnUJ1%2BL4q3ANQBjYeiy4w1E4qAZiWYqNyz2iDMi9wZimhGhGK46fo%2F8%2FYHNUneEJYy28DNGOrC%2FHeSk6LCVKxu16MYYcQVxctNuhKtl0ag05iv8mKANkzxafpKCmy2KYhhrIu%2BNxvkQBfqmKlET40lItQm2Xg9aIsPrDis8JUEoCt4g7RoE%2FNf5VnGgvPiQlm1a4q%2FRQGYAyR5X5K62sPZbDcjrxNodCFKHlWtfjNyEk8vMq7LFkQoB15mdwMPgISf4SBq2C4EIb2CFCGAmb7JGs0BU1Q2Mx0CVXPpef2NwqycIdBS%2Fj1rpt61aPuiIL%2FPOLneujZB8r1W6rIBT%2BhLLFxtiv7nuQxEl6AmNxZUTkbKwgMAdnNN8e5iFzy0ipVFnooOHs97a4h40au5i0x9sOB3he2NQKENPYltc8%2FmEZr%2B8MAdpV7sMKlR%2Brub5QLqtnmu4wG2I%2B1BxXja2YHW7TtkicXD1BH72jl%2F7A0tueBlLDjF%2Bndq%2BBeVv6an0pam5VLlwUm4WzWeF7M%2BYzXFBsMI0%2BHqicHDvJ14dE7yvPgb9uBb%2ByaSa4urbnWJI6kZgtgymUgpmqscdlOZ%2BERP%2B%2BveePA7J3L3u5S0Zdrx5kVkNIk25fH%2Bee3QFu2kJAzycghUTCp19rPBjqkAfZt68lVUMcfNogaEemOTo6pfwQsh%2FdOzt1nYiiM0TnqKl5NfolvQSG9cDlNlUnsuZIB0DdPY%2ByabgeDeldWFYWkpQm8bRCiAaIA%2FuFckvY0%2BEHdoUz2N9S4JdkhSvejdRBmsBfixQ%2F%2BzXkCwB4BUmXGdOApYOZUv80wldTrMk5HaZ7rTLcUo8V6YuUEJ0y73p4Vef9sVKjcxmhR22g2EC8YIU1x&X-Amz-Signature=c357f65915ab5ebb61dca143d4f7d0e7588e6bfb6e8b567f29eb119e7e9673cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LICQGDI%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj59m7oVGcvRYAp1aWhwfn4yWHj8E1ujapRLj2rXnhzwIhALIsBzJSnOR0R5k5f49HPaOadpv2PY4w5WZNekUM0rStKv8DCEsQABoMNjM3NDIzMTgzODA1Igyrmj4HGWWnnUJ1%2BL4q3ANQBjYeiy4w1E4qAZiWYqNyz2iDMi9wZimhGhGK46fo%2F8%2FYHNUneEJYy28DNGOrC%2FHeSk6LCVKxu16MYYcQVxctNuhKtl0ag05iv8mKANkzxafpKCmy2KYhhrIu%2BNxvkQBfqmKlET40lItQm2Xg9aIsPrDis8JUEoCt4g7RoE%2FNf5VnGgvPiQlm1a4q%2FRQGYAyR5X5K62sPZbDcjrxNodCFKHlWtfjNyEk8vMq7LFkQoB15mdwMPgISf4SBq2C4EIb2CFCGAmb7JGs0BU1Q2Mx0CVXPpef2NwqycIdBS%2Fj1rpt61aPuiIL%2FPOLneujZB8r1W6rIBT%2BhLLFxtiv7nuQxEl6AmNxZUTkbKwgMAdnNN8e5iFzy0ipVFnooOHs97a4h40au5i0x9sOB3he2NQKENPYltc8%2FmEZr%2B8MAdpV7sMKlR%2Brub5QLqtnmu4wG2I%2B1BxXja2YHW7TtkicXD1BH72jl%2F7A0tueBlLDjF%2Bndq%2BBeVv6an0pam5VLlwUm4WzWeF7M%2BYzXFBsMI0%2BHqicHDvJ14dE7yvPgb9uBb%2ByaSa4urbnWJI6kZgtgymUgpmqscdlOZ%2BERP%2B%2BveePA7J3L3u5S0Zdrx5kVkNIk25fH%2Bee3QFu2kJAzycghUTCp19rPBjqkAfZt68lVUMcfNogaEemOTo6pfwQsh%2FdOzt1nYiiM0TnqKl5NfolvQSG9cDlNlUnsuZIB0DdPY%2ByabgeDeldWFYWkpQm8bRCiAaIA%2FuFckvY0%2BEHdoUz2N9S4JdkhSvejdRBmsBfixQ%2F%2BzXkCwB4BUmXGdOApYOZUv80wldTrMk5HaZ7rTLcUo8V6YuUEJ0y73p4Vef9sVKjcxmhR22g2EC8YIU1x&X-Amz-Signature=7c9af4ce1a3abb9de524c683b2fd36fa5dff27a88169c1af033ec4f1c249c282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZROVKFE%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FDTdOwEwmc%2FkMcmXwM7ADgo%2FyiIvD8cJ8%2FhU%2FnS1%2FmgIhANbPih1Kgy5LTI9HpHQf44UYffIviYXyEv8WcwDSXq7GKv8DCEsQABoMNjM3NDIzMTgzODA1IgxKpxhXd7a63XOtwewq3APRhwLX4GtLAlQnoWl5crlGt82moUM4VVUGx%2BIzi8OgqiNsi0CYgtwm8Oua1%2BZOP1xKWcVKraS%2Baf1E3MRPh7CwKDAMcTCshYGnPTtlxdL7aO5eDzSczQa7t626efXZ6QxBbsTAcYGBBfc9WGeYICqiHJMRF%2BaGxCoiaMAcAXgeRpL9IW07P7ezCP%2FQklP0BLxXm7p%2FkG5pUOitck1y13mtskJaF8oG%2BKgPQlgwIiMPzh%2FHep7fjfkUCuMU%2BTbuxBAPFosBNtWacnlfZBM9%2B1VXosqXx%2BFxMytRat7V3LDHgX6tV5bfaZmW5RKLTw%2BQZdd%2BlL1EIlqbuqYnnzvh0wKOYDnVZiGJlYdaUAdrIyq9FdRyrK%2BmQ%2BH7qnnyg8y3NulOPUbZpAjbw4r2BuQmUJW7ArGTYNmYyhwOyPFdCAxQJsNk47gKmt2lJAQNKmYq4CTCvprVJ0BI%2Bm321dJJSVei9s%2FvaSLcU9JzO1NoBBnv7v9i2BantAQRfjrKiUmN6jTQ%2FfdsY3VGOuVPEiGa24YY5WU1DQyDHc6fJr%2FcYOGuUys0uagkb2cB3yHX3yE0ETgH1AaKP8aq2oV33On5NVuuO8HkyCIIlgh8UHRXcX21npufj51TAMJb2lkoPDCh1trPBjqkASN7O8Pvpj8n%2BY%2BuvsARZ9sEbUSzUTBeryhIwtZTFxv9rVgZ%2Bed2bP0ODf%2FEUS7vTfkbuPkl1I76UtNENug6XxgA1ZiM3M%2FoNa8gZhV06iYmyDPsim%2BAt87SLOWxahfutgFNKKSsb%2BtlgdgDQbKmPLVyXamcORPFoMX9JiEmCTgdJ%2FXjkseZg%2FCHErSJ58qQMp0hNfRBpLX7dsRR1sSLCeqegYnA&X-Amz-Signature=cbb37bba3f727d8cbef0edb8e80858389e2e321f758e57f2d3aa0cb1ef9be499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4WCBTG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC040722Ym%2Fh3%2F9pAFhaO9TSvEz7K4tu%2FnFJ1dA33sO2QIgUpVfvpo5nyUx9qdKvJMpLdaJEEoAwGW0eHc6Zz04Eacq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDAzBFh1XerpVYGtCnircA6DPMzTmmbLPEF2W6nCxuLPjESBXGaoEFy1v8kxQ6Ge7jCHvm1z1b%2FJC%2BOWHpNEHRtq3SlGEZNbNL0CnJ6GiQndYE3ntOB4nrmc%2FpmQ7CF53R2YWy5ijZrwHiVXLtpOMhlwsrqgCl0NyXidX4P5Jwzl2GIZvLOr9UCIdvPt1SGNpDSVryvaLzVpDkSeEXZXayVNdRnTrtXjhoV2HZDk8%2FGallqyQpHpfJw6QHGJ4WMNXP5pAebPep1Qj3aKntoA0nzpBHr1sVfAJC1fV3fztW2nP45Mbe1bq0ghSlFJMFa3lU%2FNL87Qs7nIPG5Ak3GEoRm6XheuxVYpiRW%2FqUIwAuyGlr7kZVL0hZ7sNYdnPuiuM5%2FKK9u7eFQvejNeBEq01PfOVMHybsuCiMf%2FPWvcfkj6hGww%2Ff3Oj3PuOmt23iKNn1gGOecPPCQOft9qrM5VLx9kXt%2FO37YIQZ0gdvHnn5xs9jxaPMpZiCUWkwqJvZCdgUl4hjMFBKoIDLTiMZneEliv6UBaA%2F7nst0lwUr6%2Fwd2Pgac2CdXve2K4uR0DPFraFuMLD%2B0C7Ku8%2B6zOqFe5Md4wUL4MBkXF1gVyOVLcbsRX6onAh%2BnO0SJipv6O03LNG0ivDoF9oB4DTaRUMPHY2s8GOqUBuPUbab072DsDTMSC%2BAhJAU8p7JNJJO8iWGEqdu4tuIshWbY9vxQBLnCGdg5BDEWKjrNYhrJxYY0QJdIUx7hoB1dSAc47sCCeFDI7mLavhuo9hS%2FNpglXT5gx2x17SEf41WHkHwD%2FJ39GCjYnnmKraSOVJoRHLBg0CWdAY8uGybZHjQdg01do%2FR0VkIxJQc0O3hfuI4C4KQDI3EnMzXMGoSoYuLLk&X-Amz-Signature=8e6071f68f85c15ed48c4ee9df600a99af1b2fedb9050fc7873f5622803075de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLHGVKRL%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVIZV454loOJDoaGIY0qnIT8gtRM9uR2rtvkXFwNdcaAiBmk3Cm%2BGOiNbHSCGrKyRT8WZ3Hzh3UVSUq6BgZ6434cCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMCK9O%2Bw8T2Zoqd2uRKtwD9h5HUegBU4UUKb5yKoQWPj1DdUQxDH3Apavo44OxKt2xxLEkQOY9vqfCIdYgQSTSz0%2Bdc5E%2Bmpa9X2zFRvx%2BBEFiLUvGc0KaBcT9ejpVwdNZOi60ZCLDjnudP%2BND8Yf3pdB8iC1SCuWIt6%2FBLJwtys7OV3RYyr1GUnMfkD%2FpsCIez64Mmxs%2Bhxh4%2B0rHWD%2BCebB6jBwz69wY9j13Kg5mtBTrtPQCxoTOywI0DkqRAc%2BvXENAl9GmDW%2BClTgedgM2pnSQ%2BgtDqg5iT72isgfgZs4Ve43Wk%2FWi47QHgIdsUmxmsmP%2B%2BrxFNw%2B1Zc5WZQPdBMJSE1cCq8y5M9%2Bx58%2BP4e1eWHMCVK8IP1N83lzQni5SZqWy4BOKMCkUnQ2nWHWT15ZlN5lIWy5Vu%2FpjxjiyQmxEPfboTQZi%2FkAoidWHQM4BufOMuZ6y1dn9F8xEeiapjTE4z3f5oVY3lGBHCkWmYpTaHPYQjasOliD4T%2B9yyJpdP4Phys3eM3mG80gdFUE3yvIbrN%2BMnKg9N3HmcPZp5rl0OCtLReZYb%2BVipGW57MxVZpcjthSkS3PiFdXsl%2Fy0vjn07ywMq%2FY7v%2BjbP4eKTLCnXpCYxS02EpnuvOQfB3wkVzWUk2uOGtP8cTAwrNfazwY6pgGRFUbQjERzhCVlGEEqlSeR6xY%2BMO5p4aRoJzWC9k%2BqySMIKkdhXOaBgan2sJYT4Pfn1NQW2j26DKuPpd%2Bsryl%2BSgY%2FMCoLE4HjGoK7O3COPpR%2BaLzRt%2FWfYXhcCzz7TRRO2D0ZebrarnS%2B7oncpfli4eEoNmrxfzkrFdkxa9JVcZizkbnDCMQXMf5jEEVNhn7cYihzQAMigpDRitwDAMDId0zjIav8&X-Amz-Signature=7ceffc8036f6e98be003aa3bee6148bb27786e861dcc4de4c1b3e4bef6284698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LICQGDI%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj59m7oVGcvRYAp1aWhwfn4yWHj8E1ujapRLj2rXnhzwIhALIsBzJSnOR0R5k5f49HPaOadpv2PY4w5WZNekUM0rStKv8DCEsQABoMNjM3NDIzMTgzODA1Igyrmj4HGWWnnUJ1%2BL4q3ANQBjYeiy4w1E4qAZiWYqNyz2iDMi9wZimhGhGK46fo%2F8%2FYHNUneEJYy28DNGOrC%2FHeSk6LCVKxu16MYYcQVxctNuhKtl0ag05iv8mKANkzxafpKCmy2KYhhrIu%2BNxvkQBfqmKlET40lItQm2Xg9aIsPrDis8JUEoCt4g7RoE%2FNf5VnGgvPiQlm1a4q%2FRQGYAyR5X5K62sPZbDcjrxNodCFKHlWtfjNyEk8vMq7LFkQoB15mdwMPgISf4SBq2C4EIb2CFCGAmb7JGs0BU1Q2Mx0CVXPpef2NwqycIdBS%2Fj1rpt61aPuiIL%2FPOLneujZB8r1W6rIBT%2BhLLFxtiv7nuQxEl6AmNxZUTkbKwgMAdnNN8e5iFzy0ipVFnooOHs97a4h40au5i0x9sOB3he2NQKENPYltc8%2FmEZr%2B8MAdpV7sMKlR%2Brub5QLqtnmu4wG2I%2B1BxXja2YHW7TtkicXD1BH72jl%2F7A0tueBlLDjF%2Bndq%2BBeVv6an0pam5VLlwUm4WzWeF7M%2BYzXFBsMI0%2BHqicHDvJ14dE7yvPgb9uBb%2ByaSa4urbnWJI6kZgtgymUgpmqscdlOZ%2BERP%2B%2BveePA7J3L3u5S0Zdrx5kVkNIk25fH%2Bee3QFu2kJAzycghUTCp19rPBjqkAfZt68lVUMcfNogaEemOTo6pfwQsh%2FdOzt1nYiiM0TnqKl5NfolvQSG9cDlNlUnsuZIB0DdPY%2ByabgeDeldWFYWkpQm8bRCiAaIA%2FuFckvY0%2BEHdoUz2N9S4JdkhSvejdRBmsBfixQ%2F%2BzXkCwB4BUmXGdOApYOZUv80wldTrMk5HaZ7rTLcUo8V6YuUEJ0y73p4Vef9sVKjcxmhR22g2EC8YIU1x&X-Amz-Signature=95bb55b77739c7ec9e1ed4236c226ec0752054d2d144bd6ffe96d0c37e66c3c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKLCD5VT%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKtGRjVB%2FVoMoqut8WzRKsK9HBJ8K3zUdDWzRI5tzIpAiBjYLgnC92iOFewECIBHK9bF86dc1jcmi0DMr%2BPPYGXsCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMl2kgxi0hj7hNTSRaKtwD6gItaUNLVRMxk2Zh9%2F4lmE1Q60ao9xb70j6cnVKhw9u2EHl8t9n3UU%2BgYI1z06BmUwOFHM6Oi4%2B2%2B1yYmWxxeZ0%2BN4c%2BhuQVj7LHW7VaOdAxeA72KNOFQv9N35OQcqOoh8%2BRyF%2BIz8hEyyUEArewieWWeqsN04w17pey1cxEG6guaNZ483wsTdOYGD1af1jo50BBLKw7TUiCRv066X6eveSnrCG3UkW79VaGMX%2FMvs%2BFwGD74PA5gORvExdTFaHu%2FYej2J0Ml8npteFkVVo8J5U6rlmO0mbcD9hWamgFfeoHqa1iamDTvceSnj53b%2BvUs2vfeQuu7D8hSK98D8aJTkEe%2FzyqsBz48TKrdm9FVZyZcew%2BDJCuNi3cXBf%2FK0fGc2CDdFC1aDUO2xkHJSCzpUstdweA48%2Fse3wCUImTp7qzFXSThhuPgba%2FPczyk%2B4OvL2lemQNL%2BYWa%2BZcVqexyYYiVixtLxfHzH0MmD7AQ5wUxFX5JaT20l%2BsNKXQseSId6bxuUAYrwYBnDOgdSjhv3DtlmVXpkd1F8BDRE%2FBLPeZvwsWXznHt5nqs2rAuoMda0EIiNlUgo3fe%2BZSw3dfD9td064QAP8unMsZliYlSXE4BZaJ3bx87V36gMEwjtnazwY6pgECzcsOjU4ZLmv8bvAMJegpofZAX%2FjeAuoz5QyGLJThbx0bs1W0brcGM1cg%2F%2F3LBQr1ajoYC%2FswLRQqIzPoSo15MTIhlYlFNjU2pYz1xaxoidHODk5n5zlWjXU3jEAaYVNXb7HJoRk%2Bg2B56oRfm02SJvE2f4CxYi8AnKGsIrAMAdcgY8gJ0WL8o8xx2GrYl2lH%2BpK9t5X1b8GXWTYfk5MvAQzNveIS&X-Amz-Signature=3545498115491525cf3d36d3a6e2667c704896c63993dde1960d79c0ff14c2ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LICQGDI%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj59m7oVGcvRYAp1aWhwfn4yWHj8E1ujapRLj2rXnhzwIhALIsBzJSnOR0R5k5f49HPaOadpv2PY4w5WZNekUM0rStKv8DCEsQABoMNjM3NDIzMTgzODA1Igyrmj4HGWWnnUJ1%2BL4q3ANQBjYeiy4w1E4qAZiWYqNyz2iDMi9wZimhGhGK46fo%2F8%2FYHNUneEJYy28DNGOrC%2FHeSk6LCVKxu16MYYcQVxctNuhKtl0ag05iv8mKANkzxafpKCmy2KYhhrIu%2BNxvkQBfqmKlET40lItQm2Xg9aIsPrDis8JUEoCt4g7RoE%2FNf5VnGgvPiQlm1a4q%2FRQGYAyR5X5K62sPZbDcjrxNodCFKHlWtfjNyEk8vMq7LFkQoB15mdwMPgISf4SBq2C4EIb2CFCGAmb7JGs0BU1Q2Mx0CVXPpef2NwqycIdBS%2Fj1rpt61aPuiIL%2FPOLneujZB8r1W6rIBT%2BhLLFxtiv7nuQxEl6AmNxZUTkbKwgMAdnNN8e5iFzy0ipVFnooOHs97a4h40au5i0x9sOB3he2NQKENPYltc8%2FmEZr%2B8MAdpV7sMKlR%2Brub5QLqtnmu4wG2I%2B1BxXja2YHW7TtkicXD1BH72jl%2F7A0tueBlLDjF%2Bndq%2BBeVv6an0pam5VLlwUm4WzWeF7M%2BYzXFBsMI0%2BHqicHDvJ14dE7yvPgb9uBb%2ByaSa4urbnWJI6kZgtgymUgpmqscdlOZ%2BERP%2B%2BveePA7J3L3u5S0Zdrx5kVkNIk25fH%2Bee3QFu2kJAzycghUTCp19rPBjqkAfZt68lVUMcfNogaEemOTo6pfwQsh%2FdOzt1nYiiM0TnqKl5NfolvQSG9cDlNlUnsuZIB0DdPY%2ByabgeDeldWFYWkpQm8bRCiAaIA%2FuFckvY0%2BEHdoUz2N9S4JdkhSvejdRBmsBfixQ%2F%2BzXkCwB4BUmXGdOApYOZUv80wldTrMk5HaZ7rTLcUo8V6YuUEJ0y73p4Vef9sVKjcxmhR22g2EC8YIU1x&X-Amz-Signature=6d6086f8a2855d17a6b887b9feb4ca90620958414f45725171a254b09e1496fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ORRWAZB%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnjffs%2B9lR7oDi92VXUa6PEX9kfuBP4zL3Jx21h67gpAiEAw%2BYVCmlw9q%2BH500jDh4bZpkcsVJJ%2B%2FmVeB26QYE7VXYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHPi6uYgXsVVXIMq4ircA62Bw%2F9ppyGT%2F%2B%2FS1A0VBqHuzDjsJT71qfMKvqrUQVZzTF48r%2FQtwt1cR9%2F%2Fkqd8E7r8kA%2Fm0r7HrX07fthNQL2oQhTrQJcrk2Dsy35jGsK1cR%2FkVrADuTPE%2Fl0qNhWPmLUoNKufsEfEbJlCswqeGisqCsoaXkOmGEtGZ2Cca01oTyI3QDdmZBcRAupjn0ohiOkjwY6XolzvtYheN1kX6ZfjZlHmKLsNAtk0ll2Z7mHBCI9MELXplSTVqqWS4P%2F62ZuIa7uzUp%2FarUMDgoCwfAu%2FPEXHNDhL%2B0aJIBQrgcVfSPvTAjYw%2B%2FhcDDwTRctXH5D9KKuMQu1Uxw976IuNY5xcfHQ1D04m8gPOM4bucwZqV8HWvsEn%2BJ%2BtGsthdRgSp2twy4PtYtN3zhwtyHsjnoQQyB7W%2BNO4AlWEq4p5lJ2k%2FYDis0n8PnKBtyuXtWZ4xQLJ7RtcdjiYh1onoEeh2opsRMOQXxDVHmbpC8%2BxYldeuuDZHeRAy8nuEz33nvl72Ga95FZDogy9o9aZ33Vwc20JHwyt7%2BsNBgYeaX0YBqyVj9M01gPknYTttLua3%2FwdA5R%2BlBhje5a%2FSIeQ3v5W12nXLDVdtmN0do%2FOf9OS%2BzpjSF3g9P2mv7GR2buCMKrW2s8GOqUBbZsYWpxVgScFHLUm4ynfHRvBo%2BFBg3ki00Xm7%2F7ArzvYaRJAnv91MpQ%2Fze6WVw%2BHIFt1X47RHkfOd4QMoFEgjseQANdRhWjVZVYPLHhkyAPKZ57yU9VZIiAP%2BkSAps6AoAEtUjnanMg9%2FQYxC9CkQkaimhaPJuqhyV1mPJqdKRlPPpIkwOlMRD%2FTcL%2FGhDBGeANr0YxM5TasJlxtJ637iMG9YYVY&X-Amz-Signature=20b00123c777dec91f24f06534b4064524c2c8737e88ce70d90dd82485a79165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LICQGDI%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj59m7oVGcvRYAp1aWhwfn4yWHj8E1ujapRLj2rXnhzwIhALIsBzJSnOR0R5k5f49HPaOadpv2PY4w5WZNekUM0rStKv8DCEsQABoMNjM3NDIzMTgzODA1Igyrmj4HGWWnnUJ1%2BL4q3ANQBjYeiy4w1E4qAZiWYqNyz2iDMi9wZimhGhGK46fo%2F8%2FYHNUneEJYy28DNGOrC%2FHeSk6LCVKxu16MYYcQVxctNuhKtl0ag05iv8mKANkzxafpKCmy2KYhhrIu%2BNxvkQBfqmKlET40lItQm2Xg9aIsPrDis8JUEoCt4g7RoE%2FNf5VnGgvPiQlm1a4q%2FRQGYAyR5X5K62sPZbDcjrxNodCFKHlWtfjNyEk8vMq7LFkQoB15mdwMPgISf4SBq2C4EIb2CFCGAmb7JGs0BU1Q2Mx0CVXPpef2NwqycIdBS%2Fj1rpt61aPuiIL%2FPOLneujZB8r1W6rIBT%2BhLLFxtiv7nuQxEl6AmNxZUTkbKwgMAdnNN8e5iFzy0ipVFnooOHs97a4h40au5i0x9sOB3he2NQKENPYltc8%2FmEZr%2B8MAdpV7sMKlR%2Brub5QLqtnmu4wG2I%2B1BxXja2YHW7TtkicXD1BH72jl%2F7A0tueBlLDjF%2Bndq%2BBeVv6an0pam5VLlwUm4WzWeF7M%2BYzXFBsMI0%2BHqicHDvJ14dE7yvPgb9uBb%2ByaSa4urbnWJI6kZgtgymUgpmqscdlOZ%2BERP%2B%2BveePA7J3L3u5S0Zdrx5kVkNIk25fH%2Bee3QFu2kJAzycghUTCp19rPBjqkAfZt68lVUMcfNogaEemOTo6pfwQsh%2FdOzt1nYiiM0TnqKl5NfolvQSG9cDlNlUnsuZIB0DdPY%2ByabgeDeldWFYWkpQm8bRCiAaIA%2FuFckvY0%2BEHdoUz2N9S4JdkhSvejdRBmsBfixQ%2F%2BzXkCwB4BUmXGdOApYOZUv80wldTrMk5HaZ7rTLcUo8V6YuUEJ0y73p4Vef9sVKjcxmhR22g2EC8YIU1x&X-Amz-Signature=c790d0cbf1a6085f7547912a5a64a7cb2e45e08af276ce0c6d0722f3b16ca152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQXWSVE%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfpvRyMSlwCDldi%2FOX202Bf9P%2FeLYQcwfurOIXiFawdAiBgAQi2%2Bom%2B9YBErXM8CLNq%2FoW6%2BKbHJNMzJhqnasVqXir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMzbTVluhcu4T72xYkKtwDaz49bRyE01isdS8AcCuj24qAaEV%2F176tGXtpMQZxWD0dmCq2NUL3s4I7u3Jom8ficg4sWB8xelECLevFIYUc54fYP8sWauPJu21EzFZc7fmc4sJxmNYUw3SJVKK6xDpIDGVFsKJlYT82lbD2GDtWbTWKrsOksOhwOQT8jpHI4Cm%2BZ5UTheU%2FpnRfeR%2FvzALQm26IH6HyItzp%2Fp2YgNUwLkVWWRJbGOTy6FItL8zpByTjzjdB%2BsmgHVqcc4x%2BHXfRWDWM%2BPH45Xspj%2BnOFQ06yiflUtWrgEtAWTmtbPNme216Bi%2FAGsGA%2FuBF%2FmA1cIi4Sy6Js0%2BzjDzdsttIcnSOj6H%2FcalU01qQtmi0P5%2BKNmaQrT1QVpnU0cNouDVOQH%2FmPxqo5LnggKVVOicMNxLdaO3WOOgo1UrjRIDwVtyRtrXlbiEz%2BZ170n3BQ7wFg8LjDgUeLfNe4U00eTKRcxE8ilg85P9MLIPX6s4tCEtzeJlfp5RtCc2aQSuP6LABo2i8ga6TmtyfT%2FQiYz572%2BX3%2BiYl2FMQqqs78vp1qeggLCnKBOL9dtjoqSe73JdgH2AJDimo4W2qiSinUFArIg4rzw23YHTE9ngGdKS%2FWXqaWzoZ7mENuBxEn6EeGK4w2tjazwY6pgFQSjkaQ66II5S0w6ohUp0kNH8ARa86oeza651dnk8Rb39Xv6PIee5FDjR47zJ8TIr48nG0gvmOUfcwpOEil43bWaoy%2FoA0KwgAo%2BF5k0JfoPlpqhWOWDY3T0Bq5%2BLMI23cVOOEzu3USe%2FPMgHaQvcM%2FvQbN5RrfvGF%2Bm733dAP7ApgRaKbRLBjRBo6ojOFjMUxm9Lpn1OCNRXGJi1jchV5%2BqxtU99k&X-Amz-Signature=160327a3f0b79bf0b51fec8787af26fc983fcbc62a3bbbafee772f791c36eb57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LICQGDI%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj59m7oVGcvRYAp1aWhwfn4yWHj8E1ujapRLj2rXnhzwIhALIsBzJSnOR0R5k5f49HPaOadpv2PY4w5WZNekUM0rStKv8DCEsQABoMNjM3NDIzMTgzODA1Igyrmj4HGWWnnUJ1%2BL4q3ANQBjYeiy4w1E4qAZiWYqNyz2iDMi9wZimhGhGK46fo%2F8%2FYHNUneEJYy28DNGOrC%2FHeSk6LCVKxu16MYYcQVxctNuhKtl0ag05iv8mKANkzxafpKCmy2KYhhrIu%2BNxvkQBfqmKlET40lItQm2Xg9aIsPrDis8JUEoCt4g7RoE%2FNf5VnGgvPiQlm1a4q%2FRQGYAyR5X5K62sPZbDcjrxNodCFKHlWtfjNyEk8vMq7LFkQoB15mdwMPgISf4SBq2C4EIb2CFCGAmb7JGs0BU1Q2Mx0CVXPpef2NwqycIdBS%2Fj1rpt61aPuiIL%2FPOLneujZB8r1W6rIBT%2BhLLFxtiv7nuQxEl6AmNxZUTkbKwgMAdnNN8e5iFzy0ipVFnooOHs97a4h40au5i0x9sOB3he2NQKENPYltc8%2FmEZr%2B8MAdpV7sMKlR%2Brub5QLqtnmu4wG2I%2B1BxXja2YHW7TtkicXD1BH72jl%2F7A0tueBlLDjF%2Bndq%2BBeVv6an0pam5VLlwUm4WzWeF7M%2BYzXFBsMI0%2BHqicHDvJ14dE7yvPgb9uBb%2ByaSa4urbnWJI6kZgtgymUgpmqscdlOZ%2BERP%2B%2BveePA7J3L3u5S0Zdrx5kVkNIk25fH%2Bee3QFu2kJAzycghUTCp19rPBjqkAfZt68lVUMcfNogaEemOTo6pfwQsh%2FdOzt1nYiiM0TnqKl5NfolvQSG9cDlNlUnsuZIB0DdPY%2ByabgeDeldWFYWkpQm8bRCiAaIA%2FuFckvY0%2BEHdoUz2N9S4JdkhSvejdRBmsBfixQ%2F%2BzXkCwB4BUmXGdOApYOZUv80wldTrMk5HaZ7rTLcUo8V6YuUEJ0y73p4Vef9sVKjcxmhR22g2EC8YIU1x&X-Amz-Signature=e8fec57fd121a26f57f115058d560597ab6101bb0cce4ffb5c3ae361ececaa8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4D5BFHY%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTpXe0XAdwi89EITLFa9Td7D3XQDYayDd8YjVhNGoudwIhAORuAeawggc2RMOISwwMZQkYLfY1LlJ19nB2r04IP3VXKv8DCEwQABoMNjM3NDIzMTgzODA1IgxjqhZsFzLkLFGVAQYq3AO1MfkvYR%2FJSgyyr2uf0qFW7gwHP0LBX7vLz5yaBjC4LcCJSE9%2BVFH7Q7A6Og9eK%2BMzY8JtfkI6ALTxJeTvQ1AWKzjNukNwzXuQdcqG2PLEXKXB4X168LC3Nd00LKgJOxtFZHIcB%2FYlcEjCvZTgZcKjOWURefihicifmqUiA4tes8cXvfQb6clkupUnZsaRQaX7FavmFuEhuq%2BLgxjbmLyl9fqqprfZciWeEPoPfje%2BEC9XHmP8%2BYECIFHLZ3u%2Bi7QW%2FyEyKGXVlbREwTkvMwd5Ymfq0rB73o0Z9jTh8DhKGRcOI55A0zmsVt8HRDirOWN%2BaIFtljYBT7nn6xga099a6QZNkq%2BAsO%2BApMinUDhv6kFmkNSAl8VDPkfeiBDosc7PttKEknRf0anV5TGdpH78NiQB4J2k8PR0xUhYd1JlCLdLs22rp7Fbsr1mjlqVyeU1PxUdcLYhNuWNAC5mRXbVMyARGO80POLDp746C0R4I6Z2Ldpg%2FVz6T4jMQbIA5M8VotnsKykD8Sf%2FnkXbm6l%2F85tFg1dcQq6HEH4IFRJ3jc955rt9R2ugVBQoUuGOwO%2B%2FGUp7k3GT3MYlikYzpzugfNX8fyS52Grj0oBb95bsP5FoluKzHDwjJE0FCzCm5drPBjqkAa8HZrIFJSJ78nbZJhUoCmR%2B9tcKMMWtWuQiZ7Z48GneI%2BMD1m8OtuieYiB3%2Ffwa9dkMAywDMblofPogmcwb6JF2xJuQdDG3sH6dKqIue5ihIIM4hh6zW8yjlG3imJwkIJE3B17fYZAmZdy456NAhpwNOJzBAeuiRKu4vsJfpXjwLDTAo43OazMmuzu%2BmdbAZwi9dI1%2BPJmks7gCtYhI9t9zwr4T&X-Amz-Signature=8bcac484af8dd5718118869fcc26305ea619227d42f3b8f14c808bc6653296cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LICQGDI%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj59m7oVGcvRYAp1aWhwfn4yWHj8E1ujapRLj2rXnhzwIhALIsBzJSnOR0R5k5f49HPaOadpv2PY4w5WZNekUM0rStKv8DCEsQABoMNjM3NDIzMTgzODA1Igyrmj4HGWWnnUJ1%2BL4q3ANQBjYeiy4w1E4qAZiWYqNyz2iDMi9wZimhGhGK46fo%2F8%2FYHNUneEJYy28DNGOrC%2FHeSk6LCVKxu16MYYcQVxctNuhKtl0ag05iv8mKANkzxafpKCmy2KYhhrIu%2BNxvkQBfqmKlET40lItQm2Xg9aIsPrDis8JUEoCt4g7RoE%2FNf5VnGgvPiQlm1a4q%2FRQGYAyR5X5K62sPZbDcjrxNodCFKHlWtfjNyEk8vMq7LFkQoB15mdwMPgISf4SBq2C4EIb2CFCGAmb7JGs0BU1Q2Mx0CVXPpef2NwqycIdBS%2Fj1rpt61aPuiIL%2FPOLneujZB8r1W6rIBT%2BhLLFxtiv7nuQxEl6AmNxZUTkbKwgMAdnNN8e5iFzy0ipVFnooOHs97a4h40au5i0x9sOB3he2NQKENPYltc8%2FmEZr%2B8MAdpV7sMKlR%2Brub5QLqtnmu4wG2I%2B1BxXja2YHW7TtkicXD1BH72jl%2F7A0tueBlLDjF%2Bndq%2BBeVv6an0pam5VLlwUm4WzWeF7M%2BYzXFBsMI0%2BHqicHDvJ14dE7yvPgb9uBb%2ByaSa4urbnWJI6kZgtgymUgpmqscdlOZ%2BERP%2B%2BveePA7J3L3u5S0Zdrx5kVkNIk25fH%2Bee3QFu2kJAzycghUTCp19rPBjqkAfZt68lVUMcfNogaEemOTo6pfwQsh%2FdOzt1nYiiM0TnqKl5NfolvQSG9cDlNlUnsuZIB0DdPY%2ByabgeDeldWFYWkpQm8bRCiAaIA%2FuFckvY0%2BEHdoUz2N9S4JdkhSvejdRBmsBfixQ%2F%2BzXkCwB4BUmXGdOApYOZUv80wldTrMk5HaZ7rTLcUo8V6YuUEJ0y73p4Vef9sVKjcxmhR22g2EC8YIU1x&X-Amz-Signature=e212971a1216c4eaa6a29b934bf4d856fe6ad6f19bf75d6ce17fd0207e25738c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGLQZCYS%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB8Ch3ND9pmLi4fN4yxGTeVlSyLl4xXkUvL1lTs8YdlAIhAOR1BdAwTQGVRQC08rNuFYwI9PXM7kBtqXfTUf3xZpLhKv8DCEsQABoMNjM3NDIzMTgzODA1IgwBqjTJYaOsaCBrq74q3AP3o7kFs76LVlVH35eX7gJ2sQ6ituxId3m24Bo1dgAxvqlAJaHNiTDuGfGJOjfup%2BljQsG3r1BpRt2t8QWmvZL2XshcgWNUGxkMbDSBQOMl0Q2aIP3BybPSzX%2BT0mEVSDhGOFOHzzwXQcTqRBocUASZo1PktHpdB90WFd2I29%2F9GouLzFGxkNrRcTK6YowhGbwNPPnnZTTFIzTVnwjY2MPsWRJiackMj6DYVQsPOSQVRVAtAiDrVlQG3rtT3dF1U%2F1MYLZNUi26XoRvKiEgz1%2Futs864ep2eINeC7FoG6KDteclOKwu8HeYOps%2Fw8JbTUISqjxYh9xwOf6%2BGz4707U3LbeXoRB7uCc28QKvYGSdRf32BmpwVatKV7r8Z1N0Qse2rX%2Fnv7lMJo0S6IsxHzXKmAET2rILTNJizFod97UlTOCLHDoccT5dQ34iytR%2BxVH7KvH8Os7T0zpZzvbjJ9sXYywtFgmHWL9o1FPR5zMvHcI6T5pqy1rl3SFwAIJqLalt6h8ea6gS7RYvUIRhPJwMpAARMCcrMRa%2BtHs3kRwrgiLBiCp4%2FzeJivregXj1Q0sLifkfTveeTlxqpHPmWFNstvehPBAugQZBZlBCtR%2B91FfVh5Ec%2BPItxew2bjD21drPBjqkAaA2GAnVe%2F%2BcEqHERDGmo4qrgcR6ngR4jzYZ6lgIi9AT3iwvSCFAcUKX7qHU4lR6CujVSmVpTyKd86%2Fvo%2FbBMCAp1fc4gOjwbgtvaxffg64jC%2BKPmKwOGc2V9vYVE9xjLuHE%2Fwsvf9QyrxwxVCcL5g8iFCrLJ9Tq83JX4BHch0brItuVnoWRMjLJFtNAY1LdFXG47otV3XQKwrVM68S1EHddsWKz&X-Amz-Signature=f7a869d8f2e2f73382d7b98137a6e240def6f0ff61aab64dd5e64b81b83ef73e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WLL3MR7%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWujouAJJ%2BDRA3wv%2F21sXyODSUYdE75B%2B9cjGkPOCsgAIgEHIqI4MppRxw7S79EJL2oV7UZRK5J7pvsaj%2BeXDIchkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFXLLWeRxuBGnlOwHircA1v%2B%2BYi3781lQTQK7mRS0MLFRtqp2RLGWnmaBTcFAeh9qmuhbUbnRW7qzmCSQxSxqY9UbjDprJh3su5OtjLz%2FSlZMDmQzwmcI2Y7gnVwaxvtBMJyev18Rd5CGl2%2BKdrHaF%2B05827AL5Y4gVF5wXk8dARk9EOMgY6q6UIBUl8nQBwPxSzVhmpj4DtaTR%2BE4IgHIjr6tQRidVK4UxqVUll8SQg7RF%2FxIfs0DUeHMQA5aAbuuT0HyIjDuHjXcx2mLkyrZraai3lfnYxYMl%2FszelDMQxPYc8%2FiRCPN72iGXLk9vxhQnhgiUjLFBOumS13VtnE8hIJxwwPY%2F3PxpS7s%2F5UzFkY6yMIqMYi644q3D7qZYOPGgVeauzUJsuRFJFJI1b6xsHXU3Xb%2BZ5cpfedHbXXtPpkWkhyFSGySmqxi1Sx8aV8y9yQAIEZ32%2FAtZiCPZ4NNnSnJ4lCD85YDEd1h5LrpHZ10Zo5x73%2B4py8f4Gitg%2FaoeA7Dju45mNSnOoBI2U6gEmvHesOnir6pNDGn6WgchaO%2F%2BGbR8VDiKDETTBo6pDmji4H%2BPFcoYuXiRjhyX6HKXkEYgsV0N3dAh5Nn0cfcVhPGuf76DLztzZ5uKzhYGpAd%2BsALCpNsHvIogPMIHX2s8GOqUB3UTYjIng7TccbWozoS%2FVTPPdZzKLxg83iTz%2FMq0a51eXK7TfCoqTssVqBxFzynJt7bd4u44n1ZBNxUpp7gioKwGlggr0iGUjOyA3VBCyXqhoGxVCGhHZeCwFuUqXZRXuviFqB6qGMHBiyXkxli%2FDsJ4KjwmR5LZ%2FY98xznBz9ViMCzBDmvWjjUsGMEyTOzIcsu55PwIHxvJ1r8M2sHt3fk4w%2FaCm&X-Amz-Signature=f0ab5e61a0f79abb34ed2744530ba35019f6a47af0d6714ea7bd3532b8aa43b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBHCLWUI%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC50JvhjAjUErSk7DisNPXFr%2BXWKVdKNM8wD6nwEt5CFgIgRaQpiK5NOm0%2FLZPU5fotMgON3OmzMbDH4oEkIhrsVNYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIofjsT5tvy8v31QKCrcA8W1vrfqmlw2czT5maGvNMvxvGkFSkSB%2Brgjt%2BBuqd7YQ3E2DwviqBF1WsjnkPfgDzqfAkaZw4WCmt%2Bc1C5PYT97FKAyd0GbmRIqyCx5qu15QJ4ibO9dZjIX2eHiBgstF8iZljdLPU9xQuSlgXMZ5RgIE7%2BtqHyb4ZNTmX8DeiIJ8FdUFivxNjwtCE6a1tecqaHdJHInoA641WGzQJq5iSssp9c2zEuqdDks3XIjGFXQIK15Ast%2BDzR5aYKTpDi58Q3XbWI0f8IkwGY%2FZhOYoreGxSd7JOwJDTGb4eRTflZKXxwQHBai8g3y50324WbvT%2FEovhbt2QmmOoyn0yUwh9QPoiiFxcgL5GzYmT487X6nFVV1DTtHu9bJfsrz27lVk22%2BhOvit%2Bes2tMniqkE%2ByeVirk%2FeEOmKV23r4MX6oenXdFo0B5p9ciCntvbptbsEhdCicQaAcqh3EIx7kA5bMbBX%2B4ueM5QYMBbFMZNYTZfd9in4%2BJsvGsmSi4vO3ajJ2rDWicf7Q1PFyvmIJeM%2Bvi%2FENl5a6tuYPls%2Bk1lwr%2F%2FnRXb2kSmlAXu6Xqs5RW09Fs63QZ8xVzUiDkR%2FFaC9sCDTBJEIVs88g8aDT6xkryjdJMF%2F3vi5KwZI0zFMMjY2s8GOqUBr6oP1bIfjgbubP6SYBgJITqR7NkqYMTrLAcrEns4Mz5hP2liqeAIjbJzwiOxGGSNjijDYkWayEgJFFL7d4hCB8VXO4XorXweV1MjLTrwkcdUAmzWKOsF8srAe28a%2FmgNcskpLbQvPTF%2FzYNEfDpeQTf7OQXWbjOJ48DIb%2F3JBm9PRm9VP8KDE0kAKXnujDT829Y1wa6%2Fnkr2whpfSOBqTk1YhQfg&X-Amz-Signature=e48c3cbce3dde046c876ca17dd81b4ad759d9cddb6fd898af9dc4549cd8a7abe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LICQGDI%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj59m7oVGcvRYAp1aWhwfn4yWHj8E1ujapRLj2rXnhzwIhALIsBzJSnOR0R5k5f49HPaOadpv2PY4w5WZNekUM0rStKv8DCEsQABoMNjM3NDIzMTgzODA1Igyrmj4HGWWnnUJ1%2BL4q3ANQBjYeiy4w1E4qAZiWYqNyz2iDMi9wZimhGhGK46fo%2F8%2FYHNUneEJYy28DNGOrC%2FHeSk6LCVKxu16MYYcQVxctNuhKtl0ag05iv8mKANkzxafpKCmy2KYhhrIu%2BNxvkQBfqmKlET40lItQm2Xg9aIsPrDis8JUEoCt4g7RoE%2FNf5VnGgvPiQlm1a4q%2FRQGYAyR5X5K62sPZbDcjrxNodCFKHlWtfjNyEk8vMq7LFkQoB15mdwMPgISf4SBq2C4EIb2CFCGAmb7JGs0BU1Q2Mx0CVXPpef2NwqycIdBS%2Fj1rpt61aPuiIL%2FPOLneujZB8r1W6rIBT%2BhLLFxtiv7nuQxEl6AmNxZUTkbKwgMAdnNN8e5iFzy0ipVFnooOHs97a4h40au5i0x9sOB3he2NQKENPYltc8%2FmEZr%2B8MAdpV7sMKlR%2Brub5QLqtnmu4wG2I%2B1BxXja2YHW7TtkicXD1BH72jl%2F7A0tueBlLDjF%2Bndq%2BBeVv6an0pam5VLlwUm4WzWeF7M%2BYzXFBsMI0%2BHqicHDvJ14dE7yvPgb9uBb%2ByaSa4urbnWJI6kZgtgymUgpmqscdlOZ%2BERP%2B%2BveePA7J3L3u5S0Zdrx5kVkNIk25fH%2Bee3QFu2kJAzycghUTCp19rPBjqkAfZt68lVUMcfNogaEemOTo6pfwQsh%2FdOzt1nYiiM0TnqKl5NfolvQSG9cDlNlUnsuZIB0DdPY%2ByabgeDeldWFYWkpQm8bRCiAaIA%2FuFckvY0%2BEHdoUz2N9S4JdkhSvejdRBmsBfixQ%2F%2BzXkCwB4BUmXGdOApYOZUv80wldTrMk5HaZ7rTLcUo8V6YuUEJ0y73p4Vef9sVKjcxmhR22g2EC8YIU1x&X-Amz-Signature=0ef81ec43daa447f14552c4b2239f90bf55b96855a8489530b850e33af091816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LICQGDI%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj59m7oVGcvRYAp1aWhwfn4yWHj8E1ujapRLj2rXnhzwIhALIsBzJSnOR0R5k5f49HPaOadpv2PY4w5WZNekUM0rStKv8DCEsQABoMNjM3NDIzMTgzODA1Igyrmj4HGWWnnUJ1%2BL4q3ANQBjYeiy4w1E4qAZiWYqNyz2iDMi9wZimhGhGK46fo%2F8%2FYHNUneEJYy28DNGOrC%2FHeSk6LCVKxu16MYYcQVxctNuhKtl0ag05iv8mKANkzxafpKCmy2KYhhrIu%2BNxvkQBfqmKlET40lItQm2Xg9aIsPrDis8JUEoCt4g7RoE%2FNf5VnGgvPiQlm1a4q%2FRQGYAyR5X5K62sPZbDcjrxNodCFKHlWtfjNyEk8vMq7LFkQoB15mdwMPgISf4SBq2C4EIb2CFCGAmb7JGs0BU1Q2Mx0CVXPpef2NwqycIdBS%2Fj1rpt61aPuiIL%2FPOLneujZB8r1W6rIBT%2BhLLFxtiv7nuQxEl6AmNxZUTkbKwgMAdnNN8e5iFzy0ipVFnooOHs97a4h40au5i0x9sOB3he2NQKENPYltc8%2FmEZr%2B8MAdpV7sMKlR%2Brub5QLqtnmu4wG2I%2B1BxXja2YHW7TtkicXD1BH72jl%2F7A0tueBlLDjF%2Bndq%2BBeVv6an0pam5VLlwUm4WzWeF7M%2BYzXFBsMI0%2BHqicHDvJ14dE7yvPgb9uBb%2ByaSa4urbnWJI6kZgtgymUgpmqscdlOZ%2BERP%2B%2BveePA7J3L3u5S0Zdrx5kVkNIk25fH%2Bee3QFu2kJAzycghUTCp19rPBjqkAfZt68lVUMcfNogaEemOTo6pfwQsh%2FdOzt1nYiiM0TnqKl5NfolvQSG9cDlNlUnsuZIB0DdPY%2ByabgeDeldWFYWkpQm8bRCiAaIA%2FuFckvY0%2BEHdoUz2N9S4JdkhSvejdRBmsBfixQ%2F%2BzXkCwB4BUmXGdOApYOZUv80wldTrMk5HaZ7rTLcUo8V6YuUEJ0y73p4Vef9sVKjcxmhR22g2EC8YIU1x&X-Amz-Signature=bb24c601610a0760a705d8c260e7d999d23ec45768656f03391ae6e8d5307e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MR44QW%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzt7msDbyAJcFPm8Fhma%2FfnnDpvHqV37vEeQbLyCBgUAiBZL79oqlHbV%2FxEmYyVvmrQjcd8fjDrN%2Bf9f3UNMqeXpCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMjbEAtlKeC3N6auzuKtwDt1pH4AIDBitj%2FfXb2t3xmDCVN9kTb2gv9sD4%2B3Y8tg2E69UL1BGASk4Ujn8K9kd6zJNCcasFxKhRdkj2O%2B8NsY5lA9IbwmCRzQvionu%2FaGFq74%2F%2BvkPwVJ%2BMEtfxcXqxi0UnZe3CXta9CB6229dZgkC8pl%2FJKCPdMDT7o3DFcqG3jnvCOIIa68RR%2BSCmJwrYEhOToAH5cSBqdj8XdIl6%2F6LGc79G0hChyd8EpNoIMxW1GxQnyk0oHeNqnMR%2FgnmlbPmdqzCTtTCpduu3iEETnNcenNkJnE9ukJQNtEeDEBY363CcpdSFF2Vpp%2BDb3uR8F%2FacqKy%2FbMEHEviU%2B3DMZDziOZw34JBRKQunThvfmnuZLtjC3YC4mVQdNACPkGASxJP8GclgMxyGLTTmzJXt%2FeUEUtktU%2BQVmav9gH4N3deXamt3pvX3xZ1GahCp3MdyP4ACvQ2lxkqD6CYHDZ7QO23WSL2R0kgFsDJ%2B9Pn8sZW1Zyzf9dG80nUOF0su%2FtI7Cb9prR9%2FGss6CCKRa3XbzpydLECpY8naFE2QEOlqJNwB71j5jjC9NC0qi%2B5C6GmYcG099%2FhNArHsFOSajGsGAtBW%2BbgPn0ebSuvpV%2BUuYJFsIkJsFdvGphSLZLowx9bazwY6pgH12v7viWDsoQywyWyqEIwLmFNHvFmeG9VCou56se2DiZ40FeIZ0wOZieksGNNiJS0etekCR0m6zt84fuaw2p61V1%2FXBWC0K8vrZqAPs9WfM6%2FcHBikD6WOZWCc4EvMT4ZoyADSQ3b60pb%2FimQIZctqIonu21Vs2wyOC9WYLKUaelZaK%2BuUuLGXsNUJVeVvqI8Ck04eSfQTevgxyDuU7FWf2nUhcZc9&X-Amz-Signature=2f5e83e9aaea43ca536e687ef95f36d80f2992c42a6dac118f84773d7345cb51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MR44QW%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzt7msDbyAJcFPm8Fhma%2FfnnDpvHqV37vEeQbLyCBgUAiBZL79oqlHbV%2FxEmYyVvmrQjcd8fjDrN%2Bf9f3UNMqeXpCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMjbEAtlKeC3N6auzuKtwDt1pH4AIDBitj%2FfXb2t3xmDCVN9kTb2gv9sD4%2B3Y8tg2E69UL1BGASk4Ujn8K9kd6zJNCcasFxKhRdkj2O%2B8NsY5lA9IbwmCRzQvionu%2FaGFq74%2F%2BvkPwVJ%2BMEtfxcXqxi0UnZe3CXta9CB6229dZgkC8pl%2FJKCPdMDT7o3DFcqG3jnvCOIIa68RR%2BSCmJwrYEhOToAH5cSBqdj8XdIl6%2F6LGc79G0hChyd8EpNoIMxW1GxQnyk0oHeNqnMR%2FgnmlbPmdqzCTtTCpduu3iEETnNcenNkJnE9ukJQNtEeDEBY363CcpdSFF2Vpp%2BDb3uR8F%2FacqKy%2FbMEHEviU%2B3DMZDziOZw34JBRKQunThvfmnuZLtjC3YC4mVQdNACPkGASxJP8GclgMxyGLTTmzJXt%2FeUEUtktU%2BQVmav9gH4N3deXamt3pvX3xZ1GahCp3MdyP4ACvQ2lxkqD6CYHDZ7QO23WSL2R0kgFsDJ%2B9Pn8sZW1Zyzf9dG80nUOF0su%2FtI7Cb9prR9%2FGss6CCKRa3XbzpydLECpY8naFE2QEOlqJNwB71j5jjC9NC0qi%2B5C6GmYcG099%2FhNArHsFOSajGsGAtBW%2BbgPn0ebSuvpV%2BUuYJFsIkJsFdvGphSLZLowx9bazwY6pgH12v7viWDsoQywyWyqEIwLmFNHvFmeG9VCou56se2DiZ40FeIZ0wOZieksGNNiJS0etekCR0m6zt84fuaw2p61V1%2FXBWC0K8vrZqAPs9WfM6%2FcHBikD6WOZWCc4EvMT4ZoyADSQ3b60pb%2FimQIZctqIonu21Vs2wyOC9WYLKUaelZaK%2BuUuLGXsNUJVeVvqI8Ck04eSfQTevgxyDuU7FWf2nUhcZc9&X-Amz-Signature=ee539d01ecf748955a30d198ff2ee8e7529d32e309ffbae4eb15d2e526ee1fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MR44QW%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzt7msDbyAJcFPm8Fhma%2FfnnDpvHqV37vEeQbLyCBgUAiBZL79oqlHbV%2FxEmYyVvmrQjcd8fjDrN%2Bf9f3UNMqeXpCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMjbEAtlKeC3N6auzuKtwDt1pH4AIDBitj%2FfXb2t3xmDCVN9kTb2gv9sD4%2B3Y8tg2E69UL1BGASk4Ujn8K9kd6zJNCcasFxKhRdkj2O%2B8NsY5lA9IbwmCRzQvionu%2FaGFq74%2F%2BvkPwVJ%2BMEtfxcXqxi0UnZe3CXta9CB6229dZgkC8pl%2FJKCPdMDT7o3DFcqG3jnvCOIIa68RR%2BSCmJwrYEhOToAH5cSBqdj8XdIl6%2F6LGc79G0hChyd8EpNoIMxW1GxQnyk0oHeNqnMR%2FgnmlbPmdqzCTtTCpduu3iEETnNcenNkJnE9ukJQNtEeDEBY363CcpdSFF2Vpp%2BDb3uR8F%2FacqKy%2FbMEHEviU%2B3DMZDziOZw34JBRKQunThvfmnuZLtjC3YC4mVQdNACPkGASxJP8GclgMxyGLTTmzJXt%2FeUEUtktU%2BQVmav9gH4N3deXamt3pvX3xZ1GahCp3MdyP4ACvQ2lxkqD6CYHDZ7QO23WSL2R0kgFsDJ%2B9Pn8sZW1Zyzf9dG80nUOF0su%2FtI7Cb9prR9%2FGss6CCKRa3XbzpydLECpY8naFE2QEOlqJNwB71j5jjC9NC0qi%2B5C6GmYcG099%2FhNArHsFOSajGsGAtBW%2BbgPn0ebSuvpV%2BUuYJFsIkJsFdvGphSLZLowx9bazwY6pgH12v7viWDsoQywyWyqEIwLmFNHvFmeG9VCou56se2DiZ40FeIZ0wOZieksGNNiJS0etekCR0m6zt84fuaw2p61V1%2FXBWC0K8vrZqAPs9WfM6%2FcHBikD6WOZWCc4EvMT4ZoyADSQ3b60pb%2FimQIZctqIonu21Vs2wyOC9WYLKUaelZaK%2BuUuLGXsNUJVeVvqI8Ck04eSfQTevgxyDuU7FWf2nUhcZc9&X-Amz-Signature=68f197c482c55deed8d3bcba2f4887c6425c74c7abb2ec182628e7ec6a71ee48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MR44QW%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzt7msDbyAJcFPm8Fhma%2FfnnDpvHqV37vEeQbLyCBgUAiBZL79oqlHbV%2FxEmYyVvmrQjcd8fjDrN%2Bf9f3UNMqeXpCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMjbEAtlKeC3N6auzuKtwDt1pH4AIDBitj%2FfXb2t3xmDCVN9kTb2gv9sD4%2B3Y8tg2E69UL1BGASk4Ujn8K9kd6zJNCcasFxKhRdkj2O%2B8NsY5lA9IbwmCRzQvionu%2FaGFq74%2F%2BvkPwVJ%2BMEtfxcXqxi0UnZe3CXta9CB6229dZgkC8pl%2FJKCPdMDT7o3DFcqG3jnvCOIIa68RR%2BSCmJwrYEhOToAH5cSBqdj8XdIl6%2F6LGc79G0hChyd8EpNoIMxW1GxQnyk0oHeNqnMR%2FgnmlbPmdqzCTtTCpduu3iEETnNcenNkJnE9ukJQNtEeDEBY363CcpdSFF2Vpp%2BDb3uR8F%2FacqKy%2FbMEHEviU%2B3DMZDziOZw34JBRKQunThvfmnuZLtjC3YC4mVQdNACPkGASxJP8GclgMxyGLTTmzJXt%2FeUEUtktU%2BQVmav9gH4N3deXamt3pvX3xZ1GahCp3MdyP4ACvQ2lxkqD6CYHDZ7QO23WSL2R0kgFsDJ%2B9Pn8sZW1Zyzf9dG80nUOF0su%2FtI7Cb9prR9%2FGss6CCKRa3XbzpydLECpY8naFE2QEOlqJNwB71j5jjC9NC0qi%2B5C6GmYcG099%2FhNArHsFOSajGsGAtBW%2BbgPn0ebSuvpV%2BUuYJFsIkJsFdvGphSLZLowx9bazwY6pgH12v7viWDsoQywyWyqEIwLmFNHvFmeG9VCou56se2DiZ40FeIZ0wOZieksGNNiJS0etekCR0m6zt84fuaw2p61V1%2FXBWC0K8vrZqAPs9WfM6%2FcHBikD6WOZWCc4EvMT4ZoyADSQ3b60pb%2FimQIZctqIonu21Vs2wyOC9WYLKUaelZaK%2BuUuLGXsNUJVeVvqI8Ck04eSfQTevgxyDuU7FWf2nUhcZc9&X-Amz-Signature=36806ca9cc7e76563a7323e190bfcd735309bfd4a05f58e945ffbddab761e0aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOZESHQ%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtEYhNm9%2FwI%2BwYA5jfcM0EluVUQ%2FfyaI7594Z4he9gFgIgSbF8KO7ssNWxFUBAHocJHMVQvt%2BZpTQjJ2Rz8BkrCA0q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBwZXfIlhmD79ymY0yrcA66nBY6AOgBpwlahxKIK5dUn5kjToBIipXYD2VchXjyNzYo64ZoYo7%2Bnxrqvo9s6wIgnrdYtlKJzn99ZQmfDjeeTZqX5dWS%2BOMGP9E%2BXzxbRH9EKGUfwJ%2F0C9rQt6BdW8%2F7bs9zeaNjSgzYd525mQcpjhfYulUjsDMiy1k9PWSWXnbK3%2Fe%2BudVCFLyBt5VfMM2j4qspS%2FmLGob1covrLLsB2eqasIkZuD0ChY9sZGSW7SuGPHGyE9GRD9FPipg3os0RNKX5a%2BMWZfarpm6h0N0hw6iCNsZPKqaRAl0z%2BIgMwMXLVFpSj3CaP31yqeqC6Syv8e9VcLxlhUiCnvezhh6JCKDenfk8IPMKi%2BrEbaBB9p6%2FxHBBhfDd0Zb9xhRq3gal6f6pTQGgn%2BJYbtmvaIrhLuLT8xULKyZ2iXCpoBjlE9mStU8xnifoCDglKYKm3y5SAMJRS02nRkOYg4G%2Fa7HqxgY%2FEHZUbxablvMApwDwDdxwmUVfgX1F4koofSygsLBOB%2F4hu0m2EKO0KSx51Exe9SBv4uYvDj48LYpEoC4YfuauPDC3jwVYXAGkHaK%2FzfURZvZi8JfZTmubhCyT8WKj619D34SMirBWyPUgwtM3LkUfRyoSmq4MIMp50MNfY2s8GOqUBhjjscb3ptNUBUMaRz3aefiRlNzqCPWDWveiz8KXCErJpQQrAkYM35Cm6qzPXqkHZACH9thrCsLECoVY0cG1mdcBL2ULX6NnGedOu7CM6ZBWlxgRQMlAzzAJdLVPjdUYRWBXDpcqQxnAlRVkOppxQacxMwGvpYEZAnVaqMqFvHrVwajLJb%2FY28b8DVZXDvFbNBBIQqh%2Br55VRweXe2aCrjAT2qrll&X-Amz-Signature=12bbfe8540a28e14df4e669a7d810067fa15956c7451ccf86568509b4d831b75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MR44QW%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzt7msDbyAJcFPm8Fhma%2FfnnDpvHqV37vEeQbLyCBgUAiBZL79oqlHbV%2FxEmYyVvmrQjcd8fjDrN%2Bf9f3UNMqeXpCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMjbEAtlKeC3N6auzuKtwDt1pH4AIDBitj%2FfXb2t3xmDCVN9kTb2gv9sD4%2B3Y8tg2E69UL1BGASk4Ujn8K9kd6zJNCcasFxKhRdkj2O%2B8NsY5lA9IbwmCRzQvionu%2FaGFq74%2F%2BvkPwVJ%2BMEtfxcXqxi0UnZe3CXta9CB6229dZgkC8pl%2FJKCPdMDT7o3DFcqG3jnvCOIIa68RR%2BSCmJwrYEhOToAH5cSBqdj8XdIl6%2F6LGc79G0hChyd8EpNoIMxW1GxQnyk0oHeNqnMR%2FgnmlbPmdqzCTtTCpduu3iEETnNcenNkJnE9ukJQNtEeDEBY363CcpdSFF2Vpp%2BDb3uR8F%2FacqKy%2FbMEHEviU%2B3DMZDziOZw34JBRKQunThvfmnuZLtjC3YC4mVQdNACPkGASxJP8GclgMxyGLTTmzJXt%2FeUEUtktU%2BQVmav9gH4N3deXamt3pvX3xZ1GahCp3MdyP4ACvQ2lxkqD6CYHDZ7QO23WSL2R0kgFsDJ%2B9Pn8sZW1Zyzf9dG80nUOF0su%2FtI7Cb9prR9%2FGss6CCKRa3XbzpydLECpY8naFE2QEOlqJNwB71j5jjC9NC0qi%2B5C6GmYcG099%2FhNArHsFOSajGsGAtBW%2BbgPn0ebSuvpV%2BUuYJFsIkJsFdvGphSLZLowx9bazwY6pgH12v7viWDsoQywyWyqEIwLmFNHvFmeG9VCou56se2DiZ40FeIZ0wOZieksGNNiJS0etekCR0m6zt84fuaw2p61V1%2FXBWC0K8vrZqAPs9WfM6%2FcHBikD6WOZWCc4EvMT4ZoyADSQ3b60pb%2FimQIZctqIonu21Vs2wyOC9WYLKUaelZaK%2BuUuLGXsNUJVeVvqI8Ck04eSfQTevgxyDuU7FWf2nUhcZc9&X-Amz-Signature=c9ff0a1e46d2cd20f94c122feec05194b855bd177af02f1321aac0b1f1cd285b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MR44QW%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzt7msDbyAJcFPm8Fhma%2FfnnDpvHqV37vEeQbLyCBgUAiBZL79oqlHbV%2FxEmYyVvmrQjcd8fjDrN%2Bf9f3UNMqeXpCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMjbEAtlKeC3N6auzuKtwDt1pH4AIDBitj%2FfXb2t3xmDCVN9kTb2gv9sD4%2B3Y8tg2E69UL1BGASk4Ujn8K9kd6zJNCcasFxKhRdkj2O%2B8NsY5lA9IbwmCRzQvionu%2FaGFq74%2F%2BvkPwVJ%2BMEtfxcXqxi0UnZe3CXta9CB6229dZgkC8pl%2FJKCPdMDT7o3DFcqG3jnvCOIIa68RR%2BSCmJwrYEhOToAH5cSBqdj8XdIl6%2F6LGc79G0hChyd8EpNoIMxW1GxQnyk0oHeNqnMR%2FgnmlbPmdqzCTtTCpduu3iEETnNcenNkJnE9ukJQNtEeDEBY363CcpdSFF2Vpp%2BDb3uR8F%2FacqKy%2FbMEHEviU%2B3DMZDziOZw34JBRKQunThvfmnuZLtjC3YC4mVQdNACPkGASxJP8GclgMxyGLTTmzJXt%2FeUEUtktU%2BQVmav9gH4N3deXamt3pvX3xZ1GahCp3MdyP4ACvQ2lxkqD6CYHDZ7QO23WSL2R0kgFsDJ%2B9Pn8sZW1Zyzf9dG80nUOF0su%2FtI7Cb9prR9%2FGss6CCKRa3XbzpydLECpY8naFE2QEOlqJNwB71j5jjC9NC0qi%2B5C6GmYcG099%2FhNArHsFOSajGsGAtBW%2BbgPn0ebSuvpV%2BUuYJFsIkJsFdvGphSLZLowx9bazwY6pgH12v7viWDsoQywyWyqEIwLmFNHvFmeG9VCou56se2DiZ40FeIZ0wOZieksGNNiJS0etekCR0m6zt84fuaw2p61V1%2FXBWC0K8vrZqAPs9WfM6%2FcHBikD6WOZWCc4EvMT4ZoyADSQ3b60pb%2FimQIZctqIonu21Vs2wyOC9WYLKUaelZaK%2BuUuLGXsNUJVeVvqI8Ck04eSfQTevgxyDuU7FWf2nUhcZc9&X-Amz-Signature=a720ba2caf763fd95942ad2b08c8534608a0ed4e7e7ffc085ec7525c2fc96492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MR44QW%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzt7msDbyAJcFPm8Fhma%2FfnnDpvHqV37vEeQbLyCBgUAiBZL79oqlHbV%2FxEmYyVvmrQjcd8fjDrN%2Bf9f3UNMqeXpCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMjbEAtlKeC3N6auzuKtwDt1pH4AIDBitj%2FfXb2t3xmDCVN9kTb2gv9sD4%2B3Y8tg2E69UL1BGASk4Ujn8K9kd6zJNCcasFxKhRdkj2O%2B8NsY5lA9IbwmCRzQvionu%2FaGFq74%2F%2BvkPwVJ%2BMEtfxcXqxi0UnZe3CXta9CB6229dZgkC8pl%2FJKCPdMDT7o3DFcqG3jnvCOIIa68RR%2BSCmJwrYEhOToAH5cSBqdj8XdIl6%2F6LGc79G0hChyd8EpNoIMxW1GxQnyk0oHeNqnMR%2FgnmlbPmdqzCTtTCpduu3iEETnNcenNkJnE9ukJQNtEeDEBY363CcpdSFF2Vpp%2BDb3uR8F%2FacqKy%2FbMEHEviU%2B3DMZDziOZw34JBRKQunThvfmnuZLtjC3YC4mVQdNACPkGASxJP8GclgMxyGLTTmzJXt%2FeUEUtktU%2BQVmav9gH4N3deXamt3pvX3xZ1GahCp3MdyP4ACvQ2lxkqD6CYHDZ7QO23WSL2R0kgFsDJ%2B9Pn8sZW1Zyzf9dG80nUOF0su%2FtI7Cb9prR9%2FGss6CCKRa3XbzpydLECpY8naFE2QEOlqJNwB71j5jjC9NC0qi%2B5C6GmYcG099%2FhNArHsFOSajGsGAtBW%2BbgPn0ebSuvpV%2BUuYJFsIkJsFdvGphSLZLowx9bazwY6pgH12v7viWDsoQywyWyqEIwLmFNHvFmeG9VCou56se2DiZ40FeIZ0wOZieksGNNiJS0etekCR0m6zt84fuaw2p61V1%2FXBWC0K8vrZqAPs9WfM6%2FcHBikD6WOZWCc4EvMT4ZoyADSQ3b60pb%2FimQIZctqIonu21Vs2wyOC9WYLKUaelZaK%2BuUuLGXsNUJVeVvqI8Ck04eSfQTevgxyDuU7FWf2nUhcZc9&X-Amz-Signature=68f197c482c55deed8d3bcba2f4887c6425c74c7abb2ec182628e7ec6a71ee48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MR44QW%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzt7msDbyAJcFPm8Fhma%2FfnnDpvHqV37vEeQbLyCBgUAiBZL79oqlHbV%2FxEmYyVvmrQjcd8fjDrN%2Bf9f3UNMqeXpCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMjbEAtlKeC3N6auzuKtwDt1pH4AIDBitj%2FfXb2t3xmDCVN9kTb2gv9sD4%2B3Y8tg2E69UL1BGASk4Ujn8K9kd6zJNCcasFxKhRdkj2O%2B8NsY5lA9IbwmCRzQvionu%2FaGFq74%2F%2BvkPwVJ%2BMEtfxcXqxi0UnZe3CXta9CB6229dZgkC8pl%2FJKCPdMDT7o3DFcqG3jnvCOIIa68RR%2BSCmJwrYEhOToAH5cSBqdj8XdIl6%2F6LGc79G0hChyd8EpNoIMxW1GxQnyk0oHeNqnMR%2FgnmlbPmdqzCTtTCpduu3iEETnNcenNkJnE9ukJQNtEeDEBY363CcpdSFF2Vpp%2BDb3uR8F%2FacqKy%2FbMEHEviU%2B3DMZDziOZw34JBRKQunThvfmnuZLtjC3YC4mVQdNACPkGASxJP8GclgMxyGLTTmzJXt%2FeUEUtktU%2BQVmav9gH4N3deXamt3pvX3xZ1GahCp3MdyP4ACvQ2lxkqD6CYHDZ7QO23WSL2R0kgFsDJ%2B9Pn8sZW1Zyzf9dG80nUOF0su%2FtI7Cb9prR9%2FGss6CCKRa3XbzpydLECpY8naFE2QEOlqJNwB71j5jjC9NC0qi%2B5C6GmYcG099%2FhNArHsFOSajGsGAtBW%2BbgPn0ebSuvpV%2BUuYJFsIkJsFdvGphSLZLowx9bazwY6pgH12v7viWDsoQywyWyqEIwLmFNHvFmeG9VCou56se2DiZ40FeIZ0wOZieksGNNiJS0etekCR0m6zt84fuaw2p61V1%2FXBWC0K8vrZqAPs9WfM6%2FcHBikD6WOZWCc4EvMT4ZoyADSQ3b60pb%2FimQIZctqIonu21Vs2wyOC9WYLKUaelZaK%2BuUuLGXsNUJVeVvqI8Ck04eSfQTevgxyDuU7FWf2nUhcZc9&X-Amz-Signature=75b261744181d1c2a0bcab9874b2f51bfd7ccfd290fb18e0d6915e588da30050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MR44QW%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzt7msDbyAJcFPm8Fhma%2FfnnDpvHqV37vEeQbLyCBgUAiBZL79oqlHbV%2FxEmYyVvmrQjcd8fjDrN%2Bf9f3UNMqeXpCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMjbEAtlKeC3N6auzuKtwDt1pH4AIDBitj%2FfXb2t3xmDCVN9kTb2gv9sD4%2B3Y8tg2E69UL1BGASk4Ujn8K9kd6zJNCcasFxKhRdkj2O%2B8NsY5lA9IbwmCRzQvionu%2FaGFq74%2F%2BvkPwVJ%2BMEtfxcXqxi0UnZe3CXta9CB6229dZgkC8pl%2FJKCPdMDT7o3DFcqG3jnvCOIIa68RR%2BSCmJwrYEhOToAH5cSBqdj8XdIl6%2F6LGc79G0hChyd8EpNoIMxW1GxQnyk0oHeNqnMR%2FgnmlbPmdqzCTtTCpduu3iEETnNcenNkJnE9ukJQNtEeDEBY363CcpdSFF2Vpp%2BDb3uR8F%2FacqKy%2FbMEHEviU%2B3DMZDziOZw34JBRKQunThvfmnuZLtjC3YC4mVQdNACPkGASxJP8GclgMxyGLTTmzJXt%2FeUEUtktU%2BQVmav9gH4N3deXamt3pvX3xZ1GahCp3MdyP4ACvQ2lxkqD6CYHDZ7QO23WSL2R0kgFsDJ%2B9Pn8sZW1Zyzf9dG80nUOF0su%2FtI7Cb9prR9%2FGss6CCKRa3XbzpydLECpY8naFE2QEOlqJNwB71j5jjC9NC0qi%2B5C6GmYcG099%2FhNArHsFOSajGsGAtBW%2BbgPn0ebSuvpV%2BUuYJFsIkJsFdvGphSLZLowx9bazwY6pgH12v7viWDsoQywyWyqEIwLmFNHvFmeG9VCou56se2DiZ40FeIZ0wOZieksGNNiJS0etekCR0m6zt84fuaw2p61V1%2FXBWC0K8vrZqAPs9WfM6%2FcHBikD6WOZWCc4EvMT4ZoyADSQ3b60pb%2FimQIZctqIonu21Vs2wyOC9WYLKUaelZaK%2BuUuLGXsNUJVeVvqI8Ck04eSfQTevgxyDuU7FWf2nUhcZc9&X-Amz-Signature=a24f048911dbbcdade84763a9208a1cbf92a54de8644df13b3401ff2c9c36327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MR44QW%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzt7msDbyAJcFPm8Fhma%2FfnnDpvHqV37vEeQbLyCBgUAiBZL79oqlHbV%2FxEmYyVvmrQjcd8fjDrN%2Bf9f3UNMqeXpCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMjbEAtlKeC3N6auzuKtwDt1pH4AIDBitj%2FfXb2t3xmDCVN9kTb2gv9sD4%2B3Y8tg2E69UL1BGASk4Ujn8K9kd6zJNCcasFxKhRdkj2O%2B8NsY5lA9IbwmCRzQvionu%2FaGFq74%2F%2BvkPwVJ%2BMEtfxcXqxi0UnZe3CXta9CB6229dZgkC8pl%2FJKCPdMDT7o3DFcqG3jnvCOIIa68RR%2BSCmJwrYEhOToAH5cSBqdj8XdIl6%2F6LGc79G0hChyd8EpNoIMxW1GxQnyk0oHeNqnMR%2FgnmlbPmdqzCTtTCpduu3iEETnNcenNkJnE9ukJQNtEeDEBY363CcpdSFF2Vpp%2BDb3uR8F%2FacqKy%2FbMEHEviU%2B3DMZDziOZw34JBRKQunThvfmnuZLtjC3YC4mVQdNACPkGASxJP8GclgMxyGLTTmzJXt%2FeUEUtktU%2BQVmav9gH4N3deXamt3pvX3xZ1GahCp3MdyP4ACvQ2lxkqD6CYHDZ7QO23WSL2R0kgFsDJ%2B9Pn8sZW1Zyzf9dG80nUOF0su%2FtI7Cb9prR9%2FGss6CCKRa3XbzpydLECpY8naFE2QEOlqJNwB71j5jjC9NC0qi%2B5C6GmYcG099%2FhNArHsFOSajGsGAtBW%2BbgPn0ebSuvpV%2BUuYJFsIkJsFdvGphSLZLowx9bazwY6pgH12v7viWDsoQywyWyqEIwLmFNHvFmeG9VCou56se2DiZ40FeIZ0wOZieksGNNiJS0etekCR0m6zt84fuaw2p61V1%2FXBWC0K8vrZqAPs9WfM6%2FcHBikD6WOZWCc4EvMT4ZoyADSQ3b60pb%2FimQIZctqIonu21Vs2wyOC9WYLKUaelZaK%2BuUuLGXsNUJVeVvqI8Ck04eSfQTevgxyDuU7FWf2nUhcZc9&X-Amz-Signature=e3f6dae16c338982ea09d1793c3fe96e1ef63de14e3fe12c55d53bd321b9fe58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


