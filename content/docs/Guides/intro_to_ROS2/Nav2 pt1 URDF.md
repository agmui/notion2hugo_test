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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPW2O7WG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFMbG99pySUzISw2A7FhgXYV6xoL%2FOr2h3LaxWZHELKOAiEAwPhQxS0lANnZYdnb0nXAaJexXyEki1kzUO%2BqXOxiYAcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLcZfWJC0DQ3WZDyYSrcAy9cqJS%2Bu5vmCf9Z%2BC3KKNSsD9HDTM2uL96N48HUe%2BXN571MFsqrzSl4375eB9VJPosnwae0K2S0ggBpTZZXrXGdcyROhB5sS4c%2FlfrCe54jRdSeN6d42%2BezJ2ZN7RJKiM%2BaiiLC%2FJ8tHHAGVRE7Lr1gbETqU9lk0MsVFXsjEEzYiVV%2B09wpXIZ1Te0lZEgbIs%2B9muUdaj39SHaAiyADYc00flsYBV1nSqHyoWEy3qSJs65zpPVEoR4%2BmEEpOc%2BSfmPw9gC9oMa88mHk90Lp1KhBMr1sZppC24L2tl71G7F5EG5dJDlWlkmChSYjGoiwQFv7DYyAzLMAZ4fTBEZob1lg9hMls7KiKqmxu4gq4I6FWR5uhhUPnt01YpcL56tzmMJCURheELNFYFQ7ycBxl8cWTLY1WqodeyhhoY4QUe%2Bvr1Hcw5Y7iKlDA1UJbfKb0tzUthOUhOR0jPRAvlFYUwFAc9j%2B4UNnIozUOrchhb9QunC%2BIcCJMr3kEXcp8q0KR8I2RUoJz5KStM3j5eIlQ0WA9Mr6DQ%2FUPqjNlsYBepL2jFGp7rIB639oIly5jDQnofE8d%2BIDCv06lnhJ95tFUNM6K3amJjvr%2FWUQZycm0Q3f26W60s%2Blh4zrm7fIMMfK%2B8QGOqUBO4OCS07wdpvZlCwHXBL9yUQ7IydBe0mbuRio7ItX%2F0PWKAtYzvJuRju%2BHg7hiz7u3CslBAtTTw8emWs%2Fm0f9g6d8ntjkW9c38OE%2FLJ3sN1ssed9%2FqLOHnW7PFURULXcfuFs0YYb%2FnhC9iqPsmFUsMxXR38fy6qsKijl2QbuskPpjQ25z%2F9vxp1ctAH9lli%2FHxlMaN%2BI%2FV4JFL4qwJmZQfGfPRkzQ&X-Amz-Signature=da262e2aaa2993037bfc7986f70526ad24ebf6502542f6e8bf5204d770932771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPW2O7WG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFMbG99pySUzISw2A7FhgXYV6xoL%2FOr2h3LaxWZHELKOAiEAwPhQxS0lANnZYdnb0nXAaJexXyEki1kzUO%2BqXOxiYAcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLcZfWJC0DQ3WZDyYSrcAy9cqJS%2Bu5vmCf9Z%2BC3KKNSsD9HDTM2uL96N48HUe%2BXN571MFsqrzSl4375eB9VJPosnwae0K2S0ggBpTZZXrXGdcyROhB5sS4c%2FlfrCe54jRdSeN6d42%2BezJ2ZN7RJKiM%2BaiiLC%2FJ8tHHAGVRE7Lr1gbETqU9lk0MsVFXsjEEzYiVV%2B09wpXIZ1Te0lZEgbIs%2B9muUdaj39SHaAiyADYc00flsYBV1nSqHyoWEy3qSJs65zpPVEoR4%2BmEEpOc%2BSfmPw9gC9oMa88mHk90Lp1KhBMr1sZppC24L2tl71G7F5EG5dJDlWlkmChSYjGoiwQFv7DYyAzLMAZ4fTBEZob1lg9hMls7KiKqmxu4gq4I6FWR5uhhUPnt01YpcL56tzmMJCURheELNFYFQ7ycBxl8cWTLY1WqodeyhhoY4QUe%2Bvr1Hcw5Y7iKlDA1UJbfKb0tzUthOUhOR0jPRAvlFYUwFAc9j%2B4UNnIozUOrchhb9QunC%2BIcCJMr3kEXcp8q0KR8I2RUoJz5KStM3j5eIlQ0WA9Mr6DQ%2FUPqjNlsYBepL2jFGp7rIB639oIly5jDQnofE8d%2BIDCv06lnhJ95tFUNM6K3amJjvr%2FWUQZycm0Q3f26W60s%2Blh4zrm7fIMMfK%2B8QGOqUBO4OCS07wdpvZlCwHXBL9yUQ7IydBe0mbuRio7ItX%2F0PWKAtYzvJuRju%2BHg7hiz7u3CslBAtTTw8emWs%2Fm0f9g6d8ntjkW9c38OE%2FLJ3sN1ssed9%2FqLOHnW7PFURULXcfuFs0YYb%2FnhC9iqPsmFUsMxXR38fy6qsKijl2QbuskPpjQ25z%2F9vxp1ctAH9lli%2FHxlMaN%2BI%2FV4JFL4qwJmZQfGfPRkzQ&X-Amz-Signature=aaed845c6b37513e32e30c7fbf5b3bf65eb3e6b618991058cc1beba3edc48bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPW2O7WG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFMbG99pySUzISw2A7FhgXYV6xoL%2FOr2h3LaxWZHELKOAiEAwPhQxS0lANnZYdnb0nXAaJexXyEki1kzUO%2BqXOxiYAcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLcZfWJC0DQ3WZDyYSrcAy9cqJS%2Bu5vmCf9Z%2BC3KKNSsD9HDTM2uL96N48HUe%2BXN571MFsqrzSl4375eB9VJPosnwae0K2S0ggBpTZZXrXGdcyROhB5sS4c%2FlfrCe54jRdSeN6d42%2BezJ2ZN7RJKiM%2BaiiLC%2FJ8tHHAGVRE7Lr1gbETqU9lk0MsVFXsjEEzYiVV%2B09wpXIZ1Te0lZEgbIs%2B9muUdaj39SHaAiyADYc00flsYBV1nSqHyoWEy3qSJs65zpPVEoR4%2BmEEpOc%2BSfmPw9gC9oMa88mHk90Lp1KhBMr1sZppC24L2tl71G7F5EG5dJDlWlkmChSYjGoiwQFv7DYyAzLMAZ4fTBEZob1lg9hMls7KiKqmxu4gq4I6FWR5uhhUPnt01YpcL56tzmMJCURheELNFYFQ7ycBxl8cWTLY1WqodeyhhoY4QUe%2Bvr1Hcw5Y7iKlDA1UJbfKb0tzUthOUhOR0jPRAvlFYUwFAc9j%2B4UNnIozUOrchhb9QunC%2BIcCJMr3kEXcp8q0KR8I2RUoJz5KStM3j5eIlQ0WA9Mr6DQ%2FUPqjNlsYBepL2jFGp7rIB639oIly5jDQnofE8d%2BIDCv06lnhJ95tFUNM6K3amJjvr%2FWUQZycm0Q3f26W60s%2Blh4zrm7fIMMfK%2B8QGOqUBO4OCS07wdpvZlCwHXBL9yUQ7IydBe0mbuRio7ItX%2F0PWKAtYzvJuRju%2BHg7hiz7u3CslBAtTTw8emWs%2Fm0f9g6d8ntjkW9c38OE%2FLJ3sN1ssed9%2FqLOHnW7PFURULXcfuFs0YYb%2FnhC9iqPsmFUsMxXR38fy6qsKijl2QbuskPpjQ25z%2F9vxp1ctAH9lli%2FHxlMaN%2BI%2FV4JFL4qwJmZQfGfPRkzQ&X-Amz-Signature=516293eb2ab430719e9d65305ac7c31543d5ef20b577950eb51f8afb36b8416f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPW2O7WG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFMbG99pySUzISw2A7FhgXYV6xoL%2FOr2h3LaxWZHELKOAiEAwPhQxS0lANnZYdnb0nXAaJexXyEki1kzUO%2BqXOxiYAcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLcZfWJC0DQ3WZDyYSrcAy9cqJS%2Bu5vmCf9Z%2BC3KKNSsD9HDTM2uL96N48HUe%2BXN571MFsqrzSl4375eB9VJPosnwae0K2S0ggBpTZZXrXGdcyROhB5sS4c%2FlfrCe54jRdSeN6d42%2BezJ2ZN7RJKiM%2BaiiLC%2FJ8tHHAGVRE7Lr1gbETqU9lk0MsVFXsjEEzYiVV%2B09wpXIZ1Te0lZEgbIs%2B9muUdaj39SHaAiyADYc00flsYBV1nSqHyoWEy3qSJs65zpPVEoR4%2BmEEpOc%2BSfmPw9gC9oMa88mHk90Lp1KhBMr1sZppC24L2tl71G7F5EG5dJDlWlkmChSYjGoiwQFv7DYyAzLMAZ4fTBEZob1lg9hMls7KiKqmxu4gq4I6FWR5uhhUPnt01YpcL56tzmMJCURheELNFYFQ7ycBxl8cWTLY1WqodeyhhoY4QUe%2Bvr1Hcw5Y7iKlDA1UJbfKb0tzUthOUhOR0jPRAvlFYUwFAc9j%2B4UNnIozUOrchhb9QunC%2BIcCJMr3kEXcp8q0KR8I2RUoJz5KStM3j5eIlQ0WA9Mr6DQ%2FUPqjNlsYBepL2jFGp7rIB639oIly5jDQnofE8d%2BIDCv06lnhJ95tFUNM6K3amJjvr%2FWUQZycm0Q3f26W60s%2Blh4zrm7fIMMfK%2B8QGOqUBO4OCS07wdpvZlCwHXBL9yUQ7IydBe0mbuRio7ItX%2F0PWKAtYzvJuRju%2BHg7hiz7u3CslBAtTTw8emWs%2Fm0f9g6d8ntjkW9c38OE%2FLJ3sN1ssed9%2FqLOHnW7PFURULXcfuFs0YYb%2FnhC9iqPsmFUsMxXR38fy6qsKijl2QbuskPpjQ25z%2F9vxp1ctAH9lli%2FHxlMaN%2BI%2FV4JFL4qwJmZQfGfPRkzQ&X-Amz-Signature=50b480b434c86a590af4cf73d9b77022d792efd8c5771d2c482091a05749700b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPW2O7WG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFMbG99pySUzISw2A7FhgXYV6xoL%2FOr2h3LaxWZHELKOAiEAwPhQxS0lANnZYdnb0nXAaJexXyEki1kzUO%2BqXOxiYAcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLcZfWJC0DQ3WZDyYSrcAy9cqJS%2Bu5vmCf9Z%2BC3KKNSsD9HDTM2uL96N48HUe%2BXN571MFsqrzSl4375eB9VJPosnwae0K2S0ggBpTZZXrXGdcyROhB5sS4c%2FlfrCe54jRdSeN6d42%2BezJ2ZN7RJKiM%2BaiiLC%2FJ8tHHAGVRE7Lr1gbETqU9lk0MsVFXsjEEzYiVV%2B09wpXIZ1Te0lZEgbIs%2B9muUdaj39SHaAiyADYc00flsYBV1nSqHyoWEy3qSJs65zpPVEoR4%2BmEEpOc%2BSfmPw9gC9oMa88mHk90Lp1KhBMr1sZppC24L2tl71G7F5EG5dJDlWlkmChSYjGoiwQFv7DYyAzLMAZ4fTBEZob1lg9hMls7KiKqmxu4gq4I6FWR5uhhUPnt01YpcL56tzmMJCURheELNFYFQ7ycBxl8cWTLY1WqodeyhhoY4QUe%2Bvr1Hcw5Y7iKlDA1UJbfKb0tzUthOUhOR0jPRAvlFYUwFAc9j%2B4UNnIozUOrchhb9QunC%2BIcCJMr3kEXcp8q0KR8I2RUoJz5KStM3j5eIlQ0WA9Mr6DQ%2FUPqjNlsYBepL2jFGp7rIB639oIly5jDQnofE8d%2BIDCv06lnhJ95tFUNM6K3amJjvr%2FWUQZycm0Q3f26W60s%2Blh4zrm7fIMMfK%2B8QGOqUBO4OCS07wdpvZlCwHXBL9yUQ7IydBe0mbuRio7ItX%2F0PWKAtYzvJuRju%2BHg7hiz7u3CslBAtTTw8emWs%2Fm0f9g6d8ntjkW9c38OE%2FLJ3sN1ssed9%2FqLOHnW7PFURULXcfuFs0YYb%2FnhC9iqPsmFUsMxXR38fy6qsKijl2QbuskPpjQ25z%2F9vxp1ctAH9lli%2FHxlMaN%2BI%2FV4JFL4qwJmZQfGfPRkzQ&X-Amz-Signature=827979a3f8d7b4661ce6597d37b3112a38674dc84213bb09e3f5745f7d8c381e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPW2O7WG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFMbG99pySUzISw2A7FhgXYV6xoL%2FOr2h3LaxWZHELKOAiEAwPhQxS0lANnZYdnb0nXAaJexXyEki1kzUO%2BqXOxiYAcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLcZfWJC0DQ3WZDyYSrcAy9cqJS%2Bu5vmCf9Z%2BC3KKNSsD9HDTM2uL96N48HUe%2BXN571MFsqrzSl4375eB9VJPosnwae0K2S0ggBpTZZXrXGdcyROhB5sS4c%2FlfrCe54jRdSeN6d42%2BezJ2ZN7RJKiM%2BaiiLC%2FJ8tHHAGVRE7Lr1gbETqU9lk0MsVFXsjEEzYiVV%2B09wpXIZ1Te0lZEgbIs%2B9muUdaj39SHaAiyADYc00flsYBV1nSqHyoWEy3qSJs65zpPVEoR4%2BmEEpOc%2BSfmPw9gC9oMa88mHk90Lp1KhBMr1sZppC24L2tl71G7F5EG5dJDlWlkmChSYjGoiwQFv7DYyAzLMAZ4fTBEZob1lg9hMls7KiKqmxu4gq4I6FWR5uhhUPnt01YpcL56tzmMJCURheELNFYFQ7ycBxl8cWTLY1WqodeyhhoY4QUe%2Bvr1Hcw5Y7iKlDA1UJbfKb0tzUthOUhOR0jPRAvlFYUwFAc9j%2B4UNnIozUOrchhb9QunC%2BIcCJMr3kEXcp8q0KR8I2RUoJz5KStM3j5eIlQ0WA9Mr6DQ%2FUPqjNlsYBepL2jFGp7rIB639oIly5jDQnofE8d%2BIDCv06lnhJ95tFUNM6K3amJjvr%2FWUQZycm0Q3f26W60s%2Blh4zrm7fIMMfK%2B8QGOqUBO4OCS07wdpvZlCwHXBL9yUQ7IydBe0mbuRio7ItX%2F0PWKAtYzvJuRju%2BHg7hiz7u3CslBAtTTw8emWs%2Fm0f9g6d8ntjkW9c38OE%2FLJ3sN1ssed9%2FqLOHnW7PFURULXcfuFs0YYb%2FnhC9iqPsmFUsMxXR38fy6qsKijl2QbuskPpjQ25z%2F9vxp1ctAH9lli%2FHxlMaN%2BI%2FV4JFL4qwJmZQfGfPRkzQ&X-Amz-Signature=6d1d6205eb539a6bb3378ff7b41dd82cf21cc797d7e53cfba59cf0cd19125883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPW2O7WG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFMbG99pySUzISw2A7FhgXYV6xoL%2FOr2h3LaxWZHELKOAiEAwPhQxS0lANnZYdnb0nXAaJexXyEki1kzUO%2BqXOxiYAcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLcZfWJC0DQ3WZDyYSrcAy9cqJS%2Bu5vmCf9Z%2BC3KKNSsD9HDTM2uL96N48HUe%2BXN571MFsqrzSl4375eB9VJPosnwae0K2S0ggBpTZZXrXGdcyROhB5sS4c%2FlfrCe54jRdSeN6d42%2BezJ2ZN7RJKiM%2BaiiLC%2FJ8tHHAGVRE7Lr1gbETqU9lk0MsVFXsjEEzYiVV%2B09wpXIZ1Te0lZEgbIs%2B9muUdaj39SHaAiyADYc00flsYBV1nSqHyoWEy3qSJs65zpPVEoR4%2BmEEpOc%2BSfmPw9gC9oMa88mHk90Lp1KhBMr1sZppC24L2tl71G7F5EG5dJDlWlkmChSYjGoiwQFv7DYyAzLMAZ4fTBEZob1lg9hMls7KiKqmxu4gq4I6FWR5uhhUPnt01YpcL56tzmMJCURheELNFYFQ7ycBxl8cWTLY1WqodeyhhoY4QUe%2Bvr1Hcw5Y7iKlDA1UJbfKb0tzUthOUhOR0jPRAvlFYUwFAc9j%2B4UNnIozUOrchhb9QunC%2BIcCJMr3kEXcp8q0KR8I2RUoJz5KStM3j5eIlQ0WA9Mr6DQ%2FUPqjNlsYBepL2jFGp7rIB639oIly5jDQnofE8d%2BIDCv06lnhJ95tFUNM6K3amJjvr%2FWUQZycm0Q3f26W60s%2Blh4zrm7fIMMfK%2B8QGOqUBO4OCS07wdpvZlCwHXBL9yUQ7IydBe0mbuRio7ItX%2F0PWKAtYzvJuRju%2BHg7hiz7u3CslBAtTTw8emWs%2Fm0f9g6d8ntjkW9c38OE%2FLJ3sN1ssed9%2FqLOHnW7PFURULXcfuFs0YYb%2FnhC9iqPsmFUsMxXR38fy6qsKijl2QbuskPpjQ25z%2F9vxp1ctAH9lli%2FHxlMaN%2BI%2FV4JFL4qwJmZQfGfPRkzQ&X-Amz-Signature=264f467ef26b3034f0a9a63e290d7654f40b143e8f744efc60a7cbc3e8685f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPW2O7WG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFMbG99pySUzISw2A7FhgXYV6xoL%2FOr2h3LaxWZHELKOAiEAwPhQxS0lANnZYdnb0nXAaJexXyEki1kzUO%2BqXOxiYAcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLcZfWJC0DQ3WZDyYSrcAy9cqJS%2Bu5vmCf9Z%2BC3KKNSsD9HDTM2uL96N48HUe%2BXN571MFsqrzSl4375eB9VJPosnwae0K2S0ggBpTZZXrXGdcyROhB5sS4c%2FlfrCe54jRdSeN6d42%2BezJ2ZN7RJKiM%2BaiiLC%2FJ8tHHAGVRE7Lr1gbETqU9lk0MsVFXsjEEzYiVV%2B09wpXIZ1Te0lZEgbIs%2B9muUdaj39SHaAiyADYc00flsYBV1nSqHyoWEy3qSJs65zpPVEoR4%2BmEEpOc%2BSfmPw9gC9oMa88mHk90Lp1KhBMr1sZppC24L2tl71G7F5EG5dJDlWlkmChSYjGoiwQFv7DYyAzLMAZ4fTBEZob1lg9hMls7KiKqmxu4gq4I6FWR5uhhUPnt01YpcL56tzmMJCURheELNFYFQ7ycBxl8cWTLY1WqodeyhhoY4QUe%2Bvr1Hcw5Y7iKlDA1UJbfKb0tzUthOUhOR0jPRAvlFYUwFAc9j%2B4UNnIozUOrchhb9QunC%2BIcCJMr3kEXcp8q0KR8I2RUoJz5KStM3j5eIlQ0WA9Mr6DQ%2FUPqjNlsYBepL2jFGp7rIB639oIly5jDQnofE8d%2BIDCv06lnhJ95tFUNM6K3amJjvr%2FWUQZycm0Q3f26W60s%2Blh4zrm7fIMMfK%2B8QGOqUBO4OCS07wdpvZlCwHXBL9yUQ7IydBe0mbuRio7ItX%2F0PWKAtYzvJuRju%2BHg7hiz7u3CslBAtTTw8emWs%2Fm0f9g6d8ntjkW9c38OE%2FLJ3sN1ssed9%2FqLOHnW7PFURULXcfuFs0YYb%2FnhC9iqPsmFUsMxXR38fy6qsKijl2QbuskPpjQ25z%2F9vxp1ctAH9lli%2FHxlMaN%2BI%2FV4JFL4qwJmZQfGfPRkzQ&X-Amz-Signature=9d6cf26e0e94d1bf410971c227daaace6430abf8521814cc4bb60689a15eaace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPW2O7WG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFMbG99pySUzISw2A7FhgXYV6xoL%2FOr2h3LaxWZHELKOAiEAwPhQxS0lANnZYdnb0nXAaJexXyEki1kzUO%2BqXOxiYAcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLcZfWJC0DQ3WZDyYSrcAy9cqJS%2Bu5vmCf9Z%2BC3KKNSsD9HDTM2uL96N48HUe%2BXN571MFsqrzSl4375eB9VJPosnwae0K2S0ggBpTZZXrXGdcyROhB5sS4c%2FlfrCe54jRdSeN6d42%2BezJ2ZN7RJKiM%2BaiiLC%2FJ8tHHAGVRE7Lr1gbETqU9lk0MsVFXsjEEzYiVV%2B09wpXIZ1Te0lZEgbIs%2B9muUdaj39SHaAiyADYc00flsYBV1nSqHyoWEy3qSJs65zpPVEoR4%2BmEEpOc%2BSfmPw9gC9oMa88mHk90Lp1KhBMr1sZppC24L2tl71G7F5EG5dJDlWlkmChSYjGoiwQFv7DYyAzLMAZ4fTBEZob1lg9hMls7KiKqmxu4gq4I6FWR5uhhUPnt01YpcL56tzmMJCURheELNFYFQ7ycBxl8cWTLY1WqodeyhhoY4QUe%2Bvr1Hcw5Y7iKlDA1UJbfKb0tzUthOUhOR0jPRAvlFYUwFAc9j%2B4UNnIozUOrchhb9QunC%2BIcCJMr3kEXcp8q0KR8I2RUoJz5KStM3j5eIlQ0WA9Mr6DQ%2FUPqjNlsYBepL2jFGp7rIB639oIly5jDQnofE8d%2BIDCv06lnhJ95tFUNM6K3amJjvr%2FWUQZycm0Q3f26W60s%2Blh4zrm7fIMMfK%2B8QGOqUBO4OCS07wdpvZlCwHXBL9yUQ7IydBe0mbuRio7ItX%2F0PWKAtYzvJuRju%2BHg7hiz7u3CslBAtTTw8emWs%2Fm0f9g6d8ntjkW9c38OE%2FLJ3sN1ssed9%2FqLOHnW7PFURULXcfuFs0YYb%2FnhC9iqPsmFUsMxXR38fy6qsKijl2QbuskPpjQ25z%2F9vxp1ctAH9lli%2FHxlMaN%2BI%2FV4JFL4qwJmZQfGfPRkzQ&X-Amz-Signature=1b460ee9413288a61a2154c145ba921b366479bb85ec9ed06e0b7653591e1bcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPW2O7WG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFMbG99pySUzISw2A7FhgXYV6xoL%2FOr2h3LaxWZHELKOAiEAwPhQxS0lANnZYdnb0nXAaJexXyEki1kzUO%2BqXOxiYAcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLcZfWJC0DQ3WZDyYSrcAy9cqJS%2Bu5vmCf9Z%2BC3KKNSsD9HDTM2uL96N48HUe%2BXN571MFsqrzSl4375eB9VJPosnwae0K2S0ggBpTZZXrXGdcyROhB5sS4c%2FlfrCe54jRdSeN6d42%2BezJ2ZN7RJKiM%2BaiiLC%2FJ8tHHAGVRE7Lr1gbETqU9lk0MsVFXsjEEzYiVV%2B09wpXIZ1Te0lZEgbIs%2B9muUdaj39SHaAiyADYc00flsYBV1nSqHyoWEy3qSJs65zpPVEoR4%2BmEEpOc%2BSfmPw9gC9oMa88mHk90Lp1KhBMr1sZppC24L2tl71G7F5EG5dJDlWlkmChSYjGoiwQFv7DYyAzLMAZ4fTBEZob1lg9hMls7KiKqmxu4gq4I6FWR5uhhUPnt01YpcL56tzmMJCURheELNFYFQ7ycBxl8cWTLY1WqodeyhhoY4QUe%2Bvr1Hcw5Y7iKlDA1UJbfKb0tzUthOUhOR0jPRAvlFYUwFAc9j%2B4UNnIozUOrchhb9QunC%2BIcCJMr3kEXcp8q0KR8I2RUoJz5KStM3j5eIlQ0WA9Mr6DQ%2FUPqjNlsYBepL2jFGp7rIB639oIly5jDQnofE8d%2BIDCv06lnhJ95tFUNM6K3amJjvr%2FWUQZycm0Q3f26W60s%2Blh4zrm7fIMMfK%2B8QGOqUBO4OCS07wdpvZlCwHXBL9yUQ7IydBe0mbuRio7ItX%2F0PWKAtYzvJuRju%2BHg7hiz7u3CslBAtTTw8emWs%2Fm0f9g6d8ntjkW9c38OE%2FLJ3sN1ssed9%2FqLOHnW7PFURULXcfuFs0YYb%2FnhC9iqPsmFUsMxXR38fy6qsKijl2QbuskPpjQ25z%2F9vxp1ctAH9lli%2FHxlMaN%2BI%2FV4JFL4qwJmZQfGfPRkzQ&X-Amz-Signature=39435de448a6983965ee6ef48f69a205ee5343c0f13e93ebf97aadd0bd4c3a98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJW763NF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDESyQ96%2F55tuRkGdUlicnYlyy4vBcjSDdlJffHj5sJzgIhAMxas%2BKw8KRT61uYMLeBAy4Y1uPOmJCdAHGBaCD%2FlasAKv8DCFkQABoMNjM3NDIzMTgzODA1IgxqwJs6J2C6lwDQhX8q3APT%2FjLhDazK%2B9XeSpJCNY4hesgjDraEqFswCZtsoQNwLu9RRbcKy3JrXNp%2BPoZO1POR7KGSr%2FtDhnfmAavdtc%2B4F%2FKJodaKnc7FD1I8pjZDgSmRZ1qKi3mp7HlFw6NuVUAdXecHmgwxtxqWfdrgV0snCTIwezYs7Ne39emu0TqN%2FCnRolPrIiJfQCjcVAV9KzCuTnqywqhtVbFaYrIzAfkZUZs2vcrzzIbOBt56pyDmjgFBNNYFWB3ysvE%2BqExp9auF1ulVyZdrxIH09RG82H3m9if2M%2FbLQmDmL9NKMooUDHsW0KM0nrZcaJjKS0VOiAN9O6eGyfw%2FQSjGNmM0k0LgEV%2FXtyWR0CDHn2W78KMfRehrgJNiZ9TFii940zwPxYlkYUwPQkg7ICZ4ZiZfehEYZjRpQzpxZBM278LuQxNxe%2Fj6ZIO8srD%2Bkmv0fFvnyfpL66UXNigAdOWQR0ddRC6aNSMf1VBRkM8bH%2FJMvKgfgPi%2BzaGzJM6ltaJOdVH8k7Llw1KPV6HrSe9MmMxsXhgeUVuYlzMnczrt6RM7qyUe8li%2BPOY%2BZcPBR3WnAoeehPevJd0LvCB7R11TTBk6dQQs0jsnCP3AY2vs8qUlcFWo%2FJA1JKuhcHwPo6MiYTDhyvvEBjqkATxwsLLg9UAGk5ewWiyjc7rCNvSbH%2FlIKmbzsmn2cvS0JuPB%2FEdiMijWXbKWiaCn37wDSKjjXKADZO6IR4c3ARy08zEahgGdNqGJHljhCwoRSz4rteL30zIFje4eDY3LTHwZ03AY6n%2FvugZMsJ419uOPnpr%2BsV1pWaTp%2BgWeQXEuhGYoZJkRH30n%2FAfAtrOpVWWqLYBngLqr2zm4h6%2B0oXIPxrJw&X-Amz-Signature=348190f5274c461c233a8c79c37227e051518d670e0a84eb1582c636150f7f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNSNZEZH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFgh6n7xCplyCo61jh%2B6DHRLFeEeImxqty51mLDjdfFBAiEAxOokUh3cyDDjoUZsrzea2f0x%2BtsCk1S6jU69TiJUUsgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIdFX6jb6xK%2FnSBzJyrcA9tASXGts7yyd%2FJszj2jyMwHOYSr5infGkTvVO3vfYNAlx1m1Dyuygr3wfosmEChiPavf11BzIN7Hhyylmz9EY3nTV5Oj2AXwUA541nel1jqBOTARyWmsDt96yrXwgQ6VrM9TV%2FgSx%2FHtIWYCWXcNOpSbjB30zTV5iATqqSVy2cTgd0Q7VnKc6oJfqr%2ByRBMbXUj7foGvjXgRi60E2AgkTe3jzWU7mpk84s3pzT%2B1RGe8hcGc9YjWu%2BKGVu9kmRzOjj6vcMgQba9JfpLRRRGWWAZ2Oflxv4XAUpc99esw79qrNxK%2FDTUd8abycYDJQIAPcxWRWgV0dR3ocU3W23mmxMIwL3%2B4dXUpcf3B0hLfHr1WK6OQjB8qmgmJVEdSrbMLnE3pDGVcuhrCu68zWEc%2Fcoz0d4H1rWuV5uAChO1htmSJbz6pBC%2F4UxE%2F2r1vHKYAoMDUrJH0Hfv%2BVIEo5QAUTj%2BEZ3yw6%2FjoRmIcweAOl9a8rrARBz51WJ%2B7DwIWGoLMUR%2FPNU2PqUBikRXe2risIcu1qDD%2FhkiFuo7gWglXD4BaxKTpUEVuSqB7nH4rDYVF0UGWgUID1D0rmsEvoG2zqT9DmHJfc7%2B3YQCtLi7YqrmIDjjWqC%2BFUyS1K9iMOrK%2B8QGOqUBp2i54sm%2FBTwt3bwgnabTej%2Fwz9QUGM1%2FmjGCsejhK0YGqaZzlHwO%2F9pLU6sMzuyYn7jNLjcMsNip%2BeKvaOyReXTO4hNNj1pdG4he4Tx2zMPrvD6PPqN5uhVyEemc%2FL5y1GmJGxDj4NOGYjyQahijmvMxnHwSB1Dp%2FUAe4Wa63PHfWwuoYspmulsHcixPIX7lxf%2BRFeiExX3loSp2bBqmFBpD68b8&X-Amz-Signature=ba88673811291450e0a781ad66238aa870d08b6b8c9d33494f8cef594d0e7b30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NS2BBH2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCTxU75oYz7SgskH00y3kXrx76uAfXHPsTTFrQcVpOkzwIhAKCwAemXJzrrq4ijfF4F3p8iFfykp8FQjaiFNUpBn3LVKv8DCFkQABoMNjM3NDIzMTgzODA1IgzGFb9gIaetf%2FnqmCUq3AOk4deNx6I39bWg8jNUtLgfN74MQAXxHp81UJtAqIsSTrgpl8RtiKoEOFAXItV5tPehuUnTz4qWDWHT8h%2Bg5Lazzj29wj6f3p6YK5yckljFQxx9cbpY5Zs7fRQEFe%2B%2BbKNTbDD7rwa7thdXnxNvxc4tbq6abFqykoBikYQrpLnixtbjRsr%2BkE0DwMggzowh5jUfdO%2FzVLr9N2PBUUiUdYksbuqEEH%2FuRkNntjzNY%2FphGnJAT2l%2Bu51Twr9iy0v6fp0FxcjHekxnsbY78QThYGdbdrT13njyOKOji67l5MnIxC5k3FsZkhqtDpfoyElBxxWLT4RJckOqsUIOcTQw2FZz0SuESePNaNhKS9wCcjdJqvxnxyvsh7fsYwOyF8Jaae%2FB8AmuRFgYwIAKn8RR%2Bzr9fk5%2FCTjWDqjrtfKToDZmlLsks9ntmmr3CAPYuCJyF%2FAg5WfHFqhZC2L9hmJ78vOSo8nEUnWvmhTmdOplqVJZzLY9ruyX%2FTJT7b6CWc%2B0LTcGys4svsizrI7fIIpo%2FEi3zEcRsTTRXzzd313FfGCS7V71ZDf2UQmDBozRVXNRmrAhBF1QO1voCE9wfCAFOaraeMoD%2BUCa7jANRG0EuTCOQ5svMhkVnu1M91q0hTCHyvvEBjqkAaLJqWbP2L3CrjKX51oYcLsvcZlKiU7UFNWeR1qkPyL6kSy00BrDdx4a5Gzt%2BV6O%2B86oV16fAqQWFbuTmkf7ji26AEoj1Z6VYDQMef8H3pf%2FwEsip9j0oAc7ykf3kHs5yYP5cScgZc8ybHSbiLUvXjUH93nvhqF%2BNRD1ARcTanT3EOrwi3PcCdzIt11N0TPxPraSG602p1wwmvKtZFKT5zaGWm8j&X-Amz-Signature=a73d79777f3ca15bce5f45da2add1bf47c3a52d2776b3545b486ad805b2f6e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPW2O7WG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFMbG99pySUzISw2A7FhgXYV6xoL%2FOr2h3LaxWZHELKOAiEAwPhQxS0lANnZYdnb0nXAaJexXyEki1kzUO%2BqXOxiYAcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLcZfWJC0DQ3WZDyYSrcAy9cqJS%2Bu5vmCf9Z%2BC3KKNSsD9HDTM2uL96N48HUe%2BXN571MFsqrzSl4375eB9VJPosnwae0K2S0ggBpTZZXrXGdcyROhB5sS4c%2FlfrCe54jRdSeN6d42%2BezJ2ZN7RJKiM%2BaiiLC%2FJ8tHHAGVRE7Lr1gbETqU9lk0MsVFXsjEEzYiVV%2B09wpXIZ1Te0lZEgbIs%2B9muUdaj39SHaAiyADYc00flsYBV1nSqHyoWEy3qSJs65zpPVEoR4%2BmEEpOc%2BSfmPw9gC9oMa88mHk90Lp1KhBMr1sZppC24L2tl71G7F5EG5dJDlWlkmChSYjGoiwQFv7DYyAzLMAZ4fTBEZob1lg9hMls7KiKqmxu4gq4I6FWR5uhhUPnt01YpcL56tzmMJCURheELNFYFQ7ycBxl8cWTLY1WqodeyhhoY4QUe%2Bvr1Hcw5Y7iKlDA1UJbfKb0tzUthOUhOR0jPRAvlFYUwFAc9j%2B4UNnIozUOrchhb9QunC%2BIcCJMr3kEXcp8q0KR8I2RUoJz5KStM3j5eIlQ0WA9Mr6DQ%2FUPqjNlsYBepL2jFGp7rIB639oIly5jDQnofE8d%2BIDCv06lnhJ95tFUNM6K3amJjvr%2FWUQZycm0Q3f26W60s%2Blh4zrm7fIMMfK%2B8QGOqUBO4OCS07wdpvZlCwHXBL9yUQ7IydBe0mbuRio7ItX%2F0PWKAtYzvJuRju%2BHg7hiz7u3CslBAtTTw8emWs%2Fm0f9g6d8ntjkW9c38OE%2FLJ3sN1ssed9%2FqLOHnW7PFURULXcfuFs0YYb%2FnhC9iqPsmFUsMxXR38fy6qsKijl2QbuskPpjQ25z%2F9vxp1ctAH9lli%2FHxlMaN%2BI%2FV4JFL4qwJmZQfGfPRkzQ&X-Amz-Signature=b19b85ac921e000c990933e01fc9551ab2531f22a5fec64b63419c9c72608f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6AWEHBW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHg6XdjhSWwJJQtQXYarEMNGm%2B3Z%2FveXMP%2BhJR5TxFwHAiEAv8Hl9PqHLaARJrBDPQViECu%2BtMKkxGsEZ7wnBRjp8IQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJvbw8N%2Fe8%2FS%2BsV7%2FSrcAwIjKxBAu%2BrygRs28K2lm%2F%2FchqtpnUkF%2BNS0cJwPZKO4CpDqarwVUZs63sfLrH6NcHwcgtZddVp9FTy%2FfgE%2FePM%2FMAnwvvKilKIngXJ0NRuMN%2FJt%2FooqGWiipZRixYXJygdN2IaQOH%2BZNrijxPzkghCu7WLMGEpB3c4gyOlmGpvNnE%2Fdf9wRoe1uERgpAt6B5JhP%2FgrbFkVH797AozteuItbkyTTIQl92MLXo%2Fzo%2Be656Zum9KHzuJEyoLrlosMZAiNwrx7cxHOUjmSpaLNZob7AsioTi4XbAVLm9tbUcopbHnjNlPumColAi6iSqTfxW5Gz0bP3fjCPIQWpQUTRr7I%2BX2rL64oXXJKgqj%2FWb3xBAAJFlrL1JfD%2BHr86JdiDN%2Fdat99Npk6mZKqyIt5K2HAMn4pBT2WbrR9eU7vTi7D7LG8PmgybIibX%2F0WrbAT97W5qvmuw3kZ%2BGw8gAbckHtj660KveoTOkYUr4oEzFItshzaZTE1uQmcYh9gMc84Wlofx6ATx3o%2BynABy0Rh%2FlDyKft4guFPg%2BjjYrJwa90WptYEV9gkoD7wJE%2F%2FUOIeYYi1%2Blz6d43ujyuPhAdXUFDSigTQJVttW45jkCDGT00K5lgy3o%2BtwQn1ZjXhUMM3K%2B8QGOqUBcvb%2Buy6DcbTOnEYMi10jGOOBX1o%2BfE8uS%2BLIkLpSUwLZFY6KKH5rP9Vj%2FY16dMGVI0rcqqJQ6mr7cJ0NI82yMJGkEkbdJzdGJmM%2F0ft06lSDYBLnq7nApHarvFenKxR%2Fz8VXp%2BHCnSx5%2Bp0X%2BlPlEjH3ZZHWjrv3EF1v57Rz04OgZ45LuZ39qr55Ekf9FzhOFXSSlv90x0AEOtVDRxPsgIsxWx9p&X-Amz-Signature=304ef54fc0089d85b2a21232e04b775de67381bf0bc7074b83e76c2bb5da08a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPW2O7WG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFMbG99pySUzISw2A7FhgXYV6xoL%2FOr2h3LaxWZHELKOAiEAwPhQxS0lANnZYdnb0nXAaJexXyEki1kzUO%2BqXOxiYAcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLcZfWJC0DQ3WZDyYSrcAy9cqJS%2Bu5vmCf9Z%2BC3KKNSsD9HDTM2uL96N48HUe%2BXN571MFsqrzSl4375eB9VJPosnwae0K2S0ggBpTZZXrXGdcyROhB5sS4c%2FlfrCe54jRdSeN6d42%2BezJ2ZN7RJKiM%2BaiiLC%2FJ8tHHAGVRE7Lr1gbETqU9lk0MsVFXsjEEzYiVV%2B09wpXIZ1Te0lZEgbIs%2B9muUdaj39SHaAiyADYc00flsYBV1nSqHyoWEy3qSJs65zpPVEoR4%2BmEEpOc%2BSfmPw9gC9oMa88mHk90Lp1KhBMr1sZppC24L2tl71G7F5EG5dJDlWlkmChSYjGoiwQFv7DYyAzLMAZ4fTBEZob1lg9hMls7KiKqmxu4gq4I6FWR5uhhUPnt01YpcL56tzmMJCURheELNFYFQ7ycBxl8cWTLY1WqodeyhhoY4QUe%2Bvr1Hcw5Y7iKlDA1UJbfKb0tzUthOUhOR0jPRAvlFYUwFAc9j%2B4UNnIozUOrchhb9QunC%2BIcCJMr3kEXcp8q0KR8I2RUoJz5KStM3j5eIlQ0WA9Mr6DQ%2FUPqjNlsYBepL2jFGp7rIB639oIly5jDQnofE8d%2BIDCv06lnhJ95tFUNM6K3amJjvr%2FWUQZycm0Q3f26W60s%2Blh4zrm7fIMMfK%2B8QGOqUBO4OCS07wdpvZlCwHXBL9yUQ7IydBe0mbuRio7ItX%2F0PWKAtYzvJuRju%2BHg7hiz7u3CslBAtTTw8emWs%2Fm0f9g6d8ntjkW9c38OE%2FLJ3sN1ssed9%2FqLOHnW7PFURULXcfuFs0YYb%2FnhC9iqPsmFUsMxXR38fy6qsKijl2QbuskPpjQ25z%2F9vxp1ctAH9lli%2FHxlMaN%2BI%2FV4JFL4qwJmZQfGfPRkzQ&X-Amz-Signature=2b2087aef13c74500b9b616c54595870473e3b11b6a7e7e893b67f32bc385d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B4UL25F%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGQYE7mvfsRlNf8DTgYc6yX6qTS5lEE57IPUB6QxnBZmAiEAmuZ2UjIHIjq52Ork7XgQmnV4uMyNRSYvAZ%2F0Sy6xi9kq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJ06D68YAgbH42Q%2BQircA4FUrUarbHLdzjUcvvRRUUP0sRMTkZtT9KwFp3ItZQtcyMqvP648P19DFA0DRCT8ezfKtjvoDa25cj4XiMGc%2FTzb%2BICxSBcenODwgkT9HfzwlZlhMfcby7jHKKM%2BqypO7X0yeALGfFDs9pI7MqOc7ScmIR%2FXA2g4ZDf7C7i4KMjopcWjcFcMa47DQKzXDkzCW9roG0ouqbBeMe3l3dgj0K6TbzMEqUvb%2FuCt4CRsbSvC1NqEB8bFwBXzEvIAgkNqAhRyjXJ6dU%2Fe4g4IVueuagMlLRXKvjkGaWuzlT%2BRgG0oS9%2B2A3aGe5eazHQ%2B3OoKXKjrb0XDkKjPcRkISWXYzs0tU8PUTaxgPCUc05se3DKWMTsGjaT3%2BmkmlTALcavwutKLPhomhTFM3%2BuvkiBNwqJjPg%2BBL391khjSDzn89%2FSzKX5EW6xqPaqgffCEkXtRN5R268CCUC3LNP5AkxZEUSpwrjYVo0vUFNWaZKVdQfrBvaAUAEXVFaiHQVi3QYFKqWfvODBSLWpgmxx9XtswZs%2BGHWhzuCowLut7gJnuwPlIaO6XhfInw4FWfZssnF3n3M%2FFyJxyNw93Whb7eOmDNv4lgOREgAaZ5rslpolCEhAHP8qYKsOpchYQApPrMKbK%2B8QGOqUBGxNMVQVDxEtUgyf3hAZIbKxG1YnW%2BE5e0G54HQe96mPilctwOBatkuQwtCuhxA6vUPFp96do38qiwuOb9Vofkw6XD3OetqF0WiQcm4L9P3f59KSapDJ5ZW%2Bg7n1hXGziaWU5Z%2BRZV6WoLD7CdLnYjWX7oBVip9eY7G%2BxoDJXA6s7TU5Y5jJcCxxNLViTvvCCv09pbo592bG1J1I3CaTuvMzaV8ge&X-Amz-Signature=68ec752e10e01ad6a5fcabc1f36a657e4da035d1840b529d1899530987127b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPW2O7WG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFMbG99pySUzISw2A7FhgXYV6xoL%2FOr2h3LaxWZHELKOAiEAwPhQxS0lANnZYdnb0nXAaJexXyEki1kzUO%2BqXOxiYAcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLcZfWJC0DQ3WZDyYSrcAy9cqJS%2Bu5vmCf9Z%2BC3KKNSsD9HDTM2uL96N48HUe%2BXN571MFsqrzSl4375eB9VJPosnwae0K2S0ggBpTZZXrXGdcyROhB5sS4c%2FlfrCe54jRdSeN6d42%2BezJ2ZN7RJKiM%2BaiiLC%2FJ8tHHAGVRE7Lr1gbETqU9lk0MsVFXsjEEzYiVV%2B09wpXIZ1Te0lZEgbIs%2B9muUdaj39SHaAiyADYc00flsYBV1nSqHyoWEy3qSJs65zpPVEoR4%2BmEEpOc%2BSfmPw9gC9oMa88mHk90Lp1KhBMr1sZppC24L2tl71G7F5EG5dJDlWlkmChSYjGoiwQFv7DYyAzLMAZ4fTBEZob1lg9hMls7KiKqmxu4gq4I6FWR5uhhUPnt01YpcL56tzmMJCURheELNFYFQ7ycBxl8cWTLY1WqodeyhhoY4QUe%2Bvr1Hcw5Y7iKlDA1UJbfKb0tzUthOUhOR0jPRAvlFYUwFAc9j%2B4UNnIozUOrchhb9QunC%2BIcCJMr3kEXcp8q0KR8I2RUoJz5KStM3j5eIlQ0WA9Mr6DQ%2FUPqjNlsYBepL2jFGp7rIB639oIly5jDQnofE8d%2BIDCv06lnhJ95tFUNM6K3amJjvr%2FWUQZycm0Q3f26W60s%2Blh4zrm7fIMMfK%2B8QGOqUBO4OCS07wdpvZlCwHXBL9yUQ7IydBe0mbuRio7ItX%2F0PWKAtYzvJuRju%2BHg7hiz7u3CslBAtTTw8emWs%2Fm0f9g6d8ntjkW9c38OE%2FLJ3sN1ssed9%2FqLOHnW7PFURULXcfuFs0YYb%2FnhC9iqPsmFUsMxXR38fy6qsKijl2QbuskPpjQ25z%2F9vxp1ctAH9lli%2FHxlMaN%2BI%2FV4JFL4qwJmZQfGfPRkzQ&X-Amz-Signature=674c4653134bbe5bdeb7bc75b8962067f21afefc5360943dd35026601621a8a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3N5GUGP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDzQ3cYRNDldqKcutvXrZJMjEWLB9UO1apnMZXgfMRFfwIgY6vbMedEvIdPGHFyEb2K5WxaRuDcxOi3K0Va%2FQmWSQEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDPTQKORDAQwnwgk0lCrcA9YKV%2B9tOx7717mIG2jrjNO33GgjIit5Fy0BwpIQYN9yXjlzqSF9q6lq%2FPVRytgmyYTXls5CvjroRlRLmLNrdeoZz76yzvP7qh16vM%2FFJHaB2CCkT95AJ1JUpX2JeeihN6iWGftCoyg6Ov15UM53i4eDW74RyDExV126%2BCp4U3zGGknM3Gxq%2FC2rJfXHUshzp5goHLevGGO4d%2Filbwkyuq4uIwtqfKqk4xDQNP7F8RwRrLWJWhp%2FY%2BW6IW9BRlMI%2FvklrvA9jWvftMJheQWfxNCANbU9fILlhXNMYpBY52wPjWOk3mRyHfaiWBQa%2FV1m5i6uS7riuOi%2FeDpDFNSPKOwPwy0vYJxpH4i9PY%2B6PT7OSoJMJuABvnv%2FzWv7Iyt9ZRfzgjujvolR1lhJR5HYwE5NPNJmD0COnmO9ZL3XEd%2BuUfPRIo0OtfTY5zctmk2Fz9LWN4dqPxcprwd%2F080YAs%2FZhJ92LXZBGvEzB0V3G1N4cP43RX5XhzNkVbk%2FWHPo4zmL41dAPlbzF4E4wTIi0z1oD7bwq75eIQNsmZsDnJf5E%2Bfn9HyGu4xw1vG0RcIYAKqRiuf2NR7jQe3fHsq8Xiavehtal03M3M09ZcczL4VGy7xCFR4gDooMQKLFMM7K%2B8QGOqUBUa951y1hfYltKt8svDABYv%2B1CiK4X1GKvEyFKB4oQ8AJPAfQj76lng%2FA7KUj0%2FOmX3jbp%2FenLwujAviRDWD2ZaKV8cnYdZrYAgkalSTKD0ZvsEXl59RHT9VP7J%2BF3v2NycnsW4Gwb3BGvcvj0okU%2FxjQO7yx61IXk7etOm7tp83Zd3MA%2BQeKYISrIEzz8kR2xgDYe1CMtUuCjy2mhnX2IJrVgfZ7&X-Amz-Signature=5868eb26754af7450cfd668e3cd0b0e006fa20c4d5fa5454ac485f01df8d7cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPW2O7WG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFMbG99pySUzISw2A7FhgXYV6xoL%2FOr2h3LaxWZHELKOAiEAwPhQxS0lANnZYdnb0nXAaJexXyEki1kzUO%2BqXOxiYAcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLcZfWJC0DQ3WZDyYSrcAy9cqJS%2Bu5vmCf9Z%2BC3KKNSsD9HDTM2uL96N48HUe%2BXN571MFsqrzSl4375eB9VJPosnwae0K2S0ggBpTZZXrXGdcyROhB5sS4c%2FlfrCe54jRdSeN6d42%2BezJ2ZN7RJKiM%2BaiiLC%2FJ8tHHAGVRE7Lr1gbETqU9lk0MsVFXsjEEzYiVV%2B09wpXIZ1Te0lZEgbIs%2B9muUdaj39SHaAiyADYc00flsYBV1nSqHyoWEy3qSJs65zpPVEoR4%2BmEEpOc%2BSfmPw9gC9oMa88mHk90Lp1KhBMr1sZppC24L2tl71G7F5EG5dJDlWlkmChSYjGoiwQFv7DYyAzLMAZ4fTBEZob1lg9hMls7KiKqmxu4gq4I6FWR5uhhUPnt01YpcL56tzmMJCURheELNFYFQ7ycBxl8cWTLY1WqodeyhhoY4QUe%2Bvr1Hcw5Y7iKlDA1UJbfKb0tzUthOUhOR0jPRAvlFYUwFAc9j%2B4UNnIozUOrchhb9QunC%2BIcCJMr3kEXcp8q0KR8I2RUoJz5KStM3j5eIlQ0WA9Mr6DQ%2FUPqjNlsYBepL2jFGp7rIB639oIly5jDQnofE8d%2BIDCv06lnhJ95tFUNM6K3amJjvr%2FWUQZycm0Q3f26W60s%2Blh4zrm7fIMMfK%2B8QGOqUBO4OCS07wdpvZlCwHXBL9yUQ7IydBe0mbuRio7ItX%2F0PWKAtYzvJuRju%2BHg7hiz7u3CslBAtTTw8emWs%2Fm0f9g6d8ntjkW9c38OE%2FLJ3sN1ssed9%2FqLOHnW7PFURULXcfuFs0YYb%2FnhC9iqPsmFUsMxXR38fy6qsKijl2QbuskPpjQ25z%2F9vxp1ctAH9lli%2FHxlMaN%2BI%2FV4JFL4qwJmZQfGfPRkzQ&X-Amz-Signature=5ce9dde62cfca4979acf3d90af87b2c1ba486a18fde3899e2bf792dec5cffff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNHFZJBX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCy4IHGSWs4RfZvKEXyVk07HsPiaSltZ7Pk5Ove2K9sKAIgFM6JbcSzDEmxxc3fs%2BLsp8bEXCwchtHJbqTM%2FO0tE9wq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJyFHXOifwpj4leVHyrcA%2FHbO4qC%2FCA4ugmMK4dAYVTJoQkTqtfXDSGhHS%2Fwq7CO4ZSl4BGt3Qu8tb8aDpyJ5pF%2B%2BBqVUf4qlrFCeojONpa3SzTOMn35zoHCoJkhIeKGLCxUQiDl1XoqO%2BstY0hH783BVnGmgOH8mI6U2Pwwxp42Glw4wK0tJVl88tJxkj2RSyncllZe0O%2BdroyScOaX0mkjufi%2ByujnhEwzXJxnqkrqq1ulaipsf13RaFdqZeKbY4WZha1%2B1QanDnb5pX7DGmyV976b1%2BHGCFO9J3dluv%2Bsa8%2BR5sxSS7hIuxv9vWkcaMsZe%2FhEzTbi%2FNrQtRftVU6AglqMGUSQOmkkYN%2FbfDPck2vgTkmfPOdPBpp556ciXACL1AYqOBXcnPgOS3YCfVZxOP9oURJEg4q3tmOZzv%2BWLL3aAS0LHmjiebF9gkXtLiqmt6hJ4fDV96Ik8m6Cam2F7gW2KfpsJ4bm8f625OTx48JiTIkzrgIPSBQW9nWmQQzRIZ13p4W9IlqzjwMpfRBecBscUIngUfV3crjrnIzYZ%2FIVG7YHhftZdS6SxX1zpnIVVgR%2FP5iqZa0C84Lp2kGyGj4De4H2zKvntcEvyCdh6bAu%2FowBAGi0j4pF76GZd4yLDc6uKkNcmTyCMKLK%2B8QGOqUB%2BZsm2gQY9NqsU%2Bj3Lg9frKSvadfxJ36E7n5KhOm%2FFMnf8ILOhZ5P4QL4A6geJWyBp%2FixHx7gXF5TY1zyserKyYgZ%2BlDYopVycs0Z9iLSsaY%2FDcXsM3wM1OjVre23s00tIxfGsAG7PZuwfUkOxVP263TXfIeucAr3Mr217oLlAAdOVoiaLKEXXwWhH%2FZ2MlmL2o6%2F2rZZYSjpyth6Qem0OsS%2BD8el&X-Amz-Signature=cc499fed4b571179ac1eb87d024f396ebdaf02def91d8c43349777d0be431453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTGC2Z44%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDU4NT3IFzMVpyzfcLCt3j12O3bUviFWYy3t9mGcfefowIgdijKFntNSp%2BjSd1WVah3ibvjNbbRYxt%2BWoDERG%2BnchEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOENGHvf%2Bc87K3dZZyrcA%2FGmvt9bUqea6SbxI28jQoOhLkVLPCXOk4xFmTvelhcBdcvU5y5wCUm5WiKxXOL4LqR70t4LyzRpn1RE6y%2B9t11iSbn7%2Fc8JcoLtxxAR8bgnNM8wHI5fBGBpMs7dx%2BN72od%2BPRKLjz2TnB7YrlA8gxCrKpwpDOp0ASPnXusA%2FFwVqFCqU1Xbetu0MZVQmp9c7Istk53Pwlj3M9R2d80mxgnSrRKOu%2BCRBSZNozGaUKI8qBb56VCeRy7uQWGu2LCv%2BDKt6HtvueuqVwhwFfQ1HorZDCS9jKdVUtBA82nlCT0fRKYve5cXEa65wbunOEHHjBMgEGk9n264JZk5hrsdBlUi4gjvFtguslq9BB5fb5qTuZHKyIzwIDlH10nB8BxdmTybH3WD9Bgd0123pi%2BRMwvUgxAAIlorrJeZveq3FLU3iDMffkUqpZyKtZKf49EBqwClOH70Xcc3hsau9LSB%2FamVcG5A9sL7pfzSoNNgQKg8V2zHjv7l50leyHO2OIn111vWHbp4cxGoOz5ykoapJpzKuagMRdYHVBFXFPhrB%2F%2BcExECLt4ur6usH%2F%2F%2Fipg%2Bg6FBhIcEkjHn84Jgh%2Fkif63OcBchMKXq%2B6csAO%2F6oIXsOM2NHTWyhsd9ElZRMKLK%2B8QGOqUBlkoXrRkGuDzKezlr%2B0qlA2vklHlQOwlibOeqsuS02Y7OqzO902AIv1ChL33bYAeE5%2BUmNLrwYNB%2BfdKoM4GLImDL%2BYbtzmhMg1nPVyE03PwHDIFDeK9Pi%2B33Z7qpfxfDg1Lr3ti7Gkx4q33uz7aDb%2BU82zbMxTRlhYRGYkXzDYh0RrHHDXDHeMMFwCVIFRdv3INXJEWMsg7wIGYuxCuAZuW3SrdS&X-Amz-Signature=43eab861fe379eb026b4ad4ff7683c7f308b0c6f392f6750efef0bf2b003436f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD6FB2YG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIG5c1JALl6XEsbblhqduERkxviMiNOy55bCk%2BLF4pYxXAiEAxWKtJZos9rkgxPAR7FCCoBdS1XX1tr5oTHgV66POfRUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDBHL%2BjTj9umRDHYKgSrcA822MRSUv1Cp21jGk7j1ZEplGH3xGTBhgMJkHif8TaTyP%2FKz4BxASmAfPvUBZ8QZjvTHTe0lMXbU6X312nkvij5y2OrcMSreoSDFLwpsvzO4uJsEgjI%2F0c563f2jJxywpKCeiLIpKDPv5SA%2B6cqo8cVk%2BucB6TDPl%2BXxeokdSSU3YKgsuSs%2B53L%2Bs5COt9346tt62WSmw9gZ10P6x%2B4%2FbMErBD05RgZKIkU3J%2F%2FL9BXVbmOQMeS8ClFox1ODqj5ldcUe1S0P1DJ%2FO5svwpRNf3kqBwURYmrbH28qXOEzTbxPozvKeWzUoINBCs10or3wnhfJ8%2BA2O2I6MKggZFrK%2Bb9GN7ME2M7d%2F5f0hRuVR%2F5es2U%2FIZExtM11uf2VqPg1L4UCpB5hFFI2MBwCWnQACp%2F5hgwmCwRxlc4BHsqrjHCMattbZtB7dXlnPkC%2Fj%2Fi5fZQCaUhZtaj5O3JfYPtQLgtn9E%2FvMOAAxXlBN%2FR1GpFMUTqiwLkbQA3K3fsU1ZFOAQ5Li6tBvQ8wjJ0VU1qIw1%2FGP1FytZvgbV2BS6ROy8XdvmnjFL%2Bp7Mai2BBIoiiB2TV4mVTX0%2FESOxjWAeo61HnNtAJv%2FJqQ1K%2F3o%2BvfkoO3bPNhyUkgGED1j1SlMLfK%2B8QGOqUBpgUVRhF5M7kp0Ev6l6Qjv79TGr1o9iYvzxrhABimBEHlmTF5Lf7%2FizrvLvsTbJY9GIIviSh%2F%2BipDbhoq31FxIJ%2FgdjpjPoFxY8EH2LuMYq4xgfJhLPFrA4DnaCL1TcSsq%2FOmF%2FMlszFos2PyvUpE%2BSQBWm6gd6iEtg8VXE%2BVYC4aaI0SbZ2KcHgtYlfpoBgmjM%2F%2FxNSvQygnJAKSpZoE8DSfYfES&X-Amz-Signature=97544851629c7a2d8dd5f658776125613620df8f16dd70cf16f27d30f069fb36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ7ZLOQO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDtGkPIpm15JMmY1PRraALaF8vlOCkYd3TDnZ%2F9rlClrAiEA%2Fz4eXBJdWBvDouDxih6ce4OxgVpxxK8J6nfr1kQBJ1Iq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOfzx8jiC4wOBlqdISrcA0xL%2F3ioyDsDzquUy8LoCWfKiZYnjNGW5%2BRZRoXNyyo0h4J9bUSfkGktaRYQz6oPLLA24Bn47%2FWpSF%2B4DhZ1E3G8QRBVNDHYjn%2Fw8LIy%2F4Mry1ixyOmiVqpBnNN4rv3ZL62TZE80Ay2WjkWVF5VnMAJZO7G84mTMI1v9jKxjLt%2BFrGriQNVR%2FNuxTN%2BnEcRhqfn95QwjmlxX1z4jAiP1a96xYCRrmUNEvI4V%2FjQHwuwBX8Wa9MXnbEyAY0sSnB3gRqRR62E%2FgF%2BkQOAyYbMQ517UhnBbxYw7fVbho%2BVH1IM2lMQfjQFf7Wq5wOtpnGgvOn6BQET9%2B3Clo6pAuy%2BMqI0VmEYs6YJGsfrW5jBMx3GmfeEJ3iy3mWDDK2NKXdyb4w6Zo0YDxzBbYqxHemAEH4ljuR2LjZEUwwOhBmYlPlelatjfLnmZ32FaQhOmnwPC0rXdg0dxIq%2BAiBT%2Bz%2FyTGDZbDHGvMlpNAjM5xj3fTt7muw8GUbFDZoq0q1glBJo1W833pzqZBqLw0KApjkzUBBQJ4AaN%2FiloLf04PAGxH%2B01g%2BESNYraFZknRIVH9oEvshkrzDgnyhFVUeZ%2BmH0NhvaU89zrVvt5ffPDDZu0WZWqZagjGDElgsNkfqUbMLHK%2B8QGOqUBiUfnob1V7CcdrWTGZKmmmOpsRcl%2FO3rAZ9oGYuhe7BtEjDGyAnmMdV%2FUERybjBIURnHK584C1Moz%2BtJObxTMV71WYGJXdzFy%2BGfxdcpl9fncNvf8HoSJn7AiZE0Ykq7FnMx6DZw%2B3ei0phpJMsuYIDeZtHAVTGtJTHnOXzGaYASLInzksmCHZEEvHI7nMuuAHhdLUDE4TtbZ%2B8eCMF0GgLDWNYii&X-Amz-Signature=9e0e26737e11614277a496b217f8aa4cba2d1a731f6a4e33a0805189fe88c78d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HCQK2NM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDdvJfx%2FgCxAEn%2FZJqpkCqkuu3EhGrwNJXyfrYO2PHPjQIhALS%2FEYLgtCSINqKAD1clCLvas2p08r0pHB%2FAUgnGXAwOKv8DCFkQABoMNjM3NDIzMTgzODA1IgzG7Z8xeJUMZyocDC8q3AODwgiiO69%2BSHQuLZ4tZA56b5Js3X%2By3Wg0O7e%2Ba07lFTHCgxU%2B721VPxmz7zqiSaBilbNosuujML%2B%2FsinMF2AMo%2BNOHaWLbd8HxUxIF4pQq%2FD15RMu31lIbVazPhh6jU4d08Opp4D88wqZhmCq4M51Mm%2BslZT5BjI73rgTjpVN05ZtHr44Th4tPq5ac6aM3IMSpGzupKzdaEnXxEw6%2B%2BO9nNflMdF6HgoF13rmQE3vWqUHfTE%2BDdX1R11O0i3FrSRIg8G0t%2FjhDNg8Xuze873zPNEHthyXnN%2FHuDTJtUQSHP5IxWc8ePhjGVPv8NRmvUH0si99hl1ewySJokSe4NrNjbtKPIxaCfydJFipPhUyZl7AqWHUWJLHzGM0PbMxIZ6swwx05w4WMDm8cG4pCo9MrRQmlQyQM%2FzkGpTO8X%2FLal%2BTOEERd3JyzVJqmI%2Be8od5AnfwOR4C7Kuy%2F%2ByvyWvOs2STqulaoPngLXT3OuCNnr5h4pIaifykJwL5u3emzphwe4AfOkwuGYk3Mb8%2FdYBcvGUCvKxXXuPeT9ahtRWsi%2FMtKvyn4HMyY7VwohRAW%2BvR8wkz6oRySbPHbkYpuH431YoZog9jEnn0trjtEtImzaUYYW8jf5YgNFY02DD0yvvEBjqkAXCjWhMxjlIoWRA5gGKB4BDDHJdNm7HkghsBMvWe4hmi5gk9YyT9iH0dSMACrez5dPniKN0NqdhTYosS4hq90hPOq2dRIszPn6rDgaGpFHNKUW4%2B3zjORcI%2Bt3ENRhXyv%2BPYNeGNGnOSN0ecZa9Xul5nvQc10dUnC%2BW6OIkY3sjxGurjpi4t3P9g7JhZlD6CrGdoTTr9clPxcpyCeOBemIuD3PnE&X-Amz-Signature=54aa8c261ad5658a1588cc3c5c246027c3ea21a5e7a16bd2f806cff408a84f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPW2O7WG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFMbG99pySUzISw2A7FhgXYV6xoL%2FOr2h3LaxWZHELKOAiEAwPhQxS0lANnZYdnb0nXAaJexXyEki1kzUO%2BqXOxiYAcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLcZfWJC0DQ3WZDyYSrcAy9cqJS%2Bu5vmCf9Z%2BC3KKNSsD9HDTM2uL96N48HUe%2BXN571MFsqrzSl4375eB9VJPosnwae0K2S0ggBpTZZXrXGdcyROhB5sS4c%2FlfrCe54jRdSeN6d42%2BezJ2ZN7RJKiM%2BaiiLC%2FJ8tHHAGVRE7Lr1gbETqU9lk0MsVFXsjEEzYiVV%2B09wpXIZ1Te0lZEgbIs%2B9muUdaj39SHaAiyADYc00flsYBV1nSqHyoWEy3qSJs65zpPVEoR4%2BmEEpOc%2BSfmPw9gC9oMa88mHk90Lp1KhBMr1sZppC24L2tl71G7F5EG5dJDlWlkmChSYjGoiwQFv7DYyAzLMAZ4fTBEZob1lg9hMls7KiKqmxu4gq4I6FWR5uhhUPnt01YpcL56tzmMJCURheELNFYFQ7ycBxl8cWTLY1WqodeyhhoY4QUe%2Bvr1Hcw5Y7iKlDA1UJbfKb0tzUthOUhOR0jPRAvlFYUwFAc9j%2B4UNnIozUOrchhb9QunC%2BIcCJMr3kEXcp8q0KR8I2RUoJz5KStM3j5eIlQ0WA9Mr6DQ%2FUPqjNlsYBepL2jFGp7rIB639oIly5jDQnofE8d%2BIDCv06lnhJ95tFUNM6K3amJjvr%2FWUQZycm0Q3f26W60s%2Blh4zrm7fIMMfK%2B8QGOqUBO4OCS07wdpvZlCwHXBL9yUQ7IydBe0mbuRio7ItX%2F0PWKAtYzvJuRju%2BHg7hiz7u3CslBAtTTw8emWs%2Fm0f9g6d8ntjkW9c38OE%2FLJ3sN1ssed9%2FqLOHnW7PFURULXcfuFs0YYb%2FnhC9iqPsmFUsMxXR38fy6qsKijl2QbuskPpjQ25z%2F9vxp1ctAH9lli%2FHxlMaN%2BI%2FV4JFL4qwJmZQfGfPRkzQ&X-Amz-Signature=2fd90359210d61dd6921ca17c7926c38e70563f8c80f7592b12e2619acbb9544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPW2O7WG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFMbG99pySUzISw2A7FhgXYV6xoL%2FOr2h3LaxWZHELKOAiEAwPhQxS0lANnZYdnb0nXAaJexXyEki1kzUO%2BqXOxiYAcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLcZfWJC0DQ3WZDyYSrcAy9cqJS%2Bu5vmCf9Z%2BC3KKNSsD9HDTM2uL96N48HUe%2BXN571MFsqrzSl4375eB9VJPosnwae0K2S0ggBpTZZXrXGdcyROhB5sS4c%2FlfrCe54jRdSeN6d42%2BezJ2ZN7RJKiM%2BaiiLC%2FJ8tHHAGVRE7Lr1gbETqU9lk0MsVFXsjEEzYiVV%2B09wpXIZ1Te0lZEgbIs%2B9muUdaj39SHaAiyADYc00flsYBV1nSqHyoWEy3qSJs65zpPVEoR4%2BmEEpOc%2BSfmPw9gC9oMa88mHk90Lp1KhBMr1sZppC24L2tl71G7F5EG5dJDlWlkmChSYjGoiwQFv7DYyAzLMAZ4fTBEZob1lg9hMls7KiKqmxu4gq4I6FWR5uhhUPnt01YpcL56tzmMJCURheELNFYFQ7ycBxl8cWTLY1WqodeyhhoY4QUe%2Bvr1Hcw5Y7iKlDA1UJbfKb0tzUthOUhOR0jPRAvlFYUwFAc9j%2B4UNnIozUOrchhb9QunC%2BIcCJMr3kEXcp8q0KR8I2RUoJz5KStM3j5eIlQ0WA9Mr6DQ%2FUPqjNlsYBepL2jFGp7rIB639oIly5jDQnofE8d%2BIDCv06lnhJ95tFUNM6K3amJjvr%2FWUQZycm0Q3f26W60s%2Blh4zrm7fIMMfK%2B8QGOqUBO4OCS07wdpvZlCwHXBL9yUQ7IydBe0mbuRio7ItX%2F0PWKAtYzvJuRju%2BHg7hiz7u3CslBAtTTw8emWs%2Fm0f9g6d8ntjkW9c38OE%2FLJ3sN1ssed9%2FqLOHnW7PFURULXcfuFs0YYb%2FnhC9iqPsmFUsMxXR38fy6qsKijl2QbuskPpjQ25z%2F9vxp1ctAH9lli%2FHxlMaN%2BI%2FV4JFL4qwJmZQfGfPRkzQ&X-Amz-Signature=0f8aa99138fcc9f8719b94c7e0279d5489a636adf34e2f584521aab113ef9033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZHN6NGL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2FcEJi3YFAsQMrU1aLBK5GYwzWxVLgPr8ZBUasbuBImQIgD0IShc73OyYTN%2FypPCyOpzQ9lXYTTCs1I7hAVsuRVhkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNiyxlQP%2F%2BFcJ0IDWyrcA00gg3FOulXeZy4iYO21Ako9yTZhUUA9kgw0EtrlYrgfjh5kAaW8SC7krE0y5%2F0oWRqeh5ZUNkDB9pK6%2Fo%2FcNrUQ0SxOMP1R9TOjsxgDQEQhxnJA5O2JPHvcElKLRYwCdpmcFa%2B1B0X175c70Dn8Cw3HVXjsdZ0l9MV1QaQgQ60ylwOZpIH1EjBz2B85oi9Yo12PDR%2FIVBuAt0c1hMtkVL6noPIAwN9SC8Cok6UCsV6u9BkYCSp%2FpF%2F8nWtqUp8oXgit1aBjJIzjw8YWcssG3oj3enW%2BKs0dxYlg05Z2n1B3oKOY3mRMkhGHep9W4gbDIEhbD4LT2eWXLmpjZhpBf4ySVpeKnfM6Z1YQRhqMpuA8pfdj7ST5z5ep0WDqWC4%2BFI%2F4KB2QO7SDBfN6Y0IpJWyAhhtiaQAIgNV1ItfoxSjdL6RsQV7fOKAzkutWLfjmhZk2AFKNzEGQJYBtQMYRTYAfQoi1VqR36iXC%2BBDMugruwvLifxn83wzn4zgfnTSXd8pbzqWE7agrDU8USnicIRnmpgzyO2H%2BswWVNusuq%2BS8dpCRIyHj5ntmERL2u5fhYSa7NQJMrWODSfgOt4GkLir9rjeCiyjzImb%2B0o1%2FcDvnlzC6EMYcoMY%2FRMzIMKfK%2B8QGOqUBfoNpxt8bJsU%2BqTMDGz0AYxxUxZlLs15D64ZnRh5JT7KV9eB2qxmAw3smRN2ekVbTIyHnrWxYULcrmXXBqi6EzIbkOA7SnVukBmEWpaj2rZFU59HwnaOWJahHqem6%2BZBWmN3o48sIQcp5j6Hc4uUvML0APo0ewK1VODevxgpKm6JZ5u%2BWvBHIzkjXpNwYbX%2BIuKvPkjsOTLQXKpDGNHk9Lf79ml43&X-Amz-Signature=f3e059b9d157e889127f7cbd2279e40467a8e6d953088c5cbc01426e12ad5d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZHN6NGL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2FcEJi3YFAsQMrU1aLBK5GYwzWxVLgPr8ZBUasbuBImQIgD0IShc73OyYTN%2FypPCyOpzQ9lXYTTCs1I7hAVsuRVhkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNiyxlQP%2F%2BFcJ0IDWyrcA00gg3FOulXeZy4iYO21Ako9yTZhUUA9kgw0EtrlYrgfjh5kAaW8SC7krE0y5%2F0oWRqeh5ZUNkDB9pK6%2Fo%2FcNrUQ0SxOMP1R9TOjsxgDQEQhxnJA5O2JPHvcElKLRYwCdpmcFa%2B1B0X175c70Dn8Cw3HVXjsdZ0l9MV1QaQgQ60ylwOZpIH1EjBz2B85oi9Yo12PDR%2FIVBuAt0c1hMtkVL6noPIAwN9SC8Cok6UCsV6u9BkYCSp%2FpF%2F8nWtqUp8oXgit1aBjJIzjw8YWcssG3oj3enW%2BKs0dxYlg05Z2n1B3oKOY3mRMkhGHep9W4gbDIEhbD4LT2eWXLmpjZhpBf4ySVpeKnfM6Z1YQRhqMpuA8pfdj7ST5z5ep0WDqWC4%2BFI%2F4KB2QO7SDBfN6Y0IpJWyAhhtiaQAIgNV1ItfoxSjdL6RsQV7fOKAzkutWLfjmhZk2AFKNzEGQJYBtQMYRTYAfQoi1VqR36iXC%2BBDMugruwvLifxn83wzn4zgfnTSXd8pbzqWE7agrDU8USnicIRnmpgzyO2H%2BswWVNusuq%2BS8dpCRIyHj5ntmERL2u5fhYSa7NQJMrWODSfgOt4GkLir9rjeCiyjzImb%2B0o1%2FcDvnlzC6EMYcoMY%2FRMzIMKfK%2B8QGOqUBfoNpxt8bJsU%2BqTMDGz0AYxxUxZlLs15D64ZnRh5JT7KV9eB2qxmAw3smRN2ekVbTIyHnrWxYULcrmXXBqi6EzIbkOA7SnVukBmEWpaj2rZFU59HwnaOWJahHqem6%2BZBWmN3o48sIQcp5j6Hc4uUvML0APo0ewK1VODevxgpKm6JZ5u%2BWvBHIzkjXpNwYbX%2BIuKvPkjsOTLQXKpDGNHk9Lf79ml43&X-Amz-Signature=117695d2a85af0a280d01d51275651a2828bba53ef3e7ab87f5af53871951a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZHN6NGL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2FcEJi3YFAsQMrU1aLBK5GYwzWxVLgPr8ZBUasbuBImQIgD0IShc73OyYTN%2FypPCyOpzQ9lXYTTCs1I7hAVsuRVhkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNiyxlQP%2F%2BFcJ0IDWyrcA00gg3FOulXeZy4iYO21Ako9yTZhUUA9kgw0EtrlYrgfjh5kAaW8SC7krE0y5%2F0oWRqeh5ZUNkDB9pK6%2Fo%2FcNrUQ0SxOMP1R9TOjsxgDQEQhxnJA5O2JPHvcElKLRYwCdpmcFa%2B1B0X175c70Dn8Cw3HVXjsdZ0l9MV1QaQgQ60ylwOZpIH1EjBz2B85oi9Yo12PDR%2FIVBuAt0c1hMtkVL6noPIAwN9SC8Cok6UCsV6u9BkYCSp%2FpF%2F8nWtqUp8oXgit1aBjJIzjw8YWcssG3oj3enW%2BKs0dxYlg05Z2n1B3oKOY3mRMkhGHep9W4gbDIEhbD4LT2eWXLmpjZhpBf4ySVpeKnfM6Z1YQRhqMpuA8pfdj7ST5z5ep0WDqWC4%2BFI%2F4KB2QO7SDBfN6Y0IpJWyAhhtiaQAIgNV1ItfoxSjdL6RsQV7fOKAzkutWLfjmhZk2AFKNzEGQJYBtQMYRTYAfQoi1VqR36iXC%2BBDMugruwvLifxn83wzn4zgfnTSXd8pbzqWE7agrDU8USnicIRnmpgzyO2H%2BswWVNusuq%2BS8dpCRIyHj5ntmERL2u5fhYSa7NQJMrWODSfgOt4GkLir9rjeCiyjzImb%2B0o1%2FcDvnlzC6EMYcoMY%2FRMzIMKfK%2B8QGOqUBfoNpxt8bJsU%2BqTMDGz0AYxxUxZlLs15D64ZnRh5JT7KV9eB2qxmAw3smRN2ekVbTIyHnrWxYULcrmXXBqi6EzIbkOA7SnVukBmEWpaj2rZFU59HwnaOWJahHqem6%2BZBWmN3o48sIQcp5j6Hc4uUvML0APo0ewK1VODevxgpKm6JZ5u%2BWvBHIzkjXpNwYbX%2BIuKvPkjsOTLQXKpDGNHk9Lf79ml43&X-Amz-Signature=9d3bfdd2759309825d8920433746759563d9901babb3ab1fdbb1158bfa40a462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZHN6NGL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2FcEJi3YFAsQMrU1aLBK5GYwzWxVLgPr8ZBUasbuBImQIgD0IShc73OyYTN%2FypPCyOpzQ9lXYTTCs1I7hAVsuRVhkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNiyxlQP%2F%2BFcJ0IDWyrcA00gg3FOulXeZy4iYO21Ako9yTZhUUA9kgw0EtrlYrgfjh5kAaW8SC7krE0y5%2F0oWRqeh5ZUNkDB9pK6%2Fo%2FcNrUQ0SxOMP1R9TOjsxgDQEQhxnJA5O2JPHvcElKLRYwCdpmcFa%2B1B0X175c70Dn8Cw3HVXjsdZ0l9MV1QaQgQ60ylwOZpIH1EjBz2B85oi9Yo12PDR%2FIVBuAt0c1hMtkVL6noPIAwN9SC8Cok6UCsV6u9BkYCSp%2FpF%2F8nWtqUp8oXgit1aBjJIzjw8YWcssG3oj3enW%2BKs0dxYlg05Z2n1B3oKOY3mRMkhGHep9W4gbDIEhbD4LT2eWXLmpjZhpBf4ySVpeKnfM6Z1YQRhqMpuA8pfdj7ST5z5ep0WDqWC4%2BFI%2F4KB2QO7SDBfN6Y0IpJWyAhhtiaQAIgNV1ItfoxSjdL6RsQV7fOKAzkutWLfjmhZk2AFKNzEGQJYBtQMYRTYAfQoi1VqR36iXC%2BBDMugruwvLifxn83wzn4zgfnTSXd8pbzqWE7agrDU8USnicIRnmpgzyO2H%2BswWVNusuq%2BS8dpCRIyHj5ntmERL2u5fhYSa7NQJMrWODSfgOt4GkLir9rjeCiyjzImb%2B0o1%2FcDvnlzC6EMYcoMY%2FRMzIMKfK%2B8QGOqUBfoNpxt8bJsU%2BqTMDGz0AYxxUxZlLs15D64ZnRh5JT7KV9eB2qxmAw3smRN2ekVbTIyHnrWxYULcrmXXBqi6EzIbkOA7SnVukBmEWpaj2rZFU59HwnaOWJahHqem6%2BZBWmN3o48sIQcp5j6Hc4uUvML0APo0ewK1VODevxgpKm6JZ5u%2BWvBHIzkjXpNwYbX%2BIuKvPkjsOTLQXKpDGNHk9Lf79ml43&X-Amz-Signature=be07a9d3a5b4c2f51739192bdb263f7c7bbe0433149cabb57e68f8a4467466e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZHN6NGL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2FcEJi3YFAsQMrU1aLBK5GYwzWxVLgPr8ZBUasbuBImQIgD0IShc73OyYTN%2FypPCyOpzQ9lXYTTCs1I7hAVsuRVhkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNiyxlQP%2F%2BFcJ0IDWyrcA00gg3FOulXeZy4iYO21Ako9yTZhUUA9kgw0EtrlYrgfjh5kAaW8SC7krE0y5%2F0oWRqeh5ZUNkDB9pK6%2Fo%2FcNrUQ0SxOMP1R9TOjsxgDQEQhxnJA5O2JPHvcElKLRYwCdpmcFa%2B1B0X175c70Dn8Cw3HVXjsdZ0l9MV1QaQgQ60ylwOZpIH1EjBz2B85oi9Yo12PDR%2FIVBuAt0c1hMtkVL6noPIAwN9SC8Cok6UCsV6u9BkYCSp%2FpF%2F8nWtqUp8oXgit1aBjJIzjw8YWcssG3oj3enW%2BKs0dxYlg05Z2n1B3oKOY3mRMkhGHep9W4gbDIEhbD4LT2eWXLmpjZhpBf4ySVpeKnfM6Z1YQRhqMpuA8pfdj7ST5z5ep0WDqWC4%2BFI%2F4KB2QO7SDBfN6Y0IpJWyAhhtiaQAIgNV1ItfoxSjdL6RsQV7fOKAzkutWLfjmhZk2AFKNzEGQJYBtQMYRTYAfQoi1VqR36iXC%2BBDMugruwvLifxn83wzn4zgfnTSXd8pbzqWE7agrDU8USnicIRnmpgzyO2H%2BswWVNusuq%2BS8dpCRIyHj5ntmERL2u5fhYSa7NQJMrWODSfgOt4GkLir9rjeCiyjzImb%2B0o1%2FcDvnlzC6EMYcoMY%2FRMzIMKfK%2B8QGOqUBfoNpxt8bJsU%2BqTMDGz0AYxxUxZlLs15D64ZnRh5JT7KV9eB2qxmAw3smRN2ekVbTIyHnrWxYULcrmXXBqi6EzIbkOA7SnVukBmEWpaj2rZFU59HwnaOWJahHqem6%2BZBWmN3o48sIQcp5j6Hc4uUvML0APo0ewK1VODevxgpKm6JZ5u%2BWvBHIzkjXpNwYbX%2BIuKvPkjsOTLQXKpDGNHk9Lf79ml43&X-Amz-Signature=228a47e687bb50a5ee1a0d0738f2830e47cb5ea984b0415e8c65a2a9066e7583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZHN6NGL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2FcEJi3YFAsQMrU1aLBK5GYwzWxVLgPr8ZBUasbuBImQIgD0IShc73OyYTN%2FypPCyOpzQ9lXYTTCs1I7hAVsuRVhkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNiyxlQP%2F%2BFcJ0IDWyrcA00gg3FOulXeZy4iYO21Ako9yTZhUUA9kgw0EtrlYrgfjh5kAaW8SC7krE0y5%2F0oWRqeh5ZUNkDB9pK6%2Fo%2FcNrUQ0SxOMP1R9TOjsxgDQEQhxnJA5O2JPHvcElKLRYwCdpmcFa%2B1B0X175c70Dn8Cw3HVXjsdZ0l9MV1QaQgQ60ylwOZpIH1EjBz2B85oi9Yo12PDR%2FIVBuAt0c1hMtkVL6noPIAwN9SC8Cok6UCsV6u9BkYCSp%2FpF%2F8nWtqUp8oXgit1aBjJIzjw8YWcssG3oj3enW%2BKs0dxYlg05Z2n1B3oKOY3mRMkhGHep9W4gbDIEhbD4LT2eWXLmpjZhpBf4ySVpeKnfM6Z1YQRhqMpuA8pfdj7ST5z5ep0WDqWC4%2BFI%2F4KB2QO7SDBfN6Y0IpJWyAhhtiaQAIgNV1ItfoxSjdL6RsQV7fOKAzkutWLfjmhZk2AFKNzEGQJYBtQMYRTYAfQoi1VqR36iXC%2BBDMugruwvLifxn83wzn4zgfnTSXd8pbzqWE7agrDU8USnicIRnmpgzyO2H%2BswWVNusuq%2BS8dpCRIyHj5ntmERL2u5fhYSa7NQJMrWODSfgOt4GkLir9rjeCiyjzImb%2B0o1%2FcDvnlzC6EMYcoMY%2FRMzIMKfK%2B8QGOqUBfoNpxt8bJsU%2BqTMDGz0AYxxUxZlLs15D64ZnRh5JT7KV9eB2qxmAw3smRN2ekVbTIyHnrWxYULcrmXXBqi6EzIbkOA7SnVukBmEWpaj2rZFU59HwnaOWJahHqem6%2BZBWmN3o48sIQcp5j6Hc4uUvML0APo0ewK1VODevxgpKm6JZ5u%2BWvBHIzkjXpNwYbX%2BIuKvPkjsOTLQXKpDGNHk9Lf79ml43&X-Amz-Signature=057b5de8ba8f884a9da2a81118985fd1e83295d38ba76a979f82ad3369f8d190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZHN6NGL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2FcEJi3YFAsQMrU1aLBK5GYwzWxVLgPr8ZBUasbuBImQIgD0IShc73OyYTN%2FypPCyOpzQ9lXYTTCs1I7hAVsuRVhkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNiyxlQP%2F%2BFcJ0IDWyrcA00gg3FOulXeZy4iYO21Ako9yTZhUUA9kgw0EtrlYrgfjh5kAaW8SC7krE0y5%2F0oWRqeh5ZUNkDB9pK6%2Fo%2FcNrUQ0SxOMP1R9TOjsxgDQEQhxnJA5O2JPHvcElKLRYwCdpmcFa%2B1B0X175c70Dn8Cw3HVXjsdZ0l9MV1QaQgQ60ylwOZpIH1EjBz2B85oi9Yo12PDR%2FIVBuAt0c1hMtkVL6noPIAwN9SC8Cok6UCsV6u9BkYCSp%2FpF%2F8nWtqUp8oXgit1aBjJIzjw8YWcssG3oj3enW%2BKs0dxYlg05Z2n1B3oKOY3mRMkhGHep9W4gbDIEhbD4LT2eWXLmpjZhpBf4ySVpeKnfM6Z1YQRhqMpuA8pfdj7ST5z5ep0WDqWC4%2BFI%2F4KB2QO7SDBfN6Y0IpJWyAhhtiaQAIgNV1ItfoxSjdL6RsQV7fOKAzkutWLfjmhZk2AFKNzEGQJYBtQMYRTYAfQoi1VqR36iXC%2BBDMugruwvLifxn83wzn4zgfnTSXd8pbzqWE7agrDU8USnicIRnmpgzyO2H%2BswWVNusuq%2BS8dpCRIyHj5ntmERL2u5fhYSa7NQJMrWODSfgOt4GkLir9rjeCiyjzImb%2B0o1%2FcDvnlzC6EMYcoMY%2FRMzIMKfK%2B8QGOqUBfoNpxt8bJsU%2BqTMDGz0AYxxUxZlLs15D64ZnRh5JT7KV9eB2qxmAw3smRN2ekVbTIyHnrWxYULcrmXXBqi6EzIbkOA7SnVukBmEWpaj2rZFU59HwnaOWJahHqem6%2BZBWmN3o48sIQcp5j6Hc4uUvML0APo0ewK1VODevxgpKm6JZ5u%2BWvBHIzkjXpNwYbX%2BIuKvPkjsOTLQXKpDGNHk9Lf79ml43&X-Amz-Signature=9d3bfdd2759309825d8920433746759563d9901babb3ab1fdbb1158bfa40a462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZHN6NGL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2FcEJi3YFAsQMrU1aLBK5GYwzWxVLgPr8ZBUasbuBImQIgD0IShc73OyYTN%2FypPCyOpzQ9lXYTTCs1I7hAVsuRVhkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNiyxlQP%2F%2BFcJ0IDWyrcA00gg3FOulXeZy4iYO21Ako9yTZhUUA9kgw0EtrlYrgfjh5kAaW8SC7krE0y5%2F0oWRqeh5ZUNkDB9pK6%2Fo%2FcNrUQ0SxOMP1R9TOjsxgDQEQhxnJA5O2JPHvcElKLRYwCdpmcFa%2B1B0X175c70Dn8Cw3HVXjsdZ0l9MV1QaQgQ60ylwOZpIH1EjBz2B85oi9Yo12PDR%2FIVBuAt0c1hMtkVL6noPIAwN9SC8Cok6UCsV6u9BkYCSp%2FpF%2F8nWtqUp8oXgit1aBjJIzjw8YWcssG3oj3enW%2BKs0dxYlg05Z2n1B3oKOY3mRMkhGHep9W4gbDIEhbD4LT2eWXLmpjZhpBf4ySVpeKnfM6Z1YQRhqMpuA8pfdj7ST5z5ep0WDqWC4%2BFI%2F4KB2QO7SDBfN6Y0IpJWyAhhtiaQAIgNV1ItfoxSjdL6RsQV7fOKAzkutWLfjmhZk2AFKNzEGQJYBtQMYRTYAfQoi1VqR36iXC%2BBDMugruwvLifxn83wzn4zgfnTSXd8pbzqWE7agrDU8USnicIRnmpgzyO2H%2BswWVNusuq%2BS8dpCRIyHj5ntmERL2u5fhYSa7NQJMrWODSfgOt4GkLir9rjeCiyjzImb%2B0o1%2FcDvnlzC6EMYcoMY%2FRMzIMKfK%2B8QGOqUBfoNpxt8bJsU%2BqTMDGz0AYxxUxZlLs15D64ZnRh5JT7KV9eB2qxmAw3smRN2ekVbTIyHnrWxYULcrmXXBqi6EzIbkOA7SnVukBmEWpaj2rZFU59HwnaOWJahHqem6%2BZBWmN3o48sIQcp5j6Hc4uUvML0APo0ewK1VODevxgpKm6JZ5u%2BWvBHIzkjXpNwYbX%2BIuKvPkjsOTLQXKpDGNHk9Lf79ml43&X-Amz-Signature=838a4e8f79c622bad544c1b964bb7a324daa1db82b56ebfeef2933c9d78d27e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZHN6NGL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2FcEJi3YFAsQMrU1aLBK5GYwzWxVLgPr8ZBUasbuBImQIgD0IShc73OyYTN%2FypPCyOpzQ9lXYTTCs1I7hAVsuRVhkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNiyxlQP%2F%2BFcJ0IDWyrcA00gg3FOulXeZy4iYO21Ako9yTZhUUA9kgw0EtrlYrgfjh5kAaW8SC7krE0y5%2F0oWRqeh5ZUNkDB9pK6%2Fo%2FcNrUQ0SxOMP1R9TOjsxgDQEQhxnJA5O2JPHvcElKLRYwCdpmcFa%2B1B0X175c70Dn8Cw3HVXjsdZ0l9MV1QaQgQ60ylwOZpIH1EjBz2B85oi9Yo12PDR%2FIVBuAt0c1hMtkVL6noPIAwN9SC8Cok6UCsV6u9BkYCSp%2FpF%2F8nWtqUp8oXgit1aBjJIzjw8YWcssG3oj3enW%2BKs0dxYlg05Z2n1B3oKOY3mRMkhGHep9W4gbDIEhbD4LT2eWXLmpjZhpBf4ySVpeKnfM6Z1YQRhqMpuA8pfdj7ST5z5ep0WDqWC4%2BFI%2F4KB2QO7SDBfN6Y0IpJWyAhhtiaQAIgNV1ItfoxSjdL6RsQV7fOKAzkutWLfjmhZk2AFKNzEGQJYBtQMYRTYAfQoi1VqR36iXC%2BBDMugruwvLifxn83wzn4zgfnTSXd8pbzqWE7agrDU8USnicIRnmpgzyO2H%2BswWVNusuq%2BS8dpCRIyHj5ntmERL2u5fhYSa7NQJMrWODSfgOt4GkLir9rjeCiyjzImb%2B0o1%2FcDvnlzC6EMYcoMY%2FRMzIMKfK%2B8QGOqUBfoNpxt8bJsU%2BqTMDGz0AYxxUxZlLs15D64ZnRh5JT7KV9eB2qxmAw3smRN2ekVbTIyHnrWxYULcrmXXBqi6EzIbkOA7SnVukBmEWpaj2rZFU59HwnaOWJahHqem6%2BZBWmN3o48sIQcp5j6Hc4uUvML0APo0ewK1VODevxgpKm6JZ5u%2BWvBHIzkjXpNwYbX%2BIuKvPkjsOTLQXKpDGNHk9Lf79ml43&X-Amz-Signature=01a8da36dee8026291b0fc92660aaab4585315c5a596b84446994fd54999377b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZHN6NGL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC%2FcEJi3YFAsQMrU1aLBK5GYwzWxVLgPr8ZBUasbuBImQIgD0IShc73OyYTN%2FypPCyOpzQ9lXYTTCs1I7hAVsuRVhkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNiyxlQP%2F%2BFcJ0IDWyrcA00gg3FOulXeZy4iYO21Ako9yTZhUUA9kgw0EtrlYrgfjh5kAaW8SC7krE0y5%2F0oWRqeh5ZUNkDB9pK6%2Fo%2FcNrUQ0SxOMP1R9TOjsxgDQEQhxnJA5O2JPHvcElKLRYwCdpmcFa%2B1B0X175c70Dn8Cw3HVXjsdZ0l9MV1QaQgQ60ylwOZpIH1EjBz2B85oi9Yo12PDR%2FIVBuAt0c1hMtkVL6noPIAwN9SC8Cok6UCsV6u9BkYCSp%2FpF%2F8nWtqUp8oXgit1aBjJIzjw8YWcssG3oj3enW%2BKs0dxYlg05Z2n1B3oKOY3mRMkhGHep9W4gbDIEhbD4LT2eWXLmpjZhpBf4ySVpeKnfM6Z1YQRhqMpuA8pfdj7ST5z5ep0WDqWC4%2BFI%2F4KB2QO7SDBfN6Y0IpJWyAhhtiaQAIgNV1ItfoxSjdL6RsQV7fOKAzkutWLfjmhZk2AFKNzEGQJYBtQMYRTYAfQoi1VqR36iXC%2BBDMugruwvLifxn83wzn4zgfnTSXd8pbzqWE7agrDU8USnicIRnmpgzyO2H%2BswWVNusuq%2BS8dpCRIyHj5ntmERL2u5fhYSa7NQJMrWODSfgOt4GkLir9rjeCiyjzImb%2B0o1%2FcDvnlzC6EMYcoMY%2FRMzIMKfK%2B8QGOqUBfoNpxt8bJsU%2BqTMDGz0AYxxUxZlLs15D64ZnRh5JT7KV9eB2qxmAw3smRN2ekVbTIyHnrWxYULcrmXXBqi6EzIbkOA7SnVukBmEWpaj2rZFU59HwnaOWJahHqem6%2BZBWmN3o48sIQcp5j6Hc4uUvML0APo0ewK1VODevxgpKm6JZ5u%2BWvBHIzkjXpNwYbX%2BIuKvPkjsOTLQXKpDGNHk9Lf79ml43&X-Amz-Signature=e07637d32a66bf7d0def2e6a9c7d2b3653d922b09f147f237c065d9b9c298dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
