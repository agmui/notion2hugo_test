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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKK4EVG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQChEqR%2FKxxLNZjgBPE77XQf1%2BlV45uArrqbjRi1VxMaZQIhAM%2FXfbVaa6%2F1smyBtATFn6Y8xAbwf4pKQ2SM9En7ReUeKv8DCD4QABoMNjM3NDIzMTgzODA1IgzqBiER8MwILKOw40Iq3AMpNalRwSdN%2BI38N6BEr5uQAmVGIGKfls%2B%2BrREvD3IjdQ0KKscmTUoE1euMvwHXwHo7bp0EV6b8%2FGtALWtVsvv5gjBtmF2kgalxmOZQHUcE8w9GufrAFEt6Y%2B0zq5JTc%2BgYvHrZfIht9ApFBOnFZLS%2FMhJyReHu4t2Gj72KhpoWjkffN5%2F8hHFjH9k6uss3U1bhcsh0fl%2B7uNCyQGmYemMW3mzPtY%2BjGTx64vg2EwwvJa5BDJu6sOXHlyFk%2FP8isqfN60ye%2BgXq1%2F8d%2FRKsnIsVuiL5YlkVlHm2F4oA2pAkv%2Fo0OEUrLkjd3aJP6yaXybN5KzsXJxwA9qLBIlQH6uuM1hSH3gMysALY7HSoKW5iSf1SM4no7QcnPJduHfgxR%2B0ZreemxkQqxtnG7kmrvp13%2BDRjRxy5NXgxjACcGSa7vbyKtjReUnrdtCn%2F%2FjJ%2BExWmSCuy4loWBtkQaF2MZ8cAGn%2F60GrEmKsmYUBjmWF13eAKb9MNaIlFHvnHLiJJ6Qa%2FY7CSI5EDqqPhFGIPh66CGAwzoo6wocy1exQ3HQdehf%2Fyyt8U3%2FxFHl%2FJuuRl5QGRf8PFFzk7Q0HFULNRD2dYm2nwYPjlH9ENVLMpkZdpC1W42ePEkeU2hvyHgDDgnIzEBjqkAbvDI%2BRcNdUC9JNI6CYh6D6Iwh0q25%2Flym49OTJsS6y6YHm4GcaNKMGQizxsY1btOqsPvEWo%2B9S9lVHSo3RTmyjXxFBnddbIAwL9NQ0f9yIURvJ15A8rl4WwnZRrL2YdnkTdE0P2UFCnk1gdTmJCafc55pl1b%2BSEXPVSrh%2FjwZ8LXesX%2BmSLl%2FzK8cH298qNKTKn9SrAQ3yOR4Em0guE3mCMSLpQ&X-Amz-Signature=be7599edd13ae7369c87adaad77da9b5de251e6f448b4cee81c3393d9d02bf96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKK4EVG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQChEqR%2FKxxLNZjgBPE77XQf1%2BlV45uArrqbjRi1VxMaZQIhAM%2FXfbVaa6%2F1smyBtATFn6Y8xAbwf4pKQ2SM9En7ReUeKv8DCD4QABoMNjM3NDIzMTgzODA1IgzqBiER8MwILKOw40Iq3AMpNalRwSdN%2BI38N6BEr5uQAmVGIGKfls%2B%2BrREvD3IjdQ0KKscmTUoE1euMvwHXwHo7bp0EV6b8%2FGtALWtVsvv5gjBtmF2kgalxmOZQHUcE8w9GufrAFEt6Y%2B0zq5JTc%2BgYvHrZfIht9ApFBOnFZLS%2FMhJyReHu4t2Gj72KhpoWjkffN5%2F8hHFjH9k6uss3U1bhcsh0fl%2B7uNCyQGmYemMW3mzPtY%2BjGTx64vg2EwwvJa5BDJu6sOXHlyFk%2FP8isqfN60ye%2BgXq1%2F8d%2FRKsnIsVuiL5YlkVlHm2F4oA2pAkv%2Fo0OEUrLkjd3aJP6yaXybN5KzsXJxwA9qLBIlQH6uuM1hSH3gMysALY7HSoKW5iSf1SM4no7QcnPJduHfgxR%2B0ZreemxkQqxtnG7kmrvp13%2BDRjRxy5NXgxjACcGSa7vbyKtjReUnrdtCn%2F%2FjJ%2BExWmSCuy4loWBtkQaF2MZ8cAGn%2F60GrEmKsmYUBjmWF13eAKb9MNaIlFHvnHLiJJ6Qa%2FY7CSI5EDqqPhFGIPh66CGAwzoo6wocy1exQ3HQdehf%2Fyyt8U3%2FxFHl%2FJuuRl5QGRf8PFFzk7Q0HFULNRD2dYm2nwYPjlH9ENVLMpkZdpC1W42ePEkeU2hvyHgDDgnIzEBjqkAbvDI%2BRcNdUC9JNI6CYh6D6Iwh0q25%2Flym49OTJsS6y6YHm4GcaNKMGQizxsY1btOqsPvEWo%2B9S9lVHSo3RTmyjXxFBnddbIAwL9NQ0f9yIURvJ15A8rl4WwnZRrL2YdnkTdE0P2UFCnk1gdTmJCafc55pl1b%2BSEXPVSrh%2FjwZ8LXesX%2BmSLl%2FzK8cH298qNKTKn9SrAQ3yOR4Em0guE3mCMSLpQ&X-Amz-Signature=29853e404b7f7aecd84a95e088097b47a0ad8d161fe1084234c643a2380e4812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKK4EVG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQChEqR%2FKxxLNZjgBPE77XQf1%2BlV45uArrqbjRi1VxMaZQIhAM%2FXfbVaa6%2F1smyBtATFn6Y8xAbwf4pKQ2SM9En7ReUeKv8DCD4QABoMNjM3NDIzMTgzODA1IgzqBiER8MwILKOw40Iq3AMpNalRwSdN%2BI38N6BEr5uQAmVGIGKfls%2B%2BrREvD3IjdQ0KKscmTUoE1euMvwHXwHo7bp0EV6b8%2FGtALWtVsvv5gjBtmF2kgalxmOZQHUcE8w9GufrAFEt6Y%2B0zq5JTc%2BgYvHrZfIht9ApFBOnFZLS%2FMhJyReHu4t2Gj72KhpoWjkffN5%2F8hHFjH9k6uss3U1bhcsh0fl%2B7uNCyQGmYemMW3mzPtY%2BjGTx64vg2EwwvJa5BDJu6sOXHlyFk%2FP8isqfN60ye%2BgXq1%2F8d%2FRKsnIsVuiL5YlkVlHm2F4oA2pAkv%2Fo0OEUrLkjd3aJP6yaXybN5KzsXJxwA9qLBIlQH6uuM1hSH3gMysALY7HSoKW5iSf1SM4no7QcnPJduHfgxR%2B0ZreemxkQqxtnG7kmrvp13%2BDRjRxy5NXgxjACcGSa7vbyKtjReUnrdtCn%2F%2FjJ%2BExWmSCuy4loWBtkQaF2MZ8cAGn%2F60GrEmKsmYUBjmWF13eAKb9MNaIlFHvnHLiJJ6Qa%2FY7CSI5EDqqPhFGIPh66CGAwzoo6wocy1exQ3HQdehf%2Fyyt8U3%2FxFHl%2FJuuRl5QGRf8PFFzk7Q0HFULNRD2dYm2nwYPjlH9ENVLMpkZdpC1W42ePEkeU2hvyHgDDgnIzEBjqkAbvDI%2BRcNdUC9JNI6CYh6D6Iwh0q25%2Flym49OTJsS6y6YHm4GcaNKMGQizxsY1btOqsPvEWo%2B9S9lVHSo3RTmyjXxFBnddbIAwL9NQ0f9yIURvJ15A8rl4WwnZRrL2YdnkTdE0P2UFCnk1gdTmJCafc55pl1b%2BSEXPVSrh%2FjwZ8LXesX%2BmSLl%2FzK8cH298qNKTKn9SrAQ3yOR4Em0guE3mCMSLpQ&X-Amz-Signature=5be90a125c1607711164e02031446dbe53b8ecb64af62be01270996d942ab10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKK4EVG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQChEqR%2FKxxLNZjgBPE77XQf1%2BlV45uArrqbjRi1VxMaZQIhAM%2FXfbVaa6%2F1smyBtATFn6Y8xAbwf4pKQ2SM9En7ReUeKv8DCD4QABoMNjM3NDIzMTgzODA1IgzqBiER8MwILKOw40Iq3AMpNalRwSdN%2BI38N6BEr5uQAmVGIGKfls%2B%2BrREvD3IjdQ0KKscmTUoE1euMvwHXwHo7bp0EV6b8%2FGtALWtVsvv5gjBtmF2kgalxmOZQHUcE8w9GufrAFEt6Y%2B0zq5JTc%2BgYvHrZfIht9ApFBOnFZLS%2FMhJyReHu4t2Gj72KhpoWjkffN5%2F8hHFjH9k6uss3U1bhcsh0fl%2B7uNCyQGmYemMW3mzPtY%2BjGTx64vg2EwwvJa5BDJu6sOXHlyFk%2FP8isqfN60ye%2BgXq1%2F8d%2FRKsnIsVuiL5YlkVlHm2F4oA2pAkv%2Fo0OEUrLkjd3aJP6yaXybN5KzsXJxwA9qLBIlQH6uuM1hSH3gMysALY7HSoKW5iSf1SM4no7QcnPJduHfgxR%2B0ZreemxkQqxtnG7kmrvp13%2BDRjRxy5NXgxjACcGSa7vbyKtjReUnrdtCn%2F%2FjJ%2BExWmSCuy4loWBtkQaF2MZ8cAGn%2F60GrEmKsmYUBjmWF13eAKb9MNaIlFHvnHLiJJ6Qa%2FY7CSI5EDqqPhFGIPh66CGAwzoo6wocy1exQ3HQdehf%2Fyyt8U3%2FxFHl%2FJuuRl5QGRf8PFFzk7Q0HFULNRD2dYm2nwYPjlH9ENVLMpkZdpC1W42ePEkeU2hvyHgDDgnIzEBjqkAbvDI%2BRcNdUC9JNI6CYh6D6Iwh0q25%2Flym49OTJsS6y6YHm4GcaNKMGQizxsY1btOqsPvEWo%2B9S9lVHSo3RTmyjXxFBnddbIAwL9NQ0f9yIURvJ15A8rl4WwnZRrL2YdnkTdE0P2UFCnk1gdTmJCafc55pl1b%2BSEXPVSrh%2FjwZ8LXesX%2BmSLl%2FzK8cH298qNKTKn9SrAQ3yOR4Em0guE3mCMSLpQ&X-Amz-Signature=2cdcb18c6e72f5990f049860239a2a085e3df4275940f6d5ae95295c368782f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKK4EVG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQChEqR%2FKxxLNZjgBPE77XQf1%2BlV45uArrqbjRi1VxMaZQIhAM%2FXfbVaa6%2F1smyBtATFn6Y8xAbwf4pKQ2SM9En7ReUeKv8DCD4QABoMNjM3NDIzMTgzODA1IgzqBiER8MwILKOw40Iq3AMpNalRwSdN%2BI38N6BEr5uQAmVGIGKfls%2B%2BrREvD3IjdQ0KKscmTUoE1euMvwHXwHo7bp0EV6b8%2FGtALWtVsvv5gjBtmF2kgalxmOZQHUcE8w9GufrAFEt6Y%2B0zq5JTc%2BgYvHrZfIht9ApFBOnFZLS%2FMhJyReHu4t2Gj72KhpoWjkffN5%2F8hHFjH9k6uss3U1bhcsh0fl%2B7uNCyQGmYemMW3mzPtY%2BjGTx64vg2EwwvJa5BDJu6sOXHlyFk%2FP8isqfN60ye%2BgXq1%2F8d%2FRKsnIsVuiL5YlkVlHm2F4oA2pAkv%2Fo0OEUrLkjd3aJP6yaXybN5KzsXJxwA9qLBIlQH6uuM1hSH3gMysALY7HSoKW5iSf1SM4no7QcnPJduHfgxR%2B0ZreemxkQqxtnG7kmrvp13%2BDRjRxy5NXgxjACcGSa7vbyKtjReUnrdtCn%2F%2FjJ%2BExWmSCuy4loWBtkQaF2MZ8cAGn%2F60GrEmKsmYUBjmWF13eAKb9MNaIlFHvnHLiJJ6Qa%2FY7CSI5EDqqPhFGIPh66CGAwzoo6wocy1exQ3HQdehf%2Fyyt8U3%2FxFHl%2FJuuRl5QGRf8PFFzk7Q0HFULNRD2dYm2nwYPjlH9ENVLMpkZdpC1W42ePEkeU2hvyHgDDgnIzEBjqkAbvDI%2BRcNdUC9JNI6CYh6D6Iwh0q25%2Flym49OTJsS6y6YHm4GcaNKMGQizxsY1btOqsPvEWo%2B9S9lVHSo3RTmyjXxFBnddbIAwL9NQ0f9yIURvJ15A8rl4WwnZRrL2YdnkTdE0P2UFCnk1gdTmJCafc55pl1b%2BSEXPVSrh%2FjwZ8LXesX%2BmSLl%2FzK8cH298qNKTKn9SrAQ3yOR4Em0guE3mCMSLpQ&X-Amz-Signature=aea45cb370660e0228e85ddc8c35535e75231079d13231e4d2e2864535737000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKK4EVG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQChEqR%2FKxxLNZjgBPE77XQf1%2BlV45uArrqbjRi1VxMaZQIhAM%2FXfbVaa6%2F1smyBtATFn6Y8xAbwf4pKQ2SM9En7ReUeKv8DCD4QABoMNjM3NDIzMTgzODA1IgzqBiER8MwILKOw40Iq3AMpNalRwSdN%2BI38N6BEr5uQAmVGIGKfls%2B%2BrREvD3IjdQ0KKscmTUoE1euMvwHXwHo7bp0EV6b8%2FGtALWtVsvv5gjBtmF2kgalxmOZQHUcE8w9GufrAFEt6Y%2B0zq5JTc%2BgYvHrZfIht9ApFBOnFZLS%2FMhJyReHu4t2Gj72KhpoWjkffN5%2F8hHFjH9k6uss3U1bhcsh0fl%2B7uNCyQGmYemMW3mzPtY%2BjGTx64vg2EwwvJa5BDJu6sOXHlyFk%2FP8isqfN60ye%2BgXq1%2F8d%2FRKsnIsVuiL5YlkVlHm2F4oA2pAkv%2Fo0OEUrLkjd3aJP6yaXybN5KzsXJxwA9qLBIlQH6uuM1hSH3gMysALY7HSoKW5iSf1SM4no7QcnPJduHfgxR%2B0ZreemxkQqxtnG7kmrvp13%2BDRjRxy5NXgxjACcGSa7vbyKtjReUnrdtCn%2F%2FjJ%2BExWmSCuy4loWBtkQaF2MZ8cAGn%2F60GrEmKsmYUBjmWF13eAKb9MNaIlFHvnHLiJJ6Qa%2FY7CSI5EDqqPhFGIPh66CGAwzoo6wocy1exQ3HQdehf%2Fyyt8U3%2FxFHl%2FJuuRl5QGRf8PFFzk7Q0HFULNRD2dYm2nwYPjlH9ENVLMpkZdpC1W42ePEkeU2hvyHgDDgnIzEBjqkAbvDI%2BRcNdUC9JNI6CYh6D6Iwh0q25%2Flym49OTJsS6y6YHm4GcaNKMGQizxsY1btOqsPvEWo%2B9S9lVHSo3RTmyjXxFBnddbIAwL9NQ0f9yIURvJ15A8rl4WwnZRrL2YdnkTdE0P2UFCnk1gdTmJCafc55pl1b%2BSEXPVSrh%2FjwZ8LXesX%2BmSLl%2FzK8cH298qNKTKn9SrAQ3yOR4Em0guE3mCMSLpQ&X-Amz-Signature=dfe99607de274c7d4eb8f3dc5ec1300cc7dca9f2239549707b40cb1f8c14348b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKK4EVG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQChEqR%2FKxxLNZjgBPE77XQf1%2BlV45uArrqbjRi1VxMaZQIhAM%2FXfbVaa6%2F1smyBtATFn6Y8xAbwf4pKQ2SM9En7ReUeKv8DCD4QABoMNjM3NDIzMTgzODA1IgzqBiER8MwILKOw40Iq3AMpNalRwSdN%2BI38N6BEr5uQAmVGIGKfls%2B%2BrREvD3IjdQ0KKscmTUoE1euMvwHXwHo7bp0EV6b8%2FGtALWtVsvv5gjBtmF2kgalxmOZQHUcE8w9GufrAFEt6Y%2B0zq5JTc%2BgYvHrZfIht9ApFBOnFZLS%2FMhJyReHu4t2Gj72KhpoWjkffN5%2F8hHFjH9k6uss3U1bhcsh0fl%2B7uNCyQGmYemMW3mzPtY%2BjGTx64vg2EwwvJa5BDJu6sOXHlyFk%2FP8isqfN60ye%2BgXq1%2F8d%2FRKsnIsVuiL5YlkVlHm2F4oA2pAkv%2Fo0OEUrLkjd3aJP6yaXybN5KzsXJxwA9qLBIlQH6uuM1hSH3gMysALY7HSoKW5iSf1SM4no7QcnPJduHfgxR%2B0ZreemxkQqxtnG7kmrvp13%2BDRjRxy5NXgxjACcGSa7vbyKtjReUnrdtCn%2F%2FjJ%2BExWmSCuy4loWBtkQaF2MZ8cAGn%2F60GrEmKsmYUBjmWF13eAKb9MNaIlFHvnHLiJJ6Qa%2FY7CSI5EDqqPhFGIPh66CGAwzoo6wocy1exQ3HQdehf%2Fyyt8U3%2FxFHl%2FJuuRl5QGRf8PFFzk7Q0HFULNRD2dYm2nwYPjlH9ENVLMpkZdpC1W42ePEkeU2hvyHgDDgnIzEBjqkAbvDI%2BRcNdUC9JNI6CYh6D6Iwh0q25%2Flym49OTJsS6y6YHm4GcaNKMGQizxsY1btOqsPvEWo%2B9S9lVHSo3RTmyjXxFBnddbIAwL9NQ0f9yIURvJ15A8rl4WwnZRrL2YdnkTdE0P2UFCnk1gdTmJCafc55pl1b%2BSEXPVSrh%2FjwZ8LXesX%2BmSLl%2FzK8cH298qNKTKn9SrAQ3yOR4Em0guE3mCMSLpQ&X-Amz-Signature=fc9f9063789c96decf022e2c2a87183f03693fddf99c27c3426434d4c35c9ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKK4EVG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQChEqR%2FKxxLNZjgBPE77XQf1%2BlV45uArrqbjRi1VxMaZQIhAM%2FXfbVaa6%2F1smyBtATFn6Y8xAbwf4pKQ2SM9En7ReUeKv8DCD4QABoMNjM3NDIzMTgzODA1IgzqBiER8MwILKOw40Iq3AMpNalRwSdN%2BI38N6BEr5uQAmVGIGKfls%2B%2BrREvD3IjdQ0KKscmTUoE1euMvwHXwHo7bp0EV6b8%2FGtALWtVsvv5gjBtmF2kgalxmOZQHUcE8w9GufrAFEt6Y%2B0zq5JTc%2BgYvHrZfIht9ApFBOnFZLS%2FMhJyReHu4t2Gj72KhpoWjkffN5%2F8hHFjH9k6uss3U1bhcsh0fl%2B7uNCyQGmYemMW3mzPtY%2BjGTx64vg2EwwvJa5BDJu6sOXHlyFk%2FP8isqfN60ye%2BgXq1%2F8d%2FRKsnIsVuiL5YlkVlHm2F4oA2pAkv%2Fo0OEUrLkjd3aJP6yaXybN5KzsXJxwA9qLBIlQH6uuM1hSH3gMysALY7HSoKW5iSf1SM4no7QcnPJduHfgxR%2B0ZreemxkQqxtnG7kmrvp13%2BDRjRxy5NXgxjACcGSa7vbyKtjReUnrdtCn%2F%2FjJ%2BExWmSCuy4loWBtkQaF2MZ8cAGn%2F60GrEmKsmYUBjmWF13eAKb9MNaIlFHvnHLiJJ6Qa%2FY7CSI5EDqqPhFGIPh66CGAwzoo6wocy1exQ3HQdehf%2Fyyt8U3%2FxFHl%2FJuuRl5QGRf8PFFzk7Q0HFULNRD2dYm2nwYPjlH9ENVLMpkZdpC1W42ePEkeU2hvyHgDDgnIzEBjqkAbvDI%2BRcNdUC9JNI6CYh6D6Iwh0q25%2Flym49OTJsS6y6YHm4GcaNKMGQizxsY1btOqsPvEWo%2B9S9lVHSo3RTmyjXxFBnddbIAwL9NQ0f9yIURvJ15A8rl4WwnZRrL2YdnkTdE0P2UFCnk1gdTmJCafc55pl1b%2BSEXPVSrh%2FjwZ8LXesX%2BmSLl%2FzK8cH298qNKTKn9SrAQ3yOR4Em0guE3mCMSLpQ&X-Amz-Signature=cc0d4885266643eebad6606ac6dcebe27ab8f67245acf3ee9a6bed34f2379158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKK4EVG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQChEqR%2FKxxLNZjgBPE77XQf1%2BlV45uArrqbjRi1VxMaZQIhAM%2FXfbVaa6%2F1smyBtATFn6Y8xAbwf4pKQ2SM9En7ReUeKv8DCD4QABoMNjM3NDIzMTgzODA1IgzqBiER8MwILKOw40Iq3AMpNalRwSdN%2BI38N6BEr5uQAmVGIGKfls%2B%2BrREvD3IjdQ0KKscmTUoE1euMvwHXwHo7bp0EV6b8%2FGtALWtVsvv5gjBtmF2kgalxmOZQHUcE8w9GufrAFEt6Y%2B0zq5JTc%2BgYvHrZfIht9ApFBOnFZLS%2FMhJyReHu4t2Gj72KhpoWjkffN5%2F8hHFjH9k6uss3U1bhcsh0fl%2B7uNCyQGmYemMW3mzPtY%2BjGTx64vg2EwwvJa5BDJu6sOXHlyFk%2FP8isqfN60ye%2BgXq1%2F8d%2FRKsnIsVuiL5YlkVlHm2F4oA2pAkv%2Fo0OEUrLkjd3aJP6yaXybN5KzsXJxwA9qLBIlQH6uuM1hSH3gMysALY7HSoKW5iSf1SM4no7QcnPJduHfgxR%2B0ZreemxkQqxtnG7kmrvp13%2BDRjRxy5NXgxjACcGSa7vbyKtjReUnrdtCn%2F%2FjJ%2BExWmSCuy4loWBtkQaF2MZ8cAGn%2F60GrEmKsmYUBjmWF13eAKb9MNaIlFHvnHLiJJ6Qa%2FY7CSI5EDqqPhFGIPh66CGAwzoo6wocy1exQ3HQdehf%2Fyyt8U3%2FxFHl%2FJuuRl5QGRf8PFFzk7Q0HFULNRD2dYm2nwYPjlH9ENVLMpkZdpC1W42ePEkeU2hvyHgDDgnIzEBjqkAbvDI%2BRcNdUC9JNI6CYh6D6Iwh0q25%2Flym49OTJsS6y6YHm4GcaNKMGQizxsY1btOqsPvEWo%2B9S9lVHSo3RTmyjXxFBnddbIAwL9NQ0f9yIURvJ15A8rl4WwnZRrL2YdnkTdE0P2UFCnk1gdTmJCafc55pl1b%2BSEXPVSrh%2FjwZ8LXesX%2BmSLl%2FzK8cH298qNKTKn9SrAQ3yOR4Em0guE3mCMSLpQ&X-Amz-Signature=2a827f44144749ea448d69a3c635a65431972cd1364253d6ad8febbc78e46189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKK4EVG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQChEqR%2FKxxLNZjgBPE77XQf1%2BlV45uArrqbjRi1VxMaZQIhAM%2FXfbVaa6%2F1smyBtATFn6Y8xAbwf4pKQ2SM9En7ReUeKv8DCD4QABoMNjM3NDIzMTgzODA1IgzqBiER8MwILKOw40Iq3AMpNalRwSdN%2BI38N6BEr5uQAmVGIGKfls%2B%2BrREvD3IjdQ0KKscmTUoE1euMvwHXwHo7bp0EV6b8%2FGtALWtVsvv5gjBtmF2kgalxmOZQHUcE8w9GufrAFEt6Y%2B0zq5JTc%2BgYvHrZfIht9ApFBOnFZLS%2FMhJyReHu4t2Gj72KhpoWjkffN5%2F8hHFjH9k6uss3U1bhcsh0fl%2B7uNCyQGmYemMW3mzPtY%2BjGTx64vg2EwwvJa5BDJu6sOXHlyFk%2FP8isqfN60ye%2BgXq1%2F8d%2FRKsnIsVuiL5YlkVlHm2F4oA2pAkv%2Fo0OEUrLkjd3aJP6yaXybN5KzsXJxwA9qLBIlQH6uuM1hSH3gMysALY7HSoKW5iSf1SM4no7QcnPJduHfgxR%2B0ZreemxkQqxtnG7kmrvp13%2BDRjRxy5NXgxjACcGSa7vbyKtjReUnrdtCn%2F%2FjJ%2BExWmSCuy4loWBtkQaF2MZ8cAGn%2F60GrEmKsmYUBjmWF13eAKb9MNaIlFHvnHLiJJ6Qa%2FY7CSI5EDqqPhFGIPh66CGAwzoo6wocy1exQ3HQdehf%2Fyyt8U3%2FxFHl%2FJuuRl5QGRf8PFFzk7Q0HFULNRD2dYm2nwYPjlH9ENVLMpkZdpC1W42ePEkeU2hvyHgDDgnIzEBjqkAbvDI%2BRcNdUC9JNI6CYh6D6Iwh0q25%2Flym49OTJsS6y6YHm4GcaNKMGQizxsY1btOqsPvEWo%2B9S9lVHSo3RTmyjXxFBnddbIAwL9NQ0f9yIURvJ15A8rl4WwnZRrL2YdnkTdE0P2UFCnk1gdTmJCafc55pl1b%2BSEXPVSrh%2FjwZ8LXesX%2BmSLl%2FzK8cH298qNKTKn9SrAQ3yOR4Em0guE3mCMSLpQ&X-Amz-Signature=89676fba62f0eb46ae0036d4860c3d4ffbcdb707bfa55da0314a86dccdfc1f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKK4EVG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQChEqR%2FKxxLNZjgBPE77XQf1%2BlV45uArrqbjRi1VxMaZQIhAM%2FXfbVaa6%2F1smyBtATFn6Y8xAbwf4pKQ2SM9En7ReUeKv8DCD4QABoMNjM3NDIzMTgzODA1IgzqBiER8MwILKOw40Iq3AMpNalRwSdN%2BI38N6BEr5uQAmVGIGKfls%2B%2BrREvD3IjdQ0KKscmTUoE1euMvwHXwHo7bp0EV6b8%2FGtALWtVsvv5gjBtmF2kgalxmOZQHUcE8w9GufrAFEt6Y%2B0zq5JTc%2BgYvHrZfIht9ApFBOnFZLS%2FMhJyReHu4t2Gj72KhpoWjkffN5%2F8hHFjH9k6uss3U1bhcsh0fl%2B7uNCyQGmYemMW3mzPtY%2BjGTx64vg2EwwvJa5BDJu6sOXHlyFk%2FP8isqfN60ye%2BgXq1%2F8d%2FRKsnIsVuiL5YlkVlHm2F4oA2pAkv%2Fo0OEUrLkjd3aJP6yaXybN5KzsXJxwA9qLBIlQH6uuM1hSH3gMysALY7HSoKW5iSf1SM4no7QcnPJduHfgxR%2B0ZreemxkQqxtnG7kmrvp13%2BDRjRxy5NXgxjACcGSa7vbyKtjReUnrdtCn%2F%2FjJ%2BExWmSCuy4loWBtkQaF2MZ8cAGn%2F60GrEmKsmYUBjmWF13eAKb9MNaIlFHvnHLiJJ6Qa%2FY7CSI5EDqqPhFGIPh66CGAwzoo6wocy1exQ3HQdehf%2Fyyt8U3%2FxFHl%2FJuuRl5QGRf8PFFzk7Q0HFULNRD2dYm2nwYPjlH9ENVLMpkZdpC1W42ePEkeU2hvyHgDDgnIzEBjqkAbvDI%2BRcNdUC9JNI6CYh6D6Iwh0q25%2Flym49OTJsS6y6YHm4GcaNKMGQizxsY1btOqsPvEWo%2B9S9lVHSo3RTmyjXxFBnddbIAwL9NQ0f9yIURvJ15A8rl4WwnZRrL2YdnkTdE0P2UFCnk1gdTmJCafc55pl1b%2BSEXPVSrh%2FjwZ8LXesX%2BmSLl%2FzK8cH298qNKTKn9SrAQ3yOR4Em0guE3mCMSLpQ&X-Amz-Signature=19af69e11574577e690cc953377b53c92353c9b006ec57295b2c9e81dd0ddad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKK4EVG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQChEqR%2FKxxLNZjgBPE77XQf1%2BlV45uArrqbjRi1VxMaZQIhAM%2FXfbVaa6%2F1smyBtATFn6Y8xAbwf4pKQ2SM9En7ReUeKv8DCD4QABoMNjM3NDIzMTgzODA1IgzqBiER8MwILKOw40Iq3AMpNalRwSdN%2BI38N6BEr5uQAmVGIGKfls%2B%2BrREvD3IjdQ0KKscmTUoE1euMvwHXwHo7bp0EV6b8%2FGtALWtVsvv5gjBtmF2kgalxmOZQHUcE8w9GufrAFEt6Y%2B0zq5JTc%2BgYvHrZfIht9ApFBOnFZLS%2FMhJyReHu4t2Gj72KhpoWjkffN5%2F8hHFjH9k6uss3U1bhcsh0fl%2B7uNCyQGmYemMW3mzPtY%2BjGTx64vg2EwwvJa5BDJu6sOXHlyFk%2FP8isqfN60ye%2BgXq1%2F8d%2FRKsnIsVuiL5YlkVlHm2F4oA2pAkv%2Fo0OEUrLkjd3aJP6yaXybN5KzsXJxwA9qLBIlQH6uuM1hSH3gMysALY7HSoKW5iSf1SM4no7QcnPJduHfgxR%2B0ZreemxkQqxtnG7kmrvp13%2BDRjRxy5NXgxjACcGSa7vbyKtjReUnrdtCn%2F%2FjJ%2BExWmSCuy4loWBtkQaF2MZ8cAGn%2F60GrEmKsmYUBjmWF13eAKb9MNaIlFHvnHLiJJ6Qa%2FY7CSI5EDqqPhFGIPh66CGAwzoo6wocy1exQ3HQdehf%2Fyyt8U3%2FxFHl%2FJuuRl5QGRf8PFFzk7Q0HFULNRD2dYm2nwYPjlH9ENVLMpkZdpC1W42ePEkeU2hvyHgDDgnIzEBjqkAbvDI%2BRcNdUC9JNI6CYh6D6Iwh0q25%2Flym49OTJsS6y6YHm4GcaNKMGQizxsY1btOqsPvEWo%2B9S9lVHSo3RTmyjXxFBnddbIAwL9NQ0f9yIURvJ15A8rl4WwnZRrL2YdnkTdE0P2UFCnk1gdTmJCafc55pl1b%2BSEXPVSrh%2FjwZ8LXesX%2BmSLl%2FzK8cH298qNKTKn9SrAQ3yOR4Em0guE3mCMSLpQ&X-Amz-Signature=13928182c0031941a3b8fdc0c1ea8c6c9d1ec67c945669d136cae5991ffa21d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKK4EVG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQChEqR%2FKxxLNZjgBPE77XQf1%2BlV45uArrqbjRi1VxMaZQIhAM%2FXfbVaa6%2F1smyBtATFn6Y8xAbwf4pKQ2SM9En7ReUeKv8DCD4QABoMNjM3NDIzMTgzODA1IgzqBiER8MwILKOw40Iq3AMpNalRwSdN%2BI38N6BEr5uQAmVGIGKfls%2B%2BrREvD3IjdQ0KKscmTUoE1euMvwHXwHo7bp0EV6b8%2FGtALWtVsvv5gjBtmF2kgalxmOZQHUcE8w9GufrAFEt6Y%2B0zq5JTc%2BgYvHrZfIht9ApFBOnFZLS%2FMhJyReHu4t2Gj72KhpoWjkffN5%2F8hHFjH9k6uss3U1bhcsh0fl%2B7uNCyQGmYemMW3mzPtY%2BjGTx64vg2EwwvJa5BDJu6sOXHlyFk%2FP8isqfN60ye%2BgXq1%2F8d%2FRKsnIsVuiL5YlkVlHm2F4oA2pAkv%2Fo0OEUrLkjd3aJP6yaXybN5KzsXJxwA9qLBIlQH6uuM1hSH3gMysALY7HSoKW5iSf1SM4no7QcnPJduHfgxR%2B0ZreemxkQqxtnG7kmrvp13%2BDRjRxy5NXgxjACcGSa7vbyKtjReUnrdtCn%2F%2FjJ%2BExWmSCuy4loWBtkQaF2MZ8cAGn%2F60GrEmKsmYUBjmWF13eAKb9MNaIlFHvnHLiJJ6Qa%2FY7CSI5EDqqPhFGIPh66CGAwzoo6wocy1exQ3HQdehf%2Fyyt8U3%2FxFHl%2FJuuRl5QGRf8PFFzk7Q0HFULNRD2dYm2nwYPjlH9ENVLMpkZdpC1W42ePEkeU2hvyHgDDgnIzEBjqkAbvDI%2BRcNdUC9JNI6CYh6D6Iwh0q25%2Flym49OTJsS6y6YHm4GcaNKMGQizxsY1btOqsPvEWo%2B9S9lVHSo3RTmyjXxFBnddbIAwL9NQ0f9yIURvJ15A8rl4WwnZRrL2YdnkTdE0P2UFCnk1gdTmJCafc55pl1b%2BSEXPVSrh%2FjwZ8LXesX%2BmSLl%2FzK8cH298qNKTKn9SrAQ3yOR4Em0guE3mCMSLpQ&X-Amz-Signature=c50b32f0bba5f929cf396e3ae740749277aa47bcb0dd476c6a892c1813b41266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKK4EVG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQChEqR%2FKxxLNZjgBPE77XQf1%2BlV45uArrqbjRi1VxMaZQIhAM%2FXfbVaa6%2F1smyBtATFn6Y8xAbwf4pKQ2SM9En7ReUeKv8DCD4QABoMNjM3NDIzMTgzODA1IgzqBiER8MwILKOw40Iq3AMpNalRwSdN%2BI38N6BEr5uQAmVGIGKfls%2B%2BrREvD3IjdQ0KKscmTUoE1euMvwHXwHo7bp0EV6b8%2FGtALWtVsvv5gjBtmF2kgalxmOZQHUcE8w9GufrAFEt6Y%2B0zq5JTc%2BgYvHrZfIht9ApFBOnFZLS%2FMhJyReHu4t2Gj72KhpoWjkffN5%2F8hHFjH9k6uss3U1bhcsh0fl%2B7uNCyQGmYemMW3mzPtY%2BjGTx64vg2EwwvJa5BDJu6sOXHlyFk%2FP8isqfN60ye%2BgXq1%2F8d%2FRKsnIsVuiL5YlkVlHm2F4oA2pAkv%2Fo0OEUrLkjd3aJP6yaXybN5KzsXJxwA9qLBIlQH6uuM1hSH3gMysALY7HSoKW5iSf1SM4no7QcnPJduHfgxR%2B0ZreemxkQqxtnG7kmrvp13%2BDRjRxy5NXgxjACcGSa7vbyKtjReUnrdtCn%2F%2FjJ%2BExWmSCuy4loWBtkQaF2MZ8cAGn%2F60GrEmKsmYUBjmWF13eAKb9MNaIlFHvnHLiJJ6Qa%2FY7CSI5EDqqPhFGIPh66CGAwzoo6wocy1exQ3HQdehf%2Fyyt8U3%2FxFHl%2FJuuRl5QGRf8PFFzk7Q0HFULNRD2dYm2nwYPjlH9ENVLMpkZdpC1W42ePEkeU2hvyHgDDgnIzEBjqkAbvDI%2BRcNdUC9JNI6CYh6D6Iwh0q25%2Flym49OTJsS6y6YHm4GcaNKMGQizxsY1btOqsPvEWo%2B9S9lVHSo3RTmyjXxFBnddbIAwL9NQ0f9yIURvJ15A8rl4WwnZRrL2YdnkTdE0P2UFCnk1gdTmJCafc55pl1b%2BSEXPVSrh%2FjwZ8LXesX%2BmSLl%2FzK8cH298qNKTKn9SrAQ3yOR4Em0guE3mCMSLpQ&X-Amz-Signature=3903d478e2da4529b7dafb4cba282e206b488dca497313e985589e5590c6502e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674FIJUUN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCpQc02HtPJtU1F5Om9GXVqjT9YC69wsHWSszxPvQtnwgIgJyAb70VckGjdHv7YSoMUFr6%2F2OJrUmTFIESKYZEcgCwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAAl%2FYTbEvrtIBoYcSrcA4gYOAK1z3fsFSVL7Zbd3pP4YOkCoqex9X357G5Epod6qDWq0zP7AoRUG3Y3V2B7Q8mFmc33w7VO%2BCxUr1pTtDglXcC1zbSXoVkfalvIsFh%2FSxUp5m94USbdlYcrXCU6gRSiDlGrtckGa%2FnLzpB1%2BqnuF8Qy32jbvPs%2BTRLjVFfmEuG3BMRQykXvYHs0AWQ4%2BNBEnOgLjB9%2Bg5fwdjDFvk4Eykt%2FMftrd7yqwMixVLZqK7N2IhZEhzEA%2Be%2Fr8UIgSyby21EZcftA%2FtzzVE5UsAShnp4UbMWhkrt22x3xOZm1DX7JhGIjCbcc0gIUEHb4kIqNuiNhBPlSqIF4A%2F9A9ywVsyEfTizE1B5zrDMCpEghCvD1MqbVKYvy77p90GRa4yznvlSvNt1U1iTXl3ev5SdQnDF%2FUWpFtsPM2dwfeuwg2SVwfmOCbYnQwDh0v%2FO1r0UL%2BHxAvlYkP3f%2Bo7Nz6lwiqGL93PvUK3dRLwGXUMiajOYi%2Bp219MC1v8VpHRpEhk6msKybZaeGH8hPCAdfd4FdQt2rB9qpaB1JQI%2FetWnYHW5eiK%2FHjqdXpzw4wgjWBXnNemzyVtcZ1kiYCMJe5S9m71y8ERjqw0xsXpnRnArIvf4FI%2BMM%2BYcbopMeMKqcjMQGOqUBHRUmN2NrTKrQ%2FVU1NkrApbGRh6F2kORAR8Qc2BBajXaRSF6Pz0q4zkWbgqUQzwUOLGYLtbhXtjeN0o8QqqtVac3zrYFxFWWrDb91g%2BFYw%2FcpJLlP%2FEe9K%2F2YJqBG0olPFcwAiNTmS%2BNEzVoX5ZV6fehnZiDnDtdCNg3JJVualf8nRWlHfUl%2BuDRO4HOMniDivVoqqeyE0Pxlu%2FJiEmkO5fdZb%2BHn&X-Amz-Signature=546866ff40f01922f0634c983e8fb66f52ffd758730e8c53c867739c61a766f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674FIJUUN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCpQc02HtPJtU1F5Om9GXVqjT9YC69wsHWSszxPvQtnwgIgJyAb70VckGjdHv7YSoMUFr6%2F2OJrUmTFIESKYZEcgCwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAAl%2FYTbEvrtIBoYcSrcA4gYOAK1z3fsFSVL7Zbd3pP4YOkCoqex9X357G5Epod6qDWq0zP7AoRUG3Y3V2B7Q8mFmc33w7VO%2BCxUr1pTtDglXcC1zbSXoVkfalvIsFh%2FSxUp5m94USbdlYcrXCU6gRSiDlGrtckGa%2FnLzpB1%2BqnuF8Qy32jbvPs%2BTRLjVFfmEuG3BMRQykXvYHs0AWQ4%2BNBEnOgLjB9%2Bg5fwdjDFvk4Eykt%2FMftrd7yqwMixVLZqK7N2IhZEhzEA%2Be%2Fr8UIgSyby21EZcftA%2FtzzVE5UsAShnp4UbMWhkrt22x3xOZm1DX7JhGIjCbcc0gIUEHb4kIqNuiNhBPlSqIF4A%2F9A9ywVsyEfTizE1B5zrDMCpEghCvD1MqbVKYvy77p90GRa4yznvlSvNt1U1iTXl3ev5SdQnDF%2FUWpFtsPM2dwfeuwg2SVwfmOCbYnQwDh0v%2FO1r0UL%2BHxAvlYkP3f%2Bo7Nz6lwiqGL93PvUK3dRLwGXUMiajOYi%2Bp219MC1v8VpHRpEhk6msKybZaeGH8hPCAdfd4FdQt2rB9qpaB1JQI%2FetWnYHW5eiK%2FHjqdXpzw4wgjWBXnNemzyVtcZ1kiYCMJe5S9m71y8ERjqw0xsXpnRnArIvf4FI%2BMM%2BYcbopMeMKqcjMQGOqUBHRUmN2NrTKrQ%2FVU1NkrApbGRh6F2kORAR8Qc2BBajXaRSF6Pz0q4zkWbgqUQzwUOLGYLtbhXtjeN0o8QqqtVac3zrYFxFWWrDb91g%2BFYw%2FcpJLlP%2FEe9K%2F2YJqBG0olPFcwAiNTmS%2BNEzVoX5ZV6fehnZiDnDtdCNg3JJVualf8nRWlHfUl%2BuDRO4HOMniDivVoqqeyE0Pxlu%2FJiEmkO5fdZb%2BHn&X-Amz-Signature=5ae0522bcf86f8a11de25173c87ce06dec62a09a86a76ba9e4ac621afb5e0066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674FIJUUN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCpQc02HtPJtU1F5Om9GXVqjT9YC69wsHWSszxPvQtnwgIgJyAb70VckGjdHv7YSoMUFr6%2F2OJrUmTFIESKYZEcgCwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAAl%2FYTbEvrtIBoYcSrcA4gYOAK1z3fsFSVL7Zbd3pP4YOkCoqex9X357G5Epod6qDWq0zP7AoRUG3Y3V2B7Q8mFmc33w7VO%2BCxUr1pTtDglXcC1zbSXoVkfalvIsFh%2FSxUp5m94USbdlYcrXCU6gRSiDlGrtckGa%2FnLzpB1%2BqnuF8Qy32jbvPs%2BTRLjVFfmEuG3BMRQykXvYHs0AWQ4%2BNBEnOgLjB9%2Bg5fwdjDFvk4Eykt%2FMftrd7yqwMixVLZqK7N2IhZEhzEA%2Be%2Fr8UIgSyby21EZcftA%2FtzzVE5UsAShnp4UbMWhkrt22x3xOZm1DX7JhGIjCbcc0gIUEHb4kIqNuiNhBPlSqIF4A%2F9A9ywVsyEfTizE1B5zrDMCpEghCvD1MqbVKYvy77p90GRa4yznvlSvNt1U1iTXl3ev5SdQnDF%2FUWpFtsPM2dwfeuwg2SVwfmOCbYnQwDh0v%2FO1r0UL%2BHxAvlYkP3f%2Bo7Nz6lwiqGL93PvUK3dRLwGXUMiajOYi%2Bp219MC1v8VpHRpEhk6msKybZaeGH8hPCAdfd4FdQt2rB9qpaB1JQI%2FetWnYHW5eiK%2FHjqdXpzw4wgjWBXnNemzyVtcZ1kiYCMJe5S9m71y8ERjqw0xsXpnRnArIvf4FI%2BMM%2BYcbopMeMKqcjMQGOqUBHRUmN2NrTKrQ%2FVU1NkrApbGRh6F2kORAR8Qc2BBajXaRSF6Pz0q4zkWbgqUQzwUOLGYLtbhXtjeN0o8QqqtVac3zrYFxFWWrDb91g%2BFYw%2FcpJLlP%2FEe9K%2F2YJqBG0olPFcwAiNTmS%2BNEzVoX5ZV6fehnZiDnDtdCNg3JJVualf8nRWlHfUl%2BuDRO4HOMniDivVoqqeyE0Pxlu%2FJiEmkO5fdZb%2BHn&X-Amz-Signature=246d6c4824f398d52c91e71bc58c1af559ed80234a72ae0d27b17cc54fa56ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674FIJUUN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCpQc02HtPJtU1F5Om9GXVqjT9YC69wsHWSszxPvQtnwgIgJyAb70VckGjdHv7YSoMUFr6%2F2OJrUmTFIESKYZEcgCwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAAl%2FYTbEvrtIBoYcSrcA4gYOAK1z3fsFSVL7Zbd3pP4YOkCoqex9X357G5Epod6qDWq0zP7AoRUG3Y3V2B7Q8mFmc33w7VO%2BCxUr1pTtDglXcC1zbSXoVkfalvIsFh%2FSxUp5m94USbdlYcrXCU6gRSiDlGrtckGa%2FnLzpB1%2BqnuF8Qy32jbvPs%2BTRLjVFfmEuG3BMRQykXvYHs0AWQ4%2BNBEnOgLjB9%2Bg5fwdjDFvk4Eykt%2FMftrd7yqwMixVLZqK7N2IhZEhzEA%2Be%2Fr8UIgSyby21EZcftA%2FtzzVE5UsAShnp4UbMWhkrt22x3xOZm1DX7JhGIjCbcc0gIUEHb4kIqNuiNhBPlSqIF4A%2F9A9ywVsyEfTizE1B5zrDMCpEghCvD1MqbVKYvy77p90GRa4yznvlSvNt1U1iTXl3ev5SdQnDF%2FUWpFtsPM2dwfeuwg2SVwfmOCbYnQwDh0v%2FO1r0UL%2BHxAvlYkP3f%2Bo7Nz6lwiqGL93PvUK3dRLwGXUMiajOYi%2Bp219MC1v8VpHRpEhk6msKybZaeGH8hPCAdfd4FdQt2rB9qpaB1JQI%2FetWnYHW5eiK%2FHjqdXpzw4wgjWBXnNemzyVtcZ1kiYCMJe5S9m71y8ERjqw0xsXpnRnArIvf4FI%2BMM%2BYcbopMeMKqcjMQGOqUBHRUmN2NrTKrQ%2FVU1NkrApbGRh6F2kORAR8Qc2BBajXaRSF6Pz0q4zkWbgqUQzwUOLGYLtbhXtjeN0o8QqqtVac3zrYFxFWWrDb91g%2BFYw%2FcpJLlP%2FEe9K%2F2YJqBG0olPFcwAiNTmS%2BNEzVoX5ZV6fehnZiDnDtdCNg3JJVualf8nRWlHfUl%2BuDRO4HOMniDivVoqqeyE0Pxlu%2FJiEmkO5fdZb%2BHn&X-Amz-Signature=ba2f7e417a6c00a8bdf8798ccca695db96ed9d0cd37191923f80ceabf51f517c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674FIJUUN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCpQc02HtPJtU1F5Om9GXVqjT9YC69wsHWSszxPvQtnwgIgJyAb70VckGjdHv7YSoMUFr6%2F2OJrUmTFIESKYZEcgCwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAAl%2FYTbEvrtIBoYcSrcA4gYOAK1z3fsFSVL7Zbd3pP4YOkCoqex9X357G5Epod6qDWq0zP7AoRUG3Y3V2B7Q8mFmc33w7VO%2BCxUr1pTtDglXcC1zbSXoVkfalvIsFh%2FSxUp5m94USbdlYcrXCU6gRSiDlGrtckGa%2FnLzpB1%2BqnuF8Qy32jbvPs%2BTRLjVFfmEuG3BMRQykXvYHs0AWQ4%2BNBEnOgLjB9%2Bg5fwdjDFvk4Eykt%2FMftrd7yqwMixVLZqK7N2IhZEhzEA%2Be%2Fr8UIgSyby21EZcftA%2FtzzVE5UsAShnp4UbMWhkrt22x3xOZm1DX7JhGIjCbcc0gIUEHb4kIqNuiNhBPlSqIF4A%2F9A9ywVsyEfTizE1B5zrDMCpEghCvD1MqbVKYvy77p90GRa4yznvlSvNt1U1iTXl3ev5SdQnDF%2FUWpFtsPM2dwfeuwg2SVwfmOCbYnQwDh0v%2FO1r0UL%2BHxAvlYkP3f%2Bo7Nz6lwiqGL93PvUK3dRLwGXUMiajOYi%2Bp219MC1v8VpHRpEhk6msKybZaeGH8hPCAdfd4FdQt2rB9qpaB1JQI%2FetWnYHW5eiK%2FHjqdXpzw4wgjWBXnNemzyVtcZ1kiYCMJe5S9m71y8ERjqw0xsXpnRnArIvf4FI%2BMM%2BYcbopMeMKqcjMQGOqUBHRUmN2NrTKrQ%2FVU1NkrApbGRh6F2kORAR8Qc2BBajXaRSF6Pz0q4zkWbgqUQzwUOLGYLtbhXtjeN0o8QqqtVac3zrYFxFWWrDb91g%2BFYw%2FcpJLlP%2FEe9K%2F2YJqBG0olPFcwAiNTmS%2BNEzVoX5ZV6fehnZiDnDtdCNg3JJVualf8nRWlHfUl%2BuDRO4HOMniDivVoqqeyE0Pxlu%2FJiEmkO5fdZb%2BHn&X-Amz-Signature=f8d9648eb3e36df7134f54ec8eee73d49f6d69d6bc28a37fb4a95c2ff2a7ce7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674FIJUUN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCpQc02HtPJtU1F5Om9GXVqjT9YC69wsHWSszxPvQtnwgIgJyAb70VckGjdHv7YSoMUFr6%2F2OJrUmTFIESKYZEcgCwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAAl%2FYTbEvrtIBoYcSrcA4gYOAK1z3fsFSVL7Zbd3pP4YOkCoqex9X357G5Epod6qDWq0zP7AoRUG3Y3V2B7Q8mFmc33w7VO%2BCxUr1pTtDglXcC1zbSXoVkfalvIsFh%2FSxUp5m94USbdlYcrXCU6gRSiDlGrtckGa%2FnLzpB1%2BqnuF8Qy32jbvPs%2BTRLjVFfmEuG3BMRQykXvYHs0AWQ4%2BNBEnOgLjB9%2Bg5fwdjDFvk4Eykt%2FMftrd7yqwMixVLZqK7N2IhZEhzEA%2Be%2Fr8UIgSyby21EZcftA%2FtzzVE5UsAShnp4UbMWhkrt22x3xOZm1DX7JhGIjCbcc0gIUEHb4kIqNuiNhBPlSqIF4A%2F9A9ywVsyEfTizE1B5zrDMCpEghCvD1MqbVKYvy77p90GRa4yznvlSvNt1U1iTXl3ev5SdQnDF%2FUWpFtsPM2dwfeuwg2SVwfmOCbYnQwDh0v%2FO1r0UL%2BHxAvlYkP3f%2Bo7Nz6lwiqGL93PvUK3dRLwGXUMiajOYi%2Bp219MC1v8VpHRpEhk6msKybZaeGH8hPCAdfd4FdQt2rB9qpaB1JQI%2FetWnYHW5eiK%2FHjqdXpzw4wgjWBXnNemzyVtcZ1kiYCMJe5S9m71y8ERjqw0xsXpnRnArIvf4FI%2BMM%2BYcbopMeMKqcjMQGOqUBHRUmN2NrTKrQ%2FVU1NkrApbGRh6F2kORAR8Qc2BBajXaRSF6Pz0q4zkWbgqUQzwUOLGYLtbhXtjeN0o8QqqtVac3zrYFxFWWrDb91g%2BFYw%2FcpJLlP%2FEe9K%2F2YJqBG0olPFcwAiNTmS%2BNEzVoX5ZV6fehnZiDnDtdCNg3JJVualf8nRWlHfUl%2BuDRO4HOMniDivVoqqeyE0Pxlu%2FJiEmkO5fdZb%2BHn&X-Amz-Signature=bb3a35f907547770153f204f304cc04eaa8181cc0d584f8aa336a47e3cc61a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
