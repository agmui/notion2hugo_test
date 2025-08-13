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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF67Q65%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe3MGiZyMIEwzzxQ2G2Lxfkt4lyC8p21tSbQ0BKD1wMAiEA8fKPgRs%2FawrdXLCZyUh53QDHOXHx9SfibTsFI7mIYUsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDWXtQRAJyKVryiX2SrcA2nwn%2Fn%2BHc6edHqjM9atlxUjgKbg3UFtofw1CEU5Z%2F3EKuprQh7K1QfCu9gK3gaaCWJC012hV9odbP1pyU1U%2FHRNeCADLCll3JO5ikK78pAL9KmEF9emjXFL290iJapR8ntKJMM7HQ5UKlrRUey%2BdHzYKsn%2FTVDDNN8sUumdd29GEJX7ndVlV4Ydungybti7m%2F7ELvRwAtsMronPMoTL%2BpaqnEpm34%2BnVNS5CBVYuzxGRFVsfAYh6qdWTkfpy8PZ9YWY5TZhUnzFtzRSgwoukIAOias70liWJ16fr2KxRlb5aK2fY3%2BXOsnh%2B8oBtm9%2FEVOEIPB8tLQCI5qxQjJ0cZ4n1FuLmrXu4zYnMxX96wMDPNINdZO0yKP7PGRgq2wgeGn8esi0M%2BbtOBN3jGQWtWJYoELwmFxINvxJxpUXI41KVo91JjROu6seezxD88eSGPpEOT9BS5PQXouG4042dwMz%2BAGmqBJFtAtnsnY7bVTZuwrh57l%2FWegZSOmbdKd8jjbxKRXHS3rITMvEGjJlujtQ29eCpYVfsGj3Q9UAwcx%2Fy8rX%2Bd6MNNfQaLzHagqUkiL%2BUHmb0awWnkRYts4QebUB5Tu7B9HXgF6Bjd2bc8omthcOSzWoIih%2Fi7EsMPTQ8MQGOqUBt5eOb2A1WGgwEN9Rm2xnQUTXfz5%2FLeOqBjk4JL3XE2DOh5O5mClo7FKJb%2BiBPMzm13pYbLd9Yeu3l7IVrjnLuRoGQ6HoYakY6ZPc0RmdUMcEmeBBUYQfP5KmSd7MzjFXoOPMorCqaKjKUvrYI6ok0si2tGjmnSIMuPkix%2FcMY%2BOcH1By%2FgMW4mDz8Hkg0Ew7BzY%2FfHNK674uggWfmL%2Bh%2FBLxzvd7&X-Amz-Signature=ceff980cfa74a349e1de59d7e12f5508b186de3a65b63c0780f60d2f2d652042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF67Q65%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe3MGiZyMIEwzzxQ2G2Lxfkt4lyC8p21tSbQ0BKD1wMAiEA8fKPgRs%2FawrdXLCZyUh53QDHOXHx9SfibTsFI7mIYUsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDWXtQRAJyKVryiX2SrcA2nwn%2Fn%2BHc6edHqjM9atlxUjgKbg3UFtofw1CEU5Z%2F3EKuprQh7K1QfCu9gK3gaaCWJC012hV9odbP1pyU1U%2FHRNeCADLCll3JO5ikK78pAL9KmEF9emjXFL290iJapR8ntKJMM7HQ5UKlrRUey%2BdHzYKsn%2FTVDDNN8sUumdd29GEJX7ndVlV4Ydungybti7m%2F7ELvRwAtsMronPMoTL%2BpaqnEpm34%2BnVNS5CBVYuzxGRFVsfAYh6qdWTkfpy8PZ9YWY5TZhUnzFtzRSgwoukIAOias70liWJ16fr2KxRlb5aK2fY3%2BXOsnh%2B8oBtm9%2FEVOEIPB8tLQCI5qxQjJ0cZ4n1FuLmrXu4zYnMxX96wMDPNINdZO0yKP7PGRgq2wgeGn8esi0M%2BbtOBN3jGQWtWJYoELwmFxINvxJxpUXI41KVo91JjROu6seezxD88eSGPpEOT9BS5PQXouG4042dwMz%2BAGmqBJFtAtnsnY7bVTZuwrh57l%2FWegZSOmbdKd8jjbxKRXHS3rITMvEGjJlujtQ29eCpYVfsGj3Q9UAwcx%2Fy8rX%2Bd6MNNfQaLzHagqUkiL%2BUHmb0awWnkRYts4QebUB5Tu7B9HXgF6Bjd2bc8omthcOSzWoIih%2Fi7EsMPTQ8MQGOqUBt5eOb2A1WGgwEN9Rm2xnQUTXfz5%2FLeOqBjk4JL3XE2DOh5O5mClo7FKJb%2BiBPMzm13pYbLd9Yeu3l7IVrjnLuRoGQ6HoYakY6ZPc0RmdUMcEmeBBUYQfP5KmSd7MzjFXoOPMorCqaKjKUvrYI6ok0si2tGjmnSIMuPkix%2FcMY%2BOcH1By%2FgMW4mDz8Hkg0Ew7BzY%2FfHNK674uggWfmL%2Bh%2FBLxzvd7&X-Amz-Signature=05e51149f237cd3b54610638da01d051d29ce2b0774141b24b43cfa42cc74531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF67Q65%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe3MGiZyMIEwzzxQ2G2Lxfkt4lyC8p21tSbQ0BKD1wMAiEA8fKPgRs%2FawrdXLCZyUh53QDHOXHx9SfibTsFI7mIYUsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDWXtQRAJyKVryiX2SrcA2nwn%2Fn%2BHc6edHqjM9atlxUjgKbg3UFtofw1CEU5Z%2F3EKuprQh7K1QfCu9gK3gaaCWJC012hV9odbP1pyU1U%2FHRNeCADLCll3JO5ikK78pAL9KmEF9emjXFL290iJapR8ntKJMM7HQ5UKlrRUey%2BdHzYKsn%2FTVDDNN8sUumdd29GEJX7ndVlV4Ydungybti7m%2F7ELvRwAtsMronPMoTL%2BpaqnEpm34%2BnVNS5CBVYuzxGRFVsfAYh6qdWTkfpy8PZ9YWY5TZhUnzFtzRSgwoukIAOias70liWJ16fr2KxRlb5aK2fY3%2BXOsnh%2B8oBtm9%2FEVOEIPB8tLQCI5qxQjJ0cZ4n1FuLmrXu4zYnMxX96wMDPNINdZO0yKP7PGRgq2wgeGn8esi0M%2BbtOBN3jGQWtWJYoELwmFxINvxJxpUXI41KVo91JjROu6seezxD88eSGPpEOT9BS5PQXouG4042dwMz%2BAGmqBJFtAtnsnY7bVTZuwrh57l%2FWegZSOmbdKd8jjbxKRXHS3rITMvEGjJlujtQ29eCpYVfsGj3Q9UAwcx%2Fy8rX%2Bd6MNNfQaLzHagqUkiL%2BUHmb0awWnkRYts4QebUB5Tu7B9HXgF6Bjd2bc8omthcOSzWoIih%2Fi7EsMPTQ8MQGOqUBt5eOb2A1WGgwEN9Rm2xnQUTXfz5%2FLeOqBjk4JL3XE2DOh5O5mClo7FKJb%2BiBPMzm13pYbLd9Yeu3l7IVrjnLuRoGQ6HoYakY6ZPc0RmdUMcEmeBBUYQfP5KmSd7MzjFXoOPMorCqaKjKUvrYI6ok0si2tGjmnSIMuPkix%2FcMY%2BOcH1By%2FgMW4mDz8Hkg0Ew7BzY%2FfHNK674uggWfmL%2Bh%2FBLxzvd7&X-Amz-Signature=68831b46eeb3b4ff92d224e1b9f6c5ee2b9d11eb7229920cd0d86afbeb365ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF67Q65%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe3MGiZyMIEwzzxQ2G2Lxfkt4lyC8p21tSbQ0BKD1wMAiEA8fKPgRs%2FawrdXLCZyUh53QDHOXHx9SfibTsFI7mIYUsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDWXtQRAJyKVryiX2SrcA2nwn%2Fn%2BHc6edHqjM9atlxUjgKbg3UFtofw1CEU5Z%2F3EKuprQh7K1QfCu9gK3gaaCWJC012hV9odbP1pyU1U%2FHRNeCADLCll3JO5ikK78pAL9KmEF9emjXFL290iJapR8ntKJMM7HQ5UKlrRUey%2BdHzYKsn%2FTVDDNN8sUumdd29GEJX7ndVlV4Ydungybti7m%2F7ELvRwAtsMronPMoTL%2BpaqnEpm34%2BnVNS5CBVYuzxGRFVsfAYh6qdWTkfpy8PZ9YWY5TZhUnzFtzRSgwoukIAOias70liWJ16fr2KxRlb5aK2fY3%2BXOsnh%2B8oBtm9%2FEVOEIPB8tLQCI5qxQjJ0cZ4n1FuLmrXu4zYnMxX96wMDPNINdZO0yKP7PGRgq2wgeGn8esi0M%2BbtOBN3jGQWtWJYoELwmFxINvxJxpUXI41KVo91JjROu6seezxD88eSGPpEOT9BS5PQXouG4042dwMz%2BAGmqBJFtAtnsnY7bVTZuwrh57l%2FWegZSOmbdKd8jjbxKRXHS3rITMvEGjJlujtQ29eCpYVfsGj3Q9UAwcx%2Fy8rX%2Bd6MNNfQaLzHagqUkiL%2BUHmb0awWnkRYts4QebUB5Tu7B9HXgF6Bjd2bc8omthcOSzWoIih%2Fi7EsMPTQ8MQGOqUBt5eOb2A1WGgwEN9Rm2xnQUTXfz5%2FLeOqBjk4JL3XE2DOh5O5mClo7FKJb%2BiBPMzm13pYbLd9Yeu3l7IVrjnLuRoGQ6HoYakY6ZPc0RmdUMcEmeBBUYQfP5KmSd7MzjFXoOPMorCqaKjKUvrYI6ok0si2tGjmnSIMuPkix%2FcMY%2BOcH1By%2FgMW4mDz8Hkg0Ew7BzY%2FfHNK674uggWfmL%2Bh%2FBLxzvd7&X-Amz-Signature=dcee687114148e81423973598e702cd128a7231dfbf41c77724ce67bebf68d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF67Q65%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe3MGiZyMIEwzzxQ2G2Lxfkt4lyC8p21tSbQ0BKD1wMAiEA8fKPgRs%2FawrdXLCZyUh53QDHOXHx9SfibTsFI7mIYUsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDWXtQRAJyKVryiX2SrcA2nwn%2Fn%2BHc6edHqjM9atlxUjgKbg3UFtofw1CEU5Z%2F3EKuprQh7K1QfCu9gK3gaaCWJC012hV9odbP1pyU1U%2FHRNeCADLCll3JO5ikK78pAL9KmEF9emjXFL290iJapR8ntKJMM7HQ5UKlrRUey%2BdHzYKsn%2FTVDDNN8sUumdd29GEJX7ndVlV4Ydungybti7m%2F7ELvRwAtsMronPMoTL%2BpaqnEpm34%2BnVNS5CBVYuzxGRFVsfAYh6qdWTkfpy8PZ9YWY5TZhUnzFtzRSgwoukIAOias70liWJ16fr2KxRlb5aK2fY3%2BXOsnh%2B8oBtm9%2FEVOEIPB8tLQCI5qxQjJ0cZ4n1FuLmrXu4zYnMxX96wMDPNINdZO0yKP7PGRgq2wgeGn8esi0M%2BbtOBN3jGQWtWJYoELwmFxINvxJxpUXI41KVo91JjROu6seezxD88eSGPpEOT9BS5PQXouG4042dwMz%2BAGmqBJFtAtnsnY7bVTZuwrh57l%2FWegZSOmbdKd8jjbxKRXHS3rITMvEGjJlujtQ29eCpYVfsGj3Q9UAwcx%2Fy8rX%2Bd6MNNfQaLzHagqUkiL%2BUHmb0awWnkRYts4QebUB5Tu7B9HXgF6Bjd2bc8omthcOSzWoIih%2Fi7EsMPTQ8MQGOqUBt5eOb2A1WGgwEN9Rm2xnQUTXfz5%2FLeOqBjk4JL3XE2DOh5O5mClo7FKJb%2BiBPMzm13pYbLd9Yeu3l7IVrjnLuRoGQ6HoYakY6ZPc0RmdUMcEmeBBUYQfP5KmSd7MzjFXoOPMorCqaKjKUvrYI6ok0si2tGjmnSIMuPkix%2FcMY%2BOcH1By%2FgMW4mDz8Hkg0Ew7BzY%2FfHNK674uggWfmL%2Bh%2FBLxzvd7&X-Amz-Signature=c880dd48fb3ae6adfffd04c0473c719dfd933b7c77180c7214a0328047e01c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF67Q65%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe3MGiZyMIEwzzxQ2G2Lxfkt4lyC8p21tSbQ0BKD1wMAiEA8fKPgRs%2FawrdXLCZyUh53QDHOXHx9SfibTsFI7mIYUsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDWXtQRAJyKVryiX2SrcA2nwn%2Fn%2BHc6edHqjM9atlxUjgKbg3UFtofw1CEU5Z%2F3EKuprQh7K1QfCu9gK3gaaCWJC012hV9odbP1pyU1U%2FHRNeCADLCll3JO5ikK78pAL9KmEF9emjXFL290iJapR8ntKJMM7HQ5UKlrRUey%2BdHzYKsn%2FTVDDNN8sUumdd29GEJX7ndVlV4Ydungybti7m%2F7ELvRwAtsMronPMoTL%2BpaqnEpm34%2BnVNS5CBVYuzxGRFVsfAYh6qdWTkfpy8PZ9YWY5TZhUnzFtzRSgwoukIAOias70liWJ16fr2KxRlb5aK2fY3%2BXOsnh%2B8oBtm9%2FEVOEIPB8tLQCI5qxQjJ0cZ4n1FuLmrXu4zYnMxX96wMDPNINdZO0yKP7PGRgq2wgeGn8esi0M%2BbtOBN3jGQWtWJYoELwmFxINvxJxpUXI41KVo91JjROu6seezxD88eSGPpEOT9BS5PQXouG4042dwMz%2BAGmqBJFtAtnsnY7bVTZuwrh57l%2FWegZSOmbdKd8jjbxKRXHS3rITMvEGjJlujtQ29eCpYVfsGj3Q9UAwcx%2Fy8rX%2Bd6MNNfQaLzHagqUkiL%2BUHmb0awWnkRYts4QebUB5Tu7B9HXgF6Bjd2bc8omthcOSzWoIih%2Fi7EsMPTQ8MQGOqUBt5eOb2A1WGgwEN9Rm2xnQUTXfz5%2FLeOqBjk4JL3XE2DOh5O5mClo7FKJb%2BiBPMzm13pYbLd9Yeu3l7IVrjnLuRoGQ6HoYakY6ZPc0RmdUMcEmeBBUYQfP5KmSd7MzjFXoOPMorCqaKjKUvrYI6ok0si2tGjmnSIMuPkix%2FcMY%2BOcH1By%2FgMW4mDz8Hkg0Ew7BzY%2FfHNK674uggWfmL%2Bh%2FBLxzvd7&X-Amz-Signature=b47a470f43fecd3dfaf252f3d63212f66c357b68d454a9862a90f859cfc161c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF67Q65%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe3MGiZyMIEwzzxQ2G2Lxfkt4lyC8p21tSbQ0BKD1wMAiEA8fKPgRs%2FawrdXLCZyUh53QDHOXHx9SfibTsFI7mIYUsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDWXtQRAJyKVryiX2SrcA2nwn%2Fn%2BHc6edHqjM9atlxUjgKbg3UFtofw1CEU5Z%2F3EKuprQh7K1QfCu9gK3gaaCWJC012hV9odbP1pyU1U%2FHRNeCADLCll3JO5ikK78pAL9KmEF9emjXFL290iJapR8ntKJMM7HQ5UKlrRUey%2BdHzYKsn%2FTVDDNN8sUumdd29GEJX7ndVlV4Ydungybti7m%2F7ELvRwAtsMronPMoTL%2BpaqnEpm34%2BnVNS5CBVYuzxGRFVsfAYh6qdWTkfpy8PZ9YWY5TZhUnzFtzRSgwoukIAOias70liWJ16fr2KxRlb5aK2fY3%2BXOsnh%2B8oBtm9%2FEVOEIPB8tLQCI5qxQjJ0cZ4n1FuLmrXu4zYnMxX96wMDPNINdZO0yKP7PGRgq2wgeGn8esi0M%2BbtOBN3jGQWtWJYoELwmFxINvxJxpUXI41KVo91JjROu6seezxD88eSGPpEOT9BS5PQXouG4042dwMz%2BAGmqBJFtAtnsnY7bVTZuwrh57l%2FWegZSOmbdKd8jjbxKRXHS3rITMvEGjJlujtQ29eCpYVfsGj3Q9UAwcx%2Fy8rX%2Bd6MNNfQaLzHagqUkiL%2BUHmb0awWnkRYts4QebUB5Tu7B9HXgF6Bjd2bc8omthcOSzWoIih%2Fi7EsMPTQ8MQGOqUBt5eOb2A1WGgwEN9Rm2xnQUTXfz5%2FLeOqBjk4JL3XE2DOh5O5mClo7FKJb%2BiBPMzm13pYbLd9Yeu3l7IVrjnLuRoGQ6HoYakY6ZPc0RmdUMcEmeBBUYQfP5KmSd7MzjFXoOPMorCqaKjKUvrYI6ok0si2tGjmnSIMuPkix%2FcMY%2BOcH1By%2FgMW4mDz8Hkg0Ew7BzY%2FfHNK674uggWfmL%2Bh%2FBLxzvd7&X-Amz-Signature=20eac127ab8a2f7fd2576e4c0af1702f5f14316f91fd97f0317023c4ba06cddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF67Q65%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe3MGiZyMIEwzzxQ2G2Lxfkt4lyC8p21tSbQ0BKD1wMAiEA8fKPgRs%2FawrdXLCZyUh53QDHOXHx9SfibTsFI7mIYUsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDWXtQRAJyKVryiX2SrcA2nwn%2Fn%2BHc6edHqjM9atlxUjgKbg3UFtofw1CEU5Z%2F3EKuprQh7K1QfCu9gK3gaaCWJC012hV9odbP1pyU1U%2FHRNeCADLCll3JO5ikK78pAL9KmEF9emjXFL290iJapR8ntKJMM7HQ5UKlrRUey%2BdHzYKsn%2FTVDDNN8sUumdd29GEJX7ndVlV4Ydungybti7m%2F7ELvRwAtsMronPMoTL%2BpaqnEpm34%2BnVNS5CBVYuzxGRFVsfAYh6qdWTkfpy8PZ9YWY5TZhUnzFtzRSgwoukIAOias70liWJ16fr2KxRlb5aK2fY3%2BXOsnh%2B8oBtm9%2FEVOEIPB8tLQCI5qxQjJ0cZ4n1FuLmrXu4zYnMxX96wMDPNINdZO0yKP7PGRgq2wgeGn8esi0M%2BbtOBN3jGQWtWJYoELwmFxINvxJxpUXI41KVo91JjROu6seezxD88eSGPpEOT9BS5PQXouG4042dwMz%2BAGmqBJFtAtnsnY7bVTZuwrh57l%2FWegZSOmbdKd8jjbxKRXHS3rITMvEGjJlujtQ29eCpYVfsGj3Q9UAwcx%2Fy8rX%2Bd6MNNfQaLzHagqUkiL%2BUHmb0awWnkRYts4QebUB5Tu7B9HXgF6Bjd2bc8omthcOSzWoIih%2Fi7EsMPTQ8MQGOqUBt5eOb2A1WGgwEN9Rm2xnQUTXfz5%2FLeOqBjk4JL3XE2DOh5O5mClo7FKJb%2BiBPMzm13pYbLd9Yeu3l7IVrjnLuRoGQ6HoYakY6ZPc0RmdUMcEmeBBUYQfP5KmSd7MzjFXoOPMorCqaKjKUvrYI6ok0si2tGjmnSIMuPkix%2FcMY%2BOcH1By%2FgMW4mDz8Hkg0Ew7BzY%2FfHNK674uggWfmL%2Bh%2FBLxzvd7&X-Amz-Signature=55f37fc4152d1348878416c35315131ea28a9805793efcb720ae8d34aebfbb19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF67Q65%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe3MGiZyMIEwzzxQ2G2Lxfkt4lyC8p21tSbQ0BKD1wMAiEA8fKPgRs%2FawrdXLCZyUh53QDHOXHx9SfibTsFI7mIYUsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDWXtQRAJyKVryiX2SrcA2nwn%2Fn%2BHc6edHqjM9atlxUjgKbg3UFtofw1CEU5Z%2F3EKuprQh7K1QfCu9gK3gaaCWJC012hV9odbP1pyU1U%2FHRNeCADLCll3JO5ikK78pAL9KmEF9emjXFL290iJapR8ntKJMM7HQ5UKlrRUey%2BdHzYKsn%2FTVDDNN8sUumdd29GEJX7ndVlV4Ydungybti7m%2F7ELvRwAtsMronPMoTL%2BpaqnEpm34%2BnVNS5CBVYuzxGRFVsfAYh6qdWTkfpy8PZ9YWY5TZhUnzFtzRSgwoukIAOias70liWJ16fr2KxRlb5aK2fY3%2BXOsnh%2B8oBtm9%2FEVOEIPB8tLQCI5qxQjJ0cZ4n1FuLmrXu4zYnMxX96wMDPNINdZO0yKP7PGRgq2wgeGn8esi0M%2BbtOBN3jGQWtWJYoELwmFxINvxJxpUXI41KVo91JjROu6seezxD88eSGPpEOT9BS5PQXouG4042dwMz%2BAGmqBJFtAtnsnY7bVTZuwrh57l%2FWegZSOmbdKd8jjbxKRXHS3rITMvEGjJlujtQ29eCpYVfsGj3Q9UAwcx%2Fy8rX%2Bd6MNNfQaLzHagqUkiL%2BUHmb0awWnkRYts4QebUB5Tu7B9HXgF6Bjd2bc8omthcOSzWoIih%2Fi7EsMPTQ8MQGOqUBt5eOb2A1WGgwEN9Rm2xnQUTXfz5%2FLeOqBjk4JL3XE2DOh5O5mClo7FKJb%2BiBPMzm13pYbLd9Yeu3l7IVrjnLuRoGQ6HoYakY6ZPc0RmdUMcEmeBBUYQfP5KmSd7MzjFXoOPMorCqaKjKUvrYI6ok0si2tGjmnSIMuPkix%2FcMY%2BOcH1By%2FgMW4mDz8Hkg0Ew7BzY%2FfHNK674uggWfmL%2Bh%2FBLxzvd7&X-Amz-Signature=89b595e99306d1c822c6ce091a7592690f7a9a5f7f1e9bb281723566b4988ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF67Q65%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe3MGiZyMIEwzzxQ2G2Lxfkt4lyC8p21tSbQ0BKD1wMAiEA8fKPgRs%2FawrdXLCZyUh53QDHOXHx9SfibTsFI7mIYUsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDWXtQRAJyKVryiX2SrcA2nwn%2Fn%2BHc6edHqjM9atlxUjgKbg3UFtofw1CEU5Z%2F3EKuprQh7K1QfCu9gK3gaaCWJC012hV9odbP1pyU1U%2FHRNeCADLCll3JO5ikK78pAL9KmEF9emjXFL290iJapR8ntKJMM7HQ5UKlrRUey%2BdHzYKsn%2FTVDDNN8sUumdd29GEJX7ndVlV4Ydungybti7m%2F7ELvRwAtsMronPMoTL%2BpaqnEpm34%2BnVNS5CBVYuzxGRFVsfAYh6qdWTkfpy8PZ9YWY5TZhUnzFtzRSgwoukIAOias70liWJ16fr2KxRlb5aK2fY3%2BXOsnh%2B8oBtm9%2FEVOEIPB8tLQCI5qxQjJ0cZ4n1FuLmrXu4zYnMxX96wMDPNINdZO0yKP7PGRgq2wgeGn8esi0M%2BbtOBN3jGQWtWJYoELwmFxINvxJxpUXI41KVo91JjROu6seezxD88eSGPpEOT9BS5PQXouG4042dwMz%2BAGmqBJFtAtnsnY7bVTZuwrh57l%2FWegZSOmbdKd8jjbxKRXHS3rITMvEGjJlujtQ29eCpYVfsGj3Q9UAwcx%2Fy8rX%2Bd6MNNfQaLzHagqUkiL%2BUHmb0awWnkRYts4QebUB5Tu7B9HXgF6Bjd2bc8omthcOSzWoIih%2Fi7EsMPTQ8MQGOqUBt5eOb2A1WGgwEN9Rm2xnQUTXfz5%2FLeOqBjk4JL3XE2DOh5O5mClo7FKJb%2BiBPMzm13pYbLd9Yeu3l7IVrjnLuRoGQ6HoYakY6ZPc0RmdUMcEmeBBUYQfP5KmSd7MzjFXoOPMorCqaKjKUvrYI6ok0si2tGjmnSIMuPkix%2FcMY%2BOcH1By%2FgMW4mDz8Hkg0Ew7BzY%2FfHNK674uggWfmL%2Bh%2FBLxzvd7&X-Amz-Signature=81488e30d35819ebb840cffd5e35ddfcf1aa0d2347f4f1fb943f5caa30323428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLPWWNPU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNs8Y4dYj4dMjuCn0tp%2Bi5tCeqd4d31EHkzCihC5NZcAIhAPmQrD2ChM3m5%2BJuKAivlCod5M0lsMLo%2FijfZ0jWIeQVKv8DCCcQABoMNjM3NDIzMTgzODA1IgzLrLx6W%2BX2jUMd33oq3AO2CqxNN2pHgArNdEoG3zWU1DcCOak1kjozVKS9eoLc6EXADrAmWtSvMedUVRV6UQPI9F2y2QGmMm5Wuuoizs5CHyqoskGU8vsYcLdCXqjJog%2F8oH4KB9xHYCK9Zl%2B8%2FFJNPrp50egLTQ375qxGoy6kGNSSbbd0LcY8%2FXTpeDcaO4iyuuQR6PWBAekRoTaZa71wYSGbIgxmGhB%2BmpbZnN2Z6BF0UK6GUpuLtPJ6bMLBGAqk0vYhgxlhsjvspljb2QbGtLYGeVFI6Db3AL6MohOSPutx4emFG4giTlDyfFA4UUmIuEnxJm%2FgysQbFVlL9Pkp%2BL%2B3%2FEwwT1GAo4bB5EOUuiPYt3PTA4Ud%2F9br6jFdwOx9qXpxkrewcU8%2BZ5DB09TPeO7kHGRoEiHYvf1doLgKkwnS4wGWa4R7TBWTSIF65KTdEMeK7Zu5mNFOrCubTegYWDf7lF2L2LgDNGLBT6bLlNCHSVMBpuViiHTNGHQl2CVCMvSxmZo2zh%2Fd0omRTQR%2BIbYTCoVGVS8%2FiSEH7ntls6W9MuO4ECgpzNpUMefhNmrQl3WWC8hBJD3fGofT8elnzTIJQDQ6%2BEkWNvsjqdeOl55ruEsWAyfjkH23OYCvuV3TPzrGU6EUN0%2FMsDCf0fDEBjqkATWEJTEtSO42VU46O7y%2FgDy3YCfQjx53huWh7kOWuLGWH0Tdc0SKgYvIrkcDBg67BwbWSCqUkgqFictG0FhEi6jK43DOnBxNbMHrSiRh%2BwltokVP85sxU9rN6BVGqGAS%2BzFyjsbHjPeozPn5U1PUEST1w4W65I7n01Jv%2Fz96g7OE9DJM9UMDUYdAopp4BgfsaLUp%2Fzc0KFGtaq%2BT1JhBeFErUy8Y&X-Amz-Signature=2a425da98f49e55a26638afacc2f88ce2d24584dff0587d94ee33780ad4dae3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QD7S7OX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BFKMJpyP59SxTBh7%2Bhizc4IRYRLm0x7HC6BOm72QVwgIhALv5Pzos2j0kHkVgh9W71DCCCZruNCHSorM5d6UjlpI0Kv8DCCcQABoMNjM3NDIzMTgzODA1IgxVJCGv3udx%2F1GJ33sq3APQG01gJqKkNyh7p2kYZi3u66vqFBbOwxABsaearH%2BMUZWlpHVrMO6fY4ua2GCc1CO6RnyPhDx5UbMIpZjYc66eRIEU%2FwlkLPkEkfHeRslMCEZEOJC4DC9ngmWhblDGDeMBKXGhOV6yjWcRkYP1nj9vF4pPr%2B3Dl9qtQB5Fbze6ZcCtssoo%2BDHOp7H0mIwKl%2FNmMD7d95pC3d%2B7QUjDz42QzUx9KZ4rQ8g%2BnmzGWCCoOMxJRj4YLpg4JjsG048ZEU27pbVaoJs0LpLhcNsTp372Y8u%2F7vlPo%2BuGSOzfGNXRQXQXAMtMvgAeUcwML4Q0ejwFSDbgfdAniadSAoObfuMrt2CTZZbbONgksTAasYBvJm9dCiwaLSsQD4yg%2BPHDwTRoC%2F058hD9AczZgfDQH22w2AjHmJcjNDvGlNHiluEHvIRNZQ1iquwhto6OyOpWZ2qwvZa6EDpmV%2FAVr5SAdLIqguDmjQVGDRucqOvqewUuqmu8RjvB9Gk44TGuvbdoCcqeWjfttiNdF2geg2lsc1uSP%2F66SCqGfhjLtUdkCJVeWSn3KEoEZDFSwfYyXL2%2FNA0b5t%2FnDBDAF3856pZyAhgK6pkewNIrWBh9NS2GAyq%2FuU8UlalleTqVKCSV5zCh0fDEBjqkAfdOFFmtvW6n6E6FsnsblZUr6nWdRNmPcdyWINyFjxqAtvKbRrEze8wWizXtJx34i%2B%2Frx2DLiiC2N98545vxZ2a4iA29%2F7RaBvDKIi0pXpz2asaBoAwOy3xSjViZRnzmbw4rXheSKhoHK2yZAll3PS%2F1vdBFZdM9TZK%2FfGpw3YLqdUXju%2BCQ4Op9IMkxqZObjsHMTKnpSkNiONYhnVwN4sYxCrSe&X-Amz-Signature=5e0dba6a86690777f92b0f8e03b0c575d591c96730755dbffad3488752ea7f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLWYJ6VF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEWn0EAFxZ%2F4gHHvuxCnhTiooijiUhKwP%2ByuRPwycI2AiByAOZKaL7z4YDKkGb%2FNK7Dsn7OV844bhP5v1740sOW%2Fir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMQxXuN%2BmE9vHopJV%2FKtwDpFKp3J0o%2Bp5MIvRakZhsBx3Fkmf%2FkzNVfa7Dqrw%2FTDTAOc8A%2FJCSMb4WMrMdKUYBlMkv2KdzfpKxX5XSCcUwMbqduQquLpAlRhHkvNOLpYmLWls3oPoqdqhRhTU%2FFw7U1EVHOr900GD7Jc4DNgLIB9rVfz%2Bk%2Bt5J5qBFhhVvgRZMuqTQsGDgrwgO5xvdxmbMg%2BhwUdfPNKcEOjtli3kQNGulNiY%2BwykiDFAd1JCwPf99mVZn4%2B9B6CLYHXkI8lLTSZjTeMgDJI01vDMSYc8N6XjxahejQUsRJuwxMhwAPS9bxDwwEtSzCO2TUbEU4ZddV9WSBE%2FtZQ%2Bkco8iz8Ci2qOhJbVjlcnp1k7yASGz4L3RoUaE8VNTy2MsJVP%2FT5uxmGCLBacmF2N3kpEoO3cPdgnKwLYLj6i6re9XBU7F4hw%2FGG5v5reCO6lMq%2FZp4zanPj5xDj1zU070KrbFTE2GQW6t8nPAB4k1mYmyE7ZNZ6mv0h%2FZWRYNmJhxhbqSCWL28HicufVIjlx0BCGX4KORpRK1rus%2FSnzqUiYKC8qU%2Bek6L5g07lxwK5h80kVkUJy40L3SvU0j%2FO2xlmeNFI3e6CryKD4ftvEdIb8NCwM1t9nLQM6Dri8FHdrX%2FIYwytHwxAY6pgFYMn7BJQ3aTDYTcBF7jZGuY0fzF6f43nZ4xaWiZRzfCI0gNTatC1YqLqbJ79kXVbx4hox%2BORRbcSty9dpRp%2BTxJOQZqopttEncnG00yV%2BP4awcke6VSlU%2B45b2xTqK3b1pm5WDMuKxEV8JyYpDe4ZEeXzobITJige7Hk%2FE8poPmVjhOqiyqME7RSElQhJ%2FpiW%2FQynLEZ0mCPH7KvedJBD%2BgfqRiVP7&X-Amz-Signature=8c186eca982f2a7492698bf1d593e2ce151e776fcf85c9b7a5583dba527a08ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF67Q65%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe3MGiZyMIEwzzxQ2G2Lxfkt4lyC8p21tSbQ0BKD1wMAiEA8fKPgRs%2FawrdXLCZyUh53QDHOXHx9SfibTsFI7mIYUsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDWXtQRAJyKVryiX2SrcA2nwn%2Fn%2BHc6edHqjM9atlxUjgKbg3UFtofw1CEU5Z%2F3EKuprQh7K1QfCu9gK3gaaCWJC012hV9odbP1pyU1U%2FHRNeCADLCll3JO5ikK78pAL9KmEF9emjXFL290iJapR8ntKJMM7HQ5UKlrRUey%2BdHzYKsn%2FTVDDNN8sUumdd29GEJX7ndVlV4Ydungybti7m%2F7ELvRwAtsMronPMoTL%2BpaqnEpm34%2BnVNS5CBVYuzxGRFVsfAYh6qdWTkfpy8PZ9YWY5TZhUnzFtzRSgwoukIAOias70liWJ16fr2KxRlb5aK2fY3%2BXOsnh%2B8oBtm9%2FEVOEIPB8tLQCI5qxQjJ0cZ4n1FuLmrXu4zYnMxX96wMDPNINdZO0yKP7PGRgq2wgeGn8esi0M%2BbtOBN3jGQWtWJYoELwmFxINvxJxpUXI41KVo91JjROu6seezxD88eSGPpEOT9BS5PQXouG4042dwMz%2BAGmqBJFtAtnsnY7bVTZuwrh57l%2FWegZSOmbdKd8jjbxKRXHS3rITMvEGjJlujtQ29eCpYVfsGj3Q9UAwcx%2Fy8rX%2Bd6MNNfQaLzHagqUkiL%2BUHmb0awWnkRYts4QebUB5Tu7B9HXgF6Bjd2bc8omthcOSzWoIih%2Fi7EsMPTQ8MQGOqUBt5eOb2A1WGgwEN9Rm2xnQUTXfz5%2FLeOqBjk4JL3XE2DOh5O5mClo7FKJb%2BiBPMzm13pYbLd9Yeu3l7IVrjnLuRoGQ6HoYakY6ZPc0RmdUMcEmeBBUYQfP5KmSd7MzjFXoOPMorCqaKjKUvrYI6ok0si2tGjmnSIMuPkix%2FcMY%2BOcH1By%2FgMW4mDz8Hkg0Ew7BzY%2FfHNK674uggWfmL%2Bh%2FBLxzvd7&X-Amz-Signature=441e0125786637893df248d113f1035ca7701158e9423baebdbbda3163f1a0a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBFT527V%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYX%2BBqmjj0cpOw1yC6xmlGI3c8%2F7pdZMtLexPdEXbG5wIgL63JokeyeSsdMjmqeY4s2Vlc1vytKQl2y3B7UytNNeoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDCrYSwq7mQqIMMT%2F0ircA1KtbpLKKoLPo%2BdGCWlOoKZbvu45OPxzef3eVr6dFtVuPVYHZFix9BO7M7AUWe4r3Dz3qlpmSOOtxKVWyySENx1BA3eP14Jm6QkIfC2MJz6PWdoVr9898rWUZBzHG89Gg1wa30Hg40FeFijjbSsUv9YmC7mqZW%2FjXUU7mY9IIcPsStxln2x2JxTcP4vArEO9iipigC4H9zK9%2Ft79G5Ye%2Ba1%2FaB7YV0FWhuVdnlZkk8KwDpq11UpoeKp1RvyAKr6Ru7eMyqGqph1KZSv2JhyvoxRLvHSh2hKWOMfzWGVRt5dkUW3Sy4jYjk0JgtvgCCCSAvhdVBQauxwxOvVgxpBxV8ofIqF%2F7BihyOv5y0tRq71gr8IWCQeAj2g7vfyoQXjkaPXrHxoY829cOv78iPRCIV9Gs2CD1olPdPZPT2LnW%2FBXxSCa5wRcaryPvZtNABJgByJtMYfVAwrBVbabYzhmNQuCk6kRAoD%2B67XJdhFe9E6beu9l7W5gLcy7rQ56hca53CkIkHkDCpETeZcHXdahYr7ObA2bLDMy%2BlPQMOKqNsZ3olXKJtYxOrcIklaGTQ1nRVmcImgcnSQGwZfo%2F5FyguKtr0akx%2BTnzdBRYgV%2BGv69cggOr6KOhhE7iHL8MOTQ8MQGOqUB7lTdV4nHe7TwfQYErSSlpqer7AKgb%2FNcqUSwn9mY%2BYSC7ANE7s2qhg3YHRy%2BNhYfNJ9xkcbdLdQNxSgv9ufRartuZJDC%2BRcW0jgWAYVAmzDrqoR7RuWAhmJTMAqVS%2FU9he6DFeDCtAjFBLhnw%2BeFDvohLQ%2B18aNh71LURA%2BvtE33lj0QoE%2FJxf4BwAHT7gmo6yWf3yIXyFoeX3dGvwgYrX5vntUm&X-Amz-Signature=8dc3c290985fcdfc90ff28e651efe0fc72b9d22dd691745af63ccd9b1fd0c80e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF67Q65%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe3MGiZyMIEwzzxQ2G2Lxfkt4lyC8p21tSbQ0BKD1wMAiEA8fKPgRs%2FawrdXLCZyUh53QDHOXHx9SfibTsFI7mIYUsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDWXtQRAJyKVryiX2SrcA2nwn%2Fn%2BHc6edHqjM9atlxUjgKbg3UFtofw1CEU5Z%2F3EKuprQh7K1QfCu9gK3gaaCWJC012hV9odbP1pyU1U%2FHRNeCADLCll3JO5ikK78pAL9KmEF9emjXFL290iJapR8ntKJMM7HQ5UKlrRUey%2BdHzYKsn%2FTVDDNN8sUumdd29GEJX7ndVlV4Ydungybti7m%2F7ELvRwAtsMronPMoTL%2BpaqnEpm34%2BnVNS5CBVYuzxGRFVsfAYh6qdWTkfpy8PZ9YWY5TZhUnzFtzRSgwoukIAOias70liWJ16fr2KxRlb5aK2fY3%2BXOsnh%2B8oBtm9%2FEVOEIPB8tLQCI5qxQjJ0cZ4n1FuLmrXu4zYnMxX96wMDPNINdZO0yKP7PGRgq2wgeGn8esi0M%2BbtOBN3jGQWtWJYoELwmFxINvxJxpUXI41KVo91JjROu6seezxD88eSGPpEOT9BS5PQXouG4042dwMz%2BAGmqBJFtAtnsnY7bVTZuwrh57l%2FWegZSOmbdKd8jjbxKRXHS3rITMvEGjJlujtQ29eCpYVfsGj3Q9UAwcx%2Fy8rX%2Bd6MNNfQaLzHagqUkiL%2BUHmb0awWnkRYts4QebUB5Tu7B9HXgF6Bjd2bc8omthcOSzWoIih%2Fi7EsMPTQ8MQGOqUBt5eOb2A1WGgwEN9Rm2xnQUTXfz5%2FLeOqBjk4JL3XE2DOh5O5mClo7FKJb%2BiBPMzm13pYbLd9Yeu3l7IVrjnLuRoGQ6HoYakY6ZPc0RmdUMcEmeBBUYQfP5KmSd7MzjFXoOPMorCqaKjKUvrYI6ok0si2tGjmnSIMuPkix%2FcMY%2BOcH1By%2FgMW4mDz8Hkg0Ew7BzY%2FfHNK674uggWfmL%2Bh%2FBLxzvd7&X-Amz-Signature=d3fe76d7a5dc13c6718a208d5f5817933e293d52ad669260586eb51e34c05ebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3H63OVZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxgdBLOKyxZax6I0tcMtCLqZwdkedh4HyxIGkREVLUpgIhALrKDhLeWPekqRFZgCIgTUo941OtByQAMWrTvv7urksSKv8DCCcQABoMNjM3NDIzMTgzODA1IgwDdPRwtgwb4LHf8H8q3AOFYQH%2BOtWAHOAfL9yFw47UJCwxVqpWSe456XsHLL8C4rJHHecymJWqA3dIUtrlVbFnbUIUkbp02bWIMh827S0rj9E7IcUm%2FGfc1bbvyoWyEJyYpKTKRPl3T4J6c4LNoxNiMrnj8jxakmMT9cWhj4bd8xAADdkjxZ013XgJkkapv1Z01jxKmJOWWwkQ1jopsOLri%2F6Nvr6ZlCVwojmNUojixyeStaXk4v0zGrkLbWgo%2B9n6gmmcPH4w%2Fzfr2jmUdbQllo9ENkamHz8Mgm%2Fi9TCFAvjlqVDFOElWiCqd0w4rxu4f8VbKafIKLV6VtF9TIH7gEZPUeJy2B0wfYW1E2nVU%2B9WnpNrmvbF0QlzVYja4TLlSIKvG0mqwg9wC7zl2ZhK%2BWULclPyzvzgYEXlqgX3zfIJ59V6%2FMmhdObVpD1eYsAkKgh4IFQVjo8sCLGRwSiY4IloZKT2w2O6vFD45oP8EPW3GeTLmf%2BrFBJN7Kd5zcA0H981MMdKWokCfqDAmSKjE8OTQmgcjPhmu2qEO3sm41q2YFYBV%2FdW34I2uDuSyJIbsu1vgExP2w2ponXwhJdEud5uorKFg%2BJq1uhk9dEN0UBLPHQyznDar432%2FBG9XI2jaDb0%2B%2F%2FFaVRSlGDCI0fDEBjqkAaqimqyag1l1pPth9KGkX3QSwwVHt6FDCttnR8v7zN18DK4q5x7%2BvZYKsvrWNjOmH57brk4x5nadnVzI0E6P4dd8UzFjNrT0955DQit%2Fcy23w8ReWIQlQW%2FJaLukOoZH9vdNC%2BeTLMs0UesPvzxOQ52p0oYyvFnFyefShsYhlq9QuytUy7ZZMQLmE11eUIWNiu0SfO32DF91i%2FIA2lVeyPXN2Fku&X-Amz-Signature=6c0f0f778b6559224806b2da3e0eba7ef3921b6cf86fd9a60f52682f0657a10b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF67Q65%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe3MGiZyMIEwzzxQ2G2Lxfkt4lyC8p21tSbQ0BKD1wMAiEA8fKPgRs%2FawrdXLCZyUh53QDHOXHx9SfibTsFI7mIYUsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDWXtQRAJyKVryiX2SrcA2nwn%2Fn%2BHc6edHqjM9atlxUjgKbg3UFtofw1CEU5Z%2F3EKuprQh7K1QfCu9gK3gaaCWJC012hV9odbP1pyU1U%2FHRNeCADLCll3JO5ikK78pAL9KmEF9emjXFL290iJapR8ntKJMM7HQ5UKlrRUey%2BdHzYKsn%2FTVDDNN8sUumdd29GEJX7ndVlV4Ydungybti7m%2F7ELvRwAtsMronPMoTL%2BpaqnEpm34%2BnVNS5CBVYuzxGRFVsfAYh6qdWTkfpy8PZ9YWY5TZhUnzFtzRSgwoukIAOias70liWJ16fr2KxRlb5aK2fY3%2BXOsnh%2B8oBtm9%2FEVOEIPB8tLQCI5qxQjJ0cZ4n1FuLmrXu4zYnMxX96wMDPNINdZO0yKP7PGRgq2wgeGn8esi0M%2BbtOBN3jGQWtWJYoELwmFxINvxJxpUXI41KVo91JjROu6seezxD88eSGPpEOT9BS5PQXouG4042dwMz%2BAGmqBJFtAtnsnY7bVTZuwrh57l%2FWegZSOmbdKd8jjbxKRXHS3rITMvEGjJlujtQ29eCpYVfsGj3Q9UAwcx%2Fy8rX%2Bd6MNNfQaLzHagqUkiL%2BUHmb0awWnkRYts4QebUB5Tu7B9HXgF6Bjd2bc8omthcOSzWoIih%2Fi7EsMPTQ8MQGOqUBt5eOb2A1WGgwEN9Rm2xnQUTXfz5%2FLeOqBjk4JL3XE2DOh5O5mClo7FKJb%2BiBPMzm13pYbLd9Yeu3l7IVrjnLuRoGQ6HoYakY6ZPc0RmdUMcEmeBBUYQfP5KmSd7MzjFXoOPMorCqaKjKUvrYI6ok0si2tGjmnSIMuPkix%2FcMY%2BOcH1By%2FgMW4mDz8Hkg0Ew7BzY%2FfHNK674uggWfmL%2Bh%2FBLxzvd7&X-Amz-Signature=2a12c8f19370323cbde64ff9bce6e1e140497beb0c3d1f2e528dbcf41a0c39fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNKGEHDI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtYFgNHZUHmQSdggBAXgY%2FZckJFA%2BqnWTTS6Vj8d1OkAiB7zV08NoovyRYaYFboQlG5QrzzUd211IKq5GdagPA1kCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM1IEk%2BYzeKTT%2FVls2KtwD77PzEUTwBXnuEV0WInucXU0rEYXlzMuBHuM2I6VbIbswvweAZ2J%2BYe1f0w9xzbe980OiPPpabIXQdvoZGczU8TPPCWzcTzHGN5s8Ht6eaH%2FyQqdsTA2zUwB8ldS4FlsEJbzVA8ABjhaOu3A4ODIHXbmCxkRqKNqQlJTvT4Y55QjIDx7eVH4PiD2okqoHGU1GAynPKi4qO%2BtGGx2WtevxWVbqcewvYUI4uPEOVIroMIDqZc%2Fyxfqf5WbjDEDYzfU6IMrFKB%2BGqHRmL%2FSiPpJ%2F24C1v0oQqyRYM0QaeWjQjkLKh%2FWKlvtnTgs0Qu6Pnc5O%2FL8D0PxXJsqDhg8j%2B4rdK4acCGGFopdefmG454caRCa9QVSCqMdRfCH755A8LHdzyBPMt0ESOggqS3XFrWKIYnhQkVENC2CHxs%2B%2Bfsf2fmdVxiUAZvc0wzKFAxQwyOehgCyOUTDyFnns8IoiGx3jA7fZncb1FGwrI07Fe%2BS2KQt6L8Rng8TPbkD0d5j3JAPcqHRwR28P%2FjBDGp5HaYH%2Bnd4UwU3u4k4EGdxNOzr8eg4Lv1gx0QhkjwVlBr8VA6AJip3NUaQ5bkA%2FupRpBuVcfkUy50lcXV3uzkIj2aQQgrJFtvAvsENOf3ruJJUw8dDwxAY6pgHaFsk%2Ftn5NUKOCFfmWq2GxHqPoOvnee4YWnKGwOQ9vLKndmDnc1QzIUNE6ObbALm%2Fv47xKfY23jh7y56ULIu4P709b%2FBsizMu6ymQVKyU7rihkiqZ5VmJuM%2BiOqPvNq4B2abW9fJX0EgjSy%2BVndvjf2d%2FK%2FWB1skTYdSyKdsxuwX7RB%2FgJBW8zC1EREWw0wXbMP6Ixxds9H2iekYqYf8yTuaqowLbE&X-Amz-Signature=30533a98e861003594566eb4d4d78be6f14b36273c5a8d23536ef3d688d457c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF67Q65%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe3MGiZyMIEwzzxQ2G2Lxfkt4lyC8p21tSbQ0BKD1wMAiEA8fKPgRs%2FawrdXLCZyUh53QDHOXHx9SfibTsFI7mIYUsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDWXtQRAJyKVryiX2SrcA2nwn%2Fn%2BHc6edHqjM9atlxUjgKbg3UFtofw1CEU5Z%2F3EKuprQh7K1QfCu9gK3gaaCWJC012hV9odbP1pyU1U%2FHRNeCADLCll3JO5ikK78pAL9KmEF9emjXFL290iJapR8ntKJMM7HQ5UKlrRUey%2BdHzYKsn%2FTVDDNN8sUumdd29GEJX7ndVlV4Ydungybti7m%2F7ELvRwAtsMronPMoTL%2BpaqnEpm34%2BnVNS5CBVYuzxGRFVsfAYh6qdWTkfpy8PZ9YWY5TZhUnzFtzRSgwoukIAOias70liWJ16fr2KxRlb5aK2fY3%2BXOsnh%2B8oBtm9%2FEVOEIPB8tLQCI5qxQjJ0cZ4n1FuLmrXu4zYnMxX96wMDPNINdZO0yKP7PGRgq2wgeGn8esi0M%2BbtOBN3jGQWtWJYoELwmFxINvxJxpUXI41KVo91JjROu6seezxD88eSGPpEOT9BS5PQXouG4042dwMz%2BAGmqBJFtAtnsnY7bVTZuwrh57l%2FWegZSOmbdKd8jjbxKRXHS3rITMvEGjJlujtQ29eCpYVfsGj3Q9UAwcx%2Fy8rX%2Bd6MNNfQaLzHagqUkiL%2BUHmb0awWnkRYts4QebUB5Tu7B9HXgF6Bjd2bc8omthcOSzWoIih%2Fi7EsMPTQ8MQGOqUBt5eOb2A1WGgwEN9Rm2xnQUTXfz5%2FLeOqBjk4JL3XE2DOh5O5mClo7FKJb%2BiBPMzm13pYbLd9Yeu3l7IVrjnLuRoGQ6HoYakY6ZPc0RmdUMcEmeBBUYQfP5KmSd7MzjFXoOPMorCqaKjKUvrYI6ok0si2tGjmnSIMuPkix%2FcMY%2BOcH1By%2FgMW4mDz8Hkg0Ew7BzY%2FfHNK674uggWfmL%2Bh%2FBLxzvd7&X-Amz-Signature=aa1a63e68fce4a142e29482fa0ebaca823f234668efbd14e6db42b6756366b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL5UPZCT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiFVUo3RHRIFJvnBfyFGx3jBIFv2GcXiSJ9b1IeCml4gIhANu%2B2z6oXqgp9pYtn0sEYvf5FWUDz37G98d%2BNGc3pQPPKv8DCCcQABoMNjM3NDIzMTgzODA1IgwSs6Mm8sjcDOg%2BSLoq3AM0IqwK6gY8w4zqwDOdggiwye%2B7rsEQhNf9rvxtZknV6F9xVUWOg331GhZiR01Kmu%2BPLNqfjHOgYK8B6yAaxOW7f5NvLXt8%2BHMJXUYArHLqEjAEmrfAC8LaIjm7lHiMCwD7OGxVfJlg0zxDzHzyBSykvgWl7bP10Atmg%2FMI%2BP1TQHB3N0CzRCvYJaQqkClxlbyjRK9g1iIMtOyBzgGKmj%2FGpNd68ZU%2BXKgVsTrTJSDwhEClKdpUo%2FR9puZ%2BWlk6fCjTMrit0vIkf9PL9kyaB9ZXrginR4s8j7PFq%2By%2FaPB8JMIVdt%2FPQB%2F0jmwcLiIXcabj0gg3rehVgQtZzuUcX4vv0qC0dVtAILEXhYqXhTEHQqc2LgTiwDDNnSpKm8XJrJR5F28QQiZKWj1kZc7SMAWo5E%2FYYNaNmbsQ3tpqwrHiqmf2yGd4PbzDp9h9L%2BqnFTKvD%2BQ%2Bck%2F%2BeDbBWKf8qo8bB4WA5MsPTaaZEf5S5bldC3jf8M%2F6ykmYEYqo2f9vB0xqIsyEqGqEIocMpt88z2jklKTfPIdXEXBJFYLJoNjzmFzAvCSPPNeY%2BJSJyHEMY0loe1XjA3Eudq1TXBeKYi00l9FxGWaSTRwNtAtBmF%2Bf%2F5UA1o2mGVs3iDVAWzC40fDEBjqkAaubJ5lLqMe3%2Fv24mJHPj7%2BLGcVeW2lchrUZOIx93UVBCN7NFpZ4rxY%2BjZ%2FyafIDm2zJtUABBe%2F7C%2B%2BaqRTpwtYA75HQRXKmi3da4qeVLEl%2BH66iu2MdCZdXW54t%2Bq2c3GVhZQctrTgj7b4iNddDgWgGRVdQFhKPUOyM8Il8krFqPSq5MmWTPe8bRM4D3EZBLjfEf629cczYh72oLM3jy0s5%2Ft9o&X-Amz-Signature=4ff8bbf13418a08edab3365ec6c272847c5efb10048b3c6738004d16fc6245b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7VUZGKX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXv%2FCVYQHu1g0T%2F4767tZjkYHxlmi4BpC0Nk3nk2gEBwIhAP%2BWcVKCOp4CfxMMJLByAN1LQ8lCXmva9Q3h2LWeYMNaKv8DCCcQABoMNjM3NDIzMTgzODA1IgwOHWE0FA4lMlFo%2BJUq3ANT75iMrDh5u2RQ%2FCXoA9j5TKjOjBD%2Bux9y6HWPrqfGz4w%2BGpSnFyspTcvetDZnZrdP%2F7zXRYQjFd%2FAUoNY7B7mO%2FZD%2BHQv2Q0EpajHUFN7rsRGb5uK0xlHfHy0qf%2B839o1THA%2FH6SyyrfJMNd8RHShcxP%2BABXKwm%2FYzlv7X26NZ7pItU%2Fdb3CC%2F7wFz%2Fo3SrNzIwQhx3nJ9OxWCg0dYCrdrRHHU7LJcoVgPN8Pg8XTHWQIV%2BEk2EGAYsjVnVZ3cZaob3j4CH01iVgwHb6H1WbOy8RctmrYnwQKxYTA8Ef0E0gkBo9F%2FNKypKkKKIEPG1wTbHlHyGAUfBSBZTI06mVo%2FmfWKuKWx896JoFbgrdnAJLiXuesudsZBZQTotYMN2%2BGhSoXddTVOFUkJhx05zhTxXXnrXuFNVAdrB%2BnuHZLSjQ9c8HJ8D5mx0DaGE7GkjOF%2F591gwRu7uvxlqP5layb6KIwngAH2w6xIapJJ1lztgB1Q21svTUKiU9T062rZe9hhLsLqbvflsnmqtj8UHxm7bVWC2Q0YW6XhViELMr%2FfXZbjiGAKCQjz4Sj5hXOAD4hcNXKZZErxFOvf2orcSwGO34z39fJ%2By4EppMRcEkFWxAJ2%2BC0EvKHDmtatTCs0fDEBjqkAUgMyTQvrp893Zy2UlqbVD6CFjErqSepu8kM69aPwmp335OEZ92l2jP76U0NuOWbGD1t0%2FNhrKV7pIebQIchKHdmKwZQxjBtJ1LMMnEVFooUiteKfk1ZWKPKZXF7%2BnInMwegH2HhlFLHgqZB7FNzgfqZiJ9VjeRIjqRH0BK75pJo3hQ2vypIyC5q0U4vWLWFJfdMuCdCNUtB4Ens6d5rbQUJq0hV&X-Amz-Signature=b868e1803851ad4b90088afde01e674f11079f4d825811096b0b4a9e7c42484e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PLKS3DH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnYxpZCAuUTGCjzJPisvt6RTA9UCOJ9yFMtpPaaxzrXAIhAKLoBiM2gnDiFJvk2uDraijClzJoPSIplioXMYxWeSb0Kv8DCCcQABoMNjM3NDIzMTgzODA1IgyIFN6fEHy1ItB4wt4q3AN8hpqR1sOFVLMGcI3PJqIaUZb8JasbQ9zzECvB0LkpJXmNpK7snwsHSme9XX%2B4QjCvGMOtXV3zPVPe%2BgoZZh0B0UKO57%2Bx3USjdxeTZED%2F5K1QLO%2BcnBW7C1M9Zsbuu3%2B6jNomlAZw8jOWlnkIZQqfoCm4V6YvJse55kC%2Bu78oB73oC%2BQAw4%2F8wrv011pbabxp%2BErZPNS7dioQO17MO1IFN0KYBrIcVYSeVNGuLEO1OxJs%2BQ2P7hSgKFoQ6tNL3%2Fmtt7gUa25ySFNeUYVWBh56czNi94fkhyYVCMTBswGnXF6oMxvbYrFBTni3UB1KM2bDhgy6gM4dITGV%2BqcnlfVZPTcm0%2F7oAshWXjvzvtmO8LI4aQyoqdAG7GZu3PQE6EQHxe564x8XW%2BrTYRJqXSwMFfEIiNF3ABh6oPZC3SbaMqJifOWLow2v4bNX9ChGrtMrlojjJGwEPiNKWyTLpf%2FBGwLlBoXsjyjvN5ma%2BPfPLcygtxk8fdBq9K9Td8SPoIpWS6fBeEpSunMR1wElzDrZSVo7q91wnA9bU3IJF5QZbEq2gHn6mnii1vD891pStesj3nWuYounAI1xMpwfqe0s4w3oqY%2FCZ6gd0qpA%2F5I%2BnQ7dk3f%2BchJ5y3C%2FozDh0PDEBjqkAX4M9R%2BuQTxxnlEf6Tb%2Bqi1Kz99YtrM75AN8Fr5YY%2BI8q0m%2B4D1zR6tp7MaOseLJEMqRFvWerwQsKazSF55QaAr2Dq5CQJCIE%2BooDT7V7oqgAAm4dTebYvWuS4qH4TOth0AQwFUk2MGJcfWB764GWR5j79usvuouJD5BxE4Gk6gB0%2B9sCxkHIgaIXJk5VwcSekardHAWvVIi7WWMyAkcU6a7%2BdrZ&X-Amz-Signature=89d68788f01e20725ece2da6537f1d1c4bec2b0dabd37011cc41222e188aba32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGRAEAVF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdG6UnSf137ms5V26U7Z0cPuzGeVChkvJzdoyzg0E8BgIhALt2fra8NKu5ursQ0kV8f8zHG83ULv3nrE5ADBnioil7Kv8DCCcQABoMNjM3NDIzMTgzODA1IgyPjKphsW0uRxn4KJYq3AOAy8h1XXRotWCX5ZgugzOhKQZxBKdsOG9bFHzusdDVRnBpzjm7C7L8NdvFx0JVuwOI8zxhA0%2BxKKQGfEkXkZIQAUTFOU4zLAYLeCyrqhmOl%2FDUX4LqUucs5sxFhy5Dar6K8zdPwtn2JRkaBZy5uLyae4Ff%2FQFI%2Fjj1tdArEDoMwUbr82yNnYJW5NRCnk32SBRuZI8H86oPNS14PQ1xVs9P1jxWfPe9fNphxvU82a9yCXs%2FQaQljlp8ux8BCOptDFiHqh%2BIUoXQFa8vom7jGgj3CJk7kJ89eXhIv7MxjvIzMT6%2BF2xeBmJjMp8tPnx7%2BntU5d9r4Gho6VsNtmVKmxtQsj9L5pFf8ccHQ39W1FMmBVwewezjrslB3JrqWzhmUy4%2FbZJVfTi%2B%2BEJ7xvUjAiIjGcjquMrE0J62ReM7sTaxWywNlMgleO4JSXXrjh4h%2FiseJf49zikusF5BqWUH0nkTimPHKB9As3XWb3hPHcTpZ%2FBXP5b3OpdegnXTpohZcDk4fvHe3tdzWxTPYth78uaqheUwzdZwPButkzuoaCmEYRrWiXfwdmI4wky%2FKHpHLYWTSwwotoRQB%2BmSU8dYClSkLsYdw%2FTK8GggixJpn6X%2FRa%2B1meYyopBX7S539zCp0fDEBjqkAfKkQPpEW23ZL8DNirON9MCQQNIrnNOP0xmDcldDh0mdaKXnpqeVGpuGuv78P3W7GWwppk7atzLJZ9CIfrcGESONIb8P03tQIONt3gU8SL6L9K6FXDty7WEDBtdooKBf4NE7Jr%2FasjtPYqOug9hx0lY%2B3k3rzGXaBhMdT5eU64%2BUuRjN4Uphvj%2FgnRuYI8G8vcY4tfgRPyDyEOP9mIUqvegTR7Ag&X-Amz-Signature=22e84a752d37e8343dd397515d2839078e0e89662af20ee2a101c0370d7d9bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXMYEP3E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiZgmhXkMsEO7dGGIp%2FafGPC6KISVNVPDUkWK7EuXyhAiEAl1vDuBWvosr2qLVU9W2%2BHr3KUnpV5ajt5K6ZxIif9bcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDE6Gzsj8Vih%2FLiC8fSrcAybc2F9x0K5%2BiEHigchVHgleHZD%2BKtw7nAF9zMROxJLRsv8S5IrZ%2FdPbaxByrAVHADDxxi7SLWedJjq0oJ8hxzfZxeT2Xpx9JDJKAyRzTLfE8248qwAFRdVcfbm7flvPlyChcWxr8mIw23%2BujjBKOnyuLF53owG%2FUIsH8HLhaGO8jxGs23sAeWCHI0lIPqHs9DgF5oColtgGcY%2FpFIgbxmScwiwW3lFshSi6Im2sC5veb0nS3bd9doa4%2BnCQZn2GlrgY9wUzavEttkWpX%2BST098%2BHiq9Lcfgk%2Bp2douzMWC8ni70M7jFqrlh7Ih%2FtRr5zAsCg9nZv%2BqcbjvlfDccujejLSeRaeKTNtRHiPICM%2BD6slk6WqN5GLKu5JCBG6Ud8YjmjAdgv%2B8OPcF78rhvvDq0wrK5mBWcoFf1WRWeCAD4dbxIRAgDBzJRQ9uG6xFX5EtB1j0oMRGHXQ0om9nWjCicnf1MDSpHGG784uq%2F892UxCs7C%2FaD8Gg9KxFlIsZy1IdN6Ni3zr2BsQRk6s3p%2BxjMUfjDOq%2BeFW%2BuMtcS%2BVoO6x4L5owFQaFeBew8bPbNBae2EP5cpopld3ABxbZ8gRaD4IDFGINLV2jC%2FrO54QXq9oMIiea3ZAEzeofUMK%2FR8MQGOqUBXFYSaS1bZamLIfBkBLm3Shw3T1lEhiSedHNappPTUIzUgsmSJ9E1SU0XPYuA%2F9lm0Ha6yRQs2uqtkHykAzxZqQE66AlGhh1bQ460JdGNSwbN7OjziSDlL4tSZNPcjORQDy6maiHPdOn0BDE9z%2Fd1hFnDIQS6VX4Xi0imFkli4tWfs%2Faoh5rQZ37g9j45o9ulDQLmgg8h66NDnqyXKmE0Bl3My30O&X-Amz-Signature=5a123be756cf54f5ceda1eb7c508db133a407fcfff57f2741d34d103d4c31b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF67Q65%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe3MGiZyMIEwzzxQ2G2Lxfkt4lyC8p21tSbQ0BKD1wMAiEA8fKPgRs%2FawrdXLCZyUh53QDHOXHx9SfibTsFI7mIYUsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDWXtQRAJyKVryiX2SrcA2nwn%2Fn%2BHc6edHqjM9atlxUjgKbg3UFtofw1CEU5Z%2F3EKuprQh7K1QfCu9gK3gaaCWJC012hV9odbP1pyU1U%2FHRNeCADLCll3JO5ikK78pAL9KmEF9emjXFL290iJapR8ntKJMM7HQ5UKlrRUey%2BdHzYKsn%2FTVDDNN8sUumdd29GEJX7ndVlV4Ydungybti7m%2F7ELvRwAtsMronPMoTL%2BpaqnEpm34%2BnVNS5CBVYuzxGRFVsfAYh6qdWTkfpy8PZ9YWY5TZhUnzFtzRSgwoukIAOias70liWJ16fr2KxRlb5aK2fY3%2BXOsnh%2B8oBtm9%2FEVOEIPB8tLQCI5qxQjJ0cZ4n1FuLmrXu4zYnMxX96wMDPNINdZO0yKP7PGRgq2wgeGn8esi0M%2BbtOBN3jGQWtWJYoELwmFxINvxJxpUXI41KVo91JjROu6seezxD88eSGPpEOT9BS5PQXouG4042dwMz%2BAGmqBJFtAtnsnY7bVTZuwrh57l%2FWegZSOmbdKd8jjbxKRXHS3rITMvEGjJlujtQ29eCpYVfsGj3Q9UAwcx%2Fy8rX%2Bd6MNNfQaLzHagqUkiL%2BUHmb0awWnkRYts4QebUB5Tu7B9HXgF6Bjd2bc8omthcOSzWoIih%2Fi7EsMPTQ8MQGOqUBt5eOb2A1WGgwEN9Rm2xnQUTXfz5%2FLeOqBjk4JL3XE2DOh5O5mClo7FKJb%2BiBPMzm13pYbLd9Yeu3l7IVrjnLuRoGQ6HoYakY6ZPc0RmdUMcEmeBBUYQfP5KmSd7MzjFXoOPMorCqaKjKUvrYI6ok0si2tGjmnSIMuPkix%2FcMY%2BOcH1By%2FgMW4mDz8Hkg0Ew7BzY%2FfHNK674uggWfmL%2Bh%2FBLxzvd7&X-Amz-Signature=98dae2096c7e9473a1400c7027ac40e3b17cb494311116e4de9829acba36b48f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF67Q65%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe3MGiZyMIEwzzxQ2G2Lxfkt4lyC8p21tSbQ0BKD1wMAiEA8fKPgRs%2FawrdXLCZyUh53QDHOXHx9SfibTsFI7mIYUsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDWXtQRAJyKVryiX2SrcA2nwn%2Fn%2BHc6edHqjM9atlxUjgKbg3UFtofw1CEU5Z%2F3EKuprQh7K1QfCu9gK3gaaCWJC012hV9odbP1pyU1U%2FHRNeCADLCll3JO5ikK78pAL9KmEF9emjXFL290iJapR8ntKJMM7HQ5UKlrRUey%2BdHzYKsn%2FTVDDNN8sUumdd29GEJX7ndVlV4Ydungybti7m%2F7ELvRwAtsMronPMoTL%2BpaqnEpm34%2BnVNS5CBVYuzxGRFVsfAYh6qdWTkfpy8PZ9YWY5TZhUnzFtzRSgwoukIAOias70liWJ16fr2KxRlb5aK2fY3%2BXOsnh%2B8oBtm9%2FEVOEIPB8tLQCI5qxQjJ0cZ4n1FuLmrXu4zYnMxX96wMDPNINdZO0yKP7PGRgq2wgeGn8esi0M%2BbtOBN3jGQWtWJYoELwmFxINvxJxpUXI41KVo91JjROu6seezxD88eSGPpEOT9BS5PQXouG4042dwMz%2BAGmqBJFtAtnsnY7bVTZuwrh57l%2FWegZSOmbdKd8jjbxKRXHS3rITMvEGjJlujtQ29eCpYVfsGj3Q9UAwcx%2Fy8rX%2Bd6MNNfQaLzHagqUkiL%2BUHmb0awWnkRYts4QebUB5Tu7B9HXgF6Bjd2bc8omthcOSzWoIih%2Fi7EsMPTQ8MQGOqUBt5eOb2A1WGgwEN9Rm2xnQUTXfz5%2FLeOqBjk4JL3XE2DOh5O5mClo7FKJb%2BiBPMzm13pYbLd9Yeu3l7IVrjnLuRoGQ6HoYakY6ZPc0RmdUMcEmeBBUYQfP5KmSd7MzjFXoOPMorCqaKjKUvrYI6ok0si2tGjmnSIMuPkix%2FcMY%2BOcH1By%2FgMW4mDz8Hkg0Ew7BzY%2FfHNK674uggWfmL%2Bh%2FBLxzvd7&X-Amz-Signature=1aea59cc44ecf7c2af74898a0d826f54bb13a58b277c3b1d102c6c29ca4d4c44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JSNOBH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ZxqDaS90l33fmbX56KOnT5694cpIDV6%2BvtHwePzrjAIgA59gTSEFHAxEKDWFwVEF8aYwRs24vPGapSJ25%2BjXyFYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDE4kVqTN7WtqINFfkCrcA3fF4DcRtXhieT4dJ%2Fw%2BoHq7bF2cuofvV0CQ4dA9dHprLMgK1Vspa5LRb5mc2DLgXMhxnXSvcmFW6sABtMlBITe4%2B1U1u%2F1FUG5RSxot%2F7toCPDjUj2O4GK%2B9aoD9UTf3Jo1n3SDG0yBGBMaqFh9aZIJ3mS6qnLELZj%2B3heCHjvvVncZ5Ala9eDJGlWBz8JpVL9bS%2F8WG3V94C5kSxSfEIBLzueLFpkXt3zoZGgmkwNSpO0CPGF1SlPmC%2BphY%2F6Zgp2e%2Fufg2EomqgCQJB74NgnG2LAwPyPeoq8QOrmEsPblOZmADkf1mT6LI9n2DZWnF0FS1gurNc9leaTdZhMkY4vdJtpzAuLucPyQYK%2BPalMV5IWoCAJMSZMAigxnomPlQY8ZIZYJHJ9%2B%2BQaYfZZ65694TNpPMndH72VR7Weoz5A8dKZlVhjGhurpJ6ERzbu7JVIBAi0T6QRPTVCW4G4BUwxK%2FSpJq1vOaI0OAkQ1a2KyvN%2F%2F6YBTlsmlhm1n9xlNsJOLSR1%2BWhn8VC6O5ZLVg1v%2F4SMlgOkOFWEYdCVLAry204ZcCfoMCBhYOUvFv5s8SzidkGJi7DCrLsW61v69HyTR9ibT%2Fuj6EtOsTELE%2BsUO7w16ZMBrLqHegkGZMLjR8MQGOqUBBNxsxVfW3SQVyhZyEM5uM%2FDBVyxRic66xgyhPLE%2BBQKqmUTnsmNDAUClrUGLXvwjy25pk6zZJVN2x91M6iFtFuhYA70bk1iKyoiX%2Fh0B4MNRiJUXJEsSvBjvNT5CPru%2F0kW4Z2ys%2FrIZpNg7J4lLY5pQMveRrySOn3QxPayrqBnIODnju4DwTQSSqSYSleaq%2F4KCDzzqcelcfrpRjPu808Yfhq7I&X-Amz-Signature=a2c79216fc807023777fdfc5dc698e40759bab9018d8e8451ff473b7ec450c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JSNOBH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ZxqDaS90l33fmbX56KOnT5694cpIDV6%2BvtHwePzrjAIgA59gTSEFHAxEKDWFwVEF8aYwRs24vPGapSJ25%2BjXyFYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDE4kVqTN7WtqINFfkCrcA3fF4DcRtXhieT4dJ%2Fw%2BoHq7bF2cuofvV0CQ4dA9dHprLMgK1Vspa5LRb5mc2DLgXMhxnXSvcmFW6sABtMlBITe4%2B1U1u%2F1FUG5RSxot%2F7toCPDjUj2O4GK%2B9aoD9UTf3Jo1n3SDG0yBGBMaqFh9aZIJ3mS6qnLELZj%2B3heCHjvvVncZ5Ala9eDJGlWBz8JpVL9bS%2F8WG3V94C5kSxSfEIBLzueLFpkXt3zoZGgmkwNSpO0CPGF1SlPmC%2BphY%2F6Zgp2e%2Fufg2EomqgCQJB74NgnG2LAwPyPeoq8QOrmEsPblOZmADkf1mT6LI9n2DZWnF0FS1gurNc9leaTdZhMkY4vdJtpzAuLucPyQYK%2BPalMV5IWoCAJMSZMAigxnomPlQY8ZIZYJHJ9%2B%2BQaYfZZ65694TNpPMndH72VR7Weoz5A8dKZlVhjGhurpJ6ERzbu7JVIBAi0T6QRPTVCW4G4BUwxK%2FSpJq1vOaI0OAkQ1a2KyvN%2F%2F6YBTlsmlhm1n9xlNsJOLSR1%2BWhn8VC6O5ZLVg1v%2F4SMlgOkOFWEYdCVLAry204ZcCfoMCBhYOUvFv5s8SzidkGJi7DCrLsW61v69HyTR9ibT%2Fuj6EtOsTELE%2BsUO7w16ZMBrLqHegkGZMLjR8MQGOqUBBNxsxVfW3SQVyhZyEM5uM%2FDBVyxRic66xgyhPLE%2BBQKqmUTnsmNDAUClrUGLXvwjy25pk6zZJVN2x91M6iFtFuhYA70bk1iKyoiX%2Fh0B4MNRiJUXJEsSvBjvNT5CPru%2F0kW4Z2ys%2FrIZpNg7J4lLY5pQMveRrySOn3QxPayrqBnIODnju4DwTQSSqSYSleaq%2F4KCDzzqcelcfrpRjPu808Yfhq7I&X-Amz-Signature=36406eb371d8b1613bd8050187aaaf56005b6a83f847fe927c39c183725a7ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JSNOBH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ZxqDaS90l33fmbX56KOnT5694cpIDV6%2BvtHwePzrjAIgA59gTSEFHAxEKDWFwVEF8aYwRs24vPGapSJ25%2BjXyFYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDE4kVqTN7WtqINFfkCrcA3fF4DcRtXhieT4dJ%2Fw%2BoHq7bF2cuofvV0CQ4dA9dHprLMgK1Vspa5LRb5mc2DLgXMhxnXSvcmFW6sABtMlBITe4%2B1U1u%2F1FUG5RSxot%2F7toCPDjUj2O4GK%2B9aoD9UTf3Jo1n3SDG0yBGBMaqFh9aZIJ3mS6qnLELZj%2B3heCHjvvVncZ5Ala9eDJGlWBz8JpVL9bS%2F8WG3V94C5kSxSfEIBLzueLFpkXt3zoZGgmkwNSpO0CPGF1SlPmC%2BphY%2F6Zgp2e%2Fufg2EomqgCQJB74NgnG2LAwPyPeoq8QOrmEsPblOZmADkf1mT6LI9n2DZWnF0FS1gurNc9leaTdZhMkY4vdJtpzAuLucPyQYK%2BPalMV5IWoCAJMSZMAigxnomPlQY8ZIZYJHJ9%2B%2BQaYfZZ65694TNpPMndH72VR7Weoz5A8dKZlVhjGhurpJ6ERzbu7JVIBAi0T6QRPTVCW4G4BUwxK%2FSpJq1vOaI0OAkQ1a2KyvN%2F%2F6YBTlsmlhm1n9xlNsJOLSR1%2BWhn8VC6O5ZLVg1v%2F4SMlgOkOFWEYdCVLAry204ZcCfoMCBhYOUvFv5s8SzidkGJi7DCrLsW61v69HyTR9ibT%2Fuj6EtOsTELE%2BsUO7w16ZMBrLqHegkGZMLjR8MQGOqUBBNxsxVfW3SQVyhZyEM5uM%2FDBVyxRic66xgyhPLE%2BBQKqmUTnsmNDAUClrUGLXvwjy25pk6zZJVN2x91M6iFtFuhYA70bk1iKyoiX%2Fh0B4MNRiJUXJEsSvBjvNT5CPru%2F0kW4Z2ys%2FrIZpNg7J4lLY5pQMveRrySOn3QxPayrqBnIODnju4DwTQSSqSYSleaq%2F4KCDzzqcelcfrpRjPu808Yfhq7I&X-Amz-Signature=e215ee124596c2361570fb48d5f814c682b1bddc70a9889edade1e4b01091942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JSNOBH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ZxqDaS90l33fmbX56KOnT5694cpIDV6%2BvtHwePzrjAIgA59gTSEFHAxEKDWFwVEF8aYwRs24vPGapSJ25%2BjXyFYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDE4kVqTN7WtqINFfkCrcA3fF4DcRtXhieT4dJ%2Fw%2BoHq7bF2cuofvV0CQ4dA9dHprLMgK1Vspa5LRb5mc2DLgXMhxnXSvcmFW6sABtMlBITe4%2B1U1u%2F1FUG5RSxot%2F7toCPDjUj2O4GK%2B9aoD9UTf3Jo1n3SDG0yBGBMaqFh9aZIJ3mS6qnLELZj%2B3heCHjvvVncZ5Ala9eDJGlWBz8JpVL9bS%2F8WG3V94C5kSxSfEIBLzueLFpkXt3zoZGgmkwNSpO0CPGF1SlPmC%2BphY%2F6Zgp2e%2Fufg2EomqgCQJB74NgnG2LAwPyPeoq8QOrmEsPblOZmADkf1mT6LI9n2DZWnF0FS1gurNc9leaTdZhMkY4vdJtpzAuLucPyQYK%2BPalMV5IWoCAJMSZMAigxnomPlQY8ZIZYJHJ9%2B%2BQaYfZZ65694TNpPMndH72VR7Weoz5A8dKZlVhjGhurpJ6ERzbu7JVIBAi0T6QRPTVCW4G4BUwxK%2FSpJq1vOaI0OAkQ1a2KyvN%2F%2F6YBTlsmlhm1n9xlNsJOLSR1%2BWhn8VC6O5ZLVg1v%2F4SMlgOkOFWEYdCVLAry204ZcCfoMCBhYOUvFv5s8SzidkGJi7DCrLsW61v69HyTR9ibT%2Fuj6EtOsTELE%2BsUO7w16ZMBrLqHegkGZMLjR8MQGOqUBBNxsxVfW3SQVyhZyEM5uM%2FDBVyxRic66xgyhPLE%2BBQKqmUTnsmNDAUClrUGLXvwjy25pk6zZJVN2x91M6iFtFuhYA70bk1iKyoiX%2Fh0B4MNRiJUXJEsSvBjvNT5CPru%2F0kW4Z2ys%2FrIZpNg7J4lLY5pQMveRrySOn3QxPayrqBnIODnju4DwTQSSqSYSleaq%2F4KCDzzqcelcfrpRjPu808Yfhq7I&X-Amz-Signature=86f2cf94e18485127ba58b46d4453816f87c3b244985588b607bbe102394a606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JSNOBH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ZxqDaS90l33fmbX56KOnT5694cpIDV6%2BvtHwePzrjAIgA59gTSEFHAxEKDWFwVEF8aYwRs24vPGapSJ25%2BjXyFYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDE4kVqTN7WtqINFfkCrcA3fF4DcRtXhieT4dJ%2Fw%2BoHq7bF2cuofvV0CQ4dA9dHprLMgK1Vspa5LRb5mc2DLgXMhxnXSvcmFW6sABtMlBITe4%2B1U1u%2F1FUG5RSxot%2F7toCPDjUj2O4GK%2B9aoD9UTf3Jo1n3SDG0yBGBMaqFh9aZIJ3mS6qnLELZj%2B3heCHjvvVncZ5Ala9eDJGlWBz8JpVL9bS%2F8WG3V94C5kSxSfEIBLzueLFpkXt3zoZGgmkwNSpO0CPGF1SlPmC%2BphY%2F6Zgp2e%2Fufg2EomqgCQJB74NgnG2LAwPyPeoq8QOrmEsPblOZmADkf1mT6LI9n2DZWnF0FS1gurNc9leaTdZhMkY4vdJtpzAuLucPyQYK%2BPalMV5IWoCAJMSZMAigxnomPlQY8ZIZYJHJ9%2B%2BQaYfZZ65694TNpPMndH72VR7Weoz5A8dKZlVhjGhurpJ6ERzbu7JVIBAi0T6QRPTVCW4G4BUwxK%2FSpJq1vOaI0OAkQ1a2KyvN%2F%2F6YBTlsmlhm1n9xlNsJOLSR1%2BWhn8VC6O5ZLVg1v%2F4SMlgOkOFWEYdCVLAry204ZcCfoMCBhYOUvFv5s8SzidkGJi7DCrLsW61v69HyTR9ibT%2Fuj6EtOsTELE%2BsUO7w16ZMBrLqHegkGZMLjR8MQGOqUBBNxsxVfW3SQVyhZyEM5uM%2FDBVyxRic66xgyhPLE%2BBQKqmUTnsmNDAUClrUGLXvwjy25pk6zZJVN2x91M6iFtFuhYA70bk1iKyoiX%2Fh0B4MNRiJUXJEsSvBjvNT5CPru%2F0kW4Z2ys%2FrIZpNg7J4lLY5pQMveRrySOn3QxPayrqBnIODnju4DwTQSSqSYSleaq%2F4KCDzzqcelcfrpRjPu808Yfhq7I&X-Amz-Signature=c0d3f3895dc13040e586b68ad3452ff78773ba249e7bf262412b1e226d722ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JSNOBH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ZxqDaS90l33fmbX56KOnT5694cpIDV6%2BvtHwePzrjAIgA59gTSEFHAxEKDWFwVEF8aYwRs24vPGapSJ25%2BjXyFYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDE4kVqTN7WtqINFfkCrcA3fF4DcRtXhieT4dJ%2Fw%2BoHq7bF2cuofvV0CQ4dA9dHprLMgK1Vspa5LRb5mc2DLgXMhxnXSvcmFW6sABtMlBITe4%2B1U1u%2F1FUG5RSxot%2F7toCPDjUj2O4GK%2B9aoD9UTf3Jo1n3SDG0yBGBMaqFh9aZIJ3mS6qnLELZj%2B3heCHjvvVncZ5Ala9eDJGlWBz8JpVL9bS%2F8WG3V94C5kSxSfEIBLzueLFpkXt3zoZGgmkwNSpO0CPGF1SlPmC%2BphY%2F6Zgp2e%2Fufg2EomqgCQJB74NgnG2LAwPyPeoq8QOrmEsPblOZmADkf1mT6LI9n2DZWnF0FS1gurNc9leaTdZhMkY4vdJtpzAuLucPyQYK%2BPalMV5IWoCAJMSZMAigxnomPlQY8ZIZYJHJ9%2B%2BQaYfZZ65694TNpPMndH72VR7Weoz5A8dKZlVhjGhurpJ6ERzbu7JVIBAi0T6QRPTVCW4G4BUwxK%2FSpJq1vOaI0OAkQ1a2KyvN%2F%2F6YBTlsmlhm1n9xlNsJOLSR1%2BWhn8VC6O5ZLVg1v%2F4SMlgOkOFWEYdCVLAry204ZcCfoMCBhYOUvFv5s8SzidkGJi7DCrLsW61v69HyTR9ibT%2Fuj6EtOsTELE%2BsUO7w16ZMBrLqHegkGZMLjR8MQGOqUBBNxsxVfW3SQVyhZyEM5uM%2FDBVyxRic66xgyhPLE%2BBQKqmUTnsmNDAUClrUGLXvwjy25pk6zZJVN2x91M6iFtFuhYA70bk1iKyoiX%2Fh0B4MNRiJUXJEsSvBjvNT5CPru%2F0kW4Z2ys%2FrIZpNg7J4lLY5pQMveRrySOn3QxPayrqBnIODnju4DwTQSSqSYSleaq%2F4KCDzzqcelcfrpRjPu808Yfhq7I&X-Amz-Signature=bee2bbdffeca1146c58d8fb29f214725bf82a09f7fabfdb5cd1b84604e078b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JSNOBH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ZxqDaS90l33fmbX56KOnT5694cpIDV6%2BvtHwePzrjAIgA59gTSEFHAxEKDWFwVEF8aYwRs24vPGapSJ25%2BjXyFYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDE4kVqTN7WtqINFfkCrcA3fF4DcRtXhieT4dJ%2Fw%2BoHq7bF2cuofvV0CQ4dA9dHprLMgK1Vspa5LRb5mc2DLgXMhxnXSvcmFW6sABtMlBITe4%2B1U1u%2F1FUG5RSxot%2F7toCPDjUj2O4GK%2B9aoD9UTf3Jo1n3SDG0yBGBMaqFh9aZIJ3mS6qnLELZj%2B3heCHjvvVncZ5Ala9eDJGlWBz8JpVL9bS%2F8WG3V94C5kSxSfEIBLzueLFpkXt3zoZGgmkwNSpO0CPGF1SlPmC%2BphY%2F6Zgp2e%2Fufg2EomqgCQJB74NgnG2LAwPyPeoq8QOrmEsPblOZmADkf1mT6LI9n2DZWnF0FS1gurNc9leaTdZhMkY4vdJtpzAuLucPyQYK%2BPalMV5IWoCAJMSZMAigxnomPlQY8ZIZYJHJ9%2B%2BQaYfZZ65694TNpPMndH72VR7Weoz5A8dKZlVhjGhurpJ6ERzbu7JVIBAi0T6QRPTVCW4G4BUwxK%2FSpJq1vOaI0OAkQ1a2KyvN%2F%2F6YBTlsmlhm1n9xlNsJOLSR1%2BWhn8VC6O5ZLVg1v%2F4SMlgOkOFWEYdCVLAry204ZcCfoMCBhYOUvFv5s8SzidkGJi7DCrLsW61v69HyTR9ibT%2Fuj6EtOsTELE%2BsUO7w16ZMBrLqHegkGZMLjR8MQGOqUBBNxsxVfW3SQVyhZyEM5uM%2FDBVyxRic66xgyhPLE%2BBQKqmUTnsmNDAUClrUGLXvwjy25pk6zZJVN2x91M6iFtFuhYA70bk1iKyoiX%2Fh0B4MNRiJUXJEsSvBjvNT5CPru%2F0kW4Z2ys%2FrIZpNg7J4lLY5pQMveRrySOn3QxPayrqBnIODnju4DwTQSSqSYSleaq%2F4KCDzzqcelcfrpRjPu808Yfhq7I&X-Amz-Signature=e215ee124596c2361570fb48d5f814c682b1bddc70a9889edade1e4b01091942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JSNOBH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ZxqDaS90l33fmbX56KOnT5694cpIDV6%2BvtHwePzrjAIgA59gTSEFHAxEKDWFwVEF8aYwRs24vPGapSJ25%2BjXyFYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDE4kVqTN7WtqINFfkCrcA3fF4DcRtXhieT4dJ%2Fw%2BoHq7bF2cuofvV0CQ4dA9dHprLMgK1Vspa5LRb5mc2DLgXMhxnXSvcmFW6sABtMlBITe4%2B1U1u%2F1FUG5RSxot%2F7toCPDjUj2O4GK%2B9aoD9UTf3Jo1n3SDG0yBGBMaqFh9aZIJ3mS6qnLELZj%2B3heCHjvvVncZ5Ala9eDJGlWBz8JpVL9bS%2F8WG3V94C5kSxSfEIBLzueLFpkXt3zoZGgmkwNSpO0CPGF1SlPmC%2BphY%2F6Zgp2e%2Fufg2EomqgCQJB74NgnG2LAwPyPeoq8QOrmEsPblOZmADkf1mT6LI9n2DZWnF0FS1gurNc9leaTdZhMkY4vdJtpzAuLucPyQYK%2BPalMV5IWoCAJMSZMAigxnomPlQY8ZIZYJHJ9%2B%2BQaYfZZ65694TNpPMndH72VR7Weoz5A8dKZlVhjGhurpJ6ERzbu7JVIBAi0T6QRPTVCW4G4BUwxK%2FSpJq1vOaI0OAkQ1a2KyvN%2F%2F6YBTlsmlhm1n9xlNsJOLSR1%2BWhn8VC6O5ZLVg1v%2F4SMlgOkOFWEYdCVLAry204ZcCfoMCBhYOUvFv5s8SzidkGJi7DCrLsW61v69HyTR9ibT%2Fuj6EtOsTELE%2BsUO7w16ZMBrLqHegkGZMLjR8MQGOqUBBNxsxVfW3SQVyhZyEM5uM%2FDBVyxRic66xgyhPLE%2BBQKqmUTnsmNDAUClrUGLXvwjy25pk6zZJVN2x91M6iFtFuhYA70bk1iKyoiX%2Fh0B4MNRiJUXJEsSvBjvNT5CPru%2F0kW4Z2ys%2FrIZpNg7J4lLY5pQMveRrySOn3QxPayrqBnIODnju4DwTQSSqSYSleaq%2F4KCDzzqcelcfrpRjPu808Yfhq7I&X-Amz-Signature=7b231a31d84496193c28e0f3c054d0804159dd497d75c6e7fcabda5e09b8b1bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JSNOBH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ZxqDaS90l33fmbX56KOnT5694cpIDV6%2BvtHwePzrjAIgA59gTSEFHAxEKDWFwVEF8aYwRs24vPGapSJ25%2BjXyFYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDE4kVqTN7WtqINFfkCrcA3fF4DcRtXhieT4dJ%2Fw%2BoHq7bF2cuofvV0CQ4dA9dHprLMgK1Vspa5LRb5mc2DLgXMhxnXSvcmFW6sABtMlBITe4%2B1U1u%2F1FUG5RSxot%2F7toCPDjUj2O4GK%2B9aoD9UTf3Jo1n3SDG0yBGBMaqFh9aZIJ3mS6qnLELZj%2B3heCHjvvVncZ5Ala9eDJGlWBz8JpVL9bS%2F8WG3V94C5kSxSfEIBLzueLFpkXt3zoZGgmkwNSpO0CPGF1SlPmC%2BphY%2F6Zgp2e%2Fufg2EomqgCQJB74NgnG2LAwPyPeoq8QOrmEsPblOZmADkf1mT6LI9n2DZWnF0FS1gurNc9leaTdZhMkY4vdJtpzAuLucPyQYK%2BPalMV5IWoCAJMSZMAigxnomPlQY8ZIZYJHJ9%2B%2BQaYfZZ65694TNpPMndH72VR7Weoz5A8dKZlVhjGhurpJ6ERzbu7JVIBAi0T6QRPTVCW4G4BUwxK%2FSpJq1vOaI0OAkQ1a2KyvN%2F%2F6YBTlsmlhm1n9xlNsJOLSR1%2BWhn8VC6O5ZLVg1v%2F4SMlgOkOFWEYdCVLAry204ZcCfoMCBhYOUvFv5s8SzidkGJi7DCrLsW61v69HyTR9ibT%2Fuj6EtOsTELE%2BsUO7w16ZMBrLqHegkGZMLjR8MQGOqUBBNxsxVfW3SQVyhZyEM5uM%2FDBVyxRic66xgyhPLE%2BBQKqmUTnsmNDAUClrUGLXvwjy25pk6zZJVN2x91M6iFtFuhYA70bk1iKyoiX%2Fh0B4MNRiJUXJEsSvBjvNT5CPru%2F0kW4Z2ys%2FrIZpNg7J4lLY5pQMveRrySOn3QxPayrqBnIODnju4DwTQSSqSYSleaq%2F4KCDzzqcelcfrpRjPu808Yfhq7I&X-Amz-Signature=703aa11b297c2e36fc00345da1fbd2afa233a22eabc7eccbd990a23d1947a176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JSNOBH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ZxqDaS90l33fmbX56KOnT5694cpIDV6%2BvtHwePzrjAIgA59gTSEFHAxEKDWFwVEF8aYwRs24vPGapSJ25%2BjXyFYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDE4kVqTN7WtqINFfkCrcA3fF4DcRtXhieT4dJ%2Fw%2BoHq7bF2cuofvV0CQ4dA9dHprLMgK1Vspa5LRb5mc2DLgXMhxnXSvcmFW6sABtMlBITe4%2B1U1u%2F1FUG5RSxot%2F7toCPDjUj2O4GK%2B9aoD9UTf3Jo1n3SDG0yBGBMaqFh9aZIJ3mS6qnLELZj%2B3heCHjvvVncZ5Ala9eDJGlWBz8JpVL9bS%2F8WG3V94C5kSxSfEIBLzueLFpkXt3zoZGgmkwNSpO0CPGF1SlPmC%2BphY%2F6Zgp2e%2Fufg2EomqgCQJB74NgnG2LAwPyPeoq8QOrmEsPblOZmADkf1mT6LI9n2DZWnF0FS1gurNc9leaTdZhMkY4vdJtpzAuLucPyQYK%2BPalMV5IWoCAJMSZMAigxnomPlQY8ZIZYJHJ9%2B%2BQaYfZZ65694TNpPMndH72VR7Weoz5A8dKZlVhjGhurpJ6ERzbu7JVIBAi0T6QRPTVCW4G4BUwxK%2FSpJq1vOaI0OAkQ1a2KyvN%2F%2F6YBTlsmlhm1n9xlNsJOLSR1%2BWhn8VC6O5ZLVg1v%2F4SMlgOkOFWEYdCVLAry204ZcCfoMCBhYOUvFv5s8SzidkGJi7DCrLsW61v69HyTR9ibT%2Fuj6EtOsTELE%2BsUO7w16ZMBrLqHegkGZMLjR8MQGOqUBBNxsxVfW3SQVyhZyEM5uM%2FDBVyxRic66xgyhPLE%2BBQKqmUTnsmNDAUClrUGLXvwjy25pk6zZJVN2x91M6iFtFuhYA70bk1iKyoiX%2Fh0B4MNRiJUXJEsSvBjvNT5CPru%2F0kW4Z2ys%2FrIZpNg7J4lLY5pQMveRrySOn3QxPayrqBnIODnju4DwTQSSqSYSleaq%2F4KCDzzqcelcfrpRjPu808Yfhq7I&X-Amz-Signature=45ab51c406fc9534974b7663c27e52001838472c3df600660d71bfc64392822c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
