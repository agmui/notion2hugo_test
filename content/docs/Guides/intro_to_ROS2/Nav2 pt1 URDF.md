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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKKSUHG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGr%2F1GPBfJstqclnWTZiQB3m3esrqsFNAA6ogXAjLrLoAiA5YyXY5o8Rj26iktg8NKuMtx7YP2yZCNlbvnzdON%2FIvyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxswl1tADkzWaUK6BKtwDUfofsttlbmBU2qFHQu0IZ3Dmr4ILjti9ZdJXJNOuaWGHWLZPQ97PMHuEpDSVR5TWw9VKGjjLiYrkK3eEdpveTD9Ow1DJkNAsIgh%2B7BkcQhKiMkv%2FxBi%2B%2FQjmRbVPh9%2BrJOW1v7zUFK7SPqtRbFmsNGqUlP9mpWKxaQzpjb%2B5wramOFW0Mh4wgjxs8CG8OcDExPj%2Bz6MpgVw9mODOhLW0rtQZYFclIE%2FO1c58iLrDJXfB1gWJAhpJVqGvL8cMrLTUZDjanSJknJHoMVp34pqS808pVWBclRaOq6AWF7vVbsI02pchwqK6sDduefBQn3ATey0V7Q3KzFDnJmRfP93hv%2BYqSbkEUoo8WKj26aVcf1l%2BObfzmw002759W15hmU0pSBS2uIwOsjTdV2Ai417S%2Fjgl3Fvp3SswL%2BCj4osxRdoem%2Fm6uqPosUtOSST7HaXU1QiKRitpcBnmKx27kSmHvIxmR7zlTiU%2FPM3VcSeaAPszcLfKuiRANXUjKJtaT5JfYx4it7K0ae5w%2FkWOS%2BZX6iGOxW4Tnt%2BGrI0JTLHLas13g0dnKjT4mkS6KBFGD12w%2F72uFkBuTnOUXisX1z4tg7nqrBSd2jYgtQMl5LiSznh6Hvr%2BOaqgsVQvluwwt8S5xAY6pgHS80R166YJ0DIh571Em%2B8Wsp%2F3Ivwm7nuU%2BP34ERCnPdkKy2XgwEhE0P8o0AWG3PrJFFW5j12UFoUtTLUNnJY21xEBflwmU6FweJi8gzbCSoFHMwWmfK6af54wKjb6KCQXowteve3VOU%2FiNFMsUaD44unUszEZ4nK3q7BZy6WsVL4K5AxAtBK3d0sUAbbjrLjsz6n8e1qFMWkiLoPpl1%2BUvd0R8bC6&X-Amz-Signature=f3b40f9fee5344381eb0c713afa3954d52c1587179cc5f4fa08e28b9a135fe81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKKSUHG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGr%2F1GPBfJstqclnWTZiQB3m3esrqsFNAA6ogXAjLrLoAiA5YyXY5o8Rj26iktg8NKuMtx7YP2yZCNlbvnzdON%2FIvyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxswl1tADkzWaUK6BKtwDUfofsttlbmBU2qFHQu0IZ3Dmr4ILjti9ZdJXJNOuaWGHWLZPQ97PMHuEpDSVR5TWw9VKGjjLiYrkK3eEdpveTD9Ow1DJkNAsIgh%2B7BkcQhKiMkv%2FxBi%2B%2FQjmRbVPh9%2BrJOW1v7zUFK7SPqtRbFmsNGqUlP9mpWKxaQzpjb%2B5wramOFW0Mh4wgjxs8CG8OcDExPj%2Bz6MpgVw9mODOhLW0rtQZYFclIE%2FO1c58iLrDJXfB1gWJAhpJVqGvL8cMrLTUZDjanSJknJHoMVp34pqS808pVWBclRaOq6AWF7vVbsI02pchwqK6sDduefBQn3ATey0V7Q3KzFDnJmRfP93hv%2BYqSbkEUoo8WKj26aVcf1l%2BObfzmw002759W15hmU0pSBS2uIwOsjTdV2Ai417S%2Fjgl3Fvp3SswL%2BCj4osxRdoem%2Fm6uqPosUtOSST7HaXU1QiKRitpcBnmKx27kSmHvIxmR7zlTiU%2FPM3VcSeaAPszcLfKuiRANXUjKJtaT5JfYx4it7K0ae5w%2FkWOS%2BZX6iGOxW4Tnt%2BGrI0JTLHLas13g0dnKjT4mkS6KBFGD12w%2F72uFkBuTnOUXisX1z4tg7nqrBSd2jYgtQMl5LiSznh6Hvr%2BOaqgsVQvluwwt8S5xAY6pgHS80R166YJ0DIh571Em%2B8Wsp%2F3Ivwm7nuU%2BP34ERCnPdkKy2XgwEhE0P8o0AWG3PrJFFW5j12UFoUtTLUNnJY21xEBflwmU6FweJi8gzbCSoFHMwWmfK6af54wKjb6KCQXowteve3VOU%2FiNFMsUaD44unUszEZ4nK3q7BZy6WsVL4K5AxAtBK3d0sUAbbjrLjsz6n8e1qFMWkiLoPpl1%2BUvd0R8bC6&X-Amz-Signature=d5df95ac730d66cb1ec8ef420e000735224c64504118224af08994887439a3a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKKSUHG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGr%2F1GPBfJstqclnWTZiQB3m3esrqsFNAA6ogXAjLrLoAiA5YyXY5o8Rj26iktg8NKuMtx7YP2yZCNlbvnzdON%2FIvyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxswl1tADkzWaUK6BKtwDUfofsttlbmBU2qFHQu0IZ3Dmr4ILjti9ZdJXJNOuaWGHWLZPQ97PMHuEpDSVR5TWw9VKGjjLiYrkK3eEdpveTD9Ow1DJkNAsIgh%2B7BkcQhKiMkv%2FxBi%2B%2FQjmRbVPh9%2BrJOW1v7zUFK7SPqtRbFmsNGqUlP9mpWKxaQzpjb%2B5wramOFW0Mh4wgjxs8CG8OcDExPj%2Bz6MpgVw9mODOhLW0rtQZYFclIE%2FO1c58iLrDJXfB1gWJAhpJVqGvL8cMrLTUZDjanSJknJHoMVp34pqS808pVWBclRaOq6AWF7vVbsI02pchwqK6sDduefBQn3ATey0V7Q3KzFDnJmRfP93hv%2BYqSbkEUoo8WKj26aVcf1l%2BObfzmw002759W15hmU0pSBS2uIwOsjTdV2Ai417S%2Fjgl3Fvp3SswL%2BCj4osxRdoem%2Fm6uqPosUtOSST7HaXU1QiKRitpcBnmKx27kSmHvIxmR7zlTiU%2FPM3VcSeaAPszcLfKuiRANXUjKJtaT5JfYx4it7K0ae5w%2FkWOS%2BZX6iGOxW4Tnt%2BGrI0JTLHLas13g0dnKjT4mkS6KBFGD12w%2F72uFkBuTnOUXisX1z4tg7nqrBSd2jYgtQMl5LiSznh6Hvr%2BOaqgsVQvluwwt8S5xAY6pgHS80R166YJ0DIh571Em%2B8Wsp%2F3Ivwm7nuU%2BP34ERCnPdkKy2XgwEhE0P8o0AWG3PrJFFW5j12UFoUtTLUNnJY21xEBflwmU6FweJi8gzbCSoFHMwWmfK6af54wKjb6KCQXowteve3VOU%2FiNFMsUaD44unUszEZ4nK3q7BZy6WsVL4K5AxAtBK3d0sUAbbjrLjsz6n8e1qFMWkiLoPpl1%2BUvd0R8bC6&X-Amz-Signature=df9c79d32dc4f1262a769af75a2833a7c45970074dc2e16646633dbaf5a48a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKKSUHG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGr%2F1GPBfJstqclnWTZiQB3m3esrqsFNAA6ogXAjLrLoAiA5YyXY5o8Rj26iktg8NKuMtx7YP2yZCNlbvnzdON%2FIvyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxswl1tADkzWaUK6BKtwDUfofsttlbmBU2qFHQu0IZ3Dmr4ILjti9ZdJXJNOuaWGHWLZPQ97PMHuEpDSVR5TWw9VKGjjLiYrkK3eEdpveTD9Ow1DJkNAsIgh%2B7BkcQhKiMkv%2FxBi%2B%2FQjmRbVPh9%2BrJOW1v7zUFK7SPqtRbFmsNGqUlP9mpWKxaQzpjb%2B5wramOFW0Mh4wgjxs8CG8OcDExPj%2Bz6MpgVw9mODOhLW0rtQZYFclIE%2FO1c58iLrDJXfB1gWJAhpJVqGvL8cMrLTUZDjanSJknJHoMVp34pqS808pVWBclRaOq6AWF7vVbsI02pchwqK6sDduefBQn3ATey0V7Q3KzFDnJmRfP93hv%2BYqSbkEUoo8WKj26aVcf1l%2BObfzmw002759W15hmU0pSBS2uIwOsjTdV2Ai417S%2Fjgl3Fvp3SswL%2BCj4osxRdoem%2Fm6uqPosUtOSST7HaXU1QiKRitpcBnmKx27kSmHvIxmR7zlTiU%2FPM3VcSeaAPszcLfKuiRANXUjKJtaT5JfYx4it7K0ae5w%2FkWOS%2BZX6iGOxW4Tnt%2BGrI0JTLHLas13g0dnKjT4mkS6KBFGD12w%2F72uFkBuTnOUXisX1z4tg7nqrBSd2jYgtQMl5LiSznh6Hvr%2BOaqgsVQvluwwt8S5xAY6pgHS80R166YJ0DIh571Em%2B8Wsp%2F3Ivwm7nuU%2BP34ERCnPdkKy2XgwEhE0P8o0AWG3PrJFFW5j12UFoUtTLUNnJY21xEBflwmU6FweJi8gzbCSoFHMwWmfK6af54wKjb6KCQXowteve3VOU%2FiNFMsUaD44unUszEZ4nK3q7BZy6WsVL4K5AxAtBK3d0sUAbbjrLjsz6n8e1qFMWkiLoPpl1%2BUvd0R8bC6&X-Amz-Signature=505a4358373d4da5929ac6df7d19e36e25e6f2d1147b549d0b558baf6812a80a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKKSUHG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGr%2F1GPBfJstqclnWTZiQB3m3esrqsFNAA6ogXAjLrLoAiA5YyXY5o8Rj26iktg8NKuMtx7YP2yZCNlbvnzdON%2FIvyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxswl1tADkzWaUK6BKtwDUfofsttlbmBU2qFHQu0IZ3Dmr4ILjti9ZdJXJNOuaWGHWLZPQ97PMHuEpDSVR5TWw9VKGjjLiYrkK3eEdpveTD9Ow1DJkNAsIgh%2B7BkcQhKiMkv%2FxBi%2B%2FQjmRbVPh9%2BrJOW1v7zUFK7SPqtRbFmsNGqUlP9mpWKxaQzpjb%2B5wramOFW0Mh4wgjxs8CG8OcDExPj%2Bz6MpgVw9mODOhLW0rtQZYFclIE%2FO1c58iLrDJXfB1gWJAhpJVqGvL8cMrLTUZDjanSJknJHoMVp34pqS808pVWBclRaOq6AWF7vVbsI02pchwqK6sDduefBQn3ATey0V7Q3KzFDnJmRfP93hv%2BYqSbkEUoo8WKj26aVcf1l%2BObfzmw002759W15hmU0pSBS2uIwOsjTdV2Ai417S%2Fjgl3Fvp3SswL%2BCj4osxRdoem%2Fm6uqPosUtOSST7HaXU1QiKRitpcBnmKx27kSmHvIxmR7zlTiU%2FPM3VcSeaAPszcLfKuiRANXUjKJtaT5JfYx4it7K0ae5w%2FkWOS%2BZX6iGOxW4Tnt%2BGrI0JTLHLas13g0dnKjT4mkS6KBFGD12w%2F72uFkBuTnOUXisX1z4tg7nqrBSd2jYgtQMl5LiSznh6Hvr%2BOaqgsVQvluwwt8S5xAY6pgHS80R166YJ0DIh571Em%2B8Wsp%2F3Ivwm7nuU%2BP34ERCnPdkKy2XgwEhE0P8o0AWG3PrJFFW5j12UFoUtTLUNnJY21xEBflwmU6FweJi8gzbCSoFHMwWmfK6af54wKjb6KCQXowteve3VOU%2FiNFMsUaD44unUszEZ4nK3q7BZy6WsVL4K5AxAtBK3d0sUAbbjrLjsz6n8e1qFMWkiLoPpl1%2BUvd0R8bC6&X-Amz-Signature=2ba5f931d876e42b8029065b16081810e6c6e7fd75abc7257500ec26b07a9ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKKSUHG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGr%2F1GPBfJstqclnWTZiQB3m3esrqsFNAA6ogXAjLrLoAiA5YyXY5o8Rj26iktg8NKuMtx7YP2yZCNlbvnzdON%2FIvyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxswl1tADkzWaUK6BKtwDUfofsttlbmBU2qFHQu0IZ3Dmr4ILjti9ZdJXJNOuaWGHWLZPQ97PMHuEpDSVR5TWw9VKGjjLiYrkK3eEdpveTD9Ow1DJkNAsIgh%2B7BkcQhKiMkv%2FxBi%2B%2FQjmRbVPh9%2BrJOW1v7zUFK7SPqtRbFmsNGqUlP9mpWKxaQzpjb%2B5wramOFW0Mh4wgjxs8CG8OcDExPj%2Bz6MpgVw9mODOhLW0rtQZYFclIE%2FO1c58iLrDJXfB1gWJAhpJVqGvL8cMrLTUZDjanSJknJHoMVp34pqS808pVWBclRaOq6AWF7vVbsI02pchwqK6sDduefBQn3ATey0V7Q3KzFDnJmRfP93hv%2BYqSbkEUoo8WKj26aVcf1l%2BObfzmw002759W15hmU0pSBS2uIwOsjTdV2Ai417S%2Fjgl3Fvp3SswL%2BCj4osxRdoem%2Fm6uqPosUtOSST7HaXU1QiKRitpcBnmKx27kSmHvIxmR7zlTiU%2FPM3VcSeaAPszcLfKuiRANXUjKJtaT5JfYx4it7K0ae5w%2FkWOS%2BZX6iGOxW4Tnt%2BGrI0JTLHLas13g0dnKjT4mkS6KBFGD12w%2F72uFkBuTnOUXisX1z4tg7nqrBSd2jYgtQMl5LiSznh6Hvr%2BOaqgsVQvluwwt8S5xAY6pgHS80R166YJ0DIh571Em%2B8Wsp%2F3Ivwm7nuU%2BP34ERCnPdkKy2XgwEhE0P8o0AWG3PrJFFW5j12UFoUtTLUNnJY21xEBflwmU6FweJi8gzbCSoFHMwWmfK6af54wKjb6KCQXowteve3VOU%2FiNFMsUaD44unUszEZ4nK3q7BZy6WsVL4K5AxAtBK3d0sUAbbjrLjsz6n8e1qFMWkiLoPpl1%2BUvd0R8bC6&X-Amz-Signature=a7c738b5731425203e0ab1f251a58bbb67adc6235bf002a41ac470aecea9ead2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKKSUHG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGr%2F1GPBfJstqclnWTZiQB3m3esrqsFNAA6ogXAjLrLoAiA5YyXY5o8Rj26iktg8NKuMtx7YP2yZCNlbvnzdON%2FIvyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxswl1tADkzWaUK6BKtwDUfofsttlbmBU2qFHQu0IZ3Dmr4ILjti9ZdJXJNOuaWGHWLZPQ97PMHuEpDSVR5TWw9VKGjjLiYrkK3eEdpveTD9Ow1DJkNAsIgh%2B7BkcQhKiMkv%2FxBi%2B%2FQjmRbVPh9%2BrJOW1v7zUFK7SPqtRbFmsNGqUlP9mpWKxaQzpjb%2B5wramOFW0Mh4wgjxs8CG8OcDExPj%2Bz6MpgVw9mODOhLW0rtQZYFclIE%2FO1c58iLrDJXfB1gWJAhpJVqGvL8cMrLTUZDjanSJknJHoMVp34pqS808pVWBclRaOq6AWF7vVbsI02pchwqK6sDduefBQn3ATey0V7Q3KzFDnJmRfP93hv%2BYqSbkEUoo8WKj26aVcf1l%2BObfzmw002759W15hmU0pSBS2uIwOsjTdV2Ai417S%2Fjgl3Fvp3SswL%2BCj4osxRdoem%2Fm6uqPosUtOSST7HaXU1QiKRitpcBnmKx27kSmHvIxmR7zlTiU%2FPM3VcSeaAPszcLfKuiRANXUjKJtaT5JfYx4it7K0ae5w%2FkWOS%2BZX6iGOxW4Tnt%2BGrI0JTLHLas13g0dnKjT4mkS6KBFGD12w%2F72uFkBuTnOUXisX1z4tg7nqrBSd2jYgtQMl5LiSznh6Hvr%2BOaqgsVQvluwwt8S5xAY6pgHS80R166YJ0DIh571Em%2B8Wsp%2F3Ivwm7nuU%2BP34ERCnPdkKy2XgwEhE0P8o0AWG3PrJFFW5j12UFoUtTLUNnJY21xEBflwmU6FweJi8gzbCSoFHMwWmfK6af54wKjb6KCQXowteve3VOU%2FiNFMsUaD44unUszEZ4nK3q7BZy6WsVL4K5AxAtBK3d0sUAbbjrLjsz6n8e1qFMWkiLoPpl1%2BUvd0R8bC6&X-Amz-Signature=2dfb250492df22317f1a6124fafb9db72aac4586711461a5a456eaea171a8e54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKKSUHG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGr%2F1GPBfJstqclnWTZiQB3m3esrqsFNAA6ogXAjLrLoAiA5YyXY5o8Rj26iktg8NKuMtx7YP2yZCNlbvnzdON%2FIvyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxswl1tADkzWaUK6BKtwDUfofsttlbmBU2qFHQu0IZ3Dmr4ILjti9ZdJXJNOuaWGHWLZPQ97PMHuEpDSVR5TWw9VKGjjLiYrkK3eEdpveTD9Ow1DJkNAsIgh%2B7BkcQhKiMkv%2FxBi%2B%2FQjmRbVPh9%2BrJOW1v7zUFK7SPqtRbFmsNGqUlP9mpWKxaQzpjb%2B5wramOFW0Mh4wgjxs8CG8OcDExPj%2Bz6MpgVw9mODOhLW0rtQZYFclIE%2FO1c58iLrDJXfB1gWJAhpJVqGvL8cMrLTUZDjanSJknJHoMVp34pqS808pVWBclRaOq6AWF7vVbsI02pchwqK6sDduefBQn3ATey0V7Q3KzFDnJmRfP93hv%2BYqSbkEUoo8WKj26aVcf1l%2BObfzmw002759W15hmU0pSBS2uIwOsjTdV2Ai417S%2Fjgl3Fvp3SswL%2BCj4osxRdoem%2Fm6uqPosUtOSST7HaXU1QiKRitpcBnmKx27kSmHvIxmR7zlTiU%2FPM3VcSeaAPszcLfKuiRANXUjKJtaT5JfYx4it7K0ae5w%2FkWOS%2BZX6iGOxW4Tnt%2BGrI0JTLHLas13g0dnKjT4mkS6KBFGD12w%2F72uFkBuTnOUXisX1z4tg7nqrBSd2jYgtQMl5LiSznh6Hvr%2BOaqgsVQvluwwt8S5xAY6pgHS80R166YJ0DIh571Em%2B8Wsp%2F3Ivwm7nuU%2BP34ERCnPdkKy2XgwEhE0P8o0AWG3PrJFFW5j12UFoUtTLUNnJY21xEBflwmU6FweJi8gzbCSoFHMwWmfK6af54wKjb6KCQXowteve3VOU%2FiNFMsUaD44unUszEZ4nK3q7BZy6WsVL4K5AxAtBK3d0sUAbbjrLjsz6n8e1qFMWkiLoPpl1%2BUvd0R8bC6&X-Amz-Signature=69ce8d39d337decabeb86e7296223f3142342b42c687fae9b197637ecd6419d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKKSUHG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGr%2F1GPBfJstqclnWTZiQB3m3esrqsFNAA6ogXAjLrLoAiA5YyXY5o8Rj26iktg8NKuMtx7YP2yZCNlbvnzdON%2FIvyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxswl1tADkzWaUK6BKtwDUfofsttlbmBU2qFHQu0IZ3Dmr4ILjti9ZdJXJNOuaWGHWLZPQ97PMHuEpDSVR5TWw9VKGjjLiYrkK3eEdpveTD9Ow1DJkNAsIgh%2B7BkcQhKiMkv%2FxBi%2B%2FQjmRbVPh9%2BrJOW1v7zUFK7SPqtRbFmsNGqUlP9mpWKxaQzpjb%2B5wramOFW0Mh4wgjxs8CG8OcDExPj%2Bz6MpgVw9mODOhLW0rtQZYFclIE%2FO1c58iLrDJXfB1gWJAhpJVqGvL8cMrLTUZDjanSJknJHoMVp34pqS808pVWBclRaOq6AWF7vVbsI02pchwqK6sDduefBQn3ATey0V7Q3KzFDnJmRfP93hv%2BYqSbkEUoo8WKj26aVcf1l%2BObfzmw002759W15hmU0pSBS2uIwOsjTdV2Ai417S%2Fjgl3Fvp3SswL%2BCj4osxRdoem%2Fm6uqPosUtOSST7HaXU1QiKRitpcBnmKx27kSmHvIxmR7zlTiU%2FPM3VcSeaAPszcLfKuiRANXUjKJtaT5JfYx4it7K0ae5w%2FkWOS%2BZX6iGOxW4Tnt%2BGrI0JTLHLas13g0dnKjT4mkS6KBFGD12w%2F72uFkBuTnOUXisX1z4tg7nqrBSd2jYgtQMl5LiSznh6Hvr%2BOaqgsVQvluwwt8S5xAY6pgHS80R166YJ0DIh571Em%2B8Wsp%2F3Ivwm7nuU%2BP34ERCnPdkKy2XgwEhE0P8o0AWG3PrJFFW5j12UFoUtTLUNnJY21xEBflwmU6FweJi8gzbCSoFHMwWmfK6af54wKjb6KCQXowteve3VOU%2FiNFMsUaD44unUszEZ4nK3q7BZy6WsVL4K5AxAtBK3d0sUAbbjrLjsz6n8e1qFMWkiLoPpl1%2BUvd0R8bC6&X-Amz-Signature=538e73856615e51ef5f26b853c617009fa1678c59e0c826a46d800f3174bf0a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKKSUHG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGr%2F1GPBfJstqclnWTZiQB3m3esrqsFNAA6ogXAjLrLoAiA5YyXY5o8Rj26iktg8NKuMtx7YP2yZCNlbvnzdON%2FIvyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxswl1tADkzWaUK6BKtwDUfofsttlbmBU2qFHQu0IZ3Dmr4ILjti9ZdJXJNOuaWGHWLZPQ97PMHuEpDSVR5TWw9VKGjjLiYrkK3eEdpveTD9Ow1DJkNAsIgh%2B7BkcQhKiMkv%2FxBi%2B%2FQjmRbVPh9%2BrJOW1v7zUFK7SPqtRbFmsNGqUlP9mpWKxaQzpjb%2B5wramOFW0Mh4wgjxs8CG8OcDExPj%2Bz6MpgVw9mODOhLW0rtQZYFclIE%2FO1c58iLrDJXfB1gWJAhpJVqGvL8cMrLTUZDjanSJknJHoMVp34pqS808pVWBclRaOq6AWF7vVbsI02pchwqK6sDduefBQn3ATey0V7Q3KzFDnJmRfP93hv%2BYqSbkEUoo8WKj26aVcf1l%2BObfzmw002759W15hmU0pSBS2uIwOsjTdV2Ai417S%2Fjgl3Fvp3SswL%2BCj4osxRdoem%2Fm6uqPosUtOSST7HaXU1QiKRitpcBnmKx27kSmHvIxmR7zlTiU%2FPM3VcSeaAPszcLfKuiRANXUjKJtaT5JfYx4it7K0ae5w%2FkWOS%2BZX6iGOxW4Tnt%2BGrI0JTLHLas13g0dnKjT4mkS6KBFGD12w%2F72uFkBuTnOUXisX1z4tg7nqrBSd2jYgtQMl5LiSznh6Hvr%2BOaqgsVQvluwwt8S5xAY6pgHS80R166YJ0DIh571Em%2B8Wsp%2F3Ivwm7nuU%2BP34ERCnPdkKy2XgwEhE0P8o0AWG3PrJFFW5j12UFoUtTLUNnJY21xEBflwmU6FweJi8gzbCSoFHMwWmfK6af54wKjb6KCQXowteve3VOU%2FiNFMsUaD44unUszEZ4nK3q7BZy6WsVL4K5AxAtBK3d0sUAbbjrLjsz6n8e1qFMWkiLoPpl1%2BUvd0R8bC6&X-Amz-Signature=0601d036aefb38d423882b9df9751dfdbc268955abb2886dd779d22cb24e2ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ETMIPQZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmnD6sGJiYee3pfJIHZTks4QHccEgqxxAyFo8mTSmbeAiBa4N4oonNNLsOHWX4TsxXNyB3RMvq3uOkU6P3yLmT3lir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMJ2x00gvvoHVPWsWyKtwDzA1KD3CS7DAZa7BRUSDbDIfXu%2F2p4Gx7YPtdd%2Fj5NzLoBL6y82GNYd3m2DsY8my3hvD60GvVkDu6s93gCtLVDSh%2FFRhO%2FdD09QjKfOUZlfC%2Fqafr7I39mZlOO8hSHUeNrTG2gRBtsa8EFrnQ9Ov2JCGjkISq%2B3EjACH9EvbPYyyqd%2B%2BZQyLkMaICOKKMaMRzmp99W%2F9e7Ztut1mpbBaEBO6AJUGtQV0q%2F3QwMQssQxewndO0k1ru345iI6TNNFudDNrY2mGFyrB0bXKy%2FtTyN%2Bx1MpgePkkXf3MDXAibJcygFtCX3DXvkHRVdngmp7s6YRC7cGic6YlphPjdHvdldrdywFDR6Hbj3eDTsaHO8h9vQmi3XnTfOq91tN64vg%2F8GaCOoWgPgzk8%2BodnHs4O6ODtLWXb4tJ2jNn0EFpJ3iVHSxhW8EiJ7jFC4BeZurmcqJ%2BsScVx2zzrHtKzjSPRI%2BE1z6nxFsW2crJ7HHUUtjHNRs2Mj2ii8YVSHNJt%2FXlPFXb%2BUE3zMqWlQER2V959qXdRAkK4VcxuEtUsXgmg4Ry4x4WK4xpVAvvHrJZMEZbug7Fms3Z4fhU34OAeMRfifi%2Bo4cVjaOxv613ihTNRMhiBPFe8o0IxuH9fZPgw7cO5xAY6pgEtDXzOD51F%2B9TjOwCOFm4OQBEUveCDhjI%2F0Y2KbzmETkWRbbqpgOeptJRoB274PEgcstaBXSN4tChyLbpdONFl36GeTSagNH6pRXhVeEThJgBTuE%2BmIzVIWB6Qpy9F7WhvG4TkUKNZZVEgJMVPj0YKwGX%2BAkHOfaKYWGf9OqMAypGwdrKDyIuMX9weJThEWlED%2BowvcRFxlH350nrIA3I33GrTGRS8&X-Amz-Signature=add6c5e7bdf117c21fe135d25c0b54dcc973e4f5b8ace54ca994c86274327b1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647JOYVHN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPahVmiusSFe5JEoVs%2FvVlUqBOnq%2Fwb2EmYze2bfBbqAIgSlqiBexybcSo3kgxz0%2B7kKQoF7leYSOV2hQYjNNWXlYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDDF5KzflRl7IsHDwGircA%2Fc16%2FIjcMAuooXQCydfHfMLqCCNNO3bLoWXzGjbuUVVwR7iD0u7KmdaMN%2FqEBIC%2BxLsA%2BX1BOkqUoDgNFzSqgu9T9J%2BK8oLoC6uLyKtSJrewW0D50B5kr7K2A1H6z3XgAkF8R2jb%2BNEimc2FlK%2F9xXC4YLh1SMGv%2FSB5ucI20%2B5w6TuNGwn2Vf3hT8li1T6VE3DBjyANsjzoCpX%2Fv4Aa9njAIYJAOqfhxjh2QVcZnhTE0f3UB5AYRczkv0RvJcAyiUtnxp0F03b%2BQZeCiLBKSNFdbjtjK8j9rhDOuA7ZN1oZJOsUT5Fs7W1lm5qEwtiX7QYwOzpSPq1%2F1by7m5rvtMxMg9odv2F0aQxsFNZvc1hccX4vLLuKVWXfYe%2FDej7myzlKhP%2BcPODKJsHl3iTU1SDeJt2FpaSh9BN%2Ft%2FuxSJP6PxHQRGHf6RMV3hFnez91O8a6xh9zEuuY%2Fw2IWh9T%2FZfmlI6uVZ4CfJU3e7v961ACYb6eMzS%2BDTnCT%2Fhc%2BmklS7uipTZVTjXBhNj8ZU7Vuuj%2Bh37bTU8ZjfdKKd01rftxG8FbBUaWAKzArqZJAegtn7OCCoZ4RFZukMjMon1xSp3vBYd4FFKFIv2p4x%2Bn4dyw0%2Bu9JXUBCEHq336MNfDucQGOqUBdTLacFGAqG4ADFneAd9cACJRqm34Dk%2BOEnN3hdwwjrE97PlHXXZa4ofY06TpM2Pf%2Fenhr08xNxPDBYFfsgs62nPo1D7UGAFZchQylJ%2BlPvnHjyorUr8kwwSIfDE1rg8mpiwN1TeB2hwDDaXbE%2Bz%2FyqgmEflHTzcXeVJ93GoyUXgZwrWvqzhedJVOitXXAx%2FW6SvYVo2KiEIVysbeDTLC%2FbSKd9ZS&X-Amz-Signature=c05f6bb5cab8c414083d21a1e51dc08076f71e747aec7bf2cd36265b3c6a60d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MJ53JY3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICy6PYjCribJ8AdXCPg0jmG%2FGA%2Bf0MbJHtm8AAuWok2kAiEAv1yXv3Git6PKmDR0d4xedY5aTti0cHqDfWWYJVYtxfUq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDAEJ8Wx%2BsyVDeuG1aCrcA15b4yNc3qLrhrKLNpz4%2Bm5FBQa8QQeGGhPUhF%2FPhMNOe6aH8pmjF0JXvw5rt0tXOiupHSHrHw2wAb9WhuSiMGD0mVUt8IVskw3VFkpXihaHEymT5KDxWuKQ5aoNRnXLKLt%2FwWEerxOlkTc8UW4qUY527z7q7VpNuv%2FcHPPl%2FKPKQsXwe%2B1Rs8LHiBYVSEd7vNT9R5NvsG7rA%2FjL3t9Yv9Cluhjvv1kgGcOrDNnJyGbSNHJTnw9kgUIm3ZV99dRPcj14UWgu1NQRLwHdkBvwX5w5xIZRpKf6ctB4jXfSs%2Bgsb420sZV4DeG7cQsObqTOFebQAbgDzzSjNNSwHLBwPlUKh2P8mIFVOHxcp7qLUF0b%2FyE67e3SQQZY4eem5r4AHhqCWD63yLlF0PxD1djFzOLAn6CC33IF9cFs82POm5gC659bWpBVscmKN7PlEOUJZcdVDQzjcsAQCJGVJQfGGjfQd4fwURLMCbgpoALOmtKmBcylIjam%2FclbcjGgPfgujBqC9L5wH2pQ0TnFN4feRgUIl5pPcgSWA0VD3B8CrXFNjdrlxBa9GsGvoNreX8N1iMXJBTeOdRXk9I9%2BLiBXtemEUocZQMUu2DQ1Ler2iBvar0CAe%2BwprfYOiVbkMK%2FEucQGOqUBFppdANn9UjBWpkgCgKxA28zzKrtX78B%2FLwy8vfn%2B57schBuzG6XvlMWUaEVhXrb1xLlxPQMXOoGP9xSg6RZHXzrB870bkRY%2BA4IxepEjrPGZ4%2FyZ8kCHZySke5pP6t4dgQ8P6JbL5OgHPxoL6EgnS3SnauVkOo8UPB1prg8d0YUHPq7qo9qUobYLBaR9vvRKzh9tSOUUjJmanGbds6%2B6mIwCa%2BDr&X-Amz-Signature=58dd06f887e808e2c9a573ce080775a14c46f0cdd69c83ba16dd61f1e57db3b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKKSUHG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGr%2F1GPBfJstqclnWTZiQB3m3esrqsFNAA6ogXAjLrLoAiA5YyXY5o8Rj26iktg8NKuMtx7YP2yZCNlbvnzdON%2FIvyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxswl1tADkzWaUK6BKtwDUfofsttlbmBU2qFHQu0IZ3Dmr4ILjti9ZdJXJNOuaWGHWLZPQ97PMHuEpDSVR5TWw9VKGjjLiYrkK3eEdpveTD9Ow1DJkNAsIgh%2B7BkcQhKiMkv%2FxBi%2B%2FQjmRbVPh9%2BrJOW1v7zUFK7SPqtRbFmsNGqUlP9mpWKxaQzpjb%2B5wramOFW0Mh4wgjxs8CG8OcDExPj%2Bz6MpgVw9mODOhLW0rtQZYFclIE%2FO1c58iLrDJXfB1gWJAhpJVqGvL8cMrLTUZDjanSJknJHoMVp34pqS808pVWBclRaOq6AWF7vVbsI02pchwqK6sDduefBQn3ATey0V7Q3KzFDnJmRfP93hv%2BYqSbkEUoo8WKj26aVcf1l%2BObfzmw002759W15hmU0pSBS2uIwOsjTdV2Ai417S%2Fjgl3Fvp3SswL%2BCj4osxRdoem%2Fm6uqPosUtOSST7HaXU1QiKRitpcBnmKx27kSmHvIxmR7zlTiU%2FPM3VcSeaAPszcLfKuiRANXUjKJtaT5JfYx4it7K0ae5w%2FkWOS%2BZX6iGOxW4Tnt%2BGrI0JTLHLas13g0dnKjT4mkS6KBFGD12w%2F72uFkBuTnOUXisX1z4tg7nqrBSd2jYgtQMl5LiSznh6Hvr%2BOaqgsVQvluwwt8S5xAY6pgHS80R166YJ0DIh571Em%2B8Wsp%2F3Ivwm7nuU%2BP34ERCnPdkKy2XgwEhE0P8o0AWG3PrJFFW5j12UFoUtTLUNnJY21xEBflwmU6FweJi8gzbCSoFHMwWmfK6af54wKjb6KCQXowteve3VOU%2FiNFMsUaD44unUszEZ4nK3q7BZy6WsVL4K5AxAtBK3d0sUAbbjrLjsz6n8e1qFMWkiLoPpl1%2BUvd0R8bC6&X-Amz-Signature=5ab161194fd791003d1d487196bb85a478e46b5ef3d2eb057165c542d2cb258f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4MCKA7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH3NhZ5pxfxGHcInzAsRMY6bMIjicBOxNGc7GmWJinjACIEfBagYJiNytTUKJB3DR1PHO9elqZCNJGZNwXXNsiX%2BMKv8DCBwQABoMNjM3NDIzMTgzODA1IgwknZHxghxF9wFhtqwq3APgVEVOYODnJgd0%2FzBv9QEeDZaPZVX8n0cE57msuX7LrenCRyNvoeujxUvE1RB6qeCuGxCxPll5%2BZJPlOb2YlLq5XfwXjFTwS93cUgIWngu%2Fp7pn1w%2BuVlHxDhYyG2tbA75J6rSEcUM1dMS0kILMQlr2mdk7sHTfzHBrHuhItO3okCMt5auoLUXLJf%2F%2B5ukRwYbXI0nH5iCCmO15zvOBe0HnyDg7tjKiJXqkdZhgM2fl37o%2BIYRsf2pNIGVKI9Kv%2BQXXd6TLWfCBn2bC7zGvSPGBOT0S3Fq1o08OkkuWr87VgXCan7ef7padPF0taV%2Fp%2F51QZsawexgBcHdeFFLiazbwcV%2F%2BJDIqSHOyO%2BcH1tfmUEotaCV%2BkN7t%2FjQhy95MlBHQXRZsBrvTj4Vl89VPWZKo1XelyjKqdGHSmTvQ1c99eb7c0uCWpWjer4QlhJTwzdKod%2FZk9YIiOO%2BdZyS%2F6yZNosJDF0oQuBKDeSlz7QtFuPq7HydbA5%2B8KVzkLAGKjuQOEwuXftEQsafwKbYcrHHHVn5KR60q1NKRVw2eUPIXB95sdVBPdOtedLMC%2B4zUN9ZpdoNqhwz2my8yrOgpZ8%2BehTLTvrchAMlm8h1qh6DWo3nUV9UVi3LIYhVbTC1xLnEBjqnAQp%2FRmjeE21JjsxxSy63c1HoTYcEsuew%2Fz51nHJxgdQ%2BrsjMO7BXkopAjw90837AwAr9UKK5AhPSi6bzey3KO9X2IBfthaxBvRi98LFK1QB%2FuD9sJSp%2FVU8ijMQfj6bMnkGsoQzaMW%2FbO6yUA6oak6j7RAvSjXUt7waHB9yDYNtsPHFuQQHBNaO6Be99p0nFIu1GpCBuKranbKOsnVUhQ%2FCsRSEcB0nD&X-Amz-Signature=43467385fe78737a50015e953ca76fe84ff4b0d543d844784d9f45a7eeb04b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKKSUHG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGr%2F1GPBfJstqclnWTZiQB3m3esrqsFNAA6ogXAjLrLoAiA5YyXY5o8Rj26iktg8NKuMtx7YP2yZCNlbvnzdON%2FIvyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxswl1tADkzWaUK6BKtwDUfofsttlbmBU2qFHQu0IZ3Dmr4ILjti9ZdJXJNOuaWGHWLZPQ97PMHuEpDSVR5TWw9VKGjjLiYrkK3eEdpveTD9Ow1DJkNAsIgh%2B7BkcQhKiMkv%2FxBi%2B%2FQjmRbVPh9%2BrJOW1v7zUFK7SPqtRbFmsNGqUlP9mpWKxaQzpjb%2B5wramOFW0Mh4wgjxs8CG8OcDExPj%2Bz6MpgVw9mODOhLW0rtQZYFclIE%2FO1c58iLrDJXfB1gWJAhpJVqGvL8cMrLTUZDjanSJknJHoMVp34pqS808pVWBclRaOq6AWF7vVbsI02pchwqK6sDduefBQn3ATey0V7Q3KzFDnJmRfP93hv%2BYqSbkEUoo8WKj26aVcf1l%2BObfzmw002759W15hmU0pSBS2uIwOsjTdV2Ai417S%2Fjgl3Fvp3SswL%2BCj4osxRdoem%2Fm6uqPosUtOSST7HaXU1QiKRitpcBnmKx27kSmHvIxmR7zlTiU%2FPM3VcSeaAPszcLfKuiRANXUjKJtaT5JfYx4it7K0ae5w%2FkWOS%2BZX6iGOxW4Tnt%2BGrI0JTLHLas13g0dnKjT4mkS6KBFGD12w%2F72uFkBuTnOUXisX1z4tg7nqrBSd2jYgtQMl5LiSznh6Hvr%2BOaqgsVQvluwwt8S5xAY6pgHS80R166YJ0DIh571Em%2B8Wsp%2F3Ivwm7nuU%2BP34ERCnPdkKy2XgwEhE0P8o0AWG3PrJFFW5j12UFoUtTLUNnJY21xEBflwmU6FweJi8gzbCSoFHMwWmfK6af54wKjb6KCQXowteve3VOU%2FiNFMsUaD44unUszEZ4nK3q7BZy6WsVL4K5AxAtBK3d0sUAbbjrLjsz6n8e1qFMWkiLoPpl1%2BUvd0R8bC6&X-Amz-Signature=095c6f21318d015321c6f5a4585171bc60b733956eee4ed48b5e4c340fbee8ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4H66YQQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRe8YAf6HcgbCTX%2F6kku1RZzQ8h85NUmq%2FITUmH0INzwIhAMztV88lBPmPgd429rRremmoWZdZCiqzIE%2FL11FP3HPJKv8DCBwQABoMNjM3NDIzMTgzODA1Igx7qN25MVPav8XPuzIq3AOjsnzGSUz9bi3R%2BUxEfSnaJgFtMwFtcQPR1LBUDG4SPEo64LsQMrcsYggzj8BntLA2lzSqsf9CQsTUjrFQCHVZPu5yRUd6CdkZdAIl9UZxkN9yuzhyX83LC3%2BfnbljrJuF2L8UREmmc5JAv0id6ZoSfHH6buCWx5SfSegMipWBpX0Y8pJHnxMauIybKGRSUjU3uodd33T82JjDK2LHV8cXSvRAtVMShXPLsbzsEcLe%2BpoeEsI%2BTiQWliQXKyNh6R6qh%2FiANmdmxbn1BWqYbs%2BUvimDd8SddFjhU68Z5dCh%2FM%2BWv%2Fzd0txjARVlT5HjpPZo2Shbe7JPLcMBtL7GkmvGlwARDAZ0f5eLUkjpq66%2B78O1QD01ZRGt8f%2BwxXWPVKDv8IcVMWScZRWge7k7mxj3eR5JocIGSSNf2xn7bAFbzcqUhULdb8pvH0cuQvIK6n9B2nafJ332lwPh%2BCOpUeMZJDHtgNCb7vQy86SNNY2NPOvMRN1Ry0mo9MSX3kJnY8yCdPDi0OXyM9eUehEVo5jeedrV8A%2Bf275XKtMDDQrLaJVcuym8TSwTXxskLAZWHywlDN1jOP3o%2FF423szTSi2vikL8sjjx9MqlGuUR0pmhAwmDKuDs9brrgLWgZzDsw7nEBjqkAb9Be2C4Q00YcNEX4k%2F7ouqZRgBbayE0s6w%2F%2FjhDs8C8FBIGhQyFOxN%2BApHceCZ9D%2Bd3k%2FXFRUqpKBK6%2F7bBo8%2FAQaYateC6CGWRUUPuYkiJgI1ydJZTJ1nrTMWKwV9H1YW6Gpf1aCHNThWygYi3rxSab8G6man%2FGaO1UTtPebe%2F8My6cLHQtFiwoPtJowBix9dqK%2F%2FjG25FPV9ZTPPMoAozIaMP&X-Amz-Signature=b44306b5a1929469969cb0fe37ac87b74e5e9bbe74623fb41e321c20928d2021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKKSUHG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGr%2F1GPBfJstqclnWTZiQB3m3esrqsFNAA6ogXAjLrLoAiA5YyXY5o8Rj26iktg8NKuMtx7YP2yZCNlbvnzdON%2FIvyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxswl1tADkzWaUK6BKtwDUfofsttlbmBU2qFHQu0IZ3Dmr4ILjti9ZdJXJNOuaWGHWLZPQ97PMHuEpDSVR5TWw9VKGjjLiYrkK3eEdpveTD9Ow1DJkNAsIgh%2B7BkcQhKiMkv%2FxBi%2B%2FQjmRbVPh9%2BrJOW1v7zUFK7SPqtRbFmsNGqUlP9mpWKxaQzpjb%2B5wramOFW0Mh4wgjxs8CG8OcDExPj%2Bz6MpgVw9mODOhLW0rtQZYFclIE%2FO1c58iLrDJXfB1gWJAhpJVqGvL8cMrLTUZDjanSJknJHoMVp34pqS808pVWBclRaOq6AWF7vVbsI02pchwqK6sDduefBQn3ATey0V7Q3KzFDnJmRfP93hv%2BYqSbkEUoo8WKj26aVcf1l%2BObfzmw002759W15hmU0pSBS2uIwOsjTdV2Ai417S%2Fjgl3Fvp3SswL%2BCj4osxRdoem%2Fm6uqPosUtOSST7HaXU1QiKRitpcBnmKx27kSmHvIxmR7zlTiU%2FPM3VcSeaAPszcLfKuiRANXUjKJtaT5JfYx4it7K0ae5w%2FkWOS%2BZX6iGOxW4Tnt%2BGrI0JTLHLas13g0dnKjT4mkS6KBFGD12w%2F72uFkBuTnOUXisX1z4tg7nqrBSd2jYgtQMl5LiSznh6Hvr%2BOaqgsVQvluwwt8S5xAY6pgHS80R166YJ0DIh571Em%2B8Wsp%2F3Ivwm7nuU%2BP34ERCnPdkKy2XgwEhE0P8o0AWG3PrJFFW5j12UFoUtTLUNnJY21xEBflwmU6FweJi8gzbCSoFHMwWmfK6af54wKjb6KCQXowteve3VOU%2FiNFMsUaD44unUszEZ4nK3q7BZy6WsVL4K5AxAtBK3d0sUAbbjrLjsz6n8e1qFMWkiLoPpl1%2BUvd0R8bC6&X-Amz-Signature=f832f2d70b1f01e5e15c1e21ef1e1ac1b9644bc88f23b63f76ba59c186aaacd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OSJ6JDA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOpuja38r6IWUKT%2Ff44W8gd2iIbfdUsXkb3ZMgeTCA8wIhAMk2RAWPt9VYp66%2BgabJq31J5uOEGEeOpR6xe99tuDYpKv8DCBwQABoMNjM3NDIzMTgzODA1IgyimGY3Xz94wPrbB2Yq3AMLEhcnhbljGBXstLtSj%2BahprZBvNc7Pm0P%2BUy342jbkmkRKrLE14CAR8pimbixR1QNvDTpDBN6fOlXKsKKI2kzU6qUwMSoRXN5PjiYOQkofn6QWgf%2BJQ3UOACfZGjfyTWtrblxe%2B1hrhRSM7%2BEYfFOb6ygu7YOkK%2FYaa72bdRFCHLWQhPFcAiOrSnLm3Ibx%2FzDt096jW9k%2FX8Me%2FNR7a1P4abGD6bbgL6hMd22LtG0H6Ty6N4YyvenHYmgJnCg%2BShZ3DdNCuhU48CIoCy%2Bq6m0KyHPk2ng7YvfDabYYn9HcyjwWNUM5z%2Fv9Ww5SRv7hoRo3oOSo31y863Q6%2BzN9kcDyDTcMJrZOfJHGhqOxK7faYBB3LPzsagXIT1ELVg9n2iQ1aSco9LW49omV5SJRNHFBvoSMbYAXuB049CggJUqn2sKDkkJSiaErOCm2sh8Dt65kFsAddhIchvrwsLqEpBoPHp4mUqMKC76X6J0r3HtljIPMj6JtxZBeLVorRBFGwsleUj2pEov0NSyl8Hm1mUqqKjdAn6hV22miJDVJUL6UWI%2Bq5RvsGgwIdAqSp1ZVVhQ0cD%2Fjo24KuPQ0RR65qrZtDmZklWd5mvDlj%2BnrqWjGNH5mxMHl1vXBzsQ3TDJw7nEBjqkAU1erhbYSwtsK7cr5o%2FCYWkgDpaJHzMVqP3BP48eChvdnicX72CboQb1X1CP9MQTa4GeQrxzSiXcO9S9hWQ1HkIgEcqF1isUXTyM9gUve1UrQ2jfBv19S%2Fm38%2B1UWF7iqcRC7WnnSU7bwlj5nzcrjHV4Pg%2BAW3tACmCcnMZ5GiQF%2B%2FYQ1lj%2FP0P0jFS5%2BHDchTBitrE0KkRaiKCRiJAFK1mP63VF&X-Amz-Signature=2f9fbdb186b85c523f30485523ab1ce9d971b7a74aecf5ca3ce7be8d0ded3bef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKKSUHG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGr%2F1GPBfJstqclnWTZiQB3m3esrqsFNAA6ogXAjLrLoAiA5YyXY5o8Rj26iktg8NKuMtx7YP2yZCNlbvnzdON%2FIvyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxswl1tADkzWaUK6BKtwDUfofsttlbmBU2qFHQu0IZ3Dmr4ILjti9ZdJXJNOuaWGHWLZPQ97PMHuEpDSVR5TWw9VKGjjLiYrkK3eEdpveTD9Ow1DJkNAsIgh%2B7BkcQhKiMkv%2FxBi%2B%2FQjmRbVPh9%2BrJOW1v7zUFK7SPqtRbFmsNGqUlP9mpWKxaQzpjb%2B5wramOFW0Mh4wgjxs8CG8OcDExPj%2Bz6MpgVw9mODOhLW0rtQZYFclIE%2FO1c58iLrDJXfB1gWJAhpJVqGvL8cMrLTUZDjanSJknJHoMVp34pqS808pVWBclRaOq6AWF7vVbsI02pchwqK6sDduefBQn3ATey0V7Q3KzFDnJmRfP93hv%2BYqSbkEUoo8WKj26aVcf1l%2BObfzmw002759W15hmU0pSBS2uIwOsjTdV2Ai417S%2Fjgl3Fvp3SswL%2BCj4osxRdoem%2Fm6uqPosUtOSST7HaXU1QiKRitpcBnmKx27kSmHvIxmR7zlTiU%2FPM3VcSeaAPszcLfKuiRANXUjKJtaT5JfYx4it7K0ae5w%2FkWOS%2BZX6iGOxW4Tnt%2BGrI0JTLHLas13g0dnKjT4mkS6KBFGD12w%2F72uFkBuTnOUXisX1z4tg7nqrBSd2jYgtQMl5LiSznh6Hvr%2BOaqgsVQvluwwt8S5xAY6pgHS80R166YJ0DIh571Em%2B8Wsp%2F3Ivwm7nuU%2BP34ERCnPdkKy2XgwEhE0P8o0AWG3PrJFFW5j12UFoUtTLUNnJY21xEBflwmU6FweJi8gzbCSoFHMwWmfK6af54wKjb6KCQXowteve3VOU%2FiNFMsUaD44unUszEZ4nK3q7BZy6WsVL4K5AxAtBK3d0sUAbbjrLjsz6n8e1qFMWkiLoPpl1%2BUvd0R8bC6&X-Amz-Signature=3796ebfb05b5a5c5e5b35ccb01467f0a0236bafc9b3a5d7cb7fd6c5eaa77df33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HKUDLVK%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHil%2BDRKxR5zgnD6oOQa5Qp6EWY4%2FWQNa%2BYa58e2Vm0MAiBVW7ob08isY4B8Lhz%2FGFJdUQzgM9mVyDupLDJk%2FVnzoir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMR6moQa%2B5X7u7QgbXKtwDW13l7iJL6RxK2Lpo0R5mYVHpMqjL8WcK7v2zzEyxPjjZW0Q8vjsJKHBxLM%2F4QVeL%2FkEvPcfPfFJ8LpHngoDk4j8kWEQbcIYss5tgJfHo%2FLwpaCd6YJDRf58YdD7BY5IT08FBtCNoUSy%2BIg4Hoy%2Bf3079Ud%2BJ3iIYfkztUKad6Z84Ha0BGKTdZcZJ0N1FG%2BffgwYQ9VSsj5%2F8hbRZ6TRYwoaIhXE1Ut2VQTXwhz0usTFHN9SSLGe3CQl7g9rs%2FviXZ%2FsLQqPZsc1yR26ZrAtGqR0ROwAB3WIrFoEEcbkcMaG3oH7zZb1cl2i5syYBSk5itWnKH%2Bv%2F2caKkih%2FN6YbHuxiPOE1hhQCmoMPgv6EB%2BZJdVDDW07A42FM13S7VYj2PJDyeOEwijRw4bl5Vzn9xTtyXC%2FVicbrtMM5PBiKNjU7j4vSIjJoXg0uhb5vIDtNVu1EdWrj9ynOPiUw7b4Eiwnm2UDwoM6vIcOoBBIkO%2Bmrbr%2BjWyFVqprYKax62EjvRkA7pwAXtTlcP87QlrfpknPAKGbMgB5rumce4DSimDB6NAvAC3sjGVRRQlmMGx4bC7vP4C5oraPb9QVcT%2BcWYX4ebqZjhM%2FoqcgSY8oy2kWgORPl4gUMjPmWD%2Fowy8O5xAY6pgF8RqggQJeHWHdCL%2BILvF9r1OIMHXeFgWMVaXW1Yg0gk9W72PxhRpY8NQB%2F3mmKasSVKx98p3eA%2Fou6nPf0cTw6gXO3HrT%2F9OZUd6ufMyDMPrRCxC5PhyrYRBEvXAKh%2Fr2sTznrQNFlAPsNvbfVtcg%2FeB%2Fvh7QS92GIOOj1EQFLvnP1ft2Du4k1bPHQGXjgOIKbL9UpIKNO0t9rOhkHgkktYk978xwo&X-Amz-Signature=1f5e790bc4cc76626a2e7445b3c56b181e3f05f7804d72ea5fcb2897f307d697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYLSQSH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKI8aOAYNVE%2B58PL5QKUsmqNaZaHf%2B6p7P%2Ff%2BkO4c4MAiEAoCQ77HN6c294sQrsRBJqO0f2HykXnGiJbuczCBY%2BC%2FYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDHRKmALQAjSwVdggRyrcA%2B3r4gMTaQEKgGxwXF05WVCeKuW8iMuc8WfSISy0xst%2FR4j8Lugxyxuqer%2F%2F52xnl5uNSiTLCHZf0XeBGEYkPdoMd4%2Brndw8U8npEKHAsNsvuoU4q%2BQGQ0INPuiSYqIfNjHkLEjuvxjy0t5nYHGVEekHPlbvD3WV6AkPoYyxz0iY4ms5nd1kJ1cc%2BDzp0wUevDJ2nIE2cAonzWmPPSZj2ilfj%2BQh3xWmIf%2FKhuwKiDycOcN9YJuj26rLkAD%2FKGWWvPGrWq3myXSCzd95cj5FjFmg6c67qPVOOkJjG5VmfxKUBb8gY%2FbmsczxB%2FwhZU5GfvGhGMOqGFqT%2FctKn7Mip7%2FSqOIcGc6%2FFDkSGhPCNbQBo90cEPvCpsCTrp6dyGaafY5HRJdgAjq3DvA%2Br55TZdwSuKtf8cf5wYPwh1hajchYODTbWwbiclae1CtMh0PY0pPX5G%2FrvbxuUjWVelNhKygKdJFkMdtP1UY6HBG5%2BDwXlZE%2F%2FnEvTBmfT2aTOPufVHzkdjRJbIwXuV1OhXzuSmEbxYRFYqdrsj3gJ8ROhSF0qvEHPjA5wObHgu6UxG3T4U508DgQuBmzdKCgWlxAf8wCaAqBUUemEfCHRbuXiLZkVX5Oibgf6DTl9SLBMIPEucQGOqUBkZ2IjtVnplG8ARYiIpU3ifV%2FX61Syf0PUlWtfZklu%2FQzvVFH3niXUJ%2BbHFZi8ZmVipvEBvQvnMKRNzxIigYiLkGVan9q87MDN%2BRaDDNUGgea1vaCl%2BvZ%2FBxwAYnqfxz7J6yohr3Wt3z5gVZWbDbyUonxzaTQwWFeYeNLTJjVQbuK91efCzHag4ozPH8x9nM4yA%2Biz8hItFRpvCMgc6b9B5H%2FZmEd&X-Amz-Signature=db40d00098ce0310462cc007193949cbc67fe9c43ac9a05d656cad6639bd7e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7XIN7KW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR7pUu5LAZ8cqA0cMow3wbZiJY3DPrTTl1bg%2BF3416EAIhANk5DUNGSByGuGpx3EnLlMMMD1Fc%2Fymfdy3O%2FYMyUPFmKv8DCBwQABoMNjM3NDIzMTgzODA1IgyOfo77U8XjoDYqNUcq3APnEneDBbkV%2FZhIkVIVySECKsWEJyxdsp2qNN0fxDysXorOPt4xoU7MYw%2B0bzxJuAg3BXR7FGcOs0KuHXV5x6w2UZUrioS2wCD2YdQiaG9%2FX5EZk27mKiOyzp5dZC1Wm8nq9xcSwyGOl33L4hFI9o7RO3gHBSChBeAkWO%2BNjLayAEmBhBe70hyyEre%2FDesmEHurCBdfbukay8pdoiP9oIqX7eiS%2FSyRkoDu3Ji21SrQZjHschA%2Fws33Hxm4el95PKckPWifNM%2FkG20xtw7w2CC8qFirOCJC5qjIZx5qkI5KCKt96Raj4YmvVsay6T1Kxl5uCttu%2BWIvGBrBg39yBlHgti4SoMqu08c2cCItx%2BxIHiAImDT%2Fgo2uNgkNIw0sSI%2BbYAzHcBc1EK8qGgk2MajfiBQ%2BiKA9oApp5OKQUghv51gb1TPtZXx0iMdEo4w4nV2vUXjSD4Z%2BJFR0r0l%2BSINRbw5EKrngPmyEGt3KoblEOHLg0i4QOsiiCqBUhg8oGdfgcL64BGu%2FCRvt9QCLg1g%2FMHCRQX7qZn%2FXjFCb0lLITqDaSznIqe3OFT3g929CThkLl5uj%2FB%2Frodmr%2BYZnfqt5cWEUoVb80TGfqdI%2FJxYeoNOu8Lnl8zjvnF0WWzC%2FxLnEBjqkAaTdy20UtB2ORuj4FjiKVpn5U28wxhqfLTRQB2fQLquvXIG3zQwZ%2FjBHZ%2F%2FyvFgzieIDk2cc6QJRZgcOsizmg9x8zODmWxw%2B9JOKrKLk9O3D3DrYCnTRx0GszE7GvpXhe9JZr%2Fm%2BrQQlUu8jOj6LF89SjFWBsRM8pWt3VE92mVPk0Xesy43SYGRU%2FJDNQ5s2VTCZm1UrdJOrTUZPRC6uVsJZqNe2&X-Amz-Signature=ddf4be67f45a0ec0395b68f25d2a63f78b4052956edc61b08c4fb7fdc19cc966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SO4WV73%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaJZY7p%2F2FBOYc%2FxaJnIou%2FKD5gyxbFb2qQz1uCVZELQIgYFzpl9uGk39YICqa05t9G0lMJSQPcmVDna6bpIt6%2Bbcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDCkBCpeHQCXLechiACrcA2%2FnvwZvWx10j1K7HhG6JnaQt453C0uw%2B%2BeJfcGk7lPWcw3oahzc%2FWNcD1shJW5H6Qr1ds6Qem3h2aD7sQmO5xj3jRVk%2FDoS4cdsZxpYx%2Fff776zmlIuVPD5IR%2F%2F%2B996AA8zmeG0W78AKyKfWN7gkRYYMiGzeDwS0ij%2FuWIrZbaZ94Cse362zf6WI%2FkIaotClrG9mH26uzORgfjgDE1JQYYEeA%2BiH0RlEjPWZJAZ%2BtwrPFZNIR6pMT83UEnGRjO9Kb1TfmQxfvs7BOtywo2D%2FXlQFMRq%2BXPYpBGtuK9MwqyAoNlfY2VDOipulR3qxFaDrYbDpe%2FmDNmUf%2FRvTuuup6sYhVGEdrVmPjbw2eNPAGoUBjcNPXYZ%2Fiu1JNYgRxtVPSoaiWHcwsRSYUlLtF4e%2Fu2UMhuyW%2FBxNdWU1pt%2FtrH4JXjGOleDth5n%2FLCAqy2Gsmxw9ZYEr6xZPv0%2F13YcTCsW51wN7Rxq1hshldkLyXy6yHqgwpRf3SCHXFWeg%2FmO0lMzS8E%2B4M3iZy1UUnlQGg%2B5w8KmDOfm967abFk82z6q282ytlQhdkDrEaP6fTxI7cICTE%2Fdvg59afqQbMUK%2BJiou17R%2BoR1jnKocI7UyCKHcWX4jdUluXZfe%2BnqMK3EucQGOqUBHn2NQh9Ix6kulIfrCAKTXC7xJTt5Cy2Md19FikZqsIplhmbmh%2BPuBA%2FfztvJyM2xu4EVx5lnOvsYbhFru9nq4m4oqk0ERgHn9E%2BRT128GLqsb1hMpN1dep%2BaywF3ETIyhIUtqjaZQJrJK%2BnTJdqcQQ4WeBev8OT5HNq8C0q9cOfBvmjFFkIHfHqjTBgG2XNpiAxQZDzCwCu2DuaLDvMGjL3b%2Bi86&X-Amz-Signature=83b081d00d47078f61caabacf86062772a42de2d9545f75344007663b094f60b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4GXWGD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFT9SNu0tZ2d93dofND31mxmjaePb3Fo6Hf8z0mOKHprAiEA1ZucXQjjMqTkXfRn6qKssmTqqnPxSnQZEhnNdZHXhm0q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDN7EJrzWYUrA73fOHyrcA%2FstVowoq7CMXJS3JGFYwr8A0qGBLKZNkEutvbJwn3sTu7yrLfNmTJU1Gb8vFBQQFXTQDDzc6neP2L2VFHeNwpzeqGFD5XbQxAC0S%2BCsVaeH1aYbivm3ySvvKlAUwSBOd1kirOXTeuAJJ%2F86Ij0VbdkFUpUtE8NDLlozDoO0Z5UAq%2BVsisz65UBpeWffDDiZUe9650vtAyyRVfqFeUDEwBdLI41pbl5rtOSk8Z6tlX2%2BYCdfQmv7sD3uI%2FKODV3tTXbQsZrENwOKzpPbLxj9kZasNpJ2wkr3Fs4nhC93sSWKku%2BFVvoHn4SSe%2B0jb3jrz8GcJZnJEzB67jUfpaD7MZ%2F2wec3bifXXBCikPDuZZm3oIfQHVPzGnR9EGmJU5wjk%2FCAg5km%2FjXLtRv97Uu18WJz7KdoDk2%2F9i4CRmpwvrXT43bkAE%2FvbgBoRTtvqCjvp05eLcK3DeFiSD8mMFdnvnEtDERcUoJaEihk7vXz2LNRXEp3CPPpsTgJInCccnxt5eesrupgJlYjy6doYLSWJPAGLRCcxbpLGbhs%2BT%2BG86j%2FhA%2FZsqNpcW8SgjyiPE5IOcUgikbLyrHBLPOzEBVIYrjtkboKpyYZYJYsFY9%2BrZoJkLoHrdirwJ%2BxQzV0MKzEucQGOqUBgzhY50teUO5XyECJOVwwZg1GBwasH7yhDz2NqnBQ%2FIkNOFZrNehklUCdxUnTdKkIENCwVjVThsI8m3TH7wRfIHZ2Tt%2BiCdeeNzkezvdhHAcOIGZCWSrXKYbgYnd%2BDkEPWZk62pnNRjbCRtIBf4a6z89GkqpHliGlkekGaRMFHwA2q%2Bd7vfwDc2%2FSM2D078V8tq4teHuKvDiVOqGiuqbqXB9n%2BYyf&X-Amz-Signature=857d890416d24c7c2a3f4a4736223c4a757ca1708671721cb490a9bd0d9b5df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKKSUHG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGr%2F1GPBfJstqclnWTZiQB3m3esrqsFNAA6ogXAjLrLoAiA5YyXY5o8Rj26iktg8NKuMtx7YP2yZCNlbvnzdON%2FIvyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxswl1tADkzWaUK6BKtwDUfofsttlbmBU2qFHQu0IZ3Dmr4ILjti9ZdJXJNOuaWGHWLZPQ97PMHuEpDSVR5TWw9VKGjjLiYrkK3eEdpveTD9Ow1DJkNAsIgh%2B7BkcQhKiMkv%2FxBi%2B%2FQjmRbVPh9%2BrJOW1v7zUFK7SPqtRbFmsNGqUlP9mpWKxaQzpjb%2B5wramOFW0Mh4wgjxs8CG8OcDExPj%2Bz6MpgVw9mODOhLW0rtQZYFclIE%2FO1c58iLrDJXfB1gWJAhpJVqGvL8cMrLTUZDjanSJknJHoMVp34pqS808pVWBclRaOq6AWF7vVbsI02pchwqK6sDduefBQn3ATey0V7Q3KzFDnJmRfP93hv%2BYqSbkEUoo8WKj26aVcf1l%2BObfzmw002759W15hmU0pSBS2uIwOsjTdV2Ai417S%2Fjgl3Fvp3SswL%2BCj4osxRdoem%2Fm6uqPosUtOSST7HaXU1QiKRitpcBnmKx27kSmHvIxmR7zlTiU%2FPM3VcSeaAPszcLfKuiRANXUjKJtaT5JfYx4it7K0ae5w%2FkWOS%2BZX6iGOxW4Tnt%2BGrI0JTLHLas13g0dnKjT4mkS6KBFGD12w%2F72uFkBuTnOUXisX1z4tg7nqrBSd2jYgtQMl5LiSznh6Hvr%2BOaqgsVQvluwwt8S5xAY6pgHS80R166YJ0DIh571Em%2B8Wsp%2F3Ivwm7nuU%2BP34ERCnPdkKy2XgwEhE0P8o0AWG3PrJFFW5j12UFoUtTLUNnJY21xEBflwmU6FweJi8gzbCSoFHMwWmfK6af54wKjb6KCQXowteve3VOU%2FiNFMsUaD44unUszEZ4nK3q7BZy6WsVL4K5AxAtBK3d0sUAbbjrLjsz6n8e1qFMWkiLoPpl1%2BUvd0R8bC6&X-Amz-Signature=f372609eeffc58071b2b20f6a10d3a365abc01ce0e78905db78d030e89d9d5b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKKSUHG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGr%2F1GPBfJstqclnWTZiQB3m3esrqsFNAA6ogXAjLrLoAiA5YyXY5o8Rj26iktg8NKuMtx7YP2yZCNlbvnzdON%2FIvyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxswl1tADkzWaUK6BKtwDUfofsttlbmBU2qFHQu0IZ3Dmr4ILjti9ZdJXJNOuaWGHWLZPQ97PMHuEpDSVR5TWw9VKGjjLiYrkK3eEdpveTD9Ow1DJkNAsIgh%2B7BkcQhKiMkv%2FxBi%2B%2FQjmRbVPh9%2BrJOW1v7zUFK7SPqtRbFmsNGqUlP9mpWKxaQzpjb%2B5wramOFW0Mh4wgjxs8CG8OcDExPj%2Bz6MpgVw9mODOhLW0rtQZYFclIE%2FO1c58iLrDJXfB1gWJAhpJVqGvL8cMrLTUZDjanSJknJHoMVp34pqS808pVWBclRaOq6AWF7vVbsI02pchwqK6sDduefBQn3ATey0V7Q3KzFDnJmRfP93hv%2BYqSbkEUoo8WKj26aVcf1l%2BObfzmw002759W15hmU0pSBS2uIwOsjTdV2Ai417S%2Fjgl3Fvp3SswL%2BCj4osxRdoem%2Fm6uqPosUtOSST7HaXU1QiKRitpcBnmKx27kSmHvIxmR7zlTiU%2FPM3VcSeaAPszcLfKuiRANXUjKJtaT5JfYx4it7K0ae5w%2FkWOS%2BZX6iGOxW4Tnt%2BGrI0JTLHLas13g0dnKjT4mkS6KBFGD12w%2F72uFkBuTnOUXisX1z4tg7nqrBSd2jYgtQMl5LiSznh6Hvr%2BOaqgsVQvluwwt8S5xAY6pgHS80R166YJ0DIh571Em%2B8Wsp%2F3Ivwm7nuU%2BP34ERCnPdkKy2XgwEhE0P8o0AWG3PrJFFW5j12UFoUtTLUNnJY21xEBflwmU6FweJi8gzbCSoFHMwWmfK6af54wKjb6KCQXowteve3VOU%2FiNFMsUaD44unUszEZ4nK3q7BZy6WsVL4K5AxAtBK3d0sUAbbjrLjsz6n8e1qFMWkiLoPpl1%2BUvd0R8bC6&X-Amz-Signature=73a1201b50f513cca7a2eddb2faf611c3bfc0b1a1a35f618a56ff1fe445bfa47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGSVMLC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrBWMERIXuGUwKSbsClUM4fRWY5SCPGkJPUtRGEG7jfgIhAOU2hGi5Cc1VcmVyklMkY6Q91JZwG0n6HbtOu02TaRTRKv8DCBwQABoMNjM3NDIzMTgzODA1IgzKp1RRp8BWMMfHMKwq3AO%2BXIJGgNkjjdYiSJZNv3HGFSrSB7bYstDQRM73S%2F27j%2BrouqZ%2F2msVjgr7gYq4EtZ0FPpG6sBIuIssX4iGoiDkn7j4vl3vzTJK7hmj95IGlTHOusgLUWUext%2BYnbC05BOpNZnk2ziI3Zlvxu%2BPsXqGzaB9%2Fb3ZsfR1m9Ib6OZWAlkOSrZWnWQUpwyx1zbT%2BlOd3cHXnGoDbR78ywMufaYXSa6esHo9iEj0O5sqD0OqPP1k1HbSP6Um%2FCfQkoN1mCLfnOMdFslacov5NQB%2BV4spdGoCemzm%2FayxRPkclHE1o3Yzf4m40BYEKH3a7axaERCVuz%2BQm8dfIGoRAXK4v5xLjoZzOMBEdPXBsCD0%2FfcOMT4rd9I74EfmRFAIkri%2FGz98HDvDOaQlrHlnRdiOyZuk4KlKI6cqzMGs8qboav%2FsE2Kb2P0GCPxeTu7rxBeLk7%2F%2FF8CkS1l%2BhaULfa0JB%2BztBrkb6nJhQvxTkeGywuHvdexAKZlih2FM4CTCRRS0Olk4TZ4uFx9UqAOKXGzEkPPsY5eiYubfWqPO65W1F9jizQ393wovDD244fF8ukRyWcc9GXS05ajpe2vmjqti9BUH%2FR71P7vDAJcGrTsm1aPCspJeftED%2BoVJkIdaDzDIw7nEBjqkAbmGJHKYrg9KwmfbA8F7SvZhlxt5NdCeDzgW5Jyw5HlLfcKqtuyI%2B7WWBl0JqY1Dp8NslvtKDwHuh06NLuphLEZWiDi9Iceit33OYmHSdtzZCUXtM6hMGfC2rBhX3kQStz4sRFXp7V3TsikX3ymDh4PkvuP8aHV6ZYxQZD163G9wS7xEjVSQ25rOvLH%2B%2FAHYtmUr%2B%2BMRrFG7lHpBJbN%2BhNl9hSu9&X-Amz-Signature=1d7c38f1567c98060dd2b6d8d50c6dee8852e0ea6550b1b0df521dc095f6f2a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGSVMLC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrBWMERIXuGUwKSbsClUM4fRWY5SCPGkJPUtRGEG7jfgIhAOU2hGi5Cc1VcmVyklMkY6Q91JZwG0n6HbtOu02TaRTRKv8DCBwQABoMNjM3NDIzMTgzODA1IgzKp1RRp8BWMMfHMKwq3AO%2BXIJGgNkjjdYiSJZNv3HGFSrSB7bYstDQRM73S%2F27j%2BrouqZ%2F2msVjgr7gYq4EtZ0FPpG6sBIuIssX4iGoiDkn7j4vl3vzTJK7hmj95IGlTHOusgLUWUext%2BYnbC05BOpNZnk2ziI3Zlvxu%2BPsXqGzaB9%2Fb3ZsfR1m9Ib6OZWAlkOSrZWnWQUpwyx1zbT%2BlOd3cHXnGoDbR78ywMufaYXSa6esHo9iEj0O5sqD0OqPP1k1HbSP6Um%2FCfQkoN1mCLfnOMdFslacov5NQB%2BV4spdGoCemzm%2FayxRPkclHE1o3Yzf4m40BYEKH3a7axaERCVuz%2BQm8dfIGoRAXK4v5xLjoZzOMBEdPXBsCD0%2FfcOMT4rd9I74EfmRFAIkri%2FGz98HDvDOaQlrHlnRdiOyZuk4KlKI6cqzMGs8qboav%2FsE2Kb2P0GCPxeTu7rxBeLk7%2F%2FF8CkS1l%2BhaULfa0JB%2BztBrkb6nJhQvxTkeGywuHvdexAKZlih2FM4CTCRRS0Olk4TZ4uFx9UqAOKXGzEkPPsY5eiYubfWqPO65W1F9jizQ393wovDD244fF8ukRyWcc9GXS05ajpe2vmjqti9BUH%2FR71P7vDAJcGrTsm1aPCspJeftED%2BoVJkIdaDzDIw7nEBjqkAbmGJHKYrg9KwmfbA8F7SvZhlxt5NdCeDzgW5Jyw5HlLfcKqtuyI%2B7WWBl0JqY1Dp8NslvtKDwHuh06NLuphLEZWiDi9Iceit33OYmHSdtzZCUXtM6hMGfC2rBhX3kQStz4sRFXp7V3TsikX3ymDh4PkvuP8aHV6ZYxQZD163G9wS7xEjVSQ25rOvLH%2B%2FAHYtmUr%2B%2BMRrFG7lHpBJbN%2BhNl9hSu9&X-Amz-Signature=03a5d09f7934e9135d19fe321d16b33c6b4b792b922c0119121cc9b9e6bfcf22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGSVMLC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrBWMERIXuGUwKSbsClUM4fRWY5SCPGkJPUtRGEG7jfgIhAOU2hGi5Cc1VcmVyklMkY6Q91JZwG0n6HbtOu02TaRTRKv8DCBwQABoMNjM3NDIzMTgzODA1IgzKp1RRp8BWMMfHMKwq3AO%2BXIJGgNkjjdYiSJZNv3HGFSrSB7bYstDQRM73S%2F27j%2BrouqZ%2F2msVjgr7gYq4EtZ0FPpG6sBIuIssX4iGoiDkn7j4vl3vzTJK7hmj95IGlTHOusgLUWUext%2BYnbC05BOpNZnk2ziI3Zlvxu%2BPsXqGzaB9%2Fb3ZsfR1m9Ib6OZWAlkOSrZWnWQUpwyx1zbT%2BlOd3cHXnGoDbR78ywMufaYXSa6esHo9iEj0O5sqD0OqPP1k1HbSP6Um%2FCfQkoN1mCLfnOMdFslacov5NQB%2BV4spdGoCemzm%2FayxRPkclHE1o3Yzf4m40BYEKH3a7axaERCVuz%2BQm8dfIGoRAXK4v5xLjoZzOMBEdPXBsCD0%2FfcOMT4rd9I74EfmRFAIkri%2FGz98HDvDOaQlrHlnRdiOyZuk4KlKI6cqzMGs8qboav%2FsE2Kb2P0GCPxeTu7rxBeLk7%2F%2FF8CkS1l%2BhaULfa0JB%2BztBrkb6nJhQvxTkeGywuHvdexAKZlih2FM4CTCRRS0Olk4TZ4uFx9UqAOKXGzEkPPsY5eiYubfWqPO65W1F9jizQ393wovDD244fF8ukRyWcc9GXS05ajpe2vmjqti9BUH%2FR71P7vDAJcGrTsm1aPCspJeftED%2BoVJkIdaDzDIw7nEBjqkAbmGJHKYrg9KwmfbA8F7SvZhlxt5NdCeDzgW5Jyw5HlLfcKqtuyI%2B7WWBl0JqY1Dp8NslvtKDwHuh06NLuphLEZWiDi9Iceit33OYmHSdtzZCUXtM6hMGfC2rBhX3kQStz4sRFXp7V3TsikX3ymDh4PkvuP8aHV6ZYxQZD163G9wS7xEjVSQ25rOvLH%2B%2FAHYtmUr%2B%2BMRrFG7lHpBJbN%2BhNl9hSu9&X-Amz-Signature=ff3edc9386fa9b1fbe45c6bed9d0489314d655dc1549437a72952135307308e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGSVMLC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrBWMERIXuGUwKSbsClUM4fRWY5SCPGkJPUtRGEG7jfgIhAOU2hGi5Cc1VcmVyklMkY6Q91JZwG0n6HbtOu02TaRTRKv8DCBwQABoMNjM3NDIzMTgzODA1IgzKp1RRp8BWMMfHMKwq3AO%2BXIJGgNkjjdYiSJZNv3HGFSrSB7bYstDQRM73S%2F27j%2BrouqZ%2F2msVjgr7gYq4EtZ0FPpG6sBIuIssX4iGoiDkn7j4vl3vzTJK7hmj95IGlTHOusgLUWUext%2BYnbC05BOpNZnk2ziI3Zlvxu%2BPsXqGzaB9%2Fb3ZsfR1m9Ib6OZWAlkOSrZWnWQUpwyx1zbT%2BlOd3cHXnGoDbR78ywMufaYXSa6esHo9iEj0O5sqD0OqPP1k1HbSP6Um%2FCfQkoN1mCLfnOMdFslacov5NQB%2BV4spdGoCemzm%2FayxRPkclHE1o3Yzf4m40BYEKH3a7axaERCVuz%2BQm8dfIGoRAXK4v5xLjoZzOMBEdPXBsCD0%2FfcOMT4rd9I74EfmRFAIkri%2FGz98HDvDOaQlrHlnRdiOyZuk4KlKI6cqzMGs8qboav%2FsE2Kb2P0GCPxeTu7rxBeLk7%2F%2FF8CkS1l%2BhaULfa0JB%2BztBrkb6nJhQvxTkeGywuHvdexAKZlih2FM4CTCRRS0Olk4TZ4uFx9UqAOKXGzEkPPsY5eiYubfWqPO65W1F9jizQ393wovDD244fF8ukRyWcc9GXS05ajpe2vmjqti9BUH%2FR71P7vDAJcGrTsm1aPCspJeftED%2BoVJkIdaDzDIw7nEBjqkAbmGJHKYrg9KwmfbA8F7SvZhlxt5NdCeDzgW5Jyw5HlLfcKqtuyI%2B7WWBl0JqY1Dp8NslvtKDwHuh06NLuphLEZWiDi9Iceit33OYmHSdtzZCUXtM6hMGfC2rBhX3kQStz4sRFXp7V3TsikX3ymDh4PkvuP8aHV6ZYxQZD163G9wS7xEjVSQ25rOvLH%2B%2FAHYtmUr%2B%2BMRrFG7lHpBJbN%2BhNl9hSu9&X-Amz-Signature=9a09633b91fc70b001acbf16dfed90e35029f2556d889f875f615c38dfbac796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGSVMLC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrBWMERIXuGUwKSbsClUM4fRWY5SCPGkJPUtRGEG7jfgIhAOU2hGi5Cc1VcmVyklMkY6Q91JZwG0n6HbtOu02TaRTRKv8DCBwQABoMNjM3NDIzMTgzODA1IgzKp1RRp8BWMMfHMKwq3AO%2BXIJGgNkjjdYiSJZNv3HGFSrSB7bYstDQRM73S%2F27j%2BrouqZ%2F2msVjgr7gYq4EtZ0FPpG6sBIuIssX4iGoiDkn7j4vl3vzTJK7hmj95IGlTHOusgLUWUext%2BYnbC05BOpNZnk2ziI3Zlvxu%2BPsXqGzaB9%2Fb3ZsfR1m9Ib6OZWAlkOSrZWnWQUpwyx1zbT%2BlOd3cHXnGoDbR78ywMufaYXSa6esHo9iEj0O5sqD0OqPP1k1HbSP6Um%2FCfQkoN1mCLfnOMdFslacov5NQB%2BV4spdGoCemzm%2FayxRPkclHE1o3Yzf4m40BYEKH3a7axaERCVuz%2BQm8dfIGoRAXK4v5xLjoZzOMBEdPXBsCD0%2FfcOMT4rd9I74EfmRFAIkri%2FGz98HDvDOaQlrHlnRdiOyZuk4KlKI6cqzMGs8qboav%2FsE2Kb2P0GCPxeTu7rxBeLk7%2F%2FF8CkS1l%2BhaULfa0JB%2BztBrkb6nJhQvxTkeGywuHvdexAKZlih2FM4CTCRRS0Olk4TZ4uFx9UqAOKXGzEkPPsY5eiYubfWqPO65W1F9jizQ393wovDD244fF8ukRyWcc9GXS05ajpe2vmjqti9BUH%2FR71P7vDAJcGrTsm1aPCspJeftED%2BoVJkIdaDzDIw7nEBjqkAbmGJHKYrg9KwmfbA8F7SvZhlxt5NdCeDzgW5Jyw5HlLfcKqtuyI%2B7WWBl0JqY1Dp8NslvtKDwHuh06NLuphLEZWiDi9Iceit33OYmHSdtzZCUXtM6hMGfC2rBhX3kQStz4sRFXp7V3TsikX3ymDh4PkvuP8aHV6ZYxQZD163G9wS7xEjVSQ25rOvLH%2B%2FAHYtmUr%2B%2BMRrFG7lHpBJbN%2BhNl9hSu9&X-Amz-Signature=ecc24edcdf573c18c1b50211d70c471755b4e5285bf51ad239b147b703ac00c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGSVMLC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrBWMERIXuGUwKSbsClUM4fRWY5SCPGkJPUtRGEG7jfgIhAOU2hGi5Cc1VcmVyklMkY6Q91JZwG0n6HbtOu02TaRTRKv8DCBwQABoMNjM3NDIzMTgzODA1IgzKp1RRp8BWMMfHMKwq3AO%2BXIJGgNkjjdYiSJZNv3HGFSrSB7bYstDQRM73S%2F27j%2BrouqZ%2F2msVjgr7gYq4EtZ0FPpG6sBIuIssX4iGoiDkn7j4vl3vzTJK7hmj95IGlTHOusgLUWUext%2BYnbC05BOpNZnk2ziI3Zlvxu%2BPsXqGzaB9%2Fb3ZsfR1m9Ib6OZWAlkOSrZWnWQUpwyx1zbT%2BlOd3cHXnGoDbR78ywMufaYXSa6esHo9iEj0O5sqD0OqPP1k1HbSP6Um%2FCfQkoN1mCLfnOMdFslacov5NQB%2BV4spdGoCemzm%2FayxRPkclHE1o3Yzf4m40BYEKH3a7axaERCVuz%2BQm8dfIGoRAXK4v5xLjoZzOMBEdPXBsCD0%2FfcOMT4rd9I74EfmRFAIkri%2FGz98HDvDOaQlrHlnRdiOyZuk4KlKI6cqzMGs8qboav%2FsE2Kb2P0GCPxeTu7rxBeLk7%2F%2FF8CkS1l%2BhaULfa0JB%2BztBrkb6nJhQvxTkeGywuHvdexAKZlih2FM4CTCRRS0Olk4TZ4uFx9UqAOKXGzEkPPsY5eiYubfWqPO65W1F9jizQ393wovDD244fF8ukRyWcc9GXS05ajpe2vmjqti9BUH%2FR71P7vDAJcGrTsm1aPCspJeftED%2BoVJkIdaDzDIw7nEBjqkAbmGJHKYrg9KwmfbA8F7SvZhlxt5NdCeDzgW5Jyw5HlLfcKqtuyI%2B7WWBl0JqY1Dp8NslvtKDwHuh06NLuphLEZWiDi9Iceit33OYmHSdtzZCUXtM6hMGfC2rBhX3kQStz4sRFXp7V3TsikX3ymDh4PkvuP8aHV6ZYxQZD163G9wS7xEjVSQ25rOvLH%2B%2FAHYtmUr%2B%2BMRrFG7lHpBJbN%2BhNl9hSu9&X-Amz-Signature=1571c6e799a7567715fd07baf566b7b6b5e8f71e8cb1f391f8e47df170b053d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGSVMLC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrBWMERIXuGUwKSbsClUM4fRWY5SCPGkJPUtRGEG7jfgIhAOU2hGi5Cc1VcmVyklMkY6Q91JZwG0n6HbtOu02TaRTRKv8DCBwQABoMNjM3NDIzMTgzODA1IgzKp1RRp8BWMMfHMKwq3AO%2BXIJGgNkjjdYiSJZNv3HGFSrSB7bYstDQRM73S%2F27j%2BrouqZ%2F2msVjgr7gYq4EtZ0FPpG6sBIuIssX4iGoiDkn7j4vl3vzTJK7hmj95IGlTHOusgLUWUext%2BYnbC05BOpNZnk2ziI3Zlvxu%2BPsXqGzaB9%2Fb3ZsfR1m9Ib6OZWAlkOSrZWnWQUpwyx1zbT%2BlOd3cHXnGoDbR78ywMufaYXSa6esHo9iEj0O5sqD0OqPP1k1HbSP6Um%2FCfQkoN1mCLfnOMdFslacov5NQB%2BV4spdGoCemzm%2FayxRPkclHE1o3Yzf4m40BYEKH3a7axaERCVuz%2BQm8dfIGoRAXK4v5xLjoZzOMBEdPXBsCD0%2FfcOMT4rd9I74EfmRFAIkri%2FGz98HDvDOaQlrHlnRdiOyZuk4KlKI6cqzMGs8qboav%2FsE2Kb2P0GCPxeTu7rxBeLk7%2F%2FF8CkS1l%2BhaULfa0JB%2BztBrkb6nJhQvxTkeGywuHvdexAKZlih2FM4CTCRRS0Olk4TZ4uFx9UqAOKXGzEkPPsY5eiYubfWqPO65W1F9jizQ393wovDD244fF8ukRyWcc9GXS05ajpe2vmjqti9BUH%2FR71P7vDAJcGrTsm1aPCspJeftED%2BoVJkIdaDzDIw7nEBjqkAbmGJHKYrg9KwmfbA8F7SvZhlxt5NdCeDzgW5Jyw5HlLfcKqtuyI%2B7WWBl0JqY1Dp8NslvtKDwHuh06NLuphLEZWiDi9Iceit33OYmHSdtzZCUXtM6hMGfC2rBhX3kQStz4sRFXp7V3TsikX3ymDh4PkvuP8aHV6ZYxQZD163G9wS7xEjVSQ25rOvLH%2B%2FAHYtmUr%2B%2BMRrFG7lHpBJbN%2BhNl9hSu9&X-Amz-Signature=773839029c4ebe4cf5b3e2e284827bced1ca16c9341d9aff95252bdce750e521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGSVMLC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrBWMERIXuGUwKSbsClUM4fRWY5SCPGkJPUtRGEG7jfgIhAOU2hGi5Cc1VcmVyklMkY6Q91JZwG0n6HbtOu02TaRTRKv8DCBwQABoMNjM3NDIzMTgzODA1IgzKp1RRp8BWMMfHMKwq3AO%2BXIJGgNkjjdYiSJZNv3HGFSrSB7bYstDQRM73S%2F27j%2BrouqZ%2F2msVjgr7gYq4EtZ0FPpG6sBIuIssX4iGoiDkn7j4vl3vzTJK7hmj95IGlTHOusgLUWUext%2BYnbC05BOpNZnk2ziI3Zlvxu%2BPsXqGzaB9%2Fb3ZsfR1m9Ib6OZWAlkOSrZWnWQUpwyx1zbT%2BlOd3cHXnGoDbR78ywMufaYXSa6esHo9iEj0O5sqD0OqPP1k1HbSP6Um%2FCfQkoN1mCLfnOMdFslacov5NQB%2BV4spdGoCemzm%2FayxRPkclHE1o3Yzf4m40BYEKH3a7axaERCVuz%2BQm8dfIGoRAXK4v5xLjoZzOMBEdPXBsCD0%2FfcOMT4rd9I74EfmRFAIkri%2FGz98HDvDOaQlrHlnRdiOyZuk4KlKI6cqzMGs8qboav%2FsE2Kb2P0GCPxeTu7rxBeLk7%2F%2FF8CkS1l%2BhaULfa0JB%2BztBrkb6nJhQvxTkeGywuHvdexAKZlih2FM4CTCRRS0Olk4TZ4uFx9UqAOKXGzEkPPsY5eiYubfWqPO65W1F9jizQ393wovDD244fF8ukRyWcc9GXS05ajpe2vmjqti9BUH%2FR71P7vDAJcGrTsm1aPCspJeftED%2BoVJkIdaDzDIw7nEBjqkAbmGJHKYrg9KwmfbA8F7SvZhlxt5NdCeDzgW5Jyw5HlLfcKqtuyI%2B7WWBl0JqY1Dp8NslvtKDwHuh06NLuphLEZWiDi9Iceit33OYmHSdtzZCUXtM6hMGfC2rBhX3kQStz4sRFXp7V3TsikX3ymDh4PkvuP8aHV6ZYxQZD163G9wS7xEjVSQ25rOvLH%2B%2FAHYtmUr%2B%2BMRrFG7lHpBJbN%2BhNl9hSu9&X-Amz-Signature=19fb253f0b3b43b0af9dc5c903dad519bec584120c5f114ea1656c9ccb5cfefa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGSVMLC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrBWMERIXuGUwKSbsClUM4fRWY5SCPGkJPUtRGEG7jfgIhAOU2hGi5Cc1VcmVyklMkY6Q91JZwG0n6HbtOu02TaRTRKv8DCBwQABoMNjM3NDIzMTgzODA1IgzKp1RRp8BWMMfHMKwq3AO%2BXIJGgNkjjdYiSJZNv3HGFSrSB7bYstDQRM73S%2F27j%2BrouqZ%2F2msVjgr7gYq4EtZ0FPpG6sBIuIssX4iGoiDkn7j4vl3vzTJK7hmj95IGlTHOusgLUWUext%2BYnbC05BOpNZnk2ziI3Zlvxu%2BPsXqGzaB9%2Fb3ZsfR1m9Ib6OZWAlkOSrZWnWQUpwyx1zbT%2BlOd3cHXnGoDbR78ywMufaYXSa6esHo9iEj0O5sqD0OqPP1k1HbSP6Um%2FCfQkoN1mCLfnOMdFslacov5NQB%2BV4spdGoCemzm%2FayxRPkclHE1o3Yzf4m40BYEKH3a7axaERCVuz%2BQm8dfIGoRAXK4v5xLjoZzOMBEdPXBsCD0%2FfcOMT4rd9I74EfmRFAIkri%2FGz98HDvDOaQlrHlnRdiOyZuk4KlKI6cqzMGs8qboav%2FsE2Kb2P0GCPxeTu7rxBeLk7%2F%2FF8CkS1l%2BhaULfa0JB%2BztBrkb6nJhQvxTkeGywuHvdexAKZlih2FM4CTCRRS0Olk4TZ4uFx9UqAOKXGzEkPPsY5eiYubfWqPO65W1F9jizQ393wovDD244fF8ukRyWcc9GXS05ajpe2vmjqti9BUH%2FR71P7vDAJcGrTsm1aPCspJeftED%2BoVJkIdaDzDIw7nEBjqkAbmGJHKYrg9KwmfbA8F7SvZhlxt5NdCeDzgW5Jyw5HlLfcKqtuyI%2B7WWBl0JqY1Dp8NslvtKDwHuh06NLuphLEZWiDi9Iceit33OYmHSdtzZCUXtM6hMGfC2rBhX3kQStz4sRFXp7V3TsikX3ymDh4PkvuP8aHV6ZYxQZD163G9wS7xEjVSQ25rOvLH%2B%2FAHYtmUr%2B%2BMRrFG7lHpBJbN%2BhNl9hSu9&X-Amz-Signature=95ab1d3fb50c436ea4714e1552e350a62926353e1eebfbcabfba83340ffae8bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGSVMLC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrBWMERIXuGUwKSbsClUM4fRWY5SCPGkJPUtRGEG7jfgIhAOU2hGi5Cc1VcmVyklMkY6Q91JZwG0n6HbtOu02TaRTRKv8DCBwQABoMNjM3NDIzMTgzODA1IgzKp1RRp8BWMMfHMKwq3AO%2BXIJGgNkjjdYiSJZNv3HGFSrSB7bYstDQRM73S%2F27j%2BrouqZ%2F2msVjgr7gYq4EtZ0FPpG6sBIuIssX4iGoiDkn7j4vl3vzTJK7hmj95IGlTHOusgLUWUext%2BYnbC05BOpNZnk2ziI3Zlvxu%2BPsXqGzaB9%2Fb3ZsfR1m9Ib6OZWAlkOSrZWnWQUpwyx1zbT%2BlOd3cHXnGoDbR78ywMufaYXSa6esHo9iEj0O5sqD0OqPP1k1HbSP6Um%2FCfQkoN1mCLfnOMdFslacov5NQB%2BV4spdGoCemzm%2FayxRPkclHE1o3Yzf4m40BYEKH3a7axaERCVuz%2BQm8dfIGoRAXK4v5xLjoZzOMBEdPXBsCD0%2FfcOMT4rd9I74EfmRFAIkri%2FGz98HDvDOaQlrHlnRdiOyZuk4KlKI6cqzMGs8qboav%2FsE2Kb2P0GCPxeTu7rxBeLk7%2F%2FF8CkS1l%2BhaULfa0JB%2BztBrkb6nJhQvxTkeGywuHvdexAKZlih2FM4CTCRRS0Olk4TZ4uFx9UqAOKXGzEkPPsY5eiYubfWqPO65W1F9jizQ393wovDD244fF8ukRyWcc9GXS05ajpe2vmjqti9BUH%2FR71P7vDAJcGrTsm1aPCspJeftED%2BoVJkIdaDzDIw7nEBjqkAbmGJHKYrg9KwmfbA8F7SvZhlxt5NdCeDzgW5Jyw5HlLfcKqtuyI%2B7WWBl0JqY1Dp8NslvtKDwHuh06NLuphLEZWiDi9Iceit33OYmHSdtzZCUXtM6hMGfC2rBhX3kQStz4sRFXp7V3TsikX3ymDh4PkvuP8aHV6ZYxQZD163G9wS7xEjVSQ25rOvLH%2B%2FAHYtmUr%2B%2BMRrFG7lHpBJbN%2BhNl9hSu9&X-Amz-Signature=543ffd3a7fcd6ca494950b8368b4d3352e40c6648edb75c96b78e91506236c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
