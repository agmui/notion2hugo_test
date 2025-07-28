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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M23PENX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDiHz%2F6uDyzX2YEBUDwU5b8%2FNot0cTpbWoLKc6lKcvaZQIhAMiz0uPkwLrpxAiz1%2FY94e%2FH%2BXv8ecey7iaZlMx9GMivKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5JaCdZHYSrsqpjoq3AO9Z9kEmS24LjSVzSwvA20rLL1K9jtAHtTl6AVpOCKD%2Fn88pex5AkslvbAz0nc4h%2BOC5bRi%2BO6ZOeFnISEPXKWXUoippd5VCJoXtcSIEBKe6L2w7clbkrf9SPwdQiSSTIr0vpeiv48XxOHeQoKeHP83D4vn8ffYBxwo57zKoZv%2F0P%2FaJLrfdxW8rzWGd5WlGK2dzzgF70FQfE6yl27U0oWn7jntKhT794bWTKNUyw0sIYBV%2BAneZ37jObZWR2kQb8Z2fwxGka%2BSazK55jl0cD2UfRBFYUtWmQPMyxlxDo9n%2FsP8n5UdjgyudL9lEW3eQsghIjwXTkRMw%2FycU4o612%2BM%2BEknPNQiMS4QSlflCPewZP5bAx6XWvHZWwFp3kuV6zcNjX4QmsYP72qV68knx6y3ETOy5EuFk0ZFYGBvTb1BHanffyMEWk6bVdy9gnwHbAM%2BSLZAmtYoRP5BQjVDwVeWLzJ0nf96j0q9UDAEj9mA8JQORv5tVootQ1fcOj4nb1nbZMOayPaPovWYBHYAwdSi1b8rvf12VYfWq6RPE9PnoZOPCXjDVgFcr94pV9fp4ZcVSGQfCwvLY%2BPKqlczvFDgCALYryhYr6HkEtNzg6jqlO2CMvlOJu40VJliSjCsjZ3EBjqkAUpVLN08QFgD5H1rwYODPIQOfyuWErbexmiA4ejVpNLiGg8MrTpKwrj1%2FkAoHfCJsf1xG3FdlSW0rw99cVEHq6FbKGzEFg6KcqDmPHLtV6NQ48C2%2BiNAA6kxEt2LlFii9zD4k%2Bfs2RY%2FLk4wPwThmART9jJCcEOjxQJ5GqmrrFX9z75LpdjoC7O%2FhDGas04vTlvPUVRaeAfaLS91C0UK5rD7aCBf&X-Amz-Signature=36186266f2b08d339a2fbec9f89ad441ec2b99b14c54712c6bfaa18cf455531d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M23PENX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDiHz%2F6uDyzX2YEBUDwU5b8%2FNot0cTpbWoLKc6lKcvaZQIhAMiz0uPkwLrpxAiz1%2FY94e%2FH%2BXv8ecey7iaZlMx9GMivKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5JaCdZHYSrsqpjoq3AO9Z9kEmS24LjSVzSwvA20rLL1K9jtAHtTl6AVpOCKD%2Fn88pex5AkslvbAz0nc4h%2BOC5bRi%2BO6ZOeFnISEPXKWXUoippd5VCJoXtcSIEBKe6L2w7clbkrf9SPwdQiSSTIr0vpeiv48XxOHeQoKeHP83D4vn8ffYBxwo57zKoZv%2F0P%2FaJLrfdxW8rzWGd5WlGK2dzzgF70FQfE6yl27U0oWn7jntKhT794bWTKNUyw0sIYBV%2BAneZ37jObZWR2kQb8Z2fwxGka%2BSazK55jl0cD2UfRBFYUtWmQPMyxlxDo9n%2FsP8n5UdjgyudL9lEW3eQsghIjwXTkRMw%2FycU4o612%2BM%2BEknPNQiMS4QSlflCPewZP5bAx6XWvHZWwFp3kuV6zcNjX4QmsYP72qV68knx6y3ETOy5EuFk0ZFYGBvTb1BHanffyMEWk6bVdy9gnwHbAM%2BSLZAmtYoRP5BQjVDwVeWLzJ0nf96j0q9UDAEj9mA8JQORv5tVootQ1fcOj4nb1nbZMOayPaPovWYBHYAwdSi1b8rvf12VYfWq6RPE9PnoZOPCXjDVgFcr94pV9fp4ZcVSGQfCwvLY%2BPKqlczvFDgCALYryhYr6HkEtNzg6jqlO2CMvlOJu40VJliSjCsjZ3EBjqkAUpVLN08QFgD5H1rwYODPIQOfyuWErbexmiA4ejVpNLiGg8MrTpKwrj1%2FkAoHfCJsf1xG3FdlSW0rw99cVEHq6FbKGzEFg6KcqDmPHLtV6NQ48C2%2BiNAA6kxEt2LlFii9zD4k%2Bfs2RY%2FLk4wPwThmART9jJCcEOjxQJ5GqmrrFX9z75LpdjoC7O%2FhDGas04vTlvPUVRaeAfaLS91C0UK5rD7aCBf&X-Amz-Signature=c2d888e19cd503bb65ab87c3fcbfa81db1d42fca0fad330b5f489f424f07b8aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M23PENX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDiHz%2F6uDyzX2YEBUDwU5b8%2FNot0cTpbWoLKc6lKcvaZQIhAMiz0uPkwLrpxAiz1%2FY94e%2FH%2BXv8ecey7iaZlMx9GMivKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5JaCdZHYSrsqpjoq3AO9Z9kEmS24LjSVzSwvA20rLL1K9jtAHtTl6AVpOCKD%2Fn88pex5AkslvbAz0nc4h%2BOC5bRi%2BO6ZOeFnISEPXKWXUoippd5VCJoXtcSIEBKe6L2w7clbkrf9SPwdQiSSTIr0vpeiv48XxOHeQoKeHP83D4vn8ffYBxwo57zKoZv%2F0P%2FaJLrfdxW8rzWGd5WlGK2dzzgF70FQfE6yl27U0oWn7jntKhT794bWTKNUyw0sIYBV%2BAneZ37jObZWR2kQb8Z2fwxGka%2BSazK55jl0cD2UfRBFYUtWmQPMyxlxDo9n%2FsP8n5UdjgyudL9lEW3eQsghIjwXTkRMw%2FycU4o612%2BM%2BEknPNQiMS4QSlflCPewZP5bAx6XWvHZWwFp3kuV6zcNjX4QmsYP72qV68knx6y3ETOy5EuFk0ZFYGBvTb1BHanffyMEWk6bVdy9gnwHbAM%2BSLZAmtYoRP5BQjVDwVeWLzJ0nf96j0q9UDAEj9mA8JQORv5tVootQ1fcOj4nb1nbZMOayPaPovWYBHYAwdSi1b8rvf12VYfWq6RPE9PnoZOPCXjDVgFcr94pV9fp4ZcVSGQfCwvLY%2BPKqlczvFDgCALYryhYr6HkEtNzg6jqlO2CMvlOJu40VJliSjCsjZ3EBjqkAUpVLN08QFgD5H1rwYODPIQOfyuWErbexmiA4ejVpNLiGg8MrTpKwrj1%2FkAoHfCJsf1xG3FdlSW0rw99cVEHq6FbKGzEFg6KcqDmPHLtV6NQ48C2%2BiNAA6kxEt2LlFii9zD4k%2Bfs2RY%2FLk4wPwThmART9jJCcEOjxQJ5GqmrrFX9z75LpdjoC7O%2FhDGas04vTlvPUVRaeAfaLS91C0UK5rD7aCBf&X-Amz-Signature=bf6fe070da6821fdca300bc9853752e2df1dadb1b4eb2b9d1e7a3569a55eb523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M23PENX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDiHz%2F6uDyzX2YEBUDwU5b8%2FNot0cTpbWoLKc6lKcvaZQIhAMiz0uPkwLrpxAiz1%2FY94e%2FH%2BXv8ecey7iaZlMx9GMivKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5JaCdZHYSrsqpjoq3AO9Z9kEmS24LjSVzSwvA20rLL1K9jtAHtTl6AVpOCKD%2Fn88pex5AkslvbAz0nc4h%2BOC5bRi%2BO6ZOeFnISEPXKWXUoippd5VCJoXtcSIEBKe6L2w7clbkrf9SPwdQiSSTIr0vpeiv48XxOHeQoKeHP83D4vn8ffYBxwo57zKoZv%2F0P%2FaJLrfdxW8rzWGd5WlGK2dzzgF70FQfE6yl27U0oWn7jntKhT794bWTKNUyw0sIYBV%2BAneZ37jObZWR2kQb8Z2fwxGka%2BSazK55jl0cD2UfRBFYUtWmQPMyxlxDo9n%2FsP8n5UdjgyudL9lEW3eQsghIjwXTkRMw%2FycU4o612%2BM%2BEknPNQiMS4QSlflCPewZP5bAx6XWvHZWwFp3kuV6zcNjX4QmsYP72qV68knx6y3ETOy5EuFk0ZFYGBvTb1BHanffyMEWk6bVdy9gnwHbAM%2BSLZAmtYoRP5BQjVDwVeWLzJ0nf96j0q9UDAEj9mA8JQORv5tVootQ1fcOj4nb1nbZMOayPaPovWYBHYAwdSi1b8rvf12VYfWq6RPE9PnoZOPCXjDVgFcr94pV9fp4ZcVSGQfCwvLY%2BPKqlczvFDgCALYryhYr6HkEtNzg6jqlO2CMvlOJu40VJliSjCsjZ3EBjqkAUpVLN08QFgD5H1rwYODPIQOfyuWErbexmiA4ejVpNLiGg8MrTpKwrj1%2FkAoHfCJsf1xG3FdlSW0rw99cVEHq6FbKGzEFg6KcqDmPHLtV6NQ48C2%2BiNAA6kxEt2LlFii9zD4k%2Bfs2RY%2FLk4wPwThmART9jJCcEOjxQJ5GqmrrFX9z75LpdjoC7O%2FhDGas04vTlvPUVRaeAfaLS91C0UK5rD7aCBf&X-Amz-Signature=c6a19355ca4bc066cfec3cb69d4c90f632ad15c61d6b436e23074eb364924358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M23PENX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDiHz%2F6uDyzX2YEBUDwU5b8%2FNot0cTpbWoLKc6lKcvaZQIhAMiz0uPkwLrpxAiz1%2FY94e%2FH%2BXv8ecey7iaZlMx9GMivKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5JaCdZHYSrsqpjoq3AO9Z9kEmS24LjSVzSwvA20rLL1K9jtAHtTl6AVpOCKD%2Fn88pex5AkslvbAz0nc4h%2BOC5bRi%2BO6ZOeFnISEPXKWXUoippd5VCJoXtcSIEBKe6L2w7clbkrf9SPwdQiSSTIr0vpeiv48XxOHeQoKeHP83D4vn8ffYBxwo57zKoZv%2F0P%2FaJLrfdxW8rzWGd5WlGK2dzzgF70FQfE6yl27U0oWn7jntKhT794bWTKNUyw0sIYBV%2BAneZ37jObZWR2kQb8Z2fwxGka%2BSazK55jl0cD2UfRBFYUtWmQPMyxlxDo9n%2FsP8n5UdjgyudL9lEW3eQsghIjwXTkRMw%2FycU4o612%2BM%2BEknPNQiMS4QSlflCPewZP5bAx6XWvHZWwFp3kuV6zcNjX4QmsYP72qV68knx6y3ETOy5EuFk0ZFYGBvTb1BHanffyMEWk6bVdy9gnwHbAM%2BSLZAmtYoRP5BQjVDwVeWLzJ0nf96j0q9UDAEj9mA8JQORv5tVootQ1fcOj4nb1nbZMOayPaPovWYBHYAwdSi1b8rvf12VYfWq6RPE9PnoZOPCXjDVgFcr94pV9fp4ZcVSGQfCwvLY%2BPKqlczvFDgCALYryhYr6HkEtNzg6jqlO2CMvlOJu40VJliSjCsjZ3EBjqkAUpVLN08QFgD5H1rwYODPIQOfyuWErbexmiA4ejVpNLiGg8MrTpKwrj1%2FkAoHfCJsf1xG3FdlSW0rw99cVEHq6FbKGzEFg6KcqDmPHLtV6NQ48C2%2BiNAA6kxEt2LlFii9zD4k%2Bfs2RY%2FLk4wPwThmART9jJCcEOjxQJ5GqmrrFX9z75LpdjoC7O%2FhDGas04vTlvPUVRaeAfaLS91C0UK5rD7aCBf&X-Amz-Signature=7138ce581f7ce035b439d7f6c910b69f0d84748aa174a61749f8b82b06ec18e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M23PENX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDiHz%2F6uDyzX2YEBUDwU5b8%2FNot0cTpbWoLKc6lKcvaZQIhAMiz0uPkwLrpxAiz1%2FY94e%2FH%2BXv8ecey7iaZlMx9GMivKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5JaCdZHYSrsqpjoq3AO9Z9kEmS24LjSVzSwvA20rLL1K9jtAHtTl6AVpOCKD%2Fn88pex5AkslvbAz0nc4h%2BOC5bRi%2BO6ZOeFnISEPXKWXUoippd5VCJoXtcSIEBKe6L2w7clbkrf9SPwdQiSSTIr0vpeiv48XxOHeQoKeHP83D4vn8ffYBxwo57zKoZv%2F0P%2FaJLrfdxW8rzWGd5WlGK2dzzgF70FQfE6yl27U0oWn7jntKhT794bWTKNUyw0sIYBV%2BAneZ37jObZWR2kQb8Z2fwxGka%2BSazK55jl0cD2UfRBFYUtWmQPMyxlxDo9n%2FsP8n5UdjgyudL9lEW3eQsghIjwXTkRMw%2FycU4o612%2BM%2BEknPNQiMS4QSlflCPewZP5bAx6XWvHZWwFp3kuV6zcNjX4QmsYP72qV68knx6y3ETOy5EuFk0ZFYGBvTb1BHanffyMEWk6bVdy9gnwHbAM%2BSLZAmtYoRP5BQjVDwVeWLzJ0nf96j0q9UDAEj9mA8JQORv5tVootQ1fcOj4nb1nbZMOayPaPovWYBHYAwdSi1b8rvf12VYfWq6RPE9PnoZOPCXjDVgFcr94pV9fp4ZcVSGQfCwvLY%2BPKqlczvFDgCALYryhYr6HkEtNzg6jqlO2CMvlOJu40VJliSjCsjZ3EBjqkAUpVLN08QFgD5H1rwYODPIQOfyuWErbexmiA4ejVpNLiGg8MrTpKwrj1%2FkAoHfCJsf1xG3FdlSW0rw99cVEHq6FbKGzEFg6KcqDmPHLtV6NQ48C2%2BiNAA6kxEt2LlFii9zD4k%2Bfs2RY%2FLk4wPwThmART9jJCcEOjxQJ5GqmrrFX9z75LpdjoC7O%2FhDGas04vTlvPUVRaeAfaLS91C0UK5rD7aCBf&X-Amz-Signature=ea1d5b39f48df2a5437ca5489d032e469690a7a7a4397180fdc0fc13b5578447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M23PENX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDiHz%2F6uDyzX2YEBUDwU5b8%2FNot0cTpbWoLKc6lKcvaZQIhAMiz0uPkwLrpxAiz1%2FY94e%2FH%2BXv8ecey7iaZlMx9GMivKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5JaCdZHYSrsqpjoq3AO9Z9kEmS24LjSVzSwvA20rLL1K9jtAHtTl6AVpOCKD%2Fn88pex5AkslvbAz0nc4h%2BOC5bRi%2BO6ZOeFnISEPXKWXUoippd5VCJoXtcSIEBKe6L2w7clbkrf9SPwdQiSSTIr0vpeiv48XxOHeQoKeHP83D4vn8ffYBxwo57zKoZv%2F0P%2FaJLrfdxW8rzWGd5WlGK2dzzgF70FQfE6yl27U0oWn7jntKhT794bWTKNUyw0sIYBV%2BAneZ37jObZWR2kQb8Z2fwxGka%2BSazK55jl0cD2UfRBFYUtWmQPMyxlxDo9n%2FsP8n5UdjgyudL9lEW3eQsghIjwXTkRMw%2FycU4o612%2BM%2BEknPNQiMS4QSlflCPewZP5bAx6XWvHZWwFp3kuV6zcNjX4QmsYP72qV68knx6y3ETOy5EuFk0ZFYGBvTb1BHanffyMEWk6bVdy9gnwHbAM%2BSLZAmtYoRP5BQjVDwVeWLzJ0nf96j0q9UDAEj9mA8JQORv5tVootQ1fcOj4nb1nbZMOayPaPovWYBHYAwdSi1b8rvf12VYfWq6RPE9PnoZOPCXjDVgFcr94pV9fp4ZcVSGQfCwvLY%2BPKqlczvFDgCALYryhYr6HkEtNzg6jqlO2CMvlOJu40VJliSjCsjZ3EBjqkAUpVLN08QFgD5H1rwYODPIQOfyuWErbexmiA4ejVpNLiGg8MrTpKwrj1%2FkAoHfCJsf1xG3FdlSW0rw99cVEHq6FbKGzEFg6KcqDmPHLtV6NQ48C2%2BiNAA6kxEt2LlFii9zD4k%2Bfs2RY%2FLk4wPwThmART9jJCcEOjxQJ5GqmrrFX9z75LpdjoC7O%2FhDGas04vTlvPUVRaeAfaLS91C0UK5rD7aCBf&X-Amz-Signature=443d8a74a996c58192ef3802db17ae9629970ebfb99e4665e85b8e9cdee4ad1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M23PENX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDiHz%2F6uDyzX2YEBUDwU5b8%2FNot0cTpbWoLKc6lKcvaZQIhAMiz0uPkwLrpxAiz1%2FY94e%2FH%2BXv8ecey7iaZlMx9GMivKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5JaCdZHYSrsqpjoq3AO9Z9kEmS24LjSVzSwvA20rLL1K9jtAHtTl6AVpOCKD%2Fn88pex5AkslvbAz0nc4h%2BOC5bRi%2BO6ZOeFnISEPXKWXUoippd5VCJoXtcSIEBKe6L2w7clbkrf9SPwdQiSSTIr0vpeiv48XxOHeQoKeHP83D4vn8ffYBxwo57zKoZv%2F0P%2FaJLrfdxW8rzWGd5WlGK2dzzgF70FQfE6yl27U0oWn7jntKhT794bWTKNUyw0sIYBV%2BAneZ37jObZWR2kQb8Z2fwxGka%2BSazK55jl0cD2UfRBFYUtWmQPMyxlxDo9n%2FsP8n5UdjgyudL9lEW3eQsghIjwXTkRMw%2FycU4o612%2BM%2BEknPNQiMS4QSlflCPewZP5bAx6XWvHZWwFp3kuV6zcNjX4QmsYP72qV68knx6y3ETOy5EuFk0ZFYGBvTb1BHanffyMEWk6bVdy9gnwHbAM%2BSLZAmtYoRP5BQjVDwVeWLzJ0nf96j0q9UDAEj9mA8JQORv5tVootQ1fcOj4nb1nbZMOayPaPovWYBHYAwdSi1b8rvf12VYfWq6RPE9PnoZOPCXjDVgFcr94pV9fp4ZcVSGQfCwvLY%2BPKqlczvFDgCALYryhYr6HkEtNzg6jqlO2CMvlOJu40VJliSjCsjZ3EBjqkAUpVLN08QFgD5H1rwYODPIQOfyuWErbexmiA4ejVpNLiGg8MrTpKwrj1%2FkAoHfCJsf1xG3FdlSW0rw99cVEHq6FbKGzEFg6KcqDmPHLtV6NQ48C2%2BiNAA6kxEt2LlFii9zD4k%2Bfs2RY%2FLk4wPwThmART9jJCcEOjxQJ5GqmrrFX9z75LpdjoC7O%2FhDGas04vTlvPUVRaeAfaLS91C0UK5rD7aCBf&X-Amz-Signature=d26c7e8b273a147109056f2bc602d1b3f7ff2899e3c612567dbb85d6e691f890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M23PENX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDiHz%2F6uDyzX2YEBUDwU5b8%2FNot0cTpbWoLKc6lKcvaZQIhAMiz0uPkwLrpxAiz1%2FY94e%2FH%2BXv8ecey7iaZlMx9GMivKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5JaCdZHYSrsqpjoq3AO9Z9kEmS24LjSVzSwvA20rLL1K9jtAHtTl6AVpOCKD%2Fn88pex5AkslvbAz0nc4h%2BOC5bRi%2BO6ZOeFnISEPXKWXUoippd5VCJoXtcSIEBKe6L2w7clbkrf9SPwdQiSSTIr0vpeiv48XxOHeQoKeHP83D4vn8ffYBxwo57zKoZv%2F0P%2FaJLrfdxW8rzWGd5WlGK2dzzgF70FQfE6yl27U0oWn7jntKhT794bWTKNUyw0sIYBV%2BAneZ37jObZWR2kQb8Z2fwxGka%2BSazK55jl0cD2UfRBFYUtWmQPMyxlxDo9n%2FsP8n5UdjgyudL9lEW3eQsghIjwXTkRMw%2FycU4o612%2BM%2BEknPNQiMS4QSlflCPewZP5bAx6XWvHZWwFp3kuV6zcNjX4QmsYP72qV68knx6y3ETOy5EuFk0ZFYGBvTb1BHanffyMEWk6bVdy9gnwHbAM%2BSLZAmtYoRP5BQjVDwVeWLzJ0nf96j0q9UDAEj9mA8JQORv5tVootQ1fcOj4nb1nbZMOayPaPovWYBHYAwdSi1b8rvf12VYfWq6RPE9PnoZOPCXjDVgFcr94pV9fp4ZcVSGQfCwvLY%2BPKqlczvFDgCALYryhYr6HkEtNzg6jqlO2CMvlOJu40VJliSjCsjZ3EBjqkAUpVLN08QFgD5H1rwYODPIQOfyuWErbexmiA4ejVpNLiGg8MrTpKwrj1%2FkAoHfCJsf1xG3FdlSW0rw99cVEHq6FbKGzEFg6KcqDmPHLtV6NQ48C2%2BiNAA6kxEt2LlFii9zD4k%2Bfs2RY%2FLk4wPwThmART9jJCcEOjxQJ5GqmrrFX9z75LpdjoC7O%2FhDGas04vTlvPUVRaeAfaLS91C0UK5rD7aCBf&X-Amz-Signature=ecdfa7c9cc4f0f9602d3f71a87ed9f5f5d7075a774504ccf1b427979a23519af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M23PENX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDiHz%2F6uDyzX2YEBUDwU5b8%2FNot0cTpbWoLKc6lKcvaZQIhAMiz0uPkwLrpxAiz1%2FY94e%2FH%2BXv8ecey7iaZlMx9GMivKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5JaCdZHYSrsqpjoq3AO9Z9kEmS24LjSVzSwvA20rLL1K9jtAHtTl6AVpOCKD%2Fn88pex5AkslvbAz0nc4h%2BOC5bRi%2BO6ZOeFnISEPXKWXUoippd5VCJoXtcSIEBKe6L2w7clbkrf9SPwdQiSSTIr0vpeiv48XxOHeQoKeHP83D4vn8ffYBxwo57zKoZv%2F0P%2FaJLrfdxW8rzWGd5WlGK2dzzgF70FQfE6yl27U0oWn7jntKhT794bWTKNUyw0sIYBV%2BAneZ37jObZWR2kQb8Z2fwxGka%2BSazK55jl0cD2UfRBFYUtWmQPMyxlxDo9n%2FsP8n5UdjgyudL9lEW3eQsghIjwXTkRMw%2FycU4o612%2BM%2BEknPNQiMS4QSlflCPewZP5bAx6XWvHZWwFp3kuV6zcNjX4QmsYP72qV68knx6y3ETOy5EuFk0ZFYGBvTb1BHanffyMEWk6bVdy9gnwHbAM%2BSLZAmtYoRP5BQjVDwVeWLzJ0nf96j0q9UDAEj9mA8JQORv5tVootQ1fcOj4nb1nbZMOayPaPovWYBHYAwdSi1b8rvf12VYfWq6RPE9PnoZOPCXjDVgFcr94pV9fp4ZcVSGQfCwvLY%2BPKqlczvFDgCALYryhYr6HkEtNzg6jqlO2CMvlOJu40VJliSjCsjZ3EBjqkAUpVLN08QFgD5H1rwYODPIQOfyuWErbexmiA4ejVpNLiGg8MrTpKwrj1%2FkAoHfCJsf1xG3FdlSW0rw99cVEHq6FbKGzEFg6KcqDmPHLtV6NQ48C2%2BiNAA6kxEt2LlFii9zD4k%2Bfs2RY%2FLk4wPwThmART9jJCcEOjxQJ5GqmrrFX9z75LpdjoC7O%2FhDGas04vTlvPUVRaeAfaLS91C0UK5rD7aCBf&X-Amz-Signature=f288b24027918186e1f8374149ed48ce371a92c7d883fbf67f81afd5c064e912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M23PENX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDiHz%2F6uDyzX2YEBUDwU5b8%2FNot0cTpbWoLKc6lKcvaZQIhAMiz0uPkwLrpxAiz1%2FY94e%2FH%2BXv8ecey7iaZlMx9GMivKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5JaCdZHYSrsqpjoq3AO9Z9kEmS24LjSVzSwvA20rLL1K9jtAHtTl6AVpOCKD%2Fn88pex5AkslvbAz0nc4h%2BOC5bRi%2BO6ZOeFnISEPXKWXUoippd5VCJoXtcSIEBKe6L2w7clbkrf9SPwdQiSSTIr0vpeiv48XxOHeQoKeHP83D4vn8ffYBxwo57zKoZv%2F0P%2FaJLrfdxW8rzWGd5WlGK2dzzgF70FQfE6yl27U0oWn7jntKhT794bWTKNUyw0sIYBV%2BAneZ37jObZWR2kQb8Z2fwxGka%2BSazK55jl0cD2UfRBFYUtWmQPMyxlxDo9n%2FsP8n5UdjgyudL9lEW3eQsghIjwXTkRMw%2FycU4o612%2BM%2BEknPNQiMS4QSlflCPewZP5bAx6XWvHZWwFp3kuV6zcNjX4QmsYP72qV68knx6y3ETOy5EuFk0ZFYGBvTb1BHanffyMEWk6bVdy9gnwHbAM%2BSLZAmtYoRP5BQjVDwVeWLzJ0nf96j0q9UDAEj9mA8JQORv5tVootQ1fcOj4nb1nbZMOayPaPovWYBHYAwdSi1b8rvf12VYfWq6RPE9PnoZOPCXjDVgFcr94pV9fp4ZcVSGQfCwvLY%2BPKqlczvFDgCALYryhYr6HkEtNzg6jqlO2CMvlOJu40VJliSjCsjZ3EBjqkAUpVLN08QFgD5H1rwYODPIQOfyuWErbexmiA4ejVpNLiGg8MrTpKwrj1%2FkAoHfCJsf1xG3FdlSW0rw99cVEHq6FbKGzEFg6KcqDmPHLtV6NQ48C2%2BiNAA6kxEt2LlFii9zD4k%2Bfs2RY%2FLk4wPwThmART9jJCcEOjxQJ5GqmrrFX9z75LpdjoC7O%2FhDGas04vTlvPUVRaeAfaLS91C0UK5rD7aCBf&X-Amz-Signature=275aef63ca644a1a1c54347430eda282debacdad814da25d386346ea53dba865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M23PENX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDiHz%2F6uDyzX2YEBUDwU5b8%2FNot0cTpbWoLKc6lKcvaZQIhAMiz0uPkwLrpxAiz1%2FY94e%2FH%2BXv8ecey7iaZlMx9GMivKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5JaCdZHYSrsqpjoq3AO9Z9kEmS24LjSVzSwvA20rLL1K9jtAHtTl6AVpOCKD%2Fn88pex5AkslvbAz0nc4h%2BOC5bRi%2BO6ZOeFnISEPXKWXUoippd5VCJoXtcSIEBKe6L2w7clbkrf9SPwdQiSSTIr0vpeiv48XxOHeQoKeHP83D4vn8ffYBxwo57zKoZv%2F0P%2FaJLrfdxW8rzWGd5WlGK2dzzgF70FQfE6yl27U0oWn7jntKhT794bWTKNUyw0sIYBV%2BAneZ37jObZWR2kQb8Z2fwxGka%2BSazK55jl0cD2UfRBFYUtWmQPMyxlxDo9n%2FsP8n5UdjgyudL9lEW3eQsghIjwXTkRMw%2FycU4o612%2BM%2BEknPNQiMS4QSlflCPewZP5bAx6XWvHZWwFp3kuV6zcNjX4QmsYP72qV68knx6y3ETOy5EuFk0ZFYGBvTb1BHanffyMEWk6bVdy9gnwHbAM%2BSLZAmtYoRP5BQjVDwVeWLzJ0nf96j0q9UDAEj9mA8JQORv5tVootQ1fcOj4nb1nbZMOayPaPovWYBHYAwdSi1b8rvf12VYfWq6RPE9PnoZOPCXjDVgFcr94pV9fp4ZcVSGQfCwvLY%2BPKqlczvFDgCALYryhYr6HkEtNzg6jqlO2CMvlOJu40VJliSjCsjZ3EBjqkAUpVLN08QFgD5H1rwYODPIQOfyuWErbexmiA4ejVpNLiGg8MrTpKwrj1%2FkAoHfCJsf1xG3FdlSW0rw99cVEHq6FbKGzEFg6KcqDmPHLtV6NQ48C2%2BiNAA6kxEt2LlFii9zD4k%2Bfs2RY%2FLk4wPwThmART9jJCcEOjxQJ5GqmrrFX9z75LpdjoC7O%2FhDGas04vTlvPUVRaeAfaLS91C0UK5rD7aCBf&X-Amz-Signature=dcb84cc447f5c3f49a413d1275f7116c072b1fe10123c130f4fc6c0c7d3c8967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M23PENX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDiHz%2F6uDyzX2YEBUDwU5b8%2FNot0cTpbWoLKc6lKcvaZQIhAMiz0uPkwLrpxAiz1%2FY94e%2FH%2BXv8ecey7iaZlMx9GMivKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5JaCdZHYSrsqpjoq3AO9Z9kEmS24LjSVzSwvA20rLL1K9jtAHtTl6AVpOCKD%2Fn88pex5AkslvbAz0nc4h%2BOC5bRi%2BO6ZOeFnISEPXKWXUoippd5VCJoXtcSIEBKe6L2w7clbkrf9SPwdQiSSTIr0vpeiv48XxOHeQoKeHP83D4vn8ffYBxwo57zKoZv%2F0P%2FaJLrfdxW8rzWGd5WlGK2dzzgF70FQfE6yl27U0oWn7jntKhT794bWTKNUyw0sIYBV%2BAneZ37jObZWR2kQb8Z2fwxGka%2BSazK55jl0cD2UfRBFYUtWmQPMyxlxDo9n%2FsP8n5UdjgyudL9lEW3eQsghIjwXTkRMw%2FycU4o612%2BM%2BEknPNQiMS4QSlflCPewZP5bAx6XWvHZWwFp3kuV6zcNjX4QmsYP72qV68knx6y3ETOy5EuFk0ZFYGBvTb1BHanffyMEWk6bVdy9gnwHbAM%2BSLZAmtYoRP5BQjVDwVeWLzJ0nf96j0q9UDAEj9mA8JQORv5tVootQ1fcOj4nb1nbZMOayPaPovWYBHYAwdSi1b8rvf12VYfWq6RPE9PnoZOPCXjDVgFcr94pV9fp4ZcVSGQfCwvLY%2BPKqlczvFDgCALYryhYr6HkEtNzg6jqlO2CMvlOJu40VJliSjCsjZ3EBjqkAUpVLN08QFgD5H1rwYODPIQOfyuWErbexmiA4ejVpNLiGg8MrTpKwrj1%2FkAoHfCJsf1xG3FdlSW0rw99cVEHq6FbKGzEFg6KcqDmPHLtV6NQ48C2%2BiNAA6kxEt2LlFii9zD4k%2Bfs2RY%2FLk4wPwThmART9jJCcEOjxQJ5GqmrrFX9z75LpdjoC7O%2FhDGas04vTlvPUVRaeAfaLS91C0UK5rD7aCBf&X-Amz-Signature=0bbf7e64c7e7571de3c3a0a4cf19d9cff31c3f01883ea42151db268feefac088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M23PENX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDiHz%2F6uDyzX2YEBUDwU5b8%2FNot0cTpbWoLKc6lKcvaZQIhAMiz0uPkwLrpxAiz1%2FY94e%2FH%2BXv8ecey7iaZlMx9GMivKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5JaCdZHYSrsqpjoq3AO9Z9kEmS24LjSVzSwvA20rLL1K9jtAHtTl6AVpOCKD%2Fn88pex5AkslvbAz0nc4h%2BOC5bRi%2BO6ZOeFnISEPXKWXUoippd5VCJoXtcSIEBKe6L2w7clbkrf9SPwdQiSSTIr0vpeiv48XxOHeQoKeHP83D4vn8ffYBxwo57zKoZv%2F0P%2FaJLrfdxW8rzWGd5WlGK2dzzgF70FQfE6yl27U0oWn7jntKhT794bWTKNUyw0sIYBV%2BAneZ37jObZWR2kQb8Z2fwxGka%2BSazK55jl0cD2UfRBFYUtWmQPMyxlxDo9n%2FsP8n5UdjgyudL9lEW3eQsghIjwXTkRMw%2FycU4o612%2BM%2BEknPNQiMS4QSlflCPewZP5bAx6XWvHZWwFp3kuV6zcNjX4QmsYP72qV68knx6y3ETOy5EuFk0ZFYGBvTb1BHanffyMEWk6bVdy9gnwHbAM%2BSLZAmtYoRP5BQjVDwVeWLzJ0nf96j0q9UDAEj9mA8JQORv5tVootQ1fcOj4nb1nbZMOayPaPovWYBHYAwdSi1b8rvf12VYfWq6RPE9PnoZOPCXjDVgFcr94pV9fp4ZcVSGQfCwvLY%2BPKqlczvFDgCALYryhYr6HkEtNzg6jqlO2CMvlOJu40VJliSjCsjZ3EBjqkAUpVLN08QFgD5H1rwYODPIQOfyuWErbexmiA4ejVpNLiGg8MrTpKwrj1%2FkAoHfCJsf1xG3FdlSW0rw99cVEHq6FbKGzEFg6KcqDmPHLtV6NQ48C2%2BiNAA6kxEt2LlFii9zD4k%2Bfs2RY%2FLk4wPwThmART9jJCcEOjxQJ5GqmrrFX9z75LpdjoC7O%2FhDGas04vTlvPUVRaeAfaLS91C0UK5rD7aCBf&X-Amz-Signature=57b6a785939d87d03105e6d3ada2bb4c3532979d8fb97c16d78256d782e72ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6DKYNY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIF8jjTPU%2BuatjGFKguFYDz7stqQmE7VqVRC4VYtB%2FGHMAiEAqgnPYiqVsuU%2BFC1A7E0FEun2gA7LL0ubTISGo334XoEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuVwHvWskkkYfSRCCrcA0canedWkEsXfzxBy849UNRvitlJwWqLdgU%2F3UGTfN5cjGnaRXdUJWljxx8iyU%2FSDoLMDAB6c2ykM15AWzadtEquvndPqXgi3bcQato41FvP0CZ%2FInqd2PQwf69OXdg9fKtahgU63cjTwLuIwY4vsWdpTsuW8BPM%2FNQ7KGvy3Xw%2FmPhsYISQc0XUEvGEookTugyc5QTFvjspo2UlRhPcXqvuiZM%2FQhxmjjn4dhC%2B%2FM5Fy2P0XCJ3KrW42jP31JwiBxRf1H7uz6vX%2FU3xCqB76i5lkOu9ux15IiZqV%2F4bu%2FwT9cAVqKIqdgVQqK9KOqKaEhfiJMFqS2OAjucZALHdsvsDbPCcXM%2BOogq5rjRr5YVHTvp36ziTRfAgw2%2B2pj9AlfzxfQJeK8nLpSlsFi0I8K6%2BBdP1XFxpkYY334ZXXD3kbvry8nyutUiaMm%2FC6mcsRbFcZemHn5DcQMjltfy7rSte17njLgq%2BSL8R8PLN7FKqpI7MtMbOw0PmcYtCoZL2J9Zjdx%2FcnhoaXu%2B9gO1yK4s%2BFP8DYLljFYI%2FnJCdeEeuIbOGccYhMPMVv%2Bj3qhtqYBZJizHXqOangZamBFSz%2BWOiPlViF%2B55fuSKIAM4FgjRNBNLhGJTB1LDqWJQMIOOncQGOqUBiMqXKyZ7AFb0QX9vc7dC3K%2FrliriCOdWjZqDayY%2FxCKv6k7TkBZKrTk4HxyrbFziQZolAcdfSVukrQTEgd3QyB3X6b7r5wdkx9omfyncYafVA83IWc%2BH2yfRhwvDMY%2BIAC2zR%2Bl%2BocX0iNuXSEVPi5cZ0UPoLZ9yc5J0V5awmKNaLkl4tuxQsh2Rr7choAoFnvB8C3nYeNGVDP4q3dcekueWOHb8&X-Amz-Signature=3cc275efd2d8c283a5f7df75fe4dd8a122f6058b6437a201604c0cec7f0aa6cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6DKYNY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIF8jjTPU%2BuatjGFKguFYDz7stqQmE7VqVRC4VYtB%2FGHMAiEAqgnPYiqVsuU%2BFC1A7E0FEun2gA7LL0ubTISGo334XoEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuVwHvWskkkYfSRCCrcA0canedWkEsXfzxBy849UNRvitlJwWqLdgU%2F3UGTfN5cjGnaRXdUJWljxx8iyU%2FSDoLMDAB6c2ykM15AWzadtEquvndPqXgi3bcQato41FvP0CZ%2FInqd2PQwf69OXdg9fKtahgU63cjTwLuIwY4vsWdpTsuW8BPM%2FNQ7KGvy3Xw%2FmPhsYISQc0XUEvGEookTugyc5QTFvjspo2UlRhPcXqvuiZM%2FQhxmjjn4dhC%2B%2FM5Fy2P0XCJ3KrW42jP31JwiBxRf1H7uz6vX%2FU3xCqB76i5lkOu9ux15IiZqV%2F4bu%2FwT9cAVqKIqdgVQqK9KOqKaEhfiJMFqS2OAjucZALHdsvsDbPCcXM%2BOogq5rjRr5YVHTvp36ziTRfAgw2%2B2pj9AlfzxfQJeK8nLpSlsFi0I8K6%2BBdP1XFxpkYY334ZXXD3kbvry8nyutUiaMm%2FC6mcsRbFcZemHn5DcQMjltfy7rSte17njLgq%2BSL8R8PLN7FKqpI7MtMbOw0PmcYtCoZL2J9Zjdx%2FcnhoaXu%2B9gO1yK4s%2BFP8DYLljFYI%2FnJCdeEeuIbOGccYhMPMVv%2Bj3qhtqYBZJizHXqOangZamBFSz%2BWOiPlViF%2B55fuSKIAM4FgjRNBNLhGJTB1LDqWJQMIOOncQGOqUBiMqXKyZ7AFb0QX9vc7dC3K%2FrliriCOdWjZqDayY%2FxCKv6k7TkBZKrTk4HxyrbFziQZolAcdfSVukrQTEgd3QyB3X6b7r5wdkx9omfyncYafVA83IWc%2BH2yfRhwvDMY%2BIAC2zR%2Bl%2BocX0iNuXSEVPi5cZ0UPoLZ9yc5J0V5awmKNaLkl4tuxQsh2Rr7choAoFnvB8C3nYeNGVDP4q3dcekueWOHb8&X-Amz-Signature=cc7cdd6ef1c2c1d2a367f46fa797e4ad1a5595da51f3e176c7f71a91b7972561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6DKYNY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIF8jjTPU%2BuatjGFKguFYDz7stqQmE7VqVRC4VYtB%2FGHMAiEAqgnPYiqVsuU%2BFC1A7E0FEun2gA7LL0ubTISGo334XoEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuVwHvWskkkYfSRCCrcA0canedWkEsXfzxBy849UNRvitlJwWqLdgU%2F3UGTfN5cjGnaRXdUJWljxx8iyU%2FSDoLMDAB6c2ykM15AWzadtEquvndPqXgi3bcQato41FvP0CZ%2FInqd2PQwf69OXdg9fKtahgU63cjTwLuIwY4vsWdpTsuW8BPM%2FNQ7KGvy3Xw%2FmPhsYISQc0XUEvGEookTugyc5QTFvjspo2UlRhPcXqvuiZM%2FQhxmjjn4dhC%2B%2FM5Fy2P0XCJ3KrW42jP31JwiBxRf1H7uz6vX%2FU3xCqB76i5lkOu9ux15IiZqV%2F4bu%2FwT9cAVqKIqdgVQqK9KOqKaEhfiJMFqS2OAjucZALHdsvsDbPCcXM%2BOogq5rjRr5YVHTvp36ziTRfAgw2%2B2pj9AlfzxfQJeK8nLpSlsFi0I8K6%2BBdP1XFxpkYY334ZXXD3kbvry8nyutUiaMm%2FC6mcsRbFcZemHn5DcQMjltfy7rSte17njLgq%2BSL8R8PLN7FKqpI7MtMbOw0PmcYtCoZL2J9Zjdx%2FcnhoaXu%2B9gO1yK4s%2BFP8DYLljFYI%2FnJCdeEeuIbOGccYhMPMVv%2Bj3qhtqYBZJizHXqOangZamBFSz%2BWOiPlViF%2B55fuSKIAM4FgjRNBNLhGJTB1LDqWJQMIOOncQGOqUBiMqXKyZ7AFb0QX9vc7dC3K%2FrliriCOdWjZqDayY%2FxCKv6k7TkBZKrTk4HxyrbFziQZolAcdfSVukrQTEgd3QyB3X6b7r5wdkx9omfyncYafVA83IWc%2BH2yfRhwvDMY%2BIAC2zR%2Bl%2BocX0iNuXSEVPi5cZ0UPoLZ9yc5J0V5awmKNaLkl4tuxQsh2Rr7choAoFnvB8C3nYeNGVDP4q3dcekueWOHb8&X-Amz-Signature=3598e0af4894658a975fb394fb8d5eece21604e96f588675497b3441cbc9c6c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6DKYNY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIF8jjTPU%2BuatjGFKguFYDz7stqQmE7VqVRC4VYtB%2FGHMAiEAqgnPYiqVsuU%2BFC1A7E0FEun2gA7LL0ubTISGo334XoEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuVwHvWskkkYfSRCCrcA0canedWkEsXfzxBy849UNRvitlJwWqLdgU%2F3UGTfN5cjGnaRXdUJWljxx8iyU%2FSDoLMDAB6c2ykM15AWzadtEquvndPqXgi3bcQato41FvP0CZ%2FInqd2PQwf69OXdg9fKtahgU63cjTwLuIwY4vsWdpTsuW8BPM%2FNQ7KGvy3Xw%2FmPhsYISQc0XUEvGEookTugyc5QTFvjspo2UlRhPcXqvuiZM%2FQhxmjjn4dhC%2B%2FM5Fy2P0XCJ3KrW42jP31JwiBxRf1H7uz6vX%2FU3xCqB76i5lkOu9ux15IiZqV%2F4bu%2FwT9cAVqKIqdgVQqK9KOqKaEhfiJMFqS2OAjucZALHdsvsDbPCcXM%2BOogq5rjRr5YVHTvp36ziTRfAgw2%2B2pj9AlfzxfQJeK8nLpSlsFi0I8K6%2BBdP1XFxpkYY334ZXXD3kbvry8nyutUiaMm%2FC6mcsRbFcZemHn5DcQMjltfy7rSte17njLgq%2BSL8R8PLN7FKqpI7MtMbOw0PmcYtCoZL2J9Zjdx%2FcnhoaXu%2B9gO1yK4s%2BFP8DYLljFYI%2FnJCdeEeuIbOGccYhMPMVv%2Bj3qhtqYBZJizHXqOangZamBFSz%2BWOiPlViF%2B55fuSKIAM4FgjRNBNLhGJTB1LDqWJQMIOOncQGOqUBiMqXKyZ7AFb0QX9vc7dC3K%2FrliriCOdWjZqDayY%2FxCKv6k7TkBZKrTk4HxyrbFziQZolAcdfSVukrQTEgd3QyB3X6b7r5wdkx9omfyncYafVA83IWc%2BH2yfRhwvDMY%2BIAC2zR%2Bl%2BocX0iNuXSEVPi5cZ0UPoLZ9yc5J0V5awmKNaLkl4tuxQsh2Rr7choAoFnvB8C3nYeNGVDP4q3dcekueWOHb8&X-Amz-Signature=a47add7db4f38f7ef0431b4004e9a8372757f7922673b92f6784b3fe410024c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6DKYNY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIF8jjTPU%2BuatjGFKguFYDz7stqQmE7VqVRC4VYtB%2FGHMAiEAqgnPYiqVsuU%2BFC1A7E0FEun2gA7LL0ubTISGo334XoEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuVwHvWskkkYfSRCCrcA0canedWkEsXfzxBy849UNRvitlJwWqLdgU%2F3UGTfN5cjGnaRXdUJWljxx8iyU%2FSDoLMDAB6c2ykM15AWzadtEquvndPqXgi3bcQato41FvP0CZ%2FInqd2PQwf69OXdg9fKtahgU63cjTwLuIwY4vsWdpTsuW8BPM%2FNQ7KGvy3Xw%2FmPhsYISQc0XUEvGEookTugyc5QTFvjspo2UlRhPcXqvuiZM%2FQhxmjjn4dhC%2B%2FM5Fy2P0XCJ3KrW42jP31JwiBxRf1H7uz6vX%2FU3xCqB76i5lkOu9ux15IiZqV%2F4bu%2FwT9cAVqKIqdgVQqK9KOqKaEhfiJMFqS2OAjucZALHdsvsDbPCcXM%2BOogq5rjRr5YVHTvp36ziTRfAgw2%2B2pj9AlfzxfQJeK8nLpSlsFi0I8K6%2BBdP1XFxpkYY334ZXXD3kbvry8nyutUiaMm%2FC6mcsRbFcZemHn5DcQMjltfy7rSte17njLgq%2BSL8R8PLN7FKqpI7MtMbOw0PmcYtCoZL2J9Zjdx%2FcnhoaXu%2B9gO1yK4s%2BFP8DYLljFYI%2FnJCdeEeuIbOGccYhMPMVv%2Bj3qhtqYBZJizHXqOangZamBFSz%2BWOiPlViF%2B55fuSKIAM4FgjRNBNLhGJTB1LDqWJQMIOOncQGOqUBiMqXKyZ7AFb0QX9vc7dC3K%2FrliriCOdWjZqDayY%2FxCKv6k7TkBZKrTk4HxyrbFziQZolAcdfSVukrQTEgd3QyB3X6b7r5wdkx9omfyncYafVA83IWc%2BH2yfRhwvDMY%2BIAC2zR%2Bl%2BocX0iNuXSEVPi5cZ0UPoLZ9yc5J0V5awmKNaLkl4tuxQsh2Rr7choAoFnvB8C3nYeNGVDP4q3dcekueWOHb8&X-Amz-Signature=4aff900aeb7dc20c35897700ea3c9b77d0dd4b6f978bfbd9bb21d3b11de5cb76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6DKYNY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIF8jjTPU%2BuatjGFKguFYDz7stqQmE7VqVRC4VYtB%2FGHMAiEAqgnPYiqVsuU%2BFC1A7E0FEun2gA7LL0ubTISGo334XoEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuVwHvWskkkYfSRCCrcA0canedWkEsXfzxBy849UNRvitlJwWqLdgU%2F3UGTfN5cjGnaRXdUJWljxx8iyU%2FSDoLMDAB6c2ykM15AWzadtEquvndPqXgi3bcQato41FvP0CZ%2FInqd2PQwf69OXdg9fKtahgU63cjTwLuIwY4vsWdpTsuW8BPM%2FNQ7KGvy3Xw%2FmPhsYISQc0XUEvGEookTugyc5QTFvjspo2UlRhPcXqvuiZM%2FQhxmjjn4dhC%2B%2FM5Fy2P0XCJ3KrW42jP31JwiBxRf1H7uz6vX%2FU3xCqB76i5lkOu9ux15IiZqV%2F4bu%2FwT9cAVqKIqdgVQqK9KOqKaEhfiJMFqS2OAjucZALHdsvsDbPCcXM%2BOogq5rjRr5YVHTvp36ziTRfAgw2%2B2pj9AlfzxfQJeK8nLpSlsFi0I8K6%2BBdP1XFxpkYY334ZXXD3kbvry8nyutUiaMm%2FC6mcsRbFcZemHn5DcQMjltfy7rSte17njLgq%2BSL8R8PLN7FKqpI7MtMbOw0PmcYtCoZL2J9Zjdx%2FcnhoaXu%2B9gO1yK4s%2BFP8DYLljFYI%2FnJCdeEeuIbOGccYhMPMVv%2Bj3qhtqYBZJizHXqOangZamBFSz%2BWOiPlViF%2B55fuSKIAM4FgjRNBNLhGJTB1LDqWJQMIOOncQGOqUBiMqXKyZ7AFb0QX9vc7dC3K%2FrliriCOdWjZqDayY%2FxCKv6k7TkBZKrTk4HxyrbFziQZolAcdfSVukrQTEgd3QyB3X6b7r5wdkx9omfyncYafVA83IWc%2BH2yfRhwvDMY%2BIAC2zR%2Bl%2BocX0iNuXSEVPi5cZ0UPoLZ9yc5J0V5awmKNaLkl4tuxQsh2Rr7choAoFnvB8C3nYeNGVDP4q3dcekueWOHb8&X-Amz-Signature=0067a327ebeccef616162ce02764680a734e8dc3bf8184234f9c7908764c2111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
