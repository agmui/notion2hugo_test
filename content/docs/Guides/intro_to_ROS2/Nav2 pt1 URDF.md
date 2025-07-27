---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYBHUXC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFHjLcy2U7m%2BFdc8deCOF1OeU%2FDSJU5akEcVUTuzWkMnAiEAsqeTdRgJfNiNZBWXru0oDj%2BE6V6cKoZRppl%2FTPCqdKEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOyn1nLDP%2BdgLl0J8CrcA6IhL6cvUcz7TJG2LEpccJAGej%2FClttq%2Fojnc%2F4N3dIz%2BsH5IzuLQJT748VGmKu9Bb3ttqI92%2BGICbamEcwSqoVeeQ%2BxOkGKmyvV5A17SrOhsDLg38cn54JBmE18joad1V34SLLgikzYuu6Eh7I%2FEytxUZnvEVLy5O8ZwsTd%2FBs%2BxHqQkvKHrf4g8KmoBCGEXfnHcJcYsGv%2FKdDkY3Vk5tt%2BiHTxtA6nwZH7aWqAHaOnsXKmXeyHjRhB3Sh%2Bt6qTJhqlk2%2Ft4SNarXVzt79frh7rb0dLz2TZumARZPoQNPRzOEHZAp3CPxeFR4xgwe92O1E61g4V59oZy0fd5mPQD2KW207xF8lczdskndBRQryMkWss%2FfcXVBZWyie4SuzkDT0ywrZO%2FkI5t5ePQwfuozPIZIHORijAflnTVSvHAWWOAR4gE77BUAPSsDbmwJ3UvC1jsALgLwVQLstLAO5LkwqjNDbqfKeWBXHVnpe21PG5D0uIAHMwmtFG7cv26aEfM8hMytLmLgSeflXrFxt%2BMkkz8L%2F24EVKItP1i287QK3gUQvF74eL7pH%2FgTw70GgtXuZCv3YKh7aoIAMBHreVtYQn7TaUvFoxUX7ngD3dvkuQUaX8rs72NTPVTYCeMKakmsQGOqUBddSQ311hAfaflp3UlCENNWRLgavl%2F3ZF0bGofIco2GGOQd3CthQg1O5jgco8d09GRqqPSGQWIjj%2BuMu5R1PfmjjftoYzkNs6xp%2B84%2BieqU66EnzDcu5Cbsc4z930Ah3qrzWbdNuYCXvSZjI3yqmrx1A%2Bhy6vOMF%2B6WkTxPDEUfGcKOSOGp65LVlksiqEFAT3UivUYuXbp35MmFmZTR4aTGoSPCDC&X-Amz-Signature=c6fc755973c320f32408060f78f4a2bcd81d5abac8fd5d471951d9f16bd00173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYBHUXC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFHjLcy2U7m%2BFdc8deCOF1OeU%2FDSJU5akEcVUTuzWkMnAiEAsqeTdRgJfNiNZBWXru0oDj%2BE6V6cKoZRppl%2FTPCqdKEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOyn1nLDP%2BdgLl0J8CrcA6IhL6cvUcz7TJG2LEpccJAGej%2FClttq%2Fojnc%2F4N3dIz%2BsH5IzuLQJT748VGmKu9Bb3ttqI92%2BGICbamEcwSqoVeeQ%2BxOkGKmyvV5A17SrOhsDLg38cn54JBmE18joad1V34SLLgikzYuu6Eh7I%2FEytxUZnvEVLy5O8ZwsTd%2FBs%2BxHqQkvKHrf4g8KmoBCGEXfnHcJcYsGv%2FKdDkY3Vk5tt%2BiHTxtA6nwZH7aWqAHaOnsXKmXeyHjRhB3Sh%2Bt6qTJhqlk2%2Ft4SNarXVzt79frh7rb0dLz2TZumARZPoQNPRzOEHZAp3CPxeFR4xgwe92O1E61g4V59oZy0fd5mPQD2KW207xF8lczdskndBRQryMkWss%2FfcXVBZWyie4SuzkDT0ywrZO%2FkI5t5ePQwfuozPIZIHORijAflnTVSvHAWWOAR4gE77BUAPSsDbmwJ3UvC1jsALgLwVQLstLAO5LkwqjNDbqfKeWBXHVnpe21PG5D0uIAHMwmtFG7cv26aEfM8hMytLmLgSeflXrFxt%2BMkkz8L%2F24EVKItP1i287QK3gUQvF74eL7pH%2FgTw70GgtXuZCv3YKh7aoIAMBHreVtYQn7TaUvFoxUX7ngD3dvkuQUaX8rs72NTPVTYCeMKakmsQGOqUBddSQ311hAfaflp3UlCENNWRLgavl%2F3ZF0bGofIco2GGOQd3CthQg1O5jgco8d09GRqqPSGQWIjj%2BuMu5R1PfmjjftoYzkNs6xp%2B84%2BieqU66EnzDcu5Cbsc4z930Ah3qrzWbdNuYCXvSZjI3yqmrx1A%2Bhy6vOMF%2B6WkTxPDEUfGcKOSOGp65LVlksiqEFAT3UivUYuXbp35MmFmZTR4aTGoSPCDC&X-Amz-Signature=30659333afc67393fb5371f04b817772f6c4526bfbf3da4e2110330f34898219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYBHUXC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFHjLcy2U7m%2BFdc8deCOF1OeU%2FDSJU5akEcVUTuzWkMnAiEAsqeTdRgJfNiNZBWXru0oDj%2BE6V6cKoZRppl%2FTPCqdKEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOyn1nLDP%2BdgLl0J8CrcA6IhL6cvUcz7TJG2LEpccJAGej%2FClttq%2Fojnc%2F4N3dIz%2BsH5IzuLQJT748VGmKu9Bb3ttqI92%2BGICbamEcwSqoVeeQ%2BxOkGKmyvV5A17SrOhsDLg38cn54JBmE18joad1V34SLLgikzYuu6Eh7I%2FEytxUZnvEVLy5O8ZwsTd%2FBs%2BxHqQkvKHrf4g8KmoBCGEXfnHcJcYsGv%2FKdDkY3Vk5tt%2BiHTxtA6nwZH7aWqAHaOnsXKmXeyHjRhB3Sh%2Bt6qTJhqlk2%2Ft4SNarXVzt79frh7rb0dLz2TZumARZPoQNPRzOEHZAp3CPxeFR4xgwe92O1E61g4V59oZy0fd5mPQD2KW207xF8lczdskndBRQryMkWss%2FfcXVBZWyie4SuzkDT0ywrZO%2FkI5t5ePQwfuozPIZIHORijAflnTVSvHAWWOAR4gE77BUAPSsDbmwJ3UvC1jsALgLwVQLstLAO5LkwqjNDbqfKeWBXHVnpe21PG5D0uIAHMwmtFG7cv26aEfM8hMytLmLgSeflXrFxt%2BMkkz8L%2F24EVKItP1i287QK3gUQvF74eL7pH%2FgTw70GgtXuZCv3YKh7aoIAMBHreVtYQn7TaUvFoxUX7ngD3dvkuQUaX8rs72NTPVTYCeMKakmsQGOqUBddSQ311hAfaflp3UlCENNWRLgavl%2F3ZF0bGofIco2GGOQd3CthQg1O5jgco8d09GRqqPSGQWIjj%2BuMu5R1PfmjjftoYzkNs6xp%2B84%2BieqU66EnzDcu5Cbsc4z930Ah3qrzWbdNuYCXvSZjI3yqmrx1A%2Bhy6vOMF%2B6WkTxPDEUfGcKOSOGp65LVlksiqEFAT3UivUYuXbp35MmFmZTR4aTGoSPCDC&X-Amz-Signature=33d1efb6d44044f15b78baa18e100395bc39d96b8429408b7bf682fd974ee364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYBHUXC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFHjLcy2U7m%2BFdc8deCOF1OeU%2FDSJU5akEcVUTuzWkMnAiEAsqeTdRgJfNiNZBWXru0oDj%2BE6V6cKoZRppl%2FTPCqdKEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOyn1nLDP%2BdgLl0J8CrcA6IhL6cvUcz7TJG2LEpccJAGej%2FClttq%2Fojnc%2F4N3dIz%2BsH5IzuLQJT748VGmKu9Bb3ttqI92%2BGICbamEcwSqoVeeQ%2BxOkGKmyvV5A17SrOhsDLg38cn54JBmE18joad1V34SLLgikzYuu6Eh7I%2FEytxUZnvEVLy5O8ZwsTd%2FBs%2BxHqQkvKHrf4g8KmoBCGEXfnHcJcYsGv%2FKdDkY3Vk5tt%2BiHTxtA6nwZH7aWqAHaOnsXKmXeyHjRhB3Sh%2Bt6qTJhqlk2%2Ft4SNarXVzt79frh7rb0dLz2TZumARZPoQNPRzOEHZAp3CPxeFR4xgwe92O1E61g4V59oZy0fd5mPQD2KW207xF8lczdskndBRQryMkWss%2FfcXVBZWyie4SuzkDT0ywrZO%2FkI5t5ePQwfuozPIZIHORijAflnTVSvHAWWOAR4gE77BUAPSsDbmwJ3UvC1jsALgLwVQLstLAO5LkwqjNDbqfKeWBXHVnpe21PG5D0uIAHMwmtFG7cv26aEfM8hMytLmLgSeflXrFxt%2BMkkz8L%2F24EVKItP1i287QK3gUQvF74eL7pH%2FgTw70GgtXuZCv3YKh7aoIAMBHreVtYQn7TaUvFoxUX7ngD3dvkuQUaX8rs72NTPVTYCeMKakmsQGOqUBddSQ311hAfaflp3UlCENNWRLgavl%2F3ZF0bGofIco2GGOQd3CthQg1O5jgco8d09GRqqPSGQWIjj%2BuMu5R1PfmjjftoYzkNs6xp%2B84%2BieqU66EnzDcu5Cbsc4z930Ah3qrzWbdNuYCXvSZjI3yqmrx1A%2Bhy6vOMF%2B6WkTxPDEUfGcKOSOGp65LVlksiqEFAT3UivUYuXbp35MmFmZTR4aTGoSPCDC&X-Amz-Signature=ed4a20715919f92f7259b1dbbc4a928af0cab0e2dab13c8c41aae40d9fdddd27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYBHUXC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFHjLcy2U7m%2BFdc8deCOF1OeU%2FDSJU5akEcVUTuzWkMnAiEAsqeTdRgJfNiNZBWXru0oDj%2BE6V6cKoZRppl%2FTPCqdKEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOyn1nLDP%2BdgLl0J8CrcA6IhL6cvUcz7TJG2LEpccJAGej%2FClttq%2Fojnc%2F4N3dIz%2BsH5IzuLQJT748VGmKu9Bb3ttqI92%2BGICbamEcwSqoVeeQ%2BxOkGKmyvV5A17SrOhsDLg38cn54JBmE18joad1V34SLLgikzYuu6Eh7I%2FEytxUZnvEVLy5O8ZwsTd%2FBs%2BxHqQkvKHrf4g8KmoBCGEXfnHcJcYsGv%2FKdDkY3Vk5tt%2BiHTxtA6nwZH7aWqAHaOnsXKmXeyHjRhB3Sh%2Bt6qTJhqlk2%2Ft4SNarXVzt79frh7rb0dLz2TZumARZPoQNPRzOEHZAp3CPxeFR4xgwe92O1E61g4V59oZy0fd5mPQD2KW207xF8lczdskndBRQryMkWss%2FfcXVBZWyie4SuzkDT0ywrZO%2FkI5t5ePQwfuozPIZIHORijAflnTVSvHAWWOAR4gE77BUAPSsDbmwJ3UvC1jsALgLwVQLstLAO5LkwqjNDbqfKeWBXHVnpe21PG5D0uIAHMwmtFG7cv26aEfM8hMytLmLgSeflXrFxt%2BMkkz8L%2F24EVKItP1i287QK3gUQvF74eL7pH%2FgTw70GgtXuZCv3YKh7aoIAMBHreVtYQn7TaUvFoxUX7ngD3dvkuQUaX8rs72NTPVTYCeMKakmsQGOqUBddSQ311hAfaflp3UlCENNWRLgavl%2F3ZF0bGofIco2GGOQd3CthQg1O5jgco8d09GRqqPSGQWIjj%2BuMu5R1PfmjjftoYzkNs6xp%2B84%2BieqU66EnzDcu5Cbsc4z930Ah3qrzWbdNuYCXvSZjI3yqmrx1A%2Bhy6vOMF%2B6WkTxPDEUfGcKOSOGp65LVlksiqEFAT3UivUYuXbp35MmFmZTR4aTGoSPCDC&X-Amz-Signature=688942995c7fdb7e737a2e8d6fd2632b8b25184f042b906acb2b74559a463785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYBHUXC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFHjLcy2U7m%2BFdc8deCOF1OeU%2FDSJU5akEcVUTuzWkMnAiEAsqeTdRgJfNiNZBWXru0oDj%2BE6V6cKoZRppl%2FTPCqdKEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOyn1nLDP%2BdgLl0J8CrcA6IhL6cvUcz7TJG2LEpccJAGej%2FClttq%2Fojnc%2F4N3dIz%2BsH5IzuLQJT748VGmKu9Bb3ttqI92%2BGICbamEcwSqoVeeQ%2BxOkGKmyvV5A17SrOhsDLg38cn54JBmE18joad1V34SLLgikzYuu6Eh7I%2FEytxUZnvEVLy5O8ZwsTd%2FBs%2BxHqQkvKHrf4g8KmoBCGEXfnHcJcYsGv%2FKdDkY3Vk5tt%2BiHTxtA6nwZH7aWqAHaOnsXKmXeyHjRhB3Sh%2Bt6qTJhqlk2%2Ft4SNarXVzt79frh7rb0dLz2TZumARZPoQNPRzOEHZAp3CPxeFR4xgwe92O1E61g4V59oZy0fd5mPQD2KW207xF8lczdskndBRQryMkWss%2FfcXVBZWyie4SuzkDT0ywrZO%2FkI5t5ePQwfuozPIZIHORijAflnTVSvHAWWOAR4gE77BUAPSsDbmwJ3UvC1jsALgLwVQLstLAO5LkwqjNDbqfKeWBXHVnpe21PG5D0uIAHMwmtFG7cv26aEfM8hMytLmLgSeflXrFxt%2BMkkz8L%2F24EVKItP1i287QK3gUQvF74eL7pH%2FgTw70GgtXuZCv3YKh7aoIAMBHreVtYQn7TaUvFoxUX7ngD3dvkuQUaX8rs72NTPVTYCeMKakmsQGOqUBddSQ311hAfaflp3UlCENNWRLgavl%2F3ZF0bGofIco2GGOQd3CthQg1O5jgco8d09GRqqPSGQWIjj%2BuMu5R1PfmjjftoYzkNs6xp%2B84%2BieqU66EnzDcu5Cbsc4z930Ah3qrzWbdNuYCXvSZjI3yqmrx1A%2Bhy6vOMF%2B6WkTxPDEUfGcKOSOGp65LVlksiqEFAT3UivUYuXbp35MmFmZTR4aTGoSPCDC&X-Amz-Signature=e6a099daf0a79cabc3faec24fdbfb64f61b870ea9dbfe5932c6de4c13422e3bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYBHUXC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFHjLcy2U7m%2BFdc8deCOF1OeU%2FDSJU5akEcVUTuzWkMnAiEAsqeTdRgJfNiNZBWXru0oDj%2BE6V6cKoZRppl%2FTPCqdKEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOyn1nLDP%2BdgLl0J8CrcA6IhL6cvUcz7TJG2LEpccJAGej%2FClttq%2Fojnc%2F4N3dIz%2BsH5IzuLQJT748VGmKu9Bb3ttqI92%2BGICbamEcwSqoVeeQ%2BxOkGKmyvV5A17SrOhsDLg38cn54JBmE18joad1V34SLLgikzYuu6Eh7I%2FEytxUZnvEVLy5O8ZwsTd%2FBs%2BxHqQkvKHrf4g8KmoBCGEXfnHcJcYsGv%2FKdDkY3Vk5tt%2BiHTxtA6nwZH7aWqAHaOnsXKmXeyHjRhB3Sh%2Bt6qTJhqlk2%2Ft4SNarXVzt79frh7rb0dLz2TZumARZPoQNPRzOEHZAp3CPxeFR4xgwe92O1E61g4V59oZy0fd5mPQD2KW207xF8lczdskndBRQryMkWss%2FfcXVBZWyie4SuzkDT0ywrZO%2FkI5t5ePQwfuozPIZIHORijAflnTVSvHAWWOAR4gE77BUAPSsDbmwJ3UvC1jsALgLwVQLstLAO5LkwqjNDbqfKeWBXHVnpe21PG5D0uIAHMwmtFG7cv26aEfM8hMytLmLgSeflXrFxt%2BMkkz8L%2F24EVKItP1i287QK3gUQvF74eL7pH%2FgTw70GgtXuZCv3YKh7aoIAMBHreVtYQn7TaUvFoxUX7ngD3dvkuQUaX8rs72NTPVTYCeMKakmsQGOqUBddSQ311hAfaflp3UlCENNWRLgavl%2F3ZF0bGofIco2GGOQd3CthQg1O5jgco8d09GRqqPSGQWIjj%2BuMu5R1PfmjjftoYzkNs6xp%2B84%2BieqU66EnzDcu5Cbsc4z930Ah3qrzWbdNuYCXvSZjI3yqmrx1A%2Bhy6vOMF%2B6WkTxPDEUfGcKOSOGp65LVlksiqEFAT3UivUYuXbp35MmFmZTR4aTGoSPCDC&X-Amz-Signature=f10632a19cf2b7377aecec3ebaccaf0fc489d4880525223c19e9b00d1c51aedf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYBHUXC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFHjLcy2U7m%2BFdc8deCOF1OeU%2FDSJU5akEcVUTuzWkMnAiEAsqeTdRgJfNiNZBWXru0oDj%2BE6V6cKoZRppl%2FTPCqdKEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOyn1nLDP%2BdgLl0J8CrcA6IhL6cvUcz7TJG2LEpccJAGej%2FClttq%2Fojnc%2F4N3dIz%2BsH5IzuLQJT748VGmKu9Bb3ttqI92%2BGICbamEcwSqoVeeQ%2BxOkGKmyvV5A17SrOhsDLg38cn54JBmE18joad1V34SLLgikzYuu6Eh7I%2FEytxUZnvEVLy5O8ZwsTd%2FBs%2BxHqQkvKHrf4g8KmoBCGEXfnHcJcYsGv%2FKdDkY3Vk5tt%2BiHTxtA6nwZH7aWqAHaOnsXKmXeyHjRhB3Sh%2Bt6qTJhqlk2%2Ft4SNarXVzt79frh7rb0dLz2TZumARZPoQNPRzOEHZAp3CPxeFR4xgwe92O1E61g4V59oZy0fd5mPQD2KW207xF8lczdskndBRQryMkWss%2FfcXVBZWyie4SuzkDT0ywrZO%2FkI5t5ePQwfuozPIZIHORijAflnTVSvHAWWOAR4gE77BUAPSsDbmwJ3UvC1jsALgLwVQLstLAO5LkwqjNDbqfKeWBXHVnpe21PG5D0uIAHMwmtFG7cv26aEfM8hMytLmLgSeflXrFxt%2BMkkz8L%2F24EVKItP1i287QK3gUQvF74eL7pH%2FgTw70GgtXuZCv3YKh7aoIAMBHreVtYQn7TaUvFoxUX7ngD3dvkuQUaX8rs72NTPVTYCeMKakmsQGOqUBddSQ311hAfaflp3UlCENNWRLgavl%2F3ZF0bGofIco2GGOQd3CthQg1O5jgco8d09GRqqPSGQWIjj%2BuMu5R1PfmjjftoYzkNs6xp%2B84%2BieqU66EnzDcu5Cbsc4z930Ah3qrzWbdNuYCXvSZjI3yqmrx1A%2Bhy6vOMF%2B6WkTxPDEUfGcKOSOGp65LVlksiqEFAT3UivUYuXbp35MmFmZTR4aTGoSPCDC&X-Amz-Signature=470e18eae2b64ad2665284616498aa115cf5b36b8314114c5f21ae205d7e40b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYBHUXC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFHjLcy2U7m%2BFdc8deCOF1OeU%2FDSJU5akEcVUTuzWkMnAiEAsqeTdRgJfNiNZBWXru0oDj%2BE6V6cKoZRppl%2FTPCqdKEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOyn1nLDP%2BdgLl0J8CrcA6IhL6cvUcz7TJG2LEpccJAGej%2FClttq%2Fojnc%2F4N3dIz%2BsH5IzuLQJT748VGmKu9Bb3ttqI92%2BGICbamEcwSqoVeeQ%2BxOkGKmyvV5A17SrOhsDLg38cn54JBmE18joad1V34SLLgikzYuu6Eh7I%2FEytxUZnvEVLy5O8ZwsTd%2FBs%2BxHqQkvKHrf4g8KmoBCGEXfnHcJcYsGv%2FKdDkY3Vk5tt%2BiHTxtA6nwZH7aWqAHaOnsXKmXeyHjRhB3Sh%2Bt6qTJhqlk2%2Ft4SNarXVzt79frh7rb0dLz2TZumARZPoQNPRzOEHZAp3CPxeFR4xgwe92O1E61g4V59oZy0fd5mPQD2KW207xF8lczdskndBRQryMkWss%2FfcXVBZWyie4SuzkDT0ywrZO%2FkI5t5ePQwfuozPIZIHORijAflnTVSvHAWWOAR4gE77BUAPSsDbmwJ3UvC1jsALgLwVQLstLAO5LkwqjNDbqfKeWBXHVnpe21PG5D0uIAHMwmtFG7cv26aEfM8hMytLmLgSeflXrFxt%2BMkkz8L%2F24EVKItP1i287QK3gUQvF74eL7pH%2FgTw70GgtXuZCv3YKh7aoIAMBHreVtYQn7TaUvFoxUX7ngD3dvkuQUaX8rs72NTPVTYCeMKakmsQGOqUBddSQ311hAfaflp3UlCENNWRLgavl%2F3ZF0bGofIco2GGOQd3CthQg1O5jgco8d09GRqqPSGQWIjj%2BuMu5R1PfmjjftoYzkNs6xp%2B84%2BieqU66EnzDcu5Cbsc4z930Ah3qrzWbdNuYCXvSZjI3yqmrx1A%2Bhy6vOMF%2B6WkTxPDEUfGcKOSOGp65LVlksiqEFAT3UivUYuXbp35MmFmZTR4aTGoSPCDC&X-Amz-Signature=0cbd61d049d1e52376cf59c164d90ffb810bb0e43aa242c27fb08da2674f1df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYBHUXC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFHjLcy2U7m%2BFdc8deCOF1OeU%2FDSJU5akEcVUTuzWkMnAiEAsqeTdRgJfNiNZBWXru0oDj%2BE6V6cKoZRppl%2FTPCqdKEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOyn1nLDP%2BdgLl0J8CrcA6IhL6cvUcz7TJG2LEpccJAGej%2FClttq%2Fojnc%2F4N3dIz%2BsH5IzuLQJT748VGmKu9Bb3ttqI92%2BGICbamEcwSqoVeeQ%2BxOkGKmyvV5A17SrOhsDLg38cn54JBmE18joad1V34SLLgikzYuu6Eh7I%2FEytxUZnvEVLy5O8ZwsTd%2FBs%2BxHqQkvKHrf4g8KmoBCGEXfnHcJcYsGv%2FKdDkY3Vk5tt%2BiHTxtA6nwZH7aWqAHaOnsXKmXeyHjRhB3Sh%2Bt6qTJhqlk2%2Ft4SNarXVzt79frh7rb0dLz2TZumARZPoQNPRzOEHZAp3CPxeFR4xgwe92O1E61g4V59oZy0fd5mPQD2KW207xF8lczdskndBRQryMkWss%2FfcXVBZWyie4SuzkDT0ywrZO%2FkI5t5ePQwfuozPIZIHORijAflnTVSvHAWWOAR4gE77BUAPSsDbmwJ3UvC1jsALgLwVQLstLAO5LkwqjNDbqfKeWBXHVnpe21PG5D0uIAHMwmtFG7cv26aEfM8hMytLmLgSeflXrFxt%2BMkkz8L%2F24EVKItP1i287QK3gUQvF74eL7pH%2FgTw70GgtXuZCv3YKh7aoIAMBHreVtYQn7TaUvFoxUX7ngD3dvkuQUaX8rs72NTPVTYCeMKakmsQGOqUBddSQ311hAfaflp3UlCENNWRLgavl%2F3ZF0bGofIco2GGOQd3CthQg1O5jgco8d09GRqqPSGQWIjj%2BuMu5R1PfmjjftoYzkNs6xp%2B84%2BieqU66EnzDcu5Cbsc4z930Ah3qrzWbdNuYCXvSZjI3yqmrx1A%2Bhy6vOMF%2B6WkTxPDEUfGcKOSOGp65LVlksiqEFAT3UivUYuXbp35MmFmZTR4aTGoSPCDC&X-Amz-Signature=b8e59d5802849ddaba3d0dde6ab2feb65b6dafb12e5e6e572f362707f4b49bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

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
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYBHUXC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFHjLcy2U7m%2BFdc8deCOF1OeU%2FDSJU5akEcVUTuzWkMnAiEAsqeTdRgJfNiNZBWXru0oDj%2BE6V6cKoZRppl%2FTPCqdKEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOyn1nLDP%2BdgLl0J8CrcA6IhL6cvUcz7TJG2LEpccJAGej%2FClttq%2Fojnc%2F4N3dIz%2BsH5IzuLQJT748VGmKu9Bb3ttqI92%2BGICbamEcwSqoVeeQ%2BxOkGKmyvV5A17SrOhsDLg38cn54JBmE18joad1V34SLLgikzYuu6Eh7I%2FEytxUZnvEVLy5O8ZwsTd%2FBs%2BxHqQkvKHrf4g8KmoBCGEXfnHcJcYsGv%2FKdDkY3Vk5tt%2BiHTxtA6nwZH7aWqAHaOnsXKmXeyHjRhB3Sh%2Bt6qTJhqlk2%2Ft4SNarXVzt79frh7rb0dLz2TZumARZPoQNPRzOEHZAp3CPxeFR4xgwe92O1E61g4V59oZy0fd5mPQD2KW207xF8lczdskndBRQryMkWss%2FfcXVBZWyie4SuzkDT0ywrZO%2FkI5t5ePQwfuozPIZIHORijAflnTVSvHAWWOAR4gE77BUAPSsDbmwJ3UvC1jsALgLwVQLstLAO5LkwqjNDbqfKeWBXHVnpe21PG5D0uIAHMwmtFG7cv26aEfM8hMytLmLgSeflXrFxt%2BMkkz8L%2F24EVKItP1i287QK3gUQvF74eL7pH%2FgTw70GgtXuZCv3YKh7aoIAMBHreVtYQn7TaUvFoxUX7ngD3dvkuQUaX8rs72NTPVTYCeMKakmsQGOqUBddSQ311hAfaflp3UlCENNWRLgavl%2F3ZF0bGofIco2GGOQd3CthQg1O5jgco8d09GRqqPSGQWIjj%2BuMu5R1PfmjjftoYzkNs6xp%2B84%2BieqU66EnzDcu5Cbsc4z930Ah3qrzWbdNuYCXvSZjI3yqmrx1A%2Bhy6vOMF%2B6WkTxPDEUfGcKOSOGp65LVlksiqEFAT3UivUYuXbp35MmFmZTR4aTGoSPCDC&X-Amz-Signature=5144fa511940d940daca0df6ceae80bce7107de170b2d2c7d2b43f39a317cb0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYBHUXC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFHjLcy2U7m%2BFdc8deCOF1OeU%2FDSJU5akEcVUTuzWkMnAiEAsqeTdRgJfNiNZBWXru0oDj%2BE6V6cKoZRppl%2FTPCqdKEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOyn1nLDP%2BdgLl0J8CrcA6IhL6cvUcz7TJG2LEpccJAGej%2FClttq%2Fojnc%2F4N3dIz%2BsH5IzuLQJT748VGmKu9Bb3ttqI92%2BGICbamEcwSqoVeeQ%2BxOkGKmyvV5A17SrOhsDLg38cn54JBmE18joad1V34SLLgikzYuu6Eh7I%2FEytxUZnvEVLy5O8ZwsTd%2FBs%2BxHqQkvKHrf4g8KmoBCGEXfnHcJcYsGv%2FKdDkY3Vk5tt%2BiHTxtA6nwZH7aWqAHaOnsXKmXeyHjRhB3Sh%2Bt6qTJhqlk2%2Ft4SNarXVzt79frh7rb0dLz2TZumARZPoQNPRzOEHZAp3CPxeFR4xgwe92O1E61g4V59oZy0fd5mPQD2KW207xF8lczdskndBRQryMkWss%2FfcXVBZWyie4SuzkDT0ywrZO%2FkI5t5ePQwfuozPIZIHORijAflnTVSvHAWWOAR4gE77BUAPSsDbmwJ3UvC1jsALgLwVQLstLAO5LkwqjNDbqfKeWBXHVnpe21PG5D0uIAHMwmtFG7cv26aEfM8hMytLmLgSeflXrFxt%2BMkkz8L%2F24EVKItP1i287QK3gUQvF74eL7pH%2FgTw70GgtXuZCv3YKh7aoIAMBHreVtYQn7TaUvFoxUX7ngD3dvkuQUaX8rs72NTPVTYCeMKakmsQGOqUBddSQ311hAfaflp3UlCENNWRLgavl%2F3ZF0bGofIco2GGOQd3CthQg1O5jgco8d09GRqqPSGQWIjj%2BuMu5R1PfmjjftoYzkNs6xp%2B84%2BieqU66EnzDcu5Cbsc4z930Ah3qrzWbdNuYCXvSZjI3yqmrx1A%2Bhy6vOMF%2B6WkTxPDEUfGcKOSOGp65LVlksiqEFAT3UivUYuXbp35MmFmZTR4aTGoSPCDC&X-Amz-Signature=52789ab58b26011286c04e78f3683e3530bf8cb0402452f7482ede606017c96c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYBHUXC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFHjLcy2U7m%2BFdc8deCOF1OeU%2FDSJU5akEcVUTuzWkMnAiEAsqeTdRgJfNiNZBWXru0oDj%2BE6V6cKoZRppl%2FTPCqdKEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOyn1nLDP%2BdgLl0J8CrcA6IhL6cvUcz7TJG2LEpccJAGej%2FClttq%2Fojnc%2F4N3dIz%2BsH5IzuLQJT748VGmKu9Bb3ttqI92%2BGICbamEcwSqoVeeQ%2BxOkGKmyvV5A17SrOhsDLg38cn54JBmE18joad1V34SLLgikzYuu6Eh7I%2FEytxUZnvEVLy5O8ZwsTd%2FBs%2BxHqQkvKHrf4g8KmoBCGEXfnHcJcYsGv%2FKdDkY3Vk5tt%2BiHTxtA6nwZH7aWqAHaOnsXKmXeyHjRhB3Sh%2Bt6qTJhqlk2%2Ft4SNarXVzt79frh7rb0dLz2TZumARZPoQNPRzOEHZAp3CPxeFR4xgwe92O1E61g4V59oZy0fd5mPQD2KW207xF8lczdskndBRQryMkWss%2FfcXVBZWyie4SuzkDT0ywrZO%2FkI5t5ePQwfuozPIZIHORijAflnTVSvHAWWOAR4gE77BUAPSsDbmwJ3UvC1jsALgLwVQLstLAO5LkwqjNDbqfKeWBXHVnpe21PG5D0uIAHMwmtFG7cv26aEfM8hMytLmLgSeflXrFxt%2BMkkz8L%2F24EVKItP1i287QK3gUQvF74eL7pH%2FgTw70GgtXuZCv3YKh7aoIAMBHreVtYQn7TaUvFoxUX7ngD3dvkuQUaX8rs72NTPVTYCeMKakmsQGOqUBddSQ311hAfaflp3UlCENNWRLgavl%2F3ZF0bGofIco2GGOQd3CthQg1O5jgco8d09GRqqPSGQWIjj%2BuMu5R1PfmjjftoYzkNs6xp%2B84%2BieqU66EnzDcu5Cbsc4z930Ah3qrzWbdNuYCXvSZjI3yqmrx1A%2Bhy6vOMF%2B6WkTxPDEUfGcKOSOGp65LVlksiqEFAT3UivUYuXbp35MmFmZTR4aTGoSPCDC&X-Amz-Signature=9d4040a7a7094c9e9fd878c974a848084b6422814ce49c9e63c2535ef432ac82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYBHUXC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFHjLcy2U7m%2BFdc8deCOF1OeU%2FDSJU5akEcVUTuzWkMnAiEAsqeTdRgJfNiNZBWXru0oDj%2BE6V6cKoZRppl%2FTPCqdKEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOyn1nLDP%2BdgLl0J8CrcA6IhL6cvUcz7TJG2LEpccJAGej%2FClttq%2Fojnc%2F4N3dIz%2BsH5IzuLQJT748VGmKu9Bb3ttqI92%2BGICbamEcwSqoVeeQ%2BxOkGKmyvV5A17SrOhsDLg38cn54JBmE18joad1V34SLLgikzYuu6Eh7I%2FEytxUZnvEVLy5O8ZwsTd%2FBs%2BxHqQkvKHrf4g8KmoBCGEXfnHcJcYsGv%2FKdDkY3Vk5tt%2BiHTxtA6nwZH7aWqAHaOnsXKmXeyHjRhB3Sh%2Bt6qTJhqlk2%2Ft4SNarXVzt79frh7rb0dLz2TZumARZPoQNPRzOEHZAp3CPxeFR4xgwe92O1E61g4V59oZy0fd5mPQD2KW207xF8lczdskndBRQryMkWss%2FfcXVBZWyie4SuzkDT0ywrZO%2FkI5t5ePQwfuozPIZIHORijAflnTVSvHAWWOAR4gE77BUAPSsDbmwJ3UvC1jsALgLwVQLstLAO5LkwqjNDbqfKeWBXHVnpe21PG5D0uIAHMwmtFG7cv26aEfM8hMytLmLgSeflXrFxt%2BMkkz8L%2F24EVKItP1i287QK3gUQvF74eL7pH%2FgTw70GgtXuZCv3YKh7aoIAMBHreVtYQn7TaUvFoxUX7ngD3dvkuQUaX8rs72NTPVTYCeMKakmsQGOqUBddSQ311hAfaflp3UlCENNWRLgavl%2F3ZF0bGofIco2GGOQd3CthQg1O5jgco8d09GRqqPSGQWIjj%2BuMu5R1PfmjjftoYzkNs6xp%2B84%2BieqU66EnzDcu5Cbsc4z930Ah3qrzWbdNuYCXvSZjI3yqmrx1A%2Bhy6vOMF%2B6WkTxPDEUfGcKOSOGp65LVlksiqEFAT3UivUYuXbp35MmFmZTR4aTGoSPCDC&X-Amz-Signature=2a9c001856b9e0359baefe0725c63b4db817236a594020644c3d966cdc8dc374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNG3XOF%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC335NqXxEmVMKdHXvX3UTER0hjjR4JcIJydHodqGzGFQIhANyAAkr8Mf%2Bzkvf4fSoleaxJ4ZxrhQiQ%2Fj4T5dPPnUm5Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwZ7vfyOyzisjJ5gmAq3AMLkPNO0U8lkJx9gyc2sSCjKlqN8INL7Z9gQxy9um1O6EKH%2Fxk3CRyyuETLkD7pwuoXVBmHKu9Kynei0y15Iol4Q%2BzN3vmMZxk47xD2323E5zB7xNN7Kcw3JbUw2mckZHRyh%2FCjUmjTuTypn4eXpUZFKabwO43JRxE4tB0hI9ItAI73S4%2Fo5y%2FezmE44QRtFuslryBEmkepYTMK94kg73CfLQajLxJU2ngpkgbhoiBWW%2BLc7mr2gUvyImMW5XNF4m%2FWXuuPEfesNyafmkQkegIClOVaTwHJi340C7oNk%2BscxDiU%2B9kP%2BXCooqOEmNDKHTnTOaB%2BywEM7lLK%2BjCC1K%2FYSt7Nia1XmR7piFemk2hX5fq%2FTSQq6SVnZEUGxgXp8VvKGp6W8kFIRrn2lpWx9HYyj4O1Py7cNgKNv9HYeX3nMKKRpR1VINrz6yDkRBdD3aLWL4xACZZyABA7sDNDU2zXmwudHhdT%2FdUF63gahSCvhXTUcopKoUht%2F3z7KeI1JcsJeA982VH2J2XDmDcG81X44EwmEt0UxLX5NgRUR2BnnpMKx4FXei6wvvMMsfJrrUSAPKvhQzzVxyW5hBSi3J2jpbxLDOaWQOxNnwG2%2BH%2Fz0PqgLrgJPSrGb9K8eDD9o5rEBjqkAVm%2FXoBn7QY%2BO5ydc2CHANXh6IsmzDEIbOAKD%2FeyJzBdtxErvo96Ux1XMedqzWY9GkboAhuvVxLIygTL4a8K%2FpraJyrtxaSHs3Tw%2FCEuCQn5vmDfUv9N08%2BPay1%2FWUGVWwJDhsjvjcaODpfTkMZ%2Fe99TO6res9bOBHVhoDisBa6qJLASZrF5fDoEVFOXnSqXH7YyGOkIqpARiGIgV%2BudI%2BZfD9wx&X-Amz-Signature=29c2f0b9553926e0171bdd0105a660e47fe3e469ee822ad41609f76f7fef77ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNG3XOF%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC335NqXxEmVMKdHXvX3UTER0hjjR4JcIJydHodqGzGFQIhANyAAkr8Mf%2Bzkvf4fSoleaxJ4ZxrhQiQ%2Fj4T5dPPnUm5Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwZ7vfyOyzisjJ5gmAq3AMLkPNO0U8lkJx9gyc2sSCjKlqN8INL7Z9gQxy9um1O6EKH%2Fxk3CRyyuETLkD7pwuoXVBmHKu9Kynei0y15Iol4Q%2BzN3vmMZxk47xD2323E5zB7xNN7Kcw3JbUw2mckZHRyh%2FCjUmjTuTypn4eXpUZFKabwO43JRxE4tB0hI9ItAI73S4%2Fo5y%2FezmE44QRtFuslryBEmkepYTMK94kg73CfLQajLxJU2ngpkgbhoiBWW%2BLc7mr2gUvyImMW5XNF4m%2FWXuuPEfesNyafmkQkegIClOVaTwHJi340C7oNk%2BscxDiU%2B9kP%2BXCooqOEmNDKHTnTOaB%2BywEM7lLK%2BjCC1K%2FYSt7Nia1XmR7piFemk2hX5fq%2FTSQq6SVnZEUGxgXp8VvKGp6W8kFIRrn2lpWx9HYyj4O1Py7cNgKNv9HYeX3nMKKRpR1VINrz6yDkRBdD3aLWL4xACZZyABA7sDNDU2zXmwudHhdT%2FdUF63gahSCvhXTUcopKoUht%2F3z7KeI1JcsJeA982VH2J2XDmDcG81X44EwmEt0UxLX5NgRUR2BnnpMKx4FXei6wvvMMsfJrrUSAPKvhQzzVxyW5hBSi3J2jpbxLDOaWQOxNnwG2%2BH%2Fz0PqgLrgJPSrGb9K8eDD9o5rEBjqkAVm%2FXoBn7QY%2BO5ydc2CHANXh6IsmzDEIbOAKD%2FeyJzBdtxErvo96Ux1XMedqzWY9GkboAhuvVxLIygTL4a8K%2FpraJyrtxaSHs3Tw%2FCEuCQn5vmDfUv9N08%2BPay1%2FWUGVWwJDhsjvjcaODpfTkMZ%2Fe99TO6res9bOBHVhoDisBa6qJLASZrF5fDoEVFOXnSqXH7YyGOkIqpARiGIgV%2BudI%2BZfD9wx&X-Amz-Signature=f8ac0febb5db9f8ba52c1d75170206cc7c5dae1aaf01389f5296463ab58b5717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      TODO:
  </details>

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

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNG3XOF%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC335NqXxEmVMKdHXvX3UTER0hjjR4JcIJydHodqGzGFQIhANyAAkr8Mf%2Bzkvf4fSoleaxJ4ZxrhQiQ%2Fj4T5dPPnUm5Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwZ7vfyOyzisjJ5gmAq3AMLkPNO0U8lkJx9gyc2sSCjKlqN8INL7Z9gQxy9um1O6EKH%2Fxk3CRyyuETLkD7pwuoXVBmHKu9Kynei0y15Iol4Q%2BzN3vmMZxk47xD2323E5zB7xNN7Kcw3JbUw2mckZHRyh%2FCjUmjTuTypn4eXpUZFKabwO43JRxE4tB0hI9ItAI73S4%2Fo5y%2FezmE44QRtFuslryBEmkepYTMK94kg73CfLQajLxJU2ngpkgbhoiBWW%2BLc7mr2gUvyImMW5XNF4m%2FWXuuPEfesNyafmkQkegIClOVaTwHJi340C7oNk%2BscxDiU%2B9kP%2BXCooqOEmNDKHTnTOaB%2BywEM7lLK%2BjCC1K%2FYSt7Nia1XmR7piFemk2hX5fq%2FTSQq6SVnZEUGxgXp8VvKGp6W8kFIRrn2lpWx9HYyj4O1Py7cNgKNv9HYeX3nMKKRpR1VINrz6yDkRBdD3aLWL4xACZZyABA7sDNDU2zXmwudHhdT%2FdUF63gahSCvhXTUcopKoUht%2F3z7KeI1JcsJeA982VH2J2XDmDcG81X44EwmEt0UxLX5NgRUR2BnnpMKx4FXei6wvvMMsfJrrUSAPKvhQzzVxyW5hBSi3J2jpbxLDOaWQOxNnwG2%2BH%2Fz0PqgLrgJPSrGb9K8eDD9o5rEBjqkAVm%2FXoBn7QY%2BO5ydc2CHANXh6IsmzDEIbOAKD%2FeyJzBdtxErvo96Ux1XMedqzWY9GkboAhuvVxLIygTL4a8K%2FpraJyrtxaSHs3Tw%2FCEuCQn5vmDfUv9N08%2BPay1%2FWUGVWwJDhsjvjcaODpfTkMZ%2Fe99TO6res9bOBHVhoDisBa6qJLASZrF5fDoEVFOXnSqXH7YyGOkIqpARiGIgV%2BudI%2BZfD9wx&X-Amz-Signature=fd43b8e47b1bd9ba0d7defb210e7bf2606a8bd65d885747ff0e3e39eee4ab8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNG3XOF%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC335NqXxEmVMKdHXvX3UTER0hjjR4JcIJydHodqGzGFQIhANyAAkr8Mf%2Bzkvf4fSoleaxJ4ZxrhQiQ%2Fj4T5dPPnUm5Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwZ7vfyOyzisjJ5gmAq3AMLkPNO0U8lkJx9gyc2sSCjKlqN8INL7Z9gQxy9um1O6EKH%2Fxk3CRyyuETLkD7pwuoXVBmHKu9Kynei0y15Iol4Q%2BzN3vmMZxk47xD2323E5zB7xNN7Kcw3JbUw2mckZHRyh%2FCjUmjTuTypn4eXpUZFKabwO43JRxE4tB0hI9ItAI73S4%2Fo5y%2FezmE44QRtFuslryBEmkepYTMK94kg73CfLQajLxJU2ngpkgbhoiBWW%2BLc7mr2gUvyImMW5XNF4m%2FWXuuPEfesNyafmkQkegIClOVaTwHJi340C7oNk%2BscxDiU%2B9kP%2BXCooqOEmNDKHTnTOaB%2BywEM7lLK%2BjCC1K%2FYSt7Nia1XmR7piFemk2hX5fq%2FTSQq6SVnZEUGxgXp8VvKGp6W8kFIRrn2lpWx9HYyj4O1Py7cNgKNv9HYeX3nMKKRpR1VINrz6yDkRBdD3aLWL4xACZZyABA7sDNDU2zXmwudHhdT%2FdUF63gahSCvhXTUcopKoUht%2F3z7KeI1JcsJeA982VH2J2XDmDcG81X44EwmEt0UxLX5NgRUR2BnnpMKx4FXei6wvvMMsfJrrUSAPKvhQzzVxyW5hBSi3J2jpbxLDOaWQOxNnwG2%2BH%2Fz0PqgLrgJPSrGb9K8eDD9o5rEBjqkAVm%2FXoBn7QY%2BO5ydc2CHANXh6IsmzDEIbOAKD%2FeyJzBdtxErvo96Ux1XMedqzWY9GkboAhuvVxLIygTL4a8K%2FpraJyrtxaSHs3Tw%2FCEuCQn5vmDfUv9N08%2BPay1%2FWUGVWwJDhsjvjcaODpfTkMZ%2Fe99TO6res9bOBHVhoDisBa6qJLASZrF5fDoEVFOXnSqXH7YyGOkIqpARiGIgV%2BudI%2BZfD9wx&X-Amz-Signature=c09949ef6939d5de41de0338c2ecd6bb743d5efebb91931220de4834a8acc4c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNG3XOF%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC335NqXxEmVMKdHXvX3UTER0hjjR4JcIJydHodqGzGFQIhANyAAkr8Mf%2Bzkvf4fSoleaxJ4ZxrhQiQ%2Fj4T5dPPnUm5Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwZ7vfyOyzisjJ5gmAq3AMLkPNO0U8lkJx9gyc2sSCjKlqN8INL7Z9gQxy9um1O6EKH%2Fxk3CRyyuETLkD7pwuoXVBmHKu9Kynei0y15Iol4Q%2BzN3vmMZxk47xD2323E5zB7xNN7Kcw3JbUw2mckZHRyh%2FCjUmjTuTypn4eXpUZFKabwO43JRxE4tB0hI9ItAI73S4%2Fo5y%2FezmE44QRtFuslryBEmkepYTMK94kg73CfLQajLxJU2ngpkgbhoiBWW%2BLc7mr2gUvyImMW5XNF4m%2FWXuuPEfesNyafmkQkegIClOVaTwHJi340C7oNk%2BscxDiU%2B9kP%2BXCooqOEmNDKHTnTOaB%2BywEM7lLK%2BjCC1K%2FYSt7Nia1XmR7piFemk2hX5fq%2FTSQq6SVnZEUGxgXp8VvKGp6W8kFIRrn2lpWx9HYyj4O1Py7cNgKNv9HYeX3nMKKRpR1VINrz6yDkRBdD3aLWL4xACZZyABA7sDNDU2zXmwudHhdT%2FdUF63gahSCvhXTUcopKoUht%2F3z7KeI1JcsJeA982VH2J2XDmDcG81X44EwmEt0UxLX5NgRUR2BnnpMKx4FXei6wvvMMsfJrrUSAPKvhQzzVxyW5hBSi3J2jpbxLDOaWQOxNnwG2%2BH%2Fz0PqgLrgJPSrGb9K8eDD9o5rEBjqkAVm%2FXoBn7QY%2BO5ydc2CHANXh6IsmzDEIbOAKD%2FeyJzBdtxErvo96Ux1XMedqzWY9GkboAhuvVxLIygTL4a8K%2FpraJyrtxaSHs3Tw%2FCEuCQn5vmDfUv9N08%2BPay1%2FWUGVWwJDhsjvjcaODpfTkMZ%2Fe99TO6res9bOBHVhoDisBa6qJLASZrF5fDoEVFOXnSqXH7YyGOkIqpARiGIgV%2BudI%2BZfD9wx&X-Amz-Signature=213cacb52c961f5ce4618a43ddc407da89067471f0c970af2679ced5f2b010e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNG3XOF%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC335NqXxEmVMKdHXvX3UTER0hjjR4JcIJydHodqGzGFQIhANyAAkr8Mf%2Bzkvf4fSoleaxJ4ZxrhQiQ%2Fj4T5dPPnUm5Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwZ7vfyOyzisjJ5gmAq3AMLkPNO0U8lkJx9gyc2sSCjKlqN8INL7Z9gQxy9um1O6EKH%2Fxk3CRyyuETLkD7pwuoXVBmHKu9Kynei0y15Iol4Q%2BzN3vmMZxk47xD2323E5zB7xNN7Kcw3JbUw2mckZHRyh%2FCjUmjTuTypn4eXpUZFKabwO43JRxE4tB0hI9ItAI73S4%2Fo5y%2FezmE44QRtFuslryBEmkepYTMK94kg73CfLQajLxJU2ngpkgbhoiBWW%2BLc7mr2gUvyImMW5XNF4m%2FWXuuPEfesNyafmkQkegIClOVaTwHJi340C7oNk%2BscxDiU%2B9kP%2BXCooqOEmNDKHTnTOaB%2BywEM7lLK%2BjCC1K%2FYSt7Nia1XmR7piFemk2hX5fq%2FTSQq6SVnZEUGxgXp8VvKGp6W8kFIRrn2lpWx9HYyj4O1Py7cNgKNv9HYeX3nMKKRpR1VINrz6yDkRBdD3aLWL4xACZZyABA7sDNDU2zXmwudHhdT%2FdUF63gahSCvhXTUcopKoUht%2F3z7KeI1JcsJeA982VH2J2XDmDcG81X44EwmEt0UxLX5NgRUR2BnnpMKx4FXei6wvvMMsfJrrUSAPKvhQzzVxyW5hBSi3J2jpbxLDOaWQOxNnwG2%2BH%2Fz0PqgLrgJPSrGb9K8eDD9o5rEBjqkAVm%2FXoBn7QY%2BO5ydc2CHANXh6IsmzDEIbOAKD%2FeyJzBdtxErvo96Ux1XMedqzWY9GkboAhuvVxLIygTL4a8K%2FpraJyrtxaSHs3Tw%2FCEuCQn5vmDfUv9N08%2BPay1%2FWUGVWwJDhsjvjcaODpfTkMZ%2Fe99TO6res9bOBHVhoDisBa6qJLASZrF5fDoEVFOXnSqXH7YyGOkIqpARiGIgV%2BudI%2BZfD9wx&X-Amz-Signature=6a3da4e71ea55600d6ff9c0cb06834b574dbdbbf7fb8e04401f2a451cddfc845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
