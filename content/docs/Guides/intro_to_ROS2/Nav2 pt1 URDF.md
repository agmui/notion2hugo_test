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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNPEODA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGy1xy3OXqyRgPIpez2hY1uvWi8J21IbV%2FnApOhybPPQAiARHH1I%2FWXokkABWfyOw00nh%2BdQfKD3kNs%2FYyMTrh2DFyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv9VYlB%2BJ1Q4%2Bi08TKtwD9yWU1OUIRbaa3cZcFb5A4l7WvbDzz3L4XoEnOQOUuan0gY%2Fyod44NIjhTJfmXuj2WLMba3RoAaYOXcI9d3h5Cqb3ROR6yTJDeNqUXmFh9rjaAObC6%2FBjrsHAaOHRtPh3b2FjMbXXCG8CZhp3X6sbIx3hfp0y9UWQ6fJiAstQavCn4eauxvHcyv0QHF9rQk1l%2FbTbbTNomPrLXWHGbBrokndwZUZoJ3844usdJygNHE1%2Bj3S70H1hZykdk5s2xp9I1EL6xBebAFoji0lYixEl8u8j2l0Fup%2ByTIX3O7%2Fcjgeq1h%2F4imWnR6EihWeW9VU%2FUVgq85ESJHmlBn0Z6Mw%2FjVCyLvOOmMQa9ifFbhVTOaIpHudwGTeOIQAxiS2fcwjal1ILaOui%2BNp2bD1Xgggcr6Yd%2FJvk28cJBYOXUf%2FMZMwjOk3zpM0QXLiKW3ziq7N8gdfeoK%2FjKHe%2FouOpI%2BQMB48gSwxdIaLkTTE2Bdfv0AY2oh9RgveaLmw0l2YpgM6OdTR7gsIK8Bevaz8lvMii%2Ffodefij2b5KAS16XNLoeIMwkFn5iSTJbAmAtqSlH6inai5yRqOHcCJ9m6B8k1NXmCZ%2F1pNpOeulCkc6kZwxK07G8KAOqXH07%2BAdnrkwz5KbxAY6pgFC%2BsqmC8n7gFMyyZt%2FRkuCV0gG58IIT7pTRfR%2FNonHd%2BRZsbg%2BKuG8jtWnQgnwgChVqBJp7TJZnOGMNHfAOxeZYyAsKQ4is%2FttWIVKcBvIhw1XJDagEl047KLNWzZ%2BRTS6zsJSwrMnid9TiBFOQsNkqFW5w2%2Fnej6F5MTBdnwDOpMm5mPh7IK1BQiprLwCEFAXZXQTqYuJKE4IqO4wCrjqIWIqiibg&X-Amz-Signature=4d6f605f26bc1e640d64431e7a064c924d8e38b4f876a3a79598874a86ad9170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNPEODA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGy1xy3OXqyRgPIpez2hY1uvWi8J21IbV%2FnApOhybPPQAiARHH1I%2FWXokkABWfyOw00nh%2BdQfKD3kNs%2FYyMTrh2DFyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv9VYlB%2BJ1Q4%2Bi08TKtwD9yWU1OUIRbaa3cZcFb5A4l7WvbDzz3L4XoEnOQOUuan0gY%2Fyod44NIjhTJfmXuj2WLMba3RoAaYOXcI9d3h5Cqb3ROR6yTJDeNqUXmFh9rjaAObC6%2FBjrsHAaOHRtPh3b2FjMbXXCG8CZhp3X6sbIx3hfp0y9UWQ6fJiAstQavCn4eauxvHcyv0QHF9rQk1l%2FbTbbTNomPrLXWHGbBrokndwZUZoJ3844usdJygNHE1%2Bj3S70H1hZykdk5s2xp9I1EL6xBebAFoji0lYixEl8u8j2l0Fup%2ByTIX3O7%2Fcjgeq1h%2F4imWnR6EihWeW9VU%2FUVgq85ESJHmlBn0Z6Mw%2FjVCyLvOOmMQa9ifFbhVTOaIpHudwGTeOIQAxiS2fcwjal1ILaOui%2BNp2bD1Xgggcr6Yd%2FJvk28cJBYOXUf%2FMZMwjOk3zpM0QXLiKW3ziq7N8gdfeoK%2FjKHe%2FouOpI%2BQMB48gSwxdIaLkTTE2Bdfv0AY2oh9RgveaLmw0l2YpgM6OdTR7gsIK8Bevaz8lvMii%2Ffodefij2b5KAS16XNLoeIMwkFn5iSTJbAmAtqSlH6inai5yRqOHcCJ9m6B8k1NXmCZ%2F1pNpOeulCkc6kZwxK07G8KAOqXH07%2BAdnrkwz5KbxAY6pgFC%2BsqmC8n7gFMyyZt%2FRkuCV0gG58IIT7pTRfR%2FNonHd%2BRZsbg%2BKuG8jtWnQgnwgChVqBJp7TJZnOGMNHfAOxeZYyAsKQ4is%2FttWIVKcBvIhw1XJDagEl047KLNWzZ%2BRTS6zsJSwrMnid9TiBFOQsNkqFW5w2%2Fnej6F5MTBdnwDOpMm5mPh7IK1BQiprLwCEFAXZXQTqYuJKE4IqO4wCrjqIWIqiibg&X-Amz-Signature=e0c0408099be0db77539f46c6b1f97c46c2224fb601522772ea0341729243610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNPEODA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGy1xy3OXqyRgPIpez2hY1uvWi8J21IbV%2FnApOhybPPQAiARHH1I%2FWXokkABWfyOw00nh%2BdQfKD3kNs%2FYyMTrh2DFyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv9VYlB%2BJ1Q4%2Bi08TKtwD9yWU1OUIRbaa3cZcFb5A4l7WvbDzz3L4XoEnOQOUuan0gY%2Fyod44NIjhTJfmXuj2WLMba3RoAaYOXcI9d3h5Cqb3ROR6yTJDeNqUXmFh9rjaAObC6%2FBjrsHAaOHRtPh3b2FjMbXXCG8CZhp3X6sbIx3hfp0y9UWQ6fJiAstQavCn4eauxvHcyv0QHF9rQk1l%2FbTbbTNomPrLXWHGbBrokndwZUZoJ3844usdJygNHE1%2Bj3S70H1hZykdk5s2xp9I1EL6xBebAFoji0lYixEl8u8j2l0Fup%2ByTIX3O7%2Fcjgeq1h%2F4imWnR6EihWeW9VU%2FUVgq85ESJHmlBn0Z6Mw%2FjVCyLvOOmMQa9ifFbhVTOaIpHudwGTeOIQAxiS2fcwjal1ILaOui%2BNp2bD1Xgggcr6Yd%2FJvk28cJBYOXUf%2FMZMwjOk3zpM0QXLiKW3ziq7N8gdfeoK%2FjKHe%2FouOpI%2BQMB48gSwxdIaLkTTE2Bdfv0AY2oh9RgveaLmw0l2YpgM6OdTR7gsIK8Bevaz8lvMii%2Ffodefij2b5KAS16XNLoeIMwkFn5iSTJbAmAtqSlH6inai5yRqOHcCJ9m6B8k1NXmCZ%2F1pNpOeulCkc6kZwxK07G8KAOqXH07%2BAdnrkwz5KbxAY6pgFC%2BsqmC8n7gFMyyZt%2FRkuCV0gG58IIT7pTRfR%2FNonHd%2BRZsbg%2BKuG8jtWnQgnwgChVqBJp7TJZnOGMNHfAOxeZYyAsKQ4is%2FttWIVKcBvIhw1XJDagEl047KLNWzZ%2BRTS6zsJSwrMnid9TiBFOQsNkqFW5w2%2Fnej6F5MTBdnwDOpMm5mPh7IK1BQiprLwCEFAXZXQTqYuJKE4IqO4wCrjqIWIqiibg&X-Amz-Signature=e2d81ab13b2d844ff563c64241f808e40bd3e8f15946e7be8aa330539436d130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNPEODA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGy1xy3OXqyRgPIpez2hY1uvWi8J21IbV%2FnApOhybPPQAiARHH1I%2FWXokkABWfyOw00nh%2BdQfKD3kNs%2FYyMTrh2DFyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv9VYlB%2BJ1Q4%2Bi08TKtwD9yWU1OUIRbaa3cZcFb5A4l7WvbDzz3L4XoEnOQOUuan0gY%2Fyod44NIjhTJfmXuj2WLMba3RoAaYOXcI9d3h5Cqb3ROR6yTJDeNqUXmFh9rjaAObC6%2FBjrsHAaOHRtPh3b2FjMbXXCG8CZhp3X6sbIx3hfp0y9UWQ6fJiAstQavCn4eauxvHcyv0QHF9rQk1l%2FbTbbTNomPrLXWHGbBrokndwZUZoJ3844usdJygNHE1%2Bj3S70H1hZykdk5s2xp9I1EL6xBebAFoji0lYixEl8u8j2l0Fup%2ByTIX3O7%2Fcjgeq1h%2F4imWnR6EihWeW9VU%2FUVgq85ESJHmlBn0Z6Mw%2FjVCyLvOOmMQa9ifFbhVTOaIpHudwGTeOIQAxiS2fcwjal1ILaOui%2BNp2bD1Xgggcr6Yd%2FJvk28cJBYOXUf%2FMZMwjOk3zpM0QXLiKW3ziq7N8gdfeoK%2FjKHe%2FouOpI%2BQMB48gSwxdIaLkTTE2Bdfv0AY2oh9RgveaLmw0l2YpgM6OdTR7gsIK8Bevaz8lvMii%2Ffodefij2b5KAS16XNLoeIMwkFn5iSTJbAmAtqSlH6inai5yRqOHcCJ9m6B8k1NXmCZ%2F1pNpOeulCkc6kZwxK07G8KAOqXH07%2BAdnrkwz5KbxAY6pgFC%2BsqmC8n7gFMyyZt%2FRkuCV0gG58IIT7pTRfR%2FNonHd%2BRZsbg%2BKuG8jtWnQgnwgChVqBJp7TJZnOGMNHfAOxeZYyAsKQ4is%2FttWIVKcBvIhw1XJDagEl047KLNWzZ%2BRTS6zsJSwrMnid9TiBFOQsNkqFW5w2%2Fnej6F5MTBdnwDOpMm5mPh7IK1BQiprLwCEFAXZXQTqYuJKE4IqO4wCrjqIWIqiibg&X-Amz-Signature=12c77f92da2108dd1dbfc63b62edca240f193d25a621fa9dc095c68f6f24be68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNPEODA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGy1xy3OXqyRgPIpez2hY1uvWi8J21IbV%2FnApOhybPPQAiARHH1I%2FWXokkABWfyOw00nh%2BdQfKD3kNs%2FYyMTrh2DFyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv9VYlB%2BJ1Q4%2Bi08TKtwD9yWU1OUIRbaa3cZcFb5A4l7WvbDzz3L4XoEnOQOUuan0gY%2Fyod44NIjhTJfmXuj2WLMba3RoAaYOXcI9d3h5Cqb3ROR6yTJDeNqUXmFh9rjaAObC6%2FBjrsHAaOHRtPh3b2FjMbXXCG8CZhp3X6sbIx3hfp0y9UWQ6fJiAstQavCn4eauxvHcyv0QHF9rQk1l%2FbTbbTNomPrLXWHGbBrokndwZUZoJ3844usdJygNHE1%2Bj3S70H1hZykdk5s2xp9I1EL6xBebAFoji0lYixEl8u8j2l0Fup%2ByTIX3O7%2Fcjgeq1h%2F4imWnR6EihWeW9VU%2FUVgq85ESJHmlBn0Z6Mw%2FjVCyLvOOmMQa9ifFbhVTOaIpHudwGTeOIQAxiS2fcwjal1ILaOui%2BNp2bD1Xgggcr6Yd%2FJvk28cJBYOXUf%2FMZMwjOk3zpM0QXLiKW3ziq7N8gdfeoK%2FjKHe%2FouOpI%2BQMB48gSwxdIaLkTTE2Bdfv0AY2oh9RgveaLmw0l2YpgM6OdTR7gsIK8Bevaz8lvMii%2Ffodefij2b5KAS16XNLoeIMwkFn5iSTJbAmAtqSlH6inai5yRqOHcCJ9m6B8k1NXmCZ%2F1pNpOeulCkc6kZwxK07G8KAOqXH07%2BAdnrkwz5KbxAY6pgFC%2BsqmC8n7gFMyyZt%2FRkuCV0gG58IIT7pTRfR%2FNonHd%2BRZsbg%2BKuG8jtWnQgnwgChVqBJp7TJZnOGMNHfAOxeZYyAsKQ4is%2FttWIVKcBvIhw1XJDagEl047KLNWzZ%2BRTS6zsJSwrMnid9TiBFOQsNkqFW5w2%2Fnej6F5MTBdnwDOpMm5mPh7IK1BQiprLwCEFAXZXQTqYuJKE4IqO4wCrjqIWIqiibg&X-Amz-Signature=fb0533bb098d9569c723bea84905fc116660ddf76b5244c52f9efbb50b0dfad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNPEODA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGy1xy3OXqyRgPIpez2hY1uvWi8J21IbV%2FnApOhybPPQAiARHH1I%2FWXokkABWfyOw00nh%2BdQfKD3kNs%2FYyMTrh2DFyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv9VYlB%2BJ1Q4%2Bi08TKtwD9yWU1OUIRbaa3cZcFb5A4l7WvbDzz3L4XoEnOQOUuan0gY%2Fyod44NIjhTJfmXuj2WLMba3RoAaYOXcI9d3h5Cqb3ROR6yTJDeNqUXmFh9rjaAObC6%2FBjrsHAaOHRtPh3b2FjMbXXCG8CZhp3X6sbIx3hfp0y9UWQ6fJiAstQavCn4eauxvHcyv0QHF9rQk1l%2FbTbbTNomPrLXWHGbBrokndwZUZoJ3844usdJygNHE1%2Bj3S70H1hZykdk5s2xp9I1EL6xBebAFoji0lYixEl8u8j2l0Fup%2ByTIX3O7%2Fcjgeq1h%2F4imWnR6EihWeW9VU%2FUVgq85ESJHmlBn0Z6Mw%2FjVCyLvOOmMQa9ifFbhVTOaIpHudwGTeOIQAxiS2fcwjal1ILaOui%2BNp2bD1Xgggcr6Yd%2FJvk28cJBYOXUf%2FMZMwjOk3zpM0QXLiKW3ziq7N8gdfeoK%2FjKHe%2FouOpI%2BQMB48gSwxdIaLkTTE2Bdfv0AY2oh9RgveaLmw0l2YpgM6OdTR7gsIK8Bevaz8lvMii%2Ffodefij2b5KAS16XNLoeIMwkFn5iSTJbAmAtqSlH6inai5yRqOHcCJ9m6B8k1NXmCZ%2F1pNpOeulCkc6kZwxK07G8KAOqXH07%2BAdnrkwz5KbxAY6pgFC%2BsqmC8n7gFMyyZt%2FRkuCV0gG58IIT7pTRfR%2FNonHd%2BRZsbg%2BKuG8jtWnQgnwgChVqBJp7TJZnOGMNHfAOxeZYyAsKQ4is%2FttWIVKcBvIhw1XJDagEl047KLNWzZ%2BRTS6zsJSwrMnid9TiBFOQsNkqFW5w2%2Fnej6F5MTBdnwDOpMm5mPh7IK1BQiprLwCEFAXZXQTqYuJKE4IqO4wCrjqIWIqiibg&X-Amz-Signature=13a8cc3dfb31626e2a4f569227b901641c013f16bbcf3f485cf30e6ba0c2c349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNPEODA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGy1xy3OXqyRgPIpez2hY1uvWi8J21IbV%2FnApOhybPPQAiARHH1I%2FWXokkABWfyOw00nh%2BdQfKD3kNs%2FYyMTrh2DFyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv9VYlB%2BJ1Q4%2Bi08TKtwD9yWU1OUIRbaa3cZcFb5A4l7WvbDzz3L4XoEnOQOUuan0gY%2Fyod44NIjhTJfmXuj2WLMba3RoAaYOXcI9d3h5Cqb3ROR6yTJDeNqUXmFh9rjaAObC6%2FBjrsHAaOHRtPh3b2FjMbXXCG8CZhp3X6sbIx3hfp0y9UWQ6fJiAstQavCn4eauxvHcyv0QHF9rQk1l%2FbTbbTNomPrLXWHGbBrokndwZUZoJ3844usdJygNHE1%2Bj3S70H1hZykdk5s2xp9I1EL6xBebAFoji0lYixEl8u8j2l0Fup%2ByTIX3O7%2Fcjgeq1h%2F4imWnR6EihWeW9VU%2FUVgq85ESJHmlBn0Z6Mw%2FjVCyLvOOmMQa9ifFbhVTOaIpHudwGTeOIQAxiS2fcwjal1ILaOui%2BNp2bD1Xgggcr6Yd%2FJvk28cJBYOXUf%2FMZMwjOk3zpM0QXLiKW3ziq7N8gdfeoK%2FjKHe%2FouOpI%2BQMB48gSwxdIaLkTTE2Bdfv0AY2oh9RgveaLmw0l2YpgM6OdTR7gsIK8Bevaz8lvMii%2Ffodefij2b5KAS16XNLoeIMwkFn5iSTJbAmAtqSlH6inai5yRqOHcCJ9m6B8k1NXmCZ%2F1pNpOeulCkc6kZwxK07G8KAOqXH07%2BAdnrkwz5KbxAY6pgFC%2BsqmC8n7gFMyyZt%2FRkuCV0gG58IIT7pTRfR%2FNonHd%2BRZsbg%2BKuG8jtWnQgnwgChVqBJp7TJZnOGMNHfAOxeZYyAsKQ4is%2FttWIVKcBvIhw1XJDagEl047KLNWzZ%2BRTS6zsJSwrMnid9TiBFOQsNkqFW5w2%2Fnej6F5MTBdnwDOpMm5mPh7IK1BQiprLwCEFAXZXQTqYuJKE4IqO4wCrjqIWIqiibg&X-Amz-Signature=71562b3b7df817b7bf35c9a74abbf5e0389821ac8e947c416ba9ccd0ad6de191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNPEODA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGy1xy3OXqyRgPIpez2hY1uvWi8J21IbV%2FnApOhybPPQAiARHH1I%2FWXokkABWfyOw00nh%2BdQfKD3kNs%2FYyMTrh2DFyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv9VYlB%2BJ1Q4%2Bi08TKtwD9yWU1OUIRbaa3cZcFb5A4l7WvbDzz3L4XoEnOQOUuan0gY%2Fyod44NIjhTJfmXuj2WLMba3RoAaYOXcI9d3h5Cqb3ROR6yTJDeNqUXmFh9rjaAObC6%2FBjrsHAaOHRtPh3b2FjMbXXCG8CZhp3X6sbIx3hfp0y9UWQ6fJiAstQavCn4eauxvHcyv0QHF9rQk1l%2FbTbbTNomPrLXWHGbBrokndwZUZoJ3844usdJygNHE1%2Bj3S70H1hZykdk5s2xp9I1EL6xBebAFoji0lYixEl8u8j2l0Fup%2ByTIX3O7%2Fcjgeq1h%2F4imWnR6EihWeW9VU%2FUVgq85ESJHmlBn0Z6Mw%2FjVCyLvOOmMQa9ifFbhVTOaIpHudwGTeOIQAxiS2fcwjal1ILaOui%2BNp2bD1Xgggcr6Yd%2FJvk28cJBYOXUf%2FMZMwjOk3zpM0QXLiKW3ziq7N8gdfeoK%2FjKHe%2FouOpI%2BQMB48gSwxdIaLkTTE2Bdfv0AY2oh9RgveaLmw0l2YpgM6OdTR7gsIK8Bevaz8lvMii%2Ffodefij2b5KAS16XNLoeIMwkFn5iSTJbAmAtqSlH6inai5yRqOHcCJ9m6B8k1NXmCZ%2F1pNpOeulCkc6kZwxK07G8KAOqXH07%2BAdnrkwz5KbxAY6pgFC%2BsqmC8n7gFMyyZt%2FRkuCV0gG58IIT7pTRfR%2FNonHd%2BRZsbg%2BKuG8jtWnQgnwgChVqBJp7TJZnOGMNHfAOxeZYyAsKQ4is%2FttWIVKcBvIhw1XJDagEl047KLNWzZ%2BRTS6zsJSwrMnid9TiBFOQsNkqFW5w2%2Fnej6F5MTBdnwDOpMm5mPh7IK1BQiprLwCEFAXZXQTqYuJKE4IqO4wCrjqIWIqiibg&X-Amz-Signature=05f863d61676ca6c68371eabc3fbf61b2fc14f81d8897eae67416b2128696811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNPEODA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGy1xy3OXqyRgPIpez2hY1uvWi8J21IbV%2FnApOhybPPQAiARHH1I%2FWXokkABWfyOw00nh%2BdQfKD3kNs%2FYyMTrh2DFyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv9VYlB%2BJ1Q4%2Bi08TKtwD9yWU1OUIRbaa3cZcFb5A4l7WvbDzz3L4XoEnOQOUuan0gY%2Fyod44NIjhTJfmXuj2WLMba3RoAaYOXcI9d3h5Cqb3ROR6yTJDeNqUXmFh9rjaAObC6%2FBjrsHAaOHRtPh3b2FjMbXXCG8CZhp3X6sbIx3hfp0y9UWQ6fJiAstQavCn4eauxvHcyv0QHF9rQk1l%2FbTbbTNomPrLXWHGbBrokndwZUZoJ3844usdJygNHE1%2Bj3S70H1hZykdk5s2xp9I1EL6xBebAFoji0lYixEl8u8j2l0Fup%2ByTIX3O7%2Fcjgeq1h%2F4imWnR6EihWeW9VU%2FUVgq85ESJHmlBn0Z6Mw%2FjVCyLvOOmMQa9ifFbhVTOaIpHudwGTeOIQAxiS2fcwjal1ILaOui%2BNp2bD1Xgggcr6Yd%2FJvk28cJBYOXUf%2FMZMwjOk3zpM0QXLiKW3ziq7N8gdfeoK%2FjKHe%2FouOpI%2BQMB48gSwxdIaLkTTE2Bdfv0AY2oh9RgveaLmw0l2YpgM6OdTR7gsIK8Bevaz8lvMii%2Ffodefij2b5KAS16XNLoeIMwkFn5iSTJbAmAtqSlH6inai5yRqOHcCJ9m6B8k1NXmCZ%2F1pNpOeulCkc6kZwxK07G8KAOqXH07%2BAdnrkwz5KbxAY6pgFC%2BsqmC8n7gFMyyZt%2FRkuCV0gG58IIT7pTRfR%2FNonHd%2BRZsbg%2BKuG8jtWnQgnwgChVqBJp7TJZnOGMNHfAOxeZYyAsKQ4is%2FttWIVKcBvIhw1XJDagEl047KLNWzZ%2BRTS6zsJSwrMnid9TiBFOQsNkqFW5w2%2Fnej6F5MTBdnwDOpMm5mPh7IK1BQiprLwCEFAXZXQTqYuJKE4IqO4wCrjqIWIqiibg&X-Amz-Signature=c481b01803661efb050f69c76a8c86aff7910e1a702486a26d3839e135fa44cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNPEODA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGy1xy3OXqyRgPIpez2hY1uvWi8J21IbV%2FnApOhybPPQAiARHH1I%2FWXokkABWfyOw00nh%2BdQfKD3kNs%2FYyMTrh2DFyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv9VYlB%2BJ1Q4%2Bi08TKtwD9yWU1OUIRbaa3cZcFb5A4l7WvbDzz3L4XoEnOQOUuan0gY%2Fyod44NIjhTJfmXuj2WLMba3RoAaYOXcI9d3h5Cqb3ROR6yTJDeNqUXmFh9rjaAObC6%2FBjrsHAaOHRtPh3b2FjMbXXCG8CZhp3X6sbIx3hfp0y9UWQ6fJiAstQavCn4eauxvHcyv0QHF9rQk1l%2FbTbbTNomPrLXWHGbBrokndwZUZoJ3844usdJygNHE1%2Bj3S70H1hZykdk5s2xp9I1EL6xBebAFoji0lYixEl8u8j2l0Fup%2ByTIX3O7%2Fcjgeq1h%2F4imWnR6EihWeW9VU%2FUVgq85ESJHmlBn0Z6Mw%2FjVCyLvOOmMQa9ifFbhVTOaIpHudwGTeOIQAxiS2fcwjal1ILaOui%2BNp2bD1Xgggcr6Yd%2FJvk28cJBYOXUf%2FMZMwjOk3zpM0QXLiKW3ziq7N8gdfeoK%2FjKHe%2FouOpI%2BQMB48gSwxdIaLkTTE2Bdfv0AY2oh9RgveaLmw0l2YpgM6OdTR7gsIK8Bevaz8lvMii%2Ffodefij2b5KAS16XNLoeIMwkFn5iSTJbAmAtqSlH6inai5yRqOHcCJ9m6B8k1NXmCZ%2F1pNpOeulCkc6kZwxK07G8KAOqXH07%2BAdnrkwz5KbxAY6pgFC%2BsqmC8n7gFMyyZt%2FRkuCV0gG58IIT7pTRfR%2FNonHd%2BRZsbg%2BKuG8jtWnQgnwgChVqBJp7TJZnOGMNHfAOxeZYyAsKQ4is%2FttWIVKcBvIhw1XJDagEl047KLNWzZ%2BRTS6zsJSwrMnid9TiBFOQsNkqFW5w2%2Fnej6F5MTBdnwDOpMm5mPh7IK1BQiprLwCEFAXZXQTqYuJKE4IqO4wCrjqIWIqiibg&X-Amz-Signature=4a4530d93640cbb052b6c06cb602f89709735ea89f8b76d09dffefa0461376ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNPEODA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGy1xy3OXqyRgPIpez2hY1uvWi8J21IbV%2FnApOhybPPQAiARHH1I%2FWXokkABWfyOw00nh%2BdQfKD3kNs%2FYyMTrh2DFyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv9VYlB%2BJ1Q4%2Bi08TKtwD9yWU1OUIRbaa3cZcFb5A4l7WvbDzz3L4XoEnOQOUuan0gY%2Fyod44NIjhTJfmXuj2WLMba3RoAaYOXcI9d3h5Cqb3ROR6yTJDeNqUXmFh9rjaAObC6%2FBjrsHAaOHRtPh3b2FjMbXXCG8CZhp3X6sbIx3hfp0y9UWQ6fJiAstQavCn4eauxvHcyv0QHF9rQk1l%2FbTbbTNomPrLXWHGbBrokndwZUZoJ3844usdJygNHE1%2Bj3S70H1hZykdk5s2xp9I1EL6xBebAFoji0lYixEl8u8j2l0Fup%2ByTIX3O7%2Fcjgeq1h%2F4imWnR6EihWeW9VU%2FUVgq85ESJHmlBn0Z6Mw%2FjVCyLvOOmMQa9ifFbhVTOaIpHudwGTeOIQAxiS2fcwjal1ILaOui%2BNp2bD1Xgggcr6Yd%2FJvk28cJBYOXUf%2FMZMwjOk3zpM0QXLiKW3ziq7N8gdfeoK%2FjKHe%2FouOpI%2BQMB48gSwxdIaLkTTE2Bdfv0AY2oh9RgveaLmw0l2YpgM6OdTR7gsIK8Bevaz8lvMii%2Ffodefij2b5KAS16XNLoeIMwkFn5iSTJbAmAtqSlH6inai5yRqOHcCJ9m6B8k1NXmCZ%2F1pNpOeulCkc6kZwxK07G8KAOqXH07%2BAdnrkwz5KbxAY6pgFC%2BsqmC8n7gFMyyZt%2FRkuCV0gG58IIT7pTRfR%2FNonHd%2BRZsbg%2BKuG8jtWnQgnwgChVqBJp7TJZnOGMNHfAOxeZYyAsKQ4is%2FttWIVKcBvIhw1XJDagEl047KLNWzZ%2BRTS6zsJSwrMnid9TiBFOQsNkqFW5w2%2Fnej6F5MTBdnwDOpMm5mPh7IK1BQiprLwCEFAXZXQTqYuJKE4IqO4wCrjqIWIqiibg&X-Amz-Signature=7e42a5d7208443df465625c977cb7ab9a9c574d485038daacd5f45201c29d487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNPEODA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGy1xy3OXqyRgPIpez2hY1uvWi8J21IbV%2FnApOhybPPQAiARHH1I%2FWXokkABWfyOw00nh%2BdQfKD3kNs%2FYyMTrh2DFyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv9VYlB%2BJ1Q4%2Bi08TKtwD9yWU1OUIRbaa3cZcFb5A4l7WvbDzz3L4XoEnOQOUuan0gY%2Fyod44NIjhTJfmXuj2WLMba3RoAaYOXcI9d3h5Cqb3ROR6yTJDeNqUXmFh9rjaAObC6%2FBjrsHAaOHRtPh3b2FjMbXXCG8CZhp3X6sbIx3hfp0y9UWQ6fJiAstQavCn4eauxvHcyv0QHF9rQk1l%2FbTbbTNomPrLXWHGbBrokndwZUZoJ3844usdJygNHE1%2Bj3S70H1hZykdk5s2xp9I1EL6xBebAFoji0lYixEl8u8j2l0Fup%2ByTIX3O7%2Fcjgeq1h%2F4imWnR6EihWeW9VU%2FUVgq85ESJHmlBn0Z6Mw%2FjVCyLvOOmMQa9ifFbhVTOaIpHudwGTeOIQAxiS2fcwjal1ILaOui%2BNp2bD1Xgggcr6Yd%2FJvk28cJBYOXUf%2FMZMwjOk3zpM0QXLiKW3ziq7N8gdfeoK%2FjKHe%2FouOpI%2BQMB48gSwxdIaLkTTE2Bdfv0AY2oh9RgveaLmw0l2YpgM6OdTR7gsIK8Bevaz8lvMii%2Ffodefij2b5KAS16XNLoeIMwkFn5iSTJbAmAtqSlH6inai5yRqOHcCJ9m6B8k1NXmCZ%2F1pNpOeulCkc6kZwxK07G8KAOqXH07%2BAdnrkwz5KbxAY6pgFC%2BsqmC8n7gFMyyZt%2FRkuCV0gG58IIT7pTRfR%2FNonHd%2BRZsbg%2BKuG8jtWnQgnwgChVqBJp7TJZnOGMNHfAOxeZYyAsKQ4is%2FttWIVKcBvIhw1XJDagEl047KLNWzZ%2BRTS6zsJSwrMnid9TiBFOQsNkqFW5w2%2Fnej6F5MTBdnwDOpMm5mPh7IK1BQiprLwCEFAXZXQTqYuJKE4IqO4wCrjqIWIqiibg&X-Amz-Signature=e07d45ed49bf9db79f56e6a302a3eaa5b8d7c593a2c3274228c8939683b3a22c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNPEODA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGy1xy3OXqyRgPIpez2hY1uvWi8J21IbV%2FnApOhybPPQAiARHH1I%2FWXokkABWfyOw00nh%2BdQfKD3kNs%2FYyMTrh2DFyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv9VYlB%2BJ1Q4%2Bi08TKtwD9yWU1OUIRbaa3cZcFb5A4l7WvbDzz3L4XoEnOQOUuan0gY%2Fyod44NIjhTJfmXuj2WLMba3RoAaYOXcI9d3h5Cqb3ROR6yTJDeNqUXmFh9rjaAObC6%2FBjrsHAaOHRtPh3b2FjMbXXCG8CZhp3X6sbIx3hfp0y9UWQ6fJiAstQavCn4eauxvHcyv0QHF9rQk1l%2FbTbbTNomPrLXWHGbBrokndwZUZoJ3844usdJygNHE1%2Bj3S70H1hZykdk5s2xp9I1EL6xBebAFoji0lYixEl8u8j2l0Fup%2ByTIX3O7%2Fcjgeq1h%2F4imWnR6EihWeW9VU%2FUVgq85ESJHmlBn0Z6Mw%2FjVCyLvOOmMQa9ifFbhVTOaIpHudwGTeOIQAxiS2fcwjal1ILaOui%2BNp2bD1Xgggcr6Yd%2FJvk28cJBYOXUf%2FMZMwjOk3zpM0QXLiKW3ziq7N8gdfeoK%2FjKHe%2FouOpI%2BQMB48gSwxdIaLkTTE2Bdfv0AY2oh9RgveaLmw0l2YpgM6OdTR7gsIK8Bevaz8lvMii%2Ffodefij2b5KAS16XNLoeIMwkFn5iSTJbAmAtqSlH6inai5yRqOHcCJ9m6B8k1NXmCZ%2F1pNpOeulCkc6kZwxK07G8KAOqXH07%2BAdnrkwz5KbxAY6pgFC%2BsqmC8n7gFMyyZt%2FRkuCV0gG58IIT7pTRfR%2FNonHd%2BRZsbg%2BKuG8jtWnQgnwgChVqBJp7TJZnOGMNHfAOxeZYyAsKQ4is%2FttWIVKcBvIhw1XJDagEl047KLNWzZ%2BRTS6zsJSwrMnid9TiBFOQsNkqFW5w2%2Fnej6F5MTBdnwDOpMm5mPh7IK1BQiprLwCEFAXZXQTqYuJKE4IqO4wCrjqIWIqiibg&X-Amz-Signature=1d2dfdaaf2d6b0dca52b0ae796ba209842d1a237c18b8feec566fdc67b38c1c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNPEODA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGy1xy3OXqyRgPIpez2hY1uvWi8J21IbV%2FnApOhybPPQAiARHH1I%2FWXokkABWfyOw00nh%2BdQfKD3kNs%2FYyMTrh2DFyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv9VYlB%2BJ1Q4%2Bi08TKtwD9yWU1OUIRbaa3cZcFb5A4l7WvbDzz3L4XoEnOQOUuan0gY%2Fyod44NIjhTJfmXuj2WLMba3RoAaYOXcI9d3h5Cqb3ROR6yTJDeNqUXmFh9rjaAObC6%2FBjrsHAaOHRtPh3b2FjMbXXCG8CZhp3X6sbIx3hfp0y9UWQ6fJiAstQavCn4eauxvHcyv0QHF9rQk1l%2FbTbbTNomPrLXWHGbBrokndwZUZoJ3844usdJygNHE1%2Bj3S70H1hZykdk5s2xp9I1EL6xBebAFoji0lYixEl8u8j2l0Fup%2ByTIX3O7%2Fcjgeq1h%2F4imWnR6EihWeW9VU%2FUVgq85ESJHmlBn0Z6Mw%2FjVCyLvOOmMQa9ifFbhVTOaIpHudwGTeOIQAxiS2fcwjal1ILaOui%2BNp2bD1Xgggcr6Yd%2FJvk28cJBYOXUf%2FMZMwjOk3zpM0QXLiKW3ziq7N8gdfeoK%2FjKHe%2FouOpI%2BQMB48gSwxdIaLkTTE2Bdfv0AY2oh9RgveaLmw0l2YpgM6OdTR7gsIK8Bevaz8lvMii%2Ffodefij2b5KAS16XNLoeIMwkFn5iSTJbAmAtqSlH6inai5yRqOHcCJ9m6B8k1NXmCZ%2F1pNpOeulCkc6kZwxK07G8KAOqXH07%2BAdnrkwz5KbxAY6pgFC%2BsqmC8n7gFMyyZt%2FRkuCV0gG58IIT7pTRfR%2FNonHd%2BRZsbg%2BKuG8jtWnQgnwgChVqBJp7TJZnOGMNHfAOxeZYyAsKQ4is%2FttWIVKcBvIhw1XJDagEl047KLNWzZ%2BRTS6zsJSwrMnid9TiBFOQsNkqFW5w2%2Fnej6F5MTBdnwDOpMm5mPh7IK1BQiprLwCEFAXZXQTqYuJKE4IqO4wCrjqIWIqiibg&X-Amz-Signature=a4d33af855852652c4c2a5431a265f9ab28e0558f7b7ebf3896f0fdaef52256d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SB2EKHF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEMTGYaCpBlRmGcjsm22Ee1dlmxLG4zvd7ULau7AlpiyAiBmMrRgpK89%2BEcexteoTtjc9%2BqH4rRpkfLSU3FQY2oRlCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9nn6T7fithzsqAfoKtwDWAa1dqQSipsLLkDNTC12gA6UWE8TjTDdfWa2%2FTGbbeN8khealxq04F9sMfz65rhE71%2FRqA0DHIRKyYlpGBF2VZtZdPI%2BMi3dw4jarwnwl9I7SWZaaPPvAb2SLej3kYKS4cOpFVo14MNHnJFiykjXLzfrZyfOmyPNCTfpwFIC8VSOb1sLhtHAtWHbBbR%2BDi%2BW7nVfv%2FqI6jMqMI%2F2Be7%2FSay5RlqAxO3DzqR0ImMGoWvcMFR%2FqMmtaBVDIwCL1F%2FvBnKsC1TBiPu74GhLA9tn7pHEA2Hl%2BWTwNhpGwrnlYjZlKJPOw4MmVqZ50GlSkeZlNnxMCjuVgOFWqYBEB2gvEMMW0xilKcT8E49IIqxk2Sb%2B5rq1t2k6SggWeshWjzdOoDnWhWtbxnsl8E%2FqVdJ2BakBcz9irgb5ThuK6C8rLsgimqACz9pKoej4wJfD3noy5KKmvScEhCA9AJaPtutcMwvJdxSO2pX7WFbpb9bLq0SITW0jkhaUz5yY6%2BTaE1jlfHImMFKsYCghtY7Bng5mLWuM1cc9Qw2bf1IdSmcPg6l8i5oaQZMbKqQ8dq1hPHXIkmBCW7k1i5hXvJLG8%2BjI7z%2FdRBmWUs7KLTKPw%2Bs1fpR1btYolY0E3SlFqpIwv5ObxAY6pgGnUXGtk1Mgu4Bvb1LqVc1xy%2Fk6arKkgv0%2F6EKnZP4%2FhEPCt5hW9vNH%2BDet4EIHq1LpIH8ACKMYUyFuTvXkpcjj6r0Z%2FrRv5BEr8DkDSVtsKTn70NGc08aSd8eWjYJZgGiO3VMP71JZ1hQ9id70pVTkJTO4KKmw79JyN%2Fp2riOGS07HJA4AlNo9DWS9EVZCZV9Up4pW8RoSARcNnBOJYI3WIxRP9t4o&X-Amz-Signature=f293cf45425f9d4f2fdcc940c064c1e77dc23aff5b7881ee4602d45feeb1ca99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SB2EKHF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEMTGYaCpBlRmGcjsm22Ee1dlmxLG4zvd7ULau7AlpiyAiBmMrRgpK89%2BEcexteoTtjc9%2BqH4rRpkfLSU3FQY2oRlCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9nn6T7fithzsqAfoKtwDWAa1dqQSipsLLkDNTC12gA6UWE8TjTDdfWa2%2FTGbbeN8khealxq04F9sMfz65rhE71%2FRqA0DHIRKyYlpGBF2VZtZdPI%2BMi3dw4jarwnwl9I7SWZaaPPvAb2SLej3kYKS4cOpFVo14MNHnJFiykjXLzfrZyfOmyPNCTfpwFIC8VSOb1sLhtHAtWHbBbR%2BDi%2BW7nVfv%2FqI6jMqMI%2F2Be7%2FSay5RlqAxO3DzqR0ImMGoWvcMFR%2FqMmtaBVDIwCL1F%2FvBnKsC1TBiPu74GhLA9tn7pHEA2Hl%2BWTwNhpGwrnlYjZlKJPOw4MmVqZ50GlSkeZlNnxMCjuVgOFWqYBEB2gvEMMW0xilKcT8E49IIqxk2Sb%2B5rq1t2k6SggWeshWjzdOoDnWhWtbxnsl8E%2FqVdJ2BakBcz9irgb5ThuK6C8rLsgimqACz9pKoej4wJfD3noy5KKmvScEhCA9AJaPtutcMwvJdxSO2pX7WFbpb9bLq0SITW0jkhaUz5yY6%2BTaE1jlfHImMFKsYCghtY7Bng5mLWuM1cc9Qw2bf1IdSmcPg6l8i5oaQZMbKqQ8dq1hPHXIkmBCW7k1i5hXvJLG8%2BjI7z%2FdRBmWUs7KLTKPw%2Bs1fpR1btYolY0E3SlFqpIwv5ObxAY6pgGnUXGtk1Mgu4Bvb1LqVc1xy%2Fk6arKkgv0%2F6EKnZP4%2FhEPCt5hW9vNH%2BDet4EIHq1LpIH8ACKMYUyFuTvXkpcjj6r0Z%2FrRv5BEr8DkDSVtsKTn70NGc08aSd8eWjYJZgGiO3VMP71JZ1hQ9id70pVTkJTO4KKmw79JyN%2Fp2riOGS07HJA4AlNo9DWS9EVZCZV9Up4pW8RoSARcNnBOJYI3WIxRP9t4o&X-Amz-Signature=6177d024f385603741388f89482fab5063c4707dbe7234a1ca421f5673e3ed40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SB2EKHF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEMTGYaCpBlRmGcjsm22Ee1dlmxLG4zvd7ULau7AlpiyAiBmMrRgpK89%2BEcexteoTtjc9%2BqH4rRpkfLSU3FQY2oRlCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9nn6T7fithzsqAfoKtwDWAa1dqQSipsLLkDNTC12gA6UWE8TjTDdfWa2%2FTGbbeN8khealxq04F9sMfz65rhE71%2FRqA0DHIRKyYlpGBF2VZtZdPI%2BMi3dw4jarwnwl9I7SWZaaPPvAb2SLej3kYKS4cOpFVo14MNHnJFiykjXLzfrZyfOmyPNCTfpwFIC8VSOb1sLhtHAtWHbBbR%2BDi%2BW7nVfv%2FqI6jMqMI%2F2Be7%2FSay5RlqAxO3DzqR0ImMGoWvcMFR%2FqMmtaBVDIwCL1F%2FvBnKsC1TBiPu74GhLA9tn7pHEA2Hl%2BWTwNhpGwrnlYjZlKJPOw4MmVqZ50GlSkeZlNnxMCjuVgOFWqYBEB2gvEMMW0xilKcT8E49IIqxk2Sb%2B5rq1t2k6SggWeshWjzdOoDnWhWtbxnsl8E%2FqVdJ2BakBcz9irgb5ThuK6C8rLsgimqACz9pKoej4wJfD3noy5KKmvScEhCA9AJaPtutcMwvJdxSO2pX7WFbpb9bLq0SITW0jkhaUz5yY6%2BTaE1jlfHImMFKsYCghtY7Bng5mLWuM1cc9Qw2bf1IdSmcPg6l8i5oaQZMbKqQ8dq1hPHXIkmBCW7k1i5hXvJLG8%2BjI7z%2FdRBmWUs7KLTKPw%2Bs1fpR1btYolY0E3SlFqpIwv5ObxAY6pgGnUXGtk1Mgu4Bvb1LqVc1xy%2Fk6arKkgv0%2F6EKnZP4%2FhEPCt5hW9vNH%2BDet4EIHq1LpIH8ACKMYUyFuTvXkpcjj6r0Z%2FrRv5BEr8DkDSVtsKTn70NGc08aSd8eWjYJZgGiO3VMP71JZ1hQ9id70pVTkJTO4KKmw79JyN%2Fp2riOGS07HJA4AlNo9DWS9EVZCZV9Up4pW8RoSARcNnBOJYI3WIxRP9t4o&X-Amz-Signature=b6c9ce0e40db0dda9457d2d5083b1b8c9fef4f8c34226428c3a49fc40cd101e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SB2EKHF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEMTGYaCpBlRmGcjsm22Ee1dlmxLG4zvd7ULau7AlpiyAiBmMrRgpK89%2BEcexteoTtjc9%2BqH4rRpkfLSU3FQY2oRlCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9nn6T7fithzsqAfoKtwDWAa1dqQSipsLLkDNTC12gA6UWE8TjTDdfWa2%2FTGbbeN8khealxq04F9sMfz65rhE71%2FRqA0DHIRKyYlpGBF2VZtZdPI%2BMi3dw4jarwnwl9I7SWZaaPPvAb2SLej3kYKS4cOpFVo14MNHnJFiykjXLzfrZyfOmyPNCTfpwFIC8VSOb1sLhtHAtWHbBbR%2BDi%2BW7nVfv%2FqI6jMqMI%2F2Be7%2FSay5RlqAxO3DzqR0ImMGoWvcMFR%2FqMmtaBVDIwCL1F%2FvBnKsC1TBiPu74GhLA9tn7pHEA2Hl%2BWTwNhpGwrnlYjZlKJPOw4MmVqZ50GlSkeZlNnxMCjuVgOFWqYBEB2gvEMMW0xilKcT8E49IIqxk2Sb%2B5rq1t2k6SggWeshWjzdOoDnWhWtbxnsl8E%2FqVdJ2BakBcz9irgb5ThuK6C8rLsgimqACz9pKoej4wJfD3noy5KKmvScEhCA9AJaPtutcMwvJdxSO2pX7WFbpb9bLq0SITW0jkhaUz5yY6%2BTaE1jlfHImMFKsYCghtY7Bng5mLWuM1cc9Qw2bf1IdSmcPg6l8i5oaQZMbKqQ8dq1hPHXIkmBCW7k1i5hXvJLG8%2BjI7z%2FdRBmWUs7KLTKPw%2Bs1fpR1btYolY0E3SlFqpIwv5ObxAY6pgGnUXGtk1Mgu4Bvb1LqVc1xy%2Fk6arKkgv0%2F6EKnZP4%2FhEPCt5hW9vNH%2BDet4EIHq1LpIH8ACKMYUyFuTvXkpcjj6r0Z%2FrRv5BEr8DkDSVtsKTn70NGc08aSd8eWjYJZgGiO3VMP71JZ1hQ9id70pVTkJTO4KKmw79JyN%2Fp2riOGS07HJA4AlNo9DWS9EVZCZV9Up4pW8RoSARcNnBOJYI3WIxRP9t4o&X-Amz-Signature=8ecbe6a94dd82247cfacf25d2b9991840fcbe033972380611717345a909bbb06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SB2EKHF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEMTGYaCpBlRmGcjsm22Ee1dlmxLG4zvd7ULau7AlpiyAiBmMrRgpK89%2BEcexteoTtjc9%2BqH4rRpkfLSU3FQY2oRlCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9nn6T7fithzsqAfoKtwDWAa1dqQSipsLLkDNTC12gA6UWE8TjTDdfWa2%2FTGbbeN8khealxq04F9sMfz65rhE71%2FRqA0DHIRKyYlpGBF2VZtZdPI%2BMi3dw4jarwnwl9I7SWZaaPPvAb2SLej3kYKS4cOpFVo14MNHnJFiykjXLzfrZyfOmyPNCTfpwFIC8VSOb1sLhtHAtWHbBbR%2BDi%2BW7nVfv%2FqI6jMqMI%2F2Be7%2FSay5RlqAxO3DzqR0ImMGoWvcMFR%2FqMmtaBVDIwCL1F%2FvBnKsC1TBiPu74GhLA9tn7pHEA2Hl%2BWTwNhpGwrnlYjZlKJPOw4MmVqZ50GlSkeZlNnxMCjuVgOFWqYBEB2gvEMMW0xilKcT8E49IIqxk2Sb%2B5rq1t2k6SggWeshWjzdOoDnWhWtbxnsl8E%2FqVdJ2BakBcz9irgb5ThuK6C8rLsgimqACz9pKoej4wJfD3noy5KKmvScEhCA9AJaPtutcMwvJdxSO2pX7WFbpb9bLq0SITW0jkhaUz5yY6%2BTaE1jlfHImMFKsYCghtY7Bng5mLWuM1cc9Qw2bf1IdSmcPg6l8i5oaQZMbKqQ8dq1hPHXIkmBCW7k1i5hXvJLG8%2BjI7z%2FdRBmWUs7KLTKPw%2Bs1fpR1btYolY0E3SlFqpIwv5ObxAY6pgGnUXGtk1Mgu4Bvb1LqVc1xy%2Fk6arKkgv0%2F6EKnZP4%2FhEPCt5hW9vNH%2BDet4EIHq1LpIH8ACKMYUyFuTvXkpcjj6r0Z%2FrRv5BEr8DkDSVtsKTn70NGc08aSd8eWjYJZgGiO3VMP71JZ1hQ9id70pVTkJTO4KKmw79JyN%2Fp2riOGS07HJA4AlNo9DWS9EVZCZV9Up4pW8RoSARcNnBOJYI3WIxRP9t4o&X-Amz-Signature=7f0c43c8dd9497f99bfda6bfb27010003d371d1ecf433b0d706b56d6d3ec7efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SB2EKHF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEMTGYaCpBlRmGcjsm22Ee1dlmxLG4zvd7ULau7AlpiyAiBmMrRgpK89%2BEcexteoTtjc9%2BqH4rRpkfLSU3FQY2oRlCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9nn6T7fithzsqAfoKtwDWAa1dqQSipsLLkDNTC12gA6UWE8TjTDdfWa2%2FTGbbeN8khealxq04F9sMfz65rhE71%2FRqA0DHIRKyYlpGBF2VZtZdPI%2BMi3dw4jarwnwl9I7SWZaaPPvAb2SLej3kYKS4cOpFVo14MNHnJFiykjXLzfrZyfOmyPNCTfpwFIC8VSOb1sLhtHAtWHbBbR%2BDi%2BW7nVfv%2FqI6jMqMI%2F2Be7%2FSay5RlqAxO3DzqR0ImMGoWvcMFR%2FqMmtaBVDIwCL1F%2FvBnKsC1TBiPu74GhLA9tn7pHEA2Hl%2BWTwNhpGwrnlYjZlKJPOw4MmVqZ50GlSkeZlNnxMCjuVgOFWqYBEB2gvEMMW0xilKcT8E49IIqxk2Sb%2B5rq1t2k6SggWeshWjzdOoDnWhWtbxnsl8E%2FqVdJ2BakBcz9irgb5ThuK6C8rLsgimqACz9pKoej4wJfD3noy5KKmvScEhCA9AJaPtutcMwvJdxSO2pX7WFbpb9bLq0SITW0jkhaUz5yY6%2BTaE1jlfHImMFKsYCghtY7Bng5mLWuM1cc9Qw2bf1IdSmcPg6l8i5oaQZMbKqQ8dq1hPHXIkmBCW7k1i5hXvJLG8%2BjI7z%2FdRBmWUs7KLTKPw%2Bs1fpR1btYolY0E3SlFqpIwv5ObxAY6pgGnUXGtk1Mgu4Bvb1LqVc1xy%2Fk6arKkgv0%2F6EKnZP4%2FhEPCt5hW9vNH%2BDet4EIHq1LpIH8ACKMYUyFuTvXkpcjj6r0Z%2FrRv5BEr8DkDSVtsKTn70NGc08aSd8eWjYJZgGiO3VMP71JZ1hQ9id70pVTkJTO4KKmw79JyN%2Fp2riOGS07HJA4AlNo9DWS9EVZCZV9Up4pW8RoSARcNnBOJYI3WIxRP9t4o&X-Amz-Signature=525d2f139b0f2a945f39fc7f2bdb2148b43d013a77ecad8e46b2c704c9e8217c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
