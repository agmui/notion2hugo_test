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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHFRA53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyZu6WKEyV2VqdJmsOd3noh0ej4pd%2Byx9YxdMFxL3pgIgecJoqCp0fwqutJp%2Bt1SyVIDMKhvGjodGVxXlRLxx4aMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKrUqke8O%2Brd25WhEyrcA3K30Zxg018hGDYE3iyOiFDsJTkVewN4j65YvP6KXqnM0k2Wxj3M3WgCoaQD569kJIzPU8YR8KbV7buoN8%2FNRqHV4TqvAzLPmSmtRhDit5C9n%2FWhdk4YWxncxmYmzh2qbDZBV3zz1Q1HefU1rHVx4x4afUNw5U6MV29%2Fs3WOuAk2uElaqO%2FsXJRmK7uqcmq9mJ4L%2B6%2FhTwWMfZr%2B1QyHhsZayIQUEncsoeBAImpRhy5K4RErCjywshBiPxTnKYFny9zzaSIKJ41gq4aCUyQAgMOORx%2FG5unvDrLzfj8SJlmmMhDOUbV192lLPfYSAlpUXca5%2BNQtknia0EFx4EWbi4OLfhZRiM%2FZ5D49yi4ktmyxDzM8PFYjWgXuyzQV4iLEwPxT7qEAeFjwfdyHyV7%2B8DDeJ2n1%2BkmEcl9qCvOBHeK8KPR2FoSiYrQDdSSoOWFQSECLLavBy%2Bi6%2BqgKN0q1cyl0nNZ%2BSk746dPRS5mnBoCy9tkceqJMX8AzNMr7wZFwZBm2MjRj5LwMxr9%2F3EV0psXTtV9mxdVfw6lxKVPJOarSMmxLj%2B3SF7X7XozuozO6n%2BGYf%2F9zL%2BgwldN9OyQ4WGoSDAKbJVEnURsNndsinZ%2BS%2Bpw9hbRrQ%2Fs4ZQyKMKWz8sQGOqUBuWn5BTnXIqe%2B2eixXl1bfQevigbCG8fyXSxa6cLEulKyum2xukuufolPVjsW0sOGs3ogUGccBvv24N5BUJoVe02a1uairosrWhdVbw6b%2Fe%2Fz7QE%2FnC846OeRsJIAcrcjKqCecjStBFYjeklk75J64r6VCaKJYdy67GphjkLGy5vAV%2BUeC5WWp8vBNKGj%2Fkt6anSnEcpPwFxL6dxXK5%2F8b3tubGfX&X-Amz-Signature=18d31e5f25afdec5105369cc01e562ff1bf4e263749ce1e7c714a85dd378fe0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHFRA53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyZu6WKEyV2VqdJmsOd3noh0ej4pd%2Byx9YxdMFxL3pgIgecJoqCp0fwqutJp%2Bt1SyVIDMKhvGjodGVxXlRLxx4aMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKrUqke8O%2Brd25WhEyrcA3K30Zxg018hGDYE3iyOiFDsJTkVewN4j65YvP6KXqnM0k2Wxj3M3WgCoaQD569kJIzPU8YR8KbV7buoN8%2FNRqHV4TqvAzLPmSmtRhDit5C9n%2FWhdk4YWxncxmYmzh2qbDZBV3zz1Q1HefU1rHVx4x4afUNw5U6MV29%2Fs3WOuAk2uElaqO%2FsXJRmK7uqcmq9mJ4L%2B6%2FhTwWMfZr%2B1QyHhsZayIQUEncsoeBAImpRhy5K4RErCjywshBiPxTnKYFny9zzaSIKJ41gq4aCUyQAgMOORx%2FG5unvDrLzfj8SJlmmMhDOUbV192lLPfYSAlpUXca5%2BNQtknia0EFx4EWbi4OLfhZRiM%2FZ5D49yi4ktmyxDzM8PFYjWgXuyzQV4iLEwPxT7qEAeFjwfdyHyV7%2B8DDeJ2n1%2BkmEcl9qCvOBHeK8KPR2FoSiYrQDdSSoOWFQSECLLavBy%2Bi6%2BqgKN0q1cyl0nNZ%2BSk746dPRS5mnBoCy9tkceqJMX8AzNMr7wZFwZBm2MjRj5LwMxr9%2F3EV0psXTtV9mxdVfw6lxKVPJOarSMmxLj%2B3SF7X7XozuozO6n%2BGYf%2F9zL%2BgwldN9OyQ4WGoSDAKbJVEnURsNndsinZ%2BS%2Bpw9hbRrQ%2Fs4ZQyKMKWz8sQGOqUBuWn5BTnXIqe%2B2eixXl1bfQevigbCG8fyXSxa6cLEulKyum2xukuufolPVjsW0sOGs3ogUGccBvv24N5BUJoVe02a1uairosrWhdVbw6b%2Fe%2Fz7QE%2FnC846OeRsJIAcrcjKqCecjStBFYjeklk75J64r6VCaKJYdy67GphjkLGy5vAV%2BUeC5WWp8vBNKGj%2Fkt6anSnEcpPwFxL6dxXK5%2F8b3tubGfX&X-Amz-Signature=4623918fee04e075489c9727079fea2594068139624ddf1b809ffa25a9ddf7d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHFRA53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyZu6WKEyV2VqdJmsOd3noh0ej4pd%2Byx9YxdMFxL3pgIgecJoqCp0fwqutJp%2Bt1SyVIDMKhvGjodGVxXlRLxx4aMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKrUqke8O%2Brd25WhEyrcA3K30Zxg018hGDYE3iyOiFDsJTkVewN4j65YvP6KXqnM0k2Wxj3M3WgCoaQD569kJIzPU8YR8KbV7buoN8%2FNRqHV4TqvAzLPmSmtRhDit5C9n%2FWhdk4YWxncxmYmzh2qbDZBV3zz1Q1HefU1rHVx4x4afUNw5U6MV29%2Fs3WOuAk2uElaqO%2FsXJRmK7uqcmq9mJ4L%2B6%2FhTwWMfZr%2B1QyHhsZayIQUEncsoeBAImpRhy5K4RErCjywshBiPxTnKYFny9zzaSIKJ41gq4aCUyQAgMOORx%2FG5unvDrLzfj8SJlmmMhDOUbV192lLPfYSAlpUXca5%2BNQtknia0EFx4EWbi4OLfhZRiM%2FZ5D49yi4ktmyxDzM8PFYjWgXuyzQV4iLEwPxT7qEAeFjwfdyHyV7%2B8DDeJ2n1%2BkmEcl9qCvOBHeK8KPR2FoSiYrQDdSSoOWFQSECLLavBy%2Bi6%2BqgKN0q1cyl0nNZ%2BSk746dPRS5mnBoCy9tkceqJMX8AzNMr7wZFwZBm2MjRj5LwMxr9%2F3EV0psXTtV9mxdVfw6lxKVPJOarSMmxLj%2B3SF7X7XozuozO6n%2BGYf%2F9zL%2BgwldN9OyQ4WGoSDAKbJVEnURsNndsinZ%2BS%2Bpw9hbRrQ%2Fs4ZQyKMKWz8sQGOqUBuWn5BTnXIqe%2B2eixXl1bfQevigbCG8fyXSxa6cLEulKyum2xukuufolPVjsW0sOGs3ogUGccBvv24N5BUJoVe02a1uairosrWhdVbw6b%2Fe%2Fz7QE%2FnC846OeRsJIAcrcjKqCecjStBFYjeklk75J64r6VCaKJYdy67GphjkLGy5vAV%2BUeC5WWp8vBNKGj%2Fkt6anSnEcpPwFxL6dxXK5%2F8b3tubGfX&X-Amz-Signature=3db5ff5f71b39d43baccb0e5aeee7ebb4704e8993eb5015b30c8b7287825e0b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHFRA53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyZu6WKEyV2VqdJmsOd3noh0ej4pd%2Byx9YxdMFxL3pgIgecJoqCp0fwqutJp%2Bt1SyVIDMKhvGjodGVxXlRLxx4aMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKrUqke8O%2Brd25WhEyrcA3K30Zxg018hGDYE3iyOiFDsJTkVewN4j65YvP6KXqnM0k2Wxj3M3WgCoaQD569kJIzPU8YR8KbV7buoN8%2FNRqHV4TqvAzLPmSmtRhDit5C9n%2FWhdk4YWxncxmYmzh2qbDZBV3zz1Q1HefU1rHVx4x4afUNw5U6MV29%2Fs3WOuAk2uElaqO%2FsXJRmK7uqcmq9mJ4L%2B6%2FhTwWMfZr%2B1QyHhsZayIQUEncsoeBAImpRhy5K4RErCjywshBiPxTnKYFny9zzaSIKJ41gq4aCUyQAgMOORx%2FG5unvDrLzfj8SJlmmMhDOUbV192lLPfYSAlpUXca5%2BNQtknia0EFx4EWbi4OLfhZRiM%2FZ5D49yi4ktmyxDzM8PFYjWgXuyzQV4iLEwPxT7qEAeFjwfdyHyV7%2B8DDeJ2n1%2BkmEcl9qCvOBHeK8KPR2FoSiYrQDdSSoOWFQSECLLavBy%2Bi6%2BqgKN0q1cyl0nNZ%2BSk746dPRS5mnBoCy9tkceqJMX8AzNMr7wZFwZBm2MjRj5LwMxr9%2F3EV0psXTtV9mxdVfw6lxKVPJOarSMmxLj%2B3SF7X7XozuozO6n%2BGYf%2F9zL%2BgwldN9OyQ4WGoSDAKbJVEnURsNndsinZ%2BS%2Bpw9hbRrQ%2Fs4ZQyKMKWz8sQGOqUBuWn5BTnXIqe%2B2eixXl1bfQevigbCG8fyXSxa6cLEulKyum2xukuufolPVjsW0sOGs3ogUGccBvv24N5BUJoVe02a1uairosrWhdVbw6b%2Fe%2Fz7QE%2FnC846OeRsJIAcrcjKqCecjStBFYjeklk75J64r6VCaKJYdy67GphjkLGy5vAV%2BUeC5WWp8vBNKGj%2Fkt6anSnEcpPwFxL6dxXK5%2F8b3tubGfX&X-Amz-Signature=454309e893019716c2a56f4c7c155ebf63e09ced62875b821b431d5ef1aec281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHFRA53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyZu6WKEyV2VqdJmsOd3noh0ej4pd%2Byx9YxdMFxL3pgIgecJoqCp0fwqutJp%2Bt1SyVIDMKhvGjodGVxXlRLxx4aMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKrUqke8O%2Brd25WhEyrcA3K30Zxg018hGDYE3iyOiFDsJTkVewN4j65YvP6KXqnM0k2Wxj3M3WgCoaQD569kJIzPU8YR8KbV7buoN8%2FNRqHV4TqvAzLPmSmtRhDit5C9n%2FWhdk4YWxncxmYmzh2qbDZBV3zz1Q1HefU1rHVx4x4afUNw5U6MV29%2Fs3WOuAk2uElaqO%2FsXJRmK7uqcmq9mJ4L%2B6%2FhTwWMfZr%2B1QyHhsZayIQUEncsoeBAImpRhy5K4RErCjywshBiPxTnKYFny9zzaSIKJ41gq4aCUyQAgMOORx%2FG5unvDrLzfj8SJlmmMhDOUbV192lLPfYSAlpUXca5%2BNQtknia0EFx4EWbi4OLfhZRiM%2FZ5D49yi4ktmyxDzM8PFYjWgXuyzQV4iLEwPxT7qEAeFjwfdyHyV7%2B8DDeJ2n1%2BkmEcl9qCvOBHeK8KPR2FoSiYrQDdSSoOWFQSECLLavBy%2Bi6%2BqgKN0q1cyl0nNZ%2BSk746dPRS5mnBoCy9tkceqJMX8AzNMr7wZFwZBm2MjRj5LwMxr9%2F3EV0psXTtV9mxdVfw6lxKVPJOarSMmxLj%2B3SF7X7XozuozO6n%2BGYf%2F9zL%2BgwldN9OyQ4WGoSDAKbJVEnURsNndsinZ%2BS%2Bpw9hbRrQ%2Fs4ZQyKMKWz8sQGOqUBuWn5BTnXIqe%2B2eixXl1bfQevigbCG8fyXSxa6cLEulKyum2xukuufolPVjsW0sOGs3ogUGccBvv24N5BUJoVe02a1uairosrWhdVbw6b%2Fe%2Fz7QE%2FnC846OeRsJIAcrcjKqCecjStBFYjeklk75J64r6VCaKJYdy67GphjkLGy5vAV%2BUeC5WWp8vBNKGj%2Fkt6anSnEcpPwFxL6dxXK5%2F8b3tubGfX&X-Amz-Signature=e9359d5f78e1b3d50f8de709ceae447f01bf1f87d95a0d48f41121a2b084dc91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHFRA53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyZu6WKEyV2VqdJmsOd3noh0ej4pd%2Byx9YxdMFxL3pgIgecJoqCp0fwqutJp%2Bt1SyVIDMKhvGjodGVxXlRLxx4aMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKrUqke8O%2Brd25WhEyrcA3K30Zxg018hGDYE3iyOiFDsJTkVewN4j65YvP6KXqnM0k2Wxj3M3WgCoaQD569kJIzPU8YR8KbV7buoN8%2FNRqHV4TqvAzLPmSmtRhDit5C9n%2FWhdk4YWxncxmYmzh2qbDZBV3zz1Q1HefU1rHVx4x4afUNw5U6MV29%2Fs3WOuAk2uElaqO%2FsXJRmK7uqcmq9mJ4L%2B6%2FhTwWMfZr%2B1QyHhsZayIQUEncsoeBAImpRhy5K4RErCjywshBiPxTnKYFny9zzaSIKJ41gq4aCUyQAgMOORx%2FG5unvDrLzfj8SJlmmMhDOUbV192lLPfYSAlpUXca5%2BNQtknia0EFx4EWbi4OLfhZRiM%2FZ5D49yi4ktmyxDzM8PFYjWgXuyzQV4iLEwPxT7qEAeFjwfdyHyV7%2B8DDeJ2n1%2BkmEcl9qCvOBHeK8KPR2FoSiYrQDdSSoOWFQSECLLavBy%2Bi6%2BqgKN0q1cyl0nNZ%2BSk746dPRS5mnBoCy9tkceqJMX8AzNMr7wZFwZBm2MjRj5LwMxr9%2F3EV0psXTtV9mxdVfw6lxKVPJOarSMmxLj%2B3SF7X7XozuozO6n%2BGYf%2F9zL%2BgwldN9OyQ4WGoSDAKbJVEnURsNndsinZ%2BS%2Bpw9hbRrQ%2Fs4ZQyKMKWz8sQGOqUBuWn5BTnXIqe%2B2eixXl1bfQevigbCG8fyXSxa6cLEulKyum2xukuufolPVjsW0sOGs3ogUGccBvv24N5BUJoVe02a1uairosrWhdVbw6b%2Fe%2Fz7QE%2FnC846OeRsJIAcrcjKqCecjStBFYjeklk75J64r6VCaKJYdy67GphjkLGy5vAV%2BUeC5WWp8vBNKGj%2Fkt6anSnEcpPwFxL6dxXK5%2F8b3tubGfX&X-Amz-Signature=d59883c181139beab5bba493905883aae115ca7df8507992992b5ade9e183c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHFRA53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyZu6WKEyV2VqdJmsOd3noh0ej4pd%2Byx9YxdMFxL3pgIgecJoqCp0fwqutJp%2Bt1SyVIDMKhvGjodGVxXlRLxx4aMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKrUqke8O%2Brd25WhEyrcA3K30Zxg018hGDYE3iyOiFDsJTkVewN4j65YvP6KXqnM0k2Wxj3M3WgCoaQD569kJIzPU8YR8KbV7buoN8%2FNRqHV4TqvAzLPmSmtRhDit5C9n%2FWhdk4YWxncxmYmzh2qbDZBV3zz1Q1HefU1rHVx4x4afUNw5U6MV29%2Fs3WOuAk2uElaqO%2FsXJRmK7uqcmq9mJ4L%2B6%2FhTwWMfZr%2B1QyHhsZayIQUEncsoeBAImpRhy5K4RErCjywshBiPxTnKYFny9zzaSIKJ41gq4aCUyQAgMOORx%2FG5unvDrLzfj8SJlmmMhDOUbV192lLPfYSAlpUXca5%2BNQtknia0EFx4EWbi4OLfhZRiM%2FZ5D49yi4ktmyxDzM8PFYjWgXuyzQV4iLEwPxT7qEAeFjwfdyHyV7%2B8DDeJ2n1%2BkmEcl9qCvOBHeK8KPR2FoSiYrQDdSSoOWFQSECLLavBy%2Bi6%2BqgKN0q1cyl0nNZ%2BSk746dPRS5mnBoCy9tkceqJMX8AzNMr7wZFwZBm2MjRj5LwMxr9%2F3EV0psXTtV9mxdVfw6lxKVPJOarSMmxLj%2B3SF7X7XozuozO6n%2BGYf%2F9zL%2BgwldN9OyQ4WGoSDAKbJVEnURsNndsinZ%2BS%2Bpw9hbRrQ%2Fs4ZQyKMKWz8sQGOqUBuWn5BTnXIqe%2B2eixXl1bfQevigbCG8fyXSxa6cLEulKyum2xukuufolPVjsW0sOGs3ogUGccBvv24N5BUJoVe02a1uairosrWhdVbw6b%2Fe%2Fz7QE%2FnC846OeRsJIAcrcjKqCecjStBFYjeklk75J64r6VCaKJYdy67GphjkLGy5vAV%2BUeC5WWp8vBNKGj%2Fkt6anSnEcpPwFxL6dxXK5%2F8b3tubGfX&X-Amz-Signature=094e819e628a496148fcf18d8b6eace44c16e21d434c3880f0d059f0721fc945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHFRA53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyZu6WKEyV2VqdJmsOd3noh0ej4pd%2Byx9YxdMFxL3pgIgecJoqCp0fwqutJp%2Bt1SyVIDMKhvGjodGVxXlRLxx4aMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKrUqke8O%2Brd25WhEyrcA3K30Zxg018hGDYE3iyOiFDsJTkVewN4j65YvP6KXqnM0k2Wxj3M3WgCoaQD569kJIzPU8YR8KbV7buoN8%2FNRqHV4TqvAzLPmSmtRhDit5C9n%2FWhdk4YWxncxmYmzh2qbDZBV3zz1Q1HefU1rHVx4x4afUNw5U6MV29%2Fs3WOuAk2uElaqO%2FsXJRmK7uqcmq9mJ4L%2B6%2FhTwWMfZr%2B1QyHhsZayIQUEncsoeBAImpRhy5K4RErCjywshBiPxTnKYFny9zzaSIKJ41gq4aCUyQAgMOORx%2FG5unvDrLzfj8SJlmmMhDOUbV192lLPfYSAlpUXca5%2BNQtknia0EFx4EWbi4OLfhZRiM%2FZ5D49yi4ktmyxDzM8PFYjWgXuyzQV4iLEwPxT7qEAeFjwfdyHyV7%2B8DDeJ2n1%2BkmEcl9qCvOBHeK8KPR2FoSiYrQDdSSoOWFQSECLLavBy%2Bi6%2BqgKN0q1cyl0nNZ%2BSk746dPRS5mnBoCy9tkceqJMX8AzNMr7wZFwZBm2MjRj5LwMxr9%2F3EV0psXTtV9mxdVfw6lxKVPJOarSMmxLj%2B3SF7X7XozuozO6n%2BGYf%2F9zL%2BgwldN9OyQ4WGoSDAKbJVEnURsNndsinZ%2BS%2Bpw9hbRrQ%2Fs4ZQyKMKWz8sQGOqUBuWn5BTnXIqe%2B2eixXl1bfQevigbCG8fyXSxa6cLEulKyum2xukuufolPVjsW0sOGs3ogUGccBvv24N5BUJoVe02a1uairosrWhdVbw6b%2Fe%2Fz7QE%2FnC846OeRsJIAcrcjKqCecjStBFYjeklk75J64r6VCaKJYdy67GphjkLGy5vAV%2BUeC5WWp8vBNKGj%2Fkt6anSnEcpPwFxL6dxXK5%2F8b3tubGfX&X-Amz-Signature=59d31842d6db10308b825ef2e374844e0b5c5ab9754dc321897e48f4c95d50c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHFRA53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyZu6WKEyV2VqdJmsOd3noh0ej4pd%2Byx9YxdMFxL3pgIgecJoqCp0fwqutJp%2Bt1SyVIDMKhvGjodGVxXlRLxx4aMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKrUqke8O%2Brd25WhEyrcA3K30Zxg018hGDYE3iyOiFDsJTkVewN4j65YvP6KXqnM0k2Wxj3M3WgCoaQD569kJIzPU8YR8KbV7buoN8%2FNRqHV4TqvAzLPmSmtRhDit5C9n%2FWhdk4YWxncxmYmzh2qbDZBV3zz1Q1HefU1rHVx4x4afUNw5U6MV29%2Fs3WOuAk2uElaqO%2FsXJRmK7uqcmq9mJ4L%2B6%2FhTwWMfZr%2B1QyHhsZayIQUEncsoeBAImpRhy5K4RErCjywshBiPxTnKYFny9zzaSIKJ41gq4aCUyQAgMOORx%2FG5unvDrLzfj8SJlmmMhDOUbV192lLPfYSAlpUXca5%2BNQtknia0EFx4EWbi4OLfhZRiM%2FZ5D49yi4ktmyxDzM8PFYjWgXuyzQV4iLEwPxT7qEAeFjwfdyHyV7%2B8DDeJ2n1%2BkmEcl9qCvOBHeK8KPR2FoSiYrQDdSSoOWFQSECLLavBy%2Bi6%2BqgKN0q1cyl0nNZ%2BSk746dPRS5mnBoCy9tkceqJMX8AzNMr7wZFwZBm2MjRj5LwMxr9%2F3EV0psXTtV9mxdVfw6lxKVPJOarSMmxLj%2B3SF7X7XozuozO6n%2BGYf%2F9zL%2BgwldN9OyQ4WGoSDAKbJVEnURsNndsinZ%2BS%2Bpw9hbRrQ%2Fs4ZQyKMKWz8sQGOqUBuWn5BTnXIqe%2B2eixXl1bfQevigbCG8fyXSxa6cLEulKyum2xukuufolPVjsW0sOGs3ogUGccBvv24N5BUJoVe02a1uairosrWhdVbw6b%2Fe%2Fz7QE%2FnC846OeRsJIAcrcjKqCecjStBFYjeklk75J64r6VCaKJYdy67GphjkLGy5vAV%2BUeC5WWp8vBNKGj%2Fkt6anSnEcpPwFxL6dxXK5%2F8b3tubGfX&X-Amz-Signature=adfc49b5e40d0986d9d6859f6ea9312ad74a2d977f04b98670ca712595d987c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHFRA53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyZu6WKEyV2VqdJmsOd3noh0ej4pd%2Byx9YxdMFxL3pgIgecJoqCp0fwqutJp%2Bt1SyVIDMKhvGjodGVxXlRLxx4aMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKrUqke8O%2Brd25WhEyrcA3K30Zxg018hGDYE3iyOiFDsJTkVewN4j65YvP6KXqnM0k2Wxj3M3WgCoaQD569kJIzPU8YR8KbV7buoN8%2FNRqHV4TqvAzLPmSmtRhDit5C9n%2FWhdk4YWxncxmYmzh2qbDZBV3zz1Q1HefU1rHVx4x4afUNw5U6MV29%2Fs3WOuAk2uElaqO%2FsXJRmK7uqcmq9mJ4L%2B6%2FhTwWMfZr%2B1QyHhsZayIQUEncsoeBAImpRhy5K4RErCjywshBiPxTnKYFny9zzaSIKJ41gq4aCUyQAgMOORx%2FG5unvDrLzfj8SJlmmMhDOUbV192lLPfYSAlpUXca5%2BNQtknia0EFx4EWbi4OLfhZRiM%2FZ5D49yi4ktmyxDzM8PFYjWgXuyzQV4iLEwPxT7qEAeFjwfdyHyV7%2B8DDeJ2n1%2BkmEcl9qCvOBHeK8KPR2FoSiYrQDdSSoOWFQSECLLavBy%2Bi6%2BqgKN0q1cyl0nNZ%2BSk746dPRS5mnBoCy9tkceqJMX8AzNMr7wZFwZBm2MjRj5LwMxr9%2F3EV0psXTtV9mxdVfw6lxKVPJOarSMmxLj%2B3SF7X7XozuozO6n%2BGYf%2F9zL%2BgwldN9OyQ4WGoSDAKbJVEnURsNndsinZ%2BS%2Bpw9hbRrQ%2Fs4ZQyKMKWz8sQGOqUBuWn5BTnXIqe%2B2eixXl1bfQevigbCG8fyXSxa6cLEulKyum2xukuufolPVjsW0sOGs3ogUGccBvv24N5BUJoVe02a1uairosrWhdVbw6b%2Fe%2Fz7QE%2FnC846OeRsJIAcrcjKqCecjStBFYjeklk75J64r6VCaKJYdy67GphjkLGy5vAV%2BUeC5WWp8vBNKGj%2Fkt6anSnEcpPwFxL6dxXK5%2F8b3tubGfX&X-Amz-Signature=0fbb564f12c6d4fba42953205b3f7763579ab041b9e360341538d655ed2a7354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5PKFRZA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfiKeIpER14VY%2FKmZRVAuMV4ZOtixCELV6A%2BYtYRvKyQIhAL3eE6kzdFapZtwODEHSQ7avH2gZIgN%2BwWNwwt1ybElCKv8DCC8QABoMNjM3NDIzMTgzODA1Igy6ooxIUOVca6ILId8q3AP0RNnChJRduMFsw9nkQzGIsEmRjOL8xK9jmO8Iq4ATMzkxq37ZQAvUU4oEW32inmLyevCBkWFpaLHT88RlmZFy5y46v6Qhie8wAknmmwqUC0sJ9lOAj0nfs6UjBxlTGo6yXfF0%2FP1T9K5dRg8XQk0DDRYqn%2F%2BnJVGtSGgsGA68gV7lss3DZ2wECvN%2BhcrsOW%2BrdNjISrwO27TyOjh7GZCW2ESJLM9p%2BQZTBduqtEhe2acO%2FctowKT0mh%2BIxAWGDg694TGn%2BItmOhPlaY0ifVkWjlbrvaR1%2BZ0Kx3CZ%2BXLTjghE5kOC3dQoDKFUp009pVJFxjstdF8XZfdcQJyIK7oegXUuAs0c2%2B2hSRuG4t0oOscsGabUjuP5rvivGFt9x40muZ2PyVdDpwsndKh9K2BMw8oE6DkvyZYs2DImzGjWgnilzdWHf88jPQ5MiDhpjb%2B76jwEypK7iQIxlWopuewUe9HUjww%2B4%2Fr8elDiNiRh9GUjhLCExXqjKfLRjBH%2Fh8CGEU9q6XVVjkwYPBbI6k9bLpOcOXmNU3JbGZdH9YvoxnlYmLJf1ZgBtsRy%2FYEqQQjDZ24pmOo%2BmA9Ml6lNNdF%2BZ2zo3rQ5AKViFj2upUIT2MC5fVYkRLLYegQjczCTsvLEBjqkAeViPjKU1bAWwDMJLL2ADZFXAjCWM22%2FelP3JEZDATzIUalhMRSgthToyq0zNnr0doRfjxBxpRn%2FhWHPtJ1Anlk1uMtKu1cxukiSCVD4Ovscjg2iMct3Rue4usiZJ7ZwZ6JzsHNypIIBo17%2FXkT4jYslfLxpW%2FkjKgTcmCjz1K6oGAAjN3H03HiI%2FAXZkWBXb6yVkHGV9bK8V47MEDEX2icTuv5R&X-Amz-Signature=4d7f3cb8bb7ebc9403d5336e9f5c9cd711e8b4d9400268c2fdfa25f12009ee99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVPJFUJK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp33aOjVOy%2B%2F4G%2Br%2BTxb6ddfmuq1q7vSzORUrO9Wj97QIgTutvI%2BljpBglR8HLz156G5i9BeZtnC0JxMFms%2Ff0LBoq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHX%2FOMrBtuYS6lihayrcAzqh572fMaD%2BQjvLHOAljLh8FIRrtVZa0fr863lBHWmqImRsTg3TbZSQ6pk1iCXaX3gMBetlM6O1k%2F45bZ2cTZFcNjaQF3tIBhxwCa3ElkxOz9pT3idxya8GUF0ABkvvjJfz1i2BBe95aI9CXpfMcUFX2ummfquCossiicS%2FmLFe6Zf47%2FnpBuIyxIk863x1HEqMym1st5tVhz%2BGfpgvZy373%2Fm9iIurNXjX5%2BCoB3Ch%2BxWuPcW4XDCtwE0QnFjKmAepcZfQxTU2%2Fl9k1cUSVecQ2P1I1umYJnYDerfcayvVdc0eaOHm%2Fs1zbOfpuOPt2LN9DXMLfQoliTxQIChWKL5AVuFkIxI%2BCllt42Rfmt6cylc5NNlfl01cGpZvNNDvs53JQ%2Bgd%2B2V%2BoOJVfR8BGskSCJ%2FVmoOmFClzPY%2FrxBXy7LQuAOIskMbIvjF2VbLqIC48F%2B7RWdN1xg2Vl8Lol3ZjNeFdAyf4p%2FzG6LKsQvj39cPUb2s5PqkieoELhjXgPltpHrf4EjyU9NRajBUZGD9HAce930RjGjvdMSvMc7%2BG%2BVRRcJLEwBbqt9RWDXu%2Bx82GVObQA08vZWQoKoO2Vpe91CfZFdegu9fYa6w0PYMXuKhYYxu9WXig4fSZMISy8sQGOqUBLQ8Xui0FomX2lyTRGVraYs9TeF6J0H6JK%2BbEj2OuMxEltUtpJYarMEnAAmLx6fwOA%2BTxrgNTpI6lwLn0Jsqk9BV46PITUo1EbEB6rERMhW2M0GxkPa9XNp5a3YSf4KAWK8yXymetQJ13Gp7wWZZ%2BX7hiMHi0WnGj09pgwdNI0SqEk2Kl68LX1J%2BHTOIZLFzVLZkoK8%2FUymwT72gZSyjVFwu4EHBx&X-Amz-Signature=47ae5c1d71facbec4797a4c99604925821a1800c483b4d1475d40340a96846df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6MLCO6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbSsz0RcY7piSR0PoZzS4EoxBz09DpgcDF3lu%2Fp7LnNAiEAzgelWDef0I3JnQDeJJNGAeUYn8Q%2BZJhBrcG%2BBMmAJgAq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLX3TnhXChC2yQheBCrcA7Vq0y%2Bo80OZJWlLIuCDTFxwDGjFc1dFlMSOXd%2BJ4ej1s7kX%2BKgu8kL2knKhvBQ7TgJJ%2Fa6Lu05XjL7n8lKO46AQhnIUqgkV%2FqN5UW7akxvBtr6B3FzlvsuAmLiQreUZYT0CUb%2FER4uqxHm8SXBm%2BL1PPFoOH0nPR2Tl7HNxrElwhBtszbPHc1sq7m2gmXnMxiRTwz7vyEbLlNncXmGjH3dU82S6opAB9G%2BQ0cGna9%2FoSoajmFCqtoEHuetrIdHpL7Yecck97aA%2BC3OZAhKqi87rOuvoeEWamY73DH9DvIqli1Xh701PqECJAfQ0dj0JGq3A%2B%2F6sESUZrGvtNUDAwOWEtORo0Rf6PGJnHhMLT82%2Bmo1IiaHrcGEzKtt9CebgtVfGpe%2BoksxoXor5Md5JefV5OR19wXCHO2J8YBH%2B4cSO59AuU2ZDy1HKDNxt302O6HBGiEAjYGpwrhbGWUbgVk%2B1y3cmP0Xv%2BSTgWYRfLsxSR%2BTBWUeKacejWyccGiZcluDInyat2Nwetos2DmvDGdWtpks3x%2BncRjcGEW4B2M42cxaVhGjAUYmrCMV9WWxLrt%2BWKGsLp0ozzxHWw4H1hBnbcqhneZopqgzorsP1tqGqKVe9BHHoH2P%2BCMkCMNWy8sQGOqUBoznUJV4CqMLClosL5k%2BX8DrzVEWuxXGxSpYaWTpSM%2B0Z38MdewX%2FK%2FgkGY0DQNC2eN8CLTtVeFzq2Lo3WlQfIGtvxWyiiYEPRcIWPN8Iym4DmFz84efvxh4pB35OJU0h6g%2FC2I4QkvX0hACM86iTAeZJN8az4fJRoMkzriVD1YTj6rnIKPY3p1TPvlwW81ww9emqGVQ%2FGLW%2F6RZQ8g65bbCiuGHs&X-Amz-Signature=0051131a8bfeccae53e9a609a2d1b6dda685c89a0161d4e0eb6e83c5ebb286e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHFRA53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyZu6WKEyV2VqdJmsOd3noh0ej4pd%2Byx9YxdMFxL3pgIgecJoqCp0fwqutJp%2Bt1SyVIDMKhvGjodGVxXlRLxx4aMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKrUqke8O%2Brd25WhEyrcA3K30Zxg018hGDYE3iyOiFDsJTkVewN4j65YvP6KXqnM0k2Wxj3M3WgCoaQD569kJIzPU8YR8KbV7buoN8%2FNRqHV4TqvAzLPmSmtRhDit5C9n%2FWhdk4YWxncxmYmzh2qbDZBV3zz1Q1HefU1rHVx4x4afUNw5U6MV29%2Fs3WOuAk2uElaqO%2FsXJRmK7uqcmq9mJ4L%2B6%2FhTwWMfZr%2B1QyHhsZayIQUEncsoeBAImpRhy5K4RErCjywshBiPxTnKYFny9zzaSIKJ41gq4aCUyQAgMOORx%2FG5unvDrLzfj8SJlmmMhDOUbV192lLPfYSAlpUXca5%2BNQtknia0EFx4EWbi4OLfhZRiM%2FZ5D49yi4ktmyxDzM8PFYjWgXuyzQV4iLEwPxT7qEAeFjwfdyHyV7%2B8DDeJ2n1%2BkmEcl9qCvOBHeK8KPR2FoSiYrQDdSSoOWFQSECLLavBy%2Bi6%2BqgKN0q1cyl0nNZ%2BSk746dPRS5mnBoCy9tkceqJMX8AzNMr7wZFwZBm2MjRj5LwMxr9%2F3EV0psXTtV9mxdVfw6lxKVPJOarSMmxLj%2B3SF7X7XozuozO6n%2BGYf%2F9zL%2BgwldN9OyQ4WGoSDAKbJVEnURsNndsinZ%2BS%2Bpw9hbRrQ%2Fs4ZQyKMKWz8sQGOqUBuWn5BTnXIqe%2B2eixXl1bfQevigbCG8fyXSxa6cLEulKyum2xukuufolPVjsW0sOGs3ogUGccBvv24N5BUJoVe02a1uairosrWhdVbw6b%2Fe%2Fz7QE%2FnC846OeRsJIAcrcjKqCecjStBFYjeklk75J64r6VCaKJYdy67GphjkLGy5vAV%2BUeC5WWp8vBNKGj%2Fkt6anSnEcpPwFxL6dxXK5%2F8b3tubGfX&X-Amz-Signature=a56cbdfa1df5a80bef705281f5f190fe2fe562871200714ac843c93ff7dc4cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWTFPWX3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSY47XCd0DqpTavKTQjS1KWjYxwM%2BgxSKxqnLKrxVz2gIhAJPSXtX5%2FnlRc6bCQPAgYLcUe76Ow%2FNeKavCHEBtHpMlKv8DCC8QABoMNjM3NDIzMTgzODA1Igy2WyuP3HvioB7xE%2B8q3APaRXZ%2FGlHp4no1RKnV4C6%2BhgyjK8RJ95IHm4KdPn%2FJBplkdB0EkrxWoDWFSz4cEfWkghgvYoh95uJnF5MNwihWkpHJfw1j5yuu0v6bHEr0mDGzLP3OLnmMB08gN%2BOXMqGDvXK3%2FLjIWPNRqsMzl3fPrX4HNAyigA1xmVPwzSdjedjMXtXvmTGRr7PI8kGB0j2GUyIMGrzcbc%2BgTKTdtxL8UYgETCOejKVS5faCEvbxx%2FjI3C120hl42JY2XD0O5n5ATlYfGVvCFKCJuLksjuWAJAIGzJr6afinGJGLzL4%2FrchfpvFskYQ6KrXReW%2B8wU%2BQJhP5kM1p%2FP4VHSTz0Uq4r13VMKgoWuCAWBNBzXfPSmiGhgXrh3VMOiWDj7wZTr6%2Fxgv1QzFGK47XVSdDheHaiR8oJB7c7F9EPnmTLsW26PkalpwgHSdsbsExsOmy9DIdTaKhhp3iwPhbwIxvTLmRTFLA10SKOewv%2BKnwFnHkPA%2FusWkDa5dDEEPZHSOJDaeMB17SB6cj944DK%2BzicgaXBdX%2BEP9uog5nTIrqqtiamuWF3fsrPdXLeucNW7J0PaN5fLvAiBF5x9en3ZyuLmBHIyXS3%2FSTgcZ5rAX%2BWXKvs71Uc%2FRabGd%2FBCfi6TCCsvLEBjqkAXqn10MoBZ7kocFMui7MOX8O%2FMrfF6A7SFovSYw1NPZ2I3Ew99ow6Hmx7cW%2BMhCF%2FU5qZnyDlwR5%2FXNa24RuK7eu2HVERiBKyq58RxjL6d2%2Ftcz%2FgQJZUgFtcIcOuuIhAtLVrg63Bpjgq6td99ZAq887b%2Beu%2BxW4sG9%2FXInj0oE26iNPT9oXcETNstlXZVW1wTizqcnCRWkDCgNzr8vhN72dqgt8&X-Amz-Signature=0540a7f777ef9ab7a947269c852f8b8554ee78030d7fb9fee2c8f48d8ff30897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHFRA53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyZu6WKEyV2VqdJmsOd3noh0ej4pd%2Byx9YxdMFxL3pgIgecJoqCp0fwqutJp%2Bt1SyVIDMKhvGjodGVxXlRLxx4aMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKrUqke8O%2Brd25WhEyrcA3K30Zxg018hGDYE3iyOiFDsJTkVewN4j65YvP6KXqnM0k2Wxj3M3WgCoaQD569kJIzPU8YR8KbV7buoN8%2FNRqHV4TqvAzLPmSmtRhDit5C9n%2FWhdk4YWxncxmYmzh2qbDZBV3zz1Q1HefU1rHVx4x4afUNw5U6MV29%2Fs3WOuAk2uElaqO%2FsXJRmK7uqcmq9mJ4L%2B6%2FhTwWMfZr%2B1QyHhsZayIQUEncsoeBAImpRhy5K4RErCjywshBiPxTnKYFny9zzaSIKJ41gq4aCUyQAgMOORx%2FG5unvDrLzfj8SJlmmMhDOUbV192lLPfYSAlpUXca5%2BNQtknia0EFx4EWbi4OLfhZRiM%2FZ5D49yi4ktmyxDzM8PFYjWgXuyzQV4iLEwPxT7qEAeFjwfdyHyV7%2B8DDeJ2n1%2BkmEcl9qCvOBHeK8KPR2FoSiYrQDdSSoOWFQSECLLavBy%2Bi6%2BqgKN0q1cyl0nNZ%2BSk746dPRS5mnBoCy9tkceqJMX8AzNMr7wZFwZBm2MjRj5LwMxr9%2F3EV0psXTtV9mxdVfw6lxKVPJOarSMmxLj%2B3SF7X7XozuozO6n%2BGYf%2F9zL%2BgwldN9OyQ4WGoSDAKbJVEnURsNndsinZ%2BS%2Bpw9hbRrQ%2Fs4ZQyKMKWz8sQGOqUBuWn5BTnXIqe%2B2eixXl1bfQevigbCG8fyXSxa6cLEulKyum2xukuufolPVjsW0sOGs3ogUGccBvv24N5BUJoVe02a1uairosrWhdVbw6b%2Fe%2Fz7QE%2FnC846OeRsJIAcrcjKqCecjStBFYjeklk75J64r6VCaKJYdy67GphjkLGy5vAV%2BUeC5WWp8vBNKGj%2Fkt6anSnEcpPwFxL6dxXK5%2F8b3tubGfX&X-Amz-Signature=6b5afe63a8a98ec3215d10a8866f0415f65974a1fecbbe09790bf17b8260eaeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5OAT5V%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEGCGyg8gqxgyAXeySpxH55BVMbsl76xUwEf7iJ%2F0zFAiAzGyatOSMoT%2BoytaatQM7yQA0xzlCK1AjaikdFC0VoaCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMPldhGRl9hOyObQX8KtwDasNb5v4eG3hc3magQ2YamOTzC5Urf37jLTMTAsFaxY07TuSEUmkLkZJ5Z0vJVG0vCo36LX9Ozp4iam7dvdcKS4iP79FKPF%2Foeut4xkpltS3L3A4RcvAelo5NQKh8y38bnpocmGRTWOK7iBf0bz%2FyKQuJPgK6X0sZxRxSPnCAJ7YY7lcz5BBC7V4MV6GgAt5t9sjAQhDoyIxYBICGtqhn1TjgtkdOmq5ooGgn%2BzNxv4JAqmrXUs6%2BQBPr50LtOFXTJ4fnlqYDCmzZThw5fnVSZay0Q1XOsk3NfioeSjXTjWxFW9eZVzzelYJbF23A%2FNe8DU2F889Nw%2FREGkT07ox481mJH0kqE90TA0HVFSFlEkW41MWciDpHMwVIflwkokXmObc3TFWr3QdJsafYoMKa0KeTJ2qL7xKlvFTwKb1aWmNmSHb3hnDBpI5uR%2BmJI2AfY2O1MyreohUrAqFfLRLx2cc3teZD1IayCd%2FYvDzj5Jk5fGiaTlY19P63n0PRomra2A5DVao1KrGplax7e7zYN2YG9pIlbq0HZnuj98eVY2DclGVcyuz1sMvCo9Gq7ZgCNJWrR9jthloOp%2FuySXGhdLf%2BTRmcKnkw4BJesbk0Z5bq4qrgzt8OReN9Xv8w67HyxAY6pgGFXrGgHzvzul7DlIz%2BeaVlwXJg6GCLT00uH9wY88RsoH4ws3cNFoWUVoPNBn68zkQXQctk8ZhXWY2J8mcxkA4W76SeJFDpmgN1xT61FooTzpEf85OKvySW3KzGGDQYigX2X0b7Lky4aqWvpUzj4ymwal%2BgWd0Y9wrNhAEUKzaK5mg5Hlz8kn%2F3I4QaBQr4EQJNT%2FdMSv2vprKtEQoybw%2BWz6h9eI%2Fj&X-Amz-Signature=0e937af3af57000eb8b0c93b48a78a0a61499dd851e60c282f6b07a7491b9ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHFRA53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyZu6WKEyV2VqdJmsOd3noh0ej4pd%2Byx9YxdMFxL3pgIgecJoqCp0fwqutJp%2Bt1SyVIDMKhvGjodGVxXlRLxx4aMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKrUqke8O%2Brd25WhEyrcA3K30Zxg018hGDYE3iyOiFDsJTkVewN4j65YvP6KXqnM0k2Wxj3M3WgCoaQD569kJIzPU8YR8KbV7buoN8%2FNRqHV4TqvAzLPmSmtRhDit5C9n%2FWhdk4YWxncxmYmzh2qbDZBV3zz1Q1HefU1rHVx4x4afUNw5U6MV29%2Fs3WOuAk2uElaqO%2FsXJRmK7uqcmq9mJ4L%2B6%2FhTwWMfZr%2B1QyHhsZayIQUEncsoeBAImpRhy5K4RErCjywshBiPxTnKYFny9zzaSIKJ41gq4aCUyQAgMOORx%2FG5unvDrLzfj8SJlmmMhDOUbV192lLPfYSAlpUXca5%2BNQtknia0EFx4EWbi4OLfhZRiM%2FZ5D49yi4ktmyxDzM8PFYjWgXuyzQV4iLEwPxT7qEAeFjwfdyHyV7%2B8DDeJ2n1%2BkmEcl9qCvOBHeK8KPR2FoSiYrQDdSSoOWFQSECLLavBy%2Bi6%2BqgKN0q1cyl0nNZ%2BSk746dPRS5mnBoCy9tkceqJMX8AzNMr7wZFwZBm2MjRj5LwMxr9%2F3EV0psXTtV9mxdVfw6lxKVPJOarSMmxLj%2B3SF7X7XozuozO6n%2BGYf%2F9zL%2BgwldN9OyQ4WGoSDAKbJVEnURsNndsinZ%2BS%2Bpw9hbRrQ%2Fs4ZQyKMKWz8sQGOqUBuWn5BTnXIqe%2B2eixXl1bfQevigbCG8fyXSxa6cLEulKyum2xukuufolPVjsW0sOGs3ogUGccBvv24N5BUJoVe02a1uairosrWhdVbw6b%2Fe%2Fz7QE%2FnC846OeRsJIAcrcjKqCecjStBFYjeklk75J64r6VCaKJYdy67GphjkLGy5vAV%2BUeC5WWp8vBNKGj%2Fkt6anSnEcpPwFxL6dxXK5%2F8b3tubGfX&X-Amz-Signature=c429dac93e6b6862042c439233d32fb4ecaf6189e355a54af027a85151eaebf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VAVKS4H%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWirn2rZYAsuJYlpStISQOzRpAkfJR5th4ADtmUQkqAgIhAObScehnsIqQP6r7Kc2v8NtUKqqVX6LVY%2FKG75NyucVoKv8DCC8QABoMNjM3NDIzMTgzODA1IgyNkoM6pK41uh67BiIq3APOSxhAz6vVntPk3DsfW4eLZvq6cNAVg3ju1BkYPLegMZG0MBvCaUQKp8YSQHnNGm6B17rFYjsP2x0MbxmWkHbNOAabo%2B1Ym6snHhPFWszzpwEPvFCl12R6KfIgged4aZRbMSDwfFHb0AuetGBDLalEAiXf3zAKFI4%2FVSn8Tsr7A00ZZgacI4COWgVlOBBT4kcH%2B6mU%2FA8C6aYGrkbfCkwnIZoHTY6Qi7bqsxLlxXIKXRvmK0neaFQK40WuMXguW7qSIRu6FKuQS54ay9kJ36aJxllYObcaz7iNK4pCTGfCa2j5H%2FWBUtDSbtnCn3jgjTN%2FC3lyYXXZNommORJDMzebqLNa9CdoGYZF7eHpcZT0El1rRdsso3wS77mkxv%2BvZtiy%2BgeHADCUhstt7SVE53MhWnPXjMWcao%2Bbqs3x972QlvDSlg3%2FuAjG2Ra%2BLyCJdpljBOJPju8ja9Tz9epX3q2KZ3Sddtxugpza7zhy1LlqzEOpf44gM1J3viyQhgWfER5RpBcDRW3L9HYcKcZqazOwOT659XHLxoryFwvVe8aR%2BINZQlsYKX8UDY8xC5Q645cAyTy10Pwlr4%2FdAtb%2FRgm6%2FiiTX9faCTAumjV4JMLdsQNAoK27F10C3NFcZTD0sfLEBjqkAcNSHwr0l7XX9diPAYeVKAPH3BZ4fKHpoqmxlffNJ1R%2BO4BeApL0IhrbAETc%2Fe5Fl%2Fvq0Eorg5Yu181gEvZfXMo5Y8Zy2kzQSZen%2Bn23jk95q0oYovxQJzimvBMC3um044qbZzrkN8uWdNms%2FIlSDinPvJcpV8ojbYDrfIi5dzr8jj1E2yRueGELRrC1XESDQDLO4z5O998qOQ4FTK5XytVXCPR6&X-Amz-Signature=0645dc202905a1b242fad4642d12ed72d0cc6d236cb9567119168b9b98cf81de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHFRA53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyZu6WKEyV2VqdJmsOd3noh0ej4pd%2Byx9YxdMFxL3pgIgecJoqCp0fwqutJp%2Bt1SyVIDMKhvGjodGVxXlRLxx4aMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKrUqke8O%2Brd25WhEyrcA3K30Zxg018hGDYE3iyOiFDsJTkVewN4j65YvP6KXqnM0k2Wxj3M3WgCoaQD569kJIzPU8YR8KbV7buoN8%2FNRqHV4TqvAzLPmSmtRhDit5C9n%2FWhdk4YWxncxmYmzh2qbDZBV3zz1Q1HefU1rHVx4x4afUNw5U6MV29%2Fs3WOuAk2uElaqO%2FsXJRmK7uqcmq9mJ4L%2B6%2FhTwWMfZr%2B1QyHhsZayIQUEncsoeBAImpRhy5K4RErCjywshBiPxTnKYFny9zzaSIKJ41gq4aCUyQAgMOORx%2FG5unvDrLzfj8SJlmmMhDOUbV192lLPfYSAlpUXca5%2BNQtknia0EFx4EWbi4OLfhZRiM%2FZ5D49yi4ktmyxDzM8PFYjWgXuyzQV4iLEwPxT7qEAeFjwfdyHyV7%2B8DDeJ2n1%2BkmEcl9qCvOBHeK8KPR2FoSiYrQDdSSoOWFQSECLLavBy%2Bi6%2BqgKN0q1cyl0nNZ%2BSk746dPRS5mnBoCy9tkceqJMX8AzNMr7wZFwZBm2MjRj5LwMxr9%2F3EV0psXTtV9mxdVfw6lxKVPJOarSMmxLj%2B3SF7X7XozuozO6n%2BGYf%2F9zL%2BgwldN9OyQ4WGoSDAKbJVEnURsNndsinZ%2BS%2Bpw9hbRrQ%2Fs4ZQyKMKWz8sQGOqUBuWn5BTnXIqe%2B2eixXl1bfQevigbCG8fyXSxa6cLEulKyum2xukuufolPVjsW0sOGs3ogUGccBvv24N5BUJoVe02a1uairosrWhdVbw6b%2Fe%2Fz7QE%2FnC846OeRsJIAcrcjKqCecjStBFYjeklk75J64r6VCaKJYdy67GphjkLGy5vAV%2BUeC5WWp8vBNKGj%2Fkt6anSnEcpPwFxL6dxXK5%2F8b3tubGfX&X-Amz-Signature=604a0c2f7973c9530a1695c8850365ad1c90e03c0bf8f534d7df5d8f9ccd349c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665X5SBI6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvpLH%2BCniY2S7F7sjUTSb3gShUWJPB%2Fvji3VPr%2BQgYeAiAzdxWR5Om1%2B%2BMhwlk7b6%2Bln49EZdsM8UVMb1VnceHJjir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMy1b4hSPMeYe%2FsZaRKtwDMJmGxVTPo59roB9MJlTUqnNV%2Bsuf1xdPC8Muk5Pv%2FyPcADhsi64t6axv3CN7D2KKqDW1WC8TfzzfKJ8NNgfgxrzgQg2yiat0nmTVT7IpD5Hb11nDDZlhruqwzYIywRCCH7%2FtSy3yTigTIwaPiH1vwqhnA2rIfmoNRKfvoIMvldFzgVpkuKY3rQm8Q5u153sYrb%2BkvwP%2FN8W8PnKjQGKC8EsxPqZTn1YE1o8tSIQNGWf%2Fbk5t9rBeYuvznWdSVWHWwsh%2F%2FImE%2BR7njNx%2FNZP29vzRe4V3KltuuE11HUzH9Q9WB%2FbwIwfB%2F44yyLET0yF25R2LY921e6TOfeesXhxy4InZw4Zhiis1YjfsLCPdwOSQJsMiNUogM4Ja%2BXDqflESdmTY5U9om0DJoTlv7BMm00Kb89jrFCEZlitM5%2BLQJC727KJ1FlaBab6LR0WcP5ZDkEbgY2MeXbWural7t5ijYdW6nFrk6SnvLpvqIADJ1qdZlriixAUG1GYtRXoYbG72h8knxaPy3tDEn7vm16ayRlLtjeleQLKbRuVH83kDxpZPmc677kR4gckEE2fovBjMN9GjGRVb10UJ11gs6gX5JTzd0lD1KCeXH3hZ%2FjxI5nCSUsTWreBO%2BiNONl8w7LLyxAY6pgH9JA6gHh5IhUm6JzxwtVULVtZ6J4vTGV2943KtXO84I4dI4OzzAF10Dewi3GNetGwKDACx4hp0ve6cCdgxNY0EEShYN%2B1fGyRExBGif8N8NdaN5Zpu6pvrYkJBMGoqPDGnkcbjtK%2Bp0X54z50peEh3dmrVd7mPN6Lljw9%2BKCUdlZrj2I3XXz5wrJyjVE%2BL6JivBdIOSWTEjBdD40rEas1md%2FP6bb3%2B&X-Amz-Signature=429d775f6231831c1de82b12b1fb6a77ac3f68508869ffa8ef847da7f13000de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S23EMV5L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHB6Vx8Aa3sDqp3kCy4tQnm5F4qR7v86CiP9gdAr3Js%2BAiEAjWAhoXWGyG%2FxIhRbPZi6xaWYwiMuwA%2FlUnNvxWZGVEwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDCW7%2FFrCR5mAQhwChyrcA84sEh2z9EbOonkZZTuJdBQB5ME6RZ%2FY%2BdVx%2FnEtakvCEbgnBMKHiBQLFOFNQnIC5ulC5VWDl8nlaHqKaDeIeDcuI3zTVa0OlwnyvRZzw71A0lvyI4SJCo%2FbQSGhygG2vr73fTwmkVwri0HQI058Y6nAueAYn%2BUkRK09vzHG%2FPBzTMg8xZqxb70ac9YZByXL7wZK5z12OYB8leliyY%2BspEoZERDBQ1DhUORGdZNbujv2VI9CpClZmsf2D1ApOWLbK0G%2FasGKxYJ3lSYY7U1MucsOmj5iOSPnFzBlKnf3WuYDLKTtHBqopqt%2BvS6DPrCWoEDeMmaNCPoTRu7lWNMYwrkd7O1IwNu1bbFeMEBiqISrPg7gEJEimObR6zgQFaP6JU3uCdmzBoTQiBypQIWqOzHPZhV6pWQkU6SFzBTATkjQshGmKh0v88DH5iJYY1sDhesjg0IdKMybrtJM0Xzaif%2FZXrD980t5mlSNBAR7YXMFvO4%2Bd570QjsxIzxX5N8EGUGLZXn%2BhpdCxabbeCiMVMDnYpIhtL6bXmtSOuN6MvaPN4jX418spxJm8Y%2FpclSRCb6Qn1g%2FuAlf2RVDYX%2BgMKkQ67F78eSNQZPbXOxaomKz11zu72xUxajL6rJsMICy8sQGOqUBEbab1CYWya1er%2FYTZo3uuRF7XyukHUN6hIbmL4MgFunA0GOBjzuiXkkKFnev9XSjgo4k1mYzq4%2Bs9Poyf14AqNozQO0BQFv5x3Smt5W463E5t3HBcolIrtBGyChZFJYSwmfJ9GF%2FsaZyXfW64wGcBfjYJBQIMVa4o6v%2BGQjpBqwL1gHEfMJbL95yxunKkUPfbTy%2BD2QmhIxXg%2F4EAQPANDu5PAqx&X-Amz-Signature=8afbc8c35e226fe4236cef145360434a0e8eb89c88b241848f3629de848d5cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWFP5NH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoV%2BrBAi%2F8bwE6OztJ%2FXSpdgOFuT%2FZgW5KwCHVinib5gIhAL9fjFURjz4M04%2Bj8OqL8kO7LHBxR9N2Lwi5yRuAyysAKv8DCC8QABoMNjM3NDIzMTgzODA1Igz97rUDPqK0ncpw5N4q3AN%2FMiM%2BpUZ3DpHhKBNG69FiR1zIom%2Fb6QX%2BFUevFKu79Cl6wTocM8FeLx1m%2FFeJzQojLXL%2BpUVjr93hMC%2B7oIXy5gxF7jvHNr56K7AK%2F9kQdKv2%2FpsaQADZqhbPIHIhuD1N9iqKtbr1UjINmjr%2F0Vr7ovMzkFzbn0EIFwMk5x5CDq6gJbDLUhaEFEZte5q1SkUD4vkK6Rf9tyfHWCmJa3J5atRTZ9oBxWHAtS2iQ20vx5WNBEpyoTyyQxmjDclXhCo6n3t9R6UMQq4XM56N084yFTht1rAN97ZTNafrgO5SvFLjacHvW1VUIahrSngp%2FToMmcR1%2BO3X21cmVtaI61YSCmQfuMZI57fzY1Y4f9pRSIWR1sqSJNLQC%2BLWnjUfFYxuWPrO7hbeUWXjb3EutoEnGb3jv8qKahtgMzLQ5gqU4IKwg9xYi3x2VNxKIYNKYcF81dfst96EmnFyGVE5JjAqV1Z4dCwM7vPBcMr%2BaZpvZ9Mn6%2BMbj7YHAhsaQCfAVKZzurbO3Dzhx7d5XHbdAfJ%2FnWZ%2FrNm3PDiSOyJHouBmlAoFwwG5CdCOPS529a0TAbUIYciv%2F9ypa9GfSWLHRG8j0pKSB79jQ0LtogUAzJEfb%2FXvk1A7q6FLwdvv6TCls%2FLEBjqkAVNtMaBgsr5xQtqoQ3YEEUcPGKJdGmt1G9MzsQkEPDfSHm%2Fkgs6EPMBPYVkXcCpd0ZeNQXjwzC8iPnd3UCISDbCWNXS54Z5H%2FdNm713%2BgNHPjxhQuMzgPA%2Fl5yCIuuuyWMVZHYwpAKpbz4i3dq6dI%2FwdwRmD45m%2B8LPCBpfXB3mwF0i8bQ3FIqprfTCb%2BCCy%2Bqg1YaRU%2FBkchFbA4QXlwWToj2Ev&X-Amz-Signature=b5c6de8b408bc5b20b1c30806e93a0587adf011d4ac0fd163a8af559b4de4048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPYU77HK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDTMY7pbyf5P5xlUWkp8UiOsvdj0BGIPKBeoXflRNrOAIhANT661sqNoCcCqAaQFLZHeX9t1vWypAgtzq5xMPfmCP0Kv8DCC8QABoMNjM3NDIzMTgzODA1IgzPcadsIlMP7mwp3DIq3AP05tY04NhVOdFZSWLZnI0tYnf2F5wg3zMjLgyE74ZkZwNe1%2BdIKR145jlEDPHLmlsP3twtz%2BXSTYljYy82%2BvqW2LZevG8lvzYHYOCF9P3vB03milfMBur6kR8EDhg7a2u3tOBLtWhboc50lKFDO0sl78jHu7fRcLJg8NaZVG4F2IkYemy4Fj8F4KwomzPmMIdK3QZ3Qw%2FwZLkLVXK9iNAMkVZfOw%2F%2FG1jhN2%2FV8JO7vjt6dklH5oKHYzXntWL2vl67c1VfE5SRD0YzAED9F%2B6s6ZpgK0gti4cy0itRzMjt63Yqh5A6M%2BkfDHI9HgDSU0NtAbGi98LsdVkOroJwFLCWSVJh2N0jOOUDVEIQRmcXNnJq%2Faeq%2BASiEA%2FSB3sW%2Bv854MeB%2BWYnkkJXbpRwA3zmTrAy7df4BBbUNhBxraCFLfLf%2BNfVawRhCRSqfHAptBf0YsqgBUSJaClBfQbrvm5L7ZI2nIoiYJ4CgDbp%2BUQ6AbzJD9R4Hkyp9%2F7npTDEJljiofEx4N3hgPKgZlBtEIxY1Zhg0FBfIGQ9DT%2Fa3Hy0rAY80y8TZrkAa9Zlc24yEcvekgnF3K1APD6l4KzYT7EsMFCSnHYsJ5mvOU%2BPY%2FBtPZI4z1pXjRdKJxeidjCCsvLEBjqkAaI%2FqlWleYVCjAUmy3PYLINlV9H4b9gecGPgp%2B2PCNJTO65ipRRI7ao%2BFVUKBA2%2F9BfP%2BBiXOM5JqKnAeogp6EmlMQewpvgXWNtiZfGLEMbafla2Q2fBrJoSj8dMX6M6mZ1vSp3uzdcub1BHffAW48vLTKo2xWCB2qB8gvdT2YUJviBPUClVzrh4nnGm6LW8Hj3YJ%2Fro9IYFbEfpHvPKpghC2Knv&X-Amz-Signature=533eab85b50a80976eae5099a1653ed3beb81ba54c147e69617f56c1ed43b196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5EEQPAC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrps25ih5cudokAHOZTopUHuZC2V0qpfHQ4QW%2B113RbgIhAPNaxTI5jHaTEOkiTc1EqHqRoSzBknAN%2B3aWgWJ3L8rmKv8DCC8QABoMNjM3NDIzMTgzODA1IgyPcF8XOOWUAlDrYUkq3ANMIfE1FHC20GmTVkPCC%2FrldG11uaNoWsMfDZnBoBQ9cJgd5ITOixXGDeS%2BMiOWz6UKqxyvwP6Gu9q5L6IniR0JepkIULTZ4XF7pZ6raqhmjg3QkD9JpkN7rVeIf9L1zsa6hVWx%2BqNOTG9Z67Vbinq5LeRDdi9ruCWseAsrWojCZzMHCbDfNm0Lt%2FcbDduqLek%2Fg6NQ9uejfSMm24sQVps9UUN%2FBEtGzza7mCTDk5omEJbndxosYO%2F3WQV%2BhvV0ta1DCRRU7G5rhmT4qBxcaa%2B4UDSZbWRi44HsEzVzOKFGROer6hjLq0xWLibzObeOPnebsdKda3t6K7wuKUqGbhF15WA5jX8CJXFjcveVYcmTMrhXf6PYY2afR%2BhkMao%2FMcWYiN6owEAPtqGroFCBdZT1TKcxoAUzgNWEPS3ob%2FJE4nFDefjG%2BejvfUhBnUS1FydshwwVO6iidKE%2FssPa6%2BjejhP7mrxBZ3oX1w7lvm%2BNwyJRotb%2BatQ1ldBwtcy2xh7ByLJCy2VjV1Xfj9z19oRKanxDBDIYlxKZJ0xhmKIv214uvhKFieiPt%2BOAhlMF3uWc6G1zKapkUGwf6I0GHBMzPjsYcP04Q1InZam6WeYOxSZHChbTN%2BN6qnjaRTCfs%2FLEBjqkAZZXj1%2F8AsiQm0EmPS89%2B4W9bDssxkNx8hqhkhDOiM7EWdOJ1PxiBY74IB%2BJzE4afmCZ0051nMa1QZtaxTPLV9cP%2BMwPzmZx7mD4TadFhC02zVu%2BegPMXGA%2FfY79IfXDS%2FPRqEWanXXxPG0cPNloAyHqs%2FVdFlgSZ1JWQX0OF7OE4ESAR66u8oI5fagSP2Pwe2%2F1aiqZ%2FFT49nY8IVKVufzlxSLD&X-Amz-Signature=a7b511e4a6234e3ff64dc50e8c74856fc953cffeab8b98860919f2602520d317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHFRA53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyZu6WKEyV2VqdJmsOd3noh0ej4pd%2Byx9YxdMFxL3pgIgecJoqCp0fwqutJp%2Bt1SyVIDMKhvGjodGVxXlRLxx4aMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKrUqke8O%2Brd25WhEyrcA3K30Zxg018hGDYE3iyOiFDsJTkVewN4j65YvP6KXqnM0k2Wxj3M3WgCoaQD569kJIzPU8YR8KbV7buoN8%2FNRqHV4TqvAzLPmSmtRhDit5C9n%2FWhdk4YWxncxmYmzh2qbDZBV3zz1Q1HefU1rHVx4x4afUNw5U6MV29%2Fs3WOuAk2uElaqO%2FsXJRmK7uqcmq9mJ4L%2B6%2FhTwWMfZr%2B1QyHhsZayIQUEncsoeBAImpRhy5K4RErCjywshBiPxTnKYFny9zzaSIKJ41gq4aCUyQAgMOORx%2FG5unvDrLzfj8SJlmmMhDOUbV192lLPfYSAlpUXca5%2BNQtknia0EFx4EWbi4OLfhZRiM%2FZ5D49yi4ktmyxDzM8PFYjWgXuyzQV4iLEwPxT7qEAeFjwfdyHyV7%2B8DDeJ2n1%2BkmEcl9qCvOBHeK8KPR2FoSiYrQDdSSoOWFQSECLLavBy%2Bi6%2BqgKN0q1cyl0nNZ%2BSk746dPRS5mnBoCy9tkceqJMX8AzNMr7wZFwZBm2MjRj5LwMxr9%2F3EV0psXTtV9mxdVfw6lxKVPJOarSMmxLj%2B3SF7X7XozuozO6n%2BGYf%2F9zL%2BgwldN9OyQ4WGoSDAKbJVEnURsNndsinZ%2BS%2Bpw9hbRrQ%2Fs4ZQyKMKWz8sQGOqUBuWn5BTnXIqe%2B2eixXl1bfQevigbCG8fyXSxa6cLEulKyum2xukuufolPVjsW0sOGs3ogUGccBvv24N5BUJoVe02a1uairosrWhdVbw6b%2Fe%2Fz7QE%2FnC846OeRsJIAcrcjKqCecjStBFYjeklk75J64r6VCaKJYdy67GphjkLGy5vAV%2BUeC5WWp8vBNKGj%2Fkt6anSnEcpPwFxL6dxXK5%2F8b3tubGfX&X-Amz-Signature=b2a608eaf3b63493f42fabeb7d998989febb758a5f84be9aecaea7c345311660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHFRA53%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyZu6WKEyV2VqdJmsOd3noh0ej4pd%2Byx9YxdMFxL3pgIgecJoqCp0fwqutJp%2Bt1SyVIDMKhvGjodGVxXlRLxx4aMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKrUqke8O%2Brd25WhEyrcA3K30Zxg018hGDYE3iyOiFDsJTkVewN4j65YvP6KXqnM0k2Wxj3M3WgCoaQD569kJIzPU8YR8KbV7buoN8%2FNRqHV4TqvAzLPmSmtRhDit5C9n%2FWhdk4YWxncxmYmzh2qbDZBV3zz1Q1HefU1rHVx4x4afUNw5U6MV29%2Fs3WOuAk2uElaqO%2FsXJRmK7uqcmq9mJ4L%2B6%2FhTwWMfZr%2B1QyHhsZayIQUEncsoeBAImpRhy5K4RErCjywshBiPxTnKYFny9zzaSIKJ41gq4aCUyQAgMOORx%2FG5unvDrLzfj8SJlmmMhDOUbV192lLPfYSAlpUXca5%2BNQtknia0EFx4EWbi4OLfhZRiM%2FZ5D49yi4ktmyxDzM8PFYjWgXuyzQV4iLEwPxT7qEAeFjwfdyHyV7%2B8DDeJ2n1%2BkmEcl9qCvOBHeK8KPR2FoSiYrQDdSSoOWFQSECLLavBy%2Bi6%2BqgKN0q1cyl0nNZ%2BSk746dPRS5mnBoCy9tkceqJMX8AzNMr7wZFwZBm2MjRj5LwMxr9%2F3EV0psXTtV9mxdVfw6lxKVPJOarSMmxLj%2B3SF7X7XozuozO6n%2BGYf%2F9zL%2BgwldN9OyQ4WGoSDAKbJVEnURsNndsinZ%2BS%2Bpw9hbRrQ%2Fs4ZQyKMKWz8sQGOqUBuWn5BTnXIqe%2B2eixXl1bfQevigbCG8fyXSxa6cLEulKyum2xukuufolPVjsW0sOGs3ogUGccBvv24N5BUJoVe02a1uairosrWhdVbw6b%2Fe%2Fz7QE%2FnC846OeRsJIAcrcjKqCecjStBFYjeklk75J64r6VCaKJYdy67GphjkLGy5vAV%2BUeC5WWp8vBNKGj%2Fkt6anSnEcpPwFxL6dxXK5%2F8b3tubGfX&X-Amz-Signature=6ee639269f06c7fb1c4528717351b3a9f7ce6ea58df6b93c366aae7842f530bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTPKYAEG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7hiz2dSoDnQte50wgYUCWOHaUoTjRlPhz26wgfPnsMAiEAj%2B3XYVtKTIVokfU4eIVWeULEmmFSoIUuXEdZssfeTZ4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO7mpzoi%2FAy11RNvYCrcA9cLTpgR3ckWDQJnOppx9Knho9NjZGmq6CyuDSuzpotBJpgGZXeWIOq9gAONbgPCczrAVKrZ5MAqDxWl4UM1QWCApl6v1l0qcnl5K6u%2FojrOQxl%2BAoVuM7yv3d3znwrM9ZKS%2FJEHLvHXNA2EOcpcw%2BWxhkf47q3UYa8CeSI0EozxlDWT5RXOng40hXpCzzyukYAgCEE%2BcJfmdFToNeReacGaJQvCmI%2BWlaaywFumLCh4Vks4f4ejKi6Nzd%2B%2FO977dpMg73vY6IFyL6kpUqgkyyFM5FKMJUymFLVHzl4Kcac9VXlVaA6Ym2pfBx8DiUB0p0AaZ%2F3v58aU1ohD2WSSMlm2Vz9y9a4R8DXAtctt9uN%2BSLn0%2Fjf5Er11YIgBDM%2BWlZ5Enr09KZHJETCS1MX4euDmdXTqDNm9cJQbsWpCsflCsGE%2FqgPK7ej9qqpxLx%2FnenkfA7Km%2FL6tcExWbhaU1mzaP7qemtvc095ZRERXE3AASCtV0O2wYzeLHr7%2FqhzDFp3NM%2BpynnZPnK2wpUkxYLj07nEJhKzvU2zsTV4uyrC1aLmOSZfDgDl2PFp%2FoAA%2BXHp1UhvtdSYhBf6mHbAMBTxA0J%2F%2FwlNLmBjvhDQtEa4d7i2Qn6sLVufUy7cmMNay8sQGOqUB3MMN1VYMVKmIPQ%2FE2b%2BRixAEf8wDRcGTg3SQTnwGInfMuvNfkmU3F7nCm4UfnDZ4YjLry4JXX2JM2I%2FzI7p2TZtCnAmJajsJ7xmSCmedvyC%2BmvINkHQKe8gH42C09qKWJCQHiSqDso%2Fcq4w0qWCN%2Bz8E6leiazPjrdqNw7SIiRo%2FLexNERl7m5g6xPeZBuxfin3OY0QGdwNqYGDRZe5GdEillWse&X-Amz-Signature=74b7babd4b2224e6419633e88093f1b3dfb7c828d648b446cb51a517b8d88203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTPKYAEG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7hiz2dSoDnQte50wgYUCWOHaUoTjRlPhz26wgfPnsMAiEAj%2B3XYVtKTIVokfU4eIVWeULEmmFSoIUuXEdZssfeTZ4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO7mpzoi%2FAy11RNvYCrcA9cLTpgR3ckWDQJnOppx9Knho9NjZGmq6CyuDSuzpotBJpgGZXeWIOq9gAONbgPCczrAVKrZ5MAqDxWl4UM1QWCApl6v1l0qcnl5K6u%2FojrOQxl%2BAoVuM7yv3d3znwrM9ZKS%2FJEHLvHXNA2EOcpcw%2BWxhkf47q3UYa8CeSI0EozxlDWT5RXOng40hXpCzzyukYAgCEE%2BcJfmdFToNeReacGaJQvCmI%2BWlaaywFumLCh4Vks4f4ejKi6Nzd%2B%2FO977dpMg73vY6IFyL6kpUqgkyyFM5FKMJUymFLVHzl4Kcac9VXlVaA6Ym2pfBx8DiUB0p0AaZ%2F3v58aU1ohD2WSSMlm2Vz9y9a4R8DXAtctt9uN%2BSLn0%2Fjf5Er11YIgBDM%2BWlZ5Enr09KZHJETCS1MX4euDmdXTqDNm9cJQbsWpCsflCsGE%2FqgPK7ej9qqpxLx%2FnenkfA7Km%2FL6tcExWbhaU1mzaP7qemtvc095ZRERXE3AASCtV0O2wYzeLHr7%2FqhzDFp3NM%2BpynnZPnK2wpUkxYLj07nEJhKzvU2zsTV4uyrC1aLmOSZfDgDl2PFp%2FoAA%2BXHp1UhvtdSYhBf6mHbAMBTxA0J%2F%2FwlNLmBjvhDQtEa4d7i2Qn6sLVufUy7cmMNay8sQGOqUB3MMN1VYMVKmIPQ%2FE2b%2BRixAEf8wDRcGTg3SQTnwGInfMuvNfkmU3F7nCm4UfnDZ4YjLry4JXX2JM2I%2FzI7p2TZtCnAmJajsJ7xmSCmedvyC%2BmvINkHQKe8gH42C09qKWJCQHiSqDso%2Fcq4w0qWCN%2Bz8E6leiazPjrdqNw7SIiRo%2FLexNERl7m5g6xPeZBuxfin3OY0QGdwNqYGDRZe5GdEillWse&X-Amz-Signature=c9cb80a7307e71fc65bbd99f0689425980607f39690122f5fade3c39d41ef014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTPKYAEG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7hiz2dSoDnQte50wgYUCWOHaUoTjRlPhz26wgfPnsMAiEAj%2B3XYVtKTIVokfU4eIVWeULEmmFSoIUuXEdZssfeTZ4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO7mpzoi%2FAy11RNvYCrcA9cLTpgR3ckWDQJnOppx9Knho9NjZGmq6CyuDSuzpotBJpgGZXeWIOq9gAONbgPCczrAVKrZ5MAqDxWl4UM1QWCApl6v1l0qcnl5K6u%2FojrOQxl%2BAoVuM7yv3d3znwrM9ZKS%2FJEHLvHXNA2EOcpcw%2BWxhkf47q3UYa8CeSI0EozxlDWT5RXOng40hXpCzzyukYAgCEE%2BcJfmdFToNeReacGaJQvCmI%2BWlaaywFumLCh4Vks4f4ejKi6Nzd%2B%2FO977dpMg73vY6IFyL6kpUqgkyyFM5FKMJUymFLVHzl4Kcac9VXlVaA6Ym2pfBx8DiUB0p0AaZ%2F3v58aU1ohD2WSSMlm2Vz9y9a4R8DXAtctt9uN%2BSLn0%2Fjf5Er11YIgBDM%2BWlZ5Enr09KZHJETCS1MX4euDmdXTqDNm9cJQbsWpCsflCsGE%2FqgPK7ej9qqpxLx%2FnenkfA7Km%2FL6tcExWbhaU1mzaP7qemtvc095ZRERXE3AASCtV0O2wYzeLHr7%2FqhzDFp3NM%2BpynnZPnK2wpUkxYLj07nEJhKzvU2zsTV4uyrC1aLmOSZfDgDl2PFp%2FoAA%2BXHp1UhvtdSYhBf6mHbAMBTxA0J%2F%2FwlNLmBjvhDQtEa4d7i2Qn6sLVufUy7cmMNay8sQGOqUB3MMN1VYMVKmIPQ%2FE2b%2BRixAEf8wDRcGTg3SQTnwGInfMuvNfkmU3F7nCm4UfnDZ4YjLry4JXX2JM2I%2FzI7p2TZtCnAmJajsJ7xmSCmedvyC%2BmvINkHQKe8gH42C09qKWJCQHiSqDso%2Fcq4w0qWCN%2Bz8E6leiazPjrdqNw7SIiRo%2FLexNERl7m5g6xPeZBuxfin3OY0QGdwNqYGDRZe5GdEillWse&X-Amz-Signature=0a77c7dfbef310f77d9f2520a3080fdbb631395e787167f743f89207120e02a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTPKYAEG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7hiz2dSoDnQte50wgYUCWOHaUoTjRlPhz26wgfPnsMAiEAj%2B3XYVtKTIVokfU4eIVWeULEmmFSoIUuXEdZssfeTZ4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO7mpzoi%2FAy11RNvYCrcA9cLTpgR3ckWDQJnOppx9Knho9NjZGmq6CyuDSuzpotBJpgGZXeWIOq9gAONbgPCczrAVKrZ5MAqDxWl4UM1QWCApl6v1l0qcnl5K6u%2FojrOQxl%2BAoVuM7yv3d3znwrM9ZKS%2FJEHLvHXNA2EOcpcw%2BWxhkf47q3UYa8CeSI0EozxlDWT5RXOng40hXpCzzyukYAgCEE%2BcJfmdFToNeReacGaJQvCmI%2BWlaaywFumLCh4Vks4f4ejKi6Nzd%2B%2FO977dpMg73vY6IFyL6kpUqgkyyFM5FKMJUymFLVHzl4Kcac9VXlVaA6Ym2pfBx8DiUB0p0AaZ%2F3v58aU1ohD2WSSMlm2Vz9y9a4R8DXAtctt9uN%2BSLn0%2Fjf5Er11YIgBDM%2BWlZ5Enr09KZHJETCS1MX4euDmdXTqDNm9cJQbsWpCsflCsGE%2FqgPK7ej9qqpxLx%2FnenkfA7Km%2FL6tcExWbhaU1mzaP7qemtvc095ZRERXE3AASCtV0O2wYzeLHr7%2FqhzDFp3NM%2BpynnZPnK2wpUkxYLj07nEJhKzvU2zsTV4uyrC1aLmOSZfDgDl2PFp%2FoAA%2BXHp1UhvtdSYhBf6mHbAMBTxA0J%2F%2FwlNLmBjvhDQtEa4d7i2Qn6sLVufUy7cmMNay8sQGOqUB3MMN1VYMVKmIPQ%2FE2b%2BRixAEf8wDRcGTg3SQTnwGInfMuvNfkmU3F7nCm4UfnDZ4YjLry4JXX2JM2I%2FzI7p2TZtCnAmJajsJ7xmSCmedvyC%2BmvINkHQKe8gH42C09qKWJCQHiSqDso%2Fcq4w0qWCN%2Bz8E6leiazPjrdqNw7SIiRo%2FLexNERl7m5g6xPeZBuxfin3OY0QGdwNqYGDRZe5GdEillWse&X-Amz-Signature=7c46dee8d3eccacb3b2823e06f8023e3eb93bcdc0086ce2df0b47f45aa32ba3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTPKYAEG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7hiz2dSoDnQte50wgYUCWOHaUoTjRlPhz26wgfPnsMAiEAj%2B3XYVtKTIVokfU4eIVWeULEmmFSoIUuXEdZssfeTZ4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO7mpzoi%2FAy11RNvYCrcA9cLTpgR3ckWDQJnOppx9Knho9NjZGmq6CyuDSuzpotBJpgGZXeWIOq9gAONbgPCczrAVKrZ5MAqDxWl4UM1QWCApl6v1l0qcnl5K6u%2FojrOQxl%2BAoVuM7yv3d3znwrM9ZKS%2FJEHLvHXNA2EOcpcw%2BWxhkf47q3UYa8CeSI0EozxlDWT5RXOng40hXpCzzyukYAgCEE%2BcJfmdFToNeReacGaJQvCmI%2BWlaaywFumLCh4Vks4f4ejKi6Nzd%2B%2FO977dpMg73vY6IFyL6kpUqgkyyFM5FKMJUymFLVHzl4Kcac9VXlVaA6Ym2pfBx8DiUB0p0AaZ%2F3v58aU1ohD2WSSMlm2Vz9y9a4R8DXAtctt9uN%2BSLn0%2Fjf5Er11YIgBDM%2BWlZ5Enr09KZHJETCS1MX4euDmdXTqDNm9cJQbsWpCsflCsGE%2FqgPK7ej9qqpxLx%2FnenkfA7Km%2FL6tcExWbhaU1mzaP7qemtvc095ZRERXE3AASCtV0O2wYzeLHr7%2FqhzDFp3NM%2BpynnZPnK2wpUkxYLj07nEJhKzvU2zsTV4uyrC1aLmOSZfDgDl2PFp%2FoAA%2BXHp1UhvtdSYhBf6mHbAMBTxA0J%2F%2FwlNLmBjvhDQtEa4d7i2Qn6sLVufUy7cmMNay8sQGOqUB3MMN1VYMVKmIPQ%2FE2b%2BRixAEf8wDRcGTg3SQTnwGInfMuvNfkmU3F7nCm4UfnDZ4YjLry4JXX2JM2I%2FzI7p2TZtCnAmJajsJ7xmSCmedvyC%2BmvINkHQKe8gH42C09qKWJCQHiSqDso%2Fcq4w0qWCN%2Bz8E6leiazPjrdqNw7SIiRo%2FLexNERl7m5g6xPeZBuxfin3OY0QGdwNqYGDRZe5GdEillWse&X-Amz-Signature=12086ee9617943b975155b8b83c43eceab76cc956bdacc28637dcd31e86f786b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTPKYAEG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7hiz2dSoDnQte50wgYUCWOHaUoTjRlPhz26wgfPnsMAiEAj%2B3XYVtKTIVokfU4eIVWeULEmmFSoIUuXEdZssfeTZ4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO7mpzoi%2FAy11RNvYCrcA9cLTpgR3ckWDQJnOppx9Knho9NjZGmq6CyuDSuzpotBJpgGZXeWIOq9gAONbgPCczrAVKrZ5MAqDxWl4UM1QWCApl6v1l0qcnl5K6u%2FojrOQxl%2BAoVuM7yv3d3znwrM9ZKS%2FJEHLvHXNA2EOcpcw%2BWxhkf47q3UYa8CeSI0EozxlDWT5RXOng40hXpCzzyukYAgCEE%2BcJfmdFToNeReacGaJQvCmI%2BWlaaywFumLCh4Vks4f4ejKi6Nzd%2B%2FO977dpMg73vY6IFyL6kpUqgkyyFM5FKMJUymFLVHzl4Kcac9VXlVaA6Ym2pfBx8DiUB0p0AaZ%2F3v58aU1ohD2WSSMlm2Vz9y9a4R8DXAtctt9uN%2BSLn0%2Fjf5Er11YIgBDM%2BWlZ5Enr09KZHJETCS1MX4euDmdXTqDNm9cJQbsWpCsflCsGE%2FqgPK7ej9qqpxLx%2FnenkfA7Km%2FL6tcExWbhaU1mzaP7qemtvc095ZRERXE3AASCtV0O2wYzeLHr7%2FqhzDFp3NM%2BpynnZPnK2wpUkxYLj07nEJhKzvU2zsTV4uyrC1aLmOSZfDgDl2PFp%2FoAA%2BXHp1UhvtdSYhBf6mHbAMBTxA0J%2F%2FwlNLmBjvhDQtEa4d7i2Qn6sLVufUy7cmMNay8sQGOqUB3MMN1VYMVKmIPQ%2FE2b%2BRixAEf8wDRcGTg3SQTnwGInfMuvNfkmU3F7nCm4UfnDZ4YjLry4JXX2JM2I%2FzI7p2TZtCnAmJajsJ7xmSCmedvyC%2BmvINkHQKe8gH42C09qKWJCQHiSqDso%2Fcq4w0qWCN%2Bz8E6leiazPjrdqNw7SIiRo%2FLexNERl7m5g6xPeZBuxfin3OY0QGdwNqYGDRZe5GdEillWse&X-Amz-Signature=0316ce595ec674f34dcbf027718723079450ffd023dfb6473fb6610934883f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTPKYAEG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7hiz2dSoDnQte50wgYUCWOHaUoTjRlPhz26wgfPnsMAiEAj%2B3XYVtKTIVokfU4eIVWeULEmmFSoIUuXEdZssfeTZ4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO7mpzoi%2FAy11RNvYCrcA9cLTpgR3ckWDQJnOppx9Knho9NjZGmq6CyuDSuzpotBJpgGZXeWIOq9gAONbgPCczrAVKrZ5MAqDxWl4UM1QWCApl6v1l0qcnl5K6u%2FojrOQxl%2BAoVuM7yv3d3znwrM9ZKS%2FJEHLvHXNA2EOcpcw%2BWxhkf47q3UYa8CeSI0EozxlDWT5RXOng40hXpCzzyukYAgCEE%2BcJfmdFToNeReacGaJQvCmI%2BWlaaywFumLCh4Vks4f4ejKi6Nzd%2B%2FO977dpMg73vY6IFyL6kpUqgkyyFM5FKMJUymFLVHzl4Kcac9VXlVaA6Ym2pfBx8DiUB0p0AaZ%2F3v58aU1ohD2WSSMlm2Vz9y9a4R8DXAtctt9uN%2BSLn0%2Fjf5Er11YIgBDM%2BWlZ5Enr09KZHJETCS1MX4euDmdXTqDNm9cJQbsWpCsflCsGE%2FqgPK7ej9qqpxLx%2FnenkfA7Km%2FL6tcExWbhaU1mzaP7qemtvc095ZRERXE3AASCtV0O2wYzeLHr7%2FqhzDFp3NM%2BpynnZPnK2wpUkxYLj07nEJhKzvU2zsTV4uyrC1aLmOSZfDgDl2PFp%2FoAA%2BXHp1UhvtdSYhBf6mHbAMBTxA0J%2F%2FwlNLmBjvhDQtEa4d7i2Qn6sLVufUy7cmMNay8sQGOqUB3MMN1VYMVKmIPQ%2FE2b%2BRixAEf8wDRcGTg3SQTnwGInfMuvNfkmU3F7nCm4UfnDZ4YjLry4JXX2JM2I%2FzI7p2TZtCnAmJajsJ7xmSCmedvyC%2BmvINkHQKe8gH42C09qKWJCQHiSqDso%2Fcq4w0qWCN%2Bz8E6leiazPjrdqNw7SIiRo%2FLexNERl7m5g6xPeZBuxfin3OY0QGdwNqYGDRZe5GdEillWse&X-Amz-Signature=1e1afb701f8c201f8fe13f071fdc8d988e2883cfb76bd2018b7c561a52335d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTPKYAEG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7hiz2dSoDnQte50wgYUCWOHaUoTjRlPhz26wgfPnsMAiEAj%2B3XYVtKTIVokfU4eIVWeULEmmFSoIUuXEdZssfeTZ4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO7mpzoi%2FAy11RNvYCrcA9cLTpgR3ckWDQJnOppx9Knho9NjZGmq6CyuDSuzpotBJpgGZXeWIOq9gAONbgPCczrAVKrZ5MAqDxWl4UM1QWCApl6v1l0qcnl5K6u%2FojrOQxl%2BAoVuM7yv3d3znwrM9ZKS%2FJEHLvHXNA2EOcpcw%2BWxhkf47q3UYa8CeSI0EozxlDWT5RXOng40hXpCzzyukYAgCEE%2BcJfmdFToNeReacGaJQvCmI%2BWlaaywFumLCh4Vks4f4ejKi6Nzd%2B%2FO977dpMg73vY6IFyL6kpUqgkyyFM5FKMJUymFLVHzl4Kcac9VXlVaA6Ym2pfBx8DiUB0p0AaZ%2F3v58aU1ohD2WSSMlm2Vz9y9a4R8DXAtctt9uN%2BSLn0%2Fjf5Er11YIgBDM%2BWlZ5Enr09KZHJETCS1MX4euDmdXTqDNm9cJQbsWpCsflCsGE%2FqgPK7ej9qqpxLx%2FnenkfA7Km%2FL6tcExWbhaU1mzaP7qemtvc095ZRERXE3AASCtV0O2wYzeLHr7%2FqhzDFp3NM%2BpynnZPnK2wpUkxYLj07nEJhKzvU2zsTV4uyrC1aLmOSZfDgDl2PFp%2FoAA%2BXHp1UhvtdSYhBf6mHbAMBTxA0J%2F%2FwlNLmBjvhDQtEa4d7i2Qn6sLVufUy7cmMNay8sQGOqUB3MMN1VYMVKmIPQ%2FE2b%2BRixAEf8wDRcGTg3SQTnwGInfMuvNfkmU3F7nCm4UfnDZ4YjLry4JXX2JM2I%2FzI7p2TZtCnAmJajsJ7xmSCmedvyC%2BmvINkHQKe8gH42C09qKWJCQHiSqDso%2Fcq4w0qWCN%2Bz8E6leiazPjrdqNw7SIiRo%2FLexNERl7m5g6xPeZBuxfin3OY0QGdwNqYGDRZe5GdEillWse&X-Amz-Signature=4ec7810d6aabf4c67f9cd737ec7068c99dc640617a1140859321e12bd9517caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTPKYAEG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7hiz2dSoDnQte50wgYUCWOHaUoTjRlPhz26wgfPnsMAiEAj%2B3XYVtKTIVokfU4eIVWeULEmmFSoIUuXEdZssfeTZ4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO7mpzoi%2FAy11RNvYCrcA9cLTpgR3ckWDQJnOppx9Knho9NjZGmq6CyuDSuzpotBJpgGZXeWIOq9gAONbgPCczrAVKrZ5MAqDxWl4UM1QWCApl6v1l0qcnl5K6u%2FojrOQxl%2BAoVuM7yv3d3znwrM9ZKS%2FJEHLvHXNA2EOcpcw%2BWxhkf47q3UYa8CeSI0EozxlDWT5RXOng40hXpCzzyukYAgCEE%2BcJfmdFToNeReacGaJQvCmI%2BWlaaywFumLCh4Vks4f4ejKi6Nzd%2B%2FO977dpMg73vY6IFyL6kpUqgkyyFM5FKMJUymFLVHzl4Kcac9VXlVaA6Ym2pfBx8DiUB0p0AaZ%2F3v58aU1ohD2WSSMlm2Vz9y9a4R8DXAtctt9uN%2BSLn0%2Fjf5Er11YIgBDM%2BWlZ5Enr09KZHJETCS1MX4euDmdXTqDNm9cJQbsWpCsflCsGE%2FqgPK7ej9qqpxLx%2FnenkfA7Km%2FL6tcExWbhaU1mzaP7qemtvc095ZRERXE3AASCtV0O2wYzeLHr7%2FqhzDFp3NM%2BpynnZPnK2wpUkxYLj07nEJhKzvU2zsTV4uyrC1aLmOSZfDgDl2PFp%2FoAA%2BXHp1UhvtdSYhBf6mHbAMBTxA0J%2F%2FwlNLmBjvhDQtEa4d7i2Qn6sLVufUy7cmMNay8sQGOqUB3MMN1VYMVKmIPQ%2FE2b%2BRixAEf8wDRcGTg3SQTnwGInfMuvNfkmU3F7nCm4UfnDZ4YjLry4JXX2JM2I%2FzI7p2TZtCnAmJajsJ7xmSCmedvyC%2BmvINkHQKe8gH42C09qKWJCQHiSqDso%2Fcq4w0qWCN%2Bz8E6leiazPjrdqNw7SIiRo%2FLexNERl7m5g6xPeZBuxfin3OY0QGdwNqYGDRZe5GdEillWse&X-Amz-Signature=c718270cac5abfa555c695abe84eee52b735590dacfe8e5cf33b4cdddb75d1ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTPKYAEG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7hiz2dSoDnQte50wgYUCWOHaUoTjRlPhz26wgfPnsMAiEAj%2B3XYVtKTIVokfU4eIVWeULEmmFSoIUuXEdZssfeTZ4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO7mpzoi%2FAy11RNvYCrcA9cLTpgR3ckWDQJnOppx9Knho9NjZGmq6CyuDSuzpotBJpgGZXeWIOq9gAONbgPCczrAVKrZ5MAqDxWl4UM1QWCApl6v1l0qcnl5K6u%2FojrOQxl%2BAoVuM7yv3d3znwrM9ZKS%2FJEHLvHXNA2EOcpcw%2BWxhkf47q3UYa8CeSI0EozxlDWT5RXOng40hXpCzzyukYAgCEE%2BcJfmdFToNeReacGaJQvCmI%2BWlaaywFumLCh4Vks4f4ejKi6Nzd%2B%2FO977dpMg73vY6IFyL6kpUqgkyyFM5FKMJUymFLVHzl4Kcac9VXlVaA6Ym2pfBx8DiUB0p0AaZ%2F3v58aU1ohD2WSSMlm2Vz9y9a4R8DXAtctt9uN%2BSLn0%2Fjf5Er11YIgBDM%2BWlZ5Enr09KZHJETCS1MX4euDmdXTqDNm9cJQbsWpCsflCsGE%2FqgPK7ej9qqpxLx%2FnenkfA7Km%2FL6tcExWbhaU1mzaP7qemtvc095ZRERXE3AASCtV0O2wYzeLHr7%2FqhzDFp3NM%2BpynnZPnK2wpUkxYLj07nEJhKzvU2zsTV4uyrC1aLmOSZfDgDl2PFp%2FoAA%2BXHp1UhvtdSYhBf6mHbAMBTxA0J%2F%2FwlNLmBjvhDQtEa4d7i2Qn6sLVufUy7cmMNay8sQGOqUB3MMN1VYMVKmIPQ%2FE2b%2BRixAEf8wDRcGTg3SQTnwGInfMuvNfkmU3F7nCm4UfnDZ4YjLry4JXX2JM2I%2FzI7p2TZtCnAmJajsJ7xmSCmedvyC%2BmvINkHQKe8gH42C09qKWJCQHiSqDso%2Fcq4w0qWCN%2Bz8E6leiazPjrdqNw7SIiRo%2FLexNERl7m5g6xPeZBuxfin3OY0QGdwNqYGDRZe5GdEillWse&X-Amz-Signature=97d27a0b150ebf1ff94a9b9345915b4a88f62049880bb97d277b818b08f0c268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
