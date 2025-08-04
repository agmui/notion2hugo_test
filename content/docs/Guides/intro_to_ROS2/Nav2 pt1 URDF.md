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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG253N6L%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCnK%2FlMFohSD1wrUIDzMrR85DOjmcsfptzrlhs4ecCX5QIgUwBz6JStmF6Gr%2BaMa5ZyPdIxJoXdeuq%2Fj9iHh1M9CPAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBWlW6VbpSx%2Fl%2BtqUSrcA4EAVn1wF9NBGlshOJif610YMKLrECM1zs52sKq87gPC5krIt1HqWARhUqxZIaLFBXH4HzeqLVk8uSl4MWfnziuJIUx9bUbaXz0NzQC01M13%2B5UVfUIHipA%2FX0a68X3xvqmScloK6aqTJhZKqSvRdsp3r72jlm2m81FLc%2BkXjjyyyEQtMZQJaWg4%2F%2FPcyPLu3cbAYOILtXewt%2BtHNZCtLZtVee7YvsSsgpigHTKwTrjzecu5FCA7tencJcRZ%2BKyW%2B7on%2BUJf0gzJw4m4wFPzaYJmGAUHL9faO29wKbIkRoYpv8cJwg1OF9sVieGMbccPL6swrDBYwAbSKuMHVBrqdkryx9ZUTSv0%2BiwOjazy5gneNi0ksjktKFhFEtVLWV9pJliSZMZCDeQPd8fobiE3XK19zfd%2BG9m5xg30sp54kYxcQUfSJp3zNsTFaoVXwOxY2Z%2FAOy%2FnibSsD0ZJYEtmbSThfkHhULHUTJ66AKeZ%2FZgMY1i%2BGha8kbFFQJ9bbWHNEGWMHU3CqTOqISXAX%2BqNqYSFOppTt8szYJDWonNvAr4XH9uXx46hzVGIJPHzy%2B99kCiNxJ9Qwoi%2Bxq5grt7kxY%2B%2BW4VoZA%2FmTHGyaACoRpiMCqY64nG%2FcMQzk%2FyNMK6nwsQGOqUBAYtQG9%2FKYOIMtji5vroW8l7rmp051ygd7B41%2Fqi3RMUNJoB8pA2FaiRqRSIuUQpN4792GX0yp8L0HgB5C0hI14vmgC3VS%2FvkXKNiZBb7sWix5zHlF9wRy6RPo34xLczc4BbBST39rfiuSXWogbOHZmMikXVOwxJDrGSCROxUjG7uh1wlj1Wut2fgQsEmh8CxuKnmVfacgQVSXcKhKrimHdc639jX&X-Amz-Signature=0f51e64f5849553f9d4de8cf071e72e521a9dcd1356bdf936663679833c8f5da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG253N6L%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCnK%2FlMFohSD1wrUIDzMrR85DOjmcsfptzrlhs4ecCX5QIgUwBz6JStmF6Gr%2BaMa5ZyPdIxJoXdeuq%2Fj9iHh1M9CPAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBWlW6VbpSx%2Fl%2BtqUSrcA4EAVn1wF9NBGlshOJif610YMKLrECM1zs52sKq87gPC5krIt1HqWARhUqxZIaLFBXH4HzeqLVk8uSl4MWfnziuJIUx9bUbaXz0NzQC01M13%2B5UVfUIHipA%2FX0a68X3xvqmScloK6aqTJhZKqSvRdsp3r72jlm2m81FLc%2BkXjjyyyEQtMZQJaWg4%2F%2FPcyPLu3cbAYOILtXewt%2BtHNZCtLZtVee7YvsSsgpigHTKwTrjzecu5FCA7tencJcRZ%2BKyW%2B7on%2BUJf0gzJw4m4wFPzaYJmGAUHL9faO29wKbIkRoYpv8cJwg1OF9sVieGMbccPL6swrDBYwAbSKuMHVBrqdkryx9ZUTSv0%2BiwOjazy5gneNi0ksjktKFhFEtVLWV9pJliSZMZCDeQPd8fobiE3XK19zfd%2BG9m5xg30sp54kYxcQUfSJp3zNsTFaoVXwOxY2Z%2FAOy%2FnibSsD0ZJYEtmbSThfkHhULHUTJ66AKeZ%2FZgMY1i%2BGha8kbFFQJ9bbWHNEGWMHU3CqTOqISXAX%2BqNqYSFOppTt8szYJDWonNvAr4XH9uXx46hzVGIJPHzy%2B99kCiNxJ9Qwoi%2Bxq5grt7kxY%2B%2BW4VoZA%2FmTHGyaACoRpiMCqY64nG%2FcMQzk%2FyNMK6nwsQGOqUBAYtQG9%2FKYOIMtji5vroW8l7rmp051ygd7B41%2Fqi3RMUNJoB8pA2FaiRqRSIuUQpN4792GX0yp8L0HgB5C0hI14vmgC3VS%2FvkXKNiZBb7sWix5zHlF9wRy6RPo34xLczc4BbBST39rfiuSXWogbOHZmMikXVOwxJDrGSCROxUjG7uh1wlj1Wut2fgQsEmh8CxuKnmVfacgQVSXcKhKrimHdc639jX&X-Amz-Signature=e51d69cc6f0e329e7aaeab36130b7221272685e6b9aa8030737237f802eaca7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG253N6L%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCnK%2FlMFohSD1wrUIDzMrR85DOjmcsfptzrlhs4ecCX5QIgUwBz6JStmF6Gr%2BaMa5ZyPdIxJoXdeuq%2Fj9iHh1M9CPAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBWlW6VbpSx%2Fl%2BtqUSrcA4EAVn1wF9NBGlshOJif610YMKLrECM1zs52sKq87gPC5krIt1HqWARhUqxZIaLFBXH4HzeqLVk8uSl4MWfnziuJIUx9bUbaXz0NzQC01M13%2B5UVfUIHipA%2FX0a68X3xvqmScloK6aqTJhZKqSvRdsp3r72jlm2m81FLc%2BkXjjyyyEQtMZQJaWg4%2F%2FPcyPLu3cbAYOILtXewt%2BtHNZCtLZtVee7YvsSsgpigHTKwTrjzecu5FCA7tencJcRZ%2BKyW%2B7on%2BUJf0gzJw4m4wFPzaYJmGAUHL9faO29wKbIkRoYpv8cJwg1OF9sVieGMbccPL6swrDBYwAbSKuMHVBrqdkryx9ZUTSv0%2BiwOjazy5gneNi0ksjktKFhFEtVLWV9pJliSZMZCDeQPd8fobiE3XK19zfd%2BG9m5xg30sp54kYxcQUfSJp3zNsTFaoVXwOxY2Z%2FAOy%2FnibSsD0ZJYEtmbSThfkHhULHUTJ66AKeZ%2FZgMY1i%2BGha8kbFFQJ9bbWHNEGWMHU3CqTOqISXAX%2BqNqYSFOppTt8szYJDWonNvAr4XH9uXx46hzVGIJPHzy%2B99kCiNxJ9Qwoi%2Bxq5grt7kxY%2B%2BW4VoZA%2FmTHGyaACoRpiMCqY64nG%2FcMQzk%2FyNMK6nwsQGOqUBAYtQG9%2FKYOIMtji5vroW8l7rmp051ygd7B41%2Fqi3RMUNJoB8pA2FaiRqRSIuUQpN4792GX0yp8L0HgB5C0hI14vmgC3VS%2FvkXKNiZBb7sWix5zHlF9wRy6RPo34xLczc4BbBST39rfiuSXWogbOHZmMikXVOwxJDrGSCROxUjG7uh1wlj1Wut2fgQsEmh8CxuKnmVfacgQVSXcKhKrimHdc639jX&X-Amz-Signature=ede382701754d3a8bedbbdbeb37cec0f24e3830d25dbaccc031d6805950f6772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG253N6L%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCnK%2FlMFohSD1wrUIDzMrR85DOjmcsfptzrlhs4ecCX5QIgUwBz6JStmF6Gr%2BaMa5ZyPdIxJoXdeuq%2Fj9iHh1M9CPAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBWlW6VbpSx%2Fl%2BtqUSrcA4EAVn1wF9NBGlshOJif610YMKLrECM1zs52sKq87gPC5krIt1HqWARhUqxZIaLFBXH4HzeqLVk8uSl4MWfnziuJIUx9bUbaXz0NzQC01M13%2B5UVfUIHipA%2FX0a68X3xvqmScloK6aqTJhZKqSvRdsp3r72jlm2m81FLc%2BkXjjyyyEQtMZQJaWg4%2F%2FPcyPLu3cbAYOILtXewt%2BtHNZCtLZtVee7YvsSsgpigHTKwTrjzecu5FCA7tencJcRZ%2BKyW%2B7on%2BUJf0gzJw4m4wFPzaYJmGAUHL9faO29wKbIkRoYpv8cJwg1OF9sVieGMbccPL6swrDBYwAbSKuMHVBrqdkryx9ZUTSv0%2BiwOjazy5gneNi0ksjktKFhFEtVLWV9pJliSZMZCDeQPd8fobiE3XK19zfd%2BG9m5xg30sp54kYxcQUfSJp3zNsTFaoVXwOxY2Z%2FAOy%2FnibSsD0ZJYEtmbSThfkHhULHUTJ66AKeZ%2FZgMY1i%2BGha8kbFFQJ9bbWHNEGWMHU3CqTOqISXAX%2BqNqYSFOppTt8szYJDWonNvAr4XH9uXx46hzVGIJPHzy%2B99kCiNxJ9Qwoi%2Bxq5grt7kxY%2B%2BW4VoZA%2FmTHGyaACoRpiMCqY64nG%2FcMQzk%2FyNMK6nwsQGOqUBAYtQG9%2FKYOIMtji5vroW8l7rmp051ygd7B41%2Fqi3RMUNJoB8pA2FaiRqRSIuUQpN4792GX0yp8L0HgB5C0hI14vmgC3VS%2FvkXKNiZBb7sWix5zHlF9wRy6RPo34xLczc4BbBST39rfiuSXWogbOHZmMikXVOwxJDrGSCROxUjG7uh1wlj1Wut2fgQsEmh8CxuKnmVfacgQVSXcKhKrimHdc639jX&X-Amz-Signature=305c65cec2bbd94254e4d3e8d576b4dbaf1150802698fb28eb59ae23737cff42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG253N6L%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCnK%2FlMFohSD1wrUIDzMrR85DOjmcsfptzrlhs4ecCX5QIgUwBz6JStmF6Gr%2BaMa5ZyPdIxJoXdeuq%2Fj9iHh1M9CPAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBWlW6VbpSx%2Fl%2BtqUSrcA4EAVn1wF9NBGlshOJif610YMKLrECM1zs52sKq87gPC5krIt1HqWARhUqxZIaLFBXH4HzeqLVk8uSl4MWfnziuJIUx9bUbaXz0NzQC01M13%2B5UVfUIHipA%2FX0a68X3xvqmScloK6aqTJhZKqSvRdsp3r72jlm2m81FLc%2BkXjjyyyEQtMZQJaWg4%2F%2FPcyPLu3cbAYOILtXewt%2BtHNZCtLZtVee7YvsSsgpigHTKwTrjzecu5FCA7tencJcRZ%2BKyW%2B7on%2BUJf0gzJw4m4wFPzaYJmGAUHL9faO29wKbIkRoYpv8cJwg1OF9sVieGMbccPL6swrDBYwAbSKuMHVBrqdkryx9ZUTSv0%2BiwOjazy5gneNi0ksjktKFhFEtVLWV9pJliSZMZCDeQPd8fobiE3XK19zfd%2BG9m5xg30sp54kYxcQUfSJp3zNsTFaoVXwOxY2Z%2FAOy%2FnibSsD0ZJYEtmbSThfkHhULHUTJ66AKeZ%2FZgMY1i%2BGha8kbFFQJ9bbWHNEGWMHU3CqTOqISXAX%2BqNqYSFOppTt8szYJDWonNvAr4XH9uXx46hzVGIJPHzy%2B99kCiNxJ9Qwoi%2Bxq5grt7kxY%2B%2BW4VoZA%2FmTHGyaACoRpiMCqY64nG%2FcMQzk%2FyNMK6nwsQGOqUBAYtQG9%2FKYOIMtji5vroW8l7rmp051ygd7B41%2Fqi3RMUNJoB8pA2FaiRqRSIuUQpN4792GX0yp8L0HgB5C0hI14vmgC3VS%2FvkXKNiZBb7sWix5zHlF9wRy6RPo34xLczc4BbBST39rfiuSXWogbOHZmMikXVOwxJDrGSCROxUjG7uh1wlj1Wut2fgQsEmh8CxuKnmVfacgQVSXcKhKrimHdc639jX&X-Amz-Signature=e6de5e0a4096d71799666eed7926e164b4e6273ad7544f97aeda24d8a61b3c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG253N6L%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCnK%2FlMFohSD1wrUIDzMrR85DOjmcsfptzrlhs4ecCX5QIgUwBz6JStmF6Gr%2BaMa5ZyPdIxJoXdeuq%2Fj9iHh1M9CPAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBWlW6VbpSx%2Fl%2BtqUSrcA4EAVn1wF9NBGlshOJif610YMKLrECM1zs52sKq87gPC5krIt1HqWARhUqxZIaLFBXH4HzeqLVk8uSl4MWfnziuJIUx9bUbaXz0NzQC01M13%2B5UVfUIHipA%2FX0a68X3xvqmScloK6aqTJhZKqSvRdsp3r72jlm2m81FLc%2BkXjjyyyEQtMZQJaWg4%2F%2FPcyPLu3cbAYOILtXewt%2BtHNZCtLZtVee7YvsSsgpigHTKwTrjzecu5FCA7tencJcRZ%2BKyW%2B7on%2BUJf0gzJw4m4wFPzaYJmGAUHL9faO29wKbIkRoYpv8cJwg1OF9sVieGMbccPL6swrDBYwAbSKuMHVBrqdkryx9ZUTSv0%2BiwOjazy5gneNi0ksjktKFhFEtVLWV9pJliSZMZCDeQPd8fobiE3XK19zfd%2BG9m5xg30sp54kYxcQUfSJp3zNsTFaoVXwOxY2Z%2FAOy%2FnibSsD0ZJYEtmbSThfkHhULHUTJ66AKeZ%2FZgMY1i%2BGha8kbFFQJ9bbWHNEGWMHU3CqTOqISXAX%2BqNqYSFOppTt8szYJDWonNvAr4XH9uXx46hzVGIJPHzy%2B99kCiNxJ9Qwoi%2Bxq5grt7kxY%2B%2BW4VoZA%2FmTHGyaACoRpiMCqY64nG%2FcMQzk%2FyNMK6nwsQGOqUBAYtQG9%2FKYOIMtji5vroW8l7rmp051ygd7B41%2Fqi3RMUNJoB8pA2FaiRqRSIuUQpN4792GX0yp8L0HgB5C0hI14vmgC3VS%2FvkXKNiZBb7sWix5zHlF9wRy6RPo34xLczc4BbBST39rfiuSXWogbOHZmMikXVOwxJDrGSCROxUjG7uh1wlj1Wut2fgQsEmh8CxuKnmVfacgQVSXcKhKrimHdc639jX&X-Amz-Signature=8548ea44e6a8d70d3c64520ecb531bbea45f37377e220339294c04dd79c38890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG253N6L%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCnK%2FlMFohSD1wrUIDzMrR85DOjmcsfptzrlhs4ecCX5QIgUwBz6JStmF6Gr%2BaMa5ZyPdIxJoXdeuq%2Fj9iHh1M9CPAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBWlW6VbpSx%2Fl%2BtqUSrcA4EAVn1wF9NBGlshOJif610YMKLrECM1zs52sKq87gPC5krIt1HqWARhUqxZIaLFBXH4HzeqLVk8uSl4MWfnziuJIUx9bUbaXz0NzQC01M13%2B5UVfUIHipA%2FX0a68X3xvqmScloK6aqTJhZKqSvRdsp3r72jlm2m81FLc%2BkXjjyyyEQtMZQJaWg4%2F%2FPcyPLu3cbAYOILtXewt%2BtHNZCtLZtVee7YvsSsgpigHTKwTrjzecu5FCA7tencJcRZ%2BKyW%2B7on%2BUJf0gzJw4m4wFPzaYJmGAUHL9faO29wKbIkRoYpv8cJwg1OF9sVieGMbccPL6swrDBYwAbSKuMHVBrqdkryx9ZUTSv0%2BiwOjazy5gneNi0ksjktKFhFEtVLWV9pJliSZMZCDeQPd8fobiE3XK19zfd%2BG9m5xg30sp54kYxcQUfSJp3zNsTFaoVXwOxY2Z%2FAOy%2FnibSsD0ZJYEtmbSThfkHhULHUTJ66AKeZ%2FZgMY1i%2BGha8kbFFQJ9bbWHNEGWMHU3CqTOqISXAX%2BqNqYSFOppTt8szYJDWonNvAr4XH9uXx46hzVGIJPHzy%2B99kCiNxJ9Qwoi%2Bxq5grt7kxY%2B%2BW4VoZA%2FmTHGyaACoRpiMCqY64nG%2FcMQzk%2FyNMK6nwsQGOqUBAYtQG9%2FKYOIMtji5vroW8l7rmp051ygd7B41%2Fqi3RMUNJoB8pA2FaiRqRSIuUQpN4792GX0yp8L0HgB5C0hI14vmgC3VS%2FvkXKNiZBb7sWix5zHlF9wRy6RPo34xLczc4BbBST39rfiuSXWogbOHZmMikXVOwxJDrGSCROxUjG7uh1wlj1Wut2fgQsEmh8CxuKnmVfacgQVSXcKhKrimHdc639jX&X-Amz-Signature=5b13d839e7009d401e3ecbd883708f143f367fc0c31e46dd45d800cd669606ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG253N6L%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCnK%2FlMFohSD1wrUIDzMrR85DOjmcsfptzrlhs4ecCX5QIgUwBz6JStmF6Gr%2BaMa5ZyPdIxJoXdeuq%2Fj9iHh1M9CPAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBWlW6VbpSx%2Fl%2BtqUSrcA4EAVn1wF9NBGlshOJif610YMKLrECM1zs52sKq87gPC5krIt1HqWARhUqxZIaLFBXH4HzeqLVk8uSl4MWfnziuJIUx9bUbaXz0NzQC01M13%2B5UVfUIHipA%2FX0a68X3xvqmScloK6aqTJhZKqSvRdsp3r72jlm2m81FLc%2BkXjjyyyEQtMZQJaWg4%2F%2FPcyPLu3cbAYOILtXewt%2BtHNZCtLZtVee7YvsSsgpigHTKwTrjzecu5FCA7tencJcRZ%2BKyW%2B7on%2BUJf0gzJw4m4wFPzaYJmGAUHL9faO29wKbIkRoYpv8cJwg1OF9sVieGMbccPL6swrDBYwAbSKuMHVBrqdkryx9ZUTSv0%2BiwOjazy5gneNi0ksjktKFhFEtVLWV9pJliSZMZCDeQPd8fobiE3XK19zfd%2BG9m5xg30sp54kYxcQUfSJp3zNsTFaoVXwOxY2Z%2FAOy%2FnibSsD0ZJYEtmbSThfkHhULHUTJ66AKeZ%2FZgMY1i%2BGha8kbFFQJ9bbWHNEGWMHU3CqTOqISXAX%2BqNqYSFOppTt8szYJDWonNvAr4XH9uXx46hzVGIJPHzy%2B99kCiNxJ9Qwoi%2Bxq5grt7kxY%2B%2BW4VoZA%2FmTHGyaACoRpiMCqY64nG%2FcMQzk%2FyNMK6nwsQGOqUBAYtQG9%2FKYOIMtji5vroW8l7rmp051ygd7B41%2Fqi3RMUNJoB8pA2FaiRqRSIuUQpN4792GX0yp8L0HgB5C0hI14vmgC3VS%2FvkXKNiZBb7sWix5zHlF9wRy6RPo34xLczc4BbBST39rfiuSXWogbOHZmMikXVOwxJDrGSCROxUjG7uh1wlj1Wut2fgQsEmh8CxuKnmVfacgQVSXcKhKrimHdc639jX&X-Amz-Signature=5447e85f147082a632425c07069384a053be8c6256cea1016283c4ca167763a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG253N6L%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCnK%2FlMFohSD1wrUIDzMrR85DOjmcsfptzrlhs4ecCX5QIgUwBz6JStmF6Gr%2BaMa5ZyPdIxJoXdeuq%2Fj9iHh1M9CPAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBWlW6VbpSx%2Fl%2BtqUSrcA4EAVn1wF9NBGlshOJif610YMKLrECM1zs52sKq87gPC5krIt1HqWARhUqxZIaLFBXH4HzeqLVk8uSl4MWfnziuJIUx9bUbaXz0NzQC01M13%2B5UVfUIHipA%2FX0a68X3xvqmScloK6aqTJhZKqSvRdsp3r72jlm2m81FLc%2BkXjjyyyEQtMZQJaWg4%2F%2FPcyPLu3cbAYOILtXewt%2BtHNZCtLZtVee7YvsSsgpigHTKwTrjzecu5FCA7tencJcRZ%2BKyW%2B7on%2BUJf0gzJw4m4wFPzaYJmGAUHL9faO29wKbIkRoYpv8cJwg1OF9sVieGMbccPL6swrDBYwAbSKuMHVBrqdkryx9ZUTSv0%2BiwOjazy5gneNi0ksjktKFhFEtVLWV9pJliSZMZCDeQPd8fobiE3XK19zfd%2BG9m5xg30sp54kYxcQUfSJp3zNsTFaoVXwOxY2Z%2FAOy%2FnibSsD0ZJYEtmbSThfkHhULHUTJ66AKeZ%2FZgMY1i%2BGha8kbFFQJ9bbWHNEGWMHU3CqTOqISXAX%2BqNqYSFOppTt8szYJDWonNvAr4XH9uXx46hzVGIJPHzy%2B99kCiNxJ9Qwoi%2Bxq5grt7kxY%2B%2BW4VoZA%2FmTHGyaACoRpiMCqY64nG%2FcMQzk%2FyNMK6nwsQGOqUBAYtQG9%2FKYOIMtji5vroW8l7rmp051ygd7B41%2Fqi3RMUNJoB8pA2FaiRqRSIuUQpN4792GX0yp8L0HgB5C0hI14vmgC3VS%2FvkXKNiZBb7sWix5zHlF9wRy6RPo34xLczc4BbBST39rfiuSXWogbOHZmMikXVOwxJDrGSCROxUjG7uh1wlj1Wut2fgQsEmh8CxuKnmVfacgQVSXcKhKrimHdc639jX&X-Amz-Signature=2ba23058db5f40fbb0cfb344b6755689f89edf91492dab51ad019300f2d5bb9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG253N6L%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCnK%2FlMFohSD1wrUIDzMrR85DOjmcsfptzrlhs4ecCX5QIgUwBz6JStmF6Gr%2BaMa5ZyPdIxJoXdeuq%2Fj9iHh1M9CPAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBWlW6VbpSx%2Fl%2BtqUSrcA4EAVn1wF9NBGlshOJif610YMKLrECM1zs52sKq87gPC5krIt1HqWARhUqxZIaLFBXH4HzeqLVk8uSl4MWfnziuJIUx9bUbaXz0NzQC01M13%2B5UVfUIHipA%2FX0a68X3xvqmScloK6aqTJhZKqSvRdsp3r72jlm2m81FLc%2BkXjjyyyEQtMZQJaWg4%2F%2FPcyPLu3cbAYOILtXewt%2BtHNZCtLZtVee7YvsSsgpigHTKwTrjzecu5FCA7tencJcRZ%2BKyW%2B7on%2BUJf0gzJw4m4wFPzaYJmGAUHL9faO29wKbIkRoYpv8cJwg1OF9sVieGMbccPL6swrDBYwAbSKuMHVBrqdkryx9ZUTSv0%2BiwOjazy5gneNi0ksjktKFhFEtVLWV9pJliSZMZCDeQPd8fobiE3XK19zfd%2BG9m5xg30sp54kYxcQUfSJp3zNsTFaoVXwOxY2Z%2FAOy%2FnibSsD0ZJYEtmbSThfkHhULHUTJ66AKeZ%2FZgMY1i%2BGha8kbFFQJ9bbWHNEGWMHU3CqTOqISXAX%2BqNqYSFOppTt8szYJDWonNvAr4XH9uXx46hzVGIJPHzy%2B99kCiNxJ9Qwoi%2Bxq5grt7kxY%2B%2BW4VoZA%2FmTHGyaACoRpiMCqY64nG%2FcMQzk%2FyNMK6nwsQGOqUBAYtQG9%2FKYOIMtji5vroW8l7rmp051ygd7B41%2Fqi3RMUNJoB8pA2FaiRqRSIuUQpN4792GX0yp8L0HgB5C0hI14vmgC3VS%2FvkXKNiZBb7sWix5zHlF9wRy6RPo34xLczc4BbBST39rfiuSXWogbOHZmMikXVOwxJDrGSCROxUjG7uh1wlj1Wut2fgQsEmh8CxuKnmVfacgQVSXcKhKrimHdc639jX&X-Amz-Signature=d2a1c40c198fbfa4721d1cfd063197d1b70e849b85d949624850fdf2239d9986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFXEVWI3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF9oGlM9ewTe7WUO%2Fy2p8ABRnmhHR48v87i2RrxtVx04AiEAlLuizPmmXUfg0fYmVlDQDsXu2Oy7W4u0IWti%2BYt9jb4q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDvepYXpkbsoFQQVAyrcA8Zm%2B98jBobRlXUHML6TKC%2Flr0243A8JRt2rX0%2F1737CrRAOSAderHhh5PMoh9tqiJkvm6%2F9nFCIEuyg%2Fg8%2F1YjwXaMaa%2Bp4icG34EX2simo04%2Frm%2FORxkanShjkIwB02SDccxj0AQmAv5fgvUHle4bxyqsbdDMDbvlim9WSxet68cPCw5Ir5tM%2Fa2nAluQ3y90r9LMQfRMjsOfcYtf2xdKCmZtLajfNSsspYfKuUaskxp0bBJwQ9ezYuz2sBKXI0E0scu5q81zRmzrZDb5kNaImQgdvxHQ8Vj1DYHFeSyHGFgWD0Q5XCA9SjruTyp36DZQMxzVPVI5IwvF2gYsNYbOx16Dax5lZjpp0JWTjE%2BdfYlV9yzI6rPcEvasSIb3VYmayP%2ByJv5%2BNraokNxw5p043TB2CXYmuhstU8DCUbiA1TYbYUhgR6GGHW5MrQgxJmIu1dokvNS%2BofLXVhhLmuroRYW0mYR3v%2F4lA86SkRUZIrFydXw1kLp8PLoInY8ghWfK7ynbkjJjzdVTcefga7xwqxAfPxfU52bggKDU6ST7wxP6BvKCk%2BNImS3D1ny38GTMITpTI1NPBTt2ou3tf3OYrlAUU%2FgZ%2BNGohT1XdvErsyWV3S4kaXZMx4EbFMOWmwsQGOqUBgxRQkBz7pyAGEaYDgQUbuEiUVXGfvJ5Wq2BzpTTHdPPhDKsiwzk3iaFxsNCEIvc1qMLdC78PpNnk7mqAMt0xNYVQuSbtUAI7XOU%2BewvNNPu8UbNfM3KgNwNamhlDtdJiot8oYm7YWWOcBMQs08foz%2FMPlvYA9TUMcKNzID8HG%2FLtXFKyfyw3uD7kLa%2FAmJyRxPkTIYSZejHVKoWuC%2B8b26pSZUaf&X-Amz-Signature=24e4025171237976de20ef2905edd1607efe0169dfeb7e94f78e20a296ab7320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VFVMNF3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDD2zUX5tqqEFdo6SUsmh6Z9OqwXOUqXvVTfuDsEyUKnAIgOWARipqIsRocNbDt8SAzGHi93jjIsivpDscKs6CuiYcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPO%2Be12b3GwlAElb8CrcA%2BvxlwtpJBc5AM64kn417luCi48c6pkXvK9ZiO6n9I0SzQ3iYcIoH5HPn4OvmnvhR6uiyH1wb46AqV548Du8VGXoA2SR8dNaEeJ5PMsSx5k9W2Fpp0k3QRFfIuVbriFJ9ziBZs328bHDOIlJiZhi8mfBk0xcOmU%2BWtezUNgBumWmDTHx404Hj1Ej3HeaJBlMPXaPEZv9KT2OOGZXTL4rT%2FEeGPwiWtPeB61ZBB8YX9NFAFCOabiX7XeIy%2BsHR9uTmnUKcYn9YkJRp7alddn8xKAXattmucB45vSHur907NdQWX%2Bx0oH39uY2X5Lpuz7jeUWBN82mlN2chWgnQiYgRafrJFkwGLhTJ9%2BHolmgiSkecXDVFir3vSamQn8vlNUcjvLYY977z2zcSOUungx5jbxWcKLcbPaE7Fsdg2%2FRlHgQEOOTDXMVpXAR6%2F%2Ft%2FtiExt08Vm9kkQAYnGBFv5eXf0AZHxBMDggxMliv4F%2F5%2BaOEdlnrpq9mPc%2Be6v3G11qbocJvryW0qrmwHNYfHFCaA7JuqG9KgxTCbNSlyc4fRwDkVcTdv1EQqFTwuWd0aB7Ftdxqeuo4%2BoQ5kRxP%2BtKX%2F34XSVbwZr0IQaKUlnkx%2Fbg0JTzDK1mi0GylqJa9MJOnwsQGOqUBhOzzgfE6lmkBfcpl1KdIlLzCc2g1VHgb40jUHnCG7FI%2Bvq5lRFaL2AliMabwRGw6DA6Tb%2Bio5kw%2FnDn5DnadPXOrZhuFmWsxpJqu7PvaXV5aCdoogxMirg6glta4u476T1IL%2B%2FZ9KJYKilpDtorXEPjy1laIUUaz%2BxmIfiH9NuVD5db7kRC5ay8Kj6kvEtt5nsjNfMaIvA%2F%2FsDjBAcQ%2F4i%2FG3eyv&X-Amz-Signature=5838a16b8cbf9a457da41861713300890dad09448ff7487757c6e1dbc9a7c6b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4PY62X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGbvdrzHN9P7TA0%2BITHBoLvshrgNtaN1t9I6cVa6ZrfoAiEAmrAz24Vi0qR5yMNwhyTM5kKG4quT9tz9I3U5DMofBooq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDA6%2BBZFVjXl7cUmUeyrcAzRV1qeObl%2FwHDCLUF5uLOay8Cgcf4b6wGxKCieIboDDnzuinstTmzfGQbhLtZXr2PYPAyNSlXONdY6QSFTALV%2BiO9SPgtLeXEFggPVDXoxoxUNfnqlWReCQ8qXfp51q08Iqbxh5M3srauvzdzmaDAyhdtlpEvXiDrWxtyYuZQAMyGeGq%2F%2FhSn8qiPeBgVCUNyP8qug1u0tANB0wpPCwnBifIQT8L7jEKDnyYg5uATJG3U%2BitfnZZ8Qy2aRGXDg%2FcZAvpYq6VGuIJrVPUYvn3US7h96rg328GC5eo7rHCefJ1kNHX8un8lpJmRBLGfPtwQFndfjpYLhxUa6erGXVY4Cj0CG1V8TP2tlJz7UaZWipV5ROoPucIoo4x9R%2Bh7smPW9VtR4oNY8LXk7NaWdMVG%2FPwfCjPFpTwUCse6YI6f7XpZXW3jZdauaVgeorYfx9vVIOjnu%2BvBuwobxIqD2nKG8irpY%2F%2F6ulaOtZtpnGUVMM20XoFkvg%2FMkY3qSKzSEgKI6V5MGrVN1Awd2NtqroYkEVK9MN5KueQCjCeQq%2BCl0jnovXfGnwbqwZVVlWSHqkQ3Qkbi%2B7jDtDT7uVX%2B9TRs3uw%2BQF2RwD%2BdXzetATvEoHxBpuoO3h2jtOmZk6MO2mwsQGOqUBLiLAVDCGhpc2xBf9H3NPdG7PCd%2BJUxwdq2ZJr11XTl3tatknepmwUBgn3P3AoaUx7J9YblRJ1tC0zHS67aTwkzeC1Nh18ERNr7PgQ9yVsezVSH6ANlun1V4pdjNCBYqpHjmkyMdnkZxRUl1vNDe3wIHzJ8dyjNtZ%2BqqOQUPPrkJ%2FwKHri9Vef2nyICVbrTV7TUannLy3f7gEHmBZOADpk%2FCiFDu1&X-Amz-Signature=aae7199bcb6859564d2d0368e0919c5efb02c7c6d536284dafd31bee9ee7454a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG253N6L%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCnK%2FlMFohSD1wrUIDzMrR85DOjmcsfptzrlhs4ecCX5QIgUwBz6JStmF6Gr%2BaMa5ZyPdIxJoXdeuq%2Fj9iHh1M9CPAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBWlW6VbpSx%2Fl%2BtqUSrcA4EAVn1wF9NBGlshOJif610YMKLrECM1zs52sKq87gPC5krIt1HqWARhUqxZIaLFBXH4HzeqLVk8uSl4MWfnziuJIUx9bUbaXz0NzQC01M13%2B5UVfUIHipA%2FX0a68X3xvqmScloK6aqTJhZKqSvRdsp3r72jlm2m81FLc%2BkXjjyyyEQtMZQJaWg4%2F%2FPcyPLu3cbAYOILtXewt%2BtHNZCtLZtVee7YvsSsgpigHTKwTrjzecu5FCA7tencJcRZ%2BKyW%2B7on%2BUJf0gzJw4m4wFPzaYJmGAUHL9faO29wKbIkRoYpv8cJwg1OF9sVieGMbccPL6swrDBYwAbSKuMHVBrqdkryx9ZUTSv0%2BiwOjazy5gneNi0ksjktKFhFEtVLWV9pJliSZMZCDeQPd8fobiE3XK19zfd%2BG9m5xg30sp54kYxcQUfSJp3zNsTFaoVXwOxY2Z%2FAOy%2FnibSsD0ZJYEtmbSThfkHhULHUTJ66AKeZ%2FZgMY1i%2BGha8kbFFQJ9bbWHNEGWMHU3CqTOqISXAX%2BqNqYSFOppTt8szYJDWonNvAr4XH9uXx46hzVGIJPHzy%2B99kCiNxJ9Qwoi%2Bxq5grt7kxY%2B%2BW4VoZA%2FmTHGyaACoRpiMCqY64nG%2FcMQzk%2FyNMK6nwsQGOqUBAYtQG9%2FKYOIMtji5vroW8l7rmp051ygd7B41%2Fqi3RMUNJoB8pA2FaiRqRSIuUQpN4792GX0yp8L0HgB5C0hI14vmgC3VS%2FvkXKNiZBb7sWix5zHlF9wRy6RPo34xLczc4BbBST39rfiuSXWogbOHZmMikXVOwxJDrGSCROxUjG7uh1wlj1Wut2fgQsEmh8CxuKnmVfacgQVSXcKhKrimHdc639jX&X-Amz-Signature=bdc3d560aa5b37c82637295d7f235f61db01c49c17901c763b11a26d7003dc8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZ3VA3A%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDDMG%2F%2Fcg2zKsxpvt%2FGD0ObFkjMAGSmtsfJgqpSxm8bCgIhAK2wQuzUXVNVci4n4hMcibJWjBX0%2BKP8XfGYSEiVZUW9Kv8DCEQQABoMNjM3NDIzMTgzODA1IgycIvq966CCKS8QTwYq3AOUKo0DLBUR8BQLs8IWzOxQTx8P%2B9QXTIl6kqwtdzzMr5ycsU1xWiryNHL%2F54d0xOP4XyIOyUTz5jLIMSrisbK91DAKgZxbRp9uZdj76bmjXSf1fpP3iVHRLsFjcG9vYiVhSD2On5XR0ec0yj0y85p1fmV3NwRtaGJTn6M5i0MvX%2Bb3Zho2EaJXQFRVLjH75%2BrqbfCBUkNXSdADIl0YSZekI5aMBKzrX786Mql%2FD5UAisZa%2Bi3I2Wd0ozM15DYGWkZEo379Fwv9dwmZHZJgaAEV%2BHzS7tmFVE8b7YmlL85oW1ZK2ZkdF3d59%2FHhElEteRd5t9uoid8Qxc0Ar0pU0i8q%2BZffT6%2FNLZnK2ARAQ32XzEOFJS9%2BQYX40INGkrx2qIkmatutvnfXE9jacCA2ZPt97kF24nUb%2B9Pk06PeXWloPdsAg2TJpZEzdaggOWZJSbGUEZzebD0iKucznUUb%2Feh1wRMGbsU02h%2FAYcA9jAGZDd2NQgBHHH5N9rppdvIkdKnrVg5kp90FQVNEOKw%2BY1SnsL%2FBtd07gYpfayJ4BsQdBtbSkjVuxISKdHaPSmrGONOePTwV2twxUziTq30wav4B7TqyHVlAQoJwon4sPANt3G73KSZPDBA7SRemszD4psLEBjqkAW7gDX8nsLDNhlYtFW1vFbp2F5SQiPDRK9qQxPquunsVRf5FC%2FF0YBoC7ZmmfpIbHRNaXtEd2McTsZ1OSrTGOoJ0DsCCpc8eVKogbJU%2FtqGfexcoz%2F%2Bn3dmm2pv081uCzqUGhytMu4O8AUpora%2BC44sUKftdDvTGi%2BRwgmo6TnbB03C6%2BxJflpS1tOSDvoGWfddT5Uc20EdnqGDXwNSzBoEWd%2BqQ&X-Amz-Signature=d840ffbf7bcc7d6fd20bb30a1058f1c56bfe009de43630d46e47f3e029ac669f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG253N6L%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCnK%2FlMFohSD1wrUIDzMrR85DOjmcsfptzrlhs4ecCX5QIgUwBz6JStmF6Gr%2BaMa5ZyPdIxJoXdeuq%2Fj9iHh1M9CPAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBWlW6VbpSx%2Fl%2BtqUSrcA4EAVn1wF9NBGlshOJif610YMKLrECM1zs52sKq87gPC5krIt1HqWARhUqxZIaLFBXH4HzeqLVk8uSl4MWfnziuJIUx9bUbaXz0NzQC01M13%2B5UVfUIHipA%2FX0a68X3xvqmScloK6aqTJhZKqSvRdsp3r72jlm2m81FLc%2BkXjjyyyEQtMZQJaWg4%2F%2FPcyPLu3cbAYOILtXewt%2BtHNZCtLZtVee7YvsSsgpigHTKwTrjzecu5FCA7tencJcRZ%2BKyW%2B7on%2BUJf0gzJw4m4wFPzaYJmGAUHL9faO29wKbIkRoYpv8cJwg1OF9sVieGMbccPL6swrDBYwAbSKuMHVBrqdkryx9ZUTSv0%2BiwOjazy5gneNi0ksjktKFhFEtVLWV9pJliSZMZCDeQPd8fobiE3XK19zfd%2BG9m5xg30sp54kYxcQUfSJp3zNsTFaoVXwOxY2Z%2FAOy%2FnibSsD0ZJYEtmbSThfkHhULHUTJ66AKeZ%2FZgMY1i%2BGha8kbFFQJ9bbWHNEGWMHU3CqTOqISXAX%2BqNqYSFOppTt8szYJDWonNvAr4XH9uXx46hzVGIJPHzy%2B99kCiNxJ9Qwoi%2Bxq5grt7kxY%2B%2BW4VoZA%2FmTHGyaACoRpiMCqY64nG%2FcMQzk%2FyNMK6nwsQGOqUBAYtQG9%2FKYOIMtji5vroW8l7rmp051ygd7B41%2Fqi3RMUNJoB8pA2FaiRqRSIuUQpN4792GX0yp8L0HgB5C0hI14vmgC3VS%2FvkXKNiZBb7sWix5zHlF9wRy6RPo34xLczc4BbBST39rfiuSXWogbOHZmMikXVOwxJDrGSCROxUjG7uh1wlj1Wut2fgQsEmh8CxuKnmVfacgQVSXcKhKrimHdc639jX&X-Amz-Signature=624a79cc2b1fb77298cc3ba225ac26e5a01ed7649575e66ef64270fd90ee7920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBWGNUZM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBJRx1LQJ4mYuPBETZvFRdclD0KeR%2FgXFjqDEs%2FhlSzkAiEA4Vfvfag7iKC3hla9%2BKEgSVPllLQ0em6%2BojBkhAWoBO0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDN0ng%2BZ6q4TtbH3h7CrcA4ajQCjkTTedvQZ6neh%2BvHDJgq0QIhFFoHp%2BhFtju6bjKMXVt1XBpsZ68BdkQDCcltkqCgMlxqD91Nyb3A0OvGyg7J9WIr9LwSnz4jMzjPL%2FB5QxeY1p1sQr5e%2F%2Bt0YSwizrfSX7SIJNxFF685yRC3gEOQxPSOxlHx9enLhtrEWxsK5lIveUCCWPPWv5JXUB8oDN9GHWENRVCbhZugjnC5AIaaaNUgo1dQsGxodvFULq2598JqJQVRQUPusC5V8hKGwJl3FAcSZLOi9FVOgMBEYOkFTpHk0CVtX1MVdV3vE6y%2BFDi5VzQLnttBYIKh4sM%2F8%2FXauWa3gBSkA4lQ7vsMf9msVm2Vm0%2B9ArpmhPKTYzOwetrKRUxBljUQo1rLQrTxI3YjbLav8K72KCzdTTnE5I%2FGZFQyuRo7n9lUIRoESo7tn7YPbRz5qP5oOKSLG8VfbfbBFAZv1lrrX3kaQcRjw9%2FW4S2KlfkNNuquo1uE7cn3IQp97%2BOouCSMhj8toa6VvFvKJbwNYvoYhO1uCZv1Wo173GseboyHipNDGwdNg%2FpkiphT5ygh2%2B7wLX5mRNLeB77%2FHJi4z1TVqobxB9rcdCohIbzrKKRg9rhIuh0AVEgCnE0K3w%2FkTN86ijMM%2BmwsQGOqUB1tVu3VL%2Fb4wgtYtwWP59NGFwK1wNqkyyDK5F0PPyrKRFi%2FZalNdEAmt2O6vZIC0NCbiUssA1yhhmzIxPnQpLZD17%2FFuSINLBhRaxmf7rRp2IlgUEXbOqlo8NxM7UK0WqWpKZeE9R%2BNQWvC15abrDakRm67FCJQTK8Op%2BW7Fd%2F%2B2P5mqzol9svcJaA0UdybT8Fp3j9eWZXa91JxW9uJNRv923oULL&X-Amz-Signature=901887d3d784a26eafb9981159e5951620e237f95b2ad1a9b68610b16395aaec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG253N6L%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCnK%2FlMFohSD1wrUIDzMrR85DOjmcsfptzrlhs4ecCX5QIgUwBz6JStmF6Gr%2BaMa5ZyPdIxJoXdeuq%2Fj9iHh1M9CPAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBWlW6VbpSx%2Fl%2BtqUSrcA4EAVn1wF9NBGlshOJif610YMKLrECM1zs52sKq87gPC5krIt1HqWARhUqxZIaLFBXH4HzeqLVk8uSl4MWfnziuJIUx9bUbaXz0NzQC01M13%2B5UVfUIHipA%2FX0a68X3xvqmScloK6aqTJhZKqSvRdsp3r72jlm2m81FLc%2BkXjjyyyEQtMZQJaWg4%2F%2FPcyPLu3cbAYOILtXewt%2BtHNZCtLZtVee7YvsSsgpigHTKwTrjzecu5FCA7tencJcRZ%2BKyW%2B7on%2BUJf0gzJw4m4wFPzaYJmGAUHL9faO29wKbIkRoYpv8cJwg1OF9sVieGMbccPL6swrDBYwAbSKuMHVBrqdkryx9ZUTSv0%2BiwOjazy5gneNi0ksjktKFhFEtVLWV9pJliSZMZCDeQPd8fobiE3XK19zfd%2BG9m5xg30sp54kYxcQUfSJp3zNsTFaoVXwOxY2Z%2FAOy%2FnibSsD0ZJYEtmbSThfkHhULHUTJ66AKeZ%2FZgMY1i%2BGha8kbFFQJ9bbWHNEGWMHU3CqTOqISXAX%2BqNqYSFOppTt8szYJDWonNvAr4XH9uXx46hzVGIJPHzy%2B99kCiNxJ9Qwoi%2Bxq5grt7kxY%2B%2BW4VoZA%2FmTHGyaACoRpiMCqY64nG%2FcMQzk%2FyNMK6nwsQGOqUBAYtQG9%2FKYOIMtji5vroW8l7rmp051ygd7B41%2Fqi3RMUNJoB8pA2FaiRqRSIuUQpN4792GX0yp8L0HgB5C0hI14vmgC3VS%2FvkXKNiZBb7sWix5zHlF9wRy6RPo34xLczc4BbBST39rfiuSXWogbOHZmMikXVOwxJDrGSCROxUjG7uh1wlj1Wut2fgQsEmh8CxuKnmVfacgQVSXcKhKrimHdc639jX&X-Amz-Signature=cc165f079206a35fe31169b393006b17d44f8d94c0883513538272bb5a471962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTYZU7PT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAyJwZ9%2F8XELK%2F6jmUIv7abXqDy6xn7Q3mzQ2oZF5TxjAiAUZimrpR0XuKdhTQecLUZMfIu7tJ7h9G8Vl6RVIIbkGCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMvDi8MTFV%2BLEu9rpWKtwDbGbfcxYuR3ZaRnY1wmTaegQCcYDzwTa8ZMzziy%2B0k3KfcKFvfYkeiqTOG4fn%2F%2FCwSkRexmqNdSStUsMEkWPl2Auhcz6igw%2FV333GlSMc%2FI0HrbsT1YmaZpwnJnlrsYuvs65sXJKSjRVcNkaLlpaeDYeDFeCiZWtAZXlgzpEvtNFzTRr4hK6VBBSuu84er1I9MLwgpKLXRjCbj4o2fYV%2FUEGJAYZ665I9MDmjCkdo%2Fh3kU%2BmEDgtpeh%2BPQESsGTructkdY%2FniR4Pjbvf3cj4VUYu79skvg5it345bbdPYU5gVYWT38onTY2g7ik%2Bpq4CT4w2Hr2%2BYHPVTvCTlOrxMGS7r5oP6k7ewxGWmyYuvXmCLQmR7%2BWkvai600gAj8xozw3XW0zCmjY7IwZdiPBKuUVPyF9jm5wAKEzh5yUePomJ0ihhJlRESlEWMp4MHInRORLqqcQDF%2FYPZI%2BetsAU08jAAkv7ylroUEAitJgMuNCFt3crNlt4hkpzcp9UAIKhJ5CrmhaIqOA3j6xwp1wT1eOdTuLG%2Fzo0o8qzFXHtyjSZ%2B3%2Bz%2FFfCFerMxBJkCeRrSsIIuXceOxdDrQkyY7IKAaBukB50XPHLVfRNtJT3z0iyjX6ZBk1ist5abM5Iw5abCxAY6pgG4TuacSJnYPlvoynFSFVbAuj%2BWp%2F1eHfryVZeXmDx6B%2BxyBuy2bbUu2MrzZT4%2B%2BZXbSSsNAjhuXcSV18ToSUFng50NGFwbyHbTvPjQ2gj47MyvoKThfowbFsnQqfWK%2FJCqgDRoDD1kw%2BxpfBJsLOBfkEJ1bg43odWAKk8rBsO3hnwW%2Fz6PnjjWoV9N%2F2NM0lTmjZzNpuDTOxE9y1ns%2FY%2FUCZyogBuE&X-Amz-Signature=d312ea515b07d5b28f51bf134cc0966ae217b473c72a65570fc290316bc07ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG253N6L%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCnK%2FlMFohSD1wrUIDzMrR85DOjmcsfptzrlhs4ecCX5QIgUwBz6JStmF6Gr%2BaMa5ZyPdIxJoXdeuq%2Fj9iHh1M9CPAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBWlW6VbpSx%2Fl%2BtqUSrcA4EAVn1wF9NBGlshOJif610YMKLrECM1zs52sKq87gPC5krIt1HqWARhUqxZIaLFBXH4HzeqLVk8uSl4MWfnziuJIUx9bUbaXz0NzQC01M13%2B5UVfUIHipA%2FX0a68X3xvqmScloK6aqTJhZKqSvRdsp3r72jlm2m81FLc%2BkXjjyyyEQtMZQJaWg4%2F%2FPcyPLu3cbAYOILtXewt%2BtHNZCtLZtVee7YvsSsgpigHTKwTrjzecu5FCA7tencJcRZ%2BKyW%2B7on%2BUJf0gzJw4m4wFPzaYJmGAUHL9faO29wKbIkRoYpv8cJwg1OF9sVieGMbccPL6swrDBYwAbSKuMHVBrqdkryx9ZUTSv0%2BiwOjazy5gneNi0ksjktKFhFEtVLWV9pJliSZMZCDeQPd8fobiE3XK19zfd%2BG9m5xg30sp54kYxcQUfSJp3zNsTFaoVXwOxY2Z%2FAOy%2FnibSsD0ZJYEtmbSThfkHhULHUTJ66AKeZ%2FZgMY1i%2BGha8kbFFQJ9bbWHNEGWMHU3CqTOqISXAX%2BqNqYSFOppTt8szYJDWonNvAr4XH9uXx46hzVGIJPHzy%2B99kCiNxJ9Qwoi%2Bxq5grt7kxY%2B%2BW4VoZA%2FmTHGyaACoRpiMCqY64nG%2FcMQzk%2FyNMK6nwsQGOqUBAYtQG9%2FKYOIMtji5vroW8l7rmp051ygd7B41%2Fqi3RMUNJoB8pA2FaiRqRSIuUQpN4792GX0yp8L0HgB5C0hI14vmgC3VS%2FvkXKNiZBb7sWix5zHlF9wRy6RPo34xLczc4BbBST39rfiuSXWogbOHZmMikXVOwxJDrGSCROxUjG7uh1wlj1Wut2fgQsEmh8CxuKnmVfacgQVSXcKhKrimHdc639jX&X-Amz-Signature=bfa43136f4bc4830f57ccf57ea18f6df0cc78d503eededac337b6742eecb6f33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N22CHZR%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCinyKUqVuE3uW45edC7GDl%2FKahEcsYcxEshqzR79EubQIgS%2Fx97zUw9Ig6tlwpOYz50qFNYZNM03PNolKqXxRo5e8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDoS%2FuA9VqA%2Bz60aSircA56rG43JNcGKaC1NkvmDkmaY0tbbWx4PEKOJkhPS2ZAeiqIdIJNCq7IhGXDMzs6EUsp7yqyPLWMEJWd6t0Dvy800PAN78YIN%2Bf41qXrTzRAF71nSeC%2BWhMOYRxsvOhShhu4yjrX%2BBieMTWOomDFaavhlhTUwsa658EbRsP%2BusAJREnI5PgkduF%2FH4NEGP%2FZNgYdZvesMIqVp3IN2nom4E%2BKlnW3oD0VY4VTVrlGNQd6WHEq2k6TzWVppW7%2BrvrYeY7MBq0JrmtQe2e%2BPF9sk14I%2Ff07odJmV16oZqiODhZEJB0W%2BZjmObVdgJY9ESTcoP9mo4XhAJ7BUHRVI8%2BZsliYiziVtB%2F4SOBRjTsIkfp0hSLHwzTDhebNv%2BbMohNVCo%2FhFS40G8t2dQt6x5soPXwfK1g1CNm0YdRg856gVWLcgqFha8FasxxORLY5uaiC2mUCjjuzZcuCopE44TDrW9%2B9SZEqG37TXymv4sfZ69L4BNEg5AgOyZraRrknJe0l9nYLLTwl15wCCk%2B8YcUwHhNuub%2FZAdqU929PQ7cGa7l%2FmVdkvV1OWlk3DV25YBobiiLVQVz1LVZken3zOBtUeT5tPeC%2BVr%2Br9eE9zljlbQCs%2FddL1uPO8D6IMqPsxMOGmwsQGOqUBG1%2Be2zY56ReHi9Iyi%2Bhpi9VzwT9HDHrx9Q2lBvHzOUrp88OeEVdrxO12%2FfrxcLZh0SFuCrAZ3e6jmtfzf%2BylSnZQOk47b4kvbWxYJRVS%2B%2F9QqOAk1ltXSIC5lCXfXtm4qlJjELYmauAmMlaCq2OfOJbGduL6pcDVhuQZry4eWnSrdTj958mqj03V%2FdyvuyVojJuwbwAzC5%2Bv2zHFNSk3lq9atWxL&X-Amz-Signature=538884b22ba071586ada6fa61940df05ae517708f85191137cb46abdb27b28e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3AOLFKJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIEPor70z%2BYGU1MNM0olDMl4r%2Fm6zvZk3j9zk9qrcRvzpAiA5XWLzf1DA3hf1bFDzuPnIJNEJf2NR2bovoPYlDwjPyir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMx6nUq%2Ftl3Dj20YCSKtwDFLocYswzNwvUSsvOjigpmo4wQjrlGn7H4zk4AsM7%2FA%2FPXFFbzInpGYWUkjvKwXKzznFSS2t8wC9DfHuXZPetcXElrPHqFbhzkMFUtauoIxAmzlVmcPh73nyVWQU6r%2FwfRRMZn77r4KJoka8HwD%2FqmJ0MCHq9g9qS56vTmwzwCqOqMTk7sKiMSBcmhpvdkL7YwzqTVTln1jXFgU1v94NS%2FIWvoLfVx7mDKpXFxS16KN6KyukKiWAr6FTR6BLrmpe4oARzu09HHtPPeqbBgSeJE3Gy25MdXYxBglCY5ocJEWT3EFrOtGfmHC3JC8JXhRJy5xtGyNdxZoGjK80hasQtgfrqmmgSkjW6RIITMaZwtDx5CA0N9oRd043%2BlLd3gaMkezPOGA5bvDSyQr6pER4xKuA3KA9lYdoKltKI4igfRbqBvAm56cqbUS2QZ%2BLdAwnAcZ8NZaSpUv1IMqNME4bWaulCOtd4EcdaUiGWGlYMJWhLmZLKfCAzJm%2BOTipmIrATlUzdyVmGVpZM69obUJLoDvLLj1dPDgpooNL7Tt0FjSe1HkslSPXpxxpxSmarBIbF2DWai7iYnis9G%2Ba57VD4wOUsS1ZpvaXg3yW8WYDkjuTlbb6UWihxwt4wDdQwtabCxAY6pgExKgKcG2hG%2FKJiMTXKIeKP61Ddr29Uy910k3pQ83NHr6gZMc2%2BSv%2FkfWK6x6hYBxOroroIRKX%2BXA25dSfwrGnyc2v3RHBwyU1xqXAvZup2DysyskIzAtCwW8qOECyR%2BBFGiCgIy2gOtSydkm2iLdbzdS0hiztelncionf2QXGHHXXcq6JenyTlGA8PWzimTfubBuAfbVXDU1K5EcK7W%2FfxYhqFXt28&X-Amz-Signature=75c347a3e0ca09392a7cd103ec944b3f9deee0c67dd38c7297051a818a8e686a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJQ5YW35%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIE%2BOn9LHokkzzIYN1ArlxwhOyrz%2BNe2DLN7TCFKkJL1kAiAWjcKYM6Sm%2F2DptJJHl0hb%2B3i%2BsGYTnJvp8ltT8lt0mCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMtQnF%2Bk791ZcyUNsoKtwDJbYw6H8S%2FqDyrDqzoC2rfH2LiP7FSg0SSkHCTtsE7TAmtp3RZiwzzqfFZg3liypSC9OM6enuvfekivFmL08BPRnyVj1ubtKc5qX2gSuKNMvpEa32qdMNUW00hqN2%2BsbIcpfkvD8Am12iOkz43OLpsx%2F9a0P5SuUXanQlEtmFD9JmUQu6zFHVJ8CrkMPAzrp9jxOAea%2Bw1TN%2FKnjx%2FZzX09rAHaNh9H2mZA1E4l1NgtUD114hPkqQNtzGF12dUSdqKNLLoIchPAdBREtnLB8xqcWYOZqBZMBrLH2xUXRWlU0y3qSqAEvkTQB%2B2fqXL0TsMv2PSzJa1JNFbNzuioe8YCnMsyzJ3iXEuEPUlP0NY%2BfVvhImRVadbovxaBvHorhdbvkisuPEhb7yda3IeWRvsR59zlptgu44PIqvegMxuCA3lSwe5Ebkl4XxpE6nKUeRz41edETH5Mdlgp%2FAX47Kehfqain3ULgVPbG0ntt4zL9TMuDwHMuV29C0ipYOotWHv1bq6QJx9eaiuJ2D%2FTdx6GXdppbu2Y%2B0w1kDZEJ3TIpHcRwe9HfVozCAoGnRmwMFJLdRGTZ1EbB6ptChuapkRrF7YxW088V1HfxKZj9Dpk3C4qteQ2%2BSvOjxwlUwq6bCxAY6pgFUsNo%2B%2BBp5ybtH2MAQFkzzWgb0LKMNaqWzUrU81OK34eyY1xOydjW%2FPD7TBozEbSCVE4FqnmA22HY12fvU2iul6G9q65gXZMbU8OKFyRv4TLdwgQnJSoDIJ37iqAULmChRux5ySZtfAS3hstEmKQKERxbWenWla6ZpD2106TvI83pP47pmWwEsz7kSPPfG2ZFcRaB0VMnWxFBviickaTxuZoX5sApm&X-Amz-Signature=27cbc6673a8e47a63e35da90a1ee8e9fa1f0ef99b8ff74fbd463919ba8755f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2LS7B7C%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIH%2BaHqBBv1SKCmULczsZJc5S8yDDWePIDpLbHRYmyt1dAiEA4y8mf7bH92I8bpAKw%2BHxbV25GDG%2BP2zQGuVlt0igf30q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBfVsJP0VglO4j4eFyrcAz56vIoN8v81qNcDe24dUwDJriu21u8UkAgyyJinzSJX2VrbqrcpvVwuo1n1QaccyyeVwBcTT4e4YvFCTxLKvtqS4EQwyQWjcY8JKqwuZBFF8UPp72wcgU9lMSgmSyBE4sDhX0zk28qtT4JY7fDJghIGtq%2FhJM7Q7NRRJD7398NYndd%2B1YQgg157K1CWKW8FLI6KrHdQIJ4siR%2BLrvjidyHpcuIEJXaIQ%2Fg0a4jQSVkv37I0suEEWWcMOybP0FrAJt%2BlyBa%2BJeSMExvaCXE67t9n%2FP6RLNUErlwjqkZohZgTdL28Smm8hhRkdi5n3U38QxgsnkvfEyr6fCPiAGqbNE4P0UYXRb2say2DnEO6HY9xpVEWZc2n7HMe8bUbb83xwJ2%2B8hzX%2F7nAqFqO4kvrY4ttySHXacfaYb7lIE%2FJlTyCf6pcuQ7%2FZpKU%2F7zUTi7ZtZKe9IKV6u%2Bmunq6MsxFhJFT1znr2kr9GQKwPWfzY7laY1rrAsPD94b9NEvlTz7AEDHiH7Nh4oqtYel4F2biKHsXBPgFWK0k%2BhVdWXBe%2BPzq2T2cmqOhoI%2FgRFWY%2FW1WzT7qRCIS4EwOUUrU9vwxn37fTCbJMKbA1l0NIn%2B0MbJ0ad1cps3KpUJP%2Fc7BMJ6nwsQGOqUBw5DqNEATDU8wS4PmuPZ7b51R4g3V8ddCSMFrPrpJJBRA3TtHhZOF%2BIhsSXqzuuek62Sz3AaQDiNnZDd93%2FPm69CB4fZwaQ0aP7CfvgWrL%2BCGS1znTiFwpK4GsKpqobKZsa5oVdcGhlHubZdVopJqDkwbVCQMFuxNg5iexQsy%2FUM2%2F7IqmRAM04N0rMiKCVC1L7iatwfjskKfpAIEiapi8AiUjFbf&X-Amz-Signature=5d7e9210a1fc54cff61e426a04ae784da117bc6029af9005980eb96f195286d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXGO6XN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHy094%2F6wBgW5Gqn60bs3U2nMYAuuCCjZenmtQDMJmU%2FAiEA7C8vEVCwJdFpkFITi1uVviL99yY9lyh4nt3MbHE3NYwq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDCgvDK93pDaU1zTH3SrcA6uGW1vy7QP68Uhg9wU93AOX4cpx5ph5HNqlA3DDc8tH1z7HoZFwEg6wYgVnjupg4ilTzdrJStwMch0C0mD%2FICGwlF7QMaj0rI0piQny2IkndwgfAfiad5zAhgyKjhqxy6DIX4KYnfoEq3uWHRkz6sFeePjv1bs2987l9tI2AC2IdKTXXW8mFVHMMiNLKCgNffuHrOnnpYdQm9g%2B4Maigdo8NxgrG8UTePre%2BlrpUstOiGBknlwvlxDY5KD5iCN80BbUJ0fdenTq6X%2FBdJxzCveSeWTC%2BsrwXzLsf%2FmDw0cK703a2kYas%2FBf045KCq2nxzhsKfIkT8m7L0o9GpeZNYX8oSkjhEZR4fme0GQ2edVc7Gp2TjgFCuIqCK7LTsyTb0Dz2l%2FjFzE2jkvZHZ7WKgiEIR9aMt7rz8vFMLFBW%2FbZt0FlHBSFjcjcMuf%2BFnzgJzfjTy3APbtkk%2BmlI2a7%2BTr1FOwTHWb4gy0G1u0jddjLdvLm20FvrNEeFfNClL6et9scHp%2BJuu9H2SJ%2FH55lJMPTRqzmfJ7Zzs6HiNUo%2Fe7IZ7txIJdM6ST98kP7Irk9twtI%2FjDRW25JuLEqBGbVhgc8GTh%2F8IuwAUQGFgCHJEyZGoEFRzLdSUT2On9hMKqmwsQGOqUB7U7pH4gfFHt3tPnatlvmc9VIFpZad0aRjnDsK1fY1gz%2F28HR5AGNq99Xu6VEBhCSwE1MRcwF7RHcNhFnl86p4MPxEadYLk6LaJpalrajvn%2F%2FkGcpAKRH726JD7m9Ru2l9HC1GPGbrFBoC1RZk0iZKpIMOhkaBx7Z2uVUZxg9ohHeFBGpoM83o0C3CUZGuVDxrsodwVtOILsTizPWZaWPX6P48JR5&X-Amz-Signature=1ad9df926518385576788bb2df72b24a5175e3b748c996ea34743eea8383f8d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG253N6L%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCnK%2FlMFohSD1wrUIDzMrR85DOjmcsfptzrlhs4ecCX5QIgUwBz6JStmF6Gr%2BaMa5ZyPdIxJoXdeuq%2Fj9iHh1M9CPAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBWlW6VbpSx%2Fl%2BtqUSrcA4EAVn1wF9NBGlshOJif610YMKLrECM1zs52sKq87gPC5krIt1HqWARhUqxZIaLFBXH4HzeqLVk8uSl4MWfnziuJIUx9bUbaXz0NzQC01M13%2B5UVfUIHipA%2FX0a68X3xvqmScloK6aqTJhZKqSvRdsp3r72jlm2m81FLc%2BkXjjyyyEQtMZQJaWg4%2F%2FPcyPLu3cbAYOILtXewt%2BtHNZCtLZtVee7YvsSsgpigHTKwTrjzecu5FCA7tencJcRZ%2BKyW%2B7on%2BUJf0gzJw4m4wFPzaYJmGAUHL9faO29wKbIkRoYpv8cJwg1OF9sVieGMbccPL6swrDBYwAbSKuMHVBrqdkryx9ZUTSv0%2BiwOjazy5gneNi0ksjktKFhFEtVLWV9pJliSZMZCDeQPd8fobiE3XK19zfd%2BG9m5xg30sp54kYxcQUfSJp3zNsTFaoVXwOxY2Z%2FAOy%2FnibSsD0ZJYEtmbSThfkHhULHUTJ66AKeZ%2FZgMY1i%2BGha8kbFFQJ9bbWHNEGWMHU3CqTOqISXAX%2BqNqYSFOppTt8szYJDWonNvAr4XH9uXx46hzVGIJPHzy%2B99kCiNxJ9Qwoi%2Bxq5grt7kxY%2B%2BW4VoZA%2FmTHGyaACoRpiMCqY64nG%2FcMQzk%2FyNMK6nwsQGOqUBAYtQG9%2FKYOIMtji5vroW8l7rmp051ygd7B41%2Fqi3RMUNJoB8pA2FaiRqRSIuUQpN4792GX0yp8L0HgB5C0hI14vmgC3VS%2FvkXKNiZBb7sWix5zHlF9wRy6RPo34xLczc4BbBST39rfiuSXWogbOHZmMikXVOwxJDrGSCROxUjG7uh1wlj1Wut2fgQsEmh8CxuKnmVfacgQVSXcKhKrimHdc639jX&X-Amz-Signature=b839ad7fa5b7b042d8425b23cdd361a880f31425dc86913020ed235311d66e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG253N6L%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCnK%2FlMFohSD1wrUIDzMrR85DOjmcsfptzrlhs4ecCX5QIgUwBz6JStmF6Gr%2BaMa5ZyPdIxJoXdeuq%2Fj9iHh1M9CPAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBWlW6VbpSx%2Fl%2BtqUSrcA4EAVn1wF9NBGlshOJif610YMKLrECM1zs52sKq87gPC5krIt1HqWARhUqxZIaLFBXH4HzeqLVk8uSl4MWfnziuJIUx9bUbaXz0NzQC01M13%2B5UVfUIHipA%2FX0a68X3xvqmScloK6aqTJhZKqSvRdsp3r72jlm2m81FLc%2BkXjjyyyEQtMZQJaWg4%2F%2FPcyPLu3cbAYOILtXewt%2BtHNZCtLZtVee7YvsSsgpigHTKwTrjzecu5FCA7tencJcRZ%2BKyW%2B7on%2BUJf0gzJw4m4wFPzaYJmGAUHL9faO29wKbIkRoYpv8cJwg1OF9sVieGMbccPL6swrDBYwAbSKuMHVBrqdkryx9ZUTSv0%2BiwOjazy5gneNi0ksjktKFhFEtVLWV9pJliSZMZCDeQPd8fobiE3XK19zfd%2BG9m5xg30sp54kYxcQUfSJp3zNsTFaoVXwOxY2Z%2FAOy%2FnibSsD0ZJYEtmbSThfkHhULHUTJ66AKeZ%2FZgMY1i%2BGha8kbFFQJ9bbWHNEGWMHU3CqTOqISXAX%2BqNqYSFOppTt8szYJDWonNvAr4XH9uXx46hzVGIJPHzy%2B99kCiNxJ9Qwoi%2Bxq5grt7kxY%2B%2BW4VoZA%2FmTHGyaACoRpiMCqY64nG%2FcMQzk%2FyNMK6nwsQGOqUBAYtQG9%2FKYOIMtji5vroW8l7rmp051ygd7B41%2Fqi3RMUNJoB8pA2FaiRqRSIuUQpN4792GX0yp8L0HgB5C0hI14vmgC3VS%2FvkXKNiZBb7sWix5zHlF9wRy6RPo34xLczc4BbBST39rfiuSXWogbOHZmMikXVOwxJDrGSCROxUjG7uh1wlj1Wut2fgQsEmh8CxuKnmVfacgQVSXcKhKrimHdc639jX&X-Amz-Signature=45914e74f48924d8a463cd9a54acdefaa9bd5e86fd39e0e1d6ed05256ff93c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR42R4FK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDptfy6gw%2Fn%2BElA6L7GanW73K7j3RcemVWIeilqZcy3WAiBLBxS2ORJ6zfOHn7Y6bDt29K4mkdHM4bnkRkYU%2FcnFkCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMR5kNJjqsPxSGcvtMKtwD%2Ft5S91y9FVsKK%2FVjWTx7Xu%2BMzMlGenyl6dVxA3cZ3Sw6LoZg8f%2FUtYjGEVPXibFS4535XTY%2Bxae023BpSQVw0B47RtWoiYAephIOFYFRZP5Zsng85BKJFnBJQVDHiFCtbotsUiSNk7Sfc4v6p13giJedwSldW4j2QC4fk2ZTGr36utz0DbNztMRrwQosW3jxled7DcO6OKuHWf%2F1oEu09AVcBe9ZDmMRoqAuqa%2BLoF0ajny3sN5gG4%2F0yKZwMdbXB3yXYKhxNPeetp%2FZCwP78kaQJVJBPHdk7to1bs6cUZDtJg7x7CWoOGaaQ62CG9%2FKQPNfNX2%2BTDaFJSdLHueNSfuIr7mn5o86gAxMH2oZ3oMxDPjfAkcv99FUSWoy0l%2FGoBizouUJX5Em25cFwqpRivs2FqjZNz3DVXWC857DSIVLCvVJrUHe3%2FqF%2BonNBb9k2mqnWib5T8k0D2gDf60oQ3H1eiAeVKpgaMUBhfvQyVc0Ph50TBVlAqoNVL9CKoZg3ncQdIJUGX%2FVqugNt8h6zGb%2B%2FvUqXiEoqQPMB1KBJtQgDF7BLwz%2F26dmGjAsLgzbMLFO575rFq4fgxUZPRCMcbbUIVyxot6f%2BOlBZz0oMjmchLRBkAuSWc1UI5IwpabCxAY6pgFTi6awm7RBXbQingkh3p2vvNnANYqu9XMz3v3ab%2FhlJl%2BhQGdsMwgWpSDZrV%2BZAaGg6%2Bldy9gELVsCH%2FiwA0CuRaO21cIu2KVOL%2Fwkffauy3VpvBN9RCnksT9mQS59VPjJoA%2FOE20CdP7kbcCdsToPblOKBfosoXx8pcJVrb5oevWr8%2B93j6woVA1kjXuHFs4kIwKNJPs1q3%2FiyRQTl5ZALdxaC4Xi&X-Amz-Signature=e3475e89be420c073705417c38d5e76c86c3946f28cbd1634d8268f27d64f08d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR42R4FK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDptfy6gw%2Fn%2BElA6L7GanW73K7j3RcemVWIeilqZcy3WAiBLBxS2ORJ6zfOHn7Y6bDt29K4mkdHM4bnkRkYU%2FcnFkCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMR5kNJjqsPxSGcvtMKtwD%2Ft5S91y9FVsKK%2FVjWTx7Xu%2BMzMlGenyl6dVxA3cZ3Sw6LoZg8f%2FUtYjGEVPXibFS4535XTY%2Bxae023BpSQVw0B47RtWoiYAephIOFYFRZP5Zsng85BKJFnBJQVDHiFCtbotsUiSNk7Sfc4v6p13giJedwSldW4j2QC4fk2ZTGr36utz0DbNztMRrwQosW3jxled7DcO6OKuHWf%2F1oEu09AVcBe9ZDmMRoqAuqa%2BLoF0ajny3sN5gG4%2F0yKZwMdbXB3yXYKhxNPeetp%2FZCwP78kaQJVJBPHdk7to1bs6cUZDtJg7x7CWoOGaaQ62CG9%2FKQPNfNX2%2BTDaFJSdLHueNSfuIr7mn5o86gAxMH2oZ3oMxDPjfAkcv99FUSWoy0l%2FGoBizouUJX5Em25cFwqpRivs2FqjZNz3DVXWC857DSIVLCvVJrUHe3%2FqF%2BonNBb9k2mqnWib5T8k0D2gDf60oQ3H1eiAeVKpgaMUBhfvQyVc0Ph50TBVlAqoNVL9CKoZg3ncQdIJUGX%2FVqugNt8h6zGb%2B%2FvUqXiEoqQPMB1KBJtQgDF7BLwz%2F26dmGjAsLgzbMLFO575rFq4fgxUZPRCMcbbUIVyxot6f%2BOlBZz0oMjmchLRBkAuSWc1UI5IwpabCxAY6pgFTi6awm7RBXbQingkh3p2vvNnANYqu9XMz3v3ab%2FhlJl%2BhQGdsMwgWpSDZrV%2BZAaGg6%2Bldy9gELVsCH%2FiwA0CuRaO21cIu2KVOL%2Fwkffauy3VpvBN9RCnksT9mQS59VPjJoA%2FOE20CdP7kbcCdsToPblOKBfosoXx8pcJVrb5oevWr8%2B93j6woVA1kjXuHFs4kIwKNJPs1q3%2FiyRQTl5ZALdxaC4Xi&X-Amz-Signature=ebc97e07154e3c3748801980ceb2fcf87c8c9915e592051affbcbc753b21fe7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR42R4FK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDptfy6gw%2Fn%2BElA6L7GanW73K7j3RcemVWIeilqZcy3WAiBLBxS2ORJ6zfOHn7Y6bDt29K4mkdHM4bnkRkYU%2FcnFkCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMR5kNJjqsPxSGcvtMKtwD%2Ft5S91y9FVsKK%2FVjWTx7Xu%2BMzMlGenyl6dVxA3cZ3Sw6LoZg8f%2FUtYjGEVPXibFS4535XTY%2Bxae023BpSQVw0B47RtWoiYAephIOFYFRZP5Zsng85BKJFnBJQVDHiFCtbotsUiSNk7Sfc4v6p13giJedwSldW4j2QC4fk2ZTGr36utz0DbNztMRrwQosW3jxled7DcO6OKuHWf%2F1oEu09AVcBe9ZDmMRoqAuqa%2BLoF0ajny3sN5gG4%2F0yKZwMdbXB3yXYKhxNPeetp%2FZCwP78kaQJVJBPHdk7to1bs6cUZDtJg7x7CWoOGaaQ62CG9%2FKQPNfNX2%2BTDaFJSdLHueNSfuIr7mn5o86gAxMH2oZ3oMxDPjfAkcv99FUSWoy0l%2FGoBizouUJX5Em25cFwqpRivs2FqjZNz3DVXWC857DSIVLCvVJrUHe3%2FqF%2BonNBb9k2mqnWib5T8k0D2gDf60oQ3H1eiAeVKpgaMUBhfvQyVc0Ph50TBVlAqoNVL9CKoZg3ncQdIJUGX%2FVqugNt8h6zGb%2B%2FvUqXiEoqQPMB1KBJtQgDF7BLwz%2F26dmGjAsLgzbMLFO575rFq4fgxUZPRCMcbbUIVyxot6f%2BOlBZz0oMjmchLRBkAuSWc1UI5IwpabCxAY6pgFTi6awm7RBXbQingkh3p2vvNnANYqu9XMz3v3ab%2FhlJl%2BhQGdsMwgWpSDZrV%2BZAaGg6%2Bldy9gELVsCH%2FiwA0CuRaO21cIu2KVOL%2Fwkffauy3VpvBN9RCnksT9mQS59VPjJoA%2FOE20CdP7kbcCdsToPblOKBfosoXx8pcJVrb5oevWr8%2B93j6woVA1kjXuHFs4kIwKNJPs1q3%2FiyRQTl5ZALdxaC4Xi&X-Amz-Signature=5a76767245357555ff32401ca8b75f4d800996b234ba19c09ac8f6df10087cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR42R4FK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDptfy6gw%2Fn%2BElA6L7GanW73K7j3RcemVWIeilqZcy3WAiBLBxS2ORJ6zfOHn7Y6bDt29K4mkdHM4bnkRkYU%2FcnFkCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMR5kNJjqsPxSGcvtMKtwD%2Ft5S91y9FVsKK%2FVjWTx7Xu%2BMzMlGenyl6dVxA3cZ3Sw6LoZg8f%2FUtYjGEVPXibFS4535XTY%2Bxae023BpSQVw0B47RtWoiYAephIOFYFRZP5Zsng85BKJFnBJQVDHiFCtbotsUiSNk7Sfc4v6p13giJedwSldW4j2QC4fk2ZTGr36utz0DbNztMRrwQosW3jxled7DcO6OKuHWf%2F1oEu09AVcBe9ZDmMRoqAuqa%2BLoF0ajny3sN5gG4%2F0yKZwMdbXB3yXYKhxNPeetp%2FZCwP78kaQJVJBPHdk7to1bs6cUZDtJg7x7CWoOGaaQ62CG9%2FKQPNfNX2%2BTDaFJSdLHueNSfuIr7mn5o86gAxMH2oZ3oMxDPjfAkcv99FUSWoy0l%2FGoBizouUJX5Em25cFwqpRivs2FqjZNz3DVXWC857DSIVLCvVJrUHe3%2FqF%2BonNBb9k2mqnWib5T8k0D2gDf60oQ3H1eiAeVKpgaMUBhfvQyVc0Ph50TBVlAqoNVL9CKoZg3ncQdIJUGX%2FVqugNt8h6zGb%2B%2FvUqXiEoqQPMB1KBJtQgDF7BLwz%2F26dmGjAsLgzbMLFO575rFq4fgxUZPRCMcbbUIVyxot6f%2BOlBZz0oMjmchLRBkAuSWc1UI5IwpabCxAY6pgFTi6awm7RBXbQingkh3p2vvNnANYqu9XMz3v3ab%2FhlJl%2BhQGdsMwgWpSDZrV%2BZAaGg6%2Bldy9gELVsCH%2FiwA0CuRaO21cIu2KVOL%2Fwkffauy3VpvBN9RCnksT9mQS59VPjJoA%2FOE20CdP7kbcCdsToPblOKBfosoXx8pcJVrb5oevWr8%2B93j6woVA1kjXuHFs4kIwKNJPs1q3%2FiyRQTl5ZALdxaC4Xi&X-Amz-Signature=7ca778aa9c3c4135e97aedf1a2c56872d29cec642cadd68df54ed17a1ffcc265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR42R4FK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDptfy6gw%2Fn%2BElA6L7GanW73K7j3RcemVWIeilqZcy3WAiBLBxS2ORJ6zfOHn7Y6bDt29K4mkdHM4bnkRkYU%2FcnFkCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMR5kNJjqsPxSGcvtMKtwD%2Ft5S91y9FVsKK%2FVjWTx7Xu%2BMzMlGenyl6dVxA3cZ3Sw6LoZg8f%2FUtYjGEVPXibFS4535XTY%2Bxae023BpSQVw0B47RtWoiYAephIOFYFRZP5Zsng85BKJFnBJQVDHiFCtbotsUiSNk7Sfc4v6p13giJedwSldW4j2QC4fk2ZTGr36utz0DbNztMRrwQosW3jxled7DcO6OKuHWf%2F1oEu09AVcBe9ZDmMRoqAuqa%2BLoF0ajny3sN5gG4%2F0yKZwMdbXB3yXYKhxNPeetp%2FZCwP78kaQJVJBPHdk7to1bs6cUZDtJg7x7CWoOGaaQ62CG9%2FKQPNfNX2%2BTDaFJSdLHueNSfuIr7mn5o86gAxMH2oZ3oMxDPjfAkcv99FUSWoy0l%2FGoBizouUJX5Em25cFwqpRivs2FqjZNz3DVXWC857DSIVLCvVJrUHe3%2FqF%2BonNBb9k2mqnWib5T8k0D2gDf60oQ3H1eiAeVKpgaMUBhfvQyVc0Ph50TBVlAqoNVL9CKoZg3ncQdIJUGX%2FVqugNt8h6zGb%2B%2FvUqXiEoqQPMB1KBJtQgDF7BLwz%2F26dmGjAsLgzbMLFO575rFq4fgxUZPRCMcbbUIVyxot6f%2BOlBZz0oMjmchLRBkAuSWc1UI5IwpabCxAY6pgFTi6awm7RBXbQingkh3p2vvNnANYqu9XMz3v3ab%2FhlJl%2BhQGdsMwgWpSDZrV%2BZAaGg6%2Bldy9gELVsCH%2FiwA0CuRaO21cIu2KVOL%2Fwkffauy3VpvBN9RCnksT9mQS59VPjJoA%2FOE20CdP7kbcCdsToPblOKBfosoXx8pcJVrb5oevWr8%2B93j6woVA1kjXuHFs4kIwKNJPs1q3%2FiyRQTl5ZALdxaC4Xi&X-Amz-Signature=b7dd053753a99a2a88dd48c3a5e800a2362c0c62580372b81d3d1aff8484264f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR42R4FK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDptfy6gw%2Fn%2BElA6L7GanW73K7j3RcemVWIeilqZcy3WAiBLBxS2ORJ6zfOHn7Y6bDt29K4mkdHM4bnkRkYU%2FcnFkCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMR5kNJjqsPxSGcvtMKtwD%2Ft5S91y9FVsKK%2FVjWTx7Xu%2BMzMlGenyl6dVxA3cZ3Sw6LoZg8f%2FUtYjGEVPXibFS4535XTY%2Bxae023BpSQVw0B47RtWoiYAephIOFYFRZP5Zsng85BKJFnBJQVDHiFCtbotsUiSNk7Sfc4v6p13giJedwSldW4j2QC4fk2ZTGr36utz0DbNztMRrwQosW3jxled7DcO6OKuHWf%2F1oEu09AVcBe9ZDmMRoqAuqa%2BLoF0ajny3sN5gG4%2F0yKZwMdbXB3yXYKhxNPeetp%2FZCwP78kaQJVJBPHdk7to1bs6cUZDtJg7x7CWoOGaaQ62CG9%2FKQPNfNX2%2BTDaFJSdLHueNSfuIr7mn5o86gAxMH2oZ3oMxDPjfAkcv99FUSWoy0l%2FGoBizouUJX5Em25cFwqpRivs2FqjZNz3DVXWC857DSIVLCvVJrUHe3%2FqF%2BonNBb9k2mqnWib5T8k0D2gDf60oQ3H1eiAeVKpgaMUBhfvQyVc0Ph50TBVlAqoNVL9CKoZg3ncQdIJUGX%2FVqugNt8h6zGb%2B%2FvUqXiEoqQPMB1KBJtQgDF7BLwz%2F26dmGjAsLgzbMLFO575rFq4fgxUZPRCMcbbUIVyxot6f%2BOlBZz0oMjmchLRBkAuSWc1UI5IwpabCxAY6pgFTi6awm7RBXbQingkh3p2vvNnANYqu9XMz3v3ab%2FhlJl%2BhQGdsMwgWpSDZrV%2BZAaGg6%2Bldy9gELVsCH%2FiwA0CuRaO21cIu2KVOL%2Fwkffauy3VpvBN9RCnksT9mQS59VPjJoA%2FOE20CdP7kbcCdsToPblOKBfosoXx8pcJVrb5oevWr8%2B93j6woVA1kjXuHFs4kIwKNJPs1q3%2FiyRQTl5ZALdxaC4Xi&X-Amz-Signature=75629820b3a20b372fc6fd3a7f364001cb50ea1d604e303eadf3cef384e514c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR42R4FK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDptfy6gw%2Fn%2BElA6L7GanW73K7j3RcemVWIeilqZcy3WAiBLBxS2ORJ6zfOHn7Y6bDt29K4mkdHM4bnkRkYU%2FcnFkCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMR5kNJjqsPxSGcvtMKtwD%2Ft5S91y9FVsKK%2FVjWTx7Xu%2BMzMlGenyl6dVxA3cZ3Sw6LoZg8f%2FUtYjGEVPXibFS4535XTY%2Bxae023BpSQVw0B47RtWoiYAephIOFYFRZP5Zsng85BKJFnBJQVDHiFCtbotsUiSNk7Sfc4v6p13giJedwSldW4j2QC4fk2ZTGr36utz0DbNztMRrwQosW3jxled7DcO6OKuHWf%2F1oEu09AVcBe9ZDmMRoqAuqa%2BLoF0ajny3sN5gG4%2F0yKZwMdbXB3yXYKhxNPeetp%2FZCwP78kaQJVJBPHdk7to1bs6cUZDtJg7x7CWoOGaaQ62CG9%2FKQPNfNX2%2BTDaFJSdLHueNSfuIr7mn5o86gAxMH2oZ3oMxDPjfAkcv99FUSWoy0l%2FGoBizouUJX5Em25cFwqpRivs2FqjZNz3DVXWC857DSIVLCvVJrUHe3%2FqF%2BonNBb9k2mqnWib5T8k0D2gDf60oQ3H1eiAeVKpgaMUBhfvQyVc0Ph50TBVlAqoNVL9CKoZg3ncQdIJUGX%2FVqugNt8h6zGb%2B%2FvUqXiEoqQPMB1KBJtQgDF7BLwz%2F26dmGjAsLgzbMLFO575rFq4fgxUZPRCMcbbUIVyxot6f%2BOlBZz0oMjmchLRBkAuSWc1UI5IwpabCxAY6pgFTi6awm7RBXbQingkh3p2vvNnANYqu9XMz3v3ab%2FhlJl%2BhQGdsMwgWpSDZrV%2BZAaGg6%2Bldy9gELVsCH%2FiwA0CuRaO21cIu2KVOL%2Fwkffauy3VpvBN9RCnksT9mQS59VPjJoA%2FOE20CdP7kbcCdsToPblOKBfosoXx8pcJVrb5oevWr8%2B93j6woVA1kjXuHFs4kIwKNJPs1q3%2FiyRQTl5ZALdxaC4Xi&X-Amz-Signature=5a76767245357555ff32401ca8b75f4d800996b234ba19c09ac8f6df10087cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR42R4FK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDptfy6gw%2Fn%2BElA6L7GanW73K7j3RcemVWIeilqZcy3WAiBLBxS2ORJ6zfOHn7Y6bDt29K4mkdHM4bnkRkYU%2FcnFkCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMR5kNJjqsPxSGcvtMKtwD%2Ft5S91y9FVsKK%2FVjWTx7Xu%2BMzMlGenyl6dVxA3cZ3Sw6LoZg8f%2FUtYjGEVPXibFS4535XTY%2Bxae023BpSQVw0B47RtWoiYAephIOFYFRZP5Zsng85BKJFnBJQVDHiFCtbotsUiSNk7Sfc4v6p13giJedwSldW4j2QC4fk2ZTGr36utz0DbNztMRrwQosW3jxled7DcO6OKuHWf%2F1oEu09AVcBe9ZDmMRoqAuqa%2BLoF0ajny3sN5gG4%2F0yKZwMdbXB3yXYKhxNPeetp%2FZCwP78kaQJVJBPHdk7to1bs6cUZDtJg7x7CWoOGaaQ62CG9%2FKQPNfNX2%2BTDaFJSdLHueNSfuIr7mn5o86gAxMH2oZ3oMxDPjfAkcv99FUSWoy0l%2FGoBizouUJX5Em25cFwqpRivs2FqjZNz3DVXWC857DSIVLCvVJrUHe3%2FqF%2BonNBb9k2mqnWib5T8k0D2gDf60oQ3H1eiAeVKpgaMUBhfvQyVc0Ph50TBVlAqoNVL9CKoZg3ncQdIJUGX%2FVqugNt8h6zGb%2B%2FvUqXiEoqQPMB1KBJtQgDF7BLwz%2F26dmGjAsLgzbMLFO575rFq4fgxUZPRCMcbbUIVyxot6f%2BOlBZz0oMjmchLRBkAuSWc1UI5IwpabCxAY6pgFTi6awm7RBXbQingkh3p2vvNnANYqu9XMz3v3ab%2FhlJl%2BhQGdsMwgWpSDZrV%2BZAaGg6%2Bldy9gELVsCH%2FiwA0CuRaO21cIu2KVOL%2Fwkffauy3VpvBN9RCnksT9mQS59VPjJoA%2FOE20CdP7kbcCdsToPblOKBfosoXx8pcJVrb5oevWr8%2B93j6woVA1kjXuHFs4kIwKNJPs1q3%2FiyRQTl5ZALdxaC4Xi&X-Amz-Signature=a4d7aea5a3082ed4522cf7d169052c26735ede0d916d926104d011eee37cbecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR42R4FK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDptfy6gw%2Fn%2BElA6L7GanW73K7j3RcemVWIeilqZcy3WAiBLBxS2ORJ6zfOHn7Y6bDt29K4mkdHM4bnkRkYU%2FcnFkCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMR5kNJjqsPxSGcvtMKtwD%2Ft5S91y9FVsKK%2FVjWTx7Xu%2BMzMlGenyl6dVxA3cZ3Sw6LoZg8f%2FUtYjGEVPXibFS4535XTY%2Bxae023BpSQVw0B47RtWoiYAephIOFYFRZP5Zsng85BKJFnBJQVDHiFCtbotsUiSNk7Sfc4v6p13giJedwSldW4j2QC4fk2ZTGr36utz0DbNztMRrwQosW3jxled7DcO6OKuHWf%2F1oEu09AVcBe9ZDmMRoqAuqa%2BLoF0ajny3sN5gG4%2F0yKZwMdbXB3yXYKhxNPeetp%2FZCwP78kaQJVJBPHdk7to1bs6cUZDtJg7x7CWoOGaaQ62CG9%2FKQPNfNX2%2BTDaFJSdLHueNSfuIr7mn5o86gAxMH2oZ3oMxDPjfAkcv99FUSWoy0l%2FGoBizouUJX5Em25cFwqpRivs2FqjZNz3DVXWC857DSIVLCvVJrUHe3%2FqF%2BonNBb9k2mqnWib5T8k0D2gDf60oQ3H1eiAeVKpgaMUBhfvQyVc0Ph50TBVlAqoNVL9CKoZg3ncQdIJUGX%2FVqugNt8h6zGb%2B%2FvUqXiEoqQPMB1KBJtQgDF7BLwz%2F26dmGjAsLgzbMLFO575rFq4fgxUZPRCMcbbUIVyxot6f%2BOlBZz0oMjmchLRBkAuSWc1UI5IwpabCxAY6pgFTi6awm7RBXbQingkh3p2vvNnANYqu9XMz3v3ab%2FhlJl%2BhQGdsMwgWpSDZrV%2BZAaGg6%2Bldy9gELVsCH%2FiwA0CuRaO21cIu2KVOL%2Fwkffauy3VpvBN9RCnksT9mQS59VPjJoA%2FOE20CdP7kbcCdsToPblOKBfosoXx8pcJVrb5oevWr8%2B93j6woVA1kjXuHFs4kIwKNJPs1q3%2FiyRQTl5ZALdxaC4Xi&X-Amz-Signature=418455191dc4caee60159e562fe217f4f7a99de765a996aecfbb95cf190b20a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR42R4FK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDptfy6gw%2Fn%2BElA6L7GanW73K7j3RcemVWIeilqZcy3WAiBLBxS2ORJ6zfOHn7Y6bDt29K4mkdHM4bnkRkYU%2FcnFkCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMR5kNJjqsPxSGcvtMKtwD%2Ft5S91y9FVsKK%2FVjWTx7Xu%2BMzMlGenyl6dVxA3cZ3Sw6LoZg8f%2FUtYjGEVPXibFS4535XTY%2Bxae023BpSQVw0B47RtWoiYAephIOFYFRZP5Zsng85BKJFnBJQVDHiFCtbotsUiSNk7Sfc4v6p13giJedwSldW4j2QC4fk2ZTGr36utz0DbNztMRrwQosW3jxled7DcO6OKuHWf%2F1oEu09AVcBe9ZDmMRoqAuqa%2BLoF0ajny3sN5gG4%2F0yKZwMdbXB3yXYKhxNPeetp%2FZCwP78kaQJVJBPHdk7to1bs6cUZDtJg7x7CWoOGaaQ62CG9%2FKQPNfNX2%2BTDaFJSdLHueNSfuIr7mn5o86gAxMH2oZ3oMxDPjfAkcv99FUSWoy0l%2FGoBizouUJX5Em25cFwqpRivs2FqjZNz3DVXWC857DSIVLCvVJrUHe3%2FqF%2BonNBb9k2mqnWib5T8k0D2gDf60oQ3H1eiAeVKpgaMUBhfvQyVc0Ph50TBVlAqoNVL9CKoZg3ncQdIJUGX%2FVqugNt8h6zGb%2B%2FvUqXiEoqQPMB1KBJtQgDF7BLwz%2F26dmGjAsLgzbMLFO575rFq4fgxUZPRCMcbbUIVyxot6f%2BOlBZz0oMjmchLRBkAuSWc1UI5IwpabCxAY6pgFTi6awm7RBXbQingkh3p2vvNnANYqu9XMz3v3ab%2FhlJl%2BhQGdsMwgWpSDZrV%2BZAaGg6%2Bldy9gELVsCH%2FiwA0CuRaO21cIu2KVOL%2Fwkffauy3VpvBN9RCnksT9mQS59VPjJoA%2FOE20CdP7kbcCdsToPblOKBfosoXx8pcJVrb5oevWr8%2B93j6woVA1kjXuHFs4kIwKNJPs1q3%2FiyRQTl5ZALdxaC4Xi&X-Amz-Signature=dabb4c3fa0f7c7ee6cea0c25ecabf5ef5c9996cf9cfea35bab853584ed29d53a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
