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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57RJ5G5%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLhyMdeOEyGgzQjaxHHf7W9FbmjncjsYhFtJpJGtebgIgSJO3eV9upyOF3eKS6b8%2FinnXv1g8T2Q%2FM3tQnEyOY2Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCBY0V8tD84Yz0s8yyrcA51YPdRc%2BTwa0dIYl5ONS1Q%2BbUMwPIj%2F7ExFbHoOxrngFe6jZFMNrFy9iwU4ccs64V1KLFjJ9RciB7PF%2FTUuLv07R5welPoAlXv38ehD8R58FesGucU2%2FtbxCokUfx4P99XEo1JcYbD1FLkhEvthfaEMjcMa%2Bc%2B5OhC%2FIUudBqKdIAjyZ11KNTIUVJj%2BEesANcgi%2Bc7Dut82gvagmR8jnu42t4wBBqjcioMN4r8bi8VnJ2zLWvxUK%2BuOi8LNYWDqXvyA3CLDYpO3gmBqab8wQO81i7V%2BUMn%2FDAUKlYmBYQXfO2Lv%2Fc5%2B%2B7c58BSjEsW7KCUA1GqStsysfS6Al5r1MKeEEwgAgYvJfWd2CLiPvkYEC6GgqVgq0NUk%2BFLs7TMEXIJie3Ec%2FIbRuOZDpDXWUrEf4ptR6xcIpYJ5JHTqUoOQ7RirY3iPRXnV3FAs%2FZYScT9yxEeSNCjStPqBD5MVTk5V770REdliSyGbYQuBe0I1PvmKMA%2BtDAQFKUalaT3vGgvK4eks6R7P9Z6PjdobrJ4jZf6D%2Bigd%2Fa1vukAHOoXhsa4RyxumB4ittyJyRs109F%2BkRDlNgwqblB3XMxvmFl%2BoBCsWnpvPR3bkTpYwSxG94cSTgeeRbU7Uy4QOMLLqn8wGOqUBjSDFINleX%2FI%2FN9H8YhQZYkadlu6LDH9H0cq1FBAU%2BxLgIIgDwLewx9xm5jhkf0fsvJDW2H12FvXMLstu1S3evmB5WUl3yVRjfpdEF4u3Eape%2BrDRX8AiJ2IElFDaHpXqVOHpYWdvAwyle4P0WdBPF8mZCcV7p8aK834HnvBhXOf54eFvA%2BoWjZ1mO1jaYpQZ7W8HkRujz1EB76stNvr6cAE%2FuJOS&X-Amz-Signature=0c908d294b24f98817fbc180884e2547a088e6ac784412dab150d499cd305a22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57RJ5G5%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLhyMdeOEyGgzQjaxHHf7W9FbmjncjsYhFtJpJGtebgIgSJO3eV9upyOF3eKS6b8%2FinnXv1g8T2Q%2FM3tQnEyOY2Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCBY0V8tD84Yz0s8yyrcA51YPdRc%2BTwa0dIYl5ONS1Q%2BbUMwPIj%2F7ExFbHoOxrngFe6jZFMNrFy9iwU4ccs64V1KLFjJ9RciB7PF%2FTUuLv07R5welPoAlXv38ehD8R58FesGucU2%2FtbxCokUfx4P99XEo1JcYbD1FLkhEvthfaEMjcMa%2Bc%2B5OhC%2FIUudBqKdIAjyZ11KNTIUVJj%2BEesANcgi%2Bc7Dut82gvagmR8jnu42t4wBBqjcioMN4r8bi8VnJ2zLWvxUK%2BuOi8LNYWDqXvyA3CLDYpO3gmBqab8wQO81i7V%2BUMn%2FDAUKlYmBYQXfO2Lv%2Fc5%2B%2B7c58BSjEsW7KCUA1GqStsysfS6Al5r1MKeEEwgAgYvJfWd2CLiPvkYEC6GgqVgq0NUk%2BFLs7TMEXIJie3Ec%2FIbRuOZDpDXWUrEf4ptR6xcIpYJ5JHTqUoOQ7RirY3iPRXnV3FAs%2FZYScT9yxEeSNCjStPqBD5MVTk5V770REdliSyGbYQuBe0I1PvmKMA%2BtDAQFKUalaT3vGgvK4eks6R7P9Z6PjdobrJ4jZf6D%2Bigd%2Fa1vukAHOoXhsa4RyxumB4ittyJyRs109F%2BkRDlNgwqblB3XMxvmFl%2BoBCsWnpvPR3bkTpYwSxG94cSTgeeRbU7Uy4QOMLLqn8wGOqUBjSDFINleX%2FI%2FN9H8YhQZYkadlu6LDH9H0cq1FBAU%2BxLgIIgDwLewx9xm5jhkf0fsvJDW2H12FvXMLstu1S3evmB5WUl3yVRjfpdEF4u3Eape%2BrDRX8AiJ2IElFDaHpXqVOHpYWdvAwyle4P0WdBPF8mZCcV7p8aK834HnvBhXOf54eFvA%2BoWjZ1mO1jaYpQZ7W8HkRujz1EB76stNvr6cAE%2FuJOS&X-Amz-Signature=330b15731ff2c966f04438fc2e1bee60de1d1f8e332ad5f9892d462f3befe2be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57RJ5G5%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLhyMdeOEyGgzQjaxHHf7W9FbmjncjsYhFtJpJGtebgIgSJO3eV9upyOF3eKS6b8%2FinnXv1g8T2Q%2FM3tQnEyOY2Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCBY0V8tD84Yz0s8yyrcA51YPdRc%2BTwa0dIYl5ONS1Q%2BbUMwPIj%2F7ExFbHoOxrngFe6jZFMNrFy9iwU4ccs64V1KLFjJ9RciB7PF%2FTUuLv07R5welPoAlXv38ehD8R58FesGucU2%2FtbxCokUfx4P99XEo1JcYbD1FLkhEvthfaEMjcMa%2Bc%2B5OhC%2FIUudBqKdIAjyZ11KNTIUVJj%2BEesANcgi%2Bc7Dut82gvagmR8jnu42t4wBBqjcioMN4r8bi8VnJ2zLWvxUK%2BuOi8LNYWDqXvyA3CLDYpO3gmBqab8wQO81i7V%2BUMn%2FDAUKlYmBYQXfO2Lv%2Fc5%2B%2B7c58BSjEsW7KCUA1GqStsysfS6Al5r1MKeEEwgAgYvJfWd2CLiPvkYEC6GgqVgq0NUk%2BFLs7TMEXIJie3Ec%2FIbRuOZDpDXWUrEf4ptR6xcIpYJ5JHTqUoOQ7RirY3iPRXnV3FAs%2FZYScT9yxEeSNCjStPqBD5MVTk5V770REdliSyGbYQuBe0I1PvmKMA%2BtDAQFKUalaT3vGgvK4eks6R7P9Z6PjdobrJ4jZf6D%2Bigd%2Fa1vukAHOoXhsa4RyxumB4ittyJyRs109F%2BkRDlNgwqblB3XMxvmFl%2BoBCsWnpvPR3bkTpYwSxG94cSTgeeRbU7Uy4QOMLLqn8wGOqUBjSDFINleX%2FI%2FN9H8YhQZYkadlu6LDH9H0cq1FBAU%2BxLgIIgDwLewx9xm5jhkf0fsvJDW2H12FvXMLstu1S3evmB5WUl3yVRjfpdEF4u3Eape%2BrDRX8AiJ2IElFDaHpXqVOHpYWdvAwyle4P0WdBPF8mZCcV7p8aK834HnvBhXOf54eFvA%2BoWjZ1mO1jaYpQZ7W8HkRujz1EB76stNvr6cAE%2FuJOS&X-Amz-Signature=7f94882469819adceb8e59d6d06ec26e91b171f67ba52ea18aa99ae80ff0a9f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57RJ5G5%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLhyMdeOEyGgzQjaxHHf7W9FbmjncjsYhFtJpJGtebgIgSJO3eV9upyOF3eKS6b8%2FinnXv1g8T2Q%2FM3tQnEyOY2Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCBY0V8tD84Yz0s8yyrcA51YPdRc%2BTwa0dIYl5ONS1Q%2BbUMwPIj%2F7ExFbHoOxrngFe6jZFMNrFy9iwU4ccs64V1KLFjJ9RciB7PF%2FTUuLv07R5welPoAlXv38ehD8R58FesGucU2%2FtbxCokUfx4P99XEo1JcYbD1FLkhEvthfaEMjcMa%2Bc%2B5OhC%2FIUudBqKdIAjyZ11KNTIUVJj%2BEesANcgi%2Bc7Dut82gvagmR8jnu42t4wBBqjcioMN4r8bi8VnJ2zLWvxUK%2BuOi8LNYWDqXvyA3CLDYpO3gmBqab8wQO81i7V%2BUMn%2FDAUKlYmBYQXfO2Lv%2Fc5%2B%2B7c58BSjEsW7KCUA1GqStsysfS6Al5r1MKeEEwgAgYvJfWd2CLiPvkYEC6GgqVgq0NUk%2BFLs7TMEXIJie3Ec%2FIbRuOZDpDXWUrEf4ptR6xcIpYJ5JHTqUoOQ7RirY3iPRXnV3FAs%2FZYScT9yxEeSNCjStPqBD5MVTk5V770REdliSyGbYQuBe0I1PvmKMA%2BtDAQFKUalaT3vGgvK4eks6R7P9Z6PjdobrJ4jZf6D%2Bigd%2Fa1vukAHOoXhsa4RyxumB4ittyJyRs109F%2BkRDlNgwqblB3XMxvmFl%2BoBCsWnpvPR3bkTpYwSxG94cSTgeeRbU7Uy4QOMLLqn8wGOqUBjSDFINleX%2FI%2FN9H8YhQZYkadlu6LDH9H0cq1FBAU%2BxLgIIgDwLewx9xm5jhkf0fsvJDW2H12FvXMLstu1S3evmB5WUl3yVRjfpdEF4u3Eape%2BrDRX8AiJ2IElFDaHpXqVOHpYWdvAwyle4P0WdBPF8mZCcV7p8aK834HnvBhXOf54eFvA%2BoWjZ1mO1jaYpQZ7W8HkRujz1EB76stNvr6cAE%2FuJOS&X-Amz-Signature=4987edde9a10fd36e2d7159747b6595f86b9473f81c38cbd8b7cdbd7af9e9594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57RJ5G5%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLhyMdeOEyGgzQjaxHHf7W9FbmjncjsYhFtJpJGtebgIgSJO3eV9upyOF3eKS6b8%2FinnXv1g8T2Q%2FM3tQnEyOY2Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCBY0V8tD84Yz0s8yyrcA51YPdRc%2BTwa0dIYl5ONS1Q%2BbUMwPIj%2F7ExFbHoOxrngFe6jZFMNrFy9iwU4ccs64V1KLFjJ9RciB7PF%2FTUuLv07R5welPoAlXv38ehD8R58FesGucU2%2FtbxCokUfx4P99XEo1JcYbD1FLkhEvthfaEMjcMa%2Bc%2B5OhC%2FIUudBqKdIAjyZ11KNTIUVJj%2BEesANcgi%2Bc7Dut82gvagmR8jnu42t4wBBqjcioMN4r8bi8VnJ2zLWvxUK%2BuOi8LNYWDqXvyA3CLDYpO3gmBqab8wQO81i7V%2BUMn%2FDAUKlYmBYQXfO2Lv%2Fc5%2B%2B7c58BSjEsW7KCUA1GqStsysfS6Al5r1MKeEEwgAgYvJfWd2CLiPvkYEC6GgqVgq0NUk%2BFLs7TMEXIJie3Ec%2FIbRuOZDpDXWUrEf4ptR6xcIpYJ5JHTqUoOQ7RirY3iPRXnV3FAs%2FZYScT9yxEeSNCjStPqBD5MVTk5V770REdliSyGbYQuBe0I1PvmKMA%2BtDAQFKUalaT3vGgvK4eks6R7P9Z6PjdobrJ4jZf6D%2Bigd%2Fa1vukAHOoXhsa4RyxumB4ittyJyRs109F%2BkRDlNgwqblB3XMxvmFl%2BoBCsWnpvPR3bkTpYwSxG94cSTgeeRbU7Uy4QOMLLqn8wGOqUBjSDFINleX%2FI%2FN9H8YhQZYkadlu6LDH9H0cq1FBAU%2BxLgIIgDwLewx9xm5jhkf0fsvJDW2H12FvXMLstu1S3evmB5WUl3yVRjfpdEF4u3Eape%2BrDRX8AiJ2IElFDaHpXqVOHpYWdvAwyle4P0WdBPF8mZCcV7p8aK834HnvBhXOf54eFvA%2BoWjZ1mO1jaYpQZ7W8HkRujz1EB76stNvr6cAE%2FuJOS&X-Amz-Signature=2ca0330a61fa1a17e0aafd568d0c7cc4978416931d46a76fd591c01666757aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57RJ5G5%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLhyMdeOEyGgzQjaxHHf7W9FbmjncjsYhFtJpJGtebgIgSJO3eV9upyOF3eKS6b8%2FinnXv1g8T2Q%2FM3tQnEyOY2Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCBY0V8tD84Yz0s8yyrcA51YPdRc%2BTwa0dIYl5ONS1Q%2BbUMwPIj%2F7ExFbHoOxrngFe6jZFMNrFy9iwU4ccs64V1KLFjJ9RciB7PF%2FTUuLv07R5welPoAlXv38ehD8R58FesGucU2%2FtbxCokUfx4P99XEo1JcYbD1FLkhEvthfaEMjcMa%2Bc%2B5OhC%2FIUudBqKdIAjyZ11KNTIUVJj%2BEesANcgi%2Bc7Dut82gvagmR8jnu42t4wBBqjcioMN4r8bi8VnJ2zLWvxUK%2BuOi8LNYWDqXvyA3CLDYpO3gmBqab8wQO81i7V%2BUMn%2FDAUKlYmBYQXfO2Lv%2Fc5%2B%2B7c58BSjEsW7KCUA1GqStsysfS6Al5r1MKeEEwgAgYvJfWd2CLiPvkYEC6GgqVgq0NUk%2BFLs7TMEXIJie3Ec%2FIbRuOZDpDXWUrEf4ptR6xcIpYJ5JHTqUoOQ7RirY3iPRXnV3FAs%2FZYScT9yxEeSNCjStPqBD5MVTk5V770REdliSyGbYQuBe0I1PvmKMA%2BtDAQFKUalaT3vGgvK4eks6R7P9Z6PjdobrJ4jZf6D%2Bigd%2Fa1vukAHOoXhsa4RyxumB4ittyJyRs109F%2BkRDlNgwqblB3XMxvmFl%2BoBCsWnpvPR3bkTpYwSxG94cSTgeeRbU7Uy4QOMLLqn8wGOqUBjSDFINleX%2FI%2FN9H8YhQZYkadlu6LDH9H0cq1FBAU%2BxLgIIgDwLewx9xm5jhkf0fsvJDW2H12FvXMLstu1S3evmB5WUl3yVRjfpdEF4u3Eape%2BrDRX8AiJ2IElFDaHpXqVOHpYWdvAwyle4P0WdBPF8mZCcV7p8aK834HnvBhXOf54eFvA%2BoWjZ1mO1jaYpQZ7W8HkRujz1EB76stNvr6cAE%2FuJOS&X-Amz-Signature=7405af0a1f8067cbb4033c845a1b2501509cc4830ed645f04cd8f1ae0d322308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57RJ5G5%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLhyMdeOEyGgzQjaxHHf7W9FbmjncjsYhFtJpJGtebgIgSJO3eV9upyOF3eKS6b8%2FinnXv1g8T2Q%2FM3tQnEyOY2Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCBY0V8tD84Yz0s8yyrcA51YPdRc%2BTwa0dIYl5ONS1Q%2BbUMwPIj%2F7ExFbHoOxrngFe6jZFMNrFy9iwU4ccs64V1KLFjJ9RciB7PF%2FTUuLv07R5welPoAlXv38ehD8R58FesGucU2%2FtbxCokUfx4P99XEo1JcYbD1FLkhEvthfaEMjcMa%2Bc%2B5OhC%2FIUudBqKdIAjyZ11KNTIUVJj%2BEesANcgi%2Bc7Dut82gvagmR8jnu42t4wBBqjcioMN4r8bi8VnJ2zLWvxUK%2BuOi8LNYWDqXvyA3CLDYpO3gmBqab8wQO81i7V%2BUMn%2FDAUKlYmBYQXfO2Lv%2Fc5%2B%2B7c58BSjEsW7KCUA1GqStsysfS6Al5r1MKeEEwgAgYvJfWd2CLiPvkYEC6GgqVgq0NUk%2BFLs7TMEXIJie3Ec%2FIbRuOZDpDXWUrEf4ptR6xcIpYJ5JHTqUoOQ7RirY3iPRXnV3FAs%2FZYScT9yxEeSNCjStPqBD5MVTk5V770REdliSyGbYQuBe0I1PvmKMA%2BtDAQFKUalaT3vGgvK4eks6R7P9Z6PjdobrJ4jZf6D%2Bigd%2Fa1vukAHOoXhsa4RyxumB4ittyJyRs109F%2BkRDlNgwqblB3XMxvmFl%2BoBCsWnpvPR3bkTpYwSxG94cSTgeeRbU7Uy4QOMLLqn8wGOqUBjSDFINleX%2FI%2FN9H8YhQZYkadlu6LDH9H0cq1FBAU%2BxLgIIgDwLewx9xm5jhkf0fsvJDW2H12FvXMLstu1S3evmB5WUl3yVRjfpdEF4u3Eape%2BrDRX8AiJ2IElFDaHpXqVOHpYWdvAwyle4P0WdBPF8mZCcV7p8aK834HnvBhXOf54eFvA%2BoWjZ1mO1jaYpQZ7W8HkRujz1EB76stNvr6cAE%2FuJOS&X-Amz-Signature=759193b1281bb6d9770360a996edee14d74ee5168826a83a9c9ea9b367b2c9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57RJ5G5%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLhyMdeOEyGgzQjaxHHf7W9FbmjncjsYhFtJpJGtebgIgSJO3eV9upyOF3eKS6b8%2FinnXv1g8T2Q%2FM3tQnEyOY2Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCBY0V8tD84Yz0s8yyrcA51YPdRc%2BTwa0dIYl5ONS1Q%2BbUMwPIj%2F7ExFbHoOxrngFe6jZFMNrFy9iwU4ccs64V1KLFjJ9RciB7PF%2FTUuLv07R5welPoAlXv38ehD8R58FesGucU2%2FtbxCokUfx4P99XEo1JcYbD1FLkhEvthfaEMjcMa%2Bc%2B5OhC%2FIUudBqKdIAjyZ11KNTIUVJj%2BEesANcgi%2Bc7Dut82gvagmR8jnu42t4wBBqjcioMN4r8bi8VnJ2zLWvxUK%2BuOi8LNYWDqXvyA3CLDYpO3gmBqab8wQO81i7V%2BUMn%2FDAUKlYmBYQXfO2Lv%2Fc5%2B%2B7c58BSjEsW7KCUA1GqStsysfS6Al5r1MKeEEwgAgYvJfWd2CLiPvkYEC6GgqVgq0NUk%2BFLs7TMEXIJie3Ec%2FIbRuOZDpDXWUrEf4ptR6xcIpYJ5JHTqUoOQ7RirY3iPRXnV3FAs%2FZYScT9yxEeSNCjStPqBD5MVTk5V770REdliSyGbYQuBe0I1PvmKMA%2BtDAQFKUalaT3vGgvK4eks6R7P9Z6PjdobrJ4jZf6D%2Bigd%2Fa1vukAHOoXhsa4RyxumB4ittyJyRs109F%2BkRDlNgwqblB3XMxvmFl%2BoBCsWnpvPR3bkTpYwSxG94cSTgeeRbU7Uy4QOMLLqn8wGOqUBjSDFINleX%2FI%2FN9H8YhQZYkadlu6LDH9H0cq1FBAU%2BxLgIIgDwLewx9xm5jhkf0fsvJDW2H12FvXMLstu1S3evmB5WUl3yVRjfpdEF4u3Eape%2BrDRX8AiJ2IElFDaHpXqVOHpYWdvAwyle4P0WdBPF8mZCcV7p8aK834HnvBhXOf54eFvA%2BoWjZ1mO1jaYpQZ7W8HkRujz1EB76stNvr6cAE%2FuJOS&X-Amz-Signature=ae79cf1aa5954628bfbefb5ac6b32b9e2e609d051e4b1d3f206ed160bc77ada0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57RJ5G5%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLhyMdeOEyGgzQjaxHHf7W9FbmjncjsYhFtJpJGtebgIgSJO3eV9upyOF3eKS6b8%2FinnXv1g8T2Q%2FM3tQnEyOY2Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCBY0V8tD84Yz0s8yyrcA51YPdRc%2BTwa0dIYl5ONS1Q%2BbUMwPIj%2F7ExFbHoOxrngFe6jZFMNrFy9iwU4ccs64V1KLFjJ9RciB7PF%2FTUuLv07R5welPoAlXv38ehD8R58FesGucU2%2FtbxCokUfx4P99XEo1JcYbD1FLkhEvthfaEMjcMa%2Bc%2B5OhC%2FIUudBqKdIAjyZ11KNTIUVJj%2BEesANcgi%2Bc7Dut82gvagmR8jnu42t4wBBqjcioMN4r8bi8VnJ2zLWvxUK%2BuOi8LNYWDqXvyA3CLDYpO3gmBqab8wQO81i7V%2BUMn%2FDAUKlYmBYQXfO2Lv%2Fc5%2B%2B7c58BSjEsW7KCUA1GqStsysfS6Al5r1MKeEEwgAgYvJfWd2CLiPvkYEC6GgqVgq0NUk%2BFLs7TMEXIJie3Ec%2FIbRuOZDpDXWUrEf4ptR6xcIpYJ5JHTqUoOQ7RirY3iPRXnV3FAs%2FZYScT9yxEeSNCjStPqBD5MVTk5V770REdliSyGbYQuBe0I1PvmKMA%2BtDAQFKUalaT3vGgvK4eks6R7P9Z6PjdobrJ4jZf6D%2Bigd%2Fa1vukAHOoXhsa4RyxumB4ittyJyRs109F%2BkRDlNgwqblB3XMxvmFl%2BoBCsWnpvPR3bkTpYwSxG94cSTgeeRbU7Uy4QOMLLqn8wGOqUBjSDFINleX%2FI%2FN9H8YhQZYkadlu6LDH9H0cq1FBAU%2BxLgIIgDwLewx9xm5jhkf0fsvJDW2H12FvXMLstu1S3evmB5WUl3yVRjfpdEF4u3Eape%2BrDRX8AiJ2IElFDaHpXqVOHpYWdvAwyle4P0WdBPF8mZCcV7p8aK834HnvBhXOf54eFvA%2BoWjZ1mO1jaYpQZ7W8HkRujz1EB76stNvr6cAE%2FuJOS&X-Amz-Signature=720a43061a67efd5cd9dc67fc300ccddaa23405230b2c3712a238d8a0a0c8a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57RJ5G5%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLhyMdeOEyGgzQjaxHHf7W9FbmjncjsYhFtJpJGtebgIgSJO3eV9upyOF3eKS6b8%2FinnXv1g8T2Q%2FM3tQnEyOY2Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCBY0V8tD84Yz0s8yyrcA51YPdRc%2BTwa0dIYl5ONS1Q%2BbUMwPIj%2F7ExFbHoOxrngFe6jZFMNrFy9iwU4ccs64V1KLFjJ9RciB7PF%2FTUuLv07R5welPoAlXv38ehD8R58FesGucU2%2FtbxCokUfx4P99XEo1JcYbD1FLkhEvthfaEMjcMa%2Bc%2B5OhC%2FIUudBqKdIAjyZ11KNTIUVJj%2BEesANcgi%2Bc7Dut82gvagmR8jnu42t4wBBqjcioMN4r8bi8VnJ2zLWvxUK%2BuOi8LNYWDqXvyA3CLDYpO3gmBqab8wQO81i7V%2BUMn%2FDAUKlYmBYQXfO2Lv%2Fc5%2B%2B7c58BSjEsW7KCUA1GqStsysfS6Al5r1MKeEEwgAgYvJfWd2CLiPvkYEC6GgqVgq0NUk%2BFLs7TMEXIJie3Ec%2FIbRuOZDpDXWUrEf4ptR6xcIpYJ5JHTqUoOQ7RirY3iPRXnV3FAs%2FZYScT9yxEeSNCjStPqBD5MVTk5V770REdliSyGbYQuBe0I1PvmKMA%2BtDAQFKUalaT3vGgvK4eks6R7P9Z6PjdobrJ4jZf6D%2Bigd%2Fa1vukAHOoXhsa4RyxumB4ittyJyRs109F%2BkRDlNgwqblB3XMxvmFl%2BoBCsWnpvPR3bkTpYwSxG94cSTgeeRbU7Uy4QOMLLqn8wGOqUBjSDFINleX%2FI%2FN9H8YhQZYkadlu6LDH9H0cq1FBAU%2BxLgIIgDwLewx9xm5jhkf0fsvJDW2H12FvXMLstu1S3evmB5WUl3yVRjfpdEF4u3Eape%2BrDRX8AiJ2IElFDaHpXqVOHpYWdvAwyle4P0WdBPF8mZCcV7p8aK834HnvBhXOf54eFvA%2BoWjZ1mO1jaYpQZ7W8HkRujz1EB76stNvr6cAE%2FuJOS&X-Amz-Signature=8d9275dc70df3c82305c6a89668eb3e6718c32fea765db01242ced53fc0183e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QKWBEHE%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClsckUlwVU55mKqGn%2FG0kSgPl8%2FdfxDd5ZXEokCKwtuAiEAwn2NioaFtCvFS4vEhSq6EEXV2Peo%2BBbSMOeTdmcjCHgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNMlXqJKYAlETGIs1ircA%2Fre%2FhRFRM3LhqEJ9QALIL6AhTMM%2B5Ptk7Yb4oEVkw5x82vOk8ISxmTzZrupFDgcxVokuvSHEhJWZk8163vBv0Rkat0RoRK2xFVXM1jo4l1duVfNzJCIHSvM5E8Rq6c3YXAc7XY3bAKXHj1AjOwNgxgHbYnAh0gu48nY1Y2jEJvok4wunlIc3ruOnlrGwx5Azv0%2BJWjtg1SlLQ%2FMRV4FW8BRAzOmWpS%2FwU1rDuPr%2Fz6GPoKZ5M%2Bwa9AaQYIFFGDSwAw2HCAOjgK%2Bpd%2FRSgUgaWReIUK4lII3I5%2BJBAsRsDnzGH7%2Fc%2BvpQaIDt7RceKukdPiEn0e3XVPdu%2BC6gBS3UR8UG6N8KbGeNS4I2QXJ7aDHeUcVrnXbNuGlLWWVNg03h%2BI3OlmHC05XhmTQ%2B4x8NH7qfvlm4J4BFJW6kPeOzIJL2PC9vudUbkhLk7MRD46wu7apcV7dKe%2F3LVpe4BkNnjZZUjSZgS9nCknHOIw7A9COUCcfDNzdKnpuLWTRZ%2FIeXDx6sH48potzSzlAt4iZQuPdp5qcNp2DRG0tujg6YMZCeh7EOb4g15T4vI7To4dlIAFzJk9a1P8UgUadhVoYcxn2Lsp%2BM5D6wMTIRCC1UchNtcW2OSkW%2F1Z2j6SKMMrqn8wGOqUBvPeC8coCRW1JXDGi6Zns7sNIJfbjhNt0OQrscfU1qrrpjPWSy%2BgtNT%2FSRA1BLkGaiWyx42IKkogMsg7h2GOgQJKooxHfuDLfgjOXdETd6lR8dtZk2gpDnL09XkJSPWnUUlZahPId72uPskwFrbQFvzTAo6dJyFhwOdpgs8tUZaWW4z6Fb3qHXoe65GDMPZOSv76tJ0TulBIpZXVV0%2BSrqko1Lmvv&X-Amz-Signature=aa45fa6638f7dc9e9fa2761cad357ef74ba8af09a1e1d793fbfbddd830b53884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN5HTF4T%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0IXiQKIKUiRyZA3FdPt97L3tydFXT4mRI64KEo3ySVQIgcVN%2B%2FCGmUHK53t9gN%2BZn3TBLNfpkflMHHaJ8V9u6Y6Eq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJ9teyr%2FDlMC33lP4yrcA5iNe6wJ90Z3ANkuqfapoxAQBt7y6zAex96pvNm5dNp4Hw2nD7CIQI6et2KjLJMPXuxHQOzSdIx5vi1AYqhd4X8Va87XsZVBW7sxaH32PfdDDv9TuRs9GahQz%2B0PmC9cZTQ2IYAAzb3TNMbOQAz5NaFZqV3aRt4Z%2FGzRfcbZnGd2can4%2FDZUgNBCySMFEMb%2FnyYPGojwtIkiwbreoo6VpkHfjfhGyOb%2FLe1MplZr49HScseOsnxvshSSj8lgaYdMDZn7N8fN%2BGFV3mIDBjwoDZtvi%2FMTtR9ZZVGcfMurkd5c8AxqBxDrXsv2myevUOxZLviXgRZEfB9j8FiK68EbXulEh1FXF4U3OqsowslNZ1KBqRpIpL1BYAODW%2BKeDIrYGC7cnQZXDvWu2ul2sEZsmhqs2GxLLBjZnKyaTF%2FUUIty6xMMrNDp1KLcn5AnCs23V0EkMw5g94h4kzQGcw3621WWkzxBMR9hwOt1Puxsga093XZypiWNtcgONRR2p3%2FUdMPykX0WxGO2J59fyOZFFjAnGDMgWlVN%2FbRWizcTRvVXKFVZzEyAUh2jAkppDJz37qQdrExEfRIM7Yap5cJBqJ5nnCKXkaYVd8th7jYI99oXhUV6l74Xcaq%2B%2FjOPMMnqn8wGOqUBF1i4Y%2Fh7axwx%2BPdxMw1j07%2FkdZ%2FswPxlfVkeRFxXFSBcP%2FQoXY42ai9SqkFET96xzX%2FwJxVX1fuuKDjc3LEd0V7koqFOHwHITcR7Axj%2Bc40cHc0qajn0jFNl8Qx0ej%2FWFs7cs8Um0B2CF%2Baty6%2BrniMV0XIQDcv0uU%2BZIFMqOAb9LHTpvixfdEqVxRCQesW3vdLhT52aJ%2FX%2F2HVPyC6zdFVYRw2G&X-Amz-Signature=c0ecf8d97f761d55f784dd3a3c06ee66d6699259a1e9e6cc0faa0359420e6325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRI4QF5%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdbDGlKXnca4rJc0LXywmvy%2FI60gJe%2FITACIjMAE3RVAiAe5N8eKR14iJ5taOSwsB33AR%2F0AhMrPzGvkekakNGOjyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMIyPZYNyGp2oDU2ycKtwD1JYeFlSD5RHLhutk6d0e74pgmiXJwV27OJCvr6AHilDzLkKWOfTCRsUvmh8QCc8z8ObtvOxaFaaa%2FQc%2BSC6vW0fiLXSOB%2FvB53NL5hehxxLR7AaGHNhCq2W%2FHFVXNqgp2Mk2wwnXjh1DzSiZ2V%2F3w0VAdDP1UL2U8I27nD981jTh6C7gdCl6bh03L6QGMvgxRpVJm8gbnaqCTK2ZGpu6XJV8%2BFDUsILe5AtArCvQcE%2BVVQy%2BguKlZcEAirHQOhueUHEI85oEOoSnjahy1Rlmy8FIab7Ghw3kpwKoc4nhhBTyuxDLclLFEv%2BLttOwIihxY2TKcTLXez5r80tMpBCWfyo9i1yhDaJhD%2BU5yB1eVpY%2FD%2F9568O4WSeZOIMrSKyVureCJ2J96SmwZF9HT5hdbXyrtKTj99cuz6B657R1d5Sk0U%2F1OXqmeKNTq7P6VOMZaYVKoUQt1ks79We%2FZ9pl7WK%2BOzHi6RSYxj8dohO9PzZ1%2FatsPjpNxF696YXpviMkjZKUHODzF0z3A0T1jA89QyE42062Wpyn4bkoG5ZdM4qOJAxzLNrDMdiBxfeVb4NJpHlf91MPRT7AYN5PRHlSOG60g%2FuumU9HHwsIHf70pHXWXg40mcjruf%2BeviQw%2FumfzAY6pgHTtyaPM5ygd%2FgSHcLE%2FCDE%2FqpNHaqtJfHNp%2B4g52QCKfc474iTRruEtlLycpuaP5wGFXeNzEPVSiCbFXdmXrPOCL%2FGmipAeGXu8Rcote9Ad8MSccXRyCSq3YgcdbUW4xNiaJz5dTzjgP%2FD9xMt6uUauDEwr5RNkbDP3xRTAhiYOGPyUQXKI7jC%2FccjKBNjiZvYiI0oRuX9vgDblv3nqluTAoen%2Fog%2F&X-Amz-Signature=5cba6c4a9638668ea94c831636d53301ff85f663668fd2c20067f283b2f3a490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57RJ5G5%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLhyMdeOEyGgzQjaxHHf7W9FbmjncjsYhFtJpJGtebgIgSJO3eV9upyOF3eKS6b8%2FinnXv1g8T2Q%2FM3tQnEyOY2Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCBY0V8tD84Yz0s8yyrcA51YPdRc%2BTwa0dIYl5ONS1Q%2BbUMwPIj%2F7ExFbHoOxrngFe6jZFMNrFy9iwU4ccs64V1KLFjJ9RciB7PF%2FTUuLv07R5welPoAlXv38ehD8R58FesGucU2%2FtbxCokUfx4P99XEo1JcYbD1FLkhEvthfaEMjcMa%2Bc%2B5OhC%2FIUudBqKdIAjyZ11KNTIUVJj%2BEesANcgi%2Bc7Dut82gvagmR8jnu42t4wBBqjcioMN4r8bi8VnJ2zLWvxUK%2BuOi8LNYWDqXvyA3CLDYpO3gmBqab8wQO81i7V%2BUMn%2FDAUKlYmBYQXfO2Lv%2Fc5%2B%2B7c58BSjEsW7KCUA1GqStsysfS6Al5r1MKeEEwgAgYvJfWd2CLiPvkYEC6GgqVgq0NUk%2BFLs7TMEXIJie3Ec%2FIbRuOZDpDXWUrEf4ptR6xcIpYJ5JHTqUoOQ7RirY3iPRXnV3FAs%2FZYScT9yxEeSNCjStPqBD5MVTk5V770REdliSyGbYQuBe0I1PvmKMA%2BtDAQFKUalaT3vGgvK4eks6R7P9Z6PjdobrJ4jZf6D%2Bigd%2Fa1vukAHOoXhsa4RyxumB4ittyJyRs109F%2BkRDlNgwqblB3XMxvmFl%2BoBCsWnpvPR3bkTpYwSxG94cSTgeeRbU7Uy4QOMLLqn8wGOqUBjSDFINleX%2FI%2FN9H8YhQZYkadlu6LDH9H0cq1FBAU%2BxLgIIgDwLewx9xm5jhkf0fsvJDW2H12FvXMLstu1S3evmB5WUl3yVRjfpdEF4u3Eape%2BrDRX8AiJ2IElFDaHpXqVOHpYWdvAwyle4P0WdBPF8mZCcV7p8aK834HnvBhXOf54eFvA%2BoWjZ1mO1jaYpQZ7W8HkRujz1EB76stNvr6cAE%2FuJOS&X-Amz-Signature=2fc6dc53962b8472a6b388fa7a17ccabe493e8efc9724f47a723685d95bf9995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ZCQCKE%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlLvrf99NfjN7inOPUmyAdx6aJcyrQSEVX42kFKGXe7QIhAPXxW%2B7aGHdojEu4CwU7uoZ44ClNyBqwXTSEDhX4P63GKv8DCGwQABoMNjM3NDIzMTgzODA1Igy2mjIDV2dlF4GEpNMq3AOc9grNppIBMErOgbUdLesEDbqSwvPXM2855j5jC1jiAoInUa8d%2FilK4yDfvETaptrjG3vQqubjI67WLvCg6J6LjFEveCxetSM4qCDAmkxyiQEYoZwR3Jf1Hz4bxRPoXUtCmuAx6OIC2%2FSYWPqdYGCFjB%2B1IG5FYBmroYc456fN%2BMJyaWk4cNaKjPhq7qCvGV2qIx2OhpfsxdMEppf7is3vYA1nqZDuVCb4ZBNSkelnXhEYSTmCBjR00Y%2BEp2r6hzcYeWSKyY6J0OSAJYWe5jj3CUEeAQYvi%2BucWlm0mtOM985jcu4BNk8p9tjCwWY%2FYFjDk%2Bv0mRmDrk4NOWzWP32Qcfrb2qwubG6%2F6z9%2BEjzSnqHvSpNgPoUg6oSv%2FFYs7%2B6ViUzwrpxghcP667s7HIJc1%2F7fl5qJWtVkPw3K18EuCRk197RUjhOnxJmUKBpikqCdrKCb%2BqZZ3%2Bg41nudw9EIm9kim2vqqbVd5IGHXWfEPLp2KWWgUrJvJ4T3ZQK40fQRc41bNtdVeZtrlpwMp1wRJDpkWjfD1hlkVBFfH0yv1VDW00mJCvz2Vw9Yf3dgbQyO%2BtVef215sbia%2FyewvrUTRtO6HJVEyTFmMCwIF4MgGRp46XAcc9R%2FGVNAFzCl65%2FMBjqkAWtwqnovCMJV1efcW7M%2Bi%2FEvpGhXgcA8%2BHNyKyyy06EJkycXfF5c4aT2oraGkgKkVtwQ5eLq0kxxi24TyDC0U%2B9AdMJ0lBkDTFunnLKAZ5X7bENHtR%2B%2Fn%2BzxOa7XHl%2FETU5zMrinblYZknpDsf6LGdKQ5sTM%2FHDu6%2FfKiuGQa2XEnJrYZruKQUh9osDlszLi44xX2SaHHFcSyCOtTD9Dievfrc1%2F&X-Amz-Signature=1848db7a1cbdb25b03448f89b49d57852777e83ffc006cf2dcd8e0f9e48f0e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57RJ5G5%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLhyMdeOEyGgzQjaxHHf7W9FbmjncjsYhFtJpJGtebgIgSJO3eV9upyOF3eKS6b8%2FinnXv1g8T2Q%2FM3tQnEyOY2Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCBY0V8tD84Yz0s8yyrcA51YPdRc%2BTwa0dIYl5ONS1Q%2BbUMwPIj%2F7ExFbHoOxrngFe6jZFMNrFy9iwU4ccs64V1KLFjJ9RciB7PF%2FTUuLv07R5welPoAlXv38ehD8R58FesGucU2%2FtbxCokUfx4P99XEo1JcYbD1FLkhEvthfaEMjcMa%2Bc%2B5OhC%2FIUudBqKdIAjyZ11KNTIUVJj%2BEesANcgi%2Bc7Dut82gvagmR8jnu42t4wBBqjcioMN4r8bi8VnJ2zLWvxUK%2BuOi8LNYWDqXvyA3CLDYpO3gmBqab8wQO81i7V%2BUMn%2FDAUKlYmBYQXfO2Lv%2Fc5%2B%2B7c58BSjEsW7KCUA1GqStsysfS6Al5r1MKeEEwgAgYvJfWd2CLiPvkYEC6GgqVgq0NUk%2BFLs7TMEXIJie3Ec%2FIbRuOZDpDXWUrEf4ptR6xcIpYJ5JHTqUoOQ7RirY3iPRXnV3FAs%2FZYScT9yxEeSNCjStPqBD5MVTk5V770REdliSyGbYQuBe0I1PvmKMA%2BtDAQFKUalaT3vGgvK4eks6R7P9Z6PjdobrJ4jZf6D%2Bigd%2Fa1vukAHOoXhsa4RyxumB4ittyJyRs109F%2BkRDlNgwqblB3XMxvmFl%2BoBCsWnpvPR3bkTpYwSxG94cSTgeeRbU7Uy4QOMLLqn8wGOqUBjSDFINleX%2FI%2FN9H8YhQZYkadlu6LDH9H0cq1FBAU%2BxLgIIgDwLewx9xm5jhkf0fsvJDW2H12FvXMLstu1S3evmB5WUl3yVRjfpdEF4u3Eape%2BrDRX8AiJ2IElFDaHpXqVOHpYWdvAwyle4P0WdBPF8mZCcV7p8aK834HnvBhXOf54eFvA%2BoWjZ1mO1jaYpQZ7W8HkRujz1EB76stNvr6cAE%2FuJOS&X-Amz-Signature=09a1f81eda7951744c6946965dda09958250c88d8248cbb936ea19e49ad69067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ZWPMZA%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcJDBpysV3SZFyqS72gvbzm63q4MaYtBiBISzrCsg2jAIgAJ50uk4CwN5f24ia18mLfadPJ%2B1bHyl2MdAc5G1vG7oq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHPbhNzUQ0Sgxe31TyrcA7oXrWVhKhOmV2ZGCNKxh8DGx0euiy380RRQNZvL5dB2HOomLyhs%2BcKE3cKMItKXQal0LwPo4o%2FFRZdt1iEOWTyGj2yPTPkk3AITi6Cw%2BcBGpMTDqv0iYWtJjZHxu0uIPRmMIBOrE8R9mXEwGsiYFYcCGiBIyWqDRW3Erol%2BSqbX7M%2FCyaqNmaLJzRCtjAyW2Zkx0%2FPxIXl2BNNmjLl36Cp0KjD%2FKdKaM3QrOmVLj5a8xQhmzeR7vShwU0XFnsDQp5AJ4iFIZ6c%2Bterg2pnw0laRz2uKleuuBlDkjXEjxqI7MoW5Zh3%2Fx2mo0YXz%2FQWO4bukqXjBozwIn830UQE4baE6K58GbzlJ%2BTgmsG6il%2BVWV88iZ5qa%2F6ojgwTkoFMrFR2p32x6hYKS58Yl3FQ29kUDtzFkhXdkmV8g1u%2BVebbAq7NX1EMNLmCQJ1QVh2k4xVQwjctq0s7MziZf9O2E1f7xzMApWCIQlavXCuP26YpYiG8SkdzWKfyWuRoKrBjhkIuLD5ZskKsbC39M%2BsPAT6YcaJQVfpabS6xsXLjKwDUGEc38VYfgo%2FqDM2ogwn8K2mVOA4XYTWF8trAf%2BTSuQJAqkDk0I4oKq9huNUJ4G6nnckJVtPD3E3TC23ZVMILrn8wGOqUBfhvr%2FYjeaUW%2FYXL2Vnerp8cdDTusBIeveNJZakUhYG43R01OwtR4sFMMCWEf9UU7CRb5Rbc9YborCdztCvKBRnHJkmWx0lrmdZpUmiXX3WVEyB%2FCNtBq2iuSnctZWzE41ImruQ0UNKS2uFKv2SyLRUmO3M%2FXPDzwKdm9Zw%2B%2Fgoj0EfZtg46kf4M%2B35qthkYB0vn%2BJfnw8AZ96gS6OG1o9XnKHYBk&X-Amz-Signature=c11c5b841556f0d94f5dda79c44c28fca0dd3abc699d56f86c6e6ab5a91dad1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57RJ5G5%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLhyMdeOEyGgzQjaxHHf7W9FbmjncjsYhFtJpJGtebgIgSJO3eV9upyOF3eKS6b8%2FinnXv1g8T2Q%2FM3tQnEyOY2Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCBY0V8tD84Yz0s8yyrcA51YPdRc%2BTwa0dIYl5ONS1Q%2BbUMwPIj%2F7ExFbHoOxrngFe6jZFMNrFy9iwU4ccs64V1KLFjJ9RciB7PF%2FTUuLv07R5welPoAlXv38ehD8R58FesGucU2%2FtbxCokUfx4P99XEo1JcYbD1FLkhEvthfaEMjcMa%2Bc%2B5OhC%2FIUudBqKdIAjyZ11KNTIUVJj%2BEesANcgi%2Bc7Dut82gvagmR8jnu42t4wBBqjcioMN4r8bi8VnJ2zLWvxUK%2BuOi8LNYWDqXvyA3CLDYpO3gmBqab8wQO81i7V%2BUMn%2FDAUKlYmBYQXfO2Lv%2Fc5%2B%2B7c58BSjEsW7KCUA1GqStsysfS6Al5r1MKeEEwgAgYvJfWd2CLiPvkYEC6GgqVgq0NUk%2BFLs7TMEXIJie3Ec%2FIbRuOZDpDXWUrEf4ptR6xcIpYJ5JHTqUoOQ7RirY3iPRXnV3FAs%2FZYScT9yxEeSNCjStPqBD5MVTk5V770REdliSyGbYQuBe0I1PvmKMA%2BtDAQFKUalaT3vGgvK4eks6R7P9Z6PjdobrJ4jZf6D%2Bigd%2Fa1vukAHOoXhsa4RyxumB4ittyJyRs109F%2BkRDlNgwqblB3XMxvmFl%2BoBCsWnpvPR3bkTpYwSxG94cSTgeeRbU7Uy4QOMLLqn8wGOqUBjSDFINleX%2FI%2FN9H8YhQZYkadlu6LDH9H0cq1FBAU%2BxLgIIgDwLewx9xm5jhkf0fsvJDW2H12FvXMLstu1S3evmB5WUl3yVRjfpdEF4u3Eape%2BrDRX8AiJ2IElFDaHpXqVOHpYWdvAwyle4P0WdBPF8mZCcV7p8aK834HnvBhXOf54eFvA%2BoWjZ1mO1jaYpQZ7W8HkRujz1EB76stNvr6cAE%2FuJOS&X-Amz-Signature=863d2cfc2098ba3fa2319cc59eb188d544d1820fce52a1478658a881039b36ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROPH6DK2%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXRRhJbKdCLcyTGRA8MHfF%2Ftrf9RdFLKYU542IuR1RmQIhAM4ev1E87nxka4XyfvJgdHriCbDhprTIrMNgNI%2BJowbRKv8DCGwQABoMNjM3NDIzMTgzODA1IgxjTWd0rRC6bmd9GnYq3AOQVFaFJM%2B1AqWGUwUGiscaOwa5PswI5F9P%2BY7xJAl9OtA4DNtuimT0c1TyUW6mMXGcLlxD50Q1oohM17OQnQMCDykhxGOS68FggNhTvVcHGPH6it%2FDV4%2BENicH3IhvpKfoMpuRm0%2BpSUeOXtlaHWsdQKsfZE3P%2FqOQFdRGw60DsuvQ1pjKoPdwe368EmDGJQHVTwsm%2FhwoYpRkf9S1l951C3J9HayS%2FRRE0J2VkP64dKzp4VQpaRDeWms7dmslsYRRNLXjrFajMYSN3A0PZPo%2F5jHnxsDlHMf%2FzmFVJmaj3Ktuw5%2FSD3P5iJktnFqSAnq9lGSsksD6Nn%2FZbp0Iq%2BuiNrGkFhImGZ%2BldVuyc0%2FMGhlnOKqCNRwF8ig9Qgv9%2F8LO2Q1i3IpxnV%2B%2BYSW5%2BuPI4U7OQJ9oD%2FF2YvaDyxxN92V%2BsZiKMwfn%2Fm6awFvqmfmwzl0sa%2Ftc%2F0j5V%2Bv8bP3oOfOJLjo7BUYKiUx8RznADi6VNP3UqWzuz4yUvI2JGlmovKv8cLq0He0IvbhbTLNLmPGRFL534aRC5Geha5eimRX5DPbyFrSulhdVPW6cgW3BFzdMe7wN3O5ctCJ4L3qFOJp7aY8OYs5Eogqug4H5eP3kDWt4EB7TYSoLzDCn6p%2FMBjqkAXCbfI2KvtOx4gVfDPL%2F8bVTOZvn%2Bfy80GwVwcuwaYlTqXcL9IWNem0Its3Q9r9LJIboW7V5uAdoODO3kasg4PBmeCsVfvtXcaO9GLyL%2BdqzOzPjmutw%2BoADTDOIxd5gDeRZHCRAbduI1cZZAZV13RF0VKbIcnv%2F8BksnqUNe1GOG5tGDCExgl4qXh%2F%2B3c%2BWa1M7UIouXuxxBCPru3ELTJ%2Fmq5Fb&X-Amz-Signature=ab7b6855ae14e64a86c93305e55eef9a2b484cdff2cf5b1f506dae5c58b9f731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57RJ5G5%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLhyMdeOEyGgzQjaxHHf7W9FbmjncjsYhFtJpJGtebgIgSJO3eV9upyOF3eKS6b8%2FinnXv1g8T2Q%2FM3tQnEyOY2Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCBY0V8tD84Yz0s8yyrcA51YPdRc%2BTwa0dIYl5ONS1Q%2BbUMwPIj%2F7ExFbHoOxrngFe6jZFMNrFy9iwU4ccs64V1KLFjJ9RciB7PF%2FTUuLv07R5welPoAlXv38ehD8R58FesGucU2%2FtbxCokUfx4P99XEo1JcYbD1FLkhEvthfaEMjcMa%2Bc%2B5OhC%2FIUudBqKdIAjyZ11KNTIUVJj%2BEesANcgi%2Bc7Dut82gvagmR8jnu42t4wBBqjcioMN4r8bi8VnJ2zLWvxUK%2BuOi8LNYWDqXvyA3CLDYpO3gmBqab8wQO81i7V%2BUMn%2FDAUKlYmBYQXfO2Lv%2Fc5%2B%2B7c58BSjEsW7KCUA1GqStsysfS6Al5r1MKeEEwgAgYvJfWd2CLiPvkYEC6GgqVgq0NUk%2BFLs7TMEXIJie3Ec%2FIbRuOZDpDXWUrEf4ptR6xcIpYJ5JHTqUoOQ7RirY3iPRXnV3FAs%2FZYScT9yxEeSNCjStPqBD5MVTk5V770REdliSyGbYQuBe0I1PvmKMA%2BtDAQFKUalaT3vGgvK4eks6R7P9Z6PjdobrJ4jZf6D%2Bigd%2Fa1vukAHOoXhsa4RyxumB4ittyJyRs109F%2BkRDlNgwqblB3XMxvmFl%2BoBCsWnpvPR3bkTpYwSxG94cSTgeeRbU7Uy4QOMLLqn8wGOqUBjSDFINleX%2FI%2FN9H8YhQZYkadlu6LDH9H0cq1FBAU%2BxLgIIgDwLewx9xm5jhkf0fsvJDW2H12FvXMLstu1S3evmB5WUl3yVRjfpdEF4u3Eape%2BrDRX8AiJ2IElFDaHpXqVOHpYWdvAwyle4P0WdBPF8mZCcV7p8aK834HnvBhXOf54eFvA%2BoWjZ1mO1jaYpQZ7W8HkRujz1EB76stNvr6cAE%2FuJOS&X-Amz-Signature=00153e95a8017f83beb8bb123d4f744bbb29c20a7d559310e171b7e89f5e823f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J4C7R75%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcFAfc0mCWFyDut7b13Slj1lrH741WAVp0pLO1iE0gogIhAN86X2YZb8dj8dixTgk4Jhn5xayxHVfWzz4RYmv3zRyQKv8DCGwQABoMNjM3NDIzMTgzODA1IgxQzrhTspwuPRbgLuEq3AMxQAsY94QB1x0fDiWEiHMSndbJ6y26sgkPQHyO%2BbZHQzyviJReblWtItpSQkkU0RSvl4A452UU3Cocb3%2BIDpVDtIpjNL2HjDgiy5AK4pzZc%2FsQ0TIbxGUV%2FK0f89SR9nJ3WDwAqf89H8iOqXfMLBRWUzvP8qaWjcafFO2Mhq8JIkwR6PIkiQGKNFJZ4%2F%2BcGLRW4g0T7iPIjUoz0FwumM5OyX3aPAB4WkuF5hFrUrQFg6ptUoTcX9hJ5kmNcMwzeUc1kSWjOb6GcOwCQaQrfisX2WL4uGESNpDLv0oo8a%2B4RJC51QSGUJ%2F29nl6KTdHErBvlS8cmeGrXGdiBaPvqM8hIUiaonSE9i31ydYpPo%2FXburTpFPWODINiQmajDRaMhRI7AoMM%2BxIgfZjJTjLYahJIOqfTsD1Jl00RpxyE4QSE40M%2FiAJOYG1rvhpmp1DvWehMc9pvxwFGYF6wm6R9r6OAhBpXFuXBU39jyX8nAv7Lg%2BwFbPH3tJ9d4pxqO1NGrYSUOjv4cD6Zrg79n8D0u0R7nBq7QNn%2FnZhaEi6Xrv5z1pGWeRvZ%2Ffy9n04nmCXjpJkCDLZK1jC8NcVJTfccWVHzyf8A7CXIjRa5eaeQFLAdUqR1qW9YX1nM8DT9DCC6p%2FMBjqkAWVCwWmyLPVJ14bltOg0my4MVWuIB%2FrRTcXb0K89xnKPoPvwUXb4qbuIn0rNfS0yRkEhKF5UYE2uPSrou7ZsJnDCHW4P7mMaL2Ucck6z1rh8ljcNDA%2FrlBLjQ5ZhhyIGsvRzRblF%2BiAQIurNQWrXJr0bpsDEsrf%2F7YxpJSlzcM0Ro%2F7wgss5Ghzim0zJ%2FUKqrxpdJkA%2BOHFFxQOuyEpWhKFGVqoG&X-Amz-Signature=508200184f4f969f5a41f0b5627b603c1733a501a522307346b63ac589b8a014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57RJ5G5%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLhyMdeOEyGgzQjaxHHf7W9FbmjncjsYhFtJpJGtebgIgSJO3eV9upyOF3eKS6b8%2FinnXv1g8T2Q%2FM3tQnEyOY2Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCBY0V8tD84Yz0s8yyrcA51YPdRc%2BTwa0dIYl5ONS1Q%2BbUMwPIj%2F7ExFbHoOxrngFe6jZFMNrFy9iwU4ccs64V1KLFjJ9RciB7PF%2FTUuLv07R5welPoAlXv38ehD8R58FesGucU2%2FtbxCokUfx4P99XEo1JcYbD1FLkhEvthfaEMjcMa%2Bc%2B5OhC%2FIUudBqKdIAjyZ11KNTIUVJj%2BEesANcgi%2Bc7Dut82gvagmR8jnu42t4wBBqjcioMN4r8bi8VnJ2zLWvxUK%2BuOi8LNYWDqXvyA3CLDYpO3gmBqab8wQO81i7V%2BUMn%2FDAUKlYmBYQXfO2Lv%2Fc5%2B%2B7c58BSjEsW7KCUA1GqStsysfS6Al5r1MKeEEwgAgYvJfWd2CLiPvkYEC6GgqVgq0NUk%2BFLs7TMEXIJie3Ec%2FIbRuOZDpDXWUrEf4ptR6xcIpYJ5JHTqUoOQ7RirY3iPRXnV3FAs%2FZYScT9yxEeSNCjStPqBD5MVTk5V770REdliSyGbYQuBe0I1PvmKMA%2BtDAQFKUalaT3vGgvK4eks6R7P9Z6PjdobrJ4jZf6D%2Bigd%2Fa1vukAHOoXhsa4RyxumB4ittyJyRs109F%2BkRDlNgwqblB3XMxvmFl%2BoBCsWnpvPR3bkTpYwSxG94cSTgeeRbU7Uy4QOMLLqn8wGOqUBjSDFINleX%2FI%2FN9H8YhQZYkadlu6LDH9H0cq1FBAU%2BxLgIIgDwLewx9xm5jhkf0fsvJDW2H12FvXMLstu1S3evmB5WUl3yVRjfpdEF4u3Eape%2BrDRX8AiJ2IElFDaHpXqVOHpYWdvAwyle4P0WdBPF8mZCcV7p8aK834HnvBhXOf54eFvA%2BoWjZ1mO1jaYpQZ7W8HkRujz1EB76stNvr6cAE%2FuJOS&X-Amz-Signature=b7ad51c133d65592b830ff34e85836295c4af5bb4ef764973571b650ff8616ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5GT5RHT%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWPRmk7uNvXOtbr42WFxWBoTYFtFtdXYqWca49GpWvNgIhANxWrWSGMLiNinHe90uDxMVefZBFO%2F%2F0tCDcZ%2Bph4x2vKv8DCGwQABoMNjM3NDIzMTgzODA1Igy76D2Xuc8To76nBvYq3APR5jwpvTKf1VdmeZ3%2FlGkZYsQUarxnkzYki8dSGgSw0jUuJWZX1rzixjrhGeLSQcLU4On1%2FpSExerGQM%2BNT%2BrCS2%2F5HfCRig15gYH%2B8C1sgmu6flRBMJah3i2daTw7Czi%2BeklQwMh2oRiwyGNjCPCSDR7gIIvXFUI0%2Fe8qQ8MiIXcvLE4FrPksrfOZmROGtHT2h0cxIy7eGEWoEhp5P0jhModQMZVfDLBS5S81tqrkVjpzNtX7G%2FHGMSLHW7uE6ZIH9qeueks6qZ7emPpW8nagkrpX%2BeR%2FR0q7kVHbdWNwsPGBj%2B%2Fp7QPU35yQprtE2AGmoMb00rGElx2pPYx6fzcYw8SMd30ZyX5%2FLeOVBSyT8cWug%2Bnvh7Vy4A0z96xZadjlD5h8jIYimJm8%2BmIWrOvflVL9TTdYzoY%2BGuq85IZDF3tHdIcmW4iKEEhQgIxqq%2BS82cdhddh1gYOqIKhDTlwKBgwqe9daZHHSnwZx05XToRqVx%2FcM6zAtIFBQvhfMMoA4LwBDPQpjvdhO5ddsASKy%2FMzmGpXrQusCya3xuyNX7JuUimdu4rraMTyv%2Fu6F5WLMWWz%2FI5r7X%2FKwoLsa%2BHnvLsI%2BGsEUQ3rvPKq%2FvAS%2BBt8MLb8HeN1H8tkjQDCg6p%2FMBjqkAbFB8GIx7ZNj46ovMd8Xhaqsi2oGycqw%2BUGW1iN1XFYA3m1hZ6X8wRN8x7fDzx48uRN309WfZTt2sOKi%2BK4IRTbUwmw%2F9VlFGDU3DsvBnkFulvEpLkUC3TyJXmWKZiwITZE8id5KZycmTa1ZPdvlRH8G0QTPX0DU2ZOCpFmLCGfbkDWb8kV3aaVqVGS0gF7BFtx1xJ4jSJysNvyKGQ3kE82wK5iN&X-Amz-Signature=2071a25c3ea9a701d77b8a300732d75f74d56a54dc7c773b8c90f5ca13e67fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG3APWY6%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYjtHBhXfwfdPjHcSSnRi0pNAhf1Ho0Fib9EQhkRZUvAiEAv1ZWXQa1urGqvUlz2iGSoD7coqTds8caQzCdsJt7EbMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKQ%2BtDaphuMZVju1zircA%2BNWBv18oMW%2BNwAAKA6k4h1wG%2FxQmDrpqELHr9p0BP7jvv6EnTTwPspuV54IlfoCMvqal%2Fwrn%2FrIta4xuWbriL0jlrRwaoT2syspC6OH4jtcLLNj7ENZaEpszuxrUON3wrqzsmyR3dOuC59VJ4y95XMaUsC12w9MwQacv28oLFbtHu8fxhLdjqeKlKxd9nuvGlyMW3K25OfomPLg%2BsOCJPhVQAjNuWl8iht5DMB6B8rfh4r8nHnsZ72vCAP83F776Xea4ivwhsm0aVoQNot5K3G37zf6jpnSBsKGGMaXnMHTPGOJdOQ1MS3L%2FbMIs7q95eo4xD88%2FKPn%2BMd97Kk3%2FpCzBKWrPdo2FSKvUB9b5hAIppOZiT2MxiUdCbKZTvxhyPd6qx34%2FVoeuq3D6U1rBzgaxxNiKv9ryLCJSkFF4eU09ZiD3aDR6QcxGdbGSdqd5lJfrxMuuP2Fskn4Ond8m%2FXGId3NlBQ%2FP8LF3KE%2BGdBICeiJ2%2BEfxm%2BBw%2FXi0cUvWA2A%2B2jGv4UopR8fDzHyWZcBGhLF%2FXOEtvbpTk06ex%2BIVPRTuUmgDdFaSvZI1R26a%2F4Jgh8GJbuOP6mGtts1Dz%2BrHiczNva7bj3q0STH9iyZXrKNscH8KDbgD9M7MILqn8wGOqUBBeA19GXpAVm8CGFHPxe8X5cakKPaNYGp%2BAAOqiatLoP%2FmooMhUX1buXb7VEXSKVoNrAQvzW%2BU3zGEkXqQ1OP5Quf6mvo2sphUm%2FjdNSfa%2BrVqC1xeQw2R4ktl42XAzWtxip%2F0pIh5wwUa3PZhyiUkf9VDzJuIb8bUBDhpZ83LnadyDemlNwKAz2hL4ToS2oULqZGMVOhOvFmrQiZzvl8LXt9honv&X-Amz-Signature=6f9517c69eb80d08fcc0b55725c04596ffa233c1486e42d2823ae237967e419b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642KFQVTF%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD6Ii87kyStRCA89eEj7R0DCUjiZZ27deY3GbhOhrplQIhAKmOCPzVwuuIf%2BXZFpp55RCJmqspFmwdJs3n13CjStsaKv8DCGwQABoMNjM3NDIzMTgzODA1IgwTWgEDGTbDzmjmwbwq3AM0cp8WAbxx6HdtpSfh7ssDBVCnoe8Da83MtR2NBrk4F2eCzBBDcD3aBPLFNL5WKualeqdq7w2ZjWo9p%2Ftdu8sUIJ0LZpb24sc%2BQp8zTCu854bzkNW%2F2MaPNJ66l8vDz1RAunJka9kbv8aWEBU92Y%2FGEcHjLTSMeJkmTHJTOgOj5RTdd81x%2FWplcc7VKP2GdYgslGFjSBqEVc2HVdHZRal%2Bzd4j0j596%2F1gMGebxO%2BeP%2BO2LDm2WCdsHVYvenxKc8qL3aBWVGSbgzgx6vU8bgsdJPMv4hRT5Sl1C37cXqNeNinNB49YyOADnBQEZ2IzKXLGteZIKgvO%2Bbzk%2Bz9mJt8cnMCuKxr7bKWmn0mNpPWeAEWZZjZAsu1PPZwv85n5dQfArcCRNgmZuQ4wm0kWdkRHq7oigbBs%2FUcWo8ZQqw9g6lqDORg8S02DHrLshQWhCBWyk%2BdrI9zh2cF1krcOBEnUsYRT5d690ERX3in2L2LA5REmTO4e86XEQM6%2FCWG8ash1T0I0pdUwxXFFJwFD9MoP0T53AYpRkp4b6u29gIgogF9YzME2eCSqmzDGYMhf%2F3US9MWARlQDTfpAa04bdEsJEs3%2BnG4CMOHKJcY0Q3x3SJaNVdjm%2FxJjJWEsXTCg6p%2FMBjqkAQNS0jYrMyDl9m7rY93Kh9Re5yuyTNnryk%2FIUPJ1%2FrL8rRXP4xTVghD8oNpf2b85BGcVtqn3r6%2FuRPwt821cYscS4m2PVKLD7UuQBvOFvU%2BeAz8%2Fc1JNxFiQnjo5L%2BbRyIerg4240qQEomDvs7P5q7u3RmrkdvP63mxNYYzkW8Cw61JsuMGu5LbdKrdchJb4B1iZzJ%2FtaxiwIxFrCY7Czp26xxNt&X-Amz-Signature=a3790c08fe6751b3b11ec2de0add0677b51e4c723e577956761f269fb7e3980f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57RJ5G5%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLhyMdeOEyGgzQjaxHHf7W9FbmjncjsYhFtJpJGtebgIgSJO3eV9upyOF3eKS6b8%2FinnXv1g8T2Q%2FM3tQnEyOY2Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCBY0V8tD84Yz0s8yyrcA51YPdRc%2BTwa0dIYl5ONS1Q%2BbUMwPIj%2F7ExFbHoOxrngFe6jZFMNrFy9iwU4ccs64V1KLFjJ9RciB7PF%2FTUuLv07R5welPoAlXv38ehD8R58FesGucU2%2FtbxCokUfx4P99XEo1JcYbD1FLkhEvthfaEMjcMa%2Bc%2B5OhC%2FIUudBqKdIAjyZ11KNTIUVJj%2BEesANcgi%2Bc7Dut82gvagmR8jnu42t4wBBqjcioMN4r8bi8VnJ2zLWvxUK%2BuOi8LNYWDqXvyA3CLDYpO3gmBqab8wQO81i7V%2BUMn%2FDAUKlYmBYQXfO2Lv%2Fc5%2B%2B7c58BSjEsW7KCUA1GqStsysfS6Al5r1MKeEEwgAgYvJfWd2CLiPvkYEC6GgqVgq0NUk%2BFLs7TMEXIJie3Ec%2FIbRuOZDpDXWUrEf4ptR6xcIpYJ5JHTqUoOQ7RirY3iPRXnV3FAs%2FZYScT9yxEeSNCjStPqBD5MVTk5V770REdliSyGbYQuBe0I1PvmKMA%2BtDAQFKUalaT3vGgvK4eks6R7P9Z6PjdobrJ4jZf6D%2Bigd%2Fa1vukAHOoXhsa4RyxumB4ittyJyRs109F%2BkRDlNgwqblB3XMxvmFl%2BoBCsWnpvPR3bkTpYwSxG94cSTgeeRbU7Uy4QOMLLqn8wGOqUBjSDFINleX%2FI%2FN9H8YhQZYkadlu6LDH9H0cq1FBAU%2BxLgIIgDwLewx9xm5jhkf0fsvJDW2H12FvXMLstu1S3evmB5WUl3yVRjfpdEF4u3Eape%2BrDRX8AiJ2IElFDaHpXqVOHpYWdvAwyle4P0WdBPF8mZCcV7p8aK834HnvBhXOf54eFvA%2BoWjZ1mO1jaYpQZ7W8HkRujz1EB76stNvr6cAE%2FuJOS&X-Amz-Signature=00fe1fef61907f63f14a9062ad2c1c6327675625557a7fa861d1d8f3b2120ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57RJ5G5%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLhyMdeOEyGgzQjaxHHf7W9FbmjncjsYhFtJpJGtebgIgSJO3eV9upyOF3eKS6b8%2FinnXv1g8T2Q%2FM3tQnEyOY2Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCBY0V8tD84Yz0s8yyrcA51YPdRc%2BTwa0dIYl5ONS1Q%2BbUMwPIj%2F7ExFbHoOxrngFe6jZFMNrFy9iwU4ccs64V1KLFjJ9RciB7PF%2FTUuLv07R5welPoAlXv38ehD8R58FesGucU2%2FtbxCokUfx4P99XEo1JcYbD1FLkhEvthfaEMjcMa%2Bc%2B5OhC%2FIUudBqKdIAjyZ11KNTIUVJj%2BEesANcgi%2Bc7Dut82gvagmR8jnu42t4wBBqjcioMN4r8bi8VnJ2zLWvxUK%2BuOi8LNYWDqXvyA3CLDYpO3gmBqab8wQO81i7V%2BUMn%2FDAUKlYmBYQXfO2Lv%2Fc5%2B%2B7c58BSjEsW7KCUA1GqStsysfS6Al5r1MKeEEwgAgYvJfWd2CLiPvkYEC6GgqVgq0NUk%2BFLs7TMEXIJie3Ec%2FIbRuOZDpDXWUrEf4ptR6xcIpYJ5JHTqUoOQ7RirY3iPRXnV3FAs%2FZYScT9yxEeSNCjStPqBD5MVTk5V770REdliSyGbYQuBe0I1PvmKMA%2BtDAQFKUalaT3vGgvK4eks6R7P9Z6PjdobrJ4jZf6D%2Bigd%2Fa1vukAHOoXhsa4RyxumB4ittyJyRs109F%2BkRDlNgwqblB3XMxvmFl%2BoBCsWnpvPR3bkTpYwSxG94cSTgeeRbU7Uy4QOMLLqn8wGOqUBjSDFINleX%2FI%2FN9H8YhQZYkadlu6LDH9H0cq1FBAU%2BxLgIIgDwLewx9xm5jhkf0fsvJDW2H12FvXMLstu1S3evmB5WUl3yVRjfpdEF4u3Eape%2BrDRX8AiJ2IElFDaHpXqVOHpYWdvAwyle4P0WdBPF8mZCcV7p8aK834HnvBhXOf54eFvA%2BoWjZ1mO1jaYpQZ7W8HkRujz1EB76stNvr6cAE%2FuJOS&X-Amz-Signature=5ad2c41d23873372e40cd9e8bba850dbe955bc93e7f0c7afedd388c7be067999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H6EYX4U%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4M%2B78DMcFj%2FYyMfDSz7X9SwToC9CpzK0JL1X0xLYHHAiEA5orAD8xWywTp8UVzfN8Vy27ZRqjRsATplftQUqBXug0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDC3%2BKNyjYE0x3WR8kSrcA6siJ2ZWZ7TSJZ2Kt42%2BXxTEFvBoKMcekCegbdpucBP5RBgbJVJaz8ecsnw%2FcqDAsnLSX%2BH6z9FFXnpTT%2FX90Z5YRfDN6Z0jVoTsOAqT%2BhieRmgLhGCsa61%2BFGJ0q94UV1m4HzQXdLyHoAH8HpvjyvDGnW%2B5%2FhLOspa4ieTD4LX9kqnISNOvqCnB%2F0mby28FEKOWw2UIfgCce%2B6MXzWQD%2FwzAc%2FDh%2Fr0pClWPD6hxRxzYz8A1WI6S1NQbic8IILpCeVX%2BBcMsEqhJrwbElJdRDfOUStyFCUy%2BXwHSabxcnNUuto0k8DLduucVNu%2BHX0LMPJEl3oUQ1afQQDSfJxVj4oZCksPwqLnbbPwBphtO66ao8gOxcDfTSAfPiqvP6lzA7Z%2FkaeQzPxJkM7nxrWoENmMU9KGsmszx8mRJWddhBcSFnQLBmEBeq0J7itd0yJCeTv3ZKIK6gpM5A%2BaCfU6rB1pK0NkBx2BMc8HJAMRbr0R%2F21o416jnSGHBUE%2FGMaM4ii147kXuF1D9vLocSvGaBd4%2FE6J%2FKCUs8h1%2BbRox8tskupIuLkKsf9YTvhAzIqK%2FVAsrWAVEXtcvMrNsKdGTAD0Atn7HBCU%2BzHO88oKjUcX4qRl89J%2Bc4PeKnjLMObqn8wGOqUBi9Rkva6trETB4NYPoxs1lJyIxPH4ODjVYh9VAKOJGaz15kR63Ik1wDU37o6hAmZIF7tbaPXVsOxBFft%2B9YzS1wYP%2B%2FyFh%2BoJloZyFARWqh2bW5jHxc5ZZrau3rR2ZW5K%2BpOvJhL8p1rx7UypAOMwZ%2Fu2q%2B%2FgEw7dR4lewAdQcvx6vMOM2W5BqXKIehM%2F3azFKC8WDa2UaXxMJHrqY3oST5xgu%2F2%2F&X-Amz-Signature=5d80629511226c20138faf6da066f9c1773707ceee5171728612d5f61395fb1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H6EYX4U%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4M%2B78DMcFj%2FYyMfDSz7X9SwToC9CpzK0JL1X0xLYHHAiEA5orAD8xWywTp8UVzfN8Vy27ZRqjRsATplftQUqBXug0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDC3%2BKNyjYE0x3WR8kSrcA6siJ2ZWZ7TSJZ2Kt42%2BXxTEFvBoKMcekCegbdpucBP5RBgbJVJaz8ecsnw%2FcqDAsnLSX%2BH6z9FFXnpTT%2FX90Z5YRfDN6Z0jVoTsOAqT%2BhieRmgLhGCsa61%2BFGJ0q94UV1m4HzQXdLyHoAH8HpvjyvDGnW%2B5%2FhLOspa4ieTD4LX9kqnISNOvqCnB%2F0mby28FEKOWw2UIfgCce%2B6MXzWQD%2FwzAc%2FDh%2Fr0pClWPD6hxRxzYz8A1WI6S1NQbic8IILpCeVX%2BBcMsEqhJrwbElJdRDfOUStyFCUy%2BXwHSabxcnNUuto0k8DLduucVNu%2BHX0LMPJEl3oUQ1afQQDSfJxVj4oZCksPwqLnbbPwBphtO66ao8gOxcDfTSAfPiqvP6lzA7Z%2FkaeQzPxJkM7nxrWoENmMU9KGsmszx8mRJWddhBcSFnQLBmEBeq0J7itd0yJCeTv3ZKIK6gpM5A%2BaCfU6rB1pK0NkBx2BMc8HJAMRbr0R%2F21o416jnSGHBUE%2FGMaM4ii147kXuF1D9vLocSvGaBd4%2FE6J%2FKCUs8h1%2BbRox8tskupIuLkKsf9YTvhAzIqK%2FVAsrWAVEXtcvMrNsKdGTAD0Atn7HBCU%2BzHO88oKjUcX4qRl89J%2Bc4PeKnjLMObqn8wGOqUBi9Rkva6trETB4NYPoxs1lJyIxPH4ODjVYh9VAKOJGaz15kR63Ik1wDU37o6hAmZIF7tbaPXVsOxBFft%2B9YzS1wYP%2B%2FyFh%2BoJloZyFARWqh2bW5jHxc5ZZrau3rR2ZW5K%2BpOvJhL8p1rx7UypAOMwZ%2Fu2q%2B%2FgEw7dR4lewAdQcvx6vMOM2W5BqXKIehM%2F3azFKC8WDa2UaXxMJHrqY3oST5xgu%2F2%2F&X-Amz-Signature=a092dee29fd86c0a9914a611a8db5c9accc5558b9e0acd2b40748bc17efa29bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H6EYX4U%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4M%2B78DMcFj%2FYyMfDSz7X9SwToC9CpzK0JL1X0xLYHHAiEA5orAD8xWywTp8UVzfN8Vy27ZRqjRsATplftQUqBXug0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDC3%2BKNyjYE0x3WR8kSrcA6siJ2ZWZ7TSJZ2Kt42%2BXxTEFvBoKMcekCegbdpucBP5RBgbJVJaz8ecsnw%2FcqDAsnLSX%2BH6z9FFXnpTT%2FX90Z5YRfDN6Z0jVoTsOAqT%2BhieRmgLhGCsa61%2BFGJ0q94UV1m4HzQXdLyHoAH8HpvjyvDGnW%2B5%2FhLOspa4ieTD4LX9kqnISNOvqCnB%2F0mby28FEKOWw2UIfgCce%2B6MXzWQD%2FwzAc%2FDh%2Fr0pClWPD6hxRxzYz8A1WI6S1NQbic8IILpCeVX%2BBcMsEqhJrwbElJdRDfOUStyFCUy%2BXwHSabxcnNUuto0k8DLduucVNu%2BHX0LMPJEl3oUQ1afQQDSfJxVj4oZCksPwqLnbbPwBphtO66ao8gOxcDfTSAfPiqvP6lzA7Z%2FkaeQzPxJkM7nxrWoENmMU9KGsmszx8mRJWddhBcSFnQLBmEBeq0J7itd0yJCeTv3ZKIK6gpM5A%2BaCfU6rB1pK0NkBx2BMc8HJAMRbr0R%2F21o416jnSGHBUE%2FGMaM4ii147kXuF1D9vLocSvGaBd4%2FE6J%2FKCUs8h1%2BbRox8tskupIuLkKsf9YTvhAzIqK%2FVAsrWAVEXtcvMrNsKdGTAD0Atn7HBCU%2BzHO88oKjUcX4qRl89J%2Bc4PeKnjLMObqn8wGOqUBi9Rkva6trETB4NYPoxs1lJyIxPH4ODjVYh9VAKOJGaz15kR63Ik1wDU37o6hAmZIF7tbaPXVsOxBFft%2B9YzS1wYP%2B%2FyFh%2BoJloZyFARWqh2bW5jHxc5ZZrau3rR2ZW5K%2BpOvJhL8p1rx7UypAOMwZ%2Fu2q%2B%2FgEw7dR4lewAdQcvx6vMOM2W5BqXKIehM%2F3azFKC8WDa2UaXxMJHrqY3oST5xgu%2F2%2F&X-Amz-Signature=6e00abf35f62910135a63978edbc0e5d7cd5129f903e1dba9159fe76bed227e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H6EYX4U%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4M%2B78DMcFj%2FYyMfDSz7X9SwToC9CpzK0JL1X0xLYHHAiEA5orAD8xWywTp8UVzfN8Vy27ZRqjRsATplftQUqBXug0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDC3%2BKNyjYE0x3WR8kSrcA6siJ2ZWZ7TSJZ2Kt42%2BXxTEFvBoKMcekCegbdpucBP5RBgbJVJaz8ecsnw%2FcqDAsnLSX%2BH6z9FFXnpTT%2FX90Z5YRfDN6Z0jVoTsOAqT%2BhieRmgLhGCsa61%2BFGJ0q94UV1m4HzQXdLyHoAH8HpvjyvDGnW%2B5%2FhLOspa4ieTD4LX9kqnISNOvqCnB%2F0mby28FEKOWw2UIfgCce%2B6MXzWQD%2FwzAc%2FDh%2Fr0pClWPD6hxRxzYz8A1WI6S1NQbic8IILpCeVX%2BBcMsEqhJrwbElJdRDfOUStyFCUy%2BXwHSabxcnNUuto0k8DLduucVNu%2BHX0LMPJEl3oUQ1afQQDSfJxVj4oZCksPwqLnbbPwBphtO66ao8gOxcDfTSAfPiqvP6lzA7Z%2FkaeQzPxJkM7nxrWoENmMU9KGsmszx8mRJWddhBcSFnQLBmEBeq0J7itd0yJCeTv3ZKIK6gpM5A%2BaCfU6rB1pK0NkBx2BMc8HJAMRbr0R%2F21o416jnSGHBUE%2FGMaM4ii147kXuF1D9vLocSvGaBd4%2FE6J%2FKCUs8h1%2BbRox8tskupIuLkKsf9YTvhAzIqK%2FVAsrWAVEXtcvMrNsKdGTAD0Atn7HBCU%2BzHO88oKjUcX4qRl89J%2Bc4PeKnjLMObqn8wGOqUBi9Rkva6trETB4NYPoxs1lJyIxPH4ODjVYh9VAKOJGaz15kR63Ik1wDU37o6hAmZIF7tbaPXVsOxBFft%2B9YzS1wYP%2B%2FyFh%2BoJloZyFARWqh2bW5jHxc5ZZrau3rR2ZW5K%2BpOvJhL8p1rx7UypAOMwZ%2Fu2q%2B%2FgEw7dR4lewAdQcvx6vMOM2W5BqXKIehM%2F3azFKC8WDa2UaXxMJHrqY3oST5xgu%2F2%2F&X-Amz-Signature=4205fc003ba13d5b9fd6744877ee23204c2644d151b955a89b747e54cdc9008c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROJEMINY%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8a8WOdHjjY9L3xvtQq40xKEl%2BfidqDF4UoJccu%2BLduAiEAmiW9mEnYTz3ZuIZcoZRcHfbURgNdE3LeHh9ynl9E%2BRgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBzvjOPx7CynpGwwECrcA34WyLQf1PgXlomyNiyDEJ0wK1XV4kqPTr3BXh28CVXzNJj9rFQcSTee7malz9THLwrW%2BRBd4P%2FT9oT6xNM%2BmG6IT8g1k%2BN2GOvCnKhYjphq0LgibXBS8JzGees5GozqlifOPGZQhe%2FrDoF5XYTUChFiCR5qW74UvfJSwH377jW5Hs1w3tvCJwCsmIuutOzoQICRlabUwwdEBDBAiEg37mbTvIiD87VSY6VKdrEOfwrYWSV7Cu41uTxi0%2BgmX%2Ba2u91uilAxYqcLz%2BIjfrrFAPBmV%2BIAygn3LrGLADbqaUCBue0zCfKYIELfaZjYnAft%2FbssSpZgmmUcihqYhdEz8vln7%2B8fEPl%2BCrj2MkWaKTqfqSbZ9K77oVa9DOhb0leaxZOUwHb7om1f5nZdHARJGTYDWNHm42RztMvkkoXEvMqrtfzxVR3IcD3BGWRQHEGh9itv8cOB7NQzjrkqYwkuIFI%2FfJinfaxf4GR7qVAYkjMExZxNSMzLvFpXO%2BHubUcL1Zv4ZNTN538nz0cawGzP0r4IHE9ew5yYPdnfxXTUknGAbqEsoQsAYOg1ZEKHK6qNnE%2FJK%2B9y4zMLsOvZ7ddmzaBNRYqkjP4%2FqrhxNoKYloNokFQYA140W0BZk%2Bq0MMnqn8wGOqUBzpqosrh9XrwaHqhaYzdtWZQjDw5ln85oK5zb%2FwvjrnoOXuWSbBIo3%2FHPr%2FvMdVONqKf989bwRhqfLTTNNjJGXsZ1ztOuD57z7ItCYJ842XZ4WDEQxHIAopCjHsZSYFLZzfIEzqkCQE%2Bd%2F%2FtOeup2QXFhGkXU1QoWU8sM%2FyjYHlnoR7KjKvMgngEUVR64vvuzqJ9BmRlo5fO9Tv96BzK423XEX63T&X-Amz-Signature=7becc50732c53b1035361455a7e0d7ec5e12a96fd0500df47b2f0811873515a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H6EYX4U%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4M%2B78DMcFj%2FYyMfDSz7X9SwToC9CpzK0JL1X0xLYHHAiEA5orAD8xWywTp8UVzfN8Vy27ZRqjRsATplftQUqBXug0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDC3%2BKNyjYE0x3WR8kSrcA6siJ2ZWZ7TSJZ2Kt42%2BXxTEFvBoKMcekCegbdpucBP5RBgbJVJaz8ecsnw%2FcqDAsnLSX%2BH6z9FFXnpTT%2FX90Z5YRfDN6Z0jVoTsOAqT%2BhieRmgLhGCsa61%2BFGJ0q94UV1m4HzQXdLyHoAH8HpvjyvDGnW%2B5%2FhLOspa4ieTD4LX9kqnISNOvqCnB%2F0mby28FEKOWw2UIfgCce%2B6MXzWQD%2FwzAc%2FDh%2Fr0pClWPD6hxRxzYz8A1WI6S1NQbic8IILpCeVX%2BBcMsEqhJrwbElJdRDfOUStyFCUy%2BXwHSabxcnNUuto0k8DLduucVNu%2BHX0LMPJEl3oUQ1afQQDSfJxVj4oZCksPwqLnbbPwBphtO66ao8gOxcDfTSAfPiqvP6lzA7Z%2FkaeQzPxJkM7nxrWoENmMU9KGsmszx8mRJWddhBcSFnQLBmEBeq0J7itd0yJCeTv3ZKIK6gpM5A%2BaCfU6rB1pK0NkBx2BMc8HJAMRbr0R%2F21o416jnSGHBUE%2FGMaM4ii147kXuF1D9vLocSvGaBd4%2FE6J%2FKCUs8h1%2BbRox8tskupIuLkKsf9YTvhAzIqK%2FVAsrWAVEXtcvMrNsKdGTAD0Atn7HBCU%2BzHO88oKjUcX4qRl89J%2Bc4PeKnjLMObqn8wGOqUBi9Rkva6trETB4NYPoxs1lJyIxPH4ODjVYh9VAKOJGaz15kR63Ik1wDU37o6hAmZIF7tbaPXVsOxBFft%2B9YzS1wYP%2B%2FyFh%2BoJloZyFARWqh2bW5jHxc5ZZrau3rR2ZW5K%2BpOvJhL8p1rx7UypAOMwZ%2Fu2q%2B%2FgEw7dR4lewAdQcvx6vMOM2W5BqXKIehM%2F3azFKC8WDa2UaXxMJHrqY3oST5xgu%2F2%2F&X-Amz-Signature=dd9cc75041d15d977c5d5ea33becd494061f4b3db92225b17f8806d2faf2709e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H6EYX4U%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4M%2B78DMcFj%2FYyMfDSz7X9SwToC9CpzK0JL1X0xLYHHAiEA5orAD8xWywTp8UVzfN8Vy27ZRqjRsATplftQUqBXug0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDC3%2BKNyjYE0x3WR8kSrcA6siJ2ZWZ7TSJZ2Kt42%2BXxTEFvBoKMcekCegbdpucBP5RBgbJVJaz8ecsnw%2FcqDAsnLSX%2BH6z9FFXnpTT%2FX90Z5YRfDN6Z0jVoTsOAqT%2BhieRmgLhGCsa61%2BFGJ0q94UV1m4HzQXdLyHoAH8HpvjyvDGnW%2B5%2FhLOspa4ieTD4LX9kqnISNOvqCnB%2F0mby28FEKOWw2UIfgCce%2B6MXzWQD%2FwzAc%2FDh%2Fr0pClWPD6hxRxzYz8A1WI6S1NQbic8IILpCeVX%2BBcMsEqhJrwbElJdRDfOUStyFCUy%2BXwHSabxcnNUuto0k8DLduucVNu%2BHX0LMPJEl3oUQ1afQQDSfJxVj4oZCksPwqLnbbPwBphtO66ao8gOxcDfTSAfPiqvP6lzA7Z%2FkaeQzPxJkM7nxrWoENmMU9KGsmszx8mRJWddhBcSFnQLBmEBeq0J7itd0yJCeTv3ZKIK6gpM5A%2BaCfU6rB1pK0NkBx2BMc8HJAMRbr0R%2F21o416jnSGHBUE%2FGMaM4ii147kXuF1D9vLocSvGaBd4%2FE6J%2FKCUs8h1%2BbRox8tskupIuLkKsf9YTvhAzIqK%2FVAsrWAVEXtcvMrNsKdGTAD0Atn7HBCU%2BzHO88oKjUcX4qRl89J%2Bc4PeKnjLMObqn8wGOqUBi9Rkva6trETB4NYPoxs1lJyIxPH4ODjVYh9VAKOJGaz15kR63Ik1wDU37o6hAmZIF7tbaPXVsOxBFft%2B9YzS1wYP%2B%2FyFh%2BoJloZyFARWqh2bW5jHxc5ZZrau3rR2ZW5K%2BpOvJhL8p1rx7UypAOMwZ%2Fu2q%2B%2FgEw7dR4lewAdQcvx6vMOM2W5BqXKIehM%2F3azFKC8WDa2UaXxMJHrqY3oST5xgu%2F2%2F&X-Amz-Signature=0e87499432fb3a9455edf545b04c821840aea98ef5f24f095e45e0a2ee0f2c3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H6EYX4U%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4M%2B78DMcFj%2FYyMfDSz7X9SwToC9CpzK0JL1X0xLYHHAiEA5orAD8xWywTp8UVzfN8Vy27ZRqjRsATplftQUqBXug0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDC3%2BKNyjYE0x3WR8kSrcA6siJ2ZWZ7TSJZ2Kt42%2BXxTEFvBoKMcekCegbdpucBP5RBgbJVJaz8ecsnw%2FcqDAsnLSX%2BH6z9FFXnpTT%2FX90Z5YRfDN6Z0jVoTsOAqT%2BhieRmgLhGCsa61%2BFGJ0q94UV1m4HzQXdLyHoAH8HpvjyvDGnW%2B5%2FhLOspa4ieTD4LX9kqnISNOvqCnB%2F0mby28FEKOWw2UIfgCce%2B6MXzWQD%2FwzAc%2FDh%2Fr0pClWPD6hxRxzYz8A1WI6S1NQbic8IILpCeVX%2BBcMsEqhJrwbElJdRDfOUStyFCUy%2BXwHSabxcnNUuto0k8DLduucVNu%2BHX0LMPJEl3oUQ1afQQDSfJxVj4oZCksPwqLnbbPwBphtO66ao8gOxcDfTSAfPiqvP6lzA7Z%2FkaeQzPxJkM7nxrWoENmMU9KGsmszx8mRJWddhBcSFnQLBmEBeq0J7itd0yJCeTv3ZKIK6gpM5A%2BaCfU6rB1pK0NkBx2BMc8HJAMRbr0R%2F21o416jnSGHBUE%2FGMaM4ii147kXuF1D9vLocSvGaBd4%2FE6J%2FKCUs8h1%2BbRox8tskupIuLkKsf9YTvhAzIqK%2FVAsrWAVEXtcvMrNsKdGTAD0Atn7HBCU%2BzHO88oKjUcX4qRl89J%2Bc4PeKnjLMObqn8wGOqUBi9Rkva6trETB4NYPoxs1lJyIxPH4ODjVYh9VAKOJGaz15kR63Ik1wDU37o6hAmZIF7tbaPXVsOxBFft%2B9YzS1wYP%2B%2FyFh%2BoJloZyFARWqh2bW5jHxc5ZZrau3rR2ZW5K%2BpOvJhL8p1rx7UypAOMwZ%2Fu2q%2B%2FgEw7dR4lewAdQcvx6vMOM2W5BqXKIehM%2F3azFKC8WDa2UaXxMJHrqY3oST5xgu%2F2%2F&X-Amz-Signature=4fa409c14c86ac481a56efccf7989dcfaa509c06354024ec8ee2c639a0d3c4dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H6EYX4U%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4M%2B78DMcFj%2FYyMfDSz7X9SwToC9CpzK0JL1X0xLYHHAiEA5orAD8xWywTp8UVzfN8Vy27ZRqjRsATplftQUqBXug0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDC3%2BKNyjYE0x3WR8kSrcA6siJ2ZWZ7TSJZ2Kt42%2BXxTEFvBoKMcekCegbdpucBP5RBgbJVJaz8ecsnw%2FcqDAsnLSX%2BH6z9FFXnpTT%2FX90Z5YRfDN6Z0jVoTsOAqT%2BhieRmgLhGCsa61%2BFGJ0q94UV1m4HzQXdLyHoAH8HpvjyvDGnW%2B5%2FhLOspa4ieTD4LX9kqnISNOvqCnB%2F0mby28FEKOWw2UIfgCce%2B6MXzWQD%2FwzAc%2FDh%2Fr0pClWPD6hxRxzYz8A1WI6S1NQbic8IILpCeVX%2BBcMsEqhJrwbElJdRDfOUStyFCUy%2BXwHSabxcnNUuto0k8DLduucVNu%2BHX0LMPJEl3oUQ1afQQDSfJxVj4oZCksPwqLnbbPwBphtO66ao8gOxcDfTSAfPiqvP6lzA7Z%2FkaeQzPxJkM7nxrWoENmMU9KGsmszx8mRJWddhBcSFnQLBmEBeq0J7itd0yJCeTv3ZKIK6gpM5A%2BaCfU6rB1pK0NkBx2BMc8HJAMRbr0R%2F21o416jnSGHBUE%2FGMaM4ii147kXuF1D9vLocSvGaBd4%2FE6J%2FKCUs8h1%2BbRox8tskupIuLkKsf9YTvhAzIqK%2FVAsrWAVEXtcvMrNsKdGTAD0Atn7HBCU%2BzHO88oKjUcX4qRl89J%2Bc4PeKnjLMObqn8wGOqUBi9Rkva6trETB4NYPoxs1lJyIxPH4ODjVYh9VAKOJGaz15kR63Ik1wDU37o6hAmZIF7tbaPXVsOxBFft%2B9YzS1wYP%2B%2FyFh%2BoJloZyFARWqh2bW5jHxc5ZZrau3rR2ZW5K%2BpOvJhL8p1rx7UypAOMwZ%2Fu2q%2B%2FgEw7dR4lewAdQcvx6vMOM2W5BqXKIehM%2F3azFKC8WDa2UaXxMJHrqY3oST5xgu%2F2%2F&X-Amz-Signature=3a2bfdfe5bb27db8fb4bf805666a5a1834f617cd07c8761fa3def38520b030e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H6EYX4U%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4M%2B78DMcFj%2FYyMfDSz7X9SwToC9CpzK0JL1X0xLYHHAiEA5orAD8xWywTp8UVzfN8Vy27ZRqjRsATplftQUqBXug0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDC3%2BKNyjYE0x3WR8kSrcA6siJ2ZWZ7TSJZ2Kt42%2BXxTEFvBoKMcekCegbdpucBP5RBgbJVJaz8ecsnw%2FcqDAsnLSX%2BH6z9FFXnpTT%2FX90Z5YRfDN6Z0jVoTsOAqT%2BhieRmgLhGCsa61%2BFGJ0q94UV1m4HzQXdLyHoAH8HpvjyvDGnW%2B5%2FhLOspa4ieTD4LX9kqnISNOvqCnB%2F0mby28FEKOWw2UIfgCce%2B6MXzWQD%2FwzAc%2FDh%2Fr0pClWPD6hxRxzYz8A1WI6S1NQbic8IILpCeVX%2BBcMsEqhJrwbElJdRDfOUStyFCUy%2BXwHSabxcnNUuto0k8DLduucVNu%2BHX0LMPJEl3oUQ1afQQDSfJxVj4oZCksPwqLnbbPwBphtO66ao8gOxcDfTSAfPiqvP6lzA7Z%2FkaeQzPxJkM7nxrWoENmMU9KGsmszx8mRJWddhBcSFnQLBmEBeq0J7itd0yJCeTv3ZKIK6gpM5A%2BaCfU6rB1pK0NkBx2BMc8HJAMRbr0R%2F21o416jnSGHBUE%2FGMaM4ii147kXuF1D9vLocSvGaBd4%2FE6J%2FKCUs8h1%2BbRox8tskupIuLkKsf9YTvhAzIqK%2FVAsrWAVEXtcvMrNsKdGTAD0Atn7HBCU%2BzHO88oKjUcX4qRl89J%2Bc4PeKnjLMObqn8wGOqUBi9Rkva6trETB4NYPoxs1lJyIxPH4ODjVYh9VAKOJGaz15kR63Ik1wDU37o6hAmZIF7tbaPXVsOxBFft%2B9YzS1wYP%2B%2FyFh%2BoJloZyFARWqh2bW5jHxc5ZZrau3rR2ZW5K%2BpOvJhL8p1rx7UypAOMwZ%2Fu2q%2B%2FgEw7dR4lewAdQcvx6vMOM2W5BqXKIehM%2F3azFKC8WDa2UaXxMJHrqY3oST5xgu%2F2%2F&X-Amz-Signature=6c71bef77e0a82b58331a3b8b1b662430558e2fd9088888784ea9715dd42c2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H6EYX4U%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4M%2B78DMcFj%2FYyMfDSz7X9SwToC9CpzK0JL1X0xLYHHAiEA5orAD8xWywTp8UVzfN8Vy27ZRqjRsATplftQUqBXug0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDC3%2BKNyjYE0x3WR8kSrcA6siJ2ZWZ7TSJZ2Kt42%2BXxTEFvBoKMcekCegbdpucBP5RBgbJVJaz8ecsnw%2FcqDAsnLSX%2BH6z9FFXnpTT%2FX90Z5YRfDN6Z0jVoTsOAqT%2BhieRmgLhGCsa61%2BFGJ0q94UV1m4HzQXdLyHoAH8HpvjyvDGnW%2B5%2FhLOspa4ieTD4LX9kqnISNOvqCnB%2F0mby28FEKOWw2UIfgCce%2B6MXzWQD%2FwzAc%2FDh%2Fr0pClWPD6hxRxzYz8A1WI6S1NQbic8IILpCeVX%2BBcMsEqhJrwbElJdRDfOUStyFCUy%2BXwHSabxcnNUuto0k8DLduucVNu%2BHX0LMPJEl3oUQ1afQQDSfJxVj4oZCksPwqLnbbPwBphtO66ao8gOxcDfTSAfPiqvP6lzA7Z%2FkaeQzPxJkM7nxrWoENmMU9KGsmszx8mRJWddhBcSFnQLBmEBeq0J7itd0yJCeTv3ZKIK6gpM5A%2BaCfU6rB1pK0NkBx2BMc8HJAMRbr0R%2F21o416jnSGHBUE%2FGMaM4ii147kXuF1D9vLocSvGaBd4%2FE6J%2FKCUs8h1%2BbRox8tskupIuLkKsf9YTvhAzIqK%2FVAsrWAVEXtcvMrNsKdGTAD0Atn7HBCU%2BzHO88oKjUcX4qRl89J%2Bc4PeKnjLMObqn8wGOqUBi9Rkva6trETB4NYPoxs1lJyIxPH4ODjVYh9VAKOJGaz15kR63Ik1wDU37o6hAmZIF7tbaPXVsOxBFft%2B9YzS1wYP%2B%2FyFh%2BoJloZyFARWqh2bW5jHxc5ZZrau3rR2ZW5K%2BpOvJhL8p1rx7UypAOMwZ%2Fu2q%2B%2FgEw7dR4lewAdQcvx6vMOM2W5BqXKIehM%2F3azFKC8WDa2UaXxMJHrqY3oST5xgu%2F2%2F&X-Amz-Signature=cf58984b59c3696a875e5aec908344e1a7c06bb63470258389c6cbad171b4b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


