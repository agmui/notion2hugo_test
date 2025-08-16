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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBKFAXL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEJaGTGbEFA3DISADJLauGqkIA6IEwh%2F%2BGiNow3H6m92AiEAmNCGqMgN9Kug2ElXoBK3VUboFIj1eSxqRhszdfyEFp8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMs%2By8mQud0RNM6wlyrcA%2BLM6tQ%2B1tEjgNXlWgmR36S%2Fn5LvQZUvMvNCZup5pNCgx%2BQDtBzEIhJrIoOzxrXXkN8LhMOfvRQywiQpqh2BeEzJbhJywdcgoNzl8P2csNOd6xKDPRmTcUfH6IC99AOxXIVqYPrs%2FS%2BoKbmHyrr4NYeo%2BtidESec4pL5S88sJZOAPAu3MRPw9%2BnTSBSQsV%2BFcfF4NVBBuao5D%2FjFy2%2Bh16GWhAprWXM71aqQlb%2FEUkJKy5ulBw4mNYrY1XTwd1qnB0NIh5Y2KYdbx4YeT9bwvcXOVZiRzGzjoETJOlEbUP8qXWbaE8aF3IhFFr%2FlsLN4Uyh80%2BG%2F71Ct%2BoxKFSCnm1HPWDL1S6QubeNp9Ju85p0EJ9Y2nlcgCBeIB4dYXsq2Edlaa35UmAdpJRxxf0Mc5RSsFbucdr1%2Bnuu%2BQsSfwNv7C5iBpY0hJOEPcmiGIHbqLJkz4hWQweSgwzt%2BrD5WGe9B3tzokEcd6LHetxtsrffxMn0kZdjt%2FmQsnPob2JZNQumSup5QENtoXA%2FtjGb7j7Q2x8ChdZl5R3XdwUH8Zxqejd2BzP%2FuNY9ecuDiQFsB9KeTWBsgdQkJgkBxBvRGyUW%2Fcf8ayjfpDjGuqEVKGyoln%2BpxXi%2Fk9xYXX4DdMNf3gMUGOqUB3m3PzSPTCE%2BQ%2F6wGwaY71rN1F14fghCx6NTRleYh163kyYUi4zT3saJ3wbOLYJbVJZJIk7h%2BzeeuZNTlZ%2B8uhUzAVGVPMhOdTJXO8ff7V3o1Jc%2FHKaDoadG%2F9prsEIpMrsVziMWkgplgOqDxzMqhtgIXvWx0D8kiTt2XsBUWw1sUcrXIBINsBTcSnxaPzN0TVi4umvZFVw48fjFLqV7r3JsxzpRj&X-Amz-Signature=e46fa14af6112d1b5bb95dbf11e9b6ec8b8834a84c12cbe3d9a4ad258f9b1231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBKFAXL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEJaGTGbEFA3DISADJLauGqkIA6IEwh%2F%2BGiNow3H6m92AiEAmNCGqMgN9Kug2ElXoBK3VUboFIj1eSxqRhszdfyEFp8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMs%2By8mQud0RNM6wlyrcA%2BLM6tQ%2B1tEjgNXlWgmR36S%2Fn5LvQZUvMvNCZup5pNCgx%2BQDtBzEIhJrIoOzxrXXkN8LhMOfvRQywiQpqh2BeEzJbhJywdcgoNzl8P2csNOd6xKDPRmTcUfH6IC99AOxXIVqYPrs%2FS%2BoKbmHyrr4NYeo%2BtidESec4pL5S88sJZOAPAu3MRPw9%2BnTSBSQsV%2BFcfF4NVBBuao5D%2FjFy2%2Bh16GWhAprWXM71aqQlb%2FEUkJKy5ulBw4mNYrY1XTwd1qnB0NIh5Y2KYdbx4YeT9bwvcXOVZiRzGzjoETJOlEbUP8qXWbaE8aF3IhFFr%2FlsLN4Uyh80%2BG%2F71Ct%2BoxKFSCnm1HPWDL1S6QubeNp9Ju85p0EJ9Y2nlcgCBeIB4dYXsq2Edlaa35UmAdpJRxxf0Mc5RSsFbucdr1%2Bnuu%2BQsSfwNv7C5iBpY0hJOEPcmiGIHbqLJkz4hWQweSgwzt%2BrD5WGe9B3tzokEcd6LHetxtsrffxMn0kZdjt%2FmQsnPob2JZNQumSup5QENtoXA%2FtjGb7j7Q2x8ChdZl5R3XdwUH8Zxqejd2BzP%2FuNY9ecuDiQFsB9KeTWBsgdQkJgkBxBvRGyUW%2Fcf8ayjfpDjGuqEVKGyoln%2BpxXi%2Fk9xYXX4DdMNf3gMUGOqUB3m3PzSPTCE%2BQ%2F6wGwaY71rN1F14fghCx6NTRleYh163kyYUi4zT3saJ3wbOLYJbVJZJIk7h%2BzeeuZNTlZ%2B8uhUzAVGVPMhOdTJXO8ff7V3o1Jc%2FHKaDoadG%2F9prsEIpMrsVziMWkgplgOqDxzMqhtgIXvWx0D8kiTt2XsBUWw1sUcrXIBINsBTcSnxaPzN0TVi4umvZFVw48fjFLqV7r3JsxzpRj&X-Amz-Signature=f57edeed544655332b6e7c6b1ef52b877acfb9851f34a88dd19959eb62c7947f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBKFAXL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEJaGTGbEFA3DISADJLauGqkIA6IEwh%2F%2BGiNow3H6m92AiEAmNCGqMgN9Kug2ElXoBK3VUboFIj1eSxqRhszdfyEFp8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMs%2By8mQud0RNM6wlyrcA%2BLM6tQ%2B1tEjgNXlWgmR36S%2Fn5LvQZUvMvNCZup5pNCgx%2BQDtBzEIhJrIoOzxrXXkN8LhMOfvRQywiQpqh2BeEzJbhJywdcgoNzl8P2csNOd6xKDPRmTcUfH6IC99AOxXIVqYPrs%2FS%2BoKbmHyrr4NYeo%2BtidESec4pL5S88sJZOAPAu3MRPw9%2BnTSBSQsV%2BFcfF4NVBBuao5D%2FjFy2%2Bh16GWhAprWXM71aqQlb%2FEUkJKy5ulBw4mNYrY1XTwd1qnB0NIh5Y2KYdbx4YeT9bwvcXOVZiRzGzjoETJOlEbUP8qXWbaE8aF3IhFFr%2FlsLN4Uyh80%2BG%2F71Ct%2BoxKFSCnm1HPWDL1S6QubeNp9Ju85p0EJ9Y2nlcgCBeIB4dYXsq2Edlaa35UmAdpJRxxf0Mc5RSsFbucdr1%2Bnuu%2BQsSfwNv7C5iBpY0hJOEPcmiGIHbqLJkz4hWQweSgwzt%2BrD5WGe9B3tzokEcd6LHetxtsrffxMn0kZdjt%2FmQsnPob2JZNQumSup5QENtoXA%2FtjGb7j7Q2x8ChdZl5R3XdwUH8Zxqejd2BzP%2FuNY9ecuDiQFsB9KeTWBsgdQkJgkBxBvRGyUW%2Fcf8ayjfpDjGuqEVKGyoln%2BpxXi%2Fk9xYXX4DdMNf3gMUGOqUB3m3PzSPTCE%2BQ%2F6wGwaY71rN1F14fghCx6NTRleYh163kyYUi4zT3saJ3wbOLYJbVJZJIk7h%2BzeeuZNTlZ%2B8uhUzAVGVPMhOdTJXO8ff7V3o1Jc%2FHKaDoadG%2F9prsEIpMrsVziMWkgplgOqDxzMqhtgIXvWx0D8kiTt2XsBUWw1sUcrXIBINsBTcSnxaPzN0TVi4umvZFVw48fjFLqV7r3JsxzpRj&X-Amz-Signature=2c8c85a9dec91f30ae699cabd548ac76cc7a24d3a9540510b820902cc8103886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBKFAXL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEJaGTGbEFA3DISADJLauGqkIA6IEwh%2F%2BGiNow3H6m92AiEAmNCGqMgN9Kug2ElXoBK3VUboFIj1eSxqRhszdfyEFp8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMs%2By8mQud0RNM6wlyrcA%2BLM6tQ%2B1tEjgNXlWgmR36S%2Fn5LvQZUvMvNCZup5pNCgx%2BQDtBzEIhJrIoOzxrXXkN8LhMOfvRQywiQpqh2BeEzJbhJywdcgoNzl8P2csNOd6xKDPRmTcUfH6IC99AOxXIVqYPrs%2FS%2BoKbmHyrr4NYeo%2BtidESec4pL5S88sJZOAPAu3MRPw9%2BnTSBSQsV%2BFcfF4NVBBuao5D%2FjFy2%2Bh16GWhAprWXM71aqQlb%2FEUkJKy5ulBw4mNYrY1XTwd1qnB0NIh5Y2KYdbx4YeT9bwvcXOVZiRzGzjoETJOlEbUP8qXWbaE8aF3IhFFr%2FlsLN4Uyh80%2BG%2F71Ct%2BoxKFSCnm1HPWDL1S6QubeNp9Ju85p0EJ9Y2nlcgCBeIB4dYXsq2Edlaa35UmAdpJRxxf0Mc5RSsFbucdr1%2Bnuu%2BQsSfwNv7C5iBpY0hJOEPcmiGIHbqLJkz4hWQweSgwzt%2BrD5WGe9B3tzokEcd6LHetxtsrffxMn0kZdjt%2FmQsnPob2JZNQumSup5QENtoXA%2FtjGb7j7Q2x8ChdZl5R3XdwUH8Zxqejd2BzP%2FuNY9ecuDiQFsB9KeTWBsgdQkJgkBxBvRGyUW%2Fcf8ayjfpDjGuqEVKGyoln%2BpxXi%2Fk9xYXX4DdMNf3gMUGOqUB3m3PzSPTCE%2BQ%2F6wGwaY71rN1F14fghCx6NTRleYh163kyYUi4zT3saJ3wbOLYJbVJZJIk7h%2BzeeuZNTlZ%2B8uhUzAVGVPMhOdTJXO8ff7V3o1Jc%2FHKaDoadG%2F9prsEIpMrsVziMWkgplgOqDxzMqhtgIXvWx0D8kiTt2XsBUWw1sUcrXIBINsBTcSnxaPzN0TVi4umvZFVw48fjFLqV7r3JsxzpRj&X-Amz-Signature=7d76a9d8ae67fb13c51b50aa9b72942403910bcb0345b7cdf85269033a657ebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBKFAXL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEJaGTGbEFA3DISADJLauGqkIA6IEwh%2F%2BGiNow3H6m92AiEAmNCGqMgN9Kug2ElXoBK3VUboFIj1eSxqRhszdfyEFp8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMs%2By8mQud0RNM6wlyrcA%2BLM6tQ%2B1tEjgNXlWgmR36S%2Fn5LvQZUvMvNCZup5pNCgx%2BQDtBzEIhJrIoOzxrXXkN8LhMOfvRQywiQpqh2BeEzJbhJywdcgoNzl8P2csNOd6xKDPRmTcUfH6IC99AOxXIVqYPrs%2FS%2BoKbmHyrr4NYeo%2BtidESec4pL5S88sJZOAPAu3MRPw9%2BnTSBSQsV%2BFcfF4NVBBuao5D%2FjFy2%2Bh16GWhAprWXM71aqQlb%2FEUkJKy5ulBw4mNYrY1XTwd1qnB0NIh5Y2KYdbx4YeT9bwvcXOVZiRzGzjoETJOlEbUP8qXWbaE8aF3IhFFr%2FlsLN4Uyh80%2BG%2F71Ct%2BoxKFSCnm1HPWDL1S6QubeNp9Ju85p0EJ9Y2nlcgCBeIB4dYXsq2Edlaa35UmAdpJRxxf0Mc5RSsFbucdr1%2Bnuu%2BQsSfwNv7C5iBpY0hJOEPcmiGIHbqLJkz4hWQweSgwzt%2BrD5WGe9B3tzokEcd6LHetxtsrffxMn0kZdjt%2FmQsnPob2JZNQumSup5QENtoXA%2FtjGb7j7Q2x8ChdZl5R3XdwUH8Zxqejd2BzP%2FuNY9ecuDiQFsB9KeTWBsgdQkJgkBxBvRGyUW%2Fcf8ayjfpDjGuqEVKGyoln%2BpxXi%2Fk9xYXX4DdMNf3gMUGOqUB3m3PzSPTCE%2BQ%2F6wGwaY71rN1F14fghCx6NTRleYh163kyYUi4zT3saJ3wbOLYJbVJZJIk7h%2BzeeuZNTlZ%2B8uhUzAVGVPMhOdTJXO8ff7V3o1Jc%2FHKaDoadG%2F9prsEIpMrsVziMWkgplgOqDxzMqhtgIXvWx0D8kiTt2XsBUWw1sUcrXIBINsBTcSnxaPzN0TVi4umvZFVw48fjFLqV7r3JsxzpRj&X-Amz-Signature=1aa6545abcb2000d8b23e6f5a533867c51fc750d516cd0b407e79eea6eea1c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBKFAXL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEJaGTGbEFA3DISADJLauGqkIA6IEwh%2F%2BGiNow3H6m92AiEAmNCGqMgN9Kug2ElXoBK3VUboFIj1eSxqRhszdfyEFp8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMs%2By8mQud0RNM6wlyrcA%2BLM6tQ%2B1tEjgNXlWgmR36S%2Fn5LvQZUvMvNCZup5pNCgx%2BQDtBzEIhJrIoOzxrXXkN8LhMOfvRQywiQpqh2BeEzJbhJywdcgoNzl8P2csNOd6xKDPRmTcUfH6IC99AOxXIVqYPrs%2FS%2BoKbmHyrr4NYeo%2BtidESec4pL5S88sJZOAPAu3MRPw9%2BnTSBSQsV%2BFcfF4NVBBuao5D%2FjFy2%2Bh16GWhAprWXM71aqQlb%2FEUkJKy5ulBw4mNYrY1XTwd1qnB0NIh5Y2KYdbx4YeT9bwvcXOVZiRzGzjoETJOlEbUP8qXWbaE8aF3IhFFr%2FlsLN4Uyh80%2BG%2F71Ct%2BoxKFSCnm1HPWDL1S6QubeNp9Ju85p0EJ9Y2nlcgCBeIB4dYXsq2Edlaa35UmAdpJRxxf0Mc5RSsFbucdr1%2Bnuu%2BQsSfwNv7C5iBpY0hJOEPcmiGIHbqLJkz4hWQweSgwzt%2BrD5WGe9B3tzokEcd6LHetxtsrffxMn0kZdjt%2FmQsnPob2JZNQumSup5QENtoXA%2FtjGb7j7Q2x8ChdZl5R3XdwUH8Zxqejd2BzP%2FuNY9ecuDiQFsB9KeTWBsgdQkJgkBxBvRGyUW%2Fcf8ayjfpDjGuqEVKGyoln%2BpxXi%2Fk9xYXX4DdMNf3gMUGOqUB3m3PzSPTCE%2BQ%2F6wGwaY71rN1F14fghCx6NTRleYh163kyYUi4zT3saJ3wbOLYJbVJZJIk7h%2BzeeuZNTlZ%2B8uhUzAVGVPMhOdTJXO8ff7V3o1Jc%2FHKaDoadG%2F9prsEIpMrsVziMWkgplgOqDxzMqhtgIXvWx0D8kiTt2XsBUWw1sUcrXIBINsBTcSnxaPzN0TVi4umvZFVw48fjFLqV7r3JsxzpRj&X-Amz-Signature=2dc3dfc2eceb76aa5f110454fc61952af7dddceb93b0142fb032b69e770df63f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBKFAXL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEJaGTGbEFA3DISADJLauGqkIA6IEwh%2F%2BGiNow3H6m92AiEAmNCGqMgN9Kug2ElXoBK3VUboFIj1eSxqRhszdfyEFp8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMs%2By8mQud0RNM6wlyrcA%2BLM6tQ%2B1tEjgNXlWgmR36S%2Fn5LvQZUvMvNCZup5pNCgx%2BQDtBzEIhJrIoOzxrXXkN8LhMOfvRQywiQpqh2BeEzJbhJywdcgoNzl8P2csNOd6xKDPRmTcUfH6IC99AOxXIVqYPrs%2FS%2BoKbmHyrr4NYeo%2BtidESec4pL5S88sJZOAPAu3MRPw9%2BnTSBSQsV%2BFcfF4NVBBuao5D%2FjFy2%2Bh16GWhAprWXM71aqQlb%2FEUkJKy5ulBw4mNYrY1XTwd1qnB0NIh5Y2KYdbx4YeT9bwvcXOVZiRzGzjoETJOlEbUP8qXWbaE8aF3IhFFr%2FlsLN4Uyh80%2BG%2F71Ct%2BoxKFSCnm1HPWDL1S6QubeNp9Ju85p0EJ9Y2nlcgCBeIB4dYXsq2Edlaa35UmAdpJRxxf0Mc5RSsFbucdr1%2Bnuu%2BQsSfwNv7C5iBpY0hJOEPcmiGIHbqLJkz4hWQweSgwzt%2BrD5WGe9B3tzokEcd6LHetxtsrffxMn0kZdjt%2FmQsnPob2JZNQumSup5QENtoXA%2FtjGb7j7Q2x8ChdZl5R3XdwUH8Zxqejd2BzP%2FuNY9ecuDiQFsB9KeTWBsgdQkJgkBxBvRGyUW%2Fcf8ayjfpDjGuqEVKGyoln%2BpxXi%2Fk9xYXX4DdMNf3gMUGOqUB3m3PzSPTCE%2BQ%2F6wGwaY71rN1F14fghCx6NTRleYh163kyYUi4zT3saJ3wbOLYJbVJZJIk7h%2BzeeuZNTlZ%2B8uhUzAVGVPMhOdTJXO8ff7V3o1Jc%2FHKaDoadG%2F9prsEIpMrsVziMWkgplgOqDxzMqhtgIXvWx0D8kiTt2XsBUWw1sUcrXIBINsBTcSnxaPzN0TVi4umvZFVw48fjFLqV7r3JsxzpRj&X-Amz-Signature=5073648806963acfacb056595a42c21d3413f6cf36a4a4a08eaf3449aa5387fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBKFAXL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEJaGTGbEFA3DISADJLauGqkIA6IEwh%2F%2BGiNow3H6m92AiEAmNCGqMgN9Kug2ElXoBK3VUboFIj1eSxqRhszdfyEFp8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMs%2By8mQud0RNM6wlyrcA%2BLM6tQ%2B1tEjgNXlWgmR36S%2Fn5LvQZUvMvNCZup5pNCgx%2BQDtBzEIhJrIoOzxrXXkN8LhMOfvRQywiQpqh2BeEzJbhJywdcgoNzl8P2csNOd6xKDPRmTcUfH6IC99AOxXIVqYPrs%2FS%2BoKbmHyrr4NYeo%2BtidESec4pL5S88sJZOAPAu3MRPw9%2BnTSBSQsV%2BFcfF4NVBBuao5D%2FjFy2%2Bh16GWhAprWXM71aqQlb%2FEUkJKy5ulBw4mNYrY1XTwd1qnB0NIh5Y2KYdbx4YeT9bwvcXOVZiRzGzjoETJOlEbUP8qXWbaE8aF3IhFFr%2FlsLN4Uyh80%2BG%2F71Ct%2BoxKFSCnm1HPWDL1S6QubeNp9Ju85p0EJ9Y2nlcgCBeIB4dYXsq2Edlaa35UmAdpJRxxf0Mc5RSsFbucdr1%2Bnuu%2BQsSfwNv7C5iBpY0hJOEPcmiGIHbqLJkz4hWQweSgwzt%2BrD5WGe9B3tzokEcd6LHetxtsrffxMn0kZdjt%2FmQsnPob2JZNQumSup5QENtoXA%2FtjGb7j7Q2x8ChdZl5R3XdwUH8Zxqejd2BzP%2FuNY9ecuDiQFsB9KeTWBsgdQkJgkBxBvRGyUW%2Fcf8ayjfpDjGuqEVKGyoln%2BpxXi%2Fk9xYXX4DdMNf3gMUGOqUB3m3PzSPTCE%2BQ%2F6wGwaY71rN1F14fghCx6NTRleYh163kyYUi4zT3saJ3wbOLYJbVJZJIk7h%2BzeeuZNTlZ%2B8uhUzAVGVPMhOdTJXO8ff7V3o1Jc%2FHKaDoadG%2F9prsEIpMrsVziMWkgplgOqDxzMqhtgIXvWx0D8kiTt2XsBUWw1sUcrXIBINsBTcSnxaPzN0TVi4umvZFVw48fjFLqV7r3JsxzpRj&X-Amz-Signature=15c7080d03e8a55bf57b8eff593ccb893c9caf06a3421aa48bbf2b86161d2506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBKFAXL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEJaGTGbEFA3DISADJLauGqkIA6IEwh%2F%2BGiNow3H6m92AiEAmNCGqMgN9Kug2ElXoBK3VUboFIj1eSxqRhszdfyEFp8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMs%2By8mQud0RNM6wlyrcA%2BLM6tQ%2B1tEjgNXlWgmR36S%2Fn5LvQZUvMvNCZup5pNCgx%2BQDtBzEIhJrIoOzxrXXkN8LhMOfvRQywiQpqh2BeEzJbhJywdcgoNzl8P2csNOd6xKDPRmTcUfH6IC99AOxXIVqYPrs%2FS%2BoKbmHyrr4NYeo%2BtidESec4pL5S88sJZOAPAu3MRPw9%2BnTSBSQsV%2BFcfF4NVBBuao5D%2FjFy2%2Bh16GWhAprWXM71aqQlb%2FEUkJKy5ulBw4mNYrY1XTwd1qnB0NIh5Y2KYdbx4YeT9bwvcXOVZiRzGzjoETJOlEbUP8qXWbaE8aF3IhFFr%2FlsLN4Uyh80%2BG%2F71Ct%2BoxKFSCnm1HPWDL1S6QubeNp9Ju85p0EJ9Y2nlcgCBeIB4dYXsq2Edlaa35UmAdpJRxxf0Mc5RSsFbucdr1%2Bnuu%2BQsSfwNv7C5iBpY0hJOEPcmiGIHbqLJkz4hWQweSgwzt%2BrD5WGe9B3tzokEcd6LHetxtsrffxMn0kZdjt%2FmQsnPob2JZNQumSup5QENtoXA%2FtjGb7j7Q2x8ChdZl5R3XdwUH8Zxqejd2BzP%2FuNY9ecuDiQFsB9KeTWBsgdQkJgkBxBvRGyUW%2Fcf8ayjfpDjGuqEVKGyoln%2BpxXi%2Fk9xYXX4DdMNf3gMUGOqUB3m3PzSPTCE%2BQ%2F6wGwaY71rN1F14fghCx6NTRleYh163kyYUi4zT3saJ3wbOLYJbVJZJIk7h%2BzeeuZNTlZ%2B8uhUzAVGVPMhOdTJXO8ff7V3o1Jc%2FHKaDoadG%2F9prsEIpMrsVziMWkgplgOqDxzMqhtgIXvWx0D8kiTt2XsBUWw1sUcrXIBINsBTcSnxaPzN0TVi4umvZFVw48fjFLqV7r3JsxzpRj&X-Amz-Signature=3edab8330ec46abc1be795a5319668539846be99506ebe4d29803ab31406cf35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBKFAXL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEJaGTGbEFA3DISADJLauGqkIA6IEwh%2F%2BGiNow3H6m92AiEAmNCGqMgN9Kug2ElXoBK3VUboFIj1eSxqRhszdfyEFp8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMs%2By8mQud0RNM6wlyrcA%2BLM6tQ%2B1tEjgNXlWgmR36S%2Fn5LvQZUvMvNCZup5pNCgx%2BQDtBzEIhJrIoOzxrXXkN8LhMOfvRQywiQpqh2BeEzJbhJywdcgoNzl8P2csNOd6xKDPRmTcUfH6IC99AOxXIVqYPrs%2FS%2BoKbmHyrr4NYeo%2BtidESec4pL5S88sJZOAPAu3MRPw9%2BnTSBSQsV%2BFcfF4NVBBuao5D%2FjFy2%2Bh16GWhAprWXM71aqQlb%2FEUkJKy5ulBw4mNYrY1XTwd1qnB0NIh5Y2KYdbx4YeT9bwvcXOVZiRzGzjoETJOlEbUP8qXWbaE8aF3IhFFr%2FlsLN4Uyh80%2BG%2F71Ct%2BoxKFSCnm1HPWDL1S6QubeNp9Ju85p0EJ9Y2nlcgCBeIB4dYXsq2Edlaa35UmAdpJRxxf0Mc5RSsFbucdr1%2Bnuu%2BQsSfwNv7C5iBpY0hJOEPcmiGIHbqLJkz4hWQweSgwzt%2BrD5WGe9B3tzokEcd6LHetxtsrffxMn0kZdjt%2FmQsnPob2JZNQumSup5QENtoXA%2FtjGb7j7Q2x8ChdZl5R3XdwUH8Zxqejd2BzP%2FuNY9ecuDiQFsB9KeTWBsgdQkJgkBxBvRGyUW%2Fcf8ayjfpDjGuqEVKGyoln%2BpxXi%2Fk9xYXX4DdMNf3gMUGOqUB3m3PzSPTCE%2BQ%2F6wGwaY71rN1F14fghCx6NTRleYh163kyYUi4zT3saJ3wbOLYJbVJZJIk7h%2BzeeuZNTlZ%2B8uhUzAVGVPMhOdTJXO8ff7V3o1Jc%2FHKaDoadG%2F9prsEIpMrsVziMWkgplgOqDxzMqhtgIXvWx0D8kiTt2XsBUWw1sUcrXIBINsBTcSnxaPzN0TVi4umvZFVw48fjFLqV7r3JsxzpRj&X-Amz-Signature=da10f80de1cf7715cfbbb4c2547b191125ab215b2e4e8b2195a40e931ab04e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYOM7DFK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCZbXNfl6e9SCvnC7ssPB6L6ki3418WX901GRJvsLCf3AIhANudMHrZCfmkmcWQrM8zjnLYG1ygGUANPNu2XVKmtqsuKv8DCHEQABoMNjM3NDIzMTgzODA1Igwh%2F%2F7vKcBeSqrLlUMq3AP5wI82MrLolAfuqtrgL3JWfDV3S%2BKatK1JHp8hDhIpkwY%2BoGByywppWUBBzNfsf6v7PgFJZCdujMYvlxceJfHrhqPDDQ8wFGSt3A4qH9lagcPemlqVCoYFm8ye22DTQqy6mWmlyPncl7uM3bqrLOR3KjaAp9FHyDu0%2FPmxFMvzMHoKOuTiEsw8ZENGT48EuaD3ijIla1DZqwqSwJODvxNASXiAgYwBTBXk41y2toPiVEXkU8qkHYR1dvQnM%2BKaZqPRinMt8od%2BJ1m0ftZlFakTStEbVISMMGHy%2Bx0NYy%2Fy1VPfSHYVHT0K%2Blqpu2kQykZ6byayKgwGI0dmER6ibIF7XFWc3%2FyoIZNR3S%2BPHlWJn0U%2BdDN5NM%2F48PN3vf6CwggATJ6kxj81zckOF30dA0%2F19IQtbQSMvvg3dgHb5hgZbIZTz0lgXfeR7ti7xOlGuuYiOANTMAecT816pjmXyiqw8oOs7r8yh518i%2B0iNkmRKHFplIcJJSHMNCOqYHu5LHmCa3BwIc%2Bo8J%2FjVw%2BIPFEm1gRpKuufAa%2FscH%2BLP07idiPMetv11YXkYyQHHJdENLbl1d7vnp%2B6HRMyM3bP%2B7YK6haVWSFvkhL4kG37iKlnXqs71qSWXN0qX9JcQDC794DFBjqkAdXdC%2Bkfiltgxw%2BAsfLk6bUaUFOm3ZHDmvqDbbujV%2B9Z1dph5HQz56XGOeXnMeogNmCRZ2XPJGi0SQLlCdFwsua1r8GS8kqDhxYxuTcSOGSLZKuw%2B0WIRcZ34wz7gZvK01HVi8d0b6rj%2B1u3ql68OrjagG%2BhpE%2Fw54fkNjR8Gm2hkOF61F3DAxBFGjnc5p8b1CPZ4rpql%2BK4w5dkfENybKP3Lb5t&X-Amz-Signature=5b67bff21da0d7020bbb17db75614d90837641b90ff3ed0efa1e3b86541b6518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJEEG7L7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDlljpy38YVxit%2BpsN%2FbCBGRSLGOzHV%2BtrLsJca1nsG3gIgErdRQt6qnc%2BvNWLwzea1TfU6mk8Txsk0csdc1URHJ98q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMpQC1JCzvb4HG6SGyrcAykZiXPoBlSnXgkvEHOwZzwLvu5UZNw3D6GfdDfFJJpgsLyTjtf7ok0Bmd%2FUUQxOjypZd28M6BYPeTL6zFi1KnaEbR6HF4BmcdKXJhv6sSgi6ajCUF%2FxSv751P8MGZwKlNhIbAtMCIHBWPL2xfRa7nd9shBcorynm%2BuRZUBlY3PEh19sa9cen%2BNA%2F55uBn9DiNXz8J2ojdkRJMleLLOY9ktbmSTxJu3HBgrn2A44k5egJVeuqoQDpxEoPsVmTQD55x9B2xlybvjRlYpPMXqCJ6PwkXUGHe75L8icDw%2BfyEo4syfvdRU5I59e6x5Q5JjL9Ck0ndgjkgGuThb6hsZ%2FhlSQH%2FXPZPhhTdSsOVeqKcEEOqSkFGylNT7q%2BfEm099m%2FqVKV%2FYt9obr%2FPU1GG3kFaiwiliaHQqhHrJ4%2F63PxXiVoEnyFON6kuB8mm%2BYdwRnMinbPytBgMvPkhYxs%2FjNTOB%2FbhkZK8eD44Ti4fFgRE6qbUo4gs3gms3Bk83V6NyydATK8uybMnxUV6oQijurCJ2lR7tqgt3Q%2B1DyaXqFvMPUzKkc1f7JuCKQGtJCtGQhdsS3ZLHsdKdJLBqW9vy%2BGdmHDmNXu7HsnykKxY66ZWXFtpf4BdF1jlpu16x%2FMNf3gMUGOqUBY27LcRkOUTVz87PIzCaHNETogsZx3KYitExt9OD%2FcGxMzSdmJ%2F5hGLev54lgrzG0Qx2r1eBmc0Pqs1CWpdhxS8fCHH2DZ%2FeY2p8ALnSg7QupcFiGprcu6XiyIvnyLsBLkVkDUId81ZnSP6teDtojrp9J6ByFlSV29cJE%2F0x0npVLF2kyj4jxAmak0etX6KnV7SeNlJrgt7Wod7tMfyujc0Euq5HB&X-Amz-Signature=90a5c51b96a96f31c8309f8e3e075621e383e102b73ec6502517b0e33dd978a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDDBQ4BE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDzBHy2HutJ8jCCyiBALG4QcXS2NLi%2BqkSkJZtj8Ah%2FkwIgdL4b%2FEIWspY8juy%2FOlT019BPNmxr5Jo6niZZknDEruMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOyQQTX6%2FJaEh3w7VCrcA3mH6Qsog9aUnAuJa%2FQav7bjkz5Z99MzJFuPsJp8JK21TI5oCOnH3EZT16uP6m%2Ff3tav8TgKFEhl8CVtUc9rD%2BIn%2FLp7m5HB6zxEyEyM3TdkdsHsKQ3sTRkwTRlX3aYdRpW4691dN21uewHVx4uitzDvXpjFq6f%2FpD%2F3NZQyeBinAfIV4K%2BegLDp8LLlyCOyKuMbrniPjE3%2BgNhTCgAca38Hsds5J%2Fa5yXj%2BmNPB78xTvK5f4n9bEf8Edayjde%2BQuMxNLPvflOM%2FOm1XI2B2h5aFGzwNONG8qCW8geRqrS1L4fVzm8jMDOitSWaqVFP9LJjjB0PdDRXWIUy58SDFI0LGNmZBHAz0diSgD5GwS5bPVb5mdyLeUC%2B9iQX4QdgGCRQlyazHM36IGouk%2FhoDTzPnaB7j5aBGUY492hYnV3Rn4xgtaNmTds0KWDE9PhfxtCCAet68r3DyHnXX2agRhsuxJGR2n1Aj2EC%2F54q7oIP7jhWBy6MZS9LO5dkTEiVN1P%2FvZGRjAaEiqYzUIXakgF7QaLDWFa5z4bnmiclT%2BbSlo8L%2BtfK2gSVxHf5rPxlBYF4rQbk9R768jJt7p9kjfN9ah27e4gAwqAfP0Gxcfz0QjR3G%2BoRts36%2FakspMLj3gMUGOqUBm1IiHKXbyt7TA56pS0Z2f432okkxQxpawHTfD0GPMKdIMR3JtGgbvfyBPIgYgXNv8LxTBTfjo3wTkgRUU2T%2Bn7kjfcQufwdstbcJKVaeNtpJExo9LK5W93moq%2BXgdL0Ot6ifD6eujTqGEgC4Phfzzrgn1UDtGLjfoD9A6vRF4tpgskYpdbBJJSm0EhzsN92HTKBsMgkRuMz4dBuiSlxMyzW%2FcbPk&X-Amz-Signature=fcef2251c50375aab457ee8dd8485ab7e96449f577e9e6ed8981fbe1488b63ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBKFAXL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEJaGTGbEFA3DISADJLauGqkIA6IEwh%2F%2BGiNow3H6m92AiEAmNCGqMgN9Kug2ElXoBK3VUboFIj1eSxqRhszdfyEFp8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMs%2By8mQud0RNM6wlyrcA%2BLM6tQ%2B1tEjgNXlWgmR36S%2Fn5LvQZUvMvNCZup5pNCgx%2BQDtBzEIhJrIoOzxrXXkN8LhMOfvRQywiQpqh2BeEzJbhJywdcgoNzl8P2csNOd6xKDPRmTcUfH6IC99AOxXIVqYPrs%2FS%2BoKbmHyrr4NYeo%2BtidESec4pL5S88sJZOAPAu3MRPw9%2BnTSBSQsV%2BFcfF4NVBBuao5D%2FjFy2%2Bh16GWhAprWXM71aqQlb%2FEUkJKy5ulBw4mNYrY1XTwd1qnB0NIh5Y2KYdbx4YeT9bwvcXOVZiRzGzjoETJOlEbUP8qXWbaE8aF3IhFFr%2FlsLN4Uyh80%2BG%2F71Ct%2BoxKFSCnm1HPWDL1S6QubeNp9Ju85p0EJ9Y2nlcgCBeIB4dYXsq2Edlaa35UmAdpJRxxf0Mc5RSsFbucdr1%2Bnuu%2BQsSfwNv7C5iBpY0hJOEPcmiGIHbqLJkz4hWQweSgwzt%2BrD5WGe9B3tzokEcd6LHetxtsrffxMn0kZdjt%2FmQsnPob2JZNQumSup5QENtoXA%2FtjGb7j7Q2x8ChdZl5R3XdwUH8Zxqejd2BzP%2FuNY9ecuDiQFsB9KeTWBsgdQkJgkBxBvRGyUW%2Fcf8ayjfpDjGuqEVKGyoln%2BpxXi%2Fk9xYXX4DdMNf3gMUGOqUB3m3PzSPTCE%2BQ%2F6wGwaY71rN1F14fghCx6NTRleYh163kyYUi4zT3saJ3wbOLYJbVJZJIk7h%2BzeeuZNTlZ%2B8uhUzAVGVPMhOdTJXO8ff7V3o1Jc%2FHKaDoadG%2F9prsEIpMrsVziMWkgplgOqDxzMqhtgIXvWx0D8kiTt2XsBUWw1sUcrXIBINsBTcSnxaPzN0TVi4umvZFVw48fjFLqV7r3JsxzpRj&X-Amz-Signature=bd526d6b5cc95d22d1fc873fa6ded0335aaf47ae457283a83166e23213f115e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KHWLT7A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD2YblIluup6QfONr86mGCM0yUeKa7b5RDGmi3sxJc0DwIhAPdFR4wHoPFH8aifGaG2CJOSS9h40OHVmapGt2g%2Fxp31Kv8DCHEQABoMNjM3NDIzMTgzODA1IgyH9G7EXOZNMDTRra4q3AOXXg8kmNpTOuSPfad%2F%2FDC%2BgP7I8Wvs3bdpUUYbtQwXlQbxOs%2BH0w4v0V74lRmssKVeU4FNEUn3srDuLZJo1h3ixD%2B8dgkkVDf%2B9duC2xHcyKE83owUkTdlzKPpCEdEvXf86kg%2F83CHC8fovQaDeUaZ0%2BZbhyYaI5KYr0fgS8Uuc1DRhBfivnN8%2FvfmLJtTk%2FQGZVWgCPX%2FvDRg1a77px1HlY2Uq53zazHE7m7nf0xCINoWpiBT%2BGT6Hq22bQhlGZDps4MmMaqwb%2FvUiTais3il607YTK9IasBxUxLnbInM3%2Fa%2F5Q3cq0BvsAJHfTUV6RP7k0zmYrChB9W%2Fqjxq%2F0X%2FHiKO2Qr3hfIUmjr%2BnIn9qXYQVI%2FPQ4onUvhXubgBynpFRyo3RKL99JX%2Bt1zTNN9S9QLgcyIQHvMNBYNm0SYBIZo544Mh1xjdoVJryo3c62kFl16cNzcGLGafKuUM17isHfgavHrJ4lyQeCA%2FqNPvOu13KuqjSKVMpqZyquOUPmRP1cycV6nRhxkhgWD%2Fdg6x8F%2FR7mtdDRBlhZEnSs0KOrKmXP5M1HjvQlV8AjB1hGcZZuW9hDQQ7XGYkrdgZSw7abPFBYQtb19o%2B2Fd5CvfginQw3GtlN28zMh0yzDy94DFBjqkAUJzGktgq2DjGXB3hwnnJbWh2LxvfRKtC%2F5pr3%2BfAOBr5jxWRSyc8lpXDAV58Fqk7GXKElP9e3toXzQFK4Zat8yBMSAZh4HN5wWVdZ5XYgFZAPv7sH48u%2BqXzi%2FUXltpHbeqjziqn4zxE%2FAuu0sQlUai12cCQG6LL6bP2HB0waIiLlax9XOiKFGAU9KXuhR%2FNf%2FK2%2FtGjJTkKDcjWifEvuWZ2UFl&X-Amz-Signature=b7d05c484191c82b262a0c6446391a31a7973729b5fc5017f7101b2f025c6745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBKFAXL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEJaGTGbEFA3DISADJLauGqkIA6IEwh%2F%2BGiNow3H6m92AiEAmNCGqMgN9Kug2ElXoBK3VUboFIj1eSxqRhszdfyEFp8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMs%2By8mQud0RNM6wlyrcA%2BLM6tQ%2B1tEjgNXlWgmR36S%2Fn5LvQZUvMvNCZup5pNCgx%2BQDtBzEIhJrIoOzxrXXkN8LhMOfvRQywiQpqh2BeEzJbhJywdcgoNzl8P2csNOd6xKDPRmTcUfH6IC99AOxXIVqYPrs%2FS%2BoKbmHyrr4NYeo%2BtidESec4pL5S88sJZOAPAu3MRPw9%2BnTSBSQsV%2BFcfF4NVBBuao5D%2FjFy2%2Bh16GWhAprWXM71aqQlb%2FEUkJKy5ulBw4mNYrY1XTwd1qnB0NIh5Y2KYdbx4YeT9bwvcXOVZiRzGzjoETJOlEbUP8qXWbaE8aF3IhFFr%2FlsLN4Uyh80%2BG%2F71Ct%2BoxKFSCnm1HPWDL1S6QubeNp9Ju85p0EJ9Y2nlcgCBeIB4dYXsq2Edlaa35UmAdpJRxxf0Mc5RSsFbucdr1%2Bnuu%2BQsSfwNv7C5iBpY0hJOEPcmiGIHbqLJkz4hWQweSgwzt%2BrD5WGe9B3tzokEcd6LHetxtsrffxMn0kZdjt%2FmQsnPob2JZNQumSup5QENtoXA%2FtjGb7j7Q2x8ChdZl5R3XdwUH8Zxqejd2BzP%2FuNY9ecuDiQFsB9KeTWBsgdQkJgkBxBvRGyUW%2Fcf8ayjfpDjGuqEVKGyoln%2BpxXi%2Fk9xYXX4DdMNf3gMUGOqUB3m3PzSPTCE%2BQ%2F6wGwaY71rN1F14fghCx6NTRleYh163kyYUi4zT3saJ3wbOLYJbVJZJIk7h%2BzeeuZNTlZ%2B8uhUzAVGVPMhOdTJXO8ff7V3o1Jc%2FHKaDoadG%2F9prsEIpMrsVziMWkgplgOqDxzMqhtgIXvWx0D8kiTt2XsBUWw1sUcrXIBINsBTcSnxaPzN0TVi4umvZFVw48fjFLqV7r3JsxzpRj&X-Amz-Signature=057c2455abaf5e105ebad5bd9b6465970a8cf3daf49e59bdaf17264f6deafb80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URKSDA2D%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCd3e4le%2B5euu2eyf%2F3M0LxNfO4J3mzmFptka1NFTVH3QIgIRYnMbUAUpT6s59%2BUEZU%2FaCau5LAl96wNS3sIobspeQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGqXVFMh%2FqmopcFTsCrcA3OP065oWAIOmCRZLDbhYBCSaVy80OKKd7vrjTFP8zZN9DNzCS46E16GDurQteFRR%2BuJei5arXe55dnk9691hne3ruJt9CXHUWm0vTaZ0seI9%2BgpT0NnmnsZMHD71hwDZFo9EXfoykcurDzQcoJO%2FeMeQ5u6145ePkEJ8adiHP079mKSp%2F2QK6%2FHoht2bBvAD6Lh7OlTwLpd4i4RhZk1XBgwdFmef9bDXsa%2FRwrZgWBZiyJ3ZAmKba%2BCLfTWHvq%2FzPVN5SJKKCmg9%2BnMG5Uq6s1vZ1GUf5ZNuiQHsZoUmxWjn1uLnrBj%2FwWnKrrM7zoWUMknhryqU%2B56Cz8dE8mAZlbvKUcTqAoWvcDcTejd4TZiD%2B1Krc%2B3%2FwpKr%2B9anyvdSlGkYmyYKOtJcf9aU%2B0jEteJjt36VhzHbJlLxedAeZ2h4HnpdRPwCG6yCL3kHtUcy6yYouV6e%2BQZV%2BLeRxGSV%2F%2FcbtJT8WRKrdfslaS9ZkfIJCl8bH5aDDpdV1PDYQp0iNoTMOLfXDgM18eGEBcwtTY9aAxdgyvmEK8nSLdivdL4X5FOQUohzN7ZOaTCvS65nQfpK8FeUK6ISBPuMsTgnnVpVCGC3ahHYdaBakGuR%2F%2ByLI04ASpcCVQaSLqmMJL4gMUGOqUBcsXrPYDmbmpX8mwXBoWHW5yAblBDq5eZgocA2eL4JRbCBzfFobGOV0EyVo9BaUaGxDZz6WajaAs6NOLbffu51A7cuRujSFNX2SfrZnq5BLmamvg6RVFITM8%2FQOjR5yLLEXnONaKOxItwOWIRomI4EHO7TJeU%2BIbDHld%2FKchN%2F3FlwMBA5eKwesZNWSSI4WLAsQOuMMOyt1yoqsCGjgF1h2GCao6f&X-Amz-Signature=1ca3b98b807bedf5473c6c63c7012a77c3dc56185d5dccc51a603b2fd0ef78c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBKFAXL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEJaGTGbEFA3DISADJLauGqkIA6IEwh%2F%2BGiNow3H6m92AiEAmNCGqMgN9Kug2ElXoBK3VUboFIj1eSxqRhszdfyEFp8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMs%2By8mQud0RNM6wlyrcA%2BLM6tQ%2B1tEjgNXlWgmR36S%2Fn5LvQZUvMvNCZup5pNCgx%2BQDtBzEIhJrIoOzxrXXkN8LhMOfvRQywiQpqh2BeEzJbhJywdcgoNzl8P2csNOd6xKDPRmTcUfH6IC99AOxXIVqYPrs%2FS%2BoKbmHyrr4NYeo%2BtidESec4pL5S88sJZOAPAu3MRPw9%2BnTSBSQsV%2BFcfF4NVBBuao5D%2FjFy2%2Bh16GWhAprWXM71aqQlb%2FEUkJKy5ulBw4mNYrY1XTwd1qnB0NIh5Y2KYdbx4YeT9bwvcXOVZiRzGzjoETJOlEbUP8qXWbaE8aF3IhFFr%2FlsLN4Uyh80%2BG%2F71Ct%2BoxKFSCnm1HPWDL1S6QubeNp9Ju85p0EJ9Y2nlcgCBeIB4dYXsq2Edlaa35UmAdpJRxxf0Mc5RSsFbucdr1%2Bnuu%2BQsSfwNv7C5iBpY0hJOEPcmiGIHbqLJkz4hWQweSgwzt%2BrD5WGe9B3tzokEcd6LHetxtsrffxMn0kZdjt%2FmQsnPob2JZNQumSup5QENtoXA%2FtjGb7j7Q2x8ChdZl5R3XdwUH8Zxqejd2BzP%2FuNY9ecuDiQFsB9KeTWBsgdQkJgkBxBvRGyUW%2Fcf8ayjfpDjGuqEVKGyoln%2BpxXi%2Fk9xYXX4DdMNf3gMUGOqUB3m3PzSPTCE%2BQ%2F6wGwaY71rN1F14fghCx6NTRleYh163kyYUi4zT3saJ3wbOLYJbVJZJIk7h%2BzeeuZNTlZ%2B8uhUzAVGVPMhOdTJXO8ff7V3o1Jc%2FHKaDoadG%2F9prsEIpMrsVziMWkgplgOqDxzMqhtgIXvWx0D8kiTt2XsBUWw1sUcrXIBINsBTcSnxaPzN0TVi4umvZFVw48fjFLqV7r3JsxzpRj&X-Amz-Signature=c52607737ddd8076cc6620d44f6fb23664e89d9c41601b40668427c486b61889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHD52ZME%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCBWwxBCJi%2FBgVDhI88EOOi4dSqGPssyHM%2BLyjUVtr6igIgCbCHbz3Fu79gagRxOB1b1NAYCDb3cPmC5YcuXVveZoYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBYkNfmIU2sG%2B0nEEircA2PC0%2B3tQR9r%2FY8Si6af4zBNKs5gpbtmCrhsiiFjOmSe5exkAkisI%2BZsa9066mt5Suui2SDss3aSCkRc3YZ8hSykxke%2BVb%2BzT34Hcd2FcQSTAy6TFRYRxwibqlj4WkpRIFxspJlid%2B%2Fx9f0GLaE3k8zS3VhnBX%2BfBgPxe%2FHN1Kpz96pLa72R%2F1x%2B3SJJqsPPM7TAnpILgFHMbT%2Fef9%2BPcLKZQdK9wjwQWxynVfEZ3BXDcjJrDwU9EznX2sJIXmmt37TEqRHxSR6H3IK8iUeMAP2dq1xZbJVqPZ9JNB64JlLvKzhrnngH0vJBkTT0Pr5lvV%2BHT%2BMNSupe1ofsIt0ynNijRRCHogxUkftm6iwHs%2Bf5bNWBolErrQ1QFe%2FaxDDYAeB4tqrhDlVAvYH0Sy%2FmsqJTKMbd7u%2Bo%2Bq8WqjHatk1GgxGD%2BX1MEGIrVwSei3xV6BGjQXReXM8GaHZcjf3KVvklNqTDG2yscWfg6cz%2FRD%2F4epw%2BPS%2FPkYlbBa65IVPV73k0ZG6u32fj2LTiixEzNzqvBm40hodVhyld2kifR1pimWXhCunhDaIetj1Rda35yUWbUtLsS8i8fY8icji%2B3rjVo%2BYnau7wzLjiNhZuph4At4TRtqboRyoQoT3KMNX3gMUGOqUBbOL8yYxns%2FX8kLv62UOCClMTjsS9v1EWR%2BOxjOn4F1rrQeJPmeI3dq89M2tAcJCgzXU%2FaAIERBjlmiuUbNp6fAgViX7lYJ2buyvPDa4mEpyM8WhZGrjAkZPMvJBlDCdk%2FMoBwz%2FwmAjr5mxJyYBgQCdziKcfrtMIt6HIdHLLd%2BhSL6sK3TpYAjKzvKZj50hq7Ixei7A2DuOM%2F%2Butlf8uKUnVQhIv&X-Amz-Signature=89d541be9f3c0f55652cde4c6b1bef0b5d265f5ee71a1260ef1a9e40ac9664e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBKFAXL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEJaGTGbEFA3DISADJLauGqkIA6IEwh%2F%2BGiNow3H6m92AiEAmNCGqMgN9Kug2ElXoBK3VUboFIj1eSxqRhszdfyEFp8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMs%2By8mQud0RNM6wlyrcA%2BLM6tQ%2B1tEjgNXlWgmR36S%2Fn5LvQZUvMvNCZup5pNCgx%2BQDtBzEIhJrIoOzxrXXkN8LhMOfvRQywiQpqh2BeEzJbhJywdcgoNzl8P2csNOd6xKDPRmTcUfH6IC99AOxXIVqYPrs%2FS%2BoKbmHyrr4NYeo%2BtidESec4pL5S88sJZOAPAu3MRPw9%2BnTSBSQsV%2BFcfF4NVBBuao5D%2FjFy2%2Bh16GWhAprWXM71aqQlb%2FEUkJKy5ulBw4mNYrY1XTwd1qnB0NIh5Y2KYdbx4YeT9bwvcXOVZiRzGzjoETJOlEbUP8qXWbaE8aF3IhFFr%2FlsLN4Uyh80%2BG%2F71Ct%2BoxKFSCnm1HPWDL1S6QubeNp9Ju85p0EJ9Y2nlcgCBeIB4dYXsq2Edlaa35UmAdpJRxxf0Mc5RSsFbucdr1%2Bnuu%2BQsSfwNv7C5iBpY0hJOEPcmiGIHbqLJkz4hWQweSgwzt%2BrD5WGe9B3tzokEcd6LHetxtsrffxMn0kZdjt%2FmQsnPob2JZNQumSup5QENtoXA%2FtjGb7j7Q2x8ChdZl5R3XdwUH8Zxqejd2BzP%2FuNY9ecuDiQFsB9KeTWBsgdQkJgkBxBvRGyUW%2Fcf8ayjfpDjGuqEVKGyoln%2BpxXi%2Fk9xYXX4DdMNf3gMUGOqUB3m3PzSPTCE%2BQ%2F6wGwaY71rN1F14fghCx6NTRleYh163kyYUi4zT3saJ3wbOLYJbVJZJIk7h%2BzeeuZNTlZ%2B8uhUzAVGVPMhOdTJXO8ff7V3o1Jc%2FHKaDoadG%2F9prsEIpMrsVziMWkgplgOqDxzMqhtgIXvWx0D8kiTt2XsBUWw1sUcrXIBINsBTcSnxaPzN0TVi4umvZFVw48fjFLqV7r3JsxzpRj&X-Amz-Signature=61d3385e6646bcc56bc3e7a8f676a18ba70612bb58417552bee95ca1e3543c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZAXRW2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDMozrKwHjm5rvBtss6oarplqb585pXvuFwxG0n9fj3HgIgcSfNQKfeF5RX8nZPvgj%2FXGVeudlA4yzixTfrmHEvHToq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDP1RzxWJ1uoyW5dGXSrcAzB5m7ABcLIR3asznSMhRJriTNtS6%2BQWzbpMeZk9A8WT8V6AisYaIB3REMOPLklg2ZPJDNJzo5u39E5TBhH0RvBmmwjHPvr%2FQubYyx1S3CmTYHCfp9qgzjiXhVisLLtAkp4d9KILiTUaUGaYdtAi6EpRNTEg2YQxCEGPNOJ%2F1tDuUUBrif0ZbRsWTsgPdCR5aKsmT5ptBfrFxAw7fteoiWa0ML6UF43a%2FQbYD%2BoNd4e%2FAaZO7xV4sB5gKgVlQB2rsYuob5PIM1mZd9kxTbcGPKwaZoQMtEMK%2Bjr%2FZeOpcCicEebZrCmErD20SXmhYEhH0G%2Bw0BAkoPYxbkJsXeTJfKZy6ASEswR%2B%2BHWaCpiGAyK6Oljy4QrJ3gdpU85so%2BukLpBF7vgVOKKh39x%2FZWICXCmvEiJdtDRWWrFk83Fc18MWG9pFZjTmSjH7Uq5DpuKwXgnFaFicujITYVEW3ldcTNHEu6ssSOzzJobLlqs1S1UTZXa7cTNV6EaXYw%2BLSvksCIzbmdYDQzEkdpG%2FpjwDU7EwlWIj%2Bc%2B6OUbMaPXv5V46eTZreHn9GXuKB9FwYD1aNQSuMXaIsmxCyclcyVb8oY4FppulqukTMH0G9fV15lmin5Jxu%2B%2FekHHceCc2MKL5gMUGOqUBA%2BZt2fRj2CEixIzt%2F6qKyfhP5s%2BEuX4fi8hFyJcVgsfxtvZzbRHMyDDe3ahrg%2FGKYAOP7GIa%2BRiE6Rz%2B050F8uhj4%2FiKflA%2B%2BpbvtspCEqb6GaabBSUS7t2SRftLKDRFiyNXJ24EXzqPpYhjIYm%2Bgfy4Jm3vATjQmT9dV%2BETzpq%2FlaOmwXHCqeLRtQhoR7YBJ37ojCJX7ZiJCWSXMj3I1awPNP1K&X-Amz-Signature=c891f605edefb476b927b21c779211484a2ad48d1dd64c3756eb1777582b120e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662EQBPUC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDOMGPw8N6NQ%2FpE34LG0qX9yHLTaHqJ2rI9pQrTeKZJ3AiAOUqbkbNP9gWghY1cJsW%2BSaiLhiOBlunEtgaRzKRXfECr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMxDcC9nNmI4MQ2sZkKtwDorm16iTdGARt92SDi3tdoWqxfSjRcKxIsBVDsXsXKYYzrvwSEd7984DBWkf44jThMeFIo9i0rqikREc2LHi7zju2TICZnWO%2BjBRcCou%2Bi7laOsRFkEmileLVUMH7x5XFtZaLOLavTmv5qAK%2FY9Y8DKb1A90xu4pSI1tYWlEY9KQGFWerZVVPNe18CgFHNjbxQFiaqv9bTNWkaiKAY9RLSiWR4i%2Fue75C7R2DY1SdALpNl6lJR884G3MMl6%2BaS0DxS3vhRezzhuWQl3teuEQyiRbokOQmBQfm475suZ0bm1rHQ1cn9SLP6lPzSamMUPNkxE9HMysRFjuxmRb937ufw6MgTl6XmvR7j2RBLFbOAqGMuqfxaroC7FdWsY1bQ5C8PoG6stPACp4lPxJUSYbxhww6y4KeNAqy4WA9p880e1ShHEgnlw19%2F%2BROMF1wOkTdb8oRFytMROil2Z%2BycMdqiMre8ai2axwBVXsVGtlNnx7Q8bOdQ2UejLrEMVpLH7XjzjvPBTEDGR9nR83exWOywA1hPSLkpmt%2FTJ6pylYKCVGau0ghQqzmZTY60P6LyQwF9Le%2BO2JO%2Ft%2B8xPFzs4hPoKkDXyESuhhcd3w1qmt26GeLMdlqpkex1nd5e34w9PeAxQY6pgFY8uLnOnyChvuYO9oAo0zeo2Ab9HkWp6fqQLlQ8NypjdpQJLm5DSDSxofZwf0eUKMnb3oGEM2ozG%2FBoM2P3J9yTx5OnEaVCXoa1J8Q8d0nCaF7%2FbwGnUdqCenLmQHx28EmoVNfHYMa2cx115kKMXhqmjt2%2FEncyy%2BekHULUYy9CmdHEh1iGFbsj8%2FaZf%2BvaXt8IPKtwMbcne4unPBH5uDlFUYkUBj%2B&X-Amz-Signature=836ac70c7d3da7225f04d515650e59f5432aa339c1e8093d443861ee83f66abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHOSWNMM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCK2zlLgMCm4FYez9QhHs2J%2F%2FVbbSygi7GR6hm462jsqgIgRXaJQzj%2Bo4RokieQraunf%2FwJPgEv%2BTlrhPu3Y4x9ELUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAU5MnP2CQrDrN9GFCrcA2d7MVRqoaBn992Di2rI84A5xYMiDezbkEpSWb%2FTPOyNEW4Ez%2Fvs4Ak5WUT3SYLIHNcRwjzUBoRYZVth%2BNWvk%2BoDmB7Md6INaUEd2xjbwSkbxi7sCq2D7snL8PAa34kxDFYM6MOZRriHqwI2HaMnoxd11sO2HP%2BNfn2AIzISJbyud69p%2Flz%2F8kR1WbdzEEXRCFo6ybpflNSLZPEuxhtGzQSsn1j7u8PJBbQGx3bsl7ZgLaGxycm71eRrNT8zUfN1OYScbNcKfv6YOhgZCVGaD4BXfOxGEBIJiX5SuNnzI3rUw%2B0MRKMrUrp5UhOUscSxowBb%2BNfkRcjgpxZi7AWcyAh9M85LcEfhg6kUwTc0hLjwxyUOeJRC%2BoI0mH1%2F04gp5F%2BlQWA0nFaSq5lAB7WJm%2F6Yjl2KrkLFUxZeAtsYfLVbk9i1bUzJ0%2BWQo58liVGyAvXf2SHPmzyIbBiiGlf9nQGlX8MfDbbX9xKrDiGSt%2B2q1rAjdA%2FIIfdmfRKMygtNzO1h7wE8GeRnNBDEOM9SsyinvEIY3MNXhnI3HL2Oo5RvMHbFFd65%2BC30QVMLucvywxPuyP%2ByxeegYTjr3mbcgFkPs9M57pFWGwmx7I9zsfFGr881fhIXH6DU921pMMX4gMUGOqUB2O3gDy5YTD5ouAfDZ%2FuL3V6peSDnQNxxqvkYq2AeCoWfrxWkz8S01boPJYMBNaaKGMuOVqTpj9dUzRtJ4pGOMsJ8wRI6625qrEGkdtTyKMSlDniCfIAIEnuyvYgCY%2Bte1LHqfUo3%2FP2BWSEg5M7WTt%2BTr9YEps7lMiA%2F2W6pY13hZftNzDKwWQmO1T1TNMUzw4PqS7md7WMEI6sw9%2BWy5erseXzs&X-Amz-Signature=7530f88e706fb0d5992e8f6b09a99829d3828bd41be39fbccfc2fa90fa467823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGAZZ2Z7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDMOKOQOnHXbTqlHCyXS%2BQ%2FWL0CtpvRskqNyPuwskewHgIhAKwjRezdU8i5JOgAlpXyhFD4oQPOidAqJANDcGRpK541Kv8DCHEQABoMNjM3NDIzMTgzODA1Igwg8QUn%2B8UCfmBFj%2FIq3AOPHrui6%2FyT19aDzkhSaIzSzLF97ht13QHtv8RDIMe1PiU7%2FiWq6f%2BuMZ4DKWpq6Osy3ICYC5O%2B%2FW4kkHUpYGQjMZa1Tgdv2Fh4mDjeYa%2FZaLrNjSahZOdHuoXnENo3kscKfa66FwpjFpeAiYUETpqEXTng4D9VjQEatg9EWoijco4GkTkpxfLEQomOpqoZ%2FDqUTcMMXjceGTGCsrz%2B53fxNENKvJnrz1QfepNhzvIJLpvlnUwPqtfZoLGAaGrUP17a%2FcimeoufmXACzuKji%2BT6x5zXVvYtjr1ACCoJfTsY4qH%2FHodbKH6TyK8JHj5nRGSn27vu2KHby1OwPfVA3E2DXL3TVg2USJUf2Tikhfo9C7Vp4pOLbO%2F%2FyL6607ck7LafT0%2BxDKZxPNIcH1ALiH%2Bv9P%2BHvaKy%2BCDxf93qmWNIvsqG1BBsqbJUhE2II1A3It7Oq64GA%2BdHBgbYNfIK4wkqyX%2BMyCshOQucF0a40jxGw%2FD85uMqtn%2B8sEPMFVbSbB%2Fa1ROEnuCDI3ci9TtwtBZIOEIezrsZZfW%2B%2Bxfy7%2Fxr57VEG%2F6fH4Itbdso20GDKjZ7DkRQULbUo56MubgTWueH7KWQeYc%2FsyO3mbDGGlKorkuEsNCdsmgdYc3PYDD294DFBjqkAdpt0U8BaaMsJpIh%2Beu8oXS3c5rLdlWNRZfdsytsQGItc72XqaOccDGkl%2BK4%2F0znwjXETTMNingcIJtkdv0dvYCjpwR43Y5BT1q3GWt6W2mcXkXY%2FzvJPRt5mZfJ7FQTsxAxTn9g6pTz8N0fkm7EaMe1Nqev3NRn8%2BHYdm7Q2ClkuA8fqe9gp4PiBLhCYnAShdmdxZ32e018CdereoCucckfQvcH&X-Amz-Signature=75aba239805681eec67f8419be08959a610462a1e0d13b98986687f2a21c916e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW5RPPRG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCSpvyLLM%2BMnhi7mvDUOcivMjdZXf103y6ndQnNCzNyaAIgctRAT%2Ftz1bpELRf0oF%2FB%2BjVKfMlF32mxwxR%2FboY4j38q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNxI2eYQJMP6Qfl3ySrcA1LLFG96%2FO%2FmtaAQzeHK0BLKbTt2t7LEnvin9jkalMetzFTmKUhNs1lDxGz048Y7gdr1vztjIN0AtE%2BL%2BWu3306hIriMZbTEljGVYRfM4OWFn4WaSea2ScWJ7Aa6en8VPsyL3JzKutM7ZwE8y6758w%2BnbxcZSGO%2BhcfY0Sp0J5Eba2D2xTins1GDh2lMNPbV81HRTr7ebwuiBtRToCUA0hTwk0%2Fv2guKPR0NvXMs%2F0wzDHu25Yn5raFUnoE7%2F3uzz%2F3rNNzkeiKOSmy6i7jHqutCOIVTOmOlpjb4jjK8bRYKNNBOWfqvuT7ah9bvJ7BdkJLcuSSxDESyLRnNlkeqSnGzhSpxtlPCsoXX5qOHdti2htlkdJEwd0h%2FbJ0dSVveOmKiFRZNwkOBHeCSisZxRUNp4l0L75U6PNE%2FHWiw73C2GHVloIMBEUSZ37V57wGy0CAD95ne96AUYIcskygZxxqFh%2BVfgM05iCQMXGoyiD2bjgfn5FNeHjEVZQ%2FTWjwAYSQycXSZRcO5%2F%2F2HTbEWbP2f83rpDF2qVWY7XykX7X3ZfZ2GHmRXeMt5qv3C3w3anB%2Fk%2FRwNEEW9AiyAicOTwZ2lJZBBCnz61P2yHyzxQqWTsX3L2N6nmZwttF3FMMT3gMUGOqUBYA44NwL3hoy%2BArQHJdyMCScHWOHjFEdbghlPFfuYmjbsaM22s%2FSCFsV5pOM2FTZivFYwJN23Xd%2BjkykcqsMgQsDSec86gRkirukeAKUVOpc2FbHkb8IftEfr5W6NcTE%2ByOQI4ksfe6GfqeoIU%2BEwVX2L6Z%2FmXymkZekobuhFVWFgYfyI3WvdNCxdA5L%2Budkaa6oaHvjWQYJ93ehDpxLF7X34L2be&X-Amz-Signature=2aa0da678c12c737feaaf3be9c915fc26bf7e157787ca41e5a9166da48be9fa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBKFAXL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEJaGTGbEFA3DISADJLauGqkIA6IEwh%2F%2BGiNow3H6m92AiEAmNCGqMgN9Kug2ElXoBK3VUboFIj1eSxqRhszdfyEFp8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMs%2By8mQud0RNM6wlyrcA%2BLM6tQ%2B1tEjgNXlWgmR36S%2Fn5LvQZUvMvNCZup5pNCgx%2BQDtBzEIhJrIoOzxrXXkN8LhMOfvRQywiQpqh2BeEzJbhJywdcgoNzl8P2csNOd6xKDPRmTcUfH6IC99AOxXIVqYPrs%2FS%2BoKbmHyrr4NYeo%2BtidESec4pL5S88sJZOAPAu3MRPw9%2BnTSBSQsV%2BFcfF4NVBBuao5D%2FjFy2%2Bh16GWhAprWXM71aqQlb%2FEUkJKy5ulBw4mNYrY1XTwd1qnB0NIh5Y2KYdbx4YeT9bwvcXOVZiRzGzjoETJOlEbUP8qXWbaE8aF3IhFFr%2FlsLN4Uyh80%2BG%2F71Ct%2BoxKFSCnm1HPWDL1S6QubeNp9Ju85p0EJ9Y2nlcgCBeIB4dYXsq2Edlaa35UmAdpJRxxf0Mc5RSsFbucdr1%2Bnuu%2BQsSfwNv7C5iBpY0hJOEPcmiGIHbqLJkz4hWQweSgwzt%2BrD5WGe9B3tzokEcd6LHetxtsrffxMn0kZdjt%2FmQsnPob2JZNQumSup5QENtoXA%2FtjGb7j7Q2x8ChdZl5R3XdwUH8Zxqejd2BzP%2FuNY9ecuDiQFsB9KeTWBsgdQkJgkBxBvRGyUW%2Fcf8ayjfpDjGuqEVKGyoln%2BpxXi%2Fk9xYXX4DdMNf3gMUGOqUB3m3PzSPTCE%2BQ%2F6wGwaY71rN1F14fghCx6NTRleYh163kyYUi4zT3saJ3wbOLYJbVJZJIk7h%2BzeeuZNTlZ%2B8uhUzAVGVPMhOdTJXO8ff7V3o1Jc%2FHKaDoadG%2F9prsEIpMrsVziMWkgplgOqDxzMqhtgIXvWx0D8kiTt2XsBUWw1sUcrXIBINsBTcSnxaPzN0TVi4umvZFVw48fjFLqV7r3JsxzpRj&X-Amz-Signature=b27bf85032238e825e3873b0ac30a3dfb592b8cf19c2c0a61d7be9ddf36e2ffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBKFAXL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEJaGTGbEFA3DISADJLauGqkIA6IEwh%2F%2BGiNow3H6m92AiEAmNCGqMgN9Kug2ElXoBK3VUboFIj1eSxqRhszdfyEFp8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMs%2By8mQud0RNM6wlyrcA%2BLM6tQ%2B1tEjgNXlWgmR36S%2Fn5LvQZUvMvNCZup5pNCgx%2BQDtBzEIhJrIoOzxrXXkN8LhMOfvRQywiQpqh2BeEzJbhJywdcgoNzl8P2csNOd6xKDPRmTcUfH6IC99AOxXIVqYPrs%2FS%2BoKbmHyrr4NYeo%2BtidESec4pL5S88sJZOAPAu3MRPw9%2BnTSBSQsV%2BFcfF4NVBBuao5D%2FjFy2%2Bh16GWhAprWXM71aqQlb%2FEUkJKy5ulBw4mNYrY1XTwd1qnB0NIh5Y2KYdbx4YeT9bwvcXOVZiRzGzjoETJOlEbUP8qXWbaE8aF3IhFFr%2FlsLN4Uyh80%2BG%2F71Ct%2BoxKFSCnm1HPWDL1S6QubeNp9Ju85p0EJ9Y2nlcgCBeIB4dYXsq2Edlaa35UmAdpJRxxf0Mc5RSsFbucdr1%2Bnuu%2BQsSfwNv7C5iBpY0hJOEPcmiGIHbqLJkz4hWQweSgwzt%2BrD5WGe9B3tzokEcd6LHetxtsrffxMn0kZdjt%2FmQsnPob2JZNQumSup5QENtoXA%2FtjGb7j7Q2x8ChdZl5R3XdwUH8Zxqejd2BzP%2FuNY9ecuDiQFsB9KeTWBsgdQkJgkBxBvRGyUW%2Fcf8ayjfpDjGuqEVKGyoln%2BpxXi%2Fk9xYXX4DdMNf3gMUGOqUB3m3PzSPTCE%2BQ%2F6wGwaY71rN1F14fghCx6NTRleYh163kyYUi4zT3saJ3wbOLYJbVJZJIk7h%2BzeeuZNTlZ%2B8uhUzAVGVPMhOdTJXO8ff7V3o1Jc%2FHKaDoadG%2F9prsEIpMrsVziMWkgplgOqDxzMqhtgIXvWx0D8kiTt2XsBUWw1sUcrXIBINsBTcSnxaPzN0TVi4umvZFVw48fjFLqV7r3JsxzpRj&X-Amz-Signature=9e8320a6dbf35b8f71f0cff20c161ca35e61611d72c7e8492b912357b7baff43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AFKO72Y%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFx6LwvpzfmdjWu3btcE4EMNRJLk1yXTaNI8Yarf1lvNAiEAmCXQpMPZgykOkUQo%2FQgMm6A3PqxYsAcYzNh9EANUedAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKbZUT8VIFVzKhJ59ircAxcDuVyZyrJg8SoEVZ5UanTGnc8Dl8Ja%2Fpp8RsnMd1%2BMRlVT7nHGHv0yPwf7j3Qez2WU2yOxoijLBT8jHgCE9%2F6DTi9Jf3PKtoNQG9dggiHA%2Bg%2FekT%2F1Ljo0ewmcBUPN1kX2Gjc67EhdXU2JEIzWCJzGNUSaURBMridYlsGVJTTkGCjKu3uz%2BOp%2BLgM0X2sIVFHhBYEgj%2F7Hzc3J2SEak1t2%2FgK3veZkmmzW8oJpvyvZSZWuFbFDsE2CvyMykWjVaj5VVzDgyepFD6KWNlgsSobH8OFfaSQwYgUfWyvdvZP7wiuxZ2ParrDPR2jSTu9xrwu0tT2EqtLE5HxM27asCEOhOxMiWTbRaG9DHwKbbZ7d7481xpBnM1xU8QGodDo2Y12rrWEQONS459fHx3E9AHlGhs2Mo2sSE6RD8ETdJiq0BD42SlHT3wr%2FH7UDld3N9v3oxvMCWy1mng3F1Uuy3I4SO5glmVXXQLLdsxtSCiMqn1qGfSDY%2BI1zpzGnySIwif90OoIQTyPI4wyYQJoKiErD1rG9uKT6urppJ7t9IcNoKiuBsH%2F5AePClWgTPN1LhsfYOOTi%2FAL6l7G3BssurQwukwhv2VZ7cEBzd05oUMCL2bIeIX72%2F0SW9EdCMKD4gMUGOqUBSK35uW%2B7iaAw2kOecv30YciAMpourJIMDzR8g1Me3c7XHMastJaWe0ghvon4Dk7aqwx7pFTpGSJCuqujxi2V1yhvqM6fWRJFknXLfDvOUPR0977XnoPQJyTJ2vF%2FP0B92EAPIU%2Beqxzwd3js0QzCDeZloxuGLEk0uEaeWjQwVSAwMoUr7JVgMkk4L86DAfAX583a%2B9YfC%2FaIKJNbWVhm7QUwOgo4&X-Amz-Signature=3889e05657d21f60011dfd0123c63f03c0148c44cfaa1d57fa1f125b3cb1be40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AFKO72Y%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFx6LwvpzfmdjWu3btcE4EMNRJLk1yXTaNI8Yarf1lvNAiEAmCXQpMPZgykOkUQo%2FQgMm6A3PqxYsAcYzNh9EANUedAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKbZUT8VIFVzKhJ59ircAxcDuVyZyrJg8SoEVZ5UanTGnc8Dl8Ja%2Fpp8RsnMd1%2BMRlVT7nHGHv0yPwf7j3Qez2WU2yOxoijLBT8jHgCE9%2F6DTi9Jf3PKtoNQG9dggiHA%2Bg%2FekT%2F1Ljo0ewmcBUPN1kX2Gjc67EhdXU2JEIzWCJzGNUSaURBMridYlsGVJTTkGCjKu3uz%2BOp%2BLgM0X2sIVFHhBYEgj%2F7Hzc3J2SEak1t2%2FgK3veZkmmzW8oJpvyvZSZWuFbFDsE2CvyMykWjVaj5VVzDgyepFD6KWNlgsSobH8OFfaSQwYgUfWyvdvZP7wiuxZ2ParrDPR2jSTu9xrwu0tT2EqtLE5HxM27asCEOhOxMiWTbRaG9DHwKbbZ7d7481xpBnM1xU8QGodDo2Y12rrWEQONS459fHx3E9AHlGhs2Mo2sSE6RD8ETdJiq0BD42SlHT3wr%2FH7UDld3N9v3oxvMCWy1mng3F1Uuy3I4SO5glmVXXQLLdsxtSCiMqn1qGfSDY%2BI1zpzGnySIwif90OoIQTyPI4wyYQJoKiErD1rG9uKT6urppJ7t9IcNoKiuBsH%2F5AePClWgTPN1LhsfYOOTi%2FAL6l7G3BssurQwukwhv2VZ7cEBzd05oUMCL2bIeIX72%2F0SW9EdCMKD4gMUGOqUBSK35uW%2B7iaAw2kOecv30YciAMpourJIMDzR8g1Me3c7XHMastJaWe0ghvon4Dk7aqwx7pFTpGSJCuqujxi2V1yhvqM6fWRJFknXLfDvOUPR0977XnoPQJyTJ2vF%2FP0B92EAPIU%2Beqxzwd3js0QzCDeZloxuGLEk0uEaeWjQwVSAwMoUr7JVgMkk4L86DAfAX583a%2B9YfC%2FaIKJNbWVhm7QUwOgo4&X-Amz-Signature=25b22165233d0fa65c62eebe51ebf29e86ac19968bebdc859112b31ffab0b583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AFKO72Y%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFx6LwvpzfmdjWu3btcE4EMNRJLk1yXTaNI8Yarf1lvNAiEAmCXQpMPZgykOkUQo%2FQgMm6A3PqxYsAcYzNh9EANUedAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKbZUT8VIFVzKhJ59ircAxcDuVyZyrJg8SoEVZ5UanTGnc8Dl8Ja%2Fpp8RsnMd1%2BMRlVT7nHGHv0yPwf7j3Qez2WU2yOxoijLBT8jHgCE9%2F6DTi9Jf3PKtoNQG9dggiHA%2Bg%2FekT%2F1Ljo0ewmcBUPN1kX2Gjc67EhdXU2JEIzWCJzGNUSaURBMridYlsGVJTTkGCjKu3uz%2BOp%2BLgM0X2sIVFHhBYEgj%2F7Hzc3J2SEak1t2%2FgK3veZkmmzW8oJpvyvZSZWuFbFDsE2CvyMykWjVaj5VVzDgyepFD6KWNlgsSobH8OFfaSQwYgUfWyvdvZP7wiuxZ2ParrDPR2jSTu9xrwu0tT2EqtLE5HxM27asCEOhOxMiWTbRaG9DHwKbbZ7d7481xpBnM1xU8QGodDo2Y12rrWEQONS459fHx3E9AHlGhs2Mo2sSE6RD8ETdJiq0BD42SlHT3wr%2FH7UDld3N9v3oxvMCWy1mng3F1Uuy3I4SO5glmVXXQLLdsxtSCiMqn1qGfSDY%2BI1zpzGnySIwif90OoIQTyPI4wyYQJoKiErD1rG9uKT6urppJ7t9IcNoKiuBsH%2F5AePClWgTPN1LhsfYOOTi%2FAL6l7G3BssurQwukwhv2VZ7cEBzd05oUMCL2bIeIX72%2F0SW9EdCMKD4gMUGOqUBSK35uW%2B7iaAw2kOecv30YciAMpourJIMDzR8g1Me3c7XHMastJaWe0ghvon4Dk7aqwx7pFTpGSJCuqujxi2V1yhvqM6fWRJFknXLfDvOUPR0977XnoPQJyTJ2vF%2FP0B92EAPIU%2Beqxzwd3js0QzCDeZloxuGLEk0uEaeWjQwVSAwMoUr7JVgMkk4L86DAfAX583a%2B9YfC%2FaIKJNbWVhm7QUwOgo4&X-Amz-Signature=43cfec27dcedb5a7fd89d9c3c2d8f6acc1a31f57493fe88af948bc2b3c57970c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AFKO72Y%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFx6LwvpzfmdjWu3btcE4EMNRJLk1yXTaNI8Yarf1lvNAiEAmCXQpMPZgykOkUQo%2FQgMm6A3PqxYsAcYzNh9EANUedAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKbZUT8VIFVzKhJ59ircAxcDuVyZyrJg8SoEVZ5UanTGnc8Dl8Ja%2Fpp8RsnMd1%2BMRlVT7nHGHv0yPwf7j3Qez2WU2yOxoijLBT8jHgCE9%2F6DTi9Jf3PKtoNQG9dggiHA%2Bg%2FekT%2F1Ljo0ewmcBUPN1kX2Gjc67EhdXU2JEIzWCJzGNUSaURBMridYlsGVJTTkGCjKu3uz%2BOp%2BLgM0X2sIVFHhBYEgj%2F7Hzc3J2SEak1t2%2FgK3veZkmmzW8oJpvyvZSZWuFbFDsE2CvyMykWjVaj5VVzDgyepFD6KWNlgsSobH8OFfaSQwYgUfWyvdvZP7wiuxZ2ParrDPR2jSTu9xrwu0tT2EqtLE5HxM27asCEOhOxMiWTbRaG9DHwKbbZ7d7481xpBnM1xU8QGodDo2Y12rrWEQONS459fHx3E9AHlGhs2Mo2sSE6RD8ETdJiq0BD42SlHT3wr%2FH7UDld3N9v3oxvMCWy1mng3F1Uuy3I4SO5glmVXXQLLdsxtSCiMqn1qGfSDY%2BI1zpzGnySIwif90OoIQTyPI4wyYQJoKiErD1rG9uKT6urppJ7t9IcNoKiuBsH%2F5AePClWgTPN1LhsfYOOTi%2FAL6l7G3BssurQwukwhv2VZ7cEBzd05oUMCL2bIeIX72%2F0SW9EdCMKD4gMUGOqUBSK35uW%2B7iaAw2kOecv30YciAMpourJIMDzR8g1Me3c7XHMastJaWe0ghvon4Dk7aqwx7pFTpGSJCuqujxi2V1yhvqM6fWRJFknXLfDvOUPR0977XnoPQJyTJ2vF%2FP0B92EAPIU%2Beqxzwd3js0QzCDeZloxuGLEk0uEaeWjQwVSAwMoUr7JVgMkk4L86DAfAX583a%2B9YfC%2FaIKJNbWVhm7QUwOgo4&X-Amz-Signature=2a9a27063084de014888b69ecd682971ca93fd9d143c138a8a25692d4bf2aaee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AFKO72Y%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFx6LwvpzfmdjWu3btcE4EMNRJLk1yXTaNI8Yarf1lvNAiEAmCXQpMPZgykOkUQo%2FQgMm6A3PqxYsAcYzNh9EANUedAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKbZUT8VIFVzKhJ59ircAxcDuVyZyrJg8SoEVZ5UanTGnc8Dl8Ja%2Fpp8RsnMd1%2BMRlVT7nHGHv0yPwf7j3Qez2WU2yOxoijLBT8jHgCE9%2F6DTi9Jf3PKtoNQG9dggiHA%2Bg%2FekT%2F1Ljo0ewmcBUPN1kX2Gjc67EhdXU2JEIzWCJzGNUSaURBMridYlsGVJTTkGCjKu3uz%2BOp%2BLgM0X2sIVFHhBYEgj%2F7Hzc3J2SEak1t2%2FgK3veZkmmzW8oJpvyvZSZWuFbFDsE2CvyMykWjVaj5VVzDgyepFD6KWNlgsSobH8OFfaSQwYgUfWyvdvZP7wiuxZ2ParrDPR2jSTu9xrwu0tT2EqtLE5HxM27asCEOhOxMiWTbRaG9DHwKbbZ7d7481xpBnM1xU8QGodDo2Y12rrWEQONS459fHx3E9AHlGhs2Mo2sSE6RD8ETdJiq0BD42SlHT3wr%2FH7UDld3N9v3oxvMCWy1mng3F1Uuy3I4SO5glmVXXQLLdsxtSCiMqn1qGfSDY%2BI1zpzGnySIwif90OoIQTyPI4wyYQJoKiErD1rG9uKT6urppJ7t9IcNoKiuBsH%2F5AePClWgTPN1LhsfYOOTi%2FAL6l7G3BssurQwukwhv2VZ7cEBzd05oUMCL2bIeIX72%2F0SW9EdCMKD4gMUGOqUBSK35uW%2B7iaAw2kOecv30YciAMpourJIMDzR8g1Me3c7XHMastJaWe0ghvon4Dk7aqwx7pFTpGSJCuqujxi2V1yhvqM6fWRJFknXLfDvOUPR0977XnoPQJyTJ2vF%2FP0B92EAPIU%2Beqxzwd3js0QzCDeZloxuGLEk0uEaeWjQwVSAwMoUr7JVgMkk4L86DAfAX583a%2B9YfC%2FaIKJNbWVhm7QUwOgo4&X-Amz-Signature=2e36bf53a80f049e230c4075759f350fa3e53728c4eacb4fb88a98fe12e4419d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AFKO72Y%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFx6LwvpzfmdjWu3btcE4EMNRJLk1yXTaNI8Yarf1lvNAiEAmCXQpMPZgykOkUQo%2FQgMm6A3PqxYsAcYzNh9EANUedAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKbZUT8VIFVzKhJ59ircAxcDuVyZyrJg8SoEVZ5UanTGnc8Dl8Ja%2Fpp8RsnMd1%2BMRlVT7nHGHv0yPwf7j3Qez2WU2yOxoijLBT8jHgCE9%2F6DTi9Jf3PKtoNQG9dggiHA%2Bg%2FekT%2F1Ljo0ewmcBUPN1kX2Gjc67EhdXU2JEIzWCJzGNUSaURBMridYlsGVJTTkGCjKu3uz%2BOp%2BLgM0X2sIVFHhBYEgj%2F7Hzc3J2SEak1t2%2FgK3veZkmmzW8oJpvyvZSZWuFbFDsE2CvyMykWjVaj5VVzDgyepFD6KWNlgsSobH8OFfaSQwYgUfWyvdvZP7wiuxZ2ParrDPR2jSTu9xrwu0tT2EqtLE5HxM27asCEOhOxMiWTbRaG9DHwKbbZ7d7481xpBnM1xU8QGodDo2Y12rrWEQONS459fHx3E9AHlGhs2Mo2sSE6RD8ETdJiq0BD42SlHT3wr%2FH7UDld3N9v3oxvMCWy1mng3F1Uuy3I4SO5glmVXXQLLdsxtSCiMqn1qGfSDY%2BI1zpzGnySIwif90OoIQTyPI4wyYQJoKiErD1rG9uKT6urppJ7t9IcNoKiuBsH%2F5AePClWgTPN1LhsfYOOTi%2FAL6l7G3BssurQwukwhv2VZ7cEBzd05oUMCL2bIeIX72%2F0SW9EdCMKD4gMUGOqUBSK35uW%2B7iaAw2kOecv30YciAMpourJIMDzR8g1Me3c7XHMastJaWe0ghvon4Dk7aqwx7pFTpGSJCuqujxi2V1yhvqM6fWRJFknXLfDvOUPR0977XnoPQJyTJ2vF%2FP0B92EAPIU%2Beqxzwd3js0QzCDeZloxuGLEk0uEaeWjQwVSAwMoUr7JVgMkk4L86DAfAX583a%2B9YfC%2FaIKJNbWVhm7QUwOgo4&X-Amz-Signature=a0f1d56f4f94b5b3e0573ca04e20618df535a5288a747bb6a193e79388f3ea66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AFKO72Y%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFx6LwvpzfmdjWu3btcE4EMNRJLk1yXTaNI8Yarf1lvNAiEAmCXQpMPZgykOkUQo%2FQgMm6A3PqxYsAcYzNh9EANUedAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKbZUT8VIFVzKhJ59ircAxcDuVyZyrJg8SoEVZ5UanTGnc8Dl8Ja%2Fpp8RsnMd1%2BMRlVT7nHGHv0yPwf7j3Qez2WU2yOxoijLBT8jHgCE9%2F6DTi9Jf3PKtoNQG9dggiHA%2Bg%2FekT%2F1Ljo0ewmcBUPN1kX2Gjc67EhdXU2JEIzWCJzGNUSaURBMridYlsGVJTTkGCjKu3uz%2BOp%2BLgM0X2sIVFHhBYEgj%2F7Hzc3J2SEak1t2%2FgK3veZkmmzW8oJpvyvZSZWuFbFDsE2CvyMykWjVaj5VVzDgyepFD6KWNlgsSobH8OFfaSQwYgUfWyvdvZP7wiuxZ2ParrDPR2jSTu9xrwu0tT2EqtLE5HxM27asCEOhOxMiWTbRaG9DHwKbbZ7d7481xpBnM1xU8QGodDo2Y12rrWEQONS459fHx3E9AHlGhs2Mo2sSE6RD8ETdJiq0BD42SlHT3wr%2FH7UDld3N9v3oxvMCWy1mng3F1Uuy3I4SO5glmVXXQLLdsxtSCiMqn1qGfSDY%2BI1zpzGnySIwif90OoIQTyPI4wyYQJoKiErD1rG9uKT6urppJ7t9IcNoKiuBsH%2F5AePClWgTPN1LhsfYOOTi%2FAL6l7G3BssurQwukwhv2VZ7cEBzd05oUMCL2bIeIX72%2F0SW9EdCMKD4gMUGOqUBSK35uW%2B7iaAw2kOecv30YciAMpourJIMDzR8g1Me3c7XHMastJaWe0ghvon4Dk7aqwx7pFTpGSJCuqujxi2V1yhvqM6fWRJFknXLfDvOUPR0977XnoPQJyTJ2vF%2FP0B92EAPIU%2Beqxzwd3js0QzCDeZloxuGLEk0uEaeWjQwVSAwMoUr7JVgMkk4L86DAfAX583a%2B9YfC%2FaIKJNbWVhm7QUwOgo4&X-Amz-Signature=43cfec27dcedb5a7fd89d9c3c2d8f6acc1a31f57493fe88af948bc2b3c57970c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AFKO72Y%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFx6LwvpzfmdjWu3btcE4EMNRJLk1yXTaNI8Yarf1lvNAiEAmCXQpMPZgykOkUQo%2FQgMm6A3PqxYsAcYzNh9EANUedAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKbZUT8VIFVzKhJ59ircAxcDuVyZyrJg8SoEVZ5UanTGnc8Dl8Ja%2Fpp8RsnMd1%2BMRlVT7nHGHv0yPwf7j3Qez2WU2yOxoijLBT8jHgCE9%2F6DTi9Jf3PKtoNQG9dggiHA%2Bg%2FekT%2F1Ljo0ewmcBUPN1kX2Gjc67EhdXU2JEIzWCJzGNUSaURBMridYlsGVJTTkGCjKu3uz%2BOp%2BLgM0X2sIVFHhBYEgj%2F7Hzc3J2SEak1t2%2FgK3veZkmmzW8oJpvyvZSZWuFbFDsE2CvyMykWjVaj5VVzDgyepFD6KWNlgsSobH8OFfaSQwYgUfWyvdvZP7wiuxZ2ParrDPR2jSTu9xrwu0tT2EqtLE5HxM27asCEOhOxMiWTbRaG9DHwKbbZ7d7481xpBnM1xU8QGodDo2Y12rrWEQONS459fHx3E9AHlGhs2Mo2sSE6RD8ETdJiq0BD42SlHT3wr%2FH7UDld3N9v3oxvMCWy1mng3F1Uuy3I4SO5glmVXXQLLdsxtSCiMqn1qGfSDY%2BI1zpzGnySIwif90OoIQTyPI4wyYQJoKiErD1rG9uKT6urppJ7t9IcNoKiuBsH%2F5AePClWgTPN1LhsfYOOTi%2FAL6l7G3BssurQwukwhv2VZ7cEBzd05oUMCL2bIeIX72%2F0SW9EdCMKD4gMUGOqUBSK35uW%2B7iaAw2kOecv30YciAMpourJIMDzR8g1Me3c7XHMastJaWe0ghvon4Dk7aqwx7pFTpGSJCuqujxi2V1yhvqM6fWRJFknXLfDvOUPR0977XnoPQJyTJ2vF%2FP0B92EAPIU%2Beqxzwd3js0QzCDeZloxuGLEk0uEaeWjQwVSAwMoUr7JVgMkk4L86DAfAX583a%2B9YfC%2FaIKJNbWVhm7QUwOgo4&X-Amz-Signature=307a49fadf29bfcf4691d1c1415dc2c5b5032d7d17fc2a6f66f5794f64276ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AFKO72Y%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFx6LwvpzfmdjWu3btcE4EMNRJLk1yXTaNI8Yarf1lvNAiEAmCXQpMPZgykOkUQo%2FQgMm6A3PqxYsAcYzNh9EANUedAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKbZUT8VIFVzKhJ59ircAxcDuVyZyrJg8SoEVZ5UanTGnc8Dl8Ja%2Fpp8RsnMd1%2BMRlVT7nHGHv0yPwf7j3Qez2WU2yOxoijLBT8jHgCE9%2F6DTi9Jf3PKtoNQG9dggiHA%2Bg%2FekT%2F1Ljo0ewmcBUPN1kX2Gjc67EhdXU2JEIzWCJzGNUSaURBMridYlsGVJTTkGCjKu3uz%2BOp%2BLgM0X2sIVFHhBYEgj%2F7Hzc3J2SEak1t2%2FgK3veZkmmzW8oJpvyvZSZWuFbFDsE2CvyMykWjVaj5VVzDgyepFD6KWNlgsSobH8OFfaSQwYgUfWyvdvZP7wiuxZ2ParrDPR2jSTu9xrwu0tT2EqtLE5HxM27asCEOhOxMiWTbRaG9DHwKbbZ7d7481xpBnM1xU8QGodDo2Y12rrWEQONS459fHx3E9AHlGhs2Mo2sSE6RD8ETdJiq0BD42SlHT3wr%2FH7UDld3N9v3oxvMCWy1mng3F1Uuy3I4SO5glmVXXQLLdsxtSCiMqn1qGfSDY%2BI1zpzGnySIwif90OoIQTyPI4wyYQJoKiErD1rG9uKT6urppJ7t9IcNoKiuBsH%2F5AePClWgTPN1LhsfYOOTi%2FAL6l7G3BssurQwukwhv2VZ7cEBzd05oUMCL2bIeIX72%2F0SW9EdCMKD4gMUGOqUBSK35uW%2B7iaAw2kOecv30YciAMpourJIMDzR8g1Me3c7XHMastJaWe0ghvon4Dk7aqwx7pFTpGSJCuqujxi2V1yhvqM6fWRJFknXLfDvOUPR0977XnoPQJyTJ2vF%2FP0B92EAPIU%2Beqxzwd3js0QzCDeZloxuGLEk0uEaeWjQwVSAwMoUr7JVgMkk4L86DAfAX583a%2B9YfC%2FaIKJNbWVhm7QUwOgo4&X-Amz-Signature=b6ff58e04c166616415b926fc1e1eb5ab30c0be0e8b9c06b48125a6609902265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AFKO72Y%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFx6LwvpzfmdjWu3btcE4EMNRJLk1yXTaNI8Yarf1lvNAiEAmCXQpMPZgykOkUQo%2FQgMm6A3PqxYsAcYzNh9EANUedAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKbZUT8VIFVzKhJ59ircAxcDuVyZyrJg8SoEVZ5UanTGnc8Dl8Ja%2Fpp8RsnMd1%2BMRlVT7nHGHv0yPwf7j3Qez2WU2yOxoijLBT8jHgCE9%2F6DTi9Jf3PKtoNQG9dggiHA%2Bg%2FekT%2F1Ljo0ewmcBUPN1kX2Gjc67EhdXU2JEIzWCJzGNUSaURBMridYlsGVJTTkGCjKu3uz%2BOp%2BLgM0X2sIVFHhBYEgj%2F7Hzc3J2SEak1t2%2FgK3veZkmmzW8oJpvyvZSZWuFbFDsE2CvyMykWjVaj5VVzDgyepFD6KWNlgsSobH8OFfaSQwYgUfWyvdvZP7wiuxZ2ParrDPR2jSTu9xrwu0tT2EqtLE5HxM27asCEOhOxMiWTbRaG9DHwKbbZ7d7481xpBnM1xU8QGodDo2Y12rrWEQONS459fHx3E9AHlGhs2Mo2sSE6RD8ETdJiq0BD42SlHT3wr%2FH7UDld3N9v3oxvMCWy1mng3F1Uuy3I4SO5glmVXXQLLdsxtSCiMqn1qGfSDY%2BI1zpzGnySIwif90OoIQTyPI4wyYQJoKiErD1rG9uKT6urppJ7t9IcNoKiuBsH%2F5AePClWgTPN1LhsfYOOTi%2FAL6l7G3BssurQwukwhv2VZ7cEBzd05oUMCL2bIeIX72%2F0SW9EdCMKD4gMUGOqUBSK35uW%2B7iaAw2kOecv30YciAMpourJIMDzR8g1Me3c7XHMastJaWe0ghvon4Dk7aqwx7pFTpGSJCuqujxi2V1yhvqM6fWRJFknXLfDvOUPR0977XnoPQJyTJ2vF%2FP0B92EAPIU%2Beqxzwd3js0QzCDeZloxuGLEk0uEaeWjQwVSAwMoUr7JVgMkk4L86DAfAX583a%2B9YfC%2FaIKJNbWVhm7QUwOgo4&X-Amz-Signature=52bc4e8ccae4ad10a310d2d19f58e451c21164e41ed1bd0c05d0f67a0994a924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
