---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-19T09:18:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-19T09:18:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5W5SO7%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B1tjbXsGT8VCPdDS5vOYp9%2BX9CFy8x7YmOzv%2FSE%2BaugIhAIkRZFjnilgf1%2FL9ygqi7lJQSH2lD%2Fv7QxeEDRAUJOaUKv8DCCsQABoMNjM3NDIzMTgzODA1IgyjytgNfOk5sJbWzPcq3AOwLy3poe7UUPyrN74oruf47EwDQhMY8UFpahHl3CEsbe4L3Dun0hMdYxqjx1rToum4UWVtyayYEr6swS6Mfz4plvUhTkwmkuS%2F4rtIVy4QZvMMpOpgLipN3VfSU%2BqiPr6ZA%2BbOyBAA5Wf9BEK0avyu46ywmX1%2F1xsEdPivuNgmhPHesXX28GOUtbrIY0y%2FJpn5Qe6KqfJM5jdQO8LXZBOmi7v80gbOb%2BBTfQiXk%2B9B%2BFK0Q0VVzpav2f66Q31rPCH7wR%2FIhnFS1MpGhdQgEMSI%2F70Kw88Gr06hBTcuYcFEnHBL6u5KK7C3dQqHdfeZumKHe49Jrs157dhBD34eS6oKSVNoNSQfGdc82zYVSZ2bSuYyAz%2F7PPZ5Cc4lmfT4%2BCbuDQmeliOJnXf35XmpCljf3nxqmdPoWKrPGsUmXJR8LfPjMF4ReneRz6zEzVexBw5qpan7LtazpLq7wJ16PkM%2Br7wNp%2FPEdPXUWqbttIQfKsANCEnirdJFkbPYyFk9cg33Hr4chWxMOjku4qOrHHahoSRFiwwCPzPl%2FbjHM5fJQWi7dJUv%2Ft9N3s1WhPMZzGfdK4Qzmdt1LxOO8jKgPzlwmi%2FOuwOOquQjQMUEpUskxYraCW2dkjadDpM22DC68uzRBjqkAf3ZYfTOd4cQWyC8%2BYB%2BYUPOvkujKn%2BcLmvRY2txTKuGGYAT1sHZUWWea2QFts2ArKBuhnXxCGadF%2FzXUPxXdQq1i1HMHoYevpTY6ClKYosaMHXDscJVdMLABz1KDEQJyb7hlF0Gx%2FiDM72D%2Bi%2FJMtfFcJSsiYFrrZrHcxZ9QOwiI1QBxdR%2BznzH1lad4CHbodvjje9jczHPkANkZ%2BqDctmhK7V6&X-Amz-Signature=b537c70701eba9ebd954fd806daa7302202d06eb9ee9364c8b3a2bc5c1addacc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5W5SO7%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B1tjbXsGT8VCPdDS5vOYp9%2BX9CFy8x7YmOzv%2FSE%2BaugIhAIkRZFjnilgf1%2FL9ygqi7lJQSH2lD%2Fv7QxeEDRAUJOaUKv8DCCsQABoMNjM3NDIzMTgzODA1IgyjytgNfOk5sJbWzPcq3AOwLy3poe7UUPyrN74oruf47EwDQhMY8UFpahHl3CEsbe4L3Dun0hMdYxqjx1rToum4UWVtyayYEr6swS6Mfz4plvUhTkwmkuS%2F4rtIVy4QZvMMpOpgLipN3VfSU%2BqiPr6ZA%2BbOyBAA5Wf9BEK0avyu46ywmX1%2F1xsEdPivuNgmhPHesXX28GOUtbrIY0y%2FJpn5Qe6KqfJM5jdQO8LXZBOmi7v80gbOb%2BBTfQiXk%2B9B%2BFK0Q0VVzpav2f66Q31rPCH7wR%2FIhnFS1MpGhdQgEMSI%2F70Kw88Gr06hBTcuYcFEnHBL6u5KK7C3dQqHdfeZumKHe49Jrs157dhBD34eS6oKSVNoNSQfGdc82zYVSZ2bSuYyAz%2F7PPZ5Cc4lmfT4%2BCbuDQmeliOJnXf35XmpCljf3nxqmdPoWKrPGsUmXJR8LfPjMF4ReneRz6zEzVexBw5qpan7LtazpLq7wJ16PkM%2Br7wNp%2FPEdPXUWqbttIQfKsANCEnirdJFkbPYyFk9cg33Hr4chWxMOjku4qOrHHahoSRFiwwCPzPl%2FbjHM5fJQWi7dJUv%2Ft9N3s1WhPMZzGfdK4Qzmdt1LxOO8jKgPzlwmi%2FOuwOOquQjQMUEpUskxYraCW2dkjadDpM22DC68uzRBjqkAf3ZYfTOd4cQWyC8%2BYB%2BYUPOvkujKn%2BcLmvRY2txTKuGGYAT1sHZUWWea2QFts2ArKBuhnXxCGadF%2FzXUPxXdQq1i1HMHoYevpTY6ClKYosaMHXDscJVdMLABz1KDEQJyb7hlF0Gx%2FiDM72D%2Bi%2FJMtfFcJSsiYFrrZrHcxZ9QOwiI1QBxdR%2BznzH1lad4CHbodvjje9jczHPkANkZ%2BqDctmhK7V6&X-Amz-Signature=ca96607b33197cbf3de4a815ddd6216162d60673943211d93cbe8d0a02b82699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5W5SO7%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B1tjbXsGT8VCPdDS5vOYp9%2BX9CFy8x7YmOzv%2FSE%2BaugIhAIkRZFjnilgf1%2FL9ygqi7lJQSH2lD%2Fv7QxeEDRAUJOaUKv8DCCsQABoMNjM3NDIzMTgzODA1IgyjytgNfOk5sJbWzPcq3AOwLy3poe7UUPyrN74oruf47EwDQhMY8UFpahHl3CEsbe4L3Dun0hMdYxqjx1rToum4UWVtyayYEr6swS6Mfz4plvUhTkwmkuS%2F4rtIVy4QZvMMpOpgLipN3VfSU%2BqiPr6ZA%2BbOyBAA5Wf9BEK0avyu46ywmX1%2F1xsEdPivuNgmhPHesXX28GOUtbrIY0y%2FJpn5Qe6KqfJM5jdQO8LXZBOmi7v80gbOb%2BBTfQiXk%2B9B%2BFK0Q0VVzpav2f66Q31rPCH7wR%2FIhnFS1MpGhdQgEMSI%2F70Kw88Gr06hBTcuYcFEnHBL6u5KK7C3dQqHdfeZumKHe49Jrs157dhBD34eS6oKSVNoNSQfGdc82zYVSZ2bSuYyAz%2F7PPZ5Cc4lmfT4%2BCbuDQmeliOJnXf35XmpCljf3nxqmdPoWKrPGsUmXJR8LfPjMF4ReneRz6zEzVexBw5qpan7LtazpLq7wJ16PkM%2Br7wNp%2FPEdPXUWqbttIQfKsANCEnirdJFkbPYyFk9cg33Hr4chWxMOjku4qOrHHahoSRFiwwCPzPl%2FbjHM5fJQWi7dJUv%2Ft9N3s1WhPMZzGfdK4Qzmdt1LxOO8jKgPzlwmi%2FOuwOOquQjQMUEpUskxYraCW2dkjadDpM22DC68uzRBjqkAf3ZYfTOd4cQWyC8%2BYB%2BYUPOvkujKn%2BcLmvRY2txTKuGGYAT1sHZUWWea2QFts2ArKBuhnXxCGadF%2FzXUPxXdQq1i1HMHoYevpTY6ClKYosaMHXDscJVdMLABz1KDEQJyb7hlF0Gx%2FiDM72D%2Bi%2FJMtfFcJSsiYFrrZrHcxZ9QOwiI1QBxdR%2BznzH1lad4CHbodvjje9jczHPkANkZ%2BqDctmhK7V6&X-Amz-Signature=588d85f513931ecfcc65c82f9887dc1d507d4540de120aa7dd5ae31f7d7871f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5W5SO7%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B1tjbXsGT8VCPdDS5vOYp9%2BX9CFy8x7YmOzv%2FSE%2BaugIhAIkRZFjnilgf1%2FL9ygqi7lJQSH2lD%2Fv7QxeEDRAUJOaUKv8DCCsQABoMNjM3NDIzMTgzODA1IgyjytgNfOk5sJbWzPcq3AOwLy3poe7UUPyrN74oruf47EwDQhMY8UFpahHl3CEsbe4L3Dun0hMdYxqjx1rToum4UWVtyayYEr6swS6Mfz4plvUhTkwmkuS%2F4rtIVy4QZvMMpOpgLipN3VfSU%2BqiPr6ZA%2BbOyBAA5Wf9BEK0avyu46ywmX1%2F1xsEdPivuNgmhPHesXX28GOUtbrIY0y%2FJpn5Qe6KqfJM5jdQO8LXZBOmi7v80gbOb%2BBTfQiXk%2B9B%2BFK0Q0VVzpav2f66Q31rPCH7wR%2FIhnFS1MpGhdQgEMSI%2F70Kw88Gr06hBTcuYcFEnHBL6u5KK7C3dQqHdfeZumKHe49Jrs157dhBD34eS6oKSVNoNSQfGdc82zYVSZ2bSuYyAz%2F7PPZ5Cc4lmfT4%2BCbuDQmeliOJnXf35XmpCljf3nxqmdPoWKrPGsUmXJR8LfPjMF4ReneRz6zEzVexBw5qpan7LtazpLq7wJ16PkM%2Br7wNp%2FPEdPXUWqbttIQfKsANCEnirdJFkbPYyFk9cg33Hr4chWxMOjku4qOrHHahoSRFiwwCPzPl%2FbjHM5fJQWi7dJUv%2Ft9N3s1WhPMZzGfdK4Qzmdt1LxOO8jKgPzlwmi%2FOuwOOquQjQMUEpUskxYraCW2dkjadDpM22DC68uzRBjqkAf3ZYfTOd4cQWyC8%2BYB%2BYUPOvkujKn%2BcLmvRY2txTKuGGYAT1sHZUWWea2QFts2ArKBuhnXxCGadF%2FzXUPxXdQq1i1HMHoYevpTY6ClKYosaMHXDscJVdMLABz1KDEQJyb7hlF0Gx%2FiDM72D%2Bi%2FJMtfFcJSsiYFrrZrHcxZ9QOwiI1QBxdR%2BznzH1lad4CHbodvjje9jczHPkANkZ%2BqDctmhK7V6&X-Amz-Signature=f9cf20d40f29019cdeff9236c71706c8a6fb9a49ef31c6a9d45ada130fe53091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5W5SO7%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B1tjbXsGT8VCPdDS5vOYp9%2BX9CFy8x7YmOzv%2FSE%2BaugIhAIkRZFjnilgf1%2FL9ygqi7lJQSH2lD%2Fv7QxeEDRAUJOaUKv8DCCsQABoMNjM3NDIzMTgzODA1IgyjytgNfOk5sJbWzPcq3AOwLy3poe7UUPyrN74oruf47EwDQhMY8UFpahHl3CEsbe4L3Dun0hMdYxqjx1rToum4UWVtyayYEr6swS6Mfz4plvUhTkwmkuS%2F4rtIVy4QZvMMpOpgLipN3VfSU%2BqiPr6ZA%2BbOyBAA5Wf9BEK0avyu46ywmX1%2F1xsEdPivuNgmhPHesXX28GOUtbrIY0y%2FJpn5Qe6KqfJM5jdQO8LXZBOmi7v80gbOb%2BBTfQiXk%2B9B%2BFK0Q0VVzpav2f66Q31rPCH7wR%2FIhnFS1MpGhdQgEMSI%2F70Kw88Gr06hBTcuYcFEnHBL6u5KK7C3dQqHdfeZumKHe49Jrs157dhBD34eS6oKSVNoNSQfGdc82zYVSZ2bSuYyAz%2F7PPZ5Cc4lmfT4%2BCbuDQmeliOJnXf35XmpCljf3nxqmdPoWKrPGsUmXJR8LfPjMF4ReneRz6zEzVexBw5qpan7LtazpLq7wJ16PkM%2Br7wNp%2FPEdPXUWqbttIQfKsANCEnirdJFkbPYyFk9cg33Hr4chWxMOjku4qOrHHahoSRFiwwCPzPl%2FbjHM5fJQWi7dJUv%2Ft9N3s1WhPMZzGfdK4Qzmdt1LxOO8jKgPzlwmi%2FOuwOOquQjQMUEpUskxYraCW2dkjadDpM22DC68uzRBjqkAf3ZYfTOd4cQWyC8%2BYB%2BYUPOvkujKn%2BcLmvRY2txTKuGGYAT1sHZUWWea2QFts2ArKBuhnXxCGadF%2FzXUPxXdQq1i1HMHoYevpTY6ClKYosaMHXDscJVdMLABz1KDEQJyb7hlF0Gx%2FiDM72D%2Bi%2FJMtfFcJSsiYFrrZrHcxZ9QOwiI1QBxdR%2BznzH1lad4CHbodvjje9jczHPkANkZ%2BqDctmhK7V6&X-Amz-Signature=8c7c5a5aaed83d7cd19728de19eeed5d93a6dde92e76026e8212e5bc74ceab63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5W5SO7%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B1tjbXsGT8VCPdDS5vOYp9%2BX9CFy8x7YmOzv%2FSE%2BaugIhAIkRZFjnilgf1%2FL9ygqi7lJQSH2lD%2Fv7QxeEDRAUJOaUKv8DCCsQABoMNjM3NDIzMTgzODA1IgyjytgNfOk5sJbWzPcq3AOwLy3poe7UUPyrN74oruf47EwDQhMY8UFpahHl3CEsbe4L3Dun0hMdYxqjx1rToum4UWVtyayYEr6swS6Mfz4plvUhTkwmkuS%2F4rtIVy4QZvMMpOpgLipN3VfSU%2BqiPr6ZA%2BbOyBAA5Wf9BEK0avyu46ywmX1%2F1xsEdPivuNgmhPHesXX28GOUtbrIY0y%2FJpn5Qe6KqfJM5jdQO8LXZBOmi7v80gbOb%2BBTfQiXk%2B9B%2BFK0Q0VVzpav2f66Q31rPCH7wR%2FIhnFS1MpGhdQgEMSI%2F70Kw88Gr06hBTcuYcFEnHBL6u5KK7C3dQqHdfeZumKHe49Jrs157dhBD34eS6oKSVNoNSQfGdc82zYVSZ2bSuYyAz%2F7PPZ5Cc4lmfT4%2BCbuDQmeliOJnXf35XmpCljf3nxqmdPoWKrPGsUmXJR8LfPjMF4ReneRz6zEzVexBw5qpan7LtazpLq7wJ16PkM%2Br7wNp%2FPEdPXUWqbttIQfKsANCEnirdJFkbPYyFk9cg33Hr4chWxMOjku4qOrHHahoSRFiwwCPzPl%2FbjHM5fJQWi7dJUv%2Ft9N3s1WhPMZzGfdK4Qzmdt1LxOO8jKgPzlwmi%2FOuwOOquQjQMUEpUskxYraCW2dkjadDpM22DC68uzRBjqkAf3ZYfTOd4cQWyC8%2BYB%2BYUPOvkujKn%2BcLmvRY2txTKuGGYAT1sHZUWWea2QFts2ArKBuhnXxCGadF%2FzXUPxXdQq1i1HMHoYevpTY6ClKYosaMHXDscJVdMLABz1KDEQJyb7hlF0Gx%2FiDM72D%2Bi%2FJMtfFcJSsiYFrrZrHcxZ9QOwiI1QBxdR%2BznzH1lad4CHbodvjje9jczHPkANkZ%2BqDctmhK7V6&X-Amz-Signature=600938eb28532eb83c4a9614bfa47fc0fe5855c440c8f0ffc89fe3952dfcb4a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5W5SO7%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B1tjbXsGT8VCPdDS5vOYp9%2BX9CFy8x7YmOzv%2FSE%2BaugIhAIkRZFjnilgf1%2FL9ygqi7lJQSH2lD%2Fv7QxeEDRAUJOaUKv8DCCsQABoMNjM3NDIzMTgzODA1IgyjytgNfOk5sJbWzPcq3AOwLy3poe7UUPyrN74oruf47EwDQhMY8UFpahHl3CEsbe4L3Dun0hMdYxqjx1rToum4UWVtyayYEr6swS6Mfz4plvUhTkwmkuS%2F4rtIVy4QZvMMpOpgLipN3VfSU%2BqiPr6ZA%2BbOyBAA5Wf9BEK0avyu46ywmX1%2F1xsEdPivuNgmhPHesXX28GOUtbrIY0y%2FJpn5Qe6KqfJM5jdQO8LXZBOmi7v80gbOb%2BBTfQiXk%2B9B%2BFK0Q0VVzpav2f66Q31rPCH7wR%2FIhnFS1MpGhdQgEMSI%2F70Kw88Gr06hBTcuYcFEnHBL6u5KK7C3dQqHdfeZumKHe49Jrs157dhBD34eS6oKSVNoNSQfGdc82zYVSZ2bSuYyAz%2F7PPZ5Cc4lmfT4%2BCbuDQmeliOJnXf35XmpCljf3nxqmdPoWKrPGsUmXJR8LfPjMF4ReneRz6zEzVexBw5qpan7LtazpLq7wJ16PkM%2Br7wNp%2FPEdPXUWqbttIQfKsANCEnirdJFkbPYyFk9cg33Hr4chWxMOjku4qOrHHahoSRFiwwCPzPl%2FbjHM5fJQWi7dJUv%2Ft9N3s1WhPMZzGfdK4Qzmdt1LxOO8jKgPzlwmi%2FOuwOOquQjQMUEpUskxYraCW2dkjadDpM22DC68uzRBjqkAf3ZYfTOd4cQWyC8%2BYB%2BYUPOvkujKn%2BcLmvRY2txTKuGGYAT1sHZUWWea2QFts2ArKBuhnXxCGadF%2FzXUPxXdQq1i1HMHoYevpTY6ClKYosaMHXDscJVdMLABz1KDEQJyb7hlF0Gx%2FiDM72D%2Bi%2FJMtfFcJSsiYFrrZrHcxZ9QOwiI1QBxdR%2BznzH1lad4CHbodvjje9jczHPkANkZ%2BqDctmhK7V6&X-Amz-Signature=26a19767441d08c1391fdca08a20884769552e9857608fa6d012bddc500c70e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5W5SO7%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B1tjbXsGT8VCPdDS5vOYp9%2BX9CFy8x7YmOzv%2FSE%2BaugIhAIkRZFjnilgf1%2FL9ygqi7lJQSH2lD%2Fv7QxeEDRAUJOaUKv8DCCsQABoMNjM3NDIzMTgzODA1IgyjytgNfOk5sJbWzPcq3AOwLy3poe7UUPyrN74oruf47EwDQhMY8UFpahHl3CEsbe4L3Dun0hMdYxqjx1rToum4UWVtyayYEr6swS6Mfz4plvUhTkwmkuS%2F4rtIVy4QZvMMpOpgLipN3VfSU%2BqiPr6ZA%2BbOyBAA5Wf9BEK0avyu46ywmX1%2F1xsEdPivuNgmhPHesXX28GOUtbrIY0y%2FJpn5Qe6KqfJM5jdQO8LXZBOmi7v80gbOb%2BBTfQiXk%2B9B%2BFK0Q0VVzpav2f66Q31rPCH7wR%2FIhnFS1MpGhdQgEMSI%2F70Kw88Gr06hBTcuYcFEnHBL6u5KK7C3dQqHdfeZumKHe49Jrs157dhBD34eS6oKSVNoNSQfGdc82zYVSZ2bSuYyAz%2F7PPZ5Cc4lmfT4%2BCbuDQmeliOJnXf35XmpCljf3nxqmdPoWKrPGsUmXJR8LfPjMF4ReneRz6zEzVexBw5qpan7LtazpLq7wJ16PkM%2Br7wNp%2FPEdPXUWqbttIQfKsANCEnirdJFkbPYyFk9cg33Hr4chWxMOjku4qOrHHahoSRFiwwCPzPl%2FbjHM5fJQWi7dJUv%2Ft9N3s1WhPMZzGfdK4Qzmdt1LxOO8jKgPzlwmi%2FOuwOOquQjQMUEpUskxYraCW2dkjadDpM22DC68uzRBjqkAf3ZYfTOd4cQWyC8%2BYB%2BYUPOvkujKn%2BcLmvRY2txTKuGGYAT1sHZUWWea2QFts2ArKBuhnXxCGadF%2FzXUPxXdQq1i1HMHoYevpTY6ClKYosaMHXDscJVdMLABz1KDEQJyb7hlF0Gx%2FiDM72D%2Bi%2FJMtfFcJSsiYFrrZrHcxZ9QOwiI1QBxdR%2BznzH1lad4CHbodvjje9jczHPkANkZ%2BqDctmhK7V6&X-Amz-Signature=f330868c5b179dea09193c2f2749046529a2a6aae2e3fb7374768c72bf9d5038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5W5SO7%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B1tjbXsGT8VCPdDS5vOYp9%2BX9CFy8x7YmOzv%2FSE%2BaugIhAIkRZFjnilgf1%2FL9ygqi7lJQSH2lD%2Fv7QxeEDRAUJOaUKv8DCCsQABoMNjM3NDIzMTgzODA1IgyjytgNfOk5sJbWzPcq3AOwLy3poe7UUPyrN74oruf47EwDQhMY8UFpahHl3CEsbe4L3Dun0hMdYxqjx1rToum4UWVtyayYEr6swS6Mfz4plvUhTkwmkuS%2F4rtIVy4QZvMMpOpgLipN3VfSU%2BqiPr6ZA%2BbOyBAA5Wf9BEK0avyu46ywmX1%2F1xsEdPivuNgmhPHesXX28GOUtbrIY0y%2FJpn5Qe6KqfJM5jdQO8LXZBOmi7v80gbOb%2BBTfQiXk%2B9B%2BFK0Q0VVzpav2f66Q31rPCH7wR%2FIhnFS1MpGhdQgEMSI%2F70Kw88Gr06hBTcuYcFEnHBL6u5KK7C3dQqHdfeZumKHe49Jrs157dhBD34eS6oKSVNoNSQfGdc82zYVSZ2bSuYyAz%2F7PPZ5Cc4lmfT4%2BCbuDQmeliOJnXf35XmpCljf3nxqmdPoWKrPGsUmXJR8LfPjMF4ReneRz6zEzVexBw5qpan7LtazpLq7wJ16PkM%2Br7wNp%2FPEdPXUWqbttIQfKsANCEnirdJFkbPYyFk9cg33Hr4chWxMOjku4qOrHHahoSRFiwwCPzPl%2FbjHM5fJQWi7dJUv%2Ft9N3s1WhPMZzGfdK4Qzmdt1LxOO8jKgPzlwmi%2FOuwOOquQjQMUEpUskxYraCW2dkjadDpM22DC68uzRBjqkAf3ZYfTOd4cQWyC8%2BYB%2BYUPOvkujKn%2BcLmvRY2txTKuGGYAT1sHZUWWea2QFts2ArKBuhnXxCGadF%2FzXUPxXdQq1i1HMHoYevpTY6ClKYosaMHXDscJVdMLABz1KDEQJyb7hlF0Gx%2FiDM72D%2Bi%2FJMtfFcJSsiYFrrZrHcxZ9QOwiI1QBxdR%2BznzH1lad4CHbodvjje9jczHPkANkZ%2BqDctmhK7V6&X-Amz-Signature=c320aa50c801e4fbcd5c8f6f33446e7e1d8366fc28ce6148137593519e0db687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5W5SO7%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B1tjbXsGT8VCPdDS5vOYp9%2BX9CFy8x7YmOzv%2FSE%2BaugIhAIkRZFjnilgf1%2FL9ygqi7lJQSH2lD%2Fv7QxeEDRAUJOaUKv8DCCsQABoMNjM3NDIzMTgzODA1IgyjytgNfOk5sJbWzPcq3AOwLy3poe7UUPyrN74oruf47EwDQhMY8UFpahHl3CEsbe4L3Dun0hMdYxqjx1rToum4UWVtyayYEr6swS6Mfz4plvUhTkwmkuS%2F4rtIVy4QZvMMpOpgLipN3VfSU%2BqiPr6ZA%2BbOyBAA5Wf9BEK0avyu46ywmX1%2F1xsEdPivuNgmhPHesXX28GOUtbrIY0y%2FJpn5Qe6KqfJM5jdQO8LXZBOmi7v80gbOb%2BBTfQiXk%2B9B%2BFK0Q0VVzpav2f66Q31rPCH7wR%2FIhnFS1MpGhdQgEMSI%2F70Kw88Gr06hBTcuYcFEnHBL6u5KK7C3dQqHdfeZumKHe49Jrs157dhBD34eS6oKSVNoNSQfGdc82zYVSZ2bSuYyAz%2F7PPZ5Cc4lmfT4%2BCbuDQmeliOJnXf35XmpCljf3nxqmdPoWKrPGsUmXJR8LfPjMF4ReneRz6zEzVexBw5qpan7LtazpLq7wJ16PkM%2Br7wNp%2FPEdPXUWqbttIQfKsANCEnirdJFkbPYyFk9cg33Hr4chWxMOjku4qOrHHahoSRFiwwCPzPl%2FbjHM5fJQWi7dJUv%2Ft9N3s1WhPMZzGfdK4Qzmdt1LxOO8jKgPzlwmi%2FOuwOOquQjQMUEpUskxYraCW2dkjadDpM22DC68uzRBjqkAf3ZYfTOd4cQWyC8%2BYB%2BYUPOvkujKn%2BcLmvRY2txTKuGGYAT1sHZUWWea2QFts2ArKBuhnXxCGadF%2FzXUPxXdQq1i1HMHoYevpTY6ClKYosaMHXDscJVdMLABz1KDEQJyb7hlF0Gx%2FiDM72D%2Bi%2FJMtfFcJSsiYFrrZrHcxZ9QOwiI1QBxdR%2BznzH1lad4CHbodvjje9jczHPkANkZ%2BqDctmhK7V6&X-Amz-Signature=eaca95df79ce712524fa6b3b3863e8dec1ddf34d8cf97a6863e6b148b7592eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start add these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNUIEIV3%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHZPry6riOjxv%2B%2Bqz12IdwDGj5QLJY60h8fBRArRzRSEAiEA%2BNYMuikc0%2BTeKjn4RemQKsNhMDeYs8NqfvvnmpI8gZ4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDE9dH%2FPL8BlWa4C6CircA6Ha%2FQQmJfj6l%2BwSquPl55slei6n0HraEp77DADl8GLNzYuUpeTYkkqIsXcGRh8QqnVIWWh%2B46C%2Frlw2Z7aodHo3NojkH3727LYmZuUkLDftERMoalSC4fGbTwT3xvNgdqPLegalgRSr6s%2B5skKt%2FRdfC1rZddj3qkiTzATFR9d0rBbaKErduiLD1mGN5drZcPVBTa26Yz7ukiPhB5jurX3sz1bg%2FaQ5qSWzA%2B6wysilEvIrVeAoWRZix%2B4BoyWAuK%2FGCagU%2Bh16z2L6EJ5qA2fqWANWxQVH2mceM0rYawM7evT3ppqH%2F%2FbQKuVaAlVWX%2B78HYOtA%2BKcTKBSqdqTG6TQz1CWYlKvL9LZRADLXsM7T6sRKtQBR3z8PMgg5fr1jL0J%2BCquXcE89B50PVCrhgujoMp0z4ZwhCm84kYav3OyQjctqcLrEn6Dh3%2FFTnGryqIsHIofZ3zevZtVxMc75kyqR54vW9ZWsCtfzANWyXDDAyvM5S2G10cZ4vFwKBP6SNrPSdIOcSwaFodHVyZd1Iqg7Wi5M2%2FO0iGCL61GphCtmzKTIOyTyrWUGHL8CUsnoUcQKYmU%2F8AiwRRQTSQFZrRnnU%2BiNILcGBZ3JKBhu2Nnyyhyu0Iby89VVVYWMJzw7NEGOqUBeXPfCFx7V%2F0whZWmA798B%2FRajRpRl53wGqRcs%2Fon03pCYHNRA4S2buJgehnGHgR41%2Fy%2BYjuvZEIbuy4yPTPw83%2FfBWRqFIXiL52GoF18CK2rc7L9itFWjnxZAKf79i068zrAB3P5vkKCWN2FCW6jTchmBvymFOtFv2bUd9jvUHrjPPZG2gpNrQJKtZryhxQxTD6BraB%2BtZtjrlEPZ82%2FCdtOXFdq&X-Amz-Signature=6db3361ae24fe545517f2d8db5383618643a699c9a4681226b9bdf308fc6890e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All urdf files must start with these tags to be valid urdf. All of our code will go in between the `<robot>` tags 

Next lets put down some constants we will use later

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPN43VQ%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDTm3nUI3C11pt%2F1ny91AKKiqDOR1y4YB6oTMvr86XRLAiBASJpsg%2BPLTPbLQ5eMCidlR%2BnFnU5UnaWxyy2zn0ILQCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMlx65h1FVj6Ek3TyXKtwDiA50qY4jVOV9QuvDfXhncWwbum%2BewadaIy4p9hf0b20rU0apggTQhaRzJkvrRFM9uHUVUWI3j5oD2PFWGpAq%2B9sHYVjvSYzrYlcr5bF2AtMTmB%2BzXXdkhzwkAxLBYRVtAnFfYb7f6xFml56Jb1%2F0UDIO%2B8tQPBZ9bTtkeoqzCY7b%2F2JSZBHnlX1f1J92MuO3W5%2BIL12HkI876%2BSaBW6aMrzApvE8u4oB%2FEL41tAspl6P9a94zXOnf9VLbaNGKNhkjQDTXq433fVYCVXlRafjVnoobUTfCsr7yrZ%2BqRVzbua%2BLWkS0eF%2Bl06u4V%2FlnCNGpmadWgawyYDxgZhFADFbgjyI0D%2BP3tTqGEgtd84SAv5nVnjAfJrUEqP%2FXrNLVuV%2F9YGOs4PFzjIek9UOlKIi93p8GeOdX%2BNKtEKINDmKDWRMWUkInyTjQriUReCnKBbE1nzzeJ%2BjCcbS1lx%2FC3LnkZUJK7rrFdjZ7eMHC%2FgfAxLIR3w2fZxEWoyz5hZpNGk7%2F4bPbQUr3s2reuxUdLNFOmJ52EVhQkXZtIIIArNIM1gsuXqfrfd%2FZN7cGb20pjB1dtxiEiPinnXxjnl2vC8Mim1wIiVjegEVVwYJC141zfsQGsYUSnsxWj5985Qwx%2B%2Fs0QY6pgEwOc8ozzC6JD7lXzzSTJpE8DiJ9QtjjPZHjyO51jEgNVfaVrGZJO2jHyw4iPbTfhWHTSuXxTLSmqxlJxVlF95N1FDe%2Bc8ILC1yyPo0GDry%2B4PMEwN50%2F2rKHpeXVSqxOPRJMfRsiNOTk2IB6jtjwXLwDSHGSD6%2BkwTRDzDS3%2BnW15WpmGsOn17Y9aXreX2JQGpTdkUwY4RYHsgSi5Vgn%2BsJfLht5L1&X-Amz-Signature=c48b45aa2ea5faf027ae36b21decf075ae2faf4d57519917d808aaf219b09d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
  <summary>{{< markdownify >}}What do the variables represent?{{< /markdownify >}}</summary>
  
`base_width`, `base_length`, `base_height` are the dimensions of the main body of the robot.

`wheel_radius` and `wheel_width` are the dimensions of the 2 back wheels.

`wheel_ygap` is the gap between the chassis and wheel.

`wheel_zoff` and `wheel_xoff` is the offset between the z-axis and x-axis.

`caster_xoff` is the offset of the caster wheel (the little ball) along the x-axis.

</details>



Lets now make a link for the body and call it `base_link` to be the “_root” of our robot._ This is common convention in ROS and is required to be called `base_link` for later parts in this guide

For now we are only going to add the visual part of the link to see if our design is correct. Later we will add collision and inertia.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGG3DDB%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICvSxgq4reXERh7vujqvHVe90DLuGnWYAwTvv7geXaxxAiBMpVPCrnmg%2BApoh8h%2FJ%2FAE9Z9adrvMtz8m968klCjdxSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMC6gUwkWAy6xs%2FRX9KtwDf%2BNaqLEk7d6TN1vV%2FYjURYUN1UVyUtJopLVZA%2BhrrXK8RTxP%2BhY%2BGzS7s51Un2bXdjJemB1OonL3pRBq%2BntkTkITfFd78f6jCwrCHUPXw6dsgSKeTUbgZZjizCag4Kv0o2k24ds73vMhYVUpSzzGm3PM7gal1lZcRsIxf%2BpcNDXPujlpGJoP4hLxELs5AAoxyKSygu9Wgr0rOKgLb6iW%2Fhw29hEz0feIKY%2FLTHwjUBzuN3b0IDDM3QgsUKUSlm0kmwjawczgBKuWncpNCfj0R3EcPI5d%2FMe3qdUFZVkhg0JjYJBrZpTBKSbZfpUEzhytY%2Fi0XeShtInu7xz4HZN32EEbF6w4QzNgs3WaMiPIDwTqX62f3%2FW50waZ1OAY2x%2Bj%2FoVra7cJwh3gdvGSU9C%2F57JFC1NkWn4bUzSTdCSQxo0lxtYVdq11Z6VXaYq53J739aPDh1V9F7Mrb%2BhJxdTzBd9tZ7MspzQ%2F80UCGr0fmXzNgchNdONC5SH0uRrEAt8KPjtMmuzf%2F2dGP14uKDRP0NLzkNMh5WlMfv5%2BeW7FPWLjcNozzx0QJQTvQgh8fXF0XH7eOXg8wP5LLm5luEAWuAVd0o7osYEYYRKw5Qp42AisrQmtT55CsxNZGGEwxu%2Fs0QY6pgFPIP%2FYXGSLCE3cHBU3GpOHA%2Fmx%2BzucPyGzR14oIRI%2FdA0DJSnDrTBf7Iuyh53Z8dYIIyP8sZd6dKsR6U0SzHMrRtoqvUsUGyNqIXubwp8Zl9doSQMEf6fFVWbLGjB%2BEis9c%2BSrmhKRN%2BbneTQpswVYLKVyKAAeyx78gRm2ofm6XbnYEbj1EmlCuM8Enr2UZjuMKoSWmwV%2B1JWDg6yzRZv0DxfJHn5B&X-Amz-Signature=aa5b270b9dd3f2a6abac10902cf0c0eaf2e824d8080ec10cb886df9f66791c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5W5SO7%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B1tjbXsGT8VCPdDS5vOYp9%2BX9CFy8x7YmOzv%2FSE%2BaugIhAIkRZFjnilgf1%2FL9ygqi7lJQSH2lD%2Fv7QxeEDRAUJOaUKv8DCCsQABoMNjM3NDIzMTgzODA1IgyjytgNfOk5sJbWzPcq3AOwLy3poe7UUPyrN74oruf47EwDQhMY8UFpahHl3CEsbe4L3Dun0hMdYxqjx1rToum4UWVtyayYEr6swS6Mfz4plvUhTkwmkuS%2F4rtIVy4QZvMMpOpgLipN3VfSU%2BqiPr6ZA%2BbOyBAA5Wf9BEK0avyu46ywmX1%2F1xsEdPivuNgmhPHesXX28GOUtbrIY0y%2FJpn5Qe6KqfJM5jdQO8LXZBOmi7v80gbOb%2BBTfQiXk%2B9B%2BFK0Q0VVzpav2f66Q31rPCH7wR%2FIhnFS1MpGhdQgEMSI%2F70Kw88Gr06hBTcuYcFEnHBL6u5KK7C3dQqHdfeZumKHe49Jrs157dhBD34eS6oKSVNoNSQfGdc82zYVSZ2bSuYyAz%2F7PPZ5Cc4lmfT4%2BCbuDQmeliOJnXf35XmpCljf3nxqmdPoWKrPGsUmXJR8LfPjMF4ReneRz6zEzVexBw5qpan7LtazpLq7wJ16PkM%2Br7wNp%2FPEdPXUWqbttIQfKsANCEnirdJFkbPYyFk9cg33Hr4chWxMOjku4qOrHHahoSRFiwwCPzPl%2FbjHM5fJQWi7dJUv%2Ft9N3s1WhPMZzGfdK4Qzmdt1LxOO8jKgPzlwmi%2FOuwOOquQjQMUEpUskxYraCW2dkjadDpM22DC68uzRBjqkAf3ZYfTOd4cQWyC8%2BYB%2BYUPOvkujKn%2BcLmvRY2txTKuGGYAT1sHZUWWea2QFts2ArKBuhnXxCGadF%2FzXUPxXdQq1i1HMHoYevpTY6ClKYosaMHXDscJVdMLABz1KDEQJyb7hlF0Gx%2FiDM72D%2Bi%2FJMtfFcJSsiYFrrZrHcxZ9QOwiI1QBxdR%2BznzH1lad4CHbodvjje9jczHPkANkZ%2BqDctmhK7V6&X-Amz-Signature=fa9a7d69ac40c2267f1fbc446d24f0b2fdb3b69753ec67ef0cd24946c9904641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</link>` lets define a link called `base_footprint`. This link is just used for path finding to know where the robot is on a 2D map.

Later on in this guide we will see how it gets used.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7TLBLU%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD7AmMuBqsakTcYD0UaPnsUD6rK331yt30vE3Yc8CUbdwIgC9bG5yLmEGr82W4RJMldT922KUsjS9xxCnzuKhwAFSQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDL0MLOewBx%2FtJqqNhCrcA62U822jDPBL96JWgA38AaVLO1M%2F6DKImtOR3IyW6uEzP8TJk9f2An0kT5mleAqpRUVyK704xDdeamUsvE1XXn806B0WP%2B58tieGjLW4ThYkLDyJ3F64juXi90Hk6p4J%2FSpSvdeaUXwgaNZa8GC9R%2BUI1TNoOc31fSIdXV8GAQlAuX6WOMPE5%2BPMeVh0H1rln%2FVtA4cAHq7I2F9yJZdHoAOuiPgBY1ubBlWbnb%2FeCRwHpFPfK140C9DffLxbANNbf6ht0XoHxU2%2FQtjkO0YY1hbQzfrclqARfj9gM9einKjE8V5al5LTWthdws3%2FZrPEMIGyrqM4Z0lhmpgXwfiveObVbvWkG9Ylud9Y7sH9mCVQ1cI1Z0MU6mB%2BSeCnY%2BAj5gEf4MJf7Lp6%2BwU7SCaIvrrwws91b1rOneXX8q4wNpTYTRO6rhtkRps%2FhhyzmZVLOv%2FPJeACzIjl3Zbpf%2FBIkJzfMQQUXIBJdNF%2B5GzoikZM0JLS4AOwXezX81wrGRHyU5wPOj9YxDwhKrXgJhQDLOM8v%2BMaRpv67chJlDV6Vg4oEMRma1nhhnvRRXCfb40gNLhD7pmade323JX07ZlBT2GtlQC9fPQP3nktQLOM81VZSBebE0a2Qk3quOfjMMbv7NEGOqUB2FgwsXekBg6kaPqC1fHKO2A%2FxbnOEdi6pyJoxjLDVHYiQ78GSYV3DTPki%2BNAmMVsxvsv43euUBaGqgwpv6rTDqJZIla2Cjp3PaReYe5AdToWUhx7sxU9Pa6CzDUyXcp6MgZI04cyPpuG4fnSONjOVHMb5H8BYbwzdUxua%2Bs9fPTeN7lncxvZw%2BSp0aQVldvMCdhBX8gJlEk%2FF2EjQWyU8Biofqvu&X-Amz-Signature=269507c63f22e1a7485cde89ce3b84d291d0a2e48ec68047e61eae7399b05c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5W5SO7%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B1tjbXsGT8VCPdDS5vOYp9%2BX9CFy8x7YmOzv%2FSE%2BaugIhAIkRZFjnilgf1%2FL9ygqi7lJQSH2lD%2Fv7QxeEDRAUJOaUKv8DCCsQABoMNjM3NDIzMTgzODA1IgyjytgNfOk5sJbWzPcq3AOwLy3poe7UUPyrN74oruf47EwDQhMY8UFpahHl3CEsbe4L3Dun0hMdYxqjx1rToum4UWVtyayYEr6swS6Mfz4plvUhTkwmkuS%2F4rtIVy4QZvMMpOpgLipN3VfSU%2BqiPr6ZA%2BbOyBAA5Wf9BEK0avyu46ywmX1%2F1xsEdPivuNgmhPHesXX28GOUtbrIY0y%2FJpn5Qe6KqfJM5jdQO8LXZBOmi7v80gbOb%2BBTfQiXk%2B9B%2BFK0Q0VVzpav2f66Q31rPCH7wR%2FIhnFS1MpGhdQgEMSI%2F70Kw88Gr06hBTcuYcFEnHBL6u5KK7C3dQqHdfeZumKHe49Jrs157dhBD34eS6oKSVNoNSQfGdc82zYVSZ2bSuYyAz%2F7PPZ5Cc4lmfT4%2BCbuDQmeliOJnXf35XmpCljf3nxqmdPoWKrPGsUmXJR8LfPjMF4ReneRz6zEzVexBw5qpan7LtazpLq7wJ16PkM%2Br7wNp%2FPEdPXUWqbttIQfKsANCEnirdJFkbPYyFk9cg33Hr4chWxMOjku4qOrHHahoSRFiwwCPzPl%2FbjHM5fJQWi7dJUv%2Ft9N3s1WhPMZzGfdK4Qzmdt1LxOO8jKgPzlwmi%2FOuwOOquQjQMUEpUskxYraCW2dkjadDpM22DC68uzRBjqkAf3ZYfTOd4cQWyC8%2BYB%2BYUPOvkujKn%2BcLmvRY2txTKuGGYAT1sHZUWWea2QFts2ArKBuhnXxCGadF%2FzXUPxXdQq1i1HMHoYevpTY6ClKYosaMHXDscJVdMLABz1KDEQJyb7hlF0Gx%2FiDM72D%2Bi%2FJMtfFcJSsiYFrrZrHcxZ9QOwiI1QBxdR%2BznzH1lad4CHbodvjje9jczHPkANkZ%2BqDctmhK7V6&X-Amz-Signature=f4f982b63e402855d3d1d0ab23275d8ffb14e91e4ee81a69dfdd0027e092cdfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</joint>` to add wheels lets use a `xacro:macro` (basically a xacro function) to avoid duplicate code. The macro will take 3 functions `prefix`, `x_reflect`, and `y_reflect` so we can flip the wheel on the x or y axis. We also make the joint continuous so the wheel can rotate freely.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2BBVF3X%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIHecGe%2B12kEgDflvKkv012nCvrZky3REe4MBCi%2FDvmr6AiBWgf6ejKfd95H0rDb71EuJLlech7jarnMjDgb%2F6y2Hzir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMthuQnzVIokLisW5XKtwDKwx7yxeqbxv7gLXOmg0qq7YgTDGJbjPbOosVLf8oUYRDMVd6WG5B%2FumSq7NVpBmp8oh0%2FNSRQ07J9zkolVObtBiL%2BB7hCcRZSM4RXCIBt4bZgEZzvy7EJojioJZi8LgLtnseA%2FM7FoQhOOn%2FpOoH04lopmia%2BX2bHyif1hEesbFqrGuDzNTg24N%2BRb5cslT6oHlbUCyRLq4jY7soNeOSjzBwQCk6KvbsQXj5kN3oQFCtGITaebg5GkjPetqa06Odt8VKhsOxGBF100Pi%2Fs60ufcRGFc%2FkLjcQYdEbnTf15Fe62gz1otr1ts%2BgRVD04uppkDFZPXgJkUGViPokbQBXiFKq7U14wtIdz%2BhkUBRofwd9b0Y5K4xlnSaHccgk8GWulJlqPt9aq05eURiUqEYVE9J4ORsa4W%2F4WMe%2FomhEU649FA%2BHfCU5eKG7BYI5pEGcYxpUm8zdo3cW%2Bm5tCElQSK0eb2djk4X2Xh9uT35nEHqu%2FF12%2BNcGjrQVEw3UXtzF6XBLsSSnK3KBUQRBrG2h4ciiI6oOrQvLZV8M3ZfyFYU6MMIVYnCf3Fgm2UuWhaUK%2Fns0eQKYrYRKrjQDWZIvXyb5olsXM9HB%2B5UvTp%2Bzp9J3PnE8L6wlYzFGpgw8u7s0QY6pgHMsZcFkzOA36GgInNvoLISTeOL0y7SobPOP9W7Q71YxfuP2meI3Tw%2F4IMinSfQDTK8yB%2BmEo6r%2BMKOTq7KTz1I4qQhzouWzWKVfXknJrk3WTaoBMK1D8vgepJ53Kb6Ifc%2FezpOE%2F9vyXwoar0rq5S2NP6IFx9UkUfda3Q5z2QUVr3PvRpjUJCX62YAT6cRw8TnqV9kjCSFfPdDD5qb5dLDThq9yAN7&X-Amz-Signature=84207f35abcb6cb60f8a6630bc11e6e81906e9b74970312fe85f26ce11e71cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5W5SO7%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B1tjbXsGT8VCPdDS5vOYp9%2BX9CFy8x7YmOzv%2FSE%2BaugIhAIkRZFjnilgf1%2FL9ygqi7lJQSH2lD%2Fv7QxeEDRAUJOaUKv8DCCsQABoMNjM3NDIzMTgzODA1IgyjytgNfOk5sJbWzPcq3AOwLy3poe7UUPyrN74oruf47EwDQhMY8UFpahHl3CEsbe4L3Dun0hMdYxqjx1rToum4UWVtyayYEr6swS6Mfz4plvUhTkwmkuS%2F4rtIVy4QZvMMpOpgLipN3VfSU%2BqiPr6ZA%2BbOyBAA5Wf9BEK0avyu46ywmX1%2F1xsEdPivuNgmhPHesXX28GOUtbrIY0y%2FJpn5Qe6KqfJM5jdQO8LXZBOmi7v80gbOb%2BBTfQiXk%2B9B%2BFK0Q0VVzpav2f66Q31rPCH7wR%2FIhnFS1MpGhdQgEMSI%2F70Kw88Gr06hBTcuYcFEnHBL6u5KK7C3dQqHdfeZumKHe49Jrs157dhBD34eS6oKSVNoNSQfGdc82zYVSZ2bSuYyAz%2F7PPZ5Cc4lmfT4%2BCbuDQmeliOJnXf35XmpCljf3nxqmdPoWKrPGsUmXJR8LfPjMF4ReneRz6zEzVexBw5qpan7LtazpLq7wJ16PkM%2Br7wNp%2FPEdPXUWqbttIQfKsANCEnirdJFkbPYyFk9cg33Hr4chWxMOjku4qOrHHahoSRFiwwCPzPl%2FbjHM5fJQWi7dJUv%2Ft9N3s1WhPMZzGfdK4Qzmdt1LxOO8jKgPzlwmi%2FOuwOOquQjQMUEpUskxYraCW2dkjadDpM22DC68uzRBjqkAf3ZYfTOd4cQWyC8%2BYB%2BYUPOvkujKn%2BcLmvRY2txTKuGGYAT1sHZUWWea2QFts2ArKBuhnXxCGadF%2FzXUPxXdQq1i1HMHoYevpTY6ClKYosaMHXDscJVdMLABz1KDEQJyb7hlF0Gx%2FiDM72D%2Bi%2FJMtfFcJSsiYFrrZrHcxZ9QOwiI1QBxdR%2BznzH1lad4CHbodvjje9jczHPkANkZ%2BqDctmhK7V6&X-Amz-Signature=fd94dc998695a0b963693501cbea6eabe4c19b9320c58cda3dd1a98029f4fa34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Under `xacro:wheel` lets add the caster wheel at the front of the robot. The robot up until now should look like the image below

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GHXL4CM%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC%2FDrU5e9f6cyzdYo748G1gKZVebPJ1WMblpvQlKZD0BgIgbT%2FY%2BoEK%2BhLZDU9Rsr27MGQ%2FYLqAy3x4CSFjdkyWok0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOwesDH28b6Q2f8kHircA0QiRKq3Ir6Nosa9maaKjcPOD%2F1HnDJ%2FVVbzQaYLHpMgcCY%2Fbch%2FhcxPP1M3yq0ZgKFHeq06G%2Bs97DnUKroV0RSQJ7X9bPSCQ8TuJ21b4G6DLPz4L%2F4OMALlksRI1kXgb7EXcmGhI8CHw%2F1niqa0IjAv0swX7nlZaouEq36w9GdCw%2BWCxJyoHcLSIv8%2Fq6EvpamQ%2BImn6UcS3YTPOcjB9mpGyjlERrdpgBSEiGqqJm3W82HfRzn69SY9VzdiBDymbyv9vksrW9rF4k%2BGSF6xPJFGpPIAiUfT8yCkPxcU2%2FVkQ4PNMOt%2F5Nlml4aspBV54Ses7VUeZciRB3C2CQBxqRu8YgB%2BqSR4hZhie6o59GslxsM69uX%2F87cyLr5lgbZSm8KVszIvnwvFJHhT71GTPqSIs1eTno85VcLy2iY33YhdW3w1Jd2ut%2Fkk%2FoU7TBbkdWRghrGE7A538D6V%2FEZz%2F3kY4EfpitlI3rwKNhy%2Bzp57TQWVI%2BohJYgLQc2gI%2BijuzeVUruiWfgCElD0JrpxM9e5x61GyTdFt2Vtaqgp0UEvIF2aORLMGUm8FvsvqtIp0vpRCHOpTCMR%2FiWyKBTu3s8CsMqZGqR3gRA%2BAO5CMy0nJbRZ%2FxlfIexdMXihMIjy7NEGOqUBZrblJbM45VEyLKKrBfrEKuODuM5mwa3JH0cAAOC%2Bd8JO72a45s%2BSGtCOsTyNJg9LxBq9UEB6IM69aqWt2kjend2snrgjaqTmXiJ5I4P9pWyQkxbsMxZ7IcOTNmgE%2FsJFowE0hQchakqtj%2BXH8fn0c1Ld9fEE6WID3fP8SdXz7U01Mk4oHL0KJxvqks21izVCkIcFJtgE90UY%2FiB6l9cd%2F8mXru7Y&X-Amz-Signature=3397b9311aa4e8be9b8e31d84a59554d805d23b80f3ad98a358f5d4672fca97a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5W5SO7%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B1tjbXsGT8VCPdDS5vOYp9%2BX9CFy8x7YmOzv%2FSE%2BaugIhAIkRZFjnilgf1%2FL9ygqi7lJQSH2lD%2Fv7QxeEDRAUJOaUKv8DCCsQABoMNjM3NDIzMTgzODA1IgyjytgNfOk5sJbWzPcq3AOwLy3poe7UUPyrN74oruf47EwDQhMY8UFpahHl3CEsbe4L3Dun0hMdYxqjx1rToum4UWVtyayYEr6swS6Mfz4plvUhTkwmkuS%2F4rtIVy4QZvMMpOpgLipN3VfSU%2BqiPr6ZA%2BbOyBAA5Wf9BEK0avyu46ywmX1%2F1xsEdPivuNgmhPHesXX28GOUtbrIY0y%2FJpn5Qe6KqfJM5jdQO8LXZBOmi7v80gbOb%2BBTfQiXk%2B9B%2BFK0Q0VVzpav2f66Q31rPCH7wR%2FIhnFS1MpGhdQgEMSI%2F70Kw88Gr06hBTcuYcFEnHBL6u5KK7C3dQqHdfeZumKHe49Jrs157dhBD34eS6oKSVNoNSQfGdc82zYVSZ2bSuYyAz%2F7PPZ5Cc4lmfT4%2BCbuDQmeliOJnXf35XmpCljf3nxqmdPoWKrPGsUmXJR8LfPjMF4ReneRz6zEzVexBw5qpan7LtazpLq7wJ16PkM%2Br7wNp%2FPEdPXUWqbttIQfKsANCEnirdJFkbPYyFk9cg33Hr4chWxMOjku4qOrHHahoSRFiwwCPzPl%2FbjHM5fJQWi7dJUv%2Ft9N3s1WhPMZzGfdK4Qzmdt1LxOO8jKgPzlwmi%2FOuwOOquQjQMUEpUskxYraCW2dkjadDpM22DC68uzRBjqkAf3ZYfTOd4cQWyC8%2BYB%2BYUPOvkujKn%2BcLmvRY2txTKuGGYAT1sHZUWWea2QFts2ArKBuhnXxCGadF%2FzXUPxXdQq1i1HMHoYevpTY6ClKYosaMHXDscJVdMLABz1KDEQJyb7hlF0Gx%2FiDM72D%2Bi%2FJMtfFcJSsiYFrrZrHcxZ9QOwiI1QBxdR%2BznzH1lad4CHbodvjje9jczHPkANkZ%2BqDctmhK7V6&X-Amz-Signature=25f172a257f64d77adef504ce6c11c1b824bc5e04016a85e2c3c3de6f58426c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}code up until this point{{< /markdownify >}}</summary>
  
<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHIRTII%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC0A0h4WVgMY2bi5tmD4nrQhSFnC8HRZih%2BenVg72BJcQIhAKpSXyucoLq517Qmryq3WJLQFBHPNRDfd7TkBUq4vCs%2BKv8DCCsQABoMNjM3NDIzMTgzODA1Igz4r91X%2FX0NDxnfWiAq3AOqsC4PsSKu%2BAShk1Hho6FWVw1euOLu7PPfcMmz0EYClmJhpi5nKEL95VxqEyNm%2BTWbNZpFl8VOHJH9FHIiM1J58Q%2BAUOD%2FPoCMmqToS7fmHKtVZD4oe2t6cwLBY8jKytn36RDXy967VdnI88PXjOKGX%2F%2B9PBlHolvvs5YF29r%2F4ucCDbLNxJLx4fMu9JqxRPHUkhJagL9qH0XsibJSyN6CSzrPkPKRxk2n6dsDKAnfRpv4hIQ0bOem8GbGMgTVvVl6ohNGjCgyZ4D7TvGa3Sbbb82F40thFPSra33RXuLEE5Lz95W2ou6rvgLD5fpZwAq8wuZltgPNR0vdAv7EIC89Gu0XOxi%2FKUpcCSQ5oAxd%2B0JxyPVhj3dr0bah5otZN5ItTCt5RjkDQlJOo2lVeRAuRWVFUsnDmFyytt%2B38toO6mWVQeLgtmnb%2BtJj98fwKm%2BOIs12sWSfDvh%2FfZUe15HzwzgeVjlzZeloUhNsmHfanBMJHaGdH0LgS0KQNTabOAtHe%2FROrQTQ%2Fu1%2BxGv5lMwOeL8P3INq3%2Bmlt3JJwu6i1Ykj1j%2FG%2BUl9WhUMmIfRyOBjW7QL0B3HdgpxH3HyHXC0dsRqdhH%2BtIXAPRGRwtHhbdPVSmD1EVmhmdW%2FBDDm8uzRBjqkATPxn6%2BjFn2z34%2Bhx%2B4rH56RI0%2BJRjnXEbu9oQDaegz17ZELwFi7%2BE2sBXm8XAsKwOvOEc9tgDy0dWIkr%2FZyuEGUxQ5p9HRdwaKMwWho6O5y8js3UX0mxUSIdiu9H1%2FQNJ%2F9BmBRJKGIGiDHp9Pl0skF0jZ2NmIelQLUy0tNnWIFdYBy3rGQ6QmW%2F58NzmPXuvh7%2FvxOb2BWDvxxxibVnUipjkhY&X-Amz-Signature=a4bed11d40e689a1eb9392af49a5913c888292821d69372cfa48018b3ac66125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

</details>



### Adding Collision and Inertia

Next lets add collision and inertia to our robot. These attributes will be used in the robot simulator later in this guide.

To start lets make some `xacro:macro` to avoid repetitive code to make box, cylinder, and sphere inertia.

Place this under the constants section.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5W5SO7%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B1tjbXsGT8VCPdDS5vOYp9%2BX9CFy8x7YmOzv%2FSE%2BaugIhAIkRZFjnilgf1%2FL9ygqi7lJQSH2lD%2Fv7QxeEDRAUJOaUKv8DCCsQABoMNjM3NDIzMTgzODA1IgyjytgNfOk5sJbWzPcq3AOwLy3poe7UUPyrN74oruf47EwDQhMY8UFpahHl3CEsbe4L3Dun0hMdYxqjx1rToum4UWVtyayYEr6swS6Mfz4plvUhTkwmkuS%2F4rtIVy4QZvMMpOpgLipN3VfSU%2BqiPr6ZA%2BbOyBAA5Wf9BEK0avyu46ywmX1%2F1xsEdPivuNgmhPHesXX28GOUtbrIY0y%2FJpn5Qe6KqfJM5jdQO8LXZBOmi7v80gbOb%2BBTfQiXk%2B9B%2BFK0Q0VVzpav2f66Q31rPCH7wR%2FIhnFS1MpGhdQgEMSI%2F70Kw88Gr06hBTcuYcFEnHBL6u5KK7C3dQqHdfeZumKHe49Jrs157dhBD34eS6oKSVNoNSQfGdc82zYVSZ2bSuYyAz%2F7PPZ5Cc4lmfT4%2BCbuDQmeliOJnXf35XmpCljf3nxqmdPoWKrPGsUmXJR8LfPjMF4ReneRz6zEzVexBw5qpan7LtazpLq7wJ16PkM%2Br7wNp%2FPEdPXUWqbttIQfKsANCEnirdJFkbPYyFk9cg33Hr4chWxMOjku4qOrHHahoSRFiwwCPzPl%2FbjHM5fJQWi7dJUv%2Ft9N3s1WhPMZzGfdK4Qzmdt1LxOO8jKgPzlwmi%2FOuwOOquQjQMUEpUskxYraCW2dkjadDpM22DC68uzRBjqkAf3ZYfTOd4cQWyC8%2BYB%2BYUPOvkujKn%2BcLmvRY2txTKuGGYAT1sHZUWWea2QFts2ArKBuhnXxCGadF%2FzXUPxXdQq1i1HMHoYevpTY6ClKYosaMHXDscJVdMLABz1KDEQJyb7hlF0Gx%2FiDM72D%2Bi%2FJMtfFcJSsiYFrrZrHcxZ9QOwiI1QBxdR%2BznzH1lad4CHbodvjje9jczHPkANkZ%2BqDctmhK7V6&X-Amz-Signature=173a1862e7a914a9ca37641340365efe8c9da19c71ddf2539aa551a46c0463f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Next go into our `base_link` and add the collision and inertia tags.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-16","18-18"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAYPTVW6%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFkqO05QNJmNuFOvFtYW5SRREJtao1HBVoktubN1ogZ9AiEA27lJMK1CO0ehPOk7A5jLX59ZvMJdwrZJ8WlNQ6wULGMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHVOIBJ64MeHeIsAGSrcAyRGsTbsRSFIC9FIJSM9Zu7nxcKe1gv10J8zQhkDsLsBCIdC88F7v8IC6FHh1aHkXHAiAPZXQNTavHTDRTM%2FOzCfhKqFXmLkovdVA0EpJtxaPUpVWAhSpwrOXXQ1OlxgSvyl1JtPpql72IqKXEdjInpWwvsYKlqXieRESQxn9iGWIGINUZIH%2Fvy6GRSmWVgCv82enVLStdbq1Lf%2F4WEnYG9UBbvqEt3GZz5DEplk36DEsMDf%2FfwcNRVTnXxTRxmdISExmxg4b1Z%2BIyriRla3EKYPRaUhv%2BxLIrnNrBLuI%2F%2FVh%2Fb22RbmsbRO1FQcDb5trgTn0d3RwdiT02OBcZiIKVUPk1mg2B3EeNWzbIqqaR72%2B1YLBU958wnrHmiqxAbBojK0TxMJl%2BB85xa39MLnNtw0fH%2BloDVmzwuQdZtR3eNgI2pS6fcRq637Y7BY9W3grSGetw9uEQ%2F1GmVZc2qXGGpiLGlVrL3N6oupXkPtw0o2zLz6CtR9JiQV2MXv9cqNHmSvvUMHNFnR4LvnhVFHRpU8H8ahQxRV6z9RaiaRtyX%2FaP%2FbTaIomGOIPLbZzBMABjoyYiWqEI54Jb0mquXmHh4A4qDNM0EWfiBD16lirDU0G61si6veYqq3wCmjMNTv7NEGOqUBTrWycoaaL8hloj%2B1N0wfsaPrq%2FGN%2FKNB3Oi5%2BSEKVzqyhAg2zAkrAo6bTTUYrpD%2FCsZKwy4oOQ%2FAwUPbsZEabJFdHYRefb7ysNVuLfc0aZwFcALR918qf5KW4TwYWLVeuttVYCMSlIdVcTCT%2B70mk%2Bd4Fsg5%2B3fBaz2fsLS5gX37HmEwqrwUy2AP5BftWddexDsnQ%2BZ1XKDwfEo5U%2BUaG5n5c2dP&X-Amz-Signature=85f436006e4ab6a621287af203a345a826afafa8b1f310abaaa4fe0e02f8e815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-19"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQKORG2%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIE%2BtlwKub9YcH7R1TseUStgRt1r5Shr8i%2B6zThNAId5OAiA%2BP8Kts29RbxjIKbCGi1qmAZ2AJGrxKx3u61P%2FhVQNqir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMXlI6qjnTA8ysp2LlKtwDyfD%2B8g%2FQ%2Fd3rL6i9%2F2juwFqo2RExGJpbGHedjVcv4LO2QTKdBxtT0XSyXD%2FO0xYAs8xcrqnV6dII3sOK%2FY1NsUyTe%2FR0QfBR%2BpVGY3wzLBUIfWcmEuXTogEskzNnf5LRcQ1VMVhtQ5vvPw8vFCoV96kpawsU60JsHyKYr5fhUUE8iAP3otWFOQhgBTXneRBxKiQ5x2%2F%2B59F2WA6wCWjSxe8A5NI3yplY1GHX8bsvZE4JX4Bk8Fjr1l%2FXRtgqLXH2xrk%2BRIM1oXrdgK12qkrXQY0TlXTwWLMYxFMkL0x5xJuWoRKIh17TBqKcgZc8msvJpll%2FNiqydlbUe4dvfIi61EgzK0ttoyFs%2BTZD2jR5upTgrLEt7VAv20Nlb9XzfESoGeHTDuAQspzYtF7hM5CPmZw0l119nY8jJP54vsEHiv7iHYAPxDviXFAuZT8l%2FY14AlUdmYKFhYto56sc9dVQMdkcuxEvvytws0SD8hh%2Fyhl76nZJMKs8MBC%2B%2FeYWJhPErZMJc3ejt3zfw4bYhkfqtmfmHE7WArXB1%2F589a9TXqtz42Wh6RT4bnP6%2F4If6EKrS%2FZR3UvCqaooiTC0udm7GBcUT%2F68wB3KSQn7TDtYb4xoVlbtdr0ETmnJr2sw6u%2Fs0QY6pgGnXdpAUJxtSDBmJNiA0yqcUmARRLt8luFBwGlwj2CwG9nKiw6UKNqhvJkDs%2B34l8G9JLUlEcq70Kkg6zeotybbIGluqb%2FjHGEAMG15nf3oQkp6b46Z%2BmHbEzvxNAPLLcbeefPyTjx70hKtK22osCgxIc0N89678DPIOOkGchx4KzjsJl8wIm2WDF4hiEHUpNxvMRdq7NX3R82vC3emf6Tun1MM5egJ&X-Amz-Signature=5fada61fce37b541cbc61cf62db01e56ec5e13310d92212ab2aa709e93f0fd91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

and Same for the caster wheel:

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-19"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HNVRESY%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDW1IbKvoBVKm%2BlNRLpRDZKfZzNQdqYIG3Zbakn3hF2zAIgMhcPZMnMx7RnjJAaS274suHUwkvB2a5SjXGj5iHAE%2FMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLQjTp6M%2BSY8h5s%2BGCrcA2RIdQijOILAQEsVtCSVXA%2Fru8UBIIVyoQ5oS9PlaxfdJt0hYS%2B9MqaBxX1vBTZsYTNP%2BKYguGopoBXW66gyu%2BNLh71VML96y4X443jMTp%2FFlegbOwa4tkWwSMTgrA%2BCgqj%2BZcJbZtP9dsuqPzkDZYwsupzGPK82rcUqanEGKgCYAko01M7wjz8dEyitNlSNPmee7mhLl75BkE0u60V83OjSolPOxJzH8zLQJ3VID1vfLSwW%2BtYVxR3POjkzSoBEkjIL8UptXus3gIsrYmD87D5NWoM8MqKqmpdewJC7H3KTUVnyfEI0IruUXWGnyennBcizpBl0E66CrmPQjV%2Bj%2Br8ysL8rljpKeG6r4io9eSg5T8PQ1FM3WB6B6835nZ6lAIppx8BI3XvNLj4ZTaD4c4OTHMPpKGr%2BzwE2uSJVVKCZGZkxuBD3mQZUcS549mtx7oUy9LPP07yxA2gGqQF686r1nIzy4X4OqIDmKLmV2B7SWw8KZjjEuV95pAMVBwwSUDypsJhOpsggzkDjDfR68se7tUlqkplZIK4WWn%2Fnu12bb5z1hjUMUaQb2HCj%2BIZRxQcJvyL8GNXG6GnVCFehDJ7y%2BCxT7jSxfDAm4INDb4Hz0ppdBUvkJjUbm57MMJny7NEGOqUBg6t8VtFggzSuzQtWZBHK%2FFx3Rn7YlrsDhJnCB14%2FxMo%2FJEfvUYsNmsZBo7W%2BOgp1XCIHQJgcULi2xfXPffMMFYjuPlZij%2F4OREWeJetzLHChGzS%2BqyvBJPfeTeU3NhPLt%2FWUa6SpbbZKV3uC3ckf51N5yUeSzbyMjL5Ctef90YoAsaQ90G3%2FUhnDBSZ%2FGUhmKZ4Xix3%2FKwePDJJLX7yyXCfwAkXJ&X-Amz-Signature=d1bf9ca9a82c01791bc89b4ceb2044a5dc0bfc8bafd7e2dcd9eba8b18b1d2d87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5W5SO7%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B1tjbXsGT8VCPdDS5vOYp9%2BX9CFy8x7YmOzv%2FSE%2BaugIhAIkRZFjnilgf1%2FL9ygqi7lJQSH2lD%2Fv7QxeEDRAUJOaUKv8DCCsQABoMNjM3NDIzMTgzODA1IgyjytgNfOk5sJbWzPcq3AOwLy3poe7UUPyrN74oruf47EwDQhMY8UFpahHl3CEsbe4L3Dun0hMdYxqjx1rToum4UWVtyayYEr6swS6Mfz4plvUhTkwmkuS%2F4rtIVy4QZvMMpOpgLipN3VfSU%2BqiPr6ZA%2BbOyBAA5Wf9BEK0avyu46ywmX1%2F1xsEdPivuNgmhPHesXX28GOUtbrIY0y%2FJpn5Qe6KqfJM5jdQO8LXZBOmi7v80gbOb%2BBTfQiXk%2B9B%2BFK0Q0VVzpav2f66Q31rPCH7wR%2FIhnFS1MpGhdQgEMSI%2F70Kw88Gr06hBTcuYcFEnHBL6u5KK7C3dQqHdfeZumKHe49Jrs157dhBD34eS6oKSVNoNSQfGdc82zYVSZ2bSuYyAz%2F7PPZ5Cc4lmfT4%2BCbuDQmeliOJnXf35XmpCljf3nxqmdPoWKrPGsUmXJR8LfPjMF4ReneRz6zEzVexBw5qpan7LtazpLq7wJ16PkM%2Br7wNp%2FPEdPXUWqbttIQfKsANCEnirdJFkbPYyFk9cg33Hr4chWxMOjku4qOrHHahoSRFiwwCPzPl%2FbjHM5fJQWi7dJUv%2Ft9N3s1WhPMZzGfdK4Qzmdt1LxOO8jKgPzlwmi%2FOuwOOquQjQMUEpUskxYraCW2dkjadDpM22DC68uzRBjqkAf3ZYfTOd4cQWyC8%2BYB%2BYUPOvkujKn%2BcLmvRY2txTKuGGYAT1sHZUWWea2QFts2ArKBuhnXxCGadF%2FzXUPxXdQq1i1HMHoYevpTY6ClKYosaMHXDscJVdMLABz1KDEQJyb7hlF0Gx%2FiDM72D%2Bi%2FJMtfFcJSsiYFrrZrHcxZ9QOwiI1QBxdR%2BznzH1lad4CHbodvjje9jczHPkANkZ%2BqDctmhK7V6&X-Amz-Signature=71c66cc897baf8128c2d62e3e4e9a3256882c2c32a3d077528ada43a3ace74af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**final code:**{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5W5SO7%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2B1tjbXsGT8VCPdDS5vOYp9%2BX9CFy8x7YmOzv%2FSE%2BaugIhAIkRZFjnilgf1%2FL9ygqi7lJQSH2lD%2Fv7QxeEDRAUJOaUKv8DCCsQABoMNjM3NDIzMTgzODA1IgyjytgNfOk5sJbWzPcq3AOwLy3poe7UUPyrN74oruf47EwDQhMY8UFpahHl3CEsbe4L3Dun0hMdYxqjx1rToum4UWVtyayYEr6swS6Mfz4plvUhTkwmkuS%2F4rtIVy4QZvMMpOpgLipN3VfSU%2BqiPr6ZA%2BbOyBAA5Wf9BEK0avyu46ywmX1%2F1xsEdPivuNgmhPHesXX28GOUtbrIY0y%2FJpn5Qe6KqfJM5jdQO8LXZBOmi7v80gbOb%2BBTfQiXk%2B9B%2BFK0Q0VVzpav2f66Q31rPCH7wR%2FIhnFS1MpGhdQgEMSI%2F70Kw88Gr06hBTcuYcFEnHBL6u5KK7C3dQqHdfeZumKHe49Jrs157dhBD34eS6oKSVNoNSQfGdc82zYVSZ2bSuYyAz%2F7PPZ5Cc4lmfT4%2BCbuDQmeliOJnXf35XmpCljf3nxqmdPoWKrPGsUmXJR8LfPjMF4ReneRz6zEzVexBw5qpan7LtazpLq7wJ16PkM%2Br7wNp%2FPEdPXUWqbttIQfKsANCEnirdJFkbPYyFk9cg33Hr4chWxMOjku4qOrHHahoSRFiwwCPzPl%2FbjHM5fJQWi7dJUv%2Ft9N3s1WhPMZzGfdK4Qzmdt1LxOO8jKgPzlwmi%2FOuwOOquQjQMUEpUskxYraCW2dkjadDpM22DC68uzRBjqkAf3ZYfTOd4cQWyC8%2BYB%2BYUPOvkujKn%2BcLmvRY2txTKuGGYAT1sHZUWWea2QFts2ArKBuhnXxCGadF%2FzXUPxXdQq1i1HMHoYevpTY6ClKYosaMHXDscJVdMLABz1KDEQJyb7hlF0Gx%2FiDM72D%2Bi%2FJMtfFcJSsiYFrrZrHcxZ9QOwiI1QBxdR%2BznzH1lad4CHbodvjje9jczHPkANkZ%2BqDctmhK7V6&X-Amz-Signature=8bb839e8aacd359977165e21ba4132f3f03e102bb8cc2d7caaf9da5c57d9c2b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}


#### Outputs:

| **Name**             | **Type** |
| -------------------- | -------- |
| `/tf`                |          |
| `/robot_description` |          |

#### Params:

| **Name**            | **Type** |
| ------------------- | -------- |
| `robot_description` | file     |
| `use_sim_time`      | bool     |

#### description:

Node that takes in the `urdf` and puts it into ROS

Takes 2 major inputs:

- `urdf` file and publishes all transforms in the `/tf` topic
- `/joint_states` topic that takes in all the states of joints in the `urdf`

{{% /alert %}}

{{% alert icon=”👾” context="success" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ6EPLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCkk1Qcd0pPWtjqq%2BduyDAGNz7kEE5c%2FWAmdLq0goo4%2FQIhAPfMftcayiqacHYATmMYnV7YGVBTN8OIv4bVJNZyLZFBKv8DCCsQABoMNjM3NDIzMTgzODA1Igzaf63%2F8fJyMaVr0Jcq3ANPLg7w1B9EC6YHVjlgTcJoeApEP6E8k6PwX%2BKduelqVy4YuSW0zZwqX6sWNA4no7qhHwWJ%2Fvd5B%2FNlJzqXqHJoRNpeV7CiK73oeLsJoCM4Sea0Y0M4jomkm38Gs7rzdmkzRXRKMCP%2F6E4a7oJnPgPxD2ZEebfVMYL3cAE4PmhVbv%2FzIsWA4XT5FLrpdGbEkHXTRDT%2BSzR2%2BViTw5gUHDz05yy0kLwuRniLrK2bUuJoHBDBv52k4NAgUIBvq141OBWqUQVZbqg2zdNYLqc4SNUKx9sW7eGBfLtVif23OdB3mPNG%2B0OaH3wFPD5etaUxdkJbIZAkhgMR4mQBl06UisJJCsODlX5Wohx7dgECh6dm3L7JLucLBATvV0Yhq621QqvgQKI3EvW%2FJVgb4wphn7nQXl1FBcyZqZ1O4vOw0o0VnuheF4j2iKjib5esvJwVGz16EvwBL9Om%2BUcci9ZStgire2Sbzy7AMXknQ%2F7L4wCnIrrrvZNyqP0Ss9fw31rrxOCiH%2BBWYVPdZ2FwXmetlI19q7ubIpKHjC4i%2FqDxGuxAG%2BMLIcaRm5nSZoVe3Lka5w%2F%2FGTmPXfB8Vvld7J65OFLXFuCNvszcxNlsP2JRNJMJCLBXZHn1aGmtJ2L7XjD67uzRBjqkATnjphcxI6yfDR4Pp%2BtHjbkWkYsSyBSY%2Fw1Z4fvtnxCyTso%2FBBJEb3AVYWfsJimdnwAO39IGTSJHjJl1lVU5i63nEBEY%2BoZNTznB5JokCPY3obN5pbZdziUQuloW4hM7xmP4S%2BS21qtPdTbPrUWV5dM43%2FcqrC5mXu8WdOtxIGwuzBfXAYHwFf%2FMPlRlYXKKJthzrDKK2FXRfzYsEfJKLFhS6IEm&X-Amz-Signature=c53c5dd2971b977178b9abfd4615350f6d41d00ef3a5345d71f0a8befd2305ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

| **Name**             | **Type** |
| -------------------- | -------- |
| `/robot_description` |          |

#### Outputs:

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

#### description:

lets you debug your `urdf` to see if all your joints work correctly.

Takes `/robot_description` from `robot_state_publisher` and outputs `/joint_states` with adjustable sliders

designed to be replaced by a physical robot or a simulated robot node

{{% /alert %}}

## Current Node diagram

With the two nodes we are going to make this diagram:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ6EPLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCkk1Qcd0pPWtjqq%2BduyDAGNz7kEE5c%2FWAmdLq0goo4%2FQIhAPfMftcayiqacHYATmMYnV7YGVBTN8OIv4bVJNZyLZFBKv8DCCsQABoMNjM3NDIzMTgzODA1Igzaf63%2F8fJyMaVr0Jcq3ANPLg7w1B9EC6YHVjlgTcJoeApEP6E8k6PwX%2BKduelqVy4YuSW0zZwqX6sWNA4no7qhHwWJ%2Fvd5B%2FNlJzqXqHJoRNpeV7CiK73oeLsJoCM4Sea0Y0M4jomkm38Gs7rzdmkzRXRKMCP%2F6E4a7oJnPgPxD2ZEebfVMYL3cAE4PmhVbv%2FzIsWA4XT5FLrpdGbEkHXTRDT%2BSzR2%2BViTw5gUHDz05yy0kLwuRniLrK2bUuJoHBDBv52k4NAgUIBvq141OBWqUQVZbqg2zdNYLqc4SNUKx9sW7eGBfLtVif23OdB3mPNG%2B0OaH3wFPD5etaUxdkJbIZAkhgMR4mQBl06UisJJCsODlX5Wohx7dgECh6dm3L7JLucLBATvV0Yhq621QqvgQKI3EvW%2FJVgb4wphn7nQXl1FBcyZqZ1O4vOw0o0VnuheF4j2iKjib5esvJwVGz16EvwBL9Om%2BUcci9ZStgire2Sbzy7AMXknQ%2F7L4wCnIrrrvZNyqP0Ss9fw31rrxOCiH%2BBWYVPdZ2FwXmetlI19q7ubIpKHjC4i%2FqDxGuxAG%2BMLIcaRm5nSZoVe3Lka5w%2F%2FGTmPXfB8Vvld7J65OFLXFuCNvszcxNlsP2JRNJMJCLBXZHn1aGmtJ2L7XjD67uzRBjqkATnjphcxI6yfDR4Pp%2BtHjbkWkYsSyBSY%2Fw1Z4fvtnxCyTso%2FBBJEb3AVYWfsJimdnwAO39IGTSJHjJl1lVU5i63nEBEY%2BoZNTznB5JokCPY3obN5pbZdziUQuloW4hM7xmP4S%2BS21qtPdTbPrUWV5dM43%2FcqrC5mXu8WdOtxIGwuzBfXAYHwFf%2FMPlRlYXKKJthzrDKK2FXRfzYsEfJKLFhS6IEm&X-Amz-Signature=caf59e96aa026ffe96ec0b0a4447cae79f403f243c87bd2aa5191bd0154c8e1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ6EPLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCkk1Qcd0pPWtjqq%2BduyDAGNz7kEE5c%2FWAmdLq0goo4%2FQIhAPfMftcayiqacHYATmMYnV7YGVBTN8OIv4bVJNZyLZFBKv8DCCsQABoMNjM3NDIzMTgzODA1Igzaf63%2F8fJyMaVr0Jcq3ANPLg7w1B9EC6YHVjlgTcJoeApEP6E8k6PwX%2BKduelqVy4YuSW0zZwqX6sWNA4no7qhHwWJ%2Fvd5B%2FNlJzqXqHJoRNpeV7CiK73oeLsJoCM4Sea0Y0M4jomkm38Gs7rzdmkzRXRKMCP%2F6E4a7oJnPgPxD2ZEebfVMYL3cAE4PmhVbv%2FzIsWA4XT5FLrpdGbEkHXTRDT%2BSzR2%2BViTw5gUHDz05yy0kLwuRniLrK2bUuJoHBDBv52k4NAgUIBvq141OBWqUQVZbqg2zdNYLqc4SNUKx9sW7eGBfLtVif23OdB3mPNG%2B0OaH3wFPD5etaUxdkJbIZAkhgMR4mQBl06UisJJCsODlX5Wohx7dgECh6dm3L7JLucLBATvV0Yhq621QqvgQKI3EvW%2FJVgb4wphn7nQXl1FBcyZqZ1O4vOw0o0VnuheF4j2iKjib5esvJwVGz16EvwBL9Om%2BUcci9ZStgire2Sbzy7AMXknQ%2F7L4wCnIrrrvZNyqP0Ss9fw31rrxOCiH%2BBWYVPdZ2FwXmetlI19q7ubIpKHjC4i%2FqDxGuxAG%2BMLIcaRm5nSZoVe3Lka5w%2F%2FGTmPXfB8Vvld7J65OFLXFuCNvszcxNlsP2JRNJMJCLBXZHn1aGmtJ2L7XjD67uzRBjqkATnjphcxI6yfDR4Pp%2BtHjbkWkYsSyBSY%2Fw1Z4fvtnxCyTso%2FBBJEb3AVYWfsJimdnwAO39IGTSJHjJl1lVU5i63nEBEY%2BoZNTznB5JokCPY3obN5pbZdziUQuloW4hM7xmP4S%2BS21qtPdTbPrUWV5dM43%2FcqrC5mXu8WdOtxIGwuzBfXAYHwFf%2FMPlRlYXKKJthzrDKK2FXRfzYsEfJKLFhS6IEm&X-Amz-Signature=49b711301b1263969ae069794808159e2443d7e096cd9970622b517ee7b82d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ6EPLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCkk1Qcd0pPWtjqq%2BduyDAGNz7kEE5c%2FWAmdLq0goo4%2FQIhAPfMftcayiqacHYATmMYnV7YGVBTN8OIv4bVJNZyLZFBKv8DCCsQABoMNjM3NDIzMTgzODA1Igzaf63%2F8fJyMaVr0Jcq3ANPLg7w1B9EC6YHVjlgTcJoeApEP6E8k6PwX%2BKduelqVy4YuSW0zZwqX6sWNA4no7qhHwWJ%2Fvd5B%2FNlJzqXqHJoRNpeV7CiK73oeLsJoCM4Sea0Y0M4jomkm38Gs7rzdmkzRXRKMCP%2F6E4a7oJnPgPxD2ZEebfVMYL3cAE4PmhVbv%2FzIsWA4XT5FLrpdGbEkHXTRDT%2BSzR2%2BViTw5gUHDz05yy0kLwuRniLrK2bUuJoHBDBv52k4NAgUIBvq141OBWqUQVZbqg2zdNYLqc4SNUKx9sW7eGBfLtVif23OdB3mPNG%2B0OaH3wFPD5etaUxdkJbIZAkhgMR4mQBl06UisJJCsODlX5Wohx7dgECh6dm3L7JLucLBATvV0Yhq621QqvgQKI3EvW%2FJVgb4wphn7nQXl1FBcyZqZ1O4vOw0o0VnuheF4j2iKjib5esvJwVGz16EvwBL9Om%2BUcci9ZStgire2Sbzy7AMXknQ%2F7L4wCnIrrrvZNyqP0Ss9fw31rrxOCiH%2BBWYVPdZ2FwXmetlI19q7ubIpKHjC4i%2FqDxGuxAG%2BMLIcaRm5nSZoVe3Lka5w%2F%2FGTmPXfB8Vvld7J65OFLXFuCNvszcxNlsP2JRNJMJCLBXZHn1aGmtJ2L7XjD67uzRBjqkATnjphcxI6yfDR4Pp%2BtHjbkWkYsSyBSY%2Fw1Z4fvtnxCyTso%2FBBJEb3AVYWfsJimdnwAO39IGTSJHjJl1lVU5i63nEBEY%2BoZNTznB5JokCPY3obN5pbZdziUQuloW4hM7xmP4S%2BS21qtPdTbPrUWV5dM43%2FcqrC5mXu8WdOtxIGwuzBfXAYHwFf%2FMPlRlYXKKJthzrDKK2FXRfzYsEfJKLFhS6IEm&X-Amz-Signature=153efef3195479e4d5367bfdb189bad2dc93a34b0ab769d0b5b9d19ac852228c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNCD4QKR%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIHPW7Akh5hSPG53VJU4jeJR%2BIP38N5TqMajbzW%2BIHyGrAiB9%2ByyWa9lylK%2By1GmH3xcCdXoQfx2AMoJr2zdiH0Ocyir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMY4cmyMuiA7Fsoa%2FmKtwDUBOfvLiP5WZIVFBJcA8ia6mNcnJdXYfcuJCKfu5usgxEuETeOb7IcINRMLcXNpbDI%2BpU8GL1cxCaSSPySUrlmI9NTTUU28gNjVF%2Ffw9le5XReyUpWN3LmY0%2FFa3o4xT7OufUrDGxb%2BeWu18BMyrXx4wzFhLUOT1zBGAXrJMjh0Gfpu6eeqJwdCRue2wYEttbE%2BWly3nPOWhCBSyNtqyLpxw2UW729zMz%2BMMAX5lnlgJ7iHNmvy72S12GNYScS6F2j9Iu%2B%2Bmxf4MxPabzynQig0XTMr7YHy4WrmU1%2F%2F%2Bbv0AiQ9sM4IpMKId2A1SriJXJIfvZFj7GVTKptMhzGljllAEv%2FLaTQ68tz7fQrgOehJC8tMV5VAyHMTIwwv%2FysaxQAh8e8O8EOIGqcbe6DPfed4fCk7qTEpPx2iYjY3%2FH8Wl6%2FavY7rdTUd%2B%2BHiB6qA8MTbDrbQRgxZezJBBsKsqcKEjFgOQI4xIYtJ5n2O6MUF4ZWHrG6p%2FgraiajCU8UUSE36CvFJ%2BApHrdRa7SKDViQziBTw4onw3oAOmPGWBpeD9ftiBcmmEIJwSQc9ROC9tVvzlXhLYcmMMg7u8kl8ZWuSn7A%2FaV1MKFK9PX1XZOx5Coai%2BNQd%2B5r3fUo2gw%2BPHs0QY6pgFu5DkH0pYM0TELwVy%2Fbp8hjitq7s%2B9HQu0dwKH6elK4HFdvf%2FpBILoapVakTCRv%2FQknsSMscNxNE5OvxOh92FtAIX5Rg4Xeaso3Ov4zrd3oqxqQxutQn4jDfAt1RkY92ClsY2GTMqx7WIfzUn0QiXbpTwuYSVlOhD2H4FnJ5jeSY29%2BMMWBfSzjreFqI5Vsf5JZBumWyXVGqZnwpA%2FSWfKzfayyKL9&X-Amz-Signature=407bcdc9f48fb74ee879bae270bcfb37bb3cfcbc0d946c5b158309728f7af5c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ6EPLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCkk1Qcd0pPWtjqq%2BduyDAGNz7kEE5c%2FWAmdLq0goo4%2FQIhAPfMftcayiqacHYATmMYnV7YGVBTN8OIv4bVJNZyLZFBKv8DCCsQABoMNjM3NDIzMTgzODA1Igzaf63%2F8fJyMaVr0Jcq3ANPLg7w1B9EC6YHVjlgTcJoeApEP6E8k6PwX%2BKduelqVy4YuSW0zZwqX6sWNA4no7qhHwWJ%2Fvd5B%2FNlJzqXqHJoRNpeV7CiK73oeLsJoCM4Sea0Y0M4jomkm38Gs7rzdmkzRXRKMCP%2F6E4a7oJnPgPxD2ZEebfVMYL3cAE4PmhVbv%2FzIsWA4XT5FLrpdGbEkHXTRDT%2BSzR2%2BViTw5gUHDz05yy0kLwuRniLrK2bUuJoHBDBv52k4NAgUIBvq141OBWqUQVZbqg2zdNYLqc4SNUKx9sW7eGBfLtVif23OdB3mPNG%2B0OaH3wFPD5etaUxdkJbIZAkhgMR4mQBl06UisJJCsODlX5Wohx7dgECh6dm3L7JLucLBATvV0Yhq621QqvgQKI3EvW%2FJVgb4wphn7nQXl1FBcyZqZ1O4vOw0o0VnuheF4j2iKjib5esvJwVGz16EvwBL9Om%2BUcci9ZStgire2Sbzy7AMXknQ%2F7L4wCnIrrrvZNyqP0Ss9fw31rrxOCiH%2BBWYVPdZ2FwXmetlI19q7ubIpKHjC4i%2FqDxGuxAG%2BMLIcaRm5nSZoVe3Lka5w%2F%2FGTmPXfB8Vvld7J65OFLXFuCNvszcxNlsP2JRNJMJCLBXZHn1aGmtJ2L7XjD67uzRBjqkATnjphcxI6yfDR4Pp%2BtHjbkWkYsSyBSY%2Fw1Z4fvtnxCyTso%2FBBJEb3AVYWfsJimdnwAO39IGTSJHjJl1lVU5i63nEBEY%2BoZNTznB5JokCPY3obN5pbZdziUQuloW4hM7xmP4S%2BS21qtPdTbPrUWV5dM43%2FcqrC5mXu8WdOtxIGwuzBfXAYHwFf%2FMPlRlYXKKJthzrDKK2FXRfzYsEfJKLFhS6IEm&X-Amz-Signature=d8f000e9b56a699c44079644aa33cf820880055d1cd7f2fd65113bcfc6431dbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Move config.rviz

<details>
  <summary>{{< markdownify >}}What is rviz?{{< /markdownify >}}</summary>
  
TODO: explain rviz better (say how it is like ros2 echo but visual)

</details>



create `rviz` folder in `mbot_pkg` and move the `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ6EPLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCkk1Qcd0pPWtjqq%2BduyDAGNz7kEE5c%2FWAmdLq0goo4%2FQIhAPfMftcayiqacHYATmMYnV7YGVBTN8OIv4bVJNZyLZFBKv8DCCsQABoMNjM3NDIzMTgzODA1Igzaf63%2F8fJyMaVr0Jcq3ANPLg7w1B9EC6YHVjlgTcJoeApEP6E8k6PwX%2BKduelqVy4YuSW0zZwqX6sWNA4no7qhHwWJ%2Fvd5B%2FNlJzqXqHJoRNpeV7CiK73oeLsJoCM4Sea0Y0M4jomkm38Gs7rzdmkzRXRKMCP%2F6E4a7oJnPgPxD2ZEebfVMYL3cAE4PmhVbv%2FzIsWA4XT5FLrpdGbEkHXTRDT%2BSzR2%2BViTw5gUHDz05yy0kLwuRniLrK2bUuJoHBDBv52k4NAgUIBvq141OBWqUQVZbqg2zdNYLqc4SNUKx9sW7eGBfLtVif23OdB3mPNG%2B0OaH3wFPD5etaUxdkJbIZAkhgMR4mQBl06UisJJCsODlX5Wohx7dgECh6dm3L7JLucLBATvV0Yhq621QqvgQKI3EvW%2FJVgb4wphn7nQXl1FBcyZqZ1O4vOw0o0VnuheF4j2iKjib5esvJwVGz16EvwBL9Om%2BUcci9ZStgire2Sbzy7AMXknQ%2F7L4wCnIrrrvZNyqP0Ss9fw31rrxOCiH%2BBWYVPdZ2FwXmetlI19q7ubIpKHjC4i%2FqDxGuxAG%2BMLIcaRm5nSZoVe3Lka5w%2F%2FGTmPXfB8Vvld7J65OFLXFuCNvszcxNlsP2JRNJMJCLBXZHn1aGmtJ2L7XjD67uzRBjqkATnjphcxI6yfDR4Pp%2BtHjbkWkYsSyBSY%2Fw1Z4fvtnxCyTso%2FBBJEb3AVYWfsJimdnwAO39IGTSJHjJl1lVU5i63nEBEY%2BoZNTznB5JokCPY3obN5pbZdziUQuloW4hM7xmP4S%2BS21qtPdTbPrUWV5dM43%2FcqrC5mXu8WdOtxIGwuzBfXAYHwFf%2FMPlRlYXKKJthzrDKK2FXRfzYsEfJKLFhS6IEm&X-Amz-Signature=c41fded3734d2b4acadb419233eb5c0877ac6991377a14973df47da3b25558e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ6EPLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCkk1Qcd0pPWtjqq%2BduyDAGNz7kEE5c%2FWAmdLq0goo4%2FQIhAPfMftcayiqacHYATmMYnV7YGVBTN8OIv4bVJNZyLZFBKv8DCCsQABoMNjM3NDIzMTgzODA1Igzaf63%2F8fJyMaVr0Jcq3ANPLg7w1B9EC6YHVjlgTcJoeApEP6E8k6PwX%2BKduelqVy4YuSW0zZwqX6sWNA4no7qhHwWJ%2Fvd5B%2FNlJzqXqHJoRNpeV7CiK73oeLsJoCM4Sea0Y0M4jomkm38Gs7rzdmkzRXRKMCP%2F6E4a7oJnPgPxD2ZEebfVMYL3cAE4PmhVbv%2FzIsWA4XT5FLrpdGbEkHXTRDT%2BSzR2%2BViTw5gUHDz05yy0kLwuRniLrK2bUuJoHBDBv52k4NAgUIBvq141OBWqUQVZbqg2zdNYLqc4SNUKx9sW7eGBfLtVif23OdB3mPNG%2B0OaH3wFPD5etaUxdkJbIZAkhgMR4mQBl06UisJJCsODlX5Wohx7dgECh6dm3L7JLucLBATvV0Yhq621QqvgQKI3EvW%2FJVgb4wphn7nQXl1FBcyZqZ1O4vOw0o0VnuheF4j2iKjib5esvJwVGz16EvwBL9Om%2BUcci9ZStgire2Sbzy7AMXknQ%2F7L4wCnIrrrvZNyqP0Ss9fw31rrxOCiH%2BBWYVPdZ2FwXmetlI19q7ubIpKHjC4i%2FqDxGuxAG%2BMLIcaRm5nSZoVe3Lka5w%2F%2FGTmPXfB8Vvld7J65OFLXFuCNvszcxNlsP2JRNJMJCLBXZHn1aGmtJ2L7XjD67uzRBjqkATnjphcxI6yfDR4Pp%2BtHjbkWkYsSyBSY%2Fw1Z4fvtnxCyTso%2FBBJEb3AVYWfsJimdnwAO39IGTSJHjJl1lVU5i63nEBEY%2BoZNTznB5JokCPY3obN5pbZdziUQuloW4hM7xmP4S%2BS21qtPdTbPrUWV5dM43%2FcqrC5mXu8WdOtxIGwuzBfXAYHwFf%2FMPlRlYXKKJthzrDKK2FXRfzYsEfJKLFhS6IEm&X-Amz-Signature=49b711301b1263969ae069794808159e2443d7e096cd9970622b517ee7b82d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
  <summary>{{< markdownify >}}What is in this launch file?{{< /markdownify >}}</summary>
  
[launch files guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/launch-files/)

Launch files are just a scripted way of running multiple ROS nodes at the same time instead of opining multiple terminals.

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

```python "3-6","6-6","6-13","24-24"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ6EPLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCkk1Qcd0pPWtjqq%2BduyDAGNz7kEE5c%2FWAmdLq0goo4%2FQIhAPfMftcayiqacHYATmMYnV7YGVBTN8OIv4bVJNZyLZFBKv8DCCsQABoMNjM3NDIzMTgzODA1Igzaf63%2F8fJyMaVr0Jcq3ANPLg7w1B9EC6YHVjlgTcJoeApEP6E8k6PwX%2BKduelqVy4YuSW0zZwqX6sWNA4no7qhHwWJ%2Fvd5B%2FNlJzqXqHJoRNpeV7CiK73oeLsJoCM4Sea0Y0M4jomkm38Gs7rzdmkzRXRKMCP%2F6E4a7oJnPgPxD2ZEebfVMYL3cAE4PmhVbv%2FzIsWA4XT5FLrpdGbEkHXTRDT%2BSzR2%2BViTw5gUHDz05yy0kLwuRniLrK2bUuJoHBDBv52k4NAgUIBvq141OBWqUQVZbqg2zdNYLqc4SNUKx9sW7eGBfLtVif23OdB3mPNG%2B0OaH3wFPD5etaUxdkJbIZAkhgMR4mQBl06UisJJCsODlX5Wohx7dgECh6dm3L7JLucLBATvV0Yhq621QqvgQKI3EvW%2FJVgb4wphn7nQXl1FBcyZqZ1O4vOw0o0VnuheF4j2iKjib5esvJwVGz16EvwBL9Om%2BUcci9ZStgire2Sbzy7AMXknQ%2F7L4wCnIrrrvZNyqP0Ss9fw31rrxOCiH%2BBWYVPdZ2FwXmetlI19q7ubIpKHjC4i%2FqDxGuxAG%2BMLIcaRm5nSZoVe3Lka5w%2F%2FGTmPXfB8Vvld7J65OFLXFuCNvszcxNlsP2JRNJMJCLBXZHn1aGmtJ2L7XjD67uzRBjqkATnjphcxI6yfDR4Pp%2BtHjbkWkYsSyBSY%2Fw1Z4fvtnxCyTso%2FBBJEb3AVYWfsJimdnwAO39IGTSJHjJl1lVU5i63nEBEY%2BoZNTznB5JokCPY3obN5pbZdziUQuloW4hM7xmP4S%2BS21qtPdTbPrUWV5dM43%2FcqrC5mXu8WdOtxIGwuzBfXAYHwFf%2FMPlRlYXKKJthzrDKK2FXRfzYsEfJKLFhS6IEm&X-Amz-Signature=2adf2fd49c02630873aca6604a000319e216936166993a24d1477a48be363913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ6EPLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCkk1Qcd0pPWtjqq%2BduyDAGNz7kEE5c%2FWAmdLq0goo4%2FQIhAPfMftcayiqacHYATmMYnV7YGVBTN8OIv4bVJNZyLZFBKv8DCCsQABoMNjM3NDIzMTgzODA1Igzaf63%2F8fJyMaVr0Jcq3ANPLg7w1B9EC6YHVjlgTcJoeApEP6E8k6PwX%2BKduelqVy4YuSW0zZwqX6sWNA4no7qhHwWJ%2Fvd5B%2FNlJzqXqHJoRNpeV7CiK73oeLsJoCM4Sea0Y0M4jomkm38Gs7rzdmkzRXRKMCP%2F6E4a7oJnPgPxD2ZEebfVMYL3cAE4PmhVbv%2FzIsWA4XT5FLrpdGbEkHXTRDT%2BSzR2%2BViTw5gUHDz05yy0kLwuRniLrK2bUuJoHBDBv52k4NAgUIBvq141OBWqUQVZbqg2zdNYLqc4SNUKx9sW7eGBfLtVif23OdB3mPNG%2B0OaH3wFPD5etaUxdkJbIZAkhgMR4mQBl06UisJJCsODlX5Wohx7dgECh6dm3L7JLucLBATvV0Yhq621QqvgQKI3EvW%2FJVgb4wphn7nQXl1FBcyZqZ1O4vOw0o0VnuheF4j2iKjib5esvJwVGz16EvwBL9Om%2BUcci9ZStgire2Sbzy7AMXknQ%2F7L4wCnIrrrvZNyqP0Ss9fw31rrxOCiH%2BBWYVPdZ2FwXmetlI19q7ubIpKHjC4i%2FqDxGuxAG%2BMLIcaRm5nSZoVe3Lka5w%2F%2FGTmPXfB8Vvld7J65OFLXFuCNvszcxNlsP2JRNJMJCLBXZHn1aGmtJ2L7XjD67uzRBjqkATnjphcxI6yfDR4Pp%2BtHjbkWkYsSyBSY%2Fw1Z4fvtnxCyTso%2FBBJEb3AVYWfsJimdnwAO39IGTSJHjJl1lVU5i63nEBEY%2BoZNTznB5JokCPY3obN5pbZdziUQuloW4hM7xmP4S%2BS21qtPdTbPrUWV5dM43%2FcqrC5mXu8WdOtxIGwuzBfXAYHwFf%2FMPlRlYXKKJthzrDKK2FXRfzYsEfJKLFhS6IEm&X-Amz-Signature=6aa13d5edbe563c4923c0d2a05203d8014699bf6718d19c2aa505fe17c667a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ6EPLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCkk1Qcd0pPWtjqq%2BduyDAGNz7kEE5c%2FWAmdLq0goo4%2FQIhAPfMftcayiqacHYATmMYnV7YGVBTN8OIv4bVJNZyLZFBKv8DCCsQABoMNjM3NDIzMTgzODA1Igzaf63%2F8fJyMaVr0Jcq3ANPLg7w1B9EC6YHVjlgTcJoeApEP6E8k6PwX%2BKduelqVy4YuSW0zZwqX6sWNA4no7qhHwWJ%2Fvd5B%2FNlJzqXqHJoRNpeV7CiK73oeLsJoCM4Sea0Y0M4jomkm38Gs7rzdmkzRXRKMCP%2F6E4a7oJnPgPxD2ZEebfVMYL3cAE4PmhVbv%2FzIsWA4XT5FLrpdGbEkHXTRDT%2BSzR2%2BViTw5gUHDz05yy0kLwuRniLrK2bUuJoHBDBv52k4NAgUIBvq141OBWqUQVZbqg2zdNYLqc4SNUKx9sW7eGBfLtVif23OdB3mPNG%2B0OaH3wFPD5etaUxdkJbIZAkhgMR4mQBl06UisJJCsODlX5Wohx7dgECh6dm3L7JLucLBATvV0Yhq621QqvgQKI3EvW%2FJVgb4wphn7nQXl1FBcyZqZ1O4vOw0o0VnuheF4j2iKjib5esvJwVGz16EvwBL9Om%2BUcci9ZStgire2Sbzy7AMXknQ%2F7L4wCnIrrrvZNyqP0Ss9fw31rrxOCiH%2BBWYVPdZ2FwXmetlI19q7ubIpKHjC4i%2FqDxGuxAG%2BMLIcaRm5nSZoVe3Lka5w%2F%2FGTmPXfB8Vvld7J65OFLXFuCNvszcxNlsP2JRNJMJCLBXZHn1aGmtJ2L7XjD67uzRBjqkATnjphcxI6yfDR4Pp%2BtHjbkWkYsSyBSY%2Fw1Z4fvtnxCyTso%2FBBJEb3AVYWfsJimdnwAO39IGTSJHjJl1lVU5i63nEBEY%2BoZNTznB5JokCPY3obN5pbZdziUQuloW4hM7xmP4S%2BS21qtPdTbPrUWV5dM43%2FcqrC5mXu8WdOtxIGwuzBfXAYHwFf%2FMPlRlYXKKJthzrDKK2FXRfzYsEfJKLFhS6IEm&X-Amz-Signature=d2a244e599b368823ad02ee6346001fb36ec2c2b1596e5f611fbfb369b5f1f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


