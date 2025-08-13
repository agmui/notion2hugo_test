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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R52SFHN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0dcvVo%2BPfB9zluhikgDlBCDGZO%2FjYgLuH1i7dYTqcUAIhAPxZFlubVz9h%2FzburkzaepYkO6%2FMC%2Fd45cFAosIeycb7Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyicPzyny2C%2F%2F9OwDcq3AMUuu3pzhOXB%2FbjaMnNjHhSlrHjoBNvJWZBxKfTETlbTGnnd0odJVcCg9%2FHqu0gZm%2B0M2%2Bi0SJntuTj4j2YtQwytpqGJk14kfTjXBKO1UH8Zzt1kD5Txl%2Fq2d7kPYPYjwUBEOsrExId9NBuhOwws9rCL4xrAF1NEITzIblZVldFX%2Fx0hxd4awcXEKhn%2BOG15yCD5cbAymkL346%2BvD8X4HIxZPZU5TcXlE4Xj4xxv8iz74Z7uiOwmidhD1qP83Hd1AI4ymZ9IIBCLHHJgxdVwo8SiMZUCk3yGih8xb5VKMIo6tdtNoOh6ihbvLATSgsDEVAl38%2BQfeB5%2BFkbIDFoHP%2FtDswEM56EQ2sv82dbzuCYc93ZmbuXMdU4aih5hyCksBHmKTiKsKHRbqj3xIgFy79q2WoA07oiv313QlHP0XlfGruGWTHk%2B24JEbdCc2zFkFpT52tzpELQJEJJcDhWLQH4YFn37fC0cbXBd1TWuqjEXi95bfYczLQ45Glf34R8M1Yhf9pVh7cnvplrg%2FXaV9jHXlcGSEh2XoDlrsjpZtlUSZauIXfLYVnYS2K%2BSlVJw1f3v5iEgA2r%2FUvZ34YC1b3NZuhNNuwe4uPAmtS7dV0Kbtxor%2BbNDLnTQ24jXDD5n%2FPEBjqkAUX3X6KM774zs4MvkAFbfPBviYAA8kswLSUXW0NSODjDE4Fjo502eft%2F3SlVwmRMSQn5Zk1up7HDJb4WYaec%2FsVqsHdlIhF4MKSIA2uZWIs7AAVkgXf42DGa9sihEQq27s%2BtGSCNCyMcQtLxkWP%2Bw93RDyjaf7BCOQB4hn1enMECPyzTQL7mKUD%2B0lZXko0kajW%2FSHPjQVxn%2BJWWaS6H%2BnELMGq5&X-Amz-Signature=3bd0469391403a7dbf8954ca9ef6dc3e4efe247bb1d117f8dcc93d39665cd9e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R52SFHN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0dcvVo%2BPfB9zluhikgDlBCDGZO%2FjYgLuH1i7dYTqcUAIhAPxZFlubVz9h%2FzburkzaepYkO6%2FMC%2Fd45cFAosIeycb7Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyicPzyny2C%2F%2F9OwDcq3AMUuu3pzhOXB%2FbjaMnNjHhSlrHjoBNvJWZBxKfTETlbTGnnd0odJVcCg9%2FHqu0gZm%2B0M2%2Bi0SJntuTj4j2YtQwytpqGJk14kfTjXBKO1UH8Zzt1kD5Txl%2Fq2d7kPYPYjwUBEOsrExId9NBuhOwws9rCL4xrAF1NEITzIblZVldFX%2Fx0hxd4awcXEKhn%2BOG15yCD5cbAymkL346%2BvD8X4HIxZPZU5TcXlE4Xj4xxv8iz74Z7uiOwmidhD1qP83Hd1AI4ymZ9IIBCLHHJgxdVwo8SiMZUCk3yGih8xb5VKMIo6tdtNoOh6ihbvLATSgsDEVAl38%2BQfeB5%2BFkbIDFoHP%2FtDswEM56EQ2sv82dbzuCYc93ZmbuXMdU4aih5hyCksBHmKTiKsKHRbqj3xIgFy79q2WoA07oiv313QlHP0XlfGruGWTHk%2B24JEbdCc2zFkFpT52tzpELQJEJJcDhWLQH4YFn37fC0cbXBd1TWuqjEXi95bfYczLQ45Glf34R8M1Yhf9pVh7cnvplrg%2FXaV9jHXlcGSEh2XoDlrsjpZtlUSZauIXfLYVnYS2K%2BSlVJw1f3v5iEgA2r%2FUvZ34YC1b3NZuhNNuwe4uPAmtS7dV0Kbtxor%2BbNDLnTQ24jXDD5n%2FPEBjqkAUX3X6KM774zs4MvkAFbfPBviYAA8kswLSUXW0NSODjDE4Fjo502eft%2F3SlVwmRMSQn5Zk1up7HDJb4WYaec%2FsVqsHdlIhF4MKSIA2uZWIs7AAVkgXf42DGa9sihEQq27s%2BtGSCNCyMcQtLxkWP%2Bw93RDyjaf7BCOQB4hn1enMECPyzTQL7mKUD%2B0lZXko0kajW%2FSHPjQVxn%2BJWWaS6H%2BnELMGq5&X-Amz-Signature=a5f60c7373190c5e44d08e49a77bdc21bcffb7b4d68729008cfac1bc52c3f19b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R52SFHN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0dcvVo%2BPfB9zluhikgDlBCDGZO%2FjYgLuH1i7dYTqcUAIhAPxZFlubVz9h%2FzburkzaepYkO6%2FMC%2Fd45cFAosIeycb7Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyicPzyny2C%2F%2F9OwDcq3AMUuu3pzhOXB%2FbjaMnNjHhSlrHjoBNvJWZBxKfTETlbTGnnd0odJVcCg9%2FHqu0gZm%2B0M2%2Bi0SJntuTj4j2YtQwytpqGJk14kfTjXBKO1UH8Zzt1kD5Txl%2Fq2d7kPYPYjwUBEOsrExId9NBuhOwws9rCL4xrAF1NEITzIblZVldFX%2Fx0hxd4awcXEKhn%2BOG15yCD5cbAymkL346%2BvD8X4HIxZPZU5TcXlE4Xj4xxv8iz74Z7uiOwmidhD1qP83Hd1AI4ymZ9IIBCLHHJgxdVwo8SiMZUCk3yGih8xb5VKMIo6tdtNoOh6ihbvLATSgsDEVAl38%2BQfeB5%2BFkbIDFoHP%2FtDswEM56EQ2sv82dbzuCYc93ZmbuXMdU4aih5hyCksBHmKTiKsKHRbqj3xIgFy79q2WoA07oiv313QlHP0XlfGruGWTHk%2B24JEbdCc2zFkFpT52tzpELQJEJJcDhWLQH4YFn37fC0cbXBd1TWuqjEXi95bfYczLQ45Glf34R8M1Yhf9pVh7cnvplrg%2FXaV9jHXlcGSEh2XoDlrsjpZtlUSZauIXfLYVnYS2K%2BSlVJw1f3v5iEgA2r%2FUvZ34YC1b3NZuhNNuwe4uPAmtS7dV0Kbtxor%2BbNDLnTQ24jXDD5n%2FPEBjqkAUX3X6KM774zs4MvkAFbfPBviYAA8kswLSUXW0NSODjDE4Fjo502eft%2F3SlVwmRMSQn5Zk1up7HDJb4WYaec%2FsVqsHdlIhF4MKSIA2uZWIs7AAVkgXf42DGa9sihEQq27s%2BtGSCNCyMcQtLxkWP%2Bw93RDyjaf7BCOQB4hn1enMECPyzTQL7mKUD%2B0lZXko0kajW%2FSHPjQVxn%2BJWWaS6H%2BnELMGq5&X-Amz-Signature=39f9e07b8dbb58ebb9d2d0760a37414f35dab76fb649667b5e7f692edd233f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R52SFHN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0dcvVo%2BPfB9zluhikgDlBCDGZO%2FjYgLuH1i7dYTqcUAIhAPxZFlubVz9h%2FzburkzaepYkO6%2FMC%2Fd45cFAosIeycb7Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyicPzyny2C%2F%2F9OwDcq3AMUuu3pzhOXB%2FbjaMnNjHhSlrHjoBNvJWZBxKfTETlbTGnnd0odJVcCg9%2FHqu0gZm%2B0M2%2Bi0SJntuTj4j2YtQwytpqGJk14kfTjXBKO1UH8Zzt1kD5Txl%2Fq2d7kPYPYjwUBEOsrExId9NBuhOwws9rCL4xrAF1NEITzIblZVldFX%2Fx0hxd4awcXEKhn%2BOG15yCD5cbAymkL346%2BvD8X4HIxZPZU5TcXlE4Xj4xxv8iz74Z7uiOwmidhD1qP83Hd1AI4ymZ9IIBCLHHJgxdVwo8SiMZUCk3yGih8xb5VKMIo6tdtNoOh6ihbvLATSgsDEVAl38%2BQfeB5%2BFkbIDFoHP%2FtDswEM56EQ2sv82dbzuCYc93ZmbuXMdU4aih5hyCksBHmKTiKsKHRbqj3xIgFy79q2WoA07oiv313QlHP0XlfGruGWTHk%2B24JEbdCc2zFkFpT52tzpELQJEJJcDhWLQH4YFn37fC0cbXBd1TWuqjEXi95bfYczLQ45Glf34R8M1Yhf9pVh7cnvplrg%2FXaV9jHXlcGSEh2XoDlrsjpZtlUSZauIXfLYVnYS2K%2BSlVJw1f3v5iEgA2r%2FUvZ34YC1b3NZuhNNuwe4uPAmtS7dV0Kbtxor%2BbNDLnTQ24jXDD5n%2FPEBjqkAUX3X6KM774zs4MvkAFbfPBviYAA8kswLSUXW0NSODjDE4Fjo502eft%2F3SlVwmRMSQn5Zk1up7HDJb4WYaec%2FsVqsHdlIhF4MKSIA2uZWIs7AAVkgXf42DGa9sihEQq27s%2BtGSCNCyMcQtLxkWP%2Bw93RDyjaf7BCOQB4hn1enMECPyzTQL7mKUD%2B0lZXko0kajW%2FSHPjQVxn%2BJWWaS6H%2BnELMGq5&X-Amz-Signature=4593afb94d3eb329ea1c2dccc988978ea6195a76875a51d9475de34b5a61aae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R52SFHN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0dcvVo%2BPfB9zluhikgDlBCDGZO%2FjYgLuH1i7dYTqcUAIhAPxZFlubVz9h%2FzburkzaepYkO6%2FMC%2Fd45cFAosIeycb7Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyicPzyny2C%2F%2F9OwDcq3AMUuu3pzhOXB%2FbjaMnNjHhSlrHjoBNvJWZBxKfTETlbTGnnd0odJVcCg9%2FHqu0gZm%2B0M2%2Bi0SJntuTj4j2YtQwytpqGJk14kfTjXBKO1UH8Zzt1kD5Txl%2Fq2d7kPYPYjwUBEOsrExId9NBuhOwws9rCL4xrAF1NEITzIblZVldFX%2Fx0hxd4awcXEKhn%2BOG15yCD5cbAymkL346%2BvD8X4HIxZPZU5TcXlE4Xj4xxv8iz74Z7uiOwmidhD1qP83Hd1AI4ymZ9IIBCLHHJgxdVwo8SiMZUCk3yGih8xb5VKMIo6tdtNoOh6ihbvLATSgsDEVAl38%2BQfeB5%2BFkbIDFoHP%2FtDswEM56EQ2sv82dbzuCYc93ZmbuXMdU4aih5hyCksBHmKTiKsKHRbqj3xIgFy79q2WoA07oiv313QlHP0XlfGruGWTHk%2B24JEbdCc2zFkFpT52tzpELQJEJJcDhWLQH4YFn37fC0cbXBd1TWuqjEXi95bfYczLQ45Glf34R8M1Yhf9pVh7cnvplrg%2FXaV9jHXlcGSEh2XoDlrsjpZtlUSZauIXfLYVnYS2K%2BSlVJw1f3v5iEgA2r%2FUvZ34YC1b3NZuhNNuwe4uPAmtS7dV0Kbtxor%2BbNDLnTQ24jXDD5n%2FPEBjqkAUX3X6KM774zs4MvkAFbfPBviYAA8kswLSUXW0NSODjDE4Fjo502eft%2F3SlVwmRMSQn5Zk1up7HDJb4WYaec%2FsVqsHdlIhF4MKSIA2uZWIs7AAVkgXf42DGa9sihEQq27s%2BtGSCNCyMcQtLxkWP%2Bw93RDyjaf7BCOQB4hn1enMECPyzTQL7mKUD%2B0lZXko0kajW%2FSHPjQVxn%2BJWWaS6H%2BnELMGq5&X-Amz-Signature=352da7e944b313e68e550ea8112b6ee4cea41c1fbb6d1e929a30573ceddd264e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R52SFHN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0dcvVo%2BPfB9zluhikgDlBCDGZO%2FjYgLuH1i7dYTqcUAIhAPxZFlubVz9h%2FzburkzaepYkO6%2FMC%2Fd45cFAosIeycb7Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyicPzyny2C%2F%2F9OwDcq3AMUuu3pzhOXB%2FbjaMnNjHhSlrHjoBNvJWZBxKfTETlbTGnnd0odJVcCg9%2FHqu0gZm%2B0M2%2Bi0SJntuTj4j2YtQwytpqGJk14kfTjXBKO1UH8Zzt1kD5Txl%2Fq2d7kPYPYjwUBEOsrExId9NBuhOwws9rCL4xrAF1NEITzIblZVldFX%2Fx0hxd4awcXEKhn%2BOG15yCD5cbAymkL346%2BvD8X4HIxZPZU5TcXlE4Xj4xxv8iz74Z7uiOwmidhD1qP83Hd1AI4ymZ9IIBCLHHJgxdVwo8SiMZUCk3yGih8xb5VKMIo6tdtNoOh6ihbvLATSgsDEVAl38%2BQfeB5%2BFkbIDFoHP%2FtDswEM56EQ2sv82dbzuCYc93ZmbuXMdU4aih5hyCksBHmKTiKsKHRbqj3xIgFy79q2WoA07oiv313QlHP0XlfGruGWTHk%2B24JEbdCc2zFkFpT52tzpELQJEJJcDhWLQH4YFn37fC0cbXBd1TWuqjEXi95bfYczLQ45Glf34R8M1Yhf9pVh7cnvplrg%2FXaV9jHXlcGSEh2XoDlrsjpZtlUSZauIXfLYVnYS2K%2BSlVJw1f3v5iEgA2r%2FUvZ34YC1b3NZuhNNuwe4uPAmtS7dV0Kbtxor%2BbNDLnTQ24jXDD5n%2FPEBjqkAUX3X6KM774zs4MvkAFbfPBviYAA8kswLSUXW0NSODjDE4Fjo502eft%2F3SlVwmRMSQn5Zk1up7HDJb4WYaec%2FsVqsHdlIhF4MKSIA2uZWIs7AAVkgXf42DGa9sihEQq27s%2BtGSCNCyMcQtLxkWP%2Bw93RDyjaf7BCOQB4hn1enMECPyzTQL7mKUD%2B0lZXko0kajW%2FSHPjQVxn%2BJWWaS6H%2BnELMGq5&X-Amz-Signature=f7255fe63c19a086f804cf1769a24ba0e06ba9bef701d2327391b0cfc8d8ac76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R52SFHN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0dcvVo%2BPfB9zluhikgDlBCDGZO%2FjYgLuH1i7dYTqcUAIhAPxZFlubVz9h%2FzburkzaepYkO6%2FMC%2Fd45cFAosIeycb7Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyicPzyny2C%2F%2F9OwDcq3AMUuu3pzhOXB%2FbjaMnNjHhSlrHjoBNvJWZBxKfTETlbTGnnd0odJVcCg9%2FHqu0gZm%2B0M2%2Bi0SJntuTj4j2YtQwytpqGJk14kfTjXBKO1UH8Zzt1kD5Txl%2Fq2d7kPYPYjwUBEOsrExId9NBuhOwws9rCL4xrAF1NEITzIblZVldFX%2Fx0hxd4awcXEKhn%2BOG15yCD5cbAymkL346%2BvD8X4HIxZPZU5TcXlE4Xj4xxv8iz74Z7uiOwmidhD1qP83Hd1AI4ymZ9IIBCLHHJgxdVwo8SiMZUCk3yGih8xb5VKMIo6tdtNoOh6ihbvLATSgsDEVAl38%2BQfeB5%2BFkbIDFoHP%2FtDswEM56EQ2sv82dbzuCYc93ZmbuXMdU4aih5hyCksBHmKTiKsKHRbqj3xIgFy79q2WoA07oiv313QlHP0XlfGruGWTHk%2B24JEbdCc2zFkFpT52tzpELQJEJJcDhWLQH4YFn37fC0cbXBd1TWuqjEXi95bfYczLQ45Glf34R8M1Yhf9pVh7cnvplrg%2FXaV9jHXlcGSEh2XoDlrsjpZtlUSZauIXfLYVnYS2K%2BSlVJw1f3v5iEgA2r%2FUvZ34YC1b3NZuhNNuwe4uPAmtS7dV0Kbtxor%2BbNDLnTQ24jXDD5n%2FPEBjqkAUX3X6KM774zs4MvkAFbfPBviYAA8kswLSUXW0NSODjDE4Fjo502eft%2F3SlVwmRMSQn5Zk1up7HDJb4WYaec%2FsVqsHdlIhF4MKSIA2uZWIs7AAVkgXf42DGa9sihEQq27s%2BtGSCNCyMcQtLxkWP%2Bw93RDyjaf7BCOQB4hn1enMECPyzTQL7mKUD%2B0lZXko0kajW%2FSHPjQVxn%2BJWWaS6H%2BnELMGq5&X-Amz-Signature=fe0c29e99eb0973b86065a619552ac4e48fb6f7875eb970a8ec58aa87f7449a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R52SFHN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0dcvVo%2BPfB9zluhikgDlBCDGZO%2FjYgLuH1i7dYTqcUAIhAPxZFlubVz9h%2FzburkzaepYkO6%2FMC%2Fd45cFAosIeycb7Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyicPzyny2C%2F%2F9OwDcq3AMUuu3pzhOXB%2FbjaMnNjHhSlrHjoBNvJWZBxKfTETlbTGnnd0odJVcCg9%2FHqu0gZm%2B0M2%2Bi0SJntuTj4j2YtQwytpqGJk14kfTjXBKO1UH8Zzt1kD5Txl%2Fq2d7kPYPYjwUBEOsrExId9NBuhOwws9rCL4xrAF1NEITzIblZVldFX%2Fx0hxd4awcXEKhn%2BOG15yCD5cbAymkL346%2BvD8X4HIxZPZU5TcXlE4Xj4xxv8iz74Z7uiOwmidhD1qP83Hd1AI4ymZ9IIBCLHHJgxdVwo8SiMZUCk3yGih8xb5VKMIo6tdtNoOh6ihbvLATSgsDEVAl38%2BQfeB5%2BFkbIDFoHP%2FtDswEM56EQ2sv82dbzuCYc93ZmbuXMdU4aih5hyCksBHmKTiKsKHRbqj3xIgFy79q2WoA07oiv313QlHP0XlfGruGWTHk%2B24JEbdCc2zFkFpT52tzpELQJEJJcDhWLQH4YFn37fC0cbXBd1TWuqjEXi95bfYczLQ45Glf34R8M1Yhf9pVh7cnvplrg%2FXaV9jHXlcGSEh2XoDlrsjpZtlUSZauIXfLYVnYS2K%2BSlVJw1f3v5iEgA2r%2FUvZ34YC1b3NZuhNNuwe4uPAmtS7dV0Kbtxor%2BbNDLnTQ24jXDD5n%2FPEBjqkAUX3X6KM774zs4MvkAFbfPBviYAA8kswLSUXW0NSODjDE4Fjo502eft%2F3SlVwmRMSQn5Zk1up7HDJb4WYaec%2FsVqsHdlIhF4MKSIA2uZWIs7AAVkgXf42DGa9sihEQq27s%2BtGSCNCyMcQtLxkWP%2Bw93RDyjaf7BCOQB4hn1enMECPyzTQL7mKUD%2B0lZXko0kajW%2FSHPjQVxn%2BJWWaS6H%2BnELMGq5&X-Amz-Signature=462e07ced23864cca254c6f3489047773b410b49315044f219e696c21b08b421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R52SFHN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0dcvVo%2BPfB9zluhikgDlBCDGZO%2FjYgLuH1i7dYTqcUAIhAPxZFlubVz9h%2FzburkzaepYkO6%2FMC%2Fd45cFAosIeycb7Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyicPzyny2C%2F%2F9OwDcq3AMUuu3pzhOXB%2FbjaMnNjHhSlrHjoBNvJWZBxKfTETlbTGnnd0odJVcCg9%2FHqu0gZm%2B0M2%2Bi0SJntuTj4j2YtQwytpqGJk14kfTjXBKO1UH8Zzt1kD5Txl%2Fq2d7kPYPYjwUBEOsrExId9NBuhOwws9rCL4xrAF1NEITzIblZVldFX%2Fx0hxd4awcXEKhn%2BOG15yCD5cbAymkL346%2BvD8X4HIxZPZU5TcXlE4Xj4xxv8iz74Z7uiOwmidhD1qP83Hd1AI4ymZ9IIBCLHHJgxdVwo8SiMZUCk3yGih8xb5VKMIo6tdtNoOh6ihbvLATSgsDEVAl38%2BQfeB5%2BFkbIDFoHP%2FtDswEM56EQ2sv82dbzuCYc93ZmbuXMdU4aih5hyCksBHmKTiKsKHRbqj3xIgFy79q2WoA07oiv313QlHP0XlfGruGWTHk%2B24JEbdCc2zFkFpT52tzpELQJEJJcDhWLQH4YFn37fC0cbXBd1TWuqjEXi95bfYczLQ45Glf34R8M1Yhf9pVh7cnvplrg%2FXaV9jHXlcGSEh2XoDlrsjpZtlUSZauIXfLYVnYS2K%2BSlVJw1f3v5iEgA2r%2FUvZ34YC1b3NZuhNNuwe4uPAmtS7dV0Kbtxor%2BbNDLnTQ24jXDD5n%2FPEBjqkAUX3X6KM774zs4MvkAFbfPBviYAA8kswLSUXW0NSODjDE4Fjo502eft%2F3SlVwmRMSQn5Zk1up7HDJb4WYaec%2FsVqsHdlIhF4MKSIA2uZWIs7AAVkgXf42DGa9sihEQq27s%2BtGSCNCyMcQtLxkWP%2Bw93RDyjaf7BCOQB4hn1enMECPyzTQL7mKUD%2B0lZXko0kajW%2FSHPjQVxn%2BJWWaS6H%2BnELMGq5&X-Amz-Signature=ecd0e9c710e06c5a3908627434fc3f1ec5f02c1fd2c960c35566a395255ae6bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R52SFHN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0dcvVo%2BPfB9zluhikgDlBCDGZO%2FjYgLuH1i7dYTqcUAIhAPxZFlubVz9h%2FzburkzaepYkO6%2FMC%2Fd45cFAosIeycb7Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyicPzyny2C%2F%2F9OwDcq3AMUuu3pzhOXB%2FbjaMnNjHhSlrHjoBNvJWZBxKfTETlbTGnnd0odJVcCg9%2FHqu0gZm%2B0M2%2Bi0SJntuTj4j2YtQwytpqGJk14kfTjXBKO1UH8Zzt1kD5Txl%2Fq2d7kPYPYjwUBEOsrExId9NBuhOwws9rCL4xrAF1NEITzIblZVldFX%2Fx0hxd4awcXEKhn%2BOG15yCD5cbAymkL346%2BvD8X4HIxZPZU5TcXlE4Xj4xxv8iz74Z7uiOwmidhD1qP83Hd1AI4ymZ9IIBCLHHJgxdVwo8SiMZUCk3yGih8xb5VKMIo6tdtNoOh6ihbvLATSgsDEVAl38%2BQfeB5%2BFkbIDFoHP%2FtDswEM56EQ2sv82dbzuCYc93ZmbuXMdU4aih5hyCksBHmKTiKsKHRbqj3xIgFy79q2WoA07oiv313QlHP0XlfGruGWTHk%2B24JEbdCc2zFkFpT52tzpELQJEJJcDhWLQH4YFn37fC0cbXBd1TWuqjEXi95bfYczLQ45Glf34R8M1Yhf9pVh7cnvplrg%2FXaV9jHXlcGSEh2XoDlrsjpZtlUSZauIXfLYVnYS2K%2BSlVJw1f3v5iEgA2r%2FUvZ34YC1b3NZuhNNuwe4uPAmtS7dV0Kbtxor%2BbNDLnTQ24jXDD5n%2FPEBjqkAUX3X6KM774zs4MvkAFbfPBviYAA8kswLSUXW0NSODjDE4Fjo502eft%2F3SlVwmRMSQn5Zk1up7HDJb4WYaec%2FsVqsHdlIhF4MKSIA2uZWIs7AAVkgXf42DGa9sihEQq27s%2BtGSCNCyMcQtLxkWP%2Bw93RDyjaf7BCOQB4hn1enMECPyzTQL7mKUD%2B0lZXko0kajW%2FSHPjQVxn%2BJWWaS6H%2BnELMGq5&X-Amz-Signature=9bd55bed1df49042e57cf9527efe70acc632fc28464631d6aadef9620c27e7a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5WW2GM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPvak%2BrMBofzY2iLOLNPy3s72a%2B18hMLNK53ROeoUjlAiBxecRA90eWVISlsQGiawj1UDyx0fRhJickyt3PONRBTyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMJGj6LTZcUM%2B9BbZDKtwD%2FdiW5bL2m5rg%2F23qSi%2BgbwwaPrY7G9QahoqcIyUsjEqvowLyvlv9%2B%2FaP0ANuZIit6Za4gFQnAtS67%2FXaZwjt%2Fo2sF3FgUSjKFSkc5951nj%2Bb6py0W91JCa33GymDyH3xZRwmllBkuMBX5CxaeD8iXJUiR0Wz3uuUs2Ht3N1InBARsU4kX0iIV7rk0vwDI9bPQtJKcyxoel9%2BMEt8OXXGxHdoAvWW5UpTH7ZXG7oughm6SAaF1Tq4eEyJQTqCN6RX2ku1PhjCjdbm3CUAgKcaMs5j6at5IJjImWoAwpkhLjESZIsPX9g%2BIB8hPXPv2QrLAZqHhwUkm8J3Hi9W2YydxKz7KZfYr2Raowxn8olgB6HRfQGUeuALB9H0ZjW1UMqP8TZ0kn1DWsf1xmMQ2ivX6X5ejDZBYfHvZ%2Bi9ojUwfI8y%2FcsuGso5EZXN8xkvi4SQSnXNLCBJhi1vpeehyAKOLNWJ4AI8L8LXfQd%2BoZJzxLv%2Flz89O5JUniITwyItxmPDLflbYrQddJNBIYfUQmQ8CwVnCiZN%2Fx3jTdeEJY%2BVGPAWn9a7s%2BnFcaJTjG%2F%2FktgbeXOuje9r1JikIgDZjWIX1mb8%2FKj%2BlRRexrWZ49K%2FlWHGF0z%2FCnSi6p5Ugoww9p%2FzxAY6pgHH0s4SobpYRgfIopaAXfZ7glNPKTkG4OxRmiDnJB%2BRmgoVnFKeNVIRPVVl%2BlzeW67Hb4siQS%2FoRgoxK9Sm%2BZ2iYRXINuiF4Sq54UedjKNjtVaxvB4N7Y9U8kXkjc98Tn3YcPhO7cq67pf2g33nzeV7tOedTSN9n4vXuCEJVRUWVxaNyizZMCX%2BaMYtuRveAmLkLH%2BkjxhWJDF73rt1pUNm0TSQi%2BBl&X-Amz-Signature=981df70ddc561dd0497b5c411f575d9d90554b5d89e2a007514c0299246c6259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E3QF2B3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL03gL4tL2wOP%2BiF75bzkpo5t9bXmW8TODN5S79QDXeAIgLj1wfm1fjEpLPMQPSSrS7ZzeXerHwAL87SU6w7hi%2FtEq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEnrGgyJXekaQcA%2FoircA1RSSNtcp6gjF90Jabe6fFR0PU1Pm9580KhUKcIn6DF%2BqQI3oWWRqFIVSWJplMQJTEj5xcdzRFyHJ7D8tlYltGkMSHyB%2FtXpca9WnyK4I3o1EHJKIYNo1Lzxf7NfUpZ2meySO1mVbqGOIwR2hzhllVArIc1l0pydXgrBqTXTXXTpbEEvOVLte8CcP4qGdwJ3sSu%2FKiNbG3rW20y1XAjdb9whZdL292e9%2FIlMj%2F6QwSfxvPYC86DfL84IJapb%2FFyNXrw5%2Ft%2F8NN4%2BhdBzkaIiFMvQE6ttSQ7MRS259jOUo2vzyAvvBCLZ4Z9DUwXghR15GxpQeTzrSBFpDXu5csrnemq5hqzJ0uSc%2FSHOPxGnQ2nnBPZ3g12PHBmwLw4iAA%2BhjnoVJkTzhoJ0qYnKbZG2vLGEk%2BYG1G40TZdyKzKlqdi5VwzGPgwIxFNOxWDu4Q1fM%2BRgV%2FBFJIqfxq5aWModKAZepWu4g7IjizM5rfpKAXmuSqgcZ3XhepJblGhuDMxSJN5jkSjOSR08CKcTMuJHm1s12yo7tI5dIjSHYpBh4wBqkMpE03zJK1TkjI18erq8JKckTZIKCN5g%2F240RZzrGnPFQOMrEKctNvDf060DL7BbspjlORMj8FCvi%2BffMKmg88QGOqUB%2FGs8yXSGkOQBYBgPC3IW%2FPJXouvfOZnNm66F64Z19ncAgAekz6MhqO6I0TWGpA5uvseOQDdCdQ8SaSkDhyEEkBV2uakszR3NMlSmQhpoimwb%2B37QOVl8wLkLgo7LsEq0qe1hTWVND1jNMknpzBdsddQU61pdwmh0FQTRUjjUMdZNnXAoO7A%2F9JvjUlYKcQ1q0hLW4TDby8ogwtc600Fng3GmuOIt&X-Amz-Signature=f7867429c50bb931d630124d824c853e0277bd867fab6452b1ce97e3096a7a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XJRGUAE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BZk5O9jqpULXy5Uwl4u5Pqy1%2BPzjBIUGn2cftFfkTQAiAVv%2FPmW5bl1xszy9HecKcSXjwGfZXzhtdcyIZ1VFsZdCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMjGEGlCvivWYQ7a9eKtwDxIGT1LnlDT3wojzFlKDjpN%2B3Y0rYQvpOs1pfOC8tbU2Bk8gsEzuh4ZesmgFpK2TYZJ46KdiQjbMZDBBFXuaZO7LDZvYk800wPDnse2KrNBD%2BZu33uzznnwiGAtgWWAMtMRPhLhlBoWah2moV2l11VVKqiIyvj97j0xi0GeaF%2BcvJ8%2FVQ3u1gKK4pc%2FYEAvZzMK8DDq2l9fm7iTTykxVWwNgsaZkBTN6gxaRphlCfQ4Ggvm9ZKE2JFD6cMrALf4BEFZdCfQOBO2%2F0ElhEfzV2bv4Lo%2BTbVE6Prr5MUvx3L92ZQPfAwOs%2F0z0TydUGA%2BgN9ALE%2BJ8W14LeG3mGfv3LxTkE6OI%2FkLvMEzGgoXASms3pGhmraRcRY8gDJUWMBUBZErn7MTi4AyiR4uRCOyrNXStFvjdJ2bDS2ud%2FFcpC0R46ksuud%2FgTF8pYG%2BEYx3uQTTIB9EOjkbzj5BQ4B8pEYXLa15ioA6XwYXvWZa5pvrJlFFeJ6cTjvPT5rh70XfCLEOsA4UM0us2IUQaCG2oIrMwI3jEHEseYWDH4BgaK7MJBP9mUKvbrzCi7lShpgDEGzW%2BFHFCmbfwxZDcy8ze%2FvByX5hpocd7LPOiqFK4QWkkHvkly9Mevc5%2B7z8kw8p%2FzxAY6pgE8v5h1Kuo1QAEvLrJ43tpAntwacSip%2B%2FEm7P7noyM7yw8mlTpaJrWqr2GNk0ILgOrVslPOWheE3C2c32H0OoWc53qkgC1deS7Fn4A3mYUQmpMBJMIBEmv16mIFbgxqlhcDcI53tOI2DffCe%2B2zy7Ov78k8aRioQcOxqtztja1imaHuMkphpKadJbQe0m0QN118hVEmra6PnWHWLF%2BO94o9r%2FiBTG21&X-Amz-Signature=b1f0d0274b26ded0d52fc140520f6f96c8fec9d6b1fb11e07f3e195d17b1e7f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R52SFHN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0dcvVo%2BPfB9zluhikgDlBCDGZO%2FjYgLuH1i7dYTqcUAIhAPxZFlubVz9h%2FzburkzaepYkO6%2FMC%2Fd45cFAosIeycb7Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyicPzyny2C%2F%2F9OwDcq3AMUuu3pzhOXB%2FbjaMnNjHhSlrHjoBNvJWZBxKfTETlbTGnnd0odJVcCg9%2FHqu0gZm%2B0M2%2Bi0SJntuTj4j2YtQwytpqGJk14kfTjXBKO1UH8Zzt1kD5Txl%2Fq2d7kPYPYjwUBEOsrExId9NBuhOwws9rCL4xrAF1NEITzIblZVldFX%2Fx0hxd4awcXEKhn%2BOG15yCD5cbAymkL346%2BvD8X4HIxZPZU5TcXlE4Xj4xxv8iz74Z7uiOwmidhD1qP83Hd1AI4ymZ9IIBCLHHJgxdVwo8SiMZUCk3yGih8xb5VKMIo6tdtNoOh6ihbvLATSgsDEVAl38%2BQfeB5%2BFkbIDFoHP%2FtDswEM56EQ2sv82dbzuCYc93ZmbuXMdU4aih5hyCksBHmKTiKsKHRbqj3xIgFy79q2WoA07oiv313QlHP0XlfGruGWTHk%2B24JEbdCc2zFkFpT52tzpELQJEJJcDhWLQH4YFn37fC0cbXBd1TWuqjEXi95bfYczLQ45Glf34R8M1Yhf9pVh7cnvplrg%2FXaV9jHXlcGSEh2XoDlrsjpZtlUSZauIXfLYVnYS2K%2BSlVJw1f3v5iEgA2r%2FUvZ34YC1b3NZuhNNuwe4uPAmtS7dV0Kbtxor%2BbNDLnTQ24jXDD5n%2FPEBjqkAUX3X6KM774zs4MvkAFbfPBviYAA8kswLSUXW0NSODjDE4Fjo502eft%2F3SlVwmRMSQn5Zk1up7HDJb4WYaec%2FsVqsHdlIhF4MKSIA2uZWIs7AAVkgXf42DGa9sihEQq27s%2BtGSCNCyMcQtLxkWP%2Bw93RDyjaf7BCOQB4hn1enMECPyzTQL7mKUD%2B0lZXko0kajW%2FSHPjQVxn%2BJWWaS6H%2BnELMGq5&X-Amz-Signature=b367cc29ea1827ccaaeaa340976c8efc4925046e336b939d4d7c55d4d7dff7c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRWV33XD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBc3fKoosFuvLUU%2F5JpkZtstwxDylTXwaK2UMeHcjsNjAiEA%2FVwzZRUYi61mEiNqS5hv85IxF%2BwIUDfBijMYKcK0L%2FMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDNEyXX9JJIjZgmdUoSrcA6dhDb7jkkjAX35ewmfBQtkRxRuCRv01GmelVp8KH3sdJO4NipY0FXkYkY3od5ut7CUxaqzgW%2FnEksCbOm%2Bt1bYTj0mQdqp3Jq5vLMywpdaJCFOKVLD6glwPxWT%2F5R6UC6rIeB0eUiNTlOehG%2FccEg90fyxvgbakx3S7olPu8s89%2FEvWbj2V0n0nBWudIIq5iernK0GaeLyuMcHnjXwpVpujPYsX%2FsV0u3Pp96E%2FJGfsmOlQlzdxYG3WRLOTj%2B0SyAzMl%2BQEumIXzkgv3wVJVlKA5vGCVKwNIzhoPEWa3g%2Bw3CSycJw0PQiJ8aJJMadB4j1bY135SPPdFU2atEvIxQLqHb9atvAc5PfbEk%2BOMW7oMVHR5YHbvXszZNXR2Izz8AQpI1k31038EAAKRkfxT1DpeZNqJIych975CiQ85rpoJjyiJqHPPslp4CsmIho2q%2BM18aUXQWhhU0zwPWtGvVVJ7ifp3GlC2ciGkWseobQDJW3QlBjM1EPxncAUGLH3stFX%2FBXAzAdMo%2BA7%2BDIymfmogq6CTdXprx5YxurrUXiJMR7AJsxg3JQtBHeAV6kzYJ6ylLuOeDqCSzwh6qCXXhXZFq5s5m2sl9P8peryZwcDG2RFGlTrXmNlMiqpMMCg88QGOqUB0Wks7ps7zkWsIwI6P%2ByUsK%2BADq2f4lBKC40q70cFs5PngwChzjQZV3BR5M9to2VKVDD7JDp2bkJhXu%2FpGhxdmWKFx9QpVI4ScsV18a4pGqEV9sZ6wpbr3lhu2hC9m7soUGTUH48qdhN5AtVkVJx%2F7J5QNZlYA5c4P2dXChqYQo4nVb0odAHTs5H7WvMKADhIUWHkhUjQhRtMWpof2neKTkaYVQWe&X-Amz-Signature=8e105b43c1fde4f8979e9dce893061cb76400309e23dff51706cb54275cd9966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R52SFHN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0dcvVo%2BPfB9zluhikgDlBCDGZO%2FjYgLuH1i7dYTqcUAIhAPxZFlubVz9h%2FzburkzaepYkO6%2FMC%2Fd45cFAosIeycb7Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyicPzyny2C%2F%2F9OwDcq3AMUuu3pzhOXB%2FbjaMnNjHhSlrHjoBNvJWZBxKfTETlbTGnnd0odJVcCg9%2FHqu0gZm%2B0M2%2Bi0SJntuTj4j2YtQwytpqGJk14kfTjXBKO1UH8Zzt1kD5Txl%2Fq2d7kPYPYjwUBEOsrExId9NBuhOwws9rCL4xrAF1NEITzIblZVldFX%2Fx0hxd4awcXEKhn%2BOG15yCD5cbAymkL346%2BvD8X4HIxZPZU5TcXlE4Xj4xxv8iz74Z7uiOwmidhD1qP83Hd1AI4ymZ9IIBCLHHJgxdVwo8SiMZUCk3yGih8xb5VKMIo6tdtNoOh6ihbvLATSgsDEVAl38%2BQfeB5%2BFkbIDFoHP%2FtDswEM56EQ2sv82dbzuCYc93ZmbuXMdU4aih5hyCksBHmKTiKsKHRbqj3xIgFy79q2WoA07oiv313QlHP0XlfGruGWTHk%2B24JEbdCc2zFkFpT52tzpELQJEJJcDhWLQH4YFn37fC0cbXBd1TWuqjEXi95bfYczLQ45Glf34R8M1Yhf9pVh7cnvplrg%2FXaV9jHXlcGSEh2XoDlrsjpZtlUSZauIXfLYVnYS2K%2BSlVJw1f3v5iEgA2r%2FUvZ34YC1b3NZuhNNuwe4uPAmtS7dV0Kbtxor%2BbNDLnTQ24jXDD5n%2FPEBjqkAUX3X6KM774zs4MvkAFbfPBviYAA8kswLSUXW0NSODjDE4Fjo502eft%2F3SlVwmRMSQn5Zk1up7HDJb4WYaec%2FsVqsHdlIhF4MKSIA2uZWIs7AAVkgXf42DGa9sihEQq27s%2BtGSCNCyMcQtLxkWP%2Bw93RDyjaf7BCOQB4hn1enMECPyzTQL7mKUD%2B0lZXko0kajW%2FSHPjQVxn%2BJWWaS6H%2BnELMGq5&X-Amz-Signature=b0221221faa47a4f99c89c9ce2f9a31f72699be2bff6ec62e9d7b80c61c5e5e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSIXRRYY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN%2Bb2vO1KfffEdBasCPy48oQaoATKCXLqZ1vhbe4YMBAIhANxed%2BW8x5I4Mwg7GcN9FbtioIIfTVR%2BAPiRbjF34pnyKv8DCDMQABoMNjM3NDIzMTgzODA1IgzfinwIhOdji9VjxeMq3ANpBRjTWxCktkw3zquEkPCyvrgAgwIbQJYWDhrSmz8%2BjVYbiZ11YGqCj%2FQVTe6V%2FXYcmbMDvw5QWmmQxs9h5p6p1Yim9iQ0ODkYog7s1uiiMFVXnKmi1Ml8AMaNkEdzKPJfhlreHmI7H1NHduBRYu%2Fso5Nyvzd2qb65ChcGjFDlGQ%2BzI4QdbXGXKMVTbkB3j%2BE2e4I658pMYiafzhxAAnzIJS5Q9z8z%2BbMAmKCrFCdfXuusx6jRhcJvkUQzO9qmtwoY%2BycCtZBsULHlpE4DB5U6Mj9f%2BzSSO2CNImwR4iqHEUuO7HQdEHraMgVXo%2B8NdepCMBnnzg8x%2BP6Ab3bpBTmBPTbbeUtFtrXSxlp0OXGsRxdmgv%2F1h2YwEJojQ6s9WYyvhjHkxa6gU1HRfUNSDkLxfJKNaHOLhCPEe%2BksoW5rD7J%2B5Vu%2FdUp%2BmnGnWsKq40ns5WY5NemH5xPxR2T27M6bL2xot8Tw45zRtyuNA2a%2FsvhjsbXg%2FaKw6MuokzYKjMuohdWuw1noTJCLvI5SIkxmY2gZTUE9essVJIceMfgOtof67K%2BMNoIzCjT1JmaI3QI3jjoBe7E7OTbq5nJU%2F5E3ClOwTAbki0exwdMxDVs%2F%2FNplw0zsuTfxkCfY0zDfoPPEBjqkAZpCF74m25Z014sdSUp5jzbZApj0YYFxy34BAEXJdbuYgQcMUriLvkgVEHt2yUo%2Bi265rmppdmclJIBMw%2BGlxcbkbIHr2Y4XG2Kgbv3s6zolp0qNA22c9aPDI64%2FDyA09SFBapcsAgp8qp8D1PO2%2Fd8XcItSS%2FVT4UQzek1PR2HgsqFFurIBPSI%2F6dKWpMJl30wjkoboSz1MZ5t4WBRb457nuqHk&X-Amz-Signature=d05332773a43abb14d433502713bd14f370c067dd191c07adc9faf1d6998cfb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R52SFHN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0dcvVo%2BPfB9zluhikgDlBCDGZO%2FjYgLuH1i7dYTqcUAIhAPxZFlubVz9h%2FzburkzaepYkO6%2FMC%2Fd45cFAosIeycb7Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyicPzyny2C%2F%2F9OwDcq3AMUuu3pzhOXB%2FbjaMnNjHhSlrHjoBNvJWZBxKfTETlbTGnnd0odJVcCg9%2FHqu0gZm%2B0M2%2Bi0SJntuTj4j2YtQwytpqGJk14kfTjXBKO1UH8Zzt1kD5Txl%2Fq2d7kPYPYjwUBEOsrExId9NBuhOwws9rCL4xrAF1NEITzIblZVldFX%2Fx0hxd4awcXEKhn%2BOG15yCD5cbAymkL346%2BvD8X4HIxZPZU5TcXlE4Xj4xxv8iz74Z7uiOwmidhD1qP83Hd1AI4ymZ9IIBCLHHJgxdVwo8SiMZUCk3yGih8xb5VKMIo6tdtNoOh6ihbvLATSgsDEVAl38%2BQfeB5%2BFkbIDFoHP%2FtDswEM56EQ2sv82dbzuCYc93ZmbuXMdU4aih5hyCksBHmKTiKsKHRbqj3xIgFy79q2WoA07oiv313QlHP0XlfGruGWTHk%2B24JEbdCc2zFkFpT52tzpELQJEJJcDhWLQH4YFn37fC0cbXBd1TWuqjEXi95bfYczLQ45Glf34R8M1Yhf9pVh7cnvplrg%2FXaV9jHXlcGSEh2XoDlrsjpZtlUSZauIXfLYVnYS2K%2BSlVJw1f3v5iEgA2r%2FUvZ34YC1b3NZuhNNuwe4uPAmtS7dV0Kbtxor%2BbNDLnTQ24jXDD5n%2FPEBjqkAUX3X6KM774zs4MvkAFbfPBviYAA8kswLSUXW0NSODjDE4Fjo502eft%2F3SlVwmRMSQn5Zk1up7HDJb4WYaec%2FsVqsHdlIhF4MKSIA2uZWIs7AAVkgXf42DGa9sihEQq27s%2BtGSCNCyMcQtLxkWP%2Bw93RDyjaf7BCOQB4hn1enMECPyzTQL7mKUD%2B0lZXko0kajW%2FSHPjQVxn%2BJWWaS6H%2BnELMGq5&X-Amz-Signature=87d2f79bcb1cc28b2c9ff31e388076d586bafb8b90a6d653fa56d5988b674b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEPKERZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHODOSXB7LRRgGI7qTTZeu0OkDoPomOEZpzVXOhbBdaqAiA87P5yY863xKXvRTOmwLvhJmwjCOtrHm7R4m%2B7Uqs3jSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMIOUggST05S1hsMeDKtwD%2BrbfoZTl488ZcouO8ZlS%2BsAoQQ4nqh3TKbhYEAmiLu4%2FAXVpMmDLW52pYefskzUm61QL%2B1lEe%2BbPU0uWkj%2BZDVkHP%2BItss64qJd1h0uxehc0qHAsUHCTDAXPtHL2I%2BKMNecbUqDaDCGl%2Bl4hZ%2Fqh%2BVhst8PPfKiOlUxnmy9qktohc2TdFuSHaFwgURMCXZvHwLHKK3%2B3scyKw9L7S%2BMHr9cTSZs6RRaaqEYvMA8%2FlBmQ2gvI3GNRztZiMNKwUxUc3Gf80FQtcmh0aFi1RC0H9UxGFpeq0o5JJUOc4WuMy8ActS%2FKtPvfOf5mdNjG3%2FKGHjiHjneUJAkQPqPgiLAJ0TNCMNmqDFMhqfr6ZSWrIJoMmhsuxx2P2xxWRha9226%2FvMbrR7uCpvAmqWKh3rQsi7okTtfJwVdxS1KoSyTi9%2FYks65fElLiZgKBB34VnifkpAuRrtd%2FZnijFrSny00YGFfTyPBUwISpjaQQcDLGGBEuaEZKB8dwNifMfVU2z1QnIoIvIrhAaD%2BVmzGL9W6HZQ65lYzNbOctSr9drx6CmLJzuNX3HkqKkzQCrqgLfjmSQcfNzzOWwvwQWKVi6kzxcgZRDxjC5YY3Ezr9hgQM6pvzubzFm9EYCi2IKzAw25%2FzxAY6pgHOJugmgGtb3RLbhW6ykzpfh6aEcs1L5XzGQm0lngBZ6s4Di7bKgZZcalH%2B%2BosWNx0WPK6c%2Blkt3SDXimb13Vjx3fslyfpYvgltJpnwwxTmqeSuEw976Iae3Ny97pf7oROH3Lh2KBZOG%2Fu44ipfITMGOWTx%2FzoENDVprZ8h%2FjtRHTT1pAkA4Ac5TpmkvASHF4exP4q%2BjPw9w2Xgo4%2FZWa8XAuZ19wyU&X-Amz-Signature=ab1745e46ec33ff582b814b89ff7e5d28d23cd2a70afdd6ea3216083a1ab6221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R52SFHN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0dcvVo%2BPfB9zluhikgDlBCDGZO%2FjYgLuH1i7dYTqcUAIhAPxZFlubVz9h%2FzburkzaepYkO6%2FMC%2Fd45cFAosIeycb7Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyicPzyny2C%2F%2F9OwDcq3AMUuu3pzhOXB%2FbjaMnNjHhSlrHjoBNvJWZBxKfTETlbTGnnd0odJVcCg9%2FHqu0gZm%2B0M2%2Bi0SJntuTj4j2YtQwytpqGJk14kfTjXBKO1UH8Zzt1kD5Txl%2Fq2d7kPYPYjwUBEOsrExId9NBuhOwws9rCL4xrAF1NEITzIblZVldFX%2Fx0hxd4awcXEKhn%2BOG15yCD5cbAymkL346%2BvD8X4HIxZPZU5TcXlE4Xj4xxv8iz74Z7uiOwmidhD1qP83Hd1AI4ymZ9IIBCLHHJgxdVwo8SiMZUCk3yGih8xb5VKMIo6tdtNoOh6ihbvLATSgsDEVAl38%2BQfeB5%2BFkbIDFoHP%2FtDswEM56EQ2sv82dbzuCYc93ZmbuXMdU4aih5hyCksBHmKTiKsKHRbqj3xIgFy79q2WoA07oiv313QlHP0XlfGruGWTHk%2B24JEbdCc2zFkFpT52tzpELQJEJJcDhWLQH4YFn37fC0cbXBd1TWuqjEXi95bfYczLQ45Glf34R8M1Yhf9pVh7cnvplrg%2FXaV9jHXlcGSEh2XoDlrsjpZtlUSZauIXfLYVnYS2K%2BSlVJw1f3v5iEgA2r%2FUvZ34YC1b3NZuhNNuwe4uPAmtS7dV0Kbtxor%2BbNDLnTQ24jXDD5n%2FPEBjqkAUX3X6KM774zs4MvkAFbfPBviYAA8kswLSUXW0NSODjDE4Fjo502eft%2F3SlVwmRMSQn5Zk1up7HDJb4WYaec%2FsVqsHdlIhF4MKSIA2uZWIs7AAVkgXf42DGa9sihEQq27s%2BtGSCNCyMcQtLxkWP%2Bw93RDyjaf7BCOQB4hn1enMECPyzTQL7mKUD%2B0lZXko0kajW%2FSHPjQVxn%2BJWWaS6H%2BnELMGq5&X-Amz-Signature=1d4d75ff623d5098399f3938e2d092b80ed065aa56594a80febaab106493db94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFG7SG6D%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLdBpgSNnIjIrKU%2BvAL4OH44q%2B%2B4dg%2FlOKG2TMOGJdzAIhANLrsxCfgKnZFLKpIHLJGzAPuQelAhWvXBEt%2FyetSG7uKv8DCDMQABoMNjM3NDIzMTgzODA1Igz3jDJEIGBTP1VetDIq3APPpX1nPz5UQ3qlMReFtIoW%2FAmxY7RbZbOClGjtbIQm%2BNhDXZpYHffaocQ2hgvRerCJYUm7GNUAMhL4RZIOG5s1YdMukV3m%2FchXm44%2Fd85EojhuhencD1Br7Tg2z96DCm4W6f1WEw%2Frxywr6ZGxJot%2FDVkPpkxju3TyLdgc06eVn92vpJaRjBWoRWP3IyQ4zIgd1zhlwMKJ%2FHzifDpKqHeMrB%2Bm4pIb1lvUtIZhRseTvPtQV6geRBSWRfeBil5OjKpiwbihkS2PIRrTgeayjLEtsXKfspibPOgm4WYCWwdcbPpan%2BgWKPDKjpASAmldYtobmetHwWlX7TUhfKWUFgX9LsVOq43MeDWySSodWySBLJdlGAPBbjOp8iZcm3upPJWPziRupjb6D6YXSvu7SON7gppSj0I6IwfkLKHOkjFJZ%2BLUgvMRwIvqeglPa98tPPzY0NJUUCvpUv88tRWJp1RurOsF4In0Ncc4rXv6hiwxe45OUzcfS5bh34bZVBIL8Hzm3sVxX7WR7ksnOy71ff%2F7LyYFumnZ%2B2HsQqppm9sAMc%2Fv3M%2Bwt7Flqx6hwDPiQaNoHED%2BQJCkUpWKDTsut6ev2eoLOjydoZ%2B9B0AMiZ7wj5SRGeujSedtgQFQETDZoPPEBjqkAddN3r%2B7dxJZVQOQIsMTRIyjKjtEvsWr%2FDEQkoj2tV%2Bf%2FfzxmwV16pAr%2BSIafzACpgXZQBgcXavNScyly0ZLtWIdGE4Xmu55z%2FxYx0%2FzXh%2Fe8LZ%2FAsSaprKhO2wAcpg13drO9VHxXCtwvG0qA%2B4%2B3Xe2ryQ3F7Yd%2F6b9JzrbgltFyA4QLMv6CVoFqr3e2zIOcAvu7UjTxCpniE8Iz7ryKvb9tzgv&X-Amz-Signature=90122db809d9cbdca78dfb8fd17a5ae72c4e6bb994ce88d8bcf3d727ab88166f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQY5HFLF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6etF0%2BtSWL%2BvNkQ9Zu9hEIfWOPBEVwPQxwSCqbJ%2FOcQIhAKEjnwCH33J95T%2FcGgtTUo1WXwLq6XvZvomHqEKzgAQ9Kv8DCDMQABoMNjM3NDIzMTgzODA1Igzt2LRIsgiVzqKW9%2BMq3APj5bK4K1axYQp9M50P6Lhp2%2Fks5JXVx5mOIcu%2FpTtFWiBAsDhQE6Gzd2c6bM%2FxeWF1ENTsbGAfayTk%2B%2FxfvK1iAW%2BPUBAmCPsEj%2FIGbMYIQbe2%2BSLwfLQZBDJrVwWFOIM2fuBHbgvO5ddLGdHXaxVBr3rcD3uGMf1erf6DMikIoDu1E%2BYl7YHlA%2BsDb4SKsMsqi%2Fi0pmxod8lL0%2BJOlVBfU2ZAG0OfXw%2F6KiwO6b950thknqUxX%2FRi6dRiHSJJyzO1oSmgihDBHko5zT1UskGQxSiVVddsSlDp8nVO%2FE1hTs%2BTuXg%2FBgKn78gV3p161BvLNrAJhkJ4g3lni6%2FCVuXTgrKDJGijXG%2B5Wa8Zr0%2BUYddLsxTzjA6hXdr%2BV32%2Baoud3J1XBV1qyC9PSKJUPiegGVoasSdOcw99YQt5%2FLpmDBDuW4z%2Bcu1jaXTNe3If8Ug8UeY0EoTjxNDp8jI0McYuKFzC%2FG%2BYIBR1BGqIQodwM10cj5gPEAytk8Jnj3Q1b7hYNcSuBgOqCI2pNbavsO8x55staHetjUrNAuT1wxBCOun1IHg8fry1dSYVZ6NzNwfIlVAX0Azpzp5nuJYaV2d29VNNfOXFnn11CyX7ijO6zvd8nyUVYVm6YDt91DCEoPPEBjqkAQV%2FV3Railmmnp4rXkqj6%2FVaRnkpvPBn4lGmkMD%2BrLDLn4XhP3RzzxwY%2BZxiKoUdUO9Kqt8p1FL9uffSKcHtZbjINByL4M3O5cyhZ0wsAogQEtdSJrD91VhUJ7xf2hTAZeO2mRDZdRX%2FTsYLmYoyKRC5jSo%2BxX7kGXHApVgy5TI6KM%2B4LBAErhtqhxd2Qid%2B%2BUdRO%2FttHoClIEhRi1OwReDhrfbK&X-Amz-Signature=a96a20b7e0ad291b996544adde269c565bc1418ae1ca1fadbba20fbc1f752018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKCIFGVC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAA9l82LQkGviBPpNvOx%2FurgWb3Hdp9iZJ%2B95R54BmUAIhAPqBvEniWT6%2FKh18pbTjjTYaM7Ye%2Fg2OVswMEkol1hjmKv8DCDMQABoMNjM3NDIzMTgzODA1IgwMd9V%2FohjanJyw2HYq3AP1ccM7OB%2BdDvdvMQwnUoKDESuhlcOuIbOJk2jIeZh4%2BCiE29iBrBGakT0p3ppqQNQc3qoep6Y9MLvbY8liPKETEYqyg4i2nB0PDa1V7FvOD8kuqI5dcHN1ALKevWD3zd%2Fsvp1bj5yk%2Ff0Ad8rzlSA%2BxBZwUMsqfyGbxZjbHfIEgQlsdQar3c7Is8fRKfp5iKLNU0Hp9yvL2btpz%2FHnwzYsaj8cdczBkc621wzq7v7Cxnu0%2FHtQOh%2BEFHeWVFwIf%2FjSFsuI6O8ga731UgvIPvjd7ERpvem6GTHigjEk4aQKvZXvAOLOS%2Bs5k7ut0%2BMNxfnGQhpGR1bJ2WzgEcC1kgRrph0qn0D6CO5Bl3e5y01IfYNTd2hsVPYSlbgeX0lIaJ1B%2FJ1e3InrQk%2BMIGrFI%2F1SpuRvbZyTk4XWH4A5tk4%2Fqq9F600Te4BqD4bm%2F%2BdcWW2z3iNg3EzZc1HLesnxuX6Ji96b9HsJp2zNGuhU7GbF%2BsMRzAZ2b8zabb4rQ8qM0n%2F%2B5UaHeH4%2Bcn9AFMPVHJ6OhMFaL0jG4mg3RKof5bdcG1JySV0GChrvk6aa%2BBHdCwkcLIV%2BW0dTtcT8tFz3ORIV34%2FxmXWb9OUtyKtRzX8uBnw1Cn9SCUD1WcDFuzDNn%2FPEBjqkAVkToEf%2FOnRRUtendRGGRC05p88LKb4CFpd5Rlx0tKaGNmkaR%2BuhW9zoRWjf3Q22U62ilHNX4wZM9gx5gaT5KdF6e1%2FxNO9I%2FtccM7HvSzDSND21QyEhI4YtFlhwIUBpAjK9Ci9JvqSrXk5A3F6QJs7avJwgmuT7WVk%2By5pYUI7Wml79zDyEGqVk%2F%2B4hb6hG%2FZC%2FZPiONwhIokEGHjPiOHsYLVO2&X-Amz-Signature=4ccb6e4b3bb81d31af420d0a90d88832605ba8620ae501dfb741182983ff68fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCVA5XG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCia2a%2BrwAYnHkEoqgpKY8aq%2BKPZfXy%2BXR%2BJguX%2FqeYjAIhAKtxYKKTbSYA1jgHU8PRpDHi9cQDRpf1hHNhuzR7c2JlKv8DCDMQABoMNjM3NDIzMTgzODA1Igzi7c18WTaq3de6yLAq3AOOvNdFCmwjzOaAanSRhR7%2BeqDrES%2BIzaTkvJbHoa8S0%2B1SPvWXCZIxjQuU6h2mOVL9S1Q2PRk0AZUVGv%2FOXLkfWpAnE%2B2PT%2FUzsMAe%2F7ho%2BzfP0rvNx66V%2FDXT2p7AF98fe3RjQfcAzAjp0xNztpfZXp4XGFIyytKgDGMENwv4dmdcsxFYXxAgnUy%2BKcj0O0MxtzY6vq05ySVbDH6KnAx9OsNJThLSsMWFm9dE6GDiGLhCo%2B9p2AgFQHvchqLq0WIKd9yjolUwOxOnsvdaeGYdVwoLPGgeJtzP2Xi2YRwGtnkwgJw04SGVNzZ793kSqUVbzSLi2OyxCF2jsVRThpfIKvhA0yq1zDLllsAvsN3GaBCN5TA0wM5CRel8dcu%2FSvcZ1LDe5A1yoE4LyUol3swJZniKjzyLURTSCqHtMo7RR9fPZgf8Nok0E4E0FxO2cpW%2FyUlmbM357F5UF%2F%2F6BF08FPtV2pVDon%2BvoxaSmxpN3PK6wolmT2kT2i8hDuAfeyAHmnVigjIiNSe0ROli0TfIGFtUEm1HX09qVy89zeqGuqxvvcfjSbWwE6rRlPRASsGWqB%2B2A2yiCYkg631JhQ10yeUxNppVmUQg6%2BxGQekSYyM1nkfttlD7oYbKbzCQoPPEBjqkAeZAJCD9naMftGibq9UzK7WUz2BJrEqcssYVp4%2FPgosmPu1khqqgqM3KAMSi644k3Hw9VfDW0WbF3P4THdujNrfv4wipbgqzEfNRdOOwYvDz%2BCds02FtHAsa3HMp6REkPVO3LEWK7Pv7C4E4dDVnBgaK1Sg9fcqPgjK5FI0GFhkVjbThame9HUjJ8cv7kNqB6MSG93CEJEJkffu1hn1NNXIaM%2Fhv&X-Amz-Signature=20f6a0b5efd22167245dce5fc0adbf89ce90d7cb1e8fb29844391d4adb94a526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJEEPQJK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B2K1Bpzt7CH2LTENelWcqGVb8dTJG8%2F4DzyGlpRvfnwIhAMhIfAqgXbFelh9ovjeMLTGVI%2Faj3BqvRqzYUWp6eDa6Kv8DCDMQABoMNjM3NDIzMTgzODA1Igxd5CiCFMAp9UvOkDYq3AMwye1gNQsbFemzOa6Iuv4kffUdRjxZxsAc3K0cCY1VnoSxcAXqvxDBKYJrcckOxZlVnPgF0PLClyrnFW%2B%2FavYi7bWmRp%2FRylifSeyZE4CpDRdLmMHgwQ%2F7aIk1jnZoP3RiXdpl4%2BKZiFz5sK4jUAzfelXGS8YKXbqfVeDzojUFGUcB8OMuzEwh5cueqyjPEEJwmkcqvJA0qNbtow43d1EnvW%2Fy%2FPZqKfyw86dcL%2Bx7juQR%2F%2Fl1Rg01bhkRc5eFnZj0dSdXkImBGWrNVUzgcgiSVreg1uTuUBI%2FvbaRjiGyHf13gLI5b5GUoIXbljDFlEEPzp1jR%2Bsotef17bBZ6J%2F99YGzcIPd09gmh1PD%2F90Sekz5dfKVpYV9zqBS3OWVI9o3%2FmOnutkq1Udlf4%2BGvhcaV1LjzbAmn%2Fjinbl2xbEpwKPpHQnAeznrCE9lMy%2FG4IBajvWK2jBQrkPk5rPOstljdKIP6FOGcUKRfJvU%2FD7p4r2pIq5GM4PJVgEGYV1sCBt5bPzXOLydQytBoGsS5%2BdZ11x16g2bSCmWje6Oc05h1yOxJ%2B6zAZA33%2F6paRyf%2Fl15HEpfn%2FQKnNQWyH%2F9TWQAbEdWnRZCYev8WtOiwpMOVru%2BsF0ryT8cr6769jDNoPPEBjqkAfL3UKJyPg7B29xvxHKuE125NqgNLBPiu%2F%2BwFQ6gEnYK70OYmMEX980wPMgHruxGh1qr5JODgYKhe%2BkupsRBRrEA4IzUAYYoQJV6Oml07eb9ApWutfJbzVZBBmslx7GWfUeyOQ5MKBHilPlExxhfHEJ%2FATq6PpoZ%2FSMxwAhXl%2BTAR14NwNbyNyl1LkYb6jpNH9TgoPx29VVEnx6kNvBrBgA5dqix&X-Amz-Signature=66c96f13c1caa2b65d8b1e2b0f76f9ed6ccdcd6c8226e4387e31d8b90f9530a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R52SFHN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0dcvVo%2BPfB9zluhikgDlBCDGZO%2FjYgLuH1i7dYTqcUAIhAPxZFlubVz9h%2FzburkzaepYkO6%2FMC%2Fd45cFAosIeycb7Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyicPzyny2C%2F%2F9OwDcq3AMUuu3pzhOXB%2FbjaMnNjHhSlrHjoBNvJWZBxKfTETlbTGnnd0odJVcCg9%2FHqu0gZm%2B0M2%2Bi0SJntuTj4j2YtQwytpqGJk14kfTjXBKO1UH8Zzt1kD5Txl%2Fq2d7kPYPYjwUBEOsrExId9NBuhOwws9rCL4xrAF1NEITzIblZVldFX%2Fx0hxd4awcXEKhn%2BOG15yCD5cbAymkL346%2BvD8X4HIxZPZU5TcXlE4Xj4xxv8iz74Z7uiOwmidhD1qP83Hd1AI4ymZ9IIBCLHHJgxdVwo8SiMZUCk3yGih8xb5VKMIo6tdtNoOh6ihbvLATSgsDEVAl38%2BQfeB5%2BFkbIDFoHP%2FtDswEM56EQ2sv82dbzuCYc93ZmbuXMdU4aih5hyCksBHmKTiKsKHRbqj3xIgFy79q2WoA07oiv313QlHP0XlfGruGWTHk%2B24JEbdCc2zFkFpT52tzpELQJEJJcDhWLQH4YFn37fC0cbXBd1TWuqjEXi95bfYczLQ45Glf34R8M1Yhf9pVh7cnvplrg%2FXaV9jHXlcGSEh2XoDlrsjpZtlUSZauIXfLYVnYS2K%2BSlVJw1f3v5iEgA2r%2FUvZ34YC1b3NZuhNNuwe4uPAmtS7dV0Kbtxor%2BbNDLnTQ24jXDD5n%2FPEBjqkAUX3X6KM774zs4MvkAFbfPBviYAA8kswLSUXW0NSODjDE4Fjo502eft%2F3SlVwmRMSQn5Zk1up7HDJb4WYaec%2FsVqsHdlIhF4MKSIA2uZWIs7AAVkgXf42DGa9sihEQq27s%2BtGSCNCyMcQtLxkWP%2Bw93RDyjaf7BCOQB4hn1enMECPyzTQL7mKUD%2B0lZXko0kajW%2FSHPjQVxn%2BJWWaS6H%2BnELMGq5&X-Amz-Signature=33c17e0047129cf39d9c4b8ac0999fcca7d5702a415b5e06794e833747d3ef07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R52SFHN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0dcvVo%2BPfB9zluhikgDlBCDGZO%2FjYgLuH1i7dYTqcUAIhAPxZFlubVz9h%2FzburkzaepYkO6%2FMC%2Fd45cFAosIeycb7Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyicPzyny2C%2F%2F9OwDcq3AMUuu3pzhOXB%2FbjaMnNjHhSlrHjoBNvJWZBxKfTETlbTGnnd0odJVcCg9%2FHqu0gZm%2B0M2%2Bi0SJntuTj4j2YtQwytpqGJk14kfTjXBKO1UH8Zzt1kD5Txl%2Fq2d7kPYPYjwUBEOsrExId9NBuhOwws9rCL4xrAF1NEITzIblZVldFX%2Fx0hxd4awcXEKhn%2BOG15yCD5cbAymkL346%2BvD8X4HIxZPZU5TcXlE4Xj4xxv8iz74Z7uiOwmidhD1qP83Hd1AI4ymZ9IIBCLHHJgxdVwo8SiMZUCk3yGih8xb5VKMIo6tdtNoOh6ihbvLATSgsDEVAl38%2BQfeB5%2BFkbIDFoHP%2FtDswEM56EQ2sv82dbzuCYc93ZmbuXMdU4aih5hyCksBHmKTiKsKHRbqj3xIgFy79q2WoA07oiv313QlHP0XlfGruGWTHk%2B24JEbdCc2zFkFpT52tzpELQJEJJcDhWLQH4YFn37fC0cbXBd1TWuqjEXi95bfYczLQ45Glf34R8M1Yhf9pVh7cnvplrg%2FXaV9jHXlcGSEh2XoDlrsjpZtlUSZauIXfLYVnYS2K%2BSlVJw1f3v5iEgA2r%2FUvZ34YC1b3NZuhNNuwe4uPAmtS7dV0Kbtxor%2BbNDLnTQ24jXDD5n%2FPEBjqkAUX3X6KM774zs4MvkAFbfPBviYAA8kswLSUXW0NSODjDE4Fjo502eft%2F3SlVwmRMSQn5Zk1up7HDJb4WYaec%2FsVqsHdlIhF4MKSIA2uZWIs7AAVkgXf42DGa9sihEQq27s%2BtGSCNCyMcQtLxkWP%2Bw93RDyjaf7BCOQB4hn1enMECPyzTQL7mKUD%2B0lZXko0kajW%2FSHPjQVxn%2BJWWaS6H%2BnELMGq5&X-Amz-Signature=002ba00d11b28b492849637d891d61ddddc2a08fe99488bc748ac15c0da8e067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWBHRSSB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvPNIHSi4eme16grcPI1XpLVp9Dp884gexfubtuGcnOAiA70E3HukZw34i25GygMuV6xFjaZns1yLq0HYsw5drZvyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM49A8g9%2BeChsAkRGkKtwDoJVhgH%2FyQjNDdotLg6zlm5rm1jxJPujUIYUO6HzTfhhCDc%2Bc2d4%2Bu8ZVmRX%2BtLfb6o1HBeW3NB7MAsCzjyUjRQ%2BGTzNGKuFxGnJv8LPyKKnB2Z7v1LrLYB%2Bk8BgVGCZ51B60IYWCSU%2BPip6njShx06ggPALN0%2F%2FnS902DUN0JNXcRXgXXiy55zVU%2BcFAEth4DwX4CTEJpOIAApkg1j5%2FKzs6D0Ga4o0gqxrcuy%2Fa17q8khoKjzJeM5MZt84Ydeil7o9V5GD3KcLvu25LrsCGBlw%2B2%2F5%2BwvkmmX4eGgW%2BvlElNp0Sw7f0msYpjeIQM0I06UK8zCa90pkflbjEIMYkd4FvpeCkfTvei6ejc1g%2FYEjdb5TUCTZrRaLffvTt04Lsob%2Fr4OkyhaUeo4QcuJOgBIoGsTWryQKvwOCg1mNX%2FgnZcXIU7%2FAMSagkdtUWnZ6V%2FP4WYSIzJ4hFCTq%2FoP7Pj8rqnp8Hy%2BP8P2yCH3q3DeovzEe15indKsdN3yKKvMxQOAL4CCJzgHrRXINu0ocMkFAA8GTGdujOjOIfu2Q7P0%2FQLdNIu5j1CGP72Z6B6Pigx%2BclkLmLzYTpy5BTIvWIuzcn3GqF5XVK5NFfLrHyyNqeMZZ6xU%2BCJo3O%2BAUwwKDzxAY6pgE5LMu2G54NEBG0sKgkEQEhXV1K%2BME8xsRNEXkx%2BBAE7O3NYNO3qqgfnU4v%2B7kinNrYZIwR4sWezG4rVHLNPGeyK9sayxS3zmHCqohwCW%2BJpSfc1e0pEQOyet2yqpXXtdP3K%2Bb8evdyE7LG0xi1v97innwqZ8v7qVqairTcr%2F0yB85JAMkn9WLRKkRNGP4%2FwLoD%2Bl21RBpCRatsqy92z2%2FSV0QwkRqy&X-Amz-Signature=df837b93fa57c28bd1ae34eae3d8b9a69b420316757587f3f2888389f7236764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWBHRSSB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvPNIHSi4eme16grcPI1XpLVp9Dp884gexfubtuGcnOAiA70E3HukZw34i25GygMuV6xFjaZns1yLq0HYsw5drZvyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM49A8g9%2BeChsAkRGkKtwDoJVhgH%2FyQjNDdotLg6zlm5rm1jxJPujUIYUO6HzTfhhCDc%2Bc2d4%2Bu8ZVmRX%2BtLfb6o1HBeW3NB7MAsCzjyUjRQ%2BGTzNGKuFxGnJv8LPyKKnB2Z7v1LrLYB%2Bk8BgVGCZ51B60IYWCSU%2BPip6njShx06ggPALN0%2F%2FnS902DUN0JNXcRXgXXiy55zVU%2BcFAEth4DwX4CTEJpOIAApkg1j5%2FKzs6D0Ga4o0gqxrcuy%2Fa17q8khoKjzJeM5MZt84Ydeil7o9V5GD3KcLvu25LrsCGBlw%2B2%2F5%2BwvkmmX4eGgW%2BvlElNp0Sw7f0msYpjeIQM0I06UK8zCa90pkflbjEIMYkd4FvpeCkfTvei6ejc1g%2FYEjdb5TUCTZrRaLffvTt04Lsob%2Fr4OkyhaUeo4QcuJOgBIoGsTWryQKvwOCg1mNX%2FgnZcXIU7%2FAMSagkdtUWnZ6V%2FP4WYSIzJ4hFCTq%2FoP7Pj8rqnp8Hy%2BP8P2yCH3q3DeovzEe15indKsdN3yKKvMxQOAL4CCJzgHrRXINu0ocMkFAA8GTGdujOjOIfu2Q7P0%2FQLdNIu5j1CGP72Z6B6Pigx%2BclkLmLzYTpy5BTIvWIuzcn3GqF5XVK5NFfLrHyyNqeMZZ6xU%2BCJo3O%2BAUwwKDzxAY6pgE5LMu2G54NEBG0sKgkEQEhXV1K%2BME8xsRNEXkx%2BBAE7O3NYNO3qqgfnU4v%2B7kinNrYZIwR4sWezG4rVHLNPGeyK9sayxS3zmHCqohwCW%2BJpSfc1e0pEQOyet2yqpXXtdP3K%2Bb8evdyE7LG0xi1v97innwqZ8v7qVqairTcr%2F0yB85JAMkn9WLRKkRNGP4%2FwLoD%2Bl21RBpCRatsqy92z2%2FSV0QwkRqy&X-Amz-Signature=03b7e04dd677366716ca1db9a80323bc8498d73ba1c2685753cc0d07fa40a629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWBHRSSB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvPNIHSi4eme16grcPI1XpLVp9Dp884gexfubtuGcnOAiA70E3HukZw34i25GygMuV6xFjaZns1yLq0HYsw5drZvyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM49A8g9%2BeChsAkRGkKtwDoJVhgH%2FyQjNDdotLg6zlm5rm1jxJPujUIYUO6HzTfhhCDc%2Bc2d4%2Bu8ZVmRX%2BtLfb6o1HBeW3NB7MAsCzjyUjRQ%2BGTzNGKuFxGnJv8LPyKKnB2Z7v1LrLYB%2Bk8BgVGCZ51B60IYWCSU%2BPip6njShx06ggPALN0%2F%2FnS902DUN0JNXcRXgXXiy55zVU%2BcFAEth4DwX4CTEJpOIAApkg1j5%2FKzs6D0Ga4o0gqxrcuy%2Fa17q8khoKjzJeM5MZt84Ydeil7o9V5GD3KcLvu25LrsCGBlw%2B2%2F5%2BwvkmmX4eGgW%2BvlElNp0Sw7f0msYpjeIQM0I06UK8zCa90pkflbjEIMYkd4FvpeCkfTvei6ejc1g%2FYEjdb5TUCTZrRaLffvTt04Lsob%2Fr4OkyhaUeo4QcuJOgBIoGsTWryQKvwOCg1mNX%2FgnZcXIU7%2FAMSagkdtUWnZ6V%2FP4WYSIzJ4hFCTq%2FoP7Pj8rqnp8Hy%2BP8P2yCH3q3DeovzEe15indKsdN3yKKvMxQOAL4CCJzgHrRXINu0ocMkFAA8GTGdujOjOIfu2Q7P0%2FQLdNIu5j1CGP72Z6B6Pigx%2BclkLmLzYTpy5BTIvWIuzcn3GqF5XVK5NFfLrHyyNqeMZZ6xU%2BCJo3O%2BAUwwKDzxAY6pgE5LMu2G54NEBG0sKgkEQEhXV1K%2BME8xsRNEXkx%2BBAE7O3NYNO3qqgfnU4v%2B7kinNrYZIwR4sWezG4rVHLNPGeyK9sayxS3zmHCqohwCW%2BJpSfc1e0pEQOyet2yqpXXtdP3K%2Bb8evdyE7LG0xi1v97innwqZ8v7qVqairTcr%2F0yB85JAMkn9WLRKkRNGP4%2FwLoD%2Bl21RBpCRatsqy92z2%2FSV0QwkRqy&X-Amz-Signature=4f1e5510d99faba8ec45c8a8b3d1c516770161f317522e4e7f9aa5c2463b708d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWBHRSSB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvPNIHSi4eme16grcPI1XpLVp9Dp884gexfubtuGcnOAiA70E3HukZw34i25GygMuV6xFjaZns1yLq0HYsw5drZvyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM49A8g9%2BeChsAkRGkKtwDoJVhgH%2FyQjNDdotLg6zlm5rm1jxJPujUIYUO6HzTfhhCDc%2Bc2d4%2Bu8ZVmRX%2BtLfb6o1HBeW3NB7MAsCzjyUjRQ%2BGTzNGKuFxGnJv8LPyKKnB2Z7v1LrLYB%2Bk8BgVGCZ51B60IYWCSU%2BPip6njShx06ggPALN0%2F%2FnS902DUN0JNXcRXgXXiy55zVU%2BcFAEth4DwX4CTEJpOIAApkg1j5%2FKzs6D0Ga4o0gqxrcuy%2Fa17q8khoKjzJeM5MZt84Ydeil7o9V5GD3KcLvu25LrsCGBlw%2B2%2F5%2BwvkmmX4eGgW%2BvlElNp0Sw7f0msYpjeIQM0I06UK8zCa90pkflbjEIMYkd4FvpeCkfTvei6ejc1g%2FYEjdb5TUCTZrRaLffvTt04Lsob%2Fr4OkyhaUeo4QcuJOgBIoGsTWryQKvwOCg1mNX%2FgnZcXIU7%2FAMSagkdtUWnZ6V%2FP4WYSIzJ4hFCTq%2FoP7Pj8rqnp8Hy%2BP8P2yCH3q3DeovzEe15indKsdN3yKKvMxQOAL4CCJzgHrRXINu0ocMkFAA8GTGdujOjOIfu2Q7P0%2FQLdNIu5j1CGP72Z6B6Pigx%2BclkLmLzYTpy5BTIvWIuzcn3GqF5XVK5NFfLrHyyNqeMZZ6xU%2BCJo3O%2BAUwwKDzxAY6pgE5LMu2G54NEBG0sKgkEQEhXV1K%2BME8xsRNEXkx%2BBAE7O3NYNO3qqgfnU4v%2B7kinNrYZIwR4sWezG4rVHLNPGeyK9sayxS3zmHCqohwCW%2BJpSfc1e0pEQOyet2yqpXXtdP3K%2Bb8evdyE7LG0xi1v97innwqZ8v7qVqairTcr%2F0yB85JAMkn9WLRKkRNGP4%2FwLoD%2Bl21RBpCRatsqy92z2%2FSV0QwkRqy&X-Amz-Signature=7e577358f553c12b2902cf24535e274af445b7352708494bd1ef0cd7237b9c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWBHRSSB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvPNIHSi4eme16grcPI1XpLVp9Dp884gexfubtuGcnOAiA70E3HukZw34i25GygMuV6xFjaZns1yLq0HYsw5drZvyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM49A8g9%2BeChsAkRGkKtwDoJVhgH%2FyQjNDdotLg6zlm5rm1jxJPujUIYUO6HzTfhhCDc%2Bc2d4%2Bu8ZVmRX%2BtLfb6o1HBeW3NB7MAsCzjyUjRQ%2BGTzNGKuFxGnJv8LPyKKnB2Z7v1LrLYB%2Bk8BgVGCZ51B60IYWCSU%2BPip6njShx06ggPALN0%2F%2FnS902DUN0JNXcRXgXXiy55zVU%2BcFAEth4DwX4CTEJpOIAApkg1j5%2FKzs6D0Ga4o0gqxrcuy%2Fa17q8khoKjzJeM5MZt84Ydeil7o9V5GD3KcLvu25LrsCGBlw%2B2%2F5%2BwvkmmX4eGgW%2BvlElNp0Sw7f0msYpjeIQM0I06UK8zCa90pkflbjEIMYkd4FvpeCkfTvei6ejc1g%2FYEjdb5TUCTZrRaLffvTt04Lsob%2Fr4OkyhaUeo4QcuJOgBIoGsTWryQKvwOCg1mNX%2FgnZcXIU7%2FAMSagkdtUWnZ6V%2FP4WYSIzJ4hFCTq%2FoP7Pj8rqnp8Hy%2BP8P2yCH3q3DeovzEe15indKsdN3yKKvMxQOAL4CCJzgHrRXINu0ocMkFAA8GTGdujOjOIfu2Q7P0%2FQLdNIu5j1CGP72Z6B6Pigx%2BclkLmLzYTpy5BTIvWIuzcn3GqF5XVK5NFfLrHyyNqeMZZ6xU%2BCJo3O%2BAUwwKDzxAY6pgE5LMu2G54NEBG0sKgkEQEhXV1K%2BME8xsRNEXkx%2BBAE7O3NYNO3qqgfnU4v%2B7kinNrYZIwR4sWezG4rVHLNPGeyK9sayxS3zmHCqohwCW%2BJpSfc1e0pEQOyet2yqpXXtdP3K%2Bb8evdyE7LG0xi1v97innwqZ8v7qVqairTcr%2F0yB85JAMkn9WLRKkRNGP4%2FwLoD%2Bl21RBpCRatsqy92z2%2FSV0QwkRqy&X-Amz-Signature=5397ba095f9ce31dd2840ecf0c2786b146687c976ced366d478f31badd4de36c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWBHRSSB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvPNIHSi4eme16grcPI1XpLVp9Dp884gexfubtuGcnOAiA70E3HukZw34i25GygMuV6xFjaZns1yLq0HYsw5drZvyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM49A8g9%2BeChsAkRGkKtwDoJVhgH%2FyQjNDdotLg6zlm5rm1jxJPujUIYUO6HzTfhhCDc%2Bc2d4%2Bu8ZVmRX%2BtLfb6o1HBeW3NB7MAsCzjyUjRQ%2BGTzNGKuFxGnJv8LPyKKnB2Z7v1LrLYB%2Bk8BgVGCZ51B60IYWCSU%2BPip6njShx06ggPALN0%2F%2FnS902DUN0JNXcRXgXXiy55zVU%2BcFAEth4DwX4CTEJpOIAApkg1j5%2FKzs6D0Ga4o0gqxrcuy%2Fa17q8khoKjzJeM5MZt84Ydeil7o9V5GD3KcLvu25LrsCGBlw%2B2%2F5%2BwvkmmX4eGgW%2BvlElNp0Sw7f0msYpjeIQM0I06UK8zCa90pkflbjEIMYkd4FvpeCkfTvei6ejc1g%2FYEjdb5TUCTZrRaLffvTt04Lsob%2Fr4OkyhaUeo4QcuJOgBIoGsTWryQKvwOCg1mNX%2FgnZcXIU7%2FAMSagkdtUWnZ6V%2FP4WYSIzJ4hFCTq%2FoP7Pj8rqnp8Hy%2BP8P2yCH3q3DeovzEe15indKsdN3yKKvMxQOAL4CCJzgHrRXINu0ocMkFAA8GTGdujOjOIfu2Q7P0%2FQLdNIu5j1CGP72Z6B6Pigx%2BclkLmLzYTpy5BTIvWIuzcn3GqF5XVK5NFfLrHyyNqeMZZ6xU%2BCJo3O%2BAUwwKDzxAY6pgE5LMu2G54NEBG0sKgkEQEhXV1K%2BME8xsRNEXkx%2BBAE7O3NYNO3qqgfnU4v%2B7kinNrYZIwR4sWezG4rVHLNPGeyK9sayxS3zmHCqohwCW%2BJpSfc1e0pEQOyet2yqpXXtdP3K%2Bb8evdyE7LG0xi1v97innwqZ8v7qVqairTcr%2F0yB85JAMkn9WLRKkRNGP4%2FwLoD%2Bl21RBpCRatsqy92z2%2FSV0QwkRqy&X-Amz-Signature=717cca149b28f2b364ae43e6a9b45dbd20bb1045ca39a78ad35065c9c7261262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWBHRSSB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvPNIHSi4eme16grcPI1XpLVp9Dp884gexfubtuGcnOAiA70E3HukZw34i25GygMuV6xFjaZns1yLq0HYsw5drZvyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM49A8g9%2BeChsAkRGkKtwDoJVhgH%2FyQjNDdotLg6zlm5rm1jxJPujUIYUO6HzTfhhCDc%2Bc2d4%2Bu8ZVmRX%2BtLfb6o1HBeW3NB7MAsCzjyUjRQ%2BGTzNGKuFxGnJv8LPyKKnB2Z7v1LrLYB%2Bk8BgVGCZ51B60IYWCSU%2BPip6njShx06ggPALN0%2F%2FnS902DUN0JNXcRXgXXiy55zVU%2BcFAEth4DwX4CTEJpOIAApkg1j5%2FKzs6D0Ga4o0gqxrcuy%2Fa17q8khoKjzJeM5MZt84Ydeil7o9V5GD3KcLvu25LrsCGBlw%2B2%2F5%2BwvkmmX4eGgW%2BvlElNp0Sw7f0msYpjeIQM0I06UK8zCa90pkflbjEIMYkd4FvpeCkfTvei6ejc1g%2FYEjdb5TUCTZrRaLffvTt04Lsob%2Fr4OkyhaUeo4QcuJOgBIoGsTWryQKvwOCg1mNX%2FgnZcXIU7%2FAMSagkdtUWnZ6V%2FP4WYSIzJ4hFCTq%2FoP7Pj8rqnp8Hy%2BP8P2yCH3q3DeovzEe15indKsdN3yKKvMxQOAL4CCJzgHrRXINu0ocMkFAA8GTGdujOjOIfu2Q7P0%2FQLdNIu5j1CGP72Z6B6Pigx%2BclkLmLzYTpy5BTIvWIuzcn3GqF5XVK5NFfLrHyyNqeMZZ6xU%2BCJo3O%2BAUwwKDzxAY6pgE5LMu2G54NEBG0sKgkEQEhXV1K%2BME8xsRNEXkx%2BBAE7O3NYNO3qqgfnU4v%2B7kinNrYZIwR4sWezG4rVHLNPGeyK9sayxS3zmHCqohwCW%2BJpSfc1e0pEQOyet2yqpXXtdP3K%2Bb8evdyE7LG0xi1v97innwqZ8v7qVqairTcr%2F0yB85JAMkn9WLRKkRNGP4%2FwLoD%2Bl21RBpCRatsqy92z2%2FSV0QwkRqy&X-Amz-Signature=4f1e5510d99faba8ec45c8a8b3d1c516770161f317522e4e7f9aa5c2463b708d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWBHRSSB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvPNIHSi4eme16grcPI1XpLVp9Dp884gexfubtuGcnOAiA70E3HukZw34i25GygMuV6xFjaZns1yLq0HYsw5drZvyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM49A8g9%2BeChsAkRGkKtwDoJVhgH%2FyQjNDdotLg6zlm5rm1jxJPujUIYUO6HzTfhhCDc%2Bc2d4%2Bu8ZVmRX%2BtLfb6o1HBeW3NB7MAsCzjyUjRQ%2BGTzNGKuFxGnJv8LPyKKnB2Z7v1LrLYB%2Bk8BgVGCZ51B60IYWCSU%2BPip6njShx06ggPALN0%2F%2FnS902DUN0JNXcRXgXXiy55zVU%2BcFAEth4DwX4CTEJpOIAApkg1j5%2FKzs6D0Ga4o0gqxrcuy%2Fa17q8khoKjzJeM5MZt84Ydeil7o9V5GD3KcLvu25LrsCGBlw%2B2%2F5%2BwvkmmX4eGgW%2BvlElNp0Sw7f0msYpjeIQM0I06UK8zCa90pkflbjEIMYkd4FvpeCkfTvei6ejc1g%2FYEjdb5TUCTZrRaLffvTt04Lsob%2Fr4OkyhaUeo4QcuJOgBIoGsTWryQKvwOCg1mNX%2FgnZcXIU7%2FAMSagkdtUWnZ6V%2FP4WYSIzJ4hFCTq%2FoP7Pj8rqnp8Hy%2BP8P2yCH3q3DeovzEe15indKsdN3yKKvMxQOAL4CCJzgHrRXINu0ocMkFAA8GTGdujOjOIfu2Q7P0%2FQLdNIu5j1CGP72Z6B6Pigx%2BclkLmLzYTpy5BTIvWIuzcn3GqF5XVK5NFfLrHyyNqeMZZ6xU%2BCJo3O%2BAUwwKDzxAY6pgE5LMu2G54NEBG0sKgkEQEhXV1K%2BME8xsRNEXkx%2BBAE7O3NYNO3qqgfnU4v%2B7kinNrYZIwR4sWezG4rVHLNPGeyK9sayxS3zmHCqohwCW%2BJpSfc1e0pEQOyet2yqpXXtdP3K%2Bb8evdyE7LG0xi1v97innwqZ8v7qVqairTcr%2F0yB85JAMkn9WLRKkRNGP4%2FwLoD%2Bl21RBpCRatsqy92z2%2FSV0QwkRqy&X-Amz-Signature=ccf5effc83d32f32df24ea092e5515b47222629e15c9ac0ae23128bc956e0a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWBHRSSB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvPNIHSi4eme16grcPI1XpLVp9Dp884gexfubtuGcnOAiA70E3HukZw34i25GygMuV6xFjaZns1yLq0HYsw5drZvyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM49A8g9%2BeChsAkRGkKtwDoJVhgH%2FyQjNDdotLg6zlm5rm1jxJPujUIYUO6HzTfhhCDc%2Bc2d4%2Bu8ZVmRX%2BtLfb6o1HBeW3NB7MAsCzjyUjRQ%2BGTzNGKuFxGnJv8LPyKKnB2Z7v1LrLYB%2Bk8BgVGCZ51B60IYWCSU%2BPip6njShx06ggPALN0%2F%2FnS902DUN0JNXcRXgXXiy55zVU%2BcFAEth4DwX4CTEJpOIAApkg1j5%2FKzs6D0Ga4o0gqxrcuy%2Fa17q8khoKjzJeM5MZt84Ydeil7o9V5GD3KcLvu25LrsCGBlw%2B2%2F5%2BwvkmmX4eGgW%2BvlElNp0Sw7f0msYpjeIQM0I06UK8zCa90pkflbjEIMYkd4FvpeCkfTvei6ejc1g%2FYEjdb5TUCTZrRaLffvTt04Lsob%2Fr4OkyhaUeo4QcuJOgBIoGsTWryQKvwOCg1mNX%2FgnZcXIU7%2FAMSagkdtUWnZ6V%2FP4WYSIzJ4hFCTq%2FoP7Pj8rqnp8Hy%2BP8P2yCH3q3DeovzEe15indKsdN3yKKvMxQOAL4CCJzgHrRXINu0ocMkFAA8GTGdujOjOIfu2Q7P0%2FQLdNIu5j1CGP72Z6B6Pigx%2BclkLmLzYTpy5BTIvWIuzcn3GqF5XVK5NFfLrHyyNqeMZZ6xU%2BCJo3O%2BAUwwKDzxAY6pgE5LMu2G54NEBG0sKgkEQEhXV1K%2BME8xsRNEXkx%2BBAE7O3NYNO3qqgfnU4v%2B7kinNrYZIwR4sWezG4rVHLNPGeyK9sayxS3zmHCqohwCW%2BJpSfc1e0pEQOyet2yqpXXtdP3K%2Bb8evdyE7LG0xi1v97innwqZ8v7qVqairTcr%2F0yB85JAMkn9WLRKkRNGP4%2FwLoD%2Bl21RBpCRatsqy92z2%2FSV0QwkRqy&X-Amz-Signature=d64d0b79b9b4c1c396a14703fb86ac03df543eb2ffa8cc39d49ee54d53601a5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWBHRSSB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvPNIHSi4eme16grcPI1XpLVp9Dp884gexfubtuGcnOAiA70E3HukZw34i25GygMuV6xFjaZns1yLq0HYsw5drZvyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM49A8g9%2BeChsAkRGkKtwDoJVhgH%2FyQjNDdotLg6zlm5rm1jxJPujUIYUO6HzTfhhCDc%2Bc2d4%2Bu8ZVmRX%2BtLfb6o1HBeW3NB7MAsCzjyUjRQ%2BGTzNGKuFxGnJv8LPyKKnB2Z7v1LrLYB%2Bk8BgVGCZ51B60IYWCSU%2BPip6njShx06ggPALN0%2F%2FnS902DUN0JNXcRXgXXiy55zVU%2BcFAEth4DwX4CTEJpOIAApkg1j5%2FKzs6D0Ga4o0gqxrcuy%2Fa17q8khoKjzJeM5MZt84Ydeil7o9V5GD3KcLvu25LrsCGBlw%2B2%2F5%2BwvkmmX4eGgW%2BvlElNp0Sw7f0msYpjeIQM0I06UK8zCa90pkflbjEIMYkd4FvpeCkfTvei6ejc1g%2FYEjdb5TUCTZrRaLffvTt04Lsob%2Fr4OkyhaUeo4QcuJOgBIoGsTWryQKvwOCg1mNX%2FgnZcXIU7%2FAMSagkdtUWnZ6V%2FP4WYSIzJ4hFCTq%2FoP7Pj8rqnp8Hy%2BP8P2yCH3q3DeovzEe15indKsdN3yKKvMxQOAL4CCJzgHrRXINu0ocMkFAA8GTGdujOjOIfu2Q7P0%2FQLdNIu5j1CGP72Z6B6Pigx%2BclkLmLzYTpy5BTIvWIuzcn3GqF5XVK5NFfLrHyyNqeMZZ6xU%2BCJo3O%2BAUwwKDzxAY6pgE5LMu2G54NEBG0sKgkEQEhXV1K%2BME8xsRNEXkx%2BBAE7O3NYNO3qqgfnU4v%2B7kinNrYZIwR4sWezG4rVHLNPGeyK9sayxS3zmHCqohwCW%2BJpSfc1e0pEQOyet2yqpXXtdP3K%2Bb8evdyE7LG0xi1v97innwqZ8v7qVqairTcr%2F0yB85JAMkn9WLRKkRNGP4%2FwLoD%2Bl21RBpCRatsqy92z2%2FSV0QwkRqy&X-Amz-Signature=6574314de94a8a5cea668487b59f42472a71cff23cbd6049765b8ba73935f39e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
