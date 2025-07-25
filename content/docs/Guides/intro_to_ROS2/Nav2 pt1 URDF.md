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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3DRSCA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCa5nbCNrgXif4vv6LprkwIN6Y09DSI%2FkW2%2FVnQU9gQjAIgLJoFr8%2BHP%2BJ4HGWAAoIvwBJfyVNPPzV8UdDe3XfEGZYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMpE1BYoiOH3ELgocCrcA2Vc%2F8uKnUmlK1fMGC5hrTBvfjnBZ3GBGH1%2F29doIqXk9I5ZZT5NLG0wdZy70F11JQi3Rmtcm3lDh%2B3k8SH24fA31Cv7VleQ8OUxdYd07hm%2Bynv8M5pIpP1c6OWBrfuGqHTeU4C4AEQUfpz%2FWTF23eCtqhF8YU0mKIAUhEvyrpNvl6HsZBpXz8ByOk58y%2BcNWTq7DE1jtAVJqg%2FavT2ee5tmjop5A3frL%2FJOXMo3r6aPNlCEFz0mX3WTKpTRp95ptqHuVxoQmhfesktocUf6WKi1dIL9TcfsFlYcNQAdf%2FEfdiu2rN8sjkYrGdqHKbphOCYZENh4P1gZr6%2FrQgbLJhvWzF1LciWkam5s9FZ93mJRneXoukDUqlHf6mJTfozsW0EcFDct6gA0Ocx1l8ozaKlJbbSpJbFg5iTuUBJ8zDbLfyXB2xDFGNAK4Si8wPhmgJfwYIKFaIcNYWLwPijsZtaVKySv6GEvyqhBJU1nXtqvbDujbT4AfxMrw0n%2FlKfvjKmMHO%2FxbR1aB1NHHuy1MNvtyV37w41gq8yL6LmYaIjTrF3hK%2FDgG6S3swvAp2MRBuDOoDc5jmYMndGmVZHZlPI4mM3I4U%2B2v%2BQIhnoWX0I9YxBWOGTD3AlvVX%2FqMMqHj8QGOqUBFutvcTMonZI4NoEWByqV1zrXuCqauFvDkaPm0L3JOk1mnjbjBltgfQiZmOwrvv1cQzRidRdM7A8oNkqvvW1W8HP0y7FWKEiQfTcwMe7uR5zdWwD8ObbX51HAVbzdgu0CEw6%2BpqujsIDRZW2CER1WbjvwassyXvcXbn2yw3YCI7d3F%2FbMJHzns64T%2BGZvg537I%2BMIUmWQ%2BYi3FOAGleku7WdygpPC&X-Amz-Signature=31111ce0c080fbd0fbfc9b6c205d00976492e6e8571e33de2a7d5f73895d8621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3DRSCA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCa5nbCNrgXif4vv6LprkwIN6Y09DSI%2FkW2%2FVnQU9gQjAIgLJoFr8%2BHP%2BJ4HGWAAoIvwBJfyVNPPzV8UdDe3XfEGZYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMpE1BYoiOH3ELgocCrcA2Vc%2F8uKnUmlK1fMGC5hrTBvfjnBZ3GBGH1%2F29doIqXk9I5ZZT5NLG0wdZy70F11JQi3Rmtcm3lDh%2B3k8SH24fA31Cv7VleQ8OUxdYd07hm%2Bynv8M5pIpP1c6OWBrfuGqHTeU4C4AEQUfpz%2FWTF23eCtqhF8YU0mKIAUhEvyrpNvl6HsZBpXz8ByOk58y%2BcNWTq7DE1jtAVJqg%2FavT2ee5tmjop5A3frL%2FJOXMo3r6aPNlCEFz0mX3WTKpTRp95ptqHuVxoQmhfesktocUf6WKi1dIL9TcfsFlYcNQAdf%2FEfdiu2rN8sjkYrGdqHKbphOCYZENh4P1gZr6%2FrQgbLJhvWzF1LciWkam5s9FZ93mJRneXoukDUqlHf6mJTfozsW0EcFDct6gA0Ocx1l8ozaKlJbbSpJbFg5iTuUBJ8zDbLfyXB2xDFGNAK4Si8wPhmgJfwYIKFaIcNYWLwPijsZtaVKySv6GEvyqhBJU1nXtqvbDujbT4AfxMrw0n%2FlKfvjKmMHO%2FxbR1aB1NHHuy1MNvtyV37w41gq8yL6LmYaIjTrF3hK%2FDgG6S3swvAp2MRBuDOoDc5jmYMndGmVZHZlPI4mM3I4U%2B2v%2BQIhnoWX0I9YxBWOGTD3AlvVX%2FqMMqHj8QGOqUBFutvcTMonZI4NoEWByqV1zrXuCqauFvDkaPm0L3JOk1mnjbjBltgfQiZmOwrvv1cQzRidRdM7A8oNkqvvW1W8HP0y7FWKEiQfTcwMe7uR5zdWwD8ObbX51HAVbzdgu0CEw6%2BpqujsIDRZW2CER1WbjvwassyXvcXbn2yw3YCI7d3F%2FbMJHzns64T%2BGZvg537I%2BMIUmWQ%2BYi3FOAGleku7WdygpPC&X-Amz-Signature=446831796d7510c744c14c03119ad48ab0b8bc63aa642154bb5802a7dfa64af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3DRSCA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCa5nbCNrgXif4vv6LprkwIN6Y09DSI%2FkW2%2FVnQU9gQjAIgLJoFr8%2BHP%2BJ4HGWAAoIvwBJfyVNPPzV8UdDe3XfEGZYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMpE1BYoiOH3ELgocCrcA2Vc%2F8uKnUmlK1fMGC5hrTBvfjnBZ3GBGH1%2F29doIqXk9I5ZZT5NLG0wdZy70F11JQi3Rmtcm3lDh%2B3k8SH24fA31Cv7VleQ8OUxdYd07hm%2Bynv8M5pIpP1c6OWBrfuGqHTeU4C4AEQUfpz%2FWTF23eCtqhF8YU0mKIAUhEvyrpNvl6HsZBpXz8ByOk58y%2BcNWTq7DE1jtAVJqg%2FavT2ee5tmjop5A3frL%2FJOXMo3r6aPNlCEFz0mX3WTKpTRp95ptqHuVxoQmhfesktocUf6WKi1dIL9TcfsFlYcNQAdf%2FEfdiu2rN8sjkYrGdqHKbphOCYZENh4P1gZr6%2FrQgbLJhvWzF1LciWkam5s9FZ93mJRneXoukDUqlHf6mJTfozsW0EcFDct6gA0Ocx1l8ozaKlJbbSpJbFg5iTuUBJ8zDbLfyXB2xDFGNAK4Si8wPhmgJfwYIKFaIcNYWLwPijsZtaVKySv6GEvyqhBJU1nXtqvbDujbT4AfxMrw0n%2FlKfvjKmMHO%2FxbR1aB1NHHuy1MNvtyV37w41gq8yL6LmYaIjTrF3hK%2FDgG6S3swvAp2MRBuDOoDc5jmYMndGmVZHZlPI4mM3I4U%2B2v%2BQIhnoWX0I9YxBWOGTD3AlvVX%2FqMMqHj8QGOqUBFutvcTMonZI4NoEWByqV1zrXuCqauFvDkaPm0L3JOk1mnjbjBltgfQiZmOwrvv1cQzRidRdM7A8oNkqvvW1W8HP0y7FWKEiQfTcwMe7uR5zdWwD8ObbX51HAVbzdgu0CEw6%2BpqujsIDRZW2CER1WbjvwassyXvcXbn2yw3YCI7d3F%2FbMJHzns64T%2BGZvg537I%2BMIUmWQ%2BYi3FOAGleku7WdygpPC&X-Amz-Signature=d8a7d8d4ae4c5a493ec9d5453471befedcb20b13cb8ab2cf8074bd4d725d8b9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3DRSCA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCa5nbCNrgXif4vv6LprkwIN6Y09DSI%2FkW2%2FVnQU9gQjAIgLJoFr8%2BHP%2BJ4HGWAAoIvwBJfyVNPPzV8UdDe3XfEGZYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMpE1BYoiOH3ELgocCrcA2Vc%2F8uKnUmlK1fMGC5hrTBvfjnBZ3GBGH1%2F29doIqXk9I5ZZT5NLG0wdZy70F11JQi3Rmtcm3lDh%2B3k8SH24fA31Cv7VleQ8OUxdYd07hm%2Bynv8M5pIpP1c6OWBrfuGqHTeU4C4AEQUfpz%2FWTF23eCtqhF8YU0mKIAUhEvyrpNvl6HsZBpXz8ByOk58y%2BcNWTq7DE1jtAVJqg%2FavT2ee5tmjop5A3frL%2FJOXMo3r6aPNlCEFz0mX3WTKpTRp95ptqHuVxoQmhfesktocUf6WKi1dIL9TcfsFlYcNQAdf%2FEfdiu2rN8sjkYrGdqHKbphOCYZENh4P1gZr6%2FrQgbLJhvWzF1LciWkam5s9FZ93mJRneXoukDUqlHf6mJTfozsW0EcFDct6gA0Ocx1l8ozaKlJbbSpJbFg5iTuUBJ8zDbLfyXB2xDFGNAK4Si8wPhmgJfwYIKFaIcNYWLwPijsZtaVKySv6GEvyqhBJU1nXtqvbDujbT4AfxMrw0n%2FlKfvjKmMHO%2FxbR1aB1NHHuy1MNvtyV37w41gq8yL6LmYaIjTrF3hK%2FDgG6S3swvAp2MRBuDOoDc5jmYMndGmVZHZlPI4mM3I4U%2B2v%2BQIhnoWX0I9YxBWOGTD3AlvVX%2FqMMqHj8QGOqUBFutvcTMonZI4NoEWByqV1zrXuCqauFvDkaPm0L3JOk1mnjbjBltgfQiZmOwrvv1cQzRidRdM7A8oNkqvvW1W8HP0y7FWKEiQfTcwMe7uR5zdWwD8ObbX51HAVbzdgu0CEw6%2BpqujsIDRZW2CER1WbjvwassyXvcXbn2yw3YCI7d3F%2FbMJHzns64T%2BGZvg537I%2BMIUmWQ%2BYi3FOAGleku7WdygpPC&X-Amz-Signature=ea1c427b5024fbaad8b9b8679574cf571360d5ac2c977e069688ddbe67b32d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3DRSCA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCa5nbCNrgXif4vv6LprkwIN6Y09DSI%2FkW2%2FVnQU9gQjAIgLJoFr8%2BHP%2BJ4HGWAAoIvwBJfyVNPPzV8UdDe3XfEGZYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMpE1BYoiOH3ELgocCrcA2Vc%2F8uKnUmlK1fMGC5hrTBvfjnBZ3GBGH1%2F29doIqXk9I5ZZT5NLG0wdZy70F11JQi3Rmtcm3lDh%2B3k8SH24fA31Cv7VleQ8OUxdYd07hm%2Bynv8M5pIpP1c6OWBrfuGqHTeU4C4AEQUfpz%2FWTF23eCtqhF8YU0mKIAUhEvyrpNvl6HsZBpXz8ByOk58y%2BcNWTq7DE1jtAVJqg%2FavT2ee5tmjop5A3frL%2FJOXMo3r6aPNlCEFz0mX3WTKpTRp95ptqHuVxoQmhfesktocUf6WKi1dIL9TcfsFlYcNQAdf%2FEfdiu2rN8sjkYrGdqHKbphOCYZENh4P1gZr6%2FrQgbLJhvWzF1LciWkam5s9FZ93mJRneXoukDUqlHf6mJTfozsW0EcFDct6gA0Ocx1l8ozaKlJbbSpJbFg5iTuUBJ8zDbLfyXB2xDFGNAK4Si8wPhmgJfwYIKFaIcNYWLwPijsZtaVKySv6GEvyqhBJU1nXtqvbDujbT4AfxMrw0n%2FlKfvjKmMHO%2FxbR1aB1NHHuy1MNvtyV37w41gq8yL6LmYaIjTrF3hK%2FDgG6S3swvAp2MRBuDOoDc5jmYMndGmVZHZlPI4mM3I4U%2B2v%2BQIhnoWX0I9YxBWOGTD3AlvVX%2FqMMqHj8QGOqUBFutvcTMonZI4NoEWByqV1zrXuCqauFvDkaPm0L3JOk1mnjbjBltgfQiZmOwrvv1cQzRidRdM7A8oNkqvvW1W8HP0y7FWKEiQfTcwMe7uR5zdWwD8ObbX51HAVbzdgu0CEw6%2BpqujsIDRZW2CER1WbjvwassyXvcXbn2yw3YCI7d3F%2FbMJHzns64T%2BGZvg537I%2BMIUmWQ%2BYi3FOAGleku7WdygpPC&X-Amz-Signature=ebf32b6e1dde69d1594db3381b1caf9a8dd2e798a79f60baea39d703868f0d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3DRSCA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCa5nbCNrgXif4vv6LprkwIN6Y09DSI%2FkW2%2FVnQU9gQjAIgLJoFr8%2BHP%2BJ4HGWAAoIvwBJfyVNPPzV8UdDe3XfEGZYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMpE1BYoiOH3ELgocCrcA2Vc%2F8uKnUmlK1fMGC5hrTBvfjnBZ3GBGH1%2F29doIqXk9I5ZZT5NLG0wdZy70F11JQi3Rmtcm3lDh%2B3k8SH24fA31Cv7VleQ8OUxdYd07hm%2Bynv8M5pIpP1c6OWBrfuGqHTeU4C4AEQUfpz%2FWTF23eCtqhF8YU0mKIAUhEvyrpNvl6HsZBpXz8ByOk58y%2BcNWTq7DE1jtAVJqg%2FavT2ee5tmjop5A3frL%2FJOXMo3r6aPNlCEFz0mX3WTKpTRp95ptqHuVxoQmhfesktocUf6WKi1dIL9TcfsFlYcNQAdf%2FEfdiu2rN8sjkYrGdqHKbphOCYZENh4P1gZr6%2FrQgbLJhvWzF1LciWkam5s9FZ93mJRneXoukDUqlHf6mJTfozsW0EcFDct6gA0Ocx1l8ozaKlJbbSpJbFg5iTuUBJ8zDbLfyXB2xDFGNAK4Si8wPhmgJfwYIKFaIcNYWLwPijsZtaVKySv6GEvyqhBJU1nXtqvbDujbT4AfxMrw0n%2FlKfvjKmMHO%2FxbR1aB1NHHuy1MNvtyV37w41gq8yL6LmYaIjTrF3hK%2FDgG6S3swvAp2MRBuDOoDc5jmYMndGmVZHZlPI4mM3I4U%2B2v%2BQIhnoWX0I9YxBWOGTD3AlvVX%2FqMMqHj8QGOqUBFutvcTMonZI4NoEWByqV1zrXuCqauFvDkaPm0L3JOk1mnjbjBltgfQiZmOwrvv1cQzRidRdM7A8oNkqvvW1W8HP0y7FWKEiQfTcwMe7uR5zdWwD8ObbX51HAVbzdgu0CEw6%2BpqujsIDRZW2CER1WbjvwassyXvcXbn2yw3YCI7d3F%2FbMJHzns64T%2BGZvg537I%2BMIUmWQ%2BYi3FOAGleku7WdygpPC&X-Amz-Signature=e8402e4659e5434e4fae5d6cbddea0f46170c3d824443f84bf00d788da8c1106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3DRSCA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCa5nbCNrgXif4vv6LprkwIN6Y09DSI%2FkW2%2FVnQU9gQjAIgLJoFr8%2BHP%2BJ4HGWAAoIvwBJfyVNPPzV8UdDe3XfEGZYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMpE1BYoiOH3ELgocCrcA2Vc%2F8uKnUmlK1fMGC5hrTBvfjnBZ3GBGH1%2F29doIqXk9I5ZZT5NLG0wdZy70F11JQi3Rmtcm3lDh%2B3k8SH24fA31Cv7VleQ8OUxdYd07hm%2Bynv8M5pIpP1c6OWBrfuGqHTeU4C4AEQUfpz%2FWTF23eCtqhF8YU0mKIAUhEvyrpNvl6HsZBpXz8ByOk58y%2BcNWTq7DE1jtAVJqg%2FavT2ee5tmjop5A3frL%2FJOXMo3r6aPNlCEFz0mX3WTKpTRp95ptqHuVxoQmhfesktocUf6WKi1dIL9TcfsFlYcNQAdf%2FEfdiu2rN8sjkYrGdqHKbphOCYZENh4P1gZr6%2FrQgbLJhvWzF1LciWkam5s9FZ93mJRneXoukDUqlHf6mJTfozsW0EcFDct6gA0Ocx1l8ozaKlJbbSpJbFg5iTuUBJ8zDbLfyXB2xDFGNAK4Si8wPhmgJfwYIKFaIcNYWLwPijsZtaVKySv6GEvyqhBJU1nXtqvbDujbT4AfxMrw0n%2FlKfvjKmMHO%2FxbR1aB1NHHuy1MNvtyV37w41gq8yL6LmYaIjTrF3hK%2FDgG6S3swvAp2MRBuDOoDc5jmYMndGmVZHZlPI4mM3I4U%2B2v%2BQIhnoWX0I9YxBWOGTD3AlvVX%2FqMMqHj8QGOqUBFutvcTMonZI4NoEWByqV1zrXuCqauFvDkaPm0L3JOk1mnjbjBltgfQiZmOwrvv1cQzRidRdM7A8oNkqvvW1W8HP0y7FWKEiQfTcwMe7uR5zdWwD8ObbX51HAVbzdgu0CEw6%2BpqujsIDRZW2CER1WbjvwassyXvcXbn2yw3YCI7d3F%2FbMJHzns64T%2BGZvg537I%2BMIUmWQ%2BYi3FOAGleku7WdygpPC&X-Amz-Signature=b235244b95f87bee15dc5ba4f78ccde674ed72ebe08ec56fef73b441a7741b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3DRSCA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCa5nbCNrgXif4vv6LprkwIN6Y09DSI%2FkW2%2FVnQU9gQjAIgLJoFr8%2BHP%2BJ4HGWAAoIvwBJfyVNPPzV8UdDe3XfEGZYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMpE1BYoiOH3ELgocCrcA2Vc%2F8uKnUmlK1fMGC5hrTBvfjnBZ3GBGH1%2F29doIqXk9I5ZZT5NLG0wdZy70F11JQi3Rmtcm3lDh%2B3k8SH24fA31Cv7VleQ8OUxdYd07hm%2Bynv8M5pIpP1c6OWBrfuGqHTeU4C4AEQUfpz%2FWTF23eCtqhF8YU0mKIAUhEvyrpNvl6HsZBpXz8ByOk58y%2BcNWTq7DE1jtAVJqg%2FavT2ee5tmjop5A3frL%2FJOXMo3r6aPNlCEFz0mX3WTKpTRp95ptqHuVxoQmhfesktocUf6WKi1dIL9TcfsFlYcNQAdf%2FEfdiu2rN8sjkYrGdqHKbphOCYZENh4P1gZr6%2FrQgbLJhvWzF1LciWkam5s9FZ93mJRneXoukDUqlHf6mJTfozsW0EcFDct6gA0Ocx1l8ozaKlJbbSpJbFg5iTuUBJ8zDbLfyXB2xDFGNAK4Si8wPhmgJfwYIKFaIcNYWLwPijsZtaVKySv6GEvyqhBJU1nXtqvbDujbT4AfxMrw0n%2FlKfvjKmMHO%2FxbR1aB1NHHuy1MNvtyV37w41gq8yL6LmYaIjTrF3hK%2FDgG6S3swvAp2MRBuDOoDc5jmYMndGmVZHZlPI4mM3I4U%2B2v%2BQIhnoWX0I9YxBWOGTD3AlvVX%2FqMMqHj8QGOqUBFutvcTMonZI4NoEWByqV1zrXuCqauFvDkaPm0L3JOk1mnjbjBltgfQiZmOwrvv1cQzRidRdM7A8oNkqvvW1W8HP0y7FWKEiQfTcwMe7uR5zdWwD8ObbX51HAVbzdgu0CEw6%2BpqujsIDRZW2CER1WbjvwassyXvcXbn2yw3YCI7d3F%2FbMJHzns64T%2BGZvg537I%2BMIUmWQ%2BYi3FOAGleku7WdygpPC&X-Amz-Signature=212569024954631d1181daaec565d3bc70af7571fbfcf4599f38f185974b7090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3DRSCA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCa5nbCNrgXif4vv6LprkwIN6Y09DSI%2FkW2%2FVnQU9gQjAIgLJoFr8%2BHP%2BJ4HGWAAoIvwBJfyVNPPzV8UdDe3XfEGZYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMpE1BYoiOH3ELgocCrcA2Vc%2F8uKnUmlK1fMGC5hrTBvfjnBZ3GBGH1%2F29doIqXk9I5ZZT5NLG0wdZy70F11JQi3Rmtcm3lDh%2B3k8SH24fA31Cv7VleQ8OUxdYd07hm%2Bynv8M5pIpP1c6OWBrfuGqHTeU4C4AEQUfpz%2FWTF23eCtqhF8YU0mKIAUhEvyrpNvl6HsZBpXz8ByOk58y%2BcNWTq7DE1jtAVJqg%2FavT2ee5tmjop5A3frL%2FJOXMo3r6aPNlCEFz0mX3WTKpTRp95ptqHuVxoQmhfesktocUf6WKi1dIL9TcfsFlYcNQAdf%2FEfdiu2rN8sjkYrGdqHKbphOCYZENh4P1gZr6%2FrQgbLJhvWzF1LciWkam5s9FZ93mJRneXoukDUqlHf6mJTfozsW0EcFDct6gA0Ocx1l8ozaKlJbbSpJbFg5iTuUBJ8zDbLfyXB2xDFGNAK4Si8wPhmgJfwYIKFaIcNYWLwPijsZtaVKySv6GEvyqhBJU1nXtqvbDujbT4AfxMrw0n%2FlKfvjKmMHO%2FxbR1aB1NHHuy1MNvtyV37w41gq8yL6LmYaIjTrF3hK%2FDgG6S3swvAp2MRBuDOoDc5jmYMndGmVZHZlPI4mM3I4U%2B2v%2BQIhnoWX0I9YxBWOGTD3AlvVX%2FqMMqHj8QGOqUBFutvcTMonZI4NoEWByqV1zrXuCqauFvDkaPm0L3JOk1mnjbjBltgfQiZmOwrvv1cQzRidRdM7A8oNkqvvW1W8HP0y7FWKEiQfTcwMe7uR5zdWwD8ObbX51HAVbzdgu0CEw6%2BpqujsIDRZW2CER1WbjvwassyXvcXbn2yw3YCI7d3F%2FbMJHzns64T%2BGZvg537I%2BMIUmWQ%2BYi3FOAGleku7WdygpPC&X-Amz-Signature=312bfcfb7918d5b7cddf36b8555f544d8b3e3ac801af4e685f6e9bc0fead63a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3DRSCA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCa5nbCNrgXif4vv6LprkwIN6Y09DSI%2FkW2%2FVnQU9gQjAIgLJoFr8%2BHP%2BJ4HGWAAoIvwBJfyVNPPzV8UdDe3XfEGZYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMpE1BYoiOH3ELgocCrcA2Vc%2F8uKnUmlK1fMGC5hrTBvfjnBZ3GBGH1%2F29doIqXk9I5ZZT5NLG0wdZy70F11JQi3Rmtcm3lDh%2B3k8SH24fA31Cv7VleQ8OUxdYd07hm%2Bynv8M5pIpP1c6OWBrfuGqHTeU4C4AEQUfpz%2FWTF23eCtqhF8YU0mKIAUhEvyrpNvl6HsZBpXz8ByOk58y%2BcNWTq7DE1jtAVJqg%2FavT2ee5tmjop5A3frL%2FJOXMo3r6aPNlCEFz0mX3WTKpTRp95ptqHuVxoQmhfesktocUf6WKi1dIL9TcfsFlYcNQAdf%2FEfdiu2rN8sjkYrGdqHKbphOCYZENh4P1gZr6%2FrQgbLJhvWzF1LciWkam5s9FZ93mJRneXoukDUqlHf6mJTfozsW0EcFDct6gA0Ocx1l8ozaKlJbbSpJbFg5iTuUBJ8zDbLfyXB2xDFGNAK4Si8wPhmgJfwYIKFaIcNYWLwPijsZtaVKySv6GEvyqhBJU1nXtqvbDujbT4AfxMrw0n%2FlKfvjKmMHO%2FxbR1aB1NHHuy1MNvtyV37w41gq8yL6LmYaIjTrF3hK%2FDgG6S3swvAp2MRBuDOoDc5jmYMndGmVZHZlPI4mM3I4U%2B2v%2BQIhnoWX0I9YxBWOGTD3AlvVX%2FqMMqHj8QGOqUBFutvcTMonZI4NoEWByqV1zrXuCqauFvDkaPm0L3JOk1mnjbjBltgfQiZmOwrvv1cQzRidRdM7A8oNkqvvW1W8HP0y7FWKEiQfTcwMe7uR5zdWwD8ObbX51HAVbzdgu0CEw6%2BpqujsIDRZW2CER1WbjvwassyXvcXbn2yw3YCI7d3F%2FbMJHzns64T%2BGZvg537I%2BMIUmWQ%2BYi3FOAGleku7WdygpPC&X-Amz-Signature=005cbfded7759c8dba6ba11a3ac9f505c8b7ee5199384e6ae38355fcb47992bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3DRSCA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCa5nbCNrgXif4vv6LprkwIN6Y09DSI%2FkW2%2FVnQU9gQjAIgLJoFr8%2BHP%2BJ4HGWAAoIvwBJfyVNPPzV8UdDe3XfEGZYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMpE1BYoiOH3ELgocCrcA2Vc%2F8uKnUmlK1fMGC5hrTBvfjnBZ3GBGH1%2F29doIqXk9I5ZZT5NLG0wdZy70F11JQi3Rmtcm3lDh%2B3k8SH24fA31Cv7VleQ8OUxdYd07hm%2Bynv8M5pIpP1c6OWBrfuGqHTeU4C4AEQUfpz%2FWTF23eCtqhF8YU0mKIAUhEvyrpNvl6HsZBpXz8ByOk58y%2BcNWTq7DE1jtAVJqg%2FavT2ee5tmjop5A3frL%2FJOXMo3r6aPNlCEFz0mX3WTKpTRp95ptqHuVxoQmhfesktocUf6WKi1dIL9TcfsFlYcNQAdf%2FEfdiu2rN8sjkYrGdqHKbphOCYZENh4P1gZr6%2FrQgbLJhvWzF1LciWkam5s9FZ93mJRneXoukDUqlHf6mJTfozsW0EcFDct6gA0Ocx1l8ozaKlJbbSpJbFg5iTuUBJ8zDbLfyXB2xDFGNAK4Si8wPhmgJfwYIKFaIcNYWLwPijsZtaVKySv6GEvyqhBJU1nXtqvbDujbT4AfxMrw0n%2FlKfvjKmMHO%2FxbR1aB1NHHuy1MNvtyV37w41gq8yL6LmYaIjTrF3hK%2FDgG6S3swvAp2MRBuDOoDc5jmYMndGmVZHZlPI4mM3I4U%2B2v%2BQIhnoWX0I9YxBWOGTD3AlvVX%2FqMMqHj8QGOqUBFutvcTMonZI4NoEWByqV1zrXuCqauFvDkaPm0L3JOk1mnjbjBltgfQiZmOwrvv1cQzRidRdM7A8oNkqvvW1W8HP0y7FWKEiQfTcwMe7uR5zdWwD8ObbX51HAVbzdgu0CEw6%2BpqujsIDRZW2CER1WbjvwassyXvcXbn2yw3YCI7d3F%2FbMJHzns64T%2BGZvg537I%2BMIUmWQ%2BYi3FOAGleku7WdygpPC&X-Amz-Signature=fb00c8d4e019dd4423d369bb92b8075904d69aad6428c949b5a6f47c665e5637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3DRSCA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCa5nbCNrgXif4vv6LprkwIN6Y09DSI%2FkW2%2FVnQU9gQjAIgLJoFr8%2BHP%2BJ4HGWAAoIvwBJfyVNPPzV8UdDe3XfEGZYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMpE1BYoiOH3ELgocCrcA2Vc%2F8uKnUmlK1fMGC5hrTBvfjnBZ3GBGH1%2F29doIqXk9I5ZZT5NLG0wdZy70F11JQi3Rmtcm3lDh%2B3k8SH24fA31Cv7VleQ8OUxdYd07hm%2Bynv8M5pIpP1c6OWBrfuGqHTeU4C4AEQUfpz%2FWTF23eCtqhF8YU0mKIAUhEvyrpNvl6HsZBpXz8ByOk58y%2BcNWTq7DE1jtAVJqg%2FavT2ee5tmjop5A3frL%2FJOXMo3r6aPNlCEFz0mX3WTKpTRp95ptqHuVxoQmhfesktocUf6WKi1dIL9TcfsFlYcNQAdf%2FEfdiu2rN8sjkYrGdqHKbphOCYZENh4P1gZr6%2FrQgbLJhvWzF1LciWkam5s9FZ93mJRneXoukDUqlHf6mJTfozsW0EcFDct6gA0Ocx1l8ozaKlJbbSpJbFg5iTuUBJ8zDbLfyXB2xDFGNAK4Si8wPhmgJfwYIKFaIcNYWLwPijsZtaVKySv6GEvyqhBJU1nXtqvbDujbT4AfxMrw0n%2FlKfvjKmMHO%2FxbR1aB1NHHuy1MNvtyV37w41gq8yL6LmYaIjTrF3hK%2FDgG6S3swvAp2MRBuDOoDc5jmYMndGmVZHZlPI4mM3I4U%2B2v%2BQIhnoWX0I9YxBWOGTD3AlvVX%2FqMMqHj8QGOqUBFutvcTMonZI4NoEWByqV1zrXuCqauFvDkaPm0L3JOk1mnjbjBltgfQiZmOwrvv1cQzRidRdM7A8oNkqvvW1W8HP0y7FWKEiQfTcwMe7uR5zdWwD8ObbX51HAVbzdgu0CEw6%2BpqujsIDRZW2CER1WbjvwassyXvcXbn2yw3YCI7d3F%2FbMJHzns64T%2BGZvg537I%2BMIUmWQ%2BYi3FOAGleku7WdygpPC&X-Amz-Signature=6d7abfa02fab1ab5cbb1cc2fc253b7d22a4b38611e74aa954e50d628b4683353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3DRSCA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCa5nbCNrgXif4vv6LprkwIN6Y09DSI%2FkW2%2FVnQU9gQjAIgLJoFr8%2BHP%2BJ4HGWAAoIvwBJfyVNPPzV8UdDe3XfEGZYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMpE1BYoiOH3ELgocCrcA2Vc%2F8uKnUmlK1fMGC5hrTBvfjnBZ3GBGH1%2F29doIqXk9I5ZZT5NLG0wdZy70F11JQi3Rmtcm3lDh%2B3k8SH24fA31Cv7VleQ8OUxdYd07hm%2Bynv8M5pIpP1c6OWBrfuGqHTeU4C4AEQUfpz%2FWTF23eCtqhF8YU0mKIAUhEvyrpNvl6HsZBpXz8ByOk58y%2BcNWTq7DE1jtAVJqg%2FavT2ee5tmjop5A3frL%2FJOXMo3r6aPNlCEFz0mX3WTKpTRp95ptqHuVxoQmhfesktocUf6WKi1dIL9TcfsFlYcNQAdf%2FEfdiu2rN8sjkYrGdqHKbphOCYZENh4P1gZr6%2FrQgbLJhvWzF1LciWkam5s9FZ93mJRneXoukDUqlHf6mJTfozsW0EcFDct6gA0Ocx1l8ozaKlJbbSpJbFg5iTuUBJ8zDbLfyXB2xDFGNAK4Si8wPhmgJfwYIKFaIcNYWLwPijsZtaVKySv6GEvyqhBJU1nXtqvbDujbT4AfxMrw0n%2FlKfvjKmMHO%2FxbR1aB1NHHuy1MNvtyV37w41gq8yL6LmYaIjTrF3hK%2FDgG6S3swvAp2MRBuDOoDc5jmYMndGmVZHZlPI4mM3I4U%2B2v%2BQIhnoWX0I9YxBWOGTD3AlvVX%2FqMMqHj8QGOqUBFutvcTMonZI4NoEWByqV1zrXuCqauFvDkaPm0L3JOk1mnjbjBltgfQiZmOwrvv1cQzRidRdM7A8oNkqvvW1W8HP0y7FWKEiQfTcwMe7uR5zdWwD8ObbX51HAVbzdgu0CEw6%2BpqujsIDRZW2CER1WbjvwassyXvcXbn2yw3YCI7d3F%2FbMJHzns64T%2BGZvg537I%2BMIUmWQ%2BYi3FOAGleku7WdygpPC&X-Amz-Signature=991bb11a96d55f0fe8037e2cfe7806072a7929c36d62466bf17d858c70bfac97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3DRSCA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCa5nbCNrgXif4vv6LprkwIN6Y09DSI%2FkW2%2FVnQU9gQjAIgLJoFr8%2BHP%2BJ4HGWAAoIvwBJfyVNPPzV8UdDe3XfEGZYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMpE1BYoiOH3ELgocCrcA2Vc%2F8uKnUmlK1fMGC5hrTBvfjnBZ3GBGH1%2F29doIqXk9I5ZZT5NLG0wdZy70F11JQi3Rmtcm3lDh%2B3k8SH24fA31Cv7VleQ8OUxdYd07hm%2Bynv8M5pIpP1c6OWBrfuGqHTeU4C4AEQUfpz%2FWTF23eCtqhF8YU0mKIAUhEvyrpNvl6HsZBpXz8ByOk58y%2BcNWTq7DE1jtAVJqg%2FavT2ee5tmjop5A3frL%2FJOXMo3r6aPNlCEFz0mX3WTKpTRp95ptqHuVxoQmhfesktocUf6WKi1dIL9TcfsFlYcNQAdf%2FEfdiu2rN8sjkYrGdqHKbphOCYZENh4P1gZr6%2FrQgbLJhvWzF1LciWkam5s9FZ93mJRneXoukDUqlHf6mJTfozsW0EcFDct6gA0Ocx1l8ozaKlJbbSpJbFg5iTuUBJ8zDbLfyXB2xDFGNAK4Si8wPhmgJfwYIKFaIcNYWLwPijsZtaVKySv6GEvyqhBJU1nXtqvbDujbT4AfxMrw0n%2FlKfvjKmMHO%2FxbR1aB1NHHuy1MNvtyV37w41gq8yL6LmYaIjTrF3hK%2FDgG6S3swvAp2MRBuDOoDc5jmYMndGmVZHZlPI4mM3I4U%2B2v%2BQIhnoWX0I9YxBWOGTD3AlvVX%2FqMMqHj8QGOqUBFutvcTMonZI4NoEWByqV1zrXuCqauFvDkaPm0L3JOk1mnjbjBltgfQiZmOwrvv1cQzRidRdM7A8oNkqvvW1W8HP0y7FWKEiQfTcwMe7uR5zdWwD8ObbX51HAVbzdgu0CEw6%2BpqujsIDRZW2CER1WbjvwassyXvcXbn2yw3YCI7d3F%2FbMJHzns64T%2BGZvg537I%2BMIUmWQ%2BYi3FOAGleku7WdygpPC&X-Amz-Signature=efaeb1cc95a202215deaea8b59156859e1f44d01f38d409a1a4190b96ce21953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW6ZTF3M%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCGXiwpnSF1kzbtTuRt69cSyrsM%2F9QWopycptDj5RJDTAIgNhjV4dqn%2FkVxj2pPeTsHQSGd4jetA3N7RwQhij%2BuwUcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDAos8SvrI94hNl7BWircAzAi2G4G0Z2sI%2B4RROZAnGv3SmEsn%2F20j2zUuc3ikyFAVLmpFPPP43BJt0QzxT%2B%2FfGMsDB3cc%2B2frdJ51vF7HOXa79hYNOzpNQLl2pLGOIznRldxayT4I6QqLBdMiGJZ1BNN%2FK0xQvbFkIuIhXszmNG7xiFx1sG4NdsgxvWFomTdkP%2FENnyme3sg9S3T0L0UDjMc13WEbTDn8tzVixVP5IaIGwdOOLOJgKyV4kaQgqC6oBzk1f45WBuov97J5WClDCjMW8ECTORTsRRIm%2FGf%2BsX%2BWaihL8I%2FNrz%2BpRBoBvxb09HHkCIgCYH3TwL5merzTwIixdSFRupkZ0u7q85oSzqp4y7AXdBr7EvdLwAvg4H5lGu3q5ZjAq%2F3jALsCFB0spvkOGeKhm%2BcykHavMphVq0wiPAaocRqhpNlAr9W9s7AWNueXJoXeVo4t%2BaDKVlDh%2FSR4fcCrXTVzSM2PYqLHUh1IfAuWfiV8AFODrwJb49HGF7iTRhi3JXONCXOQLnoaRPYCrXQzJ%2BQ3%2BQH6IKcpqcvHR3jt%2BoiUe2rFwMti7QAWWh4WRkK4W3%2BPZG1CiGKCWBdQot1PyiRFv9v%2Fuq%2F0vkQaPc4yA0GV%2BR3NiVZz9OVkuvHghXYYBMV9kjQMO6Gj8QGOqUBhWUejOf752U6s4p6kzgLpcBk0TvxLMF7W0SH5W2Ag5PuXT5d5REyjkf9oCJ5fyfVz%2BuvB7E7uGCa9BgPed7L1JybOKjMNyPeiqshr8IaEihbfUsiklJE2BdCn%2FVsIZwx3ronXXOH3Af%2Fh7jSE4Dx74Bn3tuSmCcnJaC3OY3OXneQcAMspZhHN6HvK%2Ft%2BE1LxeVI3UO27AAm%2BFQE5drb8%2Bn0o7ozZ&X-Amz-Signature=85d74388175ac63eb9bd231ccadbc68e26488b6099ecb16fd9ee67f380f488be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW6ZTF3M%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCGXiwpnSF1kzbtTuRt69cSyrsM%2F9QWopycptDj5RJDTAIgNhjV4dqn%2FkVxj2pPeTsHQSGd4jetA3N7RwQhij%2BuwUcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDAos8SvrI94hNl7BWircAzAi2G4G0Z2sI%2B4RROZAnGv3SmEsn%2F20j2zUuc3ikyFAVLmpFPPP43BJt0QzxT%2B%2FfGMsDB3cc%2B2frdJ51vF7HOXa79hYNOzpNQLl2pLGOIznRldxayT4I6QqLBdMiGJZ1BNN%2FK0xQvbFkIuIhXszmNG7xiFx1sG4NdsgxvWFomTdkP%2FENnyme3sg9S3T0L0UDjMc13WEbTDn8tzVixVP5IaIGwdOOLOJgKyV4kaQgqC6oBzk1f45WBuov97J5WClDCjMW8ECTORTsRRIm%2FGf%2BsX%2BWaihL8I%2FNrz%2BpRBoBvxb09HHkCIgCYH3TwL5merzTwIixdSFRupkZ0u7q85oSzqp4y7AXdBr7EvdLwAvg4H5lGu3q5ZjAq%2F3jALsCFB0spvkOGeKhm%2BcykHavMphVq0wiPAaocRqhpNlAr9W9s7AWNueXJoXeVo4t%2BaDKVlDh%2FSR4fcCrXTVzSM2PYqLHUh1IfAuWfiV8AFODrwJb49HGF7iTRhi3JXONCXOQLnoaRPYCrXQzJ%2BQ3%2BQH6IKcpqcvHR3jt%2BoiUe2rFwMti7QAWWh4WRkK4W3%2BPZG1CiGKCWBdQot1PyiRFv9v%2Fuq%2F0vkQaPc4yA0GV%2BR3NiVZz9OVkuvHghXYYBMV9kjQMO6Gj8QGOqUBhWUejOf752U6s4p6kzgLpcBk0TvxLMF7W0SH5W2Ag5PuXT5d5REyjkf9oCJ5fyfVz%2BuvB7E7uGCa9BgPed7L1JybOKjMNyPeiqshr8IaEihbfUsiklJE2BdCn%2FVsIZwx3ronXXOH3Af%2Fh7jSE4Dx74Bn3tuSmCcnJaC3OY3OXneQcAMspZhHN6HvK%2Ft%2BE1LxeVI3UO27AAm%2BFQE5drb8%2Bn0o7ozZ&X-Amz-Signature=36685a6e662e2ba00ef0509c16f53372c00b83fbd1481f534739c15e2c649209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW6ZTF3M%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCGXiwpnSF1kzbtTuRt69cSyrsM%2F9QWopycptDj5RJDTAIgNhjV4dqn%2FkVxj2pPeTsHQSGd4jetA3N7RwQhij%2BuwUcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDAos8SvrI94hNl7BWircAzAi2G4G0Z2sI%2B4RROZAnGv3SmEsn%2F20j2zUuc3ikyFAVLmpFPPP43BJt0QzxT%2B%2FfGMsDB3cc%2B2frdJ51vF7HOXa79hYNOzpNQLl2pLGOIznRldxayT4I6QqLBdMiGJZ1BNN%2FK0xQvbFkIuIhXszmNG7xiFx1sG4NdsgxvWFomTdkP%2FENnyme3sg9S3T0L0UDjMc13WEbTDn8tzVixVP5IaIGwdOOLOJgKyV4kaQgqC6oBzk1f45WBuov97J5WClDCjMW8ECTORTsRRIm%2FGf%2BsX%2BWaihL8I%2FNrz%2BpRBoBvxb09HHkCIgCYH3TwL5merzTwIixdSFRupkZ0u7q85oSzqp4y7AXdBr7EvdLwAvg4H5lGu3q5ZjAq%2F3jALsCFB0spvkOGeKhm%2BcykHavMphVq0wiPAaocRqhpNlAr9W9s7AWNueXJoXeVo4t%2BaDKVlDh%2FSR4fcCrXTVzSM2PYqLHUh1IfAuWfiV8AFODrwJb49HGF7iTRhi3JXONCXOQLnoaRPYCrXQzJ%2BQ3%2BQH6IKcpqcvHR3jt%2BoiUe2rFwMti7QAWWh4WRkK4W3%2BPZG1CiGKCWBdQot1PyiRFv9v%2Fuq%2F0vkQaPc4yA0GV%2BR3NiVZz9OVkuvHghXYYBMV9kjQMO6Gj8QGOqUBhWUejOf752U6s4p6kzgLpcBk0TvxLMF7W0SH5W2Ag5PuXT5d5REyjkf9oCJ5fyfVz%2BuvB7E7uGCa9BgPed7L1JybOKjMNyPeiqshr8IaEihbfUsiklJE2BdCn%2FVsIZwx3ronXXOH3Af%2Fh7jSE4Dx74Bn3tuSmCcnJaC3OY3OXneQcAMspZhHN6HvK%2Ft%2BE1LxeVI3UO27AAm%2BFQE5drb8%2Bn0o7ozZ&X-Amz-Signature=402800aa4ffce160af4648c909fc33092eab29b9efce081c42f05f00b70e14be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW6ZTF3M%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCGXiwpnSF1kzbtTuRt69cSyrsM%2F9QWopycptDj5RJDTAIgNhjV4dqn%2FkVxj2pPeTsHQSGd4jetA3N7RwQhij%2BuwUcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDAos8SvrI94hNl7BWircAzAi2G4G0Z2sI%2B4RROZAnGv3SmEsn%2F20j2zUuc3ikyFAVLmpFPPP43BJt0QzxT%2B%2FfGMsDB3cc%2B2frdJ51vF7HOXa79hYNOzpNQLl2pLGOIznRldxayT4I6QqLBdMiGJZ1BNN%2FK0xQvbFkIuIhXszmNG7xiFx1sG4NdsgxvWFomTdkP%2FENnyme3sg9S3T0L0UDjMc13WEbTDn8tzVixVP5IaIGwdOOLOJgKyV4kaQgqC6oBzk1f45WBuov97J5WClDCjMW8ECTORTsRRIm%2FGf%2BsX%2BWaihL8I%2FNrz%2BpRBoBvxb09HHkCIgCYH3TwL5merzTwIixdSFRupkZ0u7q85oSzqp4y7AXdBr7EvdLwAvg4H5lGu3q5ZjAq%2F3jALsCFB0spvkOGeKhm%2BcykHavMphVq0wiPAaocRqhpNlAr9W9s7AWNueXJoXeVo4t%2BaDKVlDh%2FSR4fcCrXTVzSM2PYqLHUh1IfAuWfiV8AFODrwJb49HGF7iTRhi3JXONCXOQLnoaRPYCrXQzJ%2BQ3%2BQH6IKcpqcvHR3jt%2BoiUe2rFwMti7QAWWh4WRkK4W3%2BPZG1CiGKCWBdQot1PyiRFv9v%2Fuq%2F0vkQaPc4yA0GV%2BR3NiVZz9OVkuvHghXYYBMV9kjQMO6Gj8QGOqUBhWUejOf752U6s4p6kzgLpcBk0TvxLMF7W0SH5W2Ag5PuXT5d5REyjkf9oCJ5fyfVz%2BuvB7E7uGCa9BgPed7L1JybOKjMNyPeiqshr8IaEihbfUsiklJE2BdCn%2FVsIZwx3ronXXOH3Af%2Fh7jSE4Dx74Bn3tuSmCcnJaC3OY3OXneQcAMspZhHN6HvK%2Ft%2BE1LxeVI3UO27AAm%2BFQE5drb8%2Bn0o7ozZ&X-Amz-Signature=4fa18e98350d710707e45ea0ecb7d2c452514b355350efc2e94a6fbae9f0c1df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW6ZTF3M%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCGXiwpnSF1kzbtTuRt69cSyrsM%2F9QWopycptDj5RJDTAIgNhjV4dqn%2FkVxj2pPeTsHQSGd4jetA3N7RwQhij%2BuwUcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDAos8SvrI94hNl7BWircAzAi2G4G0Z2sI%2B4RROZAnGv3SmEsn%2F20j2zUuc3ikyFAVLmpFPPP43BJt0QzxT%2B%2FfGMsDB3cc%2B2frdJ51vF7HOXa79hYNOzpNQLl2pLGOIznRldxayT4I6QqLBdMiGJZ1BNN%2FK0xQvbFkIuIhXszmNG7xiFx1sG4NdsgxvWFomTdkP%2FENnyme3sg9S3T0L0UDjMc13WEbTDn8tzVixVP5IaIGwdOOLOJgKyV4kaQgqC6oBzk1f45WBuov97J5WClDCjMW8ECTORTsRRIm%2FGf%2BsX%2BWaihL8I%2FNrz%2BpRBoBvxb09HHkCIgCYH3TwL5merzTwIixdSFRupkZ0u7q85oSzqp4y7AXdBr7EvdLwAvg4H5lGu3q5ZjAq%2F3jALsCFB0spvkOGeKhm%2BcykHavMphVq0wiPAaocRqhpNlAr9W9s7AWNueXJoXeVo4t%2BaDKVlDh%2FSR4fcCrXTVzSM2PYqLHUh1IfAuWfiV8AFODrwJb49HGF7iTRhi3JXONCXOQLnoaRPYCrXQzJ%2BQ3%2BQH6IKcpqcvHR3jt%2BoiUe2rFwMti7QAWWh4WRkK4W3%2BPZG1CiGKCWBdQot1PyiRFv9v%2Fuq%2F0vkQaPc4yA0GV%2BR3NiVZz9OVkuvHghXYYBMV9kjQMO6Gj8QGOqUBhWUejOf752U6s4p6kzgLpcBk0TvxLMF7W0SH5W2Ag5PuXT5d5REyjkf9oCJ5fyfVz%2BuvB7E7uGCa9BgPed7L1JybOKjMNyPeiqshr8IaEihbfUsiklJE2BdCn%2FVsIZwx3ronXXOH3Af%2Fh7jSE4Dx74Bn3tuSmCcnJaC3OY3OXneQcAMspZhHN6HvK%2Ft%2BE1LxeVI3UO27AAm%2BFQE5drb8%2Bn0o7ozZ&X-Amz-Signature=1283e6bec18e50ecb884bd81743f4f81666782ae7581757691f75820509c13df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW6ZTF3M%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCGXiwpnSF1kzbtTuRt69cSyrsM%2F9QWopycptDj5RJDTAIgNhjV4dqn%2FkVxj2pPeTsHQSGd4jetA3N7RwQhij%2BuwUcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDAos8SvrI94hNl7BWircAzAi2G4G0Z2sI%2B4RROZAnGv3SmEsn%2F20j2zUuc3ikyFAVLmpFPPP43BJt0QzxT%2B%2FfGMsDB3cc%2B2frdJ51vF7HOXa79hYNOzpNQLl2pLGOIznRldxayT4I6QqLBdMiGJZ1BNN%2FK0xQvbFkIuIhXszmNG7xiFx1sG4NdsgxvWFomTdkP%2FENnyme3sg9S3T0L0UDjMc13WEbTDn8tzVixVP5IaIGwdOOLOJgKyV4kaQgqC6oBzk1f45WBuov97J5WClDCjMW8ECTORTsRRIm%2FGf%2BsX%2BWaihL8I%2FNrz%2BpRBoBvxb09HHkCIgCYH3TwL5merzTwIixdSFRupkZ0u7q85oSzqp4y7AXdBr7EvdLwAvg4H5lGu3q5ZjAq%2F3jALsCFB0spvkOGeKhm%2BcykHavMphVq0wiPAaocRqhpNlAr9W9s7AWNueXJoXeVo4t%2BaDKVlDh%2FSR4fcCrXTVzSM2PYqLHUh1IfAuWfiV8AFODrwJb49HGF7iTRhi3JXONCXOQLnoaRPYCrXQzJ%2BQ3%2BQH6IKcpqcvHR3jt%2BoiUe2rFwMti7QAWWh4WRkK4W3%2BPZG1CiGKCWBdQot1PyiRFv9v%2Fuq%2F0vkQaPc4yA0GV%2BR3NiVZz9OVkuvHghXYYBMV9kjQMO6Gj8QGOqUBhWUejOf752U6s4p6kzgLpcBk0TvxLMF7W0SH5W2Ag5PuXT5d5REyjkf9oCJ5fyfVz%2BuvB7E7uGCa9BgPed7L1JybOKjMNyPeiqshr8IaEihbfUsiklJE2BdCn%2FVsIZwx3ronXXOH3Af%2Fh7jSE4Dx74Bn3tuSmCcnJaC3OY3OXneQcAMspZhHN6HvK%2Ft%2BE1LxeVI3UO27AAm%2BFQE5drb8%2Bn0o7ozZ&X-Amz-Signature=6b1bc88712bc03678dae5fa3ec1db5d4ba7f39ae77ed129859408a337f0141e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
