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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3RZKH6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC%2FzULMgvdv9%2B%2Bd48qqfoczOufrX6ZP439whPgSvy9qzAIgdNMcTiStxybEJj82ipJYg9BS9mq1QXdAji7epWzM2FEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh3VxiFrg2M9zZZBircA%2BWeJcsLOPk%2B707Z%2BiLhaA89D73IrbJ8bm7h4Vt%2FC8beHTNGJ0IpWCns6StXzwlgJk%2FH7HftaF0nR8z4LsfOCHr0lTqqc3voZkycqoSw4e3H4PBttw9YX2NdUIllByCybMqIlttJPBLGDe6WMlpp4lJSw5VvJ8SuyjTS5N753zvNCMfy2b3mYbD9GZno343cMpwIYnmeKLlpLFjnST8r5iJnnB7LgfpykBlhLrTNhYzISJebE5KT05ss1nfB5KKzny2EEjVSVWifXAM2FT0bNnUoLmWQ1lCYqpCywzzgGrqXHrI%2FCk%2FI9nRWa1zw7Lu2YLg9PKylhFOL94YZUSLkVC66tinWDRHx5Nk9BElMBuOf0pDCBwT%2FAZMAugzgVa2dt4rZuC8Wm5jSL%2FIsI1B7QSW0hf47wzOwx7F%2BTq3ot%2F9UfYq1CEREb%2FKaHjWtPXFjwQO5bK%2FawE3fbhITl%2BsIQD53HvT%2FIFUCZxn%2FhtyP%2FD834PKJn4gHhGXtVhcwOw6QjZdF4sPYUgdx7b0Fn9yNkfzoAdqRTDoqesby%2BJfHkamPTLHFoGcLzXicH5b5K9XfRfgit5mx%2B0C2FRtqfI9aS09punAnii1Ci8i3mv8STpYW1ekSvTbRg55LPF1MMNiPnMQGOqUBxx9bNc9BCVAhRSfIQtSV%2F37FRU9BqebosOdg91uZM7KH1bTDsy3yQe24PrUA2qPKMq70UyWVQQhW8sKfJVfz1gTm54W6TBImRkbBTfronF9%2F9ZAA6Ixb3%2Ft12XFqgdJRvH76%2BKpbEUNLpFEeIKN2yOgnSB%2F5PE84jt79dJcnlSlT%2B9Mc2tpVQxwQief5ovEau9%2FFTWrQj%2Fv%2FBn1LDKXOrNqtlrlb&X-Amz-Signature=66d5d2497b71410e540596133ccacc9d7bf1687305b591924929268815ed342c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3RZKH6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC%2FzULMgvdv9%2B%2Bd48qqfoczOufrX6ZP439whPgSvy9qzAIgdNMcTiStxybEJj82ipJYg9BS9mq1QXdAji7epWzM2FEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh3VxiFrg2M9zZZBircA%2BWeJcsLOPk%2B707Z%2BiLhaA89D73IrbJ8bm7h4Vt%2FC8beHTNGJ0IpWCns6StXzwlgJk%2FH7HftaF0nR8z4LsfOCHr0lTqqc3voZkycqoSw4e3H4PBttw9YX2NdUIllByCybMqIlttJPBLGDe6WMlpp4lJSw5VvJ8SuyjTS5N753zvNCMfy2b3mYbD9GZno343cMpwIYnmeKLlpLFjnST8r5iJnnB7LgfpykBlhLrTNhYzISJebE5KT05ss1nfB5KKzny2EEjVSVWifXAM2FT0bNnUoLmWQ1lCYqpCywzzgGrqXHrI%2FCk%2FI9nRWa1zw7Lu2YLg9PKylhFOL94YZUSLkVC66tinWDRHx5Nk9BElMBuOf0pDCBwT%2FAZMAugzgVa2dt4rZuC8Wm5jSL%2FIsI1B7QSW0hf47wzOwx7F%2BTq3ot%2F9UfYq1CEREb%2FKaHjWtPXFjwQO5bK%2FawE3fbhITl%2BsIQD53HvT%2FIFUCZxn%2FhtyP%2FD834PKJn4gHhGXtVhcwOw6QjZdF4sPYUgdx7b0Fn9yNkfzoAdqRTDoqesby%2BJfHkamPTLHFoGcLzXicH5b5K9XfRfgit5mx%2B0C2FRtqfI9aS09punAnii1Ci8i3mv8STpYW1ekSvTbRg55LPF1MMNiPnMQGOqUBxx9bNc9BCVAhRSfIQtSV%2F37FRU9BqebosOdg91uZM7KH1bTDsy3yQe24PrUA2qPKMq70UyWVQQhW8sKfJVfz1gTm54W6TBImRkbBTfronF9%2F9ZAA6Ixb3%2Ft12XFqgdJRvH76%2BKpbEUNLpFEeIKN2yOgnSB%2F5PE84jt79dJcnlSlT%2B9Mc2tpVQxwQief5ovEau9%2FFTWrQj%2Fv%2FBn1LDKXOrNqtlrlb&X-Amz-Signature=8f3d473458942274c0fa00bbb8bfdfe663fdd16d224ecf9c47eb8a498165d6ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3RZKH6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC%2FzULMgvdv9%2B%2Bd48qqfoczOufrX6ZP439whPgSvy9qzAIgdNMcTiStxybEJj82ipJYg9BS9mq1QXdAji7epWzM2FEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh3VxiFrg2M9zZZBircA%2BWeJcsLOPk%2B707Z%2BiLhaA89D73IrbJ8bm7h4Vt%2FC8beHTNGJ0IpWCns6StXzwlgJk%2FH7HftaF0nR8z4LsfOCHr0lTqqc3voZkycqoSw4e3H4PBttw9YX2NdUIllByCybMqIlttJPBLGDe6WMlpp4lJSw5VvJ8SuyjTS5N753zvNCMfy2b3mYbD9GZno343cMpwIYnmeKLlpLFjnST8r5iJnnB7LgfpykBlhLrTNhYzISJebE5KT05ss1nfB5KKzny2EEjVSVWifXAM2FT0bNnUoLmWQ1lCYqpCywzzgGrqXHrI%2FCk%2FI9nRWa1zw7Lu2YLg9PKylhFOL94YZUSLkVC66tinWDRHx5Nk9BElMBuOf0pDCBwT%2FAZMAugzgVa2dt4rZuC8Wm5jSL%2FIsI1B7QSW0hf47wzOwx7F%2BTq3ot%2F9UfYq1CEREb%2FKaHjWtPXFjwQO5bK%2FawE3fbhITl%2BsIQD53HvT%2FIFUCZxn%2FhtyP%2FD834PKJn4gHhGXtVhcwOw6QjZdF4sPYUgdx7b0Fn9yNkfzoAdqRTDoqesby%2BJfHkamPTLHFoGcLzXicH5b5K9XfRfgit5mx%2B0C2FRtqfI9aS09punAnii1Ci8i3mv8STpYW1ekSvTbRg55LPF1MMNiPnMQGOqUBxx9bNc9BCVAhRSfIQtSV%2F37FRU9BqebosOdg91uZM7KH1bTDsy3yQe24PrUA2qPKMq70UyWVQQhW8sKfJVfz1gTm54W6TBImRkbBTfronF9%2F9ZAA6Ixb3%2Ft12XFqgdJRvH76%2BKpbEUNLpFEeIKN2yOgnSB%2F5PE84jt79dJcnlSlT%2B9Mc2tpVQxwQief5ovEau9%2FFTWrQj%2Fv%2FBn1LDKXOrNqtlrlb&X-Amz-Signature=091e923d33f9f8ed0b721cec078d6f5ff6ce0afc44b895e851717e3dacf1fd9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3RZKH6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC%2FzULMgvdv9%2B%2Bd48qqfoczOufrX6ZP439whPgSvy9qzAIgdNMcTiStxybEJj82ipJYg9BS9mq1QXdAji7epWzM2FEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh3VxiFrg2M9zZZBircA%2BWeJcsLOPk%2B707Z%2BiLhaA89D73IrbJ8bm7h4Vt%2FC8beHTNGJ0IpWCns6StXzwlgJk%2FH7HftaF0nR8z4LsfOCHr0lTqqc3voZkycqoSw4e3H4PBttw9YX2NdUIllByCybMqIlttJPBLGDe6WMlpp4lJSw5VvJ8SuyjTS5N753zvNCMfy2b3mYbD9GZno343cMpwIYnmeKLlpLFjnST8r5iJnnB7LgfpykBlhLrTNhYzISJebE5KT05ss1nfB5KKzny2EEjVSVWifXAM2FT0bNnUoLmWQ1lCYqpCywzzgGrqXHrI%2FCk%2FI9nRWa1zw7Lu2YLg9PKylhFOL94YZUSLkVC66tinWDRHx5Nk9BElMBuOf0pDCBwT%2FAZMAugzgVa2dt4rZuC8Wm5jSL%2FIsI1B7QSW0hf47wzOwx7F%2BTq3ot%2F9UfYq1CEREb%2FKaHjWtPXFjwQO5bK%2FawE3fbhITl%2BsIQD53HvT%2FIFUCZxn%2FhtyP%2FD834PKJn4gHhGXtVhcwOw6QjZdF4sPYUgdx7b0Fn9yNkfzoAdqRTDoqesby%2BJfHkamPTLHFoGcLzXicH5b5K9XfRfgit5mx%2B0C2FRtqfI9aS09punAnii1Ci8i3mv8STpYW1ekSvTbRg55LPF1MMNiPnMQGOqUBxx9bNc9BCVAhRSfIQtSV%2F37FRU9BqebosOdg91uZM7KH1bTDsy3yQe24PrUA2qPKMq70UyWVQQhW8sKfJVfz1gTm54W6TBImRkbBTfronF9%2F9ZAA6Ixb3%2Ft12XFqgdJRvH76%2BKpbEUNLpFEeIKN2yOgnSB%2F5PE84jt79dJcnlSlT%2B9Mc2tpVQxwQief5ovEau9%2FFTWrQj%2Fv%2FBn1LDKXOrNqtlrlb&X-Amz-Signature=3f7a77df1a3b9edacba21255c9aa3c92fd8ecd2448846477b860cd19aebc57a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3RZKH6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC%2FzULMgvdv9%2B%2Bd48qqfoczOufrX6ZP439whPgSvy9qzAIgdNMcTiStxybEJj82ipJYg9BS9mq1QXdAji7epWzM2FEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh3VxiFrg2M9zZZBircA%2BWeJcsLOPk%2B707Z%2BiLhaA89D73IrbJ8bm7h4Vt%2FC8beHTNGJ0IpWCns6StXzwlgJk%2FH7HftaF0nR8z4LsfOCHr0lTqqc3voZkycqoSw4e3H4PBttw9YX2NdUIllByCybMqIlttJPBLGDe6WMlpp4lJSw5VvJ8SuyjTS5N753zvNCMfy2b3mYbD9GZno343cMpwIYnmeKLlpLFjnST8r5iJnnB7LgfpykBlhLrTNhYzISJebE5KT05ss1nfB5KKzny2EEjVSVWifXAM2FT0bNnUoLmWQ1lCYqpCywzzgGrqXHrI%2FCk%2FI9nRWa1zw7Lu2YLg9PKylhFOL94YZUSLkVC66tinWDRHx5Nk9BElMBuOf0pDCBwT%2FAZMAugzgVa2dt4rZuC8Wm5jSL%2FIsI1B7QSW0hf47wzOwx7F%2BTq3ot%2F9UfYq1CEREb%2FKaHjWtPXFjwQO5bK%2FawE3fbhITl%2BsIQD53HvT%2FIFUCZxn%2FhtyP%2FD834PKJn4gHhGXtVhcwOw6QjZdF4sPYUgdx7b0Fn9yNkfzoAdqRTDoqesby%2BJfHkamPTLHFoGcLzXicH5b5K9XfRfgit5mx%2B0C2FRtqfI9aS09punAnii1Ci8i3mv8STpYW1ekSvTbRg55LPF1MMNiPnMQGOqUBxx9bNc9BCVAhRSfIQtSV%2F37FRU9BqebosOdg91uZM7KH1bTDsy3yQe24PrUA2qPKMq70UyWVQQhW8sKfJVfz1gTm54W6TBImRkbBTfronF9%2F9ZAA6Ixb3%2Ft12XFqgdJRvH76%2BKpbEUNLpFEeIKN2yOgnSB%2F5PE84jt79dJcnlSlT%2B9Mc2tpVQxwQief5ovEau9%2FFTWrQj%2Fv%2FBn1LDKXOrNqtlrlb&X-Amz-Signature=3353bc90887ae089df05aadcfacd865c85e2761ae2598c9393985233f6d6f924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3RZKH6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC%2FzULMgvdv9%2B%2Bd48qqfoczOufrX6ZP439whPgSvy9qzAIgdNMcTiStxybEJj82ipJYg9BS9mq1QXdAji7epWzM2FEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh3VxiFrg2M9zZZBircA%2BWeJcsLOPk%2B707Z%2BiLhaA89D73IrbJ8bm7h4Vt%2FC8beHTNGJ0IpWCns6StXzwlgJk%2FH7HftaF0nR8z4LsfOCHr0lTqqc3voZkycqoSw4e3H4PBttw9YX2NdUIllByCybMqIlttJPBLGDe6WMlpp4lJSw5VvJ8SuyjTS5N753zvNCMfy2b3mYbD9GZno343cMpwIYnmeKLlpLFjnST8r5iJnnB7LgfpykBlhLrTNhYzISJebE5KT05ss1nfB5KKzny2EEjVSVWifXAM2FT0bNnUoLmWQ1lCYqpCywzzgGrqXHrI%2FCk%2FI9nRWa1zw7Lu2YLg9PKylhFOL94YZUSLkVC66tinWDRHx5Nk9BElMBuOf0pDCBwT%2FAZMAugzgVa2dt4rZuC8Wm5jSL%2FIsI1B7QSW0hf47wzOwx7F%2BTq3ot%2F9UfYq1CEREb%2FKaHjWtPXFjwQO5bK%2FawE3fbhITl%2BsIQD53HvT%2FIFUCZxn%2FhtyP%2FD834PKJn4gHhGXtVhcwOw6QjZdF4sPYUgdx7b0Fn9yNkfzoAdqRTDoqesby%2BJfHkamPTLHFoGcLzXicH5b5K9XfRfgit5mx%2B0C2FRtqfI9aS09punAnii1Ci8i3mv8STpYW1ekSvTbRg55LPF1MMNiPnMQGOqUBxx9bNc9BCVAhRSfIQtSV%2F37FRU9BqebosOdg91uZM7KH1bTDsy3yQe24PrUA2qPKMq70UyWVQQhW8sKfJVfz1gTm54W6TBImRkbBTfronF9%2F9ZAA6Ixb3%2Ft12XFqgdJRvH76%2BKpbEUNLpFEeIKN2yOgnSB%2F5PE84jt79dJcnlSlT%2B9Mc2tpVQxwQief5ovEau9%2FFTWrQj%2Fv%2FBn1LDKXOrNqtlrlb&X-Amz-Signature=94c0ba20035c6110f8c5f3b6500378d376fa09d71a47a9a4ba496cc34b50ea0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3RZKH6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC%2FzULMgvdv9%2B%2Bd48qqfoczOufrX6ZP439whPgSvy9qzAIgdNMcTiStxybEJj82ipJYg9BS9mq1QXdAji7epWzM2FEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh3VxiFrg2M9zZZBircA%2BWeJcsLOPk%2B707Z%2BiLhaA89D73IrbJ8bm7h4Vt%2FC8beHTNGJ0IpWCns6StXzwlgJk%2FH7HftaF0nR8z4LsfOCHr0lTqqc3voZkycqoSw4e3H4PBttw9YX2NdUIllByCybMqIlttJPBLGDe6WMlpp4lJSw5VvJ8SuyjTS5N753zvNCMfy2b3mYbD9GZno343cMpwIYnmeKLlpLFjnST8r5iJnnB7LgfpykBlhLrTNhYzISJebE5KT05ss1nfB5KKzny2EEjVSVWifXAM2FT0bNnUoLmWQ1lCYqpCywzzgGrqXHrI%2FCk%2FI9nRWa1zw7Lu2YLg9PKylhFOL94YZUSLkVC66tinWDRHx5Nk9BElMBuOf0pDCBwT%2FAZMAugzgVa2dt4rZuC8Wm5jSL%2FIsI1B7QSW0hf47wzOwx7F%2BTq3ot%2F9UfYq1CEREb%2FKaHjWtPXFjwQO5bK%2FawE3fbhITl%2BsIQD53HvT%2FIFUCZxn%2FhtyP%2FD834PKJn4gHhGXtVhcwOw6QjZdF4sPYUgdx7b0Fn9yNkfzoAdqRTDoqesby%2BJfHkamPTLHFoGcLzXicH5b5K9XfRfgit5mx%2B0C2FRtqfI9aS09punAnii1Ci8i3mv8STpYW1ekSvTbRg55LPF1MMNiPnMQGOqUBxx9bNc9BCVAhRSfIQtSV%2F37FRU9BqebosOdg91uZM7KH1bTDsy3yQe24PrUA2qPKMq70UyWVQQhW8sKfJVfz1gTm54W6TBImRkbBTfronF9%2F9ZAA6Ixb3%2Ft12XFqgdJRvH76%2BKpbEUNLpFEeIKN2yOgnSB%2F5PE84jt79dJcnlSlT%2B9Mc2tpVQxwQief5ovEau9%2FFTWrQj%2Fv%2FBn1LDKXOrNqtlrlb&X-Amz-Signature=30eee6b82dee073e29867e4a1f0a7baa6505d8e09b1f6169ec6cea86c7dafe27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3RZKH6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC%2FzULMgvdv9%2B%2Bd48qqfoczOufrX6ZP439whPgSvy9qzAIgdNMcTiStxybEJj82ipJYg9BS9mq1QXdAji7epWzM2FEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh3VxiFrg2M9zZZBircA%2BWeJcsLOPk%2B707Z%2BiLhaA89D73IrbJ8bm7h4Vt%2FC8beHTNGJ0IpWCns6StXzwlgJk%2FH7HftaF0nR8z4LsfOCHr0lTqqc3voZkycqoSw4e3H4PBttw9YX2NdUIllByCybMqIlttJPBLGDe6WMlpp4lJSw5VvJ8SuyjTS5N753zvNCMfy2b3mYbD9GZno343cMpwIYnmeKLlpLFjnST8r5iJnnB7LgfpykBlhLrTNhYzISJebE5KT05ss1nfB5KKzny2EEjVSVWifXAM2FT0bNnUoLmWQ1lCYqpCywzzgGrqXHrI%2FCk%2FI9nRWa1zw7Lu2YLg9PKylhFOL94YZUSLkVC66tinWDRHx5Nk9BElMBuOf0pDCBwT%2FAZMAugzgVa2dt4rZuC8Wm5jSL%2FIsI1B7QSW0hf47wzOwx7F%2BTq3ot%2F9UfYq1CEREb%2FKaHjWtPXFjwQO5bK%2FawE3fbhITl%2BsIQD53HvT%2FIFUCZxn%2FhtyP%2FD834PKJn4gHhGXtVhcwOw6QjZdF4sPYUgdx7b0Fn9yNkfzoAdqRTDoqesby%2BJfHkamPTLHFoGcLzXicH5b5K9XfRfgit5mx%2B0C2FRtqfI9aS09punAnii1Ci8i3mv8STpYW1ekSvTbRg55LPF1MMNiPnMQGOqUBxx9bNc9BCVAhRSfIQtSV%2F37FRU9BqebosOdg91uZM7KH1bTDsy3yQe24PrUA2qPKMq70UyWVQQhW8sKfJVfz1gTm54W6TBImRkbBTfronF9%2F9ZAA6Ixb3%2Ft12XFqgdJRvH76%2BKpbEUNLpFEeIKN2yOgnSB%2F5PE84jt79dJcnlSlT%2B9Mc2tpVQxwQief5ovEau9%2FFTWrQj%2Fv%2FBn1LDKXOrNqtlrlb&X-Amz-Signature=1dd80c5d8a8a3b65cb1ca33e464ebbf56e7c7a6abb34fa9296689deac1944b0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3RZKH6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC%2FzULMgvdv9%2B%2Bd48qqfoczOufrX6ZP439whPgSvy9qzAIgdNMcTiStxybEJj82ipJYg9BS9mq1QXdAji7epWzM2FEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh3VxiFrg2M9zZZBircA%2BWeJcsLOPk%2B707Z%2BiLhaA89D73IrbJ8bm7h4Vt%2FC8beHTNGJ0IpWCns6StXzwlgJk%2FH7HftaF0nR8z4LsfOCHr0lTqqc3voZkycqoSw4e3H4PBttw9YX2NdUIllByCybMqIlttJPBLGDe6WMlpp4lJSw5VvJ8SuyjTS5N753zvNCMfy2b3mYbD9GZno343cMpwIYnmeKLlpLFjnST8r5iJnnB7LgfpykBlhLrTNhYzISJebE5KT05ss1nfB5KKzny2EEjVSVWifXAM2FT0bNnUoLmWQ1lCYqpCywzzgGrqXHrI%2FCk%2FI9nRWa1zw7Lu2YLg9PKylhFOL94YZUSLkVC66tinWDRHx5Nk9BElMBuOf0pDCBwT%2FAZMAugzgVa2dt4rZuC8Wm5jSL%2FIsI1B7QSW0hf47wzOwx7F%2BTq3ot%2F9UfYq1CEREb%2FKaHjWtPXFjwQO5bK%2FawE3fbhITl%2BsIQD53HvT%2FIFUCZxn%2FhtyP%2FD834PKJn4gHhGXtVhcwOw6QjZdF4sPYUgdx7b0Fn9yNkfzoAdqRTDoqesby%2BJfHkamPTLHFoGcLzXicH5b5K9XfRfgit5mx%2B0C2FRtqfI9aS09punAnii1Ci8i3mv8STpYW1ekSvTbRg55LPF1MMNiPnMQGOqUBxx9bNc9BCVAhRSfIQtSV%2F37FRU9BqebosOdg91uZM7KH1bTDsy3yQe24PrUA2qPKMq70UyWVQQhW8sKfJVfz1gTm54W6TBImRkbBTfronF9%2F9ZAA6Ixb3%2Ft12XFqgdJRvH76%2BKpbEUNLpFEeIKN2yOgnSB%2F5PE84jt79dJcnlSlT%2B9Mc2tpVQxwQief5ovEau9%2FFTWrQj%2Fv%2FBn1LDKXOrNqtlrlb&X-Amz-Signature=e6cde2a956c7c430c68f00c5a412c1092891842b1f4720775b408c453d7c1d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3RZKH6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC%2FzULMgvdv9%2B%2Bd48qqfoczOufrX6ZP439whPgSvy9qzAIgdNMcTiStxybEJj82ipJYg9BS9mq1QXdAji7epWzM2FEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh3VxiFrg2M9zZZBircA%2BWeJcsLOPk%2B707Z%2BiLhaA89D73IrbJ8bm7h4Vt%2FC8beHTNGJ0IpWCns6StXzwlgJk%2FH7HftaF0nR8z4LsfOCHr0lTqqc3voZkycqoSw4e3H4PBttw9YX2NdUIllByCybMqIlttJPBLGDe6WMlpp4lJSw5VvJ8SuyjTS5N753zvNCMfy2b3mYbD9GZno343cMpwIYnmeKLlpLFjnST8r5iJnnB7LgfpykBlhLrTNhYzISJebE5KT05ss1nfB5KKzny2EEjVSVWifXAM2FT0bNnUoLmWQ1lCYqpCywzzgGrqXHrI%2FCk%2FI9nRWa1zw7Lu2YLg9PKylhFOL94YZUSLkVC66tinWDRHx5Nk9BElMBuOf0pDCBwT%2FAZMAugzgVa2dt4rZuC8Wm5jSL%2FIsI1B7QSW0hf47wzOwx7F%2BTq3ot%2F9UfYq1CEREb%2FKaHjWtPXFjwQO5bK%2FawE3fbhITl%2BsIQD53HvT%2FIFUCZxn%2FhtyP%2FD834PKJn4gHhGXtVhcwOw6QjZdF4sPYUgdx7b0Fn9yNkfzoAdqRTDoqesby%2BJfHkamPTLHFoGcLzXicH5b5K9XfRfgit5mx%2B0C2FRtqfI9aS09punAnii1Ci8i3mv8STpYW1ekSvTbRg55LPF1MMNiPnMQGOqUBxx9bNc9BCVAhRSfIQtSV%2F37FRU9BqebosOdg91uZM7KH1bTDsy3yQe24PrUA2qPKMq70UyWVQQhW8sKfJVfz1gTm54W6TBImRkbBTfronF9%2F9ZAA6Ixb3%2Ft12XFqgdJRvH76%2BKpbEUNLpFEeIKN2yOgnSB%2F5PE84jt79dJcnlSlT%2B9Mc2tpVQxwQief5ovEau9%2FFTWrQj%2Fv%2FBn1LDKXOrNqtlrlb&X-Amz-Signature=8c6493f394917c8b2741fb7b7cd0541c4b99d5f3343194ad68b7d3ec4968b5d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3RZKH6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC%2FzULMgvdv9%2B%2Bd48qqfoczOufrX6ZP439whPgSvy9qzAIgdNMcTiStxybEJj82ipJYg9BS9mq1QXdAji7epWzM2FEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh3VxiFrg2M9zZZBircA%2BWeJcsLOPk%2B707Z%2BiLhaA89D73IrbJ8bm7h4Vt%2FC8beHTNGJ0IpWCns6StXzwlgJk%2FH7HftaF0nR8z4LsfOCHr0lTqqc3voZkycqoSw4e3H4PBttw9YX2NdUIllByCybMqIlttJPBLGDe6WMlpp4lJSw5VvJ8SuyjTS5N753zvNCMfy2b3mYbD9GZno343cMpwIYnmeKLlpLFjnST8r5iJnnB7LgfpykBlhLrTNhYzISJebE5KT05ss1nfB5KKzny2EEjVSVWifXAM2FT0bNnUoLmWQ1lCYqpCywzzgGrqXHrI%2FCk%2FI9nRWa1zw7Lu2YLg9PKylhFOL94YZUSLkVC66tinWDRHx5Nk9BElMBuOf0pDCBwT%2FAZMAugzgVa2dt4rZuC8Wm5jSL%2FIsI1B7QSW0hf47wzOwx7F%2BTq3ot%2F9UfYq1CEREb%2FKaHjWtPXFjwQO5bK%2FawE3fbhITl%2BsIQD53HvT%2FIFUCZxn%2FhtyP%2FD834PKJn4gHhGXtVhcwOw6QjZdF4sPYUgdx7b0Fn9yNkfzoAdqRTDoqesby%2BJfHkamPTLHFoGcLzXicH5b5K9XfRfgit5mx%2B0C2FRtqfI9aS09punAnii1Ci8i3mv8STpYW1ekSvTbRg55LPF1MMNiPnMQGOqUBxx9bNc9BCVAhRSfIQtSV%2F37FRU9BqebosOdg91uZM7KH1bTDsy3yQe24PrUA2qPKMq70UyWVQQhW8sKfJVfz1gTm54W6TBImRkbBTfronF9%2F9ZAA6Ixb3%2Ft12XFqgdJRvH76%2BKpbEUNLpFEeIKN2yOgnSB%2F5PE84jt79dJcnlSlT%2B9Mc2tpVQxwQief5ovEau9%2FFTWrQj%2Fv%2FBn1LDKXOrNqtlrlb&X-Amz-Signature=088cb3e0dd45a792a609b3d6574e9eacb3aed6330633ebc07400041c88e65859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3RZKH6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC%2FzULMgvdv9%2B%2Bd48qqfoczOufrX6ZP439whPgSvy9qzAIgdNMcTiStxybEJj82ipJYg9BS9mq1QXdAji7epWzM2FEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh3VxiFrg2M9zZZBircA%2BWeJcsLOPk%2B707Z%2BiLhaA89D73IrbJ8bm7h4Vt%2FC8beHTNGJ0IpWCns6StXzwlgJk%2FH7HftaF0nR8z4LsfOCHr0lTqqc3voZkycqoSw4e3H4PBttw9YX2NdUIllByCybMqIlttJPBLGDe6WMlpp4lJSw5VvJ8SuyjTS5N753zvNCMfy2b3mYbD9GZno343cMpwIYnmeKLlpLFjnST8r5iJnnB7LgfpykBlhLrTNhYzISJebE5KT05ss1nfB5KKzny2EEjVSVWifXAM2FT0bNnUoLmWQ1lCYqpCywzzgGrqXHrI%2FCk%2FI9nRWa1zw7Lu2YLg9PKylhFOL94YZUSLkVC66tinWDRHx5Nk9BElMBuOf0pDCBwT%2FAZMAugzgVa2dt4rZuC8Wm5jSL%2FIsI1B7QSW0hf47wzOwx7F%2BTq3ot%2F9UfYq1CEREb%2FKaHjWtPXFjwQO5bK%2FawE3fbhITl%2BsIQD53HvT%2FIFUCZxn%2FhtyP%2FD834PKJn4gHhGXtVhcwOw6QjZdF4sPYUgdx7b0Fn9yNkfzoAdqRTDoqesby%2BJfHkamPTLHFoGcLzXicH5b5K9XfRfgit5mx%2B0C2FRtqfI9aS09punAnii1Ci8i3mv8STpYW1ekSvTbRg55LPF1MMNiPnMQGOqUBxx9bNc9BCVAhRSfIQtSV%2F37FRU9BqebosOdg91uZM7KH1bTDsy3yQe24PrUA2qPKMq70UyWVQQhW8sKfJVfz1gTm54W6TBImRkbBTfronF9%2F9ZAA6Ixb3%2Ft12XFqgdJRvH76%2BKpbEUNLpFEeIKN2yOgnSB%2F5PE84jt79dJcnlSlT%2B9Mc2tpVQxwQief5ovEau9%2FFTWrQj%2Fv%2FBn1LDKXOrNqtlrlb&X-Amz-Signature=77c72f08726555656100cce9e226024ac20c4ebed5a6ab455b14d10c168f7fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3RZKH6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC%2FzULMgvdv9%2B%2Bd48qqfoczOufrX6ZP439whPgSvy9qzAIgdNMcTiStxybEJj82ipJYg9BS9mq1QXdAji7epWzM2FEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh3VxiFrg2M9zZZBircA%2BWeJcsLOPk%2B707Z%2BiLhaA89D73IrbJ8bm7h4Vt%2FC8beHTNGJ0IpWCns6StXzwlgJk%2FH7HftaF0nR8z4LsfOCHr0lTqqc3voZkycqoSw4e3H4PBttw9YX2NdUIllByCybMqIlttJPBLGDe6WMlpp4lJSw5VvJ8SuyjTS5N753zvNCMfy2b3mYbD9GZno343cMpwIYnmeKLlpLFjnST8r5iJnnB7LgfpykBlhLrTNhYzISJebE5KT05ss1nfB5KKzny2EEjVSVWifXAM2FT0bNnUoLmWQ1lCYqpCywzzgGrqXHrI%2FCk%2FI9nRWa1zw7Lu2YLg9PKylhFOL94YZUSLkVC66tinWDRHx5Nk9BElMBuOf0pDCBwT%2FAZMAugzgVa2dt4rZuC8Wm5jSL%2FIsI1B7QSW0hf47wzOwx7F%2BTq3ot%2F9UfYq1CEREb%2FKaHjWtPXFjwQO5bK%2FawE3fbhITl%2BsIQD53HvT%2FIFUCZxn%2FhtyP%2FD834PKJn4gHhGXtVhcwOw6QjZdF4sPYUgdx7b0Fn9yNkfzoAdqRTDoqesby%2BJfHkamPTLHFoGcLzXicH5b5K9XfRfgit5mx%2B0C2FRtqfI9aS09punAnii1Ci8i3mv8STpYW1ekSvTbRg55LPF1MMNiPnMQGOqUBxx9bNc9BCVAhRSfIQtSV%2F37FRU9BqebosOdg91uZM7KH1bTDsy3yQe24PrUA2qPKMq70UyWVQQhW8sKfJVfz1gTm54W6TBImRkbBTfronF9%2F9ZAA6Ixb3%2Ft12XFqgdJRvH76%2BKpbEUNLpFEeIKN2yOgnSB%2F5PE84jt79dJcnlSlT%2B9Mc2tpVQxwQief5ovEau9%2FFTWrQj%2Fv%2FBn1LDKXOrNqtlrlb&X-Amz-Signature=412405b5450a01b6de872027a9571e0403f264bf18add3206d396d4bfe6e5609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3RZKH6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC%2FzULMgvdv9%2B%2Bd48qqfoczOufrX6ZP439whPgSvy9qzAIgdNMcTiStxybEJj82ipJYg9BS9mq1QXdAji7epWzM2FEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh3VxiFrg2M9zZZBircA%2BWeJcsLOPk%2B707Z%2BiLhaA89D73IrbJ8bm7h4Vt%2FC8beHTNGJ0IpWCns6StXzwlgJk%2FH7HftaF0nR8z4LsfOCHr0lTqqc3voZkycqoSw4e3H4PBttw9YX2NdUIllByCybMqIlttJPBLGDe6WMlpp4lJSw5VvJ8SuyjTS5N753zvNCMfy2b3mYbD9GZno343cMpwIYnmeKLlpLFjnST8r5iJnnB7LgfpykBlhLrTNhYzISJebE5KT05ss1nfB5KKzny2EEjVSVWifXAM2FT0bNnUoLmWQ1lCYqpCywzzgGrqXHrI%2FCk%2FI9nRWa1zw7Lu2YLg9PKylhFOL94YZUSLkVC66tinWDRHx5Nk9BElMBuOf0pDCBwT%2FAZMAugzgVa2dt4rZuC8Wm5jSL%2FIsI1B7QSW0hf47wzOwx7F%2BTq3ot%2F9UfYq1CEREb%2FKaHjWtPXFjwQO5bK%2FawE3fbhITl%2BsIQD53HvT%2FIFUCZxn%2FhtyP%2FD834PKJn4gHhGXtVhcwOw6QjZdF4sPYUgdx7b0Fn9yNkfzoAdqRTDoqesby%2BJfHkamPTLHFoGcLzXicH5b5K9XfRfgit5mx%2B0C2FRtqfI9aS09punAnii1Ci8i3mv8STpYW1ekSvTbRg55LPF1MMNiPnMQGOqUBxx9bNc9BCVAhRSfIQtSV%2F37FRU9BqebosOdg91uZM7KH1bTDsy3yQe24PrUA2qPKMq70UyWVQQhW8sKfJVfz1gTm54W6TBImRkbBTfronF9%2F9ZAA6Ixb3%2Ft12XFqgdJRvH76%2BKpbEUNLpFEeIKN2yOgnSB%2F5PE84jt79dJcnlSlT%2B9Mc2tpVQxwQief5ovEau9%2FFTWrQj%2Fv%2FBn1LDKXOrNqtlrlb&X-Amz-Signature=8ca79aa25a5be4bce2daab9b93e0d4f18920f212106f8dfd67668158c4c7051a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NPXD6E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAZuhir8uYFaz3dRVhJCmqn5%2FheA9UW2G9%2BzH1JPNrQ1AiBQcI0r%2FG0tDXayJI8yaX9y5NTZeAOPgpa63t3ENpyV3SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1VCrGqNd9L8Xi3UuKtwD7ndHe1rHsVFEdM2D0vEE0w1zNeMZHF%2F3I3arhS2ycKOYIEaHV4whoF3yAOzwDiM2fGpL77yjiV8%2Bj8wzgDa50UsxjHjOLvxwHa%2FFT7dhJFxzBuhMgfvLiS95FnV1%2Bp5PR2lAvixLhWi4eVxZPYSa63k2Z0tr6NlH2ivCLq%2BqB7SAUNoq5dif8%2BFAN5kQVgUmgEYCK2tmUvhmOYsPUbMy7mTB%2FNo4pcViU4KbVXmSmtP48OQVLUfFoCfI9fJQvpXWmwSGvOslV2cxJbRkj%2BXwtZLoqoXvPmGoZinGANbIxeYvUx7NY0ripZKQfvFzw4VjfigeVFYUS30vZoNeP3knrowQkLlz9sDY7%2BL1nDBlL3PaIdlSI2pBwczyYIfReLjo0tFdVBEUGo0mG87JZZS1ykDnoSt8ec2w1JbrWhGqMZhs288mI4ruqfOqNaUuc6wOe8emewnbTyUghoQ%2FMje6t9dsNgTztDqzutx1jLUaXQtVPgPCfAU3pOTuuzMwJFgxmXst8DbS63dZne%2FwAK7fqx4qFwg6DBxec8e8%2BbLgAj0iG%2BZVzr6BqG7xowJiCTkceppebORm%2Fgx9cfbJxlsuKb8g0%2B4QC4cqJaHPfRIxsLZisoZf06DqiWmALiMwmI%2BcxAY6pgHiXyxNFJ14X6jAkxb19HpUS9ZVE%2FyMLigztx1JtVV%2BcI%2FSdgr2XVWsXt9hGIB7ZCVB%2FwUEklqmEQ3KeORlqtkEHC3%2BGj1bnZpmcf6VS8WOeikeyX4nVPSbDIVfKCpmIThx2gIvZKgnC12F9Y85VSIvQgJeKKH6p39PT1PMQ%2BvmypuQw9iGnK3Ih4I88ICWldlLBq05LrebPfRxR542KrmHeHlsuHx6&X-Amz-Signature=5c149a791faef4fdc968877f632dacae23797ed325ba7ff8bdc79408fbeb52bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NPXD6E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAZuhir8uYFaz3dRVhJCmqn5%2FheA9UW2G9%2BzH1JPNrQ1AiBQcI0r%2FG0tDXayJI8yaX9y5NTZeAOPgpa63t3ENpyV3SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1VCrGqNd9L8Xi3UuKtwD7ndHe1rHsVFEdM2D0vEE0w1zNeMZHF%2F3I3arhS2ycKOYIEaHV4whoF3yAOzwDiM2fGpL77yjiV8%2Bj8wzgDa50UsxjHjOLvxwHa%2FFT7dhJFxzBuhMgfvLiS95FnV1%2Bp5PR2lAvixLhWi4eVxZPYSa63k2Z0tr6NlH2ivCLq%2BqB7SAUNoq5dif8%2BFAN5kQVgUmgEYCK2tmUvhmOYsPUbMy7mTB%2FNo4pcViU4KbVXmSmtP48OQVLUfFoCfI9fJQvpXWmwSGvOslV2cxJbRkj%2BXwtZLoqoXvPmGoZinGANbIxeYvUx7NY0ripZKQfvFzw4VjfigeVFYUS30vZoNeP3knrowQkLlz9sDY7%2BL1nDBlL3PaIdlSI2pBwczyYIfReLjo0tFdVBEUGo0mG87JZZS1ykDnoSt8ec2w1JbrWhGqMZhs288mI4ruqfOqNaUuc6wOe8emewnbTyUghoQ%2FMje6t9dsNgTztDqzutx1jLUaXQtVPgPCfAU3pOTuuzMwJFgxmXst8DbS63dZne%2FwAK7fqx4qFwg6DBxec8e8%2BbLgAj0iG%2BZVzr6BqG7xowJiCTkceppebORm%2Fgx9cfbJxlsuKb8g0%2B4QC4cqJaHPfRIxsLZisoZf06DqiWmALiMwmI%2BcxAY6pgHiXyxNFJ14X6jAkxb19HpUS9ZVE%2FyMLigztx1JtVV%2BcI%2FSdgr2XVWsXt9hGIB7ZCVB%2FwUEklqmEQ3KeORlqtkEHC3%2BGj1bnZpmcf6VS8WOeikeyX4nVPSbDIVfKCpmIThx2gIvZKgnC12F9Y85VSIvQgJeKKH6p39PT1PMQ%2BvmypuQw9iGnK3Ih4I88ICWldlLBq05LrebPfRxR542KrmHeHlsuHx6&X-Amz-Signature=bc99e8995ab658e81233a7ce43baea9b5aaab7aea35c25602b72cbefc7616f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NPXD6E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAZuhir8uYFaz3dRVhJCmqn5%2FheA9UW2G9%2BzH1JPNrQ1AiBQcI0r%2FG0tDXayJI8yaX9y5NTZeAOPgpa63t3ENpyV3SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1VCrGqNd9L8Xi3UuKtwD7ndHe1rHsVFEdM2D0vEE0w1zNeMZHF%2F3I3arhS2ycKOYIEaHV4whoF3yAOzwDiM2fGpL77yjiV8%2Bj8wzgDa50UsxjHjOLvxwHa%2FFT7dhJFxzBuhMgfvLiS95FnV1%2Bp5PR2lAvixLhWi4eVxZPYSa63k2Z0tr6NlH2ivCLq%2BqB7SAUNoq5dif8%2BFAN5kQVgUmgEYCK2tmUvhmOYsPUbMy7mTB%2FNo4pcViU4KbVXmSmtP48OQVLUfFoCfI9fJQvpXWmwSGvOslV2cxJbRkj%2BXwtZLoqoXvPmGoZinGANbIxeYvUx7NY0ripZKQfvFzw4VjfigeVFYUS30vZoNeP3knrowQkLlz9sDY7%2BL1nDBlL3PaIdlSI2pBwczyYIfReLjo0tFdVBEUGo0mG87JZZS1ykDnoSt8ec2w1JbrWhGqMZhs288mI4ruqfOqNaUuc6wOe8emewnbTyUghoQ%2FMje6t9dsNgTztDqzutx1jLUaXQtVPgPCfAU3pOTuuzMwJFgxmXst8DbS63dZne%2FwAK7fqx4qFwg6DBxec8e8%2BbLgAj0iG%2BZVzr6BqG7xowJiCTkceppebORm%2Fgx9cfbJxlsuKb8g0%2B4QC4cqJaHPfRIxsLZisoZf06DqiWmALiMwmI%2BcxAY6pgHiXyxNFJ14X6jAkxb19HpUS9ZVE%2FyMLigztx1JtVV%2BcI%2FSdgr2XVWsXt9hGIB7ZCVB%2FwUEklqmEQ3KeORlqtkEHC3%2BGj1bnZpmcf6VS8WOeikeyX4nVPSbDIVfKCpmIThx2gIvZKgnC12F9Y85VSIvQgJeKKH6p39PT1PMQ%2BvmypuQw9iGnK3Ih4I88ICWldlLBq05LrebPfRxR542KrmHeHlsuHx6&X-Amz-Signature=09ed3e5c81cdbce0bc6d2bc96da0204ede5b9999e2b060b3177b558bd112d632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NPXD6E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAZuhir8uYFaz3dRVhJCmqn5%2FheA9UW2G9%2BzH1JPNrQ1AiBQcI0r%2FG0tDXayJI8yaX9y5NTZeAOPgpa63t3ENpyV3SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1VCrGqNd9L8Xi3UuKtwD7ndHe1rHsVFEdM2D0vEE0w1zNeMZHF%2F3I3arhS2ycKOYIEaHV4whoF3yAOzwDiM2fGpL77yjiV8%2Bj8wzgDa50UsxjHjOLvxwHa%2FFT7dhJFxzBuhMgfvLiS95FnV1%2Bp5PR2lAvixLhWi4eVxZPYSa63k2Z0tr6NlH2ivCLq%2BqB7SAUNoq5dif8%2BFAN5kQVgUmgEYCK2tmUvhmOYsPUbMy7mTB%2FNo4pcViU4KbVXmSmtP48OQVLUfFoCfI9fJQvpXWmwSGvOslV2cxJbRkj%2BXwtZLoqoXvPmGoZinGANbIxeYvUx7NY0ripZKQfvFzw4VjfigeVFYUS30vZoNeP3knrowQkLlz9sDY7%2BL1nDBlL3PaIdlSI2pBwczyYIfReLjo0tFdVBEUGo0mG87JZZS1ykDnoSt8ec2w1JbrWhGqMZhs288mI4ruqfOqNaUuc6wOe8emewnbTyUghoQ%2FMje6t9dsNgTztDqzutx1jLUaXQtVPgPCfAU3pOTuuzMwJFgxmXst8DbS63dZne%2FwAK7fqx4qFwg6DBxec8e8%2BbLgAj0iG%2BZVzr6BqG7xowJiCTkceppebORm%2Fgx9cfbJxlsuKb8g0%2B4QC4cqJaHPfRIxsLZisoZf06DqiWmALiMwmI%2BcxAY6pgHiXyxNFJ14X6jAkxb19HpUS9ZVE%2FyMLigztx1JtVV%2BcI%2FSdgr2XVWsXt9hGIB7ZCVB%2FwUEklqmEQ3KeORlqtkEHC3%2BGj1bnZpmcf6VS8WOeikeyX4nVPSbDIVfKCpmIThx2gIvZKgnC12F9Y85VSIvQgJeKKH6p39PT1PMQ%2BvmypuQw9iGnK3Ih4I88ICWldlLBq05LrebPfRxR542KrmHeHlsuHx6&X-Amz-Signature=3c950848e9d66ff5f94c0f640c7a5b9c0b8f65e2a2204060b6bddf62a5a8fe0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NPXD6E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAZuhir8uYFaz3dRVhJCmqn5%2FheA9UW2G9%2BzH1JPNrQ1AiBQcI0r%2FG0tDXayJI8yaX9y5NTZeAOPgpa63t3ENpyV3SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1VCrGqNd9L8Xi3UuKtwD7ndHe1rHsVFEdM2D0vEE0w1zNeMZHF%2F3I3arhS2ycKOYIEaHV4whoF3yAOzwDiM2fGpL77yjiV8%2Bj8wzgDa50UsxjHjOLvxwHa%2FFT7dhJFxzBuhMgfvLiS95FnV1%2Bp5PR2lAvixLhWi4eVxZPYSa63k2Z0tr6NlH2ivCLq%2BqB7SAUNoq5dif8%2BFAN5kQVgUmgEYCK2tmUvhmOYsPUbMy7mTB%2FNo4pcViU4KbVXmSmtP48OQVLUfFoCfI9fJQvpXWmwSGvOslV2cxJbRkj%2BXwtZLoqoXvPmGoZinGANbIxeYvUx7NY0ripZKQfvFzw4VjfigeVFYUS30vZoNeP3knrowQkLlz9sDY7%2BL1nDBlL3PaIdlSI2pBwczyYIfReLjo0tFdVBEUGo0mG87JZZS1ykDnoSt8ec2w1JbrWhGqMZhs288mI4ruqfOqNaUuc6wOe8emewnbTyUghoQ%2FMje6t9dsNgTztDqzutx1jLUaXQtVPgPCfAU3pOTuuzMwJFgxmXst8DbS63dZne%2FwAK7fqx4qFwg6DBxec8e8%2BbLgAj0iG%2BZVzr6BqG7xowJiCTkceppebORm%2Fgx9cfbJxlsuKb8g0%2B4QC4cqJaHPfRIxsLZisoZf06DqiWmALiMwmI%2BcxAY6pgHiXyxNFJ14X6jAkxb19HpUS9ZVE%2FyMLigztx1JtVV%2BcI%2FSdgr2XVWsXt9hGIB7ZCVB%2FwUEklqmEQ3KeORlqtkEHC3%2BGj1bnZpmcf6VS8WOeikeyX4nVPSbDIVfKCpmIThx2gIvZKgnC12F9Y85VSIvQgJeKKH6p39PT1PMQ%2BvmypuQw9iGnK3Ih4I88ICWldlLBq05LrebPfRxR542KrmHeHlsuHx6&X-Amz-Signature=9bc4e7fd9dc667ee4c6e801ab5c291bff8665619a13dc831a0c2325a74864075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NPXD6E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAZuhir8uYFaz3dRVhJCmqn5%2FheA9UW2G9%2BzH1JPNrQ1AiBQcI0r%2FG0tDXayJI8yaX9y5NTZeAOPgpa63t3ENpyV3SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1VCrGqNd9L8Xi3UuKtwD7ndHe1rHsVFEdM2D0vEE0w1zNeMZHF%2F3I3arhS2ycKOYIEaHV4whoF3yAOzwDiM2fGpL77yjiV8%2Bj8wzgDa50UsxjHjOLvxwHa%2FFT7dhJFxzBuhMgfvLiS95FnV1%2Bp5PR2lAvixLhWi4eVxZPYSa63k2Z0tr6NlH2ivCLq%2BqB7SAUNoq5dif8%2BFAN5kQVgUmgEYCK2tmUvhmOYsPUbMy7mTB%2FNo4pcViU4KbVXmSmtP48OQVLUfFoCfI9fJQvpXWmwSGvOslV2cxJbRkj%2BXwtZLoqoXvPmGoZinGANbIxeYvUx7NY0ripZKQfvFzw4VjfigeVFYUS30vZoNeP3knrowQkLlz9sDY7%2BL1nDBlL3PaIdlSI2pBwczyYIfReLjo0tFdVBEUGo0mG87JZZS1ykDnoSt8ec2w1JbrWhGqMZhs288mI4ruqfOqNaUuc6wOe8emewnbTyUghoQ%2FMje6t9dsNgTztDqzutx1jLUaXQtVPgPCfAU3pOTuuzMwJFgxmXst8DbS63dZne%2FwAK7fqx4qFwg6DBxec8e8%2BbLgAj0iG%2BZVzr6BqG7xowJiCTkceppebORm%2Fgx9cfbJxlsuKb8g0%2B4QC4cqJaHPfRIxsLZisoZf06DqiWmALiMwmI%2BcxAY6pgHiXyxNFJ14X6jAkxb19HpUS9ZVE%2FyMLigztx1JtVV%2BcI%2FSdgr2XVWsXt9hGIB7ZCVB%2FwUEklqmEQ3KeORlqtkEHC3%2BGj1bnZpmcf6VS8WOeikeyX4nVPSbDIVfKCpmIThx2gIvZKgnC12F9Y85VSIvQgJeKKH6p39PT1PMQ%2BvmypuQw9iGnK3Ih4I88ICWldlLBq05LrebPfRxR542KrmHeHlsuHx6&X-Amz-Signature=b9adb6d55907a0cd5748e6d979d0ecc9f69bfc2d016761fd12199553c88a30c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
