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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZR7YP4%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF46ce5%2FzEFuQ1P9uKRzYYrxVJgzxdrpM5kCvVjt4pw4AiAMgjwHNapt01ahHFsGDs4mfCQoaOWP4nDCAOGmwvp%2Fwir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAJqfpjbfYY7jcISHKtwD7mIl%2F5MRzToMQezVsWegMEQFrvkvPbcOXf5aAOSchslKmBRA7c4DBpMbEJQ%2B0ZGAHDoL9EA321S%2BJZ09Qqezupb70ZWAll4tkLHZFcROcvTkBB32YIVdMx%2BNEcqwALzEe6u3uCYYUTuEo4Jx2i4aAy3UQRyrbvic1GfumOsusq%2BzrmOgZ2Q%2FDmUpu7VLaP%2F0%2B34u2NA7PXcM1D55VQ1XyvxFoHPFn4hsDBMp8XijYHgpvaan6bC3EUpYTznKPqLhQ9fbeNCboCWUP4yPW7HLpq0sRIjJcA6eoKYYvqe6iu%2BEzGWALKicM9vBqzMVgDVRZuY9NOBkKEfgDXtODC3xUv51kkg7WkrB%2FR%2Bi4JVkWCVnzTZ7Oe60BXH9IDPw7RipJbFaDzvkS%2BB%2BO%2FR9QvGTv5WvDv18URe8tINlay%2Fk9lC4N%2FJ9UxcrM03mYNn4nkXX70Rj6bdz2PCAoHDwUiB5v9pOX1s%2FBkUSd0%2F%2BDJdHgYhvQGzs5Bc2dh5ICfGiUO6lrIx2LgZDKPoiZYyCdcvvlN%2FAZGMZjMmzYE%2FHXHWlrB22Jg4Uo8%2FrvJTKUOQOSSYrth5q0BFOg%2Bws%2FKLksCifqBB5%2BYJiZhhMx04IAtaGDCokNM8VaM%2FZf0duhxkworCJyQY6pgGLiTD1ruso24zzUUxcamccQjIpwxpaY828aVkyOhf6KNdDdax3lxEWF6VhA1qjqBB3fGWa%2F0iRe3pAQJX1LN05rLMNC%2BO6BB3%2FvSuPxLIrmdQ%2FjmmSz1jKcyG9W8hws25HSfvDp5IMqIphUiOGIc6kDdGOJueGU23lo4Wm%2BGuYmRJkDoRkw6ybnnPFY3Wvjt7N7j0BrzwNI7yGad%2FlZxC1F3iqIZfg&X-Amz-Signature=c8ebe31efb29ce4afc6c77227228435f0f8ca76ae6a917b16df248d6c21351ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZR7YP4%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF46ce5%2FzEFuQ1P9uKRzYYrxVJgzxdrpM5kCvVjt4pw4AiAMgjwHNapt01ahHFsGDs4mfCQoaOWP4nDCAOGmwvp%2Fwir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAJqfpjbfYY7jcISHKtwD7mIl%2F5MRzToMQezVsWegMEQFrvkvPbcOXf5aAOSchslKmBRA7c4DBpMbEJQ%2B0ZGAHDoL9EA321S%2BJZ09Qqezupb70ZWAll4tkLHZFcROcvTkBB32YIVdMx%2BNEcqwALzEe6u3uCYYUTuEo4Jx2i4aAy3UQRyrbvic1GfumOsusq%2BzrmOgZ2Q%2FDmUpu7VLaP%2F0%2B34u2NA7PXcM1D55VQ1XyvxFoHPFn4hsDBMp8XijYHgpvaan6bC3EUpYTznKPqLhQ9fbeNCboCWUP4yPW7HLpq0sRIjJcA6eoKYYvqe6iu%2BEzGWALKicM9vBqzMVgDVRZuY9NOBkKEfgDXtODC3xUv51kkg7WkrB%2FR%2Bi4JVkWCVnzTZ7Oe60BXH9IDPw7RipJbFaDzvkS%2BB%2BO%2FR9QvGTv5WvDv18URe8tINlay%2Fk9lC4N%2FJ9UxcrM03mYNn4nkXX70Rj6bdz2PCAoHDwUiB5v9pOX1s%2FBkUSd0%2F%2BDJdHgYhvQGzs5Bc2dh5ICfGiUO6lrIx2LgZDKPoiZYyCdcvvlN%2FAZGMZjMmzYE%2FHXHWlrB22Jg4Uo8%2FrvJTKUOQOSSYrth5q0BFOg%2Bws%2FKLksCifqBB5%2BYJiZhhMx04IAtaGDCokNM8VaM%2FZf0duhxkworCJyQY6pgGLiTD1ruso24zzUUxcamccQjIpwxpaY828aVkyOhf6KNdDdax3lxEWF6VhA1qjqBB3fGWa%2F0iRe3pAQJX1LN05rLMNC%2BO6BB3%2FvSuPxLIrmdQ%2FjmmSz1jKcyG9W8hws25HSfvDp5IMqIphUiOGIc6kDdGOJueGU23lo4Wm%2BGuYmRJkDoRkw6ybnnPFY3Wvjt7N7j0BrzwNI7yGad%2FlZxC1F3iqIZfg&X-Amz-Signature=8c494cae8b5f0ec0914699fa8d11bbd2f0fa0cdb802a0b7a185a12f3fc255668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZR7YP4%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF46ce5%2FzEFuQ1P9uKRzYYrxVJgzxdrpM5kCvVjt4pw4AiAMgjwHNapt01ahHFsGDs4mfCQoaOWP4nDCAOGmwvp%2Fwir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAJqfpjbfYY7jcISHKtwD7mIl%2F5MRzToMQezVsWegMEQFrvkvPbcOXf5aAOSchslKmBRA7c4DBpMbEJQ%2B0ZGAHDoL9EA321S%2BJZ09Qqezupb70ZWAll4tkLHZFcROcvTkBB32YIVdMx%2BNEcqwALzEe6u3uCYYUTuEo4Jx2i4aAy3UQRyrbvic1GfumOsusq%2BzrmOgZ2Q%2FDmUpu7VLaP%2F0%2B34u2NA7PXcM1D55VQ1XyvxFoHPFn4hsDBMp8XijYHgpvaan6bC3EUpYTznKPqLhQ9fbeNCboCWUP4yPW7HLpq0sRIjJcA6eoKYYvqe6iu%2BEzGWALKicM9vBqzMVgDVRZuY9NOBkKEfgDXtODC3xUv51kkg7WkrB%2FR%2Bi4JVkWCVnzTZ7Oe60BXH9IDPw7RipJbFaDzvkS%2BB%2BO%2FR9QvGTv5WvDv18URe8tINlay%2Fk9lC4N%2FJ9UxcrM03mYNn4nkXX70Rj6bdz2PCAoHDwUiB5v9pOX1s%2FBkUSd0%2F%2BDJdHgYhvQGzs5Bc2dh5ICfGiUO6lrIx2LgZDKPoiZYyCdcvvlN%2FAZGMZjMmzYE%2FHXHWlrB22Jg4Uo8%2FrvJTKUOQOSSYrth5q0BFOg%2Bws%2FKLksCifqBB5%2BYJiZhhMx04IAtaGDCokNM8VaM%2FZf0duhxkworCJyQY6pgGLiTD1ruso24zzUUxcamccQjIpwxpaY828aVkyOhf6KNdDdax3lxEWF6VhA1qjqBB3fGWa%2F0iRe3pAQJX1LN05rLMNC%2BO6BB3%2FvSuPxLIrmdQ%2FjmmSz1jKcyG9W8hws25HSfvDp5IMqIphUiOGIc6kDdGOJueGU23lo4Wm%2BGuYmRJkDoRkw6ybnnPFY3Wvjt7N7j0BrzwNI7yGad%2FlZxC1F3iqIZfg&X-Amz-Signature=56c29ee599ac08df6fa68f6a121fb5b468bab1c3c65d2e9408d6097192e5e09e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZR7YP4%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF46ce5%2FzEFuQ1P9uKRzYYrxVJgzxdrpM5kCvVjt4pw4AiAMgjwHNapt01ahHFsGDs4mfCQoaOWP4nDCAOGmwvp%2Fwir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAJqfpjbfYY7jcISHKtwD7mIl%2F5MRzToMQezVsWegMEQFrvkvPbcOXf5aAOSchslKmBRA7c4DBpMbEJQ%2B0ZGAHDoL9EA321S%2BJZ09Qqezupb70ZWAll4tkLHZFcROcvTkBB32YIVdMx%2BNEcqwALzEe6u3uCYYUTuEo4Jx2i4aAy3UQRyrbvic1GfumOsusq%2BzrmOgZ2Q%2FDmUpu7VLaP%2F0%2B34u2NA7PXcM1D55VQ1XyvxFoHPFn4hsDBMp8XijYHgpvaan6bC3EUpYTznKPqLhQ9fbeNCboCWUP4yPW7HLpq0sRIjJcA6eoKYYvqe6iu%2BEzGWALKicM9vBqzMVgDVRZuY9NOBkKEfgDXtODC3xUv51kkg7WkrB%2FR%2Bi4JVkWCVnzTZ7Oe60BXH9IDPw7RipJbFaDzvkS%2BB%2BO%2FR9QvGTv5WvDv18URe8tINlay%2Fk9lC4N%2FJ9UxcrM03mYNn4nkXX70Rj6bdz2PCAoHDwUiB5v9pOX1s%2FBkUSd0%2F%2BDJdHgYhvQGzs5Bc2dh5ICfGiUO6lrIx2LgZDKPoiZYyCdcvvlN%2FAZGMZjMmzYE%2FHXHWlrB22Jg4Uo8%2FrvJTKUOQOSSYrth5q0BFOg%2Bws%2FKLksCifqBB5%2BYJiZhhMx04IAtaGDCokNM8VaM%2FZf0duhxkworCJyQY6pgGLiTD1ruso24zzUUxcamccQjIpwxpaY828aVkyOhf6KNdDdax3lxEWF6VhA1qjqBB3fGWa%2F0iRe3pAQJX1LN05rLMNC%2BO6BB3%2FvSuPxLIrmdQ%2FjmmSz1jKcyG9W8hws25HSfvDp5IMqIphUiOGIc6kDdGOJueGU23lo4Wm%2BGuYmRJkDoRkw6ybnnPFY3Wvjt7N7j0BrzwNI7yGad%2FlZxC1F3iqIZfg&X-Amz-Signature=67ae77ffff849ba3f8df542373c9f99a3eddfe6c97c5ea7b78687fa10a0b8535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZR7YP4%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF46ce5%2FzEFuQ1P9uKRzYYrxVJgzxdrpM5kCvVjt4pw4AiAMgjwHNapt01ahHFsGDs4mfCQoaOWP4nDCAOGmwvp%2Fwir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAJqfpjbfYY7jcISHKtwD7mIl%2F5MRzToMQezVsWegMEQFrvkvPbcOXf5aAOSchslKmBRA7c4DBpMbEJQ%2B0ZGAHDoL9EA321S%2BJZ09Qqezupb70ZWAll4tkLHZFcROcvTkBB32YIVdMx%2BNEcqwALzEe6u3uCYYUTuEo4Jx2i4aAy3UQRyrbvic1GfumOsusq%2BzrmOgZ2Q%2FDmUpu7VLaP%2F0%2B34u2NA7PXcM1D55VQ1XyvxFoHPFn4hsDBMp8XijYHgpvaan6bC3EUpYTznKPqLhQ9fbeNCboCWUP4yPW7HLpq0sRIjJcA6eoKYYvqe6iu%2BEzGWALKicM9vBqzMVgDVRZuY9NOBkKEfgDXtODC3xUv51kkg7WkrB%2FR%2Bi4JVkWCVnzTZ7Oe60BXH9IDPw7RipJbFaDzvkS%2BB%2BO%2FR9QvGTv5WvDv18URe8tINlay%2Fk9lC4N%2FJ9UxcrM03mYNn4nkXX70Rj6bdz2PCAoHDwUiB5v9pOX1s%2FBkUSd0%2F%2BDJdHgYhvQGzs5Bc2dh5ICfGiUO6lrIx2LgZDKPoiZYyCdcvvlN%2FAZGMZjMmzYE%2FHXHWlrB22Jg4Uo8%2FrvJTKUOQOSSYrth5q0BFOg%2Bws%2FKLksCifqBB5%2BYJiZhhMx04IAtaGDCokNM8VaM%2FZf0duhxkworCJyQY6pgGLiTD1ruso24zzUUxcamccQjIpwxpaY828aVkyOhf6KNdDdax3lxEWF6VhA1qjqBB3fGWa%2F0iRe3pAQJX1LN05rLMNC%2BO6BB3%2FvSuPxLIrmdQ%2FjmmSz1jKcyG9W8hws25HSfvDp5IMqIphUiOGIc6kDdGOJueGU23lo4Wm%2BGuYmRJkDoRkw6ybnnPFY3Wvjt7N7j0BrzwNI7yGad%2FlZxC1F3iqIZfg&X-Amz-Signature=ad6cff63ae70388227349e91a2891c0df60790eb479cd28916be75dcbba43417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZR7YP4%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF46ce5%2FzEFuQ1P9uKRzYYrxVJgzxdrpM5kCvVjt4pw4AiAMgjwHNapt01ahHFsGDs4mfCQoaOWP4nDCAOGmwvp%2Fwir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAJqfpjbfYY7jcISHKtwD7mIl%2F5MRzToMQezVsWegMEQFrvkvPbcOXf5aAOSchslKmBRA7c4DBpMbEJQ%2B0ZGAHDoL9EA321S%2BJZ09Qqezupb70ZWAll4tkLHZFcROcvTkBB32YIVdMx%2BNEcqwALzEe6u3uCYYUTuEo4Jx2i4aAy3UQRyrbvic1GfumOsusq%2BzrmOgZ2Q%2FDmUpu7VLaP%2F0%2B34u2NA7PXcM1D55VQ1XyvxFoHPFn4hsDBMp8XijYHgpvaan6bC3EUpYTznKPqLhQ9fbeNCboCWUP4yPW7HLpq0sRIjJcA6eoKYYvqe6iu%2BEzGWALKicM9vBqzMVgDVRZuY9NOBkKEfgDXtODC3xUv51kkg7WkrB%2FR%2Bi4JVkWCVnzTZ7Oe60BXH9IDPw7RipJbFaDzvkS%2BB%2BO%2FR9QvGTv5WvDv18URe8tINlay%2Fk9lC4N%2FJ9UxcrM03mYNn4nkXX70Rj6bdz2PCAoHDwUiB5v9pOX1s%2FBkUSd0%2F%2BDJdHgYhvQGzs5Bc2dh5ICfGiUO6lrIx2LgZDKPoiZYyCdcvvlN%2FAZGMZjMmzYE%2FHXHWlrB22Jg4Uo8%2FrvJTKUOQOSSYrth5q0BFOg%2Bws%2FKLksCifqBB5%2BYJiZhhMx04IAtaGDCokNM8VaM%2FZf0duhxkworCJyQY6pgGLiTD1ruso24zzUUxcamccQjIpwxpaY828aVkyOhf6KNdDdax3lxEWF6VhA1qjqBB3fGWa%2F0iRe3pAQJX1LN05rLMNC%2BO6BB3%2FvSuPxLIrmdQ%2FjmmSz1jKcyG9W8hws25HSfvDp5IMqIphUiOGIc6kDdGOJueGU23lo4Wm%2BGuYmRJkDoRkw6ybnnPFY3Wvjt7N7j0BrzwNI7yGad%2FlZxC1F3iqIZfg&X-Amz-Signature=610bfad1f671440173d22fd6cfd51d92b2577e7333696f061fc90c291b0e13a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZR7YP4%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF46ce5%2FzEFuQ1P9uKRzYYrxVJgzxdrpM5kCvVjt4pw4AiAMgjwHNapt01ahHFsGDs4mfCQoaOWP4nDCAOGmwvp%2Fwir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAJqfpjbfYY7jcISHKtwD7mIl%2F5MRzToMQezVsWegMEQFrvkvPbcOXf5aAOSchslKmBRA7c4DBpMbEJQ%2B0ZGAHDoL9EA321S%2BJZ09Qqezupb70ZWAll4tkLHZFcROcvTkBB32YIVdMx%2BNEcqwALzEe6u3uCYYUTuEo4Jx2i4aAy3UQRyrbvic1GfumOsusq%2BzrmOgZ2Q%2FDmUpu7VLaP%2F0%2B34u2NA7PXcM1D55VQ1XyvxFoHPFn4hsDBMp8XijYHgpvaan6bC3EUpYTznKPqLhQ9fbeNCboCWUP4yPW7HLpq0sRIjJcA6eoKYYvqe6iu%2BEzGWALKicM9vBqzMVgDVRZuY9NOBkKEfgDXtODC3xUv51kkg7WkrB%2FR%2Bi4JVkWCVnzTZ7Oe60BXH9IDPw7RipJbFaDzvkS%2BB%2BO%2FR9QvGTv5WvDv18URe8tINlay%2Fk9lC4N%2FJ9UxcrM03mYNn4nkXX70Rj6bdz2PCAoHDwUiB5v9pOX1s%2FBkUSd0%2F%2BDJdHgYhvQGzs5Bc2dh5ICfGiUO6lrIx2LgZDKPoiZYyCdcvvlN%2FAZGMZjMmzYE%2FHXHWlrB22Jg4Uo8%2FrvJTKUOQOSSYrth5q0BFOg%2Bws%2FKLksCifqBB5%2BYJiZhhMx04IAtaGDCokNM8VaM%2FZf0duhxkworCJyQY6pgGLiTD1ruso24zzUUxcamccQjIpwxpaY828aVkyOhf6KNdDdax3lxEWF6VhA1qjqBB3fGWa%2F0iRe3pAQJX1LN05rLMNC%2BO6BB3%2FvSuPxLIrmdQ%2FjmmSz1jKcyG9W8hws25HSfvDp5IMqIphUiOGIc6kDdGOJueGU23lo4Wm%2BGuYmRJkDoRkw6ybnnPFY3Wvjt7N7j0BrzwNI7yGad%2FlZxC1F3iqIZfg&X-Amz-Signature=79da023112b6369df5fda7866b056cb06533e15a9c4782abad63c1a580885ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZR7YP4%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF46ce5%2FzEFuQ1P9uKRzYYrxVJgzxdrpM5kCvVjt4pw4AiAMgjwHNapt01ahHFsGDs4mfCQoaOWP4nDCAOGmwvp%2Fwir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAJqfpjbfYY7jcISHKtwD7mIl%2F5MRzToMQezVsWegMEQFrvkvPbcOXf5aAOSchslKmBRA7c4DBpMbEJQ%2B0ZGAHDoL9EA321S%2BJZ09Qqezupb70ZWAll4tkLHZFcROcvTkBB32YIVdMx%2BNEcqwALzEe6u3uCYYUTuEo4Jx2i4aAy3UQRyrbvic1GfumOsusq%2BzrmOgZ2Q%2FDmUpu7VLaP%2F0%2B34u2NA7PXcM1D55VQ1XyvxFoHPFn4hsDBMp8XijYHgpvaan6bC3EUpYTznKPqLhQ9fbeNCboCWUP4yPW7HLpq0sRIjJcA6eoKYYvqe6iu%2BEzGWALKicM9vBqzMVgDVRZuY9NOBkKEfgDXtODC3xUv51kkg7WkrB%2FR%2Bi4JVkWCVnzTZ7Oe60BXH9IDPw7RipJbFaDzvkS%2BB%2BO%2FR9QvGTv5WvDv18URe8tINlay%2Fk9lC4N%2FJ9UxcrM03mYNn4nkXX70Rj6bdz2PCAoHDwUiB5v9pOX1s%2FBkUSd0%2F%2BDJdHgYhvQGzs5Bc2dh5ICfGiUO6lrIx2LgZDKPoiZYyCdcvvlN%2FAZGMZjMmzYE%2FHXHWlrB22Jg4Uo8%2FrvJTKUOQOSSYrth5q0BFOg%2Bws%2FKLksCifqBB5%2BYJiZhhMx04IAtaGDCokNM8VaM%2FZf0duhxkworCJyQY6pgGLiTD1ruso24zzUUxcamccQjIpwxpaY828aVkyOhf6KNdDdax3lxEWF6VhA1qjqBB3fGWa%2F0iRe3pAQJX1LN05rLMNC%2BO6BB3%2FvSuPxLIrmdQ%2FjmmSz1jKcyG9W8hws25HSfvDp5IMqIphUiOGIc6kDdGOJueGU23lo4Wm%2BGuYmRJkDoRkw6ybnnPFY3Wvjt7N7j0BrzwNI7yGad%2FlZxC1F3iqIZfg&X-Amz-Signature=cc9780ccf4ac0c3e6ba8eef5eabe692ad9b4cf724010bfe74af9e22badc4c13d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZR7YP4%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF46ce5%2FzEFuQ1P9uKRzYYrxVJgzxdrpM5kCvVjt4pw4AiAMgjwHNapt01ahHFsGDs4mfCQoaOWP4nDCAOGmwvp%2Fwir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAJqfpjbfYY7jcISHKtwD7mIl%2F5MRzToMQezVsWegMEQFrvkvPbcOXf5aAOSchslKmBRA7c4DBpMbEJQ%2B0ZGAHDoL9EA321S%2BJZ09Qqezupb70ZWAll4tkLHZFcROcvTkBB32YIVdMx%2BNEcqwALzEe6u3uCYYUTuEo4Jx2i4aAy3UQRyrbvic1GfumOsusq%2BzrmOgZ2Q%2FDmUpu7VLaP%2F0%2B34u2NA7PXcM1D55VQ1XyvxFoHPFn4hsDBMp8XijYHgpvaan6bC3EUpYTznKPqLhQ9fbeNCboCWUP4yPW7HLpq0sRIjJcA6eoKYYvqe6iu%2BEzGWALKicM9vBqzMVgDVRZuY9NOBkKEfgDXtODC3xUv51kkg7WkrB%2FR%2Bi4JVkWCVnzTZ7Oe60BXH9IDPw7RipJbFaDzvkS%2BB%2BO%2FR9QvGTv5WvDv18URe8tINlay%2Fk9lC4N%2FJ9UxcrM03mYNn4nkXX70Rj6bdz2PCAoHDwUiB5v9pOX1s%2FBkUSd0%2F%2BDJdHgYhvQGzs5Bc2dh5ICfGiUO6lrIx2LgZDKPoiZYyCdcvvlN%2FAZGMZjMmzYE%2FHXHWlrB22Jg4Uo8%2FrvJTKUOQOSSYrth5q0BFOg%2Bws%2FKLksCifqBB5%2BYJiZhhMx04IAtaGDCokNM8VaM%2FZf0duhxkworCJyQY6pgGLiTD1ruso24zzUUxcamccQjIpwxpaY828aVkyOhf6KNdDdax3lxEWF6VhA1qjqBB3fGWa%2F0iRe3pAQJX1LN05rLMNC%2BO6BB3%2FvSuPxLIrmdQ%2FjmmSz1jKcyG9W8hws25HSfvDp5IMqIphUiOGIc6kDdGOJueGU23lo4Wm%2BGuYmRJkDoRkw6ybnnPFY3Wvjt7N7j0BrzwNI7yGad%2FlZxC1F3iqIZfg&X-Amz-Signature=5d2129d7956300fae937cedca22ec18a507b9fb6120adf4907faad6334efff2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZR7YP4%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF46ce5%2FzEFuQ1P9uKRzYYrxVJgzxdrpM5kCvVjt4pw4AiAMgjwHNapt01ahHFsGDs4mfCQoaOWP4nDCAOGmwvp%2Fwir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAJqfpjbfYY7jcISHKtwD7mIl%2F5MRzToMQezVsWegMEQFrvkvPbcOXf5aAOSchslKmBRA7c4DBpMbEJQ%2B0ZGAHDoL9EA321S%2BJZ09Qqezupb70ZWAll4tkLHZFcROcvTkBB32YIVdMx%2BNEcqwALzEe6u3uCYYUTuEo4Jx2i4aAy3UQRyrbvic1GfumOsusq%2BzrmOgZ2Q%2FDmUpu7VLaP%2F0%2B34u2NA7PXcM1D55VQ1XyvxFoHPFn4hsDBMp8XijYHgpvaan6bC3EUpYTznKPqLhQ9fbeNCboCWUP4yPW7HLpq0sRIjJcA6eoKYYvqe6iu%2BEzGWALKicM9vBqzMVgDVRZuY9NOBkKEfgDXtODC3xUv51kkg7WkrB%2FR%2Bi4JVkWCVnzTZ7Oe60BXH9IDPw7RipJbFaDzvkS%2BB%2BO%2FR9QvGTv5WvDv18URe8tINlay%2Fk9lC4N%2FJ9UxcrM03mYNn4nkXX70Rj6bdz2PCAoHDwUiB5v9pOX1s%2FBkUSd0%2F%2BDJdHgYhvQGzs5Bc2dh5ICfGiUO6lrIx2LgZDKPoiZYyCdcvvlN%2FAZGMZjMmzYE%2FHXHWlrB22Jg4Uo8%2FrvJTKUOQOSSYrth5q0BFOg%2Bws%2FKLksCifqBB5%2BYJiZhhMx04IAtaGDCokNM8VaM%2FZf0duhxkworCJyQY6pgGLiTD1ruso24zzUUxcamccQjIpwxpaY828aVkyOhf6KNdDdax3lxEWF6VhA1qjqBB3fGWa%2F0iRe3pAQJX1LN05rLMNC%2BO6BB3%2FvSuPxLIrmdQ%2FjmmSz1jKcyG9W8hws25HSfvDp5IMqIphUiOGIc6kDdGOJueGU23lo4Wm%2BGuYmRJkDoRkw6ybnnPFY3Wvjt7N7j0BrzwNI7yGad%2FlZxC1F3iqIZfg&X-Amz-Signature=7cecc920d815dc7a607b157f19dc88e2736f200e0e5cb53f60bb222a832aec8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXWCXEW%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDJwNlmknCQ%2BaZUig7jzjK0lsc1grSW%2BQlhQIJUanQo0AiB90OBZ82fMqQmcLT6zZl92viUAYEvGvj08%2Btzn%2Fve8YCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMOTSjfvlTVto0Z2l4KtwDIGDfPGwOIX9cDZJPFXOqo41xyZuzvOlISSjWFsnE0%2BzH3hXRjOcAZzabqAp%2FhScaxTOxdgTMXCSwckaKlM2wq%2FuYW9xwk3iFH1l726lt7ZzgAS0liY6NYPtEEJQ3wW8yH229vbFvP2WrTMijPxl3QaVsXuTJGxhFcFcR2jpcFbVCkG9EWOD%2FTjEEHP0gAn4qKxsUgq4pK8IdubWsuD0if6GnPKpVpVkvAza7LHuj%2F5XvXl2vvnMqiReX7ywTQRkGWJSzUf3tIQTPFRhV0c51U7OvbmGD1cGxmxzEb018V64QOsLND7MKiqi5rBkw8FycOV53q4iVhgc0JRHwICSOUTZwWX1Z8N6k76Dwzl7A%2FoUAAd9EojJOLuLanMH5ETn%2FsSVmP%2Fg9I59oBBBuJIQ8%2FZEb1izJLGJpdXrxCFDOYeZdZug8RdhoX%2BBDAoQHw%2FpT90OiI1hRLwbBHt6SSpPQiUPtCDqspxkB3Gl%2BDYH7%2FhDq7iXHBvjo8iJqRnwWsSVLZxcfa58xkOlTEUMtR%2FSUWrGw6kbhy6Qg7I%2FpJ%2F9GEYlN2BgSAx1273FVf9eUXXW89HVNNUpahNv8T5Inxc%2FZG5Pfo%2FYkW6yiayjXVOBZ48OpBlDoIx7KETtNJuswtbCJyQY6pgEuUN6VF%2FB47uOIjq5i0t56DSoIEC6rDiiIEE9Fw94Ba6ZJOLqSw5savkee3XJuxKpyx91BjIs9JnEigl2Ef%2BcCKqt%2FzwzEFCndhTVEIU8EA8jRYFF1SaXAryk8ecxvVKEkjlPH96hEq8Mpn12Ys43DKqx%2FjK6OiTxJVjt8PYCDfkXdAIMvpJgZu6%2BC6toqS4kFn7TNOcDgPSOUeh38mh%2BRmuqu5ypC&X-Amz-Signature=e5146c9eaead57c23a5ecf75cd9cc05e8d6b00ce6e137429a85d657eff05398a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGF7WMOR%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCiji%2BR1Spmj7jil7dab%2B1lruTuSoojvaf3yNEKG80CVQIgIZgLZnxwifEBfMbc3WZ3o95xx9IDLxJMcJaSTX00yBkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPP8ng2H2UU5jt98iyrcAxXLDZFMuWPWmZvng5F4cFkQh3YpLaZg6Yao6WmZtgHtUzDkjT8wI%2B25wHdcJK%2FLOR1NSvqddWIX1frNMEK8o0Waw9D8QVpeMcaLc%2FcW0agvR%2FwiKn4scHF5oXmedwDKjhIG8yG4GYIRcfHbsSXPOWMVuEeJn6K5EQ6aN9TkdJd0YIxI55TOwPitffSFMsH3CqlfWj2MqMgenM29aDqzIqHmPF6uRdCe1u4rsE3jN8cURqUdCJts7xhdn%2F3u3JYrpFiO61Nkti%2BQ2Q0VgRIzTtfrQmfkH3olU4vi%2FZvY3XhWEqdtTV82C47xrs9Hz9pAyvYt85DnW1tLM9QqdOR9pndpy36KAIaz77MpJ%2BNJ1K4Y19CnE8FdxTxIoCmVOwwKAc%2FEB%2FujkDIlkZZ21Zo2nVCJYQKKuluTlkBp4VWPoieiV9CMXk4KvpmpYCUy9PP8nCBWD7ImsQYTJ0%2FUjrV8I9fACEG1t3MWA2nWcmc42gVJNS7eMPR2Nzm%2F7%2Fer4%2FmzGP16MeedVKiqhnz%2FxtV6zxu6bUcEsfRN3fUtQ3seBT6%2FjLSJ1dvUPAm7XqH%2FI0%2F8RaSRX28GOT3tnxeaa8lj6zw89xZ%2BaiKm2UyVyuKWmtWp3WAIU35zfcffB7W5MJSxickGOqUBzxb9IrjZEGMUTgUI74OHjIQpwPsAoJ2k4GRTFsV59aF1LRQNVrjvCobvrbF5QRzbbrOwKM%2BRopceaVRRdZJBP9x8MrJf9AByDqVi3waqU9S%2FHndPGplNHezk%2Bp1X4sQwoi8K1s0wOqfK1XJ23bjgFvBjw%2BRT%2BgFw7P9YMDDfBek5hwaGzFXKBGab9vh71EBLwI93I1ahhHHygHuXxlzDg%2BVKev5c&X-Amz-Signature=871309b819a3a30da9a04c546a422fd99920fbcc58b599737db56c3f37dae8f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWKVNKI%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDmTM5Zx47zsKocN7GBDpsEdO4LAjTT9nkeqWHq7WKiAwIhALfhvuKlcPlMUc2jQEK9L9%2B0Jn%2F0dQpEJ5STx7ng%2FZGYKv8DCDIQABoMNjM3NDIzMTgzODA1Igz5RZ2K2Y3NGvPlwe0q3AOKD%2FZA0y8T6Lt0ZWCoMWZ0iyY9aWc7MHgcyYWgS4U3l9ntbLoF1%2FI%2BDRNnMNSypDjJDq9JVYgiYVLMFGS5h93IxyasDO3yEdFWHU519XLUZo3Mb64UOu%2F54tfTfDEb%2BUdUxy3BOlfaEvwyNWLJ5%2FFa6wbLd1VhnqCc419NUNL4VT3GHiVzHGa4sMyORiANM8NzdHG2tpECSD4Am41%2BV8UQhLCFlxFxpxoJbri44CYtfMZfs1Kf33h8P9cssf%2BVzkBH%2FhGiia3iBht%2Fyci1yX33Pa7bgE3HG6oR5xIZyeKKgWMlB1fEkCM0R8RN%2FzBoaRLapOCvuuZZN5CZhxOjXD3foG5FFMBeN%2BLVCIM9solKwmTex%2B1tSyLL77E3AFAr2pH4XFCCKHGSrrHSb14NfGczk0B2Rq4DPJyygDIgFXGNsDuGvZUCFGiG2moDm3URykTBa3EZaUa%2BV8ZpVHm0X80T6Sllsk69SNVSna3wLJ8d7i6chXhz87It64ecYLSUsRX2fbcuKBmA%2B2omQj%2FxebbHtyrX6AC05JNWoYn15tCmezOW7IM1iBl9y%2BQxanNWzH%2BHJhPfE7kTPHXSdjkDdaP21rOZuNxLESZN2AczccV6prNa5eVBtPCGjuRifzDrsInJBjqkAfJDwYLwzs%2BG40ayVY0wlvVsMTu8kYevzVjg%2Bc1mQW3iOXilQS8hVU73SeYtz73ncEHsYR2JyXRkGvzZdkq7bAt5sXcsNcgRyzNwcn10fdyt%2B8MH1jqPU1PsLUJJx5paA%2BQfzON1CKUbKJQDfQkUIppQeXfghxkYC9OkJsq4H2bwJlEmpfld7x1T2nm3OGk7UwyeMur%2FGyHNkWDcVc%2B5dt8jBXKc&X-Amz-Signature=1aa0ada4f1ac4a6d250a135d84f825b13fb2b3e67f5880d79865be1893c03a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZR7YP4%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF46ce5%2FzEFuQ1P9uKRzYYrxVJgzxdrpM5kCvVjt4pw4AiAMgjwHNapt01ahHFsGDs4mfCQoaOWP4nDCAOGmwvp%2Fwir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAJqfpjbfYY7jcISHKtwD7mIl%2F5MRzToMQezVsWegMEQFrvkvPbcOXf5aAOSchslKmBRA7c4DBpMbEJQ%2B0ZGAHDoL9EA321S%2BJZ09Qqezupb70ZWAll4tkLHZFcROcvTkBB32YIVdMx%2BNEcqwALzEe6u3uCYYUTuEo4Jx2i4aAy3UQRyrbvic1GfumOsusq%2BzrmOgZ2Q%2FDmUpu7VLaP%2F0%2B34u2NA7PXcM1D55VQ1XyvxFoHPFn4hsDBMp8XijYHgpvaan6bC3EUpYTznKPqLhQ9fbeNCboCWUP4yPW7HLpq0sRIjJcA6eoKYYvqe6iu%2BEzGWALKicM9vBqzMVgDVRZuY9NOBkKEfgDXtODC3xUv51kkg7WkrB%2FR%2Bi4JVkWCVnzTZ7Oe60BXH9IDPw7RipJbFaDzvkS%2BB%2BO%2FR9QvGTv5WvDv18URe8tINlay%2Fk9lC4N%2FJ9UxcrM03mYNn4nkXX70Rj6bdz2PCAoHDwUiB5v9pOX1s%2FBkUSd0%2F%2BDJdHgYhvQGzs5Bc2dh5ICfGiUO6lrIx2LgZDKPoiZYyCdcvvlN%2FAZGMZjMmzYE%2FHXHWlrB22Jg4Uo8%2FrvJTKUOQOSSYrth5q0BFOg%2Bws%2FKLksCifqBB5%2BYJiZhhMx04IAtaGDCokNM8VaM%2FZf0duhxkworCJyQY6pgGLiTD1ruso24zzUUxcamccQjIpwxpaY828aVkyOhf6KNdDdax3lxEWF6VhA1qjqBB3fGWa%2F0iRe3pAQJX1LN05rLMNC%2BO6BB3%2FvSuPxLIrmdQ%2FjmmSz1jKcyG9W8hws25HSfvDp5IMqIphUiOGIc6kDdGOJueGU23lo4Wm%2BGuYmRJkDoRkw6ybnnPFY3Wvjt7N7j0BrzwNI7yGad%2FlZxC1F3iqIZfg&X-Amz-Signature=900128d207d698ea304145812459d2d26fe560693bff6cca9d0263f590a075c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU5AHOWX%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAwVlCDeQ7T1WaTOIGiKVaCIXn6Bmjo6RY0ByU0pNaFqAiEAzmJBt44Bn23S1%2By0ZMwOl9%2ByjF683tAiVcW59jX2EEgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDI7RDhc8L%2FAFgrjYjCrcA4yU2KLG3V3px%2FmMMLfGEKBFzFcTNJoCy1wdFAS2Kwk56fZs3UnvSpk%2B7oFKT3x0whEClHzckAh%2BTUI7AoFvus%2BwxW4Bd4npoNAIj2vtNkVxkhqVVV%2Bj9Frf0BTpTvaYIW%2BbyelwEGnKdBa6lQ2YKm3GeqI0mQHjYVIwhwH0a83y7vzGV7FLPQ%2BumInSXjAdagAdDNfNdBExM2v52aiIzDHteruq%2F7vYpxjGliY%2BWPY76UTBFoe5IJFw995zuS%2FTGRKbXFx08R1f%2B2pboyYxRKE19E8kEd1XooSYE2oWQnCXQ5QBthXZRaPU1p358S7u2Jky0e4A6BVLFdERg2v0J8%2BKLsJ%2BWJokWaEa7bXV3VwN4WZIBlQSa6rEHBEEpgLuWj5UVlaGZ3iOpNosXaZmbK4q5A2XlKQruS286hHhV71zL6AcUBKrTILXmroCC3TELq%2BkldU182yIr9U%2FLRMV98W%2FqSuFpa8EZJXbSd3IYHnlDeEucdbBUnk3Qz2S36MzVfrNy36r2p55EhGNizEs6w%2F5SCd6SNSdudfH4LGVyKTjyKfP%2FefyociUT8cvsOJCuLPGIi2TjweEHsKkPMK7dB3Vg%2B4tIZ2R6ceKTrrfm54o63dswchJxWPqyrbGMIqxickGOqUBCQMuS7IBMtBqxh%2BxXmHfGn1LId1KMVZVqLb3WyqQye0zv1Q2R6rz61Wmh%2BY6rSWBbzPtbtftYQF4%2BremK7cmtnHO1MM6EKCWdEcirq%2FAxjVnnN4FiAg31C20b3CdIzIrOc1puf47VEq581cP8IEgjeHJsJUYQv2ZJrfAXK5CN48%2Bl5%2BkPKyWz5JEeetLk%2B3j59JfaIRRfME%2BPx205hiR7R3HVIgC&X-Amz-Signature=d62066664de66a02d5de3c2ae42871d9a38915994690a36a9496a98d79f3a9c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZR7YP4%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF46ce5%2FzEFuQ1P9uKRzYYrxVJgzxdrpM5kCvVjt4pw4AiAMgjwHNapt01ahHFsGDs4mfCQoaOWP4nDCAOGmwvp%2Fwir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAJqfpjbfYY7jcISHKtwD7mIl%2F5MRzToMQezVsWegMEQFrvkvPbcOXf5aAOSchslKmBRA7c4DBpMbEJQ%2B0ZGAHDoL9EA321S%2BJZ09Qqezupb70ZWAll4tkLHZFcROcvTkBB32YIVdMx%2BNEcqwALzEe6u3uCYYUTuEo4Jx2i4aAy3UQRyrbvic1GfumOsusq%2BzrmOgZ2Q%2FDmUpu7VLaP%2F0%2B34u2NA7PXcM1D55VQ1XyvxFoHPFn4hsDBMp8XijYHgpvaan6bC3EUpYTznKPqLhQ9fbeNCboCWUP4yPW7HLpq0sRIjJcA6eoKYYvqe6iu%2BEzGWALKicM9vBqzMVgDVRZuY9NOBkKEfgDXtODC3xUv51kkg7WkrB%2FR%2Bi4JVkWCVnzTZ7Oe60BXH9IDPw7RipJbFaDzvkS%2BB%2BO%2FR9QvGTv5WvDv18URe8tINlay%2Fk9lC4N%2FJ9UxcrM03mYNn4nkXX70Rj6bdz2PCAoHDwUiB5v9pOX1s%2FBkUSd0%2F%2BDJdHgYhvQGzs5Bc2dh5ICfGiUO6lrIx2LgZDKPoiZYyCdcvvlN%2FAZGMZjMmzYE%2FHXHWlrB22Jg4Uo8%2FrvJTKUOQOSSYrth5q0BFOg%2Bws%2FKLksCifqBB5%2BYJiZhhMx04IAtaGDCokNM8VaM%2FZf0duhxkworCJyQY6pgGLiTD1ruso24zzUUxcamccQjIpwxpaY828aVkyOhf6KNdDdax3lxEWF6VhA1qjqBB3fGWa%2F0iRe3pAQJX1LN05rLMNC%2BO6BB3%2FvSuPxLIrmdQ%2FjmmSz1jKcyG9W8hws25HSfvDp5IMqIphUiOGIc6kDdGOJueGU23lo4Wm%2BGuYmRJkDoRkw6ybnnPFY3Wvjt7N7j0BrzwNI7yGad%2FlZxC1F3iqIZfg&X-Amz-Signature=0b1eddc84462672fa9fbae00132c5e305cb5a2acb54062ae0d47ce65f85940d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QLPHF52%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDT1UtMUPUE%2BkRNqlc07aPb3aBrksFmJnlERtQnMaxrnAiEAtm6rY7Wq5fkPwzDlcxA3%2B1GQXHO8ze35jt7tB3CNvL8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFk8wL18pTBqB5PL1ircA%2BzNyGTZUDShkdXOC9Fxapw8mVZDQ7p7Uj3WUyR1oFXGxuCF0Ht71aRF73%2B47ckvMCKwx40VgaXYAIt40L4UjHLbKgOBgqCFSj9OfRTGM9rhRr2Q4ViiNouHXxQLPVjOoF51xJKcaFIMi3nVDcRHPr0HN1yO2agh89p2ROlhvDuJUWQtB%2FLNBAsxzGibLUu71WZJIXndGbYSkOeX6l%2BAKd8Vy38yuSOjBkdXjbH7GP%2FcbDczo5U0kVBx4d%2BSdquO%2BIgQ56%2FWee3tk9J6xhvowWt3aieDAoeM7oXu1dyZEnIdAyIYWK9EwhZXGoGiSo%2BV509U9eWSRRX0068nvJQybdeocpsVblOxinNMzZfG1kwiB%2BzJ7vl%2Bn5ZTIDyRrIxFMkbygyKQjrL5lqEfCTb5mkaLcb%2FLRHXE05%2Bp7KjW%2FERNvBKvgSjJjzFWoH4wIWc%2BRXqgLOad11EjNml8ZaQqwwcVjErqw7aEirvrC2mcRfgpgBiGq1pXQHsfa901l3b2XuRvSEKpBFaHuZZZ8VvSHX5zmVviBdKmMvnLs8jqXK%2FVREoc%2BrSIzZ73RML%2FjdfUsDKGAfu0oshVoVfXidRYbWFd6IjuVF%2BjIgA1fjzNwTN8BNUlC0QkbnyPQLuaMJKxickGOqUBED9si6WEYY9RNqniY%2BhvWg5oiIvOqEYgd%2FgMMhKSujJcG9YF7AsNg%2BjIt9HEY2Ntug3l5YrZNS%2FpzNZfIjamYOa%2Bipg%2BRg%2BqXEsEVKvqEMC7GaLDhLp54jx8iDqZCfirma4uEkaG9U0jpn9GrSWVWnTzY8yMBzos0fnJh9CVtF3EpnKtHKO3tFdRH1ktlx187X7yZYet0uo49Jhn%2BUSb27USTzkb&X-Amz-Signature=43c52bd81c664e3fb890a6cf8a3afa1031ea7f655b66b3420be6d4143b5a43dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZR7YP4%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF46ce5%2FzEFuQ1P9uKRzYYrxVJgzxdrpM5kCvVjt4pw4AiAMgjwHNapt01ahHFsGDs4mfCQoaOWP4nDCAOGmwvp%2Fwir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAJqfpjbfYY7jcISHKtwD7mIl%2F5MRzToMQezVsWegMEQFrvkvPbcOXf5aAOSchslKmBRA7c4DBpMbEJQ%2B0ZGAHDoL9EA321S%2BJZ09Qqezupb70ZWAll4tkLHZFcROcvTkBB32YIVdMx%2BNEcqwALzEe6u3uCYYUTuEo4Jx2i4aAy3UQRyrbvic1GfumOsusq%2BzrmOgZ2Q%2FDmUpu7VLaP%2F0%2B34u2NA7PXcM1D55VQ1XyvxFoHPFn4hsDBMp8XijYHgpvaan6bC3EUpYTznKPqLhQ9fbeNCboCWUP4yPW7HLpq0sRIjJcA6eoKYYvqe6iu%2BEzGWALKicM9vBqzMVgDVRZuY9NOBkKEfgDXtODC3xUv51kkg7WkrB%2FR%2Bi4JVkWCVnzTZ7Oe60BXH9IDPw7RipJbFaDzvkS%2BB%2BO%2FR9QvGTv5WvDv18URe8tINlay%2Fk9lC4N%2FJ9UxcrM03mYNn4nkXX70Rj6bdz2PCAoHDwUiB5v9pOX1s%2FBkUSd0%2F%2BDJdHgYhvQGzs5Bc2dh5ICfGiUO6lrIx2LgZDKPoiZYyCdcvvlN%2FAZGMZjMmzYE%2FHXHWlrB22Jg4Uo8%2FrvJTKUOQOSSYrth5q0BFOg%2Bws%2FKLksCifqBB5%2BYJiZhhMx04IAtaGDCokNM8VaM%2FZf0duhxkworCJyQY6pgGLiTD1ruso24zzUUxcamccQjIpwxpaY828aVkyOhf6KNdDdax3lxEWF6VhA1qjqBB3fGWa%2F0iRe3pAQJX1LN05rLMNC%2BO6BB3%2FvSuPxLIrmdQ%2FjmmSz1jKcyG9W8hws25HSfvDp5IMqIphUiOGIc6kDdGOJueGU23lo4Wm%2BGuYmRJkDoRkw6ybnnPFY3Wvjt7N7j0BrzwNI7yGad%2FlZxC1F3iqIZfg&X-Amz-Signature=176bb66963a558cf71c7c38fb11befc058e00c76bf397371607f659a49368d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644HKMDVO%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIBUtJZwO4abda%2FxTYbyRZNLtCdRRvK8t1Ln3WQaZU0FJAiAk2tQaBr4HEq0CzLNeS9yjww96R1rWQOa6xqGjSpx%2BVyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMsfld%2F%2BRJTpm%2BLPP7KtwDIcXBSeJPw2MoauhkDyVORlFKougAy4sFoBMrV9yB0xvAoTglmJnvHol%2BlnhQOxlhDFoQRpCPz7sSm8jHzeS7dfonaQM2w2%2FeSmKQeR6GyhMfzbqewBuVcx8SXSwsOzqoeZ4jqYlghoa4G4TunaySGFkKuGlB3HTRy3%2FMsJVIaNoZF8RYD7toXy6r6Cjl%2FFQpyngTapRP43iMWoJukdoYX8S%2F5lyB%2BRnWJUN4vUQD5EN%2F3bML%2BC0QNmnXqPMsOnhWOfkGa4fYCzw1z0fTYH9UENMI5MDTCQsL13CaYYT7sgzT8imgkFVl9lycd1D3Aprlr%2FkofZ2puAkBW8F%2FJ45NLfB5874PFPrfUhhz7L2ZWqH06ohIBK%2BAir5PAZdr8PLjQcXhaW6qkwmdRO5yO%2FNxoj%2FaLkc0rN%2Fr3HqBGZJO5NMZC%2BN86CwTfvUlJ7%2B5NYw4VnV1pDkoT3rvAWO1S1RM9aKfDxRjCpSo0kVw48NKye%2Fb%2FX9HTK%2BtIsR2U5L0H0sVfQRWnSh2ogf8Gob69nxKoUpXNhs7zg23mU7DklmKBFpozBMMJIzDvFaHP6FbjAkCgK34C9k%2BCgnbe5bBPcsI0CGscBkrRhaH5o8hNbZPqlBpYvTzPyjWifHsiP4w3rCJyQY6pgHKWQIF8LOx4Jy0hbeJtsqOOOhh8m3i13CuOPEYefVyvAKfG%2BW%2F%2B8WGlzpObtJ3cyU1Dh0OwzNMmG8sd7RGwnz37sSvxf%2Fk0I7hym7mwcCeq6OkPuTegdm8cAaBQbMxOq95deK%2FpiktmEyqbM3u3CNHlEGsrkDSfK0Xaz9mTsLDq6azUm2YxrRxD7vyNP7k18NnnAq14BnU59Zixl7cmEkdN5pD6ULA&X-Amz-Signature=f98532b6c8b7d63f635afe451991ff9460327f4e25faaa00458c80af6586fe10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZR7YP4%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF46ce5%2FzEFuQ1P9uKRzYYrxVJgzxdrpM5kCvVjt4pw4AiAMgjwHNapt01ahHFsGDs4mfCQoaOWP4nDCAOGmwvp%2Fwir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAJqfpjbfYY7jcISHKtwD7mIl%2F5MRzToMQezVsWegMEQFrvkvPbcOXf5aAOSchslKmBRA7c4DBpMbEJQ%2B0ZGAHDoL9EA321S%2BJZ09Qqezupb70ZWAll4tkLHZFcROcvTkBB32YIVdMx%2BNEcqwALzEe6u3uCYYUTuEo4Jx2i4aAy3UQRyrbvic1GfumOsusq%2BzrmOgZ2Q%2FDmUpu7VLaP%2F0%2B34u2NA7PXcM1D55VQ1XyvxFoHPFn4hsDBMp8XijYHgpvaan6bC3EUpYTznKPqLhQ9fbeNCboCWUP4yPW7HLpq0sRIjJcA6eoKYYvqe6iu%2BEzGWALKicM9vBqzMVgDVRZuY9NOBkKEfgDXtODC3xUv51kkg7WkrB%2FR%2Bi4JVkWCVnzTZ7Oe60BXH9IDPw7RipJbFaDzvkS%2BB%2BO%2FR9QvGTv5WvDv18URe8tINlay%2Fk9lC4N%2FJ9UxcrM03mYNn4nkXX70Rj6bdz2PCAoHDwUiB5v9pOX1s%2FBkUSd0%2F%2BDJdHgYhvQGzs5Bc2dh5ICfGiUO6lrIx2LgZDKPoiZYyCdcvvlN%2FAZGMZjMmzYE%2FHXHWlrB22Jg4Uo8%2FrvJTKUOQOSSYrth5q0BFOg%2Bws%2FKLksCifqBB5%2BYJiZhhMx04IAtaGDCokNM8VaM%2FZf0duhxkworCJyQY6pgGLiTD1ruso24zzUUxcamccQjIpwxpaY828aVkyOhf6KNdDdax3lxEWF6VhA1qjqBB3fGWa%2F0iRe3pAQJX1LN05rLMNC%2BO6BB3%2FvSuPxLIrmdQ%2FjmmSz1jKcyG9W8hws25HSfvDp5IMqIphUiOGIc6kDdGOJueGU23lo4Wm%2BGuYmRJkDoRkw6ybnnPFY3Wvjt7N7j0BrzwNI7yGad%2FlZxC1F3iqIZfg&X-Amz-Signature=c581a6c41d907be15acc11e3bae00d2d1358cf5116696ef74a6b0581e055143c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWJGZU5%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFwjylXGQQLbytKoG0iULI0NxlzCjyEJd44QxdJoMw7aAiEA1KHjuWpruat2FfgXKNijkcyBjfymx3tfst0Z%2F%2BDbnQcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDD5%2FUOIbZJgI2gI8WCrcA9%2F4m%2BiLFlFXk2ohV7Qcjl3LnWmdu71ILPXiLfKvCVp%2FdJNXIBkqrizASUIGoK7WAtCkWUjg%2Bgd5Qp%2BXvGspjWR2yoxLoaLbxIo3syt8ahOdLbIdvxVP61AvsA2AlihRTcVVHvuGmfYJn70BbWtn7TAXgvNJJ%2BiHG0ue%2B2tKUUwipsubodulX11V%2Flu5FA0ARxegmQKf6NVXcVoxa9mzXOwSQ4sEjv4Zvf9GWFFmfSRd0EIZ%2FVQRX8m8YOjclHu3SWHJgpR5aROAAVUbccQ6XK9VIRZXDkn2uhF%2F3%2BvIvuWkekfOOKme%2BuO2KtMvEYu8zdxV22cYTt7ruIfDo0T8PsgKem21v14OA%2BaZd6WuPcThLrLf6QEVLDjAshbDp%2B7oQGnNaNHln6ritEaFtqTksdTjj8%2FdnTEdRkRowr3sOotXYRmj0JlThOsTI8Q9HuLzQHChqHOg%2F3DbH%2Fu9xIfUCWyN%2B2pZLGpFssIMel0UC2CjyLkPxJoYstKtdrzycUuBv6H5u7xx1GCU%2FgU0aHOSP%2FehrfcSbfQ9A1ABysuEpfnvNG9cjfr7ukxTKxR0vPee41oEqSb31P2pOnyMyHOXq14OIEdnwpjqMHVyYy0PybrikM3flQ%2FFFuekpO6CMOCwickGOqUBSst0rygYMB4A5ghPoyIHFReKtezsgoLzVvglOIPs%2FnNHAVAc3ZSq55ouwqXeEPn0EVXuBcC7SoXAal%2BcVdVcsgDf7FW1OuvOdBshpU9HVbEHRlBSb0ohJFXb1h6U72t7zUTt6GNiQSqZzyOEO%2FSrE6KFf7htMtHahP2huwVvgdoq2yX9wOCcK9f20b7aqBxVbSCulimP%2B9kV0nTbv1FjctBvbM9a&X-Amz-Signature=d5442e13280b2ff8532aebb88e3c8e0b435b258bf70533c4621145f565f91286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZR7YP4%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF46ce5%2FzEFuQ1P9uKRzYYrxVJgzxdrpM5kCvVjt4pw4AiAMgjwHNapt01ahHFsGDs4mfCQoaOWP4nDCAOGmwvp%2Fwir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAJqfpjbfYY7jcISHKtwD7mIl%2F5MRzToMQezVsWegMEQFrvkvPbcOXf5aAOSchslKmBRA7c4DBpMbEJQ%2B0ZGAHDoL9EA321S%2BJZ09Qqezupb70ZWAll4tkLHZFcROcvTkBB32YIVdMx%2BNEcqwALzEe6u3uCYYUTuEo4Jx2i4aAy3UQRyrbvic1GfumOsusq%2BzrmOgZ2Q%2FDmUpu7VLaP%2F0%2B34u2NA7PXcM1D55VQ1XyvxFoHPFn4hsDBMp8XijYHgpvaan6bC3EUpYTznKPqLhQ9fbeNCboCWUP4yPW7HLpq0sRIjJcA6eoKYYvqe6iu%2BEzGWALKicM9vBqzMVgDVRZuY9NOBkKEfgDXtODC3xUv51kkg7WkrB%2FR%2Bi4JVkWCVnzTZ7Oe60BXH9IDPw7RipJbFaDzvkS%2BB%2BO%2FR9QvGTv5WvDv18URe8tINlay%2Fk9lC4N%2FJ9UxcrM03mYNn4nkXX70Rj6bdz2PCAoHDwUiB5v9pOX1s%2FBkUSd0%2F%2BDJdHgYhvQGzs5Bc2dh5ICfGiUO6lrIx2LgZDKPoiZYyCdcvvlN%2FAZGMZjMmzYE%2FHXHWlrB22Jg4Uo8%2FrvJTKUOQOSSYrth5q0BFOg%2Bws%2FKLksCifqBB5%2BYJiZhhMx04IAtaGDCokNM8VaM%2FZf0duhxkworCJyQY6pgGLiTD1ruso24zzUUxcamccQjIpwxpaY828aVkyOhf6KNdDdax3lxEWF6VhA1qjqBB3fGWa%2F0iRe3pAQJX1LN05rLMNC%2BO6BB3%2FvSuPxLIrmdQ%2FjmmSz1jKcyG9W8hws25HSfvDp5IMqIphUiOGIc6kDdGOJueGU23lo4Wm%2BGuYmRJkDoRkw6ybnnPFY3Wvjt7N7j0BrzwNI7yGad%2FlZxC1F3iqIZfg&X-Amz-Signature=f9664d3f73e6a3aa904f59084fb2ebc943cd11e5da90fe1a143a38df17b3dc0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTAF4SSF%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCID%2Bfd2NknWxas8Uz9rFfGQYZjPjUOE2JIOl00QD7RTb0AiEA%2Be9VFqWABR4vhHZsEm2UWXNg4J9n4GqG3ujhgUqUHEsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKvRDLzZ3vT5mBzBjSrcA8Y3dYSU5AOAvTQ4zkhqH61ABx58Igjy5RClw4JrcDyJQJU%2B1lQo3p3vuz10qsq9t3ZGZKfd4LhMRuOHF2ALtQuUEEWzcjRDLG404EVpnYqu6HxyHwDuK9P6c2xZ4JXAkWa6jnAJ4KepNK%2Bf1XzrX%2FnhtmTojzdxCHF%2BbxcwUUJnPnFniKqNvlYA1x3OROPxGU0o6uqia1%2BnIEB0%2F6e5NKpF0f2fE98A9TaWG7BntcMirodXtuQCC68idjlmtGdrOVp4Mv20ktoPVf9HsvMDBeZnpUIzMC01L86mRRw%2Bq%2FHvZqP2Oq0EOabNyUTetRInEHQwYMCLviBOnNkA2T8mq62NzIAyJ6H74vmrfNHjTazBnQXeo4YnSRExz5yRuN2PpE1F1iviuYeygpQbgbZbqRHoDubredbBI%2F8eDgv3mTeiU1WJKt6%2FamfeqYhA%2FSDKkg%2FPwA7307xp%2BUSu2ejj%2BgqCLr%2FM%2BH%2BheWVKmYPeOa%2BrQTvv5F4OAIXPQweFVRMPYNnD6wynYM3oLMNUyNoLoxTJSiA86DYsNRSEL7%2B5B%2BO%2F%2FKFw%2BRi6coyGQ%2B4vWGdQYq0%2F9wuKT%2BYw9Man2S1H%2FZl0Pj5r0mvfmS5Yns0q%2BaG5oOFyp6FaU1OryqlVMO2wickGOqUBY0%2F%2BYsfb%2FKPYIkW2lqkrnNWwg4wKhD0eB5LK6wHzlYdC5nOJT1W0eJZzPwsc5dl%2BDZgVkGX6cI8bqtaZ82w56LJFOvwW%2Fzdt0RXErz3LGXg14f5ROaSIAokIOzRGAn0iUt9Ss%2BygsEBgpy1DzdW5tnA0Ls0Q5LUA%2FBoEgH%2BtLmdpZ6QVY3HoQj8gyoCpT4gQM9rCERui72ADpTE%2FmeIO1A9ASfF%2F&X-Amz-Signature=acd4504ba5de2623d9a04926cf2a33ba5e3510679bff605f22fee02e8557338b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F57HHOG%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDiBAygYCzH0FjDf9YEqaCnvbP0G1vaUw2p4LFMBI9TrwIgVEpfNZGqfitpaRx5NkcLZlCi3X%2Fw4rX941P7UwAOivwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDD9zGEltPgDbcC36%2BCrcA32N4UQ0g7gTNBQl3SO6lLGsJN%2Fum5nQDWSkaroJjiwU4rNUjOwJtmwuyk48r6o3Xw2e4nHPpV1dz8IuvKCr62bf9GpB8u4per9g3sYe1Mq7dPThGkhzSFgIWPqPjW75Bnu1R6%2Foz%2BTPltyXh3vyeuGQapKqnex2oaUVbsxGReStSNbh6O0Ri3v5GR%2BdgHqEoUPBfw9M87ikr4rcw40uEjrmryfQUIUQx7mzZvmc5ezUY1PrOprITXcES7i6NbiXZLAZ1OcLR5v8k1xyjl4Esz5davK5KqVS0tATzN%2BiGRR0G0LgGbSZiTNdtc6G0WPNCN4GD%2FVJIDK%2BZcX5uoyXTv4NLhhn1NFQN47f0%2FyiXTSFcnzKeq2qoKwmK9CmfCrWY%2Fx5hS7VXGdN9ZVzlWTN4c1IuM7cU%2FK6%2Bdug5qYBNvKeHrq%2FpD4wNoVwi1fjGX60yGQozOwM0X2Dub6GZa6rbCp2KG%2B%2Fn0J86ZsRQks3t66vF27OapVBTwZ6BH7Nw7V%2BuOn4qczvoCzh%2B0SqhqqDZlYLwsnpP0oaxnspwMGN%2BY7xO9IoCY5PZ0BBPxJ9ao%2FKjpl%2BtutyzlkeycCv4oYKPHyNTgf2%2FT5ejWT4%2BBs1tvvIXe8amHQsfKMWB4%2BPMMiwickGOqUBc1RCkC454%2BAnQYCRE7RFgX%2BHg8aHEGfJiSZnwCWNsG7RwpRR37sfuF7ZxkWNX0d1McC%2BKvaoqqEni5HThDeh0wPjuBbwd7Y6YAI8DhRdcEMgiLoicFAjswTfQUHgrZknkCz%2BHNh4Oz%2FoUK1Mp5MqOCIuLTt3wPi78h%2FYHi4XgIMQGaSgNmEK%2Bmujdzx6SL%2FQxCCod8zkgbBv%2B4nXhZJJ8Ouus594&X-Amz-Signature=0fa7fa5f00150051ed3e5bef02039d51cd83e2fb71fd6b3f46e25a57c991062e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPEB5I2X%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAHwrVJjVhCsK5kwvDkAeqT%2FR5LVrS92cNMuAC9FLF92AiApEuqhQs5dZIvOqty1HrZ59xh5NNuoHiLQFD7aM2IlICr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMLDzLqlp9jSPpPRqLKtwDDjnzFzHF1wsPb3mywvZPFnW1dzkA3uGs4lqr1p%2BslguX4fGeC9DtlLVsSgGrNMxfgSCWyrLqekTaA6HjwjortgBTJOMIo7CReZfws9z8mvYCv59RoR24kGOF1uAdk21FglEppZZOQY3f9A6VN5iIrV8zrnzqPXuTVR51CbJs8wYiBMSdgm68EdXBRrzvRZeLU5p0rr%2B%2BS2cOL2J2%2B5Y9VuW6FUsJW4ThSaWNreTrqdbh6XUGugbfDB75r5pnIja5m0UCWumIPG1aLedrSQhonk9SY5y3yfD95NFRGL0vmJsSr4SlmgNdGMYOjEQxZgEP8brTcbor2DYTI0Ol6XLdHM2%2FKK%2FDVML%2F1CCgBxcTNpJkoBlTFJzUw883E2%2FBsno%2FJOxVkFNKFWneVHP5fD5cupLWicK5dWIxi%2Bk%2B0hCQa4KPPnmz37vHfpoEYcnp%2F2e4BM6iLmJIUYaOknrpZLbG6ySMyQnPLiA9jQOyZH%2BvbVM9xmu6xCAxooawIsEu1z6UmdHEZXSWt1j%2F7MuKNmxpOKoP8ryeG1eAyB8IZ8uW9x4%2BvR2hCFMeUYXn2KtlZt%2BPDspRaFpXI27mkjfYuPD%2BlGSzB6rJZsmtWY7y2juBTfBs%2BMDySEkmH82HHG8wwrCJyQY6pgEuRWfzLoWvtEPJMiqd3Yhg8VNOPxdLchisieyw%2FeZfAXUGSr7DDfTkT2IrlwwIIW30oLmesdhBs8Ztcb1XJVzLEu%2FXpkjIH%2BJVx3j%2BhyOkROzOyxQlDP%2BgvlCFY90r5KOp29DOE9x1%2BKFbicjBr2Vt1x9FX%2BXTDnjtZqHtVSwEOnr%2FEVPDC4BNl1YmCumuElc3cALn99%2Bk3MZVQDsOjLAzNjS84TZR&X-Amz-Signature=fb82a831528482ebc4a805fddb329782aa86e53d889113edabb5ba307a431261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZR7YP4%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF46ce5%2FzEFuQ1P9uKRzYYrxVJgzxdrpM5kCvVjt4pw4AiAMgjwHNapt01ahHFsGDs4mfCQoaOWP4nDCAOGmwvp%2Fwir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAJqfpjbfYY7jcISHKtwD7mIl%2F5MRzToMQezVsWegMEQFrvkvPbcOXf5aAOSchslKmBRA7c4DBpMbEJQ%2B0ZGAHDoL9EA321S%2BJZ09Qqezupb70ZWAll4tkLHZFcROcvTkBB32YIVdMx%2BNEcqwALzEe6u3uCYYUTuEo4Jx2i4aAy3UQRyrbvic1GfumOsusq%2BzrmOgZ2Q%2FDmUpu7VLaP%2F0%2B34u2NA7PXcM1D55VQ1XyvxFoHPFn4hsDBMp8XijYHgpvaan6bC3EUpYTznKPqLhQ9fbeNCboCWUP4yPW7HLpq0sRIjJcA6eoKYYvqe6iu%2BEzGWALKicM9vBqzMVgDVRZuY9NOBkKEfgDXtODC3xUv51kkg7WkrB%2FR%2Bi4JVkWCVnzTZ7Oe60BXH9IDPw7RipJbFaDzvkS%2BB%2BO%2FR9QvGTv5WvDv18URe8tINlay%2Fk9lC4N%2FJ9UxcrM03mYNn4nkXX70Rj6bdz2PCAoHDwUiB5v9pOX1s%2FBkUSd0%2F%2BDJdHgYhvQGzs5Bc2dh5ICfGiUO6lrIx2LgZDKPoiZYyCdcvvlN%2FAZGMZjMmzYE%2FHXHWlrB22Jg4Uo8%2FrvJTKUOQOSSYrth5q0BFOg%2Bws%2FKLksCifqBB5%2BYJiZhhMx04IAtaGDCokNM8VaM%2FZf0duhxkworCJyQY6pgGLiTD1ruso24zzUUxcamccQjIpwxpaY828aVkyOhf6KNdDdax3lxEWF6VhA1qjqBB3fGWa%2F0iRe3pAQJX1LN05rLMNC%2BO6BB3%2FvSuPxLIrmdQ%2FjmmSz1jKcyG9W8hws25HSfvDp5IMqIphUiOGIc6kDdGOJueGU23lo4Wm%2BGuYmRJkDoRkw6ybnnPFY3Wvjt7N7j0BrzwNI7yGad%2FlZxC1F3iqIZfg&X-Amz-Signature=357feb30eefb2c26564b31f7ae09e5220a214fe193882c20bc93f5fe22d71ff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZR7YP4%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF46ce5%2FzEFuQ1P9uKRzYYrxVJgzxdrpM5kCvVjt4pw4AiAMgjwHNapt01ahHFsGDs4mfCQoaOWP4nDCAOGmwvp%2Fwir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAJqfpjbfYY7jcISHKtwD7mIl%2F5MRzToMQezVsWegMEQFrvkvPbcOXf5aAOSchslKmBRA7c4DBpMbEJQ%2B0ZGAHDoL9EA321S%2BJZ09Qqezupb70ZWAll4tkLHZFcROcvTkBB32YIVdMx%2BNEcqwALzEe6u3uCYYUTuEo4Jx2i4aAy3UQRyrbvic1GfumOsusq%2BzrmOgZ2Q%2FDmUpu7VLaP%2F0%2B34u2NA7PXcM1D55VQ1XyvxFoHPFn4hsDBMp8XijYHgpvaan6bC3EUpYTznKPqLhQ9fbeNCboCWUP4yPW7HLpq0sRIjJcA6eoKYYvqe6iu%2BEzGWALKicM9vBqzMVgDVRZuY9NOBkKEfgDXtODC3xUv51kkg7WkrB%2FR%2Bi4JVkWCVnzTZ7Oe60BXH9IDPw7RipJbFaDzvkS%2BB%2BO%2FR9QvGTv5WvDv18URe8tINlay%2Fk9lC4N%2FJ9UxcrM03mYNn4nkXX70Rj6bdz2PCAoHDwUiB5v9pOX1s%2FBkUSd0%2F%2BDJdHgYhvQGzs5Bc2dh5ICfGiUO6lrIx2LgZDKPoiZYyCdcvvlN%2FAZGMZjMmzYE%2FHXHWlrB22Jg4Uo8%2FrvJTKUOQOSSYrth5q0BFOg%2Bws%2FKLksCifqBB5%2BYJiZhhMx04IAtaGDCokNM8VaM%2FZf0duhxkworCJyQY6pgGLiTD1ruso24zzUUxcamccQjIpwxpaY828aVkyOhf6KNdDdax3lxEWF6VhA1qjqBB3fGWa%2F0iRe3pAQJX1LN05rLMNC%2BO6BB3%2FvSuPxLIrmdQ%2FjmmSz1jKcyG9W8hws25HSfvDp5IMqIphUiOGIc6kDdGOJueGU23lo4Wm%2BGuYmRJkDoRkw6ybnnPFY3Wvjt7N7j0BrzwNI7yGad%2FlZxC1F3iqIZfg&X-Amz-Signature=a57e84ac96372329069207910ef6392dff626cb6ec422eec4add4845ce4e0407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ARSMOMD%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIFV1d%2BeDHHuhg6L1Gvoxz7qJT8tHyYwFjoi06V6q%2BnHXAiAJaUHinvB%2BYzPG0KbgiZQUwaKPNq6194XZmNQ0n6cd3ir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMEY%2BbnGz9jdtvRNyXKtwDTAZTgjTO6DLTAhukuqqhPj7q4deWqUiujimQI1meuVQLlv%2BUF5lKmlKCUwrOn4FKwXvK7HgFnNpAaKvcZKEIsQNSIoT5qgwYcmJ8%2FaDeivP7sX0ydih1eh7lBrDXdlwHr8MPbu3E7djWq5tXmIpSNjbqpJW8j8AW9p6QXF62Hmey9o%2FEQ4%2Fc8u0d5Iy3nFVLOQF2L7yYtGCurTvkzKh3u8V0nHDvlLtqeF3hgJcoHs4tpUrz9i3MyHtrrKjAw5xv9f3GUG7Fn2oFMf0KaTenFdUJi31ykRA5XPIehzZuLvICmT%2BP8lqRZndO1lIrio%2F6yQWinRjXStmLdCMWF553tAiwCvi9d32d0zIxMnMwj4CRniLp3Bv5TF6Ahc1PYeZpRi0dPu6DJoxNUMCvvBqcLQwfJqvHAkphkMsPICfViTi0dAqljQFvBb5I2q423C8QsVZS8qVXwP7LOrKsH%2BWbd07t3T0FrSRvGYcc%2BU%2FxeW4Tk0BwedAz2MEB9wK9l7Ik63bs7A4cEK8va%2FjLqRoa65xjBxRP7hgBsu%2F0C0TYAB8zWQVx2Ere434kRcbserjp1E%2F5Zj4JbwxK%2Faz9UXDyyBIJ8BWrhOvVQta%2BEujhw5NIA20Jww9y2qHJvDQwzbCJyQY6pgGjXXbRVPmJuSNvqRsdhlIapXQuYBWp%2FSqQ7VY6EH0R47uxv9wSjlB4DhIwrvomSaNeeZQ8BFpTevaD2bHsCsw7UMQAnt9LVvkQiA1PMucjPbQPCr4dJoHKY%2BSnNA9PulmJ96yzlOQWZPDTM8ZBTsmquozDW5nt8Xh7Js3M%2F1ifk5%2FBNXsFN5hsPwqH6x3EdAAZ4iB9XDJ6WCMAadXW7Fj5YeNvnLax&X-Amz-Signature=bf0d7512d7ec0841801f94331c289c17b0b15082309214b391d657db8d744cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ARSMOMD%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIFV1d%2BeDHHuhg6L1Gvoxz7qJT8tHyYwFjoi06V6q%2BnHXAiAJaUHinvB%2BYzPG0KbgiZQUwaKPNq6194XZmNQ0n6cd3ir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMEY%2BbnGz9jdtvRNyXKtwDTAZTgjTO6DLTAhukuqqhPj7q4deWqUiujimQI1meuVQLlv%2BUF5lKmlKCUwrOn4FKwXvK7HgFnNpAaKvcZKEIsQNSIoT5qgwYcmJ8%2FaDeivP7sX0ydih1eh7lBrDXdlwHr8MPbu3E7djWq5tXmIpSNjbqpJW8j8AW9p6QXF62Hmey9o%2FEQ4%2Fc8u0d5Iy3nFVLOQF2L7yYtGCurTvkzKh3u8V0nHDvlLtqeF3hgJcoHs4tpUrz9i3MyHtrrKjAw5xv9f3GUG7Fn2oFMf0KaTenFdUJi31ykRA5XPIehzZuLvICmT%2BP8lqRZndO1lIrio%2F6yQWinRjXStmLdCMWF553tAiwCvi9d32d0zIxMnMwj4CRniLp3Bv5TF6Ahc1PYeZpRi0dPu6DJoxNUMCvvBqcLQwfJqvHAkphkMsPICfViTi0dAqljQFvBb5I2q423C8QsVZS8qVXwP7LOrKsH%2BWbd07t3T0FrSRvGYcc%2BU%2FxeW4Tk0BwedAz2MEB9wK9l7Ik63bs7A4cEK8va%2FjLqRoa65xjBxRP7hgBsu%2F0C0TYAB8zWQVx2Ere434kRcbserjp1E%2F5Zj4JbwxK%2Faz9UXDyyBIJ8BWrhOvVQta%2BEujhw5NIA20Jww9y2qHJvDQwzbCJyQY6pgGjXXbRVPmJuSNvqRsdhlIapXQuYBWp%2FSqQ7VY6EH0R47uxv9wSjlB4DhIwrvomSaNeeZQ8BFpTevaD2bHsCsw7UMQAnt9LVvkQiA1PMucjPbQPCr4dJoHKY%2BSnNA9PulmJ96yzlOQWZPDTM8ZBTsmquozDW5nt8Xh7Js3M%2F1ifk5%2FBNXsFN5hsPwqH6x3EdAAZ4iB9XDJ6WCMAadXW7Fj5YeNvnLax&X-Amz-Signature=5cd07291b0cbe5535424ca9c3458bca3f11b37dfc361c3b510a6f11e3dced33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ARSMOMD%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIFV1d%2BeDHHuhg6L1Gvoxz7qJT8tHyYwFjoi06V6q%2BnHXAiAJaUHinvB%2BYzPG0KbgiZQUwaKPNq6194XZmNQ0n6cd3ir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMEY%2BbnGz9jdtvRNyXKtwDTAZTgjTO6DLTAhukuqqhPj7q4deWqUiujimQI1meuVQLlv%2BUF5lKmlKCUwrOn4FKwXvK7HgFnNpAaKvcZKEIsQNSIoT5qgwYcmJ8%2FaDeivP7sX0ydih1eh7lBrDXdlwHr8MPbu3E7djWq5tXmIpSNjbqpJW8j8AW9p6QXF62Hmey9o%2FEQ4%2Fc8u0d5Iy3nFVLOQF2L7yYtGCurTvkzKh3u8V0nHDvlLtqeF3hgJcoHs4tpUrz9i3MyHtrrKjAw5xv9f3GUG7Fn2oFMf0KaTenFdUJi31ykRA5XPIehzZuLvICmT%2BP8lqRZndO1lIrio%2F6yQWinRjXStmLdCMWF553tAiwCvi9d32d0zIxMnMwj4CRniLp3Bv5TF6Ahc1PYeZpRi0dPu6DJoxNUMCvvBqcLQwfJqvHAkphkMsPICfViTi0dAqljQFvBb5I2q423C8QsVZS8qVXwP7LOrKsH%2BWbd07t3T0FrSRvGYcc%2BU%2FxeW4Tk0BwedAz2MEB9wK9l7Ik63bs7A4cEK8va%2FjLqRoa65xjBxRP7hgBsu%2F0C0TYAB8zWQVx2Ere434kRcbserjp1E%2F5Zj4JbwxK%2Faz9UXDyyBIJ8BWrhOvVQta%2BEujhw5NIA20Jww9y2qHJvDQwzbCJyQY6pgGjXXbRVPmJuSNvqRsdhlIapXQuYBWp%2FSqQ7VY6EH0R47uxv9wSjlB4DhIwrvomSaNeeZQ8BFpTevaD2bHsCsw7UMQAnt9LVvkQiA1PMucjPbQPCr4dJoHKY%2BSnNA9PulmJ96yzlOQWZPDTM8ZBTsmquozDW5nt8Xh7Js3M%2F1ifk5%2FBNXsFN5hsPwqH6x3EdAAZ4iB9XDJ6WCMAadXW7Fj5YeNvnLax&X-Amz-Signature=f1b778d2e5e9990875e1894f51ce03536aa66cc6aa6a8eb8235861f3094dc574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ARSMOMD%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIFV1d%2BeDHHuhg6L1Gvoxz7qJT8tHyYwFjoi06V6q%2BnHXAiAJaUHinvB%2BYzPG0KbgiZQUwaKPNq6194XZmNQ0n6cd3ir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMEY%2BbnGz9jdtvRNyXKtwDTAZTgjTO6DLTAhukuqqhPj7q4deWqUiujimQI1meuVQLlv%2BUF5lKmlKCUwrOn4FKwXvK7HgFnNpAaKvcZKEIsQNSIoT5qgwYcmJ8%2FaDeivP7sX0ydih1eh7lBrDXdlwHr8MPbu3E7djWq5tXmIpSNjbqpJW8j8AW9p6QXF62Hmey9o%2FEQ4%2Fc8u0d5Iy3nFVLOQF2L7yYtGCurTvkzKh3u8V0nHDvlLtqeF3hgJcoHs4tpUrz9i3MyHtrrKjAw5xv9f3GUG7Fn2oFMf0KaTenFdUJi31ykRA5XPIehzZuLvICmT%2BP8lqRZndO1lIrio%2F6yQWinRjXStmLdCMWF553tAiwCvi9d32d0zIxMnMwj4CRniLp3Bv5TF6Ahc1PYeZpRi0dPu6DJoxNUMCvvBqcLQwfJqvHAkphkMsPICfViTi0dAqljQFvBb5I2q423C8QsVZS8qVXwP7LOrKsH%2BWbd07t3T0FrSRvGYcc%2BU%2FxeW4Tk0BwedAz2MEB9wK9l7Ik63bs7A4cEK8va%2FjLqRoa65xjBxRP7hgBsu%2F0C0TYAB8zWQVx2Ere434kRcbserjp1E%2F5Zj4JbwxK%2Faz9UXDyyBIJ8BWrhOvVQta%2BEujhw5NIA20Jww9y2qHJvDQwzbCJyQY6pgGjXXbRVPmJuSNvqRsdhlIapXQuYBWp%2FSqQ7VY6EH0R47uxv9wSjlB4DhIwrvomSaNeeZQ8BFpTevaD2bHsCsw7UMQAnt9LVvkQiA1PMucjPbQPCr4dJoHKY%2BSnNA9PulmJ96yzlOQWZPDTM8ZBTsmquozDW5nt8Xh7Js3M%2F1ifk5%2FBNXsFN5hsPwqH6x3EdAAZ4iB9XDJ6WCMAadXW7Fj5YeNvnLax&X-Amz-Signature=78587861a368661dd305238678c6dd37e428de46607f2d84d6f736e7e01e8961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNHLC77%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCjO1gZia1QxrxlyIIzBlpsiQKVvGalfIBbYFJkS4xQGAIgOqpbWENEMgfiueNphkfI%2Fvt%2BPoisrS%2FCFcRE%2FsNoVtoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEQPEHHnQxauADEYYyrcA5f4E7CxfVwLe0LO5rsx2Jytk%2BQHLoBa%2BLM%2FWUA8vxgbAGpMq2MJI%2BK2nqarTT3rEdUnLuSXW6gZg%2BwY7nPhwtjrGizRi3f5PhYEfaWx0uVpJyyS6x4aHYVpmCwXAx%2FlGooMwYAkLUkigSl1SvwSpkFYmkcGczCNbLDIWf%2FDXTzwMsh4lnhZchC2A8pJF3v8D%2FxIBPK2y5V1slKhIq%2FgdwWbirARVaw2tz3b4jLtdsliZzWMRkl3CPuY8nIIDxvtrh3n32ORwgI5DVms8h7pBcYoxpqw3Sjhxh7spcwGphwjVgvNen0iKnANaM7LVca7t%2B%2BlHGeHbQMAhplrqFbVTUPbG%2BQu3e9y99HWk%2BK6r06r890PmDirRJr8R5UWyLTQj2sgnF3kvJp3rKzY%2BuJmXHy6DoHLycov3egJ%2FZrghYn5JmGqRxaq0PhdIvIMmj%2BhFD75MhxaJA9IHZo%2FSs1ZWoAE2GU5CT8KRkd8m5bfDRYF%2B6kM40dUgfCk0UdSf%2BPhptkAK%2B4tDdYV4dgDw4OW82LyjrHv8cVq12BlzS9Wmi2OkGIof4l8P2VGNJtjd7wYSChr3Xw4oPpFZravG0s4XmCficvYGBH%2BEwvHCyQjNdVYYaXo6bO25SM6GZjaML6wickGOqUBc4eBOmlXDgUST8eHXCsFw6z59NgMQ8mAAiacOf0m%2FpLjNuKTALxof62yUWFhNMrAL6rMfmOH1vcjNTNRTZueDpdYVvxtcwsW3ICH8X8KubfxMTAdSD0ccLYNxNX6%2FA5TkX2Kn42eOuIyjGyIwk6KDDpO5pZ7i57dFFYLGkHhGXue9fRnA%2F1kdj41Zfm3QLs%2BoZvUxVLd6gruuiL6dlcOMPshVYuJ&X-Amz-Signature=2e44eb89f55c2b7c718ac1342223bd1262b63fa60fc3f12e2ba36a51cfc67b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ARSMOMD%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIFV1d%2BeDHHuhg6L1Gvoxz7qJT8tHyYwFjoi06V6q%2BnHXAiAJaUHinvB%2BYzPG0KbgiZQUwaKPNq6194XZmNQ0n6cd3ir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMEY%2BbnGz9jdtvRNyXKtwDTAZTgjTO6DLTAhukuqqhPj7q4deWqUiujimQI1meuVQLlv%2BUF5lKmlKCUwrOn4FKwXvK7HgFnNpAaKvcZKEIsQNSIoT5qgwYcmJ8%2FaDeivP7sX0ydih1eh7lBrDXdlwHr8MPbu3E7djWq5tXmIpSNjbqpJW8j8AW9p6QXF62Hmey9o%2FEQ4%2Fc8u0d5Iy3nFVLOQF2L7yYtGCurTvkzKh3u8V0nHDvlLtqeF3hgJcoHs4tpUrz9i3MyHtrrKjAw5xv9f3GUG7Fn2oFMf0KaTenFdUJi31ykRA5XPIehzZuLvICmT%2BP8lqRZndO1lIrio%2F6yQWinRjXStmLdCMWF553tAiwCvi9d32d0zIxMnMwj4CRniLp3Bv5TF6Ahc1PYeZpRi0dPu6DJoxNUMCvvBqcLQwfJqvHAkphkMsPICfViTi0dAqljQFvBb5I2q423C8QsVZS8qVXwP7LOrKsH%2BWbd07t3T0FrSRvGYcc%2BU%2FxeW4Tk0BwedAz2MEB9wK9l7Ik63bs7A4cEK8va%2FjLqRoa65xjBxRP7hgBsu%2F0C0TYAB8zWQVx2Ere434kRcbserjp1E%2F5Zj4JbwxK%2Faz9UXDyyBIJ8BWrhOvVQta%2BEujhw5NIA20Jww9y2qHJvDQwzbCJyQY6pgGjXXbRVPmJuSNvqRsdhlIapXQuYBWp%2FSqQ7VY6EH0R47uxv9wSjlB4DhIwrvomSaNeeZQ8BFpTevaD2bHsCsw7UMQAnt9LVvkQiA1PMucjPbQPCr4dJoHKY%2BSnNA9PulmJ96yzlOQWZPDTM8ZBTsmquozDW5nt8Xh7Js3M%2F1ifk5%2FBNXsFN5hsPwqH6x3EdAAZ4iB9XDJ6WCMAadXW7Fj5YeNvnLax&X-Amz-Signature=b5f5a55a58227f0a0514ac2257cc4ee04379ebb3f50e3bb917d1b5606515f666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ARSMOMD%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIFV1d%2BeDHHuhg6L1Gvoxz7qJT8tHyYwFjoi06V6q%2BnHXAiAJaUHinvB%2BYzPG0KbgiZQUwaKPNq6194XZmNQ0n6cd3ir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMEY%2BbnGz9jdtvRNyXKtwDTAZTgjTO6DLTAhukuqqhPj7q4deWqUiujimQI1meuVQLlv%2BUF5lKmlKCUwrOn4FKwXvK7HgFnNpAaKvcZKEIsQNSIoT5qgwYcmJ8%2FaDeivP7sX0ydih1eh7lBrDXdlwHr8MPbu3E7djWq5tXmIpSNjbqpJW8j8AW9p6QXF62Hmey9o%2FEQ4%2Fc8u0d5Iy3nFVLOQF2L7yYtGCurTvkzKh3u8V0nHDvlLtqeF3hgJcoHs4tpUrz9i3MyHtrrKjAw5xv9f3GUG7Fn2oFMf0KaTenFdUJi31ykRA5XPIehzZuLvICmT%2BP8lqRZndO1lIrio%2F6yQWinRjXStmLdCMWF553tAiwCvi9d32d0zIxMnMwj4CRniLp3Bv5TF6Ahc1PYeZpRi0dPu6DJoxNUMCvvBqcLQwfJqvHAkphkMsPICfViTi0dAqljQFvBb5I2q423C8QsVZS8qVXwP7LOrKsH%2BWbd07t3T0FrSRvGYcc%2BU%2FxeW4Tk0BwedAz2MEB9wK9l7Ik63bs7A4cEK8va%2FjLqRoa65xjBxRP7hgBsu%2F0C0TYAB8zWQVx2Ere434kRcbserjp1E%2F5Zj4JbwxK%2Faz9UXDyyBIJ8BWrhOvVQta%2BEujhw5NIA20Jww9y2qHJvDQwzbCJyQY6pgGjXXbRVPmJuSNvqRsdhlIapXQuYBWp%2FSqQ7VY6EH0R47uxv9wSjlB4DhIwrvomSaNeeZQ8BFpTevaD2bHsCsw7UMQAnt9LVvkQiA1PMucjPbQPCr4dJoHKY%2BSnNA9PulmJ96yzlOQWZPDTM8ZBTsmquozDW5nt8Xh7Js3M%2F1ifk5%2FBNXsFN5hsPwqH6x3EdAAZ4iB9XDJ6WCMAadXW7Fj5YeNvnLax&X-Amz-Signature=4aeec6ad15566c0170c041a1fdc8cf7d46d18ef10ebf7e4f3993d993a510f490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ARSMOMD%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIFV1d%2BeDHHuhg6L1Gvoxz7qJT8tHyYwFjoi06V6q%2BnHXAiAJaUHinvB%2BYzPG0KbgiZQUwaKPNq6194XZmNQ0n6cd3ir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMEY%2BbnGz9jdtvRNyXKtwDTAZTgjTO6DLTAhukuqqhPj7q4deWqUiujimQI1meuVQLlv%2BUF5lKmlKCUwrOn4FKwXvK7HgFnNpAaKvcZKEIsQNSIoT5qgwYcmJ8%2FaDeivP7sX0ydih1eh7lBrDXdlwHr8MPbu3E7djWq5tXmIpSNjbqpJW8j8AW9p6QXF62Hmey9o%2FEQ4%2Fc8u0d5Iy3nFVLOQF2L7yYtGCurTvkzKh3u8V0nHDvlLtqeF3hgJcoHs4tpUrz9i3MyHtrrKjAw5xv9f3GUG7Fn2oFMf0KaTenFdUJi31ykRA5XPIehzZuLvICmT%2BP8lqRZndO1lIrio%2F6yQWinRjXStmLdCMWF553tAiwCvi9d32d0zIxMnMwj4CRniLp3Bv5TF6Ahc1PYeZpRi0dPu6DJoxNUMCvvBqcLQwfJqvHAkphkMsPICfViTi0dAqljQFvBb5I2q423C8QsVZS8qVXwP7LOrKsH%2BWbd07t3T0FrSRvGYcc%2BU%2FxeW4Tk0BwedAz2MEB9wK9l7Ik63bs7A4cEK8va%2FjLqRoa65xjBxRP7hgBsu%2F0C0TYAB8zWQVx2Ere434kRcbserjp1E%2F5Zj4JbwxK%2Faz9UXDyyBIJ8BWrhOvVQta%2BEujhw5NIA20Jww9y2qHJvDQwzbCJyQY6pgGjXXbRVPmJuSNvqRsdhlIapXQuYBWp%2FSqQ7VY6EH0R47uxv9wSjlB4DhIwrvomSaNeeZQ8BFpTevaD2bHsCsw7UMQAnt9LVvkQiA1PMucjPbQPCr4dJoHKY%2BSnNA9PulmJ96yzlOQWZPDTM8ZBTsmquozDW5nt8Xh7Js3M%2F1ifk5%2FBNXsFN5hsPwqH6x3EdAAZ4iB9XDJ6WCMAadXW7Fj5YeNvnLax&X-Amz-Signature=f1b778d2e5e9990875e1894f51ce03536aa66cc6aa6a8eb8235861f3094dc574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ARSMOMD%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIFV1d%2BeDHHuhg6L1Gvoxz7qJT8tHyYwFjoi06V6q%2BnHXAiAJaUHinvB%2BYzPG0KbgiZQUwaKPNq6194XZmNQ0n6cd3ir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMEY%2BbnGz9jdtvRNyXKtwDTAZTgjTO6DLTAhukuqqhPj7q4deWqUiujimQI1meuVQLlv%2BUF5lKmlKCUwrOn4FKwXvK7HgFnNpAaKvcZKEIsQNSIoT5qgwYcmJ8%2FaDeivP7sX0ydih1eh7lBrDXdlwHr8MPbu3E7djWq5tXmIpSNjbqpJW8j8AW9p6QXF62Hmey9o%2FEQ4%2Fc8u0d5Iy3nFVLOQF2L7yYtGCurTvkzKh3u8V0nHDvlLtqeF3hgJcoHs4tpUrz9i3MyHtrrKjAw5xv9f3GUG7Fn2oFMf0KaTenFdUJi31ykRA5XPIehzZuLvICmT%2BP8lqRZndO1lIrio%2F6yQWinRjXStmLdCMWF553tAiwCvi9d32d0zIxMnMwj4CRniLp3Bv5TF6Ahc1PYeZpRi0dPu6DJoxNUMCvvBqcLQwfJqvHAkphkMsPICfViTi0dAqljQFvBb5I2q423C8QsVZS8qVXwP7LOrKsH%2BWbd07t3T0FrSRvGYcc%2BU%2FxeW4Tk0BwedAz2MEB9wK9l7Ik63bs7A4cEK8va%2FjLqRoa65xjBxRP7hgBsu%2F0C0TYAB8zWQVx2Ere434kRcbserjp1E%2F5Zj4JbwxK%2Faz9UXDyyBIJ8BWrhOvVQta%2BEujhw5NIA20Jww9y2qHJvDQwzbCJyQY6pgGjXXbRVPmJuSNvqRsdhlIapXQuYBWp%2FSqQ7VY6EH0R47uxv9wSjlB4DhIwrvomSaNeeZQ8BFpTevaD2bHsCsw7UMQAnt9LVvkQiA1PMucjPbQPCr4dJoHKY%2BSnNA9PulmJ96yzlOQWZPDTM8ZBTsmquozDW5nt8Xh7Js3M%2F1ifk5%2FBNXsFN5hsPwqH6x3EdAAZ4iB9XDJ6WCMAadXW7Fj5YeNvnLax&X-Amz-Signature=581d01dcea18302aec8f31e44f7a88aea14b640b2829e5540de3012df6993698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ARSMOMD%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIFV1d%2BeDHHuhg6L1Gvoxz7qJT8tHyYwFjoi06V6q%2BnHXAiAJaUHinvB%2BYzPG0KbgiZQUwaKPNq6194XZmNQ0n6cd3ir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMEY%2BbnGz9jdtvRNyXKtwDTAZTgjTO6DLTAhukuqqhPj7q4deWqUiujimQI1meuVQLlv%2BUF5lKmlKCUwrOn4FKwXvK7HgFnNpAaKvcZKEIsQNSIoT5qgwYcmJ8%2FaDeivP7sX0ydih1eh7lBrDXdlwHr8MPbu3E7djWq5tXmIpSNjbqpJW8j8AW9p6QXF62Hmey9o%2FEQ4%2Fc8u0d5Iy3nFVLOQF2L7yYtGCurTvkzKh3u8V0nHDvlLtqeF3hgJcoHs4tpUrz9i3MyHtrrKjAw5xv9f3GUG7Fn2oFMf0KaTenFdUJi31ykRA5XPIehzZuLvICmT%2BP8lqRZndO1lIrio%2F6yQWinRjXStmLdCMWF553tAiwCvi9d32d0zIxMnMwj4CRniLp3Bv5TF6Ahc1PYeZpRi0dPu6DJoxNUMCvvBqcLQwfJqvHAkphkMsPICfViTi0dAqljQFvBb5I2q423C8QsVZS8qVXwP7LOrKsH%2BWbd07t3T0FrSRvGYcc%2BU%2FxeW4Tk0BwedAz2MEB9wK9l7Ik63bs7A4cEK8va%2FjLqRoa65xjBxRP7hgBsu%2F0C0TYAB8zWQVx2Ere434kRcbserjp1E%2F5Zj4JbwxK%2Faz9UXDyyBIJ8BWrhOvVQta%2BEujhw5NIA20Jww9y2qHJvDQwzbCJyQY6pgGjXXbRVPmJuSNvqRsdhlIapXQuYBWp%2FSqQ7VY6EH0R47uxv9wSjlB4DhIwrvomSaNeeZQ8BFpTevaD2bHsCsw7UMQAnt9LVvkQiA1PMucjPbQPCr4dJoHKY%2BSnNA9PulmJ96yzlOQWZPDTM8ZBTsmquozDW5nt8Xh7Js3M%2F1ifk5%2FBNXsFN5hsPwqH6x3EdAAZ4iB9XDJ6WCMAadXW7Fj5YeNvnLax&X-Amz-Signature=d25be7b21db977299d3f351defb4f7573adda06643ed9fa7a42d870239a719e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ARSMOMD%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIFV1d%2BeDHHuhg6L1Gvoxz7qJT8tHyYwFjoi06V6q%2BnHXAiAJaUHinvB%2BYzPG0KbgiZQUwaKPNq6194XZmNQ0n6cd3ir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMEY%2BbnGz9jdtvRNyXKtwDTAZTgjTO6DLTAhukuqqhPj7q4deWqUiujimQI1meuVQLlv%2BUF5lKmlKCUwrOn4FKwXvK7HgFnNpAaKvcZKEIsQNSIoT5qgwYcmJ8%2FaDeivP7sX0ydih1eh7lBrDXdlwHr8MPbu3E7djWq5tXmIpSNjbqpJW8j8AW9p6QXF62Hmey9o%2FEQ4%2Fc8u0d5Iy3nFVLOQF2L7yYtGCurTvkzKh3u8V0nHDvlLtqeF3hgJcoHs4tpUrz9i3MyHtrrKjAw5xv9f3GUG7Fn2oFMf0KaTenFdUJi31ykRA5XPIehzZuLvICmT%2BP8lqRZndO1lIrio%2F6yQWinRjXStmLdCMWF553tAiwCvi9d32d0zIxMnMwj4CRniLp3Bv5TF6Ahc1PYeZpRi0dPu6DJoxNUMCvvBqcLQwfJqvHAkphkMsPICfViTi0dAqljQFvBb5I2q423C8QsVZS8qVXwP7LOrKsH%2BWbd07t3T0FrSRvGYcc%2BU%2FxeW4Tk0BwedAz2MEB9wK9l7Ik63bs7A4cEK8va%2FjLqRoa65xjBxRP7hgBsu%2F0C0TYAB8zWQVx2Ere434kRcbserjp1E%2F5Zj4JbwxK%2Faz9UXDyyBIJ8BWrhOvVQta%2BEujhw5NIA20Jww9y2qHJvDQwzbCJyQY6pgGjXXbRVPmJuSNvqRsdhlIapXQuYBWp%2FSqQ7VY6EH0R47uxv9wSjlB4DhIwrvomSaNeeZQ8BFpTevaD2bHsCsw7UMQAnt9LVvkQiA1PMucjPbQPCr4dJoHKY%2BSnNA9PulmJ96yzlOQWZPDTM8ZBTsmquozDW5nt8Xh7Js3M%2F1ifk5%2FBNXsFN5hsPwqH6x3EdAAZ4iB9XDJ6WCMAadXW7Fj5YeNvnLax&X-Amz-Signature=5be482e0122fe269b6cf1827415fcc99a0b8177c2059bc12b73c48f0fd946a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


