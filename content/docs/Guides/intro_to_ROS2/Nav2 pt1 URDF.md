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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA6FRCBC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEB%2F%2Bt2ocXY97xggJ00tNljT9Rh5n8TUTp4s%2F5FGD%2FkAAiEAwgDmD7ayU6tj%2FBAQcsrVAe0zFbAgzr5RikhGsR8%2BfyUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAfL9045ZUdF7wTmnircA9E1pTZ2%2Fe%2BI540a5wctIfGMgtTchBDwca4iAaYh5OmIh1y1U96mX2%2BHnQx5P%2BADCvY7yBXqzH3o2wD9do8fgWLz8Vwh28EZw9L3dcLgK2QR0wNu14HJIlrJhj%2FqjYISyi1neItsDWgb%2BIqeFiKW1VlExxJVvzqGlAPzhM4I2cVRX%2BBMWpheQbLOqkFM6i%2BojOqAeB1aB4eeS6LZrwvAPN%2FZjfhgEunxq92ep9gmKExmvaX%2BAux2PzV2yBdRLCqUq6esr0mqrfLOYunDknZ658uE2cXtFqUonr0p%2BSIWcb2MCOYgqZJ88YeitVY8KwAsEt8CBdjeLbUb3AdRwBYeTUCPCqU7rwoDh9PXsnNcWD1R5p6SCL%2B%2FBiqHJWJpIg90X8J9oy8QZdflbikG0VLGK5znjnvCvR5aKrQjritZQYvmHv%2F%2BwzZ5ZAFJkS2gYLOrygho%2BiuZ8m56I6c0BHaDgyA4TvMJak0YL46ODFeP0NG2uxtNQYsduLFqJMqJepPsIXbBIa9DzVmbyi%2FA1Eps3zanaj44jss%2FJgAacyWLWmREB91FcsdAMP5FdN50W6JC7gx4hKisfnz9E0WU%2F06YHzYm4Kd16sj3UUcIgP0ScR3khkVBSlq%2BmjlxqvjbMKW4%2FMQGOqUBi2A0xCccTBDTHfaaHhbkneOA2LqwY0R7T%2B6MEFUCAkBSI5Rr%2FSwelTs5aQNBVKsMG6N6LVpiAVrK3hdwm%2BPqxrGOM7QWWA4LT8dR0nc9SjAwYU9IqLtPAsNzxIJlRI9Gu7s4uLzjNqLqxeJbkjwM5GdC6rl8RM1pC0ArljGcC9BWDa5SgZ4NImFF6LJp45mzDAz0D2UNvrEOXbTGpemq4rYonkAO&X-Amz-Signature=e9b96e6c18bd16db3ea37ae41171e08a96cc9759f5361ef1c87126e13d025e53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA6FRCBC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEB%2F%2Bt2ocXY97xggJ00tNljT9Rh5n8TUTp4s%2F5FGD%2FkAAiEAwgDmD7ayU6tj%2FBAQcsrVAe0zFbAgzr5RikhGsR8%2BfyUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAfL9045ZUdF7wTmnircA9E1pTZ2%2Fe%2BI540a5wctIfGMgtTchBDwca4iAaYh5OmIh1y1U96mX2%2BHnQx5P%2BADCvY7yBXqzH3o2wD9do8fgWLz8Vwh28EZw9L3dcLgK2QR0wNu14HJIlrJhj%2FqjYISyi1neItsDWgb%2BIqeFiKW1VlExxJVvzqGlAPzhM4I2cVRX%2BBMWpheQbLOqkFM6i%2BojOqAeB1aB4eeS6LZrwvAPN%2FZjfhgEunxq92ep9gmKExmvaX%2BAux2PzV2yBdRLCqUq6esr0mqrfLOYunDknZ658uE2cXtFqUonr0p%2BSIWcb2MCOYgqZJ88YeitVY8KwAsEt8CBdjeLbUb3AdRwBYeTUCPCqU7rwoDh9PXsnNcWD1R5p6SCL%2B%2FBiqHJWJpIg90X8J9oy8QZdflbikG0VLGK5znjnvCvR5aKrQjritZQYvmHv%2F%2BwzZ5ZAFJkS2gYLOrygho%2BiuZ8m56I6c0BHaDgyA4TvMJak0YL46ODFeP0NG2uxtNQYsduLFqJMqJepPsIXbBIa9DzVmbyi%2FA1Eps3zanaj44jss%2FJgAacyWLWmREB91FcsdAMP5FdN50W6JC7gx4hKisfnz9E0WU%2F06YHzYm4Kd16sj3UUcIgP0ScR3khkVBSlq%2BmjlxqvjbMKW4%2FMQGOqUBi2A0xCccTBDTHfaaHhbkneOA2LqwY0R7T%2B6MEFUCAkBSI5Rr%2FSwelTs5aQNBVKsMG6N6LVpiAVrK3hdwm%2BPqxrGOM7QWWA4LT8dR0nc9SjAwYU9IqLtPAsNzxIJlRI9Gu7s4uLzjNqLqxeJbkjwM5GdC6rl8RM1pC0ArljGcC9BWDa5SgZ4NImFF6LJp45mzDAz0D2UNvrEOXbTGpemq4rYonkAO&X-Amz-Signature=3514306bf96d045c05f0660618259a6050aab646d414a8b85d567ebeec77bb9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA6FRCBC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEB%2F%2Bt2ocXY97xggJ00tNljT9Rh5n8TUTp4s%2F5FGD%2FkAAiEAwgDmD7ayU6tj%2FBAQcsrVAe0zFbAgzr5RikhGsR8%2BfyUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAfL9045ZUdF7wTmnircA9E1pTZ2%2Fe%2BI540a5wctIfGMgtTchBDwca4iAaYh5OmIh1y1U96mX2%2BHnQx5P%2BADCvY7yBXqzH3o2wD9do8fgWLz8Vwh28EZw9L3dcLgK2QR0wNu14HJIlrJhj%2FqjYISyi1neItsDWgb%2BIqeFiKW1VlExxJVvzqGlAPzhM4I2cVRX%2BBMWpheQbLOqkFM6i%2BojOqAeB1aB4eeS6LZrwvAPN%2FZjfhgEunxq92ep9gmKExmvaX%2BAux2PzV2yBdRLCqUq6esr0mqrfLOYunDknZ658uE2cXtFqUonr0p%2BSIWcb2MCOYgqZJ88YeitVY8KwAsEt8CBdjeLbUb3AdRwBYeTUCPCqU7rwoDh9PXsnNcWD1R5p6SCL%2B%2FBiqHJWJpIg90X8J9oy8QZdflbikG0VLGK5znjnvCvR5aKrQjritZQYvmHv%2F%2BwzZ5ZAFJkS2gYLOrygho%2BiuZ8m56I6c0BHaDgyA4TvMJak0YL46ODFeP0NG2uxtNQYsduLFqJMqJepPsIXbBIa9DzVmbyi%2FA1Eps3zanaj44jss%2FJgAacyWLWmREB91FcsdAMP5FdN50W6JC7gx4hKisfnz9E0WU%2F06YHzYm4Kd16sj3UUcIgP0ScR3khkVBSlq%2BmjlxqvjbMKW4%2FMQGOqUBi2A0xCccTBDTHfaaHhbkneOA2LqwY0R7T%2B6MEFUCAkBSI5Rr%2FSwelTs5aQNBVKsMG6N6LVpiAVrK3hdwm%2BPqxrGOM7QWWA4LT8dR0nc9SjAwYU9IqLtPAsNzxIJlRI9Gu7s4uLzjNqLqxeJbkjwM5GdC6rl8RM1pC0ArljGcC9BWDa5SgZ4NImFF6LJp45mzDAz0D2UNvrEOXbTGpemq4rYonkAO&X-Amz-Signature=eb8c7f615cc2f16afdb6d6cf89d09c7f6599a74bb1a8fe80a900f96b83833108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA6FRCBC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEB%2F%2Bt2ocXY97xggJ00tNljT9Rh5n8TUTp4s%2F5FGD%2FkAAiEAwgDmD7ayU6tj%2FBAQcsrVAe0zFbAgzr5RikhGsR8%2BfyUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAfL9045ZUdF7wTmnircA9E1pTZ2%2Fe%2BI540a5wctIfGMgtTchBDwca4iAaYh5OmIh1y1U96mX2%2BHnQx5P%2BADCvY7yBXqzH3o2wD9do8fgWLz8Vwh28EZw9L3dcLgK2QR0wNu14HJIlrJhj%2FqjYISyi1neItsDWgb%2BIqeFiKW1VlExxJVvzqGlAPzhM4I2cVRX%2BBMWpheQbLOqkFM6i%2BojOqAeB1aB4eeS6LZrwvAPN%2FZjfhgEunxq92ep9gmKExmvaX%2BAux2PzV2yBdRLCqUq6esr0mqrfLOYunDknZ658uE2cXtFqUonr0p%2BSIWcb2MCOYgqZJ88YeitVY8KwAsEt8CBdjeLbUb3AdRwBYeTUCPCqU7rwoDh9PXsnNcWD1R5p6SCL%2B%2FBiqHJWJpIg90X8J9oy8QZdflbikG0VLGK5znjnvCvR5aKrQjritZQYvmHv%2F%2BwzZ5ZAFJkS2gYLOrygho%2BiuZ8m56I6c0BHaDgyA4TvMJak0YL46ODFeP0NG2uxtNQYsduLFqJMqJepPsIXbBIa9DzVmbyi%2FA1Eps3zanaj44jss%2FJgAacyWLWmREB91FcsdAMP5FdN50W6JC7gx4hKisfnz9E0WU%2F06YHzYm4Kd16sj3UUcIgP0ScR3khkVBSlq%2BmjlxqvjbMKW4%2FMQGOqUBi2A0xCccTBDTHfaaHhbkneOA2LqwY0R7T%2B6MEFUCAkBSI5Rr%2FSwelTs5aQNBVKsMG6N6LVpiAVrK3hdwm%2BPqxrGOM7QWWA4LT8dR0nc9SjAwYU9IqLtPAsNzxIJlRI9Gu7s4uLzjNqLqxeJbkjwM5GdC6rl8RM1pC0ArljGcC9BWDa5SgZ4NImFF6LJp45mzDAz0D2UNvrEOXbTGpemq4rYonkAO&X-Amz-Signature=e919f5f04423c668221dae57e80f79ee5ffb3858c35e54745b479ce0c9435d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA6FRCBC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEB%2F%2Bt2ocXY97xggJ00tNljT9Rh5n8TUTp4s%2F5FGD%2FkAAiEAwgDmD7ayU6tj%2FBAQcsrVAe0zFbAgzr5RikhGsR8%2BfyUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAfL9045ZUdF7wTmnircA9E1pTZ2%2Fe%2BI540a5wctIfGMgtTchBDwca4iAaYh5OmIh1y1U96mX2%2BHnQx5P%2BADCvY7yBXqzH3o2wD9do8fgWLz8Vwh28EZw9L3dcLgK2QR0wNu14HJIlrJhj%2FqjYISyi1neItsDWgb%2BIqeFiKW1VlExxJVvzqGlAPzhM4I2cVRX%2BBMWpheQbLOqkFM6i%2BojOqAeB1aB4eeS6LZrwvAPN%2FZjfhgEunxq92ep9gmKExmvaX%2BAux2PzV2yBdRLCqUq6esr0mqrfLOYunDknZ658uE2cXtFqUonr0p%2BSIWcb2MCOYgqZJ88YeitVY8KwAsEt8CBdjeLbUb3AdRwBYeTUCPCqU7rwoDh9PXsnNcWD1R5p6SCL%2B%2FBiqHJWJpIg90X8J9oy8QZdflbikG0VLGK5znjnvCvR5aKrQjritZQYvmHv%2F%2BwzZ5ZAFJkS2gYLOrygho%2BiuZ8m56I6c0BHaDgyA4TvMJak0YL46ODFeP0NG2uxtNQYsduLFqJMqJepPsIXbBIa9DzVmbyi%2FA1Eps3zanaj44jss%2FJgAacyWLWmREB91FcsdAMP5FdN50W6JC7gx4hKisfnz9E0WU%2F06YHzYm4Kd16sj3UUcIgP0ScR3khkVBSlq%2BmjlxqvjbMKW4%2FMQGOqUBi2A0xCccTBDTHfaaHhbkneOA2LqwY0R7T%2B6MEFUCAkBSI5Rr%2FSwelTs5aQNBVKsMG6N6LVpiAVrK3hdwm%2BPqxrGOM7QWWA4LT8dR0nc9SjAwYU9IqLtPAsNzxIJlRI9Gu7s4uLzjNqLqxeJbkjwM5GdC6rl8RM1pC0ArljGcC9BWDa5SgZ4NImFF6LJp45mzDAz0D2UNvrEOXbTGpemq4rYonkAO&X-Amz-Signature=53cb097ea59dda2f151ddff536f6c8afae43e69a856254d2d2f62ea2bb366680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA6FRCBC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEB%2F%2Bt2ocXY97xggJ00tNljT9Rh5n8TUTp4s%2F5FGD%2FkAAiEAwgDmD7ayU6tj%2FBAQcsrVAe0zFbAgzr5RikhGsR8%2BfyUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAfL9045ZUdF7wTmnircA9E1pTZ2%2Fe%2BI540a5wctIfGMgtTchBDwca4iAaYh5OmIh1y1U96mX2%2BHnQx5P%2BADCvY7yBXqzH3o2wD9do8fgWLz8Vwh28EZw9L3dcLgK2QR0wNu14HJIlrJhj%2FqjYISyi1neItsDWgb%2BIqeFiKW1VlExxJVvzqGlAPzhM4I2cVRX%2BBMWpheQbLOqkFM6i%2BojOqAeB1aB4eeS6LZrwvAPN%2FZjfhgEunxq92ep9gmKExmvaX%2BAux2PzV2yBdRLCqUq6esr0mqrfLOYunDknZ658uE2cXtFqUonr0p%2BSIWcb2MCOYgqZJ88YeitVY8KwAsEt8CBdjeLbUb3AdRwBYeTUCPCqU7rwoDh9PXsnNcWD1R5p6SCL%2B%2FBiqHJWJpIg90X8J9oy8QZdflbikG0VLGK5znjnvCvR5aKrQjritZQYvmHv%2F%2BwzZ5ZAFJkS2gYLOrygho%2BiuZ8m56I6c0BHaDgyA4TvMJak0YL46ODFeP0NG2uxtNQYsduLFqJMqJepPsIXbBIa9DzVmbyi%2FA1Eps3zanaj44jss%2FJgAacyWLWmREB91FcsdAMP5FdN50W6JC7gx4hKisfnz9E0WU%2F06YHzYm4Kd16sj3UUcIgP0ScR3khkVBSlq%2BmjlxqvjbMKW4%2FMQGOqUBi2A0xCccTBDTHfaaHhbkneOA2LqwY0R7T%2B6MEFUCAkBSI5Rr%2FSwelTs5aQNBVKsMG6N6LVpiAVrK3hdwm%2BPqxrGOM7QWWA4LT8dR0nc9SjAwYU9IqLtPAsNzxIJlRI9Gu7s4uLzjNqLqxeJbkjwM5GdC6rl8RM1pC0ArljGcC9BWDa5SgZ4NImFF6LJp45mzDAz0D2UNvrEOXbTGpemq4rYonkAO&X-Amz-Signature=caa9fa03911c74afa67d401aa23ac98434132c6db2077f1849bf68cf5cbd337d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA6FRCBC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEB%2F%2Bt2ocXY97xggJ00tNljT9Rh5n8TUTp4s%2F5FGD%2FkAAiEAwgDmD7ayU6tj%2FBAQcsrVAe0zFbAgzr5RikhGsR8%2BfyUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAfL9045ZUdF7wTmnircA9E1pTZ2%2Fe%2BI540a5wctIfGMgtTchBDwca4iAaYh5OmIh1y1U96mX2%2BHnQx5P%2BADCvY7yBXqzH3o2wD9do8fgWLz8Vwh28EZw9L3dcLgK2QR0wNu14HJIlrJhj%2FqjYISyi1neItsDWgb%2BIqeFiKW1VlExxJVvzqGlAPzhM4I2cVRX%2BBMWpheQbLOqkFM6i%2BojOqAeB1aB4eeS6LZrwvAPN%2FZjfhgEunxq92ep9gmKExmvaX%2BAux2PzV2yBdRLCqUq6esr0mqrfLOYunDknZ658uE2cXtFqUonr0p%2BSIWcb2MCOYgqZJ88YeitVY8KwAsEt8CBdjeLbUb3AdRwBYeTUCPCqU7rwoDh9PXsnNcWD1R5p6SCL%2B%2FBiqHJWJpIg90X8J9oy8QZdflbikG0VLGK5znjnvCvR5aKrQjritZQYvmHv%2F%2BwzZ5ZAFJkS2gYLOrygho%2BiuZ8m56I6c0BHaDgyA4TvMJak0YL46ODFeP0NG2uxtNQYsduLFqJMqJepPsIXbBIa9DzVmbyi%2FA1Eps3zanaj44jss%2FJgAacyWLWmREB91FcsdAMP5FdN50W6JC7gx4hKisfnz9E0WU%2F06YHzYm4Kd16sj3UUcIgP0ScR3khkVBSlq%2BmjlxqvjbMKW4%2FMQGOqUBi2A0xCccTBDTHfaaHhbkneOA2LqwY0R7T%2B6MEFUCAkBSI5Rr%2FSwelTs5aQNBVKsMG6N6LVpiAVrK3hdwm%2BPqxrGOM7QWWA4LT8dR0nc9SjAwYU9IqLtPAsNzxIJlRI9Gu7s4uLzjNqLqxeJbkjwM5GdC6rl8RM1pC0ArljGcC9BWDa5SgZ4NImFF6LJp45mzDAz0D2UNvrEOXbTGpemq4rYonkAO&X-Amz-Signature=0e23a45427d23c7a98e6419216786f81067abee0f59a4394847e276ed7a329c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA6FRCBC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEB%2F%2Bt2ocXY97xggJ00tNljT9Rh5n8TUTp4s%2F5FGD%2FkAAiEAwgDmD7ayU6tj%2FBAQcsrVAe0zFbAgzr5RikhGsR8%2BfyUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAfL9045ZUdF7wTmnircA9E1pTZ2%2Fe%2BI540a5wctIfGMgtTchBDwca4iAaYh5OmIh1y1U96mX2%2BHnQx5P%2BADCvY7yBXqzH3o2wD9do8fgWLz8Vwh28EZw9L3dcLgK2QR0wNu14HJIlrJhj%2FqjYISyi1neItsDWgb%2BIqeFiKW1VlExxJVvzqGlAPzhM4I2cVRX%2BBMWpheQbLOqkFM6i%2BojOqAeB1aB4eeS6LZrwvAPN%2FZjfhgEunxq92ep9gmKExmvaX%2BAux2PzV2yBdRLCqUq6esr0mqrfLOYunDknZ658uE2cXtFqUonr0p%2BSIWcb2MCOYgqZJ88YeitVY8KwAsEt8CBdjeLbUb3AdRwBYeTUCPCqU7rwoDh9PXsnNcWD1R5p6SCL%2B%2FBiqHJWJpIg90X8J9oy8QZdflbikG0VLGK5znjnvCvR5aKrQjritZQYvmHv%2F%2BwzZ5ZAFJkS2gYLOrygho%2BiuZ8m56I6c0BHaDgyA4TvMJak0YL46ODFeP0NG2uxtNQYsduLFqJMqJepPsIXbBIa9DzVmbyi%2FA1Eps3zanaj44jss%2FJgAacyWLWmREB91FcsdAMP5FdN50W6JC7gx4hKisfnz9E0WU%2F06YHzYm4Kd16sj3UUcIgP0ScR3khkVBSlq%2BmjlxqvjbMKW4%2FMQGOqUBi2A0xCccTBDTHfaaHhbkneOA2LqwY0R7T%2B6MEFUCAkBSI5Rr%2FSwelTs5aQNBVKsMG6N6LVpiAVrK3hdwm%2BPqxrGOM7QWWA4LT8dR0nc9SjAwYU9IqLtPAsNzxIJlRI9Gu7s4uLzjNqLqxeJbkjwM5GdC6rl8RM1pC0ArljGcC9BWDa5SgZ4NImFF6LJp45mzDAz0D2UNvrEOXbTGpemq4rYonkAO&X-Amz-Signature=7b9604233136e344b12dcaea68c7cb99aefbe3ce6da8ccd6ce9d15f560bb7770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA6FRCBC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEB%2F%2Bt2ocXY97xggJ00tNljT9Rh5n8TUTp4s%2F5FGD%2FkAAiEAwgDmD7ayU6tj%2FBAQcsrVAe0zFbAgzr5RikhGsR8%2BfyUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAfL9045ZUdF7wTmnircA9E1pTZ2%2Fe%2BI540a5wctIfGMgtTchBDwca4iAaYh5OmIh1y1U96mX2%2BHnQx5P%2BADCvY7yBXqzH3o2wD9do8fgWLz8Vwh28EZw9L3dcLgK2QR0wNu14HJIlrJhj%2FqjYISyi1neItsDWgb%2BIqeFiKW1VlExxJVvzqGlAPzhM4I2cVRX%2BBMWpheQbLOqkFM6i%2BojOqAeB1aB4eeS6LZrwvAPN%2FZjfhgEunxq92ep9gmKExmvaX%2BAux2PzV2yBdRLCqUq6esr0mqrfLOYunDknZ658uE2cXtFqUonr0p%2BSIWcb2MCOYgqZJ88YeitVY8KwAsEt8CBdjeLbUb3AdRwBYeTUCPCqU7rwoDh9PXsnNcWD1R5p6SCL%2B%2FBiqHJWJpIg90X8J9oy8QZdflbikG0VLGK5znjnvCvR5aKrQjritZQYvmHv%2F%2BwzZ5ZAFJkS2gYLOrygho%2BiuZ8m56I6c0BHaDgyA4TvMJak0YL46ODFeP0NG2uxtNQYsduLFqJMqJepPsIXbBIa9DzVmbyi%2FA1Eps3zanaj44jss%2FJgAacyWLWmREB91FcsdAMP5FdN50W6JC7gx4hKisfnz9E0WU%2F06YHzYm4Kd16sj3UUcIgP0ScR3khkVBSlq%2BmjlxqvjbMKW4%2FMQGOqUBi2A0xCccTBDTHfaaHhbkneOA2LqwY0R7T%2B6MEFUCAkBSI5Rr%2FSwelTs5aQNBVKsMG6N6LVpiAVrK3hdwm%2BPqxrGOM7QWWA4LT8dR0nc9SjAwYU9IqLtPAsNzxIJlRI9Gu7s4uLzjNqLqxeJbkjwM5GdC6rl8RM1pC0ArljGcC9BWDa5SgZ4NImFF6LJp45mzDAz0D2UNvrEOXbTGpemq4rYonkAO&X-Amz-Signature=84b04ba11a3764b98a1d087b7ac823a20d8fc31be077559b6c4c2ff1caa9d4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA6FRCBC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEB%2F%2Bt2ocXY97xggJ00tNljT9Rh5n8TUTp4s%2F5FGD%2FkAAiEAwgDmD7ayU6tj%2FBAQcsrVAe0zFbAgzr5RikhGsR8%2BfyUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAfL9045ZUdF7wTmnircA9E1pTZ2%2Fe%2BI540a5wctIfGMgtTchBDwca4iAaYh5OmIh1y1U96mX2%2BHnQx5P%2BADCvY7yBXqzH3o2wD9do8fgWLz8Vwh28EZw9L3dcLgK2QR0wNu14HJIlrJhj%2FqjYISyi1neItsDWgb%2BIqeFiKW1VlExxJVvzqGlAPzhM4I2cVRX%2BBMWpheQbLOqkFM6i%2BojOqAeB1aB4eeS6LZrwvAPN%2FZjfhgEunxq92ep9gmKExmvaX%2BAux2PzV2yBdRLCqUq6esr0mqrfLOYunDknZ658uE2cXtFqUonr0p%2BSIWcb2MCOYgqZJ88YeitVY8KwAsEt8CBdjeLbUb3AdRwBYeTUCPCqU7rwoDh9PXsnNcWD1R5p6SCL%2B%2FBiqHJWJpIg90X8J9oy8QZdflbikG0VLGK5znjnvCvR5aKrQjritZQYvmHv%2F%2BwzZ5ZAFJkS2gYLOrygho%2BiuZ8m56I6c0BHaDgyA4TvMJak0YL46ODFeP0NG2uxtNQYsduLFqJMqJepPsIXbBIa9DzVmbyi%2FA1Eps3zanaj44jss%2FJgAacyWLWmREB91FcsdAMP5FdN50W6JC7gx4hKisfnz9E0WU%2F06YHzYm4Kd16sj3UUcIgP0ScR3khkVBSlq%2BmjlxqvjbMKW4%2FMQGOqUBi2A0xCccTBDTHfaaHhbkneOA2LqwY0R7T%2B6MEFUCAkBSI5Rr%2FSwelTs5aQNBVKsMG6N6LVpiAVrK3hdwm%2BPqxrGOM7QWWA4LT8dR0nc9SjAwYU9IqLtPAsNzxIJlRI9Gu7s4uLzjNqLqxeJbkjwM5GdC6rl8RM1pC0ArljGcC9BWDa5SgZ4NImFF6LJp45mzDAz0D2UNvrEOXbTGpemq4rYonkAO&X-Amz-Signature=57ccf14ddd5612c8da1e1936e96ddb937a1eb158ade475781cac4001d3ec9267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LODVO2J%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCID17RW3z7dOXpIcZy4byM5oRq6gtteKlqKkyD4Up1dyrAiEA2mACezvx7GccsRJTLXTgP6xBKAWe6%2FSex3RYpNtjaokq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAWY%2F9Yax2EK7kgyBSrcAyVe3qLqxidBLaNJ6mnCvq4EWOYcsZ9oiCajh0zdf345i1BZTWrHjG8hIb1YHh50DJx6UdVT49F5rK0FAx%2FMOA9xOpPG3uMokfhg3Hq5z742%2FuXtihkYpSk8TXlgwITv%2FfZtU0styQK8kfctxBCqYSjoWHwr9fISEe10yDUVhuqpMr5VsGW1FePd48p0GFKKjKN03HKztvGXBcapOY9KeXoLYRw1kxlaFwTOeHyvIGDsBG2muNpKpQ0LN1CmMtzEd1gIy6fBBEYE4yLe%2Fqc9Izm9PUF9DR88EM7DL4Px%2Bs39q91%2BewXlVvKiylgkvWzHWzpQHdBQwyzJt43H6phW2tIoSwghQId96kAmlUvRRBeD2EiIoo59H4SdkJwvSajFISbg78wDU9aBVRazG8ypt%2BOK9hMDGWV3%2FnPVy1X2nFe8517ucC%2BPDTpewo3pG6aUQI6LqsuIEIkQYR5fcjE2wPPEk2fiZhaWO692mz9Hk49iNzumpUFKGeS1YOo9vVmeLH4KNRlfQe7b%2FT3sC06zZZMR6uCCXfhjiB40UHjb6IfRfu%2FWV3AcKnjYDBdpeF0ky8aciTHBGhP5u5Y%2Box7QEFZQVjmz4%2BFfBeuYdjZLCDFcMwXtfgQkZ1koLcNrMOy2%2FMQGOqUBzqtH%2BeR565QTYVn8b1%2FU3ETYFL%2FtPR0H3Sif2lqisdRXuTeoyWPAtayV5ON790Xr3%2F25FT3LxDzQjtY1qky3ICoyWTpoRdRxiubOmnpVDtBf1ZJHNYIe55%2BY8%2BD8Y4uFV51s8KFYcIMqLy3%2FNDSIQfDKOLhJr%2Fs4RMs4esr7vCy6PbwnqadunQ7hkN3ZmCkeiBwyS3TClgHkWA2GmVe4Vv7JLshR&X-Amz-Signature=1607b83ed9897bbc68eb4c9a3de557b89deb766de03f5cb76ec12e4c4ae04191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MZU7FM3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHCdQoL6OlXVe7rTxtD397FF6%2FrET79D8GQesIt3amdCAiAna2cKRPHZqJ1aSfBlQ%2FlSLsyCAykvpaCbAGjXw%2FV1Gyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMasCV3iLc5qzIkXqMKtwD%2F9ozqRwCcU3u5H79ld%2BZZOsTPWL0%2FeSvqguW%2Frm7qX8%2F0KXZTT2lqfEcgayo8XA1m9JsbjbfrHMBMppGVPKbVZvyhcNtA7SkLYqYb5TsRSgWTEbhIW3YcOs6hQd%2F4xaH%2FhMHWqTYn5yuV4uoqYERxITCkjBcsxQKdsU7xFZko%2BT1kimabZMUQfO5MwaBegLMSwUXBu5M4FnoAUx8xDWEa26lwt0ce%2BgNcOO1cIBJWM9vFS%2BfvrCZQWJgAlUTKVyn6MbAlMEfIKf9uSXAw1T8NtSQg3F2v6cXzC3edRnee6PvRn6tIF9t2AcCQxPUPPSbP6HNGxMkhzF7Y%2FdoVDvxTlX9Y%2BSlsHlN4nqv%2BZ48WjI%2FHEFE2YzhTlmFd3kkCebdw8oqLHoS5soxGiY4OSc%2BXtOP0%2Ft6C1tK7HMwOn%2B5MwRcxtgi9CFG7lpyClrMoSsv%2FbElzgjbJmP7APEu8rvRVvdUAo3NJsYoxrcHOhK5gGjljdbT%2FU5Dv1W%2BZcsAqKugxg0tUhy%2Fj8Q5CXfMvtgEcZBDuS%2Byq%2FEeh0mXPfx6pzKR7O6CVO9WzCcsDAS5NXuVWEd3hH810AFEOqPbe8cXMrmpr8hi8LI99NjzNmXvZMS4l%2BIRwW6gqcri8H4wlLf8xAY6pgGUaaLEL4u09n01w0UxD47zq%2BKi3ZbZApOrvguorMIZgUT%2FH5AdIWZWLL9OLEQ1O%2B7LowdAq%2FO502xRWcrl9WTgi%2F%2BWF6IcWI7ovI9m9u%2BplRa4swlRyDD8NHfkrVb1%2FI4FNQdXOl%2FRROYwRkFm%2FotB%2BWvBrQYhggXmwNnTPMME%2BY4DmmS4K94QXWqfkKh2mPhKJ5zcGKHqWokoeUsif0aJrWqWSJ9l&X-Amz-Signature=fe51f27ae7be2868847c7e7762a9fde9f0b6080766c3f94b25eff51e64cd6d6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSOGAEKX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC%2B5AnAxXjbsIU%2FSchhECo8FkBsHZsTVB%2BMAxcVwzq7mgIgEiW1aTIsMu%2F3ZpyWmGTDHPd5O0RgSWpqU1uBWgQjMDMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCQ06jskjo0opEaFlyrcA4REN3b%2BVC9QLF0YdJy41GoOkqmAZ0bbJc6DWxF%2Fs4Zsa7xoLE1K6CYePjNf9riRUXquZN7sosSCNdwaYRHJdS%2BiJ6qPBYswJSrFFhswbl8rQTCPASN2ekI6DxZpPMxwbic%2FnpNzKJnbtHEHnc06iN0L2lNMPxeFwi6LUUE6U%2FPA7mwfLF1kRo%2FOjr8E7SbxgQR4hu0IWVkM%2FrXaRQy2wVvTIn%2BhWp6hOAksImwXgoULFz8YQQCRzB8ACkIjNRCsnmz6%2BwjnXuhApLjhH80ItBiR2vZKX13mCYsfZsYJg7G%2FfuRJ%2BND1TusPzR7KTZ5Uwb%2BvN7zgxhaDFtVm5eZ4%2Fxr3H28SiOLxy%2F8c7Shb3zTj7JFDmcQV8q2aPQA1Xk9nVmx5yMD91uPUNZGebV1lAde5sD64uQfdTvGYlZ8JzU9XDuocT%2FBxC1k58zOqz9yVXc6Y2pvo%2BwWMjup98fVYZxojQAwsBHtJyqEmXA6jmaOozFCwOuDpcN%2B9BdLv5o3zjryefk9hfqjiV0XL33rtebbC5J8tzysjgyRAv5LRYcIdaBu1trCNy8d16iDFUBfqtLH8uX7wfOvKOKtZhsMQbKkGpUvfoAtHRBK6N68EpeIOL9wppMkK0LgC3LjiMJq3%2FMQGOqUBUP0F5NkO8SfWRjfHMKjx66RdVG6bQJ8j79VXx8Iki163XfMBHugD30APrD1lHvS3qC2uo9kXziR18MGgG%2FWZqDSex6CxBQh59Pm%2BUfBUDBxZFnKJqyJISrp0iotjLwV%2FGa4os4AMG%2F%2BKFCtZ%2B6dS%2FUbjBx%2F8mEwvDPaudReofdl93QyXHSuxmHQdjL7rS3XXABXdzqs8sdCFVYX%2B6W9RQloSg35d&X-Amz-Signature=05eb35de17b26d328874b095777d92b1b84f81b8a2844ba516436391a81ee2c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA6FRCBC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEB%2F%2Bt2ocXY97xggJ00tNljT9Rh5n8TUTp4s%2F5FGD%2FkAAiEAwgDmD7ayU6tj%2FBAQcsrVAe0zFbAgzr5RikhGsR8%2BfyUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAfL9045ZUdF7wTmnircA9E1pTZ2%2Fe%2BI540a5wctIfGMgtTchBDwca4iAaYh5OmIh1y1U96mX2%2BHnQx5P%2BADCvY7yBXqzH3o2wD9do8fgWLz8Vwh28EZw9L3dcLgK2QR0wNu14HJIlrJhj%2FqjYISyi1neItsDWgb%2BIqeFiKW1VlExxJVvzqGlAPzhM4I2cVRX%2BBMWpheQbLOqkFM6i%2BojOqAeB1aB4eeS6LZrwvAPN%2FZjfhgEunxq92ep9gmKExmvaX%2BAux2PzV2yBdRLCqUq6esr0mqrfLOYunDknZ658uE2cXtFqUonr0p%2BSIWcb2MCOYgqZJ88YeitVY8KwAsEt8CBdjeLbUb3AdRwBYeTUCPCqU7rwoDh9PXsnNcWD1R5p6SCL%2B%2FBiqHJWJpIg90X8J9oy8QZdflbikG0VLGK5znjnvCvR5aKrQjritZQYvmHv%2F%2BwzZ5ZAFJkS2gYLOrygho%2BiuZ8m56I6c0BHaDgyA4TvMJak0YL46ODFeP0NG2uxtNQYsduLFqJMqJepPsIXbBIa9DzVmbyi%2FA1Eps3zanaj44jss%2FJgAacyWLWmREB91FcsdAMP5FdN50W6JC7gx4hKisfnz9E0WU%2F06YHzYm4Kd16sj3UUcIgP0ScR3khkVBSlq%2BmjlxqvjbMKW4%2FMQGOqUBi2A0xCccTBDTHfaaHhbkneOA2LqwY0R7T%2B6MEFUCAkBSI5Rr%2FSwelTs5aQNBVKsMG6N6LVpiAVrK3hdwm%2BPqxrGOM7QWWA4LT8dR0nc9SjAwYU9IqLtPAsNzxIJlRI9Gu7s4uLzjNqLqxeJbkjwM5GdC6rl8RM1pC0ArljGcC9BWDa5SgZ4NImFF6LJp45mzDAz0D2UNvrEOXbTGpemq4rYonkAO&X-Amz-Signature=fe17b0b398a8ab5f8b9d641dfc051a7ecdd64aee851de4c8d5e1c6fcb248d7ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSMK6SR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDDBdQArH1r0DBi2sDZOMHj0hd6byfZW2w4W1y8OUikwwIhAIS%2FO5ahxEMCTS0q1S8baM1KMz0qjZb1O0iG6lk91n%2BEKv8DCF0QABoMNjM3NDIzMTgzODA1IgyTnzAMyHWPQnzL1iAq3AN%2BIPKHzSU5RxECncwwO0843FmAFsJxI9FWamOebelgWTZAdxfhUgmdOe0SXwcQFcgD6lvENJo0w6DNY7hW9C6gq47ydwMkt0EO%2BeKJsKu6bw5FjW72dlsihzbJgUNe1tzuC0kiLYPMtk5K4bQEBJVi6zPi1eELNNN%2BaxTN7RPWIH%2BMP7kqOBpXNQjaypZgq436DgxBUbXzQV%2B8u3FJO7vBR7VioowCNmol835B0XcwuSzQiL7xY6Z1KCuceBY2J71rMBsJyowl132CojmzMWB9YEmDbtRq0zKUStJT3G%2FM9iGFiGySmBRBSns1dMPPEqJMeG76gZolDgiAACkau3xMWIWCFNfythhdxxtvRMqAMOLdI2B2sN8%2FLswsdQ9d6HNpNFEP7jr1YpRst9dL2gUTl912JflgRYDE5f8ZdWhLGbwqQvAxFKidw8G7oOUv9zH6rykbT0VTHxQJWCvn1ZlEnHX20swDex3bTzC2xBvjnTSLTSDdwLc%2Bb9KJiO8sNupeAiCwYUSiGhVGciaNDOcRn%2B70G61wF76Za%2BOx4xZ9BA0dX7warFDt%2BTOCeMGYQZi3JQYbzQoMEwFjuBxPqRI6DwSNR1GLSTb3cLarb0d%2F%2F6jJ%2FdhN2Zuawsl2FjDet%2FzEBjqkAXW%2FF3O3hO89HUQrHUYVJ4IYKdLV%2BJG546JyKdeE1DWAPLpZn4jW%2FJN6wnnv4bF4MYmz4L43%2F3fdxKgmkuHpM%2FZXwJu5WiwVF%2BUE1eHT8Eh2hICDQ5ilrXkQAna2g%2Bk%2FAncpzLjtBbGLoES%2B3QBJT8ChtEyKuwx%2BXq4qA4OEcPLjvrjtsVjTNOnGdjx3q5oAwWn7Rs%2BMR4Dc5rYso2UJcudLKCHI&X-Amz-Signature=9a34d211c1677d55e949cec105bf08c0bd80ce0c9d56bf67d287e334d7c76e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA6FRCBC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEB%2F%2Bt2ocXY97xggJ00tNljT9Rh5n8TUTp4s%2F5FGD%2FkAAiEAwgDmD7ayU6tj%2FBAQcsrVAe0zFbAgzr5RikhGsR8%2BfyUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAfL9045ZUdF7wTmnircA9E1pTZ2%2Fe%2BI540a5wctIfGMgtTchBDwca4iAaYh5OmIh1y1U96mX2%2BHnQx5P%2BADCvY7yBXqzH3o2wD9do8fgWLz8Vwh28EZw9L3dcLgK2QR0wNu14HJIlrJhj%2FqjYISyi1neItsDWgb%2BIqeFiKW1VlExxJVvzqGlAPzhM4I2cVRX%2BBMWpheQbLOqkFM6i%2BojOqAeB1aB4eeS6LZrwvAPN%2FZjfhgEunxq92ep9gmKExmvaX%2BAux2PzV2yBdRLCqUq6esr0mqrfLOYunDknZ658uE2cXtFqUonr0p%2BSIWcb2MCOYgqZJ88YeitVY8KwAsEt8CBdjeLbUb3AdRwBYeTUCPCqU7rwoDh9PXsnNcWD1R5p6SCL%2B%2FBiqHJWJpIg90X8J9oy8QZdflbikG0VLGK5znjnvCvR5aKrQjritZQYvmHv%2F%2BwzZ5ZAFJkS2gYLOrygho%2BiuZ8m56I6c0BHaDgyA4TvMJak0YL46ODFeP0NG2uxtNQYsduLFqJMqJepPsIXbBIa9DzVmbyi%2FA1Eps3zanaj44jss%2FJgAacyWLWmREB91FcsdAMP5FdN50W6JC7gx4hKisfnz9E0WU%2F06YHzYm4Kd16sj3UUcIgP0ScR3khkVBSlq%2BmjlxqvjbMKW4%2FMQGOqUBi2A0xCccTBDTHfaaHhbkneOA2LqwY0R7T%2B6MEFUCAkBSI5Rr%2FSwelTs5aQNBVKsMG6N6LVpiAVrK3hdwm%2BPqxrGOM7QWWA4LT8dR0nc9SjAwYU9IqLtPAsNzxIJlRI9Gu7s4uLzjNqLqxeJbkjwM5GdC6rl8RM1pC0ArljGcC9BWDa5SgZ4NImFF6LJp45mzDAz0D2UNvrEOXbTGpemq4rYonkAO&X-Amz-Signature=3697050100553c12d98e145b94f281814b8ebcce00607c1e062c8db4ea1d2903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ERNTYF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGLbke%2BFxxjt6kEn8wAQuQ2BvBLW6GuxrEDwFTQnLhPdAiEAps6FmWbTYHuEPmFlIgdhVjzeMK5pfywI0HSkK4V5rMQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCSH%2FZAesFYm4AZWoircA1OrjBFRp0IiX3%2BUtXi67rnk6%2B3rxZvi1XG6ZRTzis7z%2Byzr%2BNoC%2BJj1V6KlEQHgiueSK8GouzTbmFfX2HexSi0GiMDYOezovuoq%2B8InW2MJIDuam5bg0hTBs2hCg3LT85o9P%2Fsauk7uNadwsIbc6m%2BPN8D9Z4YjFWTqj%2FFBFXuPsSwS5rTODJHWK9KWW%2FTg3twGJpNxUPXxC2XsyAELE1kUpV1xXjzyFCSiRGtC0gfgzLExkeE%2B%2BBjg63dHDLDVi%2Bw7aQ2nnpj2sfTFjKpbVh%2BGcniio%2BvCHKf2q8xGiNwuOlFvwse3GTMGSDHCOhuNaTu0v5wP3D%2BtrABuaX%2FpTFHA6ge%2BvrTTzhLMCrsaJuNpC1JX65T1mKKBhW1AbkBIv3jOX6H83fafixzAf4wRNVI0U0j88A3L4CuY93DDE0vYsj0UxgLo4N2oSv5ygk7T4V3v3NBjr2NRIrv9mqRkOoVZCzJam2HUlYILlxcp5O2UeJztb7kJ%2FWnYtbeFkgof1B1ugRLNmerR2kEp3rnXett3gkvuUUxEbW2YkAtUTwcmi%2F1gJXmRpYolrE77pjaaKhcj38MJotf4DL5v8n6yUijjog6%2FtP%2BdlwxADxiMAf8F0ZEDIx214fQim2mEMNy3%2FMQGOqUBR14wwRyxlbWZPqY6qO%2FCqpVYzJt8qrYKwUq7zObd2lyQ7ytK8GGMwrHhyY2gGJophexzckr6UxkJuvYdsSYmq6GhmV2G1wioaTQ9ujvXOu%2FMmz9kXc2qvddFVf35LZ4hDz69OBCl0Cr8qpjvfnrtLr3SaxaPbYk4KoK%2FcgvkDJPmzGsuZGLyO8MPtN2OR8jaK3qtD%2FDPV3u4qK1YfPjOlr%2B7SMQu&X-Amz-Signature=a7381544cbffebbceeaf90ed39ee8f079f7e24c8a903661273f011da756d2219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA6FRCBC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEB%2F%2Bt2ocXY97xggJ00tNljT9Rh5n8TUTp4s%2F5FGD%2FkAAiEAwgDmD7ayU6tj%2FBAQcsrVAe0zFbAgzr5RikhGsR8%2BfyUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAfL9045ZUdF7wTmnircA9E1pTZ2%2Fe%2BI540a5wctIfGMgtTchBDwca4iAaYh5OmIh1y1U96mX2%2BHnQx5P%2BADCvY7yBXqzH3o2wD9do8fgWLz8Vwh28EZw9L3dcLgK2QR0wNu14HJIlrJhj%2FqjYISyi1neItsDWgb%2BIqeFiKW1VlExxJVvzqGlAPzhM4I2cVRX%2BBMWpheQbLOqkFM6i%2BojOqAeB1aB4eeS6LZrwvAPN%2FZjfhgEunxq92ep9gmKExmvaX%2BAux2PzV2yBdRLCqUq6esr0mqrfLOYunDknZ658uE2cXtFqUonr0p%2BSIWcb2MCOYgqZJ88YeitVY8KwAsEt8CBdjeLbUb3AdRwBYeTUCPCqU7rwoDh9PXsnNcWD1R5p6SCL%2B%2FBiqHJWJpIg90X8J9oy8QZdflbikG0VLGK5znjnvCvR5aKrQjritZQYvmHv%2F%2BwzZ5ZAFJkS2gYLOrygho%2BiuZ8m56I6c0BHaDgyA4TvMJak0YL46ODFeP0NG2uxtNQYsduLFqJMqJepPsIXbBIa9DzVmbyi%2FA1Eps3zanaj44jss%2FJgAacyWLWmREB91FcsdAMP5FdN50W6JC7gx4hKisfnz9E0WU%2F06YHzYm4Kd16sj3UUcIgP0ScR3khkVBSlq%2BmjlxqvjbMKW4%2FMQGOqUBi2A0xCccTBDTHfaaHhbkneOA2LqwY0R7T%2B6MEFUCAkBSI5Rr%2FSwelTs5aQNBVKsMG6N6LVpiAVrK3hdwm%2BPqxrGOM7QWWA4LT8dR0nc9SjAwYU9IqLtPAsNzxIJlRI9Gu7s4uLzjNqLqxeJbkjwM5GdC6rl8RM1pC0ArljGcC9BWDa5SgZ4NImFF6LJp45mzDAz0D2UNvrEOXbTGpemq4rYonkAO&X-Amz-Signature=009228aa2301c90ec86d76cb87301036816fd1df8b98658e800f54aaab0938bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKEUKDUQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDikIzQmaJnCbcS07h72focjpayhxKpcTnkz50ADHp0wAIhAO2S7mXDPB6v2KK2ptV3J%2By8XxPaoEzVcF96T7IR1FKVKv8DCF0QABoMNjM3NDIzMTgzODA1Igx8ArmcfzObSTLsGIsq3AMYk6Pwt%2FFASk%2F7NjrOdR2dY7OSoSr5H2KNeOzj1ZepUZ1MHu0red0d66dSBXyagfM3O8cediEttwaPF5t%2F3kZZYbsdcEJYPVfZLWi3Y3zxobkKGJWm9U26PfDWyuFxOG5XNaHUcroxyEWDfA0kDtd6iAxjzyriCDDhSkpr0h7aqzdm7ebCkb1Ltdga1riyupTMoZKbNpUcFh%2FUqyoL9IjG7n2dCaeOxhePwyVXTGskhjbyoJxknGJdKjE%2BdsWmUbJq0YhbS9B3a8uifLW4W8R9wWOME8wP5t4aTHwF%2BcACtsr3fmT1FOYDoJ1tYOm%2Fm7BFFYuoSz%2FD4swAhG4dmU%2FtpqO%2BPJsnXXglEq0kEbBQd%2FKs8RFBuz77A3jkO1dTRkWNA8lYhhBgVk0JjMsyhP1X22zRFvj83JBHjycsS1XoL%2FokZtKMB%2BsMEQ59%2BGprDfDex4cIAduS9mhZA4GdY0CgRp2Fb7eAw%2Bf17D2q1YE%2BdElC8U2h%2BfIG8nkcsyMBmCJqFD7d5ApazVcIicpnUV1CeDiH7u%2BBJCPesxLXnZ7VB6T9Lh0f1M5KE4SpmT%2BNy43XpJuogSlj2FtXEmyoTuJjoo4p4%2BY6nLmxpuhMXLg2vn%2BgK0zNw1GO5UxyVzDKt%2FzEBjqkAST685RmZl59PoY780uMnZWPuGm9FYTuALBlYTSq4Tu1UcsOyRFB%2Bj2RrOVIrIYYk0iQgengf8nF%2Fwi15c8nfNotLCAgLGCjeKQN8Gb8dAPtxEM90qN%2BUk%2BT5n16as5hP8%2Frxzm8LOEhYNIGDRhTkbVoY0xCzEWwc890QiKhbp%2FaYX5bBER7mnWYgFoRZK9w6myl6yyLfUY%2BWMJqgGnVy1lCS0hM&X-Amz-Signature=21a06f4b782fb6d205cb51d983424af70e4204c72bcc964d6ca12d65400634e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA6FRCBC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEB%2F%2Bt2ocXY97xggJ00tNljT9Rh5n8TUTp4s%2F5FGD%2FkAAiEAwgDmD7ayU6tj%2FBAQcsrVAe0zFbAgzr5RikhGsR8%2BfyUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAfL9045ZUdF7wTmnircA9E1pTZ2%2Fe%2BI540a5wctIfGMgtTchBDwca4iAaYh5OmIh1y1U96mX2%2BHnQx5P%2BADCvY7yBXqzH3o2wD9do8fgWLz8Vwh28EZw9L3dcLgK2QR0wNu14HJIlrJhj%2FqjYISyi1neItsDWgb%2BIqeFiKW1VlExxJVvzqGlAPzhM4I2cVRX%2BBMWpheQbLOqkFM6i%2BojOqAeB1aB4eeS6LZrwvAPN%2FZjfhgEunxq92ep9gmKExmvaX%2BAux2PzV2yBdRLCqUq6esr0mqrfLOYunDknZ658uE2cXtFqUonr0p%2BSIWcb2MCOYgqZJ88YeitVY8KwAsEt8CBdjeLbUb3AdRwBYeTUCPCqU7rwoDh9PXsnNcWD1R5p6SCL%2B%2FBiqHJWJpIg90X8J9oy8QZdflbikG0VLGK5znjnvCvR5aKrQjritZQYvmHv%2F%2BwzZ5ZAFJkS2gYLOrygho%2BiuZ8m56I6c0BHaDgyA4TvMJak0YL46ODFeP0NG2uxtNQYsduLFqJMqJepPsIXbBIa9DzVmbyi%2FA1Eps3zanaj44jss%2FJgAacyWLWmREB91FcsdAMP5FdN50W6JC7gx4hKisfnz9E0WU%2F06YHzYm4Kd16sj3UUcIgP0ScR3khkVBSlq%2BmjlxqvjbMKW4%2FMQGOqUBi2A0xCccTBDTHfaaHhbkneOA2LqwY0R7T%2B6MEFUCAkBSI5Rr%2FSwelTs5aQNBVKsMG6N6LVpiAVrK3hdwm%2BPqxrGOM7QWWA4LT8dR0nc9SjAwYU9IqLtPAsNzxIJlRI9Gu7s4uLzjNqLqxeJbkjwM5GdC6rl8RM1pC0ArljGcC9BWDa5SgZ4NImFF6LJp45mzDAz0D2UNvrEOXbTGpemq4rYonkAO&X-Amz-Signature=a495788d521f457eebbd5f7ee0135889d2144cb451f0e8e52bb04c25582551af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2JJAJMP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDXWKWvykv0snR%2FOF7Aik4DXmcjvRvKAbWKSiN4Iift0AiEAx%2Fy3tu%2FCmYQTTF9xkGacCnXYwmH6tgwPv9SrfElBjzwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPtiwWMFmHYftuuQOircAwZRIuC1I9jWVWGXBdHPiZBmYqE4XcOOsZiePRxznstdVeDrASBfIef6UQOA16Hb9t8jCcpvS1Saa9qI1io4j3x%2BmkvKCtNDJN%2BT7vQzHG6kGQLsOmC36Of2xAqrFdko2Qeu2TDVkfQ%2B2OC05G7HpbhwKOU9v2zujIFMfs1FW4lM9jkHewxJJjE9X2zEwexJO21PijXFszs96f3tXuXwiXeFCwtlwu1vVQXEfjiVTV4QJq%2BEvnMfqHtNQEN8ktjvcu0nA6po%2FfqpZVhUC8K4d%2FBx7sX%2BTbUDZUUcgwS1DvbO7KF6MBftFPCpBazT081u9sB5TC43tk1mkyZs1RJt%2FN8GIUfNAoLBOxoFh5i5mkgBs4ZEX2WUwX9uxMhyXQ9ZXmo9tI%2BIJMOVKsXy9cEVjdrLMLCI7ZYZusMzrosqdhXuDOFM36nhF8jzWZCL0afLL2Y%2FvcAS%2FojPq5yD2qXG4Hhb1A0cZ2bWtTQNx00PDipkr2QG8scP17B5ZYB2r0HPv8bT775kAT%2BnAv1uKQN7PtK3YhfqijkQXqFjC1a4yLuWbwpH7QOZCHpd6bhv%2FUUSaCRnRmhY3Ye6XHQw6N2ZMgibILpgscy1uwEZzss3LL8xAS%2BdV5c%2FKimST2A%2FMPS3%2FMQGOqUBSjVjecfVYnaXUKpleVloVPfGiDIXIvR780YtERdpR17vMv09StQLw7n5g00672qqohrIdiuiTQM6LoszE4EIX8mYM%2FiFacZ%2FQG1fSrs2ukpFElkpqiEJJd7hBGev8IgGpXXyMF5MdUlK44OMNF%2BguJUdde78icU1Jswe0z2mXG5%2BIJtwKy1EfLOgZzs%2FiKd%2BFijkS%2BHLzpJE%2B6P70tWgDCd3EESV&X-Amz-Signature=14dc50abe4afe214b681d49a5e119239575ef712c25b7330904077f0774741a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWHOE6RN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFwHtLq3AabV4%2BE3L4vir8xShs7j2ULllXfmbCt7cj20AiATcsDUVopAXc55sKd8S%2FTQkzA%2BbjL286BaAdpKHv4nBir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM8EL6xo0Fz%2FWnrI0nKtwDouSgTiIVv5BORXr7OZokl8LbRepfaXYYuP9petBfuJ3sOAFEoXgKSKVMDBbrlP5hEz3tsb2UQ0qGcmd5FchJR2r7%2F%2FhtOljloDfE3dv7qSV%2BQzQljn11kDRhj41fsGqm6IBkwFLXeKF%2FIbH3H8AgDmFT4ajWPcocZeAItQY9JA9BbMF7B1JAem5GgZZoWJ0tJCOhIkR6m3Gs4lkW9EfUT1enlptlsvH6zE1PIcibb4pK96tALkUxKjhSVtFwfocXKyWL%2Bb09nJ2BIaF7mxT7xlxzuQ5PvtAcanFXQSvNFJP15DIao75NRm%2BU8CwE2b258jVcsWRbNnh%2FJ1jNu1xgGXTFmTVixwLiwvy8qlMP%2BR%2BFNyJ1bVbD6nnioJhA4FUxiZO5HnhUet5dVxqtDxaPUGwhMQeFc3Xdwu9PjKnoQrebplv%2FMEJjJttWMGHCDE%2FTv5dNRZ5W6mYT2ue8h2sfGS%2B3LJ0Pucz5Mb4C1ey7kqPmf%2FNIEdylK2JOUulnLu8qwYcydf11V784o2Eo2roxe5aa6i%2BVo8vb5bna90TCUMgM43ZKHMtZMRM2C8II95thQ6M0wAKRvJztikZOxpQ1axqzeWgAtBvMza5aG%2FtRNjuH4bkuQT1YgI2SEOMw6rf8xAY6pgH6v2UTpSh1U6tQYP2IzRnf28vzZk6vpRYlBCwOG4pdZYMm6zhwrXGUgyQuRd7YpGfo4ZEugFyodNxmDYKDKmarwyfOSmu3d8lt4q0AnlA2Q0YHUmmatXuVF9zrLjIBGc6jvfeyYkujexRWNZLe1DYnk3ExqXlSa5UgeyJmTUzT1Siu%2B%2BmqAu4hRACYTCA32gIk1chk3i19nu8QCIfxRr0gnvq6Os8q&X-Amz-Signature=4b3e1ff90f8855a1b298c7debc43e14fee61b079eddf90eb4816ab8f4ff1d0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSOGAEKX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC%2B5AnAxXjbsIU%2FSchhECo8FkBsHZsTVB%2BMAxcVwzq7mgIgEiW1aTIsMu%2F3ZpyWmGTDHPd5O0RgSWpqU1uBWgQjMDMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCQ06jskjo0opEaFlyrcA4REN3b%2BVC9QLF0YdJy41GoOkqmAZ0bbJc6DWxF%2Fs4Zsa7xoLE1K6CYePjNf9riRUXquZN7sosSCNdwaYRHJdS%2BiJ6qPBYswJSrFFhswbl8rQTCPASN2ekI6DxZpPMxwbic%2FnpNzKJnbtHEHnc06iN0L2lNMPxeFwi6LUUE6U%2FPA7mwfLF1kRo%2FOjr8E7SbxgQR4hu0IWVkM%2FrXaRQy2wVvTIn%2BhWp6hOAksImwXgoULFz8YQQCRzB8ACkIjNRCsnmz6%2BwjnXuhApLjhH80ItBiR2vZKX13mCYsfZsYJg7G%2FfuRJ%2BND1TusPzR7KTZ5Uwb%2BvN7zgxhaDFtVm5eZ4%2Fxr3H28SiOLxy%2F8c7Shb3zTj7JFDmcQV8q2aPQA1Xk9nVmx5yMD91uPUNZGebV1lAde5sD64uQfdTvGYlZ8JzU9XDuocT%2FBxC1k58zOqz9yVXc6Y2pvo%2BwWMjup98fVYZxojQAwsBHtJyqEmXA6jmaOozFCwOuDpcN%2B9BdLv5o3zjryefk9hfqjiV0XL33rtebbC5J8tzysjgyRAv5LRYcIdaBu1trCNy8d16iDFUBfqtLH8uX7wfOvKOKtZhsMQbKkGpUvfoAtHRBK6N68EpeIOL9wppMkK0LgC3LjiMJq3%2FMQGOqUBUP0F5NkO8SfWRjfHMKjx66RdVG6bQJ8j79VXx8Iki163XfMBHugD30APrD1lHvS3qC2uo9kXziR18MGgG%2FWZqDSex6CxBQh59Pm%2BUfBUDBxZFnKJqyJISrp0iotjLwV%2FGa4os4AMG%2F%2BKFCtZ%2B6dS%2FUbjBx%2F8mEwvDPaudReofdl93QyXHSuxmHQdjL7rS3XXABXdzqs8sdCFVYX%2B6W9RQloSg35d&X-Amz-Signature=def9cecb3ca4c8fa485f8b88a68ce09ab30d2698b2d451ed6f81cc863dc537de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH7FQVJE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCkyzrsd1ACXcQlS8gQfI6%2B4Tr56QevDkQzQfTWDFES5AIgBxfT9cMEk09k1XTYxaHy0qrm52atEj5epHuAvV6SfXYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDN7q5aIjS5t6QrMfbircA4rxqgxMiJLtY5HYwUVXfHfd5jIO9N0NXq6TIk8Cbqz1pxWcyD%2BCWJZAVgcePPys9PSBoRyRygetpl488u7%2FBPONC42wfYkjeK%2Bx4CAy%2BUty%2BrgfEq5T9G7bFtYiGjq4JJHXxLFS%2Fxr9UUWU7gAtTUwF7ny%2BQsYXBp5L0Iw%2BQlo8GzyPbOkhNHEncOZC7nFa0gldTUTKZoXmVJWil9g47o2Jvye%2F3tip%2B5kawj8OSYpMZNHMJ02oESQn%2FoFp0WtdPchCny4rB3VtlbZSNliu3SCCtOIMJWsTuts3jExZzoMTnWoCLUlNO3q7Wf%2FFhqA9YwbnkzteirA3%2FUHyvDjoBG8D55guNBszhAG5LWCteJjIkEiFv%2BDnbmkVE3TZWypt3aAgNrTGs38IriO0FfNVMRYbh379tH2GrkD%2BAfj2UHf8owBtwaNWI4980JAXIhpTjE5DN36IX6rpk%2FAWJvupzZbALG28T6dMjHCHjmtXRDFk%2FYDJ0h1o637%2BEu5OelHWXmt0oKDaPuYRVz9RFglTo%2FkysmJRP6Mtw%2F3a9vYMOB%2F%2BuwY5HUXFqzXHFLr2FIaPS3v20nJgqjBSNwgHg5IwN%2FKIF%2F0Vy2G4HOEwpy060Gzf3ph7hJV%2F9ra5RTQ6MKi3%2FMQGOqUBS7o0kHT8t7X1ohJIRNhGE%2Fs%2FPv1IAbXzXfaF8zAJn9MCp%2FkWTHqrvEAKWHURCbKLTxWsSY8YC%2BuQCXKnJrVwTb%2FXCZRr4z6M%2FBQQ9l8xBb%2FngcKqUY00C0%2Bdf5dUJPBcWZe%2F4MnuTTU4jKOP7CAreVrpLBYFvbF7HS3va3SK%2B5ZgWc08fUbLfd5MdLC0BYcgGS%2FUpRBwsRcoYgpCa%2FO7BLetaKdB&X-Amz-Signature=75229eda2baef013e20a39a48724853b9f7933c075002625d674eda9c88ef5de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR4B2B7H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCL3zCAhcor6oAc7DVV4kotJKpbxjCHK3U5zZCO9E%2FqLAIgE2R1QGde5W7XHgizth3wx%2FSc6%2FBAp46r258JMkgywIYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDL%2FycI3Yz4CcQDzWQyrcA6kCp4iLpsB9mErp8fElZTWv61pVcs26mQB4B1Z7pKI8uQJ5FkGSTevaNLOVwo1Vl3qfE9keXGEmDpk6OoK4s1D9It02BIoQr4fK3ajxVO6ZeUNKWp4bJhJitKGvWIZYJM3p5wT6QyY2DJIEzJKupR2fB6I6sWq0acVPhHWFe7P24%2BbyCC6PQuSC8nySfEBLHNy%2FecCo3fD8mtRiuogzndCRtADSm40H%2FwAMhzP%2BuJpg7mdy4R1U1kJIwOZOEJNcoX9uHSGO5bF2CpJ0yQ2LAe%2Bq6XVH%2FLymjs4YJRtmtxbeqRy1yy957hakVbTmhPfLPHQ2iXMaAD45dVqLaBy%2FkJJmOdZihZOnbAi7MX5kvO0TxyMr4WZ8PQD95aaiIsOJOvlD1ScOWm5e4CF3BZNTvWX8bNrcKGDnirP7c%2B7G7b1cVevzwsfJGS8lG2uTsSWGJ3QqztLoXXLuleNl8dHLF5xHzA9uZs1fvg%2BsKXkpmVVca1lXzDeV8YXmmNDDxkxlCechL%2Fl84vdMX%2FPRDQX9XyagxQ3wtOuMaV3ZLI1rPGREArXUiSr8d1xLwLYdoxeFo0vmwNDkQzlqfAR5%2FQC7nhXdLdJOdfBEJd3bi%2BUUrd76ud62%2BypoQ%2FZ2d4%2BoMLG3%2FMQGOqUBfJ7d7NOvDX%2Fuh2vz19fjwy9t8DbiHpUwr%2FhCK66ZdwqKbWtNhRNklCj9TRBlYaevwZjc6Mb39Pb7ixUpwQldJhLZK83LEiVR5Vo3GsA6u1xE3Mxm%2BmTMYcBLGtMtYOc2Qv33hrsZuUQefFsP08icoAvQMmn%2BkOBE1S9UOqq8RfukFnY2fXCTz68aOC8FuRX7Ec%2B6v7eMsE6%2FKrd5Ixy9WnLq8mvd&X-Amz-Signature=ec69e7f421079a380c87d493ecfde2f049bd4ec8d0e4dc8c021807c92eed163c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA6FRCBC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEB%2F%2Bt2ocXY97xggJ00tNljT9Rh5n8TUTp4s%2F5FGD%2FkAAiEAwgDmD7ayU6tj%2FBAQcsrVAe0zFbAgzr5RikhGsR8%2BfyUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAfL9045ZUdF7wTmnircA9E1pTZ2%2Fe%2BI540a5wctIfGMgtTchBDwca4iAaYh5OmIh1y1U96mX2%2BHnQx5P%2BADCvY7yBXqzH3o2wD9do8fgWLz8Vwh28EZw9L3dcLgK2QR0wNu14HJIlrJhj%2FqjYISyi1neItsDWgb%2BIqeFiKW1VlExxJVvzqGlAPzhM4I2cVRX%2BBMWpheQbLOqkFM6i%2BojOqAeB1aB4eeS6LZrwvAPN%2FZjfhgEunxq92ep9gmKExmvaX%2BAux2PzV2yBdRLCqUq6esr0mqrfLOYunDknZ658uE2cXtFqUonr0p%2BSIWcb2MCOYgqZJ88YeitVY8KwAsEt8CBdjeLbUb3AdRwBYeTUCPCqU7rwoDh9PXsnNcWD1R5p6SCL%2B%2FBiqHJWJpIg90X8J9oy8QZdflbikG0VLGK5znjnvCvR5aKrQjritZQYvmHv%2F%2BwzZ5ZAFJkS2gYLOrygho%2BiuZ8m56I6c0BHaDgyA4TvMJak0YL46ODFeP0NG2uxtNQYsduLFqJMqJepPsIXbBIa9DzVmbyi%2FA1Eps3zanaj44jss%2FJgAacyWLWmREB91FcsdAMP5FdN50W6JC7gx4hKisfnz9E0WU%2F06YHzYm4Kd16sj3UUcIgP0ScR3khkVBSlq%2BmjlxqvjbMKW4%2FMQGOqUBi2A0xCccTBDTHfaaHhbkneOA2LqwY0R7T%2B6MEFUCAkBSI5Rr%2FSwelTs5aQNBVKsMG6N6LVpiAVrK3hdwm%2BPqxrGOM7QWWA4LT8dR0nc9SjAwYU9IqLtPAsNzxIJlRI9Gu7s4uLzjNqLqxeJbkjwM5GdC6rl8RM1pC0ArljGcC9BWDa5SgZ4NImFF6LJp45mzDAz0D2UNvrEOXbTGpemq4rYonkAO&X-Amz-Signature=a2c03f2ec741f1a53ded5d3680b2563fba5ac5bd173333679a1cd57ebc1537a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA6FRCBC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEB%2F%2Bt2ocXY97xggJ00tNljT9Rh5n8TUTp4s%2F5FGD%2FkAAiEAwgDmD7ayU6tj%2FBAQcsrVAe0zFbAgzr5RikhGsR8%2BfyUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAfL9045ZUdF7wTmnircA9E1pTZ2%2Fe%2BI540a5wctIfGMgtTchBDwca4iAaYh5OmIh1y1U96mX2%2BHnQx5P%2BADCvY7yBXqzH3o2wD9do8fgWLz8Vwh28EZw9L3dcLgK2QR0wNu14HJIlrJhj%2FqjYISyi1neItsDWgb%2BIqeFiKW1VlExxJVvzqGlAPzhM4I2cVRX%2BBMWpheQbLOqkFM6i%2BojOqAeB1aB4eeS6LZrwvAPN%2FZjfhgEunxq92ep9gmKExmvaX%2BAux2PzV2yBdRLCqUq6esr0mqrfLOYunDknZ658uE2cXtFqUonr0p%2BSIWcb2MCOYgqZJ88YeitVY8KwAsEt8CBdjeLbUb3AdRwBYeTUCPCqU7rwoDh9PXsnNcWD1R5p6SCL%2B%2FBiqHJWJpIg90X8J9oy8QZdflbikG0VLGK5znjnvCvR5aKrQjritZQYvmHv%2F%2BwzZ5ZAFJkS2gYLOrygho%2BiuZ8m56I6c0BHaDgyA4TvMJak0YL46ODFeP0NG2uxtNQYsduLFqJMqJepPsIXbBIa9DzVmbyi%2FA1Eps3zanaj44jss%2FJgAacyWLWmREB91FcsdAMP5FdN50W6JC7gx4hKisfnz9E0WU%2F06YHzYm4Kd16sj3UUcIgP0ScR3khkVBSlq%2BmjlxqvjbMKW4%2FMQGOqUBi2A0xCccTBDTHfaaHhbkneOA2LqwY0R7T%2B6MEFUCAkBSI5Rr%2FSwelTs5aQNBVKsMG6N6LVpiAVrK3hdwm%2BPqxrGOM7QWWA4LT8dR0nc9SjAwYU9IqLtPAsNzxIJlRI9Gu7s4uLzjNqLqxeJbkjwM5GdC6rl8RM1pC0ArljGcC9BWDa5SgZ4NImFF6LJp45mzDAz0D2UNvrEOXbTGpemq4rYonkAO&X-Amz-Signature=47337b146e47e6681c1c7c37953dbca2637b8f110dda85d9f9cc79dd92b7bb13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSOX56T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCID8mpWnWOgfAQq8aI7rfEyW%2B4h1I9B0QBhgKCXj37wo1AiEAtyJQ30UywCwk4R2Wu4%2BK0ln42kXso8ZduDnlo47b5AIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAxzY19lXMT%2Bu%2F58ESrcA7YYngdfwkkTQIc08i2BFLxOyAjvpYqbeFnQvXtQirH4%2F9PNC9NxVevQ5r0m4UF9CZqFGAQEbsc0St9mCM%2FM38%2FlQBMDcbcz2ljPJ38khc9BhMl%2FdWnce81IpmpFFLq0inGSMMYxGUl6BOjO5eNvgScXRi6s01Nrmda3%2BvudfFBxkh57ZBe5j9wpV7YBOADGRGUvqeOFJnEB%2FMJYNTPizCnp%2BiARv1O2ZUdmG0PtqsFkhymUAqmCKcmkDCCFB5%2FaowoKUmPS95oK8LPyTkp5xrzMr9%2FIka4C1OucSDM7L2iXQk6wDwOazNiZnVplltLwo5oqM%2BWSoXV%2FatSAXykklJ1rQs5F8hVFUMa0ASysCwWx0gJqETHZb%2FmmEvvwIsPuxE%2BmqOsTUH7Rxqgi416HcLVdmORFjI16h%2FFHJZe6iEu%2BsGikmnTDkrWUXeeyGS8b%2FjpvecS1LYxmgeMp3TwWHvbl9o8TpmnBl4LJQCe2qn8VsQBGnmkGRZ2sWE8090Id0N4BgnkbxgpsKui4mGH3Btt7RSSKSXWW4rBM%2Ftph7YdV4Gt7BE7D4ZJwFzX4NxaBJ2bCQ9Y9Z1Wcp%2FQupcYdvQ5DAwPloV91IzoYgfOQd4Hsb0CKTajNudFcnJK5MNG3%2FMQGOqUBU2qbH7vlMsjxgUeKZFYpMZd%2BUmm6qs8wJAn9fKIei0goZ9dS9%2FrsGrjbLDLrgH4Ah59BHtvlnoFA5L3Uh%2FOJnesn43r5Snp8aM3n8FidsCbP4zNhVaarBkuCDURdn0tuVj1TMIkJg7PN1GE4V2lfwKCcOFe3HLcSDzRriCN%2By0GPy00afcM2a47NncJXcyCFRfe2pw1e8J0Bj4PyuwFFYKS8KjIm&X-Amz-Signature=5b3b7cc86d00c26c6c732fda09d83b23fa7eb8565486304ee74c46022975234f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSOX56T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCID8mpWnWOgfAQq8aI7rfEyW%2B4h1I9B0QBhgKCXj37wo1AiEAtyJQ30UywCwk4R2Wu4%2BK0ln42kXso8ZduDnlo47b5AIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAxzY19lXMT%2Bu%2F58ESrcA7YYngdfwkkTQIc08i2BFLxOyAjvpYqbeFnQvXtQirH4%2F9PNC9NxVevQ5r0m4UF9CZqFGAQEbsc0St9mCM%2FM38%2FlQBMDcbcz2ljPJ38khc9BhMl%2FdWnce81IpmpFFLq0inGSMMYxGUl6BOjO5eNvgScXRi6s01Nrmda3%2BvudfFBxkh57ZBe5j9wpV7YBOADGRGUvqeOFJnEB%2FMJYNTPizCnp%2BiARv1O2ZUdmG0PtqsFkhymUAqmCKcmkDCCFB5%2FaowoKUmPS95oK8LPyTkp5xrzMr9%2FIka4C1OucSDM7L2iXQk6wDwOazNiZnVplltLwo5oqM%2BWSoXV%2FatSAXykklJ1rQs5F8hVFUMa0ASysCwWx0gJqETHZb%2FmmEvvwIsPuxE%2BmqOsTUH7Rxqgi416HcLVdmORFjI16h%2FFHJZe6iEu%2BsGikmnTDkrWUXeeyGS8b%2FjpvecS1LYxmgeMp3TwWHvbl9o8TpmnBl4LJQCe2qn8VsQBGnmkGRZ2sWE8090Id0N4BgnkbxgpsKui4mGH3Btt7RSSKSXWW4rBM%2Ftph7YdV4Gt7BE7D4ZJwFzX4NxaBJ2bCQ9Y9Z1Wcp%2FQupcYdvQ5DAwPloV91IzoYgfOQd4Hsb0CKTajNudFcnJK5MNG3%2FMQGOqUBU2qbH7vlMsjxgUeKZFYpMZd%2BUmm6qs8wJAn9fKIei0goZ9dS9%2FrsGrjbLDLrgH4Ah59BHtvlnoFA5L3Uh%2FOJnesn43r5Snp8aM3n8FidsCbP4zNhVaarBkuCDURdn0tuVj1TMIkJg7PN1GE4V2lfwKCcOFe3HLcSDzRriCN%2By0GPy00afcM2a47NncJXcyCFRfe2pw1e8J0Bj4PyuwFFYKS8KjIm&X-Amz-Signature=a12804945c16a3f08a808e2e25832a2c6345b57b95b402ea8ad306d8c3742f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSOX56T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCID8mpWnWOgfAQq8aI7rfEyW%2B4h1I9B0QBhgKCXj37wo1AiEAtyJQ30UywCwk4R2Wu4%2BK0ln42kXso8ZduDnlo47b5AIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAxzY19lXMT%2Bu%2F58ESrcA7YYngdfwkkTQIc08i2BFLxOyAjvpYqbeFnQvXtQirH4%2F9PNC9NxVevQ5r0m4UF9CZqFGAQEbsc0St9mCM%2FM38%2FlQBMDcbcz2ljPJ38khc9BhMl%2FdWnce81IpmpFFLq0inGSMMYxGUl6BOjO5eNvgScXRi6s01Nrmda3%2BvudfFBxkh57ZBe5j9wpV7YBOADGRGUvqeOFJnEB%2FMJYNTPizCnp%2BiARv1O2ZUdmG0PtqsFkhymUAqmCKcmkDCCFB5%2FaowoKUmPS95oK8LPyTkp5xrzMr9%2FIka4C1OucSDM7L2iXQk6wDwOazNiZnVplltLwo5oqM%2BWSoXV%2FatSAXykklJ1rQs5F8hVFUMa0ASysCwWx0gJqETHZb%2FmmEvvwIsPuxE%2BmqOsTUH7Rxqgi416HcLVdmORFjI16h%2FFHJZe6iEu%2BsGikmnTDkrWUXeeyGS8b%2FjpvecS1LYxmgeMp3TwWHvbl9o8TpmnBl4LJQCe2qn8VsQBGnmkGRZ2sWE8090Id0N4BgnkbxgpsKui4mGH3Btt7RSSKSXWW4rBM%2Ftph7YdV4Gt7BE7D4ZJwFzX4NxaBJ2bCQ9Y9Z1Wcp%2FQupcYdvQ5DAwPloV91IzoYgfOQd4Hsb0CKTajNudFcnJK5MNG3%2FMQGOqUBU2qbH7vlMsjxgUeKZFYpMZd%2BUmm6qs8wJAn9fKIei0goZ9dS9%2FrsGrjbLDLrgH4Ah59BHtvlnoFA5L3Uh%2FOJnesn43r5Snp8aM3n8FidsCbP4zNhVaarBkuCDURdn0tuVj1TMIkJg7PN1GE4V2lfwKCcOFe3HLcSDzRriCN%2By0GPy00afcM2a47NncJXcyCFRfe2pw1e8J0Bj4PyuwFFYKS8KjIm&X-Amz-Signature=ea9ef8771ee6a287fd311cf7ecfe9ccaac6f7172a3b8d0cbd767d3e8f387318f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSOX56T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCID8mpWnWOgfAQq8aI7rfEyW%2B4h1I9B0QBhgKCXj37wo1AiEAtyJQ30UywCwk4R2Wu4%2BK0ln42kXso8ZduDnlo47b5AIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAxzY19lXMT%2Bu%2F58ESrcA7YYngdfwkkTQIc08i2BFLxOyAjvpYqbeFnQvXtQirH4%2F9PNC9NxVevQ5r0m4UF9CZqFGAQEbsc0St9mCM%2FM38%2FlQBMDcbcz2ljPJ38khc9BhMl%2FdWnce81IpmpFFLq0inGSMMYxGUl6BOjO5eNvgScXRi6s01Nrmda3%2BvudfFBxkh57ZBe5j9wpV7YBOADGRGUvqeOFJnEB%2FMJYNTPizCnp%2BiARv1O2ZUdmG0PtqsFkhymUAqmCKcmkDCCFB5%2FaowoKUmPS95oK8LPyTkp5xrzMr9%2FIka4C1OucSDM7L2iXQk6wDwOazNiZnVplltLwo5oqM%2BWSoXV%2FatSAXykklJ1rQs5F8hVFUMa0ASysCwWx0gJqETHZb%2FmmEvvwIsPuxE%2BmqOsTUH7Rxqgi416HcLVdmORFjI16h%2FFHJZe6iEu%2BsGikmnTDkrWUXeeyGS8b%2FjpvecS1LYxmgeMp3TwWHvbl9o8TpmnBl4LJQCe2qn8VsQBGnmkGRZ2sWE8090Id0N4BgnkbxgpsKui4mGH3Btt7RSSKSXWW4rBM%2Ftph7YdV4Gt7BE7D4ZJwFzX4NxaBJ2bCQ9Y9Z1Wcp%2FQupcYdvQ5DAwPloV91IzoYgfOQd4Hsb0CKTajNudFcnJK5MNG3%2FMQGOqUBU2qbH7vlMsjxgUeKZFYpMZd%2BUmm6qs8wJAn9fKIei0goZ9dS9%2FrsGrjbLDLrgH4Ah59BHtvlnoFA5L3Uh%2FOJnesn43r5Snp8aM3n8FidsCbP4zNhVaarBkuCDURdn0tuVj1TMIkJg7PN1GE4V2lfwKCcOFe3HLcSDzRriCN%2By0GPy00afcM2a47NncJXcyCFRfe2pw1e8J0Bj4PyuwFFYKS8KjIm&X-Amz-Signature=82c776a32b5237a8824500432fcc1e613849312f5c8cd1e2809183d814b0fe8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSOX56T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCID8mpWnWOgfAQq8aI7rfEyW%2B4h1I9B0QBhgKCXj37wo1AiEAtyJQ30UywCwk4R2Wu4%2BK0ln42kXso8ZduDnlo47b5AIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAxzY19lXMT%2Bu%2F58ESrcA7YYngdfwkkTQIc08i2BFLxOyAjvpYqbeFnQvXtQirH4%2F9PNC9NxVevQ5r0m4UF9CZqFGAQEbsc0St9mCM%2FM38%2FlQBMDcbcz2ljPJ38khc9BhMl%2FdWnce81IpmpFFLq0inGSMMYxGUl6BOjO5eNvgScXRi6s01Nrmda3%2BvudfFBxkh57ZBe5j9wpV7YBOADGRGUvqeOFJnEB%2FMJYNTPizCnp%2BiARv1O2ZUdmG0PtqsFkhymUAqmCKcmkDCCFB5%2FaowoKUmPS95oK8LPyTkp5xrzMr9%2FIka4C1OucSDM7L2iXQk6wDwOazNiZnVplltLwo5oqM%2BWSoXV%2FatSAXykklJ1rQs5F8hVFUMa0ASysCwWx0gJqETHZb%2FmmEvvwIsPuxE%2BmqOsTUH7Rxqgi416HcLVdmORFjI16h%2FFHJZe6iEu%2BsGikmnTDkrWUXeeyGS8b%2FjpvecS1LYxmgeMp3TwWHvbl9o8TpmnBl4LJQCe2qn8VsQBGnmkGRZ2sWE8090Id0N4BgnkbxgpsKui4mGH3Btt7RSSKSXWW4rBM%2Ftph7YdV4Gt7BE7D4ZJwFzX4NxaBJ2bCQ9Y9Z1Wcp%2FQupcYdvQ5DAwPloV91IzoYgfOQd4Hsb0CKTajNudFcnJK5MNG3%2FMQGOqUBU2qbH7vlMsjxgUeKZFYpMZd%2BUmm6qs8wJAn9fKIei0goZ9dS9%2FrsGrjbLDLrgH4Ah59BHtvlnoFA5L3Uh%2FOJnesn43r5Snp8aM3n8FidsCbP4zNhVaarBkuCDURdn0tuVj1TMIkJg7PN1GE4V2lfwKCcOFe3HLcSDzRriCN%2By0GPy00afcM2a47NncJXcyCFRfe2pw1e8J0Bj4PyuwFFYKS8KjIm&X-Amz-Signature=9b8a57879ab8346466de708e0fc441209e009428c91475310f371339086fef82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSOX56T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCID8mpWnWOgfAQq8aI7rfEyW%2B4h1I9B0QBhgKCXj37wo1AiEAtyJQ30UywCwk4R2Wu4%2BK0ln42kXso8ZduDnlo47b5AIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAxzY19lXMT%2Bu%2F58ESrcA7YYngdfwkkTQIc08i2BFLxOyAjvpYqbeFnQvXtQirH4%2F9PNC9NxVevQ5r0m4UF9CZqFGAQEbsc0St9mCM%2FM38%2FlQBMDcbcz2ljPJ38khc9BhMl%2FdWnce81IpmpFFLq0inGSMMYxGUl6BOjO5eNvgScXRi6s01Nrmda3%2BvudfFBxkh57ZBe5j9wpV7YBOADGRGUvqeOFJnEB%2FMJYNTPizCnp%2BiARv1O2ZUdmG0PtqsFkhymUAqmCKcmkDCCFB5%2FaowoKUmPS95oK8LPyTkp5xrzMr9%2FIka4C1OucSDM7L2iXQk6wDwOazNiZnVplltLwo5oqM%2BWSoXV%2FatSAXykklJ1rQs5F8hVFUMa0ASysCwWx0gJqETHZb%2FmmEvvwIsPuxE%2BmqOsTUH7Rxqgi416HcLVdmORFjI16h%2FFHJZe6iEu%2BsGikmnTDkrWUXeeyGS8b%2FjpvecS1LYxmgeMp3TwWHvbl9o8TpmnBl4LJQCe2qn8VsQBGnmkGRZ2sWE8090Id0N4BgnkbxgpsKui4mGH3Btt7RSSKSXWW4rBM%2Ftph7YdV4Gt7BE7D4ZJwFzX4NxaBJ2bCQ9Y9Z1Wcp%2FQupcYdvQ5DAwPloV91IzoYgfOQd4Hsb0CKTajNudFcnJK5MNG3%2FMQGOqUBU2qbH7vlMsjxgUeKZFYpMZd%2BUmm6qs8wJAn9fKIei0goZ9dS9%2FrsGrjbLDLrgH4Ah59BHtvlnoFA5L3Uh%2FOJnesn43r5Snp8aM3n8FidsCbP4zNhVaarBkuCDURdn0tuVj1TMIkJg7PN1GE4V2lfwKCcOFe3HLcSDzRriCN%2By0GPy00afcM2a47NncJXcyCFRfe2pw1e8J0Bj4PyuwFFYKS8KjIm&X-Amz-Signature=eb28e9f7e620eb55ce190ad8f169cb9c79f0ec6782217e4dea5c228841695a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSOX56T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCID8mpWnWOgfAQq8aI7rfEyW%2B4h1I9B0QBhgKCXj37wo1AiEAtyJQ30UywCwk4R2Wu4%2BK0ln42kXso8ZduDnlo47b5AIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAxzY19lXMT%2Bu%2F58ESrcA7YYngdfwkkTQIc08i2BFLxOyAjvpYqbeFnQvXtQirH4%2F9PNC9NxVevQ5r0m4UF9CZqFGAQEbsc0St9mCM%2FM38%2FlQBMDcbcz2ljPJ38khc9BhMl%2FdWnce81IpmpFFLq0inGSMMYxGUl6BOjO5eNvgScXRi6s01Nrmda3%2BvudfFBxkh57ZBe5j9wpV7YBOADGRGUvqeOFJnEB%2FMJYNTPizCnp%2BiARv1O2ZUdmG0PtqsFkhymUAqmCKcmkDCCFB5%2FaowoKUmPS95oK8LPyTkp5xrzMr9%2FIka4C1OucSDM7L2iXQk6wDwOazNiZnVplltLwo5oqM%2BWSoXV%2FatSAXykklJ1rQs5F8hVFUMa0ASysCwWx0gJqETHZb%2FmmEvvwIsPuxE%2BmqOsTUH7Rxqgi416HcLVdmORFjI16h%2FFHJZe6iEu%2BsGikmnTDkrWUXeeyGS8b%2FjpvecS1LYxmgeMp3TwWHvbl9o8TpmnBl4LJQCe2qn8VsQBGnmkGRZ2sWE8090Id0N4BgnkbxgpsKui4mGH3Btt7RSSKSXWW4rBM%2Ftph7YdV4Gt7BE7D4ZJwFzX4NxaBJ2bCQ9Y9Z1Wcp%2FQupcYdvQ5DAwPloV91IzoYgfOQd4Hsb0CKTajNudFcnJK5MNG3%2FMQGOqUBU2qbH7vlMsjxgUeKZFYpMZd%2BUmm6qs8wJAn9fKIei0goZ9dS9%2FrsGrjbLDLrgH4Ah59BHtvlnoFA5L3Uh%2FOJnesn43r5Snp8aM3n8FidsCbP4zNhVaarBkuCDURdn0tuVj1TMIkJg7PN1GE4V2lfwKCcOFe3HLcSDzRriCN%2By0GPy00afcM2a47NncJXcyCFRfe2pw1e8J0Bj4PyuwFFYKS8KjIm&X-Amz-Signature=991a2735a87447f2030e84293c1b75fee9ef2782e7022c86e766bd443c42c7bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSOX56T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCID8mpWnWOgfAQq8aI7rfEyW%2B4h1I9B0QBhgKCXj37wo1AiEAtyJQ30UywCwk4R2Wu4%2BK0ln42kXso8ZduDnlo47b5AIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAxzY19lXMT%2Bu%2F58ESrcA7YYngdfwkkTQIc08i2BFLxOyAjvpYqbeFnQvXtQirH4%2F9PNC9NxVevQ5r0m4UF9CZqFGAQEbsc0St9mCM%2FM38%2FlQBMDcbcz2ljPJ38khc9BhMl%2FdWnce81IpmpFFLq0inGSMMYxGUl6BOjO5eNvgScXRi6s01Nrmda3%2BvudfFBxkh57ZBe5j9wpV7YBOADGRGUvqeOFJnEB%2FMJYNTPizCnp%2BiARv1O2ZUdmG0PtqsFkhymUAqmCKcmkDCCFB5%2FaowoKUmPS95oK8LPyTkp5xrzMr9%2FIka4C1OucSDM7L2iXQk6wDwOazNiZnVplltLwo5oqM%2BWSoXV%2FatSAXykklJ1rQs5F8hVFUMa0ASysCwWx0gJqETHZb%2FmmEvvwIsPuxE%2BmqOsTUH7Rxqgi416HcLVdmORFjI16h%2FFHJZe6iEu%2BsGikmnTDkrWUXeeyGS8b%2FjpvecS1LYxmgeMp3TwWHvbl9o8TpmnBl4LJQCe2qn8VsQBGnmkGRZ2sWE8090Id0N4BgnkbxgpsKui4mGH3Btt7RSSKSXWW4rBM%2Ftph7YdV4Gt7BE7D4ZJwFzX4NxaBJ2bCQ9Y9Z1Wcp%2FQupcYdvQ5DAwPloV91IzoYgfOQd4Hsb0CKTajNudFcnJK5MNG3%2FMQGOqUBU2qbH7vlMsjxgUeKZFYpMZd%2BUmm6qs8wJAn9fKIei0goZ9dS9%2FrsGrjbLDLrgH4Ah59BHtvlnoFA5L3Uh%2FOJnesn43r5Snp8aM3n8FidsCbP4zNhVaarBkuCDURdn0tuVj1TMIkJg7PN1GE4V2lfwKCcOFe3HLcSDzRriCN%2By0GPy00afcM2a47NncJXcyCFRfe2pw1e8J0Bj4PyuwFFYKS8KjIm&X-Amz-Signature=b7fca9734220960a82c8cefd546a8398a5d563d1c22bbd5f8a6a8c7e89157e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSOX56T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCID8mpWnWOgfAQq8aI7rfEyW%2B4h1I9B0QBhgKCXj37wo1AiEAtyJQ30UywCwk4R2Wu4%2BK0ln42kXso8ZduDnlo47b5AIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAxzY19lXMT%2Bu%2F58ESrcA7YYngdfwkkTQIc08i2BFLxOyAjvpYqbeFnQvXtQirH4%2F9PNC9NxVevQ5r0m4UF9CZqFGAQEbsc0St9mCM%2FM38%2FlQBMDcbcz2ljPJ38khc9BhMl%2FdWnce81IpmpFFLq0inGSMMYxGUl6BOjO5eNvgScXRi6s01Nrmda3%2BvudfFBxkh57ZBe5j9wpV7YBOADGRGUvqeOFJnEB%2FMJYNTPizCnp%2BiARv1O2ZUdmG0PtqsFkhymUAqmCKcmkDCCFB5%2FaowoKUmPS95oK8LPyTkp5xrzMr9%2FIka4C1OucSDM7L2iXQk6wDwOazNiZnVplltLwo5oqM%2BWSoXV%2FatSAXykklJ1rQs5F8hVFUMa0ASysCwWx0gJqETHZb%2FmmEvvwIsPuxE%2BmqOsTUH7Rxqgi416HcLVdmORFjI16h%2FFHJZe6iEu%2BsGikmnTDkrWUXeeyGS8b%2FjpvecS1LYxmgeMp3TwWHvbl9o8TpmnBl4LJQCe2qn8VsQBGnmkGRZ2sWE8090Id0N4BgnkbxgpsKui4mGH3Btt7RSSKSXWW4rBM%2Ftph7YdV4Gt7BE7D4ZJwFzX4NxaBJ2bCQ9Y9Z1Wcp%2FQupcYdvQ5DAwPloV91IzoYgfOQd4Hsb0CKTajNudFcnJK5MNG3%2FMQGOqUBU2qbH7vlMsjxgUeKZFYpMZd%2BUmm6qs8wJAn9fKIei0goZ9dS9%2FrsGrjbLDLrgH4Ah59BHtvlnoFA5L3Uh%2FOJnesn43r5Snp8aM3n8FidsCbP4zNhVaarBkuCDURdn0tuVj1TMIkJg7PN1GE4V2lfwKCcOFe3HLcSDzRriCN%2By0GPy00afcM2a47NncJXcyCFRfe2pw1e8J0Bj4PyuwFFYKS8KjIm&X-Amz-Signature=7711090f12ab60f657e81d303a33e492df9d3dc137d1669a30f6674e1796cdef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSOX56T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCID8mpWnWOgfAQq8aI7rfEyW%2B4h1I9B0QBhgKCXj37wo1AiEAtyJQ30UywCwk4R2Wu4%2BK0ln42kXso8ZduDnlo47b5AIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAxzY19lXMT%2Bu%2F58ESrcA7YYngdfwkkTQIc08i2BFLxOyAjvpYqbeFnQvXtQirH4%2F9PNC9NxVevQ5r0m4UF9CZqFGAQEbsc0St9mCM%2FM38%2FlQBMDcbcz2ljPJ38khc9BhMl%2FdWnce81IpmpFFLq0inGSMMYxGUl6BOjO5eNvgScXRi6s01Nrmda3%2BvudfFBxkh57ZBe5j9wpV7YBOADGRGUvqeOFJnEB%2FMJYNTPizCnp%2BiARv1O2ZUdmG0PtqsFkhymUAqmCKcmkDCCFB5%2FaowoKUmPS95oK8LPyTkp5xrzMr9%2FIka4C1OucSDM7L2iXQk6wDwOazNiZnVplltLwo5oqM%2BWSoXV%2FatSAXykklJ1rQs5F8hVFUMa0ASysCwWx0gJqETHZb%2FmmEvvwIsPuxE%2BmqOsTUH7Rxqgi416HcLVdmORFjI16h%2FFHJZe6iEu%2BsGikmnTDkrWUXeeyGS8b%2FjpvecS1LYxmgeMp3TwWHvbl9o8TpmnBl4LJQCe2qn8VsQBGnmkGRZ2sWE8090Id0N4BgnkbxgpsKui4mGH3Btt7RSSKSXWW4rBM%2Ftph7YdV4Gt7BE7D4ZJwFzX4NxaBJ2bCQ9Y9Z1Wcp%2FQupcYdvQ5DAwPloV91IzoYgfOQd4Hsb0CKTajNudFcnJK5MNG3%2FMQGOqUBU2qbH7vlMsjxgUeKZFYpMZd%2BUmm6qs8wJAn9fKIei0goZ9dS9%2FrsGrjbLDLrgH4Ah59BHtvlnoFA5L3Uh%2FOJnesn43r5Snp8aM3n8FidsCbP4zNhVaarBkuCDURdn0tuVj1TMIkJg7PN1GE4V2lfwKCcOFe3HLcSDzRriCN%2By0GPy00afcM2a47NncJXcyCFRfe2pw1e8J0Bj4PyuwFFYKS8KjIm&X-Amz-Signature=19f946ac4648d45f09e46b4735f9db08c811c30e2f3133f2a051b7e0db278eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
