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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFEVWUF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCUctZqHG1%2BSoCgD2zQYIBkk2%2FPuA3kQhfxsx62RSCkiwIgMlObMy1HS3MUMAwSwVnqb9ccrcTuCp99GyWXKgPhS1Eq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDPxKfS3z9mPHnG9OCrcA137fYHtYXikIWy5D%2BYr2B9zFZCP47jlExUk9yg901EMhRz0TLi8M3hMWev2HbgpHLsGB503z2HAYePtb%2B7lOVWy4HWK4gO3g%2B9fLfD1rKsgH1djFwIarj4D%2BgDcjXtdb8yY1KOmNM%2FoIqgAdCBcx5vWiT8vR5pmT0zero794gWke35aTGjTLzAlk%2FV0MlFhYWXjEpbtGCsryNluZ7Hu2oLIB2QpEjNpx%2B0BBr%2FiN4uvpZRC1PHWs9CI0g86UpKgZlPTeelC2FVvUfXFLjLeLc6EjqVpnabJN%2BvQic8u2V2BcVArAxx1eaSdmdNrgtCkAAu7qiAK%2BGyvV%2BtsS3lDVH9Hk5zA4Gp%2BUQ4D6aMt6hxcnY%2BXjCzGznHMZOn7P2JP8cAYuR4KPwiTzueCdkrQiU5iyD%2BIboWXgWcdwFHIxbI5A2A1%2F1KBENw36wQLph8yL9zrbRHqxRKiYT7SEbgG6TDJOZEHmgGOzByOGyHxNh1FU6FEoreaBcPtKUcgAYC6igMpRGoTW5T5L2iAOzg3QwfHSvPio0NJC7WIbcHgJ9w%2BQj51K6o2T9tjJQ2TrvvUa0zBpVwjk2jHgMzoD%2FFwWqKdKkJIz69xqZ6NEOcptyTq34UJZEQ4epxb%2BdlnMKaOz8QGOqUBNr347dYuQ0xL8nYJ8sRfMTfX7elfO6nVsv0vmTRvGvkezc5TZI2KC5n8fXQnK80d8WtK6NhyXdIJYx3aQUBadqezsTsPzUtQGURFrI6IglJHkNrF%2FxNyD4n6PxiCZappa3oubm1FOXwd%2F9aZ0N58tThkIXjwKHeldPSE9SUbrmE4bTkItIy8Fj2tNzB3FkckHYTNM8G3PtJPwHHqs%2BJ28b5bCaI4&X-Amz-Signature=37887a52f35d0b9829ab09892b02a2cabbcb71c253c422a43f019f2fd2430b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFEVWUF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCUctZqHG1%2BSoCgD2zQYIBkk2%2FPuA3kQhfxsx62RSCkiwIgMlObMy1HS3MUMAwSwVnqb9ccrcTuCp99GyWXKgPhS1Eq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDPxKfS3z9mPHnG9OCrcA137fYHtYXikIWy5D%2BYr2B9zFZCP47jlExUk9yg901EMhRz0TLi8M3hMWev2HbgpHLsGB503z2HAYePtb%2B7lOVWy4HWK4gO3g%2B9fLfD1rKsgH1djFwIarj4D%2BgDcjXtdb8yY1KOmNM%2FoIqgAdCBcx5vWiT8vR5pmT0zero794gWke35aTGjTLzAlk%2FV0MlFhYWXjEpbtGCsryNluZ7Hu2oLIB2QpEjNpx%2B0BBr%2FiN4uvpZRC1PHWs9CI0g86UpKgZlPTeelC2FVvUfXFLjLeLc6EjqVpnabJN%2BvQic8u2V2BcVArAxx1eaSdmdNrgtCkAAu7qiAK%2BGyvV%2BtsS3lDVH9Hk5zA4Gp%2BUQ4D6aMt6hxcnY%2BXjCzGznHMZOn7P2JP8cAYuR4KPwiTzueCdkrQiU5iyD%2BIboWXgWcdwFHIxbI5A2A1%2F1KBENw36wQLph8yL9zrbRHqxRKiYT7SEbgG6TDJOZEHmgGOzByOGyHxNh1FU6FEoreaBcPtKUcgAYC6igMpRGoTW5T5L2iAOzg3QwfHSvPio0NJC7WIbcHgJ9w%2BQj51K6o2T9tjJQ2TrvvUa0zBpVwjk2jHgMzoD%2FFwWqKdKkJIz69xqZ6NEOcptyTq34UJZEQ4epxb%2BdlnMKaOz8QGOqUBNr347dYuQ0xL8nYJ8sRfMTfX7elfO6nVsv0vmTRvGvkezc5TZI2KC5n8fXQnK80d8WtK6NhyXdIJYx3aQUBadqezsTsPzUtQGURFrI6IglJHkNrF%2FxNyD4n6PxiCZappa3oubm1FOXwd%2F9aZ0N58tThkIXjwKHeldPSE9SUbrmE4bTkItIy8Fj2tNzB3FkckHYTNM8G3PtJPwHHqs%2BJ28b5bCaI4&X-Amz-Signature=83e5e253e72b60b17c8c28ba701daab3f48187cae62aad5385e44f3a9d6bd7ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFEVWUF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCUctZqHG1%2BSoCgD2zQYIBkk2%2FPuA3kQhfxsx62RSCkiwIgMlObMy1HS3MUMAwSwVnqb9ccrcTuCp99GyWXKgPhS1Eq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDPxKfS3z9mPHnG9OCrcA137fYHtYXikIWy5D%2BYr2B9zFZCP47jlExUk9yg901EMhRz0TLi8M3hMWev2HbgpHLsGB503z2HAYePtb%2B7lOVWy4HWK4gO3g%2B9fLfD1rKsgH1djFwIarj4D%2BgDcjXtdb8yY1KOmNM%2FoIqgAdCBcx5vWiT8vR5pmT0zero794gWke35aTGjTLzAlk%2FV0MlFhYWXjEpbtGCsryNluZ7Hu2oLIB2QpEjNpx%2B0BBr%2FiN4uvpZRC1PHWs9CI0g86UpKgZlPTeelC2FVvUfXFLjLeLc6EjqVpnabJN%2BvQic8u2V2BcVArAxx1eaSdmdNrgtCkAAu7qiAK%2BGyvV%2BtsS3lDVH9Hk5zA4Gp%2BUQ4D6aMt6hxcnY%2BXjCzGznHMZOn7P2JP8cAYuR4KPwiTzueCdkrQiU5iyD%2BIboWXgWcdwFHIxbI5A2A1%2F1KBENw36wQLph8yL9zrbRHqxRKiYT7SEbgG6TDJOZEHmgGOzByOGyHxNh1FU6FEoreaBcPtKUcgAYC6igMpRGoTW5T5L2iAOzg3QwfHSvPio0NJC7WIbcHgJ9w%2BQj51K6o2T9tjJQ2TrvvUa0zBpVwjk2jHgMzoD%2FFwWqKdKkJIz69xqZ6NEOcptyTq34UJZEQ4epxb%2BdlnMKaOz8QGOqUBNr347dYuQ0xL8nYJ8sRfMTfX7elfO6nVsv0vmTRvGvkezc5TZI2KC5n8fXQnK80d8WtK6NhyXdIJYx3aQUBadqezsTsPzUtQGURFrI6IglJHkNrF%2FxNyD4n6PxiCZappa3oubm1FOXwd%2F9aZ0N58tThkIXjwKHeldPSE9SUbrmE4bTkItIy8Fj2tNzB3FkckHYTNM8G3PtJPwHHqs%2BJ28b5bCaI4&X-Amz-Signature=6e7131cc568168d50b4139c49acf90e5d7b0f4a700f66f92d82d057cc4fb05ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFEVWUF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCUctZqHG1%2BSoCgD2zQYIBkk2%2FPuA3kQhfxsx62RSCkiwIgMlObMy1HS3MUMAwSwVnqb9ccrcTuCp99GyWXKgPhS1Eq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDPxKfS3z9mPHnG9OCrcA137fYHtYXikIWy5D%2BYr2B9zFZCP47jlExUk9yg901EMhRz0TLi8M3hMWev2HbgpHLsGB503z2HAYePtb%2B7lOVWy4HWK4gO3g%2B9fLfD1rKsgH1djFwIarj4D%2BgDcjXtdb8yY1KOmNM%2FoIqgAdCBcx5vWiT8vR5pmT0zero794gWke35aTGjTLzAlk%2FV0MlFhYWXjEpbtGCsryNluZ7Hu2oLIB2QpEjNpx%2B0BBr%2FiN4uvpZRC1PHWs9CI0g86UpKgZlPTeelC2FVvUfXFLjLeLc6EjqVpnabJN%2BvQic8u2V2BcVArAxx1eaSdmdNrgtCkAAu7qiAK%2BGyvV%2BtsS3lDVH9Hk5zA4Gp%2BUQ4D6aMt6hxcnY%2BXjCzGznHMZOn7P2JP8cAYuR4KPwiTzueCdkrQiU5iyD%2BIboWXgWcdwFHIxbI5A2A1%2F1KBENw36wQLph8yL9zrbRHqxRKiYT7SEbgG6TDJOZEHmgGOzByOGyHxNh1FU6FEoreaBcPtKUcgAYC6igMpRGoTW5T5L2iAOzg3QwfHSvPio0NJC7WIbcHgJ9w%2BQj51K6o2T9tjJQ2TrvvUa0zBpVwjk2jHgMzoD%2FFwWqKdKkJIz69xqZ6NEOcptyTq34UJZEQ4epxb%2BdlnMKaOz8QGOqUBNr347dYuQ0xL8nYJ8sRfMTfX7elfO6nVsv0vmTRvGvkezc5TZI2KC5n8fXQnK80d8WtK6NhyXdIJYx3aQUBadqezsTsPzUtQGURFrI6IglJHkNrF%2FxNyD4n6PxiCZappa3oubm1FOXwd%2F9aZ0N58tThkIXjwKHeldPSE9SUbrmE4bTkItIy8Fj2tNzB3FkckHYTNM8G3PtJPwHHqs%2BJ28b5bCaI4&X-Amz-Signature=e7f32d55cf5754d1833d46624585209e4cfc23be12c3aedd0bab091cc05c28de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFEVWUF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCUctZqHG1%2BSoCgD2zQYIBkk2%2FPuA3kQhfxsx62RSCkiwIgMlObMy1HS3MUMAwSwVnqb9ccrcTuCp99GyWXKgPhS1Eq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDPxKfS3z9mPHnG9OCrcA137fYHtYXikIWy5D%2BYr2B9zFZCP47jlExUk9yg901EMhRz0TLi8M3hMWev2HbgpHLsGB503z2HAYePtb%2B7lOVWy4HWK4gO3g%2B9fLfD1rKsgH1djFwIarj4D%2BgDcjXtdb8yY1KOmNM%2FoIqgAdCBcx5vWiT8vR5pmT0zero794gWke35aTGjTLzAlk%2FV0MlFhYWXjEpbtGCsryNluZ7Hu2oLIB2QpEjNpx%2B0BBr%2FiN4uvpZRC1PHWs9CI0g86UpKgZlPTeelC2FVvUfXFLjLeLc6EjqVpnabJN%2BvQic8u2V2BcVArAxx1eaSdmdNrgtCkAAu7qiAK%2BGyvV%2BtsS3lDVH9Hk5zA4Gp%2BUQ4D6aMt6hxcnY%2BXjCzGznHMZOn7P2JP8cAYuR4KPwiTzueCdkrQiU5iyD%2BIboWXgWcdwFHIxbI5A2A1%2F1KBENw36wQLph8yL9zrbRHqxRKiYT7SEbgG6TDJOZEHmgGOzByOGyHxNh1FU6FEoreaBcPtKUcgAYC6igMpRGoTW5T5L2iAOzg3QwfHSvPio0NJC7WIbcHgJ9w%2BQj51K6o2T9tjJQ2TrvvUa0zBpVwjk2jHgMzoD%2FFwWqKdKkJIz69xqZ6NEOcptyTq34UJZEQ4epxb%2BdlnMKaOz8QGOqUBNr347dYuQ0xL8nYJ8sRfMTfX7elfO6nVsv0vmTRvGvkezc5TZI2KC5n8fXQnK80d8WtK6NhyXdIJYx3aQUBadqezsTsPzUtQGURFrI6IglJHkNrF%2FxNyD4n6PxiCZappa3oubm1FOXwd%2F9aZ0N58tThkIXjwKHeldPSE9SUbrmE4bTkItIy8Fj2tNzB3FkckHYTNM8G3PtJPwHHqs%2BJ28b5bCaI4&X-Amz-Signature=5a0363b143568b6e7bf318421fc86fc70476149557a29f021132ec171405b4cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFEVWUF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCUctZqHG1%2BSoCgD2zQYIBkk2%2FPuA3kQhfxsx62RSCkiwIgMlObMy1HS3MUMAwSwVnqb9ccrcTuCp99GyWXKgPhS1Eq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDPxKfS3z9mPHnG9OCrcA137fYHtYXikIWy5D%2BYr2B9zFZCP47jlExUk9yg901EMhRz0TLi8M3hMWev2HbgpHLsGB503z2HAYePtb%2B7lOVWy4HWK4gO3g%2B9fLfD1rKsgH1djFwIarj4D%2BgDcjXtdb8yY1KOmNM%2FoIqgAdCBcx5vWiT8vR5pmT0zero794gWke35aTGjTLzAlk%2FV0MlFhYWXjEpbtGCsryNluZ7Hu2oLIB2QpEjNpx%2B0BBr%2FiN4uvpZRC1PHWs9CI0g86UpKgZlPTeelC2FVvUfXFLjLeLc6EjqVpnabJN%2BvQic8u2V2BcVArAxx1eaSdmdNrgtCkAAu7qiAK%2BGyvV%2BtsS3lDVH9Hk5zA4Gp%2BUQ4D6aMt6hxcnY%2BXjCzGznHMZOn7P2JP8cAYuR4KPwiTzueCdkrQiU5iyD%2BIboWXgWcdwFHIxbI5A2A1%2F1KBENw36wQLph8yL9zrbRHqxRKiYT7SEbgG6TDJOZEHmgGOzByOGyHxNh1FU6FEoreaBcPtKUcgAYC6igMpRGoTW5T5L2iAOzg3QwfHSvPio0NJC7WIbcHgJ9w%2BQj51K6o2T9tjJQ2TrvvUa0zBpVwjk2jHgMzoD%2FFwWqKdKkJIz69xqZ6NEOcptyTq34UJZEQ4epxb%2BdlnMKaOz8QGOqUBNr347dYuQ0xL8nYJ8sRfMTfX7elfO6nVsv0vmTRvGvkezc5TZI2KC5n8fXQnK80d8WtK6NhyXdIJYx3aQUBadqezsTsPzUtQGURFrI6IglJHkNrF%2FxNyD4n6PxiCZappa3oubm1FOXwd%2F9aZ0N58tThkIXjwKHeldPSE9SUbrmE4bTkItIy8Fj2tNzB3FkckHYTNM8G3PtJPwHHqs%2BJ28b5bCaI4&X-Amz-Signature=2ad58941b52f3975758dcc1737a459d31bb1e114288d282073b91afbea70415d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFEVWUF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCUctZqHG1%2BSoCgD2zQYIBkk2%2FPuA3kQhfxsx62RSCkiwIgMlObMy1HS3MUMAwSwVnqb9ccrcTuCp99GyWXKgPhS1Eq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDPxKfS3z9mPHnG9OCrcA137fYHtYXikIWy5D%2BYr2B9zFZCP47jlExUk9yg901EMhRz0TLi8M3hMWev2HbgpHLsGB503z2HAYePtb%2B7lOVWy4HWK4gO3g%2B9fLfD1rKsgH1djFwIarj4D%2BgDcjXtdb8yY1KOmNM%2FoIqgAdCBcx5vWiT8vR5pmT0zero794gWke35aTGjTLzAlk%2FV0MlFhYWXjEpbtGCsryNluZ7Hu2oLIB2QpEjNpx%2B0BBr%2FiN4uvpZRC1PHWs9CI0g86UpKgZlPTeelC2FVvUfXFLjLeLc6EjqVpnabJN%2BvQic8u2V2BcVArAxx1eaSdmdNrgtCkAAu7qiAK%2BGyvV%2BtsS3lDVH9Hk5zA4Gp%2BUQ4D6aMt6hxcnY%2BXjCzGznHMZOn7P2JP8cAYuR4KPwiTzueCdkrQiU5iyD%2BIboWXgWcdwFHIxbI5A2A1%2F1KBENw36wQLph8yL9zrbRHqxRKiYT7SEbgG6TDJOZEHmgGOzByOGyHxNh1FU6FEoreaBcPtKUcgAYC6igMpRGoTW5T5L2iAOzg3QwfHSvPio0NJC7WIbcHgJ9w%2BQj51K6o2T9tjJQ2TrvvUa0zBpVwjk2jHgMzoD%2FFwWqKdKkJIz69xqZ6NEOcptyTq34UJZEQ4epxb%2BdlnMKaOz8QGOqUBNr347dYuQ0xL8nYJ8sRfMTfX7elfO6nVsv0vmTRvGvkezc5TZI2KC5n8fXQnK80d8WtK6NhyXdIJYx3aQUBadqezsTsPzUtQGURFrI6IglJHkNrF%2FxNyD4n6PxiCZappa3oubm1FOXwd%2F9aZ0N58tThkIXjwKHeldPSE9SUbrmE4bTkItIy8Fj2tNzB3FkckHYTNM8G3PtJPwHHqs%2BJ28b5bCaI4&X-Amz-Signature=badfae5ade7f12931c78ac0354e83008aa1235e1f579d929bd339b618f24059b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFEVWUF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCUctZqHG1%2BSoCgD2zQYIBkk2%2FPuA3kQhfxsx62RSCkiwIgMlObMy1HS3MUMAwSwVnqb9ccrcTuCp99GyWXKgPhS1Eq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDPxKfS3z9mPHnG9OCrcA137fYHtYXikIWy5D%2BYr2B9zFZCP47jlExUk9yg901EMhRz0TLi8M3hMWev2HbgpHLsGB503z2HAYePtb%2B7lOVWy4HWK4gO3g%2B9fLfD1rKsgH1djFwIarj4D%2BgDcjXtdb8yY1KOmNM%2FoIqgAdCBcx5vWiT8vR5pmT0zero794gWke35aTGjTLzAlk%2FV0MlFhYWXjEpbtGCsryNluZ7Hu2oLIB2QpEjNpx%2B0BBr%2FiN4uvpZRC1PHWs9CI0g86UpKgZlPTeelC2FVvUfXFLjLeLc6EjqVpnabJN%2BvQic8u2V2BcVArAxx1eaSdmdNrgtCkAAu7qiAK%2BGyvV%2BtsS3lDVH9Hk5zA4Gp%2BUQ4D6aMt6hxcnY%2BXjCzGznHMZOn7P2JP8cAYuR4KPwiTzueCdkrQiU5iyD%2BIboWXgWcdwFHIxbI5A2A1%2F1KBENw36wQLph8yL9zrbRHqxRKiYT7SEbgG6TDJOZEHmgGOzByOGyHxNh1FU6FEoreaBcPtKUcgAYC6igMpRGoTW5T5L2iAOzg3QwfHSvPio0NJC7WIbcHgJ9w%2BQj51K6o2T9tjJQ2TrvvUa0zBpVwjk2jHgMzoD%2FFwWqKdKkJIz69xqZ6NEOcptyTq34UJZEQ4epxb%2BdlnMKaOz8QGOqUBNr347dYuQ0xL8nYJ8sRfMTfX7elfO6nVsv0vmTRvGvkezc5TZI2KC5n8fXQnK80d8WtK6NhyXdIJYx3aQUBadqezsTsPzUtQGURFrI6IglJHkNrF%2FxNyD4n6PxiCZappa3oubm1FOXwd%2F9aZ0N58tThkIXjwKHeldPSE9SUbrmE4bTkItIy8Fj2tNzB3FkckHYTNM8G3PtJPwHHqs%2BJ28b5bCaI4&X-Amz-Signature=b3e5686606db7b78a7c18c0c96a223ddb6a938fa22c788654b4b0fdd468cc4ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFEVWUF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCUctZqHG1%2BSoCgD2zQYIBkk2%2FPuA3kQhfxsx62RSCkiwIgMlObMy1HS3MUMAwSwVnqb9ccrcTuCp99GyWXKgPhS1Eq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDPxKfS3z9mPHnG9OCrcA137fYHtYXikIWy5D%2BYr2B9zFZCP47jlExUk9yg901EMhRz0TLi8M3hMWev2HbgpHLsGB503z2HAYePtb%2B7lOVWy4HWK4gO3g%2B9fLfD1rKsgH1djFwIarj4D%2BgDcjXtdb8yY1KOmNM%2FoIqgAdCBcx5vWiT8vR5pmT0zero794gWke35aTGjTLzAlk%2FV0MlFhYWXjEpbtGCsryNluZ7Hu2oLIB2QpEjNpx%2B0BBr%2FiN4uvpZRC1PHWs9CI0g86UpKgZlPTeelC2FVvUfXFLjLeLc6EjqVpnabJN%2BvQic8u2V2BcVArAxx1eaSdmdNrgtCkAAu7qiAK%2BGyvV%2BtsS3lDVH9Hk5zA4Gp%2BUQ4D6aMt6hxcnY%2BXjCzGznHMZOn7P2JP8cAYuR4KPwiTzueCdkrQiU5iyD%2BIboWXgWcdwFHIxbI5A2A1%2F1KBENw36wQLph8yL9zrbRHqxRKiYT7SEbgG6TDJOZEHmgGOzByOGyHxNh1FU6FEoreaBcPtKUcgAYC6igMpRGoTW5T5L2iAOzg3QwfHSvPio0NJC7WIbcHgJ9w%2BQj51K6o2T9tjJQ2TrvvUa0zBpVwjk2jHgMzoD%2FFwWqKdKkJIz69xqZ6NEOcptyTq34UJZEQ4epxb%2BdlnMKaOz8QGOqUBNr347dYuQ0xL8nYJ8sRfMTfX7elfO6nVsv0vmTRvGvkezc5TZI2KC5n8fXQnK80d8WtK6NhyXdIJYx3aQUBadqezsTsPzUtQGURFrI6IglJHkNrF%2FxNyD4n6PxiCZappa3oubm1FOXwd%2F9aZ0N58tThkIXjwKHeldPSE9SUbrmE4bTkItIy8Fj2tNzB3FkckHYTNM8G3PtJPwHHqs%2BJ28b5bCaI4&X-Amz-Signature=14c349d7d2d46e9d74b538580f5713fb5cfd9b953fb3df8e0eb147e672328e36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFEVWUF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCUctZqHG1%2BSoCgD2zQYIBkk2%2FPuA3kQhfxsx62RSCkiwIgMlObMy1HS3MUMAwSwVnqb9ccrcTuCp99GyWXKgPhS1Eq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDPxKfS3z9mPHnG9OCrcA137fYHtYXikIWy5D%2BYr2B9zFZCP47jlExUk9yg901EMhRz0TLi8M3hMWev2HbgpHLsGB503z2HAYePtb%2B7lOVWy4HWK4gO3g%2B9fLfD1rKsgH1djFwIarj4D%2BgDcjXtdb8yY1KOmNM%2FoIqgAdCBcx5vWiT8vR5pmT0zero794gWke35aTGjTLzAlk%2FV0MlFhYWXjEpbtGCsryNluZ7Hu2oLIB2QpEjNpx%2B0BBr%2FiN4uvpZRC1PHWs9CI0g86UpKgZlPTeelC2FVvUfXFLjLeLc6EjqVpnabJN%2BvQic8u2V2BcVArAxx1eaSdmdNrgtCkAAu7qiAK%2BGyvV%2BtsS3lDVH9Hk5zA4Gp%2BUQ4D6aMt6hxcnY%2BXjCzGznHMZOn7P2JP8cAYuR4KPwiTzueCdkrQiU5iyD%2BIboWXgWcdwFHIxbI5A2A1%2F1KBENw36wQLph8yL9zrbRHqxRKiYT7SEbgG6TDJOZEHmgGOzByOGyHxNh1FU6FEoreaBcPtKUcgAYC6igMpRGoTW5T5L2iAOzg3QwfHSvPio0NJC7WIbcHgJ9w%2BQj51K6o2T9tjJQ2TrvvUa0zBpVwjk2jHgMzoD%2FFwWqKdKkJIz69xqZ6NEOcptyTq34UJZEQ4epxb%2BdlnMKaOz8QGOqUBNr347dYuQ0xL8nYJ8sRfMTfX7elfO6nVsv0vmTRvGvkezc5TZI2KC5n8fXQnK80d8WtK6NhyXdIJYx3aQUBadqezsTsPzUtQGURFrI6IglJHkNrF%2FxNyD4n6PxiCZappa3oubm1FOXwd%2F9aZ0N58tThkIXjwKHeldPSE9SUbrmE4bTkItIy8Fj2tNzB3FkckHYTNM8G3PtJPwHHqs%2BJ28b5bCaI4&X-Amz-Signature=ac6669c922f8974c6b6f91b57b305c252927109d0631dd74eff75fc189351f42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PI5AONB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIEl759UMiKTb7Y9IDS6rNQ1Odka6Q957o5nFqau22lUgAiEAhBm6rJ6WlSDN6WKc6ebOCjl8uwk%2B4LJQQPRqCsY8OMMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFTHXUkJmM6cMu2fUSrcA%2B8qpnl5haw4zsM%2B2RJPzeM9ocrWF3tiNFAajmmswY%2FbQVTGyQ2vPaOIT1D6VPq%2F3lmexludrBhxky%2BbNW2sYRYKa3DH94HatANEeSLVO7ZDrBjIiDuTxCkgZsb1TBJbrt0iZJyvJxQJkMJ%2F55dRzIvSB4MUopwMFvRM496MFDGYsPGDh9t3capG%2FcLM3EnimFZ99eTSciT4DuVedwUTljOCFq4OjFXHdqpBZ5jcMc6EbegvA5N9%2Bd%2FvJP6mYMcx%2FSAccydnj6hiLhQXim5huI7pwuAX%2Fx%2FeNGiAqwoifeFgR3DClnSu3O3AlqGOeHftNiOTYOPf6DszjdHmYvG7xJ%2BpDcmEv7sBdST8ST5kFctGT0GLkM9z4axn1klu6kKB%2BrvCpM0c6H9dut%2BtwL9yPI9he1bCKtjT3Gn3FWKuBja37PqXOYdaJRtrmyCTZh5l0KXrmh2jY7v3nb7ebvJzVKCcztIBJQhtl7b9ccT9sNAvcIwu6rdnN3ijM8m6ig%2Bal1uTJ4Pyuorf%2FnOtoINnLMdeCmd1dZlQnCvDJDGN4WgHterexcXQsBu2btrKf9xV0wwGZ4fUPpXIEzzH4ZwESi%2F35VlQ7zs5udXuktYsuionj%2FfWuaIWmyuj%2Bf%2FfMKaOz8QGOqUB%2Bt6gaoh2UVokHIBdyhm7J6s2K0jk4HDsZaxgH4FSkycLDcNRKJLBY0Ha80ZDI2uTGhSJBAgvzJqFchwLv6Bk1YQlpzmrQGBgv%2BMcjESJAKqOkf1Lu812dF9G%2FUxtG0W42qmSchgm42DsQXdbegkAiCTovgeM5UKUcEDdJEQ4LKJKxNca5zoQ1ezgTKGq0gEKVSl6ZkwbJjnyMW45Z7Mxb4NpVP6K&X-Amz-Signature=b89cbf719c203af5a370081fb7e4182d78818222afc9f5cf8316a683f2f79ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6CBKUBC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDH%2FxVA%2B96bWhxgiBut6RDTNKPyaAduk7XLu2DNHForBAIgTgqw3c9Pqcv7vl7MrBbD4nObQMR4%2FxiRtn5vZDxejW0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHBg5efyOBkvGud7cSrcA%2F%2BozWEIlpLyJ1IQciZFFVBBWCk0d5oiX4pEeW3KeI1t1A6f%2BUToXQBraz%2FHyYGPVh43F%2BS%2F7kUY87cK3cEFds1Km6slgZAajkT0QM74Br8Uc%2BKdPuk77VnkzGL5J3FqbX3E3ylBHbpRgfJ3BxAz0LorwedGxwLyvIVxto3Cjry01lPpjRptGM00IxwiRuT2cHANjD2e%2FCTmbiB0sY4dRjin%2B0uB%2FK1ZPyxhku3mPvrcC18VtUXhEoWIhKioueyiMXwex5%2F1iLi1eB0IUllJ98JiqRy0X%2Bw5oly%2B%2FQP2mgccrOjjvTGncqwfdIieNrf%2FPIrn59swn%2B%2FDiZF%2Fy%2FL%2Fl1eVT6At8DQ%2BOEukquPDLnr4Ag2JftR0vjXf9F5YUIPuzgofYeZ0MffudTM81puxXBF0o3IlRjAvY4MweQKKakjdAtc5IPHPdxT5PTBxkPX2IuZbWoE8%2FzWw2XCuP5HugCgjkEMKBZDyJrODGxAn6evrZVZ%2BCMA8GyrKS1iQsg3ijAzRPzZcg4hvkdEfyzv1%2ByHvzpfJj8rHvjHZldyRRmanw7jx5RtPPdYR2E430IN0M1FPg6QB9mBzTFiZZgpNiBMFH3tOeX9%2F2QsJylm1QCfG8FMa%2FzUT%2BQ45kWv1MI%2BOz8QGOqUBFut0cgZVF0xia7YrozUu%2FZATYNtt8A09hiPREfFEooHNzJ2mNoyLLGPfGzembW00HBC2cdkBT2qxeb%2FktopqdEcjPtWY5NOYgzokKwD0qi4avsPLe3ceHJL5kZUSppOKkuXyKwqxWMev1TSRW%2Fl9UfQB9PSZbmRGo5mN4%2FmIoMMwEMQfjwQW4YcDTayrdeCL6tI3pmIvjkxNLKQtpzbNh%2B3KBlYw&X-Amz-Signature=2a91bff001e33eac332471f78e9027165cd1315c4c2ead3aa3d834a068731f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQD44AGH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQC75TUHTHwIpBo2vgnLTyOx7%2BhiRKANDWpgC1DGBCMgvgIgBi6pksk8pvi8mxSFrh5D4iv5AdcLPquK0kRqwOBkhYYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJtNPA3M3GVxIAkSyircA2j7HZp6GbRk%2FffBXIDijZtf4htNvlIKnYSawiBv7qHTL0e4zyG38sEmwOraoJaXwvYsn%2BUo2aId2poj7pD%2Bhs2gkp8HN8Q0nr9gLE%2FykKSX3V%2B%2BFpKS5u28seIYQCVeaT0m4EfWDv%2BmzkJ9mSd%2BPkpcSQcNSaKO0iIvGzMwgNTZH2ajDdrF%2F3wyKt6TciubM%2FL6QoEGdmn8eeMYXUzdE4cdKvIovHJk2A%2F8VLIYzl3uCxHXOtPaIxXwg5c1z9Qx7CBxT%2FjeCIbSg9gTyB%2BQ80pYVo9VlZMlRAhPUVFzc3rsn1vmkMNcgE1obhEgL3hsYnRa9pteDZ7qmVkswyUGv4cDnUILa%2FZBWvxEnRv19BeIyII8LP5WUHJvvKzfn3PImoZPLXOuiE95arORLR6ZIstWEnoUnAt3vm2y8V%2BgY0iZjpretfxMgqcMyEdne%2F8u1gKxFkHhWBSiVeq9JDJMvqYFxKMOavD2Q2n8X%2B5vZf7G2CDzsvayfqValiwI38QocbYa7BriOCxeIdoeVbCo7ac2Lj06cAVi7%2Flc0b9Fvc6NbLV0xWgT9ahOWi69L2nZ36OUoKbrInKmd2WLIRI3NyEGXaei%2B8OUljuxwnZl39JPp7HlcZkzW7%2FYqlC4MJuOz8QGOqUBapaj6Q7Acaa0UFnT0WVWNJ725o1fAlsDZ1zDLUDj3u0Nd6cMAgcud%2BtTZrTeZcZFX0%2BmkVylaaTJQbnOwZL5kcA14jHJjKujUJD6SQnlfA27ZIpUFK7Fmub6mcF930Bi2N5PxccIS1IIW0qM%2FvUAlAEMLiVZKB33pKhKgaDaGk31nEOK48YQKExDO%2BhZBIn7nDaFiP16uYxw0kCSMc7Vc9Qs%2FHfw&X-Amz-Signature=168970784d30cf0360bb77fad60b851acced756d82ffd51836e97271a3128d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFEVWUF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCUctZqHG1%2BSoCgD2zQYIBkk2%2FPuA3kQhfxsx62RSCkiwIgMlObMy1HS3MUMAwSwVnqb9ccrcTuCp99GyWXKgPhS1Eq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDPxKfS3z9mPHnG9OCrcA137fYHtYXikIWy5D%2BYr2B9zFZCP47jlExUk9yg901EMhRz0TLi8M3hMWev2HbgpHLsGB503z2HAYePtb%2B7lOVWy4HWK4gO3g%2B9fLfD1rKsgH1djFwIarj4D%2BgDcjXtdb8yY1KOmNM%2FoIqgAdCBcx5vWiT8vR5pmT0zero794gWke35aTGjTLzAlk%2FV0MlFhYWXjEpbtGCsryNluZ7Hu2oLIB2QpEjNpx%2B0BBr%2FiN4uvpZRC1PHWs9CI0g86UpKgZlPTeelC2FVvUfXFLjLeLc6EjqVpnabJN%2BvQic8u2V2BcVArAxx1eaSdmdNrgtCkAAu7qiAK%2BGyvV%2BtsS3lDVH9Hk5zA4Gp%2BUQ4D6aMt6hxcnY%2BXjCzGznHMZOn7P2JP8cAYuR4KPwiTzueCdkrQiU5iyD%2BIboWXgWcdwFHIxbI5A2A1%2F1KBENw36wQLph8yL9zrbRHqxRKiYT7SEbgG6TDJOZEHmgGOzByOGyHxNh1FU6FEoreaBcPtKUcgAYC6igMpRGoTW5T5L2iAOzg3QwfHSvPio0NJC7WIbcHgJ9w%2BQj51K6o2T9tjJQ2TrvvUa0zBpVwjk2jHgMzoD%2FFwWqKdKkJIz69xqZ6NEOcptyTq34UJZEQ4epxb%2BdlnMKaOz8QGOqUBNr347dYuQ0xL8nYJ8sRfMTfX7elfO6nVsv0vmTRvGvkezc5TZI2KC5n8fXQnK80d8WtK6NhyXdIJYx3aQUBadqezsTsPzUtQGURFrI6IglJHkNrF%2FxNyD4n6PxiCZappa3oubm1FOXwd%2F9aZ0N58tThkIXjwKHeldPSE9SUbrmE4bTkItIy8Fj2tNzB3FkckHYTNM8G3PtJPwHHqs%2BJ28b5bCaI4&X-Amz-Signature=867ff4a5c9e38e373cdbbcf441c7bb5b3668f194d622271491bfe8d5a4f5c619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJKK2EU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCeO3USQ5GgrJDJ3bmeaS%2BOkuFHQ5xNVMKVbSYPHf8RugIhANQmtNAsMXtoxGIDNpohqAZQ%2FaxkrTayAoO71ZFckCxGKv8DCH4QABoMNjM3NDIzMTgzODA1Igxg6DulFJnYK2Iw4UQq3APPO6q%2FLbLhGV7NnfwU%2B%2BsAngLfEx8%2BIW2GS61V6AfHOKvHpXZzu4EErrZuQlEUl1jnQ1047vPotVzPpr%2BFf6%2Fe2MRj0lnlZn3UcXEprt%2Fgz0BfJR9sRWNI3pBk6bBDExlbmxeLR42tXfTeExQicfxMf486xfwc7%2BWT%2FBF%2B%2Fl2zWbYNMGT2w%2Fndwf73nctnrwx6Fq70tuWq5QUUUB3HMCFuZTCnKEQj3g6vQHUJXo2FeDOBtlJ8R1HAyWQhYynn9dxP%2F9ckIn6o2JqnQFecnCDL28ZQX6xyTk%2BmkXpNrLBKSWp%2BYvwZGrTpudwN8b%2B5BxnXZuwSZUe%2BUfn1MtIm7xo2Uh0VoGJoc9B8fBr26YhV5uxOeyHm4VkkwglNUYKNd8FjXbh7xRHhX5lTSuGwBpHENb72VWDIuRrv3TgT51l9DpLK6y%2F3ZbsMD4JlcGQqm9%2FcMM3QIpoR89FCdtseBw6rJF%2FAu5I7GxXCYZg5Ew0qyGOptlrQdzgllZk%2Fyp1GJV1HAHv3vKPOg3rk4%2FhDPhXldUNwDhApRX%2FoufjoYTUwR0V3FfDMq06jItHtvtTDqFqkvyrIHMWaGzPJjvufvZ25KTACkrjh0VIkNPieJMU2B9qj7vpDTLzIF%2Fuh3jCljs%2FEBjqkAWc4Zeu1IVaQLXB%2FTD75FdHU%2Bf9mFtd8%2FmOQ5rwyfi9rbafgKouH6px5irMS5PdTP5emLouVohYQj1ia2cwAvMxzxkeUPg7X7zKHQutU%2FIB%2F0M1vsaqmnAmP1dAlwWCSkXcPrgEW0J%2FannBaApyrdvmHcVF5cur1ePv0z8rY7kQFI3EOZeANz%2Fxu1i0Uau4AfDk1LZRUVEVApk9EZU%2FE3ikDV9%2Bv&X-Amz-Signature=b51f73d861105535cc45b0d8d8c26d916f167c4f220e11ea0c6ae709f8d1534a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFEVWUF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCUctZqHG1%2BSoCgD2zQYIBkk2%2FPuA3kQhfxsx62RSCkiwIgMlObMy1HS3MUMAwSwVnqb9ccrcTuCp99GyWXKgPhS1Eq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDPxKfS3z9mPHnG9OCrcA137fYHtYXikIWy5D%2BYr2B9zFZCP47jlExUk9yg901EMhRz0TLi8M3hMWev2HbgpHLsGB503z2HAYePtb%2B7lOVWy4HWK4gO3g%2B9fLfD1rKsgH1djFwIarj4D%2BgDcjXtdb8yY1KOmNM%2FoIqgAdCBcx5vWiT8vR5pmT0zero794gWke35aTGjTLzAlk%2FV0MlFhYWXjEpbtGCsryNluZ7Hu2oLIB2QpEjNpx%2B0BBr%2FiN4uvpZRC1PHWs9CI0g86UpKgZlPTeelC2FVvUfXFLjLeLc6EjqVpnabJN%2BvQic8u2V2BcVArAxx1eaSdmdNrgtCkAAu7qiAK%2BGyvV%2BtsS3lDVH9Hk5zA4Gp%2BUQ4D6aMt6hxcnY%2BXjCzGznHMZOn7P2JP8cAYuR4KPwiTzueCdkrQiU5iyD%2BIboWXgWcdwFHIxbI5A2A1%2F1KBENw36wQLph8yL9zrbRHqxRKiYT7SEbgG6TDJOZEHmgGOzByOGyHxNh1FU6FEoreaBcPtKUcgAYC6igMpRGoTW5T5L2iAOzg3QwfHSvPio0NJC7WIbcHgJ9w%2BQj51K6o2T9tjJQ2TrvvUa0zBpVwjk2jHgMzoD%2FFwWqKdKkJIz69xqZ6NEOcptyTq34UJZEQ4epxb%2BdlnMKaOz8QGOqUBNr347dYuQ0xL8nYJ8sRfMTfX7elfO6nVsv0vmTRvGvkezc5TZI2KC5n8fXQnK80d8WtK6NhyXdIJYx3aQUBadqezsTsPzUtQGURFrI6IglJHkNrF%2FxNyD4n6PxiCZappa3oubm1FOXwd%2F9aZ0N58tThkIXjwKHeldPSE9SUbrmE4bTkItIy8Fj2tNzB3FkckHYTNM8G3PtJPwHHqs%2BJ28b5bCaI4&X-Amz-Signature=c4728f1bc4b5966aec30eb9da94475f1d8bab914b0527183a4fc026669e5fa0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U4FOBBI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD626qm9NEv45HiF6CxHzQaplA7YxTWppNAG9VjOOlhoQIgM2ZCQxmEJRNhJ9f5SxvRg%2F3jbHH1bP6mWhXJI%2B%2BtriMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNKGmdEB3bAvjftz7ircA4SlsI0aZp2vVdq0gLEGx4mjCIw%2FGgxDZ6E92iCDmQfUDs6%2B2TN3VNHW%2F8I5lKNwLKm7tey2vvRMkaK3IAoHtq2iL2hOWrBgvSlYMW6aAZuKpaXcYCMp8ZfV%2BhHp8CZNZDIiG8tC2qUOCIbrfTI3IcwbX8Fjebk4ks1C%2FuaMRsn1c91mFRrZ4HXmyi44njeDJtgHEMB04OZF0eMy9MTvhSh6kky5SfEPsfRycLvKcZoMQouwBMXbRlV%2FwnNCpqrHqZ5x%2FkikKww24ORUA4ggOdH30ueLfhMSkGaA42ibpfM4tbUdhRvH7mpaNDN9%2BJeNDK8AKmwOmYUaKK%2B7r%2Fhihhsm2l%2FnQwKWzM2OBiAmokTtogP3O%2FoaCSL6VSTCDV%2FoSL5gKXckICIBcbmWDkBRkSGBzFGakDif1K9Qb041IWgcUT%2Bt95eQeLut%2FQyxNgmgCniBxixihJJkfDOVkR%2FK0tFWyEZk9Sgex2vDfD64HnjYDBxfrEZ07SNvwM7QuDXqdT4WU7%2FgXHO5ADPbTKeWhG6taOSsvVf9GTd6TkvTLi3oN8WB3kKoq56Efjr2RUzRUiJ5avrH925s4H15o6QD4fjV0Qd9X%2BkqyqjgKOl7MkVXYuyKm6KkRZt3H3EpMLuOz8QGOqUBUlfNzqP1c05TQVF%2FBxmqONeuIu726MddlSUdN1Z45rnKCI65bN2XmfQqEkaefkQJeGLy83I6j68Vr4pPBB4TcaETtsk2zpTVNJ728res2%2FpBwuYwTtKliETcad9tE62kbPSe4CwXj1CSXRClSvB6GITJ09Y8ZlIO4DxbTuDyjpe50Tl7PQowHeqgUWvKioGd0V2ikTIFWzjbZ%2BecQ%2Fffo9Fb9SiZ&X-Amz-Signature=4d4927976c7e96e7a9aa64673e90ce2271730a85f58a97a08c740464c8c959d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFEVWUF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCUctZqHG1%2BSoCgD2zQYIBkk2%2FPuA3kQhfxsx62RSCkiwIgMlObMy1HS3MUMAwSwVnqb9ccrcTuCp99GyWXKgPhS1Eq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDPxKfS3z9mPHnG9OCrcA137fYHtYXikIWy5D%2BYr2B9zFZCP47jlExUk9yg901EMhRz0TLi8M3hMWev2HbgpHLsGB503z2HAYePtb%2B7lOVWy4HWK4gO3g%2B9fLfD1rKsgH1djFwIarj4D%2BgDcjXtdb8yY1KOmNM%2FoIqgAdCBcx5vWiT8vR5pmT0zero794gWke35aTGjTLzAlk%2FV0MlFhYWXjEpbtGCsryNluZ7Hu2oLIB2QpEjNpx%2B0BBr%2FiN4uvpZRC1PHWs9CI0g86UpKgZlPTeelC2FVvUfXFLjLeLc6EjqVpnabJN%2BvQic8u2V2BcVArAxx1eaSdmdNrgtCkAAu7qiAK%2BGyvV%2BtsS3lDVH9Hk5zA4Gp%2BUQ4D6aMt6hxcnY%2BXjCzGznHMZOn7P2JP8cAYuR4KPwiTzueCdkrQiU5iyD%2BIboWXgWcdwFHIxbI5A2A1%2F1KBENw36wQLph8yL9zrbRHqxRKiYT7SEbgG6TDJOZEHmgGOzByOGyHxNh1FU6FEoreaBcPtKUcgAYC6igMpRGoTW5T5L2iAOzg3QwfHSvPio0NJC7WIbcHgJ9w%2BQj51K6o2T9tjJQ2TrvvUa0zBpVwjk2jHgMzoD%2FFwWqKdKkJIz69xqZ6NEOcptyTq34UJZEQ4epxb%2BdlnMKaOz8QGOqUBNr347dYuQ0xL8nYJ8sRfMTfX7elfO6nVsv0vmTRvGvkezc5TZI2KC5n8fXQnK80d8WtK6NhyXdIJYx3aQUBadqezsTsPzUtQGURFrI6IglJHkNrF%2FxNyD4n6PxiCZappa3oubm1FOXwd%2F9aZ0N58tThkIXjwKHeldPSE9SUbrmE4bTkItIy8Fj2tNzB3FkckHYTNM8G3PtJPwHHqs%2BJ28b5bCaI4&X-Amz-Signature=2edbc74f45fc16bc66771de3266628c3847e44d89d5872cd8fa2af8587163a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPJH53U5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGUZsIrF4eWp%2Bkxjt2sE8DH%2BuJl72Hwkqf5ADKvqPaoWAiEA%2FK2jIbooo%2FfoyYjuIDpySLTtAI1IH76MzE8BUw8I2VEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDPVEfASTbIpeKYyntircAwHwXQXfTx%2Fzbuyf%2B461NJ7N4RQeAjWYxjF41VhqL9unAlpfS9BcALdLVVfg3pewS0Iuh8jPMF5njeMfBe5dM8cakL%2FYO86oGSpQpp%2FnLD6VX%2BspD59VU54kDbYRQCGbmfbHY%2FOshX6CX1%2BEs6UdV42%2FB6cN7iOJH5UyWp4pp2cfG3A1RtMDrstinBHHLQTI4qX3toZS5rV5HTD6idSpUFMg3YagWWxHAlKZ1r50TtCXf1q5ssPhbRTcpIX0jZ0RZFc%2Bz%2BQvIATCdBBuUzNqd9HLFAULYAx7WRT6TR4k5PcGSslT1%2BUV2TbEixbCCZ6MfEeu0RlR66eEP28fUlytvFOJuZLt2%2FWO66DNuwvWjGBD0inMxcpNe2XajXkn5vAMzJw9Dmlqn4J%2FtmJ%2FmtAhYKaw1x%2B%2Fx3YtVT6ET5HqcwWsVv%2BwF24dMrQ6onJ5%2BYbFCkFGwAqF5AV5Tb7VneKFbKxZDLzCrqa%2FDiRvfQVIPbP5AaEQkn6wYd%2Fl%2Ftkf3N%2FTyEr1ZJC7MMcryZm%2Bf45spCq6kMl3Dgp7ECy0NLvbq8jBOCStHlv%2B6SbgtkZu7MSRHWSFbUOmKLRU4wT5eaHWXIjlGE888qDn7r5DRmInATZO8%2BMpMz5R%2FLQMAEmYMK2Oz8QGOqUBpP6QzSkwbM6U2uHsIczlz%2FPMuXmNWI18i1pMkr%2Fc8jo9q3bfjhvPWdFNKyHRfV93I1q4Gpq73dQzyXLyt0RkaFR95MmGycRYt5ojMoVUF9%2F9MSoFz4%2FLpK6drAfW4jSKQaZTbytVUkowg%2FiYOaX4bctUwyS4LP0sumHvs83s1CM54NNowsJ8RrJHx%2FRW6MNHmu0xG6AzhYF5zG94grnXwXUmP636&X-Amz-Signature=17463efc60602fccf8a1baaaa48061dce18ba19b62845b48c3dfb980737112be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFEVWUF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCUctZqHG1%2BSoCgD2zQYIBkk2%2FPuA3kQhfxsx62RSCkiwIgMlObMy1HS3MUMAwSwVnqb9ccrcTuCp99GyWXKgPhS1Eq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDPxKfS3z9mPHnG9OCrcA137fYHtYXikIWy5D%2BYr2B9zFZCP47jlExUk9yg901EMhRz0TLi8M3hMWev2HbgpHLsGB503z2HAYePtb%2B7lOVWy4HWK4gO3g%2B9fLfD1rKsgH1djFwIarj4D%2BgDcjXtdb8yY1KOmNM%2FoIqgAdCBcx5vWiT8vR5pmT0zero794gWke35aTGjTLzAlk%2FV0MlFhYWXjEpbtGCsryNluZ7Hu2oLIB2QpEjNpx%2B0BBr%2FiN4uvpZRC1PHWs9CI0g86UpKgZlPTeelC2FVvUfXFLjLeLc6EjqVpnabJN%2BvQic8u2V2BcVArAxx1eaSdmdNrgtCkAAu7qiAK%2BGyvV%2BtsS3lDVH9Hk5zA4Gp%2BUQ4D6aMt6hxcnY%2BXjCzGznHMZOn7P2JP8cAYuR4KPwiTzueCdkrQiU5iyD%2BIboWXgWcdwFHIxbI5A2A1%2F1KBENw36wQLph8yL9zrbRHqxRKiYT7SEbgG6TDJOZEHmgGOzByOGyHxNh1FU6FEoreaBcPtKUcgAYC6igMpRGoTW5T5L2iAOzg3QwfHSvPio0NJC7WIbcHgJ9w%2BQj51K6o2T9tjJQ2TrvvUa0zBpVwjk2jHgMzoD%2FFwWqKdKkJIz69xqZ6NEOcptyTq34UJZEQ4epxb%2BdlnMKaOz8QGOqUBNr347dYuQ0xL8nYJ8sRfMTfX7elfO6nVsv0vmTRvGvkezc5TZI2KC5n8fXQnK80d8WtK6NhyXdIJYx3aQUBadqezsTsPzUtQGURFrI6IglJHkNrF%2FxNyD4n6PxiCZappa3oubm1FOXwd%2F9aZ0N58tThkIXjwKHeldPSE9SUbrmE4bTkItIy8Fj2tNzB3FkckHYTNM8G3PtJPwHHqs%2BJ28b5bCaI4&X-Amz-Signature=b4bc249921198b5d12878a3bec86373954e74405cabbf345a6adb099b5d7572f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDFSIAZ3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDGgmJpk6pS%2FNWwxpui%2FxRyZ%2Bhf9L%2BxTT5qbt93G4qQ8gIgEmBfq4lljflK5a1fuYcgSKWEnkPPLOyR8LwHX4vOEtkq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEdZdhcm7mPIlF%2F%2FICrcA0zAII1OFI2XtROYft2jQ3mDiXi8%2Bb3HhXMez4OethzqJtKPr2kV457LWX9gWpdqPaB1cl9rvtPZh%2BmGnsC0wi053eLbqD1Ka5O2C30uKxGj7%2BAfq%2B%2FzT6uoAaqOY8KHs1dM2uo7G8UXZTfcvj50V024nbw6Ea9%2B64izuo3f24tr4qlmX6WnxKLEdHFjwIZWeDQPZm6cB5oL%2FvuQoTxbPk49iVpoTpSOu4%2FGeIIscuAqNElNEcIMImDSsreqvRH13eAav%2FQ5J9P3FPcXEfwiIE2gPouoJzCK0lU0jPIge5%2FEhQs2CeTqlmzO0Gh16MbvWca42ik%2B9UCLh9um222NCbSQJ5Hc2zXYsW%2B8nHNKT3G8vAMGIbP6t5eTprooqi43JOTjN9oHit9XBJMuuwWDu9ZPRlZK3L2jUZmC%2FVkPjU%2BEtFNC%2Ba8NITuNxrmnwDiw%2Bno6LORolc%2B%2BrySc6VD7mT3PMLGGVUtR2ky22VAhaAM%2B%2BZe5EXOR6tm16EKcJmkYfnjFzMwsg5XA3QxhKopjU5jkJokMUfZzr4RrULxZ0uo3exRIGp4bq4qcwUogAR%2BI6PaiwtTsMCDPbShfbFKypra0MRnQv0qDOtJ2C4eoYqF1CcbCVqeguaus234XMJuOz8QGOqUBp%2FUMDiuaLCN5%2BDsWjGCVCnt4YhCN7cLyKWVU5DMYaZ%2BniaSs2kbT2H74ASebS0gYLjqPKaAXK8shAjbxD%2F%2BoESN3cRhkZGM7hzBWzYotfF%2Bsy1iEEMqp%2BVQzJMAozwajJKfMUp3zbfcw0QhBDvUreoAfDkGWmdM5skIxJdGB3mYX2pT2hmZEXWwhwjEruSIR0K1FSxX7qEUsuwJWMmrbaVWmMCHw&X-Amz-Signature=d44da3cd2c00d1ee2153eeffe0fa675b1b9eb60bd9216d1f4076432353a30520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3GTIYH3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCyTv%2BfvCAMRoDinxJRC1dz3GhJfnNLJC2we6EGimnIQgIgAKk3%2FF6mevvkJK1NzPHPWeMUCsqV4vCwjRR83OrFHpQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHmenhbvkmiihnhGpCrcA%2BMBlwfA0goBoQL7UTtQ%2FaKOfdSGfrDu%2FcEkHBblKNbvV%2B55UhDZbUWNBqQkm39F%2FESJ4yQJ32ag7B2SaZAyZL9vMrIjdffSK3M4ndu46%2FBcxw4%2FIYfFiUSmnyw1ypaS5l4kasiJEcTdWft1pYyNUjKspzMluH5%2BemFluO2qKyVdakuCizIavcfk7jAsQKC5js09KrlXrm7KFs8qNG1FiTM8TrE%2BXRDfiLXnt7FxkoEghQZ34LqTRFjVGoeyQ1PMsJveIUjZ5NQmL5jknqOk2JKnH12BBk%2FgpnOu3tbV9Rbx4OWm2ea7c4mB89h63mdiNyKyDiiybZzDVik8oT1ZBJSyEAjBj66JPVv2XPAjjJ0Pf61ZlI7ZG0CJprIaAzifKyOfM9qlIgCAQqKT%2BIMKIupHRA7hsdZIPP2tJ9tavasmX%2FOff0SQUd9PnroPFzrTl10ItdvXuoj2tav2AD4LeumYRibV6J5odidNSfCgjqoHtmL69zD3%2BP0OyY8mNF12nzxhA%2Bu6E%2FUJFqvMqs8ho4Pw%2FA1cFYHNhl5193qBkcrKPwVnhyENX20M347fxFoBZ1nJC7Swt2fO0CLFzVA1yGMLMS5IbzKRnBsa0406X%2BsijyygFZdV6QegDKhlMPSOz8QGOqUBVZ0FnwxNVRjDNoMz0yQYH6AkQwFpVOEdVJEssbTuCpFtHhzTPEQcfavXPYektTYdvDY3BsAgYmE5ewf1k%2BEKos9Ty%2Bt%2FQGkGesFq7hlwiCo%2Bx8ufCgoXY4aB092T5%2B9%2FoJ%2Bg05BgWQY0DnFUPqwY9v25DIb1EgufnxUn2%2FBd2Usikbhss%2BM5oRySOVM2zSEzWrsLJAxS%2FJVg93k2ZfDD5ztEjJ%2F1&X-Amz-Signature=a6367d8f5112e0e60debdb1852270a6c5beaec789f58b1e361f291bf0d382abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5WUK7XA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIFO2lFVjIUML7IGMWLpAoOFNAaUyFbRRR%2FKJ%2BZNvQwlFAiEA18hhCU5JeYdX4BvbR9PX4LDx%2BC1hxAyhUNGiQ0Zg%2BRQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHVz%2F0C3BODpmXagNSrcA3Qlv9DBbYed2acZByiZ0eR580NIPP7UnM%2B1heZOtCe3zcHDiipF7OZ0wu3M59Ykko6UtMH7HripBrKFp9mxk9cY7wleqbz5klGSEFbvEf2DFLOv2F9qOawSOdQw6ssrep3VtlGZWUwuu8uIMOPVSqRAj3rQkHDqf0a%2BMJANtBX6ZBzxMyOMe0JaeF74hkdQi%2FblHslMGVwA3c3A1l4GHCvRn%2B6kOb4EYR7ULfW0clVW1pJ9%2BnxDGaZWkt0hdKrPHoykH%2FHeQoyyW99DGdIja0H0Gesxy7JkAlb15xmXYJx75ndFhLWrHbUMQUx7faizl%2FZvCyrNFlu1eyiMm1ISw%2FMYHmksEsjIDmhLPoDYyGquQAHHCiJ24uxakxBIeg8r9UN38yDKucYH9L8Gq6l3CAXMO8WUnSFPmc7TikPOQZbdLhauAxL3OwF0ed3%2B9wetrlW%2BmcAzEzuIrqLIx5R3kdG0vAyzad7TLscVLQIcWeac1%2BCWvmuSpA6EqMfi0W%2B5gXdgbua2904J3TBC9U6AbINCU4j%2FK2%2Be2y2bNFaz18lehcCQGYVA10s1zbU5YlSZEC5djN8eYaro%2F0JwjrLyEAiTa3kxx9VqsRwt%2BHFpWnWuAXgf4S5pmEr454WlMOGOz8QGOqUBhL4EqoKg4ZbzFMZtIi%2FxuAE9N1oOeabAbxSlZ74qrl7Qj9yJw8NwqHTb%2Fx4xfiGpbDQCRBdNf4TPF0igiu4Ei8tSbJwjHY%2BupXKuHT4iNkJnnpMtzjghg74ThP9GYZERLHOkffSWwi%2FytzUa%2BQOwg%2B04fYiML5vRjKAU%2FY3eNEKhuZdgc6omE%2FxRTKAIjWThxyUw6RRxisON8kopyjc1tJetRoxP&X-Amz-Signature=3a66a5785a2174f031264c000553b18321f9f9162322cb461f4cf644228ec735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7SML24H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIAtMS0okt3xOOmuBe%2Bjwp22tYBPGhs9MIWmfO58RRmQSAiEAzn%2FnuUKVpF1XyGjJM1X96%2B%2B6lRBmfpyv0EkmAHiyg8Eq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKS%2Bhu40ndbIEorFPyrcA96iEfeHKrrCBxSTyTIj67MofU10euF5hQHNtppr9a0n0HBh0CYNi29hMzfjpdaXgqe81y0vFs5Ci68wg%2BjqTxLp72Z3Sp6Z8bnUzBWfITvt7G3qMfBq4mDh3R6Rf1D%2Ba%2F2q2wR58IaTOc2rWnSPHAXNF4cmht3L1RPX6aiGRXnC3TJZlXIm96N%2F4PsM0BKBb%2B0dsizqV6unQCKWzD0N7kUQpUz9vl8sOItldNC%2BC3J9YoeLspWL9Ctc6cnCzKsdD9Dj1lIYJNwVUdWcQCiT9esoNAYkRCQL8A0S0%2F1tMNl1d5uy1VDxYrtJSfBbZ6hGqLUmpjTwKjjYoEERWO%2FZMxMjtkVMOBP6GXXCOOmVUOkzSo3UP9c9mmE3anm9YG7WbkaZVlimclOc%2FRUVqiCeL%2B4JXO3XNvGI5zjjGnzfGUfmwICwgmui5wUdCDdG505u1KSspt409m9jqtPKsKPVvZ9%2BNCzUydR418ZSrysijjOKBm5VFLSiQnSyLV4ByCEuDVKng%2Fx92wI7Ntw1RsYBmByE0W%2BhDhzdhFs70TWrplBRBjj5g39QORB46nWDCPErdlzshFzOAS9sJ%2FNhBSjL2v%2F7Ulhl8EHBW03F2lN7kIXQPyzIFN%2F%2FTrz4ha7KMJGOz8QGOqUBVLK9P5LEZaGW18%2FdFLwVDccwPcm8cNeWvJtaSqU5bb2UZxMOyXkz0Sauxh%2FbxR6y39XRc0yVQwphJ0X8V71bPOolLUxjs7WXJDJr4VUYs6b7KmZgTnOTK453Mze3E7JGeE3pQ7lktKj2Ure1yaa0kEG6hey2Z4xKOK9xXdA3c4DQQCJ%2BrPhG6IqPsyaK3EdVloHe%2BDg2VOOhwAS80t4G5YU2Bm96&X-Amz-Signature=9ffaa443ef4b5f8c3b7e15eb386e542b892c32825f2690e74d72d66d2935ac63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ZNHXGA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIGeKyAs1OMANJ0jvhaK749wkOmKd7GJbNHL1Z4AAt%2BolAiASZ3M1%2B3NNwcuczBj2KUIunZNVxnsTAugBmi9HGhoqaCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMisi5snH%2FylIJujguKtwDUS0SzJcdeEVhMr1VRuxORvzaj1CDmkaIWb5a9NYGMYxoVeQVVr%2B3DZxKCbolBoIvrGtNp7qmFmotUxi7ImXVgUT1PkeY3N4aFxY5Opo%2FDFIjX6fiymw951Jfg1jEF2cLz4rd35B0yCWeNbCIKRanf4HQR1D3F6C%2BxDePAyPfviSR3QBe9yQNHRCjSxFpTMIAzovZSRUnvT2KGub5EadN68%2FI%2BaYW4X9HYTtCEV8CgfS1T3X7gcBbtvOwLKvcR6PSfwK2DCkX0C3UxQhvisgdEg%2Bl6HMURSmjVPb2cR6HQPhHga0GQ25aQv%2FwXWkBgAJ6z%2BjYYKNj0E8DwzPvdMokU7CfLEkoCIhKm%2BtvlM29jw0X9lCzC67%2FdwwbhMFG7hAOoa1s0U6nnL4%2B9O2wENmHFFs1YjaLnyDZOOtmwZ6sDx3t2ZlIJ%2FmM3CF6VLnoygIO5LRjSs8yPJzLFYV%2BxUQeERQBspQHuA6vpQDp%2F42jRa0NAk2UhFhTN13hy7v7tkpge7%2FeHomDm0lPenideHnmqeB8jvhzcRX%2BH67JI%2BCq1iQqH%2FIj6xNEeEyoDvT26k8IPeS5O7SuieIauCiAQQ26crXh1%2F2NeJdtAYXLW%2BWuJblUkvAq2bDa7aWfcG8w347PxAY6pgHZUaKC7arXGwI079vPr5AkA9LiaDd2bisk7JEFHb8qpFvQcP%2BGDscHA6ihQKPJRq3bUEqIr%2BO0i68JoYaF9R3oQZrUbMcOtsqfIzy3QNjhgTvGK03WbfRs9amoxwPHAt4AU1y3cQjvAGvpKnm%2ByLpLlRUHO%2BisJK06RLyTr6xNJy529KShpT68NsafiyfiJgokz713qXvynyT5kzy5dcU0AWc6HBHm&X-Amz-Signature=6b9202fb3640bebce5b1655b1f74b55cf04649322a792b0c15f4438271b00a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFEVWUF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCUctZqHG1%2BSoCgD2zQYIBkk2%2FPuA3kQhfxsx62RSCkiwIgMlObMy1HS3MUMAwSwVnqb9ccrcTuCp99GyWXKgPhS1Eq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDPxKfS3z9mPHnG9OCrcA137fYHtYXikIWy5D%2BYr2B9zFZCP47jlExUk9yg901EMhRz0TLi8M3hMWev2HbgpHLsGB503z2HAYePtb%2B7lOVWy4HWK4gO3g%2B9fLfD1rKsgH1djFwIarj4D%2BgDcjXtdb8yY1KOmNM%2FoIqgAdCBcx5vWiT8vR5pmT0zero794gWke35aTGjTLzAlk%2FV0MlFhYWXjEpbtGCsryNluZ7Hu2oLIB2QpEjNpx%2B0BBr%2FiN4uvpZRC1PHWs9CI0g86UpKgZlPTeelC2FVvUfXFLjLeLc6EjqVpnabJN%2BvQic8u2V2BcVArAxx1eaSdmdNrgtCkAAu7qiAK%2BGyvV%2BtsS3lDVH9Hk5zA4Gp%2BUQ4D6aMt6hxcnY%2BXjCzGznHMZOn7P2JP8cAYuR4KPwiTzueCdkrQiU5iyD%2BIboWXgWcdwFHIxbI5A2A1%2F1KBENw36wQLph8yL9zrbRHqxRKiYT7SEbgG6TDJOZEHmgGOzByOGyHxNh1FU6FEoreaBcPtKUcgAYC6igMpRGoTW5T5L2iAOzg3QwfHSvPio0NJC7WIbcHgJ9w%2BQj51K6o2T9tjJQ2TrvvUa0zBpVwjk2jHgMzoD%2FFwWqKdKkJIz69xqZ6NEOcptyTq34UJZEQ4epxb%2BdlnMKaOz8QGOqUBNr347dYuQ0xL8nYJ8sRfMTfX7elfO6nVsv0vmTRvGvkezc5TZI2KC5n8fXQnK80d8WtK6NhyXdIJYx3aQUBadqezsTsPzUtQGURFrI6IglJHkNrF%2FxNyD4n6PxiCZappa3oubm1FOXwd%2F9aZ0N58tThkIXjwKHeldPSE9SUbrmE4bTkItIy8Fj2tNzB3FkckHYTNM8G3PtJPwHHqs%2BJ28b5bCaI4&X-Amz-Signature=04db3f0e4e4b4e6fc144632ae58285566aaa44885034ba9a927891fb41c9fef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFEVWUF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCUctZqHG1%2BSoCgD2zQYIBkk2%2FPuA3kQhfxsx62RSCkiwIgMlObMy1HS3MUMAwSwVnqb9ccrcTuCp99GyWXKgPhS1Eq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDPxKfS3z9mPHnG9OCrcA137fYHtYXikIWy5D%2BYr2B9zFZCP47jlExUk9yg901EMhRz0TLi8M3hMWev2HbgpHLsGB503z2HAYePtb%2B7lOVWy4HWK4gO3g%2B9fLfD1rKsgH1djFwIarj4D%2BgDcjXtdb8yY1KOmNM%2FoIqgAdCBcx5vWiT8vR5pmT0zero794gWke35aTGjTLzAlk%2FV0MlFhYWXjEpbtGCsryNluZ7Hu2oLIB2QpEjNpx%2B0BBr%2FiN4uvpZRC1PHWs9CI0g86UpKgZlPTeelC2FVvUfXFLjLeLc6EjqVpnabJN%2BvQic8u2V2BcVArAxx1eaSdmdNrgtCkAAu7qiAK%2BGyvV%2BtsS3lDVH9Hk5zA4Gp%2BUQ4D6aMt6hxcnY%2BXjCzGznHMZOn7P2JP8cAYuR4KPwiTzueCdkrQiU5iyD%2BIboWXgWcdwFHIxbI5A2A1%2F1KBENw36wQLph8yL9zrbRHqxRKiYT7SEbgG6TDJOZEHmgGOzByOGyHxNh1FU6FEoreaBcPtKUcgAYC6igMpRGoTW5T5L2iAOzg3QwfHSvPio0NJC7WIbcHgJ9w%2BQj51K6o2T9tjJQ2TrvvUa0zBpVwjk2jHgMzoD%2FFwWqKdKkJIz69xqZ6NEOcptyTq34UJZEQ4epxb%2BdlnMKaOz8QGOqUBNr347dYuQ0xL8nYJ8sRfMTfX7elfO6nVsv0vmTRvGvkezc5TZI2KC5n8fXQnK80d8WtK6NhyXdIJYx3aQUBadqezsTsPzUtQGURFrI6IglJHkNrF%2FxNyD4n6PxiCZappa3oubm1FOXwd%2F9aZ0N58tThkIXjwKHeldPSE9SUbrmE4bTkItIy8Fj2tNzB3FkckHYTNM8G3PtJPwHHqs%2BJ28b5bCaI4&X-Amz-Signature=6a7909530eeb62877fc2708cba5e7f3ce261e46406fb428c81a9bcecbce6be37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQVJEJY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIFJCPuxofT9sNLrlgXGTiIGX5%2BMSXYWO9hgxbWYIuiHbAiEAmwgMGuR8m3M7iPrKgel7amiJODu5b53pTSoixbVs56Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNJG%2BNnXYjNOInWXQyrcA5bioMtfVfI4RmNB5fD3HqIpEtLSJDwJsgg75ARzrWXyOWXTdNR0ISnmP9t%2F7P760XhOgsiQEJKKP7JEpwfGm%2BmwTuPSuqxqpE%2BqnINWgxuciuRVBcpv1TSlYfifcE3x3jdSjeMqwfmpOXNtOTCaT%2F%2FS1DkRyr%2FphxiEHtClUJYJcbaoH2pltf2a8Ex9gO7%2FEtgsV5HXyx3HIA4WjPT5ZU8Z2L4H1PP2nA51TJqfRQJDwT6Z1TCxoD4hd%2FsY4fyN3OczKbkkKSySKwnpwutKv8A9ZSa%2FtlTNDNLwaq6tDkp97cihv9N%2FHzZCn9psuXVjzwl7LYgHh6DNCmA2VBy87EwlhppwtjRoIrSbvbdOJhZMREAFmJoaeJRlU1P81NwgnS8VdZHiX15Eh%2B0vSUY8fDpcaCMOHbNkXZdEVKSM9sI1BNUwS0MFgweDrVrEXu1vev07r988fLVQqWhi%2FF8dKaWGaQLOIXIO5mB%2BMeBwoeoEribd8s6gLbk%2F6HiRkyLZFzjlXFy8Yc1wTwGByM3SvOFLeU81fpO9UTU04ZnuH8tL%2FejTifdwHb991kBNJdfL1Nk3C1xmCPHyyMT9EURc%2FpmLWKeViThD9TFjnwswBb3wzHHo1y8rm%2FVu9IO8MOCOz8QGOqUBBRbuQnu%2F%2BwDVMMUtEhFyRFtrLIuxIFgMBYaNgo5OCNq%2FBGVhtL7srXQ%2BSr%2BxJk8Y4b0hOfH1TMXjQ%2BfGBXBKNuYi8nkO02pKJ3nZrQqUqCLfe4rIHMq0PCaf3rR%2F9Y5HuhQcCCV8YjLQFPBi0%2Beq6FwWWHilHNiVftcIudBRpSzpa%2FyCXOIHh0%2BGmnzj5ppSdH0A421lpvXFY33mx195SSWB44C9&X-Amz-Signature=0cf612f9782a81e37b236adac9cd6b2f87cf6467d27a59afdac8610b4b5b7d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQVJEJY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIFJCPuxofT9sNLrlgXGTiIGX5%2BMSXYWO9hgxbWYIuiHbAiEAmwgMGuR8m3M7iPrKgel7amiJODu5b53pTSoixbVs56Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNJG%2BNnXYjNOInWXQyrcA5bioMtfVfI4RmNB5fD3HqIpEtLSJDwJsgg75ARzrWXyOWXTdNR0ISnmP9t%2F7P760XhOgsiQEJKKP7JEpwfGm%2BmwTuPSuqxqpE%2BqnINWgxuciuRVBcpv1TSlYfifcE3x3jdSjeMqwfmpOXNtOTCaT%2F%2FS1DkRyr%2FphxiEHtClUJYJcbaoH2pltf2a8Ex9gO7%2FEtgsV5HXyx3HIA4WjPT5ZU8Z2L4H1PP2nA51TJqfRQJDwT6Z1TCxoD4hd%2FsY4fyN3OczKbkkKSySKwnpwutKv8A9ZSa%2FtlTNDNLwaq6tDkp97cihv9N%2FHzZCn9psuXVjzwl7LYgHh6DNCmA2VBy87EwlhppwtjRoIrSbvbdOJhZMREAFmJoaeJRlU1P81NwgnS8VdZHiX15Eh%2B0vSUY8fDpcaCMOHbNkXZdEVKSM9sI1BNUwS0MFgweDrVrEXu1vev07r988fLVQqWhi%2FF8dKaWGaQLOIXIO5mB%2BMeBwoeoEribd8s6gLbk%2F6HiRkyLZFzjlXFy8Yc1wTwGByM3SvOFLeU81fpO9UTU04ZnuH8tL%2FejTifdwHb991kBNJdfL1Nk3C1xmCPHyyMT9EURc%2FpmLWKeViThD9TFjnwswBb3wzHHo1y8rm%2FVu9IO8MOCOz8QGOqUBBRbuQnu%2F%2BwDVMMUtEhFyRFtrLIuxIFgMBYaNgo5OCNq%2FBGVhtL7srXQ%2BSr%2BxJk8Y4b0hOfH1TMXjQ%2BfGBXBKNuYi8nkO02pKJ3nZrQqUqCLfe4rIHMq0PCaf3rR%2F9Y5HuhQcCCV8YjLQFPBi0%2Beq6FwWWHilHNiVftcIudBRpSzpa%2FyCXOIHh0%2BGmnzj5ppSdH0A421lpvXFY33mx195SSWB44C9&X-Amz-Signature=94ee0501a2636d71ec74514b41168b653c38921094cf912a7010254d3e952a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQVJEJY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIFJCPuxofT9sNLrlgXGTiIGX5%2BMSXYWO9hgxbWYIuiHbAiEAmwgMGuR8m3M7iPrKgel7amiJODu5b53pTSoixbVs56Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNJG%2BNnXYjNOInWXQyrcA5bioMtfVfI4RmNB5fD3HqIpEtLSJDwJsgg75ARzrWXyOWXTdNR0ISnmP9t%2F7P760XhOgsiQEJKKP7JEpwfGm%2BmwTuPSuqxqpE%2BqnINWgxuciuRVBcpv1TSlYfifcE3x3jdSjeMqwfmpOXNtOTCaT%2F%2FS1DkRyr%2FphxiEHtClUJYJcbaoH2pltf2a8Ex9gO7%2FEtgsV5HXyx3HIA4WjPT5ZU8Z2L4H1PP2nA51TJqfRQJDwT6Z1TCxoD4hd%2FsY4fyN3OczKbkkKSySKwnpwutKv8A9ZSa%2FtlTNDNLwaq6tDkp97cihv9N%2FHzZCn9psuXVjzwl7LYgHh6DNCmA2VBy87EwlhppwtjRoIrSbvbdOJhZMREAFmJoaeJRlU1P81NwgnS8VdZHiX15Eh%2B0vSUY8fDpcaCMOHbNkXZdEVKSM9sI1BNUwS0MFgweDrVrEXu1vev07r988fLVQqWhi%2FF8dKaWGaQLOIXIO5mB%2BMeBwoeoEribd8s6gLbk%2F6HiRkyLZFzjlXFy8Yc1wTwGByM3SvOFLeU81fpO9UTU04ZnuH8tL%2FejTifdwHb991kBNJdfL1Nk3C1xmCPHyyMT9EURc%2FpmLWKeViThD9TFjnwswBb3wzHHo1y8rm%2FVu9IO8MOCOz8QGOqUBBRbuQnu%2F%2BwDVMMUtEhFyRFtrLIuxIFgMBYaNgo5OCNq%2FBGVhtL7srXQ%2BSr%2BxJk8Y4b0hOfH1TMXjQ%2BfGBXBKNuYi8nkO02pKJ3nZrQqUqCLfe4rIHMq0PCaf3rR%2F9Y5HuhQcCCV8YjLQFPBi0%2Beq6FwWWHilHNiVftcIudBRpSzpa%2FyCXOIHh0%2BGmnzj5ppSdH0A421lpvXFY33mx195SSWB44C9&X-Amz-Signature=0e404ba6fdd86bd0ff77a05b8a8fa44eb3cefa3e067eaf1e2d81502d053b865c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQVJEJY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIFJCPuxofT9sNLrlgXGTiIGX5%2BMSXYWO9hgxbWYIuiHbAiEAmwgMGuR8m3M7iPrKgel7amiJODu5b53pTSoixbVs56Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNJG%2BNnXYjNOInWXQyrcA5bioMtfVfI4RmNB5fD3HqIpEtLSJDwJsgg75ARzrWXyOWXTdNR0ISnmP9t%2F7P760XhOgsiQEJKKP7JEpwfGm%2BmwTuPSuqxqpE%2BqnINWgxuciuRVBcpv1TSlYfifcE3x3jdSjeMqwfmpOXNtOTCaT%2F%2FS1DkRyr%2FphxiEHtClUJYJcbaoH2pltf2a8Ex9gO7%2FEtgsV5HXyx3HIA4WjPT5ZU8Z2L4H1PP2nA51TJqfRQJDwT6Z1TCxoD4hd%2FsY4fyN3OczKbkkKSySKwnpwutKv8A9ZSa%2FtlTNDNLwaq6tDkp97cihv9N%2FHzZCn9psuXVjzwl7LYgHh6DNCmA2VBy87EwlhppwtjRoIrSbvbdOJhZMREAFmJoaeJRlU1P81NwgnS8VdZHiX15Eh%2B0vSUY8fDpcaCMOHbNkXZdEVKSM9sI1BNUwS0MFgweDrVrEXu1vev07r988fLVQqWhi%2FF8dKaWGaQLOIXIO5mB%2BMeBwoeoEribd8s6gLbk%2F6HiRkyLZFzjlXFy8Yc1wTwGByM3SvOFLeU81fpO9UTU04ZnuH8tL%2FejTifdwHb991kBNJdfL1Nk3C1xmCPHyyMT9EURc%2FpmLWKeViThD9TFjnwswBb3wzHHo1y8rm%2FVu9IO8MOCOz8QGOqUBBRbuQnu%2F%2BwDVMMUtEhFyRFtrLIuxIFgMBYaNgo5OCNq%2FBGVhtL7srXQ%2BSr%2BxJk8Y4b0hOfH1TMXjQ%2BfGBXBKNuYi8nkO02pKJ3nZrQqUqCLfe4rIHMq0PCaf3rR%2F9Y5HuhQcCCV8YjLQFPBi0%2Beq6FwWWHilHNiVftcIudBRpSzpa%2FyCXOIHh0%2BGmnzj5ppSdH0A421lpvXFY33mx195SSWB44C9&X-Amz-Signature=254b14d67d27423bf3141704dca9a9233ce165a4fe1338b2e027b03cca82172b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQVJEJY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIFJCPuxofT9sNLrlgXGTiIGX5%2BMSXYWO9hgxbWYIuiHbAiEAmwgMGuR8m3M7iPrKgel7amiJODu5b53pTSoixbVs56Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNJG%2BNnXYjNOInWXQyrcA5bioMtfVfI4RmNB5fD3HqIpEtLSJDwJsgg75ARzrWXyOWXTdNR0ISnmP9t%2F7P760XhOgsiQEJKKP7JEpwfGm%2BmwTuPSuqxqpE%2BqnINWgxuciuRVBcpv1TSlYfifcE3x3jdSjeMqwfmpOXNtOTCaT%2F%2FS1DkRyr%2FphxiEHtClUJYJcbaoH2pltf2a8Ex9gO7%2FEtgsV5HXyx3HIA4WjPT5ZU8Z2L4H1PP2nA51TJqfRQJDwT6Z1TCxoD4hd%2FsY4fyN3OczKbkkKSySKwnpwutKv8A9ZSa%2FtlTNDNLwaq6tDkp97cihv9N%2FHzZCn9psuXVjzwl7LYgHh6DNCmA2VBy87EwlhppwtjRoIrSbvbdOJhZMREAFmJoaeJRlU1P81NwgnS8VdZHiX15Eh%2B0vSUY8fDpcaCMOHbNkXZdEVKSM9sI1BNUwS0MFgweDrVrEXu1vev07r988fLVQqWhi%2FF8dKaWGaQLOIXIO5mB%2BMeBwoeoEribd8s6gLbk%2F6HiRkyLZFzjlXFy8Yc1wTwGByM3SvOFLeU81fpO9UTU04ZnuH8tL%2FejTifdwHb991kBNJdfL1Nk3C1xmCPHyyMT9EURc%2FpmLWKeViThD9TFjnwswBb3wzHHo1y8rm%2FVu9IO8MOCOz8QGOqUBBRbuQnu%2F%2BwDVMMUtEhFyRFtrLIuxIFgMBYaNgo5OCNq%2FBGVhtL7srXQ%2BSr%2BxJk8Y4b0hOfH1TMXjQ%2BfGBXBKNuYi8nkO02pKJ3nZrQqUqCLfe4rIHMq0PCaf3rR%2F9Y5HuhQcCCV8YjLQFPBi0%2Beq6FwWWHilHNiVftcIudBRpSzpa%2FyCXOIHh0%2BGmnzj5ppSdH0A421lpvXFY33mx195SSWB44C9&X-Amz-Signature=5373a67918fde0f6666609e8f85333b93af446c18ee24132bf078caa64a8cf8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQVJEJY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIFJCPuxofT9sNLrlgXGTiIGX5%2BMSXYWO9hgxbWYIuiHbAiEAmwgMGuR8m3M7iPrKgel7amiJODu5b53pTSoixbVs56Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNJG%2BNnXYjNOInWXQyrcA5bioMtfVfI4RmNB5fD3HqIpEtLSJDwJsgg75ARzrWXyOWXTdNR0ISnmP9t%2F7P760XhOgsiQEJKKP7JEpwfGm%2BmwTuPSuqxqpE%2BqnINWgxuciuRVBcpv1TSlYfifcE3x3jdSjeMqwfmpOXNtOTCaT%2F%2FS1DkRyr%2FphxiEHtClUJYJcbaoH2pltf2a8Ex9gO7%2FEtgsV5HXyx3HIA4WjPT5ZU8Z2L4H1PP2nA51TJqfRQJDwT6Z1TCxoD4hd%2FsY4fyN3OczKbkkKSySKwnpwutKv8A9ZSa%2FtlTNDNLwaq6tDkp97cihv9N%2FHzZCn9psuXVjzwl7LYgHh6DNCmA2VBy87EwlhppwtjRoIrSbvbdOJhZMREAFmJoaeJRlU1P81NwgnS8VdZHiX15Eh%2B0vSUY8fDpcaCMOHbNkXZdEVKSM9sI1BNUwS0MFgweDrVrEXu1vev07r988fLVQqWhi%2FF8dKaWGaQLOIXIO5mB%2BMeBwoeoEribd8s6gLbk%2F6HiRkyLZFzjlXFy8Yc1wTwGByM3SvOFLeU81fpO9UTU04ZnuH8tL%2FejTifdwHb991kBNJdfL1Nk3C1xmCPHyyMT9EURc%2FpmLWKeViThD9TFjnwswBb3wzHHo1y8rm%2FVu9IO8MOCOz8QGOqUBBRbuQnu%2F%2BwDVMMUtEhFyRFtrLIuxIFgMBYaNgo5OCNq%2FBGVhtL7srXQ%2BSr%2BxJk8Y4b0hOfH1TMXjQ%2BfGBXBKNuYi8nkO02pKJ3nZrQqUqCLfe4rIHMq0PCaf3rR%2F9Y5HuhQcCCV8YjLQFPBi0%2Beq6FwWWHilHNiVftcIudBRpSzpa%2FyCXOIHh0%2BGmnzj5ppSdH0A421lpvXFY33mx195SSWB44C9&X-Amz-Signature=cf7422c4b8793d111c64b030cb93c97f4c0517abd42072083082f3b2fe8fbc34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQVJEJY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIFJCPuxofT9sNLrlgXGTiIGX5%2BMSXYWO9hgxbWYIuiHbAiEAmwgMGuR8m3M7iPrKgel7amiJODu5b53pTSoixbVs56Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNJG%2BNnXYjNOInWXQyrcA5bioMtfVfI4RmNB5fD3HqIpEtLSJDwJsgg75ARzrWXyOWXTdNR0ISnmP9t%2F7P760XhOgsiQEJKKP7JEpwfGm%2BmwTuPSuqxqpE%2BqnINWgxuciuRVBcpv1TSlYfifcE3x3jdSjeMqwfmpOXNtOTCaT%2F%2FS1DkRyr%2FphxiEHtClUJYJcbaoH2pltf2a8Ex9gO7%2FEtgsV5HXyx3HIA4WjPT5ZU8Z2L4H1PP2nA51TJqfRQJDwT6Z1TCxoD4hd%2FsY4fyN3OczKbkkKSySKwnpwutKv8A9ZSa%2FtlTNDNLwaq6tDkp97cihv9N%2FHzZCn9psuXVjzwl7LYgHh6DNCmA2VBy87EwlhppwtjRoIrSbvbdOJhZMREAFmJoaeJRlU1P81NwgnS8VdZHiX15Eh%2B0vSUY8fDpcaCMOHbNkXZdEVKSM9sI1BNUwS0MFgweDrVrEXu1vev07r988fLVQqWhi%2FF8dKaWGaQLOIXIO5mB%2BMeBwoeoEribd8s6gLbk%2F6HiRkyLZFzjlXFy8Yc1wTwGByM3SvOFLeU81fpO9UTU04ZnuH8tL%2FejTifdwHb991kBNJdfL1Nk3C1xmCPHyyMT9EURc%2FpmLWKeViThD9TFjnwswBb3wzHHo1y8rm%2FVu9IO8MOCOz8QGOqUBBRbuQnu%2F%2BwDVMMUtEhFyRFtrLIuxIFgMBYaNgo5OCNq%2FBGVhtL7srXQ%2BSr%2BxJk8Y4b0hOfH1TMXjQ%2BfGBXBKNuYi8nkO02pKJ3nZrQqUqCLfe4rIHMq0PCaf3rR%2F9Y5HuhQcCCV8YjLQFPBi0%2Beq6FwWWHilHNiVftcIudBRpSzpa%2FyCXOIHh0%2BGmnzj5ppSdH0A421lpvXFY33mx195SSWB44C9&X-Amz-Signature=0e404ba6fdd86bd0ff77a05b8a8fa44eb3cefa3e067eaf1e2d81502d053b865c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQVJEJY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIFJCPuxofT9sNLrlgXGTiIGX5%2BMSXYWO9hgxbWYIuiHbAiEAmwgMGuR8m3M7iPrKgel7amiJODu5b53pTSoixbVs56Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNJG%2BNnXYjNOInWXQyrcA5bioMtfVfI4RmNB5fD3HqIpEtLSJDwJsgg75ARzrWXyOWXTdNR0ISnmP9t%2F7P760XhOgsiQEJKKP7JEpwfGm%2BmwTuPSuqxqpE%2BqnINWgxuciuRVBcpv1TSlYfifcE3x3jdSjeMqwfmpOXNtOTCaT%2F%2FS1DkRyr%2FphxiEHtClUJYJcbaoH2pltf2a8Ex9gO7%2FEtgsV5HXyx3HIA4WjPT5ZU8Z2L4H1PP2nA51TJqfRQJDwT6Z1TCxoD4hd%2FsY4fyN3OczKbkkKSySKwnpwutKv8A9ZSa%2FtlTNDNLwaq6tDkp97cihv9N%2FHzZCn9psuXVjzwl7LYgHh6DNCmA2VBy87EwlhppwtjRoIrSbvbdOJhZMREAFmJoaeJRlU1P81NwgnS8VdZHiX15Eh%2B0vSUY8fDpcaCMOHbNkXZdEVKSM9sI1BNUwS0MFgweDrVrEXu1vev07r988fLVQqWhi%2FF8dKaWGaQLOIXIO5mB%2BMeBwoeoEribd8s6gLbk%2F6HiRkyLZFzjlXFy8Yc1wTwGByM3SvOFLeU81fpO9UTU04ZnuH8tL%2FejTifdwHb991kBNJdfL1Nk3C1xmCPHyyMT9EURc%2FpmLWKeViThD9TFjnwswBb3wzHHo1y8rm%2FVu9IO8MOCOz8QGOqUBBRbuQnu%2F%2BwDVMMUtEhFyRFtrLIuxIFgMBYaNgo5OCNq%2FBGVhtL7srXQ%2BSr%2BxJk8Y4b0hOfH1TMXjQ%2BfGBXBKNuYi8nkO02pKJ3nZrQqUqCLfe4rIHMq0PCaf3rR%2F9Y5HuhQcCCV8YjLQFPBi0%2Beq6FwWWHilHNiVftcIudBRpSzpa%2FyCXOIHh0%2BGmnzj5ppSdH0A421lpvXFY33mx195SSWB44C9&X-Amz-Signature=0cabb35e6e9d7ca3a7a52f55ef6c6ee86550ff59e5ee989167e210d472759f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQVJEJY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIFJCPuxofT9sNLrlgXGTiIGX5%2BMSXYWO9hgxbWYIuiHbAiEAmwgMGuR8m3M7iPrKgel7amiJODu5b53pTSoixbVs56Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNJG%2BNnXYjNOInWXQyrcA5bioMtfVfI4RmNB5fD3HqIpEtLSJDwJsgg75ARzrWXyOWXTdNR0ISnmP9t%2F7P760XhOgsiQEJKKP7JEpwfGm%2BmwTuPSuqxqpE%2BqnINWgxuciuRVBcpv1TSlYfifcE3x3jdSjeMqwfmpOXNtOTCaT%2F%2FS1DkRyr%2FphxiEHtClUJYJcbaoH2pltf2a8Ex9gO7%2FEtgsV5HXyx3HIA4WjPT5ZU8Z2L4H1PP2nA51TJqfRQJDwT6Z1TCxoD4hd%2FsY4fyN3OczKbkkKSySKwnpwutKv8A9ZSa%2FtlTNDNLwaq6tDkp97cihv9N%2FHzZCn9psuXVjzwl7LYgHh6DNCmA2VBy87EwlhppwtjRoIrSbvbdOJhZMREAFmJoaeJRlU1P81NwgnS8VdZHiX15Eh%2B0vSUY8fDpcaCMOHbNkXZdEVKSM9sI1BNUwS0MFgweDrVrEXu1vev07r988fLVQqWhi%2FF8dKaWGaQLOIXIO5mB%2BMeBwoeoEribd8s6gLbk%2F6HiRkyLZFzjlXFy8Yc1wTwGByM3SvOFLeU81fpO9UTU04ZnuH8tL%2FejTifdwHb991kBNJdfL1Nk3C1xmCPHyyMT9EURc%2FpmLWKeViThD9TFjnwswBb3wzHHo1y8rm%2FVu9IO8MOCOz8QGOqUBBRbuQnu%2F%2BwDVMMUtEhFyRFtrLIuxIFgMBYaNgo5OCNq%2FBGVhtL7srXQ%2BSr%2BxJk8Y4b0hOfH1TMXjQ%2BfGBXBKNuYi8nkO02pKJ3nZrQqUqCLfe4rIHMq0PCaf3rR%2F9Y5HuhQcCCV8YjLQFPBi0%2Beq6FwWWHilHNiVftcIudBRpSzpa%2FyCXOIHh0%2BGmnzj5ppSdH0A421lpvXFY33mx195SSWB44C9&X-Amz-Signature=c23dcd5262ad85600c28ffcdb531d60be67b4eb08a830541a1e2db54118f0fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQVJEJY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIFJCPuxofT9sNLrlgXGTiIGX5%2BMSXYWO9hgxbWYIuiHbAiEAmwgMGuR8m3M7iPrKgel7amiJODu5b53pTSoixbVs56Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNJG%2BNnXYjNOInWXQyrcA5bioMtfVfI4RmNB5fD3HqIpEtLSJDwJsgg75ARzrWXyOWXTdNR0ISnmP9t%2F7P760XhOgsiQEJKKP7JEpwfGm%2BmwTuPSuqxqpE%2BqnINWgxuciuRVBcpv1TSlYfifcE3x3jdSjeMqwfmpOXNtOTCaT%2F%2FS1DkRyr%2FphxiEHtClUJYJcbaoH2pltf2a8Ex9gO7%2FEtgsV5HXyx3HIA4WjPT5ZU8Z2L4H1PP2nA51TJqfRQJDwT6Z1TCxoD4hd%2FsY4fyN3OczKbkkKSySKwnpwutKv8A9ZSa%2FtlTNDNLwaq6tDkp97cihv9N%2FHzZCn9psuXVjzwl7LYgHh6DNCmA2VBy87EwlhppwtjRoIrSbvbdOJhZMREAFmJoaeJRlU1P81NwgnS8VdZHiX15Eh%2B0vSUY8fDpcaCMOHbNkXZdEVKSM9sI1BNUwS0MFgweDrVrEXu1vev07r988fLVQqWhi%2FF8dKaWGaQLOIXIO5mB%2BMeBwoeoEribd8s6gLbk%2F6HiRkyLZFzjlXFy8Yc1wTwGByM3SvOFLeU81fpO9UTU04ZnuH8tL%2FejTifdwHb991kBNJdfL1Nk3C1xmCPHyyMT9EURc%2FpmLWKeViThD9TFjnwswBb3wzHHo1y8rm%2FVu9IO8MOCOz8QGOqUBBRbuQnu%2F%2BwDVMMUtEhFyRFtrLIuxIFgMBYaNgo5OCNq%2FBGVhtL7srXQ%2BSr%2BxJk8Y4b0hOfH1TMXjQ%2BfGBXBKNuYi8nkO02pKJ3nZrQqUqCLfe4rIHMq0PCaf3rR%2F9Y5HuhQcCCV8YjLQFPBi0%2Beq6FwWWHilHNiVftcIudBRpSzpa%2FyCXOIHh0%2BGmnzj5ppSdH0A421lpvXFY33mx195SSWB44C9&X-Amz-Signature=8978402ee29b50620d4bb6b0e244dbc318dcd7d71ce5a883dbf25436c8133929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
