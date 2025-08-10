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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD45GNOD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bQ3VtimuascRccOTBe%2Bc%2Fkpv01pzZiF69APZvtLLmgIhAO7jJ4GyG67mkzc1W%2BoaR421pqiWux6cq6lsOwsv%2FJ3BKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWtmnC5I8k%2BiCkawq3APIWt5n82En8KqKn9zESTM7rRbjqZ%2FXR2EC3%2BspGt8DbFIOwcBgWp94BVRLWqvGe5S07mic1Hwc7qTBg0VHtSZHjo6sCBzGS%2B3o8MKAD9f%2BgLivZgh7KbKbBp7I%2B1BExW9TvXP7ZTsV73McsHliPpkPdbGNAi97VJTHQv1N0YQA533I8d7u6YwoENuUpq9dAxB0Gy130gk%2FIcwzYi%2FAcgYXXus2OzXZiEdvvPv4L4Xq0PK0lV54bTuKlXg%2FrVEa1O0Kcs8XfksnRDPio4M6LX%2F6A8K%2Bj3ZG9x%2Fwtc%2FtJGpZu%2FYl17zlQ4m1soaxDI6GRBKhRzFWG6qDX4AEIPMLcwEZCjhx%2FLqguU6eLW7WHVY%2Be4G%2F1L4btoyAlvaiDhTjJ%2Bj4y%2BTJSwo4Gh1PNCgrV%2Bek4qsPogm2Tt2OhNEqSh6vFA%2B0yOq%2FxfYbnkvkUVmkGOFU4eGisgrQQvtet70PHrwSOuL%2FsfqdNq8mBJQkvWhjAzw1wNzs3cA7EXuRg4FhpHA%2BWdSAH%2FIRoIhU%2Bhd7d8ogWGITUryVt1%2B0p7QfQbQn3xMWMkURMUCRiR7OckhwaEFQdUS0w4F6XOuNFU22LaaCYBFuM3t3%2BPqbhC3Snr5Dx5yubOIHW55jHFp23jCas9%2FEBjqkATGdUpvPH5mjHthMIsWW73mqNxH9oDcwIathxSWbZ5HXTtpVjCGvk%2BmFYDFSFkQr83s%2BQlTiWSjEl4BbkD7%2Fya1rn%2BetibAu9LIE9mDyJNoAIBHiBKWYgQqQ7tJ7OoJq1Jk%2B6%2Bx5614ZcfIsI%2B9tBJ6AKyxFSNaPgGoFI%2FN9P8AxC%2BH6R097G8v0C8X%2BKre3HhGnRC6ahTrexP5VxDG8%2FwpS3m1X&X-Amz-Signature=a9fb478584c6fbc44eac0681e45cde99ecada30d6468e1e39538c431a418488a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD45GNOD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bQ3VtimuascRccOTBe%2Bc%2Fkpv01pzZiF69APZvtLLmgIhAO7jJ4GyG67mkzc1W%2BoaR421pqiWux6cq6lsOwsv%2FJ3BKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWtmnC5I8k%2BiCkawq3APIWt5n82En8KqKn9zESTM7rRbjqZ%2FXR2EC3%2BspGt8DbFIOwcBgWp94BVRLWqvGe5S07mic1Hwc7qTBg0VHtSZHjo6sCBzGS%2B3o8MKAD9f%2BgLivZgh7KbKbBp7I%2B1BExW9TvXP7ZTsV73McsHliPpkPdbGNAi97VJTHQv1N0YQA533I8d7u6YwoENuUpq9dAxB0Gy130gk%2FIcwzYi%2FAcgYXXus2OzXZiEdvvPv4L4Xq0PK0lV54bTuKlXg%2FrVEa1O0Kcs8XfksnRDPio4M6LX%2F6A8K%2Bj3ZG9x%2Fwtc%2FtJGpZu%2FYl17zlQ4m1soaxDI6GRBKhRzFWG6qDX4AEIPMLcwEZCjhx%2FLqguU6eLW7WHVY%2Be4G%2F1L4btoyAlvaiDhTjJ%2Bj4y%2BTJSwo4Gh1PNCgrV%2Bek4qsPogm2Tt2OhNEqSh6vFA%2B0yOq%2FxfYbnkvkUVmkGOFU4eGisgrQQvtet70PHrwSOuL%2FsfqdNq8mBJQkvWhjAzw1wNzs3cA7EXuRg4FhpHA%2BWdSAH%2FIRoIhU%2Bhd7d8ogWGITUryVt1%2B0p7QfQbQn3xMWMkURMUCRiR7OckhwaEFQdUS0w4F6XOuNFU22LaaCYBFuM3t3%2BPqbhC3Snr5Dx5yubOIHW55jHFp23jCas9%2FEBjqkATGdUpvPH5mjHthMIsWW73mqNxH9oDcwIathxSWbZ5HXTtpVjCGvk%2BmFYDFSFkQr83s%2BQlTiWSjEl4BbkD7%2Fya1rn%2BetibAu9LIE9mDyJNoAIBHiBKWYgQqQ7tJ7OoJq1Jk%2B6%2Bx5614ZcfIsI%2B9tBJ6AKyxFSNaPgGoFI%2FN9P8AxC%2BH6R097G8v0C8X%2BKre3HhGnRC6ahTrexP5VxDG8%2FwpS3m1X&X-Amz-Signature=e637b5e7d6b18cabf23b7e550fd8d06412eade7b41acc6fbcd3ba09bbfe6bd0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD45GNOD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bQ3VtimuascRccOTBe%2Bc%2Fkpv01pzZiF69APZvtLLmgIhAO7jJ4GyG67mkzc1W%2BoaR421pqiWux6cq6lsOwsv%2FJ3BKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWtmnC5I8k%2BiCkawq3APIWt5n82En8KqKn9zESTM7rRbjqZ%2FXR2EC3%2BspGt8DbFIOwcBgWp94BVRLWqvGe5S07mic1Hwc7qTBg0VHtSZHjo6sCBzGS%2B3o8MKAD9f%2BgLivZgh7KbKbBp7I%2B1BExW9TvXP7ZTsV73McsHliPpkPdbGNAi97VJTHQv1N0YQA533I8d7u6YwoENuUpq9dAxB0Gy130gk%2FIcwzYi%2FAcgYXXus2OzXZiEdvvPv4L4Xq0PK0lV54bTuKlXg%2FrVEa1O0Kcs8XfksnRDPio4M6LX%2F6A8K%2Bj3ZG9x%2Fwtc%2FtJGpZu%2FYl17zlQ4m1soaxDI6GRBKhRzFWG6qDX4AEIPMLcwEZCjhx%2FLqguU6eLW7WHVY%2Be4G%2F1L4btoyAlvaiDhTjJ%2Bj4y%2BTJSwo4Gh1PNCgrV%2Bek4qsPogm2Tt2OhNEqSh6vFA%2B0yOq%2FxfYbnkvkUVmkGOFU4eGisgrQQvtet70PHrwSOuL%2FsfqdNq8mBJQkvWhjAzw1wNzs3cA7EXuRg4FhpHA%2BWdSAH%2FIRoIhU%2Bhd7d8ogWGITUryVt1%2B0p7QfQbQn3xMWMkURMUCRiR7OckhwaEFQdUS0w4F6XOuNFU22LaaCYBFuM3t3%2BPqbhC3Snr5Dx5yubOIHW55jHFp23jCas9%2FEBjqkATGdUpvPH5mjHthMIsWW73mqNxH9oDcwIathxSWbZ5HXTtpVjCGvk%2BmFYDFSFkQr83s%2BQlTiWSjEl4BbkD7%2Fya1rn%2BetibAu9LIE9mDyJNoAIBHiBKWYgQqQ7tJ7OoJq1Jk%2B6%2Bx5614ZcfIsI%2B9tBJ6AKyxFSNaPgGoFI%2FN9P8AxC%2BH6R097G8v0C8X%2BKre3HhGnRC6ahTrexP5VxDG8%2FwpS3m1X&X-Amz-Signature=b9b0f234cf1e78d5b2790941eb5bff85278c815eae5ec6034a2dd0d8a89f5ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD45GNOD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bQ3VtimuascRccOTBe%2Bc%2Fkpv01pzZiF69APZvtLLmgIhAO7jJ4GyG67mkzc1W%2BoaR421pqiWux6cq6lsOwsv%2FJ3BKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWtmnC5I8k%2BiCkawq3APIWt5n82En8KqKn9zESTM7rRbjqZ%2FXR2EC3%2BspGt8DbFIOwcBgWp94BVRLWqvGe5S07mic1Hwc7qTBg0VHtSZHjo6sCBzGS%2B3o8MKAD9f%2BgLivZgh7KbKbBp7I%2B1BExW9TvXP7ZTsV73McsHliPpkPdbGNAi97VJTHQv1N0YQA533I8d7u6YwoENuUpq9dAxB0Gy130gk%2FIcwzYi%2FAcgYXXus2OzXZiEdvvPv4L4Xq0PK0lV54bTuKlXg%2FrVEa1O0Kcs8XfksnRDPio4M6LX%2F6A8K%2Bj3ZG9x%2Fwtc%2FtJGpZu%2FYl17zlQ4m1soaxDI6GRBKhRzFWG6qDX4AEIPMLcwEZCjhx%2FLqguU6eLW7WHVY%2Be4G%2F1L4btoyAlvaiDhTjJ%2Bj4y%2BTJSwo4Gh1PNCgrV%2Bek4qsPogm2Tt2OhNEqSh6vFA%2B0yOq%2FxfYbnkvkUVmkGOFU4eGisgrQQvtet70PHrwSOuL%2FsfqdNq8mBJQkvWhjAzw1wNzs3cA7EXuRg4FhpHA%2BWdSAH%2FIRoIhU%2Bhd7d8ogWGITUryVt1%2B0p7QfQbQn3xMWMkURMUCRiR7OckhwaEFQdUS0w4F6XOuNFU22LaaCYBFuM3t3%2BPqbhC3Snr5Dx5yubOIHW55jHFp23jCas9%2FEBjqkATGdUpvPH5mjHthMIsWW73mqNxH9oDcwIathxSWbZ5HXTtpVjCGvk%2BmFYDFSFkQr83s%2BQlTiWSjEl4BbkD7%2Fya1rn%2BetibAu9LIE9mDyJNoAIBHiBKWYgQqQ7tJ7OoJq1Jk%2B6%2Bx5614ZcfIsI%2B9tBJ6AKyxFSNaPgGoFI%2FN9P8AxC%2BH6R097G8v0C8X%2BKre3HhGnRC6ahTrexP5VxDG8%2FwpS3m1X&X-Amz-Signature=bd1336ed27c8cc6a93124c77bd2656459ee127548b87f1ef30efd29c8a0d80b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD45GNOD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bQ3VtimuascRccOTBe%2Bc%2Fkpv01pzZiF69APZvtLLmgIhAO7jJ4GyG67mkzc1W%2BoaR421pqiWux6cq6lsOwsv%2FJ3BKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWtmnC5I8k%2BiCkawq3APIWt5n82En8KqKn9zESTM7rRbjqZ%2FXR2EC3%2BspGt8DbFIOwcBgWp94BVRLWqvGe5S07mic1Hwc7qTBg0VHtSZHjo6sCBzGS%2B3o8MKAD9f%2BgLivZgh7KbKbBp7I%2B1BExW9TvXP7ZTsV73McsHliPpkPdbGNAi97VJTHQv1N0YQA533I8d7u6YwoENuUpq9dAxB0Gy130gk%2FIcwzYi%2FAcgYXXus2OzXZiEdvvPv4L4Xq0PK0lV54bTuKlXg%2FrVEa1O0Kcs8XfksnRDPio4M6LX%2F6A8K%2Bj3ZG9x%2Fwtc%2FtJGpZu%2FYl17zlQ4m1soaxDI6GRBKhRzFWG6qDX4AEIPMLcwEZCjhx%2FLqguU6eLW7WHVY%2Be4G%2F1L4btoyAlvaiDhTjJ%2Bj4y%2BTJSwo4Gh1PNCgrV%2Bek4qsPogm2Tt2OhNEqSh6vFA%2B0yOq%2FxfYbnkvkUVmkGOFU4eGisgrQQvtet70PHrwSOuL%2FsfqdNq8mBJQkvWhjAzw1wNzs3cA7EXuRg4FhpHA%2BWdSAH%2FIRoIhU%2Bhd7d8ogWGITUryVt1%2B0p7QfQbQn3xMWMkURMUCRiR7OckhwaEFQdUS0w4F6XOuNFU22LaaCYBFuM3t3%2BPqbhC3Snr5Dx5yubOIHW55jHFp23jCas9%2FEBjqkATGdUpvPH5mjHthMIsWW73mqNxH9oDcwIathxSWbZ5HXTtpVjCGvk%2BmFYDFSFkQr83s%2BQlTiWSjEl4BbkD7%2Fya1rn%2BetibAu9LIE9mDyJNoAIBHiBKWYgQqQ7tJ7OoJq1Jk%2B6%2Bx5614ZcfIsI%2B9tBJ6AKyxFSNaPgGoFI%2FN9P8AxC%2BH6R097G8v0C8X%2BKre3HhGnRC6ahTrexP5VxDG8%2FwpS3m1X&X-Amz-Signature=ecd0bdaa015d358c363aeaf74e2892da94045b4952248fd2a058cd13fa63991b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD45GNOD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bQ3VtimuascRccOTBe%2Bc%2Fkpv01pzZiF69APZvtLLmgIhAO7jJ4GyG67mkzc1W%2BoaR421pqiWux6cq6lsOwsv%2FJ3BKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWtmnC5I8k%2BiCkawq3APIWt5n82En8KqKn9zESTM7rRbjqZ%2FXR2EC3%2BspGt8DbFIOwcBgWp94BVRLWqvGe5S07mic1Hwc7qTBg0VHtSZHjo6sCBzGS%2B3o8MKAD9f%2BgLivZgh7KbKbBp7I%2B1BExW9TvXP7ZTsV73McsHliPpkPdbGNAi97VJTHQv1N0YQA533I8d7u6YwoENuUpq9dAxB0Gy130gk%2FIcwzYi%2FAcgYXXus2OzXZiEdvvPv4L4Xq0PK0lV54bTuKlXg%2FrVEa1O0Kcs8XfksnRDPio4M6LX%2F6A8K%2Bj3ZG9x%2Fwtc%2FtJGpZu%2FYl17zlQ4m1soaxDI6GRBKhRzFWG6qDX4AEIPMLcwEZCjhx%2FLqguU6eLW7WHVY%2Be4G%2F1L4btoyAlvaiDhTjJ%2Bj4y%2BTJSwo4Gh1PNCgrV%2Bek4qsPogm2Tt2OhNEqSh6vFA%2B0yOq%2FxfYbnkvkUVmkGOFU4eGisgrQQvtet70PHrwSOuL%2FsfqdNq8mBJQkvWhjAzw1wNzs3cA7EXuRg4FhpHA%2BWdSAH%2FIRoIhU%2Bhd7d8ogWGITUryVt1%2B0p7QfQbQn3xMWMkURMUCRiR7OckhwaEFQdUS0w4F6XOuNFU22LaaCYBFuM3t3%2BPqbhC3Snr5Dx5yubOIHW55jHFp23jCas9%2FEBjqkATGdUpvPH5mjHthMIsWW73mqNxH9oDcwIathxSWbZ5HXTtpVjCGvk%2BmFYDFSFkQr83s%2BQlTiWSjEl4BbkD7%2Fya1rn%2BetibAu9LIE9mDyJNoAIBHiBKWYgQqQ7tJ7OoJq1Jk%2B6%2Bx5614ZcfIsI%2B9tBJ6AKyxFSNaPgGoFI%2FN9P8AxC%2BH6R097G8v0C8X%2BKre3HhGnRC6ahTrexP5VxDG8%2FwpS3m1X&X-Amz-Signature=86c3a2e016e37601f6b0fa1f39be94566e13b5bb2df06a56ab6c1dc4f000e615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD45GNOD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bQ3VtimuascRccOTBe%2Bc%2Fkpv01pzZiF69APZvtLLmgIhAO7jJ4GyG67mkzc1W%2BoaR421pqiWux6cq6lsOwsv%2FJ3BKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWtmnC5I8k%2BiCkawq3APIWt5n82En8KqKn9zESTM7rRbjqZ%2FXR2EC3%2BspGt8DbFIOwcBgWp94BVRLWqvGe5S07mic1Hwc7qTBg0VHtSZHjo6sCBzGS%2B3o8MKAD9f%2BgLivZgh7KbKbBp7I%2B1BExW9TvXP7ZTsV73McsHliPpkPdbGNAi97VJTHQv1N0YQA533I8d7u6YwoENuUpq9dAxB0Gy130gk%2FIcwzYi%2FAcgYXXus2OzXZiEdvvPv4L4Xq0PK0lV54bTuKlXg%2FrVEa1O0Kcs8XfksnRDPio4M6LX%2F6A8K%2Bj3ZG9x%2Fwtc%2FtJGpZu%2FYl17zlQ4m1soaxDI6GRBKhRzFWG6qDX4AEIPMLcwEZCjhx%2FLqguU6eLW7WHVY%2Be4G%2F1L4btoyAlvaiDhTjJ%2Bj4y%2BTJSwo4Gh1PNCgrV%2Bek4qsPogm2Tt2OhNEqSh6vFA%2B0yOq%2FxfYbnkvkUVmkGOFU4eGisgrQQvtet70PHrwSOuL%2FsfqdNq8mBJQkvWhjAzw1wNzs3cA7EXuRg4FhpHA%2BWdSAH%2FIRoIhU%2Bhd7d8ogWGITUryVt1%2B0p7QfQbQn3xMWMkURMUCRiR7OckhwaEFQdUS0w4F6XOuNFU22LaaCYBFuM3t3%2BPqbhC3Snr5Dx5yubOIHW55jHFp23jCas9%2FEBjqkATGdUpvPH5mjHthMIsWW73mqNxH9oDcwIathxSWbZ5HXTtpVjCGvk%2BmFYDFSFkQr83s%2BQlTiWSjEl4BbkD7%2Fya1rn%2BetibAu9LIE9mDyJNoAIBHiBKWYgQqQ7tJ7OoJq1Jk%2B6%2Bx5614ZcfIsI%2B9tBJ6AKyxFSNaPgGoFI%2FN9P8AxC%2BH6R097G8v0C8X%2BKre3HhGnRC6ahTrexP5VxDG8%2FwpS3m1X&X-Amz-Signature=855e041c68399fb9c4430620e2ca1f4196f220717bbc322398f46c380a2d79e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD45GNOD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bQ3VtimuascRccOTBe%2Bc%2Fkpv01pzZiF69APZvtLLmgIhAO7jJ4GyG67mkzc1W%2BoaR421pqiWux6cq6lsOwsv%2FJ3BKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWtmnC5I8k%2BiCkawq3APIWt5n82En8KqKn9zESTM7rRbjqZ%2FXR2EC3%2BspGt8DbFIOwcBgWp94BVRLWqvGe5S07mic1Hwc7qTBg0VHtSZHjo6sCBzGS%2B3o8MKAD9f%2BgLivZgh7KbKbBp7I%2B1BExW9TvXP7ZTsV73McsHliPpkPdbGNAi97VJTHQv1N0YQA533I8d7u6YwoENuUpq9dAxB0Gy130gk%2FIcwzYi%2FAcgYXXus2OzXZiEdvvPv4L4Xq0PK0lV54bTuKlXg%2FrVEa1O0Kcs8XfksnRDPio4M6LX%2F6A8K%2Bj3ZG9x%2Fwtc%2FtJGpZu%2FYl17zlQ4m1soaxDI6GRBKhRzFWG6qDX4AEIPMLcwEZCjhx%2FLqguU6eLW7WHVY%2Be4G%2F1L4btoyAlvaiDhTjJ%2Bj4y%2BTJSwo4Gh1PNCgrV%2Bek4qsPogm2Tt2OhNEqSh6vFA%2B0yOq%2FxfYbnkvkUVmkGOFU4eGisgrQQvtet70PHrwSOuL%2FsfqdNq8mBJQkvWhjAzw1wNzs3cA7EXuRg4FhpHA%2BWdSAH%2FIRoIhU%2Bhd7d8ogWGITUryVt1%2B0p7QfQbQn3xMWMkURMUCRiR7OckhwaEFQdUS0w4F6XOuNFU22LaaCYBFuM3t3%2BPqbhC3Snr5Dx5yubOIHW55jHFp23jCas9%2FEBjqkATGdUpvPH5mjHthMIsWW73mqNxH9oDcwIathxSWbZ5HXTtpVjCGvk%2BmFYDFSFkQr83s%2BQlTiWSjEl4BbkD7%2Fya1rn%2BetibAu9LIE9mDyJNoAIBHiBKWYgQqQ7tJ7OoJq1Jk%2B6%2Bx5614ZcfIsI%2B9tBJ6AKyxFSNaPgGoFI%2FN9P8AxC%2BH6R097G8v0C8X%2BKre3HhGnRC6ahTrexP5VxDG8%2FwpS3m1X&X-Amz-Signature=c0f4e9bade029f6f878d309021749de94efcc2dcbf1a3fd640cd94ee39e0cda3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD45GNOD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bQ3VtimuascRccOTBe%2Bc%2Fkpv01pzZiF69APZvtLLmgIhAO7jJ4GyG67mkzc1W%2BoaR421pqiWux6cq6lsOwsv%2FJ3BKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWtmnC5I8k%2BiCkawq3APIWt5n82En8KqKn9zESTM7rRbjqZ%2FXR2EC3%2BspGt8DbFIOwcBgWp94BVRLWqvGe5S07mic1Hwc7qTBg0VHtSZHjo6sCBzGS%2B3o8MKAD9f%2BgLivZgh7KbKbBp7I%2B1BExW9TvXP7ZTsV73McsHliPpkPdbGNAi97VJTHQv1N0YQA533I8d7u6YwoENuUpq9dAxB0Gy130gk%2FIcwzYi%2FAcgYXXus2OzXZiEdvvPv4L4Xq0PK0lV54bTuKlXg%2FrVEa1O0Kcs8XfksnRDPio4M6LX%2F6A8K%2Bj3ZG9x%2Fwtc%2FtJGpZu%2FYl17zlQ4m1soaxDI6GRBKhRzFWG6qDX4AEIPMLcwEZCjhx%2FLqguU6eLW7WHVY%2Be4G%2F1L4btoyAlvaiDhTjJ%2Bj4y%2BTJSwo4Gh1PNCgrV%2Bek4qsPogm2Tt2OhNEqSh6vFA%2B0yOq%2FxfYbnkvkUVmkGOFU4eGisgrQQvtet70PHrwSOuL%2FsfqdNq8mBJQkvWhjAzw1wNzs3cA7EXuRg4FhpHA%2BWdSAH%2FIRoIhU%2Bhd7d8ogWGITUryVt1%2B0p7QfQbQn3xMWMkURMUCRiR7OckhwaEFQdUS0w4F6XOuNFU22LaaCYBFuM3t3%2BPqbhC3Snr5Dx5yubOIHW55jHFp23jCas9%2FEBjqkATGdUpvPH5mjHthMIsWW73mqNxH9oDcwIathxSWbZ5HXTtpVjCGvk%2BmFYDFSFkQr83s%2BQlTiWSjEl4BbkD7%2Fya1rn%2BetibAu9LIE9mDyJNoAIBHiBKWYgQqQ7tJ7OoJq1Jk%2B6%2Bx5614ZcfIsI%2B9tBJ6AKyxFSNaPgGoFI%2FN9P8AxC%2BH6R097G8v0C8X%2BKre3HhGnRC6ahTrexP5VxDG8%2FwpS3m1X&X-Amz-Signature=8eb76eb19f8272bed85c074231383575e9f82355922a54d9d0f5058711cc738d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD45GNOD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bQ3VtimuascRccOTBe%2Bc%2Fkpv01pzZiF69APZvtLLmgIhAO7jJ4GyG67mkzc1W%2BoaR421pqiWux6cq6lsOwsv%2FJ3BKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWtmnC5I8k%2BiCkawq3APIWt5n82En8KqKn9zESTM7rRbjqZ%2FXR2EC3%2BspGt8DbFIOwcBgWp94BVRLWqvGe5S07mic1Hwc7qTBg0VHtSZHjo6sCBzGS%2B3o8MKAD9f%2BgLivZgh7KbKbBp7I%2B1BExW9TvXP7ZTsV73McsHliPpkPdbGNAi97VJTHQv1N0YQA533I8d7u6YwoENuUpq9dAxB0Gy130gk%2FIcwzYi%2FAcgYXXus2OzXZiEdvvPv4L4Xq0PK0lV54bTuKlXg%2FrVEa1O0Kcs8XfksnRDPio4M6LX%2F6A8K%2Bj3ZG9x%2Fwtc%2FtJGpZu%2FYl17zlQ4m1soaxDI6GRBKhRzFWG6qDX4AEIPMLcwEZCjhx%2FLqguU6eLW7WHVY%2Be4G%2F1L4btoyAlvaiDhTjJ%2Bj4y%2BTJSwo4Gh1PNCgrV%2Bek4qsPogm2Tt2OhNEqSh6vFA%2B0yOq%2FxfYbnkvkUVmkGOFU4eGisgrQQvtet70PHrwSOuL%2FsfqdNq8mBJQkvWhjAzw1wNzs3cA7EXuRg4FhpHA%2BWdSAH%2FIRoIhU%2Bhd7d8ogWGITUryVt1%2B0p7QfQbQn3xMWMkURMUCRiR7OckhwaEFQdUS0w4F6XOuNFU22LaaCYBFuM3t3%2BPqbhC3Snr5Dx5yubOIHW55jHFp23jCas9%2FEBjqkATGdUpvPH5mjHthMIsWW73mqNxH9oDcwIathxSWbZ5HXTtpVjCGvk%2BmFYDFSFkQr83s%2BQlTiWSjEl4BbkD7%2Fya1rn%2BetibAu9LIE9mDyJNoAIBHiBKWYgQqQ7tJ7OoJq1Jk%2B6%2Bx5614ZcfIsI%2B9tBJ6AKyxFSNaPgGoFI%2FN9P8AxC%2BH6R097G8v0C8X%2BKre3HhGnRC6ahTrexP5VxDG8%2FwpS3m1X&X-Amz-Signature=e566c9e0781dd767e6d282614353ace744965e71fdbd6179be13740c915df837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHPGJ7Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTbxanmV5KOHQXvKEJbd6fKBcTWnynXgo1BG%2FKQFuvQIhAM7tlHZqJLE8WSmf1ZkZIxUAijJ%2FbLdmNvraX4W8Zm8%2FKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw5aWMXyqnArSiI3Yq3AMt%2B4UYWWw1z63QqRDCyOjrMGZwx7vtgAOiMxS7qEQ3BI8gqXJbQTAw9UV2Stbae%2BAnCPT2DdebS3P7xaqp5tFjI1XYEYAicI0aHnH2xFe9LaAdwL7v93OpGGtHUbdI4k4LFM6OzaOxqw8mDFKWIKxeK3c%2B85zNovdbTebd6j7TOqeWDiCnpY9VbgNXluP3UVtB97BPuN7PvfRU7yjYxWMBAkBujl9gll3TRip8Q7Q8fLo2y1HZBbnN%2BEJl5ChlD7gGzTKhlSoUidtKu4ZjDvScs1P%2BTyzyqaIRUpdTE1lwsO2eR6f4dKdGjGfMQ59fUjI9R1lmWENobtXlQbn%2FZ%2Bhlwihlw8e%2BQz4Eco2l2X0QAZzDrLeAGIRmSJFUxiLM18yXhxilbfRLZEszW4rfWvhTvV2aY6IEnDSF3BrUj0sTLokQmUDeg9vaDjSvZ1y7V6S84NFnEIDaeqxy0LUla2zhiwqohRTl1z%2FNxMbiTHPTmUe%2FWYnYazpyGKfNjNWG6fB0pQXYxRoHAAOnK8U0SvKIIsoKjQV0oT4fsSALZKLx%2FUbz8JiY1eHKs2nOcEvukfcBHokC393Xh0UETkRLGM7xr2DNNL50CvFKKzID1v7EZDdcnKOzsihWaGQ%2F9DC3st%2FEBjqkAfZCB9xIkHode%2BLTLQwGLKwMDLmL4cF5BEgxWYQQAOa8Id6rAFTJIuIGmQL3kiWS4TlpnXs50IGLcA240hfw5mgniDTg2RlzJXvb1NAzAfAe%2FcUTVW80vWiWzU3KGgwiMCnT2J1iUOd%2BDiLrFk9X6EO5SItb2ciws65lvRxe%2FxTS9ewxkVkMWaClJQ6tNiG4ZoUC7VbhjiK%2Bhw79DwQcC%2Brmluoi&X-Amz-Signature=35d9ebc7ee7eeac210f1b837888f2a6b1c214542df09cd576d7689f793da7854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAXWXWAY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIALG6iQ4wKYUbI5egE%2BEXTJEuNbqbC7OL7bNVfaK0eAIAiEAgQBR8knVWgnTxYDy5J4WEhWjfNWYS9YY%2BZ65XWCAzy8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1qtSayP7pz7RdtaircA9yBGooQRNG2lOgCVzyIBCimFuJEwpJsTwEnbeYEgJUYrYX1rQW%2FhZ94Szv3%2BVGw8Ac%2BlGAyMnDTPbzX%2FCzUpGybJt%2BQZaORKQHQZ5SP%2FbW4rw9pMfbSbr9LQpLF7taoq1C%2B5IiIja1ON42H0%2BV9gEd7fQWXzIdQQccdgA7PtdlMizbeQOqjykUiRBLPeDkWCiS6pvN6BczzZpXeKpcx1uuoZ6CGRN7idmD9hyJEzjiOSMSfM2qvLPbHtIhnFeh7i579EdjKDdmQ09O9IF58%2Bp5eiVPzRwmgdf7aYN0heKT53%2BYxl%2FHD6jQJyG3yYz6LOSd%2FnDhx1exXk5Urb2%2FOyf7J1djAv6W1xGbLgZSVrodhyNKEZl8hXNyvbmWszEPwlNIRyptCQ0ayD%2Bz5soyrLJIZZBrATbVIduglXveFZuzXbt3ZFuW1aHeXP8GDwZNNdtU6%2FjLEUHb5cIX6mF7eM06PxDWydUPP4sSrpqzr2N3Y%2F4W0B9R9edAcH%2BfmF2IKxZx5sFRGrIYH0MqP3E5mMMx3dD%2FcQVLz%2FIFJaVzm8OU1vsq0cACEesHqOLCsT91PWSukBXAV53UmN%2F0ntTKmIUfm1ggI%2FIrSs1qgXHrJ%2FylZqb18yN%2BFmyPpywLHMMuy38QGOqUBrGxc1bHC%2BSF%2FPK3P9IbLumNmKh5wm2efxWXl79tgJSv%2FPizvl6JBCgro%2F4PGWziWm907ncychyl9%2Frl9tBcZPpazF6QQ2GVs8WAbaHDug1fQ1XLrGJDUNL4xwfSAobkU%2Bhc0jPtgI%2F6eLMn%2B5HzlG2pM6g7CsEHn3FdDZF27WLkOzGG4hkkWo1pcV5Mpawrd%2FzQWsgLuBKUhU8cxKf7qsuR%2BhvzM&X-Amz-Signature=7b5f31067aca98fa7b0aaa2ec9269af524815097f0e7beb1222e2d8eb638269c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AQ2ME6I%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfk7S%2FfSb7%2FlAczci3dKURhHZWpMURKrSaKWsh2ehTqAIgRTfp4LKq%2BfzX624b6NtVkciGcOEmxsKD58B7EHOa%2FgsqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZ%2F%2FsjtTlT91zUcpyrcAyIsqQ90F%2FlJkfNuw5jJCtOg8VZVABeVeu7yH1N%2Fyhn72LFUbW6KjbP1QWmNLZBC5ysKzJI2r7J%2Fe0dNmRmMxoavJUhf6%2BMAaXgN7byOybDod9aPfOqgTekIdQr6aG6nIAJuUORDL3%2F5L0y3WlLUUeb1pinCcUuRbx2ckFJAkm4YXVQDf5O7It3fH15E5qmOX7VO8WWyGmh3s8VHgZMYfTB2%2FUeqMyTl9WW5wsKeNEYxbPtIkHzbZmgenVySNUMYcXhS13NtrVZk71eRoRWZvkcGVeBJa5efLMNbVKq2vwDfkx3U%2BV9cOD%2FTbGfYfDNU61W3%2F9PT45vj9aBVCbVh95lAKA9XM0TE51Z4siHaAntghF0w5LwkvGd%2BxzJpHDto2Prn4eFHELgURmcE4kdtxRFullA3DmTIvg9PSnQjmEl1VKERD%2BVp5Dr%2BknB2ND4mBF6KIFVww3yVBck4iuxIUMLeHRgEwCKY2AKnjrVVG8mmwTwN0yUF4nhMO%2BSdNftDhXL1Uq03EVE%2BqUp2Rad8vb9uPPML59toQRV5KRX0qgr%2BYh4f5RMLZbgw4l2W0UFI8ZSZdCiVG%2BDXM1Deyz91EDYc9kamtu%2BIlL8cAMS5ZGIaKFXNRf2dmB7ZD4nCMO%2By38QGOqUBZZNTA2GB3SnrOShvauzBogtLmnFZCQbikjoxIrHgOvvb6N%2Bf0LI0ATrBT0eOPCpRzZ%2FHzRZGzNpQgoMo8w%2B75P6OK%2Fh3go6HaLq1nRB0xy8uRH4l%2F3FgVjxTPsqlfFRpdQp6GihRSerOBtZIgAsY14XRSZWwqdqisZ1Eh1rDFQlIQTjdHe5c0sxVjYqT7kfGGViz3lhePZnKBihIT5vH%2F1UuWccQ&X-Amz-Signature=2c4d7d75c98e8944ab09a16b59f19cff5a90c433c805f1dac8aa2a90897a2f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD45GNOD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bQ3VtimuascRccOTBe%2Bc%2Fkpv01pzZiF69APZvtLLmgIhAO7jJ4GyG67mkzc1W%2BoaR421pqiWux6cq6lsOwsv%2FJ3BKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWtmnC5I8k%2BiCkawq3APIWt5n82En8KqKn9zESTM7rRbjqZ%2FXR2EC3%2BspGt8DbFIOwcBgWp94BVRLWqvGe5S07mic1Hwc7qTBg0VHtSZHjo6sCBzGS%2B3o8MKAD9f%2BgLivZgh7KbKbBp7I%2B1BExW9TvXP7ZTsV73McsHliPpkPdbGNAi97VJTHQv1N0YQA533I8d7u6YwoENuUpq9dAxB0Gy130gk%2FIcwzYi%2FAcgYXXus2OzXZiEdvvPv4L4Xq0PK0lV54bTuKlXg%2FrVEa1O0Kcs8XfksnRDPio4M6LX%2F6A8K%2Bj3ZG9x%2Fwtc%2FtJGpZu%2FYl17zlQ4m1soaxDI6GRBKhRzFWG6qDX4AEIPMLcwEZCjhx%2FLqguU6eLW7WHVY%2Be4G%2F1L4btoyAlvaiDhTjJ%2Bj4y%2BTJSwo4Gh1PNCgrV%2Bek4qsPogm2Tt2OhNEqSh6vFA%2B0yOq%2FxfYbnkvkUVmkGOFU4eGisgrQQvtet70PHrwSOuL%2FsfqdNq8mBJQkvWhjAzw1wNzs3cA7EXuRg4FhpHA%2BWdSAH%2FIRoIhU%2Bhd7d8ogWGITUryVt1%2B0p7QfQbQn3xMWMkURMUCRiR7OckhwaEFQdUS0w4F6XOuNFU22LaaCYBFuM3t3%2BPqbhC3Snr5Dx5yubOIHW55jHFp23jCas9%2FEBjqkATGdUpvPH5mjHthMIsWW73mqNxH9oDcwIathxSWbZ5HXTtpVjCGvk%2BmFYDFSFkQr83s%2BQlTiWSjEl4BbkD7%2Fya1rn%2BetibAu9LIE9mDyJNoAIBHiBKWYgQqQ7tJ7OoJq1Jk%2B6%2Bx5614ZcfIsI%2B9tBJ6AKyxFSNaPgGoFI%2FN9P8AxC%2BH6R097G8v0C8X%2BKre3HhGnRC6ahTrexP5VxDG8%2FwpS3m1X&X-Amz-Signature=fd03714e7e1da46e6caa69ad8d65246d14914148a7d8b5b62f328915c04adf64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LQBSBL2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmRiBMHqQpbS0oITGVuOZMO2PxS%2F%2BndqgIQzz%2Fnb0mBgIhAJmHAvDcxBPlmFsbg6pnwKzl4YFlCha49BKvA%2FXy6YRmKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkgqFkVugLwQzDC7sq3APni6lBgTLbrrYMcC4dhthrpS05zvvvN2BfOqAk4%2FTZu50Zig3L%2FA94cQ8aiTE8snh4uIKJg3Tm9yU9OYJ2%2BRcaiZj9PmAAwKt8cGrd3dxlzBZ0ztdsrkiAJutnPj%2BQ9TA7imbpe7h3impyZ3Xfh7DOadBEODGvCMMqbH5onsCuir65zRjcUQ5ZUQmVfceV3MGeU2y3Xk%2B5Eq5Ng%2BAoz2mwuDjP1ppq36EUA5cTxg9OOLRHjZEn2cCAO78yD54VooBfMbWS3CqWHd4wIVB88IA1KIR9PU6Azp%2B6c1%2BQIYbmvcIhyc5sH1VUkvjVhR0tayj9JR2G40N11GzU34wkz5IhsOijlvEt1GjTaD%2FxEuL7y0M1hpuZVUV7Bgjxbf%2BPj8Gy%2BL8EJz%2BwT0IC7J69bjKqZUrRf45N8hR4%2F9gB6a1njb0hKKpAqgWcvVrXN5LUyS0U1HoEw1jHJxY%2FPIt7WkGqJ0RCL2FkTgnADl9bUFzRJNk%2FTt%2FgMD69xlg9ps0DBUCeHkmyB89WewDhmfE07j7LG%2BLyH7tbLhuoAUfaxinH6YkZWJaraXj1h4d1flFB85KK1idNuSE9NEqLZYkxxnbZhR4drgJzL%2FWbXRFe2N4WOtAUWVvxp%2FW4EfogojCYs9%2FEBjqkAWKUIhOTroRGRS6VgUaX5a4UPUGWQkcd4cDYNR1e2MokO9BMVqFIrDQ%2FCpk5X1uwi1E8HzvKeEgKLmLl858ZUQQpVBomCQFo9d4vUp87I2V4uxXDEL%2FE7Uq7R2L%2F1v1lCJ0vb4sLbNOKppCeGedNBYJeEox2fRrxhncxuZal5DzNAtoJnPo8krNKeqo8ePS6f865C5alIAOV%2FNKMWpRPSrWaWQwY&X-Amz-Signature=91eaf17d39c44d082586665b54ff0f2ce13cc030628b65e2911ed9e51c929f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD45GNOD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bQ3VtimuascRccOTBe%2Bc%2Fkpv01pzZiF69APZvtLLmgIhAO7jJ4GyG67mkzc1W%2BoaR421pqiWux6cq6lsOwsv%2FJ3BKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWtmnC5I8k%2BiCkawq3APIWt5n82En8KqKn9zESTM7rRbjqZ%2FXR2EC3%2BspGt8DbFIOwcBgWp94BVRLWqvGe5S07mic1Hwc7qTBg0VHtSZHjo6sCBzGS%2B3o8MKAD9f%2BgLivZgh7KbKbBp7I%2B1BExW9TvXP7ZTsV73McsHliPpkPdbGNAi97VJTHQv1N0YQA533I8d7u6YwoENuUpq9dAxB0Gy130gk%2FIcwzYi%2FAcgYXXus2OzXZiEdvvPv4L4Xq0PK0lV54bTuKlXg%2FrVEa1O0Kcs8XfksnRDPio4M6LX%2F6A8K%2Bj3ZG9x%2Fwtc%2FtJGpZu%2FYl17zlQ4m1soaxDI6GRBKhRzFWG6qDX4AEIPMLcwEZCjhx%2FLqguU6eLW7WHVY%2Be4G%2F1L4btoyAlvaiDhTjJ%2Bj4y%2BTJSwo4Gh1PNCgrV%2Bek4qsPogm2Tt2OhNEqSh6vFA%2B0yOq%2FxfYbnkvkUVmkGOFU4eGisgrQQvtet70PHrwSOuL%2FsfqdNq8mBJQkvWhjAzw1wNzs3cA7EXuRg4FhpHA%2BWdSAH%2FIRoIhU%2Bhd7d8ogWGITUryVt1%2B0p7QfQbQn3xMWMkURMUCRiR7OckhwaEFQdUS0w4F6XOuNFU22LaaCYBFuM3t3%2BPqbhC3Snr5Dx5yubOIHW55jHFp23jCas9%2FEBjqkATGdUpvPH5mjHthMIsWW73mqNxH9oDcwIathxSWbZ5HXTtpVjCGvk%2BmFYDFSFkQr83s%2BQlTiWSjEl4BbkD7%2Fya1rn%2BetibAu9LIE9mDyJNoAIBHiBKWYgQqQ7tJ7OoJq1Jk%2B6%2Bx5614ZcfIsI%2B9tBJ6AKyxFSNaPgGoFI%2FN9P8AxC%2BH6R097G8v0C8X%2BKre3HhGnRC6ahTrexP5VxDG8%2FwpS3m1X&X-Amz-Signature=15b6d2fab54d22d3b8d11fd0f510ab7c4052c54f00c5ee796dc6549512edd931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YCEPEPH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHUX%2FpL3XUDAZSMfowAA6A04XgjrO3i039u8vWwYNJCAiEA5str7eilqht3ggxTzl4%2BmOZYEnSEoUsYgm1YdEmrVfoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORMxHTvqGrljglKFyrcA56MiqJA8wGMXMETm4RYnjR4ttR6ewa8PTMe8qGHmO8VEA7rKnTbiamrpWFR7ySUrewjTQa%2F4wiKMpTuePg74a8GIavL20%2FT6BmA39U3n6tbxyjUGo8yDWjy1WQ6Wpa1%2Fa1mWr2fhBu2iCZozXLMU8y8BEbD4CXNEXEZWroAN4pD1dFprsQvvSFgvgzqAkKHPRt0DthnhtULB1MtUFSrOoMY9qE2juXVQxigTEOVzBujlpesmWmIbXv2grz%2BVgzD%2FmzQDsPuhjV4pf5V1bPXSz6SSdyDWbTh3V8LTlGuL6wg5H8o%2FHU93ag2zJziuJZyuDpOqEl87%2BNYDwrCwfR0%2B%2FMFXXAnEUb%2B1WoZyq54aAR1DmT66WI%2BOfPPeq79eu0JmDnC2v2hN1kMc8iMmx55EUMc7gUfXmXiTEKquuBQ9Yz5kLG2K067qnusxiabgu7yrCZeZynwtKM1D4MSe%2FP%2FnbpdMZyGygtsAdsfKOUrEbmFSZWgPLQyDzaWoUKFtXKOYALsgZ86EMM5jqkHrAkukl2YXXUyrgT%2BUQGu5CRgd1Y3sQUiHsDPwZD8UMKQIMkzlW7csRvJneYSKVVCcXKczR6i3gg0%2BFrZe4tJ8cZSdLgQpyNG4vUENzpLIPspMNiy38QGOqUBzTJzoREKdt%2FjcsWOk7E0C4ZJDWFADOuOm1tGN%2F5%2BT9Ym6yZawWE3WY3n0PQQNznvZLuZcDzWNHh3dTEJ80uL4MrMosFjt0Bly3opxsi9yyLolfTNvMcwcmzIgNfsto8D5XYF8SJPibeU%2FOiH9g1ap53hzkyXpYaFhHL%2FQJ897omqPWLQVdgAqlqPLlaq3sIH7JelHCzTjk9%2BiBoy%2BAL66UqFnksp&X-Amz-Signature=32e608ed3df770de5af50a4f566e04add8340077787cc072f731cc03aaa4890d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD45GNOD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bQ3VtimuascRccOTBe%2Bc%2Fkpv01pzZiF69APZvtLLmgIhAO7jJ4GyG67mkzc1W%2BoaR421pqiWux6cq6lsOwsv%2FJ3BKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWtmnC5I8k%2BiCkawq3APIWt5n82En8KqKn9zESTM7rRbjqZ%2FXR2EC3%2BspGt8DbFIOwcBgWp94BVRLWqvGe5S07mic1Hwc7qTBg0VHtSZHjo6sCBzGS%2B3o8MKAD9f%2BgLivZgh7KbKbBp7I%2B1BExW9TvXP7ZTsV73McsHliPpkPdbGNAi97VJTHQv1N0YQA533I8d7u6YwoENuUpq9dAxB0Gy130gk%2FIcwzYi%2FAcgYXXus2OzXZiEdvvPv4L4Xq0PK0lV54bTuKlXg%2FrVEa1O0Kcs8XfksnRDPio4M6LX%2F6A8K%2Bj3ZG9x%2Fwtc%2FtJGpZu%2FYl17zlQ4m1soaxDI6GRBKhRzFWG6qDX4AEIPMLcwEZCjhx%2FLqguU6eLW7WHVY%2Be4G%2F1L4btoyAlvaiDhTjJ%2Bj4y%2BTJSwo4Gh1PNCgrV%2Bek4qsPogm2Tt2OhNEqSh6vFA%2B0yOq%2FxfYbnkvkUVmkGOFU4eGisgrQQvtet70PHrwSOuL%2FsfqdNq8mBJQkvWhjAzw1wNzs3cA7EXuRg4FhpHA%2BWdSAH%2FIRoIhU%2Bhd7d8ogWGITUryVt1%2B0p7QfQbQn3xMWMkURMUCRiR7OckhwaEFQdUS0w4F6XOuNFU22LaaCYBFuM3t3%2BPqbhC3Snr5Dx5yubOIHW55jHFp23jCas9%2FEBjqkATGdUpvPH5mjHthMIsWW73mqNxH9oDcwIathxSWbZ5HXTtpVjCGvk%2BmFYDFSFkQr83s%2BQlTiWSjEl4BbkD7%2Fya1rn%2BetibAu9LIE9mDyJNoAIBHiBKWYgQqQ7tJ7OoJq1Jk%2B6%2Bx5614ZcfIsI%2B9tBJ6AKyxFSNaPgGoFI%2FN9P8AxC%2BH6R097G8v0C8X%2BKre3HhGnRC6ahTrexP5VxDG8%2FwpS3m1X&X-Amz-Signature=4fa5eab64f0f144ec4ef3d226fb01d20d0b192d423325184153fac5fbbddfbdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBHBLV66%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUgdfYqyolb%2BkAVLZ9sIr2KKZXihFzLJqgYcCxrtIosAiEAwJe9efpdo2VFb27zdCOJbPKh%2BAzv%2F89TmwhLwQxAG9cqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnEIH1papl2RZyghSrcA3%2B1PGWx66GWiAvLXowttby0gPR%2B%2BjiOxfMIr6aSZo2KsbNw%2B4muuRjvs19sP9dscgYvQAK9EC4GcIs%2FES5vShkbQfUBvNbjCQEE1isiHI6KebSvKcvWalZcpXi3tEsEf0hrk1A9VOUjM2Or%2FwcsjURUymLkJcX6SeCWt6gSlwf0%2BbOnB7xBwBPaPJTh9ab2Gr1FXYEUjG8Dkr8hSkxSPu0axyOEf%2B0YJ9ycpgBqFjhH1FQ3gBFHdCc%2FyZE2ilkHmjwrgS%2Bf2eonGWNhCrmXiz%2B5KCj9co5DZNHvBWYIqOqLwoxhkZoaLgN4niHPY8fiWTxOWy307b1WbLhAzHb88yenffGWUac7SFseHVwFXTX9BIVYze7Fm3riD3SMUdAj9q%2BKc6AGsSsNTJEZdX2GL6Ty4JhU9%2FWyqvnGhuGBgEmRG8DzIjeOJfx9KTo1wvU2%2BYaZQAr6koWghAtSsrwVr0JaZgoFZpFMtBKlbzqKPK0tyJLFzitj61Xapv%2FphNgWPrWDNyMG51W2mHxRpr4Xc6Pj5IbSVkeNdOTI6gwoekYu7UIDDYeFMoR68KDHXeDaGNf9IdJq96DjvaUYbp1GS%2BMnTAJKFck%2B048xvpJYTl4yrBEd2U5CSRY8xeVIMKSy38QGOqUByQdpDk2hcuB3Nihz8qYlpcJe%2BqHDixRjpoEc910p8TcNRS6YY%2FSZzyYepT%2F9EsSgIQ714p6CMmudZWM5X3O4jzuEGckBRDBMv1%2BMXme5vWHnUx6jppIE0DtkoHLp3bQRPkod5bsYbfjC2Xsh7lTtY2JVIGNq2EMrLsDoZHLWTIdpDMvbog%2BBAJ6tH2th9HCODJhbcf0t%2BTI02RUXsOvtubBTslNE&X-Amz-Signature=c60faf055714c9d061cab78cb0ae5bbbac243639f3e7a9f7cd4f5aeca782dc8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD45GNOD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bQ3VtimuascRccOTBe%2Bc%2Fkpv01pzZiF69APZvtLLmgIhAO7jJ4GyG67mkzc1W%2BoaR421pqiWux6cq6lsOwsv%2FJ3BKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWtmnC5I8k%2BiCkawq3APIWt5n82En8KqKn9zESTM7rRbjqZ%2FXR2EC3%2BspGt8DbFIOwcBgWp94BVRLWqvGe5S07mic1Hwc7qTBg0VHtSZHjo6sCBzGS%2B3o8MKAD9f%2BgLivZgh7KbKbBp7I%2B1BExW9TvXP7ZTsV73McsHliPpkPdbGNAi97VJTHQv1N0YQA533I8d7u6YwoENuUpq9dAxB0Gy130gk%2FIcwzYi%2FAcgYXXus2OzXZiEdvvPv4L4Xq0PK0lV54bTuKlXg%2FrVEa1O0Kcs8XfksnRDPio4M6LX%2F6A8K%2Bj3ZG9x%2Fwtc%2FtJGpZu%2FYl17zlQ4m1soaxDI6GRBKhRzFWG6qDX4AEIPMLcwEZCjhx%2FLqguU6eLW7WHVY%2Be4G%2F1L4btoyAlvaiDhTjJ%2Bj4y%2BTJSwo4Gh1PNCgrV%2Bek4qsPogm2Tt2OhNEqSh6vFA%2B0yOq%2FxfYbnkvkUVmkGOFU4eGisgrQQvtet70PHrwSOuL%2FsfqdNq8mBJQkvWhjAzw1wNzs3cA7EXuRg4FhpHA%2BWdSAH%2FIRoIhU%2Bhd7d8ogWGITUryVt1%2B0p7QfQbQn3xMWMkURMUCRiR7OckhwaEFQdUS0w4F6XOuNFU22LaaCYBFuM3t3%2BPqbhC3Snr5Dx5yubOIHW55jHFp23jCas9%2FEBjqkATGdUpvPH5mjHthMIsWW73mqNxH9oDcwIathxSWbZ5HXTtpVjCGvk%2BmFYDFSFkQr83s%2BQlTiWSjEl4BbkD7%2Fya1rn%2BetibAu9LIE9mDyJNoAIBHiBKWYgQqQ7tJ7OoJq1Jk%2B6%2Bx5614ZcfIsI%2B9tBJ6AKyxFSNaPgGoFI%2FN9P8AxC%2BH6R097G8v0C8X%2BKre3HhGnRC6ahTrexP5VxDG8%2FwpS3m1X&X-Amz-Signature=2c9e278af25beae617083d83340e09c0413c6e66a1387d5a3c702ca3a14efa4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STMPZKX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg6iMg7M0ihcTTBB%2FXBQHdTOHRAngX%2BPgk%2BgMRBi7K2AiAbqG03bubyS73U4yrEA4hQOnQQ8xo2%2BC84aLfXBtv0ACqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7ny0%2B9UGiuxKbXWUKtwDmUIpvBl%2BoTmADSLBSIuLG9dqy3U5MiEdfxAEFNZY6d%2Fox64vJyxB9kqqIZXD9opacthvJ87OGm1JcgzNB9SBov0uW4kwD%2BPBgwxjr661SB%2BDjbwZvzm5l%2FVzqZyvlO%2BQYhknoji0YBrPgD%2FRIQTJKIwM45%2BL%2FXqq3RULUbvECjqIC8cdt2dwEdJ05JlCOWASFWKxqSZhDs1ki3e3h6diXmQxm6p6yV9pYZpdsc0i%2BXTKcYN7x0ErN%2BrTdNlOeuHzg0eprxmkdIkgCN8U20izaFPF%2Fybvq9KW2ha0K4rilGej8qxAvXj%2F5GFv6ZcG%2FdndRfmlEQdkBHJwFxMkrT8AStk2lYs9J5vNow%2FesZQfhCEjJtKjOW5c4xlIZZlR6QdMjJzkzBDRoEmZMMBT0es%2Fr6TXDX20Nvbe9AVfJWeSuMZsHrwhXxOcCyizjHZEWdBQT5A1PabmFkqRoD4I7qHjOaxo1%2F8t1RgNr1dllXxK4TYkMBpHb9S0O%2Fh%2FKYUQ6NOl8PzOUuQMHyCrPbm7lXfCq0Guqg%2FA08mWteMRnMpj6lLu8OIwZBcloD20nkR9vAH6pm7glMbkEmA5fU8e%2Fp54ZJn1yL8A6HkhiTFE3Zw3QOljy0so784Rjd7dxI0w%2B7LfxAY6pgEHp%2FoA1xW3vCN%2Fq4TWX6gt%2FKcXY24VUwz7stOS2LGldPs6t6i6GVwRcOyTZB2d8CdIzZBeplIUi0FygFAT07Lp9SXo4A%2FdTgUL50DIefDMbC1egcaH%2FWnJ7Xhlm2KNYKNx%2BNYkt17ELzLXBPirolg4BAbeRewpxmOYceLD%2Bsj1IedqN4EfNLagmM9WjeCxNm9CylIaAR8hIvZOdn5FX%2FWVI6C9JzqE&X-Amz-Signature=a1c6d969edad9e5fb9378ff33642ef0b83c4556543652e3238e6fe80d4f41cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZWAB5GL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsRnrs5Sz%2BIl68Pzs49se8YbYuj7cLsC0m0H0bBRXayAiEAnszkAwMuLYZxrRInHXmbLt%2FEl%2B%2B5NhibMtXgqvD7WnoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOznSO%2F%2B8mJse3oZCrcA%2BxR1Wwx9sQ56Z9dTtUspbpUk0qH42P3JhZk5%2FrEsA9ZBX5WC15rHFDxCZOYA22rLcK2GR2ZGTqUvHgiSk7bWYzuJfCwJwCBCbZIL8MQpkIlD0%2Fdl05qSp15uF6aXEuzzZVa56%2FoGo1zCkOkA4Ggt3KcgmovEHH%2Bgg6vnsxMowbmZ9KeVWvvgAIrdbl7V3XFnu9e4WCvMHRXxEeB6MUNMF1Wxk44Go%2FjXdyNvtv1P%2BbMZusj9Foxg3PIUamH1hDSRJBvfI2gXGxfZbDGePAq0OKi9%2BebCUqOnyVWKTC2nQE7YRPE9HBONy8JtP0j8FRWWFY02MUG4eYh%2BBeKCc8PPIGYLh%2F6ytDmHtDXW66p%2BEuaK9gdeW1tyFaKgS31lEJX56AK3tOaKF8XGR2acBYSfFoIwJ4laY%2BEFiPTyQM5vfwsXYDXlasYqpyOkA2Xe2tUwBP2NbVw1OiO5wTm%2Fkprh8DybPACDFI9C1cvKukr02LiipYgt6Yovtlc8pa%2B6PYdmlTavp03%2Bjo5cpzKhDUZgTJ8AbsqyDFUjit4Ungrkke0erxda%2BV1tK9LBgACGSmWYs5Vk4gxMdHqEd2qQuVpvmTjJRjA4zoiRKEOtrJQfkMtICpa9I1JwxzI%2BHGFMKyy38QGOqUBsTrtEB0OyNTtooN%2Bfaxzs1fwzCRyecX2aB7bFAl7vUUQttSbUXQ5bijqxMzkksMQXwddQ%2F%2FLibfjyaV9AsFZQIADttDnPpT1vEN5ZTfcQF8M%2B5VZttLBk%2F4QuDobA%2FJ47AifYIjq2fAcEvSwcrAmpTEodWr6fWI3leutWNKmdd%2FhQx8UxFxHscWtmoBj39LytM0cru1fD%2BFANthHlvdKvUyDVw9l&X-Amz-Signature=26c80351a610833ef50d87f543579670f3ec19bbf5aa7359b64dd9ea3644c99e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5QPTE2A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BwJPZ0ai1HFcd2c6B3JlR9%2F4vD2aw6BXkiXB%2Bj4dncgIhANg1LZSeuLpzNU1CXlNrKvEUpZkTVcmNLCogzp%2BIuuV2KogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYJlhaSNkCaJ2rYiYq3ANBQiilN58qeHC8mH0%2F2bUX4AFGCAELa9Rf2Yt0wylQIdVsFqqZrZmBiRoyq%2BC%2FJVl45BNRE67tA4sHnW7HR1RsnQ57q54WwdEpZ%2FM5K79Xp8hclILN8CDvq%2F8eqqweuA055xBYCxLamCdn6sHS6Ezm1jZhRC1T5iCsdsps%2BVPNCXvRniEvAtUxLWNrHEz6JVsZYwCOySO3VegYw99IOShzhf8JdnNEApT%2BRZUgPJ4yEqn%2BI%2FPrq8oK8pkhx7%2BqCv%2FmgkSsRNjPTI3Nrq73acnfki9%2FlyySRa9ZrTNhCFSARQMtHZyyWC81i65tppweEaibHN4rd3xxwGO%2BkSy8eq36cfbaBCH4rG%2FNdm0%2BnCpDe%2BPlMUM%2B%2BzVCxz5%2BRMbCRUSf8AO9zJtJjwQzrdndWq0EomzIdi46rRG3jrkXm7p4rzcIfcGkLekyenfY5G4rV7Z882Yn1VFzOwEUR08qrPkK49YmKvnx2FI5GI15iHtXcgl3T2P2jMdcHBlGgXujvf9gEJ8ECRIvuuaXm8XMxED5hkqo0OVm7JePqM4PDS7pYzZnf4I90TEcAb9P6KmuSzwdi4g7AAMegUVtKExuKhKyoyJDesTi4IGGqm12bBob%2B2yKBgJuznxg1WYhOTDAst%2FEBjqkAXxVLC61huRqZrCTgZOPrmJLlswFa3kL6nTOt9q%2FOCyEIxT9NUnOe%2FlANz6TlQ%2FHerGH2GMlCitpm13XY8ExPIux7uxvW872I%2FE99S1DqUqOjQwEL7Ox7XvpxD7hnnOuiNDis0IxtAyPB4fW09ZbzeNLtwudjca%2F4oBDMY5PYU%2BErjmKGjPK04lprfZPh4Rq%2FetQGFKOqLkVISRjaaOCE1mJGxOR&X-Amz-Signature=729440f0ae07963e158cc4ee62f5fce1ec01d7a7147ae9d981e9c82a7b847d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DRU7AVN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEL2aFn4857%2B0%2FUh2diTYHM7PHDK44RDdXp2NIEqwzz0AiATwhwvZHBPB%2FLMa39ZU8s4j9DrseMxytMuZbWSzPtXaSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqD967XMioLxH1%2FpiKtwDu7fyIv6TR4UeCGoNU7bK8MKo34Mf%2BkXrWgzUJLgAV7ASDISy45pPN9ldjRBdD6%2BL4rMqJ5x1MHcu1EJ0uCReOZcxMLCMzCEmjJ7u%2B0i4TTjQvWy7pYijskuTP%2FJtlx0tA1aknyT15OwWfTNe5qPN749RHtT9g8EhuBP1BTVcKcoBV%2B%2FhVpQ45LIK99ekLl7WYJK7cwk03NkjDydoQOPH9INEJ9SuHvnmmsZ7lwuRwfq4BqrWy%2BiV1T05JQuFhGlwPU1q%2B0rK8DGOVeAwyup3lsBLYGyJ5KYnEgPk0O1HwTc%2Fjupzxai27tP7pL9BaGlywjaVUZSU2xtNRYRh1qNspeQuBQmMfhYzzBh%2FD3r58t1ak0DPPxvNgdhhN6bpegQ2v9biLBpPeCIXTb6JelQ5aOUTrMoCmteV3Usj9GlMzvUs9e1FjRZzqbat%2FK5pc1nAg2lGgCKRosOjuwlw3qHlIFXGIri3V6kKW1tsNOX7t%2FRtBoo3oz%2BbglAys4RmQYd3oMiNUdJlqFParZoaQ1vqw0UosLVRYm9ZfRfJgzcJWv7qwP5XtLfE%2F49Ykjip36X7mDG6GoFHYRnsTxMMLu3p27M0MXXATv%2FqsAaEVqIwSXupB9S3MM8n6ayGtsQwlrPfxAY6pgFujUf46r82pug%2BR3q%2BooDx%2B%2Bb8ShQdGphXDyVuvDor%2FEVesVaXFFhXhEn6rw96CTaMVlK6Q0QVLYC6ZG7wdjUsXwnikLqMcq8DlFAIswA1sTE%2F1fN6lzERFxFM%2BTL2NH2Usxl51pskh%2BlbAsImd6vHoDN6btVskhno2OuVxyJgrg6eG0JbUbgZvvLJCe9Z5WGMspFxwxHXOBqlTaaOd8V0JmFhrcca&X-Amz-Signature=9f9f26bc830bc619663e9a1da7217302baac6573223e11635b207f1ca1248cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NRCMN77%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDr4dRiNvYeatoF8A4pisiC3RJr2pU%2B7Duje995YyRegIhALigsBSqV31y7Yh%2FwgpFVz9eLbVp1HCY6W2cVpYClFfjKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoT3uneCMiUJsd1kUq3AP6IACj8t%2BMQt5t9B0YSESmf%2BtoYRfLVrshvE2%2Fx13QX6MxEnX9o9TaYw4XVc8UK4KrASmC8Y7YSBlIjo8ZF29%2F8WG%2F9JxakOjg%2BGasAR1gw%2B5tt5jem6ZfKSBBUY9chznS4toUcYlroJGE4DXl4ltAv4U3oAyVA9my2QaKdC3tqld3qii4422DhVmiqqKPkPo0fL03G973%2BSg1qOvBtye8v2Nm3R7pMTDvX2HZ3yiGm5twxhFc0MalLl9Vrx0k3u92%2FACG1jPyLJaPsNlHBx%2Fhp4rx4PlAvCxOMQbCZVYiv6MyC1BzAmuLSPJ4OC1EoNQQ7cz4KXXZf8UO18fOYm5IfGmap6oF8lAhWdVI2kkrmyQN3aiI7rBswhH6ufsvEm8hLwzXqQiZmjsPV0M%2FFbRu3hgxFi5oxG3EeXopZtwIWX3En3ytmZANv1OtPYa59GUckJ0bDIeLgKfxX3qk9Rg8iodyJBI%2BIAohnnPuK1AgslEdvRIXmsiDL%2BCF%2FdRxpc6sTZH%2BXUWPSNqNV8g%2FGpx61wked4R1rgnO5n7hW1TjMf27z7EH3hst0VHp49BiHe%2BVSY%2FLhLuQTwCXf70yCZNb5Gz3JD9o6izYSrp2c8Ib3InpK1C4dcEK5wq63zDYst%2FEBjqkATFkqw7goRNkf5ccr3rbjpF34epT18t5ciY7NwExrrflHIPvjtjbZmvk0fV88Q%2FULgZmMU0NGqbgCsddH%2BGYefNxp%2B8VwIj5rq4F9RGjTLCE9M0eUjfIuy%2BgRf5wz%2B%2Bkjj1AzHzBTwl4hhJ%2B0AXvqNA1XOwX6v%2BjLyL5NsHrCFBLA2Lqu%2FWZNUm95E2ypYMuvmHJI%2FdRxOQ%2FLadcP39ftS2hRmYW&X-Amz-Signature=e973aca7e2773ca0702392cfae06a3e825b5598f8a7cbfccc9205ce3f94bac4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD45GNOD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bQ3VtimuascRccOTBe%2Bc%2Fkpv01pzZiF69APZvtLLmgIhAO7jJ4GyG67mkzc1W%2BoaR421pqiWux6cq6lsOwsv%2FJ3BKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWtmnC5I8k%2BiCkawq3APIWt5n82En8KqKn9zESTM7rRbjqZ%2FXR2EC3%2BspGt8DbFIOwcBgWp94BVRLWqvGe5S07mic1Hwc7qTBg0VHtSZHjo6sCBzGS%2B3o8MKAD9f%2BgLivZgh7KbKbBp7I%2B1BExW9TvXP7ZTsV73McsHliPpkPdbGNAi97VJTHQv1N0YQA533I8d7u6YwoENuUpq9dAxB0Gy130gk%2FIcwzYi%2FAcgYXXus2OzXZiEdvvPv4L4Xq0PK0lV54bTuKlXg%2FrVEa1O0Kcs8XfksnRDPio4M6LX%2F6A8K%2Bj3ZG9x%2Fwtc%2FtJGpZu%2FYl17zlQ4m1soaxDI6GRBKhRzFWG6qDX4AEIPMLcwEZCjhx%2FLqguU6eLW7WHVY%2Be4G%2F1L4btoyAlvaiDhTjJ%2Bj4y%2BTJSwo4Gh1PNCgrV%2Bek4qsPogm2Tt2OhNEqSh6vFA%2B0yOq%2FxfYbnkvkUVmkGOFU4eGisgrQQvtet70PHrwSOuL%2FsfqdNq8mBJQkvWhjAzw1wNzs3cA7EXuRg4FhpHA%2BWdSAH%2FIRoIhU%2Bhd7d8ogWGITUryVt1%2B0p7QfQbQn3xMWMkURMUCRiR7OckhwaEFQdUS0w4F6XOuNFU22LaaCYBFuM3t3%2BPqbhC3Snr5Dx5yubOIHW55jHFp23jCas9%2FEBjqkATGdUpvPH5mjHthMIsWW73mqNxH9oDcwIathxSWbZ5HXTtpVjCGvk%2BmFYDFSFkQr83s%2BQlTiWSjEl4BbkD7%2Fya1rn%2BetibAu9LIE9mDyJNoAIBHiBKWYgQqQ7tJ7OoJq1Jk%2B6%2Bx5614ZcfIsI%2B9tBJ6AKyxFSNaPgGoFI%2FN9P8AxC%2BH6R097G8v0C8X%2BKre3HhGnRC6ahTrexP5VxDG8%2FwpS3m1X&X-Amz-Signature=c595a8214e99ba0de786c98a19707e6073ec5365b9dd6c0a960ea88edbcddfcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD45GNOD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bQ3VtimuascRccOTBe%2Bc%2Fkpv01pzZiF69APZvtLLmgIhAO7jJ4GyG67mkzc1W%2BoaR421pqiWux6cq6lsOwsv%2FJ3BKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWtmnC5I8k%2BiCkawq3APIWt5n82En8KqKn9zESTM7rRbjqZ%2FXR2EC3%2BspGt8DbFIOwcBgWp94BVRLWqvGe5S07mic1Hwc7qTBg0VHtSZHjo6sCBzGS%2B3o8MKAD9f%2BgLivZgh7KbKbBp7I%2B1BExW9TvXP7ZTsV73McsHliPpkPdbGNAi97VJTHQv1N0YQA533I8d7u6YwoENuUpq9dAxB0Gy130gk%2FIcwzYi%2FAcgYXXus2OzXZiEdvvPv4L4Xq0PK0lV54bTuKlXg%2FrVEa1O0Kcs8XfksnRDPio4M6LX%2F6A8K%2Bj3ZG9x%2Fwtc%2FtJGpZu%2FYl17zlQ4m1soaxDI6GRBKhRzFWG6qDX4AEIPMLcwEZCjhx%2FLqguU6eLW7WHVY%2Be4G%2F1L4btoyAlvaiDhTjJ%2Bj4y%2BTJSwo4Gh1PNCgrV%2Bek4qsPogm2Tt2OhNEqSh6vFA%2B0yOq%2FxfYbnkvkUVmkGOFU4eGisgrQQvtet70PHrwSOuL%2FsfqdNq8mBJQkvWhjAzw1wNzs3cA7EXuRg4FhpHA%2BWdSAH%2FIRoIhU%2Bhd7d8ogWGITUryVt1%2B0p7QfQbQn3xMWMkURMUCRiR7OckhwaEFQdUS0w4F6XOuNFU22LaaCYBFuM3t3%2BPqbhC3Snr5Dx5yubOIHW55jHFp23jCas9%2FEBjqkATGdUpvPH5mjHthMIsWW73mqNxH9oDcwIathxSWbZ5HXTtpVjCGvk%2BmFYDFSFkQr83s%2BQlTiWSjEl4BbkD7%2Fya1rn%2BetibAu9LIE9mDyJNoAIBHiBKWYgQqQ7tJ7OoJq1Jk%2B6%2Bx5614ZcfIsI%2B9tBJ6AKyxFSNaPgGoFI%2FN9P8AxC%2BH6R097G8v0C8X%2BKre3HhGnRC6ahTrexP5VxDG8%2FwpS3m1X&X-Amz-Signature=d6b9cb8d2907a9d35667fc6f6fa4812288a1732eb36251792519f80aa926325d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYSRGQV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsryZX3LihzmVoNsYK0LgdSZAEyrQdsbh%2BK5a76pMgZAiEAm%2F%2BEJOYQwfph2BUpYO4MacWdEmumwwu8CSt0v03hmgMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASuEJnWPds9XetahircA8jU9N5YTNnStzUGbIWGqX7tbLjZ8LrMPj1xHG5KcMslRY1P62Ej9P4NaW%2FbBuRGcZcIOhy8Jf7hxD0W%2BtwEsWzo2ojwJbIolIu%2BcR4EFjiS%2BIwCoL82BGlpJ%2FlBlaZIvLWkW6PkH2dgGB4kv%2BcMGaWCApVbrNejrwdpMSkfUYFIs%2FgKJ7MdZQqaAYG0vSDcRVy4M0MRavbXCsALKJv0cpoj%2BUmVWRGlbr55vII1yQWHydroUF5VGIgsyaVtZvU9boMfQW4%2Fk%2BmyjLhIFkUqk1f8Bto1PROh%2Bt4efQY%2ByMIgFe26HHPv2ManXOukooL7iwV5XT0H7YUconK%2FVaKRkbLDi9bH5ta2yV7Fkp1o0NnD1xp0c7QDqHAxA8NIg3k9XItNo4YTnm%2FuJmkso%2BHFdjBVbwqE49cM45VbnCAd49NHvHIVn3h5bbBUH1wy0hQpC4voBE%2BdDO3lUAyR6fN7ciAaDfWYqXtOUEc6zQDJYKq%2F%2F0ybUb8ZUgsyROvS72YINtKU2murC3gFhrqDuugMSgFsfUYjeTBeAoHWfrf0v4JGeFpAdoLB9takRZecHaSJ09CxDHc9Na%2FAvt0FwBU43Z89no1bCdcAaZ9BnGRIkhfiJyDtd9zDaT8Wz2v6MOGy38QGOqUBC75fl2mw0nclOEJIRQI38lZV57rHlDI0DD%2F9z63f4zdXAm9hGaBXTWtmskcCnEsm9hRY0RewwxFtSWNVM5s9%2B5RmxsolKXPPWuEH8Rh1YIr9YqScew1cMcPIiGAtAHq2UNsvW4WAdGmyCRB9Ns4ph3k3zxbbV0d%2FCVi31rLdiseuZkXinftcq%2FFcbIbGYAzb8M0yJnDvx3yBF9FRVDRxaD0yu3Gj&X-Amz-Signature=430fc6e98c91157311da494e22c7ba8cde68fd2c0e13b95e8d967d1b43007810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYSRGQV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsryZX3LihzmVoNsYK0LgdSZAEyrQdsbh%2BK5a76pMgZAiEAm%2F%2BEJOYQwfph2BUpYO4MacWdEmumwwu8CSt0v03hmgMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASuEJnWPds9XetahircA8jU9N5YTNnStzUGbIWGqX7tbLjZ8LrMPj1xHG5KcMslRY1P62Ej9P4NaW%2FbBuRGcZcIOhy8Jf7hxD0W%2BtwEsWzo2ojwJbIolIu%2BcR4EFjiS%2BIwCoL82BGlpJ%2FlBlaZIvLWkW6PkH2dgGB4kv%2BcMGaWCApVbrNejrwdpMSkfUYFIs%2FgKJ7MdZQqaAYG0vSDcRVy4M0MRavbXCsALKJv0cpoj%2BUmVWRGlbr55vII1yQWHydroUF5VGIgsyaVtZvU9boMfQW4%2Fk%2BmyjLhIFkUqk1f8Bto1PROh%2Bt4efQY%2ByMIgFe26HHPv2ManXOukooL7iwV5XT0H7YUconK%2FVaKRkbLDi9bH5ta2yV7Fkp1o0NnD1xp0c7QDqHAxA8NIg3k9XItNo4YTnm%2FuJmkso%2BHFdjBVbwqE49cM45VbnCAd49NHvHIVn3h5bbBUH1wy0hQpC4voBE%2BdDO3lUAyR6fN7ciAaDfWYqXtOUEc6zQDJYKq%2F%2F0ybUb8ZUgsyROvS72YINtKU2murC3gFhrqDuugMSgFsfUYjeTBeAoHWfrf0v4JGeFpAdoLB9takRZecHaSJ09CxDHc9Na%2FAvt0FwBU43Z89no1bCdcAaZ9BnGRIkhfiJyDtd9zDaT8Wz2v6MOGy38QGOqUBC75fl2mw0nclOEJIRQI38lZV57rHlDI0DD%2F9z63f4zdXAm9hGaBXTWtmskcCnEsm9hRY0RewwxFtSWNVM5s9%2B5RmxsolKXPPWuEH8Rh1YIr9YqScew1cMcPIiGAtAHq2UNsvW4WAdGmyCRB9Ns4ph3k3zxbbV0d%2FCVi31rLdiseuZkXinftcq%2FFcbIbGYAzb8M0yJnDvx3yBF9FRVDRxaD0yu3Gj&X-Amz-Signature=936156e6d38df182734951509e8453b5dee3ada752c8316240d17b858ecba2ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYSRGQV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsryZX3LihzmVoNsYK0LgdSZAEyrQdsbh%2BK5a76pMgZAiEAm%2F%2BEJOYQwfph2BUpYO4MacWdEmumwwu8CSt0v03hmgMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASuEJnWPds9XetahircA8jU9N5YTNnStzUGbIWGqX7tbLjZ8LrMPj1xHG5KcMslRY1P62Ej9P4NaW%2FbBuRGcZcIOhy8Jf7hxD0W%2BtwEsWzo2ojwJbIolIu%2BcR4EFjiS%2BIwCoL82BGlpJ%2FlBlaZIvLWkW6PkH2dgGB4kv%2BcMGaWCApVbrNejrwdpMSkfUYFIs%2FgKJ7MdZQqaAYG0vSDcRVy4M0MRavbXCsALKJv0cpoj%2BUmVWRGlbr55vII1yQWHydroUF5VGIgsyaVtZvU9boMfQW4%2Fk%2BmyjLhIFkUqk1f8Bto1PROh%2Bt4efQY%2ByMIgFe26HHPv2ManXOukooL7iwV5XT0H7YUconK%2FVaKRkbLDi9bH5ta2yV7Fkp1o0NnD1xp0c7QDqHAxA8NIg3k9XItNo4YTnm%2FuJmkso%2BHFdjBVbwqE49cM45VbnCAd49NHvHIVn3h5bbBUH1wy0hQpC4voBE%2BdDO3lUAyR6fN7ciAaDfWYqXtOUEc6zQDJYKq%2F%2F0ybUb8ZUgsyROvS72YINtKU2murC3gFhrqDuugMSgFsfUYjeTBeAoHWfrf0v4JGeFpAdoLB9takRZecHaSJ09CxDHc9Na%2FAvt0FwBU43Z89no1bCdcAaZ9BnGRIkhfiJyDtd9zDaT8Wz2v6MOGy38QGOqUBC75fl2mw0nclOEJIRQI38lZV57rHlDI0DD%2F9z63f4zdXAm9hGaBXTWtmskcCnEsm9hRY0RewwxFtSWNVM5s9%2B5RmxsolKXPPWuEH8Rh1YIr9YqScew1cMcPIiGAtAHq2UNsvW4WAdGmyCRB9Ns4ph3k3zxbbV0d%2FCVi31rLdiseuZkXinftcq%2FFcbIbGYAzb8M0yJnDvx3yBF9FRVDRxaD0yu3Gj&X-Amz-Signature=d0a0ef83d39084746c2deafbb389f96432f9ea167456cb270fd3ed4ddabb0076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYSRGQV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsryZX3LihzmVoNsYK0LgdSZAEyrQdsbh%2BK5a76pMgZAiEAm%2F%2BEJOYQwfph2BUpYO4MacWdEmumwwu8CSt0v03hmgMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASuEJnWPds9XetahircA8jU9N5YTNnStzUGbIWGqX7tbLjZ8LrMPj1xHG5KcMslRY1P62Ej9P4NaW%2FbBuRGcZcIOhy8Jf7hxD0W%2BtwEsWzo2ojwJbIolIu%2BcR4EFjiS%2BIwCoL82BGlpJ%2FlBlaZIvLWkW6PkH2dgGB4kv%2BcMGaWCApVbrNejrwdpMSkfUYFIs%2FgKJ7MdZQqaAYG0vSDcRVy4M0MRavbXCsALKJv0cpoj%2BUmVWRGlbr55vII1yQWHydroUF5VGIgsyaVtZvU9boMfQW4%2Fk%2BmyjLhIFkUqk1f8Bto1PROh%2Bt4efQY%2ByMIgFe26HHPv2ManXOukooL7iwV5XT0H7YUconK%2FVaKRkbLDi9bH5ta2yV7Fkp1o0NnD1xp0c7QDqHAxA8NIg3k9XItNo4YTnm%2FuJmkso%2BHFdjBVbwqE49cM45VbnCAd49NHvHIVn3h5bbBUH1wy0hQpC4voBE%2BdDO3lUAyR6fN7ciAaDfWYqXtOUEc6zQDJYKq%2F%2F0ybUb8ZUgsyROvS72YINtKU2murC3gFhrqDuugMSgFsfUYjeTBeAoHWfrf0v4JGeFpAdoLB9takRZecHaSJ09CxDHc9Na%2FAvt0FwBU43Z89no1bCdcAaZ9BnGRIkhfiJyDtd9zDaT8Wz2v6MOGy38QGOqUBC75fl2mw0nclOEJIRQI38lZV57rHlDI0DD%2F9z63f4zdXAm9hGaBXTWtmskcCnEsm9hRY0RewwxFtSWNVM5s9%2B5RmxsolKXPPWuEH8Rh1YIr9YqScew1cMcPIiGAtAHq2UNsvW4WAdGmyCRB9Ns4ph3k3zxbbV0d%2FCVi31rLdiseuZkXinftcq%2FFcbIbGYAzb8M0yJnDvx3yBF9FRVDRxaD0yu3Gj&X-Amz-Signature=dffe5a8d98a883e421cda678381c2d60dbb51e9b29a4e71a053be4c3b15d09a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYSRGQV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsryZX3LihzmVoNsYK0LgdSZAEyrQdsbh%2BK5a76pMgZAiEAm%2F%2BEJOYQwfph2BUpYO4MacWdEmumwwu8CSt0v03hmgMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASuEJnWPds9XetahircA8jU9N5YTNnStzUGbIWGqX7tbLjZ8LrMPj1xHG5KcMslRY1P62Ej9P4NaW%2FbBuRGcZcIOhy8Jf7hxD0W%2BtwEsWzo2ojwJbIolIu%2BcR4EFjiS%2BIwCoL82BGlpJ%2FlBlaZIvLWkW6PkH2dgGB4kv%2BcMGaWCApVbrNejrwdpMSkfUYFIs%2FgKJ7MdZQqaAYG0vSDcRVy4M0MRavbXCsALKJv0cpoj%2BUmVWRGlbr55vII1yQWHydroUF5VGIgsyaVtZvU9boMfQW4%2Fk%2BmyjLhIFkUqk1f8Bto1PROh%2Bt4efQY%2ByMIgFe26HHPv2ManXOukooL7iwV5XT0H7YUconK%2FVaKRkbLDi9bH5ta2yV7Fkp1o0NnD1xp0c7QDqHAxA8NIg3k9XItNo4YTnm%2FuJmkso%2BHFdjBVbwqE49cM45VbnCAd49NHvHIVn3h5bbBUH1wy0hQpC4voBE%2BdDO3lUAyR6fN7ciAaDfWYqXtOUEc6zQDJYKq%2F%2F0ybUb8ZUgsyROvS72YINtKU2murC3gFhrqDuugMSgFsfUYjeTBeAoHWfrf0v4JGeFpAdoLB9takRZecHaSJ09CxDHc9Na%2FAvt0FwBU43Z89no1bCdcAaZ9BnGRIkhfiJyDtd9zDaT8Wz2v6MOGy38QGOqUBC75fl2mw0nclOEJIRQI38lZV57rHlDI0DD%2F9z63f4zdXAm9hGaBXTWtmskcCnEsm9hRY0RewwxFtSWNVM5s9%2B5RmxsolKXPPWuEH8Rh1YIr9YqScew1cMcPIiGAtAHq2UNsvW4WAdGmyCRB9Ns4ph3k3zxbbV0d%2FCVi31rLdiseuZkXinftcq%2FFcbIbGYAzb8M0yJnDvx3yBF9FRVDRxaD0yu3Gj&X-Amz-Signature=7953d0f4252094f3f4465547b5c64c3f126489e5cc0cbda10646fe9666b9e2d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYSRGQV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsryZX3LihzmVoNsYK0LgdSZAEyrQdsbh%2BK5a76pMgZAiEAm%2F%2BEJOYQwfph2BUpYO4MacWdEmumwwu8CSt0v03hmgMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASuEJnWPds9XetahircA8jU9N5YTNnStzUGbIWGqX7tbLjZ8LrMPj1xHG5KcMslRY1P62Ej9P4NaW%2FbBuRGcZcIOhy8Jf7hxD0W%2BtwEsWzo2ojwJbIolIu%2BcR4EFjiS%2BIwCoL82BGlpJ%2FlBlaZIvLWkW6PkH2dgGB4kv%2BcMGaWCApVbrNejrwdpMSkfUYFIs%2FgKJ7MdZQqaAYG0vSDcRVy4M0MRavbXCsALKJv0cpoj%2BUmVWRGlbr55vII1yQWHydroUF5VGIgsyaVtZvU9boMfQW4%2Fk%2BmyjLhIFkUqk1f8Bto1PROh%2Bt4efQY%2ByMIgFe26HHPv2ManXOukooL7iwV5XT0H7YUconK%2FVaKRkbLDi9bH5ta2yV7Fkp1o0NnD1xp0c7QDqHAxA8NIg3k9XItNo4YTnm%2FuJmkso%2BHFdjBVbwqE49cM45VbnCAd49NHvHIVn3h5bbBUH1wy0hQpC4voBE%2BdDO3lUAyR6fN7ciAaDfWYqXtOUEc6zQDJYKq%2F%2F0ybUb8ZUgsyROvS72YINtKU2murC3gFhrqDuugMSgFsfUYjeTBeAoHWfrf0v4JGeFpAdoLB9takRZecHaSJ09CxDHc9Na%2FAvt0FwBU43Z89no1bCdcAaZ9BnGRIkhfiJyDtd9zDaT8Wz2v6MOGy38QGOqUBC75fl2mw0nclOEJIRQI38lZV57rHlDI0DD%2F9z63f4zdXAm9hGaBXTWtmskcCnEsm9hRY0RewwxFtSWNVM5s9%2B5RmxsolKXPPWuEH8Rh1YIr9YqScew1cMcPIiGAtAHq2UNsvW4WAdGmyCRB9Ns4ph3k3zxbbV0d%2FCVi31rLdiseuZkXinftcq%2FFcbIbGYAzb8M0yJnDvx3yBF9FRVDRxaD0yu3Gj&X-Amz-Signature=02b46d934ab7ba844f3301626715202e47d97aa3e2c686a8d211c8026db11591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYSRGQV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsryZX3LihzmVoNsYK0LgdSZAEyrQdsbh%2BK5a76pMgZAiEAm%2F%2BEJOYQwfph2BUpYO4MacWdEmumwwu8CSt0v03hmgMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASuEJnWPds9XetahircA8jU9N5YTNnStzUGbIWGqX7tbLjZ8LrMPj1xHG5KcMslRY1P62Ej9P4NaW%2FbBuRGcZcIOhy8Jf7hxD0W%2BtwEsWzo2ojwJbIolIu%2BcR4EFjiS%2BIwCoL82BGlpJ%2FlBlaZIvLWkW6PkH2dgGB4kv%2BcMGaWCApVbrNejrwdpMSkfUYFIs%2FgKJ7MdZQqaAYG0vSDcRVy4M0MRavbXCsALKJv0cpoj%2BUmVWRGlbr55vII1yQWHydroUF5VGIgsyaVtZvU9boMfQW4%2Fk%2BmyjLhIFkUqk1f8Bto1PROh%2Bt4efQY%2ByMIgFe26HHPv2ManXOukooL7iwV5XT0H7YUconK%2FVaKRkbLDi9bH5ta2yV7Fkp1o0NnD1xp0c7QDqHAxA8NIg3k9XItNo4YTnm%2FuJmkso%2BHFdjBVbwqE49cM45VbnCAd49NHvHIVn3h5bbBUH1wy0hQpC4voBE%2BdDO3lUAyR6fN7ciAaDfWYqXtOUEc6zQDJYKq%2F%2F0ybUb8ZUgsyROvS72YINtKU2murC3gFhrqDuugMSgFsfUYjeTBeAoHWfrf0v4JGeFpAdoLB9takRZecHaSJ09CxDHc9Na%2FAvt0FwBU43Z89no1bCdcAaZ9BnGRIkhfiJyDtd9zDaT8Wz2v6MOGy38QGOqUBC75fl2mw0nclOEJIRQI38lZV57rHlDI0DD%2F9z63f4zdXAm9hGaBXTWtmskcCnEsm9hRY0RewwxFtSWNVM5s9%2B5RmxsolKXPPWuEH8Rh1YIr9YqScew1cMcPIiGAtAHq2UNsvW4WAdGmyCRB9Ns4ph3k3zxbbV0d%2FCVi31rLdiseuZkXinftcq%2FFcbIbGYAzb8M0yJnDvx3yBF9FRVDRxaD0yu3Gj&X-Amz-Signature=d0a0ef83d39084746c2deafbb389f96432f9ea167456cb270fd3ed4ddabb0076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYSRGQV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsryZX3LihzmVoNsYK0LgdSZAEyrQdsbh%2BK5a76pMgZAiEAm%2F%2BEJOYQwfph2BUpYO4MacWdEmumwwu8CSt0v03hmgMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASuEJnWPds9XetahircA8jU9N5YTNnStzUGbIWGqX7tbLjZ8LrMPj1xHG5KcMslRY1P62Ej9P4NaW%2FbBuRGcZcIOhy8Jf7hxD0W%2BtwEsWzo2ojwJbIolIu%2BcR4EFjiS%2BIwCoL82BGlpJ%2FlBlaZIvLWkW6PkH2dgGB4kv%2BcMGaWCApVbrNejrwdpMSkfUYFIs%2FgKJ7MdZQqaAYG0vSDcRVy4M0MRavbXCsALKJv0cpoj%2BUmVWRGlbr55vII1yQWHydroUF5VGIgsyaVtZvU9boMfQW4%2Fk%2BmyjLhIFkUqk1f8Bto1PROh%2Bt4efQY%2ByMIgFe26HHPv2ManXOukooL7iwV5XT0H7YUconK%2FVaKRkbLDi9bH5ta2yV7Fkp1o0NnD1xp0c7QDqHAxA8NIg3k9XItNo4YTnm%2FuJmkso%2BHFdjBVbwqE49cM45VbnCAd49NHvHIVn3h5bbBUH1wy0hQpC4voBE%2BdDO3lUAyR6fN7ciAaDfWYqXtOUEc6zQDJYKq%2F%2F0ybUb8ZUgsyROvS72YINtKU2murC3gFhrqDuugMSgFsfUYjeTBeAoHWfrf0v4JGeFpAdoLB9takRZecHaSJ09CxDHc9Na%2FAvt0FwBU43Z89no1bCdcAaZ9BnGRIkhfiJyDtd9zDaT8Wz2v6MOGy38QGOqUBC75fl2mw0nclOEJIRQI38lZV57rHlDI0DD%2F9z63f4zdXAm9hGaBXTWtmskcCnEsm9hRY0RewwxFtSWNVM5s9%2B5RmxsolKXPPWuEH8Rh1YIr9YqScew1cMcPIiGAtAHq2UNsvW4WAdGmyCRB9Ns4ph3k3zxbbV0d%2FCVi31rLdiseuZkXinftcq%2FFcbIbGYAzb8M0yJnDvx3yBF9FRVDRxaD0yu3Gj&X-Amz-Signature=71c2718bb0e0e2b674daf5dea73b6c174c5991ba56f2e883d15900ea2a353433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYSRGQV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsryZX3LihzmVoNsYK0LgdSZAEyrQdsbh%2BK5a76pMgZAiEAm%2F%2BEJOYQwfph2BUpYO4MacWdEmumwwu8CSt0v03hmgMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASuEJnWPds9XetahircA8jU9N5YTNnStzUGbIWGqX7tbLjZ8LrMPj1xHG5KcMslRY1P62Ej9P4NaW%2FbBuRGcZcIOhy8Jf7hxD0W%2BtwEsWzo2ojwJbIolIu%2BcR4EFjiS%2BIwCoL82BGlpJ%2FlBlaZIvLWkW6PkH2dgGB4kv%2BcMGaWCApVbrNejrwdpMSkfUYFIs%2FgKJ7MdZQqaAYG0vSDcRVy4M0MRavbXCsALKJv0cpoj%2BUmVWRGlbr55vII1yQWHydroUF5VGIgsyaVtZvU9boMfQW4%2Fk%2BmyjLhIFkUqk1f8Bto1PROh%2Bt4efQY%2ByMIgFe26HHPv2ManXOukooL7iwV5XT0H7YUconK%2FVaKRkbLDi9bH5ta2yV7Fkp1o0NnD1xp0c7QDqHAxA8NIg3k9XItNo4YTnm%2FuJmkso%2BHFdjBVbwqE49cM45VbnCAd49NHvHIVn3h5bbBUH1wy0hQpC4voBE%2BdDO3lUAyR6fN7ciAaDfWYqXtOUEc6zQDJYKq%2F%2F0ybUb8ZUgsyROvS72YINtKU2murC3gFhrqDuugMSgFsfUYjeTBeAoHWfrf0v4JGeFpAdoLB9takRZecHaSJ09CxDHc9Na%2FAvt0FwBU43Z89no1bCdcAaZ9BnGRIkhfiJyDtd9zDaT8Wz2v6MOGy38QGOqUBC75fl2mw0nclOEJIRQI38lZV57rHlDI0DD%2F9z63f4zdXAm9hGaBXTWtmskcCnEsm9hRY0RewwxFtSWNVM5s9%2B5RmxsolKXPPWuEH8Rh1YIr9YqScew1cMcPIiGAtAHq2UNsvW4WAdGmyCRB9Ns4ph3k3zxbbV0d%2FCVi31rLdiseuZkXinftcq%2FFcbIbGYAzb8M0yJnDvx3yBF9FRVDRxaD0yu3Gj&X-Amz-Signature=31345b45dde7f04bb4053c8566e50ffb6818f1ae5d61525bd2564177f1738d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYSRGQV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsryZX3LihzmVoNsYK0LgdSZAEyrQdsbh%2BK5a76pMgZAiEAm%2F%2BEJOYQwfph2BUpYO4MacWdEmumwwu8CSt0v03hmgMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASuEJnWPds9XetahircA8jU9N5YTNnStzUGbIWGqX7tbLjZ8LrMPj1xHG5KcMslRY1P62Ej9P4NaW%2FbBuRGcZcIOhy8Jf7hxD0W%2BtwEsWzo2ojwJbIolIu%2BcR4EFjiS%2BIwCoL82BGlpJ%2FlBlaZIvLWkW6PkH2dgGB4kv%2BcMGaWCApVbrNejrwdpMSkfUYFIs%2FgKJ7MdZQqaAYG0vSDcRVy4M0MRavbXCsALKJv0cpoj%2BUmVWRGlbr55vII1yQWHydroUF5VGIgsyaVtZvU9boMfQW4%2Fk%2BmyjLhIFkUqk1f8Bto1PROh%2Bt4efQY%2ByMIgFe26HHPv2ManXOukooL7iwV5XT0H7YUconK%2FVaKRkbLDi9bH5ta2yV7Fkp1o0NnD1xp0c7QDqHAxA8NIg3k9XItNo4YTnm%2FuJmkso%2BHFdjBVbwqE49cM45VbnCAd49NHvHIVn3h5bbBUH1wy0hQpC4voBE%2BdDO3lUAyR6fN7ciAaDfWYqXtOUEc6zQDJYKq%2F%2F0ybUb8ZUgsyROvS72YINtKU2murC3gFhrqDuugMSgFsfUYjeTBeAoHWfrf0v4JGeFpAdoLB9takRZecHaSJ09CxDHc9Na%2FAvt0FwBU43Z89no1bCdcAaZ9BnGRIkhfiJyDtd9zDaT8Wz2v6MOGy38QGOqUBC75fl2mw0nclOEJIRQI38lZV57rHlDI0DD%2F9z63f4zdXAm9hGaBXTWtmskcCnEsm9hRY0RewwxFtSWNVM5s9%2B5RmxsolKXPPWuEH8Rh1YIr9YqScew1cMcPIiGAtAHq2UNsvW4WAdGmyCRB9Ns4ph3k3zxbbV0d%2FCVi31rLdiseuZkXinftcq%2FFcbIbGYAzb8M0yJnDvx3yBF9FRVDRxaD0yu3Gj&X-Amz-Signature=51c8d89a3971aaf8584566b4e4fc7b81a94e8977babe977cc9ea78816c83b860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
