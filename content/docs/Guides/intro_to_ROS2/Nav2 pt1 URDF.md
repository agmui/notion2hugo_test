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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BK6WF2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzQ5tGbhF%2BxE4OSN2P%2BqCT5kz0lSY14GikTZLariSD4gIgdC%2BHpttR1AKwJkluU2dK4ZGYtFg%2BK4fS03XRrBBjb%2Bwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLOCIaxrYRdi2Lq%2FOircA1FIur0vfXcp%2BbFYYOSXlPGj0U2X3vvVwUQ0DkKRqYAkSNfBM83zgCmwGz6rxbX6dtdqxSbVGaeN0YA7BZAwCQT80hZPS4G1gtDDYGwc4%2FKrRucIccdrGMfgi%2Ft7IxN%2FJggMUmcxXZAzG4uT5qj1tnBuOlAcNRfG%2Bczkw48EH9lQ6UVv%2BQ%2F%2B7%2FVcUE3d3N%2BieFr245F61hiXKRmwKiUOTdMQh1KPAQHaQ1A30inhIZqmJytFDAVtxXUDvtVxscOnFeZWhL7O%2F6zCpPqH4cTeRr8FMyc20S%2F43FDo76cIknlJ%2BHUQbWewRrJQkyyuGbDaDLCKSwU8FuVhie9%2F%2FQX8Fu9bjVQl%2Fb%2FMKmj7D12blOtIROtGWoSqJ8C3yExNTTOPq3kh2wsD6gbCa9etQfxvHWB0w%2BHMkl2dspFllAR5rCcQYQbyEdtr8492pES9rPd%2BRCibsq2GGD%2FKPZ0AOmfdt8RDoDEJw6u2BY5baqc9Gn87Gr2XSTHk1c%2BOH3UAUgKbcRaBt8ku%2BAfzGoEDDjL%2B9FutLSbc30jE4KjbguMsCGHhYv2e4Xwhx34imPiXX1oGwjJPRMhbcqfB0P4K7v9camGEX4PgvnAcFLnA1zlo7vGo%2Fb2kdgUfTXVfk1yZMLGrvsQGOqUBTZnHWkZi0wP1xhNTfKGNGIbNL8Ai4zAHbG12sWx2AHsRnJesUue4OuEAgRtTfeEVYhfqrWwGahh94wyuhMZ7sSkZl%2BUMD6PXqu9U1rANX4dzHDbTEWPJRRFHDinmWPDAzDhCh3jybe8sBdvNUYC1wDNBF6UZSzc%2BEeS0a6q%2B%2FbAACVJanteESP3NfvzV8Px0AKu5Iqea6QaIqJJ0GNT%2F6ZWV7IbB&X-Amz-Signature=a77e9f63fbfed544f0db1b8a1df859ef66b58db7f5048271ca6b5c75011b0c42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BK6WF2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzQ5tGbhF%2BxE4OSN2P%2BqCT5kz0lSY14GikTZLariSD4gIgdC%2BHpttR1AKwJkluU2dK4ZGYtFg%2BK4fS03XRrBBjb%2Bwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLOCIaxrYRdi2Lq%2FOircA1FIur0vfXcp%2BbFYYOSXlPGj0U2X3vvVwUQ0DkKRqYAkSNfBM83zgCmwGz6rxbX6dtdqxSbVGaeN0YA7BZAwCQT80hZPS4G1gtDDYGwc4%2FKrRucIccdrGMfgi%2Ft7IxN%2FJggMUmcxXZAzG4uT5qj1tnBuOlAcNRfG%2Bczkw48EH9lQ6UVv%2BQ%2F%2B7%2FVcUE3d3N%2BieFr245F61hiXKRmwKiUOTdMQh1KPAQHaQ1A30inhIZqmJytFDAVtxXUDvtVxscOnFeZWhL7O%2F6zCpPqH4cTeRr8FMyc20S%2F43FDo76cIknlJ%2BHUQbWewRrJQkyyuGbDaDLCKSwU8FuVhie9%2F%2FQX8Fu9bjVQl%2Fb%2FMKmj7D12blOtIROtGWoSqJ8C3yExNTTOPq3kh2wsD6gbCa9etQfxvHWB0w%2BHMkl2dspFllAR5rCcQYQbyEdtr8492pES9rPd%2BRCibsq2GGD%2FKPZ0AOmfdt8RDoDEJw6u2BY5baqc9Gn87Gr2XSTHk1c%2BOH3UAUgKbcRaBt8ku%2BAfzGoEDDjL%2B9FutLSbc30jE4KjbguMsCGHhYv2e4Xwhx34imPiXX1oGwjJPRMhbcqfB0P4K7v9camGEX4PgvnAcFLnA1zlo7vGo%2Fb2kdgUfTXVfk1yZMLGrvsQGOqUBTZnHWkZi0wP1xhNTfKGNGIbNL8Ai4zAHbG12sWx2AHsRnJesUue4OuEAgRtTfeEVYhfqrWwGahh94wyuhMZ7sSkZl%2BUMD6PXqu9U1rANX4dzHDbTEWPJRRFHDinmWPDAzDhCh3jybe8sBdvNUYC1wDNBF6UZSzc%2BEeS0a6q%2B%2FbAACVJanteESP3NfvzV8Px0AKu5Iqea6QaIqJJ0GNT%2F6ZWV7IbB&X-Amz-Signature=6c05ff8bb4e459c74d80201346c493a636a510f33128488eb1f1039f6c8aa543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BK6WF2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzQ5tGbhF%2BxE4OSN2P%2BqCT5kz0lSY14GikTZLariSD4gIgdC%2BHpttR1AKwJkluU2dK4ZGYtFg%2BK4fS03XRrBBjb%2Bwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLOCIaxrYRdi2Lq%2FOircA1FIur0vfXcp%2BbFYYOSXlPGj0U2X3vvVwUQ0DkKRqYAkSNfBM83zgCmwGz6rxbX6dtdqxSbVGaeN0YA7BZAwCQT80hZPS4G1gtDDYGwc4%2FKrRucIccdrGMfgi%2Ft7IxN%2FJggMUmcxXZAzG4uT5qj1tnBuOlAcNRfG%2Bczkw48EH9lQ6UVv%2BQ%2F%2B7%2FVcUE3d3N%2BieFr245F61hiXKRmwKiUOTdMQh1KPAQHaQ1A30inhIZqmJytFDAVtxXUDvtVxscOnFeZWhL7O%2F6zCpPqH4cTeRr8FMyc20S%2F43FDo76cIknlJ%2BHUQbWewRrJQkyyuGbDaDLCKSwU8FuVhie9%2F%2FQX8Fu9bjVQl%2Fb%2FMKmj7D12blOtIROtGWoSqJ8C3yExNTTOPq3kh2wsD6gbCa9etQfxvHWB0w%2BHMkl2dspFllAR5rCcQYQbyEdtr8492pES9rPd%2BRCibsq2GGD%2FKPZ0AOmfdt8RDoDEJw6u2BY5baqc9Gn87Gr2XSTHk1c%2BOH3UAUgKbcRaBt8ku%2BAfzGoEDDjL%2B9FutLSbc30jE4KjbguMsCGHhYv2e4Xwhx34imPiXX1oGwjJPRMhbcqfB0P4K7v9camGEX4PgvnAcFLnA1zlo7vGo%2Fb2kdgUfTXVfk1yZMLGrvsQGOqUBTZnHWkZi0wP1xhNTfKGNGIbNL8Ai4zAHbG12sWx2AHsRnJesUue4OuEAgRtTfeEVYhfqrWwGahh94wyuhMZ7sSkZl%2BUMD6PXqu9U1rANX4dzHDbTEWPJRRFHDinmWPDAzDhCh3jybe8sBdvNUYC1wDNBF6UZSzc%2BEeS0a6q%2B%2FbAACVJanteESP3NfvzV8Px0AKu5Iqea6QaIqJJ0GNT%2F6ZWV7IbB&X-Amz-Signature=722d8dcdf95defeed73570b5b65cfe01b3ec81f07a350a0d07c4b4ca1a527f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BK6WF2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzQ5tGbhF%2BxE4OSN2P%2BqCT5kz0lSY14GikTZLariSD4gIgdC%2BHpttR1AKwJkluU2dK4ZGYtFg%2BK4fS03XRrBBjb%2Bwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLOCIaxrYRdi2Lq%2FOircA1FIur0vfXcp%2BbFYYOSXlPGj0U2X3vvVwUQ0DkKRqYAkSNfBM83zgCmwGz6rxbX6dtdqxSbVGaeN0YA7BZAwCQT80hZPS4G1gtDDYGwc4%2FKrRucIccdrGMfgi%2Ft7IxN%2FJggMUmcxXZAzG4uT5qj1tnBuOlAcNRfG%2Bczkw48EH9lQ6UVv%2BQ%2F%2B7%2FVcUE3d3N%2BieFr245F61hiXKRmwKiUOTdMQh1KPAQHaQ1A30inhIZqmJytFDAVtxXUDvtVxscOnFeZWhL7O%2F6zCpPqH4cTeRr8FMyc20S%2F43FDo76cIknlJ%2BHUQbWewRrJQkyyuGbDaDLCKSwU8FuVhie9%2F%2FQX8Fu9bjVQl%2Fb%2FMKmj7D12blOtIROtGWoSqJ8C3yExNTTOPq3kh2wsD6gbCa9etQfxvHWB0w%2BHMkl2dspFllAR5rCcQYQbyEdtr8492pES9rPd%2BRCibsq2GGD%2FKPZ0AOmfdt8RDoDEJw6u2BY5baqc9Gn87Gr2XSTHk1c%2BOH3UAUgKbcRaBt8ku%2BAfzGoEDDjL%2B9FutLSbc30jE4KjbguMsCGHhYv2e4Xwhx34imPiXX1oGwjJPRMhbcqfB0P4K7v9camGEX4PgvnAcFLnA1zlo7vGo%2Fb2kdgUfTXVfk1yZMLGrvsQGOqUBTZnHWkZi0wP1xhNTfKGNGIbNL8Ai4zAHbG12sWx2AHsRnJesUue4OuEAgRtTfeEVYhfqrWwGahh94wyuhMZ7sSkZl%2BUMD6PXqu9U1rANX4dzHDbTEWPJRRFHDinmWPDAzDhCh3jybe8sBdvNUYC1wDNBF6UZSzc%2BEeS0a6q%2B%2FbAACVJanteESP3NfvzV8Px0AKu5Iqea6QaIqJJ0GNT%2F6ZWV7IbB&X-Amz-Signature=98ee5ee425775453613d5df28eeabee7482111648f41f5b2bcf9abbf684febbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BK6WF2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzQ5tGbhF%2BxE4OSN2P%2BqCT5kz0lSY14GikTZLariSD4gIgdC%2BHpttR1AKwJkluU2dK4ZGYtFg%2BK4fS03XRrBBjb%2Bwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLOCIaxrYRdi2Lq%2FOircA1FIur0vfXcp%2BbFYYOSXlPGj0U2X3vvVwUQ0DkKRqYAkSNfBM83zgCmwGz6rxbX6dtdqxSbVGaeN0YA7BZAwCQT80hZPS4G1gtDDYGwc4%2FKrRucIccdrGMfgi%2Ft7IxN%2FJggMUmcxXZAzG4uT5qj1tnBuOlAcNRfG%2Bczkw48EH9lQ6UVv%2BQ%2F%2B7%2FVcUE3d3N%2BieFr245F61hiXKRmwKiUOTdMQh1KPAQHaQ1A30inhIZqmJytFDAVtxXUDvtVxscOnFeZWhL7O%2F6zCpPqH4cTeRr8FMyc20S%2F43FDo76cIknlJ%2BHUQbWewRrJQkyyuGbDaDLCKSwU8FuVhie9%2F%2FQX8Fu9bjVQl%2Fb%2FMKmj7D12blOtIROtGWoSqJ8C3yExNTTOPq3kh2wsD6gbCa9etQfxvHWB0w%2BHMkl2dspFllAR5rCcQYQbyEdtr8492pES9rPd%2BRCibsq2GGD%2FKPZ0AOmfdt8RDoDEJw6u2BY5baqc9Gn87Gr2XSTHk1c%2BOH3UAUgKbcRaBt8ku%2BAfzGoEDDjL%2B9FutLSbc30jE4KjbguMsCGHhYv2e4Xwhx34imPiXX1oGwjJPRMhbcqfB0P4K7v9camGEX4PgvnAcFLnA1zlo7vGo%2Fb2kdgUfTXVfk1yZMLGrvsQGOqUBTZnHWkZi0wP1xhNTfKGNGIbNL8Ai4zAHbG12sWx2AHsRnJesUue4OuEAgRtTfeEVYhfqrWwGahh94wyuhMZ7sSkZl%2BUMD6PXqu9U1rANX4dzHDbTEWPJRRFHDinmWPDAzDhCh3jybe8sBdvNUYC1wDNBF6UZSzc%2BEeS0a6q%2B%2FbAACVJanteESP3NfvzV8Px0AKu5Iqea6QaIqJJ0GNT%2F6ZWV7IbB&X-Amz-Signature=fc746531add29bf5059dcd580e02fbb0a00789f90fa22eb875e4c57af8484fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BK6WF2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzQ5tGbhF%2BxE4OSN2P%2BqCT5kz0lSY14GikTZLariSD4gIgdC%2BHpttR1AKwJkluU2dK4ZGYtFg%2BK4fS03XRrBBjb%2Bwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLOCIaxrYRdi2Lq%2FOircA1FIur0vfXcp%2BbFYYOSXlPGj0U2X3vvVwUQ0DkKRqYAkSNfBM83zgCmwGz6rxbX6dtdqxSbVGaeN0YA7BZAwCQT80hZPS4G1gtDDYGwc4%2FKrRucIccdrGMfgi%2Ft7IxN%2FJggMUmcxXZAzG4uT5qj1tnBuOlAcNRfG%2Bczkw48EH9lQ6UVv%2BQ%2F%2B7%2FVcUE3d3N%2BieFr245F61hiXKRmwKiUOTdMQh1KPAQHaQ1A30inhIZqmJytFDAVtxXUDvtVxscOnFeZWhL7O%2F6zCpPqH4cTeRr8FMyc20S%2F43FDo76cIknlJ%2BHUQbWewRrJQkyyuGbDaDLCKSwU8FuVhie9%2F%2FQX8Fu9bjVQl%2Fb%2FMKmj7D12blOtIROtGWoSqJ8C3yExNTTOPq3kh2wsD6gbCa9etQfxvHWB0w%2BHMkl2dspFllAR5rCcQYQbyEdtr8492pES9rPd%2BRCibsq2GGD%2FKPZ0AOmfdt8RDoDEJw6u2BY5baqc9Gn87Gr2XSTHk1c%2BOH3UAUgKbcRaBt8ku%2BAfzGoEDDjL%2B9FutLSbc30jE4KjbguMsCGHhYv2e4Xwhx34imPiXX1oGwjJPRMhbcqfB0P4K7v9camGEX4PgvnAcFLnA1zlo7vGo%2Fb2kdgUfTXVfk1yZMLGrvsQGOqUBTZnHWkZi0wP1xhNTfKGNGIbNL8Ai4zAHbG12sWx2AHsRnJesUue4OuEAgRtTfeEVYhfqrWwGahh94wyuhMZ7sSkZl%2BUMD6PXqu9U1rANX4dzHDbTEWPJRRFHDinmWPDAzDhCh3jybe8sBdvNUYC1wDNBF6UZSzc%2BEeS0a6q%2B%2FbAACVJanteESP3NfvzV8Px0AKu5Iqea6QaIqJJ0GNT%2F6ZWV7IbB&X-Amz-Signature=9be2782b96891e3166ef3b9878301a89ed90324ee89881d0bf3a80f194f758b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BK6WF2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzQ5tGbhF%2BxE4OSN2P%2BqCT5kz0lSY14GikTZLariSD4gIgdC%2BHpttR1AKwJkluU2dK4ZGYtFg%2BK4fS03XRrBBjb%2Bwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLOCIaxrYRdi2Lq%2FOircA1FIur0vfXcp%2BbFYYOSXlPGj0U2X3vvVwUQ0DkKRqYAkSNfBM83zgCmwGz6rxbX6dtdqxSbVGaeN0YA7BZAwCQT80hZPS4G1gtDDYGwc4%2FKrRucIccdrGMfgi%2Ft7IxN%2FJggMUmcxXZAzG4uT5qj1tnBuOlAcNRfG%2Bczkw48EH9lQ6UVv%2BQ%2F%2B7%2FVcUE3d3N%2BieFr245F61hiXKRmwKiUOTdMQh1KPAQHaQ1A30inhIZqmJytFDAVtxXUDvtVxscOnFeZWhL7O%2F6zCpPqH4cTeRr8FMyc20S%2F43FDo76cIknlJ%2BHUQbWewRrJQkyyuGbDaDLCKSwU8FuVhie9%2F%2FQX8Fu9bjVQl%2Fb%2FMKmj7D12blOtIROtGWoSqJ8C3yExNTTOPq3kh2wsD6gbCa9etQfxvHWB0w%2BHMkl2dspFllAR5rCcQYQbyEdtr8492pES9rPd%2BRCibsq2GGD%2FKPZ0AOmfdt8RDoDEJw6u2BY5baqc9Gn87Gr2XSTHk1c%2BOH3UAUgKbcRaBt8ku%2BAfzGoEDDjL%2B9FutLSbc30jE4KjbguMsCGHhYv2e4Xwhx34imPiXX1oGwjJPRMhbcqfB0P4K7v9camGEX4PgvnAcFLnA1zlo7vGo%2Fb2kdgUfTXVfk1yZMLGrvsQGOqUBTZnHWkZi0wP1xhNTfKGNGIbNL8Ai4zAHbG12sWx2AHsRnJesUue4OuEAgRtTfeEVYhfqrWwGahh94wyuhMZ7sSkZl%2BUMD6PXqu9U1rANX4dzHDbTEWPJRRFHDinmWPDAzDhCh3jybe8sBdvNUYC1wDNBF6UZSzc%2BEeS0a6q%2B%2FbAACVJanteESP3NfvzV8Px0AKu5Iqea6QaIqJJ0GNT%2F6ZWV7IbB&X-Amz-Signature=8ad6f1ab6738172090fdb037524b9d718735405a7cab414c09f8669fadd9ec57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BK6WF2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzQ5tGbhF%2BxE4OSN2P%2BqCT5kz0lSY14GikTZLariSD4gIgdC%2BHpttR1AKwJkluU2dK4ZGYtFg%2BK4fS03XRrBBjb%2Bwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLOCIaxrYRdi2Lq%2FOircA1FIur0vfXcp%2BbFYYOSXlPGj0U2X3vvVwUQ0DkKRqYAkSNfBM83zgCmwGz6rxbX6dtdqxSbVGaeN0YA7BZAwCQT80hZPS4G1gtDDYGwc4%2FKrRucIccdrGMfgi%2Ft7IxN%2FJggMUmcxXZAzG4uT5qj1tnBuOlAcNRfG%2Bczkw48EH9lQ6UVv%2BQ%2F%2B7%2FVcUE3d3N%2BieFr245F61hiXKRmwKiUOTdMQh1KPAQHaQ1A30inhIZqmJytFDAVtxXUDvtVxscOnFeZWhL7O%2F6zCpPqH4cTeRr8FMyc20S%2F43FDo76cIknlJ%2BHUQbWewRrJQkyyuGbDaDLCKSwU8FuVhie9%2F%2FQX8Fu9bjVQl%2Fb%2FMKmj7D12blOtIROtGWoSqJ8C3yExNTTOPq3kh2wsD6gbCa9etQfxvHWB0w%2BHMkl2dspFllAR5rCcQYQbyEdtr8492pES9rPd%2BRCibsq2GGD%2FKPZ0AOmfdt8RDoDEJw6u2BY5baqc9Gn87Gr2XSTHk1c%2BOH3UAUgKbcRaBt8ku%2BAfzGoEDDjL%2B9FutLSbc30jE4KjbguMsCGHhYv2e4Xwhx34imPiXX1oGwjJPRMhbcqfB0P4K7v9camGEX4PgvnAcFLnA1zlo7vGo%2Fb2kdgUfTXVfk1yZMLGrvsQGOqUBTZnHWkZi0wP1xhNTfKGNGIbNL8Ai4zAHbG12sWx2AHsRnJesUue4OuEAgRtTfeEVYhfqrWwGahh94wyuhMZ7sSkZl%2BUMD6PXqu9U1rANX4dzHDbTEWPJRRFHDinmWPDAzDhCh3jybe8sBdvNUYC1wDNBF6UZSzc%2BEeS0a6q%2B%2FbAACVJanteESP3NfvzV8Px0AKu5Iqea6QaIqJJ0GNT%2F6ZWV7IbB&X-Amz-Signature=afda6d0c14e04bcbb4aa30e44b7c51ba5e5f36e0550aa3fd1bd06582adec4f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BK6WF2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzQ5tGbhF%2BxE4OSN2P%2BqCT5kz0lSY14GikTZLariSD4gIgdC%2BHpttR1AKwJkluU2dK4ZGYtFg%2BK4fS03XRrBBjb%2Bwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLOCIaxrYRdi2Lq%2FOircA1FIur0vfXcp%2BbFYYOSXlPGj0U2X3vvVwUQ0DkKRqYAkSNfBM83zgCmwGz6rxbX6dtdqxSbVGaeN0YA7BZAwCQT80hZPS4G1gtDDYGwc4%2FKrRucIccdrGMfgi%2Ft7IxN%2FJggMUmcxXZAzG4uT5qj1tnBuOlAcNRfG%2Bczkw48EH9lQ6UVv%2BQ%2F%2B7%2FVcUE3d3N%2BieFr245F61hiXKRmwKiUOTdMQh1KPAQHaQ1A30inhIZqmJytFDAVtxXUDvtVxscOnFeZWhL7O%2F6zCpPqH4cTeRr8FMyc20S%2F43FDo76cIknlJ%2BHUQbWewRrJQkyyuGbDaDLCKSwU8FuVhie9%2F%2FQX8Fu9bjVQl%2Fb%2FMKmj7D12blOtIROtGWoSqJ8C3yExNTTOPq3kh2wsD6gbCa9etQfxvHWB0w%2BHMkl2dspFllAR5rCcQYQbyEdtr8492pES9rPd%2BRCibsq2GGD%2FKPZ0AOmfdt8RDoDEJw6u2BY5baqc9Gn87Gr2XSTHk1c%2BOH3UAUgKbcRaBt8ku%2BAfzGoEDDjL%2B9FutLSbc30jE4KjbguMsCGHhYv2e4Xwhx34imPiXX1oGwjJPRMhbcqfB0P4K7v9camGEX4PgvnAcFLnA1zlo7vGo%2Fb2kdgUfTXVfk1yZMLGrvsQGOqUBTZnHWkZi0wP1xhNTfKGNGIbNL8Ai4zAHbG12sWx2AHsRnJesUue4OuEAgRtTfeEVYhfqrWwGahh94wyuhMZ7sSkZl%2BUMD6PXqu9U1rANX4dzHDbTEWPJRRFHDinmWPDAzDhCh3jybe8sBdvNUYC1wDNBF6UZSzc%2BEeS0a6q%2B%2FbAACVJanteESP3NfvzV8Px0AKu5Iqea6QaIqJJ0GNT%2F6ZWV7IbB&X-Amz-Signature=e47fdf0198501b6a4565f2d55b9751f9779d0885cc2e0b5ae412ad0b17e0e390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BK6WF2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzQ5tGbhF%2BxE4OSN2P%2BqCT5kz0lSY14GikTZLariSD4gIgdC%2BHpttR1AKwJkluU2dK4ZGYtFg%2BK4fS03XRrBBjb%2Bwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLOCIaxrYRdi2Lq%2FOircA1FIur0vfXcp%2BbFYYOSXlPGj0U2X3vvVwUQ0DkKRqYAkSNfBM83zgCmwGz6rxbX6dtdqxSbVGaeN0YA7BZAwCQT80hZPS4G1gtDDYGwc4%2FKrRucIccdrGMfgi%2Ft7IxN%2FJggMUmcxXZAzG4uT5qj1tnBuOlAcNRfG%2Bczkw48EH9lQ6UVv%2BQ%2F%2B7%2FVcUE3d3N%2BieFr245F61hiXKRmwKiUOTdMQh1KPAQHaQ1A30inhIZqmJytFDAVtxXUDvtVxscOnFeZWhL7O%2F6zCpPqH4cTeRr8FMyc20S%2F43FDo76cIknlJ%2BHUQbWewRrJQkyyuGbDaDLCKSwU8FuVhie9%2F%2FQX8Fu9bjVQl%2Fb%2FMKmj7D12blOtIROtGWoSqJ8C3yExNTTOPq3kh2wsD6gbCa9etQfxvHWB0w%2BHMkl2dspFllAR5rCcQYQbyEdtr8492pES9rPd%2BRCibsq2GGD%2FKPZ0AOmfdt8RDoDEJw6u2BY5baqc9Gn87Gr2XSTHk1c%2BOH3UAUgKbcRaBt8ku%2BAfzGoEDDjL%2B9FutLSbc30jE4KjbguMsCGHhYv2e4Xwhx34imPiXX1oGwjJPRMhbcqfB0P4K7v9camGEX4PgvnAcFLnA1zlo7vGo%2Fb2kdgUfTXVfk1yZMLGrvsQGOqUBTZnHWkZi0wP1xhNTfKGNGIbNL8Ai4zAHbG12sWx2AHsRnJesUue4OuEAgRtTfeEVYhfqrWwGahh94wyuhMZ7sSkZl%2BUMD6PXqu9U1rANX4dzHDbTEWPJRRFHDinmWPDAzDhCh3jybe8sBdvNUYC1wDNBF6UZSzc%2BEeS0a6q%2B%2FbAACVJanteESP3NfvzV8Px0AKu5Iqea6QaIqJJ0GNT%2F6ZWV7IbB&X-Amz-Signature=977b585144db016ecb1f3b274e16fbc1b9520cd076da18ef58e7e82f92f077da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZJKTHSO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9UDL6P8bUuGriptTY0DW7GYgNKhAOMsgmzUbnFrbE%2FAiEAjrPkbz4r6q1wGEJ3HxAeX7ndG88aDDlnSbOpcS5DWagq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFKoynrH4fVXy2tLVircA%2B%2BthjsLoHPGlJGqKEsXBVeQ5ZN7hAMY7c11zvTXz5wanknoKSngWBT2eo6oaAgFPZ20MDtdqZpn4trnBLxIlXAW4%2B5j4yR20ZTpbCQQOzUK2NI3T23uNqI7oZxTWwGXV%2FuZJ2OSn8GpvsmDucumCnJtUoAfjAMDWWNRzK%2BnRQ2mbq9F5kDK7xsleMeE7u1P9v32eZj%2FRxHKzSMtCq9TSgiIGdLKSkdtxTZ7hHwIsuXvQurlPQgo1%2B9PzPQL47v8aygpZuXHP56BrAyCStZee1tuwspmfohGwJNQ0%2FfZ64UcZ%2BsV64us%2BJM9rhc7unzJN2XQVr5Wh1gv1q8j%2FrXcwFH%2BA4kjv8tYWrDfiNkESLeDpOw7rr0mRArWv0jLZlt1BpEA7zD606M%2Br%2FE06MuTvgC3eHfu5pcRbl%2B36yqA6VcYVo1GhuP3dzxuRV%2FYGRnpJDrJHsuE0DKfu13T%2B7QY2opcBTldoQ6YGG%2FZXuGlEf93e27Y2rBoJFpFSogoaHbEbQoxmJVgLjwkIoli89nkTiPgeQUJLOXOouckXPlE%2F6W%2FDn1me3AwFv3bSJT3dcsfZXYp3ZuPk7zzb7Pr8uL1PyXwC%2BTsYtNdCYObyapXXm2VoS%2Ft7hReR%2FZCyFOQMLKrvsQGOqUBl7ywskNtYp%2BZnIAhyVbDNkBqUlTEHaGZc%2BtE5ItkykZ9Z5RQnkWLBfooTuYW%2F4qEYZpqa8oqQtzn%2B5IHSBvxduv%2Bv3LAXtedhmYI6%2B6tnV7r76qNXS859Y6Y2PPGku5iloh4FXBD0dj7k7Hc5Y7v31xrDQB0mBQ1JP5TWcXHGxWXTNRQDiKeAxyopPRjC%2BnWNqx%2F9fyI8h7fHapa1%2FQyxJP0WH3L&X-Amz-Signature=24700977975c67047a5b0724688434ab706f44af1d070e2214727b0757e88572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5WBWURA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICY3Y3GbMqZ82VzFk%2BEtf0Mc2phfrhemh3lQWvHGvQMTAiAlozENJdZ15inwHAwfmk%2Bvskn24zuo1SfDAyUo5CmHCir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMFz0T792VkBfuQzCgKtwDPRKIyN3NjTlZ3XeuvVyd87Te8TPYCA%2B3Q6DHFsgVMdZAiyaH6RJXWPE3C%2FBFGJEKAR4huFRVetSuGEY5NAQ%2BSMRAfdLp9AK%2BRKqkBzxcI2OO9qTDp2OydVJrkWuRqbYwK86SLelQfS5GzCm2ILk0Bmk7GOijDNYK2JyIa%2BKOZoywmxwxF02C9Y71u9NTP%2F5qwCYgyRgyiUE6EQetqxadi3icTMcDUKO6jKZ%2F7wyjUeSr%2Bd3ahistlg6LCQbxvGX30YEuMIqe1i1z6G3ixTMZvfU3IIqzvblKRF%2FfUXfvud7D%2BB1y2qVCqdwwdYs1EC6QR4VyPry2CbDCRw3VKDSyQIYItMON3Ou56kyGbQYnKAThfsvt4%2BR1%2FJcfvmOcbY5W7OrFn7mv3pw4CsyawHZWHHHJ8TnamYCzns3Lfjd%2BiGh2d9BTF1F5Y73CykVBWzDrirdbgR6o6CpFXNSyS8w8%2F0CP2TvVl9p9O07Rn3ngvM%2B9DtmLcW8M7VUJOvEz6V5dpW9ejx7rOfs%2FaP6L%2FPBS0i4XsUiKFQyHZ7bpDXhDIdaVVPUTrLFlwV0bmjFHZQbcj5kcMJsEE2xuvyapSfm6LLd8Qp74Itq1Lo0x%2BUOAW1P7ojM3ltaaqfAvwx0wsqu%2BxAY6pgEQOuCdMl48j5ZY0vDLkd%2Bl0mq1ZQooOuQDUzYZvRNHmgpLYsU7r%2FCYhTaXIU%2Bwl1w8%2BK3R1pdOsUXK2TuZDM4BMeU3P3ZR%2FRMCaKSIixFcPpmxXdeVVlUl2v3VfwK3eK2skyBOEWgRhPWG0MQ3NtULRZZRFliWGa1ofi6FC0UXBGeoD7Hjr3dC7%2Ft4oowCH6bbKC0B9ZcTky6XyImO8Q%2Bb%2BCz8fa%2Fp&X-Amz-Signature=d7cb30ce77e46cf2e9ef24a208638596a2e652f190dfdaa309d0dc9b56c72655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3W64OKN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe1rQSxxp9DFPYSuSiUIyf7TOmOw7WS2rzPJCNZK70kQIhAJQ%2FpacyyDD%2BR5S2vVjipDD4LpbYKdVq%2FwnC1dVZwMfdKv8DCDIQABoMNjM3NDIzMTgzODA1IgzueDcDt9Q%2BKI%2FuYcUq3ANsxF20X%2Bl%2FF%2BkyFvMggYG4wwTpbj3wXpoUisPqQL5aVRTLJnZbMAXVQYLweAIZHiH9kddDD7Ksg2TzKsjQ8TuDIhMqDdta7ElH%2FvvsD7SAz9cIQl7NvdTY9Pu1%2BDeESp%2FJVynf7tBQKDzVeQi1%2Fa3SQbUjCm%2FlBjKXSsfElbIi1V1x3Cfvx2Va3AArim7ifd1PXmH0TayMtLd09fTRrlqhV209t8oQ7BvNHlkl6G9p6VJk6WBXZSO%2BqzL2UCMDnrmmwvOtMUG294bGIAgg0iv2qRoN1k%2BRlWVGpkR6yBpJqssqdShaYwNqOElLMuLEdekQhoRDz7MTS0v3hnzBFhdecSTjFTnpsxUMu5s9jH%2BZc8LDNUso3wR9mdcyPBDW0T9nhYysGNr8JfaxTVyFLVActLUJR8asgsDt0X21fOlXOwDBuzJcBCP8uw%2BuICr9N8orpmIJ6cROYhPis783Oh%2BHq1LAkuw7ydUkNCcrUCqCEPizmkqi1eIooI%2BC4UgJMCpnP7CVWzIZSfekE9K1ymJFzOqkvunwb46ntUZrNcenDbX39Iz5qeZgrIIvH7OJYOKX32X1D%2FU57oW%2FM5nlGou8fw1kv9SKKUz5AB%2FyHtBVf40XmnxyYs26k5AN1DDxqr7EBjqkAeViRXMyqbSgFISDETv6BFXjtFxeQgbLAeqJtTT2OVsT018SNxWYy3ao6tJFuPoXSNB%2FicHLq%2F1XGzocVgy475zZq1GoDw2TS85v7SmNDO16QBfRDZ3%2F1v%2F4e%2Fow7PdEDXVjaIKfS1p9%2B8x08ktocHIUaHPXIeXbXJYDXvz6pNziKm5qCasLD52%2F6CbQ4yHqel2AIGChI5cTh42YCH%2F9oY2crvlx&X-Amz-Signature=4e76804e092ce23e83e8375c54e4b5732806efab98b2db79f10e43a8e0f5606e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BK6WF2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzQ5tGbhF%2BxE4OSN2P%2BqCT5kz0lSY14GikTZLariSD4gIgdC%2BHpttR1AKwJkluU2dK4ZGYtFg%2BK4fS03XRrBBjb%2Bwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLOCIaxrYRdi2Lq%2FOircA1FIur0vfXcp%2BbFYYOSXlPGj0U2X3vvVwUQ0DkKRqYAkSNfBM83zgCmwGz6rxbX6dtdqxSbVGaeN0YA7BZAwCQT80hZPS4G1gtDDYGwc4%2FKrRucIccdrGMfgi%2Ft7IxN%2FJggMUmcxXZAzG4uT5qj1tnBuOlAcNRfG%2Bczkw48EH9lQ6UVv%2BQ%2F%2B7%2FVcUE3d3N%2BieFr245F61hiXKRmwKiUOTdMQh1KPAQHaQ1A30inhIZqmJytFDAVtxXUDvtVxscOnFeZWhL7O%2F6zCpPqH4cTeRr8FMyc20S%2F43FDo76cIknlJ%2BHUQbWewRrJQkyyuGbDaDLCKSwU8FuVhie9%2F%2FQX8Fu9bjVQl%2Fb%2FMKmj7D12blOtIROtGWoSqJ8C3yExNTTOPq3kh2wsD6gbCa9etQfxvHWB0w%2BHMkl2dspFllAR5rCcQYQbyEdtr8492pES9rPd%2BRCibsq2GGD%2FKPZ0AOmfdt8RDoDEJw6u2BY5baqc9Gn87Gr2XSTHk1c%2BOH3UAUgKbcRaBt8ku%2BAfzGoEDDjL%2B9FutLSbc30jE4KjbguMsCGHhYv2e4Xwhx34imPiXX1oGwjJPRMhbcqfB0P4K7v9camGEX4PgvnAcFLnA1zlo7vGo%2Fb2kdgUfTXVfk1yZMLGrvsQGOqUBTZnHWkZi0wP1xhNTfKGNGIbNL8Ai4zAHbG12sWx2AHsRnJesUue4OuEAgRtTfeEVYhfqrWwGahh94wyuhMZ7sSkZl%2BUMD6PXqu9U1rANX4dzHDbTEWPJRRFHDinmWPDAzDhCh3jybe8sBdvNUYC1wDNBF6UZSzc%2BEeS0a6q%2B%2FbAACVJanteESP3NfvzV8Px0AKu5Iqea6QaIqJJ0GNT%2F6ZWV7IbB&X-Amz-Signature=75da0024a105e239f5a58fa220db2746ffd7742c6c4c9572b3ed89c594c4c897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6WL2VL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZfTNG8Tc%2FGTtsW8DMNYB191iRH9He9ShnwSbUQnOwjAIgB6ZJ5xN34NvwaH8arDvS6hWD8DLgU1NdzNGC4cjR5TAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOkx3SHLaPhBIR4i3CrcA%2FJgdW7HhtPrcOJyHujapdYi%2BHQ1ZfuYUrWt7ZYY%2FJ%2FsAGJfoC%2B9ST%2F6vudQ0ZElQU94MRFEjzCDHl4U6tn%2Bn%2BWZvFMNysu0wxF7ersaaFzPJAkfIVSgt9kp%2Bg%2BgLFZPrforSKxVf941ZxqIURqDI3OjTr3UA1wbzls1phI8YbFF%2FrsYADG2r1JMf823MqmNx7FmV8nG7y8N5ANAaW5tH706M0aJFB3HWxGec9ySobBUA6ueqY6KcHB801nuKVyGRcDB39ukhGEBEreKodmDhpHHSK04Noi3psNhFIgJRzQ5fHwVGoDB7OlPP3CuR7IqTPvGl9EnPLhclY8%2FuY6T9x0IdkOLCVB7bBr6W%2Bw%2BAFp17tjUH0AOvlTjkfX1P6oZv%2BsWrSbZE3JZJjF3xsPI5TetZzAnD0shtSjq%2BcccHGD7SDrMLvYI7QUWrym63maAOpzwPkfGdCW%2B%2B0Scet8EgdAGkf4z6UTaKkbs44UwHYneblzLlAgD7iJvXtKumS6hwqKVSI3AtdpMe%2FFZExTEIScoLytv7WKU8J6sDpFCIalHux9HPEsoOp0UxRvfD9tQt6Zvde1ok3AsvstDRxGKyjaJUSxHu4HpD3RrFAbNXeEM4Cr%2FwrXXuu0goDW%2FMOOqvsQGOqUBhBCLivLbTOhXlaBZKdhXqdgqKpQGU7eDbzfVeCs4Trr77PX0nTfU2ogV%2FtReyz1Pj1MDwXXaJFGWjjw49pfNy4Am5kyvTJYp8Ye%2BIkuQz0apz7wQQyopFC5kUpYBcUNdCbJVeJtSJskEuijNmvZPFWydaosPmeeKl8jhI8EZ2taEBloM7Vyt0H4In3U4KZHI8Ug15LjYz%2FXaVNtFIwrselBXsec2&X-Amz-Signature=eb527d1a6c2b7407be110d269fe38b6874bfbb433f8780d460dcdf31e3cbbad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BK6WF2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzQ5tGbhF%2BxE4OSN2P%2BqCT5kz0lSY14GikTZLariSD4gIgdC%2BHpttR1AKwJkluU2dK4ZGYtFg%2BK4fS03XRrBBjb%2Bwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLOCIaxrYRdi2Lq%2FOircA1FIur0vfXcp%2BbFYYOSXlPGj0U2X3vvVwUQ0DkKRqYAkSNfBM83zgCmwGz6rxbX6dtdqxSbVGaeN0YA7BZAwCQT80hZPS4G1gtDDYGwc4%2FKrRucIccdrGMfgi%2Ft7IxN%2FJggMUmcxXZAzG4uT5qj1tnBuOlAcNRfG%2Bczkw48EH9lQ6UVv%2BQ%2F%2B7%2FVcUE3d3N%2BieFr245F61hiXKRmwKiUOTdMQh1KPAQHaQ1A30inhIZqmJytFDAVtxXUDvtVxscOnFeZWhL7O%2F6zCpPqH4cTeRr8FMyc20S%2F43FDo76cIknlJ%2BHUQbWewRrJQkyyuGbDaDLCKSwU8FuVhie9%2F%2FQX8Fu9bjVQl%2Fb%2FMKmj7D12blOtIROtGWoSqJ8C3yExNTTOPq3kh2wsD6gbCa9etQfxvHWB0w%2BHMkl2dspFllAR5rCcQYQbyEdtr8492pES9rPd%2BRCibsq2GGD%2FKPZ0AOmfdt8RDoDEJw6u2BY5baqc9Gn87Gr2XSTHk1c%2BOH3UAUgKbcRaBt8ku%2BAfzGoEDDjL%2B9FutLSbc30jE4KjbguMsCGHhYv2e4Xwhx34imPiXX1oGwjJPRMhbcqfB0P4K7v9camGEX4PgvnAcFLnA1zlo7vGo%2Fb2kdgUfTXVfk1yZMLGrvsQGOqUBTZnHWkZi0wP1xhNTfKGNGIbNL8Ai4zAHbG12sWx2AHsRnJesUue4OuEAgRtTfeEVYhfqrWwGahh94wyuhMZ7sSkZl%2BUMD6PXqu9U1rANX4dzHDbTEWPJRRFHDinmWPDAzDhCh3jybe8sBdvNUYC1wDNBF6UZSzc%2BEeS0a6q%2B%2FbAACVJanteESP3NfvzV8Px0AKu5Iqea6QaIqJJ0GNT%2F6ZWV7IbB&X-Amz-Signature=53b1fe397e8529f62d103d01d8bf02d815701353dd61abc287b10ac81a3612c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJ5LMDR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC34S6VZeaC2DNugk8nN%2BUwQh7FQweWv0AA8zC73JqQqAiEA%2Fk6%2FFyI7BSWzgzszDdHpzZYnN9VqkA9QTqOlETzmDMUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEs4I3i5tCGfnZqphyrcA0vYaRCoXMNI%2BInSRBOSUcN0nBaFFkfH9PvjDqBahoFUr8mu%2FtgB06fQt9EQYJUTi%2BX7Wz3%2BkgfBDE1lrKSLfc8uTjf26ixILbHH6Wp8JYlLdkhGaab5ysXo3uEn3djtfwx3fgezmmnIGV3HWaIKADF6Jl3mRlKhNMeKwZkKVoOQT09NYDgVY0r03fyxWAt1W8MD40UBQE82%2FDk7vtnOg3AREUw8I7mgC3zD%2Bv3%2F3TkJjT9kmAfiF7TePYU3wvAFgKaUF0glq5k7%2Bql52cZ%2BLGB4aWsBslYHNnh4Rqc%2FsqprZTfqBfLdv1J8JSDx2r3K%2BYwxX5OxI55%2F9zQ6Dskd8v5BIlZpa7iEUEt9vftko5xOZpeYuUT0lcNI5pOMXWm5XMu8EmyFrCRhpWTJTKR%2B%2Fxhjy5XbZNTEJ7wrFWKoU7wvQ6kMKgAL6jjCR5x1kRCwxmK6qA%2Bz8nssw3d144HOL81s%2BTaEZF2bQBJDHYcFtuS5Da0bsCiCYiiWvCfRFWdij50v7SkHZpFIyt1fY68ayULkTE8Pp3EBtA%2FjPmc2fyfd9mIQy%2FreFuSo%2FEAjhOeef4YnQ1KKYWR9jbsPXqp%2BsYpFJP4Ee43YiR0nEdVid4DJLOEUrPD%2BN3fvTr8nMLGrvsQGOqUBDuQAKdWnjWoizGQxhgjQPEJBPoO2ERrFVIa4o%2FtiYzKnIrCEiY0cOjLD3K3l4Zwm4WPW6kjHMG0qjrhlD2nlFNUVZKohzz67P6hpPgY25aP%2BEAS4nQTSqYx6kjFCtH2jLZaJxnBVyGru8RStrDmiXcY913cVNrqFU8gQZKgbwqi49g%2F2R%2B%2F%2B46MDudh0dBGdAhazS%2Fn1krK0lSib5kT6QHTPc7eG&X-Amz-Signature=b7eb940026c7acaec6b671b7f15e2587824775c956c465d5630afc539a74a3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BK6WF2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzQ5tGbhF%2BxE4OSN2P%2BqCT5kz0lSY14GikTZLariSD4gIgdC%2BHpttR1AKwJkluU2dK4ZGYtFg%2BK4fS03XRrBBjb%2Bwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLOCIaxrYRdi2Lq%2FOircA1FIur0vfXcp%2BbFYYOSXlPGj0U2X3vvVwUQ0DkKRqYAkSNfBM83zgCmwGz6rxbX6dtdqxSbVGaeN0YA7BZAwCQT80hZPS4G1gtDDYGwc4%2FKrRucIccdrGMfgi%2Ft7IxN%2FJggMUmcxXZAzG4uT5qj1tnBuOlAcNRfG%2Bczkw48EH9lQ6UVv%2BQ%2F%2B7%2FVcUE3d3N%2BieFr245F61hiXKRmwKiUOTdMQh1KPAQHaQ1A30inhIZqmJytFDAVtxXUDvtVxscOnFeZWhL7O%2F6zCpPqH4cTeRr8FMyc20S%2F43FDo76cIknlJ%2BHUQbWewRrJQkyyuGbDaDLCKSwU8FuVhie9%2F%2FQX8Fu9bjVQl%2Fb%2FMKmj7D12blOtIROtGWoSqJ8C3yExNTTOPq3kh2wsD6gbCa9etQfxvHWB0w%2BHMkl2dspFllAR5rCcQYQbyEdtr8492pES9rPd%2BRCibsq2GGD%2FKPZ0AOmfdt8RDoDEJw6u2BY5baqc9Gn87Gr2XSTHk1c%2BOH3UAUgKbcRaBt8ku%2BAfzGoEDDjL%2B9FutLSbc30jE4KjbguMsCGHhYv2e4Xwhx34imPiXX1oGwjJPRMhbcqfB0P4K7v9camGEX4PgvnAcFLnA1zlo7vGo%2Fb2kdgUfTXVfk1yZMLGrvsQGOqUBTZnHWkZi0wP1xhNTfKGNGIbNL8Ai4zAHbG12sWx2AHsRnJesUue4OuEAgRtTfeEVYhfqrWwGahh94wyuhMZ7sSkZl%2BUMD6PXqu9U1rANX4dzHDbTEWPJRRFHDinmWPDAzDhCh3jybe8sBdvNUYC1wDNBF6UZSzc%2BEeS0a6q%2B%2FbAACVJanteESP3NfvzV8Px0AKu5Iqea6QaIqJJ0GNT%2F6ZWV7IbB&X-Amz-Signature=35733f4a0fbaaecdb24e9827440942d3879c9facf97f822f39ccaf776a1f4729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466752AL73X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkS5BlVgigyoA9zCJEle7%2FROLAJFpZhn4iVDm6e%2BFemAiEAnbV%2FTc2EO7I%2BjeQ4aUCEc3WS1yp2VwRNh8aYqm5JmKUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMbTpfiDJ6iy%2FpvU2SrcA0MxO65Ogpj1WzYXQJUOVdi13155NptiQIxgbOvw%2BVnWfhVf1v5Il3IixU8CbhJzGdFlVaK6weedUKx7GjSiFuwNs1NbMTFtDDDhjNZUltkci3zJdQIgJisToQ2IXTzjS7QtQs9GNE8CGvPsQMsYuKnPr1okn1PuUq%2Bl3Qdjm%2FrMva426z9h%2FbhX81jCI42eKGzKPJdHUZF9b%2FhyT8kLzA%2BUOZcjeurH7zs24l3Fe7ZXmN5MuuGsQP%2BXxa8fBf%2BmMT8eKPtUPRE9KlDI1Z0E7lk7nPYFnlWqUuPXAebXr7ucTphUfC%2B0mfte4hd2LVzq%2FE6SYCSurnDWEAcKAGElHnBOYymN5pGb1kX4%2BzlaDbIGfzt6HT%2BDq4Vw3pxyZRqmebwFgUOELCippWtuM6ZBjHE3xOOVkCeCFIvuKo%2B%2FHxsFlbHC%2F2zW0SXktjBB1IeQsCojIk%2FYY4Ll%2FxZGGbNkVinC2K7XDpzCU5zaRt1gwm5I5OclUabtpXpUxr30YXig7iHw9zX1RAOGYHZGjXulCa1L6FOR1ocyk56M4O61QxUlmGKdlorF%2FNyKGt0UoXZbN3VATIDLQ5YV72NN3alnQVJ%2BwxfxRoxz5vlON5VZuzaYO55%2ByK50xbcs0wVwMJCrvsQGOqUBmvJ0NgEv%2FCMQHdQAo9R%2BqfZtd5urZcyVc7hvk3z0JaBiyxDVkxfnFsrnaPeSU8S2pmZZYsHubzLxktCUl%2B%2FfTwHNcWx47cMqPcVhCyaFEXSrzllaSXyuwCC5FDjMAWjw%2BdTBc88TRYfdHyiYEKT%2FdIJGk3Tn1YKUUUzFDyg5W8%2BUZGEQ3N0w6Y9DHcuIpFJRWKDelWz42hYYNsUT9Ke2ZYzh1FDd&X-Amz-Signature=5b8e0412914f4452c6be03872cf129293e614396ec7c4de55cf6847fe5cb5374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BK6WF2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzQ5tGbhF%2BxE4OSN2P%2BqCT5kz0lSY14GikTZLariSD4gIgdC%2BHpttR1AKwJkluU2dK4ZGYtFg%2BK4fS03XRrBBjb%2Bwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLOCIaxrYRdi2Lq%2FOircA1FIur0vfXcp%2BbFYYOSXlPGj0U2X3vvVwUQ0DkKRqYAkSNfBM83zgCmwGz6rxbX6dtdqxSbVGaeN0YA7BZAwCQT80hZPS4G1gtDDYGwc4%2FKrRucIccdrGMfgi%2Ft7IxN%2FJggMUmcxXZAzG4uT5qj1tnBuOlAcNRfG%2Bczkw48EH9lQ6UVv%2BQ%2F%2B7%2FVcUE3d3N%2BieFr245F61hiXKRmwKiUOTdMQh1KPAQHaQ1A30inhIZqmJytFDAVtxXUDvtVxscOnFeZWhL7O%2F6zCpPqH4cTeRr8FMyc20S%2F43FDo76cIknlJ%2BHUQbWewRrJQkyyuGbDaDLCKSwU8FuVhie9%2F%2FQX8Fu9bjVQl%2Fb%2FMKmj7D12blOtIROtGWoSqJ8C3yExNTTOPq3kh2wsD6gbCa9etQfxvHWB0w%2BHMkl2dspFllAR5rCcQYQbyEdtr8492pES9rPd%2BRCibsq2GGD%2FKPZ0AOmfdt8RDoDEJw6u2BY5baqc9Gn87Gr2XSTHk1c%2BOH3UAUgKbcRaBt8ku%2BAfzGoEDDjL%2B9FutLSbc30jE4KjbguMsCGHhYv2e4Xwhx34imPiXX1oGwjJPRMhbcqfB0P4K7v9camGEX4PgvnAcFLnA1zlo7vGo%2Fb2kdgUfTXVfk1yZMLGrvsQGOqUBTZnHWkZi0wP1xhNTfKGNGIbNL8Ai4zAHbG12sWx2AHsRnJesUue4OuEAgRtTfeEVYhfqrWwGahh94wyuhMZ7sSkZl%2BUMD6PXqu9U1rANX4dzHDbTEWPJRRFHDinmWPDAzDhCh3jybe8sBdvNUYC1wDNBF6UZSzc%2BEeS0a6q%2B%2FbAACVJanteESP3NfvzV8Px0AKu5Iqea6QaIqJJ0GNT%2F6ZWV7IbB&X-Amz-Signature=ff7587d784ffd62685122d0d6ec9dd7bf2a90930edd07256e708a869caf7c664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4BDVK5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZMz2VNZ%2FRyP9AK2rJOBNpr1HIIaSXnRJYniupZcDcywIgXqrJOyXsHhCbfMTj%2B1Kh9sdi2HD%2FqvdStFs35uM9Atcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLua9tYMllOqBjKuyircAyAzOh%2Bq5A4MzTiLRmFGojLLxaZqBzzxSitbegYeI8Qv6k1FOPgWbTyZrbj2s1r2nSMkzEiju0zdusLVnVFLwsNGZsUpzQiBDGzjTeNbpI92yuKlzDyOF10wL3eTQzgbDkSsZGKglcMWWMOf2BDI96700UJnZH1es%2B6aCIxidJCk5rTbvfortdawZHD%2FRH5Qbl7Q1%2F796CH3lFYVY0tHOansyJFz5x1mLssG2hnQhcQGYNMKR7XSwyX84R%2BrVHsPDVQpEvwnSGoK40rawn7qcYzQr3JVdnAPSUhnkV9fMnsCeGaagtnk%2FjC%2FAYRvt%2B2nCLUUwCS43jEsRZkpZFVNS6pLCLQSgDx0Vplkb3GyzdQ%2BJpOEinK71gE%2BSSOjTfmhd2t4AUuHwcJMT6etxhTQaxx3kruq4zE0m6OUa8ofKMUq2t4hZcLuRvXWjNhVritSX1NHUf70pS57Ey1r9n%2F6UBYwCmuP4kXc41A5Q%2BCiT3A%2BVpLv6hgiQ%2F2fCvUiwEGygo1%2B6IfL1cS%2Fkir8V7HPc1wjegy9vLN0e2F0k1kJk6jvPRHIXX9dKKzO6E6ode%2Bc%2FJKqdBpLR7L5iWHI4%2BdhPzvZYJhSz8ATFT4qxWl3kJepJE2GJ5DBzRpFBofVMJOrvsQGOqUBxI6ettwtAmJ8M2PPYRkxPdHQlfifQ80Q3eqyhylrtDTpFB3K98STIxAZtSxGYAkMwbOs5SBMzTJeja8Fwwj5u97Qqd8N%2FhWXPv%2BAZ4If6hRyoFFUL5btCJfNkRBjH1nkX%2F8lWNIC6AQ%2F3PwitHQX5Pf5EykYW%2BIRu863ax4S2J4f6QWNOSMYcrWSgqyWaiwCEeXPgejcDWlfxowYLqngnVgyLogp&X-Amz-Signature=a6d38f0500460cec03b4500fba3310614f695fcd8328ed56b2cf9ad90761a18c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOLEOMGM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvRWHbxo13ircPZVCi67RUIfHEVVH2lSGbiESLIBr3QAIhAJRl9q0EsdzzJ0MiaEMKrvbWbzLg9nJkAK9n2DuYeehNKv8DCDIQABoMNjM3NDIzMTgzODA1IgzKFx1fHNKXqXIFePwq3ANoY2cZVZLI8Za2hLHnhAFgm4%2FcsmudLvlggmd%2F%2FaTmynu19j99OxuVbqnPrHZ48zDqLKkniu%2FYzQtSSFvQdMtvVvONJyDjZppGQeJ5MMxwmddYKZeuCaLQIN9bkYTU1cGMMrSrtpQhHnQ3BCfvQ6JdqojRzoWzRHDFMp5bECzw0SKioJzR6X4fD6X49j7%2FOlfh7yeSvBKVNBR4XX%2BLm%2BPc6C7ijpk%2FNWZgiVp8lCPArHeUgMeAG5DLkOz%2B4l95kjs0loNe4EoUQBSmlS9J8bD%2FfjP346Wgywsq%2Bb0UJsXtl3bTm0jth0hW4vU389OCAq2jmPT3sjFDO1ji7sowF69POeCtvEt3oDpPAO6MRC11XNcYiaNmmOAezBjZ1UPL%2FTA9MTHy6hSVsNOdQn5ueilclzkS0gAbqRN91UMbjGVl7jz7Q7r18%2FGjY68klCVeMG%2FagnYWN4n%2BKedocqBpLTRV%2BACSL%2FA2i3gLx%2FzBDH0DjHQyxf2ta43HLgDEqYJKS%2FCg3igkM1XQdfOHCiO0ixAYb10NwZAdtnr3XkOq3ml0XJN4KfSdVgLoB13hf5ARkD9DPuBCfMX%2Bsq3%2BSK0i8BXV84W9HBhPxIDnRWH8ohhrqTW7PEvFQqz%2F5XzM7TD%2Fqr7EBjqkAWPwI1k8ftFdOa8dz0X7GzWDSMqZSc%2BhqTS8R8Qsk8ZmD0wCxLnojrJJv3RLlJqfndi%2F6nAkQ29lfUUxoSEHtSBciV9K3icLaZ7uqm0DeFDOIyG3hmeJxx0g1QyBbVJDG3me%2FUQwNHVdc2tHozmGYTmqY4%2BEU4mcOsAXRleKO7igcrVIkoZkUvgbCVhZi75QHT8WcVqsosXACZmYZbhIwKOxa5Lv&X-Amz-Signature=48733c0b386335b0f878ee3ad86a728d8f8f0d8bed4bbdde457d09cb25e88b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU7T6GTC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMrkb0eDldeaocq5wDL3KtxpsX7CW7JFw%2F21saF0J8kQIhAKsAzG2O1GDZLhr7E5rEuuTSXtiE5fqoVdgahDK20BorKv8DCDIQABoMNjM3NDIzMTgzODA1IgxnZQt6ZzxCB74ZAqAq3AOiqRn0pE4t6ELFcoOw4tnuloHxOqOlbxlHwI%2BjHxmuQp%2B%2BhofTVk1zNFRULlTOoPfAP4jlecJBYI2Y1RudXN%2F1MyERp0AmJS53WXHrHGIQIH49KJZHFacDpzEZIKc7oSiP2ZyCAULJ1XQyx1GO3fyRHE2B93AaxYrkIe%2Fedk0kTH6iyQH0Uu6o5RwvNgzoGEdVHN8%2F0sPNfPcfzp5n%2B5jNIy0qXeVMVd6zWO5HO%2BIwA3Palzm6evRcRFSEJAP%2FamVYFE7XGRTCLBbRRs%2BgYgf77pgEn%2FsmxHp%2B4XNXY6c3n0SAZvOqxXTgfYNlR%2Bxja%2FwhJlDs8XMQ6KjtXlGdflysgFKnhlK1hMYKFAxMkWvCF4fWvmkUQb6gLUVOZjEIFLElH9h6fI%2BHxSXG5Cs1XZBsBnHBTZf2d1FgX5fDgP30uGFdhUOfLDRTBUPiti1IGqyVFFkNMA3tRQoyWI3%2BnB7ekb0CwP1rZrbnI4GQsSyM188GC4GLyiUjRAuDR626P%2BA70f8Qx%2B5NI5mkPLjfLmm5o9jCgaK2WCWJ0QyAA8PlyaU1xVJiUSuzEoeEGLtu9%2FEDjwB1%2FfoAdtE%2BpUPhorgJ0zTX9mfItK8k6L6VmaPHvXwurzok4k%2BJDzRuGDDOqr7EBjqkAZJGOw74vSmw6AY0N6ggq5TyOtdVSoJsCJAk9HOvm62TfNbrDsZF08e95lKG5%2BX%2Bn62t8C3EuFtjnJX7G9%2FhiO6aXpA1z5dYtzSUAWWAOQFa%2FLgMAUXxiaFVY4h0KM5R2uSSPvoo82lTVNkt9R7ATTswJvbvzT2%2FleoYOZvZxFUmyFVTUi5SNSjrpN1L4fbARr1%2Fo53ZwDvwJEIB6G%2BOdG1mv9Dr&X-Amz-Signature=15b461c7a59a1ffe418e1dfe6fb89d7403034e0b913db3438b63ed9fcd0710f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2KIGVN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHM3CEmDDm9KCBE%2B0VFEaDfHu6laEowA0aYYWgA9lHPlAiEA6pdObl3zTUb3Mcl5ol984Fk%2F3cvO7Ysix7H2Hq%2F05p0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDE%2FcT3BRwLY9elEBGCrcAxBT8zwgE%2FjdBk4nCjCzmrwwy6j56BgHHfdEFUOszQotvcZ%2FU%2BV68cN0q6WGqGjGPsaI2xOF8Cb6P5ImQWGE1BcWoL596u3eunOXSOW0Gg6Vaj5gI0BeSL%2Fnl5UEnHcQc547QsP0Nf52uM%2BqaoQJXYP2Wnf5uRCF1VjnRREzMxC9blahWzqEbE%2FZmTLJouvnoHqe%2FYgOu1OXb1GpxrYH5aKrO3aWFIun0PUpI%2FGN8eP7JmIV4ZyDHPMCXK84CpqpUtfeDMnIxnwB%2Bkbjy%2FAJfTk74ppaDAsXPNjSsDa24XYTqOALzoYRcFxJWcm4sRqFjRXNVKCp%2BacvPQ4SXr9NtBCx9JZr1zttp%2F8JpYGfM3dCuDXP%2BOK6%2B4dL1eN9dQ%2F4Xfh%2B%2FRvO5wcvzdm2J6XhA%2FpjtrdVXAHj4SEqr3vRRBR07wvFmetsHRgHz9QA4%2FD%2FnvYd%2F9TPZM9PozqhhbatFtorw2LP2gogWo7vdCrtdeAh3DKnK9vPBgDEONSGlrBhaUXDQ93wORKq%2BYEEa7j3PFXbyC%2FeAyIKEBPRSgeNGzgOfRKyyyNCaVqJ%2BRmykyVDk5nH570JhC9g5KsnTUIbl2%2Bxg3i8nyin7GqN6jpq%2BOrRQ%2FYuaDP%2FJeFtYNGqMO6rvsQGOqUBD%2F2LXCF27dK5hQ9G8VB45X0zgqD6lQ5L3jATzWl6twnVrZCPGoem78SObPC7ArpnBTsC8OOXahUZmyCl2hYrFzQdqIlMi4FyZk9vOy9YE7Xhoh2e1%2BNQq7DME81Qch%2F6etV0b0frgYenTogkFPz2O6nhBjVwSQeVaEDVWiWaC7PFgT6WkjfAOIEjbJtz3WXwTrsO1S9S%2Fj0nVbS0nkJStI%2BpnFQp&X-Amz-Signature=87d752969028b06c37b200d9a126fb48938a7f975d01b051faa44c53b74f1b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGYDC4XX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAo%2FPuhcI21JAz6%2FlVPNRAL7I5P7IuSL8MkUwEpTsQKAiBK%2FOT23hRAdFahc1K%2BCbj44EjNkzSErIIpg%2BgS%2FmFhyyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMlgNimerB1v%2BRyeXSKtwDTSeqYSrev6XVgjk3wS%2FmmAreyi0EezKxwMitNmxkoEkOgs001rdcTpSqGM2CU743tlX%2F3AH4qDLcERScQCfLEJ33OwwUsFTr6HLXNbUKU2NpE%2B31OArZX5rRfU5MoPUZQuISTYbA0%2BBFjSqW%2B9fR4seiLJU0qFBz1aP0XRX73WalFnxHuxygygsgiJGQcVDu3Rwb%2FHbGQ8fEJdMrtwdbGG55r0oyonNaqd0GzU7IbQXlgo44fW5WK25LEK54eN%2F4nV7kZCnzsZUoAEQmtrk%2B8%2F%2BLBYzNAlE74KCHCHk6udT%2FeDpHBw4LoafTBjhutf%2FZNyvdi1C8qMms%2BjkErcHc3FZlfxJA5%2F4sTEpYsMZW6uWy91MllPdcwk7HGtWFe8ba57NjyqHke725tzR25G97OtRREWt4E6rOT2HV%2Bvprv5vjJEt0shjNMbieU8cer%2F3vFxz95UXtjKwG3%2FYQ3FvkADGOir%2BdPzd63ezv8xtFq15RNrS3Ro3E8morLn4XvCJjm27A%2FrO7hU30w4NA0bwN4nlKfmAEZ6Lkzc%2FESXVMMiNL7PQKiIxQMzVkY2NYkGiUv44feJruYYTlAfGofM7VYnYZ2G2XihM5DcFt40l9ao2xTc9ymWWK76YxCg0wvau%2BxAY6pgF6mw%2BCbqTtqk2AwFkInO3ccSY7q%2Bk2hQx9Td%2BBJhNfuXO1F4YiEviVQaD0QxvRv08ZmLzXRVvC6mTvffb0UHrGpUC3oaofjgypsh012khnmAAHlA1DNVZuymvh0CooxKrPszhVe7R8%2BQRzimCAhw2HkiGhSBfmtN7p%2FmTLTnigU4jYfcJjLsD2qtdypJT01b2PFxbuIdhT2hixR99%2BvF0db7dAfwv0&X-Amz-Signature=3f9c0f2be82db490d944aea874496a671ce09e9c4633af01e19ab25135f1203f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BK6WF2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzQ5tGbhF%2BxE4OSN2P%2BqCT5kz0lSY14GikTZLariSD4gIgdC%2BHpttR1AKwJkluU2dK4ZGYtFg%2BK4fS03XRrBBjb%2Bwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLOCIaxrYRdi2Lq%2FOircA1FIur0vfXcp%2BbFYYOSXlPGj0U2X3vvVwUQ0DkKRqYAkSNfBM83zgCmwGz6rxbX6dtdqxSbVGaeN0YA7BZAwCQT80hZPS4G1gtDDYGwc4%2FKrRucIccdrGMfgi%2Ft7IxN%2FJggMUmcxXZAzG4uT5qj1tnBuOlAcNRfG%2Bczkw48EH9lQ6UVv%2BQ%2F%2B7%2FVcUE3d3N%2BieFr245F61hiXKRmwKiUOTdMQh1KPAQHaQ1A30inhIZqmJytFDAVtxXUDvtVxscOnFeZWhL7O%2F6zCpPqH4cTeRr8FMyc20S%2F43FDo76cIknlJ%2BHUQbWewRrJQkyyuGbDaDLCKSwU8FuVhie9%2F%2FQX8Fu9bjVQl%2Fb%2FMKmj7D12blOtIROtGWoSqJ8C3yExNTTOPq3kh2wsD6gbCa9etQfxvHWB0w%2BHMkl2dspFllAR5rCcQYQbyEdtr8492pES9rPd%2BRCibsq2GGD%2FKPZ0AOmfdt8RDoDEJw6u2BY5baqc9Gn87Gr2XSTHk1c%2BOH3UAUgKbcRaBt8ku%2BAfzGoEDDjL%2B9FutLSbc30jE4KjbguMsCGHhYv2e4Xwhx34imPiXX1oGwjJPRMhbcqfB0P4K7v9camGEX4PgvnAcFLnA1zlo7vGo%2Fb2kdgUfTXVfk1yZMLGrvsQGOqUBTZnHWkZi0wP1xhNTfKGNGIbNL8Ai4zAHbG12sWx2AHsRnJesUue4OuEAgRtTfeEVYhfqrWwGahh94wyuhMZ7sSkZl%2BUMD6PXqu9U1rANX4dzHDbTEWPJRRFHDinmWPDAzDhCh3jybe8sBdvNUYC1wDNBF6UZSzc%2BEeS0a6q%2B%2FbAACVJanteESP3NfvzV8Px0AKu5Iqea6QaIqJJ0GNT%2F6ZWV7IbB&X-Amz-Signature=6fde4b7c2735de7b4e6048216f98433973bcb42b725aa8f2e2c38e4f4d91a523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BK6WF2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzQ5tGbhF%2BxE4OSN2P%2BqCT5kz0lSY14GikTZLariSD4gIgdC%2BHpttR1AKwJkluU2dK4ZGYtFg%2BK4fS03XRrBBjb%2Bwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLOCIaxrYRdi2Lq%2FOircA1FIur0vfXcp%2BbFYYOSXlPGj0U2X3vvVwUQ0DkKRqYAkSNfBM83zgCmwGz6rxbX6dtdqxSbVGaeN0YA7BZAwCQT80hZPS4G1gtDDYGwc4%2FKrRucIccdrGMfgi%2Ft7IxN%2FJggMUmcxXZAzG4uT5qj1tnBuOlAcNRfG%2Bczkw48EH9lQ6UVv%2BQ%2F%2B7%2FVcUE3d3N%2BieFr245F61hiXKRmwKiUOTdMQh1KPAQHaQ1A30inhIZqmJytFDAVtxXUDvtVxscOnFeZWhL7O%2F6zCpPqH4cTeRr8FMyc20S%2F43FDo76cIknlJ%2BHUQbWewRrJQkyyuGbDaDLCKSwU8FuVhie9%2F%2FQX8Fu9bjVQl%2Fb%2FMKmj7D12blOtIROtGWoSqJ8C3yExNTTOPq3kh2wsD6gbCa9etQfxvHWB0w%2BHMkl2dspFllAR5rCcQYQbyEdtr8492pES9rPd%2BRCibsq2GGD%2FKPZ0AOmfdt8RDoDEJw6u2BY5baqc9Gn87Gr2XSTHk1c%2BOH3UAUgKbcRaBt8ku%2BAfzGoEDDjL%2B9FutLSbc30jE4KjbguMsCGHhYv2e4Xwhx34imPiXX1oGwjJPRMhbcqfB0P4K7v9camGEX4PgvnAcFLnA1zlo7vGo%2Fb2kdgUfTXVfk1yZMLGrvsQGOqUBTZnHWkZi0wP1xhNTfKGNGIbNL8Ai4zAHbG12sWx2AHsRnJesUue4OuEAgRtTfeEVYhfqrWwGahh94wyuhMZ7sSkZl%2BUMD6PXqu9U1rANX4dzHDbTEWPJRRFHDinmWPDAzDhCh3jybe8sBdvNUYC1wDNBF6UZSzc%2BEeS0a6q%2B%2FbAACVJanteESP3NfvzV8Px0AKu5Iqea6QaIqJJ0GNT%2F6ZWV7IbB&X-Amz-Signature=b2a17602e1c0a219c90cd967a3011a71c3640ef4701d25cf93e0f8f2df1f5e97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUJ3BMH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEl%2FudRJfgaiygpEDed7BBPN4NDPjcSefkz6Atl%2FBm2AiEA2fC2t4WaZ1sN9Lw2mbZqIBxvDSqtC4BWdy19vJcA1rYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMh67NQ5aCRlOSRpISrcA1Betl2g%2FAGUd6GiJqlJbz9QX7IClfVh%2BKZTSbwK91mqOU5H%2F%2FpR1ykL3yX6CVe187DFzatJJJ6mflDbVw8n4LeblmL5RkYIzwOeSQlMV1dEIKn0NrDWmDMthl4GPkqb55kplVTxDKmJ6x4nOfDrpwOwLrcnSDqNckyah2Lubq2SWCiaBanT%2F4%2F7vZTn%2F5L5j%2BK0y%2FBgnr4W8C2DZIXsZX9%2FgaPCyqqfxVtpBki0ibj0sQR23gkDIBxNMa7xrRWz9VIDE3YcQRGo16nKp8dRvhJ4dt%2BSVvejLXq3OtSMqhP2GchJ1m0Bl7jKY%2FN0rNR2t3MK7AWDaKPY6B%2BjfoyQkianmw6gGOiF3wTFoCvHNDpxepcpjGI6NYUlTzS4v0tl1TY4mebJxPHTVwQ0fHOigxZH%2BBHz1FcJ1IsK5QevZmtWeJzVgCFhlTDSZvpsR3rhv6ZClCVbtsMtnrUKxV9hjqEHD35QBhi1FESkCbWUlw4YaIErIfpt06l4zYTdQIQ8ro8%2FaWObnAOGsO0fykgUlC5VrSwKrTFXP%2Bo%2FnFX6qI1keeo8wWUueqyOR1eHw4QYS9zZxJHkSppzY1o2GO0R62TF2MXmiDs79yzsI6AQwOWyE1GHAlaH3IB%2B00MfMLGrvsQGOqUB4amtWeqjvslS%2FWGFUordFG7TCSp1KVkzrhwXHixgc4tHx5e730mzrBFqLLvrjhNbynB%2FrAp3h339m4RGCrgGNFpe4c580wyKXiiCh0ZKARxC%2FqggBMD6AjVHyZxWBIM2l8Zf3w9%2Bl%2F7BOVBb5ROXuV%2FlGFc9%2Bcr1s%2FjV%2BTA8rY3Ik9E0E7avw11LhDrs7cYZtKOtLEn4d6di0FcAvRIcA6fpYlJz&X-Amz-Signature=9202f8247467766a4e3d15597a642bccce37ce7ce0e769dd4d4f930c99f71926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUJ3BMH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEl%2FudRJfgaiygpEDed7BBPN4NDPjcSefkz6Atl%2FBm2AiEA2fC2t4WaZ1sN9Lw2mbZqIBxvDSqtC4BWdy19vJcA1rYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMh67NQ5aCRlOSRpISrcA1Betl2g%2FAGUd6GiJqlJbz9QX7IClfVh%2BKZTSbwK91mqOU5H%2F%2FpR1ykL3yX6CVe187DFzatJJJ6mflDbVw8n4LeblmL5RkYIzwOeSQlMV1dEIKn0NrDWmDMthl4GPkqb55kplVTxDKmJ6x4nOfDrpwOwLrcnSDqNckyah2Lubq2SWCiaBanT%2F4%2F7vZTn%2F5L5j%2BK0y%2FBgnr4W8C2DZIXsZX9%2FgaPCyqqfxVtpBki0ibj0sQR23gkDIBxNMa7xrRWz9VIDE3YcQRGo16nKp8dRvhJ4dt%2BSVvejLXq3OtSMqhP2GchJ1m0Bl7jKY%2FN0rNR2t3MK7AWDaKPY6B%2BjfoyQkianmw6gGOiF3wTFoCvHNDpxepcpjGI6NYUlTzS4v0tl1TY4mebJxPHTVwQ0fHOigxZH%2BBHz1FcJ1IsK5QevZmtWeJzVgCFhlTDSZvpsR3rhv6ZClCVbtsMtnrUKxV9hjqEHD35QBhi1FESkCbWUlw4YaIErIfpt06l4zYTdQIQ8ro8%2FaWObnAOGsO0fykgUlC5VrSwKrTFXP%2Bo%2FnFX6qI1keeo8wWUueqyOR1eHw4QYS9zZxJHkSppzY1o2GO0R62TF2MXmiDs79yzsI6AQwOWyE1GHAlaH3IB%2B00MfMLGrvsQGOqUB4amtWeqjvslS%2FWGFUordFG7TCSp1KVkzrhwXHixgc4tHx5e730mzrBFqLLvrjhNbynB%2FrAp3h339m4RGCrgGNFpe4c580wyKXiiCh0ZKARxC%2FqggBMD6AjVHyZxWBIM2l8Zf3w9%2Bl%2F7BOVBb5ROXuV%2FlGFc9%2Bcr1s%2FjV%2BTA8rY3Ik9E0E7avw11LhDrs7cYZtKOtLEn4d6di0FcAvRIcA6fpYlJz&X-Amz-Signature=32c1506c503626ea48bf5a2bf5ff05686b88494db968cfd5d3240e3984c8b4dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUJ3BMH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEl%2FudRJfgaiygpEDed7BBPN4NDPjcSefkz6Atl%2FBm2AiEA2fC2t4WaZ1sN9Lw2mbZqIBxvDSqtC4BWdy19vJcA1rYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMh67NQ5aCRlOSRpISrcA1Betl2g%2FAGUd6GiJqlJbz9QX7IClfVh%2BKZTSbwK91mqOU5H%2F%2FpR1ykL3yX6CVe187DFzatJJJ6mflDbVw8n4LeblmL5RkYIzwOeSQlMV1dEIKn0NrDWmDMthl4GPkqb55kplVTxDKmJ6x4nOfDrpwOwLrcnSDqNckyah2Lubq2SWCiaBanT%2F4%2F7vZTn%2F5L5j%2BK0y%2FBgnr4W8C2DZIXsZX9%2FgaPCyqqfxVtpBki0ibj0sQR23gkDIBxNMa7xrRWz9VIDE3YcQRGo16nKp8dRvhJ4dt%2BSVvejLXq3OtSMqhP2GchJ1m0Bl7jKY%2FN0rNR2t3MK7AWDaKPY6B%2BjfoyQkianmw6gGOiF3wTFoCvHNDpxepcpjGI6NYUlTzS4v0tl1TY4mebJxPHTVwQ0fHOigxZH%2BBHz1FcJ1IsK5QevZmtWeJzVgCFhlTDSZvpsR3rhv6ZClCVbtsMtnrUKxV9hjqEHD35QBhi1FESkCbWUlw4YaIErIfpt06l4zYTdQIQ8ro8%2FaWObnAOGsO0fykgUlC5VrSwKrTFXP%2Bo%2FnFX6qI1keeo8wWUueqyOR1eHw4QYS9zZxJHkSppzY1o2GO0R62TF2MXmiDs79yzsI6AQwOWyE1GHAlaH3IB%2B00MfMLGrvsQGOqUB4amtWeqjvslS%2FWGFUordFG7TCSp1KVkzrhwXHixgc4tHx5e730mzrBFqLLvrjhNbynB%2FrAp3h339m4RGCrgGNFpe4c580wyKXiiCh0ZKARxC%2FqggBMD6AjVHyZxWBIM2l8Zf3w9%2Bl%2F7BOVBb5ROXuV%2FlGFc9%2Bcr1s%2FjV%2BTA8rY3Ik9E0E7avw11LhDrs7cYZtKOtLEn4d6di0FcAvRIcA6fpYlJz&X-Amz-Signature=0ff53ba799415bcac26473c610bb1b046fd6df8c366dbe05ec899049b687f157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUJ3BMH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEl%2FudRJfgaiygpEDed7BBPN4NDPjcSefkz6Atl%2FBm2AiEA2fC2t4WaZ1sN9Lw2mbZqIBxvDSqtC4BWdy19vJcA1rYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMh67NQ5aCRlOSRpISrcA1Betl2g%2FAGUd6GiJqlJbz9QX7IClfVh%2BKZTSbwK91mqOU5H%2F%2FpR1ykL3yX6CVe187DFzatJJJ6mflDbVw8n4LeblmL5RkYIzwOeSQlMV1dEIKn0NrDWmDMthl4GPkqb55kplVTxDKmJ6x4nOfDrpwOwLrcnSDqNckyah2Lubq2SWCiaBanT%2F4%2F7vZTn%2F5L5j%2BK0y%2FBgnr4W8C2DZIXsZX9%2FgaPCyqqfxVtpBki0ibj0sQR23gkDIBxNMa7xrRWz9VIDE3YcQRGo16nKp8dRvhJ4dt%2BSVvejLXq3OtSMqhP2GchJ1m0Bl7jKY%2FN0rNR2t3MK7AWDaKPY6B%2BjfoyQkianmw6gGOiF3wTFoCvHNDpxepcpjGI6NYUlTzS4v0tl1TY4mebJxPHTVwQ0fHOigxZH%2BBHz1FcJ1IsK5QevZmtWeJzVgCFhlTDSZvpsR3rhv6ZClCVbtsMtnrUKxV9hjqEHD35QBhi1FESkCbWUlw4YaIErIfpt06l4zYTdQIQ8ro8%2FaWObnAOGsO0fykgUlC5VrSwKrTFXP%2Bo%2FnFX6qI1keeo8wWUueqyOR1eHw4QYS9zZxJHkSppzY1o2GO0R62TF2MXmiDs79yzsI6AQwOWyE1GHAlaH3IB%2B00MfMLGrvsQGOqUB4amtWeqjvslS%2FWGFUordFG7TCSp1KVkzrhwXHixgc4tHx5e730mzrBFqLLvrjhNbynB%2FrAp3h339m4RGCrgGNFpe4c580wyKXiiCh0ZKARxC%2FqggBMD6AjVHyZxWBIM2l8Zf3w9%2Bl%2F7BOVBb5ROXuV%2FlGFc9%2Bcr1s%2FjV%2BTA8rY3Ik9E0E7avw11LhDrs7cYZtKOtLEn4d6di0FcAvRIcA6fpYlJz&X-Amz-Signature=c26e16697659e05954fd0acc0a846b78814c2af2d5d295a604ffe39b514713d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUJ3BMH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEl%2FudRJfgaiygpEDed7BBPN4NDPjcSefkz6Atl%2FBm2AiEA2fC2t4WaZ1sN9Lw2mbZqIBxvDSqtC4BWdy19vJcA1rYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMh67NQ5aCRlOSRpISrcA1Betl2g%2FAGUd6GiJqlJbz9QX7IClfVh%2BKZTSbwK91mqOU5H%2F%2FpR1ykL3yX6CVe187DFzatJJJ6mflDbVw8n4LeblmL5RkYIzwOeSQlMV1dEIKn0NrDWmDMthl4GPkqb55kplVTxDKmJ6x4nOfDrpwOwLrcnSDqNckyah2Lubq2SWCiaBanT%2F4%2F7vZTn%2F5L5j%2BK0y%2FBgnr4W8C2DZIXsZX9%2FgaPCyqqfxVtpBki0ibj0sQR23gkDIBxNMa7xrRWz9VIDE3YcQRGo16nKp8dRvhJ4dt%2BSVvejLXq3OtSMqhP2GchJ1m0Bl7jKY%2FN0rNR2t3MK7AWDaKPY6B%2BjfoyQkianmw6gGOiF3wTFoCvHNDpxepcpjGI6NYUlTzS4v0tl1TY4mebJxPHTVwQ0fHOigxZH%2BBHz1FcJ1IsK5QevZmtWeJzVgCFhlTDSZvpsR3rhv6ZClCVbtsMtnrUKxV9hjqEHD35QBhi1FESkCbWUlw4YaIErIfpt06l4zYTdQIQ8ro8%2FaWObnAOGsO0fykgUlC5VrSwKrTFXP%2Bo%2FnFX6qI1keeo8wWUueqyOR1eHw4QYS9zZxJHkSppzY1o2GO0R62TF2MXmiDs79yzsI6AQwOWyE1GHAlaH3IB%2B00MfMLGrvsQGOqUB4amtWeqjvslS%2FWGFUordFG7TCSp1KVkzrhwXHixgc4tHx5e730mzrBFqLLvrjhNbynB%2FrAp3h339m4RGCrgGNFpe4c580wyKXiiCh0ZKARxC%2FqggBMD6AjVHyZxWBIM2l8Zf3w9%2Bl%2F7BOVBb5ROXuV%2FlGFc9%2Bcr1s%2FjV%2BTA8rY3Ik9E0E7avw11LhDrs7cYZtKOtLEn4d6di0FcAvRIcA6fpYlJz&X-Amz-Signature=135627d36ba00743f8292147d4047ab6e9644a066c45e0788e46ed838e0ea765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUJ3BMH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEl%2FudRJfgaiygpEDed7BBPN4NDPjcSefkz6Atl%2FBm2AiEA2fC2t4WaZ1sN9Lw2mbZqIBxvDSqtC4BWdy19vJcA1rYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMh67NQ5aCRlOSRpISrcA1Betl2g%2FAGUd6GiJqlJbz9QX7IClfVh%2BKZTSbwK91mqOU5H%2F%2FpR1ykL3yX6CVe187DFzatJJJ6mflDbVw8n4LeblmL5RkYIzwOeSQlMV1dEIKn0NrDWmDMthl4GPkqb55kplVTxDKmJ6x4nOfDrpwOwLrcnSDqNckyah2Lubq2SWCiaBanT%2F4%2F7vZTn%2F5L5j%2BK0y%2FBgnr4W8C2DZIXsZX9%2FgaPCyqqfxVtpBki0ibj0sQR23gkDIBxNMa7xrRWz9VIDE3YcQRGo16nKp8dRvhJ4dt%2BSVvejLXq3OtSMqhP2GchJ1m0Bl7jKY%2FN0rNR2t3MK7AWDaKPY6B%2BjfoyQkianmw6gGOiF3wTFoCvHNDpxepcpjGI6NYUlTzS4v0tl1TY4mebJxPHTVwQ0fHOigxZH%2BBHz1FcJ1IsK5QevZmtWeJzVgCFhlTDSZvpsR3rhv6ZClCVbtsMtnrUKxV9hjqEHD35QBhi1FESkCbWUlw4YaIErIfpt06l4zYTdQIQ8ro8%2FaWObnAOGsO0fykgUlC5VrSwKrTFXP%2Bo%2FnFX6qI1keeo8wWUueqyOR1eHw4QYS9zZxJHkSppzY1o2GO0R62TF2MXmiDs79yzsI6AQwOWyE1GHAlaH3IB%2B00MfMLGrvsQGOqUB4amtWeqjvslS%2FWGFUordFG7TCSp1KVkzrhwXHixgc4tHx5e730mzrBFqLLvrjhNbynB%2FrAp3h339m4RGCrgGNFpe4c580wyKXiiCh0ZKARxC%2FqggBMD6AjVHyZxWBIM2l8Zf3w9%2Bl%2F7BOVBb5ROXuV%2FlGFc9%2Bcr1s%2FjV%2BTA8rY3Ik9E0E7avw11LhDrs7cYZtKOtLEn4d6di0FcAvRIcA6fpYlJz&X-Amz-Signature=b5f7c9dee1c5b5340df39630fa2b555392e41b60da47bbaa5f9a7df65fbeee47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUJ3BMH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEl%2FudRJfgaiygpEDed7BBPN4NDPjcSefkz6Atl%2FBm2AiEA2fC2t4WaZ1sN9Lw2mbZqIBxvDSqtC4BWdy19vJcA1rYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMh67NQ5aCRlOSRpISrcA1Betl2g%2FAGUd6GiJqlJbz9QX7IClfVh%2BKZTSbwK91mqOU5H%2F%2FpR1ykL3yX6CVe187DFzatJJJ6mflDbVw8n4LeblmL5RkYIzwOeSQlMV1dEIKn0NrDWmDMthl4GPkqb55kplVTxDKmJ6x4nOfDrpwOwLrcnSDqNckyah2Lubq2SWCiaBanT%2F4%2F7vZTn%2F5L5j%2BK0y%2FBgnr4W8C2DZIXsZX9%2FgaPCyqqfxVtpBki0ibj0sQR23gkDIBxNMa7xrRWz9VIDE3YcQRGo16nKp8dRvhJ4dt%2BSVvejLXq3OtSMqhP2GchJ1m0Bl7jKY%2FN0rNR2t3MK7AWDaKPY6B%2BjfoyQkianmw6gGOiF3wTFoCvHNDpxepcpjGI6NYUlTzS4v0tl1TY4mebJxPHTVwQ0fHOigxZH%2BBHz1FcJ1IsK5QevZmtWeJzVgCFhlTDSZvpsR3rhv6ZClCVbtsMtnrUKxV9hjqEHD35QBhi1FESkCbWUlw4YaIErIfpt06l4zYTdQIQ8ro8%2FaWObnAOGsO0fykgUlC5VrSwKrTFXP%2Bo%2FnFX6qI1keeo8wWUueqyOR1eHw4QYS9zZxJHkSppzY1o2GO0R62TF2MXmiDs79yzsI6AQwOWyE1GHAlaH3IB%2B00MfMLGrvsQGOqUB4amtWeqjvslS%2FWGFUordFG7TCSp1KVkzrhwXHixgc4tHx5e730mzrBFqLLvrjhNbynB%2FrAp3h339m4RGCrgGNFpe4c580wyKXiiCh0ZKARxC%2FqggBMD6AjVHyZxWBIM2l8Zf3w9%2Bl%2F7BOVBb5ROXuV%2FlGFc9%2Bcr1s%2FjV%2BTA8rY3Ik9E0E7avw11LhDrs7cYZtKOtLEn4d6di0FcAvRIcA6fpYlJz&X-Amz-Signature=0ff53ba799415bcac26473c610bb1b046fd6df8c366dbe05ec899049b687f157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUJ3BMH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEl%2FudRJfgaiygpEDed7BBPN4NDPjcSefkz6Atl%2FBm2AiEA2fC2t4WaZ1sN9Lw2mbZqIBxvDSqtC4BWdy19vJcA1rYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMh67NQ5aCRlOSRpISrcA1Betl2g%2FAGUd6GiJqlJbz9QX7IClfVh%2BKZTSbwK91mqOU5H%2F%2FpR1ykL3yX6CVe187DFzatJJJ6mflDbVw8n4LeblmL5RkYIzwOeSQlMV1dEIKn0NrDWmDMthl4GPkqb55kplVTxDKmJ6x4nOfDrpwOwLrcnSDqNckyah2Lubq2SWCiaBanT%2F4%2F7vZTn%2F5L5j%2BK0y%2FBgnr4W8C2DZIXsZX9%2FgaPCyqqfxVtpBki0ibj0sQR23gkDIBxNMa7xrRWz9VIDE3YcQRGo16nKp8dRvhJ4dt%2BSVvejLXq3OtSMqhP2GchJ1m0Bl7jKY%2FN0rNR2t3MK7AWDaKPY6B%2BjfoyQkianmw6gGOiF3wTFoCvHNDpxepcpjGI6NYUlTzS4v0tl1TY4mebJxPHTVwQ0fHOigxZH%2BBHz1FcJ1IsK5QevZmtWeJzVgCFhlTDSZvpsR3rhv6ZClCVbtsMtnrUKxV9hjqEHD35QBhi1FESkCbWUlw4YaIErIfpt06l4zYTdQIQ8ro8%2FaWObnAOGsO0fykgUlC5VrSwKrTFXP%2Bo%2FnFX6qI1keeo8wWUueqyOR1eHw4QYS9zZxJHkSppzY1o2GO0R62TF2MXmiDs79yzsI6AQwOWyE1GHAlaH3IB%2B00MfMLGrvsQGOqUB4amtWeqjvslS%2FWGFUordFG7TCSp1KVkzrhwXHixgc4tHx5e730mzrBFqLLvrjhNbynB%2FrAp3h339m4RGCrgGNFpe4c580wyKXiiCh0ZKARxC%2FqggBMD6AjVHyZxWBIM2l8Zf3w9%2Bl%2F7BOVBb5ROXuV%2FlGFc9%2Bcr1s%2FjV%2BTA8rY3Ik9E0E7avw11LhDrs7cYZtKOtLEn4d6di0FcAvRIcA6fpYlJz&X-Amz-Signature=8578f9a0e6ddf43f72b4374c07bf258731ff54af9602e5ffe3ef07e6e85ea4c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUJ3BMH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEl%2FudRJfgaiygpEDed7BBPN4NDPjcSefkz6Atl%2FBm2AiEA2fC2t4WaZ1sN9Lw2mbZqIBxvDSqtC4BWdy19vJcA1rYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMh67NQ5aCRlOSRpISrcA1Betl2g%2FAGUd6GiJqlJbz9QX7IClfVh%2BKZTSbwK91mqOU5H%2F%2FpR1ykL3yX6CVe187DFzatJJJ6mflDbVw8n4LeblmL5RkYIzwOeSQlMV1dEIKn0NrDWmDMthl4GPkqb55kplVTxDKmJ6x4nOfDrpwOwLrcnSDqNckyah2Lubq2SWCiaBanT%2F4%2F7vZTn%2F5L5j%2BK0y%2FBgnr4W8C2DZIXsZX9%2FgaPCyqqfxVtpBki0ibj0sQR23gkDIBxNMa7xrRWz9VIDE3YcQRGo16nKp8dRvhJ4dt%2BSVvejLXq3OtSMqhP2GchJ1m0Bl7jKY%2FN0rNR2t3MK7AWDaKPY6B%2BjfoyQkianmw6gGOiF3wTFoCvHNDpxepcpjGI6NYUlTzS4v0tl1TY4mebJxPHTVwQ0fHOigxZH%2BBHz1FcJ1IsK5QevZmtWeJzVgCFhlTDSZvpsR3rhv6ZClCVbtsMtnrUKxV9hjqEHD35QBhi1FESkCbWUlw4YaIErIfpt06l4zYTdQIQ8ro8%2FaWObnAOGsO0fykgUlC5VrSwKrTFXP%2Bo%2FnFX6qI1keeo8wWUueqyOR1eHw4QYS9zZxJHkSppzY1o2GO0R62TF2MXmiDs79yzsI6AQwOWyE1GHAlaH3IB%2B00MfMLGrvsQGOqUB4amtWeqjvslS%2FWGFUordFG7TCSp1KVkzrhwXHixgc4tHx5e730mzrBFqLLvrjhNbynB%2FrAp3h339m4RGCrgGNFpe4c580wyKXiiCh0ZKARxC%2FqggBMD6AjVHyZxWBIM2l8Zf3w9%2Bl%2F7BOVBb5ROXuV%2FlGFc9%2Bcr1s%2FjV%2BTA8rY3Ik9E0E7avw11LhDrs7cYZtKOtLEn4d6di0FcAvRIcA6fpYlJz&X-Amz-Signature=05e5c06e911b520f928c44a3f494ff763f7215ca321f5d69ebfedb114bbb93f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUJ3BMH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEl%2FudRJfgaiygpEDed7BBPN4NDPjcSefkz6Atl%2FBm2AiEA2fC2t4WaZ1sN9Lw2mbZqIBxvDSqtC4BWdy19vJcA1rYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMh67NQ5aCRlOSRpISrcA1Betl2g%2FAGUd6GiJqlJbz9QX7IClfVh%2BKZTSbwK91mqOU5H%2F%2FpR1ykL3yX6CVe187DFzatJJJ6mflDbVw8n4LeblmL5RkYIzwOeSQlMV1dEIKn0NrDWmDMthl4GPkqb55kplVTxDKmJ6x4nOfDrpwOwLrcnSDqNckyah2Lubq2SWCiaBanT%2F4%2F7vZTn%2F5L5j%2BK0y%2FBgnr4W8C2DZIXsZX9%2FgaPCyqqfxVtpBki0ibj0sQR23gkDIBxNMa7xrRWz9VIDE3YcQRGo16nKp8dRvhJ4dt%2BSVvejLXq3OtSMqhP2GchJ1m0Bl7jKY%2FN0rNR2t3MK7AWDaKPY6B%2BjfoyQkianmw6gGOiF3wTFoCvHNDpxepcpjGI6NYUlTzS4v0tl1TY4mebJxPHTVwQ0fHOigxZH%2BBHz1FcJ1IsK5QevZmtWeJzVgCFhlTDSZvpsR3rhv6ZClCVbtsMtnrUKxV9hjqEHD35QBhi1FESkCbWUlw4YaIErIfpt06l4zYTdQIQ8ro8%2FaWObnAOGsO0fykgUlC5VrSwKrTFXP%2Bo%2FnFX6qI1keeo8wWUueqyOR1eHw4QYS9zZxJHkSppzY1o2GO0R62TF2MXmiDs79yzsI6AQwOWyE1GHAlaH3IB%2B00MfMLGrvsQGOqUB4amtWeqjvslS%2FWGFUordFG7TCSp1KVkzrhwXHixgc4tHx5e730mzrBFqLLvrjhNbynB%2FrAp3h339m4RGCrgGNFpe4c580wyKXiiCh0ZKARxC%2FqggBMD6AjVHyZxWBIM2l8Zf3w9%2Bl%2F7BOVBb5ROXuV%2FlGFc9%2Bcr1s%2FjV%2BTA8rY3Ik9E0E7avw11LhDrs7cYZtKOtLEn4d6di0FcAvRIcA6fpYlJz&X-Amz-Signature=7e3278536eda2f291a8d4694d968c84f0ef78999882ac59adb4c66664dfe2152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
