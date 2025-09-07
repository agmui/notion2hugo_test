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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGPL3TP%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDWQobi%2FAkeky%2BrwI36WANAQFNjcT0bKcKzxV9G%2BLTQgIgK3hHLJCZxJi1ybmlmTJxXgwutC6JbAa8%2BrDIhPccC%2BAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwK7Bayy5vxJC68NyrcA7DTKe3Rn4hQto%2BHwG95%2B0qEmP61S%2FQWhxrB02ASldGZo5OMXypjKD54MspvrJMc7Qd4J%2F97mnHO9eym20yNJt2ABcaG2LogLTkNH5TJqEb1RmNPRrbkJwsY9hqkwbZ0d6d0qBVzaY6gQMMtRj2b8Q9HnYta8ocHzI0FMIjzNyiOp%2FiBsyvhygCvWeqvsB4mEkaX%2BlwaA7fYfH9e2YgA8AkRggY0Gie%2FgF4qWALRW79pRiG%2FHpGd7p0PPpvtinGrXjrwayNLtHyC5EvaYvc8XfKrr4zZsVrq9VkoowUmyVkniEe5W%2Bo30U2edB1%2FDfNs8NTF%2BczWPy0lp1Ne39qpHY7gZOcEJqRxB%2BEVH%2FiUNXVUK8K9bp0Dj1oKWoy4u6quwndWKjYIXO7nHysXY%2BP%2BFseOBBP%2BF4dR8HAqhpgysOk%2BHTDlcEAEdh6jU4a8lqeRFfk9FE3e7%2FDDScp3j%2FsYBp1yEBD%2FPBx1G3uwtFRYE%2BvhcjxDbOmbuXJtxSFF6GIPeb9z908U5NRdnjSN8W6wojvF06iWG4X5jsFKbWMcw3ZiYUfePH8ijouBoPqR%2F4mmrjjsdkb8eG902p%2F4NsTR9KokJaC9ZHO7y0d99Hagpm3qbKS9%2BX%2FGzgICUyPUMODD8sUGOqUBB%2BnCSLzqyMmVdqHppTDM4mHNfTxrOEYOZ%2F5NH%2Bv%2FN09F6SFQSNT4MoEBhTcWG6YapjcC91iogp%2B35BuBQvPPpZ7Hm1PT%2FGcCr3c0H41yr%2FaF2dRFoQy42Wl1XDfzmXKtkSZ%2BCc6R7y3tQM8gvdiQkHqilytXzHAfcbMLum3H59%2FbqRkhgBC3OhSih7WbcO8lN22RcCaolQduLb5%2FUZSddvHC6dGG&X-Amz-Signature=109d1603016d911512c1c69dc1b45852294d291aa34ee8c635fad8aaa041a4fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGPL3TP%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDWQobi%2FAkeky%2BrwI36WANAQFNjcT0bKcKzxV9G%2BLTQgIgK3hHLJCZxJi1ybmlmTJxXgwutC6JbAa8%2BrDIhPccC%2BAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwK7Bayy5vxJC68NyrcA7DTKe3Rn4hQto%2BHwG95%2B0qEmP61S%2FQWhxrB02ASldGZo5OMXypjKD54MspvrJMc7Qd4J%2F97mnHO9eym20yNJt2ABcaG2LogLTkNH5TJqEb1RmNPRrbkJwsY9hqkwbZ0d6d0qBVzaY6gQMMtRj2b8Q9HnYta8ocHzI0FMIjzNyiOp%2FiBsyvhygCvWeqvsB4mEkaX%2BlwaA7fYfH9e2YgA8AkRggY0Gie%2FgF4qWALRW79pRiG%2FHpGd7p0PPpvtinGrXjrwayNLtHyC5EvaYvc8XfKrr4zZsVrq9VkoowUmyVkniEe5W%2Bo30U2edB1%2FDfNs8NTF%2BczWPy0lp1Ne39qpHY7gZOcEJqRxB%2BEVH%2FiUNXVUK8K9bp0Dj1oKWoy4u6quwndWKjYIXO7nHysXY%2BP%2BFseOBBP%2BF4dR8HAqhpgysOk%2BHTDlcEAEdh6jU4a8lqeRFfk9FE3e7%2FDDScp3j%2FsYBp1yEBD%2FPBx1G3uwtFRYE%2BvhcjxDbOmbuXJtxSFF6GIPeb9z908U5NRdnjSN8W6wojvF06iWG4X5jsFKbWMcw3ZiYUfePH8ijouBoPqR%2F4mmrjjsdkb8eG902p%2F4NsTR9KokJaC9ZHO7y0d99Hagpm3qbKS9%2BX%2FGzgICUyPUMODD8sUGOqUBB%2BnCSLzqyMmVdqHppTDM4mHNfTxrOEYOZ%2F5NH%2Bv%2FN09F6SFQSNT4MoEBhTcWG6YapjcC91iogp%2B35BuBQvPPpZ7Hm1PT%2FGcCr3c0H41yr%2FaF2dRFoQy42Wl1XDfzmXKtkSZ%2BCc6R7y3tQM8gvdiQkHqilytXzHAfcbMLum3H59%2FbqRkhgBC3OhSih7WbcO8lN22RcCaolQduLb5%2FUZSddvHC6dGG&X-Amz-Signature=5ad5af0ad0944c96ec8406a76b9159f2d8b04babc139843b18ee545883edd17e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGPL3TP%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDWQobi%2FAkeky%2BrwI36WANAQFNjcT0bKcKzxV9G%2BLTQgIgK3hHLJCZxJi1ybmlmTJxXgwutC6JbAa8%2BrDIhPccC%2BAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwK7Bayy5vxJC68NyrcA7DTKe3Rn4hQto%2BHwG95%2B0qEmP61S%2FQWhxrB02ASldGZo5OMXypjKD54MspvrJMc7Qd4J%2F97mnHO9eym20yNJt2ABcaG2LogLTkNH5TJqEb1RmNPRrbkJwsY9hqkwbZ0d6d0qBVzaY6gQMMtRj2b8Q9HnYta8ocHzI0FMIjzNyiOp%2FiBsyvhygCvWeqvsB4mEkaX%2BlwaA7fYfH9e2YgA8AkRggY0Gie%2FgF4qWALRW79pRiG%2FHpGd7p0PPpvtinGrXjrwayNLtHyC5EvaYvc8XfKrr4zZsVrq9VkoowUmyVkniEe5W%2Bo30U2edB1%2FDfNs8NTF%2BczWPy0lp1Ne39qpHY7gZOcEJqRxB%2BEVH%2FiUNXVUK8K9bp0Dj1oKWoy4u6quwndWKjYIXO7nHysXY%2BP%2BFseOBBP%2BF4dR8HAqhpgysOk%2BHTDlcEAEdh6jU4a8lqeRFfk9FE3e7%2FDDScp3j%2FsYBp1yEBD%2FPBx1G3uwtFRYE%2BvhcjxDbOmbuXJtxSFF6GIPeb9z908U5NRdnjSN8W6wojvF06iWG4X5jsFKbWMcw3ZiYUfePH8ijouBoPqR%2F4mmrjjsdkb8eG902p%2F4NsTR9KokJaC9ZHO7y0d99Hagpm3qbKS9%2BX%2FGzgICUyPUMODD8sUGOqUBB%2BnCSLzqyMmVdqHppTDM4mHNfTxrOEYOZ%2F5NH%2Bv%2FN09F6SFQSNT4MoEBhTcWG6YapjcC91iogp%2B35BuBQvPPpZ7Hm1PT%2FGcCr3c0H41yr%2FaF2dRFoQy42Wl1XDfzmXKtkSZ%2BCc6R7y3tQM8gvdiQkHqilytXzHAfcbMLum3H59%2FbqRkhgBC3OhSih7WbcO8lN22RcCaolQduLb5%2FUZSddvHC6dGG&X-Amz-Signature=435c3c1407fb111875bde3aa3d344ec87c6fbe14a6794b9467758397c3cb4eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGPL3TP%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDWQobi%2FAkeky%2BrwI36WANAQFNjcT0bKcKzxV9G%2BLTQgIgK3hHLJCZxJi1ybmlmTJxXgwutC6JbAa8%2BrDIhPccC%2BAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwK7Bayy5vxJC68NyrcA7DTKe3Rn4hQto%2BHwG95%2B0qEmP61S%2FQWhxrB02ASldGZo5OMXypjKD54MspvrJMc7Qd4J%2F97mnHO9eym20yNJt2ABcaG2LogLTkNH5TJqEb1RmNPRrbkJwsY9hqkwbZ0d6d0qBVzaY6gQMMtRj2b8Q9HnYta8ocHzI0FMIjzNyiOp%2FiBsyvhygCvWeqvsB4mEkaX%2BlwaA7fYfH9e2YgA8AkRggY0Gie%2FgF4qWALRW79pRiG%2FHpGd7p0PPpvtinGrXjrwayNLtHyC5EvaYvc8XfKrr4zZsVrq9VkoowUmyVkniEe5W%2Bo30U2edB1%2FDfNs8NTF%2BczWPy0lp1Ne39qpHY7gZOcEJqRxB%2BEVH%2FiUNXVUK8K9bp0Dj1oKWoy4u6quwndWKjYIXO7nHysXY%2BP%2BFseOBBP%2BF4dR8HAqhpgysOk%2BHTDlcEAEdh6jU4a8lqeRFfk9FE3e7%2FDDScp3j%2FsYBp1yEBD%2FPBx1G3uwtFRYE%2BvhcjxDbOmbuXJtxSFF6GIPeb9z908U5NRdnjSN8W6wojvF06iWG4X5jsFKbWMcw3ZiYUfePH8ijouBoPqR%2F4mmrjjsdkb8eG902p%2F4NsTR9KokJaC9ZHO7y0d99Hagpm3qbKS9%2BX%2FGzgICUyPUMODD8sUGOqUBB%2BnCSLzqyMmVdqHppTDM4mHNfTxrOEYOZ%2F5NH%2Bv%2FN09F6SFQSNT4MoEBhTcWG6YapjcC91iogp%2B35BuBQvPPpZ7Hm1PT%2FGcCr3c0H41yr%2FaF2dRFoQy42Wl1XDfzmXKtkSZ%2BCc6R7y3tQM8gvdiQkHqilytXzHAfcbMLum3H59%2FbqRkhgBC3OhSih7WbcO8lN22RcCaolQduLb5%2FUZSddvHC6dGG&X-Amz-Signature=eb22aa72804b8d9d3143f66f66bdbdd774c26bbe5e698190c5f446b55c63ff60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGPL3TP%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDWQobi%2FAkeky%2BrwI36WANAQFNjcT0bKcKzxV9G%2BLTQgIgK3hHLJCZxJi1ybmlmTJxXgwutC6JbAa8%2BrDIhPccC%2BAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwK7Bayy5vxJC68NyrcA7DTKe3Rn4hQto%2BHwG95%2B0qEmP61S%2FQWhxrB02ASldGZo5OMXypjKD54MspvrJMc7Qd4J%2F97mnHO9eym20yNJt2ABcaG2LogLTkNH5TJqEb1RmNPRrbkJwsY9hqkwbZ0d6d0qBVzaY6gQMMtRj2b8Q9HnYta8ocHzI0FMIjzNyiOp%2FiBsyvhygCvWeqvsB4mEkaX%2BlwaA7fYfH9e2YgA8AkRggY0Gie%2FgF4qWALRW79pRiG%2FHpGd7p0PPpvtinGrXjrwayNLtHyC5EvaYvc8XfKrr4zZsVrq9VkoowUmyVkniEe5W%2Bo30U2edB1%2FDfNs8NTF%2BczWPy0lp1Ne39qpHY7gZOcEJqRxB%2BEVH%2FiUNXVUK8K9bp0Dj1oKWoy4u6quwndWKjYIXO7nHysXY%2BP%2BFseOBBP%2BF4dR8HAqhpgysOk%2BHTDlcEAEdh6jU4a8lqeRFfk9FE3e7%2FDDScp3j%2FsYBp1yEBD%2FPBx1G3uwtFRYE%2BvhcjxDbOmbuXJtxSFF6GIPeb9z908U5NRdnjSN8W6wojvF06iWG4X5jsFKbWMcw3ZiYUfePH8ijouBoPqR%2F4mmrjjsdkb8eG902p%2F4NsTR9KokJaC9ZHO7y0d99Hagpm3qbKS9%2BX%2FGzgICUyPUMODD8sUGOqUBB%2BnCSLzqyMmVdqHppTDM4mHNfTxrOEYOZ%2F5NH%2Bv%2FN09F6SFQSNT4MoEBhTcWG6YapjcC91iogp%2B35BuBQvPPpZ7Hm1PT%2FGcCr3c0H41yr%2FaF2dRFoQy42Wl1XDfzmXKtkSZ%2BCc6R7y3tQM8gvdiQkHqilytXzHAfcbMLum3H59%2FbqRkhgBC3OhSih7WbcO8lN22RcCaolQduLb5%2FUZSddvHC6dGG&X-Amz-Signature=5a0b54033b6e65fb787db21d10b09c1efd8e4278bf0b74156798717c04b4afbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGPL3TP%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDWQobi%2FAkeky%2BrwI36WANAQFNjcT0bKcKzxV9G%2BLTQgIgK3hHLJCZxJi1ybmlmTJxXgwutC6JbAa8%2BrDIhPccC%2BAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwK7Bayy5vxJC68NyrcA7DTKe3Rn4hQto%2BHwG95%2B0qEmP61S%2FQWhxrB02ASldGZo5OMXypjKD54MspvrJMc7Qd4J%2F97mnHO9eym20yNJt2ABcaG2LogLTkNH5TJqEb1RmNPRrbkJwsY9hqkwbZ0d6d0qBVzaY6gQMMtRj2b8Q9HnYta8ocHzI0FMIjzNyiOp%2FiBsyvhygCvWeqvsB4mEkaX%2BlwaA7fYfH9e2YgA8AkRggY0Gie%2FgF4qWALRW79pRiG%2FHpGd7p0PPpvtinGrXjrwayNLtHyC5EvaYvc8XfKrr4zZsVrq9VkoowUmyVkniEe5W%2Bo30U2edB1%2FDfNs8NTF%2BczWPy0lp1Ne39qpHY7gZOcEJqRxB%2BEVH%2FiUNXVUK8K9bp0Dj1oKWoy4u6quwndWKjYIXO7nHysXY%2BP%2BFseOBBP%2BF4dR8HAqhpgysOk%2BHTDlcEAEdh6jU4a8lqeRFfk9FE3e7%2FDDScp3j%2FsYBp1yEBD%2FPBx1G3uwtFRYE%2BvhcjxDbOmbuXJtxSFF6GIPeb9z908U5NRdnjSN8W6wojvF06iWG4X5jsFKbWMcw3ZiYUfePH8ijouBoPqR%2F4mmrjjsdkb8eG902p%2F4NsTR9KokJaC9ZHO7y0d99Hagpm3qbKS9%2BX%2FGzgICUyPUMODD8sUGOqUBB%2BnCSLzqyMmVdqHppTDM4mHNfTxrOEYOZ%2F5NH%2Bv%2FN09F6SFQSNT4MoEBhTcWG6YapjcC91iogp%2B35BuBQvPPpZ7Hm1PT%2FGcCr3c0H41yr%2FaF2dRFoQy42Wl1XDfzmXKtkSZ%2BCc6R7y3tQM8gvdiQkHqilytXzHAfcbMLum3H59%2FbqRkhgBC3OhSih7WbcO8lN22RcCaolQduLb5%2FUZSddvHC6dGG&X-Amz-Signature=0a0f5c03745e810961fa84809b977b5013d98027767493bbe26f076ff46c7683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGPL3TP%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDWQobi%2FAkeky%2BrwI36WANAQFNjcT0bKcKzxV9G%2BLTQgIgK3hHLJCZxJi1ybmlmTJxXgwutC6JbAa8%2BrDIhPccC%2BAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwK7Bayy5vxJC68NyrcA7DTKe3Rn4hQto%2BHwG95%2B0qEmP61S%2FQWhxrB02ASldGZo5OMXypjKD54MspvrJMc7Qd4J%2F97mnHO9eym20yNJt2ABcaG2LogLTkNH5TJqEb1RmNPRrbkJwsY9hqkwbZ0d6d0qBVzaY6gQMMtRj2b8Q9HnYta8ocHzI0FMIjzNyiOp%2FiBsyvhygCvWeqvsB4mEkaX%2BlwaA7fYfH9e2YgA8AkRggY0Gie%2FgF4qWALRW79pRiG%2FHpGd7p0PPpvtinGrXjrwayNLtHyC5EvaYvc8XfKrr4zZsVrq9VkoowUmyVkniEe5W%2Bo30U2edB1%2FDfNs8NTF%2BczWPy0lp1Ne39qpHY7gZOcEJqRxB%2BEVH%2FiUNXVUK8K9bp0Dj1oKWoy4u6quwndWKjYIXO7nHysXY%2BP%2BFseOBBP%2BF4dR8HAqhpgysOk%2BHTDlcEAEdh6jU4a8lqeRFfk9FE3e7%2FDDScp3j%2FsYBp1yEBD%2FPBx1G3uwtFRYE%2BvhcjxDbOmbuXJtxSFF6GIPeb9z908U5NRdnjSN8W6wojvF06iWG4X5jsFKbWMcw3ZiYUfePH8ijouBoPqR%2F4mmrjjsdkb8eG902p%2F4NsTR9KokJaC9ZHO7y0d99Hagpm3qbKS9%2BX%2FGzgICUyPUMODD8sUGOqUBB%2BnCSLzqyMmVdqHppTDM4mHNfTxrOEYOZ%2F5NH%2Bv%2FN09F6SFQSNT4MoEBhTcWG6YapjcC91iogp%2B35BuBQvPPpZ7Hm1PT%2FGcCr3c0H41yr%2FaF2dRFoQy42Wl1XDfzmXKtkSZ%2BCc6R7y3tQM8gvdiQkHqilytXzHAfcbMLum3H59%2FbqRkhgBC3OhSih7WbcO8lN22RcCaolQduLb5%2FUZSddvHC6dGG&X-Amz-Signature=8e756151ad0fb4898ff08a9ccf099237866eb63aa197fc3756c652ddcc1ce408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGPL3TP%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDWQobi%2FAkeky%2BrwI36WANAQFNjcT0bKcKzxV9G%2BLTQgIgK3hHLJCZxJi1ybmlmTJxXgwutC6JbAa8%2BrDIhPccC%2BAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwK7Bayy5vxJC68NyrcA7DTKe3Rn4hQto%2BHwG95%2B0qEmP61S%2FQWhxrB02ASldGZo5OMXypjKD54MspvrJMc7Qd4J%2F97mnHO9eym20yNJt2ABcaG2LogLTkNH5TJqEb1RmNPRrbkJwsY9hqkwbZ0d6d0qBVzaY6gQMMtRj2b8Q9HnYta8ocHzI0FMIjzNyiOp%2FiBsyvhygCvWeqvsB4mEkaX%2BlwaA7fYfH9e2YgA8AkRggY0Gie%2FgF4qWALRW79pRiG%2FHpGd7p0PPpvtinGrXjrwayNLtHyC5EvaYvc8XfKrr4zZsVrq9VkoowUmyVkniEe5W%2Bo30U2edB1%2FDfNs8NTF%2BczWPy0lp1Ne39qpHY7gZOcEJqRxB%2BEVH%2FiUNXVUK8K9bp0Dj1oKWoy4u6quwndWKjYIXO7nHysXY%2BP%2BFseOBBP%2BF4dR8HAqhpgysOk%2BHTDlcEAEdh6jU4a8lqeRFfk9FE3e7%2FDDScp3j%2FsYBp1yEBD%2FPBx1G3uwtFRYE%2BvhcjxDbOmbuXJtxSFF6GIPeb9z908U5NRdnjSN8W6wojvF06iWG4X5jsFKbWMcw3ZiYUfePH8ijouBoPqR%2F4mmrjjsdkb8eG902p%2F4NsTR9KokJaC9ZHO7y0d99Hagpm3qbKS9%2BX%2FGzgICUyPUMODD8sUGOqUBB%2BnCSLzqyMmVdqHppTDM4mHNfTxrOEYOZ%2F5NH%2Bv%2FN09F6SFQSNT4MoEBhTcWG6YapjcC91iogp%2B35BuBQvPPpZ7Hm1PT%2FGcCr3c0H41yr%2FaF2dRFoQy42Wl1XDfzmXKtkSZ%2BCc6R7y3tQM8gvdiQkHqilytXzHAfcbMLum3H59%2FbqRkhgBC3OhSih7WbcO8lN22RcCaolQduLb5%2FUZSddvHC6dGG&X-Amz-Signature=bf3baf9a14c304efb1b2763320e43debeac2933901512f68f5a42181188b5267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGPL3TP%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDWQobi%2FAkeky%2BrwI36WANAQFNjcT0bKcKzxV9G%2BLTQgIgK3hHLJCZxJi1ybmlmTJxXgwutC6JbAa8%2BrDIhPccC%2BAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwK7Bayy5vxJC68NyrcA7DTKe3Rn4hQto%2BHwG95%2B0qEmP61S%2FQWhxrB02ASldGZo5OMXypjKD54MspvrJMc7Qd4J%2F97mnHO9eym20yNJt2ABcaG2LogLTkNH5TJqEb1RmNPRrbkJwsY9hqkwbZ0d6d0qBVzaY6gQMMtRj2b8Q9HnYta8ocHzI0FMIjzNyiOp%2FiBsyvhygCvWeqvsB4mEkaX%2BlwaA7fYfH9e2YgA8AkRggY0Gie%2FgF4qWALRW79pRiG%2FHpGd7p0PPpvtinGrXjrwayNLtHyC5EvaYvc8XfKrr4zZsVrq9VkoowUmyVkniEe5W%2Bo30U2edB1%2FDfNs8NTF%2BczWPy0lp1Ne39qpHY7gZOcEJqRxB%2BEVH%2FiUNXVUK8K9bp0Dj1oKWoy4u6quwndWKjYIXO7nHysXY%2BP%2BFseOBBP%2BF4dR8HAqhpgysOk%2BHTDlcEAEdh6jU4a8lqeRFfk9FE3e7%2FDDScp3j%2FsYBp1yEBD%2FPBx1G3uwtFRYE%2BvhcjxDbOmbuXJtxSFF6GIPeb9z908U5NRdnjSN8W6wojvF06iWG4X5jsFKbWMcw3ZiYUfePH8ijouBoPqR%2F4mmrjjsdkb8eG902p%2F4NsTR9KokJaC9ZHO7y0d99Hagpm3qbKS9%2BX%2FGzgICUyPUMODD8sUGOqUBB%2BnCSLzqyMmVdqHppTDM4mHNfTxrOEYOZ%2F5NH%2Bv%2FN09F6SFQSNT4MoEBhTcWG6YapjcC91iogp%2B35BuBQvPPpZ7Hm1PT%2FGcCr3c0H41yr%2FaF2dRFoQy42Wl1XDfzmXKtkSZ%2BCc6R7y3tQM8gvdiQkHqilytXzHAfcbMLum3H59%2FbqRkhgBC3OhSih7WbcO8lN22RcCaolQduLb5%2FUZSddvHC6dGG&X-Amz-Signature=ef544e046c15b8f70ff326d3d67867240cf9a0f59c5353d9dd887160ea8eee83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGPL3TP%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDWQobi%2FAkeky%2BrwI36WANAQFNjcT0bKcKzxV9G%2BLTQgIgK3hHLJCZxJi1ybmlmTJxXgwutC6JbAa8%2BrDIhPccC%2BAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwK7Bayy5vxJC68NyrcA7DTKe3Rn4hQto%2BHwG95%2B0qEmP61S%2FQWhxrB02ASldGZo5OMXypjKD54MspvrJMc7Qd4J%2F97mnHO9eym20yNJt2ABcaG2LogLTkNH5TJqEb1RmNPRrbkJwsY9hqkwbZ0d6d0qBVzaY6gQMMtRj2b8Q9HnYta8ocHzI0FMIjzNyiOp%2FiBsyvhygCvWeqvsB4mEkaX%2BlwaA7fYfH9e2YgA8AkRggY0Gie%2FgF4qWALRW79pRiG%2FHpGd7p0PPpvtinGrXjrwayNLtHyC5EvaYvc8XfKrr4zZsVrq9VkoowUmyVkniEe5W%2Bo30U2edB1%2FDfNs8NTF%2BczWPy0lp1Ne39qpHY7gZOcEJqRxB%2BEVH%2FiUNXVUK8K9bp0Dj1oKWoy4u6quwndWKjYIXO7nHysXY%2BP%2BFseOBBP%2BF4dR8HAqhpgysOk%2BHTDlcEAEdh6jU4a8lqeRFfk9FE3e7%2FDDScp3j%2FsYBp1yEBD%2FPBx1G3uwtFRYE%2BvhcjxDbOmbuXJtxSFF6GIPeb9z908U5NRdnjSN8W6wojvF06iWG4X5jsFKbWMcw3ZiYUfePH8ijouBoPqR%2F4mmrjjsdkb8eG902p%2F4NsTR9KokJaC9ZHO7y0d99Hagpm3qbKS9%2BX%2FGzgICUyPUMODD8sUGOqUBB%2BnCSLzqyMmVdqHppTDM4mHNfTxrOEYOZ%2F5NH%2Bv%2FN09F6SFQSNT4MoEBhTcWG6YapjcC91iogp%2B35BuBQvPPpZ7Hm1PT%2FGcCr3c0H41yr%2FaF2dRFoQy42Wl1XDfzmXKtkSZ%2BCc6R7y3tQM8gvdiQkHqilytXzHAfcbMLum3H59%2FbqRkhgBC3OhSih7WbcO8lN22RcCaolQduLb5%2FUZSddvHC6dGG&X-Amz-Signature=eaa5fa6bc18679c55da5b94577d4cf727832b77a158b1d572229823fcb76281f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466364PH2NV%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDGaVuW8niMJvvADSG7v9Puc8uuZ%2Fp2qX3y9BUwIvMq6wIhAMbe8y0mKNkXECyAZXUxZaGM3TjUehqjX17q7Xxwflt5KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0tq3fk6xq2%2FON9j0q3AMDXBQ3hO0kw3o1lu6WPOP3M1ODu5B1MCCS%2BOaiOVuBK0iAQm8GRfXlYyhsBaIrFK3fRO424Bgv%2BYRpKlZA%2FxiSD1Ny5roQ2wDYEjDvqE6imiNG%2FsVlJYIPRPkbDdGK7NlQ%2Fzm9SUAG%2FIycNTWhxDDq4R52qvCn6XocVPJR%2F0u1YZ4KQrU%2Fciabwpz%2FD7xwxziR%2F0dNWO35M0I5YEk0VWLxVLrrw9DMhV7Y2jIPlgt7%2BRQxhC35msx2%2FZbH8nexOD3kbfQAuRKxyGSrBQjruw1gspAZ%2BQEZ%2BsCCkO2kVdyLdOjWMwE%2F9uXK%2BhT83m31vuzqSXePTpnwa2VuVKVhx136EiPlqZAbQ0dTBOjIzoG6qzuD7%2F5T64pbMmzvaEFtAYxo4Z3rQ0CXZjvhvXsRVwA2ny44rIcP%2FITtWDZsJEv%2FG38E9hoajMbrBAfTutVXUYZE%2FgvwhKTKBOElomAt%2Fv%2F3GlFTnWZs48CcXuf%2BcW4UenpObrTnVMWGjsUytOD5AEFptISeObBbb9ZEczfpR67jY7VtCauRx5QwifsAmwFZAVQu0l0KBTQ27f1FL4uHed332eVg0dpsYujA7P%2B0jhrY7VM2EDSr%2FNu7d62oehxRE3%2FzU321NkzY9R8yfjCSxPLFBjqkATh5AQpvM7xgWcPXzaZagx9y7Uej%2BKl7YdQJxt%2BYbY4lXBLbeuJr8NMXfeDhGlaJYRe5yV73dXqdxxprGGTHqtl5tFQY6cAD0w4caZNTwboSPk4zaX%2FKMuZElgeed4wlKBuQ4QNhA4F%2FduCiA6NogBP7sDWFNWgS01wyMWoIZ%2Bb47PRqkVIrPZlNaBHbXC%2BwwiA9pXn5MotMdX%2FkLEiCkRIVIryd&X-Amz-Signature=f5ad52be55e695e16cf86a3a2ac8e571eb8045ef0db85f972107f05abcdbe3b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3HT2PUB%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC3ftyfYCXR%2BAT8R0vo48ZFvEPYKWpA5hAAvYXNQMq0YgIgXjT3pQsUOznpJOSQhIi8HJ2IYA2XdB8YGRbJRMw5DbkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq14q4j9Wk9h%2B%2F%2FMyrcA0m78W6tsBW8lzjpcKrkSm5uD2xF9CoEDTRO7SOz%2FuQcHMCCXBRqvWfxoanetybaQg8uQO%2FNiuBljHRyMfFeh2CuCsd7Rh47xa824OP%2FfsCD8HB%2BMBPD8FNabNSwH303iLT639gvRfCxxZCND9JgG8LcfzmIpCoQd4q8UbCJJ2rzUCjy5dOJeB0pbUw0jjKiWskR3nvfCXBv8IhoAyKA1UZD2GIsmz4oaMo%2FVCmm27pFGXP8%2FqWw0SGimpSnRDlTbh%2BU0jnEXnF%2FjjvHGBMSuomqy7WNFKcgg6nCtySSsY0Cc8HAL7JfTHFLoko%2B87pfbwv0OIpVpctwpU%2B7IXhWOg359Zc59hIJQETlQdDfQtBJh%2FsKKLxpxWbrL3BCmTeYbMdO0cnkaNFN%2BzRlBluEdGp59MTLrTG3wmH77VCpKdoZt2d5lO1IzpP9DAMo66gNDh8uUBYbDGvMxNiSO83%2FfNR6kAb%2FO0tD%2BaIwJRkGTD8MjOCEc%2Bza3R7RBaYN3XHPlg4H68M4w1XSLtZzOSX7IyjMqdMYJ1r%2FckbrSh3uBy32P%2BiOlnunk5UZNFfAQOSjhP2UCosyyW9Ed7RNZGbMnAwdBN6EiteWgyDMRJeb6aQC9Rc8qQWR%2B2dwCZuzMNPD8sUGOqUBqbjg46pMxkdkapkQSAAcuARkl0dJbjmJwHjmQDCi7T7tstBVINRZCMXaPERj3IkJA%2FgeKyt%2FJ8EkIQHUIYEi0gF3JbzXmoW8qn0vCD28Pz%2B0FYvQAU8m65Fd3B9Cu1SWyL19pitS5Q%2BLjpxQ7jM6xTq1pPDQBAkdXbg1dKE%2BM07%2B1lxnLtHpD4kt933gALsYd9m%2BW5NLQgJc3pWu32K6ZtfPeLMb&X-Amz-Signature=5a8ff51bae895015c629f955b6b8915e1686a57d4ed041cf0aea8f734bab24a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674PYCHB2%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDmC4y8Wr%2B0%2B0SOw8eZMTo%2BIaDhwNcxOap%2FndhgLscsggIhAMO0n7oTY1VeXwn5%2B4q8r1MPsG1EPgCLa0alyG7%2BQ70aKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8iuYlXwL13iMeRwcq3APc0849qOekJSHP7ApV%2Fz%2BwpEDtgq8j5a6QYZQOIshuA5V6unWMDlj04rS7HkuolAUAsEuIgZUIbStu0Mh1MZLJ3HduqalOsdfI7VRTUgmIzbqK3YYt1O%2F7G55%2F3kBt9A0aumhMUwqgUAvGnskQ4N7lkMNCBWRqSGohY7jRnHLYMr%2BgymRvhtWu8mpIQlw0I36DxovD266cgbrrmKInsCjnRAGYF8grGLnf8Vjon%2BGhOehH86Nhmvwxmf9BJE63G%2FrZZtFaREXPrkLF%2BzdZRthcEc9Wn8qbA9Aba%2BA83JJ93UOzMzefcMq7skp7w7FO1LDsFTlMtIjVp36l2DTRcvaLEiSpAuI0ySV2XIFzIVoISFoUL1hKpXc1Mdzjfr8KV6rUIwN4w4Ol%2Fb3%2BqQr4fsRbM1NZAHhwKbeY6WU7CYZ62j1rWQ3xhJONBR91SqXmm6v5Phf25IeOH91b8aJVaJ8%2Fe8BXD5S1W45ZTohlD7psSL20v1ga9yRhunMubQFnyn3F5f%2BIY0Y9B3NYs3efNYqyPft1dll8ycxjjkiXp1uJ4dn6frn0m3ht7FkC1qUCHlf3r7uD6z3o%2Bh2rox%2B68fGWRBK%2FEkMh90yJIAuCJAecRnJ%2FAHXqXPvqH%2Bk0KzCfxPLFBjqkAXlPd%2BwbMePpZvKxf%2F6N1ZdJ9f9GGIjXrqR8bWn56hTtdsvYuDpZVeRWkl0SqxNG9seNQASMimx2EqhV7hNyZ%2FeNyZDOZDjQkOzJU38L2Kx1SVr3J9Nt47Ze%2Fcde8jIGlK2igLXd4KuIPDNitJhbCyv1q%2F2X98gw16ED4%2B4ukJK6YCNy%2BMct5D69ZFKmh%2FW0rAtYXBJdGQEDmwqN9dZWyuKjLIYJ&X-Amz-Signature=9cd3a535ecd538bb8f876e4430b0ffd5137f46543cb4d8518a5af494b5c855f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGPL3TP%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDWQobi%2FAkeky%2BrwI36WANAQFNjcT0bKcKzxV9G%2BLTQgIgK3hHLJCZxJi1ybmlmTJxXgwutC6JbAa8%2BrDIhPccC%2BAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwK7Bayy5vxJC68NyrcA7DTKe3Rn4hQto%2BHwG95%2B0qEmP61S%2FQWhxrB02ASldGZo5OMXypjKD54MspvrJMc7Qd4J%2F97mnHO9eym20yNJt2ABcaG2LogLTkNH5TJqEb1RmNPRrbkJwsY9hqkwbZ0d6d0qBVzaY6gQMMtRj2b8Q9HnYta8ocHzI0FMIjzNyiOp%2FiBsyvhygCvWeqvsB4mEkaX%2BlwaA7fYfH9e2YgA8AkRggY0Gie%2FgF4qWALRW79pRiG%2FHpGd7p0PPpvtinGrXjrwayNLtHyC5EvaYvc8XfKrr4zZsVrq9VkoowUmyVkniEe5W%2Bo30U2edB1%2FDfNs8NTF%2BczWPy0lp1Ne39qpHY7gZOcEJqRxB%2BEVH%2FiUNXVUK8K9bp0Dj1oKWoy4u6quwndWKjYIXO7nHysXY%2BP%2BFseOBBP%2BF4dR8HAqhpgysOk%2BHTDlcEAEdh6jU4a8lqeRFfk9FE3e7%2FDDScp3j%2FsYBp1yEBD%2FPBx1G3uwtFRYE%2BvhcjxDbOmbuXJtxSFF6GIPeb9z908U5NRdnjSN8W6wojvF06iWG4X5jsFKbWMcw3ZiYUfePH8ijouBoPqR%2F4mmrjjsdkb8eG902p%2F4NsTR9KokJaC9ZHO7y0d99Hagpm3qbKS9%2BX%2FGzgICUyPUMODD8sUGOqUBB%2BnCSLzqyMmVdqHppTDM4mHNfTxrOEYOZ%2F5NH%2Bv%2FN09F6SFQSNT4MoEBhTcWG6YapjcC91iogp%2B35BuBQvPPpZ7Hm1PT%2FGcCr3c0H41yr%2FaF2dRFoQy42Wl1XDfzmXKtkSZ%2BCc6R7y3tQM8gvdiQkHqilytXzHAfcbMLum3H59%2FbqRkhgBC3OhSih7WbcO8lN22RcCaolQduLb5%2FUZSddvHC6dGG&X-Amz-Signature=23e9848fa0725c28e6e3dd44f06e1dd06de0b839c3dde554ab4f3f053a17ee78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTGNZBCZ%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC3XlPhqMRLtyMJMdxruF7i6LG61HvjQVGCytw01pksSgIgFns8H96fq6m0shjyCKibgBZ5%2FCsCmqykcEIxfRrukI8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBWuNELlCELjkTPMircA%2Bt%2FXz0LrtH6mcHN2a5eUttkGEWlEsOg5f3d%2FKHptIqk4hFTPumbkFHnk9iCANsXvJCaKY1YO3ibNwuj2KgG0MiEiDFAQm5sXhetZPjk11nMqimoU6zWhPyI12f6OYx2WwzLttfoasYYKicmkAsCiOcYKsjDWpvG8MUv85pfqy0Hm692a%2BY%2BbDNeKp2zRCEwBcU7hFbnUm5%2FzxDI0VZoXw9esYPAoNDRhHwAsXvYhmU%2FiIu1aoO%2BZoNR7SQbolup2GmBDzBMt%2BXd38CRt9uruC%2BLUSt4ZMQa5wikQQJT%2FFv4f08xrm39cMEZ0pg8Hmrq1iMaDOWrEyaa7TZErzqDyliGleli3tjtH7d1yKnOOAl36A%2FrI65rn%2BPsYTeGGbEAOmbceR1lEwGPYzxqCWLfjP%2F1aXYSqnN8zDimjqkpIV3ISaoON6YDZD11%2F5XCFQrMNibPI3zO%2BtELWAWiFTmxsTmqBp2ubTIrKCUXfYognfOo6alQDqDFu72bwjnvSxm8klvlgQ%2BMHtt%2B0u%2FSSJRmGuylh7yLDJWs1sZHl8MHtpr5p53zYrUkIaFzvaMP7Q8Z5B4%2F%2F3s4XSVEaV4q1VI55oMhnkOMAUIdkbyYQeBusgGvAo0BwOX0GA7lc5jxMNfD8sUGOqUB147UXvWp3f3wClZr6FkQJJlyrP90e871C1EvyjU%2BBZpK8J1bJ9oKGstXSeq9n0aRerGBPPEETyfvICBLBBwALVCsmRcofBSLgiGm2YLarCzBr0U4EE8527QGvjW2DVtQasobs40oYzBTb26XTY24IBpxkgA7ZhRM%2Fz00Bdl8Qo2ilwBLN354A6XGTAY6mmd6Yhjhd36liz7ASVKJEl%2B8biM7fAoi&X-Amz-Signature=bd087733e19cc4aaedee8a1a2ef26886e5f45fe67b92fe83921b4276abdcbff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGPL3TP%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDWQobi%2FAkeky%2BrwI36WANAQFNjcT0bKcKzxV9G%2BLTQgIgK3hHLJCZxJi1ybmlmTJxXgwutC6JbAa8%2BrDIhPccC%2BAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwK7Bayy5vxJC68NyrcA7DTKe3Rn4hQto%2BHwG95%2B0qEmP61S%2FQWhxrB02ASldGZo5OMXypjKD54MspvrJMc7Qd4J%2F97mnHO9eym20yNJt2ABcaG2LogLTkNH5TJqEb1RmNPRrbkJwsY9hqkwbZ0d6d0qBVzaY6gQMMtRj2b8Q9HnYta8ocHzI0FMIjzNyiOp%2FiBsyvhygCvWeqvsB4mEkaX%2BlwaA7fYfH9e2YgA8AkRggY0Gie%2FgF4qWALRW79pRiG%2FHpGd7p0PPpvtinGrXjrwayNLtHyC5EvaYvc8XfKrr4zZsVrq9VkoowUmyVkniEe5W%2Bo30U2edB1%2FDfNs8NTF%2BczWPy0lp1Ne39qpHY7gZOcEJqRxB%2BEVH%2FiUNXVUK8K9bp0Dj1oKWoy4u6quwndWKjYIXO7nHysXY%2BP%2BFseOBBP%2BF4dR8HAqhpgysOk%2BHTDlcEAEdh6jU4a8lqeRFfk9FE3e7%2FDDScp3j%2FsYBp1yEBD%2FPBx1G3uwtFRYE%2BvhcjxDbOmbuXJtxSFF6GIPeb9z908U5NRdnjSN8W6wojvF06iWG4X5jsFKbWMcw3ZiYUfePH8ijouBoPqR%2F4mmrjjsdkb8eG902p%2F4NsTR9KokJaC9ZHO7y0d99Hagpm3qbKS9%2BX%2FGzgICUyPUMODD8sUGOqUBB%2BnCSLzqyMmVdqHppTDM4mHNfTxrOEYOZ%2F5NH%2Bv%2FN09F6SFQSNT4MoEBhTcWG6YapjcC91iogp%2B35BuBQvPPpZ7Hm1PT%2FGcCr3c0H41yr%2FaF2dRFoQy42Wl1XDfzmXKtkSZ%2BCc6R7y3tQM8gvdiQkHqilytXzHAfcbMLum3H59%2FbqRkhgBC3OhSih7WbcO8lN22RcCaolQduLb5%2FUZSddvHC6dGG&X-Amz-Signature=ca06b8a546edfc5de172a91bed24f3bdfee01bf823461b4455e7b52169223f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AF6YS5H%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQD%2FZTABKnwDutVUOHh5oqfC5RhszKquHCcIpVlsaWX8DgIhAO0Ctjyzm%2Be7jOpbNY3syWs55nbeqIjvwC7WuD0IX2yKKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF6Q7dEZxu%2B0HuUFcq3ANNwM2cyRZlIuS7rCtromMVUoBzNbcu6EjfJ09niU%2FqDc4EQjHLFihE3z%2F%2FiTsM%2FU76wOJf%2F8PP9CZUQBRxmsLQXg7CckrJN8wUndUBRkXWvlxW4NPrGJRYo90kC%2Bt5xO4F2cHn8Zz2wXcDEpFYoEg5PBKlUQ%2BOseBYATOqJu6kPpQ7ZOw0WuqnV3tL6jt%2FtGZu%2B3DneC5lVIncuItrtMYipwpXjg%2FG%2F1DtI5HZ6rHwOWF877wfTQLI1sb47bquBksN5GhmtgX5buiLxOHeeUETuOxguvuaEnV8nWo3kKKBUi2QnYEHKHSVPShJsoYtMZ3hygCgNJXHP12QluBhaeEzZTAb1pJZusD1gk1J4M3r9m8qoYFcBxrX%2FKhgLvFm8U4tCBOVcFProRv17nkVK%2B0UsH94Ecfs3E4B3IdWICfz56YgiLMTq95cIzpfJxfN9gfCKEViaW%2F88dg6j8JMyPzLFtzEmyh%2FxrUWpHMnbugnC5l16wVOovBIDJCrwTLrCL4e4%2BfeyMkzc2XnuthqEWzPEPUFaDqjhwbAyu8RZjSszor4MXWBBzxF%2FdkTuqa%2FVWuZe8buAXupplj8lGOfjBkv6X%2BkdtQPgP5k%2BKdTEolQiBl8UKVCk5wR%2FPdExjDXw%2FLFBjqkAXXF9YDwV3ZMWHE%2F1m5IkYsjqnEboHjzxCs1ImxlhsuYdCucv8KrBRBaBihu8so8xcUovzqlgtI9mfpMKDLARyJpX9RtC0MmdvOAZF36ao7NfiXha4ywi5Sa%2FrA0KfYYg%2F1M209Q13%2BAJ5SwPAtKmq5dhXz6ob1rkEVJz%2F%2BNXY5rFSR3UYkYFQ0Ym27SWGU9ogcIDhZR4jm893URKdbkT7V81bI0&X-Amz-Signature=949583ee80515a881b3114bd49e50db13b4264f50a37416bce5dc9c0d27d5057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGPL3TP%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDWQobi%2FAkeky%2BrwI36WANAQFNjcT0bKcKzxV9G%2BLTQgIgK3hHLJCZxJi1ybmlmTJxXgwutC6JbAa8%2BrDIhPccC%2BAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwK7Bayy5vxJC68NyrcA7DTKe3Rn4hQto%2BHwG95%2B0qEmP61S%2FQWhxrB02ASldGZo5OMXypjKD54MspvrJMc7Qd4J%2F97mnHO9eym20yNJt2ABcaG2LogLTkNH5TJqEb1RmNPRrbkJwsY9hqkwbZ0d6d0qBVzaY6gQMMtRj2b8Q9HnYta8ocHzI0FMIjzNyiOp%2FiBsyvhygCvWeqvsB4mEkaX%2BlwaA7fYfH9e2YgA8AkRggY0Gie%2FgF4qWALRW79pRiG%2FHpGd7p0PPpvtinGrXjrwayNLtHyC5EvaYvc8XfKrr4zZsVrq9VkoowUmyVkniEe5W%2Bo30U2edB1%2FDfNs8NTF%2BczWPy0lp1Ne39qpHY7gZOcEJqRxB%2BEVH%2FiUNXVUK8K9bp0Dj1oKWoy4u6quwndWKjYIXO7nHysXY%2BP%2BFseOBBP%2BF4dR8HAqhpgysOk%2BHTDlcEAEdh6jU4a8lqeRFfk9FE3e7%2FDDScp3j%2FsYBp1yEBD%2FPBx1G3uwtFRYE%2BvhcjxDbOmbuXJtxSFF6GIPeb9z908U5NRdnjSN8W6wojvF06iWG4X5jsFKbWMcw3ZiYUfePH8ijouBoPqR%2F4mmrjjsdkb8eG902p%2F4NsTR9KokJaC9ZHO7y0d99Hagpm3qbKS9%2BX%2FGzgICUyPUMODD8sUGOqUBB%2BnCSLzqyMmVdqHppTDM4mHNfTxrOEYOZ%2F5NH%2Bv%2FN09F6SFQSNT4MoEBhTcWG6YapjcC91iogp%2B35BuBQvPPpZ7Hm1PT%2FGcCr3c0H41yr%2FaF2dRFoQy42Wl1XDfzmXKtkSZ%2BCc6R7y3tQM8gvdiQkHqilytXzHAfcbMLum3H59%2FbqRkhgBC3OhSih7WbcO8lN22RcCaolQduLb5%2FUZSddvHC6dGG&X-Amz-Signature=1b0b512f91dd05d9428bdc8afee52f696a6fcb5b876e14ba1ca8b0fd1a3c0543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKZVVKMT%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIA5TXB2TTgSpBu%2FP%2FvK5l8JkQDeyNpEhUAtqGCKnsE2FAiEAhtD3m6sTRyqxPvL5F1SRYGIC3vCxA32sEBnyq1pD0YsqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BHxfjCgIcAKOO%2BnircA%2FILVHw5007qLWy%2F%2FWUf%2FI%2FD2E3xQqr3%2BTeRk3%2FJiBF3kruMRQ%2BF6x70kHvd7Wl1YrM63XkGlwTYwI7Chqp2UeHjyWtkoHxoABGLttTeWcKFi2BNzuUEbeHZb55LmntmbaMtHbdRugzmCc3JSkHCIAl5AVvVT6A2EpSNIpnRPH2N1KyvY%2FhwmNtXd0ZbWjaKxYUkHL%2B%2B5ei9GlXQt%2FpRpuCwevZ1HRYncwKK5SqcVl%2By3qeVRQOZHGBuiGl8KWJ3ArPDTszWxa3lApG%2BsOrNOJtWr9tT0t%2B0NOtAzo61WL2p2dW5EbmORdgjDZpuJ6ekZzNrvJKetX1MThsZH9GX%2FVG2K71Qsv1MctMNKw8o0y%2B%2FCs6uEqDqg2e7EnaK%2FFIIq0P0RhfmF6Xagsz1RDIQGBlrmgVNstI0QkYipkdFDv2WyAG2LYwow%2B4Yv2tzRx8X%2BxCs8sBQiOaTaKk2O0oGToPGdgc%2FYVBbJ0iQ7s6milayWuw82a8epEd470WR%2FT4y1ovCujSs8mBgyBC%2FXZPFfoRUPaOOVJSkurPigKvLH3bUxrsmEwKqkGhfQXeNJr87gtahbLgnzzTVKP4jj0GlcRwMvYRx2D6y3mz9QdoKRH6fSOoU2i0crR7lKQFlMOTD8sUGOqUB2eAoNZTfXMLog51NC4KwXRVJ9hyce1iyxXyZhUVtJx15jpO%2BmizUuj56X9T7jJWmLKH%2BhPrKWf5An6%2BZmABQnD%2BAY%2Fz3xy1HCTm%2FrB0u5RnBOpRh515JUe%2Fppli1qyObqZomPxyyMvAY5FBNRsVPQsB8XNMI6C%2Fj1BtsNxsvHQPy9U6cT6gNVjiyG0pDOfrUgNKSG57QPIkjl3g1cccMfrokuLpV&X-Amz-Signature=e658ac7c729790ee3f608946ffabdb1a547665b0d4a286bc30bbdcdefcf88444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGPL3TP%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDWQobi%2FAkeky%2BrwI36WANAQFNjcT0bKcKzxV9G%2BLTQgIgK3hHLJCZxJi1ybmlmTJxXgwutC6JbAa8%2BrDIhPccC%2BAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwK7Bayy5vxJC68NyrcA7DTKe3Rn4hQto%2BHwG95%2B0qEmP61S%2FQWhxrB02ASldGZo5OMXypjKD54MspvrJMc7Qd4J%2F97mnHO9eym20yNJt2ABcaG2LogLTkNH5TJqEb1RmNPRrbkJwsY9hqkwbZ0d6d0qBVzaY6gQMMtRj2b8Q9HnYta8ocHzI0FMIjzNyiOp%2FiBsyvhygCvWeqvsB4mEkaX%2BlwaA7fYfH9e2YgA8AkRggY0Gie%2FgF4qWALRW79pRiG%2FHpGd7p0PPpvtinGrXjrwayNLtHyC5EvaYvc8XfKrr4zZsVrq9VkoowUmyVkniEe5W%2Bo30U2edB1%2FDfNs8NTF%2BczWPy0lp1Ne39qpHY7gZOcEJqRxB%2BEVH%2FiUNXVUK8K9bp0Dj1oKWoy4u6quwndWKjYIXO7nHysXY%2BP%2BFseOBBP%2BF4dR8HAqhpgysOk%2BHTDlcEAEdh6jU4a8lqeRFfk9FE3e7%2FDDScp3j%2FsYBp1yEBD%2FPBx1G3uwtFRYE%2BvhcjxDbOmbuXJtxSFF6GIPeb9z908U5NRdnjSN8W6wojvF06iWG4X5jsFKbWMcw3ZiYUfePH8ijouBoPqR%2F4mmrjjsdkb8eG902p%2F4NsTR9KokJaC9ZHO7y0d99Hagpm3qbKS9%2BX%2FGzgICUyPUMODD8sUGOqUBB%2BnCSLzqyMmVdqHppTDM4mHNfTxrOEYOZ%2F5NH%2Bv%2FN09F6SFQSNT4MoEBhTcWG6YapjcC91iogp%2B35BuBQvPPpZ7Hm1PT%2FGcCr3c0H41yr%2FaF2dRFoQy42Wl1XDfzmXKtkSZ%2BCc6R7y3tQM8gvdiQkHqilytXzHAfcbMLum3H59%2FbqRkhgBC3OhSih7WbcO8lN22RcCaolQduLb5%2FUZSddvHC6dGG&X-Amz-Signature=e8745daef8c9f3748efff5a2868e5e1120a0e94275703bf482f5124898f87a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEO7QUX%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCl643AqPzhIzW5ao7q5CHdto1O80yvCpJsXbgUBVOExgIhANo0HpOF%2BgBbxVxdbJc5uDtjlDfqLum3VvS1eVc2jaDvKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu35Tb8ANYyuB1Fjoq3AN5TBahZL%2B7lAHt5BtGQT7NWNXgQF5KS0wWAhXSIGE%2Bv57oXd2Dt%2BSjVteiiox5vnF%2BcNvXp9Y8XCnLHcy0kaa2d%2Fv%2FR0E34OPqR2YSvFiN8FbbrkeMZIUj89SdRhIGGp%2FraqBT%2F4SB%2F8yfqot6lVnakS7NlR45UIZLrtPJizaqvo803fllVdmYr5N7WxqkUHBe97eOW02AqXxWle2NI6EGPrYzLfOBBU4a8ITSwplvlu%2FdjwEMRSVfR5E%2Fs33CxAT9vPZM0RCvruiw3NOivONpG4p%2Fnp8rA44HHPdVmgsuaoWWazgpzDAYCsBJkoc%2BlUVthgJbcZ6KitG7HN3Yix%2FVtkMq8Xnq5qEPJf4WyhwkPjJXqHRCDijyMwtzyzXSYBMsIZdLS3pAM1OOvFHJJA6MV6FZ9kJxQixQn2Jvw1oYB094GureNLrn4BuXCNp4P3M2JmeYgB3xXvTaf5MDO%2FmjezvWD9qrGtEQkc248QiMe%2FKbk2CeTSyQQnqGVOaj0JSkPN588%2BsymKDfR%2FvhFwgPtysSF9R%2FbffVh8%2Bjt1YNvFD0MI635lWdecmZd3CL37y%2BuAOniQgs9FPgxqqZc8IP4SinLMeS4973vYfsapR1G3lzBgs95dicpOawMTDtw%2FLFBjqkASFtKInvDbB8SPN9dZb7XpGH6Cyo7f4KbMS2S6%2FByyCQXBKhGFo5iF%2BsL%2Bj0CaBrxeUn%2Fel5lHuKaL6sBzMUOVONRX369XmzPDuu7dn4BBf8SKmjTfzKNfy%2BO3kWB3b%2BRIfhsk1fPGDGLrjeqtvRRKlU782LJ6vDLHLWdnQOBX6koSuiQj%2BhzybiNuFNETp5GGPuUcG8Rv2mw6Ia7P5EA7jFmKwz&X-Amz-Signature=d087a4eb3b8cb9ed603a55ec5e700c980ce5e3c25fae97058a3a4d2530a2c254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGPL3TP%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDWQobi%2FAkeky%2BrwI36WANAQFNjcT0bKcKzxV9G%2BLTQgIgK3hHLJCZxJi1ybmlmTJxXgwutC6JbAa8%2BrDIhPccC%2BAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwK7Bayy5vxJC68NyrcA7DTKe3Rn4hQto%2BHwG95%2B0qEmP61S%2FQWhxrB02ASldGZo5OMXypjKD54MspvrJMc7Qd4J%2F97mnHO9eym20yNJt2ABcaG2LogLTkNH5TJqEb1RmNPRrbkJwsY9hqkwbZ0d6d0qBVzaY6gQMMtRj2b8Q9HnYta8ocHzI0FMIjzNyiOp%2FiBsyvhygCvWeqvsB4mEkaX%2BlwaA7fYfH9e2YgA8AkRggY0Gie%2FgF4qWALRW79pRiG%2FHpGd7p0PPpvtinGrXjrwayNLtHyC5EvaYvc8XfKrr4zZsVrq9VkoowUmyVkniEe5W%2Bo30U2edB1%2FDfNs8NTF%2BczWPy0lp1Ne39qpHY7gZOcEJqRxB%2BEVH%2FiUNXVUK8K9bp0Dj1oKWoy4u6quwndWKjYIXO7nHysXY%2BP%2BFseOBBP%2BF4dR8HAqhpgysOk%2BHTDlcEAEdh6jU4a8lqeRFfk9FE3e7%2FDDScp3j%2FsYBp1yEBD%2FPBx1G3uwtFRYE%2BvhcjxDbOmbuXJtxSFF6GIPeb9z908U5NRdnjSN8W6wojvF06iWG4X5jsFKbWMcw3ZiYUfePH8ijouBoPqR%2F4mmrjjsdkb8eG902p%2F4NsTR9KokJaC9ZHO7y0d99Hagpm3qbKS9%2BX%2FGzgICUyPUMODD8sUGOqUBB%2BnCSLzqyMmVdqHppTDM4mHNfTxrOEYOZ%2F5NH%2Bv%2FN09F6SFQSNT4MoEBhTcWG6YapjcC91iogp%2B35BuBQvPPpZ7Hm1PT%2FGcCr3c0H41yr%2FaF2dRFoQy42Wl1XDfzmXKtkSZ%2BCc6R7y3tQM8gvdiQkHqilytXzHAfcbMLum3H59%2FbqRkhgBC3OhSih7WbcO8lN22RcCaolQduLb5%2FUZSddvHC6dGG&X-Amz-Signature=20ba16fd8462274e718edd4d55a75e983660a3c6ed78d9ba9e5adc659144692b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGUMIZJM%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIDxM5b0xErsiuOBjB6Nk%2FjrYBdmyMNtq2NLhn%2BS4P62JAiAKuWcLG5JL4%2FA9t4W434TA%2FrHSt%2F3d%2BwTozsvANkeMsSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSS2TtUqdT0bbRzoOKtwDsM3rW8ao4rTgd%2FoOxrc6yNUGBPUeeIAx1fkaxXnN1o4TxDkcCVWi8jIgoLMkahpLHuJmTlzlYfTgRAwnnjDljJRBAkekmPXMYiu7xge5Ap1Xux%2F7gcrpU5oY5rdtTak3M4bPwWdf7pYnsZo1zJKW%2BnSuMa%2Fb4%2BeekCnzfNpCTL5evmanFATWmQcYc%2ByZCN35pl51bEPgaIWe9jjbrCT5P9R2%2FB6pfFvPbm4atdeFVkesMK1tU181H3iyRIEJmDehOsWZQy6dyLP2ZBrrgv9oy2wyarNIuUlIEUq9Nl10hBOV7km2Cf2Xd2Go2oycQ%2BsG0t9IFQ4Ag9rzUdEYWO4TCszCR7JctcPKfb1pLzCwQ2ADSuuHq26W%2FDpGLJ4lkMsDfokFzK32rqIVKuwcLFfe%2FsuXw%2Bf149sQIZwR5XSmg0Z%2BJIl4nVI76o3sZYofszaSIpM1qjcZsf5P%2BZTDYq0Bq6t7MsHliXPKVxBbk2dCSvkNUUlW0Kywa61tTM9RtBQOUwG2IthuVcYal%2Fkfer9w1B2TRVOESS9NGhUfMCy9hby8v2nN8VivwNz4L6A9NRNTdtIa%2BCZWBQ5wTwICBJ9nWGg4uVUFMZ7ajfSSTuyICrogPfHfgylVTwuSmlswlMTyxQY6pgHcAAKXftdIJWdbKrN1CZhxpR8ltlC1lbaKL22slMjJgumglr6XvIcosTDpAjCR8%2Bvj27Zp5yRsTG2pV2lNZ5mCjnzUnS9iuf4LkxtsBVylYrg%2FNvDBaJ2VsGybAJhKDJUfzLppLSvdY2YrqK7kD6Q83DOUQIMh8LX6kkb%2F9%2BIQlR0QxZzVpuX0KA5t108sMKnE2DqTNjV%2F5aNAkgBSxTGZIWqJT9oq&X-Amz-Signature=59a84e9073e7b5273484fb8f98efc50ca64617927666f46bcc7dd4697395f86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLPPYBKI%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHC%2FS5OXvlDYkGgblgWzoFRhFipaRG1MvhLwVzvhCck7AiEA84HCJ4V098p804ulnP%2B4KIv0TloNZrk5Guz%2BjYBilB8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWnmq4lmMJ554ocIircAxH%2FFN%2FqX5i%2FkZ6NJ11r1gFRKi1Qc%2FBDooRGQUN2nuAtlx5mzDaBci32yzFR1wq0KJh5X4hb7oZ8MMFG%2F6VVkBZU%2FFA00%2B9Z6864zPpgJSy5MFuE8tYhBpxVgFb7JUw%2FQnaMldwCKdgQeTqpc7NhQyQWhrXDPP2aV%2FVlr8SnZjH7YpdP2GBT9LBLla1TR8QSqtpSe4PM2EkTwDpkxoeo%2FDIj3dFtbBpJPNyJISeaMHrlFE6q%2B76sowtnNaoHLYYiZQe8HSkTQpSchNmSUp0e%2BgcYz12hOFb0IcWWskCPKaFy9g95OJyKV29%2B1vxZXIeZa8INF2kDZJg8Ql1%2FrMZSa8Ak5qnzRjDFclzCFwhwjb6lDXBcWwbJjBIMwPYZXwRXzKwCXOnA2szzcs2y6SuosKfN5VxKnCIZp098vToPH8BHi1OCV11460pCDjEkakie3hhVv%2B5muSFG4YI89Edmeh2lo3PyTBTy29jauUlfGeSwbFVMC9%2FvV1xJMX2yfWBQrq%2F%2BT%2Ba76z1uHXcfHJDc7xvHhgRKjBNY0KFO6KT27%2FFPUaZe2JgEMeYyxAHJd73xexvdwodC8Z9AygSJBf5yTbjfAjHbgd7MlqP3GCJMDBI9NV7VAXlltj7xRUepMIrE8sUGOqUB1kHdYNdFyoTiW62MBcIyGFoGSMGlQ6myjls0VIylaI1Bw66rMgHZmlHkFjpaIYfw3XTW2OlFdJMuVOEt1ALf34FCLQcXm3ZP37y6vdEvq2cKhIJxJAp2%2Fq5mNin4JzXseg5Qrum2gsCF7RzYMvfaOOxa2oQTk1s39FXN1omcwaRk7oSL3W5UQoCs2CdnrCVFlKKnIJTbMwlDafQET8jdGERzLxu1&X-Amz-Signature=763a4e24b38e15ad7eda52b2aa05e99fdd198337c6e8773899f2f398f5966eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHDOJPQ%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICWeTdDIvzlI2NOapPKEn5kubxxLyOO9jbZd5S9FSqS9AiBI7chvT7Ki9g0RoKAE4dFH41XUXb0%2BcYnS%2F%2FAVUWDeBCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbrK%2B1iwiC6NebUDqKtwDxqKxXa1n8SOlavrxOoRG7DXKjTKviFH2u5dBG5J14D5BQBJh1NTEm1QH%2FoiMqCM3JlZmQFrhB1ZRk1vvceY64WfOHUk5Se7E%2FsxBDXveoM1iCY9jok6%2BrRLzzvdeCxmc1AvLha797wHTshMdG49p3bR6HvtVRo5aTK8TRBywDli0C4MuhSWCn8mJz4vi7poXCTcmFM5LGc7%2FtKGh1bz8cjSw%2By5ipUWANgUMsQzTX9hQffkVbOHxZNFdsxh7TnaKDpnXTMNpdHkICoo2iBTAAJ39P4zm6HOX6uYcJ3bJBBqnKMMOZc4mdEHZZX7NkLgUnjowzk7ND%2FdN3AtGjX3HE%2B8qlmnm1sYRb5SZvvIkXZCqyvpc1axSK%2FrU5n3Iaj2OJuek3FCxNf6VL%2B%2B7lVxHvQNsEe7F1U9BVF%2BbEP7KG1PHYfUFlZxCplVXj%2F235xqjuVDYEOtsmDCOZG%2FAsHbmx095asfe%2FP72DZIefU%2FmhWi8gtaf7XcZIN6S1d74BokyKCAfuDsi4p7D2AQNjeSoVCh9aOKpkPGrfND6bwxgB783dZsgCfpoQIuSrHYxZ4kLAqPlU%2Bo089d93ZgANqSmX%2FtUiWUhNXMetW4fQr9uvU7vbPIWEYN1%2BLOHyJEw0MPyxQY6pgF8sG8cYudnNZTiGVJ6scPifMtvKRfkIW8EdPW3omaaCfIWbDRXr92D%2FWgQKpnkrAL0tdffZtdlOSDClj5%2FenhPBuBref4kWxREl6%2F00pt4f9oxEoUDhs6i%2BrdPLeTLWbfflAsOy8TvUAFEimBI%2FjMcWm46uflAxhC2e%2F2SiIJ8GAqDBxCb%2FbA%2B%2F%2BKjLEnSDaLGKYY0j5t9gPauuS02zKahrFJCCH0n&X-Amz-Signature=d7245dadadfc0bdbd1054d30c6af778b3149739788000290f36e41dd2338e693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGPL3TP%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDWQobi%2FAkeky%2BrwI36WANAQFNjcT0bKcKzxV9G%2BLTQgIgK3hHLJCZxJi1ybmlmTJxXgwutC6JbAa8%2BrDIhPccC%2BAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwK7Bayy5vxJC68NyrcA7DTKe3Rn4hQto%2BHwG95%2B0qEmP61S%2FQWhxrB02ASldGZo5OMXypjKD54MspvrJMc7Qd4J%2F97mnHO9eym20yNJt2ABcaG2LogLTkNH5TJqEb1RmNPRrbkJwsY9hqkwbZ0d6d0qBVzaY6gQMMtRj2b8Q9HnYta8ocHzI0FMIjzNyiOp%2FiBsyvhygCvWeqvsB4mEkaX%2BlwaA7fYfH9e2YgA8AkRggY0Gie%2FgF4qWALRW79pRiG%2FHpGd7p0PPpvtinGrXjrwayNLtHyC5EvaYvc8XfKrr4zZsVrq9VkoowUmyVkniEe5W%2Bo30U2edB1%2FDfNs8NTF%2BczWPy0lp1Ne39qpHY7gZOcEJqRxB%2BEVH%2FiUNXVUK8K9bp0Dj1oKWoy4u6quwndWKjYIXO7nHysXY%2BP%2BFseOBBP%2BF4dR8HAqhpgysOk%2BHTDlcEAEdh6jU4a8lqeRFfk9FE3e7%2FDDScp3j%2FsYBp1yEBD%2FPBx1G3uwtFRYE%2BvhcjxDbOmbuXJtxSFF6GIPeb9z908U5NRdnjSN8W6wojvF06iWG4X5jsFKbWMcw3ZiYUfePH8ijouBoPqR%2F4mmrjjsdkb8eG902p%2F4NsTR9KokJaC9ZHO7y0d99Hagpm3qbKS9%2BX%2FGzgICUyPUMODD8sUGOqUBB%2BnCSLzqyMmVdqHppTDM4mHNfTxrOEYOZ%2F5NH%2Bv%2FN09F6SFQSNT4MoEBhTcWG6YapjcC91iogp%2B35BuBQvPPpZ7Hm1PT%2FGcCr3c0H41yr%2FaF2dRFoQy42Wl1XDfzmXKtkSZ%2BCc6R7y3tQM8gvdiQkHqilytXzHAfcbMLum3H59%2FbqRkhgBC3OhSih7WbcO8lN22RcCaolQduLb5%2FUZSddvHC6dGG&X-Amz-Signature=372033b60ee63e4fa011e29cef22fabbf90fc15c0009f352140c042752107199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGPL3TP%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDWQobi%2FAkeky%2BrwI36WANAQFNjcT0bKcKzxV9G%2BLTQgIgK3hHLJCZxJi1ybmlmTJxXgwutC6JbAa8%2BrDIhPccC%2BAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwK7Bayy5vxJC68NyrcA7DTKe3Rn4hQto%2BHwG95%2B0qEmP61S%2FQWhxrB02ASldGZo5OMXypjKD54MspvrJMc7Qd4J%2F97mnHO9eym20yNJt2ABcaG2LogLTkNH5TJqEb1RmNPRrbkJwsY9hqkwbZ0d6d0qBVzaY6gQMMtRj2b8Q9HnYta8ocHzI0FMIjzNyiOp%2FiBsyvhygCvWeqvsB4mEkaX%2BlwaA7fYfH9e2YgA8AkRggY0Gie%2FgF4qWALRW79pRiG%2FHpGd7p0PPpvtinGrXjrwayNLtHyC5EvaYvc8XfKrr4zZsVrq9VkoowUmyVkniEe5W%2Bo30U2edB1%2FDfNs8NTF%2BczWPy0lp1Ne39qpHY7gZOcEJqRxB%2BEVH%2FiUNXVUK8K9bp0Dj1oKWoy4u6quwndWKjYIXO7nHysXY%2BP%2BFseOBBP%2BF4dR8HAqhpgysOk%2BHTDlcEAEdh6jU4a8lqeRFfk9FE3e7%2FDDScp3j%2FsYBp1yEBD%2FPBx1G3uwtFRYE%2BvhcjxDbOmbuXJtxSFF6GIPeb9z908U5NRdnjSN8W6wojvF06iWG4X5jsFKbWMcw3ZiYUfePH8ijouBoPqR%2F4mmrjjsdkb8eG902p%2F4NsTR9KokJaC9ZHO7y0d99Hagpm3qbKS9%2BX%2FGzgICUyPUMODD8sUGOqUBB%2BnCSLzqyMmVdqHppTDM4mHNfTxrOEYOZ%2F5NH%2Bv%2FN09F6SFQSNT4MoEBhTcWG6YapjcC91iogp%2B35BuBQvPPpZ7Hm1PT%2FGcCr3c0H41yr%2FaF2dRFoQy42Wl1XDfzmXKtkSZ%2BCc6R7y3tQM8gvdiQkHqilytXzHAfcbMLum3H59%2FbqRkhgBC3OhSih7WbcO8lN22RcCaolQduLb5%2FUZSddvHC6dGG&X-Amz-Signature=142a8c8425ebf952a28c1c52d9e270f9c64beb25e7bb66a48d07c8e0fcfd920b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLILTP6B%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAft2%2FajfRMMGzJ%2FoboyO8ds5sufinPOaxLRakHFVxNzAiEA2eFKZz%2BtX36GTopZKR2d5z%2BbWDfiwhi4jMbTQ5p4sc8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlNxfR4g6KayU3AmircAxarEIOZcxrHfN1zx%2FgUYAJY4%2Bl7TVQ%2B0fbw6QOVGDMJsGr5YOYrZ%2FipXYVd7zzy4Vqh5c4%2BpZH0vFqUvOnayeFxc8WpLZFasTiDBSpDwmhwUgu%2FC2NdAya00SnhUkXjZ100vW43eZPoLQMmf9jruJv5S0Vm2NWl6seBC6e%2BSHd8ZeabGtUUiJRvk7kNSQTj5pISgiY8ggfJkPbyMKw65O5o%2FqVBnGmodhYyuhQsfgGfeiGaJ4%2FYCx8GbPjgGg%2FcocJSXiIh5w3bgUXaWGtfzIrHVm7sGvzOLMuW3OgRREearprjlRLw7DCLlweXLv383oW4TE5pdyn8x%2FqqjYndS%2FBGuREUrs6eQq7GnKlb2I67oZIQio1ZpSKWGjwbUK%2BBvy4vZx5PHEkL7qX8qZfOPpy%2FISqVxE6kXjz4uJmQ6FvlGj6kIamnGMNp47KrLzr5m3m32wuIrOTZG1wa59Tsn0MWrRPnp8uwijFUxjNJwwElBPqX3Ne4li06gn8S9ofXUo%2Fkxw08k%2B2XvMJCMU%2BORG5Br1Us%2Fo8dpLZwNS5u81FIqFIer1%2B3KoPoq9%2BXKG6RyXLFMoplngE5n39Sr%2BmvD5FBuRXA7b17oLfwEi%2BjRyBn6d8NDxT71rFns5GhMJTE8sUGOqUB%2FQGxWd5K1335cyqUNpw5cmsUfQfyOjHNtalVP%2BSQzlRsYcgPwkg%2FUpwx7e36NsiBdD55Okfg9Ev%2FE%2FAZFOrjDYAYPkp5dQ587cCxfcfWLs71dK1KSQwwLz7u6Hwf%2B10E2n8MT%2FsFfMEVRLwzRpe%2Fh4zYfYEbF%2F2xbyBrrEDwWUVpjRzkMluCG5mQdo3P0Vmdnn%2BzfsAj8kLIo0dks%2FOT5mverevf&X-Amz-Signature=b71993bb87d2cabc77adb676656298059024e20ec3c3f609e0921992258202bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLILTP6B%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAft2%2FajfRMMGzJ%2FoboyO8ds5sufinPOaxLRakHFVxNzAiEA2eFKZz%2BtX36GTopZKR2d5z%2BbWDfiwhi4jMbTQ5p4sc8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlNxfR4g6KayU3AmircAxarEIOZcxrHfN1zx%2FgUYAJY4%2Bl7TVQ%2B0fbw6QOVGDMJsGr5YOYrZ%2FipXYVd7zzy4Vqh5c4%2BpZH0vFqUvOnayeFxc8WpLZFasTiDBSpDwmhwUgu%2FC2NdAya00SnhUkXjZ100vW43eZPoLQMmf9jruJv5S0Vm2NWl6seBC6e%2BSHd8ZeabGtUUiJRvk7kNSQTj5pISgiY8ggfJkPbyMKw65O5o%2FqVBnGmodhYyuhQsfgGfeiGaJ4%2FYCx8GbPjgGg%2FcocJSXiIh5w3bgUXaWGtfzIrHVm7sGvzOLMuW3OgRREearprjlRLw7DCLlweXLv383oW4TE5pdyn8x%2FqqjYndS%2FBGuREUrs6eQq7GnKlb2I67oZIQio1ZpSKWGjwbUK%2BBvy4vZx5PHEkL7qX8qZfOPpy%2FISqVxE6kXjz4uJmQ6FvlGj6kIamnGMNp47KrLzr5m3m32wuIrOTZG1wa59Tsn0MWrRPnp8uwijFUxjNJwwElBPqX3Ne4li06gn8S9ofXUo%2Fkxw08k%2B2XvMJCMU%2BORG5Br1Us%2Fo8dpLZwNS5u81FIqFIer1%2B3KoPoq9%2BXKG6RyXLFMoplngE5n39Sr%2BmvD5FBuRXA7b17oLfwEi%2BjRyBn6d8NDxT71rFns5GhMJTE8sUGOqUB%2FQGxWd5K1335cyqUNpw5cmsUfQfyOjHNtalVP%2BSQzlRsYcgPwkg%2FUpwx7e36NsiBdD55Okfg9Ev%2FE%2FAZFOrjDYAYPkp5dQ587cCxfcfWLs71dK1KSQwwLz7u6Hwf%2B10E2n8MT%2FsFfMEVRLwzRpe%2Fh4zYfYEbF%2F2xbyBrrEDwWUVpjRzkMluCG5mQdo3P0Vmdnn%2BzfsAj8kLIo0dks%2FOT5mverevf&X-Amz-Signature=1a2486e5878621c3173778a6ac1bdc65c55638da0c4c8e4d98ccca6ad9e1c95c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLILTP6B%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAft2%2FajfRMMGzJ%2FoboyO8ds5sufinPOaxLRakHFVxNzAiEA2eFKZz%2BtX36GTopZKR2d5z%2BbWDfiwhi4jMbTQ5p4sc8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlNxfR4g6KayU3AmircAxarEIOZcxrHfN1zx%2FgUYAJY4%2Bl7TVQ%2B0fbw6QOVGDMJsGr5YOYrZ%2FipXYVd7zzy4Vqh5c4%2BpZH0vFqUvOnayeFxc8WpLZFasTiDBSpDwmhwUgu%2FC2NdAya00SnhUkXjZ100vW43eZPoLQMmf9jruJv5S0Vm2NWl6seBC6e%2BSHd8ZeabGtUUiJRvk7kNSQTj5pISgiY8ggfJkPbyMKw65O5o%2FqVBnGmodhYyuhQsfgGfeiGaJ4%2FYCx8GbPjgGg%2FcocJSXiIh5w3bgUXaWGtfzIrHVm7sGvzOLMuW3OgRREearprjlRLw7DCLlweXLv383oW4TE5pdyn8x%2FqqjYndS%2FBGuREUrs6eQq7GnKlb2I67oZIQio1ZpSKWGjwbUK%2BBvy4vZx5PHEkL7qX8qZfOPpy%2FISqVxE6kXjz4uJmQ6FvlGj6kIamnGMNp47KrLzr5m3m32wuIrOTZG1wa59Tsn0MWrRPnp8uwijFUxjNJwwElBPqX3Ne4li06gn8S9ofXUo%2Fkxw08k%2B2XvMJCMU%2BORG5Br1Us%2Fo8dpLZwNS5u81FIqFIer1%2B3KoPoq9%2BXKG6RyXLFMoplngE5n39Sr%2BmvD5FBuRXA7b17oLfwEi%2BjRyBn6d8NDxT71rFns5GhMJTE8sUGOqUB%2FQGxWd5K1335cyqUNpw5cmsUfQfyOjHNtalVP%2BSQzlRsYcgPwkg%2FUpwx7e36NsiBdD55Okfg9Ev%2FE%2FAZFOrjDYAYPkp5dQ587cCxfcfWLs71dK1KSQwwLz7u6Hwf%2B10E2n8MT%2FsFfMEVRLwzRpe%2Fh4zYfYEbF%2F2xbyBrrEDwWUVpjRzkMluCG5mQdo3P0Vmdnn%2BzfsAj8kLIo0dks%2FOT5mverevf&X-Amz-Signature=27b3cc04e7fce73fe6be786e41502863770220207bd84aad8885e3a4b7464d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLILTP6B%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAft2%2FajfRMMGzJ%2FoboyO8ds5sufinPOaxLRakHFVxNzAiEA2eFKZz%2BtX36GTopZKR2d5z%2BbWDfiwhi4jMbTQ5p4sc8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlNxfR4g6KayU3AmircAxarEIOZcxrHfN1zx%2FgUYAJY4%2Bl7TVQ%2B0fbw6QOVGDMJsGr5YOYrZ%2FipXYVd7zzy4Vqh5c4%2BpZH0vFqUvOnayeFxc8WpLZFasTiDBSpDwmhwUgu%2FC2NdAya00SnhUkXjZ100vW43eZPoLQMmf9jruJv5S0Vm2NWl6seBC6e%2BSHd8ZeabGtUUiJRvk7kNSQTj5pISgiY8ggfJkPbyMKw65O5o%2FqVBnGmodhYyuhQsfgGfeiGaJ4%2FYCx8GbPjgGg%2FcocJSXiIh5w3bgUXaWGtfzIrHVm7sGvzOLMuW3OgRREearprjlRLw7DCLlweXLv383oW4TE5pdyn8x%2FqqjYndS%2FBGuREUrs6eQq7GnKlb2I67oZIQio1ZpSKWGjwbUK%2BBvy4vZx5PHEkL7qX8qZfOPpy%2FISqVxE6kXjz4uJmQ6FvlGj6kIamnGMNp47KrLzr5m3m32wuIrOTZG1wa59Tsn0MWrRPnp8uwijFUxjNJwwElBPqX3Ne4li06gn8S9ofXUo%2Fkxw08k%2B2XvMJCMU%2BORG5Br1Us%2Fo8dpLZwNS5u81FIqFIer1%2B3KoPoq9%2BXKG6RyXLFMoplngE5n39Sr%2BmvD5FBuRXA7b17oLfwEi%2BjRyBn6d8NDxT71rFns5GhMJTE8sUGOqUB%2FQGxWd5K1335cyqUNpw5cmsUfQfyOjHNtalVP%2BSQzlRsYcgPwkg%2FUpwx7e36NsiBdD55Okfg9Ev%2FE%2FAZFOrjDYAYPkp5dQ587cCxfcfWLs71dK1KSQwwLz7u6Hwf%2B10E2n8MT%2FsFfMEVRLwzRpe%2Fh4zYfYEbF%2F2xbyBrrEDwWUVpjRzkMluCG5mQdo3P0Vmdnn%2BzfsAj8kLIo0dks%2FOT5mverevf&X-Amz-Signature=f132b0d3432337aa0a2fdb05eb2d16b50c9835b18f03ffb186fdf16ced42955c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMXBAZSK%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAGDOy0pB1yxN6dh3zu4C7O7BNSn%2BVWSdI0dDYxc8V8cAiEAj4x0b5yMM%2FO3ifXRosj1j9zrs1LEJt31G667IYswGIkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAp3mUaV7Kl537Qx1yrcA3CTZs%2FqUI7GjRl7qlvG238MMokFMamVPvWG7CeFkwjc%2BUV6gr%2BrdopeYIuSkjWb10WKGD2qRLF6rDJKglFM5QZbhctgd4wqfsXS9e8a82PIEdSrpmkPZnhKg0BXOH3eK28oCtRpZu0fV4p8iO8NjJnq0UH8katoElXvNYQlDXVstCFukZW5st6NI%2BpHNts76zInyUwejR%2FjJOE%2BsPNBOwOU00QIDtkXHP%2BFXyk%2F8LxbEETM5z4TOhImgGufvZ3oc%2FBTB7x%2FfoBNzc7nz0eXn73qMw1%2B%2BYgP85mmOnDvX1az4UQnIYQPUviksYIjnSgmREhc%2Fu%2B74IsXzo%2FAJxFu2IjXjDgslEPYpVagi3W1yj%2F7C%2F%2FbNoGbBlHXIJsqPhejjbriSZKpDO7%2BnbdoOtFab9jPduthuWKCsqinrk9NRPrzZMqsz74%2Fahji%2F78AgXAwqBEKfhUm01ZAR9NfC9V67GAKnX%2FS3WHe3TGuSMjmUfh9yMZL4ga4EtasNQZa8fKhV2dE5NkNZP1S0%2BZ4sPj%2FWPq3jCd6rfM61AGgfwkUl2ZhRd4lZ4GBeLVnaa%2BQTeWHyO%2F8uyVgrhjmRqG%2Ff5J9ijaYFdWdhNcURI4uhjwozoTmsc7Ixr0u%2FLCPHzyKMKjE8sUGOqUBxeuLdKBo%2FV6KCDuzKgV3hyLddITBteTea7Ug3U0ihTKsf3R3omuVA4QfTJd3gohPr8JD4c6gsg5jNOzdjK%2Fqbycx4TwYd1WluvQggvLM4SzLS8QXnwbMRrxDeR5hZuAfUVwLrygVLqL8d4u%2B757u5L7kPcSmhgI2KeMUMfqUbQQCNNM6bGLsHo%2BO72Jjpkmk9RRJWtf1syv1IJQAU3hbDWr5kfL1&X-Amz-Signature=32462eed0b3c541054ee49f251231b0be7b660ceb5bf0374ce108d44f48aa03c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLILTP6B%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAft2%2FajfRMMGzJ%2FoboyO8ds5sufinPOaxLRakHFVxNzAiEA2eFKZz%2BtX36GTopZKR2d5z%2BbWDfiwhi4jMbTQ5p4sc8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlNxfR4g6KayU3AmircAxarEIOZcxrHfN1zx%2FgUYAJY4%2Bl7TVQ%2B0fbw6QOVGDMJsGr5YOYrZ%2FipXYVd7zzy4Vqh5c4%2BpZH0vFqUvOnayeFxc8WpLZFasTiDBSpDwmhwUgu%2FC2NdAya00SnhUkXjZ100vW43eZPoLQMmf9jruJv5S0Vm2NWl6seBC6e%2BSHd8ZeabGtUUiJRvk7kNSQTj5pISgiY8ggfJkPbyMKw65O5o%2FqVBnGmodhYyuhQsfgGfeiGaJ4%2FYCx8GbPjgGg%2FcocJSXiIh5w3bgUXaWGtfzIrHVm7sGvzOLMuW3OgRREearprjlRLw7DCLlweXLv383oW4TE5pdyn8x%2FqqjYndS%2FBGuREUrs6eQq7GnKlb2I67oZIQio1ZpSKWGjwbUK%2BBvy4vZx5PHEkL7qX8qZfOPpy%2FISqVxE6kXjz4uJmQ6FvlGj6kIamnGMNp47KrLzr5m3m32wuIrOTZG1wa59Tsn0MWrRPnp8uwijFUxjNJwwElBPqX3Ne4li06gn8S9ofXUo%2Fkxw08k%2B2XvMJCMU%2BORG5Br1Us%2Fo8dpLZwNS5u81FIqFIer1%2B3KoPoq9%2BXKG6RyXLFMoplngE5n39Sr%2BmvD5FBuRXA7b17oLfwEi%2BjRyBn6d8NDxT71rFns5GhMJTE8sUGOqUB%2FQGxWd5K1335cyqUNpw5cmsUfQfyOjHNtalVP%2BSQzlRsYcgPwkg%2FUpwx7e36NsiBdD55Okfg9Ev%2FE%2FAZFOrjDYAYPkp5dQ587cCxfcfWLs71dK1KSQwwLz7u6Hwf%2B10E2n8MT%2FsFfMEVRLwzRpe%2Fh4zYfYEbF%2F2xbyBrrEDwWUVpjRzkMluCG5mQdo3P0Vmdnn%2BzfsAj8kLIo0dks%2FOT5mverevf&X-Amz-Signature=049d98fb22c5326369486b15a13128fb1e5fc92669ee0d6f716ec14331aa438a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLILTP6B%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAft2%2FajfRMMGzJ%2FoboyO8ds5sufinPOaxLRakHFVxNzAiEA2eFKZz%2BtX36GTopZKR2d5z%2BbWDfiwhi4jMbTQ5p4sc8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlNxfR4g6KayU3AmircAxarEIOZcxrHfN1zx%2FgUYAJY4%2Bl7TVQ%2B0fbw6QOVGDMJsGr5YOYrZ%2FipXYVd7zzy4Vqh5c4%2BpZH0vFqUvOnayeFxc8WpLZFasTiDBSpDwmhwUgu%2FC2NdAya00SnhUkXjZ100vW43eZPoLQMmf9jruJv5S0Vm2NWl6seBC6e%2BSHd8ZeabGtUUiJRvk7kNSQTj5pISgiY8ggfJkPbyMKw65O5o%2FqVBnGmodhYyuhQsfgGfeiGaJ4%2FYCx8GbPjgGg%2FcocJSXiIh5w3bgUXaWGtfzIrHVm7sGvzOLMuW3OgRREearprjlRLw7DCLlweXLv383oW4TE5pdyn8x%2FqqjYndS%2FBGuREUrs6eQq7GnKlb2I67oZIQio1ZpSKWGjwbUK%2BBvy4vZx5PHEkL7qX8qZfOPpy%2FISqVxE6kXjz4uJmQ6FvlGj6kIamnGMNp47KrLzr5m3m32wuIrOTZG1wa59Tsn0MWrRPnp8uwijFUxjNJwwElBPqX3Ne4li06gn8S9ofXUo%2Fkxw08k%2B2XvMJCMU%2BORG5Br1Us%2Fo8dpLZwNS5u81FIqFIer1%2B3KoPoq9%2BXKG6RyXLFMoplngE5n39Sr%2BmvD5FBuRXA7b17oLfwEi%2BjRyBn6d8NDxT71rFns5GhMJTE8sUGOqUB%2FQGxWd5K1335cyqUNpw5cmsUfQfyOjHNtalVP%2BSQzlRsYcgPwkg%2FUpwx7e36NsiBdD55Okfg9Ev%2FE%2FAZFOrjDYAYPkp5dQ587cCxfcfWLs71dK1KSQwwLz7u6Hwf%2B10E2n8MT%2FsFfMEVRLwzRpe%2Fh4zYfYEbF%2F2xbyBrrEDwWUVpjRzkMluCG5mQdo3P0Vmdnn%2BzfsAj8kLIo0dks%2FOT5mverevf&X-Amz-Signature=bf64a5ddcbbfa400054795938910c054e7b2aeb96452c372453a9abab87ca70e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLILTP6B%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAft2%2FajfRMMGzJ%2FoboyO8ds5sufinPOaxLRakHFVxNzAiEA2eFKZz%2BtX36GTopZKR2d5z%2BbWDfiwhi4jMbTQ5p4sc8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlNxfR4g6KayU3AmircAxarEIOZcxrHfN1zx%2FgUYAJY4%2Bl7TVQ%2B0fbw6QOVGDMJsGr5YOYrZ%2FipXYVd7zzy4Vqh5c4%2BpZH0vFqUvOnayeFxc8WpLZFasTiDBSpDwmhwUgu%2FC2NdAya00SnhUkXjZ100vW43eZPoLQMmf9jruJv5S0Vm2NWl6seBC6e%2BSHd8ZeabGtUUiJRvk7kNSQTj5pISgiY8ggfJkPbyMKw65O5o%2FqVBnGmodhYyuhQsfgGfeiGaJ4%2FYCx8GbPjgGg%2FcocJSXiIh5w3bgUXaWGtfzIrHVm7sGvzOLMuW3OgRREearprjlRLw7DCLlweXLv383oW4TE5pdyn8x%2FqqjYndS%2FBGuREUrs6eQq7GnKlb2I67oZIQio1ZpSKWGjwbUK%2BBvy4vZx5PHEkL7qX8qZfOPpy%2FISqVxE6kXjz4uJmQ6FvlGj6kIamnGMNp47KrLzr5m3m32wuIrOTZG1wa59Tsn0MWrRPnp8uwijFUxjNJwwElBPqX3Ne4li06gn8S9ofXUo%2Fkxw08k%2B2XvMJCMU%2BORG5Br1Us%2Fo8dpLZwNS5u81FIqFIer1%2B3KoPoq9%2BXKG6RyXLFMoplngE5n39Sr%2BmvD5FBuRXA7b17oLfwEi%2BjRyBn6d8NDxT71rFns5GhMJTE8sUGOqUB%2FQGxWd5K1335cyqUNpw5cmsUfQfyOjHNtalVP%2BSQzlRsYcgPwkg%2FUpwx7e36NsiBdD55Okfg9Ev%2FE%2FAZFOrjDYAYPkp5dQ587cCxfcfWLs71dK1KSQwwLz7u6Hwf%2B10E2n8MT%2FsFfMEVRLwzRpe%2Fh4zYfYEbF%2F2xbyBrrEDwWUVpjRzkMluCG5mQdo3P0Vmdnn%2BzfsAj8kLIo0dks%2FOT5mverevf&X-Amz-Signature=27b3cc04e7fce73fe6be786e41502863770220207bd84aad8885e3a4b7464d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLILTP6B%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAft2%2FajfRMMGzJ%2FoboyO8ds5sufinPOaxLRakHFVxNzAiEA2eFKZz%2BtX36GTopZKR2d5z%2BbWDfiwhi4jMbTQ5p4sc8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlNxfR4g6KayU3AmircAxarEIOZcxrHfN1zx%2FgUYAJY4%2Bl7TVQ%2B0fbw6QOVGDMJsGr5YOYrZ%2FipXYVd7zzy4Vqh5c4%2BpZH0vFqUvOnayeFxc8WpLZFasTiDBSpDwmhwUgu%2FC2NdAya00SnhUkXjZ100vW43eZPoLQMmf9jruJv5S0Vm2NWl6seBC6e%2BSHd8ZeabGtUUiJRvk7kNSQTj5pISgiY8ggfJkPbyMKw65O5o%2FqVBnGmodhYyuhQsfgGfeiGaJ4%2FYCx8GbPjgGg%2FcocJSXiIh5w3bgUXaWGtfzIrHVm7sGvzOLMuW3OgRREearprjlRLw7DCLlweXLv383oW4TE5pdyn8x%2FqqjYndS%2FBGuREUrs6eQq7GnKlb2I67oZIQio1ZpSKWGjwbUK%2BBvy4vZx5PHEkL7qX8qZfOPpy%2FISqVxE6kXjz4uJmQ6FvlGj6kIamnGMNp47KrLzr5m3m32wuIrOTZG1wa59Tsn0MWrRPnp8uwijFUxjNJwwElBPqX3Ne4li06gn8S9ofXUo%2Fkxw08k%2B2XvMJCMU%2BORG5Br1Us%2Fo8dpLZwNS5u81FIqFIer1%2B3KoPoq9%2BXKG6RyXLFMoplngE5n39Sr%2BmvD5FBuRXA7b17oLfwEi%2BjRyBn6d8NDxT71rFns5GhMJTE8sUGOqUB%2FQGxWd5K1335cyqUNpw5cmsUfQfyOjHNtalVP%2BSQzlRsYcgPwkg%2FUpwx7e36NsiBdD55Okfg9Ev%2FE%2FAZFOrjDYAYPkp5dQ587cCxfcfWLs71dK1KSQwwLz7u6Hwf%2B10E2n8MT%2FsFfMEVRLwzRpe%2Fh4zYfYEbF%2F2xbyBrrEDwWUVpjRzkMluCG5mQdo3P0Vmdnn%2BzfsAj8kLIo0dks%2FOT5mverevf&X-Amz-Signature=f7a5d56bb34b9018cb76a29c1d6fb608f87136c48961575a5e58e7a84d1f6db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLILTP6B%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAft2%2FajfRMMGzJ%2FoboyO8ds5sufinPOaxLRakHFVxNzAiEA2eFKZz%2BtX36GTopZKR2d5z%2BbWDfiwhi4jMbTQ5p4sc8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlNxfR4g6KayU3AmircAxarEIOZcxrHfN1zx%2FgUYAJY4%2Bl7TVQ%2B0fbw6QOVGDMJsGr5YOYrZ%2FipXYVd7zzy4Vqh5c4%2BpZH0vFqUvOnayeFxc8WpLZFasTiDBSpDwmhwUgu%2FC2NdAya00SnhUkXjZ100vW43eZPoLQMmf9jruJv5S0Vm2NWl6seBC6e%2BSHd8ZeabGtUUiJRvk7kNSQTj5pISgiY8ggfJkPbyMKw65O5o%2FqVBnGmodhYyuhQsfgGfeiGaJ4%2FYCx8GbPjgGg%2FcocJSXiIh5w3bgUXaWGtfzIrHVm7sGvzOLMuW3OgRREearprjlRLw7DCLlweXLv383oW4TE5pdyn8x%2FqqjYndS%2FBGuREUrs6eQq7GnKlb2I67oZIQio1ZpSKWGjwbUK%2BBvy4vZx5PHEkL7qX8qZfOPpy%2FISqVxE6kXjz4uJmQ6FvlGj6kIamnGMNp47KrLzr5m3m32wuIrOTZG1wa59Tsn0MWrRPnp8uwijFUxjNJwwElBPqX3Ne4li06gn8S9ofXUo%2Fkxw08k%2B2XvMJCMU%2BORG5Br1Us%2Fo8dpLZwNS5u81FIqFIer1%2B3KoPoq9%2BXKG6RyXLFMoplngE5n39Sr%2BmvD5FBuRXA7b17oLfwEi%2BjRyBn6d8NDxT71rFns5GhMJTE8sUGOqUB%2FQGxWd5K1335cyqUNpw5cmsUfQfyOjHNtalVP%2BSQzlRsYcgPwkg%2FUpwx7e36NsiBdD55Okfg9Ev%2FE%2FAZFOrjDYAYPkp5dQ587cCxfcfWLs71dK1KSQwwLz7u6Hwf%2B10E2n8MT%2FsFfMEVRLwzRpe%2Fh4zYfYEbF%2F2xbyBrrEDwWUVpjRzkMluCG5mQdo3P0Vmdnn%2BzfsAj8kLIo0dks%2FOT5mverevf&X-Amz-Signature=0322a048aee24e01e1deed207a0b7aeb77f4fad7eb8aa27305a63423ae1c6548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLILTP6B%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAft2%2FajfRMMGzJ%2FoboyO8ds5sufinPOaxLRakHFVxNzAiEA2eFKZz%2BtX36GTopZKR2d5z%2BbWDfiwhi4jMbTQ5p4sc8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlNxfR4g6KayU3AmircAxarEIOZcxrHfN1zx%2FgUYAJY4%2Bl7TVQ%2B0fbw6QOVGDMJsGr5YOYrZ%2FipXYVd7zzy4Vqh5c4%2BpZH0vFqUvOnayeFxc8WpLZFasTiDBSpDwmhwUgu%2FC2NdAya00SnhUkXjZ100vW43eZPoLQMmf9jruJv5S0Vm2NWl6seBC6e%2BSHd8ZeabGtUUiJRvk7kNSQTj5pISgiY8ggfJkPbyMKw65O5o%2FqVBnGmodhYyuhQsfgGfeiGaJ4%2FYCx8GbPjgGg%2FcocJSXiIh5w3bgUXaWGtfzIrHVm7sGvzOLMuW3OgRREearprjlRLw7DCLlweXLv383oW4TE5pdyn8x%2FqqjYndS%2FBGuREUrs6eQq7GnKlb2I67oZIQio1ZpSKWGjwbUK%2BBvy4vZx5PHEkL7qX8qZfOPpy%2FISqVxE6kXjz4uJmQ6FvlGj6kIamnGMNp47KrLzr5m3m32wuIrOTZG1wa59Tsn0MWrRPnp8uwijFUxjNJwwElBPqX3Ne4li06gn8S9ofXUo%2Fkxw08k%2B2XvMJCMU%2BORG5Br1Us%2Fo8dpLZwNS5u81FIqFIer1%2B3KoPoq9%2BXKG6RyXLFMoplngE5n39Sr%2BmvD5FBuRXA7b17oLfwEi%2BjRyBn6d8NDxT71rFns5GhMJTE8sUGOqUB%2FQGxWd5K1335cyqUNpw5cmsUfQfyOjHNtalVP%2BSQzlRsYcgPwkg%2FUpwx7e36NsiBdD55Okfg9Ev%2FE%2FAZFOrjDYAYPkp5dQ587cCxfcfWLs71dK1KSQwwLz7u6Hwf%2B10E2n8MT%2FsFfMEVRLwzRpe%2Fh4zYfYEbF%2F2xbyBrrEDwWUVpjRzkMluCG5mQdo3P0Vmdnn%2BzfsAj8kLIo0dks%2FOT5mverevf&X-Amz-Signature=19a88c2f6328bb7002d4d8e2fd6a4a48902d8bdbedbbd66c2b800028f39e85cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


