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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=a4277d63f5c4176072c789832430f4a9855b0eddf620f68dc0e7f47b3772c245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=8f6f4295d9681988ed7a4e6e37d8f7ed7522a7efa2637a1f4dfde8e7f5f58315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=90cbdf6654c3103aeef1f1cc807a7e18e497267b30f223dda6e347c8c56c2743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=264aeb20d78dfafab98c8b702d2f4930de2aebd85326bcda39d50bdabb3e4a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=b727a55397446e711cc21b6df9f1fcfffcb00b05dff04a72947868d8d8320f27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=461cfbe015a49c2194f958fe845a0198f95b303c402773691c65e386f61b460e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=595e7efce2cc1997a1850b824da37c0f35fb52a4ed51dc86d1fbebaf36aae6b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=c0a4e23d589a752d2116e865fcb2a26cf7aca25aec77f260d5661c1711d6a909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=d2f3d5ac7af0262c632fc0fb509ba89bf575c980d668d6722037d5dda00fa61f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=60a052513ce02e6ac2d7d682bbe13bc6c7ab6e6318f1af98b54f63ff3e4d1981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=eaa78c603536216cdfb689760a2b8385b068699e275e2d74508bc0bd8d76d5d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=ce2c7c686ce65f957fc878ff09bf0e8d6040b66b44fbaad1ff6cd12b06ade30b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=ea49a8746763c1bc1c49b9b002f6a2ef9a7d107b6f82b70a39d8e41d64880af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=63959f7c64a0631b4177614df941be3c8cffea40d1380737478a699f2eb4a3c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAWNX22S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCuyyIAH8ONkCoZj7e0MBPvRbpDw6OhnKEF2vAjdRUxWQIhAI7HMNC4QF8yzOJCyu1TVhbc2iwaFlC4bdvfgmmHX%2BT4Kv8DCF8QABoMNjM3NDIzMTgzODA1Igy3WdQBrRks%2FnVwaGwq3APNn2Kbv7a41LJ2JwZsq9iN%2FDnDCazeyNiHS%2BsteH2667aoXxxqrEy0tVOguvIMaS1HCqjDyssFNSDcgx0uRjBNO%2FCnuu7gAsFR4nLsXOrFdHrLXnxKMU8neD4DWK3XTOomYsa9blrFBkU4jHii%2Bt3%2Bx6G5cSdY33%2FuPrqy7HcHqTliANVyRJJzFlzRmkmNeAQjfX9HjEHY4UiYpGf%2F8ZO%2FNTCopQK9DIOFd2nja71ku197GhFB3%2BHvuZnrg0xcNAThHiKpALKDKi%2FU36yS66PSQ5s1LzI%2FZOpAvmJWlZBzq53pM4qf89t%2BW3jmCwDzhL%2FrF7AcVcTXAWzvxDsHgBqhVhUBuA5SsI8NUDNP6K0wO47IkXbST1ProsPx0zywL8qpB%2Bk9KL3D1f4z0CA6RvckQZ6lmuUJuj%2FFDC6Gb2Sx0QYxaP96GaDqfJZbFJD82%2FnujgfeDCnrjs8R2x0Cl2ynSL8fuh%2BGsQQJyiPTF0wjKG9%2BQEGk4zX0BBCHH9fIiTaM0Mp6%2ByP8vcyNoKC4M5N49AOoyIawMmepyuCaKZyGidNEi9IyKtEEJji5TPpX7g6RFOFGPvpoE7GqD%2ByJq%2BMzzv8kDjnwLRSiXkBiu2eYqgbvXYNBGXOKpo4DfjC8wZPEBjqkAUp8CEf08zg7K%2FQ8vc%2BceRYuZu78dz6ij9PzAhJCQfVY8doO54rffw%2FbhJrGppL8tiia4CbbD%2B5P18MKRSR%2F1o%2BsAMA4L2HhQxSI1xXl7RcxQ8St5f%2BMwwOTGTnBbiJfQW8GlvbPHP7%2F%2BFMqT2JCmr75ZgCQGyitGKavMjKPmxMBt6Xuunf6dTz%2FawMgdOjyJHTmgEY9DRgnh7g6uD7zdfISDNOq&X-Amz-Signature=8a2d1856e1e9571df91440a7ef6ad047e475ec9274b6dc09f02a54982abf8276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAWNX22S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCuyyIAH8ONkCoZj7e0MBPvRbpDw6OhnKEF2vAjdRUxWQIhAI7HMNC4QF8yzOJCyu1TVhbc2iwaFlC4bdvfgmmHX%2BT4Kv8DCF8QABoMNjM3NDIzMTgzODA1Igy3WdQBrRks%2FnVwaGwq3APNn2Kbv7a41LJ2JwZsq9iN%2FDnDCazeyNiHS%2BsteH2667aoXxxqrEy0tVOguvIMaS1HCqjDyssFNSDcgx0uRjBNO%2FCnuu7gAsFR4nLsXOrFdHrLXnxKMU8neD4DWK3XTOomYsa9blrFBkU4jHii%2Bt3%2Bx6G5cSdY33%2FuPrqy7HcHqTliANVyRJJzFlzRmkmNeAQjfX9HjEHY4UiYpGf%2F8ZO%2FNTCopQK9DIOFd2nja71ku197GhFB3%2BHvuZnrg0xcNAThHiKpALKDKi%2FU36yS66PSQ5s1LzI%2FZOpAvmJWlZBzq53pM4qf89t%2BW3jmCwDzhL%2FrF7AcVcTXAWzvxDsHgBqhVhUBuA5SsI8NUDNP6K0wO47IkXbST1ProsPx0zywL8qpB%2Bk9KL3D1f4z0CA6RvckQZ6lmuUJuj%2FFDC6Gb2Sx0QYxaP96GaDqfJZbFJD82%2FnujgfeDCnrjs8R2x0Cl2ynSL8fuh%2BGsQQJyiPTF0wjKG9%2BQEGk4zX0BBCHH9fIiTaM0Mp6%2ByP8vcyNoKC4M5N49AOoyIawMmepyuCaKZyGidNEi9IyKtEEJji5TPpX7g6RFOFGPvpoE7GqD%2ByJq%2BMzzv8kDjnwLRSiXkBiu2eYqgbvXYNBGXOKpo4DfjC8wZPEBjqkAUp8CEf08zg7K%2FQ8vc%2BceRYuZu78dz6ij9PzAhJCQfVY8doO54rffw%2FbhJrGppL8tiia4CbbD%2B5P18MKRSR%2F1o%2BsAMA4L2HhQxSI1xXl7RcxQ8St5f%2BMwwOTGTnBbiJfQW8GlvbPHP7%2F%2BFMqT2JCmr75ZgCQGyitGKavMjKPmxMBt6Xuunf6dTz%2FawMgdOjyJHTmgEY9DRgnh7g6uD7zdfISDNOq&X-Amz-Signature=93e4e36ef1ded529361ab9c9e323bb80589c6239b6970df079dc918815f1028b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAWNX22S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCuyyIAH8ONkCoZj7e0MBPvRbpDw6OhnKEF2vAjdRUxWQIhAI7HMNC4QF8yzOJCyu1TVhbc2iwaFlC4bdvfgmmHX%2BT4Kv8DCF8QABoMNjM3NDIzMTgzODA1Igy3WdQBrRks%2FnVwaGwq3APNn2Kbv7a41LJ2JwZsq9iN%2FDnDCazeyNiHS%2BsteH2667aoXxxqrEy0tVOguvIMaS1HCqjDyssFNSDcgx0uRjBNO%2FCnuu7gAsFR4nLsXOrFdHrLXnxKMU8neD4DWK3XTOomYsa9blrFBkU4jHii%2Bt3%2Bx6G5cSdY33%2FuPrqy7HcHqTliANVyRJJzFlzRmkmNeAQjfX9HjEHY4UiYpGf%2F8ZO%2FNTCopQK9DIOFd2nja71ku197GhFB3%2BHvuZnrg0xcNAThHiKpALKDKi%2FU36yS66PSQ5s1LzI%2FZOpAvmJWlZBzq53pM4qf89t%2BW3jmCwDzhL%2FrF7AcVcTXAWzvxDsHgBqhVhUBuA5SsI8NUDNP6K0wO47IkXbST1ProsPx0zywL8qpB%2Bk9KL3D1f4z0CA6RvckQZ6lmuUJuj%2FFDC6Gb2Sx0QYxaP96GaDqfJZbFJD82%2FnujgfeDCnrjs8R2x0Cl2ynSL8fuh%2BGsQQJyiPTF0wjKG9%2BQEGk4zX0BBCHH9fIiTaM0Mp6%2ByP8vcyNoKC4M5N49AOoyIawMmepyuCaKZyGidNEi9IyKtEEJji5TPpX7g6RFOFGPvpoE7GqD%2ByJq%2BMzzv8kDjnwLRSiXkBiu2eYqgbvXYNBGXOKpo4DfjC8wZPEBjqkAUp8CEf08zg7K%2FQ8vc%2BceRYuZu78dz6ij9PzAhJCQfVY8doO54rffw%2FbhJrGppL8tiia4CbbD%2B5P18MKRSR%2F1o%2BsAMA4L2HhQxSI1xXl7RcxQ8St5f%2BMwwOTGTnBbiJfQW8GlvbPHP7%2F%2BFMqT2JCmr75ZgCQGyitGKavMjKPmxMBt6Xuunf6dTz%2FawMgdOjyJHTmgEY9DRgnh7g6uD7zdfISDNOq&X-Amz-Signature=564fb7396293dd8d2c0e86818b5d42451d5bbe089e4c3c1b4b8efd97dbe15c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAWNX22S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCuyyIAH8ONkCoZj7e0MBPvRbpDw6OhnKEF2vAjdRUxWQIhAI7HMNC4QF8yzOJCyu1TVhbc2iwaFlC4bdvfgmmHX%2BT4Kv8DCF8QABoMNjM3NDIzMTgzODA1Igy3WdQBrRks%2FnVwaGwq3APNn2Kbv7a41LJ2JwZsq9iN%2FDnDCazeyNiHS%2BsteH2667aoXxxqrEy0tVOguvIMaS1HCqjDyssFNSDcgx0uRjBNO%2FCnuu7gAsFR4nLsXOrFdHrLXnxKMU8neD4DWK3XTOomYsa9blrFBkU4jHii%2Bt3%2Bx6G5cSdY33%2FuPrqy7HcHqTliANVyRJJzFlzRmkmNeAQjfX9HjEHY4UiYpGf%2F8ZO%2FNTCopQK9DIOFd2nja71ku197GhFB3%2BHvuZnrg0xcNAThHiKpALKDKi%2FU36yS66PSQ5s1LzI%2FZOpAvmJWlZBzq53pM4qf89t%2BW3jmCwDzhL%2FrF7AcVcTXAWzvxDsHgBqhVhUBuA5SsI8NUDNP6K0wO47IkXbST1ProsPx0zywL8qpB%2Bk9KL3D1f4z0CA6RvckQZ6lmuUJuj%2FFDC6Gb2Sx0QYxaP96GaDqfJZbFJD82%2FnujgfeDCnrjs8R2x0Cl2ynSL8fuh%2BGsQQJyiPTF0wjKG9%2BQEGk4zX0BBCHH9fIiTaM0Mp6%2ByP8vcyNoKC4M5N49AOoyIawMmepyuCaKZyGidNEi9IyKtEEJji5TPpX7g6RFOFGPvpoE7GqD%2ByJq%2BMzzv8kDjnwLRSiXkBiu2eYqgbvXYNBGXOKpo4DfjC8wZPEBjqkAUp8CEf08zg7K%2FQ8vc%2BceRYuZu78dz6ij9PzAhJCQfVY8doO54rffw%2FbhJrGppL8tiia4CbbD%2B5P18MKRSR%2F1o%2BsAMA4L2HhQxSI1xXl7RcxQ8St5f%2BMwwOTGTnBbiJfQW8GlvbPHP7%2F%2BFMqT2JCmr75ZgCQGyitGKavMjKPmxMBt6Xuunf6dTz%2FawMgdOjyJHTmgEY9DRgnh7g6uD7zdfISDNOq&X-Amz-Signature=e7c5cf7e093e11592d7ce17a08c09e77c3b0b48deaa5db0cb5b73fd207c40fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAWNX22S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCuyyIAH8ONkCoZj7e0MBPvRbpDw6OhnKEF2vAjdRUxWQIhAI7HMNC4QF8yzOJCyu1TVhbc2iwaFlC4bdvfgmmHX%2BT4Kv8DCF8QABoMNjM3NDIzMTgzODA1Igy3WdQBrRks%2FnVwaGwq3APNn2Kbv7a41LJ2JwZsq9iN%2FDnDCazeyNiHS%2BsteH2667aoXxxqrEy0tVOguvIMaS1HCqjDyssFNSDcgx0uRjBNO%2FCnuu7gAsFR4nLsXOrFdHrLXnxKMU8neD4DWK3XTOomYsa9blrFBkU4jHii%2Bt3%2Bx6G5cSdY33%2FuPrqy7HcHqTliANVyRJJzFlzRmkmNeAQjfX9HjEHY4UiYpGf%2F8ZO%2FNTCopQK9DIOFd2nja71ku197GhFB3%2BHvuZnrg0xcNAThHiKpALKDKi%2FU36yS66PSQ5s1LzI%2FZOpAvmJWlZBzq53pM4qf89t%2BW3jmCwDzhL%2FrF7AcVcTXAWzvxDsHgBqhVhUBuA5SsI8NUDNP6K0wO47IkXbST1ProsPx0zywL8qpB%2Bk9KL3D1f4z0CA6RvckQZ6lmuUJuj%2FFDC6Gb2Sx0QYxaP96GaDqfJZbFJD82%2FnujgfeDCnrjs8R2x0Cl2ynSL8fuh%2BGsQQJyiPTF0wjKG9%2BQEGk4zX0BBCHH9fIiTaM0Mp6%2ByP8vcyNoKC4M5N49AOoyIawMmepyuCaKZyGidNEi9IyKtEEJji5TPpX7g6RFOFGPvpoE7GqD%2ByJq%2BMzzv8kDjnwLRSiXkBiu2eYqgbvXYNBGXOKpo4DfjC8wZPEBjqkAUp8CEf08zg7K%2FQ8vc%2BceRYuZu78dz6ij9PzAhJCQfVY8doO54rffw%2FbhJrGppL8tiia4CbbD%2B5P18MKRSR%2F1o%2BsAMA4L2HhQxSI1xXl7RcxQ8St5f%2BMwwOTGTnBbiJfQW8GlvbPHP7%2F%2BFMqT2JCmr75ZgCQGyitGKavMjKPmxMBt6Xuunf6dTz%2FawMgdOjyJHTmgEY9DRgnh7g6uD7zdfISDNOq&X-Amz-Signature=d3f6a1053ea7bb612b36763402d91830f91c0a7a1f328e2138e43073a1296b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAWNX22S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCuyyIAH8ONkCoZj7e0MBPvRbpDw6OhnKEF2vAjdRUxWQIhAI7HMNC4QF8yzOJCyu1TVhbc2iwaFlC4bdvfgmmHX%2BT4Kv8DCF8QABoMNjM3NDIzMTgzODA1Igy3WdQBrRks%2FnVwaGwq3APNn2Kbv7a41LJ2JwZsq9iN%2FDnDCazeyNiHS%2BsteH2667aoXxxqrEy0tVOguvIMaS1HCqjDyssFNSDcgx0uRjBNO%2FCnuu7gAsFR4nLsXOrFdHrLXnxKMU8neD4DWK3XTOomYsa9blrFBkU4jHii%2Bt3%2Bx6G5cSdY33%2FuPrqy7HcHqTliANVyRJJzFlzRmkmNeAQjfX9HjEHY4UiYpGf%2F8ZO%2FNTCopQK9DIOFd2nja71ku197GhFB3%2BHvuZnrg0xcNAThHiKpALKDKi%2FU36yS66PSQ5s1LzI%2FZOpAvmJWlZBzq53pM4qf89t%2BW3jmCwDzhL%2FrF7AcVcTXAWzvxDsHgBqhVhUBuA5SsI8NUDNP6K0wO47IkXbST1ProsPx0zywL8qpB%2Bk9KL3D1f4z0CA6RvckQZ6lmuUJuj%2FFDC6Gb2Sx0QYxaP96GaDqfJZbFJD82%2FnujgfeDCnrjs8R2x0Cl2ynSL8fuh%2BGsQQJyiPTF0wjKG9%2BQEGk4zX0BBCHH9fIiTaM0Mp6%2ByP8vcyNoKC4M5N49AOoyIawMmepyuCaKZyGidNEi9IyKtEEJji5TPpX7g6RFOFGPvpoE7GqD%2ByJq%2BMzzv8kDjnwLRSiXkBiu2eYqgbvXYNBGXOKpo4DfjC8wZPEBjqkAUp8CEf08zg7K%2FQ8vc%2BceRYuZu78dz6ij9PzAhJCQfVY8doO54rffw%2FbhJrGppL8tiia4CbbD%2B5P18MKRSR%2F1o%2BsAMA4L2HhQxSI1xXl7RcxQ8St5f%2BMwwOTGTnBbiJfQW8GlvbPHP7%2F%2BFMqT2JCmr75ZgCQGyitGKavMjKPmxMBt6Xuunf6dTz%2FawMgdOjyJHTmgEY9DRgnh7g6uD7zdfISDNOq&X-Amz-Signature=e22ba100fb8e7bffb908a16ad119088803e62ac1fd09686aadc8da5b70728429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
