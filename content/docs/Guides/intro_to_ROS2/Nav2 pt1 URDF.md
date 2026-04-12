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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZWZUCZ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyp6Nn0xFz4F%2FCSySKdlv0gwMJBfXg7v29FnLi8IHgHwIgIuSxBoozGyBCdI5hlFAJs3SCuLIhLx6G8K9XC5OYIUUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGYnhcbEU8DmEUAWPircA1hht1boHuMfzp6A9ZKQGmJRmwzGpLN5htPUfOnFVsV9AcRYhXxQWO04Qxyg0ujUKNsIILAE4xUrW%2FmVaAAi%2BvC0Q5jvOHbJkaC2wTC5MkqcHVMZ1KIHhZjrtkYGYyaUME4BsCqkYlYaELirJaOyXXgKPWn4oqaqMBHZ7UJU6XQt6gNcZlBn2o44xAgvI7sJxCBsP73eytUlxY8%2BrAzlEHH9denRGhKY2W2ifD9shM2ESUXSArpqmgXs08ooQiI5V8dGrYzHYrc%2B8X31cOTr%2BU88%2BrQdUhPdd%2FufwVfS00CqyzSST6scEonvG3XruAsh4r4tfPRHMrWngjkKpZ%2Fqh004hLN8EJqYPkbHHSxnOdj0PeH441rwImb6Ihj8XVWCcT8%2B5mKWNSvd8UUJhaS36M%2BPldoeKImIBnk5gt5UzVk0JQtskh4yAs8U0w6lubLB34YmHapuELa9xlYxn0flAigQSV2vJqsuaOlu6dUTMzC%2F9bktYoiGEhnUSIbBfCts8k4X8om7%2FBXbeQbbdpje7CBdskquNZTjqHFR5E3yrgW7hY6WQW%2BklPTwUj0C5qEi5ZOY6Bhsb%2FN7oqWk4hLftbxkTLNt4CnzR07XZqz9m0uC3wpS6P8r931c0HjCMOiH7M4GOqUBQ%2FBZrfTOk61hz0ruunp%2FqxHGDCe1yV%2FuTphJMyF%2BKzmSPNLZvJGb9RcUEy4yuBQQlkR0ePBdR4QqEktPKWYxuqt8dSdle3pqQMEl9ALq4Xpt%2FMsa%2BNUYRvlvANGzDub8zVnE90C2vKgFlBHS6V1GMtCnacO3WkBz8MoULXFj7wtZxmzjSuF6V%2BkCFTNG%2F2SVp99bfUFTAD0K5wG91uxRnE2tXjM3&X-Amz-Signature=d1c0bf6e0e95feaedda29ea266c67116db2fcbc8ffd66545270b09bd82b8ac7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZWZUCZ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyp6Nn0xFz4F%2FCSySKdlv0gwMJBfXg7v29FnLi8IHgHwIgIuSxBoozGyBCdI5hlFAJs3SCuLIhLx6G8K9XC5OYIUUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGYnhcbEU8DmEUAWPircA1hht1boHuMfzp6A9ZKQGmJRmwzGpLN5htPUfOnFVsV9AcRYhXxQWO04Qxyg0ujUKNsIILAE4xUrW%2FmVaAAi%2BvC0Q5jvOHbJkaC2wTC5MkqcHVMZ1KIHhZjrtkYGYyaUME4BsCqkYlYaELirJaOyXXgKPWn4oqaqMBHZ7UJU6XQt6gNcZlBn2o44xAgvI7sJxCBsP73eytUlxY8%2BrAzlEHH9denRGhKY2W2ifD9shM2ESUXSArpqmgXs08ooQiI5V8dGrYzHYrc%2B8X31cOTr%2BU88%2BrQdUhPdd%2FufwVfS00CqyzSST6scEonvG3XruAsh4r4tfPRHMrWngjkKpZ%2Fqh004hLN8EJqYPkbHHSxnOdj0PeH441rwImb6Ihj8XVWCcT8%2B5mKWNSvd8UUJhaS36M%2BPldoeKImIBnk5gt5UzVk0JQtskh4yAs8U0w6lubLB34YmHapuELa9xlYxn0flAigQSV2vJqsuaOlu6dUTMzC%2F9bktYoiGEhnUSIbBfCts8k4X8om7%2FBXbeQbbdpje7CBdskquNZTjqHFR5E3yrgW7hY6WQW%2BklPTwUj0C5qEi5ZOY6Bhsb%2FN7oqWk4hLftbxkTLNt4CnzR07XZqz9m0uC3wpS6P8r931c0HjCMOiH7M4GOqUBQ%2FBZrfTOk61hz0ruunp%2FqxHGDCe1yV%2FuTphJMyF%2BKzmSPNLZvJGb9RcUEy4yuBQQlkR0ePBdR4QqEktPKWYxuqt8dSdle3pqQMEl9ALq4Xpt%2FMsa%2BNUYRvlvANGzDub8zVnE90C2vKgFlBHS6V1GMtCnacO3WkBz8MoULXFj7wtZxmzjSuF6V%2BkCFTNG%2F2SVp99bfUFTAD0K5wG91uxRnE2tXjM3&X-Amz-Signature=3daa608da6c65a4a3919babc333dbf1d84424024cff326cd585d7d9a1ba738e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZWZUCZ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyp6Nn0xFz4F%2FCSySKdlv0gwMJBfXg7v29FnLi8IHgHwIgIuSxBoozGyBCdI5hlFAJs3SCuLIhLx6G8K9XC5OYIUUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGYnhcbEU8DmEUAWPircA1hht1boHuMfzp6A9ZKQGmJRmwzGpLN5htPUfOnFVsV9AcRYhXxQWO04Qxyg0ujUKNsIILAE4xUrW%2FmVaAAi%2BvC0Q5jvOHbJkaC2wTC5MkqcHVMZ1KIHhZjrtkYGYyaUME4BsCqkYlYaELirJaOyXXgKPWn4oqaqMBHZ7UJU6XQt6gNcZlBn2o44xAgvI7sJxCBsP73eytUlxY8%2BrAzlEHH9denRGhKY2W2ifD9shM2ESUXSArpqmgXs08ooQiI5V8dGrYzHYrc%2B8X31cOTr%2BU88%2BrQdUhPdd%2FufwVfS00CqyzSST6scEonvG3XruAsh4r4tfPRHMrWngjkKpZ%2Fqh004hLN8EJqYPkbHHSxnOdj0PeH441rwImb6Ihj8XVWCcT8%2B5mKWNSvd8UUJhaS36M%2BPldoeKImIBnk5gt5UzVk0JQtskh4yAs8U0w6lubLB34YmHapuELa9xlYxn0flAigQSV2vJqsuaOlu6dUTMzC%2F9bktYoiGEhnUSIbBfCts8k4X8om7%2FBXbeQbbdpje7CBdskquNZTjqHFR5E3yrgW7hY6WQW%2BklPTwUj0C5qEi5ZOY6Bhsb%2FN7oqWk4hLftbxkTLNt4CnzR07XZqz9m0uC3wpS6P8r931c0HjCMOiH7M4GOqUBQ%2FBZrfTOk61hz0ruunp%2FqxHGDCe1yV%2FuTphJMyF%2BKzmSPNLZvJGb9RcUEy4yuBQQlkR0ePBdR4QqEktPKWYxuqt8dSdle3pqQMEl9ALq4Xpt%2FMsa%2BNUYRvlvANGzDub8zVnE90C2vKgFlBHS6V1GMtCnacO3WkBz8MoULXFj7wtZxmzjSuF6V%2BkCFTNG%2F2SVp99bfUFTAD0K5wG91uxRnE2tXjM3&X-Amz-Signature=a7c2b8826314b61e94fb0e2e7d7081253e7bffb5789f8206cb4e92c7c856bd02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZWZUCZ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyp6Nn0xFz4F%2FCSySKdlv0gwMJBfXg7v29FnLi8IHgHwIgIuSxBoozGyBCdI5hlFAJs3SCuLIhLx6G8K9XC5OYIUUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGYnhcbEU8DmEUAWPircA1hht1boHuMfzp6A9ZKQGmJRmwzGpLN5htPUfOnFVsV9AcRYhXxQWO04Qxyg0ujUKNsIILAE4xUrW%2FmVaAAi%2BvC0Q5jvOHbJkaC2wTC5MkqcHVMZ1KIHhZjrtkYGYyaUME4BsCqkYlYaELirJaOyXXgKPWn4oqaqMBHZ7UJU6XQt6gNcZlBn2o44xAgvI7sJxCBsP73eytUlxY8%2BrAzlEHH9denRGhKY2W2ifD9shM2ESUXSArpqmgXs08ooQiI5V8dGrYzHYrc%2B8X31cOTr%2BU88%2BrQdUhPdd%2FufwVfS00CqyzSST6scEonvG3XruAsh4r4tfPRHMrWngjkKpZ%2Fqh004hLN8EJqYPkbHHSxnOdj0PeH441rwImb6Ihj8XVWCcT8%2B5mKWNSvd8UUJhaS36M%2BPldoeKImIBnk5gt5UzVk0JQtskh4yAs8U0w6lubLB34YmHapuELa9xlYxn0flAigQSV2vJqsuaOlu6dUTMzC%2F9bktYoiGEhnUSIbBfCts8k4X8om7%2FBXbeQbbdpje7CBdskquNZTjqHFR5E3yrgW7hY6WQW%2BklPTwUj0C5qEi5ZOY6Bhsb%2FN7oqWk4hLftbxkTLNt4CnzR07XZqz9m0uC3wpS6P8r931c0HjCMOiH7M4GOqUBQ%2FBZrfTOk61hz0ruunp%2FqxHGDCe1yV%2FuTphJMyF%2BKzmSPNLZvJGb9RcUEy4yuBQQlkR0ePBdR4QqEktPKWYxuqt8dSdle3pqQMEl9ALq4Xpt%2FMsa%2BNUYRvlvANGzDub8zVnE90C2vKgFlBHS6V1GMtCnacO3WkBz8MoULXFj7wtZxmzjSuF6V%2BkCFTNG%2F2SVp99bfUFTAD0K5wG91uxRnE2tXjM3&X-Amz-Signature=d9708420ef5d33d84b5b4331ed332f5b3ac322865e58ab8fa127e5af45909445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZWZUCZ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyp6Nn0xFz4F%2FCSySKdlv0gwMJBfXg7v29FnLi8IHgHwIgIuSxBoozGyBCdI5hlFAJs3SCuLIhLx6G8K9XC5OYIUUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGYnhcbEU8DmEUAWPircA1hht1boHuMfzp6A9ZKQGmJRmwzGpLN5htPUfOnFVsV9AcRYhXxQWO04Qxyg0ujUKNsIILAE4xUrW%2FmVaAAi%2BvC0Q5jvOHbJkaC2wTC5MkqcHVMZ1KIHhZjrtkYGYyaUME4BsCqkYlYaELirJaOyXXgKPWn4oqaqMBHZ7UJU6XQt6gNcZlBn2o44xAgvI7sJxCBsP73eytUlxY8%2BrAzlEHH9denRGhKY2W2ifD9shM2ESUXSArpqmgXs08ooQiI5V8dGrYzHYrc%2B8X31cOTr%2BU88%2BrQdUhPdd%2FufwVfS00CqyzSST6scEonvG3XruAsh4r4tfPRHMrWngjkKpZ%2Fqh004hLN8EJqYPkbHHSxnOdj0PeH441rwImb6Ihj8XVWCcT8%2B5mKWNSvd8UUJhaS36M%2BPldoeKImIBnk5gt5UzVk0JQtskh4yAs8U0w6lubLB34YmHapuELa9xlYxn0flAigQSV2vJqsuaOlu6dUTMzC%2F9bktYoiGEhnUSIbBfCts8k4X8om7%2FBXbeQbbdpje7CBdskquNZTjqHFR5E3yrgW7hY6WQW%2BklPTwUj0C5qEi5ZOY6Bhsb%2FN7oqWk4hLftbxkTLNt4CnzR07XZqz9m0uC3wpS6P8r931c0HjCMOiH7M4GOqUBQ%2FBZrfTOk61hz0ruunp%2FqxHGDCe1yV%2FuTphJMyF%2BKzmSPNLZvJGb9RcUEy4yuBQQlkR0ePBdR4QqEktPKWYxuqt8dSdle3pqQMEl9ALq4Xpt%2FMsa%2BNUYRvlvANGzDub8zVnE90C2vKgFlBHS6V1GMtCnacO3WkBz8MoULXFj7wtZxmzjSuF6V%2BkCFTNG%2F2SVp99bfUFTAD0K5wG91uxRnE2tXjM3&X-Amz-Signature=332c8e5b756d1e0197af9e57b4c474983f2c2617a70640e88433db6a8812a918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZWZUCZ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyp6Nn0xFz4F%2FCSySKdlv0gwMJBfXg7v29FnLi8IHgHwIgIuSxBoozGyBCdI5hlFAJs3SCuLIhLx6G8K9XC5OYIUUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGYnhcbEU8DmEUAWPircA1hht1boHuMfzp6A9ZKQGmJRmwzGpLN5htPUfOnFVsV9AcRYhXxQWO04Qxyg0ujUKNsIILAE4xUrW%2FmVaAAi%2BvC0Q5jvOHbJkaC2wTC5MkqcHVMZ1KIHhZjrtkYGYyaUME4BsCqkYlYaELirJaOyXXgKPWn4oqaqMBHZ7UJU6XQt6gNcZlBn2o44xAgvI7sJxCBsP73eytUlxY8%2BrAzlEHH9denRGhKY2W2ifD9shM2ESUXSArpqmgXs08ooQiI5V8dGrYzHYrc%2B8X31cOTr%2BU88%2BrQdUhPdd%2FufwVfS00CqyzSST6scEonvG3XruAsh4r4tfPRHMrWngjkKpZ%2Fqh004hLN8EJqYPkbHHSxnOdj0PeH441rwImb6Ihj8XVWCcT8%2B5mKWNSvd8UUJhaS36M%2BPldoeKImIBnk5gt5UzVk0JQtskh4yAs8U0w6lubLB34YmHapuELa9xlYxn0flAigQSV2vJqsuaOlu6dUTMzC%2F9bktYoiGEhnUSIbBfCts8k4X8om7%2FBXbeQbbdpje7CBdskquNZTjqHFR5E3yrgW7hY6WQW%2BklPTwUj0C5qEi5ZOY6Bhsb%2FN7oqWk4hLftbxkTLNt4CnzR07XZqz9m0uC3wpS6P8r931c0HjCMOiH7M4GOqUBQ%2FBZrfTOk61hz0ruunp%2FqxHGDCe1yV%2FuTphJMyF%2BKzmSPNLZvJGb9RcUEy4yuBQQlkR0ePBdR4QqEktPKWYxuqt8dSdle3pqQMEl9ALq4Xpt%2FMsa%2BNUYRvlvANGzDub8zVnE90C2vKgFlBHS6V1GMtCnacO3WkBz8MoULXFj7wtZxmzjSuF6V%2BkCFTNG%2F2SVp99bfUFTAD0K5wG91uxRnE2tXjM3&X-Amz-Signature=00aa299ae90cb0f3984b42ea38c6d968144e01a5cc427c0f1787ac3847a293dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZWZUCZ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyp6Nn0xFz4F%2FCSySKdlv0gwMJBfXg7v29FnLi8IHgHwIgIuSxBoozGyBCdI5hlFAJs3SCuLIhLx6G8K9XC5OYIUUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGYnhcbEU8DmEUAWPircA1hht1boHuMfzp6A9ZKQGmJRmwzGpLN5htPUfOnFVsV9AcRYhXxQWO04Qxyg0ujUKNsIILAE4xUrW%2FmVaAAi%2BvC0Q5jvOHbJkaC2wTC5MkqcHVMZ1KIHhZjrtkYGYyaUME4BsCqkYlYaELirJaOyXXgKPWn4oqaqMBHZ7UJU6XQt6gNcZlBn2o44xAgvI7sJxCBsP73eytUlxY8%2BrAzlEHH9denRGhKY2W2ifD9shM2ESUXSArpqmgXs08ooQiI5V8dGrYzHYrc%2B8X31cOTr%2BU88%2BrQdUhPdd%2FufwVfS00CqyzSST6scEonvG3XruAsh4r4tfPRHMrWngjkKpZ%2Fqh004hLN8EJqYPkbHHSxnOdj0PeH441rwImb6Ihj8XVWCcT8%2B5mKWNSvd8UUJhaS36M%2BPldoeKImIBnk5gt5UzVk0JQtskh4yAs8U0w6lubLB34YmHapuELa9xlYxn0flAigQSV2vJqsuaOlu6dUTMzC%2F9bktYoiGEhnUSIbBfCts8k4X8om7%2FBXbeQbbdpje7CBdskquNZTjqHFR5E3yrgW7hY6WQW%2BklPTwUj0C5qEi5ZOY6Bhsb%2FN7oqWk4hLftbxkTLNt4CnzR07XZqz9m0uC3wpS6P8r931c0HjCMOiH7M4GOqUBQ%2FBZrfTOk61hz0ruunp%2FqxHGDCe1yV%2FuTphJMyF%2BKzmSPNLZvJGb9RcUEy4yuBQQlkR0ePBdR4QqEktPKWYxuqt8dSdle3pqQMEl9ALq4Xpt%2FMsa%2BNUYRvlvANGzDub8zVnE90C2vKgFlBHS6V1GMtCnacO3WkBz8MoULXFj7wtZxmzjSuF6V%2BkCFTNG%2F2SVp99bfUFTAD0K5wG91uxRnE2tXjM3&X-Amz-Signature=d4b1f815b65847a5d409fff541ad9dc9cd011a7254d82a475c80c4bf0aedfb8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZWZUCZ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyp6Nn0xFz4F%2FCSySKdlv0gwMJBfXg7v29FnLi8IHgHwIgIuSxBoozGyBCdI5hlFAJs3SCuLIhLx6G8K9XC5OYIUUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGYnhcbEU8DmEUAWPircA1hht1boHuMfzp6A9ZKQGmJRmwzGpLN5htPUfOnFVsV9AcRYhXxQWO04Qxyg0ujUKNsIILAE4xUrW%2FmVaAAi%2BvC0Q5jvOHbJkaC2wTC5MkqcHVMZ1KIHhZjrtkYGYyaUME4BsCqkYlYaELirJaOyXXgKPWn4oqaqMBHZ7UJU6XQt6gNcZlBn2o44xAgvI7sJxCBsP73eytUlxY8%2BrAzlEHH9denRGhKY2W2ifD9shM2ESUXSArpqmgXs08ooQiI5V8dGrYzHYrc%2B8X31cOTr%2BU88%2BrQdUhPdd%2FufwVfS00CqyzSST6scEonvG3XruAsh4r4tfPRHMrWngjkKpZ%2Fqh004hLN8EJqYPkbHHSxnOdj0PeH441rwImb6Ihj8XVWCcT8%2B5mKWNSvd8UUJhaS36M%2BPldoeKImIBnk5gt5UzVk0JQtskh4yAs8U0w6lubLB34YmHapuELa9xlYxn0flAigQSV2vJqsuaOlu6dUTMzC%2F9bktYoiGEhnUSIbBfCts8k4X8om7%2FBXbeQbbdpje7CBdskquNZTjqHFR5E3yrgW7hY6WQW%2BklPTwUj0C5qEi5ZOY6Bhsb%2FN7oqWk4hLftbxkTLNt4CnzR07XZqz9m0uC3wpS6P8r931c0HjCMOiH7M4GOqUBQ%2FBZrfTOk61hz0ruunp%2FqxHGDCe1yV%2FuTphJMyF%2BKzmSPNLZvJGb9RcUEy4yuBQQlkR0ePBdR4QqEktPKWYxuqt8dSdle3pqQMEl9ALq4Xpt%2FMsa%2BNUYRvlvANGzDub8zVnE90C2vKgFlBHS6V1GMtCnacO3WkBz8MoULXFj7wtZxmzjSuF6V%2BkCFTNG%2F2SVp99bfUFTAD0K5wG91uxRnE2tXjM3&X-Amz-Signature=8707e6eb7f92c4ef8e4b07f1aac0b9b8751605293e4d9b7119df33d331bc6652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZWZUCZ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyp6Nn0xFz4F%2FCSySKdlv0gwMJBfXg7v29FnLi8IHgHwIgIuSxBoozGyBCdI5hlFAJs3SCuLIhLx6G8K9XC5OYIUUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGYnhcbEU8DmEUAWPircA1hht1boHuMfzp6A9ZKQGmJRmwzGpLN5htPUfOnFVsV9AcRYhXxQWO04Qxyg0ujUKNsIILAE4xUrW%2FmVaAAi%2BvC0Q5jvOHbJkaC2wTC5MkqcHVMZ1KIHhZjrtkYGYyaUME4BsCqkYlYaELirJaOyXXgKPWn4oqaqMBHZ7UJU6XQt6gNcZlBn2o44xAgvI7sJxCBsP73eytUlxY8%2BrAzlEHH9denRGhKY2W2ifD9shM2ESUXSArpqmgXs08ooQiI5V8dGrYzHYrc%2B8X31cOTr%2BU88%2BrQdUhPdd%2FufwVfS00CqyzSST6scEonvG3XruAsh4r4tfPRHMrWngjkKpZ%2Fqh004hLN8EJqYPkbHHSxnOdj0PeH441rwImb6Ihj8XVWCcT8%2B5mKWNSvd8UUJhaS36M%2BPldoeKImIBnk5gt5UzVk0JQtskh4yAs8U0w6lubLB34YmHapuELa9xlYxn0flAigQSV2vJqsuaOlu6dUTMzC%2F9bktYoiGEhnUSIbBfCts8k4X8om7%2FBXbeQbbdpje7CBdskquNZTjqHFR5E3yrgW7hY6WQW%2BklPTwUj0C5qEi5ZOY6Bhsb%2FN7oqWk4hLftbxkTLNt4CnzR07XZqz9m0uC3wpS6P8r931c0HjCMOiH7M4GOqUBQ%2FBZrfTOk61hz0ruunp%2FqxHGDCe1yV%2FuTphJMyF%2BKzmSPNLZvJGb9RcUEy4yuBQQlkR0ePBdR4QqEktPKWYxuqt8dSdle3pqQMEl9ALq4Xpt%2FMsa%2BNUYRvlvANGzDub8zVnE90C2vKgFlBHS6V1GMtCnacO3WkBz8MoULXFj7wtZxmzjSuF6V%2BkCFTNG%2F2SVp99bfUFTAD0K5wG91uxRnE2tXjM3&X-Amz-Signature=a5bf6114288034391f6138d3c1d06988ac49f1666504907b4f58be2163943f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZWZUCZ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyp6Nn0xFz4F%2FCSySKdlv0gwMJBfXg7v29FnLi8IHgHwIgIuSxBoozGyBCdI5hlFAJs3SCuLIhLx6G8K9XC5OYIUUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGYnhcbEU8DmEUAWPircA1hht1boHuMfzp6A9ZKQGmJRmwzGpLN5htPUfOnFVsV9AcRYhXxQWO04Qxyg0ujUKNsIILAE4xUrW%2FmVaAAi%2BvC0Q5jvOHbJkaC2wTC5MkqcHVMZ1KIHhZjrtkYGYyaUME4BsCqkYlYaELirJaOyXXgKPWn4oqaqMBHZ7UJU6XQt6gNcZlBn2o44xAgvI7sJxCBsP73eytUlxY8%2BrAzlEHH9denRGhKY2W2ifD9shM2ESUXSArpqmgXs08ooQiI5V8dGrYzHYrc%2B8X31cOTr%2BU88%2BrQdUhPdd%2FufwVfS00CqyzSST6scEonvG3XruAsh4r4tfPRHMrWngjkKpZ%2Fqh004hLN8EJqYPkbHHSxnOdj0PeH441rwImb6Ihj8XVWCcT8%2B5mKWNSvd8UUJhaS36M%2BPldoeKImIBnk5gt5UzVk0JQtskh4yAs8U0w6lubLB34YmHapuELa9xlYxn0flAigQSV2vJqsuaOlu6dUTMzC%2F9bktYoiGEhnUSIbBfCts8k4X8om7%2FBXbeQbbdpje7CBdskquNZTjqHFR5E3yrgW7hY6WQW%2BklPTwUj0C5qEi5ZOY6Bhsb%2FN7oqWk4hLftbxkTLNt4CnzR07XZqz9m0uC3wpS6P8r931c0HjCMOiH7M4GOqUBQ%2FBZrfTOk61hz0ruunp%2FqxHGDCe1yV%2FuTphJMyF%2BKzmSPNLZvJGb9RcUEy4yuBQQlkR0ePBdR4QqEktPKWYxuqt8dSdle3pqQMEl9ALq4Xpt%2FMsa%2BNUYRvlvANGzDub8zVnE90C2vKgFlBHS6V1GMtCnacO3WkBz8MoULXFj7wtZxmzjSuF6V%2BkCFTNG%2F2SVp99bfUFTAD0K5wG91uxRnE2tXjM3&X-Amz-Signature=8f0be1cc8214ffa1fc5414d5d81868f099e16ae1d14195238d45add482cae438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR6QBUKK%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT0Z59oM10HzxKWJM2T%2Bt1P0b6qoxf8ul8kaKT4M62agIgeBezRAMPXCoVecseiyy9ne9QqoeYSKjpCD7jMKq6qyAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDG1MyjgXRBDwsYXvIyrcAx2CSF5e5M%2BOViix2f1eQcftLa7hQZ0Xqk1dPHLBdocdyeDW%2FwpBjVa0LZRKh8cP2Ppojn%2Ft4KuBuYVZ4J3Zby%2FeTERVwDfZI5OYQSuU0C1WngAeT3VYIiBoht%2BJKKeLrmGWUDEiSZdp%2Fzt24QE4%2BdUmUryhrgSl7d0f2Qubjz3Hk1XA6PD41uncnwqDGqZwJvJygmELIa1Tb6rFvYlkpUPWRa5RuFN1oB%2F0GTfGNT2kAk27iBVMbECsUMqjz6vV3EHikezPEeMmdLmiPiG6I7ACDvWdgGkIjPJBBAzlNo9KCqs%2FuxVPhFzKNhw1WM%2FhLHDxBQ5B18P1Qcf8%2BNA2NPEBezbUT%2FmjOfWcEt%2Bx7E2kWcRjpyi8qbxzz4aJslq7iCZFhKbQgikxV8b0lB%2B%2Fv38z7qQhuWzIDCCGqzpaa0AXTB7F05aqeLiiDFvYaz5E6hQacuEr%2B53VQV0A9NHTH7WXfDY6gxq70bVObeNsFPbol2RWrtXsMaDDj8vG1P4eQmahzpiMctqCjTsfLm6uIWqDZVOvKmv9%2B%2B5LC7z%2FxSX1wDOs6tg72KnCjhdcVT40ubihZUHvTeDSNhvhpLc%2FKN%2Bthb1aFeJsVxHidOjkOJevaeDul4n0SwTMmjqoMKiH7M4GOqUBAY7eO7li8DhWcrfojgBzEq5WUWw6%2B9PIMszSAc90DI%2FC%2FlyegrGb04kDDTZl1hDAm9oqWj2e7bnO%2F6ygqQV%2BkLc8gXynsH7HIF5OWGRfgRl1smYFkc0jd6aYB3gtQbNpHd23Y1yB8PmUOQY5xb7U2BVFLNba3BWWLdoXPvjOZvEbKDmGwsql7Vu89AnH%2FhP2mDRpgcJ%2FekTh1rrI0Lec6bscCWYJ&X-Amz-Signature=7c2dbbc81bf5ec9aafc9c0ea038bc008cc80473bbb90a05f6cebafabd4c7f1b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBOULXQI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnZcYNqTqQpVDhZqgvnCdvycWYSkMiPk%2BD6iXzHSg2QAiEAsRfszm8fAFOxjzB91r05UNK4%2Bae5n0jUGJXSel2pBoIq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDJzqqZHkKvu0NR0iBCrcAyPKvFU%2BHGv%2FqB2N%2F%2FaxziJKWhiI%2FETPjh5YlSy77rbPd7%2BusLJO7k6loCqIyAjVLNou6LxxbJU9a17v3VJo0THVF9brH9yhZ7w0vRB6p0VS8kKBIN0W3Tww%2BoSgY0kGHFrQd%2F%2BcmEhzBcbAj1ikOk4MOPH0liI8X%2BAN8Du%2FDTqH1sBJiiTauVVDkw10oslfhpEUq61Tt0zr2030uMPtjecz%2BNpHO7vhEnIWm71HcssFmXbMr8%2BCH9HR5wbrCwEFIjpp0ohF0IeSRSFqdQkEQ74V3sUY2TSq1PA1buVXsygq1zFnRnKebRcqyr5tuL12rSrkcwozi3u4TOihzeSweQ3a%2BkrPufxpnKFewnVu9duaL5jG8TGa6BbTRVDeoKS2R%2F9uV6Fze4yTV1XbcDpl9aEhgHVN2R36eabUYT3GhWeMM%2FL6N7B96fz7dE3ObKqUiTkndq2SeCYDj9I6BCf3xGvOdwpvtap8AoxIF5ab7ig5kekQMkFFFpUcKS%2F%2BZi1I9X9VgxOmOXx50VgF4%2FTJgXfriOTj1AbS%2FeN3eatBKYD%2FwVSd90rQRN%2FaYPm9GNhIyjjdMADTqAfWjuAGKoeromPPKBPHa09mmRFtwJwvc5QTCboldoCoJwxsTuBsMPWI7M4GOqUBS2Bkt3g0QMnLQMGKfp2cX%2B7AenbRWceOwHOx2XmDkEeEwhQNnGWJKRL723pXLjZOvL9%2BqQGjIHIJhltSJkeLv4Ye1rqpcKhgOnlukGQm4xY1q92gooxqDt5uCRDUfvPlgVIGYZnmfxwXOMCBRB0c8SRoMXfCeuWhOrE%2FnT%2ByAAFdmcODJjttoRigGY%2BRONAEEvIty3%2Ba%2ByYjbrQjIh2l5Hp8lvcQ&X-Amz-Signature=bf367715110631077e2206c9bdd48c7c4f405c7cf16a134545c88a48d5355270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTCE6PZT%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYLsfQ2FsoivtILZie0J%2FlBpdQKSXv4lAA%2Bg36csdCnAiA6WK0Cg%2Be2k8qRSk2yBjH6O%2BQRzxPV4JXbrePwFF9ueSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMwBT%2BmqwvpGtykiQBKtwDZuWvbqT4SOcmVPLvnilVf4kjHKCKWypylx%2FotqgKdBykhRb79BBUQii5IAOt6S9O8lUz9WgeezUazztEjUdbsFsLCTG1wdpkWAPUhYlFMlQvA8sb1Ld81Z8fbxbi8tYgjP2kYb7dLsiHKqE%2B18%2Fb5Wm%2FUlEWL06wZS55wAESGOP81EnxHfcgSfrKFy02E%2BBu9GyRdCDf4nAqvlGCZfUrQHdn4kCnTtJYLaY5m9GtDOuXt4WRbL%2Bzaygnlt6rskwl%2Fyo%2BdzqpoAjzHrX6l8fUH%2BuPrXoH%2BOg5vcMKqvK7OypE5Li6DOosT1cMLyHDF3xae%2BQQuxhJhLMsa%2FOhVFSP0eKnsP%2BL%2F1oEszBK6qrW1Z7uAULTipL5Ay2w6pZ3xBL6GoBwN%2Fc4iejpsQQ75dAVRHrbHV0z7TKC8zQDdOpxoQ5WKMW1iyO1SgwCmZ0MNHCoCAror%2Brk08AAKCe6P2JtmB2iIXpbtoHUhj%2BXSEHyH7nuI4PloObRptVQCX5FOMWlKv7ocPSTpsAS7vwboo6x7jPmLR0QtYE4c2DNk%2F134lBp0LzQjXEn2mPqSw1fVX%2BRi3hgXvSrS%2B5r8bAKpdk3lsBtGoNd%2Bh3Y8%2FuH%2BiIMW2nwqJq38Rb6nraXP8EwnIfszgY6pgEHw6olBaVhPlZMzKKXAiJ5SL0X1%2BxdMl59NvnKDC3QvL9UT33Leo%2BfGg%2FcMBmNa2pMyv%2BTcN%2BEwvMQes8OPf8Rqjq5u%2BZPwRAuWS8mz3Yfxe4Iy8FvA1WP1y9JY%2BfsljTo0aYIVU1RxAdamyDQ%2BKv7I8FX4nQ1LUGlyXXHVCBlFYA9cfSiXuDBFQZztCihLKrdSZYtGP9%2BWFCaPmR%2B4ZuQr1OIMq%2Bl&X-Amz-Signature=fd20f97ec43710cf8af4ef0fb8dbfe8a1e361e937bed6b70ee50f3c3e9bf3765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZWZUCZ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyp6Nn0xFz4F%2FCSySKdlv0gwMJBfXg7v29FnLi8IHgHwIgIuSxBoozGyBCdI5hlFAJs3SCuLIhLx6G8K9XC5OYIUUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGYnhcbEU8DmEUAWPircA1hht1boHuMfzp6A9ZKQGmJRmwzGpLN5htPUfOnFVsV9AcRYhXxQWO04Qxyg0ujUKNsIILAE4xUrW%2FmVaAAi%2BvC0Q5jvOHbJkaC2wTC5MkqcHVMZ1KIHhZjrtkYGYyaUME4BsCqkYlYaELirJaOyXXgKPWn4oqaqMBHZ7UJU6XQt6gNcZlBn2o44xAgvI7sJxCBsP73eytUlxY8%2BrAzlEHH9denRGhKY2W2ifD9shM2ESUXSArpqmgXs08ooQiI5V8dGrYzHYrc%2B8X31cOTr%2BU88%2BrQdUhPdd%2FufwVfS00CqyzSST6scEonvG3XruAsh4r4tfPRHMrWngjkKpZ%2Fqh004hLN8EJqYPkbHHSxnOdj0PeH441rwImb6Ihj8XVWCcT8%2B5mKWNSvd8UUJhaS36M%2BPldoeKImIBnk5gt5UzVk0JQtskh4yAs8U0w6lubLB34YmHapuELa9xlYxn0flAigQSV2vJqsuaOlu6dUTMzC%2F9bktYoiGEhnUSIbBfCts8k4X8om7%2FBXbeQbbdpje7CBdskquNZTjqHFR5E3yrgW7hY6WQW%2BklPTwUj0C5qEi5ZOY6Bhsb%2FN7oqWk4hLftbxkTLNt4CnzR07XZqz9m0uC3wpS6P8r931c0HjCMOiH7M4GOqUBQ%2FBZrfTOk61hz0ruunp%2FqxHGDCe1yV%2FuTphJMyF%2BKzmSPNLZvJGb9RcUEy4yuBQQlkR0ePBdR4QqEktPKWYxuqt8dSdle3pqQMEl9ALq4Xpt%2FMsa%2BNUYRvlvANGzDub8zVnE90C2vKgFlBHS6V1GMtCnacO3WkBz8MoULXFj7wtZxmzjSuF6V%2BkCFTNG%2F2SVp99bfUFTAD0K5wG91uxRnE2tXjM3&X-Amz-Signature=24c4db99321f72e69ac5756797a641dbc19d55c0ea9d495af5cff42fbe48f4ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL2RUVTH%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl3uyMajFiEe42q0GQjukpQe9R0xuFFqb%2Bsa%2F8QACM4AIhAPnJRq0K4V2z3WNVE6R97MFW6JKEL0Ib%2FCpb6OjgsOATKv8DCFQQABoMNjM3NDIzMTgzODA1Igy4ZM0HnOxSnZUmxUwq3APLYPalH40%2FwkxELJUESXZ%2FfPvjBkqiKckBIeqo2tDgeL5Zltph%2BWhCirEjjTRgE0tzrwfvoCPku4yCFprc83UPltbLT9kCz5ZY%2F0iWpCJ2mAN%2F%2FVkmtRpjcpb7nPuoFdGZu3AeljECC%2BQN5dBoepMXx460Mrb5pVnx07qyR9YMbmf3EBsgfGgkCK6Y9PaIxfLiTKCg2JzZdzBs53lHeBRlhOzF%2BWu7GsGelIN7KnY7xTQMHXxbgCy1aqIWGSu5L4axnFYFl5hHCk4tskrN2HwzZ5gin%2F9JcDdKMyzug%2F8DgwE4RituCUDWuGgfhHQgX4v743juLeZOV8ty9vfNFOV808c4pa9lSR1W4GkJ5CNZHYfPNpz29GdkMFq2Q0GUWnVc6TW1ywKf6R24MBRJvIyil883LQmCcApcvQ27zWKLDCJcNeOUTGPyq0VgfUJqeGepPg34o2gAkgmPWcOxjmSZl3FTFzK%2F%2FmQ44OOGDFlG6OseAgKUly4%2Fp4wen2a%2BaUCNVz4TTjLktSOV6LhkqqrDCgbCZfpeKXbu335sk7BK57joCj0BZzvrTwVnMfETk1B7WWSMwqlBhxByQ5fjtn8ARu9%2FAolcOr1igDBfy245IaivGnX%2B65kH5Q5FgzDwhuzOBjqkAXdw8Ugc1ijTyU7mV7gODv2qAoz2nsaYIprANUoQB7LByrsMpvEjxfY7h2QhYN1MnXSAneMN9OLpHFaV8Nuqojh9SSFJZlqvr9RN04ceGXH1SeH3Rlo9glLjBqTil%2Bqy1NvOB5IVx0chyq55m0n4VitxGuC9m6uK2Ts0ELQbg0g9tza9Udly%2F4etJ4RZkSJKIILYtUPGfLlW%2B50%2FvFjAO8FMZnZs&X-Amz-Signature=ab30fc46b88c1f3a371d778d49a2dfaa518584f31e99f772d62ff652ea0afc44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZWZUCZ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyp6Nn0xFz4F%2FCSySKdlv0gwMJBfXg7v29FnLi8IHgHwIgIuSxBoozGyBCdI5hlFAJs3SCuLIhLx6G8K9XC5OYIUUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGYnhcbEU8DmEUAWPircA1hht1boHuMfzp6A9ZKQGmJRmwzGpLN5htPUfOnFVsV9AcRYhXxQWO04Qxyg0ujUKNsIILAE4xUrW%2FmVaAAi%2BvC0Q5jvOHbJkaC2wTC5MkqcHVMZ1KIHhZjrtkYGYyaUME4BsCqkYlYaELirJaOyXXgKPWn4oqaqMBHZ7UJU6XQt6gNcZlBn2o44xAgvI7sJxCBsP73eytUlxY8%2BrAzlEHH9denRGhKY2W2ifD9shM2ESUXSArpqmgXs08ooQiI5V8dGrYzHYrc%2B8X31cOTr%2BU88%2BrQdUhPdd%2FufwVfS00CqyzSST6scEonvG3XruAsh4r4tfPRHMrWngjkKpZ%2Fqh004hLN8EJqYPkbHHSxnOdj0PeH441rwImb6Ihj8XVWCcT8%2B5mKWNSvd8UUJhaS36M%2BPldoeKImIBnk5gt5UzVk0JQtskh4yAs8U0w6lubLB34YmHapuELa9xlYxn0flAigQSV2vJqsuaOlu6dUTMzC%2F9bktYoiGEhnUSIbBfCts8k4X8om7%2FBXbeQbbdpje7CBdskquNZTjqHFR5E3yrgW7hY6WQW%2BklPTwUj0C5qEi5ZOY6Bhsb%2FN7oqWk4hLftbxkTLNt4CnzR07XZqz9m0uC3wpS6P8r931c0HjCMOiH7M4GOqUBQ%2FBZrfTOk61hz0ruunp%2FqxHGDCe1yV%2FuTphJMyF%2BKzmSPNLZvJGb9RcUEy4yuBQQlkR0ePBdR4QqEktPKWYxuqt8dSdle3pqQMEl9ALq4Xpt%2FMsa%2BNUYRvlvANGzDub8zVnE90C2vKgFlBHS6V1GMtCnacO3WkBz8MoULXFj7wtZxmzjSuF6V%2BkCFTNG%2F2SVp99bfUFTAD0K5wG91uxRnE2tXjM3&X-Amz-Signature=b1739d69e3d3ac8ba06f657b93b4405af59e3096d4f0c323fbc871f70e215a96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CDOJPIL%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYQnaF2HUuJt9fpAzUOnzp6Jzn7x4gcTRcE0lRUDHOxAiEAg5cLraZZO1kjvm0fkAsfGtrRob6cdtafmgqyiI0YQ6cq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDDVRsUfEA13QzzZ4WyrcAz%2FJjy0vv12GvVPLvavs89CaAqvnY1lmZGYP7kwFBAvj%2BR39nSnOWwmTVWDzRWGJA%2B2pRmkP8AU7nJqOuXxn%2Fm%2BUoWtX1%2FM3DD%2FXv44%2BrszPNnr3tRoqG3wNSsr9h44NfSki5psAFBl6Rqtw6LQfgvDG%2FDyTbxLcG0GewXe6BcueBXQ6VehatBByqc7T0j75Bdv61z0wTvQdzobwmyJF8a5gEO5S9ycHWeJM1f8dz9xssq3F5NjBatRCErXrgivFpaoEypG7qMhepBPrWI%2FXDnS3%2F1cY%2FZjdJioEXmKM9C7T1vArZAWgSdN5Y3scMeGrKAUfntGC%2F5pV%2BMv6mHDFNFpXOu1M6vPxACWDJQsX4IY6nXeZoraUSrry5nNyRNRGyEPwC1SQgs2jF66EF0y2toyFTC7VBn%2FxACRVVCyciYa7nkuJq6KZcu7TfkTCbnK3an5TT%2BYfJcocpfIQXdjNP7kkbbUPaNW2vm9gzwEH0aofxJkWUXe1tJXKToOSG7iElZ4hNjejxNw5uoljeoscYh%2FVutZs%2FlesV9F7jIhV8nUmst2Aqc9n1vo4g8DH4PidO5nJxxMjsJr%2FrcxC4ekqFJESw2xQLveIq38VwrUmKJMdCPSUxBN5P%2FkFRHIMMJiH7M4GOqUB9pB81Wi9vRvDARR%2Bub%2Bvcz76fYUUhzmXe5SwV2sWlHAv2RQQRTHaL5noBGs1%2FQu25%2BTMbl%2B8GJpcG62%2BRuuK2d3DdmwmP4vKycyNiRefMELQ2BMwC5HCTj9X%2F7T9eOeFzNawU%2FmwEAbMWeMnSndvDC6HYXFfTjumCQTlWaSqoI9g7mvSTCkvD2DozxBOlLxne8QK%2BroFNJPGvUiReSFM0YmA%2BHvH&X-Amz-Signature=847ec814bf245bd45cf7eb980f53288afaaf19408d9e4907593aad5c2f057127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZWZUCZ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyp6Nn0xFz4F%2FCSySKdlv0gwMJBfXg7v29FnLi8IHgHwIgIuSxBoozGyBCdI5hlFAJs3SCuLIhLx6G8K9XC5OYIUUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGYnhcbEU8DmEUAWPircA1hht1boHuMfzp6A9ZKQGmJRmwzGpLN5htPUfOnFVsV9AcRYhXxQWO04Qxyg0ujUKNsIILAE4xUrW%2FmVaAAi%2BvC0Q5jvOHbJkaC2wTC5MkqcHVMZ1KIHhZjrtkYGYyaUME4BsCqkYlYaELirJaOyXXgKPWn4oqaqMBHZ7UJU6XQt6gNcZlBn2o44xAgvI7sJxCBsP73eytUlxY8%2BrAzlEHH9denRGhKY2W2ifD9shM2ESUXSArpqmgXs08ooQiI5V8dGrYzHYrc%2B8X31cOTr%2BU88%2BrQdUhPdd%2FufwVfS00CqyzSST6scEonvG3XruAsh4r4tfPRHMrWngjkKpZ%2Fqh004hLN8EJqYPkbHHSxnOdj0PeH441rwImb6Ihj8XVWCcT8%2B5mKWNSvd8UUJhaS36M%2BPldoeKImIBnk5gt5UzVk0JQtskh4yAs8U0w6lubLB34YmHapuELa9xlYxn0flAigQSV2vJqsuaOlu6dUTMzC%2F9bktYoiGEhnUSIbBfCts8k4X8om7%2FBXbeQbbdpje7CBdskquNZTjqHFR5E3yrgW7hY6WQW%2BklPTwUj0C5qEi5ZOY6Bhsb%2FN7oqWk4hLftbxkTLNt4CnzR07XZqz9m0uC3wpS6P8r931c0HjCMOiH7M4GOqUBQ%2FBZrfTOk61hz0ruunp%2FqxHGDCe1yV%2FuTphJMyF%2BKzmSPNLZvJGb9RcUEy4yuBQQlkR0ePBdR4QqEktPKWYxuqt8dSdle3pqQMEl9ALq4Xpt%2FMsa%2BNUYRvlvANGzDub8zVnE90C2vKgFlBHS6V1GMtCnacO3WkBz8MoULXFj7wtZxmzjSuF6V%2BkCFTNG%2F2SVp99bfUFTAD0K5wG91uxRnE2tXjM3&X-Amz-Signature=c711a74c151b6f08c233fb71883d69f5f3d2df46e05fe295f3a67749cbc8154e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG3VQFIO%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO2iiy07NYwm7Q3U%2FTWDsywdID3eloXyLeZPbwdlWCwwIgViRb3cNqz%2FnoJp1rYekbjhaKMZFIkScuSg7qE6PIAKYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKFGva4CUJnG6W7b6SrcA6liKTadEeFczghSHt3j9WKPKsI4OMy94RlRbYsL4K6af97mRzd36Mg8v4Tj0MDkkLplgBSO%2BTO5L94Q%2Fr3GPKGNMEsBpGC6EPsrGPyr4TrGiNsoV6WUGuUfVQuJH26CLf58p4%2FzLFHQa0iZY5WfKGUFFqn2qBkqiq6docCRnBOushJnqpJ3tpPsltkZ5x7HZMTGXFak%2B2%2F3j%2B89WzGvOa5ylCD7nAEh5HnLQmwgew%2BU4UAJ6RW3dCyAw8TpshNEXzk3wkNzQbhpp61M%2FvRQJspMcT1%2BAePJK94JUfwjD5cLQ0UCkeLlVmb7vTA0Jq5lJ9Y73VofeL2PSR24Ii9roaUhNP%2FWbxj6DPT8SJuzNhygLHBUCBxlg1QOy12zLFCyHFuFqqkv4Nyzkau3jqCHgDQ40dxh008dNlUAMqGICuDQiK%2BC4y3QfkrT56heaK6v6ygG%2BxMp6q09paAYINBFnyIAV1e%2Bg0w61a6wmQqOPJSlyoO1BQ%2Fit6QxM6tJW2SOvGfMOkK3pwwzhT9B0%2BuOnIG5eTqPrkMF3VHKoc5T1p3l%2Bz9GsQzi0h1dNbeVzGmA%2BPnxS8I9HhZkFiCbgyFlUebnnJBfQBEtthQzvnLJ2vBVmZlxTpu7pjE5ZePAMKeH7M4GOqUBKuvdyv%2BIrj%2BPRu%2FJA6bpy3N7giJTs32BkTP81EfEJxbF4R4C06QdtKX%2B9HuT7Pt8%2BYRr6yyOU6EoaKiPNX8jt6ObkdHl4kO7ZZzFzusfktaIfUOIjzG975LUE8faga0y3S3CHIFftnUNeLU6pXHyhSXC9UlO7wl0%2FCwS8JiGll7E5ufEqRv3RLUrnL8Y6NE5r%2FHBsRWk20TKx6bXysj11MNXYHfo&X-Amz-Signature=8734e96983ee2332e4e76917d5cd2cce181a02969e1e4e04266f1630dcefd4bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZWZUCZ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyp6Nn0xFz4F%2FCSySKdlv0gwMJBfXg7v29FnLi8IHgHwIgIuSxBoozGyBCdI5hlFAJs3SCuLIhLx6G8K9XC5OYIUUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGYnhcbEU8DmEUAWPircA1hht1boHuMfzp6A9ZKQGmJRmwzGpLN5htPUfOnFVsV9AcRYhXxQWO04Qxyg0ujUKNsIILAE4xUrW%2FmVaAAi%2BvC0Q5jvOHbJkaC2wTC5MkqcHVMZ1KIHhZjrtkYGYyaUME4BsCqkYlYaELirJaOyXXgKPWn4oqaqMBHZ7UJU6XQt6gNcZlBn2o44xAgvI7sJxCBsP73eytUlxY8%2BrAzlEHH9denRGhKY2W2ifD9shM2ESUXSArpqmgXs08ooQiI5V8dGrYzHYrc%2B8X31cOTr%2BU88%2BrQdUhPdd%2FufwVfS00CqyzSST6scEonvG3XruAsh4r4tfPRHMrWngjkKpZ%2Fqh004hLN8EJqYPkbHHSxnOdj0PeH441rwImb6Ihj8XVWCcT8%2B5mKWNSvd8UUJhaS36M%2BPldoeKImIBnk5gt5UzVk0JQtskh4yAs8U0w6lubLB34YmHapuELa9xlYxn0flAigQSV2vJqsuaOlu6dUTMzC%2F9bktYoiGEhnUSIbBfCts8k4X8om7%2FBXbeQbbdpje7CBdskquNZTjqHFR5E3yrgW7hY6WQW%2BklPTwUj0C5qEi5ZOY6Bhsb%2FN7oqWk4hLftbxkTLNt4CnzR07XZqz9m0uC3wpS6P8r931c0HjCMOiH7M4GOqUBQ%2FBZrfTOk61hz0ruunp%2FqxHGDCe1yV%2FuTphJMyF%2BKzmSPNLZvJGb9RcUEy4yuBQQlkR0ePBdR4QqEktPKWYxuqt8dSdle3pqQMEl9ALq4Xpt%2FMsa%2BNUYRvlvANGzDub8zVnE90C2vKgFlBHS6V1GMtCnacO3WkBz8MoULXFj7wtZxmzjSuF6V%2BkCFTNG%2F2SVp99bfUFTAD0K5wG91uxRnE2tXjM3&X-Amz-Signature=28b99410cac30e58e2d251622798efcfcc946119ae8e3d7ca454b58bf78ca29b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4B7TTVC%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElyL8UFq2mhH5fM%2FMGwDoPE3pFKtVIIVMBALqiGWmK%2BAiBTzA2hj2ZBFVPza6%2BUwHuTdJ2YX0z%2FfkMGPQXHXfmbeir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMyzajWxvZkQRdvsuRKtwDQ6LoKSMxhgGiIPeSWFuh4zEqS0yn0RXWegFpKvgTQg1StT6CD2zLKNtm9jCATCy1CUab%2FURsKUUiLF1iNW70VL6BNVC0cg91me9n1QmpK4todSkvGk4nvkzuXtcV4hFlDX4KX1F0gYY4A%2FT5M86lg5rZnFGqqovvP%2BNPjpa2tuTZyQMnvc4nYDyeG36%2FZsUxhOCW4ShLGpAUzL7sFiXFoGEC5e%2B1ldxskjdiKEQpQBxacrhg8VisGSUEGI1izE61NB%2FJIxDtLegyK%2F4hiXMNoz5FNPE2LTL8La%2FJGY4qzasRmzpKxWwp56lRDep2VFJJqFcm2sTdspRheZSWyNRlmG3cYX35oapmm2laDUqmp2QJa3SiP%2FmvJTMQ%2FOZqGTRV8kbWNV%2B%2BljOB%2BA5F2BmCbvAPZO75SUdOfYHKT933Th%2BlBftZfa8glE%2FrqPzQRNszIfag8MAVx7gb3V7qy8mWwj36XqmLEm8JFfv9eVyKidFaEVKURI2CaiN67CYeYhiaWPvugd4UueRO8c1VPtQ7Ai6ODuXf9gcCpEp6%2B0iZ2b0%2BFyFVSqRhyIIcTyOD0DovSp79TPp%2BuHpUGdNn3CxFIu0DAY3yi2kjTHbn8rF%2B0gqGJIZzydtKPbos%2Byow74bszgY6pgH%2FpXrFhgqK2U7OfOeXvys4bHSK1yxYxTo8gqlEM1gKirZH4ykyRT0KthFbbT48cvnTr0CTdEFbSm2hnnIpZRvdDTphvL34mseyAG9mrskmZ9f2F7s11iKW8OfIf%2B12muMl6nTwxlRhE3zfK63UAT9uzfFocgVdVn%2F7qNVoesktH48QtsNuQuR3Vo%2FVf3h2e0NlBlQIyjlNqSzpxkhq5fieL%2BqkYHZj&X-Amz-Signature=fbe00d01a1fb95b55d2c8dd0cb71fa51556e38b643845fce77c70cf6379d14b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZWZUCZ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyp6Nn0xFz4F%2FCSySKdlv0gwMJBfXg7v29FnLi8IHgHwIgIuSxBoozGyBCdI5hlFAJs3SCuLIhLx6G8K9XC5OYIUUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGYnhcbEU8DmEUAWPircA1hht1boHuMfzp6A9ZKQGmJRmwzGpLN5htPUfOnFVsV9AcRYhXxQWO04Qxyg0ujUKNsIILAE4xUrW%2FmVaAAi%2BvC0Q5jvOHbJkaC2wTC5MkqcHVMZ1KIHhZjrtkYGYyaUME4BsCqkYlYaELirJaOyXXgKPWn4oqaqMBHZ7UJU6XQt6gNcZlBn2o44xAgvI7sJxCBsP73eytUlxY8%2BrAzlEHH9denRGhKY2W2ifD9shM2ESUXSArpqmgXs08ooQiI5V8dGrYzHYrc%2B8X31cOTr%2BU88%2BrQdUhPdd%2FufwVfS00CqyzSST6scEonvG3XruAsh4r4tfPRHMrWngjkKpZ%2Fqh004hLN8EJqYPkbHHSxnOdj0PeH441rwImb6Ihj8XVWCcT8%2B5mKWNSvd8UUJhaS36M%2BPldoeKImIBnk5gt5UzVk0JQtskh4yAs8U0w6lubLB34YmHapuELa9xlYxn0flAigQSV2vJqsuaOlu6dUTMzC%2F9bktYoiGEhnUSIbBfCts8k4X8om7%2FBXbeQbbdpje7CBdskquNZTjqHFR5E3yrgW7hY6WQW%2BklPTwUj0C5qEi5ZOY6Bhsb%2FN7oqWk4hLftbxkTLNt4CnzR07XZqz9m0uC3wpS6P8r931c0HjCMOiH7M4GOqUBQ%2FBZrfTOk61hz0ruunp%2FqxHGDCe1yV%2FuTphJMyF%2BKzmSPNLZvJGb9RcUEy4yuBQQlkR0ePBdR4QqEktPKWYxuqt8dSdle3pqQMEl9ALq4Xpt%2FMsa%2BNUYRvlvANGzDub8zVnE90C2vKgFlBHS6V1GMtCnacO3WkBz8MoULXFj7wtZxmzjSuF6V%2BkCFTNG%2F2SVp99bfUFTAD0K5wG91uxRnE2tXjM3&X-Amz-Signature=6667da97a3d0bc1926d31bd20b10ee804942bfb8c2d421a4e1bce0eda2a70a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHGIQZH%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnSROFk3u7NdysiRwnMYMkZcDieDwF3smpH9wNU2uUEAiEAiKmEoy3C13RhuD65yFtuHZ0M6N3AEtcHn7TxLuwzm0Yq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDLDh8G2L1Q78hkehUircAxw%2BX7%2FG%2Bp%2BcfBQsFz2teRcmvdpvx%2FpKC6LdT5o08RokwL%2Bo%2BsgOnMXJ5RAZ5IH3LEAKuLV9pQea0UPbMvihwgcGJFWr5z0tnBijHv5a8KiwGH7CgudubO6%2FGtLAXe%2Bww4E6JdY1VpGTrzNvNevoODuB78%2BGo4AZO0RgTmcN%2Bgk7KBf%2FsePkKukEgBJCIStDcKRE%2Fam6Sz6u8ZUh1zQsCB4mqZgAS5TkZtrjlIKr3wryvX8lejX54hqT9MBkNP8Zh4RayWMPGDzFkkwpwsJhV25xpG0OZqRmq8xkj0dJ7YfxWs9z21q46sADc%2FP%2FSpll%2Fa43J6m4U%2Brba4JgL9tbbkxJTzONCl%2BgKRdVCKQ1HLtORlT8HXCGMU4c1EZCRd7l7TnFIpDpz9MLpdoSqAp6rU1eJyLrdjCtmSuotXBCYNIPlUoSKPxzf%2FIhohqlVooHCA8YWnS7jPspA6ztTDxdQx3hXruEeQkDDAN0XaQ5Do9TIcc1I2ByRMXF%2FTP8mlE6uOAL3CO4XcJ0%2FYmVCwH9%2FuGV%2FD%2FyNhVGhovWt0yN1sLALAza75CT%2BSYC%2BUnRznKDTQ9%2FxoFGMpTTR0oiKvuxpSD2W0Q6dZsOhbtlaTAWQFgJ0kEJNuu4hYub6OYZMJaI7M4GOqUBOa3HAuIw33c%2Bcndb7ziZumUEv5SSDZM3PBYfrGvl0v7atEUhytUtOHU8r9qe5lceJzuIRgfN%2B21nw8JTTk5uqXoOQhTbmYjKXyo7YMFnYV9zXPMnrcxqA8V8BWdjI0hVoVhI4ha9Yh1Yfobm7EKTwK4Nm%2BsDgxeecozKU0sWxfaoqCg2Bdr7mSDk8lDYkmDqODIrJvmJD5Rc%2BBMEsAoMLpPVdbwc&X-Amz-Signature=04066369b350ec4589b859b7571833136feca6d85b03c57a31031ae98cf4b9fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEUJYFGA%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJmQGwQGO8gMMxbWq%2FU4UjyncNLJu9iPEhxJbUTn2UMgIhAOkq9C1yRqr7QxxnszxKzr%2B%2FRMJKcteNkAxnNhW9w2OKKv8DCFQQABoMNjM3NDIzMTgzODA1IgywyC0MKmkNZr3vnz0q3AOndUK5Bb9LCH1zjHnMeZeROpmhmz9KD9V3fiCQK9xzchOQFyfgwHuhuio56rMPjKJSlpWEBVIQcyNJKpAz43invQOZ3sllckq%2FqTP1VhJZSjnpGSAH0q%2B4XGR0fDDmUnjtbkJnJGyJigUc6eEbE82hJl6hA1OBVU505o52i2DmGlx5oddTSCfBoV4cCGa9n7nBnUdbFXkFJzCdcfmdYmqNFaiyPLEvDGhdCARnjo%2BMia2gTi2tY0Q84Lw5hUkxz%2FVw5CWHbBZEJ4jj7lUJQipKDrfwQ2bwZcqM1kFRPW9zoTYggRsHAjA%2FMfGL0p%2BDjwPn9F%2F%2F1yQvjk2oQYwAcjH2ALQS%2BUp%2FidsgO7N6DLjEzeEQs9Pf78J8VZwISYHsMZZt68UXRZDDUnCLrL9ILNYzfX1IfXhOFkec7zXVPuYvJ2tpyIkTmGC%2BehCAYHwMdT9r32rdw1erdIHvzqJXynu35wHKino5OK%2BnWBI3EPcxvGDJJpsVEBje%2BzUICXvwTaq9vTiHxZqRoXObyqpaaDMb4AP1JaX87rlrzcoj610PVdXJx57mgMYOwravxqlCLgMH%2B%2FT3UK%2BkBodnb5XlPpp5LIr%2Bu3KfzW9h9ABCpE%2BGoWBRWzbanFJwYSirejCCh%2BzOBjqkAeUlkLeuaX33m6PnTxS9Y1PHFUbYkmiswG1%2FW33ztmcWvqKQof7cFv5equsUlHlqKNTh0%2BS%2Fuc4KIjwF8mHM2tDWVtCn34dRCwtsRC5GCR14YdAFrdjs2hWs9M3W0TJE%2BMCbg8V%2B2UqTN3HEoStl8d7DfNeB0qpk%2FUbmMce3XU7131IoKVFXYVtHg2pNjInMGIQ4EckuVmNYg%2BaMkd%2BRQzOFOY%2B3&X-Amz-Signature=54cab2bb6c02ea18a3c1b05faaaf7f6edb907b5dd106809341ed783f21ae9b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DFO2IQH%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7abTJaRSkBPx3Xwt%2FBatmHhdiVGQNFbkUWEU6vah5yAiBJHl%2FRuliaYFMAEpW%2BM2c8KAqQ2%2BcPFD5bIJdrDyOpbSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIM3wojlBAfebkcHRC3KtwDe0BhprFKW1%2BaxCJHEVLMPHs2fPEbcGqvNAAbqZtDEaJwfP7iPvxlEGFCVW470oWOkBSnEynZFBhEDRTbHmEcPQr3vhQH6HW4Un%2BYg8MmKkgiOdwd8WMi9cdNYjneEsBVMMPsUeDM7SciTRFIaZlG4lL4FLJ4dbFejwJvbmHs9uiHP4Tlazz39iu1SySMvk7cdR6GoqJHtSYQ7xIjCzE3HH9en9JldFdQpmV78GJOV21CzwEBo3seC17yHABMsQvds6ARLE8CQFxY5HncpNN5%2F86Q8UrGihHMWRRzjPiK%2FQ703Lj0Ttq7d6vxm9FqoG9FrubesWmsb%2BAJmt22WoYvgeROuC1%2BCcUZu9MxVCAnOWtOU3xUdj6n08SvN4ZrOT0MjNPgcGgTN7IRg2e65xJkMZKIZhA5CcWV3ogf%2F3WVKEmYaO6Trj2in68pnti7P2VqXPGtS17JbGQIMggUnw95AkJgScY2lzqh2WGw7AohAa0VC%2B8yKkVSaLZDn9IxC90pJKAcTk%2B63TkXGVzdxHpX2PCfz61BKYrAP%2FAQDHNyLLu7jlDvDXTS0F7oXNggFEgcjckaaAn9sbmR1rocEzIRqZymt52LuiTSMtCYWU6FXqpMQsb%2F5bAUkDnK1BUwoInszgY6pgEc%2B2KUh7GIGGiqOFJTXLfN7hC26AREwhbIGSc6Ug4YagH%2BowqpCABAlIDf%2ByITAU4dz9yPSM6Ql2pd87H1XfTFu0uoiGm%2FTRAb%2BxvEnXyzax%2B4ehIIuIdWx14fI40cgy14KF9d0j2W%2B0o9upRUHBcMfyZ8U16XQvYqKmkvlPaBsh9EBW%2F9jT2U5uPfpgFZlFJKBFHXEcxe8KPM%2B3yyMpFymiuTKJJ2&X-Amz-Signature=72144978e0f151b1da8b97588418895148c0e5bef51078fc6f5c80eb27c460b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZWZUCZ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyp6Nn0xFz4F%2FCSySKdlv0gwMJBfXg7v29FnLi8IHgHwIgIuSxBoozGyBCdI5hlFAJs3SCuLIhLx6G8K9XC5OYIUUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGYnhcbEU8DmEUAWPircA1hht1boHuMfzp6A9ZKQGmJRmwzGpLN5htPUfOnFVsV9AcRYhXxQWO04Qxyg0ujUKNsIILAE4xUrW%2FmVaAAi%2BvC0Q5jvOHbJkaC2wTC5MkqcHVMZ1KIHhZjrtkYGYyaUME4BsCqkYlYaELirJaOyXXgKPWn4oqaqMBHZ7UJU6XQt6gNcZlBn2o44xAgvI7sJxCBsP73eytUlxY8%2BrAzlEHH9denRGhKY2W2ifD9shM2ESUXSArpqmgXs08ooQiI5V8dGrYzHYrc%2B8X31cOTr%2BU88%2BrQdUhPdd%2FufwVfS00CqyzSST6scEonvG3XruAsh4r4tfPRHMrWngjkKpZ%2Fqh004hLN8EJqYPkbHHSxnOdj0PeH441rwImb6Ihj8XVWCcT8%2B5mKWNSvd8UUJhaS36M%2BPldoeKImIBnk5gt5UzVk0JQtskh4yAs8U0w6lubLB34YmHapuELa9xlYxn0flAigQSV2vJqsuaOlu6dUTMzC%2F9bktYoiGEhnUSIbBfCts8k4X8om7%2FBXbeQbbdpje7CBdskquNZTjqHFR5E3yrgW7hY6WQW%2BklPTwUj0C5qEi5ZOY6Bhsb%2FN7oqWk4hLftbxkTLNt4CnzR07XZqz9m0uC3wpS6P8r931c0HjCMOiH7M4GOqUBQ%2FBZrfTOk61hz0ruunp%2FqxHGDCe1yV%2FuTphJMyF%2BKzmSPNLZvJGb9RcUEy4yuBQQlkR0ePBdR4QqEktPKWYxuqt8dSdle3pqQMEl9ALq4Xpt%2FMsa%2BNUYRvlvANGzDub8zVnE90C2vKgFlBHS6V1GMtCnacO3WkBz8MoULXFj7wtZxmzjSuF6V%2BkCFTNG%2F2SVp99bfUFTAD0K5wG91uxRnE2tXjM3&X-Amz-Signature=cde2b51f786a3f87a24fe749df29e8acf49a9f9f73eec8ebc9f06b8b88cdb29a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZWZUCZ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyp6Nn0xFz4F%2FCSySKdlv0gwMJBfXg7v29FnLi8IHgHwIgIuSxBoozGyBCdI5hlFAJs3SCuLIhLx6G8K9XC5OYIUUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGYnhcbEU8DmEUAWPircA1hht1boHuMfzp6A9ZKQGmJRmwzGpLN5htPUfOnFVsV9AcRYhXxQWO04Qxyg0ujUKNsIILAE4xUrW%2FmVaAAi%2BvC0Q5jvOHbJkaC2wTC5MkqcHVMZ1KIHhZjrtkYGYyaUME4BsCqkYlYaELirJaOyXXgKPWn4oqaqMBHZ7UJU6XQt6gNcZlBn2o44xAgvI7sJxCBsP73eytUlxY8%2BrAzlEHH9denRGhKY2W2ifD9shM2ESUXSArpqmgXs08ooQiI5V8dGrYzHYrc%2B8X31cOTr%2BU88%2BrQdUhPdd%2FufwVfS00CqyzSST6scEonvG3XruAsh4r4tfPRHMrWngjkKpZ%2Fqh004hLN8EJqYPkbHHSxnOdj0PeH441rwImb6Ihj8XVWCcT8%2B5mKWNSvd8UUJhaS36M%2BPldoeKImIBnk5gt5UzVk0JQtskh4yAs8U0w6lubLB34YmHapuELa9xlYxn0flAigQSV2vJqsuaOlu6dUTMzC%2F9bktYoiGEhnUSIbBfCts8k4X8om7%2FBXbeQbbdpje7CBdskquNZTjqHFR5E3yrgW7hY6WQW%2BklPTwUj0C5qEi5ZOY6Bhsb%2FN7oqWk4hLftbxkTLNt4CnzR07XZqz9m0uC3wpS6P8r931c0HjCMOiH7M4GOqUBQ%2FBZrfTOk61hz0ruunp%2FqxHGDCe1yV%2FuTphJMyF%2BKzmSPNLZvJGb9RcUEy4yuBQQlkR0ePBdR4QqEktPKWYxuqt8dSdle3pqQMEl9ALq4Xpt%2FMsa%2BNUYRvlvANGzDub8zVnE90C2vKgFlBHS6V1GMtCnacO3WkBz8MoULXFj7wtZxmzjSuF6V%2BkCFTNG%2F2SVp99bfUFTAD0K5wG91uxRnE2tXjM3&X-Amz-Signature=1937fd8a5c5ca24f20642949f2ba3c5abe8e8a5e44cd5c7cbf665571a9becb26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ZV6XJU%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADjdSYXwgEyKmEUvOwjFPhPnTYInWum7IErZOlh5WV3AiEA9aN1tIFc1Po0Lf89GL8xdn0wyQ0Ga1M2qTEWPf1sZZMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEnhkcsjR4FUMXbLTSrcAxdV95iNffsBUv1kvUO8aGylrNgRCDFhRtMPVKqca2ghxMwPC9D%2BF2b6K9zDnjPsEwFYIs8fuEk9LvNCk16LRmAJs5fGIqx2%2BfciNFqVHkTRXa7REb76Ugch3Ir02c1Hcl2BxVNoPWJnO9GozvcoJ%2Fd3fOUt8JalqG42HmIPBw8mOSVg%2Bz%2BQgmW3Px04H1RHWsJa7IGqyDm57NwO81VEt8oFCDilMGoThrvTuThLjCMp7kwStQd5FoCgh%2BspG62K7YCtwjoG%2FdMlsiZUQSlfIKityhiF2Vr4D0Y07AyzMHJpNWCw8PzR0bLfL6HdanC%2Fgxat9kMAWlifCh7jjF86S5UsPU27klWYb8DlFdmfMyfAwX8tS6Z%2FrDRUqRaXyQ8WhYxOx%2BuBbkJd67vv%2Fzdbt%2FlOCOvwtqf6BC2Bd6P2CkkCzzEHTGGqiwMLuaC7bM3IuV3A%2FqunpxeiFPz%2FE9ojf%2FkWZalrs1XgwTzN9yqLZvnL1xGfXL24wx5I6C6H5TBq7VnN3cORtALx2QmvtbZUP8y3hSNyaDEb8cYe0qjykU3Js5IdR0LTrAf%2BWEx0WtPap8X5GxSKlQKLizmR%2F%2FddJVYqrqCD88ORcnZpJ4FL5R8rwhXr4OOuDLbX9%2FguMIyH7M4GOqUBJmLhJB2hDQ9N3whM9dz1GePkemCHyDxXbApOGDH%2B3Yd0VloIgjpdBN62M7Z41zcPXaISfxs%2Fh7PYtCPiJwVl5utpnfBlYM%2BHrN4U4xQWcDrTXkr8kL%2B0w7FyoQ4U%2F96oPuJx8q92RTnlfhSpVwXHV3JJBhxAhfi15u5VYUCb%2FrKmESLxxa8ZD84nen5i3frgiYnSsNlyM53H7MX8NbPxipZJn82z&X-Amz-Signature=a1dfc5cdee21114d57f72d367d7700d2eb4fdbde99ae4569716c9a09c459f965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ZV6XJU%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADjdSYXwgEyKmEUvOwjFPhPnTYInWum7IErZOlh5WV3AiEA9aN1tIFc1Po0Lf89GL8xdn0wyQ0Ga1M2qTEWPf1sZZMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEnhkcsjR4FUMXbLTSrcAxdV95iNffsBUv1kvUO8aGylrNgRCDFhRtMPVKqca2ghxMwPC9D%2BF2b6K9zDnjPsEwFYIs8fuEk9LvNCk16LRmAJs5fGIqx2%2BfciNFqVHkTRXa7REb76Ugch3Ir02c1Hcl2BxVNoPWJnO9GozvcoJ%2Fd3fOUt8JalqG42HmIPBw8mOSVg%2Bz%2BQgmW3Px04H1RHWsJa7IGqyDm57NwO81VEt8oFCDilMGoThrvTuThLjCMp7kwStQd5FoCgh%2BspG62K7YCtwjoG%2FdMlsiZUQSlfIKityhiF2Vr4D0Y07AyzMHJpNWCw8PzR0bLfL6HdanC%2Fgxat9kMAWlifCh7jjF86S5UsPU27klWYb8DlFdmfMyfAwX8tS6Z%2FrDRUqRaXyQ8WhYxOx%2BuBbkJd67vv%2Fzdbt%2FlOCOvwtqf6BC2Bd6P2CkkCzzEHTGGqiwMLuaC7bM3IuV3A%2FqunpxeiFPz%2FE9ojf%2FkWZalrs1XgwTzN9yqLZvnL1xGfXL24wx5I6C6H5TBq7VnN3cORtALx2QmvtbZUP8y3hSNyaDEb8cYe0qjykU3Js5IdR0LTrAf%2BWEx0WtPap8X5GxSKlQKLizmR%2F%2FddJVYqrqCD88ORcnZpJ4FL5R8rwhXr4OOuDLbX9%2FguMIyH7M4GOqUBJmLhJB2hDQ9N3whM9dz1GePkemCHyDxXbApOGDH%2B3Yd0VloIgjpdBN62M7Z41zcPXaISfxs%2Fh7PYtCPiJwVl5utpnfBlYM%2BHrN4U4xQWcDrTXkr8kL%2B0w7FyoQ4U%2F96oPuJx8q92RTnlfhSpVwXHV3JJBhxAhfi15u5VYUCb%2FrKmESLxxa8ZD84nen5i3frgiYnSsNlyM53H7MX8NbPxipZJn82z&X-Amz-Signature=20e81b2af94afe0a99d984c0d216599fe76f18ac2bb95e10643092d16b2773db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ZV6XJU%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADjdSYXwgEyKmEUvOwjFPhPnTYInWum7IErZOlh5WV3AiEA9aN1tIFc1Po0Lf89GL8xdn0wyQ0Ga1M2qTEWPf1sZZMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEnhkcsjR4FUMXbLTSrcAxdV95iNffsBUv1kvUO8aGylrNgRCDFhRtMPVKqca2ghxMwPC9D%2BF2b6K9zDnjPsEwFYIs8fuEk9LvNCk16LRmAJs5fGIqx2%2BfciNFqVHkTRXa7REb76Ugch3Ir02c1Hcl2BxVNoPWJnO9GozvcoJ%2Fd3fOUt8JalqG42HmIPBw8mOSVg%2Bz%2BQgmW3Px04H1RHWsJa7IGqyDm57NwO81VEt8oFCDilMGoThrvTuThLjCMp7kwStQd5FoCgh%2BspG62K7YCtwjoG%2FdMlsiZUQSlfIKityhiF2Vr4D0Y07AyzMHJpNWCw8PzR0bLfL6HdanC%2Fgxat9kMAWlifCh7jjF86S5UsPU27klWYb8DlFdmfMyfAwX8tS6Z%2FrDRUqRaXyQ8WhYxOx%2BuBbkJd67vv%2Fzdbt%2FlOCOvwtqf6BC2Bd6P2CkkCzzEHTGGqiwMLuaC7bM3IuV3A%2FqunpxeiFPz%2FE9ojf%2FkWZalrs1XgwTzN9yqLZvnL1xGfXL24wx5I6C6H5TBq7VnN3cORtALx2QmvtbZUP8y3hSNyaDEb8cYe0qjykU3Js5IdR0LTrAf%2BWEx0WtPap8X5GxSKlQKLizmR%2F%2FddJVYqrqCD88ORcnZpJ4FL5R8rwhXr4OOuDLbX9%2FguMIyH7M4GOqUBJmLhJB2hDQ9N3whM9dz1GePkemCHyDxXbApOGDH%2B3Yd0VloIgjpdBN62M7Z41zcPXaISfxs%2Fh7PYtCPiJwVl5utpnfBlYM%2BHrN4U4xQWcDrTXkr8kL%2B0w7FyoQ4U%2F96oPuJx8q92RTnlfhSpVwXHV3JJBhxAhfi15u5VYUCb%2FrKmESLxxa8ZD84nen5i3frgiYnSsNlyM53H7MX8NbPxipZJn82z&X-Amz-Signature=0016cd9b7cde9d4d6abbf81aae7b98b067ffb12ff40caf66526ff32cc9ba469d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ZV6XJU%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADjdSYXwgEyKmEUvOwjFPhPnTYInWum7IErZOlh5WV3AiEA9aN1tIFc1Po0Lf89GL8xdn0wyQ0Ga1M2qTEWPf1sZZMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEnhkcsjR4FUMXbLTSrcAxdV95iNffsBUv1kvUO8aGylrNgRCDFhRtMPVKqca2ghxMwPC9D%2BF2b6K9zDnjPsEwFYIs8fuEk9LvNCk16LRmAJs5fGIqx2%2BfciNFqVHkTRXa7REb76Ugch3Ir02c1Hcl2BxVNoPWJnO9GozvcoJ%2Fd3fOUt8JalqG42HmIPBw8mOSVg%2Bz%2BQgmW3Px04H1RHWsJa7IGqyDm57NwO81VEt8oFCDilMGoThrvTuThLjCMp7kwStQd5FoCgh%2BspG62K7YCtwjoG%2FdMlsiZUQSlfIKityhiF2Vr4D0Y07AyzMHJpNWCw8PzR0bLfL6HdanC%2Fgxat9kMAWlifCh7jjF86S5UsPU27klWYb8DlFdmfMyfAwX8tS6Z%2FrDRUqRaXyQ8WhYxOx%2BuBbkJd67vv%2Fzdbt%2FlOCOvwtqf6BC2Bd6P2CkkCzzEHTGGqiwMLuaC7bM3IuV3A%2FqunpxeiFPz%2FE9ojf%2FkWZalrs1XgwTzN9yqLZvnL1xGfXL24wx5I6C6H5TBq7VnN3cORtALx2QmvtbZUP8y3hSNyaDEb8cYe0qjykU3Js5IdR0LTrAf%2BWEx0WtPap8X5GxSKlQKLizmR%2F%2FddJVYqrqCD88ORcnZpJ4FL5R8rwhXr4OOuDLbX9%2FguMIyH7M4GOqUBJmLhJB2hDQ9N3whM9dz1GePkemCHyDxXbApOGDH%2B3Yd0VloIgjpdBN62M7Z41zcPXaISfxs%2Fh7PYtCPiJwVl5utpnfBlYM%2BHrN4U4xQWcDrTXkr8kL%2B0w7FyoQ4U%2F96oPuJx8q92RTnlfhSpVwXHV3JJBhxAhfi15u5VYUCb%2FrKmESLxxa8ZD84nen5i3frgiYnSsNlyM53H7MX8NbPxipZJn82z&X-Amz-Signature=e5469c8362f29d3f531eb3e2ab7c9ce5b141e2272e6f69ba3619b9d3acc6a930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674JDB7EB%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSUr6madhl9Aszp13vzFNHBvarZWlEexoD2VI15klMGgIhAIeKZ6DeepJUZJ%2BpOXUbMqz%2BqlRTkLL%2FNjBRrufUk0vmKv8DCFQQABoMNjM3NDIzMTgzODA1IgyqiZE8RLkd%2Ft%2FkLvUq3AP7oqV8fG9PQwRhMSk5idkJ00CdMz6d7Y0NQqWnXw3OE1x5PAlWHWnuHptaHaOlmadA4bmZpLQMycbGM637jm%2BoggiN76VsLcSkHIKLTnR00dXsKfqO9hT7Lg%2BeMlxisZiLJsjeBwQWFpl0xM9HLha7cCXBNk7K9AwcUoY804zWhPPpcUkQODAGuipTS80vGv7ztH97djLYkXLKrqzK4uw9hQci7adzB1KMA5StgecTobQu5DIS%2FCEMzTE3e1VZG%2BAazcAhePAloxf5M05CifPMjtiGe%2F14Hcl8UlJpHsyugP1jtbW703rilMe9bI22w8hZqa7oqiml4jZaKoIdQWo5KJPcPqJMvZMcK6rTbQ36%2Fip%2BekXj1HLd%2BX98diYgkgSpNl77pOTl0G6rWUzFOnzFX%2Bgw5t5mIAMOE2WnpBRarX3Yat35d%2BscmYpXPqIw36N0FOmwF1NUfrEX%2BtDxt82t1%2BzZ2LDtJbpDLqJs1uexm%2B6fnJtzNHIZZuj8QhCnVOJeZuNWGFPdqcEC6%2FmNCNpTZliKuImtiXRbF9keqYYAn4sbeh07AOcTUqyfhEMvR8y7l35ubjhUvsvxglf6yBVNJQa2p4tZkL2hK9hlsdPUFGBSBC8cEDqC7fTWzjDfh%2BzOBjqkAeSRF5dyYeVRGsiQkbri%2Bh80E%2BJir12DFZAAlC8kQmv55kttvaeP0y6tWinjVRNnmqDl55Df3Jpd9rdHXNwSaFV66u3ug2r4YyhERTy%2FSZWS9c9vuKy9WJnsPsGL3yBS0K8kUo%2FqkAGfnJkdYHpKvgA%2BvGN2JJrDqSVJgnY2uGBu3dX8rCopQFEXMA2T%2Bo49xH0jz9sKYVE9UC7rMDGHtIk%2FOJaF&X-Amz-Signature=8432f0c8f1df8a178d1e9655bd8f747cb9438e3ab1a930cbf7890ed525aca5b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ZV6XJU%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADjdSYXwgEyKmEUvOwjFPhPnTYInWum7IErZOlh5WV3AiEA9aN1tIFc1Po0Lf89GL8xdn0wyQ0Ga1M2qTEWPf1sZZMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEnhkcsjR4FUMXbLTSrcAxdV95iNffsBUv1kvUO8aGylrNgRCDFhRtMPVKqca2ghxMwPC9D%2BF2b6K9zDnjPsEwFYIs8fuEk9LvNCk16LRmAJs5fGIqx2%2BfciNFqVHkTRXa7REb76Ugch3Ir02c1Hcl2BxVNoPWJnO9GozvcoJ%2Fd3fOUt8JalqG42HmIPBw8mOSVg%2Bz%2BQgmW3Px04H1RHWsJa7IGqyDm57NwO81VEt8oFCDilMGoThrvTuThLjCMp7kwStQd5FoCgh%2BspG62K7YCtwjoG%2FdMlsiZUQSlfIKityhiF2Vr4D0Y07AyzMHJpNWCw8PzR0bLfL6HdanC%2Fgxat9kMAWlifCh7jjF86S5UsPU27klWYb8DlFdmfMyfAwX8tS6Z%2FrDRUqRaXyQ8WhYxOx%2BuBbkJd67vv%2Fzdbt%2FlOCOvwtqf6BC2Bd6P2CkkCzzEHTGGqiwMLuaC7bM3IuV3A%2FqunpxeiFPz%2FE9ojf%2FkWZalrs1XgwTzN9yqLZvnL1xGfXL24wx5I6C6H5TBq7VnN3cORtALx2QmvtbZUP8y3hSNyaDEb8cYe0qjykU3Js5IdR0LTrAf%2BWEx0WtPap8X5GxSKlQKLizmR%2F%2FddJVYqrqCD88ORcnZpJ4FL5R8rwhXr4OOuDLbX9%2FguMIyH7M4GOqUBJmLhJB2hDQ9N3whM9dz1GePkemCHyDxXbApOGDH%2B3Yd0VloIgjpdBN62M7Z41zcPXaISfxs%2Fh7PYtCPiJwVl5utpnfBlYM%2BHrN4U4xQWcDrTXkr8kL%2B0w7FyoQ4U%2F96oPuJx8q92RTnlfhSpVwXHV3JJBhxAhfi15u5VYUCb%2FrKmESLxxa8ZD84nen5i3frgiYnSsNlyM53H7MX8NbPxipZJn82z&X-Amz-Signature=b2780060355077ced4d30f4b3ae9ecbb2fde2da6241e8536c7b8cc8a1bfee46f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ZV6XJU%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADjdSYXwgEyKmEUvOwjFPhPnTYInWum7IErZOlh5WV3AiEA9aN1tIFc1Po0Lf89GL8xdn0wyQ0Ga1M2qTEWPf1sZZMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEnhkcsjR4FUMXbLTSrcAxdV95iNffsBUv1kvUO8aGylrNgRCDFhRtMPVKqca2ghxMwPC9D%2BF2b6K9zDnjPsEwFYIs8fuEk9LvNCk16LRmAJs5fGIqx2%2BfciNFqVHkTRXa7REb76Ugch3Ir02c1Hcl2BxVNoPWJnO9GozvcoJ%2Fd3fOUt8JalqG42HmIPBw8mOSVg%2Bz%2BQgmW3Px04H1RHWsJa7IGqyDm57NwO81VEt8oFCDilMGoThrvTuThLjCMp7kwStQd5FoCgh%2BspG62K7YCtwjoG%2FdMlsiZUQSlfIKityhiF2Vr4D0Y07AyzMHJpNWCw8PzR0bLfL6HdanC%2Fgxat9kMAWlifCh7jjF86S5UsPU27klWYb8DlFdmfMyfAwX8tS6Z%2FrDRUqRaXyQ8WhYxOx%2BuBbkJd67vv%2Fzdbt%2FlOCOvwtqf6BC2Bd6P2CkkCzzEHTGGqiwMLuaC7bM3IuV3A%2FqunpxeiFPz%2FE9ojf%2FkWZalrs1XgwTzN9yqLZvnL1xGfXL24wx5I6C6H5TBq7VnN3cORtALx2QmvtbZUP8y3hSNyaDEb8cYe0qjykU3Js5IdR0LTrAf%2BWEx0WtPap8X5GxSKlQKLizmR%2F%2FddJVYqrqCD88ORcnZpJ4FL5R8rwhXr4OOuDLbX9%2FguMIyH7M4GOqUBJmLhJB2hDQ9N3whM9dz1GePkemCHyDxXbApOGDH%2B3Yd0VloIgjpdBN62M7Z41zcPXaISfxs%2Fh7PYtCPiJwVl5utpnfBlYM%2BHrN4U4xQWcDrTXkr8kL%2B0w7FyoQ4U%2F96oPuJx8q92RTnlfhSpVwXHV3JJBhxAhfi15u5VYUCb%2FrKmESLxxa8ZD84nen5i3frgiYnSsNlyM53H7MX8NbPxipZJn82z&X-Amz-Signature=e15520ee811861beeac9fbb0eada86f6fc4e961a7469f6a0c4454283af15d5d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ZV6XJU%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADjdSYXwgEyKmEUvOwjFPhPnTYInWum7IErZOlh5WV3AiEA9aN1tIFc1Po0Lf89GL8xdn0wyQ0Ga1M2qTEWPf1sZZMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEnhkcsjR4FUMXbLTSrcAxdV95iNffsBUv1kvUO8aGylrNgRCDFhRtMPVKqca2ghxMwPC9D%2BF2b6K9zDnjPsEwFYIs8fuEk9LvNCk16LRmAJs5fGIqx2%2BfciNFqVHkTRXa7REb76Ugch3Ir02c1Hcl2BxVNoPWJnO9GozvcoJ%2Fd3fOUt8JalqG42HmIPBw8mOSVg%2Bz%2BQgmW3Px04H1RHWsJa7IGqyDm57NwO81VEt8oFCDilMGoThrvTuThLjCMp7kwStQd5FoCgh%2BspG62K7YCtwjoG%2FdMlsiZUQSlfIKityhiF2Vr4D0Y07AyzMHJpNWCw8PzR0bLfL6HdanC%2Fgxat9kMAWlifCh7jjF86S5UsPU27klWYb8DlFdmfMyfAwX8tS6Z%2FrDRUqRaXyQ8WhYxOx%2BuBbkJd67vv%2Fzdbt%2FlOCOvwtqf6BC2Bd6P2CkkCzzEHTGGqiwMLuaC7bM3IuV3A%2FqunpxeiFPz%2FE9ojf%2FkWZalrs1XgwTzN9yqLZvnL1xGfXL24wx5I6C6H5TBq7VnN3cORtALx2QmvtbZUP8y3hSNyaDEb8cYe0qjykU3Js5IdR0LTrAf%2BWEx0WtPap8X5GxSKlQKLizmR%2F%2FddJVYqrqCD88ORcnZpJ4FL5R8rwhXr4OOuDLbX9%2FguMIyH7M4GOqUBJmLhJB2hDQ9N3whM9dz1GePkemCHyDxXbApOGDH%2B3Yd0VloIgjpdBN62M7Z41zcPXaISfxs%2Fh7PYtCPiJwVl5utpnfBlYM%2BHrN4U4xQWcDrTXkr8kL%2B0w7FyoQ4U%2F96oPuJx8q92RTnlfhSpVwXHV3JJBhxAhfi15u5VYUCb%2FrKmESLxxa8ZD84nen5i3frgiYnSsNlyM53H7MX8NbPxipZJn82z&X-Amz-Signature=0016cd9b7cde9d4d6abbf81aae7b98b067ffb12ff40caf66526ff32cc9ba469d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ZV6XJU%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADjdSYXwgEyKmEUvOwjFPhPnTYInWum7IErZOlh5WV3AiEA9aN1tIFc1Po0Lf89GL8xdn0wyQ0Ga1M2qTEWPf1sZZMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEnhkcsjR4FUMXbLTSrcAxdV95iNffsBUv1kvUO8aGylrNgRCDFhRtMPVKqca2ghxMwPC9D%2BF2b6K9zDnjPsEwFYIs8fuEk9LvNCk16LRmAJs5fGIqx2%2BfciNFqVHkTRXa7REb76Ugch3Ir02c1Hcl2BxVNoPWJnO9GozvcoJ%2Fd3fOUt8JalqG42HmIPBw8mOSVg%2Bz%2BQgmW3Px04H1RHWsJa7IGqyDm57NwO81VEt8oFCDilMGoThrvTuThLjCMp7kwStQd5FoCgh%2BspG62K7YCtwjoG%2FdMlsiZUQSlfIKityhiF2Vr4D0Y07AyzMHJpNWCw8PzR0bLfL6HdanC%2Fgxat9kMAWlifCh7jjF86S5UsPU27klWYb8DlFdmfMyfAwX8tS6Z%2FrDRUqRaXyQ8WhYxOx%2BuBbkJd67vv%2Fzdbt%2FlOCOvwtqf6BC2Bd6P2CkkCzzEHTGGqiwMLuaC7bM3IuV3A%2FqunpxeiFPz%2FE9ojf%2FkWZalrs1XgwTzN9yqLZvnL1xGfXL24wx5I6C6H5TBq7VnN3cORtALx2QmvtbZUP8y3hSNyaDEb8cYe0qjykU3Js5IdR0LTrAf%2BWEx0WtPap8X5GxSKlQKLizmR%2F%2FddJVYqrqCD88ORcnZpJ4FL5R8rwhXr4OOuDLbX9%2FguMIyH7M4GOqUBJmLhJB2hDQ9N3whM9dz1GePkemCHyDxXbApOGDH%2B3Yd0VloIgjpdBN62M7Z41zcPXaISfxs%2Fh7PYtCPiJwVl5utpnfBlYM%2BHrN4U4xQWcDrTXkr8kL%2B0w7FyoQ4U%2F96oPuJx8q92RTnlfhSpVwXHV3JJBhxAhfi15u5VYUCb%2FrKmESLxxa8ZD84nen5i3frgiYnSsNlyM53H7MX8NbPxipZJn82z&X-Amz-Signature=70dd436b0d0d57fe9a7515232c144ff9a73e5ba5b43e05c9dd31e8cbc8fa51fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ZV6XJU%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADjdSYXwgEyKmEUvOwjFPhPnTYInWum7IErZOlh5WV3AiEA9aN1tIFc1Po0Lf89GL8xdn0wyQ0Ga1M2qTEWPf1sZZMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEnhkcsjR4FUMXbLTSrcAxdV95iNffsBUv1kvUO8aGylrNgRCDFhRtMPVKqca2ghxMwPC9D%2BF2b6K9zDnjPsEwFYIs8fuEk9LvNCk16LRmAJs5fGIqx2%2BfciNFqVHkTRXa7REb76Ugch3Ir02c1Hcl2BxVNoPWJnO9GozvcoJ%2Fd3fOUt8JalqG42HmIPBw8mOSVg%2Bz%2BQgmW3Px04H1RHWsJa7IGqyDm57NwO81VEt8oFCDilMGoThrvTuThLjCMp7kwStQd5FoCgh%2BspG62K7YCtwjoG%2FdMlsiZUQSlfIKityhiF2Vr4D0Y07AyzMHJpNWCw8PzR0bLfL6HdanC%2Fgxat9kMAWlifCh7jjF86S5UsPU27klWYb8DlFdmfMyfAwX8tS6Z%2FrDRUqRaXyQ8WhYxOx%2BuBbkJd67vv%2Fzdbt%2FlOCOvwtqf6BC2Bd6P2CkkCzzEHTGGqiwMLuaC7bM3IuV3A%2FqunpxeiFPz%2FE9ojf%2FkWZalrs1XgwTzN9yqLZvnL1xGfXL24wx5I6C6H5TBq7VnN3cORtALx2QmvtbZUP8y3hSNyaDEb8cYe0qjykU3Js5IdR0LTrAf%2BWEx0WtPap8X5GxSKlQKLizmR%2F%2FddJVYqrqCD88ORcnZpJ4FL5R8rwhXr4OOuDLbX9%2FguMIyH7M4GOqUBJmLhJB2hDQ9N3whM9dz1GePkemCHyDxXbApOGDH%2B3Yd0VloIgjpdBN62M7Z41zcPXaISfxs%2Fh7PYtCPiJwVl5utpnfBlYM%2BHrN4U4xQWcDrTXkr8kL%2B0w7FyoQ4U%2F96oPuJx8q92RTnlfhSpVwXHV3JJBhxAhfi15u5VYUCb%2FrKmESLxxa8ZD84nen5i3frgiYnSsNlyM53H7MX8NbPxipZJn82z&X-Amz-Signature=2103a336858cdaff1de0a555a245eedae47678c0196e7fe9fca7c606a049f9ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ZV6XJU%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADjdSYXwgEyKmEUvOwjFPhPnTYInWum7IErZOlh5WV3AiEA9aN1tIFc1Po0Lf89GL8xdn0wyQ0Ga1M2qTEWPf1sZZMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEnhkcsjR4FUMXbLTSrcAxdV95iNffsBUv1kvUO8aGylrNgRCDFhRtMPVKqca2ghxMwPC9D%2BF2b6K9zDnjPsEwFYIs8fuEk9LvNCk16LRmAJs5fGIqx2%2BfciNFqVHkTRXa7REb76Ugch3Ir02c1Hcl2BxVNoPWJnO9GozvcoJ%2Fd3fOUt8JalqG42HmIPBw8mOSVg%2Bz%2BQgmW3Px04H1RHWsJa7IGqyDm57NwO81VEt8oFCDilMGoThrvTuThLjCMp7kwStQd5FoCgh%2BspG62K7YCtwjoG%2FdMlsiZUQSlfIKityhiF2Vr4D0Y07AyzMHJpNWCw8PzR0bLfL6HdanC%2Fgxat9kMAWlifCh7jjF86S5UsPU27klWYb8DlFdmfMyfAwX8tS6Z%2FrDRUqRaXyQ8WhYxOx%2BuBbkJd67vv%2Fzdbt%2FlOCOvwtqf6BC2Bd6P2CkkCzzEHTGGqiwMLuaC7bM3IuV3A%2FqunpxeiFPz%2FE9ojf%2FkWZalrs1XgwTzN9yqLZvnL1xGfXL24wx5I6C6H5TBq7VnN3cORtALx2QmvtbZUP8y3hSNyaDEb8cYe0qjykU3Js5IdR0LTrAf%2BWEx0WtPap8X5GxSKlQKLizmR%2F%2FddJVYqrqCD88ORcnZpJ4FL5R8rwhXr4OOuDLbX9%2FguMIyH7M4GOqUBJmLhJB2hDQ9N3whM9dz1GePkemCHyDxXbApOGDH%2B3Yd0VloIgjpdBN62M7Z41zcPXaISfxs%2Fh7PYtCPiJwVl5utpnfBlYM%2BHrN4U4xQWcDrTXkr8kL%2B0w7FyoQ4U%2F96oPuJx8q92RTnlfhSpVwXHV3JJBhxAhfi15u5VYUCb%2FrKmESLxxa8ZD84nen5i3frgiYnSsNlyM53H7MX8NbPxipZJn82z&X-Amz-Signature=4f21e9047f98627cf5bc2962c47512da616337305d7fbd56c0f59998f2960deb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


