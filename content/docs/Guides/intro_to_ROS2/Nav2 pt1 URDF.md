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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M3OSDU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKl8Inq62O4xcigAZ4lXWJRGUGf455r0ivDXkPOgaSbgIhANQjQNydD82uMWImnYyFMl9et974dg0ws8a0Xp7ffgYzKv8DCEQQABoMNjM3NDIzMTgzODA1Igx%2BdIEKRSQ1WFG%2BSI4q3AOrCqH9wOCB5Oy8Tbo3A6jNBl1AlSTVJbK3ZLSQDObS2YvV7NPkzZIGIPd6RNrs2l0DTxmJurtBfDMN6zThrrHSVj0lwbTbdIAlOKunh58KeEYerzl%2BJDzoeigme%2Bgpt4S4LloIdxcIrk5RKLMsAn4GHeE1RFT2jIkDqjNda0304RMnIF5ViOkKiESVvSzSk1AKrPvA%2FQ2qKNOFn3uMVaBehiw4bDyLibhON7DbAQojLxlnI12C%2B%2BV2J%2FtE0wMY1O4b9nH6WLiNJgfwQmON%2Bj10s3sm%2FPaGnfJsK7qqD%2FIoPY92atge5ccrjWBMlHoprH%2FR9m5bK3TD5dQQNr06i%2FR9187QuQgzxp030E2N6YYWXFXA1cvBIZrI12YQeNR3wg%2B92WuB9XncFyRZ86fKW82DyRhKEltqBOn5sugFI4yrs0aPVL%2FNh3K7kYvKUwNuJbOc8943HPewUn6FBwnnat9jO0opLB8TuI%2BdjK%2BKpIiLSZpF6EjIK3uw9o6Rx1UOH7giZEWWd%2BJ7V5vxqGyzUQEKz2UD51layGuMJ3to7WG9Htt6YLd1BoGu7%2BcWThVrh1nAZFFyRRk1uoflHhFrOJrDPIlMEL73Fn5%2BKnqiAZhrAEI9eXCqXiR6zfAzbDD3hPfEBjqkAaHLCUfl%2Bh4G8hqwy5MGoz2491Hc%2FLHMwdZ%2FPdp9Q5wWW%2Fv4jiq1iQqBMYkc20BNJhTcT39eSlNz0C26BCv8LJ5a4EPlIpi%2BWfFdvc3z3uoAMEjRZMrwiCk6GvkvsBuO0QAloXohUXeSQ5xzpgec71l0Q0EciGvoXjYBEKqeTAygT%2FMOKjSYkJcvVUFg2%2BAbPOvqp%2B0YTV4Sm809lI4l4GIsiFUV&X-Amz-Signature=ffdc4872610981d110c984920812f8fdee5e5d7645cdbc430135d1a953c4359f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M3OSDU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKl8Inq62O4xcigAZ4lXWJRGUGf455r0ivDXkPOgaSbgIhANQjQNydD82uMWImnYyFMl9et974dg0ws8a0Xp7ffgYzKv8DCEQQABoMNjM3NDIzMTgzODA1Igx%2BdIEKRSQ1WFG%2BSI4q3AOrCqH9wOCB5Oy8Tbo3A6jNBl1AlSTVJbK3ZLSQDObS2YvV7NPkzZIGIPd6RNrs2l0DTxmJurtBfDMN6zThrrHSVj0lwbTbdIAlOKunh58KeEYerzl%2BJDzoeigme%2Bgpt4S4LloIdxcIrk5RKLMsAn4GHeE1RFT2jIkDqjNda0304RMnIF5ViOkKiESVvSzSk1AKrPvA%2FQ2qKNOFn3uMVaBehiw4bDyLibhON7DbAQojLxlnI12C%2B%2BV2J%2FtE0wMY1O4b9nH6WLiNJgfwQmON%2Bj10s3sm%2FPaGnfJsK7qqD%2FIoPY92atge5ccrjWBMlHoprH%2FR9m5bK3TD5dQQNr06i%2FR9187QuQgzxp030E2N6YYWXFXA1cvBIZrI12YQeNR3wg%2B92WuB9XncFyRZ86fKW82DyRhKEltqBOn5sugFI4yrs0aPVL%2FNh3K7kYvKUwNuJbOc8943HPewUn6FBwnnat9jO0opLB8TuI%2BdjK%2BKpIiLSZpF6EjIK3uw9o6Rx1UOH7giZEWWd%2BJ7V5vxqGyzUQEKz2UD51layGuMJ3to7WG9Htt6YLd1BoGu7%2BcWThVrh1nAZFFyRRk1uoflHhFrOJrDPIlMEL73Fn5%2BKnqiAZhrAEI9eXCqXiR6zfAzbDD3hPfEBjqkAaHLCUfl%2Bh4G8hqwy5MGoz2491Hc%2FLHMwdZ%2FPdp9Q5wWW%2Fv4jiq1iQqBMYkc20BNJhTcT39eSlNz0C26BCv8LJ5a4EPlIpi%2BWfFdvc3z3uoAMEjRZMrwiCk6GvkvsBuO0QAloXohUXeSQ5xzpgec71l0Q0EciGvoXjYBEKqeTAygT%2FMOKjSYkJcvVUFg2%2BAbPOvqp%2B0YTV4Sm809lI4l4GIsiFUV&X-Amz-Signature=73443ab612b7f4b23177014c7c04c822c503df188ba614b1c917fa9844b3d696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M3OSDU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKl8Inq62O4xcigAZ4lXWJRGUGf455r0ivDXkPOgaSbgIhANQjQNydD82uMWImnYyFMl9et974dg0ws8a0Xp7ffgYzKv8DCEQQABoMNjM3NDIzMTgzODA1Igx%2BdIEKRSQ1WFG%2BSI4q3AOrCqH9wOCB5Oy8Tbo3A6jNBl1AlSTVJbK3ZLSQDObS2YvV7NPkzZIGIPd6RNrs2l0DTxmJurtBfDMN6zThrrHSVj0lwbTbdIAlOKunh58KeEYerzl%2BJDzoeigme%2Bgpt4S4LloIdxcIrk5RKLMsAn4GHeE1RFT2jIkDqjNda0304RMnIF5ViOkKiESVvSzSk1AKrPvA%2FQ2qKNOFn3uMVaBehiw4bDyLibhON7DbAQojLxlnI12C%2B%2BV2J%2FtE0wMY1O4b9nH6WLiNJgfwQmON%2Bj10s3sm%2FPaGnfJsK7qqD%2FIoPY92atge5ccrjWBMlHoprH%2FR9m5bK3TD5dQQNr06i%2FR9187QuQgzxp030E2N6YYWXFXA1cvBIZrI12YQeNR3wg%2B92WuB9XncFyRZ86fKW82DyRhKEltqBOn5sugFI4yrs0aPVL%2FNh3K7kYvKUwNuJbOc8943HPewUn6FBwnnat9jO0opLB8TuI%2BdjK%2BKpIiLSZpF6EjIK3uw9o6Rx1UOH7giZEWWd%2BJ7V5vxqGyzUQEKz2UD51layGuMJ3to7WG9Htt6YLd1BoGu7%2BcWThVrh1nAZFFyRRk1uoflHhFrOJrDPIlMEL73Fn5%2BKnqiAZhrAEI9eXCqXiR6zfAzbDD3hPfEBjqkAaHLCUfl%2Bh4G8hqwy5MGoz2491Hc%2FLHMwdZ%2FPdp9Q5wWW%2Fv4jiq1iQqBMYkc20BNJhTcT39eSlNz0C26BCv8LJ5a4EPlIpi%2BWfFdvc3z3uoAMEjRZMrwiCk6GvkvsBuO0QAloXohUXeSQ5xzpgec71l0Q0EciGvoXjYBEKqeTAygT%2FMOKjSYkJcvVUFg2%2BAbPOvqp%2B0YTV4Sm809lI4l4GIsiFUV&X-Amz-Signature=90a76fed3f78ed221a1ba658e898bb6e02c3d9e8f442472df776120d94a965d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M3OSDU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKl8Inq62O4xcigAZ4lXWJRGUGf455r0ivDXkPOgaSbgIhANQjQNydD82uMWImnYyFMl9et974dg0ws8a0Xp7ffgYzKv8DCEQQABoMNjM3NDIzMTgzODA1Igx%2BdIEKRSQ1WFG%2BSI4q3AOrCqH9wOCB5Oy8Tbo3A6jNBl1AlSTVJbK3ZLSQDObS2YvV7NPkzZIGIPd6RNrs2l0DTxmJurtBfDMN6zThrrHSVj0lwbTbdIAlOKunh58KeEYerzl%2BJDzoeigme%2Bgpt4S4LloIdxcIrk5RKLMsAn4GHeE1RFT2jIkDqjNda0304RMnIF5ViOkKiESVvSzSk1AKrPvA%2FQ2qKNOFn3uMVaBehiw4bDyLibhON7DbAQojLxlnI12C%2B%2BV2J%2FtE0wMY1O4b9nH6WLiNJgfwQmON%2Bj10s3sm%2FPaGnfJsK7qqD%2FIoPY92atge5ccrjWBMlHoprH%2FR9m5bK3TD5dQQNr06i%2FR9187QuQgzxp030E2N6YYWXFXA1cvBIZrI12YQeNR3wg%2B92WuB9XncFyRZ86fKW82DyRhKEltqBOn5sugFI4yrs0aPVL%2FNh3K7kYvKUwNuJbOc8943HPewUn6FBwnnat9jO0opLB8TuI%2BdjK%2BKpIiLSZpF6EjIK3uw9o6Rx1UOH7giZEWWd%2BJ7V5vxqGyzUQEKz2UD51layGuMJ3to7WG9Htt6YLd1BoGu7%2BcWThVrh1nAZFFyRRk1uoflHhFrOJrDPIlMEL73Fn5%2BKnqiAZhrAEI9eXCqXiR6zfAzbDD3hPfEBjqkAaHLCUfl%2Bh4G8hqwy5MGoz2491Hc%2FLHMwdZ%2FPdp9Q5wWW%2Fv4jiq1iQqBMYkc20BNJhTcT39eSlNz0C26BCv8LJ5a4EPlIpi%2BWfFdvc3z3uoAMEjRZMrwiCk6GvkvsBuO0QAloXohUXeSQ5xzpgec71l0Q0EciGvoXjYBEKqeTAygT%2FMOKjSYkJcvVUFg2%2BAbPOvqp%2B0YTV4Sm809lI4l4GIsiFUV&X-Amz-Signature=b3a9b575b57ae6e05ddc6a3008ddff677f9c69aab7ec941142f5d021fdf39487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M3OSDU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKl8Inq62O4xcigAZ4lXWJRGUGf455r0ivDXkPOgaSbgIhANQjQNydD82uMWImnYyFMl9et974dg0ws8a0Xp7ffgYzKv8DCEQQABoMNjM3NDIzMTgzODA1Igx%2BdIEKRSQ1WFG%2BSI4q3AOrCqH9wOCB5Oy8Tbo3A6jNBl1AlSTVJbK3ZLSQDObS2YvV7NPkzZIGIPd6RNrs2l0DTxmJurtBfDMN6zThrrHSVj0lwbTbdIAlOKunh58KeEYerzl%2BJDzoeigme%2Bgpt4S4LloIdxcIrk5RKLMsAn4GHeE1RFT2jIkDqjNda0304RMnIF5ViOkKiESVvSzSk1AKrPvA%2FQ2qKNOFn3uMVaBehiw4bDyLibhON7DbAQojLxlnI12C%2B%2BV2J%2FtE0wMY1O4b9nH6WLiNJgfwQmON%2Bj10s3sm%2FPaGnfJsK7qqD%2FIoPY92atge5ccrjWBMlHoprH%2FR9m5bK3TD5dQQNr06i%2FR9187QuQgzxp030E2N6YYWXFXA1cvBIZrI12YQeNR3wg%2B92WuB9XncFyRZ86fKW82DyRhKEltqBOn5sugFI4yrs0aPVL%2FNh3K7kYvKUwNuJbOc8943HPewUn6FBwnnat9jO0opLB8TuI%2BdjK%2BKpIiLSZpF6EjIK3uw9o6Rx1UOH7giZEWWd%2BJ7V5vxqGyzUQEKz2UD51layGuMJ3to7WG9Htt6YLd1BoGu7%2BcWThVrh1nAZFFyRRk1uoflHhFrOJrDPIlMEL73Fn5%2BKnqiAZhrAEI9eXCqXiR6zfAzbDD3hPfEBjqkAaHLCUfl%2Bh4G8hqwy5MGoz2491Hc%2FLHMwdZ%2FPdp9Q5wWW%2Fv4jiq1iQqBMYkc20BNJhTcT39eSlNz0C26BCv8LJ5a4EPlIpi%2BWfFdvc3z3uoAMEjRZMrwiCk6GvkvsBuO0QAloXohUXeSQ5xzpgec71l0Q0EciGvoXjYBEKqeTAygT%2FMOKjSYkJcvVUFg2%2BAbPOvqp%2B0YTV4Sm809lI4l4GIsiFUV&X-Amz-Signature=65f1ab5244ac80d47c11221816dcdd08d0440d32d46c272462afd13b24422574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M3OSDU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKl8Inq62O4xcigAZ4lXWJRGUGf455r0ivDXkPOgaSbgIhANQjQNydD82uMWImnYyFMl9et974dg0ws8a0Xp7ffgYzKv8DCEQQABoMNjM3NDIzMTgzODA1Igx%2BdIEKRSQ1WFG%2BSI4q3AOrCqH9wOCB5Oy8Tbo3A6jNBl1AlSTVJbK3ZLSQDObS2YvV7NPkzZIGIPd6RNrs2l0DTxmJurtBfDMN6zThrrHSVj0lwbTbdIAlOKunh58KeEYerzl%2BJDzoeigme%2Bgpt4S4LloIdxcIrk5RKLMsAn4GHeE1RFT2jIkDqjNda0304RMnIF5ViOkKiESVvSzSk1AKrPvA%2FQ2qKNOFn3uMVaBehiw4bDyLibhON7DbAQojLxlnI12C%2B%2BV2J%2FtE0wMY1O4b9nH6WLiNJgfwQmON%2Bj10s3sm%2FPaGnfJsK7qqD%2FIoPY92atge5ccrjWBMlHoprH%2FR9m5bK3TD5dQQNr06i%2FR9187QuQgzxp030E2N6YYWXFXA1cvBIZrI12YQeNR3wg%2B92WuB9XncFyRZ86fKW82DyRhKEltqBOn5sugFI4yrs0aPVL%2FNh3K7kYvKUwNuJbOc8943HPewUn6FBwnnat9jO0opLB8TuI%2BdjK%2BKpIiLSZpF6EjIK3uw9o6Rx1UOH7giZEWWd%2BJ7V5vxqGyzUQEKz2UD51layGuMJ3to7WG9Htt6YLd1BoGu7%2BcWThVrh1nAZFFyRRk1uoflHhFrOJrDPIlMEL73Fn5%2BKnqiAZhrAEI9eXCqXiR6zfAzbDD3hPfEBjqkAaHLCUfl%2Bh4G8hqwy5MGoz2491Hc%2FLHMwdZ%2FPdp9Q5wWW%2Fv4jiq1iQqBMYkc20BNJhTcT39eSlNz0C26BCv8LJ5a4EPlIpi%2BWfFdvc3z3uoAMEjRZMrwiCk6GvkvsBuO0QAloXohUXeSQ5xzpgec71l0Q0EciGvoXjYBEKqeTAygT%2FMOKjSYkJcvVUFg2%2BAbPOvqp%2B0YTV4Sm809lI4l4GIsiFUV&X-Amz-Signature=9c8a46417f052ec1cd72eb44545bcfd59fad08568ba66e909adb79d04b9b362f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M3OSDU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKl8Inq62O4xcigAZ4lXWJRGUGf455r0ivDXkPOgaSbgIhANQjQNydD82uMWImnYyFMl9et974dg0ws8a0Xp7ffgYzKv8DCEQQABoMNjM3NDIzMTgzODA1Igx%2BdIEKRSQ1WFG%2BSI4q3AOrCqH9wOCB5Oy8Tbo3A6jNBl1AlSTVJbK3ZLSQDObS2YvV7NPkzZIGIPd6RNrs2l0DTxmJurtBfDMN6zThrrHSVj0lwbTbdIAlOKunh58KeEYerzl%2BJDzoeigme%2Bgpt4S4LloIdxcIrk5RKLMsAn4GHeE1RFT2jIkDqjNda0304RMnIF5ViOkKiESVvSzSk1AKrPvA%2FQ2qKNOFn3uMVaBehiw4bDyLibhON7DbAQojLxlnI12C%2B%2BV2J%2FtE0wMY1O4b9nH6WLiNJgfwQmON%2Bj10s3sm%2FPaGnfJsK7qqD%2FIoPY92atge5ccrjWBMlHoprH%2FR9m5bK3TD5dQQNr06i%2FR9187QuQgzxp030E2N6YYWXFXA1cvBIZrI12YQeNR3wg%2B92WuB9XncFyRZ86fKW82DyRhKEltqBOn5sugFI4yrs0aPVL%2FNh3K7kYvKUwNuJbOc8943HPewUn6FBwnnat9jO0opLB8TuI%2BdjK%2BKpIiLSZpF6EjIK3uw9o6Rx1UOH7giZEWWd%2BJ7V5vxqGyzUQEKz2UD51layGuMJ3to7WG9Htt6YLd1BoGu7%2BcWThVrh1nAZFFyRRk1uoflHhFrOJrDPIlMEL73Fn5%2BKnqiAZhrAEI9eXCqXiR6zfAzbDD3hPfEBjqkAaHLCUfl%2Bh4G8hqwy5MGoz2491Hc%2FLHMwdZ%2FPdp9Q5wWW%2Fv4jiq1iQqBMYkc20BNJhTcT39eSlNz0C26BCv8LJ5a4EPlIpi%2BWfFdvc3z3uoAMEjRZMrwiCk6GvkvsBuO0QAloXohUXeSQ5xzpgec71l0Q0EciGvoXjYBEKqeTAygT%2FMOKjSYkJcvVUFg2%2BAbPOvqp%2B0YTV4Sm809lI4l4GIsiFUV&X-Amz-Signature=113728408ae168feec6144c8b4ac3bc64af2362ccc7c413ab587f73bb5dabc86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M3OSDU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKl8Inq62O4xcigAZ4lXWJRGUGf455r0ivDXkPOgaSbgIhANQjQNydD82uMWImnYyFMl9et974dg0ws8a0Xp7ffgYzKv8DCEQQABoMNjM3NDIzMTgzODA1Igx%2BdIEKRSQ1WFG%2BSI4q3AOrCqH9wOCB5Oy8Tbo3A6jNBl1AlSTVJbK3ZLSQDObS2YvV7NPkzZIGIPd6RNrs2l0DTxmJurtBfDMN6zThrrHSVj0lwbTbdIAlOKunh58KeEYerzl%2BJDzoeigme%2Bgpt4S4LloIdxcIrk5RKLMsAn4GHeE1RFT2jIkDqjNda0304RMnIF5ViOkKiESVvSzSk1AKrPvA%2FQ2qKNOFn3uMVaBehiw4bDyLibhON7DbAQojLxlnI12C%2B%2BV2J%2FtE0wMY1O4b9nH6WLiNJgfwQmON%2Bj10s3sm%2FPaGnfJsK7qqD%2FIoPY92atge5ccrjWBMlHoprH%2FR9m5bK3TD5dQQNr06i%2FR9187QuQgzxp030E2N6YYWXFXA1cvBIZrI12YQeNR3wg%2B92WuB9XncFyRZ86fKW82DyRhKEltqBOn5sugFI4yrs0aPVL%2FNh3K7kYvKUwNuJbOc8943HPewUn6FBwnnat9jO0opLB8TuI%2BdjK%2BKpIiLSZpF6EjIK3uw9o6Rx1UOH7giZEWWd%2BJ7V5vxqGyzUQEKz2UD51layGuMJ3to7WG9Htt6YLd1BoGu7%2BcWThVrh1nAZFFyRRk1uoflHhFrOJrDPIlMEL73Fn5%2BKnqiAZhrAEI9eXCqXiR6zfAzbDD3hPfEBjqkAaHLCUfl%2Bh4G8hqwy5MGoz2491Hc%2FLHMwdZ%2FPdp9Q5wWW%2Fv4jiq1iQqBMYkc20BNJhTcT39eSlNz0C26BCv8LJ5a4EPlIpi%2BWfFdvc3z3uoAMEjRZMrwiCk6GvkvsBuO0QAloXohUXeSQ5xzpgec71l0Q0EciGvoXjYBEKqeTAygT%2FMOKjSYkJcvVUFg2%2BAbPOvqp%2B0YTV4Sm809lI4l4GIsiFUV&X-Amz-Signature=2fae6a919cf093d11c20191e58b3d7b98f4205224bd497edfa421846234bc84c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M3OSDU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKl8Inq62O4xcigAZ4lXWJRGUGf455r0ivDXkPOgaSbgIhANQjQNydD82uMWImnYyFMl9et974dg0ws8a0Xp7ffgYzKv8DCEQQABoMNjM3NDIzMTgzODA1Igx%2BdIEKRSQ1WFG%2BSI4q3AOrCqH9wOCB5Oy8Tbo3A6jNBl1AlSTVJbK3ZLSQDObS2YvV7NPkzZIGIPd6RNrs2l0DTxmJurtBfDMN6zThrrHSVj0lwbTbdIAlOKunh58KeEYerzl%2BJDzoeigme%2Bgpt4S4LloIdxcIrk5RKLMsAn4GHeE1RFT2jIkDqjNda0304RMnIF5ViOkKiESVvSzSk1AKrPvA%2FQ2qKNOFn3uMVaBehiw4bDyLibhON7DbAQojLxlnI12C%2B%2BV2J%2FtE0wMY1O4b9nH6WLiNJgfwQmON%2Bj10s3sm%2FPaGnfJsK7qqD%2FIoPY92atge5ccrjWBMlHoprH%2FR9m5bK3TD5dQQNr06i%2FR9187QuQgzxp030E2N6YYWXFXA1cvBIZrI12YQeNR3wg%2B92WuB9XncFyRZ86fKW82DyRhKEltqBOn5sugFI4yrs0aPVL%2FNh3K7kYvKUwNuJbOc8943HPewUn6FBwnnat9jO0opLB8TuI%2BdjK%2BKpIiLSZpF6EjIK3uw9o6Rx1UOH7giZEWWd%2BJ7V5vxqGyzUQEKz2UD51layGuMJ3to7WG9Htt6YLd1BoGu7%2BcWThVrh1nAZFFyRRk1uoflHhFrOJrDPIlMEL73Fn5%2BKnqiAZhrAEI9eXCqXiR6zfAzbDD3hPfEBjqkAaHLCUfl%2Bh4G8hqwy5MGoz2491Hc%2FLHMwdZ%2FPdp9Q5wWW%2Fv4jiq1iQqBMYkc20BNJhTcT39eSlNz0C26BCv8LJ5a4EPlIpi%2BWfFdvc3z3uoAMEjRZMrwiCk6GvkvsBuO0QAloXohUXeSQ5xzpgec71l0Q0EciGvoXjYBEKqeTAygT%2FMOKjSYkJcvVUFg2%2BAbPOvqp%2B0YTV4Sm809lI4l4GIsiFUV&X-Amz-Signature=74beb72b89917025e4ceef4a1b48954940b76b0e3f8872cc58b775dc3cb08687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M3OSDU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKl8Inq62O4xcigAZ4lXWJRGUGf455r0ivDXkPOgaSbgIhANQjQNydD82uMWImnYyFMl9et974dg0ws8a0Xp7ffgYzKv8DCEQQABoMNjM3NDIzMTgzODA1Igx%2BdIEKRSQ1WFG%2BSI4q3AOrCqH9wOCB5Oy8Tbo3A6jNBl1AlSTVJbK3ZLSQDObS2YvV7NPkzZIGIPd6RNrs2l0DTxmJurtBfDMN6zThrrHSVj0lwbTbdIAlOKunh58KeEYerzl%2BJDzoeigme%2Bgpt4S4LloIdxcIrk5RKLMsAn4GHeE1RFT2jIkDqjNda0304RMnIF5ViOkKiESVvSzSk1AKrPvA%2FQ2qKNOFn3uMVaBehiw4bDyLibhON7DbAQojLxlnI12C%2B%2BV2J%2FtE0wMY1O4b9nH6WLiNJgfwQmON%2Bj10s3sm%2FPaGnfJsK7qqD%2FIoPY92atge5ccrjWBMlHoprH%2FR9m5bK3TD5dQQNr06i%2FR9187QuQgzxp030E2N6YYWXFXA1cvBIZrI12YQeNR3wg%2B92WuB9XncFyRZ86fKW82DyRhKEltqBOn5sugFI4yrs0aPVL%2FNh3K7kYvKUwNuJbOc8943HPewUn6FBwnnat9jO0opLB8TuI%2BdjK%2BKpIiLSZpF6EjIK3uw9o6Rx1UOH7giZEWWd%2BJ7V5vxqGyzUQEKz2UD51layGuMJ3to7WG9Htt6YLd1BoGu7%2BcWThVrh1nAZFFyRRk1uoflHhFrOJrDPIlMEL73Fn5%2BKnqiAZhrAEI9eXCqXiR6zfAzbDD3hPfEBjqkAaHLCUfl%2Bh4G8hqwy5MGoz2491Hc%2FLHMwdZ%2FPdp9Q5wWW%2Fv4jiq1iQqBMYkc20BNJhTcT39eSlNz0C26BCv8LJ5a4EPlIpi%2BWfFdvc3z3uoAMEjRZMrwiCk6GvkvsBuO0QAloXohUXeSQ5xzpgec71l0Q0EciGvoXjYBEKqeTAygT%2FMOKjSYkJcvVUFg2%2BAbPOvqp%2B0YTV4Sm809lI4l4GIsiFUV&X-Amz-Signature=3d31eb474effb81b74c7c885814c5e1a6823d748b8840468e712ff3da133d591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7HHHHNY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBM8XZexruQNTtvMqia%2BMW%2F0YSgxaMezcuGLauRxjVaTAiBUjXyqULE8pHVmdkly%2FaFHmXUXEE1Ppt3hB0Nxtr%2FNLir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMTDa%2FfZdSI9y%2B9CarKtwDfqeVXvIVwj3rPsHGK0QcmII0HSHsM6z0u86mHTl83Or1PHsbp2zoSIqdnXAHDACYtBv7ujSMrRg2zBs0nezCkkrL5jFwWUDNGSK1Vh37vtTQESXrrbgH7Sy4VrjsNO04w0w0rbGLaWfyLXLIg9mMSof0jYCCSdmEX0C3IJysH2deWTUoIv%2Fof%2FAaCuvPuxEe3ig%2BsbjwPTYiqKrVwuyIq9LnoqiuJOcDyAha1x7TzkJXPhP%2FGN%2B2HoNVwMcNR7iQ9%2FwfI2pTQMuetcTQLtVxByczT8CMW8JO9yKdX29gER9GG8vp52BYVpYRdfgLzJ4ZGFtzqrTmjfp2zy4vV2iZr4Z3PtTydbm5RH%2Bl%2FniE4Nb%2FFnKos4kr%2Ft9qpFGEEXMnLevGbNCvU4Z1zSraSo6Svx22QVdllelBh%2BlUYG0H4RisePr4qofdZBtwVl058XWETU6BktWK15sr6KMJ2N4jz5jOjRJFFG92DokZmxHCvtG1WZUgvkbZIiCqVVPTd8X0B%2B0sy9Fje0TD7ML%2FeOlt6SWZ9oXaGGB3RHyE9lcBIHeJXj4z%2BSmnt4%2BZlaN7zdxVxol%2FWFgu28nnRJJGpuy0FEPFRmZzIlstow6KE5UXKNtKvY8h3Gg%2FcpDS%2FzswpoT3xAY6pgHeHgyo9IvevtcGqr7SRmSCdl5ixIOJ1o6dwuzat5ZMOLd7on3ZIGEx8GUQDIUBbFflGcunlPQ1sBeVCWhYxtpYD5rLPqEmFBijSCdOS1l8zvGjFBzmTJc9xgqA9xadiRBmG5ZmeyGWC0o9e54ICbizdVmMiaVmtfWnkeN8jMhKntcW57027Uod2RYaq7rwac791mSVk59D7IsSnAEoYjPTD4g1Hvlf&X-Amz-Signature=2214f9ae51fd1431502cafcaf2f67298f30bb25ec2f26e38759d6f4cab59470f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664QSYWM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMVcsYau1y8NoVyRPetg9bddOaq25OaHS6vx599IhFIAiEArry25p5m%2BmJBRJPf19zdx2J3ReVKBL6BiPFi730W9qMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKBwAmvULYtBz2R65CrcA%2FBB1wRhmy7cpuUI3zc%2BiQWS3hFbrwApm72qke0FZKn5yr87h4d6jJ9NoHVG%2BDFJhImJvhMPoU1ax9iU%2FiSoJPgSqz0K01C%2FNP0NQ8V6eaIH0kuHsnXoqgTzLh%2FZwhCPy0bzZ0VW6309MAjYpcWRhiByy%2FFp%2FFNCUByXZXIe9JJLptT%2F%2FJMaEqNM59Y403kUHWD%2BYSWIbOPGbLphT8tp2TVdytfG4gaMQ74i6Dup5ehgm4R%2FbE4Of56Nlr%2Bw4JuqDliVzKLtgQfB%2FhU6XS%2Fi5cK9Hw5xSUDT5zuvAwipWlyoF9ETn%2FqDkK%2Bmq63OuvbjIKjZVb3PDLCPG86G09FHyPiT7brXU3ZAfCQcT8X59tgJt3OzAsqsmvBwsaPZ30p3ymeWIxPe4%2BvVNo%2F8Qs2qTr4mueBp3zzsj%2BplBbi%2FnYsq95mNsL6LPewWoh5xMD9R3aE6G5WITOnCeO6r041SFyzDr2wIMhNY5jAnjLnDbAuJYZdjLJbRpRb6Qv1RRaycD%2Fo5lgZQ7VN6WZIoFzhb%2BiEpb5Wxek2BgusHx4s4uZFGGEtSQBtzIEpjeelz5fE4YO4huo20nDKR9DPwKtHoZL4MGjxtl8mTrffmM1JhJXbb4jUo1Pe0OUvJ%2FyDkMJ%2BF98QGOqUBowllCd%2F0ZefeBX7y42%2F3qrSZHXl4NuTj9ZydrLTFM5plTA5L1c6OuDcS8wfeovySmwR%2FYeJDiTsArh%2Ft0KvptxlnlzEKPp4A4HMjZLS56o%2BnUTsKQSAnyAwEDnYDs%2FFl1cw95MmSkGlkMBnH8SSQwxCEvadjOAZ5yFejWkewKzFd8ldfsrX%2BsRtly6AlVH%2Fn%2Bt4oAnuU135NGGA0gpzggSPao2uj&X-Amz-Signature=78da6b6d5e73f2b680451ee48ee3f41eea890e06ed16ac9a1c9e16ed1deac044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GDCH3I%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdnXBWgb0b%2F7MzkUn2rjyXbTA5vJdfDXlK0DQMiIjGtAiA%2FEwjE9rEmbvCY7qJ8Mzd5Z%2BDiK%2BP%2B9Sx3OvSqkX6zQyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMQSfwIxEqdQCB%2FZ7kKtwDFQHLsqv7BwnQeO5hpb64AXbBzRRu8Y5XrJidpWs0XQVMlZrkpbmnAlY7QvjOsNYv3SHmgXuZRAvDrhoe9%2F49rif5o2bqClXuGHQcA7AYXLy9YnNb7MyKBGB7ue6ucACan992DDjJU1l0RKlw34oDztfhb0g7j8nnG2GfsdVPIZH7ttkvu8r3A9Vi7WEXc4iId1pChHRlrfOTfS3yuYhVuMApGNDxP9jtXK2r%2BU%2B5LfYV3AKo%2B%2BWGgy19O2eNvJWcZUlgkjrF99AM6VaeMHQ9oT%2FrTU6VJf0LsCqaZbmhOXq%2FxA3R56r3X33gxs001E864E%2FY16P3dkDEDKpcdWVHF2z0xZqBDeGfTKfCkNQDL3%2FxUWCzo89slzbIqlAKqRIV%2B1g55RgynnVhofHEEVyiKRFhTS1IWz14zyIUnbbCU%2FcwfmJcUFyQb3NMVXgINgV4TVkQ7T56HUjMpSEAxZUVKlbCUN8YHpLufympJuzKhbfNVZjKxufNx7j7MdQs3D2RE5vdWkHKIquY%2FfvZyF2MAz%2BB8%2B82eMQ8CSo59r9JwAc%2BKvJzq5VZQnSCdVBUeflOwGvoFKtKk0P5pwdM8WdSr32IaOA9aYk2vv%2F7nyhJQyuH%2Brz3HqrHugqDEjEwuoT3xAY6pgFnKq3HRa3%2FPR3d21mQpqANSRUSOW1gt5ZLVqX9YaJHKOp%2B6uT02WWJ0OYJm3pOVFIKRseM%2Fj7CmQqFAQ2YLwl354GLeWXmBJTQUtSHRA98Tm%2B0Zwn5SbvblLegrpq9DU%2FerZ%2FO%2BscikAzB0Wo7%2FCbV7BTdeJKCGaHDopAdJ1EsZ0RUJ49z55O5MOCrcPZ%2FQCpkyeqxF9osdD%2BgtaFCJFL7F8tGk3J%2B&X-Amz-Signature=77c46851b6b54fd401abad5b386d7a3d28e27afd8a448dd5f544cdd94d0c5889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M3OSDU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKl8Inq62O4xcigAZ4lXWJRGUGf455r0ivDXkPOgaSbgIhANQjQNydD82uMWImnYyFMl9et974dg0ws8a0Xp7ffgYzKv8DCEQQABoMNjM3NDIzMTgzODA1Igx%2BdIEKRSQ1WFG%2BSI4q3AOrCqH9wOCB5Oy8Tbo3A6jNBl1AlSTVJbK3ZLSQDObS2YvV7NPkzZIGIPd6RNrs2l0DTxmJurtBfDMN6zThrrHSVj0lwbTbdIAlOKunh58KeEYerzl%2BJDzoeigme%2Bgpt4S4LloIdxcIrk5RKLMsAn4GHeE1RFT2jIkDqjNda0304RMnIF5ViOkKiESVvSzSk1AKrPvA%2FQ2qKNOFn3uMVaBehiw4bDyLibhON7DbAQojLxlnI12C%2B%2BV2J%2FtE0wMY1O4b9nH6WLiNJgfwQmON%2Bj10s3sm%2FPaGnfJsK7qqD%2FIoPY92atge5ccrjWBMlHoprH%2FR9m5bK3TD5dQQNr06i%2FR9187QuQgzxp030E2N6YYWXFXA1cvBIZrI12YQeNR3wg%2B92WuB9XncFyRZ86fKW82DyRhKEltqBOn5sugFI4yrs0aPVL%2FNh3K7kYvKUwNuJbOc8943HPewUn6FBwnnat9jO0opLB8TuI%2BdjK%2BKpIiLSZpF6EjIK3uw9o6Rx1UOH7giZEWWd%2BJ7V5vxqGyzUQEKz2UD51layGuMJ3to7WG9Htt6YLd1BoGu7%2BcWThVrh1nAZFFyRRk1uoflHhFrOJrDPIlMEL73Fn5%2BKnqiAZhrAEI9eXCqXiR6zfAzbDD3hPfEBjqkAaHLCUfl%2Bh4G8hqwy5MGoz2491Hc%2FLHMwdZ%2FPdp9Q5wWW%2Fv4jiq1iQqBMYkc20BNJhTcT39eSlNz0C26BCv8LJ5a4EPlIpi%2BWfFdvc3z3uoAMEjRZMrwiCk6GvkvsBuO0QAloXohUXeSQ5xzpgec71l0Q0EciGvoXjYBEKqeTAygT%2FMOKjSYkJcvVUFg2%2BAbPOvqp%2B0YTV4Sm809lI4l4GIsiFUV&X-Amz-Signature=83880a9e4f878dc0cab5a8407d518053b2cee8cec1bd5c7665c66265327e59c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667DZDXTE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuwI4hWY%2BTm0uZecbGbDvuSxZoR3dr6LmFcT6S7mP1BwIhAK0GMWZbSq9h2A1esj6w6N%2BZMFm6RedWbWNsHZvsw3v0Kv8DCEQQABoMNjM3NDIzMTgzODA1Igzorqg5xNEed5LCBUcq3AOkaey3srlxAYukT7VMnfy8fEvTc4ELJmPc8jFiYjZjbQ%2FU%2FjGe0S2WsjLAuLJ2YmTgoJjY6qDxGo4h4B%2BgqgioYI3eHSvF4fvarHgNMgWi1wO1aPtOQR%2BHSxf5phPqhcshNEU1mMwDeMRRMjPJvEraXLp92pT1RU2J9jeYyfwNwKm8sWMQm7JmLwl8jSaPc%2FWAuMOyhUtQ0gZfjA5cxci76%2BoGU0%2Bdk2NGA9IiEfO9Np3S%2F5sQdRS5CjotvNc9Ref02%2B9gQPmOBtWw5UH2Mrs1oKLixskTkrX%2FkqroRSsbolRJKHLSDQ4f9SkSniLaqMa5sReCdQCkRZhxrA1Xr32tMNE4bndeG8Q%2BOqQwd%2FKPYVFxi19a19tY4VAQCZN7PvrmTSKTavhFjiIFxzGUW4f5KxPJv%2F4IWIRwjZYiJ%2FJ5F%2B5QfxckH10fAA%2FYxC1cJRnf%2Fz%2B16ut4rTcewLLkaDciM%2F6LlLexlFJBDAVjU6aKszbc7q%2Fbit3DNJaRfcKloW2FWiehTv3EH74QlxPoG4Hed88dI8yFt1xeIVTFwnDtzR90PfdY2bDbWccSX8fy0aUfmkemCFJBmsqgSFEEHO3O%2F%2FP020k9dkj0BmFqRAI7a5DIsiDVr6moTZVjODCFhffEBjqkAeZQSl7lqVtVQIGy5RJk1TClKx3dv8U69YPNAboZsoaMz9HsQrqqDKZHZpbo9c7VvusAeRcMWgrWOLhDHM5RyY8PYpHBLl8gM22EnFm5cVTvXHI%2BR3boULZoTB74ClcPObl%2BQja18OgogTDsXtiuCQnjMN%2BC7eVXzPvUNDnfZ8lvI%2FnTjgRzYTzW5jMInRW%2FO2h8Du1oOZbNhDJIAe9%2FdMBRbfGg&X-Amz-Signature=ef9035325043623f6cb462917654e4aeb1a16ad7798e33d16d061c46711aec0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M3OSDU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKl8Inq62O4xcigAZ4lXWJRGUGf455r0ivDXkPOgaSbgIhANQjQNydD82uMWImnYyFMl9et974dg0ws8a0Xp7ffgYzKv8DCEQQABoMNjM3NDIzMTgzODA1Igx%2BdIEKRSQ1WFG%2BSI4q3AOrCqH9wOCB5Oy8Tbo3A6jNBl1AlSTVJbK3ZLSQDObS2YvV7NPkzZIGIPd6RNrs2l0DTxmJurtBfDMN6zThrrHSVj0lwbTbdIAlOKunh58KeEYerzl%2BJDzoeigme%2Bgpt4S4LloIdxcIrk5RKLMsAn4GHeE1RFT2jIkDqjNda0304RMnIF5ViOkKiESVvSzSk1AKrPvA%2FQ2qKNOFn3uMVaBehiw4bDyLibhON7DbAQojLxlnI12C%2B%2BV2J%2FtE0wMY1O4b9nH6WLiNJgfwQmON%2Bj10s3sm%2FPaGnfJsK7qqD%2FIoPY92atge5ccrjWBMlHoprH%2FR9m5bK3TD5dQQNr06i%2FR9187QuQgzxp030E2N6YYWXFXA1cvBIZrI12YQeNR3wg%2B92WuB9XncFyRZ86fKW82DyRhKEltqBOn5sugFI4yrs0aPVL%2FNh3K7kYvKUwNuJbOc8943HPewUn6FBwnnat9jO0opLB8TuI%2BdjK%2BKpIiLSZpF6EjIK3uw9o6Rx1UOH7giZEWWd%2BJ7V5vxqGyzUQEKz2UD51layGuMJ3to7WG9Htt6YLd1BoGu7%2BcWThVrh1nAZFFyRRk1uoflHhFrOJrDPIlMEL73Fn5%2BKnqiAZhrAEI9eXCqXiR6zfAzbDD3hPfEBjqkAaHLCUfl%2Bh4G8hqwy5MGoz2491Hc%2FLHMwdZ%2FPdp9Q5wWW%2Fv4jiq1iQqBMYkc20BNJhTcT39eSlNz0C26BCv8LJ5a4EPlIpi%2BWfFdvc3z3uoAMEjRZMrwiCk6GvkvsBuO0QAloXohUXeSQ5xzpgec71l0Q0EciGvoXjYBEKqeTAygT%2FMOKjSYkJcvVUFg2%2BAbPOvqp%2B0YTV4Sm809lI4l4GIsiFUV&X-Amz-Signature=ae57e1308247eb6d0177ca48e03e4e03af575724bb208dfe4dfa10d03daba1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ULHWKB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBXiJk%2BCxDVAJ6zTKrp3baOECNXAnciYhHNZIjzTfY2QIgR8xc2RfpxbLjnG%2BXQphnuFdxrFnbFwxorl3dJiAsRl4q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNr1I2vjtED%2BIyQV0yrcA6FMMGXI59IUBn2AcmItLFlEkonZs5tR0Nv4eqCvEqNN6578M43WnQ0xp4MZXqRWUN3M9gxGDkm7hA%2FWFZ6p6qlr9SLK5KabBIbcCYa9%2FVNGkzccQ9SL%2Bb2oNljy%2FKLdQd2Pb%2F66oslE9eT4ndJj1tPZVRWA%2BsrHD%2BacbVsL3sVS0eCqncv%2Bozu0h88R4cf3BLMUPHMdlUyE0ePnIvcCSmEok%2BKopjBV1V1cVEMnK8MuSxx3qkL2TEo%2Blcz2c%2FgWz2wDERN%2FahAW4X7AcykOVAksknmP%2BRTrjakGAnoO1PIgahER13DzK2dAz4M2zvsxGa%2F41A1GJWSPqDun%2ByV0F%2BGOYVJ%2FyP2ZfPM6D4WYq0%2Fl1ZA1Oo3%2B2%2FjRYvd6GiAvbowlzP7BhIWLyXXqgujYhPY6uxbhQwoGiGXguR0zUqzMxZpcmZmFaPOmHU5w4uTEKlnGvaCX9vPKK2LICi5ySQFYsf7utSxBSZpbSN2eGmTv20bgmMvK%2F2S%2BW7aIMcCUYsdTyEK3C2OjwnSEzL4twPETaS7K4hurHkzrwvVHie0ULsjdsEte26U8sIiS8aFh3UwITM6UUW1R1qCON7FC4nd6Xv%2FGi00OLTveGvZxqatYqF7O3DQJCy1P4dEsMLqE98QGOqUBTGBG8Ha9fSGKzVtwJ2Qa%2BagqjKyyjQ5gKCBZR8Liif99jguI5llL3GpryP0Y2SnLfP38dNRiovk%2FLo5s9vp1a4Uhlc%2FwO95vzaW7top3T6gJvQz0HOcuzKUKWrxgcWjUbJatBhx1uUncpyr%2BR9O5F0m6WQK0X1GbATE28vtFkL7bm2WDrXb1tVI%2FXaAzVlhI2d1VQ4ab%2BD9cKjDpLiL1I%2FyeKjKI&X-Amz-Signature=dbdff9e475abb1a793b1159896a6337aca9c5d9970896bf1929744b50349dd6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M3OSDU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKl8Inq62O4xcigAZ4lXWJRGUGf455r0ivDXkPOgaSbgIhANQjQNydD82uMWImnYyFMl9et974dg0ws8a0Xp7ffgYzKv8DCEQQABoMNjM3NDIzMTgzODA1Igx%2BdIEKRSQ1WFG%2BSI4q3AOrCqH9wOCB5Oy8Tbo3A6jNBl1AlSTVJbK3ZLSQDObS2YvV7NPkzZIGIPd6RNrs2l0DTxmJurtBfDMN6zThrrHSVj0lwbTbdIAlOKunh58KeEYerzl%2BJDzoeigme%2Bgpt4S4LloIdxcIrk5RKLMsAn4GHeE1RFT2jIkDqjNda0304RMnIF5ViOkKiESVvSzSk1AKrPvA%2FQ2qKNOFn3uMVaBehiw4bDyLibhON7DbAQojLxlnI12C%2B%2BV2J%2FtE0wMY1O4b9nH6WLiNJgfwQmON%2Bj10s3sm%2FPaGnfJsK7qqD%2FIoPY92atge5ccrjWBMlHoprH%2FR9m5bK3TD5dQQNr06i%2FR9187QuQgzxp030E2N6YYWXFXA1cvBIZrI12YQeNR3wg%2B92WuB9XncFyRZ86fKW82DyRhKEltqBOn5sugFI4yrs0aPVL%2FNh3K7kYvKUwNuJbOc8943HPewUn6FBwnnat9jO0opLB8TuI%2BdjK%2BKpIiLSZpF6EjIK3uw9o6Rx1UOH7giZEWWd%2BJ7V5vxqGyzUQEKz2UD51layGuMJ3to7WG9Htt6YLd1BoGu7%2BcWThVrh1nAZFFyRRk1uoflHhFrOJrDPIlMEL73Fn5%2BKnqiAZhrAEI9eXCqXiR6zfAzbDD3hPfEBjqkAaHLCUfl%2Bh4G8hqwy5MGoz2491Hc%2FLHMwdZ%2FPdp9Q5wWW%2Fv4jiq1iQqBMYkc20BNJhTcT39eSlNz0C26BCv8LJ5a4EPlIpi%2BWfFdvc3z3uoAMEjRZMrwiCk6GvkvsBuO0QAloXohUXeSQ5xzpgec71l0Q0EciGvoXjYBEKqeTAygT%2FMOKjSYkJcvVUFg2%2BAbPOvqp%2B0YTV4Sm809lI4l4GIsiFUV&X-Amz-Signature=911e5d44c51bbbac7de9ef541414b14a2b8438b7c70526cf5e71ec7a4f0a739a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRQ36X2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDES892VT3Ic9CXSaWGgMFkCav%2FRdJ0V1OSZWJCxXAM%2FgIhANRGWa8ZIrSS5RW0%2BWBNDuvxqwrKXb%2FEcfsZATxyBbxpKv8DCEQQABoMNjM3NDIzMTgzODA1IgySbsieK05vhGjk0lMq3AOL0ZIiTSTk3vK0pHrUAyDtZjdGa7yDloReujEn7xtv6ZZXVtmn%2BWJ%2BmfwKFGSDs%2BvNGKcm42f9flT4SaIh42js4BEkVpPnKo%2F8JYwBg7G4%2BOxWhtyGMuN2Q9BDJfIKgueREk7c65KCZUdj2A%2ByK1KLIuPT%2BlFumN1Oc2hkb0zfa3yrKZmFOzq1fhd8rqyttt4AjtiUw3ErvqHekGjcSnwQHOxEfBFcaknl30rKweOwM4Q3tjKB4qdIpYT5jDjZ7NAUBn%2BYjZAZjI7zo%2Fq6RqliPxIc6CU39SmTDHoL50REO4WzDPtblKuFTJygOGWxNLtdgOGBIF%2BJ2fpwVU3PAq7%2Br124%2FY2td1vZEdv%2FQFoxRPj8qF1eBJhJ7VWuuUukh70EewOOE6WHcoE83Ox6F4SxM10taRHCpluu8LK6dE0kYMC2TeMipYd9QHWebSe1X3Ff3erCTMD5VgPto%2BAKGXs2aVJ77iDVHcQx5JCSPPo2ZbYXWwLQdbruNRjPDkmycfdfiRXCS4FGmRg%2Fs808FOqJBeY3vX3Y2OayeRJw9Jlttvuq58uPyflaCRDvPuvJ1%2F0UlBoYCOTrPG5%2FxkZqs8XL6kUxCjEXkN9MPIKJQdkpXeToVIxBFEt%2FzQqvbjDihPfEBjqkAZYcr%2ByXu6Sar%2BSir07boW1sohE8wjvsVttV%2FRk%2FCTVc1G%2FjqIGp%2FE%2BTPf3B8%2FJ52yTU%2BelqZXDkvj9oAYrTDDMW8S6Z5OGECWb0OKsRbvP8bU0vlYxsJ7D7YGqD37cNOZDCwPVBRuhcRMewBXbGsb%2FaCCWkAb4g4%2BY%2BTGPIJU4zGnTBPiEyWOZcOmIYDe6WEN9JkK6ksTRClMGYbh4A2BieUL%2Bz&X-Amz-Signature=a35b7168a1b0e02ae5802592360914c4a80b3a0e4d475ef5e7668e90c8e1455e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M3OSDU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKl8Inq62O4xcigAZ4lXWJRGUGf455r0ivDXkPOgaSbgIhANQjQNydD82uMWImnYyFMl9et974dg0ws8a0Xp7ffgYzKv8DCEQQABoMNjM3NDIzMTgzODA1Igx%2BdIEKRSQ1WFG%2BSI4q3AOrCqH9wOCB5Oy8Tbo3A6jNBl1AlSTVJbK3ZLSQDObS2YvV7NPkzZIGIPd6RNrs2l0DTxmJurtBfDMN6zThrrHSVj0lwbTbdIAlOKunh58KeEYerzl%2BJDzoeigme%2Bgpt4S4LloIdxcIrk5RKLMsAn4GHeE1RFT2jIkDqjNda0304RMnIF5ViOkKiESVvSzSk1AKrPvA%2FQ2qKNOFn3uMVaBehiw4bDyLibhON7DbAQojLxlnI12C%2B%2BV2J%2FtE0wMY1O4b9nH6WLiNJgfwQmON%2Bj10s3sm%2FPaGnfJsK7qqD%2FIoPY92atge5ccrjWBMlHoprH%2FR9m5bK3TD5dQQNr06i%2FR9187QuQgzxp030E2N6YYWXFXA1cvBIZrI12YQeNR3wg%2B92WuB9XncFyRZ86fKW82DyRhKEltqBOn5sugFI4yrs0aPVL%2FNh3K7kYvKUwNuJbOc8943HPewUn6FBwnnat9jO0opLB8TuI%2BdjK%2BKpIiLSZpF6EjIK3uw9o6Rx1UOH7giZEWWd%2BJ7V5vxqGyzUQEKz2UD51layGuMJ3to7WG9Htt6YLd1BoGu7%2BcWThVrh1nAZFFyRRk1uoflHhFrOJrDPIlMEL73Fn5%2BKnqiAZhrAEI9eXCqXiR6zfAzbDD3hPfEBjqkAaHLCUfl%2Bh4G8hqwy5MGoz2491Hc%2FLHMwdZ%2FPdp9Q5wWW%2Fv4jiq1iQqBMYkc20BNJhTcT39eSlNz0C26BCv8LJ5a4EPlIpi%2BWfFdvc3z3uoAMEjRZMrwiCk6GvkvsBuO0QAloXohUXeSQ5xzpgec71l0Q0EciGvoXjYBEKqeTAygT%2FMOKjSYkJcvVUFg2%2BAbPOvqp%2B0YTV4Sm809lI4l4GIsiFUV&X-Amz-Signature=8b74b049d07ee277cbb9c80ecbe1c8bc766a6b1ddcaad3d6e116a068c2734a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLX3WWKC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk4cq0IDmJpesOk9fyWI00yMbfF1yE8B6%2BhFq3kKJqQQIgRxcwvJR%2FvP2RxCPQ%2FkJyPx6%2F1BtMvBDT8nVwkRAvahsq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAJyLhKv7h4OSE6o8SrcAw4BJGtPB2dRn3D%2BXQAFdS56yTt8jAxW3IW5Xy%2FSYEzHNXpneOUJgIIj97lz3HIDQhGpS7WF4cMvcY04Kva0kIfaY9oQMElvw2arCnzC1507cuEZQI0WzW8d79eEXV%2Bh7sxgvOT2KqpKvSuMgxua8raxI4qQA%2B0meDlXjpMRMZZx39LI5SdJdnO7uRdOY5b%2FYOa5cfLAs4rZN7WkyXbG5brGcpAVqlEIowAq3ZqX8cu8ARQmD04AcRDYBL4aEeBEbw9sdI9X%2BXy52SjhAi4m%2B3wZxSkqR6XzXdlzPHfTKkZyQodTNhDarkU1A3Njli4CzMnnCYnTYrFq7Tvsa9%2Btnsd7%2FchJPx%2BOVZXyR8O2g%2FVZ3ZCuFiefw79ir2qUX12Mg0eBNdrEwevQDn2xIW%2FOgV3Dhg29X3xlz1hLSYjIdCP4aGr7bLy9xYS0oSfq3SAtDhpEBvT73SJrcLIxwhrEQWc8Mb8OeOWfQ%2FW9Gk3TcwVCAv7IDtyk9BMU6i3OD1xAUyPfz6uGUcal8WNVOLU1ZIFh7BoiM%2BeoqR4in0kk68a7xm9hHO%2F7nvNqWEVnADqYwP7f1oaGZltvHnzX7Xy4w0i4BGQaO1ocTQMOFRttp6lGTWAUb7X7RWkg14HnMOuE98QGOqUB%2F0K0ttEKCz%2BOuz751IEQty9ipXaRVsa111ONshxLjiJNQjMQZ2HSoMgT7UDYlGgBnpNbKbg6AqxrYb0ArPVqZoQ0IyNPuJ9VQNvpQ9ZXG5tJbj%2FP9tJd5k7DvLjhJIgSM%2Buxw9ywzix3ityqpkRsUYd4tTF6xBLRAJdWxTb%2F5V6SN89zRCEJBZaDnJkzLT8HAb%2BMlGUe2bcJz7lDMxWyjRWZ1yTV&X-Amz-Signature=ad59d3ec7fd35f5474104be828d722ded70177bbe960dfa118c6ea59e59aaf42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHBXB7BW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiiaws8q%2FUjvwVX5w%2BiOQB0FGkp9YIBXYzVItD2OykHgIhAPwrNvLYhHCZ09spwXwHjP3U3Snt43xcSIEq9dioPMx%2FKv8DCEQQABoMNjM3NDIzMTgzODA1IgzNDhBeaXgmOXtj%2Busq3AN8gBEq4loigONudvWcxx97lBYvqppBRCVmhHywre8u1m5egCgZgfvla8WnNtS2p6JCwiwtOzYRrACoOejK3m7NUnyfT4kRQ95CYi9K93Ssl0NGLz0ZVUitLbdL5qePmhLLWrAjt%2FaTQHKzjICnU4ka50PvBkVmGjGwPreUIeOFHfrnJvcGqlDBWLeAW5xIENCEI%2FvCaSSBQG%2FtLVqizwMCyF54GvjDcycmbXBRGl2P%2B3upPkv5T47kr21d2duYzbJ4SFcUL06H%2FkEmq2eJN8YZGG9sDLyB93FuY0KJKSsjw6PM%2BSHAjEbzV%2FzZDRs32qUmwIgMMQiWYh3cYyIYe6nRQSy6tlaUlg96Cieym3yWdMi6jf%2BONpGg82TcgDj8P4yelqM9ecD2KIef%2FTQcGusmfsg16PBdOhC2mTT1oNJDVeKGz9UEyb9GP0T9plk72hMKelEKomPP23o9ngNcUqYfghdx4M1yG6kXjMKbCwtBn%2Fs29dHrjXD4TJD8dHYyjPGkOtjb6%2B3V6RqlHDoMcAg5tE6HygNMpKJLYuEN%2FQAyoDardiBgrIr7CTKiUysdGJmaTdRaMYawiOqPL2TNhVYGC61aReu6CX%2Fw0886G6eMTRxzK8MwecCh2eT6ejCmhPfEBjqkAQRJJg1Crkp2LwANNkv5YtvAFbKJ4tZBZ5HvhU6JLllz7PFwlU3b2iLuq%2FOasebfLDdoko6acgYYxpukdeAdXT%2FdZjCk3xdr6mkhGhKzP0Hnu%2BeVdH5UkoAbKAu%2FekNrLYvdp4i17wYp3KKrNTAid8sBwc8eEpdV%2FuhxHgRmqecEvOOFoXysmk8VFkA0Wc4%2Bw4BM5z10HLJaVX6hmfTy35W7e1Vx&X-Amz-Signature=3247efe4a838b8fd9ce0d8a49fc20d4e4df04330319a98f6d4fac3cfd2ec65c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C2CG7PP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8YRkjKFaa%2BMc3R%2Fl4eoeCIEP6fb1Hkzgz1357EpELgAiEA%2B7NzqYUK6sQR%2FFz0J9P4k1D%2B2gr9WAqBdtqhMz%2FfRS8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFDK344X%2FagFB8p%2FlSrcA6Mbecm1sN3XK%2FbT%2F4uUVMR%2FJSuI6WvWem493bGl%2F%2FpyVVU%2F6G92D05YyXoMsw9tpRCvMnmvQZT%2Fqn9%2FGukCDtVGcfjhZ5ogj5jGZSkCXepCxuZPbmdjkQyKdSEGncyMROfBjB1Wf5x6acoOBNVlxftg2cdPoeMSEhWHRF%2F6D4TXHTAg02bT382HRlxmtn0TGeXzFx7BSZnjXn3iXb02k7cx36G9zC8T3gxNY2aOY7YrlQVgPzhDac%2BC7YOIu45UHXCBMhbhqH38AzC8S6%2Fj%2B0d9y4quNYAI9iw%2BrixYTgpDrtST3MpOYKCRSrdpskZkeB0NLDMlaN0r%2BMkyp1n12W5m%2FXWMa2TXAXWI1rDKsehw00ttthxMMblVKHz45%2FAI1lqWZJihU5RJxGnnSvNyFCAEXaIsierx7b6zkEFXyb4H5Wzv8ndX4w7T%2BOd%2F84BDq08M2uW1cTqiKmALPXWVTs6ucVSA653UOkx2Ilg9z6oN8QcdVRqamJITrIjeTLCBINP1tK5ClyDl%2BayfDzr9iTdTC7yg3W34iiuLWd3MRo79DPLH9QpfeuY5EG2zd4O2isK0TnSB6BHcniya2N4lwxfQ3Qh7kATH7LYeeDSSC5sCqGtDkNI3WPN4kxPQMM6E98QGOqUBUKgXRWl%2B2UpBfs9RDVd%2Fa8EWEpDE5Dw%2FKdYrg%2FOrB%2FreswY0jfEkvvUNECRq%2F7q9Z%2Bxx23vEB1hNwXh%2BLoD9c3pwM4xy5GzDLA6pXqNPBw3RQpn5lv1%2FtRohsCS2CiBm8vkCFJGDngz92xu0AluOSYTfH9C4d0rOO1V4QLS9nf5j%2FYFRcRIFKb4jeWT4Bk4Y0u8JR3UDha2g1m%2B%2FmKhnYDlkB86n&X-Amz-Signature=c5f7dad327f914572c93bf7ecd875fb1c34a79eee6bc634b81c779f062230e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZUFPZ4Y%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMoKHs1glfyROyfpBtNemHJvjBMGx0ezQgwO%2FdMuBrqwIgMF8hzP03iMYopob7CwdUEdaeXPlQ6HT7woyrSqFU7esq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFDXS0QFBEEGsjcr4ircA1bHmczBb6QF2C4%2B0I4FTWvNMVszGj1uxStXhKryU%2FsYYTyVFwRPmEf5GtbDLdP2LJzjiXOYID0gRn%2BlJUPjz1p%2FidCU80QxDN1LDKeYbGLTYsTM1OBoUWKwRwyx3tMEl5KQjeQ8vACXz7NpEUJavsQOAf99Rw%2BBw9d2aDntFHw99EnPileD0LhDPfg%2Br4Rhf8QxNSXimItmu5O7d0nK8yVT1xbiauXKfrjyhUKy2tMlnW1%2F4tFRm%2FtFAOyTWUjW3vx7MH3WKFoB1qAIk9YJaAvYgEno0JQ2zh4DVcfd3Njgcvecqp%2BjwEcofXYpplw0jSUFuERno114FhvKAuWC5sTFrABI7rwU7%2Fb0MkZh6W3s4z7g2y5zZotg2tO09kzicTD0KuXEQGwQchmSqSLICkdaokAeITcQfDQ3ptW6hUuLFOFqQHZ7QI279CF5pIjdSTH3GevBdhO%2B9Ydg%2FwRZJ%2BXBLk5NqXlTHhNqYx3Fes%2BsBvA%2F%2FPDywnEcuUgHrv00hNNMSj0c02jOW5EXgJL303ulRtsxFfrWn9KY6n2x38jg3Bi3Y%2FwGEM0bjuzM3MuSYBXUMVBah2Pj4M01gv9phXINrBXIRZ6OVXXFdfa5rjqNDWeFcwv%2BePyh8%2F8nMI6F98QGOqUBm8rZGNggEhn0hWXNk8A5QvJ2FN3G7NCCyCLYj2hiQHp49AbIBbMUgUZO%2FS0a554hrK51PHp7HkvhXI3dz6395YjKlCVL8NY6YU3dyZBsljYITZctmPhUg1DaGLh8qvSg37kRlnNDNAKDoKXnAvHRd5G0fGygnSInCKttT2t9RLd2%2F0qNpZRKYrY4FLQNBejZlNejrIbrqoYIaVtEGoYLpOkzJc3U&X-Amz-Signature=2b71ff01a356e35a6bcb29f9d11a7e6e7efb165f0f1e94612d370b94b99dd1d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVF4BRLD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQrXbFxBk4k7TSe%2FQZ%2FOllKpDdLWOMhzBvHJ7JF%2BIAEAiAG%2FBQV4n5QwBNYvVoj53dSX6Vt6SSDGd03qNLSSnmu4Cr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMg8fF2wjU7e82ekb9KtwDde9ppGB1WmvazSfWbkIzahDAMvd0GL2XbLdyPAYombVo%2FXlgAWYOQ7ZfgYmrGpa2MfEhGifebkpLQgCvPBEwGlQcEEajV6hIH4U%2BilJHuxlESRNYsrtqM6NTOP0hSkjhrycEDhpB9A4mS1R4Id7CZF3YH1vU2IAJiMZncWjRTSjVS7HlswjtqUr4IOfHy6j6YbeCfvgMGTYKzvJJiskTF8xjcAEHQuPZRgBL0AqihSTj1wlwdw5T5GcAc9rcHUlfuZ0cigg4KgsGMGWEf5LVa4n9v%2BOoxy2zCXJE6s%2FquHKm2707WtJa8QCPti3tUk8%2FQuhsDoRyBd9dxBM7AVoZXUViAtBZeTlcphql%2BCfi0FWlUGT41yFOoIIiwF0NU6YmauKqlg3haNotJDTtbVybAFGoc0XqyuZeHogDbwZR%2Fv4nJGsulIeZ9OfeByfSFrded4fSsVcKrrCIjI1MHztFwa7MlfVfG7VpYqykiltR5cHpwfIJpAbODJB%2Bq4aZyl80EWxqFdv95xt4sccbtnalWrUFcPC2imlGLwvETDJJ6hXDnzNODNfDQiJd3CqdT7Wv4k4kguf8kOfmc7NE%2BUf5UYxUXPpadL15z4gpA%2F7EIQb1BUDnREmE2lgq%2Bb8wuIT3xAY6pgELU1urkc80rTdIRvUbMLm6npVE2EWbaaujQBpPbqvixww8pyqcyhVT2rj3i%2BvVuLUUf3z63PcqoR4xvMcWIAKlVtC94x9JdT4ixB1hGHunebqE4cp7OWpfTKLkMgiIvnHQExcHypyBLh%2BJxNUqj5vqSUEzT5KJ%2BxDQ1yh8I8P%2BCXqwKTH4noZTKu3Q0YOwV6r%2B9KzRHYUo4rOm%2FqVGjTzJ5FTQtyfi&X-Amz-Signature=eb9885291e4952c4601c86dd86418392c451a46571ad323fb368d0c9f58f437e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M3OSDU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKl8Inq62O4xcigAZ4lXWJRGUGf455r0ivDXkPOgaSbgIhANQjQNydD82uMWImnYyFMl9et974dg0ws8a0Xp7ffgYzKv8DCEQQABoMNjM3NDIzMTgzODA1Igx%2BdIEKRSQ1WFG%2BSI4q3AOrCqH9wOCB5Oy8Tbo3A6jNBl1AlSTVJbK3ZLSQDObS2YvV7NPkzZIGIPd6RNrs2l0DTxmJurtBfDMN6zThrrHSVj0lwbTbdIAlOKunh58KeEYerzl%2BJDzoeigme%2Bgpt4S4LloIdxcIrk5RKLMsAn4GHeE1RFT2jIkDqjNda0304RMnIF5ViOkKiESVvSzSk1AKrPvA%2FQ2qKNOFn3uMVaBehiw4bDyLibhON7DbAQojLxlnI12C%2B%2BV2J%2FtE0wMY1O4b9nH6WLiNJgfwQmON%2Bj10s3sm%2FPaGnfJsK7qqD%2FIoPY92atge5ccrjWBMlHoprH%2FR9m5bK3TD5dQQNr06i%2FR9187QuQgzxp030E2N6YYWXFXA1cvBIZrI12YQeNR3wg%2B92WuB9XncFyRZ86fKW82DyRhKEltqBOn5sugFI4yrs0aPVL%2FNh3K7kYvKUwNuJbOc8943HPewUn6FBwnnat9jO0opLB8TuI%2BdjK%2BKpIiLSZpF6EjIK3uw9o6Rx1UOH7giZEWWd%2BJ7V5vxqGyzUQEKz2UD51layGuMJ3to7WG9Htt6YLd1BoGu7%2BcWThVrh1nAZFFyRRk1uoflHhFrOJrDPIlMEL73Fn5%2BKnqiAZhrAEI9eXCqXiR6zfAzbDD3hPfEBjqkAaHLCUfl%2Bh4G8hqwy5MGoz2491Hc%2FLHMwdZ%2FPdp9Q5wWW%2Fv4jiq1iQqBMYkc20BNJhTcT39eSlNz0C26BCv8LJ5a4EPlIpi%2BWfFdvc3z3uoAMEjRZMrwiCk6GvkvsBuO0QAloXohUXeSQ5xzpgec71l0Q0EciGvoXjYBEKqeTAygT%2FMOKjSYkJcvVUFg2%2BAbPOvqp%2B0YTV4Sm809lI4l4GIsiFUV&X-Amz-Signature=9cf549df504c8017954ce3ddf27e3a83fcc275d6b29101015e5b326edb6534db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622M3OSDU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKl8Inq62O4xcigAZ4lXWJRGUGf455r0ivDXkPOgaSbgIhANQjQNydD82uMWImnYyFMl9et974dg0ws8a0Xp7ffgYzKv8DCEQQABoMNjM3NDIzMTgzODA1Igx%2BdIEKRSQ1WFG%2BSI4q3AOrCqH9wOCB5Oy8Tbo3A6jNBl1AlSTVJbK3ZLSQDObS2YvV7NPkzZIGIPd6RNrs2l0DTxmJurtBfDMN6zThrrHSVj0lwbTbdIAlOKunh58KeEYerzl%2BJDzoeigme%2Bgpt4S4LloIdxcIrk5RKLMsAn4GHeE1RFT2jIkDqjNda0304RMnIF5ViOkKiESVvSzSk1AKrPvA%2FQ2qKNOFn3uMVaBehiw4bDyLibhON7DbAQojLxlnI12C%2B%2BV2J%2FtE0wMY1O4b9nH6WLiNJgfwQmON%2Bj10s3sm%2FPaGnfJsK7qqD%2FIoPY92atge5ccrjWBMlHoprH%2FR9m5bK3TD5dQQNr06i%2FR9187QuQgzxp030E2N6YYWXFXA1cvBIZrI12YQeNR3wg%2B92WuB9XncFyRZ86fKW82DyRhKEltqBOn5sugFI4yrs0aPVL%2FNh3K7kYvKUwNuJbOc8943HPewUn6FBwnnat9jO0opLB8TuI%2BdjK%2BKpIiLSZpF6EjIK3uw9o6Rx1UOH7giZEWWd%2BJ7V5vxqGyzUQEKz2UD51layGuMJ3to7WG9Htt6YLd1BoGu7%2BcWThVrh1nAZFFyRRk1uoflHhFrOJrDPIlMEL73Fn5%2BKnqiAZhrAEI9eXCqXiR6zfAzbDD3hPfEBjqkAaHLCUfl%2Bh4G8hqwy5MGoz2491Hc%2FLHMwdZ%2FPdp9Q5wWW%2Fv4jiq1iQqBMYkc20BNJhTcT39eSlNz0C26BCv8LJ5a4EPlIpi%2BWfFdvc3z3uoAMEjRZMrwiCk6GvkvsBuO0QAloXohUXeSQ5xzpgec71l0Q0EciGvoXjYBEKqeTAygT%2FMOKjSYkJcvVUFg2%2BAbPOvqp%2B0YTV4Sm809lI4l4GIsiFUV&X-Amz-Signature=d5dd6d89d40c02a7ced2090acd7f3bb2acc99a0508dea2122e08277fa0851afd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJESPOY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAKkzEz4MJdggdRH7gDR7a8%2BZcmxyvP%2BbsM%2Bw3kAEmiAiEAy0o5Hn0ZvlW7XWgKRayxcwSsAnZQ1SpxxDtR3ko3A5gq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOY9%2B0y8CRzySXZsTircAza2TgbAkSHeSIW50odiNur5z8etjZR7rJuVolQTJIgqGpr6%2B1D8oYCqnxEzZ2tfAj6zWS%2BYuwxfY%2BNd0pd8dnUI7qeA5CjIwqAXqffaEjTvV9na5UdBhGQN5yEx76OHFD1r9MnH4upfl4YLh0EDLn1a01%2Fyypi0oC2gHXXsCpV2XyzBiyiZTwegfaG8G2W3A%2BHJ6o7ARydtPRt6JinQDe7%2FTo3tDa0levg4WGWxshMb78ohEwAba2DZ55FjHJEcahuVmkAeHYPHt%2BZMtEs%2FW2%2FyCvDXJVSngkREtbYcYPNchIpgKRsd7frefnoc7nUcfNVrRdxbFObjWSzCBZXg5ZcfGSnMwJbxWWx9I2BIVQKyy0JI6X10ZBoDR9aBbFWodFm3pbH0tCbwU5wAkHzXPy8b877lYzFEN6Xj8zZcWMaPe26mireWIkW8LJr0K6JR3atGXHUrqHbAyUg0vL0kL6APA7hQQZbicj1nvBhJmoX9yOF2QgbHTruXoa1TaX1pwNY%2BIerB%2BfN5cOGa2wTwYQGjTA2kGpDcuGlQSdY%2Fjr3VSNTS6rrFpdOnXfto%2Fv3QWho%2BqRGGenN%2FmFo9ZfD7NkuKvCc8pIGXipOq0rK4DHoxPAo8dWNz2XrCqII2MMWE98QGOqUBH4AughqU%2FLbfm9aDWfzddeddmA2XhdbKwElPxigTn3buj%2FQUfZ%2Fj5V4LSknmZzJqbzJR6mvr01W0DIr4C4x9a5r%2Fha7hSfh%2FaQphJoVh9BwaQfKsjQmnGA%2FworC9kxRAaBp7IkjZJ4CrDaZBCcZtVOxLMUAi%2BzU1LBXK6jdM28V5xlnuzt7Q2g9GcSqPpRUFd8%2B%2B4WSehAQyk3m%2BI2ahPJqB1%2Bbl&X-Amz-Signature=df3a06d906dacc768cd54f77965573d108a4a3757fdcb937f8cfa4ad08539be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJESPOY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAKkzEz4MJdggdRH7gDR7a8%2BZcmxyvP%2BbsM%2Bw3kAEmiAiEAy0o5Hn0ZvlW7XWgKRayxcwSsAnZQ1SpxxDtR3ko3A5gq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOY9%2B0y8CRzySXZsTircAza2TgbAkSHeSIW50odiNur5z8etjZR7rJuVolQTJIgqGpr6%2B1D8oYCqnxEzZ2tfAj6zWS%2BYuwxfY%2BNd0pd8dnUI7qeA5CjIwqAXqffaEjTvV9na5UdBhGQN5yEx76OHFD1r9MnH4upfl4YLh0EDLn1a01%2Fyypi0oC2gHXXsCpV2XyzBiyiZTwegfaG8G2W3A%2BHJ6o7ARydtPRt6JinQDe7%2FTo3tDa0levg4WGWxshMb78ohEwAba2DZ55FjHJEcahuVmkAeHYPHt%2BZMtEs%2FW2%2FyCvDXJVSngkREtbYcYPNchIpgKRsd7frefnoc7nUcfNVrRdxbFObjWSzCBZXg5ZcfGSnMwJbxWWx9I2BIVQKyy0JI6X10ZBoDR9aBbFWodFm3pbH0tCbwU5wAkHzXPy8b877lYzFEN6Xj8zZcWMaPe26mireWIkW8LJr0K6JR3atGXHUrqHbAyUg0vL0kL6APA7hQQZbicj1nvBhJmoX9yOF2QgbHTruXoa1TaX1pwNY%2BIerB%2BfN5cOGa2wTwYQGjTA2kGpDcuGlQSdY%2Fjr3VSNTS6rrFpdOnXfto%2Fv3QWho%2BqRGGenN%2FmFo9ZfD7NkuKvCc8pIGXipOq0rK4DHoxPAo8dWNz2XrCqII2MMWE98QGOqUBH4AughqU%2FLbfm9aDWfzddeddmA2XhdbKwElPxigTn3buj%2FQUfZ%2Fj5V4LSknmZzJqbzJR6mvr01W0DIr4C4x9a5r%2Fha7hSfh%2FaQphJoVh9BwaQfKsjQmnGA%2FworC9kxRAaBp7IkjZJ4CrDaZBCcZtVOxLMUAi%2BzU1LBXK6jdM28V5xlnuzt7Q2g9GcSqPpRUFd8%2B%2B4WSehAQyk3m%2BI2ahPJqB1%2Bbl&X-Amz-Signature=cae20db9c3e6d3753c9f262dedb20825a522ea10ed4ff0bbf53ac9c0996ae898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJESPOY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAKkzEz4MJdggdRH7gDR7a8%2BZcmxyvP%2BbsM%2Bw3kAEmiAiEAy0o5Hn0ZvlW7XWgKRayxcwSsAnZQ1SpxxDtR3ko3A5gq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOY9%2B0y8CRzySXZsTircAza2TgbAkSHeSIW50odiNur5z8etjZR7rJuVolQTJIgqGpr6%2B1D8oYCqnxEzZ2tfAj6zWS%2BYuwxfY%2BNd0pd8dnUI7qeA5CjIwqAXqffaEjTvV9na5UdBhGQN5yEx76OHFD1r9MnH4upfl4YLh0EDLn1a01%2Fyypi0oC2gHXXsCpV2XyzBiyiZTwegfaG8G2W3A%2BHJ6o7ARydtPRt6JinQDe7%2FTo3tDa0levg4WGWxshMb78ohEwAba2DZ55FjHJEcahuVmkAeHYPHt%2BZMtEs%2FW2%2FyCvDXJVSngkREtbYcYPNchIpgKRsd7frefnoc7nUcfNVrRdxbFObjWSzCBZXg5ZcfGSnMwJbxWWx9I2BIVQKyy0JI6X10ZBoDR9aBbFWodFm3pbH0tCbwU5wAkHzXPy8b877lYzFEN6Xj8zZcWMaPe26mireWIkW8LJr0K6JR3atGXHUrqHbAyUg0vL0kL6APA7hQQZbicj1nvBhJmoX9yOF2QgbHTruXoa1TaX1pwNY%2BIerB%2BfN5cOGa2wTwYQGjTA2kGpDcuGlQSdY%2Fjr3VSNTS6rrFpdOnXfto%2Fv3QWho%2BqRGGenN%2FmFo9ZfD7NkuKvCc8pIGXipOq0rK4DHoxPAo8dWNz2XrCqII2MMWE98QGOqUBH4AughqU%2FLbfm9aDWfzddeddmA2XhdbKwElPxigTn3buj%2FQUfZ%2Fj5V4LSknmZzJqbzJR6mvr01W0DIr4C4x9a5r%2Fha7hSfh%2FaQphJoVh9BwaQfKsjQmnGA%2FworC9kxRAaBp7IkjZJ4CrDaZBCcZtVOxLMUAi%2BzU1LBXK6jdM28V5xlnuzt7Q2g9GcSqPpRUFd8%2B%2B4WSehAQyk3m%2BI2ahPJqB1%2Bbl&X-Amz-Signature=20eed776b13a9cc4cbdb21d5fe0130674547f92b4aeb3331fd3dfe921cde1e49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJESPOY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAKkzEz4MJdggdRH7gDR7a8%2BZcmxyvP%2BbsM%2Bw3kAEmiAiEAy0o5Hn0ZvlW7XWgKRayxcwSsAnZQ1SpxxDtR3ko3A5gq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOY9%2B0y8CRzySXZsTircAza2TgbAkSHeSIW50odiNur5z8etjZR7rJuVolQTJIgqGpr6%2B1D8oYCqnxEzZ2tfAj6zWS%2BYuwxfY%2BNd0pd8dnUI7qeA5CjIwqAXqffaEjTvV9na5UdBhGQN5yEx76OHFD1r9MnH4upfl4YLh0EDLn1a01%2Fyypi0oC2gHXXsCpV2XyzBiyiZTwegfaG8G2W3A%2BHJ6o7ARydtPRt6JinQDe7%2FTo3tDa0levg4WGWxshMb78ohEwAba2DZ55FjHJEcahuVmkAeHYPHt%2BZMtEs%2FW2%2FyCvDXJVSngkREtbYcYPNchIpgKRsd7frefnoc7nUcfNVrRdxbFObjWSzCBZXg5ZcfGSnMwJbxWWx9I2BIVQKyy0JI6X10ZBoDR9aBbFWodFm3pbH0tCbwU5wAkHzXPy8b877lYzFEN6Xj8zZcWMaPe26mireWIkW8LJr0K6JR3atGXHUrqHbAyUg0vL0kL6APA7hQQZbicj1nvBhJmoX9yOF2QgbHTruXoa1TaX1pwNY%2BIerB%2BfN5cOGa2wTwYQGjTA2kGpDcuGlQSdY%2Fjr3VSNTS6rrFpdOnXfto%2Fv3QWho%2BqRGGenN%2FmFo9ZfD7NkuKvCc8pIGXipOq0rK4DHoxPAo8dWNz2XrCqII2MMWE98QGOqUBH4AughqU%2FLbfm9aDWfzddeddmA2XhdbKwElPxigTn3buj%2FQUfZ%2Fj5V4LSknmZzJqbzJR6mvr01W0DIr4C4x9a5r%2Fha7hSfh%2FaQphJoVh9BwaQfKsjQmnGA%2FworC9kxRAaBp7IkjZJ4CrDaZBCcZtVOxLMUAi%2BzU1LBXK6jdM28V5xlnuzt7Q2g9GcSqPpRUFd8%2B%2B4WSehAQyk3m%2BI2ahPJqB1%2Bbl&X-Amz-Signature=438f7c7d1d3db2f0df8a6fd368c73ed719248eb05fea6308c3a390138c6a8c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJESPOY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAKkzEz4MJdggdRH7gDR7a8%2BZcmxyvP%2BbsM%2Bw3kAEmiAiEAy0o5Hn0ZvlW7XWgKRayxcwSsAnZQ1SpxxDtR3ko3A5gq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOY9%2B0y8CRzySXZsTircAza2TgbAkSHeSIW50odiNur5z8etjZR7rJuVolQTJIgqGpr6%2B1D8oYCqnxEzZ2tfAj6zWS%2BYuwxfY%2BNd0pd8dnUI7qeA5CjIwqAXqffaEjTvV9na5UdBhGQN5yEx76OHFD1r9MnH4upfl4YLh0EDLn1a01%2Fyypi0oC2gHXXsCpV2XyzBiyiZTwegfaG8G2W3A%2BHJ6o7ARydtPRt6JinQDe7%2FTo3tDa0levg4WGWxshMb78ohEwAba2DZ55FjHJEcahuVmkAeHYPHt%2BZMtEs%2FW2%2FyCvDXJVSngkREtbYcYPNchIpgKRsd7frefnoc7nUcfNVrRdxbFObjWSzCBZXg5ZcfGSnMwJbxWWx9I2BIVQKyy0JI6X10ZBoDR9aBbFWodFm3pbH0tCbwU5wAkHzXPy8b877lYzFEN6Xj8zZcWMaPe26mireWIkW8LJr0K6JR3atGXHUrqHbAyUg0vL0kL6APA7hQQZbicj1nvBhJmoX9yOF2QgbHTruXoa1TaX1pwNY%2BIerB%2BfN5cOGa2wTwYQGjTA2kGpDcuGlQSdY%2Fjr3VSNTS6rrFpdOnXfto%2Fv3QWho%2BqRGGenN%2FmFo9ZfD7NkuKvCc8pIGXipOq0rK4DHoxPAo8dWNz2XrCqII2MMWE98QGOqUBH4AughqU%2FLbfm9aDWfzddeddmA2XhdbKwElPxigTn3buj%2FQUfZ%2Fj5V4LSknmZzJqbzJR6mvr01W0DIr4C4x9a5r%2Fha7hSfh%2FaQphJoVh9BwaQfKsjQmnGA%2FworC9kxRAaBp7IkjZJ4CrDaZBCcZtVOxLMUAi%2BzU1LBXK6jdM28V5xlnuzt7Q2g9GcSqPpRUFd8%2B%2B4WSehAQyk3m%2BI2ahPJqB1%2Bbl&X-Amz-Signature=78e2e968f44a7c84b68ff740371c6000ff29377ec2113116dc60ebdba55bf1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJESPOY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAKkzEz4MJdggdRH7gDR7a8%2BZcmxyvP%2BbsM%2Bw3kAEmiAiEAy0o5Hn0ZvlW7XWgKRayxcwSsAnZQ1SpxxDtR3ko3A5gq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOY9%2B0y8CRzySXZsTircAza2TgbAkSHeSIW50odiNur5z8etjZR7rJuVolQTJIgqGpr6%2B1D8oYCqnxEzZ2tfAj6zWS%2BYuwxfY%2BNd0pd8dnUI7qeA5CjIwqAXqffaEjTvV9na5UdBhGQN5yEx76OHFD1r9MnH4upfl4YLh0EDLn1a01%2Fyypi0oC2gHXXsCpV2XyzBiyiZTwegfaG8G2W3A%2BHJ6o7ARydtPRt6JinQDe7%2FTo3tDa0levg4WGWxshMb78ohEwAba2DZ55FjHJEcahuVmkAeHYPHt%2BZMtEs%2FW2%2FyCvDXJVSngkREtbYcYPNchIpgKRsd7frefnoc7nUcfNVrRdxbFObjWSzCBZXg5ZcfGSnMwJbxWWx9I2BIVQKyy0JI6X10ZBoDR9aBbFWodFm3pbH0tCbwU5wAkHzXPy8b877lYzFEN6Xj8zZcWMaPe26mireWIkW8LJr0K6JR3atGXHUrqHbAyUg0vL0kL6APA7hQQZbicj1nvBhJmoX9yOF2QgbHTruXoa1TaX1pwNY%2BIerB%2BfN5cOGa2wTwYQGjTA2kGpDcuGlQSdY%2Fjr3VSNTS6rrFpdOnXfto%2Fv3QWho%2BqRGGenN%2FmFo9ZfD7NkuKvCc8pIGXipOq0rK4DHoxPAo8dWNz2XrCqII2MMWE98QGOqUBH4AughqU%2FLbfm9aDWfzddeddmA2XhdbKwElPxigTn3buj%2FQUfZ%2Fj5V4LSknmZzJqbzJR6mvr01W0DIr4C4x9a5r%2Fha7hSfh%2FaQphJoVh9BwaQfKsjQmnGA%2FworC9kxRAaBp7IkjZJ4CrDaZBCcZtVOxLMUAi%2BzU1LBXK6jdM28V5xlnuzt7Q2g9GcSqPpRUFd8%2B%2B4WSehAQyk3m%2BI2ahPJqB1%2Bbl&X-Amz-Signature=c4bb003c0398f00a39451a52cc6000cd2a3dcb7fec7ab479199e8e6d2fa630ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJESPOY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAKkzEz4MJdggdRH7gDR7a8%2BZcmxyvP%2BbsM%2Bw3kAEmiAiEAy0o5Hn0ZvlW7XWgKRayxcwSsAnZQ1SpxxDtR3ko3A5gq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOY9%2B0y8CRzySXZsTircAza2TgbAkSHeSIW50odiNur5z8etjZR7rJuVolQTJIgqGpr6%2B1D8oYCqnxEzZ2tfAj6zWS%2BYuwxfY%2BNd0pd8dnUI7qeA5CjIwqAXqffaEjTvV9na5UdBhGQN5yEx76OHFD1r9MnH4upfl4YLh0EDLn1a01%2Fyypi0oC2gHXXsCpV2XyzBiyiZTwegfaG8G2W3A%2BHJ6o7ARydtPRt6JinQDe7%2FTo3tDa0levg4WGWxshMb78ohEwAba2DZ55FjHJEcahuVmkAeHYPHt%2BZMtEs%2FW2%2FyCvDXJVSngkREtbYcYPNchIpgKRsd7frefnoc7nUcfNVrRdxbFObjWSzCBZXg5ZcfGSnMwJbxWWx9I2BIVQKyy0JI6X10ZBoDR9aBbFWodFm3pbH0tCbwU5wAkHzXPy8b877lYzFEN6Xj8zZcWMaPe26mireWIkW8LJr0K6JR3atGXHUrqHbAyUg0vL0kL6APA7hQQZbicj1nvBhJmoX9yOF2QgbHTruXoa1TaX1pwNY%2BIerB%2BfN5cOGa2wTwYQGjTA2kGpDcuGlQSdY%2Fjr3VSNTS6rrFpdOnXfto%2Fv3QWho%2BqRGGenN%2FmFo9ZfD7NkuKvCc8pIGXipOq0rK4DHoxPAo8dWNz2XrCqII2MMWE98QGOqUBH4AughqU%2FLbfm9aDWfzddeddmA2XhdbKwElPxigTn3buj%2FQUfZ%2Fj5V4LSknmZzJqbzJR6mvr01W0DIr4C4x9a5r%2Fha7hSfh%2FaQphJoVh9BwaQfKsjQmnGA%2FworC9kxRAaBp7IkjZJ4CrDaZBCcZtVOxLMUAi%2BzU1LBXK6jdM28V5xlnuzt7Q2g9GcSqPpRUFd8%2B%2B4WSehAQyk3m%2BI2ahPJqB1%2Bbl&X-Amz-Signature=20eed776b13a9cc4cbdb21d5fe0130674547f92b4aeb3331fd3dfe921cde1e49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJESPOY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAKkzEz4MJdggdRH7gDR7a8%2BZcmxyvP%2BbsM%2Bw3kAEmiAiEAy0o5Hn0ZvlW7XWgKRayxcwSsAnZQ1SpxxDtR3ko3A5gq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOY9%2B0y8CRzySXZsTircAza2TgbAkSHeSIW50odiNur5z8etjZR7rJuVolQTJIgqGpr6%2B1D8oYCqnxEzZ2tfAj6zWS%2BYuwxfY%2BNd0pd8dnUI7qeA5CjIwqAXqffaEjTvV9na5UdBhGQN5yEx76OHFD1r9MnH4upfl4YLh0EDLn1a01%2Fyypi0oC2gHXXsCpV2XyzBiyiZTwegfaG8G2W3A%2BHJ6o7ARydtPRt6JinQDe7%2FTo3tDa0levg4WGWxshMb78ohEwAba2DZ55FjHJEcahuVmkAeHYPHt%2BZMtEs%2FW2%2FyCvDXJVSngkREtbYcYPNchIpgKRsd7frefnoc7nUcfNVrRdxbFObjWSzCBZXg5ZcfGSnMwJbxWWx9I2BIVQKyy0JI6X10ZBoDR9aBbFWodFm3pbH0tCbwU5wAkHzXPy8b877lYzFEN6Xj8zZcWMaPe26mireWIkW8LJr0K6JR3atGXHUrqHbAyUg0vL0kL6APA7hQQZbicj1nvBhJmoX9yOF2QgbHTruXoa1TaX1pwNY%2BIerB%2BfN5cOGa2wTwYQGjTA2kGpDcuGlQSdY%2Fjr3VSNTS6rrFpdOnXfto%2Fv3QWho%2BqRGGenN%2FmFo9ZfD7NkuKvCc8pIGXipOq0rK4DHoxPAo8dWNz2XrCqII2MMWE98QGOqUBH4AughqU%2FLbfm9aDWfzddeddmA2XhdbKwElPxigTn3buj%2FQUfZ%2Fj5V4LSknmZzJqbzJR6mvr01W0DIr4C4x9a5r%2Fha7hSfh%2FaQphJoVh9BwaQfKsjQmnGA%2FworC9kxRAaBp7IkjZJ4CrDaZBCcZtVOxLMUAi%2BzU1LBXK6jdM28V5xlnuzt7Q2g9GcSqPpRUFd8%2B%2B4WSehAQyk3m%2BI2ahPJqB1%2Bbl&X-Amz-Signature=2b13ef43e71f17de22aed2ca53b534eaa0d810b8e1308e53c6cc6708d2d0878b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJESPOY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAKkzEz4MJdggdRH7gDR7a8%2BZcmxyvP%2BbsM%2Bw3kAEmiAiEAy0o5Hn0ZvlW7XWgKRayxcwSsAnZQ1SpxxDtR3ko3A5gq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOY9%2B0y8CRzySXZsTircAza2TgbAkSHeSIW50odiNur5z8etjZR7rJuVolQTJIgqGpr6%2B1D8oYCqnxEzZ2tfAj6zWS%2BYuwxfY%2BNd0pd8dnUI7qeA5CjIwqAXqffaEjTvV9na5UdBhGQN5yEx76OHFD1r9MnH4upfl4YLh0EDLn1a01%2Fyypi0oC2gHXXsCpV2XyzBiyiZTwegfaG8G2W3A%2BHJ6o7ARydtPRt6JinQDe7%2FTo3tDa0levg4WGWxshMb78ohEwAba2DZ55FjHJEcahuVmkAeHYPHt%2BZMtEs%2FW2%2FyCvDXJVSngkREtbYcYPNchIpgKRsd7frefnoc7nUcfNVrRdxbFObjWSzCBZXg5ZcfGSnMwJbxWWx9I2BIVQKyy0JI6X10ZBoDR9aBbFWodFm3pbH0tCbwU5wAkHzXPy8b877lYzFEN6Xj8zZcWMaPe26mireWIkW8LJr0K6JR3atGXHUrqHbAyUg0vL0kL6APA7hQQZbicj1nvBhJmoX9yOF2QgbHTruXoa1TaX1pwNY%2BIerB%2BfN5cOGa2wTwYQGjTA2kGpDcuGlQSdY%2Fjr3VSNTS6rrFpdOnXfto%2Fv3QWho%2BqRGGenN%2FmFo9ZfD7NkuKvCc8pIGXipOq0rK4DHoxPAo8dWNz2XrCqII2MMWE98QGOqUBH4AughqU%2FLbfm9aDWfzddeddmA2XhdbKwElPxigTn3buj%2FQUfZ%2Fj5V4LSknmZzJqbzJR6mvr01W0DIr4C4x9a5r%2Fha7hSfh%2FaQphJoVh9BwaQfKsjQmnGA%2FworC9kxRAaBp7IkjZJ4CrDaZBCcZtVOxLMUAi%2BzU1LBXK6jdM28V5xlnuzt7Q2g9GcSqPpRUFd8%2B%2B4WSehAQyk3m%2BI2ahPJqB1%2Bbl&X-Amz-Signature=4653d02d6224e242a97bf71519ab45607b93506a6d874e4cd0da9c979c1f8275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJESPOY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAKkzEz4MJdggdRH7gDR7a8%2BZcmxyvP%2BbsM%2Bw3kAEmiAiEAy0o5Hn0ZvlW7XWgKRayxcwSsAnZQ1SpxxDtR3ko3A5gq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOY9%2B0y8CRzySXZsTircAza2TgbAkSHeSIW50odiNur5z8etjZR7rJuVolQTJIgqGpr6%2B1D8oYCqnxEzZ2tfAj6zWS%2BYuwxfY%2BNd0pd8dnUI7qeA5CjIwqAXqffaEjTvV9na5UdBhGQN5yEx76OHFD1r9MnH4upfl4YLh0EDLn1a01%2Fyypi0oC2gHXXsCpV2XyzBiyiZTwegfaG8G2W3A%2BHJ6o7ARydtPRt6JinQDe7%2FTo3tDa0levg4WGWxshMb78ohEwAba2DZ55FjHJEcahuVmkAeHYPHt%2BZMtEs%2FW2%2FyCvDXJVSngkREtbYcYPNchIpgKRsd7frefnoc7nUcfNVrRdxbFObjWSzCBZXg5ZcfGSnMwJbxWWx9I2BIVQKyy0JI6X10ZBoDR9aBbFWodFm3pbH0tCbwU5wAkHzXPy8b877lYzFEN6Xj8zZcWMaPe26mireWIkW8LJr0K6JR3atGXHUrqHbAyUg0vL0kL6APA7hQQZbicj1nvBhJmoX9yOF2QgbHTruXoa1TaX1pwNY%2BIerB%2BfN5cOGa2wTwYQGjTA2kGpDcuGlQSdY%2Fjr3VSNTS6rrFpdOnXfto%2Fv3QWho%2BqRGGenN%2FmFo9ZfD7NkuKvCc8pIGXipOq0rK4DHoxPAo8dWNz2XrCqII2MMWE98QGOqUBH4AughqU%2FLbfm9aDWfzddeddmA2XhdbKwElPxigTn3buj%2FQUfZ%2Fj5V4LSknmZzJqbzJR6mvr01W0DIr4C4x9a5r%2Fha7hSfh%2FaQphJoVh9BwaQfKsjQmnGA%2FworC9kxRAaBp7IkjZJ4CrDaZBCcZtVOxLMUAi%2BzU1LBXK6jdM28V5xlnuzt7Q2g9GcSqPpRUFd8%2B%2B4WSehAQyk3m%2BI2ahPJqB1%2Bbl&X-Amz-Signature=03cd98d2737e18e872191d114aefcd42b4b26e7a6a71135bc9994f6e687cc6d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
