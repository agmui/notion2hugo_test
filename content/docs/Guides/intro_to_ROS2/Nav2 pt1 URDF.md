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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK26KYCT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFIvajHPES%2BlG8LDyTBbcvAp9cKn2LpGkEsJnpTwxrhRAiBVPYQhAaMS%2F0klp1U2pBBAVBUcQ44zcOriDRI5Ag29TSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMxIlgTsOYWHywP5z0KtwDwPaHWxj%2Bxly79wsoi0CyGBRh7L6Yd9BPxaomiH0Ukg%2F3cy4zzpAsa94CM1ZCis7OUyO8SZsBOMsN1IefH%2F4WoQvmy6FMekdwmZOYvr1jR0GJuc%2FcD1nEkKwSkggcXHvpuElfYqAfGZQQ%2B6uY6j8fl3Te1lOfSpsU%2FmJGP8QY1RKGjbfI3c6Fk4LY3MEf80cpnhbY0vtUntuxhkT%2BgUNfqChTzFFnWzOGoV1hUx3bD64MREYJQDe9NDPHkaanI16hqZMkGhC5sVY%2BXmgYj2e6gDN5MgoeLI0Rv%2Fbe70vi%2FYeABkpGbvQGJDw0HW85x%2B5i3hJmPJWA%2FcaOIGoBj6WnYmUQeUtu0ikmgoYwII4mumGOAlhCWw6F0UE9%2FQndhCovAc3a%2BwQz9OD3MLvdFTUSuq2vChF2PkPZbIP15TkdXnVkKblL9LxlauUj8mpc6sYwJDacPP3LTjjZ5FAMFcLdrQtlK2XJ%2FMY8JhgRtmvXEKFyUSUYl%2F7wj5JQbdcZSCVClm0wKxq4j4xjFfeJ%2BRfmL%2BN3MF6sqkWVM6%2F4sb5WK392ngIzjr98AjJg43fWnUnVnYq%2FPnl8v4Gksx%2B3PL2q1SxIMjWC8UzuJSPffiweu6ta00BJ4k90xkJmhKQwz%2BnAxAY6pgH%2BuU3Nm6cntLoEG72GPOo8hI6dU7ldM%2Fqrd64q4zojPgBTslp0UtArwqquuwpKu5WKxGploM4D3WJwzjAVuTngrHWy3Pv%2FWkttY6QM9i0lYQQ2rSgYGa5kvr3B8UzthYj%2BKdo0zlJ8oPIHNFN1ZkgXgBUzsh6fwAicS4XYhiUqPTYajRbtn1sTEMiYwEIBHsObMwSQGZaRcYezDvu9IUBzbaiuAbAZ&X-Amz-Signature=b20678211b42d38a7ee3c8f29c9fe2d888337b085b961f044de74942e639faa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK26KYCT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFIvajHPES%2BlG8LDyTBbcvAp9cKn2LpGkEsJnpTwxrhRAiBVPYQhAaMS%2F0klp1U2pBBAVBUcQ44zcOriDRI5Ag29TSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMxIlgTsOYWHywP5z0KtwDwPaHWxj%2Bxly79wsoi0CyGBRh7L6Yd9BPxaomiH0Ukg%2F3cy4zzpAsa94CM1ZCis7OUyO8SZsBOMsN1IefH%2F4WoQvmy6FMekdwmZOYvr1jR0GJuc%2FcD1nEkKwSkggcXHvpuElfYqAfGZQQ%2B6uY6j8fl3Te1lOfSpsU%2FmJGP8QY1RKGjbfI3c6Fk4LY3MEf80cpnhbY0vtUntuxhkT%2BgUNfqChTzFFnWzOGoV1hUx3bD64MREYJQDe9NDPHkaanI16hqZMkGhC5sVY%2BXmgYj2e6gDN5MgoeLI0Rv%2Fbe70vi%2FYeABkpGbvQGJDw0HW85x%2B5i3hJmPJWA%2FcaOIGoBj6WnYmUQeUtu0ikmgoYwII4mumGOAlhCWw6F0UE9%2FQndhCovAc3a%2BwQz9OD3MLvdFTUSuq2vChF2PkPZbIP15TkdXnVkKblL9LxlauUj8mpc6sYwJDacPP3LTjjZ5FAMFcLdrQtlK2XJ%2FMY8JhgRtmvXEKFyUSUYl%2F7wj5JQbdcZSCVClm0wKxq4j4xjFfeJ%2BRfmL%2BN3MF6sqkWVM6%2F4sb5WK392ngIzjr98AjJg43fWnUnVnYq%2FPnl8v4Gksx%2B3PL2q1SxIMjWC8UzuJSPffiweu6ta00BJ4k90xkJmhKQwz%2BnAxAY6pgH%2BuU3Nm6cntLoEG72GPOo8hI6dU7ldM%2Fqrd64q4zojPgBTslp0UtArwqquuwpKu5WKxGploM4D3WJwzjAVuTngrHWy3Pv%2FWkttY6QM9i0lYQQ2rSgYGa5kvr3B8UzthYj%2BKdo0zlJ8oPIHNFN1ZkgXgBUzsh6fwAicS4XYhiUqPTYajRbtn1sTEMiYwEIBHsObMwSQGZaRcYezDvu9IUBzbaiuAbAZ&X-Amz-Signature=482df30edaf69832aa312474d1570965bd42f4cdd05befb873b5267649072408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK26KYCT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFIvajHPES%2BlG8LDyTBbcvAp9cKn2LpGkEsJnpTwxrhRAiBVPYQhAaMS%2F0klp1U2pBBAVBUcQ44zcOriDRI5Ag29TSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMxIlgTsOYWHywP5z0KtwDwPaHWxj%2Bxly79wsoi0CyGBRh7L6Yd9BPxaomiH0Ukg%2F3cy4zzpAsa94CM1ZCis7OUyO8SZsBOMsN1IefH%2F4WoQvmy6FMekdwmZOYvr1jR0GJuc%2FcD1nEkKwSkggcXHvpuElfYqAfGZQQ%2B6uY6j8fl3Te1lOfSpsU%2FmJGP8QY1RKGjbfI3c6Fk4LY3MEf80cpnhbY0vtUntuxhkT%2BgUNfqChTzFFnWzOGoV1hUx3bD64MREYJQDe9NDPHkaanI16hqZMkGhC5sVY%2BXmgYj2e6gDN5MgoeLI0Rv%2Fbe70vi%2FYeABkpGbvQGJDw0HW85x%2B5i3hJmPJWA%2FcaOIGoBj6WnYmUQeUtu0ikmgoYwII4mumGOAlhCWw6F0UE9%2FQndhCovAc3a%2BwQz9OD3MLvdFTUSuq2vChF2PkPZbIP15TkdXnVkKblL9LxlauUj8mpc6sYwJDacPP3LTjjZ5FAMFcLdrQtlK2XJ%2FMY8JhgRtmvXEKFyUSUYl%2F7wj5JQbdcZSCVClm0wKxq4j4xjFfeJ%2BRfmL%2BN3MF6sqkWVM6%2F4sb5WK392ngIzjr98AjJg43fWnUnVnYq%2FPnl8v4Gksx%2B3PL2q1SxIMjWC8UzuJSPffiweu6ta00BJ4k90xkJmhKQwz%2BnAxAY6pgH%2BuU3Nm6cntLoEG72GPOo8hI6dU7ldM%2Fqrd64q4zojPgBTslp0UtArwqquuwpKu5WKxGploM4D3WJwzjAVuTngrHWy3Pv%2FWkttY6QM9i0lYQQ2rSgYGa5kvr3B8UzthYj%2BKdo0zlJ8oPIHNFN1ZkgXgBUzsh6fwAicS4XYhiUqPTYajRbtn1sTEMiYwEIBHsObMwSQGZaRcYezDvu9IUBzbaiuAbAZ&X-Amz-Signature=7bc7e049ed5d1f63c55bee0b79bba0052f292a8140356871c88c2c8f3fbea510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK26KYCT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFIvajHPES%2BlG8LDyTBbcvAp9cKn2LpGkEsJnpTwxrhRAiBVPYQhAaMS%2F0klp1U2pBBAVBUcQ44zcOriDRI5Ag29TSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMxIlgTsOYWHywP5z0KtwDwPaHWxj%2Bxly79wsoi0CyGBRh7L6Yd9BPxaomiH0Ukg%2F3cy4zzpAsa94CM1ZCis7OUyO8SZsBOMsN1IefH%2F4WoQvmy6FMekdwmZOYvr1jR0GJuc%2FcD1nEkKwSkggcXHvpuElfYqAfGZQQ%2B6uY6j8fl3Te1lOfSpsU%2FmJGP8QY1RKGjbfI3c6Fk4LY3MEf80cpnhbY0vtUntuxhkT%2BgUNfqChTzFFnWzOGoV1hUx3bD64MREYJQDe9NDPHkaanI16hqZMkGhC5sVY%2BXmgYj2e6gDN5MgoeLI0Rv%2Fbe70vi%2FYeABkpGbvQGJDw0HW85x%2B5i3hJmPJWA%2FcaOIGoBj6WnYmUQeUtu0ikmgoYwII4mumGOAlhCWw6F0UE9%2FQndhCovAc3a%2BwQz9OD3MLvdFTUSuq2vChF2PkPZbIP15TkdXnVkKblL9LxlauUj8mpc6sYwJDacPP3LTjjZ5FAMFcLdrQtlK2XJ%2FMY8JhgRtmvXEKFyUSUYl%2F7wj5JQbdcZSCVClm0wKxq4j4xjFfeJ%2BRfmL%2BN3MF6sqkWVM6%2F4sb5WK392ngIzjr98AjJg43fWnUnVnYq%2FPnl8v4Gksx%2B3PL2q1SxIMjWC8UzuJSPffiweu6ta00BJ4k90xkJmhKQwz%2BnAxAY6pgH%2BuU3Nm6cntLoEG72GPOo8hI6dU7ldM%2Fqrd64q4zojPgBTslp0UtArwqquuwpKu5WKxGploM4D3WJwzjAVuTngrHWy3Pv%2FWkttY6QM9i0lYQQ2rSgYGa5kvr3B8UzthYj%2BKdo0zlJ8oPIHNFN1ZkgXgBUzsh6fwAicS4XYhiUqPTYajRbtn1sTEMiYwEIBHsObMwSQGZaRcYezDvu9IUBzbaiuAbAZ&X-Amz-Signature=094b80dc884cf01e2ccefe24b5ed42949c5f698684f5979cdcec07d295665029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK26KYCT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFIvajHPES%2BlG8LDyTBbcvAp9cKn2LpGkEsJnpTwxrhRAiBVPYQhAaMS%2F0klp1U2pBBAVBUcQ44zcOriDRI5Ag29TSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMxIlgTsOYWHywP5z0KtwDwPaHWxj%2Bxly79wsoi0CyGBRh7L6Yd9BPxaomiH0Ukg%2F3cy4zzpAsa94CM1ZCis7OUyO8SZsBOMsN1IefH%2F4WoQvmy6FMekdwmZOYvr1jR0GJuc%2FcD1nEkKwSkggcXHvpuElfYqAfGZQQ%2B6uY6j8fl3Te1lOfSpsU%2FmJGP8QY1RKGjbfI3c6Fk4LY3MEf80cpnhbY0vtUntuxhkT%2BgUNfqChTzFFnWzOGoV1hUx3bD64MREYJQDe9NDPHkaanI16hqZMkGhC5sVY%2BXmgYj2e6gDN5MgoeLI0Rv%2Fbe70vi%2FYeABkpGbvQGJDw0HW85x%2B5i3hJmPJWA%2FcaOIGoBj6WnYmUQeUtu0ikmgoYwII4mumGOAlhCWw6F0UE9%2FQndhCovAc3a%2BwQz9OD3MLvdFTUSuq2vChF2PkPZbIP15TkdXnVkKblL9LxlauUj8mpc6sYwJDacPP3LTjjZ5FAMFcLdrQtlK2XJ%2FMY8JhgRtmvXEKFyUSUYl%2F7wj5JQbdcZSCVClm0wKxq4j4xjFfeJ%2BRfmL%2BN3MF6sqkWVM6%2F4sb5WK392ngIzjr98AjJg43fWnUnVnYq%2FPnl8v4Gksx%2B3PL2q1SxIMjWC8UzuJSPffiweu6ta00BJ4k90xkJmhKQwz%2BnAxAY6pgH%2BuU3Nm6cntLoEG72GPOo8hI6dU7ldM%2Fqrd64q4zojPgBTslp0UtArwqquuwpKu5WKxGploM4D3WJwzjAVuTngrHWy3Pv%2FWkttY6QM9i0lYQQ2rSgYGa5kvr3B8UzthYj%2BKdo0zlJ8oPIHNFN1ZkgXgBUzsh6fwAicS4XYhiUqPTYajRbtn1sTEMiYwEIBHsObMwSQGZaRcYezDvu9IUBzbaiuAbAZ&X-Amz-Signature=7500e01d99fb539f961ef98189215adaa8a61e06452133ca13f69362f4df6d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK26KYCT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFIvajHPES%2BlG8LDyTBbcvAp9cKn2LpGkEsJnpTwxrhRAiBVPYQhAaMS%2F0klp1U2pBBAVBUcQ44zcOriDRI5Ag29TSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMxIlgTsOYWHywP5z0KtwDwPaHWxj%2Bxly79wsoi0CyGBRh7L6Yd9BPxaomiH0Ukg%2F3cy4zzpAsa94CM1ZCis7OUyO8SZsBOMsN1IefH%2F4WoQvmy6FMekdwmZOYvr1jR0GJuc%2FcD1nEkKwSkggcXHvpuElfYqAfGZQQ%2B6uY6j8fl3Te1lOfSpsU%2FmJGP8QY1RKGjbfI3c6Fk4LY3MEf80cpnhbY0vtUntuxhkT%2BgUNfqChTzFFnWzOGoV1hUx3bD64MREYJQDe9NDPHkaanI16hqZMkGhC5sVY%2BXmgYj2e6gDN5MgoeLI0Rv%2Fbe70vi%2FYeABkpGbvQGJDw0HW85x%2B5i3hJmPJWA%2FcaOIGoBj6WnYmUQeUtu0ikmgoYwII4mumGOAlhCWw6F0UE9%2FQndhCovAc3a%2BwQz9OD3MLvdFTUSuq2vChF2PkPZbIP15TkdXnVkKblL9LxlauUj8mpc6sYwJDacPP3LTjjZ5FAMFcLdrQtlK2XJ%2FMY8JhgRtmvXEKFyUSUYl%2F7wj5JQbdcZSCVClm0wKxq4j4xjFfeJ%2BRfmL%2BN3MF6sqkWVM6%2F4sb5WK392ngIzjr98AjJg43fWnUnVnYq%2FPnl8v4Gksx%2B3PL2q1SxIMjWC8UzuJSPffiweu6ta00BJ4k90xkJmhKQwz%2BnAxAY6pgH%2BuU3Nm6cntLoEG72GPOo8hI6dU7ldM%2Fqrd64q4zojPgBTslp0UtArwqquuwpKu5WKxGploM4D3WJwzjAVuTngrHWy3Pv%2FWkttY6QM9i0lYQQ2rSgYGa5kvr3B8UzthYj%2BKdo0zlJ8oPIHNFN1ZkgXgBUzsh6fwAicS4XYhiUqPTYajRbtn1sTEMiYwEIBHsObMwSQGZaRcYezDvu9IUBzbaiuAbAZ&X-Amz-Signature=017d5e2c29f0afbac95983f62c5a21a24ec45c428e1ce381d21baf9f48ea1313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK26KYCT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFIvajHPES%2BlG8LDyTBbcvAp9cKn2LpGkEsJnpTwxrhRAiBVPYQhAaMS%2F0klp1U2pBBAVBUcQ44zcOriDRI5Ag29TSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMxIlgTsOYWHywP5z0KtwDwPaHWxj%2Bxly79wsoi0CyGBRh7L6Yd9BPxaomiH0Ukg%2F3cy4zzpAsa94CM1ZCis7OUyO8SZsBOMsN1IefH%2F4WoQvmy6FMekdwmZOYvr1jR0GJuc%2FcD1nEkKwSkggcXHvpuElfYqAfGZQQ%2B6uY6j8fl3Te1lOfSpsU%2FmJGP8QY1RKGjbfI3c6Fk4LY3MEf80cpnhbY0vtUntuxhkT%2BgUNfqChTzFFnWzOGoV1hUx3bD64MREYJQDe9NDPHkaanI16hqZMkGhC5sVY%2BXmgYj2e6gDN5MgoeLI0Rv%2Fbe70vi%2FYeABkpGbvQGJDw0HW85x%2B5i3hJmPJWA%2FcaOIGoBj6WnYmUQeUtu0ikmgoYwII4mumGOAlhCWw6F0UE9%2FQndhCovAc3a%2BwQz9OD3MLvdFTUSuq2vChF2PkPZbIP15TkdXnVkKblL9LxlauUj8mpc6sYwJDacPP3LTjjZ5FAMFcLdrQtlK2XJ%2FMY8JhgRtmvXEKFyUSUYl%2F7wj5JQbdcZSCVClm0wKxq4j4xjFfeJ%2BRfmL%2BN3MF6sqkWVM6%2F4sb5WK392ngIzjr98AjJg43fWnUnVnYq%2FPnl8v4Gksx%2B3PL2q1SxIMjWC8UzuJSPffiweu6ta00BJ4k90xkJmhKQwz%2BnAxAY6pgH%2BuU3Nm6cntLoEG72GPOo8hI6dU7ldM%2Fqrd64q4zojPgBTslp0UtArwqquuwpKu5WKxGploM4D3WJwzjAVuTngrHWy3Pv%2FWkttY6QM9i0lYQQ2rSgYGa5kvr3B8UzthYj%2BKdo0zlJ8oPIHNFN1ZkgXgBUzsh6fwAicS4XYhiUqPTYajRbtn1sTEMiYwEIBHsObMwSQGZaRcYezDvu9IUBzbaiuAbAZ&X-Amz-Signature=0ae2d2c28d7b57f038b579c31a0cfc19bc041b3d924ed0bb36823a6b45998244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK26KYCT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFIvajHPES%2BlG8LDyTBbcvAp9cKn2LpGkEsJnpTwxrhRAiBVPYQhAaMS%2F0klp1U2pBBAVBUcQ44zcOriDRI5Ag29TSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMxIlgTsOYWHywP5z0KtwDwPaHWxj%2Bxly79wsoi0CyGBRh7L6Yd9BPxaomiH0Ukg%2F3cy4zzpAsa94CM1ZCis7OUyO8SZsBOMsN1IefH%2F4WoQvmy6FMekdwmZOYvr1jR0GJuc%2FcD1nEkKwSkggcXHvpuElfYqAfGZQQ%2B6uY6j8fl3Te1lOfSpsU%2FmJGP8QY1RKGjbfI3c6Fk4LY3MEf80cpnhbY0vtUntuxhkT%2BgUNfqChTzFFnWzOGoV1hUx3bD64MREYJQDe9NDPHkaanI16hqZMkGhC5sVY%2BXmgYj2e6gDN5MgoeLI0Rv%2Fbe70vi%2FYeABkpGbvQGJDw0HW85x%2B5i3hJmPJWA%2FcaOIGoBj6WnYmUQeUtu0ikmgoYwII4mumGOAlhCWw6F0UE9%2FQndhCovAc3a%2BwQz9OD3MLvdFTUSuq2vChF2PkPZbIP15TkdXnVkKblL9LxlauUj8mpc6sYwJDacPP3LTjjZ5FAMFcLdrQtlK2XJ%2FMY8JhgRtmvXEKFyUSUYl%2F7wj5JQbdcZSCVClm0wKxq4j4xjFfeJ%2BRfmL%2BN3MF6sqkWVM6%2F4sb5WK392ngIzjr98AjJg43fWnUnVnYq%2FPnl8v4Gksx%2B3PL2q1SxIMjWC8UzuJSPffiweu6ta00BJ4k90xkJmhKQwz%2BnAxAY6pgH%2BuU3Nm6cntLoEG72GPOo8hI6dU7ldM%2Fqrd64q4zojPgBTslp0UtArwqquuwpKu5WKxGploM4D3WJwzjAVuTngrHWy3Pv%2FWkttY6QM9i0lYQQ2rSgYGa5kvr3B8UzthYj%2BKdo0zlJ8oPIHNFN1ZkgXgBUzsh6fwAicS4XYhiUqPTYajRbtn1sTEMiYwEIBHsObMwSQGZaRcYezDvu9IUBzbaiuAbAZ&X-Amz-Signature=e677ce056ff47ae0afd8d23fdb1be04dd3ff07f203dbdd505195b98ec19b09f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK26KYCT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFIvajHPES%2BlG8LDyTBbcvAp9cKn2LpGkEsJnpTwxrhRAiBVPYQhAaMS%2F0klp1U2pBBAVBUcQ44zcOriDRI5Ag29TSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMxIlgTsOYWHywP5z0KtwDwPaHWxj%2Bxly79wsoi0CyGBRh7L6Yd9BPxaomiH0Ukg%2F3cy4zzpAsa94CM1ZCis7OUyO8SZsBOMsN1IefH%2F4WoQvmy6FMekdwmZOYvr1jR0GJuc%2FcD1nEkKwSkggcXHvpuElfYqAfGZQQ%2B6uY6j8fl3Te1lOfSpsU%2FmJGP8QY1RKGjbfI3c6Fk4LY3MEf80cpnhbY0vtUntuxhkT%2BgUNfqChTzFFnWzOGoV1hUx3bD64MREYJQDe9NDPHkaanI16hqZMkGhC5sVY%2BXmgYj2e6gDN5MgoeLI0Rv%2Fbe70vi%2FYeABkpGbvQGJDw0HW85x%2B5i3hJmPJWA%2FcaOIGoBj6WnYmUQeUtu0ikmgoYwII4mumGOAlhCWw6F0UE9%2FQndhCovAc3a%2BwQz9OD3MLvdFTUSuq2vChF2PkPZbIP15TkdXnVkKblL9LxlauUj8mpc6sYwJDacPP3LTjjZ5FAMFcLdrQtlK2XJ%2FMY8JhgRtmvXEKFyUSUYl%2F7wj5JQbdcZSCVClm0wKxq4j4xjFfeJ%2BRfmL%2BN3MF6sqkWVM6%2F4sb5WK392ngIzjr98AjJg43fWnUnVnYq%2FPnl8v4Gksx%2B3PL2q1SxIMjWC8UzuJSPffiweu6ta00BJ4k90xkJmhKQwz%2BnAxAY6pgH%2BuU3Nm6cntLoEG72GPOo8hI6dU7ldM%2Fqrd64q4zojPgBTslp0UtArwqquuwpKu5WKxGploM4D3WJwzjAVuTngrHWy3Pv%2FWkttY6QM9i0lYQQ2rSgYGa5kvr3B8UzthYj%2BKdo0zlJ8oPIHNFN1ZkgXgBUzsh6fwAicS4XYhiUqPTYajRbtn1sTEMiYwEIBHsObMwSQGZaRcYezDvu9IUBzbaiuAbAZ&X-Amz-Signature=6f9cea91500be201ed882fdeea439e7c53d70927563e7ba623d79b64d5c221b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK26KYCT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFIvajHPES%2BlG8LDyTBbcvAp9cKn2LpGkEsJnpTwxrhRAiBVPYQhAaMS%2F0klp1U2pBBAVBUcQ44zcOriDRI5Ag29TSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMxIlgTsOYWHywP5z0KtwDwPaHWxj%2Bxly79wsoi0CyGBRh7L6Yd9BPxaomiH0Ukg%2F3cy4zzpAsa94CM1ZCis7OUyO8SZsBOMsN1IefH%2F4WoQvmy6FMekdwmZOYvr1jR0GJuc%2FcD1nEkKwSkggcXHvpuElfYqAfGZQQ%2B6uY6j8fl3Te1lOfSpsU%2FmJGP8QY1RKGjbfI3c6Fk4LY3MEf80cpnhbY0vtUntuxhkT%2BgUNfqChTzFFnWzOGoV1hUx3bD64MREYJQDe9NDPHkaanI16hqZMkGhC5sVY%2BXmgYj2e6gDN5MgoeLI0Rv%2Fbe70vi%2FYeABkpGbvQGJDw0HW85x%2B5i3hJmPJWA%2FcaOIGoBj6WnYmUQeUtu0ikmgoYwII4mumGOAlhCWw6F0UE9%2FQndhCovAc3a%2BwQz9OD3MLvdFTUSuq2vChF2PkPZbIP15TkdXnVkKblL9LxlauUj8mpc6sYwJDacPP3LTjjZ5FAMFcLdrQtlK2XJ%2FMY8JhgRtmvXEKFyUSUYl%2F7wj5JQbdcZSCVClm0wKxq4j4xjFfeJ%2BRfmL%2BN3MF6sqkWVM6%2F4sb5WK392ngIzjr98AjJg43fWnUnVnYq%2FPnl8v4Gksx%2B3PL2q1SxIMjWC8UzuJSPffiweu6ta00BJ4k90xkJmhKQwz%2BnAxAY6pgH%2BuU3Nm6cntLoEG72GPOo8hI6dU7ldM%2Fqrd64q4zojPgBTslp0UtArwqquuwpKu5WKxGploM4D3WJwzjAVuTngrHWy3Pv%2FWkttY6QM9i0lYQQ2rSgYGa5kvr3B8UzthYj%2BKdo0zlJ8oPIHNFN1ZkgXgBUzsh6fwAicS4XYhiUqPTYajRbtn1sTEMiYwEIBHsObMwSQGZaRcYezDvu9IUBzbaiuAbAZ&X-Amz-Signature=2113b29f1dc0de2e685be9d236112166f129367c55b39ac0bfcf0a15bc40590f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI3NPLZZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHAzTEdjW35TdrL%2BMFID6zP4rsNth1MLd2hn56GsnrW%2BAiA3mEOlmrIE0vta6n5pjZ5ZoMYj5Lkj2WVYORGXkY%2FTuyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMImMGGhpLveT%2FFiPdKtwDd0b%2FaofmSVLXCtuTccr0eay%2F2Mz52szWRc2Nrq6BARbjYHZsPEsTfkQinLh%2FFYLsBu4P5TXABeiokPkIpAzJ89lUt3%2BtWMCf2%2F3wpu%2BU6Y82xuyIsxBpU8ecCdIGolvdrqxuANDc5%2BewQ9iSQ%2BT%2FvzIvY91LXI9iRi6ix5IeeK5tRkU9NIIZ%2B5iSPDeBubtoU5Jrf3m3U%2FRd0gtZzgK3acARZG4UDg9JmJvRfpp1TWDYclneKbeoQ54QOBm0zHHVBx%2Bn62jgUWYYFf7pT0exz5w9s4Qb%2ByuJVXWyrLM83iiTocOjCX7hJyu%2FZREsvbDNuAoYx5v3CAYoWrEHfk0rMX0Bvhd9dMofEmc%2FbjVdCI53jrM7rRZ2bOXd505%2FRiUVmOkvvFCJ62bqp7mLs4sNpZxErDeIiakA4YOP9ckiwLO5qLb7QlvkY1hgDCyjAj75XWYqLheeJtUxi%2BKPFBPxz01pfIVhGuI3Nzp08xqz8qnSHL6o8lK6%2FR2Hqu30S3mn8IwCGEqLzy1bfe5WZC0wriwJv3nhZZ1xA6lj%2FIAVF1L7jQ9Vx40aRFBI3e5mt%2F71GYlSfRJrf2vD%2BMd6JHuu%2BCw316T15v0COxEbwQp1%2FtzC7zq3gmQNQXh8RYww0enAxAY6pgGCMthVKLNG7C9re1ABLnLAbXjhEcgc%2BAZxtYL1dIoa2qXDSynpBEWxnM05IuidLFLiDBV37YSDMWcHW1UHblbaukRY%2FheZ378zXinLW8G0yKXlkkxv8I27V56YAQWFL4wbMyeL5TNEExsul3pYV9ibDT81TGBeFCC3%2BN1TNdRnKFQmp96ZQiV2%2BppOwyRvaidNKgW9euwSmAtJTJLvGH9YFHaoJnrg&X-Amz-Signature=c9587ef21697b8f212a4b7db68658fbb1e553b12491a579c359790b5ee6f133d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDYL2RQE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC54lRJrpwIQolZDAcEVcK1aKktifD2rcr%2BSRz42qVdzwIgJgVCp3f5w2gMIW2WU0kw6OLZnm2Weqhaj6y2QTYQDGUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPGnZtL%2BtfabKubt7yrcA6EXEJAlvF6cHA%2BN3SH90cIMHiP65WTDqnabF79W78GjNO1VNfOt10q%2FFqm6SPw5zKgYz2zTvKvmtxw7%2FZA2xfz6%2BdE%2B9ilkoh8qERO4XKOW%2FPbm8PorIwgGT%2FBUUPe1Y0ZaQii3Cc%2BcKwUVU5QCJZ8fdmq%2BkV9j1PXg%2BsnTJElWuHxNuDnsnWdk7kQ5sGddFQvmz81hTc3XhabIxD2p1V5acTMTVgOBV3ZwagVKvOGLnetQIanZwBGbEinrO9lgkr5HbtNEbmbXnGE9VJeS71HE5Py3RBBLde62HXDKjDiCokpP%2Bp06utRdKEa3K6mOKEn0lnWJGrY2CE7of%2BvzECpk71bQGoPKtGwKHcQmIjwqDgu8%2FxdgxRuR8btOetpKZzRFozm7Vsa81kBTpgzg%2FvXqmLMrQj1KMSv16MugYpJzyiTVdJQsvezhSMUfAftip17os0iCy7%2BePFvmyaKgESWZZ7DjVHTNKsALGs9G3qdwEmu1AuROLr%2F4GukLqfruC50Wbnv%2FJnQPkKQZudR%2F3u5hLuorREthto%2FjlUa2ns4ot8ADKp67tokhkmv%2F7kdZ8X9O7OcNtU%2B0cuvhhG%2FLTBRym9XuJ5sSmYyOfhfQU7u2gl0cCrjGukeJmY8aMK3pwMQGOqUBdkG62qBls%2FUmxKCJJicFuFStYGcTpcNhHkJ7LA67T10DZl83afdtKsSJH5DVTVtyn4%2FJ%2FGNq4BAnlhG0v1%2FgndOLVh6NOwCj7zRutu3pOpWAHiwvh9W24v15XaexnbmdBKy0u4JFEr94peKIltOjQ7sX7ItcauoJ9XmQtKQMJOz7MJNl8MZG76Z%2BN6wYRYVAs0r1tOHRuQhFK19%2B5h6KHzRpfZEx&X-Amz-Signature=a6453a646099bba90a269891f9fbae75651237575103c7b5dc1f1ca189f97afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MQN4PNS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCeAoRZCNIbFMd2B6R926oN1nbXB6kUlNNRgAxdT5%2FigQIgOivNLoDrTy4OnOOaFdr%2BRFDk5w7YHB%2BY0pxIu8vapdEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPsefGABVflhw6vGnircAwQqkbCAskeOZvGg6PZZxBxV8laSvmTa%2BJuddNDVdf5%2FsS4GBQfXv7XaYp5HtpiHDz9uRLurDL%2BVZMkTS%2F%2BGID9UQrEZDuHocD%2FM6mpsY84xRY9n9NuSccsTX7Z2eN79wu6aN6DwOJclanwpPeAkxi0N5dCqbei1G%2B1QuWGe1RoRMrplRq8fSJrRkOWO5VUMEZNWqIQ6MM2IO1fje5KBM2Ie%2FDXx3Bxi1hHLqWqFAV93nB6suN67S5Eqbv84YcHSVxMTDhpkMXG4pV8GS0oxKW%2FqCwWtzy1bSco1orozbE9%2Bide%2BDSwLgR9a7tNQoWzCaHtTvEvYCre3sadsEIjRzcabB8C3W32LWeVX9yiANlMNFoeelg4o1r%2FG12XHUQGdF6oxBh9yQeDTw6gYi6wjM42Q5oyRa2F%2B6jdw55RQ1%2BZHBKukIbQGjrU%2BR19PDw3gL%2F2ZSAkudSruJC%2BrSwPkVaY9BpANnspIgjNQMzcGeDetM5klUyBRBoLY4%2B4sJq6RiRU%2FdW4De3muqAS%2FBXwoF1IzG%2F5L2LDGdq7wBmahVKjhwBtSxmZ%2BaOzVV2ys6Tobg3Y1JfQZkMWy3EhUdbRDRj%2BH2OrVbKnVJkUWrlpbXFkzIM0%2BECois2ns2PaVMKHpwMQGOqUBDG27JflPXb%2FM4m3KItJWzskhIhysURFK%2Fr3z7U7H9ONn5kcDKZyF%2F1Pg8CcX%2B66jBM5daze%2B3qZvEenLLZ4uB6oHKW%2FvbIO%2B7jm8sEFaKzws7vB0RELZP%2Fa985m4g2KqgWgKTeTx5XCVltqoh88ScO2XRN852Q2dHOPtoE7vs4l5WKN3HoGsxPgV7y2eSzkvTDSMD%2Bi1cRtt%2B7akuGgp2CmjaGYz&X-Amz-Signature=baf4d1b7a162f5a227ccbb1930898e24cf52334095a2146b4e866c43e6a4b3d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK26KYCT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFIvajHPES%2BlG8LDyTBbcvAp9cKn2LpGkEsJnpTwxrhRAiBVPYQhAaMS%2F0klp1U2pBBAVBUcQ44zcOriDRI5Ag29TSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMxIlgTsOYWHywP5z0KtwDwPaHWxj%2Bxly79wsoi0CyGBRh7L6Yd9BPxaomiH0Ukg%2F3cy4zzpAsa94CM1ZCis7OUyO8SZsBOMsN1IefH%2F4WoQvmy6FMekdwmZOYvr1jR0GJuc%2FcD1nEkKwSkggcXHvpuElfYqAfGZQQ%2B6uY6j8fl3Te1lOfSpsU%2FmJGP8QY1RKGjbfI3c6Fk4LY3MEf80cpnhbY0vtUntuxhkT%2BgUNfqChTzFFnWzOGoV1hUx3bD64MREYJQDe9NDPHkaanI16hqZMkGhC5sVY%2BXmgYj2e6gDN5MgoeLI0Rv%2Fbe70vi%2FYeABkpGbvQGJDw0HW85x%2B5i3hJmPJWA%2FcaOIGoBj6WnYmUQeUtu0ikmgoYwII4mumGOAlhCWw6F0UE9%2FQndhCovAc3a%2BwQz9OD3MLvdFTUSuq2vChF2PkPZbIP15TkdXnVkKblL9LxlauUj8mpc6sYwJDacPP3LTjjZ5FAMFcLdrQtlK2XJ%2FMY8JhgRtmvXEKFyUSUYl%2F7wj5JQbdcZSCVClm0wKxq4j4xjFfeJ%2BRfmL%2BN3MF6sqkWVM6%2F4sb5WK392ngIzjr98AjJg43fWnUnVnYq%2FPnl8v4Gksx%2B3PL2q1SxIMjWC8UzuJSPffiweu6ta00BJ4k90xkJmhKQwz%2BnAxAY6pgH%2BuU3Nm6cntLoEG72GPOo8hI6dU7ldM%2Fqrd64q4zojPgBTslp0UtArwqquuwpKu5WKxGploM4D3WJwzjAVuTngrHWy3Pv%2FWkttY6QM9i0lYQQ2rSgYGa5kvr3B8UzthYj%2BKdo0zlJ8oPIHNFN1ZkgXgBUzsh6fwAicS4XYhiUqPTYajRbtn1sTEMiYwEIBHsObMwSQGZaRcYezDvu9IUBzbaiuAbAZ&X-Amz-Signature=059ff2a3643dff223894b7a0c385b300fd7b277ea7460ccab52148d05409cbdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXMQ7B4Y%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIC80U0TNR0iHBdwGltT2aLsrfP3FAk7k46%2F3RZt4jFXQAiEA2AI4WugD3jQXxAVpmjRA13N2At29m1n9GkBI40gbHv0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPEp%2BFsceOt4ZjojHCrcA7xah%2F5RLAD8LGw%2FgE7iNoNTFu951JGVIPtXdkLszWEwCfaEyzCGPKwNg74hioCaIq8UrYmMq6Xoi0xnOB9CpmbKxCSUwFKC1xmmwUCgaUbpN1sKCPjGqmbwh0PZUy7rT327uowljMYZ9a7P5i%2FkNDFLpKP6wEAbAP5LCbb%2Fsk8WP4KITQ150vb2Vo0g4Jw%2BpvLCsdGE4zpjycUrc5V%2BbeqR6%2Bfy97v8gXysWetFVLPaoj5EGaTNVbrlB61Ukm6VVB5hjj7seTSaFBArC0C0ElDC9ZlmjDlS3EVwCcAGs8GN%2Bdrnyon1eLoJeRAI5VDKWelxEbBJQuWOtkvnq47Xlr%2FAAtM0nLB69q5ncVwiL85VAXhT9ezHZOFzL%2FhgOcmmzGU25odC7%2Ffe57klz3FFhh9LU5RMgUwgpigrPie5R%2Fp%2FmTCfVybwxZeAqBRFFnK3nteese429qzUfK0TsoE83zj9llD%2BocF%2FD0wcksrI7UqSJ3QKbKN2xpl%2BGuLKvbsNXeA3qjyj6w6C90N0BT7%2Bz%2F6CrTgnCSzSJjieKse4x7RIYBdG8COtEaKdEobKEybhFgFfFcPQICWzMv2Uo5Pi1dFGC6jwEe%2Faus3iJmwSuEa%2BiuuWC11CHHxtC4mUMKLpwMQGOqUB7jyRtpegwIObhtMnddscCbPPRsIQSZQkt4kzfYtDGChF25Eq7I8aozxLUU41uf9EnYFV1e9koeMZuYqpKNivOUdV5G7jgQIXg1G05ZJuksVh0JtXphHNpb3V8Mu8p05L0TfXAXpdlxbIrpIBGqgBnS%2FTX%2ByaoJOtPGNRDKCPWGSDQm8yYpZP17jBepgPdBp8eb%2BWPASwx6E2R9oMI6CFkZEjYBaG&X-Amz-Signature=8ba6025d163193d28ec78b6e51358d236dbab875868509bd238a93fb326698d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK26KYCT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFIvajHPES%2BlG8LDyTBbcvAp9cKn2LpGkEsJnpTwxrhRAiBVPYQhAaMS%2F0klp1U2pBBAVBUcQ44zcOriDRI5Ag29TSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMxIlgTsOYWHywP5z0KtwDwPaHWxj%2Bxly79wsoi0CyGBRh7L6Yd9BPxaomiH0Ukg%2F3cy4zzpAsa94CM1ZCis7OUyO8SZsBOMsN1IefH%2F4WoQvmy6FMekdwmZOYvr1jR0GJuc%2FcD1nEkKwSkggcXHvpuElfYqAfGZQQ%2B6uY6j8fl3Te1lOfSpsU%2FmJGP8QY1RKGjbfI3c6Fk4LY3MEf80cpnhbY0vtUntuxhkT%2BgUNfqChTzFFnWzOGoV1hUx3bD64MREYJQDe9NDPHkaanI16hqZMkGhC5sVY%2BXmgYj2e6gDN5MgoeLI0Rv%2Fbe70vi%2FYeABkpGbvQGJDw0HW85x%2B5i3hJmPJWA%2FcaOIGoBj6WnYmUQeUtu0ikmgoYwII4mumGOAlhCWw6F0UE9%2FQndhCovAc3a%2BwQz9OD3MLvdFTUSuq2vChF2PkPZbIP15TkdXnVkKblL9LxlauUj8mpc6sYwJDacPP3LTjjZ5FAMFcLdrQtlK2XJ%2FMY8JhgRtmvXEKFyUSUYl%2F7wj5JQbdcZSCVClm0wKxq4j4xjFfeJ%2BRfmL%2BN3MF6sqkWVM6%2F4sb5WK392ngIzjr98AjJg43fWnUnVnYq%2FPnl8v4Gksx%2B3PL2q1SxIMjWC8UzuJSPffiweu6ta00BJ4k90xkJmhKQwz%2BnAxAY6pgH%2BuU3Nm6cntLoEG72GPOo8hI6dU7ldM%2Fqrd64q4zojPgBTslp0UtArwqquuwpKu5WKxGploM4D3WJwzjAVuTngrHWy3Pv%2FWkttY6QM9i0lYQQ2rSgYGa5kvr3B8UzthYj%2BKdo0zlJ8oPIHNFN1ZkgXgBUzsh6fwAicS4XYhiUqPTYajRbtn1sTEMiYwEIBHsObMwSQGZaRcYezDvu9IUBzbaiuAbAZ&X-Amz-Signature=89d10bb5486a53824e328290ca08baf10928bdfda97715524fcdbba764ecab34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWNZVULG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDDZnG0E9p7pDSCyz%2BXF0Z5RvfI4HiYIGUnJHAkntSMsgIgVsgJ8IIP0Ir%2FwFTtdJjelQ0su94vemOgkHwoh3GeEPgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPb%2FaShX6%2BEaPJtg2CrcA%2Bd8DZhat7fy%2BT1Vy6gfEQvZ8lp5mhTq3ahYL9ygOSLi7kkC6ChQmWHJtiAjntjPKkrs7kwY07tO%2BXEyNqwTTMygfpMl3cY8G1rSsMI5KKLAPili7g1IFEk7pKKdnXzuKBx5vz8hlRrgbk5b69DiDiWTn6U%2FfKAmdOT%2F0jEvjWR9FheUiUwwaJY%2F4Hf3MZ0NtOZf29enAeo5jJR5ni4dqPGyCAoe%2FF5wuKs2RpnGra%2BiJXQVC5ZF2LR170rYUdZC67h5x%2Bq76%2FwzNRqaC2kkhZKX7gAZPFnbJaL8PLkDRnw0EW%2BaKIG2gsEbr43CvmauqjoHXBgdnmRhykwqOLgl9MCVvQkZ0Aanzka0tlmJFpY8QSdWTyQpp80CB9%2FsV0y16U449MLVd7twNxA0bMAGuJNN32Df%2Fkf5WwrnnZDGrsYRxg8CVVx08QG5MPldsoouBfvXEpAYbecfy%2BViTjgx0tktUiIfgHBjcIgSxLxZYuqOUKbFTTgqq9k8oaEZYxAFfwtgxIbJSmnI3E25yGprzoDjYLWBKB59hFgiCZBBd1F19Pev%2B6CM86drJfUMHOl27CwSlXopsE7RZVpHFODLd7BftuB6aYEEYLCvwrQ%2FG%2Bist5Rj3k8Y2apOrNGTMIXpwMQGOqUBygUfycnQtfdQphAURdUBIKrR8xEuOkm9LbLGkBmeK2w8aaq0%2BjJVMTezKyMnRQaIsPrSAQl1qr6f13q8BxuqPFu3w1qqqII3C6%2F8duIPFfzgUWOnn028f6gI3ek2PDDBZGH3lcLFL9zp2u%2F5wZZsK398Ylz4gb8snuR5iT9qgJQCur1vBV1eLEyRhX6C%2FdpVX822X6KtL9ozBaWyDekIFdlAQ5KI&X-Amz-Signature=579d4e1356f15da41a1802627bc7091c53a1bcfd890d0ed8921bbebf605277ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK26KYCT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFIvajHPES%2BlG8LDyTBbcvAp9cKn2LpGkEsJnpTwxrhRAiBVPYQhAaMS%2F0klp1U2pBBAVBUcQ44zcOriDRI5Ag29TSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMxIlgTsOYWHywP5z0KtwDwPaHWxj%2Bxly79wsoi0CyGBRh7L6Yd9BPxaomiH0Ukg%2F3cy4zzpAsa94CM1ZCis7OUyO8SZsBOMsN1IefH%2F4WoQvmy6FMekdwmZOYvr1jR0GJuc%2FcD1nEkKwSkggcXHvpuElfYqAfGZQQ%2B6uY6j8fl3Te1lOfSpsU%2FmJGP8QY1RKGjbfI3c6Fk4LY3MEf80cpnhbY0vtUntuxhkT%2BgUNfqChTzFFnWzOGoV1hUx3bD64MREYJQDe9NDPHkaanI16hqZMkGhC5sVY%2BXmgYj2e6gDN5MgoeLI0Rv%2Fbe70vi%2FYeABkpGbvQGJDw0HW85x%2B5i3hJmPJWA%2FcaOIGoBj6WnYmUQeUtu0ikmgoYwII4mumGOAlhCWw6F0UE9%2FQndhCovAc3a%2BwQz9OD3MLvdFTUSuq2vChF2PkPZbIP15TkdXnVkKblL9LxlauUj8mpc6sYwJDacPP3LTjjZ5FAMFcLdrQtlK2XJ%2FMY8JhgRtmvXEKFyUSUYl%2F7wj5JQbdcZSCVClm0wKxq4j4xjFfeJ%2BRfmL%2BN3MF6sqkWVM6%2F4sb5WK392ngIzjr98AjJg43fWnUnVnYq%2FPnl8v4Gksx%2B3PL2q1SxIMjWC8UzuJSPffiweu6ta00BJ4k90xkJmhKQwz%2BnAxAY6pgH%2BuU3Nm6cntLoEG72GPOo8hI6dU7ldM%2Fqrd64q4zojPgBTslp0UtArwqquuwpKu5WKxGploM4D3WJwzjAVuTngrHWy3Pv%2FWkttY6QM9i0lYQQ2rSgYGa5kvr3B8UzthYj%2BKdo0zlJ8oPIHNFN1ZkgXgBUzsh6fwAicS4XYhiUqPTYajRbtn1sTEMiYwEIBHsObMwSQGZaRcYezDvu9IUBzbaiuAbAZ&X-Amz-Signature=3897a20eeef0af8ee65ee1f3716b30187047b7b97c6ece8f67ca7d4a17175ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642ELUAMM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCU2bCGRS9J2VeKArs3iY2Jt10DU0dd9mRF46QZ2ScKtwIhAPMEsn1FwEFYHpV3U8wN8ERtTbI5D6B0Kpc1e8dNZhyxKv8DCD0QABoMNjM3NDIzMTgzODA1IgwGAkkve5I%2Bnkii1rIq3AOHBTLJM1m8uK31PcdTKrKXpKbSHHOMxTRvawYi4m3UZHw%2BjWleNECod%2Bq7ZZT2LE62Pw9AD28uCzTxeqWsJdHuPQQ21rRJwaDvvCsVDaV6xA4p1AkCxXv8ZXLUnuRlsTqYo9zD4KO2amfRKcVivJMjpdtK1h0SQDgdQWSPWVLWf%2Fcw7577SfhItm4aA%2F%2FV2UQrIP8yad8Az4uFggP%2FNIQwxnzliZpYfkVU6PE4CtgfqRglnkt4WgWPdtXjrnPBjHzSbZHSHRnlX%2FAJUKiGPFFWrx8t%2BAhSteNOOluxko%2F3q9NJ%2F4u4dzrD3wy0imiNUADhXMLmdv8m5VEqk6sWkwV3XNExbjvN7lueWYeH25bpjM3PJgELSHK%2FKiulzxhjA5gue6zoOVugab52t0du%2FuWnKOtBYI4Yu4zKkQSCeW7Fq0W1wRqagrYstjR4piUf9ZE%2B5zTq%2BLXpR%2Fokyf4czS0sFjPH585kDs8P0enJwTzzhk3dFS1R7xEDVJr7V%2FXoZp0ZmgixT3vX7ghWlHhFOdUnx5fu3icufo3kBKtSVcivmwlDKJ%2Bc6wam6CygELBfnLKu2EISOLKqam1maY%2B873KzQDE%2Bd3qphWyBdy0s2ftW%2F7Vc%2BAeC9TBJovxMDDC16cDEBjqkAdq4Hcj4ATO4cVo5vt6cAUCHp%2BWU7OQ5sw6qab51F1hPA13sAxzvcvbdLwW0xHh9KINE0VqvDjqCG6PuPDrJ683PU0bUseiy61a0MTI9hFUvMso8P4lUNqyuu6jiT1asXopMHO3EKHxVkFhd9CqQnfv3%2FgbYx%2F%2FKeXn5rXzSC9DENzul2YeootDjPrwsmaaVkQ3LSLbGZHwwzzj8r1VIFbh8YHcv&X-Amz-Signature=d9f647f2080082f79a1371720d26eecdd5fb64f6668bba2b17cbbfcf27d5195a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK26KYCT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFIvajHPES%2BlG8LDyTBbcvAp9cKn2LpGkEsJnpTwxrhRAiBVPYQhAaMS%2F0klp1U2pBBAVBUcQ44zcOriDRI5Ag29TSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMxIlgTsOYWHywP5z0KtwDwPaHWxj%2Bxly79wsoi0CyGBRh7L6Yd9BPxaomiH0Ukg%2F3cy4zzpAsa94CM1ZCis7OUyO8SZsBOMsN1IefH%2F4WoQvmy6FMekdwmZOYvr1jR0GJuc%2FcD1nEkKwSkggcXHvpuElfYqAfGZQQ%2B6uY6j8fl3Te1lOfSpsU%2FmJGP8QY1RKGjbfI3c6Fk4LY3MEf80cpnhbY0vtUntuxhkT%2BgUNfqChTzFFnWzOGoV1hUx3bD64MREYJQDe9NDPHkaanI16hqZMkGhC5sVY%2BXmgYj2e6gDN5MgoeLI0Rv%2Fbe70vi%2FYeABkpGbvQGJDw0HW85x%2B5i3hJmPJWA%2FcaOIGoBj6WnYmUQeUtu0ikmgoYwII4mumGOAlhCWw6F0UE9%2FQndhCovAc3a%2BwQz9OD3MLvdFTUSuq2vChF2PkPZbIP15TkdXnVkKblL9LxlauUj8mpc6sYwJDacPP3LTjjZ5FAMFcLdrQtlK2XJ%2FMY8JhgRtmvXEKFyUSUYl%2F7wj5JQbdcZSCVClm0wKxq4j4xjFfeJ%2BRfmL%2BN3MF6sqkWVM6%2F4sb5WK392ngIzjr98AjJg43fWnUnVnYq%2FPnl8v4Gksx%2B3PL2q1SxIMjWC8UzuJSPffiweu6ta00BJ4k90xkJmhKQwz%2BnAxAY6pgH%2BuU3Nm6cntLoEG72GPOo8hI6dU7ldM%2Fqrd64q4zojPgBTslp0UtArwqquuwpKu5WKxGploM4D3WJwzjAVuTngrHWy3Pv%2FWkttY6QM9i0lYQQ2rSgYGa5kvr3B8UzthYj%2BKdo0zlJ8oPIHNFN1ZkgXgBUzsh6fwAicS4XYhiUqPTYajRbtn1sTEMiYwEIBHsObMwSQGZaRcYezDvu9IUBzbaiuAbAZ&X-Amz-Signature=6e7155b36516f010abbc899dd6798e04a836add78f9d753f6672b8f4ce640b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKPSRBJ2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBxuLjiSoAnamhhIlB0i0c0WWhdxqg9G79kVmD4TsNgOAiAIl%2F%2BdnqqnplBUnRVmOVOYizizlKZm7wi5JKonf1punSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMIMWCK8LrYKvzTaWwKtwDMLfXy6qr4WDiJYHSwZH1DTlcp97yRt%2FZJ3JNmnJa1N2vI%2FjFSbLgbehDYCCF1thSIPbnbGn34xd02jkp1tTaLlcZD0kcAhLntVvL%2BePLBu1YPkdYLLkwl2BsS0HKhOn6gJ8Mnmzpwa588jAByqJ2HHKIxvHjI9ivp3GvgUyOFi7fAjFXY9ibRwZn3RuJdCHvGJ%2BcTf7bRgBwyps0dXjdbhWVEauJJflETkah3BDz9ak4nPxUikc1l7P7jzpDyB92Ep3MUsfYZWAvqL5SZZhNKOjw3jXWV%2B%2BVQ2Scavcwf%2FgABBv1%2Fx7cInppCbzNWWmS7sMzpTKODcK2cyVY%2FZknGI1P0Jt02f7XbN8CQ0C%2FnClKziBbSg%2Bc9RfjVfrTXTLrRf18unFQA%2BqjmpQ2y9GwOWijIhquBBlQZzq8McEgMLcl4wNBHl4bPLUb8YJh9DKl6Wfib1LwVnkks2uPtEtuzNLuyYLJg0YSjlKq2%2FLLin%2FszlWAKjmLZGMKE%2BuL%2FC439Gtso4YEkaSTs22%2F1HVLBytfhcNpLnwRlI5LytBu06cI2WSs%2FHA%2FsPI1qP4MA34OMNJX7NCS8bonh1MWfjBkR45MpN0L7Jva3ag9ypD853JnYU4vhNen58HY0Vgw7enAxAY6pgGdSzcVjE%2B0CFqKjbwNImd21QY7PfQTpdxoTRFhGchpDgD7yyiLp7yFCTCYLpbZEMtzQ82q0AiDHBGTJkIjBwtVLnxGRpFetDiEVSmo1%2FX9LLwrUtSxBZIkgrj9RO6ACU%2FkI0TMtVZBHJj%2FgB21PN%2FH6EGW%2F7Dj1h56Qt6IvtVUG8fK56XGq%2B%2BFZJdpyG7W9BZLJWXJBYdn235rWQKrYKJHqm1tSSc%2F&X-Amz-Signature=c32025e41e2f03fdafccda0964c493f24e485023aa8315586f754148502e5718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUWFB65D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIDggO%2FIoFIbwVriiuNEz%2FxcpwbVOWfhbPHB1tWC9mYINAiEAiaOo7zH6dD7gJrvdHp0fOK%2BkF6fQ6QmlUpxoOo2YqoQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDH%2FXYXTyt5E9ZV7L7ircAz47tgCVSZ3%2B9gIJGERxiJP7rzCEo%2BwbYw8hJ5Q%2BbMOcrSFi5eTLsH7BKL1HpnMpL9bFt2wY4cII%2BfDHaVdQXemZ9pHB9s%2BTP17loZw0zfL%2FuIxYlU6mrKJy7fezQy8JkOXK1dSclEBEEH%2FEX2sCBd5rAo7OK6Naiwfk8F76AnEF7wPgBop5I1INCraIErdnRYqU38WeehcPNf8vTR%2B0QBqlaFDID2PUZMnlfxWO1VEDcEQyIX1buBdijlHh7Gx5lTDjtIQWjGSf9C61CNU7y0WmoHpkdNHV2QHzqw10xI1uprHwCn9SazA%2BlozFZ3bepwj2o1tzzebMidgRyVC03WY1icpAtxarTJ3YmrJdbBEVN6%2B44RyimTHKhlYujuKctwh5wTS1yXe8nPNqZ8PvNFM0pmWQ%2BDrTmpgVPFTNLtTN1toYfTRODhpRlzISacA8rlUpu0p99M9koYEEWE%2BV0uHGc0F%2Fm5AHOMZkqDZLCYf%2FLh4YtG9%2FcP8JHRuK5q3N6Jk%2FMDu%2FsYe4Whvic6sHemqbb61%2F%2FAxGcPV0CKzd%2BF6SLymvzOOjlhG4diKRrLUjHmdPX3dyisR71zuBBG4hs9NULaL3K0B7%2BQJQg6sKT26lp8vj7QbwELKVwJANMILqwMQGOqUBd3ufcatkOU6HiCEk5E6e4WEH5MSTi6BGfzSj1de%2BSZHSRYufnINFUvktRnKpJBA7EWUpoDifOQnQNLgBZVuuBAxpwZYGlumBpFDMGHWINzd00sRWWlQk8rc152qwGYLrFzd1Hv51WD4SsaR%2BDhxM%2BcTTgvcOlsH5g3J%2FDVvQpQ1PHH%2BuS4aMalGbmZeuCtWCkIKI1WsJVf1JBFWwW%2Ba%2FjPhPiyl9&X-Amz-Signature=6e160f65a088a837220552b9d15addc8a9a1ca56dddbf4a516aa6e8977946d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EXP6SUV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDkXb3tGEEYwvsHygiXtAxhJIu1p%2FqGYmlOS%2B9rJ7voPAIgU0RdznmNJVlpKKNA1R0qDGvXdiH%2FMXTJ9V7IUxhuB%2FYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFVD2VSCqUT%2BlXr7CSrcA%2FL5458n2iloKdGquUViPUJX4AJNQO37AXn%2BaPiz3afj%2BRN9QCGiBb2RNOstZfuA%2Bzdd%2F4BjN5v1AdJEiLYfTyeFLlTqhvoXPrX%2FR9NlM7h99rLDzjYygydeFU4vcurbhD9u5dVwykvmEJMow4rpW32WKYz87u1ayxnddXSZ0Q9weZuEuhaWih%2FZGA%2F1fpBEOAr8QHreNp%2F22P9zI0gR9XsRGASvqddzaz53YHnGPQzfRI99frP8CEb7WEhd1ZxpXegWdOdsLBJtuedjoDoIuOV%2BqKFC5o3JJ0Qzew97ABEr8T8Gmaqq99T1x%2FpvLvGwoChSD7CxvMg5GOpd4YB0YaP%2F7bnkAhBYd0tawwJ4stZKOBmFefKGoma6xCbZH2JW3PM3zJBQf%2B1Kvoa6Y5ankZKgUBV75WwxawY5HFvNv1eUq%2FHi1ate12tvC4Gf0Y4zIwLYaA%2FQlU5iBbcGFdpO3s%2FFYt08L2bDLZrvI9CGFbrMR2bgv3MSZDPvYFfNjzXyrjkkQ%2BtbO4SRnKwQ25J%2Fo0RCZ6sVnGdeguGmKggbQ7XBzf%2FF%2BYOv%2B6CqJIGRrDXNf1koVMbU0SsE8MHP%2FzW1%2B4DdLf1aE97B9WVHk2cn5ECM4HcrtpBc8kJVdGahMP3owMQGOqUBlU4pfKCKk0DZplOh4Vw%2FiBcmSfjudgZPDfb9kDt0DcK5dU%2F70r6Ubcyte3HiMJrmRBv0vPAI61TcsuGBwm51yXSmtlhRKIg2n5sEpLaWR%2BvLCvKnmhIsRLa%2FsdVoA7aTPy25YIut%2BnpneYqpgCA8fiAHPSVmFtxzSu7IVpqHTpUcuoAxgl0PXoOZDf%2F%2FP2iYgVtkgJuU5GCyngG6twCBpuQ%2Fo6Qu&X-Amz-Signature=541a749262cd2bd9c27e174dbacb85b950f0a85beaf6b070b61d20700aa0c56c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQLZB2G%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCID85zSSaX%2FWobG71yDrQG0pTerJiQg4Gjpn7TlTbcAcPAiAze01IprlXNL%2F%2B7mTChtkPRUcsuniYbsXTt%2Bpknac4NSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMQAZp1cQdQKWCut9gKtwDxnABHos2dRp7Sd30C7Gr0XhxI9Ue74W6bV5I6%2FfSyVnksQo36v259aKjwbljh8o9%2Fa7XaXBN3aacXusod3vVWTNEwYvoeu3dpseCMhMG%2FRX%2FL6NJRgv7bSTSxo%2BPusuFIL7A1tvgD3XK3dTnxoimeuDAdlmH%2B7FYVMORyy5exfxzLUclqHBmilZGcdz2DUmo%2F20Xtquq8DUI9jPgYy55kZ9LDp3jn3%2FkMSNwpSwAbTTjNVEUqREomQvoWbWiYjFHw9sI%2BjCY1pVXY9NxgnuHHEszKNXO9iytNUVtp%2FGC%2Br0Ufcpi%2By6UX2a5y50eaNvKACiGTDFMR%2BHIAjHFwuIJApAL%2F1drHvK8nBfON22PfqM5lN%2BiRxqIH2B4RkB%2F9250h%2F30bY%2BR8T4WbHjPEwcK0Jnyucijt5WBxD7Prv6sxdVV8UGs%2BOnBAgbQGFLYM7N64ZM0%2BxfdgMcxHDsElPmXal6%2Fd%2FWjzLyfLhXV%2Bka%2Fzm1I9OSU0Xih73amOXsxALvsi5%2BFs2JAxzPnEVOCvoIQ3fnl4zhFHS4%2Bc4rdf232ZIoX5nDoytkLIe2%2Bz0rPxwAmV4Nq4qBtJr0ig8o8E6RqzdwEZF23ioBd8x7kh1bKvS%2BmTmSWTWJlCFhsyIgwmOnAxAY6pgGeoH10TpkaPp1SAo%2Blz4D40gKwOAcELzl%2FRHjdCfJ0aaDjAUjnIU3ivHULbKBDaU9niEadZ5t7sIq9RkTPQHSeFm%2BcXp2cZPXj%2BHL2palbfxHclew69bohGuE7of5N2XgNX8erCmjxtQNFleg%2B2%2Bf5YvX7khYIN5SwbHNTGW5sU8NxvBAvzC6egV%2FSlxveSVxdg8Le4QSgBvZl8Mh5yi9kUJqvZnBW&X-Amz-Signature=a216e7e8f477d4540a89e094e8b215e1da86bdfc13ec9f64a88fa6a5a98cc3b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBADMAIB%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCtKLBhIWmxIL5hZMCYzD5qyXJb5S5dn6bytMhdhk99iAIgWSEyP5V3qio14qq%2BJmHk2UGrFU%2BV8WQInaK07HLAgNMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDxnLnUTieUYut%2BaAyrcA%2BaIm9%2FqNhtvfvXfMla%2BEMMMQev49vKHEvEsDjOgwWQ077AbkcUBZWg6WsgYy8IRLTvTv7HSu8kpUbtQbbXHl8D3TIbIkv9Ne3xcjuzIAlnf8n%2FV1RsdwiB4pf%2F15d3YuN%2BfPJq0HR4vNe%2BmOgwSDlhkYuvA0tA6UoXek6FbGslrG79JN2szSqq%2BnvTjRMR7HlolRa9vr3siGpJN56oM8cxIKmsxhdQYy7GMKbSFeq%2B9BFDwvR7Ci6fBpUlqgjFYuED9HnGw3E8owst2aIH8Ye0Cp%2FHJkgewaKnCK7v6PcsnxMThoRkXW3HisJHMOqXa47tqO%2FYR72RWCVUqoJeYOdwqTRVd1fDDnK77x%2FwsTT6poubitln8sEz8c7mbARFeaG9GeFIQR0%2FmlzaZjXxiDmwD0Z03F87isj1JFugsalrZwCSJsfQrCVZslG1R9D4i2sQrExKTLUbHflus7ketgWNmteexiRWc5APstmIzNc4J%2FCAYps%2Baj3aJzfq5FG91a%2B64l6MJ1DQORYaW1%2FXBfT6eddKjhHCbroyeC0MuVoREUYUC%2FF%2FpSUbB0HHmRvV9e%2B9xktmsd%2BiyzwYiHuwLuZJUZioGHpvVMl36JUf83aLlgqTh79RcRnbmcdk8MLbpwMQGOqUB1ZbDLjd%2B%2Bqxg%2BZLj6q3k8ZDm%2B5ZGrOr05afTQHdnhREbfw7bKaUO2POy8HHGvPZo9gVxE1PwS2XTnYoj%2FR5arTYOMorFP4PPkGRwbek6h5qxNxdnACjNipUsDVTkpRrRXYm07diuWE5GSrDrTb%2F1%2Bk3LIyBrmzogSu6x6BuDYJTMWRji9gH9ZDI80rnrlwhN1fkCa0Pv2k8RKurPcsb9M3VOiHW4&X-Amz-Signature=1f70457acad2ffa459f855d7b2b85b2b9b2594ad84ddbe2c55dc84cbe6a5c32f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK26KYCT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFIvajHPES%2BlG8LDyTBbcvAp9cKn2LpGkEsJnpTwxrhRAiBVPYQhAaMS%2F0klp1U2pBBAVBUcQ44zcOriDRI5Ag29TSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMxIlgTsOYWHywP5z0KtwDwPaHWxj%2Bxly79wsoi0CyGBRh7L6Yd9BPxaomiH0Ukg%2F3cy4zzpAsa94CM1ZCis7OUyO8SZsBOMsN1IefH%2F4WoQvmy6FMekdwmZOYvr1jR0GJuc%2FcD1nEkKwSkggcXHvpuElfYqAfGZQQ%2B6uY6j8fl3Te1lOfSpsU%2FmJGP8QY1RKGjbfI3c6Fk4LY3MEf80cpnhbY0vtUntuxhkT%2BgUNfqChTzFFnWzOGoV1hUx3bD64MREYJQDe9NDPHkaanI16hqZMkGhC5sVY%2BXmgYj2e6gDN5MgoeLI0Rv%2Fbe70vi%2FYeABkpGbvQGJDw0HW85x%2B5i3hJmPJWA%2FcaOIGoBj6WnYmUQeUtu0ikmgoYwII4mumGOAlhCWw6F0UE9%2FQndhCovAc3a%2BwQz9OD3MLvdFTUSuq2vChF2PkPZbIP15TkdXnVkKblL9LxlauUj8mpc6sYwJDacPP3LTjjZ5FAMFcLdrQtlK2XJ%2FMY8JhgRtmvXEKFyUSUYl%2F7wj5JQbdcZSCVClm0wKxq4j4xjFfeJ%2BRfmL%2BN3MF6sqkWVM6%2F4sb5WK392ngIzjr98AjJg43fWnUnVnYq%2FPnl8v4Gksx%2B3PL2q1SxIMjWC8UzuJSPffiweu6ta00BJ4k90xkJmhKQwz%2BnAxAY6pgH%2BuU3Nm6cntLoEG72GPOo8hI6dU7ldM%2Fqrd64q4zojPgBTslp0UtArwqquuwpKu5WKxGploM4D3WJwzjAVuTngrHWy3Pv%2FWkttY6QM9i0lYQQ2rSgYGa5kvr3B8UzthYj%2BKdo0zlJ8oPIHNFN1ZkgXgBUzsh6fwAicS4XYhiUqPTYajRbtn1sTEMiYwEIBHsObMwSQGZaRcYezDvu9IUBzbaiuAbAZ&X-Amz-Signature=94f74b5522b3147714603c1894bc9d80a6b831f37211f65ca3919c0fb0a8e12d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK26KYCT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFIvajHPES%2BlG8LDyTBbcvAp9cKn2LpGkEsJnpTwxrhRAiBVPYQhAaMS%2F0klp1U2pBBAVBUcQ44zcOriDRI5Ag29TSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMxIlgTsOYWHywP5z0KtwDwPaHWxj%2Bxly79wsoi0CyGBRh7L6Yd9BPxaomiH0Ukg%2F3cy4zzpAsa94CM1ZCis7OUyO8SZsBOMsN1IefH%2F4WoQvmy6FMekdwmZOYvr1jR0GJuc%2FcD1nEkKwSkggcXHvpuElfYqAfGZQQ%2B6uY6j8fl3Te1lOfSpsU%2FmJGP8QY1RKGjbfI3c6Fk4LY3MEf80cpnhbY0vtUntuxhkT%2BgUNfqChTzFFnWzOGoV1hUx3bD64MREYJQDe9NDPHkaanI16hqZMkGhC5sVY%2BXmgYj2e6gDN5MgoeLI0Rv%2Fbe70vi%2FYeABkpGbvQGJDw0HW85x%2B5i3hJmPJWA%2FcaOIGoBj6WnYmUQeUtu0ikmgoYwII4mumGOAlhCWw6F0UE9%2FQndhCovAc3a%2BwQz9OD3MLvdFTUSuq2vChF2PkPZbIP15TkdXnVkKblL9LxlauUj8mpc6sYwJDacPP3LTjjZ5FAMFcLdrQtlK2XJ%2FMY8JhgRtmvXEKFyUSUYl%2F7wj5JQbdcZSCVClm0wKxq4j4xjFfeJ%2BRfmL%2BN3MF6sqkWVM6%2F4sb5WK392ngIzjr98AjJg43fWnUnVnYq%2FPnl8v4Gksx%2B3PL2q1SxIMjWC8UzuJSPffiweu6ta00BJ4k90xkJmhKQwz%2BnAxAY6pgH%2BuU3Nm6cntLoEG72GPOo8hI6dU7ldM%2Fqrd64q4zojPgBTslp0UtArwqquuwpKu5WKxGploM4D3WJwzjAVuTngrHWy3Pv%2FWkttY6QM9i0lYQQ2rSgYGa5kvr3B8UzthYj%2BKdo0zlJ8oPIHNFN1ZkgXgBUzsh6fwAicS4XYhiUqPTYajRbtn1sTEMiYwEIBHsObMwSQGZaRcYezDvu9IUBzbaiuAbAZ&X-Amz-Signature=3cef5a07cf28b94d2c43bd8d8cfa6571ed113479c0b23da21deb00137000b4d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNKIMFJJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAzR7b1wuVAdXpxcDTInSSdrKvdQsjbc%2FNufttga9K3lAiEAsZ8fvwnK%2FinJsvwY5EWCuBaJjTe0We1lShrJMx1AB7Qq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMxCXqCss06JaahurircA%2FiiHSl8NpFNJwWcNQJohqDmVXfwilH5ZdNU6W7fpZQ7rLHHVRMggfP%2F0g4vqhLjt7lT0WoZwBRRt%2BQc0tGVRl1BufDApYhSGWnrpcBNzvKhb6Ss0ufc%2FpztUpDpzdVqJfk41anGVoZSwJXtICcuSLQLUAXMYGJMXeFq7XijM0VzaL%2FRzV2eMdUyKRl5P2er6G6LN1bGBnXyQZPnGhx87hotLyKLJFbl6KFe%2FEbtGzRVc%2BOV4Bc9%2FFZbyN%2BdtxPZE49f%2BbcxHWO8r76VPwxtKgokALoiNlcE9pSq8CvxICzah13GUGrG7OQiEzyFcwKXr%2BteXfqr4xX1hsCRMgu0gq5CDZCHJGiAypefBPIWze9WCzlRp3XE3GF1PWDA%2Ff3OxmE2R8vu0vK7sBTu6pyCcKaqN1zqK5xyHB2iaV8RgK6%2Fu5p1IPuzPOOYGAgoQTfufwhWCN%2FYDxI9MBDHeKJ7JghtJ7tiC0j1zI78tlZA83dc2drYV%2BLo7P7e1LPkwl2G0E1c9wrUOFsRJ06GxW4zaSf9NBoaRLKbxeN%2BuvF0DEeD8lM4prTM9lzdjUb8W06HZNJLQ%2FzHmjcHiV8vi5WUB0vURKsDfVNDCMO2nWB0uAQVlP80toH5skSV1KLZMKLpwMQGOqUByvafoDVa7wVpogsAyb%2BZlqgETTjTf0mj5W%2FI6oOk5otNP19%2Bc46%2BJx2ttZGB8lJ839yCKEvvPeS5Zgn9fXJQ5aWmA%2FyIfwCoHCglXKqBuczpG1IddFv1KdbLFg%2FmFcCfxHxFlttA0BiDzmJniL6gNWIkvATqM5mNOj1kScieqyCHd2AnQE55w8OaqVVDzWnvOO38QEiLLv5lit%2FPI3xyJ9kl%2BjVf&X-Amz-Signature=83940c52bda721f9229969465a2ddc544c0675a0abd3e12d247de454b7f3236f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNKIMFJJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAzR7b1wuVAdXpxcDTInSSdrKvdQsjbc%2FNufttga9K3lAiEAsZ8fvwnK%2FinJsvwY5EWCuBaJjTe0We1lShrJMx1AB7Qq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMxCXqCss06JaahurircA%2FiiHSl8NpFNJwWcNQJohqDmVXfwilH5ZdNU6W7fpZQ7rLHHVRMggfP%2F0g4vqhLjt7lT0WoZwBRRt%2BQc0tGVRl1BufDApYhSGWnrpcBNzvKhb6Ss0ufc%2FpztUpDpzdVqJfk41anGVoZSwJXtICcuSLQLUAXMYGJMXeFq7XijM0VzaL%2FRzV2eMdUyKRl5P2er6G6LN1bGBnXyQZPnGhx87hotLyKLJFbl6KFe%2FEbtGzRVc%2BOV4Bc9%2FFZbyN%2BdtxPZE49f%2BbcxHWO8r76VPwxtKgokALoiNlcE9pSq8CvxICzah13GUGrG7OQiEzyFcwKXr%2BteXfqr4xX1hsCRMgu0gq5CDZCHJGiAypefBPIWze9WCzlRp3XE3GF1PWDA%2Ff3OxmE2R8vu0vK7sBTu6pyCcKaqN1zqK5xyHB2iaV8RgK6%2Fu5p1IPuzPOOYGAgoQTfufwhWCN%2FYDxI9MBDHeKJ7JghtJ7tiC0j1zI78tlZA83dc2drYV%2BLo7P7e1LPkwl2G0E1c9wrUOFsRJ06GxW4zaSf9NBoaRLKbxeN%2BuvF0DEeD8lM4prTM9lzdjUb8W06HZNJLQ%2FzHmjcHiV8vi5WUB0vURKsDfVNDCMO2nWB0uAQVlP80toH5skSV1KLZMKLpwMQGOqUByvafoDVa7wVpogsAyb%2BZlqgETTjTf0mj5W%2FI6oOk5otNP19%2Bc46%2BJx2ttZGB8lJ839yCKEvvPeS5Zgn9fXJQ5aWmA%2FyIfwCoHCglXKqBuczpG1IddFv1KdbLFg%2FmFcCfxHxFlttA0BiDzmJniL6gNWIkvATqM5mNOj1kScieqyCHd2AnQE55w8OaqVVDzWnvOO38QEiLLv5lit%2FPI3xyJ9kl%2BjVf&X-Amz-Signature=4cf227aaf7f1b59eafb1eec60742bed2956e435347cc4c8f74db84b1dab729cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNKIMFJJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAzR7b1wuVAdXpxcDTInSSdrKvdQsjbc%2FNufttga9K3lAiEAsZ8fvwnK%2FinJsvwY5EWCuBaJjTe0We1lShrJMx1AB7Qq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMxCXqCss06JaahurircA%2FiiHSl8NpFNJwWcNQJohqDmVXfwilH5ZdNU6W7fpZQ7rLHHVRMggfP%2F0g4vqhLjt7lT0WoZwBRRt%2BQc0tGVRl1BufDApYhSGWnrpcBNzvKhb6Ss0ufc%2FpztUpDpzdVqJfk41anGVoZSwJXtICcuSLQLUAXMYGJMXeFq7XijM0VzaL%2FRzV2eMdUyKRl5P2er6G6LN1bGBnXyQZPnGhx87hotLyKLJFbl6KFe%2FEbtGzRVc%2BOV4Bc9%2FFZbyN%2BdtxPZE49f%2BbcxHWO8r76VPwxtKgokALoiNlcE9pSq8CvxICzah13GUGrG7OQiEzyFcwKXr%2BteXfqr4xX1hsCRMgu0gq5CDZCHJGiAypefBPIWze9WCzlRp3XE3GF1PWDA%2Ff3OxmE2R8vu0vK7sBTu6pyCcKaqN1zqK5xyHB2iaV8RgK6%2Fu5p1IPuzPOOYGAgoQTfufwhWCN%2FYDxI9MBDHeKJ7JghtJ7tiC0j1zI78tlZA83dc2drYV%2BLo7P7e1LPkwl2G0E1c9wrUOFsRJ06GxW4zaSf9NBoaRLKbxeN%2BuvF0DEeD8lM4prTM9lzdjUb8W06HZNJLQ%2FzHmjcHiV8vi5WUB0vURKsDfVNDCMO2nWB0uAQVlP80toH5skSV1KLZMKLpwMQGOqUByvafoDVa7wVpogsAyb%2BZlqgETTjTf0mj5W%2FI6oOk5otNP19%2Bc46%2BJx2ttZGB8lJ839yCKEvvPeS5Zgn9fXJQ5aWmA%2FyIfwCoHCglXKqBuczpG1IddFv1KdbLFg%2FmFcCfxHxFlttA0BiDzmJniL6gNWIkvATqM5mNOj1kScieqyCHd2AnQE55w8OaqVVDzWnvOO38QEiLLv5lit%2FPI3xyJ9kl%2BjVf&X-Amz-Signature=0cd638f9e1185ad5b096f901c9bbeb026ceebc4a7482c35a64885bdfda3b0404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNKIMFJJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAzR7b1wuVAdXpxcDTInSSdrKvdQsjbc%2FNufttga9K3lAiEAsZ8fvwnK%2FinJsvwY5EWCuBaJjTe0We1lShrJMx1AB7Qq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMxCXqCss06JaahurircA%2FiiHSl8NpFNJwWcNQJohqDmVXfwilH5ZdNU6W7fpZQ7rLHHVRMggfP%2F0g4vqhLjt7lT0WoZwBRRt%2BQc0tGVRl1BufDApYhSGWnrpcBNzvKhb6Ss0ufc%2FpztUpDpzdVqJfk41anGVoZSwJXtICcuSLQLUAXMYGJMXeFq7XijM0VzaL%2FRzV2eMdUyKRl5P2er6G6LN1bGBnXyQZPnGhx87hotLyKLJFbl6KFe%2FEbtGzRVc%2BOV4Bc9%2FFZbyN%2BdtxPZE49f%2BbcxHWO8r76VPwxtKgokALoiNlcE9pSq8CvxICzah13GUGrG7OQiEzyFcwKXr%2BteXfqr4xX1hsCRMgu0gq5CDZCHJGiAypefBPIWze9WCzlRp3XE3GF1PWDA%2Ff3OxmE2R8vu0vK7sBTu6pyCcKaqN1zqK5xyHB2iaV8RgK6%2Fu5p1IPuzPOOYGAgoQTfufwhWCN%2FYDxI9MBDHeKJ7JghtJ7tiC0j1zI78tlZA83dc2drYV%2BLo7P7e1LPkwl2G0E1c9wrUOFsRJ06GxW4zaSf9NBoaRLKbxeN%2BuvF0DEeD8lM4prTM9lzdjUb8W06HZNJLQ%2FzHmjcHiV8vi5WUB0vURKsDfVNDCMO2nWB0uAQVlP80toH5skSV1KLZMKLpwMQGOqUByvafoDVa7wVpogsAyb%2BZlqgETTjTf0mj5W%2FI6oOk5otNP19%2Bc46%2BJx2ttZGB8lJ839yCKEvvPeS5Zgn9fXJQ5aWmA%2FyIfwCoHCglXKqBuczpG1IddFv1KdbLFg%2FmFcCfxHxFlttA0BiDzmJniL6gNWIkvATqM5mNOj1kScieqyCHd2AnQE55w8OaqVVDzWnvOO38QEiLLv5lit%2FPI3xyJ9kl%2BjVf&X-Amz-Signature=a17e236716637e4e5e131e300e467ca548d7d4f24c61dd661e2722119ece29f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNKIMFJJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAzR7b1wuVAdXpxcDTInSSdrKvdQsjbc%2FNufttga9K3lAiEAsZ8fvwnK%2FinJsvwY5EWCuBaJjTe0We1lShrJMx1AB7Qq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMxCXqCss06JaahurircA%2FiiHSl8NpFNJwWcNQJohqDmVXfwilH5ZdNU6W7fpZQ7rLHHVRMggfP%2F0g4vqhLjt7lT0WoZwBRRt%2BQc0tGVRl1BufDApYhSGWnrpcBNzvKhb6Ss0ufc%2FpztUpDpzdVqJfk41anGVoZSwJXtICcuSLQLUAXMYGJMXeFq7XijM0VzaL%2FRzV2eMdUyKRl5P2er6G6LN1bGBnXyQZPnGhx87hotLyKLJFbl6KFe%2FEbtGzRVc%2BOV4Bc9%2FFZbyN%2BdtxPZE49f%2BbcxHWO8r76VPwxtKgokALoiNlcE9pSq8CvxICzah13GUGrG7OQiEzyFcwKXr%2BteXfqr4xX1hsCRMgu0gq5CDZCHJGiAypefBPIWze9WCzlRp3XE3GF1PWDA%2Ff3OxmE2R8vu0vK7sBTu6pyCcKaqN1zqK5xyHB2iaV8RgK6%2Fu5p1IPuzPOOYGAgoQTfufwhWCN%2FYDxI9MBDHeKJ7JghtJ7tiC0j1zI78tlZA83dc2drYV%2BLo7P7e1LPkwl2G0E1c9wrUOFsRJ06GxW4zaSf9NBoaRLKbxeN%2BuvF0DEeD8lM4prTM9lzdjUb8W06HZNJLQ%2FzHmjcHiV8vi5WUB0vURKsDfVNDCMO2nWB0uAQVlP80toH5skSV1KLZMKLpwMQGOqUByvafoDVa7wVpogsAyb%2BZlqgETTjTf0mj5W%2FI6oOk5otNP19%2Bc46%2BJx2ttZGB8lJ839yCKEvvPeS5Zgn9fXJQ5aWmA%2FyIfwCoHCglXKqBuczpG1IddFv1KdbLFg%2FmFcCfxHxFlttA0BiDzmJniL6gNWIkvATqM5mNOj1kScieqyCHd2AnQE55w8OaqVVDzWnvOO38QEiLLv5lit%2FPI3xyJ9kl%2BjVf&X-Amz-Signature=4be66de5cf91378bab8216c0526158eb3d4fa748eeb997b9745e905ce3163381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNKIMFJJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAzR7b1wuVAdXpxcDTInSSdrKvdQsjbc%2FNufttga9K3lAiEAsZ8fvwnK%2FinJsvwY5EWCuBaJjTe0We1lShrJMx1AB7Qq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMxCXqCss06JaahurircA%2FiiHSl8NpFNJwWcNQJohqDmVXfwilH5ZdNU6W7fpZQ7rLHHVRMggfP%2F0g4vqhLjt7lT0WoZwBRRt%2BQc0tGVRl1BufDApYhSGWnrpcBNzvKhb6Ss0ufc%2FpztUpDpzdVqJfk41anGVoZSwJXtICcuSLQLUAXMYGJMXeFq7XijM0VzaL%2FRzV2eMdUyKRl5P2er6G6LN1bGBnXyQZPnGhx87hotLyKLJFbl6KFe%2FEbtGzRVc%2BOV4Bc9%2FFZbyN%2BdtxPZE49f%2BbcxHWO8r76VPwxtKgokALoiNlcE9pSq8CvxICzah13GUGrG7OQiEzyFcwKXr%2BteXfqr4xX1hsCRMgu0gq5CDZCHJGiAypefBPIWze9WCzlRp3XE3GF1PWDA%2Ff3OxmE2R8vu0vK7sBTu6pyCcKaqN1zqK5xyHB2iaV8RgK6%2Fu5p1IPuzPOOYGAgoQTfufwhWCN%2FYDxI9MBDHeKJ7JghtJ7tiC0j1zI78tlZA83dc2drYV%2BLo7P7e1LPkwl2G0E1c9wrUOFsRJ06GxW4zaSf9NBoaRLKbxeN%2BuvF0DEeD8lM4prTM9lzdjUb8W06HZNJLQ%2FzHmjcHiV8vi5WUB0vURKsDfVNDCMO2nWB0uAQVlP80toH5skSV1KLZMKLpwMQGOqUByvafoDVa7wVpogsAyb%2BZlqgETTjTf0mj5W%2FI6oOk5otNP19%2Bc46%2BJx2ttZGB8lJ839yCKEvvPeS5Zgn9fXJQ5aWmA%2FyIfwCoHCglXKqBuczpG1IddFv1KdbLFg%2FmFcCfxHxFlttA0BiDzmJniL6gNWIkvATqM5mNOj1kScieqyCHd2AnQE55w8OaqVVDzWnvOO38QEiLLv5lit%2FPI3xyJ9kl%2BjVf&X-Amz-Signature=78f8fb70028fe32e517c52a0a73dbfb345f8aef980eee76dd5e4efdd632b8dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNKIMFJJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAzR7b1wuVAdXpxcDTInSSdrKvdQsjbc%2FNufttga9K3lAiEAsZ8fvwnK%2FinJsvwY5EWCuBaJjTe0We1lShrJMx1AB7Qq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMxCXqCss06JaahurircA%2FiiHSl8NpFNJwWcNQJohqDmVXfwilH5ZdNU6W7fpZQ7rLHHVRMggfP%2F0g4vqhLjt7lT0WoZwBRRt%2BQc0tGVRl1BufDApYhSGWnrpcBNzvKhb6Ss0ufc%2FpztUpDpzdVqJfk41anGVoZSwJXtICcuSLQLUAXMYGJMXeFq7XijM0VzaL%2FRzV2eMdUyKRl5P2er6G6LN1bGBnXyQZPnGhx87hotLyKLJFbl6KFe%2FEbtGzRVc%2BOV4Bc9%2FFZbyN%2BdtxPZE49f%2BbcxHWO8r76VPwxtKgokALoiNlcE9pSq8CvxICzah13GUGrG7OQiEzyFcwKXr%2BteXfqr4xX1hsCRMgu0gq5CDZCHJGiAypefBPIWze9WCzlRp3XE3GF1PWDA%2Ff3OxmE2R8vu0vK7sBTu6pyCcKaqN1zqK5xyHB2iaV8RgK6%2Fu5p1IPuzPOOYGAgoQTfufwhWCN%2FYDxI9MBDHeKJ7JghtJ7tiC0j1zI78tlZA83dc2drYV%2BLo7P7e1LPkwl2G0E1c9wrUOFsRJ06GxW4zaSf9NBoaRLKbxeN%2BuvF0DEeD8lM4prTM9lzdjUb8W06HZNJLQ%2FzHmjcHiV8vi5WUB0vURKsDfVNDCMO2nWB0uAQVlP80toH5skSV1KLZMKLpwMQGOqUByvafoDVa7wVpogsAyb%2BZlqgETTjTf0mj5W%2FI6oOk5otNP19%2Bc46%2BJx2ttZGB8lJ839yCKEvvPeS5Zgn9fXJQ5aWmA%2FyIfwCoHCglXKqBuczpG1IddFv1KdbLFg%2FmFcCfxHxFlttA0BiDzmJniL6gNWIkvATqM5mNOj1kScieqyCHd2AnQE55w8OaqVVDzWnvOO38QEiLLv5lit%2FPI3xyJ9kl%2BjVf&X-Amz-Signature=0cd638f9e1185ad5b096f901c9bbeb026ceebc4a7482c35a64885bdfda3b0404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNKIMFJJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAzR7b1wuVAdXpxcDTInSSdrKvdQsjbc%2FNufttga9K3lAiEAsZ8fvwnK%2FinJsvwY5EWCuBaJjTe0We1lShrJMx1AB7Qq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMxCXqCss06JaahurircA%2FiiHSl8NpFNJwWcNQJohqDmVXfwilH5ZdNU6W7fpZQ7rLHHVRMggfP%2F0g4vqhLjt7lT0WoZwBRRt%2BQc0tGVRl1BufDApYhSGWnrpcBNzvKhb6Ss0ufc%2FpztUpDpzdVqJfk41anGVoZSwJXtICcuSLQLUAXMYGJMXeFq7XijM0VzaL%2FRzV2eMdUyKRl5P2er6G6LN1bGBnXyQZPnGhx87hotLyKLJFbl6KFe%2FEbtGzRVc%2BOV4Bc9%2FFZbyN%2BdtxPZE49f%2BbcxHWO8r76VPwxtKgokALoiNlcE9pSq8CvxICzah13GUGrG7OQiEzyFcwKXr%2BteXfqr4xX1hsCRMgu0gq5CDZCHJGiAypefBPIWze9WCzlRp3XE3GF1PWDA%2Ff3OxmE2R8vu0vK7sBTu6pyCcKaqN1zqK5xyHB2iaV8RgK6%2Fu5p1IPuzPOOYGAgoQTfufwhWCN%2FYDxI9MBDHeKJ7JghtJ7tiC0j1zI78tlZA83dc2drYV%2BLo7P7e1LPkwl2G0E1c9wrUOFsRJ06GxW4zaSf9NBoaRLKbxeN%2BuvF0DEeD8lM4prTM9lzdjUb8W06HZNJLQ%2FzHmjcHiV8vi5WUB0vURKsDfVNDCMO2nWB0uAQVlP80toH5skSV1KLZMKLpwMQGOqUByvafoDVa7wVpogsAyb%2BZlqgETTjTf0mj5W%2FI6oOk5otNP19%2Bc46%2BJx2ttZGB8lJ839yCKEvvPeS5Zgn9fXJQ5aWmA%2FyIfwCoHCglXKqBuczpG1IddFv1KdbLFg%2FmFcCfxHxFlttA0BiDzmJniL6gNWIkvATqM5mNOj1kScieqyCHd2AnQE55w8OaqVVDzWnvOO38QEiLLv5lit%2FPI3xyJ9kl%2BjVf&X-Amz-Signature=2a8cf0b1ff8fa3724ac692f49087f7a4a852be73dfac9fdd985d0c34a844e790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNKIMFJJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAzR7b1wuVAdXpxcDTInSSdrKvdQsjbc%2FNufttga9K3lAiEAsZ8fvwnK%2FinJsvwY5EWCuBaJjTe0We1lShrJMx1AB7Qq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMxCXqCss06JaahurircA%2FiiHSl8NpFNJwWcNQJohqDmVXfwilH5ZdNU6W7fpZQ7rLHHVRMggfP%2F0g4vqhLjt7lT0WoZwBRRt%2BQc0tGVRl1BufDApYhSGWnrpcBNzvKhb6Ss0ufc%2FpztUpDpzdVqJfk41anGVoZSwJXtICcuSLQLUAXMYGJMXeFq7XijM0VzaL%2FRzV2eMdUyKRl5P2er6G6LN1bGBnXyQZPnGhx87hotLyKLJFbl6KFe%2FEbtGzRVc%2BOV4Bc9%2FFZbyN%2BdtxPZE49f%2BbcxHWO8r76VPwxtKgokALoiNlcE9pSq8CvxICzah13GUGrG7OQiEzyFcwKXr%2BteXfqr4xX1hsCRMgu0gq5CDZCHJGiAypefBPIWze9WCzlRp3XE3GF1PWDA%2Ff3OxmE2R8vu0vK7sBTu6pyCcKaqN1zqK5xyHB2iaV8RgK6%2Fu5p1IPuzPOOYGAgoQTfufwhWCN%2FYDxI9MBDHeKJ7JghtJ7tiC0j1zI78tlZA83dc2drYV%2BLo7P7e1LPkwl2G0E1c9wrUOFsRJ06GxW4zaSf9NBoaRLKbxeN%2BuvF0DEeD8lM4prTM9lzdjUb8W06HZNJLQ%2FzHmjcHiV8vi5WUB0vURKsDfVNDCMO2nWB0uAQVlP80toH5skSV1KLZMKLpwMQGOqUByvafoDVa7wVpogsAyb%2BZlqgETTjTf0mj5W%2FI6oOk5otNP19%2Bc46%2BJx2ttZGB8lJ839yCKEvvPeS5Zgn9fXJQ5aWmA%2FyIfwCoHCglXKqBuczpG1IddFv1KdbLFg%2FmFcCfxHxFlttA0BiDzmJniL6gNWIkvATqM5mNOj1kScieqyCHd2AnQE55w8OaqVVDzWnvOO38QEiLLv5lit%2FPI3xyJ9kl%2BjVf&X-Amz-Signature=b7b226cd107b2d02c14daa9a2ff9432034921a8cd4d262d0d876a20071ad5763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNKIMFJJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAzR7b1wuVAdXpxcDTInSSdrKvdQsjbc%2FNufttga9K3lAiEAsZ8fvwnK%2FinJsvwY5EWCuBaJjTe0We1lShrJMx1AB7Qq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMxCXqCss06JaahurircA%2FiiHSl8NpFNJwWcNQJohqDmVXfwilH5ZdNU6W7fpZQ7rLHHVRMggfP%2F0g4vqhLjt7lT0WoZwBRRt%2BQc0tGVRl1BufDApYhSGWnrpcBNzvKhb6Ss0ufc%2FpztUpDpzdVqJfk41anGVoZSwJXtICcuSLQLUAXMYGJMXeFq7XijM0VzaL%2FRzV2eMdUyKRl5P2er6G6LN1bGBnXyQZPnGhx87hotLyKLJFbl6KFe%2FEbtGzRVc%2BOV4Bc9%2FFZbyN%2BdtxPZE49f%2BbcxHWO8r76VPwxtKgokALoiNlcE9pSq8CvxICzah13GUGrG7OQiEzyFcwKXr%2BteXfqr4xX1hsCRMgu0gq5CDZCHJGiAypefBPIWze9WCzlRp3XE3GF1PWDA%2Ff3OxmE2R8vu0vK7sBTu6pyCcKaqN1zqK5xyHB2iaV8RgK6%2Fu5p1IPuzPOOYGAgoQTfufwhWCN%2FYDxI9MBDHeKJ7JghtJ7tiC0j1zI78tlZA83dc2drYV%2BLo7P7e1LPkwl2G0E1c9wrUOFsRJ06GxW4zaSf9NBoaRLKbxeN%2BuvF0DEeD8lM4prTM9lzdjUb8W06HZNJLQ%2FzHmjcHiV8vi5WUB0vURKsDfVNDCMO2nWB0uAQVlP80toH5skSV1KLZMKLpwMQGOqUByvafoDVa7wVpogsAyb%2BZlqgETTjTf0mj5W%2FI6oOk5otNP19%2Bc46%2BJx2ttZGB8lJ839yCKEvvPeS5Zgn9fXJQ5aWmA%2FyIfwCoHCglXKqBuczpG1IddFv1KdbLFg%2FmFcCfxHxFlttA0BiDzmJniL6gNWIkvATqM5mNOj1kScieqyCHd2AnQE55w8OaqVVDzWnvOO38QEiLLv5lit%2FPI3xyJ9kl%2BjVf&X-Amz-Signature=2d9542d2798c91fd13be9aca2a8d42a41747c9e39557d617ac339ce741e023cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
