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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3MVGOS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDKjxJa1OLcdUBR6WevMrY028u43PiYrzrbUgA5zpOn0gIgEm1lEF%2BLWnpcLCW5qCLXb3P99QtI6vsUPkeBOS473A8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGVhQT6FsGABxQKb9yrcA%2Fjk6WGlUYQkeWKkNet4Q50%2BP8o7FYTOtEU2qlNgwl94JIhejxhPv1hKLwl4zc2%2BpqBqyDVQNdwx0E9Ew4ik%2Bt6kbk2c4FniIozrpzCRdXK26F38E2KWJ3dI1IG9sdT3UJDv19m%2FQnVXEG6SdeMAxa9ptrAPkFKcDPZVzMafq29C8U%2BDre8vHruuTX%2FQ8bJHe3dwhckkTX%2FvF0ABEya%2BoThg9wz2aZ2ip3iJ0gGeFTzTqd%2B5hYDvoMRqXt708%2BrWA0Qm57WglGeN%2BPhVWkZq16c432UCLtWZfBfYXtRtMOaCi37m08UEC8bsWtJ7Kyt2y437plP02Lxyt1Er78jY3zTVzW4y%2Bv0mx7LB8anxGlutEKOVkBqdIoKqmo0UL%2FCMmUOzQLQfGe78WpYxn6VDibEsuOGmmt1mupO6loQVl8WGsLKIkKYt0oE8%2FzpEb5IraGuc4o8jnVtBUNAnNU6ft%2BUMhZIG3nT2qETj4psvLHldWjpAxVq34wxw4cBq42a%2F4WXyQVA3ZfsuzsHOHLYsMNg5dG1bOX4K0cHox5ggxbprV7YVpbs1JAxNX8sTZgYmhJ%2BA1zthSeMcohr8nguTIFhiEzxrIKdOA%2BxSBOlZPGk44R59P4FUR0f3uklnMOfBk8QGOqUB2xZm6S2Igeuf0B%2Feskbglg6TlClSelkZUWfE1kyoVRV%2B9H%2BCwo1PDygwNd3JDzlasITWm33guP6PEAa5aqtMpRiUm441WIFcjGoG9yBCr5asBFuswzTo46eT3Q2VjYan0YFUfb1nZskKYxt3iogH2SPp6uV16S8nHFEfwc9CRQelbS8ATKc7MsJ88h%2BwZTSbWiVPFw6CdgGZr%2BEyTZow%2BpPcMZ%2FN&X-Amz-Signature=970bc82f333ca23738e9ebfd947ef3d0d5d53ce38ec99cc93105dea7bccb97bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3MVGOS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDKjxJa1OLcdUBR6WevMrY028u43PiYrzrbUgA5zpOn0gIgEm1lEF%2BLWnpcLCW5qCLXb3P99QtI6vsUPkeBOS473A8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGVhQT6FsGABxQKb9yrcA%2Fjk6WGlUYQkeWKkNet4Q50%2BP8o7FYTOtEU2qlNgwl94JIhejxhPv1hKLwl4zc2%2BpqBqyDVQNdwx0E9Ew4ik%2Bt6kbk2c4FniIozrpzCRdXK26F38E2KWJ3dI1IG9sdT3UJDv19m%2FQnVXEG6SdeMAxa9ptrAPkFKcDPZVzMafq29C8U%2BDre8vHruuTX%2FQ8bJHe3dwhckkTX%2FvF0ABEya%2BoThg9wz2aZ2ip3iJ0gGeFTzTqd%2B5hYDvoMRqXt708%2BrWA0Qm57WglGeN%2BPhVWkZq16c432UCLtWZfBfYXtRtMOaCi37m08UEC8bsWtJ7Kyt2y437plP02Lxyt1Er78jY3zTVzW4y%2Bv0mx7LB8anxGlutEKOVkBqdIoKqmo0UL%2FCMmUOzQLQfGe78WpYxn6VDibEsuOGmmt1mupO6loQVl8WGsLKIkKYt0oE8%2FzpEb5IraGuc4o8jnVtBUNAnNU6ft%2BUMhZIG3nT2qETj4psvLHldWjpAxVq34wxw4cBq42a%2F4WXyQVA3ZfsuzsHOHLYsMNg5dG1bOX4K0cHox5ggxbprV7YVpbs1JAxNX8sTZgYmhJ%2BA1zthSeMcohr8nguTIFhiEzxrIKdOA%2BxSBOlZPGk44R59P4FUR0f3uklnMOfBk8QGOqUB2xZm6S2Igeuf0B%2Feskbglg6TlClSelkZUWfE1kyoVRV%2B9H%2BCwo1PDygwNd3JDzlasITWm33guP6PEAa5aqtMpRiUm441WIFcjGoG9yBCr5asBFuswzTo46eT3Q2VjYan0YFUfb1nZskKYxt3iogH2SPp6uV16S8nHFEfwc9CRQelbS8ATKc7MsJ88h%2BwZTSbWiVPFw6CdgGZr%2BEyTZow%2BpPcMZ%2FN&X-Amz-Signature=fb05e71307a710a9cf8b4937360d92b140665b1d9115a22cbf3b703d89a6e427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3MVGOS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDKjxJa1OLcdUBR6WevMrY028u43PiYrzrbUgA5zpOn0gIgEm1lEF%2BLWnpcLCW5qCLXb3P99QtI6vsUPkeBOS473A8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGVhQT6FsGABxQKb9yrcA%2Fjk6WGlUYQkeWKkNet4Q50%2BP8o7FYTOtEU2qlNgwl94JIhejxhPv1hKLwl4zc2%2BpqBqyDVQNdwx0E9Ew4ik%2Bt6kbk2c4FniIozrpzCRdXK26F38E2KWJ3dI1IG9sdT3UJDv19m%2FQnVXEG6SdeMAxa9ptrAPkFKcDPZVzMafq29C8U%2BDre8vHruuTX%2FQ8bJHe3dwhckkTX%2FvF0ABEya%2BoThg9wz2aZ2ip3iJ0gGeFTzTqd%2B5hYDvoMRqXt708%2BrWA0Qm57WglGeN%2BPhVWkZq16c432UCLtWZfBfYXtRtMOaCi37m08UEC8bsWtJ7Kyt2y437plP02Lxyt1Er78jY3zTVzW4y%2Bv0mx7LB8anxGlutEKOVkBqdIoKqmo0UL%2FCMmUOzQLQfGe78WpYxn6VDibEsuOGmmt1mupO6loQVl8WGsLKIkKYt0oE8%2FzpEb5IraGuc4o8jnVtBUNAnNU6ft%2BUMhZIG3nT2qETj4psvLHldWjpAxVq34wxw4cBq42a%2F4WXyQVA3ZfsuzsHOHLYsMNg5dG1bOX4K0cHox5ggxbprV7YVpbs1JAxNX8sTZgYmhJ%2BA1zthSeMcohr8nguTIFhiEzxrIKdOA%2BxSBOlZPGk44R59P4FUR0f3uklnMOfBk8QGOqUB2xZm6S2Igeuf0B%2Feskbglg6TlClSelkZUWfE1kyoVRV%2B9H%2BCwo1PDygwNd3JDzlasITWm33guP6PEAa5aqtMpRiUm441WIFcjGoG9yBCr5asBFuswzTo46eT3Q2VjYan0YFUfb1nZskKYxt3iogH2SPp6uV16S8nHFEfwc9CRQelbS8ATKc7MsJ88h%2BwZTSbWiVPFw6CdgGZr%2BEyTZow%2BpPcMZ%2FN&X-Amz-Signature=a096dff6bace453010876f8e17f05049577f04ace826236b23e8fd948a231acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3MVGOS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDKjxJa1OLcdUBR6WevMrY028u43PiYrzrbUgA5zpOn0gIgEm1lEF%2BLWnpcLCW5qCLXb3P99QtI6vsUPkeBOS473A8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGVhQT6FsGABxQKb9yrcA%2Fjk6WGlUYQkeWKkNet4Q50%2BP8o7FYTOtEU2qlNgwl94JIhejxhPv1hKLwl4zc2%2BpqBqyDVQNdwx0E9Ew4ik%2Bt6kbk2c4FniIozrpzCRdXK26F38E2KWJ3dI1IG9sdT3UJDv19m%2FQnVXEG6SdeMAxa9ptrAPkFKcDPZVzMafq29C8U%2BDre8vHruuTX%2FQ8bJHe3dwhckkTX%2FvF0ABEya%2BoThg9wz2aZ2ip3iJ0gGeFTzTqd%2B5hYDvoMRqXt708%2BrWA0Qm57WglGeN%2BPhVWkZq16c432UCLtWZfBfYXtRtMOaCi37m08UEC8bsWtJ7Kyt2y437plP02Lxyt1Er78jY3zTVzW4y%2Bv0mx7LB8anxGlutEKOVkBqdIoKqmo0UL%2FCMmUOzQLQfGe78WpYxn6VDibEsuOGmmt1mupO6loQVl8WGsLKIkKYt0oE8%2FzpEb5IraGuc4o8jnVtBUNAnNU6ft%2BUMhZIG3nT2qETj4psvLHldWjpAxVq34wxw4cBq42a%2F4WXyQVA3ZfsuzsHOHLYsMNg5dG1bOX4K0cHox5ggxbprV7YVpbs1JAxNX8sTZgYmhJ%2BA1zthSeMcohr8nguTIFhiEzxrIKdOA%2BxSBOlZPGk44R59P4FUR0f3uklnMOfBk8QGOqUB2xZm6S2Igeuf0B%2Feskbglg6TlClSelkZUWfE1kyoVRV%2B9H%2BCwo1PDygwNd3JDzlasITWm33guP6PEAa5aqtMpRiUm441WIFcjGoG9yBCr5asBFuswzTo46eT3Q2VjYan0YFUfb1nZskKYxt3iogH2SPp6uV16S8nHFEfwc9CRQelbS8ATKc7MsJ88h%2BwZTSbWiVPFw6CdgGZr%2BEyTZow%2BpPcMZ%2FN&X-Amz-Signature=293e258fd8935a8698279f8e403d4a0d01ef88b404c72ad4b3decd0d94783607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3MVGOS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDKjxJa1OLcdUBR6WevMrY028u43PiYrzrbUgA5zpOn0gIgEm1lEF%2BLWnpcLCW5qCLXb3P99QtI6vsUPkeBOS473A8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGVhQT6FsGABxQKb9yrcA%2Fjk6WGlUYQkeWKkNet4Q50%2BP8o7FYTOtEU2qlNgwl94JIhejxhPv1hKLwl4zc2%2BpqBqyDVQNdwx0E9Ew4ik%2Bt6kbk2c4FniIozrpzCRdXK26F38E2KWJ3dI1IG9sdT3UJDv19m%2FQnVXEG6SdeMAxa9ptrAPkFKcDPZVzMafq29C8U%2BDre8vHruuTX%2FQ8bJHe3dwhckkTX%2FvF0ABEya%2BoThg9wz2aZ2ip3iJ0gGeFTzTqd%2B5hYDvoMRqXt708%2BrWA0Qm57WglGeN%2BPhVWkZq16c432UCLtWZfBfYXtRtMOaCi37m08UEC8bsWtJ7Kyt2y437plP02Lxyt1Er78jY3zTVzW4y%2Bv0mx7LB8anxGlutEKOVkBqdIoKqmo0UL%2FCMmUOzQLQfGe78WpYxn6VDibEsuOGmmt1mupO6loQVl8WGsLKIkKYt0oE8%2FzpEb5IraGuc4o8jnVtBUNAnNU6ft%2BUMhZIG3nT2qETj4psvLHldWjpAxVq34wxw4cBq42a%2F4WXyQVA3ZfsuzsHOHLYsMNg5dG1bOX4K0cHox5ggxbprV7YVpbs1JAxNX8sTZgYmhJ%2BA1zthSeMcohr8nguTIFhiEzxrIKdOA%2BxSBOlZPGk44R59P4FUR0f3uklnMOfBk8QGOqUB2xZm6S2Igeuf0B%2Feskbglg6TlClSelkZUWfE1kyoVRV%2B9H%2BCwo1PDygwNd3JDzlasITWm33guP6PEAa5aqtMpRiUm441WIFcjGoG9yBCr5asBFuswzTo46eT3Q2VjYan0YFUfb1nZskKYxt3iogH2SPp6uV16S8nHFEfwc9CRQelbS8ATKc7MsJ88h%2BwZTSbWiVPFw6CdgGZr%2BEyTZow%2BpPcMZ%2FN&X-Amz-Signature=d540a57ec954083762b46445484516083bf5b5a95b4d3bac6f4b67bf5aac6d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3MVGOS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDKjxJa1OLcdUBR6WevMrY028u43PiYrzrbUgA5zpOn0gIgEm1lEF%2BLWnpcLCW5qCLXb3P99QtI6vsUPkeBOS473A8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGVhQT6FsGABxQKb9yrcA%2Fjk6WGlUYQkeWKkNet4Q50%2BP8o7FYTOtEU2qlNgwl94JIhejxhPv1hKLwl4zc2%2BpqBqyDVQNdwx0E9Ew4ik%2Bt6kbk2c4FniIozrpzCRdXK26F38E2KWJ3dI1IG9sdT3UJDv19m%2FQnVXEG6SdeMAxa9ptrAPkFKcDPZVzMafq29C8U%2BDre8vHruuTX%2FQ8bJHe3dwhckkTX%2FvF0ABEya%2BoThg9wz2aZ2ip3iJ0gGeFTzTqd%2B5hYDvoMRqXt708%2BrWA0Qm57WglGeN%2BPhVWkZq16c432UCLtWZfBfYXtRtMOaCi37m08UEC8bsWtJ7Kyt2y437plP02Lxyt1Er78jY3zTVzW4y%2Bv0mx7LB8anxGlutEKOVkBqdIoKqmo0UL%2FCMmUOzQLQfGe78WpYxn6VDibEsuOGmmt1mupO6loQVl8WGsLKIkKYt0oE8%2FzpEb5IraGuc4o8jnVtBUNAnNU6ft%2BUMhZIG3nT2qETj4psvLHldWjpAxVq34wxw4cBq42a%2F4WXyQVA3ZfsuzsHOHLYsMNg5dG1bOX4K0cHox5ggxbprV7YVpbs1JAxNX8sTZgYmhJ%2BA1zthSeMcohr8nguTIFhiEzxrIKdOA%2BxSBOlZPGk44R59P4FUR0f3uklnMOfBk8QGOqUB2xZm6S2Igeuf0B%2Feskbglg6TlClSelkZUWfE1kyoVRV%2B9H%2BCwo1PDygwNd3JDzlasITWm33guP6PEAa5aqtMpRiUm441WIFcjGoG9yBCr5asBFuswzTo46eT3Q2VjYan0YFUfb1nZskKYxt3iogH2SPp6uV16S8nHFEfwc9CRQelbS8ATKc7MsJ88h%2BwZTSbWiVPFw6CdgGZr%2BEyTZow%2BpPcMZ%2FN&X-Amz-Signature=7449da58633603428d7141eb7ef98372c43386ae8c3f88b72b5d38fba8ee31b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3MVGOS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDKjxJa1OLcdUBR6WevMrY028u43PiYrzrbUgA5zpOn0gIgEm1lEF%2BLWnpcLCW5qCLXb3P99QtI6vsUPkeBOS473A8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGVhQT6FsGABxQKb9yrcA%2Fjk6WGlUYQkeWKkNet4Q50%2BP8o7FYTOtEU2qlNgwl94JIhejxhPv1hKLwl4zc2%2BpqBqyDVQNdwx0E9Ew4ik%2Bt6kbk2c4FniIozrpzCRdXK26F38E2KWJ3dI1IG9sdT3UJDv19m%2FQnVXEG6SdeMAxa9ptrAPkFKcDPZVzMafq29C8U%2BDre8vHruuTX%2FQ8bJHe3dwhckkTX%2FvF0ABEya%2BoThg9wz2aZ2ip3iJ0gGeFTzTqd%2B5hYDvoMRqXt708%2BrWA0Qm57WglGeN%2BPhVWkZq16c432UCLtWZfBfYXtRtMOaCi37m08UEC8bsWtJ7Kyt2y437plP02Lxyt1Er78jY3zTVzW4y%2Bv0mx7LB8anxGlutEKOVkBqdIoKqmo0UL%2FCMmUOzQLQfGe78WpYxn6VDibEsuOGmmt1mupO6loQVl8WGsLKIkKYt0oE8%2FzpEb5IraGuc4o8jnVtBUNAnNU6ft%2BUMhZIG3nT2qETj4psvLHldWjpAxVq34wxw4cBq42a%2F4WXyQVA3ZfsuzsHOHLYsMNg5dG1bOX4K0cHox5ggxbprV7YVpbs1JAxNX8sTZgYmhJ%2BA1zthSeMcohr8nguTIFhiEzxrIKdOA%2BxSBOlZPGk44R59P4FUR0f3uklnMOfBk8QGOqUB2xZm6S2Igeuf0B%2Feskbglg6TlClSelkZUWfE1kyoVRV%2B9H%2BCwo1PDygwNd3JDzlasITWm33guP6PEAa5aqtMpRiUm441WIFcjGoG9yBCr5asBFuswzTo46eT3Q2VjYan0YFUfb1nZskKYxt3iogH2SPp6uV16S8nHFEfwc9CRQelbS8ATKc7MsJ88h%2BwZTSbWiVPFw6CdgGZr%2BEyTZow%2BpPcMZ%2FN&X-Amz-Signature=c67be38d15f642bdb2f954acf3a9cd22ca9802b78406429f42344152b7c0f207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3MVGOS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDKjxJa1OLcdUBR6WevMrY028u43PiYrzrbUgA5zpOn0gIgEm1lEF%2BLWnpcLCW5qCLXb3P99QtI6vsUPkeBOS473A8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGVhQT6FsGABxQKb9yrcA%2Fjk6WGlUYQkeWKkNet4Q50%2BP8o7FYTOtEU2qlNgwl94JIhejxhPv1hKLwl4zc2%2BpqBqyDVQNdwx0E9Ew4ik%2Bt6kbk2c4FniIozrpzCRdXK26F38E2KWJ3dI1IG9sdT3UJDv19m%2FQnVXEG6SdeMAxa9ptrAPkFKcDPZVzMafq29C8U%2BDre8vHruuTX%2FQ8bJHe3dwhckkTX%2FvF0ABEya%2BoThg9wz2aZ2ip3iJ0gGeFTzTqd%2B5hYDvoMRqXt708%2BrWA0Qm57WglGeN%2BPhVWkZq16c432UCLtWZfBfYXtRtMOaCi37m08UEC8bsWtJ7Kyt2y437plP02Lxyt1Er78jY3zTVzW4y%2Bv0mx7LB8anxGlutEKOVkBqdIoKqmo0UL%2FCMmUOzQLQfGe78WpYxn6VDibEsuOGmmt1mupO6loQVl8WGsLKIkKYt0oE8%2FzpEb5IraGuc4o8jnVtBUNAnNU6ft%2BUMhZIG3nT2qETj4psvLHldWjpAxVq34wxw4cBq42a%2F4WXyQVA3ZfsuzsHOHLYsMNg5dG1bOX4K0cHox5ggxbprV7YVpbs1JAxNX8sTZgYmhJ%2BA1zthSeMcohr8nguTIFhiEzxrIKdOA%2BxSBOlZPGk44R59P4FUR0f3uklnMOfBk8QGOqUB2xZm6S2Igeuf0B%2Feskbglg6TlClSelkZUWfE1kyoVRV%2B9H%2BCwo1PDygwNd3JDzlasITWm33guP6PEAa5aqtMpRiUm441WIFcjGoG9yBCr5asBFuswzTo46eT3Q2VjYan0YFUfb1nZskKYxt3iogH2SPp6uV16S8nHFEfwc9CRQelbS8ATKc7MsJ88h%2BwZTSbWiVPFw6CdgGZr%2BEyTZow%2BpPcMZ%2FN&X-Amz-Signature=6d6bc312a53f1d79d8b5f95dd1a8fecffdf1c71e5ebd1492f7a6de9fa8fb51e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3MVGOS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDKjxJa1OLcdUBR6WevMrY028u43PiYrzrbUgA5zpOn0gIgEm1lEF%2BLWnpcLCW5qCLXb3P99QtI6vsUPkeBOS473A8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGVhQT6FsGABxQKb9yrcA%2Fjk6WGlUYQkeWKkNet4Q50%2BP8o7FYTOtEU2qlNgwl94JIhejxhPv1hKLwl4zc2%2BpqBqyDVQNdwx0E9Ew4ik%2Bt6kbk2c4FniIozrpzCRdXK26F38E2KWJ3dI1IG9sdT3UJDv19m%2FQnVXEG6SdeMAxa9ptrAPkFKcDPZVzMafq29C8U%2BDre8vHruuTX%2FQ8bJHe3dwhckkTX%2FvF0ABEya%2BoThg9wz2aZ2ip3iJ0gGeFTzTqd%2B5hYDvoMRqXt708%2BrWA0Qm57WglGeN%2BPhVWkZq16c432UCLtWZfBfYXtRtMOaCi37m08UEC8bsWtJ7Kyt2y437plP02Lxyt1Er78jY3zTVzW4y%2Bv0mx7LB8anxGlutEKOVkBqdIoKqmo0UL%2FCMmUOzQLQfGe78WpYxn6VDibEsuOGmmt1mupO6loQVl8WGsLKIkKYt0oE8%2FzpEb5IraGuc4o8jnVtBUNAnNU6ft%2BUMhZIG3nT2qETj4psvLHldWjpAxVq34wxw4cBq42a%2F4WXyQVA3ZfsuzsHOHLYsMNg5dG1bOX4K0cHox5ggxbprV7YVpbs1JAxNX8sTZgYmhJ%2BA1zthSeMcohr8nguTIFhiEzxrIKdOA%2BxSBOlZPGk44R59P4FUR0f3uklnMOfBk8QGOqUB2xZm6S2Igeuf0B%2Feskbglg6TlClSelkZUWfE1kyoVRV%2B9H%2BCwo1PDygwNd3JDzlasITWm33guP6PEAa5aqtMpRiUm441WIFcjGoG9yBCr5asBFuswzTo46eT3Q2VjYan0YFUfb1nZskKYxt3iogH2SPp6uV16S8nHFEfwc9CRQelbS8ATKc7MsJ88h%2BwZTSbWiVPFw6CdgGZr%2BEyTZow%2BpPcMZ%2FN&X-Amz-Signature=cc3c02ffd7584bb2bea621a38819b8a2ddc094d31440330c2fce5995863d046c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3MVGOS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDKjxJa1OLcdUBR6WevMrY028u43PiYrzrbUgA5zpOn0gIgEm1lEF%2BLWnpcLCW5qCLXb3P99QtI6vsUPkeBOS473A8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGVhQT6FsGABxQKb9yrcA%2Fjk6WGlUYQkeWKkNet4Q50%2BP8o7FYTOtEU2qlNgwl94JIhejxhPv1hKLwl4zc2%2BpqBqyDVQNdwx0E9Ew4ik%2Bt6kbk2c4FniIozrpzCRdXK26F38E2KWJ3dI1IG9sdT3UJDv19m%2FQnVXEG6SdeMAxa9ptrAPkFKcDPZVzMafq29C8U%2BDre8vHruuTX%2FQ8bJHe3dwhckkTX%2FvF0ABEya%2BoThg9wz2aZ2ip3iJ0gGeFTzTqd%2B5hYDvoMRqXt708%2BrWA0Qm57WglGeN%2BPhVWkZq16c432UCLtWZfBfYXtRtMOaCi37m08UEC8bsWtJ7Kyt2y437plP02Lxyt1Er78jY3zTVzW4y%2Bv0mx7LB8anxGlutEKOVkBqdIoKqmo0UL%2FCMmUOzQLQfGe78WpYxn6VDibEsuOGmmt1mupO6loQVl8WGsLKIkKYt0oE8%2FzpEb5IraGuc4o8jnVtBUNAnNU6ft%2BUMhZIG3nT2qETj4psvLHldWjpAxVq34wxw4cBq42a%2F4WXyQVA3ZfsuzsHOHLYsMNg5dG1bOX4K0cHox5ggxbprV7YVpbs1JAxNX8sTZgYmhJ%2BA1zthSeMcohr8nguTIFhiEzxrIKdOA%2BxSBOlZPGk44R59P4FUR0f3uklnMOfBk8QGOqUB2xZm6S2Igeuf0B%2Feskbglg6TlClSelkZUWfE1kyoVRV%2B9H%2BCwo1PDygwNd3JDzlasITWm33guP6PEAa5aqtMpRiUm441WIFcjGoG9yBCr5asBFuswzTo46eT3Q2VjYan0YFUfb1nZskKYxt3iogH2SPp6uV16S8nHFEfwc9CRQelbS8ATKc7MsJ88h%2BwZTSbWiVPFw6CdgGZr%2BEyTZow%2BpPcMZ%2FN&X-Amz-Signature=13f952955f719cb5d07dc0ecedc6cfd90f44627774f76a4f36c5e196011fa768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3MVGOS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDKjxJa1OLcdUBR6WevMrY028u43PiYrzrbUgA5zpOn0gIgEm1lEF%2BLWnpcLCW5qCLXb3P99QtI6vsUPkeBOS473A8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGVhQT6FsGABxQKb9yrcA%2Fjk6WGlUYQkeWKkNet4Q50%2BP8o7FYTOtEU2qlNgwl94JIhejxhPv1hKLwl4zc2%2BpqBqyDVQNdwx0E9Ew4ik%2Bt6kbk2c4FniIozrpzCRdXK26F38E2KWJ3dI1IG9sdT3UJDv19m%2FQnVXEG6SdeMAxa9ptrAPkFKcDPZVzMafq29C8U%2BDre8vHruuTX%2FQ8bJHe3dwhckkTX%2FvF0ABEya%2BoThg9wz2aZ2ip3iJ0gGeFTzTqd%2B5hYDvoMRqXt708%2BrWA0Qm57WglGeN%2BPhVWkZq16c432UCLtWZfBfYXtRtMOaCi37m08UEC8bsWtJ7Kyt2y437plP02Lxyt1Er78jY3zTVzW4y%2Bv0mx7LB8anxGlutEKOVkBqdIoKqmo0UL%2FCMmUOzQLQfGe78WpYxn6VDibEsuOGmmt1mupO6loQVl8WGsLKIkKYt0oE8%2FzpEb5IraGuc4o8jnVtBUNAnNU6ft%2BUMhZIG3nT2qETj4psvLHldWjpAxVq34wxw4cBq42a%2F4WXyQVA3ZfsuzsHOHLYsMNg5dG1bOX4K0cHox5ggxbprV7YVpbs1JAxNX8sTZgYmhJ%2BA1zthSeMcohr8nguTIFhiEzxrIKdOA%2BxSBOlZPGk44R59P4FUR0f3uklnMOfBk8QGOqUB2xZm6S2Igeuf0B%2Feskbglg6TlClSelkZUWfE1kyoVRV%2B9H%2BCwo1PDygwNd3JDzlasITWm33guP6PEAa5aqtMpRiUm441WIFcjGoG9yBCr5asBFuswzTo46eT3Q2VjYan0YFUfb1nZskKYxt3iogH2SPp6uV16S8nHFEfwc9CRQelbS8ATKc7MsJ88h%2BwZTSbWiVPFw6CdgGZr%2BEyTZow%2BpPcMZ%2FN&X-Amz-Signature=10956551457e46ecc6a2afd38791c3c7e42e021aac8e3860298d93e5ec45cc39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3MVGOS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDKjxJa1OLcdUBR6WevMrY028u43PiYrzrbUgA5zpOn0gIgEm1lEF%2BLWnpcLCW5qCLXb3P99QtI6vsUPkeBOS473A8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGVhQT6FsGABxQKb9yrcA%2Fjk6WGlUYQkeWKkNet4Q50%2BP8o7FYTOtEU2qlNgwl94JIhejxhPv1hKLwl4zc2%2BpqBqyDVQNdwx0E9Ew4ik%2Bt6kbk2c4FniIozrpzCRdXK26F38E2KWJ3dI1IG9sdT3UJDv19m%2FQnVXEG6SdeMAxa9ptrAPkFKcDPZVzMafq29C8U%2BDre8vHruuTX%2FQ8bJHe3dwhckkTX%2FvF0ABEya%2BoThg9wz2aZ2ip3iJ0gGeFTzTqd%2B5hYDvoMRqXt708%2BrWA0Qm57WglGeN%2BPhVWkZq16c432UCLtWZfBfYXtRtMOaCi37m08UEC8bsWtJ7Kyt2y437plP02Lxyt1Er78jY3zTVzW4y%2Bv0mx7LB8anxGlutEKOVkBqdIoKqmo0UL%2FCMmUOzQLQfGe78WpYxn6VDibEsuOGmmt1mupO6loQVl8WGsLKIkKYt0oE8%2FzpEb5IraGuc4o8jnVtBUNAnNU6ft%2BUMhZIG3nT2qETj4psvLHldWjpAxVq34wxw4cBq42a%2F4WXyQVA3ZfsuzsHOHLYsMNg5dG1bOX4K0cHox5ggxbprV7YVpbs1JAxNX8sTZgYmhJ%2BA1zthSeMcohr8nguTIFhiEzxrIKdOA%2BxSBOlZPGk44R59P4FUR0f3uklnMOfBk8QGOqUB2xZm6S2Igeuf0B%2Feskbglg6TlClSelkZUWfE1kyoVRV%2B9H%2BCwo1PDygwNd3JDzlasITWm33guP6PEAa5aqtMpRiUm441WIFcjGoG9yBCr5asBFuswzTo46eT3Q2VjYan0YFUfb1nZskKYxt3iogH2SPp6uV16S8nHFEfwc9CRQelbS8ATKc7MsJ88h%2BwZTSbWiVPFw6CdgGZr%2BEyTZow%2BpPcMZ%2FN&X-Amz-Signature=9a195fe83adcbadf7117fb68d221285e25ceb18aa8405c736372bb1f7f11958d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3MVGOS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDKjxJa1OLcdUBR6WevMrY028u43PiYrzrbUgA5zpOn0gIgEm1lEF%2BLWnpcLCW5qCLXb3P99QtI6vsUPkeBOS473A8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGVhQT6FsGABxQKb9yrcA%2Fjk6WGlUYQkeWKkNet4Q50%2BP8o7FYTOtEU2qlNgwl94JIhejxhPv1hKLwl4zc2%2BpqBqyDVQNdwx0E9Ew4ik%2Bt6kbk2c4FniIozrpzCRdXK26F38E2KWJ3dI1IG9sdT3UJDv19m%2FQnVXEG6SdeMAxa9ptrAPkFKcDPZVzMafq29C8U%2BDre8vHruuTX%2FQ8bJHe3dwhckkTX%2FvF0ABEya%2BoThg9wz2aZ2ip3iJ0gGeFTzTqd%2B5hYDvoMRqXt708%2BrWA0Qm57WglGeN%2BPhVWkZq16c432UCLtWZfBfYXtRtMOaCi37m08UEC8bsWtJ7Kyt2y437plP02Lxyt1Er78jY3zTVzW4y%2Bv0mx7LB8anxGlutEKOVkBqdIoKqmo0UL%2FCMmUOzQLQfGe78WpYxn6VDibEsuOGmmt1mupO6loQVl8WGsLKIkKYt0oE8%2FzpEb5IraGuc4o8jnVtBUNAnNU6ft%2BUMhZIG3nT2qETj4psvLHldWjpAxVq34wxw4cBq42a%2F4WXyQVA3ZfsuzsHOHLYsMNg5dG1bOX4K0cHox5ggxbprV7YVpbs1JAxNX8sTZgYmhJ%2BA1zthSeMcohr8nguTIFhiEzxrIKdOA%2BxSBOlZPGk44R59P4FUR0f3uklnMOfBk8QGOqUB2xZm6S2Igeuf0B%2Feskbglg6TlClSelkZUWfE1kyoVRV%2B9H%2BCwo1PDygwNd3JDzlasITWm33guP6PEAa5aqtMpRiUm441WIFcjGoG9yBCr5asBFuswzTo46eT3Q2VjYan0YFUfb1nZskKYxt3iogH2SPp6uV16S8nHFEfwc9CRQelbS8ATKc7MsJ88h%2BwZTSbWiVPFw6CdgGZr%2BEyTZow%2BpPcMZ%2FN&X-Amz-Signature=8caf88c094d754917f51998cb72828ca8cbf89167be3e434460f7e4022e3103a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3MVGOS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDKjxJa1OLcdUBR6WevMrY028u43PiYrzrbUgA5zpOn0gIgEm1lEF%2BLWnpcLCW5qCLXb3P99QtI6vsUPkeBOS473A8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGVhQT6FsGABxQKb9yrcA%2Fjk6WGlUYQkeWKkNet4Q50%2BP8o7FYTOtEU2qlNgwl94JIhejxhPv1hKLwl4zc2%2BpqBqyDVQNdwx0E9Ew4ik%2Bt6kbk2c4FniIozrpzCRdXK26F38E2KWJ3dI1IG9sdT3UJDv19m%2FQnVXEG6SdeMAxa9ptrAPkFKcDPZVzMafq29C8U%2BDre8vHruuTX%2FQ8bJHe3dwhckkTX%2FvF0ABEya%2BoThg9wz2aZ2ip3iJ0gGeFTzTqd%2B5hYDvoMRqXt708%2BrWA0Qm57WglGeN%2BPhVWkZq16c432UCLtWZfBfYXtRtMOaCi37m08UEC8bsWtJ7Kyt2y437plP02Lxyt1Er78jY3zTVzW4y%2Bv0mx7LB8anxGlutEKOVkBqdIoKqmo0UL%2FCMmUOzQLQfGe78WpYxn6VDibEsuOGmmt1mupO6loQVl8WGsLKIkKYt0oE8%2FzpEb5IraGuc4o8jnVtBUNAnNU6ft%2BUMhZIG3nT2qETj4psvLHldWjpAxVq34wxw4cBq42a%2F4WXyQVA3ZfsuzsHOHLYsMNg5dG1bOX4K0cHox5ggxbprV7YVpbs1JAxNX8sTZgYmhJ%2BA1zthSeMcohr8nguTIFhiEzxrIKdOA%2BxSBOlZPGk44R59P4FUR0f3uklnMOfBk8QGOqUB2xZm6S2Igeuf0B%2Feskbglg6TlClSelkZUWfE1kyoVRV%2B9H%2BCwo1PDygwNd3JDzlasITWm33guP6PEAa5aqtMpRiUm441WIFcjGoG9yBCr5asBFuswzTo46eT3Q2VjYan0YFUfb1nZskKYxt3iogH2SPp6uV16S8nHFEfwc9CRQelbS8ATKc7MsJ88h%2BwZTSbWiVPFw6CdgGZr%2BEyTZow%2BpPcMZ%2FN&X-Amz-Signature=51d9d43f3c41c4b2558e0eb63b91fd8a2666196e0ae00918b3732dfb19775ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUL5MZQ3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFbhnLPgwp7zfCBXyoNrpCd1zJ6Zxq50i1pVVA%2BrPYBmAiEAif1x1ujw7%2FRI7mMbMxwd5JUEAt8JAydYbq7mheGIr3Mq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFFGsKb22OLc9pR%2BtCrcAwf0uZfSjOOW%2F6kUe7KeX1g%2BVklCCeFzNmITr9iY8GvsjPkJ6%2Fa2SXMymlEhUuA6I6tbig%2BhUp7MPxZeYbKHIlVrPkvZ2Z%2FTJd2HxJF8RH5uI7KkIdwmLR%2BJ2wXqtlfT%2BV3Sv0uQ3O%2B%2FJeJd0msb876lebdJLch3ZKbAVwCkXuyLVhQij2611qwo%2FVNVQjLdWW4FZPm1%2F6I3fetwtTXREyy%2Bwbfyf39jRJ8Z89tUPLtQhq1Va0gcAcM7xxDsUL3M4pHZzFR4ujjX8WX85GEiALgwb1GvvEKJjiv2jK2ymObxhtTFtJqItQAM3LjbpXLaQgzeSWapO5w7ncekzxyqDa3%2BUrS8Ze7Xtl9St8nHXSerOOp3oK3yP9e3r3fr88VWYRrvbSP8%2BnlaKxj0Bbsqm6nIWNtBLfRW9ijdbhkv4FaUj%2F%2F6M6irpSTshPgOFIURp61Qu2F7arML1wNvHH49nGmeNA04d8izfbPH8rYy99iChlcJXPPJsSukLLck8z8if%2FPdMOnSn9sA8SfSRwquYuaSNSwpW3Jva%2BtNTbKWFEy8El2%2BwtUN77YECIaouTodS3tlti3PPrvxXYBm%2FaTl1KEg8A6QSmQG%2BMQioNW925LWkDZc2iwAM%2FkiyRklMMbBk8QGOqUBGvc0cIgrpZv1zidhGffQjhcJ2LD7817bWUF%2BhlbxUE6QqpYiAZp8nVTlsHgi8BlG8J3cN7EBjaukPdotLEKN2VQCXgpICaE5F2JrAB7Pi1y0hAVnIbVO%2FgZAQ1x1Jy6HPRbUL%2BBz4JRkHV%2F22uCbQJ46mQGOoeRLh0JL8Eoj1FDIpsXWPPtSnet8AFixz6CK9CsHRehHL1atni5O031gKMHe9tDI&X-Amz-Signature=2cbb8f9e37a549a2b8a4c8b3eab9a3f5ede9c701959b4051687e21b8875b6fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUL5MZQ3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFbhnLPgwp7zfCBXyoNrpCd1zJ6Zxq50i1pVVA%2BrPYBmAiEAif1x1ujw7%2FRI7mMbMxwd5JUEAt8JAydYbq7mheGIr3Mq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFFGsKb22OLc9pR%2BtCrcAwf0uZfSjOOW%2F6kUe7KeX1g%2BVklCCeFzNmITr9iY8GvsjPkJ6%2Fa2SXMymlEhUuA6I6tbig%2BhUp7MPxZeYbKHIlVrPkvZ2Z%2FTJd2HxJF8RH5uI7KkIdwmLR%2BJ2wXqtlfT%2BV3Sv0uQ3O%2B%2FJeJd0msb876lebdJLch3ZKbAVwCkXuyLVhQij2611qwo%2FVNVQjLdWW4FZPm1%2F6I3fetwtTXREyy%2Bwbfyf39jRJ8Z89tUPLtQhq1Va0gcAcM7xxDsUL3M4pHZzFR4ujjX8WX85GEiALgwb1GvvEKJjiv2jK2ymObxhtTFtJqItQAM3LjbpXLaQgzeSWapO5w7ncekzxyqDa3%2BUrS8Ze7Xtl9St8nHXSerOOp3oK3yP9e3r3fr88VWYRrvbSP8%2BnlaKxj0Bbsqm6nIWNtBLfRW9ijdbhkv4FaUj%2F%2F6M6irpSTshPgOFIURp61Qu2F7arML1wNvHH49nGmeNA04d8izfbPH8rYy99iChlcJXPPJsSukLLck8z8if%2FPdMOnSn9sA8SfSRwquYuaSNSwpW3Jva%2BtNTbKWFEy8El2%2BwtUN77YECIaouTodS3tlti3PPrvxXYBm%2FaTl1KEg8A6QSmQG%2BMQioNW925LWkDZc2iwAM%2FkiyRklMMbBk8QGOqUBGvc0cIgrpZv1zidhGffQjhcJ2LD7817bWUF%2BhlbxUE6QqpYiAZp8nVTlsHgi8BlG8J3cN7EBjaukPdotLEKN2VQCXgpICaE5F2JrAB7Pi1y0hAVnIbVO%2FgZAQ1x1Jy6HPRbUL%2BBz4JRkHV%2F22uCbQJ46mQGOoeRLh0JL8Eoj1FDIpsXWPPtSnet8AFixz6CK9CsHRehHL1atni5O031gKMHe9tDI&X-Amz-Signature=f705d23036de56446275d2529aae00ed410e199cb8fa606ec5900a2e36b8b1f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUL5MZQ3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFbhnLPgwp7zfCBXyoNrpCd1zJ6Zxq50i1pVVA%2BrPYBmAiEAif1x1ujw7%2FRI7mMbMxwd5JUEAt8JAydYbq7mheGIr3Mq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFFGsKb22OLc9pR%2BtCrcAwf0uZfSjOOW%2F6kUe7KeX1g%2BVklCCeFzNmITr9iY8GvsjPkJ6%2Fa2SXMymlEhUuA6I6tbig%2BhUp7MPxZeYbKHIlVrPkvZ2Z%2FTJd2HxJF8RH5uI7KkIdwmLR%2BJ2wXqtlfT%2BV3Sv0uQ3O%2B%2FJeJd0msb876lebdJLch3ZKbAVwCkXuyLVhQij2611qwo%2FVNVQjLdWW4FZPm1%2F6I3fetwtTXREyy%2Bwbfyf39jRJ8Z89tUPLtQhq1Va0gcAcM7xxDsUL3M4pHZzFR4ujjX8WX85GEiALgwb1GvvEKJjiv2jK2ymObxhtTFtJqItQAM3LjbpXLaQgzeSWapO5w7ncekzxyqDa3%2BUrS8Ze7Xtl9St8nHXSerOOp3oK3yP9e3r3fr88VWYRrvbSP8%2BnlaKxj0Bbsqm6nIWNtBLfRW9ijdbhkv4FaUj%2F%2F6M6irpSTshPgOFIURp61Qu2F7arML1wNvHH49nGmeNA04d8izfbPH8rYy99iChlcJXPPJsSukLLck8z8if%2FPdMOnSn9sA8SfSRwquYuaSNSwpW3Jva%2BtNTbKWFEy8El2%2BwtUN77YECIaouTodS3tlti3PPrvxXYBm%2FaTl1KEg8A6QSmQG%2BMQioNW925LWkDZc2iwAM%2FkiyRklMMbBk8QGOqUBGvc0cIgrpZv1zidhGffQjhcJ2LD7817bWUF%2BhlbxUE6QqpYiAZp8nVTlsHgi8BlG8J3cN7EBjaukPdotLEKN2VQCXgpICaE5F2JrAB7Pi1y0hAVnIbVO%2FgZAQ1x1Jy6HPRbUL%2BBz4JRkHV%2F22uCbQJ46mQGOoeRLh0JL8Eoj1FDIpsXWPPtSnet8AFixz6CK9CsHRehHL1atni5O031gKMHe9tDI&X-Amz-Signature=94eb2aebab2d8abc334ff7cf1648d52398f01cb213c1297934c85281dcc6d5cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUL5MZQ3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFbhnLPgwp7zfCBXyoNrpCd1zJ6Zxq50i1pVVA%2BrPYBmAiEAif1x1ujw7%2FRI7mMbMxwd5JUEAt8JAydYbq7mheGIr3Mq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFFGsKb22OLc9pR%2BtCrcAwf0uZfSjOOW%2F6kUe7KeX1g%2BVklCCeFzNmITr9iY8GvsjPkJ6%2Fa2SXMymlEhUuA6I6tbig%2BhUp7MPxZeYbKHIlVrPkvZ2Z%2FTJd2HxJF8RH5uI7KkIdwmLR%2BJ2wXqtlfT%2BV3Sv0uQ3O%2B%2FJeJd0msb876lebdJLch3ZKbAVwCkXuyLVhQij2611qwo%2FVNVQjLdWW4FZPm1%2F6I3fetwtTXREyy%2Bwbfyf39jRJ8Z89tUPLtQhq1Va0gcAcM7xxDsUL3M4pHZzFR4ujjX8WX85GEiALgwb1GvvEKJjiv2jK2ymObxhtTFtJqItQAM3LjbpXLaQgzeSWapO5w7ncekzxyqDa3%2BUrS8Ze7Xtl9St8nHXSerOOp3oK3yP9e3r3fr88VWYRrvbSP8%2BnlaKxj0Bbsqm6nIWNtBLfRW9ijdbhkv4FaUj%2F%2F6M6irpSTshPgOFIURp61Qu2F7arML1wNvHH49nGmeNA04d8izfbPH8rYy99iChlcJXPPJsSukLLck8z8if%2FPdMOnSn9sA8SfSRwquYuaSNSwpW3Jva%2BtNTbKWFEy8El2%2BwtUN77YECIaouTodS3tlti3PPrvxXYBm%2FaTl1KEg8A6QSmQG%2BMQioNW925LWkDZc2iwAM%2FkiyRklMMbBk8QGOqUBGvc0cIgrpZv1zidhGffQjhcJ2LD7817bWUF%2BhlbxUE6QqpYiAZp8nVTlsHgi8BlG8J3cN7EBjaukPdotLEKN2VQCXgpICaE5F2JrAB7Pi1y0hAVnIbVO%2FgZAQ1x1Jy6HPRbUL%2BBz4JRkHV%2F22uCbQJ46mQGOoeRLh0JL8Eoj1FDIpsXWPPtSnet8AFixz6CK9CsHRehHL1atni5O031gKMHe9tDI&X-Amz-Signature=4e0ca857e4db661ea6a329a1e3574cf8ac3ca0c4130b984cbe58bddb3bba24a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUL5MZQ3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFbhnLPgwp7zfCBXyoNrpCd1zJ6Zxq50i1pVVA%2BrPYBmAiEAif1x1ujw7%2FRI7mMbMxwd5JUEAt8JAydYbq7mheGIr3Mq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFFGsKb22OLc9pR%2BtCrcAwf0uZfSjOOW%2F6kUe7KeX1g%2BVklCCeFzNmITr9iY8GvsjPkJ6%2Fa2SXMymlEhUuA6I6tbig%2BhUp7MPxZeYbKHIlVrPkvZ2Z%2FTJd2HxJF8RH5uI7KkIdwmLR%2BJ2wXqtlfT%2BV3Sv0uQ3O%2B%2FJeJd0msb876lebdJLch3ZKbAVwCkXuyLVhQij2611qwo%2FVNVQjLdWW4FZPm1%2F6I3fetwtTXREyy%2Bwbfyf39jRJ8Z89tUPLtQhq1Va0gcAcM7xxDsUL3M4pHZzFR4ujjX8WX85GEiALgwb1GvvEKJjiv2jK2ymObxhtTFtJqItQAM3LjbpXLaQgzeSWapO5w7ncekzxyqDa3%2BUrS8Ze7Xtl9St8nHXSerOOp3oK3yP9e3r3fr88VWYRrvbSP8%2BnlaKxj0Bbsqm6nIWNtBLfRW9ijdbhkv4FaUj%2F%2F6M6irpSTshPgOFIURp61Qu2F7arML1wNvHH49nGmeNA04d8izfbPH8rYy99iChlcJXPPJsSukLLck8z8if%2FPdMOnSn9sA8SfSRwquYuaSNSwpW3Jva%2BtNTbKWFEy8El2%2BwtUN77YECIaouTodS3tlti3PPrvxXYBm%2FaTl1KEg8A6QSmQG%2BMQioNW925LWkDZc2iwAM%2FkiyRklMMbBk8QGOqUBGvc0cIgrpZv1zidhGffQjhcJ2LD7817bWUF%2BhlbxUE6QqpYiAZp8nVTlsHgi8BlG8J3cN7EBjaukPdotLEKN2VQCXgpICaE5F2JrAB7Pi1y0hAVnIbVO%2FgZAQ1x1Jy6HPRbUL%2BBz4JRkHV%2F22uCbQJ46mQGOoeRLh0JL8Eoj1FDIpsXWPPtSnet8AFixz6CK9CsHRehHL1atni5O031gKMHe9tDI&X-Amz-Signature=55606c3fd8d2680e55bd89a5d68ecace6c0bbf3507a90f0ce4af8ae373d00035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUL5MZQ3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFbhnLPgwp7zfCBXyoNrpCd1zJ6Zxq50i1pVVA%2BrPYBmAiEAif1x1ujw7%2FRI7mMbMxwd5JUEAt8JAydYbq7mheGIr3Mq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFFGsKb22OLc9pR%2BtCrcAwf0uZfSjOOW%2F6kUe7KeX1g%2BVklCCeFzNmITr9iY8GvsjPkJ6%2Fa2SXMymlEhUuA6I6tbig%2BhUp7MPxZeYbKHIlVrPkvZ2Z%2FTJd2HxJF8RH5uI7KkIdwmLR%2BJ2wXqtlfT%2BV3Sv0uQ3O%2B%2FJeJd0msb876lebdJLch3ZKbAVwCkXuyLVhQij2611qwo%2FVNVQjLdWW4FZPm1%2F6I3fetwtTXREyy%2Bwbfyf39jRJ8Z89tUPLtQhq1Va0gcAcM7xxDsUL3M4pHZzFR4ujjX8WX85GEiALgwb1GvvEKJjiv2jK2ymObxhtTFtJqItQAM3LjbpXLaQgzeSWapO5w7ncekzxyqDa3%2BUrS8Ze7Xtl9St8nHXSerOOp3oK3yP9e3r3fr88VWYRrvbSP8%2BnlaKxj0Bbsqm6nIWNtBLfRW9ijdbhkv4FaUj%2F%2F6M6irpSTshPgOFIURp61Qu2F7arML1wNvHH49nGmeNA04d8izfbPH8rYy99iChlcJXPPJsSukLLck8z8if%2FPdMOnSn9sA8SfSRwquYuaSNSwpW3Jva%2BtNTbKWFEy8El2%2BwtUN77YECIaouTodS3tlti3PPrvxXYBm%2FaTl1KEg8A6QSmQG%2BMQioNW925LWkDZc2iwAM%2FkiyRklMMbBk8QGOqUBGvc0cIgrpZv1zidhGffQjhcJ2LD7817bWUF%2BhlbxUE6QqpYiAZp8nVTlsHgi8BlG8J3cN7EBjaukPdotLEKN2VQCXgpICaE5F2JrAB7Pi1y0hAVnIbVO%2FgZAQ1x1Jy6HPRbUL%2BBz4JRkHV%2F22uCbQJ46mQGOoeRLh0JL8Eoj1FDIpsXWPPtSnet8AFixz6CK9CsHRehHL1atni5O031gKMHe9tDI&X-Amz-Signature=4ca4affbaab638cef801054dc7d24810b00ba83cc2d3335eee855143fa0f9775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
