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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGU6PW3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfVtiQ69sbEFuKMvpy%2Ft5F7XLNV0%2Bb%2BiyDIkLxp4EkzAiEAh%2F3%2FarCJrAYETC9koiC1Vwjh9d8b%2BBWhbnItl0MlrNYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGY14Ml7Rkh%2BudqVZCrcAy%2B5MJbaLX0lstAsz9VwaKWWMdzvA3nyJgwiN5IfN3Sj%2B1fLgWdqoUlv11rgVDKm5ZRPFSC4iCckRINmOeMW2Fm%2B5AzPvul82NY993WXN3ITOO9E%2Bu%2FXezTrZgaZskLUgGV4WlHHY7deWfRTUeMgPzGJgWpjZJhjpwR%2FNRQmILkxVlBmBLNM7zEl%2FwLUgin%2FTcbqG1gAGek0%2BnrYtIc0QIDNl%2BUbpxlz%2FfXDT%2FCe2KZijR1Ttjg%2F87ZTGP4eseYfxahxGhqClioMhnSYK0MpG%2FB6oA9S3V8rKfZkHcJvhXcLas755eke6lv9bD%2FabrHfBt%2FL3cFmHfc06UXSjuPNnKjTtZivpk%2B%2BUf0yMwHYz3Y3vcFQz1O1uXBISUr8n13lRE9z6cyQwFf6Gy2LcB5u%2FfFolCjfo20sRwBBVPWWU31LlcDBZCoUP7qxshT%2BTpAdd8wPe6WSwcLgJg3TX1CB8Xepdnnl7BTMSWMfAKB7f1mdni8rn3%2BeGUwn0O06AtIWovwvcY%2B2OumbTCcYsMwMTFnmzhepTO2R78AtHT4ZKpkH2%2F4uWK0c2skEtRbOjJqG7iDRJO9qktZYxYJyYnSWVjaFVs7nWexfOzSTkXhMq7ntH7d7CB2LII2CXTOEMJTR4MQGOqUB7UVaJ8NXbqGl0X1qdvFnbAMAdMZ4trsLNXWTYxnX%2FmdaKilZOT9H8qLSID5%2FtBQXXq9vsmVPiOH3H7t%2FwRJpJUGVU3VWiCP8CfU%2BK1KgUXHapa3%2FwlVY%2BfxYPxb7FPcnvF6l%2BveKlLb08B83sl6BwfhbjVEKKPlTsXwFmQyiGJQWjsBskpSuHWbsj%2BOjL40EzhbScMhPhs6%2BW9FXZ3v%2Fma2PhOl%2F&X-Amz-Signature=733634bd0ea67d9ead9c21e1dc3cc54774968b10c8167960851a051cbebe7492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGU6PW3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfVtiQ69sbEFuKMvpy%2Ft5F7XLNV0%2Bb%2BiyDIkLxp4EkzAiEAh%2F3%2FarCJrAYETC9koiC1Vwjh9d8b%2BBWhbnItl0MlrNYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGY14Ml7Rkh%2BudqVZCrcAy%2B5MJbaLX0lstAsz9VwaKWWMdzvA3nyJgwiN5IfN3Sj%2B1fLgWdqoUlv11rgVDKm5ZRPFSC4iCckRINmOeMW2Fm%2B5AzPvul82NY993WXN3ITOO9E%2Bu%2FXezTrZgaZskLUgGV4WlHHY7deWfRTUeMgPzGJgWpjZJhjpwR%2FNRQmILkxVlBmBLNM7zEl%2FwLUgin%2FTcbqG1gAGek0%2BnrYtIc0QIDNl%2BUbpxlz%2FfXDT%2FCe2KZijR1Ttjg%2F87ZTGP4eseYfxahxGhqClioMhnSYK0MpG%2FB6oA9S3V8rKfZkHcJvhXcLas755eke6lv9bD%2FabrHfBt%2FL3cFmHfc06UXSjuPNnKjTtZivpk%2B%2BUf0yMwHYz3Y3vcFQz1O1uXBISUr8n13lRE9z6cyQwFf6Gy2LcB5u%2FfFolCjfo20sRwBBVPWWU31LlcDBZCoUP7qxshT%2BTpAdd8wPe6WSwcLgJg3TX1CB8Xepdnnl7BTMSWMfAKB7f1mdni8rn3%2BeGUwn0O06AtIWovwvcY%2B2OumbTCcYsMwMTFnmzhepTO2R78AtHT4ZKpkH2%2F4uWK0c2skEtRbOjJqG7iDRJO9qktZYxYJyYnSWVjaFVs7nWexfOzSTkXhMq7ntH7d7CB2LII2CXTOEMJTR4MQGOqUB7UVaJ8NXbqGl0X1qdvFnbAMAdMZ4trsLNXWTYxnX%2FmdaKilZOT9H8qLSID5%2FtBQXXq9vsmVPiOH3H7t%2FwRJpJUGVU3VWiCP8CfU%2BK1KgUXHapa3%2FwlVY%2BfxYPxb7FPcnvF6l%2BveKlLb08B83sl6BwfhbjVEKKPlTsXwFmQyiGJQWjsBskpSuHWbsj%2BOjL40EzhbScMhPhs6%2BW9FXZ3v%2Fma2PhOl%2F&X-Amz-Signature=72d5c9a3a654707c7139f56675eb4e8f09fad490a71ebb2193707480b16b6d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGU6PW3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfVtiQ69sbEFuKMvpy%2Ft5F7XLNV0%2Bb%2BiyDIkLxp4EkzAiEAh%2F3%2FarCJrAYETC9koiC1Vwjh9d8b%2BBWhbnItl0MlrNYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGY14Ml7Rkh%2BudqVZCrcAy%2B5MJbaLX0lstAsz9VwaKWWMdzvA3nyJgwiN5IfN3Sj%2B1fLgWdqoUlv11rgVDKm5ZRPFSC4iCckRINmOeMW2Fm%2B5AzPvul82NY993WXN3ITOO9E%2Bu%2FXezTrZgaZskLUgGV4WlHHY7deWfRTUeMgPzGJgWpjZJhjpwR%2FNRQmILkxVlBmBLNM7zEl%2FwLUgin%2FTcbqG1gAGek0%2BnrYtIc0QIDNl%2BUbpxlz%2FfXDT%2FCe2KZijR1Ttjg%2F87ZTGP4eseYfxahxGhqClioMhnSYK0MpG%2FB6oA9S3V8rKfZkHcJvhXcLas755eke6lv9bD%2FabrHfBt%2FL3cFmHfc06UXSjuPNnKjTtZivpk%2B%2BUf0yMwHYz3Y3vcFQz1O1uXBISUr8n13lRE9z6cyQwFf6Gy2LcB5u%2FfFolCjfo20sRwBBVPWWU31LlcDBZCoUP7qxshT%2BTpAdd8wPe6WSwcLgJg3TX1CB8Xepdnnl7BTMSWMfAKB7f1mdni8rn3%2BeGUwn0O06AtIWovwvcY%2B2OumbTCcYsMwMTFnmzhepTO2R78AtHT4ZKpkH2%2F4uWK0c2skEtRbOjJqG7iDRJO9qktZYxYJyYnSWVjaFVs7nWexfOzSTkXhMq7ntH7d7CB2LII2CXTOEMJTR4MQGOqUB7UVaJ8NXbqGl0X1qdvFnbAMAdMZ4trsLNXWTYxnX%2FmdaKilZOT9H8qLSID5%2FtBQXXq9vsmVPiOH3H7t%2FwRJpJUGVU3VWiCP8CfU%2BK1KgUXHapa3%2FwlVY%2BfxYPxb7FPcnvF6l%2BveKlLb08B83sl6BwfhbjVEKKPlTsXwFmQyiGJQWjsBskpSuHWbsj%2BOjL40EzhbScMhPhs6%2BW9FXZ3v%2Fma2PhOl%2F&X-Amz-Signature=d351328ba895764e02ba8d86fbbc8f13cea59eeda8de2a95a000af66b2324204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGU6PW3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfVtiQ69sbEFuKMvpy%2Ft5F7XLNV0%2Bb%2BiyDIkLxp4EkzAiEAh%2F3%2FarCJrAYETC9koiC1Vwjh9d8b%2BBWhbnItl0MlrNYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGY14Ml7Rkh%2BudqVZCrcAy%2B5MJbaLX0lstAsz9VwaKWWMdzvA3nyJgwiN5IfN3Sj%2B1fLgWdqoUlv11rgVDKm5ZRPFSC4iCckRINmOeMW2Fm%2B5AzPvul82NY993WXN3ITOO9E%2Bu%2FXezTrZgaZskLUgGV4WlHHY7deWfRTUeMgPzGJgWpjZJhjpwR%2FNRQmILkxVlBmBLNM7zEl%2FwLUgin%2FTcbqG1gAGek0%2BnrYtIc0QIDNl%2BUbpxlz%2FfXDT%2FCe2KZijR1Ttjg%2F87ZTGP4eseYfxahxGhqClioMhnSYK0MpG%2FB6oA9S3V8rKfZkHcJvhXcLas755eke6lv9bD%2FabrHfBt%2FL3cFmHfc06UXSjuPNnKjTtZivpk%2B%2BUf0yMwHYz3Y3vcFQz1O1uXBISUr8n13lRE9z6cyQwFf6Gy2LcB5u%2FfFolCjfo20sRwBBVPWWU31LlcDBZCoUP7qxshT%2BTpAdd8wPe6WSwcLgJg3TX1CB8Xepdnnl7BTMSWMfAKB7f1mdni8rn3%2BeGUwn0O06AtIWovwvcY%2B2OumbTCcYsMwMTFnmzhepTO2R78AtHT4ZKpkH2%2F4uWK0c2skEtRbOjJqG7iDRJO9qktZYxYJyYnSWVjaFVs7nWexfOzSTkXhMq7ntH7d7CB2LII2CXTOEMJTR4MQGOqUB7UVaJ8NXbqGl0X1qdvFnbAMAdMZ4trsLNXWTYxnX%2FmdaKilZOT9H8qLSID5%2FtBQXXq9vsmVPiOH3H7t%2FwRJpJUGVU3VWiCP8CfU%2BK1KgUXHapa3%2FwlVY%2BfxYPxb7FPcnvF6l%2BveKlLb08B83sl6BwfhbjVEKKPlTsXwFmQyiGJQWjsBskpSuHWbsj%2BOjL40EzhbScMhPhs6%2BW9FXZ3v%2Fma2PhOl%2F&X-Amz-Signature=5613a0921f6f9c5ed4f4e57c902a9d86084506c0128601aa915a637bd6ac2270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGU6PW3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfVtiQ69sbEFuKMvpy%2Ft5F7XLNV0%2Bb%2BiyDIkLxp4EkzAiEAh%2F3%2FarCJrAYETC9koiC1Vwjh9d8b%2BBWhbnItl0MlrNYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGY14Ml7Rkh%2BudqVZCrcAy%2B5MJbaLX0lstAsz9VwaKWWMdzvA3nyJgwiN5IfN3Sj%2B1fLgWdqoUlv11rgVDKm5ZRPFSC4iCckRINmOeMW2Fm%2B5AzPvul82NY993WXN3ITOO9E%2Bu%2FXezTrZgaZskLUgGV4WlHHY7deWfRTUeMgPzGJgWpjZJhjpwR%2FNRQmILkxVlBmBLNM7zEl%2FwLUgin%2FTcbqG1gAGek0%2BnrYtIc0QIDNl%2BUbpxlz%2FfXDT%2FCe2KZijR1Ttjg%2F87ZTGP4eseYfxahxGhqClioMhnSYK0MpG%2FB6oA9S3V8rKfZkHcJvhXcLas755eke6lv9bD%2FabrHfBt%2FL3cFmHfc06UXSjuPNnKjTtZivpk%2B%2BUf0yMwHYz3Y3vcFQz1O1uXBISUr8n13lRE9z6cyQwFf6Gy2LcB5u%2FfFolCjfo20sRwBBVPWWU31LlcDBZCoUP7qxshT%2BTpAdd8wPe6WSwcLgJg3TX1CB8Xepdnnl7BTMSWMfAKB7f1mdni8rn3%2BeGUwn0O06AtIWovwvcY%2B2OumbTCcYsMwMTFnmzhepTO2R78AtHT4ZKpkH2%2F4uWK0c2skEtRbOjJqG7iDRJO9qktZYxYJyYnSWVjaFVs7nWexfOzSTkXhMq7ntH7d7CB2LII2CXTOEMJTR4MQGOqUB7UVaJ8NXbqGl0X1qdvFnbAMAdMZ4trsLNXWTYxnX%2FmdaKilZOT9H8qLSID5%2FtBQXXq9vsmVPiOH3H7t%2FwRJpJUGVU3VWiCP8CfU%2BK1KgUXHapa3%2FwlVY%2BfxYPxb7FPcnvF6l%2BveKlLb08B83sl6BwfhbjVEKKPlTsXwFmQyiGJQWjsBskpSuHWbsj%2BOjL40EzhbScMhPhs6%2BW9FXZ3v%2Fma2PhOl%2F&X-Amz-Signature=69e83ffaa41a89621a67f8c5bcad3d020dbe03fae52d135f9fb4c48d28d889dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGU6PW3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfVtiQ69sbEFuKMvpy%2Ft5F7XLNV0%2Bb%2BiyDIkLxp4EkzAiEAh%2F3%2FarCJrAYETC9koiC1Vwjh9d8b%2BBWhbnItl0MlrNYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGY14Ml7Rkh%2BudqVZCrcAy%2B5MJbaLX0lstAsz9VwaKWWMdzvA3nyJgwiN5IfN3Sj%2B1fLgWdqoUlv11rgVDKm5ZRPFSC4iCckRINmOeMW2Fm%2B5AzPvul82NY993WXN3ITOO9E%2Bu%2FXezTrZgaZskLUgGV4WlHHY7deWfRTUeMgPzGJgWpjZJhjpwR%2FNRQmILkxVlBmBLNM7zEl%2FwLUgin%2FTcbqG1gAGek0%2BnrYtIc0QIDNl%2BUbpxlz%2FfXDT%2FCe2KZijR1Ttjg%2F87ZTGP4eseYfxahxGhqClioMhnSYK0MpG%2FB6oA9S3V8rKfZkHcJvhXcLas755eke6lv9bD%2FabrHfBt%2FL3cFmHfc06UXSjuPNnKjTtZivpk%2B%2BUf0yMwHYz3Y3vcFQz1O1uXBISUr8n13lRE9z6cyQwFf6Gy2LcB5u%2FfFolCjfo20sRwBBVPWWU31LlcDBZCoUP7qxshT%2BTpAdd8wPe6WSwcLgJg3TX1CB8Xepdnnl7BTMSWMfAKB7f1mdni8rn3%2BeGUwn0O06AtIWovwvcY%2B2OumbTCcYsMwMTFnmzhepTO2R78AtHT4ZKpkH2%2F4uWK0c2skEtRbOjJqG7iDRJO9qktZYxYJyYnSWVjaFVs7nWexfOzSTkXhMq7ntH7d7CB2LII2CXTOEMJTR4MQGOqUB7UVaJ8NXbqGl0X1qdvFnbAMAdMZ4trsLNXWTYxnX%2FmdaKilZOT9H8qLSID5%2FtBQXXq9vsmVPiOH3H7t%2FwRJpJUGVU3VWiCP8CfU%2BK1KgUXHapa3%2FwlVY%2BfxYPxb7FPcnvF6l%2BveKlLb08B83sl6BwfhbjVEKKPlTsXwFmQyiGJQWjsBskpSuHWbsj%2BOjL40EzhbScMhPhs6%2BW9FXZ3v%2Fma2PhOl%2F&X-Amz-Signature=ebc8c10009ef8df31c42b755b2d73df50e773352dfea1923136efcaf245b9558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGU6PW3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfVtiQ69sbEFuKMvpy%2Ft5F7XLNV0%2Bb%2BiyDIkLxp4EkzAiEAh%2F3%2FarCJrAYETC9koiC1Vwjh9d8b%2BBWhbnItl0MlrNYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGY14Ml7Rkh%2BudqVZCrcAy%2B5MJbaLX0lstAsz9VwaKWWMdzvA3nyJgwiN5IfN3Sj%2B1fLgWdqoUlv11rgVDKm5ZRPFSC4iCckRINmOeMW2Fm%2B5AzPvul82NY993WXN3ITOO9E%2Bu%2FXezTrZgaZskLUgGV4WlHHY7deWfRTUeMgPzGJgWpjZJhjpwR%2FNRQmILkxVlBmBLNM7zEl%2FwLUgin%2FTcbqG1gAGek0%2BnrYtIc0QIDNl%2BUbpxlz%2FfXDT%2FCe2KZijR1Ttjg%2F87ZTGP4eseYfxahxGhqClioMhnSYK0MpG%2FB6oA9S3V8rKfZkHcJvhXcLas755eke6lv9bD%2FabrHfBt%2FL3cFmHfc06UXSjuPNnKjTtZivpk%2B%2BUf0yMwHYz3Y3vcFQz1O1uXBISUr8n13lRE9z6cyQwFf6Gy2LcB5u%2FfFolCjfo20sRwBBVPWWU31LlcDBZCoUP7qxshT%2BTpAdd8wPe6WSwcLgJg3TX1CB8Xepdnnl7BTMSWMfAKB7f1mdni8rn3%2BeGUwn0O06AtIWovwvcY%2B2OumbTCcYsMwMTFnmzhepTO2R78AtHT4ZKpkH2%2F4uWK0c2skEtRbOjJqG7iDRJO9qktZYxYJyYnSWVjaFVs7nWexfOzSTkXhMq7ntH7d7CB2LII2CXTOEMJTR4MQGOqUB7UVaJ8NXbqGl0X1qdvFnbAMAdMZ4trsLNXWTYxnX%2FmdaKilZOT9H8qLSID5%2FtBQXXq9vsmVPiOH3H7t%2FwRJpJUGVU3VWiCP8CfU%2BK1KgUXHapa3%2FwlVY%2BfxYPxb7FPcnvF6l%2BveKlLb08B83sl6BwfhbjVEKKPlTsXwFmQyiGJQWjsBskpSuHWbsj%2BOjL40EzhbScMhPhs6%2BW9FXZ3v%2Fma2PhOl%2F&X-Amz-Signature=17d6cfa8c4124a1e8021d0b0b7d1ce4c1263b7a9d17e9a8ea03c99ae4acd175a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGU6PW3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfVtiQ69sbEFuKMvpy%2Ft5F7XLNV0%2Bb%2BiyDIkLxp4EkzAiEAh%2F3%2FarCJrAYETC9koiC1Vwjh9d8b%2BBWhbnItl0MlrNYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGY14Ml7Rkh%2BudqVZCrcAy%2B5MJbaLX0lstAsz9VwaKWWMdzvA3nyJgwiN5IfN3Sj%2B1fLgWdqoUlv11rgVDKm5ZRPFSC4iCckRINmOeMW2Fm%2B5AzPvul82NY993WXN3ITOO9E%2Bu%2FXezTrZgaZskLUgGV4WlHHY7deWfRTUeMgPzGJgWpjZJhjpwR%2FNRQmILkxVlBmBLNM7zEl%2FwLUgin%2FTcbqG1gAGek0%2BnrYtIc0QIDNl%2BUbpxlz%2FfXDT%2FCe2KZijR1Ttjg%2F87ZTGP4eseYfxahxGhqClioMhnSYK0MpG%2FB6oA9S3V8rKfZkHcJvhXcLas755eke6lv9bD%2FabrHfBt%2FL3cFmHfc06UXSjuPNnKjTtZivpk%2B%2BUf0yMwHYz3Y3vcFQz1O1uXBISUr8n13lRE9z6cyQwFf6Gy2LcB5u%2FfFolCjfo20sRwBBVPWWU31LlcDBZCoUP7qxshT%2BTpAdd8wPe6WSwcLgJg3TX1CB8Xepdnnl7BTMSWMfAKB7f1mdni8rn3%2BeGUwn0O06AtIWovwvcY%2B2OumbTCcYsMwMTFnmzhepTO2R78AtHT4ZKpkH2%2F4uWK0c2skEtRbOjJqG7iDRJO9qktZYxYJyYnSWVjaFVs7nWexfOzSTkXhMq7ntH7d7CB2LII2CXTOEMJTR4MQGOqUB7UVaJ8NXbqGl0X1qdvFnbAMAdMZ4trsLNXWTYxnX%2FmdaKilZOT9H8qLSID5%2FtBQXXq9vsmVPiOH3H7t%2FwRJpJUGVU3VWiCP8CfU%2BK1KgUXHapa3%2FwlVY%2BfxYPxb7FPcnvF6l%2BveKlLb08B83sl6BwfhbjVEKKPlTsXwFmQyiGJQWjsBskpSuHWbsj%2BOjL40EzhbScMhPhs6%2BW9FXZ3v%2Fma2PhOl%2F&X-Amz-Signature=2e3cbe36b287c9b34b5054fe49c975808c0a843945646b017cc6e460a652f86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGU6PW3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfVtiQ69sbEFuKMvpy%2Ft5F7XLNV0%2Bb%2BiyDIkLxp4EkzAiEAh%2F3%2FarCJrAYETC9koiC1Vwjh9d8b%2BBWhbnItl0MlrNYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGY14Ml7Rkh%2BudqVZCrcAy%2B5MJbaLX0lstAsz9VwaKWWMdzvA3nyJgwiN5IfN3Sj%2B1fLgWdqoUlv11rgVDKm5ZRPFSC4iCckRINmOeMW2Fm%2B5AzPvul82NY993WXN3ITOO9E%2Bu%2FXezTrZgaZskLUgGV4WlHHY7deWfRTUeMgPzGJgWpjZJhjpwR%2FNRQmILkxVlBmBLNM7zEl%2FwLUgin%2FTcbqG1gAGek0%2BnrYtIc0QIDNl%2BUbpxlz%2FfXDT%2FCe2KZijR1Ttjg%2F87ZTGP4eseYfxahxGhqClioMhnSYK0MpG%2FB6oA9S3V8rKfZkHcJvhXcLas755eke6lv9bD%2FabrHfBt%2FL3cFmHfc06UXSjuPNnKjTtZivpk%2B%2BUf0yMwHYz3Y3vcFQz1O1uXBISUr8n13lRE9z6cyQwFf6Gy2LcB5u%2FfFolCjfo20sRwBBVPWWU31LlcDBZCoUP7qxshT%2BTpAdd8wPe6WSwcLgJg3TX1CB8Xepdnnl7BTMSWMfAKB7f1mdni8rn3%2BeGUwn0O06AtIWovwvcY%2B2OumbTCcYsMwMTFnmzhepTO2R78AtHT4ZKpkH2%2F4uWK0c2skEtRbOjJqG7iDRJO9qktZYxYJyYnSWVjaFVs7nWexfOzSTkXhMq7ntH7d7CB2LII2CXTOEMJTR4MQGOqUB7UVaJ8NXbqGl0X1qdvFnbAMAdMZ4trsLNXWTYxnX%2FmdaKilZOT9H8qLSID5%2FtBQXXq9vsmVPiOH3H7t%2FwRJpJUGVU3VWiCP8CfU%2BK1KgUXHapa3%2FwlVY%2BfxYPxb7FPcnvF6l%2BveKlLb08B83sl6BwfhbjVEKKPlTsXwFmQyiGJQWjsBskpSuHWbsj%2BOjL40EzhbScMhPhs6%2BW9FXZ3v%2Fma2PhOl%2F&X-Amz-Signature=d8a04ead9dfa7ba3e6158d0928ba925c536d893f0feda5e12de1cbdff1fa32e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGU6PW3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfVtiQ69sbEFuKMvpy%2Ft5F7XLNV0%2Bb%2BiyDIkLxp4EkzAiEAh%2F3%2FarCJrAYETC9koiC1Vwjh9d8b%2BBWhbnItl0MlrNYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGY14Ml7Rkh%2BudqVZCrcAy%2B5MJbaLX0lstAsz9VwaKWWMdzvA3nyJgwiN5IfN3Sj%2B1fLgWdqoUlv11rgVDKm5ZRPFSC4iCckRINmOeMW2Fm%2B5AzPvul82NY993WXN3ITOO9E%2Bu%2FXezTrZgaZskLUgGV4WlHHY7deWfRTUeMgPzGJgWpjZJhjpwR%2FNRQmILkxVlBmBLNM7zEl%2FwLUgin%2FTcbqG1gAGek0%2BnrYtIc0QIDNl%2BUbpxlz%2FfXDT%2FCe2KZijR1Ttjg%2F87ZTGP4eseYfxahxGhqClioMhnSYK0MpG%2FB6oA9S3V8rKfZkHcJvhXcLas755eke6lv9bD%2FabrHfBt%2FL3cFmHfc06UXSjuPNnKjTtZivpk%2B%2BUf0yMwHYz3Y3vcFQz1O1uXBISUr8n13lRE9z6cyQwFf6Gy2LcB5u%2FfFolCjfo20sRwBBVPWWU31LlcDBZCoUP7qxshT%2BTpAdd8wPe6WSwcLgJg3TX1CB8Xepdnnl7BTMSWMfAKB7f1mdni8rn3%2BeGUwn0O06AtIWovwvcY%2B2OumbTCcYsMwMTFnmzhepTO2R78AtHT4ZKpkH2%2F4uWK0c2skEtRbOjJqG7iDRJO9qktZYxYJyYnSWVjaFVs7nWexfOzSTkXhMq7ntH7d7CB2LII2CXTOEMJTR4MQGOqUB7UVaJ8NXbqGl0X1qdvFnbAMAdMZ4trsLNXWTYxnX%2FmdaKilZOT9H8qLSID5%2FtBQXXq9vsmVPiOH3H7t%2FwRJpJUGVU3VWiCP8CfU%2BK1KgUXHapa3%2FwlVY%2BfxYPxb7FPcnvF6l%2BveKlLb08B83sl6BwfhbjVEKKPlTsXwFmQyiGJQWjsBskpSuHWbsj%2BOjL40EzhbScMhPhs6%2BW9FXZ3v%2Fma2PhOl%2F&X-Amz-Signature=ef63e120719e9ef09df36e0f3e9c7feec1a05bdae276c0db086a612f2aa93a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPJDCD3Y%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2rBX%2BkeKAw2bRx%2FyXSebit8QdK5sG%2B%2Bk5mZ3jHvAVvwIhAKhrrCj0CspdUlGmy7Rk6WTzXJXfRymUZqLlbi6iQ9ZjKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDwb5rx4NvilOUKt0q3AN81fzXPio1%2BwCRgG5C5OKqhl8h1GLOAOcN%2FnRqAbezdaReLKy1PZIL8O5YM%2BF5ZyO%2BPg4Do0g0BBAgHrZxWP1QR5eHT7%2Bq6BSO0VXm16Q9vWLt%2FUDYnrlzrU7wKlAiBIFfgCYJmpGGs70Gf4Djq0izQ%2Bp4qWUpAYscQAl88UFdp%2BX3abpsuCwxuXchrmFd2rCf1fmpHkbheYDSJoXHzKhh%2BPDdt9GP7yGeUMkx7yqNH%2FhlLJNxUmloD5IEBko4Ay74MwcQN6FiN%2FSh%2B1iv6BuMO8qiJYS%2F3flbnE7USyymY%2FJdaHOhr4XlliVD866veUeuvKgmBIxiVVNyFiECB%2BaeTxbgzvIR0%2F0siKQBix7wzvnGtezQfSOgm6VASc542M0gbmJ9a84YBfLgE1B%2BQQ%2F%2BzSi4Wm5LgTIur4RSgQnXBu2gaNIHcCXjZFowj4JCTPbK4Qu4c4OfMdNdNJz9VZsXRbZ2OCVVckBR1jIq9sw99Kycwu9kOiQafS1GYykuLYjrf2O%2FChiE7Yln%2FV7jsK2NO%2BfdyGmZC6opbQzi4SDo1evP4p%2FkQ%2F3zWgJsmrcM7GE15nlJlTa0EEDNqZTutwn5FrZLVz9EVjvMLQ4BARBEluqspxP%2B02mhNHwmbzCg0eDEBjqkAUJW%2FgapcnNAH597fff2DEuMcAobXEwJWzklAJAiPuxUeDLPJ0VugSCRA969cKIusCUpPiHSgvrBjDcpMx7D1Ljfqdnmo6cI%2B057QEiVuHLxtcZu%2B53qY9YWBDUxq1ku4yuDahv95To2yerobRyc%2BrXVd8JAhHjCOiXm6nqAYVnaHRRpEMyuAWNufcL18AE%2F4HdCaTZgBICIk7iekHdagZeUCXXu&X-Amz-Signature=fc5bf84dce53d19e4567313dc0547587854e6663a526c8f0bcaf57b24b089558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QTS2VF5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGneuchrNqE%2FwAlhzi1445bsvGX4C%2B9mHf0Dhc%2BACZYwAiEAnLa9RhsjdlBDKFTcfkw6c1ynV5AzdV83Sx1tc0Ee2acqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCM5Rl%2Ban5Gsmg0poSrcA7%2BXr%2BGSlkGaAS1b2%2B9PM2292W0ueLG%2FkaBSLvuMWIB%2B1%2BzftiUw6jX5WoS9q4v9WdaY9p7Q5VKhm1sv2DQ57BziihjqRVTlT7LwFqyZlejPcisSXSIVNajnv%2F7MDaFF2heOZ%2FhkbdORdVcEPecu5ZW8lEVP71EziypM%2BUVQsJt1Kbk7Yt5%2FZjQAxXt6%2FzZ5N%2FHygzJaAVwu9C4ZyWE3dDUlVPwWSX50d9LLyy0YDgNWn9HCkq%2F2k%2FW0%2BceNgMZUSaSlRKjj1ieIx1dx%2Bl56nOlEUxXmF3wzqfAynx9XHUyt%2BHnsuvu2%2BBo2RHBW2OCC%2BHVKAmK4HnywHnROyMYV%2BRPzP93EVpUShAShn5WgSU%2FxnBCYwAHQgirsImooFDKwmPGZ4oJjJ0d1u4z46G1H9l9sd3fp0%2FJp4MvNPQ9SmiuibHmf7BUHVpyNEppZ4AfN7T3u0YCzl1QsLPnpL7rhA71LTP8PIPyXG7lYIyJ6rolYDCfkEC1KqqVJ%2FQu7h%2FuplTx1%2FxnFRm%2B2%2Fk7qqbrOjOD1wPoIeEzbilznFBmmSOZXwmkHRKtQqLuKmo7rEIEG2cfQ0t1gJwGpw3SCh7485hRuCahM83%2F1mvopIDm3TpoxRKU1jzcA1D3XUoToMP%2FQ4MQGOqUBjCxRtE%2BbRWn0BsqfUyTy6fiK1WxV%2B8EXd%2BT545xMwCKvEFPvps0dFpEOm8HKt7dagUm6YQeXhpeJBRBOAlFxg8H0ELRWhROMr18OzDiJeiGCp3WwAOXjO3C%2B65Ic%2FODx0Ntz8W5nr8BI8m5Q956VpXxtd%2FHoUMCVgFYC48IgTDQnr5z%2BXzJQYeqQzvh880XdNHKRDBi9Apt14tAnxuKdUPcTd1nI&X-Amz-Signature=f60213b3f33beee2e21a4d837ab374b0268b5838fd5ec0b5cb6f42b6d0a3a916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXQ3I2LX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUX3ZL%2BIPJQ2HLjqUfBGO%2FZVUyoElMTxgfOKlHjABp6AIhAKyAT8CDQeSzYRWz3Hn3UR%2B2D9wNsxo1oLU5m%2BdGWTULKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxZBmGKBVDUhivV1wq3AMP0Je6QjecZrW7f%2Fm24%2B5A9urBm8SisxA0djRnh8BGhhE3uf7Up2p%2B%2F2nPk7DvXNPh9tjGd0sxO7HO%2BU6xT9Zw%2BeFWghG33rQUVf50nCUcP1ub2BN01nBJMDscdTBUq1bTfM4%2BbSiPi1EcgNKYw%2B%2BBftpk3Ul4uQ0J5xp2jrfu3xUlfvB%2BLV1esrQyig8d5C2W4cApwWDXRtG0wRUb9zdFi%2FGk%2FTVKQlvT2iaOlELf4gnB%2F1tBZSJXbkkbiv98oEcVLKYOjwrTNmKpzMHQv4PfbW7cpATZZwJMziTudGu71cNMcCYv15bwSbJhosCRiTJeQgfQRuCCcYAbEf9%2FtnUDlZP4kwvJTxIibXtRBG0SschnIYvBmpDXv6aywc88eCTIav5yf6yrQR2Q7hEcOC41srhGlRfKd7cRDG%2BA0oGQC0f2rrKO0BmzB5q9lvUbkl3Jx00w7byC3P5CvDeS9HILHQw7HaCgYtVi12fqmzdX04ptwmAYS69CBQvGJ440rxaieWCxsHdL03U0oTHxfvAg%2FEy%2B%2BrAQUrcBE1girUlpl6mWdNrKmJh83p8hXJ0OuPND75sfZ1hSLk4SS2bFhSx2UXqHVGaQVRLkJDjNINuMOCOTQMEHhjqWzaG9yTCD0uDEBjqkAa4VaEc1ytYrGh1RBXIiaNfzUqAnJ54SrwRFRNFedqyrkwGKqxK80%2Bd88yU8uyWEPqdVZ1pOlKD10k%2F6guAqhVaBDIrPbPLzY5rnJtMGmcQ%2FdS%2F6nQU8E%2BFwcUdqs1ljPDolrCoZHhPP%2BST1fa%2FM4euELRRZh%2BLtgNhn6wl1Ge%2Fv8jAkYuFV%2B3%2BxX%2FTu70%2BKijFR48KVPbqM6QsWd8jP%2FrwYRu7j&X-Amz-Signature=326233b38dc6e566180e108db1176364382a0197df8fb8e3a490b292a2bebe62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGU6PW3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfVtiQ69sbEFuKMvpy%2Ft5F7XLNV0%2Bb%2BiyDIkLxp4EkzAiEAh%2F3%2FarCJrAYETC9koiC1Vwjh9d8b%2BBWhbnItl0MlrNYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGY14Ml7Rkh%2BudqVZCrcAy%2B5MJbaLX0lstAsz9VwaKWWMdzvA3nyJgwiN5IfN3Sj%2B1fLgWdqoUlv11rgVDKm5ZRPFSC4iCckRINmOeMW2Fm%2B5AzPvul82NY993WXN3ITOO9E%2Bu%2FXezTrZgaZskLUgGV4WlHHY7deWfRTUeMgPzGJgWpjZJhjpwR%2FNRQmILkxVlBmBLNM7zEl%2FwLUgin%2FTcbqG1gAGek0%2BnrYtIc0QIDNl%2BUbpxlz%2FfXDT%2FCe2KZijR1Ttjg%2F87ZTGP4eseYfxahxGhqClioMhnSYK0MpG%2FB6oA9S3V8rKfZkHcJvhXcLas755eke6lv9bD%2FabrHfBt%2FL3cFmHfc06UXSjuPNnKjTtZivpk%2B%2BUf0yMwHYz3Y3vcFQz1O1uXBISUr8n13lRE9z6cyQwFf6Gy2LcB5u%2FfFolCjfo20sRwBBVPWWU31LlcDBZCoUP7qxshT%2BTpAdd8wPe6WSwcLgJg3TX1CB8Xepdnnl7BTMSWMfAKB7f1mdni8rn3%2BeGUwn0O06AtIWovwvcY%2B2OumbTCcYsMwMTFnmzhepTO2R78AtHT4ZKpkH2%2F4uWK0c2skEtRbOjJqG7iDRJO9qktZYxYJyYnSWVjaFVs7nWexfOzSTkXhMq7ntH7d7CB2LII2CXTOEMJTR4MQGOqUB7UVaJ8NXbqGl0X1qdvFnbAMAdMZ4trsLNXWTYxnX%2FmdaKilZOT9H8qLSID5%2FtBQXXq9vsmVPiOH3H7t%2FwRJpJUGVU3VWiCP8CfU%2BK1KgUXHapa3%2FwlVY%2BfxYPxb7FPcnvF6l%2BveKlLb08B83sl6BwfhbjVEKKPlTsXwFmQyiGJQWjsBskpSuHWbsj%2BOjL40EzhbScMhPhs6%2BW9FXZ3v%2Fma2PhOl%2F&X-Amz-Signature=625dce029306e3ffba17b6cb57cac88752818502e38a4be8a26b2e973f6ee2d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWTC3Y3S%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdmjoz%2FgQ0rL635ijiOQj2tVjCokMeKFKpTsfyTmno1gIhAM9heVX1SVsx4ahca9YX2OfblWMCfbVKlBIIzubm2Ao1KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFzgDS%2Bl%2Bssq87jTsq3AO9F%2FGJ7981zR4fBKWdCu5fHvUlPPcOpE0gEsSIoXF8jXYEyS7OVwHDp9Ijc2lK%2FB6ArHvwbrz7er5sFUkvnjzSimV8Qo6QYKLK5UudHFQEeUwLYwO8dZlIuXjzX2IhJGpOdfWKcyZmnx1AnqYjzeQs6i8yTxXudV%2FqOb1PXLrx8SDGmtDtw3a6LwsMXh74cRlN4mdjZBtiMqzFj8V6YdslapLuq03%2FvRktY1o904E34oyaNtxURBmV7qs760EeBxIEHoclUBUn%2Bi5cochB0aEPT%2B62s0ohzZen9zIXNoBEb5wZcBMxA388S%2F68LprdL6wRhG0VlAtrdoAxwfYQdkpvuOCgq2w6OWsw5AvdqKRhsd34eevO%2F95dwJomXV62QhMbl0b9G13MnPN5phwp25oZJFVMBHApewhHxwEt588sps9eww5nLf6D2EhVrJJXuOkuradrPLyrvGm%2FMJ8NHd7zMz1WIiXrCEu8%2FZok2G3I%2Fw6vSElSzgS6R2f0oVVVA8RNWgr3iqcs3pXFsY%2B7ok8M94Lfl3qSy9slXC3QzuhR5%2BQClOkfVo9yQfNF9AMJ%2BQni5LOzEk1frIpFgsb34BeuKLjEu%2BuoczEouL6cZITZOOHzCDqe63UJCeKEiDD90ODEBjqkAdOJUUUpe%2FjqgBgBBP5v3T6frT8QWMKA7NnYbJwhcy3GScm4ZZGOQyKocKD8pUGgMFtUz08ltIgbXwW%2BPff6iTi%2Fo3YQtjCu63lab2W1tYbgm0l5S6Qc4YSkGxzDjOtlR4InJhIfC6ilt3VbNs7lncAFl6ZkNxRBDTYO3hq4J1dV%2Br3pnUQL1turvIQVNGR%2FzeJ%2F5gNm1xfgcA1nIlnLiyc0CgBm&X-Amz-Signature=404940eb947897c62c369843d34a517009d84ab11cf9214a798a9c19a2ef6ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGU6PW3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfVtiQ69sbEFuKMvpy%2Ft5F7XLNV0%2Bb%2BiyDIkLxp4EkzAiEAh%2F3%2FarCJrAYETC9koiC1Vwjh9d8b%2BBWhbnItl0MlrNYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGY14Ml7Rkh%2BudqVZCrcAy%2B5MJbaLX0lstAsz9VwaKWWMdzvA3nyJgwiN5IfN3Sj%2B1fLgWdqoUlv11rgVDKm5ZRPFSC4iCckRINmOeMW2Fm%2B5AzPvul82NY993WXN3ITOO9E%2Bu%2FXezTrZgaZskLUgGV4WlHHY7deWfRTUeMgPzGJgWpjZJhjpwR%2FNRQmILkxVlBmBLNM7zEl%2FwLUgin%2FTcbqG1gAGek0%2BnrYtIc0QIDNl%2BUbpxlz%2FfXDT%2FCe2KZijR1Ttjg%2F87ZTGP4eseYfxahxGhqClioMhnSYK0MpG%2FB6oA9S3V8rKfZkHcJvhXcLas755eke6lv9bD%2FabrHfBt%2FL3cFmHfc06UXSjuPNnKjTtZivpk%2B%2BUf0yMwHYz3Y3vcFQz1O1uXBISUr8n13lRE9z6cyQwFf6Gy2LcB5u%2FfFolCjfo20sRwBBVPWWU31LlcDBZCoUP7qxshT%2BTpAdd8wPe6WSwcLgJg3TX1CB8Xepdnnl7BTMSWMfAKB7f1mdni8rn3%2BeGUwn0O06AtIWovwvcY%2B2OumbTCcYsMwMTFnmzhepTO2R78AtHT4ZKpkH2%2F4uWK0c2skEtRbOjJqG7iDRJO9qktZYxYJyYnSWVjaFVs7nWexfOzSTkXhMq7ntH7d7CB2LII2CXTOEMJTR4MQGOqUB7UVaJ8NXbqGl0X1qdvFnbAMAdMZ4trsLNXWTYxnX%2FmdaKilZOT9H8qLSID5%2FtBQXXq9vsmVPiOH3H7t%2FwRJpJUGVU3VWiCP8CfU%2BK1KgUXHapa3%2FwlVY%2BfxYPxb7FPcnvF6l%2BveKlLb08B83sl6BwfhbjVEKKPlTsXwFmQyiGJQWjsBskpSuHWbsj%2BOjL40EzhbScMhPhs6%2BW9FXZ3v%2Fma2PhOl%2F&X-Amz-Signature=fd928e66124fc8d10e21c0c051571c3c8b0127031c82812836fc9daa49193123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ORQHDY5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWQP7pARPzL5PcLQ6HQWKQbIvf92%2BFwNu0R6uxn2yBHAiA599uI%2B5ckgUun%2B6m2zRpjq9XFX13VcxASealLk3RorSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZZZ0%2BinPEsItpac2KtwD4moxY0Jb%2FALfEMbSzJ0oiuDDRfMIn1p6cNiOPC6gCeDlIszfZ9KndDGgswXS2aUXzLbtHcbjEHaoMpPlGjfWNSvT%2B3tHT3WP%2BYtVvSTFZk5ct4BlpQRjKqLTzYsK6lYAhRP0mQroMkvULmXu5stmxNClH%2BQha49BzC8i7PVLQKpjfhDJL7vzFCOVgWTHxveNzEX0hNL53O96yn414qpK5pr07qDiDojWxMZzPGofCZnME1msC%2BSVRzfdDj13yhD64bGM2fJ1TiNg4NmhHNy6iyv1s%2F4%2FC8rumBBkaUSay%2FDcfzL0L%2FHOawq2xvRMx5Y3tHSBpMqk9FsdEvvc6%2F8iubhkiubcYaYaWV1gYXVGYwvIOEKleMGA4xwY9sgaEASGFsYy3DrklC6yHvQgZ0QYngScTuOAfz24%2FIJQT%2BZ1KY7xYvj9e0h2PTSMwo29I6ljUOvrxrS60wAvE94RZLPcaAJiGCRiTDLKPfMA5xzVEtxPcYReAIpzIYaB4NNHY0NJ7Orbhb%2BOzyve2z3IVdxAe0RUa3xUnOkTLPUcGg3QKpeyvD1Wm1wysd0NKpaCyICcwgho6wYAllSOEw%2Brs%2BLPruju60MIkQaql4HMC3HS2oAyKhqKea6rhW%2Fl3sUwn9HgxAY6pgFszP2piTglb4QBrKOkqzDTqE%2Fmzm%2F3jJ5G9hMuGXswTv%2BnpfZKTYjWe7jQ9T5gonjmFOa0lcvs3Uo26mUncoio16I5zXKsC5DSMZ%2F2Lx9JVQuSR%2FSmGVCfKrVFsX0r4ihMAUO%2BD7VB9IeX%2FfvLdKNRTJYU4zNs6wyqPwvYlg1WMKqTBd3aDHeJ1gkd22nsTutWIFJ%2B1HS%2Bj%2FFaKWW6imLeUV6PG6N5&X-Amz-Signature=d77107fb27802c3c91b9f4092be7dd6140fdcc2a38a224d839fd39f6117e81b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGU6PW3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfVtiQ69sbEFuKMvpy%2Ft5F7XLNV0%2Bb%2BiyDIkLxp4EkzAiEAh%2F3%2FarCJrAYETC9koiC1Vwjh9d8b%2BBWhbnItl0MlrNYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGY14Ml7Rkh%2BudqVZCrcAy%2B5MJbaLX0lstAsz9VwaKWWMdzvA3nyJgwiN5IfN3Sj%2B1fLgWdqoUlv11rgVDKm5ZRPFSC4iCckRINmOeMW2Fm%2B5AzPvul82NY993WXN3ITOO9E%2Bu%2FXezTrZgaZskLUgGV4WlHHY7deWfRTUeMgPzGJgWpjZJhjpwR%2FNRQmILkxVlBmBLNM7zEl%2FwLUgin%2FTcbqG1gAGek0%2BnrYtIc0QIDNl%2BUbpxlz%2FfXDT%2FCe2KZijR1Ttjg%2F87ZTGP4eseYfxahxGhqClioMhnSYK0MpG%2FB6oA9S3V8rKfZkHcJvhXcLas755eke6lv9bD%2FabrHfBt%2FL3cFmHfc06UXSjuPNnKjTtZivpk%2B%2BUf0yMwHYz3Y3vcFQz1O1uXBISUr8n13lRE9z6cyQwFf6Gy2LcB5u%2FfFolCjfo20sRwBBVPWWU31LlcDBZCoUP7qxshT%2BTpAdd8wPe6WSwcLgJg3TX1CB8Xepdnnl7BTMSWMfAKB7f1mdni8rn3%2BeGUwn0O06AtIWovwvcY%2B2OumbTCcYsMwMTFnmzhepTO2R78AtHT4ZKpkH2%2F4uWK0c2skEtRbOjJqG7iDRJO9qktZYxYJyYnSWVjaFVs7nWexfOzSTkXhMq7ntH7d7CB2LII2CXTOEMJTR4MQGOqUB7UVaJ8NXbqGl0X1qdvFnbAMAdMZ4trsLNXWTYxnX%2FmdaKilZOT9H8qLSID5%2FtBQXXq9vsmVPiOH3H7t%2FwRJpJUGVU3VWiCP8CfU%2BK1KgUXHapa3%2FwlVY%2BfxYPxb7FPcnvF6l%2BveKlLb08B83sl6BwfhbjVEKKPlTsXwFmQyiGJQWjsBskpSuHWbsj%2BOjL40EzhbScMhPhs6%2BW9FXZ3v%2Fma2PhOl%2F&X-Amz-Signature=4f7e2c3e28207dfe36c395d9d8e73c618887dad0f60ca8bb5995f9740e6f3017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGK3DGUU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZa0CZWzMXCMzsCz0AwL1NJ9RUsr7ejvpJTzJrZmK1fAIgIK06Hpp0Gm82oI74S42D5ivYfQsyqU7ji%2Bl7ch9HV3IqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdScI4ziO7FZBQXYircA6FepuGOr%2BUEnQU30IgeqMys%2FVZqBJNlXtCAWUbqL2Ed0wp7J3uWatOgFkVFydIAUWIzSQsUgAv54mvSr%2Fj08eurRHWHO%2FzikswNczWlLOqksc544UNVsJ%2F7QVQQPs0DDv72Hrmv4E0t4AaOmlIJ7mzVRBv1ZE%2Bf8d6WTJ7rh7yGRCLtnGLyPhVa%2B8nG%2B4eXUSvfl%2BEbPXzMIbhjPjzMGV8nz%2BBnhATpGi30hDJ9LIlDykLmsbwCKMac%2B%2FyBB%2BDvUzsfczry93d2S%2B%2BKaWGJOI0YxkFuQagCskp3ntmfJJt9kjEhOtoD4rrsK%2BsLnp3sTAHkv7KafhayNlanQ%2FfKnFHqX4FY5l4tqosu%2FrTmrbxZwpbvrcRk4tPEh04QNJisJjDzPTQsZyf3jpMVPpX0Hta0CHO6o%2Fcrom7y%2F1OTMnWRrvGxgPeLSDx0pS5JO9Sh7Em7EB1wkyD2Bv%2FaCBUhjksAVRdrOrEazHuAvZHVsWs5dquC5XDpsfsQI5o%2BeHx9rtGkk%2BN1VoJnTwY6eLGbCwnECccHIqhvP4QWCatqNcK6e9qfFSK0%2B8uBlj%2Fa%2BhxI%2FXh9SoWqs0ZGGEuddqrpMvBlWOb5pfH52yFq%2BVgTgH4rAD5seGI4NXB4956hML%2FR4MQGOqUBdvbB%2FubxPfZtfTE3eNj0P2Tjy%2FQ%2BQXo3Ymk1AFI2ugftdcDFhd6KQdFG%2FppsXg6Hbn3twyDnQoBhnTvmcVhcx82%2BrI54Tga61q6XIeMRt7rRSUuj2frNEE0IJqSJniEpqrzoDtkKaYenmodvj1Uv1eV%2BqHjZfNAPvLcPfJozPuZqcy%2F1XM2D2TuGab1Ho48te97dOrfRgQeP8urux%2FX3W2j%2FI8p8&X-Amz-Signature=e8803392cb1a543661a022788684a5cc6c07d292052ebd13c0dd7225378ef158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGU6PW3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfVtiQ69sbEFuKMvpy%2Ft5F7XLNV0%2Bb%2BiyDIkLxp4EkzAiEAh%2F3%2FarCJrAYETC9koiC1Vwjh9d8b%2BBWhbnItl0MlrNYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGY14Ml7Rkh%2BudqVZCrcAy%2B5MJbaLX0lstAsz9VwaKWWMdzvA3nyJgwiN5IfN3Sj%2B1fLgWdqoUlv11rgVDKm5ZRPFSC4iCckRINmOeMW2Fm%2B5AzPvul82NY993WXN3ITOO9E%2Bu%2FXezTrZgaZskLUgGV4WlHHY7deWfRTUeMgPzGJgWpjZJhjpwR%2FNRQmILkxVlBmBLNM7zEl%2FwLUgin%2FTcbqG1gAGek0%2BnrYtIc0QIDNl%2BUbpxlz%2FfXDT%2FCe2KZijR1Ttjg%2F87ZTGP4eseYfxahxGhqClioMhnSYK0MpG%2FB6oA9S3V8rKfZkHcJvhXcLas755eke6lv9bD%2FabrHfBt%2FL3cFmHfc06UXSjuPNnKjTtZivpk%2B%2BUf0yMwHYz3Y3vcFQz1O1uXBISUr8n13lRE9z6cyQwFf6Gy2LcB5u%2FfFolCjfo20sRwBBVPWWU31LlcDBZCoUP7qxshT%2BTpAdd8wPe6WSwcLgJg3TX1CB8Xepdnnl7BTMSWMfAKB7f1mdni8rn3%2BeGUwn0O06AtIWovwvcY%2B2OumbTCcYsMwMTFnmzhepTO2R78AtHT4ZKpkH2%2F4uWK0c2skEtRbOjJqG7iDRJO9qktZYxYJyYnSWVjaFVs7nWexfOzSTkXhMq7ntH7d7CB2LII2CXTOEMJTR4MQGOqUB7UVaJ8NXbqGl0X1qdvFnbAMAdMZ4trsLNXWTYxnX%2FmdaKilZOT9H8qLSID5%2FtBQXXq9vsmVPiOH3H7t%2FwRJpJUGVU3VWiCP8CfU%2BK1KgUXHapa3%2FwlVY%2BfxYPxb7FPcnvF6l%2BveKlLb08B83sl6BwfhbjVEKKPlTsXwFmQyiGJQWjsBskpSuHWbsj%2BOjL40EzhbScMhPhs6%2BW9FXZ3v%2Fma2PhOl%2F&X-Amz-Signature=82862f94fcfc4ef4de14f0e8dfa8e3f0991470abf16be3e61acecdbb06964ea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646IDNMGZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1HYk5NbFxQhCB4ZiGmqr2Mxmd6f0PKmxBKv0E0sjsgIhAN%2FPtYmNdzfGaEvjo9PzIuv4NxUyXhLChX3nTq0GJ6ATKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl67NK4azAgdYAjjEq3APRiWV97x5cV%2FYTuqLQVHrKhLyTTHn2t%2BJDkejc8SpNwDYs%2Bfz5PajFCl0Nra9oYoAFTZ582N9I0k52P%2F5%2F5z9DLcMfDoOQg9UQ4DeuYMbBcUtFRXDDcoF%2B6CDcYN%2FUuaSxpcxu%2BDJqfBRar97Q6yEG0mnW1quO0F%2BAm%2FWA7ldmkyh6sEXbg%2BBrZ7u%2B37YvWQnms%2BtoRIUGBZwXoZSkAACtLJRxhN9%2BOUt6ENFYIHkNqUYZ74FoWljvfGCnIaP10aNsg2ygy2a56UILa3zNXTDSUgEhUJKi6K3G1hqMW8s%2BpEZSHdXqY7JkNnRF9fExOsU1BeET8Y6bYqHwdTvZmvZUAeV5DmJmP2AUUcq43NW7FsegqaYHqEFNeKakPj%2Fo1s0X5KAVEehXuDCyg42UTbWKO8A%2BbGzu9t7Lsmp7ZuzGJAPGc7Yaopxg18tLYYko3rNeHBsgfGJbTI91PMCN3n5M8W8ltMEebHCN1fHm7HZAfGGBi8UudaVi%2FV7qVoca6q6kQN9WbPgBz3g1cWc5XJ%2Bpra7HallzNMuS7puxjiMUT8rmKGznmb148hzZnsuEnRSLSUQ2Fxvwm6h3DWamNn%2BXr0LcvRwDu%2BwvqQn4Y5VPV5TFRYAdhC7UcttlJDD20ODEBjqkAXtL5jxiBHkNViBuuxZzN0yzTebJGLj4sjk2F1ShZ%2F0CdfiSwxnxDsR0MjvWfR7eD2W4wpLyPko617CpEJ%2F472rrmY39%2Frxqq1O6TnTa%2FkCBV1x7MvaqX9y5two6QvezvxTsHdFD%2FUAdaTZmfQDIJwfDrAjhbrpRKjfjoiny4ILQ9XRzUawpGvCggtZzqrHHZ2wibp0S%2FC7GJzUFM74gzn0A7c9B&X-Amz-Signature=adbbca476503acf7f590ca2f9cb311c8870e1753500dbfe1a31c92682d88e7f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVMCBYW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFE610lNRh0GzDaBxioDwZlRxM8vavbHmUij9IzuJLt0AiAg1qHZoeqEAfESK%2B%2FjAeGT8Ldyi2A%2BRb8YYjot%2B3qGhyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkmnglvsNhz8M5iJMKtwDqS89tM%2BeNWlfFtvcLc34kajKXCrACPE%2B2Q51HBtxcrFd%2BAU3oKtYslobSfU0CSvGwjmNBJNY%2BfqElHgEaaY3XrRziliqN8oQx7Iw9TOtsO5UlDud136kHVC18HpLYzIZMA87hMRnFRth5TvuKqXw%2B7ArA39xg5hmWv396wgcz7iKNaTgoy3y1VKfXq8ER%2FMa1ufWLaC75Nfmg7GzANx4jgiEWSdhagpsbRljnPDOut3QNjSJfP34t4pTL7iL6LW6JSNxRO36n74NTykOyV1x0DhHD7L%2FRwl5NeX6P%2BKjqFqW8pw3X%2Bq%2FsOTlKmz450TKFpooor16gw6Gb9S50gn35md5fjJdeMaLkMNTBTrJPWxkwO5iIGxbMTeepFEY8Xo87US%2FTiC5PgavYpUyHV2ZQbwJiPLzlUPY4n%2FqkkMXe%2FA7QFsrut%2F%2Fn6zHBsxW01VB0g620cLzhSCR5AdcEaaJZYzJUDwvH%2Fumhi%2BhunLW8qJLZWePj71upzlRTAsTTBhmK%2ByyFzmxSb775eiHU44DMXfHbbkaGfjKBvq8P%2BAZlyECCnsnPFqhWaKsNJprLqrpWkz0cJ07NnqhofxVbPrV56%2B%2Fm25TW9Z8VD9U3rZkmultugeJb1%2BiWsrNuLMwwdHgxAY6pgHXrhT8LTpzWyZqwUAUobhZ17EKimaFfmHPAIG1%2FX2W5fDDMXuCaHuEexCayrpTGMPzMdh0vsnkD%2Bv7EtTDUNwf5SOcGGRnP0NGwtX2XKneVi0FEdkuAf4krlR76WyIdn%2Fk8eeZ78y%2BCzYs%2F%2FnWDvr2GvFbaY5ljnPj%2FRhN8KaJPv%2FXagE1mx95fbQWKzDw7XlBNOPuvjITm42yesA03Z50sMo9Y%2BJN&X-Amz-Signature=fe837f298dae2171a85bdea6ca8eb0094df066a00a73e8f4940f2d21c29dffb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW2MMWIB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPR7kQFAziYqoHXrTXB53a3viNslxdoePek%2BY0LEuglAIgIHlNgOvaKazTq5y6hUATOqDTWixwjJKGf%2FRv3bjZV9oqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmIhAGG1sepmm7iMCrcA1x1qM0uZZeaJIWg9QOSVzJ%2B7gHpF0988FDmJP2M0RuAf3EBlCew9nDQPTIi7bvQwTt5aLHvPSeSZ1BdTfu7Gyv%2FTOixma2QJ%2B8oUQXNBj6KpnGSVaFWed8Dfp%2Bxxh2X3CKoY0fsWfjsILVIy8GbyaSZYldLn9hZuIfKebOcjOUX7Hz%2FeM0v30YXdIVyXpgy6JLLDZil2TRl0%2ByzgG%2BULRIl9wFg5IE%2BQYZq1Hy7UUNAovUdTbqjFILMyBtO85SACJ%2Bw5w5s8g1Hlbi7n6dXLL9l%2FBA3wtJX1Z3EfbyRU0%2BQ1rMshQq1rMn8Tr41ULW9Pp8EjtBlzfL%2BUfRLIRSuHtUBZZSnJgrKXQOZfMq%2FGwoeeVwPyqH0%2FKAq5eLXKfoYFh7IW3ScJ1m35Z%2F5KIK55EzJl9Cox8aUmEnSWTIQoiDtufzOaZk1qHHjAaYJTXOL1dbVXP%2BEB6KCQsWZzEH8eLu8pVghvKqesa1E3HjMvBktX8qZWNytxpfGhZaP4HFb8dd%2BSNiZkkwuxC1MjiMCoa%2B9HeOyWdC%2B8YD%2BX6G2KEpvlWwOMuM1bCg7tHP%2Ft0w6nmYicENvtzBDxog%2F7sATfiEZ1Kjg4rud%2FG66g3jzpOK%2FoSlkUwo8%2BMXPza%2BfMNjR4MQGOqUBCrhFqjwBlOFCMqjqgAou9o49nMxB1FnkcDcVt%2FVdqPPJqYVGfzWRCSjXKCHbWZ4fL%2FcVVqxiOftTkV8uyfXug4CohDwaD0mi%2BNt0tTk7V18BFGrb6l0RVuz%2Fs5VhD8q9tYEL6tiE8jVMHEHYC5gRZPYoZGytTeYVdSIWZLxFw2CoI8Y21O8T%2F%2FEKx9JxGzUXdGEojG0gnvayrvCzAASDvQyufK7x&X-Amz-Signature=4164158e126ad852d10b168e3b4704f64e26f4d156b52ef55a5c47fb5621db2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WVKT4ME%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVaIRrdRhQSSDnR%2BmHhhU4jkDpMUAJpmJhH7SJrIOU2AIgWdnSoSsCCAYtfZhkqoaQ4gEe79UmmyFg1QxfuyDeftoqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3MG%2FumvIx54dYwoSrcAxRQaK8iDOiTJfy7b6WrLwZUv99UvgB66Z3uXr0XwLvVGUUo4TeQuIb4eQTVENIut5ESzKTLYlPIp3DC5Jh8Le9YJh%2Fl1mG1e1mYphJepEwmL%2BThYbO4%2FlNwkdDoWr41BQj1VngMXRApFeOI1Y8NNzbRXGVGhC0H089gQnsDfAxU5RsvUMTCQaw75qK%2BbpF7P2%2Br0n1HpeEgjcqtDYUsU0mnd6pJ9AosOXsI1371gtb1%2BC2xPwe6F0hgYal5Kjx%2Fd68NSysOLuxT9pzq%2BUaS8UEzWEDDScNb2qiSof6p8ykMpFJ3gXxZ5gmf%2BU2lfa%2BxGEZ5VFaEUhvsVhNljTOxcbmeK%2Baj731t3mBtvofirf3AQf3AyAdM4F9gSIt6pOZAvUjLY7FJPjHYBJKQAA6f2XEniF%2BRNMsfjQOFVjRzzZUnwH6x4FIA52y1kSd6ahe0vGn075UAZDpssnw90yq4QwEr1LPf49obLmEHsQlTzbXia%2F6ThylLbrx4XEsJv02EWKf%2FzqRc00oJZm90oclppN3k2fgobuO8ZBq04s1sOHJZH49jFOUOP5otk%2BlGFRy9Kbr2supcA3hsnOCdg7of5Ulh26NqsOatAZORAPzI2kj6mS1F%2BxxfSezmbhbSMP7Q4MQGOqUBpuVl9ffz0e9oUlq0e0%2F6VMbtTGVcazsNc6LGZOiQJ4Z6x7B93T1aK0%2F87G58IcBMUnS55f%2B5zaX0K097W3VFFRX0Eix2ElpFindtBlCb3OEF5Eek8ujZRVgCyilZelQqsJgZEkFhxzCyHzpj43RIrLN%2Fm1xSGeMO2ANqe%2BRglKj%2FJJHb8B8v6gJtFfNZ5Aq%2FQ6cSZxmORiMZYbC%2BQzdVqnICweGt&X-Amz-Signature=0a6b1a7202aea4bf6db4d9dc9dd72a4d74967902f2c496e93195df9eb9e43026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U62MUW7I%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1dTN7hxJ5MpXnzJsipMbqbulelAEUN5deyG5At5Jw3wIhANSXU%2BvZryzNRgeVSxajJYGE%2By%2BiEqwspmtWixDkBFPZKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjeasXrXhum3sbCjsq3APkR7pb50t4%2FHn08dgUWANm0botnWckRc91rrByAj1ale4sBAtz8Bp2Zvmt3U4FiTLf4m5r%2FwhWIGkyibl8YXYn99s%2FukqdeLPE3seGf%2BEJqBtYesjWf9tolOUTf6XV24YxlkN6ZPiZRp62rOjJneFXb6xE5m25vjnHIqL7OEE%2BJdg5ze%2FOkeD5cPcRyh8%2FSRWFV5PF8ME%2FGuZWyshxPz%2BxP0emWJcEA0oHDn2lVgt7bEAlvc%2FGg6To6g7XsSsTD%2BVBYgZf%2BOEYzMjfRkh3l9Usxa64vcfGoeMOu0PgMJwnvd1QaTf7Hmvj6pR33DRncBS70metKIZHusM5aFrdXSk8%2FepP4Au71jAPd2S8oo6XEJiOonGucHJrRB5iB2RVKNpN1%2FQDwhuOzqRJPjx3Itk0PUg14673e%2BO4bJnCsD75Lo1S60QIALtmrE0%2Fw6OleI%2BB2zjpaYa9n%2Foali7jloTag2zXgH9uZ3Ejh9y7jMI9LVRPZRIQqEabXEalE8W4s7TbtgB7UTszJKOKQeQUvMFduV5KlU4ihG64RdWBRQZc0BklhwqIxFTc2dL9UATxF6ebXrUO1TqdZRRQ39S%2BcKNy4EIrdGkfLW9V3Y2kry1hEqzQmtcw8Y1ch4%2BlQTCT0eDEBjqkATEXUE804xkjpBLOO%2F2i67NijaUAB5a%2F1RvL7Hkt9rT6%2FMio22r4U%2B0Epy1v9MRFAeowgv%2BG6icf3U4irMz49ro9iF7H6c2Q4rc8LXQ121NpkhhJ%2FpWvdeEReXyDH6xBt5M2y9eHwDOajrgMdiAX8upEemj0P3KgUI3TwwK%2FUXVA2GZSTuiP48zSDktA2JC3XjFYX8wAAwkzWUOfYkYTTNl4gGal&X-Amz-Signature=a455004c222440ded2981bd95ace871f15043fba14dec6bc351662111911879c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGU6PW3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfVtiQ69sbEFuKMvpy%2Ft5F7XLNV0%2Bb%2BiyDIkLxp4EkzAiEAh%2F3%2FarCJrAYETC9koiC1Vwjh9d8b%2BBWhbnItl0MlrNYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGY14Ml7Rkh%2BudqVZCrcAy%2B5MJbaLX0lstAsz9VwaKWWMdzvA3nyJgwiN5IfN3Sj%2B1fLgWdqoUlv11rgVDKm5ZRPFSC4iCckRINmOeMW2Fm%2B5AzPvul82NY993WXN3ITOO9E%2Bu%2FXezTrZgaZskLUgGV4WlHHY7deWfRTUeMgPzGJgWpjZJhjpwR%2FNRQmILkxVlBmBLNM7zEl%2FwLUgin%2FTcbqG1gAGek0%2BnrYtIc0QIDNl%2BUbpxlz%2FfXDT%2FCe2KZijR1Ttjg%2F87ZTGP4eseYfxahxGhqClioMhnSYK0MpG%2FB6oA9S3V8rKfZkHcJvhXcLas755eke6lv9bD%2FabrHfBt%2FL3cFmHfc06UXSjuPNnKjTtZivpk%2B%2BUf0yMwHYz3Y3vcFQz1O1uXBISUr8n13lRE9z6cyQwFf6Gy2LcB5u%2FfFolCjfo20sRwBBVPWWU31LlcDBZCoUP7qxshT%2BTpAdd8wPe6WSwcLgJg3TX1CB8Xepdnnl7BTMSWMfAKB7f1mdni8rn3%2BeGUwn0O06AtIWovwvcY%2B2OumbTCcYsMwMTFnmzhepTO2R78AtHT4ZKpkH2%2F4uWK0c2skEtRbOjJqG7iDRJO9qktZYxYJyYnSWVjaFVs7nWexfOzSTkXhMq7ntH7d7CB2LII2CXTOEMJTR4MQGOqUB7UVaJ8NXbqGl0X1qdvFnbAMAdMZ4trsLNXWTYxnX%2FmdaKilZOT9H8qLSID5%2FtBQXXq9vsmVPiOH3H7t%2FwRJpJUGVU3VWiCP8CfU%2BK1KgUXHapa3%2FwlVY%2BfxYPxb7FPcnvF6l%2BveKlLb08B83sl6BwfhbjVEKKPlTsXwFmQyiGJQWjsBskpSuHWbsj%2BOjL40EzhbScMhPhs6%2BW9FXZ3v%2Fma2PhOl%2F&X-Amz-Signature=aae2d938f41621ded977fcd73fb0830687da51ffd56b7cbb5700927a911ecd6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGU6PW3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfVtiQ69sbEFuKMvpy%2Ft5F7XLNV0%2Bb%2BiyDIkLxp4EkzAiEAh%2F3%2FarCJrAYETC9koiC1Vwjh9d8b%2BBWhbnItl0MlrNYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGY14Ml7Rkh%2BudqVZCrcAy%2B5MJbaLX0lstAsz9VwaKWWMdzvA3nyJgwiN5IfN3Sj%2B1fLgWdqoUlv11rgVDKm5ZRPFSC4iCckRINmOeMW2Fm%2B5AzPvul82NY993WXN3ITOO9E%2Bu%2FXezTrZgaZskLUgGV4WlHHY7deWfRTUeMgPzGJgWpjZJhjpwR%2FNRQmILkxVlBmBLNM7zEl%2FwLUgin%2FTcbqG1gAGek0%2BnrYtIc0QIDNl%2BUbpxlz%2FfXDT%2FCe2KZijR1Ttjg%2F87ZTGP4eseYfxahxGhqClioMhnSYK0MpG%2FB6oA9S3V8rKfZkHcJvhXcLas755eke6lv9bD%2FabrHfBt%2FL3cFmHfc06UXSjuPNnKjTtZivpk%2B%2BUf0yMwHYz3Y3vcFQz1O1uXBISUr8n13lRE9z6cyQwFf6Gy2LcB5u%2FfFolCjfo20sRwBBVPWWU31LlcDBZCoUP7qxshT%2BTpAdd8wPe6WSwcLgJg3TX1CB8Xepdnnl7BTMSWMfAKB7f1mdni8rn3%2BeGUwn0O06AtIWovwvcY%2B2OumbTCcYsMwMTFnmzhepTO2R78AtHT4ZKpkH2%2F4uWK0c2skEtRbOjJqG7iDRJO9qktZYxYJyYnSWVjaFVs7nWexfOzSTkXhMq7ntH7d7CB2LII2CXTOEMJTR4MQGOqUB7UVaJ8NXbqGl0X1qdvFnbAMAdMZ4trsLNXWTYxnX%2FmdaKilZOT9H8qLSID5%2FtBQXXq9vsmVPiOH3H7t%2FwRJpJUGVU3VWiCP8CfU%2BK1KgUXHapa3%2FwlVY%2BfxYPxb7FPcnvF6l%2BveKlLb08B83sl6BwfhbjVEKKPlTsXwFmQyiGJQWjsBskpSuHWbsj%2BOjL40EzhbScMhPhs6%2BW9FXZ3v%2Fma2PhOl%2F&X-Amz-Signature=a442861220e73e8ff88c9eaee729e2bc3c1f307d607a8785abbb238315572f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCOXHW5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgxcQoOM%2FgmTE5Ut6Y6MgEMZG3E3H5oGWskugqVZwrNQIhAMbd2xzaBMuKXRZhQ6JSvumWp49WWpRa0gDPGKQeMGcyKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9UlgqIPfMYGbeeXsq3AMtVYQ6Yz7tzcYCnHAoXp8DaFQr9KbLKsd%2BSiJWhkP5R6wCKRzvwd29IrsFeTYCb57zzz66%2F5bFs7LOdiwcsB4yAwr6o7Cc9THut%2B%2BBIESFHcbmHD%2FTM9gA0Of5tvOrJHWvDm%2B%2FFLnpiSUwtADp33fE86c71C4TPdQmHL%2BxVXNs5Qd3q%2BRyYLDLELQ3APut9U3pwHJztaZ68TASOp0kXqceq05HT60OAJwD4Gl%2FrpowtMQNnoX3I3EbwULzdoIdXONvrMpRIi%2F%2Bab7dxsJqFPfv28Wa1l71uPyHLQKoYpimECT6TQlsp9NlR92Uf3Uo4rNas1CRLllvkmCIyteJTatd9ePnsDB1VvlCyA51sAYxl2pdukaO%2Ff7l9SECIaik4BlpbCA4VNiGNGQHVCn1%2BdyynAMy8FBHC%2Bko%2BsZdRgK6zR%2BNUxBvzPmJ7Lw6R0Omoca3hdi04WlefSlBFJf3w%2BGSzWFl5OueY8LafEjNxVk78WoZavm35gsh7j7mJg4NOVIqClmAB4Svlx2RIUgq%2Bifd9fuKDD09Yuz8mYfSXedhhc2VgStgpdJfEivrqHyPD6AWWoN%2BFSUxANpIePE3%2BFrnb47PtqsXTuyXXcP3a5AwjVqNotZj1ZVWTiRsXTDW0eDEBjqkAerMx%2BsKmWQARXXlJT0mqFoX8N7NoCADOwTlmH92YsygJzWVX803R32zjCzmJRWslxBmiM1jY2HYcC2j9UnYUbTwWHH6JNxXiq0RersmhbiNx45Kx36%2Bf6AHwQGHEPPIn1JMAu8RQehhrALlyINEx0RiSPUsIVm3UNa%2FFoxlEcQWciDVxXiK%2FyGdWW8M7JVvdDGbXyKpTWhKbperZeIA7yXxRZu9&X-Amz-Signature=34609eb8e40157bf305c1ef6839ba00ae3fe9a6ef9c0f6f37c928c91d494fdf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCOXHW5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgxcQoOM%2FgmTE5Ut6Y6MgEMZG3E3H5oGWskugqVZwrNQIhAMbd2xzaBMuKXRZhQ6JSvumWp49WWpRa0gDPGKQeMGcyKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9UlgqIPfMYGbeeXsq3AMtVYQ6Yz7tzcYCnHAoXp8DaFQr9KbLKsd%2BSiJWhkP5R6wCKRzvwd29IrsFeTYCb57zzz66%2F5bFs7LOdiwcsB4yAwr6o7Cc9THut%2B%2BBIESFHcbmHD%2FTM9gA0Of5tvOrJHWvDm%2B%2FFLnpiSUwtADp33fE86c71C4TPdQmHL%2BxVXNs5Qd3q%2BRyYLDLELQ3APut9U3pwHJztaZ68TASOp0kXqceq05HT60OAJwD4Gl%2FrpowtMQNnoX3I3EbwULzdoIdXONvrMpRIi%2F%2Bab7dxsJqFPfv28Wa1l71uPyHLQKoYpimECT6TQlsp9NlR92Uf3Uo4rNas1CRLllvkmCIyteJTatd9ePnsDB1VvlCyA51sAYxl2pdukaO%2Ff7l9SECIaik4BlpbCA4VNiGNGQHVCn1%2BdyynAMy8FBHC%2Bko%2BsZdRgK6zR%2BNUxBvzPmJ7Lw6R0Omoca3hdi04WlefSlBFJf3w%2BGSzWFl5OueY8LafEjNxVk78WoZavm35gsh7j7mJg4NOVIqClmAB4Svlx2RIUgq%2Bifd9fuKDD09Yuz8mYfSXedhhc2VgStgpdJfEivrqHyPD6AWWoN%2BFSUxANpIePE3%2BFrnb47PtqsXTuyXXcP3a5AwjVqNotZj1ZVWTiRsXTDW0eDEBjqkAerMx%2BsKmWQARXXlJT0mqFoX8N7NoCADOwTlmH92YsygJzWVX803R32zjCzmJRWslxBmiM1jY2HYcC2j9UnYUbTwWHH6JNxXiq0RersmhbiNx45Kx36%2Bf6AHwQGHEPPIn1JMAu8RQehhrALlyINEx0RiSPUsIVm3UNa%2FFoxlEcQWciDVxXiK%2FyGdWW8M7JVvdDGbXyKpTWhKbperZeIA7yXxRZu9&X-Amz-Signature=e3b8ccce8bf1b69e4852c9a116f09a74ded4c187d4696571d5f7070023e69bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCOXHW5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgxcQoOM%2FgmTE5Ut6Y6MgEMZG3E3H5oGWskugqVZwrNQIhAMbd2xzaBMuKXRZhQ6JSvumWp49WWpRa0gDPGKQeMGcyKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9UlgqIPfMYGbeeXsq3AMtVYQ6Yz7tzcYCnHAoXp8DaFQr9KbLKsd%2BSiJWhkP5R6wCKRzvwd29IrsFeTYCb57zzz66%2F5bFs7LOdiwcsB4yAwr6o7Cc9THut%2B%2BBIESFHcbmHD%2FTM9gA0Of5tvOrJHWvDm%2B%2FFLnpiSUwtADp33fE86c71C4TPdQmHL%2BxVXNs5Qd3q%2BRyYLDLELQ3APut9U3pwHJztaZ68TASOp0kXqceq05HT60OAJwD4Gl%2FrpowtMQNnoX3I3EbwULzdoIdXONvrMpRIi%2F%2Bab7dxsJqFPfv28Wa1l71uPyHLQKoYpimECT6TQlsp9NlR92Uf3Uo4rNas1CRLllvkmCIyteJTatd9ePnsDB1VvlCyA51sAYxl2pdukaO%2Ff7l9SECIaik4BlpbCA4VNiGNGQHVCn1%2BdyynAMy8FBHC%2Bko%2BsZdRgK6zR%2BNUxBvzPmJ7Lw6R0Omoca3hdi04WlefSlBFJf3w%2BGSzWFl5OueY8LafEjNxVk78WoZavm35gsh7j7mJg4NOVIqClmAB4Svlx2RIUgq%2Bifd9fuKDD09Yuz8mYfSXedhhc2VgStgpdJfEivrqHyPD6AWWoN%2BFSUxANpIePE3%2BFrnb47PtqsXTuyXXcP3a5AwjVqNotZj1ZVWTiRsXTDW0eDEBjqkAerMx%2BsKmWQARXXlJT0mqFoX8N7NoCADOwTlmH92YsygJzWVX803R32zjCzmJRWslxBmiM1jY2HYcC2j9UnYUbTwWHH6JNxXiq0RersmhbiNx45Kx36%2Bf6AHwQGHEPPIn1JMAu8RQehhrALlyINEx0RiSPUsIVm3UNa%2FFoxlEcQWciDVxXiK%2FyGdWW8M7JVvdDGbXyKpTWhKbperZeIA7yXxRZu9&X-Amz-Signature=6f81f158af9786253d2d569b92f2c9c32abdc2bd58bf4f704771fe17140c0815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCOXHW5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgxcQoOM%2FgmTE5Ut6Y6MgEMZG3E3H5oGWskugqVZwrNQIhAMbd2xzaBMuKXRZhQ6JSvumWp49WWpRa0gDPGKQeMGcyKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9UlgqIPfMYGbeeXsq3AMtVYQ6Yz7tzcYCnHAoXp8DaFQr9KbLKsd%2BSiJWhkP5R6wCKRzvwd29IrsFeTYCb57zzz66%2F5bFs7LOdiwcsB4yAwr6o7Cc9THut%2B%2BBIESFHcbmHD%2FTM9gA0Of5tvOrJHWvDm%2B%2FFLnpiSUwtADp33fE86c71C4TPdQmHL%2BxVXNs5Qd3q%2BRyYLDLELQ3APut9U3pwHJztaZ68TASOp0kXqceq05HT60OAJwD4Gl%2FrpowtMQNnoX3I3EbwULzdoIdXONvrMpRIi%2F%2Bab7dxsJqFPfv28Wa1l71uPyHLQKoYpimECT6TQlsp9NlR92Uf3Uo4rNas1CRLllvkmCIyteJTatd9ePnsDB1VvlCyA51sAYxl2pdukaO%2Ff7l9SECIaik4BlpbCA4VNiGNGQHVCn1%2BdyynAMy8FBHC%2Bko%2BsZdRgK6zR%2BNUxBvzPmJ7Lw6R0Omoca3hdi04WlefSlBFJf3w%2BGSzWFl5OueY8LafEjNxVk78WoZavm35gsh7j7mJg4NOVIqClmAB4Svlx2RIUgq%2Bifd9fuKDD09Yuz8mYfSXedhhc2VgStgpdJfEivrqHyPD6AWWoN%2BFSUxANpIePE3%2BFrnb47PtqsXTuyXXcP3a5AwjVqNotZj1ZVWTiRsXTDW0eDEBjqkAerMx%2BsKmWQARXXlJT0mqFoX8N7NoCADOwTlmH92YsygJzWVX803R32zjCzmJRWslxBmiM1jY2HYcC2j9UnYUbTwWHH6JNxXiq0RersmhbiNx45Kx36%2Bf6AHwQGHEPPIn1JMAu8RQehhrALlyINEx0RiSPUsIVm3UNa%2FFoxlEcQWciDVxXiK%2FyGdWW8M7JVvdDGbXyKpTWhKbperZeIA7yXxRZu9&X-Amz-Signature=05da15643c1c07c0e12554d54f04036ae0ee46ac333c33d4d0beb71b78bc6cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCOXHW5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgxcQoOM%2FgmTE5Ut6Y6MgEMZG3E3H5oGWskugqVZwrNQIhAMbd2xzaBMuKXRZhQ6JSvumWp49WWpRa0gDPGKQeMGcyKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9UlgqIPfMYGbeeXsq3AMtVYQ6Yz7tzcYCnHAoXp8DaFQr9KbLKsd%2BSiJWhkP5R6wCKRzvwd29IrsFeTYCb57zzz66%2F5bFs7LOdiwcsB4yAwr6o7Cc9THut%2B%2BBIESFHcbmHD%2FTM9gA0Of5tvOrJHWvDm%2B%2FFLnpiSUwtADp33fE86c71C4TPdQmHL%2BxVXNs5Qd3q%2BRyYLDLELQ3APut9U3pwHJztaZ68TASOp0kXqceq05HT60OAJwD4Gl%2FrpowtMQNnoX3I3EbwULzdoIdXONvrMpRIi%2F%2Bab7dxsJqFPfv28Wa1l71uPyHLQKoYpimECT6TQlsp9NlR92Uf3Uo4rNas1CRLllvkmCIyteJTatd9ePnsDB1VvlCyA51sAYxl2pdukaO%2Ff7l9SECIaik4BlpbCA4VNiGNGQHVCn1%2BdyynAMy8FBHC%2Bko%2BsZdRgK6zR%2BNUxBvzPmJ7Lw6R0Omoca3hdi04WlefSlBFJf3w%2BGSzWFl5OueY8LafEjNxVk78WoZavm35gsh7j7mJg4NOVIqClmAB4Svlx2RIUgq%2Bifd9fuKDD09Yuz8mYfSXedhhc2VgStgpdJfEivrqHyPD6AWWoN%2BFSUxANpIePE3%2BFrnb47PtqsXTuyXXcP3a5AwjVqNotZj1ZVWTiRsXTDW0eDEBjqkAerMx%2BsKmWQARXXlJT0mqFoX8N7NoCADOwTlmH92YsygJzWVX803R32zjCzmJRWslxBmiM1jY2HYcC2j9UnYUbTwWHH6JNxXiq0RersmhbiNx45Kx36%2Bf6AHwQGHEPPIn1JMAu8RQehhrALlyINEx0RiSPUsIVm3UNa%2FFoxlEcQWciDVxXiK%2FyGdWW8M7JVvdDGbXyKpTWhKbperZeIA7yXxRZu9&X-Amz-Signature=2c0fcdc57b93a58bbf9307b05694c3fd05cf96d022fd6dc0b2c6acc0499fb33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCOXHW5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgxcQoOM%2FgmTE5Ut6Y6MgEMZG3E3H5oGWskugqVZwrNQIhAMbd2xzaBMuKXRZhQ6JSvumWp49WWpRa0gDPGKQeMGcyKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9UlgqIPfMYGbeeXsq3AMtVYQ6Yz7tzcYCnHAoXp8DaFQr9KbLKsd%2BSiJWhkP5R6wCKRzvwd29IrsFeTYCb57zzz66%2F5bFs7LOdiwcsB4yAwr6o7Cc9THut%2B%2BBIESFHcbmHD%2FTM9gA0Of5tvOrJHWvDm%2B%2FFLnpiSUwtADp33fE86c71C4TPdQmHL%2BxVXNs5Qd3q%2BRyYLDLELQ3APut9U3pwHJztaZ68TASOp0kXqceq05HT60OAJwD4Gl%2FrpowtMQNnoX3I3EbwULzdoIdXONvrMpRIi%2F%2Bab7dxsJqFPfv28Wa1l71uPyHLQKoYpimECT6TQlsp9NlR92Uf3Uo4rNas1CRLllvkmCIyteJTatd9ePnsDB1VvlCyA51sAYxl2pdukaO%2Ff7l9SECIaik4BlpbCA4VNiGNGQHVCn1%2BdyynAMy8FBHC%2Bko%2BsZdRgK6zR%2BNUxBvzPmJ7Lw6R0Omoca3hdi04WlefSlBFJf3w%2BGSzWFl5OueY8LafEjNxVk78WoZavm35gsh7j7mJg4NOVIqClmAB4Svlx2RIUgq%2Bifd9fuKDD09Yuz8mYfSXedhhc2VgStgpdJfEivrqHyPD6AWWoN%2BFSUxANpIePE3%2BFrnb47PtqsXTuyXXcP3a5AwjVqNotZj1ZVWTiRsXTDW0eDEBjqkAerMx%2BsKmWQARXXlJT0mqFoX8N7NoCADOwTlmH92YsygJzWVX803R32zjCzmJRWslxBmiM1jY2HYcC2j9UnYUbTwWHH6JNxXiq0RersmhbiNx45Kx36%2Bf6AHwQGHEPPIn1JMAu8RQehhrALlyINEx0RiSPUsIVm3UNa%2FFoxlEcQWciDVxXiK%2FyGdWW8M7JVvdDGbXyKpTWhKbperZeIA7yXxRZu9&X-Amz-Signature=4da0cc36174e1b824f530f5888320d4b1873dd6c83a06bc2d3f9b8da30628ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCOXHW5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgxcQoOM%2FgmTE5Ut6Y6MgEMZG3E3H5oGWskugqVZwrNQIhAMbd2xzaBMuKXRZhQ6JSvumWp49WWpRa0gDPGKQeMGcyKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9UlgqIPfMYGbeeXsq3AMtVYQ6Yz7tzcYCnHAoXp8DaFQr9KbLKsd%2BSiJWhkP5R6wCKRzvwd29IrsFeTYCb57zzz66%2F5bFs7LOdiwcsB4yAwr6o7Cc9THut%2B%2BBIESFHcbmHD%2FTM9gA0Of5tvOrJHWvDm%2B%2FFLnpiSUwtADp33fE86c71C4TPdQmHL%2BxVXNs5Qd3q%2BRyYLDLELQ3APut9U3pwHJztaZ68TASOp0kXqceq05HT60OAJwD4Gl%2FrpowtMQNnoX3I3EbwULzdoIdXONvrMpRIi%2F%2Bab7dxsJqFPfv28Wa1l71uPyHLQKoYpimECT6TQlsp9NlR92Uf3Uo4rNas1CRLllvkmCIyteJTatd9ePnsDB1VvlCyA51sAYxl2pdukaO%2Ff7l9SECIaik4BlpbCA4VNiGNGQHVCn1%2BdyynAMy8FBHC%2Bko%2BsZdRgK6zR%2BNUxBvzPmJ7Lw6R0Omoca3hdi04WlefSlBFJf3w%2BGSzWFl5OueY8LafEjNxVk78WoZavm35gsh7j7mJg4NOVIqClmAB4Svlx2RIUgq%2Bifd9fuKDD09Yuz8mYfSXedhhc2VgStgpdJfEivrqHyPD6AWWoN%2BFSUxANpIePE3%2BFrnb47PtqsXTuyXXcP3a5AwjVqNotZj1ZVWTiRsXTDW0eDEBjqkAerMx%2BsKmWQARXXlJT0mqFoX8N7NoCADOwTlmH92YsygJzWVX803R32zjCzmJRWslxBmiM1jY2HYcC2j9UnYUbTwWHH6JNxXiq0RersmhbiNx45Kx36%2Bf6AHwQGHEPPIn1JMAu8RQehhrALlyINEx0RiSPUsIVm3UNa%2FFoxlEcQWciDVxXiK%2FyGdWW8M7JVvdDGbXyKpTWhKbperZeIA7yXxRZu9&X-Amz-Signature=6f81f158af9786253d2d569b92f2c9c32abdc2bd58bf4f704771fe17140c0815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCOXHW5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgxcQoOM%2FgmTE5Ut6Y6MgEMZG3E3H5oGWskugqVZwrNQIhAMbd2xzaBMuKXRZhQ6JSvumWp49WWpRa0gDPGKQeMGcyKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9UlgqIPfMYGbeeXsq3AMtVYQ6Yz7tzcYCnHAoXp8DaFQr9KbLKsd%2BSiJWhkP5R6wCKRzvwd29IrsFeTYCb57zzz66%2F5bFs7LOdiwcsB4yAwr6o7Cc9THut%2B%2BBIESFHcbmHD%2FTM9gA0Of5tvOrJHWvDm%2B%2FFLnpiSUwtADp33fE86c71C4TPdQmHL%2BxVXNs5Qd3q%2BRyYLDLELQ3APut9U3pwHJztaZ68TASOp0kXqceq05HT60OAJwD4Gl%2FrpowtMQNnoX3I3EbwULzdoIdXONvrMpRIi%2F%2Bab7dxsJqFPfv28Wa1l71uPyHLQKoYpimECT6TQlsp9NlR92Uf3Uo4rNas1CRLllvkmCIyteJTatd9ePnsDB1VvlCyA51sAYxl2pdukaO%2Ff7l9SECIaik4BlpbCA4VNiGNGQHVCn1%2BdyynAMy8FBHC%2Bko%2BsZdRgK6zR%2BNUxBvzPmJ7Lw6R0Omoca3hdi04WlefSlBFJf3w%2BGSzWFl5OueY8LafEjNxVk78WoZavm35gsh7j7mJg4NOVIqClmAB4Svlx2RIUgq%2Bifd9fuKDD09Yuz8mYfSXedhhc2VgStgpdJfEivrqHyPD6AWWoN%2BFSUxANpIePE3%2BFrnb47PtqsXTuyXXcP3a5AwjVqNotZj1ZVWTiRsXTDW0eDEBjqkAerMx%2BsKmWQARXXlJT0mqFoX8N7NoCADOwTlmH92YsygJzWVX803R32zjCzmJRWslxBmiM1jY2HYcC2j9UnYUbTwWHH6JNxXiq0RersmhbiNx45Kx36%2Bf6AHwQGHEPPIn1JMAu8RQehhrALlyINEx0RiSPUsIVm3UNa%2FFoxlEcQWciDVxXiK%2FyGdWW8M7JVvdDGbXyKpTWhKbperZeIA7yXxRZu9&X-Amz-Signature=524682db7f27837be27fc825a58ce9458be1064a479030e5dfc111f78bae2d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCOXHW5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgxcQoOM%2FgmTE5Ut6Y6MgEMZG3E3H5oGWskugqVZwrNQIhAMbd2xzaBMuKXRZhQ6JSvumWp49WWpRa0gDPGKQeMGcyKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9UlgqIPfMYGbeeXsq3AMtVYQ6Yz7tzcYCnHAoXp8DaFQr9KbLKsd%2BSiJWhkP5R6wCKRzvwd29IrsFeTYCb57zzz66%2F5bFs7LOdiwcsB4yAwr6o7Cc9THut%2B%2BBIESFHcbmHD%2FTM9gA0Of5tvOrJHWvDm%2B%2FFLnpiSUwtADp33fE86c71C4TPdQmHL%2BxVXNs5Qd3q%2BRyYLDLELQ3APut9U3pwHJztaZ68TASOp0kXqceq05HT60OAJwD4Gl%2FrpowtMQNnoX3I3EbwULzdoIdXONvrMpRIi%2F%2Bab7dxsJqFPfv28Wa1l71uPyHLQKoYpimECT6TQlsp9NlR92Uf3Uo4rNas1CRLllvkmCIyteJTatd9ePnsDB1VvlCyA51sAYxl2pdukaO%2Ff7l9SECIaik4BlpbCA4VNiGNGQHVCn1%2BdyynAMy8FBHC%2Bko%2BsZdRgK6zR%2BNUxBvzPmJ7Lw6R0Omoca3hdi04WlefSlBFJf3w%2BGSzWFl5OueY8LafEjNxVk78WoZavm35gsh7j7mJg4NOVIqClmAB4Svlx2RIUgq%2Bifd9fuKDD09Yuz8mYfSXedhhc2VgStgpdJfEivrqHyPD6AWWoN%2BFSUxANpIePE3%2BFrnb47PtqsXTuyXXcP3a5AwjVqNotZj1ZVWTiRsXTDW0eDEBjqkAerMx%2BsKmWQARXXlJT0mqFoX8N7NoCADOwTlmH92YsygJzWVX803R32zjCzmJRWslxBmiM1jY2HYcC2j9UnYUbTwWHH6JNxXiq0RersmhbiNx45Kx36%2Bf6AHwQGHEPPIn1JMAu8RQehhrALlyINEx0RiSPUsIVm3UNa%2FFoxlEcQWciDVxXiK%2FyGdWW8M7JVvdDGbXyKpTWhKbperZeIA7yXxRZu9&X-Amz-Signature=f16ef97a8e81a598bd5de90a699616a80226e8a4ac63358dc9207573749a29b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCOXHW5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgxcQoOM%2FgmTE5Ut6Y6MgEMZG3E3H5oGWskugqVZwrNQIhAMbd2xzaBMuKXRZhQ6JSvumWp49WWpRa0gDPGKQeMGcyKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9UlgqIPfMYGbeeXsq3AMtVYQ6Yz7tzcYCnHAoXp8DaFQr9KbLKsd%2BSiJWhkP5R6wCKRzvwd29IrsFeTYCb57zzz66%2F5bFs7LOdiwcsB4yAwr6o7Cc9THut%2B%2BBIESFHcbmHD%2FTM9gA0Of5tvOrJHWvDm%2B%2FFLnpiSUwtADp33fE86c71C4TPdQmHL%2BxVXNs5Qd3q%2BRyYLDLELQ3APut9U3pwHJztaZ68TASOp0kXqceq05HT60OAJwD4Gl%2FrpowtMQNnoX3I3EbwULzdoIdXONvrMpRIi%2F%2Bab7dxsJqFPfv28Wa1l71uPyHLQKoYpimECT6TQlsp9NlR92Uf3Uo4rNas1CRLllvkmCIyteJTatd9ePnsDB1VvlCyA51sAYxl2pdukaO%2Ff7l9SECIaik4BlpbCA4VNiGNGQHVCn1%2BdyynAMy8FBHC%2Bko%2BsZdRgK6zR%2BNUxBvzPmJ7Lw6R0Omoca3hdi04WlefSlBFJf3w%2BGSzWFl5OueY8LafEjNxVk78WoZavm35gsh7j7mJg4NOVIqClmAB4Svlx2RIUgq%2Bifd9fuKDD09Yuz8mYfSXedhhc2VgStgpdJfEivrqHyPD6AWWoN%2BFSUxANpIePE3%2BFrnb47PtqsXTuyXXcP3a5AwjVqNotZj1ZVWTiRsXTDW0eDEBjqkAerMx%2BsKmWQARXXlJT0mqFoX8N7NoCADOwTlmH92YsygJzWVX803R32zjCzmJRWslxBmiM1jY2HYcC2j9UnYUbTwWHH6JNxXiq0RersmhbiNx45Kx36%2Bf6AHwQGHEPPIn1JMAu8RQehhrALlyINEx0RiSPUsIVm3UNa%2FFoxlEcQWciDVxXiK%2FyGdWW8M7JVvdDGbXyKpTWhKbperZeIA7yXxRZu9&X-Amz-Signature=013619bca495e68c8dafb7dba38fe35afd066d93b2413e32f8563921666999bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
