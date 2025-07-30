---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-28T21:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-28T21:43:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBV2WNIJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAU25RYni%2BLV4jOyaiBOgKiQprpE5djqY4jz4kdeOiAiAzuGvvLlJJBs2jywqHJy2p5wOu%2BxDQCJtaYZd1cneBBCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuqDKFKaHiB%2FG9Ce9KtwDKx%2BuQrR5Kx7rOj%2F5ADSNL5TXRqrHJLkqaX38j0h0NlZkY5ygUbi4Hgg6J5CaMc0SQa53ATn8GwPwXZp6D4yuuoMdr4%2FRNriCVghdzVmod9jIskPRQ5JtBOR5JmFvOvjlgCTQARIEDURmdQ4pebA5ax7oFUeBlDkuwH1AaXgfEWcXxifXAKrnaw%2FNYrAl5vT%2Fldhpbm%2FtHAY%2B43UuQm%2FN8dOtniD%2B8iV4vbxWO0LyqSbo4c%2FvPPFlRBsi%2BbTwoOO%2FQKHUmvKn%2FFxnYECEv78wFyZLK8x%2B4mScQ4sz3FudWzWq2x1dK3S0AxQ9kfU1WQ8MAk%2BK8raA0MDj5BFrDmG%2Fy%2BRZEbN4kZKb0AogxEMRd8uOPVBtvgTg8ial2DwlbZPhjz62NYCbzruAgTf7vVL5W13RuI46gk5vwS48eQ39KLv1Ba3K4QI9a5m76GPvD2FadNNYD%2FfTLuyxAWS8%2FlKSv%2BVvK1mDpUQC5KmA5vPd6auA%2FoAGzaa8gT9%2Fd0PG2WJPmiiXY3UEKL2XF39pNmdftHCEHGKg49uqGKtQZmi%2FrLePKVfeWzYZNFyLlxmriZMdQIvBIQ57MaLfWW5PM2vtvuRx9ViPscoGoFqLyvBSMV8NdI0MlTgmH0nH60ww7vKlxAY6pgHzKIes3NABr306oEkiwFCN6oOzochWnAYrxao2Nl31Lnkqx%2FdwJfTWnLmkjuaRaKmjYLb5j0KeLaVt%2FSzk6Ph%2FztuB7KJHSXb0KqTAgryrSaZDXQLGaeawLaXdbv4jUznhtU1SAV2pFzZnPBv0TSqsNnCL3L29%2BT6ILuKHcaXFMk7%2BIC5XCnWOQvLPW5foFn3TTygGVi6zoNM0YJelbfZv%2FzTGHpL%2B&X-Amz-Signature=e02d82b9bbc426726c6fd1011fcd7313d178b53fb70fd669333bb6a9c50d783e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBV2WNIJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAU25RYni%2BLV4jOyaiBOgKiQprpE5djqY4jz4kdeOiAiAzuGvvLlJJBs2jywqHJy2p5wOu%2BxDQCJtaYZd1cneBBCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuqDKFKaHiB%2FG9Ce9KtwDKx%2BuQrR5Kx7rOj%2F5ADSNL5TXRqrHJLkqaX38j0h0NlZkY5ygUbi4Hgg6J5CaMc0SQa53ATn8GwPwXZp6D4yuuoMdr4%2FRNriCVghdzVmod9jIskPRQ5JtBOR5JmFvOvjlgCTQARIEDURmdQ4pebA5ax7oFUeBlDkuwH1AaXgfEWcXxifXAKrnaw%2FNYrAl5vT%2Fldhpbm%2FtHAY%2B43UuQm%2FN8dOtniD%2B8iV4vbxWO0LyqSbo4c%2FvPPFlRBsi%2BbTwoOO%2FQKHUmvKn%2FFxnYECEv78wFyZLK8x%2B4mScQ4sz3FudWzWq2x1dK3S0AxQ9kfU1WQ8MAk%2BK8raA0MDj5BFrDmG%2Fy%2BRZEbN4kZKb0AogxEMRd8uOPVBtvgTg8ial2DwlbZPhjz62NYCbzruAgTf7vVL5W13RuI46gk5vwS48eQ39KLv1Ba3K4QI9a5m76GPvD2FadNNYD%2FfTLuyxAWS8%2FlKSv%2BVvK1mDpUQC5KmA5vPd6auA%2FoAGzaa8gT9%2Fd0PG2WJPmiiXY3UEKL2XF39pNmdftHCEHGKg49uqGKtQZmi%2FrLePKVfeWzYZNFyLlxmriZMdQIvBIQ57MaLfWW5PM2vtvuRx9ViPscoGoFqLyvBSMV8NdI0MlTgmH0nH60ww7vKlxAY6pgHzKIes3NABr306oEkiwFCN6oOzochWnAYrxao2Nl31Lnkqx%2FdwJfTWnLmkjuaRaKmjYLb5j0KeLaVt%2FSzk6Ph%2FztuB7KJHSXb0KqTAgryrSaZDXQLGaeawLaXdbv4jUznhtU1SAV2pFzZnPBv0TSqsNnCL3L29%2BT6ILuKHcaXFMk7%2BIC5XCnWOQvLPW5foFn3TTygGVi6zoNM0YJelbfZv%2FzTGHpL%2B&X-Amz-Signature=b8357b0082b6653ec5cc9398afa306b19a768bb76da56f7ddb89590671c2d690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBV2WNIJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAU25RYni%2BLV4jOyaiBOgKiQprpE5djqY4jz4kdeOiAiAzuGvvLlJJBs2jywqHJy2p5wOu%2BxDQCJtaYZd1cneBBCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuqDKFKaHiB%2FG9Ce9KtwDKx%2BuQrR5Kx7rOj%2F5ADSNL5TXRqrHJLkqaX38j0h0NlZkY5ygUbi4Hgg6J5CaMc0SQa53ATn8GwPwXZp6D4yuuoMdr4%2FRNriCVghdzVmod9jIskPRQ5JtBOR5JmFvOvjlgCTQARIEDURmdQ4pebA5ax7oFUeBlDkuwH1AaXgfEWcXxifXAKrnaw%2FNYrAl5vT%2Fldhpbm%2FtHAY%2B43UuQm%2FN8dOtniD%2B8iV4vbxWO0LyqSbo4c%2FvPPFlRBsi%2BbTwoOO%2FQKHUmvKn%2FFxnYECEv78wFyZLK8x%2B4mScQ4sz3FudWzWq2x1dK3S0AxQ9kfU1WQ8MAk%2BK8raA0MDj5BFrDmG%2Fy%2BRZEbN4kZKb0AogxEMRd8uOPVBtvgTg8ial2DwlbZPhjz62NYCbzruAgTf7vVL5W13RuI46gk5vwS48eQ39KLv1Ba3K4QI9a5m76GPvD2FadNNYD%2FfTLuyxAWS8%2FlKSv%2BVvK1mDpUQC5KmA5vPd6auA%2FoAGzaa8gT9%2Fd0PG2WJPmiiXY3UEKL2XF39pNmdftHCEHGKg49uqGKtQZmi%2FrLePKVfeWzYZNFyLlxmriZMdQIvBIQ57MaLfWW5PM2vtvuRx9ViPscoGoFqLyvBSMV8NdI0MlTgmH0nH60ww7vKlxAY6pgHzKIes3NABr306oEkiwFCN6oOzochWnAYrxao2Nl31Lnkqx%2FdwJfTWnLmkjuaRaKmjYLb5j0KeLaVt%2FSzk6Ph%2FztuB7KJHSXb0KqTAgryrSaZDXQLGaeawLaXdbv4jUznhtU1SAV2pFzZnPBv0TSqsNnCL3L29%2BT6ILuKHcaXFMk7%2BIC5XCnWOQvLPW5foFn3TTygGVi6zoNM0YJelbfZv%2FzTGHpL%2B&X-Amz-Signature=424f2c159808604754a45e89dfa409326d7c549be509246c113c2506ea55aeb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBV2WNIJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAU25RYni%2BLV4jOyaiBOgKiQprpE5djqY4jz4kdeOiAiAzuGvvLlJJBs2jywqHJy2p5wOu%2BxDQCJtaYZd1cneBBCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuqDKFKaHiB%2FG9Ce9KtwDKx%2BuQrR5Kx7rOj%2F5ADSNL5TXRqrHJLkqaX38j0h0NlZkY5ygUbi4Hgg6J5CaMc0SQa53ATn8GwPwXZp6D4yuuoMdr4%2FRNriCVghdzVmod9jIskPRQ5JtBOR5JmFvOvjlgCTQARIEDURmdQ4pebA5ax7oFUeBlDkuwH1AaXgfEWcXxifXAKrnaw%2FNYrAl5vT%2Fldhpbm%2FtHAY%2B43UuQm%2FN8dOtniD%2B8iV4vbxWO0LyqSbo4c%2FvPPFlRBsi%2BbTwoOO%2FQKHUmvKn%2FFxnYECEv78wFyZLK8x%2B4mScQ4sz3FudWzWq2x1dK3S0AxQ9kfU1WQ8MAk%2BK8raA0MDj5BFrDmG%2Fy%2BRZEbN4kZKb0AogxEMRd8uOPVBtvgTg8ial2DwlbZPhjz62NYCbzruAgTf7vVL5W13RuI46gk5vwS48eQ39KLv1Ba3K4QI9a5m76GPvD2FadNNYD%2FfTLuyxAWS8%2FlKSv%2BVvK1mDpUQC5KmA5vPd6auA%2FoAGzaa8gT9%2Fd0PG2WJPmiiXY3UEKL2XF39pNmdftHCEHGKg49uqGKtQZmi%2FrLePKVfeWzYZNFyLlxmriZMdQIvBIQ57MaLfWW5PM2vtvuRx9ViPscoGoFqLyvBSMV8NdI0MlTgmH0nH60ww7vKlxAY6pgHzKIes3NABr306oEkiwFCN6oOzochWnAYrxao2Nl31Lnkqx%2FdwJfTWnLmkjuaRaKmjYLb5j0KeLaVt%2FSzk6Ph%2FztuB7KJHSXb0KqTAgryrSaZDXQLGaeawLaXdbv4jUznhtU1SAV2pFzZnPBv0TSqsNnCL3L29%2BT6ILuKHcaXFMk7%2BIC5XCnWOQvLPW5foFn3TTygGVi6zoNM0YJelbfZv%2FzTGHpL%2B&X-Amz-Signature=9b154029c2e538f097a4d4e6451633c2d70c98d67ed2247838578e3fff3729f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBV2WNIJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAU25RYni%2BLV4jOyaiBOgKiQprpE5djqY4jz4kdeOiAiAzuGvvLlJJBs2jywqHJy2p5wOu%2BxDQCJtaYZd1cneBBCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuqDKFKaHiB%2FG9Ce9KtwDKx%2BuQrR5Kx7rOj%2F5ADSNL5TXRqrHJLkqaX38j0h0NlZkY5ygUbi4Hgg6J5CaMc0SQa53ATn8GwPwXZp6D4yuuoMdr4%2FRNriCVghdzVmod9jIskPRQ5JtBOR5JmFvOvjlgCTQARIEDURmdQ4pebA5ax7oFUeBlDkuwH1AaXgfEWcXxifXAKrnaw%2FNYrAl5vT%2Fldhpbm%2FtHAY%2B43UuQm%2FN8dOtniD%2B8iV4vbxWO0LyqSbo4c%2FvPPFlRBsi%2BbTwoOO%2FQKHUmvKn%2FFxnYECEv78wFyZLK8x%2B4mScQ4sz3FudWzWq2x1dK3S0AxQ9kfU1WQ8MAk%2BK8raA0MDj5BFrDmG%2Fy%2BRZEbN4kZKb0AogxEMRd8uOPVBtvgTg8ial2DwlbZPhjz62NYCbzruAgTf7vVL5W13RuI46gk5vwS48eQ39KLv1Ba3K4QI9a5m76GPvD2FadNNYD%2FfTLuyxAWS8%2FlKSv%2BVvK1mDpUQC5KmA5vPd6auA%2FoAGzaa8gT9%2Fd0PG2WJPmiiXY3UEKL2XF39pNmdftHCEHGKg49uqGKtQZmi%2FrLePKVfeWzYZNFyLlxmriZMdQIvBIQ57MaLfWW5PM2vtvuRx9ViPscoGoFqLyvBSMV8NdI0MlTgmH0nH60ww7vKlxAY6pgHzKIes3NABr306oEkiwFCN6oOzochWnAYrxao2Nl31Lnkqx%2FdwJfTWnLmkjuaRaKmjYLb5j0KeLaVt%2FSzk6Ph%2FztuB7KJHSXb0KqTAgryrSaZDXQLGaeawLaXdbv4jUznhtU1SAV2pFzZnPBv0TSqsNnCL3L29%2BT6ILuKHcaXFMk7%2BIC5XCnWOQvLPW5foFn3TTygGVi6zoNM0YJelbfZv%2FzTGHpL%2B&X-Amz-Signature=b8faf2db8fa5f66888edf60c4bc8f24d50cbccc29c7ba35e1cca7830039441cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBV2WNIJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAU25RYni%2BLV4jOyaiBOgKiQprpE5djqY4jz4kdeOiAiAzuGvvLlJJBs2jywqHJy2p5wOu%2BxDQCJtaYZd1cneBBCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuqDKFKaHiB%2FG9Ce9KtwDKx%2BuQrR5Kx7rOj%2F5ADSNL5TXRqrHJLkqaX38j0h0NlZkY5ygUbi4Hgg6J5CaMc0SQa53ATn8GwPwXZp6D4yuuoMdr4%2FRNriCVghdzVmod9jIskPRQ5JtBOR5JmFvOvjlgCTQARIEDURmdQ4pebA5ax7oFUeBlDkuwH1AaXgfEWcXxifXAKrnaw%2FNYrAl5vT%2Fldhpbm%2FtHAY%2B43UuQm%2FN8dOtniD%2B8iV4vbxWO0LyqSbo4c%2FvPPFlRBsi%2BbTwoOO%2FQKHUmvKn%2FFxnYECEv78wFyZLK8x%2B4mScQ4sz3FudWzWq2x1dK3S0AxQ9kfU1WQ8MAk%2BK8raA0MDj5BFrDmG%2Fy%2BRZEbN4kZKb0AogxEMRd8uOPVBtvgTg8ial2DwlbZPhjz62NYCbzruAgTf7vVL5W13RuI46gk5vwS48eQ39KLv1Ba3K4QI9a5m76GPvD2FadNNYD%2FfTLuyxAWS8%2FlKSv%2BVvK1mDpUQC5KmA5vPd6auA%2FoAGzaa8gT9%2Fd0PG2WJPmiiXY3UEKL2XF39pNmdftHCEHGKg49uqGKtQZmi%2FrLePKVfeWzYZNFyLlxmriZMdQIvBIQ57MaLfWW5PM2vtvuRx9ViPscoGoFqLyvBSMV8NdI0MlTgmH0nH60ww7vKlxAY6pgHzKIes3NABr306oEkiwFCN6oOzochWnAYrxao2Nl31Lnkqx%2FdwJfTWnLmkjuaRaKmjYLb5j0KeLaVt%2FSzk6Ph%2FztuB7KJHSXb0KqTAgryrSaZDXQLGaeawLaXdbv4jUznhtU1SAV2pFzZnPBv0TSqsNnCL3L29%2BT6ILuKHcaXFMk7%2BIC5XCnWOQvLPW5foFn3TTygGVi6zoNM0YJelbfZv%2FzTGHpL%2B&X-Amz-Signature=597fa4ae6ab97f9b8e8e3c0388d5c4f544123ff44a296a3ef268cd12a977ae11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBV2WNIJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAU25RYni%2BLV4jOyaiBOgKiQprpE5djqY4jz4kdeOiAiAzuGvvLlJJBs2jywqHJy2p5wOu%2BxDQCJtaYZd1cneBBCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuqDKFKaHiB%2FG9Ce9KtwDKx%2BuQrR5Kx7rOj%2F5ADSNL5TXRqrHJLkqaX38j0h0NlZkY5ygUbi4Hgg6J5CaMc0SQa53ATn8GwPwXZp6D4yuuoMdr4%2FRNriCVghdzVmod9jIskPRQ5JtBOR5JmFvOvjlgCTQARIEDURmdQ4pebA5ax7oFUeBlDkuwH1AaXgfEWcXxifXAKrnaw%2FNYrAl5vT%2Fldhpbm%2FtHAY%2B43UuQm%2FN8dOtniD%2B8iV4vbxWO0LyqSbo4c%2FvPPFlRBsi%2BbTwoOO%2FQKHUmvKn%2FFxnYECEv78wFyZLK8x%2B4mScQ4sz3FudWzWq2x1dK3S0AxQ9kfU1WQ8MAk%2BK8raA0MDj5BFrDmG%2Fy%2BRZEbN4kZKb0AogxEMRd8uOPVBtvgTg8ial2DwlbZPhjz62NYCbzruAgTf7vVL5W13RuI46gk5vwS48eQ39KLv1Ba3K4QI9a5m76GPvD2FadNNYD%2FfTLuyxAWS8%2FlKSv%2BVvK1mDpUQC5KmA5vPd6auA%2FoAGzaa8gT9%2Fd0PG2WJPmiiXY3UEKL2XF39pNmdftHCEHGKg49uqGKtQZmi%2FrLePKVfeWzYZNFyLlxmriZMdQIvBIQ57MaLfWW5PM2vtvuRx9ViPscoGoFqLyvBSMV8NdI0MlTgmH0nH60ww7vKlxAY6pgHzKIes3NABr306oEkiwFCN6oOzochWnAYrxao2Nl31Lnkqx%2FdwJfTWnLmkjuaRaKmjYLb5j0KeLaVt%2FSzk6Ph%2FztuB7KJHSXb0KqTAgryrSaZDXQLGaeawLaXdbv4jUznhtU1SAV2pFzZnPBv0TSqsNnCL3L29%2BT6ILuKHcaXFMk7%2BIC5XCnWOQvLPW5foFn3TTygGVi6zoNM0YJelbfZv%2FzTGHpL%2B&X-Amz-Signature=7c68f6fdcfd91df816dd3d60a51a2974f40086405d37f61be87cda0af60612c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBV2WNIJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAU25RYni%2BLV4jOyaiBOgKiQprpE5djqY4jz4kdeOiAiAzuGvvLlJJBs2jywqHJy2p5wOu%2BxDQCJtaYZd1cneBBCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuqDKFKaHiB%2FG9Ce9KtwDKx%2BuQrR5Kx7rOj%2F5ADSNL5TXRqrHJLkqaX38j0h0NlZkY5ygUbi4Hgg6J5CaMc0SQa53ATn8GwPwXZp6D4yuuoMdr4%2FRNriCVghdzVmod9jIskPRQ5JtBOR5JmFvOvjlgCTQARIEDURmdQ4pebA5ax7oFUeBlDkuwH1AaXgfEWcXxifXAKrnaw%2FNYrAl5vT%2Fldhpbm%2FtHAY%2B43UuQm%2FN8dOtniD%2B8iV4vbxWO0LyqSbo4c%2FvPPFlRBsi%2BbTwoOO%2FQKHUmvKn%2FFxnYECEv78wFyZLK8x%2B4mScQ4sz3FudWzWq2x1dK3S0AxQ9kfU1WQ8MAk%2BK8raA0MDj5BFrDmG%2Fy%2BRZEbN4kZKb0AogxEMRd8uOPVBtvgTg8ial2DwlbZPhjz62NYCbzruAgTf7vVL5W13RuI46gk5vwS48eQ39KLv1Ba3K4QI9a5m76GPvD2FadNNYD%2FfTLuyxAWS8%2FlKSv%2BVvK1mDpUQC5KmA5vPd6auA%2FoAGzaa8gT9%2Fd0PG2WJPmiiXY3UEKL2XF39pNmdftHCEHGKg49uqGKtQZmi%2FrLePKVfeWzYZNFyLlxmriZMdQIvBIQ57MaLfWW5PM2vtvuRx9ViPscoGoFqLyvBSMV8NdI0MlTgmH0nH60ww7vKlxAY6pgHzKIes3NABr306oEkiwFCN6oOzochWnAYrxao2Nl31Lnkqx%2FdwJfTWnLmkjuaRaKmjYLb5j0KeLaVt%2FSzk6Ph%2FztuB7KJHSXb0KqTAgryrSaZDXQLGaeawLaXdbv4jUznhtU1SAV2pFzZnPBv0TSqsNnCL3L29%2BT6ILuKHcaXFMk7%2BIC5XCnWOQvLPW5foFn3TTygGVi6zoNM0YJelbfZv%2FzTGHpL%2B&X-Amz-Signature=b05fa3ad433056e3231d5b401e07b64cf79b595ddd1702711028b228129f81fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBV2WNIJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAU25RYni%2BLV4jOyaiBOgKiQprpE5djqY4jz4kdeOiAiAzuGvvLlJJBs2jywqHJy2p5wOu%2BxDQCJtaYZd1cneBBCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuqDKFKaHiB%2FG9Ce9KtwDKx%2BuQrR5Kx7rOj%2F5ADSNL5TXRqrHJLkqaX38j0h0NlZkY5ygUbi4Hgg6J5CaMc0SQa53ATn8GwPwXZp6D4yuuoMdr4%2FRNriCVghdzVmod9jIskPRQ5JtBOR5JmFvOvjlgCTQARIEDURmdQ4pebA5ax7oFUeBlDkuwH1AaXgfEWcXxifXAKrnaw%2FNYrAl5vT%2Fldhpbm%2FtHAY%2B43UuQm%2FN8dOtniD%2B8iV4vbxWO0LyqSbo4c%2FvPPFlRBsi%2BbTwoOO%2FQKHUmvKn%2FFxnYECEv78wFyZLK8x%2B4mScQ4sz3FudWzWq2x1dK3S0AxQ9kfU1WQ8MAk%2BK8raA0MDj5BFrDmG%2Fy%2BRZEbN4kZKb0AogxEMRd8uOPVBtvgTg8ial2DwlbZPhjz62NYCbzruAgTf7vVL5W13RuI46gk5vwS48eQ39KLv1Ba3K4QI9a5m76GPvD2FadNNYD%2FfTLuyxAWS8%2FlKSv%2BVvK1mDpUQC5KmA5vPd6auA%2FoAGzaa8gT9%2Fd0PG2WJPmiiXY3UEKL2XF39pNmdftHCEHGKg49uqGKtQZmi%2FrLePKVfeWzYZNFyLlxmriZMdQIvBIQ57MaLfWW5PM2vtvuRx9ViPscoGoFqLyvBSMV8NdI0MlTgmH0nH60ww7vKlxAY6pgHzKIes3NABr306oEkiwFCN6oOzochWnAYrxao2Nl31Lnkqx%2FdwJfTWnLmkjuaRaKmjYLb5j0KeLaVt%2FSzk6Ph%2FztuB7KJHSXb0KqTAgryrSaZDXQLGaeawLaXdbv4jUznhtU1SAV2pFzZnPBv0TSqsNnCL3L29%2BT6ILuKHcaXFMk7%2BIC5XCnWOQvLPW5foFn3TTygGVi6zoNM0YJelbfZv%2FzTGHpL%2B&X-Amz-Signature=678389fb72cfe7a8365d78d1960de6de3ff522392c97d42ab5160277a353c0bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBV2WNIJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAU25RYni%2BLV4jOyaiBOgKiQprpE5djqY4jz4kdeOiAiAzuGvvLlJJBs2jywqHJy2p5wOu%2BxDQCJtaYZd1cneBBCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuqDKFKaHiB%2FG9Ce9KtwDKx%2BuQrR5Kx7rOj%2F5ADSNL5TXRqrHJLkqaX38j0h0NlZkY5ygUbi4Hgg6J5CaMc0SQa53ATn8GwPwXZp6D4yuuoMdr4%2FRNriCVghdzVmod9jIskPRQ5JtBOR5JmFvOvjlgCTQARIEDURmdQ4pebA5ax7oFUeBlDkuwH1AaXgfEWcXxifXAKrnaw%2FNYrAl5vT%2Fldhpbm%2FtHAY%2B43UuQm%2FN8dOtniD%2B8iV4vbxWO0LyqSbo4c%2FvPPFlRBsi%2BbTwoOO%2FQKHUmvKn%2FFxnYECEv78wFyZLK8x%2B4mScQ4sz3FudWzWq2x1dK3S0AxQ9kfU1WQ8MAk%2BK8raA0MDj5BFrDmG%2Fy%2BRZEbN4kZKb0AogxEMRd8uOPVBtvgTg8ial2DwlbZPhjz62NYCbzruAgTf7vVL5W13RuI46gk5vwS48eQ39KLv1Ba3K4QI9a5m76GPvD2FadNNYD%2FfTLuyxAWS8%2FlKSv%2BVvK1mDpUQC5KmA5vPd6auA%2FoAGzaa8gT9%2Fd0PG2WJPmiiXY3UEKL2XF39pNmdftHCEHGKg49uqGKtQZmi%2FrLePKVfeWzYZNFyLlxmriZMdQIvBIQ57MaLfWW5PM2vtvuRx9ViPscoGoFqLyvBSMV8NdI0MlTgmH0nH60ww7vKlxAY6pgHzKIes3NABr306oEkiwFCN6oOzochWnAYrxao2Nl31Lnkqx%2FdwJfTWnLmkjuaRaKmjYLb5j0KeLaVt%2FSzk6Ph%2FztuB7KJHSXb0KqTAgryrSaZDXQLGaeawLaXdbv4jUznhtU1SAV2pFzZnPBv0TSqsNnCL3L29%2BT6ILuKHcaXFMk7%2BIC5XCnWOQvLPW5foFn3TTygGVi6zoNM0YJelbfZv%2FzTGHpL%2B&X-Amz-Signature=ef6a68c72dba0835475b1a5498a79214892f071adbcb999f8896144686014269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
   
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>

    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBV2WNIJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAU25RYni%2BLV4jOyaiBOgKiQprpE5djqY4jz4kdeOiAiAzuGvvLlJJBs2jywqHJy2p5wOu%2BxDQCJtaYZd1cneBBCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuqDKFKaHiB%2FG9Ce9KtwDKx%2BuQrR5Kx7rOj%2F5ADSNL5TXRqrHJLkqaX38j0h0NlZkY5ygUbi4Hgg6J5CaMc0SQa53ATn8GwPwXZp6D4yuuoMdr4%2FRNriCVghdzVmod9jIskPRQ5JtBOR5JmFvOvjlgCTQARIEDURmdQ4pebA5ax7oFUeBlDkuwH1AaXgfEWcXxifXAKrnaw%2FNYrAl5vT%2Fldhpbm%2FtHAY%2B43UuQm%2FN8dOtniD%2B8iV4vbxWO0LyqSbo4c%2FvPPFlRBsi%2BbTwoOO%2FQKHUmvKn%2FFxnYECEv78wFyZLK8x%2B4mScQ4sz3FudWzWq2x1dK3S0AxQ9kfU1WQ8MAk%2BK8raA0MDj5BFrDmG%2Fy%2BRZEbN4kZKb0AogxEMRd8uOPVBtvgTg8ial2DwlbZPhjz62NYCbzruAgTf7vVL5W13RuI46gk5vwS48eQ39KLv1Ba3K4QI9a5m76GPvD2FadNNYD%2FfTLuyxAWS8%2FlKSv%2BVvK1mDpUQC5KmA5vPd6auA%2FoAGzaa8gT9%2Fd0PG2WJPmiiXY3UEKL2XF39pNmdftHCEHGKg49uqGKtQZmi%2FrLePKVfeWzYZNFyLlxmriZMdQIvBIQ57MaLfWW5PM2vtvuRx9ViPscoGoFqLyvBSMV8NdI0MlTgmH0nH60ww7vKlxAY6pgHzKIes3NABr306oEkiwFCN6oOzochWnAYrxao2Nl31Lnkqx%2FdwJfTWnLmkjuaRaKmjYLb5j0KeLaVt%2FSzk6Ph%2FztuB7KJHSXb0KqTAgryrSaZDXQLGaeawLaXdbv4jUznhtU1SAV2pFzZnPBv0TSqsNnCL3L29%2BT6ILuKHcaXFMk7%2BIC5XCnWOQvLPW5foFn3TTygGVi6zoNM0YJelbfZv%2FzTGHpL%2B&X-Amz-Signature=bc5225f5da3880de7deda01484ef0009f79e89c041610ad7bd2a9e95e3e335f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBV2WNIJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAU25RYni%2BLV4jOyaiBOgKiQprpE5djqY4jz4kdeOiAiAzuGvvLlJJBs2jywqHJy2p5wOu%2BxDQCJtaYZd1cneBBCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuqDKFKaHiB%2FG9Ce9KtwDKx%2BuQrR5Kx7rOj%2F5ADSNL5TXRqrHJLkqaX38j0h0NlZkY5ygUbi4Hgg6J5CaMc0SQa53ATn8GwPwXZp6D4yuuoMdr4%2FRNriCVghdzVmod9jIskPRQ5JtBOR5JmFvOvjlgCTQARIEDURmdQ4pebA5ax7oFUeBlDkuwH1AaXgfEWcXxifXAKrnaw%2FNYrAl5vT%2Fldhpbm%2FtHAY%2B43UuQm%2FN8dOtniD%2B8iV4vbxWO0LyqSbo4c%2FvPPFlRBsi%2BbTwoOO%2FQKHUmvKn%2FFxnYECEv78wFyZLK8x%2B4mScQ4sz3FudWzWq2x1dK3S0AxQ9kfU1WQ8MAk%2BK8raA0MDj5BFrDmG%2Fy%2BRZEbN4kZKb0AogxEMRd8uOPVBtvgTg8ial2DwlbZPhjz62NYCbzruAgTf7vVL5W13RuI46gk5vwS48eQ39KLv1Ba3K4QI9a5m76GPvD2FadNNYD%2FfTLuyxAWS8%2FlKSv%2BVvK1mDpUQC5KmA5vPd6auA%2FoAGzaa8gT9%2Fd0PG2WJPmiiXY3UEKL2XF39pNmdftHCEHGKg49uqGKtQZmi%2FrLePKVfeWzYZNFyLlxmriZMdQIvBIQ57MaLfWW5PM2vtvuRx9ViPscoGoFqLyvBSMV8NdI0MlTgmH0nH60ww7vKlxAY6pgHzKIes3NABr306oEkiwFCN6oOzochWnAYrxao2Nl31Lnkqx%2FdwJfTWnLmkjuaRaKmjYLb5j0KeLaVt%2FSzk6Ph%2FztuB7KJHSXb0KqTAgryrSaZDXQLGaeawLaXdbv4jUznhtU1SAV2pFzZnPBv0TSqsNnCL3L29%2BT6ILuKHcaXFMk7%2BIC5XCnWOQvLPW5foFn3TTygGVi6zoNM0YJelbfZv%2FzTGHpL%2B&X-Amz-Signature=509fc3d4a6383725697522f5efd81ae0d2fe87c06f0f490de60e5b04a9bbe1d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBV2WNIJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAU25RYni%2BLV4jOyaiBOgKiQprpE5djqY4jz4kdeOiAiAzuGvvLlJJBs2jywqHJy2p5wOu%2BxDQCJtaYZd1cneBBCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuqDKFKaHiB%2FG9Ce9KtwDKx%2BuQrR5Kx7rOj%2F5ADSNL5TXRqrHJLkqaX38j0h0NlZkY5ygUbi4Hgg6J5CaMc0SQa53ATn8GwPwXZp6D4yuuoMdr4%2FRNriCVghdzVmod9jIskPRQ5JtBOR5JmFvOvjlgCTQARIEDURmdQ4pebA5ax7oFUeBlDkuwH1AaXgfEWcXxifXAKrnaw%2FNYrAl5vT%2Fldhpbm%2FtHAY%2B43UuQm%2FN8dOtniD%2B8iV4vbxWO0LyqSbo4c%2FvPPFlRBsi%2BbTwoOO%2FQKHUmvKn%2FFxnYECEv78wFyZLK8x%2B4mScQ4sz3FudWzWq2x1dK3S0AxQ9kfU1WQ8MAk%2BK8raA0MDj5BFrDmG%2Fy%2BRZEbN4kZKb0AogxEMRd8uOPVBtvgTg8ial2DwlbZPhjz62NYCbzruAgTf7vVL5W13RuI46gk5vwS48eQ39KLv1Ba3K4QI9a5m76GPvD2FadNNYD%2FfTLuyxAWS8%2FlKSv%2BVvK1mDpUQC5KmA5vPd6auA%2FoAGzaa8gT9%2Fd0PG2WJPmiiXY3UEKL2XF39pNmdftHCEHGKg49uqGKtQZmi%2FrLePKVfeWzYZNFyLlxmriZMdQIvBIQ57MaLfWW5PM2vtvuRx9ViPscoGoFqLyvBSMV8NdI0MlTgmH0nH60ww7vKlxAY6pgHzKIes3NABr306oEkiwFCN6oOzochWnAYrxao2Nl31Lnkqx%2FdwJfTWnLmkjuaRaKmjYLb5j0KeLaVt%2FSzk6Ph%2FztuB7KJHSXb0KqTAgryrSaZDXQLGaeawLaXdbv4jUznhtU1SAV2pFzZnPBv0TSqsNnCL3L29%2BT6ILuKHcaXFMk7%2BIC5XCnWOQvLPW5foFn3TTygGVi6zoNM0YJelbfZv%2FzTGHpL%2B&X-Amz-Signature=50c7695c2dbc8dec71c38b85c0c3b70b6718ec8917b3ea25935932550004d849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBV2WNIJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAU25RYni%2BLV4jOyaiBOgKiQprpE5djqY4jz4kdeOiAiAzuGvvLlJJBs2jywqHJy2p5wOu%2BxDQCJtaYZd1cneBBCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuqDKFKaHiB%2FG9Ce9KtwDKx%2BuQrR5Kx7rOj%2F5ADSNL5TXRqrHJLkqaX38j0h0NlZkY5ygUbi4Hgg6J5CaMc0SQa53ATn8GwPwXZp6D4yuuoMdr4%2FRNriCVghdzVmod9jIskPRQ5JtBOR5JmFvOvjlgCTQARIEDURmdQ4pebA5ax7oFUeBlDkuwH1AaXgfEWcXxifXAKrnaw%2FNYrAl5vT%2Fldhpbm%2FtHAY%2B43UuQm%2FN8dOtniD%2B8iV4vbxWO0LyqSbo4c%2FvPPFlRBsi%2BbTwoOO%2FQKHUmvKn%2FFxnYECEv78wFyZLK8x%2B4mScQ4sz3FudWzWq2x1dK3S0AxQ9kfU1WQ8MAk%2BK8raA0MDj5BFrDmG%2Fy%2BRZEbN4kZKb0AogxEMRd8uOPVBtvgTg8ial2DwlbZPhjz62NYCbzruAgTf7vVL5W13RuI46gk5vwS48eQ39KLv1Ba3K4QI9a5m76GPvD2FadNNYD%2FfTLuyxAWS8%2FlKSv%2BVvK1mDpUQC5KmA5vPd6auA%2FoAGzaa8gT9%2Fd0PG2WJPmiiXY3UEKL2XF39pNmdftHCEHGKg49uqGKtQZmi%2FrLePKVfeWzYZNFyLlxmriZMdQIvBIQ57MaLfWW5PM2vtvuRx9ViPscoGoFqLyvBSMV8NdI0MlTgmH0nH60ww7vKlxAY6pgHzKIes3NABr306oEkiwFCN6oOzochWnAYrxao2Nl31Lnkqx%2FdwJfTWnLmkjuaRaKmjYLb5j0KeLaVt%2FSzk6Ph%2FztuB7KJHSXb0KqTAgryrSaZDXQLGaeawLaXdbv4jUznhtU1SAV2pFzZnPBv0TSqsNnCL3L29%2BT6ILuKHcaXFMk7%2BIC5XCnWOQvLPW5foFn3TTygGVi6zoNM0YJelbfZv%2FzTGHpL%2B&X-Amz-Signature=8b0def737d20d31414c4d3120299311708926ecf17e552f6524c149aaa49da56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6V2DZJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHXmzXuUpzBdzWfc2Z0InIyCZYCXyoC070bVOHlODxKAIgYmXqY%2Fl7GFmCBilpHIwVZbUJW7zspsWXWfItaT5jhd8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAMAuZGFUdhmvPEjCrcAzkbAMgh4PIAavuGoEGxv2aWOcmK%2FxP5ol6u7PqMENfzpdBtq1Y1Z%2BQmNzJP0smnckzyxoVsqqM0jBeCVRqElOF7L%2BFhQPOOXT1coPjNnaYUNK2wGz5NuKI6rpPy5tXa2YCyx2BG62%2BwDYsOQ690cI7bzyOEz4HvnDDHCKhQdWtMi88BYsB%2FC1bmrzNXPt24Uc%2FmhR4ggJPZIYXeNMhWluyJh0SUiWQqqbFhw%2FSE4%2BHXbuwxoy4wI4P0jm2fga9wb%2FGlPkiZcR7KV9ESPnipQGvd0Clv1rVElyyUp%2FsFLikwW%2Bal5Oy7b5niH2AItzLSbjBCIIZMs6TTOvKSQYc0HTzJXEo3SU%2FOkMi0IoeLdxyTLMYPQ%2FzXoasG%2FVN51%2FofL74kxsj6eihUqxXKONjGihHurhSEdnaZ%2Bw3pYXXumGCuynpf4GzPHa3tiVYUmTfwdKv%2BldGYsz47mCdOi0LxULJmHcxgOZAsRs0MCnMGYP%2FYz50Eg71gV%2FGKjYqGqBgQ1S0vd4ITRbH8l1f7HBt0lLVffp%2BfsKOZJ0Dx4tG97NAvaR%2FaSmrryBQYBjE4vVZUBgF8VFRA0o5j%2FFbtDODTkEd8xck9C6Gy1z2G0LVJM9rJ8BvNxhwBFZVWRtc1MOLypcQGOqUB87ga85%2BDP2avMzWVHOA4fC65eKbF%2BemnXFSwjPXXvbeOnL7PE7ex%2Bg7ArkX%2F17yVSCD9XMCJNo2T0XMMGEoYv9xDaOY4aOkf7NSvIUpUiB%2FdD9yaoTbuQYURXnqT1dWbnvzn0odjL9QpbRLITLB2%2BaB3PF9xUZXtYMNry59OlM6wp7hnp2wqOu3hQAsL9zw%2B7376EjTlCx8IkKQBWxOINhkxsMCM&X-Amz-Signature=50c01783786586fbee3c296d925382d989faeb4cb0b4178728caee4a855851d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6V2DZJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHXmzXuUpzBdzWfc2Z0InIyCZYCXyoC070bVOHlODxKAIgYmXqY%2Fl7GFmCBilpHIwVZbUJW7zspsWXWfItaT5jhd8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAMAuZGFUdhmvPEjCrcAzkbAMgh4PIAavuGoEGxv2aWOcmK%2FxP5ol6u7PqMENfzpdBtq1Y1Z%2BQmNzJP0smnckzyxoVsqqM0jBeCVRqElOF7L%2BFhQPOOXT1coPjNnaYUNK2wGz5NuKI6rpPy5tXa2YCyx2BG62%2BwDYsOQ690cI7bzyOEz4HvnDDHCKhQdWtMi88BYsB%2FC1bmrzNXPt24Uc%2FmhR4ggJPZIYXeNMhWluyJh0SUiWQqqbFhw%2FSE4%2BHXbuwxoy4wI4P0jm2fga9wb%2FGlPkiZcR7KV9ESPnipQGvd0Clv1rVElyyUp%2FsFLikwW%2Bal5Oy7b5niH2AItzLSbjBCIIZMs6TTOvKSQYc0HTzJXEo3SU%2FOkMi0IoeLdxyTLMYPQ%2FzXoasG%2FVN51%2FofL74kxsj6eihUqxXKONjGihHurhSEdnaZ%2Bw3pYXXumGCuynpf4GzPHa3tiVYUmTfwdKv%2BldGYsz47mCdOi0LxULJmHcxgOZAsRs0MCnMGYP%2FYz50Eg71gV%2FGKjYqGqBgQ1S0vd4ITRbH8l1f7HBt0lLVffp%2BfsKOZJ0Dx4tG97NAvaR%2FaSmrryBQYBjE4vVZUBgF8VFRA0o5j%2FFbtDODTkEd8xck9C6Gy1z2G0LVJM9rJ8BvNxhwBFZVWRtc1MOLypcQGOqUB87ga85%2BDP2avMzWVHOA4fC65eKbF%2BemnXFSwjPXXvbeOnL7PE7ex%2Bg7ArkX%2F17yVSCD9XMCJNo2T0XMMGEoYv9xDaOY4aOkf7NSvIUpUiB%2FdD9yaoTbuQYURXnqT1dWbnvzn0odjL9QpbRLITLB2%2BaB3PF9xUZXtYMNry59OlM6wp7hnp2wqOu3hQAsL9zw%2B7376EjTlCx8IkKQBWxOINhkxsMCM&X-Amz-Signature=e656647a2acda07c7a8600421220958812a53775d57853d8663f565c6feefc24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6V2DZJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHXmzXuUpzBdzWfc2Z0InIyCZYCXyoC070bVOHlODxKAIgYmXqY%2Fl7GFmCBilpHIwVZbUJW7zspsWXWfItaT5jhd8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAMAuZGFUdhmvPEjCrcAzkbAMgh4PIAavuGoEGxv2aWOcmK%2FxP5ol6u7PqMENfzpdBtq1Y1Z%2BQmNzJP0smnckzyxoVsqqM0jBeCVRqElOF7L%2BFhQPOOXT1coPjNnaYUNK2wGz5NuKI6rpPy5tXa2YCyx2BG62%2BwDYsOQ690cI7bzyOEz4HvnDDHCKhQdWtMi88BYsB%2FC1bmrzNXPt24Uc%2FmhR4ggJPZIYXeNMhWluyJh0SUiWQqqbFhw%2FSE4%2BHXbuwxoy4wI4P0jm2fga9wb%2FGlPkiZcR7KV9ESPnipQGvd0Clv1rVElyyUp%2FsFLikwW%2Bal5Oy7b5niH2AItzLSbjBCIIZMs6TTOvKSQYc0HTzJXEo3SU%2FOkMi0IoeLdxyTLMYPQ%2FzXoasG%2FVN51%2FofL74kxsj6eihUqxXKONjGihHurhSEdnaZ%2Bw3pYXXumGCuynpf4GzPHa3tiVYUmTfwdKv%2BldGYsz47mCdOi0LxULJmHcxgOZAsRs0MCnMGYP%2FYz50Eg71gV%2FGKjYqGqBgQ1S0vd4ITRbH8l1f7HBt0lLVffp%2BfsKOZJ0Dx4tG97NAvaR%2FaSmrryBQYBjE4vVZUBgF8VFRA0o5j%2FFbtDODTkEd8xck9C6Gy1z2G0LVJM9rJ8BvNxhwBFZVWRtc1MOLypcQGOqUB87ga85%2BDP2avMzWVHOA4fC65eKbF%2BemnXFSwjPXXvbeOnL7PE7ex%2Bg7ArkX%2F17yVSCD9XMCJNo2T0XMMGEoYv9xDaOY4aOkf7NSvIUpUiB%2FdD9yaoTbuQYURXnqT1dWbnvzn0odjL9QpbRLITLB2%2BaB3PF9xUZXtYMNry59OlM6wp7hnp2wqOu3hQAsL9zw%2B7376EjTlCx8IkKQBWxOINhkxsMCM&X-Amz-Signature=12e2f35ee5f4e1d99fe38ed86df7fc7c597e3d16379c0fd5f0bbde88e2312afd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6V2DZJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHXmzXuUpzBdzWfc2Z0InIyCZYCXyoC070bVOHlODxKAIgYmXqY%2Fl7GFmCBilpHIwVZbUJW7zspsWXWfItaT5jhd8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAMAuZGFUdhmvPEjCrcAzkbAMgh4PIAavuGoEGxv2aWOcmK%2FxP5ol6u7PqMENfzpdBtq1Y1Z%2BQmNzJP0smnckzyxoVsqqM0jBeCVRqElOF7L%2BFhQPOOXT1coPjNnaYUNK2wGz5NuKI6rpPy5tXa2YCyx2BG62%2BwDYsOQ690cI7bzyOEz4HvnDDHCKhQdWtMi88BYsB%2FC1bmrzNXPt24Uc%2FmhR4ggJPZIYXeNMhWluyJh0SUiWQqqbFhw%2FSE4%2BHXbuwxoy4wI4P0jm2fga9wb%2FGlPkiZcR7KV9ESPnipQGvd0Clv1rVElyyUp%2FsFLikwW%2Bal5Oy7b5niH2AItzLSbjBCIIZMs6TTOvKSQYc0HTzJXEo3SU%2FOkMi0IoeLdxyTLMYPQ%2FzXoasG%2FVN51%2FofL74kxsj6eihUqxXKONjGihHurhSEdnaZ%2Bw3pYXXumGCuynpf4GzPHa3tiVYUmTfwdKv%2BldGYsz47mCdOi0LxULJmHcxgOZAsRs0MCnMGYP%2FYz50Eg71gV%2FGKjYqGqBgQ1S0vd4ITRbH8l1f7HBt0lLVffp%2BfsKOZJ0Dx4tG97NAvaR%2FaSmrryBQYBjE4vVZUBgF8VFRA0o5j%2FFbtDODTkEd8xck9C6Gy1z2G0LVJM9rJ8BvNxhwBFZVWRtc1MOLypcQGOqUB87ga85%2BDP2avMzWVHOA4fC65eKbF%2BemnXFSwjPXXvbeOnL7PE7ex%2Bg7ArkX%2F17yVSCD9XMCJNo2T0XMMGEoYv9xDaOY4aOkf7NSvIUpUiB%2FdD9yaoTbuQYURXnqT1dWbnvzn0odjL9QpbRLITLB2%2BaB3PF9xUZXtYMNry59OlM6wp7hnp2wqOu3hQAsL9zw%2B7376EjTlCx8IkKQBWxOINhkxsMCM&X-Amz-Signature=ffaaa3c35b9078a9839e1094f5be581873a124d51487bf71339c0259e8b7480c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6V2DZJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHXmzXuUpzBdzWfc2Z0InIyCZYCXyoC070bVOHlODxKAIgYmXqY%2Fl7GFmCBilpHIwVZbUJW7zspsWXWfItaT5jhd8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAMAuZGFUdhmvPEjCrcAzkbAMgh4PIAavuGoEGxv2aWOcmK%2FxP5ol6u7PqMENfzpdBtq1Y1Z%2BQmNzJP0smnckzyxoVsqqM0jBeCVRqElOF7L%2BFhQPOOXT1coPjNnaYUNK2wGz5NuKI6rpPy5tXa2YCyx2BG62%2BwDYsOQ690cI7bzyOEz4HvnDDHCKhQdWtMi88BYsB%2FC1bmrzNXPt24Uc%2FmhR4ggJPZIYXeNMhWluyJh0SUiWQqqbFhw%2FSE4%2BHXbuwxoy4wI4P0jm2fga9wb%2FGlPkiZcR7KV9ESPnipQGvd0Clv1rVElyyUp%2FsFLikwW%2Bal5Oy7b5niH2AItzLSbjBCIIZMs6TTOvKSQYc0HTzJXEo3SU%2FOkMi0IoeLdxyTLMYPQ%2FzXoasG%2FVN51%2FofL74kxsj6eihUqxXKONjGihHurhSEdnaZ%2Bw3pYXXumGCuynpf4GzPHa3tiVYUmTfwdKv%2BldGYsz47mCdOi0LxULJmHcxgOZAsRs0MCnMGYP%2FYz50Eg71gV%2FGKjYqGqBgQ1S0vd4ITRbH8l1f7HBt0lLVffp%2BfsKOZJ0Dx4tG97NAvaR%2FaSmrryBQYBjE4vVZUBgF8VFRA0o5j%2FFbtDODTkEd8xck9C6Gy1z2G0LVJM9rJ8BvNxhwBFZVWRtc1MOLypcQGOqUB87ga85%2BDP2avMzWVHOA4fC65eKbF%2BemnXFSwjPXXvbeOnL7PE7ex%2Bg7ArkX%2F17yVSCD9XMCJNo2T0XMMGEoYv9xDaOY4aOkf7NSvIUpUiB%2FdD9yaoTbuQYURXnqT1dWbnvzn0odjL9QpbRLITLB2%2BaB3PF9xUZXtYMNry59OlM6wp7hnp2wqOu3hQAsL9zw%2B7376EjTlCx8IkKQBWxOINhkxsMCM&X-Amz-Signature=09d5ff12dfc80d4c78bea03a81f3cc949102295d100cca48a9d6881edc5adea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6V2DZJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHXmzXuUpzBdzWfc2Z0InIyCZYCXyoC070bVOHlODxKAIgYmXqY%2Fl7GFmCBilpHIwVZbUJW7zspsWXWfItaT5jhd8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAMAuZGFUdhmvPEjCrcAzkbAMgh4PIAavuGoEGxv2aWOcmK%2FxP5ol6u7PqMENfzpdBtq1Y1Z%2BQmNzJP0smnckzyxoVsqqM0jBeCVRqElOF7L%2BFhQPOOXT1coPjNnaYUNK2wGz5NuKI6rpPy5tXa2YCyx2BG62%2BwDYsOQ690cI7bzyOEz4HvnDDHCKhQdWtMi88BYsB%2FC1bmrzNXPt24Uc%2FmhR4ggJPZIYXeNMhWluyJh0SUiWQqqbFhw%2FSE4%2BHXbuwxoy4wI4P0jm2fga9wb%2FGlPkiZcR7KV9ESPnipQGvd0Clv1rVElyyUp%2FsFLikwW%2Bal5Oy7b5niH2AItzLSbjBCIIZMs6TTOvKSQYc0HTzJXEo3SU%2FOkMi0IoeLdxyTLMYPQ%2FzXoasG%2FVN51%2FofL74kxsj6eihUqxXKONjGihHurhSEdnaZ%2Bw3pYXXumGCuynpf4GzPHa3tiVYUmTfwdKv%2BldGYsz47mCdOi0LxULJmHcxgOZAsRs0MCnMGYP%2FYz50Eg71gV%2FGKjYqGqBgQ1S0vd4ITRbH8l1f7HBt0lLVffp%2BfsKOZJ0Dx4tG97NAvaR%2FaSmrryBQYBjE4vVZUBgF8VFRA0o5j%2FFbtDODTkEd8xck9C6Gy1z2G0LVJM9rJ8BvNxhwBFZVWRtc1MOLypcQGOqUB87ga85%2BDP2avMzWVHOA4fC65eKbF%2BemnXFSwjPXXvbeOnL7PE7ex%2Bg7ArkX%2F17yVSCD9XMCJNo2T0XMMGEoYv9xDaOY4aOkf7NSvIUpUiB%2FdD9yaoTbuQYURXnqT1dWbnvzn0odjL9QpbRLITLB2%2BaB3PF9xUZXtYMNry59OlM6wp7hnp2wqOu3hQAsL9zw%2B7376EjTlCx8IkKQBWxOINhkxsMCM&X-Amz-Signature=b3e64c1ae9f48da4873ed6e4b7f4f1c75d03b6d3d873780a6c594ea4a8e133ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
